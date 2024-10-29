<script lang="ts">
	import { writable } from 'svelte/store';
	import ELK from 'elkjs/lib/elk.bundled.js';
	import {
		SvelteFlow,
		Background,
		Position,
		ConnectionLineType,
		Controls,
		useSvelteFlow,
		type Node,
		type Edge,
	} from '@xyflow/svelte';
	import InlineTooltipNode from '$lib/client/components/frontier/InlineTooltipNode.svelte';
	import '@xyflow/svelte/dist/style.css';
	import { onMount } from 'svelte';
	import DownloadImageButton from './DownloadImageButton.svelte';

	export let initialNodes: Node[];
	export let initialEdges: Edge[];
	export let colorMode: 'system' | 'light' | 'dark';
	export let direction: 'RIGHT' | 'DOWN' = 'RIGHT';
	export let nodeWidth: number = 245;
	export let nodeHeight: number = 80;
	export let fileName: string;

	const nodes = writable<Node[]>([]);
	const edges = writable<Edge[]>([]);

	const nodeTypes = {
		'inline-tooltip': InlineTooltipNode,
	};

	const { fitView } = useSvelteFlow();

	const elk = new ELK();

	// Elk has a *huge* amount of options to configure. To see everything you can
	// tweak check out:
	//
	// - https://www.eclipse.org/elk/reference/algorithms.html
	// - https://www.eclipse.org/elk/reference/options.html
	const elkOptions = {
		'elk.algorithm': 'layered',
		'elk.layered.spacing.nodeNodeBetweenLayers': '96',
		'elk.spacing.nodeNode': '64',
	};

	function getLayoutedElements(nodes: Node[], edges: Edge[], options = {}) {
		const isHorizontal = options?.['elk.direction'] === 'RIGHT';
		const graph = {
			id: 'root',
			layoutOptions: options,
			children: nodes.map((node) => ({
				...node,
				// Adjust the target and source handle positions based on the layout
				// direction.
				targetPosition: isHorizontal ? Position.Left : Position.Top,
				sourcePosition: isHorizontal ? Position.Right : Position.Bottom,

				// Hardcode a width and height for elk to use when layouting.
				width: nodeWidth,
				height: nodeHeight,
			})),
			edges: edges,
		};

		return elk
			.layout(graph)
			.then((layoutedGraph) => ({
				nodes: layoutedGraph.children.map((node) => ({
					...node,
					// React Flow expects a position property on the node instead of `x`
					// and `y` fields.
					position: { x: node.x, y: node.y },
				})),

				edges: layoutedGraph.edges,
			}))
			.catch(console.error);
	}

	function onLayout(direction: string, useInitialNodes = false) {
		const opts = { 'elk.direction': direction, ...elkOptions };
		const ns = useInitialNodes ? initialNodes : $nodes;
		const es = useInitialNodes ? initialEdges : $edges;

		getLayoutedElements(ns, es, opts).then(
			({ nodes: layoutedNodes, edges: layoutedEdges }) => {
				$nodes = layoutedNodes;
				$edges = layoutedEdges;

				fitView();

				window.requestAnimationFrame(() => fitView());
			},
		);
	}

	onMount(() => {
		onLayout(direction, true);
	});
</script>

<div class="svelte-flow-container">
	<SvelteFlow
		{colorMode}
		{nodes}
		{edges}
		elementsSelectable={false}
		nodesConnectable={false}
		nodesDraggable={false}
		{nodeTypes}
		fitView
		connectionLineType={ConnectionLineType.SmoothStep}
		defaultEdgeOptions={{ type: 'smoothstep', animated: true }}
	>
		<Background bgColor={'var(--ctp-mantle)'} />
		<Controls showLock={false} />
		<DownloadImageButton {fileName} />
	</SvelteFlow>
</div>

<style lang="scss">
	.svelte-flow-container {
		height: 90vh;
		margin-top: 2rem;
		margin-bottom: 2rem;
	}
</style>
