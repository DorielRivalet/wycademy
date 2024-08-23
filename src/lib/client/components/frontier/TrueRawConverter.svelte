<script lang="ts">
	import { WeaponTypes } from '$lib/client/modules/frontier/weapons';
	import Dropdown from 'carbon-components-svelte/src/Dropdown/Dropdown.svelte';
	import NumberInput from 'carbon-components-svelte/src/NumberInput/NumberInput.svelte';
	import type { FrontierWeaponName } from 'ezlion';

	export let value: number;
	export let weaponType: FrontierWeaponName;
	export let showWeapon = false;

	const minimumNumberValue = 0;
	const maximumNumberValue = 99999;
	const invalidNumberValueText = `Invalid value. Must be between ${minimumNumberValue} and ${maximumNumberValue}`;
</script>

<div class="true-raw-converter">
	<p>Attack Display Value to True Raw Converter:</p>
	<div class="flex-row-centered">
		{#if showWeapon}
			<Dropdown
				titleText="Weapon Type"
				bind:selectedId={weaponType}
				items={[
					{
						id: 'Sword and Shield',
						text: 'Sword and Shield',
					},
					{ id: 'Dual Swords', text: 'Dual Swords' },
					{ id: 'Great Sword', text: 'Great Sword' },
					{ id: 'Long Sword', text: 'Long Sword' },
					{ id: 'Hammer', text: 'Hammer' },
					{ id: 'Hunting Horn', text: 'Hunting Horn' },
					{ id: 'Lance', text: 'Lance' },
					{ id: 'Gunlance', text: 'Gunlance' },
					{ id: 'Tonfa', text: 'Tonfa' },
					{ id: 'Switch Axe F', text: 'Switch Axe F' },
					{ id: 'Magnet Spike', text: 'Magnet Spike' },
					{ id: 'Light Bowgun', text: 'Light Bowgun' },
					{ id: 'Heavy Bowgun', text: 'Heavy Bowgun' },
					{ id: 'Bow', text: 'Bow' },
				]}
			/>{/if}
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
