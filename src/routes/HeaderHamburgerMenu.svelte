<script lang="ts">
	import Menu from 'carbon-icons-svelte/lib/Menu.svelte';
	import Button from 'carbon-components-svelte/src/Button/Button.svelte';
	import Close from 'carbon-icons-svelte/lib/Close.svelte';
	import ClickableTile from 'carbon-components-svelte/src/Tile/ClickableTile.svelte';
	import Tile from 'carbon-components-svelte/src/Tile/Tile.svelte';
	import { slide } from 'svelte/transition';
	import { cubicInOut } from 'svelte/easing';
	import {
		guidesInfo,
		supportInfo,
		toolsInfo,
	} from '$lib/client/modules/routes';
	import { ChevronLeft, ChevronRight } from 'carbon-icons-svelte';

	let open = false;
	let selectedSection: number | null = null;
	let selectedCategory: number | null = null;

	const sections = [
		{ name: 'Leaderboard', categories: [], href: '/leaderboard' },
		{ name: "Hunter's Notes", categories: guidesInfo, href: '/hunter-notes' },
		{ name: 'Arena', categories: toolsInfo, href: '/arena' },
		{ name: 'Tools', categories: toolsInfo, href: '/smithy' },
		{ name: 'Support', categories: supportInfo, href: '/support' },
		{ name: 'Notifications', categories: [], href: '/notifications' },
		{ name: 'Profile', categories: [], href: '/user-demo' },
		{
			name: 'Site Preferences',
			categories: [],
			href: '/site-preferences',
		},
		{ name: 'Events', categories: [], href: '/events' },
	];

	$: availableCategories =
		selectedSection === null ? [] : sections[selectedSection].categories;
	$: availablePages =
		selectedCategory === null || selectedSection === null
			? []
			: sections[selectedSection].categories[selectedCategory].pages;
</script>

<div class="container">
	<Button
		tooltipPosition="right"
		iconDescription={open ? 'Close Menu' : 'Open Menu'}
		on:click={() => (open = !open)}
		kind="ghost"
	>
		<span slot="icon">
			{#if open}
				<Close size={20} />
			{:else}
				<Menu size={20} />
			{/if}
		</span>
	</Button>
	{#if open}
		<div
			transition:slide={{ duration: 200, easing: cubicInOut, axis: 'x' }}
			class="hamburger-menu"
			style="width: 100%; height: 100vh;"
		>
			<div class="hamburger-menu-content">
				{#if selectedSection === null}
					<div class="sections">
						{#each sections as section, i}
							<div class="section">
								{#if section.categories.length > 0}
									<ClickableTile
										on:click={() => {
											selectedSection = i;
										}}
										><div class="clickable-tile-content">
											<p>{section.name}</p>
											<ChevronRight />
										</div></ClickableTile
									>
								{:else}
									<ClickableTile
										href={section.href}
										on:click={() => {
											open = false;
										}}
										><div class="clickable-tile-content">
											<p>{section.name}</p>
										</div></ClickableTile
									>
								{/if}
							</div>
						{/each}
					</div>
				{:else if selectedCategory === null}
					<div class="selected-section-content">
						<div class="selected-section-header">
							<div class="category">
								<ClickableTile on:click={() => (selectedSection = null)}>
									<div class="back-tile">
										<ChevronLeft />
										<p>Back</p>
									</div>
								</ClickableTile>
							</div>
							<div class="category">
								<Tile
									><p>
										<strong>{sections[selectedSection].name}</strong>
									</p></Tile
								>
							</div>
						</div>
						{#if availableCategories !== null}
							<div class="categories">
								{#each availableCategories as category, i}
									<div class="category">
										<ClickableTile on:click={() => (selectedCategory = i)}>
											<div class="clickable-tile-content">
												<p>{category.category.name}</p>
												<ChevronRight />
											</div>
										</ClickableTile>
									</div>
								{/each}
							</div>
						{/if}
					</div>
				{:else}
					<div class="selected-category-content">
						<div class="selected-category-header">
							<div class="page">
								<ClickableTile on:click={() => (selectedCategory = null)}>
									<div class="back-tile">
										<ChevronLeft />
										<p>Back</p>
									</div>
								</ClickableTile>
							</div>
							<div class="page">
								<Tile
									><p>
										<strong
											>{sections[selectedSection].categories[selectedCategory]
												.category.name}</strong
										>
									</p></Tile
								>
							</div>
						</div>
						<div class="pages">
							{#each availablePages as page}
								<div class="page">
									<ClickableTile
										on:click={() => {
											selectedCategory = null;
											open = false;
										}}
										href={page.link}
									>
										<div class="clickable-tile-content">
											<p>{page.name}</p>
										</div>
									</ClickableTile>
								</div>
							{/each}
						</div>
					</div>
				{/if}
			</div>
		</div>

		<button on:click={() => (open = !open)} class="dark-background"></button>
	{/if}
</div>

<style lang="scss">
	@use '@carbon/type' as type;

	.selected-section-header {
		display: flex;
		flex-direction: column;
		gap: 0.25rem;
	}

	.dark-background {
		position: fixed; /* Cover the entire viewport */
		top: 0vh;
		left: 0;
		width: 100%; /* Full viewport width */
		height: 100%; /* Full viewport height */
		background-color: rgba(0, 0, 0, 0.5); /* Black color with 50% opacity */
		z-index: 999; /* Ensure it's below the mega menu */
	}

	.hamburger-menu {
		position: absolute;
		top: 100%; /* Position it right below the header */
		left: 0;
		background-color: var(--ctp-surface0); /* Or any color you prefer */
		box-shadow: 0px 8px 16px 0px rgba(0, 0, 0, 0.2); /* Optional: adds shadow for depth */
		z-index: 1000; /* Ensure it's above other content */
	}

	.back-tile {
		display: flex;
		align-items: center;
		gap: 1rem;
	}

	button {
		all: unset;
	}

	.hamburger-menu-content {
		display: flex;
		height: 100%;
		flex-direction: column;
		background-color: var(--ctp-surface0); /* Or any color you prefer */
		padding-bottom: 8rem;
	}

	.sections {
		display: flex;
		height: 100%;
		flex-direction: column;
		overflow-y: auto;
		overflow-x: hidden;
		padding-bottom: 2rem;
		background-color: var(--ctp-surface0); /* Or any color you prefer */
	}

	.clickable-tile-content {
		display: flex;
		justify-content: space-between;
		align-items: center;
	}

	.section,
	.category,
	.page {
		border-bottom: 2px solid var(--ctp-surface1);
	}

	.selected-section-content,
	.selected-category-content {
		background-color: var(--ctp-surface0); /* Or any color you prefer */
		display: flex;
		flex-direction: column;
		overflow-y: auto; /* Allows vertical scrolling */
		width: 100%;
	}

	.categories,
	.pages {
		display: flex;
		flex-direction: column;
	}
</style>
