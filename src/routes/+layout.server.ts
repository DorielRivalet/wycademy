// TODO can i prerender this?
import { apiCacheTimeouts } from '$lib/constants';
import type { GitHubData } from '$lib/types';
import type { LayoutServerLoad } from './$types';

function stringToCustomDateFormat(date: string): string {
	return new Date(date).toISOString().substring(0, 16).replace('T', ' ');
}

export const load: LayoutServerLoad = async ({ fetch, url, setHeaders }) => {
	/**Only use with prerendered pages */
	// Map URL paths to their actual route group paths
	const routeGroupMapping: Record<string, string> = {
		'/': '/(home)',
		'/site-preferences': '/(app)/site-preferences',
	};

	const defaultGitHubData: GitHubData = {
		lastModified: '',
		commitLink: '#',
		timesChanged: 0,
	};

	// Get the actual file system path from the URL pathname
	const urlPath = url.pathname;
	const fsPath = routeGroupMapping[urlPath];

	if (!fsPath) {
		console.log('Path not in route mapping:', urlPath);
		return { github: defaultGitHubData };
	}

	try {
		const githubPath = `src/routes${fsPath}/%2Bpage.svelte`;
		console.log('Fetching GitHub data for path:', githubPath);

		const res = await fetch(
			`https://api.github.com/repos/DorielRivalet/wycademy/commits?path=${githubPath}`,
		);

		// Set cache headers
		setHeaders({
			'cache-control': `public, max-age=0, s-maxage=${apiCacheTimeouts.github}`,
			etag: res.headers.get('etag') || '',
			'last-modified': res.headers.get('last-modified') || '',
		});

		if (!res.ok) {
			console.error('Error fetching data from GitHub:', res.status);
			return { github: defaultGitHubData };
		}

		const commits = await res.json();

		if (!commits || commits.length === 0) {
			console.log('No commits found for path:', githubPath);
			return { github: defaultGitHubData };
		}

		const lastCommit = commits[0];
		return {
			github: {
				lastModified: stringToCustomDateFormat(lastCommit.commit.author.date),
				commitLink: lastCommit.html_url,
				timesChanged: commits.length,
			},
		};
	} catch (e) {
		console.error('Error fetching data from GitHub:', e);
		return { github: defaultGitHubData };
	}
};
