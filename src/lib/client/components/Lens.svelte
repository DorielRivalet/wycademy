<script lang="ts">
	import { scale } from 'svelte/transition';

	export let zoomFactor = 1.5;
	export let lensSize = 170;
	export let isStatic = false;
	export let position = { x: 200, y: 150 };
	export let hovering: boolean;

	let mousePosition = { x: 100, y: 100 };

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

<!-- svelte-ignore a11y-no-static-element-interactions -->
<div
	class="magnifying-container"
	on:mouseenter={() => (hovering = true)}
	on:mouseleave={() => (hovering = false)}
	on:mousemove={handleMouseMove}
>
	<slot></slot>
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
				<slot></slot>
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
				<slot />
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
