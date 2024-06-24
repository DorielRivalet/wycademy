<script lang="ts">
	import Button from 'carbon-components-svelte/src/Button/Button.svelte';
	import ArrowRight from 'carbon-icons-svelte/lib/ArrowRight.svelte';
	import StarFilled from 'carbon-icons-svelte/lib/StarFilled.svelte';
	import Demo from 'carbon-icons-svelte/lib/Demo.svelte';
	import ChevronDown from 'carbon-icons-svelte/lib/ChevronDown.svelte';

	export let title = 'Title';
	export let description = 'Description';
	export let primaryButtonText;
	export let primaryButtonLink;
	export let secondaryButtonText = '';
	export let secondaryButtonLink = '';
	export let heroVideoBackground;
	export let layout: 1 | 2 = 1;
	export let downloads = 0;
	export let starCount = 0;
</script>

{#if layout === 1}
	<div class="hero-section">
		<video
			autoplay
			muted
			loop
			playsinline
			disablePictureInPicture
			class="background-video"
		>
			<source src={heroVideoBackground} type="video/webm" />
		</video>
		<div class="content">
			<h1 class="title">{title}</h1>
			<p class="description">{description}</p>
			<div class="buttons">
				<Button
					href={primaryButtonLink}
					icon={ArrowRight}
					type="primary"
					size="lg"
					expressive>{primaryButtonText}</Button
				>
				{#if secondaryButtonText !== ''}
					<Button
						href={secondaryButtonLink}
						icon={Demo}
						type="tertiary"
						size="lg"
						expressive>{secondaryButtonText}</Button
					>
				{/if}
			</div>
			<div class="stats">
				<button class="downloads">
					<a href="https://github.com/DorielRivalet/mhfz-overlay">
						<img
							alt="GitHub Downloads (all assets, all releases)"
							src="https://img.shields.io/github/downloads/dorielrivalet/mhfz-overlay/total?style=for-the-badge&labelColor=%23313244&color=%23a6e3a1&cacheSeconds=86400"
						/>
					</a>
				</button>
				<button class="stars">
					<a href="https://github.com/DorielRivalet/mhfz-overlay">
						<StarFilled style="margin-right: 8px" color="#ffff00" />
						<p>Stars</p>
						<p class="star-count">{starCount}</p>
					</a>
				</button>
			</div>
			<a class="arrow-down" href="#demo">
				<p>See Demo</p>
				<ChevronDown />
			</a>
		</div>
	</div>
{/if}

<style lang="scss">
	@use '@carbon/motion' as motion;
	@use '@carbon/type' as type;

	.hero-section {
		position: relative;
		overflow: hidden; // Ensures nothing spills outside the hero section
		height: 100%; // Fill the entire height of.top-hero-section
	}

	.title {
		@include type.type-style('fluid-heading-06', true);
		text-align: center;
	}

	.background-video {
		position: absolute;
		top: 0;
		left: 0;
		width: 100%;
		height: 100%;
		object-fit: cover;
		z-index: 1; // Places the video behind the content
		border-radius: 4px 4px 4px 4px;
	}

	.content {
		position: relative;
		z-index: 2; // Ensures content is above the video
		color: var(--ctp-mocha-text);
		backdrop-filter: blur(4px) brightness(50%);
		display: flex;
		flex-direction: column;
		align-items: center;
		justify-content: center;
		height: 100%; // Extend to full height of.hero-section
	}

	.description {
		@include type.type-style('fluid-paragraph-01', true);
		text-wrap: wrap;
		padding: 2rem;
		text-align: center;
		max-width: clamp(50vw, 80vw, 80ch);
	}

	.buttons {
		display: flex;
		gap: 1rem;
		padding: 2rem;
	}

	.stats {
		display: flex;
		gap: 2rem;
	}

	.stats > button:hover {
		filter: drop-shadow(0px 0px 5px var(--ctp-mocha-blue)) brightness(120%);
	}

	.stars {
		all: unset;
		background: rgb(49, 50, 68);
		border-radius: 4px 4px 4px 4px;
		border-color: rgb(69, 71, 90);
		border-style: solid;
		border-width: 0.8px;
		color: var(--ctp-mocha-text);
		font-size: 12px;
		padding-top: 3px;
		padding-bottom: 3px;
		padding-left: 12px;
		padding-right: 12px;
		font-weight: bold;
	}

	.star-count {
		font-family: var(--font-mono);
		background: var(--ctp-mocha-surface1);
		border-radius: 10%;
		padding-left: 4px;
		padding-right: 4px;
		font-size: 12px;
	}

	a {
		all: unset;
		font-size: 12px;
		display: flex;
		align-items: center;
		gap: 0.5rem;
	}

	.downloads {
		all: unset;
	}

	.arrow-down {
		margin-top: 4rem;
		display: flex;
		align-items: center;
		gap: 0.5rem;
	}
</style>
