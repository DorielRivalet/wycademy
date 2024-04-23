<!--
  ~ © 2023 Doriel Rivalet
  ~ Use of this source code is governed by a MIT license that can be
  ~ found in the LICENSE file.
-->

<script lang="ts">
	import Link from 'carbon-components-svelte/src/Link/Link.svelte';
	import LogoGithub from 'carbon-icons-svelte/lib/LogoGithub.svelte';
	import type { GitHubData } from '$lib/types';
	import * as constant from '$lib/constants';
	import OutboundLink from 'carbon-components-svelte/src/Link/OutboundLink.svelte';
	export let githubData: GitHubData = {
		lastModified: '',
		commitLink: '',
		timesChanged: 0,
	};
	let { lastModified, commitLink, timesChanged } = githubData;
</script>

<footer>
	<div class="subtle item-container">
		{#if lastModified !== ''}
			<em>Page last modified</em>
			<Link href={commitLink}>{lastModified}</Link>
			<div>
				Times changed: <span>{timesChanged}</span>
			</div>
		{:else}
			<div>Want to play as Raviente?</div>
			<Link href="/offline">Try this game!</Link>
		{/if}
	</div>

	<div class="item-container">
		<Link href={constant.authorUrl}
			>{constant.authorName} &copy {new Date().getUTCFullYear()}</Link
		>
		<div>
			Powered by <OutboundLink href="https://developers.cloudflare.com/pages/"
				>Cloudflare Pages</OutboundLink
			> and <OutboundLink href="https://kit.svelte.dev/docs/introduction"
				>SvelteKit</OutboundLink
			>
		</div>
	</div>

	<div class="item-container">
		<Link aria-label="GitHub repository" href={constant.projectGitHub}>
			<LogoGithub size={32} />
		</Link>
		<div class="subtle">v{constant.appVersion}</div>
	</div>
</footer>

<style lang="scss">
	@media (min-width: 320px) {
		footer {
			padding: var(--cds-spacing-02);
			background-color: var(--ctp-crust);
			display: flex;
			justify-content: space-between;
			align-items: center;
			font-size: 0.75rem;
		}

		.item-container {
			display: flex;
			flex-direction: column;
			gap: 0.25rem;
			align-items: center;
		}
	}
	@media (min-width: 672px) {
		footer {
			padding: var(--cds-spacing-07);
			background-color: var(--ctp-crust);
			display: flex;
			justify-content: space-between;
			align-items: center;
		}

		.item-container {
			display: flex;
			flex-direction: column;
			gap: 1rem;
			align-items: center;
		}
	}
</style>
