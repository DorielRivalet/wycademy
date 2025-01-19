<script lang="ts">
	import Transcend from '$lib/client/images/icon/transcend.webp';
	import ImageDialog from './ImageDialog.svelte';
	import 'flag-icons/css/flag-icons.min.css';
	import { generateRandomUsername } from '../modules/profile/username';
	import { weaponTypeInfo } from '../modules/frontier/weapons';
	import { countries, type TCountryCode } from 'countries-list';
	import LogoDiscord from 'carbon-icons-svelte/lib/LogoDiscord.svelte';
	import Tooltip from 'carbon-components-svelte/src/Tooltip/Tooltip.svelte';
	import type { Component } from 'svelte';
	import { browser } from '$app/environment';
	import type { Emblem } from '../modules/profile/emblems';

	interface Props {
		name?: string;
		emblem?: Emblem;
		title?: string;
		discordName?: string;
		imageSource?: string;
		countryCode?: TCountryCode | 'World';
		badge1Icon?: Component | null;
		badge2Icon?: Component | null;
		badge3Icon?: Component | null;
		badge1Rank?: number;
		badge2Rank?: number;
		badge3Rank?: number;
	}

	function randomChoice(arr: any[]) {
		return arr[Math.floor(arr.length * Math.random())];
	}

	let {
		name = generateRandomUsername() + `#${Math.trunc(Math.random() * 1000)}`,
		emblem = { emblem: '🥇', type: 'text', id: 'Default' },
		title = randomChoice(weaponTypeInfo).hiden,
		discordName = 'discordname123',
		imageSource = Transcend,
		countryCode = randomChoice(Object.keys(countries)),
		badge1Icon = randomChoice(weaponTypeInfo).icon,
		badge2Icon = randomChoice(weaponTypeInfo).icon,
		badge3Icon = randomChoice(weaponTypeInfo).icon,
		badge1Rank = Math.trunc(Math.random() * 99),
		badge2Rank = Math.trunc(Math.random() * 99),
		badge3Rank = Math.trunc(Math.random() * 99),
	}: Props = $props();

	const countryName =
		countryCode === 'World' ? 'World' : countries[countryCode].name;
</script>

<div class="container">
	<div class="images">
		<div class="profile-picture">
			<ImageDialog type="file" src={imageSource} alt="Avatar" />
		</div>
		{#if browser}
			<div class="badges">
				<div class="badge-container">
					{#if badge1Icon}
						{@const SvelteComponent = badge1Icon}
						<div class="badge">
							<SvelteComponent />
						</div>
					{/if}
					{#if badge1Rank !== 0 && badge1Rank}
						<a href="/leaderboard">#{badge1Rank}</a>
					{/if}
				</div>
				<div class="badge-container">
					{#if badge2Icon}
						{@const SvelteComponent = badge2Icon}
						<div class="badge">
							<SvelteComponent />
						</div>
					{/if}
					{#if badge2Rank !== 0 && badge2Rank}
						<a href="/leaderboard">#{badge2Rank}</a>
					{/if}
				</div>
				<div class="badge-container">
					{#if badge3Icon}
						{@const SvelteComponent = badge3Icon}
						<div class="badge">
							<SvelteComponent />
						</div>
					{/if}
					{#if badge3Rank !== 0 && badge3Rank}
						<a href="/leaderboard">#{badge3Rank}</a>
					{/if}
				</div>
			</div>
		{/if}
	</div>

	<h1 class="username">
		{name}
		{#if emblem.id !== 'None'}
			{#if emblem.type === 'text'}
				<span>{emblem.emblem}</span>
			{:else if emblem.type === 'component' && typeof emblem.emblem !== 'string'}
				{@const EmblemComponent = emblem.emblem}
				<span><EmblemComponent /></span>
			{:else if emblem.type === 'image'}
				<!-- TODO: test-->
				<img alt="Emblem" src={emblem.emblem as string} height="100%" />
			{/if}
		{/if}
	</h1>
	<h2 class="title">
		{#if title && title !== 'None'}
			{title}
		{/if}
	</h2>
	<div class="country">
		<a href="/leaderboard">
			{#if countryCode !== 'World'}
				<span class="fi fi-{countryCode.toLowerCase()}"></span>
				<span>{countryName}</span>
			{/if}
		</a>
	</div>
	<div class="socials">
		{#if discordName}
			<div class="paragraph-long-02">
				<Tooltip triggerText="">
					{#snippet icon()}
						<LogoDiscord size={24} />
					{/snippet}
					{discordName}</Tooltip
				>
			</div>
		{/if}
	</div>
</div>

<style lang="scss">
	@use '@carbon/motion' as motion;
	// @use '$lib/client/styles/_border-all.scss';

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
		justify-content: start;
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
		transition: filter motion.$duration-moderate-02
			motion.motion(standard, expressive);
	}

	.profile-picture:hover {
		filter: brightness(110%);
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
