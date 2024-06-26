<script lang="ts">
	import { getItemIcon } from '../modules/frontier/functions';
	import InlineTooltip from './frontier/InlineTooltip.svelte';
	import TrophyWhite from './frontier/icon/TrophyWhite.svelte';
	import BookIconWhite from './frontier/icon/item/Book_Icon_White.svelte';
	import MapIconWhite from './frontier/icon/item/Map_Icon_White.svelte';
	import '@carbon/charts-svelte/styles.css';
	import { theme } from '$lib/client/stores/theme';
	import { onMount, type ComponentType } from 'svelte';
	import {
		type LineChart,
		type GaugeChart,
		type MeterChart,
		type MeterChartOptions,
		type GaugeChartOptions,
		type LineChartOptions,
		Statuses,
		ScaleTypes,
	} from '@carbon/charts-svelte';
	import Loading from 'carbon-components-svelte/src/Loading/Loading.svelte';
	import type { CarbonTheme } from 'carbon-components-svelte/src/Theme/Theme.svelte';
	import {
		getCatppuccinFlavorFromTheme,
		getHexStringFromCatppuccinColor,
	} from '../themes/catppuccin';

	export let huntCount = Math.trunc(Math.random() * 1000);
	export let obtainedAchievements = Math.trunc(Math.random() * 1000);
	export let totalAchievements =
		obtainedAchievements + Math.trunc(Math.random() * 1000);
	export let obtainedTitles = Math.trunc(Math.random() * 1000);
	export let totalTitles = obtainedTitles + Math.trunc(Math.random() * 1000);

	export let huntCountRank = Math.trunc(Math.random() * 1000);
	export let huntCountRankPercent = Math.trunc(Math.random() * 100);
	export let obtainedAchievementsRank = Math.trunc(Math.random() * 1000);
	export let obtainedAchievementsRankPercent = Math.trunc(Math.random() * 100);
	export let titlesRank = Math.trunc(Math.random() * 1000);
	export let titlesRankPercent = Math.trunc(Math.random() * 100);

	function randomChoice(arr: any[]) {
		return arr[Math.floor(arr.length * Math.random())];
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

	const playerServers = [
		'Rain Frontier Server',
		'Mezelounge',
		'Arca',
		'Monster Hunter Frontier: Renewal',
		'MHF-Z Ancient Server',
	];

	const achievementsMeterData = [
		{
			group: 'bronze',
			value: 150,
		},
		{
			group: 'silver',
			value: 100,
		},
		{
			group: 'gold',
			value: 50,
		},
		{
			group: 'platinum',
			value: 25,
		},
	];

	const titlesGaugeData = [
		{
			group: 'value',
			value: getGaugeValue(obtainedTitles, totalTitles),
		},
	];

	let achievementsMeter: ComponentType<MeterChart>;
	let achievementsMeterLoaded = false;
	let titlesGauge: ComponentType<GaugeChart>;
	let titlesGaugeLoaded = false;

	$: achievementsMeterOptions = {
		toolbar: {
			enabled: false,
		},
		legend: {
			enabled: false,
		},
		meter: {
			showLabels: false,
			proportional: {
				total: 450,
			},
		},
		color: {
			scale: {
				bronze: getHexStringFromCatppuccinColor('maroon', $theme),
				silver: getHexStringFromCatppuccinColor('lavender', $theme),
				gold: getHexStringFromCatppuccinColor('yellow', $theme),
				platinum: getHexStringFromCatppuccinColor('teal', $theme),
			},
		},
		theme: $theme,
	} as MeterChartOptions;

	$: titlesGaugeColor = getGaugeColor($theme, obtainedTitles, totalTitles);

	$: titlesGaugeOptions = {
		theme: $theme,
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
				value: titlesGaugeColor,
			},
		},
	} as GaugeChartOptions;

	onMount(async () => {
		const charts = await import('@carbon/charts-svelte');
		achievementsMeter = charts.MeterChart;
		achievementsMeterLoaded = true;
		titlesGauge = charts.GaugeChart;
		titlesGaugeLoaded = true;
	});
</script>

<div class="stats-summary">
	<div class="chart-container achievements">
		<p>
			<InlineTooltip
				text="Achievements: "
				icon={TrophyWhite}
				iconType="component"
				tooltip="Achievements"
			/>
			{obtainedAchievements}/{totalAchievements} (Rank #{obtainedAchievementsRank},
			Top {obtainedAchievementsRankPercent}%)
		</p>
		<div class="meter">
			{#if achievementsMeterLoaded}
				<svelte:component
					this={achievementsMeter}
					data={achievementsMeterData}
					options={achievementsMeterOptions}
				/>
			{:else}
				<Loading withOverlay={false} />
			{/if}
		</div>
	</div>
	<div class="chart-container titles">
		<p>
			<InlineTooltip
				text="Titles: "
				icon={BookIconWhite}
				iconType="component"
				tooltip="Titles"
			/>
			{obtainedTitles}/{totalTitles} (Rank #{titlesRank}, Top {titlesRankPercent}%)
		</p>
		<div class="gauge">
			{#if titlesGaugeLoaded}
				<svelte:component
					this={titlesGauge}
					data={titlesGaugeData}
					options={titlesGaugeOptions}
				/>
			{:else}
				<Loading withOverlay={false} />
			{/if}
		</div>
	</div>
	<div class="total-hunts">
		<p>
			<InlineTooltip
				icon={getItemIcon('Ticket')}
				tooltip="Quests"
				text={'Total Hunts: '}
			/>{huntCount} (Rank #{huntCountRank}, Top {huntCountRankPercent}%)
		</p>
	</div>
	<div class="server">
		<p>
			<InlineTooltip
				icon={MapIconWhite}
				tooltip="Server"
				text={'Server: '}
			/>{randomChoice(playerServers)}
		</p>
	</div>
</div>

<style lang="scss">
	@media (min-width: 320px) {
		.stats-summary {
			display: grid;
			grid-template-areas:
				'achievements'
				'titles'
				'total-hunts'
				'server';
			gap: var(--cds-spacing-06);
			padding: 1rem;
			border-radius: 8px;
			background-color: var(--ctp-mantle);
		}
	}

	@media (min-width: 1056px) {
		.stats-summary {
			display: grid;
			grid-template-areas:
				'achievements titles'
				'total-hunts titles'
				'server titles';
			gap: var(--cds-spacing-06);
			padding: 1rem;
			border-radius: 8px;
			background-color: var(--ctp-mantle);
		}
	}

	.chart-container {
		display: flex;
		flex-direction: column;
		gap: 1rem;
		text-align: start;
	}

	.achievements {
		grid-area: achievements;
	}

	.titles {
		text-align: center;
		grid-area: titles;
	}

	.total-hunts {
		grid-area: total-hunts;
	}

	.server {
		grid-area: server;
	}

	.meter {
		min-height: var(--cds-spacing-04);
		margin-bottom: 1rem;
	}

	.gauge {
		min-height: 196px;
		margin-bottom: 1rem;
	}
</style>
