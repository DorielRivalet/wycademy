<!--
  ~ © 2023 Doriel Rivalet
  ~ Use of this source code is governed by a MIT license that can be
  ~ found in the LICENSE file.
-->

<script lang="ts">
	import SectionHeadingTopLevel from '$lib/client/components/SectionHeadingTopLevel.svelte';
	import pageThumbnail from '$lib/client/images/icon/monster.png';
	import {
		authorName,
		authorUrl,
		datePublished,
		description,
		projectName,
		website,
	} from '$lib/constants';
	import Head from '$lib/client/components/Head.svelte';
	import { page } from '$app/stores';
	import Search from 'carbon-components-svelte/src/Search/Search.svelte';
	import Dropdown from 'carbon-components-svelte/src/Dropdown/Dropdown.svelte';
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
	import { getUniqueMonsters } from '$lib/client/modules/frontier/functions';
	import PageTurn from '$lib/client/components/PageTurn.svelte';

	const customTitle = 'Monsters Overview';
	const url = $page.url.toString();

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

	let selectedSize = ['Large', 'Small']; // Default value for "Size" dropdown
	let selectedClass = 'All'; // Default value for "Class" dropdown
	let selectedType = 'All'; // Default value for "Type" dropdown
	let selectedElement = 'All'; // Default value for "Element" dropdown
	let selectedAilment = 'All'; // Default value for "Ailment" dropdown

	// Reactive statement to filter and sort monsters based on searchTerm, orderAscending, and dropdown selections
	$: {
		let filteredMonsters = uniqueMonsters.filter(
			(monster) =>
				monster.displayName.toLowerCase().includes(searchTerm.toLowerCase()) &&
				selectedSize.find((e) => e === monster.type) &&
				(selectedClass === 'All' || monster.class === selectedClass) &&
				(selectedType === 'All' || monster.type === selectedType),
			// (selectedElement === 'All' || monster.element === selectedElement) &&
			// (selectedAilment === 'All' || monster.ailment === selectedAilment),
		);

		// Sort the filtered monsters alphabetically
		filteredMonsters.sort((a, b) => a.displayName.localeCompare(b.displayName));

		// Reverse the order if orderAscending is false
		if (!orderAscending) {
			filteredMonsters.reverse();
		}

		currentMonsters = filteredMonsters;
	}

	let contextSwitcherIndex = 0;
</script>

<Head
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
/>

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
		{#if contextSwitcherIndex === 0}
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
						bind:selectedIds={selectedSize}
					/>
					<Dropdown
						titleText="Class"
						selectedId="0"
						type="inline"
						items={[
							{ id: '0', text: 'All' },
							{ id: '1', text: 'Flying Wyvern' },
							{ id: '2', text: 'Brute Wyvern' },
						]}
					></Dropdown>
					<Dropdown
						titleText="Type"
						selectedId="0"
						type="inline"
						items={[
							{ id: '0', text: 'All' },
							{ id: '1', text: 'Hardcore' },
							{ id: '2', text: 'Unlimited' },
							{ id: '3', text: 'Musou' },
						]}
					/>
					<Dropdown
						titleText="Element"
						selectedId="0"
						type="inline"
						items={[
							{ id: '0', text: 'All' },
							{ id: '1', text: 'Fire' },
							{ id: '2', text: 'Water' },
						]}
					/>
					<Dropdown
						titleText="Ailment"
						selectedId="0"
						type="inline"
						items={[
							{ id: '0', text: 'All' },
							{ id: '1', text: 'Poison' },
							{ id: '2', text: 'Sleep' },
						]}
					/>
					<Toggle
						labelA="Descending"
						labelB="Ascending"
						hideLabel
						labelText="Order"
						bind:toggled={orderAscending}
					/>
				</div>
				<p>Results: {currentMonsters.length}</p>
			</div>
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
										{#if monster.unusedComponent}
											<img
												src={monster.icon}
												alt={monster.displayName}
												width={monsterIconSize}
											/>
										{:else}
											<svelte:component
												this={monster.component}
												{...iconProps}
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
		{/if}
		<div class="page-turn">
			<PageTurn pageUrlPathName={$page.url.pathname} />
		</div>
	</div>
</section>

<style lang="scss">
	@use '@carbon/motion' as motion;

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
</style>
