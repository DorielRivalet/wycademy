<script lang="ts">
	import SectionHeadingTopLevel from '$lib/client/components/SectionHeadingTopLevel.svelte';
	import SectionHeading from '$lib/client/components/SectionHeading.svelte';
	import { groupedAnnouncements } from '$lib/client/modules/announcements';
	import Link from 'carbon-components-svelte/src/Link/Link.svelte';
	import UnorderedList from 'carbon-components-svelte/src/UnorderedList/UnorderedList.svelte';
	import ListItem from 'carbon-components-svelte/src/ListItem/ListItem.svelte';
	import HunterNotesPage from '$lib/client/components/HunterNotesPage.svelte';
	import PageTurn from '$lib/client/components/PageTurn.svelte';
	import { page } from '$app/stores';
	import Button from 'carbon-components-svelte/src/Button/Button.svelte';
	import Rss from 'carbon-icons-svelte/lib/Rss.svelte';
</script>

<HunterNotesPage displayTOC={false}>
	<div>
		<SectionHeadingTopLevel title="Announcements" />
		<p class="spaced-paragraph">Select an announcement post to view.</p>
		<Button href="/rss" kind="primary" icon={Rss}
			>Subscribe to our RSS feed</Button
		>
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
</HunterNotesPage>

<style lang="scss">
	.page-turn {
		margin-top: 4rem;
	}
</style>
