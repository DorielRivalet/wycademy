<script lang="ts">
	import PageTurn from '$lib/client/components/PageTurn.svelte';
	import SectionHeadingTopLevel from '$lib/client/components/SectionHeadingTopLevel.svelte';
	import TableOfContentsPage from '$lib/client/components/TableOfContentsPage.svelte';
	import { page } from '$app/stores';
</script>

<TableOfContentsPage displayTOC={false}>
	<div>
		<SectionHeadingTopLevel title={'Burst'} />
		<div>
			<div class="paragraph-long-02">
				Burst monsters are natural evolutions of the Gou monsters. These are
				required to upgrade Gou armors and weapons beyond G Supremacy level.
			</div>

			<div class="page-turn">
				<PageTurn pageUrlPathName={$page.url.pathname} />
			</div>
		</div>
	</div></TableOfContentsPage
>

<style lang="scss">
	.page-turn {
		margin-top: 4rem;
	}

	.data-table-title {
		display: flex;
		gap: 2rem;
		align-items: center;
	}

	.origins-table {
		margin-top: 2rem;
		display: flex;
		flex-wrap: wrap;
		overflow-x: auto;
		max-width: 800px;
	}

	.toolbar {
		padding: 1rem;
		display: flex;
		align-items: center;
		gap: 1rem;
		flex-grow: 1;
		flex-shrink: 1;
	}

	.table-with-pagination {
		display: flex;
		flex-direction: column;
	}
</style>
