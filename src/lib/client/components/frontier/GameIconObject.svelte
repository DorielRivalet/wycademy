<!--
@component
Shows a game object next to its icon. You can use either a component or a image import as the icon, only one of either.

### Slots

- Icon: if you are using a component as the icon, otherwise use the image prop.
- Description: the text next to the icon.

TODO: popover props passed to the slot and slot props.
-->
<script lang="ts">
	import { browser } from '$app/environment';
	import { getTag } from '$lib/client/modules/frontier/functions';
	import type { PopoverPosition } from '$lib/client/modules/frontier/types';
	import { getCatppuccinColorFromTagColor } from '$lib/client/themes/catppuccin';
	import GamePopover from './GamePopover.svelte';
	export let hasPopover = false;
	/**Requires popover*/
	export let popoverLink = '';
	export let popoverTag1 = '';
	export let popoverTag2 = '';
	export let popoverTag3 = '';
	export let popoverTitle = '';
	export let popoverSubtitle = '';
	export let popoverDescription = '';
	export let popoverAlign: PopoverPosition = 'top';
	export let image = undefined;
	export let popoverImage = undefined;
	export let popoverComponent = undefined;
	export let color = hasPopover
		? getCatppuccinColorFromTagColor(getTag(popoverTag1).color)
		: 'var(--ctp-text);';

	let open = false;
	let ref: HTMLSpanElement | null = null;

	function handleFocus() {
		if (!browser) return;

		open = !open;
	}
</script>

{#if hasPopover}
	<span class="container">
		<span bind:this={ref} style:position="relative">
			<GamePopover
				bind:open
				bind:ref
				bind:link={popoverLink}
				bind:tag1={popoverTag1}
				bind:tag2={popoverTag2}
				bind:tag3={popoverTag3}
				bind:title={popoverTitle}
				bind:subtitle={popoverSubtitle}
				bind:description={popoverDescription}
				bind:align={popoverAlign}
				><div slot="image">
					{#if popoverComponent}
						<svelte:component this={popoverComponent} />
					{:else if popoverImage}
						<img class="popover-image" src={popoverImage} alt={popoverTitle} />
					{/if}
				</div></GamePopover
			>
			<span
				class="icon hoverable"
				on:click={(e) => handleFocus()}
				role="button"
				tabindex="0"
				on:keypress={(e) => handleFocus()}
			>
				<slot name="icon" />
			</span>

			{#if image}
				<span
					class="image hoverable"
					on:click={(e) => handleFocus()}
					role="button"
					tabindex="0"
					on:keypress={(e) => handleFocus()}
				>
					<img
						style="display: inline;"
						width="64"
						height="auto"
						src={image}
						alt={popoverTitle}
					/>
				</span>
			{/if}
			<span
				on:click={(e) => handleFocus()}
				role="button"
				tabindex="0"
				on:keypress={(e) => handleFocus()}
				class="description underline"
				style="color: {color === ''
					? 'var(--ctp-blue)'
					: color}; font-family: var(--font-body); font-size: 1rem;"
			>
				<slot name="description" />
			</span>
		</span>
	</span>
{:else}
	<span class="container">
		{#if image}
			<span class="image">
				<img
					style="display: inline;"
					width="64"
					height="auto"
					src={image}
					alt={popoverTitle}
				/>
			</span>
		{:else}
			<span class="icon">
				<slot name="icon" />
			</span>{/if}
		<span class="description" style="color: {color}; font-weight: bold;">
			<slot name="description" />
		</span>
	</span>
{/if}

<style>
	.icon {
		display: inline-block;
		vertical-align: text-bottom;
		height: var(--cds-spacing-06);
		max-width: 3ch;
	}

	.image img {
		max-width: 4ch;
		vertical-align: bottom; /* This ensures the image is aligned with the text */
	}

	.popover-image {
		max-width: 100%; /* Ensures the image does not exceed the width of its container */
		max-height: 100%; /* Ensures the image does not exceed the height of its container */
		object-fit: cover; /* Ensures the image covers the area without distorting its aspect ratio */
		display: inline-block; /* Removes any extra space below the image */
	}

	.hoverable,
	.underline {
		transition-property:
			-moz-filter,
			-ms-filter,
			-o-filter,
			-webkit-filter,
			filter,
			text-decoration;
		transition-duration: 0.3s;
		transition-timing-function: ease-in-out;
	}

	.underline {
		text-decoration: underline dotted;
	}

	.underline:hover {
		text-decoration: underline;
		filter: drop-shadow(0px 0px 1rem var(--ctp-blue)) brightness(120%);
	}

	.hoverable:hover {
		filter: brightness(120%) drop-shadow(0px 0px 8px var(--ctp-blue));
	}
</style>
