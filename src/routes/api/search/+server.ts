import { json } from '@sveltejs/kit';
import results from './results.json';
import { pageInfo } from '$lib/page-info';

export const prerender = true;

export async function GET() {
	return json([...results, pageInfo]);
}
