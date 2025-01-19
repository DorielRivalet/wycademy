<script lang="ts">
	import SearchWorker from '$lib/client/workers/search?worker';
	import type { SearchItemCategory, SearchResult } from '$lib/search.ts';
	import Button from 'carbon-components-svelte/src/Button/Button.svelte';
	import SearchIcon from 'carbon-icons-svelte/lib/Search.svelte';
	import Search from 'carbon-components-svelte/src/Search/Search.svelte';
	import Dropdown from 'carbon-components-svelte/src/Dropdown/Dropdown.svelte';
	import Accordion from 'carbon-components-svelte/src/Accordion/Accordion.svelte';
	import AccordionItem from 'carbon-components-svelte/src/Accordion/AccordionItem.svelte';
	import { getArmorIcon } from '$lib/client/modules/frontier/armor';
	import QuestionMarkIconWhite from './icon/item/Question_Mark_Icon_White.svelte';
	import InlineTooltip from './InlineTooltip.svelte';
	import Link from 'carbon-components-svelte/src/Link/Link.svelte';
	import RecentlyViewed from 'carbon-icons-svelte/lib/RecentlyViewed.svelte';
	import TrashCan from 'carbon-icons-svelte/lib/TrashCan.svelte';
	import { browser } from '$app/environment';
	import { getItemIcon } from '$lib/client/modules/frontier/items';
	import Modal from 'carbon-components-svelte/src/Modal/Modal.svelte';
	import { getMonsterIcon } from '$lib/client/modules/frontier/monsters';

	// Function to group results by category
	function groupByCategory(results: SearchResult[]) {
		return results.reduce((acc, result) => {
			const key = result.category;
			if (!acc[key]) {
				acc[key] = [];
			}
			acc[key].push(result);
			return acc;
		}, {});
	}

	function getCategoryIcon(category: SearchItemCategory) {
		return (
			categoryIcons.find((e) => e.name === category)?.icon ??
			QuestionMarkIconWhite
		);
	}

	function deleteSearchTerm(title: string, slug: string) {
		if (!browser) return;

		// Filter out the search term to be deleted
		const updatedSearches = (recentSearches || []).filter(
			(search) => !(search.title === title && search.slug === slug),
		);

		// Update localStorage with the filtered array
		window.localStorage.setItem(
			'__recent-searches',
			JSON.stringify(updatedSearches),
		);

		// Update the variable directly to reflect changes
		recentSearches = updatedSearches;
	}

	function deleteAllSearchTerms() {
		if (!browser) return;

		const updatedSearches = [];
		window.localStorage.setItem(
			'__recent-searches',
			JSON.stringify(updatedSearches),
		);
		recentSearches = updatedSearches;
	}

	function initialize() {
		if (showModal) {
			closeDialog();
		} else {
			openDialog();
		}

		if (search === 'ready') {
			return;
		}

		search = 'load';
		// create worker
		searchWorker = new SearchWorker();
		// listen for messages
		searchWorker.addEventListener('message', (e) => {
			const { type, payload } = e.data;
			type === 'ready' && (search = 'ready');
			type === 'results' &&
				(results = payload.results) &&
				(searchDuration = payload.searchDuration);
		});
		// initialize when the component mounts
		searchWorker.postMessage({ type: 'load' });
	}

	function openDialog() {
		showModal = true;
	}

	function closeDialog() {
		showModal = false;
	}

	function saveSearchTerm(title: string, slug: string) {
		if (!browser) return;

		const updatedSearches = [...(recentSearches || []), { title, slug }];
		window.localStorage.setItem(
			'__recent-searches',
			JSON.stringify(updatedSearches),
		);

		// Update the variable directly to reflect changes
		recentSearches = updatedSearches;
	}

	const EASTER_EGG_SEARCH = 'flappy rathalos';

	let search: 'idle' | 'load' | 'ready' = $state('idle');
	let searchTerm = $state('');
	let results: SearchResult[] = $state([]);
	let searchWorker: Worker = $state();
	let searchDuration = $state(0);

	const categoryIcons: { name: SearchItemCategory; icon: any }[] = [
		{
			name: 'Monster',
			icon: getItemIcon('Monster Part'),
		},
		{
			name: 'Armor',
			icon: getArmorIcon('Chest'),
		},
		{
			name: 'Skill',
			icon: getItemIcon('Jewel'),
		},
		{
			name: 'Sigil',
			icon: getItemIcon('Sigil'),
		},
		{
			name: 'Item',
			icon: getItemIcon('Ticket'),
		},
		{
			name: 'Tool',
			icon: getItemIcon('Trap Tool'),
		},
		{
			name: 'Guide',
			icon: getItemIcon('Book'),
		},
		{
			name: 'Event',
			icon: getItemIcon('Mantle'),
		},
		{
			name: 'Support',
			icon: getItemIcon('Map'),
		},
		{
			name: 'Weapon',
			icon: getItemIcon('Whetstone'),
		},
		{
			name: 'User',
			icon: getArmorIcon('Head'),
		},
		{
			name: 'Other',
			icon: getItemIcon('Question Mark'),
		},
		{
			name: 'All',
			icon: getItemIcon('Mantle'),
		},
	];

	let recentSearches = $state(
		!browser
			? []
			: JSON.parse(window.localStorage.getItem('__recent-searches') ?? '[]'),
	);

	let recentSearchesJSON = $derived(recentSearches);
	let showModal = $state(false);
	let scopeFilterId: SearchItemCategory = $state('All');

	$effect(() => {
		if (search === 'ready') {
			// update results
			searchWorker.postMessage({
				type: 'search',
				payload: { searchTerm, scopeFilterId },
			});
		}
	});

	// reset search term on close
	$effect(() => {
		if (searchTerm && !showModal) {
			searchTerm = '';
		}
	});

	// Call the function to get grouped results
	let groupedResults = $derived(groupByCategory(results));
</script>

<div class="button-container">
	<Button iconDescription="Search" kind="ghost" on:click={initialize}>
		{#snippet icon()}
			<span>
				<SearchIcon size={20} color="var(--ctp-text)" />
			</span>
		{/snippet}
	</Button>
</div>

<Modal passiveModal primaryButtonDisabled bind:open={showModal} size="sm">
	{#snippet heading()}
		<div class="search-container">
			<div class="dropdown">
				<Dropdown
					hideLabel
					type="default"
					size="xl"
					bind:selectedId={scopeFilterId}
					items={[
						{ id: 'All', text: 'All' },
						{ id: 'Armor', text: 'Armor' },
						{ id: 'Guide', text: 'Guide' },
						{ id: 'Item', text: 'Item' },
						{ id: 'Monster', text: 'Monster' },
						{ id: 'Sigil', text: 'Sigil' },
						{ id: 'Skill', text: 'Skill' },
						{ id: 'Support', text: 'Support' },
						{ id: 'Tool', text: 'Tool' },
						{ id: 'User', text: 'User' },
						{ id: 'Weapon', text: 'Weapon' },
					]}
				/>
			</div>
			<Search
				light={true}
				expanded
				bind:value={searchTerm}
				autocomplete="off"
				spellcheck={false}
				on:clear={closeDialog}
				placeholder="Search... (Esc to Exit)"
			/>
		</div>
	{/snippet}

	<div class="results">
		{#if search === 'load'}
			<Accordion skeleton />
		{:else if EASTER_EGG_SEARCH === searchTerm.toLowerCase()}
			<!-- TODO-->
			<a href="/flappy-rathalos">
				<img width="100%" alt="Rathalos" src={getMonsterIcon('Rathalos')} />
			</a>
		{:else if results.length > 0}
			<p>
				{results.length} results found ({searchDuration / 1000} seconds).
			</p>
			<Accordion>
				{#each Object.entries(groupedResults) as [category, results], i}
					<AccordionItem open={i === 0}>
						{#snippet title()}
							<InlineTooltip
								tooltip={category}
								iconType="component"
								text={`${category} (${results.length})`}
								icon={getCategoryIcon(category)}
							/>
						{/snippet}
						<hr class="category-separator" />
						<ol>
							{#each results as result}
								<li>
									<a
										onclick={(e) => {
											saveSearchTerm(result.originalTitle, result.slug);
											closeDialog();
										}}
										href={result.slug}
									>
										{@html result.title}
									</a>
									{#if result.content.length > 0}
										<ul class="spaced-list">
											{#each result.content as content}
												<li>{@html content}</li>
											{/each}
										</ul>
									{/if}
								</li>
							{/each}
						</ol>
					</AccordionItem>
				{/each}
			</Accordion>
		{:else if recentSearchesJSON.length > 0}
			<div class="delete-all-button">
				<Button
					class="spaced-button"
					iconDescription="Delete"
					kind="danger-tertiary"
					icon={TrashCan}
					on:click={deleteAllSearchTerms}>Delete all recent searches</Button
				>
			</div>
			{#each [...recentSearchesJSON].reverse() as recentSearch}
				<div class="recent-search-container">
					<div class="recent-search-info">
						<div>
							<RecentlyViewed />
						</div>
						<div>
							<Link href={recentSearch.slug}>{recentSearch.title}</Link>
						</div>
					</div>
					<div>
						<Button
							iconDescription="Delete"
							kind="ghost"
							icon={TrashCan}
							on:click={(e) =>
								deleteSearchTerm(recentSearch.title, recentSearch.slug)}
						/>
					</div>
				</div>
			{/each}
		{/if}
	</div>
</Modal>

<style lang="scss">
	.delete-all-button {
		text-align: end;
	}

	.recent-search-container {
		display: flex;
		flex-direction: row;
		gap: 1rem;
		align-items: center;
		justify-content: space-between;
	}

	.recent-search-info {
		display: flex;
		flex-direction: row;
		gap: 1rem;
		align-items: center;
	}

	.search-container {
		display: flex;
	}

	.dropdown {
		min-width: 128px;
		position: relative;
	}

	.results {
		height: 60vh;
		padding: var(--cds-spacing-06);
		background-color: var(--ctp-surface0);
		scrollbar-width: thin;
		color: var(--ctp-text);

		& ol {
			margin-block-start: var(--cds-spacing-03);
			list-style-type: decimal;
			padding-left: 1rem;
		}

		& ul {
			list-style-type: disc;
		}

		& li:not(:last-child) {
			margin-block-end: var(--cds-spacing-06);
			padding-block-end: var(--cds-spacing-06);
			border-bottom: 1px solid var(--ctp-overlay0);
		}

		& a {
			display: block;
			font-size: 24px;
			color: var(--ctp-blue);

			&:hover {
				color: var(--ctp-sky);
			}
		}

		& p {
			margin-bottom: 2rem;
		}

		/*
		& mark {
			background-color: var(--ctp-red);
		}
		*/
	}

	.category-separator {
		border-top: 4px solid var(--ctp-overlay0);
	}

	.button-container {
		height: 100%;
		width: 100%;

		span {
			width: 20px;
			height: 20px;
		}
	}
</style>
