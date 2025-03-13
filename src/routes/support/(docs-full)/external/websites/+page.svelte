<script lang="ts">
	import PageTurn from '$lib/client/components/PageTurn.svelte';
	import SectionHeadingTopLevel from '$lib/client/components/SectionHeadingTopLevel.svelte';
	import TableOfContentsPage from '$lib/client/components/TableOfContentsPage.svelte';
	import { page } from '$app/stores';
	import UnorderedList from 'carbon-components-svelte/src/UnorderedList/UnorderedList.svelte';
	import ListItem from 'carbon-components-svelte/src/ListItem/ListItem.svelte';
	import OutboundLink from 'carbon-components-svelte/src/Link/OutboundLink.svelte';
	import SectionHeading from '$lib/client/components/SectionHeading.svelte';
	import InlineNotification from 'carbon-components-svelte/src/Notification/InlineNotification.svelte';
</script>

<TableOfContentsPage displayTOC={false}>
	<div>
		<SectionHeadingTopLevel title={'Websites'} />

		<InlineNotification
			lowContrast
			hideCloseButton
			kind="info"
			title="Info:"
			subtitle="If you wish to add or remove from this list, see our GitHub issue tracker
			and select the External Tools template."
		/>
		<p class="spaced-paragraph">
			<strong
				>If your website represents a private server, we ask the following of
				your community:</strong
			>
		</p>
		<UnorderedList class="spaced-list">
			<ListItem><p>Avoid excessive pay-to-win advantages.</p></ListItem>
			<ListItem><p>Foster a non-toxic environment.</p></ListItem>
		</UnorderedList>
		<p class="spaced-paragraph">
			We understand that managing communities is challenging, so these are
			strong recommendations rather than strict requirements. However, we
			reserve the right to curate and update this list as needed to maintain its
			integrity.
		</p>
		<section>
			<SectionHeading level={2} title="Private Servers" />
			<div>
				<UnorderedList class="spaced-list">
					<ListItem
						><p>
							<OutboundLink href="https://mezehub.github.io/index.html"
								>Mezehub</OutboundLink
							>: a central source of resources for the MezeLounge (MHF-Z)
							private server. It contains various guides and resources split
							across sections for all levels of players.
						</p></ListItem
					>
				</UnorderedList>
			</div>
		</section>

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
