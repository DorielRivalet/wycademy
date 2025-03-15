<!--
  ~ © 2024 Doriel Rivalet
  ~ Use of this source code is governed by a MIT license that can be
  ~ found in the LICENSE file.
-->

<script lang="ts">
	import { run } from 'svelte/legacy';

	import { getThemeNameFromId, setTheme } from '$lib/client/stores/theme';
	import pageThumbnail from '$lib/client/images/wycademy.png';
	import Button from 'carbon-components-svelte/src/Button/Button.svelte';
	import Toggle from 'carbon-components-svelte/src/Toggle/Toggle.svelte';
	import ColorDot from '$lib/client/components/ColorDot.svelte';
	import { frontierColorNames } from '$lib/client/themes/frontier-colors';
	import { display } from 'mathlifier';
	import SectionHeading from '$lib/client/components/SectionHeading.svelte';
	import Calculator from 'carbon-icons-svelte/lib/Calculator.svelte';
	import Notification from 'carbon-icons-svelte/lib/Notification.svelte';
	import InlineNotification from 'carbon-components-svelte/src/Notification/InlineNotification.svelte';
	import LocalStorage from 'carbon-components-svelte/src/LocalStorage/LocalStorage.svelte';
	import { onMount } from 'svelte';
	import mermaid from 'mermaid';
	import { getContext } from 'svelte';
	import { onStoreToggle } from '$lib/client/stores/toggles';
	import { frontierMath } from '$lib/client/modules/frontier/functions';
	import SectionHeadingTopLevel from '$lib/client/components/SectionHeadingTopLevel.svelte';
	import { browser } from '$app/environment';
	import { catppuccinColorNames, catppuccinThemeMap } from '$lib/catppuccin';
	import {
		authorName,
		authorUrl,
		datePublished,
		description,
		projectName,
		website,
	} from '$lib/constants';
	import Loading from 'carbon-components-svelte/src/Loading/Loading.svelte';
	import { page } from '$app/stores';
	import Head from '$lib/client/components/Head.svelte';
	import { onNotificationPress } from '$lib/client/stores/notifications';
	import TooltipDefinition from 'carbon-components-svelte/src/TooltipDefinition/TooltipDefinition.svelte';
	import Link from 'carbon-components-svelte/src/Link/Link.svelte';
	import type { Writable } from 'svelte/store';
	import type { CarbonTheme } from 'carbon-components-svelte/src/Theme/Theme.svelte';
	import UnorderedList from 'carbon-components-svelte/src/UnorderedList/UnorderedList.svelte';
	import ListItem from 'carbon-components-svelte/src/ListItem/ListItem.svelte';

	const carbonThemeStore = getContext(
		Symbol.for('carbonTheme'),
	) as Writable<CarbonTheme>;

	const pushNotificationsStore = getContext(
		Symbol.for('pushNotifications'),
	) as Writable<boolean>;

	const notificationsStore = getContext(
		Symbol.for('notifications'),
	) as Writable<boolean>;

	async function renderDiagram(siteTheme: string, mermaidTheme: string) {
		if (!browser) return;
		mermaidTheme = siteTheme === 'g10' ? 'default' : 'dark';
		const { svg } = await mermaid.render('mermaid', getDiagram(mermaidTheme));
		container.innerHTML = svg;
	}

	function increaseMonsterDefrate() {
		// https://stackoverflow.com/questions/3612744/remove-insignificant-trailing-zeros-from-a-number
		defrate = parseFloat((defrate + 0.01).toFixed(14));
	}

	function increaseMonsterHP() {
		monsterHP++;
	}

	function getDiagram(mermaidTheme: string) {
		return `\
	%%{init: {'theme':'${mermaidTheme}'}}%%

	graph TD
						saf1[Intro with Switch Axe F]-->|Use item| saf2[Shiriagari Fruit]
						saf2-->|Use item| saf3[All Element Drug]
						saf3-->|Run| saf4[Before Area Transition]
						saf4-->saf5[Wait for bomb]
						ls1[Intro with Long Sword]-->|Use item| ls2[Shiriagari Fruit]
						ls2-->|Use item| ls3[All Element Drug]
						ls3-->|Run| ls4[Before Area Transition]
						ls4-->ls5[Wait for bomb]
						ms1[Intro with Magnet Spike]-->|Use item| ms2[Shiriagari Fruit]
						ms2-->|Use item| ms3[All Element Drug]
						ms3-->|Run| ms4[Before Area Transition]
						ms4-->ms5[Wait for bomb]
						hh1[Intro with Hunting Horn]-->|Use item| hh2[Encourage Fruit]
						hh2-->|Use item| hh3[All Element Drug]
						hh3-->|Run| hh4[Before Area Transition]
						hh4-->hh5[Wait for others]
						hh5-->|Use item| hh6[Small Barrel Bomb]
						hh6-->|Use item| hh7[Serious Drink]
						hh7-->|Equip| hh8[Sword Crystals]
						hh8-->|Hit by bomb| hh9[Change area]
						hh9--> hh10[Song buffs]
						hh10--> hh11[Go to wall]

						saf5--> hh6
						ls5--> hh6
						ms5--> hh6

						hh6-->|Use item| saf6[Serious Drink]
						hh6-->|Use item| ls6[Serious Drink]
						hh6-->|Use item| ms6[Serious Drink]

						saf6-->|Equip| saf7[Sword Crystals]
						saf7-->|Hit by bomb| saf8[Change area]
						saf8-->|Use Item| saf9[Starving Wolf Potion]
						saf9--> saf10[Go to wall]

						ls6-->|Equip| ls7[Sword Crystals]
						ls7-->|Hit by bomb| ls8[Change area]
						ls8-->|Use item| ls9[Spirit Drink]
						ls9-->|Use Item| ls10[Starving Wolf Potion]
						ls10--> ls11[Go to wall]

						ms6-->|Equip| ms7[Sword Crystals]
						ms7-->|Hit by bomb| ms8[Change area]
						ms8--> ms9[Magnet Gun]
						ms9--> ms10[Lure monster to wall]`;
	}

	// TODO put constants in other files
	const monsterHPFormula = display('EHP = \\frac{THP}{DEF}');

	let container: { innerHTML: string } = $state();

	let mermaidTheme = $state($carbonThemeStore === 'g10' ? 'default' : 'dark');

	// The default diagram
	let diagram = $state(getDiagram(mermaidTheme));

	let monsterHP = $state(30_000);
	let defrate = $state(0.03);

	run(() => {
		diagram && renderDiagram($carbonThemeStore, mermaidTheme);
	});
	let EHP = $derived(
		`{${frontierMath.calculateEHP(
			monsterHP,
			defrate,
		)}} = \\frac{${monsterHP}}{${defrate}}`,
	);
	const url = $page.url.toString();

	onMount(() => {
		mermaid.initialize({
			startOnLoad: false,
			flowchart: { useMaxWidth: false },
			fontFamily: 'IBM Plex Sans',
		});
		mermaid.contentLoaded();
	});
</script>

<Head
	title={"Site Preferences — Frontier's Wycademy"}
	{description}
	image={pageThumbnail}
	{url}
	{website}
	{authorName}
	{datePublished}
	{authorUrl}
	contentType="WebPage"
	name={projectName}
	siteName={projectName}
/>

<LocalStorage
	bind:value={$pushNotificationsStore}
	key="__push-notifications-enabled"
/>
<LocalStorage bind:value={$notificationsStore} key="__notifications-enabled" />

<div>
	<SectionHeadingTopLevel title="Site Preferences" />

	<UnorderedList class="spaced-list">
		<ListItem
			><p>
				<strong>Header:</strong> The sticky header only works in certain layouts.
			</p></ListItem
		><ListItem
			><p>
				<strong>Theme Colors:</strong> If you are using DarkReader or similar, the
				website may look better with it disabled.
			</p></ListItem
		><ListItem
			><p>
				<strong>Layout:</strong> If the layout of the website appears broken and
				you are using Firefox on mobile, try another browser.
			</p></ListItem
		>
	</UnorderedList>

	<section>
		<SectionHeading level={2} title="Notifications" />
		<InlineNotification
			lowContrast
			hideCloseButton
			kind="info"
			title="Push Notifications:"
			subtitle="Make sure notifications are also allowed in your operating system for the browser you are using. If you accept the permission, you will receive a notification to confirm it is working."
		/>
		<!--TODO: Link to panel page-->
		<div class="spaced-paragraph">
			If you wish to change your account's notifications, visit your account's
			<Link href="/settings/notifications" inline>Notifications Settings.</Link>
		</div>
		<div class="setting-container">
			<Toggle
				labelText="Notifications"
				on:toggle={(e) => onStoreToggle(notificationsStore, e)}
				bind:toggled={$notificationsStore}
			/>
		</div>
		<div class="setting-container">
			<Button
				disabled={!$notificationsStore}
				kind="tertiary"
				icon={Notification}
				on:click={(e) =>
					onNotificationPress(pushNotificationsStore, $notificationsStore)}
				>Push notifications</Button
			>
		</div>

		<div class="setting-container">
			<Toggle toggled={true} disabled={!$notificationsStore}>
				{#snippet labelText()}
					<span
						><TooltipDefinition>
							Someone claimed a global overlay achievement
							{#snippet tooltip()}
								<span>
									Notifies when an overlay achievement (found in
									/overlay/achievements) was obtained for the first time ever.
								</span>
							{/snippet}
						</TooltipDefinition></span
					>
				{/snippet}
			</Toggle>
		</div>
		<div class="setting-container">
			<Toggle
				disabled={!$notificationsStore}
				toggled={true}
				labelText="Someone obtained a world record"
			/>
		</div>
	</section>

	<section>
		<SectionHeading level={2} title={'Theme Preview'} />
		<p>
			Below are some colors and extra elements to demonstrate your current theme
			selection.
		</p>
		<div>
			{#each frontierColorNames as colorName, i}
				<section>
					<SectionHeading title={colorName.name} level={3} />
					<div class="container-color-grid">
						{#each frontierColorNames[i].values as colorValue}
							<ColorDot color={colorValue.var} name={colorValue.name} />
						{/each}
					</div>
				</section>
			{/each}
			<section>
				<SectionHeading title={'Catppuccin'} level={3} />
				<div class="container-color-grid">
					{#each catppuccinColorNames as colorValue}
						<ColorDot color={colorValue.var} name={colorValue.name} />
					{/each}
				</div>
			</section>
		</div>

		<section>
			<SectionHeading title={'Monster EHP'} level={3} />
			{@html monsterHPFormula}
			{@html display(EHP)}

			<section class="calculator-buttons">
				<Button kind="tertiary" icon={Calculator} on:click={increaseMonsterHP}
					>Increase monster True HP</Button
				>
				<Button
					kind="tertiary"
					icon={Calculator}
					on:click={increaseMonsterDefrate}
					>Increase monster Defense Rate</Button
				>
			</section>
		</section>

		<section>
			<SectionHeading title={'Example Run'} level={3} />
			<div class="mermaid-container">
				<!-- TODO: not responsive-->
				{#if !browser}
					<Loading withOverlay={false} />
				{:else}
					<pre><code bind:this={container}></code></pre>
				{/if}
			</div>
		</section>
	</section>
</div>

<style lang="scss">
	.setting-container {
		margin-top: 1rem;
		margin-bottom: 1rem;
		display: flex;
		gap: 1rem;
	}

	.calculator-buttons {
		margin-top: 1rem;
		margin-bottom: 1rem;
		display: flex;
		gap: 1rem;
		justify-content: center;
	}

	.inline-notification-container {
		margin-top: 2rem;
	}

	/* https://stackoverflow.com/questions/8639383/how-do-i-center-a-svg-in-a-div */
	.setting-icon {
		display: block;
		margin: auto;
	}

	.container-color-grid {
		display: grid;
		grid-template-columns: repeat(5, 1fr);
		margin: 1rem;
		gap: 1rem;
	}

	.mermaid-container {
		max-width: 80vw;
		overflow-x: auto;
		margin: 0 auto;
		margin-bottom: 2rem;
		margin-top: 2rem;
	}
</style>
