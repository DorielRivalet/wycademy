<script lang="ts">
	import { Handle, Position, type NodeProps } from '@xyflow/svelte';
	import type { Writable } from 'svelte/store';
	import InlineTooltip from './InlineTooltip.svelte';
	import type { ComponentType, SvelteComponent } from 'svelte';
	import Tag from 'carbon-components-svelte/src/Tag/Tag.svelte';

	type $$Props = NodeProps;

	interface Props {
		data: {
		iconColor: Writable<string>;
		icon: Writable<SvelteComponent | string>;
		iconType: Writable<'file' | 'component'>;
		text: Writable<string>;
		tooltip: Writable<string>;
		nodeType: Writable<
			| 'input-horizontal'
			| 'default-horizontal'
			| 'output-horizontal'
			| 'input-vertical'
			| 'default-vertical'
			| 'output-vertical'
		>;
		tags: Writable<
			{
				text: string;
				icon: ComponentType<SvelteComponent>;
				color:
					| 'red'
					| 'magenta'
					| 'purple'
					| 'blue'
					| 'cyan'
					| 'teal'
					| 'green'
					| 'gray'
					| 'cool-gray'
					| 'warm-gray'
					| 'high-contrast'
					| 'outline';
			}[]
		>;
		backgroundColor: Writable<string>;
	};
		[key: string]: any
	}

	let { data, ...rest }: Props = $props();

	const {
		iconColor,
		icon,
		iconType,
		text,
		tooltip,
		nodeType,
		tags,
		backgroundColor,
	} = data;

	rest;
</script>

<div class="inlinetooltip" style="background-color: {$backgroundColor}">
	{#if $nodeType.includes('output') || $nodeType.includes('default')}
		<Handle
			type="target"
			position={$nodeType.includes('horizontal') ? Position.Left : Position.Top}
		/>
	{/if}
	<div class="content">
		<InlineTooltip
			icon={$icon}
			iconColor={$iconColor}
			iconType={$iconType}
			text={$text}
			tooltip={$tooltip}
		/>
		{#if $tags.length > 0}
			<div class="tags">
				{#each $tags as tag}
					<Tag icon={tag.icon} type={tag.color} size="sm">{tag.text}</Tag>
				{/each}
			</div>
		{/if}
	</div>
	{#if $nodeType.includes('input') || $nodeType.includes('default')}
		<Handle
			type="source"
			position={$nodeType.includes('horizontal')
				? Position.Right
				: Position.Bottom}
		/>
	{/if}
</div>

<style lang="scss">
	.inlinetooltip {
		height: 100%;
		display: flex;
		justify-content: center;
		align-items: center;
		flex-direction: column;
		width: 100%;
	}

	/*TODO: border radius*/
	.content {
		display: flex;
		flex-direction: column;
		gap: 0.25rem;
		flex-wrap: wrap;
	}

	.tags {
		display: flex;
		gap: 0.125rem;
		flex-wrap: wrap;
	}
</style>
