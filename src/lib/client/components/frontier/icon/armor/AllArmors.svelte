<script lang="ts">
	import { onMount } from 'svelte';
	import { RarityColors } from '$lib/client/modules/frontier/objects';
	import ArmIconWhite from './Arm_Icon_White.svelte';
	import ChestIconWhite from './Chest_Icon_White.svelte';
	import HelmetIconWhite from './Helmet_Icon_White.svelte';
	import LegIconWhite from './Leg_Icon_White.svelte';
	import WaistIconWhite from './Waist_Icon_White.svelte';

	interface Props {
		colors?: any;
		delay?: number;
		size?: string;
	}

	let { colors = [...new Set(RarityColors)], delay = 2000, size = '100%' }: Props = $props();

	const armors = [
		ArmIconWhite,
		ChestIconWhite,
		HelmetIconWhite,
		LegIconWhite,
		WaistIconWhite,
	];

	let randomArmor = $state(HelmetIconWhite);
	let randomColor = $state('#ffffff');

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

	const SvelteComponent = $derived(randomArmor);
</script>

<div>
	<SvelteComponent color={randomColor} {size} />
</div>

<style lang="scss"></style>
