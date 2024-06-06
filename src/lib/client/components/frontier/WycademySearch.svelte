<script lang="ts">
	import { fade } from 'svelte/transition';
	import SearchWorker from '$lib/client/workers/search?worker';
	import { onNavigate } from '$app/navigation';
	import type { SearchItemCategory, SearchResult } from '$lib/search.ts';
	import Button from 'carbon-components-svelte/src/Button/Button.svelte';
	import SearchIcon from 'carbon-icons-svelte/lib/Search.svelte';
	import Search from 'carbon-components-svelte/src/Search/Search.svelte';
	import { onDestroy } from 'svelte';
	import { page } from '$app/stores';
	import Dropdown from 'carbon-components-svelte/src/Dropdown/Dropdown.svelte';
	import Accordion from 'carbon-components-svelte/src/Accordion/Accordion.svelte';
	import AccordionItem from 'carbon-components-svelte/src/Accordion/AccordionItem.svelte';
	import { ArmorTypes, ItemIcons } from '$lib/client/modules/frontier/objects';
	import QuestionMarkIconWhite from './icon/item/Question_Mark_Icon_White.svelte';
	import InlineTooltip from './InlineTooltip.svelte';

	let search: 'idle' | 'load' | 'ready' = 'idle';
	let searchTerm = '';
	let results: SearchResult[] = [];
	let searchWorker: Worker;

	const categoryIcons: { name: SearchItemCategory; icon: any }[] = [
		{
			name: 'Monster',
			icon: ItemIcons.find((e) => e.name === 'Monster Part')?.icon,
		},
		{
			name: 'Armor',
			icon: ArmorTypes.find((e) => e.name === 'Chest')?.icon,
		},
		{
			name: 'Skill',
			icon: ItemIcons.find((e) => e.name === 'Jewel')?.icon,
		},
		{
			name: 'Sigil',
			icon: ItemIcons.find((e) => e.name === 'Sigil')?.icon,
		},
		{
			name: 'Item',
			icon: ItemIcons.find((e) => e.name === 'Ticket')?.icon,
		},
		{
			name: 'Overview',
			icon: ItemIcons.find((e) => e.name === 'Book')?.icon,
		},
		{
			name: 'Weapon',
			icon: ItemIcons.find((e) => e.name === 'Whetstone')?.icon,
		},
		{
			name: 'User',
			icon: ArmorTypes.find((e) => e.name === 'Head')?.icon,
		},
		{
			name: 'Other',
			icon: ItemIcons.find((e) => e.name === 'Question Mark')?.icon,
		},
		{
			name: 'All',
			icon: ItemIcons.find((e) => e.name === 'Mantle')?.icon,
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
			type === 'results' && (results = payload.results);
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

	let dialogElement: HTMLDialogElement;
	let showModal = false;
	let scopeFilterId = 'All';

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

<Button
	iconDescription="Search"
	icon={SearchIcon}
	kind="ghost"
	on:click={initialize}
/>

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
							{ id: 'Monster', text: 'Monster' },
							{ id: 'Armor', text: 'Armor' },
							{ id: 'Skill', text: 'Skill' },
							{ id: 'Sigil', text: 'Sigil' },
							{ id: 'Item', text: 'Item' },
							{ id: 'Overview', text: 'Overview' },
							{ id: 'Weapon', text: 'Weapon' },
							{ id: 'User', text: 'User' },
							{ id: 'Other', text: 'Other' },
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
					<p>{results.length} results found.</p>
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
											<a on:click={closeDialog} href={result.slug}>
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
				{:else}
					<p>0 results found.</p>
				{/if}
			</div>
		</div>
	{/if}
</dialog>

<style lang="scss">
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
		max-height: 60vh;
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
</style>
