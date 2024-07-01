<!--
  ~ © 2023 Doriel Rivalet
  ~ Use of this source code is governed by a MIT license that can be
  ~ found in the LICENSE file.
-->

<script lang="ts">
	import pageThumbnail from '$lib/client/images/logo.png';
	import {
		authorName,
		authorUrl,
		datePublished,
		description,
		projectName,
		website,
	} from '$lib/constants';
	import Head from '$lib/client/components/Head.svelte';
	import { page } from '$app/stores';
	import ProfileHeader from '$lib/client/components/ProfileHeader.svelte';
	import ProfileFooter from '$lib/client/components/ProfileFooter.svelte';
	import ProfileFollows from '$lib/client/components/ProfileFollows.svelte';
	import ProfileTrophyCase from '$lib/client/components/ProfileTrophyCase.svelte';
	import ProfileStatsSummary from '$lib/client/components/ProfileStatsSummary.svelte';
	import ProfilePinnedSets from '$lib/client/components/ProfilePinnedSets.svelte';
	import { theme } from '$lib/client/stores/theme';
	import SectionHeading from '$lib/client/components/SectionHeading.svelte';
	import ProfileRecentHunts from '$lib/client/components/ProfileRecentHunts.svelte';
	import ProfileHuntsGraph from '$lib/client/components/ProfileActivityOverviewGraph.svelte';
	import ProfileRecentActivity from '$lib/client/components/ProfileRecentActivity.svelte';
	import ProfileHuntsCalendarGraph from '$lib/client/components/ProfileHuntsCalendarGraph.svelte';
	import ProfileGuildCard from '$lib/client/components/ProfileGuildCard.svelte';
	import ProfileFavoriteRuns from '$lib/client/components/ProfileFavoriteRuns.svelte';
	import ProfileFavoriteSets from '$lib/client/components/ProfileFavoriteSets.svelte';
	import Flag from 'carbon-icons-svelte/lib/Flag.svelte';
	import Button from 'carbon-components-svelte/src/Button/Button.svelte';
	import Modal from 'carbon-components-svelte/src/Modal/Modal.svelte';
	import Form from 'carbon-components-svelte/src/Form/Form.svelte';
	import FormGroup from 'carbon-components-svelte/src/FormGroup/FormGroup.svelte';
	import RadioButton from 'carbon-components-svelte/src/RadioButton/RadioButton.svelte';
	import RadioButtonGroup from 'carbon-components-svelte/src/RadioButtonGroup/RadioButtonGroup.svelte';
	import Tooltip from 'carbon-components-svelte/src/Tooltip/Tooltip.svelte';
	import Security from 'carbon-icons-svelte/lib/Security.svelte';
	import NextOutline from 'carbon-icons-svelte/lib/NextOutline.svelte';
	import Send from 'carbon-icons-svelte/lib/Send.svelte';
	import TextArea from 'carbon-components-svelte/src/TextArea/TextArea.svelte';
	import ProfilePinnedRuns from '$lib/client/components/ProfilePinnedRuns.svelte';
	import Tabs from 'carbon-components-svelte/src/Tabs/Tabs.svelte';
	import Tab from 'carbon-components-svelte/src/Tabs/Tab.svelte';
	import TabContent from 'carbon-components-svelte/src/Tabs/TabContent.svelte';

	// import Bookmark from 'carbon-icons-svelte/lib/Bookmark.svelte';
	// import BookmarkFilled from 'carbon-icons-svelte/lib/BookmarkFilled.svelte';
	// import Badge from 'carbon-icons-svelte/lib/Badge.svelte';
	// import Box from 'carbon-icons-svelte/lib/Box.svelte';
	// import Bullhorn from 'carbon-icons-svelte/lib/Bullhorn.svelte';
	// import CenterCircle from 'carbon-icons-svelte/lib/CenterCircle.svelte';
	// import ColorPalette from 'carbon-icons-svelte/lib/ColorPalette.svelte';
	// import Download from 'carbon-icons-svelte/lib/Download.svelte';
	// import FaceActivatedAdd from 'carbon-icons-svelte/lib/FaceActivatedAdd.svelte';
	// import Export from 'carbon-icons-svelte/lib/Export.svelte';
	// import GameConsole from 'carbon-icons-svelte/lib/GameConsole.svelte';
	// import Home from 'carbon-icons-svelte/lib/Home.svelte';
	// import InformationFilled from 'carbon-icons-svelte/lib/InformationFilled.svelte';
	// import MagicWand from 'carbon-icons-svelte/lib/MagicWand.svelte';
	// import MagicWandFilled from 'carbon-icons-svelte/lib/MagicWandFilled.svelte';
	// import NotificationCounter from 'carbon-icons-svelte/lib/NotificationCounter.svelte';
	// import Quotes from 'carbon-icons-svelte/lib/Quotes.svelte';
	// import Save from 'carbon-icons-svelte/lib/Save.svelte';
	// import Settings from 'carbon-icons-svelte/lib/Settings.svelte';
	// import Tag from 'carbon-icons-svelte/lib/Tag.svelte';
	// import TagEdit from 'carbon-icons-svelte/lib/TagEdit.svelte';
	// import Timer from 'carbon-icons-svelte/lib/Timer.svelte';
	// import Upload from 'carbon-icons-svelte/lib/Upload.svelte';
	// import Share from 'carbon-icons-svelte/lib/Share.svelte';
	// import Keyboard from 'carbon-icons-svelte/lib/Keyboard.svelte';
	// import Edit from 'carbon-icons-svelte/lib/Edit.svelte';
	// import StarFilled from 'carbon-icons-svelte/lib/StarFilled.svelte';
	// import ChartRadar from 'carbon-icons-svelte/lib/ChartRadar.svelte';
	// import ChartLine from 'carbon-icons-svelte/lib/ChartLine.svelte';
	// import CheckmarkFilled from 'carbon-icons-svelte/lib/CheckmarkFilled.svelte';
	// import Add from 'carbon-icons-svelte/lib/Add.svelte';
	// import Filter from 'carbon-icons-svelte/lib/Filter.svelte';
	// import Search from 'carbon-icons-svelte/lib/Search.svelte';
	// import Trophy from 'carbon-icons-svelte/lib/Trophy.svelte';
	// import TrashCan from 'carbon-icons-svelte/lib/TrashCan.svelte';
	// import VideoPlayer from 'carbon-icons-svelte/lib/VideoPlayer.svelte';
	// import VideoAdd from 'carbon-icons-svelte/lib/VideoAdd.svelte';
	// import Link from 'carbon-icons-svelte/lib/Link.svelte';
	// import UserAvatar from 'carbon-icons-svelte/lib/UserAvatar.svelte';
	// import Copy from 'carbon-icons-svelte/lib/Copy.svelte';
	// import Tab from 'carbon-components-svelte/src/Tabs/Tab.svelte';
	// import Tabs from 'carbon-components-svelte/src/Tabs/Tabs.svelte';
	// import TabContent from 'carbon-components-svelte/src/Tabs/TabContent.svelte';

	const customTitle = 'User Demo';
	const url = $page.url.toString();

	let open = false;
	let modalPage: 1 | 2 | 3 = 1;
	let selectedReportOption: string | number | undefined = undefined;
	let reportDetails = '';

	function getPrimaryButtonText(page: 1 | 2 | 3) {
		switch (page) {
			default:
				return 'OK';
			case 1:
				return 'Next';
			case 2:
				return 'Submit';
		}
	}

	function getSecondaryButtons(
		page: 1 | 2 | 3,
	): undefined | [{ text: string }, { text: string }] {
		switch (page) {
			default:
				return [{ text: '' }];
			case 1:
				return [{ text: 'Cancel' }];
			case 2:
				return [{ text: 'Cancel' }, { text: 'Previous' }];
		}
	}

	function getSecondaryButtonText(page: 1 | 2 | 3) {
		switch (page) {
			default:
				return '';
			case 1:
				return 'Cancel';
		}
	}

	function getPrimaryButtonIcon(page: 1 | 2 | 3) {
		switch (page) {
			default:
				return undefined;
			case 1:
				return NextOutline;
			case 2:
				return Send;
		}
	}

	const maxReportDetailsLength = 1024;
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

<Modal
	bind:open
	modalHeading="Report user"
	primaryButtonDisabled={selectedReportOption === undefined}
	primaryButtonText={getPrimaryButtonText(modalPage)}
	secondaryButtonText={getSecondaryButtonText(modalPage)}
	secondaryButtons={getSecondaryButtons(modalPage)}
	primaryButtonIcon={getPrimaryButtonIcon(modalPage)}
	hasForm
	on:click:button--primary={() => {
		switch (modalPage) {
			case 1:
				modalPage++;
				return;
			case 2:
				modalPage++;
				return;
			case 3:
				open = false;
				return;
		}
	}}
	shouldSubmitOnEnter={false}
	on:click:button--secondary={({ detail }) => {
		if (detail.text === 'Previous') modalPage--;
		if (detail.text === 'Cancel') open = false;
	}}
	on:open
	on:close={() => {
		modalPage = 1;
		reportDetails = '';
	}}
	on:submit={(e) => {
		console.log('submit modal', e);
	}}
>
	<Form
		on:submit={(e) => {
			e.preventDefault();
			console.log('submit form', e);
		}}
	>
		{#if modalPage === 1}
			<FormGroup
				invalid={selectedReportOption === undefined}
				message={selectedReportOption === undefined}
				messageText={selectedReportOption === undefined
					? 'Please select an option.'
					: ''}
			>
				<RadioButtonGroup
					required={true}
					orientation="vertical"
					bind:selected={selectedReportOption}
					name="radio-button-group"
					><div class="radio-button-container">
						<RadioButton id="radio-1" value="cheating" labelText="Cheating" />
						<Tooltip>
							<p>
								Use of hacks, exploits, or other unfair methods to achieve their
								speedrun times.
							</p>
						</Tooltip>
					</div>
					<div class="radio-button-container">
						<RadioButton
							id="radio-2"
							value="impersonation"
							labelText="Impersonation"
						/>
						<Tooltip>
							<p>
								Pretending to be someone they are not, possibly using similar
								usernames or stolen identities.
							</p>
						</Tooltip>
					</div>
					<div class="radio-button-container">
						<RadioButton
							id="radio-3"
							value="inappropriate"
							labelText="Inappropriate Content"
						/>
						<Tooltip>
							<p>
								Inappropriate language or content in their profile descriptions,
								usernames, or uploaded media (such as video titles or
								thumbnails).
							</p>
						</Tooltip>
					</div>
					<div class="radio-button-container">
						<RadioButton
							id="radio-4"
							value="inaccurate"
							labelText="Inaccurate Information"
						/>
						<Tooltip>
							<p>
								False or misleading information about achievements, such as fake
								statistics or incorrect claims.
							</p>
						</Tooltip>
					</div>
					<div class="radio-button-container">
						<RadioButton id="radio-5" value="spam" labelText="Spam" />
						<Tooltip>
							<p>
								Fake accounts or uploading irrelevant content just to clutter
								the website.
							</p>
						</Tooltip>
					</div>
					<div class="radio-button-container">
						<RadioButton
							id="radio-6"
							value="harassment"
							labelText="Harassment or Abuse"
						/>
						<Tooltip>
							<p>
								Harassment through usernames, video titles, or indirect
								references.
							</p>
						</Tooltip>
					</div>
					<div class="radio-button-container">
						<RadioButton id="radio-7" value="other" labelText="Other" />
						<Tooltip>
							<p>
								Any other option not found above, you can elaborate on the next
								section.
							</p>
						</Tooltip>
					</div>
				</RadioButtonGroup>
			</FormGroup>
		{:else if modalPage === 2}
			<div>
				<TextArea
					labelText="Submit details (optional)"
					placeholder="Enter details..."
					helperText="An explanation of your report helps us better understand your submission."
					maxCount={1024}
					bind:value={reportDetails}
				/>
			</div>
		{:else if modalPage === 3}
			<div class="report-end">
				<Security size={32} />
				<p>
					Thank you for your report, our team of moderators will review your
					submission and may notify you in the future.
				</p>
			</div>
		{/if}
	</Form>
</Modal>

<div class="container">
	<section class="top">
		<ProfileHeader />
		<ProfileFollows />
	</section>

	<section>
		<ProfileStatsSummary />
	</section>

	<!-- This only shows if the user has at least one trophy.-->
	<section>
		<ProfileTrophyCase />
	</section>

	<section class="report-section">
		<Button kind="tertiary" icon={Flag} on:click={() => (open = true)}
			>Report Abuse</Button
		>
	</section>

	<Tabs autoWidth>
		<Tab label="Overview" />
		<Tab label="Quests" />
		<Tab label="Achievements" />
		<Tab label="Favorites" />
		<Tab label="Events" />

		<svelte:fragment slot="content">
			<TabContent>
				<section>
					<SectionHeading level={2} title="Wardrobe" />
					<ProfilePinnedSets bind:theme={$theme} />
				</section>
				<section>
					<SectionHeading level={2} title="Pinned Runs" />
					<ProfilePinnedRuns bind:theme={$theme} />
				</section>
				<section>
					<SectionHeading level={2} title="Guild Card" />
					<ProfileGuildCard />
				</section>
				<section>
					<SectionHeading level={2} title="Recent Activity" />
					<ProfileRecentActivity />
				</section>
			</TabContent>
			<TabContent>
				<section>
					<SectionHeading level={2} title="Quests Stats" />
					<ProfileHuntsCalendarGraph bind:theme={$theme} />
				</section>
				<section>
					<ProfileHuntsGraph />
				</section>
				<section>
					<ProfileRecentHunts />
				</section>
			</TabContent>
			<TabContent>Achievements</TabContent>
			<TabContent>
				<section>
					<SectionHeading level={2} title="Favorites" />
					<section>
						<SectionHeading level={3} title="Runs" />
						<ProfileFavoriteRuns />
					</section>
					<section>
						<SectionHeading level={3} title="Armor Sets" />
						<ProfileFavoriteSets />
					</section>
				</section>
			</TabContent>
			<TabContent>Events</TabContent>
		</svelte:fragment>
	</Tabs>

	<section>
		<ProfileFooter />
	</section>
</div>

<style lang="scss">
	.container {
		display: flex;
		flex-direction: column;
		gap: 1rem;
		height: 100%;
		flex: 1 1 auto;
	}

	.top {
		display: flex;
		flex-direction: column;
		gap: 1rem;
		background-color: var(--ctp-mantle);
		padding: 1rem;
		border-radius: 8px;
	}

	.report-section {
		display: flex;
		justify-content: end;
	}

	.radio-button-container {
		display: flex;
		gap: 0.25rem;
		align-items: center;
	}

	.report-end {
		display: flex;
		gap: 0.5rem;
	}
</style>
