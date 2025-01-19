DROP INDEX IF EXISTS "idx_favorite_quests_profile_id_quest_hash";--> statement-breakpoint
DROP INDEX IF EXISTS "idx_pinned_quests_profile_id_quest_hash";--> statement-breakpoint
DROP INDEX IF EXISTS "idx_quest_reactions_profile_id_quest_hash";--> statement-breakpoint
CREATE INDEX IF NOT EXISTS "idx_favorite_quests_profile_id" ON "favorite_quests" USING btree ("profile_id");--> statement-breakpoint
CREATE INDEX IF NOT EXISTS "idx_favorite_quests_quest_hash_profile_id" ON "favorite_quests" USING btree ("quest_hash","profile_id");--> statement-breakpoint
CREATE INDEX IF NOT EXISTS "idx_pinned_quests_profile_id" ON "pinned_quests" USING btree ("profile_id");--> statement-breakpoint
CREATE INDEX IF NOT EXISTS "idx_pinned_quests_quest_hash_profile_id" ON "pinned_quests" USING btree ("quest_hash","profile_id");--> statement-breakpoint
CREATE INDEX IF NOT EXISTS "idx_quest_reactions_profile_id" ON "quest_reactions" USING btree ("profile_id");--> statement-breakpoint
CREATE INDEX IF NOT EXISTS "idx_quest_reactions_quest_hash_profile_id" ON "quest_reactions" USING btree ("quest_hash","profile_id");