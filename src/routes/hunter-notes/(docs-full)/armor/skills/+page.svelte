<script lang="ts">
	import PageTurn from '$lib/client/components/PageTurn.svelte';
	import SectionHeadingTopLevel from '$lib/client/components/SectionHeadingTopLevel.svelte';
	import HunterNotesPage from '$lib/client/components/HunterNotesPage.svelte';
	import { page } from '$app/stores';
	import SectionHeading from '$lib/client/components/SectionHeading.svelte';
	import DataTable from 'carbon-components-svelte/src/DataTable/DataTable.svelte';
	import InlineTooltip from '$lib/client/components/frontier/InlineTooltip.svelte';
	import { getCSVFromArray } from '$lib/client/modules/csv';
	import { downloadDomAsPng } from '$lib/client/modules/download';
	import Button from 'carbon-components-svelte/src/Button/Button.svelte';
	import CopyButton from 'carbon-components-svelte/src/CopyButton/CopyButton.svelte';
	import Toolbar from 'carbon-components-svelte/src/DataTable/Toolbar.svelte';
	import Download from 'carbon-icons-svelte/lib/Download.svelte';

	import { ezlionSkillArmorPriority } from 'ezlion';
	import ToolbarSearch from 'carbon-components-svelte/src/DataTable/ToolbarSearch.svelte';
	import { getWeaponIcon } from '$lib/client/modules/frontier/weapons';
	import Checkbox from 'carbon-components-svelte/src/Checkbox/Checkbox.svelte';
	import { getLocationIcon } from '$lib/client/modules/frontier/locations';
	import { getItemIcon } from '$lib/client/modules/frontier/items';
	import { getArmorIcon } from '$lib/client/modules/frontier/armor';
	import Dropdown from 'carbon-components-svelte/src/Dropdown/Dropdown.svelte';
	import type { FrontierArmorType } from '$lib/client/modules/frontier/types';
	import Tooltip from 'carbon-components-svelte/src/Tooltip/Tooltip.svelte';
	import GouBoost from '$lib/client/components/frontier/icon/GouBoost.svelte';

	function getArmorSkillSlots(
		skillSlotsUpInputArmorPieces: {
			head: FrontierArmorType;
			chest: FrontierArmorType;
			arms: FrontierArmorType;
			waist: FrontierArmorType;
			legs: FrontierArmorType;
		},
		maximumSlots?: boolean,
	) {
		const defaultSkillSlots = 10;
		let result = 0;

		// Convert the input object into an array of values
		const armorPieces = Object.values(skillSlotsUpInputArmorPieces);

		// Count the number of 'G' or 'Zenith' pieces
		const gOrZenithCount = armorPieces.filter(
			(piece) => piece === 'G' || piece === 'Zenith',
		).length;

		// Increase result by 2 if there are 5 'G' or 'Zenith' pieces
		// Increase result by 1 if there are 3 'G' or 'Zenith' pieces
		if (gOrZenithCount >= 5) {
			result += 2;
		} else if (gOrZenithCount >= 3) {
			result += 1;
		}

		// For every 'Zenith' piece, increase result by 1
		const zenithCount = maximumSlots
			? armorPieces.filter((piece) => piece === 'Zenith').length
			: 0;
		result += zenithCount;

		return result + defaultSkillSlots;
	}

	function getTotalSkillSlots(
		skillSlotsUpArmorPieces: number,
		skillSlotsUpInputZenithWeapon: boolean,
		skillSlotsUpInputZenithCuff: boolean,
		skillSlotsUpInputTrueHidenCuff: boolean,
		skillSlotsUpInputSkillFruit: boolean,
		skillSlotsUpInputLoginBoostGreatLuck: boolean,
		skillSlotsUpInputDivaSkill: boolean,
		skillSlotsUpInputGuildFood: boolean,
	) {
		let result = 0;

		if (skillSlotsUpInputZenithWeapon) {
			result++;
		}

		if (skillSlotsUpInputZenithCuff) {
			result++;
		}

		if (skillSlotsUpInputTrueHidenCuff) {
			result++;
		}

		if (skillSlotsUpInputSkillFruit) {
			result++;
		}

		if (skillSlotsUpInputLoginBoostGreatLuck) {
			result++;
		}

		if (skillSlotsUpInputDivaSkill) {
			result++;
		}

		if (skillSlotsUpInputGuildFood) {
			result++;
		}

		return result + skillSlotsUpArmorPieces;
	}

	function getExtraSkillSlots(
		skillSlotsUpInputZenithWeapon: boolean,
		skillSlotsUpInputZenithCuff: boolean,
		skillSlotsUpInputTrueHidenCuff: boolean,
		skillSlotsUpInputSkillFruit: boolean,
		skillSlotsUpInputLoginBoostGreatLuck: boolean,
		skillSlotsUpInputDivaSkill: boolean,
		skillSlotsUpInputGuildFood: boolean,
	) {
		let result = 0;

		if (skillSlotsUpInputZenithWeapon) {
			result++;
		}

		if (skillSlotsUpInputZenithCuff) {
			result++;
		}

		if (skillSlotsUpInputTrueHidenCuff) {
			result++;
		}

		if (skillSlotsUpInputSkillFruit) {
			result++;
		}

		if (skillSlotsUpInputLoginBoostGreatLuck) {
			result++;
		}

		if (skillSlotsUpInputDivaSkill) {
			result++;
		}

		if (skillSlotsUpInputGuildFood) {
			result++;
		}

		return result;
	}

	// Mapping function
	const mappedSkillArmorPriority = Object.keys(ezlionSkillArmorPriority).map(
		(key) => ({
			id: Number(key),
			priority: Number(key) + 1,
			skillTree: ezlionSkillArmorPriority[Number(key)],
		}),
	);

	let skillsPriorityFilteredRowIds: string[] = $state([]);

	let skillSlotsUpInputArmorPieces: {
		head: FrontierArmorType;
		chest: FrontierArmorType;
		arms: FrontierArmorType;
		waist: FrontierArmorType;
		legs: FrontierArmorType;
	} = $state({
		head: 'Zenith',
		chest: 'Zenith',
		arms: 'Zenith',
		waist: 'Zenith',
		legs: 'Zenith',
	});

	let skillSlotsUpInputZenithWeapon = $state(true);
	let skillSlotsUpInputZenithCuff = $state(true);
	let skillSlotsUpInputTrueHidenCuff = $state(true);
	let skillSlotsUpInputSkillFruit = $state(true);
	let skillSlotsUpInputLoginBoostGreatLuck = $state(true);
	let skillSlotsUpInputDivaSkill = $state(true);
	let skillSlotsUpInputGuildFood = $state(true);





	let extraSkillSlots = $derived(getExtraSkillSlots(
		skillSlotsUpInputZenithWeapon,
		skillSlotsUpInputZenithCuff,
		skillSlotsUpInputTrueHidenCuff,
		skillSlotsUpInputSkillFruit,
		skillSlotsUpInputLoginBoostGreatLuck,
		skillSlotsUpInputDivaSkill,
		skillSlotsUpInputGuildFood,
	));
	let maximumArmorSlots = $derived(getArmorSkillSlots(skillSlotsUpInputArmorPieces, true));
	let totalSkillSlots = $derived(extraSkillSlots + maximumArmorSlots);
	let innateArmorSlots = $derived(getArmorSkillSlots(skillSlotsUpInputArmorPieces));
	let maximumGearSlots =
		$derived(getArmorSkillSlots(skillSlotsUpInputArmorPieces, true) +
		(skillSlotsUpInputZenithWeapon ? 1 : 0) +
		(skillSlotsUpInputZenithCuff ? 1 : 0) +
		(skillSlotsUpInputTrueHidenCuff ? 1 : 0));

	// in multiplayer its more skills like encourage.
	// TODO links to each respective skill slot source explanation (other pages).
</script>

<HunterNotesPage displayTOC={true}>
	{@const SvelteComponent = getArmorIcon('Head')}
	{@const SvelteComponent_1 = getArmorIcon('Chest')}
	{@const SvelteComponent_2 = getArmorIcon('Arms')}
	{@const SvelteComponent_3 = getArmorIcon('Waist')}
	{@const SvelteComponent_4 = getArmorIcon('Legs')}
	{@const SvelteComponent_5 = getWeaponIcon('Great Sword')}
	{@const SvelteComponent_6 = getItemIcon('Berry')}
	<div>
		<SectionHeadingTopLevel title={'Armor Skills'} />
		<div>
			<section>
				<SectionHeading level={2} title="Skill Slots" />
				<div>
					<p class="spaced-paragraph">
						By default you can activate up to 10 skills. Equipping 3 pieces of G
						Rank Armor will increase your available skill slots to 11, and
						equipping 5 pieces will increase it to 12.
					</p>
					<p class="spaced-paragraph">
						Normal G, GF, GX, GS, and GP pieces all contribute to this total,
						while Gou armors upgraded to G or GF levels do not. This means that
						any set using a Burst piece can have a maximum of 11 skills.
						However, it's worth noting that the <InlineTooltip
							tooltip="Buff"
							text="Muscle skill boost"
							icon={GouBoost}
							iconSize="3ch"
							iconType="component"
						/> from a single Burst piece can offset the disadvantage of losing a
						skill slot.
					</p>

					<p class="spaced-paragraph">
						The Zenith Skill for <InlineTooltip
							tooltip="Armor Skill"
							text="Skill Slots Up"
							iconType="component"
							icon={getItemIcon('Jewel')}
						/> is always active alongside any other sources of additional slots.
						Any Z, ZY, ZX, or ZP pieces all count toward the G Rank piece requirements
						for slots. Like other Zenith skills, this can be found on Armor Pieces,
						Weapons, and Cuffs, allowing for a maximum of 7 additional slots.
					</p>
					<p class="spaced-paragraph">
						Exotic Skills do not occupy a skill slot.
					</p>
					<div class="skill-slots-up-inputs-container">
						<div class="inputs-container">
							<div class="input-container">
								<div class="input-icon">
									<SvelteComponent
										{...{ size: '4ch' }}
									/>
								</div>
								<div>
									<Dropdown
										titleText="Head Piece"
										type="inline"
										bind:selectedId={skillSlotsUpInputArmorPieces.head}
										items={[
											{ id: 'Origin', text: 'Origin' },
											{ id: 'G', text: 'G Rank' },
											{ id: 'Zenith', text: 'Zenith' },
										]}
									/>
								</div>
							</div>
							<div class="input-container">
								<div class="input-icon">
									<SvelteComponent_1
										{...{ size: '4ch' }}
									/>
								</div>
								<div>
									<Dropdown
										titleText="Chest Piece"
										type="inline"
										bind:selectedId={skillSlotsUpInputArmorPieces.chest}
										items={[
											{ id: 'Origin', text: 'Origin' },
											{ id: 'G', text: 'G Rank' },
											{ id: 'Zenith', text: 'Zenith' },
										]}
									/>
								</div>
							</div>
							<div class="input-container">
								<div class="input-icon">
									<SvelteComponent_2
										{...{ size: '4ch' }}
									/>
								</div>
								<div>
									<Dropdown
										titleText="Arms Piece"
										type="inline"
										bind:selectedId={skillSlotsUpInputArmorPieces.arms}
										items={[
											{ id: 'Origin', text: 'Origin' },
											{ id: 'G', text: 'G Rank' },
											{ id: 'Zenith', text: 'Zenith' },
										]}
									/>
								</div>
							</div>
							<div class="input-container">
								<div class="input-icon">
									<SvelteComponent_3
										{...{ size: '4ch' }}
									/>
								</div>
								<div>
									<Dropdown
										titleText="Waist Piece"
										type="inline"
										bind:selectedId={skillSlotsUpInputArmorPieces.waist}
										items={[
											{ id: 'Origin', text: 'Origin' },
											{ id: 'G', text: 'G Rank' },
											{ id: 'Zenith', text: 'Zenith' },
										]}
									/>
								</div>
							</div>
							<div class="input-container">
								<div class="input-icon">
									<SvelteComponent_4
										{...{ size: '4ch' }}
									/>
								</div>
								<div>
									<Dropdown
										titleText="Legs Piece"
										type="inline"
										bind:selectedId={skillSlotsUpInputArmorPieces.legs}
										items={[
											{ id: 'Origin', text: 'Origin' },
											{ id: 'G', text: 'G Rank' },
											{ id: 'Zenith', text: 'Zenith' },
										]}
									/>
								</div>
							</div>
						</div>
						<div class="inputs-container">
							<div class="input-container">
								<div
									class="input-icon"
									style:opacity={skillSlotsUpInputZenithWeapon ? '1' : '0.5'}
								>
									<SvelteComponent_5
										{...{ size: '4ch' }}
									/>
								</div>
								<div>
									<Checkbox
										labelText="Zenith Weapon"
										bind:checked={skillSlotsUpInputZenithWeapon}
									/>
								</div>
							</div>
							<div class="input-container">
								<div
									class="input-icon"
									style:opacity={skillSlotsUpInputZenithCuff ? '1' : '0.5'}
								>
									<img
										alt="Zenith Cuff"
										style="width: 4ch;"
										src={getLocationIcon('My Tore')}
									/>
								</div>
								<div>
									<Checkbox
										labelText="Zenith Cuff"
										bind:checked={skillSlotsUpInputZenithCuff}
									/>
								</div>
							</div>
							<div class="input-container">
								<div
									class="input-icon"
									style:opacity={skillSlotsUpInputTrueHidenCuff ? '1' : '0.5'}
								>
									<img
										alt="True Hiden Cuff"
										style="width: 4ch;"
										src={getLocationIcon('My Tore')}
									/>
								</div>
								<div>
									<Checkbox
										labelText="True Hiden Cuff"
										bind:checked={skillSlotsUpInputTrueHidenCuff}
									/>
								</div>
							</div>
							<div class="input-container">
								<div
									class="input-icon"
									style:opacity={skillSlotsUpInputSkillFruit ? '1' : '0.5'}
								>
									<SvelteComponent_6
										{...{ size: '4ch' }}
									/>
								</div>
								<div>
									<Checkbox
										labelText="Skill Fruit"
										bind:checked={skillSlotsUpInputSkillFruit}
									/>
								</div>
							</div>
							<div class="input-container">
								<div
									class="input-icon"
									style:opacity={skillSlotsUpInputDivaSkill ? '1' : '0.5'}
								>
									<img
										alt="Diva Skill"
										style="width: 4ch;"
										src={getLocationIcon('Diva Defense')}
									/>
								</div>
								<div>
									<Checkbox
										labelText="Diva Skill"
										bind:checked={skillSlotsUpInputDivaSkill}
									/>
								</div>
							</div>
							<div class="input-container">
								<div
									class="input-icon"
									style:opacity={skillSlotsUpInputGuildFood ? '1' : '0.5'}
								>
									<img
										alt="Guild Food"
										style="width: 4ch;"
										src={getLocationIcon('Guild Hall')}
									/>
								</div>
								<div>
									<Checkbox
										labelText="Guild Food"
										bind:checked={skillSlotsUpInputGuildFood}
									/>
								</div>
							</div>
							<div class="input-container">
								<div
									class="input-icon"
									style:opacity={skillSlotsUpInputLoginBoostGreatLuck
										? '1'
										: '0.5'}
								>
									<p>🍀</p>
								</div>
								<div>
									<Checkbox
										labelText="Log In Boost Great Luck"
										bind:checked={skillSlotsUpInputLoginBoostGreatLuck}
									/>
								</div>
							</div>
						</div>
					</div>
					<div class="skill-slots-result">
						<Tooltip align="start"
							><p>
								The Skill Slots naturally given by an armor piece. Does not
								count Skill Slots Up.
							</p></Tooltip
						>
						<p class="spaced-paragraph">
							<strong>Innate Armor Skill Slots:</strong>
							{innateArmorSlots}
						</p>
					</div>

					<div class="skill-slots-result">
						<Tooltip align="start">
							<p>
								The maximum skill slots from armor pieces, including Skill Slots
								Up.
							</p>
						</Tooltip>
						<p class="spaced-paragraph">
							<strong>Maximum Armor Skill Slots:</strong>
							{maximumArmorSlots}
						</p>
					</div>

					<div class="skill-slots-result">
						<Tooltip align="start">
							<p>
								The maximum skill slots a full set of gear can provide (armor,
								weapon and cuffs).
							</p>
						</Tooltip>
						<p class="spaced-paragraph">
							<strong>Maximum Gear Skill Slots:</strong>
							{maximumGearSlots}
						</p>
					</div>

					<div class="skill-slots-result">
						<Tooltip align="start">
							<p>
								Additional skill slots that can be added through buffs or other
								means (anything that is not an armor piece).
							</p>
						</Tooltip>
						<p class="spaced-paragraph">
							<strong>Extra Skill Slots:</strong>
							{extraSkillSlots}
						</p>
					</div>

					<div class="skill-slots-result">
						<Tooltip align="start">
							<p>
								The total number of skill slots available after all
								enhancements.
							</p>
						</Tooltip>
						<p class="spaced-paragraph">
							<strong>Total Skill Slots:</strong>
							{totalSkillSlots}
						</p>
					</div>
					<p>
						In practice, you're unlikely to create a set with 19 skills. For
						early Z sets, a practical maximum is around 15 skills, with Gunners
						benefiting the most since they still aim to include the single
						Origin piece for the +0.3x Critical Distance and +0.2x Power Coating
						multipliers.
					</p>
				</div>
			</section>
			<section>
				<SectionHeading level={2} title="Skill Priority" />
				<div>
					<p>
						<strong
							>Not to be confused with what skill you should prioritize</strong
						>; Skill Priority, or <strong>Skill Replacement Order</strong>,
						refers to how each skill takes precedence over another skill
						according to a priority value, which determines whether it will be
						activated or not. You can verify the skills a set will have active
						on the table below. Priority becomes crucial in the late game, as
						it's easy to unintentionally activate unwanted skills. This is
						especially true for sets that include <InlineTooltip
							tooltip="Armor Skill"
							text="Focus"
							iconType="component"
							icon={getItemIcon('Jewel')}
						/>, as it has the lowest priority of all skills and can be easily
						overridden. <strong>Skill Replacement Order</strong> becomes noticeably
						important when you reach the maximum possible skill slots for your gear,
						which makes the game start prioritizing certain skills.
					</p>
					<div class="table table-with-scrollbar">
						<DataTable
							id="armor-skills-priority-dom"
							sortable
							zebra
							size="short"
							headers={[
								{ key: 'priority', value: 'Priority', width: '8rem' },
								{ key: 'skillTree', value: 'Skill Tree' },
							]}
							rows={mappedSkillArmorPriority}
						>
							<Toolbar
								><div class="toolbar">
									<CopyButton
										iconDescription={'Copy as CSV'}
										text={getCSVFromArray(mappedSkillArmorPriority)}
									/>
									<Button
										kind="tertiary"
										icon={Download}
										on:click={(e) =>
											downloadDomAsPng(
												'armor-skills-priority-dom',
												'armor-skills-priority',
											)}>Download</Button
									>
									<ToolbarSearch
										shouldFilterRows
										value=""
										bind:filteredRowIds={skillsPriorityFilteredRowIds}
									/>
								</div>
							</Toolbar>
							{#snippet cell({ cell })}
													
									<p>{cell.value}</p>
								
													{/snippet}
						</DataTable>
					</div>
				</div>
			</section>
		</div>
		<div class="page-turn">
			<PageTurn pageUrlPathName={$page.url.pathname} />
		</div>
	</div>
</HunterNotesPage>

<style lang="scss">
	.page-turn {
		margin-top: 4rem;
	}

	.toolbar {
		padding: 1rem;
		display: flex;
		align-items: center;
		gap: 1rem;
		flex-grow: 1;
		flex-shrink: 1;
	}

	.table {
		margin-top: 2rem;
		margin-bottom: 2rem;
	}

	.modal-content {
		display: flex;
		gap: var(--cds-spacing-06);
		flex-direction: column;
	}

	.modal-content > img {
		max-width: 60vh;
		display: block;
		margin-left: auto;
		margin-right: auto;
		width: 50%;
	}

	.modal-open-noblur {
		-webkit-filter: blur(0);
		filter: blur(0);
		opacity: 1;
		-webkit-transition:
			opacity 500ms ease,
			-webkit-filter 500ms ease;
		transition:
			opacity 500ms ease,
			-webkit-filter 500ms ease;
		transition:
			filter 500ms ease,
			opacity 500ms ease;
		transition:
			filter 500ms ease,
			opacity 500ms ease,
			-webkit-filter 500ms ease;
	}

	.modal-open-blur {
		-webkit-filter: blur(8px);
		filter: blur(4px);
		opacity: 1;
	}

	.data-table-title {
		display: flex;
		gap: 2rem;
		align-items: center;
	}

	.datatable-bottom {
		margin-top: 2rem;
	}

	.modal-mobile-popover-image {
		max-width: 100%; /* Ensures the image does not exceed the width of its container */
		max-height: 100%; /* Ensures the image does not exceed the height of its container */
		object-fit: cover; /* Ensures the image covers the area without distorting its aspect ratio */
		display: inline-block; /* Removes any extra space below the image */
	}

	.modal-mobile-container {
		display: flex;
		gap: 0.5rem;
		padding: var(--cds-spacing-04);
		flex-direction: column;
		max-width: 48ch;
		overflow: hidden;
	}

	.modal-mobile-link:hover {
		text-decoration: underline;
	}

	.modal-mobile-image {
		grid-area: image;
		display: inline-block;
		max-width: 8ch;
	}

	.modal-mobile-button {
		grid-area: button;
	}

	.modal-mobile-title {
		display: -webkit-box;
		-webkit-line-clamp: 1; /* number of lines to show */
		line-clamp: 1;
		-webkit-box-orient: vertical;
		overflow: hidden;
		grid-area: title;
		font-weight: bold;
		height: fit-content;
	}

	.modal-mobile-subtitle {
		display: -webkit-box;
		-webkit-line-clamp: 2; /* number of lines to show */
		line-clamp: 2;
		-webkit-box-orient: vertical;
		overflow: hidden;
		grid-area: subtitle;
		color: var(--ctp-subtext0);
	}

	.modal-mobile-title,
	.modal-mobile-subtitle {
		padding-left: 0.5rem;
		padding-top: 0;
		padding-bottom: 0;
		margin: 0;
	}

	.modal-mobile-description {
		grid-area: description;
		text-wrap: wrap;
		margin-top: 1rem;
		display: -webkit-box;
		-webkit-line-clamp: 3; /* number of lines to show */
		line-clamp: 3;
		-webkit-box-orient: vertical;
		overflow: hidden;
	}

	.modal-mobile-contents-top {
		display: grid;
		grid-template-areas:
			'image title button'
			'image subtitle subtitle'
			'description description description';
		gap: 0;
		grid-template-columns: auto 1fr auto;
		grid-template-rows: auto 1fr auto;
	}

	.modal-mobile-contents-bottom {
		display: flex;
		gap: 0.5rem;
	}

	.paragraph-with-icon {
		display: flex;
		align-items: center;
		gap: 0.125rem;
	}

	.table-with-scrollbar {
		height: 80vh;
		overflow-y: auto;
	}

	.skill-slots-up-inputs-container {
		display: flex;
		gap: 1rem;
		flex-wrap: wrap;
	}

	.inputs-container {
		display: flex;
		gap: 1rem;
		max-width: max-content;
		margin-top: 1rem;
		flex-wrap: wrap;
		margin-bottom: 1rem;
		flex-direction: column;
	}

	.input-container {
		display: flex;
		gap: 0.25rem;
	}

	.skill-slots-result {
		display: flex;
		gap: 0.25rem;
	}
</style>
