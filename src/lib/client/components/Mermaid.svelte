<script lang="ts">
	import mermaid from 'mermaid';
	import Loading from 'carbon-components-svelte/src/Loading/Loading.svelte';
	import { getContext, onMount } from 'svelte';
	import type { Writable } from 'svelte/store';
	import { type CarbonTheme } from 'carbon-components-svelte/src/Theme/Theme.svelte';

	interface Props {
		diagram: string;
		browser: boolean;
	}

	let { diagram, browser }: Props = $props();

	const carbonThemeStore = getContext(
		Symbol.for('carbonTheme'),
	) as Writable<CarbonTheme>;

	async function renderDiagram(siteTheme: string, mermaidTheme: string) {
		if (!browser) return;
		mermaidTheme = siteTheme === 'g10' ? 'default' : 'dark';
		const { svg } = await mermaid.render(
			'mermaid',
			getDiagram(mermaidTheme, diagram),
		);
		container!.innerHTML = svg;
	}

	function getDiagram(mermaidTheme: string, diagram: string) {
		return `\
	%%{init: {'theme':'${mermaidTheme}'}}%%

	${diagram}`;
	}

	let mermaidTheme = $state($carbonThemeStore === 'g10' ? 'default' : 'dark');
	let diagramResult = $state(getDiagram(mermaidTheme, diagram));
	let container: HTMLElement | undefined = $state();

	$effect(() => {
		diagramResult && renderDiagram($carbonThemeStore, mermaidTheme);
	});

	onMount(() => {
		mermaid.initialize({
			startOnLoad: false,
			flowchart: { useMaxWidth: false },
			fontFamily: 'IBM Plex Sans',
		});
		mermaid.contentLoaded();
	});
</script>

<div class="mermaid-container">
	<!-- TODO: not responsive-->
	{#if !browser}
		<Loading withOverlay={false} />
	{:else}
		<pre><code bind:this={container}></code></pre>
	{/if}
</div>

<style lang="scss">
	.mermaid-container {
		max-width: 80vw;
		overflow-x: auto;
		margin: 0 auto;
		margin-bottom: 2rem;
		margin-top: 2rem;
	}
</style>
