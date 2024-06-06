<script lang="ts">
	import { fade } from 'svelte/transition';
	import SearchWorker from '$lib/client/workers/search?worker';
	import { onNavigate } from '$app/navigation';
	import type { SearchResult } from '$lib/search.ts';
	import Button from 'carbon-components-svelte/src/Button/Button.svelte';
	import SearchIcon from 'carbon-icons-svelte/lib/Search.svelte';
	import Search from 'carbon-components-svelte/src/Search/Search.svelte';
	import SkeletonText from 'carbon-components-svelte/src/SkeletonText/SkeletonText.svelte';
	import { onDestroy } from 'svelte';
	import { page } from '$app/stores';

	let search: 'idle' | 'load' | 'ready' = 'idle';
	let searchTerm = '';
	let results: SearchResult[] = [];
	let searchWorker: Worker;

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
		searchWorker = new SearchWorker();
		searchWorker.addEventListener('message', (e) => {
			const { type, payload } = e.data;
			type === 'ready' && (search = 'ready');
			type === 'results' && (results = payload.results);
		});

		searchWorker.postMessage({ type: 'load' });
	}

	onNavigate(() => {
		closeDialog();
	});

	$: if (search === 'ready') {
		searchWorker.postMessage({ type: 'search', payload: { searchTerm } });
	}

	$: if (searchTerm && !showModal) {
		searchTerm = '';
	}

	let dialogElement: HTMLDialogElement;
	let showModal = false;

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

	$: dialogClass = showModal ? 'dialog open' : 'dialog';
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

<dialog bind:this={dialogElement} class={dialogClass}>
	{#if showModal}
		<div class="content" in:fade={{ duration: 150 }}>
			<Search
				expanded
				bind:value={searchTerm}
				autocomplete="off"
				spellcheck={false}
				on:clear={closeDialog}
			/>
			<div class="results">
				{#if search === 'load'}
					<ul>
						<li>
							<SkeletonText heading />
							<SkeletonText paragraph />
						</li>
						<li>
							<SkeletonText heading />
							<SkeletonText paragraph />
						</li>
						<li>
							<SkeletonText heading />
							<SkeletonText paragraph />
						</li>
					</ul>
				{:else if results.length > 0}
					<ul>
						{#each results as result}
							{#if result.content.length > 0}
								<li>
									{#if $page.url.pathname.startsWith('/bestiary/')}
										<a
											data-sveltekit-reload
											on:click={closeDialog}
											href={result.slug}
										>
											{@html result.title}
										</a>
									{:else}
										<a on:click={closeDialog} href={result.slug}>
											{@html result.title}
										</a>
									{/if}
									<ol>
										{#each result.content as content}
											<li>{@html content}</li>
										{/each}
									</ol>
								</li>
							{/if}
						{/each}
					</ul>
				{:else}
					<p>No results found.</p>
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

		/*
		& mark {
			background-color: var(--ctp-red);
		}
		*/
	}
</style>
