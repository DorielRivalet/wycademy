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
	import { MonsterIcons } from '$lib/client/modules/frontier/objects';
	import Search from 'carbon-components-svelte/src/Search/Search.svelte';
	import Dropdown from 'carbon-components-svelte/src/Dropdown/Dropdown.svelte';
	import Toggle from 'carbon-components-svelte/src/Toggle/Toggle.svelte';
	import MultiSelect from 'carbon-components-svelte/src/MultiSelect/MultiSelect.svelte';
	import type { FrontierMonsterInfo } from '$lib/client/modules/frontier/types';
	import Link from 'carbon-components-svelte/src/Link/Link.svelte';
	import slugify from 'slugify';

	let customTitle = 'Bestiary';
	let url = $page.url.toString();

	const monsterIconSize = '128px';

	let iconProps = {
		size: monsterIconSize,
		background: true,
	};

	const unlistedMonsterNames = ['Random', 'Cactus', 'PSO2 Rappy'];

	function getUniqueMonsters() {
		let names: string[] = [];
		let result: FrontierMonsterInfo[] = [];
		MonsterIcons.forEach((element) => {
			if (!names.find((e) => element.displayName === e)) {
				if (!unlistedMonsterNames.find((e) => e === element.displayName)) {
					names.push(element.displayName);
					result.push(element);
				}
			}
		});

		return result;
	}

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
				selectedSize.find((e) => e === monster.size) &&
				(selectedClass === 'All' || monster.class === selectedClass) &&
				(selectedType === 'All' || monster.type === selectedType) &&
				(selectedElement === 'All' || monster.element === selectedElement) &&
				(selectedAilment === 'All' || monster.ailment === selectedAilment),
		);

		// Sort the filtered monsters alphabetically
		filteredMonsters.sort((a, b) => a.displayName.localeCompare(b.displayName));

		// Reverse the order if orderAscending is false
		if (!orderAscending) {
			filteredMonsters.reverse();
		}

		currentMonsters = filteredMonsters;
	}
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

<section class="top-level-section">
	<SectionHeadingTopLevel title="Bestiary" />

	<div class="container">
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
					<div class="monster-container">
						<div
							class="monster-icon"
							style:--monster-icon="monster-icon-{slugify(monster.displayName, {
								lower: true,
							})}"
						>
							<Link
								href={`/bestiary/${slugify(monster.displayName, { lower: true })}`}
							>
								{#if monster.unusedComponent}
									<img
										src={monster.icon}
										alt={monster.displayName}
										width={monsterIconSize}
									/>
								{:else}
									<svelte:component this={monster.component} {...iconProps} />
								{/if}
							</Link>
						</div>

						<div style="width: {monsterIconSize}" class="monster-name">
							<Link
								href={`/bestiary/${slugify(monster.displayName, { lower: true })}`}
							>
								{monster.displayName}
							</Link>
						</div>
					</div>
				{/each}
			</div>
		{:else}
			<p><strong>No monsters found</strong></p>
			<p>
				Try adjusting your search or filter options to find what you're looking
				for.
			</p>
		{/if}
	</div>
</section>

<style lang="scss">
	@use '@carbon/motion' as motion;

	.monster-list {
		.monster-icon {
			view-transition-name: var(--monster-icon);
		}
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

	.monster-name {
		font-weight: bold;
		text-wrap: wrap;
		text-align: center;
		line-height: 1.5em;
	}

	.monster-container {
		display: flex;
		gap: 0.5rem;
		flex-direction: column;
		align-items: center;
	}

	.monster-icon {
		transition-property: filter;
		transition-duration: motion.$duration-fast-02;
		transition-timing-function: motion.motion(standard, expressive);
	}

	.monster-icon:hover {
		filter: drop-shadow(0 0 10px var(--ctp-blue)) brightness(120%);
	}

	.options {
		display: flex;
		gap: 1rem;
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
</style>
