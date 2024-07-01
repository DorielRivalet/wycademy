<script lang="ts">
	import Transcend from '$lib/client/images/icon/transcend.webp';
	import ImageDialog from './ImageDialog.svelte';
	import '/node_modules/flag-icons/css/flag-icons.min.css';
	import { generateUsername } from '../modules/username-generator';
	import { WeaponTypes } from '../modules/frontier/objects';
	import { countries, type TCountryCode } from 'countries-list';
	import LogoDiscord from 'carbon-icons-svelte/lib/LogoDiscord.svelte';
	import LogoYoutube from 'carbon-icons-svelte/lib/LogoYoutube.svelte';
	import Tooltip from 'carbon-components-svelte/src/Tooltip/Tooltip.svelte';
	import OutboundLink from 'carbon-components-svelte/src/Link/OutboundLink.svelte';
	import RecordingFilledAlt from 'carbon-icons-svelte/lib/RecordingFilledAlt.svelte';
	import LogoX from 'carbon-icons-svelte/lib/LogoX.svelte';

	function randomChoice(arr: any[]) {
		return arr[Math.floor(arr.length * Math.random())];
	}

	export let name = generateUsername() + `#${Math.trunc(Math.random() * 1000)}`;
	export let medal = '🥇';
	export let title = randomChoice(WeaponTypes).hiden;
	export let discordName = 'discordname123';
	export let youtubeChannel = '@kairi_mhfz';
	export let twitterName = 'randomTwitterName123';
	export let twitchChannel = 'randomTwitchName123';
	export let imageSource = Transcend;
	export let countryCode: TCountryCode = randomChoice(Object.keys(countries));
	const countryName = countries[countryCode].name;
	export let badge1Icon = randomChoice(WeaponTypes).icon;
	export let badge2Icon = randomChoice(WeaponTypes).icon;
	export let badge3Icon = randomChoice(WeaponTypes).icon;
	export let badge1Rank = Math.trunc(Math.random() * 99);
	export let badge2Rank = Math.trunc(Math.random() * 99);
	export let badge3Rank = Math.trunc(Math.random() * 99);
	export let isYouTubeStreaming = Math.random() > 0.5 ? true : false;
</script>

<div class="container">
	<div class="images">
		<div class="profile-picture">
			<ImageDialog type="file" src={imageSource} alt="Avatar" />
		</div>
		<div class="badges">
			<div class="badge-container">
				<div class="badge">
					<svelte:component this={badge1Icon} />
				</div>
				<a href="/">#{badge1Rank}</a>
			</div>
			<div class="badge-container">
				<div class="badge">
					<svelte:component this={badge2Icon} />
				</div>
				<a href="/">#{badge2Rank}</a>
			</div>
			<div class="badge-container">
				<div class="badge">
					<svelte:component this={badge3Icon} />
				</div>
				<a href="/">#{badge3Rank}</a>
			</div>
		</div>
	</div>
	<h1 class="username">{name} {medal}</h1>
	<h2 class="title">{title}</h2>
	<div class="country">
		<a href="/">
			<span class="fi fi-{countryCode.toLowerCase()}"></span>
			<span>{countryName}</span>
		</a>
	</div>
	<div class="socials">
		<div>
			<OutboundLink href="https://x.com/{twitterName}"><LogoX /></OutboundLink>
		</div>
		<div>
			{#if isYouTubeStreaming}
				<OutboundLink href="https://youtube.com/{youtubeChannel}">
					<RecordingFilledAlt color="var(--ctp-red)" />
					<strong class="live"> LIVE </strong></OutboundLink
				>
			{:else}
				<OutboundLink href="https://youtube.com/{youtubeChannel}"
					><LogoYoutube color="var(--ctp-red)" />
				</OutboundLink>
			{/if}
		</div>
		<div>
			<OutboundLink href="https://twitch.tv/{twitchChannel}"
				><img
					alt="Twitch Status"
					src="https://img.shields.io/twitch/status/{twitchChannel}?style=flat-square&logo=twitch&cacheSeconds=86400"
				/>
			</OutboundLink>
		</div>
		<div>
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
