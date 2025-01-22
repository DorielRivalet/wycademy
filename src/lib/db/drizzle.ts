// src/lib/db/drizzle.ts
import {
	sql,
	type ExtractTableRelationsFromSchema,
	type ExtractTablesWithRelations,
} from 'drizzle-orm';
import { PgDatabase } from 'drizzle-orm/pg-core';
import type { PgTransaction, PgTransactionConfig } from 'drizzle-orm/pg-core';
import type {
	PostgresJsDatabase,
	PostgresJsTransaction,
} from 'drizzle-orm/postgres-js';
import * as schema from './schema';
import { type AnyPgTable } from 'drizzle-orm/pg-core';

type ExtractTables<T extends Record<string, any>> = {
	[K in keyof T as T[K] extends AnyPgTable ? K : never]: T[K] extends AnyPgTable
		? T[K]
		: never;
};

/** TODO?
 * When using `drizzleClient` from `event.locals`, type it with `as DrizzleClient`.
 */
export type DrizzleClient = {
	drizzlePostgresAdmin: PostgresJsDatabase<typeof schema>;
	rls: <T>(
		transaction: (
			tx: PostgresJsTransaction<
				typeof schema,
				ExtractTablesWithRelations<typeof schema>
			>,
		) => Promise<T>,
		config?: PgTransactionConfig,
	) => Promise<T>;
};

type SupabaseToken = {
	iss?: string;
	sub?: string;
	aud?: string[] | string;
	exp?: number;
	nbf?: number;
	iat?: number;
	jti?: string;
	role?: string;
};

/**
 * createDrizzle exposes the same API as the drizzle-orm client but also includes an rls method.

This rls method is a transaction (from client) on which we set the necessary configuration for Supabase to handle RLS.
 */
export function createDrizzle<
	Database extends PostgresJsDatabase<typeof schema>,
	Token extends SupabaseToken = SupabaseToken,
>(
	token: Token,
	{
		drizzlePostgresAdmin,
		drizzlePostgresClient,
	}: { drizzlePostgresAdmin: Database; drizzlePostgresClient: Database },
) {
	return {
		drizzlePostgresAdmin,
		rls: (async (transaction, ...rest) => {
			return await drizzlePostgresClient.transaction(
				async (tx) => {
					// Supabase exposes auth.uid() and auth.jwt()
					// https://supabase.com/docs/guides/database/postgres/row-level-security#helper-functions
					try {
						await tx.execute(sql`
          -- auth.jwt()
          select set_config('request.jwt.claims', '${sql.raw(
						JSON.stringify(token),
					)}', TRUE);
          -- auth.uid()
          select set_config('request.jwt.claim.sub', '${sql.raw(
						token.sub ?? '',
					)}', TRUE);
          -- set local role
          set local role ${sql.raw(token.role ?? 'anon')};
          `);
						return await transaction(tx);
					} finally {
						await tx.execute(sql`
            -- reset
            select set_config('request.jwt.claims', NULL, TRUE);
            select set_config('request.jwt.claim.sub', NULL, TRUE);
            reset role;
            `);
					}
				},
				...rest,
			);
		}) as typeof drizzlePostgresClient.transaction,
	};
}
