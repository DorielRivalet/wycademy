<script lang="ts">
	import PageTurn from '$lib/client/components/PageTurn.svelte';
	import SectionHeadingTopLevel from '$lib/client/components/SectionHeadingTopLevel.svelte';
	import TableOfContentsPage from '$lib/client/components/TableOfContentsPage.svelte';
	import { page } from '$app/stores';
	import SectionHeading from '$lib/client/components/SectionHeading.svelte';
	import InlineNotification from 'carbon-components-svelte/src/Notification/InlineNotification.svelte';
	import UnorderedList from 'carbon-components-svelte/src/UnorderedList/UnorderedList.svelte';
	import ListItem from 'carbon-components-svelte/src/ListItem/ListItem.svelte';
</script>

<TableOfContentsPage displayTOC={false}>
	<div>
		<SectionHeadingTopLevel title={'Support My Work'} />
		<div class="spaced-paragraph">
			Wycademy is an <strong>open-source, non-commercial project</strong> that I
			develop in my free time. If you appreciate my work and want to support me personally,
			you can do so through the following platforms:
		</div>
		<InlineNotification
			title="Note"
			kind="info"
			subtitle="There are no donation links in this page. Projects are still undergoing major changes."
		/>
		<InlineNotification
			title="Additional Note"
			kind="info"
			subtitle="If you are the developer of an open source tool or website, you can submit your resource and donation links via our GitHub issue tracker. The website does not need to have a license."
		/>
		<section>
			<SectionHeading title="Transparency & Purpose" level={2} />
			<div>
				<UnorderedList class="spaced-list">
					<ListItem
						><p>
							Donations go directly to me as an independent developer and are
							not tied to Wycademy’s funding or operations.
						</p></ListItem
					>
					<ListItem
						><p>
							Wycademy will remain free, open-source, and available to everyone,
							regardless of donations.
						</p></ListItem
					>
					<ListItem
						><p>
							Supporting me helps sustain my work on open-source projects, but
							it does not grant exclusive features, influence, or privileges
							related to Wycademy.
						</p></ListItem
					>
				</UnorderedList>
			</div>
		</section>
		<section>
			<SectionHeading level={2} title="Why Donations?" />
			<div>
				<p class="spaced-paragraph">
					Open-source development requires time and effort. Donations help cover
					personal costs, tools, and resources that allow me to continue working
					on projects like Wycademy and other community-driven initiatives.
				</p>
				<p class="spaced-paragraph">Thank you for your support!</p>
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
