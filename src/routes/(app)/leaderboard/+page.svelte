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
	import Button from 'carbon-components-svelte/src/Button/Button.svelte';
	import AddLarge from 'carbon-icons-svelte/lib/AddLarge.svelte';
	import Accordion from 'carbon-components-svelte/src/Accordion/Accordion.svelte';
	import AccordionItem from 'carbon-components-svelte/src/Accordion/AccordionItem.svelte';
	import OutboundLink from 'carbon-components-svelte/src/Link/OutboundLink.svelte';
	import Help from 'carbon-icons-svelte/lib/Help.svelte';
	import Information from 'carbon-icons-svelte/lib/Information.svelte';
	import InlineTooltip from '$lib/client/components/frontier/InlineTooltip.svelte';
	import { getGameIcon } from '$lib/client/modules/frontier/objects';
	import { getMonsterIcon } from '$lib/client/modules/frontier/monsters';
	import { getWeaponIcon } from '$lib/client/modules/frontier/weapons';
	import InlineNotification from 'carbon-components-svelte/src/Notification/InlineNotification.svelte';

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
	<InlineNotification
		lowContrast
		hideCloseButton
		kind="info"
		title="Development:"
		subtitle="You cannot submit quests yet."
	/>
	<SectionHeadingTopLevel title="Leaderboards" />
	<div>
		<Accordion class="spaced-accordion">
			<AccordionItem>
				{#snippet title()}
					<h5 class="accordion-title">
						<span><Information /></span><span>About</span>
					</h5>
				{/snippet}
				<section>
					<SectionHeading
						title="Compete for Glory on Wycademy Leaderboards"
						level={2}
					/>
					<div>
						<div class="spaced-paragraph">
							Are you ready to showcase your <InlineTooltip
								iconType="file"
								icon={getGameIcon('Monster Hunter Frontier Z')}
								text="Monster Hunter Frontier"
								tooltip="Game"
							/> skills? Wycademy Leaderboards give speedrunners the chance to claim
							the top spot across a massive <strong>3150</strong> unique
							challenge spots! With 45 quests—including
							<strong>23 Zeniths, 15 Musou quests</strong>
							(featuring the additional alternative locations of <InlineTooltip
								iconType="file"
								icon={getMonsterIcon('Shifting Mi Ru')}
								text="Shifting Mi Ru"
								tooltip="Monster"
							/>, <InlineTooltip
								iconType="file"
								icon={getMonsterIcon('Blinking Nargacuga')}
								text="Blinking Nargacuga"
								tooltip="Monster"
							/>, <InlineTooltip
								iconType="file"
								icon={getMonsterIcon('Howling Zinogre')}
								text="Howling Zinogre"
								tooltip="Monster"
							/>, <InlineTooltip
								iconType="file"
								icon={getMonsterIcon('Burning Freezing Elzelion')}
								text="Burning Freezing Elzelion"
								tooltip="Monster"
							/>, and <InlineTooltip
								iconType="file"
								icon={getMonsterIcon('Golden Deviljho')}
								text="Golden Deviljho"
								tooltip="Monster"
							/>),
							<strong>4 Conquest quests, 2 Upper Shiten challenges</strong>, and
							the one <InlineTooltip
								iconType="file"
								icon={getMonsterIcon('Duremudira')}
								text="2nd District Duremudira"
								tooltip="Monster"
							/> challenge—every category is a battleground for mastery!
						</div>
						<div class="spaced-paragraph">
							And it doesn’t stop there. Each quest spans <strong
								>5 distinct categories</strong
							>, accommodating all playstyles, and supports all 14 weapon types.
							Whether you're a <InlineTooltip
								iconType="component"
								icon={getWeaponIcon('Great Sword')}
								text="Great Sword"
								tooltip="Weapon"
							/> expert, an adept <InlineTooltip
								iconType="component"
								icon={getWeaponIcon('Dual Swords')}
								text="Dual Swords"
								tooltip="Weapon"
							/> user, or a <InlineTooltip
								iconType="component"
								icon={getWeaponIcon('Hunting Horn')}
								text="Hunting Horn"
								tooltip="Weapon"
							/> maestro, there's a place for you to shine.
						</div>
					</div>
				</section>
				<section>
					<SectionHeading
						level={2}
						title="Why Join the Wycademy Leaderboards?"
					/>
					<div>
						<UnorderedList class="spaced-list">
							<ListItem
								><p>
									<strong>Massive Variety:</strong> Test your skills in hundreds
									of challenges across different maps, monster variations, and weapon-specific
									runs.
								</p></ListItem
							>
							<ListItem
								><p>
									<strong>Community Recognition:</strong> Climb the ranks, earn respect,
									and see your name listed among the best speedrunners.
								</p></ListItem
							>
							<ListItem
								><p>
									<strong>Accessible and Fair:</strong> Wycademy ensures equal footing
									for all, whether you're a veteran or a newcomer seeking to break
									into the scene.
								</p></ListItem
							>
							<ListItem
								><p>
									<strong>Endless Motivation:</strong> With thousands of leaderboard
									spots available, there’s always a new challenge to tackle and conquer!
								</p></ListItem
							>
						</UnorderedList>
						<p class="spaced-paragraph">
							Start your journey today and show the Monster Hunter community
							what you’re made of. Who knows—you could be the next speedrunning
							legend!
						</p>
						<p class="spaced-paragraph">
							Note: currently some quest times for certain categories show as
							blank for quests where that category is not possible (e.g. in 2nd
							District Duremudira).
						</p>
					</div>
				</section>
			</AccordionItem></Accordion
		>
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
						<div>
							<div class="top-buttons">
								<Button kind="primary" icon={AddLarge} href="/quest-viewer"
									>Submit Quests</Button
								>
							</div>
						</div>
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
		view-transition-name: main-section;
	}

	.accordion-title {
		display: flex;
		gap: 0.25rem;
		align-items: start;
		vertical-align: middle;
	}

	@view-transition {
		navigation: auto;
	}
	@media (prefers-reduced-motion) {
		@view-transition {
			navigation: none;
		}
	}

	/* Create a custom animation */

	@keyframes move-out {
		from {
			transform: translateY(0%);
		}

		to {
			transform: translateY(100%);
		}
	}

	@keyframes move-in {
		from {
			transform: translateY(-100%);
		}

		to {
			transform: translateY(0%);
		}
	}

	::view-transition-old(main-section),
	::view-transition-new(main-section) {
		height: auto;
	}

	::view-transition-new(main-section) {
		animation: 0.15s ease-in both move-in;
	}
</style>
