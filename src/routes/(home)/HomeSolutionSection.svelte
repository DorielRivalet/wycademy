<script lang="ts">
	import img1 from '$lib/client/images/supplemental/homepage-solution1-light.webp';
	import img2 from '$lib/client/images/supplemental/homepage-solution2-light.webp';
	import img3 from '$lib/client/images/supplemental/homepage-solution3-light.webp';
	import img4 from '$lib/client/images/supplemental/homepage-solution4-light.webp';
	import img1Dark from '$lib/client/images/supplemental/homepage-solution1-dark.webp';
	import img2Dark from '$lib/client/images/supplemental/homepage-solution2-dark.webp';
	import img3Dark from '$lib/client/images/supplemental/homepage-solution3-dark.webp';
	import img4Dark from '$lib/client/images/supplemental/homepage-solution4-dark.webp';
	import EmoteFriend from '$lib/client/images/icon/emote/friend.webp';
	import SectionHeadingCentered from '$lib/client/components/SectionHeadingCentered.svelte';
	import InlineTooltip from '$lib/client/components/frontier/InlineTooltip.svelte';
	import { getGameIcon } from '$lib/client/modules/frontier/objects';
	import CheckmarkOutline from 'carbon-icons-svelte/lib/CheckmarkOutline.svelte';
	import Link from 'carbon-components-svelte/src/Link/Link.svelte';
	import OutboundLink from 'carbon-components-svelte/src/Link/OutboundLink.svelte';
	import SkeletonPlaceholder from 'carbon-components-svelte/src/SkeletonPlaceholder/SkeletonPlaceholder.svelte';
	import HomeSolutionSectionSolution from './HomeSolutionSectionSolution.svelte';
	import type { CarbonTheme } from 'carbon-components-svelte/src/Theme/Theme.svelte';
	import { getContext } from 'svelte';
	import type { Writable } from 'svelte/store';
	import { browser } from '$app/environment';
	import { fly } from 'svelte/transition';
	import IntersectionObserver from 'svelte-intersection-observer';

	const carbonThemeStore = getContext(
		Symbol.for('carbonTheme'),
	) as Writable<CarbonTheme>;

	let solutions: {
		imageSourceLight: string;
		imageSourceDark: string;
		title: string;
		description: string;
		href: string;
		area: string;
	}[] = $state([
		{
			imageSourceLight: img1,
			imageSourceDark: img1Dark,
			area: 'area1',
			href: '/hunter-notes',
			title: 'Comprehensive Guides',
			description:
				'Our platform utilizes modern web technologies to provide accurate and up-to-date information for the current state of the game.',
		},
		{
			imageSourceLight: img2,
			imageSourceDark: img2Dark,
			area: 'area2',
			title: 'Accessible Data Visualization',
			href: '/tools/calculator/sigil',
			description:
				'We prioritize an accessible experience for viewing all types of information: monsters, gear, speedruns, and much more.',
		},
		{
			imageSourceLight: img3,
			imageSourceDark: img3Dark,
			area: 'area3',
			title: 'A Seamless Experience',
			href: '/tools/simulator/partner-skills',
			description:
				'Easily change your settings such as the color palette of the website or the language. We strive for readability and a good workflow when using our tools.',
		},
		{
			imageSourceLight: img4,
			imageSourceDark: img4Dark,
			area: 'area4',
			title: 'Customizable Profiles',
			href: '/signup',
			description:
				'We offer our users the ability to create accounts in order to submit their quests into leaderboards. Tailor your profile to your specific needs with flexible customization options, allowing you to get the most out of our platform.',
		},
	]);

	let solutionsElements: HTMLDivElement[] | undefined[] = $state(
		new Array(solutions.length),
	);
</script>

<section class="container">
	<SectionHeadingCentered
		title="A Platform Built by Hunters, for Hunters"
		section="Solution"
		level={2}
		icon={CheckmarkOutline}
	/>
	<div class="summary">
		<img src={EmoteFriend} alt="Friend Emote" />
		<div class="description paragraph-long-02">
			Our platform is more than a website—it's a community-driven, <OutboundLink
				href="https://github.com/Open-Frontiers/wycademy"
				>open-source project</OutboundLink
			> created to be the definitive knowledge base for <InlineTooltip
				icon={getGameIcon('Monster Hunter Frontier Z')}
				text="Monster Hunter Frontier Z"
				tooltip="Game"
				iconType="file"
			/> (MHF-Z). From <Link inline href="/hunter-notes"
				>guides and tutorials</Link
			>
			to <Link inline href="/leaderboard">speedrun leaderboards</Link> and <Link
				inline
				href="/tools">tools</Link
			>, we’re here to enrich your experience, both
			<strong>online and offline</strong>.
		</div>
	</div>
	<div class="solutions">
		{#each solutions as solution, i}
			<div class={solution.area}>
				{#if browser}
					<IntersectionObserver
						once
						element={solutionsElements[i]}
						threshold={0.999}
						let:intersecting
					>
						<div
							bind:this={solutionsElements[i]}
							style="width: 100%; min-height: 12rem;"
						>
							{#if intersecting}
								<div in:fly={{ y: 100, duration: 250 }}>
									<HomeSolutionSectionSolution
										title={solution.title}
										description={solution.description}
										imageSource={$carbonThemeStore === 'g10'
											? solution.imageSourceLight
											: solution.imageSourceDark}
										href={solution.href}
									/>
								</div>
							{:else}
								<div></div>
							{/if}
						</div>
					</IntersectionObserver>
				{:else}
					<SkeletonPlaceholder style="width: 100%; height: 12rem;" />
				{/if}
			</div>
		{/each}
	</div>
</section>

<style lang="scss">
	@use '@carbon/motion' as motion;
	@use '@carbon/type' as type;
	//@use '$lib/client/styles/_border-all.scss';

	.solution-wrapper {
		opacity: 1;
		transition: opacity 250ms ease-in-out;
	}

	.solution-hidden {
		opacity: 0;
	}

	.container {
		padding-top: var(--cds-spacing-10);
		padding-bottom: var(--cds-spacing-10);
		margin: auto;
		width: 90vw;
		display: flex;
		gap: 2rem;
		flex-direction: column;
	}

	.summary {
		display: flex;
		flex-direction: row;
		justify-content: center;
		align-items: start;
		gap: 0.5rem;

		img {
			object-fit: contain;
		}
	}

	@media (min-width: 320px) {
		.solutions {
			display: grid;
			grid-template-rows: 1fr 1fr 1fr 1fr;
			grid-template-columns: auto;
			grid-template-areas:
				'area1'
				'area2'
				'area3'
				'area4';
			gap: 1rem;
		}
	}

	@media (min-width: 672px) {
		.solutions {
			display: grid;
			grid-template-areas:
				'area1 area3'
				'area2 area3'
				'area4 area4';
			grid-template-rows: 1fr 1fr auto;
			grid-template-columns: 1fr 1fr;
			gap: 1rem;
		}
	}

	@media (min-width: 1056px) {
		.solutions {
			display: grid;
			grid-template-areas:
				'area1 area2 area3'
				'area4 area4 area3';
			grid-template-rows: 1fr auto;
			grid-template-columns: 1fr 1fr 1fr;
			gap: 1rem;
		}
	}

	.area1 {
		grid-area: area1;
	}

	.area2 {
		grid-area: area2;
	}

	.area3 {
		grid-area: area3;
	}

	.area4 {
		grid-area: area4;
	}
</style>
