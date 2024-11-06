<script lang="ts">
	import ClickableTile from 'carbon-components-svelte/src/Tile/ClickableTile.svelte';

	export let imageSource: string;
	export let title: string;
	export let description: string;
	export let href: string;
</script>

<div class="container">
	<ClickableTile {href} style="border-radius: 8px; height: 100%">
		<div class="contents">
			<p class="title">{title}</p>
			<p class="description">{description}</p>
			<img class="image" src={imageSource} alt="Solution Preview" />
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
