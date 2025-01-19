CREATE TABLE IF NOT EXISTS "profile_avatars" (
	"profile_avatar_id" integer NOT NULL,
	"obtained_date" timestamp with time zone DEFAULT now() NOT NULL,
	"profile_id" uuid NOT NULL,
	CONSTRAINT "profile_avatars_profile_avatar_id_profile_id_pk" PRIMARY KEY("profile_avatar_id","profile_id")
);
--> statement-breakpoint
ALTER TABLE "profile_avatars" ENABLE ROW LEVEL SECURITY;--> statement-breakpoint
ALTER TABLE "emblems" RENAME TO "profile_emblems";--> statement-breakpoint
ALTER TABLE "titles" RENAME TO "profile_titles";--> statement-breakpoint
ALTER TABLE "profile_emblems" RENAME COLUMN "emblem_id" TO "profile_emblem_id";--> statement-breakpoint
ALTER TABLE "profile_titles" RENAME COLUMN "title_id" TO "profile_title_id";--> statement-breakpoint
ALTER TABLE "profile_emblems" DROP CONSTRAINT "emblems_profile_id_profiles_id_fk";
--> statement-breakpoint
ALTER TABLE "profile_titles" DROP CONSTRAINT "titles_profile_id_profiles_id_fk";
--> statement-breakpoint
DROP INDEX IF EXISTS "idx_emblems_profile_id";--> statement-breakpoint
DROP INDEX IF EXISTS "idx_titles_profile_id";--> statement-breakpoint
ALTER TABLE "profile_emblems" DROP CONSTRAINT "emblems_emblem_id_profile_id_pk";--> statement-breakpoint
ALTER TABLE "profile_titles" DROP CONSTRAINT "titles_title_id_profile_id_pk";--> statement-breakpoint
ALTER TABLE "profile_emblems" ADD CONSTRAINT "profile_emblems_profile_emblem_id_profile_id_pk" PRIMARY KEY("profile_emblem_id","profile_id");--> statement-breakpoint
ALTER TABLE "profile_titles" ADD CONSTRAINT "profile_titles_profile_title_id_profile_id_pk" PRIMARY KEY("profile_title_id","profile_id");--> statement-breakpoint
DO $$ BEGIN
 ALTER TABLE "profile_avatars" ADD CONSTRAINT "profile_avatars_profile_id_profiles_id_fk" FOREIGN KEY ("profile_id") REFERENCES "public"."profiles"("id") ON DELETE cascade ON UPDATE no action;
EXCEPTION
 WHEN duplicate_object THEN null;
END $$;
--> statement-breakpoint
CREATE INDEX IF NOT EXISTS "idx_profile_avatars_profile_id" ON "profile_avatars" USING btree ("profile_id");--> statement-breakpoint
DO $$ BEGIN
 ALTER TABLE "profile_emblems" ADD CONSTRAINT "profile_emblems_profile_id_profiles_id_fk" FOREIGN KEY ("profile_id") REFERENCES "public"."profiles"("id") ON DELETE cascade ON UPDATE no action;
EXCEPTION
 WHEN duplicate_object THEN null;
END $$;
--> statement-breakpoint
DO $$ BEGIN
 ALTER TABLE "profile_titles" ADD CONSTRAINT "profile_titles_profile_id_profiles_id_fk" FOREIGN KEY ("profile_id") REFERENCES "public"."profiles"("id") ON DELETE cascade ON UPDATE no action;
EXCEPTION
 WHEN duplicate_object THEN null;
END $$;
--> statement-breakpoint
CREATE INDEX IF NOT EXISTS "idx_profile_emblems_profile_id" ON "profile_emblems" USING btree ("profile_id");--> statement-breakpoint
CREATE INDEX IF NOT EXISTS "idx_profile_titles_profile_id" ON "profile_titles" USING btree ("profile_id");--> statement-breakpoint
CREATE POLICY "Table is viewable by everyone" ON "profile_avatars" AS PERMISSIVE FOR SELECT TO "anon", "authenticated" USING (true);--> statement-breakpoint
CREATE POLICY "Authenticated users who set a public profile can insert their own row" ON "profile_avatars" AS PERMISSIVE FOR INSERT TO "authenticated" WITH CHECK (
			(select auth.uid()) = profile_id
			and (
				select username_set
				from profiles
				where id = (select auth.uid())
				limit 1
			) = true);