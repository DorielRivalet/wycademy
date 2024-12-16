<script lang="ts">
	import { onMount, onDestroy } from 'svelte';
	import { browser } from '$app/environment';

	// Optional props to customize the effect
	interface Props {
		perspective?: number;
		scale?: number;
		rotationIntensity?: number;
		glowOpacity?: number;
		children?: import('svelte').Snippet;
	}

	let {
		perspective = 1500,
		scale = 1.07,
		rotationIntensity = 1,
		glowOpacity = 0.33,
		children
	}: Props = $props();

	let wrapper: HTMLElement = $state();
	let bounds: DOMRect;
	let transform = $state('');
	let glowBackground = $state('');
	let mounted = false;

	function rotateToMouse(e: MouseEvent) {
		if (!bounds) return;

		const mouseX = e.clientX;
		const mouseY = e.clientY;
		const leftX = mouseX - bounds.x;
		const topY = mouseY - bounds.y;
		const center = {
			x: leftX - bounds.width / 2,
			y: topY - bounds.height / 2,
		};
		const distance = Math.sqrt(center.x ** 2 + center.y ** 2);

		transform = `
      scale3d(${scale}, ${scale}, ${scale})
      rotate3d(
        ${center.y / 100},
        ${-center.x / 100},
        0,
        ${Math.log(distance) * 2 * rotationIntensity}deg
      )
    `;

		glowBackground = `
      radial-gradient(
        circle at
        ${center.x * 2 + bounds.width / 2}px
        ${center.y * 2 + bounds.height / 2}px,
        rgba(255, 255, 255, ${glowOpacity}),
        rgba(0, 0, 0, 0.06)
      )
    `;
	}

	function handleMouseEnter() {
		if (!browser || !mounted) return;
		bounds = wrapper.getBoundingClientRect();
		window.addEventListener('mousemove', rotateToMouse);
	}

	function handleMouseLeave() {
		if (!browser || !mounted) return;
		window.removeEventListener('mousemove', rotateToMouse);
		transform = '';
		glowBackground = '';
	}

	onMount(() => {
		mounted = true;
	});

	onDestroy(() => {
		if (browser && mounted) {
			window.removeEventListener('mousemove', rotateToMouse);
		}
	});
</script>

<div class="perspective-wrapper" style="perspective: {perspective}px">
	<!-- svelte-ignore a11y_no_static_element_interactions -->
	<div
		class="effect-wrapper"
		bind:this={wrapper}
		onmouseenter={handleMouseEnter}
		onmouseleave={handleMouseLeave}
		style="transform: {transform}"
	>
		<div class="content">
			{@render children?.()}
			<div class="glow" style="background-image: {glowBackground}"></div>
		</div>
	</div>
</div>

<style>
	.perspective-wrapper {
		width: fit-content;
		height: fit-content;
	}

	.effect-wrapper {
		width: fit-content;
		height: fit-content;
		transition-duration: 300ms;
		transition-property: transform, box-shadow;
		transition-timing-function: ease-out;
		transform: rotate3d(0);
	}

	.content {
		position: relative;
		width: fit-content;
		height: fit-content;
	}

	.glow {
		position: absolute;
		width: 100%;
		height: 100%;
		left: 0;
		top: 0;
		pointer-events: none;
		border-radius: inherit;
	}
</style>
