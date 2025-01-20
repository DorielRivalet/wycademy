import { redirect } from '@sveltejs/kit';
import { RateLimiter } from 'sveltekit-rate-limiter/server';

const limiter = new RateLimiter({
	IP: [30, 'h'], // IP address limiter
	IPUA: [5, 'm'], // IP + User Agent limiter
});

// TODO why not post?
export const GET = async (event) => {
	console.log('User wants to sign out');
	const { supabase } = event.locals;

	if (await limiter.isLimited(event)) redirect(307, '/auth/sign-out-error');

	const { error } = await supabase.auth.signOut();
	if (error) {
		console.error('There was an error with signing out');
		redirect(400, '/auth/sign-out-error');
	}

	console.log('Logged out user, redirecting to main home page...');
	redirect(303, '/');
};
