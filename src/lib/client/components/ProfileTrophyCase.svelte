<script lang="ts">
	import Trophy from 'carbon-pictograms-svelte/lib/Trophy.svelte';
	import type { WycademyTrophy } from '../modules/frontier/types';
	import TrophyWhite from './frontier/icon/TrophyWhite.svelte';
	import ClickableTileImage from './ClickableTileImage.svelte';

	export let trophies: WycademyTrophy[] = [
		{
			title: 'Golden Nargacuga Statue',
			date: '2024/12/21',
			serial: 1,
			icon: TrophyWhite,
			link: '/',
		},
		{
			title: 'Golden Nargacuga Statue',
			date: '2024/12/23',
			serial: 12,
			icon: TrophyWhite,
			link: '/',
		},
		{
			title: 'Golden Nargacuga Statue',
			date: '2024/12/22',
			serial: 13,
			icon: TrophyWhite,
			link: '/',
		},
		{
			title: 'Silver Nargacuga Statue',
			date: '2024/12/21',
			serial: 51,
			icon: TrophyWhite,
			link: '/',
		},
		{
			title: 'Dual Swords Champion',
			date: '2024/12/21',
			serial: 11,
			icon: TrophyWhite,
			link: '/',
		},
		{
			title: 'Bronze Nargacuga Statue',
			date: '2024/12/21',
			serial: 61,
			icon: TrophyWhite,
			link: '/',
		},
		{
			title: 'Platinum Nargacuga Statue',
			date: '2024/12/21',
			serial: 122,
			icon: TrophyWhite,
			link: '/',
		},
	];

	const maxTrophiesToDisplay = 5;

	// Aggregate trophies by title
	const aggregatedTrophies = trophies.reduce((acc, trophy) => {
		if (acc[trophy.title]) {
			acc[trophy.title].count++;
			// Update the date if the new date is more recent
			if (new Date(trophy.date) > new Date(acc[trophy.title].date)) {
				acc[trophy.title].date = trophy.date;
			}
			// Update the serial number if the new serial is lower
			if (trophy.serial < acc[trophy.title].serial) {
				acc[trophy.title].serial = trophy.serial;
			}
		} else {
			acc[trophy.title] = { ...trophy, count: 1 };
		}
		return acc;
	}, {});

	// Convert the aggregated trophies object back to an array and slice it to the max trophies to display
	const displayedTrophies = Object.values(aggregatedTrophies).slice(
		0,
		maxTrophiesToDisplay,
	);
</script>

<div class="container">
	{#each displayedTrophies as trophy}
		<a class="trophy-container" href={trophy.link}>
			<div class="icon">
				{#if typeof trophy.icon === 'string'}
					<img src={trophy.icon} alt="Trophy Icon" />
				{:else}
					<svelte:component this={trophy.icon} />
				{/if}
			</div>
			<div class="text">
				<p class="title">
					{trophy.title}
					{trophy.count > 1 ? `(${trophy.count}x)` : ''} #{trophy.serial}
				</p>
				<p class="date">Most recent: {trophy.date}</p>
			</div>
		</a>
	{/each}
	<div>
		<ClickableTileImage
			imageSource={Trophy}
			title="Explore Trophies ({trophies.length})"
			href="/"
			description="See the list of trophies for this user."
			rounded={true}
		/>
	</div>
</div>

<style lang="scss">
	@use '@carbon/motion' as motion;

	a {
		all: unset;
	}

	.container {
		display: grid;
		grid-template-columns: repeat(auto-fit, minmax(256px, 1fr));
		gap: 1rem;
		background-color: var(--ctp-mantle);
		padding: 1rem;
		border-radius: 8px;
	}

	.icon {
		max-width: 64px;
		margin: auto;
		padding: 0;
	}

	.trophy-container {
		display: grid;
		grid-template-columns: auto 1fr;
		gap: 0.5rem;
		background-color: var(--ctp-surface0);
		padding: 1rem;
		border-radius: 0.5rem;
		box-shadow: 0 2px 5px rgba(0, 0, 0, 0.1);
		transition:
			filter motion.$duration-fast-02 motion.motion(standard, expressive),
			transform motion.$duration-fast-02 motion.motion(standard, expressive);
	}

	.trophy-container:hover {
		transform: scale(105%);
		filter: brightness(105%) drop-shadow(0px 0px 4px var(--ctp-blue));
	}

	.title {
		font-size: 1.25em;
	}

	.date {
		color: var(--ctp-subtext0);
	}

	.text {
		margin: auto;
	}
</style>
