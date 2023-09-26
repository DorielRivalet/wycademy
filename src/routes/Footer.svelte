<!--
  ~ © 2023 Doriel Rivalet
  ~ Use of this source code is governed by a MIT license that can be
  ~ found in the LICENSE file.
-->

<!-- <script context="module" >
	import { page } from '$app/stores';

	const whitelist = [
	'/',
	'/about',
	'/about-development-stages',
	'/site-preferences',
];

	export async function load({ fetch }) {
		let lastModifiedDate: string = '';
		let commitLink: string = '#';
		let timesChanged: number = 0;

		if (!whitelist.includes(page.url.pathname)) {
			console.warn('Page not on GitHub paths whitelist');
			return { props: {lastModifiedDate, commitLink, timesChanged }};
		}
		const response = await fetch(
			`https://api.github.com/repos/DorielRivalet/frontier-compendium/commits?path=src/routes${path}/%2Bpage.svelte`,
		);
		const commits = await response.json();
		const lastModified = commits.title;

		return {
			props: {
				lastModified,
				commitLink,
				timesChanged,
			},
		};
	}

</script> -->

<!---<script context="module">
	console.log('in module');
	export const load = async ({ url, fetch }) => {
		const res = await fetch(
			`https://api.github.com/repos/DorielRivalet/frontier-compendium/commits?path=src/routes${url.pathname}/%2Bpage.svelte`,
		);
		if (res.ok) {
			console.log('has data');
			return {
				props: {
					data: await res.json(),
				},
			};
		} else {
			console.error('error');
			return {
				props: {
					data: {},
				},
			};
		}
		//rest of your code
	};
	// export async function load({ params, fetch }) {
	// 	console.log(`page: ${params.id}`);
	// 	return {
	// 		props: {
	// 			commitLink: '#',
	// 			timesModified: '2',
	// 			lastModifiedDate: 'date',
	// 		},
	// 	};
	// }
	// const pathname = url.pathname;
	// const res = await fetch(
	// 	`https://api.github.com/repos/DorielRivalet/frontier-compendium/commits?path=src/routes${pathname}/%2Bpage.svelte`,
	// );
	// if (res.ok) {
	// 	console.log('has data');
	// 	return {
	// 		props: {
	// 			data: await res.json(),
	// 		},
	// 	};
	// } else {
	// 	console.error(res.status, await res.json().message);
	// 	return {
	// 		props: {
	// 			data: {},
	// 		},
	// 	};
	// 	}
	// }
</script>-->

<!-- <script lang="ts">
	import * as constant from '$lib/constants';
	import LogoGithub from 'carbon-icons-svelte/lib/LogoGithub.svelte';
	import './styles.css';
	import Link from 'carbon-components-svelte/src/Link/Link.svelte';
	export let data = [];

	console.log(`data in script: ${1}`);
</script> -->

<!-- <script context="module">
	// server-side rendered
	export async function load({ fetch }) {
		const response = await fetch('api/%2Bserver.ts');

		return {
			props: {
				pokemon: await response.json(),
			},
		};
	}
</script> -->

<script lang="ts">
	import Link from 'carbon-components-svelte/src/Link/Link.svelte';
	import LogoGithub from 'carbon-icons-svelte/lib/LogoGithub.svelte';
	import type { GitHubData } from '$lib/types';
	import * as constant from '$lib/constants';
	export let githubData: GitHubData;
	let { lastModified, commitLink, timesChanged } = githubData;
</script>

<footer>
	<div class="subtle item-container">
		{#if lastModified !== ''}
			<div>Page last modified</div>
			<Link href={commitLink}>{lastModified}</Link>
			<div>
				Times changed: <span>{timesChanged}</span>
			</div>
		{/if}
	</div>

	<div class="item-container">
		<a href={constant.authorGitHub}>
			<img
				class="author-avatar image-with-glow"
				alt="Author avatar"
				src="https://avatars.githubusercontent.com/u/100863878?v=4"
			/>
		</a>
		<Link href={constant.authorGitHub}
			>{constant.author} &copy {new Date().getUTCFullYear()}</Link
		>
	</div>

	<div class="item-container">
		<Link href="https://github.com/DorielRivalet/frontier-compendium">
			<LogoGithub size={32} />
		</Link>
		<div class="subtle">v{constant.siteVersion}</div>
	</div>
</footer>

<style>
	.item-container {
		display: flex;
		flex-direction: column;
		gap: 1rem;
		align-items: center;
	}

	.author-avatar {
		width: var(--cds-spacing-09);
		height: var(--cds-spacing-09);
		border-radius: 50%;
		border: var(--cds-spacing-01) solid transparent;
	}

	.image-with-glow {
		transition: filter 0.11s ease-in-out; /* Add a smooth transition for the glow effect */
	}

	.image-with-glow:hover {
		filter: drop-shadow(0px 0px var(--cds-spacing-03) var(--ctp-sky))
			saturate(120%);
	}

	.subtle {
		color: var(--ctp-overlay1);
	}

	footer {
		border-top: var(--cds-spacing-01) solid var(--ctp-surface0);
		margin-top: var(--cds-spacing-06);
		padding: var(--cds-spacing-07);
		background-color: var(--ctp-mantle);
		display: flex;
		justify-content: space-between;
		align-items: center;
	}
</style>
