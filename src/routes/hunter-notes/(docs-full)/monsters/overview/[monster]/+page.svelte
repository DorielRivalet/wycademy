<script lang="ts">
	import { page } from '$app/state';
	import ImageDialog from '$lib/client/components/ImageDialog.svelte';
	import SectionHeadingTopLevel from '$lib/client/components/SectionHeadingTopLevel.svelte';
	import slugify from 'slugify';
	import BestiaryMonsterGameInfo from '../BestiaryMonsterGameInfo.svelte';
	import {
		convertHitzoneInfo,
		getAllHitzoneValuesForHitzones,
		getHitzoneValuesObject,
	} from '$lib/client/modules/frontier/hitzones';
	import InlineTooltip from '$lib/client/components/frontier/InlineTooltip.svelte';
	import { ezlionMonster } from 'ezlion';
	import type {
		FrontierMonsterHitzoneRankBand,
		FrontierMonsterHitzoneType,
		FrontierMonsterInfo,
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
	import { fade, scale } from 'svelte/transition';
	import { cubicInOut } from 'svelte/easing';
	import {
		hitzoneInfo,
		silhouetteInfo,
		type HitzoneInfo,
	} from '$lib/client/modules/frontier/hitzones';
	import MonsterSilhouette from '$lib/client/components/frontier/MonsterSilhouette.svelte';
	import {
		AilmentIcons,
		StatusIcons,
	} from '$lib/client/modules/frontier/ailments';
	import { ElementIcons } from '$lib/client/modules/frontier/elements';
	import {
		getMonsterIcon,
		getUniqueMonsters,
		monsterInfo,
	} from '$lib/client/modules/frontier/monsters';
	import { isFieldEmpty } from '$lib/client/modules/frontier/functions';
	import MonsterComponent from '$lib/client/components/frontier/icon/dynamic-import/MonsterComponent.svelte';
	import {
		getHabitatIcon,
		Habitats,
	} from '$lib/client/modules/frontier/habitat';
	import Lens from '$lib/client/components/Lens.svelte';
	import Accordion from 'carbon-components-svelte/src/Accordion/Accordion.svelte';
	import AccordionItem from 'carbon-components-svelte/src/Accordion/AccordionItem.svelte';
	import Help from 'carbon-icons-svelte/lib/Help.svelte';
	import ToolKit from 'carbon-icons-svelte/lib/ToolKit.svelte';

	function findMonster(params: string) {
		let found: FrontierMonsterInfo | undefined = monsterInfo.find(
			(monster) =>
				params.toLowerCase() === slugify(monster.displayName).toLowerCase(),
		);

		if (found) {
			return found;
		} else {
			let foundKey = Object.keys(ezlionMonster).find((e) => `${e}` === params);
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
		displayName: string,
	): { id: FrontierMonsterHitzoneRankBand; text: string }[] {
		// Filter HitzoneInfo by displayName and extract unique rankBands
		const rankBands = new Set<FrontierMonsterHitzoneRankBand>();
		hitzoneInfo.forEach((info) => {
			if (info.displayName === displayName) {
				rankBands.add(info.rankBand);
			}
		});
		return Array.from(rankBands).map((rank) => ({
			id: rank as FrontierMonsterHitzoneRankBand,
			text: rank,
		}));
	}

	function getAvailableMonsterStates(
		displayName: string,
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

	function getMonsterDisplayName(monster: string) {
		return findMonster(monster)?.displayName || 'Abiorugu';
	}

	// Handle ComboBox selection
	function handleMonsterSelect(event: CustomEvent) {
		const selectedMonsterId = event.detail?.selectedId;
		if (selectedMonsterId) {
			const monster = findMonsterInfo(selectedMonsterId);
			if (monster) {
				// Reset state variables
				selectedMonsterState = availableMonsterStates[0]?.id || 'Default';
				selectedRankBand = availableRankBands[0]?.id || 'Default';
			}
		}
	}

	let uniqueMonsters = getUniqueMonsters().sort(
		(a, b) =>
			(a?.displayName?.codePointAt(0) ?? 0) -
			(b?.displayName?.codePointAt(0) ?? 0),
	);

	let selectedMonsterIdFromList = $state(
		getMonsterDisplayName(page.params.monster),
	);

	/** TODO this changes depending on monster*/
	let selectedRankBand: FrontierMonsterHitzoneRankBand = $state('Default');
	let selectedHitzoneType: FrontierMonsterHitzoneType = $state('Cutting');
	let selectedMonsterState = $state('Default');

	const currentMonsters = getCurrentMonsters();

	let monster = $derived(findMonster(page.params.monster));
	let monsterID = $derived(findMonsterID(monster));

	let hitzones = $derived(
		convertHitzoneInfo(
			selectedMonsterIdFromList,
			selectedRankBand,
			selectedMonsterState,
		) || [],
	);

	let hitzoneValues = $derived(
		Object.entries(
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
		})),
	);

	let hitzoneHighestValues = $derived(
		getHitzoneValuesObject(hitzones, selectedMonsterState, selectedRankBand),
	);

	let availableRankBands = $derived(
		getAvailableRankBands(selectedMonsterIdFromList) || [
			{ id: 'Default', text: 'Default' },
		],
	);

	let availableMonsterStates = $derived(
		getAvailableMonsterStates(selectedMonsterIdFromList) || [
			{ id: 'Default', text: 'Default' },
		],
	);

	// TODO remove from monster name list ones with unused svg

	let currentSilhouette = $derived(
		silhouetteInfo.find((e) => e.displayName === selectedMonsterIdFromList)
			?.silhouette,
	);

	/**For lens*/
	let hovering = false;

	$effect(() => {
		selectedMonsterIdFromList = getMonsterDisplayName(page.params.monster);
	});
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
					{#key monster.displayName}
						<Lens {hovering}>
							<div
								in:scale={{ duration: 150 }}
								class="monster-icon"
								style:--monster-icon="monster-icon-{slugify(
									monster.displayName,
									{
										lower: true,
									},
								)}"
							>
								{#if monster.unusedComponent === true}
									<ImageDialog
										src={monster.icon}
										alt={monster.displayName}
										width={256}
										height={256}
										type="file"
									/>
								{:else}
									<!--TODO use slots instead?-->
									<ImageDialog
										src={MonsterComponent}
										alt={monster.displayName}
										componentSize={'256px'}
										background={true}
										currentMonster={monster.displayName}
										type="component"
									/>
								{/if}
							</div></Lens
						>
					{/key}
				</BestiaryMonsterGameInfo>
			</div>
			<div class="stats-lists">
				<div class="elements">
					<strong>Elements:</strong>
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
					<strong>Ailments:</strong>
					{#if monster.ailments !== undefined && monster.ailments.length > 0}
						<div class="ailments-list">
							{#each monster.ailments as ailment}
								<InlineTooltip
									text={ailment}
									tooltip="Ailment"
									iconType="component"
									icon={AilmentIcons.find((e) => e.name === ailment)?.icon}
								/>
							{/each}
						</div>
					{:else}
						None
					{/if}
				</div>
				<div class="weaknesses">
					<strong>Weaknesses:</strong>
					{#if monster.weaknesses !== undefined && monster.weaknesses.length > 0}
						<div class="weaknesses-list">
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
						</div>
					{:else}
						None
					{/if}
				</div>
				<p>
					<strong>ID:</strong>
					{monsterID} (0x{Number.parseInt(`${monsterID}`)
						.toString(16)
						.toUpperCase()
						.padStart(2, '0')})
				</p>
				<p>
					<strong>Size Type:</strong>
					{monster.type}
				</p>
				<div class="paragraph-long-02">
					<strong>Sizes:</strong>
					{#if monster.sizes && monster.sizes.length > 0}
						<UnorderedList class="spaced-list">
							{#each monster.sizes as size}
								<ListItem>{size}</ListItem>
							{/each}
						</UnorderedList>
					{:else}
						<div>Not found.</div>
					{/if}
				</div>
				<p>
					<strong>Rank:</strong>
					{monster.rank}
				</p>
				<div class="paragraph-long-02">
					<strong>Render:</strong>
					<ImageDialog
						type="file"
						src={monster.fullRender}
						alt="Monster Render"
						width={32}
						height={32}
					/>
				</div>
				<p>
					<strong>Generation:</strong>
					{monster.generation}
				</p>
			</div>
			<div class="habitats">
				<div class="paragraph-long-02">
					<strong>Habitats:</strong>
					{#if monster.habitats && monster.habitats.length > 0}
						<UnorderedList class="spaced-list">
							{#each monster.habitats as habitat}
								<ListItem>
									{#if Habitats.filter((e) => e.icon !== '').find((e) => e.name === habitat)}
										<Link href={`/hunter-notes/locations`}>
											<InlineTooltip
												iconType="file"
												tooltip={'Location'}
												text={habitat}
												gap={'.5rem'}
												iconSize={'32px'}
												icon={getHabitatIcon(habitat)}
											/>
										</Link>
									{:else}
										{habitat}
									{/if}
								</ListItem>
							{/each}
						</UnorderedList>
					{:else}
						<p>Not found.</p>
					{/if}
				</div>
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
												iconType="file"
												gap={'.5rem'}
												tooltip={relatedMonster}
												text={relatedMonster}
												iconSize={'32px'}
												icon={findMonsterInfo(relatedMonster)?.icon}
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
			<Accordion class="spaced-accordion">
				<AccordionItem>
					{#snippet title()}
						<h5 class="accordion-title">
							<span><Help /></span><span>Help</span>
						</h5>
					{/snippet}
					<div class="spaced-paragraph">
						The colors in the silhouette denotes the highest and lowest values
						for the hitzone type, while the values in bold in the table denotes
						the highest and second highest values for that column.
					</div>
					<div class="spaced-paragraph">
						The higher the hitzone value, the more damage you can deal for that
						damage type.
					</div>
					<div class="hitzone-colors-description">
						<UnorderedList class="spaced-list">
							<ListItem class="paragraph-long-02">
								<button
									type="button"
									class="dot"
									aria-label={'Color'}
									style="background-color: var(--ctp-red)"
								></button>Red: Highest values for this hitzone type.</ListItem
							>
							<ListItem class="paragraph-long-02"
								><button
									type="button"
									class="dot"
									aria-label={'Color'}
									style="background-color: var(--ctp-peach)"
								></button>Orange: Second highest values for this hitzone type.</ListItem
							>
							<ListItem class="paragraph-long-02"
								><button
									type="button"
									class="dot"
									aria-label={'Color'}
									style="background-color: var(--ctp-yellow)"
								></button>Yellow: Third highest values for this hitzone type.</ListItem
							>
							<ListItem class="paragraph-long-02"
								><button
									type="button"
									class="dot"
									aria-label={'Color'}
									style="background-color: var(--ctp-green)"
								></button>Green: Values higher than 0 for this hitzone type.</ListItem
							>
							<ListItem class="paragraph-long-02"
								><button
									type="button"
									class="dot"
									aria-label={'Color'}
									style="background-color: var(--ctp-blue)"
								></button>Blue: Values lower or equal to 0 for this hitzone
								type.</ListItem
							>
						</UnorderedList>
					</div>
					<div class="spaced-paragraph">
						To see how much damage you can deal to each hitzone, you can consult
						our <Link href="/tools/calculator/damage" icon={ToolKit}
							>Damage Calculator.</Link
						>
					</div>
				</AccordionItem></Accordion
			>

			<div class="hitzone-options">
				<ComboBox
					on:select={(e) => handleMonsterSelect(e)}
					titleText="Monster"
					placeholder="Select monster"
					bind:selectedId={selectedMonsterIdFromList}
					items={currentMonsters}
					{shouldFilterItem}
				>
					{#snippet children({ item })}
						<div class="option-item">
							<img
								width={32}
								src={getMonsterIcon(item.id)}
								alt="Monster Icon"
							/>
							<div>{item.id}</div>
						</div>
					{/snippet}
				</ComboBox>
				{#if availableMonsterStates.length > 0 && availableRankBands.length > 0}
					<Dropdown
						titleText="Rank Band"
						bind:selectedId={selectedRankBand}
						items={availableRankBands}
					/>
				{/if}
				{#if silhouetteInfo.find((e) => e.displayName === selectedMonsterIdFromList)?.silhouette}
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
					{#if selectedMonsterIdFromList && currentSilhouette}
						<div
							transition:fade={{
								duration: 150,
								easing: cubicInOut,
							}}
						>
							<MonsterSilhouette
								{currentSilhouette}
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

							{#snippet cell({ cell })}
								{#if hitzoneHighestValues[cell.key
										.charAt(0)
										.toUpperCase() + cell.key.slice(1)]?.find((e) => e === cell.value)}
									<div><strong>{cell.value}</strong></div>
								{:else}
									<p>{cell.value}</p>
								{/if}
							{/snippet}
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
		padding-right: 2rem;
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

	.overview > .stats-lists {
		display: flex;
		flex-direction: column;
		gap: 0.5rem;
		flex-wrap: wrap;
	}

	.ailments-list,
	.weaknesses-list {
		display: flex;
		flex-direction: column;
		gap: 1rem;
		padding-top: 0.5rem;
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

	.dot {
		width: 1rem;
		height: 1rem;
		margin-right: 0.25rem;
		border-color: var(--ctp-surface1);
		border-radius: 50%;
		border-style: solid;
	}

	.option-item {
		display: flex;
		gap: 0.5rem;
		align-items: center;
	}

	:global(.bx--list-box__menu-item, .bx--list-box__menu-item__option) {
		height: auto;
	}

	.accordion-title {
		display: flex;
		gap: 0.25rem;
		align-items: start;
		vertical-align: middle;
	}
</style>
