<script lang="ts">
	import { createEventDispatcher } from 'svelte';
	const dispatch = createEventDispatcher();

	function onClick(event: Event) {
		enabled = !enabled;
		dispatch('toggle', { enabled });
	}

	interface Props {
		backgroundColor?: string;
		backgroundColorEnabled?: string;
		size?: string;
		enabled?: boolean;
		children?: import('svelte').Snippet;
	}

	let {
		backgroundColor = 'var(--ctp-surface0)',
		backgroundColorEnabled = 'var(--ctp-surface2)',
		size = 'var(--cds-spacing-07)',
		enabled = $bindable(false),
		children
	}: Props = $props();
</script>

<button
	class={!enabled ? 'button' : 'button-pressed'}
	style:background-color={!enabled ? backgroundColor : backgroundColorEnabled}
	style:width={size}
	onclick={onClick}
	style:height={size}>{@render children?.()}</button
>

<style lang="scss">
	.button {
		all: unset;
		padding: 1rem;
		border-radius: 8px;
		border: 4px solid var(--ctp-surface1);
		border-style: outset;
	}

	.button-pressed {
		all: unset;
		padding: 1rem;
		border-radius: 8px;
		border: 4px solid var(--ctp-surface1);
		border-style: inset;
	}
</style>
