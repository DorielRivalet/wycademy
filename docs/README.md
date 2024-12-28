# Documentation

[![Commitizen friendly](https://img.shields.io/badge/commitizen-friendly-brightgreen.svg)](http://commitizen.github.io/cz-cli/)

The commands mentioned are done in the repository's root directory unless otherwise specified.

## Commits

```bash
npm run cm
```

## Versioning

```bash
npm run release
```

## Supabase

- Initialize files (initial setup): `npx supabase init`
- Start: `npx supabase start` (Docker Desktop must be running)
- Stop: `npx supabase stop`
- View info: `npx supabase status`
- Local configuration: `/supabase/config.toml`
- Remote configuration: Dashboard -> Project Settings

### Important Tips

- **Never use `auth.users` table, use `public.profiles` instead.**
- **Use `session` to check if the user is logged in.**
- **Use Drizzle instead of Supabase Data API for querying (disable Data API usage in Supabase settings).**
- **Add onto `hooks.server.ts` for best security, not `+layout` files.**
- **Do not show overly specific backend errors in the frontend.**
- **Do not handle environment variables in the frontend.**
- **Always query via user id when getting user data (always filter down); do not use RLS for filtering but for security.**
- **Double-check if all tables have RLS enabled.**
- **Only perform queries in `.server` files.**
- **Try to not have null fields if a more sensible default can be set.**
- **Enforce SSL: SSL enforcement can be configured via the "Enforce SSL on incoming connections" setting under the SSL Configuration section in Database Settings page of the dashboard.**
- **Think hard about how you would abuse your service as an attacker, and mitigate.**
- **Don't assume everything inside of session can be trusted. Don't expose your anon key and connection string to the client.**

More tips at [Supabase Docs](https://supabase.com/docs/guides/deployment/going-into-prod).

### Privileges Matrix

|Client|RLS|Data API|Can see countries table|
|-|-|-|-|
|supabase-js|:x:|:x:|:x:|
|supabase-js|:x:|:white_check_mark:|:white_check_mark:|
|supabase-js|:white_check_mark:|:x:|:x:|
|supabase-js|:white_check_mark:|:white_check_mark:|:x:|
|Drizzle (Admin)|:x:|:x:|:white_check_mark:|
|Drizzle (Admin)|:x:|:white_check_mark:|:white_check_mark:|
|Drizzle (Admin)|:white_check_mark:|:x:|:white_check_mark:|
|Drizzle (Admin)|:white_check_mark:|:white_check_mark:|:white_check_mark:|
|Drizzle|:x:|:x:|?|
|Drizzle|:x:|:white_check_mark:|?|
|Drizzle|:white_check_mark:|:x:|?|
|Drizzle|:white_check_mark:|:white_check_mark:|?|

- RLS is enabled on the countries table without any additional policies.
- Data API can be toggled on/off in `/supabase/config.toml` locally and Project Settings remotely.
- Drizzle (Admin) client uses the environment variable `ADMIN_DATABASE_URL` with user `postgres`.
- Drizzle client uses the environment variable `DATABASE_URL` with user `rls_client`. See also [Postgres Roles and Privileges](https://supabase.com/blog/postgres-roles-and-privileges).

## Drizzle (ORM)

Generate migrations from `/src/lib/db/schema.ts` (your source of truth) to `/supabase/migrations`, then apply the migrations locally with `npx supabase db reset`. This corresponds to [option 5](https://orm.drizzle.team/docs/migrations#drizzle-migrations-fundamentals) of Drizzle migrations.

```bash
npm run db:generate
```

**You must check if Row Level Security is in the generated sql files afterwards. Use EnableRLS() at the end of table definitions in the `/src/lib/db/schema.ts` file.**

## Seeding

For seeding, we use [Snaplet](https://snaplet-seed.netlify.app/seed/integrations/supabase).

1. Setup a local Supabase environment and your environment variables.
2. Run `npx supabase start` (see the [Supabase section](#supabase)). Make sure that you have the migrations applied in your local database with your differents app tables on it. If you don't refer to Supabase docs to run your migrations.
3. Whenever your database structure changes (e.g after a new migration is applied with `npx supabase db reset`), @snaplet/seed will need be regenerated to reflect the new structure. To do this, run `npx @snaplet/seed sync`.
4. If dryRun is enabled, run `npx tsx seed.ts > supabase/seed.sql` and put those queries into the sql seed script expected by Supabase. Otherwise run `npx tsx seed.ts`.
5. If dryRun is enabled and you have put the queries into the sql seed script expected by Supabase, then run `npx supabase db reset` to apply the seed script to your local database.

## Environment Variables

|Key|Usage|Environment|
|--|--|--|
|ADMIN_DATABASE_URL|Supabase Connection (Dashboard -> Connect -> ORMs -> Drizzle)|Vercel (Sensitive), .env, .env.development|
|DATABASE_URL|Supabase Connection (Dashboard -> Connect -> ORMs -> Drizzle)|Vercel (Sensitive), .env, .env.development|
|SUPABASE_AUTH_EXTERNAL_DISCORD_SECRET|Discord OAuth|Supabase, .env|
|SUPABASE_AUTH_EXTERNAL_DISCORD_ID|Discord OAuth Client ID|Supabase, .env|
|PUBLIC_SUPABASE_ANON_KEY|Supabase Anon Requests|Vercel, .env, .env.development|
|PUBLIC_SUPABASE_URL|Supabase Project|Vercel, .env, .env.development|
|WEBHOOK_SECRET_OVERLAY_RELEASE|Discord Notifications for Overlay (Verifier)|GitHub, Vercel, .env|
|WEBHOOK_DISCORD_URL_OVERLAY_RELEASE|Discord Notifications for Overlay (Webhook URL)|GitHub, Vercel, .env|
|PUBLIC_CLOUDFLARE_TURNSTILE_SITE_KEY|Turnstile Component|.env, Vercel|
|SECRET_CLOUDFLARE_TURNSTILE_KEY|Turnstile Component Verifier|.env, Vercel|
