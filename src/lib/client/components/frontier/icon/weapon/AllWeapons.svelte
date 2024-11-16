<script lang="ts">
	import { onMount } from 'svelte';
	import { getWeaponIcon } from '$lib/client/modules/frontier/weapons';
	import { RarityColors } from '$lib/client/modules/frontier/objects';

	const weapons = [
		getWeaponIcon('Great Sword'),
		getWeaponIcon('Long Sword'),
		getWeaponIcon('Dual Swords'),
		getWeaponIcon('Sword and Shield'),
		getWeaponIcon('Hammer'),
		getWeaponIcon('Hunting Horn'),
		getWeaponIcon('Lance'),
		getWeaponIcon('Gunlance'),
		getWeaponIcon('Tonfa'),
		getWeaponIcon('Switch Axe F'),
		getWeaponIcon('Magnet Spike'),
		getWeaponIcon('Heavy Bowgun'),
		getWeaponIcon('Light Bowgun'),
		getWeaponIcon('Bow'),
	];

	let randomWeapon = $state(getWeaponIcon('Great Sword'));
	let randomColor = $state('#ffffff');

	interface Props {
		colors?: any;
		delay?: number;
		size?: string;
	}

	let { colors = [...new Set(RarityColors)], delay = 2000, size = '100%' }: Props = $props();

	// Function to select a random item from an array
	function getRandomItem(arr: any[]) {
		return arr[Math.floor(Math.random() * arr.length)];
	}

	// Initialize randomWeapon and randomColor
	randomWeapon = getRandomItem(weapons);
	randomColor = getRandomItem(colors);

	// Use onMount to start changing the weapon every 1 second after the component mounts
	onMount(() => {
		const intervalId = setInterval(() => {
			randomWeapon = getRandomItem(weapons);
			randomColor = getRandomItem(colors);
		}, delay); // Change every 1 second

		// Cleanup function to clear the interval when the component is destroyed
		return () => clearInterval(intervalId);
	});

	const SvelteComponent = $derived(randomWeapon);
</script>

<div>
	<!-- Pass the random color as a prop to the randomly selected weapon component -->
	<SvelteComponent color={randomColor} {size} />
</div>

<style lang="scss"></style>
