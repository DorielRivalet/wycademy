<script lang="ts">
	import SectionHeadingTopLevel from '$lib/client/components/SectionHeadingTopLevel.svelte';
	import SectionHeading from '$lib/client/components/SectionHeading.svelte';
	import { groupedAnnouncements } from '$lib/client/modules/announcements';
	import Link from 'carbon-components-svelte/src/Link/Link.svelte';
	import UnorderedList from 'carbon-components-svelte/src/UnorderedList/UnorderedList.svelte';
	import ListItem from 'carbon-components-svelte/src/ListItem/ListItem.svelte';
	import TableOfContentsPage from '$lib/client/components/TableOfContentsPage.svelte';
	import PageTurn from '$lib/client/components/PageTurn.svelte';
	import { page } from '$app/stores';
	import CodeSnippet from 'carbon-components-svelte/src/CodeSnippet/CodeSnippet.svelte';
	import Rss from 'carbon-icons-svelte/lib/Rss.svelte';

	// TODO make it look like svelte's
</script>

<TableOfContentsPage displayTOC={false}>
	<div>
		<SectionHeadingTopLevel title="Announcements" />
		<p class="spaced-paragraph">Select an announcement post to view.</p>
		<p>
			Subscribe to our <Rss /> RSS feed: <CodeSnippet
				type="inline"
				code="https://wycademy.vercel.app/rss"
			/>
		</p>
		<div>
			{#each [...Object.entries(groupedAnnouncements)].reverse() as [year, months]}
				<section>
					<SectionHeading level={2} title={year} />
					{#each Object.entries(months) as [month, days]}
						<section>
							<SectionHeading
								level={3}
								title={new Date(year, month - 1).toLocaleString('default', {
									month: 'long',
								})}
							/>
							<UnorderedList>
								{#each [...days].reverse() as { day, title, link }}
									<ListItem
										><Link inline href={link}>{day} - {title}</Link></ListItem
									>
								{/each}
							</UnorderedList>
						</section>
					{/each}
				</section>
			{/each}
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
