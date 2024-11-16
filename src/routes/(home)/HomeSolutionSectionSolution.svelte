<script lang="ts">
	import Lens from '$lib/client/components/Lens.svelte';
	import ClickableTile from 'carbon-components-svelte/src/Tile/ClickableTile.svelte';

	interface Props {
		imageSource: string;
		title: string;
		description: string;
		href: string;
	}

	let {
		imageSource,
		title,
		description,
		href
	}: Props = $props();

	let hovering = false;
</script>

<div class="container">
	<ClickableTile {href} style="border-radius: 8px; height: 100%">
		<div class="contents">
			<p class="title">{title}</p>
			<p class="description">{description}</p>
			<Lens {hovering}>
				<img class="image" src={imageSource} alt="Solution Preview" /></Lens
			>
		</div>
	</ClickableTile>
</div>

<style lang="scss">
	.container {
		height: 100%;
	}

	.contents {
		padding: 1rem;
		display: flex;
		flex-direction: column;
		gap: 1rem;
	}

	.title {
		color: var(--ctp-green);
		font-weight: bold;
	}

	.image {
		width: 100%;
		height: auto;
		object-fit: cover;
	}
</style>
