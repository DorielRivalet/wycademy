<script lang="ts">
	import PageTurn from '$lib/client/components/PageTurn.svelte';
	import SectionHeadingTopLevel from '$lib/client/components/SectionHeadingTopLevel.svelte';
	import HunterNotesPage from '$lib/client/components/HunterNotesPage.svelte';
	import { page } from '$app/stores';
	import UnorderedList from 'carbon-components-svelte/src/UnorderedList/UnorderedList.svelte';
	import ListItem from 'carbon-components-svelte/src/ListItem/ListItem.svelte';
	import OutboundLink from 'carbon-components-svelte/src/Link/OutboundLink.svelte';
</script>

<HunterNotesPage displayTOC={false}>
	<div>
		<SectionHeadingTopLevel title={'Websites'} />
		<UnorderedList class="spaced-list">
			<ListItem
				><OutboundLink href="https://mezehub.github.io/index.html"
					>Mezehub</OutboundLink
				>: a central source of resources for the MezeLounge (MHF-Z) private
				server. It contains various guides and resources split across sections
				for all levels of players.</ListItem
			>
			<ListItem
				><OutboundLink href="https://wiki.mhrenewal.org/index.php/Main_Page"
					>mhrenewal</OutboundLink
				>: official wiki of the Monster Hunter Renewal private server.</ListItem
			>
		</UnorderedList>
		<div class="page-turn">
			<PageTurn pageUrlPathName={$page.url.pathname} />
		</div>
	</div>
</HunterNotesPage>

<style lang="scss">
	.page-turn {
		margin-top: 4rem;
	}
</style>
