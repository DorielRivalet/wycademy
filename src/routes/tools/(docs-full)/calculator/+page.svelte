<script lang="ts">
	import { page } from '$app/stores';
	import ClickableTileImage from '$lib/client/components/ClickableTileImage.svelte';
	import PageTurn from '$lib/client/components/PageTurn.svelte';
	import SectionHeadingTopLevel from '$lib/client/components/SectionHeadingTopLevel.svelte';
	import { toolsInfo } from '$lib/client/modules/routes';
	const pages = toolsInfo.find((e) => e.category.name === 'Calculator')?.pages;
</script>

<div class="top-level-section">
	<SectionHeadingTopLevel title={'Calculators'} />
	<div class="spaced-paragraph">
		{toolsInfo.find((e) => e.category.name === 'Calculator')?.category
			.description}
	</div>
	<div class="container-tiles">
		{#if pages}
			{#each pages as page}
				<ClickableTileImage
					title={page.name}
					description={page.description}
					imageSource={page.image}
					href={page.link}
				/>
			{/each}
		{/if}
	</div>
	<PageTurn pageUrlPathName={$page.url.pathname} />
</div>

<style lang="scss">
	.container-tiles {
		display: grid;
		gap: 0.5rem;
		grid-template-columns: repeat(auto-fill, minmax(256px, 2fr));
		margin-bottom: 4rem;
	}

	.top-level-section {
		max-width: 1080px;
	}
</style>
