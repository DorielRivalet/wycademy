<script lang="ts">
	import PageTurn from '$lib/client/components/PageTurn.svelte';
	import SectionHeadingTopLevel from '$lib/client/components/SectionHeadingTopLevel.svelte';
	import TableOfContentsPage from '$lib/client/components/TableOfContentsPage.svelte';
	import DataTable from 'carbon-components-svelte/src/DataTable/DataTable.svelte';
	import InlineTooltip from '$lib/client/components/frontier/InlineTooltip.svelte';
	import Toolbar from 'carbon-components-svelte/src/DataTable/Toolbar.svelte';
	import CopyButton from 'carbon-components-svelte/src/CopyButton/CopyButton.svelte';
	import SectionHeading from '$lib/client/components/SectionHeading.svelte';
	import { getCSVFromArray } from '$lib/client/modules/csv';
	import UnorderedList from 'carbon-components-svelte/src/UnorderedList/UnorderedList.svelte';
	import ListItem from 'carbon-components-svelte/src/ListItem/ListItem.svelte';
	import { getItemIcon } from '$lib/client/modules/frontier/items';
	import Dropdown from 'carbon-components-svelte/src/Dropdown/Dropdown.svelte';
	import { page } from '$app/stores';
	import { bentoValues } from '$lib/client/modules/frontier/bento';
	import { LocationIcons } from '$lib/client/modules/frontier/locations';
	import { ItemColors } from '$lib/client/modules/frontier/items';

	function getBentoSectionValues(section: string) {
		let defaultResult = [
			{
				id: '',
				ingredient1: '',
				ingredient2: '',
				dish: '',
				health: '0',
				stamina: '0',
				attack: '0',
				defense: '0',
			},
		];

		const bentoSectionEntry = bentoValues.find((b) => b.name === section);
		if (!bentoSectionEntry) {
			// TODO warn user?
			console.error('Bento not found');
			return defaultResult;
		}

		let result: {
			id: string;
			ingredient1: string;
			ingredient2: string;
			dish: string;
			health: string;
			stamina: string;
			attack: string;
			defense: string;
		}[] = [];

		bentoSectionEntry.values.forEach((element) => {
			result.push({
				id: `${element.ingredient1} ${element.ingredient2}`,
				ingredient1: element.ingredient1,
				ingredient2: element.ingredient2,
				dish: element.dish,
				health: element.health,
				stamina: element.stamina,
				attack: element.attack,
				defense: element.defense,
			});
		});

		return result;
	}

	let bentoSection = $state('Vigorous');
	const bentoSectionNames = [
		{ id: 'Vigorous', text: 'Vigorous' },
		{ id: 'Starving Wolf', text: 'Starving Wolf' },
		{ id: 'Adrenaline', text: 'Adrenaline' },
		{ id: 'Combo', text: 'Combo' },
	];

	let bentoSectionValue = $derived(getBentoSectionValues(bentoSection));
</script>

<TableOfContentsPage displayTOC={true}>
	<div>
		<SectionHeadingTopLevel title={'Bento'} />
		<div>
			<p>
				Lunchboxes (or Bentos) are buffs that you set at the quest counter menu,
				right before embarking on a quest.
			</p>
			<div>You can pack a Bento at the appropiate NPC:</div>
			<UnorderedList class="spaced-list">
				<ListItem>
					<div class="paragraph-long-02">
						The dedicated food store in <InlineTooltip
							text="Mezeporta"
							tooltip="Location"
							icon={LocationIcons.find((e) => e.name === 'Mezeporta')?.icon}
							iconType={'file'}
						/>.
					</div>
				</ListItem>
				<ListItem
					><div class="paragraph-long-02">
						The dedicated food store in the <InlineTooltip
							tooltip="Location"
							text="Caravan"
							icon={LocationIcons.find((e) => e.name === 'Caravan')?.icon}
							iconType={'file'}
						/> area.
					</div>
				</ListItem>
				<ListItem
					><div class="paragraph-long-02">
						The Guild Store Cat in the <InlineTooltip
							tooltip="Location"
							text="Guild Hall"
							icon={LocationIcons.find((e) => e.name === 'Guild Hall')?.icon}
							iconType={'file'}
						/>.
					</div>
				</ListItem>
			</UnorderedList>

			<section>
				<SectionHeading level={3} title="Recommended Bento" />
				<div class="bento-table">
					<DataTable
						sortable
						zebra
						useStaticWidth
						size="short"
						headers={[
							{ key: 'ingredient1', value: 'Ingredient 1' },
							{ key: 'ingredient2', value: 'Ingredient 2' },
							{ key: 'dish', value: 'Dish' },
							{ key: 'health', value: 'Health' },
							{ key: 'stamina', value: 'Stamina' },
							{ key: 'attack', value: 'Attack' },
							{ key: 'defense', value: 'Defense' },
						]}
						rows={bentoSectionValue}
						><Toolbar
							><div class="toolbar">
								<Dropdown
									titleText="Bento For Armor Skill"
									bind:selectedId={bentoSection}
									items={bentoSectionNames}
								/>
								<CopyButton
									iconDescription={'Copy as CSV'}
									text={getCSVFromArray(bentoSectionValue)}
								/>
							</div>
						</Toolbar>
						{#snippet cell({ cell })}
							{#if cell.key === 'health' || cell.key === 'stamina' || cell.key === 'attack' || cell.key === 'defense'}
								<span
									style={cell.value.includes('-')
										? 'color: var(--ctp-red)'
										: ''}>{cell.value}</span
								>
							{:else}
								<p>{cell.value}</p>
							{/if}
						{/snippet}
					</DataTable>
				</div>
			</section>

			<section>
				<SectionHeading level={3} title="Food Types and Locations" />
				<div>
					<p>Guild Cat Store:</p>
					<UnorderedList class="spaced-list">
						<ListItem>
							<InlineTooltip
								text="Spirit Mushrooms"
								tooltip="Item"
								iconColor={ItemColors.find((e) => e.name === 'Orange')?.value}
								icon={getItemIcon('Mushroom')}
							/>
						</ListItem>
						<ListItem>
							<InlineTooltip
								text="Frost Tomatoes"
								tooltip="Item"
								iconColor={ItemColors.find((e) => e.name === 'Red')?.value}
								icon={getItemIcon('Vegetable')}
							/>
						</ListItem>
						<ListItem>
							<InlineTooltip
								text="Poogie Crackers"
								tooltip="Item"
								iconColor={ItemColors.find((e) => e.name === 'Yellow')?.value}
								icon={getItemIcon('Scale')}
							/>
						</ListItem>
					</UnorderedList>
					<p>Lunchbox NPC:</p>
					<UnorderedList class="spaced-list">
						<ListItem>
							<InlineTooltip
								text="Hot Oil"
								tooltip="Item"
								iconColor={ItemColors.find((e) => e.name === 'Red')?.value}
								icon={getItemIcon('Medicine')}
							/>
						</ListItem>
						<ListItem>
							<InlineTooltip
								text="Power Lard"
								tooltip="Item"
								iconColor={ItemColors.find((e) => e.name === 'Green')?.value}
								icon={getItemIcon('Medicine')}
							/>
						</ListItem>
						<ListItem>
							<InlineTooltip
								text="Fist Rice"
								tooltip="Item"
								icon={getItemIcon('Seed')}
							/>
						</ListItem>
						<ListItem>
							<InlineTooltip
								text="Pepper Bug"
								tooltip="Item"
								iconColor={ItemColors.find((e) => e.name === 'Blue')?.value}
								icon={getItemIcon('Bug')}
							/>
						</ListItem>
						<ListItem>
							<InlineTooltip
								text="Round Egg"
								tooltip="Item"
								iconColor={ItemColors.find((e) => e.name === 'Green')?.value}
								icon={getItemIcon('Egg')}
							/>
						</ListItem>
						<ListItem>
							<InlineTooltip
								text="Predator Honey (Rarely Available)"
								tooltip="Item"
								iconColor={ItemColors.find((e) => e.name === 'Yellow')?.value}
								icon={getItemIcon('Medicine')}
							/>
						</ListItem>
					</UnorderedList>
					<p>Town General Store:</p>
					<UnorderedList class="spaced-list">
						<ListItem>
							<InlineTooltip
								text="Ancient Bean"
								tooltip="Item"
								icon={getItemIcon('Seed')}
							/>
						</ListItem>
						<ListItem>
							<InlineTooltip
								text="Gold Extract"
								tooltip="Item"
								iconColor={ItemColors.find((e) => e.name === 'Yellow')?.value}
								icon={getItemIcon('Medicine')}
							/>
						</ListItem>
					</UnorderedList>
					<p>Poogie Farm General Store Lv3:</p>
					<UnorderedList class="spaced-list">
						<ListItem>
							<InlineTooltip
								text="Predator Honey"
								tooltip="Item"
								iconColor={ItemColors.find((e) => e.name === 'Yellow')?.value}
								icon={getItemIcon('Medicine')}
							/>
						</ListItem>
					</UnorderedList>
				</div>
			</section>
		</div>
		<div class="page-turn">
			<PageTurn pageUrlPathName={$page.url.pathname} />
		</div>
	</div>
</TableOfContentsPage>

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

	.bento-table {
		display: flex;
		flex-wrap: wrap;
		overflow-x: auto;
		max-width: 90vw;
	}
</style>
