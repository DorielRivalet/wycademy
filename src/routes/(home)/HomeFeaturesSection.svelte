<script lang="ts">
	import desktopLight from '$lib/client/images/supplemental/device-desktop-light.webp';
	import mobileLight from '$lib/client/images/supplemental/device-mobile-light.webp';
	import desktopDark from '$lib/client/images/supplemental/device-desktop-dark.webp';
	import mobileDark from '$lib/client/images/supplemental/device-mobile-dark.webp';
	import IPhone15Pro from '$lib/client/components/devices/Iphone15Pro.svelte';
	import Safari from '$lib/client/components/devices/Safari.svelte';
	import { getContext, onMount } from 'svelte';
	import type { Writable } from 'svelte/store';
	import type { CarbonTheme } from 'carbon-components-svelte/src/Theme/Theme.svelte';
	import SectionHeadingCentered from '$lib/client/components/SectionHeadingCentered.svelte';
	import { ListChecked } from 'carbon-icons-svelte';
	import HomeFeaturesSectionFeature from './HomeFeaturesSectionFeature.svelte';
	import Application from 'carbon-icons-svelte/lib/Application.svelte';
	import ToolsAlt from 'carbon-icons-svelte/lib/ToolsAlt.svelte';
	import Devices from 'carbon-icons-svelte/lib/Devices.svelte';
	import Development from 'carbon-icons-svelte/lib/Development.svelte';
	import { fade, scale } from 'svelte/transition';
	import { cubicInOut } from 'svelte/easing';
	import feature2Img from '$lib/client/images/supplemental/feature-2.webp';
	import feature3ImgLight from '$lib/client/images/supplemental/feature-3-light.webp';
	import feature3ImgDark from '$lib/client/images/supplemental/feature-3-dark.webp';
	import feature4ImgLight from '$lib/client/images/supplemental/feature-4-light.webp';
	import feature4ImgDark from '$lib/client/images/supplemental/feature-4-dark.webp';
	import breakpointObserver from 'carbon-components-svelte/src/Breakpoint/breakpointObserver';
	import SkeletonPlaceholder from 'carbon-components-svelte/src/SkeletonPlaceholder/SkeletonPlaceholder.svelte';
	import ChevronLeft from 'carbon-icons-svelte/lib/ChevronLeft.svelte';
	import ChevronRight from 'carbon-icons-svelte/lib/ChevronRight.svelte';

	function intersectionObserver(element: Element) {
		const observer = new IntersectionObserver(
			(entries) => {
				const [entry] = entries;
				isVisible = entry.isIntersecting;
			},
			{ threshold: 0.1 },
		);

		observer.observe(element);

		return {
			destroy() {
				observer.disconnect();
			},
		};
	}

	function startProgressBar() {
		if (progressBarInterval) {
			clearInterval(progressBarInterval);
		}

		progressBarInterval = setInterval(() => {
			if (!isInteracting) {
				progressBarValues[currentFeatureIndex] +=
					100 / (progressBarDuration / 50);
				if (progressBarValues[currentFeatureIndex] >= 100) {
					progressBarValues = progressBarValues.map(() => 0);
					currentFeatureIndex = (currentFeatureIndex + 1) % features.length;
				}
				progressBarValues = [...progressBarValues];
			}
		}, 50);
	}

	function handleFeatureClick(index: number) {
		if ($breakpointLargerThanMedium && currentFeatureIndex !== index) {
			isInteracting = true;
			currentFeatureIndex = index;
			progressBarValues = features.map((_, i) => (i === index ? 100 : 0));
		} else {
			if (!showMobileControls) {
				isInteracting = true;
				showMobileControls = true;
			} else {
				isInteracting = false;
				showMobileControls = false;
				startProgressBar();
			}
		}
	}

	function handleMobileNavigation(direction: 'prev' | 'next') {
		if (direction === 'prev') {
			currentFeatureIndex =
				(currentFeatureIndex - 1 + features.length) % features.length;
		} else {
			currentFeatureIndex = (currentFeatureIndex + 1) % features.length;
		}
		progressBarValues = features.map((_, i) =>
			i === currentFeatureIndex ? 100 : 0,
		);
	}

	function handleKeydown(event: KeyboardEvent, index: number) {
		if (event.key === 'Enter' || event.key === ' ') {
			handleFeatureClick(index);
		}
	}

	const carbonThemeStore = getContext(
		Symbol.for('carbonTheme'),
	) as Writable<CarbonTheme>;

	const features = [
		{
			title: 'Responsive Web Design',
			description:
				'An user interface adapted to the resolutions of many devices: phones, tablets and desktop.',
			icon: Devices,
		},
		{
			title: 'Progressive Web Application',
			description:
				'Built with modern web practices, we ensure a fast, user-friendly experience with PWA support for offline access.',
			icon: Application,
		},
		{
			title: 'Community-Driven',
			description:
				'Open-source on GitHub, inviting collaboration and contributions from all over the world.',
			icon: Development,
		},
		{
			title: 'Utility and Inclusivity',
			description:
				'Tools and utilities designed for everyone in the community, from casual players to hardcore speedrunners.',
			icon: ToolsAlt,
		},
	];

	const progressBarDuration = 5000; // 5 seconds

	const breakpointSize = breakpointObserver();
	const breakpointLargerThanMedium = breakpointSize.largerThan('md');

	let currentFeatureIndex = $state(0);
	let progressBarValues = $state(features.map(() => 0));
	let progressBarInterval: ReturnType<typeof setInterval> | null = null;
	let isVisible = $state(false);
	/**TODO: if true, disable automatic progress bar updating and let user select the feature to view via clicking the icons. If on mobile, since only 1 icon is shown, add left and right arrow buttons when the user presses the icon which makes the progress bar stop updating automatically. If they press the icon again, the progress bar updates automatically again.*/
	let isInteracting = false;
	let showMobileControls = $state(false);

	onMount(() => {
		startProgressBar();

		return () => {
			if (progressBarInterval) {
				clearInterval(progressBarInterval);
			}
		};
	});
</script>

<section class="container">
	<SectionHeadingCentered
		title="What Sets Us Apart"
		section="Features"
		level={2}
		icon={ListChecked}
	/>
	<div class="features">
		{#if $breakpointLargerThanMedium}
			{#each features as feature, index}
				<div
					class="feature-wrapper"
					onclick={() => handleFeatureClick(index)}
					onkeydown={(e) => handleKeydown(e, index)}
					role="button"
					tabindex="0"
				>
					<HomeFeaturesSectionFeature
						title={feature.title}
						titleColor={progressBarValues[index] > 2
							? 'var(--ctp-sky)'
							: 'var(--ctp-text)'}
						description={feature.description}
						progressPosition="bottom"
						progressBarValue={progressBarValues[index]}
					>
						<feature.icon
							size={32}
							on:click={() => handleFeatureClick(index)}
							color={progressBarValues[index] > 2
								? 'var(--ctp-sky)'
								: 'var(--ctp-text)'}
						/>
					</HomeFeaturesSectionFeature>
				</div>
			{/each}
		{:else}
			<div class="mobile-feature-container">
				<div
					class="feature-wrapper"
					onclick={() => handleFeatureClick(currentFeatureIndex)}
					onkeydown={(e) => handleKeydown(e, currentFeatureIndex)}
					role="button"
					tabindex="0"
				>
					<HomeFeaturesSectionFeature
						titleColor="var(--ctp-text)"
						title={features[currentFeatureIndex].title}
						description={features[currentFeatureIndex].description}
						progressPosition="bottom"
						progressBarValue={progressBarValues[currentFeatureIndex]}
					>
						{@const SvelteComponent = features[currentFeatureIndex].icon}
						<SvelteComponent
							size={32}
						/>
					</HomeFeaturesSectionFeature>
				</div>
				{#if showMobileControls}
					<div class="mobile-controls" transition:fade={{ duration: 200 }}>
						<button
							class="nav-button"
							onclick={() => handleMobileNavigation('prev')}
							aria-label="Previous feature"
						>
							<ChevronLeft size={24} color="var(--ctp-text)" />
						</button>

						<button
							class="nav-button"
							onclick={() => handleMobileNavigation('next')}
							aria-label="Next feature"
						>
							<ChevronRight size={24} color="var(--ctp-text)" />
						</button>
					</div>
				{/if}
			</div>
		{/if}
	</div>
	<div class="graphics-container" use:intersectionObserver>
		{#if isVisible}
			{#if currentFeatureIndex === 0}
				<div
					class="devices"
					in:scale={{
						easing: cubicInOut,
						duration: 300,
					}}
					out:fade={{
						easing: cubicInOut,
						duration: 150,
					}}
				>
					<div>
						<Safari
							src={$carbonThemeStore === 'g10' ? desktopLight : desktopDark}
						/>
					</div>
					<div>
						<IPhone15Pro
							src={$carbonThemeStore === 'g10' ? mobileLight : mobileDark}
						/>
					</div>
				</div>
			{:else if currentFeatureIndex === 1}
				<div
					class="feature-image-container"
					in:scale={{
						easing: cubicInOut,
						duration: 300,
					}}
					out:fade={{
						easing: cubicInOut,
						duration: 150,
					}}
				>
					<img class="feature-image" src={feature2Img} alt="Feature 2" />
				</div>
			{:else if currentFeatureIndex === 2}
				<div
					class="feature-image-container"
					in:scale={{
						easing: cubicInOut,
						duration: 300,
					}}
					out:fade={{
						easing: cubicInOut,
						duration: 150,
					}}
				>
					<img
						class="feature-image border-container"
						src={$carbonThemeStore === 'g10'
							? feature3ImgLight
							: feature3ImgDark}
						alt="Feature 3"
					/>
				</div>
			{:else if currentFeatureIndex === 3}
				<div
					class="feature-image-container"
					in:scale={{
						easing: cubicInOut,
						duration: 300,
					}}
					out:fade={{
						easing: cubicInOut,
						duration: 150,
					}}
				>
					<img
						class="feature-image border-container"
						src={$carbonThemeStore === 'g10'
							? feature4ImgLight
							: feature4ImgDark}
						alt="Feature 4"
					/>
				</div>
			{:else}
				<div class="placeholder"></div>
			{/if}
		{:else}
			<SkeletonPlaceholder style="width: 100%; height: 100%;" />
		{/if}
	</div>
</section>

<style lang="scss">
	//@use '$lib/client/styles/_border-all.scss';

	.container {
		padding-top: var(--cds-spacing-10);
		padding-bottom: var(--cds-spacing-10);
		margin: auto;
		width: 90vw;
		display: flex;
		gap: 2rem;
		flex-direction: column;
	}

	@media (min-width: 320px) {
		.features {
			display: grid;
			grid-template-columns: 1fr;
			align-items: center;
			gap: 2rem;
		}
	}

	@media (min-width: 1056px) {
		.features {
			display: grid;
			grid-template-columns: 1fr 1fr 1fr 1fr;
			gap: 2rem;
		}
	}

	.feature-wrapper {
		cursor: pointer;
		transition: transform 0.2s ease;

		&:hover {
			transform: translateY(-4px);
		}
	}

	.mobile-feature-container {
		position: relative;
		width: 100%;
	}

	.mobile-controls {
		position: absolute;
		top: 0;
		left: 0;
		right: 0;
		display: flex;
		justify-content: center;
		gap: 8rem;
		padding: 1rem 0;
	}

	.nav-button {
		background: var(--ctp-surface0);
		border: 1px solid var(--ctp-surface1);
		border-radius: 50%;
		width: 40px;
		height: 40px;
		display: flex;
		align-items: center;
		justify-content: center;
		cursor: pointer;
		transition: all 0.2s ease;

		&:hover {
			background: var(--ctp-overlay0);
		}

		&:focus {
			outline: 2px solid var(--ctp-overlay1);
			outline-offset: 2px;
		}
	}

	.graphics-container {
		height: 70vh;
		min-height: 400px;
		position: relative;
		width: 100%;
		overflow: hidden;
		display: flex;
		justify-content: center;
		align-items: center;
	}

	.devices {
		width: 100%;
		height: 100%;
		display: grid;
		grid-template-columns: 1fr 1fr;
		gap: 2rem;
		align-items: center;

		> div {
			height: 100%;
			display: flex;
			align-items: center;
			justify-content: center;
		}

		:global(.safari-window) {
			width: 100%;
			height: 100%;
		}

		:global(.safari-window svg) {
			width: 100%;
			height: 100%;
			max-height: 70vh;
		}

		:global(.iphone-container) {
			height: 100%;
		}

		:global(.iphone-container svg) {
			height: 100%;
			max-height: 70vh;
			width: auto;
		}
	}

	.feature-image-container {
		position: absolute;
		top: 0;
		left: 0;
		width: 100%;
		height: 100%;
		display: flex;
		align-items: start;
		justify-content: center;
	}

	.feature-image {
		max-width: 100%;
		max-height: 100%;
		object-fit: contain;
	}
</style>
