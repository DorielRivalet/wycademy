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
	import { getWeaponIcon } from '../modules/frontier/functions';
	import {
		guildCardBackgrounds,
		RarityColors,
	} from '../modules/frontier/objects';
	import JewelIconWhite from './frontier/icon/item/Jewel_Icon_White.svelte';
	import HelmetIconWhite from './frontier/icon/armor/Helmet_Icon_White.svelte';
	import ChestIconWhite from './frontier/icon/armor/Chest_Icon_White.svelte';
	import ArmIconWhite from './frontier/icon/armor/Arm_Icon_White.svelte';
	import WaistIconWhite from './frontier/icon/armor/Waist_Icon_White.svelte';
	import LegIconWhite from './frontier/icon/armor/Leg_Icon_White.svelte';
	import MyTore from '$lib/client/images/icon/my_tore.webp';

	export let name = 'Hunter';
	export let date = '2024-05-02T00:00:01Z';

	// Create a Date object from the ISO string
	const dateTime = new Date(date);

	// Extract components
	const year = dateTime.getFullYear();
	const month = String(dateTime.getMonth() + 1).padStart(2, '0'); // Months are zero-based, so add 1 and pad with leading zero if necessary
	const day = String(dateTime.getDate()).padStart(2, '0'); // Pad with leading zero if necessary
	const hour = String(dateTime.getHours()).padStart(2, '0'); // Pad with leading zero if necessary
	const minute = String(dateTime.getMinutes()).padStart(2, '0'); // Pad with leading zero if necessary
	const second = String(dateTime.getSeconds()).padStart(2, '0'); // Pad with leading zero if necessary

	// Assemble formatted string
	const formattedDate = `${year}/${month}/${day} ${hour}:${minute}:${second}`;

	export let armorSkills: FrontierArmorSkillName[] = [
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
	];
	export let automaticSkills: FrontierArmorSkillName[] = ['None'];
	export let zenithSkills: FrontierZenithSkill[] = [
		'Skill Slots Up+4',
		'Reflect Up+1',
		'Ceaseless Up',
		'Guard Up+1',
	];
	export let caravanSkills: FrontierCaravanSkillName[] = [
		'Weapon Art (Lg)',
		'Perfect Defense (Lg)',
	];
	export let guildFood: FrontierArmorSkillName = 'Marathon Runner';
	export let divaSkill = 'Encourage+2';
	export let styleRankSkills = ['Def+180', 'Affinity+26'];
	export let weaponStyle: FrontierWeaponStyle = 'Extreme Style';
	export let weaponType: FrontierWeaponName = 'Lance';
	export let weaponName = 'Depth Glory Flamepike Lv. 100 (41BD)';
	export let weaponSlots = [
		'Zenith Cooldown: +17, Zenith Duration: +20, Zenith Attack: +15',
		'Attack Slayer: +15, Attack Slayes: +15, Attack Slayer: +15',
		'Lance Up: +15, Attack Slayer: +15, Attack Slayer: +15',
	];
	export let head = 'Alisys ZP Head (3733)';
	export let chest = 'Gems ZP Suit (341C)';
	export let arms = 'Chiarim ZP Arms (3733)';
	export let waist = 'Fanru ZX Coil (3471)';
	export let legs = 'Furante ZX Greaves (2E82)';
	export let cuffs = ['Lance S. Attack (3F5E)', 'Guard Up PZ4 (3D8E)'];
	export let headSlots = [
		'Lance True Blue',
		'Lance True Black',
		'Lance True Black',
	];
	export let chestSlots = [
		'Cariva BM GX4',
		'Kinioru BM GX5',
		'Extreme Ravi BM GX5',
	];
	export let armsSlots = [
		'Extreme Ravi BM GX5',
		'Extreme Ravi BM GX5',
		'Extreme Ravi BM GX5',
	];
	export let waistSlots = ['Extreme Ravi GN GX2', 'Bita GN GX2', 'Bita GN GX2'];
	export let legsSlots = ['Elysium GN GX1', 'Elysium GN GX1', 'Zindol GN GX2'];

	let selectedPage = 'page1';
	export let selectedGuildCardBackground = 'Abiorugu';
	$: background =
		guildCardBackgrounds.find((e) => e.name === selectedGuildCardBackground)
			?.image || guildCardBackgrounds[0].image;
</script>

<div class="container">
	<div class="page-container">
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
						<svelte:component
							this={getWeaponIcon(weaponType)}
							{...{ color: RarityColors[7] }}
						/>
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
		<Button kind="tertiary" icon={Download}>Download</Button>
		<Dropdown
			bind:selectedId={selectedPage}
			items={[
				{ id: 'page1', text: 'Page 1' },
				{ id: 'page2', text: 'Page 2' },
			]}
		/>
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
</style>
