<script lang="ts">
	import Button from 'carbon-components-svelte/src/Button/Button.svelte';
	import ArrowRight from 'carbon-icons-svelte/lib/ArrowRight.svelte';
	import Group from 'carbon-icons-svelte/lib/Group.svelte';
	import Running from 'carbon-icons-svelte/lib/Running.svelte';
	import Tools from 'carbon-icons-svelte/lib/Tools.svelte';
	import Book from 'carbon-icons-svelte/lib/Book.svelte';
	import AnimatedCounter from '$lib/client/components/AnimatedCounter.svelte';
	import { guidesInfo, toolsInfo } from '$lib/client/modules/routes';
	import breakpointObserver from 'carbon-components-svelte/src/Breakpoint/breakpointObserver';
	import HomeHeroSectionAllPageCards from './HomeHeroSectionAllPageCards.svelte';

	const breakpointSize = breakpointObserver();
	const breakpointLargerThanLarge = breakpointSize.largerThan('md');

	export let title: string =
		'Your Ultimate Knowledge Base for Monster Hunter Frontier Z';
	export let description: string =
		'With in-depth resources, leaderboards, and tools for all hunters, our open-source platform empowers the community across all servers and patches.';
	export let primaryButtonText: string = 'Explore';
	export let primaryButtonLink: string = '/';
	export let counterSpeedruns: number = 0;
	export let counterUsers: number = 0;
	export let counterGuides: number = guidesInfo.reduce(
		(count, category) => count + category.pages.length,
		0,
	);
	export let counterTools: number = toolsInfo.reduce(
		(count, category) => count + category.pages.length,
		0,
	);
</script>

<div class="hero-container">
	<div class="hero-text">
		<h1 class="hero-title">{title}</h1>
		<p class="hero-description">{description}</p>
		<div class="hero-button">
			<Button
				size="lg"
				expressive
				icon={ArrowRight}
				href={primaryButtonLink}
				kind="primary">{primaryButtonText}</Button
			>
		</div>
	</div>
	<div class="hero-graphics">
		{#if $breakpointLargerThanLarge}
			<div class="marquee-container">
				<HomeHeroSectionAllPageCards />
			</div>
		{/if}
		<div class="hero-counters">
			<AnimatedCounter
				value={counterUsers}
				text="Hunters"
				color="var(--ctp-text)"
				><Group size={32} color="var(--ctp-text)" /></AnimatedCounter
			>
			<AnimatedCounter
				value={counterSpeedruns}
				text="Hunts"
				color="var(--ctp-text)"
				><Running size={32} color="var(--ctp-text)" /></AnimatedCounter
			>
			<AnimatedCounter
				value={counterGuides}
				text="Guides"
				color="var(--ctp-text)"
				><Book size={32} color="var(--ctp-text)" /></AnimatedCounter
			>
			<AnimatedCounter value={counterTools} text="Tools" color="var(--ctp-text)"
				><Tools size={32} color="var(--ctp-text)" /></AnimatedCounter
			>
		</div>
	</div>
</div>

<style lang="scss">
	@use '@carbon/motion' as motion;
	@use '@carbon/type' as type;
	//@use '$lib/client/styles/_border-all.scss';

	@media (min-width: 320px) {
		.hero-container {
			display: grid;
			width: 90vw;
			margin: auto;
			gap: 2rem;
			column-gap: 2rem;
			grid-template-areas:
				'text'
				'graphics';
			grid-template-rows: 3fr 1fr;
			grid-template-columns: 1fr;
		}

		.hero-graphics {
			grid-area: graphics;
			padding-top: 0px;
			display: flex;
			flex-direction: column;
			gap: 2rem;

			.marquee-container {
				width: 60vw;
				display: flex;
			}
		}
	}

	@media (min-width: 1056px) {
		.hero-container {
			display: grid;
			grid-template-areas: 'text graphics';
			grid-template-rows: 1fr;
			grid-template-columns: 2fr 4fr;
		}

		.hero-graphics {
			grid-area: graphics;
			padding-top: var(--cds-spacing-08);
			display: flex;
			flex-direction: column;
			gap: 2rem;
		}
	}

	.hero-counters {
		grid-area: counters;
		display: flex;
		flex-wrap: wrap;
		gap: 2rem;
		flex-direction: row;
		align-items: center;
		justify-content: center;
	}

	.hero-text {
		padding-top: var(--cds-spacing-08);
		grid-area: text;
		display: flex;
		flex-direction: column;
		gap: 1rem;
	}

	.hero-title {
		@include type.type-style('fluid-heading-06', true);
	}

	.hero-description {
		text-wrap: wrap;
		max-width: clamp(50vw, 80vw, 80ch);
		@include type.type-style('fluid-paragraph-01', true);
	}
</style>
