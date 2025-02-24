<script lang="ts">
	import { getItemIcon } from '$lib/client/modules/frontier/items';
	import NumberInput from 'carbon-components-svelte/src/NumberInput/NumberInput.svelte';
	import InlineTooltip from './InlineTooltip.svelte';

	const myMissionTickets = [
		2, 2, 2, 3, 2, 2, 2, 2, 2, 2, 3, 2, 2, 2, 2, 2, 2, 4, 2, 2, 5, 4, 4, 4, 4,
		5, 4, 4, 5, 4, 4, 4, 4, 4, 4, 4, 4, 4, 4, 5, 4, 4, 4, 4, 4, 4, 4, 4, 4, 5,
		4, 4, 4, 4, 4, 4, 4, 5, 4, 4, 4, 4, 4, 5, 4, 4, 4, 5, 4, 4, 4, 4, 4, 4, 4,
		4, 5, 4, 5, 4, 4, 4, 4, 4, 5, 4, 4, 5, 4, 4, 4, 5, 4, 4, 4, 4, 4, 4, 4, 5,
		4, 4, 5, 4, 4, 5, 4, 4, 4, 4, 5, 4, 4, 4, 4, 4, 4, 4, 6, 4, 6, 6, 6, 6, 6,
		6, 8, 6, 6, 6, 6, 8, 6, 6, 6, 6, 8, 6, 6, 6, 6, 6, 6, 8, 6, 8, 6, 8, 6, 8,
		6, 6, 6, 6, 6, 8, 8, 8, 8, 8, 8, 8, 8, 8, 8, 8, 8, 8, 8, 8, 6, 6, 6, 8, 6,
		8, 6, 6, 8, 6, 8, 8, 6, 6, 6, 6, 8, 6, 6, 6, 6, 6, 8, 6, 6, 8, 6, 6, 6, 6,
		8, 6, 8, 8, 8, 6, 6, 10, 8, 10, 8, 6, 8, 6, 6, 6, 8, 10, 8, 8, 6, 6, 6, 6,
		8, 6, 6, 8, 8, 8, 6, 8, 6, 6, 8, 6, 6, 10, 8, 6, 10, 10, 10, 10, 10, 10, 10,
		10, 10, 10,
	];

	function getCurrentTicketsNeededForMaxLevel(
		currentMyMissionTickets: number,
		currentMyMissionLevel: number,
	) {
		// Get the array slice starting from the current level
		const remainingLevels = myMissionTickets.slice(currentMyMissionLevel);

		// Calculate the sum of tickets needed for remaining levels
		const ticketsNeededForRemaining = remainingLevels.reduce(
			(sum, tickets) => sum + tickets,
			0,
		);

		// Return the difference between needed tickets and current tickets
		return Math.max(0, ticketsNeededForRemaining - currentMyMissionTickets);
	}

	const minimumTicketsValue = 0;
	const maximumTicketsValue = 99999;
	const minimumLevelValue = 1;
	const maximumLevelValue = 250;

	const invalidTicketsValueText = `Invalid value. Must be between ${minimumTicketsValue} and ${maximumTicketsValue}`;

	const invalidLevelValueText = `Invalid value. Must be between ${minimumLevelValue} and ${maximumLevelValue}`;

	let tickets = $state(0);
	let level = $state(1);

	let currentTicketsNeededForMaxLevel = $derived(
		getCurrentTicketsNeededForMaxLevel(tickets, level - 1),
	);
</script>

<div class="true-raw-converter">
	<p><strong>My Mission Tickets Calculator</strong></p>
	<div class="flex-row-centered">
		<div class="number-input-container">
			<NumberInput
				light
				size="sm"
				step={1}
				min={minimumTicketsValue}
				max={maximumTicketsValue}
				bind:value={tickets}
				invalidText={invalidTicketsValueText}
				label={'Tickets'}
			/>
		</div>
		<div class="number-input-container">
			<NumberInput
				light
				size="sm"
				step={1}
				min={minimumLevelValue}
				max={maximumLevelValue}
				bind:value={level}
				invalidText={invalidLevelValueText}
				label={'Level'}
			/>
		</div>
	</div>
	<div class="paragraph-long-02">
		Total Tickets Needed for Lv250: <InlineTooltip
			tooltip="Item"
			text={`${currentTicketsNeededForMaxLevel}`}
			iconType="component"
			icon={getItemIcon('Ticket')}
		/>
	</div>
</div>

<style lang="scss">
	.true-raw-converter {
		width: max-content;
		display: flex;
		flex-direction: column;
		gap: 0.5rem;
		background-color: var(--ctp-surface0);
		border: 2px solid var(--ctp-surface1);
		border-radius: 8px;
		padding: 1rem;
	}

	.flex-row-centered {
		display: flex;
		gap: 1rem;
		flex-wrap: wrap;
		align-items: center;
	}

	.flex-column-centered {
		display: flex;
		gap: 1rem;
		flex-wrap: wrap;
		flex-direction: column;
		justify-content: center;
	}

	.number-input-container {
		margin-right: 1rem;
	}
</style>
