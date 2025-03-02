<script lang="ts">
	import { getItemIcon } from '../modules/frontier/items';
	import InlineTooltip from './frontier/InlineTooltip.svelte';
	import TrophyWhite from './frontier/icon/TrophyWhite.svelte';
	import BookIconWhite from './frontier/icon/item/Book_Icon_White.svelte';
	import MapIconWhite from './frontier/icon/item/Map_Icon_White.svelte';
	import '@carbon/charts-svelte/styles.css';
	import { onMount, type Component } from 'svelte';
	import {
		type GaugeChart,
		type MeterChart,
		type MeterChartOptions,
		type GaugeChartOptions,
	} from '@carbon/charts-svelte';
	import Loading from 'carbon-components-svelte/src/Loading/Loading.svelte';
	import type { CarbonTheme } from 'carbon-components-svelte/src/Theme/Theme.svelte';
	import { getContext } from 'svelte';
	import type { Writable } from 'svelte/store';
	import { getHexStringFromCatppuccinColor } from '$lib/catppuccin';
	import { frontierServers } from '$lib/client/modules/frontier/servers';

	const carbonThemeStore = getContext(
		Symbol.for('carbonTheme'),
	) as Writable<CarbonTheme>;

	interface Props {
		huntCount?: number;
		obtainedAchievements?: {
			bronze: number;
			silver: number;
			gold: number;
			platinum: number;
		};
		totalAchievements?: {
			bronze: number;
			silver: number;
			gold: number;
			platinum: number;
		};
		obtainedTitles?: number;
		totalTitles?: number;
		huntCountRank?: number;
		huntCountRankPercent?: number;
		obtainedAchievementsRank?: number;
		obtainedAchievementsRankPercent?: number;
		titlesRank?: number;
		titlesRankPercent?: number;
		profileFrontierServers: string[];
	}

	let {
		huntCount = Math.trunc(Math.random() * 1000),
		obtainedAchievements = {
			bronze: Math.trunc(Math.random() * 40),
			silver: Math.trunc(Math.random() * 30),
			gold: Math.trunc(Math.random() * 20),
			platinum: Math.trunc(Math.random() * 10),
		},
		totalAchievements = {
			bronze: Math.trunc(Math.random() * 40) + obtainedAchievements.bronze,
			silver: Math.trunc(Math.random() * 30) + obtainedAchievements.silver,
			gold: Math.trunc(Math.random() * 20) + obtainedAchievements.gold,
			platinum: Math.trunc(Math.random() * 10) + obtainedAchievements.platinum,
		},
		obtainedTitles = Math.trunc(Math.random() * 1000),
		totalTitles = obtainedTitles + Math.trunc(Math.random() * 1000),
		huntCountRank = Math.trunc(Math.random() * 1000),
		huntCountRankPercent = Math.trunc(Math.random() * 100),
		obtainedAchievementsRank = Math.trunc(Math.random() * 1000),
		obtainedAchievementsRankPercent = Math.trunc(Math.random() * 100),
		titlesRank = Math.trunc(Math.random() * 1000),
		titlesRankPercent = Math.trunc(Math.random() * 100),
		profileFrontierServers = frontierServers,
	}: Props = $props();

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

	const achievementsMeterData = [
		{
			group: 'bronze',
			value: obtainedAchievements.bronze,
		},
		{
			group: 'silver',
			value: obtainedAchievements.silver,
		},
		{
			group: 'gold',
			value: obtainedAchievements.gold,
		},
		{
			group: 'platinum',
			value: obtainedAchievements.platinum,
		},
	];

	const titlesGaugeData = [
		{
			group: 'value',
			value: getGaugeValue(obtainedTitles, totalTitles),
		},
	];

	let achievementsMeter: Component<MeterChart> = $state();
	let achievementsMeterLoaded = $state(false);
	let titlesGauge: Component<GaugeChart> = $state();
	let titlesGaugeLoaded = $state(false);

	let achievementsMeterOptions = $derived({
		toolbar: {
			enabled: false,
		},
		legend: {
			enabled: false,
		},
		meter: {
			showLabels: false,
			proportional: {
				total:
					totalAchievements.bronze +
					totalAchievements.silver +
					totalAchievements.gold +
					totalAchievements.platinum,
			},
		},
		color: {
			scale: {
				bronze: getHexStringFromCatppuccinColor('maroon', $carbonThemeStore),
				silver: getHexStringFromCatppuccinColor('lavender', $carbonThemeStore),
				gold: getHexStringFromCatppuccinColor('yellow', $carbonThemeStore),
				platinum: getHexStringFromCatppuccinColor('teal', $carbonThemeStore),
			},
		},
		theme: $carbonThemeStore,
	} as MeterChartOptions);

	let titlesGaugeColor = $derived(
		getGaugeColor($carbonThemeStore, obtainedTitles, totalTitles),
	);

	let titlesGaugeOptions = $derived({
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
				value: titlesGaugeColor,
			},
		},
	} as GaugeChartOptions);

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
		<div class="paragraph-long-02">
			<InlineTooltip
				text="Achievements: "
				icon={TrophyWhite}
				iconType="component"
				tooltip="Achievements"
			/>
			<a href="/"
				>{obtainedAchievements.bronze +
					obtainedAchievements.silver +
					obtainedAchievements.gold +
					obtainedAchievements.platinum}/{totalAchievements.bronze +
					totalAchievements.silver +
					totalAchievements.gold +
					totalAchievements.platinum} (Rank #{obtainedAchievementsRank}, Top {obtainedAchievementsRankPercent}%)</a
			>
		</div>
		<div class="meter">
			{#if achievementsMeterLoaded}
				{@const SvelteComponent = achievementsMeter}
				<SvelteComponent
					data={achievementsMeterData}
					options={achievementsMeterOptions}
				/>
			{:else}
				<Loading withOverlay={false} />
			{/if}
		</div>
	</div>
	<div class="chart-container titles">
		<div class="paragraph-long-02">
			<InlineTooltip
				text="Titles: "
				icon={BookIconWhite}
				iconType="component"
				tooltip="Titles"
			/>
			<a href="/"
				>{obtainedTitles}/{totalTitles} (Rank #{titlesRank}, Top {titlesRankPercent}%)</a
			>
		</div>
		<div class="gauge">
			{#if titlesGaugeLoaded}
				{@const SvelteComponent_1 = titlesGauge}
				<SvelteComponent_1
					data={titlesGaugeData}
					options={titlesGaugeOptions}
				/>
			{:else}
				<Loading withOverlay={false} />
			{/if}
		</div>
	</div>
	<div class="total-hunts">
		<div class="paragraph-long-02">
			<InlineTooltip
				icon={getItemIcon('Ticket')}
				tooltip="Quests"
				text={'Total Hunts: '}
			/><a href="/"
				>{huntCount} (Rank #{huntCountRank}, Top {huntCountRankPercent}%)</a
			>
		</div>
	</div>
	<div class="server">
		<div class="paragraph-long-02">
			{#if profileFrontierServers.length >= 1}
				<InlineTooltip
					icon={MapIconWhite}
					tooltip="Servers"
					text={'Servers: '}
				/>
				{#each profileFrontierServers as server}
					<div>
						<a href="/leaderboard" class="server">
							{server}
						</a>
					</div>
				{/each}
			{/if}
		</div>
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
		min-height: 192px;
		margin-bottom: 1rem;
	}

	a {
		all: unset;
	}

	a:hover {
		text-decoration: underline;
		color: var(--ctp-sky);
	}
</style>
