import { json } from '@sveltejs/kit';
import { browser } from '$app/environment';
import { searchJSON } from '$lib/page-info';

export const prerender = true;

export async function GET() {
	if (!browser) return json([]);
	return json(searchJSON);
}
