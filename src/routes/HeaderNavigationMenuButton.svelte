<script lang="ts">
	import { run } from 'svelte/legacy';

	import Button from 'carbon-components-svelte/src/Button/Button.svelte';
	import ClickableTile from 'carbon-components-svelte/src/Tile/ClickableTile.svelte';
	import ArrowRight from 'carbon-icons-svelte/lib/ArrowRight.svelte';
	import ChevronDown from 'carbon-icons-svelte/lib/ChevronDown.svelte';
	import ChevronUp from 'carbon-icons-svelte/lib/ChevronUp.svelte';
	import { slide } from 'svelte/transition';
	import { getRoutesSection } from '$lib/client/modules/routes';
	import ClickableTileImage from '$lib/client/components/ClickableTileImage.svelte';
	import { cubicInOut } from 'svelte/easing';
	import { createEventDispatcher } from 'svelte';

	interface Props {
		description: any;
		path: any;
		id: any;
		openMenu: null | 'guides' | 'tools' | 'support';
	}

	let {
		description,
		path,
		id,
		openMenu = $bindable()
	}: Props = $props();

	const dispatch = createEventDispatcher();

	let selectedCategory = $state(0);

	// Determine if this menu should be open based on global state
	let isOpen;
	run(() => {
		isOpen = openMenu === id;
	});

	// Updated toggleOpen function
	const toggleOpen = () => {
		if (isOpen) {
			// If the menu is already open, close it
			dispatch('toggle', { id: null }); // Dispatch event to close the menu
		} else {
			// Otherwise, proceed to open it
			dispatch('toggle', { id }); // Dispatch event to open the menu
		}
	};

	const section = getRoutesSection(path);
</script>

<li class="container">
	<Button as  kind="ghost" iconDescription={description}>
		{#snippet children({ props })}
				<!-- svelte-ignore a11y_no_noninteractive_element_interactions -->
			<p {...props} onclick={() => toggleOpen()}>
				<button class="button">
					<span>{description}</span>
					{#if isOpen}
						<ChevronUp />
					{:else}
						<ChevronDown />
					{/if}
				</button>
			</p>
					{/snippet}
		</Button>
	{#if isOpen}
		<div
			out:slide={{ duration: 250, easing: cubicInOut }}
			class="mega-menu"
			style="width: 100%; height: 80vh;"
		>
			{#if section}
				<div class="mega-menu-content">
					<div class="categories">
						{#each section as item, i}
							<div class="category">
								<ClickableTile on:click={() => (selectedCategory = i)}
									><div class="clickable-tile-content">
										{item.category.name}
									</div></ClickableTile
								>
							</div>
						{/each}
					</div>
					<div class="view-all">
						<ClickableTile on:click={() => (openMenu = null)} href={path}>
							<div class="clickable-tile-content">
								<p>View all categories</p>
								<ArrowRight />
							</div>
						</ClickableTile>
					</div>
					<div class="selected-category-content">
						<div class="selected-category-header">
							<a
								onclick={() => (openMenu = null)}
								class="selected-category-link"
								href={section[selectedCategory].category.link}
							>
								<div class="category-image">
									{#if typeof section[selectedCategory].category.image === 'string'}
										<img
											src={section[selectedCategory].category.image}
											alt={section[selectedCategory].category.name}
											width="64"
										/>
									{:else}
										{@const SvelteComponent = section[selectedCategory].category.image}
										<SvelteComponent
										/>
									{/if}
								</div>
								<h3>{section[selectedCategory].category.name}</h3>
								<ArrowRight size={24} />
							</a>
							<p class="category-description">
								{section[selectedCategory].category.description}
							</p>
						</div>

						<div class="grid-container">
							{#each section[selectedCategory].pages as page}
								<button
									onclick={() => (openMenu = null)}
									class="page-tile-container"
								>
									<ClickableTileImage
										title={page.name}
										description={page.description}
										imageSource={page.image}
										href={page.link}
										on:click={() => (openMenu = null)}
									/>
								</button>
							{/each}
						</div>
					</div>
				</div>
			{/if}
		</div>

		<button onclick={() => (isOpen = false)} class="dark-background"></button>
	{/if}
</li>

<style lang="scss">
	@use '@carbon/type' as type;

	a {
		all: unset;
	}

	a:hover {
		text-decoration: underline;
	}

	.selected-category-header {
		display: flex;
		flex-direction: column;
		gap: 0.25rem;
	}

	.selected-category-link {
		display: flex;
		align-items: center;
		gap: 0.5rem;
	}

	.category-image {
		height: 64px;
		width: 64px;
	}

	.category-description {
		color: var(--ctp-subtext0);
	}

	.button {
		display: flex;
		flex-direction: row;
		color: var(--ctp-text);
		align-items: center;
		gap: 0.5rem;
		@include type.type-style('body-compact-01');
	}

	.mega-menu {
		position: absolute;
		top: 3rem; /* Position it right below the header */
		left: 0;
		background-color: var(--ctp-surface0); /* Or any color you prefer */
		box-shadow: 0px 8px 16px 0px rgba(0, 0, 0, 0.2); /* Optional: adds shadow for depth */
		z-index: 1000; /* Ensure it's above other content */
	}

	button {
		all: unset;
	}

	.dark-background {
		position: fixed; /* Cover the entire viewport */
		top: 15vh;
		left: 0;
		width: 100%; /* Full viewport width */
		height: 100%; /* Full viewport height */
		background-color: rgba(0, 0, 0, 0.5); /* Black color with 50% opacity */
		z-index: 999; /* Ensure it's below the mega menu */
	}

	.mega-menu-content {
		display: grid;
		height: 100%;
		grid-template-columns: 1fr 7fr;
		grid-template-areas:
			'categories selected-category-content'
			'view-all selected-category-content';
		grid-template-rows: 1fr auto;
		padding-left: 1rem;
		background-color: var(--ctp-surface0); /* Or any color you prefer */
	}

	.categories {
		grid-area: categories;
		padding-top: 1rem;
		border-right: 1px solid var(--ctp-surface1);
		overflow-y: auto;
		overflow-x: hidden;
		background-color: var(--ctp-surface0); /* Or any color you prefer */
	}

	.view-all {
		grid-area: view-all;
		border-top: 1px solid var(--ctp-surface1);
		border-right: 1px solid var(--ctp-surface1);
	}

	.clickable-tile-content {
		display: flex;
		gap: 0.5rem;
		align-items: center;
	}

	.selected-category-content {
		background-color: var(--ctp-mantle); /* Or any color you prefer */
		grid-area: selected-category-content;
		padding: 2rem;
		display: flex;
		flex-direction: column;
		gap: 2rem;
		overflow-y: auto; /* Allows vertical scrolling */

		width: 100%;
	}

	.grid-container {
		display: grid;
		gap: 1rem;
		justify-content: flex-start;
		grid-template-columns: repeat(auto-fit, minmax(16rem, 24rem));
	}
</style>
