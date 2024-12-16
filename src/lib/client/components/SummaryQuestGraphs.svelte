<script lang="ts">
	import {
		ScaleTypes,
		type LineChart,
		type LineChartOptions,
	} from '@carbon/charts-svelte';
	import '@carbon/charts-svelte/styles.css';
	import NumberInput from 'carbon-components-svelte/src/NumberInput/NumberInput.svelte';
	import Dropdown from 'carbon-components-svelte/src/Dropdown/Dropdown.svelte';
	import { type SpeedrunInfo } from '../modules/frontier/quest';
	import type { CarbonTheme } from 'carbon-components-svelte/src/Theme/Theme.svelte';
	import { onMount, type Component } from 'svelte';
	import Loading from 'carbon-components-svelte/src/Loading/Loading.svelte';
	import {
		convertDictionaryIntInt,
		convertDictionaryIntIntInt,
	} from '../modules/frontier/strings';
	import { getMinutesSecondsFromFrames } from '../modules/time';

	function getChartOptions(
		dropdownOption: string,
		theme: CarbonTheme,
	): LineChartOptions {
		return {
			title: dropdownOption,
			theme: theme,
			legend: { enabled: true },
			points: { enabled: false },
			axes: {
				bottom: {
					title: 'Time (frames)',
					mapsTo: 'time',
					scaleType: ScaleTypes.LINEAR,
					ticks: {
						formatter: (tick, i) =>
							`${getMinutesSecondsFromFrames(tick as number)}`,
					},
				},
				left: {
					title: 'Value',
					mapsTo: 'value',
					scaleType: ScaleTypes.LINEAR,
				},
			},
		};
	}

	function getElapsedTimeEntries(
		entries: { time: number; value: number; group: string }[],
	) {
		let result: { group: string; time: number; value: number }[] = [];

		// Find the highest time value (starting frame)
		const startTime = Math.max(...entries.map((entry) => entry.time));

		// Compute elapsed time from the starting frame
		result = entries.map((entry) => {
			const elapsedTime = startTime - entry.time; // Convert to elapsed time
			return {
				group: entry.group,
				time: elapsedTime,
				value: entry.value,
			};
		});

		// Sort the result by elapsed time in ascending order
		result.sort((a, b) => a.time - b.time);

		// console.log(JSON.stringify(entries));
		// console.log(JSON.stringify(result));

		return result;
	}

	function calculateHitsTakenBlocked(
		hitsTakenBlocked: { [index: number]: { [index: number]: number } }[],
	): { [index: number]: number }[] {
		const result: { [index: number]: number }[] = [];

		// console.log(`hitsTakenBlocked: ${JSON.stringify(hitsTakenBlocked)}`);

		if (hitsTakenBlocked.length === 0) {
			return result;
		}

		let i = hitsTakenBlocked.length;

		hitsTakenBlocked.forEach((element) => {
			let time = parseInt(Object.keys(element)[0], 10);
			result.push({ [time]: i });
			i--;
		});

		// console.log(`result: ${JSON.stringify(result)}`);
		return result;
	}

	function calculateMonsterStatEntries(
		entries: { [index: number]: { [index: number]: number } }[],
	): { [index: number]: number }[] {
		const result: { [index: number]: number }[] = [];

		if (entries.length === 0) {
			return result;
		}

		entries.forEach((element) => {
			let time = parseInt(Object.keys(element)[0], 10);
			// Get the value of the inner entry
			const value = Object.values(element[time])[0];
			result.push({ [time]: value });
		});

		return result;
	}

	function getRunData(
		dropdownOption: string,
		hunt: SpeedrunInfo,
		group: string,
	) {
		let result: { time: number; value: number; group: string }[] = [];
		let convertedDictionary = [];
		switch (dropdownOption) {
			default:
				return result;
			case 'True Raw':
				convertedDictionary = convertDictionaryIntInt(
					hunt.AttackBuffDictionary,
				);
				// Map converted dictionary into the desired format
				result = convertedDictionary.map((entry) => {
					const time = parseInt(Object.keys(entry)[0]); // Extract time (key)
					const value = Object.values(entry)[0]; // Extract value
					return { time: time, value: value, group: group }; // Map to desired format
				});
				result = getElapsedTimeEntries(result);
				return result;
			case 'Hit Count':
				convertedDictionary = convertDictionaryIntInt(hunt.HitCountDictionary);
				// Map converted dictionary into the desired format
				result = convertedDictionary.map((entry) => {
					const time = parseInt(Object.keys(entry)[0]); // Extract time (key)
					const value = Object.values(entry)[0]; // Extract value
					return { time: time, value: value, group: group }; // Map to desired format
				});
				result = getElapsedTimeEntries(result);
				return result;
			case 'Hits per Second':
				convertedDictionary = convertDictionaryIntInt(
					hunt.HitsPerSecondDictionary,
				);
				// Map converted dictionary into the desired format
				result = convertedDictionary.map((entry) => {
					const time = parseInt(Object.keys(entry)[0]); // Extract time (key)
					const value = Object.values(entry)[0]; // Extract value
					return { time: time, value: value, group: group }; // Map to desired format
				});
				result = getElapsedTimeEntries(result);
				return result;

			case 'Damage Dealt':
				convertedDictionary = convertDictionaryIntInt(
					hunt.DamageDealtDictionary,
				);
				// Map converted dictionary into the desired format
				result = convertedDictionary.map((entry) => {
					const time = parseInt(Object.keys(entry)[0]); // Extract time (key)
					const value = Object.values(entry)[0]; // Extract value
					return { time: time, value: value, group: group }; // Map to desired format
				});
				result = getElapsedTimeEntries(result);
				return result;

			case 'Damage per Second':
				convertedDictionary = convertDictionaryIntInt(
					hunt.DamagePerSecondDictionary,
				);
				// Map converted dictionary into the desired format
				result = convertedDictionary.map((entry) => {
					const time = parseInt(Object.keys(entry)[0]); // Extract time (key)
					const value = Object.values(entry)[0]; // Extract value
					return { time: time, value: value, group: group }; // Map to desired format
				});
				result = getElapsedTimeEntries(result);
				return result;
			case 'Carts':
				convertedDictionary = convertDictionaryIntInt(hunt.CartsDictionary);
				// Map converted dictionary into the desired format
				result = convertedDictionary.map((entry) => {
					const time = parseInt(Object.keys(entry)[0]); // Extract time (key)
					const value = Object.values(entry)[0]; // Extract value
					return { time: time, value: value, group: group }; // Map to desired format
				});
				result = getElapsedTimeEntries(result);
				return result;
			case 'Hits Taken/Blocked':
				convertedDictionary = convertDictionaryIntIntInt(
					hunt.HitsTakenBlockedDictionary,
				);
				convertedDictionary = calculateHitsTakenBlocked(convertedDictionary);
				// Map converted dictionary into the desired format
				result = convertedDictionary.map((entry) => {
					const time = parseInt(Object.keys(entry)[0]); // Extract time (key)
					const value = Object.values(entry)[0]; // Extract value
					return { time: time, value: value, group: group }; // Map to desired format
				});
				result = getElapsedTimeEntries(result);
				return result;
			case 'Monster Health':
				let monster1HpConvertedDictionary = convertDictionaryIntIntInt(
					hunt.Monster1HPDictionary,
				);
				let monster2HpConvertedDictionary = convertDictionaryIntIntInt(
					hunt.Monster2HPDictionary,
				);
				let monster3HpConvertedDictionary = convertDictionaryIntIntInt(
					hunt.Monster3HPDictionary,
				);
				let monster4HpConvertedDictionary = convertDictionaryIntIntInt(
					hunt.Monster4HPDictionary,
				);
				monster1HpConvertedDictionary = calculateMonsterStatEntries(
					monster1HpConvertedDictionary,
				);
				monster2HpConvertedDictionary = calculateMonsterStatEntries(
					monster1HpConvertedDictionary,
				);
				monster3HpConvertedDictionary = calculateMonsterStatEntries(
					monster1HpConvertedDictionary,
				);
				monster4HpConvertedDictionary = calculateMonsterStatEntries(
					monster1HpConvertedDictionary,
				);

				// Map converted dictionary into the desired format
				result = [
					...monster1HpConvertedDictionary.map((entry) => {
						const time = parseInt(Object.keys(entry)[0]); // Extract time (key)
						const value = Object.values(entry)[0]; // Extract value
						return { time: time, value: value, group: `${group} 1` }; // Map to desired format
					}),
					...monster2HpConvertedDictionary.map((entry) => {
						const time = parseInt(Object.keys(entry)[0]); // Extract time (key)
						const value = Object.values(entry)[0]; // Extract value
						return { time: time, value: value, group: `${group} 2` }; // Map to desired format
					}),
					...monster3HpConvertedDictionary.map((entry) => {
						const time = parseInt(Object.keys(entry)[0]); // Extract time (key)
						const value = Object.values(entry)[0]; // Extract value
						return { time: time, value: value, group: `${group} 3` }; // Map to desired format
					}),
					...monster4HpConvertedDictionary.map((entry) => {
						const time = parseInt(Object.keys(entry)[0]); // Extract time (key)
						const value = Object.values(entry)[0]; // Extract value
						return { time: time, value: value, group: `${group} 4` }; // Map to desired format
					}),
				];
				result = getElapsedTimeEntries(result);
				return result;
			case 'Monster Attack Multiplier':
				convertedDictionary = convertDictionaryIntIntInt(
					hunt.Monster1AttackMultiplierDictionary,
				);
				convertedDictionary = calculateMonsterStatEntries(convertedDictionary);
				// Map converted dictionary into the desired format
				result = convertedDictionary.map((entry) => {
					const time = parseInt(Object.keys(entry)[0]); // Extract time (key)
					const value = Object.values(entry)[0]; // Extract value
					return { time: time, value: value, group: group }; // Map to desired format
				});
				result = getElapsedTimeEntries(result);
				return result;
			case 'Monster Defense Rate':
				convertedDictionary = convertDictionaryIntIntInt(
					hunt.Monster1DefenseRateDictionary,
				);
				convertedDictionary = calculateMonsterStatEntries(convertedDictionary);
				// Map converted dictionary into the desired format
				result = convertedDictionary.map((entry) => {
					const time = parseInt(Object.keys(entry)[0]); // Extract time (key)
					const value = Object.values(entry)[0]; // Extract value
					return { time: time, value: value, group: group }; // Map to desired format
				});
				result = getElapsedTimeEntries(result);
				return result;
			case 'Monster Poison Threshold':
				convertedDictionary = convertDictionaryIntIntInt(
					hunt.Monster1PoisonThresholdDictionary,
				);
				convertedDictionary = calculateMonsterStatEntries(convertedDictionary);
				// Map converted dictionary into the desired format
				result = convertedDictionary.map((entry) => {
					const time = parseInt(Object.keys(entry)[0]); // Extract time (key)
					const value = Object.values(entry)[0]; // Extract value
					return { time: time, value: value, group: group }; // Map to desired format
				});
				result = getElapsedTimeEntries(result);
				return result;
			case 'Monster Paralysis Threshold':
				convertedDictionary = convertDictionaryIntIntInt(
					hunt.Monster1ParalysisThresholdDictionary,
				);
				convertedDictionary = calculateMonsterStatEntries(convertedDictionary);
				// Map converted dictionary into the desired format
				result = convertedDictionary.map((entry) => {
					const time = parseInt(Object.keys(entry)[0]); // Extract time (key)
					const value = Object.values(entry)[0]; // Extract value
					return { time: time, value: value, group: group }; // Map to desired format
				});
				result = getElapsedTimeEntries(result);
				return result;
			case 'Monster Sleep Threshold':
				convertedDictionary = convertDictionaryIntIntInt(
					hunt.Monster1SleepThresholdDictionary,
				);
				convertedDictionary = calculateMonsterStatEntries(convertedDictionary);
				// Map converted dictionary into the desired format
				result = convertedDictionary.map((entry) => {
					const time = parseInt(Object.keys(entry)[0]); // Extract time (key)
					const value = Object.values(entry)[0]; // Extract value
					return { time: time, value: value, group: group }; // Map to desired format
				});
				result = getElapsedTimeEntries(result);
				return result;
			case 'Monster Blast Threshold':
				convertedDictionary = convertDictionaryIntIntInt(
					hunt.Monster1BlastThresholdDictionary,
				);
				convertedDictionary = calculateMonsterStatEntries(convertedDictionary);
				// Map converted dictionary into the desired format
				result = convertedDictionary.map((entry) => {
					const time = parseInt(Object.keys(entry)[0]); // Extract time (key)
					const value = Object.values(entry)[0]; // Extract value
					return { time: time, value: value, group: group }; // Map to desired format
				});
				result = getElapsedTimeEntries(result);
				return result;
			case 'Monster Stun Threshold':
				convertedDictionary = convertDictionaryIntIntInt(
					hunt.Monster1StunThresholdDictionary,
				);
				convertedDictionary = calculateMonsterStatEntries(convertedDictionary);
				// Map converted dictionary into the desired format
				result = convertedDictionary.map((entry) => {
					const time = parseInt(Object.keys(entry)[0]); // Extract time (key)
					const value = Object.values(entry)[0]; // Extract value
					return { time: time, value: value, group: group }; // Map to desired format
				});
				result = getElapsedTimeEntries(result);
				return result;

			case 'Hits Taken/Blocked per Second':
				convertedDictionary = convertDictionaryIntInt(
					hunt.HitsTakenBlockedPerSecondDictionary,
				);
				// Map converted dictionary into the desired format
				result = convertedDictionary.map((entry) => {
					const time = parseInt(Object.keys(entry)[0]); // Extract time (key)
					const value = Object.values(entry)[0]; // Extract value
					return { time: time, value: value, group: group }; // Map to desired format
				});
				result = getElapsedTimeEntries(result);
				return result;

			case 'Player Health':
				convertedDictionary = convertDictionaryIntInt(hunt.PlayerHPDictionary);
				// Map converted dictionary into the desired format
				result = convertedDictionary.map((entry) => {
					const time = parseInt(Object.keys(entry)[0]); // Extract time (key)
					const value = Object.values(entry)[0]; // Extract value
					return { time: time, value: value, group: group }; // Map to desired format
				});
				result = getElapsedTimeEntries(result);
				return result;
			case 'Player Stamina':
				convertedDictionary = convertDictionaryIntInt(
					hunt.PlayerStaminaDictionary,
				);
				// Map converted dictionary into the desired format
				result = convertedDictionary.map((entry) => {
					const time = parseInt(Object.keys(entry)[0]); // Extract time (key)
					const value = Object.values(entry)[0]; // Extract value
					return { time: time, value: value, group: group }; // Map to desired format
				});
				result = getElapsedTimeEntries(result);
				return result;
			case 'Actions per Minute':
				convertedDictionary = convertDictionaryIntInt(
					hunt.ActionsPerMinuteDictionary,
				);
				// Map converted dictionary into the desired format
				result = convertedDictionary.map((entry) => {
					const time = parseInt(Object.keys(entry)[0]); // Extract time (key)
					const value = Object.values(entry)[0]; // Extract value
					return { time: time, value: value, group: group }; // Map to desired format
				});
				result = getElapsedTimeEntries(result);
				return result;
			case 'Weapon Specific Buff':
				convertedDictionary = convertDictionaryIntInt(
					hunt.DualSwordsSharpensDictionary,
				);
				// Map converted dictionary into the desired format
				result = convertedDictionary.map((entry) => {
					const time = parseInt(Object.keys(entry)[0]); // Extract time (key)
					const value = Object.values(entry)[0]; // Extract value
					return { time: time, value: value, group: group }; // Map to desired format
				});
				result = getElapsedTimeEntries(result);
				return result;
		}

		// console.log(group);
		// console.log(JSON.stringify(result));
	}

	function getChartData(
		dropdownOption: string,
		runID1: number,
		runID2: number,
		hunt1?: SpeedrunInfo,
		hunt2?: SpeedrunInfo,
	) {
		if (runID1 === runID2 || runID1 === 0) {
			return [];
		}

		let runID1Data = hunt1
			? getRunData(dropdownOption, hunt1, `Run ID ${runID1}`)
			: [];
		let runID2Data = hunt2
			? getRunData(dropdownOption, hunt2, `Run ID ${runID2}`)
			: [];

		return [...runID1Data, ...runID2Data];
	}

	interface Props {
		runID1: number;
		runID2: number;
		theme: CarbonTheme;
		hunt1?: SpeedrunInfo;
		hunt2?: SpeedrunInfo;
	}

	let {
		runID1 = $bindable(),
		runID2 = $bindable(),
		theme = $bindable(),
		hunt1,
		hunt2,
	}: Props = $props();

	let dropdownOption = $state('True Raw');
	let chartLoaded = $state(false);
	let chart: Component<LineChart> = $state();
	let chartData = $derived(
		getChartData(dropdownOption, runID1, runID2, hunt1, hunt2),
	);
	let chartOptions: LineChartOptions = $derived(
		getChartOptions(dropdownOption, theme),
	);

	onMount(async () => {
		const charts = await import('@carbon/charts-svelte');
		chart = charts.LineChart;
		chartLoaded = true;
	});
</script>

<div>
	<div class="inputs">
		<NumberInput
			size="sm"
			min={0}
			step={1}
			bind:value={runID1}
			label={'Run ID 1'}
		/>
		<NumberInput
			size="sm"
			min={0}
			step={1}
			bind:value={runID2}
			label={'Run ID 2'}
		/>
		<Dropdown
			style="width: 256px"
			bind:selectedId={dropdownOption}
			titleText="Option"
			items={[
				{ id: 'True Raw', text: 'True Raw' },
				{ id: 'Hit Count', text: 'Hit Count' },
				{ id: 'Hits per Second', text: 'Hits per Second' },
				{ id: 'Damage Dealt', text: 'Damage Dealt' },
				{ id: 'Damage per Second', text: 'Damage per Second' },
				{ id: 'Carts', text: 'Carts' },
				{ id: 'Hits Taken/Blocked', text: 'Hits Taken/Blocked' },
				{
					id: 'Hits Taken/Blocked per Second',
					text: 'Hits Taken/Blocked per Second',
				},
				{ id: 'Player Health', text: 'Player Health' },
				{ id: 'Player Stamina', text: 'Player Stamina' },
				{ id: 'Actions per Minute', text: 'Actions per Minute' },
				{ id: 'Monster Health', text: 'Monster Health' },
				{ id: 'Monster Attack Multiplier', text: 'Monster Attack Multiplier' },
				{ id: 'Monster Defense Rate', text: 'Monster Defense Rate' },
				{ id: 'Monster Poison Threshold', text: 'Monster Poison Threshold' },
				{
					id: 'Monster Paralysis Threshold',
					text: 'Monster Paralysis Threshold',
				},
				{ id: 'Monster Sleep Threshold', text: 'Monster Sleep Threshold' },
				{ id: 'Monster Blast Threshold', text: 'Monster Blast Threshold' },
				{ id: 'Monster Stun Threshold', text: 'Monster Stun Threshold' },
				{ id: 'Weapon Specific Buff', text: 'Weapon Specific Buff' },
			]}
		/>
	</div>

	<div class="chart">
		{#if chartLoaded}
			{#if chartData.length > 0}
				{@const SvelteComponent = chart}
				<SvelteComponent data={chartData} options={chartOptions} />
			{:else}
				<div class="no-data">
					<p>Chart data empty or not found.</p>
					<p>Select a different Run ID or Option.</p>
				</div>
			{/if}
		{:else}
			<Loading withOverlay={false} />
		{/if}
	</div>
</div>

<style lang="scss">
	.inputs {
		display: flex;
		flex-wrap: wrap;
		gap: 1rem;
		align-items: center;
	}

	.no-data {
		display: flex;
		flex-direction: column;
		margin-top: 2rem;
	}
</style>
