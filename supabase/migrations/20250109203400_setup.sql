CREATE TYPE "public"."access_restriction" AS ENUM('full_block', 'limited_access', 'warning_only', 'none');--> statement-breakpoint
CREATE TYPE "public"."penalty_status" AS ENUM('pending', 'active', 'completed', 'appealed', 'cancelled');--> statement-breakpoint
CREATE TYPE "public"."penalty_type" AS ENUM('warning', 'timeout', 'suspension', 'termination');--> statement-breakpoint
CREATE TYPE "public"."quest_status_type" AS ENUM('unverified', 'verified', 'duplicate', 'disputed');--> statement-breakpoint
CREATE TABLE IF NOT EXISTS "achievements" (
	"achievement_id" integer NOT NULL,
	"completion_date" timestamp with time zone DEFAULT now() NOT NULL,
	"profile_id" uuid NOT NULL,
	CONSTRAINT "achievements_achievement_id_profile_id_pk" PRIMARY KEY("achievement_id","profile_id")
);
--> statement-breakpoint
ALTER TABLE "achievements" ENABLE ROW LEVEL SECURITY;--> statement-breakpoint
CREATE TABLE IF NOT EXISTS "countries" (
	"id" integer PRIMARY KEY GENERATED ALWAYS AS IDENTITY (sequence name "countries_id_seq" INCREMENT BY 1 MINVALUE 1 MAXVALUE 2147483647 START WITH 1 CACHE 1),
	"name" text NOT NULL
);
--> statement-breakpoint
CREATE TABLE IF NOT EXISTS "emblems" (
	"emblem_id" integer NOT NULL,
	"obtained_date" timestamp with time zone DEFAULT now() NOT NULL,
	"profile_id" uuid NOT NULL,
	CONSTRAINT "emblems_emblem_id_profile_id_pk" PRIMARY KEY("emblem_id","profile_id")
);
--> statement-breakpoint
ALTER TABLE "emblems" ENABLE ROW LEVEL SECURITY;--> statement-breakpoint
CREATE TABLE IF NOT EXISTS "favorite_quests" (
	"user_id" uuid NOT NULL,
	"quest_hash" text NOT NULL,
	"quest_profile_id" uuid NOT NULL,
	"favorited_date" timestamp with time zone DEFAULT now() NOT NULL,
	CONSTRAINT "favorite_quests_user_id_quest_hash_quest_profile_id_pk" PRIMARY KEY("user_id","quest_hash","quest_profile_id")
);
--> statement-breakpoint
ALTER TABLE "favorite_quests" ENABLE ROW LEVEL SECURITY;--> statement-breakpoint
CREATE TABLE IF NOT EXISTS "followers" (
	"user_id" uuid NOT NULL,
	"follower_id" uuid NOT NULL,
	"followed_date" timestamp with time zone DEFAULT now() NOT NULL,
	CONSTRAINT "followers_user_id_follower_id_pk" PRIMARY KEY("user_id","follower_id")
);
--> statement-breakpoint
ALTER TABLE "followers" ENABLE ROW LEVEL SECURITY;--> statement-breakpoint
CREATE TABLE IF NOT EXISTS "mez_fes" (
	"mez_fes_minigame_id" integer NOT NULL,
	"score" integer NOT NULL,
	"updated_at" timestamp with time zone DEFAULT now() NOT NULL,
	"overlay_version" text NOT NULL,
	"created_at" timestamp with time zone DEFAULT now() NOT NULL,
	"updated_by" uuid NOT NULL,
	"profile_id" uuid NOT NULL,
	CONSTRAINT "mez_fes_mez_fes_minigame_id_profile_id_pk" PRIMARY KEY("mez_fes_minigame_id","profile_id")
);
--> statement-breakpoint
ALTER TABLE "mez_fes" ENABLE ROW LEVEL SECURITY;--> statement-breakpoint
CREATE TABLE IF NOT EXISTS "mez_fez_video_link" (
	"mez_fes_minigame_id" integer NOT NULL,
	"mez_fes_profile_id" uuid NOT NULL,
	"updated_at" timestamp with time zone DEFAULT now() NOT NULL,
	"created_at" timestamp with time zone DEFAULT now() NOT NULL,
	"video_link" text DEFAULT '' NOT NULL,
	"updated_by" uuid NOT NULL,
	CONSTRAINT "mez_fez_video_link_mez_fes_minigame_id_mez_fes_profile_id_pk" PRIMARY KEY("mez_fes_minigame_id","mez_fes_profile_id")
);
--> statement-breakpoint
ALTER TABLE "mez_fez_video_link" ENABLE ROW LEVEL SECURITY;--> statement-breakpoint
CREATE TABLE IF NOT EXISTS "moderation_logs_quest" (
	"id" integer PRIMARY KEY GENERATED ALWAYS AS IDENTITY (sequence name "moderation_logs_quest_id_seq" INCREMENT BY 1 MINVALUE 1 MAXVALUE 2147483647 START WITH 1 CACHE 1),
	"quest_hash" text NOT NULL,
	"quest_profile_id" uuid NOT NULL,
	"moderator_id" uuid NOT NULL,
	"old_status" "quest_status_type" NOT NULL,
	"new_status" "quest_status_type" NOT NULL,
	"reason" text NOT NULL,
	"updated_at" timestamp with time zone DEFAULT now() NOT NULL,
	"created_at" timestamp with time zone DEFAULT now() NOT NULL,
	"updated_by" uuid NOT NULL,
	CONSTRAINT "moderation_logs_quest_check_reason_length" CHECK (char_length("moderation_logs_quest"."reason") >= 24),
	CONSTRAINT "moderation_logs_quest_check_action_type" CHECK ("moderation_logs_quest"."new_status" IN ('verified', 'duplicate', 'disputed'))
);
--> statement-breakpoint
ALTER TABLE "moderation_logs_quest" ENABLE ROW LEVEL SECURITY;--> statement-breakpoint
CREATE TABLE IF NOT EXISTS "penalty_acknowledgments" (
	"id" uuid PRIMARY KEY DEFAULT gen_random_uuid() NOT NULL,
	"penalty_id" uuid,
	"user_id" uuid NOT NULL,
	"acknowledgment_text" text NOT NULL,
	"acknowledged_at" timestamp with time zone,
	"created_at " timestamp with time zone DEFAULT now() NOT NULL
);
--> statement-breakpoint
ALTER TABLE "penalty_acknowledgments" ENABLE ROW LEVEL SECURITY;--> statement-breakpoint
CREATE TABLE IF NOT EXISTS "penalty_appeals" (
	"id" uuid PRIMARY KEY DEFAULT gen_random_uuid() NOT NULL,
	"user_id" uuid NOT NULL,
	"penalty_id" uuid,
	"appeal_reason" text DEFAULT '' NOT NULL,
	"status" text DEFAULT 'pending' NOT NULL,
	"reviewed_by" uuid,
	"reviewed_at" timestamp with time zone,
	"decision" text,
	"created_at" timestamp with time zone DEFAULT now() NOT NULL,
	"updated_at" timestamp with time zone DEFAULT now() NOT NULL
);
--> statement-breakpoint
ALTER TABLE "penalty_appeals" ENABLE ROW LEVEL SECURITY;--> statement-breakpoint
CREATE TABLE IF NOT EXISTS "penalty_history" (
	"id" uuid PRIMARY KEY DEFAULT gen_random_uuid() NOT NULL,
	"changed_by" uuid,
	"penalty_id" uuid,
	"change_type" text NOT NULL,
	"old_values" jsonb,
	"new_values" jsonb,
	"change_reason" text,
	"created_at" timestamp with time zone DEFAULT now() NOT NULL
);
--> statement-breakpoint
ALTER TABLE "penalty_history" ENABLE ROW LEVEL SECURITY;--> statement-breakpoint
CREATE TABLE IF NOT EXISTS "penalty_reasons" (
	"id" uuid PRIMARY KEY DEFAULT gen_random_uuid() NOT NULL,
	"name" text NOT NULL,
	"description" text DEFAULT '' NOT NULL,
	"default_duration" interval,
	"default_penalty_type" "penalty_type",
	"severity_level" integer,
	"created_at" timestamp with time zone DEFAULT now(),
	"is_active" boolean DEFAULT true,
	CONSTRAINT "penalty_reasons_check_severity_level" CHECK ("penalty_reasons"."severity_level" BETWEEN 1 AND 5)
);
--> statement-breakpoint
ALTER TABLE "penalty_reasons" ENABLE ROW LEVEL SECURITY;--> statement-breakpoint
CREATE TABLE IF NOT EXISTS "penalty_type_configs" (
	"id" uuid PRIMARY KEY DEFAULT gen_random_uuid() NOT NULL,
	"penalty_type" "penalty_type" NOT NULL,
	"requires_acknowledgment" boolean DEFAULT true NOT NULL,
	"access_level" "access_restriction" NOT NULL,
	"can_browse_after_acknowledgment" boolean DEFAULT false,
	"description" text,
	"created_at" timestamp with time zone DEFAULT now() NOT NULL,
	CONSTRAINT "penalty_type_configs_penalty_type_unique" UNIQUE("penalty_type")
);
--> statement-breakpoint
ALTER TABLE "penalty_type_configs" ENABLE ROW LEVEL SECURITY;--> statement-breakpoint
CREATE TABLE IF NOT EXISTS "pinned_quests" (
	"user_id" uuid NOT NULL,
	"quest_hash" text NOT NULL,
	"quest_profile_id" uuid NOT NULL,
	"pinned_date" timestamp with time zone DEFAULT now() NOT NULL,
	CONSTRAINT "pinned_quests_user_id_quest_hash_quest_profile_id_pk" PRIMARY KEY("user_id","quest_hash","quest_profile_id")
);
--> statement-breakpoint
ALTER TABLE "pinned_quests" ENABLE ROW LEVEL SECURITY;--> statement-breakpoint
CREATE TABLE IF NOT EXISTS "profile_audit_logs" (
	"id" integer PRIMARY KEY GENERATED ALWAYS AS IDENTITY (sequence name "profile_audit_logs_id_seq" INCREMENT BY 1 MINVALUE 1 MAXVALUE 2147483647 START WITH 1 CACHE 1),
	"action" text NOT NULL,
	"created_at" timestamp with time zone DEFAULT now() NOT NULL,
	"profile_id" uuid NOT NULL,
	"details" json DEFAULT '{}'::json NOT NULL
);
--> statement-breakpoint
ALTER TABLE "profile_audit_logs" ENABLE ROW LEVEL SECURITY;--> statement-breakpoint
CREATE TABLE IF NOT EXISTS "profile_themes" (
	"profile_theme_id" integer NOT NULL,
	"obtained_date" timestamp with time zone DEFAULT now() NOT NULL,
	"profile_id" uuid NOT NULL,
	CONSTRAINT "profile_themes_profile_theme_id_profile_id_pk" PRIMARY KEY("profile_theme_id","profile_id")
);
--> statement-breakpoint
ALTER TABLE "profile_themes" ENABLE ROW LEVEL SECURITY;--> statement-breakpoint
CREATE TABLE IF NOT EXISTS "profiles" (
	"id" uuid PRIMARY KEY NOT NULL,
	"discord_username" text NOT NULL,
	"discord_avatar" text,
	"username" text NOT NULL,
	"avatar" text DEFAULT 'Default' NOT NULL,
	"updated_at" timestamp with time zone DEFAULT now() NOT NULL,
	"join_date" timestamp with time zone DEFAULT now() NOT NULL,
	"emblem" text DEFAULT 'None' NOT NULL,
	"title" text DEFAULT 'None' NOT NULL,
	"country" text DEFAULT 'World' NOT NULL,
	"private" boolean DEFAULT false NOT NULL,
	"private_servers" text[] DEFAULT ARRAY[]::text[] NOT NULL,
	"agreed_terms" timestamp with time zone DEFAULT now() NOT NULL,
	"discord_username_shown" boolean DEFAULT false NOT NULL,
	"theme" text DEFAULT 'Default' NOT NULL,
	"guild_card_theme" text DEFAULT 'Default' NOT NULL,
	"username_set" boolean DEFAULT false NOT NULL,
	"username_set_date" timestamp with time zone DEFAULT now() NOT NULL,
	"quest_published_date" timestamp with time zone,
	"moderator_badge_shown" boolean DEFAULT false NOT NULL,
	CONSTRAINT "profiles_username_unique" UNIQUE("username")
);
--> statement-breakpoint
ALTER TABLE "profiles" ENABLE ROW LEVEL SECURITY;--> statement-breakpoint
CREATE TABLE IF NOT EXISTS "quest_reactions" (
	"user_id" uuid NOT NULL,
	"quest_hash" text NOT NULL,
	"quest_profile_id" uuid NOT NULL,
	"reacted_at" timestamp with time zone DEFAULT now() NOT NULL,
	"reaction" text NOT NULL,
	CONSTRAINT "quest_reactions_user_id_quest_hash_quest_profile_id_reaction_pk" PRIMARY KEY("user_id","quest_hash","quest_profile_id","reaction")
);
--> statement-breakpoint
ALTER TABLE "quest_reactions" ENABLE ROW LEVEL SECURITY;--> statement-breakpoint
CREATE TABLE IF NOT EXISTS "quest_status" (
	"quest_hash" text NOT NULL,
	"quest_profile_id" uuid NOT NULL,
	"updated_at" timestamp with time zone DEFAULT now() NOT NULL,
	"created_at" timestamp with time zone DEFAULT now() NOT NULL,
	"updated_by" uuid NOT NULL,
	"status" "quest_status_type" NOT NULL,
	CONSTRAINT "quest_status_quest_hash_quest_profile_id_pk" PRIMARY KEY("quest_hash","quest_profile_id")
);
--> statement-breakpoint
ALTER TABLE "quest_status" ENABLE ROW LEVEL SECURITY;--> statement-breakpoint
CREATE TABLE IF NOT EXISTS "quest_video_link" (
	"quest_hash" text NOT NULL,
	"quest_profile_id" uuid NOT NULL,
	"updated_at" timestamp with time zone DEFAULT now() NOT NULL,
	"created_at" timestamp with time zone DEFAULT now() NOT NULL,
	"video_link" text DEFAULT '' NOT NULL,
	"updated_by" uuid NOT NULL,
	CONSTRAINT "quest_video_link_quest_hash_quest_profile_id_pk" PRIMARY KEY("quest_hash","quest_profile_id")
);
--> statement-breakpoint
ALTER TABLE "quest_video_link" ENABLE ROW LEVEL SECURITY;--> statement-breakpoint
CREATE TABLE IF NOT EXISTS "quests" (
	"id" integer GENERATED ALWAYS AS IDENTITY (sequence name "quests_id_seq" INCREMENT BY 1 MINVALUE 1 MAXVALUE 2147483647 START WITH 1 CACHE 1),
	"profile_id" uuid NOT NULL,
	"active_skill1_id" integer NOT NULL,
	"active_skill2_id" integer NOT NULL,
	"active_skill3_id" integer NOT NULL,
	"active_skill4_id" integer NOT NULL,
	"active_skill5_id" integer NOT NULL,
	"active_skill6_id" integer NOT NULL,
	"active_skill7_id" integer NOT NULL,
	"active_skill8_id" integer NOT NULL,
	"active_skill9_id" integer NOT NULL,
	"active_skill10_id" integer NOT NULL,
	"active_skill11_id" integer NOT NULL,
	"active_skill12_id" integer NOT NULL,
	"active_skill13_id" integer NOT NULL,
	"active_skill14_id" integer NOT NULL,
	"active_skill15_id" integer NOT NULL,
	"active_skill16_id" integer NOT NULL,
	"active_skill17_id" integer NOT NULL,
	"active_skill18_id" integer NOT NULL,
	"active_skill19_id" integer NOT NULL,
	"automatic_skill1_id" integer NOT NULL,
	"automatic_skill2_id" integer NOT NULL,
	"automatic_skill3_id" integer NOT NULL,
	"automatic_skill4_id" integer NOT NULL,
	"automatic_skill5_id" integer NOT NULL,
	"automatic_skill6_id" integer NOT NULL,
	"caravan_skill1_id" integer NOT NULL,
	"caravan_skill2_id" integer NOT NULL,
	"caravan_skill3_id" integer NOT NULL,
	"mhfdat_hash" text NOT NULL,
	"mhfemd_hash" text NOT NULL,
	"mhfsqd_hash" text NOT NULL,
	"mhfinf_hash" text NOT NULL,
	"mhfodll_hash" text NOT NULL,
	"mhfohddll_hash" text NOT NULL,
	"mhfexe_hash" text NOT NULL,
	"style_id" integer NOT NULL,
	"weapon_type_id" integer NOT NULL,
	"blademaster_weapon_id" integer,
	"gunner_weapon_id" integer,
	"weapon_slot1" text NOT NULL,
	"weapon_slot2" text NOT NULL,
	"weapon_slot3" text NOT NULL,
	"head_id" integer NOT NULL,
	"head_slot1_id" integer NOT NULL,
	"head_slot2_id" integer NOT NULL,
	"head_slot3_id" integer NOT NULL,
	"chest_id" integer NOT NULL,
	"chest_slot1_id" integer NOT NULL,
	"chest_slot2_id" integer NOT NULL,
	"chest_slot3_id" integer NOT NULL,
	"arms_id" integer NOT NULL,
	"arms_slot1_id" integer NOT NULL,
	"arms_slot2_id" integer NOT NULL,
	"arms_slot3_id" integer NOT NULL,
	"waist_id" integer NOT NULL,
	"waist_slot1_id" integer NOT NULL,
	"waist_slot2_id" integer NOT NULL,
	"waist_slot3_id" integer NOT NULL,
	"legs_id" integer NOT NULL,
	"legs_slot1_id" integer NOT NULL,
	"legs_slot2_id" integer NOT NULL,
	"legs_slot3_id" integer NOT NULL,
	"cuff1_id" integer NOT NULL,
	"cuff2_id" integer NOT NULL,
	"diva_skill_id" integer NOT NULL,
	"guild_food_id" integer NOT NULL,
	"poogie_item_id" integer NOT NULL,
	"player_inventory_dictionary" text NOT NULL,
	"player_ammo_pouch_dictionary" text NOT NULL,
	"partnya_bag_dictionary" text NOT NULL,
	"created_at" timestamp with time zone NOT NULL,
	"overlay_version" text NOT NULL,
	"quest_hash" text NOT NULL,
	"quest_id" integer NOT NULL,
	"time_left" integer NOT NULL,
	"final_time_value" integer NOT NULL,
	"final_time_display" text NOT NULL,
	"objetive_type_id" integer NOT NULL,
	"objective_quantity" integer NOT NULL,
	"star_grade" integer NOT NULL,
	"rank_name" text NOT NULL,
	"objective_name" text NOT NULL,
	"attack_buff_dictionary" text NOT NULL,
	"hit_count_dictionary" text NOT NULL,
	"hits_per_second_dictionary" text NOT NULL,
	"damage_dealt_dictionary" text NOT NULL,
	"damage_per_second_dictionary" text NOT NULL,
	"area_changes_dictionary" text NOT NULL,
	"carts_dictionary" text NOT NULL,
	"hits_taken_blocked_dictionary" text NOT NULL,
	"hits_taken_blocked_per_second_dictionary" text NOT NULL,
	"player_hp_dictionary" text NOT NULL,
	"player_stamina_dictionary" text NOT NULL,
	"keystrokes_dictionary" text NOT NULL,
	"mouse_input_dictionary" text NOT NULL,
	"gamepad_input_dictionary" text NOT NULL,
	"actions_per_minute_dictionary" text NOT NULL,
	"overlay_mode_dictionary" text NOT NULL,
	"actual_overlay_mode" text NOT NULL,
	"party_size" integer NOT NULL,
	"monster1_hp_dictionary" text NOT NULL,
	"monster2_hp_dictionary" text NOT NULL,
	"monster3_hp_dictionary" text NOT NULL,
	"monster4_hp_dictionary" text NOT NULL,
	"monster1_attack_multiplier_dictionary" text NOT NULL,
	"monster1_defense_rate_dictionary" text NOT NULL,
	"monster1_size_multiplier_dictionary" text NOT NULL,
	"monster1_poison_threshold_dictionary" text NOT NULL,
	"monster1_paralysis_threshold_dictionary" text NOT NULL,
	"monster1_sleep_threshold_dictionary" text NOT NULL,
	"monster1_blast_threshold_dictionary" text NOT NULL,
	"monster1_stun_threshold_dictionary" text NOT NULL,
	"monster1_part_threshold_dictionary" text NOT NULL,
	"monster2_part_threshold_dictionary" text NOT NULL,
	"is_high_grade_edition" boolean NOT NULL,
	"refresh_rate" integer NOT NULL,
	"party_size_dictonary" text NOT NULL,
	"active_feature" integer,
	"rights" integer,
	"diva_song_buff_on" boolean,
	"diva_prayer_gem_red_skill" integer,
	"diva_prayer_gem_red_level" integer,
	"diva_prayer_gem_yellow_skill" integer,
	"diva_prayer_gem_yellow_level" integer,
	"diva_prayer_gem_green_skill" integer,
	"diva_prayer_gem_green_level" integer,
	"diva_prayer_gem_blue_skill" integer,
	"diva_prayer_gem_blue_level" integer,
	"mhfdat_info" text,
	"mhfemd_info" text,
	"mhfodll_info" text,
	"mhfohddll_info" text,
	"guild_poogie1_skill" integer,
	"guild_poogie2_skill" integer,
	"guild_poogie3_skill" integer,
	"halk_on" boolean,
	"halk_pot_effect_on" boolean,
	"halk_fullness" integer,
	"halk_level" integer,
	"halk_intimacy" integer,
	"halk_health" integer,
	"halk_attack" integer,
	"halk_defense" integer,
	"halk_intellect" integer,
	"halk_skill1" integer,
	"halk_skill2" integer,
	"halk_skill3" integer,
	"halk_element_none" integer,
	"halk_fire" integer,
	"halk_water" integer,
	"halk_thunder" integer,
	"halk_ice" integer,
	"halk_dragon" integer,
	"halk_poison" integer,
	"halk_sleep" integer,
	"halk_paralysis" integer,
	"overlay_hash" text,
	"quest_variant1" integer,
	"quest_variant2" integer,
	"quest_variant3" integer,
	"quest_variant4" integer,
	"run_buffs" integer,
	"run_buffs_tag" text,
	"quest_toggle_mode" integer,
	"dual_swords_sharpens_dictionary" text NOT NULL,
	"road_dure_skill1_id" integer NOT NULL,
	"road_dure_skill1_level" integer NOT NULL,
	"road_dure_skill2_id" integer NOT NULL,
	"road_dure_skill2_level" integer NOT NULL,
	"road_dure_skill3_id" integer NOT NULL,
	"road_dure_skill3_level" integer NOT NULL,
	"road_dure_skill4_id" integer NOT NULL,
	"road_dure_skill4_level" integer NOT NULL,
	"road_dure_skill5_id" integer NOT NULL,
	"road_dure_skill5_level" integer NOT NULL,
	"road_dure_skill6_id" integer NOT NULL,
	"road_dure_skill6_level" integer NOT NULL,
	"road_dure_skill7_id" integer NOT NULL,
	"road_dure_skill7_level" integer NOT NULL,
	"road_dure_skill8_id" integer NOT NULL,
	"road_dure_skill8_level" integer NOT NULL,
	"road_dure_skill9_id" integer NOT NULL,
	"road_dure_skill9_level" integer NOT NULL,
	"road_dure_skill10_id" integer NOT NULL,
	"road_dure_skill10_level" integer NOT NULL,
	"road_dure_skill11_id" integer NOT NULL,
	"road_dure_skill11_level" integer NOT NULL,
	"road_dure_skill12_id" integer NOT NULL,
	"road_dure_skill12_level" integer NOT NULL,
	"road_dure_skill13_id" integer NOT NULL,
	"road_dure_skill13_level" integer NOT NULL,
	"road_dure_skill14_id" integer NOT NULL,
	"road_dure_skill14_level" integer NOT NULL,
	"road_dure_skill15_id" integer NOT NULL,
	"road_dure_skill15_level" integer NOT NULL,
	"road_dure_skill16_id" integer NOT NULL,
	"road_dure_skill16_level" integer NOT NULL,
	"style_rank_skill1_id" integer NOT NULL,
	"style_rank_skill2_id" integer NOT NULL,
	"zenith_skill1_id" integer NOT NULL,
	"zenith_skill2_id" integer NOT NULL,
	"zenith_skill3_id" integer NOT NULL,
	"zenith_skill4_id" integer NOT NULL,
	"zenith_skill5_id" integer NOT NULL,
	"zenith_skill6_id" integer NOT NULL,
	"zenith_skill7_id" integer NOT NULL,
	CONSTRAINT "quests_quest_hash_profile_id_pk" PRIMARY KEY("quest_hash","profile_id")
);
--> statement-breakpoint
ALTER TABLE "quests" ENABLE ROW LEVEL SECURITY;--> statement-breakpoint
CREATE TABLE IF NOT EXISTS "reports_profile" (
	"id" integer PRIMARY KEY GENERATED ALWAYS AS IDENTITY (sequence name "reports_profile_id_seq" INCREMENT BY 1 MINVALUE 1 MAXVALUE 2147483647 START WITH 1 CACHE 1),
	"profile_id" uuid NOT NULL,
	"reporter_id" uuid NOT NULL,
	"category" text NOT NULL,
	"reason" text NOT NULL,
	"created_at" timestamp with time zone DEFAULT now() NOT NULL,
	CONSTRAINT "reports_profile_check_reason_length" CHECK (char_length("reports_profile"."reason") >= 24)
);
--> statement-breakpoint
ALTER TABLE "reports_profile" ENABLE ROW LEVEL SECURITY;--> statement-breakpoint
CREATE TABLE IF NOT EXISTS "reports_quest" (
	"id" integer PRIMARY KEY GENERATED ALWAYS AS IDENTITY (sequence name "reports_quest_id_seq" INCREMENT BY 1 MINVALUE 1 MAXVALUE 2147483647 START WITH 1 CACHE 1),
	"quest_hash" text NOT NULL,
	"quest_profile_id" uuid NOT NULL,
	"reporter_id" uuid NOT NULL,
	"category" text NOT NULL,
	"reason" text NOT NULL,
	"created_at" timestamp with time zone DEFAULT now() NOT NULL,
	CONSTRAINT "reports_quest_check_reason_length" CHECK (char_length("reports_quest"."reason") >= 24)
);
--> statement-breakpoint
ALTER TABLE "reports_quest" ENABLE ROW LEVEL SECURITY;--> statement-breakpoint
CREATE TABLE IF NOT EXISTS "timeout_restrictions" (
	"id" uuid PRIMARY KEY DEFAULT gen_random_uuid() NOT NULL,
	"penalty_id" uuid,
	"feature_name" text NOT NULL,
	"is_restricted" boolean DEFAULT true NOT NULL,
	"restriction_reason" text DEFAULT '' NOT NULL,
	"created_at " timestamp with time zone DEFAULT now() NOT NULL
);
--> statement-breakpoint
ALTER TABLE "timeout_restrictions" ENABLE ROW LEVEL SECURITY;--> statement-breakpoint
CREATE TABLE IF NOT EXISTS "titles" (
	"title_id" integer NOT NULL,
	"obtained_date" timestamp with time zone DEFAULT now() NOT NULL,
	"profile_id" uuid NOT NULL,
	CONSTRAINT "titles_title_id_profile_id_pk" PRIMARY KEY("title_id","profile_id")
);
--> statement-breakpoint
ALTER TABLE "titles" ENABLE ROW LEVEL SECURITY;--> statement-breakpoint
CREATE TABLE IF NOT EXISTS "user_penalties" (
	"id" uuid PRIMARY KEY DEFAULT gen_random_uuid() NOT NULL,
	"user_id" uuid NOT NULL,
	"reason_id" uuid,
	"penalty_type" "penalty_type" NOT NULL,
	"status" "penalty_status" DEFAULT 'pending',
	"notes" text DEFAULT '' NOT NULL,
	"issued_by" uuid NOT NULL,
	"issued_at" timestamp with time zone DEFAULT now(),
	"starts_at" timestamp with time zone NOT NULL,
	"ends_at" timestamp with time zone,
	"actual_end_at" timestamp with time zone,
	"created_at" timestamp with time zone DEFAULT now(),
	"updated_at" timestamp with time zone DEFAULT now(),
	CONSTRAINT "check_penalty_dates" CHECK ("user_penalties"."ends_at" > "user_penalties"."starts_at"),
	CONSTRAINT "check_actual_end" CHECK ("user_penalties"."actual_end_at" >= "user_penalties"."starts_at")
);
--> statement-breakpoint
ALTER TABLE "user_penalties" ENABLE ROW LEVEL SECURITY;--> statement-breakpoint
DO $$ BEGIN
 ALTER TABLE "achievements" ADD CONSTRAINT "achievements_profile_id_profiles_id_fk" FOREIGN KEY ("profile_id") REFERENCES "public"."profiles"("id") ON DELETE cascade ON UPDATE no action;
EXCEPTION
 WHEN duplicate_object THEN null;
END $$;
--> statement-breakpoint
DO $$ BEGIN
 ALTER TABLE "emblems" ADD CONSTRAINT "emblems_profile_id_profiles_id_fk" FOREIGN KEY ("profile_id") REFERENCES "public"."profiles"("id") ON DELETE cascade ON UPDATE no action;
EXCEPTION
 WHEN duplicate_object THEN null;
END $$;
--> statement-breakpoint
DO $$ BEGIN
 ALTER TABLE "favorite_quests" ADD CONSTRAINT "favorite_quests_user_id_profiles_id_fk" FOREIGN KEY ("user_id") REFERENCES "public"."profiles"("id") ON DELETE cascade ON UPDATE no action;
EXCEPTION
 WHEN duplicate_object THEN null;
END $$;
--> statement-breakpoint
DO $$ BEGIN
 ALTER TABLE "favorite_quests" ADD CONSTRAINT "favorite_quests_quest_hash_quest_profile_id_quests_quest_hash_profile_id_fk" FOREIGN KEY ("quest_hash","quest_profile_id") REFERENCES "public"."quests"("quest_hash","profile_id") ON DELETE cascade ON UPDATE no action;
EXCEPTION
 WHEN duplicate_object THEN null;
END $$;
--> statement-breakpoint
DO $$ BEGIN
 ALTER TABLE "followers" ADD CONSTRAINT "followers_user_id_profiles_id_fk" FOREIGN KEY ("user_id") REFERENCES "public"."profiles"("id") ON DELETE cascade ON UPDATE no action;
EXCEPTION
 WHEN duplicate_object THEN null;
END $$;
--> statement-breakpoint
DO $$ BEGIN
 ALTER TABLE "followers" ADD CONSTRAINT "followers_follower_id_profiles_id_fk" FOREIGN KEY ("follower_id") REFERENCES "public"."profiles"("id") ON DELETE cascade ON UPDATE no action;
EXCEPTION
 WHEN duplicate_object THEN null;
END $$;
--> statement-breakpoint
DO $$ BEGIN
 ALTER TABLE "mez_fes" ADD CONSTRAINT "mez_fes_updated_by_profiles_id_fk" FOREIGN KEY ("updated_by") REFERENCES "public"."profiles"("id") ON DELETE cascade ON UPDATE no action;
EXCEPTION
 WHEN duplicate_object THEN null;
END $$;
--> statement-breakpoint
DO $$ BEGIN
 ALTER TABLE "mez_fes" ADD CONSTRAINT "mez_fes_profile_id_profiles_id_fk" FOREIGN KEY ("profile_id") REFERENCES "public"."profiles"("id") ON DELETE cascade ON UPDATE no action;
EXCEPTION
 WHEN duplicate_object THEN null;
END $$;
--> statement-breakpoint
DO $$ BEGIN
 ALTER TABLE "mez_fez_video_link" ADD CONSTRAINT "mez_fez_video_link_updated_by_profiles_id_fk" FOREIGN KEY ("updated_by") REFERENCES "public"."profiles"("id") ON DELETE cascade ON UPDATE no action;
EXCEPTION
 WHEN duplicate_object THEN null;
END $$;
--> statement-breakpoint
DO $$ BEGIN
 ALTER TABLE "mez_fez_video_link" ADD CONSTRAINT "mez_fez_video_link_mez_fes_minigame_id_mez_fes_profile_id_mez_fes_mez_fes_minigame_id_profile_id_fk" FOREIGN KEY ("mez_fes_minigame_id","mez_fes_profile_id") REFERENCES "public"."mez_fes"("mez_fes_minigame_id","profile_id") ON DELETE cascade ON UPDATE no action;
EXCEPTION
 WHEN duplicate_object THEN null;
END $$;
--> statement-breakpoint
DO $$ BEGIN
 ALTER TABLE "penalty_acknowledgments" ADD CONSTRAINT "penalty_acknowledgments_penalty_id_user_penalties_id_fk" FOREIGN KEY ("penalty_id") REFERENCES "public"."user_penalties"("id") ON DELETE no action ON UPDATE no action;
EXCEPTION
 WHEN duplicate_object THEN null;
END $$;
--> statement-breakpoint
DO $$ BEGIN
 ALTER TABLE "penalty_appeals" ADD CONSTRAINT "penalty_appeals_penalty_id_user_penalties_id_fk" FOREIGN KEY ("penalty_id") REFERENCES "public"."user_penalties"("id") ON DELETE cascade ON UPDATE no action;
EXCEPTION
 WHEN duplicate_object THEN null;
END $$;
--> statement-breakpoint
DO $$ BEGIN
 ALTER TABLE "penalty_history" ADD CONSTRAINT "penalty_history_penalty_id_user_penalties_id_fk" FOREIGN KEY ("penalty_id") REFERENCES "public"."user_penalties"("id") ON DELETE cascade ON UPDATE no action;
EXCEPTION
 WHEN duplicate_object THEN null;
END $$;
--> statement-breakpoint
DO $$ BEGIN
 ALTER TABLE "pinned_quests" ADD CONSTRAINT "pinned_quests_user_id_profiles_id_fk" FOREIGN KEY ("user_id") REFERENCES "public"."profiles"("id") ON DELETE cascade ON UPDATE no action;
EXCEPTION
 WHEN duplicate_object THEN null;
END $$;
--> statement-breakpoint
DO $$ BEGIN
 ALTER TABLE "pinned_quests" ADD CONSTRAINT "pinned_quests_quest_hash_quest_profile_id_quests_quest_hash_profile_id_fk" FOREIGN KEY ("quest_hash","quest_profile_id") REFERENCES "public"."quests"("quest_hash","profile_id") ON DELETE cascade ON UPDATE no action;
EXCEPTION
 WHEN duplicate_object THEN null;
END $$;
--> statement-breakpoint
DO $$ BEGIN
 ALTER TABLE "profile_themes" ADD CONSTRAINT "profile_themes_profile_id_profiles_id_fk" FOREIGN KEY ("profile_id") REFERENCES "public"."profiles"("id") ON DELETE cascade ON UPDATE no action;
EXCEPTION
 WHEN duplicate_object THEN null;
END $$;
--> statement-breakpoint
DO $$ BEGIN
 ALTER TABLE "profiles" ADD CONSTRAINT "profiles_id_users_id_fk" FOREIGN KEY ("id") REFERENCES "auth"."users"("id") ON DELETE cascade ON UPDATE no action;
EXCEPTION
 WHEN duplicate_object THEN null;
END $$;
--> statement-breakpoint
DO $$ BEGIN
 ALTER TABLE "quest_reactions" ADD CONSTRAINT "quest_reactions_user_id_profiles_id_fk" FOREIGN KEY ("user_id") REFERENCES "public"."profiles"("id") ON DELETE cascade ON UPDATE no action;
EXCEPTION
 WHEN duplicate_object THEN null;
END $$;
--> statement-breakpoint
DO $$ BEGIN
 ALTER TABLE "quest_reactions" ADD CONSTRAINT "quest_reactions_quest_hash_quest_profile_id_quests_quest_hash_profile_id_fk" FOREIGN KEY ("quest_hash","quest_profile_id") REFERENCES "public"."quests"("quest_hash","profile_id") ON DELETE cascade ON UPDATE no action;
EXCEPTION
 WHEN duplicate_object THEN null;
END $$;
--> statement-breakpoint
DO $$ BEGIN
 ALTER TABLE "quest_status" ADD CONSTRAINT "quest_status_updated_by_profiles_id_fk" FOREIGN KEY ("updated_by") REFERENCES "public"."profiles"("id") ON DELETE cascade ON UPDATE no action;
EXCEPTION
 WHEN duplicate_object THEN null;
END $$;
--> statement-breakpoint
DO $$ BEGIN
 ALTER TABLE "quest_status" ADD CONSTRAINT "quest_status_quest_hash_quest_profile_id_quests_quest_hash_profile_id_fk" FOREIGN KEY ("quest_hash","quest_profile_id") REFERENCES "public"."quests"("quest_hash","profile_id") ON DELETE cascade ON UPDATE no action;
EXCEPTION
 WHEN duplicate_object THEN null;
END $$;
--> statement-breakpoint
DO $$ BEGIN
 ALTER TABLE "quest_video_link" ADD CONSTRAINT "quest_video_link_updated_by_profiles_id_fk" FOREIGN KEY ("updated_by") REFERENCES "public"."profiles"("id") ON DELETE cascade ON UPDATE no action;
EXCEPTION
 WHEN duplicate_object THEN null;
END $$;
--> statement-breakpoint
DO $$ BEGIN
 ALTER TABLE "quest_video_link" ADD CONSTRAINT "quest_video_link_quest_hash_quest_profile_id_quests_quest_hash_profile_id_fk" FOREIGN KEY ("quest_hash","quest_profile_id") REFERENCES "public"."quests"("quest_hash","profile_id") ON DELETE cascade ON UPDATE no action;
EXCEPTION
 WHEN duplicate_object THEN null;
END $$;
--> statement-breakpoint
DO $$ BEGIN
 ALTER TABLE "quests" ADD CONSTRAINT "quests_profile_id_profiles_id_fk" FOREIGN KEY ("profile_id") REFERENCES "public"."profiles"("id") ON DELETE cascade ON UPDATE no action;
EXCEPTION
 WHEN duplicate_object THEN null;
END $$;
--> statement-breakpoint
DO $$ BEGIN
 ALTER TABLE "timeout_restrictions" ADD CONSTRAINT "timeout_restrictions_penalty_id_user_penalties_id_fk" FOREIGN KEY ("penalty_id") REFERENCES "public"."user_penalties"("id") ON DELETE no action ON UPDATE no action;
EXCEPTION
 WHEN duplicate_object THEN null;
END $$;
--> statement-breakpoint
DO $$ BEGIN
 ALTER TABLE "titles" ADD CONSTRAINT "titles_profile_id_profiles_id_fk" FOREIGN KEY ("profile_id") REFERENCES "public"."profiles"("id") ON DELETE cascade ON UPDATE no action;
EXCEPTION
 WHEN duplicate_object THEN null;
END $$;
--> statement-breakpoint
DO $$ BEGIN
 ALTER TABLE "user_penalties" ADD CONSTRAINT "user_penalties_reason_id_penalty_reasons_id_fk" FOREIGN KEY ("reason_id") REFERENCES "public"."penalty_reasons"("id") ON DELETE cascade ON UPDATE no action;
EXCEPTION
 WHEN duplicate_object THEN null;
END $$;
--> statement-breakpoint
CREATE INDEX IF NOT EXISTS "idx_penalty_acknowledgments_penalty_id" ON "penalty_acknowledgments" USING btree ("penalty_id");--> statement-breakpoint
CREATE INDEX IF NOT EXISTS "idx_penalty_acknowledgments_user_id" ON "penalty_acknowledgments" USING btree ("user_id");--> statement-breakpoint
CREATE INDEX IF NOT EXISTS "idx_penalty_appeals_penalty_id" ON "penalty_appeals" USING btree ("penalty_id");--> statement-breakpoint
CREATE INDEX IF NOT EXISTS "idx_penalty_history_penalty_id" ON "penalty_history" USING btree ("penalty_id");--> statement-breakpoint
CREATE INDEX IF NOT EXISTS "idx_user_penalties_user_id" ON "user_penalties" USING btree ("user_id");--> statement-breakpoint
CREATE INDEX IF NOT EXISTS "idx_user_penalties_status" ON "user_penalties" USING btree ("status");