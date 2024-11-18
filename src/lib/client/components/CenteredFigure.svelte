<script lang="ts">
	import { onMount } from 'svelte';
	import type { Component } from 'svelte';
	import ImageDialog from './ImageDialog.svelte';
	import SkeletonPlaceholder from 'carbon-components-svelte/src/SkeletonPlaceholder/SkeletonPlaceholder.svelte';

	interface Props {
		figcaption: string;
		alt: string;
		width?: string | number;
		height?: string | number;
		src: string | Component;
		type: 'file' | 'component';
	}

	let {
		figcaption,
		alt,
		width = 128,
		height = 128,
		src,
		type,
	}: Props = $props();

	let container: HTMLElement = $state();
	let isVisible = $state(false);

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
