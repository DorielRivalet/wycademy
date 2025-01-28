// settings/profile/+page.server.ts
import { fail, type Actions } from '@sveltejs/kit';
import { zfd } from 'zod-form-data';
import { usernames } from '$lib/client/modules/profile/username';
import { capitalizeFirstLetter } from '$lib/client/modules/strings';
import type { DrizzleClient } from '$lib/db/drizzle';
import { getDuplicateUsername, getUserProfile } from '$lib/db/queries/select';
import {
	updatePublicProfileActivity,
	updatePublicProfileData,
	updatePublicProfileSettings,
	updateUsername,
} from '$lib/db/queries/update';

// TODO replace zod with superforms

export const actions: Actions = {
	updatePublicProfile: async ({ request, locals }) => {
		const user = locals.user;
		const drizzleClient = locals.drizzleClient as DrizzleClient;

		// TODO
		try {
			// depends('supabase:db:profiles'); // TODO unsure if this should be here. does this work on only load functions or can they be used in actions like here?
			// const { data: profile } = await supabase.from('test_profiles').select();
			const profile = await getUserProfile(user, drizzleClient);
			if (!profile) {
				return fail(400, { error: 'Could not get profile.' });
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
				return fail(400, { error: 'Invalid form data' });
			}

			await updatePublicProfileData(data, drizzleClient, profile?.id);

			return { success: true };
		} catch (err) {
			// console.error('Error updating profile');
			return fail(401, { error: 'You need to be logged in!' });
			// return { profile: null, session, cookies: cookies.getAll() };
		}
	},
	updateActivity: async ({ request, locals }) => {
		const user = locals.user;
		const drizzleClient = locals.drizzleClient as DrizzleClient;

		// TODO
		try {
			// depends('supabase:db:profiles'); // TODO unsure if this should be here
			// const { data: profile } = await supabase.from('test_profiles').select();
			const profile = await getUserProfile(user, drizzleClient);
			if (!profile) {
				return fail(400, { error: 'Could not get profile.' });
			}
			// console.log('Got profile data');
			// return { profile: profile ?? null, session, cookies: cookies.getAll() };
			const schema = zfd.formData({
				activity: zfd.repeatable(),
			});

			const { data } = schema.safeParse(await request.formData());

			if (!data) {
				// console.error('Invalid form data');
				return fail(400, { error: 'Invalid form data' });
			}

			const newPrivate = data.activity[0] === 'true' ? true : false;

			await updatePublicProfileActivity(newPrivate, drizzleClient, profile?.id);

			return { success: true };
		} catch (err) {
			// console.error('Error updating profile activity');
			return fail(401, { error: 'You need to be logged in!' });

			// return { profile: null, session, cookies: cookies.getAll() };
		}
	},
	updateProfileSettings: async ({ request, locals }) => {
		const user = locals.user;
		const drizzleClient = locals.drizzleClient as DrizzleClient;

		// TODO
		try {
			// depends('supabase:db:profiles'); // TODO unsure if this should be here
			// const { data: profile } = await supabase.from('test_profiles').select();
			const profile = await getUserProfile(user, drizzleClient);
			if (!profile) {
				return fail(400, { error: 'Could not get profile.' });
			}
			// console.log('Got profile data');
			// return { profile: profile ?? null, session, cookies: cookies.getAll() };
			const schema = zfd.formData({
				settings: zfd.repeatable(),
			});

			const { data } = schema.safeParse(await request.formData());

			if (!data) {
				return fail(400, { error: 'Invalid form data' });
			}

			const newDiscordUsernameShown =
				data.settings[0] === 'true' ? true : false;
			const newModeratorBadgeShown = data.settings[1] === 'true' ? true : false;

			await updatePublicProfileSettings(
				newDiscordUsernameShown,
				newModeratorBadgeShown,
				drizzleClient,
				profile?.id,
			);

			return { success: true };
		} catch (err) {
			// console.error('Error updating profile settings');
			return fail(401, { error: 'You need to be logged in!' });

			// return { profile: null, session, cookies: cookies.getAll() };
		}
	},
	updateProfileUsername: async ({ request, locals }) => {
		const drizzleClient = locals.drizzleClient as DrizzleClient;

		const user = locals.user;

		// TODO test
		try {
			// depends('supabase:db:profiles'); // TODO unsure if this should be here
			// const { data: profile } = await supabase.from('test_profiles').select();
			const profile = await getUserProfile(user, drizzleClient);
			if (!profile) {
				return fail(400, { error: 'Could not get profile.' });
			}
			// console.log('Got profile data');
			// return { profile: profile ?? null, session, cookies: cookies.getAll() };
			const schema = zfd.formData({
				username: zfd.text(),
			});

			const { data } = schema.safeParse(await request.formData());

			if (!data) {
				// console.error('Invalid form data');
				return fail(400, { error: 'Invalid form data' });
			}

			if (
				data.username.trim().toLowerCase() ===
				profile.username
					.trim()
					.toLowerCase()
					.substring(0, profile.username.trim().length - 5)
			) {
				// console.error('New username is the same as old username');
				return fail(400, { error: 'Username already set' });
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
					return fail(400, { error: 'Invalid username format' });
				}
			} else {
				// console.error('Invalid username');
				return fail(400, { error: 'Invalid username' });
			}

			let usernameNumber = 0;
			let newUsername = '';
			const duplicateUsername = await getDuplicateUsername(drizzleClient, data);

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
					return fail(400, { error: 'Cannot use this username' });
				}

				// Pad the number with leading zeros to always be 4 digits
				const paddedNumber = usernameNumber.toString().padStart(4, '0');
				newUsername = `${data.username}-${paddedNumber}`;
			} else {
				newUsername = `${data.username}-0000`;
			}

			await updateUsername(newUsername, profile?.id, drizzleClient);

			return { success: true };
		} catch (err) {
			// console.error('Error updating profile username');
			return fail(401, { error: 'You need to be logged in!' });

			// return { profile: null, session, cookies: cookies.getAll() };
		}
	},
};
