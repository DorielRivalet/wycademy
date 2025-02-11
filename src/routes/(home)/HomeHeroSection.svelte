<script lang="ts">
	import Button from 'carbon-components-svelte/src/Button/Button.svelte';
	import ArrowRight from 'carbon-icons-svelte/lib/ArrowRight.svelte';
	import Group from 'carbon-icons-svelte/lib/Group.svelte';
	import Running from 'carbon-icons-svelte/lib/Running.svelte';
	import Tools from 'carbon-icons-svelte/lib/Tools.svelte';
	import Book from 'carbon-icons-svelte/lib/Book.svelte';
	import AnimatedCounter from '$lib/client/components/AnimatedCounter.svelte';
	import { guidesInfo, toolsInfo } from '$lib/client/modules/routes';
	import HomeHeroSectionAllPageCards from './HomeHeroSectionAllPageCards.svelte';
	import type { Writable } from 'svelte/store';
	import { getContext } from 'svelte';
	import type { CarbonTheme } from 'carbon-components-svelte/src/Theme/Theme.svelte';
	import { onMount } from 'svelte';
	import SkeletonPlaceholder from 'carbon-components-svelte/src/SkeletonPlaceholder/SkeletonPlaceholder.svelte';

	interface Props {
		title?: string;
		description?: string;
		primaryButtonText?: string;
		primaryButtonLink?: string;
		counterSpeedruns?: number;
		counterUsers?: number;
		counterGuides?: number;
		counterTools?: number;
	}

	let {
		title = 'Your Ultimate Knowledge Base for Monster Hunter Frontier Z',
		description = 'With in-depth resources, leaderboards, and tools for all hunters, our open-source platform empowers the community across all servers and patches.',
		primaryButtonText = 'Learn more',
		primaryButtonLink = '#problem',
		counterSpeedruns = 0,
		counterUsers = 0,
		counterGuides = guidesInfo.reduce(
			(count, category) => count + category.pages.length,
			0,
		),
		counterTools = toolsInfo.reduce(
			(count, category) => count + category.pages.length,
			0,
		),
	}: Props = $props();

	const carbonThemeStore = getContext(
		Symbol.for('carbonTheme'),
	) as Writable<CarbonTheme>;

	let container: HTMLDivElement | undefined = $state();
	let isVisible = $state(false);

	let bgClass = $derived(
		$carbonThemeStore === 'g10' ? `background-light` : `background`,
	);

	onMount(() => {
		const observer = new IntersectionObserver(
			(entries) => {
				const [entry] = entries;
				isVisible = entry.isIntersecting;
			},
			{ threshold: 0.1 }, // Adjust threshold as needed
		);

		if (container) {
			observer.observe(container);
		}

		return () => observer.disconnect();
	});
</script>

<section class={'hero-container ' + bgClass}>
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
		<div class="marquee-container" bind:this={container}>
			{#if isVisible}
				<HomeHeroSectionAllPageCards />
			{:else}
				<SkeletonPlaceholder style="width: 100%; height: 100%;" />
			{/if}
		</div>

		<div class="hero-counters">
			<AnimatedCounter
				value={counterUsers}
				text="Hunters"
				color="var(--ctp-text)"
				href="/signup"
				><Group size={32} color="var(--ctp-blue)" /></AnimatedCounter
			>
			<AnimatedCounter
				value={counterSpeedruns}
				text="Hunts"
				href="/leaderboard"
				color="var(--ctp-text)"
				><Running size={32} color="var(--ctp-sapphire)" /></AnimatedCounter
			>
			<AnimatedCounter
				value={counterGuides}
				text="Guides"
				href="/hunter-notes"
				color="var(--ctp-text)"
				><Book size={32} color="var(--ctp-sky)" /></AnimatedCounter
			>
			<AnimatedCounter
				value={counterTools}
				text="Tools"
				href="/tools"
				color="var(--ctp-text)"
				><Tools size={32} color="var(--ctp-teal)" /></AnimatedCounter
			>
		</div>
	</div>
</section>

<style lang="scss">
	@use '@carbon/motion' as motion;
	@use '@carbon/type' as type;
	//@use '$lib/client/styles/_border-all.scss';

	@media (min-width: 320px) {
		.hero-container {
			padding-left: 2rem;
			padding-right: 2rem;
			gap: 2rem;
			display: grid;
			width: 100%;
			grid-template-areas:
				'text'
				'graphics';
			grid-template-rows: 1fr auto;
			background-image: url('$lib/client/images/background/bg-bestiary.webp');
		}

		.hero-graphics {
			grid-area: graphics;
			padding-top: 0px;
			display: grid;
			grid-template-areas:
				'hero-counters'
				'marquee-container';
			grid-template-rows: 1fr auto;
			gap: 2rem;

			.marquee-container {
				min-width: 90vw;
				grid-area: marquee-container;
			}
		}

		.hero-counters {
			grid-area: hero-counters;
			display: grid;
			gap: 2rem;
			grid-template-columns: 1fr 1fr;
			align-items: center;
			justify-content: center;
			z-index: 999;
		}
	}

	@media (min-width: 672px) {
		.hero-counters {
			grid-area: hero-counters;
			display: flex;
			flex-wrap: wrap;
			gap: 2rem;
			flex-direction: row;
			align-items: center;
			justify-content: center;
			z-index: 999;
		}
	}

	@media (min-width: 1056px) {
		.hero-container {
			display: grid;
			grid-template-areas: 'text graphics';
			grid-template-columns: 2fr 4fr;
			max-height: 90vh;
		}

		.hero-graphics {
			grid-area: graphics;
			padding-top: var(--cds-spacing-08);
			grid-template-areas:
				'marquee-container'
				'hero-counters';
			gap: 2rem;

			.marquee-container {
				min-width: 50vw;
			}
		}
	}

	.hero-text {
		padding-top: var(--cds-spacing-08);
		grid-area: text;
		display: flex;
		flex-direction: column;
		gap: 1rem;
		z-index: 999;
	}

	.hero-title {
		@include type.type-style('fluid-heading-06', true);
	}

	.hero-description {
		text-wrap: wrap;
		max-width: clamp(50vw, 80vw, 80ch);
		@include type.type-style('fluid-paragraph-01', true);
	}

	.background {
		position: relative;
		background-attachment: fixed;
		background-position: top;
		background-repeat: repeat;
		padding-bottom: var(--cds-spacing-08);
		background-size: 50vw;
	}

	.background-light {
		position: relative;
		background-attachment: fixed;
		background-position: top;
		background-repeat: repeat;
		padding-bottom: var(--cds-spacing-08);
		background-size: 50vw;
	}

	.background-light:before {
		content: ' ';
		display: block;
		position: absolute;
		left: 0;
		top: 0;
		width: 100%;
		height: 100%;
		opacity: 0.9;
		background-color: #fff;
		background-image: url('$lib/client/images/background/noise-light.webp');
		background-size: 64px;
	}

	.background:before {
		content: ' ';
		display: block;
		position: absolute;
		left: 0;
		top: 0;
		width: 100%;
		height: 100%;
		opacity: 0.9;
		background-color: #000;
		background-image: url('$lib/client/images/background/noise.webp');
		background-size: 64px;
	}
</style>
