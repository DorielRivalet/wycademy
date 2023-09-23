<!--
  ~ © 2023 Doriel Rivalet
  ~ Use of this source code is governed by a MIT license that can be
  ~ found in the LICENSE file.
-->

<script lang="ts">
	import { WeaponTypes } from '$lib/client/modules/frontier/objects';
	import type {
		FrontierElement,
		FrontierEquipmentRank,
		FrontierRarity,
		FrontierStatus,
		FrontierWeaponID,
		FrontierWeaponLength,
		FrontierWeaponSharpness,
	} from '$lib/client/modules/frontier/types';
	import ArrowIcon from '$lib/client/components/frontier/icon/ArrowIcon.svelte';

	import FrontierWeaponSharpnessBar from '$lib/client/components/frontier/SharpnessBar.svelte';
	import DecoratedBorder from './DecoratedBorder.svelte';
	import { stringReplacements } from '$lib/client/modules/frontier/functions';
	import GRankWeaponIcon from './icon/GRankWeaponIcon.svelte';
	import ZenithWeaponIcon from './icon/ZenithWeaponIcon.svelte';

	/** Truncated to 18 characters.*/
	export let name: string = 'Name';

	/** From 1 to 100.*/
	export let level: number = 100;
	export let weaponType: FrontierWeaponID = 0;
	export let attack: number = 100;
	export let elementValue: number = 0;
	export let statusValue: number = 0;
	export let element: FrontierElement = 'Fire';
	export let status: FrontierStatus = 'Poison';
	export let length: FrontierWeaponLength = 'V. Long';
	export let sharpnessValues: FrontierWeaponSharpness = [
		170, 170, 170, 170, 170, 200, 250, 400,
	];

	/** Whether to show the boosted color.*/
	export let sharpnessBoost: boolean = true;

	/** Whether to show the boosted color.*/
	export let elementBoost: boolean = true;

	/** Whether to show the boosted color.*/
	export let statusBoost: boolean = true;

	/** Whether to show the boosted color.*/
	export let attackBoost: boolean = true;

	/** The overlay icon in the bottom left corner.*/
	export let rank: FrontierEquipmentRank = 'G';

	// TODO ids
	export let zenithSkill: string = 'Skills Slots Up+1';

	// page 2
	export let description: string = 'Description.';
	export let rarity: FrontierRarity = 12;
	export let affinity: number = 0;
	/** TODO The size of the component. Compact uses icons.*/
	export let compact = false;
	/**
	 * Set theme to light.
	 */
	export let light = false;

	const weaponClass = WeaponTypes[weaponType].class;
	const weaponTypeName = WeaponTypes[weaponType].name;

	let nameColor: string = stringReplacements.colorFromRarity(rarity);
	let weaponIconProps = {
		rarity: rarity,
	};
	// TODO gunner
	// TODO pages
	// TODO sigils, decos
	// TODO types

	// TODO defense
	// TODO gou/automatic
</script>

<DecoratedBorder>
	<div class="container">
		<div class="page-1">
			<div class="header">
				<div class="weapon-icon-container">
					<div class="weapon-icon">
						<svelte:component
							this={WeaponTypes[weaponType].icon}
							{...weaponIconProps}
						/>
					</div>
					<div class="weapon-rank">
						{#if rank === 'G' && rarity >= 1 && rarity <= 12}
							<GRankWeaponIcon {rarity} />
						{:else if rank === 'Z' && rarity >= 1 && rarity <= 12}
							<ZenithWeaponIcon {rarity} />
						{/if}
					</div>
				</div>
				<div class="weapon-name">
					<div style="color: var({nameColor});">{name}</div>
				</div>
				<div class="weapon-level-container">
					<div class="weapon-level">
						{#if level >= 1 && level <= 100}Lv. {level}{/if}
					</div>
				</div>
			</div>
			<div class="attack">
				<span class="text-yellow">Attack: </span>
				<span
					style="color: {attackBoost
						? 'var(--fz-text-cyan)'
						: 'var(--ctp-text)'};">{attack}</span
				>
			</div>
			<div class="length">
				<span class="text-yellow">Length: </span>{length}
			</div>
			<div class="sharpness">Sharpness</div>
			<FrontierWeaponSharpnessBar {sharpnessValues} {sharpnessBoost} />
			<div class="element">
				{#if element !== ''}
					{element}:
					<span
						style="color: {elementBoost
							? 'var(--fz-text-cyan)'
							: 'var(--ctp-text)'};">{elementValue}</span
					>
				{/if}
			</div>
			<div class="zenith">
				{#if zenithSkill !== ''}
					<span class="double-width">«</span>{zenithSkill}<span
						class="double-width">»</span
					>
				{/if}
			</div>
			<div class="status">
				{#if status !== ''}
					{status}:
					<span
						style="color: {statusBoost
							? 'var(--fz-text-cyan)'
							: 'var(--ctp-text)'};">{statusValue}</span
					>
				{/if}
			</div>
			<div class="pages">
				<ArrowIcon style="transform: scaleX(-1);" fill="var(--fz-text-green)" />
				1/6
				<ArrowIcon fill="var(--fz-text-green)" />
			</div>
		</div>
	</div>
</DecoratedBorder>

<style>
	.double-width {
		transform: scaleX(2);
		display: inline-block;
		margin-right: var(--cds-spacing-02);
		margin-left: var(--cds-spacing-02);
	}

	.text-yellow {
		color: var(--fz-text-yellow);
	}

	.weapon-name {
		display: flex;
		align-items: center; /* Center vertically */
		justify-content: start; /* Center horizontally */
		height: 100%; /* Ensure the container takes up the full height */
		width: 100%;
	}

	.weapon-icon-container {
		position: relative;
		display: inline-block;
	}

	.weapon-icon {
		position: relative;
		width: var(--cds-spacing-10);
		height: var(--cds-spacing-9);
		transform: scale(80%) translateY(-5px) translateX(5px);
	}

	.weapon-level-container {
		position: absolute;
		top: var(--cds-spacing-04);
		right: var(--cds-spacing-04);
	}

	.weapon-rank {
		position: absolute;
		bottom: 0;
		width: 16px;
		height: auto;
	}

	.weapon-rank {
		left: 0;
	}

	.zenith {
		color: var(--fz-rare-12);
		text-align: end;
	}

	.weapon-level {
		text-align: end;
	}

	.header {
		grid-area: header;
		display: flex;
		margin: 0px;
		padding: 0px;
		flex-direction: row;
		gap: 1rem;
	}

	.attack {
		grid-area: attack;
	}

	.length {
		text-align: center;
		grid-area: length;
	}

	.sharpness {
		color: var(--fz-text-yellow);
		grid-area: sharpness;
	}

	.element {
		grid-area: element;
	}

	.zenith {
		grid-area: zenith;
	}

	.status {
		grid-area: status;
	}

	.pages {
		text-align: end;
		grid-area: pages;
	}

	.page-1 {
		display: grid;
		grid-template-areas:
			'header header header'
			'attack length length'
			'sharpness bar bar'
			'element zenith zenith'
			'status pages pages';
		gap: 0.5rem;
	}

	.container {
		padding: 0.5rem;
		background-color: #11111b;
		aspect-ratio: 2.5;
		color: var(--ctp-mocha-text);
		font-family: var(--font-game);
		font-size: 18px;
		font-weight: 500;
	}
</style>
