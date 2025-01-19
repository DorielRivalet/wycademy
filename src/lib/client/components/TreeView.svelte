<!-- TreeView.svelte -->
<script lang="ts">
	import type { TreeItem } from '../types/tree-item';
	import TreeNode from './TreeNode.svelte';

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
