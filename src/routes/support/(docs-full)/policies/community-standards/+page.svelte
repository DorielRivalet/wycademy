<script lang="ts">
	import PageTurn from '$lib/client/components/PageTurn.svelte';
	import SectionHeadingTopLevel from '$lib/client/components/SectionHeadingTopLevel.svelte';
	import TableOfContentsPage from '$lib/client/components/TableOfContentsPage.svelte';
	import { page } from '$app/stores';
	import SectionHeading from '$lib/client/components/SectionHeading.svelte';
	import UnorderedList from 'carbon-components-svelte/src/UnorderedList/UnorderedList.svelte';
	import ListItem from 'carbon-components-svelte/src/ListItem/ListItem.svelte';
	import DataTable from 'carbon-components-svelte/src/DataTable/DataTable.svelte';
	import Toolbar from 'carbon-components-svelte/src/DataTable/Toolbar.svelte';
	import Button from 'carbon-components-svelte/src/Button/Button.svelte';
	import CopyButton from 'carbon-components-svelte/src/CopyButton/CopyButton.svelte';
	import { getCSVFromArray } from '$lib/client/modules/csv';
	import Download from 'carbon-icons-svelte/lib/Download.svelte';
	import { downloadDomAsPng } from '$lib/client/modules/download';
	import {
		getQuestStatusIcon,
		questStatusInfo,
	} from '$lib/client/modules/frontier/quest';
	import { capitalizeFirstLetter } from '$lib/client/modules/strings';
	import { browser } from '$app/environment';
	import Mermaid from '$lib/client/components/Mermaid.svelte';
	import CheckmarkFilled from 'carbon-icons-svelte/lib/CheckmarkFilled.svelte';
	import WarningAltFilled from 'carbon-icons-svelte/lib/WarningAltFilled.svelte';
	import OutboundLink from 'carbon-components-svelte/src/Link/OutboundLink.svelte';
	import AccordionItem from 'carbon-components-svelte/src/Accordion/AccordionItem.svelte';
	import Accordion from 'carbon-components-svelte/src/Accordion/Accordion.svelte';

	const privilegesMatrix: {
		role:
			| 'Administrator'
			| 'Moderator'
			| 'Authenticated User'
			| 'Anonymous User';
		viewLeaderboard: boolean;
		viewProfiles: boolean;
		insertQuests: boolean;
		updateQuestStatus: boolean;
		updateUserState: boolean;
		deleteUsers: boolean;
	}[] = [
		{
			role: 'Administrator',
			viewLeaderboard: true,
			viewProfiles: true,
			insertQuests: true,
			updateQuestStatus: true,
			updateUserState: true,
			deleteUsers: true,
		},
		{
			role: 'Moderator',
			viewLeaderboard: true,
			viewProfiles: true,
			insertQuests: true,
			updateQuestStatus: true,
			updateUserState: true,
			deleteUsers: false,
		},
		{
			role: 'Authenticated User',
			viewLeaderboard: true,
			viewProfiles: true,
			insertQuests: true,
			updateQuestStatus: false,
			updateUserState: false,
			deleteUsers: false,
		},
		{
			role: 'Anonymous User',
			viewLeaderboard: true,
			viewProfiles: true,
			insertQuests: false,
			updateQuestStatus: false,
			updateUserState: false,
			deleteUsers: false,
		},
	];
</script>

<TableOfContentsPage displayTOC={true}>
	<div>
		<SectionHeadingTopLevel title={'Community Standards'} />
		<p class="spaced-paragraph">
			Wycademy is a space built by and for the Monster Hunter Frontier
			community. To ensure that this platform remains inclusive, respectful, and
			collaborative, we ask all members to uphold the following community
			standards. These guidelines are designed to foster a positive experience
			for everyone, regardless of their skill level, background, or goals.
		</p>

		<section>
			<SectionHeading level={2} title="User Conduct" />
			<div>
				<p class="spaced-paragraph">
					We believe in building a safe, civil, and diverse community—one that
					inspires and fosters creativity and positive relationships between
					people around the world.
				</p>

				<p class="spaced-paragraph">
					We’ve created these Community Standards to help ensure that everyone
					feels safe and welcome in our shared adventure. These Standards apply
					to all of your actions on Wycademy and with other hunters.
				</p>

				<p class="spaced-paragraph">
					We ask that you respect our Standards and each other at all times —
					and understand that violating them may result in enforcement action
					against your account(s) and content. For some behavior that violates
					these Standards, such as behavior that poses a real-world risk to
					others, we reserve the right to contact or cooperate with the relevant
					authorities in order to keep everyone safe.
				</p>

				<p class="spaced-paragraph">
					We’re always learning, so as our community evolves and our platform
					grows, these Standards may change too. When they do, we’ll let you
					know here. If you see something that you think violates the Community
					Standards, or otherwise makes you feel unsafe, please let us know by
					using the Report Abuse feature. For more information about the legal
					terms that govern your use of Wycademy, head over to our Terms of Use.
				</p>
				<p class="spaced-paragraph">
					We appreciate your cooperation with these Standards and commitment to
					keeping Wycademy safe and civil.
				</p>
				<section>
					<SectionHeading level={3} title="Respect Others" />
					<div>
						<p class="spaced-paragraph">
							Treat all community members with kindness and respect. Personal
							attacks, harassment, or discriminatory behavior of any kind (based
							on race, gender, religion, nationality, disability, or other
							characteristics) will not be tolerated.
						</p>
						<p class="spaced-paragraph">
							Critique ideas, not individuals. When providing feedback or
							engaging in discussions, aim to be constructive and considerate.
						</p>
					</div>
				</section>
				<section>
					<SectionHeading level={3} title="Engage in Good Faith" />
					<div>
						<p class="spaced-paragraph">
							Use Wycademy to share knowledge, collaborate, and support others.
							Refrain from trolling, spamming, or engaging in disruptive
							behavior.
						</p>
						<p class="spaced-paragraph">
							Avoid intentionally spreading false information or content that
							could harm the integrity of the platform or the community.
						</p>
					</div>
				</section>
				<section>
					<SectionHeading level={3} title="Reporting Abuse" />
					<p class="spaced-paragraph">
						To keep Wycademy safe and fair, we encourage responsible use of the
						reporting system. You should use the Report Abuse button in the
						following way:
					</p>
					<UnorderedList class="spaced-list">
						<ListItem
							><p>
								If there is an issue with a specific run, report the run.
							</p></ListItem
						>
						<ListItem
							><p>
								If you believe there is a broader issue with a user, report
								their profile instead of mass reporting their individual quests.
							</p></ListItem
						>
					</UnorderedList>
					<p class="spaced-paragraph">
						Misuse of the reporting system (e.g., false reports, spam reports)
						may result in warnings or other consequences.
					</p>
				</section>
				<section>
					<SectionHeading level={3} title="Contribute Meaningfully" />
					<div>
						<p class="spaced-paragraph">
							Wycademy thrives on user contributions. When sharing content
							(e.g., guides, tutorials, or speedrun data), strive for accuracy,
							quality, and clarity.
						</p>
						<p class="spaced-paragraph">
							Respect the intellectual property of others. Only upload or share
							content that you have the right to use, and give credit where it's
							due.
						</p>
					</div>
				</section>
				<section>
					<SectionHeading level={3} title="Promote Inclusivity" />
					<div>
						<p class="spaced-paragraph">
							Wycademy is a community for everyone, from beginners to seasoned
							hunters. Avoid gatekeeping or excluding others based on their
							knowledge, experience, or playstyle.
						</p>
						<p class="spaced-paragraph">
							Be mindful of the diverse backgrounds and languages of community
							members. Clear communication benefits everyone.
						</p>
					</div>
				</section>
				<section>
					<SectionHeading level={3} title="Uphold Platform Integrity" />
					<div>
						<p class="spaced-paragraph">
							Do not attempt to exploit or abuse Wycademy’s systems, including
							the leaderboards, tools, or other features.
						</p>
						<p class="spaced-paragraph">
							Respect the decisions of moderators and admins. If you disagree
							with an action, express your concerns calmly and respectfully.
						</p>
					</div>
				</section>
				<section>
					<SectionHeading level={3} title="Enforcement Actions" />
					<p class="spaced-paragraph">
						Violations of community standards may result in:
					</p>
					<UnorderedList class="spaced-list">
						<ListItem
							><p>
								<strong>Warnings:</strong> A notice about inappropriate behavior
								or content.
							</p></ListItem
						>
						<ListItem
							><p>
								<strong>Time-Outs:</strong> Temporary restriction from submitting
								speedruns (2 to 7 days).
							</p></ListItem
						><ListItem
							><p>
								<strong>Suspensions:</strong> Temporary restriction from accessing
								your account entirely (3 to 14 days).
							</p></ListItem
						><ListItem
							><p>
								<strong>Termination:</strong> Permanent removal of account access
								for serious or repeated violations.
							</p></ListItem
						>
					</UnorderedList>
					<p class="spaced-paragraph">
						All enforcement actions are determined at the discretion of
						moderators and admins, following clear guidelines.
					</p>
					<div class="table">
						<DataTable
							id="privileges-matrix-dom"
							sortable
							title="Privileges Matrix"
							zebra
							size="short"
							headers={[
								{ key: 'role', value: 'Role' },
								{ key: 'viewLeaderboard', value: 'View Leaderboard' },
								{ key: 'viewProfiles', value: 'View Profiles' },
								{ key: 'insertQuests', value: 'Insert Quests' },
								{ key: 'updateQuestStatus', value: 'Update Quest Status' },
								{ key: 'updateUserState', value: 'Update User State' },
								{ key: 'deleteUsers', value: 'Delete Users' },
							]}
							rows={privilegesMatrix.map((e, i) => {
								return { ...e, id: i };
							})}
						>
							<Toolbar
								><div class="toolbar">
									<CopyButton
										iconDescription={'Copy as CSV'}
										text={getCSVFromArray(questStatusInfo)}
									/>
									<Button
										kind="tertiary"
										icon={Download}
										on:click={(e) =>
											downloadDomAsPng(
												'privileges-matrix-dom',
												'privileges-matrix',
											)}>Download</Button
									>
								</div>
							</Toolbar>
							{#snippet cell({ cell })}
								{#if cell.key !== 'role'}
									<p>{cell.value === false ? '❌' : '✅'}</p>
								{:else}
									<p>{cell.value}</p>
								{/if}
							{/snippet}
						</DataTable>
					</div>
					<UnorderedList class="spaced-list">
						<ListItem
							><p>
								Admins have access to the Supabase Dashboard, while moderators
								do not and operate through the website only.
							</p></ListItem
						>
						<ListItem
							><p>
								Only admins or moderators can change a quest's status.
							</p></ListItem
						>
						<ListItem
							><p>
								User State refers to: banned (cannot access account
								permanently), suspended (cannot access account temporarily), or
								time-out (cannot upload new quests temporarily).
							</p></ListItem
						>

						<ListItem
							><p>
								Profiles includes everything that is not leaderboard data,
								including favorite gear, quests, etc.
							</p></ListItem
						>

						<ListItem
							><p>
								Deleting users deletes all of their data, including quests,
								gear, followed users, etc.
							</p></ListItem
						>

						<ListItem
							><p>
								Authenticated users cannot delete their own quests in order to
								preserve leaderboard integrity.
							</p></ListItem
						>

						<ListItem
							><p>
								Authenticated users can only update VideoLink fields (or provide
								the VideoLink from overlay) once a quest is submitted and not
								any other field. Valid VideoLink fields are from: YouTube,
								Bilibili, Niconico, Twitch, Vimeo and archive.org. If a
								VideoLink later becomes inaccessible, either the user or a
								moderator can supply a new VideoLink, without affecting the
								quest's status.
							</p></ListItem
						>
					</UnorderedList>
				</section>
			</div>
		</section>

		<section>
			<SectionHeading level={2} title="Moderator Guidelines" />
			<div>
				<p class="spaced-paragraph">
					Moderators play a critical role in maintaining the integrity of
					Wycademy. They follow these steps when addressing issues:
				</p>
				<UnorderedList class="spaced-list">
					<ListItem
						><p>
							<strong>Warnings:</strong> For minor infractions or first-time offenses.
						</p></ListItem
					>
					<ListItem
						><p>
							<strong>Time-Outs:</strong> For repeated infractions or disruptive
							behavior, temporarily limiting speedrun submissions.
						</p></ListItem
					><ListItem
						><p>
							<strong>Suspensions:</strong> For more serious violations, temporarily
							restricting account access.
						</p></ListItem
					><ListItem
						><p>
							<strong>Termination:</strong> Reserved for extreme or repeated violations
							where warnings and suspensions have failed.
						</p></ListItem
					>
				</UnorderedList>
				<p class="spaced-paragraph">
					Moderators assess each situation individually and aim to act fairly
					and transparently. To maintain transparency, we offer a moderation
					audit log.
				</p>
			</div>
		</section>
		<section>
			<SectionHeading level={2} title="Quest Submission Process" />
			<div>
				<p class="spaced-paragraph">
					We are committed to speedrun preservation and aim to provide
					historical accuracy and reliability for our leaderboards. Submitting
					quests for the leaderboards requires adherence to the following:
				</p>
				<UnorderedList class="spaced-list">
					<ListItem class="paragraph-long-02">
						<p>
							At least one run in the latest overlay version. Speedruns on
							overlay versions older than 0.23.0 are not submitted.
						</p></ListItem
					>
					<ListItem class="paragraph-long-02">
						<p>
							<strong>No Unknown Files or Patches:</strong> Your game files should
							be from a list of known patches. If unsure, stick with vanilla.
						</p></ListItem
					>
					<ListItem class="paragraph-long-02">
						<p>
							<strong>Speedrun Overlay Mode:</strong> Your watermark should show
							"Speedrun+".
						</p></ListItem
					>
					<ListItem class="paragraph-long-02"
						><p>
							<strong>Has Run Buffs Tag:</strong> Next to Speedrun+, your
							watermark should show either of these in parentheses: TA, FDS,
							FDP, FST, FCA. Runs with overlay watermark numbers are not
							submitted. See the <OutboundLink
								inline
								href="https://github.com/DorielRivalet/mhfz-overlay/blob/main/FAQ.md#what-are-run-buffs-in-the-quest-logs-section"
								>FAQ</OutboundLink
							> for more details on run buffs.
						</p></ListItem
					>
					<ListItem class="paragraph-long-02"
						><p>
							<strong>Solo Runs:</strong> No other players or NPCs, except Halk.
						</p></ListItem
					>
					<ListItem class="paragraph-long-02"
						><p>
							<strong>No Custom Quests:</strong> Only Z4, Musous, Conquest LV9999,
							2nd District Duremudira, and Upper Shiten are allowed.
						</p>
					</ListItem>
					<ListItem
						><div class="list-item paragraph-long-02">
							<span
								><strong>Viewable Video Links:</strong> Each video link must come
								from the player submitting the run. You cannot upload runs on behalf
								of another player. Deliberately stealing runs, or copying them and
								editing them with external programs to then submit is grounds for
								account termination.</span
							>
						</div></ListItem
					>
				</UnorderedList>
				<Mermaid
					{browser}
					diagram={`
				stateDiagram-v2
    [*] --> Unverified : New Upload
    Unverified --> Verified : Approved by Moderator
    Unverified --> Duplicate : Detected QuestHash Conflict
    Duplicate --> Disputed : User Report or Ownership Conflict
    Disputed --> Verified : Legitimacy Verified by Moderator
    Disputed --> UserPenalized : Proven Illegitimate by Moderator
    Verified --> Disputed : User Report or Ownership Conflict
    UserPenalized --> [*] : Final State
    Verified --> [*] : Final State
    Duplicate --> [*] : Duplicate Confirmation`}
				/>
				<div class="table">
					<DataTable
						id="quest-status-dom"
						sortable
						title="Quest Status"
						zebra
						size="short"
						headers={[
							{ key: 'status', value: 'Status' },
							{ key: 'notes', value: 'Description' },
							{ key: 'shownInProfile', value: 'Shown in Profiles' },
							{ key: 'shownInLeaderboard', value: 'Shown in Leaderboard' },
						]}
						rows={questStatusInfo.map((e, i) => {
							return { ...e, id: i, status: capitalizeFirstLetter(e.status) };
						})}
					>
						<Toolbar
							><div class="toolbar">
								<CopyButton
									iconDescription={'Copy as CSV'}
									text={getCSVFromArray(questStatusInfo)}
								/>
								<Button
									kind="tertiary"
									icon={Download}
									on:click={(e) =>
										downloadDomAsPng('quest-status-dom', 'quest-status')}
									>Download</Button
								>
							</div>
						</Toolbar>
						{#snippet cell({ cell })}
							{#if cell.key === 'shownInProfile' || cell.key === 'shownInLeaderboard'}
								<p>{cell.value === false ? '❌' : '✅'}</p>
							{:else if cell.key === 'status'}
								<p class="quest-status-icon">
									<span>
										<svelte:component
											this={getQuestStatusIcon(cell.value).icon}
											{...{ color: getQuestStatusIcon(cell.value).color }}
										/>
									</span><span>{cell.value}</span>
								</p>
							{:else}
								<p>{cell.value}</p>
							{/if}
						{/snippet}
					</DataTable>
				</div>
				<UnorderedList class="spaced-list">
					<ListItem
						><p>
							Duplicated quests are automatically deleted after a certain period
							of time. Ownership is verified by confirming the user owns the
							account where the VideoLink submission happened. This can be done
							by them supplying their Wycademy username (e.g.
							musou-valstrax-1234) in the video submission's account bio or
							description, or the video's title or description. We also check
							the upload date of the video.
						</p></ListItem
					>
					<ListItem
						><p>
							If a disputed quest ends up being stolen or used cheats, the user
							is penalized and the quest is removed; otherwise if the quest is
							legit, it can become verified.
						</p></ListItem
					>
					<ListItem
						><p>
							Duplicate quests can only occur via the upload of another user,
							since the primary keys are composite: profile_id and quest_hash.
							When a user uploads multiple runs (same profile_id), if a run was
							already uploaded (same quest_hash) we skip this row.
						</p></ListItem
					>
				</UnorderedList>
				<p class="spaced-paragraph">
					Ensure that your submissions include accurate details, proper evidence
					(e.g., videos), and follow the guidelines outlined in the quest
					submission form.
				</p>
				<section>
					<SectionHeading level={3} title="Video Links Guidelines" />
					<div>
						<div class="spaced-paragraph">
							To minimize the risk to your YouTube account and ensure safe run
							submissions, please follow these guidelines.
						</div>
						<UnorderedList>
							<ListItem
								><div class="list-item paragraph-long-02">
									<CheckmarkFilled color="var(--ctp-green)" />
									<span
										>Consider using platforms such as Bilibili or archive.org
										for video submissions. We do not recommend using Twitch or
										YouTube. We recommend archive.org. If you submit a Video
										Link from a host that is not whitelisted (e.g
										https://youtube.com), the run will be automatically
										rejected.</span
									>
								</div></ListItem
							>
							<ListItem
								><div class="list-item paragraph-long-02">
									<CheckmarkFilled color="var(--ctp-green)" />
									<span
										>Provide the video links with the SQLite file. The overlay
										allows you to edit video links via the run ID.
										Alternatively, you can edit the Video Links in Wycademy
										after submission, but they will be processed as unverified
										due to not having a valid Video Link at the moment of quest
										submission.</span
									>
								</div></ListItem
							>
							<ListItem
								><div class="list-item paragraph-long-02">
									<CheckmarkFilled color="var(--ctp-green)" />
									<span>Make YouTube videos unlisted, not public.</span>
								</div></ListItem
							>
							<ListItem
								><div class="list-item paragraph-long-02">
									<CheckmarkFilled color="var(--ctp-green)" />
									<span
										>Ensure your video titles, tags and descriptions are in
										English only.</span
									>
								</div></ListItem
							>
							<ListItem
								><div class="list-item paragraph-long-02">
									<CheckmarkFilled color="var(--ctp-green)" />
									<span
										>Put your gear and weapon information in the video
										description.</span
									>
								</div></ListItem
							><ListItem
								><div class="list-item paragraph-long-02">
									<CheckmarkFilled color="var(--ctp-green)" />
									<span
										>Put your Wycademy username (e.g. musou-valstrax-1234) in
										the video description, title or channel bio.</span
									>
								</div></ListItem
							>
							<ListItem
								><div class="list-item paragraph-long-02">
									<CheckmarkFilled color="var(--ctp-green)" />

									<span
										>Show all of your guild card, gear and weapon pages at the
										end of a hunt.</span
									>
								</div></ListItem
							>
							<ListItem
								><div class="list-item paragraph-long-02">
									<CheckmarkFilled color="var(--ctp-green)" />

									<span>Use the speedrun preset in overlay settings.</span>
								</div></ListItem
							>

							<ListItem
								><div class="list-item paragraph-long-02">
									<WarningAltFilled color="var(--ctp-yellow)" />
									<span
										>Avoid mentioning any external tools, including mods, in
										YouTube descriptions. Minimize the number of links.</span
									>
								</div></ListItem
							>
							<ListItem
								><div class="list-item paragraph-long-02">
									<WarningAltFilled color="var(--ctp-yellow)" />
									<span
										>Avoid tagging your YouTube videos with games that are not
										Monster Hunter Frontier.</span
									>
								</div></ListItem
							>
							<ListItem
								><div class="list-item paragraph-long-02">
									<WarningAltFilled color="var(--ctp-yellow)" />
									<span
										>Avoid livestreams or videos featuring custom quests.</span
									>
								</div></ListItem
							>
							<ListItem
								><div class="list-item paragraph-long-02">
									<WarningAltFilled color="var(--ctp-yellow)" />
									<span>Avoid putting music that is not part of the game.</span>
								</div></ListItem
							>
							<ListItem
								><div class="list-item paragraph-long-02">
									<WarningAltFilled color="var(--ctp-yellow)" />
									<span
										>Do not show the overlay UI during videos. The UI of the
										overlay or other programs like LiveSplit might trigger
										YouTube's systems. We use videos to corroborate the data in
										the SQLite file, so showing the watermark is not necessary
										for submissions.</span
									>
								</div></ListItem
							>
						</UnorderedList>
					</div>
				</section>
				<section>
					<SectionHeading level={3} title="Frequently Asked Questions" />
					<Accordion>
						<AccordionItem>
							{#snippet title()}
								<p class="question">
									Am I allowed to submit my runs to YouTube/Twitch?
								</p>
							{/snippet}
							<p class="answer">Yes, but you do so at your own risk.</p>
						</AccordionItem>
						<AccordionItem>
							{#snippet title()}
								<p class="question">
									What types of videos are most likely to get copyright strikes?
								</p>
							{/snippet}
							<p class="answer">
								Videos that mention external tools or mods, livestreams or
								videos featuring custom quests, and videos with non-game music
								are more likely to receive copyright strikes.
							</p>
						</AccordionItem>
						<AccordionItem>
							{#snippet title()}
								<p class="question">
									What should I do if I receive a copyright strike?
								</p>
							{/snippet}
							<p class="answer">
								If you receive a copyright strike, review YouTube's copyright
								policies and guidelines. You may want to appeal the strike if
								you believe it was issued in error. Consult with a legal expert
								for advice on how to proceed.
							</p>
						</AccordionItem>
						<AccordionItem>
							{#snippet title()}
								<p class="question">
									Can I use the overlay in private or unlisted YouTube videos?
								</p>
							{/snippet}
							<p class="answer">
								We recommend making YouTube videos unlisted rather than public
								to reduce the risk of copyright strikes. Private videos, which
								require manual invites, are not allowed.
							</p>
						</AccordionItem>
						<AccordionItem>
							{#snippet title()}
								<p class="question">
									How do I edit video links via the run ID in the overlay?
								</p>
							{/snippet}
							<p class="answer">
								The overlay has a section where you can edit video links by
								entering the run ID. Refer to the overlay's documentation and
								FAQ for detailed instructions.
							</p>
						</AccordionItem>
						<AccordionItem>
							{#snippet title()}
								<p class="question">
									What should I do if my video gets removed from YouTube?
								</p>
							{/snippet}
							<p class="answer">
								If your video is removed, consider re-uploading it to an
								alternative platform like archive.org or Bilibili. Ensure your
								video complies with the guidelines to avoid future issues.
							</p>
						</AccordionItem>
						<AccordionItem>
							{#snippet title()}
								<p class="question">
									Are there any specific settings I should use in the overlay
									for speedrunning?
								</p>
							{/snippet}
							<p class="answer">
								Yes, use the speedrun preset in the overlay settings. Ensure the
								overlay watermark does not show numbers in parentheses, as these
								runs will not be submitted. Refer to the <OutboundLink
									inline
									href="https://github.com/DorielRivalet/mhfz-overlay/blob/main/FAQ.md#what-are-run-buffs-in-the-quest-logs-section"
									>FAQ</OutboundLink
								> for more details on the run buffs question.
							</p>
						</AccordionItem>
						<AccordionItem>
							{#snippet title()}
								<p class="question">
									Why do I need to show my guild card, gear, and weapon pages at
									the end of a hunt?
								</p>
							{/snippet}
							<p class="answer">
								This ensures the authenticity of your run and verifies that no
								unauthorized modifications were used. It helps maintain the
								integrity of the leaderboard.
							</p>
						</AccordionItem>
						<AccordionItem>
							{#snippet title()}
								<p class="question">
									Can I upload runs on behalf of another player?
								</p>
							{/snippet}
							<p class="answer">
								No, each player must upload their own runs. Video links must
								come directly from the player submitting the run.
							</p>
						</AccordionItem>

						<AccordionItem>
							{#snippet title()}
								<p class="question">
									What platforms do you recommend for archiving speedruns?
								</p>
							{/snippet}
							<p class="answer">
								We recommend using platforms such as archive.org and Bilibili
								for video submissions. Avoid using Twitch or YouTube due to the
								risk of copyright strikes.
							</p>
						</AccordionItem>
					</Accordion>
				</section>
			</div>
		</section>

		<section>
			<SectionHeading level={2} title="Feedback and Updates" />
			<div>
				<p class="spaced-paragraph">
					These standards are a living document and may evolve over time as the
					community grows. We welcome your feedback to ensure Wycademy remains a
					safe, inclusive, and inspiring space for all hunters.
				</p>
				<p class="spaced-paragraph">
					If you have suggestions or concerns, feel free to reach out to us.
					Together, we can build a thriving and supportive Monster Hunter
					Frontier community.
				</p>
			</div>
		</section>

		<div class="page-turn">
			<PageTurn pageUrlPathName={$page.url.pathname} />
		</div>
	</div>
</TableOfContentsPage>

<style lang="scss">
	.page-turn {
		margin-top: 4rem;
	}

	.toolbar {
		padding: 1rem;
		display: flex;
		align-items: center;
		gap: 1rem;
		flex-grow: 1;
		flex-shrink: 1;
	}

	.table {
		margin-top: 2rem;
		margin-bottom: 2rem;
		overflow-x: auto;
	}

	.quest-status-icon {
		display: flex;
		gap: 0.25rem;
	}
</style>
