<script>
	import Button from 'carbon-components-svelte/src/Button/Button.svelte';
	import UpToTop from 'carbon-icons-svelte/lib/UpToTop.svelte';

	/** @type {{showOnPx?: number}} */
	let { showOnPx = 150 } = $props();
	let hidden = $state(true);

	function goTop() {
		document.body.scrollIntoView();
	}

	function scrollContainer() {
		return document.documentElement || document.body;
	}

	function handleOnScroll() {
		if (!scrollContainer()) {
			return;
		}

		if (scrollContainer().scrollTop > showOnPx) {
			hidden = false;
		} else {
			hidden = true;
		}
	}
</script>

<svelte:window onscroll={handleOnScroll} />

<div class="back-to-top" class:hidden>
	<Button
		size="small"
		iconDescription="Go up"
		icon={UpToTop}
		on:click={goTop}
		kind="ghost"
	/>
</div>

<style lang="scss">
	.back-to-top {
		opacity: 1;
		transition:
			opacity 0.5s,
			visibility 0.5s;
		position: fixed;
		z-index: 99;
		right: 1vw;
		user-select: none;
		bottom: 5vh;
		color: var(--ctp-text);
		background-color: transparent;
	}

	.back-to-top.hidden {
		opacity: 0;
		visibility: hidden;
	}
</style>
