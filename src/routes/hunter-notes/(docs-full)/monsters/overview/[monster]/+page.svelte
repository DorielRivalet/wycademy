<script lang="ts">
	import { page } from '$app/stores';
	import ImageDialog from '$lib/client/components/ImageDialog.svelte';
	import SectionHeadingTopLevel from '$lib/client/components/SectionHeadingTopLevel.svelte';
	import slugify from 'slugify';
	import BestiaryMonsterGameInfo from '../BestiaryMonsterGameInfo.svelte';
	import {
		convertHitzoneInfo,
		getAllHitzoneValuesForHitzones,
		getHitzoneValuesObject,
		getUniqueMonsters,
		isFieldEmpty,
	} from '$lib/client/modules/frontier/functions';
	import {
		AilmentIcons,
		ElementIcons,
		StatusIcons,
		monsterInfo,
	} from '$lib/client/modules/frontier/objects';
	import InlineTooltip from '$lib/client/components/frontier/InlineTooltip.svelte';
	import ezlion, { type FrontierMonsterName } from 'ezlion';
	import type {
		FrontierMonsterHitzoneRankBand,
		FrontierMonsterHitzoneType,
		FrontierMonsterInfo,
		FrontierMonsterNameExpanded,
	} from '$lib/client/modules/frontier/types';
	import SectionHeading from '$lib/client/components/SectionHeading.svelte';
	import Link from 'carbon-components-svelte/src/Link/Link.svelte';
	import UnorderedList from 'carbon-components-svelte/src/UnorderedList/UnorderedList.svelte';
	import ListItem from 'carbon-components-svelte/src/ListItem/ListItem.svelte';
	import EspinasSleeping from '$lib/client/images/splash.gif';
	import Button from 'carbon-components-svelte/src/Button/Button.svelte';
	import PreviousOutline from 'carbon-icons-svelte/lib/PreviousOutline.svelte';
	import { goto } from '$app/navigation';
	import Dropdown, {
		type DropdownItem,
	} from 'carbon-components-svelte/src/Dropdown/Dropdown.svelte';
	import ComboBox from 'carbon-components-svelte/src/ComboBox/ComboBox.svelte';
	import DataTable from 'carbon-components-svelte/src/DataTable/DataTable.svelte';
	import Toolbar from 'carbon-components-svelte/src/DataTable/Toolbar.svelte';
	import CopyButton from 'carbon-components-svelte/src/CopyButton/CopyButton.svelte';
	import { getCSVFromArray } from '$lib/client/modules/csv';
	import { fade } from 'svelte/transition';
	import { cubicInOut } from 'svelte/easing';
	import { hitzoneInfo } from '$lib/client/modules/frontier/hitzones';

	function findMonster(params: string) {
		let found: FrontierMonsterInfo | undefined = monsterInfo.find(
			(monster) =>
				params.toLowerCase() === slugify(monster.displayName).toLowerCase(),
		);

		if (found) {
			return found;
		} else {
			let foundKey = Object.keys(ezlion.Monster).find((e) => `${e}` === params);
			if (foundKey) {
				return monsterInfo.find((m) => m.id === Number(foundKey));
			} else {
				return undefined;
			}
		}
	}

	function findMonsterInfo(name: string) {
		return monsterInfo.find(
			(e) => e.displayName.toLowerCase() === name.toLowerCase(),
		);
	}

	function findMonsterID(monster: FrontierMonsterInfo | undefined) {
		if (monster === undefined) {
			return 'Not found';
		}
		return monster?.id ?? 'Not found';
	}

	function shouldFilterItem(item: { text: string }, value: string) {
		if (!value) return true;
		return item.text.toLowerCase().includes(value.toLowerCase());
	}

	function getCurrentMonsters() {
		let list:
			| { name: string; icon: any }[]
			| FrontierMonsterInfo[]
			| { name: string; image: any }[];

		list = uniqueMonsters;

		list = list.filter((e) => e.icon !== '');

		let result: DropdownItem[] = [];
		list.forEach((element) => {
			if ('displayName' in element) {
				// TypeScript now knows that element is of type FrontierMonsterInfo
				// Ensure 'displayName' is a string before pushing to result
				if (
					typeof element.displayName === 'string' &&
					!result.find((e) => e.id === element.displayName)
				) {
					result.push({
						id: `${element.displayName}`,
						text: element.displayName,
					});
				}
			} else {
				result.push({ id: element.name, text: element.name });
			}
		});

		result.sort((a, b) => a.text.localeCompare(b.text));

		return result;
	}

	function getAvailableRankBands(
		displayName: FrontierMonsterName,
	): { id: string; text: string }[] {
		// Filter HitzoneInfo by displayName and extract unique rankBands
		const rankBands = new Set<FrontierMonsterHitzoneRankBand>();
		hitzoneInfo.forEach((info) => {
			if (info.displayName === displayName) {
				rankBands.add(info.rankBand);
			}
		});
		return Array.from(rankBands).map((rank) => ({ id: rank, text: rank }));
	}

	function getAvailableMonsterStates(
		displayName: FrontierMonsterName,
	): { id: string; text: string }[] {
		// Filter HitzoneInfo by displayName and extract unique monsterStates
		const monsterStates = new Set<string>();
		hitzoneInfo.forEach((info) => {
			if (info.displayName === displayName) {
				monsterStates.add(info.monsterState);
			}
		});
		return Array.from(monsterStates).map((state) => ({
			id: state,
			text: state,
		}));
	}

	function getDuplicateEntries(): HitzoneInfo[] {
		// Create a map to count occurrences of each unique combination of displayName, rankBand, and monsterState
		const occurrenceMap: { [key: string]: number } = {};

		hitzoneInfo.forEach((entry) => {
			const key = `${entry.displayName}-${entry.rankBand}-${entry.monsterState}-${entry.part}`;
			if (!occurrenceMap[key]) {
				occurrenceMap[key] = 1;
			} else {
				occurrenceMap[key]++;
			}
		});

		// Filter hitzoneInfo to find entries that occur more than once
		return hitzoneInfo.filter((entry) => {
			const key = `${entry.displayName}-${entry.rankBand}-${entry.monsterState}-${entry.part}`;
			return occurrenceMap[key] > 1;
		});
	}

	let uniqueMonsters = getUniqueMonsters().sort(
		(a, b) =>
			(a?.displayName?.codePointAt(0) ?? 0) -
			(b?.displayName?.codePointAt(0) ?? 0),
	);

	let selectedMonsterIdFromList: FrontierMonsterName = findMonster(
		$page.params.monster,
	)?.displayName;

	/** TODO this changes depending on monster*/
	let selectedRankBand: FrontierMonsterHitzoneRankBand =
		getAvailableRankBands(selectedMonsterIdFromList)[0].id || 'Default';
	let selectedHitzoneType: FrontierMonsterHitzoneType = 'Cutting';
	let selectedMonsterState = 'Default';

	const currentMonsters = getCurrentMonsters();

	$: monster = findMonster($page.params.monster);
	$: monsterID = findMonsterID(monster);

	$: hitzones =
		convertHitzoneInfo(
			selectedMonsterIdFromList,
			selectedRankBand,
			selectedMonsterState,
		) || [];

	$: hitzoneValues = Object.entries(
		getAllHitzoneValuesForHitzones(
			hitzones,
			selectedMonsterState,
			selectedRankBand,
		),
	).map(([partName, hitzoneValues]) => ({
		id: partName,
		part: partName,
		...Object.fromEntries(
			Object.entries(hitzoneValues).map(([type, value]) => [
				type.toLowerCase(),
				value,
			]),
		),
	}));

	$: hitzoneHighestValues = getHitzoneValuesObject(
		hitzones,
		selectedMonsterState,
		selectedRankBand,
	);

	$: availableRankBands = getAvailableRankBands(selectedMonsterIdFromList) || [
		{ id: 'Default', text: 'Default' },
	];

	$: availableMonsterStates = getAvailableMonsterStates(
		selectedMonsterIdFromList,
	) || [{ id: 'Default', text: 'Default' }];

	// TODO remove from monster name list ones with unused svg
</script>

{#if monster}
	<div class="container">
		<SectionHeadingTopLevel title={monster.displayName} />

		<div class="overview">
			<div>
				<BestiaryMonsterGameInfo
					description={monster.ecology}
					type={monster.class}
					title={monster.titles !== undefined
						? isFieldEmpty(monster.titles[0])
							? 'None'
							: monster.titles[0]
						: 'None'}
				>
					<div
						class="monster-icon"
						style:--monster-icon="monster-icon-{slugify(monster.displayName, {
							lower: true,
						})}"
					>
						{#if monster.unusedComponent}
							<ImageDialog
								src={monster.icon}
								alt={monster.displayName}
								width={256}
								height={256}
								type="file"
							/>
						{:else}
							<ImageDialog
								src={monster.component}
								alt={monster.displayName}
								componentSize={'100%'}
								type="component"
							/>
						{/if}
					</div>
				</BestiaryMonsterGameInfo>
			</div>
			<div>
				<div class="elements">
					<strong>Elements: </strong>
					{#if monster.elements !== undefined && monster.elements.length > 0}
						{#each monster.elements as element}
							<InlineTooltip
								text={element}
								tooltip="Element"
								iconType="component"
								icon={ElementIcons.find((e) => e.displayName === element)?.icon}
							/>
						{/each}
					{:else}
						None
					{/if}
				</div>
				<div class="ailments">
					<strong>Ailments: </strong>
					{#if monster.ailments !== undefined && monster.ailments.length > 0}
						{#each monster.ailments as ailment}
							<InlineTooltip
								text={ailment}
								tooltip="Ailment"
								iconType="component"
								icon={AilmentIcons.find((e) => e.name === ailment)?.icon}
							/>
						{/each}
					{:else}
						None
					{/if}
				</div>
				<div class="weaknesses">
					<strong>Weaknesses: </strong>
					{#if monster.weaknesses !== undefined && monster.weaknesses.length > 0}
						{#each monster.weaknesses as weakness}
							{#if ElementIcons.find((e) => e.name === weakness)}
								<InlineTooltip
									text={weakness}
									tooltip="Element"
									iconType="component"
									icon={ElementIcons.find((e) => e.name === weakness)?.icon}
								/>
							{:else if StatusIcons.find((e) => e.name === weakness)}
								<InlineTooltip
									text={weakness}
									tooltip="Status"
									iconType="component"
									icon={StatusIcons.find((e) => e.name === weakness)?.icon}
								/>
							{/if}
						{/each}
					{:else}
						None
					{/if}
				</div>
				<p>
					<strong>ID: </strong>{monsterID} (0x{Number.parseInt(`${monsterID}`)
						.toString(16)
						.toUpperCase()
						.padStart(2, '0')})
				</p>
				<p>
					<strong>Size Type: </strong>{monster.type}
				</p>
				<p>
					<strong>Sizes: </strong>
					{#if monster.sizes && monster.sizes.length > 0}
						<UnorderedList class="spaced-list">
							{#each monster.sizes as size}
								<ListItem>{size}</ListItem>
							{/each}
						</UnorderedList>
					{:else}
						<p>Not found.</p>
					{/if}
				</p>
				<p>
					<strong>Rank: </strong>{monster.rank}
				</p>
				<p>
					<strong>Render (click to expand): </strong>
					<ImageDialog
						type="file"
						src={monster.fullRender}
						alt="Monster Render"
						width={32}
						height={32}
					/>
				</p>
				<p>
					<strong>Generation: </strong>{monster.generation}
				</p>
			</div>
			<div class="habitats">
				<p>
					<strong>Habitats: </strong>
					{#if monster.habitats && monster.habitats.length > 0}
						<UnorderedList class="spaced-list">
							{#each monster.habitats as habitat}
								<ListItem>{habitat}</ListItem>
							{/each}
						</UnorderedList>
					{:else}
						<p>Not found.</p>
					{/if}
				</p>
			</div>
			<div class="related-monsters">
				<p>
					<strong>Related Monsters: </strong>
				</p>

				{#if monster.relatedMonsters && monster.relatedMonsters.length > 0}
					<UnorderedList class="spaced-list">
						{#each monster.relatedMonsters as relatedMonster}
							<ListItem>
								{#if findMonsterInfo(relatedMonster)}
									<Link
										href={`/hunter-notes/monsters/overview/${slugify(findMonsterInfo(relatedMonster)?.displayName ?? '/hunter-notes/monsters/overview', { lower: true })}`}
									>
										{#if findMonsterInfo(relatedMonster)?.unusedComponent}
											<InlineTooltip
												iconType="file"
												tooltip={relatedMonster}
												text={relatedMonster}
												gap={'.5rem'}
												iconSize={'32px'}
												icon={findMonsterInfo(relatedMonster)?.icon}
											/>
										{:else}
											<InlineTooltip
												iconType="component"
												gap={'.5rem'}
												tooltip={relatedMonster}
												text={relatedMonster}
												iconSize={'32px'}
												icon={findMonsterInfo(relatedMonster)?.component}
											/>
										{/if}
									</Link>
								{:else}
									{relatedMonster}
								{/if}
							</ListItem>
						{/each}
					</UnorderedList>
				{:else}
					<p>Not found.</p>
				{/if}
			</div>
		</div>
		<section>
			<SectionHeading title="Hitzone Values" level={2} />
			<p class="spaced-paragraph">
				The colors in the silhouette denotes the highest and lowest values for
				the hitzone type, while the values in bold in the table denotes the
				highest and second highest values for that column.
			</p>
			<div class="hitzone-colors-description">
				<UnorderedList>
					<ListItem>Red: Highest values for this hitzone type.</ListItem>
					<ListItem
						>Orange: Second highest values for this hitzone type.</ListItem
					>
					<ListItem
						>Yellow: Third highest values for this hitzone type.</ListItem
					>
					<ListItem>Green: Values higher than 0 for this hitzone type.</ListItem
					>
					<ListItem
						>Blue: Values lower or equal to 0 for this hitzone type.</ListItem
					>
				</UnorderedList>
			</div>

			<div class="hitzone-options">
				<ComboBox
					on:select={() => {
						selectedMonsterState = availableMonsterStates[0]?.id || 'Default';
						selectedRankBand = availableRankBands[0]?.id || 'Default';
					}}
					titleText="Monster"
					placeholder="Select monster"
					bind:selectedId={selectedMonsterIdFromList}
					items={currentMonsters}
					{shouldFilterItem}
				/>
				{#if availableMonsterStates.length > 0 && availableRankBands.length > 0}
					<Dropdown
						titleText="Rank Band"
						bind:selectedId={selectedRankBand}
						items={availableRankBands}
					/>
				{/if}
				{#if monsterInfo.find((e) => e.displayName === selectedMonsterIdFromList)?.hitzoneComponent}
					<Dropdown
						titleText="Hitzone Type"
						bind:selectedId={selectedHitzoneType}
						items={[
							{ id: 'Cutting', text: '⚔️ Cutting' },
							{ id: 'Impact', text: '🔨 Impact' },
							{ id: 'Shot', text: '🏹 Shot' },
							{ id: 'Fire', text: '🔥 Fire' },
							{ id: 'Water', text: '💧 Water' },
							{ id: 'Thunder', text: '⚡ Thunder' },
							{ id: 'Dragon', text: '🐲 Dragon' },
							{ id: 'Ice', text: '❄️ Ice' },
							{ id: 'Stun', text: '💫 Stun' },
						]}
					/>
				{/if}
				{#if availableMonsterStates.length > 0 && availableRankBands.length > 0}
					<Dropdown
						titleText="Monster State"
						bind:selectedId={selectedMonsterState}
						items={availableMonsterStates}
					/>
				{/if}
			</div>
			<div class="hitzone-info-container">
				<div class="silhouette">
					{#if selectedMonsterIdFromList}
						<div
							transition:fade={{
								duration: 150,
								easing: cubicInOut,
							}}
						>
							<svelte:component
								this={monsterInfo.find(
									(e) => e.displayName === selectedMonsterIdFromList,
								)?.hitzoneComponent}
								{selectedHitzoneType}
								{selectedMonsterState}
								{selectedRankBand}
								{hitzones}
							/>
						</div>
					{/if}
				</div>
				{#if selectedMonsterIdFromList}
					<div
						class="hitzone-table"
						transition:fade={{
							duration: 150,
							easing: cubicInOut,
						}}
					>
						<DataTable
							sortable
							zebra
							title={selectedMonsterIdFromList +
								' | ' +
								selectedRankBand +
								' | ' +
								selectedMonsterState}
							size="medium"
							headers={[
								{ key: 'part', value: 'Part' },
								{ key: 'cutting', value: '⚔️' },
								{ key: 'impact', value: '🔨' },
								{ key: 'shot', value: '🏹' },
								{ key: 'fire', value: '🔥' },
								{ key: 'water', value: '💧' },
								{ key: 'thunder', value: '⚡' },
								{ key: 'ice', value: '❄️' },
								{ key: 'dragon', value: '🐲' },
								{ key: 'stun', value: '💫' },
							]}
							rows={hitzoneValues}
							><Toolbar
								><div class="toolbar">
									<CopyButton
										iconDescription={'Copy as CSV'}
										text={getCSVFromArray(hitzoneValues)}
									/>
								</div>
							</Toolbar>

							<svelte:fragment slot="cell" let:cell>
								{#if hitzoneHighestValues[cell.key
										.charAt(0)
										.toUpperCase() + cell.key.slice(1)]?.find((e) => e === cell.value)}
									<p><strong>{cell.value}</strong></p>
								{:else}
									<p>{cell.value}</p>
								{/if}
							</svelte:fragment>
						</DataTable>
					</div>
				{/if}
			</div>
		</section>
		<section>
			<SectionHeading level={2} title="Stats Tables" />
			<div></div>
		</section>
		<section>
			<SectionHeading level={2} title="Status Resistances" />
			<div></div>
		</section>
		<section>
			<SectionHeading level={2} title="Stagger Resistance" />
			<div></div>
		</section>
		<section>
			<SectionHeading level={2} title="Attacks" />
			<div></div>
		</section>
		<section>
			<SectionHeading level={2} title="Carves" />
			<div></div>
		</section>
		<section>
			<SectionHeading level={2} title="Trivia" />
			<div></div>
		</section>
		<section>
			<SectionHeading title="Fastest Hunts" level={2} />
			<div></div>
		</section>
	</div>
{:else}
	<div class="not-found-container">
		<p>Monster not found</p>
		<img src={EspinasSleeping} alt="Espinas sleeping" width="128" />
		<Button
			icon={PreviousOutline}
			on:click={() => goto('/hunter-notes/monsters/overview')}
			>Go to Monsters Overview</Button
		>
	</div>
{/if}

<style lang="scss">
	.container {
		padding-top: 1rem;
		padding-bottom: 2rem;
		width: 90%;
		margin: auto;
	}

	.hitzone-options {
		display: flex;
		gap: 1rem;
		flex-wrap: wrap;
		margin-bottom: 1rem;
		margin-top: 1rem;
	}

	.not-found-container {
		display: flex;
		gap: 1rem;
		flex-direction: column;
		align-items: center;
		justify-content: center;
		padding: 2rem;
	}

	.monster-icon {
		view-transition-name: var(--monster-icon);
		display: flex;
		width: 100%;
		justify-content: center;
	}

	.overview {
		display: flex;
		flex-wrap: wrap;
		gap: 2rem;
	}

	.overview > div {
		display: flex;
		flex-direction: column;
		gap: 0.5rem;
		flex-wrap: wrap;
	}

	.habitats,
	.related-monsters {
		max-height: 80vh;
		overflow-y: auto;
	}

	.toolbar {
		padding: 1rem;
		display: flex;
		align-items: center;
		gap: 1rem;
		flex-grow: 1;
		flex-shrink: 1;
	}

	.hitzone-table {
		grid-area: hitzone-table;
		width: 100%;
		overflow-x: auto;
		background-color: var(--ctp-surface0);
	}

	@media (min-width: 320px) {
		.silhouette {
			grid-area: silhouette;
			width: 50%;
			margin: 0 auto;
		}

		.hitzone-info-container {
			align-items: start;
			display: flex;
			width: 100%;
			gap: 1rem;
			flex-direction: column;
			flex-wrap: wrap;
		}
	}

	@media (min-width: 1312px) {
		.silhouette {
			grid-area: silhouette;
			width: 100%;
			margin: 1rem;
		}
		.hitzone-info-container {
			align-items: center;
			grid-template-areas: 'hitzone-table silhouette';
			grid-template-columns: 1fr 1fr;
			display: grid;
			width: 100%;
			gap: 1rem;
		}
	}
</style>
