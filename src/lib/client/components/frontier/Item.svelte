<!--
  ~ © 2023 Doriel Rivalet
  ~ Use of this source code is governed by a MIT license that can be
  ~ found in the LICENSE file.
-->

<script lang="ts">
	import type {
		FrontierArmorSkillName,
		FrontierArmorSkillTree,
		FrontierArmorClass,
		FrontierRarity,
		FrontierWeaponClass,
		FrontierSlot,
		FrontierZenithSkill,
		FrontierItemType,
		FrontierItemRankType,
		FrontierItemColor,
		FrontierItemDecoration,
		FrontierItemSigil,
	} from '$lib/client/modules/frontier/types';
	import ArrowIcon from '$lib/client/components/frontier/icon/ArrowIcon.svelte';

	import DecoratedBorder from '$lib/client/components/frontier/DecoratedBorder.svelte';
	import { stringReplacements } from '$lib/client/modules/frontier/functions';
	import GRankEquipmentIcon from './icon/GRankEquipmentIcon.svelte';
	import ZenithEquipmentIcon from './icon/ZenithEquipmentIcon2.svelte';
	import { ItemTypes } from '$lib/client/modules/frontier/objects';
	import TowerEquipmentIcon from './icon/TowerEquipmentIcon.svelte';
	import QuestionMarkIconWhite from './icon/item/Question_Mark_Icon_White.svelte';

	/** Truncated to 18 characters.*/
	export let name = 'Name';

	/** The overlay icon in the bottom left corner.*/
	export let itemRankType: FrontierItemRankType = 'G';
	export let iconName: string = 'Armor Sphere';
	export let itemType: FrontierItemType = 'Other';

	/**
	 * tower or cuff
	 */
	export let zenithSkill: FrontierZenithSkill = 'Skill Slots Up+1';
	export let cuffSkill1: FrontierArmorSkillTree = 'Vampirism';
	export let cuffSkill1Points = 10;
	export let cuffSkill2: FrontierArmorSkillTree = 'Determination';
	export let cuffSkill2Points = 12;
	export let towerSkill: FrontierArmorSkillName = 'Kickboxing King';

	export let description: string = 'Description.';
	export let rarity: FrontierRarity = 12;
	export let armorClass: FrontierArmorClass = 'Either';
	export let weaponClass: FrontierWeaponClass = 'Both';
	export let slotsRequired: FrontierSlot = 1;

	/**
	 * TODO Set theme to light.
	 */
	export let light = false;

	export let currentPage: number = 1;

	export let colorName: FrontierItemColor = 'White';

	export let sigil: FrontierItemSigil = {
		slot1: {
			name: '',
			value: 0,
		},
		slot2: {
			name: '',
			value: 0,
		},
		slot3: {
			name: '',
			value: 0,
		},
		slot4: {
			name: '',
			value: 0,
		},
	};

	export let decoration: FrontierItemDecoration = {
		slot1: {
			name: '',
			value: 0,
		},
		slot2: {
			name: '',
			value: 0,
		},
		slot3: {
			name: '',
			value: 0,
		},
		slot4: {
			name: '',
			value: 0,
		},
	};

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
	const requirementText = '(Tower Weapon)';

	$: rarityColor = stringReplacements.colorFromRarity(rarity);
	$: maxPages = itemType === 'Other' || itemType === 'Sigil' ? 1 : 3;
	$: icon =
		ItemTypes.find((item) => item.name === iconName)?.icon ??
		QuestionMarkIconWhite;

	$: iconProps = {
		color: stringReplacements.colorFromName(colorName),
	};
</script>

<DecoratedBorder>
	<div class="container">
		{#if itemType === 'Other'}
			{#if currentPage === 1}
				<div class="page-1-other">
					<div class="icon">
						<div class="item-icon-container">
							<div class="item-icon">
								<svelte:component this={icon} {...iconProps} />
							</div>
							<div class="item-rank">
								{#if itemRankType === 'G'}
									<GRankEquipmentIcon />
								{:else if itemRankType === 'Z'}
									<ZenithEquipmentIcon />
								{:else if itemRankType === 'T'}
									<TowerEquipmentIcon />
								{/if}
							</div>
						</div>
					</div>

					<div class="rarity">
						<div
							style="color: var({rarityColor}); overflow: hidden;white-space: nowrap; text-overflow: clip; max-width: 7ch;"
						>
							<span>RARE-</span>{rarity}
						</div>
					</div>

					<div class="description">{description}</div>
				</div>
			{:else}
				<div class="page-extra-nonequippable">
					<div class="icon">
						<div class="item-icon-container">
							<div class="item-icon">
								<svelte:component this={icon} {...iconProps} />
							</div>
							<div class="item-rank">
								{#if itemRankType === 'G'}
									<GRankEquipmentIcon />
								{:else if itemRankType === 'Z'}
									<ZenithEquipmentIcon />
								{:else if itemRankType === 'T'}
									<TowerEquipmentIcon />
								{/if}
							</div>
						</div>
					</div>

					<!-- <div class="hunterType">
						<div class="hunter-type">
							<p class="text-yellow">Equippable:</p>
						</div>
						<div class="hunter-class">
							<p>{armorClass}</p>
						</div>
					</div> -->

					<div class="rarity">
						<div
							style="color: var({rarityColor}); overflow: hidden;white-space: nowrap; text-overflow: clip; max-width: 7ch;"
						>
							<span>RARE-</span>{rarity}
						</div>
					</div>

					<!-- <div class="zenith">
						{#if zenithSkill !== ''}
							<span class="double-width-transform">«</span>{zenithSkill}<span
								class="double-width-transform">»</span
							>
						{/if}
					</div> -->

					<!-- <div class="slots">
						<p class="text-yellow">Slots</p>
					</div> -->

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
		{:else if itemType === 'Sigil'}
			{#if currentPage === 1}
				<div class="page-1-sigil">
					<div class="icon">
						<div class="item-icon-container">
							<div class="item-icon">
								<svelte:component this={icon} {...iconProps} />
							</div>
							<div class="item-rank">
								{#if itemRankType === 'G'}
									<GRankEquipmentIcon />
								{:else if itemRankType === 'Z'}
									<ZenithEquipmentIcon />
								{:else if itemRankType === 'T'}
									<TowerEquipmentIcon />
								{/if}
							</div>
						</div>
					</div>

					<div class="rarity">
						<div
							style="color: var({rarityColor}); overflow: hidden;white-space: nowrap; text-overflow: clip; max-width: 7ch;"
						>
							<span>RARE-</span>{rarity}
						</div>
					</div>

					<div class="slot1">
						{sigil.slot1.name}: {sigil.slot1.value > 0 ? '+' : ''}{sigil.slot1
							.value}
					</div>
					<div class="slot2">
						{sigil.slot2.name}: {sigil.slot2.value > 0 ? '+' : ''}{sigil.slot1
							.value}
					</div>
					<div class="slot3">
						{sigil.slot3.name}: {sigil.slot3.value > 0 ? '+' : ''}{sigil.slot1
							.value}
					</div>
					<div class="slot4">
						{sigil.slot4.name}: {sigil.slot4.value > 0 ? '+' : ''}{sigil.slot1
							.value}
					</div>
				</div>
			{:else}
				<div class="page-extra-nonequippable">
					<div class="icon">
						<div class="item-icon-container">
							<div class="item-icon">
								<svelte:component this={icon} {...iconProps} />
							</div>
							<div class="item-rank">
								{#if itemRankType === 'G'}
									<GRankEquipmentIcon />
								{:else if itemRankType === 'Z'}
									<ZenithEquipmentIcon />
								{:else if itemRankType === 'T'}
									<TowerEquipmentIcon />
								{/if}
							</div>
						</div>
					</div>

					<div class="rarity">
						<div
							style="color: var({rarityColor}); overflow: hidden;white-space: nowrap; text-overflow: clip; max-width: 7ch;"
						>
							<span>RARE-</span>{rarity}
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

	.text-yellow {
		color: var(--fz-text-yellow);
	}

	.item-icon-container {
		position: relative;
		display: inline-block;
	}

	.item-icon {
		position: relative;
		width: var(--cds-spacing-10);
	}

	.item-rank {
		position: absolute;
		bottom: 0;
		width: var(--cds-spacing-05);
		height: auto;
		z-index: 2;
		left: 0;
	}

	.points {
		grid-area: points;
	}

	.empty {
		grid-area: empty;
	}

	.requirement {
		grid-area: requirement;
		color: var(--fz-text-yellow);
	}

	.zenith {
		grid-area: zenith;
		color: var(--fz-rare-12);
		text-align: end;
	}

	.pages {
		text-align: end;
		grid-area: pages;
	}

	.slot1 {
		grid-area: slot1;
	}

	.slot2 {
		grid-area: slot2;
	}

	.slot3 {
		grid-area: slot3;
	}
	
	.slot4 {
		grid-area: slot4;
	}

	.page-1-sigil {
		display: grid;
		grid-template-areas:
			'icon slot1 slot2'
			'icon slot3 slot4'
			'rarity empty empty';
		gap: 0.5rem;
	}

	.page-1-other {
		display: grid;
		grid-template-areas:
			'icon description description'
			'icon description description'
			'rarity description description';
		gap: 0.5rem;
	}

	.page-extra-nonequippable {
		display: grid;
		grid-template-areas:
			'icon empty empty'
			'icon empty empty'
			'rarity empty pages';
		gap: 0.5rem;
	}

	.page-1-decoration {
		display: grid;
		grid-template-areas:
			'icon description description'
			'icon description description'
			'rarity description pages';
		gap: 0.5rem;
	}

	.page-1-tower {
		display: grid;
		grid-template-areas:
			'icon description description'
			'icon description description'
			'rarity requirement pages';
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
		text-align: start;
		margin: 0px;
		padding: 0px;
		margin-top: var(--cds-spacing-03);
	}

	.rarity {
		grid-area: rarity;
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
			'rarity zenith'
			'slots pages';
		gap: 0.25rem;
	}

	/* .last-skill {
		display: flex;
		flex-direction: row;
		justify-content: space-between;
		align-items: end;
	}

	.skill {
		display: flex;
		flex-direction: row;
		margin-left: 2rem;
	}

	.last-deco-skill {
		display: flex;
		flex-direction: row;
		align-items: end;
		justify-content: space-between;
	}

	.skills {
		line-height: 1.5em;
	}

	.skill-name {
		width: 10ch;
		overflow: hidden;
		text-wrap: nowrap;
	}

	.deco-skill-name {
		max-width: 24ch;
		overflow: hidden;
		text-wrap: nowrap;
	}

	.skill-name-empty {
		margin-top: 0.5rem;
	}

	.container {
		padding: 0.5rem;
		background-color: #11111b;
		aspect-ratio: 4.6;
		color: var(--ctp-mocha-text);
		font-family: var(--font-game);
		font-size: 18px;
		font-weight: 500;
		width: 39ch;
	}
</style>
