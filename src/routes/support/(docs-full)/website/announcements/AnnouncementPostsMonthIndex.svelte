<script lang="ts">
	import SectionHeadingTopLevel from '$lib/client/components/SectionHeadingTopLevel.svelte';
	import { groupedAnnouncements } from '$lib/client/modules/announcements';
	import Link from 'carbon-components-svelte/src/Link/Link.svelte';
	import UnorderedList from 'carbon-components-svelte/src/UnorderedList/UnorderedList.svelte';
	import ListItem from 'carbon-components-svelte/src/ListItem/ListItem.svelte';

	export let selectedYear: number;
	export let selectedMonth: 1 | 2 | 3 | 4 | 5 | 6 | 7 | 8 | 9 | 10 | 11 | 12;
</script>

<div>
	<SectionHeadingTopLevel
		title={`${
			selectedYear > 0
				? `${new Date(selectedYear, selectedMonth - 1).toLocaleString(
						'default',
						{
							month: 'long',
						},
					)} ${selectedYear} `
				: ''
		}Announcements`}
	/>

	<p>Select an announcement post to view.</p>
	<div>
		{#each [...Object.entries(groupedAnnouncements)].reverse() as [year, months]}
			{#if selectedYear.toString() === year}
				{#each Object.entries(months) as [month, days]}
					{#if selectedMonth.toString().padStart(2, '0') === month}
						<UnorderedList>
							{#each [...days].reverse() as { day, title, link }}
								<ListItem
									><Link inline href={link}>{day} - {title}</Link></ListItem
								>
							{/each}
						</UnorderedList>
					{/if}
				{/each}
			{/if}
		{/each}
	</div>
</div>

<style lang="scss">
</style>
