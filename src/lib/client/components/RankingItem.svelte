<!-- RankingItem.svelte -->
<script lang="ts">
	import { createEventDispatcher } from 'svelte';
	import { fade } from 'svelte/transition';

	export let items: string[] = [];
	export let selectedIndex: number | null = null;

	const dispatch = createEventDispatcher();

	function handleItemClick(index: number) {
		if (selectedIndex === null) {
			selectedIndex = index;
		} else {
			// Swap items
			const temp = items[selectedIndex];
			items[selectedIndex] = items[index];
			items[index] = temp;

			// Reset selection
			selectedIndex = null;

			// Notify parent of change
			dispatch('change', { items });
		}
	}
</script>

<div class="ranking-container">
	{#each items as item, index (item)}
		<button
			class="ranking-item"
			class:selected={selectedIndex === index}
			on:click={() => handleItemClick(index)}
			transition:fade
		>
			<div class="item-content">
				<span class="item-number">{index + 1}.</span>
				<span class="item-text">{item}</span>
			</div>
		</button>
	{/each}
</div>

<style lang="scss">
	.ranking-container {
		display: flex;
		flex-direction: column;
		gap: 0.5rem;
		width: 100%;
		max-width: 600px;
	}

	.ranking-item {
		display: flex;
		align-items: center;
		justify-content: space-between;
		padding: 1rem;
		border: 1px solid var(--ctp-overlay0);
		background-color: var(--ctp-surface0);
		border-radius: 4px;
		cursor: pointer;
		transition: all 0.2s ease;
	}

	.ranking-item:hover {
		background-color: var(--ctp-surface0);
	}

	.ranking-item.selected {
		background-color: var(--ctp-surface1);
		border-color: var(--ctp-blue);
	}

	.item-content {
		display: flex;
		align-items: center;
		gap: 1rem;
	}

	.item-number {
		font-weight: bold;
		color: var(--ctp-subtext0);
	}
</style>
