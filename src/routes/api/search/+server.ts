import { json } from '@sveltejs/kit';
import searchJSON from './search.json';

export async function GET() {
	return json(searchJSON);
}
