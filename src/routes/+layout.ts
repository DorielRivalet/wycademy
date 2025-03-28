// TODO can i prerender this?

import { dev } from '$app/environment';
import { inject } from '@vercel/analytics';
import { apiCacheTimeouts } from '$lib/constants';
import type { GitHubData } from '$lib/types';
import type { LayoutLoad } from './$types';
import { stringToCustomDateFormat } from '$lib/client/modules/time';
import {
	createBrowserClient,
	createServerClient,
	isBrowser,
} from '@supabase/ssr';
import {
	PUBLIC_SUPABASE_ANON_KEY,
	PUBLIC_SUPABASE_URL,
} from '$env/static/public';

inject({ mode: dev ? 'development' : 'production' });

export const load: LayoutLoad = async ({
	fetch,
	url,
	setHeaders,
	data,
	depends,
}) => {
	/**
	 * Declare a dependency so the layout can be invalidated, for example, on
	 * session refresh.
	 */
	depends('supabase:auth');

	/** This is the client for making database actions*/
	const supabase = isBrowser()
		? createBrowserClient(PUBLIC_SUPABASE_URL, PUBLIC_SUPABASE_ANON_KEY, {
				global: {
					fetch,
				},
			})
		: createServerClient(PUBLIC_SUPABASE_URL, PUBLIC_SUPABASE_ANON_KEY, {
				global: {
					fetch,
				},
				cookies: {
					getAll() {
						return data.cookies;
					},
				},
			});

	/**
	 * It's fine to use `getSession` here, because on the client, `getSession` is
	 * safe, and on the server, it reads `session` from the `LayoutData`, which
	 * safely checked the session using `safeGetSession`.
	 */
	const {
		data: { session },
	} = await supabase.auth.getSession();

	const {
		data: { user },
	} = await supabase.auth.getUser();

	// TODO safe?
	/**The user profile can be null */
	const profile = data.profile;
	/**Only works server-side. This is the client for making database actions with Drizzle.*/
	// const drizzleClient = isBrowser()
	// 	? null
	// 	: createDrizzleSupabaseClient(session);

	/**Only use with prerendered pages */
	// Map URL paths to their actual route group paths
	const routeGroupMapping: Record<string, string> = {
		'/': '/(home)',
		'/site-preferences': '/(app)/site-preferences',
		'/overlay': '/(home)/overlay',
		'/support': '/support',
		'/support/external': '/support/(docs-full)/external',
		'/support/external/websites': '/support/(docs-full)/external/websites',
		'/support/overlay-documentation/architecture':
			'/support/(docs-full)/overlay-documentation/architecture',
		'/support/wycademy-documentation/architecture':
			'/support/(docs-full)/wycademy-documentation/architecture',
		'/support/wycademy-documentation/adaptation':
			'/support/(docs-full)/wycademy-documentation/adaptation',
		'/support/policies/acknowledgements':
			'/support/(docs-full)/policies/acknowledgements',
		'/support/policies/licenses': '/support/(docs-full)/policies/licenses',
		'/support/policies/copyright': '/support/(docs-full)/policies/copyright',
		'/support/policies/privacy-policy':
			'/support/(docs-full)/policies/privacy-policy',
		'/support/policies/security': '/support/(docs-full)/policies/security',
		'/support/policies/community-standards':
			'/support/(docs-full)/policies/community-standards',
		'/support/policies/terms-of-service':
			'/support/(docs-full)/policies/terms-of-service',
		'/support/website/about': '/support/(docs-full)/website/about',
		'/support/website/announcements':
			'/support/(docs-full)/website/announcements',
		'/support/website/contact': '/support/(docs-full)/website/contact',
		'/support/website/feedback': '/support/(docs-full)/website/feedback',
		'/support/website/contribute': '/support/(docs-full)/website/contribute',
		'/support/website/development': '/support/(docs-full)/website/development',
		'/support/website/donate': '/support/(docs-full)/website/donate',
		'/support/website/faq': '/support/(docs-full)/website/faq',
		'/tools': '/tools',
		'/tools/calculator/crit-conversion':
			'/tools/(docs-full)/calculator/crit-conversion',
		'/tools/calculator/damage': '/tools/(docs-full)/calculator/damage',
		'/tools/calculator/gunlance-shells-and-wyvernfire':
			'/tools/(docs-full)/calculator/gunlance-shells-and-wyvernfire',
		'/tools/calculator/heavy-bowgun-heat-beam':
			'/tools/(docs-full)/calculator/heavy-bowgun-heat-beam',
		'/tools/calculator/ice-age': '/tools/(docs-full)/calculator/ice-age',
		'/tools/calculator/sigil': '/tools/(docs-full)/calculator/sigil',
		'/tools/external/ezlion': '/tools/(docs-full)/external/ezlion',
		'/tools/external/overlay': '/tools/(docs-full)/external/overlay',
		'/tools/generator/armor': '/tools/(docs-full)/generator/armor',
		'/tools/generator/icon': '/tools/(docs-full)/generator/icon',
		'/tools/generator/item': '/tools/(docs-full)/generator/item',
		'/tools/generator/thumbnail': '/tools/(docs-full)/generator/thumbnail',
		'/tools/generator/weapon': '/tools/(docs-full)/generator/weapon',
		'/tools/search/advanced-search':
			'/tools/(docs-full)/search/advanced-search',
		'/tools/generator/armor-set-searcher':
			'/tools/(docs-full)/search/armor-set-searcher',
		'/tools/simulator/partner-skills':
			'/tools/(docs-full)/simulator/partner-skills',
		'/tools/simulator/sigil': '/tools/(docs-full)/simulator/sigil',
		'/tools/simulator/tower-weapon':
			'/tools/(docs-full)/simulator/tower-weapon',
		'/offline': '/(cinematic)/offline',
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
		// Set cache headers even for not-found cases
		// setHeaders({
		// 	'cache-control': `public, max-age=0, s-maxage=${apiCacheTimeouts.github}`,
		// });
		return {
			github: defaultGitHubData,
			supabase,
			session,
			user,
			profile,
			// drizzleClient,
		};
	}

	try {
		const githubPath = `src/routes${fsPath}/%2Bpage.svelte`;
		console.log('Fetching GitHub data for path:', githubPath);

		const res = await fetch(
			`https://api.github.com/repos/DorielRivalet/wycademy/commits?path=${githubPath}`,
		);

		// Prepare headers object
		const headers: Record<string, string> = {
			'cache-control': `public, max-age=0, s-maxage=${apiCacheTimeouts.github}`,
		};

		// Only add ETag and Last-Modified if they exist
		const etag = res.headers.get('etag');
		const lastModified = res.headers.get('last-modified');

		if (etag) headers.etag = etag;
		if (lastModified) headers['last-modified'] = lastModified;

		// Set all headers at once
		setHeaders(headers);

		if (!res.ok) {
			console.warn('Could not fetch data from GitHub:', res.status);
			return {
				github: defaultGitHubData,
				supabase,
				session,
				user,
				profile,
				// drizzleClient,
			};
		}

		const commits = await res.json();

		if (!commits || commits.length === 0) {
			console.log('No commits found for path:', githubPath);
			return {
				github: defaultGitHubData,
				supabase,
				session,
				user,
				profile,
				// drizzleClient,
			};
		}

		const lastCommit = commits[0];
		return {
			github: {
				lastModified: stringToCustomDateFormat(lastCommit.commit.author.date),
				commitLink: lastCommit.html_url,
				timesChanged: commits.length,
			},
			supabase,
			session,
			user,
			profile,
			// drizzleClient,
		};
	} catch (e) {
		console.warn('Could not fetch data from GitHub:', e);
		// Set cache headers even for error cases
		// setHeaders({
		// 	'cache-control': `public, max-age=0, s-maxage=${apiCacheTimeouts.github}`,
		// });
		return {
			github: defaultGitHubData,
			supabase,
			session,
			user,
			profile,
			// drizzleClient,
		};
	}
};
