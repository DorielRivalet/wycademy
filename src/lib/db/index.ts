//src/lib/db/index.ts
import { drizzle, PostgresJsDatabase } from 'drizzle-orm/postgres-js';
import postgres from 'postgres';
import * as schema from './schema';
import { ADMIN_DATABASE_URL, DATABASE_URL } from '$env/static/private';
import type { DrizzleConfig } from 'drizzle-orm';
import type { Session } from '@supabase/supabase-js';
import { decode } from './jwt';
import { createDrizzle } from './drizzle';

// Disable prefetch as it is not supported for "Transaction" pool mode
// const client = postgres(ADMIN_DATABASE_URL, { prepare: false });
// export const db = drizzle(client, { schema });

const config = {
	casing: 'snake_case',
	schema,
} satisfies DrizzleConfig<typeof schema>;

/** ByPass RLS*/
const drizzlePostgresAdmin = drizzle({
	client: postgres(ADMIN_DATABASE_URL, { prepare: false }),
	...config,
});

/** Protected by RLS and custom claims*/
const drizzlePostgresClient = drizzle({
	client: postgres(DATABASE_URL, { prepare: false }),
	...config,
});

// TODO test
// https://github.com/orgs/supabase/discussions/23224
// Should be secure because we use the access token that is signed, and not the data read directly from the storage
export async function createDrizzleSupabaseClient(session: Session | null) {
	// const {
	//   data: { session },
	// } = await createClient().auth.getSession();
	// Decode the access token on your own (from Supabase client, custom session cookie, etc.).
	// createClient() is in our case event.locals.supabase in hooks.server.ts
	return createDrizzle(decode(session?.access_token ?? ''), {
		drizzlePostgresAdmin,
		drizzlePostgresClient,
	});
}
