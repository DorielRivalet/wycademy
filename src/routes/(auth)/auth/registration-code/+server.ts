// auth/registration-code/+server.ts
import type { DrizzleClient } from '$lib/db/drizzle';
import { registrationCodesTable } from '$lib/db/schema';
import { error, type RequestEvent, type RequestHandler } from '@sveltejs/kit';
import { RateLimiter } from 'sveltekit-rate-limiter/server';
import { and, eq } from 'drizzle-orm';

const limiter = new RateLimiter({
	IP: [30, 'h'], // IP address limiter
	IPUA: [5, 'm'], // IP + User Agent limiter
});

export const POST: RequestHandler = async (event) => {
	console.log('User submitted registration code, verifying in database...');
	if (await limiter.isLimited(event)) error(429, 'Too Many Requests');

	return await handleRegistrationCode(event);
};

async function handleRegistrationCode(event: RequestEvent) {
	const { submittedCode } = await event.request.json();

	if (!(typeof submittedCode === 'string' && submittedCode.length > 16)) {
		error(400, 'Bad Request');
	}

	// always type the client if u get a type error.
	const drizzleClient = event.locals.drizzleClient as DrizzleClient;

	// TODO
	/*
	1. query registration_codes table.
	2. find if the code we have matches an unused code.
	3. find the first unused code if so, marking it as used.
	4. proceed with the registration by returning HTTP 200.
	*/
	// console.log(submittedCode);
	const foundUnused =
		await drizzleClient.drizzlePostgresAdmin.query.registrationCodesTable.findFirst(
			{
				where: and(
					eq(registrationCodesTable.used, false),
					eq(registrationCodesTable.code, submittedCode),
				),
			},
		);

	if (!foundUnused) {
		error(400, 'Bad Request');
	}

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

	// Set a cookie to mark the registration code as verified
	event.cookies.set('registration_code_verified', 'true', {
		path: '/',
		httpOnly: true,
		secure: process.env.NODE_ENV === 'production',
		sameSite: 'lax',
		maxAge: 60 * 60 * 1, // 1 hour
	});

	return new Response(null, { status: 200 });
}
