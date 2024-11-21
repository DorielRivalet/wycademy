<!-- TreeView.svelte -->
<script lang="ts">
	import TreeNode from './TreeNode.svelte';
	import type { Component } from 'svelte';

	interface TreeItem {
		id: string;
		text: string;
		href?: string;
		icon?: Component | string;
		nodes?: TreeItem[];
		iconProps?: Object;
	}

	interface Props {
		items?: TreeItem[];
		defaultExpanded?: boolean;
	}

	let { items = [], defaultExpanded = false }: Props = $props();
</script>

<ul class="tree-view">
	{#each items as item (item.id)}
		<TreeNode {item} {defaultExpanded} />
	{/each}
</ul>

<style>
	.tree-view {
		list-style-type: none;
		padding-left: 0;
		margin: 0;
	}
</style>
