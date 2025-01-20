// auth/login/discord/+server.ts
import { redirect } from '@sveltejs/kit';
import { RateLimiter } from 'sveltekit-rate-limiter/server';

const limiter = new RateLimiter({
	IP: [30, 'h'], // IP address limiter
	IPUA: [5, 'm'], // IP + User Agent limiter
});

// TODO why not post?
export const GET = async (event) => {
	console.log('User wants to log in');
	const { locals, url } = event;

	if (await limiter.isLimited(event)) redirect(307, '/auth/error');

	const { supabase } = locals;

	const { data } = await supabase.auth.signInWithOAuth({
		provider: 'discord',
		options: {
			redirectTo: url.origin + '/auth/callback',
			// scopes: 'identify', // TODO this includes email too, from supabase code. cant fix. default is email+identify already.
			// see https://github.com/supabase/auth/blob/586df26ae7cb9581436682bdb0a8573aa99d59c9/internal/api/provider/discord.go#L40
		},
	});

	console.log('User logging in with Discord OAuth...');

	if (data.url) {
		console.log(`Redirecting to ${url.origin + '/auth/callback'}...`);
		redirect(307, data.url);
	}

	console.error('There was an error with logging in');
	redirect(307, '/auth/error');
};
