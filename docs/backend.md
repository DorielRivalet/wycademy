# Backend

We use Supabase as the backend of our application. Supabase is an open-source backend service that uses PostgreSQL as its database and GoTrue for authentication.

See also:

- [REST API](https://supabase.com/docs/guides/api).
- [Authentication](https://postgrest.org/en/stable/references/auth.html).
- [PostgREST Transactions](https://postgrest.org/en/stable/references/transactions.html).
- [Transactions](https://www.postgresql.org/docs/current/tutorial-transactions.html).
- [Database Authorization](https://postgrest.org/en/stable/explanations/db_authz.html).
- [Supabase Auth](https://supabase.com/docs/guides/auth).

> [!NOTE]
> PostgreSQL actually treats every SQL statement as being executed within a transaction. If you do not issue a `BEGIN` command, then each individual statement has an implicit `BEGIN` and (if successful) `COMMIT` wrapped around it. A group of statements surrounded by `BEGIN` and `COMMIT` is sometimes called a transaction block.

## Configuration and Setup

- Initialize files (initial setup): `npx supabase init`.
- Login: `npx supabase login`.
- Local configuration: `/supabase/config.toml`.
- Remote configuration: Dashboard -> Project Settings.
- Redirects for authentication: Authentication -> URL Configuration -> Redirect URLs -> Add `https://wycademy.vercel.app/auth/callback`, `http://localhost:4173/auth/callback` and `http://localhost:5173/auth/callback`.

## Commands and Actions

- Start: `npx supabase start` (Docker Desktop must be running).
- Stop: `npx supabase stop`.
- View info: `npx supabase status`.
- Wipe, apply migrations and seeds: `npx supabase db reset` (Docker Desktop must be running).
- Check consistency of your generated SQL migrations history: `npx drizzle-kit check`.
- Update CLI: `npm update supabase --save-dev` (after `npx supabase stop --no-backup`).

```bash
supabase link --project-ref <project-id>
# You can get <project-id> from your project's dashboard URL: https://supabase.com/dashboard/project/<project-id>

supabase db pull
# Capture any changes that you have made to your remote database before you went through the steps above
# If you have not made any changes to the remote database, skip this step

# To apply the new migration to your local database:
supabase migration up

# To reset your local database completely:
supabase db reset

```

- Deploy any local database migrations to remote: `npx supabase db push`.

> [!NOTE]
> If you run `npx supabase db reset` after updating the CLI, you may have to wait for Supabase updates to finish before applying your migrations (e.g. pulling from `supabase/postgres`).

See also:

- [Local Development](https://supabase.com/docs/guides/local-development/overview).
- [Database Migrations](https://supabase.com/docs/guides/deployment/database-migrations).
- [Supabase CLI](https://supabase.com/docs/reference/cli/supabase-db-push)

## JSON Web Tokens (JWT)

We store them in cookies. They can be used client-side and server-side. The cookies have sensible defaults set by SvelteKit: `httpOnly` and `secure`. The cookie is available in the whole SvelteKit application (`path: '/'`). The `sameSite` option defaults to `lax`. See the [SvelteKit docs](https://svelte.dev/docs/kit/@sveltejs-kit#Cookies) for more information.

Accessing custom claims client-side can be done via `user?.app_metadata` in TypeScript and server-side with `auth.jwt() -> 'app_metadata'` in PostgreSQL.

`raw_app_meta_data` refers to a table column in your Supabase database, while `app_metadata` refers to an object field in your JWT, which can also be accessed by getting your user's access token (a JWT), decoding it and indexing it.

The Supabase `session` object contains the `access_token` field. This token is a JSON web token that is encoded. You can decode it with an [online tool](https://jwt.io).

> [!NOTE]
> A JWT being encoded **does not** mean it's encrypted.

### Important Information to Keep in Mind

- The database values (`auth.users.raw_app_meta_data`) and the values in a user's JWT (`auth.jwt() -> 'app_metadata'`) are not synced instantly. The user's tokens expire by default after an hour. The Supabase helper function `auth.jwt()` refers to the user's `access_token`, which is in the form of a JWT.
- Not all information present in the JWT should be used in RLS policies. For instance, creating an RLS policy that relies on the `user_metadata` claim can create security issues in your application as this information can be modified by authenticated end users.
- Keep in mind that a JWT is not always "fresh". Even if you remove a user from a team and update the `app_metadata` field, that will not be reflected using `auth.jwt()` until the user's JWT is refreshed.
- If you are using Cookies for Auth, then you must be mindful of the JWT size. Some browsers are limited to 4096 bytes for each cookie, and so the total size of your JWT should be small enough to fit inside this limitation.
- Do not trust in anything that is in `user_metadata` (inside JWTs) and `auth.users.raw_user_meta_data` (in the database), because it can be changed by the user. It is okay to get the Discord information, but not anything that could be used for RLS policies.

> [!IMPORTANT]
> The security measures of the application are not fully battle-tested nor audited. We encourage review and feedback of our methods and processes.

See also:

- [JWTs](https://supabase.com/docs/guides/auth/jwts).

## Row Level Security (RLS)

Layman's terms: think of Row Level Security as creating a blank whitelist for a table. Which means that no one can interact with this table by default. Writing into this whitelist is akin to creating policies, whose purpose is to specify the object you can interact with (a certain table), who can interact with it (a certain user or role), the conditions to interact with it (the row has the user's id) and what interactions you have (select, insert, update or delete).

RLS (Row Level Security) policies are evaluated for every row in a query, so if you're retrieving 1000 rows the select policy for the table will be executed 1000 times. To make things scalable, it's advised that you store "custom claims", which are stored in the `auth.users.raw_app_metadata` database field and sent as part of the JWT token with each request. This puts those claims into memory, making them fast to access (and much more scalable than doing 1000 individual database lookups.)

The limitations with this approach is that:

1. It's pretty restricting (limited to storing the claims in a specific field in a specific table in a hidden schema).
2. Claims are only read when a user logs in, so those claims can become stale if they're changed before a user logs out and then back in.
3. Claims can be cumbersome to create and update.

> [!IMPORTANT]
> You should always enable RLS on tables created in a public schema. This is done for you when you create a table with the Table Editor. If you create one in raw SQL or with the SQL Editor, remember to enable RLS yourself.

## Custom Claims and Role-Based Access Control (RBAC)

Custom Claims are stored in the `auth.users` table, in the `raw_app_meta_data` column for a user. The SQL functions are stored in `/supabase/migrations/*claims.sql`.

To grant a user moderator privileges, we do the following:

1. Go to the Supabase Dashboard -> SQL Editor.
2. Run `select set_claim('[user uuid]', 'user_role', '"moderator"');`.

To delete the privileges: `select delete_claim('[user uuid]', 'user_role');`

To see the list of moderators: `select * from auth.users where (auth.users.raw_app_meta_data->'user_role')::text = '"moderator"';`

> [!IMPORTANT]
> The custom claim updates are not instant.

See also:

- [Supabase Custom Claims](https://github.com/supabase-community/supabase-custom-claims).
- [JWT VS Session Database](https://old.reddit.com/r/Supabase/comments/1dv3kvq/query_performance_with_row_level_security_rls/lbn3f1a/).
- [Custom Claims Example](https://dev.to/supabase/supabase-custom-claims-34l2).

## Policies

Example policies:

```postgres
create policy "Allow moderators to see any table row"
on your_table
as permissive
for select
to authenticated
using (
  (select auth.jwt() -> 'app_metadata' ->> 'user_role') = '"moderator"'
);

create policy "Allow moderators to update any table row"
on your_table
as permissive
for update
to authenticated
using (
  (select auth.jwt() -> 'app_metadata' ->> 'user_role') = '"moderator"'
)
with check ((select auth.jwt() -> 'app_metadata' ->> 'user_role') = '"moderator"');

create policy "Allow moderators to insert any table row"
on your_table
as permissive
for insert
to authenticated
with check (
  (select auth.jwt() -> 'app_metadata' ->> 'user_role') = '"moderator"'
);

create policy "Allow authenticated to see only their table rows"
on your_table
as permissive
for select
to authenticated
using (
  (select auth.uid()) = user_id
);

create policy "Allow authenticated to update only their table rows"
on your_table
as permissive
for update
to authenticated
using (
  (select auth.uid()) = user_id
)
with check (
  (select auth.uid()) = user_id
);

create policy "Allow authenticated to insert only their table rows"
on your_table
as permissive
for insert
to authenticated
with check (
  (select auth.uid()) = user_id
);

create policy "Table is viewable by everyone"
on your_table
as permissive
for select
to anon, authenticated
using ( true );

create policy "Table is viewable only by authenticated users"
on your_table
as permissive
for select
to authenticated
using ( true );

create policy "Authenticated users who set a public profile can insert their own row"
on your_table
as permissive
for insert
to authenticated
with check (
  (select auth.uid()) = profile_id
  and (
    select username_set
    from profiles
    where id = (select auth.uid())
    limit 1
  ) = true
);
```

> [!IMPORTANT]
> To perform an `UPDATE` operation, a corresponding `SELECT` policy is required. Without a `SELECT` policy, the `UPDATE` operation will not work as expected.

See also:

- [Row Level Security](https://supabase.com/docs/guides/database/postgres/row-level-security).
- [RLS Performance and Best Practices](https://github.com/orgs/supabase/discussions/14576).
- [RLS Performance](https://github.com/GaryAustin1/RLS-Performance).

## Defense in Depth

1. RLS bypass: using `drizzlePostgresClient` respects our policies, while using `drizzlePostgresAdmin` bypasses RLS.
2. User role authorization: we use custom claims in the JWT, specifically the `user_role` custom claim. Depending on the value of `user_role`, we can authorize the user to do certain actions. For example, if a user has the custom claim `user_role` set to `moderator`, they will be able to do moderator actions in the website. This check is done in the database layer via policies.

Suppose a user wants to send a message to another user, and only moderators can send messages. We can do the following, as an example:

1. Check if the user is authorized to see the message send function or a page via custom claims in the middleware layer. If successful, show a page or a form. If the user is not allowed, redirect to login page.
2. In the form, validate client-side the format of the message. Client-side validations are for the user's convenience, not security.
3. When sending the form, our form action `?\sendMessage` can validate the format of the message, this time server-side.
4. If the validations passes, we then insert the message in our database with `drizzlePostgresClient`, since we are not dealing with administrative actions. If the validation errors, show an error notification back to the user and stop here.
5. When inserting into our database, run our policies set in the table. We can use the custom claims of the user to check if the user is a `moderator` in the database layer via policies. If the user is not authorized, show an error notification back to the user.
6. Show to the user a notification that the message was succesfully sent.

- The notifications must be written in such a way that does not expose any sensitive data.
- We can also add a rate-limiter for the form action to prevent spamming messages.

> [!IMPORTANT]
> To ensure that `hooks.server.ts` runs for every nested path, you must put a `+layout.server.ts` file in the directory that you want to auth guard. This file can be empty, but must exist to protect routes that don't have their own `+layout.server.ts` or `page.server.ts`. The auth guard is defined in `hooks.server.ts`.

## Database Clients

When using an ORM like Drizzle, Supabase RLS does not work without additional setup. This is due to the fact that when using a direct connection to the database, we are using the `postgres` role, which bypasses RLS.

In order to use RLS policies, we need to create a PostgreSQL user and give it certain privileges. We name this user `rls_client` and give it the `anon` and `authenticated` roles from Supabase.

Row Level Security in Supabase has integration with Supabase Auth: using built-in helper functions like `auth.uid()` and `auth.jwt()` in policies. Drizzle does not have `auth.jwt()` built-in. So even when using `rls_client`, RLS still doesn't work optimally because we cannot use the Supabase Helper functions `auth.jwt()` without using the `supabase-js` library. The `auth.uid()` function does work however. We can add context via the `set_config` PostgreSQL function, having as input the user's JWT data, thus replicating the `auth.jwt()` function.

Since many users interact with the application, we have to use a transaction to isolate the user queries, each with their own context from their JWT data.

In short: to make RLS work correctly with Drizzle, the database must know which user is making a query. This involves:

1. Including the JWT access token in queries.
2. Setting the token for the database session via a PostgreSQL function (e.g., `set_config`).
3. Use a transaction to isolate the user queries.

> [!NOTE]
> When you run `npx supabase db push`, your seed files in the `/supabase/seeds` folder are not applied in the remote database. This is why we put the `*secret.sql` containing the role generation code in `/supabase/migrations` instead, so that it is automatically set up in the remote database.

Database code example:

```postgres
select auth.jwt(); -- You'll get nothing

select set_config('request.jwt.claims', '{ "sub":"461959aa-e85a-4392-a617-0470d0f15623", "role":"authenticated", "email":"email@example.com" }', false);
select auth.uid(); -- Should return 461959aa-e85a-4392-a617-0470d0f15623
select auth.role(); -- Should return authenticated
select auth.email(); -- should return email@example.com
select auth.jwt(); --Should return the entire jsonb body
```

> [!IMPORTANT]
> Make sure you reset the role or transaction context between requests so that user A doesn't have user B's access or credentials.

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
|Drizzle (Moderator w/ custom claim)|:x:|:x:|:white_check_mark:*|
|Drizzle (Moderator w/ custom claim)|:x:|:white_check_mark:|:white_check_mark:*|
|Drizzle (Moderator w/ custom claim)|:white_check_mark:|:x:|:white_check_mark:*|
|Drizzle (Moderator w/ custom claim)|:white_check_mark:|:white_check_mark:|:white_check_mark:*|
|Drizzle|:x:|:x:|:white_check_mark:*|
|Drizzle|:x:|:white_check_mark:|:white_check_mark:*|
|Drizzle|:white_check_mark:|:x:|:x:*|
|Drizzle|:white_check_mark:|:white_check_mark:|:x:*|

- RLS is enabled on the countries table without any additional policies.
- Data API can be toggled on/off in `/supabase/config.toml` locally and Project Settings remotely.
- Drizzle (Admin) client uses the environment variable `ADMIN_DATABASE_URL` with user `postgres`. This bypasses RLS policies.
- Drizzle client uses the environment variable `DATABASE_URL` with user `rls_client`. This respects RLS policies and custom claims.
- *The countries table uses this policy:

```ts
pgPolicy(`Allow moderators to see any table row`, {
  as: 'permissive',
  for: 'select',
  to: authenticatedRole,
  using: sql`(select get_my_claim('user_role')) = '"moderator"'`,
  })
```

**Use regular client when:**

- Reading/writing data that's protected by RLS.
- Performing actions as the logged-in user.
- When you want the is_moderator() check to apply.

**Use admin client when:**

- Setting/modifying custom claims.
- Bypassing RLS for administrative tasks.
- Managing user roles and permissions.

||drizzlePostgresClient|drizzlePostgresAdmin|
|-|-|-|
|JWT|Uses the logged-in user's JWT token|Uses the service role key|
|RLS|Subject to Row Level Security (RLS) policies|Bypasses RLS completely|
|Custom Claims|The JWT contains the custom claims we set (like `user_role: "moderator"`)|Required for setting custom claims (disallowed in our setup and set via Dashboard)|
|Usage|Use this for most operations where you want RLS to apply|Only use this when you need to perform administrative tasks|
|Environment Variable|DATABASE_URL|ADMIN_DATABASE_URL|

- We use `drizzlePostgresClient` in transaction form: `.rls()`. The usage comes from `drizzleClient` in `hooks.server.ts` (`event.locals.drizzleClient`). The root `+layout.ts` file does not include it because it's only meant to be used server-side.

To add the missing `sql` file, run `npx drizzle-kit generate --custom --name=secret` then add onto the file:

```postgres
create role rls_client with login password 'extremely_secure_password';
grant anon to rls_client;
grant authenticated to rls_client;
```

> [!IMPORTANT]
> This file must be added to your `.gitignore`. The password that you generated must be included in the `DATABASE_URL` of Vercel Environment Variables.

What happens based on the [demo repo](https://github.com/rphlmr/drizzle-supabase-rls):

```ts
const drizzleClient = await createDrizzleSupabaseClient(session);
```

We get back a `db` object that is preset with our current user `access_token`. The token has been found in `createDrizzleSupabaseClient`, using Supabase Auth (it reads auth from the current HTTP request cookie).

This `db` object contains 2 things: `admin` and `rls`:

- `admin` is a Drizzle client created with the default Supabase Postgres (PG) connection string (full-power user).
- `rls` is a Drizzle client we created with our limited privileges PG user. This special client is a function: a Drizzle `transaction()` function.

Why do it this way? Because this is the only way to use RLS, and the only way to set the user's `request.jwt.claims`, isolated, per request. This is what makes it possible to authenticate our SQL queries.

Then, your RLS, on your postgres db will read these claims through `auth.uid()` (because these function read from the postgres query context `config` and returns the value for the key `request.jwt.claims`)

We adapted this demo repo into SvelteKit's middleware. In a similar manner of how we have access to the Supabase client to make queries, we also add it in there (in `hooks.server.ts`; the root `+layout.ts` file does not include it because it's only meant to be used server-side) our Drizzle client.

Protected by RLS example:

```ts
// In server-side code
// drizzleClient = await createDrizzleSupabaseClient(session);

const [user] = await drizzleClient.rls(async (tx) => {
  await tx.select().from(profiles).where(eq(profiles.email, email))
});

const curProfile = await drizzleClient.rls(async (tx) => {
  const p = await tx.query.profilesTable.findFirst({
    where: eq(profilesTable.id, user.id),
  });
  return p;
});
```

Bypass RLS example:

```ts
// In server-side code
// drizzleClient = await createDrizzleSupabaseClient(session);

const [user] = await drizzleClient.drizzlePostgresAdmin.select().from(profiles).where(eq(profiles.email, email));
```

In summary: You need to pass your user's `access_token` in a specific pg function (`set_config`) in a transaction. This is how Supabase knows who is making the query.

> [!IMPORTANT]
> RLS policies are only applied on `.rls` queries.

See also:

- [Postgres Roles and Privileges article](https://supabase.com/blog/postgres-roles-and-privileges).
- [Postgres Roles in Supabase](https://supabase.com/docs/guides/database/postgres/roles).
- [Custom Claims and Role-Based Access Control (RBAC) documentation](https://supabase.com/docs/guides/database/postgres/custom-claims-and-role-based-access-control-rbac?queryGroups=language&language=plpgsql).
- [Drizzle Supabase RLS repo](https://github.com/rphlmr/drizzle-supabase-rls).
- [Supabase Custom Claims repo](https://github.com/supabase-community/supabase-custom-claims).
- [Supabase Multi-Tenant Role-based Access Control repo](https://github.com/point-source/supabase-tenant-rbac).
- [Drizzle Repo Supabase RLS](https://github.com/drizzle-team/drizzle-orm/blob/main/drizzle-orm/src/supabase/rls.ts).
- [Drizzle Row Level Security with Supabase documentation](https://orm.drizzle.team/docs/rls#using-with-supabase).
- [RLS and ORM post](https://old.reddit.com/r/Supabase/comments/1bfg7hn/does_rls_still_apply_if_i_attach_an_orm_to/kv51yrn/).
- [Restore Supabase RLS article](https://mortadha.dev/blog/restore-supabase-rls-with-drizzle-using-trpc-middlewares/).
- [Auth Schema code](https://github.com/supabase/postgres/blob/develop/migrations/db/init-scripts/00000000000001-auth-schema.sql).
- [Drizzle RLS Support issue](https://github.com/drizzle-team/drizzle-orm/issues/594#issuecomment-1805391828).
- [Drizzle RLS Release Notes](https://github.com/drizzle-team/drizzle-orm/releases/tag/0.36.0).
- [Drizzle Supabase RLS Explanation](https://www.answeroverflow.com/m/1311265191349977159).
- [Drizzle Transactions](https://orm.drizzle.team/docs/transactions).

## Migrations

In order to apply database schema updates over time and keep track of past changes, we need to use migrations and add them to our version control system (Git). We name `sql` files with sensitive information as `*secret.sql`, and add them to our `.gitignore`. There are two ways to generate migrations:

### Manually (Custom)

1. Run `npx drizzle-kit generate --custom --name=[name]` to create a new migration file in `/supabase/migrations`.
2. Add SQL code into the file.
3. Run `npx supabase db reset` to reset the database to the current migrations.

### Automatically (Drizzle ORM)

1. Write your schema in `/src/lib/db/schema.ts`. This is your source of truth.
2. Run `npx drizzle-kit generate --name=[name]` to turn your schema code into SQL in `/supabase/migrations`.
3. Apply the migrations locally with `npx supabase db reset`. This corresponds to [option 5](https://orm.drizzle.team/docs/migrations#drizzle-migrations-fundamentals) of Drizzle migrations.
4. **You must check if Row Level Security is in the generated sql files afterwards. Use EnableRLS() at the end of table definitions in the `/src/lib/db/schema.ts` file.**

See also:

- [Drizzle with Supabase](https://orm.drizzle.team/docs/tutorials/drizzle-with-supabase).

## Seeding

For seeding, we use [Snaplet](https://snaplet-seed.netlify.app/seed/integrations/supabase).

1. Setup a local Supabase environment and your environment variables.
2. Run `npx supabase start` (see the [commands and actions section](#commands-and-actions)). Make sure that you have the migrations applied in your local database with your differents app tables on it. If you don't, refer to the Supabase docs to run your migrations.
3. Whenever your database structure changes (e.g after a new migration is applied with `npx supabase db reset`), `@snaplet/seed` will need to be regenerated in order to reflect the new structure. To do this, run `npx @snaplet/seed sync`.
4. If dryRun is enabled, run `npx tsx seed.ts > supabase/seed.sql` and put those queries into the sql seed script expected by Supabase. Otherwise run `npx tsx seed.ts`.
5. If dryRun is enabled and you have put the queries into the sql seed script expected by Supabase, then run `npx supabase db reset` to apply the seed script to your local database. You have to transfer the contents from the `seed.ts` file into `/supabase/seeds/[filename].sql` and remove the original, auto-generated file.

## Deployment

1. Review and test your migrations in the local database. Keep in mind that testing with `npm run build && npm run preview` makes your remote database be used.
2. Make sure the project is linked and your migrations are detected with `npx supabase db push --dry-run`.
3. Run `npx supabase db push` and check your migrations in the Dashboard: Database -> Migrations. Verify your table data. If there is an error, revert and go back to testing locally.
4. Deploy your project in Vercel. Try to update both Vercel and Supabase as soon as possible together. **Do not make schema changes in production, so we avoid using `npx supabase pull`, among other things**.
5. Generate seeds in Supabase SQL Editor if needed (see the `/supabase/seeds` folder).

> [!NOTE]
> When using `npm run build && npm run preview` and creating a Wycademy account, you insert into the remote database `auth.users` table, not the local database from Docker Desktop.

## Important Tips

- Never use `auth.users` table, use `public.profiles` instead.
- Use `session` or see if profile is null to check if the user is logged in.
- Use Drizzle instead of Supabase Data API for querying (disable Data API usage in Supabase settings).
- Add onto `hooks.server.ts` for best security, not `+layout` files. **All** authentication logic needs to go into `hooks.server.ts` before the call to `resolve(event)`.
- Do not show overly specific backend errors in the frontend.
- Do not handle environment variables in the frontend.
- Always query via user id when getting user data (always filter down); do not use RLS for filtering but for security. Use `findFirst()`.
- Double-check if all tables have RLS enabled.
- Only perform queries in `.server` files.
- Try to not have null fields if a more sensible default can be set.
- Enforce SSL: SSL enforcement can be configured via the "Enforce SSL on incoming connections" setting under the SSL Configuration section in Database Settings page of the dashboard.
- Think hard about how you would abuse your service as an attacker, and mitigate.
- Don't assume everything inside of session can be trusted. Don't expose your anon key and connection string to the client.
- Do not use joins inside a policy.
- When debugging Drizzle migrations, one way to tackle it is to remove the migrations then generate new migrations and see if the bug still occurs. To do this properly, you have to remove the files from `/supabase/migrations/` that are causing the bug, and the files in `/supabase/migrations/meta` to sync the metadata. You also need to remove entries in the `/supabase/migrations/meta/_journal.json` file. Remove only the affected entries. Afterwards, re-apply migrations with `npx drizzle-kit generate --name=[filename]`. Lastly, run `npx drizzle-kit check` to see the consistency of your migration history.
- Do not use Svelte stores nor import `*.svelte.ts` in server-side code or **server-side rendered (SSR) pages**. Stores are designed to manage state on the client. On the server, each request is handled independently. This means that if you use a Svelte store on the server, the state you set could be shared across multiple requests and clients. You might have data leakage, where one user’s data is exposed to another user.
- Remember that the `$effect` Svelte rune does not run on the server. Likewise, `onMount` does not run inside a component that is rendered on the server.

See also:

- [Avoid shared state on the server](https://svelte.dev/docs/kit/state-management#Avoid-shared-state-on-the-server).
- [Going into production](https://supabase.com/docs/guides/deployment/going-into-prod).
- [Shared state on the server](https://joyofcode.xyz/how-to-share-state-in-svelte-5#shared-state-on-the-server).
