import { and, eq } from 'drizzle-orm';
import type { DrizzleClient } from '../drizzle';
import { profilesTable, registrationCodesTable } from '../schema';

export async function updateRegistrationCode(
	submittedCode: string,
	drizzleClient: DrizzleClient,
) {
	await drizzleClient.drizzlePostgresAdmin
		.update(registrationCodesTable)
		.set({
			used: true,
			// used_at should automatically update and stop becoming null.
		})
		.where(
			and(
				eq(registrationCodesTable.used, false),
				eq(registrationCodesTable.code, submittedCode),
			),
		);
}

export async function updatePublicProfileData(
	data: {
		avatar: string;
		country: string;
		theme: string;
		title: string;
		emblem: string;
		privateServers: string[];
		guildCardTheme: string;
	},
	drizzleClient: DrizzleClient,
	profileId: string,
) {
	await drizzleClient.drizzlePostgresAdmin
		.update(profilesTable)
		.set({
			avatar: data.avatar,
			country: data.country,
			theme: data.theme,
			title: data.title,
			emblem: data.emblem,
			private_servers: data.privateServers,
			guild_card_theme: data.guildCardTheme,
		})
		.where(eq(profilesTable.id, profileId));
}

export async function updatePublicProfileActivity(
	newPrivate: boolean,
	drizzleClient: DrizzleClient,
	profileId: string,
) {
	await drizzleClient.drizzlePostgresAdmin
		.update(profilesTable)
		.set({
			private: newPrivate,
		})
		.where(eq(profilesTable.id, profileId));
}

export async function updaterPublicProfileSettings(
	newDiscordUsernameShown: boolean,
	newModeratorBadgeShown: boolean,
	drizzleClient: DrizzleClient,
	profileId: string,
) {
	await drizzleClient.drizzlePostgresAdmin
		.update(profilesTable)
		.set({
			discord_username_shown: newDiscordUsernameShown,
			moderator_badge_shown: newModeratorBadgeShown,
		})
		.where(eq(profilesTable.id, profileId));
}

/**TODO transaction */
export async function updateUsername(
	newUsername: string,
	profileId: string,
	drizzleClient: DrizzleClient,
) {
	// TODO transaction

	await drizzleClient.drizzlePostgresAdmin
		.update(profilesTable)
		.set({
			username: newUsername,
		})
		.where(eq(profilesTable.id, profileId));

	await drizzleClient.drizzlePostgresAdmin
		.update(profilesTable)
		.set({
			username_set: true,
		})
		.where(eq(profilesTable.id, profileId));
}
