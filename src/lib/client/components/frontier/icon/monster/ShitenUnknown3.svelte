<script lang="ts">
	import { onMount } from 'svelte';
	import { browser } from '$app/environment';
	import SkeletonPlaceholder from 'carbon-components-svelte/src/SkeletonPlaceholder/SkeletonPlaceholder.svelte';
	import UnknownPhase1 from '$lib/client/components/frontier/icon/monster/UnknownPhase1.svelte';
	import UnknownPhase2 from '$lib/client/components/frontier/icon/monster/UnknownPhase2.svelte';
	import UnknownPhase3 from '$lib/client/components/frontier/icon/monster/UnknownPhase3.svelte';
	import UnknownPhase4 from '$lib/client/components/frontier/icon/monster/UnknownPhase4.svelte';
	import UnknownPhase5 from '$lib/client/components/frontier/icon/monster/UnknownPhase5.svelte';
	import UnknownPhase6 from '$lib/client/components/frontier/icon/monster/UnknownPhase6.svelte';
	import UnknownPhase7 from '$lib/client/components/frontier/icon/monster/UnknownPhase7.svelte';
	import UnknownPhase8 from '$lib/client/components/frontier/icon/monster/UnknownPhase8.svelte';

	export let delay = 2000;
	export let size = '100%';
	let currentPhaseIndex = 0;

	const items = [
		UnknownPhase1,
		UnknownPhase2,
		UnknownPhase3,
		UnknownPhase4,
		UnknownPhase5,
		UnknownPhase6,
		UnknownPhase7,
		UnknownPhase8,
	];

	let nextItem = UnknownPhase1;

	function getNextItem() {
		currentPhaseIndex++;
		if (currentPhaseIndex > items.length - 1) {
			currentPhaseIndex = 0;
		}
		return items[currentPhaseIndex];
	}

	nextItem = getNextItem();

	onMount(() => {
		const intervalId = setInterval(() => {
			nextItem = getNextItem();
		}, delay);

		return () => clearInterval(intervalId);
	});
</script>

<div>
	{#if browser}
		<svelte:component this={nextItem} {...{ background: true, size: size }} />
	{:else}
		<SkeletonPlaceholder style="width: {size}; height: {size};" />
	{/if}
</div>

<style lang="scss"></style>
