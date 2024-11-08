<script lang="ts">
	import SectionHeadingCentered from '$lib/client/components/SectionHeadingCentered.svelte';
	import Button from 'carbon-components-svelte/src/Button/Button.svelte';
	import ArrowRight from 'carbon-icons-svelte/lib/ArrowRight.svelte';
	import DirectionStraightRightFilled from 'carbon-icons-svelte/lib/DirectionStraightRightFilled.svelte';
	import { monsterInfo } from '$lib/client/modules/frontier/monsters';
	import { onMount } from 'svelte';

	export let href: string = '/signup';
	export let rowGap: number = 32; // Gap between rows in pixels
	export let topPadding: number = 64; // Padding above first row
	export let bottomPadding: number = 64; // Padding below last row

	const monsters = monsterInfo.filter((e) => e.icon && e.icon !== '');

	function generateRow() {
		// Triple the icons to ensure smooth infinite scrolling
		return [...monsters, ...monsters, ...monsters]
			.sort(() => Math.random() - 0.5)
			.map((monster) => monster.icon);
	}

	const rows = [
		{ icons: generateRow(), speed: 0.5, direction: 1 }, // Left to right
		{ icons: generateRow(), speed: 0.25, direction: -1 }, // Right to left
		{ icons: generateRow(), speed: 0.35, direction: 1 }, // Left to right
		{ icons: generateRow(), speed: 0.15, direction: -1 }, // Right to left
	];

	let container: Element;
	let isVisible = false;

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

<section
	class="container"
	bind:this={container}
	style="--top-padding: {topPadding}px; --bottom-padding: {bottomPadding}px;"
>
	<div class="icon-background">
		{#if isVisible}
			{#each rows as row, rowIndex}
				<div
					class="icon-row"
					style="
									--row-speed: {monsters.length / row.speed}s;
									--row-direction: {row.direction};
									--row-position: calc({rowIndex} * (64px + {rowGap}px) + var(--top-padding));
							"
					class:reverse={row.direction === -1}
				>
					<!-- Create two sets of icons for seamless looping -->
					<div class="icons-set">
						{#each row.icons as icon}
							<div class="icon-container">
								<img src={icon} alt="Monster icon" class="monster-icon" />
							</div>
						{/each}
					</div>
				</div>
			{/each}
		{/if}
	</div>

	<div class="foreground">
		<div class="text-container">
			<SectionHeadingCentered
				title="Become the best hunter you can be"
				section="Ready to Begin Your Journey?"
				level={2}
				icon={DirectionStraightRightFilled}
			/>
			<p class="subheading">Dive in now and start exploring!</p>
		</div>

		<div class="button-container">
			<Button {href} icon={ArrowRight} type="primary" size="lg" expressive>
				Sign up for free
			</Button>
		</div>
	</div>
</section>

<style lang="scss">
	@use '@carbon/type' as type;

	.container {
		position: relative;
		padding-top: var(--top-padding);
		padding-bottom: var(--bottom-padding);
		width: 100%;
		min-height: 60vh;
		display: flex;
		gap: 2rem;
		flex-direction: column;
	}

	.text-container {
		display: flex;
		flex-direction: column;
		align-items: center;
	}

	.subheading {
		@include type.type-style('fluid-paragraph-01', true);
	}

	.foreground {
		position: relative;
		z-index: 1;
		display: flex;
		flex-direction: column;
		gap: 2rem;
		padding-left: 1rem;
		padding-right: 1rem;
		pointer-events: none;

		// allow clicking buttons/links
		:global(button),
		:global(a) {
			pointer-events: auto;
		}
	}

	.button-container {
		display: flex;
		flex-direction: row;
		gap: 2rem;
		justify-content: center;
	}

	.icon-background {
		position: absolute;
		inset: 0;
		width: 100%;
		height: 100%;
		overflow: hidden;
	}

	.icon-row {
		position: absolute;
		display: flex;
		top: var(--row-position);
		width: 100%;
		opacity: 0.25;

		&.reverse {
			.icons-set {
				animation: slideLeft var(--row-speed) linear infinite;
			}
		}

		.icons-set {
			display: flex;
			animation: slideRight var(--row-speed) linear infinite;
		}
	}

	.icon-container {
		flex-shrink: 0;
		width: 64px;
		height: 64px;
		margin: 0 0.5rem;
	}

	.monster-icon {
		width: 100%;
		height: 100%;
		object-fit: contain;
	}

	@keyframes slideRight {
		0% {
			transform: translateX(-33.33%);
		}
		100% {
			transform: translateX(0);
		}
	}

	@keyframes slideLeft {
		0% {
			transform: translateX(0);
		}
		100% {
			transform: translateX(-33.33%);
		}
	}

	img:hover {
		filter: brightness(120%) drop-shadow(0px 0px 8px var(--ctp-blue));
	}
</style>
