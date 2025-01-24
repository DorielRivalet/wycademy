import { and, eq, like } from 'drizzle-orm';
import {
	profilesTable,
	registrationCodesTable,
	type SelectProfile,
} from '../schema';
import type { DrizzleClient } from '../drizzle';
import type { User } from '@supabase/supabase-js';

/**Get user profile by ID */
export async function getUserProfile(
	user: User | null,
	drizzleClient: DrizzleClient,
) {
	if (!user) {
		return null;
	}

	const curProfile =
		await drizzleClient.drizzlePostgresAdmin.query.profilesTable.findFirst({
			where: eq(profilesTable.id, user.id),
		});

	if (curProfile) {
		return curProfile as SelectProfile;
	} else {
		throw new Error('Could not get profile.');
	}
}

/**The profile data of the user page (not the user who requests the page) */
export async function getUserProfileByUsername(
	username: string,
	drizzleClient: DrizzleClient,
) {
	const pageUserProfile =
		await drizzleClient.drizzlePostgresAdmin.query.profilesTable.findFirst({
			where: eq(profilesTable.username, username),
		});

	return pageUserProfile;
}

export async function findUnusedRegistrationCode(
	submittedCode: string,
	drizzleClient: DrizzleClient,
) {
	const found =
		await drizzleClient.drizzlePostgresAdmin.query.registrationCodesTable.findFirst(
			{
				where: and(
					eq(registrationCodesTable.used, false),
					eq(registrationCodesTable.code, submittedCode),
				),
			},
		);

	return found;
}

export async function getDuplicateUsername(
	drizzleClient: DrizzleClient,
	data: { username: string },
) {
	const duplicateUsername =
		await drizzleClient.drizzlePostgresAdmin.query.profilesTable.findFirst({
			columns: {
				username: true,
			},
			where: like(profilesTable.username, `%${data.username}%`),
		});
	return duplicateUsername;
}
