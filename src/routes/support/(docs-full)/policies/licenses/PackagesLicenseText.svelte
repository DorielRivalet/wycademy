<script lang="ts">
	import OutboundLink from 'carbon-components-svelte/src/Link/OutboundLink.svelte';
	import ListItem from 'carbon-components-svelte/src/ListItem/ListItem.svelte';
	import UnorderedList from 'carbon-components-svelte/src/UnorderedList/UnorderedList.svelte';
	interface Props {
		packages: { name: string; source: string; license: string }[];
	}
	let { packages }: Props = $props();
	// Group packages by license text
	let groupedPackages = new Map<string, { name: string; source: string }[]>();
	for (const pkg of packages) {
		if (!groupedPackages.has(pkg.license)) {
			groupedPackages.set(pkg.license, []);
		}
		groupedPackages
			.get(pkg.license)
			?.push({ name: pkg.name, source: pkg.source });
	}
</script>

<div class="container">
	<hr />
	{#each Array.from(groupedPackages.entries()) as [license, groupedList], i}
		<div class="license-group">
			<p class="spaced-paragraph">
				The following software may be included in this product:
			</p>
			<UnorderedList class="spaced-list">
				{#each groupedList as pkg}
					<ListItem><p>{pkg.name}</p></ListItem>
				{/each}
			</UnorderedList>
			<p class="spaced-paragraph">
				A copy of the source code may be downloaded from:
			</p>
			<UnorderedList class="spaced-list">
				{#each groupedList as pkg}
					<ListItem
						><p>
							<OutboundLink href={pkg.source}>{pkg.source}</OutboundLink> ({pkg.name})
						</p></ListItem
					>
				{/each}
			</UnorderedList>
			<p class="spaced-paragraph">
				This software contains the following license and notice below:
			</p>

			<pre class="legal">{license}</pre>
			{#if i < Array.from(groupedPackages.entries()).length - 1}
				<hr />
			{/if}
		</div>
	{/each}
</div>

<style lang="scss">
	@use '@carbon/type' as type;
	.legal {
		@include type.type-style('legal-02');
	}
	hr {
		opacity: 1;
		margin-bottom: var(--cds-spacing-06);
	}
	.license-group {
		margin-bottom: var(--cds-spacing-08);
	}
</style>
