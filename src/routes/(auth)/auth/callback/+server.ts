import { redirect } from '@sveltejs/kit';
import { RateLimiter } from 'sveltekit-rate-limiter/server';

const limiter = new RateLimiter({
	IP: [30, 'h'], // IP address limiter
	IPUA: [5, 'm'], // IP + User Agent limiter
});

// TODO why not post?
export const GET = async (event) => {
	const {
		url,
		locals: { supabase },
	} = event;
	console.log('Running callback function...');

	if (await limiter.isLimited(event)) redirect(307, '/auth/error');

	const code = url.searchParams.get('code') as string;
	const next = url.searchParams.get('next') ?? '/home';

	if (code) {
		const { error } = await supabase.auth.exchangeCodeForSession(code);
		if (!error) {
			console.log(
				`Exchanged code for session succesfully, redirecting to /${next.slice(1)}...`,
			);
			redirect(303, `/${next.slice(1)}`);
		}
	}

	console.error(
		'There was an error with the OAuth callback function, redirecting to error page...',
	);
	// return the user to an error page with instructions
	redirect(303, '/auth/auth-code-error');
};
