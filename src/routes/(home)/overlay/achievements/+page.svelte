<script lang="ts">
	import Search from 'carbon-components-svelte/src/Search/Search.svelte';
	import TrophyWhite from '$lib/client/components/frontier/icon/TrophyWhite.svelte';
	import TrophyBronze from '$lib/client/images/achievement/bronze_trophy.webp';
	import TrophySilver from '$lib/client/images/achievement/silver_trophy.webp';
	import TrophyGold from '$lib/client/images/achievement/gold_trophy.webp';
	import TrophyPlatinum from '$lib/client/images/achievement/platinum_trophy.webp';
	import TrophySecret from '$lib/client/images/achievement/secret_trophy.webp';
	import Achievement from './Achievement.svelte';
	import ProgressBar from 'carbon-components-svelte/src/ProgressBar/ProgressBar.svelte';
	import {
		achievementsInfo,
		getAchievementImage,
		getAchievementRankColor,
		type AchievementItem,
	} from '$lib/client/modules/frontier/achievement';
	import Breadcrumb from 'carbon-components-svelte/src/Breadcrumb/Breadcrumb.svelte';
	import BreadcrumbItem from 'carbon-components-svelte/src/Breadcrumb/BreadcrumbItem.svelte';
	import { Canvas } from '@threlte/core';
	import RotatingCard from '$lib/client/components/scenes/RotatingCard.svelte';
	import InlineTooltip from '$lib/client/components/frontier/InlineTooltip.svelte';
	import Head from '$lib/client/components/Head.svelte';
	import {
		overlayDescription,
		website,
		authorName,
		datePublished,
		authorUrl,
		projectName,
	} from '$lib/constants';
	import pageThumbnail from '$lib/client/images/logo.png';
	import { page } from '$app/stores';

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

	const breadcrumbItems = [
		{ href: '/', text: 'Home' },
		{ href: '/overlay', text: 'Overlay' },
		{ href: '/overlay/achievements', text: 'Achievements' },
	];

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

	let searchTerm = '';
	let achievementSelected = achievementsInfo[0]['0'];
	// TODO let firstUsersObtained = [];
	// TODO let totalUsersObtained = [];

	let currentAchievements = totalObtainableAchievements;

	// TODO clicking the word secret adds an achievement.

	$: {
		let filteredAchievements = totalObtainableAchievements.filter(
			(achievement) =>
				achievement.Title.toLowerCase().includes(searchTerm.toLowerCase()),
		);

		// Sort alphabetically
		// filteredAchievements.sort((a, b) => a.Title.localeCompare(b.Title));

		currentAchievements = filteredAchievements;
	}

	const customTitle = "Overlay Achievements — Frontier's Wycademy";
	const url = $page.url.toString();
</script>

<Head
	title={customTitle}
	description={overlayDescription}
	image={pageThumbnail}
	{url}
	{website}
	{authorName}
	{datePublished}
	{authorUrl}
	contentType="SoftwareApplication"
	name={projectName}
	siteName={projectName}
/>

<div class="achievements-page">
	<div class="breadcrumb">
		<Breadcrumb noTrailingSlash>
			{#each breadcrumbItems as item, i}
				<BreadcrumbItem
					href={i === breadcrumbItems.length - 1 ? undefined : item.href}
					isCurrentPage={i === breadcrumbItems.length - 1}
					>{#if i !== breadcrumbItems.length - 1}
						{item.text}
					{/if}
				</BreadcrumbItem>
			{/each}
		</Breadcrumb>
	</div>
	<h1>Achievements</h1>
	<hr />
	<div class="summary">
		<p>
			There are currently {totalObtainableAchievementsCount} obtainable overlay achievements,
			of which {obtainableSecretTrophies.length} are <InlineTooltip
				icon={TrophySecret}
				iconType="file"
				text="secret"
				tooltip="Trophy"
			/>.
		</p>
		<p>
			Below is a list of all achievements from the overlay. The trophy numbers
			denote the total amount of hunters that obtained that achievement, over
			the total number of trophies of that rank respectively.
		</p>
		<p>
			Whoever obtains an achievement first has their name marked next to the
			selected achievement title, along with the reward date. In order to
			qualify, you have to submit at least 10 quests into leaderboards.
		</p>
	</div>
	<div class="achievements-container">
		<div class="items">
			{#each currentAchievements as achievement}
				{#if !achievement.Unused}
					<button
						class="achievement"
						on:click={(e) => onAchievementClick(achievement)}
					>
						<Achievement
							hunterName={achievement.HunterName}
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
				<p>Progress</p>
				<p>00.00%</p>
			</div>
			<div class="progress-bar">
				<ProgressBar
					value={0}
					max={totalObtainableAchievementsCount}
					hideLabel
					helperText={`0/${totalObtainableAchievementsCount}`}
				/>
			</div>
		</div>
		<div class="preview">
			<Canvas>
				{#key achievementSelected}
					<RotatingCard
						frontImage={achievementSelected.Image}
						backImage={getAchievementImage(achievementSelected.Rank)}
					/>
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
					{`${achievementSelected.Title}${!achievementSelected.HunterName || achievementSelected.HunterName === '' ? ' | Unclaimed' : ` | ${achievementSelected.HunterName} obtained at ${achievementSelected.CompletionDate}`}`}
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
					{0}/{obtainableBronzeTrophies.length}
				</p>
			</div>
			<div>
				<img src={TrophySilver} alt="Trophy" />
				<p style:color="var(--ctp-lavender)">
					{0}/{obtainableSilverTrophies.length}
				</p>
			</div>
			<div>
				<img src={TrophyGold} alt="Trophy" />
				<p style:color="var(--ctp-yellow)">
					{0}/{obtainableGoldTrophies.length}
				</p>
			</div>
			<div>
				<img src={TrophyPlatinum} alt="Trophy" />
				<p style:color="var(--ctp-teal)">
					{0}/{obtainablePlatinumTrophies.length}
				</p>
			</div>
		</div>
	</div>
</div>

<style lang="scss">
	.achievements-page {
		width: 100%;
		padding-top: 2rem;
		padding-bottom: 2rem;
	}

	hr {
		opacity: 1;
		width: 100%;
		border: none;
		height: 1px;
		background: radial-gradient(
			circle,
			color-mix(in srgb, var(--ctp-blue), transparent 50%) 0%,
			rgba(0, 0, 0, 0) 50%
		);
	}

	.centered-paragraph {
		text-align: center;
	}

	h1,
	h2 {
		text-align: center;
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
			width: 80%;
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
				'info trophies ';
			border: 2px solid var(--ctp-overlay0);
			background: var(--ctp-surface0);
			border-radius: 8px 8px 8px 8px;
			width: 80%;
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

	.breadcrumb {
		padding-left: 1rem;
		padding-bottom: 1rem;
	}

	.summary {
		display: flex;
		flex-direction: column;
		gap: 1rem;
		width: 80%;
		margin: auto;
		padding-top: 1rem;
		padding-bottom: 2rem;
	}
</style>
