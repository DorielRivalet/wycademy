CREATE TABLE IF NOT EXISTS "registration_codes" (
	"code" uuid PRIMARY KEY DEFAULT gen_random_uuid() NOT NULL,
	"used" boolean DEFAULT false NOT NULL,
	"used_at" timestamp with time zone,
	"created_at" timestamp with time zone DEFAULT now() NOT NULL
);
--> statement-breakpoint
ALTER TABLE "registration_codes" ENABLE ROW LEVEL SECURITY;--> statement-breakpoint
ALTER TABLE "countries" ENABLE ROW LEVEL SECURITY;