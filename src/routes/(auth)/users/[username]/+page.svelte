<script lang="ts">
	import ProfileFollows from '$lib/client/components/ProfileFollows.svelte';
	import ProfileFooter from '$lib/client/components/ProfileFooter.svelte';
	import ProfileGuildCard from '$lib/client/components/ProfileGuildCard.svelte';
	import ProfileHeader from '$lib/client/components/ProfileHeader.svelte';
	import ProfilePinnedRuns from '$lib/client/components/ProfilePinnedRuns.svelte';
	import ProfilePinnedSets from '$lib/client/components/ProfilePinnedSets.svelte';
	import ProfileStatsSummary from '$lib/client/components/ProfileStatsSummary.svelte';
	import ProfileTrophyCase from '$lib/client/components/ProfileTrophyCase.svelte';
	import SectionHeading from '$lib/client/components/SectionHeading.svelte';
	import { getAvatar } from '$lib/client/modules/profile/avatars.js';
	import Button from 'carbon-components-svelte/src/Button/Button.svelte';
	import Form from 'carbon-components-svelte/src/Form/Form.svelte';
	import FormGroup from 'carbon-components-svelte/src/FormGroup/FormGroup.svelte';
	import Modal from 'carbon-components-svelte/src/Modal/Modal.svelte';
	import RadioButton from 'carbon-components-svelte/src/RadioButton/RadioButton.svelte';
	import RadioButtonGroup from 'carbon-components-svelte/src/RadioButtonGroup/RadioButtonGroup.svelte';
	import Tab from 'carbon-components-svelte/src/Tabs/Tab.svelte';
	import TabContent from 'carbon-components-svelte/src/Tabs/TabContent.svelte';
	import Tabs from 'carbon-components-svelte/src/Tabs/Tabs.svelte';
	import TextArea from 'carbon-components-svelte/src/TextArea/TextArea.svelte';
	import Tooltip from 'carbon-components-svelte/src/Tooltip/Tooltip.svelte';
	import NextOutline from 'carbon-icons-svelte/lib/NextOutline.svelte';
	import Security from 'carbon-icons-svelte/lib/Security.svelte';
	import Send from 'carbon-icons-svelte/lib/Send.svelte';
	import Flag from 'carbon-icons-svelte/lib/Flag.svelte';
	import type { CarbonTheme } from 'carbon-components-svelte/src/Theme/Theme.svelte';
	import { getContext } from 'svelte';
	import type { Writable } from 'svelte/store';
	import ProfileRecentActivity from '$lib/client/components/ProfileRecentActivity.svelte';
	import ProfileHuntsCalendarGraph from '$lib/client/components/ProfileHuntsCalendarGraph.svelte';
	import ProfileRecentHunts from '$lib/client/components/ProfileRecentHunts.svelte';
	import ProfileFavoriteRuns from '$lib/client/components/ProfileFavoriteRuns.svelte';
	import ProfileFavoriteSets from '$lib/client/components/ProfileFavoriteSets.svelte';
	import ProfileHuntsGraph from '$lib/client/components/ProfileActivityOverviewGraph.svelte';
	import { getTitle } from '$lib/client/modules/profile/titles.js';
	import { getEmblem } from '$lib/client/modules/profile/emblems.js';
	import { type TCountryCode } from 'countries-list';

	const carbonThemeStore = getContext(
		Symbol.for('carbonTheme'),
	) as Writable<CarbonTheme>;

	// TODO profile pages
	let { data } = $props();
	// TODO is this correct to do? destructuring like this
	let { pageUserProfile } = $derived(data);

	let open = $state(false);
	let modalPage: 1 | 2 | 3 = $state(1);
	let selectedReportOption: string | number | undefined = $state(undefined);
	let reportDetails = $state('');

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

<!-- TODO: Head component?-->

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
				if (reportDetails.length > 1) {
					modalPage++;
				}
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
					maxCount={maxReportDetailsLength}
					bind:value={reportDetails}
					invalid={reportDetails.length <= 1}
					invalidText="Please detail your report."
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
		<ProfileHeader
			name={pageUserProfile.username}
			emblem={getEmblem(pageUserProfile.emblem)}
			title={getTitle(pageUserProfile.title)}
			discordName={pageUserProfile.discord_username_shown
				? pageUserProfile.discord_username
				: ''}
			imageSource={getAvatar(pageUserProfile.avatar)}
			countryCode={pageUserProfile.country as
				| 'World'
				| TCountryCode
				| undefined}
			badge1Icon={null}
			badge2Icon={null}
			badge3Icon={null}
			badge1Rank={0}
			badge2Rank={0}
			badge3Rank={0}
		/>
		<ProfileFollows canFollow={false} followers={0} following={0} />
	</section>

	<section>
		<ProfileStatsSummary
			huntCount={0}
			obtainedAchievements={{ bronze: 0, silver: 0, gold: 0, platinum: 0 }}
			totalAchievements={{ bronze: 10, silver: 20, gold: 30, platinum: 40 }}
			obtainedTitles={1}
			totalTitles={100}
			huntCountRank={0}
			huntCountRankPercent={0}
			obtainedAchievementsRank={0}
			obtainedAchievementsRankPercent={0}
			titlesRank={0}
			titlesRankPercent={0}
			profileFrontierServers={pageUserProfile.private_servers}
		/>
	</section>

	<!-- This only shows if the user has at least one trophy.-->
	<section>
		<!-- <ProfileTrophyCase /> -->
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

		{#snippet content()}
			<TabContent>
				<section>
					<SectionHeading level={2} title="Wardrobe" />
					<!-- <ProfilePinnedSets bind:theme={$carbonThemeStore} /> -->
				</section>
				<section>
					<SectionHeading level={2} title="Pinned Runs" />
					<!-- <ProfilePinnedRuns bind:theme={$carbonThemeStore} /> -->
				</section>
				<section>
					<SectionHeading level={2} title="Guild Card" />
					<!-- <ProfileGuildCard canChangeGuildCardBackground={false} /> -->
				</section>
				<section>
					<SectionHeading level={2} title="Recent Activity" />
					<ProfileRecentActivity />
				</section>
			</TabContent>
			<TabContent>
				<section>
					<!-- <ProfileHuntsCalendarGraph bind:theme={$carbonThemeStore} /> -->
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
					<section>
						<SectionHeading level={3} title="Runs" />
						<!-- <ProfileFavoriteRuns /> -->
					</section>
					<section>
						<SectionHeading level={3} title="Armor Sets" />
						<!-- <ProfileFavoriteSets /> -->
					</section>
				</section>
			</TabContent>
			<TabContent>Events</TabContent>
		{/snippet}
	</Tabs>

	<section>
		<ProfileFooter date={pageUserProfile.join_date.toUTCString()} />
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
