<script lang="ts">
	import { onMount } from 'svelte';
	import CaravanGem from './CaravanGem.svelte';
	import { ItemColors } from '$lib/client/modules/frontier/items';

	export let colors = [...new Set(ItemColors.map((item) => item.value))];
	export let delay = 2000;

	let randomColor = '#ffffff';

	function getRandomItem(arr: any[]) {
		return arr[Math.floor(Math.random() * arr.length)];
	}

	randomColor = getRandomItem(colors);

	onMount(() => {
		const intervalId = setInterval(() => {
			randomColor = getRandomItem(colors);
		}, delay);

		return () => clearInterval(intervalId);
	});
</script>

<div>
	<CaravanGem color={randomColor} />
</div>

<style lang="scss"></style>
