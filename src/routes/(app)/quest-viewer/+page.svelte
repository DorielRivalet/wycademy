<!--
  ~ © 2024 Doriel Rivalet
  ~ Use of this source code is governed by a MIT license that can be
  ~ found in the LICENSE file.
-->

<script lang="ts">
	// quest-viewer/+page.svelte
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
	import { ezlionItem, ezlionQuest, ezlionWeaponType } from 'ezlion';
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
	import { getContext, onMount } from 'svelte';
	import type { Writable } from 'svelte/store';
	import SummaryWeaponUsage from '$lib/client/components/SummaryWeaponUsage.svelte';
	import SummaryQuestGear from '$lib/client/components/SummaryQuestGear.svelte';
	import SummaryQuestGraphs from '$lib/client/components/SummaryQuestGraphs.svelte';
	import { browser } from '$app/environment';
	import { downloadDomAsPng } from '$lib/client/modules/download';
	import TextInput from 'carbon-components-svelte/src/TextInput/TextInput.svelte';
	import FetchUpload from 'carbon-icons-svelte/lib/FetchUpload.svelte';
	import Help from 'carbon-icons-svelte/lib/Help.svelte';
	import Upload from 'carbon-icons-svelte/lib/Upload.svelte';
	import Link from 'carbon-components-svelte/src/Link/Link.svelte';
	import UnorderedList from 'carbon-components-svelte/src/UnorderedList/UnorderedList.svelte';
	import ListItem from 'carbon-components-svelte/src/ListItem/ListItem.svelte';
	import slugify from 'slugify';
	import { v4 as uuidv4 } from 'uuid';
	import { driver } from 'driver.js';
	import 'driver.js/dist/driver.css';
	import type { OnboardingType } from '$lib/client/types/onboarding';

	// TODO
	const onboardingTypeStore = getContext(
		Symbol.for('onboardingType'),
	) as Writable<OnboardingType>;

	const onboardingStepStore = getContext(
		Symbol.for('onboardingStep'),
	) as Writable<number>;

	let { data } = $props();
	let { countries, profile } = $derived(data);

	const carbonThemeStore = getContext(
		Symbol.for('carbonTheme'),
	) as Writable<CarbonTheme>;

	async function startWalkthrough() {
		if (!browser) return;
		if ($onboardingStepStore !== 4) return;

		const driverObj = driver({
			popoverClass: 'driverjs-theme',
			allowClose: false,
			disableActiveInteraction: true,
			steps: [
				{
					element: '.driverjs-0-4',
					popover: {
						title: 'Read the Instructions',
						description:
							'Now that you have a public profile, you can submit quests into leaderboards. Please read the instructions in the page introduction and in the Help section.',
					},
				},
				{
					element: '.driverjs-1-4',
					popover: {
						title: "Loading other hunter's quest data",
						description:
							'You can also see the profile data of other hunters by inserting their username here.',
					},
				},
				{
					element: '.driverjs-2-4',
					popover: {
						title: 'Submit to Leaderboards',
						description:
							'Once you upload quests via the "Submit to Leaderboards" button, you can view your data on leaderboards and in the Quest History section of your profile.',
					},
				},
				{
					element: '.driverjs-3-4',
					popover: {
						title: 'Happy Hunting!',
						description:
							'You completed the onboarding process! You can revisit onboarding processes and tutorials via the "Go to onboarding page" button at the bottom of your home page.',
						onNextClick: async () => {
							// .. load element dynamically
							// .. and then call
							// TODO does this trigger?
							$onboardingTypeStore = '';
							$onboardingStepStore = 0;
							driverObj.moveNext();
						},
					},
				},
			],
		});

		driverObj.drive();
	}

	// Submit the file via fetch
	// quest-viewer/+page.svelte
	async function handleFileSubmit(event) {
		event.preventDefault();

		if (!databaseFiles || databaseFiles.length === 0) {
			errorMessage = 'Please select a file to upload.';
			return;
		}

		uploadState = 'loading';
		loadingIndex = 0;
		currentUserChunk = 0;
		totalUserChunks = 0;

		const file = databaseFiles[0];
		const fileSize = file.size;
		const chunkSize = 4 * 1024 * 1024; // 4MB per chunk
		const totalChunks = Math.ceil(fileSize / chunkSize);
		const uploadUuid = uuidv4();
		const uploadId = `${uploadUuid.toString()}`; // TODO safe?

		let accumulatedText = '';
		let accumulatedResult = null;

		console.log(`File size: ${Math.trunc(fileSize / 1024 / 1024)}MB`);
		console.log(`Total chunks: ${totalChunks}`);

		totalUserChunks = totalChunks;

		try {
			// Iterate through file chunks
			for (let chunkIndex = 0; chunkIndex < totalChunks; chunkIndex++) {
				currentUserChunk = chunkIndex + 1;

				const start = chunkIndex * chunkSize;
				const end = Math.min(fileSize, start + chunkSize);
				const chunk = file.slice(start, end);

				// Prepare FormData for this chunk
				const formData = new FormData();
				formData.append('chunk', chunk);
				formData.append('chunkIndex', chunkIndex.toString());
				formData.append('totalChunks', totalChunks.toString());
				formData.append('fileSize', fileSize.toString());
				formData.append('uploadId', uploadId.toString());

				console.log(
					`Uploading client chunk ${chunkIndex + 1}/${totalChunks} with uploadId ${uploadId}`,
				);

				// Send the chunk to the server
				// TODO does this make it safer?
				const response = await fetch(`/quest-viewer/upload/${uploadId}`, {
					method: 'POST',
					body: formData,
				});

				if (!response.ok) {
					errorMessage = `Error uploading client chunk ${chunkIndex + 1}/${totalChunks} with uploadId ${uploadId}`;
					uploadState = 'idle';
					currentUserChunk = 0;
					totalUserChunks = 0;
					console.log(
						`Error uploading client chunk ${chunkIndex + 1}/${totalChunks} with uploadId ${uploadId}`,
					);
					return;
				}

				console.log(
					`Processing uploaded client chunk ${chunkIndex + 1}/${totalChunks} with uploadId ${uploadId}`,
				);

				// Process the response for this chunk
				const reader = response.body?.getReader();
				const decoder = new TextDecoder();

				if (reader) {
					console.log('reader found');
					while (true) {
						const { done, value } = await reader.read();
						if (done) break;

						accumulatedText += decoder.decode(value);

						// Split accumulated text into lines
						const lines = accumulatedText.split('\n');

						// Process each complete line
						for (let i = 0; i < lines.length - 1; i++) {
							const line = lines[i].trim();
							if (line.startsWith('data:')) {
								console.log('found data line');

								try {
									const { index, message, result, error } = JSON.parse(
										line.slice(5),
									);

									if (error) {
										errorMessage = error;
										uploadState = 'idle';
										currentUserChunk = 0;
										totalUserChunks = 0;
										console.log(error);
										return;
									}

									// Update loading progress index
									loadingIndex = index;

									// Update state variables with the final result
									if (result) {
										console.log('update final result');
										accumulatedResult = result;

										// Optional: Update UI with partial results
										// speedrunInfo = result.speedrunInfo || [];
										// mezFesInfo = result.mezFesInfo || [];
										// achievementInfo = result.achievementInfo || [];
									}
								} catch (err) {
									console.error('Failed to parse JSON:', line);
								}
							}
						}

						// Keep only the last (possibly incomplete) line in the buffer
						accumulatedText = lines[lines.length - 1];
					}
				} else {
					console.log('reader not found yet');
				}
			}

			// Final processing after all chunks
			if (accumulatedResult) {
				speedrunInfo = accumulatedResult.speedrunInfo || [];
				mezFesInfo = accumulatedResult.mezFesInfo || [];
				achievementInfo = accumulatedResult.achievementInfo || [];
				summaryQuestGearRunID =
					accumulatedResult.speedrunInfo[
						accumulatedResult.speedrunInfo.length - 1
					]?.RunID || 0;
				summaryQuestGraphsRunID1 =
					accumulatedResult.speedrunInfo[
						accumulatedResult.speedrunInfo.length - 1
					]?.RunID || 0;

				console.log(`Done uploading, uploadId ${uploadId}`);
				uploadState = 'done';
			} else {
				currentUserChunk = 0;
				totalUserChunks = 0;
				console.log(`Final result not found, uploadId ${uploadId}`);
			}
		} catch (err) {
			errorMessage = err.message;
			uploadState = 'idle';
			currentUserChunk = 0;
			totalUserChunks = 0;
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

	// TODO filter out quests in table that cannot have specific run buffs tags eg dure etc.
	function getCompletedQuestsForPersonalBestsTableCount(
		personalBestsSummary: {
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
		}[],
	) {
		let count = 0;

		// Count the total amount of weapon times that are not equal to "--:--.--"
		personalBestsSummary.forEach((row) => {
			const weapons = [
				row.sns,
				row.ds,
				row.gs,
				row.ls,
				row.hammer,
				row.hh,
				row.lance,
				row.gl,
				row.tonfa,
				row.saf,
				row.ms,
				row.bow,
				row.lbg,
				row.hbg,
			];

			count += weapons.filter(
				(weaponTime) => weaponTime !== '--:--.---',
			).length;
		});

		return count;
	}

	function downloadSQLiteFileAsJSON(filePrefix: string) {
		if (!browser) return;
		const link = document.createElement('a');
		link.download = `${slugify(`${filePrefix}-sqlite-${new Date().toISOString()}.json`)}`;
		let sqliteData = {
			speedrunInfo: speedrunInfo,
			achievementInfo: achievementInfo,
			mezFesInfo: mezFesInfo,
		};

		// Convert the data to JSON format
		const jsonData = JSON.stringify(sqliteData, null, 2);

		// Create a Blob object containing the JSON data
		const blob = new Blob([jsonData], { type: 'application/json' });

		// Set the href attribute of the link to the URL of the Blob
		link.href = URL.createObjectURL(blob);

		// Simulate a click event on the link to trigger the download
		link.click();

		// Clean up the Blob URL
		setTimeout(() => {
			URL.revokeObjectURL(link.href);
		}, 100);
	}

	function downloadRunAsJSON(filePrefix: string, runID: number) {
		if (!browser) return;
		const link = document.createElement('a');
		link.download = `${slugify(`${filePrefix}-${runID}-${new Date().toISOString()}.json`)}`;
		let runData = speedrunInfo.find((e) => e.RunID === runID) || {};

		// Convert the runData to JSON format
		const jsonData = JSON.stringify(runData, null, 2);

		// Create a Blob object containing the JSON data
		const blob = new Blob([jsonData], { type: 'application/json' });

		// Set the href attribute of the link to the URL of the Blob
		link.href = URL.createObjectURL(blob);

		// Simulate a click event on the link to trigger the download
		link.click();

		// Clean up the Blob URL
		setTimeout(() => {
			URL.revokeObjectURL(link.href);
		}, 100);
	}

	function onLoadUsername(username: string) {}

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
	let selectedRunBuffsTag: RunBuffsTag = $state('FDP');
	let personalBestsTableFilteredRowIds: string[] = $state([]);
	let personalBestsSummary = $derived(
		getPersonalBestsSummary(
			speedrunInfo,
			questIDWhitelist,
			selectedRunBuffsTag,
		),
	);

	let summaryQuestGearRunID = $state(0);
	let summaryQuestGraphsRunID1 = $state(0);
	let summaryQuestGraphsRunID2 = $state(0);
	let selectedQuestID = $state(0);
	let username = $state('');
	let downloadRunID = $state(0);

	let currentUserChunk = $state(0);
	let totalUserChunks = $state(0);

	onMount(() => {
		if ($onboardingTypeStore === 'leaderboards' && $onboardingStepStore === 4) {
			startWalkthrough();
		}
	});
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
		<p class="spaced-paragraph driverjs-0-4">
			Examine your quest information and share your results in leaderboards. The
			file data that is uploaded is not stored on our servers unless you use the
			"Submit to Leaderboards" button. You need to create a <Link
				href="/profile"
				inline>public profile</Link
			> in order to submit quests to leaderboards. The "Submit to Leaderboards" button
			will only show after validating your sqlite file, not before.
		</p>

		<Accordion class="spaced-accordion">
			<AccordionItem>
				{#snippet title()}
					<h5 class="accordion-title">
						<span><Help /></span><span>Help</span>
					</h5>
				{/snippet}
				<div class="spaced-paragraph">
					You can obtain a sqlite file by using the <Link inline href="/overlay"
						>overlay.</Link
					> Only certain types of quests are allowed to be submitted, which are automatically
					filtered out. You should generate sqlite files from the overlay via the
					"Generate speedrun files" button, found in the Overlay's Configuration
					Window.
				</div>
				<div class="spaced-paragraph">
					The filters and requirements for deciding which quests to allow are
					shown in the <Link
						href="/support/policies/community-standards#quest-submission-process"
						inline>Community Standards page.</Link
					>
				</div>
				<div class="spaced-paragraph">
					If the upload process fails, please retry at a later time. Make sure
					to keep this page focused while uploading to avoid potential errors.
					If the issue persists, you can <OutboundLink
						href="https://github.com/DorielRivalet/wycademy/issues/new?assignees=DorielRivalet&labels=bug&projects=&template=BUG-REPORT.yml&title=%5BBUG%5D+-+title"
						>submit a bug report.</OutboundLink
					>
				</div>
				<div class="spaced-paragraph">
					For more information, please see <Link inline href="/leaderboard"
						>our Leaderboards.</Link
					>
				</div>
			</AccordionItem></Accordion
		>

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
						currentUserChunk = 0;
						totalUserChunks = 0;
					}}
					icon={Restart}>Load another file</Button
				><Button
					disabled
					kind="tertiary"
					onclick={() => console.log('submit')}
					icon={Upload}>Submit to Leaderboards</Button
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
								<div class="buttons">
									<Button
										kind="tertiary"
										icon={Download}
										on:click={() => downloadSQLiteFileAsJSON('quest-viewer')}
										>Download SQLite as JSON</Button
									>
								</div>
								<div class="table table-with-scrollbar">
									{#if browser && speedrunInfo && speedrunInfo.length > 0 && selectedTabIndex === 0}
										<DataTable
											id="personal-bests-dom"
											title={`Personal Bests | ${selectedRunBuffsTag} | ${getCompletedQuestsForPersonalBestsTableCount(personalBestsSummary)}/${personalBestsSummary.length * 14}`}
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
										theme={$carbonThemeStore}
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
												{
													key: 'weaponType',
													value: 'Weapon',
													width: '48px',
												},
												{
													key: 'objectiveName',
													value: 'Objective',
													width: '48px',
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
								<section>
									<SectionHeading level={2} title="Gear" />
									<div>
										<SummaryQuestGear
											bind:runID={summaryQuestGearRunID}
											hunt={speedrunInfo.find(
												(e) => e.RunID === summaryQuestGearRunID,
											)}
										/>
									</div>
								</section>
								<section>
									<SectionHeading level={2} title="Graphs" />
									<div>
										<SummaryQuestGraphs
											bind:runID1={summaryQuestGraphsRunID1}
											bind:runID2={summaryQuestGraphsRunID2}
											hunt1={speedrunInfo.find(
												(e) => e.RunID === summaryQuestGraphsRunID1,
											)}
											hunt2={speedrunInfo.find(
												(e) => e.RunID === summaryQuestGraphsRunID2,
											)}
											bind:theme={$carbonThemeStore}
										/>
									</div>
								</section>
								<section>
									<SectionHeading level={2} title="Timelines" />
									<div>
										<p>a</p>
									</div>
								</section>
								<section>
									<!--TODO quest pace and personal bests-->
									<SectionHeading level={2} title="Quest Times" />
									<div>
										<p>a</p>
									</div>
								</section>
								<section>
									<SectionHeading level={2} title="Download Original Data" />
									<div>
										<div class="buttons">
											<NumberInput
												size="sm"
												min={0}
												step={1}
												bind:value={downloadRunID}
												label={'Run ID'}
											/>
											<Button
												kind="tertiary"
												icon={Download}
												on:click={() =>
													downloadRunAsJSON(
														'quest-viewer-run-id',
														downloadRunID,
													)}>Download as JSON</Button
											>
										</div>
									</div>
								</section>
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
		{:else if uploadState === 'idle'}
			<div
				class="centered flex-column drop-container driverjs-2-4 driverjs-3-4"
			>
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
				<p>or load one via username (e.g. musou-valstrax-1234):</p>
				<div class="load-share-url driverjs-1-4">
					<TextInput bind:value={username} labelText="Username" />
					<Button
						disabled={username === ''}
						iconDescription="Username"
						icon={FetchUpload}
						on:click={() => onLoadUsername(username)}
						kind="tertiary">Load</Button
					>
				</div>
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
				<div class="loading-spin-container">
					<Loading
						withOverlay={false}
						description={'Loading quest database...'}
					/>
					<p>Chunk {currentUserChunk}/{totalUserChunks}</p>
				</div>
			</div>
		{/if}
	</div>
	<ul>
		{#each countries as country}
			<li>{JSON.stringify(country, null, 2)}</li>
		{/each}
	</ul>
	<!-- {#if session}
		<div class="session-data">
			<code><pre>Session: {JSON.stringify(session, null, 2)}</pre></code>
			<code><pre>User: {JSON.stringify(user, null, 2)}</pre></code>
			<code><pre>Profile: {JSON.stringify(profile, null, 2)}</pre></code>
		</div>
	{/if} -->
</section>

<style lang="scss">
	.calendar-graph {
		margin-bottom: 2rem;
	}

	.session-data {
		display: flex;
		flex-direction: column;
		gap: 2rem;
		width: 100%;
		overflow-x: auto;
		background-color: var(--ctp-mantle);
	}

	.weapon-usage {
		margin-top: 2rem;
		margin-bottom: 2rem;
	}

	.top-buttons {
		display: flex;
		gap: 1rem;
		margin-bottom: 2rem;
		margin-top: 2rem;
		flex-wrap: wrap;
	}

	.drop-container {
		margin-top: 2rem;
	}

	.centered {
		display: flex;
		justify-self: center;
	}

	.loading-container {
		display: grid;
		grid-template-columns: 1fr 1fr;
		align-items: center;
		margin-top: 2rem;
	}

	.loading-spin-container {
		display: flex;
		gap: 1rem;
		flex-direction: column;
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

	.flex-column {
		display: flex;
		flex-direction: column;
		gap: 1rem;
	}

	.load-share-url {
		display: flex;
		align-items: center;
		gap: 1rem;
	}

	.accordion-title {
		display: flex;
		gap: 0.25rem;
		align-items: start;
		vertical-align: middle;
	}

	.buttons {
		display: flex;
		gap: 1rem;
		margin-bottom: 1rem;
	}
</style>
