<!--
  ~ © 2023 Doriel Rivalet
  ~ Use of this source code is governed by a MIT license that can be
  ~ found in the LICENSE file.
-->
<script lang="ts">
	import Header from '../Header.svelte';
	import Footer from '../Footer.svelte';
	import ViewTransition from '../Navigation.svelte';
	import Theme from 'carbon-components-svelte/src/Theme/Theme.svelte';
	import { theme } from '$lib/client/stores/theme';
	import { themeTokens } from '$lib/client/themes/tokens';
	import { catppuccinThemeMap } from '$lib/client/themes/catppuccin';
	import { onMount } from 'svelte';
	import { cursorIcon } from '$lib/client/stores/cursor';
	import { cursorVars } from '$lib/client/themes/cursor';
	import { page } from '$app/stores';
	import type { LayoutData } from './$types';
	import InlineNotification from 'carbon-components-svelte/src/Notification/InlineNotification.svelte';
	import NotificationActionButton from 'carbon-components-svelte/src/Notification/NotificationActionButton.svelte';
	import { developmentStage } from '$lib/constants';
	import { goto } from '$app/navigation';
	import SectionHeadingTopLevel from '$lib/client/components/SectionHeadingTopLevel.svelte';
	import pageThumbnail from '$lib/client/images/icon/book.png';
	import {
		authorName,
		authorUrl,
		datePublished,
		description,
		projectName,
		website,
	} from '$lib/constants';
	import Head from '$lib/client/components/Head.svelte';
	import Link from 'carbon-components-svelte/src/Link/Link.svelte';
	import InlineTooltip from '$lib/client/components/frontier/InlineTooltip.svelte';
	import {
		LocationIcons,
		gameInfo,
	} from '$lib/client/modules/frontier/objects';
	import SectionHeading from '$lib/client/components/SectionHeading.svelte';
	import ClickableTileImage from '$lib/client/components/ClickableTileImage.svelte';
	import ExtremeFireblight from '$lib/client/components/frontier/icon/ailment/ExtremeFireblight.svelte';
	import ExtremeParalysis from '$lib/client/components/frontier/icon/ailment/ExtremeParalysis.svelte';
	import StygianZinogre from '$lib/client/components/frontier/icon/monster/StygianZinogre.svelte';
	import YamaKurai2 from '$lib/client/components/frontier/icon/monster/YamaKurai2.svelte';
	import BurningFreezingElzelion2 from '$lib/client/components/frontier/icon/monster/BurningFreezingElzelion2.svelte';
	import Duremudira from '$lib/client/components/frontier/icon/monster/Duremudira.svelte';
	import BookIconWhite from '$lib/client/components/frontier/icon/item/Book_Icon_White.svelte';
	import Bogabadorumu6 from '$lib/client/components/frontier/icon/monster/Bogabadorumu6.svelte';
	import SupremacyTeostra from '$lib/client/components/frontier/icon/monster/SupremacyTeostra.svelte';
	import ConquestFatalis7 from '$lib/client/components/frontier/icon/monster/ConquestFatalis7.svelte';
	import UNKNOWN from '$lib/client/images/monster/shiten_unknown.webp';
	import BerserkRaviente from '$lib/client/components/frontier/icon/monster/BerserkRaviente.svelte';
	import MapIconWhite from '$lib/client/components/frontier/icon/item/Map_Icon_White.svelte';
	import SacIconWhite from '$lib/client/components/frontier/icon/item/Sac_Icon_White.svelte';
	import MedicineIconWhite from '$lib/client/components/frontier/icon/item/Medicine_Icon_White.svelte';
	import BallIconWhite from '$lib/client/components/frontier/icon/item/Ball_Icon_White.svelte';
	import Zerureusu from '$lib/client/components/frontier/icon/monster/Zerureusu.svelte';
	import ShotIconWhite from '$lib/client/components/frontier/icon/item/Shot_Icon_White.svelte';
	import TrapToolIconWhite from '$lib/client/components/frontier/icon/item/Trap_Tool_Icon_White.svelte';
	import JewelIconWhite from '$lib/client/components/frontier/icon/item/Jewel_Icon_White.svelte';
	import Logo from '$lib/client/images/logo.svg';
	import { getWeaponIcon } from '$lib/client/modules/frontier/functions';
	import AkuraJebia2 from '$lib/client/components/frontier/icon/monster/AkuraJebia2.svelte';
	import AllWeapons from '$lib/client/components/frontier/icon/weapon/AllWeapons.svelte';
	import AllArmors from '$lib/client/components/frontier/icon/armor/AllArmors.svelte';
	import TicketIconWhite from '$lib/client/components/frontier/icon/item/Ticket_Icon_White.svelte';
	import SigilIconWhite from '$lib/client/components/frontier/icon/item/Sigil_Icon_White.svelte';
	import { stickyHeaderStore } from '$lib/client/stores/toggles';
	import AllMonsters from '$lib/client/components/frontier/icon/monster/AllMonsters.svelte';

	//TODO svg: mezfes, caravan, festi, transcend, etc
	//TODO animated webp: items, locations, events, etc.

	$: tokens = themeTokens[$theme] || themeTokens.default;
	export let data: LayoutData;

	onMount(() => {
		let themeValue = $theme;
		let cssVarMap =
			catppuccinThemeMap[themeValue] || catppuccinThemeMap.default;
		Object.keys(cssVarMap).forEach((key) => {
			document.documentElement.style.setProperty(key, `var(${cssVarMap[key]})`);
		});

		let cursorValue = $cursorIcon;
		cssVarMap = cursorVars[cursorValue] || cursorVars.default;
		Object.keys(cssVarMap).forEach((key) => {
			document.documentElement.style.setProperty(key, `var(${cssVarMap[key]})`);
		});
	});

	const customTitle = "Hunter's Notes";
	const url = $page.url.toString();

	$: headerClass = $stickyHeaderStore ? 'header sticky' : 'header';
</script>

<Theme bind:theme={$theme} persist persistKey="__carbon-theme" {tokens} />
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

<div class="app">
	<ViewTransition />

	<div class={headerClass}>
		<Header />
	</div>
	<div class="banner">
		<InlineNotification
			lowContrast
			kind="warning"
			title="Status:"
			subtitle="This site is currently in {developmentStage}."
		>
			<svelte:fragment slot="actions">
				<NotificationActionButton
					on:click={() => goto('/about-development-stages')}
					>Learn more</NotificationActionButton
				>
			</svelte:fragment>
		</InlineNotification>
	</div>
	<main>
		<div class="container">
			<section class="top-level-section">
				<SectionHeadingTopLevel title="Hunter's Notes" />

				<p class="spaced-paragraph">
					Explore our guides and tutorials of <InlineTooltip
						tooltip="Game"
						text="Monster Hunter Frontier Z"
						iconType="file"
						icon={gameInfo.find((e) => e.name === 'Monster Hunter Frontier Z')
							?.icon}
					/>.
				</p>

				<p>
					If you are looking to calculate things such as your damage, please
					refer to the <Link href="/arena">Arena page.</Link>
				</p>

				<section>
					<SectionHeading level={2} title="Browse by section" />
					<section>
						<SectionHeading level={3} title="🔰 Getting Started" />
						<div class="container-tiles">
							<ClickableTileImage
								title="🔰 Your First Hunts"
								description="A walkthrough of the first tasks you should do when starting the game."
								imageSource={BookIconWhite}
								href="/hunter-notes/getting-started/your-first-hunts"
							/>
							<ClickableTileImage
								title="Elements"
								description="The elements of weapons and monsters. Includes combo elements and elemental resistances."
								imageSource={ExtremeFireblight}
								href="/hunter-notes/getting-started/elements"
							/>
							<ClickableTileImage
								title="Ailments"
								description="The status effects of both weapons and monsters. Includes monsters' status immunities."
								imageSource={ExtremeParalysis}
								href="/hunter-notes/getting-started/ailments"
							/>
							<ClickableTileImage
								title="Transcend"
								description="Learn how to upgrade transcend and see a list of burst effects."
								imageSource={LocationIcons.find((e) => e.name === 'Transcend')
									?.icon}
								href="/hunter-notes/getting-started/transcend"
							/>
						</div>
					</section>
					<section>
						<SectionHeading level={3} title="Monsters" />
						<div class="container-tiles">
							<ClickableTileImage
								title="Overview"
								description="The full list of monsters and their attributes, ecology, hitzone values and more."
								imageSource={AllMonsters}
								href="/hunter-notes/monsters/overview"
							/>
							<ClickableTileImage
								title="Exotics"
								description="The list of exotic monsters and the automatic skills they provide."
								imageSource={StygianZinogre}
								href="/hunter-notes/monsters/exotics"
							/>
							<ClickableTileImage
								title="Origin"
								description="The list of origin monsters and the automatic skills they provide."
								imageSource={YamaKurai2}
								href="/hunter-notes/monsters/origin"
							/>
							<ClickableTileImage
								title="Burst"
								description="The list of burst monsters."
								imageSource={Zerureusu}
								href="/hunter-notes/monsters/burst"
							/>
							<ClickableTileImage
								title="Supremacy"
								description="The list of supremacy monsters and how to beat them."
								imageSource={SupremacyTeostra}
								href="/hunter-notes/monsters/supremacy"
							/>
							<ClickableTileImage
								title="Duremudira"
								description="An explanation of Tower gear and skills, and how to beat 2nd District Duremudira."
								imageSource={Duremudira}
								href="/hunter-notes/monsters/duremudira"
							/>
							<ClickableTileImage
								title="Zenith"
								description="The list of zenith monsters and how to beat them; their gear and skills."
								imageSource={Bogabadorumu6}
								href="/hunter-notes/monsters/zenith"
							/>

							<ClickableTileImage
								title="Raviente"
								description="The list of Evolution weapons and their upgrade tree, Raviente armor,  and a tutorial for slaying and supporting during a Raviente raid."
								imageSource={BerserkRaviente}
								href="/hunter-notes/monsters/raviente"
							/>

							<ClickableTileImage
								title="Conquest"
								description="The list of conquest monsters and how to beat them; their materials and stats."
								imageSource={ConquestFatalis7}
								href="/hunter-notes/monsters/conquest"
							/>
							<ClickableTileImage
								title="Shiten"
								description="The list of shiten monsters and how to beat them; their sigils and stats."
								imageSource={UNKNOWN}
								href="/hunter-notes/monsters/shiten"
							/>
							<ClickableTileImage
								title="Unlimited"
								description="The list of unlimited (UL) monsters and their rewards upon hunting them."
								imageSource={AkuraJebia2}
								href="/hunter-notes/monsters/unlimited"
							/>
							<ClickableTileImage
								title="Musou"
								description="The list of musou monsters and how to beat them."
								imageSource={BurningFreezingElzelion2}
								href="/hunter-notes/monsters/musou"
							/>
						</div>
					</section>
					<section>
						<SectionHeading level={3} title="Weapons" />
						<div class="container-tiles">
							<ClickableTileImage
								title="Overview"
								description="An overview of each weapon type, their multipliers (including sharpness), recommended weapons, skills and sigils."
								imageSource={AllWeapons}
								href="/hunter-notes/weapons/overview"
							/>
							<ClickableTileImage
								title="Sigils"
								description="View a list of sigils."
								imageSource={SigilIconWhite}
								href="/hunter-notes/weapons/sigils"
							/>
							<ClickableTileImage
								title="Critical Distance"
								description="An explanation of ranged weapons' Critical Distance mechanic."
								imageSource={ShotIconWhite}
								href="/hunter-notes/weapons/critical-distance"
							/>
							<ClickableTileImage
								title="Active Feature"
								description="A list of each weapon's active feature."
								imageSource={AllWeapons}
								href="/hunter-notes/weapons/active-feature"
							/>
							<ClickableTileImage
								title="Hunting Horn Songs"
								description="A list of hunting horn songs."
								imageSource={getWeaponIcon('Hunting Horn')}
								href="/hunter-notes/weapons/hunting-horn-songs"
							/>
						</div>
					</section>
					<section>
						<SectionHeading level={3} title="Armor" />
						<div class="container-tiles">
							<ClickableTileImage
								title="Overview"
								description="An overview of armor types."
								imageSource={AllArmors}
								href="/hunter-notes/armor/overview"
							/>
							<ClickableTileImage
								title="Skills"
								description="The list of armor skills, including zenith skills."
								imageSource={JewelIconWhite}
								href="/hunter-notes/armor/skills"
							/>
							<ClickableTileImage
								title="Colors"
								description="The list of armor pigment colors and how to unlock them."
								imageSource={AllArmors}
								href="/hunter-notes/armor/colors"
							/>
							<ClickableTileImage
								title="Transmog"
								description="How to unlock transmog."
								imageSource={AllArmors}
								href="/hunter-notes/armor/transmog"
							/>
						</div>
					</section>
					<section>
						<SectionHeading level={3} title="Locations" />
						<div class="container-tiles">
							<ClickableTileImage
								title="Mezeporta Square"
								description="List of NPC available at Mezeporta Square."
								imageSource={LocationIcons.find((e) => e.name === 'Mezeporta')
									?.icon}
								href="/hunter-notes/locations/mezeporta-square"
							/>
							<ClickableTileImage
								title="Guild Hall"
								description="The various facilities of the Guild Hall explained: Guild Food, Guild Poogies, Guild Store, etc."
								imageSource={LocationIcons.find((e) => e.name === 'Guild Hall')
									?.icon}
								href="/hunter-notes/locations/guild-hall"
							/>
							<ClickableTileImage
								title="Bento"
								description="The various buffs provided by bentos summarized."
								imageSource={LocationIcons.find((e) => e.name === 'Bento')
									?.icon}
								href="/hunter-notes/locations/bento"
							/>
							<ClickableTileImage
								title="Hunter's Road"
								description="The road skills list and how to upgrade them."
								imageSource={LocationIcons.find((e) => e.name === 'Road')?.icon}
								href="/hunter-notes/locations/road"
							/>
							<ClickableTileImage
								title="Gathering Maps"
								description="The various gathering spots for all locations of the game."
								imageSource={MapIconWhite}
								href="/hunter-notes/locations/gathering-maps"
							/>
							<ClickableTileImage
								title="Caravan"
								description="Caravan gem, skills, colors, etc."
								imageSource={LocationIcons.find((e) => e.name === 'Caravan')
									?.icon}
								href="/hunter-notes/locations/caravan"
							/>
							<ClickableTileImage
								title="Blacksmith"
								description="List of NPC available at the Blacksmith."
								imageSource={LocationIcons.find((e) => e.name === 'Blacksmith')
									?.icon}
								href="/hunter-notes/locations/blacksmith"
							/>
							<ClickableTileImage
								title="Diva Fountain"
								description="See how to complete the Diva questline in order to earn various rewards."
								imageSource={LocationIcons.find(
									(e) => e.name === 'Diva Fountain',
								)?.icon}
								href="/hunter-notes/locations/diva-fountain"
							/>

							<ClickableTileImage
								title="My House"
								description="List of various options available in My House."
								imageSource={LocationIcons.find((e) => e.name === 'My House')
									?.icon}
								href="/hunter-notes/locations/my-house"
							/>
							<ClickableTileImage
								title="My Gallery"
								description="List of various options available in My Gallery."
								imageSource={LocationIcons.find((e) => e.name === 'My Gallery')
									?.icon}
								href="/hunter-notes/locations/my-gallery"
							/>
							<ClickableTileImage
								title="My Garden"
								description="List of various options available in My Garden."
								imageSource={LocationIcons.find((e) => e.name === 'My Garden')
									?.icon}
								href="/hunter-notes/locations/my-garden"
							/>
							<ClickableTileImage
								title="My Missions"
								description="List of various options available in My Missions."
								imageSource={LocationIcons.find((e) => e.name === 'My Missions')
									?.icon}
								href="/hunter-notes/locations/my-missions"
							/>
							<ClickableTileImage
								title="My Support"
								description="List of various options available in My Support."
								imageSource={LocationIcons.find((e) => e.name === 'My Support')
									?.icon}
								href="/hunter-notes/locations/my-support"
							/>
							<ClickableTileImage
								title="My Tore"
								description="List of various options available in My Tore."
								imageSource={LocationIcons.find((e) => e.name === 'My Tore')
									?.icon}
								href="/hunter-notes/locations/my-tore"
							/>
							<ClickableTileImage
								title="Rasta Bar"
								description="List of various options available in the Rasta Bar."
								imageSource={LocationIcons.find((e) => e.name === 'Rasta Bar')
									?.icon}
								href="/hunter-notes/locations/rasta-bar"
							/>
							<ClickableTileImage
								title="Tent"
								description="List of various options available in the Tent."
								imageSource={LocationIcons.find((e) => e.name === 'Tent')?.icon}
								href="/hunter-notes/locations/tent"
							/>
						</div>
					</section>
					<section>
						<SectionHeading level={3} title="Items" />
						<div class="container-tiles">
							<ClickableTileImage
								title="Item Box"
								description="Item Box capacity, presets and combinations."
								imageSource={TrapToolIconWhite}
								href="/hunter-notes/items/item-box"
							/>
							<ClickableTileImage
								title="Decorations"
								description="A list of decoration types."
								imageSource={JewelIconWhite}
								href="/hunter-notes/items/decorations"
							/>
							<ClickableTileImage
								title="Armor Spheres"
								description="List of armor spheres."
								imageSource={BallIconWhite}
								href="/hunter-notes/items/armor-spheres"
							/>
							<ClickableTileImage
								title="Special Items"
								description="List of items that are unique to Frontier or adjust the quest rewards."
								imageSource={TicketIconWhite}
								href="/hunter-notes/items/special-items"
							/>
							<ClickableTileImage
								title="Medal Trades"
								description="List of items obtained by exchanging medals."
								imageSource={SacIconWhite}
								href="/hunter-notes/items/medal-trades"
							/>
						</div>
					</section>
					<section>
						<SectionHeading level={3} title="Events" />
						<div class="container-tiles">
							<ClickableTileImage
								title="Diva Defense"
								description="The Diva Prayer Gems list, Song of War Chapter, Interception, etc."
								imageSource={LocationIcons.find(
									(e) => e.name === 'Interception',
								)?.icon}
								href="/hunter-notes/events/diva-defense"
							/>
							<ClickableTileImage
								title="Hunter Festival"
								description="Hunting Competition, Soul gathering and Winner's Week information."
								imageSource={LocationIcons.find((e) => e.name === 'Festi')
									?.icon}
								href="/hunter-notes/events/hunter-festival"
							/>
							<ClickableTileImage
								title="Mezeporta Festival"
								description="A list of minigames available during the festival's duration, with tips to get a highscore."
								imageSource={LocationIcons.find((e) => e.name === 'Mezfes')
									?.icon}
								href="/hunter-notes/events/mezeporta-festival"
							/>
							<ClickableTileImage
								title="Wycademy's Events"
								description="Information about time-limited events hosted by Wycademy's developers."
								imageSource={Logo}
								href="/hunter-notes/events/wycademy-events"
							/>
						</div>
					</section>
					<section>
						<SectionHeading level={3} title="Advanced" />
						<div class="container-tiles">
							<ClickableTileImage
								title="Item Sets"
								description="The best item sets and how to obtain each item."
								imageSource={MedicineIconWhite}
								href="/hunter-notes/advanced/item-sets"
							/>
							<ClickableTileImage
								title="Item Interactions"
								description="Specific item inteactions explained in greater detail."
								imageSource={BallIconWhite}
								href="/hunter-notes/advanced/item-interactions"
							/>
							<ClickableTileImage
								title="Mechanics"
								description="Various advanced mechanics of the game explained in great detail."
								imageSource={LocationIcons.find((e) => e.name === 'Blacksmith')
									?.icon}
								href="/hunter-notes/advanced/mechanics"
							/>
							<ClickableTileImage
								title="Skills"
								description="An overview of specific skill interactions, and which ones to use."
								imageSource={JewelIconWhite}
								href="/hunter-notes/advanced/skills"
							/>
						</div>
					</section>
				</section>
			</section>
		</div>
	</main>
	{#key $page.url.pathname}
		<Footer gitHubData={data.github} />
	{/key}
</div>

<style lang="scss">
	.banner {
		display: flex;
		justify-content: center;
		background-color: var(--ctp-mantle);
	}

	.app {
		display: flex;
		flex-direction: column;
		background-color: var(--ctp-mantle);
	}

	main {
		position: relative;
		flex: 1;
		display: flex;
		flex-direction: column;
		padding: var(--cds-spacing-08);
		width: 100%;
		max-width: 100vw;
		margin: 0 auto;
		box-sizing: border-box;
		min-height: 90vh;
		background-color: var(--ctp-base);
		border-left: var(--cds-spacing-01) solid var(--ctp-surface0);
		border-right: var(--cds-spacing-01) solid var(--ctp-surface0);
		border-bottom: var(--cds-spacing-01) solid var(--ctp-surface0);
	}

	.header {
		border-bottom: var(--cds-spacing-01) solid var(--ctp-surface0);
		position: static;
	}

	.sticky {
		position: -webkit-sticky; /* For Safari */
		position: sticky;
		top: 0;
		z-index: 1000; /* Ensure it stays above other content */
	}

	.container {
		width: 100%;
	}

	.top-level-section {
		width: 80%;
		margin: auto;
	}

	.container-tiles {
		display: grid;
		gap: 0.5rem;
		grid-template-columns: repeat(auto-fill, minmax(256px, 1fr));
	}
</style>
