<script lang="ts">
	import ClickableTile from 'carbon-components-svelte/src/Tile/ClickableTile.svelte';
	import {
		createEventDispatcher,
		SvelteComponent,
		type ComponentType,
	} from 'svelte';

	export let name: string;
	export let description: string;
	export let image: string | ComponentType<SvelteComponent> | undefined;
	export let link: string;
	export let rounded = true;

	const dispatch = createEventDispatcher();

	function handleClick() {
		dispatch('click');
	}
</script>

<div class="container">
	<ClickableTile
		href={link}
		style={rounded ? 'border-radius: 8px;' : ''}
		on:click={handleClick}
	>
		<div class="tile-content">
			<div class="left">
				{#if typeof image === 'string'}
					<img class="image" width="64" src={image} alt="Thumbnail" />
				{:else}
					<div class="image">
						<svelte:component this={image} {...{ size: '64px' }} />
					</div>
				{/if}
				<p class="title">{name}</p>
			</div>
			<div class="right">
				<p class="description">{description}</p>
			</div>
		</div>
	</ClickableTile>
</div>

<style lang="scss">
	.tile-content {
		padding: var(--cds-spacing-02);
		display: grid;
		grid-template-rows: 1fr 3fr;
		width: 256px;
		height: 160px;
		gap: 0.5rem;
	}

	.left {
		display: flex;
		gap: 1rem;
		flex-direction: row;
		align-items: center;
	}

	.right {
		display: flex;
		text-overflow: ellipsis;
	}

	.image {
		background-color: var(--ctp-surface1);
		border-radius: 8px;
		padding: 0.25rem;
	}

	.title {
		font-size: 1.5em;
		overflow-wrap: anywhere;
	}

	.description {
		font-size: 1em;
	}
</style>
