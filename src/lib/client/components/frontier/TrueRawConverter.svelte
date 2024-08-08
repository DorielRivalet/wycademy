<script lang="ts">
	import { WeaponTypes } from '$lib/client/modules/frontier/weapons';
	import NumberInput from 'carbon-components-svelte/src/NumberInput/NumberInput.svelte';
	import type { FrontierWeaponName } from 'ezlion';

	export let value: number;
	export let weaponType: FrontierWeaponName;

	const minimumNumberValue = 0;
	const maximumNumberValue = 99999;
	const invalidNumberValueText = `Invalid value. Must be between ${minimumNumberValue} and ${maximumNumberValue}`;
</script>

<div class="true-raw-converter">
	<p>Attack Display Value to True Raw Converter:</p>
	<div class="flex-row-centered">
		<div class="number-input-container">
			<NumberInput
				size="sm"
				step={10}
				min={minimumNumberValue}
				max={maximumNumberValue}
				bind:value
				invalidText={invalidNumberValueText}
				label={'Weapon Attack Display Value'}
			/>
		</div>
		<p>
			True Raw: {Math.floor(
				value /
					(WeaponTypes.find((e) => e.name === weaponType)
						?.bloatAttackMultiplier ?? 1),
			)}
		</p>
	</div>
</div>

<style lang="scss">
	.true-raw-converter {
		display: flex;
		flex-direction: column;
		gap: 0.5rem;
		margin-bottom: 2rem;
		margin-top: 2rem;
	}

	.flex-row-centered {
		display: flex;
		gap: 1rem;
		flex-wrap: wrap;
		align-items: center;
	}

	.number-input-container {
		margin-right: 1rem;
	}
</style>
