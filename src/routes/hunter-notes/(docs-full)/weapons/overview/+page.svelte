<script lang="ts">
	import PageTurn from '$lib/client/components/PageTurn.svelte';
	import SectionHeadingTopLevel from '$lib/client/components/SectionHeadingTopLevel.svelte';
	import HunterNotesPage from '$lib/client/components/HunterNotesPage.svelte';
	import DataTable from 'carbon-components-svelte/src/DataTable/DataTable.svelte';
	import Toolbar from 'carbon-components-svelte/src/DataTable/Toolbar.svelte';
	import CopyButton from 'carbon-components-svelte/src/CopyButton/CopyButton.svelte';
	import SectionHeading from '$lib/client/components/SectionHeading.svelte';
	import { getCSVFromArray } from '$lib/client/modules/csv';
	import SharpnessBar from '$lib/client/components/frontier/SharpnessBar.svelte';
	import type {
		FrontierRarity,
		FrontierWeaponSharpness,
	} from '$lib/client/modules/frontier/types';
	import InlineTooltip from '$lib/client/components/frontier/InlineTooltip.svelte';
	import {
		getWeaponIcon,
		WeaponTypes,
	} from '$lib/client/modules/frontier/weapons';
	import { page } from '$app/stores';
	import { downloadDomAsPng } from '$lib/client/modules/download';
	import Button from 'carbon-components-svelte/src/Button/Button.svelte';
	import Download from 'carbon-icons-svelte/lib/Download.svelte';
	import { sharpnessTables } from '$lib/client/modules/frontier/sharpness';
	import { type FrontierWeaponName } from 'ezlion';
	import Dropdown from 'carbon-components-svelte/src/Dropdown/Dropdown.svelte';

	function getSharpnessArray(input: string): FrontierWeaponSharpness {
		// Split the input string into an array of strings
		let inputValues = input.split(',');

		// Initialize an array with default sharpness levels
		let sharpness: FrontierWeaponSharpness = [
			400, 400, 400, 400, 400, 400, 400, 400,
		];

		// Map the input values to the corresponding sharpness levels
		for (let i = 0; i < inputValues.length; i++) {
			sharpness[i] = parseInt(inputValues[i]) ?? 400;
		}

		return sharpness;
	}

	let selectedWeaponType: FrontierWeaponName = 'Sword and Shield';
	$: selectedWeaponIcon = getWeaponIcon(selectedWeaponType);
	let rarity: FrontierRarity = 1;
	let selectedWeaponIconProps = {
		rarity: rarity,
	};

	$: selectedWeaponTypeId = WeaponTypes.find(
		(e) => e.name == selectedWeaponType,
	)?.id;

	$: filteredSharpnessTables = sharpnessTables.filter(
		(e) => e.weaponType === selectedWeaponTypeId,
	);
</script>

<HunterNotesPage displayTOC={true}>
	<div>
		<SectionHeadingTopLevel title={'Overview'} />
		<section>
			<SectionHeading level={2} title="Weapon Multipliers" />
			<div>
				<div class="weapons-table">
					<DataTable
						sortable
						useStaticWidth
						id="weapon-multipliers-dom"
						zebra
						size="medium"
						headers={[
							{ key: 'weapon', value: 'Weapon', minWidth: '1rem' },
							{ key: 'multiplier', value: 'Multiplier', minWidth: '1rem' },
						]}
						rows={[
							{
								id: 'Sword and Shield',
								weapon: 'Sword and Shield',
								multiplier: 'x1.4',
							},
							{
								id: 'Dual Swords',
								weapon: 'Dual Swords',
								multiplier: 'x1.4',
							},
							{
								id: 'Great Sword',
								weapon: 'Great Sword',
								multiplier: 'x4.8',
							},
							{
								id: 'Long Sword',
								weapon: 'Long Sword',
								multiplier: 'x4.8',
							},
							{
								id: 'Hammer',
								weapon: 'Hammer',
								multiplier: 'x5.2',
							},
							{
								id: 'Hunting Horn',
								weapon: 'Hunting Horn',
								multiplier: 'x5.2',
							},
							{
								id: 'Lance',
								weapon: 'Lance',
								multiplier: 'x2.3',
							},
							{
								id: 'Gunlance',
								weapon: 'Gunlance',
								multiplier: 'x2.3',
							},

							{
								id: 'Tonfa',
								weapon: 'Tonfa',
								multiplier: 'x1.8',
							},
							{
								id: 'Switch Axe F',
								weapon: 'Switch Axe F',
								multiplier: 'x5.4',
							},
							{
								id: 'Magnet Spike',
								weapon: 'Magnet Spike',
								multiplier: 'x5.4',
							},
							{
								id: 'Light Bowgun',
								weapon: 'Light Bowgun',
								multiplier: 'x1.2',
							},

							{
								id: 'Heavy Bowgun',
								weapon: 'Heavy Bowgun',
								multiplier: 'x1.2',
							},
							{
								id: 'Bow',
								weapon: 'Bow',
								multiplier: 'x1.2',
							},
						]}
						><Toolbar
							><div class="toolbar">
								<CopyButton
									iconDescription={'Copy as CSV'}
									text={getCSVFromArray([
										{
											id: 'Sword and Shield',
											weapon: 'Sword and Shield',
											multiplier: 'x1.4',
										},
										{
											id: 'Dual Swords',
											weapon: 'Dual Swords',
											multiplier: 'x1.4',
										},
										{
											id: 'Great Sword',
											weapon: 'Great Sword',
											multiplier: 'x4.8',
										},
										{
											id: 'Long Sword',
											weapon: 'Long Sword',
											multiplier: 'x4.8',
										},
										{
											id: 'Hammer',
											weapon: 'Hammer',
											multiplier: 'x5.2',
										},
										{
											id: 'Hunting Horn',
											weapon: 'Hunting Horn',
											multiplier: 'x5.2',
										},
										{
											id: 'Lance',
											weapon: 'Lance',
											multiplier: 'x2.3',
										},
										{
											id: 'Gunlance',
											weapon: 'Gunlance',
											multiplier: 'x2.3',
										},

										{
											id: 'Tonfa',
											weapon: 'Tonfa',
											multiplier: 'x1.8',
										},
										{
											id: 'Switch Axe F',
											weapon: 'Switch Axe F',
											multiplier: 'x5.4',
										},
										{
											id: 'Magnet Spike',
											weapon: 'Magnet Spike',
											multiplier: 'x5.4',
										},
										{
											id: 'Light Bowgun',
											weapon: 'Light Bowgun',
											multiplier: 'x1.2',
										},

										{
											id: 'Heavy Bowgun',
											weapon: 'Heavy Bowgun',
											multiplier: 'x1.2',
										},
										{
											id: 'Bow',
											weapon: 'Bow',
											multiplier: 'x1.2',
										},
									])}
								/>
								<Button
									kind="tertiary"
									icon={Download}
									on:click={() =>
										downloadDomAsPng(
											'weapon-multipliers-dom',
											'weapon-multipliers',
										)}>Download</Button
								>
							</div>
						</Toolbar>
						<svelte:fragment slot="cell" let:cell>
							{#if cell.key === 'weapon'}
								<InlineTooltip
									text={cell.value}
									tooltip={'Weapon'}
									icon={WeaponTypes.find((e) => e.name === cell.value)?.icon}
								/>
							{:else}
								<p>{cell.value}</p>
							{/if}
						</svelte:fragment>
					</DataTable>
				</div>
			</div>
		</section>
		<section>
			<SectionHeading level={2} title="Sharpness" />
			<p class="spaced-paragraph">
				The multiplier applies to both raw and element. The status multiplier is
				1. On attack bounce, the bounce multiplier is applied instead of the
				main multiplier.
			</p>
			<div class="table">
				<DataTable
					title="Weapon Sharpness Multipliers"
					id="sharpness-dom"
					sortable
					zebra
					size="medium"
					headers={[
						{ key: 'name', value: 'Color', minWidth: '1rem' },
						{ key: 'bar', value: 'Sharpness Bar', minWidth: '1rem' },
						{ key: 'multiplier', value: 'Multiplier' },
						{ key: 'bounce', value: 'Bounce Multiplier' },
						{ key: 'affinity', value: 'Affinity' },
					]}
					rows={[
						{
							id: '1',
							name: 'Red',
							bar: '400,400,400,400,400,400,400,400',
							multiplier: 'x0.6',
							affinity: 'Disabled',
							bounce: 'x0.5',
						},
						{
							id: '2',
							name: 'Orange',
							bar: '0,400,400,400,400,400,400,400',
							multiplier: 'x0.85',
							affinity: 'Disabled',
							bounce: 'x0.75',
						},
						{
							id: '3',
							name: 'Yellow',
							bar: '0,0,400,400,400,400,400,400',
							multiplier: 'x1.1',
							affinity: 'Disabled',
							bounce: 'x1',
						},
						{
							id: '4',
							name: 'Green',
							bar: '0,0,0,400,400,400,400,400',
							multiplier: 'x1.325',
							affinity: '0%',
							bounce: 'x1.125',
						},
						{
							id: '5',
							name: 'Blue',
							bar: '0,0,0,0,400,400,400,400',
							multiplier: 'x1.45',
							affinity: '10%',
							bounce: 'x1.25',
						},
						{
							id: '6',
							name: 'White',
							bar: '0,0,0,0,0,400,400,400',
							multiplier: 'x1.60',
							affinity: '10%',
							bounce: 'x1.4',
						},
						{
							id: '7',
							name: 'Purple',
							bar: '0,0,0,0,0,0,400,400',
							multiplier: 'x1.7',
							affinity: '10%',
							bounce: 'x1.5',
						},
						{
							id: '8',
							name: 'Cyan',
							bar: '0,0,0,0,0,0,0,400',
							multiplier: 'x1.8',
							affinity: '10%',
							bounce: 'x1.6',
						},
					]}
					><Toolbar
						><div class="toolbar">
							<CopyButton
								iconDescription={'Copy as CSV'}
								text={getCSVFromArray([
									{
										id: '1',
										name: 'Red',
										bar: '400,400,400,400,400,400,400,400',
										multiplier: 'x0.6',
										affinity: '0%',
									},
									{
										id: '2',
										name: 'Orange',
										bar: '0,400,400,400,400,400,400,400',
										multiplier: 'x0.85',
										affinity: '0%',
									},
									{
										id: '3',
										name: 'Yellow',
										bar: '0,0,400,400,400,400,400,400',
										multiplier: 'x1.1',
										affinity: '0%',
									},
									{
										id: '4',
										name: 'Green',
										bar: '0,0,0,400,400,400,400,400',
										multiplier: 'x1.325',
										affinity: '0%',
									},
									{
										id: '5',
										name: 'Blue',
										bar: '0,0,0,0,400,400,400,400',
										multiplier: 'x1.45',
										affinity: '10%',
									},
									{
										id: '6',
										name: 'White',
										bar: '0,0,0,0,0,400,400,400',
										multiplier: 'x1.60',
										affinity: '10%',
									},
									{
										id: '7',
										name: 'Purple',
										bar: '0,0,0,0,0,0,400,400',
										multiplier: 'x1.7',
										affinity: '10%',
									},
									{
										id: '8',
										name: 'Cyan',
										bar: '0,0,0,0,0,0,0,400',
										multiplier: 'x1.8',
										affinity: '10%',
									},
								])}
							/>
							<Button
								kind="tertiary"
								icon={Download}
								on:click={() => downloadDomAsPng('sharpness-dom', 'sharpness')}
								>Download</Button
							>
						</div>
					</Toolbar>

					<svelte:fragment slot="cell" let:cell>
						{#if cell.key === 'bar'}
							<div class="sharpness-bar-container">
								<SharpnessBar
									sharpnessBoost={false}
									sharpnessValues={getSharpnessArray(cell.value)}
								/>
							</div>
						{:else}
							<p>{cell.value}</p>
						{/if}
					</svelte:fragment>
				</DataTable>
			</div>
			<div class="table table-with-scrollbar">
				<DataTable
					id="sharpness-tables-dom"
					sortable
					zebra
					size="medium"
					headers={[
						{ key: 'sharpnessTable', value: 'Sharpness Bar' },
						{ key: 'id', value: 'ID' },
					]}
					rows={filteredSharpnessTables}
				>
					<span slot="title">
						<div class="data-table-title">
							<div class="weapon-icon">
								<svelte:component
									this={selectedWeaponIcon}
									{...selectedWeaponIconProps}
								/>
							</div>
							<div>{selectedWeaponType} Sharpness Tables</div>
						</div>
					</span>
					<Toolbar
						><div class="toolbar">
							<Dropdown
								titleText="Weapon Type"
								bind:selectedId={selectedWeaponType}
								items={[
									{ id: 'Sword and Shield', text: 'Sword and Shield' },
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
							/>
							<CopyButton
								iconDescription={'Copy as CSV'}
								text={getCSVFromArray(sharpnessTables)}
							/>
							<Button
								kind="tertiary"
								icon={Download}
								on:click={() =>
									downloadDomAsPng('sharpness-tables-dom', 'sharpness-tables')}
								>Download</Button
							>
						</div>
					</Toolbar>

					<svelte:fragment slot="cell" let:cell>
						{#if cell.key === 'sharpnessTable'}
							<div class="sharpness-bar-container">
								<SharpnessBar
									sharpnessBoost={false}
									sharpnessValues={cell.value}
								/>
							</div>
						{:else}
							<p>{cell.value}</p>
						{/if}
					</svelte:fragment>
				</DataTable>
			</div>
		</section>
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
		overflow-x: auto;
	}

	.sharpness-bar-container {
		display: flex;
		justify-content: stretch;
		align-items: stretch;
		width: 100%;
		height: 100%;
	}

	.table-with-scrollbar {
		height: 80vh;
		overflow-y: auto;
	}

	.data-table-title {
		display: flex;
		gap: 2rem;
		align-items: center;
	}

	.weapon-icon {
		width: var(--cds-spacing-09);
	}
</style>
