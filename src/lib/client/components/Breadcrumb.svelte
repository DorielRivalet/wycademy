<script lang="ts">
	import type { Page } from '@sveltejs/kit';
	import Breadcrumb from 'carbon-components-svelte/src/Breadcrumb/Breadcrumb.svelte';
	import BreadcrumbItem from 'carbon-components-svelte/src/Breadcrumb/BreadcrumbItem.svelte';
	import { deslugify } from '../modules/strings';
	import slugify from 'slugify';

	interface Props {
		page: Page<Record<string, string>, string | null>;
	}

	let { page }: Props = $props();

	const breadcrumbItems: string[] = $derived.by(() => {
		let result = page.url.pathname.split('/').filter(Boolean);
		result.pop();
		return result;
	});
</script>

<Breadcrumb noTrailingSlash={breadcrumbItems.length > 1}>
	{#each breadcrumbItems as item, i}
		{@const href = breadcrumbItems.slice(0, i + 1).join('/')}
		<BreadcrumbItem href={`/${href}`}>
			{deslugify(slugify(item))}
		</BreadcrumbItem>
	{/each}
</Breadcrumb>

<style lang="scss">
</style>
