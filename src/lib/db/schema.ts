// /src/lib/db/schema.ts

import { sql, eq, asc, desc, exists, and, inArray, or } from 'drizzle-orm';
import {
	text,
	uuid,
	integer,
	timestamp,
	boolean,
	primaryKey,
	check,
	foreignKey,
	pgTable,
	unique,
	jsonb,
	json,
	pgEnum,
	interval,
	index,
	pgView,
	bigint,
	pgPolicy,
} from 'drizzle-orm/pg-core';
import { authenticatedRole, anonRole, authUsers } from 'drizzle-orm/supabase';
import { type InferSelectModel, type InferInsertModel } from 'drizzle-orm';
// const usersTable = authSchema.table('users', {
// 	id: uuid().primaryKey(),
// });

export const questStatusEnum = pgEnum('quest_status_type', [
	'unverified',
	'verified',
	'duplicate',
	'disputed',
]);

export const penaltyTypeEnum = pgEnum('penalty_type', [
	'warning',
	'timeout', // from submitting quests
	'suspension',
	'termination',
]);

export const penaltyStatusEnum = pgEnum('penalty_status', [
	'pending',
	'active',
	'completed',
	'appealed',
	'cancelled',
]);

export const accessRestrictionEnum = pgEnum('access_restriction', [
	'full_block', // Can only see penalty page (suspension/termination)
	'limited_access', //  Reduced functionality (timeout)
	'warning_only', // Full access after acknowledgment (warning)
	'none', //  No restrictions
]);

export const activityTypeEnum = pgEnum('activity_type', [
	'run_submission',
	'set_submission',
	'new_follower',
	'follow_user',
	'world_record',
	'personal_best',
	'trophy',
	'achievement',
	'title',
	'emblem',
	'theme',
	'profile_update',
	'run_reaction',
	'favorite_set',
	'favorite_run',
	'donation',
]);

// export const anonRole = pgRole('anon').existing();
// export const authenticatedRole = pgRole('authenticated').existing();
// export const serviceRole = pgRole('service_role').existing();
// export const postgresRole = pgRole('postgres_role').existing();
// export const supabaseAuthAdminRole = pgRole('supabase_auth_admin').existing();

/**Add restriction configurations for penalty types */
export const penaltyTypeConfigurationTable = pgTable(
	'penalty_type_configuration',
	{
		id: uuid().primaryKey().defaultRandom(),
		penalty_type: penaltyTypeEnum().unique().notNull(),
		requires_acknowledgment: boolean().notNull().default(true),
		access_level: accessRestrictionEnum().notNull(),
		can_browse_after_acknowledgment: boolean().default(false),
		description: text(),
		created_at: timestamp('created_at', { withTimezone: true })
			.notNull()
			.defaultNow(),
	},
).enableRLS(); // seed inserts

export const profilesTable = pgTable(
	'profiles',
	{
		id: uuid()
			.primaryKey()
			.references(() => authUsers.id, { onDelete: 'cascade' })
			.notNull(),
		discord_username: text().notNull(),
		discord_avatar: text(), // can be null from discord user. TODO test if sign up updates auth.users or we have to add a trigger.
		username: text().notNull().unique(), // default is discord snowflake from user_metadata.provider_id
		// they can just link it in their youtube channel
		// twitter_username: text().notNull().default(''),
		avatar: text().notNull().default('Default'), // the main avatar used publicly
		updated_at: timestamp('updated_at', { withTimezone: true, mode: 'string' })
			.notNull()
			.defaultNow()
			.$onUpdateFn(() => sql`now()`),
		join_date: timestamp('join_date', { withTimezone: true })
			.notNull()
			.defaultNow(),
		emblem: text().notNull().default('None'),
		title: text().notNull().default('None'),
		country: text().notNull().default('World'), // list from external library

		// By armor set ID
		// TODO see wardrobe
		// favorite_gear: integer()
		// 	.array()
		// 	.notNull()
		// 	.default(sql`ARRAY[]::integer[]`),
		private: boolean().notNull().default(false),
		private_servers: text()
			.array()
			.notNull()
			.default(sql`ARRAY[]::text[]`),
		/**This is TOS and Privacy Policy, whichever is updated first. We check if users can submit speedruns by comparing this with termsDates.x */
		agreed_terms: timestamp('agreed_terms', { withTimezone: true })
			.notNull()
			.defaultNow(),
		discord_username_shown: boolean().notNull().default(false),
		// twitter_username_shown: boolean()
		// 	.notNull()
		// 	.default(false),
		theme: text().notNull().default('Default'),
		guild_card_theme: text().notNull().default('Default'),
		username_set: boolean().notNull().default(false),
		// TODO mode string?
		username_set_date: timestamp('username_set_date', { withTimezone: true })
			.notNull()
			.defaultNow(),
		/**last quest submission date */
		quest_published_date: timestamp('quest_published_date', {
			withTimezone: true,
			mode: 'string',
		}),
		moderator_badge_shown: boolean().notNull().default(false),
	},
	(t) => [
		pgPolicy(`Table is viewable by everyone`, {
			as: 'permissive',
			for: 'select',
			to: [anonRole, authenticatedRole],
			using: sql`true`,
		}),
		pgPolicy('Allow authenticated to insert only their table rows', {
			as: 'permissive',
			for: 'insert',
			to: authenticatedRole,
			withCheck: sql`(select auth.uid()) = id`,
		}),
		pgPolicy('Allow authenticated to update only their table rows', {
			as: 'permissive',
			for: 'update',
			to: authenticatedRole,
			using: sql`(select auth.uid()) = id`,
			withCheck: sql`(select auth.uid()) = id`,
		}),
	],
).enableRLS();

/** TODO comment this after test is done*/
export const countriesTable = pgTable(
	'countries',
	{
		id: integer().primaryKey().generatedAlwaysAsIdentity(),
		name: text().notNull(),
	},
	(t) => [
		pgPolicy(`Allow moderators to see any table row`, {
			as: 'permissive',
			for: 'select',
			to: authenticatedRole,
			using: sql`(select get_my_claim('user_role')) = '"moderator"'`,
		}),
	],
).enableRLS();

/**  Penalty reasons/rules reference table*/
export const penaltyReasonsTable = pgTable(
	'penalty_reasons',
	{
		id: uuid().primaryKey().defaultRandom(),
		name: text().notNull(),
		description: text().notNull().default(''),
		default_duration: interval(),
		default_penalty_type: penaltyTypeEnum(),
		severity_level: integer(),
		created_at: timestamp('created_at', { withTimezone: true }).defaultNow(),
		is_active: boolean().default(true),
	},
	(t) => [
		check(
			'penalty_reasons_check_severity_level',
			sql`${t.severity_level} BETWEEN 1 AND 5`, // TODO test
		),
		pgPolicy(`Allow moderators to see any table row`, {
			as: 'permissive',
			for: 'select',
			to: authenticatedRole,
			using: sql`(select get_my_claim('user_role')) = '"moderator"'`,
		}),
		pgPolicy(`Allow moderators to update any table row`, {
			as: 'permissive',
			for: 'update',
			to: authenticatedRole,
			using: sql`(select get_my_claim('user_role')) = '"moderator"'`,
			withCheck: sql`(select get_my_claim('user_role')) = '"moderator"'`,
		}),
		pgPolicy(`Allow moderators to insert any table row`, {
			as: 'permissive',
			for: 'insert',
			to: authenticatedRole,
			withCheck: sql`(select get_my_claim('user_role')) = '"moderator"'`,
		}),
	],
).enableRLS();

export const userPenaltiesTable = pgTable(
	'user_penalties',
	{
		id: uuid().primaryKey().defaultRandom(),
		user_id: uuid().notNull(),
		reason_id: uuid().references(() => penaltyReasonsTable.id, {
			onDelete: 'cascade',
		}),
		penalty_type: penaltyTypeEnum().notNull(),
		status: penaltyStatusEnum().default('pending'),
		notes: text().notNull().default(''),
		issued_by: uuid().notNull(),
		issued_at: timestamp('issued_at', { withTimezone: true }).defaultNow(),
		starts_at: timestamp('starts_at', { withTimezone: true }).notNull(),
		ends_at: timestamp('ends_at', { withTimezone: true, mode: 'string' }),
		actual_end_at: timestamp('actual_end_at', {
			withTimezone: true,
			mode: 'string',
		}),
		created_at: timestamp('created_at', { withTimezone: true }).defaultNow(),
		updated_at: timestamp('updated_at', { withTimezone: true, mode: 'string' })
			.defaultNow()
			.$onUpdateFn(() => sql`now()`),

		// severity_level: integer(),
		// is_active: boolean().default(true),
	},
	(t) => [
		// Indexes for better query performance
		index('idx_user_penalties_user_id').on(t.user_id),
		index('idx_user_penalties_status').on(t.status),
		index('idx_user_penalties_reason_id').on(t.reason_id),
		check('check_penalty_dates', sql`${t.ends_at} > ${t.starts_at}`),
		check('check_actual_end', sql`${t.actual_end_at} >= ${t.starts_at}`),
		pgPolicy(`Allow moderators to see any table row`, {
			as: 'permissive',
			for: 'select',
			to: authenticatedRole,
			using: sql`(select get_my_claim('user_role')) = '"moderator"'`,
		}),
		pgPolicy(`Allow moderators to update any table row`, {
			as: 'permissive',
			for: 'update',
			to: authenticatedRole,
			using: sql`(select get_my_claim('user_role')) = '"moderator"'`,
			withCheck: sql`(select get_my_claim('user_role')) = '"moderator"'`,
		}),
		pgPolicy(`Allow moderators to insert any table row`, {
			as: 'permissive',
			for: 'insert',
			to: authenticatedRole,
			withCheck: sql`(select get_my_claim('user_role')) = '"moderator"'`,
		}),
	],
).enableRLS();

export const penaltyAppealsTable = pgTable(
	'penalty_appeals',
	{
		id: uuid().primaryKey().defaultRandom(),
		user_id: uuid().notNull(),
		penalty_id: uuid().references(() => userPenaltiesTable.id, {
			onDelete: 'cascade',
		}),
		appeal_reason: text().notNull().default(''),
		status: text().notNull().default('pending'), // TODO?
		reviewed_by: uuid(),
		reviewed_at: timestamp('reviewed_at', {
			withTimezone: true,
			mode: 'string',
		}),
		decision: text(),
		created_at: timestamp('created_at', { withTimezone: true })
			.notNull()
			.defaultNow(),
		updated_at: timestamp('updated_at', { withTimezone: true, mode: 'string' })
			.notNull()
			.defaultNow()
			.$onUpdateFn(() => sql`now()`),
	},
	(t) => [
		// Indexes for better query performance
		index('idx_penalty_appeals_penalty_id').on(t.penalty_id),
		pgPolicy(`Allow moderators to see any table row`, {
			for: 'select',
			to: authenticatedRole,
			using: sql`(select get_my_claim('user_role')) = '"moderator"'`,
		}),
		pgPolicy(`Allow moderators to update any table row`, {
			as: 'permissive',
			for: 'update',
			to: authenticatedRole,
			using: sql`(select get_my_claim('user_role')) = '"moderator"'`,
			withCheck: sql`(select get_my_claim('user_role')) = '"moderator"'`,
		}),
		pgPolicy(`Allow authenticated to insert only their table rows`, {
			as: 'permissive',
			for: 'insert',
			to: authenticatedRole,
			withCheck: sql`(select auth.uid()) = user_id`,
		}),
	],
).enableRLS();

/**Penalty history table for audit trail */
export const penaltyHistoryTable = pgTable(
	'penalty_history',
	{
		id: uuid().primaryKey().defaultRandom(),
		changed_by: uuid(),
		penalty_id: uuid().references(() => userPenaltiesTable.id, {
			onDelete: 'cascade',
		}),
		change_type: text().notNull(),
		old_values: jsonb(),
		new_values: jsonb(),
		change_reason: text(),
		created_at: timestamp('created_at', { withTimezone: true })
			.notNull()
			.defaultNow(),
	},
	(t) => [
		// Indexes for better query performance
		index('idx_penalty_history_penalty_id').on(t.penalty_id),
		pgPolicy(`Allow moderators to see any table row`, {
			as: 'permissive',
			for: 'select',
			to: authenticatedRole,
			using: sql`(select get_my_claim('user_role')) = '"moderator"'`,
		}),
	],
).enableRLS();

/**Table for tracking penalty acknowledgments */
export const penaltyAcknowledgmentsTable = pgTable(
	'penalty_acknowledgments',
	{
		id: uuid().primaryKey().defaultRandom(),
		penalty_id: uuid().references(() => userPenaltiesTable.id),
		user_id: uuid().notNull(),
		acknowledgment_text: text().notNull(),
		acknowledged_at: timestamp('acknowledged_at', {
			withTimezone: true,
			mode: 'string',
		}),
		created_at: timestamp('created_at ', { withTimezone: true })
			.notNull()
			.defaultNow(),
	},
	(table) => [
		index('idx_penalty_acknowledgments_penalty_id').on(table.penalty_id),
		index('idx_penalty_acknowledgments_user_id').on(table.user_id),
		pgPolicy(`Allow moderators to see any table row`, {
			as: 'permissive',
			for: 'select',
			to: authenticatedRole,
			using: sql`(select get_my_claim('user_role')) = '"moderator"'`,
		}),
		pgPolicy(`Allow moderators to insert any table row`, {
			as: 'permissive',
			for: 'insert',
			to: authenticatedRole,
			withCheck: sql`(select get_my_claim('user_role')) = '"moderator"'`,
		}),
		pgPolicy(`Allow authenticated to see only their table rows`, {
			as: 'permissive',
			for: 'select',
			to: authenticatedRole,
			using: sql`(select auth.uid()) = user_id`,
		}),
		pgPolicy(`Allow authenticated to update only their table rows`, {
			as: 'permissive',
			for: 'update',
			to: authenticatedRole,
			using: sql`(select auth.uid()) = user_id`,
			withCheck: sql`(select auth.uid()) = user_id`,
		}),
	],
).enableRLS();

/**Table for tracking restricted functionality during timeout */
export const timeoutRestrictionsTable = pgTable(
	'timeout_restrictions',
	{
		id: uuid().primaryKey().defaultRandom(),
		penalty_id: uuid().references(() => userPenaltiesTable.id),
		feature_name: text().notNull(),
		is_restricted: boolean().notNull().default(true),
		restriction_reason: text().notNull().default(''),
		created_at: timestamp('created_at ', { withTimezone: true })
			.notNull()
			.defaultNow(),
	},
	(t) => [
		// pgPolicy(`Allow authenticated to see only their table rows`, {
		// 	as: 'permissive',
		// 	for: 'select',
		// 	to: authenticatedRole,
		// 	using: sql`(select auth.uid()) = user_id`,
		// }),
		index('idx_timeout_restrictions_penalty_id').on(t.penalty_id),
		pgPolicy(`Allow moderators to see any table row`, {
			as: 'permissive',
			for: 'select',
			to: authenticatedRole,
			using: sql`(select get_my_claim('user_role')) = '"moderator"'`,
		}),
		pgPolicy(`Allow moderators to insert any table row`, {
			as: 'permissive',
			for: 'insert',
			to: authenticatedRole,
			withCheck: sql`(select get_my_claim('user_role')) = '"moderator"'`,
		}),
		pgPolicy(`Allow moderators to update any table row`, {
			as: 'permissive',
			for: 'update',
			to: authenticatedRole,
			using: sql`(select get_my_claim('user_role')) = '"moderator"'`,
			withCheck: sql`(select get_my_claim('user_role')) = '"moderator"'`,
		}),
	],
).enableRLS();

// TODO wardrobe table
// should be done after WASS?
// then we can just have fields like the gear pieces and the frontend calculates skill points.
// and you wont need to do a quest in order to share an armor set.

export const questsTable = pgTable(
	'quests',
	{
		id: integer().generatedAlwaysAsIdentity(), // authenticated users can submit multiple sqlite files with the same run id, so quest_hash is used instead. this run_id is from supabase insertions, so its global rather than per user.
		profile_id: uuid()
			.references(() => profilesTable.id, { onDelete: 'cascade' })
			.notNull(),
		// SpeedrunInfo Fields
		active_skill1_id: integer().notNull(),
		active_skill2_id: integer().notNull(),
		active_skill3_id: integer().notNull(),
		active_skill4_id: integer().notNull(),
		active_skill5_id: integer().notNull(),
		active_skill6_id: integer().notNull(),
		active_skill7_id: integer().notNull(),
		active_skill8_id: integer().notNull(),
		active_skill9_id: integer().notNull(),
		active_skill10_id: integer().notNull(),
		active_skill11_id: integer().notNull(),
		active_skill12_id: integer().notNull(),
		active_skill13_id: integer().notNull(),
		active_skill14_id: integer().notNull(),
		active_skill15_id: integer().notNull(),
		active_skill16_id: integer().notNull(),
		active_skill17_id: integer().notNull(),
		active_skill18_id: integer().notNull(),
		active_skill19_id: integer().notNull(),

		automatic_skill1_id: integer().notNull(),
		automatic_skill2_id: integer().notNull(),
		automatic_skill3_id: integer().notNull(),
		automatic_skill4_id: integer().notNull(),
		automatic_skill5_id: integer().notNull(),
		automatic_skill6_id: integer().notNull(),

		caravan_skill1_id: integer().notNull(),
		caravan_skill2_id: integer().notNull(),
		caravan_skill3_id: integer().notNull(),

		mhfdat_hash: text().notNull(),
		mhfemd_hash: text().notNull(),
		mhfsqd_hash: text().notNull(),
		mhfinf_hash: text().notNull(),
		mhfodll_hash: text().notNull(),
		mhfohddll_hash: text().notNull(),
		mhfexe_hash: text().notNull(),

		style_id: integer().notNull(),
		weapon_type_id: integer().notNull(),
		blademaster_weapon_id: integer(),
		gunner_weapon_id: integer(),

		weapon_slot1: text().notNull(),
		weapon_slot2: text().notNull(),
		weapon_slot3: text().notNull(),

		head_id: integer().notNull(),
		head_slot1_id: integer().notNull(),
		head_slot2_id: integer().notNull(),
		head_slot3_id: integer().notNull(),

		chest_id: integer().notNull(),
		chest_slot1_id: integer().notNull(),
		chest_slot2_id: integer().notNull(),
		chest_slot3_id: integer().notNull(),

		arms_id: integer().notNull(),
		arms_slot1_id: integer().notNull(),
		arms_slot2_id: integer().notNull(),
		arms_slot3_id: integer().notNull(),

		waist_id: integer().notNull(),
		waist_slot1_id: integer().notNull(),
		waist_slot2_id: integer().notNull(),
		waist_slot3_id: integer().notNull(),

		legs_id: integer().notNull(),
		legs_slot1_id: integer().notNull(),
		legs_slot2_id: integer().notNull(),
		legs_slot3_id: integer().notNull(),

		cuff1_id: integer().notNull(),
		cuff2_id: integer().notNull(),

		diva_skill_id: integer().notNull(),
		guild_food_id: integer().notNull(),
		poogie_item_id: integer().notNull(),

		// JSON-encoded Dictionaries
		player_inventory_dictionary: text().notNull(),
		player_ammo_pouch_dictionary: text().notNull(),
		partnya_bag_dictionary: text().notNull(),

		// Quest Data
		created_at: timestamp('created_at', { withTimezone: true }).notNull(),
		overlay_version: text().notNull(), // CreatedBy
		quest_hash: text().notNull(),
		quest_id: integer().notNull(),
		time_left: integer().notNull(),
		final_time_value: integer().notNull(),
		final_time_display: text().notNull(),
		objetive_type_id: integer().notNull(),
		objective_quantity: integer().notNull(),
		star_grade: integer().notNull(),
		rank_name: text().notNull(),
		objective_name: text().notNull(),
		attack_buff_dictionary: text().notNull(),
		hit_count_dictionary: text().notNull(),
		hits_per_second_dictionary: text().notNull(),
		damage_dealt_dictionary: text().notNull(),
		damage_per_second_dictionary: text().notNull(),
		area_changes_dictionary: text().notNull(),
		carts_dictionary: text().notNull(),
		hits_taken_blocked_dictionary: text().notNull(),
		hits_taken_blocked_per_second_dictionary: text().notNull(),
		player_hp_dictionary: text().notNull(),
		player_stamina_dictionary: text().notNull(),
		keystrokes_dictionary: text().notNull(),
		mouse_input_dictionary: text().notNull(),
		gamepad_input_dictionary: text().notNull(),
		actions_per_minute_dictionary: text().notNull(),
		overlay_mode_dictionary: text().notNull(),
		actual_overlay_mode: text().notNull(),
		party_size: integer().notNull(),
		monster1_hp_dictionary: text().notNull(),
		monster2_hp_dictionary: text().notNull(),
		monster3_hp_dictionary: text().notNull(),
		monster4_hp_dictionary: text().notNull(),
		monster1_attack_multiplier_dictionary: text().notNull(),
		monster1_defense_rate_dictionary: text().notNull(),
		monster1_size_multiplier_dictionary: text().notNull(),
		monster1_poison_threshold_dictionary: text().notNull(),
		monster1_paralysis_threshold_dictionary: text().notNull(),
		monster1_sleep_threshold_dictionary: text().notNull(),
		monster1_blast_threshold_dictionary: text().notNull(),
		monster1_stun_threshold_dictionary: text().notNull(),
		monster1_part_threshold_dictionary: text().notNull(),
		monster2_part_threshold_dictionary: text().notNull(),

		is_high_grade_edition: boolean().notNull(),
		refresh_rate: integer().notNull(),
		party_size_dictonary: text().notNull(),

		active_feature: integer(),
		rights: integer(),
		diva_song_buff_on: boolean(),
		diva_prayer_gem_red_skill: integer(),
		diva_prayer_gem_red_level: integer(),
		diva_prayer_gem_yellow_skill: integer(),
		diva_prayer_gem_yellow_level: integer(),
		diva_prayer_gem_green_skill: integer(),
		diva_prayer_gem_green_level: integer(),
		diva_prayer_gem_blue_skill: integer(),
		diva_prayer_gem_blue_level: integer(),

		mhfdat_info: text(),
		mhfemd_info: text(),
		mhfodll_info: text(),
		mhfohddll_info: text(),

		guild_poogie1_skill: integer(),
		guild_poogie2_skill: integer(),
		guild_poogie3_skill: integer(),

		halk_on: boolean(),
		halk_pot_effect_on: boolean(),
		halk_fullness: integer(),
		halk_level: integer(),
		halk_intimacy: integer(),
		halk_health: integer(),
		halk_attack: integer(),
		halk_defense: integer(),
		halk_intellect: integer(),
		halk_skill1: integer(),
		halk_skill2: integer(),
		halk_skill3: integer(),
		halk_element_none: integer(),
		halk_fire: integer(),
		halk_water: integer(),
		halk_thunder: integer(),
		halk_ice: integer(),
		halk_dragon: integer(),
		halk_poison: integer(),
		halk_sleep: integer(),
		halk_paralysis: integer(),

		overlay_hash: text(),

		quest_variant1: integer(),
		quest_variant2: integer(),
		quest_variant3: integer(),
		quest_variant4: integer(),

		run_buffs: integer(),
		run_buffs_tag: text(), // number | tags | null (number is filtered out)
		quest_toggle_mode: integer(),
		dual_swords_sharpens_dictionary: text().notNull(), // also used in other weapons
		road_dure_skill1_id: integer().notNull(),
		road_dure_skill1_level: integer().notNull(),
		road_dure_skill2_id: integer().notNull(),
		road_dure_skill2_level: integer().notNull(),
		road_dure_skill3_id: integer().notNull(),
		road_dure_skill3_level: integer().notNull(),
		road_dure_skill4_id: integer().notNull(),
		road_dure_skill4_level: integer().notNull(),
		road_dure_skill5_id: integer().notNull(),
		road_dure_skill5_level: integer().notNull(),
		road_dure_skill6_id: integer().notNull(),
		road_dure_skill6_level: integer().notNull(),
		road_dure_skill7_id: integer().notNull(),
		road_dure_skill7_level: integer().notNull(),
		road_dure_skill8_id: integer().notNull(),
		road_dure_skill8_level: integer().notNull(),
		road_dure_skill9_id: integer().notNull(),
		road_dure_skill9_level: integer().notNull(),
		road_dure_skill10_id: integer().notNull(),
		road_dure_skill10_level: integer().notNull(),
		road_dure_skill11_id: integer().notNull(),
		road_dure_skill11_level: integer().notNull(),
		road_dure_skill12_id: integer().notNull(),
		road_dure_skill12_level: integer().notNull(),
		road_dure_skill13_id: integer().notNull(),
		road_dure_skill13_level: integer().notNull(),
		road_dure_skill14_id: integer().notNull(),
		road_dure_skill14_level: integer().notNull(),
		road_dure_skill15_id: integer().notNull(),
		road_dure_skill15_level: integer().notNull(),
		road_dure_skill16_id: integer().notNull(),
		road_dure_skill16_level: integer().notNull(),

		style_rank_skill1_id: integer().notNull(),
		style_rank_skill2_id: integer().notNull(),

		zenith_skill1_id: integer().notNull(),
		zenith_skill2_id: integer().notNull(),
		zenith_skill3_id: integer().notNull(),
		zenith_skill4_id: integer().notNull(),
		zenith_skill5_id: integer().notNull(),
		zenith_skill6_id: integer().notNull(),
		zenith_skill7_id: integer().notNull(),

		// Other Properties
	},
	(table) => [
		primaryKey({ columns: [table.quest_hash, table.profile_id] }), // on conflict do nothing
		index('idx_quests_profile_id').on(table.profile_id),
		pgPolicy(`Table is viewable by everyone`, {
			as: 'permissive',
			for: 'select',
			to: [anonRole, authenticatedRole],
			using: sql`true`,
		}),
		// Insert policy - optimized to avoid joins
		pgPolicy(
			'Authenticated users who set a public profile can insert their own row',
			{
				as: 'permissive',
				for: 'insert',
				to: authenticatedRole,
				withCheck: sql`
			(select auth.uid()) = profile_id
			and (
				select username_set
				from profiles
				where id = (select auth.uid())
				limit 1
			) = true`,
			},
		),
	],
).enableRLS();

export const followersTable = pgTable(
	'followers',
	{
		profile_id: uuid()
			.references(() => profilesTable.id, { onDelete: 'cascade' })
			.notNull(),
		follower_id: uuid()
			.references(() => profilesTable.id, { onDelete: 'cascade' })
			.notNull(),
		followed_date: timestamp('followed_date', { withTimezone: true })
			.notNull()
			.defaultNow(),
	},
	(table) => [
		primaryKey({ columns: [table.profile_id, table.follower_id] }), // on conflict do nothing
		index('idx_followers_profile_id').on(table.profile_id),
		index('idx_followers_follower_id').on(table.follower_id),
		pgPolicy(`Table is viewable by everyone`, {
			as: 'permissive',
			for: 'select',
			to: [anonRole, authenticatedRole],
			using: sql`true`,
		}),
		pgPolicy(
			'Authenticated users who set a public profile can insert their own row',
			{
				as: 'permissive',
				for: 'insert',
				to: authenticatedRole,
				withCheck: sql`
			(select auth.uid()) = profile_id
			and (
				select username_set
				from profiles
				where id = (select auth.uid())
				limit 1
			) = true`,
			},
		),
		pgPolicy(
			'Authenticated users who set a public profile can delete their own row',
			{
				as: 'permissive',
				for: 'delete',
				to: authenticatedRole,
				using: sql`
			(select auth.uid()) = profile_id
			and (
				select username_set
				from profiles
				where id = (select auth.uid())
				limit 1
			) = true`,
			},
		),
	],
).enableRLS();

export const favoriteQuestsTable = pgTable(
	'favorite_quests',
	{
		profile_id: uuid()
			.references(() => profilesTable.id, { onDelete: 'cascade' })
			.notNull(),
		quest_hash: text().notNull(),
		quest_profile_id: uuid().notNull(),
		favorited_date: timestamp('favorited_date', { withTimezone: true })
			.notNull()
			.defaultNow(),
	},
	(table) => [
		// Primary key on all three columns
		primaryKey({
			columns: [table.profile_id, table.quest_hash, table.quest_profile_id],
		}),
		// Composite foreign key reference to quests table
		foreignKey({
			columns: [table.quest_hash, table.quest_profile_id],
			foreignColumns: [questsTable.quest_hash, questsTable.profile_id],
		}).onDelete('cascade'),
		index('idx_favorite_quests_profile_id').on(table.profile_id),
		index('idx_favorite_quests_quest_hash_profile_id').on(
			table.quest_hash,
			table.profile_id,
		),
		pgPolicy(`Table is viewable by everyone`, {
			as: 'permissive',
			for: 'select',
			to: [anonRole, authenticatedRole],
			using: sql`true`,
		}),
		pgPolicy(
			'Authenticated users who set a public profile can insert their own row',
			{
				as: 'permissive',
				for: 'insert',
				to: authenticatedRole,
				withCheck: sql`
			(select auth.uid()) = profile_id
			and (
				select username_set
				from profiles
				where id = (select auth.uid())
				limit 1
			) = true`,
			},
		),
		pgPolicy(
			'Authenticated users who set a public profile can delete their own row',
			{
				as: 'permissive',
				for: 'delete',
				to: authenticatedRole,
				using: sql`
			(select auth.uid()) = profile_id
			and (
				select username_set
				from profiles
				where id = (select auth.uid())
				limit 1
			) = true`,
			},
		),
	],
).enableRLS();

export const questReactionsTable = pgTable(
	'quest_reactions',
	{
		profile_id: uuid()
			.references(() => profilesTable.id, { onDelete: 'cascade' })
			.notNull(),
		quest_hash: text().notNull(),
		quest_profile_id: uuid().notNull(),
		reacted_at: timestamp('reacted_at', { withTimezone: true })
			.notNull()
			.defaultNow(),
		reaction: text().notNull(),
	},
	(table) => [
		// Primary key on all three columns
		primaryKey({
			columns: [
				table.profile_id,
				table.quest_hash,
				table.quest_profile_id,
				table.reaction,
			],
		}),
		// Composite foreign key reference to quests table
		foreignKey({
			columns: [table.quest_hash, table.quest_profile_id],
			foreignColumns: [questsTable.quest_hash, questsTable.profile_id],
		}).onDelete('cascade'),
		index('idx_quest_reactions_profile_id').on(table.profile_id),
		index('idx_quest_reactions_quest_hash_profile_id').on(
			table.quest_hash,
			table.profile_id,
		),
		pgPolicy(`Table is viewable by everyone`, {
			as: 'permissive',
			for: 'select',
			to: [anonRole, authenticatedRole],
			using: sql`true`,
		}),
		pgPolicy(
			'Authenticated users who set a public profile can insert their own row',
			{
				as: 'permissive',
				for: 'insert',
				to: authenticatedRole,
				withCheck: sql`
			(select auth.uid()) = profile_id
			and (
				select username_set
				from profiles
				where id = (select auth.uid())
				limit 1
			) = true`,
			},
		),
		pgPolicy(
			'Authenticated users who set a public profile can delete their own row',
			{
				as: 'permissive',
				for: 'delete',
				to: authenticatedRole,
				using: sql`
			(select auth.uid()) = profile_id
			and (
				select username_set
				from profiles
				where id = (select auth.uid())
				limit 1
			) = true`,
			},
		),
	],
).enableRLS();

/**Only user's own quests can be pinned. */
export const pinnedQuestsTable = pgTable(
	'pinned_quests',
	{
		profile_id: uuid()
			.references(() => profilesTable.id, { onDelete: 'cascade' })
			.notNull(),
		quest_hash: text().notNull(),
		quest_profile_id: uuid().notNull(),
		pinned_date: timestamp('pinned_date', { withTimezone: true })
			.notNull()
			.defaultNow(),
	},
	(table) => [
		// Primary key on all three columns
		primaryKey({
			columns: [table.profile_id, table.quest_hash, table.quest_profile_id],
		}),
		// Composite foreign key reference to quests table
		foreignKey({
			columns: [table.quest_hash, table.quest_profile_id],
			foreignColumns: [questsTable.quest_hash, questsTable.profile_id],
		}).onDelete('cascade'),
		index('idx_pinned_quests_profile_id').on(table.profile_id),
		index('idx_pinned_quests_quest_hash_profile_id').on(
			table.quest_hash,
			table.profile_id,
		),
		pgPolicy(`Table is viewable by everyone`, {
			as: 'permissive',
			for: 'select',
			to: [anonRole, authenticatedRole],
			using: sql`true`,
		}),
		pgPolicy(
			'Authenticated users who set a public profile can insert their own row',
			{
				as: 'permissive',
				for: 'insert',
				to: authenticatedRole,
				withCheck: sql`
			(select auth.uid()) = profile_id
			and (
				select username_set
				from profiles
				where id = (select auth.uid())
				limit 1
			) = true`,
			},
		),
		pgPolicy(
			'Authenticated users who set a public profile can delete their own row',
			{
				as: 'permissive',
				for: 'delete',
				to: authenticatedRole,
				using: sql`
			(select auth.uid()) = profile_id
			and (
				select username_set
				from profiles
				where id = (select auth.uid())
				limit 1
			) = true`,
			},
		),
	],
).enableRLS();

export const achievementsTable = pgTable(
	'achievements',
	{
		achievement_id: integer().notNull(),
		completion_date: timestamp('completion_date', { withTimezone: true })
			.notNull()
			.defaultNow(), // this is not the completion date in the sqlite file but in supabase insertion.
		profile_id: uuid()
			.references(() => profilesTable.id, { onDelete: 'cascade' })
			.notNull(),
	},
	(table) => [
		primaryKey({ columns: [table.achievement_id, table.profile_id] }), // on conflict do nothing
		index('idx_achievements_profile_id').on(table.profile_id),
		pgPolicy(`Table is viewable by everyone`, {
			as: 'permissive',
			for: 'select',
			to: [anonRole, authenticatedRole],
			using: sql`true`,
		}),
		pgPolicy(
			'Authenticated users who set a public profile can insert their own row',
			{
				as: 'permissive',
				for: 'insert',
				to: authenticatedRole,
				withCheck: sql`
			(select auth.uid()) = profile_id
			and (
				select username_set
				from profiles
				where id = (select auth.uid())
				limit 1
			) = true`,
			},
		),
	],
).enableRLS();

export const profileAvatarsTable = pgTable(
	'profile_avatars',
	{
		profile_avatar_id: integer().notNull(),
		obtained_date: timestamp('obtained_date', { withTimezone: true })
			.notNull()
			.defaultNow(), // this is not the completion date in the sqlite file but in supabase insertion.
		profile_id: uuid()
			.references(() => profilesTable.id, { onDelete: 'cascade' })
			.notNull(),
	},
	(table) => [
		primaryKey({ columns: [table.profile_avatar_id, table.profile_id] }), // on conflict do nothing
		index('idx_profile_avatars_profile_id').on(table.profile_id),
		pgPolicy(`Table is viewable by everyone`, {
			as: 'permissive',
			for: 'select',
			to: [anonRole, authenticatedRole],
			using: sql`true`,
		}),
		pgPolicy(
			'Authenticated users who set a public profile can insert their own row',
			{
				as: 'permissive',
				for: 'insert',
				to: authenticatedRole,
				withCheck: sql`
			(select auth.uid()) = profile_id
			and (
				select username_set
				from profiles
				where id = (select auth.uid())
				limit 1
			) = true`,
			},
		),
	],
).enableRLS();

export const profileThemesTable = pgTable(
	'profile_themes',
	{
		profile_theme_id: integer().notNull(),
		obtained_date: timestamp('obtained_date', { withTimezone: true })
			.notNull()
			.defaultNow(), // this is not the completion date in the sqlite file but in supabase insertion.
		profile_id: uuid()
			.references(() => profilesTable.id, { onDelete: 'cascade' })
			.notNull(),
	},
	(table) => [
		primaryKey({ columns: [table.profile_theme_id, table.profile_id] }), // on conflict do nothing
		index('idx_profile_themes_profile_id').on(table.profile_id),
		pgPolicy(`Table is viewable by everyone`, {
			as: 'permissive',
			for: 'select',
			to: [anonRole, authenticatedRole],
			using: sql`true`,
		}),
		pgPolicy(
			'Authenticated users who set a public profile can insert their own row',
			{
				as: 'permissive',
				for: 'insert',
				to: authenticatedRole,
				withCheck: sql`
			(select auth.uid()) = profile_id
			and (
				select username_set
				from profiles
				where id = (select auth.uid())
				limit 1
			) = true`,
			},
		),
	],
).enableRLS();

export const profileEmblemsTable = pgTable(
	'profile_emblems',
	{
		profile_emblem_id: integer().notNull(),
		obtained_date: timestamp('obtained_date', { withTimezone: true })
			.notNull()
			.defaultNow(), // this is not the completion date in the sqlite file but in supabase insertion.
		profile_id: uuid()
			.references(() => profilesTable.id, { onDelete: 'cascade' })
			.notNull(),
	},
	(table) => [
		primaryKey({ columns: [table.profile_emblem_id, table.profile_id] }), // on conflict do nothing
		index('idx_profile_emblems_profile_id').on(table.profile_id),
		pgPolicy(`Table is viewable by everyone`, {
			as: 'permissive',
			for: 'select',
			to: [anonRole, authenticatedRole],
			using: sql`true`,
		}),
		pgPolicy(
			'Authenticated users who set a public profile can insert their own row',
			{
				as: 'permissive',
				for: 'insert',
				to: authenticatedRole,
				withCheck: sql`
			(select auth.uid()) = profile_id
			and (
				select username_set
				from profiles
				where id = (select auth.uid())
				limit 1
			) = true`,
			},
		),
	],
).enableRLS();

export const profileTitlesTable = pgTable(
	'profile_titles',
	{
		profile_title_id: integer().notNull(),
		obtained_date: timestamp('obtained_date', { withTimezone: true })
			.notNull()
			.defaultNow(), // this is not the completion date in the sqlite file but in supabase insertion.
		profile_id: uuid()
			.references(() => profilesTable.id, { onDelete: 'cascade' })
			.notNull(),
	},
	(table) => [
		primaryKey({ columns: [table.profile_title_id, table.profile_id] }), // on conflict do nothing
		index('idx_profile_titles_profile_id').on(table.profile_id),
		pgPolicy(`Table is viewable by everyone`, {
			as: 'permissive',
			for: 'select',
			to: [anonRole, authenticatedRole],
			using: sql`true`,
		}),
		pgPolicy(
			'Authenticated users who set a public profile can insert their own row',
			{
				as: 'permissive',
				for: 'insert',
				to: authenticatedRole,
				withCheck: sql`
			(select auth.uid()) = profile_id
			and (
				select username_set
				from profiles
				where id = (select auth.uid())
				limit 1
			) = true`,
			},
		),
	],
).enableRLS();

/**
 * We only keep the highscores and discard the rest. So upserts are needed.
 */
export const mezFesTable = pgTable(
	'mez_fes',
	{
		mez_fes_minigame_id: integer().notNull(),
		score: integer().notNull(), // new highscores updates this field rather than inserting a new row.
		updated_at: timestamp('updated_at', { withTimezone: true, mode: 'string' })
			.notNull()
			.defaultNow()
			.$onUpdateFn(() => sql`now()`), // if the new.score is higher than old.score, update. if no row is found with profile_id and mez_fes_minigame_id, insert. this is an upsert.
		overlay_version: text().notNull(), // overlay version
		created_at: timestamp('created_at', { withTimezone: true })
			.notNull()
			.defaultNow(), // this is not the CreatedAt in the sqlite file but in supabase insertion.
		updated_by: uuid()
			.notNull()
			.references(() => profilesTable.id, { onDelete: 'cascade' }), // also update this if updated_at also changed.
		profile_id: uuid()
			.references(() => profilesTable.id, { onDelete: 'cascade' })
			.notNull(),
	},
	(table) => [
		primaryKey({ columns: [table.mez_fes_minigame_id, table.profile_id] }), // TODO on conflict do update
		index('idx_mez_fes_profile_id').on(table.profile_id),
		index('idx_mez_fes_updated_by').on(table.updated_by),
		pgPolicy(`Table is viewable by everyone`, {
			as: 'permissive',
			for: 'select',
			to: [anonRole, authenticatedRole],
			using: sql`true`,
		}),
		pgPolicy(
			'Authenticated users who set a public profile can insert their own row',
			{
				as: 'permissive',
				for: 'insert',
				to: authenticatedRole,
				withCheck: sql`
			(select auth.uid()) = profile_id
			and (
				select username_set
				from profiles
				where id = (select auth.uid())
				limit 1
			) = true`,
			},
		),
	],
).enableRLS();

export const questStatusTable = pgTable(
	'quest_status',
	{
		quest_hash: text().notNull(),
		quest_profile_id: uuid().notNull(),
		updated_at: timestamp('updated_at', { withTimezone: true, mode: 'string' })
			.notNull()
			.defaultNow()
			.$onUpdateFn(() => sql`now()`),
		created_at: timestamp('created_at', { withTimezone: true })
			.notNull()
			.defaultNow(), // this is not the CreatedAt in the sqlite file but in supabase insertion.
		updated_by: uuid()
			.notNull()
			.references(() => profilesTable.id, { onDelete: 'cascade' }), // also update this if updated_at also changed.
		status: questStatusEnum().notNull(),
	},
	// TODO test
	(table) => [
		primaryKey({ columns: [table.quest_hash, table.quest_profile_id] }), // TODO on conflict do update
		// Composite foreign key reference to quests table
		foreignKey({
			columns: [table.quest_hash, table.quest_profile_id],
			foreignColumns: [questsTable.quest_hash, questsTable.profile_id],
		}).onDelete('cascade'),
		index('idx_quest_status_updated_by').on(table.updated_by),
		index('idx_quest_status_quest_hash').on(table.quest_hash),
		index('idx_quest_status_quest_profile_id').on(table.quest_profile_id),
		pgPolicy(`Table is viewable by everyone`, {
			as: 'permissive',
			for: 'select',
			to: [anonRole, authenticatedRole],
			using: sql`true`,
		}),
		pgPolicy(
			'Authenticated users who set a public profile can insert their own row',
			{
				as: 'permissive',
				for: 'insert',
				to: authenticatedRole,
				withCheck: sql`
			(select auth.uid()) = quest_profile_id
			and (
				select username_set
				from profiles
				where id = (select auth.uid())
				limit 1
			) = true`,
			},
		),
		pgPolicy(`Allow moderators to update any table row`, {
			as: 'permissive',
			for: 'update',
			to: authenticatedRole,
			using: sql`(select get_my_claim('user_role')) = '"moderator"'`,
			withCheck: sql`(select get_my_claim('user_role')) = '"moderator"'`,
		}),
	],
).enableRLS();

export const mezFesVideoLinkTable = pgTable(
	'mez_fez_video_link',
	{
		mez_fes_minigame_id: integer().notNull(),
		mez_fes_profile_id: uuid().notNull(),
		updated_at: timestamp('updated_at', { withTimezone: true, mode: 'string' })
			.notNull()
			.defaultNow()
			.$onUpdateFn(() => sql`now()`),
		created_at: timestamp('created_at', { withTimezone: true })
			.notNull()
			.defaultNow(), // this is not the CreatedAt in the sqlite file but in supabase insertion.
		video_link: text().notNull().default(''), // also update this if updated_at also changed.
		updated_by: uuid()
			.notNull()
			.references(() => profilesTable.id, { onDelete: 'cascade' }), // also update this if updated_at also changed. can be the uploader user or a moderator.
	},
	(table) => [
		primaryKey({
			columns: [table.mez_fes_minigame_id, table.mez_fes_profile_id],
		}), // TODO on conflict do update
		foreignKey({
			columns: [table.mez_fes_minigame_id, table.mez_fes_profile_id],
			foreignColumns: [mezFesTable.mez_fes_minigame_id, mezFesTable.profile_id],
		}).onDelete('cascade'),
		index('idx_mez_fez_video_link_updated_by').on(table.updated_by),
		index('idx_mez_fez_video_link_minigame_id').on(table.mez_fes_minigame_id),
		index('idx_mez_fez_video_link_mez_fes_profile_id').on(
			table.mez_fes_profile_id,
		),
		pgPolicy(`Table is viewable by everyone`, {
			as: 'permissive',
			for: 'select',
			to: [anonRole, authenticatedRole],
			using: sql`true`,
		}),
		pgPolicy(`Allow moderators to update any table row`, {
			as: 'permissive',
			for: 'update',
			to: authenticatedRole,
			using: sql`(select get_my_claim('user_role')) = '"moderator"'`,
			withCheck: sql`(select get_my_claim('user_role')) = '"moderator"'`,
		}),
		pgPolicy(
			'Authenticated users who set a public profile can insert their own row',
			{
				as: 'permissive',
				for: 'insert',
				to: authenticatedRole,
				withCheck: sql`
			(select auth.uid()) = mez_fes_profile_id
			and (
				select username_set
				from profiles
				where id = (select auth.uid())
				limit 1
			) = true`,
			},
		),
		pgPolicy(
			'Authenticated users who set a public profile can update their own row',
			{
				as: 'permissive',
				for: 'update',
				to: authenticatedRole,
				using: sql`
				(select auth.uid()) = mez_fes_profile_id
				and (
					select username_set
					from profiles
					where id = (select auth.uid())
					limit 1
				) = true`,
				withCheck: sql`
			(select auth.uid()) = mez_fes_profile_id
			and (
				select username_set
				from profiles
				where id = (select auth.uid())
				limit 1
			) = true`,
			},
		),
	],
).enableRLS();

export const questVideoLinkTable = pgTable(
	'quest_video_link',
	{
		quest_hash: text().notNull(),
		quest_profile_id: uuid().notNull(),
		updated_at: timestamp('updated_at', { withTimezone: true, mode: 'string' })
			.notNull()
			.defaultNow()
			.$onUpdateFn(() => sql`now()`),
		created_at: timestamp('created_at', { withTimezone: true })
			.notNull()
			.defaultNow(), // this is not the CreatedAt in the sqlite file but in supabase insertion.
		video_link: text().notNull().default(''), // also update this if updated_at also changed.
		updated_by: uuid()
			.notNull()
			.references(() => profilesTable.id, { onDelete: 'cascade' }), // also update this if updated_at also changed. can be the uploader user or a moderator.
	},
	(table) => [
		primaryKey({ columns: [table.quest_hash, table.quest_profile_id] }), // TODO on conflict do update
		foreignKey({
			columns: [table.quest_hash, table.quest_profile_id],
			foreignColumns: [questsTable.quest_hash, questsTable.profile_id],
		}).onDelete('cascade'),
		index('idx_quest_video_link_updated_by').on(table.updated_by),
		// TODO should be merged?
		index('idx_quest_video_link_quest_hash').on(table.quest_hash),
		index('idx_quest_video_link_quest_profile_id').on(table.quest_profile_id),
		pgPolicy(`Table is viewable by everyone`, {
			as: 'permissive',
			for: 'select',
			to: [anonRole, authenticatedRole],
			using: sql`true`,
		}),
		pgPolicy(`Allow moderators to update any table row`, {
			as: 'permissive',
			for: 'update',
			to: authenticatedRole,
			using: sql`(select get_my_claim('user_role')) = '"moderator"'`,
			withCheck: sql`(select get_my_claim('user_role')) = '"moderator"'`,
		}),
		pgPolicy(
			'Authenticated users who set a public profile can insert their own row',
			{
				as: 'permissive',
				for: 'insert',
				to: authenticatedRole,
				withCheck: sql`
			(select auth.uid()) = quest_profile_id
			and (
				select username_set
				from profiles
				where id = (select auth.uid())
				limit 1
			) = true`,
			},
		),
		pgPolicy(
			'Authenticated users who set a public profile can update their own row',
			{
				as: 'permissive',
				for: 'update',
				to: authenticatedRole,
				using: sql`
				(select auth.uid()) = quest_profile_id
				and (
					select username_set
					from profiles
					where id = (select auth.uid())
					limit 1
				) = true`,
				withCheck: sql`
			(select auth.uid()) = quest_profile_id
			and (
				select username_set
				from profiles
				where id = (select auth.uid())
				limit 1
			) = true`,
			},
		),
	],
).enableRLS();

export const moderationLogsQuestTable = pgTable(
	'moderation_logs_quest',
	{
		id: integer().primaryKey().generatedAlwaysAsIdentity(),
		quest_hash: text().notNull(),
		quest_profile_id: uuid().notNull(),
		moderator_id: uuid().notNull(),
		old_status: questStatusEnum().notNull(),
		new_status: questStatusEnum().notNull(),
		reason: text().notNull(),
		updated_at: timestamp('updated_at', { withTimezone: true, mode: 'string' })
			.notNull()
			.defaultNow()
			.$onUpdateFn(() => sql`now()`), // when updating the reason
		created_at: timestamp('created_at', { withTimezone: true })
			.notNull()
			.defaultNow(),
		updated_by: uuid().notNull(), // also update this if updated_at also changed. can be the uploader user or an admin.
	},
	(table) => [
		check(
			'moderation_logs_quest_check_reason_length',
			sql`char_length(${table.reason}) >= 24`, // TODO test
		),
		check(
			'moderation_logs_quest_check_action_type',
			sql`${table.new_status} IN ('verified', 'duplicate', 'disputed')`, // TODO test
		),
		pgPolicy(`Allow moderators to see any table row`, {
			as: 'permissive',
			for: 'select',
			to: authenticatedRole,
			using: sql`(select get_my_claim('user_role')) = '"moderator"'`,
		}),
	],
).enableRLS();

/**  public version of logs for user disciplinary actions */
export const moderationHistoryTable = pgTable(
	'moderation_history',
	{
		id: integer().primaryKey().generatedAlwaysAsIdentity(),
		penalty_type: penaltyTypeEnum().unique().notNull(),
		created_at: timestamp('created_at', { withTimezone: true })
			.notNull()
			.defaultNow(),
	},
	(table) => [
		pgPolicy(`Table is viewable by everyone`, {
			as: 'permissive',
			for: 'select',
			to: [anonRole, authenticatedRole],
			using: sql`true`,
		}),
	],
).enableRLS();

export const reportsProfileTable = pgTable(
	'reports_profile',
	{
		id: integer().primaryKey().generatedAlwaysAsIdentity(),
		profile_id: uuid().notNull(),
		reporter_id: uuid().notNull(),
		category: text().notNull(), // TODO 'cheating', 'harassment', 'other'
		reason: text().notNull(),
		created_at: timestamp('created_at', { withTimezone: true })
			.notNull()
			.defaultNow(),
	},
	(table) => [
		check(
			'reports_profile_check_reason_length',
			sql`char_length(${table.reason}) >= 24`, // TODO test
		),
		pgPolicy(`Allow moderators to see any table row`, {
			as: 'permissive',
			for: 'update',
			to: authenticatedRole,
			using: sql`(select get_my_claim('user_role')) = '"moderator"'`,
		}),
		pgPolicy(
			'Authenticated users who set a public profile can see their own row',
			{
				as: 'permissive',
				for: 'select',
				to: authenticatedRole,
				using: sql`
			(select auth.uid()) = profile_id
			and (
				select username_set
				from profiles
				where id = (select auth.uid())
				limit 1
			) = true`,
			},
		),
		pgPolicy(
			'Authenticated users who set a public profile can insert their own row',
			{
				as: 'permissive',
				for: 'insert',
				to: authenticatedRole,
				withCheck: sql`
			(select auth.uid()) = profile_id
			and (
				select username_set
				from profiles
				where id = (select auth.uid())
				limit 1
			) = true`,
			},
		),
	],
).enableRLS();

export const reportsQuestTable = pgTable(
	'reports_quest',
	{
		id: integer().primaryKey().generatedAlwaysAsIdentity(),
		quest_hash: text().notNull(),
		quest_profile_id: uuid().notNull(),
		reporter_id: uuid().notNull(),
		category: text().notNull(), // TODO 'cheating', 'harassment', 'other'
		reason: text().notNull(),
		created_at: timestamp('created_at', { withTimezone: true })
			.notNull()
			.defaultNow(),
	},
	(table) => [
		check(
			'reports_quest_check_reason_length',
			sql`char_length(${table.reason}) >= 24`, // TODO test
		),
		pgPolicy(`Allow moderators to see any table row`, {
			as: 'permissive',
			for: 'update',
			to: authenticatedRole,
			using: sql`(select get_my_claim('user_role')) = '"moderator"'`,
		}),
		pgPolicy(
			'Authenticated users who set a public profile can see their own row',
			{
				as: 'permissive',
				for: 'select',
				to: authenticatedRole,
				using: sql`
			(select auth.uid()) = reporter_id
			and (
				select username_set
				from profiles
				where id = (select auth.uid())
				limit 1
			) = true`,
			},
		),
		pgPolicy(
			'Authenticated users who set a public profile can insert their own row',
			{
				as: 'permissive',
				for: 'insert',
				to: authenticatedRole,
				withCheck: sql`
			(select auth.uid()) = reporter_id
			and (
				select username_set
				from profiles
				where id = (select auth.uid())
				limit 1
			) = true`,
			},
		),
	],
).enableRLS();

export const profileAuditLogsTable = pgTable('profile_audit_logs', {
	id: integer().primaryKey().generatedAlwaysAsIdentity(),
	action: text().notNull(), // 'created_quest', 'deleted_comment'
	created_at: timestamp('created_at', { withTimezone: true })
		.notNull()
		.defaultNow(),
	profile_id: uuid().notNull(), // not a foreign key because postgres does not allow user deletion if this table would reference it, when not using on cascade delete.
	details: json().notNull().default({}), // todo varied
}).enableRLS(); // see in dashboard

export const activitiesTable = pgTable(
	'activities',
	{
		id: integer().primaryKey().generatedAlwaysAsIdentity(),
		profile_id: uuid().notNull(), // i want to keep what the user did even if deleted
		activity_type: activityTypeEnum().notNull(),
		created_at: timestamp('created_at', { withTimezone: true })
			.notNull()
			.defaultNow(),
		//Generic metadata stored as JSONB for flexibility
		metadata: jsonb(),
	},
	(t) => [
		//  Example index for activity feed queries
		index('idx_activities_user_created').on(t.profile_id, t.created_at.desc()),
		pgPolicy(`Table is viewable by everyone`, {
			as: 'permissive',
			for: 'select',
			to: [anonRole, authenticatedRole],
			using: sql`true`,
		}),
		pgPolicy(
			'Authenticated users who set a public profile can insert their own row',
			{
				as: 'permissive',
				for: 'insert',
				to: authenticatedRole,
				withCheck: sql`
			(select auth.uid()) = profile_id
			and (
				select username_set
				from profiles
				where id = (select auth.uid())
				limit 1
			) = true`,
			},
		),
	],
).enableRLS();

/**See via SQL Editor in Dashboard*/
export const registrationCodesTable = pgTable('registration_codes', {
	code: uuid().primaryKey().defaultRandom(),
	used: boolean().notNull().default(false),
	used_at: timestamp('used_at', {
		withTimezone: true,
		mode: 'string', // this is needed
	}).$onUpdateFn(() => sql`now()`),
	created_at: timestamp('created_at', { withTimezone: true })
		.notNull()
		.defaultNow(),
}).enableRLS();

// TODO limit by role
export const activityFeedView = pgView('activity_feed_view')
	.with({
		securityInvoker: true, // this should be enough
	})
	.as((qb) => {
		return qb
			.select({
				id: activitiesTable.id,
				profile_id: activitiesTable.profile_id,
				username: profilesTable.username,
				activity_type: activitiesTable.activity_type,
				created_at: activitiesTable.created_at,
				metadata: activitiesTable.metadata,
			})
			.from(activitiesTable)
			.fullJoin(profilesTable, eq(profilesTable.id, activitiesTable.profile_id))
			.orderBy(desc(activitiesTable.created_at));
	});

/**https://github.com/supabase/auth/blob/v2/api/provider/discord.go */
export type SelectProfile = InferSelectModel<typeof profilesTable>;
export type InsertProfile = InferInsertModel<typeof profilesTable>;
export type SelectQuest = InferSelectModel<typeof questsTable>;
export type InsertQuest = InferInsertModel<typeof questsTable>;

/*
-- Example of how to insert an activity
COMMENT ON FUNCTION insert_activity IS
$$ Example usage:
INSERT INTO activities (profile_id, activity_type, metadata)
VALUES (
    1,
    'world_record',
    '{"game": "Blinking Nargacuga Lance FDS", "type": "World Record"}'::jsonb
);
$$;
*/

// TODO add to localstorage the preferred weapon type shown in tutorials instead of storing in db.
// etc
// If it needs to be seen by everyone/authenticated then store in db.
// Add to localstorage the progress in tutorials and other website sections too.

/*
A key reason for using `mode: 'string'`: When a timestamp column can be null, using `mode: 'string'` helps avoid the `toISOString()` error because Drizzle tries to call this method on potentially null values.

See:

```typescript
export const registrationCodesTable = pgTable('registration_codes', {
  code: text().primaryKey(),
  used: boolean().notNull().default(false),
  used_at: timestamp('used_at', {
    withTimezone: true,
    mode: 'string'  // Required because this field can be null
  }).$onUpdateFn(() => sql`now()`),
  created_at: timestamp('created_at', { withTimezone: true })
    .notNull()  // This one doesn't need mode:'string' because it's notNull
    .defaultNow(),
}).enableRLS();
```

The `toISOString()` error occurs because:
1. By default, Drizzle tries to convert timestamps to Date objects
2. When a field is null, trying to call `toISOString()` on null throws an error
3. `mode: 'string'` bypasses this conversion process and handles null values correctly

As a general rule: if a timestamp column can be null, use `mode: 'string'` to avoid these conversion errors.

*/
