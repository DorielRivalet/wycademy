<script lang="ts">
	import {
		ElementIcons,
		getElementIcon,
	} from '$lib/client/modules/frontier/elements';
	import { onMount } from 'svelte';

	const content = ElementIcons.filter((e) => e.icon !== '').map((e) => {
		return getElementIcon(e.name);
	});

	let randomSelection = $state(getElementIcon('Fire'));

	interface Props {
		delay?: number;
		size?: string;
	}

	let { delay = 2000, size = '100%' }: Props = $props();

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

	const SvelteComponent = $derived(randomSelection);
</script>

<div>
	<!-- Pass the random color as a prop to the randomly selected weapon component -->
	<SvelteComponent {size} />
</div>

<style lang="scss"></style>
