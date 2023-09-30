<!--
  ~ © 2023 Doriel Rivalet
  ~ Use of this source code is governed by a MIT license that can be
  ~ found in the LICENSE file.
-->

<script lang="ts">
	import { browser } from '$app/environment';
	import {
		frontierChecks,
		frontierMappers,
	} from '$lib/client/modules/frontier/functions';
	import type { FrontierWeaponSharpness } from '$lib/client/modules/frontier/types';
	import { frontierColorNames } from '$lib/client/themes/frontier-colors';
	import Popover from 'carbon-components-svelte/src/Popover/Popover.svelte';

	export let sharpnessValues: FrontierWeaponSharpness = [
		170, 170, 170, 170, 170, 200, 250, 400,
	];
	/** Shows the boost border effect.*/
	export let sharpnessBoost = true;

	function setSharpnessWidths(values: FrontierWeaponSharpness) {
		const isValid = frontierChecks.isValidSharpness(values);
		if (isValid) {
			const mappedValues = frontierMappers.mapSharpnessValues(values);
			const sumSharpness = mappedValues.reduce((acc, val) => acc + val, 0);
			if (sumSharpness < 400) {
				const result = [...mappedValues, 400 - sumSharpness];
				return result;
			} else {
				const result = [...mappedValues];
				return result;
			}
		} else {
			console.warn('Could not set sharpness widths, setting default values');
			return [0, 0, 0, 0, 0, 0, 0, 0];
		}
	}

	function handleFocus() {
		if (!browser) return;

		open = !open;
		popoverContent = `Red: ${sharpnessValues[0]} | Orange: ${sharpnessValues[1]} | Yellow: ${sharpnessValues[2]} | Green: ${sharpnessValues[3]} | Blue: ${sharpnessValues[4]} | White: ${sharpnessValues[5]} | Purple: ${sharpnessValues[6]} | Cyan: ${sharpnessValues[7]}`;
	}

	let open = false;
	let ref: HTMLDivElement | null = null;
	let popoverContent = open.toString();

	$: barClassStyle = sharpnessBoost ? 'boosted-bar' : 'bar';
	$: borderClassStyleLeft = sharpnessBoost
		? 'boosted-border-left'
		: 'border-left';
	$: borderClassStyleRight = sharpnessBoost
		? 'boosted-border-right'
		: 'border-right';
	$: sharpnessWidths = setSharpnessWidths(sharpnessValues);
	$: boostNumberClass = sharpnessBoost ? 'boosted-number' : 'invisible';
</script>

<div class="container">
	<div class={borderClassStyleLeft} />

	<div
		class={barClassStyle}
		bind:this={ref}
		style:position="relative"
		on:click={(e) => handleFocus()}
		role="button"
		tabindex="0"
		on:keypress={(e) => handleFocus()}
	>
		{#each sharpnessWidths as width, i}
			<div
				style="background-color: {i <= 7
					? `var(${frontierColorNames[0].values[i].var})`
					: '#000'}; width: {(width * 100) / 400}%; height: 100%;"
			/>
		{/each}
		<Popover
			bind:open
			align="bottom-left"
			on:click:outside={({ detail }) => {
				open = ref?.contains(detail.target) || false;
			}}
		>
			<div
				style="padding: var(--cds-spacing-03); font-family: var(--font-body); font-size: 1rem;"
			>
				{popoverContent}
			</div>
		</Popover>
	</div>
	<div class={borderClassStyleRight} />
	<div class={boostNumberClass}>+1</div>
</div>

<style>
	.container {
		display: flex;
		align-items: center; /* Vertically center arrows with bars */
		gap: 0;
		grid-area: bar;
		justify-content: end;
	}

	.bar {
		display: flex;
		border: var(--cds-spacing-01) solid black;
		height: 100%;
		width: 17ch;
		outline: var(--cds-spacing-01) solid var(--fz-sharpness-border);
	}

	.boosted-bar {
		display: flex;
		border: var(--cds-spacing-01) solid black;
		height: 100%;
		width: 17ch;
		outline: var(--cds-spacing-01) solid var(--fz-text-cyan);
	}

	.border-left {
		width: 0;
		height: 0;
		margin-right: -0.05rem;
		border-top: 5px solid transparent;
		border-right: 10px solid var(--fz-sharpness-border);
		border-bottom: 5px solid transparent;
		transform: scale(0.5, 2.2);
	}

	.border-right {
		width: 0;
		height: 0;
		margin-left: -0.05rem;
		border-top: 5px solid transparent;
		border-left: 10px solid var(--fz-sharpness-border);
		border-bottom: 5px solid transparent;
		transform: scale(0.5, 2.2);
	}

	.boosted-border-left {
		width: 0;
		height: 0;
		margin-right: -0.05rem;
		border-top: 5px solid transparent;
		border-right: 10px solid var(--fz-text-cyan);
		border-bottom: 5px solid transparent;
		transform: scale(0.5, 2.2);
	}

	.boosted-border-right {
		width: 0;
		height: 0;
		margin-left: -0.05rem;
		border-top: 5px solid transparent;
		border-left: 10px solid var(--fz-text-cyan);
		border-bottom: 5px solid transparent;
		transform: scale(0.5, 2.2);
	}

	.text-cyan {
		margin-left: var(--cds-spacing-02);
		color: var(--fz-text-cyan);
	}

	.boosted-number {
		margin-left: var(--cds-spacing-02);
		color: var(--fz-text-cyan);
	}

	.invisible {
		margin-left: var(--cds-spacing-02);
		color: var(--fz-text-cyan);
		opacity: 0;
	}
</style>
