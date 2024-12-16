<script lang="ts">
	import ClickableTile from 'carbon-components-svelte/src/Tile/ClickableTile.svelte';
	interface Props {
		pictogram: any;
		title: any;
		href: any;
	}

	let { pictogram, title, href }: Props = $props();
</script>

<div>
	<ClickableTile {href}>
		{@const SvelteComponent = pictogram}
		<div class="tile-container">
			<div>
				<SvelteComponent />
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
