<script lang="ts">
	import PageTurn from '$lib/client/components/PageTurn.svelte';
	import SectionHeadingTopLevel from '$lib/client/components/SectionHeadingTopLevel.svelte';
	import TableOfContentsPage from '$lib/client/components/TableOfContentsPage.svelte';
	import { page } from '$app/stores';
	import OutboundLink from 'carbon-components-svelte/src/Link/OutboundLink.svelte';
</script>

<TableOfContentsPage displayTOC={false}>
	<div>
		<SectionHeadingTopLevel title={'Contributions & Support'} />
		<div class="spaced-paragraph">
			Wycademy is still in active development, and many core aspects are
			changing frequently. Because of this, we are holding off on formal
			contribution guidelines for now. Once the site reaches v1.0, we will
			provide clear instructions for those who want to contribute.
		</div>
		<div class="spaced-paragraph">
			If you have feedback, bug reports, or ideas, feel free to <OutboundLink
				href="https://github.com/DorielRivalet/wycademy/issues"
				>open an issue on GitHub.</OutboundLink
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
