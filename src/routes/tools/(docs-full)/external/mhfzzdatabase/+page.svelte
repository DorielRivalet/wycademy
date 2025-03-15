<script lang="ts">
	import PageTurn from '$lib/client/components/PageTurn.svelte';
	import SectionHeadingTopLevel from '$lib/client/components/SectionHeadingTopLevel.svelte';
	import TableOfContentsPage from '$lib/client/components/TableOfContentsPage.svelte';
	import { page } from '$app/stores';
	import OutboundLink from 'carbon-components-svelte/src/Link/OutboundLink.svelte';
</script>

<TableOfContentsPage displayTOC={false}>
	<div>
		<SectionHeadingTopLevel title={'MHFZZDatabase'} />
		<p class="spaced-paragraph">
			<strong>Owner: theMaelstro (as of 2025-03-03)</strong>
		</p>
		<div class="spaced-paragraph subtle">
			<OutboundLink
				href="https://github.com/theMaelstro/MHFZZDatabase/blob/main/LICENSE"
				>License</OutboundLink
			>
		</div>
		<div class="spaced-paragraph">
			A companion android app for Monster Hunter Frontier Z.
		</div>

		<div class="spaced-paragraph">
			For more information, see the <OutboundLink
				href="https://github.com/theMaelstro/MHFZZDatabase"
				>repository</OutboundLink
			> and <OutboundLink
				href="https://themaelstro.github.io/sub/companionapp.html"
				>website.</OutboundLink
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
