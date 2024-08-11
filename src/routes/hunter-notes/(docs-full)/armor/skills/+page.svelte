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
	import { Download } from 'carbon-icons-svelte';
	import { ezlionSkillArmorPriority } from 'ezlion';
	import ToolbarSearch from 'carbon-components-svelte/src/DataTable/ToolbarSearch.svelte';

	// Mapping function
	const mappedSkillArmorPriority = Object.keys(ezlionSkillArmorPriority).map(
		(key) => ({
			id: Number(key),
			priority: Number(key) + 1,
			skillTree: ezlionSkillArmorPriority[Number(key)],
		}),
	);

	let skillsPriorityFilteredRowIds: string[] = [];

	let skillSlotsUpInputArmorPieces = {
		head: 'Zenith',
		chest: 'Origin',
		arms: 'G Rank',
		waist: 'Zenith',
		legs: 'Origin',
	};
	let skillSlotsUpInputZenithWeapon = true;
	let skillSlotsUpInputZenithCuff = true;
	let skillSlotsUpInputTrueHidenCuff = true;
	let skillSlotsUpInputSkillFruit = true;
	let skillSlotsUpInputLoginBoostGreatLuck = true;
	let skillSlotsUpInputDivaSkill = true;
	let skillSlotsUpInputGuildFood = true;

	// in multiplayer its more skills like encourage.
</script>

<HunterNotesPage displayTOC={true}>
	<div>
		<SectionHeadingTopLevel title={'Armor Skills'} />
		<div>
			<section>
				<SectionHeading level={2} title="Skill Slots" />
				<div>
					<p class="spaced-paragraph">
						The Zenith Skill for Skill Slots Up is always active alongside any
						other sources of additional slots. Any Z, ZY, ZX, or ZP pieces all
						count toward the G Rank piece requirements for slots. Like other
						Zenith skills, this can be found on Armor Pieces, Weapons, and
						Cuffs, allowing for a maximum of 7 additional slots.
					</p>
					<div class="inputs-container">
						<div class="input-container"></div>
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
						Each skill takes precedence over another skill according to a
						priority value, which determines whether it will be activated or
						not. You can verify the skills a set will have active on the table
						below. Priority becomes crucial in the late game, as it's easy to
						unintentionally activate unwanted skills. This is especially true
						for sets that include Focus, as it has the lowest priority of all
						skills and can be easily overridden.
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
							<svelte:fragment slot="cell" let:cell>
								<p>{cell.value}</p>
							</svelte:fragment>
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

	.inputs-container {
		display: flex;
		gap: 1rem;
		max-width: max-content;
		margin-top: 1rem;
		flex-wrap: wrap;
		margin-bottom: 1rem;
	}
</style>
