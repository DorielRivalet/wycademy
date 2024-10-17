<!--TODO: Save to profile your results-->
<script lang="ts">
	import type { MultipleChoiceItem } from '../modules/multiple-choice';
	import Book from 'carbon-icons-svelte/lib/Book.svelte';
	import Restart from 'carbon-icons-svelte/lib/Restart.svelte';
	import NextOutline from 'carbon-icons-svelte/lib/NextOutline.svelte';
	import Button from 'carbon-components-svelte/src/Button/Button.svelte';
	import '@carbon/charts-svelte/styles.css';
	import { createEventDispatcher, onMount, type ComponentType } from 'svelte';
	import {
		type GaugeChart,
		type GaugeChartOptions,
	} from '@carbon/charts-svelte';
	import Loading from 'carbon-components-svelte/src/Loading/Loading.svelte';
	import { getHexStringFromCatppuccinColor } from '../themes/catppuccin';
	import type { CarbonTheme } from 'carbon-components-svelte/src/Theme/Theme.svelte';
	import { getContext } from 'svelte';
	import type { Writable } from 'svelte/store';
	import ProgressIndicator from 'carbon-components-svelte/src/ProgressIndicator/ProgressIndicator.svelte';
	import ProgressStep from 'carbon-components-svelte/src/ProgressIndicator/ProgressStep.svelte';
	import RadioButtonGroup from 'carbon-components-svelte/src/RadioButtonGroup/RadioButtonGroup.svelte';
	import RadioButton from 'carbon-components-svelte/src/RadioButton/RadioButton.svelte';
	import { isArray } from 'mathjs';
	import MatchItem from './MatchItem.svelte';
	import TooltipIcon from 'carbon-components-svelte/src/TooltipIcon/TooltipIcon.svelte';
	import Information from 'carbon-icons-svelte/lib/Information.svelte';

	import RankingItem from './RankingItem.svelte';

	const dispatch = createEventDispatcher();

	// Utility function to shuffle an array
	function shuffleArray<T>(array: T[]): T[] {
		for (let i = array.length - 1; i > 0; i--) {
			const j = Math.floor(Math.random() * (i + 1));
			[array[i], array[j]] = [array[j], array[i]];
		}

		return array;
	}

	function onClickNext(
		answer:
			| number
			| string
			| string[]
			| boolean
			| boolean[]
			| [string, string][],
		solution:
			| number
			| string
			| string[]
			| boolean
			| boolean[]
			| [string, string][],
	) {
		// Comparison logic for scoring
		const isCorrect = (() => {
			if (Array.isArray(answer) && Array.isArray(solution)) {
				if (Array.isArray(answer[0]) && Array.isArray(solution[0])) {
					// Sort both arrays of tuples
					const sortedAnswer = [...answer].sort((a, b) =>
						a[0].localeCompare(b[0]),
					);
					const sortedSolution = [...solution].sort((a, b) =>
						a[0].localeCompare(b[0]),
					);

					// Handle tuple arrays (e.g., matching questions)
					return sortedAnswer.every((tuple, i) => {
						return (
							tuple[0] === sortedSolution[i][0] &&
							tuple[1] === sortedSolution[i][1]
						);
					});
				} else {
					// Handle string[], boolean[], number[] etc.
					return JSON.stringify(answer) === JSON.stringify(solution);
				}
			} else {
				// Handle number, string, boolean, etc.
				return answer.toString() === solution.toString();
			}
		})();

		if (isCorrect) {
			currentScore += 1;
		}

		currentItemIndex++;
		currentAnswer = '';

		if (currentItemIndex < items.length) {
			randomizeCurrentOptions();
		}

		// Check if quiz is complete and score is perfect
		if (currentItemIndex === items.length && currentScore === maxScore) {
			dispatch('perfectScore');
		}
	}

	function onClickRestart() {
		currentItemIndex = 0;
		currentScore = 0;
		currentAnswer = '';
		items = shuffleArray([...items]); // Shuffle stems
		randomizeCurrentOptions();
	}

	function getGaugeColor(theme: CarbonTheme, obtained: number, total: number) {
		const defaultColor = '#000000';

		const obtainedPercent = (obtained / total) * 100;

		if (obtainedPercent <= 0 || obtainedPercent > 100) {
			return defaultColor;
		} else if (obtainedPercent > 0 && obtainedPercent <= 20) {
			return getHexStringFromCatppuccinColor('red', theme);
		} else if (obtainedPercent > 20 && obtainedPercent <= 40) {
			return getHexStringFromCatppuccinColor('peach', theme);
		} else if (obtainedPercent > 40 && obtainedPercent <= 60) {
			return getHexStringFromCatppuccinColor('yellow', theme);
		} else if (obtainedPercent > 60 && obtainedPercent <= 80) {
			return getHexStringFromCatppuccinColor('green', theme);
		} else if (obtainedPercent > 80 && obtainedPercent <= 99) {
			return getHexStringFromCatppuccinColor('blue', theme);
		} else if (obtainedPercent === 100) {
			return getHexStringFromCatppuccinColor('sky', theme);
		} else {
			return defaultColor;
		}
	}

	function getGaugeValue(obtained: number, total: number) {
		const decimalPlaces = 2;
		const obtainedPercent = (obtained / total) * 100;

		/**https://stackoverflow.com/questions/6134039/format-number-to-always-show-2-decimal-places*/
		const truncatedResult = new Intl.NumberFormat('en-US', {
			minimumFractionDigits: decimalPlaces,
			maximumFractionDigits: decimalPlaces,
		}).format(obtainedPercent);

		return Number(truncatedResult);
	}

	function randomizeCurrentOptions() {
		if (!items[currentItemIndex]?.options) return;

		const currentOptions = items[currentItemIndex].options;

		// Check if it's a matching question (two sets of options)
		if (
			Array.isArray(currentOptions) &&
			Array.isArray(currentOptions[0]) &&
			Array.isArray(currentOptions[1])
		) {
			const [set1, set2] = currentOptions as [string[], string[]];
			items[currentItemIndex].options = [
				shuffleArray([...set1]),
				shuffleArray([...set2]),
			];
		} else {
			// Shuffle regular single set of options
			items[currentItemIndex].options = shuffleArray([...currentOptions]);
		}
	}

	export let items: MultipleChoiceItem[];
	export let category: string;

	const carbonThemeStore = getContext(
		Symbol.for('carbonTheme'),
	) as Writable<CarbonTheme>;

	let currentItemIndex = 0;
	let currentScore = 0;

	let resultsGauge: ComponentType<GaugeChart>;
	let resultsGaugeLoaded = false;

	let currentAnswer:
		| number
		| string
		| string[]
		| boolean
		| boolean[]
		| [string, string][] = '';

	$: resultsGaugeColor = getGaugeColor(
		$carbonThemeStore,
		currentScore,
		maxScore,
	);

	$: resultsGaugeOptions = {
		theme: $carbonThemeStore,
		resizable: true,
		toolbar: {
			enabled: false,
		},
		gauge: {
			type: 'full',
			alignment: 'center',
		},
		color: {
			scale: {
				value: resultsGaugeColor,
			},
		},
	} as GaugeChartOptions;

	$: resultsGaugeData = [
		{
			group: 'value',
			value: getGaugeValue(currentScore, maxScore),
		},
	];

	$: currentItem = items[currentItemIndex] ?? undefined;
	$: currentSolution = currentItem?.solutions ?? undefined;
	$: maxScore = items.length;

	onMount(async () => {
		const charts = await import('@carbon/charts-svelte');
		resultsGauge = charts.GaugeChart;
		resultsGaugeLoaded = true;
		items = shuffleArray([...items]); // Shuffle stems on initialization
		randomizeCurrentOptions(); // Shuffle options for the first item
	});
</script>

<div class="container">
	<div class="category">
		<div class="name">
			<Book size={32} />
			<p>{category}</p>
		</div>
	</div>
	<ProgressIndicator preventChangeOnClick currentIndex={currentItemIndex}>
		{#each items as item, i}
			<ProgressStep label={`${i + 1}`} />
		{/each}
	</ProgressIndicator>
	{#if currentItemIndex + 1 <= items.length}
		<div class="items">
			<!--true/false-->
			{#if currentItem !== undefined && currentItem.solutions !== undefined && currentItem.format === undefined && currentItem.options === null && typeof currentItem.solutions === 'boolean' && typeof currentItem.stem === 'string'}
				<p class="spaced-paragraph">{currentItem.stem}</p>
				<RadioButtonGroup
					required={true}
					orientation="vertical"
					name={currentItem.stem}
					bind:selected={currentAnswer}
				>
					<RadioButton labelText="True" value={'true'} />
					<RadioButton labelText="False" value={'false'} />
				</RadioButtonGroup>
				<!--single-->
			{:else if currentItem !== undefined && currentItem.solutions !== undefined && currentItem.format === undefined && isArray(currentItem.options) && typeof currentItem.stem === 'string'}
				<p class="spaced-paragraph">{currentItem.stem}</p>
				<RadioButtonGroup
					required={true}
					orientation="vertical"
					name={currentItem.stem}
					bind:selected={currentAnswer}
				>
					{#each currentItem.options as option}
						<RadioButton
							labelText={option.toString()}
							value={option.toString()}
						/>
					{/each}
				</RadioButtonGroup>
				<!--matching-->
			{:else if currentItem !== undefined && currentItem.solutions !== undefined && currentItem.format === 'matching' && isArray(currentItem.options) && typeof currentItem.stem === 'string'}
				<div class="matching-objective">
					<TooltipIcon
						tooltipText="Select an item in the first column, then select an item in the second column. To undo your choice, repeat the same action."
						icon={Information}
						align="start"
					/>
					<p class="spaced-paragraph">
						{currentItem.stem}
					</p>
				</div>
				<MatchItem
					options={currentItem.options}
					on:change={(e) => (currentAnswer = e.detail.connections)}
				/>
				<!--ranking-->
			{:else if currentItem !== undefined && currentItem.format === 'ranking'}
				<p class="spaced-paragraph">{currentItem.stem}</p>
				<RankingItem
					items={currentItem.options}
					on:change={(e) => (currentAnswer = e.detail.items)}
				/>
			{:else}
				<p></p>
			{/if}
		</div>
	{:else}
		<p>
			You completed the quiz! Your final score is: {currentScore}/{maxScore}
		</p>
		<div class="gauge-container">
			<div class="gauge">
				{#if resultsGaugeLoaded}
					<svelte:component
						this={resultsGauge}
						data={resultsGaugeData}
						options={resultsGaugeOptions}
					/>
				{:else}
					<Loading withOverlay={false} />
				{/if}
			</div>
		</div>
		{#if currentScore === maxScore}
			<p>Congratulations! You've obtained the perfect score.</p>
		{/if}
		<p>Would you like to retry?</p>
	{/if}
	<div>
		{#if currentItemIndex + 1 < items.length}
			<Button
				disabled={currentAnswer === ''}
				iconDescription="Next"
				icon={NextOutline}
				on:click={() => onClickNext(currentAnswer, currentSolution)}
				kind="primary">Next</Button
			>
		{:else if currentItemIndex + 1 === items.length}
			<Button
				iconDescription="View Results"
				disabled={currentAnswer === ''}
				icon={NextOutline}
				on:click={() => onClickNext(currentAnswer, currentSolution)}
				kind="primary">View Results</Button
			>
		{:else}
			<Button
				iconDescription="Retry"
				icon={Restart}
				on:click={onClickRestart}
				kind="primary">Restart</Button
			>
		{/if}
	</div>
</div>

<style lang="scss">
	@use '@carbon/type' as type;

	.container {
		background-color: var(--ctp-surface0);
		border: 1px solid var(--ctp-surface1);
		border-radius: 8px;
		margin-bottom: 2rem;
		margin-top: 2rem;
		padding: 1rem;
		display: flex;
		flex-direction: column;
		gap: 2rem;
	}

	.matching-objective {
		display: flex;
		gap: 0.5rem;
		align-items: center;
	}

	.category {
		display: flex;
		flex-direction: column;
		gap: 0.25rem;

		.name {
			display: flex;
			gap: 0.5rem;

			p {
				@include type.type-style('heading-03');
			}
		}
	}

	.gauge-container {
		display: flex;
	}

	.gauge {
		display: flex;
		min-width: 196px;
		min-height: 196px;
	}
</style>
