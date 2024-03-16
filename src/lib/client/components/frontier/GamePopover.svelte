<script lang="ts">
	import Button from 'carbon-components-svelte/src/Button/Button.svelte';
	import Popover from 'carbon-components-svelte/src/Popover/Popover.svelte';
	import Rotate from 'carbon-icons-svelte/lib/Rotate.svelte';
	import Tag from 'carbon-components-svelte/src/Tag/Tag.svelte';
	import { getTag } from '$lib/client/modules/frontier/functions';

	type Position =
		| 'top'
		| 'top-left'
		| 'top-right'
		| 'bottom'
		| 'bottom-left'
		| 'bottom-right'
		| 'left'
		| 'left-bottom'
		| 'left-top'
		| 'right'
		| 'right-bottom'
		| 'right-top';
	const positions: Position[] = ['top', 'right', 'bottom', 'left'];

	function movePopover() {
		positionIndex++;
		positionIndex = positionIndex >= positions.length ? 0 : positionIndex;
		align = positions[positionIndex];
	}

	export let align: Position = positions[0];
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

	$: tag1Info = getTag(tag1);
	$: tag2Info = getTag(tag2);
	$: tag3Info = getTag(tag3);
</script>

<Popover
	caret={true}
	light
	bind:open
	bind:align
	on:click:outside={({ detail }) => {
		open = ref?.contains(detail.target) || false;
	}}
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

<style>
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
	}

	.subtitle {
		display: -webkit-box;
		-webkit-line-clamp: 2; /* number of lines to show */
		line-clamp: 2;
		-webkit-box-orient: vertical;
		overflow: hidden;
		grid-area: subtitle;
		color: var(--ctp-subtext0);
		line-height: 1em;
	}

	.title,
	.subtitle {
		padding-left: 0.5rem;
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
