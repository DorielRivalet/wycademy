<script lang="ts">
	import { Handle, Position, type NodeProps } from '@xyflow/svelte';
	import type { Writable } from 'svelte/store';
	import InlineTooltip from './InlineTooltip.svelte';
	import type { ComponentType, SvelteComponent } from 'svelte';
	import Tag from 'carbon-components-svelte/src/Tag/Tag.svelte';

	type $$Props = NodeProps;

	export let data: {
		iconColor: Writable<string>;
		icon: Writable<SvelteComponent | string>;
		iconType: Writable<'file' | 'component'>;
		text: Writable<string>;
		tooltip: Writable<string>;
		nodeType: Writable<'input' | 'default' | 'output'>;
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
	};

	const { iconColor, icon, iconType, text, tooltip, nodeType, tags } = data;

	$$restProps;
</script>

<div class="inlinetooltip">
	{#if $nodeType === 'output' || $nodeType === 'default'}
		<Handle type="target" position={Position.Left} />
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
	{#if $nodeType === 'input' || $nodeType === 'default'}
		<Handle type="source" position={Position.Right} />
	{/if}
</div>

<style lang="scss">
	.inlinetooltip {
		padding: 0.5rem;
		border: 1px solid var(--ctp-surface1);
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
