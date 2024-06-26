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

	// import Pin from 'carbon-icons-svelte/lib/Pin.svelte';
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
	// import Favorite from 'carbon-icons-svelte/lib/Favorite.svelte';
	// import FavoriteFilled from 'carbon-icons-svelte/lib/FavoriteFilled.svelte';
	// import Fire from 'carbon-icons-svelte/lib/Fire.svelte';
	// import Flag from 'carbon-icons-svelte/lib/Flag.svelte';
	// import FlagFilled from 'carbon-icons-svelte/lib/FlagFilled.svelte';
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
	// import LogoDiscord from 'carbon-icons-svelte/lib/LogoDiscord.svelte';
	// import LogoYoutube from 'carbon-icons-svelte/lib/LogoYoutube.svelte';
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

	<section>
		<SectionHeading level={2} title="Wardrobe" />
		<ProfilePinnedSets bind:theme={$theme} />
	</section>

	<section>
		<SectionHeading level={2} title="Quests Stats" />
		<ProfileHuntsCalendarGraph bind:theme={$theme} />
	</section>

	<section>
		<ProfileHuntsGraph />
	</section>

	<section>
		<ProfileRecentActivity />
	</section>

	<section>
		<ProfileRecentHunts />
	</section>

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
</style>
