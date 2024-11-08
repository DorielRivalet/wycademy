<script lang="ts">
	import { onMount, onDestroy } from 'svelte';
	import SectionHeadingCentered from '$lib/client/components/SectionHeadingCentered.svelte';
	import Button from 'carbon-components-svelte/src/Button/Button.svelte';
	import ArrowRight from 'carbon-icons-svelte/lib/ArrowRight.svelte';
	import DirectionStraightRightFilled from 'carbon-icons-svelte/lib/DirectionStraightRightFilled.svelte';
	import { monsterInfo } from '$lib/client/modules/frontier/monsters';

	export let href: string = '/signup';

	const monsters = monsterInfo.filter(
		(e) => e.fullRender && e.fullRender !== '',
	);
	const opacityValue = 0.3;
	const imageDuration = 6000;

	let currentImageIndex = 0;
	let opacity = opacityValue;
	let intervalId: ReturnType<typeof setInterval>;

	$: currentMonster = monsters[currentImageIndex];

	function changeImage() {
		// Fade out
		opacity = 0;

		setTimeout(() => {
			// Change image
			currentImageIndex = (currentImageIndex + 1) % monsters.length;
			// Fade in
			opacity = opacityValue;
		}, 1000);
	}

	onMount(() => {
		if (monsters.length === 0) {
			console.warn('No monsters with valid fullRender found');
			return;
		}

		// Set initial opacity
		opacity = opacityValue;

		// Start the interval after a delay to ensure initial render is complete
		setTimeout(() => {
			intervalId = setInterval(changeImage, imageDuration);
		}, 100);
	});

	onDestroy(() => {
		if (intervalId) clearInterval(intervalId);
	});
</script>

<section class="container">
	<div class="background" aria-hidden="true">
		{#if currentMonster}
			<img
				src={currentMonster.fullRender}
				alt="Monster Render"
				style="opacity: {opacity}"
				class="background-image"
				on:error={(e) => console.error('Image failed to load:', e)}
			/>
		{/if}
	</div>

	<div class="foreground">
		<SectionHeadingCentered
			title="Become the best hunter you can be. Dive in now and start exploring!"
			section="Ready to Begin Your Journey?"
			level={2}
			icon={DirectionStraightRightFilled}
		/>
		<div class="button-container">
			<Button {href} icon={ArrowRight} type="primary" size="lg" expressive>
				Sign up for free
			</Button>
		</div>
	</div>
</section>

<style lang="scss">
	.container {
		position: relative;
		margin: auto;
		padding-top: var(--cds-spacing-10);
		width: 90vw;
		min-height: 60vh;
		display: flex;
		gap: 2rem;
		flex-direction: column;
	}

	.background {
		position: absolute;
		inset: 0;
		overflow: hidden;
	}

	.foreground {
		display: flex;
		flex-direction: column;
		gap: 2rem;
	}

	.background-image {
		width: 80vw;
		object-fit: cover;
		transition: opacity 1s ease-in-out;
		padding-bottom: var(--cds-spacing-10);
		padding-top: var(--cds-spacing-10);
	}

	.button-container {
		display: flex;
		flex-direction: row;
		gap: 2rem;
		justify-content: center;
	}
</style>
