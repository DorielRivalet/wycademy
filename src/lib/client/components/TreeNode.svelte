<!-- TreeNode.svelte -->
<script lang="ts">
	import { slide } from 'svelte/transition';
	import Self from './TreeNode.svelte';
	import { cubicInOut } from 'svelte/easing';
	import { page } from '$app/stores';
	import type { TreeItem } from '../types/tree-item';
	import { goto } from '$app/navigation';

	interface Props {
		item: TreeItem;
		defaultExpanded?: boolean;
	}

	let { item, defaultExpanded = false }: Props = $props();
	let isExpanded = $state(defaultExpanded);

	function toggleExpand() {
		isExpanded = !isExpanded;
	}

	function isNodeActive(node: TreeItem, path: string): boolean {
		if (node.href === path) return true;
		if (node.nodes) {
			return node.nodes.some((child) => isNodeActive(child, path));
		}
		return false;
	}

	// Make active state reactive by computing it within an effect
	let isActive = $derived(isNodeActive(item, $page.url.pathname));

	$effect(() => {
		// Auto-expand parent nodes if child is active
		if (isActive) {
			isExpanded = true;
		}
	});

	// Redirect if the node has an href but no child nodes
	function handleNodeClick() {
		if (!item.nodes?.length && item.href) {
			goto(item.href); // Navigate to the link
		} else {
			toggleExpand(); // Toggle expand for nodes with children
		}
	}
</script>

<li class="tree-node">
	<!-- svelte-ignore a11y_click_events_have_key_events -->
	<!-- svelte-ignore a11y_no_static_element_interactions -->
	<div
		class="node-content"
		onclick={handleNodeClick}
		class:active={isActive && item.href === $page.url.pathname}
	>
		{#if item.nodes?.length}
			<span class="expand-icon">
				{isExpanded ? '▼' : '▶'}
			</span>
		{/if}
		{#if item.icon}
			<span class="icon">
				{#if typeof item.icon === 'string'}
					<img width="24" src={item.icon} alt="Tree Item Icon" />
				{:else}
					<item.icon
						{...{
							background: item.iconProps?.background,
							size: '24px',
							currentMonster: item.iconProps?.currentMonster,
						}}
					/>
				{/if}
			</span>
		{/if}
		<p>{item.text}</p>
	</div>

	{#if item.nodes?.length && isExpanded}
		<ul
			transition:slide={{ duration: 150, easing: cubicInOut }}
			class="tree-children"
		>
			{#each item.nodes as node (node.id)}
				<Self item={node} {defaultExpanded} />
			{/each}
		</ul>
	{/if}
</li>

<style>
	.tree-node {
		margin: 0;
		padding: 0;
		list-style-type: none;
	}

	.node-content {
		display: flex;
		align-items: center;
		padding: 4px 8px;
		cursor: pointer;
		user-select: none;
	}

	.node-content:hover {
		background-color: var(--ctp-overlay0);
	}

	.node-content.active {
		transition-property: background-color color font-weight;
		transition-duration: 500ms;
		background-color: var(--ctp-surface1);
		color: var(--ctp-mauve);
		font-weight: 500;
	}

	.expand-icon {
		width: 20px;
		height: 20px;
		display: inline-flex;
		align-items: center;
		justify-content: center;
		margin-right: 4px;
		font-size: 0.8em;
	}

	.tree-children {
		margin: 0;
		padding-left: 24px;
	}

	.icon {
		margin-right: 0.25rem;
	}
</style>
