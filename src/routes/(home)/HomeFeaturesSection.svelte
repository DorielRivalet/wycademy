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

	let currentFeatureIndex = 0;
	let progressBarValues = features.map(() => 0);
	let progressBarInterval: ReturnType<typeof setInterval> | null = null;

	onMount(() => {
		progressBarInterval = setInterval(() => {
			progressBarValues[currentFeatureIndex] +=
				100 / (progressBarDuration / 50);
			if (progressBarValues[currentFeatureIndex] >= 100) {
				progressBarValues[currentFeatureIndex] = 0;
				currentFeatureIndex = (currentFeatureIndex + 1) % features.length;
			}
		}, 50);

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
				<HomeFeaturesSectionFeature
					title={feature.title}
					description={feature.description}
					progressPosition="bottom"
					progressBarValue={progressBarValues[index]}
				>
					<svelte:component this={feature.icon} size={32} />
				</HomeFeaturesSectionFeature>
			{/each}
		{:else}
			<HomeFeaturesSectionFeature
				title={features[currentFeatureIndex].title}
				description={features[currentFeatureIndex].description}
				progressPosition="bottom"
				progressBarValue={progressBarValues[currentFeatureIndex]}
			>
				<svelte:component this={features[currentFeatureIndex].icon} size={32} />
			</HomeFeaturesSectionFeature>
		{/if}
	</div>
	<div class="graphics-container">
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
					src={$carbonThemeStore === 'g10' ? feature3ImgLight : feature3ImgDark}
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
					src={$carbonThemeStore === 'g10' ? feature4ImgLight : feature4ImgDark}
					alt="Feature 4"
				/>
			</div>
		{:else}
			<div class="placeholder"></div>
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
