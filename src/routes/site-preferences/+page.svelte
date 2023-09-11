<script lang="ts">	
	import { getThemeIcon, setTheme } from '$lib/client/stores/theme';
	import logo from '$lib/client/images/logo.png';
	import Dropdown from "carbon-components-svelte/src/Dropdown/Dropdown.svelte";
	import Button from "carbon-components-svelte/src/Button/Button.svelte";
	import Toggle from "carbon-components-svelte/src/Toggle/Toggle.svelte";
	import Slider from "carbon-components-svelte/src/Slider/Slider.svelte";
	import { themeOptions } from '$lib/client/themes/options';
	import ColorDot from '$lib/client/components/ColorDot.svelte';
	import { frontierColorNames } from '$lib/client/themes/frontier-colors';
	import { display } from 'mathlifier';
	import { divide, format } from 'mathjs';
	import SectionHeading from '$lib/client/components/SectionHeading.svelte';
	import Calculator from 'carbon-icons-svelte/lib/Calculator.svelte';
	import Language from 'carbon-icons-svelte/lib/Language.svelte';
  import ColorPalette from "carbon-icons-svelte/lib/ColorPalette.svelte";
  import Notification from "carbon-icons-svelte/lib/Notification.svelte";
  import NotificationOff from "carbon-icons-svelte/lib/NotificationOff.svelte";
  import VolumeUp from "carbon-icons-svelte/lib/VolumeUp.svelte";
  import VolumeMute from "carbon-icons-svelte/lib/VolumeMute.svelte";
  import { InlineNotification, LocalStorage } from "carbon-components-svelte";
	import { onMount } from 'svelte';
	import mermaid from 'mermaid';
	import { soundStore, pushNotificationsStore, onNotificationToggle, onSoundToggle } from '$lib/client/stores/toggles';
	import { onVolumeChange, volumeStore } from '$lib/client/stores/volume';

	onMount(() => {
		mermaid.initialize({ startOnLoad: true, flowchart: { useMaxWidth: false, }, fontFamily: 'IBM Plex Sans'});
		mermaid.contentLoaded();
	});

	const monsterHPFormula = display('EHP = \\frac{THP}{DEF}');
	let monsterHP = 30_000;
	let defrate = 0.03;

	function calculateEHP(): string {
		let ans = divide(monsterHP, defrate);
		return format(ans, {precision: 0, notation: 'fixed'});
	}

	function increaseMonsterHP() {
		monsterHP++;
	}

	function increaseMonsterDefrate() {
		// https://stackoverflow.com/questions/3612744/remove-insignificant-trailing-zeros-from-a-number
		defrate = parseFloat((defrate + 0.01).toFixed(14));
	}

	$: EHP = `{${calculateEHP()}} = \\frac{${monsterHP}}{${defrate}}`;
</script>

<svelte:head>
	<title>Frontier Compendium - Site Preferences</title>
	<meta content="Frontier Compendium - Site Preferences" property="og:title" />
	<meta content="A compendium of resources for Monster Hunter Frontier Z by Doriel Rivalet." property="og:description" />
	<meta name="description" content="A compendium of resources for Monster Hunter Frontier Z by Doriel Rivalet." />
	<meta content="https://frontier-compendium.vercel.app/site-preferences" property="og:url" />
	<meta content={logo} property="og:image" />
	<meta content="#89b4fa" data-react-helmet="true" name="theme-color" />
</svelte:head>

<div>
	<h1>Site Preferences</h1>
	<InlineNotification
  lowContrast
	hideCloseButton
  kind="info"
  title="Theme Colors:"
  subtitle="If you are using DarkReader or similar, the website may look better with it disabled."
	/>
	<div class="setting-container">
		<ColorPalette size={32}/>
		<Dropdown
			titleText="Theme"
			selectedId="0"
			type="inline"
			items={[
				{ id: "0", text: themeOptions[0].labelText,},
				{ id: "1", text: themeOptions[1].labelText,},
				{ id: "2", text: themeOptions[2].labelText,},
				{ id: "3", text: themeOptions[3].labelText,},
			]}
			on:select={(event) => setTheme(event.detail.selectedId)}
				let:item
		>
		<div>
			<img alt="Theme Icon" src={getThemeIcon(item.id)} width="24" height="auto"/>
			<strong>{item.text}</strong>
		</div>
		</Dropdown>
	</div>

	<div>
		{#each frontierColorNames as colorName, i}
		<section>
			<SectionHeading title={colorName.name} level={2}/>
			<div class="container-color-grid">
				{#each frontierColorNames[i].values as colorValue}
					<ColorDot color={colorValue.var} name={colorValue.name}/>
				{/each}
			</div>
		</section>
		{/each}
	</div>

	<section>
		<SectionHeading title={'Monster EHP Formula'} level={3}/>
		{@html monsterHPFormula}
	</section>
	<section>
		<SectionHeading title={'Monster EHP Values'} level={3}/>
		{@html display(EHP)}
	</section>
	<div class="setting-container">
		<Calculator size={32}/>
		<Button on:click={increaseMonsterHP}>Increase monster True HP</Button>
		<Button on:click={increaseMonsterDefrate}>Increase monster Defense Rate</Button>
	</div>

	<div class="setting-container">
		<Language size={32}/>
		<Dropdown disabled titleText="Language" selectedId="0" items={[
			{ id: "0", text: "English",},
			]}>
		</Dropdown>
	</div>

	<div class="setting-container">
		<div>
			{#if $pushNotificationsStore}
				<Notification size={32}/>
			{:else}
				<NotificationOff size={32}/>
			{/if}
		</div>
		<Toggle labelText="Push notifications" bind:toggled={$pushNotificationsStore} on:toggle={onNotificationToggle}/>
	</div>

	<div class="setting-container">
		<div>
			{#if $soundStore || $volumeStore === 0}
				<VolumeUp size={32}/>
			{:else}
				<VolumeMute size={32}/>
			{/if}
		</div>
		<Toggle labelText="Sound" on:toggle={onSoundToggle} bind:toggled={$soundStore}/>
		<Slider labelText="Volume" required on:change={onVolumeChange} value={$volumeStore}/>
	</div>
	<pre><code class="mermaid">
		graph TD;
				saf1[Intro with Switch Axe F]-->|Use item| saf2[Shiriagari Fruit];
				saf2-->|Use item| saf3[All Element Drug];
				saf3-->|Run| saf4[Before Area Transition];
				saf4-->saf5[Wait for bomb];
				ls1[Intro with Long Sword]-->|Use item| ls2[Shiriagari Fruit];
				ls2-->|Use item| ls3[All Element Drug];
				ls3-->|Run| ls4[Before Area Transition];
				ls4-->ls5[Wait for bomb];
				ms1[Intro with Magnet Spike]-->|Use item| ms2[Shiriagari Fruit];
				ms2-->|Use item| ms3[All Element Drug];
				ms3-->|Run| ms4[Before Area Transition];
				ms4-->ms5[Wait for bomb];
				hh1[Intro with Hunting Horn]-->|Use item| hh2[Encourage Fruit];
				hh2-->|Use item| hh3[All Element Drug];
				hh3-->|Run| hh4[Before Area Transition];
				hh4-->hh5[Wait for others];
				hh5-->|Use item| hh6[Small Barrel Bomb];
				hh6-->|Use item| hh7[Serious Drink];
				hh7-->|Equip| hh8[Sword Crystals];
				hh8-->|Hit by bomb| hh9[Change area];
				hh9--> hh10[Song buffs];
				hh10--> hh11[Go to wall];

				saf5--> hh6;
				ls5--> hh6;
				ms5--> hh6;

				hh6-->|Use item| saf6[Serious Drink]
				hh6-->|Use item| ls6[Serious Drink]
				hh6-->|Use item| ms6[Serious Drink]

				saf6-->|Equip| saf7[Sword Crystals];
				saf7-->|Hit by bomb| saf8[Change area];
				saf8-->|Use Item| saf9[Starving Wolf Potion];
				saf9--> saf10[Go to wall];

				ls6-->|Equip| ls7[Sword Crystals];
				ls7-->|Hit by bomb| ls8[Change area];
				ls8-->|Use item| ls9[Spirit Drink];
				ls9-->|Use Item| ls10[Starving Wolf Potion];
				ls10--> ls11[Go to wall];

				ms6-->|Equip| ms7[Sword Crystals];
				ms7-->|Hit by bomb| ms8[Change area];
				ms8--> ms9[Magnet Gun];
				ms9--> ms10[Lure monster to wall];
	</code></pre>
</div>

<LocalStorage bind:value={$soundStore} key="__sound-enabled" />
<LocalStorage bind:value={$pushNotificationsStore} key="__push-notifications-enabled" />
<LocalStorage bind:value={$volumeStore} key="__volume" />

<style>
	.setting-container{
		margin-top: 1rem;
		margin-bottom: 1rem;
		display: flex;
		gap: 1rem;
	}

	.container-color-grid {
		display: grid;
		grid-template-columns: repeat(5, 1fr);
		margin: 1rem;
		gap: 1rem;
	}

	h1 {
		margin-bottom: 2rem;
	}
</style>