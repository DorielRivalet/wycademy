<script lang="ts">
	import { onMount } from 'svelte';
	import { getHexStringFromCatppuccinColor } from '../themes/catppuccin';
	import Dropdown from 'carbon-components-svelte/src/Dropdown/Dropdown.svelte';
	import DropdownSkeleton from 'carbon-components-svelte/src/Dropdown/DropdownSkeleton.svelte';
	import SkeletonPlaceholder from 'carbon-components-svelte/src/SkeletonPlaceholder/SkeletonPlaceholder.svelte';
	import type { CarbonTheme } from 'carbon-components-svelte/src/Theme/Theme.svelte';

	// Type definition
	type Hunt = {
		date: string;
	};

	export let theme: CarbonTheme;

	// Original data
	const hunts: Hunt[] = [
		{ date: '2024-06-11T11:58:42.0337156Z' },
		{ date: '2024-06-12T12:58:42.0337156Z' },
		{ date: '2024-06-13T13:58:42.0337156Z' },
		{ date: '2024-06-13T11:58:42.0337156Z' },
		{ date: '2024-06-13T11:58:42.0337156Z' },
		{ date: '2024-06-14T11:58:42.0337156Z' },
		{ date: '2024-06-14T11:58:42.0337156Z' },
		{ date: '2024-06-14T11:58:42.0337156Z' },
		{ date: '2024-06-14T11:58:42.0337156Z' },
		{ date: '2024-06-15T11:58:42.0337156Z' },
		{ date: '2024-06-15T11:58:42.0337156Z' },
		{ date: '2024-06-15T11:58:42.0337156Z' },
		{ date: '2024-06-15T11:58:42.0337156Z' },
		{ date: '2024-06-15T11:58:42.0337156Z' },
		{ date: '2024-06-17T11:58:42.0337156Z' },
		{ date: '2024-06-17T11:58:42.0337156Z' },
		{ date: '2024-06-17T11:58:42.0337156Z' },
		{ date: '2024-06-17T11:58:42.0337156Z' },
		{ date: '2024-06-17T11:58:42.0337156Z' },
		{ date: '2024-06-17T11:58:42.0337156Z' },
		{ date: '2024-06-17T11:58:42.0337156Z' },
		{ date: '2024-06-17T11:58:42.0337156Z' },
		{ date: '2024-06-17T11:58:42.0337156Z' },
		{ date: '2024-06-17T11:58:42.0337156Z' },
		{ date: '2022-06-17T11:58:42.0337156Z' },
		{ date: '2023-06-17T11:58:42.0337156Z' },
		{ date: '2022-06-17T11:58:42.0337156Z' },
		{ date: '2025-06-17T11:58:42.0337156Z' },
		{ date: '2022-06-17T11:58:42.0337156Z' },
	];

	const years = Array.from(
		new Set(hunts.map((hunt) => new Date(hunt.date).getFullYear())),
	).sort((a, b) => b - a);

	// Function to generate all days of a year
	function getAllDaysOfYear(year: number) {
		const days = [];
		const date = new Date(year, 0, 1);
		while (date.getFullYear() === year) {
			days.push(new Date(date));
			date.setDate(date.getDate() + 1);
		}
		return days;
	}

	// Function to organize hunts by weeks
	function organizeByWeeks(hunts: Hunt[], year: number) {
		const allDays = getAllDaysOfYear(year);

		// Initialize a map with all days of the year
		const daysMap = new Map();
		allDays.forEach((day) => {
			daysMap.set(day.toISOString().split('T')[0], 0);
		});

		// Populate the map with the hunts
		hunts.forEach((hunt) => {
			const huntYear = new Date(hunt.date).getFullYear();
			if (huntYear === year) {
				const dateKey = hunt.date.split('T')[0];
				daysMap.set(dateKey, (daysMap.get(dateKey) || 0) + 1);
			}
		});

		// Convert map to an array organized by days of the week
		const weeks = [];
		let currentWeek = new Array(7)
			.fill(null)
			.map(() => ({ count: 0, date: null }));

		allDays.forEach((day, index) => {
			const dateKey = day.toISOString().split('T')[0];
			const dayOfWeek = day.getDay(); // Sunday - Saturday : 0 - 6

			currentWeek[dayOfWeek] = {
				count: daysMap.get(dateKey),
				date: day,
			};

			if (dayOfWeek === 6 || index === allDays.length - 1) {
				weeks.push([...currentWeek]);
				currentWeek = new Array(7)
					.fill(null)
					.map(() => ({ count: 0, date: null }));
			}
		});

		return weeks;
	}

	// Color function based on number of hunts
	function getColor(count: number, date: Date | null) {
		if (!date) {
			return getHexStringFromCatppuccinColor('surface0', theme);
		}

		if (count >= 5) return getHexStringFromCatppuccinColor('red', theme);
		if (count >= 3) return getHexStringFromCatppuccinColor('red', theme) + 'cc';
		if (count >= 2) return getHexStringFromCatppuccinColor('red', theme) + '99';
		if (count >= 1) return getHexStringFromCatppuccinColor('red', theme) + '66';
		return getHexStringFromCatppuccinColor('surface1', theme);
	}

	// Tooltip text function
	function getTooltipText(count: number, date: Date | null) {
		if (!date) return 'No date available.';

		const options = { year: 'numeric', month: 'long', day: 'numeric' };
		const dateString = date.toLocaleDateString(undefined, options);

		if (count <= 0) return `No hunts on ${dateString}.`;
		if (count === 1) return `${count} hunt on ${dateString}.`;
		return `${count} hunts on ${dateString}.`;
	}

	// Count the total hunts for a year
	function countHuntsForYear(hunts: Hunt[], year: number) {
		return hunts.reduce((count, hunt) => {
			const huntYear = new Date(hunt.date).getFullYear();
			return huntYear === year ? count + 1 : count;
		}, 0);
	}

	let weeks = [];
	let selectedYear = years[0];
	let huntCount = 0;

	function updateWeeks(year: number) {
		weeks = organizeByWeeks(hunts, year);
		huntCount = countHuntsForYear(hunts, year);
	}

	onMount(() => {
		updateWeeks(selectedYear);
	});
</script>

<div class="container">
	{#if weeks.length === 0}
		<SkeletonPlaceholder style="width: 100%; height: 192px;" />
		<DropdownSkeleton style="width: 100%; height: 192px;" />
	{:else}
		<div class="calendar-container">
			<p>
				{huntCount} quests completed in {selectedYear}
			</p>
			<div class="calendar">
				{#key theme}
					<div class="calendar-graph">
						{#each Array(7) as _, day}
							{#each weeks as week}
								<div
									title={getTooltipText(week[day].count, week[day].date)}
									class="day"
									style="background-color: {getColor(
										week[day].count,
										week[day].date,
									)}"
								></div>
							{/each}
						{/each}
					</div>
					<div class="calendar-legend">
						<span>Less</span>
						<span class="calendar-legend-slots">
							<span
								class="day"
								style="background-color: {getColor(
									0,
									'2024-06-11T11:58:42.0337156Z',
								)}"
							></span>
							<span
								class="day"
								style="background-color: {getColor(
									1,
									'2024-06-11T11:58:42.0337156Z',
								)}"
							></span>
							<span
								class="day"
								style="background-color: {getColor(
									2,
									'2024-06-11T11:58:42.0337156Z',
								)}"
							></span>
							<span
								class="day"
								style="background-color: {getColor(
									3,
									'2024-06-11T11:58:42.0337156Z',
								)}"
							></span>
							<span
								class="day"
								style="background-color: {getColor(
									5,
									'2024-06-11T11:58:42.0337156Z',
								)}"
							></span>
						</span>
						<span>More</span>
					</div>
				{/key}
			</div>
		</div>
		<div>
			<Dropdown
				light={true}
				titleText="Year"
				hideLabel
				selectedId={selectedYear}
				items={years.map((year) => ({ id: year, text: year.toString() }))}
				on:select={(e) => {
					selectedYear = e.detail.selectedId;
					updateWeeks(selectedYear);
				}}
			/>
		</div>
	{/if}
</div>

<style lang="scss">
	@media (min-width: 320px) {
		.container {
			display: grid;
			grid-template-rows: 1fr auto;
			gap: 1rem;
		}
	}

	@media (min-width: 1056px) {
		.container {
			display: grid;
			grid-template-columns: 7fr 1fr;
			gap: 1rem;
		}
	}

	.calendar-graph {
		display: grid;
		grid-template-rows: repeat(7, 1fr);
		grid-template-columns: repeat(53, 1fr);
		justify-content: start;
		gap: 4px;
		max-width: 100%;
		overflow-x: auto;
		padding-left: 2rem;
		padding-right: 2rem;
		padding-top: 2rem;
		border-radius: 4px;
	}

	.day {
		width: 12px;
		height: 12px;
		border-radius: 2px;
		padding: 0;
		margin: 0;
	}

	.calendar-container {
		display: flex;
		flex-direction: column;
		gap: 1rem;
	}

	.calendar {
		display: flex;
		flex-direction: column;
		border: 1px solid var(--ctp-surface1);
		gap: 0.5rem;
	}

	.calendar-legend {
		justify-content: end;
		padding-right: 2rem;
		color: var(--ctp-subtext0);
		display: flex;
		gap: 0.5rem;
	}

	.calendar-legend-slots {
		display: flex;
		flex-direction: row;
		gap: 0.5rem;
	}
</style>
