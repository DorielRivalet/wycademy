<script lang="ts">
	import Accordion from 'carbon-components-svelte/src/Accordion/Accordion.svelte';
	import SectionHeadingTopLevel from '$lib/client/components/SectionHeadingTopLevel.svelte';
	import SectionHeading from '$lib/client/components/SectionHeading.svelte';
	import ListItem from 'carbon-components-svelte/src/ListItem/ListItem.svelte';
	import UnorderedList from 'carbon-components-svelte/src/UnorderedList/UnorderedList.svelte';
	import CheckmarkFilled from 'carbon-icons-svelte/lib/CheckmarkFilled.svelte';
	import WarningFilled from 'carbon-icons-svelte/lib/WarningFilled.svelte';
	import CiteReference from '$lib/client/components/CiteReference.svelte';
	import OrderedList from 'carbon-components-svelte/src/OrderedList/OrderedList.svelte';
	import CiteNote from '$lib/client/components/CiteNote.svelte';
	import AccordionItem from 'carbon-components-svelte/src/Accordion/AccordionItem.svelte';
	import OutboundLink from 'carbon-components-svelte/src/Link/OutboundLink.svelte';
</script>

<article>
	<SectionHeadingTopLevel title="Urgent Notice for YouTube Content Creators" />

	<p class="spaced-paragraph">
		Since late 2023, there have been multiple reports of people receiving
		copyright strikes on YouTube due to the use, or apparent use, of mods or any
		external programs, even if they are not technically mods, in Monster Hunter
		games.<CiteReference number={1} /><CiteReference number={2} /><CiteReference
			number={3}
		/><CiteReference number={4} />
		It is unclear what specifically triggers these strikes on YouTube or why this
		issue has only recently emerged, although there are videos clueing into some
		answers.<CiteReference number={5} />
		For more information, see their video policy and their video about the topic
		in general.<CiteReference number={6} /><CiteReference
			number={7}
		/><CiteReference number={8} /><CiteReference number={9} /><CiteReference
			number={10}
		/><CiteReference number={11} />
	</p>

	<p class="spaced-paragraph">
		YouTube has a history of being a less-than-ideal platform for archiving
		speedruns.<CiteReference number={12} /> Therefore, we recommend using alternatives
		such as <OutboundLink inline href="https://archive.org"
			>archive.org</OutboundLink
		> for this purpose.
	</p>

	<section>
		<SectionHeading
			level={2}
			title="Key Points from the Overlay's FAQ and Documentation"
		/>
		<UnorderedList>
			<ListItem>
				<strong>The overlay is not a mod:</strong> You can use it with either vanilla
				or modified files, but the overlay itself does not alter gameplay behavior
				nor provide custom in-game cosmetics.
			</ListItem>
			<ListItem>
				<strong>The overlay can be used as an Anti-cheating tool:</strong> The overlay
				provides accurate records of all quest activities in a SQLite file. We also
				offer a settings preset for speedrunning and watermarks to indicate this
				preset when needed.
			</ListItem>
			<ListItem>
				<strong>The overlay provides No warranties:</strong> Per the MIT license,
				we provide no warranties for the software.
			</ListItem>
		</UnorderedList>
	</section>

	<section>
		<SectionHeading level={2} title="Guidelines for Overlay Users" />

		<p class="spaced-paragraph">
			To minimize the risk to your YouTube account and prepare for future
			leaderboard run submissions, please follow these guidelines. <strong
				>Note that these guidelines may become outdated, so we recommend
				checking the leaderboard page for the latest information.</strong
			>
		</p>

		<section>
			<SectionHeading level={3} title="Video Submission Guidelines" />
			<UnorderedList>
				<ListItem
					><div class="list-item">
						<CheckmarkFilled color="var(--ctp-green)" />
						<span
							>Consider using platforms such as Bilibili or archive.org for
							video submissions. We do not recommend using Twitch or YouTube. We
							recommend archive.org.</span
						>
					</div></ListItem
				>
				<ListItem
					><div class="list-item">
						<CheckmarkFilled color="var(--ctp-green)" />
						<span
							>Provide the video link with the SQLite file. The overlay allows
							you to edit video links via the run ID.</span
						>
					</div></ListItem
				>
				<ListItem
					><div class="list-item">
						<CheckmarkFilled color="var(--ctp-green)" />
						<span>Make YouTube videos unlisted, not public.</span>
					</div></ListItem
				>
				<ListItem
					><div class="list-item">
						<CheckmarkFilled color="var(--ctp-green)" />
						<span
							>Ensure your video titles, tags and descriptions are in English
							only.</span
						>
					</div></ListItem
				>
				<ListItem
					><div class="list-item">
						<CheckmarkFilled color="var(--ctp-green)" />
						<span
							>Put your gear and weapon information in the video description.</span
						>
					</div></ListItem
				>
				<ListItem
					><div class="list-item">
						<WarningFilled color="var(--ctp-yellow)" />
						<span
							>Avoid mentioning any external tools, including mods, in YouTube
							descriptions. Minimize the number of links.</span
						>
					</div></ListItem
				>
				<ListItem
					><div class="list-item">
						<WarningFilled color="var(--ctp-yellow)" />
						<span
							>Avoid tagging your YouTube videos with games that are not Monster
							Hunter Frontier.</span
						>
					</div></ListItem
				>
				<ListItem
					><div class="list-item">
						<WarningFilled color="var(--ctp-yellow)" />
						<span>Avoid livestreams or videos featuring custom quests.</span>
					</div></ListItem
				>
				<ListItem
					><div class="list-item">
						<WarningFilled color="var(--ctp-yellow)" />
						<span>Avoid putting music that is not part of the game.</span>
					</div></ListItem
				>
				<ListItem
					><div class="list-item">
						<WarningFilled color="var(--ctp-yellow)" />
						<span
							>Do not show the overlay UI during videos. The UI of the overlay
							or other programs like LiveSplit might trigger YouTube's systems.
							We use videos to corroborate the data in the SQLite file, so
							showing the watermark is not necessary for submissions.</span
						>
					</div></ListItem
				>
			</UnorderedList>
		</section>
		<section>
			<SectionHeading level={3} title="Criteria for Leaderboard Submissions" />
			<UnorderedList>
				<ListItem
					><div class="list-item">
						<span
							>Show all of your guild card, gear and weapon pages at the end of
							a hunt.</span
						>
					</div></ListItem
				>
				<ListItem
					><div class="list-item">
						<span
							>Use the speedrun preset in overlay settings. If the overlay
							watermark shows numbers in parentheses, those runs are not
							submitted. Refer to the <OutboundLink
								inline
								href="https://github.com/DorielRivalet/mhfz-overlay/blob/main/FAQ.md#what-are-run-buffs-in-the-quest-logs-section"
								>FAQ</OutboundLink
							> for more details on the run buffs question.</span
						>
					</div></ListItem
				>
				<ListItem
					><div class="list-item">
						<span
							><strong>Solo Runs:</strong> No other players or NPCs, except Halk.</span
						>
					</div></ListItem
				>
				<ListItem
					><div class="list-item">
						<span
							><strong>Speedrun Categories Only:</strong> Runs with overlay
							watermark numbers are not submitted. See the <OutboundLink
								inline
								href="https://github.com/DorielRivalet/mhfz-overlay/blob/main/FAQ.md#what-are-run-buffs-in-the-quest-logs-section"
								>FAQ</OutboundLink
							> for more details on run buffs.</span
						>
					</div></ListItem
				>
				<ListItem
					><div class="list-item">
						<span
							><strong>No Custom Quests:</strong> Only Z4, Musous, Conquest LV9999,
							2nd District Duremudira, and Upper Shiten are allowed.</span
						>
					</div></ListItem
				>
				<ListItem
					><div class="list-item">
						<span
							><strong>Viewable Video Links:</strong> Each video link must come from
							the player submitting the run. You cannot upload runs on behalf of
							another player.</span
						>
					</div></ListItem
				>
			</UnorderedList>
		</section>
	</section>

	<section>
		<SectionHeading level={2} title="Frequently Asked Questions" />
		<Accordion>
			<AccordionItem>
				<svelte:fragment slot="title">
					<p class="question">
						Am I allowed to submit my runs to YouTube/Twitch?
					</p>
				</svelte:fragment>
				<p class="answer">Yes, but you do so at your own risk.</p>
			</AccordionItem>
			<AccordionItem>
				<svelte:fragment slot="title">
					<p class="question">
						What types of videos are most likely to get copyright strikes?
					</p>
				</svelte:fragment>
				<p class="answer">
					Videos that mention external tools or mods, livestreams or videos
					featuring custom quests, and videos with non-game music are more
					likely to receive copyright strikes.
				</p>
			</AccordionItem>
			<AccordionItem>
				<svelte:fragment slot="title">
					<p class="question">
						What should I do if I receive a copyright strike?
					</p>
				</svelte:fragment>
				<p class="answer">
					If you receive a copyright strike, review YouTube's copyright policies
					and guidelines. You may want to appeal the strike if you believe it
					was issued in error. Consult with a legal expert for advice on how to
					proceed.
				</p>
			</AccordionItem>
			<AccordionItem>
				<svelte:fragment slot="title">
					<p class="question">
						Can I use the overlay in private or unlisted YouTube videos?
					</p>
				</svelte:fragment>
				<p class="answer">
					We recommend making YouTube videos unlisted rather than public to
					reduce the risk of copyright strikes. Private videos, which require
					manual invites, are not allowed.
				</p>
			</AccordionItem>
			<AccordionItem>
				<svelte:fragment slot="title">
					<p class="question">
						How do I edit video links via the run ID in the overlay?
					</p>
				</svelte:fragment>
				<p class="answer">
					The overlay has a section where you can edit video links by entering
					the run ID. Refer to the overlay's documentation and FAQ for detailed
					instructions.
				</p>
			</AccordionItem>
			<AccordionItem>
				<svelte:fragment slot="title">
					<p class="question">
						What should I do if my video gets removed from YouTube?
					</p>
				</svelte:fragment>
				<p class="answer">
					If your video is removed, consider re-uploading it to an alternative
					platform like archive.org or Bilibili. Ensure your video complies with
					the guidelines to avoid future issues.
				</p>
			</AccordionItem>
			<AccordionItem>
				<svelte:fragment slot="title">
					<p class="question">
						Are there any specific settings I should use in the overlay for
						speedrunning?
					</p>
				</svelte:fragment>
				<p class="answer">
					Yes, use the speedrun preset in the overlay settings. Ensure the
					overlay watermark does not show numbers in parentheses, as these runs
					will not be submitted. Refer to the <OutboundLink
						inline
						href="https://github.com/DorielRivalet/mhfz-overlay/blob/main/FAQ.md#what-are-run-buffs-in-the-quest-logs-section"
						>FAQ</OutboundLink
					> for more details on the run buffs question.
				</p>
			</AccordionItem>
			<AccordionItem>
				<svelte:fragment slot="title">
					<p class="question">
						Why do I need to show my guild card, gear, and weapon pages at the
						end of a hunt?
					</p>
				</svelte:fragment>
				<p class="answer">
					This ensures the authenticity of your run and verifies that no
					unauthorized modifications were used. It helps maintain the integrity
					of the leaderboard.
				</p>
			</AccordionItem>
			<AccordionItem>
				<svelte:fragment slot="title">
					<p class="question">Can I upload runs on behalf of another player?</p>
				</svelte:fragment>
				<p class="answer">
					No, each player must upload their own runs. Video links must come
					directly from the player submitting the run.
				</p>
			</AccordionItem>
			<AccordionItem>
				<svelte:fragment slot="title">
					<p class="question">
						What are the criteria for leaderboard submissions?
					</p>
				</svelte:fragment>
				<UnorderedList>
					<ListItem
						><div class="list-item">
							<span
								>Show all of your guild card, gear and weapon pages at the end
								of a hunt.</span
							>
						</div></ListItem
					>
					<ListItem
						><div class="list-item">
							<span
								>Use the speedrun preset in overlay settings. If the overlay
								watermark shows numbers in parentheses, those runs are not
								submitted. Refer to the <OutboundLink
									inline
									href="https://github.com/DorielRivalet/mhfz-overlay/blob/main/FAQ.md#what-are-run-buffs-in-the-quest-logs-section"
									>FAQ</OutboundLink
								> for more details on the run buffs question.</span
							>
						</div></ListItem
					>
					<ListItem
						><div class="list-item">
							<span
								><strong>Solo Runs:</strong> No other players or NPCs, except Halk.</span
							>
						</div></ListItem
					>
					<ListItem
						><div class="list-item">
							<span
								><strong>Speedrun Categories Only:</strong> Runs with overlay
								watermark numbers are not submitted. See the <OutboundLink
									inline
									href="https://github.com/DorielRivalet/mhfz-overlay/blob/main/FAQ.md#what-are-run-buffs-in-the-quest-logs-section"
									>FAQ</OutboundLink
								> for more details on run buffs.</span
							>
						</div></ListItem
					>
					<ListItem
						><div class="list-item">
							<span
								><strong>No Custom Quests:</strong> Only Z4, Musous, Conquest LV9999,
								2nd District Duremudira, and Upper Shiten are allowed.</span
							>
						</div></ListItem
					>
					<ListItem
						><div class="list-item">
							<span
								><strong>Viewable Video Links:</strong> Each video link must come
								from the player submitting the run. You cannot upload runs on behalf
								of another player.</span
							>
						</div></ListItem
					>
				</UnorderedList>
			</AccordionItem>
			<AccordionItem>
				<svelte:fragment slot="title">
					<p class="question">
						What platforms do you recommend for archiving speedruns?
					</p>
				</svelte:fragment>
				<p class="answer">
					We recommend using platforms such as archive.org and Bilibili for
					video submissions. Avoid using Twitch or YouTube due to the risk of
					copyright strikes.
				</p>
			</AccordionItem>
		</Accordion>
	</section>

	<section>
		<SectionHeading level={2} title="Closing Notes" />
		<p>
			We are committed to speedrun preservation and aim to provide historical
			accuracy and reliability when we launch the leaderboard on this website.
			Thank you for your understanding.
		</p>
	</section>

	<section>
		<SectionHeading level={2} title="References" />
		<OrderedList>
			<CiteNote
				href="https://web.archive.org/web/20231226052918/https://www.youtube.com/channel/UCG8wOav28pu6mT9NXRlWohw/community?lb=UgkxDTcEMtqBKCPcTmuwYHLI-3FT6jSb92Wq"
				text="https://web.archive.org/web/20231226052918/https://www.youtube.com/channel/UCG8wOav28pu6mT9NXRlWohw/community?lb=UgkxDTcEMtqBKCPcTmuwYHLI-3FT6jSb92Wq"
				number={1}
			/>
			<CiteNote
				href="https://archive.is/YhNRS"
				text="https://archive.is/YhNRS"
				number={2}
			/>
			<CiteNote
				href="https://archive.is/uOjXc"
				text="https://archive.is/uOjXc"
				number={3}
			/>
			<CiteNote
				href="https://archive.is/hpCw3"
				text="https://archive.is/hpCw3"
				number={4}
			/>
			<CiteNote
				href="https://www.youtube.com/watch?v=9R5GseXruos"
				text="https://www.youtube.com/watch?v=9R5GseXruos"
				number={5}
			/>
			<CiteNote
				href="https://web.archive.org/web/20240615232929/https://www.capcomusa.com/video-policy/"
				text="https://web.archive.org/web/20240615232929/https://www.capcomusa.com/video-policy/"
				number={6}
			/>
			<CiteNote
				href="https://web.archive.org/web/20240621001256/https://capcom-europe.com/video-policy/"
				text="https://web.archive.org/web/20240621001256/https://capcom-europe.com/video-policy/"
				number={7}
			/>
			<CiteNote
				href="https://web.archive.org/web/20210504063023/https://twitter.com/CapcomEurope/status/1348604911479611392"
				text="https://web.archive.org/web/20210504063023/https://twitter.com/CapcomEurope/status/1348604911479611392"
				number={8}
			/>
			<CiteNote
				href="https://www.youtube.com/watch?v=CT5bwwvDv00"
				text="https://www.youtube.com/watch?v=CT5bwwvDv00"
				number={9}
			/>
			<CiteNote
				href="https://web.archive.org/web/20240329105804/https://www.capcom-games.com/coc/2023/en/session/04/"
				text="https://web.archive.org/web/20240329105804/https://www.capcom-games.com/coc/2023/en/session/04/"
				number={10}
			/>
			<CiteNote
				href="https://web.archive.org/web/20240711144022/https://www.docswell.com/s/CAPCOM_RandD/K38NQE-RE2023"
				text="https://web.archive.org/web/20240711144022/https://www.docswell.com/s/CAPCOM_RandD/K38NQE-RE2023"
				number={11}
			/>
			<CiteNote
				href="https://web.archive.org/web/20221105184847/https://www.reddit.com/r/speedrun/comments/o76z90/on_july_23_any_unlisted_youtube_videos_from_2016/"
				text="https://web.archive.org/web/20221105184847/https://www.reddit.com/r/speedrun/comments/o76z90/on_july_23_any_unlisted_youtube_videos_from_2016/"
				number={12}
			/>
		</OrderedList>
	</section>
</article>

<style lang="scss">
	article {
		padding-bottom: 2rem;
	}

	.answer {
		padding-top: 1rem;
	}
</style>
