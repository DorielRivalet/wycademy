<script lang="ts">
	import Transcend from '$lib/client/images/icon/transcend.webp';
	import ImageDialog from './ImageDialog.svelte';
	import '/node_modules/flag-icons/css/flag-icons.min.css';
	import { generateRandomUsername } from '../modules/username-generator';
	import { weaponTypeInfo } from '../modules/frontier/weapons';
	import { countries, type TCountryCode } from 'countries-list';
	import LogoDiscord from 'carbon-icons-svelte/lib/LogoDiscord.svelte';
	import Tooltip from 'carbon-components-svelte/src/Tooltip/Tooltip.svelte';
	import OutboundLink from 'carbon-components-svelte/src/Link/OutboundLink.svelte';
	import LogoX from 'carbon-icons-svelte/lib/LogoX.svelte';
	import type { Component } from 'svelte';
	import { browser } from '$app/environment';

	interface Props {
		name?: any;
		medal?: string;
		title?: any;
		discordName?: string;
		twitterName?: string;
		imageSource?: any;
		countryCode?: TCountryCode;
		badge1Icon?: Component;
		badge2Icon?: Component;
		badge3Icon?: Component;
		badge1Rank?: any;
		badge2Rank?: any;
		badge3Rank?: any;
	}

	function randomChoice(arr: any[]) {
		return arr[Math.floor(arr.length * Math.random())];
	}

	let {
		name = generateRandomUsername() + `#${Math.trunc(Math.random() * 1000)}`,
		medal = '🥇',
		title = randomChoice(weaponTypeInfo).hiden,
		discordName = 'discordname123',
		twitterName = 'randomTwitterName123',
		imageSource = Transcend,
		countryCode = randomChoice(Object.keys(countries)),
		badge1Icon = randomChoice(weaponTypeInfo).icon,
		badge2Icon = randomChoice(weaponTypeInfo).icon,
		badge3Icon = randomChoice(weaponTypeInfo).icon,
		badge1Rank = Math.trunc(Math.random() * 99),
		badge2Rank = Math.trunc(Math.random() * 99),
		badge3Rank = Math.trunc(Math.random() * 99),
	}: Props = $props();

	const countryName = countries[countryCode].name;
</script>

<div class="container">
	<div class="images">
		<div class="profile-picture">
			<ImageDialog type="file" src={imageSource} alt="Avatar" />
		</div>
		{#if browser}
			<div class="badges">
				<div class="badge-container">
					<div class="badge">
						{#if badge1Icon}
							{@const SvelteComponent = badge1Icon}
							<SvelteComponent />
						{/if}
					</div>
					<a href="/leaderboard">#{badge1Rank}</a>
				</div>
				<div class="badge-container">
					<div class="badge">
						{#if badge2Icon}
							{@const SvelteComponent = badge2Icon}
							<SvelteComponent />
						{/if}
					</div>
					<a href="/leaderboard">#{badge2Rank}</a>
				</div>
				<div class="badge-container">
					<div class="badge">
						{#if badge3Icon}
							{@const SvelteComponent = badge3Icon}
							<SvelteComponent />
						{/if}
					</div>
					<a href="/leaderboard">#{badge3Rank}</a>
				</div>
			</div>
		{/if}
	</div>

	<h1 class="username">{name} {medal}</h1>
	<h2 class="title">{title}</h2>
	<div class="country">
		<a href="/leaderboard">
			<span class="fi fi-{countryCode.toLowerCase()}"></span>
			<span>{countryName}</span>
		</a>
	</div>
	<div class="socials">
		<div class="paragraph-long-02">
			<OutboundLink href="https://x.com/{twitterName}"><LogoX /></OutboundLink>
		</div>
		<div class="paragraph-long-02">
			<Tooltip triggerText="" icon={LogoDiscord}>{discordName}</Tooltip>
		</div>
	</div>
</div>

<style lang="scss">
	@media (min-width: 320px) {
		.container {
			display: grid;
			grid-template-areas:
				'username'
				'images'
				'title'
				'country'
				'socials';
			grid-template-columns: auto;
			column-gap: 0rem;
			row-gap: 1rem;
		}
	}

	@media (min-width: 672px) {
		.container {
			display: grid;
			grid-template-areas:
				'images username'
				'images title'
				'images country'
				'images socials';
			grid-template-columns: 1fr 7fr;
			column-gap: 1rem;
			row-gap: 0rem;
		}
	}

	.title {
		grid-area: title;
	}

	.username {
		grid-area: username;
	}

	.badge-container {
		display: flex;
		flex-direction: column;
		gap: 0.5rem;
	}

	.images {
		grid-area: images;
		display: flex;
		gap: 0.5rem;
		flex-direction: column;
	}

	.country {
		grid-area: country;
		display: flex;
		align-items: end;
		a {
			display: flex;
			gap: 0.5rem;
		}
	}

	.socials {
		display: flex;
		gap: 1rem;
		grid-area: socials;
		align-items: center;
		flex-wrap: wrap;
	}

	.badges {
		display: flex;
		width: 100%;
		gap: 1rem;
		justify-content: center;
	}

	.profile-picture {
		border-radius: 50%;
		border: 1px solid var(--ctp-surface0);
		overflow: hidden;
		aspect-ratio: 1/1;
		max-width: 192px;
		margin: auto;
	}

	.badge {
		background-color: var(--ctp-surface0);
		border: 1px solid var(--ctp-overlay0);
		border-radius: 50%;
		padding: 0.125rem;
		max-width: 32px;
	}

	.live {
		font-variant: small-caps;
	}

	a {
		all: unset;
	}

	a:hover {
		text-decoration: underline;
		color: var(--ctp-sky);
	}
</style>
