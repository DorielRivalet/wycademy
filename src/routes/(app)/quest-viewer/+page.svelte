<!--
  ~ © 2024 Doriel Rivalet
  ~ Use of this source code is governed by a MIT license that can be
  ~ found in the LICENSE file.
-->

<script lang="ts">
	import SectionHeadingTopLevel from '$lib/client/components/SectionHeadingTopLevel.svelte';
	import pageThumbnail from '$lib/client/images/icon/pvp.png';
	import {
		authorName,
		authorUrl,
		datePublished,
		projectName,
		website,
	} from '$lib/constants';
	import Head from '$lib/client/components/Head.svelte';
	import InlineNotification from 'carbon-components-svelte/src/Notification/InlineNotification.svelte';
	import { page } from '$app/stores';
	import Button from 'carbon-components-svelte/src/Button/Button.svelte';
	import CopyButton from 'carbon-components-svelte/src/CopyButton/CopyButton.svelte';
	import FileUploaderDropContainer from 'carbon-components-svelte/src/FileUploader/FileUploaderDropContainer.svelte';
	import Loading from 'carbon-components-svelte/src/Loading/Loading.svelte';
	import Restart from 'carbon-icons-svelte/lib/Restart.svelte';
	import Share from 'carbon-icons-svelte/lib/Share.svelte';
	import ComboBox from 'carbon-components-svelte/src/ComboBox/ComboBox.svelte';
	import DataTable from 'carbon-components-svelte/src/DataTable/DataTable.svelte';
	import DatePicker from 'carbon-components-svelte/src/DatePicker/DatePicker.svelte';
	import DatePickerInput from 'carbon-components-svelte/src/DatePicker/DatePickerInput.svelte';
	import MultiSelect from 'carbon-components-svelte/src/MultiSelect/MultiSelect.svelte';
	import NumberInput from 'carbon-components-svelte/src/NumberInput/NumberInput.svelte';
	import Pagination from 'carbon-components-svelte/src/Pagination/Pagination.svelte';
	import ProgressBar from 'carbon-components-svelte/src/ProgressBar/ProgressBar.svelte';
	import Search from 'carbon-components-svelte/src/Search/Search.svelte';
	import SkeletonPlaceholder from 'carbon-components-svelte/src/SkeletonPlaceholder/SkeletonPlaceholder.svelte';
	import SkeletonText from 'carbon-components-svelte/src/SkeletonText/SkeletonText.svelte';
	import Slider from 'carbon-components-svelte/src/Slider/Slider.svelte';
	import Tabs from 'carbon-components-svelte/src/Tabs/Tabs.svelte';
	import Tab from 'carbon-components-svelte/src/Tabs/Tab.svelte';
	import TabContent from 'carbon-components-svelte/src/Tabs/TabContent.svelte';
	import Tag from 'carbon-components-svelte/src/Tag/Tag.svelte';
	import Toggle from 'carbon-components-svelte/src/Toggle/Toggle.svelte';
	import Tooltip from 'carbon-components-svelte/src/Tooltip/Tooltip.svelte';
	import Accordion from 'carbon-components-svelte/src/Accordion/Accordion.svelte';
	import AccordionItem from 'carbon-components-svelte/src/Accordion/AccordionItem.svelte';
	import SectionHeading from '$lib/client/components/SectionHeading.svelte';
	import ProfileStatsSummary from '$lib/client/components/ProfileStatsSummary.svelte';
	import SummaryAchievements from '$lib/client/components/SummaryAchievements.svelte';
	import Dropdown from 'carbon-components-svelte/src/Dropdown/Dropdown.svelte';
	import ProgressIndicator from 'carbon-components-svelte/src/ProgressIndicator/ProgressIndicator.svelte';
	import ProgressStep from 'carbon-components-svelte/src/ProgressIndicator/ProgressStep.svelte';
	import {
		questIDWhitelist,
		type RunBuffsTag,
		type SpeedrunInfo,
	} from '$lib/client/modules/frontier/quest';
	import type { MezFesInfo } from '$lib/client/modules/frontier/mezfes';
	import type { PlayerAchievementInfo } from '$lib/client/modules/frontier/achievement';
	import Toolbar from 'carbon-components-svelte/src/DataTable/Toolbar.svelte';
	import OutboundLink from 'carbon-components-svelte/src/Link/OutboundLink.svelte';
	import Download from 'carbon-icons-svelte/lib/Download.svelte';
	import VideoPlayer from 'carbon-icons-svelte/lib/VideoPlayer.svelte';
	import MonsterComponent from '$lib/client/components/frontier/icon/dynamic-import/MonsterComponent.svelte';
	import {
		getWeaponIcon,
		getWeaponIdFromName,
	} from '$lib/client/modules/frontier/weapons';
	import { ezlionQuest, ezlionWeaponType } from 'ezlion';
	import { formatDateTime } from '$lib/client/modules/time';
	import { getCSVFromArray } from '$lib/client/modules/csv';
	import Modal from 'carbon-components-svelte/src/Modal/Modal.svelte';
	import ToolbarSearch from 'carbon-components-svelte/src/DataTable/ToolbarSearch.svelte';
	import Image from 'carbon-icons-svelte/lib/Image.svelte';
	import CenteredFigure from '$lib/client/components/CenteredFigure.svelte';
	import { getItemIcon, ItemColors } from '$lib/client/modules/frontier/items';
	import InlineTooltip from '$lib/client/components/frontier/InlineTooltip.svelte';
	import { getHabitatIcon } from '$lib/client/modules/frontier/habitat';
	import type { FrontierMonsterNameExpanded } from '$lib/client/modules/frontier/types';
	import { monsterInfo } from '$lib/client/modules/frontier/monsters';
	import SummaryHuntsCalendarGraph from '$lib/client/components/SummaryHuntsCalendarGraph.svelte';
	import type { CarbonTheme } from 'carbon-components-svelte/src/Theme/Theme.svelte';
	import { getContext } from 'svelte';
	import type { Writable } from 'svelte/store';
	import SummaryWeaponUsage from '$lib/client/components/SummaryWeaponUsage.svelte';
	import { browser } from '$app/environment';
	import type { LineChartOptions, ScaleTypes } from '@carbon/charts-svelte';
	import { downloadDomAsPng } from '$lib/client/modules/download';

	const carbonThemeStore = getContext(
		Symbol.for('carbonTheme'),
	) as Writable<CarbonTheme>;

	/**
	 * Converts a JSON string to { [index: number]: { [index: number]: number }[] }[]
	 * Example: PlayerInventoryDictionary
	 */
	function convertDictionaryIntIntArray(
		jsonString: string,
	): { [index: number]: { [index: number]: number }[] }[] {
		if (!jsonString) return [];
		const parsedData = JSON.parse(jsonString);

		return Object.entries(parsedData).map(([time, items]) => {
			const itemArray: { [index: number]: number }[] = (items as any[]).map(
				(item) => {
					const [itemID, quantity] = Object.entries(item)[0];
					return { [parseInt(itemID)]: quantity as number };
				},
			);
			return { [parseInt(time)]: itemArray };
		});
	}

	/**
	 * Converts a JSON string to { [index: number]: number }[]
	 * Example: AttackBuffDictionary
	 */
	function convertDictionaryIntInt(
		jsonString: string,
	): { [index: number]: number }[] {
		if (!jsonString) return [];
		const parsedData = JSON.parse(jsonString);

		return Object.entries(parsedData).map(([time, value]) => ({
			[parseInt(time)]: value as number,
		}));
	}

	/**
	 * Converts a JSON string to { [index: number]: string }[]
	 * Example: KeystrokesDictionary
	 */
	function convertDictionaryIntString(
		jsonString: string,
	): { [index: number]: string }[] {
		if (!jsonString) return [];
		const parsedData = JSON.parse(jsonString);

		return Object.entries(parsedData).map(([time, value]) => ({
			[parseInt(time)]: value as string,
		}));
	}

	/**
	 * Converts a JSON string to { [index: number]: { [index: number]: number } }[]
	 * Example: Monster1HPDictionary
	 */
	function convertDictionaryIntIntInt(
		jsonString: string,
	): { [index: number]: { [index: number]: number } }[] {
		if (!jsonString) return [];
		const parsedData = JSON.parse(jsonString);

		return Object.entries(parsedData).map(([time, values]) => ({
			[parseInt(time)]: values as { [index: number]: number },
		}));
	}

	/**
	 * Converts a JSON string to { [index: number]: { [index: number]: [number, number, number, number, number, number, number, number, number, number] } }[]
	 * Example: Monster1PartThresholdDictionary
	 */
	function convertDictionaryMonsterPartThreshold(jsonString: string): {
		[index: number]: {
			[index: number]: [
				number,
				number,
				number,
				number,
				number,
				number,
				number,
				number,
				number,
				number,
			];
		};
	}[] {
		if (!jsonString) return [];
		const parsedData = JSON.parse(jsonString);

		return Object.entries(parsedData).map(([time, values]) => ({
			[parseInt(time)]: values as {
				[index: number]: [
					number,
					number,
					number,
					number,
					number,
					number,
					number,
					number,
					number,
					number,
				];
			},
		}));
	}

	/**
	 * Converts a JSON string to { [index: number]: number }[] or null
	 * Example: DualSwordsSharpensDictionary
	 */
	function convertDictionaryIntIntOrNull(
		jsonString: string,
	): { [index: number]: number }[] | null {
		if (!jsonString) return null;
		const parsedData = JSON.parse(jsonString);

		return Object.entries(parsedData).map(([time, value]) => ({
			[parseInt(time)]: value as number,
		}));
	}

	// Submit the file via fetch
	async function handleFileSubmit(event) {
		event.preventDefault();

		if (!databaseFiles || databaseFiles.length === 0) {
			errorMessage = 'Please select a file to upload.';
			return;
		}

		uploadState = 'loading';
		loadingIndex = 0;
		let accumulatedText = '';

		const formData = new FormData();
		formData.append('databaseFiles', databaseFiles[0]);

		const response = await fetch('/quest-viewer/upload', {
			method: 'POST',
			body: formData,
		});

		if (!response.ok) {
			errorMessage = 'Error uploading file.';
			uploadState = 'idle';
			return;
		}

		const reader = response.body?.getReader();
		const decoder = new TextDecoder();

		if (reader) {
			while (true) {
				const { done, value } = await reader.read();
				if (done) break;

				accumulatedText += decoder.decode(value);

				// Split the accumulated text into lines
				const lines = accumulatedText.split('\n');

				// Process each complete line
				for (let i = 0; i < lines.length - 1; i++) {
					const line = lines[i].trim();
					if (line.startsWith('data:')) {
						try {
							const { index, message, result, error } = JSON.parse(
								line.slice(5),
							);

							if (error) {
								errorMessage = error;
								uploadState = 'idle';
								return;
							}

							if (result) {
								speedrunInfo = result.speedrunInfo;
								mezFesInfo = result.mezFesInfo;
								achievementInfo = result.achievementInfo;
								uploadState = 'done';
								return;
							}

							loadingIndex = index;
						} catch (err) {
							console.error('Failed to parse JSON:', line);
						}
					}
				}

				// Keep only the last (possibly incomplete) line in the buffer
				accumulatedText = lines[lines.length - 1];
			}
		}
	}

	function getPersonalBestsSummary(
		speedrunInfo: SpeedrunInfo[],
		questIDWhitelist: {
			name: string;
			id: number;
			monster: FrontierMonsterNameExpanded;
		}[],
		selectedRunBuffsTag: RunBuffsTag,
	): {
		id: string;
		monster: string;
		quest: string;
		questID: number;
		sns: string;
		ds: string;
		gs: string;
		ls: string;
		hammer: string;
		hh: string;
		lance: string;
		gl: string;
		tonfa: string;
		saf: string;
		ms: string;
		bow: string;
		lbg: string;
		hbg: string;
	}[] {
		if (speedrunInfo.length === 0) {
			return [];
		}

		const defaultTime = '--:--.---';

		// Initialize an object to store personal bests
		const personalBests: {
			[questID: number]: { [weaponTypeID: number]: string };
		} = {};

		// Create a set for fast lookup of quest IDs in the whitelist
		const questWhitelistSet = new Set(
			questIDWhitelist.map((quest) => quest.id),
		);

		// Filter runs that belong to the quest whitelist
		const filteredRuns = speedrunInfo.filter((run) =>
			questWhitelistSet.has(run.QuestID),
		);

		// Populate personal bests for each weapon and quest
		filteredRuns.forEach((run) => {
			const {
				QuestID,
				WeaponTypeID,
				FinalTimeDisplay,
				FinalTimeValue,
				RunBuffsTag,
				RunID,
			} = run;

			if (!personalBests[QuestID]) {
				personalBests[QuestID] = {};
			}

			// Compare times and store the best time for the weapon in this quest
			if (RunBuffsTag !== selectedRunBuffsTag) {
				personalBests[QuestID][WeaponTypeID] = defaultTime;
			} else if (
				!personalBests[QuestID][WeaponTypeID] ||
				(FinalTimeValue <
					parseFloat(
						personalBests[QuestID][WeaponTypeID].replace(/[:.]/g, ''),
					) &&
					FinalTimeValue > 0)
			) {
				personalBests[QuestID][WeaponTypeID] =
					`${FinalTimeDisplay} (Run ID ${RunID})` || defaultTime;
			}
		});

		// Create rows for the output table
		const rows: {
			id: string;
			monster: string;
			quest: string;
			questID: number;
			sns: string;
			ds: string;
			gs: string;
			ls: string;
			lance: string;
			gl: string;
			hammer: string;
			hh: string;
			tonfa: string;
			saf: string;
			ms: string;
			bow: string;
			lbg: string;
			hbg: string;
		}[] = [];

		questIDWhitelist.forEach(({ id: questID, monster: monsterName }) => {
			const questBests = personalBests[questID] || {};

			rows.push({
				id: questID.toString(),
				monster: monsterName,
				quest: ezlionQuest[questID],
				questID: questID,
				sns: questBests[getWeaponIdFromName('Sword and Shield')] || defaultTime,
				ds: questBests[getWeaponIdFromName('Dual Swords')] || defaultTime,
				gs: questBests[getWeaponIdFromName('Great Sword')] || defaultTime,
				ls: questBests[getWeaponIdFromName('Long Sword')] || defaultTime,
				hammer: questBests[getWeaponIdFromName('Hammer')] || defaultTime,
				hh: questBests[getWeaponIdFromName('Hunting Horn')] || defaultTime,
				lance: questBests[getWeaponIdFromName('Lance')] || defaultTime,
				gl: questBests[getWeaponIdFromName('Gunlance')] || defaultTime,
				tonfa: questBests[getWeaponIdFromName('Tonfa')] || defaultTime,
				saf: questBests[getWeaponIdFromName('Switch Axe F')] || defaultTime,
				ms: questBests[getWeaponIdFromName('Magnet Spike')] || defaultTime,
				lbg: questBests[getWeaponIdFromName('Light Bowgun')] || defaultTime,
				hbg: questBests[getWeaponIdFromName('Heavy Bowgun')] || defaultTime,
				bow: questBests[getWeaponIdFromName('Bow')] || defaultTime,
			});
		});

		return rows.toReversed();
	}

	async function generateSparkline(data: string) {
		if (!browser) return;
		try {
			// Parse input, with error handling
			let input: { [key: string]: number } = JSON.parse(data);

			//console.log(JSON.stringify(input, null, 2));

			// Validate input is not empty
			if (Object.keys(input).length === 0) {
				console.warn('Input data is empty');
				return;
			}

			// Convert keys to numbers and find the highest time value
			const timeKeys = Object.keys(input).map((key) => parseInt(key, 10));
			const highestTime = Math.max(...timeKeys);

			// Transform data with more robust mapping
			const result = timeKeys
				.map((time) => ({
					group: 'Dataset 1',
					time: (highestTime - time).toString(),
					value: input[time.toString()],
				}))
				.sort((a, b) => parseInt(a.time) - parseInt(b.time));

			// Dynamic import of Carbon Charts
			const { LineChart } = await import('@carbon/charts-svelte');

			console.log(JSON.stringify(result));

			return {
				component: LineChart,
				data: result,
			};
		} catch (error) {
			console.error('Error generating sparkline:', error);
			return;
		}
	}

	const customTitle = "Quest Viewer — Frontier's Wycademy";
	const url = $page.url.toString();
	const description =
		'Examine your quest data and share the results with other hunters.';

	let uploadState: 'idle' | 'loading' | 'done' = $state('idle');
	let databaseFiles: ReadonlyArray<File> = $state([]);
	let errorMessage: string | null = $state(null);
	let speedrunInfo: SpeedrunInfo[] = $state([]);
	let mezFesInfo: MezFesInfo[] = $state([]);
	let achievementInfo: PlayerAchievementInfo[] = $state([]);
	let loadingIndex = $state(0);
	let selectedTabIndex = $state(0);

	let questsTablePageSize = $state(10);
	let questsTablePage = $state(1);
	let questsTableFilteredRowIds: string[] = $state([]);
	let questsSortKey:
		| 'id'
		| 'time'
		| 'weaponType'
		| 'objectiveName'
		| 'quest'
		| 'videoLink'
		| 'trueRaw'
		| 'date'
		| undefined = $state('id');
	let questsSortDirection: 'none' | 'ascending' | 'descending' | undefined =
		$state('descending');
	let selectedRunBuffsTag: RunBuffsTag = $state('TA');
	let personalBestsTableFilteredRowIds: string[] = $state([]);
	let personalBestsSummary = $derived(
		getPersonalBestsSummary(
			speedrunInfo,
			questIDWhitelist,
			selectedRunBuffsTag,
		),
	);
	let sparklineOptions = $derived({
		points: { enabled: false },
		axes: {
			bottom: {
				visible: false,
				title: 'Time (frames)',
				mapsTo: 'time',
				includeZero: false,
				scaleType: 'linear' as ScaleTypes,
			},
			left: {
				visible: false,

				mapsTo: 'value',
				title: 'DPS',
				scaleType: 'linear' as ScaleTypes,
			},
		},
		tooltip: {
			enabled: false,
		},
		width: '192px',
		height: '64px',
		resizable: false,
		legend: {
			enabled: false,
		},
		toolbar: {
			enabled: false,
		},
		data: {
			loading: false,
		},
		theme: $carbonThemeStore,
	} as LineChartOptions);
</script>

<Head
	title={customTitle}
	{description}
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

<section>
	<SectionHeadingTopLevel title="Quest Viewer" />
	<div>
		<p class="spaced-paragraph">
			This page is used as a preliminary tool to help make a leaderboard page.
			The file data that is uploaded is not stored on our servers unless you use
			the Share button. The share URL and its file data automatically gets
			removed after 2 days.
		</p>

		{#if errorMessage}
			<InlineNotification kind="error" title="Error:" subtitle={errorMessage} />
		{/if}

		{#if speedrunInfo && speedrunInfo.length > 0 && uploadState === 'done'}
			<div class="top-buttons">
				<Button
					kind="tertiary"
					onclick={() => {
						uploadState = 'idle';
						loadingIndex = 0;
					}}
					icon={Restart}>Load another file</Button
				><Button
					disabled
					kind="tertiary"
					onclick={() => console.log('share')}
					icon={Share}>Create share URL</Button
				>
			</div>

			<div>
				<Tabs autoWidth bind:selected={selectedTabIndex}>
					<Tab label="Summary" />
					<Tab label="Quests" />
					<Tab label="Achievements" />
					<Tab label="Events" />
					{#snippet content()}
						<TabContent>
							<section>
								<div class="table table-with-scrollbar">
									{#if browser && speedrunInfo && speedrunInfo.length > 0 && selectedTabIndex === 0}
										<DataTable
											id="personal-bests-dom"
											title="Personal Bests"
											sortable
											zebra
											useStaticWidth
											headers={[
												{ key: 'monster', value: 'Monster' },
												{ key: 'quest', value: 'Quest', minWidth: '192px' },
												{ key: 'questID', value: 'Quest ID' },
												{
													key: 'sns',
													value: 'Sword and Shield',
													minWidth: '96px',
												},
												{ key: 'ds', value: 'Dual Swords', minWidth: '96px' },
												{ key: 'gs', value: 'Great Sword', minWidth: '96px' },
												{ key: 'ls', value: 'Long Sword', minWidth: '96px' },
												{ key: 'hammer', value: 'Hammer', minWidth: '96px' },
												{ key: 'hh', value: 'Hunting Horn', minWidth: '96px' },
												{ key: 'lance', value: 'Lance', minWidth: '96px' },
												{ key: 'gl', value: 'Gunlance', minWidth: '96px' },
												{ key: 'tonfa', value: 'Tonfa', minWidth: '96px' },
												{ key: 'saf', value: 'Switch Axe F', minWidth: '96px' },
												{ key: 'ms', value: 'Magnet Spike', minWidth: '96px' },
												{ key: 'lbg', value: 'Light Bowgun', minWidth: '96px' },
												{ key: 'hbg', value: 'Heavy Bowgun', minWidth: '96px' },
												{ key: 'bow', value: 'Bow', minWidth: '96px' },
											]}
											rows={personalBestsSummary}
										>
											<svelte:fragment slot="cell-header" let:header>
												{#if header.key === 'sns' || header.key === 'ds' || header.key === 'gs' || header.key === 'ls' || header.key === 'lance' || header.key === 'gl' || header.key === 'hammer' || header.key === 'hh' || header.key === 'tonfa' || header.key === 'saf' || header.key === 'ms' || header.key === 'lbg' || header.key === 'hbg' || header.key === 'bow'}
													{@const Weapon = getWeaponIcon(header.value)}
													<Weapon />
												{:else}
													{header.value}
												{/if}
											</svelte:fragment>
											<Toolbar
												><div class="toolbar">
													<CopyButton
														iconDescription={'Copy as CSV'}
														text={getCSVFromArray(personalBestsSummary)}
													/>
													<Button
														kind="tertiary"
														icon={Download}
														on:click={() =>
															downloadDomAsPng(
																'personal-bests-dom',
																'personal-bests',
															)}>Download</Button
													>
													<Dropdown
														titleText="Run Buffs Tag"
														bind:selectedId={selectedRunBuffsTag}
														items={[
															{ id: 'TA', text: 'Time Attack' },
															{ id: 'FDS', text: 'Freestyle Diva Skill' },
															{ id: 'FDP', text: 'Freestyle Diva Prayer' },
															{ id: 'FST', text: 'Freestyle Secret Tech' },
															{ id: 'FCA', text: 'Freestyle Course Attack' },
														]}
													/>
													<ToolbarSearch
														shouldFilterRows
														value=""
														bind:filteredRowIds={personalBestsTableFilteredRowIds}
													/>
												</div>
											</Toolbar>
											{#snippet cell({ cell, row, rowIndex })}
												{#if cell.key === 'monster'}
													<Tooltip hideIcon direction="right">
														{#snippet triggerText()}
															{#if monsterInfo.find((e) => e.displayName === cell.value)?.unusedComponent}
																<span
																	><img
																		width="100%"
																		alt={cell.value}
																		src={monsterInfo.find(
																			(e) => e.displayName === cell.value,
																		)?.icon}
																	/></span
																>
															{:else}
																<span>
																	<MonsterComponent
																		currentMonster={cell.value}
																		background={false}
																	/></span
																>
															{/if}
														{/snippet}
														<p>{cell.value}</p></Tooltip
													>
												{:else if cell.key === 'quest' || cell.key === 'questID'}
													<p>{cell.value}</p>
												{:else}
													<p>{cell.value}</p>
													<OutboundLink href="/">
														<div>
															<VideoPlayer size={24} color="var(--ctp-blue)" />
														</div>
													</OutboundLink>
												{/if}
											{/snippet}
										</DataTable>
									{/if}
								</div>
								<div class="weapon-usage">
									<SummaryWeaponUsage
										hunts={speedrunInfo}
										bind:theme={$carbonThemeStore}
									/>
								</div>
								<div class="calendar-graph">
									<SummaryHuntsCalendarGraph
										bind:theme={$carbonThemeStore}
										hunts={speedrunInfo}
									/>
								</div>
							</section>
						</TabContent>
						<TabContent>
							<section>
								<div class="table">
									{#if browser && speedrunInfo && speedrunInfo.length > 0 && selectedTabIndex === 1}
										<DataTable
											id="quest-history-dom"
											title="Quest History"
											pageSize={questsTablePageSize}
											page={questsTablePage}
											sortable
											zebra
											bind:sortKey={questsSortKey}
											bind:sortDirection={questsSortDirection}
											useStaticWidth
											headers={[
												{ key: 'weaponType', value: 'Weapon' },
												{
													key: 'objectiveName',
													value: 'Objective',
													minWidth: '64px',
												},
												{ key: 'quest', value: 'Quest', minWidth: '192px' },
												{ key: 'time', value: 'Time' },
												{ key: 'videoLink', value: 'Video' },
												{ key: 'date', value: 'Date', minWidth: '128px' },
												{ key: 'id', value: 'Run ID' },
												{ key: 'questID', value: 'Quest ID' },
												{ key: 'runBuffsTag', value: 'Run Buffs Tag' },
											]}
											rows={speedrunInfo.map((e) => {
												return {
													id: e.RunID,
													weaponType: ezlionWeaponType[e.WeaponTypeID],
													date: formatDateTime(e.CreatedAt),
													quest: ezlionQuest[e.QuestID],
													time: e.FinalTimeDisplay,
													objectiveName: e.ObjectiveName.replace(
														'Blitzkrieg',
														'Bombardier',
													),
													videoLink: '/',
													questID: e.QuestID,
													runBuffsTag: e.RunBuffsTag,
												};
											})}
										>
											<Toolbar
												><div class="toolbar">
													<CopyButton
														iconDescription={'Copy as CSV'}
														text={getCSVFromArray(
															speedrunInfo.map((e) => {
																return {
																	id: e.RunID,
																	weaponType: ezlionWeaponType[e.WeaponTypeID],
																	date: formatDateTime(e.CreatedAt),
																	quest: ezlionQuest[e.QuestID],
																	time: e.FinalTimeDisplay,
																	objectiveName: e.ObjectiveName.replace(
																		'Blitzkrieg',
																		'Bombardier',
																	),
																	videoLink: '/',
																	questID: e.QuestID,
																	runBuffsTag: e.RunBuffsTag,
																};
															}),
														)}
													/>
													<Button
														kind="tertiary"
														icon={Download}
														on:click={() =>
															downloadDomAsPng(
																'quest-history-dom',
																'quest-history',
															)}>Download</Button
													>
													<ToolbarSearch
														shouldFilterRows
														value=""
														bind:filteredRowIds={questsTableFilteredRowIds}
													/>
												</div>
											</Toolbar>
											{#snippet cell({ cell, row, rowIndex })}
												{#if cell.key === 'videoLink'}
													<OutboundLink href={cell.value}>
														<VideoPlayer size={24} color="var(--ctp-blue)" />
													</OutboundLink>
												{:else if cell.key === 'objectiveName'}
													<Tooltip hideIcon>
														{#snippet triggerText()}
															{#if monsterInfo.find((e) => e.displayName === cell.value)?.unusedComponent}
																<span
																	><img
																		width="100%"
																		alt={cell.value}
																		src={monsterInfo.find(
																			(e) => e.displayName === cell.value,
																		)?.icon}
																	/></span
																>
															{:else}
																<span>
																	<MonsterComponent
																		currentMonster={cell.value}
																		background={false}
																	/></span
																>
															{/if}
														{/snippet}
														<p>{cell.value}</p></Tooltip
													>
												{:else if cell.key === 'weaponType'}
													<Tooltip hideIcon direction="right">
														{#snippet triggerText()}
															{@const Weapon = getWeaponIcon(cell.value)}
															<span> <Weapon /></span>
														{/snippet}
														<p>{cell.value}</p></Tooltip
													>
												{:else if cell.key === 'trueRaw'}
													{#await generateSparkline(cell.value)}
														<SkeletonPlaceholder
															style="height: 64px; width: 192px;"
														/>
													{:then result}
														<result.component
															options={sparklineOptions}
															data={result.data}
														/>
													{/await}
												{:else}
													<p>{cell.value}</p>
												{/if}
											{/snippet}
										</DataTable>
										<Pagination
											pageSizes={[10]}
											bind:pageSize={questsTablePageSize}
											bind:page={questsTablePage}
											totalItems={questsTableFilteredRowIds.length}
										/>
									{/if}
								</div>
								<div>
									<div class="buttons"></div>
								</div>
							</section>
						</TabContent>
						<TabContent>
							<section>
								{#if browser && selectedTabIndex === 2}
									<SummaryAchievements obtainedAchievements={achievementInfo} />
								{/if}
							</section>
						</TabContent>
						<TabContent>
							<section>
								<code><pre>{JSON.stringify(mezFesInfo, null, 2)}</pre></code>
							</section>
						</TabContent>
					{/snippet}
				</Tabs>
			</div>
			<!-- <div class="table-grid">
				{#each speedrunInfo as table}
					<div class="table-card">
						<h3>{table.name}</h3>
						<p>Rows: {table.rowCount}</p>
						<details>
							<summary>Row Details</summary>
							<ul>
								{#each table.rows as row}
									<li>{JSON.stringify(row, null, 2)}</li>
								{/each}
							</ul>
						</details>
					</div>
				{/each}
			</div> -->
		{:else if uploadState === 'idle'}
			<div class="centered">
				<FileUploaderDropContainer
					accept={['.sqlite']}
					bind:files={databaseFiles}
					onchange={handleFileSubmit}
					labelText="Drag and drop MHFZ_Overlay.sqlite here or click to upload (256MB max)"
					validateFiles={(files) => {
						return files.filter(
							(file) =>
								file.size < 256 * Math.pow(10, 6) &&
								file.name.endsWith('.sqlite'),
						);
					}}
				/>
			</div>
		{:else if uploadState === 'loading'}
			<div class="loading-container">
				<ProgressIndicator
					vertical
					preventChangeOnClick
					currentIndex={loadingIndex}
				>
					<ProgressStep
						complete={loadingIndex > 0}
						label="Verifying integrity"
					/>
					<ProgressStep
						complete={loadingIndex > 1}
						label="Checking overlay version"
					/>
					<ProgressStep complete={loadingIndex > 2} label="Filtering tables" />
					<ProgressStep complete={loadingIndex > 3} label="Getting speedruns" />
					<ProgressStep
						complete={loadingIndex > 4}
						label="Denormalizing tables"
					/>
					<ProgressStep complete={loadingIndex > 5} label="Finished!" />
				</ProgressIndicator>
				<Loading
					withOverlay={false}
					description={'Loading quest database...'}
				/>
			</div>
		{/if}
	</div>
</section>

<style lang="scss">
	.calendar-graph {
		margin-bottom: 2rem;
	}

	.weapon-usage {
		margin-top: 2rem;
		margin-bottom: 2rem;
	}

	.top-buttons {
		display: flex;
		gap: 1rem;
		margin-bottom: 2rem;
		flex-wrap: wrap;
	}

	.centered {
		display: flex;
		justify-self: center;
	}

	.loading-container {
		display: grid;
		grid-template-columns: 1fr 1fr;
		align-items: center;
	}

	.table {
		max-width: 100%;
		overflow-x: auto;
	}

	.table-with-scrollbar {
		max-height: 80vh;
		overflow: auto;
	}

	.toolbar {
		padding: 1rem;
		display: flex;
		align-items: center;
		gap: 1rem;
		flex-grow: 1;
		flex-shrink: 1;
	}
</style>
