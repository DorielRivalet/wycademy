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
	import type { FrontierMonsterName, FrontierRankBand } from 'ezlion';
	import Search from 'carbon-components-svelte/src/Search/Search.svelte';
	import Dropdown from 'carbon-components-svelte/src/Dropdown/Dropdown.svelte';
	import Toggle from 'carbon-components-svelte/src/Toggle/Toggle.svelte';

	let customTitle = 'Bestiary';
	let url = $page.url.toString();

	const monsterIconSize = '128px';

	let iconProps = {
		size: monsterIconSize,
		background: true,
	};

	function getUniqueMonsters() {
		let names: string[] = [];
		let result: {
			name: FrontierMonsterName;
			rank: FrontierRankBand;
			icon: any;
			render: any;
			component: any;
			unusedComponent: boolean;
			displayName: string;
		}[] = [];
		MonsterIcons.forEach((element) => {
			if (!names.find((e) => element.displayName === e)) {
				if (element.displayName !== 'Random') {
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

	let orderAscending = false;
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
				<Search autocomplete={'on'} />
			</div>
			<div class="dropdowns">
				<Dropdown
					titleText="Size"
					selectedId="0"
					type="inline"
					items={[
						{ id: '0', text: 'All' },
						{ id: '1', text: 'Large' },
						{ id: '2', text: 'Small' },
					]}
					on:select={(event) => console.log('a')}
					let:item
				></Dropdown>
				<Dropdown
					titleText="Class"
					selectedId="0"
					type="inline"
					items={[
						{ id: '0', text: 'All' },
						{ id: '1', text: 'Flying Wyvern' },
						{ id: '2', text: 'Brute Wyvern' },
					]}
					on:select={(event) => console.log('a')}
					let:item
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
					on:select={(event) => console.log('a')}
					let:item
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
					on:select={(event) => console.log('a')}
					let:item
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
					on:select={(event) => console.log('a')}
					let:item
				/>
				<Toggle
					labelA="Ascending"
					labelB="Descending"
					hideLabel
					labelText="Order"
					bind:toggled={orderAscending}
				/>
			</div>
		</div>

		<div class="monster-list">
			{#each uniqueMonsters as monster}
				<div class="monster-container">
					{#if monster.unusedComponent}
						<img
							src={monster.icon}
							alt={monster.displayName}
							width={monsterIconSize}
						/>
					{:else}
						<svelte:component this={monster.component} {...iconProps} />
					{/if}
					<div style="width: {monsterIconSize}" class="monster-name">
						{monster.displayName}
					</div>
				</div>
			{/each}
		</div>
	</div>
</section>

<style lang="scss">
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
