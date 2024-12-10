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
	import AchievementsSummary from '$lib/client/components/AchievementsSummary.svelte';
	import Dropdown from 'carbon-components-svelte/src/Dropdown/Dropdown.svelte';
	import ProgressIndicator from 'carbon-components-svelte/src/ProgressIndicator/ProgressIndicator.svelte';
	import ProgressStep from 'carbon-components-svelte/src/ProgressIndicator/ProgressStep.svelte';

	const customTitle = "Quest Viewer — Frontier's Wycademy";
	const url = $page.url.toString();
	const description =
		'Examine your quest data and share the results with other hunters.';

	let uploadState: 'idle' | 'loading' | 'done' = $state('idle');
	let databaseFiles: ReadonlyArray<File> = $state([]);
	let errorMessage: string | null = $state(null);
	let tableInfo: any[] = $state([]);
	let loadingIndex = $state(0);

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
								tableInfo = result.tableInfo;
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
			The quest data that is uploaded is not stored on our servers unless you
			use the Share button. The share URL and its quest data automatically gets
			removed after 2 days.
		</p>

		{#if errorMessage}
			<InlineNotification kind="error" title="Error:" subtitle={errorMessage} />
		{/if}

		{#if tableInfo.length > 0 && uploadState === 'done'}
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
				<Tabs autoWidth>
					<Tab label="Summary" />
					<Tab label="Quests" />
					<Tab label="Gear" />
					<Tab label="Achievements" />
					<Tab label="Events" />
					{#snippet content()}
						<TabContent>
							<section></section>
						</TabContent>
						<TabContent>
							<section></section>
						</TabContent>
						<TabContent>
							<section></section>
						</TabContent>
						<TabContent>
							<section>
								<AchievementsSummary
									obtainedAchievements={tableInfo.find(
										(e) => e.name === 'PlayerAchievements',
									)?.rows}
								/>
							</section>
						</TabContent>
						<TabContent>
							<section></section>
						</TabContent>
					{/snippet}
				</Tabs>
			</div>
			<div class="table-grid">
				{#each tableInfo as table}
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
			</div>
		{:else if uploadState === 'idle'}
			<div class="centered">
				<FileUploaderDropContainer
					accept={['.sqlite']}
					bind:files={databaseFiles}
					onchange={handleFileSubmit}
					labelText="Drag and drop images here or click to upload (256MB max)"
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
					<ProgressStep complete={loadingIndex > 2} label="Trimming database" />
					<ProgressStep complete={loadingIndex > 3} label="Getting speedruns" />
					<ProgressStep complete={loadingIndex > 4} label="Finished!" />
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
	.table-grid {
		display: grid;
		grid-template-columns: repeat(auto-fit, minmax(512px, 1fr));
		gap: 1rem;
	}

	.table-card {
		padding: 1rem;
		border: 1px solid var(--ctp-surface1);
		border-radius: 8px;
		background: var(--ctp-surface0);
		box-shadow: 0 2px 4px rgba(0, 0, 0, 0.1);
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
</style>
