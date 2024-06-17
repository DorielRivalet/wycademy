import { redirect } from '@sveltejs/kit';

export function load() {
	console.log('Loading redirects...');
	throw redirect(307, '/offline');
}
