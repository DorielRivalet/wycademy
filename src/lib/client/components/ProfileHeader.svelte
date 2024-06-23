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
	import CircleFilled from 'carbon-icons-svelte/lib/CircleFilled.svelte';

	function randomChoice(arr: any[]) {
		return arr[Math.floor(arr.length * Math.random())];
	}

	export let name = generateUsername();
	export let medal = '🥇';
	export let title = randomChoice(WeaponTypes).hiden;
	export let discordName = 'discordname123';
	export let youtubeChannel = '@kairi_mhfz';
	export let imageSource = Transcend;
	export let countryCode: TCountryCode = randomChoice(Object.keys(countries));
	const countryName = countries[countryCode].name;
	export let badgeIcon = randomChoice(WeaponTypes).icon;
	export let isStreaming = Math.random() > 0.5 ? true : false;
</script>

<div class="container">
	<div class="left">
		<div class="images">
			<div class="profile-picture">
				<ImageDialog type="file" src={imageSource} alt="Avatar" />
			</div>
			<div class="badge">
				<svelte:component this={badgeIcon} />
			</div>
		</div>
	</div>
	<div class="right">
		<div class="text">
			<h1>{name} {medal}</h1>
			<h2>{title}</h2>
			<div class="bottom-info">
				<div class="country">
					<span class="fi fi-{countryCode.toLowerCase()}"></span>{countryName}
				</div>
				<div class="socials">
					<div>
						<Tooltip triggerText="" icon={LogoDiscord}>{discordName}</Tooltip>
					</div>
					<div>
						{#if isStreaming}
							<OutboundLink href="https://youtube.com/{youtubeChannel}">
								<CircleFilled color="var(--ctp-red)" />
								<strong class="live"> LIVE </strong></OutboundLink
							>
						{:else}
							<OutboundLink href="https://youtube.com/{youtubeChannel}"
								><LogoYoutube color="var(--ctp-red)" />
							</OutboundLink>
						{/if}
					</div>
				</div>
			</div>
		</div>
	</div>
</div>

<style lang="scss">
	@media (min-width: 320px) {
		.container {
			display: grid;
			grid-template-columns: 1fr 7fr;
			gap: 1rem;
		}
	}

	.left {
		display: flex;
		flex-direction: column;
		gap: 1rem;
	}

	.text {
		display: flex;
		flex-direction: column;
		gap: 0.5rem;
	}

	.images {
		position: relative;
		display: inline-block;
	}

	.profile-picture {
		width: 128px; // Adjust as needed
		height: 128px; // Adjust as needed
		border-radius: 50%;
		border: 1px solid var(--ctp-surface0);
		overflow: hidden;
		position: relative;
	}

	.badge {
		position: absolute;
		bottom: 0;
		right: 0;
		transform: translate(40%, 40%) scale(25%);
		background-color: var(--ctp-surface0);
		border: 1px solid var(--ctp-overlay0);
		border-radius: 50%;
		padding: 0.25rem;
	}

	.country {
		display: flex;
		gap: 0.5rem;
	}

	.socials {
		display: flex;
		gap: 1rem;
		align-items: start;
	}

	h2 {
		margin-bottom: 0.5rem;
	}

	.bottom-info {
		display: flex;
		gap: 0.5rem;
		align-items: start;
	}

	.live {
		font-variant: small-caps;
	}
</style>
