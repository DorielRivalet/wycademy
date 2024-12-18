<!-- RankingItem.svelte -->
<script lang="ts">
	import { flip } from 'svelte/animate';
	import { send, receive } from '$lib/client/transitions/crossfade';

	interface Props {
		items: string[];
		change: (items: string[]) => void;
	}

	let { change, items }: Props = $props();

	// Use a local copy to avoid mutating `items` directly.
	let currentItems: string[] = $state([...items]);
	let selectedIndex: number | null = $state(null);

	function handleItemClick(index: number) {
		if (selectedIndex === null) {
			selectedIndex = index;
		} else {
			// Swap items immutably
			const updatedItems = [...currentItems];
			[updatedItems[selectedIndex], updatedItems[index]] = [
				updatedItems[index],
				updatedItems[selectedIndex],
			];

			// Reset selection and notify parent
			selectedIndex = null;
			currentItems = updatedItems;
			change(updatedItems); // Notify the parent of the change
		}
	}

	// TODO unsure to keep
	$effect(() => {
		if (items) {
			currentItems = [...items];
		}
	});
</script>

<div class="ranking-container">
	{#each currentItems as item, index (item)}
		<button
			class="ranking-item"
			class:selected={selectedIndex === index}
			onclick={() => handleItemClick(index)}
			in:receive={{ key: item }}
			out:send={{ key: item }}
			animate:flip={{ duration: 200 }}
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
		color: var(--ctp-text);
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
