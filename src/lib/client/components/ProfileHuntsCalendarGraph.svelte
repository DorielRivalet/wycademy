<script lang="ts">
	import { onMount, type Component } from 'svelte';
	import { getHexStringFromCatppuccinColor } from '../themes/catppuccin';
	import Dropdown from 'carbon-components-svelte/src/Dropdown/Dropdown.svelte';
	import DropdownSkeleton from 'carbon-components-svelte/src/Dropdown/DropdownSkeleton.svelte';
	import SkeletonPlaceholder from 'carbon-components-svelte/src/SkeletonPlaceholder/SkeletonPlaceholder.svelte';
	import type { CarbonTheme } from 'carbon-components-svelte/src/Theme/Theme.svelte';
	import TooltipDefinition from 'carbon-components-svelte/src/TooltipDefinition/TooltipDefinition.svelte';
	import Loading from 'carbon-components-svelte/src/Loading/Loading.svelte';
	import SkeletonText from 'carbon-components-svelte/src/SkeletonText/SkeletonText.svelte';
	import '@carbon/charts-svelte/styles.css';
	import {
		type RadarChart,
		type RadarChartOptions,
	} from '@carbon/charts-svelte';
	import type { OverlayHuntRank } from '../modules/frontier/types';

	let chart: Component<RadarChart> = $state();

	// Type definition
	type Hunt = {
		date: string;
		rankName: OverlayHuntRank;
		objectiveName: string;
	};

	// Original data
	const hunts: Hunt[] = [
		{
			date: '2024-06-11T11:58:42.0337156Z',
			rankName: '',
			objectiveName: 'Sparkling Zerureusu',
		},
		{
			date: '2024-06-12T12:58:42.0337156Z',
			rankName: 'G Rank ',
			objectiveName: 'Shogun Ceanataur',
		},
		{
			date: '2024-06-13T13:58:42.0337156Z',
			rankName: '',
			objectiveName: 'Blinking Nargacuga',
		},
		{
			date: '2024-06-13T11:58:42.0337156Z',
			rankName: 'Supremacy ',
			objectiveName: 'Doragyurosu',
		},
		{
			date: '2024-06-13T11:58:42.0337156Z',
			rankName: '',
			objectiveName: 'Burning Freezing Elzelion',
		},
		{
			date: '2024-06-14T11:58:42.0337156Z',
			rankName: 'Upper Shiten ',
			objectiveName: 'UNKNOWN',
		},
		{
			date: '2024-06-14T11:58:42.0337156Z',
			rankName: 'Zenith★4 ',
			objectiveName: 'Taikun Zamuza',
		},
		{
			date: '2024-06-14T11:58:42.0337156Z',
			rankName: 'G Rank ',
			objectiveName: 'Duremudira',
		},
		{
			date: '2024-06-14T11:58:42.0337156Z',
			rankName: '',
			objectiveName: 'Blitzkrieg Bogabadorumu',
		},
		{
			date: '2024-06-15T11:58:42.0337156Z',
			rankName: '',
			objectiveName: 'Bombardier Bogabadorumu',
		},
		{
			date: '2024-06-15T11:58:42.0337156Z',
			rankName: 'Lv9999 ',
			objectiveName: 'Fatalis',
		},
		{
			date: '2024-06-15T11:58:42.0337156Z',
			rankName: 'Lv9999 ',
			objectiveName: 'Crimson Fatalis',
		},
		{
			date: '2024-06-15T11:58:42.0337156Z',
			rankName: 'Supremacy ',
			objectiveName: 'Doragyurosu',
		},
		{
			date: '2024-06-15T11:58:42.0337156Z',
			rankName: 'Supremacy ',
			objectiveName: 'Doragyurosu',
		},
		{
			date: '2024-06-17T11:58:42.0337156Z',
			rankName: 'Supremacy ',
			objectiveName: 'Doragyurosu',
		},
		{
			date: '2024-06-17T11:58:42.0337156Z',
			rankName: 'Supremacy ',
			objectiveName: 'Doragyurosu',
		},
		{
			date: '2024-06-17T11:58:42.0337156Z',
			rankName: 'Supremacy ',
			objectiveName: 'Doragyurosu',
		},
		{
			date: '2024-06-17T11:58:42.0337156Z',
			rankName: 'Supremacy ',
			objectiveName: 'Doragyurosu',
		},
		{
			date: '2024-06-17T11:58:42.0337156Z',
			rankName: 'Supremacy ',
			objectiveName: 'Doragyurosu',
		},
		{
			date: '2024-06-17T11:58:42.0337156Z',
			rankName: 'Supremacy ',
			objectiveName: 'Doragyurosu',
		},
		{
			date: '2024-06-17T11:58:42.0337156Z',
			rankName: 'Supremacy ',
			objectiveName: 'Doragyurosu',
		},
		{
			date: '2024-06-17T11:58:42.0337156Z',
			rankName: 'Supremacy ',
			objectiveName: 'Doragyurosu',
		},
		{
			date: '2024-06-17T11:58:42.0337156Z',
			rankName: 'Supremacy ',
			objectiveName: 'Doragyurosu',
		},
		{
			date: '2024-06-17T11:58:42.0337156Z',
			rankName: 'Supremacy ',
			objectiveName: 'Doragyurosu',
		},
		{
			date: '2022-06-17T11:58:42.0337156Z',
			rankName: 'Supremacy ',
			objectiveName: 'Doragyurosu',
		},
		{
			date: '2023-06-17T11:58:42.0337156Z',
			rankName: 'Supremacy ',
			objectiveName: 'Doragyurosu',
		},
		{
			date: '2022-06-17T11:58:42.0337156Z',
			rankName: 'Supremacy ',
			objectiveName: 'Doragyurosu',
		},
		{
			date: '2025-06-17T11:58:42.0337156Z',
			rankName: 'Supremacy ',
			objectiveName: 'Doragyurosu',
		},
		{
			date: '2022-06-17T11:58:42.0337156Z',
			rankName: 'Supremacy ',
			objectiveName: 'Doragyurosu',
		},
	];

	const hunts2: Hunt[] = [
		{
			date: '2024-06-11T11:58:42.0337156Z',
			rankName: '',
			objectiveName: 'Sparkling Zerureusu',
		},
		{
			date: '2024-06-11T11:58:42.0337156Z',
			rankName: '',
			objectiveName: 'Sparkling Zerureusu',
		},
		{
			date: '2024-06-11T11:58:42.0337156Z',
			rankName: '',
			objectiveName: 'Sparkling Zerureusu',
		},
		{
			date: '2024-06-12T12:58:42.0337156Z',
			rankName: 'G Rank ',
			objectiveName: 'Shogun Ceanataur',
		},
		{
			date: '2024-06-13T13:58:42.0337156Z',
			rankName: '',
			objectiveName: 'Blinking Nargacuga',
		},
		{
			date: '2024-06-13T11:58:42.0337156Z',
			rankName: 'Supremacy ',
			objectiveName: 'Doragyurosu',
		},
		{
			date: '2024-06-13T11:58:42.0337156Z',
			rankName: '',
			objectiveName: 'Burning Freezing Elzelion',
		},
		{
			date: '2024-06-14T11:58:42.0337156Z',
			rankName: 'Upper Shiten ',
			objectiveName: 'UNKNOWN',
		},
		{
			date: '2024-06-14T11:58:42.0337156Z',
			rankName: 'Zenith★4 ',
			objectiveName: 'Taikun Zamuza',
		},
		{
			date: '2024-06-14T11:58:42.0337156Z',
			rankName: 'Zenith★4 ',
			objectiveName: 'Taikun Zamuza',
		},
		{
			date: '2024-06-14T11:58:42.0337156Z',
			rankName: 'Zenith★4 ',
			objectiveName: 'Taikun Zamuza',
		},
		{
			date: '2024-06-14T11:58:42.0337156Z',
			rankName: 'G Rank ',
			objectiveName: 'Duremudira',
		},
		{
			date: '2024-06-14T11:58:42.0337156Z',
			rankName: '',
			objectiveName: 'Blitzkrieg Bogabadorumu',
		},
		{
			date: '2024-06-15T11:58:42.0337156Z',
			rankName: '',
			objectiveName: 'Bombardier Bogabadorumu',
		},
		{
			date: '2024-06-15T11:58:42.0337156Z',
			rankName: 'Lv9999 ',
			objectiveName: 'Fatalis',
		},
		{
			date: '2024-06-15T11:58:42.0337156Z',
			rankName: 'Lv9999 ',
			objectiveName: 'Crimson Fatalis',
		},
	];

	const years = Array.from(
		new Set(hunts.map((hunt) => new Date(hunt.date).getFullYear())),
	).sort((a, b) => b - a);

	function getQuestTypeCount(hunts: Hunt[]) {
		let result = {
			other: 0,
			musou: 0,
			upperShiten: 0,
			conquestLv9999: 0,
			zenith: 0,
		};

		hunts.forEach((hunt) => {
			switch (hunt.rankName) {
				default:
					result.other += 1;
					return;
				case 'Upper Shiten ':
					result.upperShiten += 1;
					return;
				case 'Lv9999 ':
					result.conquestLv9999 += 1;
					return;
				case 'Zenith★4 ':
					result.zenith += 1;
					return;
				case 'G Rank ':
					switch (hunt.objectiveName) {
						default:
							result.other += 1;
							return;
					}

				case '':
					switch (hunt.objectiveName) {
						default:
							result.other += 1;
							return;
						case 'Thirsty Pariapuria':
						case 'Shifting Mi Ru':
						case 'Ruling Guanzorumu':
						case 'Blinking Nargacuga':
						case 'Blitzkrieg Bogabadorumu':
						case 'Howling Zinogre':
						case 'Sparkling Zerureusu':
						case 'Bombardier Bogabadorumu':
						case 'Burning Freezing Elzelion':
						case 'Arrogant Duremudira':
						case 'Golden Deviljho': // TODO?
							result.musou += 1;
							return;
					}
			}
		});

		return result;
	}

	async function generateChartData(selectedUser: string) {
		const huntsQuestTypesCount = getQuestTypeCount(hunts);
		let chartData = [];
		if (selectedUser !== 'None') {
			const huntsQuestTypesCount2 = getQuestTypeCount(hunts2);
			chartData.push(
				...[
					{
						user: 'User 2',
						type: 'Musou',
						count: huntsQuestTypesCount2.musou,
					},
					{
						user: 'User 2',
						type: 'Upper Shiten',
						count: huntsQuestTypesCount2.upperShiten,
					},
					{
						user: 'User 2',
						type: 'Zenith★4',
						count: huntsQuestTypesCount2.zenith,
					},
					{
						user: 'User 2',
						type: 'Conquest Lv9999',
						count: huntsQuestTypesCount2.conquestLv9999,
					},
					{
						user: 'User 2',
						type: 'Other',
						count: huntsQuestTypesCount2.other,
					},
				],
			);
		}
		chartData.push(
			...[
				{
					user: 'User',
					type: 'Musou',
					count: huntsQuestTypesCount.musou,
				},
				{
					user: 'User',
					type: 'Upper Shiten',
					count: huntsQuestTypesCount.upperShiten,
				},
				{
					user: 'User',
					type: 'Zenith★4',
					count: huntsQuestTypesCount.zenith,
				},
				{
					user: 'User',
					type: 'Conquest Lv9999',
					count: huntsQuestTypesCount.conquestLv9999,
				},
				{
					user: 'User',
					type: 'Other',
					count: huntsQuestTypesCount.other,
				},
			],
		);

		return chartData;
	}

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
	function getColor(count: number, date: string | null) {
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

	function getUniqueMonths(weeks) {
		const monthsSet = new Set();
		weeks.forEach((week) => {
			week.forEach((day) => {
				const date = new Date(day.date);
				monthsSet.add(date.toLocaleString('default', { month: 'short' }));
			});
		});
		return Array.from(monthsSet);
	}

	let weeks = $state([]);
	let selectedYear = $state(years[0]);
	let selectedUser = $state('None');
	let huntCount = $state(0);
	let chartData: { user: string; type: string; count: number }[] = $state();

	function updateWeeks(year: number) {
		weeks = organizeByWeeks(hunts, year);
		huntCount = countHuntsForYear(hunts, year);
	}

	let chartLoaded = $state(false);

	onMount(async () => {
		try {
			chartData = await generateChartData(selectedUser);
			const charts = await import('@carbon/charts-svelte');
			chart = charts.RadarChart;
			updateWeeks(selectedYear);
			chartLoaded = true;
		} catch (error) {
			console.error('Failed to initialize charts:', error);
		}
	});

	interface Props {
		theme: CarbonTheme;
		totalHuntsRank?: any;
		totalHuntsRankPercent?: any;
	}

	let {
		theme = $bindable(),
		totalHuntsRank = Math.trunc(Math.random() * 1000),
		totalHuntsRankPercent = Math.trunc(Math.random() * 100),
	}: Props = $props();
	let chartOptions = $derived({
		title: 'Quests overview',
		radar: {
			axes: {
				angle: 'type',
				value: 'count',
			},
			alignment: 'center',
		},
		data: {
			groupMapsTo: 'user',
		},
		legend: {
			alignment: 'center',
		},
		theme: theme,
		resizable: true,
	} as RadarChartOptions);
</script>

<div class="container">
	{#if weeks.length === 0 || !chartLoaded || !chartData || chartData.length === 0}
		<div class="loading-container">
			<div class="loading-container-top">
				<SkeletonText heading />
				<DropdownSkeleton style="width: 100%; height: 192px;" />
			</div>
			<SkeletonPlaceholder style="width: 100%; height: 192px;" />
			<Loading withOverlay={false} />
		</div>
	{:else}
		{@const SvelteComponent = chart}
		<div class="calendar-container">
			<p>
				<strong>Total quests completed: </strong>
				<a href="/">
					{hunts.length} (Rank #{totalHuntsRank}, Top {totalHuntsRankPercent}%)</a
				>
			</p>
			<span class="year-dropdown-container">
				<p>
					{huntCount}
					{huntCount === 1 ? 'quest' : 'quests'} completed in
				</p>
				<div>
					<Dropdown
						type="inline"
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
			</span>
			<div class="overview">
				<div class="calendar">
					{#key theme}
						<div class="calendar-graph-container">
							<span class="calendar-day-labels">
								{#each ['', '', 'Mon', '', 'Wed', '', 'Fri', ''] as day}
									<span class="calendar-day-label">{day}</span>
								{/each}
							</span>
							<div class="calendar-graph-labels-container">
								<span class="calendar-month-labels">
									{#each ['Jan', 'Feb', 'Mar', 'Apr', 'May', 'Jun', 'Jul', ' Aug', 'Sep', 'Oct', 'Nov', 'Dec'] as month}
										<span class="calendar-month-label">{month}</span>
									{/each}
								</span>
								<div class="calendar-graph">
									{#each Array(7) as _, day}
										{#each weeks as week}
											<TooltipDefinition
												direction="top"
												align="start"
												tooltipText={getTooltipText(
													week[day].count,
													week[day].date,
												)}
											>
												<span
													class="day"
													style="background-color: {getColor(
														week[day].count,
														week[day].date,
													)}"
												></span>
											</TooltipDefinition>
										{/each}
									{/each}
								</div>
							</div>
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
				<div class="overview-graph-container">
					<div class="overview-graph">
						<SvelteComponent data={chartData} options={chartOptions} />
					</div>
					<div class="comparison">
						<p>Compare with user:</p>
						<Dropdown
							type="inline"
							light={true}
							titleText="User Comparison"
							hideLabel
							selectedId={selectedUser}
							items={[
								{ id: 'None', text: 'None' },
								{ id: 'User2', text: 'User 2' },
							]}
							on:select={async (e) => {
								selectedUser = e.detail.selectedId;
								chartData = await generateChartData(selectedUser);
							}}
						/>
					</div>
				</div>
			</div>
		</div>
	{/if}
</div>

<style lang="scss">
	.container {
		display: flex;
	}

	.comparison {
		display: flex;
		gap: 1rem;
		align-items: center;
	}

	.loading-container {
		display: flex;
		width: 100%;
		gap: 1rem;
		flex-direction: column;
	}

	.loading-container-top {
		display: grid;
		gap: 1rem;
		grid-template-columns: 192px 64px;
	}

	.calendar-graph {
		display: grid;
		grid-template-rows: repeat(7, 1fr);
		grid-template-columns: repeat(53, 1fr);
		justify-content: start;
		gap: 4px;
		max-width: 100%;
		padding-right: 2rem;
		border-radius: 4px;
	}

	.calendar-day-labels {
		display: grid;
		grid-template-rows: repeat(8, 1fr);
		padding-top: 2rem;
		padding-left: 2rem;
	}

	/*TODO*/
	.calendar-month-labels {
		display: grid;
		grid-template-columns: repeat(12, 71px);
		max-width: 100%;
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

	.overview {
		border: 1px solid var(--ctp-surface1);
		border-radius: 4px;
		background-color: var(--ctp-mantle);
	}

	.calendar {
		display: flex;
		flex-direction: column;
		gap: 0.5rem;
		padding-bottom: 1rem;
		border-bottom: 1px solid var(--ctp-surface1);
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

	.year-dropdown-container {
		display: flex;
		align-items: center;
	}

	.calendar-graph-container {
		display: grid;
		grid-template-columns: 1fr auto;
		gap: 0.5rem;
	}

	.calendar-graph-labels-container {
		overflow-x: auto;
		overflow-y: auto;
		padding-top: 2rem;
		display: flex;
		flex-direction: column;
		gap: 0.25rem;
	}

	.overview-graph-container {
		padding: 1rem;
		text-align: start;
	}

	.overview-graph {
		overflow-x: auto;
		max-width: 70vw;
		height: 100%;
		overflow-y: hidden;
	}

	a {
		all: unset;
	}

	a:hover {
		color: var(--ctp-sky);
		text-decoration: underline;
	}
</style>
