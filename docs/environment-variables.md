# Environment Variables

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

## Example .env

```text
WEBHOOK_SECRET_OVERLAY_RELEASE="secret"
WEBHOOK_DISCORD_URL_OVERLAY_RELEASE="https://discord.com/api/webhooks/x/y"
PUBLIC_SUPABASE_URL="https://[id].supabase.co"
PUBLIC_SUPABASE_ANON_KEY="key"
SUPABASE_AUTH_EXTERNAL_DISCORD_ID="snowflake"
SUPABASE_AUTH_EXTERNAL_DISCORD_SECRET="secret"
ADMIN_DATABASE_URL="postgresql://postgres:postgres@127.0.0.1:54322/postgres"
DATABASE_URL="postgresql://rls_client:YOURPASSWORD@127.0.0.1:54322/postgres"
PUBLIC_CLOUDFLARE_TURNSTILE_SITE_KEY="key"
SECRET_CLOUDFLARE_TURNSTILE_KEY="key"
```

## Example .env.development

```text
PUBLIC_SUPABASE_URL="http://127.0.0.1:54321"
PUBLIC_SUPABASE_ANON_KEY="key"
ADMIN_DATABASE_URL="postgresql://postgres:postgres@127.0.0.1:54322/postgres"
DATABASE_URL="postgresql://rls_client:YOURPASSWORD@127.0.0.1:54322/postgres"
```

## Example Vercel Environment Variables

```text
WEBHOOK_SECRET_OVERLAY_RELEASE="secret"
WEBHOOK_DISCORD_URL_OVERLAY_RELEASE="https://discord.com/api/webhooks/x/y"
PUBLIC_SUPABASE_URL="https://[id].supabase.co"
PUBLIC_SUPABASE_ANON_KEY="key"
ADMIN_DATABASE_URL="postgresql://postgres:YOURPASSWORD@[etc]/postgres"
DATABASE_URL="postgresql://rls_client:YOURPASSWORD@[etc]/postgres"
PUBLIC_CLOUDFLARE_TURNSTILE_SITE_KEY="key"
SECRET_CLOUDFLARE_TURNSTILE_KEY="key"
```

## Notes

- `SUPABASE_AUTH_EXTERNAL_DISCORD_ID` and `SUPABASE_AUTH_EXTERNAL_DISCORD_SECRET` for production are set in the Supabase Dashboard via Authentication -> Providers -> Discord.
- `YOURPASSWORD` in `ADMIN_DATABASE_URL` is found in the Connection String for Drizzle in your Supabase Dashboard, while `YOURPASSWORD` in `DATABASE_URL` has to be the same as the password you used in the LOGIN clause of your `*secret.sql` file found in `/supabase/migrations`. **This file needs to be in your `.gitignore`.**
- The Databse URLs are in the format of `postgresql://[USER].[YOUR-PROJECT-REF]:[YOUR-PASSWORD]@[REGION-SUBDOMAIN].pooler.supabase.com:5432/postgres`. **The `postgres` user bypasses RLS while `rls_client` does not.**
