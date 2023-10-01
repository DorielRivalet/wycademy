// export function load() {
// 	throw new Error('yikes');
// }
console.log('layout.server.ts');
import { apiCacheTimeouts } from '$lib/constants';
import type { GitHubData } from '$lib/types';
import type { LayoutServerLoad } from './$types';

function stringToCustomDateFormat(date: string): string {
	return new Date(date).toISOString().substring(0, 16).replace('T', ' ');
}

const whitelist = [
	'/',
	'/about',
	'/about-development-stages',
	'/site-preferences',
];

export const load: LayoutServerLoad = async ({ fetch, url, setHeaders }) => {
	console.log('async layout server load');
	let lastModified: string = '';
	let commitLink: string = '#';
	let timesChanged: number = 0;
	const path = url.pathname;
	if (!whitelist.includes(path)) {
		return {
			github: {
				commitLink,
				lastModified,
				timesChanged,
			} as GitHubData,
		};
	}

	try {
		const res = await fetch(
			`https://api.github.com/repos/DorielRivalet/frontier-compendium/commits?path=src/routes${path}/%2Bpage.svelte`,
		);

		// public, max-age=60, s-maxage=60
		const cacheControl = res.headers.get('cache-control');

		if (cacheControl)
			setHeaders({
				'cache-control': `max-age=0, s-maxage=${apiCacheTimeouts.github}`,
			});

		if (!res.ok) {
			console.error('Error fetching data from GitHub');
			return {
				github: { commitLink, lastModified, timesChanged } as GitHubData,
			};
		}

		const commits = await res.json();
		const lastCommit = commits[0];
		lastModified = stringToCustomDateFormat(lastCommit.commit.author.date);
		commitLink = lastCommit.html_url;
		timesChanged = commits.length;
	} catch (e) {
		console.error('Error fetching data from GitHub: ', e);
	}

	return {
		github: {
			commitLink,
			lastModified,
			timesChanged,
		} as GitHubData,
	};
};
