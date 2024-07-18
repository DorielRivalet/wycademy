<script lang="ts">
	import type { ComponentType, SvelteComponent } from 'svelte';
	import ImageDialog from './ImageDialog.svelte';
	export let figcaption: string;
	export let alt: string;
	export let width: string | number = 128;
	export let height: string | number = 128;
	export let src: string | ComponentType<SvelteComponent>;
	export let type: 'file' | 'component';
</script>

<figure class="centered-figure">
	<ImageDialog {width} {height} {type} {src} {alt} />
	<figcaption>{figcaption}</figcaption>
</figure>

<style lang="scss">
</style>
