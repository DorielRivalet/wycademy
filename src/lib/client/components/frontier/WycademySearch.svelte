<script lang="ts">
	import { fade } from 'svelte/transition';
	import SearchWorker from '$lib/client/workers/search?worker';
	import { onNavigate } from '$app/navigation';
	import type { SearchItemCategory, SearchResult } from '$lib/search.ts';
	import Button from 'carbon-components-svelte/src/Button/Button.svelte';
	import SearchIcon from 'carbon-icons-svelte/lib/Search.svelte';
	import Search from 'carbon-components-svelte/src/Search/Search.svelte';
	import { onDestroy } from 'svelte';
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
	import Logo from '$lib/client/images/logo.webp';

	let search: 'idle' | 'load' | 'ready' = 'idle';
	let searchTerm = '';
	let results: SearchResult[] = [];
	let searchWorker: Worker;
	let searchDuration = 0;

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
			icon: Logo,
		},
		{
			name: 'Support',
			icon: Logo,
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
		dialogElement.showModal();
	}

	function closeDialog() {
		showModal = false;
		dialogElement.close();
	}

	onDestroy(() => {
		if (dialogElement && showModal) {
			closeDialog();
		}
	});

	onNavigate(() => {
		closeDialog();
	});

	let recentSearches = !browser
		? []
		: JSON.parse(window.localStorage.getItem('__recent-searches') ?? '[]');

	$: recentSearchesJSON = recentSearches;

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

	let dialogElement: HTMLDialogElement;
	let showModal = false;
	let scopeFilterId: SearchItemCategory = 'All';

	$: if (search === 'ready') {
		// update results
		searchWorker.postMessage({
			type: 'search',
			payload: { searchTerm, scopeFilterId },
		});
	}

	$: if (searchTerm && !showModal) {
		searchTerm = '';
	}

	$: dialogClass = showModal ? 'dialog open' : 'dialog';

	// Call the function to get grouped results
	$: groupedResults = groupByCategory(results);
</script>

{#if showModal}
	<div class="overlay" in:fade={{ duration: 150 }}></div>
{/if}

<div class="button-container">
	<Button iconDescription="Search" kind="ghost" on:click={initialize}>
		<span slot="icon">
			<SearchIcon size={20} color="var(--ctp-text)" />
		</span>
	</Button>
</div>

<dialog bind:this={dialogElement} class={dialogClass} on:close={closeDialog}>
	{#if showModal}
		<div class="content" in:fade={{ duration: 150 }}>
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
					expanded
					bind:value={searchTerm}
					autocomplete="off"
					spellcheck={false}
					on:clear={closeDialog}
					placeholder="Search... (Esc/Clear button to Exit)"
				/>
			</div>
			<div class="results">
				{#if search === 'load'}
					<Accordion skeleton />
				{:else if results.length > 0}
					<p>
						{results.length} results found ({searchDuration / 1000} seconds).
					</p>
					<Accordion>
						{#each Object.entries(groupedResults) as [category, results], i}
							<AccordionItem open={i === 0}>
								<svelte:fragment slot="title">
									<InlineTooltip
										tooltip={category}
										iconType="component"
										text={`${category} (${results.length})`}
										icon={getCategoryIcon(category)}
									/>
								</svelte:fragment>
								<hr class="category-separator" />
								<ol>
									{#each results as result}
										<li>
											<a
												on:click={(e) => {
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
		</div>
	{/if}
</dialog>

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

	dialog {
		border-color: transparent;
		background: none;
		padding: 0;
	}

	.search-container {
		background-color: var(--ctp-surface0);
		display: flex;
	}

	.dropdown {
		min-width: 128px;
		position: relative;
	}

	.overlay {
		position: fixed;
		inset: 0px;
		background-color: hsl(0 0% 0% / 50%);
		backdrop-filter: blur(4px);
		z-index: 30;
	}

	.content {
		width: 90vw;
		max-width: 600px;
		position: fixed;
		left: 50%;
		top: 20%;
		translate: -50% -0%;
		border-radius: 4px;
		box-shadow: 0px 0px 20px hsl(0 0% 0% / 40%);
		overflow: hidden;
		z-index: 40;
	}

	.results {
		height: 60vh;
		padding: var(--cds-spacing-06);
		background-color: var(--ctp-surface0);
		overflow-y: auto;
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
	.accordion-item-title {
		display: flex;
		align-items: center;
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
