<script lang="ts">
	export let backgroundColor: string = 'var(--ctp-surface0)';
	export let backgroundColorEnabled: string = 'var(--ctp-surface2)';
	export let size: string = 'var(--cds-spacing-07)';
	import { createEventDispatcher } from 'svelte';
	const dispatch = createEventDispatcher();

	function onClick(event: Event) {
		enabled = !enabled;
		dispatch('toggle', { enabled });
	}

	export let enabled = false;
</script>

<button
	class={!enabled ? 'button' : 'button-pressed'}
	style:background-color={!enabled ? backgroundColor : backgroundColorEnabled}
	style:width={size}
	on:click={onClick}
	style:height={size}><slot /></button
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
