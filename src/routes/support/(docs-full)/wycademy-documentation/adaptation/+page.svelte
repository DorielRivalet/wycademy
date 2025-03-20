<script lang="ts">
	import PageTurn from '$lib/client/components/PageTurn.svelte';
	import SectionHeadingTopLevel from '$lib/client/components/SectionHeadingTopLevel.svelte';
	import TableOfContentsPage from '$lib/client/components/TableOfContentsPage.svelte';
	import { page } from '$app/stores';
	import UnorderedList from 'carbon-components-svelte/src/UnorderedList/UnorderedList.svelte';
	import ListItem from 'carbon-components-svelte/src/ListItem/ListItem.svelte';
	import SectionHeading from '$lib/client/components/SectionHeading.svelte';
	import OutboundLink from 'carbon-components-svelte/src/Link/OutboundLink.svelte';
	import OrderedList from 'carbon-components-svelte/src/OrderedList/OrderedList.svelte';
</script>

<TableOfContentsPage displayTOC={false}>
	<div>
		<SectionHeadingTopLevel title={'Adaptation'} />
		<section>
			<SectionHeading level={2} title="Using Wycademy for Your Own Community" />
			<div>
				<p class="spaced-paragraph">
					Wycademy was designed to serve the Monster Hunter Frontier community,
					but its structure can easily be <strong
						>adapted for different games or topics.</strong
					>
					Because it's open-source under the MIT license, you are free to:
				</p>
				<UnorderedList class="spaced-list">
					<ListItem
						><p>
							<strong>Modify the site's content</strong> to fit another game or subject.
						</p></ListItem
					>
					<ListItem
						><p>
							<strong>Use the leaderboard and knowledge base structure</strong> for
							your own community.
						</p></ListItem
					>
					<ListItem
						><p>
							<strong>Leverage the existing tools</strong> to build a similar resource
							for a different purpose.
						</p></ListItem
					>
				</UnorderedList>
				<p class="spaced-paragraph">
					If you want to set up your own version of Wycademy:
				</p>
				<OrderedList class="spaced-list">
					<ListItem
						><p><strong>Fork the repository</strong> from GitHub.</p></ListItem
					>
					<ListItem
						><p>
							<strong>Modify the branding, content, and categories</strong> to suit
							your needs.
						</p></ListItem
					>
					<ListItem
						><p>
							Deploy your version using a similar setup (e.g., Supabase,
							SvelteKit, Vercel).
						</p></ListItem
					>
				</OrderedList>
				<div class="spaced-paragraph">
					Many of Wycademy’s existing documents are already useful outside of
					Monster Hunter, so even if you don’t fork the project, you might still
					find valuable information to apply elsewhere. See our <OutboundLink
						href="https://github.com/DorielRivalet/wycademy/blob/main/docs"
						>docs folder</OutboundLink
					>.
				</div>
			</div>
		</section>
		<div class="spaced-paragraph"></div>
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
