<script lang="ts">
	import Button from 'carbon-components-svelte/src/Button/Button.svelte';
	import ArrowRight from 'carbon-icons-svelte/lib/ArrowRight.svelte';
	import Group from 'carbon-icons-svelte/lib/Group.svelte';
	import Running from 'carbon-icons-svelte/lib/Running.svelte';
	import Tools from 'carbon-icons-svelte/lib/Tools.svelte';
	import Book from 'carbon-icons-svelte/lib/Book.svelte';
	import AnimatedCounter from '$lib/client/components/AnimatedCounter.svelte';

	export let title: string = 'Title';
	export let description: string = 'Description';
	export let primaryButtonText: string = 'Explore';
	export let primaryButtonLink: string = '/';
	export let counterSpeedruns: number = 0;
	export let counterUsers: number = 0;
	export let counterGuides: number = 0;
	export let counterTools: number = 0;
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
		<!-- <img src="/" alt="Website Preview" /> -->
	</div>
	<div class="hero-counters">
		<AnimatedCounter value={counterUsers} text="Users" color="var(--ctp-text)"
			><Group size={32} color="var(--ctp-text)" /></AnimatedCounter
		>
		<AnimatedCounter
			value={counterSpeedruns}
			text="Speedruns"
			color="var(--ctp-text)"
			><Running size={32} color="var(--ctp-text)" /></AnimatedCounter
		>
		<AnimatedCounter value={counterGuides} text="Guides" color="var(--ctp-text)"
			><Book size={32} color="var(--ctp-text)" /></AnimatedCounter
		>
		<AnimatedCounter value={counterTools} text="Tools" color="var(--ctp-text)"
			><Tools size={32} color="var(--ctp-text)" /></AnimatedCounter
		>
	</div>
</div>

<style lang="scss">
	@use '@carbon/motion' as motion;
	@use '@carbon/type' as type;
	// @use '$lib/client/styles/_border-all.scss';

	@media (min-width: 320px) {
		.hero-container {
			display: grid;
			min-height: 90vh;
			width: 90vw;
			margin: auto;
			gap: 1rem;
			grid-template-areas:
				'text graphics'
				'counters counters';
			grid-template-rows: 3fr 1fr;
			grid-template-columns: 1fr 1fr;
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
	}

	@media (min-width: 1056px) {
		.hero-container {
			display: grid;
			grid-template-areas: 'text graphics counters';
			grid-template-rows: 1fr;
			grid-template-columns: 1fr 2fr 1fr;
		}

		.hero-counters {
			flex-direction: column;
			align-items: center;
			justify-content: center;
		}
	}

	.hero-text {
		padding-top: var(--cds-spacing-10);
		grid-area: text;
		display: flex;
		flex-direction: column;
		gap: 2rem;
	}

	.hero-graphics {
		grid-area: graphics;

		img {
			border: 2px solid var(--ctp-surface1);
			border-radius: 8px;
		}
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
