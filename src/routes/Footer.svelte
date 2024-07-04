<!--
  ~ © 2023 Doriel Rivalet
  ~ Use of this source code is governed by a MIT license that can be
  ~ found in the LICENSE file.
-->

<script lang="ts">
	import Link from 'carbon-components-svelte/src/Link/Link.svelte';
	import LogoGitHub from 'carbon-icons-svelte/lib/LogoGithub.svelte';
	import type { GitHubData } from '$lib/types';
	import * as constant from '$lib/constants';
	import OutboundLink from 'carbon-components-svelte/src/Link/OutboundLink.svelte';
	import VercelLogo from '$lib/client/images/vercel-logotype-dark.svg';
	import VercelLogoLight from '$lib/client/images/vercel-logotype-light.svg';
	import SvelteLogo from '$lib/client/images/svelte-logo.svg';
	import Raviente from '$lib/client/images/icon/berserk_raviente_raid.webp';
	import authorImage from '$lib/client/images/author.webp';
	import { theme } from '$lib/client/stores/theme';
	import Banner from '$lib/client/components/Banner.svelte';

	export let gitHubData: GitHubData = {
		lastModified: '',
		commitLink: '',
		timesChanged: 0,
	};
	let { lastModified, commitLink, timesChanged } = gitHubData;
</script>

<footer>
	<div class="footer-main-content-container">
		<div class="banner">
			<Banner />
			<div class="banner-text">
				<p>A compendium of resources for MHF-Z by</p>
				<span class="icon-info-container">
					<img
						class="rounded-image"
						src={authorImage}
						width="32"
						alt="Author"
					/>
					<Link href={constant.authorUrl}>{constant.authorName}.</Link>
				</span>
			</div>
			<div class="icon-info-container">
				<Link aria-label="GitHub repository" href={constant.projectGitHub}>
					<LogoGitHub size={32} color="var(--ctp-text)" />
				</Link>
				<div class="subtle">v{constant.appVersion}</div>
			</div>
			<div class="subtle github-info-container">
				{#if lastModified !== ''}
					<em>Page last modified:</em>
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
		</div>

		<div class="footer-sections">
			<div class="footer-sections-group">
				<section class="section-container">
					<h5>Frontier</h5>
					<Link href="/leaderboard">Leaderboards</Link>
					<Link href="/hunter-notes">Guides and Tutorials</Link>
					<Link href="/tools">Tools and Utilities</Link>
				</section>

				<section class="section-container">
					<h5>Support</h5>
					<Link href="/">About Us</Link>
					<Link href="/">Donate</Link>
					<Link href="/">Contribute</Link>
					<Link href="/">Terms of Service</Link>
					<Link href="/">Privacy Policy</Link>
					<Link href="/about-development-stages">Development</Link>
					<Link href="/">FAQ</Link>
					<Link href="/">Contact</Link>
				</section>
			</div>

			<div class="footer-sections-group">
				<section class="section-container">
					<h5>Guides and Tutorials</h5>
					<Link href="/hunter-notes/getting-started">Getting Started</Link>
					<Link href="/hunter-notes/weapons">Weapons</Link>
					<Link href="/hunter-notes/armor">Armor</Link>
					<Link href="/hunter-notes/monsters">Monsters</Link>
					<Link href="/hunter-notes/locations">Locations</Link>
					<Link href="/hunter-notes/items">Items</Link>
					<Link href="/hunter-notes/events">Events</Link>
					<Link href="/hunter-notes/advanced">Advanced</Link>
				</section>
				<section class="section-container">
					<h5>Tools and Utilities</h5>
					<Link href="/tools/calculator">Calculators</Link>
					<Link href="/tools/simulator">Simulators</Link>
					<Link href="/tools/generator">Generators</Link>
					<Link href="/tools/external">External</Link>
				</section>
			</div>
		</div>
	</div>

	<div class="footer-bottom">
		<div class="icon-info-container">
			<img class="rounded-image" src={authorImage} width="32" alt="Author" />
			<Link href={constant.authorUrl}
				>{constant.authorName} &copy {new Date().getUTCFullYear()}</Link
			>
		</div>
		<div class="icon-info-container">
			<p>Site powered by</p>
			<span class="logo-container">
				<OutboundLink href="https://vercel.com/">
					{#if $theme === 'g10'}
						<img width="96" src={VercelLogo} alt="Vercel Logo" />
					{:else}
						<img width="96" src={VercelLogoLight} alt="Vercel Logo" />
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
</footer>

<style lang="scss">
	.icon-info-container {
		display: flex;
		flex-wrap: wrap;
		gap: 0.25rem;
		align-items: center;
	}

	.footer-sections-group {
		flex-wrap: wrap;
		display: flex;
		flex-direction: column;
		gap: 1rem;
	}

	.banner-text {
		display: flex;
		flex-wrap: wrap;
		gap: 0.5rem;
	}

	.rounded-image {
		border-radius: 50%;
	}

	footer {
		padding-top: 4rem;
		background-color: var(--ctp-crust);
		display: flex;
		flex-direction: column;
		justify-content: space-between;
		flex-wrap: wrap;
		align-items: start;
		gap: 2rem;
	}

	.footer-main-content-container {
		display: flex;
		flex-wrap: wrap;
		flex-direction: row;
		align-items: start;
		gap: 2rem;
	}

	.footer-sections {
		display: flex;
		flex-wrap: wrap;
		align-items: start;
		flex-direction: row;
		gap: 1rem;
	}

	.github-info-container {
		display: flex;
		flex-direction: column;
		gap: 0.5rem;
	}

	.section-container {
		display: flex;
		flex-direction: column;
		justify-content: center;
		padding-left: var(--cds-spacing-08);
		padding-right: var(--cds-spacing-08);
		gap: 0.25rem;
	}

	.footer-bottom {
		width: 100%;
		align-items: center;
		gap: 1rem;
		display: flex;
		flex-direction: column;
		padding-left: var(--cds-spacing-04);
		padding-right: var(--cds-spacing-04);
		padding-top: 2rem;
		padding-bottom: 2rem;
		background-color: var(--ctp-surface0);
		border-top: 1px solid var(--ctp-surface1);
	}

	.banner {
		padding-left: var(--cds-spacing-08);
		padding-right: var(--cds-spacing-08);
		display: flex;
		flex-direction: column;
		align-items: start;
		gap: 0.5rem;
	}
</style>
