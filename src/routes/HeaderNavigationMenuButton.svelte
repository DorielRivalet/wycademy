<script lang="ts">
	import Button from 'carbon-components-svelte/src/Button/Button.svelte';
	import ClickableTile from 'carbon-components-svelte/src/Tile/ClickableTile.svelte';
	import ArrowRight from 'carbon-icons-svelte/lib/ArrowRight.svelte';
	import ChevronDown from 'carbon-icons-svelte/lib/ChevronDown.svelte';
	import ChevronUp from 'carbon-icons-svelte/lib/ChevronUp.svelte';
	import { slide } from 'svelte/transition';
	import { guidesInfo } from '$lib/client/modules/routes';
	import ClickableTileImage from '$lib/client/components/ClickableTileImage.svelte';
	import { cubicInOut } from 'svelte/easing';

	export let description;
	export let path;

	let open = false;
	let selectedCategory = 0;
</script>

<li class="container">
	<Button as let:props kind="ghost" iconDescription={description}>
		<!-- svelte-ignore a11y-no-noninteractive-element-interactions -->
		<p {...props} on:click={() => (open = !open)}>
			<button class="button">
				<span>{description}</span>
				{#if open}
					<ChevronUp />
				{:else}
					<ChevronDown />
				{/if}
			</button>
		</p>
	</Button>
	{#if open}
		<div
			out:slide={{ duration: 250, easing: cubicInOut }}
			class="mega-menu"
			style="width: 100%; height: 80vh;"
		>
			<div class="mega-menu-content">
				<div class="categories">
					{#each guidesInfo as item, i}
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
					<ClickableTile on:click={() => (open = false)} href={path}>
						<div class="clickable-tile-content">
							<p>View all categories</p>
							<ArrowRight />
						</div>
					</ClickableTile>
				</div>
				<div class="selected-category-content">
					<div class="selected-category-header">
						<a
							on:click={() => (open = false)}
							class="selected-category-link"
							href={guidesInfo[selectedCategory].category.link}
						>
							<div class="category-image">
								{#if typeof guidesInfo[selectedCategory].category.image === 'string'}
									<img
										src={guidesInfo[selectedCategory].category.image}
										alt={guidesInfo[selectedCategory].category.name}
										width="64"
									/>
								{:else}
									<svelte:component
										this={guidesInfo[selectedCategory].category.image}
									/>
								{/if}
							</div>
							<h3>{guidesInfo[selectedCategory].category.name}</h3>
							<ArrowRight size={24} />
						</a>
						<p class="category-description">
							{guidesInfo[selectedCategory].category.description}
						</p>
					</div>

					<div class="grid-container">
						{#each guidesInfo[selectedCategory].pages as page}
							<button
								on:click={() => (open = false)}
								class="page-tile-container"
							>
								<ClickableTileImage
									title={page.name}
									description={page.description}
									imageSource={page.image}
									href={page.link}
								/>
							</button>
						{/each}
					</div>
				</div>
			</div>
		</div>
		<button on:click={() => (open = !open)} class="dark-background"></button>
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
		@include type.type-style('body-compact-02');
	}

	.mega-menu {
		position: absolute;
		top: 100%; /* Position it right below the header */
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
		grid-template-columns: repeat(auto-fit, minmax(16rem, 1fr));
	}
</style>
