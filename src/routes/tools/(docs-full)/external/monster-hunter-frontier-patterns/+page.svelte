<script lang="ts">
	import PageTurn from '$lib/client/components/PageTurn.svelte';
	import SectionHeadingTopLevel from '$lib/client/components/SectionHeadingTopLevel.svelte';
	import TableOfContentsPage from '$lib/client/components/TableOfContentsPage.svelte';
	import { page } from '$app/stores';
	import OutboundLink from 'carbon-components-svelte/src/Link/OutboundLink.svelte';
</script>

<TableOfContentsPage displayTOC={false}>
	<div>
		<SectionHeadingTopLevel title={'Monster Hunter Frontier Patterns'} />
		<p class="spaced-paragraph">
			<strong>Owner: var-username (as of 2025-03-03)</strong>
		</p>
		<div class="spaced-paragraph subtle">
			<OutboundLink
				href="https://github.com/var-username/Monster-Hunter-Frontier-Patterns/blob/main/LICENSE.md"
				>License</OutboundLink
			>
		</div>
		<div class="spaced-paragraph">
			ImHex pattern files documenting the structure of data in Monster Hunter
			Frontier.
		</div>

		<div class="spaced-paragraph">
			For more information, see the <OutboundLink
				href="https://github.com/var-username/Monster-Hunter-Frontier-Patterns"
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
