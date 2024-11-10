<!-- MarqueeExample.svelte -->
<script lang="ts">
	import { guidesInfo, toolsInfo } from '$lib/client/modules/routes';
	import Transcend from '$lib/client/images/icon/transcend.webp';

	//https://animation-svelte.vercel.app/magic/marquee
	import Marquee from '$lib/client/components/Marquee.svelte';
	import HomeHeroSectionPageCard from './HomeHeroSectionPageCard.svelte';
	import type { NavigationItem } from '$lib/client/modules/routes';

	const allGuides = guidesInfo.flatMap((e) => e.pages);
	const allTools = toolsInfo.flatMap((e) => e.pages);
	const allWorldRecords: NavigationItem[] = [
		{
			name: 'New World Record!',
			description:
				'Hunter1 | Destructive White Winds | 03:45.21 | LS | FDS | 2024-10-01',
			link: '/leaderboard',
			image: Transcend,
		},
		{
			name: 'New World Record!',
			description:
				'Hunter2 | Destructive White Winds | 03:45.21 | LS | FDS | 2024-10-01',
			link: '/leaderboard',
			image: Transcend,
		},
		{
			name: 'New World Record!',
			description:
				'Hunter3 | Destructive White Winds | 03:45.21 | LS | FDS | 2024-10-01',
			link: '/leaderboard',
			image: Transcend,
		},
		{
			name: 'New World Record!',
			description:
				'Hunter4 | Destructive White Winds | 03:45.21 | LS | FDS | 2024-10-01',
			link: '/leaderboard',
			image: Transcend,
		},
		{
			name: 'New World Record!',
			description:
				'Hunter5 | Destructive White Winds | 03:45.21 | LS | FDS | 2024-10-01',
			link: '/leaderboard',
			image: Transcend,
		},
		{
			name: 'New World Record!',
			description:
				'Hunter6 | Destructive White Winds | 03:45.21 | SAF | FDS | 2024-10-01',
			link: '/leaderboard',
			image: Transcend,
		},
		{
			name: 'New World Record!',
			description:
				'Hunter7 | Destructive White Winds | 03:45.21 | Hammer | FDS | 2024-10-01',
			link: '/leaderboard',
			image: Transcend,
		},
		{
			name: 'New World Record!',
			description:
				'Hunter8 | Destructive White Winds | 03:45.21 | Tonfa | FDS | 2024-10-01',
			link: '/leaderboard',
			image: Transcend,
		},
		{
			name: 'New World Record!',
			description:
				'Hunter9 | Destructive White Winds | 03:45.21 | Lance | FDP | 2024-10-01',
			link: '/leaderboard',
			image: Transcend,
		},
		{
			name: 'New World Record!',
			description:
				'Hunter10 | Destructive White Winds | 03:45.21 | GL | TA | 2024-10-01',
			link: '/leaderboard',
			image: Transcend,
		},
		{
			name: 'New World Record!',
			description:
				'Hunter11 | Destructive White Winds | 03:45.21 | HH | FCA | 2024-10-01',
			link: '/leaderboard',
			image: Transcend,
		},
		{
			name: 'New World Record!',
			description:
				'Hunter12 | Destructive White Winds | 03:45.21 | DS | FDS | 2024-10-01',
			link: '/leaderboard',
			image: Transcend,
		},
		{
			name: 'New World Record!',
			description:
				'Hunter13 | Destructive White Winds | 03:45.21 | GS | TA | 2024-10-01',
			link: '/leaderboard',
			image: Transcend,
		},
		{
			name: 'New World Record!',
			description:
				'Hunter14 | Destructive White Winds | 03:45.21 | MS | TA | 2024-10-01',
			link: '/leaderboard',
			image: Transcend,
		},
	];

	const allHunterActivity: NavigationItem[] = [
		{
			name: 'New Runs Submitted!',
			description:
				'Hunter1 submitted: A Destructive Performance | 04:56:43 | Hammer | FDS | 2023-12-24',
			link: '/signup',
			image: Transcend,
		},
		{
			name: 'New Runs Submitted!',
			description:
				'Hunter2 submitted: A Destructive Performance | 04:56:43 | Hunting Horn | FDS | 2023-12-24',
			link: '/signup',
			image: Transcend,
		},
		{
			name: 'New Runs Submitted!',
			description:
				'Hunter3 submitted: A Destructive Performance | 04:56:43 | Lance | FDS | 2023-12-24',
			link: '/signup',
			image: Transcend,
		},
		{
			name: 'New Runs Submitted!',
			description:
				'Hunter4 submitted: A Destructive Performance | 09:56:43 | Heavy Bowgun | FDS | 2023-12-25',
			link: '/signup',
			image: Transcend,
		},
	];

	// TODO: hunters and hunts

	/* Randomize array in-place using Durstenfeld shuffle algorithm */
	function shuffleArray(array: Array<any>) {
		let result = array;
		for (var i = result.length - 1; i >= 0; i--) {
			var j = Math.floor(Math.random() * (i + 1));
			var temp = result[i];
			result[i] = result[j];
			result[j] = temp;
		}
		return result;
	}

	const pages = shuffleArray([
		...allGuides,
		...allTools,
		...allWorldRecords,
		...allHunterActivity,
	]);

	let firstRow = pages.slice(0, pages.length / 2);
	let secondRow = pages.slice(pages.length / 2);

	const scrollSpeed = 0.33;
</script>

<div class="marquee-container">
	<Marquee pauseOnHover style="--duration: {pages.length / scrollSpeed}s">
		{#each firstRow as item}
			<HomeHeroSectionPageCard {...item} />
		{/each}
	</Marquee>

	<Marquee
		reverse
		pauseOnHover
		style="--duration: {pages.length / scrollSpeed}s"
	>
		{#each secondRow as item}
			<HomeHeroSectionPageCard {...item} />
		{/each}
	</Marquee>

	<div class="gradient-overlay gradient-overlay--left"></div>
	<div class="gradient-overlay gradient-overlay--right"></div>
</div>

<style lang="scss">
	.marquee-container {
		position: relative;
		display: flex;
		height: 100%;
		width: 100%;
		flex-direction: column;
		align-items: center;
		justify-content: center;
		overflow: hidden;
		border-radius: 0.5rem;
		background-color: transparent;
		padding: 1rem 0;

		@media (min-width: 672px) {
			box-shadow:
				0 20px 25px -5px rgb(0 0 0 / 0.1),
				0 8px 10px -6px rgb(0 0 0 / 0.1);
		}
	}

	.gradient-overlay {
		pointer-events: none;
		position: absolute;
		top: 0;
		bottom: 0;
		width: 33.333%;

		&--left {
			left: 0;
			background: linear-gradient(to right, var(--ctp-base), transparent);
		}

		&--right {
			right: 0;
			background: linear-gradient(to left, var(--ctp-base), transparent);
		}
	}
</style>
