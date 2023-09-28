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
	export let githubData: GitHubData;
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
		<div class="subtle">v{constant.appVersion}</div>
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
