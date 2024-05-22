<script>
	import '../app.scss';
	import ScrollToTop from './ScrollToTop.svelte';
	import { scrollToTopStore } from '$lib/client/stores/toggles';
</script>

<slot />
{#if $scrollToTopStore}
	<ScrollToTop />
{/if}
