<script lang="ts">
	import { fade } from 'svelte/transition';
	import type { SearchItemCategory, SearchResult } from '$lib/search.ts';
	import Search from 'carbon-components-svelte/src/Search/Search.svelte';
	import Dropdown from 'carbon-components-svelte/src/Dropdown/Dropdown.svelte';
	import Accordion from 'carbon-components-svelte/src/Accordion/Accordion.svelte';
	import AccordionItem from 'carbon-components-svelte/src/Accordion/AccordionItem.svelte';
	import { getItemIcon } from '$lib/client/modules/frontier/items';
	import InlineTooltip from '$lib/client/components/frontier/InlineTooltip.svelte';
	import SectionHeadingTopLevel from '$lib/client/components/SectionHeadingTopLevel.svelte';
	import Logo from '$lib/client/images/logo.webp';
	import QuestionMarkIconWhite from '$lib/client/components/frontier/icon/item/Question_Mark_Icon_White.svelte';
	import { getArmorIcon } from '$lib/client/modules/frontier/armor';
	import HunterNotesPage from '$lib/client/components/HunterNotesPage.svelte';
	import PageTurn from '$lib/client/components/PageTurn.svelte';
	import { page } from '$app/stores';

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

	// TODO url query

	let scopeFilterId: SearchItemCategory = 'All';
	let results = [];
	let searchTerm = '';
	let searchDuration = 0;

	$: groupedResults = groupByCategory(results);
</script>

<HunterNotesPage displayTOC={false}>
	<div>
		<SectionHeadingTopLevel title={'Advanced Search'} />
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
					placeholder="Search"
				/>
			</div>
			<div class="results">
				{#if results.length > 0}
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
											<a href={result.slug}>
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
				{/if}
			</div>

			<div class="page-turn">
				<PageTurn pageUrlPathName={$page.url.pathname} />
			</div>
		</div>
	</div>
</HunterNotesPage>

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
		background-color: var(--ctp-surface0);
		display: flex;
	}

	.dropdown {
		min-width: 128px;
	}

	.content {
		width: 90vw;
		max-width: 100%;
		border-radius: 4px;
		overflow: hidden;
	}

	.results {
		height: 60vh;
		padding: var(--cds-spacing-06);
		background-color: var(--ctp-base);
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

	.page-turn {
		margin-top: 4rem;
	}
</style>
