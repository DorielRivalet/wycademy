<script lang="ts">
	import PageTurn from '$lib/client/components/PageTurn.svelte';
	import SectionHeadingTopLevel from '$lib/client/components/SectionHeadingTopLevel.svelte';
	import HunterNotesPage from '$lib/client/components/HunterNotesPage.svelte';
	import InlineTooltip from '$lib/client/components/frontier/InlineTooltip.svelte';
	import { monsterInfo } from '$lib/client/modules/frontier/objects';

	import CopyButton from 'carbon-components-svelte/src/CopyButton/CopyButton.svelte';
	import Toolbar from 'carbon-components-svelte/src/DataTable/Toolbar.svelte';
	import DataTable from 'carbon-components-svelte/src/DataTable/DataTable.svelte';
	import { getCSVFromArray } from '$lib/client/modules/csv';
	import { page } from '$app/stores';
</script>

<HunterNotesPage displayTOC={false}>
	<div>
		<SectionHeadingTopLevel title={'Exotics'} />
		<div>
			<p>
				Only 1 armor piece is needed to activate the armor skill. All weapons
				give Speed Eating. Each Exotic monster has a set of associated G Finesse
				weapon.
			</p>
			<div class="exotics-table">
				<DataTable
					sortable
					useStaticWidth
					zebra
					size="short"
					headers={[
						{ key: 'name', value: 'Name', minWidth: '1rem' },
						{ key: 'armorSkill', value: 'Automatic Skill', minWidth: '1rem' },
					]}
					rows={[
						{
							id: 'Zinogre',
							armorSkill: 'Thunder Attack (Large)',
							name: 'Zinogre',
						},
						{
							id: 'Deviljho',
							armorSkill: 'Starving Wolf+2',
							name: 'Deviljho',
						},
						{
							id: 'Brachydios',
							armorSkill: 'Bomber',
							name: 'Brachydios',
						},

						{
							id: 'Barioth',
							armorSkill: 'Ice Attack (Large)',
							name: 'Barioth',
						},
						{
							id: 'Uragaan',
							armorSkill: 'Guard+2 / Ammo Combiner',
							name: 'Uragaan',
						},
						{
							id: 'Nargacuga',
							armorSkill: 'Evasion+2',
							name: 'Nargacuga',
						},
						{
							id: 'Stygian Zinogre',
							armorSkill: 'Dragon Attack (Large)',
							name: 'Stygian Zinogre',
						},
						{
							id: 'Gore Magala',
							armorSkill: 'Focus+2',
							name: 'Gore Magala',
						},
						{
							id: 'Shagaru Magala',
							armorSkill: 'Status Immunity (Myriad)',
							name: 'Shagaru Magala',
						},
						{
							id: 'Amatsu',
							armorSkill: 'Water Attack (Large)',
							name: 'Amatsu',
						},
						{
							id: 'Seregios',
							armorSkill: 'Critical Eye+5',
							name: 'Seregios',
						},
					]}
					><Toolbar
						><div class="toolbar">
							<CopyButton
								iconDescription={'Copy as CSV'}
								text={getCSVFromArray([
									{
										id: 'Zinogre',
										armorSkill: 'Thunder Attack (Large)',
										name: 'Zinogre',
									},
									{
										id: 'Deviljho',
										armorSkill: 'Starving Wolf+2',
										name: 'Deviljho',
									},
									{
										id: 'Brachydios',
										armorSkill: 'Bomber',
										name: 'Brachydios',
									},

									{
										id: 'Barioth',
										armorSkill: 'Ice Attack (Large)',
										name: 'Barioth',
									},
									{
										id: 'Uragaan',
										armorSkill: 'Guard+2 / Ammo Combiner',
										name: 'Uragaan',
									},
									{
										id: 'Nargacuga',
										armorSkill: 'Evasion+2',
										name: 'Nargacuga',
									},
									{
										id: 'Stygian Zinogre',
										armorSkill: 'Dragon Attack (Large)',
										name: 'Stygian Zinogre',
									},
									{
										id: 'Gore Magala',
										armorSkill: 'Focus+2',
										name: 'Gore Magala',
									},
									{
										id: 'Shagaru Magala',
										armorSkill: 'Status Immunity (Myriad)',
										name: 'Shagaru Magala',
									},
									{
										id: 'Amatsu',
										armorSkill: 'Water Attack (Large)',
										name: 'Amatsu',
									},
									{
										id: 'Seregios',
										armorSkill: 'Critical Eye+5',
										name: 'Seregios',
									},
								])}
							/>
						</div>
					</Toolbar>
					<span slot="title">
						<div class="data-table-title">
							<div>Exotic Skills</div>
						</div>
					</span>
					<svelte:fragment slot="cell" let:cell>
						{#if cell.key === 'name'}
							<InlineTooltip
								icon={monsterInfo.find((e) => e.name === cell.value)?.icon ??
									''}
								iconType="file"
								tooltip={cell.value}
								text={cell.value}
							/>
						{:else}
							<p>
								{cell.value}
							</p>
						{/if}
					</svelte:fragment>
				</DataTable>
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

	.exotics-table {
		margin-top: 2rem;
		display: flex;
		flex-wrap: wrap;
		overflow-x: auto;
		max-width: 90vw;
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
