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
	import VercelLogo from '$lib/client/images/vercel-logotype-dark.svg';
	import VercelLogoLight from '$lib/client/images/vercel-logotype-light.svg';
	import SvelteLogo from '$lib/client/images/svelte-logo.svg';
	import Raviente from '$lib/client/images/icon/berserk_raviente_raid.webp';
	import authorImage from '$lib/client/images/author.webp';
	import { theme } from '$lib/client/stores/theme';

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
			<div class="icon-info-container">
				<img src={Raviente} width="32" alt="Raviente" />
				<Link href="/offline">Try this game!</Link>
			</div>
		{/if}
	</div>

	<div class="item-container">
		<div class="icon-info-container">
			<img class="rounded-image" src={authorImage} width="32" alt="Author" />
			<Link href={constant.authorUrl}
				>{constant.authorName} &copy {new Date().getUTCFullYear()}</Link
			>
		</div>
		<div class="icon-info-container">
			<p>Powered by</p>
			<span class="logo-container">
				<OutboundLink href="https://vercel.com/">
					{#if $theme === 'g10'}
						<img width="96" src={VercelLogoLight} alt="Vercel Logo" />
					{:else}
						<img width="96" src={VercelLogo} alt="Vercel Logo" />
					{/if}
				</OutboundLink>
			</span>
			<p>and</p>
			<img width="32" src={SvelteLogo} alt="Svelte Logo" />
			<span class="logo-container">
				<OutboundLink href="https://kit.svelte.dev/docs/introduction">
					SvelteKit</OutboundLink
				>
			</span>
		</div>
		<OutboundLink
			href="https://github.com/DorielRivalet/wycademy/blob/main/LICENSE.md"
		>
			Code licensed {constant.license}</OutboundLink
		>
	</div>

	<div class="item-container">
		<Link aria-label="GitHub repository" href={constant.projectGitHub}>
			<LogoGithub size={32} />
		</Link>
		<div class="subtle">v{constant.appVersion}</div>
	</div>
</footer>

<style lang="scss">
	.icon-info-container {
		display: flex;
		flex-wrap: wrap;
		gap: 0.25rem;
		align-items: center;
	}

	.rounded-image {
		border-radius: 50%;
	}

	@media (min-width: 320px) {
		footer {
			padding: var(--cds-spacing-02);
			background-color: var(--ctp-crust);
			display: flex;
			justify-content: space-between;
			flex-wrap: wrap;
			align-items: center;
			flex-direction: column;
			gap: 2rem;
			padding-top: 2rem;
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
			flex-wrap: wrap;
			display: flex;
			justify-content: space-between;
			flex-direction: row;
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
