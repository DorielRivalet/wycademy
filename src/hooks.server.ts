// src/hooks.server.ts
import {
	PUBLIC_SUPABASE_URL,
	PUBLIC_SUPABASE_ANON_KEY,
} from '$env/static/public';
import { createDrizzleSupabaseClient } from '$lib/db';
import { createServerClient } from '@supabase/ssr';
import { type Handle, redirect } from '@sveltejs/kit';
import { sequence } from '@sveltejs/kit/hooks';

const supabase: Handle = async ({ event, resolve }) => {
	/**
	 * Creates a Supabase client specific to this server request.
	 *
	 * The Supabase client gets the Auth token from the request cookies.
	 * This is the client for making database actions.
	 */
	event.locals.supabase = createServerClient(
		PUBLIC_SUPABASE_URL,
		PUBLIC_SUPABASE_ANON_KEY,
		{
			cookies: {
				getAll: () => event.cookies.getAll(),
				/**
				 * SvelteKit's cookies API requires `path` to be explicitly set in
				 * the cookie options. Setting `path` to `/` replicates previous/
				 * standard behavior.
				 */
				setAll: (cookiesToSet) => {
					/**
					 * Note: You have to add the `path` variable to the
					 * set and remove method due to sveltekit's cookie API
					 * requiring this to be set, setting the path to an empty string
					 * will replicate previous/standard behavior (https://kit.svelte.dev/docs/types#public-types-cookies)
					 */
					cookiesToSet.forEach(({ name, value, options }) => {
						event.cookies.set(name, value, { ...options, path: '/' });
					});
				},
			},
		},
	);

	/**
	 * Unlike `supabase.auth.getSession()`, which returns the session _without_
	 * validating the JWT, this function also calls `getUser()` to validate the
	 * JWT before returning the session.
	 */
	event.locals.safeGetSession = async () => {
		const {
			data: { session },
		} = await event.locals.supabase.auth.getSession();
		if (!session) {
			return { session: null, user: null };
		}

		const {
			data: { user },
			error,
		} = await event.locals.supabase.auth.getUser();
		if (error) {
			// JWT validation has failed
			return { session: null, user: null };
		}

		return { session, user };
	};

	return resolve(event, {
		filterSerializedResponseHeaders(name) {
			/**
			 * Supabase libraries use the `content-range` and `x-supabase-api-version`
			 * headers, so we need to tell SvelteKit to pass it through.
			 */
			return name === 'content-range' || name === 'x-supabase-api-version';
		},
	});
};

const authGuard: Handle = async ({ event, resolve }) => {
	const { session, user } = await event.locals.safeGetSession();
	// we avoid running safeGetSession twice.
	/**We should only have createDrizzleSupabaseClient in hooks.server.ts */
	event.locals.drizzleClient = await createDrizzleSupabaseClient(session);
	/**Safe because we used safeGetSession in the hooks file, so you do not have to load it yourself. */
	event.locals.session = session;
	/**Safe because we used safeGetSession in the hooks file, so you do not have to load it yourself. */
	event.locals.user = user;

	// If trying to access Discord login without verified code
	// TODO remove when done testing
	if (event.url.pathname === '/auth/login/discord') {
		const verifiedCode = event.cookies.get('registration_code_verified');

		if (!verifiedCode) {
			redirect(303, '/login');
		}
	}

	// unauthenticated or anon
	// also check service-worker.ts
	if (
		!event.locals.session &&
		(event.url.pathname.startsWith('/home') ||
			event.url.pathname.startsWith('/profile') ||
			event.url.pathname.startsWith('/account') ||
			event.url.pathname.startsWith('/onboarding') ||
			event.url.pathname.startsWith('/notifications') ||
			event.url.pathname.startsWith('/settings') ||
			// url.startsWith('/auth') ||
			// url.startsWith('/callback') ||
			// url.startsWith('/login') ||
			// url.startsWith('/signup') ||
			// url.startsWith('/quest-viewer') ||
			event.url.pathname.startsWith('/moderator-dashboard') ||
			event.url.pathname.startsWith('/dashboard') ||
			event.url.pathname.startsWith('/notice')) // warnings,timeouts, suspensions and terminations.
		// event.url.pathname.startsWith('/moderation-history')
		// url.startsWith('/users')
	) {
		console.log('Redirecting unauthenticated user to log in');
		redirect(303, '/login');
	}

	// authenticated
	if (
		event.locals.session &&
		(event.url.pathname === '/signup' || event.url.pathname === '/login')
	) {
		// TODO does this work properly?
		console.log('Redirecting authenticated user to their homepage');
		redirect(303, '/home');
	}

	// TODO moderator-only pages, check custom claims
	if (
		event.url.pathname.startsWith('/moderator-dashboard') &&
		(user?.app_metadata?.user_role === undefined ||
			user?.app_metadata?.user_role !== 'moderator')
	) {
		// TODO does this work properly?
		console.log(
			'Redirecting authenticated user to their homepage (tried to access moderator panel)',
		);
		redirect(303, '/home');
	}

	// console.log(
	// 	`hooks.server.ts user?.app_metadata: ` + JSON.stringify(user?.app_metadata),
	// );

	// TODO warnings, time-out, suspensions and terminations redirects.
	// redirect to /notice

	return resolve(event);
};

export const handle: Handle = sequence(supabase, authGuard);
