/**
 * This is the configuration for the server-side database.
 */
import { defineConfig } from 'drizzle-kit';

// /drizzle.config.ts
const base = './src/lib/db';

/**https://github.com/rphlmr/drizzle-supabase-rls/blob/main/drizzle.config.ts */
export default defineConfig({
	dialect: 'postgresql',
	schema: `${base}/schema.ts`,
	schemaFilter: ['public'],
	out: './supabase/migrations',
	casing: 'snake_case',
	migrations: {
		prefix: 'timestamp',
	},
	// dbCredentials: {
	// 	host: 'localhost',
	// 	port: 54321,
	// 	user: 'postgres',
	// 	password: 'postgres',
	// 	database: 'supabase',
	// },
	dbCredentials: {
		url: process.env.ADMIN_DATABASE_URL!,
	},
	entities: {
		roles: {
			provider: 'supabase',
			exclude: ['supabase_auth_admin'],
		},
	},
});
