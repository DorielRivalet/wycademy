<!--
  ~ © 2024 Doriel Rivalet
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
	import Banner from '$lib/client/components/Banner.svelte';
	import type { CarbonTheme } from 'carbon-components-svelte/src/Theme/Theme.svelte';
	import { getContext } from 'svelte';
	import type { Writable } from 'svelte/store';

	const carbonThemeStore = getContext(
		Symbol.for('carbonTheme'),
	) as Writable<CarbonTheme>;
	interface Props {
		gitHubData?: GitHubData;
	}

	let {
		gitHubData = {
			lastModified: '',
			commitLink: '',
			timesChanged: 0,
		},
	}: Props = $props();
	let { lastModified, commitLink, timesChanged } = gitHubData;
</script>

<footer>
	<div class="footer-main-content-container">
		<div class="banner">
			<Banner theme={$carbonThemeStore} />
			<div class="banner-text">
				<p>The Frontier Z Platform</p>
			</div>
			<div class="icon-info-container">
				<OutboundLink
					aria-label="GitHub repository"
					href={constant.projectGitHub}
				>
					<LogoGitHub size={32} color="var(--ctp-text)" />
				</OutboundLink>
				<p class="subtle">v{constant.appVersion}</p>
			</div>
			<div class="subtle github-info-container">
				{#if lastModified !== ''}
					<p><em>Page last modified:</em></p>
					<OutboundLink href={commitLink}>{lastModified}</OutboundLink>
					<p>
						Times changed: <span>{timesChanged}</span>
					</p>
				{:else}
					<div>Want to play as Raviente?</div>
					<div class="icon-info-container">
						<img src={Raviente} width="32" alt="Raviente" />
						<Link href="/offline">Try this game!</Link>
					</div>
				{/if}
			</div>
		</div>
		<section class="section-container">
			<h5>Frontier</h5>
			<Link href="/leaderboard">Leaderboards</Link>
			<Link href="/hunter-notes">Guides and Tutorials</Link>
			<Link href="/tools">Tools and Utilities</Link>
		</section>
		<section class="section-container">
			<h5>Support</h5>
			<Link href="/support/website/announcements">Announcements</Link>
			<Link href="/support/website/about">About Us</Link>
			<Link href="/support/website/donate">Donate</Link>
			<Link href="/support/website/faq">FAQ</Link>
			<Link href="/support/website/feedback">Feedback</Link>
			<Link href="/support/website/contribute">Contribute</Link>
			<Link href="/support/website/development">Development</Link>
			<Link href="/support/website/contact">Contact</Link>
			<Link href="/support/policies/terms-of-service">Terms of Service</Link>
			<Link href="/support/policies/privacy-policy">Privacy Policy</Link>
			<Link href="/support/policies/copyright">Copyright</Link>
			<Link href="/support/policies/acknowledgements">Acknowledgements</Link>
			<Link href="/support/policies/licenses">Licenses</Link>
			<Link href="/support/policies/security">Security</Link>
			<Link href="/support/policies/community-standards"
				>Community Standards</Link
			>
		</section>
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
			<Link href="/tools/search">Search</Link>
		</section>
	</div>

	<div class="footer-bottom">
		<div class="icon-info-container">
			<OutboundLink href={constant.authorUrl}
				>{constant.authorName} &copy {new Date().getUTCFullYear()}</OutboundLink
			>
		</div>
		<div class="icon-info-container">
			<p>Site powered by</p>
			<span class="logo-container">
				<OutboundLink href="https://vercel.com/">
					{#if $carbonThemeStore === 'g10'}
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
	//@use '$lib/client/styles/_border-all.scss';

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

	.icon-info-container {
		display: flex;
		flex-wrap: wrap;
		gap: 0.25rem;
		align-items: center;
	}

	.banner-text {
		display: flex;
		flex-wrap: wrap;
		gap: 0.5rem;
	}

	.rounded-image {
		border-radius: 50%;
	}

	.github-info-container {
		display: flex;
		flex-direction: column;
		gap: 0.5rem;
	}

	@media (min-width: 320px) {
		.footer-main-content-container {
			display: grid;
			width: 90%;
			margin-left: auto;
			margin-right: auto;
			justify-items: start;
			grid-row-gap: 24px;
			grid-column-gap: 40px;
			grid-template-rows: auto;
			grid-template-columns: 1fr 1fr;
		}

		.section-container {
			display: flex;
			flex-direction: column;
			gap: 0.25rem;
			grid-area: span 1 / span 1 / span 1 / span 1;
		}

		.banner {
			display: flex;
			flex-direction: column;
			align-items: start;
			gap: 0.5rem;
			grid-area: span 1 / span 2 / span 1 / span 2;
		}
	}

	@media (min-width: 672px) {
		.footer-main-content-container {
			grid-template-columns: 1fr 1fr 1fr 1fr 1fr 1fr 1fr 1fr;
			grid-row-gap: 64px;
			grid-column-gap: 20px;
		}

		.section-container {
			display: flex;
			flex-direction: column;
			gap: 0.25rem;
			grid-area: span 1 / span 2 / span 1 / span 2;
		}

		.banner {
			display: flex;
			flex-direction: column;
			align-items: start;
			gap: 0.5rem;
			grid-area: span 2 / span 4 / span 2 / span 4;
		}
	}

	@media (min-width: 1056px) {
		.footer-main-content-container {
			grid-template-columns: 1fr 1fr 1fr 1fr 1fr 1fr 1fr 1fr 1fr 1fr 1fr 1fr;
			grid-row-gap: 20px;
			grid-column-gap: 20px;
			align-items: start;
		}

		.section-container {
			display: flex;
			flex-direction: column;
			gap: 0.25rem;
			grid-area: span 1 / span 2 / span 1 / span 2;
		}

		.banner {
			display: flex;
			flex-direction: column;
			align-items: start;
			gap: 0.5rem;
			grid-area: span 1 / span 4 / span 1 / span 4;
		}
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
</style>
