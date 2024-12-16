<script lang="ts">
	import { scale } from 'svelte/transition';

	interface Props {
		zoomFactor?: number;
		lensSize?: number;
		isStatic?: boolean;
		position?: any;
		hovering: boolean;
		children?: import('svelte').Snippet;
	}

	let {
		zoomFactor = 1.5,
		lensSize = 170,
		isStatic = false,
		position = $bindable({ x: 200, y: 150 }),
		hovering = $bindable(),
		children
	}: Props = $props();

	let mousePosition = $state({ x: 100, y: 100 });

	const handleMouseMove = (e: {
		currentTarget: { getBoundingClientRect: () => any };
		clientX: number;
		clientY: number;
	}) => {
		const rect = e.currentTarget.getBoundingClientRect();
		const x = e.clientX - rect.left;
		const y = e.clientY - rect.top;
		mousePosition = { x, y };
		position = { x, y };
	};
</script>

<!-- svelte-ignore a11y_no_static_element_interactions -->
<div
	class="magnifying-container"
	onmouseenter={() => (hovering = true)}
	onmouseleave={() => (hovering = false)}
	onmousemove={handleMouseMove}
>
	{@render children?.()}
	{#if isStatic && hovering}
		<div
			in:scale
			out:scale={{ duration: 400 }}
			class="lens-overlay static"
			style="
			mask-image: radial-gradient(circle {lensSize /
				2}px at {position.x}px {position.y}px, black 100%, transparent 100%);
			-webkit-mask-image: radial-gradient(circle {lensSize /
				2}px at {position.x}px {position.y}px, black 100%, transparent 100%);
			transform-origin: {position.x}px {position.y}px;
		"
		>
			<div
				class="zoomed-content"
				style="transform: scale({zoomFactor}); transform-origin: {position.x}px {position.y}px;"
			>
				{@render children?.()}
			</div>
		</div>
	{:else if hovering}
		<div
			transition:scale={{ duration: 400 }}
			class="lens-overlay"
			style="
			mask-image: radial-gradient(circle {lensSize /
				2}px at {mousePosition.x}px {mousePosition.y}px, black 100%, transparent 100%);
			-webkit-mask-image: radial-gradient(circle {lensSize /
				2}px at {mousePosition.x}px {mousePosition.y}px, black 100%, transparent 100%);
			transform-origin: {mousePosition.x}px {mousePosition.y}px;
		"
		>
			<div
				class="zoomed-content"
				style="transform: scale({zoomFactor}); transform-origin: {mousePosition.x}px {mousePosition.y}px;"
			>
				{@render children?.()}
			</div>
		</div>
	{/if}
</div>

<style lang="scss">
	.magnifying-container {
		position: relative;
		overflow: hidden;
		border-radius: 1rem;
		z-index: 20;
		cursor: none;
	}

	.lens-overlay {
		position: absolute;
		inset: 0;
		overflow: hidden;
		z-index: 50;

		&.static {
			// Static lens styles can be added here if needed
		}

		.zoomed-content {
			position: absolute;
			inset: 0;
		}
	}
</style>
