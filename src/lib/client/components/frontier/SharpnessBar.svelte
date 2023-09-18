<!--
  ~ © 2023 Doriel Rivalet
  ~ Use of this source code is governed by a MIT license that can be
  ~ found in the LICENSE file.
-->

<script lang="ts">
	import type { FrontierWeaponSharpness } from '$lib/client/modules/frontier/types';
	import { frontierColorNames } from '$lib/client/themes/frontier-colors';

	export let sharpnessValues: FrontierWeaponSharpness = [
		10, 20, 30, 40, 50, 60, 70, 80,
	];
	/** Shows the boost border effect.*/
	export let sharpnessBoost: boolean = true;

	$: barClassStyle = sharpnessBoost ? 'boostedBar' : 'bar';
</script>

<div class="container">
	{#if sharpnessBoost}
		<div class="triangle-left" />
	{/if}
	<div class={barClassStyle}>
		{#each sharpnessValues as value, i}
			<div
				style="background-color: var({frontierColorNames[0].values[i]
					.var}); width: {value}px; height: 100%"
			/>
		{/each}
	</div>
	{#if sharpnessBoost}
		<div class="triangle-right" />
	{/if}
</div>

<style>
	.container {
		display: flex;
		align-items: center; /* Vertically center arrows with bars */
		gap: 0;
	}

	.bar {
		display: flex;
		border: 2px solid black;
		height: 100%;
		width: 100%;
	}

	.boostedBar {
		display: flex;
		border: 2px solid black;
		height: 100%;
		width: 100%;
		outline: 2px solid var(--fz-sharpness-cyan);
	}

	.triangle-left {
		width: 0;
		height: 0;
		margin-right: -0.05rem;
		border-top: 5px solid transparent;
		border-right: 10px solid var(--fz-sharpness-cyan);
		border-bottom: 5px solid transparent;
		transform: scale(0.5, 2.2);
	}

	.triangle-right {
		width: 0;
		height: 0;
		margin-left: -0.05rem;
		border-top: 5px solid transparent;
		border-left: 10px solid var(--fz-sharpness-cyan);
		border-bottom: 5px solid transparent;
		transform: scale(0.5, 2.2);
	}
</style>
