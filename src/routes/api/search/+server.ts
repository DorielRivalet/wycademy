import { json } from '@sveltejs/kit';
import results from './results.json';

export async function GET() {
	return json(results);
}
