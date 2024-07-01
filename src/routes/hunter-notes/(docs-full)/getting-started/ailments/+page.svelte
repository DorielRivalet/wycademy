<script lang="ts">
	import PageTurn from '$lib/client/components/PageTurn.svelte';
	import SectionHeadingTopLevel from '$lib/client/components/SectionHeadingTopLevel.svelte';
	import HunterNotesPage from '$lib/client/components/HunterNotesPage.svelte';
	import DataTable from 'carbon-components-svelte/src/DataTable/DataTable.svelte';
	import InlineTooltip from '$lib/client/components/frontier/InlineTooltip.svelte';
	import {
		StatusIcons,
		monsterInfo,
	} from '$lib/client/modules/frontier/objects';
	import Toolbar from 'carbon-components-svelte/src/DataTable/Toolbar.svelte';
	import CopyButton from 'carbon-components-svelte/src/CopyButton/CopyButton.svelte';
	import SectionHeading from '$lib/client/components/SectionHeading.svelte';
	import { page } from '$app/stores';

	import { getCSVFromArray } from '$lib/client/modules/csv';

	function getStatusArray(input: string) {
		const values = input.split(',');
		return values;
	}
</script>

<HunterNotesPage displayTOC={false}>
	<div>
		<SectionHeadingTopLevel title={'Ailments'} />
		<!-- TODO: status effects descriptions and cures-->
		<section>
			<SectionHeading level={2} title="Monster Status Immunities" />
			<div>
				<div class="datatable-container">
					<DataTable
						sortable
						useStaticWidth
						zebra
						size="short"
						headers={[
							{ key: 'name', value: 'Name', minWidth: '1rem' },
							{ key: 'immunities', value: 'Immunities', minWidth: '1rem' },
						]}
						rows={[
							{
								id: '1',
								immunities: 'Paralysis',
								name: 'Kirin',
							},
							{
								id: '2',
								immunities: 'Poison,Paralysis,Sleep',
								name: 'Lao-Shan Lung',
							},
							{
								id: '3',
								immunities: 'Poison',
								name: 'Yian Garuga',
							},
							{
								id: '4',
								immunities: 'Poison,Paralysis,Sleep',
								name: 'Shen Gaoren',
							},
							{
								id: '5',
								immunities: 'Poison,Paralysis,Sleep',
								name: 'Yama Tsukami',
							},
							{
								id: '6',
								immunities: 'Poison',
								name: 'Espinas',
							},
							{
								id: '7',
								immunities: 'Poison,Paralysis,Sleep',
								name: 'Akura Vashimu',
							},

							{
								id: '8',
								immunities: 'Poison,Paralysis,Sleep',
								name: 'Akura Jebia',
							},
							{
								id: '9',
								immunities: 'Paralysis,Sleep',
								name: 'Berukyurosu',
							},
							{
								id: '10',
								immunities: 'Poison,Paralysis,Sleep',
								name: 'Pariapuria',
							},
							{
								id: '11',
								immunities: 'Poison,Paralysis,Sleep,Blast',
								name: 'Raviente',
							},
							{
								id: '12',
								immunities: 'Paralysis,Sleep',
								name: 'Doragyurosu',
							},
							{
								id: '13',
								immunities: 'Poison,Paralysis',
								name: 'Baruragaru',
							},
							{
								id: '14',
								immunities: 'Sleep',
								name: 'Inagami',
							},
							{
								id: '15',
								immunities: 'Poison,Paralysis,Sleep',
								name: 'Duremudira',
							},
							{
								id: '16',
								immunities: 'Sleep',
								name: 'Varusaburosu',
							},
							{
								id: '17',
								immunities: 'Poison',
								name: 'Gasurabazura',
							},
							{
								id: '18',
								immunities: 'Poison,Paralysis,Sleep',
								name: 'Yama Kurai',
							},
							{
								id: '19',
								immunities: 'Sleep',
								name: 'Keoaruboru',
							},
						]}
						><Toolbar
							><div class="toolbar">
								<CopyButton
									iconDescription={'Copy as CSV'}
									text={getCSVFromArray([
										{
											id: '1',
											immunities: 'Paralysis',
											name: 'Kirin',
										},
										{
											id: '2',
											immunities: 'Poison,Paralysis,Sleep',
											name: 'Lao-Shan Lung',
										},
										{
											id: '3',
											immunities: 'Poison',
											name: 'Yian Garuga',
										},
										{
											id: '4',
											immunities: 'Poison,Paralysis,Sleep',
											name: 'Shen Gaoren',
										},
										{
											id: '5',
											immunities: 'Poison,Paralysis,Sleep',
											name: 'Yama Tsukami',
										},
										{
											id: '6',
											immunities: 'Poison',
											name: 'Espinas',
										},
										{
											id: '7',
											immunities: 'Poison,Paralysis,Sleep',
											name: 'Akura Vashimu',
										},

										{
											id: '8',
											immunities: 'Poison,Paralysis,Sleep',
											name: 'Akura Jebia',
										},
										{
											id: '9',
											immunities: 'Paralysis,Sleep',
											name: 'Berukyurosu',
										},
										{
											id: '10',
											immunities: 'Poison,Paralysis,Sleep',
											name: 'Pariapuria',
										},
										{
											id: '11',
											immunities: 'Poison,Paralysis,Sleep,Blast',
											name: 'Raviente',
										},
										{
											id: '12',
											immunities: 'Paralysis,Sleep',
											name: 'Doragyurosu',
										},
										{
											id: '13',
											immunities: 'Poison,Paralysis',
											name: 'Baruragaru',
										},
										{
											id: '14',
											immunities: 'Sleep',
											name: 'Inagami',
										},
										{
											id: '15',
											immunities: 'Poison,Paralysis,Sleep',
											name: 'Duremudira',
										},
										{
											id: '16',
											immunities: 'Sleep',
											name: 'Varusaburosu',
										},
										{
											id: '17',
											immunities: 'Poison',
											name: 'Gasurabazura',
										},
										{
											id: '18',
											immunities: 'Poison,Paralysis,Sleep',
											name: 'Yama Kurai',
										},
										{
											id: '19',
											immunities: 'Sleep',
											name: 'Keoaruboru',
										},
									])}
								/>
							</div>
						</Toolbar>
						<svelte:fragment slot="cell" let:cell>
							{#if cell.key === 'name'}
								<InlineTooltip
									icon={monsterInfo.find((e) => e.name === cell.value)?.icon}
									tooltip={'Monster'}
									iconType={'file'}
									text={cell.value}
								/>
							{:else if cell.key === 'immunities'}
								{#each getStatusArray(cell.value) as status}
									<InlineTooltip
										icon={StatusIcons.find((e) => e.name === status)?.icon ??
											''}
										tooltip={'Status'}
										text={`${status}`}
									/>
								{/each}
							{:else}
								<p>{cell.value}</p>
							{/if}
						</svelte:fragment>
					</DataTable>
				</div>
				<p>
					Subspecies and Zeniths are also immune, except <InlineTooltip
						tooltip="Monster"
						text="Doragyurosu"
						icon={monsterInfo.find((e) => e.name === 'Doragyurosu')?.icon}
						iconType={'file'}
					/> which is immune to these statuses only in G Rank, and also as a Zenith.
				</p>
				<p>
					Only support can inflict poison to <InlineTooltip
						tooltip="Monster"
						text="Raviente"
						iconType={'file'}
						icon={monsterInfo.find((e) => e.name === 'Raviente')?.icon}
					/>.
				</p>
			</div>
		</section>
		<div class="page-turn">
			<PageTurn pageRouteId={$page.route.id} />
		</div>
	</div>
</HunterNotesPage>

<style lang="scss">
	.page-turn {
		margin-top: 4rem;
	}

	.datatable-container {
		margin-top: 2rem;
		margin-bottom: 2rem;
	}

	.toolbar {
		padding: 1rem;
		display: flex;
		align-items: center;
		gap: 1rem;
		flex-grow: 1;
		flex-shrink: 1;
	}
</style>
