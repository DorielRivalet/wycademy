<script lang="ts">
	import PageTurn from '$lib/client/components/PageTurn.svelte';
	import SectionHeadingTopLevel from '$lib/client/components/SectionHeadingTopLevel.svelte';
	import TableOfContentsPage from '$lib/client/components/TableOfContentsPage.svelte';
	import { page } from '$app/stores';
	import OutboundLink from 'carbon-components-svelte/src/Link/OutboundLink.svelte';
</script>

<TableOfContentsPage displayTOC={false}>
	<div>
		<SectionHeadingTopLevel title={'Frontier Text Handler'} />
		<p class="spaced-paragraph">
			<strong>Owner: Houmgaor (as of 2025-03-03)</strong>
		</p>
		<div class="spaced-paragraph subtle">
			<OutboundLink
				href="https://github.com/Houmgaor/FrontierTextHandler/blob/main/LICENSE"
				>License</OutboundLink
			>
		</div>
		<div class="spaced-paragraph">
			Easy to use Python tools to import/export text data from Monster Hunter
			Frontier files.
		</div>

		<div class="spaced-paragraph">
			For more information, see the <OutboundLink
				href="https://github.com/Houmgaor/FrontierTextHandler"
				>repository.</OutboundLink
			>
		</div>
		<div class="page-turn">
			<PageTurn pageUrlPathName={$page.url.pathname} />
		</div>
	</div>
</TableOfContentsPage>

<style lang="scss">
	.page-turn {
		margin-top: 4rem;
	}
</style>
