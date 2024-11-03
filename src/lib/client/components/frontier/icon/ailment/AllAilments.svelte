<script lang="ts">
	import {
		AilmentIcons,
		getAilmentIcon,
	} from '$lib/client/modules/frontier/ailments';
	import { onMount } from 'svelte';

	const content = AilmentIcons.filter((e) => e.icon !== '').map((e) => {
		return getAilmentIcon(e.name);
	});

	let randomSelection = getAilmentIcon('Stun');

	export let delay = 2000;
	export let size: string = '100%';

	// Function to select a random item from an array
	function getRandomItem(arr: any[]) {
		return arr[Math.floor(Math.random() * arr.length)];
	}

	// Initialize randomWeapon and randomColor
	randomSelection = getRandomItem(content);

	// Use onMount to start changing the weapon every 1 second after the component mounts
	onMount(() => {
		const intervalId = setInterval(() => {
			randomSelection = getRandomItem(content);
		}, delay); // Change every 1 second

		// Cleanup function to clear the interval when the component is destroyed
		return () => clearInterval(intervalId);
	});
</script>

<div>
	<!-- Pass the random color as a prop to the randomly selected weapon component -->
	<svelte:component this={randomSelection} {size} />
</div>

<style lang="scss"></style>
