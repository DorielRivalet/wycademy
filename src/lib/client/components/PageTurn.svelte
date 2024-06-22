<script lang="ts">
	import ClickableTile from 'carbon-components-svelte/src/Tile/ClickableTile.svelte';

	export let previous: string | null = null;
	export let previousTitle: string | null = null;
	export let next: string | null = null;
	export let nextTitle: string | null = null;
</script>

<div class="container">
	{#if previousTitle && previous}
		<div class="tile-wrapper">
			<ClickableTile href={previous} class="tile">
				<p class="previous">Previous</p>
				<p class="title">{previousTitle}</p>
			</ClickableTile>
		</div>
	{/if}
	{#if nextTitle && next}
		<div class="tile-wrapper">
			<ClickableTile href={next} class="tile">
				<p class="next">Next</p>
				<p class="title">{nextTitle}</p>
			</ClickableTile>
		</div>
	{/if}
</div>

<style lang="scss">
	.container {
		min-height: 8rem;
		display: flex;
		width: 100%;
	}

	.tile {
		display: flex;
		gap: 1rem;
		flex-direction: column;
		width: 100%; // Ensure the tile takes up the full width of its parent
	}

	.title {
		font-size: 1.5em;
		margin-bottom: 2rem;
	}

	.tile-wrapper {
		flex-grow: 1;
		width: 0; // This ensures that the wrapper does not grow beyond its content size
	}
</style>
