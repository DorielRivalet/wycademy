<script lang="ts">
	import { getItemIcon } from '../modules/frontier/items';
	import InlineTooltip from './frontier/InlineTooltip.svelte';
	import TrophyWhite from './frontier/icon/TrophyWhite.svelte';
	import '@carbon/charts-svelte/styles.css';
	import { onMount, type Component } from 'svelte';
	import {
		type MeterChart,
		type MeterChartOptions,
	} from '@carbon/charts-svelte';
	import Loading from 'carbon-components-svelte/src/Loading/Loading.svelte';
	import type { CarbonTheme } from 'carbon-components-svelte/src/Theme/Theme.svelte';
	import { getContext } from 'svelte';
	import type { Writable } from 'svelte/store';
	import {
		achievementRankNames,
		achievementsInfo,
		findMatchingAchievements,
		getAchievementImage,
		getAchievementRankColor,
		type AchievementItem,
		type PlayerAchievementInfo,
	} from '$lib/client/modules/frontier/achievement';
	import TrophyBronze from '$lib/client/images/achievement/bronze_trophy.webp';
	import TrophySilver from '$lib/client/images/achievement/silver_trophy.webp';
	import TrophyGold from '$lib/client/images/achievement/gold_trophy.webp';
	import TrophyPlatinum from '$lib/client/images/achievement/platinum_trophy.webp';
	import TrophySecret from '$lib/client/images/achievement/secret_trophy.webp';
	import Achievement from '$lib/client/components/frontier/Achievement.svelte';
	import { Canvas } from '@threlte/core';
	import RotatingCard from '$lib/client/components/scenes/RotatingCard.svelte';
	import Search from 'carbon-components-svelte/src/Search/Search.svelte';
	import ProgressBar from 'carbon-components-svelte/src/ProgressBar/ProgressBar.svelte';
	import { format } from 'date-fns';
	import { getHexStringFromCatppuccinColor } from '$lib/catppuccin';

	const carbonThemeStore = getContext(
		Symbol.for('carbonTheme'),
	) as Writable<CarbonTheme>;

	interface Props {
		obtainedAchievements: PlayerAchievementInfo[];
	}

	let { obtainedAchievements }: Props = $props();

	// TODO secret achievements giving over 100%.
	const totalObtainableAchievements = Object.values(achievementsInfo[0]).filter(
		(e) => !e.Unused,
	);

	const totalObtainableAchievementsCount = totalObtainableAchievements.length;

	const obtainableBronzeTrophies = totalObtainableAchievements.filter(
		(e) => e.Rank === 1,
	);
	const obtainableSilverTrophies = totalObtainableAchievements.filter(
		(e) => e.Rank === 2,
	);
	const obtainableGoldTrophies = totalObtainableAchievements.filter(
		(e) => e.Rank === 3,
	);
	const obtainablePlatinumTrophies = totalObtainableAchievements.filter(
		(e) => e.Rank === 4,
	);
	const obtainableSecretTrophies = totalObtainableAchievements.filter(
		(e) => e.IsSecret,
	);

	function onAchievementClick(achievement: AchievementItem) {
		let foundValidAchievement = Object.values(achievementsInfo[0]).find(
			(e) => e.Title === achievement.Title && !e.Unused,
		);

		if (!foundValidAchievement) {
			return;
		}

		if (achievement.IsSecret) {
			achievement.Objective = '';
		}

		achievementSelected = achievement;
	}

	function getAchievementsMeterData(
		obtainedAchievements: PlayerAchievementInfo[],
	): { group: 'bronze' | 'silver' | 'gold' | 'platinum'; value: number }[] {
		// Map achievement ranks to group names
		const achievementRankNames = {
			1: 'bronze',
			2: 'silver',
			3: 'gold',
			4: 'platinum',
		};

		// Initialize counts for each rank
		const counts = {
			bronze: 0,
			silver: 0,
			gold: 0,
			platinum: 0,
		};

		// Iterate over obtained achievements
		obtainedAchievements.forEach((achievement) => {
			// Find the corresponding achievement in achievementsInfo by matching the ID
			const achievementInfo = achievementsInfo[0][achievement.AchievementID];

			if (achievementInfo && !achievementInfo.Unused) {
				// Map the rank to the group (bronze, silver, etc.)
				const group = achievementRankNames[achievementInfo.Rank];
				if (group) {
					counts[group]++;
				}
			}
		});

		// Convert counts to the required data format for the chart
		return Object.entries(counts).map(([group, value]) => ({
			group: group as 'bronze' | 'silver' | 'gold' | 'platinum',
			value,
		}));
	}

	let searchTerm = $state('');
	let achievementSelected = $state(achievementsInfo[0]['0']);
	let currentAchievements = $derived(
		totalObtainableAchievements.filter((achievement) =>
			achievement.Title.toLowerCase().includes(searchTerm.toLowerCase()),
		),
	);

	let achievementsMeter: Component<MeterChart> = $state();
	let achievementsMeterLoaded = $state(false);

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
				total: totalObtainableAchievementsCount,
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

	let achievementsMeterData = $derived(
		getAchievementsMeterData(obtainedAchievements),
	);

	onMount(async () => {
		const charts = await import('@carbon/charts-svelte');
		achievementsMeter = charts.MeterChart;
		achievementsMeterLoaded = true;
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
			<a href="/overlay/achievements"
				>{obtainedAchievements.length}/{totalObtainableAchievementsCount}</a
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
	<div class="achievements-container">
		<div class="items">
			{#each currentAchievements as achievement}
				{#if !achievement.Unused}
					<button
						class="achievement"
						onclick={(e) => onAchievementClick(achievement)}
					>
						<Achievement
							hunterName={obtainedAchievements.find(
								(ach) =>
									achievementsInfo[0][ach.AchievementID]?.Title ===
									achievement.Title,
							)
								? 'Hunter'
								: ''}
							rank={achievement.Rank}
							name={achievement.Title}
							imageSource={achievement.Image}
						/>
					</button>
				{/if}
			{/each}
		</div>
		<div class="search">
			<Search
				expanded
				bind:value={searchTerm}
				placeholder="Search achievement name..."
				autocomplete={'on'}
			/>
			<div class="progress-text">
				<div>Progress</div>
				<div>
					{Math.trunc(
						(obtainedAchievements.length / totalObtainableAchievementsCount) *
							100,
					)}%
				</div>
			</div>
			<div class="progress-bar">
				<ProgressBar
					value={obtainedAchievements.length}
					max={totalObtainableAchievementsCount}
					hideLabel
					helperText={`${obtainedAchievements.length}/${totalObtainableAchievementsCount}`}
				/>
			</div>
		</div>
		<div class="preview">
			<Canvas>
				{#key achievementSelected}
					<RotatingCard frontTexture={achievementSelected.Image} />
					<!--backTexture={getAchievementImage(achievementSelected.Rank)}-->
				{/key}
			</Canvas>
		</div>
		<div class="info">
			<img
				class="achievement-selected-icon"
				src={achievementSelected.Image}
				alt="Achievement Icon"
			/>
			<div class="achievement-selected-text">
				<p
					class="achievement-selected-title"
					style="color: {getAchievementRankColor(achievementSelected.Rank)}"
				>
					{#if obtainedAchievements.find((ach) => achievementsInfo[0][ach.AchievementID]?.Title === achievementSelected.Title)}
						{`${achievementSelected.Title} | Hunter obtained at ${format(new Date(obtainedAchievements.find((ach) => achievementsInfo[0][ach.AchievementID]?.Title === achievementSelected.Title)?.CompletionDate || ''), 'yyyy-MM-dd HH:mm:ss')}`}
					{:else}
						{`${achievementSelected.Title} | Unclaimed`}
					{/if}
				</p>
				{#if !achievementSelected.IsSecret}
					<p class="objective">{achievementSelected.Objective}</p>
				{/if}
				<p class="hint">{achievementSelected.Hint}</p>
			</div>
		</div>
		<div class="trophies">
			<div>
				<img src={TrophyBronze} alt="Trophy" />
				<p style:color="var(--ctp-maroon)">
					{achievementsMeterData.find((e) => e.group === 'bronze')
						?.value}/{obtainableBronzeTrophies.length}
				</p>
			</div>
			<div>
				<img src={TrophySilver} alt="Trophy" />
				<p style:color="var(--ctp-lavender)">
					{achievementsMeterData.find((e) => e.group === 'silver')
						?.value}/{obtainableSilverTrophies.length}
				</p>
			</div>
			<div>
				<img src={TrophyGold} alt="Trophy" />
				<p style:color="var(--ctp-yellow)">
					{achievementsMeterData.find((e) => e.group === 'gold')
						?.value}/{obtainableGoldTrophies.length}
				</p>
			</div>
			<div>
				<img src={TrophyPlatinum} alt="Trophy" />
				<p style:color="var(--ctp-teal)">
					{achievementsMeterData.find((e) => e.group === 'platinum')
						?.value}/{obtainablePlatinumTrophies.length}
				</p>
			</div>
		</div>
	</div>
</div>

<style lang="scss">
	.stats-summary {
		display: flex;
		padding: 1rem;
		border-radius: 8px;
		background-color: var(--ctp-mantle);
		flex-direction: column;
		gap: 1rem;
	}

	.chart-container {
		display: flex;
		flex-direction: column;
		gap: 1rem;
		text-align: start;
	}

	.meter {
		height: var(--cds-spacing-04);
		margin-bottom: 1rem;
	}

	a {
		all: unset;
	}

	a:hover {
		text-decoration: underline;
		color: var(--ctp-sky);
	}

	@media (min-width: 320px) {
		.achievements-container {
			display: grid;
			grid-template-areas:
				'search'
				'items'
				'preview'
				'info'
				'trophies';
			border: 2px solid var(--ctp-overlay0);
			background: var(--ctp-surface0);
			border-radius: 8px 8px 8px 8px;
			width: 100%;
			margin: auto;
			padding: 1rem;
			height: 100vh;
			overflow-y: hidden;
		}
	}

	@media (min-width: 1056px) {
		.achievements-container {
			display: grid;
			grid-template-columns: 3fr 1fr;
			grid-template-rows: 1fr 2fr 1fr;
			grid-template-areas:
				'items search'
				'items preview'
				'info trophies';
			border: 2px solid var(--ctp-overlay0);
			background: var(--ctp-surface0);
			border-radius: 8px 8px 8px 8px;
			width: 100%;
			margin: auto;
			padding: 1rem;
			height: 85vh;
			overflow-y: hidden;
		}
	}

	.items {
		grid-area: items;
		display: grid;
		gap: 1rem;
		width: 100%;
		grid-template-columns: repeat(auto-fit, minmax(128px, 1fr));
		padding: 2rem;
		overflow-y: auto;
	}

	.search {
		grid-area: search;
		padding: 1rem;
	}

	.progress-text {
		display: flex;
		font-size: 1.5em;
		font-weight: bold;
		justify-content: space-between;
		margin-bottom: 0.5rem;
		margin-top: 0.5rem;
	}

	.preview {
		grid-area: preview;
		width: 100%;
		height: 100%;
		padding: 1rem;
	}

	.info {
		grid-area: info;
		padding: 1rem;
		display: flex;
		gap: 1rem;
	}

	.achievement-selected-icon {
		max-width: 128px;
		padding-bottom: 1rem;
	}

	.achievement-selected-text {
		grid-area: description;
		display: flex;
		flex-direction: column;
		gap: 1rem;
		padding: 1rem;
		height: 128px;
		overflow-y: auto;
		align-items: start;
	}

	.achievement-selected-title {
		font-weight: bold;
		text-shadow:
			-1px -1px 0 #000,
			1px -1px 0 #000,
			-1px 1px 0 #000,
			1px 1px 0 #000;
		font-weight: bold;
		text-align: center;
	}

	.trophies {
		grid-area: trophies;
		display: grid;
		grid-template-columns: 1fr 1fr;
		grid-template-rows: 1fr 1fr;
		padding: 1rem;
		gap: 1rem;

		div {
			display: flex;
			align-items: center;
			gap: 1rem;
		}

		p {
			text-shadow:
				-1px -1px 0 #000,
				1px -1px 0 #000,
				-1px 1px 0 #000,
				1px 1px 0 #000;
			font-weight: bold;
			text-align: center;
		}
	}

	button {
		all: unset;
	}
</style>
