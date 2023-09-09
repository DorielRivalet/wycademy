<script lang="ts">	
	import { getThemeIcon, setTheme } from '$lib/client/stores/theme';
	import logo from '$lib/client/images/logo.png';
	import Dropdown from "carbon-components-svelte/src/Dropdown/Dropdown.svelte";
	import Button from "carbon-components-svelte/src/Button/Button.svelte";
	import Toggle from "carbon-components-svelte/src/Toggle/Toggle.svelte";
	import Slider from "carbon-components-svelte/src/Slider/Slider.svelte";
	import LinkIcon from "carbon-icons-svelte/lib/Link.svelte";
	import { themeOptions } from '$lib/client/themes/options';
	import ColorDot from '$lib/client/components/ColorDot.svelte';
	import { frontierColorNames } from '$lib/client/themes/frontier-colors';
	import { display } from 'mathlifier';
	import { divide, format } from 'mathjs';
	import slugify from 'slugify';
	import SectionHeading from '$lib/client/components/SectionHeading.svelte';

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
	<title>Frontier Compendium - Site Settings</title>
	<meta content="Frontier Compendium - Site Settings" property="og:title" />
	<meta content="A compendium of resources for Monster Hunter Frontier Z by Doriel Rivalet." property="og:description" />
	<meta name="description" content="A compendium of resources for Monster Hunter Frontier Z by Doriel Rivalet." />
	<meta content="https://frontier-compendium.vercel.app/site-settings" property="og:url" />
	<meta content={logo} property="og:image" />
	<meta content="#89b4fa" data-react-helmet="true" name="theme-color" />
</svelte:head>

<main>
	<h1>Site Settings</h1>
	<p>If you are using DarkReader or similar, the website may look better with it disabled.</p>
	<div class="container-dropdown">
		<Dropdown
			titleText="Theme"
			selectedId="0"
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
			<h2 id={slugify(colorName.name, {lower: true})} class='header-title'>
				<a href={"#"+slugify(colorName.name, {lower: true})} class="permalink">
					<LinkIcon />
				</a>
				<span class="title-text">
					{colorName.name}
				</span>
			</h2>
			<hr>
			<div class="container-color-grid">
				{#each frontierColorNames[i].values as colorValue}
					<ColorDot color={colorValue.var} name={colorValue.name}/>
				{/each}
			</div>
		</section>
		{/each}
	</div>

	<section>
		<h3>Monster EHP Formula</h3>
		{@html monsterHPFormula}
	</section>
	<section>
		<h3>Monster EHP Values</h3>
		{@html display(EHP)}
	</section>
	<Button on:click={increaseMonsterHP}>Increase monster True HP</Button>
	<Button on:click={increaseMonsterDefrate}>Increase monster Defense Rate</Button>

	<div class="container-dropdown">
		<Dropdown disabled titleText="Language" selectedId="0" items={[
			{ id: "0", text: "English",},
			]}>
		</Dropdown>
	</div>

	<div class="container-toggle">
		<Toggle labelText="Push notifications" />
	</div>

	<div class="container-sound">
		<Toggle labelText="Sound" />
		<Slider labelText="Volume" value={0}/>
	</div>
</main> 

<style>
	.header-title {
			position: relative;
	}

  .permalink {
    opacity: 0;
    transition: hidden .11s ease-in-out, transform .11s ease-in-out;
    position: absolute;
    left: -1rem;
  }

	.title-text {
    display: inline-block;
    transition: transform .11s ease-in-out;
  }

  h2:hover .permalink, h3:hover .permalink, h4:hover .permalink, h5:hover .permalink, h6:hover .permalink {
    opacity: 1;
  }

	h2:hover .title-text, h3:hover .title-text, h4:hover .title-text, h5:hover .title-text, h6:hover .title-text {
		transform: translateX(.5rem);
  }

	.container-toggle{
		margin-top: 1rem;
		margin-bottom: 1rem;
	}

	.container-sound{
		display: grid;
		grid-template-columns: 1fr 5fr;
		margin-top: 1rem;
		margin-bottom: 1rem;
		gap: .1rem;
	}

	.container-dropdown{
		margin-top: 1rem;
		margin-bottom: 1rem;
	}

	.container-color-grid {
		display: grid;
		grid-template-columns: repeat(5, 1fr);
		margin: 1rem;
		gap: 1rem;
	}

	h2{
		margin-top: 1rem;
	}

	p{
		margin-top: 2rem;
		margin-bottom: 1rem;
	}

	a {
		color: inherit;  /* Make the link color inherit from the parent element */
	}

	hr {
		opacity: .5;
	}
</style>