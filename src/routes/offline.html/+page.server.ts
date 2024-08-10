import { redirect } from '@sveltejs/kit';
// TODO?
export function load() {
	console.log('Loading redirects...');
	throw redirect(307, '/offline');
}
