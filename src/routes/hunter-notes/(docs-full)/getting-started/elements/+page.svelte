<script lang="ts">
	import PageTurn from '$lib/client/components/PageTurn.svelte';
	import SectionHeadingTopLevel from '$lib/client/components/SectionHeadingTopLevel.svelte';
	import HunterNotesPage from '$lib/client/components/HunterNotesPage.svelte';
	import InlineTooltip from '$lib/client/components/frontier/InlineTooltip.svelte';
	import {
		getWeaponIcon,
		getTag,
	} from '$lib/client/modules/frontier/functions';
	import CopyButton from 'carbon-components-svelte/src/CopyButton/CopyButton.svelte';
	import Toolbar from 'carbon-components-svelte/src/DataTable/Toolbar.svelte';
	import DataTable from 'carbon-components-svelte/src/DataTable/DataTable.svelte';
	import { getCSVFromArray } from '$lib/client/modules/csv';
	import { page } from '$app/stores';
	import { ElementIcons } from '$lib/client/modules/frontier/elements';
	import { monsterInfo } from '$lib/client/modules/frontier/monsters';

	function getElementArray(input: string) {
		// Step 1: Split the string into individual elements
		const elements = input.split(', ');

		// Step 2: For each element, split it to separate the percentage value from the name
		// and construct an object with 'name' and 'value' properties
		const result = elements.map((element) => {
			const [value, name] = element.split(' ');
			return { name, value };
		});

		return result;
	}
</script>

<HunterNotesPage displayTOC={false}>
	<div>
		<SectionHeadingTopLevel title={'Elements'} />
		<p class="spaced-paragraph">
			Alongside the standard five elements, Frontier introduces combination
			elements, which always inflict the damage of both elements simultaneously.
			The visible element upon striking a monster will correspond to the element
			that the hitzone is weakest to. For instance, if you wield a weapon with
			<InlineTooltip
				iconType={'component'}
				tooltip="Element"
				icon={ElementIcons.find((e) => e.name === 'Light')?.icon}
				text="100 Light"
			/> and hit a hitbox that is vulnerable to <InlineTooltip
				iconType={'component'}
				tooltip="Element"
				icon={ElementIcons.find((e) => e.name === 'Fire')?.icon}
				text="Fire"
			/>, you would deal <InlineTooltip
				iconType={'component'}
				tooltip="Element"
				icon={ElementIcons.find((e) => e.name === 'Thunder')?.icon}
				text="80 Thunder"
			/> and
			<InlineTooltip
				iconType={'component'}
				tooltip="Element"
				icon={ElementIcons.find((e) => e.name === 'Fire')?.icon}
				text="80 Fire"
			/> damage, but only the <InlineTooltip
				iconType={'component'}
				tooltip="Element"
				icon={ElementIcons.find((e) => e.name === 'Fire')?.icon}
				text="Fire"
			/> damage visual effects would be displayed.
		</p>

		<p class="spaced-paragraph">
			Combo elements function as if you have two to three elements, but at a
			percentage of your elemental value. For visual effects, the element that
			deals the most damage will take precedence. The <InlineTooltip
				text="Gunlance's"
				tooltip="Weapon"
				icon={getWeaponIcon('Gunlance')}
			/> heatblade alternates the effect.
		</p>

		<p class="spaced-paragraph">
			With Transcendence bursts, there is a hierarchy on which elements take
			precedence first. The order is <InlineTooltip
				text="Fire"
				tooltip="Element"
				icon={ElementIcons.find((e) => e.name === 'Fire')?.icon}
			/> > <InlineTooltip
				text="Water"
				tooltip="Element"
				icon={ElementIcons.find((e) => e.name === 'Water')?.icon}
			/> > <InlineTooltip
				text="Thunder"
				tooltip="Element"
				icon={ElementIcons.find((e) => e.name === 'Thunder')?.icon}
			/> > <InlineTooltip
				text="Ice"
				tooltip="Element"
				icon={ElementIcons.find((e) => e.name === 'Ice')?.icon}
			/> > <InlineTooltip
				text="Dragon"
				tooltip="Element"
				icon={ElementIcons.find((e) => e.name === 'Dragon')?.icon}
			/>.
		</p>

		<p class="spaced-paragraph">
			Negative elemental hitzones will still apply their raw penalty if the
			'wrong' element is involved. Possessing the <InlineTooltip
				text="Solid Determination"
				tooltip="Armor Skill"
				icon={getTag('Armor Skill')?.icon}
			/> armor skill will force all elements to use the weapon's <InlineTooltip
				text="Dissolver"
				tooltip="Armor Skill"
				icon={getTag('Armor Skill')?.icon}
			/> modifier.
		</p>

		<div class="elements-table">
			<DataTable
				sortable
				zebra
				useStaticWidth
				size="short"
				headers={[
					{ key: 'name', value: 'Name', minWidth: '1rem' },
					{ key: 'composition', value: 'Composition', minWidth: '8rem' },
					{ key: 'origin', value: 'Origin', minWidth: '1rem' },
				]}
				rows={[
					{
						id: 'Light',
						composition: '70% Fire, 70% Thunder',
						origin: 'Zerureusu',
						name: 'Light',
					},
					{
						id: 'Blaze',
						origin: 'None',
						name: 'Blaze',
						composition: '70% Fire, 70% Dragon',
					},
					{
						id: 'Tenshou',
						origin: 'Shantien',
						name: 'Tenshou',
						composition: '30% Fire, 100% Water, 70% Thunder',
					},
					{
						id: 'Lightning Rod',
						origin: 'Rebidiora',
						name: 'Lightning Rod',
						composition: '70% Thunder, 70% Dragon',
					},
					{
						id: 'Okiko',
						origin: 'Disufiroa',
						name: 'Okiko',
						composition: '80% Fire, 80% Ice, 40% Dragon',
					},
					{
						id: 'Black Flame',
						origin: 'Fatalis',
						name: 'Black Flame',
						composition: '50% Fire, 150% Dragon',
					},
					{
						id: 'Crimson Demon',
						origin: 'Crimson Fatalis',
						name: 'Crimson Demon',
						composition: '50% Dragon, 150% Fire',
					},
					{
						id: 'Dark',
						origin: 'Meraginasu',
						name: 'Dark',
						composition: '80% Ice, 80% Dragon',
					},
					{
						id: 'Music',
						origin: 'Diva',
						name: 'Music',
						composition: '100% Water, 100% Ice',
					},
					{
						id: 'Sound',
						origin: 'Diva',
						name: 'Sound',
						composition: '100% Water, 100% Dragon',
					},
					{
						id: 'Wind',
						origin: 'Garuba Daora',
						name: 'Wind',
						composition: '80% Thunder, 80% Ice',
					},
					{
						id: 'Burning Zero',
						origin: 'Elzelion',
						name: 'Burning Zero',
						composition: '125% Fire, 125% Ice',
					},
					{
						id: "Emperor's Roar",
						origin: 'White Fatalis',
						name: "Emperor's Roar",
						composition: '150% Thunder, 50% Dragon',
					},
				]}
				><Toolbar
					><div class="toolbar">
						<CopyButton
							iconDescription={'Copy as CSV'}
							text={getCSVFromArray([
								{
									id: 'Light',
									composition: '70% Fire, 70% Thunder',
									origin: 'Zerureusu',
									name: 'Light',
								},
								{
									id: 'Blaze',
									origin: 'None',
									name: 'Blaze',
									composition: '70% Fire, 70% Dragon',
								},
								{
									id: 'Tenshou',
									origin: 'Shantien',
									name: 'Tenshou',
									composition: '30% Fire, 100% Water, 70% Thunder',
								},
								{
									id: 'Lightning Rod',
									origin: 'Rebidiora',
									name: 'Lightning Rod',
									composition: '70% Thunder, 70% Dragon',
								},
								{
									id: 'Okiko',
									origin: 'Disufiroa',
									name: 'Okiko',
									composition: '80% Fire, 80% Ice, 40% Dragon',
								},
								{
									id: 'Black Flame',
									origin: 'Fatalis',
									name: 'Black Flame',
									composition: '50% Fire, 150% Dragon',
								},
								{
									id: 'Crimson Demon',
									origin: 'Crimson Fatalis',
									name: 'Crimson Demon',
									composition: '50% Dragon, 150% Fire',
								},
								{
									id: 'Dark',
									origin: 'Meraginasu',
									name: 'Dark',
									composition: '80% Ice, 80% Dragon',
								},
								{
									id: 'Music',
									origin: 'Diva',
									name: 'Music',
									composition: '100% Water, 100% Ice',
								},
								{
									id: 'Sound',
									origin: 'Diva',
									name: 'Sound',
									composition: '100% Water, 100% Dragon',
								},
								{
									id: 'Wind',
									origin: 'Garuba Daora',
									name: 'Wind',
									composition: '80% Thunder, 80% Ice',
								},
								{
									id: 'Burning Zero',
									origin: 'Elzelion',
									name: 'Burning Zero',
									composition: '125% Fire, 125% Ice',
								},
								{
									id: "Emperor's Roar",
									origin: 'White Fatalis',
									name: "Emperor's Roar",
									composition: '150% Thunder, 50% Dragon',
								},
							])}
						/>
					</div>
				</Toolbar>
				<span slot="title">
					<div class="data-table-title">
						<div>Combo Elements</div>
					</div>
				</span>
				<svelte:fragment slot="cell" let:cell>
					{#if cell.key === 'name'}
						<InlineTooltip
							icon={ElementIcons.find((e) => e.name === cell.value)?.icon}
							tooltip={'Element'}
							text={cell.value}
						/>
					{:else if cell.key === 'origin'}
						<InlineTooltip
							icon={monsterInfo.find((e) => e.name === cell.value)?.icon ?? ''}
							iconType="file"
							tooltip={cell.value}
							text={cell.value}
						/>
					{:else if cell.key === 'composition'}
						{#each getElementArray(cell.value) as element}
							<InlineTooltip
								icon={ElementIcons.find((e) => e.name === element.name)?.icon ??
									''}
								tooltip={'Element'}
								text={`${element.value} ${element.name}`}
							/>
						{/each}
					{:else}
						<p>{cell.value}</p>
					{/if}
				</svelte:fragment>
			</DataTable>
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

	.data-table-title {
		display: flex;
		gap: 2rem;
		align-items: center;
	}

	.elements-table {
		margin-top: 2rem;
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
