<script lang="ts">
	import ClickableTileImage from './ClickableTileImage.svelte';
	import FavoriteFilled from 'carbon-icons-svelte/lib/FavoriteFilled.svelte';
	import Favorite from 'carbon-icons-svelte/lib/Favorite.svelte';
	import { LocationIcons } from '../modules/frontier/locations';
	import { monsterInfo } from '../modules/frontier/monsters';

	interface Props {
		favoriteSets?: any;
	}

	let {
		favoriteSets = [
			{
				icon: LocationIcons.find((e) => e.name === 'Road')?.icon, // TODO?
				title: "User 2's Set #3",
				link: '/',
				totalFavorites: 0,
			},
			{
				icon: monsterInfo.find((e) => e.displayName === 'Bogabadorumu')?.icon,
				title: "User 2's Set #3",
				link: '/',
				totalFavorites: 0,
			},
			{
				icon: monsterInfo.find((e) => e.displayName === 'Howling Zinogre')
					?.icon,
				title: "User 3's Set #2",
				link: '/',
				totalFavorites: 0,
			},
			{
				icon: monsterInfo.find((e) => e.displayName === 'Duremudira')?.icon,
				title: "User 4's Set #3",
				link: '/',
				totalFavorites: 0,
			},
			{
				icon: monsterInfo.find((e) => e.displayName === 'Sparkling Zerureusu')
					?.icon,
				title: "User 5's Set #4",
				link: '/',
				totalFavorites: 0,
			},
			{
				icon: monsterInfo.find((e) => e.displayName === 'Golden Deviljho')
					?.icon,
				title: "User 6's Set #5",
				link: '/',
				totalFavorites: 0,
			},
		],
	}: Props = $props();

	const maxFavoritesToDisplay = 5;

	const displayedFavorites = Object.values(favoriteSets).slice(
		0,
		maxFavoritesToDisplay,
	);
</script>

<div class="container">
	{#each displayedFavorites as favoriteRun}
		<a class="run-container" href={favoriteRun.link}>
			<div class="icon">
				{#if typeof favoriteRun.icon === 'string'}
					<img src={favoriteRun.icon} width="64" alt="Favorite Icon" />
				{:else}
					<favoriteRun.icon {...{ size: '64px' }} />
				{/if}
			</div>
			<div class="text">
				<p class="title">
					{favoriteRun.title}
				</p>
				<div class="total-favorites-count">
					<div>
						<FavoriteFilled
							title="Favorited by {favoriteRun.totalFavorites} users"
							color="var(--ctp-red)"
						/>
					</div>
					<div>
						{favoriteRun.totalFavorites}
					</div>
				</div>
			</div>
		</a>
	{/each}
	<div class="see-more paragraph-long-02">
		<ClickableTileImage
			imageSource={Favorite}
			title="View Favorite Sets ({favoriteSets.length})"
			description="See a list of favorite armor sets for this user."
			href="/"
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

	.run-container {
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

	.run-container:hover {
		transform: scale(105%);
		filter: brightness(105%) drop-shadow(0px 0px 4px var(--ctp-blue));
	}

	.title {
		font-size: 1.25em;
	}

	.text {
		margin: auto;
	}

	.total-favorites-count {
		display: flex;
		gap: 0.5rem;
		align-items: center;
	}
</style>
