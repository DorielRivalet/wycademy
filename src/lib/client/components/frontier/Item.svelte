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
	import Popover from 'carbon-components-svelte/src/Popover/Popover.svelte';

	import DecoratedBorder from '$lib/client/components/frontier/DecoratedBorder.svelte';
	import { stringReplacements } from '$lib/client/modules/frontier/functions';
	import GRankEquipmentIcon from './icon/GRankEquipmentIcon.svelte';
	import ZenithEquipmentIcon from './icon/ZenithEquipmentIcon2.svelte';
	import { ItemIcons } from '$lib/client/modules/frontier/objects';
	import TowerEquipmentIcon from './icon/TowerEquipmentIcon.svelte';
	import QuestionMarkIconWhite from './icon/item/Question_Mark_Icon_White.svelte';
	import { browser } from '$app/environment';
	import { Information } from 'carbon-icons-svelte';

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

	function handleFocus() {
		if (!browser) return;

		open = !open;
		popoverContent = `${name}`;
	}

	let open = false;
	let ref: HTMLDivElement | null = null;
	let popoverContent = '';

	const maxNameLength = 24;
	const requirementText = '(Tower Weapon)';

	$: rarityColor = stringReplacements.colorFromRarity(rarity);
	$: maxPages = itemType === 'Other' || itemType === 'Sigil' ? 1 : 3;
	$: icon =
		ItemIcons.find((item) => item.name === iconName)?.icon ??
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
							<div
								class="item-icon"
								bind:this={ref}
								style:position="relative"
								on:click={(e) => handleFocus()}
								role="button"
								tabindex="0"
								on:keypress={(e) => handleFocus()}
							>
								<svelte:component this={icon} {...iconProps} />
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
							<div
								class="item-icon"
								bind:this={ref}
								style:position="relative"
								on:click={(e) => handleFocus()}
								role="button"
								tabindex="0"
								on:keypress={(e) => handleFocus()}
							>
								<svelte:component this={icon} {...iconProps} />
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
							<div
								class="item-icon"
								bind:this={ref}
								style:position="relative"
								on:click={(e) => handleFocus()}
								role="button"
								tabindex="0"
								on:keypress={(e) => handleFocus()}
							>
								<svelte:component this={icon} {...iconProps} />
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
						{#if sigil.slot1.name !== ''}
							{sigil.slot1.name}
							{sigil.slot1.value > 0 ? '+' : ''}{sigil.slot1.value}
						{/if}
					</div>
					<div class="slot2">
						{#if sigil.slot2.name !== ''}
							{sigil.slot2.name}
							{sigil.slot2.value > 0 ? '+' : ''}{sigil.slot2.value}
						{/if}
					</div>
					<div class="slot3">
						{#if sigil.slot3.name !== ''}
							{sigil.slot3.name}
							{sigil.slot3.value > 0 ? '+' : ''}{sigil.slot3.value}
						{/if}
					</div>
					<div class="slot4">
						{#if sigil.slot4.name !== ''}
							{sigil.slot4.name}
							{sigil.slot4.value > 0 ? '+' : ''}{sigil.slot4.value}
						{/if}
					</div>
				</div>
			{:else}
				<div class="page-extra-nonequippable">
					<div class="icon">
						<div class="item-icon-container">
							<div
								class="item-icon"
								bind:this={ref}
								style:position="relative"
								on:click={(e) => handleFocus()}
								role="button"
								tabindex="0"
								on:keypress={(e) => handleFocus()}
							>
								<svelte:component this={icon} {...iconProps} />
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
		{:else if itemType === 'Decoration'}
			{#if currentPage === 1}
				<div class="page-1-decoration">
					<div class="icon">
						<div class="item-icon-container">
							<div
								class="item-icon"
								bind:this={ref}
								style:position="relative"
								on:click={(e) => handleFocus()}
								role="button"
								tabindex="0"
								on:keypress={(e) => handleFocus()}
							>
								<svelte:component this={icon} {...iconProps} />
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

					<div class="description">
						{description}
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
				<div class="page-2-decoration">
					<div class="icon">
						<div class="item-icon-container">
							<div
								class="item-icon"
								bind:this={ref}
								style:position="relative"
								on:click={(e) => handleFocus()}
								role="button"
								tabindex="0"
								on:keypress={(e) => handleFocus()}
							>
								<svelte:component this={icon} {...iconProps} />
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

					<span class="armor-class">
						<span class="text-yellow">Armor classes: </span><span
							>{armorClass}</span
						>
					</span>

					<span class="weapon-class">
						<span class="text-yellow">Weapon classes: </span><span
							>{weaponClass}</span
						>
					</span>

					<span class="requirement">
						<span class="text-yellow">Slots required: </span><span
							>{slotsRequired}</span
						>
					</span>

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
				<div class="page-3-decoration">
					<div class="icon">
						<div class="item-icon-container">
							<div
								class="item-icon"
								bind:this={ref}
								style:position="relative"
								on:click={(e) => handleFocus()}
								role="button"
								tabindex="0"
								on:keypress={(e) => handleFocus()}
							>
								<svelte:component this={icon} {...iconProps} />
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
						{#if decoration.slot1.name !== ''}
							{decoration.slot1.name}
							{decoration.slot1.value > 0 ? '+' : ''}{decoration.slot1.value}
						{/if}
					</div>
					<div class="slot2">
						{#if decoration.slot2.name !== ''}
							{decoration.slot2.name}
							{decoration.slot2.value > 0 ? '+' : ''}{decoration.slot2.value}
						{/if}
					</div>
					<div class="slot3">
						{#if decoration.slot3.name !== ''}
							{decoration.slot3.name}
							{decoration.slot3.value > 0 ? '+' : ''}{decoration.slot3.value}
						{/if}
					</div>
					<div class="slot4">
						{#if decoration.slot4.name !== ''}
							{decoration.slot4.name}
							{decoration.slot4.value > 0 ? '+' : ''}{decoration.slot4.value}
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
		{:else if itemType === 'Cuff'}
			{#if currentPage === 1}
				<div class="page-1-cuff">
					<div class="icon">
						<div class="item-icon-container">
							<div
								class="item-icon"
								bind:this={ref}
								style:position="relative"
								on:click={(e) => handleFocus()}
								role="button"
								tabindex="0"
								on:keypress={(e) => handleFocus()}
							>
								<svelte:component this={icon} {...iconProps} />
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

					<div class="description">
						{description}
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
				<div class="page-2-cuff">
					<div class="icon">
						<div class="item-icon-container">
							<div
								class="item-icon"
								bind:this={ref}
								style:position="relative"
								on:click={(e) => handleFocus()}
								role="button"
								tabindex="0"
								on:keypress={(e) => handleFocus()}
							>
								<svelte:component this={icon} {...iconProps} />
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

					<div class="requirement">
						<span class="text-yellow">Slots required: </span><span
							>{slotsRequired}</span
						>
					</div>

					<div class="cuff-limit-info">You may only attach 2 cuffs total.</div>

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
				<div class="page-3-cuff">
					<div class="icon">
						<div class="item-icon-container">
							<div
								class="item-icon"
								bind:this={ref}
								style:position="relative"
								on:click={(e) => handleFocus()}
								role="button"
								tabindex="0"
								on:keypress={(e) => handleFocus()}
							>
								<svelte:component this={icon} {...iconProps} />
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
						{#if cuffSkill1 !== ''}
							{cuffSkill1}
							{cuffSkill1Points > 0 ? '+' : ''}{cuffSkill1Points}
						{/if}
					</div>
					<div class="slot2">
						{#if cuffSkill2 !== ''}
							{cuffSkill2}
							{cuffSkill2Points > 0 ? '+' : ''}{cuffSkill2Points}
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
		{:else if itemType === 'Zenith Cuff'}
			{#if currentPage === 1}
				<div class="page-1-cuff">
					<div class="icon">
						<div class="item-icon-container">
							<div
								class="item-icon"
								bind:this={ref}
								style:position="relative"
								on:click={(e) => handleFocus()}
								role="button"
								tabindex="0"
								on:keypress={(e) => handleFocus()}
							>
								<svelte:component this={icon} {...iconProps} />
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

					<div class="description">
						{description}
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
				<div class="page-2-cuff">
					<div class="icon">
						<div class="item-icon-container">
							<div
								class="item-icon"
								bind:this={ref}
								style:position="relative"
								on:click={(e) => handleFocus()}
								role="button"
								tabindex="0"
								on:keypress={(e) => handleFocus()}
							>
								<svelte:component this={icon} {...iconProps} />
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

					<span class="requirement">
						<span class="text-yellow">Slots required: </span><span
							>{slotsRequired}</span
						>
					</span>

					<span class="cuff-limit-info">You may only attach 2 cuffs total.</span
					>

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
				<div class="page-3-zenith-cuff">
					<div class="icon">
						<div class="item-icon-container">
							<div
								class="item-icon"
								bind:this={ref}
								style:position="relative"
								on:click={(e) => handleFocus()}
								role="button"
								tabindex="0"
								on:keypress={(e) => handleFocus()}
							>
								<svelte:component this={icon} {...iconProps} />
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

					<div class="zenith">
						{#if zenithSkill !== ''}
							<span class="double-width-transform">«</span>{zenithSkill}<span
								class="double-width-transform">»</span
							>
						{/if}
					</div>
					<div class="slot1">
						{#if cuffSkill1 !== ''}
							{cuffSkill1}
							{cuffSkill1Points > 0 ? '+' : ''}{cuffSkill1Points}
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
		{:else if itemType === 'Hiden Cuff'}
			{#if currentPage === 1}
				<div class="page-1-cuff">
					<div class="icon">
						<div class="item-icon-container">
							<div
								class="item-icon"
								bind:this={ref}
								style:position="relative"
								on:click={(e) => handleFocus()}
								role="button"
								tabindex="0"
								on:keypress={(e) => handleFocus()}
							>
								<svelte:component this={icon} {...iconProps} />
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

					<div class="description">
						{description}
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
				<div class="page-2-cuff">
					<div class="icon">
						<div class="item-icon-container">
							<div
								class="item-icon"
								bind:this={ref}
								style:position="relative"
								on:click={(e) => handleFocus()}
								role="button"
								tabindex="0"
								on:keypress={(e) => handleFocus()}
							>
								<svelte:component this={icon} {...iconProps} />
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

					<span class="requirement">
						<span class="text-yellow">Slots required: </span><span
							>{slotsRequired}</span
						>
					</span>

					<span class="cuff-limit-info">You may only attach 2 cuffs total.</span
					>

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
				<div class="page-3-hiden-cuff">
					<div class="icon">
						<div class="item-icon-container">
							<div
								class="item-icon"
								bind:this={ref}
								style:position="relative"
								on:click={(e) => handleFocus()}
								role="button"
								tabindex="0"
								on:keypress={(e) => handleFocus()}
							>
								<svelte:component this={icon} {...iconProps} />
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

					<div class="info">Hiden takes no slots</div>

					<div class="slot1">
						{#if cuffSkill1 !== ''}
							{cuffSkill1}
							{cuffSkill1Points > 0 ? '+' : ''}{cuffSkill1Points}
						{/if}
					</div>
					<div class="slot2">
						{#if cuffSkill2 !== ''}
							{cuffSkill2}
							{cuffSkill2Points > 0 ? '+' : ''}{cuffSkill2Points}
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
		{:else if itemType === 'Tower Sigil'}
			{#if currentPage === 1}
				<div class="page-1-tower">
					<div class="icon">
						<div class="item-icon-container">
							<div
								class="item-icon"
								bind:this={ref}
								style:position="relative"
								on:click={(e) => handleFocus()}
								role="button"
								tabindex="0"
								on:keypress={(e) => handleFocus()}
							>
								<svelte:component this={icon} {...iconProps} />
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

					<div class="description">
						{description}
					</div>

					<div class="info">
						{requirementText}
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
				<div class="page-2-tower">
					<div class="icon">
						<div class="item-icon-container">
							<div
								class="item-icon"
								bind:this={ref}
								style:position="relative"
								on:click={(e) => handleFocus()}
								role="button"
								tabindex="0"
								on:keypress={(e) => handleFocus()}
							>
								<svelte:component this={icon} {...iconProps} />
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

					<span class="requirement">
						<span class="text-yellow">Slots required: </span><span
							>{slotsRequired}</span
						>
					</span>

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
				<div class="page-3-tower-sigil">
					<div class="icon">
						<div class="item-icon-container">
							<div
								class="item-icon"
								bind:this={ref}
								style:position="relative"
								on:click={(e) => handleFocus()}
								role="button"
								tabindex="0"
								on:keypress={(e) => handleFocus()}
							>
								<svelte:component this={icon} {...iconProps} />
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

					<div class="zenith">
						{#if zenithSkill !== ''}
							<span class="double-width-transform">«</span>{zenithSkill}<span
								class="double-width-transform">»</span
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
			{/if}
		{:else if itemType === 'Tower Decoration'}
			{#if currentPage === 1}
				<div class="page-1-tower">
					<div class="icon">
						<div class="item-icon-container">
							<div
								class="item-icon"
								bind:this={ref}
								style:position="relative"
								on:click={(e) => handleFocus()}
								role="button"
								tabindex="0"
								on:keypress={(e) => handleFocus()}
							>
								<svelte:component this={icon} {...iconProps} />
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

					<div class="description">
						{description}
					</div>

					<div class="info">
						{requirementText}
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
				<div class="page-2-tower">
					<div class="icon">
						<div class="item-icon-container">
							<div
								class="item-icon"
								bind:this={ref}
								style:position="relative"
								on:click={(e) => handleFocus()}
								role="button"
								tabindex="0"
								on:keypress={(e) => handleFocus()}
							>
								<svelte:component this={icon} {...iconProps} />
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

					<span class="requirement">
						<span class="text-yellow">Slots required: </span><span
							>{slotsRequired}</span
						>
					</span>

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
				<div class="page-3-tower-decoration">
					<div class="icon">
						<div class="item-icon-container">
							<div
								class="item-icon"
								bind:this={ref}
								style:position="relative"
								on:click={(e) => handleFocus()}
								role="button"
								tabindex="0"
								on:keypress={(e) => handleFocus()}
							>
								<svelte:component this={icon} {...iconProps} />
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
						{#if towerSkill !== ''}
							{towerSkill}
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

	.armor-class {
		grid-area: armor-class;
	}

	.weapon-class {
		grid-area: weapon-class;
	}

	.requirement {
		grid-area: requirement;
		margin-top: var(--cds-spacing-02);
	}

	.cuff-limit-info {
		grid-area: cuff-limit-info;
	}

	.info {
		grid-area: info;
		margin-top: var(--cds-spacing-02);
		color: var(--fz-text-yellow);
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

	.zenith {
		grid-area: zenith;
		color: var(--fz-rare-12);
		margin-top: var(--cds-spacing-02);
	}

	.double-width-transform {
		transform: scaleX(2);
		display: inline-block;
		margin-right: var(--cds-spacing-02);
		margin-left: var(--cds-spacing-02);
	}

	.page-1-sigil {
		display: grid;
		grid-template-areas:
			'icon slot1 slot2'
			'icon slot3 slot4'
			'rarity slot3 slot4';
		gap: 0.5rem;
		grid-template-columns: auto 1fr 1fr;
	}

	.page-1-other {
		display: grid;
		grid-template-areas:
			'icon description description'
			'icon description description'
			'rarity description description';
		gap: 0.5rem;
		grid-template-columns: auto 1fr 1fr;
	}

	.page-extra-nonequippable {
		display: grid;
		grid-template-areas:
			'icon icon empty'
			'icon icon empty'
			'rarity pages pages';
		gap: 0.5rem;
		grid-template-columns: auto 1fr 1fr;
	}

	.page-1-decoration,
	.page-1-cuff {
		display: grid;
		grid-template-areas:
			'icon description description'
			'icon description description'
			'rarity pages pages';
		gap: 0.5rem;
		grid-template-columns: auto 1fr 1fr;
	}

	.page-2-decoration {
		display: grid;
		grid-template-areas:
			'icon armor-class armor-class'
			'icon weapon-class weapon-class'
			'rarity requirement pages';
		gap: 0.5rem;
	}

	.page-2-cuff {
		display: grid;
		grid-template-areas:
			'icon requirement requirement'
			'icon cuff-limit-info cuff-limit-info'
			'rarity pages pages';
		gap: 0.5rem;
	}

	.page-3-cuff {
		display: grid;
		grid-template-areas:
			'icon slot1 slot1'
			'icon slot2 slot2'
			'rarity pages pages';
		gap: 0.5rem;
		grid-template-columns: auto 1fr 1fr;
	}

	.page-3-zenith-cuff {
		display: grid;
		grid-template-areas:
			'icon zenith zenith'
			'icon slot1 slot1'
			'rarity pages pages';
		gap: 0.5rem;
		grid-template-columns: auto 1fr 1fr;
	}

	.page-3-hiden-cuff {
		display: grid;
		grid-template-areas:
			'icon info info'
			'icon slot1 slot2'
			'rarity pages pages';
		gap: 0.5rem;
	}

	.page-3-decoration {
		display: grid;
		grid-template-areas:
			'icon slot1 slot2'
			'icon slot3 slot4'
			'rarity pages pages';
		gap: 0.5rem;
		grid-template-columns: auto 1fr 1fr;
	}

	.page-1-tower {
		display: grid;
		grid-template-areas:
			'icon description description'
			'icon description description'
			'rarity info pages';
		gap: 0.5rem;
		grid-template-columns: auto 1fr 1fr;
	}

	.page-2-tower {
		display: grid;
		grid-template-areas:
			'icon requirement requirement'
			'icon requirement requirement'
			'rarity pages pages';
		gap: 0.5rem;
		grid-template-columns: auto 1fr 1fr;
	}

	.page-3-tower-sigil {
		display: grid;
		grid-template-areas:
			'icon zenith zenith'
			'icon zenith zenith'
			'rarity pages pages';
		gap: 0.5rem;
		grid-template-columns: auto 1fr 1fr;
	}

	.page-3-tower-decoration {
		display: grid;
		grid-template-areas:
			'icon slot1 slot1'
			'icon slot1 slot1'
			'rarity pages pages';
		gap: 0.5rem;
		grid-template-columns: auto 1fr 1fr;
	}

	.slot1,
	.slot2 {
		margin-top: var(--cds-spacing-01);
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
