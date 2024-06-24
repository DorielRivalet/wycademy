<script lang="ts">
	import TopHeroSection from '$lib/client/components/TopHeroSection.svelte';
	import Trophy from 'carbon-pictograms-svelte/lib/Trophy.svelte';
	import Archive from 'carbon-pictograms-svelte/lib/Archive.svelte';
	import Documentation from 'carbon-pictograms-svelte/lib/Documentation.svelte';
	import ChartRadar from 'carbon-pictograms-svelte/lib/ChartRadar.svelte';
	import ChartLine from 'carbon-pictograms-svelte/lib/ChartLine.svelte';
	import Notifications from 'carbon-pictograms-svelte/lib/Notifications.svelte';
	import HeroVideoBackground from '$lib/client/videos/hero-bg.webm';
	import ClickableTilePictogram from '$lib/client/components/ClickableTilePictogram.svelte';
	import LandingPageSection from '$lib/client/components/LandingPageSection.svelte';
	import MonsterPartIconWhite from '$lib/client/components/frontier/icon/item/Monster_Part_Icon_White.svelte';
	import type { PageData } from './$types';
	import HelmetIconWhite from '$lib/client/components/frontier/icon/armor/Helmet_Icon_White.svelte';
	import BookIconWhite from '$lib/client/components/frontier/icon/item/Book_Icon_White.svelte';
	import TrophyWhite from '$lib/client/components/frontier/icon/TrophyWhite.svelte';
	import TicketIconWhite from '$lib/client/components/frontier/icon/item/Ticket_Icon_White.svelte';
	import Carousel from '$lib/client/components/Carousel.svelte';
	import Youtube from 'svelte-youtube-embed';
	import TrophyIcon from 'carbon-icons-svelte/lib/Trophy.svelte';
	import Document from 'carbon-icons-svelte/lib/Document.svelte';
	import Testimonial from '$lib/client/components/Testimonial.svelte';
	import CallToActionBanner from '$lib/client/components/CallToActionBanner.svelte';
	import FrequentlyAskedQuestions from '$lib/client/components/FrequentlyAskedQuestions.svelte';
	import OutboundLink from 'carbon-components-svelte/src/Link/OutboundLink.svelte';
	import Head from '$lib/client/components/Head.svelte';
	import { page } from '$app/stores';
	import {
		authorName,
		authorUrl,
		datePublished,
		overlayDescription,
		projectName,
		website,
	} from '$lib/constants';
	import pageThumbnail from '$lib/client/images/logo.png';
	import Quotes from 'carbon-icons-svelte/lib/Quotes.svelte';
	import ListChecked from 'carbon-icons-svelte/lib/ListChecked.svelte';
	import VideoPlayer from 'carbon-icons-svelte/lib/VideoPlayer.svelte';
	import QuestionAnswering from 'carbon-icons-svelte/lib/QuestionAnswering.svelte';

	export let data: PageData;

	const heroTitles = [
		'Explore the Frontier Like Never Before',
		'Elevate Your Frontier Adventures',
		'Unlock the Secrets of the Frontier',
		'Navigate the Frontier with Ease',
		'Conquer New Frontiers',
		'Your Guide to Frontier Exploration',
		'Optimized Adventures in the Frontier',
		'Discover New Horizons in the Frontier',
		'Enhance Your Frontier Journey',
		'Frontier Exploration Perfected',
		'Empower Your Frontier Quests',
		'Maximize Your Frontier Experience',
		'Journey Deeper into the Frontier',
		'Elevate Your Frontier Expeditions',
		'Boost your Frontier Experience',
		'Hunt from Abiorugu to Zinogre',
		'Track Your Hunts',
		"Automatic Hunter's Notes",
		'Cybernetically Enhanced Speedruns',
		'Optimize Your Speedruns',
		'Optimize Your Hunts',
		'Cybernetically Enhanced Hunts',
		'See Number Go Up',
		'Keep Track of Your Damage',
		'The Zenith of Data Visualization',
		'Revitalize Your Frontier Gameplay',
	];

	const images = {
		monster: [
			'https://github.com/DorielRivalet/mhfz-overlay/blob/main/demo/hp1.png?raw=true',
			'https://github.com/DorielRivalet/mhfz-overlay/blob/main/demo/hp2.png?raw=true',
			'https://github.com/DorielRivalet/mhfz-overlay/blob/main/demo/monsterstat1.png?raw=true',
			'https://github.com/DorielRivalet/mhfz-overlay/raw/main/demo/monsterstat2.png',
			'https://github.com/DorielRivalet/mhfz-overlay/raw/main/demo/ailments1.png',
			'https://github.com/DorielRivalet/mhfz-overlay/raw/main/demo/ailments2.png',
			'https://github.com/DorielRivalet/mhfz-overlay/raw/main/demo/monsterparts1.png',
		],
		hunter: [
			'https://github.com/DorielRivalet/mhfz-overlay/raw/main/demo/sharpness1.png',
			'https://github.com/DorielRivalet/mhfz-overlay/raw/main/demo/playerstat1.png',
			'https://github.com/DorielRivalet/mhfz-overlay/raw/main/demo/playerstat2.png',
			'https://github.com/DorielRivalet/mhfz-overlay/raw/main/demo/kbm.gif',
			'https://github.com/DorielRivalet/mhfz-overlay/raw/main/demo/apm.gif',
			'https://github.com/DorielRivalet/mhfz-overlay/raw/main/demo/hits.gif',
			'https://github.com/DorielRivalet/mhfz-overlay/raw/main/demo/buffs.png',
			'https://github.com/DorielRivalet/mhfz-overlay/raw/main/demo/config5.png',
			'https://github.com/DorielRivalet/mhfz-overlay/raw/main/demo/config6.png',
			'https://github.com/DorielRivalet/mhfz-overlay/raw/main/demo/discord5.png',
			'https://github.com/DorielRivalet/mhfz-overlay/raw/main/demo/discord10.png',
			'https://github.com/DorielRivalet/mhfz-overlay/raw/main/demo/discord9.png',
			'https://github.com/DorielRivalet/mhfz-overlay/raw/main/demo/discord9.gif',
			'https://github.com/DorielRivalet/mhfz-overlay/raw/main/demo/discord7.png',
		],
		quest: [
			'https://github.com/DorielRivalet/mhfz-overlay/raw/main/demo/speedrun.png',
			'https://github.com/DorielRivalet/mhfz-overlay/raw/main/demo/databaseweaponusage.png',
			'https://github.com/DorielRivalet/mhfz-overlay/raw/main/demo/compendium.png',
			'https://github.com/DorielRivalet/mhfz-overlay/raw/main/demo/calendar.png',
			'https://github.com/DorielRivalet/mhfz-overlay/raw/main/demo/databasetop20.png',
			'https://github.com/DorielRivalet/mhfz-overlay/raw/main/demo/databasegear.png',
			'https://github.com/DorielRivalet/mhfz-overlay/raw/main/demo/databasegraphs.png',
			'https://github.com/DorielRivalet/mhfz-overlay/raw/main/demo/databasemostrecent.png',
			'https://github.com/DorielRivalet/mhfz-overlay/raw/main/demo/questpace.png',
			'https://github.com/DorielRivalet/mhfz-overlay/raw/main/demo/databaseinventories.png',
			'https://github.com/DorielRivalet/mhfz-overlay/raw/main/demo/personalbest1.png',
			'https://github.com/DorielRivalet/mhfz-overlay/raw/main/demo/config1.png',
			'https://github.com/DorielRivalet/mhfz-overlay/raw/main/demo/config2.png',
		],
		achievement: [
			'https://github.com/DorielRivalet/mhfz-overlay/raw/main/demo/achievements.png',
			'https://github.com/DorielRivalet/mhfz-overlay/raw/main/demo/contextmenu4.png',
		],
		documentation: [
			'https://github.com/DorielRivalet/mhfz-overlay/raw/main/scripts/output/commit_types.png',
			'https://github.com/DorielRivalet/mhfz-overlay/raw/main/scripts/output/commits_over_time.png',
			'https://github.com/DorielRivalet/mhfz-overlay/raw/main/scripts/output/commits_per_day_of_week.png',
			'https://github.com/DorielRivalet/mhfz-overlay/raw/main/scripts/output/commits_per_hour.png',
		],
	};

	const faq: { question: string; answer: string }[] = [
		{
			question: 'How to Enable Discord Rich Presence?',
			answer:
				'In Discord, My Account -> Activity Privacy -> Check "Display current activity as a status message". Then Discord Developer Portal -> New Application -> Name it "MONSTER HUNTER FRONTIER Z". Then in Developer Portal, General Information -> Copy Application ID. Finally, in Overlay Settings, paste into Overlay Settings Discord Rich Presence Application/Client ID (The ID also shows up in OAuth2 section as Client ID).',
		},
		{
			question: 'How to Enable Speedrun Categories & Zen Mode?',
			answer: 'Use the preset option found in the General tab. ',
		},
		{
			question: 'What does the version numbers mean?',
			answer:
				'We use semantic versioning to number our releases. In semantic versioning, versions are represented as "major.minor.patch" numbers, such as "1.2.3". A change in the major version number indicates a significant change that may require you to upgrade your software. This typically includes breaking changes that are not backwards-compatible. A change in the minor version number indicates new features or enhancements that have been added to the software. A change in the patch version number indicates bug fixes and small improvements.\nWe provide release notes with each new version of the software, which describe the changes that have been made and how they may affect you. If upgrading to a new version requires any specific instructions, we will provide these as well.',
		},
		{
			question: 'Does this software support other operating systems?',
			answer: `As detailed in the program's README, this software is meant for Windows 10. It might work with other versions of Windows, but it may function with less stability.`,
		},
		{
			question: 'I cannot run the setup executable, what should I do?',
			answer: 'Make sure to run as Administrator.',
		},
		{
			question: 'What does Effective HP and True HP mean?',
			answer: `Effective HP is the HP taking into account the monster's defense rate. Burning Freezing Elzelion has 1,000,000 EHP because his True HP is 30,000 and his defense rate is 0.03. True HP is the HP of the monster without taking into account the monster's defense rate.`,
		},
		{
			question: 'How did the overlay come to be?',
			answer: `In early 2022, a few accessible MHF-Z private servers were created, renewing some interest on the game for many people. With this renewed interest, a bunch of people started to create new tools for the game. One of those tools were an overlay, created by suzaku01. Later on, that overlay inspired the creation of another overlay, created by Imulion. Around September 2022, Doriel Rivalet forked Imulion's overlay and began working on it.

Some of Doriel's hobbies involve things such as programming and speedrunning. Originally, the overlay was created to help Doriel track many kinds of statistics during a run, along with delving into C# and .NET for the first time. This is Doriel's first project with the programming language. Doriel used to do quest runs with LiveSplit, and consult all kinds of MHF-Z information in many different places. The overlay was intended to help replace LiveSplit along with consolidating the community's knowledge in an easy to access project. Doriel believes that a community's knowledge shouldn't be limited to any particular application, be it Discord, Google Sheets, or even the overlay itself. With such purposes in mind, the overlay was decided to be Free Libre Open Source Software (FLOSS).`,
		},
		{
			question: 'What is the database used for?',
			answer:
				'The overlay uses a SQLite database file for storing your past quest runs information, among other things, so that you can view graphs and statistics of your past runs. SQLite is known for being lightweight and performant, and the source code of the overlay implements various techniques to take advantage of such.',
		},
		{
			question: 'Does the overlay affect the game?',
			answer: `No. The overlay does read memory addresses, but it never writes (i.e. modifies values) to them. It is more likely that the local files of the game or the server files are affecting the game, both of which are unrelated to the overlay.

			The overlay is not a mod.`,
		},
	];

	const customTitle = 'Overlay';
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

<div class="overlay-page">
	<section class="top-hero-section">
		<TopHeroSection
			starCount={data.stargazers_count}
			title={heroTitles[Math.floor(Math.random() * heroTitles.length)]}
			description="Enhance your gameplay with a user-friendly, customizable interface. Perfect for casual players and speedrunners, offering easy access to essential tools and resources for an optimized gaming experience."
			primaryButtonText="Get Overlay"
			primaryButtonLink="https://github.com/DorielRivalet/mhfz-overlay?tab=readme-ov-file#installation"
			heroVideoBackground={HeroVideoBackground}
		/>
	</section>

	<section class="demo-section" id="demo">
		<div class="subheader">
			<VideoPlayer />
			<p>Preview</p>
		</div>
		<h2>Demo</h2>
		<hr />
		<div class="youtube-embed">
			<Youtube id="A9ffbRICqZY" />
		</div>
	</section>

	<section class="pictograms-section">
		<div class="pictograms-overview">
			<p><strong>Explore our features.</strong></p>
			<p>We provide many statistics to enhance your hunting experience.</p>
		</div>
		<div class="pictograms">
			<div class="pictogram">
				<ClickableTilePictogram
					href="/overlay/release-notes"
					title="Release Notes"
					pictogram={Notifications}
				/>
			</div>
			<div class="pictogram">
				<ClickableTilePictogram
					href="/overlay#monster-info"
					title="Monster Info"
					pictogram={ChartLine}
				/>
			</div>
			<div class="pictogram">
				<ClickableTilePictogram
					href="/overlay#hunter-stats"
					title="Hunter Stats"
					pictogram={ChartRadar}
				/>
			</div>
			<div class="pictogram">
				<ClickableTilePictogram
					href="/overlay#quest-history"
					title="Quest History"
					pictogram={Archive}
				/>
			</div>
			<div class="pictogram">
				<ClickableTilePictogram
					href="/overlay/achievements"
					title="Achievements"
					pictogram={Trophy}
				/>
			</div>
			<div class="pictogram">
				<ClickableTilePictogram
					href="https://github.com/DorielRivalet/mhfz-overlay/tree/main/docs"
					title="Documentation"
					pictogram={Documentation}
				/>
			</div>
		</div>
	</section>

	<section class="testimonials-section">
		<div class="subheader">
			<Quotes />
			<p>Testimonials</p>
		</div>
		<h2>What Our Users Say</h2>
		<hr />
		<div class="testimonials">
			<Testimonial
				authorName="Kairi"
				authorTitle="MHF-Z Speedrunner"
				authorLink="https://www.youtube.com/@kairi_mhfz"
				quote="The overlay offers a preset configuration for speedruns, disabling any options that give an unfair advantage. It includes quest logging and stores completed runs in a local database for submission and validation. This ensures fair competition and prevents fake runs."
				authorImage="https://yt3.googleusercontent.com/ytc/AOPolaQWKx3GIOgWWRu9YCHBI7lrkFjT2NxLP45IlnSM=s176-c-k-c0x00ffffff-no-rj"
			/>
			<Testimonial
				authorName="Sera"
				authorTitle="MHF-Z Speedrunner"
				authorLink="https://www.youtube.com/@Sera9145"
				quote="The overlay verifies that the files are legitimate and unmodified to prevent gaining an advantage, then uploads the data to the leaderboard with linked YouTube videos. It can also show damage numbers and track musou kills, which are not displayed by the game."
				authorImage="https://yt3.googleusercontent.com/2PmblC16_LZtoziuCn9ZMbivRpkLXi60t44bhp3WSl3KB_ShbDvvek-hRfZgfbf2HDOYetDP=s176-c-k-c0x00ffffff-no-rj"
			/>
		</div>
	</section>

	<section id="monster-info" class="features-section">
		<div class="subheader">
			<ListChecked />
			<p>Features</p>
		</div>
		<h2>What We Offer</h2>
		<hr />
		<LandingPageSection
			imagePosition="right"
			title="From Abiorugu to Zinogre"
			section="Monster Info"
			description="Comprehensive details on monster effective HP, stats, status ailments, body parts, and hunting logs."
			sectionIcon={MonsterPartIconWhite}
			sectionIconProps={{ size: '32px' }}
		>
			<Carousel images={images.monster}></Carousel>
		</LandingPageSection>
	</section>

	<section id="hunter-stats">
		<LandingPageSection
			imagePosition="left"
			title="Comprehensive Hunter's Notes"
			section="Hunter Stats"
			description="Track your sharpness, quest times, hit counts, player inputs, stats graphs, damage numbers, and buffs. Includes Discord Rich Presence integration and guild card features."
			sectionIcon={HelmetIconWhite}
			sectionIconProps={{ size: '32px' }}
		>
			<Carousel images={images.hunter}></Carousel>
		</LandingPageSection>
	</section>

	<section id="quest-history">
		<LandingPageSection
			imagePosition="right"
			title="Revisit your previous hunts"
			section="Quest History"
			description="Track your run categories, personal best times, damage per second, weapon usage, and quest statistics. Includes YouTube integration, detailed pacing, and item usage with timestamps."
			sectionIcon={TicketIconWhite}
			sectionIconProps={{ size: '32px' }}
		>
			<Carousel images={images.quest}></Carousel>
		</LandingPageSection>
	</section>

	<section id="achievements">
		<LandingPageSection
			callToActionButtonText="View Achievements"
			callToActionButtonLink="/overlay/achievements"
			callToActionButtonIcon={TrophyIcon}
			imagePosition="left"
			title="Rewards for the best of hunters"
			section="Achievements"
			description="Explore and unlock a comprehensive list of over 400 achievements, ranging from bronze to platinum. Challenge yourself to earn every reward, including hidden secret achievements!"
			sectionIcon={TrophyWhite}
			sectionIconProps={{ size: '32px' }}
		>
			<Carousel images={images.achievement}></Carousel>
		</LandingPageSection>
	</section>

	<section id="documentation">
		<LandingPageSection
			imagePosition="center"
			callToActionButtonText="Read Contributing File"
			callToActionButtonLink="https://github.com/DorielRivalet/mhfz-overlay/blob/main/CONTRIBUTING.md"
			callToActionButtonIcon={Document}
			title="Learn more about the project"
			section="Documentation"
			description="Access comprehensive documentation covering the project's philosophy, CI/CD workflow, database schema, deployment instructions, class structure, libraries used, color palette, logging, testing, performance goals, and coding conventions. Gain in-depth insights into the software's design principles and development plans."
			sectionIcon={BookIconWhite}
			sectionIconProps={{ size: '32px' }}
		>
			<Carousel images={images.documentation}></Carousel>
		</LandingPageSection>
	</section>

	<section class="faq-section">
		<div class="subheader">
			<QuestionAnswering />
			<p>FAQ</p>
		</div>
		<h2>Frequently Asked Questions</h2>
		<hr />
		<FrequentlyAskedQuestions {faq} />
		<footer>
			<p class="spaced-paragraph">
				If your question was not answered here, check our <OutboundLink
					href="https://github.com/DorielRivalet/mhfz-overlay/blob/main/FAQ.md"
					>FAQ file at the GitHub repository.</OutboundLink
				>
			</p>
			<p>
				If you are looking for a roadmap, the main developer uses a <OutboundLink
					href="https://github.com/users/DorielRivalet/projects/1"
					>GitHub project</OutboundLink
				> for all issues related to the game.
			</p>
		</footer>
	</section>

	<section class="call-to-action-section">
		<CallToActionBanner
			bodyText="Are you ready to upgrade your Frontier experience?"
			buttonText="Download Now"
			buttonLink="https://github.com/DorielRivalet/mhfz-overlay?tab=readme-ov-file#installation"
		/>
	</section>
</div>

<style lang="scss">
	@use '@carbon/motion' as motion;
	@use '@carbon/type' as type;

	/* Apply background colors alternately */
	.overlay-page > section:nth-child(odd) {
		background-color: var(--ctp-base); /* Light grey for odd-numbered divs */
	}

	.overlay-page > section:nth-child(even) {
		background-color: var(
			--ctp-mantle
		); /* Darker grey for even-numbered divs */
	}

	.top-hero-section {
		height: 100vh; /* Full viewport height */
		padding: 0;
		margin: 0;
	}

	.pictograms-section {
		display: grid;
		grid-template-columns: 1fr 3fr;
		padding-top: 1rem;
		padding-right: 1rem;
		padding-bottom: 2rem;
		min-height: 90vh;
	}

	.pictograms-overview {
		display: flex;
		flex-direction: column;
		gap: 1rem;
		padding: 1rem;
	}

	@media (min-width: 320px) {
		.pictograms {
			display: grid;
			grid-template-columns: 1fr;
			gap: 2px;
		}
	}

	@media (min-width: 1056px) {
		.pictograms {
			display: grid;
			grid-template-columns: 1fr 1fr 1fr;
			gap: 2px;
			align-content: flex-start;
		}
	}

	.pictogram {
		flex-grow: 1;
	}

	.demo-section,
	.testimonials-section,
	.faq-section,
	.call-to-action-section {
		display: flex;
		flex-direction: column;
		align-items: center;
		padding-top: 2rem;
		padding-bottom: 2rem;
	}

	.features-section {
		display: flex;
		flex-direction: column;
		align-items: center;
		padding-top: 2rem;
	}

	.call-to-action-section {
		padding-left: 1rem;
		padding-right: 1rem;
	}

	/*https://developer.mozilla.org/en-US/docs/Web/CSS/color_value/color-mix*/
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

	.youtube-embed {
		margin: auto;
		width: 80%;
		border: 8px solid var(--ctp-surface0);
		border-radius: 4px 4px 4px 4px;
	}

	.testimonials {
		margin-top: 2rem;
		display: flex;
		flex-direction: column;
		gap: var(--cds-spacing-12);
	}

	.faq-section footer {
		width: 80%;
		margin: auto;
	}

	.subheader {
		display: flex;
		gap: 0.25rem;
		align-items: center;
		color: var(--ctp-subtext0);
	}

	section > h2 {
		@include type.type-style('fluid-heading-05', true);
	}

	section > .subheader > p {
		@include type.type-style('fluid-heading-03', true);
	}
</style>
