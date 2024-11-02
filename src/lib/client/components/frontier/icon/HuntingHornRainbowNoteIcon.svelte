<!-- Created with Inkscape (http://www.inkscape.org/) -->
<script lang="ts">
	import { onMount } from 'svelte';
	import HuntingHornNoteIcon from './HuntingHornNoteIcon.svelte';
	import type { FrontierHuntingHornNote } from '$lib/client/modules/frontier/types';

	export let size: number | string = 16;
	export let delay = 2000;

	// Function to select a random item from an array
	function getRandomItem(arr: any[]): FrontierHuntingHornNote {
		return arr[Math.floor(Math.random() * arr.length)] || 'Red';
	}

	const colors = [
		...new Set([
			'Red',
			'Green',
			'Blue',
			'Yellow',
			'Purple',
			'Cyan',
			'White',
			'Pink',
		]),
	];

	let randomColor: FrontierHuntingHornNote = 'Red';

	randomColor = getRandomItem(colors);

	// Use onMount to start changing the weapon every 1 second after the component mounts
	onMount(() => {
		const intervalId = setInterval(() => {
			randomColor = getRandomItem(colors);
		}, delay); // Change every 1 second

		// Cleanup function to clear the interval when the component is destroyed
		return () => clearInterval(intervalId);
	});
</script>

<div>
	<!-- Pass the random color as a prop to the randomly selected weapon component -->
	<svelte:component this={HuntingHornNoteIcon} color={randomColor} {size} />
</div>
