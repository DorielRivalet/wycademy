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
	import ClickableTileBackgroundImage from '$lib/client/components/ClickableTileBackgroundImage.svelte';
	import GreatSwordRainbow from '$lib/client/images/weapon/gs_rainbow.gif';
	import ExtremeFireblight from '$lib/client/components/frontier/icon/ailment/ExtremeFireblight.svelte';
	import ExtremeParalysis from '$lib/client/components/frontier/icon/ailment/ExtremeParalysis.svelte';
	import HelmetIconWhite from '$lib/client/components/frontier/icon/armor/Helmet_Icon_White.svelte';
	import StygianZinogre from '$lib/client/components/frontier/icon/monster/StygianZinogre.svelte';
	import YamaKurai2 from '$lib/client/components/frontier/icon/monster/YamaKurai2.svelte';
	import BurningFreezingElzelion2 from '$lib/client/components/frontier/icon/monster/BurningFreezingElzelion2.svelte';
	import HeavyBowgunIconWhite2 from '$lib/client/components/frontier/icon/weapon/Heavy_Bowgun_Icon_White2.svelte';
	import WhetstoneIconWhite from '$lib/client/components/frontier/icon/item/Whetstone_Icon_White.svelte';
	import Duremudira from '$lib/client/components/frontier/icon/monster/Duremudira.svelte';
	import BookIconWhite from '$lib/client/components/frontier/icon/item/Book_Icon_White.svelte';
	import Bogabadorumu6 from '$lib/client/components/frontier/icon/monster/Bogabadorumu6.svelte';
	import SupremacyTeostra from '$lib/client/components/frontier/icon/monster/SupremacyTeostra.svelte';
	import ConquestFatalis7 from '$lib/client/components/frontier/icon/monster/ConquestFatalis7.svelte';
	import UNKNOWN from '$lib/client/images/monster/shiten_unknown.webp';
	import BerserkRaviente from '$lib/client/components/frontier/icon/monster/BerserkRaviente.svelte';

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

	<div class="header">
		<Header />
	</div>
	<div class="banner">
		<InlineNotification
			lowContrast
			on:close={() => close()}
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
					<SectionHeading level={2} title="Browse by category" />
					<section>
						<SectionHeading level={3} title="Getting Started" />
						<div class="container-tiles">
							<ClickableTileBackgroundImage
								title="Your First Hunts"
								description="A walkthrough of the first tasks you should do when starting the game."
								imageSource={BookIconWhite}
								href="/"
							/>
							<ClickableTileBackgroundImage
								title="Elements"
								description="The elements of weapons and monsters. Includes combo elements and elemental resistances."
								imageSource={ExtremeFireblight}
								href="/"
							/>
							<ClickableTileBackgroundImage
								title="Ailments"
								description="The status effects of both weapons and monsters. Includes monsters' status immunities."
								imageSource={ExtremeParalysis}
								href="/"
							/>
						</div>
					</section>
					<section>
						<SectionHeading level={3} title="Monsters" />
						<div class="container-tiles">
							<ClickableTileBackgroundImage
								title="Exotics"
								description="The list of exotic monsters and the automatic skills they provide."
								imageSource={StygianZinogre}
								href="/"
							/>
							<ClickableTileBackgroundImage
								title="Origin"
								description="The list of origin monsters and the automatic skills they provide."
								imageSource={YamaKurai2}
								href="/"
							/>
							<ClickableTileBackgroundImage
								title="Musou"
								description="The list of musou monsters and how to beat them."
								imageSource={BurningFreezingElzelion2}
								href="/"
							/>
							<ClickableTileBackgroundImage
								title="Zenith"
								description="The list of zenith monsters and how to beat them."
								imageSource={Bogabadorumu6}
								href="/"
							/>
							<ClickableTileBackgroundImage
								title="Duremudira"
								description="An explanation of Tower gear and skills, and how to beat 2nd District Duremudira."
								imageSource={Duremudira}
								href="/"
							/>
							<ClickableTileBackgroundImage
								title="Raviente"
								description="The list of Evolution weapons and their upgrade tree, Raviente armor,  and a tutorial for slaying and supporting during a Raviente raid."
								imageSource={BerserkRaviente}
								href="/"
							/>
							<ClickableTileBackgroundImage
								title="Supremacy"
								description="The list of supremacy monsters and how to beat them."
								imageSource={SupremacyTeostra}
								href="/"
							/>
							<ClickableTileBackgroundImage
								title="Conquest"
								description="The list of conquest monsters and how to beat them; their materials and stats."
								imageSource={ConquestFatalis7}
								href="/"
							/>
							<ClickableTileBackgroundImage
								title="Shiten"
								description="The list of shiten monsters and how to beat them; their sigils and stats."
								imageSource={UNKNOWN}
								href="/"
							/>
						</div>
					</section>
					<section>
						<SectionHeading level={3} title="Weapons" />
						<div class="container-tiles">
							<ClickableTileBackgroundImage
								title="Overview"
								description="An overview of each weapon type, their multipliers, the recommended weapons, skills and sigils to use with them."
								imageSource={GreatSwordRainbow}
								href="/"
							/>
							<ClickableTileBackgroundImage
								title="Critical Distance"
								description="An explanation of ranged weapons' Critical Distance mechanic."
								imageSource={HeavyBowgunIconWhite2}
								href="/"
							/>
							<ClickableTileBackgroundImage
								title="Active Feature"
								description="A list of each weapon's active feature."
								imageSource={GreatSwordRainbow}
								href="/"
							/>
							<ClickableTileBackgroundImage
								title="Sharpness"
								description="A list of each sharpness multipliers."
								imageSource={WhetstoneIconWhite}
								href="/"
							/>
						</div>
					</section>
					<section>
						<SectionHeading level={3} title="Armor" />
						<div class="container-tiles">
							<ClickableTileBackgroundImage
								title="Armor Colors"
								description="The list of armor pigment colors and how to unlock them."
								imageSource={HelmetIconWhite}
								href="/"
							/>
							<ClickableTileBackgroundImage
								title="Overview"
								description="Description"
								imageSource={GreatSwordRainbow}
								href="/"
							/>
							<ClickableTileBackgroundImage
								title="Overview"
								description="Description"
								imageSource={GreatSwordRainbow}
								href="/"
							/>
							<ClickableTileBackgroundImage
								title="Overview"
								description="Description"
								imageSource={GreatSwordRainbow}
								href="/"
							/>
						</div>
					</section>
					<section>
						<SectionHeading level={3} title="Quests" />
						<div class="container-tiles">
							<ClickableTileBackgroundImage
								title="Overview"
								description="Description"
								imageSource={GreatSwordRainbow}
								href="/"
							/>
							<ClickableTileBackgroundImage
								title="Overview"
								description="Description"
								imageSource={GreatSwordRainbow}
								href="/"
							/>
							<ClickableTileBackgroundImage
								title="Overview"
								description="Description"
								imageSource={GreatSwordRainbow}
								href="/"
							/>
							<ClickableTileBackgroundImage
								title="Overview"
								description="Description"
								imageSource={GreatSwordRainbow}
								href="/"
							/>
						</div>
					</section>
					<section>
						<SectionHeading level={3} title="Locations" />
						<div class="container-tiles">
							<ClickableTileBackgroundImage
								title="Guild Hall"
								description="The various facilities of the Guild Hall explained: Guild Food, Guild Poogies, Guild Store, etc."
								imageSource={LocationIcons.find((e) => e.name === 'Guild Hall')
									?.icon}
								href="/"
							/>
							<ClickableTileBackgroundImage
								title="Bento"
								description="The various buffs provided by bentos summarized."
								imageSource={LocationIcons.find((e) => e.name === 'Bento')
									?.icon}
								href="/"
							/>
							<ClickableTileBackgroundImage
								title="Hunter's Road"
								description="The road skills list and how to upgrade them."
								imageSource={LocationIcons.find((e) => e.name === 'Road')?.icon}
								href="/"
							/>
							<ClickableTileBackgroundImage
								title="Overview"
								description="Description"
								imageSource={GreatSwordRainbow}
								href="/"
							/>
						</div>
					</section>
					<section>
						<SectionHeading level={3} title="Items" />
						<div class="container-tiles">
							<ClickableTileBackgroundImage
								title="Overview"
								description="Description"
								imageSource={GreatSwordRainbow}
								href="/"
							/>
							<ClickableTileBackgroundImage
								title="Overview"
								description="Description"
								imageSource={GreatSwordRainbow}
								href="/"
							/>
							<ClickableTileBackgroundImage
								title="Overview"
								description="Description"
								imageSource={GreatSwordRainbow}
								href="/"
							/>
							<ClickableTileBackgroundImage
								title="Overview"
								description="Description"
								imageSource={GreatSwordRainbow}
								href="/"
							/>
						</div>
					</section>
					<section>
						<SectionHeading level={3} title="Events" />
						<div class="container-tiles">
							<ClickableTileBackgroundImage
								title="Diva Defense"
								description="The Diva Prayer Gems list, Song of War Chapter, Interception, etc."
								imageSource={LocationIcons.find(
									(e) => e.name === 'Interception',
								)?.icon}
								href="/"
							/>
							<ClickableTileBackgroundImage
								title="Overview"
								description="Description"
								imageSource={GreatSwordRainbow}
								href="/"
							/>
							<ClickableTileBackgroundImage
								title="Overview"
								description="Description"
								imageSource={GreatSwordRainbow}
								href="/"
							/>
							<ClickableTileBackgroundImage
								title="Overview"
								description="Description"
								imageSource={GreatSwordRainbow}
								href="/"
							/>
						</div>
					</section>

					<section>
						<SectionHeading level={3} title="Caravan" />
						<div class="container-tiles">
							<ClickableTileBackgroundImage
								title="Overview"
								description="Description"
								imageSource={GreatSwordRainbow}
								href="/"
							/>
							<ClickableTileBackgroundImage
								title="Overview"
								description="Description"
								imageSource={GreatSwordRainbow}
								href="/"
							/>
							<ClickableTileBackgroundImage
								title="Overview"
								description="Description"
								imageSource={GreatSwordRainbow}
								href="/"
							/>
							<ClickableTileBackgroundImage
								title="Overview"
								description="Description"
								imageSource={GreatSwordRainbow}
								href="/"
							/>
						</div>
					</section>
					<section>
						<SectionHeading level={3} title="Advanced" />
						<div class="container-tiles">
							<ClickableTileBackgroundImage
								title="Overview"
								description="Description"
								imageSource={GreatSwordRainbow}
								href="/"
							/>
							<ClickableTileBackgroundImage
								title="Overview"
								description="Description"
								imageSource={GreatSwordRainbow}
								href="/"
							/>
							<ClickableTileBackgroundImage
								title="Overview"
								description="Description"
								imageSource={GreatSwordRainbow}
								href="/"
							/>
							<ClickableTileBackgroundImage
								title="Overview"
								description="Description"
								imageSource={GreatSwordRainbow}
								href="/"
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
		grid-template-columns: repeat(auto-fit, minmax(256px, 1fr));
	}
</style>
