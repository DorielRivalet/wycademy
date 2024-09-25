<script lang="ts">
	import { createEventDispatcher } from 'svelte';

	const dispatch = createEventDispatcher();

	export let options: [string[], string[]];

	$: column1Options = options[0];
	$: column2Options = options[1];

	let selectedOption1: string | null = null;
	let connections: [string, string][] = [];

	function handleClickColumn1(option: string) {
		if (selectedOption1 === option) {
			selectedOption1 = null;
		} else {
			selectedOption1 = option;
		}
	}

	function handleClickColumn2(option: string) {
		if (!selectedOption1) return;

		const existingConnectionIndex = connections.findIndex(
			([item1, item2]) => item1 === selectedOption1 && item2 === option,
		);

		if (existingConnectionIndex > -1) {
			connections.splice(existingConnectionIndex, 1);
		} else {
			connections.push([selectedOption1, option]);
		}

		selectedOption1 = null;

		connections = connections;

		dispatch('change', { connections });
	}

	$: isConnected1 = (option: string) =>
		connections.some(([item1]) => item1 === option);

	$: isConnected2 = (option: string) =>
		connections.some(([, item2]) => item2 === option);

	$: isSelected = (option: string) => selectedOption1 === option;
</script>

<div class="connections">
	{#each connections as connection}
		<p class="spaced-paragraph">{connection[0]} — {connection[1]}</p>
	{/each}
</div>

<div class="container">
	<div class="column">
		{#each column1Options as option}
			<button
				class="option {isSelected(option) ? 'selected' : ''} {isConnected1(
					option,
				)
					? 'connected'
					: ''}"
				on:click={() => handleClickColumn1(option)}
			>
				{option}
			</button>
		{/each}
	</div>
	<div class="column">
		{#each column2Options as option}
			<button
				class="option {isConnected2(option) ? 'connected' : ''}"
				on:click={() => handleClickColumn2(option)}
			>
				{option}
			</button>
		{/each}
	</div>
</div>

<style lang="scss">
	.container {
		display: flex;
		flex-direction: row;
		gap: var(--cds-spacing-10);
	}

	.column {
		display: flex;
		flex-direction: column;
		gap: 1rem;
	}

	.option {
		all: unset;
		border: 1px solid var(--ctp-surface2);
		border-radius: 8px;
		background-color: var(--ctp-surface1);
		padding: 1rem;
		text-align: center;

		&.selected {
			border-color: var(--ctp-blue);
		}

		&.connected {
			background-color: var(--ctp-green);
			color: var(--ctp-mantle);
		}
	}
</style>
