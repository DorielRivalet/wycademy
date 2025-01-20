/*
 * © 2024 Doriel Rivalet
 * Use of this source code is governed by a MIT license that can be
 * found in the LICENSE file.
 */
import { SupabaseClient, Session, User } from '@supabase/supabase-js';
import { PgDatabase } from 'drizzle-orm/pg-core';
// import * as schema from './lib/db/schema';
// import { PostgresJsDatabase } from 'drizzle-orm/postgres-js';

// src/app.d.ts
// See https://kit.svelte.dev/docs/types#app
// for information about these interfaces
declare global {
	namespace App {
		// interface Error {}
		interface Locals {
			supabase: SupabaseClient;
			safeGetSession(): Promise<{ session: Session | null; user: User | null }>;
			session: Session | null;
			user: User | null;
			drizzleClient: {
				// TODO unsure
				drizzlePostgresAdmin: PgDatabase<any, any, any>;
				rls: <T>(
					transaction: (tx: PgTransaction<any, any, any>) => Promise<T>,
					config?: PgTransactionConfig,
				) => Promise<T>;
			};
		}
		interface PageData {
			session: Session | null;
		}
		// interface Platform {}
	}
}

export {};
