<script lang="ts">
	import { onMount } from 'svelte';
	import { monsterInfo } from '$lib/client/modules/frontier/monsters';

	interface Props {
		monsters?: any;
		delay?: number;
		size?: string;
	}

	let { monsters = [...new Set(monsterInfo)], delay = 2000, size = '100%' }: Props = $props();

	let randomMonster = $state(monsterInfo[0]);

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
