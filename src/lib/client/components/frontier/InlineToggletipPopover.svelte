<script lang="ts">
	import Button from 'carbon-components-svelte/src/Button/Button.svelte';
	import Popover from 'carbon-components-svelte/src/Popover/Popover.svelte';
	import Rotate from 'carbon-icons-svelte/lib/Rotate.svelte';
	import Tag from 'carbon-components-svelte/src/Tag/Tag.svelte';
	import { getTag } from '$lib/client/modules/frontier/functions';
	import type { PopoverPosition } from '$lib/client/modules/frontier/types';
	const positions: PopoverPosition[] = ['top', 'right', 'bottom', 'left'];

	function movePopover() {
		positionIndex++;
		positionIndex = positionIndex >= positions.length ? 0 : positionIndex;
		align = positions[positionIndex];
	}

	export let align: PopoverPosition = positions[1];
	export let open = false;
	export let ref: HTMLSpanElement;
	export let tag1 = '';
	export let tag2 = '';
	export let tag3 = '';
	export let title = '';
	export let subtitle = '';
	export let description = '';
	export let link = '';

	const maxTitleLength = 35;
	const maxSubtitleLength = 64;
	const maxTagLength = 16;

	let positionIndex = positions.findIndex((v) => v === align) ?? 0;
	let closeTimeout: NodeJS.Timeout;
	function millisecondsToDuration(duration: string) {
		return Number.parseFloat(duration.replace('ms', ''));
	}

	function handleClickOutside({ detail }) {
		if (ref?.contains(detail.target)) return;

		// Start the fade-out transition
		popoverClass = 'popover invisible';

		// Set a timeout to close the popover after the transition duration
		clearTimeout(closeTimeout);
		closeTimeout = setTimeout(() => {
			open = false;
		}, millisecondsToDuration('150ms')); // Adjust this to match your transition duration
	}

	$: popoverClass = open ? 'popover visible' : 'popover invisible';

	$: tag1Info = getTag(tag1);
	$: tag2Info = getTag(tag2);
	$: tag3Info = getTag(tag3);
</script>

<span class={popoverClass}>
	<Popover
		caret={true}
		light
		{open}
		bind:align
		on:click:outside={handleClickOutside}
	>
		<div class="container">
			<div class="contents-top">
				{#if link !== ''}
					<div class="image">
						<a href={link}>
							<slot name="image" />
						</a>
					</div>
					<div class="title link">
						<a href={link}>
							{title.substring(0, maxTitleLength)}
						</a>
					</div>
				{:else}
					<div class="image">
						<slot name="image" />
					</div>
					<div class="title">
						{title.substring(0, maxTitleLength)}
					</div>
				{/if}

				<div class="button">
					<Button
						on:click={() => movePopover()}
						iconDescription="Rotate"
						kind="ghost"
						size="small"
						icon={Rotate}
						tooltipPosition="left"
					/>
				</div>
				{#if subtitle !== ''}
					<div class="subtitle">{subtitle.substring(0, maxSubtitleLength)}</div>
				{/if}
				{#if description !== ''}
					<div class="description">{description}</div>
				{/if}
			</div>
			{#if tag1 !== ''}
				<hr />
				<div class="contents-bottom">
					<div class="tag1">
						<a href={tag1Info.link === '' ? '/' : tag1Info.link}>
							<Tag icon={tag1Info.icon} type={tag1Info.color} interactive
								>{tag1.substring(0, maxTagLength)}</Tag
							></a
						>
					</div>
					{#if tag2 !== ''}<div class="tag2">
							<a href={tag2Info.link === '' ? '/' : tag2Info.link}>
								<Tag icon={tag2Info.icon} type={tag2Info.color} interactive
									>{tag2.substring(0, maxTagLength)}</Tag
								></a
							>
						</div>{/if}
					{#if tag3 !== ''}<div class="tag3">
							<a href={tag3Info.link === '' ? '/' : tag3Info.link}>
								<Tag icon={tag3Info.icon} type={tag3Info.color} interactive
									>{tag3.substring(0, maxTagLength)}</Tag
								></a
							>
						</div>{/if}
				</div>
			{/if}
		</div>
	</Popover>
</span>

<style lang="scss">
	@use '@carbon/motion' as motion;

	.popover {
		transition:
			opacity motion.$duration-moderate-01 motion.motion(entrance, expressive),
			top motion.$duration-moderate-01 motion.motion(entrance, expressive);
		opacity: 1;
		position: absolute;
		top: 8rem;
	}

	.invisible {
		opacity: 0;
		top: 0rem;
		transition-timing-function: motion.motion(exit, expressive);
	}

	.visible {
		opacity: 1;
		top: 8rem;
		transition-timing-function: motion.motion(entrance, expressive);
	}

	hr {
		width: 100%;
		margin-bottom: 0;
	}

	.container {
		display: flex;
		gap: 0.5rem;
		padding: var(--cds-spacing-04);
		flex-direction: column;
		max-width: 48ch;
		overflow: hidden;
	}

	.link:hover {
		text-decoration: underline;
	}

	.image {
		grid-area: image;
		display: inline-block;
		max-width: 8ch;
	}

	.button {
		grid-area: button;
	}

	a {
		font-family: var(--font-body);
		font-size: 1rem;
		color: var(--ctp-text);
		text-decoration: none;
	}

	.title {
		display: -webkit-box;
		-webkit-line-clamp: 1; /* number of lines to show */
		line-clamp: 1;
		-webkit-box-orient: vertical;
		overflow: hidden;
		grid-area: title;
		font-weight: bold;
		height: fit-content;
	}

	.subtitle {
		display: -webkit-box;
		-webkit-line-clamp: 2; /* number of lines to show */
		line-clamp: 2;
		-webkit-box-orient: vertical;
		overflow: hidden;
		grid-area: subtitle;
		color: var(--ctp-subtext0);
	}

	.title,
	.subtitle {
		padding-left: 0.5rem;
		padding-top: 0;
		padding-bottom: 0;
		margin: 0;
	}

	.tag1,
	.tag2,
	.tag3 {
		display: -webkit-box;
		-webkit-line-clamp: 1; /* number of lines to show */
		line-clamp: 1;
		-webkit-box-orient: vertical;
		overflow: hidden;
	}

	.description {
		grid-area: description;
		text-wrap: wrap;
		margin-top: 1rem;
		display: -webkit-box;
		-webkit-line-clamp: 3; /* number of lines to show */
		line-clamp: 3;
		-webkit-box-orient: vertical;
		overflow: hidden;
	}

	.contents-top {
		display: grid;
		grid-template-areas:
			'image title button'
			'image subtitle subtitle'
			'description description description';
		gap: 0;
		grid-template-columns: auto 1fr auto;
		grid-template-rows: auto 1fr auto;
	}

	.contents-bottom {
		display: flex;
		gap: 0.5rem;
	}
</style>
