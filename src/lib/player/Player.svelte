<!--@component
### Usage

There’s a long-standing hydration bug with Svelte 4 and Custom Elements which has been resolved in Svelte 5. If you’re using Svelte 4, you will need to dynamically import the player or disable SSR:
```
{#await import('./Player.svelte') then { default: Player }}
  <svelte:component this={Player} />
{/await}
```
-->
<script lang="ts">
	import 'vidstack/bundle';
	import { theme } from '$lib/client/stores/theme';

	export let title: string;
	export let src: string;
</script>

<media-player class="poster" load="visible" {title} {src}>
	<media-provider></media-provider>
	<media-video-layout
		class="vds-video-layout"
		colorScheme={$theme === 'g10' ? 'light' : 'dark'}
	></media-video-layout>
</media-player>

<style lang="scss">
	.poster {
		max-height: 95vh;
		margin-bottom: 2rem;
		margin-top: 2rem;
	}
</style>
