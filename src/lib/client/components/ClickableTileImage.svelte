<script lang="ts">
	import ClickableTile from 'carbon-components-svelte/src/Tile/ClickableTile.svelte';
	import ArrowRight from 'carbon-icons-svelte/lib/ArrowRight.svelte';
	import { createEventDispatcher } from 'svelte';
	import { browser } from '$app/environment';

	interface Props {
		imageSource: any;
		title: any;
		description: any;
		href: any;
		rounded?: boolean;
	}

	let {
		imageSource,
		title,
		description,
		href,
		rounded = true,
	}: Props = $props();

	const dispatch = createEventDispatcher();

	function handleClick() {
		dispatch('click');
	}
</script>

{#if browser}
	<div class="container">
		<ClickableTile
			{href}
			style={rounded ? 'border-radius: 8px;' : ''}
			on:click={handleClick}
		>
			<div class="tile-content">
				<div class="left">
					<p class="title">{title}</p>
					<p class="description">{description}</p>
				</div>

				<div class="right">
					{#if typeof imageSource === 'string'}
						<img class="image" width="64" src={imageSource} alt="Thumbnail" />
					{:else}
						{@const SvelteComponent = imageSource}
						<div class="image">
							<SvelteComponent {...{ size: '64px' }} />
						</div>
					{/if}
					<div class="arrow">
						<ArrowRight />
					</div>
				</div>
			</div>
		</ClickableTile>
	</div>
{/if}

<style lang="scss">
	.tile-content {
		padding: var(--cds-spacing-02);
		display: grid;
		grid-template-columns: 3fr 1fr;
		gap: 0.5rem;
	}

	.title {
		font-size: 1.5em;
		overflow-wrap: anywhere;
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
