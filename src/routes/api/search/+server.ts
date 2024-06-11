import { json } from '@sveltejs/kit';
import results from './results.json';

export const prerender = true;

export async function GET() {
	return json(results);
}
