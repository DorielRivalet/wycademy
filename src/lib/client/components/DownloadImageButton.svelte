<!--@component
For xyflow.
-->
<script lang="ts">
	import { toPng } from 'html-to-image';
	import {
		Panel,
		getNodesBounds,
		getViewportForBounds,
		useNodes,
	} from '@xyflow/svelte';
	import Button from 'carbon-components-svelte/src/Button/Button.svelte';
	import Download from 'carbon-icons-svelte/lib/Download.svelte';

	import type { CarbonTheme } from 'carbon-components-svelte/src/Theme/Theme.svelte';
	import { getContext } from 'svelte';
	import type { Writable } from 'svelte/store';

	const carbonThemeStore = getContext(
		Symbol.for('carbonTheme'),
	) as Writable<CarbonTheme>;

	interface Props {
		fileName: string;
	}

	let { fileName }: Props = $props();

	const nodes = useNodes();

	const imageWidth = 1024;
	const imageHeight = 768;

	function handleClick() {
		const nodesBounds = getNodesBounds($nodes);
		const viewport = getViewportForBounds(
			nodesBounds,
			imageWidth,
			imageHeight,
			0.5,
			2.0,
			0.2,
		);

		const viewportDomNode = document.querySelector<HTMLElement>(
			'.svelte-flow__viewport',
		)!;

		if (viewport) {
			toPng(viewportDomNode, {
				backgroundColor: $carbonThemeStore === 'g10' ? '#e6e9ef' : '#181825',
				width: imageWidth,
				height: imageHeight,
				style: {
					width: `${imageWidth}px`,
					height: `${imageHeight}px`,
					transform: `translate(${viewport.x}px, ${viewport.y}px) scale(${viewport.zoom})`,
				},
			}).then((dataUrl) => {
				const link = document.createElement('a');
				link.download = `${fileName}.png`;
				link.href = dataUrl;
				link.click();
			});
		}
	}
</script>

<Panel position="top-right">
	<Button kind="tertiary" icon={Download} on:click={handleClick}
		>Download</Button
	>
</Panel>
