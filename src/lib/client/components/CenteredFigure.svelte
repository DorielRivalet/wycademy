<script lang="ts">
	import { onMount } from 'svelte';
	import type { ComponentType, SvelteComponent } from 'svelte';
	import ImageDialog from './ImageDialog.svelte';
	import SkeletonPlaceholder from 'carbon-components-svelte/src/SkeletonPlaceholder/SkeletonPlaceholder.svelte';

	export let figcaption: string;
	export let alt: string;
	export let width: string | number = 128;
	export let height: string | number = 128;
	export let src: string | ComponentType<SvelteComponent>;
	export let type: 'file' | 'component';

	let container: HTMLElement;
	let isVisible = false;

	onMount(() => {
		const observer = new IntersectionObserver(
			(entries) => {
				entries.forEach((entry) => {
					if (entry.isIntersecting) {
						isVisible = true;
						observer.unobserve(entry.target);
					}
				});
			},
			{ threshold: 0.1 },
		); // Adjust threshold as needed

		observer.observe(container);

		return () => {
			observer.disconnect();
		};
	});
</script>

<figure class="centered-figure" bind:this={container}>
	{#if isVisible}
		<ImageDialog {width} {height} {type} {src} {alt} />
		<figcaption>{figcaption}</figcaption>
	{:else}
		<SkeletonPlaceholder style="width: 128px; height: 128px" />
	{/if}
</figure>

<style lang="scss">
</style>
