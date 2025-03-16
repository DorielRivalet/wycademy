<script lang="ts">
	// TODO css injected?
	import TextWithIconServer from './TextWithIconServer.svelte';
	import { StatusIcons } from '$lib/client/modules/frontier/ailments';
	import { ElementIcons } from '$lib/client/modules/frontier/elements';
	import { getItemIcon, ItemColors } from '$lib/client/modules/frontier/items';
	import { RarityColors } from '$lib/client/modules/frontier/objects';
	import {
		getTowerWeaponIconColor,
		getTowerWeaponInfo,
		getTowerWeaponMaxAffinityIndex,
		getTowerWeaponMaxAttackIndex,
		getTowerWeaponMaxElementIndex,
		getTowerWeaponMaxParalysisIndex,
		getTowerWeaponMaxPoisonIndex,
		getTowerWeaponMaxSharpnessLevel,
		getTowerWeaponMaxSleepIndex,
		getTowerWeaponSeriesInfo,
		isTowerWeaponExceedingMaxCost,
	} from '$lib/client/modules/frontier/tower-weapons';
	import { getWeaponIcon } from '$lib/client/modules/frontier/weapons';
	import type { FrontierWeaponName } from 'ezlion';
	import { findClosestIndex } from '$lib/client/modules/math';

	interface Props {
		towerWeaponName: string;
		towerWeaponType: FrontierWeaponName;

		towerWeaponAffinityValue: number;
		towerWeaponAttackValue: number;
		towerWeaponElementValue: number;
		towerWeaponPoisonValue: number;
		towerWeaponParalysisValue: number;
		towerWeaponSleepValue: number;
		towerWeaponSharpnessLevel: number;

		towerWeaponBowCharge1Level: string;
		towerWeaponBowCharge2Level: string;
		towerWeaponBowCharge3Level: string;
		towerWeaponBowCharge4Level: string;

		towerWeaponGunlanceShellLevel: string; // TODO to number?
		towerWeaponReloadSpeedValue: string;
		towerWeaponRecoilValue: string;

		towerWeaponSharpnessIndex: number; // not value

		towerWeaponTotalCost: number;
		towerWeaponTotalGems: {
			courage: number;
			glittering: number;
			divine: number;
		};
	}

	let {
		towerWeaponTotalCost,
		towerWeaponTotalGems,
		towerWeaponSharpnessLevel,
		towerWeaponAttackValue,
		towerWeaponElementValue,
		towerWeaponPoisonValue,
		towerWeaponParalysisValue,
		towerWeaponSleepValue,
		towerWeaponAffinityValue,
		towerWeaponSharpnessIndex,
		towerWeaponGunlanceShellLevel,
		towerWeaponReloadSpeedValue,
		towerWeaponRecoilValue,
		towerWeaponBowCharge1Level,
		towerWeaponBowCharge2Level,
		towerWeaponBowCharge3Level,
		towerWeaponBowCharge4Level,
		towerWeaponName,
		towerWeaponType,
	}: Props = $props();

	let towerWeaponSelected = $derived(
		getTowerWeaponInfo(towerWeaponName, towerWeaponType),
	);

	let towerWeaponSeries = $derived(
		getTowerWeaponSeriesInfo(towerWeaponSelected.series),
	);

	let iconColor = $derived(getTowerWeaponIconColor(towerWeaponSelected.series));

	let towerWeaponAttackIndex = $derived(
		findClosestIndex(towerWeaponSelected.attack, towerWeaponAttackValue),
	);

	let towerWeaponElementIndex = $derived(
		findClosestIndex(towerWeaponSelected.element, towerWeaponElementValue),
	);

	let towerWeaponParalysisIndex = $derived(
		findClosestIndex(towerWeaponSelected.paralysis, towerWeaponParalysisValue),
	);

	let towerWeaponPoisonIndex = $derived(
		findClosestIndex(towerWeaponSelected.poison, towerWeaponPoisonValue),
	);

	let towerWeaponSleepIndex = $derived(
		findClosestIndex(towerWeaponSelected.sleep, towerWeaponSleepValue),
	);

	let towerWeaponAffinityIndex = $derived(
		findClosestIndex(towerWeaponSelected.affinity, towerWeaponAffinityValue),
	);

	let towerWeaponExceedsMaxCost = $derived(
		isTowerWeaponExceedingMaxCost(towerWeaponSeries, towerWeaponTotalCost),
	);

	let towerWeaponMaxAttackIndex = $derived(
		getTowerWeaponMaxAttackIndex(towerWeaponSelected),
	);
	let towerWeaponMaxElementIndex = $derived(
		getTowerWeaponMaxElementIndex(towerWeaponSelected),
	);
	let towerWeaponMaxAffinityIndex = $derived(
		getTowerWeaponMaxAffinityIndex(towerWeaponSelected),
	);
	let towerWeaponMaxPoisonIndex = $derived(
		getTowerWeaponMaxPoisonIndex(towerWeaponSelected),
	);
	let towerWeaponMaxParalysisIndex = $derived(
		getTowerWeaponMaxParalysisIndex(towerWeaponSelected),
	);
	let towerWeaponMaxSleepIndex = $derived(
		getTowerWeaponMaxSleepIndex(towerWeaponSelected),
	);
	let towerWeaponMaxSharpnessLevel = $derived(
		getTowerWeaponMaxSharpnessLevel(towerWeaponSeries),
	);
</script>

{#snippet iconSnippet()}
	{@const SvelteComponent_1 = getWeaponIcon(towerWeaponType)}
	<SvelteComponent_1 {...{ color: iconColor, size: '64px' }} />
{/snippet}

<div
	style="display:flex; flex-direction: column; display: flex;
		flex-direction: column;
		align-items: center;
		gap: 2rem;
		margin: 1rem 0rem;
		border: 2px solid #313244;
		background: #181825;
		padding: 1rem;

		border-radius: 4px;
		color: #cdd6f4;
		font-size: 48px;"
>
	<div
		style={towerWeaponExceedsMaxCost
			? 'color: #f38ba8;display:flex;justify-content: center;align-items: center;'
			: 'color: #cdd6f4;display:flex;justify-content: center;align-items: center;'}
	>
		<div style="display:flex;">
			<strong>Total Cost: {towerWeaponTotalCost}</strong>
		</div>
	</div>
	<div
		style="display:flex; display: flex;
		flex-direction: row;
		gap: 1rem;
		font-size: 1rem;
		justify-content: center;
		text-align: center;
		flex-wrap: wrap;"
	>
		<div style="display:flex;">
			<TextWithIconServer
				text={`${towerWeaponTotalGems.courage} Courage Gems`}
				icon={getItemIcon('Ball')}
				iconColor={ItemColors.find((e) => e.name === 'Red')?.value}
				iconSize={'48px'}
			/>
		</div>
		<div style="display:flex;">
			<TextWithIconServer
				text={`${towerWeaponTotalGems.glittering} Glittering Gems`}
				icon={getItemIcon('Ball')}
				iconColor={RarityColors[5]}
				iconSize={'48px'}
			/>
		</div>
		<div style="display:flex;">
			<TextWithIconServer
				text={`${towerWeaponTotalGems.divine} Divine Gems`}
				icon={getItemIcon('Ball')}
				iconColor={RarityColors[3]}
				iconSize={'48px'}
			/>
		</div>
	</div>
	<div
		style="display:flex; width: 100%;
		display: flex;
		flex-direction: row;
		justify-content: center;
		align-items: center;
		gap: 1rem;
		font-size: 1rem;
		text-align: center;
		vertical-align: bottom;
		flex-wrap: wrap;"
	>
		<div style="display:flex;">
			<TextWithIconServer
				text={`${towerWeaponAttackValue} Attack (${towerWeaponAttackIndex !== towerWeaponMaxAttackIndex ? towerWeaponAttackIndex : 'MAX'})`}
				iconSize={'48px'}
				icon={getItemIcon('Knife')}
				iconColor={ItemColors.find((e) => e.name === 'Red')?.value}
			/>
		</div>
		{#if towerWeaponElementValue > 0}
			<div style="display:flex;">
				<TextWithIconServer
					text={`${towerWeaponElementValue * 10} Element (${towerWeaponElementIndex !== towerWeaponMaxElementIndex ? towerWeaponElementIndex : 'MAX'})`}
					iconSize={'48px'}
					icon={ElementIcons.find((e) => e.name === 'Dragon')?.icon}
				/>
			</div>
		{/if}
		{#if towerWeaponPoisonValue > 0}
			<div style="display:flex;">
				<TextWithIconServer
					text={`${towerWeaponPoisonValue * 10} Status (${towerWeaponPoisonIndex !== towerWeaponMaxPoisonIndex ? towerWeaponPoisonIndex : 'MAX'})`}
					iconSize={'48px'}
					icon={StatusIcons.find((e) => e.name === 'Poison')?.icon}
				/>
			</div>
		{:else if towerWeaponParalysisValue > 0}
			<div style="display:flex;">
				<TextWithIconServer
					text={`${towerWeaponParalysisValue * 10} Status (${towerWeaponParalysisIndex !== towerWeaponMaxParalysisIndex ? towerWeaponParalysisIndex : 'MAX'})`}
					iconSize={'48px'}
					icon={StatusIcons.find((e) => e.name === 'Paralysis')?.icon}
				/>
			</div>
		{:else if towerWeaponSleepValue > 0}
			<div style="display:flex;">
				<TextWithIconServer
					text={`${towerWeaponSleepValue * 10} Status (${towerWeaponSleepIndex !== towerWeaponMaxSleepIndex ? towerWeaponSleepIndex : 'MAX'})`}
					iconSize={'48px'}
					icon={StatusIcons.find((e) => e.name === 'Sleep')?.icon}
				/>
			</div>
		{/if}
		{#if towerWeaponAffinityValue > 0}
			<div style="display:flex;">
				<TextWithIconServer
					text={`${towerWeaponAffinityValue}% Affinity (${towerWeaponAffinityIndex !== towerWeaponMaxAffinityIndex ? towerWeaponAffinityIndex : 'MAX'})`}
					iconSize={'48px'}
					icon={getItemIcon('Knife')}
					iconColor={ItemColors.find((e) => e.name === 'Cyan')?.value}
				/>
			</div>
		{/if}
		{#if towerWeaponSharpnessLevel > 0}
			<div style="display:flex;">
				<TextWithIconServer
					text={`Sharpness LV${towerWeaponSharpnessIndex !== towerWeaponMaxSharpnessLevel ? towerWeaponSharpnessIndex : ' MAX'}`}
					iconColor={ItemColors.find((e) => e.name === 'Yellow')?.value}
					iconSize={'48px'}
					icon={getItemIcon('Whetstone')}
				/>
			</div>
		{/if}
		{#if towerWeaponGunlanceShellLevel !== '0'}
			<div style="display:flex;">
				<TextWithIconServer
					text={`Shell LV${parseInt(towerWeaponGunlanceShellLevel) !== 8 ? parseInt(towerWeaponGunlanceShellLevel) + 1 : ' MAX'}`}
					iconSize={'48px'}
					icon={getWeaponIcon('Gunlance')}
				/>
			</div>
		{/if}
		{#if towerWeaponReloadSpeedValue !== 'Very Slow'}
			<div style="display:flex;">
				<TextWithIconServer
					text={`${towerWeaponReloadSpeedValue} Reload`}
					iconSize={'48px'}
					icon={getItemIcon('Shot')}
				/>
			</div>
		{/if}
		{#if towerWeaponRecoilValue !== 'Max'}
			<div style="display:flex;">
				<TextWithIconServer
					text={`${towerWeaponRecoilValue} Recoil`}
					iconSize={'48px'}
					icon={getItemIcon('Shot')}
				/>
			</div>
		{/if}
		{#if towerWeaponBowCharge1Level !== '1'}
			<div style="display:flex;">
				<TextWithIconServer
					text={`Charge 1 LV${towerWeaponBowCharge1Level !== '4' ? towerWeaponBowCharge1Level : ' MAX'}`}
					iconSize={'48px'}
					icon={getWeaponIcon('Bow')}
				/>
			</div>
		{/if}
		{#if towerWeaponBowCharge2Level !== '1'}
			<div style="display:flex;">
				<TextWithIconServer
					text={`Charge 2 LV${towerWeaponBowCharge2Level !== '4' ? towerWeaponBowCharge2Level : ' MAX'}`}
					iconSize={'48px'}
					icon={getWeaponIcon('Bow')}
				/>
			</div>
		{/if}
		{#if towerWeaponBowCharge3Level !== '1'}
			<div style="display:flex;">
				<TextWithIconServer
					text={`Charge 3 LV${towerWeaponBowCharge3Level !== '4' ? towerWeaponBowCharge3Level : ' MAX'}`}
					iconSize={'48px'}
					icon={getWeaponIcon('Bow')}
				/>
			</div>
		{/if}
		{#if towerWeaponBowCharge4Level !== '1'}
			<div style="display:flex;">
				<TextWithIconServer
					text={`Charge 4 LV${towerWeaponBowCharge4Level !== '4' ? towerWeaponBowCharge4Level : ' MAX'}`}
					iconSize={'48px'}
					icon={getWeaponIcon('Bow')}
				/>
			</div>
		{/if}
	</div>
	<div
		style="display:flex; width: 100%;
		display: flex;
		flex-wrap: wrap;
		justify-content: center;
		align-items: center;
		gap: 1rem;
		font-size: 48px;"
	>
		{#key iconColor}
			{@render iconSnippet()}

			<strong>{towerWeaponName}</strong>
		{/key}
	</div>
</div>
