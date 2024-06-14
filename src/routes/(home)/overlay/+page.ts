import { apiCacheTimeouts } from '$lib/constants';
import { error } from '@sveltejs/kit';

export const prerender = true;

export async function load({ fetch, setHeaders }) {
	try {
		const url = 'https://api.github.com/repos/dorielrivalet/mhfz-overlay';
		const response = await fetch(url);

		setHeaders({
			'cache-control': `max-age=0, s-maxage=${apiCacheTimeouts.github}`,
		});

		return response.json();
	} catch (err) {
		return error(500, 'Internal Server Error');
	}
}
