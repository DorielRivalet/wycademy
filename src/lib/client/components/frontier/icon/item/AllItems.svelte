<script lang="ts">
	import { onMount } from 'svelte';
	import { RarityColors } from '$lib/client/modules/frontier/objects';
	import { browser } from '$app/environment';
	import SkeletonPlaceholder from 'carbon-components-svelte/src/SkeletonPlaceholder/SkeletonPlaceholder.svelte';
	import { itemInfo } from '$lib/client/modules/frontier/items';

	interface Props {
		colors?: any;
		delay?: number;
		size?: string;
	}

	let { colors = [...new Set(RarityColors)], delay = 2000, size = '100%' }: Props = $props();

	const items = itemInfo.map((e) => {
		return e.icon;
	});

	let randomItem = $state(itemInfo[0].icon);
	let randomColor = $state('#ffffff');

	function getRandomItem(arr: any[]) {
		return arr[Math.floor(Math.random() * arr.length)];
	}

	randomItem = getRandomItem(items);
	randomColor = getRandomItem(colors);

	onMount(() => {
		const intervalId = setInterval(() => {
			randomItem = getRandomItem(items);
			randomColor = getRandomItem(colors);
		}, delay);

		return () => clearInterval(intervalId);
	});
</script>

<div>
	{#if browser}
		{@const SvelteComponent = randomItem}
		<SvelteComponent color={randomColor} {size} />
	{:else}
		<SkeletonPlaceholder style="width: 64px; height: 64px;" />
	{/if}
</div>

<style lang="scss"></style>
