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
		FrontierArmorSkillName,
		FrontierArmorSkillTree,
		FrontierBowArcShot,
		FrontierBowAvailableCoatings,
		FrontierBowChargeLevels,
		FrontierBowgunAmmoQuantity,
		FrontierBowgunAttackLevel,
		FrontierBowgunRecoil,
		FrontierBowgunReloadSpeed,
		FrontierBowgunScope,
		FrontierElement,
		FrontierEquipmentRank,
		FrontierEquipmentSkillPoints,
		FrontierGunlanceShell,
		FrontierGunlanceShellLevel,
		FrontierHeavyBowgunUpgrade,
		FrontierHuntingHornWeaponNote,
		FrontierLightBowgunUpgrade,
		FrontierRarity,
		FrontierSigil,
		FrontierSigilPoints,
		FrontierStatus,
		FrontierSwitchAxeFPhial,
		FrontierWeaponID,
		FrontierWeaponLength,
		FrontierWeaponSharpness,
		FrontierWeaponType,
		FrontierZenithSkill,
	} from '$lib/client/modules/frontier/types';
	import ArrowIcon from '$lib/client/components/frontier/icon/ArrowIcon.svelte';

	import FrontierWeaponSharpnessBar from '$lib/client/components/frontier/SharpnessBar.svelte';
	import DecoratedBorder from '$lib/client/components/frontier/DecoratedBorder.svelte';
	import {
		frontierMappers,
		stringReplacements,
	} from '$lib/client/modules/frontier/functions';
	import GRankWeaponIcon from './icon/GRankEquipmentIcon.svelte';
	import ZenithWeaponIcon from './icon/ZenithEquipmentIcon2.svelte';
	import { frontierColorNames } from '$lib/client/themes/frontier-colors';
	import NoteIcon from '$lib/client/components/frontier/icon/HuntingHornNoteIcon.svelte';
	import { HuntingHornWeaponNotesCombinations } from '$lib/client/modules/frontier/objects';

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

	export let zenithSkill: FrontierZenithSkill = 'Skill Slots Up+1';

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

	export let phial: FrontierSwitchAxeFPhial = 'Power';

	export let currentPage: number;

	export let skillNames: FrontierArmorSkillTree[] = [
		'Blazing Grace',
		'Strong Attack',
		'Determination',
		'Absolute Defense',
		'Three Worlds Protection',
	];
	export let skillPoints: FrontierEquipmentSkillPoints = [0, 20, -30, 40, 50];

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
	export let sigilPoints: FrontierSigilPoints = [
		15, 20, -30, 40, 50, 15, 15, -15, 12,
	];

	export let weaponType: FrontierWeaponType = 'Evolution';

	export let gunlanceShell: FrontierGunlanceShell = 'Normal';
	export let gunlanceShellLevel: FrontierGunlanceShellLevel = 9;

	export let huntingHornNotes: FrontierHuntingHornWeaponNote[] =
		HuntingHornWeaponNotesCombinations[0];

	export let automaticSkill: FrontierArmorSkillName = '';
	export let bowArc: FrontierBowArcShot = 'Narrow';
	export let bowgunAttackLevel: FrontierBowgunAttackLevel = 5;
	export let heavyBowgunUpgrade: FrontierHeavyBowgunUpgrade = 'Shield';
	export let lightBowgunUpgrade: FrontierLightBowgunUpgrade = 'Silencer';
	export let bowgunScope: FrontierBowgunScope = 'Zoom';
	export let bowgunReload: FrontierBowgunReloadSpeed = 'Very Fast';
	export let bowgunRecoil: FrontierBowgunRecoil = 'Smaller';

	/** Some ammo levels are not shown in game.*/
	export let bowgunAmmo: FrontierBowgunAmmoQuantity[] = [
		{ type: 'Norm S.', levelQuantity: [1, 2, 3] },
		{ type: 'Pierce S.', levelQuantity: [1, 2, 3] },
		{ type: 'Pellet S.', levelQuantity: [1, 2, 3] },
		{ type: 'Crag S.', levelQuantity: [1, 2, 3] },
		{ type: 'Cluster S.', levelQuantity: [1, 2, 3] },
		{ type: 'Rec S.', levelQuantity: [1, 2, 0] },
		{ type: 'Psn S.', levelQuantity: [1, 2, 0] },
		{ type: 'Para S.', levelQuantity: [0, 0, 0] },
		{ type: 'Slp S.', levelQuantity: [0, 0, 0] },
		{ type: 'Flaming S', levelQuantity: [1, 2, 0] },
		{ type: 'Water S', levelQuantity: [1, 2, 0] },
		{ type: 'Thunder S', levelQuantity: [1, 0, 0] },
		{ type: 'Freeze S', levelQuantity: [1, 0, 0] },
		{ type: 'Dragon S', levelQuantity: [1, 0, 0] },
		{ type: 'Tranq S', levelQuantity: [1, 0, 0] },
		{ type: 'Paint S', levelQuantity: [1, 0, 0] },
		{ type: 'Demon S.', levelQuantity: [0, 0, 0] },
		{ type: 'Armor S.', levelQuantity: [0, 0, 0] },
	];

	/**Available coatings*/
	export let bowCoatings: FrontierBowAvailableCoatings = {
		power: true,
		poison: true,
		para: true,
		sleep: true,
		impact: true,
	};

	export let bowCharges: FrontierBowChargeLevels[] = [
		{ type: 'Pierce', level: 3 },
		{ type: 'Spread', level: 3 },
		{ type: 'Pierce', level: 4 },
	];

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

	const maxNameLength = 24;
	const maxAttackLength = 5;
	const maxElementStatusLength = 5;

	let weaponIconProps = {
		rarity: rarity,
	};
	// TODO slots icons
	$: rarityColor = stringReplacements.colorFromRarity(rarity);
	$: affinityColor = affinityBoost
		? frontierColorNames[2].values[1].var
		: '--ctp-text';
	$: weaponClass = WeaponTypes[weaponID].class;
	$: weaponTypeName = WeaponTypes[weaponID].name;
	$: maxPages = weaponClass === 'Blademaster' ? 6 : 8;
	$: normalAmmoStyle =
		bowgunAmmo[0].levelQuantity[0] === 0 &&
		bowgunAmmo[0].levelQuantity[1] === 0 &&
		bowgunAmmo[0].levelQuantity[2] === 0
			? 'disabled-ammo'
			: 'enabled-ammo';
	$: pierceAmmoStyle =
		bowgunAmmo[1].levelQuantity[0] === 0 &&
		bowgunAmmo[1].levelQuantity[1] === 0 &&
		bowgunAmmo[1].levelQuantity[2] === 0
			? 'disabled-ammo'
			: 'enabled-ammo';
	$: pelletAmmoStyle =
		bowgunAmmo[2].levelQuantity[0] === 0 &&
		bowgunAmmo[2].levelQuantity[1] === 0 &&
		bowgunAmmo[2].levelQuantity[2] === 0
			? 'disabled-ammo'
			: 'enabled-ammo';
	$: cragAmmoStyle =
		bowgunAmmo[3].levelQuantity[0] === 0 &&
		bowgunAmmo[3].levelQuantity[1] === 0 &&
		bowgunAmmo[3].levelQuantity[2] === 0
			? 'disabled-ammo'
			: 'enabled-ammo';
	$: clusterAmmoStyle =
		bowgunAmmo[4].levelQuantity[0] === 0 &&
		bowgunAmmo[4].levelQuantity[1] === 0 &&
		bowgunAmmo[4].levelQuantity[2] === 0
			? 'disabled-ammo'
			: 'enabled-ammo';
	$: recoveryAmmoStyle =
		bowgunAmmo[5].levelQuantity[0] === 0 &&
		bowgunAmmo[5].levelQuantity[1] === 0 &&
		bowgunAmmo[5].levelQuantity[2] === 0
			? 'disabled-ammo'
			: 'enabled-ammo';
	$: poisonAmmoStyle =
		bowgunAmmo[6].levelQuantity[0] === 0 &&
		bowgunAmmo[6].levelQuantity[1] === 0 &&
		bowgunAmmo[6].levelQuantity[2] === 0
			? 'disabled-ammo'
			: 'enabled-ammo';
	$: paralysisAmmoStyle =
		bowgunAmmo[7].levelQuantity[0] === 0 &&
		bowgunAmmo[7].levelQuantity[1] === 0 &&
		bowgunAmmo[7].levelQuantity[2] === 0
			? 'disabled-ammo'
			: 'enabled-ammo';
	$: sleepAmmoStyle =
		bowgunAmmo[8].levelQuantity[0] === 0 &&
		bowgunAmmo[8].levelQuantity[1] === 0 &&
		bowgunAmmo[8].levelQuantity[2] === 0
			? 'disabled-ammo'
			: 'enabled-ammo';
	$: flamingAmmoStyle =
		bowgunAmmo[9].levelQuantity[0] === 0 &&
		bowgunAmmo[9].levelQuantity[1] === 0 &&
		bowgunAmmo[9].levelQuantity[2] === 0
			? 'disabled-ammo'
			: 'enabled-ammo';
	$: waterAmmoStyle =
		bowgunAmmo[10].levelQuantity[0] === 0 &&
		bowgunAmmo[10].levelQuantity[1] === 0 &&
		bowgunAmmo[10].levelQuantity[2] === 0
			? 'disabled-ammo'
			: 'enabled-ammo';
	$: thunderAmmoStyle =
		bowgunAmmo[11].levelQuantity[0] === 0 &&
		bowgunAmmo[11].levelQuantity[1] === 0 &&
		bowgunAmmo[11].levelQuantity[2] === 0
			? 'disabled-ammo'
			: 'enabled-ammo';
	$: freezeAmmoStyle =
		bowgunAmmo[12].levelQuantity[0] === 0 &&
		bowgunAmmo[12].levelQuantity[1] === 0 &&
		bowgunAmmo[12].levelQuantity[2] === 0
			? 'disabled-ammo'
			: 'enabled-ammo';
	$: dragonAmmoStyle =
		bowgunAmmo[13].levelQuantity[0] === 0 &&
		bowgunAmmo[13].levelQuantity[1] === 0 &&
		bowgunAmmo[13].levelQuantity[2] === 0
			? 'disabled-ammo'
			: 'enabled-ammo';
	$: tranqAmmoStyle =
		bowgunAmmo[14].levelQuantity[0] === 0 &&
		bowgunAmmo[14].levelQuantity[1] === 0 &&
		bowgunAmmo[14].levelQuantity[2] === 0
			? 'disabled-ammo'
			: 'enabled-ammo';
	$: paintAmmoStyle =
		bowgunAmmo[15].levelQuantity[0] === 0 &&
		bowgunAmmo[15].levelQuantity[1] === 0 &&
		bowgunAmmo[15].levelQuantity[2] === 0
			? 'disabled-ammo'
			: 'enabled-ammo';
	$: demonAmmoStyle =
		bowgunAmmo[16].levelQuantity[0] === 0 &&
		bowgunAmmo[16].levelQuantity[1] === 0 &&
		bowgunAmmo[16].levelQuantity[2] === 0
			? 'disabled-ammo'
			: 'enabled-ammo';
	$: armorAmmoStyle =
		bowgunAmmo[17].levelQuantity[0] === 0 &&
		bowgunAmmo[17].levelQuantity[1] === 0 &&
		bowgunAmmo[17].levelQuantity[2] === 0
			? 'disabled-ammo'
			: 'enabled-ammo';
</script>

<DecoratedBorder>
	<div class="container">
		{#if currentPage === 1}
			{#if weaponClass === 'Blademaster'}
				<div class="page-1-blademaster">
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
						{#if frontierMappers.getWeaponNameById(weaponID) === 'Hunting Horn'}
							<span class="hh-notes"
								>【Notes
								<NoteIcon size={16} color={huntingHornNotes[0]} />
								<NoteIcon size={16} color={huntingHornNotes[1]} />
								<NoteIcon size={16} color={huntingHornNotes[2]} />
								】</span
							>
						{:else if frontierMappers.getWeaponNameById(weaponID) === 'Gunlance'}
							<span class="gunlance-shell"
								>{gunlanceShell} Shot LV{gunlanceShellLevel}</span
							>
						{:else if frontierMappers.getWeaponNameById(weaponID) === 'Switch Axe F'}
							<span class="saf-phial">{phial} Phial</span>
						{:else}
							<span class="text-yellow"
								>Length<span class="text-yellow double-width">:</span></span
							>{length}
						{/if}
					</div>
					<div class="sharpness">Sharpness</div>
					<FrontierWeaponSharpnessBar {sharpnessValues} {sharpnessBoost} />
					<div class="element">
						{#if element !== ''}
							{#if extraIcons}
								<img
									class="element-icon"
									alt="Element"
									src={frontierMappers.getElementIcon(element)}
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
									src={frontierMappers.getStatusIcon(status)}
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
									src={frontierMappers.getStatusIcon(status)}
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
			{:else}
				<div class="page-1-gunner">
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
					<div class="scope">
						{#if frontierMappers.getWeaponNameById(weaponID) === 'Bow'}
							<span class="text-yellow"
								>Arc<span class="text-yellow double-width">:</span></span
							>{bowArc}
						{:else}
							<span class="scope-type">{bowgunScope} Scope</span>
						{/if}
					</div>
					<div class="reload">
						{#if weaponTypeName === 'Bow'}
							<div class="element">
								{#if element !== ''}
									{#if extraIcons}
										<img
											class="element-icon"
											alt="Element"
											src={frontierMappers.getElementIcon(element)}
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
						{:else}
							<span class="text-yellow"
								>Reload<span class="text-yellow double-width">:</span></span
							>{bowgunReload}
						{/if}
					</div>
					<div class="recoil">
						{#if weaponTypeName === 'Bow'}
							<div class="status">
								{#if status === 'Def'}
									{#if extraIcons}
										<img
											class="status-icon"
											alt="Status"
											src={frontierMappers.getStatusIcon(status)}
										/>
									{:else}
										{status}
									{/if}
									{statusValue >= 0 ? '+' : ''}{statusValue
										.toString()
										.substring(0, maxElementStatusLength)}
								{/if}
							</div>
						{:else}
							<span class="text-yellow"
								>Recoil<span class="text-yellow double-width">:</span></span
							>{bowgunRecoil}
						{/if}
					</div>
					<div class="upgrade">
						{#if weaponTypeName === 'Heavy Bowgun'}
							{heavyBowgunUpgrade}
						{:else if weaponTypeName === 'Light Bowgun'}
							{lightBowgunUpgrade}
						{/if}
					</div>
					<div class="zenith" style="text-align: left;">
						{#if zenithSkill !== ''}
							<span class="double-width-transform">«</span>{zenithSkill}<span
								class="double-width-transform">»</span
							>
						{:else if weaponTypeName !== 'Bow' && bowgunAttackLevel >= 1}
							<span class="text-yellow"
								>Attack LV<span class="text-yellow double-width">:</span></span
							><span style="color: var(--ctp-text);">{bowgunAttackLevel}</span>
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
			{/if}
		{:else if currentPage === 2}
			<div class="page-2-blademaster">
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
					{description}
					{#if automaticSkill === ''}
						<span class="text-yellow"
							><span class="double-width-transform">«</span>{weaponType}<span
								class="double-width-transform">»</span
							></span
						>
					{:else}
						<span class="text-red"
							><span class="double-width-transform">«</span
							>{automaticSkill}<span class="double-width-transform">»</span
							></span
						>
					{/if}
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
			{#if weaponClass === 'Gunner'}
				{#if weaponTypeName === 'Bow'}
					<div class="page-3-bow">
						<div class="attack-header">Attack</div>
						<div class="charge-header text-orange">Charge</div>
						<div class="one text-orange">1</div>
						<div class="two text-orange">2</div>
						<div class="three text-orange">3</div>
						<div class="charge-type-one text-yellow">
							{`${bowCharges[0].type} ${bowCharges[0].level}`}
						</div>
						<div class="charge-type-two text-yellow">
							{`${bowCharges[1].type} ${bowCharges[1].level}`}
						</div>
						<div class="charge-type-three text-yellow">
							{`${bowCharges[2].type} ${bowCharges[2].level}`}
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
				{:else}
					<div class="page-3-bowgun">
						<div class="header-left">
							<span>Load </span><span class="text-orange">LV 1 2 3</span>
						</div>
						<div class="header-right">
							<span class="text-orange">LV 1 2</span>
						</div>
						<!-- TODO: styles depending on count being 0-->
						<div class={`normal-ammo ${normalAmmoStyle}`}>
							Norm S.: {bowgunAmmo[0].levelQuantity[0]}/{bowgunAmmo[0]
								.levelQuantity[1]}/{bowgunAmmo[0].levelQuantity[2]}
						</div>
						<div class={`recovery-ammo ${recoveryAmmoStyle}`}>
							Rec S.: {bowgunAmmo[5].levelQuantity[0]}/{bowgunAmmo[5]
								.levelQuantity[1]}
						</div>
						<div class={`pierce-ammo ${pierceAmmoStyle}`}>
							Pierce S.: {bowgunAmmo[1].levelQuantity[0]}/{bowgunAmmo[1]
								.levelQuantity[1]}/{bowgunAmmo[1].levelQuantity[2]}
						</div>
						<div class={`poison-ammo ${poisonAmmoStyle}`}>
							Psn S.: {bowgunAmmo[6].levelQuantity[0]}/{bowgunAmmo[6]
								.levelQuantity[1]}
						</div>
						<div class={`pellet-ammo ${pelletAmmoStyle}`}>
							Pellet S.: {bowgunAmmo[2].levelQuantity[0]}/{bowgunAmmo[2]
								.levelQuantity[1]}/{bowgunAmmo[2].levelQuantity[2]}
						</div>
						<div class={`para-ammo ${paralysisAmmoStyle}`}>
							Para S.: {bowgunAmmo[7].levelQuantity[0]}/{bowgunAmmo[7]
								.levelQuantity[1]}
						</div>
						<div class={`crag-ammo ${cragAmmoStyle}`}>
							Crag S.: {bowgunAmmo[3].levelQuantity[0]}/{bowgunAmmo[3]
								.levelQuantity[1]}/{bowgunAmmo[3].levelQuantity[2]}
						</div>
						<div class={`sleep-ammo ${sleepAmmoStyle}`}>
							Slp S.: {bowgunAmmo[8].levelQuantity[0]}/{bowgunAmmo[8]
								.levelQuantity[1]}
						</div>
						<div class={`cluster-ammo ${clusterAmmoStyle}`}>
							Cluster S.: {bowgunAmmo[4].levelQuantity[0]}/{bowgunAmmo[4]
								.levelQuantity[1]}/{bowgunAmmo[4].levelQuantity[2]}
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
			{:else}
				<div class="page-3-blademaster">
					<div class="text-yellow">【Skill Tree: Skill Points】</div>
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
			{/if}
		{:else if currentPage === 4}
			{#if weaponClass === 'Gunner'}
				{#if weaponTypeName === 'Bow'}
					<div class="page-4-bow">
						<div class="attack-header">Attack</div>
						<div class="available-coatings text-orange">Available Coatings</div>
						<div class="power-coating text-yellow">
							{#if bowCoatings.power}
								Power Coating
							{/if}
						</div>
						<div class="impact-coating text-yellow">
							{#if bowCoatings.impact}
								Impact Coating
							{/if}
						</div>
						<div class="poison-coating text-yellow">
							{#if bowCoatings.poison}
								Poison Coating
							{/if}
						</div>
						<div class="paralysis-coating text-yellow">
							{#if bowCoatings.para}
								Para Coating
							{/if}
						</div>
						<div class="sleep-coating text-yellow">
							{#if bowCoatings.sleep}
								Sleep Coating
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
				{:else}
					<div class="page-4-bowgun">
						<div class="loading-header">Loading</div>
						<div class={`flaming-ammo ${flamingAmmoStyle}`}>
							Flaming S: {bowgunAmmo[9].levelQuantity[0]}
						</div>
						<div class={`tranq-ammo ${tranqAmmoStyle}`}>
							Tranq S: {bowgunAmmo[14].levelQuantity[0]}
						</div>
						<div class={`water-ammo ${waterAmmoStyle}`}>
							Water S: {bowgunAmmo[10].levelQuantity[0]}
						</div>
						<div class={`paint-ammo ${paintAmmoStyle}`}>
							Paint S: {bowgunAmmo[15].levelQuantity[0]}
						</div>
						<div class={`thunder-ammo ${thunderAmmoStyle}`}>
							Thunder S: {bowgunAmmo[11].levelQuantity[0]}
						</div>
						<div class={`demon-ammo ${demonAmmoStyle}`}>
							Demon S.: {bowgunAmmo[16].levelQuantity[0]}
						</div>
						<div class={`freeze-ammo ${freezeAmmoStyle}`}>
							Freeze S: {bowgunAmmo[12].levelQuantity[0]}
						</div>
						<div class={`armor-ammo ${armorAmmoStyle}`}>
							Armor S.: {bowgunAmmo[17].levelQuantity[0]}
						</div>
						<div class={`dragon-ammo ${dragonAmmoStyle}`}>
							Dragon S: {bowgunAmmo[13].levelQuantity[0]}
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
			{:else}
				<div class="page-4-blademaster">
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
			{/if}
		{:else if currentPage === 5}
			{#if weaponClass === 'Gunner'}
				<div class="page-5-gunner">
					<div class="text-yellow">【Skill Tree: Skill Points】</div>
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
			{:else}
				<div class="page-5-blademaster">
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
			{/if}
		{:else if currentPage === 6}
			{#if weaponClass === 'Gunner'}
				<div class="page-6-gunner">
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
			{:else}
				<div class="page-6-blademaster">
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
		{:else if currentPage === 7}
			<div class="page-7-gunner">
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
		{:else if currentPage === 8}
			<div class="page-8-gunner">
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

	.page-1-blademaster {
		display: grid;
		grid-template-areas:
			'header header header'
			'attack length length'
			'sharpness bar bar'
			'element zenith zenith'
			'status pages pages';
		gap: 0.5rem;
	}

	.scope {
		grid-area: scope;
		text-align: center;
	}

	.reload {
		grid-area: reload;
	}

	.upgrade {
		grid-area: upgrade;
	}

	.recoil {
		grid-area: recoil;
	}

	.page-1-gunner {
		display: grid;
		grid-template-areas:
			'header header header'
			'attack scope scope'
			'reload reload upgrade'
			'recoil recoil recoil'
			'zenith pages pages';
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

	.page-2-blademaster p {
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

	.page-2-blademaster {
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

	.attack-header {
		grid-area: attack-header;
	}

	.charge-header {
		grid-area: charge-header;
	}

	.one {
		grid-area: one;
	}

	.two {
		grid-area: two;
	}

	.three {
		grid-area: three;
	}

	.charge-type-one {
		grid-area: charge-type-one;
	}

	.charge-type-two {
		grid-area: charge-type-two;
	}

	.charge-type-three {
		grid-area: charge-type-three;
	}

	.page-3-bow {
		display: grid;
		grid-template-areas:
			'attack-header attack-header attack-header'
			'charge-header charge-header charge-header'
			'one two three'
			'charge-type-one charge-type-two charge-type-three'
			'charge-type-one charge-type-two charge-type-three'
			'pages pages pages';
		gap: 0.25rem;
	}

	.header-left {
		grid-area: header-left;
	}

	.header-right {
		grid-area: header-right;
	}

	.normal-ammo {
		grid-area: normal-ammo;
	}

	.recovery-ammo {
		grid-area: recovery-ammo;
	}

	.pierce-ammo {
		grid-area: pierce-ammo;
	}

	.poison-ammo {
		grid-area: poison-ammo;
	}

	.pellet-ammo {
		grid-area: pellet-ammo;
	}

	.para-ammo {
		grid-area: para-ammo;
	}

	.crag-ammo {
		grid-area: crag-ammo;
	}

	.sleep-ammo {
		grid-area: sleep-ammo;
	}

	.cluster-ammo {
		grid-area: cluster-ammo;
	}

	.page-3-bowgun {
		display: grid;
		grid-template-areas:
			'header-left header-right'
			'normal-ammo recovery-ammo'
			'pierce-ammo poison-ammo'
			'pellet-ammo para-ammo'
			'crag-ammo sleep-ammo'
			'cluster-ammo pages';
		gap: 0.25rem;
	}

	.available-coatings {
		grid-area: available-coatings;
	}

	.power-coating {
		grid-area: power-coating;
	}

	.impact-coating {
		grid-area: impact-coating;
	}

	.poison-coating {
		grid-area: poison-coating;
	}

	.paralysis-coating {
		grid-area: paralysis-coating;
	}

	.sleep-coating {
		grid-area: sleep-coating;
	}

	.page-4-bow {
		display: grid;
		grid-template-areas:
			'attack-header attack-header'
			'available-coatings available-coatings'
			'power-coating impact-coating'
			'poison-coating poison-coating'
			'paralysis-coating paralysis-coating'
			'sleep-coating pages';
		gap: 0.25rem;
	}

	.sleep-coating {
		grid-area: sleep-coating;
	}

	.loading-header {
		grid-area: loading-header;
	}
	.flaming-ammo {
		grid-area: flaming-ammo;
	}
	.tranq-ammo {
		grid-area: tranq-ammo;
	}
	.water-ammo {
		grid-area: water-ammo;
	}
	.paint-ammo {
		grid-area: paint-ammo;
	}
	.thunder-ammo {
		grid-area: thunder-ammo;
	}
	.demon-ammo {
		grid-area: demon-ammo;
	}
	.freeze-ammo {
		grid-area: freeze-ammo;
	}
	.armor-ammo {
		grid-area: armor-ammo;
	}

	.dragon-ammo {
		grid-area: dragon-ammo;
	}

	.page-4-bowgun {
		display: grid;
		grid-template-areas:
			'loading-header loading-header'
			'flaming-ammo tranq-ammo'
			'water-ammo paint-ammo'
			'thunder-ammo demon-ammo'
			'freeze-ammo armor-ammo'
			'dragon-ammo pages';
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

	.sigil {
		margin-left: 2rem;
	}

	.skill-name {
		width: 10ch;
		overflow: hidden;
		text-wrap: nowrap;
	}

	.skill-name-empty {
		margin-top: 0.5rem;
	}

	.skills {
		line-height: 1.5em;
	}

	.p-inherit {
		font: inherit;
	}

	.page-4-blademaster,
	.page-5-blademaster,
	.page-6-blademaster,
	.page-8-gunner,
	.page-7-gunner,
	.page-6-gunner {
		line-height: 1.2em;
	}

	.text-orange {
		color: var(--fz-text-orange);
	}

	.text-red {
		color: var(--fz-text-red);
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

	.hh-notes {
		display: inline-flex;
		flex-direction: row;
		align-items: center;
		gap: 0.75rem;
	}

	.page-3-blademaster .pages,
	.page-3-bow .pages,
	.page-3-bowgun .pages,
	.page-5-gunner .pages {
		position: absolute;
		bottom: 0.5rem;
		right: 0.5rem;
	}

	.enabled-ammo {
		color: var(--fz-text-yellow);
	}

	.disabled-ammo {
		color: var(--ctp-overlay1);
	}
</style>
