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
	import Popover from 'carbon-components-svelte/src/Popover/Popover.svelte';
	import GamePopover from './GamePopover.svelte';
	export let hasToggletipPopover = false;
	/**Requires popover*/
	export let toggletipPopoverLink = '';
	export let toggletipPopoverTag1 = '';
	export let toggletipPopoverTag2 = '';
	export let toggletipPopoverTag3 = '';
	export let toggletipPopoverTitle = '';
	export let toggletipPopoverSubtitle = '';
	export let toggletipPopoverDescription = '';
	export let toggletipPopoverAlign: PopoverPosition = 'right';
	/**use icon slot if you are using a component as the icon, otherwise use this image prop*/
	export let image: any = undefined;
	export let toggletipPopoverImage: any = undefined;
	export let toggletipPopoverComponent: any = undefined;
	/** Shown as tooltip if not showing a popover*/
	export let popoverDescription = ''; // TODO separate components?
	export let color = hasToggletipPopover
		? getCatppuccinColorFromTagColor(getTag(toggletipPopoverTag1).color)
		: 'var(--ctp-text);';

	let open = false;
	let ref: HTMLSpanElement | null = null;

	let open2 = false;

	function handleFocus() {
		if (!browser) return;

		open = !open;
	}
</script>

{#if hasToggletipPopover}
	<span class="container">
		<span bind:this={ref} style:position="relative">
			<GamePopover
				bind:open
				bind:ref
				bind:link={toggletipPopoverLink}
				bind:tag1={toggletipPopoverTag1}
				bind:tag2={toggletipPopoverTag2}
				bind:tag3={toggletipPopoverTag3}
				bind:title={toggletipPopoverTitle}
				bind:subtitle={toggletipPopoverSubtitle}
				bind:description={toggletipPopoverDescription}
				bind:align={toggletipPopoverAlign}
				><div slot="image">
					{#if toggletipPopoverComponent !== undefined}
						{#key toggletipPopoverComponent}
							<svelte:component this={toggletipPopoverComponent} />
						{/key}
					{:else if toggletipPopoverImage}
						<img
							class="popover-image"
							src={toggletipPopoverImage}
							alt={toggletipPopoverTitle}
						/>
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

			<!--TODO better logic-->
			{#if image !== undefined && popoverDescription === ''}
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
						alt={toggletipPopoverTitle}
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
		<span
			style:position="relative"
			on:mouseenter={(e) => (open2 = true)}
			on:mouseleave={(e) => (open2 = false)}
			role="button"
			tabindex="0"
			on:keypress={(e) => open2 != open2}
		>
			{#if popoverDescription.length > 1}
				<Popover bind:open={open2} caret align={'top'}>
					<div
						style="padding: var(--cds-spacing-03); font-family: var(--font-body); font-size: 1rem;"
					>
						{popoverDescription}
					</div></Popover
				>
			{/if}
			{#if image}
				<span
					class="image"
					on:mouseenter={(e) => (open2 = true)}
					on:mouseleave={(e) => (open2 = false)}
					role="button"
					tabindex="0"
					on:keypress={(e) => open2 != open2}
				>
					<img
						style="display: inline;"
						width="64"
						height="auto"
						src={image}
						alt={toggletipPopoverTitle}
					/>
				</span>
			{:else}
				<span class="icon">
					<slot name="icon" />
				</span>
			{/if}

			<span
				class="description"
				style="color: {color}; font-weight: bold;"
				on:mouseenter={(e) => (open2 = true)}
				on:mouseleave={(e) => (open2 = false)}
				role="button"
				tabindex="0"
				on:keypress={(e) => open2 != open2}
			>
				<slot name="description" />
			</span>
		</span>
	</span>
{/if}

<style lang="scss">
	@use '@carbon/motion' as motion;

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
		transition-duration: motion.$duration-fast-02;
		transition-timing-function: motion.motion(standard, expressive);
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
