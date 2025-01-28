import { validateUsername } from '$lib/client/modules/profile/username';
import { error } from '@sveltejs/kit';
import type { PageServerLoad } from './$types';
import { RateLimiter } from 'sveltekit-rate-limiter/server';
import type { DrizzleClient } from '$lib/db/drizzle';
import { getUserProfileByUsername } from '$lib/db/queries/select';

const limiter = new RateLimiter({
	IP: [600, 'h'], // IP address limiter
	IPUA: [30, 'm'], // IP + User Agent limiter
});

export const load: PageServerLoad = async (event) => {
	// Every call to isLimited counts as a hit towards the rate limit for the event.
	if (await limiter.isLimited(event)) {
		error(429, 'Hit the rate limit');
	}

	// errors inside here does show up out here, so it works fine.
	validateUsername(event.params.username);

	const drizzleClient = event.locals.drizzleClient as DrizzleClient;

	/**The profile data of the user page (not the user who requests the page) */
	const pageUserProfile = await getUserProfileByUsername(
		event.params.username,
		drizzleClient,
	);

	if (!pageUserProfile) {
		error(404, 'Hunter not found');
	}

	if (pageUserProfile.private) {
		error(404, 'Hunter set profile to private');
	}

	// TODO check if user is banned

	return {
		pageUserProfile: pageUserProfile,
	};
};
