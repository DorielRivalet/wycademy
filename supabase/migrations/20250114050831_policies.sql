CREATE TYPE "public"."activity_type" AS ENUM('run_submission', 'set_submission', 'new_follower', 'follow_user', 'world_record', 'personal_best', 'trophy', 'achievement', 'title', 'emblem', 'theme', 'profile_update', 'run_reaction', 'favorite_set', 'favorite_run', 'donation');--> statement-breakpoint
CREATE TABLE IF NOT EXISTS "activities" (
	"id" integer PRIMARY KEY GENERATED ALWAYS AS IDENTITY (sequence name "activities_id_seq" INCREMENT BY 1 MINVALUE 1 MAXVALUE 2147483647 START WITH 1 CACHE 1),
	"profile_id" uuid NOT NULL,
	"activity_type" "activity_type" NOT NULL,
	"created_at" timestamp with time zone DEFAULT now() NOT NULL,
	"metadata" jsonb
);
--> statement-breakpoint
ALTER TABLE "activities" ENABLE ROW LEVEL SECURITY;--> statement-breakpoint
CREATE TABLE IF NOT EXISTS "moderation_history" (
	"id" integer PRIMARY KEY GENERATED ALWAYS AS IDENTITY (sequence name "moderation_history_id_seq" INCREMENT BY 1 MINVALUE 1 MAXVALUE 2147483647 START WITH 1 CACHE 1),
	"penalty_type" "penalty_type" NOT NULL,
	"created_at" timestamp with time zone DEFAULT now() NOT NULL,
	CONSTRAINT "moderation_history_penalty_type_unique" UNIQUE("penalty_type")
);
--> statement-breakpoint
ALTER TABLE "moderation_history" ENABLE ROW LEVEL SECURITY;--> statement-breakpoint
ALTER TABLE "countries" ENABLE ROW LEVEL SECURITY;--> statement-breakpoint
ALTER TABLE "penalty_type_configs" RENAME TO "penalty_type_configuration";--> statement-breakpoint
ALTER TABLE "favorite_quests" RENAME COLUMN "user_id" TO "profile_id";--> statement-breakpoint
ALTER TABLE "followers" RENAME COLUMN "user_id" TO "profile_id";--> statement-breakpoint
ALTER TABLE "pinned_quests" RENAME COLUMN "user_id" TO "profile_id";--> statement-breakpoint
ALTER TABLE "quest_reactions" RENAME COLUMN "user_id" TO "profile_id";--> statement-breakpoint
ALTER TABLE "penalty_type_configuration" DROP CONSTRAINT "penalty_type_configs_penalty_type_unique";--> statement-breakpoint
ALTER TABLE "favorite_quests" DROP CONSTRAINT "favorite_quests_user_id_profiles_id_fk";
--> statement-breakpoint
ALTER TABLE "followers" DROP CONSTRAINT "followers_user_id_profiles_id_fk";
--> statement-breakpoint
ALTER TABLE "pinned_quests" DROP CONSTRAINT "pinned_quests_user_id_profiles_id_fk";
--> statement-breakpoint
ALTER TABLE "quest_reactions" DROP CONSTRAINT "quest_reactions_user_id_profiles_id_fk";
--> statement-breakpoint
ALTER TABLE "favorite_quests" DROP CONSTRAINT "favorite_quests_user_id_quest_hash_quest_profile_id_pk";--> statement-breakpoint
ALTER TABLE "followers" DROP CONSTRAINT "followers_user_id_follower_id_pk";--> statement-breakpoint
ALTER TABLE "pinned_quests" DROP CONSTRAINT "pinned_quests_user_id_quest_hash_quest_profile_id_pk";--> statement-breakpoint
ALTER TABLE "quest_reactions" DROP CONSTRAINT "quest_reactions_user_id_quest_hash_quest_profile_id_reaction_pk";--> statement-breakpoint
ALTER TABLE "favorite_quests" ADD CONSTRAINT "favorite_quests_profile_id_quest_hash_quest_profile_id_pk" PRIMARY KEY("profile_id","quest_hash","quest_profile_id");--> statement-breakpoint
ALTER TABLE "followers" ADD CONSTRAINT "followers_profile_id_follower_id_pk" PRIMARY KEY("profile_id","follower_id");--> statement-breakpoint
ALTER TABLE "pinned_quests" ADD CONSTRAINT "pinned_quests_profile_id_quest_hash_quest_profile_id_pk" PRIMARY KEY("profile_id","quest_hash","quest_profile_id");--> statement-breakpoint
ALTER TABLE "quest_reactions" ADD CONSTRAINT "quest_reactions_profile_id_quest_hash_quest_profile_id_reaction_pk" PRIMARY KEY("profile_id","quest_hash","quest_profile_id","reaction");--> statement-breakpoint
CREATE INDEX IF NOT EXISTS "idx_activities_user_created" ON "activities" USING btree ("profile_id","created_at" DESC NULLS LAST);--> statement-breakpoint
DO $$ BEGIN
 ALTER TABLE "favorite_quests" ADD CONSTRAINT "favorite_quests_profile_id_profiles_id_fk" FOREIGN KEY ("profile_id") REFERENCES "public"."profiles"("id") ON DELETE cascade ON UPDATE no action;
EXCEPTION
 WHEN duplicate_object THEN null;
END $$;
--> statement-breakpoint
DO $$ BEGIN
 ALTER TABLE "followers" ADD CONSTRAINT "followers_profile_id_profiles_id_fk" FOREIGN KEY ("profile_id") REFERENCES "public"."profiles"("id") ON DELETE cascade ON UPDATE no action;
EXCEPTION
 WHEN duplicate_object THEN null;
END $$;
--> statement-breakpoint
DO $$ BEGIN
 ALTER TABLE "pinned_quests" ADD CONSTRAINT "pinned_quests_profile_id_profiles_id_fk" FOREIGN KEY ("profile_id") REFERENCES "public"."profiles"("id") ON DELETE cascade ON UPDATE no action;
EXCEPTION
 WHEN duplicate_object THEN null;
END $$;
--> statement-breakpoint
DO $$ BEGIN
 ALTER TABLE "quest_reactions" ADD CONSTRAINT "quest_reactions_profile_id_profiles_id_fk" FOREIGN KEY ("profile_id") REFERENCES "public"."profiles"("id") ON DELETE cascade ON UPDATE no action;
EXCEPTION
 WHEN duplicate_object THEN null;
END $$;
--> statement-breakpoint
CREATE INDEX IF NOT EXISTS "idx_achievements_profile_id" ON "achievements" USING btree ("profile_id");--> statement-breakpoint
CREATE INDEX IF NOT EXISTS "idx_emblems_profile_id" ON "emblems" USING btree ("profile_id");--> statement-breakpoint
CREATE INDEX IF NOT EXISTS "idx_favorite_quests_profile_id" ON "favorite_quests" USING btree ("profile_id");--> statement-breakpoint
CREATE INDEX IF NOT EXISTS "idx_favorite_quests_quest_hash" ON "favorite_quests" USING btree ("quest_hash");--> statement-breakpoint
CREATE INDEX IF NOT EXISTS "idx_followers_profile_id" ON "followers" USING btree ("profile_id");--> statement-breakpoint
CREATE INDEX IF NOT EXISTS "idx_followers_follower_id" ON "followers" USING btree ("follower_id");--> statement-breakpoint
CREATE INDEX IF NOT EXISTS "idx_mez_fes_profile_id" ON "mez_fes" USING btree ("profile_id");--> statement-breakpoint
CREATE INDEX IF NOT EXISTS "idx_mez_fes_updated_by" ON "mez_fes" USING btree ("updated_by");--> statement-breakpoint
CREATE INDEX IF NOT EXISTS "idx_mez_fez_video_link_updated_by" ON "mez_fez_video_link" USING btree ("updated_by");--> statement-breakpoint
CREATE INDEX IF NOT EXISTS "idx_mez_fez_video_link_minigame_id" ON "mez_fez_video_link" USING btree ("mez_fes_minigame_id");--> statement-breakpoint
CREATE INDEX IF NOT EXISTS "idx_mez_fez_video_link_mez_fes_profile_id" ON "mez_fez_video_link" USING btree ("mez_fes_profile_id");--> statement-breakpoint
CREATE INDEX IF NOT EXISTS "idx_pinned_quests_profile_id" ON "pinned_quests" USING btree ("profile_id");--> statement-breakpoint
CREATE INDEX IF NOT EXISTS "idx_pinned_quests_quest_hash" ON "pinned_quests" USING btree ("quest_hash");--> statement-breakpoint
CREATE INDEX IF NOT EXISTS "idx_profile_themes_profile_id" ON "profile_themes" USING btree ("profile_id");--> statement-breakpoint
CREATE INDEX IF NOT EXISTS "idx_quest_reactions_profile_id" ON "quest_reactions" USING btree ("profile_id");--> statement-breakpoint
CREATE INDEX IF NOT EXISTS "idx_quest_reactions_quest_hash" ON "quest_reactions" USING btree ("quest_hash");--> statement-breakpoint
CREATE INDEX IF NOT EXISTS "idx_quest_status_updated_by" ON "quest_status" USING btree ("updated_by");--> statement-breakpoint
CREATE INDEX IF NOT EXISTS "idx_quest_status_quest_hash" ON "quest_status" USING btree ("quest_hash");--> statement-breakpoint
CREATE INDEX IF NOT EXISTS "idx_quest_status_quest_profile_id" ON "quest_status" USING btree ("quest_profile_id");--> statement-breakpoint
CREATE INDEX IF NOT EXISTS "idx_quest_video_link_updated_by" ON "quest_video_link" USING btree ("updated_by");--> statement-breakpoint
CREATE INDEX IF NOT EXISTS "idx_quest_video_link_quest_hash" ON "quest_video_link" USING btree ("quest_hash");--> statement-breakpoint
CREATE INDEX IF NOT EXISTS "idx_quest_video_link_quest_profile_id" ON "quest_video_link" USING btree ("quest_profile_id");--> statement-breakpoint
CREATE INDEX IF NOT EXISTS "idx_quests_profile_id" ON "quests" USING btree ("profile_id");--> statement-breakpoint
CREATE INDEX IF NOT EXISTS "idx_timeout_restrictions_penalty_id" ON "timeout_restrictions" USING btree ("penalty_id");--> statement-breakpoint
CREATE INDEX IF NOT EXISTS "idx_titles_profile_id" ON "titles" USING btree ("profile_id");--> statement-breakpoint
CREATE INDEX IF NOT EXISTS "idx_user_penalties_reason_id" ON "user_penalties" USING btree ("reason_id");--> statement-breakpoint
ALTER TABLE "penalty_type_configuration" ADD CONSTRAINT "penalty_type_configuration_penalty_type_unique" UNIQUE("penalty_type");--> statement-breakpoint
CREATE VIEW "public"."activity_feed_view" WITH (security_invoker = true) AS (select "activities"."id", "activities"."profile_id", "profiles"."username", "activities"."activity_type", "activities"."created_at", "activities"."metadata" from "activities" full join "profiles" on "profiles"."id" = "activities"."profile_id" order by "activities"."created_at" desc);--> statement-breakpoint
CREATE POLICY "Table is viewable by everyone" ON "achievements" AS PERMISSIVE FOR SELECT TO "anon", "authenticated" USING (true);--> statement-breakpoint
CREATE POLICY "Authenticated users who set a public profile can insert their own row" ON "achievements" AS PERMISSIVE FOR INSERT TO "authenticated" WITH CHECK (
			(select auth.uid()) = profile_id
			and (
				select username_set
				from profiles
				where id = (select auth.uid())
				limit 1
			) = true);--> statement-breakpoint
CREATE POLICY "Allow moderators to see any table row" ON "countries" AS PERMISSIVE FOR SELECT TO "authenticated" USING ((select auth.jwt() -> 'app_metadata' ->> 'user_role') = '"moderator"');--> statement-breakpoint
CREATE POLICY "Table is viewable by everyone" ON "emblems" AS PERMISSIVE FOR SELECT TO "anon", "authenticated" USING (true);--> statement-breakpoint
CREATE POLICY "Authenticated users who set a public profile can insert their own row" ON "emblems" AS PERMISSIVE FOR INSERT TO "authenticated" WITH CHECK (
			(select auth.uid()) = profile_id
			and (
				select username_set
				from profiles
				where id = (select auth.uid())
				limit 1
			) = true);--> statement-breakpoint
CREATE POLICY "Table is viewable by everyone" ON "favorite_quests" AS PERMISSIVE FOR SELECT TO "anon", "authenticated" USING (true);--> statement-breakpoint
CREATE POLICY "Authenticated users who set a public profile can insert their own row" ON "favorite_quests" AS PERMISSIVE FOR INSERT TO "authenticated" WITH CHECK (
			(select auth.uid()) = profile_id
			and (
				select username_set
				from profiles
				where id = (select auth.uid())
				limit 1
			) = true);--> statement-breakpoint
CREATE POLICY "Authenticated users who set a public profile can delete their own row" ON "favorite_quests" AS PERMISSIVE FOR DELETE TO "authenticated" USING (
			(select auth.uid()) = profile_id
			and (
				select username_set
				from profiles
				where id = (select auth.uid())
				limit 1
			) = true);--> statement-breakpoint
CREATE POLICY "Table is viewable by everyone" ON "followers" AS PERMISSIVE FOR SELECT TO "anon", "authenticated" USING (true);--> statement-breakpoint
CREATE POLICY "Authenticated users who set a public profile can insert their own row" ON "followers" AS PERMISSIVE FOR INSERT TO "authenticated" WITH CHECK (
			(select auth.uid()) = profile_id
			and (
				select username_set
				from profiles
				where id = (select auth.uid())
				limit 1
			) = true);--> statement-breakpoint
CREATE POLICY "Authenticated users who set a public profile can delete their own row" ON "followers" AS PERMISSIVE FOR DELETE TO "authenticated" USING (
			(select auth.uid()) = profile_id
			and (
				select username_set
				from profiles
				where id = (select auth.uid())
				limit 1
			) = true);--> statement-breakpoint
CREATE POLICY "Table is viewable by everyone" ON "mez_fes" AS PERMISSIVE FOR SELECT TO "anon", "authenticated" USING (true);--> statement-breakpoint
CREATE POLICY "Authenticated users who set a public profile can insert their own row" ON "mez_fes" AS PERMISSIVE FOR INSERT TO "authenticated" WITH CHECK (
			(select auth.uid()) = profile_id
			and (
				select username_set
				from profiles
				where id = (select auth.uid())
				limit 1
			) = true);--> statement-breakpoint
CREATE POLICY "Table is viewable by everyone" ON "mez_fez_video_link" AS PERMISSIVE FOR SELECT TO "anon", "authenticated" USING (true);--> statement-breakpoint
CREATE POLICY "Allow moderators to update any table row" ON "mez_fez_video_link" AS PERMISSIVE FOR UPDATE TO "authenticated" USING ((select auth.jwt() -> 'app_metadata' ->> 'user_role') = '"moderator"') WITH CHECK ((select auth.jwt() -> 'app_metadata' ->> 'user_role') = '"moderator"');--> statement-breakpoint
CREATE POLICY "Authenticated users who set a public profile can insert their own row" ON "mez_fez_video_link" AS PERMISSIVE FOR INSERT TO "authenticated" WITH CHECK (
			(select auth.uid()) = mez_fes_profile_id
			and (
				select username_set
				from profiles
				where id = (select auth.uid())
				limit 1
			) = true);--> statement-breakpoint
CREATE POLICY "Authenticated users who set a public profile can update their own row" ON "mez_fez_video_link" AS PERMISSIVE FOR UPDATE TO "authenticated" USING (
				(select auth.uid()) = mez_fes_profile_id
				and (
					select username_set
					from profiles
					where id = (select auth.uid())
					limit 1
				) = true) WITH CHECK (
			(select auth.uid()) = mez_fes_profile_id
			and (
				select username_set
				from profiles
				where id = (select auth.uid())
				limit 1
			) = true);--> statement-breakpoint
CREATE POLICY "Allow moderators to see any table row" ON "moderation_logs_quest" AS PERMISSIVE FOR SELECT TO "authenticated" USING ((select auth.jwt() -> 'app_metadata' ->> 'user_role') = '"moderator"');--> statement-breakpoint
CREATE POLICY "Allow moderators to see any table row" ON "penalty_acknowledgments" AS PERMISSIVE FOR SELECT TO "authenticated" USING ((select auth.jwt() -> 'app_metadata' ->> 'user_role') = '"moderator"');--> statement-breakpoint
CREATE POLICY "Allow moderators to insert any table row" ON "penalty_acknowledgments" AS PERMISSIVE FOR INSERT TO "authenticated" WITH CHECK ((select auth.jwt() -> 'app_metadata' ->> 'user_role') = '"moderator"');--> statement-breakpoint
CREATE POLICY "Allow authenticated to see only their table rows" ON "penalty_acknowledgments" AS PERMISSIVE FOR SELECT TO "authenticated" USING ((select auth.uid()) = user_id);--> statement-breakpoint
CREATE POLICY "Allow authenticated to update only their table rows" ON "penalty_acknowledgments" AS PERMISSIVE FOR UPDATE TO "authenticated" USING ((select auth.uid()) = user_id) WITH CHECK ((select auth.uid()) = user_id);--> statement-breakpoint
CREATE POLICY "Allow moderators to see any table row" ON "penalty_appeals" AS PERMISSIVE FOR SELECT TO "authenticated" USING ((select auth.jwt() -> 'app_metadata' ->> 'user_role') = '"moderator"');--> statement-breakpoint
CREATE POLICY "Allow moderators to update any table row" ON "penalty_appeals" AS PERMISSIVE FOR UPDATE TO "authenticated" USING ((select auth.jwt() -> 'app_metadata' ->> 'user_role') = '"moderator"') WITH CHECK ((select auth.jwt() -> 'app_metadata' ->> 'user_role') = '"moderator"');--> statement-breakpoint
CREATE POLICY "Allow authenticated to insert only their table rows" ON "penalty_appeals" AS PERMISSIVE FOR INSERT TO "authenticated" WITH CHECK ((select auth.uid()) = user_id);--> statement-breakpoint
CREATE POLICY "Allow moderators to see any table row" ON "penalty_history" AS PERMISSIVE FOR SELECT TO "authenticated" USING ((select auth.jwt() -> 'app_metadata' ->> 'user_role') = '"moderator"');--> statement-breakpoint
CREATE POLICY "Allow moderators to see any table row" ON "penalty_reasons" AS PERMISSIVE FOR SELECT TO "authenticated" USING ((select auth.jwt() -> 'app_metadata' ->> 'user_role') = '"moderator"');--> statement-breakpoint
CREATE POLICY "Allow moderators to update any table row" ON "penalty_reasons" AS PERMISSIVE FOR UPDATE TO "authenticated" USING ((select auth.jwt() -> 'app_metadata' ->> 'user_role') = '"moderator"') WITH CHECK ((select auth.jwt() -> 'app_metadata' ->> 'user_role') = '"moderator"');--> statement-breakpoint
CREATE POLICY "Allow moderators to insert any table row" ON "penalty_reasons" AS PERMISSIVE FOR INSERT TO "authenticated" WITH CHECK ((select auth.jwt() -> 'app_metadata' ->> 'user_role') = '"moderator"');--> statement-breakpoint
CREATE POLICY "Table is viewable by everyone" ON "pinned_quests" AS PERMISSIVE FOR SELECT TO "anon", "authenticated" USING (true);--> statement-breakpoint
CREATE POLICY "Authenticated users who set a public profile can insert their own row" ON "pinned_quests" AS PERMISSIVE FOR INSERT TO "authenticated" WITH CHECK (
			(select auth.uid()) = profile_id
			and (
				select username_set
				from profiles
				where id = (select auth.uid())
				limit 1
			) = true);--> statement-breakpoint
CREATE POLICY "Authenticated users who set a public profile can delete their own row" ON "pinned_quests" AS PERMISSIVE FOR DELETE TO "authenticated" USING (
			(select auth.uid()) = profile_id
			and (
				select username_set
				from profiles
				where id = (select auth.uid())
				limit 1
			) = true);--> statement-breakpoint
CREATE POLICY "Table is viewable by everyone" ON "profile_themes" AS PERMISSIVE FOR SELECT TO "anon", "authenticated" USING (true);--> statement-breakpoint
CREATE POLICY "Authenticated users who set a public profile can insert their own row" ON "profile_themes" AS PERMISSIVE FOR INSERT TO "authenticated" WITH CHECK (
			(select auth.uid()) = profile_id
			and (
				select username_set
				from profiles
				where id = (select auth.uid())
				limit 1
			) = true);--> statement-breakpoint
CREATE POLICY "Table is viewable by everyone" ON "profiles" AS PERMISSIVE FOR SELECT TO "anon", "authenticated" USING (true);--> statement-breakpoint
CREATE POLICY "Allow authenticated to insert only their table rows" ON "profiles" AS PERMISSIVE FOR INSERT TO "authenticated" WITH CHECK ((select auth.uid()) = id);--> statement-breakpoint
CREATE POLICY "Allow authenticated to update only their table rows" ON "profiles" AS PERMISSIVE FOR UPDATE TO "authenticated" USING ((select auth.uid()) = id) WITH CHECK ((select auth.uid()) = id);--> statement-breakpoint
CREATE POLICY "Table is viewable by everyone" ON "quest_reactions" AS PERMISSIVE FOR SELECT TO "anon", "authenticated" USING (true);--> statement-breakpoint
CREATE POLICY "Authenticated users who set a public profile can insert their own row" ON "quest_reactions" AS PERMISSIVE FOR INSERT TO "authenticated" WITH CHECK (
			(select auth.uid()) = profile_id
			and (
				select username_set
				from profiles
				where id = (select auth.uid())
				limit 1
			) = true);--> statement-breakpoint
CREATE POLICY "Authenticated users who set a public profile can delete their own row" ON "quest_reactions" AS PERMISSIVE FOR DELETE TO "authenticated" USING (
			(select auth.uid()) = profile_id
			and (
				select username_set
				from profiles
				where id = (select auth.uid())
				limit 1
			) = true);--> statement-breakpoint
CREATE POLICY "Table is viewable by everyone" ON "quest_status" AS PERMISSIVE FOR SELECT TO "anon", "authenticated" USING (true);--> statement-breakpoint
CREATE POLICY "Authenticated users who set a public profile can insert their own row" ON "quest_status" AS PERMISSIVE FOR INSERT TO "authenticated" WITH CHECK (
			(select auth.uid()) = quest_profile_id
			and (
				select username_set
				from profiles
				where id = (select auth.uid())
				limit 1
			) = true);--> statement-breakpoint
CREATE POLICY "Allow moderators to update any table row" ON "quest_status" AS PERMISSIVE FOR UPDATE TO "authenticated" USING ((select auth.jwt() -> 'app_metadata' ->> 'user_role') = '"moderator"') WITH CHECK ((select auth.jwt() -> 'app_metadata' ->> 'user_role') = '"moderator"');--> statement-breakpoint
CREATE POLICY "Table is viewable by everyone" ON "quest_video_link" AS PERMISSIVE FOR SELECT TO "anon", "authenticated" USING (true);--> statement-breakpoint
CREATE POLICY "Allow moderators to update any table row" ON "quest_video_link" AS PERMISSIVE FOR UPDATE TO "authenticated" USING ((select auth.jwt() -> 'app_metadata' ->> 'user_role') = '"moderator"') WITH CHECK ((select auth.jwt() -> 'app_metadata' ->> 'user_role') = '"moderator"');--> statement-breakpoint
CREATE POLICY "Authenticated users who set a public profile can insert their own row" ON "quest_video_link" AS PERMISSIVE FOR INSERT TO "authenticated" WITH CHECK (
			(select auth.uid()) = quest_profile_id
			and (
				select username_set
				from profiles
				where id = (select auth.uid())
				limit 1
			) = true);--> statement-breakpoint
CREATE POLICY "Authenticated users who set a public profile can update their own row" ON "quest_video_link" AS PERMISSIVE FOR UPDATE TO "authenticated" USING (
				(select auth.uid()) = quest_profile_id
				and (
					select username_set
					from profiles
					where id = (select auth.uid())
					limit 1
				) = true) WITH CHECK (
			(select auth.uid()) = quest_profile_id
			and (
				select username_set
				from profiles
				where id = (select auth.uid())
				limit 1
			) = true);--> statement-breakpoint
CREATE POLICY "Table is viewable by everyone" ON "quests" AS PERMISSIVE FOR SELECT TO "anon", "authenticated" USING (true);--> statement-breakpoint
CREATE POLICY "Authenticated users who set a public profile can insert their own row" ON "quests" AS PERMISSIVE FOR INSERT TO "authenticated" WITH CHECK (
			(select auth.uid()) = profile_id
			and (
				select username_set
				from profiles
				where id = (select auth.uid())
				limit 1
			) = true);--> statement-breakpoint
CREATE POLICY "Allow moderators to see any table row" ON "reports_profile" AS PERMISSIVE FOR UPDATE TO "authenticated" USING ((select auth.jwt() -> 'app_metadata' ->> 'user_role') = '"moderator"');--> statement-breakpoint
CREATE POLICY "Authenticated users who set a public profile can see their own row" ON "reports_profile" AS PERMISSIVE FOR SELECT TO "authenticated" USING (
			(select auth.uid()) = profile_id
			and (
				select username_set
				from profiles
				where id = (select auth.uid())
				limit 1
			) = true);--> statement-breakpoint
CREATE POLICY "Authenticated users who set a public profile can insert their own row" ON "reports_profile" AS PERMISSIVE FOR INSERT TO "authenticated" WITH CHECK (
			(select auth.uid()) = profile_id
			and (
				select username_set
				from profiles
				where id = (select auth.uid())
				limit 1
			) = true);--> statement-breakpoint
CREATE POLICY "Allow moderators to see any table row" ON "reports_quest" AS PERMISSIVE FOR UPDATE TO "authenticated" USING ((select auth.jwt() -> 'app_metadata' ->> 'user_role') = '"moderator"');--> statement-breakpoint
CREATE POLICY "Authenticated users who set a public profile can see their own row" ON "reports_quest" AS PERMISSIVE FOR SELECT TO "authenticated" USING (
			(select auth.uid()) = reporter_id
			and (
				select username_set
				from profiles
				where id = (select auth.uid())
				limit 1
			) = true);--> statement-breakpoint
CREATE POLICY "Authenticated users who set a public profile can insert their own row" ON "reports_quest" AS PERMISSIVE FOR INSERT TO "authenticated" WITH CHECK (
			(select auth.uid()) = reporter_id
			and (
				select username_set
				from profiles
				where id = (select auth.uid())
				limit 1
			) = true);--> statement-breakpoint
CREATE POLICY "Allow moderators to see any table row" ON "timeout_restrictions" AS PERMISSIVE FOR SELECT TO "authenticated" USING ((select auth.jwt() -> 'app_metadata' ->> 'user_role') = '"moderator"');--> statement-breakpoint
CREATE POLICY "Allow moderators to insert any table row" ON "timeout_restrictions" AS PERMISSIVE FOR INSERT TO "authenticated" WITH CHECK ((select auth.jwt() -> 'app_metadata' ->> 'user_role') = '"moderator"');--> statement-breakpoint
CREATE POLICY "Allow moderators to update any table row" ON "timeout_restrictions" AS PERMISSIVE FOR UPDATE TO "authenticated" USING ((select auth.jwt() -> 'app_metadata' ->> 'user_role') = '"moderator"') WITH CHECK ((select auth.jwt() -> 'app_metadata' ->> 'user_role') = '"moderator"');--> statement-breakpoint
CREATE POLICY "Table is viewable by everyone" ON "titles" AS PERMISSIVE FOR SELECT TO "anon", "authenticated" USING (true);--> statement-breakpoint
CREATE POLICY "Authenticated users who set a public profile can insert their own row" ON "titles" AS PERMISSIVE FOR INSERT TO "authenticated" WITH CHECK (
			(select auth.uid()) = profile_id
			and (
				select username_set
				from profiles
				where id = (select auth.uid())
				limit 1
			) = true);--> statement-breakpoint
CREATE POLICY "Allow moderators to see any table row" ON "user_penalties" AS PERMISSIVE FOR SELECT TO "authenticated" USING ((select auth.jwt() -> 'app_metadata' ->> 'user_role') = '"moderator"');--> statement-breakpoint
CREATE POLICY "Allow moderators to update any table row" ON "user_penalties" AS PERMISSIVE FOR UPDATE TO "authenticated" USING ((select auth.jwt() -> 'app_metadata' ->> 'user_role') = '"moderator"') WITH CHECK ((select auth.jwt() -> 'app_metadata' ->> 'user_role') = '"moderator"');--> statement-breakpoint
CREATE POLICY "Allow moderators to insert any table row" ON "user_penalties" AS PERMISSIVE FOR INSERT TO "authenticated" WITH CHECK ((select auth.jwt() -> 'app_metadata' ->> 'user_role') = '"moderator"');--> statement-breakpoint
CREATE POLICY "Table is viewable by everyone" ON "activities" AS PERMISSIVE FOR SELECT TO "anon", "authenticated" USING (true);--> statement-breakpoint
CREATE POLICY "Authenticated users who set a public profile can insert their own row" ON "activities" AS PERMISSIVE FOR INSERT TO "authenticated" WITH CHECK (
			(select auth.uid()) = profile_id
			and (
				select username_set
				from profiles
				where id = (select auth.uid())
				limit 1
			) = true);--> statement-breakpoint
CREATE POLICY "Table is viewable by everyone" ON "moderation_history" AS PERMISSIVE FOR SELECT TO "anon", "authenticated" USING (true);