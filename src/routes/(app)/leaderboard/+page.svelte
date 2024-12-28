<!--
  ~ © 2024 Doriel Rivalet
  ~ Use of this source code is governed by a MIT license that can be
  ~ found in the LICENSE file.
-->

<script>
	import SectionHeadingTopLevel from '$lib/client/components/SectionHeadingTopLevel.svelte';
	import pageThumbnail from '$lib/client/images/icon/pvp.png';
	import Tabs from 'carbon-components-svelte/src/Tabs/Tabs.svelte';
	import Tab from 'carbon-components-svelte/src/Tabs/Tab.svelte';
	import TabContent from 'carbon-components-svelte/src/Tabs/TabContent.svelte';
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
	import Link from 'carbon-components-svelte/src/Link/Link.svelte';
	import SectionHeading from '$lib/client/components/SectionHeading.svelte';
	import SectionHeadingCentered from '$lib/client/components/SectionHeadingCentered.svelte';
	import UnorderedList from 'carbon-components-svelte/src/UnorderedList/UnorderedList.svelte';
	import ListItem from 'carbon-components-svelte/src/ListItem/ListItem.svelte';

	let selectedTabIndex = $state(0);

	const customTitle = "Leaderboard — Frontier's Wycademy";
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

<section class="main-section">
	<SectionHeadingTopLevel title="Leaderboards" />
	<div>
		<Tabs bind:selected={selectedTabIndex}>
			<Tab label="Quests" />
			<Tab label="Monsters" />
			<Tab label="Achievements" />
			<Tab label="Gear" />
			<Tab label="Events" />
			<Tab label="Help" />
			{#snippet content()}
				<TabContent>
					<section>
						<div><Link href="/quest-viewer">Quest Viewer.</Link></div>
					</section>
				</TabContent>
				<TabContent>
					<section>
						<div></div>
					</section>
				</TabContent>
				<TabContent>
					<section>
						<div></div>
					</section>
				</TabContent>
				<TabContent>
					<section>
						<div></div>
					</section>
				</TabContent>
				<TabContent>
					<section>
						<div></div>
					</section>
				</TabContent>
				<TabContent>
					<section>
						<div>
							<p class="spaced-paragraph">
								Please read our <Link
									inline
									href="/support/policies/terms-of-service"
									>Terms of Service</Link
								>, <Link inline href="/support/policies/privacy-policy"
									>Privacy Policy</Link
								> and <Link inline href="/support/policies/community-standards"
									>Community Standards</Link
								>.
							</p>
							<p class="spaced-paragraph">
								Our Community Standards page explains the following:
							</p>
							<UnorderedList class="spaced-list">
								<ListItem
									><p>Speedrun submissions rules and guidelines.</p></ListItem
								>
								<ListItem
									><p>
										Moderator guidelines and disciplinary actions.
									</p></ListItem
								>
								<ListItem
									><p>User expectations and how to report abuse.</p></ListItem
								>
							</UnorderedList>
						</div>
					</section>
				</TabContent>
			{/snippet}
		</Tabs>
	</div>
</section>

<style lang="scss">
	.main-section {
		display: flex;
		flex-direction: column;
	}
</style>
