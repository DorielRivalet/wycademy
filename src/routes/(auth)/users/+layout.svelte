<!--
  ~ © 2024 Doriel Rivalet
  ~ Use of this source code is governed by a MIT license that can be
  ~ found in the LICENSE file.
-->

<script lang="ts">
	import { page } from '$app/stores';
	import LocalStorage from 'carbon-components-svelte/src/LocalStorage/LocalStorage.svelte';
	import type { CarbonTheme } from 'carbon-components-svelte/src/Theme/Theme.svelte';
	import { getContext } from 'svelte';
	import type { Writable } from 'svelte/store';

	const carbonThemeStore = getContext(
		Symbol.for('carbonTheme'),
	) as Writable<CarbonTheme>;
	const bannerEnabledStore = getContext(
		Symbol.for('banner'),
	) as Writable<boolean>;

	$: bgClass =
		getBackgroundImageClass($page?.url?.pathname) === 'none'
			? 'none'
			: $carbonThemeStore === 'g10'
				? `background-light ${getBackgroundImageClass($page.url.pathname)}`
				: `background ${getBackgroundImageClass($page.url.pathname)}`;

	function getBackgroundImageClass(path: string) {
		// TODO change depending on user profile theme
		return 'bg-profile';
	}
</script>

<LocalStorage bind:value={$bannerEnabledStore} key="__banner-enabled" />

<div class="app">
	<div class={bgClass}>
		<div class="main">
			<slot />
		</div>
	</div>
</div>

<style lang="scss">
	@use '@carbon/motion' as motion;

	.banner {
		display: flex;
		justify-content: center;
		background-color: var(--ctp-mantle);
		z-index: 99;
	}

	.bg-arena {
		background-image: url('$lib/client/images/background/bg-arena.webp');
	}

	.bg-profile {
		background-image: url('$lib/client/images/background/bg-profile.webp');
	}

	.bg-smithy {
		background-image: url('$lib/client/images/background/bg-smithy.webp');
	}

	.bg-leaderboard {
		background-image: url('$lib/client/images/background/bg-leaderboard.webp');
	}

	.bg-hunter-notes {
		background-image: url('$lib/client/images/background/bg-hunter-notes.webp');
	}

	.bg-equipment-box {
		background-image: url('$lib/client/images/background/bg-equipment-box.webp');
	}

	.bg-bestiary {
		background-image: url('$lib/client/images/background/bg-bestiary.webp');
	}

	.bg-support {
		background-image: url('$lib/client/images/background/bg-support.webp');
	}

	.app {
		display: flex;
		flex-direction: column;
		background-color: var(--ctp-mantle);
	}

	@media (min-width: 320px) {
		.main {
			position: relative;
			flex: 1;
			display: flex;
			flex-direction: column;
			padding: var(--cds-spacing-08);
			width: 100%;
			max-width: 100vw;
			margin: 0 auto;
			box-sizing: border-box;
			min-height: 90vh;
			background-color: var(--ctp-base);
			border-left: var(--cds-spacing-01) solid var(--ctp-surface0);
			border-right: var(--cds-spacing-01) solid var(--ctp-surface0);
			border-bottom: var(--cds-spacing-01) solid var(--ctp-surface0);
			border-radius: 0px 0px 10px 10px;
		}
	}

	@media (min-width: 1056px) {
		.main {
			position: relative;
			flex: 1;
			display: flex;
			flex-direction: column;
			padding: var(--cds-spacing-08);
			width: 100%;
			max-width: 80vw;
			margin: 0 auto;
			box-sizing: border-box;
			min-height: 90vh;
			background-color: var(--ctp-base);
			border-left: var(--cds-spacing-01) solid var(--ctp-surface0);
			border-right: var(--cds-spacing-01) solid var(--ctp-surface0);
			border-bottom: var(--cds-spacing-01) solid var(--ctp-surface0);
			border-radius: 0px 0px 10px 10px;
			box-shadow: 0px 0px 32px #00000080;
		}
	}

	.header {
		border-bottom: var(--cds-spacing-01) solid var(--ctp-surface0);
		top: 0;
		position: static;
		transition: top motion.$duration-fast-02 motion.motion(standard, productive);
		z-index: 1;
	}

	.sticky {
		position: -webkit-sticky; /* For Safari */
		position: sticky;
		top: 0;
		z-index: 1000; /* Ensure it stays above other content */
	}

	.header-hidden {
		position: absolute;
		top: -3rem; /* Match the height of the header */
	}

	.none {
		position: relative;
		background-attachment: fixed;
		background-position: top;
		background-repeat: repeat;
		padding-bottom: var(--cds-spacing-08);
	}

	.none:before {
		content: ' ';
		display: block;
		position: absolute;
		left: 0;
		top: 0;
		width: 100%;
		height: 100%;
		opacity: 0.9;
		background-image: url('$lib/client/images/background/noise.webp');
		background-size: 5%;
	}

	.none-light {
		position: relative;
		background-attachment: fixed;
		background-position: top;
		background-repeat: repeat;
		padding-bottom: var(--cds-spacing-08);
	}

	.none-light:before {
		content: ' ';
		display: block;
		position: absolute;
		left: 0;
		top: 0;
		width: 100%;
		height: 100%;
		opacity: 0.9;
		background-image: url('$lib/client/images/background/noise-light.webp');
		background-size: 5%;
	}

	.background {
		position: relative;
		background-attachment: fixed;
		background-position: top;
		background-repeat: repeat;
		padding-bottom: var(--cds-spacing-08);
		background-size: 10%;
	}

	.background-light {
		position: relative;
		background-attachment: fixed;
		background-position: top;
		background-repeat: repeat;
		padding-bottom: var(--cds-spacing-08);
		background-size: 10%;
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
		background-size: 5%;
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
		background-size: 5%;
	}
</style>
