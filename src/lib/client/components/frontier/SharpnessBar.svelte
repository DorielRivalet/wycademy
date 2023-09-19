<!--
  ~ © 2023 Doriel Rivalet
  ~ Use of this source code is governed by a MIT license that can be
  ~ found in the LICENSE file.
-->

<script lang="ts">
	import {
		frontierChecks,
		frontierMappers,
	} from '$lib/client/modules/frontier/functions';
	import type { FrontierWeaponSharpness } from '$lib/client/modules/frontier/types';
	import { frontierColorNames } from '$lib/client/themes/frontier-colors';

	export let sharpnessValues: FrontierWeaponSharpness = [
		170, 170, 170, 170, 170, 200, 250, 400,
	];
	/** Shows the boost border effect.*/
	export let sharpnessBoost = true;

	function setSharpnessWidths(values: FrontierWeaponSharpness) {
		if (frontierChecks.isValidSharpness(values)) {
			const mappedValues = frontierMappers.mapSharpnessValues(values);
			let sumSharpness = mappedValues.reduce((acc, val) => acc + val, 0);
			if (sumSharpness < 400) {
				return [...mappedValues, 400 - sumSharpness];
			} else {
				return [...mappedValues];
			}
		} else {
			return [170, 0, 0, 0, 0, 30, 50, 100];
		}
	}

	$: barClassStyle = sharpnessBoost ? 'boostedBar' : 'bar';

	$: sharpnessWidths = setSharpnessWidths(sharpnessValues);
</script>

{@debug sharpnessWidths}
{@debug sharpnessValues}

<div class="container">
	{#if sharpnessBoost}
		<div class="triangle-left" />
	{/if}
	<div class={barClassStyle}>
		{#each sharpnessWidths as width, i}
			<div
				style="background-color: {i <= 7
					? `var(${frontierColorNames[0].values[i].var}); `
					: '#000; '} width: {(width * 100) / 400}%; height: 100%"
			/>
		{/each}
	</div>
	{#if sharpnessBoost}
		<div class="triangle-right" />
		<div class="text-cyan">+1</div>
	{/if}
</div>

<style>
	.container {
		display: flex;
		align-items: center; /* Vertically center arrows with bars */
		gap: 0;
		grid-area: bar;
	}

	.bar {
		display: flex;
		border: var(--cds-spacing-01) solid black;

		height: 100%;
		width: 18ch;
	}

	.boostedBar {
		display: flex;
		border: var(--cds-spacing-01) solid black;
		height: 100%;
		width: 18ch;
		outline: var(--cds-spacing-01) solid var(--fz-text-cyan);
	}

	.triangle-left {
		width: 0;
		height: 0;
		margin-right: -0.05rem;
		border-top: 5px solid transparent;
		border-right: 10px solid var(--fz-text-cyan);
		border-bottom: 5px solid transparent;
		transform: scale(0.5, 2.2);
	}

	.triangle-right {
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
</style>
