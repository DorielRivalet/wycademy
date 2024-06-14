<script lang="ts">
	import ClickableTile from 'carbon-components-svelte/src/Tile/ClickableTile.svelte';
	export let pictogram;
	export let title;
	export let href;
</script>

<div>
	<ClickableTile {href}>
		<div class="tile-container">
			<div>
				<svelte:component this={pictogram} />
			</div>
			<div>
				<p>{title}</p>
			</div>
		</div>
	</ClickableTile>
</div>

<style lang="scss">
	.tile-container {
		padding: var(--cds-spacing-02);
		display: flex;
		flex-direction: column;
		gap: 2rem;
	}

	p {
		font-size: 1.5em;
	}
</style>
