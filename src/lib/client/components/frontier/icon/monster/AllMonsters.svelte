<script lang="ts">
	import { onMount } from 'svelte';
	import { monsterInfo } from '$lib/client/modules/frontier/monsters';

	export let monsters = [...new Set(monsterInfo)];
	export let delay = 2000;
	export let size: string = '100%';

	let randomMonster = monsterInfo[0];

	function getRandomItem(arr: any[]) {
		return arr[Math.floor(Math.random() * arr.length)];
	}

	randomMonster = getRandomItem(monsters);

	onMount(() => {
		const intervalId = setInterval(() => {
			randomMonster = getRandomItem(monsters);
		}, delay);

		return () => clearInterval(intervalId);
	});
</script>

<div style:width={size}>
	<img src={randomMonster.icon} alt="Monster" width="100%" height="100%" />
</div>

<style lang="scss">
	img {
		padding: 0;
		margin: 0;
	}
</style>
