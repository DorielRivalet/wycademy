import { apiCacheTimeouts } from '$lib/constants';

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
		console.error('Error fetching data from GitHub for overlay:', err);
		return {};
	}
}
