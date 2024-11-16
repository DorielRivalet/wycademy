<script lang="ts">
	import { createEventDispatcher } from 'svelte';

	interface Props {
		color: string;
		isPressed?: boolean;
		disabled?: boolean;
		children?: import('svelte').Snippet;
	}

	let {
		color,
		isPressed = false,
		disabled = false,
		children
	}: Props = $props();

	const dispatch = createEventDispatcher();

	function handleMouseDown() {
		if (disabled) return;
		dispatch('press');
	}

	function handleMouseUp() {
		if (disabled) return;
		dispatch('release');
	}

	function handleMouseLeave() {
		if (isPressed) {
			dispatch('release');
		}
	}
</script>

<button
	class="simon-button"
	class:pressed={isPressed}
	class:disabled
	onmousedown={handleMouseDown}
	onmouseup={handleMouseUp}
	onmouseleave={handleMouseLeave}
>
	{@render children?.()}
</button>

<style>
	.simon-button {
		all: unset;
		padding: 1rem;
		border-radius: 8px;
		border: 4px solid var(--ctp-surface1);
		border-style: outset;
		width: var(--cds-spacing-07);
		cursor: pointer;
		transition:
			transform 0.1s,
			filter 0.1s;
		background-color: var(--ctp-surface0);
		position: relative;
		overflow: hidden;
	}

	.pressed {
		transform: scale(0.95);
		filter: brightness(1.2);
		border-style: inset;
	}

	.disabled {
		cursor: not-allowed;
		opacity: 0.7;
	}
</style>
