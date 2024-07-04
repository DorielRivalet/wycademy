<!--@component
Also for Tools pages
-->
<script lang="ts">
	import Button from 'carbon-components-svelte/src/Button/Button.svelte';
	import LocalStorage from 'carbon-components-svelte/src/LocalStorage/LocalStorage.svelte';
	import ChevronLeft from 'carbon-icons-svelte/lib/ChevronLeft.svelte';
	import ViewOff from 'carbon-icons-svelte/lib/ViewOff.svelte';
	import { tocEnabledStore } from '$lib/client/stores/toc';
	import Toc from 'svelte-toc';
	import breakpointObserver from 'carbon-components-svelte/src/Breakpoint/breakpointObserver';
	import { fade } from 'svelte/transition';

	const breakpointSize = breakpointObserver();
	const breakpointLargerThanMedium = breakpointSize.largerThan('md');

	let tocVisible = $tocEnabledStore;

	/**Whether to render the TOC on this page*/
	export let displayTOC = true;

	function onTOCToggleButtonPress(e: MouseEvent) {
		tocVisible = !tocVisible;
		tocEnabledStore.set(tocVisible ? true : false);
	}
</script>

<LocalStorage bind:value={$tocEnabledStore} key="__toc-enabled" />

{#if !tocVisible && $breakpointLargerThanMedium && displayTOC}
	<div class="expand-TOC">
		<Button
			iconDescription="Expand TOC"
			tooltipPosition="left"
			size="small"
			kind="ghost"
			icon={ChevronLeft}
			on:click={onTOCToggleButtonPress}
		/>
	</div>
{/if}

<div
	class={tocVisible && displayTOC
		? 'top-level-container'
		: 'top-level-container-full'}
>
	<div><slot /></div>
	{#if tocVisible && displayTOC}
		<div in:fade={{ duration: 150 }}>
			<Toc blurParams={{ duration: 0 }} --toc-desktop-sticky-top={'10vh'}>
				<span slot="title">
					{#if $breakpointLargerThanMedium}
						<h2 class="toc-title toc-exclude">
							<span
								>On this page <span>
									<Button
										iconDescription={'Hide'}
										kind="ghost"
										size={'small'}
										icon={ViewOff}
										on:click={onTOCToggleButtonPress}
									/>
								</span></span
							>
						</h2>
					{:else}
						<h2 class="toc-title toc-exclude">On this page</h2>
					{/if}
				</span>
			</Toc>
		</div>
	{/if}
</div>

<style lang="scss">
	.top-level-container {
		display: grid;
		gap: 1rem;
		grid-template-columns: 13fr 3fr;
	}

	.expand-TOC {
		position: fixed; /* Position the button relative to the viewport */
		top: 50%; /* Position it in the middle vertically */
		right: 0%; /* Position it at the left edge of the viewport */
		padding: 0;
		margin: 0;
		z-index: 1000; /* Ensure the button is above other content */
	}
</style>
