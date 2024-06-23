<script lang="ts">
	import { onMount } from 'svelte';
	import { RarityColors } from '$lib/client/modules/frontier/objects';
	import ArmIconWhite from './Arm_Icon_White.svelte';
	import ChestIconWhite from './Chest_Icon_White.svelte';
	import HelmetIconWhite from './Helmet_Icon_White.svelte';
	import LegIconWhite from './Leg_Icon_White.svelte';
	import WaistIconWhite from './Waist_Icon_White.svelte';

	export let colors = [...new Set(RarityColors)];
	export let delay = 2000;

	const armors = [
		ArmIconWhite,
		ChestIconWhite,
		HelmetIconWhite,
		LegIconWhite,
		WaistIconWhite,
	];

	let randomArmor = HelmetIconWhite;
	let randomColor = '#ffffff';

	function getRandomItem(arr: any[]) {
		return arr[Math.floor(Math.random() * arr.length)];
	}

	randomArmor = getRandomItem(armors);
	randomColor = getRandomItem(colors);

	onMount(() => {
		const intervalId = setInterval(() => {
			randomArmor = getRandomItem(armors);
			randomColor = getRandomItem(colors);
		}, delay);

		return () => clearInterval(intervalId);
	});
</script>

<div>
	<svelte:component this={randomArmor} color={randomColor} />
</div>

<style lang="scss"></style>
