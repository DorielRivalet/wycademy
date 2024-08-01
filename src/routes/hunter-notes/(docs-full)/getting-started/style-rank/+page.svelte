<script lang="ts">
	import PageTurn from '$lib/client/components/PageTurn.svelte';
	import SectionHeadingTopLevel from '$lib/client/components/SectionHeadingTopLevel.svelte';
	import HunterNotesPage from '$lib/client/components/HunterNotesPage.svelte';
	import { page } from '$app/stores';
	import SectionHeading from '$lib/client/components/SectionHeading.svelte';
	import Link from 'carbon-components-svelte/src/Link/Link.svelte';
	import UnorderedList from 'carbon-components-svelte/src/UnorderedList/UnorderedList.svelte';
	import ListItem from 'carbon-components-svelte/src/ListItem/ListItem.svelte';
	import { LocationIcons } from '$lib/client/modules/frontier/locations';
	import InlineTooltip from '$lib/client/components/frontier/InlineTooltip.svelte';
	import { getItemIcon, ItemColors } from '$lib/client/modules/frontier/items';
	import { gameInfo } from '$lib/client/modules/frontier/objects';
	import CenteredFigure from '$lib/client/components/CenteredFigure.svelte';
	import {
		getMonsterIcon,
		monsterInfo,
	} from '$lib/client/modules/frontier/monsters';
	import { getWeaponIcon } from '$lib/client/modules/frontier/weapons';
	import DataTable, {
		type DataTableCell,
	} from 'carbon-components-svelte/src/DataTable/DataTable.svelte';
	import Toolbar from 'carbon-components-svelte/src/DataTable/Toolbar.svelte';
	import CopyButton from 'carbon-components-svelte/src/CopyButton/CopyButton.svelte';
	import Button from 'carbon-components-svelte/src/Button/Button.svelte';
	import { getCSVFromArray } from '$lib/client/modules/csv';
	import Download from 'carbon-icons-svelte/lib/Download.svelte';
	import { downloadDomAsPng } from '$lib/client/modules/download';
	import type { FrontierArmorSkillName, FrontierWeaponName } from 'ezlion';
	import StarRating from '$lib/client/components/StarRating.svelte';
	import GuildMaster from '$lib/client/images/supplemental/guild-master.webp';
	import HCExample from '$lib/client/images/supplemental/hc-example.webp';
	import HCOption from '$lib/client/images/supplemental/hc-option.webp';
	import HidenCuffExample from '$lib/client/images/supplemental/hiden-cuff-example.webp';
	import MyMissionS from '$lib/client/images/supplemental/my-mission-s.webp';
	import SRStatus from '$lib/client/images/supplemental/sr-status.webp';
	import HidenSkillExample from '$lib/client/images/supplemental/hiden-skill-example.webp';
	import PassiveMaster from '$lib/client/images/supplemental/passive-master.webp';
	import SecretTech from '$lib/client/images/supplemental/secret-tech.webp';
	import SharpeningUp from '$lib/client/images/supplemental/sharpening-up.webp';
	import SoulRevival from '$lib/client/images/supplemental/soul-revival.webp';
	import Image from 'carbon-icons-svelte/lib/Image.svelte';
	import Modal from 'carbon-components-svelte/src/Modal/Modal.svelte';
	import StarFilled from 'carbon-icons-svelte/lib/StarFilled.svelte';
	import { onMount } from 'svelte';
	import { theme } from '$lib/client/stores/theme';
	import mermaid from 'mermaid';
	import { browser } from '$app/environment';
	import Loading from 'carbon-components-svelte/src/Loading/Loading.svelte';

	let modalHeading = '';
	let modalLabel = '';
	let modalOpen = false;
	let modalImage = '';
	let modalNotes = '';

	const weaponUnlockGSRBonus: { id: string; unlocks: string; bonus: string }[] =
		[
			{ id: '0', unlocks: '11', bonus: 'None' },
			{
				id: '1',
				unlocks: '12',
				bonus:
					'Affinity+2, Ele Res+2, All Res+2, Def+10, Conquest Atk Base 100+5, Conquest Def Base 300+10',
			},
			{
				id: '2',
				unlocks: '13',
				bonus:
					'Affinity+2, Ele Res+2, All Res+2, Def+10, Conquest Atk Base 100+5, Conquest Def Base 300+10',
			},
			{
				id: '3',
				unlocks: '14',
				bonus:
					'Affinity+2, Ele Res+1, All Res+1, Def+10, Conquest Atk Base 100+5, Conquest Def Base 300+10',
			},
		];

	const specialEffectsGSR: { id: string; GSR: string; effects: string }[] = [
		{
			id: '1',
			GSR: '0',
			effects: 'Def+100, Ele Res+20, All Res+10, Affinity+20',
		},
		{ id: '2', GSR: '10', effects: 'Def+1' },
		{ id: '3', GSR: '20', effects: 'Fire Res+2' },
		{ id: '4', GSR: '30', effects: 'Conquest Def+10' },
		{ id: '5', GSR: '40', effects: 'Water Res+2' },
		{ id: '6', GSR: '50', effects: 'Conquest Atk+2' },
		{ id: '7', GSR: '60', effects: 'Def+1' },
		{ id: '8', GSR: '70', effects: 'Conquest Def+10' },
		{ id: '9', GSR: '80', effects: 'Thunder Res+2' },
		{ id: '10', GSR: '90', effects: 'Def+1' },
		{
			id: '11',
			GSR: '100',
			effects: 'Conquest Atk+2, 2 special effects can be set',
		},
		{ id: '12', GSR: '110', effects: 'Def+1' },
		{ id: '13', GSR: '120', effects: 'Ice Res+2' },
		{ id: '14', GSR: '130', effects: 'Conquest Def+10' },
		{ id: '15', GSR: '140', effects: 'Dragon Res+2' },
		{ id: '16', GSR: '150', effects: 'Conquest Atk+2' },
		{ id: '17', GSR: '160', effects: 'Def+1' },
		{ id: '18', GSR: '170', effects: 'Conquest Def+10' },
		{ id: '19', GSR: '180', effects: 'All Res+1' },
		{ id: '20', GSR: '190', effects: 'Def+1' },
		{ id: '21', GSR: '200', effects: 'Conquest Atk+2' },
		{ id: '22', GSR: '210', effects: 'Def+1' },
		{ id: '23', GSR: '220', effects: 'Fire Res+2' },
		{ id: '24', GSR: '230', effects: 'Conquest Def+10' },
		{ id: '25', GSR: '240', effects: 'Water Res+2' },
		{ id: '26', GSR: '250', effects: 'Conquest Atk+2' },
		{ id: '27', GSR: '260', effects: 'Def+1' },
		{ id: '28', GSR: '270', effects: 'Conquest Def+10' },
		{ id: '29', GSR: '280', effects: 'Thunder Res+2' },
		{ id: '30', GSR: '290', effects: 'Def+1' },
		{ id: '31', GSR: '300', effects: 'Conquest Atk+2' },
		{ id: '32', GSR: '310', effects: 'Def+1' },
		{ id: '33', GSR: '320', effects: 'Ice Res+2' },
		{ id: '34', GSR: '330', effects: 'Conquest Def+10' },
		{ id: '35', GSR: '340', effects: 'Dragon Res+2' },
		{ id: '36', GSR: '350', effects: 'Conquest Atk+2' },
		{ id: '37', GSR: '360', effects: 'Def+2' },
		{ id: '38', GSR: '370', effects: 'Conquest Def+10' },
		{ id: '39', GSR: '380', effects: 'All Res+1' },
		{ id: '40', GSR: '390', effects: 'Def+2' },
		{ id: '41', GSR: '400', effects: 'Conquest Atk+2' },
		{ id: '42', GSR: '410', effects: 'Def+2' },
		{ id: '43', GSR: '420', effects: 'Fire Res+2' },
		{ id: '44', GSR: '430', effects: 'Conquest Def+10' },
		{ id: '45', GSR: '440', effects: 'Water Res+2' },
		{ id: '46', GSR: '450', effects: 'Conquest Atk+2' },
		{ id: '47', GSR: '460', effects: 'Def+2' },
		{ id: '48', GSR: '470', effects: 'Conquest Def+10' },
		{ id: '49', GSR: '480', effects: 'Thunder Res+2' },
		{ id: '50', GSR: '490', effects: 'Def+2' },
		{ id: '51', GSR: '500', effects: 'Conquest Atk+2' },
		{ id: '52', GSR: '510', effects: 'Def+2' },
		{ id: '53', GSR: '520', effects: 'Ice Res+2' },
		{ id: '54', GSR: '530', effects: 'Conquest Def+10' },
		{ id: '55', GSR: '540', effects: 'Dragon Res+2' },
		{ id: '56', GSR: '550', effects: 'Conquest Atk+2' },
		{ id: '57', GSR: '560', effects: 'Def+2' },
		{ id: '58', GSR: '570', effects: 'Conquest Def+10' },
		{ id: '59', GSR: '580', effects: 'All Res+1' },
		{ id: '60', GSR: '590', effects: 'Def+2' },
		{ id: '61', GSR: '600', effects: 'Conquest Atk+2' },
		{ id: '62', GSR: '610', effects: 'Def+2' },
		{ id: '63', GSR: '620', effects: 'Fire Res+2' },
		{ id: '64', GSR: '630', effects: 'Conquest Def+10' },
		{ id: '65', GSR: '640', effects: 'Water Res+2' },
		{ id: '66', GSR: '650', effects: 'Conquest Atk+2' },
		{ id: '67', GSR: '660', effects: 'Def+2' },
		{ id: '68', GSR: '670', effects: 'Conquest Def+10' },
		{ id: '69', GSR: '680', effects: 'Thunder Res+2' },
		{ id: '70', GSR: '690', effects: 'Def+2' },
		{ id: '71', GSR: '700', effects: 'Conquest Atk+2' },
		{ id: '72', GSR: '710', effects: 'Def+2' },
		{ id: '73', GSR: '720', effects: 'Ice Res+2' },
		{ id: '74', GSR: '730', effects: 'Conquest Def+10' },
		{ id: '75', GSR: '740', effects: 'Ice Res+2' },
		{ id: '76', GSR: '750', effects: 'Conquest Atk+2' },
		{ id: '77', GSR: '760', effects: 'Def+2' },
		{ id: '78', GSR: '770', effects: 'Conquest Def+10' },
		{ id: '79', GSR: '780', effects: 'All Res+1' },
		{ id: '80', GSR: '790', effects: 'Def+2' },
		{ id: '81', GSR: '800', effects: 'Conquest Atk+4' },
		{ id: '82', GSR: '810', effects: 'Def+2' },
		{ id: '83', GSR: '820', effects: 'Fire Res+2' },
		{ id: '84', GSR: '830', effects: 'Conquest Def+10' },
		{ id: '85', GSR: '840', effects: 'Water Res+2' },
		{ id: '86', GSR: '850', effects: 'Conquest Atk+4' },
		{ id: '87', GSR: '860', effects: 'Def+2' },
		{ id: '88', GSR: '870', effects: 'Conquest Def+10' },
		{ id: '89', GSR: '880', effects: 'Thunder Res+2' },
		{ id: '90', GSR: '890', effects: 'Def+2' },
		{ id: '91', GSR: '900', effects: 'Conquest Atk+4' },
		{ id: '92', GSR: '910', effects: 'Def+2' },
		{ id: '93', GSR: '920', effects: 'Ice Res+2' },
		{ id: '94', GSR: '930', effects: 'Conquest Defense+10' },
		{ id: '95', GSR: '940', effects: 'Dragon Res+2' },
		{ id: '96', GSR: '950', effects: 'Conquest Atk+4' },
		{ id: '97', GSR: '960', effects: 'Def+2' },
		{ id: '98', GSR: '970', effects: 'Conquest Def+10' },
		{ id: '99', GSR: '980', effects: 'All Res+1' },
		{ id: '100', GSR: '990', effects: 'Def+2' },
		{ id: '101', GSR: '999', effects: 'Passive Master, Conquest Atk+4' },
		{
			id: '102',
			GSR: 'x11 GSR999',
			effects:
				'Soul Revival, Conquest Atk Base 100, Conquest Def Base 300, G Rank Weapon unlock bonuses for conquest skills (+10 Def, +5 Atk each)',
		},
	];

	function changeModal(cell: DataTableCell, section: string) {
		modalOpen = true;
		modalHeading = cell.value;
		modalLabel = section || '';

		switch (section) {
			default:
				modalImage = '';
				modalNotes = '';
				break;
			case 'Style Rank Skills':
				modalImage =
					styleRankSkills.find((e) => e.skill === cell.value)?.image || '';
				modalNotes =
					styleRankSkills.find((e) => e.skill === cell.value)?.description ||
					'';
				break;
		}
	}

	const maxWeaponTechSkills: {
		id: string;
		weapon: FrontierWeaponName;
		skill: FrontierArmorSkillName;
		description: string;
	}[] = [
		{
			id: '0',
			weapon: 'Sword and Shield',
			skill: 'SnS Tech 【Sword Saint】',
			description: `Gives Super High-Grade Earplugs,
Attack x1.3 when wielding a One-handed Sword,
All Elemental Sword Stone Skills +3,
All Status Sword Stone Skills +2,
Bomb Sword +2,
Faster movement with SnS unsheathed,
and Fencing+1. +3 versions of Crystal skills will overwrite the +2 versions included in this skill if active.`,
		},
		{
			id: '1',
			weapon: 'Dual Swords',
			skill: 'DS Tech 【Dual Dragon】',
			description: `Gives Super High-Grade Earplugs,
Attack x1.2 when wielding Dual Blades,
Fencing+1 and
Always recover 3 units of stamina per hit while attacking in either Demon Mode.
Faster activation of Demon Modes.`,
		},
		{
			id: '2',
			weapon: 'Great Sword',
			skill: 'GS Tech 【Sword King】',
			description: `Gives Super High-Grade Earplugs,
Attack x1.2 when wielding a Great Sword,
Fencing +1 and
Guard slash counter block recovers half the sharpness that would be lost. Also grants
Faster charging (stacks with Focus),
charge remains at level 4 longer before dropping to level 2 charge (Storm Style).
Perfectly timed blocks cause no knockback, can be evaded out of, drain no stamina, and recover half the sharpness that would be lost.
Sharpness recovery effect works while using Sharp Sword and allows you to recover sharpness with +2.`,
		},
		{
			id: '3',
			weapon: 'Long Sword',
			skill: 'LS Tech 【Katana God】',
			description: `Gives Super High-Grade Earplugs,
Attack x1.2 when wielding a Long Sword,
Fencing+1 and
Spirit Bar consumption halved. Also grants
Sharp Sword +2 while Spirit Bar is full and
Attack x1.25 (originally x1.15) while the Spirit Bar is glowing (after being filled completely).`,
		},
		{
			id: '4',
			weapon: 'Hammer',
			skill: 'Hammer Tech 【Blunt Beast】',
			description: `Gives Super High-Grade Earplugs,
Attack x1.2 when wielding a Hammer,
Fencing+1 and
Attack x1.3 when releasing a perfectly timed charge attack for that entire combo (includes infinite).`,
		},
		{
			id: '5',
			weapon: 'Hunting Horn',
			skill: 'HH Tech 【Flamboyant Emperor】',
			description: `Gives Super High-Grade Earplugs,
Attack x1.2 when wielding a Hunting Horn and
Fencing+1.
Performance mode note color decision is made 34% faster.`,
		},
		{
			id: '6',
			weapon: 'Lance',
			skill: 'Lance Tech 【Heavenly Spear】',
			description: `Gives Super High-Grade Earplugs,
Attack x1.2 when wielding a Lance and
Fencing+1.
No damage taken when successfully blocking attacks.
Able to perform 4 hops instead of 3.
Motion Value +10 for final (3rd or 4th) Normal, Diagonal, and Sky-Stabs.`,
		},
		{
			id: '7',
			weapon: 'Gunlance',
			skill: 'GL Tech 【Cannon Ruler】',
			description: `Gives Super High-Grade Earplugs,
Attack x1.2 when wielding a Gunlance and
Fencing+1.
Wyvern Fire and Heat Blade cooldown-time is halved and
Heat Blade activation time reduced to 3 seconds. Also grants
Normal Shells +2,
Long Shells +1 and
Wide Shells +1 (stackable with Load Up or Gentle Shot).`,
		},
		{
			id: '8',
			weapon: 'Tonfa',
			skill: 'Tonfa Tech 【Piercing Phoenix】',
			description: `Gives Super High-Grade Earplugs,
Attack x1.2 when wielding Tonfa and
Fencing+1.
An additional 6th Combo / EX Meter segment is added.`,
		},
		{
			id: '9',
			weapon: 'Switch Axe F',
			skill: 'Swaxe Tech 【Edge Marshal】',
			description: `Gives Super High-Grade Earplugs,
Attack x1.2 when wielding a Switch Axe and
Fencing+1.
Successfully using certain actions increases attack by 1.05x for a short time (Morphing in Earth Style, Sword Attacks in Heaven Style, and Guarding in Storm Style).
Stamina consumption for infinite swing combo is halved.
Attacking in axe mode increases phial gauge.
Attacks utilizing the phial consume less meter.`,
		},
		{
			id: '10',
			weapon: 'Magnet Spike',
			skill: 'Magspike Tech 【Magnetic Star】',
			description: `Grants Attack x1.2, Fencing, and Super High-Grade Earplugs when using a Magnet Spike. Successful evasive maneuvers boost attack by x1.03 and gauge recovery by x1.5 for 30 seconds. Increases movement speed by x1.2. The magnetic target marker remains active.`,
		},
		{
			id: '11',
			weapon: 'Light Bowgun',
			skill: 'LBG Tech 【Gun Prodigy】',
			description: `Gives Super High-Grade Earplugs and
Attack x1.3 when wielding a Light Bowgun.
Probability of ammo bouncing off monsters is reduced.
Can consume items while the weapon is unsheathed.
Perfect Shot added to Just Shot meter that deals additional damage.`,
		},
		{
			id: '12',
			weapon: 'Heavy Bowgun',
			skill: 'HBG Tech 【Gun Sage】',
			description: `Gives Super High-Grade Earplugs,
Attack x1.3 when wielding a Heavy Bowgun,
Power (value) of Element/Status ammo x1.2 and
Evade Distance Up.
Melee attacks and Crag/Clust shots all do 15 KO damage, while
Heat Beam does x1.2 damage.
Perfectly-timed compression will result in more attack power for that one salvo.`,
		},
		{
			id: '13',
			weapon: 'Bow',
			skill: 'Bow Tech 【Bow Demon】',
			description: `Gives Super High-Grade Earplugs and
Attack x1.3 when wielding a Bow.
Arrows cannot be deflected.
Power Coating modifier increased by an extra 0.2x.
Arc-Shot can be executed at Charge Lv2.`,
		},
	];

	const recommendedAttackCeiling: { id: string; set: string; value: string }[] =
		[
			{ id: '0', set: 'Basic G Rank Set', value: '25' },
			{ id: '1', set: 'Basic Hiden Set', value: '70' },
			{ id: '2', set: 'Good Hiden Set', value: '110' },
			{ id: '3', set: 'Determination Set', value: '80' },
			{ id: '4', set: 'Determination Hiden Set', value: '130' },
		];

	const weaponsMaxAttack: {
		id: string;
		weapon: FrontierWeaponName;
		multiplier: string;
		defaultMax: string;
		finalMax: string;
	}[] = [
		{
			id: '0',
			weapon: 'Sword and Shield',
			multiplier: '1.4',
			defaultMax: '1120',
			finalMax: '11200',
		},
		{
			id: '1',
			weapon: 'Dual Swords',
			multiplier: '1.4',
			defaultMax: '1120',
			finalMax: '11200',
		},
		{
			id: '2',
			weapon: 'Great Sword',
			multiplier: '4.8',
			defaultMax: '3840',
			finalMax: '38400',
		},
		{
			id: '3',
			weapon: 'Long Sword',
			multiplier: '4.8',
			defaultMax: '3840',
			finalMax: '38400',
		},
		{
			id: '4',
			weapon: 'Hammer',
			multiplier: '5.2',
			defaultMax: '4160',
			finalMax: '41600',
		},
		{
			id: '5',
			weapon: 'Hunting Horn',
			multiplier: '5.2',
			defaultMax: '4160',
			finalMax: '41600',
		},
		{
			id: '6',
			weapon: 'Lance',
			multiplier: '2.3',
			defaultMax: '1840',
			finalMax: '18400',
		},
		{
			id: '7',
			weapon: 'Gunlance',
			multiplier: '2.3',
			defaultMax: '1840',
			finalMax: '18400',
		},
		{
			id: '8',
			weapon: 'Tonfa',
			multiplier: '1.8',
			defaultMax: '1440',
			finalMax: '14400',
		},
		{
			id: '9',
			weapon: 'Switch Axe F',
			multiplier: '5.4',
			defaultMax: '4320',
			finalMax: '43200',
		},
		{
			id: '10',
			weapon: 'Magnet Spike',
			multiplier: '5.4',
			defaultMax: '4320',
			finalMax: '43200',
		},
		{
			id: '11',
			weapon: 'Light Bowgun',
			multiplier: '1.2',
			defaultMax: '960',
			finalMax: '9600',
		},
		{
			id: '12',
			weapon: 'Heavy Bowgun',
			multiplier: '1.2',
			defaultMax: '960',
			finalMax: '9600',
		},
		{
			id: '13',
			weapon: 'Bow',
			multiplier: '1.2',
			defaultMax: '960',
			finalMax: '9600',
		},
	];

	const styleRankStats: {
		id: string;
		stat: string;
		description: string;
		category: string;
	}[] = [
		{
			id: '0',
			stat: 'HC Rarity Suitability',
			description: `Determines the maximum rarity of a weapon that gets additional multipliers on an HC quest. Rare-11 is applicable at HR5, and Rare-12 from HR6 onwards. This does not apply to GSR weapons.
Primarily significant for AI Companion ranks as HR and SR are removed. Rarity Sigils on G Rank weapons are considered in these checks.`,
			category: 'Fixed based on Rank',
		},
		{
			id: '1',
			stat: 'Attack Up',
			description: `Provides a flat increase to attack. Each level adds +1 true raw, with a maximum of +100 at GSR999, equivalent to the Lone Wolf skill.
At HR5, it provides 17, at HR6 it’s 45, and at HR7 it’s 50. It progresses gradually up to 100 at GSR999.`,
			category: 'Fixed based on Rank',
		},
		{
			id: '2',
			stat: 'SR Status',
			description:
				'Indicates the status of your SR, either Enabled or Disabled.',
			category: 'Fixed based on Rank',
		},
		{
			id: '3',
			stat: 'Weapon Style',
			description:
				'Shows which of the three styles you have equipped on the weapon.',
			category: 'Fixed based on Rank',
		},
		{
			id: '4',
			stat: 'SR Skill',
			description:
				'Displays the SR skill you have equipped. Only one can be equipped during SR, with the ability to equip two after GSR100.',
			category: 'Fixed based on Rank',
		},
		{
			id: '5',
			stat: 'Twin Hiden',
			description:
				"Grants Sharpness+1 to maxed Weapon Tech skills and multiplies attack by 1.1 if you have multiple FX level Hiden Sets. Can be increased with My Missions, but it's not recommended to use.",
			category: 'Fixed based on Rank',
		},
		{
			id: '6',
			stat: 'Reduced Damage',
			description:
				'Has 20 levels. Reduces damage taken by a percentage equal to (LV / 2)% with a maximum of 10% reduction.',
			category: 'Increased with My Missions',
		},
		{
			id: '7',
			stat: 'Attack Ceiling',
			description:
				'Has 180 levels. Increases the maximum attack value beyond the 800 True Raw limit. Each level adds +40, with a maximum cap of 8000 potential True Raw. Any factor that increases the attack value on the guild card counts towards this limit, such as the LS Spirit Bar, the Tonfa combo meters, DS Sharpens, Demon Drugs, Food Buffs, and SR Attack Increase levels. Critical Hits and Weapon Sharpness do not count as they do not modify the value on the guild card.',
			category: 'Increased with My Missions',
		},
		{
			id: '8',
			stat: 'Partial HP',
			description:
				'Has 25 levels. Increases the amount of Red Health retained after attacks. Each level adds 1%, with a maximum of 25% additional Red Health.',
			category: 'Increased with My Missions',
		},
		{
			id: '9',
			stat: 'Status Recovery',
			description:
				'Has 25 levels. Reduces the duration of statuses by 1.5 frames per level, with a maximum reduction of 1.25 seconds.',
			category: 'Increased with My Missions',
		},
	];

	const styleRankSkills: {
		id: string;
		skill: string;
		category: string;
		description: string;
		image?: string;
	}[] = [
		{
			id: '0',
			skill: 'Defense Up',
			category: 'SR to GSR Skills',
			description:
				'Up to +180 Defense, +10 for each weapon unlocked: Tonfa, Switch Axe F, Magnet Spike.',
		},
		{
			id: '1',
			skill: 'Water Res Up',
			category: 'SR to GSR Skills',
			description:
				'Up to +35 Resistance, +2 for each weapon unlocked: Tonfa, Switch Axe F. Magnet Spike gives +1.',
		},
		{
			id: '2',
			skill: 'Thunder Res Up',
			category: 'SR to GSR Skills',
			description:
				'Up to +35 Resistance, +2 for each weapon unlocked: Tonfa, Switch Axe F. Magnet Spike gives +1.',
		},
		{
			id: '3',
			skill: 'Ice Res Up',
			category: 'SR to GSR Skills',
			description:
				'Up to +35 Resistance, +2 for each weapon unlocked: Tonfa, Switch Axe F. Magnet Spike gives +1.',
		},
		{
			id: '4',
			skill: 'Dragon Res Up',
			category: 'SR to GSR Skills',
			description:
				'Up to +35 Resistance, +2 for each weapon unlocked: Tonfa, Switch Axe F. Magnet Spike gives +1.',
		},
		{
			id: '5',
			skill: 'Fire Res Up',
			category: 'SR to GSR Skills',
			description:
				'Up to +35 Resistance, +2 for each weapon unlocked: Tonfa, Switch Axe F. Magnet Spike gives +1.',
		},
		{
			id: '6',
			skill: 'All Res Up',
			category: 'SR to GSR Skills',
			description:
				'Up to +20 to all Resistances, +2 for each weapon unlocked: Tonfa, Switch Axe F. Magnet Spike gives +1.',
		},
		{
			id: '7',
			skill: 'Sharpening Up',
			category: 'SR to GSR Skills',
			description:
				'+50/MAX Sharpness from sharpening. Takes only 1 sharpen motion to complete the action.',
			image: SharpeningUp,
		},
		// { // Not in game
		// 	id: '8',
		// 	skill: 'Health Up',
		// 	category: 'SR to GSR Skills',
		// 	description: 'Up to +50 Max HP.',
		// },
		{
			id: '9',
			skill: 'Affinity Up',
			category: 'SR to GSR Skills',
			description:
				'Up to +26% Affinity. Tonfa, Switch Axe F and Magnet Spike add +2% each.',
		},
		{
			id: '10',
			skill: 'Conquest Defense',
			category: 'GSR Skills',
			description:
				'Up to +330 Defense on Conquests. Does not apply on Shiten quests. Tonfa, Switch Axe F and Magnet Spike add +10 each.',
		},
		{
			id: '11',
			skill: 'Conquest Attack',
			category: 'GSR Skills',
			description:
				'Up to +115 Attack on Conquests. Does not apply on Shiten quests. Tonfa, Switch Axe F and Magnet Spike add +5 each.',
		},
		{
			id: '12',
			skill: 'Passive Master',
			category: 'Every GSR999',
			description:
				'Causes any monster attacks that would normally knock you down to leave you partially recovered, allowing you to land on your feet instead of lying down and slowly getting up.',
			image: PassiveMaster,
		},
		{
			id: '13',
			skill: 'Secret Technique',
			category: 'Every GSR999',
			description: `A Hunter Knife attack that can be used once a day after 12:00. It deals massive damage after a long wind-up animation and is bound to the Kick action. After use, it increases your attack by 320 (flat addition) for the rest of the quest's duration (shown as a red particle effect during the animation). The initial attack does a portion of the monster's Max HP. You can increase how much Max HP is taken by increasing the GSR of weapons to 999; with all weapons at GSR999 it deals 38% of the monster's Max HP, meaning that a group of 3 hunters can oneshot most monsters this way. Quests where the initial attack deals very little damage include most musou quests, but it can be useful against Arrogant Duremudira due to being able to activate it at the entrance, where quest time hasn't started yet, thus keeping the attack increase portion of the skill without drawbacks. You can also cancel the initial attack portion of the skill by being near an area transition zone and transitioning via the Secret Tech animation; this makes you invulnerable to Damage Over Time effects (works even after carting), also keeping the attack increase bonus, although you lose on the benefits of hitting the initial attack. You gain invulnerability frames during the animation after the red particle effect. Due to this skill being very versatile, there is a separate speedrun category for it.`,
			image: SecretTech,
		},
		{
			id: '14',
			skill: 'Soul Revival',
			category: '11x GSR999',
			description:
				'An ability that can be triggered once per quest. It revives you after hitting 0 HP once and fully restores your health bar. This ability is disabled with Determination and is unlocked on GSR999 weapons after you have 11 GSR999 weapons in total.',
			image: SoulRevival,
		},
	];

	const lavasiothCarves: {
		id: string;
		carve: string;
		chance: string;
		pool: string;
	}[] = [
		{
			id: '0',
			carve: 'Lavasioth Scale',
			chance: '48%',
			pool: 'Normal Carves (95%)',
		},
		{
			id: '1',
			carve: 'Lavasioth Shell',
			chance: '38%',
			pool: 'Normal Carves (95%)',
		},
		{
			id: '2',
			carve: 'Lavasioth Fang',
			chance: '14%',
			pool: 'Normal Carves (95%)',
		},
		{
			id: '3',
			carve: 'Lavasioth Scale',
			chance: '48%',
			pool: 'Normal Carves (95%)',
		},
		{
			id: '4',
			carve: 'Lavasioth Rotary Fin',
			chance: '100%',
			pool: 'Hardcore Carves (5%)',
		},
	];

	const weaponStyles: {
		id: string;
		weapon: FrontierWeaponName;
		earth: string;
		heaven: string;
		storm: string;
	}[] = [
		{
			id: '0',
			weapon: 'Sword and Shield',
			earth: '3',
			heaven: '3',
			storm: '3',
		},
		{
			id: '1',
			weapon: 'Dual Swords',
			earth: '2',
			heaven: '3',
			storm: '3',
		},
		{
			id: '2',
			weapon: 'Great Sword',
			earth: '2',
			heaven: '1',
			storm: '3',
		},
		{
			id: '3',
			weapon: 'Long Sword',
			earth: '2',
			heaven: '3',
			storm: '1.5',
		},
		{
			id: '4',
			weapon: 'Hammer',
			earth: '2',
			heaven: '1',
			storm: '3',
		},
		{
			id: '5',
			weapon: 'Hunting Horn',
			earth: '2',
			heaven: '2',
			storm: '3',
		},
		{
			id: '6',
			weapon: 'Lance',
			earth: '2',
			heaven: '3',
			storm: '3',
		},
		{
			id: '7',
			weapon: 'Gunlance',
			earth: '3',
			heaven: '3',
			storm: '3',
		},
		{
			id: '8',
			weapon: 'Light Bowgun',
			earth: '3',
			heaven: '1',
			storm: '3',
		},
		{
			id: '9',
			weapon: 'Heavy Bowgun',
			earth: '2',
			heaven: '3',
			storm: '3',
		},
		{
			id: '10',
			weapon: 'Bow',
			earth: '2',
			heaven: '3',
			storm: '1',
		},
	];

	// TODO Needed?
	let modalPopoverIconType = 'file';
	let modalPopoverIcon: any;

	$: modalBlurClass = modalOpen ? 'modal-open-blur' : 'modal-open-noblur';

	function getDiagram(mermaidTheme: string) {
		return `\
	%%{init: {'theme':'${mermaidTheme}'}}%%

graph LR
		SRWhite[Style Rank White FX Piece] -->|Upgrades to GF| GSRWhiteTiger[G Style Rank White Tiger]
		SRWhite -->|Upgrades to GF| GSRMilitaryBlack[G Style Rank Military Black]

		GSRWhiteTiger -->|Upgrades to GX| GR500WhiteTiger[G Rank 500 White Tiger]
		GSRMilitaryBlack -->|Upgrades to GX| GR50MilitaryBlack[G Rank 500 Military Black]

		GR500WhiteTiger -->|Converts to gems at GX Lv7| WhiteTigerDeco[White Tiger Decoration]
		GR50MilitaryBlack -->|Converts to gems at GX Lv7| MilitaryBlackDeco[Military Black Decoration]

		SRRed[Style Rank Red FX Piece] -->|Upgrades to GF| GSRCrimsonBird[G Style Rank Crimson Bird]
		SRRed -->|Upgrades to GF| GSRAzureDragon[G Style Rank Azure Dragon]

		GSRCrimsonBird -->|Upgrades to GX| GR500CrimsonBird[G Rank 500 Crimson Bird]
		GSRAzureDragon -->|Upgrades to GX| GR50AzureDragon[G Rank 500 Azure Dragon]

		GR500CrimsonBird -->|Converts to gems at GX Lv7| CrimsonBirdDeco[Crimson Bird Decoration]
		GR50AzureDragon -->|Converts to gems at GX Lv7| AzureDragonDeco[Azure Dragon Decoration]
`;
	}

	function getDiagram2(mermaidTheme: string) {
		return `\
	%%{init: {'theme':'${mermaidTheme}'}}%%

graph LR
		WhitePiece[1x Fully Completed White Tigex GX Hiden Piece] -->|Convert to| WhiteDeco[White Tiger Decoration]
		WhiteDeco -->|Recipe for| TrueHiden[1x Any Color True Hiden Decoration]

		BlackPiece[1x Fully Completed Military Black GX Hiden Piece] -->|Convert to| BlackDeco[Military Black Decoration]
		BlackDeco -->|Recipe for| TrueHiden

		RedPiece[1x Fully Completed Crimson Phoenix GX Hiden Piece] -->|Convert to| RedDeco[Crimson Phoenix Decoration]
		RedDeco -->|Recipe for| TrueHiden

		BluePiece[1x Fully Completed Azure Dragon GX Hiden Piece] -->|Convert to| BlueDeco[Azure Dragon Decoration]
		BlueDeco -->|Recipe for| TrueHiden
`;
	}

	let container: { innerHTML: string };
	let container2: { innerHTML: string };

	let mermaidTheme = $theme === 'g10' ? 'default' : 'dark';

	// The default diagram
	let diagram = getDiagram(mermaidTheme);
	let diagram2 = getDiagram2(mermaidTheme);

	$: diagram && renderDiagram($theme, mermaidTheme);
	$: diagram2 && renderDiagram2($theme, mermaidTheme);

	onMount(() => {
		mermaid.initialize({
			startOnLoad: false,
			flowchart: { useMaxWidth: false },
			fontFamily: 'IBM Plex Sans',
		});
		mermaid.contentLoaded();
	});

	async function renderDiagram(siteTheme: string, mermaidTheme: string) {
		if (!browser) return;
		mermaidTheme = siteTheme === 'g10' ? 'default' : 'dark';

		let { svg } = await mermaid.render('mermaid', getDiagram(mermaidTheme));
		container.innerHTML = svg;
	}

	async function renderDiagram2(siteTheme: string, mermaidTheme: string) {
		if (!browser) return;
		mermaidTheme = siteTheme === 'g10' ? 'default' : 'dark';

		let { svg } = await mermaid.render('mermaid2', getDiagram2(mermaidTheme));
		container2.innerHTML = svg;
	}
</script>

<Modal
	passiveModal
	bind:open={modalOpen}
	{modalHeading}
	{modalLabel}
	on:open
	on:close
	hasScrollingContent
>
	{#if modalImage !== '' && modalImage}
		<div class="modal-content">
			<img src={modalImage} alt={'style rank'} />
			<div>{modalNotes}</div>
		</div>
	{:else}
		<div class="modal-mobile-container">
			<div class="modal-mobile-contents-top">
				<div class="modal-mobile-image">
					<div>
						{#if modalPopoverIconType === 'component'}
							<svelte:component this={modalPopoverIcon} />
						{:else}
							<img src={modalPopoverIcon} alt={modalHeading} />
						{/if}
					</div>
				</div>
				<div class="modal-mobile-title">
					{modalHeading.substring(0, 64)}
				</div>

				{#if modalLabel !== ''}
					<div class="modal-mobile-subtitle">{modalLabel.substring(0, 64)}</div>
				{/if}
			</div>
		</div>
	{/if}
</Modal>

<HunterNotesPage displayTOC={true}>
	<div class={modalBlurClass}>
		<SectionHeadingTopLevel title={'Style Rank'} />
		<p class="spaced-paragraph">
			Upon reaching HR5, you can unlock Style Rank. This process is initiated
			automatically when you approach the Guild Master after achieving HR5.
		</p>
		<CenteredFigure
			width={'100%'}
			type="file"
			src={GuildMaster}
			alt="Guild Master"
			figcaption="The Guild Master."
		/>
		<p>
			Style Rank grants several benefits, including special SR Skills, two new
			movesets per weapon type (three in total at G Rank with Extreme Style),
			and access to Hardcore (HC) monsters. You can test various weapons' SR
			movesets at the bed in your house.
		</p>
		<section>
			<SectionHeading level={2} title="Weapon Styles" />
			<div>
				<p class="spaced-paragraph">
					To enable the new movesets, use any large box that allows you to
					change gear, such as the one in the <InlineTooltip
						icon={LocationIcons.find((e) => e.name === 'Blacksmith')?.icon}
						iconType="file"
						text="Blacksmith"
						tooltip="Location"
					/>. Go to the section where you normally choose equipment and select
					the newly added final option.
				</p>
				<p class="spaced-paragraph">
					This will bring up a new menu where you should select your weapon
					type, followed by the second option, and then your preferred style.
				</p>
				<CenteredFigure
					width={'100%'}
					type="file"
					src={SRStatus}
					alt="SR Status"
					figcaption="SR Status."
				/>
				<p class="spaced-paragraph">
					At HR5, you will have access to Heaven Style and Storm Style. For most
					weapons at this rank, Storm Style is the best, though there may be
					some variations. You can swap styles at any time and are not locked
					into any of the three initially available options.
				</p>
				<div class="table">
					<DataTable
						useStaticWidth
						id="weapon-styles-dom"
						sortable
						zebra
						title="Weapon Styles Usability Ratings"
						size="medium"
						headers={[
							{ key: 'weapon', value: 'Weapon' },
							{ key: 'earth', value: 'Earth' },
							{ key: 'heaven', value: 'Heaven' },
							{ key: 'storm', value: 'Storm' },
						]}
						rows={weaponStyles}
						><Toolbar
							><div class="toolbar">
								<CopyButton
									iconDescription={'Copy as CSV'}
									text={getCSVFromArray(weaponStyles)}
								/>
								<Button
									kind="tertiary"
									icon={Download}
									on:click={() =>
										downloadDomAsPng('weapon-styles-dom', 'weapon-styles')}
									>Download</Button
								>
							</div>
						</Toolbar>

						<svelte:fragment slot="cell" let:cell>
							{#if cell.key === 'weapon'}
								<InlineTooltip
									text={cell.value}
									tooltip="Weapon"
									iconType="component"
									icon={getWeaponIcon(cell.value)}
								/>
							{:else}
								<StarRating
									rating={Number.parseFloat(cell.value)}
									maxRating={3}
								/>
							{/if}
						</svelte:fragment>
					</DataTable>
				</div>
				<p class="spaced-paragraph">
					Upon reaching G Rank, interact with the Guild Master again to unlock
					Extreme Style. This style significantly alters weapons compared to
					Storm or Heaven styles and is generally the best-in-slot for every
					weapon class at high-level play. You should switch all weapons to this
					style upon reaching G Rank and unlocking it.
				</p>
				<p class="spaced-paragraph">
					To use any alternative movesets, your Book of Secrets must be
					equipped. If it is disabled, go to the SR menu and choose the first
					option, followed by the first option again, to toggle it back on.
				</p>
			</div>
		</section>

		<section>
			<SectionHeading level={2} title="Hardcore Mode" />
			<div>
				<p class="spaced-paragraph">
					Hardcore (HC) is a toggleable option for SR quests that transforms the
					large monsters into HC monsters. If a quest can be made hardcore, it
					is indicated by a flame icon in the quest list at the top right of its
					name.
				</p>
				<CenteredFigure
					width={'100%'}
					type="file"
					src={HCExample}
					alt="Hardcore monsters quests"
					figcaption="Note that the flame icon itself does not mean the quest is in HC
					mode; you must manually turn HC mode on."
				/>
				<p class="spaced-paragraph">
					You can toggle the HC option on the final screen after selecting a
					quest, where you confirm player numbers, passwords, etc.
				</p>
			</div>
		</section>

		<section>
			<SectionHeading level={2} title="Hardcore Monsters" />
			<div>
				<p>
					If you spend a significant amount of time at HR5, you will likely need
					<InlineTooltip
						icon={getItemIcon('Ticket')}
						iconType="component"
						text="Weapon Souls"
						tooltip="Item"
					/> and Hardcore Carves for certain upgrades. These are obtained by fighting
					monsters within a specific rank band with the HC option enabled. Enabling
					HC transforms a monster into its Hardcore variant, which adds a new 5%
					carve item to the monster and provides a <InlineTooltip
						icon={getItemIcon('Ticket')}
						iconType="component"
						text="Weapon Soul"
						tooltip="Item"
					/> based on the type of monster.
				</p>

				<UnorderedList>
					<ListItem><p>Low Soul: HR1-2</p></ListItem>
					<ListItem><p>Mid Soul: HR3-4</p></ListItem>
					<ListItem><p>High Soul: HR5</p></ListItem>
					<ListItem><p>Top Soul: Gou HR5</p></ListItem>
				</UnorderedList>

				<p class="spaced-paragraph">
					Hardcore monsters are more powerful versions with new skills,
					abilities, and appearances. Many HC monsters have enhanced levels of
					Roars, Wind, or Quake, requiring Super Earplugs, Quake Res +2, and
					Dragon Wind Breaker for protection.
				</p>
				<CenteredFigure
					width={'100%'}
					type="file"
					src={HCOption}
					alt="Hardcore monster option"
					figcaption="Toggling HC Mode on."
				/>
				<p class="spaced-paragraph">
					Completing an HC quest grants SR <InlineTooltip
						icon={getItemIcon('Ticket')}
						iconType="component"
						text="Weapon Souls"
						tooltip="Item"
					/> (a ticket item), used for crafting specific weapons and armor (see Hiden
					Sets). Using a weapon within the Rarity Limit stated in your Book of Secrets
					provides a multiplier for HRP (3x), SRP (4x), Zeny (1.5x), and GCP (1.5x),
					making HC quests an excellent way to gain ranks. As of <InlineTooltip
						icon={gameInfo.find((e) => e.name === 'Monster Hunter Frontier G')
							?.icon}
						iconType="file"
						text="G10"
						tooltip="Game"
					/>, most of these multipliers are less relevant and mainly affect your
					Partner's Rank and Weapon Rank.
				</p>
				<p class="spaced-paragraph">
					The only difference in a quest set to Hardcore is the monsters
					themselves. If a quest has multiple large monsters, they will all
					become their Hardcore variants.
				</p>
				<p class="spaced-paragraph">
					G Rank quests receive the same effects as normal Hunter Rank HC
					quests, with different multipliers applying to G Rank points and
					currency (GRP, GSRP, Gzeny).
				</p>
			</div>
		</section>
		<section>
			<SectionHeading level={2} title="Hardcore Carves" />
			<div>
				<p class="spaced-paragraph">
					Hardcore (HC) Carves are an additional type of carve available from HC
					monsters. Generally, each type of monster has one HC carve per tier
					(HR1-2, HR3-4, HR5-6, G Rank).
				</p>
				<p class="spaced-paragraph">
					The standard way to obtain HC Carves is by killing and carving a
					monster. However, some event quests also reward them as normal
					rewards. The standard rate for an HC Carve is 5%, and for a GHC Carve,
					it is 2%.
				</p>
				<p class="spaced-paragraph">
					HC Carves are commonly used across gear, serving a similar role to
					low-percentage carves like <InlineTooltip
						icon={getItemIcon('Ball')}
						iconType="component"
						text="Gems"
						tooltip="Item"
					/> or <InlineTooltip
						icon={getItemIcon('Plate')}
						iconType="component"
						text="Plates"
						tooltip="Item"
					/> introduced since Hardcore Monsters were added.
				</p>
				<p class="spaced-paragraph">
					When you carve an HC Carve, you will hear a special jingle distinct
					from the normal carving success sound. HC Carves can also be carved by
					your Partner and will appear in the rewards after a quest (without the
					jingle). While on Premium, the Legendary Pugi can also obtain them
					similarly to your Partner.
				</p>
				<p class="spaced-paragraph">
					N Points and Festival Points can be spent on HC Carves, typically
					costing around 100 N Points or 500 Festival Points minimum. The <InlineTooltip
						icon={LocationIcons.find((e) => e.name === 'Diva Defense')?.icon}
						iconType="file"
						text="Diva Defense"
						tooltip="Event"
					/> event occasionally allows you to buy carves with standard GCP if you
					have the relevant Prayer active. See the <Link
						inline
						href="/hunter-notes#events">Events</Link
					> section for more details on <InlineTooltip
						icon={LocationIcons.find((e) => e.name === 'Festi')?.icon}
						iconType="file"
						text="Festival"
						tooltip="Event"
					/> and <InlineTooltip
						icon={LocationIcons.find((e) => e.name === 'Diva Defense')?.icon}
						iconType="file"
						text="Diva Defense"
						tooltip="Event"
					/>.
				</p>
				<p class="spaced-paragraph">
					HC Carves are unique because they are outside the normal carve pool.
					When you carve a monster, you first roll for the pool from which you
					get an item and then for the item itself.
				</p>
				<div class="table">
					<DataTable
						useStaticWidth
						title="HR2 Lavasioth Carve Tables"
						id="lavasioth-carves-dom"
						sortable
						zebra
						size="medium"
						headers={[
							{ key: 'carve', value: 'Carve' },
							{ key: 'chance', value: 'Chance' },
							{ key: 'pool', value: 'Pool' },
						]}
						rows={lavasiothCarves}
						><Toolbar
							><div class="toolbar">
								<CopyButton
									iconDescription={'Copy as CSV'}
									text={getCSVFromArray(lavasiothCarves)}
								/>
								<Button
									kind="tertiary"
									icon={Download}
									on:click={() =>
										downloadDomAsPng(
											'lavasioth-carves-dom',
											'lavasioth-carves',
										)}>Download</Button
								>
							</div>
						</Toolbar>

						<svelte:fragment slot="cell" let:cell>
							<p>{cell.value}</p>
						</svelte:fragment>
					</DataTable>
				</div>
				<p>
					For anything that can cause you to reroll carves, such as Caravan Gem
					skills, you will also roll for the table on the second attempt. For
					example, if you initially carved a <InlineTooltip
						icon={getItemIcon('Scale')}
						iconType="component"
						text="Lavasioth Scale"
						tooltip="Item"
						iconColor={ItemColors.find((e) => e.name === 'Yellow')?.value}
					/> and got a reroll, you would have a 5% chance of the new carve being
					an HC item and a 95% chance of it being either a <InlineTooltip
						iconColor={ItemColors.find((e) => e.name === 'Gray')?.value}
						icon={getItemIcon('Monster Part')}
						iconType="component"
						text="Shell"
						tooltip="Item"
					/> (73%) or a <InlineTooltip
						icon={getItemIcon('Claw')}
						iconColor={ItemColors.find((e) => e.name === 'Gray')?.value}
						iconType="component"
						text="Fang"
						tooltip="Item"
					/>
					(27%).
				</p>
			</div>
		</section>
		<section>
			<SectionHeading level={2} title="Weapon Souls" />
			<div>
				<p class="spaced-paragraph">
					Weapon <InlineTooltip
						icon={getItemIcon('Ticket')}
						iconType="component"
						text="Souls"
						tooltip="Item"
					/> are per-weapon ticket types rewarded for killing any HC monster. Each
					weapon has four different levels of <InlineTooltip
						icon={getItemIcon('Ticket')}
						iconType="component"
						text="Souls"
						tooltip="Item"
					/> based on the rank of the monster fought. For example, fighting a <InlineTooltip
						icon={monsterInfo.find((e) => e.displayName === 'Lavasioth')?.icon}
						iconType="file"
						text="HC Lavasioth"
						tooltip="Monster"
					/> with <InlineTooltip
						icon={getWeaponIcon('Sword and Shield')}
						iconType="component"
						text="Sword and Shield"
						tooltip="Weapon"
					/> would grant a <InlineTooltip
						icon={getItemIcon('Ticket')}
						iconType="component"
						text="SnS Soul (Low)"
						tooltip="Item"
					/>.
				</p>
				<p class="spaced-paragraph">
					Weapon <InlineTooltip
						icon={getItemIcon('Ticket')}
						iconType="component"
						text="Souls"
						tooltip="Item"
					/> are used to craft and upgrade certain weapons and armors. A lot of gear
					during and most decent gear past HR5 will require at least one of these
					to be upgraded or crafted.
				</p>
			</div>
		</section>
		<section>
			<SectionHeading level={2} title="Weapon Ribbons & Merits" />
			<div>
				<p class="spaced-paragraph">
					At GSR1, you gain access to <InlineTooltip
						icon={getItemIcon('Ball')}
						iconType="component"
						text="Ribbons"
						tooltip="Item"
					/>, and at GR500, you gain access to
					<InlineTooltip
						icon={getItemIcon('Coin')}
						iconType="component"
						text="Merits"
						tooltip="Item"
					/>. These function nearly identically to the aforementioned <InlineTooltip
						icon={getItemIcon('Ticket')}
						iconType="component"
						text="Souls"
						tooltip="Item"
					/> but are gained from GHC and normal G Rank quests respectively. Both
					are covered in depth in the Hiden section below.
				</p>
			</div>
		</section>
		<section>
			<SectionHeading level={2} title="Style Rank Skills" />
			<div>
				<p class="spaced-paragraph">
					After achieving Style Rank, you gain access to select a Style Rank
					Skill. These are permanently active buffs similar to armor skills but
					do not occupy any slots. The skills and instructions on how to equip
					them are detailed below.
				</p>
				<div></div>
				<p class="spaced-paragraph">
					You can equip your first skill by going into a weapon's Book of
					Secrets menu, selecting one of the Special effects options, and then
					choosing one of the skills. After reaching GSR100, you will be able to
					equip two skills; until then, you can equip one.
				</p>
				<p class="spaced-paragraph">
					At HR5, you gain the basic Defense Skill. At HR6, you gain various
					Elemental Resistance skills and the first version of Sharpening Up. At
					HR7, you get access to Affinity Up and max Sharpening Up. All the
					Resistance and Defense skills progress naturally as you rank up in G
					Style Rank, with some requiring GSR999 in one or multiple weapons to
					be unlocked or maxed out.
				</p>
				<p class="spaced-paragraph">
					At G Rank, we recommend using Affinity Up, which increases the
					affinity by +20% to +26%, similar to the <InlineTooltip
						icon={getItemIcon('Jewel')}
						iconType="component"
						text="Expert+2"
						tooltip="Armor Skill"
					/> skill.
				</p>
				<p class="spaced-paragraph">
					GSR in <InlineTooltip
						icon={getWeaponIcon('Tonfa')}
						iconType="component"
						text="Tonfa"
						tooltip="Weapon"
					/>, <InlineTooltip
						icon={getWeaponIcon('Switch Axe F')}
						iconType="component"
						text="Switch Axe F"
						tooltip="Weapon"
					/>, and <InlineTooltip
						icon={getWeaponIcon('Magnet Spike')}
						iconType="component"
						text="Magnet Spike"
						tooltip="Weapon"
					/> each add +2% affinity, reaching a maximum of +26%.
				</p>
				<p class="spaced-paragraph">
					Ranking up in GSR unlocks the Conquest Attack and Conquest Defense
					skills.
				</p>
				<p class="spaced-paragraph">
					Achieving GSR999 grants the Passive Master and Secret Technique
					skills.
				</p>
				<p class="spaced-paragraph">
					Having 11 weapons at GSR999 unlocks the Soul Revival skill.
				</p>
				<p class="spaced-paragraph">
					GSR100 in each weapon unlocks a second SR skill slot, allowing for two
					skills simultaneously.
				</p>
				<div class="table">
					<DataTable
						useStaticWidth
						id="style-rank-skills-dom"
						sortable
						zebra
						size="medium"
						headers={[
							{ key: 'skill', value: 'Skill' },
							{ key: 'category', value: 'Category' },
							{ key: 'description', value: 'Description' },
						]}
						rows={styleRankSkills}
						><Toolbar
							><div class="toolbar">
								<CopyButton
									iconDescription={'Copy as CSV'}
									text={getCSVFromArray(styleRankSkills)}
								/>
								<Button
									kind="tertiary"
									icon={Download}
									on:click={() =>
										downloadDomAsPng(
											'style-rank-skills-dom',
											'style-rank-skills',
										)}>Download</Button
								>
							</div>
						</Toolbar>

						<svelte:fragment slot="cell" let:cell>
							{#if cell.key === 'skill' && styleRankSkills.find((e) => e.skill === cell.value)?.image !== undefined}
								<Button
									on:click={() => changeModal(cell, 'Style Rank Skills')}
									size="small"
									icon={Image}
									kind="ghost">{cell.value}</Button
								>
							{:else}
								<p>{cell.value}</p>
							{/if}
						</svelte:fragment>
					</DataTable>
				</div>
			</div>
		</section>
		<section>
			<SectionHeading level={2} title="GSR Effects" />
			<div>
				<div class="table">
					<DataTable
						useStaticWidth
						id="gsr-effects-dom"
						sortable
						zebra
						size="medium"
						headers={[
							{ key: 'GSR', value: 'GSR' },
							{ key: 'effects', value: 'Effects' },
						]}
						rows={specialEffectsGSR}
						><Toolbar
							><div class="toolbar">
								<CopyButton
									iconDescription={'Copy as CSV'}
									text={getCSVFromArray(specialEffectsGSR)}
								/>
								<Button
									kind="tertiary"
									icon={Download}
									on:click={() =>
										downloadDomAsPng('gsr-effects-dom', 'gsr-effects')}
									>Download</Button
								>
							</div>
						</Toolbar>

						<svelte:fragment slot="cell" let:cell>
							<p>{cell.value}</p>
						</svelte:fragment>
					</DataTable>
				</div>
			</div>
		</section>
		<section>
			<SectionHeading level={2} title="GSR Weapon Unlock Bonuses" />
			<div>
				<div class="table">
					<DataTable
						useStaticWidth
						id="gsr-weapon-unlock-bonuses-dom"
						sortable
						zebra
						size="medium"
						headers={[
							{ key: 'unlocks', value: 'Unlocks' },
							{ key: 'bonus', value: 'Bonus' },
						]}
						rows={weaponUnlockGSRBonus}
						><Toolbar
							><div class="toolbar">
								<CopyButton
									iconDescription={'Copy as CSV'}
									text={getCSVFromArray(weaponUnlockGSRBonus)}
								/>
								<Button
									kind="tertiary"
									icon={Download}
									on:click={() =>
										downloadDomAsPng(
											'gsr-weapon-unlock-bonuses-dom',
											'gsr-weapon-unlock-bonuses',
										)}>Download</Button
								>
							</div>
						</Toolbar>

						<svelte:fragment slot="cell" let:cell>
							<p>{cell.value}</p>
						</svelte:fragment>
					</DataTable>
				</div>
			</div>
		</section>
		<section>
			<SectionHeading level={2} title="Style Rank Stats" />
			<div>
				<p class="spaced-paragraph">
					The Book of Secrets status page shows everything related to Style
					Rank. It can be accessed through the Equipment Box. The most notable
					of these stats are the Attack Up and Attack Ceiling skills.
				</p>
				<div class="table">
					<DataTable
						useStaticWidth
						id="style-rank-stats-dom"
						sortable
						zebra
						size="medium"
						headers={[
							{ key: 'stat', value: 'Stat' },
							{ key: 'description', value: 'Description' },
							{ key: 'category', value: 'Category' },
						]}
						rows={styleRankStats}
						><Toolbar
							><div class="toolbar">
								<CopyButton
									iconDescription={'Copy as CSV'}
									text={getCSVFromArray(styleRankStats)}
								/>
								<Button
									kind="tertiary"
									icon={Download}
									on:click={() =>
										downloadDomAsPng(
											'style-rank-stats-dom',
											'style-rank-stats',
										)}>Download</Button
								>
							</div>
						</Toolbar>

						<svelte:fragment slot="cell" let:cell>
							<p>{cell.value}</p>
						</svelte:fragment>
					</DataTable>
				</div>
			</div>
		</section>
		<section>
			<SectionHeading level={2} title="Attack Ceiling" />
			<div>
				<p class="spaced-paragraph">
					The Attack Ceiling does not directly buff your Attack but instead
					allows you to have higher values of attack without hitting a ceiling.
				</p>
				<p class="spaced-paragraph">
					It is incredibly important that you raise the Attack Ceiling while you
					progress through G Rank, the default limit of 800 is incredibly easy
					to reach in recent updates. <InlineTooltip
						icon={gameInfo.find((e) => e.name === 'Monster Hunter Frontier Z')
							?.icon}
						iconType="file"
						text="Z1"
						tooltip="Game"
					/> especially adds a lot of skills that stack attack and considering Zenith
					Weapons have up to 580 base True Raw and that GSR1 already adds +50 True
					Raw and skills can instantly add +150 True Raw you will find yourself going
					past 800 easily.
				</p>
				<p class="spaced-paragraph">
					Each weapon in Monster Hunter has its own internal multiplier that is
					applied to its True Raw value, you can divide the displayed attack on
					a weapon to see their True Raw but every weapon has the same limits
					based upon your Attack Ceiling level.
				</p>
				<div class="table">
					<DataTable
						useStaticWidth
						id="weapons-attack-ceiling-dom"
						sortable
						zebra
						size="medium"
						headers={[
							{ key: 'weapon', value: 'Weapon' },
							{ key: 'multiplier', value: 'Bloat Multiplier' },
							{ key: 'defaultMax', value: 'Default Maximum' },
							{ key: 'finalMax', value: 'Final Maximum' },
						]}
						rows={weaponsMaxAttack}
						><Toolbar
							><div class="toolbar">
								<CopyButton
									iconDescription={'Copy as CSV'}
									text={getCSVFromArray(weaponsMaxAttack)}
								/>
								<Button
									kind="tertiary"
									icon={Download}
									on:click={() =>
										downloadDomAsPng(
											'weapons-attack-ceiling-dom',
											'weapons-attack-ceiling',
										)}>Download</Button
								>
							</div>
						</Toolbar>

						<svelte:fragment slot="cell" let:cell>
							{#if cell.key === 'weapon'}
								<InlineTooltip
									text={cell.value}
									tooltip="Weapon"
									iconType="component"
									icon={getWeaponIcon(cell.value)}
								/>
							{:else}
								<p>{cell.value}</p>
							{/if}
						</svelte:fragment>
					</DataTable>
				</div>
				<p class="spaced-paragraph">
					For example, if you had no attack ceiling levels while using a <InlineTooltip
						icon={getWeaponIcon('Sword and Shield')}
						iconType="component"
						text="Sword and Shield"
						tooltip="Weapon"
					/>
					that was pushed to 3,080 Attack (2,200 True Raw) by your skills, you would
					only ever have 1,120 Attack or 800 True Raw. This is because it hits the
					default 800 True Raw cap causing you to lose 1,960 Attack or 1,400 True
					Raw.
				</p>
				<p class="spaced-paragraph">
					If you had 22 levels your ceiling 2,352 Attack or 1,680 True Raw which
					means that in this case you would be actively losing 728 Attack or 520
					True Raw.
				</p>
				<p class="spaced-paragraph">
					Finally if you had 35 levels your ceiling would be 3,080 Attack or
					2,200 True Raw, as this covers your 3,080 Attack perfectly you would
					get all of it. Of course if you then used a <InlineTooltip
						icon={getItemIcon('Sac')}
						iconType="component"
						text="Power Pill"
						tooltip="Item"
						iconColor={ItemColors.find((e) => e.name === 'Red')?.value}
					/> or were affected by a Demon Horn you would suddenly be over your ceiling
					and would again be losing some of your attack power.
				</p>
				<p class="spaced-paragraph">
					A good starting number to aim at is around 50 levels, this will cover
					most skills before Hiden including being buffed by <InlineTooltip
						icon={getWeaponIcon('Hunting Horn')}
						iconType="component"
						text="Hunting Horns"
						tooltip="Weapon"
					/> and having <InlineTooltip
						icon={getItemIcon('Jewel')}
						iconType="component"
						text="Adrenaline"
						tooltip="Armor Skill"
					/> active. Later game you will want to push much higher and should grind
					it up to around 190 to cover most use cases with late game skill sets.
					The <Link href="/tools/calculator/damage" inline
						>Damage Calculator</Link
					> automatically calculates your required number of My Missions and Attack
					Ceiling level based on values and skills you might want to utilise if you
					want an exact number.
				</p>
				<p class="spaced-paragraph">
					Increasing the value of the Attack Ceiling is done by completing My
					Missions, these are detailed in the next section below.
				</p>
			</div>
		</section>
		<section>
			<SectionHeading level={2} title="My Mission" />
			<div>
				<p class="spaced-paragraph">
					My Mission is a series of objectives that are unlocked after you hit
					HR6 and unlock Style Rank. There are two types of these missions, the
					first are the Medal Series that are purely vanity oriented and do not
					have any notable effects.
				</p>
				<p class="spaced-paragraph">
					The second series is the Weapon Series which are used to enhance four
					different skills on all weapon types.
				</p>
				<section>
					<SectionHeading level={3} title="Medal Series" />
					<div>
						<p class="spaced-paragraph">
							The Medal Series are the purely vanity challenges that have an
							associated Hunter Navigation Task that gives 30x <InlineTooltip
								icon={getItemIcon('Ticket')}
								iconType="component"
								text="My Mission Tickets"
								tooltip="Item"
							/>
							that allows you to skip the Weapon Series tasks. These tasks can be
							taken in your house in the SR Display Room which has a bullseye icon
							next to it, this unlocks at HR5.
						</p>
					</div>
				</section>
				<section>
					<SectionHeading level={3} title="Weapon Series" />
					<div>
						<p class="spaced-paragraph">
							As mentioned the Weapon Series are global across all your weapons,
							you can view your active My Mission by looking at your Book of
							Secrets. This will display the task number you are on, the target
							and any progress towards the goal. This progess is saved even if
							you log out.
						</p>
						<p class="spaced-paragraph">
							Both the standard Hunter Rank and G Rank quest NPCs have options
							dedicated towards these missions, selecting it will automatically
							search for relevant quests that meet the requirements. But you
							will still need to toggle HC manually if it is required by the
							mission you are on.
						</p>
						<p class="spaced-paragraph">
							The number of My Missions you should realistically take varies
							massively depending on your level of progression, the following
							are some estimates to aim for that give you wiggle room and should
							cover most skill sets used at that point and most play styles:
						</p>

						<div class="table">
							<DataTable
								title="Recommended Attack Ceilings"
								useStaticWidth
								id="recommended-attack-ceiling-dom"
								sortable
								zebra
								size="medium"
								headers={[
									{ key: 'set', value: 'Set' },
									{ key: 'value', value: 'Value', minWidth: '8rem' },
								]}
								rows={recommendedAttackCeiling}
								><Toolbar
									><div class="toolbar">
										<CopyButton
											iconDescription={'Copy as CSV'}
											text={getCSVFromArray(recommendedAttackCeiling)}
										/>
										<Button
											kind="tertiary"
											icon={Download}
											on:click={() =>
												downloadDomAsPng(
													'recommended-attack-ceiling-dom',
													'recommended-attack-ceiling',
												)}>Download</Button
										>
									</div>
								</Toolbar>

								<svelte:fragment slot="cell" let:cell>
									{#if cell.key === 'weapon'}
										<InlineTooltip
											text={cell.value}
											tooltip="Weapon"
											iconType="component"
											icon={getWeaponIcon(cell.value)}
										/>
									{:else}
										<p>{cell.value}</p>
									{/if}
								</svelte:fragment>
							</DataTable>
						</div>

						<p class="spaced-paragraph">
							Using the <Link href="/tools/calculator/damage" inline
								>Damage Calculator</Link
							> will provide an accurate rating based on the entered skills. The
							previous broad estimates cover all possible scenarios to prevent losing
							raw damage.
						</p>
						<p class="spaced-paragraph">
							Each mission given can be skipped using certain items.
							Specifically, you can use <InlineTooltip
								icon={getItemIcon('Ticket')}
								iconType="component"
								text="My Mission Tickets"
								tooltip="Item"
							/>, which are fairly rare, or spend lottery coins. You can find
							the skip option with the Guild Master from whom you get SRs and
							GSRs.
						</p>
						<p class="spaced-paragraph">
							Premium days will give you 40 <InlineTooltip
								icon={getItemIcon('Ticket')}
								iconType="component"
								text="My Mission Tickets"
								tooltip="Item"
							/>, and you can trade junk weapon tickets obtained from the
							lottery system for them with the combination NPC.
						</p>
					</div>
				</section>
			</div>
		</section>

		<section>
			<SectionHeading level={2} title="Hiden" />
			<div>
				<div></div>
				<p class="spaced-paragraph">
					All weapons in the game have several associated Hiden Armors and
					Decorations. These provide points in their weapon's specific Weapon
					Tech Skill, which is tailored to each weapon type. This skill always
					grants <InlineTooltip
						icon={getItemIcon('Jewel')}
						iconType="component"
						text="Super High-Grade Earplugs"
						tooltip="Armor Skill"
					/> and an attack multiplier of at least 1.2x for Melee and 1.3x for Ranged.
				</p>
				<p class="spaced-paragraph">
					Having one of these skills is commonly referred to as having 'Hiden'
					for that weapon. Achieving Hiden means equipping at least 5
					decorations for that specific Hiden type. These decorations are made
					by converting maxed-out Hiden Armors into Decorations.
				</p>
			</div>
		</section>
		<section>
			<SectionHeading level={2} title="Weapon Tech Skills" />
			<div>
				<p class="spaced-paragraph">
					All weapon types have an associated Weapon Tech skill, which
					significantly buffs its corresponding weapon type. These skills are
					detailed below.
				</p>

				<div class="table">
					<DataTable
						useStaticWidth
						id="weapons-tech-skills-dom"
						sortable
						zebra
						size="medium"
						headers={[
							{ key: 'weapon', value: 'Weapon' },
							{ key: 'skill', value: 'Skill' },
							{ key: 'description', value: 'Description' },
						]}
						rows={maxWeaponTechSkills}
						><Toolbar
							><div class="toolbar">
								<CopyButton
									iconDescription={'Copy as CSV'}
									text={getCSVFromArray(maxWeaponTechSkills)}
								/>
								<Button
									kind="tertiary"
									icon={Download}
									on:click={() =>
										downloadDomAsPng(
											'weapons-tech-skills-dom',
											'weapons-tech-skills',
										)}>Download</Button
								>
							</div>
						</Toolbar>

						<svelte:fragment slot="cell" let:cell>
							{#if cell.key === 'weapon'}
								<InlineTooltip
									text={cell.value}
									tooltip="Weapon"
									iconType="component"
									icon={getWeaponIcon(cell.value)}
								/>
							{:else}
								<p>{cell.value}</p>
							{/if}
						</svelte:fragment>
					</DataTable>
				</div>
				<p class="spaced-paragraph">
					Hiden Armor granting these skills becomes available at HR6 but cannot
					be completed until GR500.
				</p>
			</div>
		</section>
		<section>
			<SectionHeading level={2} title="Hiden Decorations" />
			<div>
				<p class="spaced-paragraph">
					Hiden Decorations are per-weapon enhancements that grant a specific
					weapon type's associated Hiden Skill (e.g., Great Sword Tech). These
					decorations are refined from Hiden Armor in the same manner as other
					GX decorations.
				</p>
				<p class="spaced-paragraph">
					Hiden Skills provide at least a 20% increase in flat Attack along with
					other weapon-specific buffs. Having Hiden is practically compulsory
					for tackling endgame content, such as <InlineTooltip
						icon={getMonsterIcon('Berserk Raviente')}
						iconType="file"
						text="Berserk Raviente"
						tooltip="Monster"
					/> or solo runs of Z4 Zeniths. Dedicated players often have multiple sets
					of decorations for different scenarios.
				</p>
				<p class="spaced-paragraph">
					To upgrade armor into Hiden Decorations, you can choose between White
					(which upgrades into either White or Black) or Red (which upgrades
					into either Red or Blue) pieces. All pieces convert into the same
					final decorations, so a full Black set or five maxed Black Helmets
					will result in identical decorations. The primary difference is the
					materials needed for upgrading each piece.
				</p>
				<p class="spaced-paragraph">
					There are four colors of Hiden Decorations for each weapon: <InlineTooltip
						icon={getItemIcon('Jewel')}
						iconType="component"
						text="White"
						tooltip="Decoration"
					/>, <InlineTooltip
						icon={getItemIcon('Jewel')}
						iconType="component"
						text="Black"
						tooltip="Decoration"
						iconColor={ItemColors.find((e) => e.name === 'Gray')?.value}
					/>, <InlineTooltip
						icon={getItemIcon('Jewel')}
						iconType="component"
						text="Red"
						iconColor={ItemColors.find((e) => e.name === 'Red')?.value}
						tooltip="Decoration"
					/>, and <InlineTooltip
						icon={getItemIcon('Jewel')}
						iconType="component"
						text="Blue"
						tooltip="Decoration"
						iconColor={ItemColors.find((e) => e.name === 'Blue')?.value}
					/>. Each color grants different additional skill points and is refined
					from its corresponding armor type.
				</p>

				<p class="spaced-paragraph">
					Creating Hiden Decorations lasts until late G Rank. You can start
					working on Hiden Armor from HR5 but cannot finish it until GR500.
					Hiden Armor requires multiple HC, GHC, and G1% carves, along with
					Weapon <InlineTooltip
						icon={getItemIcon('Ticket')}
						iconType="component"
						text="Souls"
						tooltip="Item"
					/>, <InlineTooltip
						icon={getItemIcon('Ball')}
						iconType="component"
						text="Ribbons"
						tooltip="Item"
					/> and
					<InlineTooltip
						icon={getItemIcon('Coin')}
						iconType="component"
						text="Merits"
						tooltip="Item"
					/>. These function nearly identically to the aforementioned obtained
					from hunting HC, GHC, and standard G Rank monsters.
				</p>

				<p class="spaced-paragraph">
					Each of the four colored sets converts into different gem types: White
					Tiger, Military Black, Crimson Bird, and Azure Dragon. There are two
					varieties of Hiden decorations: standard Hiden and True Hiden.
				</p>

				<p class="spaced-paragraph">
					True Hiden gems are upgraded versions of the original Hiden
					Decorations, featuring G Rank Skill Points. Crafting a True Hiden gem
					requires one of each of the four colors of standard Hiden Decorations,
					making the process equivalent to creating four full sets of Hiden
					decorations.
				</p>

				<div class="mermaid-container">
					<!-- TODO: not responsive-->
					{#if !browser}
						<Loading withOverlay={false} />
					{:else}
						<pre><code class="mermaid2" bind:this={container2} /></pre>
					{/if}
				</div>

				<p class="spaced-paragraph">
					Despite being superior to standard Hiden decorations, True Hiden gems
					should not be your primary focus. They are beneficial for optimizing a
					set, but it is recommended to have a complete Hiden set before
					grinding for True Hiden gems.
				</p>

				<p class="spaced-paragraph">
					With the introduction of <InlineTooltip
						icon={gameInfo.find((e) => e.name === 'Monster Hunter Frontier Z')
							?.icon}
						iconType="file"
						text="Z1"
						tooltip="Game"
					/>, it is now possible to gain extra Skill Slots. This makes having
					relevant skills on your Hiden decorations more valuable, as a set of
					decorations can effectively provide two fixed skills for any set. If
					you use <InlineTooltip
						icon={getItemIcon('Jewel')}
						iconType="component"
						text="Solid Determination"
						tooltip="Armor Skill"
					/>, consider these gems, as <InlineTooltip
						icon={getItemIcon('Jewel')}
						iconType="component"
						text="Solid Determination"
						tooltip="Armor Skill"
					/> Decorations take up five slots, leaving only five slots for Hiden and
					<InlineTooltip
						icon={getItemIcon('Jewel')}
						iconType="component"
						text="Solid Determination"
						tooltip="Armor Skill"
					/> sets.
				</p>

				<p class="spaced-paragraph">
					To determine the best decoration for your weapon, check the gear of
					leaderboard runs and compare.
				</p>

				<p class="spaced-paragraph">
					For most weapons, avoid Hiden Gems that grant a specific skill
					outright. Some skills may push out more desirable skills or overlap.
					For instance, multiple skills can grant Affinity or <InlineTooltip
						icon={getItemIcon('Jewel')}
						iconType="component"
						text="Fencing+2"
						tooltip="Armor Skill"
					/>, so you don't want to accumulate enough points to trigger those
					alone. Certain weapons, like <InlineTooltip
						icon={getWeaponIcon('Hammer')}
						iconType="component"
						text="Hammer"
						tooltip="Weapon"
					/>, <InlineTooltip
						icon={getWeaponIcon('Great Sword')}
						iconType="component"
						text="Great Sword"
						tooltip="Weapon"
					/>, <InlineTooltip
						icon={getWeaponIcon('Sword and Shield')}
						iconType="component"
						text="Sword and Shield"
						tooltip="Weapon"
					/>, or <InlineTooltip
						icon={getWeaponIcon('Bow')}
						iconType="component"
						text="Bow"
						tooltip="Weapon"
					/>, may always benefit from a single skill (<InlineTooltip
						icon={getItemIcon('Jewel')}
						iconType="component"
						text="Focus"
						tooltip="Armor Skill"
					/>, <InlineTooltip
						icon={getItemIcon('Jewel')}
						iconType="component"
						text="Elemental Attack"
						tooltip="Armor Skill"
					/>,
					<InlineTooltip
						icon={getItemIcon('Jewel')}
						iconType="component"
						text="Auto-Reload"
						tooltip="Armor Skill"
					/>), making True Hiden decorations less crucial for them.
				</p>

				<p class="spaced-paragraph">
					Although <InlineTooltip
						icon={getItemIcon('Jewel')}
						iconType="component"
						text="Elemental Attack"
						tooltip="Armor Skill"
					/> is desirable for <InlineTooltip
						icon={getWeaponIcon('Sword and Shield')}
						iconType="component"
						text="Sword and Shield"
						tooltip="Weapon"
					/>, it is not essential, unlike <InlineTooltip
						icon={getItemIcon('Jewel')}
						iconType="component"
						text="Focus"
						tooltip="Armor Skill"
					/> for a <InlineTooltip
						icon={getWeaponIcon('Great Sword')}
						iconType="component"
						text="Great Sword"
						tooltip="Weapon"
					/>. If crafting <InlineTooltip
						icon={getWeaponIcon('Sword and Shield')}
						iconType="component"
						text="Sword and Shield"
						tooltip="Weapon"
					/> decorations, consider making six instead of five to achieve optimal
					min-maxing.
				</p>

				<p class="spaced-paragraph">
					If your weapon doesn't come with a specific skill and you're planning
					ahead, it is sensible to obtain at least one of each of the four
					colors. This allows you to create a True Hiden decoration when needed
					and avoids issues with fixed skills interfering with sets.
					Alternatively, committing to three and two or similar combinations can
					also help prevent unwanted skills.
				</p>

				<p class="spaced-paragraph">
					When crafting True Hiden Decorations and considering <InlineTooltip
						icon={getItemIcon('Jewel')}
						iconType="component"
						text="Determination"
						tooltip="Armor Skill"
					/>, avoid including <InlineTooltip
						icon={getItemIcon('Jewel')}
						iconType="component"
						text="Issen"
						tooltip="Armor Skill"
					/> or <InlineTooltip
						icon={getItemIcon('Jewel')}
						iconType="component"
						text="Sniping"
						tooltip="Armor Skill"
					/> on True Hiden decorations. <InlineTooltip
						icon={getItemIcon('Jewel')}
						iconType="component"
						text="Sniping"
						tooltip="Armor Skill"
					/> is acceptable since the auto-reload part still applies, but <InlineTooltip
						icon={getItemIcon('Jewel')}
						iconType="component"
						text="Issen"
						tooltip="Armor Skill"
					/> is entirely negated by <InlineTooltip
						icon={getItemIcon('Jewel')}
						iconType="component"
						text="Determination"
						tooltip="Armor Skill"
					/> and becomes useless.
				</p>
			</div>
		</section>
		<section>
			<SectionHeading
				level={2}
				title="Grind Process: Souls, Ribbons, and Merits"
			/>
			<div>
				<p class="spaced-paragraph">
					Whenever you hunt an HC monster, you will gain a <InlineTooltip
						icon={getItemIcon('Ticket')}
						iconType="component"
						text="Soul"
						tooltip="Item"
					/> for the weapon used in that quest (e.g., LS on Gou HC grants a <InlineTooltip
						icon={getItemIcon('Ticket')}
						iconType="component"
						text="LS Soul (Top)"
						iconColor={ItemColors.find((e) => e.name === 'Blue')?.value}
						tooltip="Item"
					/>. These are used to create the base Hiden sets.
				</p>
				<p class="spaced-paragraph">
					To fully upgrade a Hiden set, you must reach G Rank to get <InlineTooltip
						icon={getItemIcon('Ball')}
						iconType="component"
						text="Ribbons"
						tooltip="Item"
					/> and G Rank 500 to start getting <InlineTooltip
						icon={getItemIcon('Coin')}
						iconType="component"
						text="Merits"
						tooltip="Item"
					/>.
				</p>
				<p>
					<strong>Hunter Rank:</strong>
				</p>
				<UnorderedList>
					<ListItem><p>HR1-2 HC: Low Souls</p></ListItem>
					<ListItem><p>HR3-4 HC: Mid Souls</p></ListItem>
					<ListItem><p>HR5 HC: High Souls</p></ListItem>
					<ListItem><p>Gou HC: Top Souls</p></ListItem>
				</UnorderedList>
				<p>
					<strong>G Style Rank:</strong>
				</p>
				<UnorderedList>
					<ListItem>
						<p class="paragraph-with-icon">
							<StarFilled />
							<span>1-2 HC: Low Ribbons</span>
						</p></ListItem
					>
					<ListItem>
						<p class="paragraph-with-icon">
							<StarFilled />
							<span>3-4 HC: Mid Ribbons</span>
						</p></ListItem
					>
					<ListItem>
						<p class="paragraph-with-icon">
							<StarFilled />
							<span>5-8 HC: High Ribbons</span>
						</p></ListItem
					>
				</UnorderedList>
				<p>
					<strong>G Rank 500:</strong>
				</p>
				<UnorderedList>
					<ListItem>
						<p class="paragraph-with-icon">
							<StarFilled />
							<span>1-2: Low Merits</span>
						</p></ListItem
					>
					<ListItem>
						<p class="paragraph-with-icon">
							<StarFilled />
							<span>3-4: Mid Merits</span>
						</p></ListItem
					>
					<ListItem>
						<p class="paragraph-with-icon">
							<StarFilled />
							<span>5-8: High Merits</span>
						</p></ListItem
					>
				</UnorderedList>
				<p class="spaced-paragraph">
					Large numbers of <InlineTooltip
						icon={getItemIcon('Ticket')}
						iconType="component"
						text="Souls"
						tooltip="Item"
					/>, <InlineTooltip
						icon={getItemIcon('Ball')}
						iconType="component"
						text="Ribbons"
						tooltip="Item"
					/>, <InlineTooltip
						icon={getItemIcon('Coin')}
						iconType="component"
						text="Merits"
						tooltip="Item"
					/>, HC carves from monsters of all ranks, and 1% carves from G Rank
					monsters are required to completely finish a Hiden set.
				</p>
				<p>The progression can be demonstrated below:</p>
				<div class="mermaid-container">
					<!-- TODO: not responsive-->
					{#if !browser}
						<Loading withOverlay={false} />
					{:else}
						<pre><code bind:this={container} /></pre>
					{/if}
				</div>

				<p class="spaced-paragraph">
					Having a Guuku allows you to convert extra HC or GHC carves into
					additional <InlineTooltip
						icon={getItemIcon('Ticket')}
						iconType="component"
						text="Souls"
						tooltip="Item"
					/> or <InlineTooltip
						icon={getItemIcon('Ball')}
						iconType="component"
						text="Ribbons"
						tooltip="Item"
					/>. This is particularly beneficial for Soul Grinding, as you'll
					frequently obtain HC carves while on premium due to the 10% drop rate
					and the additional 8 rolls provided by Rastas and Legendary Pugi carve
					slots. Carves can be converted into up to 5x Weapon <InlineTooltip
						icon={getItemIcon('Ticket')}
						iconType="component"
						text="Souls"
						tooltip="Item"
					/> or up to 3x Weapon <InlineTooltip
						icon={getItemIcon('Ball')}
						iconType="component"
						text="Ribbons"
						tooltip="Item"
					/>. You can also convert Conquest Gems into <InlineTooltip
						icon={getItemIcon('Coin')}
						iconType="component"
						text="Merits"
						tooltip="Item"
					/> at a 1:1 rate, which is very expensive until late-game. With the rate
					of 8 <InlineTooltip
						icon={getItemIcon('Coin')}
						iconType="component"
						text="Merits"
						tooltip="Item"
					/> per quest, this should be considered only if you have an excess of gems.
				</p>
				<p class="spaced-paragraph">
					Even if you don't use the Guuku for your first Hiden set, you can
					still use it to quickly gather <InlineTooltip
						icon={getItemIcon('Ticket')}
						iconType="component"
						text="Souls"
						tooltip="Item"
					/> and <InlineTooltip
						icon={getItemIcon('Ball')}
						iconType="component"
						text="Ribbons"
						tooltip="Item"
					/> for your second set. If you've used Lottery Coins to obtain Hiden-related
					items, you may also have Raw Soul Stones, which can be converted into 5
					<InlineTooltip
						icon={getItemIcon('Ticket')}
						iconType="component"
						text="Souls"
						tooltip="Item"
					/> of the corresponding rank.
				</p>
				<p class="spaced-paragraph">
					Before starting the Hiden grind, it's important to note that there are
					daily quests for each weapon type that reward Weapon <InlineTooltip
						icon={getItemIcon('Ticket')}
						iconType="component"
						text="Souls"
						tooltip="Item"
					/>. These quests provide 5 Low, 10 Mid, 15 High, and 10 Top <InlineTooltip
						icon={getItemIcon('Ticket')}
						iconType="component"
						text="Souls"
						tooltip="Item"
					/>. While this may not seem like a significant amount, it is
					equivalent to one piece every 19 days, which adds up over time.
				</p>
				<p class="spaced-paragraph">
					Occasionally, there are also daily quests for <InlineTooltip
						icon={getItemIcon('Ball')}
						iconType="component"
						text="Ribbons"
						tooltip="Item"
					/> and <InlineTooltip
						icon={getItemIcon('Coin')}
						iconType="component"
						text="Merits"
						tooltip="Item"
					/>. The Ribbon daily quest gives 6 Low, 10 Mid, and 10 High
					<InlineTooltip
						icon={getItemIcon('Ball')}
						iconType="component"
						text="Ribbons"
						tooltip="Item"
					/>, while the Merit daily quest gives 5 Low, 10 Mid, and 5 High
					<InlineTooltip
						icon={getItemIcon('Coin')}
						iconType="component"
						text="Merits"
						tooltip="Item"
					/>. The Ribbon daily quest is more beneficial than the Merit one, but
					both are equivalent to 3 quests while on premium.
				</p>
				<p class="spaced-paragraph">
					Although the quests might not seem great, they still amount to one
					piece every 10 days. This makes them valuable during rare occasions
					when 5 dailies are given out each day.
				</p>
			</div>
		</section>
		<section>
			<SectionHeading level={2} title="Hiden Stones" />
			<div>
				<p class="spaced-paragraph">
					Since <InlineTooltip
						icon={gameInfo.find((e) => e.name === 'Monster Hunter Frontier Z')
							?.icon}
						iconType="file"
						text="Z2.1"
						tooltip="Game"
					/>, you can convert <InlineTooltip
						icon={getItemIcon('Ticket')}
						iconType="component"
						text="Souls"
						tooltip="Item"
					/>, <InlineTooltip
						icon={getItemIcon('Ball')}
						iconType="component"
						text="Ribbons"
						tooltip="Item"
					/>, or <InlineTooltip
						icon={getItemIcon('Coin')}
						iconType="component"
						text="Merits"
						tooltip="Item"
					/> into cookable stones at the Combiner NPC. The conversion rate is 10:5,
					and the resulting items need to be Guuku Cooked in your house. As this
					is effectively a 2:1 ratio, you should only do this with materials you
					have in great excess for a single weapon class.
				</p>
				<p class="spaced-paragraph">
					<InlineTooltip
						iconColor={ItemColors.find((e) => e.name === 'Orange')?.value}
						icon={getItemIcon('Ore')}
						iconType="component"
						text="Hiden stones"
						tooltip="Item"
					/> are premium items that provide a large number of <InlineTooltip
						icon={getItemIcon('Ticket')}
						iconType="component"
						text="Souls"
						tooltip="Item"
					/>, <InlineTooltip
						icon={getItemIcon('Ball')}
						iconType="component"
						text="Ribbons"
						tooltip="Item"
					/>, or <InlineTooltip
						icon={getItemIcon('Coin')}
						iconType="component"
						text="Merits"
						tooltip="Item"
					/>. There is a stone for each type, and they each give exactly one
					piece worth of their respective items.
				</p>
				<p class="spaced-paragraph">
					To cash in these stones, you must either take a map delivery quest or
					deliver the stone itself. These quests are always solo and disable any
					benefits such as <InlineTooltip
						iconColor={ItemColors.find((e) => e.name === 'Pink')?.value}
						icon={getItemIcon('Sac')}
						iconType="component"
						text="Lucky Charms"
						tooltip="Item"
					/>.
				</p>
				<p class="spaced-paragraph">
					You can have up to three characters on an account in Frontier. Each
					character can get a daily quest, allowing you to do the <InlineTooltip
						icon={getMonsterIcon('Dyuragaua')}
						iconType="file"
						text="Dyuragaua"
						tooltip="Monster"
					/>
					daily quest, which gives 5 Low, 10 Mid, 15 High, and 10 Top <InlineTooltip
						icon={getItemIcon('Ticket')}
						iconType="component"
						text="Souls"
						tooltip="Item"
					/>. Without additional characters, this daily quest is equivalent to
					one <InlineTooltip
						iconColor={ItemColors.find((e) => e.name === 'Orange')?.value}
						icon={getItemIcon('Ore')}
						iconType="component"
						text="Hiden stone"
						tooltip="Item"
					/> every 19 days if done daily. With two characters, it becomes every 10
					days, and with three characters, it's every 7 days.
				</p>
				<p class="spaced-paragraph">
					At 100 points per character, this option is naturally much cheaper
					than gambling with lottery coins or buying <InlineTooltip
						iconColor={ItemColors.find((e) => e.name === 'Orange')?.value}
						icon={getItemIcon('Ore')}
						iconType="component"
						text="Hiden stones"
						tooltip="Item"
					/> with them, but it requires logging into multiple accounts daily to reap
					the benefits.
				</p>
				<p class="spaced-paragraph">
					Since your character slots will never disappear, you can use these
					indefinitely for any relevant dailies. During rare events where 5
					dailies are available each day, you can get 15 dailies per day, enough
					to complete the Soul grind for five pieces of any single weapon.
				</p>
			</div>
		</section>
		<section>
			<SectionHeading level={2} title="SR My Mission Stats" />
			<div>
				<p class="spaced-paragraph">
					At the bottom of the Book of Secrets, there are four stats that do not
					level up naturally. These stats are leveled up by completing assigned
					targets from the My Mission system. To max out these stats, you need
					to complete a total of 180 missions: 110 levels in Attack Ceiling, 20
					in Damage Reduction, 20 in Partial HP, and 20 in Status Recovery.
					These stats are upgraded per weapon, so you will need to complete 180
					missions per weapon type to fully optimize them.
				</p>
				<p class="spaced-paragraph">
					As of <InlineTooltip
						icon={gameInfo.find((e) => e.name === 'Monster Hunter Frontier G')
							?.icon}
						iconType="file"
						text="G10"
						tooltip="Game"
					/>, these stats are no longer per weapon but are instead global across
					all weapons, making it a less daunting task.
				</p>
				<UnorderedList>
					<ListItem
						><p>
							Damage Reduction: 20 levels. Reduces all damage taken by 10% at
							maximum level (0.5% per level).
						</p></ListItem
					>
					<ListItem
						><p>
							Attack Ceiling: It's easy to hit the maximum attack at G Rank, so
							raising this stat is crucial for all G Rank players. There are 180
							levels, each raising the limit by 40 true raw. For example,
							completing 50 missions increases the base from 800 to 2800 true
							raw, allowing 3920 Attack with an <InlineTooltip
								icon={getWeaponIcon('Sword and Shield')}
								iconType="component"
								text="Sword and Shield"
								tooltip="Weapon"
							/> or <InlineTooltip
								icon={getWeaponIcon('Dual Swords')}
								iconType="component"
								text="Dual Swords"
								tooltip="Weapon"
							/> (2800 * 1.4). Any factor that increases the attack value on the
							guild card counts towards this limit, such as the LS Spirit Bar, the
							Tonfa combo meters, DS Sharpens, Demon Drugs, Food Buffs, and SR Attack
							Increase levels. Critical Hits and Weapon Sharpness do not count as
							they do not modify the value on the guild card. You can verify which
							factors contribute to the Attack Ceiling on the <Link
								inline
								href="/tools/calculator/damage">Damage Calculator</Link
							>.
						</p></ListItem
					>
					<ListItem
						><p>
							Partial HP on Hit: 20 levels. Increases the amount of red HP left
							after taking a hit, with each level providing an extra 1% health.
						</p></ListItem
					>
					<ListItem
						><p>
							Status Recovery: 20 levels. Reduces the duration of status effects
							by up to 1 second, with each level reducing time by 1.5 frames (up
							to 30 frames at 30fps).
						</p></ListItem
					>
				</UnorderedList>
			</div>
		</section>
		<section>
			<SectionHeading level={2} title="SR My Mission Challenges" />
			<div>
				<p class="spaced-paragraph">
					My Mission tasks provide passive buffs and increase the maximum attack
					ceiling beyond the default limit of 800 True Raw. With G Rank weapons
					capable of reaching True Raw values of over 600 without any skills or
					additions, these missions become essential. For example, the G Rank
					Akantor <InlineTooltip
						icon={getWeaponIcon('Great Sword')}
						iconType="component"
						text="Great Sword"
						tooltip="Weapon"
					/> has 2548 Raw without any skills. Adding <InlineTooltip
						icon={getItemIcon('Jewel')}
						iconType="component"
						text="Adrenaline+2"
						tooltip="Armor Skill"
					/> pushes it over 3840 Raw. Therefore, aiming for at least 20 levels in
					the attack ceiling is recommended after starting G Rank, and eventually
					pushing for around 80 to 100 total levels. See <Link
						inline
						href="#attack-ceiling">Attack Ceiling table</Link
					> for more details.
				</p>
				<section>
					<SectionHeading level={3} title="Viewing Missions" />
					<div>
						<p>
							You can view your active My Mission by checking your Book of
							Secrets, which displays the task number, target, and progress
							towards the goal. Both standard HR1-999 and G Rank quest NPCs have
							options dedicated to these missions, automatically searching for
							relevant quests that meet the requirements. You will need to
							manually toggle HC if required.
						</p>
					</div>
				</section>
				<section>
					<SectionHeading level={3} title="Level Recommendations" />
					<div>
						<p>
							For endgame play, these challenges are essential. The game
							constantly adds new skills that raise attack, making the original
							800 True Raw limit increasingly irrelevant in G Rank play. To
							determine your specific level requirements, use the
							<Link href="/tools/calculator/damage" inline
								>Damage Calculator</Link
							>. Enter your skills and weapon values in the left column to get
							an accurate calculation. For estimates, enter around 500-600 as
							base true raw for typical late to endgame numbers.
						</p>
					</div>
				</section>
				<section>
					<SectionHeading level={3} title="Vanity Challenges" />
					<div>
						<p class="spaced-paragraph">
							Upon reaching HR5 and starting Style Rank, you gain access to the
							SR Self Challenge Room, which displays all the weapons you have SR
							in and the Hiden Sets you have crafted.
						</p>
						<p class="spaced-paragraph">
							There are two NPCs in this room, R and S:
						</p>
						<UnorderedList>
							<ListItem
								><p>
									R: Gives challenges that grant medals for completion. These
									are mostly vanity quests, but completing them all grants 30 <InlineTooltip
										icon={getItemIcon('Ticket')}
										iconType="component"
										text="My Mission Tickets"
										tooltip="Item"
									/> to skip S's stat quests.
								</p></ListItem
							>
							<ListItem
								><p>
									S: Gives challenges similar to R's and quests that improve the
									stats on your Book of Secrets. These quests will appear on the
									main Quest Giver NPCs when relevant, so you won't need to
									visit this room just for stats.
								</p></ListItem
							>
						</UnorderedList>
						<CenteredFigure
							width={'100%'}
							type="file"
							src={MyMissionS}
							alt="My Mission example"
							figcaption="S asking for 2 Velocidromes."
						/>
					</div>
				</section>
				<section>
					<SectionHeading level={3} title="NPC Menus" />
					<div>
						<p class="spaced-paragraph">
							Talking to either S or R produces a menu with the following
							options:
						</p>
						<UnorderedList>
							<ListItem
								><p>
									Select Challenge: Choose one of ten challenges from your
									current set.
								</p></ListItem
							>
							<ListItem
								><p>
									Change Challenge Set: Swap challenges with another set. Each
									set has its own decorative disc, which gets decorations added
									as you complete the challenges.
								</p></ListItem
							>
							<ListItem
								><p>
									SR Stat Mission: Missions to complete to rank up the bottom
									four stats on your Book of Secrets. Available with S and
									standard Quest NPCs.
								</p></ListItem
							>
							<ListItem
								><p>
									Manual: Opens the online manual in your browser.
								</p></ListItem
							>
						</UnorderedList>
					</div>
				</section>
				<section>
					<SectionHeading level={3} title="Missions and Challenges" />
					<div>
						<p>
							Both Missions and Challenges have a menu listing a target to kill
							a certain number of. After taking an SR Stat mission from S, you
							will be asked if you want to skip it using items, accessible
							through the Guild Master in the main town square. You will be
							prompted to use tickets or Lottery G coins, followed by confirming
							your choice. Quests are persistent across sessions and
							automatically marked as completed once their goal is achieved.
						</p>
					</div>
				</section>
			</div>
		</section>

		<section>
			<SectionHeading level={2} title="Hiden Cuffs" />
			<div>
				<p>
					From the <InlineTooltip
						icon={gameInfo.find(
							(e) => e.name === 'Monster Hunter Frontier Z Zenith',
						)?.icon}
						iconType="file"
						text="ZZ Update 1"
						tooltip="Game"
					/>, new cuffs have been introduced that grant Hiden points and prevent
					your Hiden from using a skill slot. These cuffs are separate from
					normal skill cuffs and do not take up any actual slots in an outfit.
					You can equip a single Hiden cuff alongside any other cuff. <InlineTooltip
						icon={getItemIcon('Jewel')}
						iconType="component"
						iconColor={ItemColors.find((e) => e.name === 'Red')?.value}
						text="Hiden Cuffs"
						tooltip="Item"
					/> come in three levels: Basic, G, and True.
				</p>
				<CenteredFigure
					width={'100%'}
					type="file"
					src={HidenSkillExample}
					alt="Hiden skill example"
					figcaption="Hiden skill, colored yellow because it doesn't take a skill slot."
				/>
				<UnorderedList>
					<ListItem
						><p>
							Basic Cuffs: Provide +6 points in a Hiden and prevent Hiden from
							using a skill slot.
						</p></ListItem
					>
					<ListItem
						><p>
							G Cuffs: Provide +12 points in a Hiden and prevent Hiden from
							using a skill slot.
						</p></ListItem
					>
					<ListItem
						><p>
							True Cuffs: Provide +12 points in a Hiden, +2 points in a Meta
							Skill, and prevent Hiden from using a skill slot. Text colored
							cyan in menus.
						</p></ListItem
					>
				</UnorderedList>
				<CenteredFigure
					width={'100%'}
					type="file"
					src={HidenCuffExample}
					alt="Hiden cuff example"
					figcaption="Hiden cuff at the bottom."
				/>
				<p>
					The first two levels of these cuffs use standard Hiden materials, and
					you cannot exchange HL Hiden tickets to obtain them. The True Cuff
					requires a single True Hiden decoration. There are 8 versions of these
					cuffs for each weapon type, and any True Hiden decoration can be used
					to create any of the cuffs.
				</p>
			</div>
		</section>

		<div class="page-turn">
			<PageTurn pageUrlPathName={$page.url.pathname} />
		</div>
	</div>
</HunterNotesPage>

<style lang="scss">
	.page-turn {
		margin-top: 4rem;
	}

	.toolbar {
		padding: 1rem;
		display: flex;
		align-items: center;
		gap: 1rem;
		flex-grow: 1;
		flex-shrink: 1;
	}

	.table {
		margin-top: 2rem;
		margin-bottom: 2rem;
	}

	.modal-content {
		display: flex;
		gap: var(--cds-spacing-06);
		flex-direction: column;
	}

	.modal-content > img {
		max-width: 60vh;
		display: block;
		margin-left: auto;
		margin-right: auto;
		width: 50%;
	}

	.modal-open-noblur {
		-webkit-filter: blur(0);
		filter: blur(0);
		opacity: 1;
		-webkit-transition:
			opacity 500ms ease,
			-webkit-filter 500ms ease;
		transition:
			opacity 500ms ease,
			-webkit-filter 500ms ease;
		transition:
			filter 500ms ease,
			opacity 500ms ease;
		transition:
			filter 500ms ease,
			opacity 500ms ease,
			-webkit-filter 500ms ease;
	}

	.modal-open-blur {
		-webkit-filter: blur(8px);
		filter: blur(4px);
		opacity: 1;
	}

	.data-table-title {
		display: flex;
		gap: 2rem;
		align-items: center;
	}

	.datatable-bottom {
		margin-top: 2rem;
	}

	.modal-mobile-popover-image {
		max-width: 100%; /* Ensures the image does not exceed the width of its container */
		max-height: 100%; /* Ensures the image does not exceed the height of its container */
		object-fit: cover; /* Ensures the image covers the area without distorting its aspect ratio */
		display: inline-block; /* Removes any extra space below the image */
	}

	.modal-mobile-container {
		display: flex;
		gap: 0.5rem;
		padding: var(--cds-spacing-04);
		flex-direction: column;
		max-width: 48ch;
		overflow: hidden;
	}

	.modal-mobile-link:hover {
		text-decoration: underline;
	}

	.modal-mobile-image {
		grid-area: image;
		display: inline-block;
		max-width: 8ch;
	}

	.modal-mobile-button {
		grid-area: button;
	}

	.modal-mobile-title {
		display: -webkit-box;
		-webkit-line-clamp: 1; /* number of lines to show */
		line-clamp: 1;
		-webkit-box-orient: vertical;
		overflow: hidden;
		grid-area: title;
		font-weight: bold;
		height: fit-content;
	}

	.modal-mobile-subtitle {
		display: -webkit-box;
		-webkit-line-clamp: 2; /* number of lines to show */
		line-clamp: 2;
		-webkit-box-orient: vertical;
		overflow: hidden;
		grid-area: subtitle;
		color: var(--ctp-subtext0);
	}

	.modal-mobile-title,
	.modal-mobile-subtitle {
		padding-left: 0.5rem;
		padding-top: 0;
		padding-bottom: 0;
		margin: 0;
	}

	.modal-mobile-description {
		grid-area: description;
		text-wrap: wrap;
		margin-top: 1rem;
		display: -webkit-box;
		-webkit-line-clamp: 3; /* number of lines to show */
		line-clamp: 3;
		-webkit-box-orient: vertical;
		overflow: hidden;
	}

	.modal-mobile-contents-top {
		display: grid;
		grid-template-areas:
			'image title button'
			'image subtitle subtitle'
			'description description description';
		gap: 0;
		grid-template-columns: auto 1fr auto;
		grid-template-rows: auto 1fr auto;
	}

	.modal-mobile-contents-bottom {
		display: flex;
		gap: 0.5rem;
	}

	.paragraph-with-icon {
		display: flex;
		align-items: center;
		gap: 0.125rem;
	}

	.mermaid-container {
		max-width: 80vw;
		overflow-x: auto;
		margin: 0 auto;
		margin-bottom: 2rem;
		margin-top: 2rem;
	}
</style>
