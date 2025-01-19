<script lang="ts">
	import type {
		FrontierArmorSkillName,
		FrontierCaravanSkillName,
		FrontierWeaponName,
		FrontierWeaponStyle,
		FrontierZenithSkill,
	} from 'ezlion';
	import Dropdown from 'carbon-components-svelte/src/Dropdown/Dropdown.svelte';
	import Download from 'carbon-icons-svelte/lib/Download.svelte';
	import Button from 'carbon-components-svelte/src/Button/Button.svelte';
	import { getWeaponIcon } from '../modules/frontier/weapons';
	import { RarityColors } from '../modules/frontier/objects';
	import JewelIconWhite from './frontier/icon/item/Jewel_Icon_White.svelte';
	import HelmetIconWhite from './frontier/icon/armor/Helmet_Icon_White.svelte';
	import ChestIconWhite from './frontier/icon/armor/Chest_Icon_White.svelte';
	import ArmIconWhite from './frontier/icon/armor/Arm_Icon_White.svelte';
	import WaistIconWhite from './frontier/icon/armor/Waist_Icon_White.svelte';
	import LegIconWhite from './frontier/icon/armor/Leg_Icon_White.svelte';
	import MyTore from '$lib/client/images/icon/my_tore.webp';
	import { formatDateTime } from '../modules/time';
	import { browser } from '$app/environment';
	import { domToPng } from 'modern-screenshot';
	import slugify from 'slugify';
	import { guildCardBackgrounds } from '../modules/frontier/guild-card';

	const totalGuildCards = guildCardBackgrounds.filter((e) => !e.unused).length;

	let selectedPage = $state('page1');

	interface Props {
		name?: string;
		date?: string;
		armorSkills?: FrontierArmorSkillName[];
		automaticSkills?: FrontierArmorSkillName[];
		zenithSkills?: FrontierZenithSkill[];
		caravanSkills?: FrontierCaravanSkillName[];
		guildFood?: FrontierArmorSkillName;
		divaSkill?: string;
		styleRankSkills?: any;
		weaponStyle?: FrontierWeaponStyle;
		weaponType?: FrontierWeaponName;
		weaponName?: string;
		weaponSlots?: any;
		head?: string;
		chest?: string;
		arms?: string;
		waist?: string;
		legs?: string;
		cuffs?: any;
		headSlots?: any;
		chestSlots?: any;
		armsSlots?: any;
		waistSlots?: any;
		legsSlots?: any;
		guildCardsUnlocked?: any;
		guildCardsUnlockedRank?: any;
		guildCardsUnlockedRankPercent?: any;
		selectedGuildCardBackground?: string;
		username?: string;
		canChangeGuildCardBackground?: boolean;
	}

	let {
		name = 'Hunter',
		date = '2024-05-02T00:00:01Z',
		armorSkills = [
			'Strong Attack+6',
			'Lance Tech 【Heavenly Spear】',
			'Sword God+2',
			'Vampirism+2',
			'Reflect+3',
			'Fortification+2',
			'Abnormality',
			'Obscurity',
			'Flash Conversion',
			'Point Breakthrough',
			'Rush',
			'Thunder Clad',
			'Furious',
			'Ceaseless',
			'Consumption Slayer',
			'Ice Age',
			'Solid Determination',
		],
		automaticSkills = ['None'],
		zenithSkills = [
			'Skill Slots Up+4',
			'Reflect Up+1',
			'Ceaseless Up',
			'Guard Up+1',
		],
		caravanSkills = ['Weapon Art (Lg)', 'Perfect Defense (Lg)'],
		guildFood = 'Marathon Runner',
		divaSkill = 'Encourage+2',
		styleRankSkills = ['Def+180', 'Affinity+26'],
		weaponStyle = 'Extreme Style',
		weaponType = 'Lance',
		weaponName = 'Depth Glory Flamepike Lv. 100 (41BD)',
		weaponSlots = [
			'Zenith Cooldown: +17, Zenith Duration: +20, Zenith Attack: +15',
			'Attack Slayer: +15, Attack Slayes: +15, Attack Slayer: +15',
			'Lance Up: +15, Attack Slayer: +15, Attack Slayer: +15',
		],
		head = 'Alisys ZP Head (3733)',
		chest = 'Gems ZP Suit (341C)',
		arms = 'Chiarim ZP Arms (3733)',
		waist = 'Fanru ZX Coil (3471)',
		legs = 'Furante ZX Greaves (2E82)',
		cuffs = ['Lance S. Attack (3F5E)', 'Guard Up PZ4 (3D8E)'],
		headSlots = ['Lance True Blue', 'Lance True Black', 'Lance True Black'],
		chestSlots = ['Cariva BM GX4', 'Kinioru BM GX5', 'Extreme Ravi BM GX5'],
		armsSlots = [
			'Extreme Ravi BM GX5',
			'Extreme Ravi BM GX5',
			'Extreme Ravi BM GX5',
		],
		waistSlots = ['Extreme Ravi GN GX2', 'Bita GN GX2', 'Bita GN GX2'],
		legsSlots = ['Elysium GN GX1', 'Elysium GN GX1', 'Zindol GN GX2'],
		guildCardsUnlocked = Math.trunc(Math.random() * 100),
		guildCardsUnlockedRank = Math.trunc(Math.random() * 100),
		guildCardsUnlockedRankPercent = Math.trunc(Math.random() * 100),
		selectedGuildCardBackground = $bindable('Abiorugu'),
		username = 'UserDemo',
		canChangeGuildCardBackground = true,
	}: Props = $props();

	const formattedDate = formatDateTime(date);

	function downloadImage() {
		if (!browser) return;
		let node = document.getElementById('guild-card-dom');
		if (!node) return;
		domToPng(node, { quality: 1 }).then((dataUrl) => {
			const link = document.createElement('a');
			link.download = `${slugify(
				`${username}-Guild-Card-${new Date().toISOString()}.png`,
			)}`;
			link.href = dataUrl;
			link.click();
		});
	}
	let background = $derived(
		guildCardBackgrounds.find((e) => e.name === selectedGuildCardBackground)
			?.image || guildCardBackgrounds[0].image,
	);
</script>

<div class="spaced-paragraph">Information from the last quest completed.</div>
<!-- TODO: add run ID numberinput to see different gear-->
<div class="spaced-paragraph">
	<strong>Backgrounds Unlocked:</strong>
	<a href="/">
		{guildCardsUnlocked}/{totalGuildCards} (Rank #{guildCardsUnlockedRank}, Top {guildCardsUnlockedRankPercent}%)</a
	>
</div>
<div class="container">
	<div id="guild-card-dom" class="page-container">
		{#if selectedPage === 'page1'}
			<div class="page-1">
				<div class="image-container">
					<img src={background} alt="Guild Card Background" />
					<div class="text-overlay" style="left: 55px; top: 10%;">
						{name}
					</div>
					<div class="text-overlay" style="left: 55px; top: 6%;">
						{formattedDate}
					</div>
					<div class="text-overlay" style="left: 390px; top: 9%;">
						Wycademy | 1/2
					</div>
					<div class="text-overlay text-yellow" style="left: 40px; top: 22%;">
						Active:
					</div>
					<div
						class="text-overlay"
						style="left: 110px; top: 22%; width: 500px; word-wrap: break-word; word-break: break-all;"
					>
						{armorSkills}
					</div>
					<div class="text-overlay text-yellow" style="left: 40px; top: 42%;">
						Autom.:
					</div>
					<div
						class="text-overlay"
						style="left: 110px; top: 42%; width: 500px; word-wrap: break-word; word-break: break-all;"
					>
						{automaticSkills}
					</div>
					<div class="text-overlay text-yellow" style="left: 40px; top: 52%;">
						Zenith:
					</div>
					<div
						class="text-overlay"
						style="left: 110px; top: 52%; width: 500px; word-wrap: break-word; word-break: break-all;"
					>
						{zenithSkills}
					</div>
					<div class="text-overlay text-yellow" style="left: 40px; top: 62%;">
						Caravan:
					</div>
					<div
						class="text-overlay"
						style="left: 120px; top: 62%; width: 490px; word-wrap: break-word; word-break: break-all;"
					>
						{caravanSkills}
					</div>
					<div class="text-overlay text-yellow" style="left: 40px; top: 67%;">
						G.Food:
					</div>
					<div
						class="text-overlay"
						style="left: 120px; top: 67%; width: 490px; word-wrap: break-word; word-break: break-all;"
					>
						{guildFood}
					</div>
					<div class="text-overlay text-yellow" style="left: 40px; top: 72%;">
						Diva:
					</div>
					<div
						class="text-overlay"
						style="left: 120px; top: 72%; width: 490px; word-wrap: break-word; word-break: break-all;"
					>
						{divaSkill}
					</div>
					<div class="text-overlay text-yellow" style="left: 40px; top: 77%;">
						SR:
					</div>
					<div
						class="text-overlay"
						style="left: 120px; top: 77%; width: 490px; word-wrap: break-word; word-break: break-all;"
					>
						{styleRankSkills} | {weaponStyle}
					</div>
					<div class="icon" style="left: 40px; top: 83%;">
						<img src={MyTore} alt="Cuffs" />
					</div>
					<div
						class="text-overlay text-yellow"
						style="left: 68px; top: 83%; width: 535px; word-wrap: break-word; word-break: break-all;"
					>
						{cuffs.toString().split(',')[0]} | {cuffs.toString().split(',')[1]}
					</div>
				</div>
			</div>
		{:else if selectedPage === 'page2'}
			{@const SvelteComponent = getWeaponIcon(weaponType)}
			<div class="page-2">
				<div class="image-container">
					<img src={background} alt="Guild Card Background" />
					<div class="text-overlay" style="left: 55px; top: 10%;">
						{name}
					</div>
					<div class="text-overlay" style="left: 55px; top: 6%;">
						{formattedDate}
					</div>
					<div class="text-overlay" style="left: 390px; top: 9%;">
						Wycademy | 2/2
					</div>
					<div class="icon" style="left: 40px; top: 22%;">
						<SvelteComponent {...{ color: RarityColors[7] }} />
					</div>
					<div
						class="text-overlay text-yellow"
						style="left: 68px; top: 22%; width: 535px; word-wrap: break-word; word-break: break-all;"
					>
						{weaponName}
					</div>
					<div class="icon" style="left: 40px; top: 27%;">
						<JewelIconWhite />
					</div>
					<div
						class="text-overlay"
						style="left: 68px; top: 27%; width: 535px; word-wrap: break-word; word-break: break-all;"
					>
						{weaponSlots}
					</div>
					<div class="icon" style="left: 40px; top: 38%;">
						<HelmetIconWhite color={RarityColors[7]} />
					</div>
					<div
						class="text-overlay text-yellow"
						style="left: 68px; top: 38%; width: 535px; word-wrap: break-word; word-break: break-all;"
					>
						{head}
					</div>
					<div class="icon" style="left: 40px; top: 43%;">
						<JewelIconWhite />
					</div>
					<div
						class="text-overlay"
						style="left: 68px; top: 43%; width: 535px; word-wrap: break-word; word-break: break-all;"
					>
						{headSlots}
					</div>
					<div class="icon" style="left: 40px; top: 48%;">
						<ChestIconWhite color={RarityColors[7]} />
					</div>
					<div
						class="text-overlay text-yellow"
						style="left: 68px; top: 48%; width: 535px; word-wrap: break-word; word-break: break-all;"
					>
						{chest}
					</div>
					<div class="icon" style="left: 40px; top: 53%;">
						<JewelIconWhite />
					</div>
					<div
						class="text-overlay"
						style="left: 68px; top: 53%; width: 535px; word-wrap: break-word; word-break: break-all;"
					>
						{chestSlots}
					</div>
					<div class="icon" style="left: 40px; top: 58%;">
						<ArmIconWhite color={RarityColors[7]} />
					</div>
					<div
						class="text-overlay text-yellow"
						style="left: 68px; top: 58%; width: 535px; word-wrap: break-word; word-break: break-all;"
					>
						{arms}
					</div>
					<div class="icon" style="left: 40px; top: 63%;">
						<JewelIconWhite />
					</div>
					<div
						class="text-overlay"
						style="left: 68px; top: 63%; width: 535px; word-wrap: break-word; word-break: break-all;"
					>
						{armsSlots}
					</div>
					<div class="icon" style="left: 40px; top: 68%;">
						<WaistIconWhite color={RarityColors[7]} />
					</div>
					<div
						class="text-overlay text-yellow"
						style="left: 68px; top: 68%; width: 535px; word-wrap: break-word; word-break: break-all;"
					>
						{waist}
					</div>
					<div class="icon" style="left: 40px; top: 73%;">
						<JewelIconWhite />
					</div>
					<div
						class="text-overlay"
						style="left: 68px; top: 73%; width: 535px; word-wrap: break-word; word-break: break-all;"
					>
						{waistSlots}
					</div>
					<div class="icon" style="left: 40px; top: 78%;">
						<LegIconWhite color={RarityColors[7]} />
					</div>
					<div
						class="text-overlay text-yellow"
						style="left: 68px; top: 78%; width: 535px; word-wrap: break-word; word-break: break-all;"
					>
						{legs}
					</div>
					<div class="icon" style="left: 40px; top: 83%;">
						<JewelIconWhite />
					</div>
					<div
						class="text-overlay"
						style="left: 68px; top: 83%; width: 535px; word-wrap: break-word; word-break: break-all;"
					>
						{legsSlots}
					</div>
				</div>
			</div>
		{/if}
	</div>
	<div class="inputs">
		<Button kind="tertiary" on:click={downloadImage} icon={Download}
			>Download</Button
		>
		<Dropdown
			bind:selectedId={selectedPage}
			items={[
				{ id: 'page1', text: 'Page 1' },
				{ id: 'page2', text: 'Page 2' },
			]}
		/>
		{#if canChangeGuildCardBackground}
			<Dropdown
				bind:selectedId={selectedGuildCardBackground}
				items={guildCardBackgrounds
					.filter((e) => !e.unused)
					.map((e) => {
						return {
							id: e.name,
							text: e.name,
						};
					})}
			/>
		{/if}
	</div>
</div>

<style lang="scss">
	@media (min-width: 320px) {
		.container {
			display: flex;
			gap: 1rem;
			flex-wrap: wrap;
		}
	}

	@media (min-width: 1056px) {
		.container {
			display: grid;
			gap: 1rem;
			grid-template-columns: 1fr auto;
			justify-content: start;
		}
	}

	.inputs {
		display: flex;
		flex-direction: column;
		gap: 1rem;
	}

	.page-container {
		width: 100%;
		overflow: auto;
	}

	.image-container {
		position: relative;

		img {
			width: 636px; /* Fixed width */
			height: 468px; /* Fixed height */
			object-fit: cover; /* Ensures the image covers the entire container */
		}

		.text-overlay {
			position: absolute;
			color: var(--ctp-mocha-text);
			font-family: var(--font-game);
			font-size: 16px;
			font-weight: bold;
		}

		.icon {
			position: absolute;
			width: 24px;
			height: 24px;

			img {
				width: 100%;
				height: 100%;
			}
		}

		.text-yellow {
			color: var(--fz-text-yellow);
		}
	}

	a {
		all: unset;
	}

	a:hover {
		color: var(--ctp-sky);
		text-decoration: underline;
	}
</style>
