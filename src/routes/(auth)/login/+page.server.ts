import { fail, type Actions } from '@sveltejs/kit';
import { SECRET_CLOUDFLARE_TURNSTILE_KEY } from '$env/static/private';

interface TokenValidateResponse {
	'error-codes': string[];
	success: boolean;
	action: string;
	cdata: string;
}

async function validateToken(token: string, secret: string) {
	// TODO idk why this does not log anywhere
	console.log('Validating Turnstile token...');
	const response = await fetch(
		'https://challenges.cloudflare.com/turnstile/v0/siteverify',
		{
			method: 'POST',
			headers: {
				'content-type': 'application/json',
			},
			body: JSON.stringify({
				response: token,
				secret: secret,
			}),
		},
	);

	const data: TokenValidateResponse = await response.json();

	console.log('Returning Turnstile token validation response.');

	return {
		// Return the status
		success: data.success,

		// Return the first error if it exists
		error: data['error-codes']?.length ? data['error-codes'][0] : null,
	};
}

export const actions: Actions = {
	turnstile: async ({ request }) => {
		console.log('Running Turnstile action...');

		const data = await request.formData();

		console.log('Requested form data.');

		const token = data.get('cf-turnstile-response')?.toString() || ''; // if you edited the formsField option change this
		const SECRET_KEY = SECRET_CLOUDFLARE_TURNSTILE_KEY; // you should use $env module for secrets

		console.log('Got Turnstile token.');

		const { success, error } = await validateToken(token, SECRET_KEY);

		if (!success) {
			console.error('Invalid CAPTCHA.');
			return fail(422, { error: error || 'Invalid CAPTCHA' });
		}

		// do something, the captcha is valid!
		console.log('Turnstile success');
		return { success: true };
	},
};
