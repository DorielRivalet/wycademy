<script lang="ts">
	import SectionHeadingTopLevel from '$lib/client/components/SectionHeadingTopLevel.svelte';
	import SectionHeading from '$lib/client/components/SectionHeading.svelte';
	import { groupedAnnouncements } from '$lib/client/modules/announcements';
	import Link from 'carbon-components-svelte/src/Link/Link.svelte';
	import UnorderedList from 'carbon-components-svelte/src/UnorderedList/UnorderedList.svelte';
	import ListItem from 'carbon-components-svelte/src/ListItem/ListItem.svelte';

	interface Props {
		selectedYear: number;
	}

	let { selectedYear }: Props = $props();
</script>

<div>
	<SectionHeadingTopLevel
		title={`${selectedYear > 0 ? `${selectedYear} ` : ''}Announcements`}
	/>

	<p>Select an announcement post to view.</p>
	<div>
		{#each [...Object.entries(groupedAnnouncements)].reverse() as [year, months]}
			{#if selectedYear.toString() === year}
				{#each Object.entries(months) as [month, days]}
					<section>
						<SectionHeading
							level={2}
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
			{/if}
		{/each}
	</div>
</div>

<style lang="scss">
</style>
