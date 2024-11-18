<!--
@component
Shows text next to an icon inline. You can use either a component or a image import as the icon. When clicking the title, show the popover contents.
-->
<script lang="ts">
	import { browser } from '$app/environment';
	import InlineToggletipPopover from './InlineToggletipPopover.svelte';
	import type { PopoverPosition } from '$lib/client/modules/frontier/types';
	import QuestionMarkIconWhite from '$lib/client/components/frontier/icon/item/Question_Mark_Icon_White.svelte';
	import breakpointObserver from 'carbon-components-svelte/src/Breakpoint/breakpointObserver';
	import { createEventDispatcher } from 'svelte';
	import { getTag } from '$lib/client/modules/frontier/tags';

	const dispatch = createEventDispatcher();
	const breakpointSize = breakpointObserver();
	const breakpointLargerThanSmall = breakpointSize.largerThan('sm');

	/** File: images such as webp or gif. Component: svelte files.*/
	export let iconType: 'component' | 'file' = 'component';
	/** If the icon is not loading, change the iconType.*/
	export let icon: any = QuestionMarkIconWhite;

	/** The route to navigate to when clicking the title or icon in the popover.*/
	export let link: string;
	/** The main category of the entity.*/
	export let tag1: string;
	export let tag2 = '';
	export let tag3 = '';
	/** Used as popover title and the text next to the icon.*/
	export let title: string;
	export let subtitle: string;
	/** The description in the popover.*/
	export let description: string;
	/** The alignment of the popover.*/
	export let align: PopoverPosition = 'right';

	export let popoverIconType: 'component' | 'file' = 'component';
	export let popoverIcon: any = QuestionMarkIconWhite;

	let open = false;
	let ref: HTMLSpanElement | null = null;

	function handleFocus() {
		if (!browser) return;

		if ($breakpointLargerThanSmall) {
			open = !open;
		} else {
			changeModal();
		}
	}

	function changeModal() {
		dispatch('openModal', {
			heading: title,
			label: subtitle,
			link: link,
			popoverIcon: popoverIcon,
			popoverIconType: popoverIconType,
			description: description,
			tag1: tag1,
			tag2: tag2,
			tag3: tag3,
			tag1Info: getTag(tag1),
			tag2Info: getTag(tag2),
			tag3Info: getTag(tag3),
		});
	}
</script>

<span class="container">
	<span bind:this={ref} style:position="relative">
		<InlineToggletipPopover
			bind:open
			bind:ref
			bind:link
			bind:tag1
			bind:tag2
			bind:tag3
			bind:title
			bind:subtitle
			bind:description
			bind:align
			><div slot="image">
				{#if popoverIconType === 'component'}
					<svelte:component this={popoverIcon} />
				{:else}
					<img class="popover-image" src={popoverIcon} alt={title} />
				{/if}
			</div></InlineToggletipPopover
		>

		<!--TODO better logic-->
		{#if iconType === 'file'}
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
					src={icon}
					alt={title}
				/>
			</span>
		{:else}
			<span
				class="icon hoverable"
				on:click={(e) => handleFocus()}
				role="button"
				tabindex="0"
				on:keypress={(e) => handleFocus()}
			>
				<svelte:component this={icon} />
			</span>
		{/if}
		<span
			on:click={(e) => handleFocus()}
			role="button"
			tabindex="0"
			on:keypress={(e) => handleFocus()}
			class="description underline"
		>
			{title}
		</span>
	</span>
</span>

<style lang="scss">
	@use '@carbon/motion' as motion;

	.description {
		color: var(--ctp-blue);
		font-family: var(--font-body);
		font-size: 1rem;
	}

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
