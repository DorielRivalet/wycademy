<script lang="ts">
	import PageTurn from '$lib/client/components/PageTurn.svelte';
	import SectionHeadingTopLevel from '$lib/client/components/SectionHeadingTopLevel.svelte';
	import HunterNotesPage from '$lib/client/components/HunterNotesPage.svelte';
	import InlineTooltip from '$lib/client/components/frontier/InlineTooltip.svelte';
	import Toolbar from 'carbon-components-svelte/src/DataTable/Toolbar.svelte';
	import DataTable from 'carbon-components-svelte/src/DataTable/DataTable.svelte';
	import { getCSVFromArray } from '$lib/client/modules/csv';
	import Pagination from 'carbon-components-svelte/src/Pagination/Pagination.svelte';
	import Button from 'carbon-components-svelte/src/Button/Button.svelte';
	import Copy from 'carbon-icons-svelte/lib/Copy.svelte';
	import ToolbarSearch from 'carbon-components-svelte/src/DataTable/ToolbarSearch.svelte';
	import { page } from '$app/stores';
	import { monsterInfo } from '$lib/client/modules/frontier/monsters';
	import { WeaponTypes } from '$lib/client/modules/frontier/weapons';

	let originsTablePageSize = 5;
	let originsTablePage = 1;
	let originsTableFilteredRowIds: string[] = [];
</script>

<HunterNotesPage displayTOC={false}>
	<div>
		<SectionHeadingTopLevel title={'Origin'} />
		<div>
			<p>
				Origin monsters are natural evolutions of the Gou monsters. These are
				required to upgrade Gou armors and weapons beyond G Supremacy level.
			</p>
			<div class="origins-table table-with-pagination">
				<DataTable
					sortable
					zebra
					pageSize={originsTablePageSize}
					page={originsTablePage}
					size="short"
					headers={[
						{ key: 'weapon', value: 'Weapon', minWidth: '1rem' },
						{ key: 'name', value: 'Name', minWidth: '1rem' },
						{ key: 'armorSkill', value: 'Automatic Skill', minWidth: '1rem' },
						{ key: 'monster', value: 'Supremacy Monster', minWidth: '1rem' },
					]}
					rows={[
						{
							id: '1',
							armorSkill: 'Vampirism+2',
							weapon: 'Great Sword',
							name: 'Varusaburosu GS',
							monster: 'Teostra',
						},
						{
							id: '2',
							armorSkill: 'Vampirism+2',
							weapon: 'Long Sword',
							name: 'Teostra LS',
							monster: 'Teostra',
						},
						{
							id: '3',
							armorSkill: 'Vampirism+2',
							weapon: 'Sword and Shield',
							name: 'Varusaburosu SnS',
							monster: 'Aruganosu / Goruganosu',
						},
						{
							id: '4',
							armorSkill: 'Exploit Weakness',
							weapon: 'Dual Swords',
							name: 'Meraginasu DS',
							monster: 'Teostra',
						},
						{
							id: '5',
							armorSkill: 'Vampirism+2',
							weapon: 'Dual Swords',
							name: 'Gureadomosu DS',
							monster: 'Doragyurosu',
						},
						{
							id: '6',
							armorSkill: 'Vampirism+2',
							weapon: 'Hammer',
							name: 'Varusaburosu Hammer',
							monster: 'Teostra',
						},
						{
							id: '7',
							armorSkill: 'Vampirism+2',
							weapon: 'Hunting Horn',
							name: 'Poborubarumu HH',
							monster: 'Doragyurosu',
						},
						{
							id: '8',
							armorSkill: 'Vampirism+2',
							weapon: 'Lance',
							name: 'Varusaburosu Lance',
							monster: 'Teostra',
						},
						{
							id: '9',
							armorSkill: 'Vampirism+2',
							weapon: 'Lance',
							name: 'Varusaburosu Lance',
							monster: 'Aruganosu / Goruganosu',
						},
						{
							id: '10',
							armorSkill: 'Vampirism+2',
							weapon: 'Gunlance',
							name: 'Poborubarumu GL',
							monster: 'Teostra',
						},
						{
							id: '11',
							armorSkill: 'Exploit Weakness',
							weapon: 'Tonfa',
							name: 'Meraginasu Tonfa',
							monster: 'Teostra',
						},
						{
							id: '12',
							armorSkill: 'Vampirism+2',
							weapon: 'Tonfa',
							name: 'Gureadomosu Tonfa',
							monster: 'Teostra',
						},
						{
							id: '13',
							armorSkill: 'Vampirism+2',
							weapon: 'Switch Axe F',
							name: 'Varusaburosu Swaxe',
							monster: 'Aruganosu / Goruganosu',
						},
						{
							id: '14',
							armorSkill: 'Exploit Weakness',
							weapon: 'Light Bowgun',
							name: 'Toa Tesukatora LBG',
							monster: 'Unknown',
						},
						{
							id: '15',
							armorSkill: 'Vampirism+2',
							weapon: 'Light Bowgun',
							name: 'Teostra LBG',
							monster: 'Pariapuria',
						},
						{
							id: '16',
							armorSkill: 'Vampirism+2',
							weapon: 'Heavy Bowgun',
							name: 'Varusaburosu HBG',
							monster: 'Aruganosu / Goruganosu',
						},
						{
							id: '17',
							armorSkill: 'Vampirism+2',
							weapon: 'Bow',
							name: 'Varusaburosu Bow',
							monster: 'Pariapuria',
						},
						{
							id: '18',
							armorSkill: 'Vampirism+2',
							weapon: 'Bow',
							name: 'Poborubarumu Bow',
							monster: 'Pariapuria',
						},
					]}
					><Toolbar size="sm">
						<div class="toolbar">
							<ToolbarSearch
								shouldFilterRows
								value="Vampirism"
								bind:filteredRowIds={originsTableFilteredRowIds}
							/>
							<Button
								size="small"
								icon={Copy}
								on:click={(e) =>
									navigator.clipboard.writeText(
										getCSVFromArray([
											{
												id: '1',
												armorSkill: 'Vampirism+2',
												weapon: 'Great Sword',
												name: 'Varusaburosu GS',
												monster: 'Teostra',
											},
											{
												id: '2',
												armorSkill: 'Vampirism+2',
												weapon: 'Long Sword',
												name: 'Teostra LS',
												monster: 'Teostra',
											},
											{
												id: '3',
												armorSkill: 'Vampirism+2',
												weapon: 'Sword and Shield',
												name: 'Varusaburosu SnS',
												monster: 'Aruganosu / Goruganosu',
											},
											{
												id: '4',
												armorSkill: 'Exploit Weakness',
												weapon: 'Dual Swords',
												name: 'Meraginasu DS',
												monster: 'Teostra',
											},
											{
												id: '5',
												armorSkill: 'Vampirism+2',
												weapon: 'Dual Swords',
												name: 'Gureadomosu DS',
												monster: 'Doragyurosu',
											},
											{
												id: '6',
												armorSkill: 'Vampirism+2',
												weapon: 'Hammer',
												name: 'Varusaburosu Hammer',
												monster: 'Teostra',
											},
											{
												id: '7',
												armorSkill: 'Vampirism+2',
												weapon: 'Hunting Horn',
												name: 'Poborubarumu HH',
												monster: 'Doragyurosu',
											},
											{
												id: '8',
												armorSkill: 'Vampirism+2',
												weapon: 'Lance',
												name: 'Varusaburosu Lance',
												monster: 'Teostra',
											},
											{
												id: '9',
												armorSkill: 'Vampirism+2',
												weapon: 'Lance',
												name: 'Varusaburosu Lance',
												monster: 'Aruganosu / Goruganosu',
											},
											{
												id: '10',
												armorSkill: 'Vampirism+2',
												weapon: 'Gunlance',
												name: 'Poborubarumu GL',
												monster: 'Teostra',
											},
											{
												id: '11',
												armorSkill: 'Exploit Weakness',
												weapon: 'Tonfa',
												name: 'Meraginasu Tonfa',
												monster: 'Teostra',
											},
											{
												id: '12',
												armorSkill: 'Vampirism+2',
												weapon: 'Tonfa',
												name: 'Gureadomosu Tonfa',
												monster: 'Teostra',
											},
											{
												id: '13',
												armorSkill: 'Vampirism+2',
												weapon: 'Switch Axe F',
												name: 'Varusaburosu Swaxe',
												monster: 'Aruganosu / Goruganosu',
											},
											{
												id: '14',
												armorSkill: 'Exploit Weakness',
												weapon: 'Light Bowgun',
												name: 'Toa Tesukatora LBG',
												monster: 'Unknown',
											},
											{
												id: '15',
												armorSkill: 'Vampirism+2',
												weapon: 'Light Bowgun',
												name: 'Teostra LBG',
												monster: 'Pariapuria',
											},
											{
												id: '16',
												armorSkill: 'Vampirism+2',
												weapon: 'Heavy Bowgun',
												name: 'Varusaburosu HBG',
												monster: 'Aruganosu / Goruganosu',
											},
											{
												id: '17',
												armorSkill: 'Vampirism+2',
												weapon: 'Bow',
												name: 'Varusaburosu Bow',
												monster: 'Pariapuria',
											},
											{
												id: '18',
												armorSkill: 'Vampirism+2',
												weapon: 'Bow',
												name: 'Poborubarumu Bow',
												monster: 'Pariapuria',
											},
										]),
									)}
								kind="ghost">Copy</Button
							>
						</div>
					</Toolbar>
					<span slot="title">
						<div class="data-table-title">
							<div>Recommended Origin Weapons</div>
						</div>
					</span>
					<svelte:fragment slot="cell" let:cell>
						{#if cell.key === 'monster'}
							<InlineTooltip
								icon={monsterInfo.find((e) => e.name === cell.value)?.icon ??
									''}
								iconType="file"
								tooltip={cell.value}
								text={cell.value}
							/>
						{:else if cell.key === 'weapon'}
							<InlineTooltip
								icon={WeaponTypes.find((e) => e.name === cell.value)?.icon ??
									''}
								tooltip={cell.value}
								text={cell.value}
							/>
						{:else}
							<p>{cell.value}</p>
						{/if}
					</svelte:fragment>
				</DataTable>
				<Pagination
					pageSizes={[5, 10, 20]}
					bind:pageSize={originsTablePageSize}
					bind:page={originsTablePage}
					totalItems={originsTableFilteredRowIds.length}
				/>
			</div>

			<div class="page-turn">
				<PageTurn pageUrlPathName={$page.url.pathname} />
			</div>
		</div>
	</div></HunterNotesPage
>

<style lang="scss">
	.page-turn {
		margin-top: 4rem;
	}

	.data-table-title {
		display: flex;
		gap: 2rem;
		align-items: center;
	}

	.origins-table {
		margin-top: 2rem;
		display: flex;
		flex-wrap: wrap;
		max-width: 800px;
	}

	.toolbar {
		padding: 1rem;
		display: flex;
		align-items: center;
		gap: 1rem;
		flex-grow: 1;
		flex-shrink: 1;
	}

	.table-with-pagination {
		display: flex;
		flex-direction: column;
	}
</style>
