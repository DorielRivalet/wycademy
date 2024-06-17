<script lang="ts">
	import ClickableTile from 'carbon-components-svelte/src/Tile/ClickableTile.svelte';
	import ArrowRight from 'carbon-icons-svelte/lib/ArrowRight.svelte';

	export let imageSource;
	export let title;
	export let description;
	export let href;
	export let rounded = true;
</script>

<div class="container">
	<ClickableTile {href} style={rounded ? 'border-radius: 8px;' : ''}>
		<div class="tile-content">
			<div class="left">
				<p class="title">{title}</p>
				<p class="description">{description}</p>
			</div>

			<div class="right">
				{#if typeof imageSource === 'string'}
					<img class="image" width="64" src={imageSource} alt="Thumbnail" />
				{:else}
					<div class="image">
						<svelte:component this={imageSource} {...{ size: '64px' }} />
					</div>
				{/if}
				<div class="arrow">
					<ArrowRight />
				</div>
			</div>
		</div>
	</ClickableTile>
</div>

<style lang="scss">
	.tile-content {
		padding: var(--cds-spacing-02);
		display: grid;
		grid-template-columns: 3fr 1fr;
		gap: 0.5rem;
	}

	.title {
		font-size: 1.5em;
	}

	.description {
		font-size: 1em;
	}

	.left {
		display: flex;
		gap: 1rem;
		flex-direction: column;
	}

	.right {
		display: flex;
		gap: 1rem;
		flex-direction: column;
		justify-content: space-between;
		align-items: end;
	}

	.image {
		background-color: var(--ctp-surface1);
		border-radius: 8px;
		padding: 0.25rem;
	}
</style>
