<!--
  ~ © 2023 Doriel Rivalet
  ~ Use of this source code is governed by a MIT license that can be
  ~ found in the LICENSE file.
-->

<script lang="ts">
	import { ArmorTypes } from '$lib/client/modules/frontier/armor';
	import type {
		FrontierArmorGRLevel,
		FrontierArmorLevel,
		FrontierArmorClass,
		FrontierEquipmentDecorations,
		FrontierEquipmentRank,
		FrontierRarity,
		FrontierArmorType,
		FrontierEquipmentSkillPoints,
		FrontierArmorID,
	} from '$lib/client/modules/frontier/types';
	import ArrowIcon from '$lib/client/components/frontier/icon/ArrowIcon.svelte';

	import DecoratedBorder from '$lib/client/components/frontier/DecoratedBorder.svelte';
	import { stringReplacements } from '$lib/client/modules/frontier/strings';
	import GRankEquipmentIcon from './icon/GRankEquipmentIcon.svelte';
	import ZenithEquipmentIcon from './icon/ZenithEquipmentIcon2.svelte';
	import type {
		FrontierArmorSkillName,
		FrontierArmorSkillTree,
		FrontierZenithSkill,
	} from 'ezlion';
	//TODO Transmog icon

	/** Truncated to 18 characters.*/
	export let name = 'Name';
	export let level: FrontierArmorLevel = 7;
	export let GRLevel: FrontierArmorGRLevel = 7;
	export let defense: number = 100;
	export let fireResistance: number = 0;
	export let waterResistance: number = 0;
	export let thunderResistance: number = 0;
	export let iceResistance: number = 0;
	export let dragonResistance: number = 0;
	/**TODO Whether to show transmog icon.*/
	export let transmog = true;
	export let armorClass: FrontierArmorClass = 'Either';
	export let armorID: FrontierArmorID = 0;

	/** The overlay icon in the bottom left corner.*/
	export let rank: FrontierEquipmentRank = 'G';

	// TODO ids
	export let zenithSkill: FrontierZenithSkill = 'Skill Slots Up+1';

	// page 2
	export let description: string = 'Description.';
	export let rarity: FrontierRarity = 12;

	/** TODO Show extra icons.*/
	export let extraIcons = false;

	/**
	 * TODO Set theme to light.
	 */
	export let light = false;

	export let currentPage: number = 1;

	// TODO
	export let skillNames: FrontierArmorSkillTree[] = [
		'Blazing Grace',
		'Strong Attack',
		'Determination',
		'Absolute Defense',
		'Three Worlds Protection',
	];
	export let skillPoints: FrontierEquipmentSkillPoints = [10, 20, -30, 40, 50];

	export let armorType: FrontierArmorType = 'Zenith';

	export let automaticSkill: FrontierArmorSkillName = '';

	export let decorations: FrontierEquipmentDecorations = {
		slot1: {
			name: 'Zindol BM GX1',
			skill1: {
				name: 'Blazing Grace',
				points: 5,
			},
			skill2: {
				name: 'Blazing Grace',
				points: 5,
			},
			skill3: {
				name: 'Blazing Grace',
				points: 5,
			},
			skill4: {
				name: 'Blazing Grace',
				points: 5,
			},
		},
		slot2: {
			name: 'Zindol BM GX1',
			skill1: {
				name: 'Blazing Grace',
				points: 5,
			},
			skill2: {
				name: 'Blazing Grace',
				points: 5,
			},
			skill3: {
				name: 'Blazing Grace',
				points: 5,
			},
			skill4: {
				name: 'Blazing Grace',
				points: 5,
			},
		},
		slot3: {
			name: 'Zindol BM GX1',
			skill1: {
				name: 'Blazing Grace',
				points: 5,
			},
			skill2: {
				name: 'Blazing Grace',
				points: 5,
			},
			skill3: {
				name: 'Blazing Grace',
				points: 5,
			},
			skill4: {
				name: 'Blazing Grace',
				points: 5,
			},
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
	const maxDefenseLength = 5;
	const maxElementResLength = 5;
	const maxPages = 6;

	let iconProps = {
		rarity: rarity,
	};

	$: rarityColor = stringReplacements.colorFromRarity(rarity);
	// TODO the colors are different?
	$: GRLevelColor = stringReplacements.colorFromRarity(GRLevel);

	// TODO slots icons
</script>

<DecoratedBorder>
	<div class="container">
		{#if currentPage === 1}
			<div class="page-1">
				<div class="header">
					<div class="armor-icon-container">
						<div class="armor-icon">
							<svelte:component
								this={ArmorTypes[armorID].icon}
								{...iconProps}
							/>
						</div>
						<div class="armor-rank">
							{#if rank === 'G'}
								<GRankEquipmentIcon />
							{:else if rank === 'Z'}
								<ZenithEquipmentIcon />
							{/if}
						</div>
					</div>
					<div class="armor-name">
						<div
							style="color: var({rarityColor}); overflow: hidden;white-space: nowrap; text-overflow: clip; max-width: 28ch;"
						>
							<span class="text-yellow double-width">:</span>{name.substring(
								0,
								maxNameLength,
							)}
						</div>
					</div>
				</div>

				<div class="level">
					<span class="text-yellow"
						>Lv<span class="text-yellow double-width">:</span><span
							style="color: var(--ctp-mocha-text);">{level}</span
						>
					</span>
				</div>

				<div class="defense">
					<span class="text-yellow"
						>Defense<span class="text-yellow double-width">:</span><span
							style="color: var(--ctp-mocha-text);"
							>{defense.toString().substring(0, maxDefenseLength)}</span
						>
					</span>
				</div>

				<div class="fireRes">
					<span class="text-yellow"
						>Fire<span class="text-yellow double-width">:</span><span
							style="color: var(--ctp-mocha-text);"
							>{fireResistance
								.toString()
								.substring(0, maxElementResLength)}</span
						>
					</span>
				</div>

				<div class="waterRes">
					<span class="text-yellow"
						>Water<span class="text-yellow double-width">:</span><span
							style="color: var(--ctp-mocha-text);"
							>{waterResistance
								.toString()
								.substring(0, maxElementResLength)}</span
						>
					</span>
				</div>

				<div class="thunderRes">
					<span class="text-yellow"
						>Thunder<span class="text-yellow double-width">:</span><span
							style="color: var(--ctp-mocha-text);"
							>{thunderResistance
								.toString()
								.substring(0, maxElementResLength)}</span
						>
					</span>
				</div>

				<div class="iceRes">
					<span class="text-yellow"
						>Ice<span class="text-yellow double-width">:</span><span
							style="color: var(--ctp-mocha-text);"
							>{iceResistance
								.toString()
								.substring(0, maxElementResLength)}</span
						>
					</span>
				</div>

				<div class="dragonRes">
					<span class="text-yellow"
						>Dragon<span class="text-yellow double-width">:</span><span
							style="color: var(--ctp-mocha-text);"
							>{dragonResistance
								.toString()
								.substring(0, maxElementResLength)}</span
						>
					</span>
				</div>

				<!-- TODO resistance icons. and negative res color?
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
									: 'var(--ctp-mocha-text)'};"
								>{elementValue
									.toString()
									.substring(0, maxElementStatusLength)}</span
							>
						{/if}
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
		{:else if currentPage === 2}
			<div class="page-2">
				<div class="icon">
					<div class="armor-icon-container">
						<div class="armor-icon">
							<svelte:component
								this={ArmorTypes[armorID].icon}
								{...iconProps}
							/>
						</div>
						<div class="armor-rank">
							{#if rank === 'G'}
								<GRankEquipmentIcon />
							{:else if rank === 'Z'}
								<ZenithEquipmentIcon />
							{/if}
						</div>
					</div>
				</div>

				<div class="description">
					{description}
					{#if automaticSkill === ''}
						<span class="text-purple"
							><span class="double-width-transform">«</span>{armorType}<span
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
						<p class="text-yellow">Equippable:</p>
					</div>
					<div class="hunter-class">
						<p>{armorClass}</p>
					</div>
				</div>

				<div class="rarity">
					<p class="text-yellow">
						{#if GRLevel <= 0}
							Rarity: <span style="color: var({rarityColor});">{rarity}</span>
						{:else}
							GR: <span style="color: var({GRLevelColor});">{GRLevel}</span>
						{/if}
					</p>
				</div>

				<div class="zenith">
					{#if zenithSkill !== ''}
						<span class="double-width-transform">«</span>{zenithSkill}<span
							class="double-width-transform">»</span
						>
					{/if}
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
							<div
								class="skill-points"
								style={skillPoints[1] === 0 ? 'opacity: 0;' : 'opacity: 1;'}
							>
								: {#if skillPoints[1] >= 0}+{/if}{skillPoints[1]}
							</div>
						</div>
						<div class="skill">
							<div class="skill-name">{skillNames[2]}</div>
							<div
								class="skill-points"
								style={skillPoints[2] === 0 ? 'opacity: 0;' : 'opacity: 1;'}
							>
								: {#if skillPoints[2] >= 0}+{/if}{skillPoints[2]}
							</div>
						</div>
						<div class="skill">
							<div class="skill-name">{skillNames[3]}</div>
							<div
								class="skill-points"
								style={skillPoints[3] === 0 ? 'opacity: 0;' : 'opacity: 1;'}
							>
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
								<div
									class="skill-points"
									style={skillPoints[4] === 0 ? 'opacity: 0;' : 'opacity: 1;'}
								>
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
				<p class="p-inherit text-yellow">[Deco 1 Details]</p>
				<p class="p-inherit text-orange">
					<span class="double-width">•</span>{decorations.slot1.name.substring(
						0,
						maxNameLength,
					)}
				</p>
				<div class="skill">
					<div class="deco-skill-name">{decorations.slot1.skill1.name}</div>
					<div
						class="skill-points"
						style={decorations.slot1.skill1.points === 0
							? 'opacity: 0;'
							: 'opacity: 1;'}
					>
						: {#if decorations.slot1.skill1.points >= 0}+{/if}{decorations.slot1
							.skill1.points}
					</div>
				</div>
				<div class="skill">
					<div class="deco-skill-name">{decorations.slot1.skill2.name}</div>
					<div
						class="skill-points"
						style={decorations.slot1.skill2.points === 0
							? 'opacity: 0;'
							: 'opacity: 1;'}
					>
						: {#if decorations.slot1.skill2.points >= 0}+{/if}{decorations.slot1
							.skill2.points}
					</div>
				</div>
				<div class="skill">
					<div class="deco-skill-name">{decorations.slot1.skill3.name}</div>
					<div
						class="skill-points"
						style={decorations.slot1.skill3.points === 0
							? 'opacity: 0;'
							: 'opacity: 1;'}
					>
						: {#if decorations.slot1.skill3.points >= 0}+{/if}{decorations.slot1
							.skill3.points}
					</div>
				</div>
				<div class="last-deco-skill">
					<div class="skill">
						<div class="deco-skill-name">{decorations.slot1.skill4.name}</div>
						<div
							class="skill-points"
							style={decorations.slot1.skill4.points === 0
								? 'opacity: 0;'
								: 'opacity: 1;'}
						>
							: {#if decorations.slot1.skill4.points >= 0}+{/if}{decorations
								.slot1.skill4.points}
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
			</div>
		{:else if currentPage === 5}
			<div class="page-5">
				<p class="p-inherit text-yellow">[Deco 2 Details]</p>
				<p class="p-inherit text-orange">
					<span class="double-width">•</span>{decorations.slot2.name.substring(
						0,
						maxNameLength,
					)}
				</p>
				<div class="skill">
					<div class="deco-skill-name">{decorations.slot2.skill1.name}</div>
					<div
						class="skill-points"
						style={decorations.slot2.skill1.points === 0
							? 'opacity: 0;'
							: 'opacity: 1;'}
					>
						: {#if decorations.slot2.skill1.points >= 0}+{/if}{decorations.slot2
							.skill1.points}
					</div>
				</div>
				<div class="skill">
					<div class="deco-skill-name">{decorations.slot2.skill2.name}</div>
					<div
						class="skill-points"
						style={decorations.slot2.skill2.points === 0
							? 'opacity: 0;'
							: 'opacity: 1;'}
					>
						: {#if decorations.slot2.skill2.points >= 0}+{/if}{decorations.slot2
							.skill2.points}
					</div>
				</div>
				<div class="skill">
					<div class="deco-skill-name">{decorations.slot2.skill3.name}</div>
					<div
						class="skill-points"
						style={decorations.slot2.skill3.points === 0
							? 'opacity: 0;'
							: 'opacity: 1;'}
					>
						: {#if decorations.slot2.skill3.points >= 0}+{/if}{decorations.slot2
							.skill3.points}
					</div>
				</div>
				<div class="last-deco-skill">
					<div class="skill">
						<div class="deco-skill-name">{decorations.slot2.skill4.name}</div>
						<div
							class="skill-points"
							style={decorations.slot2.skill4.points === 0
								? 'opacity: 0;'
								: 'opacity: 1;'}
						>
							: {#if decorations.slot2.skill4.points >= 0}+{/if}{decorations
								.slot2.skill4.points}
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
			</div>
		{:else if currentPage === 6}
			<div class="page-6">
				<p class="p-inherit text-yellow">[Deco 3 Details]</p>
				<p class="p-inherit text-orange">
					<span class="double-width">•</span>{decorations.slot3.name.substring(
						0,
						maxNameLength,
					)}
				</p>
				<div class="skill">
					<div class="deco-skill-name">{decorations.slot3.skill1.name}</div>
					<div
						class="skill-points"
						style={decorations.slot3.skill1.points === 0
							? 'opacity: 0;'
							: 'opacity: 1;'}
					>
						: {#if decorations.slot3.skill1.points >= 0}+{/if}{decorations.slot3
							.skill1.points}
					</div>
				</div>
				<div class="skill">
					<div class="deco-skill-name">{decorations.slot3.skill2.name}</div>
					<div
						class="skill-points"
						style={decorations.slot3.skill2.points === 0
							? 'opacity: 0;'
							: 'opacity: 1;'}
					>
						: {#if decorations.slot3.skill2.points >= 0}+{/if}{decorations.slot3
							.skill2.points}
					</div>
				</div>
				<div class="skill">
					<div class="deco-skill-name">{decorations.slot3.skill3.name}</div>
					<div
						class="skill-points"
						style={decorations.slot3.skill3.points === 0
							? 'opacity: 0;'
							: 'opacity: 1;'}
					>
						: {#if decorations.slot3.skill3.points >= 0}+{/if}{decorations.slot3
							.skill3.points}
					</div>
				</div>
				<div class="last-deco-skill">
					<div class="skill">
						<div class="deco-skill-name">{decorations.slot3.skill4.name}</div>
						<div
							class="skill-points"
							style={decorations.slot3.skill4.points === 0
								? 'opacity: 0;'
								: 'opacity: 1;'}
						>
							: {#if decorations.slot3.skill4.points >= 0}+{/if}{decorations
								.slot3.skill4.points}
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
			</div>
		{/if}
	</div>
</DecoratedBorder>

<style lang="scss">
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

	.armor-name {
		display: flex;
		align-items: center; /* Center vertically */
		justify-content: start; /* Center horizontally */
		height: 100%; /* Ensure the container takes up the full height */
		width: 100%;
	}

	.armor-icon-container {
		position: relative;
		display: inline-block;
	}

	.armor-icon {
		position: relative;
		width: var(--cds-spacing-10);
		transform: scale(80%) translateY(-5px) translateX(5px);
	}

	.armor-rank {
		position: absolute;
		bottom: 0;
		width: 16px;
		height: auto;
		z-index: 2;
		left: 0;
	}

	.header {
		grid-area: header;
		display: flex;
		margin: 0px;
		padding: 0px;
		flex-direction: row;
		gap: var(--cds-spacing-01);
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

	.level {
		grid-area: level;
	}

	.defense {
		grid-area: defense;
	}

	.fireRes {
		grid-area: fireRes;
	}

	.waterRes {
		grid-area: waterRes;
	}

	.thunderRes {
		grid-area: thunderRes;
	}

	.iceRes {
		grid-area: iceRes;
	}

	.dragonRes {
		grid-area: dragonRes;
	}

	.page-1 {
		display: grid;
		grid-template-areas:
			'header header'
			'header header'
			'level defense'
			'fireRes waterRes'
			'thunderRes dragonRes'
			'iceRes pages';
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
	.hunter-class {
		width: 50%;
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

	.last-skill {
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

	.text-red {
		color: var(--fz-text-red);
	}

	.text-purple {
		color: var(--fz-text-purple);
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

	.page-3 .pages {
		position: absolute;
		bottom: 0.5rem;
		right: 0.5rem;
	}
</style>
