<script lang="ts">
	import Button from 'carbon-components-svelte/src/Button/Button.svelte';
	import Favorite from 'carbon-icons-svelte/lib/Favorite.svelte';
	import FavoriteFilled from 'carbon-icons-svelte/lib/FavoriteFilled.svelte';
	import { scale } from 'svelte/transition';
	import { elasticOut } from 'svelte/easing';
	import { createEventDispatcher } from 'svelte';

	interface Props {
		runID: number;
		favorites: string[];
		username?: string;
	}

	// Use $props for reactive props in Svelte 5
	let { runID, favorites = [], username }: Props = $props();

	// Create an event dispatcher
	const dispatch = createEventDispatcher<{
		toggleFavorite: {
			runID: number;
			isFavorite: boolean;
		};
	}>();

	function toggleFavorite() {
		// Only allow toggle if username is provided
		if (!username) return;

		// Determine if the current user has already favorited this run
		const isFavorite = favorites.includes(username);

		// Dispatch an event for the parent component to handle the actual favorite logic
		dispatch('toggleFavorite', {
			runID,
			isFavorite: isFavorite,
		});
	}

	let isFavorite = $derived(username ? favorites.includes(username) : false);
</script>

<div class="favorites" title={favorites.join(', ')}>
	<Button
		iconDescription="Favorite Run"
		size="field"
		kind="ghost"
		on:click={toggleFavorite}
		disabled={!username}
	>
		{#if isFavorite}
			<div
				in:scale={{
					duration: 500,
					easing: elasticOut,
					start: 0.5,
					opacity: 0.7,
				}}
			>
				<FavoriteFilled color="var(--ctp-red)" size={24} />
			</div>
		{:else}
			<Favorite color="var(--ctp-red)" size={24} />
		{/if}
		<p style:margin-left=".5rem">
			{favorites.length}
		</p>
	</Button>
</div>

<style lang="scss">
	.favorites {
		display: flex;
		gap: 0.5rem;
		align-items: center;

		:global(.bx--btn--ghost) {
			&:disabled {
				opacity: 0.5;
				cursor: not-allowed;
			}
		}
	}
</style>
