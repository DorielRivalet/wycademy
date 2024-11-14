<!--
  ~ © 2023 Doriel Rivalet
  ~ Use of this source code is governed by a MIT license that can be
  ~ found in the LICENSE file.
-->

<script lang="ts">
	import SectionHeadingTopLevel from '$lib/client/components/SectionHeadingTopLevel.svelte';
	import { page } from '$app/stores';
	import Search from 'carbon-components-svelte/src/Search/Search.svelte';
	import Toggle from 'carbon-components-svelte/src/Toggle/Toggle.svelte';
	import MultiSelect from 'carbon-components-svelte/src/MultiSelect/MultiSelect.svelte';
	import Link from 'carbon-components-svelte/src/Link/Link.svelte';
	import slugify from 'slugify';
	import BestiaryMonsterCard from './BestiaryMonsterCard.svelte';
	import ContentSwitcher from 'carbon-components-svelte/src/ContentSwitcher/ContentSwitcher.svelte';
	import Switch from 'carbon-components-svelte/src/ContentSwitcher/Switch.svelte';
	import Grid from 'carbon-icons-svelte/lib/Grid.svelte';
	import List from 'carbon-icons-svelte/lib/List.svelte';
	import { cubicInOut } from 'svelte/easing';
	import { fade } from 'svelte/transition';
	import {
		getMonsterIcon,
		getUniqueMonsters,
	} from '$lib/client/modules/frontier/monsters';
	import PageTurn from '$lib/client/components/PageTurn.svelte';
	import MonsterComponent from '$lib/client/components/frontier/icon/dynamic-import/MonsterComponent.svelte';
	import {
		getHabitatIcon,
		type FrontierHabitat,
	} from '$lib/client/modules/frontier/habitat';
	import type {
		FrontierAilment,
		FrontierElement,
		FrontierGeneration,
		FrontierMonsterClass,
	} from '$lib/client/modules/frontier/types';
	import InlineTooltip from '$lib/client/components/frontier/InlineTooltip.svelte';
	import { getElementIcon } from '$lib/client/modules/frontier/elements';
	import { getAilmentIcon } from '$lib/client/modules/frontier/ailments';
	import Button from 'carbon-components-svelte/src/Button/Button.svelte';
	import Toolbar from 'carbon-components-svelte/src/DataTable/Toolbar.svelte';
	import CopyButton from 'carbon-components-svelte/src/CopyButton/CopyButton.svelte';
	import DataTable from 'carbon-components-svelte/src/DataTable/DataTable.svelte';
	import { downloadDomAsPng } from '$lib/client/modules/download';
	import { getCSVFromArray } from '$lib/client/modules/csv';
	import Download from 'carbon-icons-svelte/lib/Download.svelte';

	const monsterIconSize = '256px';

	let iconProps = {
		size: monsterIconSize,
		background: true,
	};

	let uniqueMonsters = getUniqueMonsters().sort(
		(a, b) =>
			(a?.displayName?.codePointAt(0) ?? 0) -
			(b?.displayName?.codePointAt(0) ?? 0),
	);

	let currentMonsters = uniqueMonsters;

	let orderAscending = true;
	let searchTerm = '';
	let selectedSizes = ['Large', 'Small']; // Default value for "Size" dropdown
	let selectedClasses: FrontierMonsterClass[] = [];
	// TODO
	//let selectedType = 'All';
	let selectedElements: FrontierElement[] = [];
	let selectedAilments: FrontierAilment[] = [];
	let selectedGenerations: FrontierGeneration[] = [];
	let selectedHabitats: FrontierHabitat[] = [];

	const allClasses: FrontierMonsterClass[] = [
		'Lynian',
		'Herbivore',
		//'Fish',
		'Neopteron',
		'Carapaceon',
		'Fanged Beast',
		'Leviathan',
		'Bird Wyvern',
		'Piscine Wyvern',
		'Flying Wyvern',
		//'Snake Wyvern',
		'Brute Wyvern',
		'Fanged Wyvern',
		'Elder Dragon',
		'Unclassified Monster',
		//'Unknown',
		'???',
	];
	const allElements: FrontierElement[] = [
		'Fire',
		'Water',
		'Thunder',
		'Ice',
		'Dragon',
		'Blaze',
		'Lightning Rod',
		'Light',
		'Dark',
		'Tenshou',
		'Okiko',
		'Music',
		'Sound',
		'Black Flame',
		'Crimson Demon',
		"Emperor's Roar",
		'Burning Zero',
	];
	const allHabitats: FrontierHabitat[] = [
		'Arena',
		'Battleground',
		'Bamboo Forest',
		'Castle Schrade',
		'Cloud Viewing Fortress',
		'Competition Arena',
		'Deep Crater',
		'Desert',
		'Duremudira Entrance',
		'Flower Field',
		'Fortress',
		'Gorge',
		'Great Arena',
		'Great Forest',
		'Forest and Hills',
		'Highlands',
		'Historical Site',
		'Historical Site - Night',
		'Interception Base',
		'Jungle',
		'Large Exploration Ship',
		'Mezeporta Square',
		'Painted Falls',
		'Polar Sea',
		"Hunter's Road",
		'Sacred Pinnacle',
		'Sanctuary',
		'Sky Corridor',
		'Snowy Mountains',
		'Solitude Island Depths',
		'Solitude Island',
		'Swamp',
		'Tidal Island',
		'Top of Great Forest',
		'Tower Nest Hole',
		'Tower',
		'Town',
		'Tower 2',
		'Volcano',
		'White Lake',
		"World's End",
		'Tower 3',
		'Cosmopolitan',
	];
	const allAilments: FrontierAilment[] = [
		'Bleed',
		'Blind',
		'Corrupted Poison',
		'Crystal',
		'Dracophage Erosion',
		'Extreme Fireblight',
		'Extreme Waterblight',
		'Extreme Thunderblight',
		'Extreme Iceblight',
		'Extreme Dragonblight',
		'Extreme Poison',
		'Extreme Sleep',
		'Extreme Paralysis',
		'Fatigue',
		'Frostbite',
		'Magnetism',
		'Snowman',
		'Stench',
		'Stun',
		'Vocal Cord Paralysis',
		'Poison',
		'Paralysis',
		'Sleep',
		'Blast',
		'Defense Down',
		'Farcaster',
		'Confusion',
		'Frenzy Virus',
	];
	const allGenerations: FrontierGeneration[] = [
		'First Generation',
		'Second Generation',
		'Third Generation',
		'Fourth Generation',
		'Frontier',
	];

	function filterSearchResults(
		searchTerm: string,
		selectedSizes: string[],
		selectedClasses: FrontierMonsterClass[],
		selectedHabitats: FrontierHabitat[],
		selectedGenerations: FrontierGeneration[],
		selectedAilments: FrontierAilment[],
		selectedElements: FrontierElement[],
		orderAscending: boolean,
	) {
		let filteredMonsters = uniqueMonsters.filter((monster) => {
			// Only apply name filter if there's a search term
			const nameMatch =
				!searchTerm ||
				monster.displayName.toLowerCase().includes(searchTerm.toLowerCase());

			// Only apply size filter if there are selected sizes
			const sizeMatch =
				selectedSizes.length === 0 || selectedSizes.includes(monster.type);

			// Only apply class filter if there are selected classes
			const classMatch =
				selectedClasses.length === 0 || selectedClasses.includes(monster.class);

			// Only apply habitat filter if there are selected habitats
			const habitatMatch =
				selectedHabitats.length === 0 ||
				(monster.habitats?.some((habitat) =>
					selectedHabitats.includes(habitat),
				) ??
					false);

			// Only apply generation filter if there are selected generations
			const generationMatch =
				selectedGenerations.length === 0 ||
				selectedGenerations.includes(monster.generation);

			// Only apply ailment filter if there are selected ailments
			const ailmentMatch =
				selectedAilments.length === 0 ||
				(monster.ailments?.some((ailment) =>
					selectedAilments.includes(ailment),
				) ??
					false);

			// Only apply element filter if there are selected elements
			const elementMatch =
				selectedElements.length === 0 ||
				(monster.elements?.some((element) =>
					selectedElements.includes(element),
				) ??
					false);

			// Return true only if ALL conditions match
			return (
				nameMatch &&
				sizeMatch &&
				classMatch &&
				habitatMatch &&
				generationMatch &&
				ailmentMatch &&
				elementMatch
			);
		});

		// Sort the filtered monsters alphabetically
		filteredMonsters.sort((a, b) => a.displayName.localeCompare(b.displayName));

		// Reverse the order if orderAscending is false
		if (!orderAscending) {
			filteredMonsters.reverse();
		}

		currentMonsters = filteredMonsters;
	}

	function findMonsterInfo(name: string) {
		return uniqueMonsters.find(
			(e) => e.displayName.toLowerCase() === name.toLowerCase(),
		);
	}

	// Reactive statement to filter and sort monsters based on searchTerm, orderAscending, and dropdown selections
	$: filterSearchResults(
		searchTerm,
		selectedSizes,
		selectedClasses,
		selectedHabitats,
		selectedGenerations,
		selectedAilments,
		selectedElements,
		orderAscending,
	);

	let contextSwitcherIndex = 0;
</script>

<!-- <Head
	title={customTitle}
	{description}
	image={pageThumbnail}
	{url}
	{website}
	{authorName}
	{datePublished}
	{authorUrl}
	contentType="SoftwareApplication"
	name={projectName}
	siteName={projectName}
/> -->

<section class="bestiary">
	<div class="top-level-section">
		<SectionHeadingTopLevel title="Overview" />
	</div>

	<div class="container">
		<div class="content-switcher-container">
			<ContentSwitcher bind:selectedIndex={contextSwitcherIndex}>
				<Switch>
					<Grid title="Card view" />
				</Switch>
				<Switch>
					<List title="List view" />
				</Switch>
			</ContentSwitcher>
		</div>

		<div class="options">
			<div>
				<Search
					bind:value={searchTerm}
					placeholder="Search monster name..."
					autocomplete={'on'}
				/>
			</div>
			<div class="dropdowns">
				<MultiSelect
					type="inline"
					label="Select size..."
					items={[
						{ id: 'Large', text: 'Large' },
						{ id: 'Small', text: 'Small' },
					]}
					bind:selectedIds={selectedSizes}
				/>
				<MultiSelect
					spellcheck="false"
					placeholder="Select classes..."
					filterable
					titleText="Class"
					type="inline"
					label="Select class..."
					items={allClasses.map((e) => {
						return {
							id: e,
							text: e,
						};
					})}
					bind:selectedIds={selectedClasses}
				/>
				<!-- <Dropdown
						titleText="Type"
						selectedId="0"
						type="inline"
						items={[
							{ id: '0', text: 'All' },
							{ id: '1', text: 'Hardcore' },
							{ id: '2', text: 'Unlimited' },
							{ id: '3', text: 'Musou' },
						]}
					/> -->
				<MultiSelect
					spellcheck="false"
					placeholder="Select elements..."
					filterable
					titleText="Element"
					type="inline"
					items={allElements.map((e) => {
						return {
							id: e,
							text: e,
						};
					})}
					bind:selectedIds={selectedElements}
					let:item
				>
					<InlineTooltip
						tooltip="Element"
						text={item.id}
						icon={getElementIcon(item.id)}
					/>
				</MultiSelect>
				<MultiSelect
					spellcheck="false"
					placeholder="Select ailments..."
					filterable
					titleText="Ailment"
					type="inline"
					items={allAilments.map((e) => {
						return {
							id: e,
							text: e,
						};
					})}
					bind:selectedIds={selectedAilments}
					let:item
				>
					<InlineTooltip
						tooltip="Ailment"
						text={item.id}
						icon={getAilmentIcon(item.id)}
					/>
				</MultiSelect>
				<MultiSelect
					spellcheck="false"
					placeholder="Select habitats..."
					filterable
					titleText="Habitat"
					type="inline"
					items={allHabitats.map((e) => {
						return {
							id: e,
							text: e,
						};
					})}
					bind:selectedIds={selectedHabitats}
					let:item
				>
					<InlineTooltip
						tooltip="Habitat"
						text={item.id}
						icon={getHabitatIcon(item.id)}
						iconType="file"
					/>
				</MultiSelect>
				<MultiSelect
					type="inline"
					label="Select generations..."
					items={allGenerations.map((e) => {
						return {
							id: e,
							text: e,
						};
					})}
					bind:selectedIds={selectedGenerations}
				/>
			</div>
			<Toggle
				labelA="Descending"
				labelB="Ascending"
				hideLabel
				labelText="Order"
				bind:toggled={orderAscending}
			/>
			<p>Results: {currentMonsters.length}</p>
		</div>
		{#if contextSwitcherIndex === 0}
			{#if currentMonsters.length > 0}
				<div class="monster-list">
					{#each currentMonsters as monster}
						<div
							transition:fade={{
								duration: 300,
								easing: cubicInOut,
							}}
						>
							<BestiaryMonsterCard
								{monster}
								width={monsterIconSize}
								tags={[
									...[monster.class ?? ''],
									...(monster.elements ?? []),
									...(monster.ailments ?? []),
								]}
							>
								<div
									class="monster-icon"
									style:--monster-icon="monster-icon-{slugify(
										monster.displayName,
										{
											lower: true,
										},
									)}"
								>
									<Link
										href={`/hunter-notes/monsters/overview/${slugify(monster.displayName, { lower: true })}`}
									>
										{#if monster.unusedComponent === true}
											<img
												src={monster.icon}
												alt={monster.displayName}
												width={monsterIconSize}
											/>
										{:else}
											<MonsterComponent
												currentMonster={monster.displayName}
												size={iconProps.size}
												background={iconProps.background}
											/>
										{/if}
									</Link>
								</div>
							</BestiaryMonsterCard>
						</div>
					{/each}
				</div>
			{:else}
				<p><strong>No monsters found</strong></p>
				<p>
					Try adjusting your search or filter options to find what you're
					looking for.
				</p>
			{/if}
		{:else if currentMonsters.length > 0}
			<div class="table table-with-scrollbar">
				<DataTable
					id="monsters-dom"
					sortable
					zebra
					size="short"
					headers={[
						{ key: 'name', value: 'Name' },
						{ key: 'titles', value: 'Titles' },
						{ key: 'type', value: 'Type' },
						{ key: 'class', value: 'Class' },
						{ key: 'elements', value: 'Elements' },
						{ key: 'ailments', value: 'Ailments' },
						{ key: 'weaknesses', value: 'Weaknesses' },
						{ key: 'habitats', value: 'Habitats' },
						//{ key: 'ecology', value: 'Ecology' },
						{ key: 'generation', value: 'Generation' },
						{ key: 'sizes', value: 'Sizes' },
						{ key: 'related', value: 'Related Monsters' },
					]}
					rows={currentMonsters.map((e, i) => {
						return {
							id: i,
							name: e.displayName,
							ailments: e.ailments?.toString() || '',
							elements: e.elements?.toString() || '',
							weaknesses: e.weaknesses?.toString() || '',
							generation: e.generation,
							related: e.relatedMonsters?.toString() || '',
							class: e.class,
							habitats: e.habitats?.toString() || '',
							//ecology: e.ecology,
							sizes: e.sizes?.toString() || '',
							titles: e.titles?.toString() || '',
							type: e.type,
						};
					})}
				>
					<Toolbar
						><div class="toolbar">
							<CopyButton
								iconDescription={'Copy as CSV'}
								text={getCSVFromArray(
									currentMonsters.map((e, i) => {
										return {
											id: i,
											name: e.displayName,
											ailments: e.ailments?.toString() || '',
											elements: e.elements?.toString() || '',
											weaknesses: e.weaknesses?.toString() || '',
											generation: e.generation,
											related: e.relatedMonsters?.toString() || '',
											class: e.class,
											habitats: e.habitats?.toString() || '',
											//ecology: e.ecology,
											sizes: e.sizes?.toString() || '',
											titles: e.titles?.toString() || '',
											type: e.type,
										};
									}),
								)}
							/>
							<Button
								kind="tertiary"
								icon={Download}
								on:click={(e) => downloadDomAsPng('monsters-dom', 'monsters')}
								>Download</Button
							>
						</div>
					</Toolbar>
					<svelte:fragment slot="cell" let:cell>
						{#if cell.key === 'name'}
							<Link
								href={`/hunter-notes/monsters/overview/${slugify(findMonsterInfo(cell.value)?.displayName ?? '', { lower: true })}`}
							>
								<InlineTooltip
									tooltip="Monster"
									text={cell.value}
									icon={getMonsterIcon(cell.value)}
									iconType="file"
								/></Link
							>
						{:else if cell.key === 'titles'}
							<p>{cell.value.replaceAll(',', ', ')}</p>
						{:else if cell.key === 'ailments'}
							{#each [...cell.value.split(',')] as ailment}
								<div class="table-inline-tooltip">
									<Link href={`/hunter-notes/getting-started/ailments`}>
										<InlineTooltip
											tooltip="Ailment"
											text={ailment}
											icon={getAilmentIcon(ailment)}
										/></Link
									>
								</div>
							{/each}
						{:else if cell.key === 'elements'}
							{#each [...cell.value.split(',')] as element}
								<div class="table-inline-tooltip">
									<Link href={`/hunter-notes/getting-started/elements`}>
										<InlineTooltip
											tooltip="Element"
											text={element}
											icon={getElementIcon(element)}
										/></Link
									>
								</div>
							{/each}
						{:else if cell.key === 'weaknesses'}
							{#each [...cell.value.split(',')] as weakness}
								<div class="table-inline-tooltip">
									<InlineTooltip
										tooltip="Weakness"
										text={weakness}
										icon={getElementIcon(weakness) === ''
											? getAilmentIcon(weakness)
											: getElementIcon(weakness)}
									/>
								</div>
							{/each}
						{:else if cell.key === 'habitats'}
							{#each [...cell.value.split(',')] as habitat}
								<div class="table-inline-tooltip">
									<Link href={`/hunter-notes/locations`}>
										<InlineTooltip
											tooltip="Habitat"
											iconType="file"
											text={habitat}
											icon={getHabitatIcon(habitat)}
										/></Link
									>
								</div>
							{/each}
						{:else if cell.key === 'related' && cell.value !== '' && cell.value !== 'None' && cell.value !== null && cell.value !== undefined && cell.value !== ' '}
							{#each [...cell.value.split(',')] as monster}
								<div class="table-inline-tooltip">
									<Link
										href={`/hunter-notes/monsters/overview/${slugify(findMonsterInfo(monster)?.displayName ?? '', { lower: true })}`}
									>
										<InlineTooltip
											tooltip="Monster"
											text={monster}
											icon={getMonsterIcon(monster)}
											iconType="file"
										/></Link
									>
								</div>
							{/each}
						{:else}
							<p>{cell.value}</p>
						{/if}
					</svelte:fragment>
				</DataTable>
			</div>
		{:else}
			<p><strong>No monsters found</strong></p>
			<p>
				Try adjusting your search or filter options to find what you're looking
				for.
			</p>
		{/if}
		<div class="page-turn">
			<PageTurn pageUrlPathName={$page.url.pathname} />
		</div>
	</div>
</section>

<style lang="scss">
	@use '@carbon/motion' as motion;

	// :global(.bx--list-box__menu-item, .bx--list-box__menu-item__option) {
	// 	height: auto;
	// }

	// :global(.bx--checkbox-label-text) {
	// 	display: block;
	// }

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
		background-color: var(--ctp-surface0);
	}

	.table-with-scrollbar {
		height: 80vh;
		overflow-y: auto;
	}

	.monster-list {
		display: flex;
		flex-direction: row;
		row-gap: 2rem;
		column-gap: 1rem;
		justify-content: center;
		overflow-x: hidden;
		overflow-y: hidden;
		flex-grow: 1;
		flex-shrink: 1;
		height: auto;
		flex-wrap: wrap;
	}

	.monster-icon {
		transition-property: filter;
		transition-duration: motion.$duration-fast-02;
		transition-timing-function: motion.motion(standard, expressive);
		view-transition-name: var(--monster-icon);
	}

	.monster-icon:hover {
		filter: brightness(120%);
	}

	.options {
		display: flex;
		gap: 1rem;
		width: 100%;
		margin: auto;
		flex-direction: column;
	}

	.container {
		display: flex;
		flex-direction: column;
		gap: 2rem;
	}

	.dropdowns {
		display: flex;
		flex-direction: row;
		gap: 1rem;
		flex-wrap: wrap;
		align-items: center;
	}

	.content-switcher-container {
		display: grid;
		grid-template-columns: 128px 128px;
		width: 100%;
		margin: auto;
	}

	.top-level-section {
		width: 100%;
		margin: auto;
		padding-top: 1rem;
	}

	.bestiary {
		padding-bottom: 2rem;
	}

	.table-inline-tooltip {
		margin-bottom: 0.5rem;
	}
</style>
