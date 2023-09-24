<!--
  ~ © 2023 Doriel Rivalet
  ~ Use of this source code is governed by a MIT license that can be
  ~ found in the LICENSE file.
-->

<!-- <script context="module">
	export async function load({ fetch, page }) {
		const response = await fetch(
			,
		);
		const commits = await response.json();
		const lastModified = commits.title;

		return {
			props: {
				lastModified,
			},
		};
	}

</script> -->

<script lang="ts">
	import * as constant from '$lib/constants';
	import LogoGithub from 'carbon-icons-svelte/lib/LogoGithub.svelte';
	import './styles.css';
	import Link from 'carbon-components-svelte/src/Link/Link.svelte';
	import { getGitHubDataForPath } from '$lib/client/modules/promises';
	import SkeletonText from 'carbon-components-svelte/src/SkeletonText/SkeletonText.svelte';
	import { browser } from '$app/environment';
	import { page } from '$app/stores';

	let promise = browser
		? getGitHubDataForPath($page.url.pathname)
		: Promise.resolve();
	$: console.log(`page.url.pathname: ${$page.url.pathname}`);

	// const whitelist = ['routes/+page.svelte', '/about', '/site-preferences'];
	// whitelist.includes($page.url.pathname)
	// onMount(() => {
	// 	let promise = getGitHubDataForPath($page.url.pathname);
	// });

	// getGitHubDataForPath($page.url.pathname);
</script>

<footer>
	<div class="subtle item-container">
		{#await promise}
			<SkeletonText width={'64px'} />
		{:then GitHubData}
			{#if GitHubData?.lastModifiedDate !== undefined}
				<div>Page last modified</div>
				<Link href={GitHubData?.commitLink}>{GitHubData?.lastModifiedDate}</Link
				>
			{/if}
		{:catch}
			<SkeletonText width={'64px'} />
		{/await}
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
			<LogoGithub size="48" />
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
