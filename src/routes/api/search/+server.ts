import { json } from '@sveltejs/kit';
import { browser } from '$app/environment';

export const prerender = true;

export async function GET() {
	if (!browser) return json([]);
	return json((await import('$lib/page-info')).default());
}
