CREATE TABLE IF NOT EXISTS "countries" (
	"id" integer PRIMARY KEY GENERATED ALWAYS AS IDENTITY (sequence name "countries_id_seq" INCREMENT BY 1 MINVALUE 1 MAXVALUE 2147483647 START WITH 1 CACHE 1),
	"name" text NOT NULL
);
--> statement-breakpoint
CREATE TABLE IF NOT EXISTS "profiles" (
	"id" uuid PRIMARY KEY NOT NULL,
	"discord_username" text NOT NULL,
	"discord_avatar" text NOT NULL,
	"username" text NOT NULL,
	"twitter_username" text DEFAULT '' NOT NULL,
	"avatar" text DEFAULT 'Default' NOT NULL,
	"updated_at" timestamp DEFAULT now() NOT NULL,
	"join_date" timestamp DEFAULT now() NOT NULL,
	"emblem" text DEFAULT 'None' NOT NULL,
	"title" text DEFAULT 'None' NOT NULL,
	"country" text DEFAULT 'World' NOT NULL,
	"agreed_terms" timestamp DEFAULT now() NOT NULL,
	"discord_username_shown" boolean DEFAULT false NOT NULL,
	"theme" text DEFAULT 'Default' NOT NULL,
	"onboarded" boolean DEFAULT false NOT NULL,
	"guild_card_theme" text DEFAULT 'Default' NOT NULL,
	CONSTRAINT "profiles_username_unique" UNIQUE("username")
);
--> statement-breakpoint
ALTER TABLE "profiles" ENABLE ROW LEVEL SECURITY;--> statement-breakpoint
DO $$ BEGIN
 ALTER TABLE "profiles" ADD CONSTRAINT "profiles_id_users_id_fk" FOREIGN KEY ("id") REFERENCES "auth"."users"("id") ON DELETE no action ON UPDATE no action;
EXCEPTION
 WHEN duplicate_object THEN null;
END $$;
