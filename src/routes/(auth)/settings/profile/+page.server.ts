// settings/profile/+page.server.ts
import { error, type Actions } from '@sveltejs/kit';
import { profilesTable } from '$lib/db/schema';
import { eq, like } from 'drizzle-orm';
import type { User } from '@supabase/supabase-js';
import { zfd } from 'zod-form-data';
import { usernames } from '$lib/client/modules/profile/username';
import { capitalizeFirstLetter } from '$lib/client/modules/strings';
import type { DrizzleClient } from '$lib/db/drizzle';
import type { SelectProfile } from '$lib/db/schema';

// TODO replace zod with superforms

export const actions: Actions = {
	updatePublicProfile: async ({ request, locals }) => {
		const { user } = await locals.safeGetSession();
		const drizzleClient = locals.drizzleClient as DrizzleClient;

		// TODO
		try {
			// depends('supabase:db:profiles'); // TODO unsure if this should be here. does this work on only load functions or can they be used in actions like here?
			// const { data: profile } = await supabase.from('test_profiles').select();
			const profile = await getUserProfile(user, drizzleClient);
			if (!profile) {
				throw new Error('Could not get profile.');
			}
			// console.log('Got profile data');
			// return { profile: profile ?? null, session, cookies: cookies.getAll() };
			const schema = zfd.formData({
				avatar: zfd.text(),
				country: zfd.text(),
				theme: zfd.text(),
				title: zfd.text(),
				emblem: zfd.text(),
				privateServers: zfd.repeatableOfType(zfd.text()),
				guildCardTheme: zfd.text(),
			});

			const { data } = schema.safeParse(await request.formData());

			if (!data) {
				error(400, 'Invalid form data');
			}

			await drizzleClient.rls(async (tx) => {
				await tx
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
					.where(eq(profilesTable.id, profile?.id));
			});

			return { success: true };
		} catch (err) {
			// console.error('Error updating profile');
			error(401, 'You need to be logged in!');
			// return { profile: null, session, cookies: cookies.getAll() };
		}
	},
	updateActivity: async ({ request, locals }) => {
		const { user } = await locals.safeGetSession();
		const drizzleClient = locals.drizzleClient as DrizzleClient;

		// TODO
		try {
			// depends('supabase:db:profiles'); // TODO unsure if this should be here
			// const { data: profile } = await supabase.from('test_profiles').select();
			const profile = await getUserProfile(user, drizzleClient);
			if (!profile) {
				throw new Error('Could not get profile.');
			}
			// console.log('Got profile data');
			// return { profile: profile ?? null, session, cookies: cookies.getAll() };
			const schema = zfd.formData({
				activity: zfd.repeatable(),
			});

			const { data } = schema.safeParse(await request.formData());

			if (!data) {
				// console.error('Invalid form data');
				error(400, 'Invalid form data');
			}

			const newPrivate = data.activity[0] === 'true' ? true : false;

			await drizzleClient.rls(async (tx) => {
				await tx
					.update(profilesTable)
					.set({
						private: newPrivate,
					})
					.where(eq(profilesTable.id, profile?.id));
			});

			return { success: true };
		} catch (err) {
			// console.error('Error updating profile activity');
			error(401, 'You need to be logged in!');
			// return { profile: null, session, cookies: cookies.getAll() };
		}
	},
	updateProfileSettings: async ({ request, locals }) => {
		const { user } = await locals.safeGetSession();
		const drizzleClient = locals.drizzleClient as DrizzleClient;

		// TODO
		try {
			// depends('supabase:db:profiles'); // TODO unsure if this should be here
			// const { data: profile } = await supabase.from('test_profiles').select();
			const profile = await getUserProfile(user, drizzleClient);
			if (!profile) {
				throw new Error('Could not get profile.');
			}
			// console.log('Got profile data');
			// return { profile: profile ?? null, session, cookies: cookies.getAll() };
			const schema = zfd.formData({
				settings: zfd.repeatable(),
			});

			const { data } = schema.safeParse(await request.formData());

			if (!data) {
				error(400, 'Invalid form data');
			}

			const newDiscordUsernameShown =
				data.settings[0] === 'true' ? true : false;
			const newModeratorBadgeShown = data.settings[1] === 'true' ? true : false;

			await drizzleClient.rls(async (tx) => {
				await tx
					.update(profilesTable)
					.set({
						discord_username_shown: newDiscordUsernameShown,
						moderator_badge_shown: newModeratorBadgeShown,
					})
					.where(eq(profilesTable.id, profile?.id));
			});

			return { success: true };
		} catch (err) {
			// console.error('Error updating profile settings');
			error(401, 'You need to be logged in!');
			// return { profile: null, session, cookies: cookies.getAll() };
		}
	},
	updateProfileUsername: async ({ request, locals }) => {
		const { user } = await locals.safeGetSession();
		const drizzleClient = locals.drizzleClient as DrizzleClient;

		// TODO test
		try {
			// depends('supabase:db:profiles'); // TODO unsure if this should be here
			// const { data: profile } = await supabase.from('test_profiles').select();
			const profile = await getUserProfile(user, drizzleClient);
			if (!profile) {
				throw new Error('Could not get profile.');
			}
			// console.log('Got profile data');
			// return { profile: profile ?? null, session, cookies: cookies.getAll() };
			const schema = zfd.formData({
				username: zfd.text(),
			});

			const { data } = schema.safeParse(await request.formData());

			if (!data) {
				// console.error('Invalid form data');
				error(400, 'Invalid form data');
			}

			if (data.username === profile.username) {
				// console.error('New username is the same as old username');
				error(400, 'Username already set');
			}

			if (data.username && data.username.length <= 32) {
				const parts = data.username.split('-');

				if (
					parts.length > 2 ||
					(parts.length === 2 &&
						!usernames.types.includes(capitalizeFirstLetter(parts[0]))) ||
					!usernames.monsters.includes(
						capitalizeFirstLetter(parts[parts.length - 1]),
					)
				) {
					// console.error('Invalid username format');
					error(400, 'Invalid username format');
				}
			} else {
				// console.error('Invalid username');
				error(400, 'Invalid username');
			}

			let usernameNumber = 0;
			let newUsername = '';
			const duplicateUsername = await drizzleClient.rls(async (tx) => {
				const r = await tx.query.profilesTable.findFirst({
					columns: {
						username: true,
					},
					where: like(profilesTable.username, `%${data.username}%`),
				});
				return r;
			});

			if (duplicateUsername) {
				// Extract the last 4 characters
				const lastFourChars = duplicateUsername.username.slice(-4);

				// Check if these characters form a valid number
				if (/^\d{4}$/.test(lastFourChars)) {
					usernameNumber = parseInt(lastFourChars, 10) + 1;
				} else {
					// If the last 4 chars aren't numbers, start from 1
					usernameNumber = 1;
				}

				if (usernameNumber > 9999) {
					// console.error('Cannot use this username');
					error(400, 'Cannot use this username');
				}

				// Pad the number with leading zeros to always be 4 digits
				const paddedNumber = usernameNumber.toString().padStart(4, '0');
				newUsername = `${data.username}-${paddedNumber}`;
			} else {
				newUsername = `${data.username}-0000`;
			}

			await drizzleClient.rls(async (tx) => {
				await tx
					.update(profilesTable)
					.set({
						username: newUsername,
					})
					.where(eq(profilesTable.id, profile?.id));
			});

			await drizzleClient.rls(async (tx) => {
				await tx
					.update(profilesTable)
					.set({
						username_set: true,
					})
					.where(eq(profilesTable.id, profile?.id));
			});

			return { success: true };
		} catch (err) {
			// console.error('Error updating profile username');
			error(401, 'You need to be logged in!');
			// return { profile: null, session, cookies: cookies.getAll() };
		}
	},
};

const getUserProfile = async (
	user: User | null,
	drizzleClient: DrizzleClient,
) => {
	if (!user) {
		// console.log('User not found, returning null profile.');
		return null;
	}

	// console.log('Finding current profile...');
	// console.log(`${profilesTable.id}, ${user.id}`);

	// TODO do not use admin db client.
	const curProfile = await drizzleClient.rls(async (tx) => {
		const r = await tx.query.profilesTable.findFirst({
			where: eq(profilesTable.id, user.id),
		});
		return r;
	});

	// console.log(`curProfile: ${curProfile}`);

	// if profile found, return it
	if (curProfile) {
		// console.log('Found profile in backend!');
		return curProfile as SelectProfile;
	} else {
		// console.error('Could not get profile.');
		throw new Error('Could not get profile.');
	}
};
