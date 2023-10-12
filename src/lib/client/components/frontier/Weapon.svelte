<!--
  ~ © 2023 Doriel Rivalet
  ~ Use of this source code is governed by a MIT license that can be
  ~ found in the LICENSE file.
-->

<!--
@component
Does not handle decorations because sigils are optimal.
-->
<script lang="ts">
	import { WeaponTypes } from '$lib/client/modules/frontier/objects';
	import type {
		FrontierArmorSkillTree,
		FrontierElement,
		FrontierEquipmentRank,
		FrontierRarity,
		FrontierSigil,
		FrontierStatus,
		FrontierSwitchAxeFPhial,
		FrontierWeaponID,
		FrontierWeaponLength,
		FrontierWeaponSharpness,
		FrontierWeaponType,
	} from '$lib/client/modules/frontier/types';
	import ArrowIcon from '$lib/client/components/frontier/icon/ArrowIcon.svelte';

	import FrontierWeaponSharpnessBar from '$lib/client/components/frontier/SharpnessBar.svelte';
	import DecoratedBorder from './DecoratedBorder.svelte';
	import { stringReplacements } from '$lib/client/modules/frontier/functions';
	import GRankWeaponIcon from './icon/GRankWeaponIcon.svelte';
	import ZenithWeaponIcon from './icon/ZenithWeaponIcon2.svelte';
	import { frontierColorNames } from '$lib/client/themes/frontier-colors';
	import FireIcon from '$lib/client/images/icon/element/fire.png';
	import WaterIcon from '$lib/client/images/icon/element/water.png';
	import ThunderIcon from '$lib/client/images/icon/element/thunder.png';
	import IceIcon from '$lib/client/images/icon/element/ice.png';
	import DragonIcon from '$lib/client/images/icon/element/dragon.png';
	import BurningZeroIcon from '$lib/client/images/icon/element/burning_zero.png';
	import BlackFlameIcon from '$lib/client/images/icon/element/Element_Black_Flame.png';
	import BlazeIcon from '$lib/client/images/icon/element/Element_Blaze.png';
	import CrimsonDemonIcon from '$lib/client/images/icon/element/Element_Crimson_Demon.png';
	import DarkIcon from '$lib/client/images/icon/element/Element_Darkness.png';
	import EmperorsRoarIcon from "$lib/client/images/icon/element/Element_Emperor's_Roar.png";
	import OkikoIcon from '$lib/client/images/icon/element/Element_Frozen_Seraphim.png';
	import WindIcon from '$lib/client/images/icon/element/Element_Golden_Dust.png';
	import MusicIcon from '$lib/client/images/icon/element/Element_Kanade.png';
	import LightIcon from '$lib/client/images/icon/element/Element_Light.png';
	import SoundIcon from '$lib/client/images/icon/element/Element_Sound.png';
	import LightningRodIcon from '$lib/client/images/icon/element/Element_Thunder_Pole.png';
	import TenshouIcon from '$lib/client/images/icon/element/Element_Tenshou.png';
	import SleepIcon from '$lib/client/images/icon/status/sleep2.png';
	import PoisonIcon from '$lib/client/images/icon/status/poison.png';
	import ParalysisIcon from '$lib/client/images/icon/status/paralysis.png';
	import DefenseIcon from '$lib/client/images/icon/defense_icon.png';
	import BlastIcon from '$lib/client/images/icon/status/blast.png';

	/** Truncated to 18 characters.*/
	export let name: string = 'Name';

	/** From 1 to 100.*/
	export let level: number = 100;
	export let weaponID: FrontierWeaponID = 0;
	export let attack: number = 100;
	export let elementValue: number = 0;
	export let statusValue: number = 0;
	export let element: FrontierElement = 'Fire';
	export let status: FrontierStatus = 'Poison';
	export let length: FrontierWeaponLength = 'Very Long';
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

	/** Whether to show the boosted color.*/
	export let affinityBoost: boolean = true;

	/** The overlay icon in the bottom left corner.*/
	export let rank: FrontierEquipmentRank = 'G';

	// TODO ids
	export let zenithSkill: string = 'Skills Slots Up+1';

	// page 2
	export let description: string = 'Description.';
	export let rarity: FrontierRarity = 12;
	export let affinity: number = 0;

	/** Show extra icons.*/
	export let extraIcons = false;

	/**
	 * TODO Set theme to light.
	 */
	export let light = false;

	// TODO
	export let phial: FrontierSwitchAxeFPhial = 'Power';

	export let currentPage: number;

	export let skillNames: FrontierArmorSkillTree[] = [
		'Blazing Grace',
		'Strong Attack',
		'Determination',
		'Absolute Defense',
		'Three Worlds Protection',
	];
	export let skillPoints: number[] = [0, 20, -30, 40, 50];
	export let sigils: FrontierSigil[] = [
		'Attack Slayer',
		'Elemental Slayer',
		'Elemental Slayer',
		'Attack Slayer',
		'Attack Slayer',
		'Attack Slayer',
		'Elemental Slayer',
		'Elemental Slayer',
		'Elemental Slayer',
	];
	export let sigilPoints: number[] = [15, 20, -30, 40, 50, 15, 15, -15, 12];

	export let weaponType: FrontierWeaponType = 'Evolution';

	function getElementIcon(name: FrontierElement) {
		switch (name) {
			case 'Fire':
				return FireIcon;
			case 'Water':
				return WaterIcon;
			case 'Thunder':
				return ThunderIcon;
			case 'Ice':
				return IceIcon;
			case 'Dragon':
				return DragonIcon;
			case 'Light':
				return LightIcon;
			case 'Blaze':
				return BlazeIcon;
			case 'Tenshou':
				return TenshouIcon;
			case 'L. Rod':
				return LightningRodIcon;
			case 'Okiko':
				return OkikoIcon;
			case 'B. Flame':
				return BlackFlameIcon;
			case 'C. Demon':
				return CrimsonDemonIcon;
			case 'Dark':
				return DarkIcon;
			case 'Music':
				return MusicIcon;
			case 'Sound':
				return SoundIcon;
			case 'Wind':
				return WindIcon;
			case 'B. Zero':
				return BurningZeroIcon;
			case 'E. Roar':
				return EmperorsRoarIcon;
			default:
				return FireIcon;
		}
	}

	function getStatusIcon(name: FrontierStatus) {
		switch (name) {
			case 'Sleep':
				return SleepIcon;
			case 'Poison':
				return PoisonIcon;
			case 'Paralysis':
				return ParalysisIcon;
			case 'Def':
				return DefenseIcon;
			case 'Blast':
				return BlastIcon;
			default:
				return PoisonIcon;
		}
	}

	function nextPage() {
		if (currentPage >= maxPages) {
			currentPage = 1;
		} else {
			currentPage++;
		}
	}

	function previousPage() {
		if (currentPage >= 2) {
			currentPage--;
		} else {
			currentPage = maxPages;
		}
	}

	const weaponClass = WeaponTypes[weaponID].class;
	const maxNameLength = 24;
	const maxAttackLength = 5;
	const maxElementStatusLength = 5;

	let rarityColor: string = stringReplacements.colorFromRarity(rarity);
	let affinityColor: string = affinityBoost
		? frontierColorNames[2].values[1].var
		: '--ctp-text';

	let weaponIconProps = {
		rarity: rarity,
	};
	// TODO gunner
	// TODO slots
	// TODO hh/etc
	// TODO gou/automatic
	let maxPages = 6;
</script>

<DecoratedBorder>
	<div class="container">
		{#if currentPage === 1}
			<div class="page-1">
				<div class="header">
					<div class="weapon-icon-container">
						<div class="weapon-icon">
							<svelte:component
								this={WeaponTypes[weaponID].icon}
								{...weaponIconProps}
							/>
						</div>
						<div class="weapon-rank">
							{#if rank === 'G'}
								<GRankWeaponIcon />
							{:else if rank === 'Z'}
								<ZenithWeaponIcon />
							{/if}
						</div>
					</div>
					<div class="weapon-name">
						<div
							style="color: var({rarityColor}); overflow: hidden;white-space: nowrap; text-overflow: clip; max-width: 28ch;"
						>
							<span class="text-yellow double-width">:</span>{name.substring(
								0,
								maxNameLength,
							)}
						</div>
					</div>
					<div class="weapon-level-container">
						<div class="weapon-level">
							{#if level >= 1 && level <= 100}Lv.{level}{/if}
						</div>
					</div>
				</div>
				<div class="attack">
					<span class="text-yellow"
						>Attack<span class="text-yellow double-width">:</span><span
							style="color: {attackBoost
								? 'var(--fz-text-cyan)'
								: 'var(--ctp-text)'};"
							>{attack.toString().substring(0, maxAttackLength)}</span
						>
					</span>
				</div>
				<div class="length">
					<span class="text-yellow"
						>Length<span class="text-yellow double-width">:</span></span
					>{length}
				</div>
				<div class="sharpness">Sharpness</div>
				<FrontierWeaponSharpnessBar {sharpnessValues} {sharpnessBoost} />
				<div class="element">
					{#if element !== ''}
						{#if extraIcons}
							<img
								class="element-icon"
								alt="Element"
								src={getElementIcon(element)}
							/>
						{:else}
							{element}
						{/if}
						<span class="double-width">:</span><span
							style="color: {elementBoost
								? 'var(--fz-text-cyan)'
								: 'var(--ctp-text)'};"
							>{elementValue
								.toString()
								.substring(0, maxElementStatusLength)}</span
						>
					{/if}
				</div>
				<div class="zenith">
					{#if zenithSkill !== ''}
						<span class="double-width-transform">«</span>{zenithSkill}<span
							class="double-width-transform">»</span
						>
					{/if}
				</div>
				<div class="status">
					{#if status === 'Def'}
						{#if extraIcons}
							<img
								class="status-icon"
								alt="Status"
								src={getStatusIcon(status)}
							/>
						{:else}
							{status}
						{/if}
						{statusValue >= 0 ? '+' : ''}{statusValue
							.toString()
							.substring(0, maxElementStatusLength)}
					{:else if status !== ''}
						{#if extraIcons}
							<img
								class="status-icon"
								alt="Status"
								src={getStatusIcon(status)}
							/>
						{:else}
							{status}
						{/if}
						<span class="double-width">:</span><span
							style="color: {statusBoost
								? 'var(--fz-text-cyan)'
								: 'var(--ctp-text)'};"
							>{statusValue
								.toString()
								.substring(0, maxElementStatusLength)}</span
						>
					{/if}
				</div>
				<div class="pages">
					<button
						class="arrow-icon-button"
						on:click={previousPage}
						aria-label="Navigate to previous page"
					>
						<ArrowIcon
							style="transform: scaleX(-1);"
							fill="var(--fz-text-green)"
							on:click={previousPage}
						/>
					</button>
					{currentPage}/{maxPages}
					<button
						class="arrow-icon-button"
						on:click={nextPage}
						aria-label="Navigate to next page"
					>
						<ArrowIcon fill="var(--fz-text-green)" on:click={nextPage} />
					</button>
				</div>
			</div>
		{:else if currentPage === 2}
			<div class="page-2">
				<div class="icon">
					<div class="weapon-icon-container">
						<div class="weapon-icon">
							<svelte:component
								this={WeaponTypes[weaponID].icon}
								{...weaponIconProps}
							/>
						</div>
						<div class="weapon-rank">
							{#if rank === 'G'}
								<GRankWeaponIcon />
							{:else if rank === 'Z'}
								<ZenithWeaponIcon />
							{/if}
						</div>
					</div>
				</div>

				<div class="description">
					{description}<span class="text-yellow"
						><span class="double-width-transform">«</span>{weaponType}<span
							class="double-width-transform">»</span
						></span
					>
				</div>

				<div class="hunterType">
					<div class="hunter-type">
						<p class="text-yellow">Hunter Type:</p>
					</div>
					<div class="hunter-class">
						<p>{weaponClass}</p>
					</div>
				</div>

				<div class="rarity-affinity">
					<div class="rarity">
						<p class="text-yellow">
							Rarity: <span style="color: var({rarityColor});">{rarity}</span>
						</p>
					</div>

					<div class="affinity">
						<p class="text-yellow">
							Affinity <span style="color: var({affinityColor});"
								>{affinity}%</span
							>
						</p>
					</div>
				</div>

				<div class="slots">
					<p class="text-yellow">Slots</p>
				</div>

				<div class="pages">
					<button
						class="arrow-icon-button"
						on:click={previousPage}
						aria-label="Navigate to previous page"
					>
						<ArrowIcon
							style="transform: scaleX(-1);"
							fill="var(--fz-text-green)"
							on:click={previousPage}
						/>
					</button>
					{currentPage}/{maxPages}
					<button
						class="arrow-icon-button"
						on:click={nextPage}
						aria-label="Navigate to next page"
					>
						<ArrowIcon fill="var(--fz-text-green)" on:click={nextPage} />
					</button>
				</div>
			</div>
		{:else if currentPage === 3}
			<div class="page-3">
				<p class="skill-tree-header">【Skill Tree: Skill Points】</p>
				<div class="skills">
					{#if skillPoints[0] <= 0}
						<div class="skill">
							<div class="skill-name-empty">No Skill Points</div>
							<div class="skill-points">{' '}</div>
						</div>
						<div class="skill">
							<div class="skill-name">{' '}</div>
							<div class="skill-points">{' '}</div>
						</div>
						<div class="skill">
							<div class="skill-name">{' '}</div>
							<div class="skill-points">{' '}</div>
						</div>
						<div class="skill">
							<div class="skill-name">{' '}</div>
							<div class="skill-points">{' '}</div>
						</div>
					{:else}
						<div class="skill">
							<div class="skill-name">{skillNames[0]}</div>
							<div class="skill-points">
								: {#if skillPoints[0] >= 0}+{/if}{skillPoints[0]}
							</div>
						</div>
						<div class="skill">
							<div class="skill-name">{skillNames[1]}</div>
							<div class="skill-points">
								: {#if skillPoints[1] >= 0}+{/if}{skillPoints[1]}
							</div>
						</div>
						<div class="skill">
							<div class="skill-name">{skillNames[2]}</div>
							<div class="skill-points">
								: {#if skillPoints[2] >= 0}+{/if}{skillPoints[2]}
							</div>
						</div>
						<div class="skill">
							<div class="skill-name">{skillNames[3]}</div>
							<div class="skill-points">
								: {#if skillPoints[3] >= 0}+{/if}{skillPoints[3]}
							</div>
						</div>
					{/if}
					<div class="last-skill">
						{#if skillPoints[0] <= 0}
							<div class="skill">
								<div class="skill-name">{' '}</div>
								<div class="skill-points">{' '}</div>
							</div>
						{:else}
							<div class="skill">
								<div class="skill-name">{skillNames[4]}</div>
								<div class="skill-points">
									: {#if skillPoints[4] >= 0}+{/if}{skillPoints[4]}
								</div>
							</div>
						{/if}
						<div class="pages">
							<button
								class="arrow-icon-button"
								on:click={previousPage}
								aria-label="Navigate to previous page"
							>
								<ArrowIcon
									style="transform: scaleX(-1);"
									fill="var(--fz-text-green)"
									on:click={previousPage}
								/>
							</button>
							{currentPage}/{maxPages}
							<button
								class="arrow-icon-button"
								on:click={nextPage}
								aria-label="Navigate to next page"
							>
								<ArrowIcon fill="var(--fz-text-green)" on:click={nextPage} />
							</button>
						</div>
					</div>
				</div>
			</div>
		{:else if currentPage === 4}
			<div class="page-4">
				<p class="p-inherit text-yellow">[1st Sigil]</p>
				<p class="p-inherit text-orange">
					<span class="double-width">•</span>Oath Sigil
				</p>
				<div class="sigil">
					<div class="sigil-name">{sigils[0]}</div>
					<div class="sigil-points">
						: {#if sigilPoints[0] >= 0}+{/if}{sigilPoints[0]}
					</div>
				</div>
				<div class="sigil">
					<div class="sigil-name">{sigils[1]}</div>
					<div class="sigil-points">
						: {#if sigilPoints[1] >= 0}+{/if}{sigilPoints[1]}
					</div>
				</div>
				<div class="sigil">
					<div class="sigil-name">{sigils[2]}</div>
					<div class="sigil-points">
						: {#if sigilPoints[2] >= 0}+{/if}{sigilPoints[2]}
					</div>
				</div>
				<div class="pages">
					<button
						class="arrow-icon-button"
						on:click={previousPage}
						aria-label="Navigate to previous page"
					>
						<ArrowIcon
							style="transform: scaleX(-1);"
							fill="var(--fz-text-green)"
							on:click={previousPage}
						/>
					</button>
					{currentPage}/{maxPages}
					<button
						class="arrow-icon-button"
						on:click={nextPage}
						aria-label="Navigate to next page"
					>
						<ArrowIcon fill="var(--fz-text-green)" on:click={nextPage} />
					</button>
				</div>
			</div>
		{:else if currentPage === 5}
			<div class="page-5">
				<p class="p-inherit text-yellow">[2nd Sigil]</p>
				<p class="p-inherit text-orange">
					<span class="double-width">•</span>Oath Sigil
				</p>
				<div class="sigil">
					<div class="sigil-name">{sigils[3]}</div>
					<div class="sigil-points">
						: {#if sigilPoints[3] >= 0}+{/if}{sigilPoints[3]}
					</div>
				</div>
				<div class="sigil">
					<div class="sigil-name">{sigils[4]}</div>
					<div class="sigil-points">
						: {#if sigilPoints[4] >= 0}+{/if}{sigilPoints[4]}
					</div>
				</div>
				<div class="sigil">
					<div class="sigil-name">{sigils[5]}</div>
					<div class="sigil-points">
						: {#if sigilPoints[5] >= 0}+{/if}{sigilPoints[5]}
					</div>
				</div>
				<div class="pages">
					<button
						class="arrow-icon-button"
						on:click={previousPage}
						aria-label="Navigate to previous page"
					>
						<ArrowIcon
							style="transform: scaleX(-1);"
							fill="var(--fz-text-green)"
							on:click={previousPage}
						/>
					</button>
					{currentPage}/{maxPages}
					<button
						class="arrow-icon-button"
						on:click={nextPage}
						aria-label="Navigate to next page"
					>
						<ArrowIcon fill="var(--fz-text-green)" on:click={nextPage} />
					</button>
				</div>
			</div>
		{:else if currentPage === 6}
			<div class="page-6">
				<p class="p-inherit text-yellow">[3rd Sigil]</p>
				<p class="p-inherit text-orange">
					<span class="double-width">•</span>Oath Sigil
				</p>
				<div class="sigil">
					<div class="sigil-name">{sigils[6]}</div>
					<div class="sigil-points">
						: {#if sigilPoints[6] >= 0}+{/if}{sigilPoints[6]}
					</div>
				</div>
				<div class="sigil">
					<div class="sigil-name">{sigils[7]}</div>
					<div class="sigil-points">
						: {#if sigilPoints[7] >= 0}+{/if}{sigilPoints[7]}
					</div>
				</div>
				<div class="sigil">
					<div class="sigil-name">{sigils[8]}</div>
					<div class="sigil-points">
						: {#if sigilPoints[8] >= 0}+{/if}{sigilPoints[8]}
					</div>
				</div>
				<div class="pages">
					<button
						class="arrow-icon-button"
						on:click={previousPage}
						aria-label="Navigate to previous page"
					>
						<ArrowIcon
							style="transform: scaleX(-1);"
							fill="var(--fz-text-green)"
							on:click={previousPage}
						/>
					</button>
					{currentPage}/{maxPages}
					<button
						class="arrow-icon-button"
						on:click={nextPage}
						aria-label="Navigate to next page"
					>
						<ArrowIcon fill="var(--fz-text-green)" on:click={nextPage} />
					</button>
				</div>
			</div>
		{/if}
	</div>
</DecoratedBorder>

<style>
	.arrow-icon-button {
		background-color: transparent;
		border: transparent;
		margin: 0;
		padding: 0;
	}

	.double-width-transform {
		transform: scaleX(2);
		display: inline-block;
		margin-right: var(--cds-spacing-02);
		margin-left: var(--cds-spacing-02);
	}

	.double-width {
		width: 2ch;
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
		z-index: 2;
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
		gap: var(--cds-spacing-01);
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

	.icon {
		grid-area: icon;
		display: flex;
		margin: 0px;
		padding: 0px;
		flex-direction: row;
		gap: var(--cds-spacing-01);
	}

	.description {
		grid-area: description;
		line-height: 1.2em;
		max-height: 3.5em;
		overflow: hidden;
	}

	.hunterType {
		grid-area: hunterType;
		display: flex;
		flex-direction: row;
		justify-content: start;
	}

	.page-2 p {
		font-weight: bold;
	}

	.hunter-type,
	.hunter-class,
	.rarity,
	.affinity {
		width: 50%;
	}

	.rarity-affinity {
		grid-area: rarity-affinity;
		display: flex;
		flex-direction: row;
		justify-content: start;
	}

	.slots {
		grid-area: slots;
	}

	.page-2 {
		display: grid;
		grid-template-areas:
			'icon description'
			'icon description'
			'icon description'
			'hunterType hunterType'
			'rarity-affinity rarity-affinity'
			'slots pages';
		gap: 0.25rem;
	}

	.last-skill {
		display: flex;
		flex-direction: row;
		justify-content: space-between;
		align-items: end;
	}

	.skill,
	.sigil {
		display: flex;
		flex-direction: row;
	}

	.skill-name {
		width: 10ch;
		overflow: hidden;
		text-wrap: nowrap;
	}

	.skill-tree-header {
		font: inherit;
	}

	.p-inherit {
		font: inherit;
	}

	.page-4,
	.page-5,
	.page-6 {
		line-height: 1.2em;
	}

	.text-orange {
		color: var(--fz-text-orange);
	}

	.sigil-name {
		width: 16ch;
		overflow: hidden;
		text-wrap: nowrap;
	}

	.container {
		padding: 0.5rem;
		background-color: #11111b;
		aspect-ratio: 2.5;
		color: var(--ctp-mocha-text);
		font-family: var(--font-game);
		font-size: 18px;
		font-weight: 500;
		width: 39ch;
	}

	.element-icon,
	.status-icon {
		width: auto;
		height: 2rem;
	}
</style>
