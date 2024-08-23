<script lang="ts">
	import HunterNotesPage from '$lib/client/components/HunterNotesPage.svelte';
	import PageTurn from '$lib/client/components/PageTurn.svelte';
	import SectionHeadingTopLevel from '$lib/client/components/SectionHeadingTopLevel.svelte';
	import { page } from '$app/stores';
	import SectionHeading from '$lib/client/components/SectionHeading.svelte';
	import type { DataTableCell } from 'carbon-components-svelte/src/DataTable/DataTable.svelte';
	import Modal from 'carbon-components-svelte/src/Modal/Modal.svelte';
	import DataTable from 'carbon-components-svelte/src/DataTable/DataTable.svelte';
	import Button from 'carbon-components-svelte/src/Button/Button.svelte';
	import CopyButton from 'carbon-components-svelte/src/CopyButton/CopyButton.svelte';
	import Download from 'carbon-icons-svelte/lib/Download.svelte';
	import Toolbar from 'carbon-components-svelte/src/DataTable/Toolbar.svelte';
	import { downloadDomAsPng } from '$lib/client/modules/download';
	import { getCSVFromArray } from '$lib/client/modules/csv';
	import InlineTooltip from '$lib/client/components/frontier/InlineTooltip.svelte';
	import { getItemIcon, ItemColors } from '$lib/client/modules/frontier/items';
	import Image from 'carbon-icons-svelte/lib/Image.svelte';
	import CenteredFigure from '$lib/client/components/CenteredFigure.svelte';
	import UnorderedList from 'carbon-components-svelte/src/UnorderedList/UnorderedList.svelte';
	import ListItem from 'carbon-components-svelte/src/ListItem/ListItem.svelte';
	import Link from 'carbon-components-svelte/src/Link/Link.svelte';
	import ToolbarSearch from 'carbon-components-svelte/src/DataTable/ToolbarSearch.svelte';
	import { getMonsterIcon } from '$lib/client/modules/frontier/monsters';
	import OrderedList from 'carbon-components-svelte/src/OrderedList/OrderedList.svelte';
	import {
		getLocationIcon,
		LocationIcons,
	} from '$lib/client/modules/frontier/locations';
	import { gameInfo } from '$lib/client/modules/frontier/objects';
	import CaravanGem from '$lib/client/components/frontier/icon/CaravanGem.svelte';
	import CaravanGemRainbow from '$lib/client/components/frontier/icon/CaravanGemRainbow.svelte';
	import Gacha from '$lib/client/components/frontier/icon/Gacha.svelte';
	import { getCurrencyIcon } from '$lib/client/modules/frontier/currency';
	import Pagination from 'carbon-components-svelte/src/Pagination/Pagination.svelte';
	import type { FrontierCaravanSkillName } from 'ezlion';

	let modalPopoverIconType = 'file';
	let modalPopoverIcon: any;
	let modalHeading = '';
	let modalLabel = '';
	let modalOpen = false;
	let modalImage = '';
	let modalNotes = '';

	$: modalBlurClass = modalOpen ? 'modal-open-blur' : 'modal-open-noblur';

	function changeModal(cell: DataTableCell, section: string) {
		modalOpen = true;
		modalHeading = cell.value;
		modalLabel = section || '';

		switch (section) {
			default:
				modalImage = '';
				modalNotes = '';
				break;
			case 'Caravan':
				modalImage =
					caravanGemSkills.find((e) => e.name === cell.value)?.demo || '';
				modalNotes =
					caravanGemSkills.find((e) => e.name === cell.value)?.description ||
					'';
				break;
		}
	}

	const caravanGemSkills: {
		id: string;
		name: FrontierCaravanSkillName;
		cost: number;
		description: string;
		pointsToUnlock: string;
		demo?: string;
	}[] = [
		{
			id: '1',
			name: 'Recovery Items Up',
			cost: 1,
			description:
				'Increases the effectiveness of Herb, Potion, Mega Potion, and Lifepowder by 1.1x. Enhances the effectiveness of Bitterbug and Antidote Herb by 100%.',
			pointsToUnlock: '0',
			demo: 'https://res.cloudinary.com/mhfz/video/upload/f_auto:video,q_auto/v1/supplemental/animated/recovery-items-up.webm',
		},
		{
			id: '2',
			name: 'Blunt Striker',
			cost: 1,
			description: 'Triples Bowgun melee damage.',
			pointsToUnlock: '1',
		},
		{
			id: '3',
			name: 'Courage',
			cost: 1,
			description: 'Prevents flinching when spotting monsters.',
			pointsToUnlock: '37',
		},
		{
			id: '4',
			name: 'Lander',
			cost: 2,
			description:
				'Eliminates recovery time after falling and prevents egg loss.',
			pointsToUnlock: '74',
		},
		{
			id: '5',
			name: 'Vine Superhero',
			cost: 3,
			description: 'Climbing no longer consumes stamina.',
			pointsToUnlock: '111',
		},
		{
			id: '6',
			name: 'Mining Expert',
			cost: 3,
			description: 'Reduces the chance of pickaxe breakage.',
			pointsToUnlock: '148',
		},
		{
			id: '7',
			name: 'Insect Expert',
			cost: 3,
			description: 'Reduces the chance of net breakage.',
			pointsToUnlock: '185',
		},
		{
			id: '8',
			name: 'Vine Master',
			cost: 3,
			description: 'Prevents falling when hurt while climbing.',
			pointsToUnlock: '222',
		},
		{
			id: '9',
			name: 'Combo Tech (Sm)',
			cost: 1,
			description: 'Increases combination success rate by 10%.',
			pointsToUnlock: '555',
		},
		{
			id: '9a',
			name: 'Combo Tech (Med)',
			cost: 2,
			description: 'Increases combination success rate by 15%.',
			pointsToUnlock: '1221',
		},
		{
			id: '9b',
			name: 'Combo Tech (Lg)',
			cost: 3,
			description: 'Increases combination success rate by 20%.',
			pointsToUnlock: '1998',
		},
		{
			id: '10',
			name: 'Riser (Sm)',
			cost: 1,
			description:
				'Increases iframes by 1.5x during the rising animation after taking a hit.',
			pointsToUnlock: '592',
		},
		{
			id: '10a',
			name: 'Riser (Med)',
			cost: 2,
			description:
				'Increases iframes by 2.0x during the rising animation after taking a hit.',
			pointsToUnlock: '1258',
		},
		{
			id: '10b',
			name: 'Riser (Lg)',
			cost: 3,
			description:
				'Increases iframes by 3.0x during the rising animation after taking a hit.',
			pointsToUnlock: '2035',
		},
		{
			id: '11',
			name: 'My Tore Celeb (Sm)',
			cost: 0,
			description:
				"Increases garden managers' affection by 1.5x the usual amount.",
			pointsToUnlock: '629',
		},
		{
			id: '11a',
			name: 'My Tore Celeb (Med)',
			cost: 0,
			description:
				"Increases garden managers' affection by 2x the usual amount.",
			pointsToUnlock: '1295',
		},
		{
			id: '11b',
			name: 'My Tore Celeb (Lg)',
			cost: 0,
			description:
				"Increases garden managers' affection by 3x the usual amount.",
			pointsToUnlock: '2072',
		},
		{
			id: '12',
			name: 'Natural Recovery (Sm)',
			cost: 8,
			description:
				"Using the 'Sleep' gesture restores your red health 5 times.",
			pointsToUnlock: '666',
		},
		{
			id: '12a',
			name: 'Natural Recovery (Med)',
			cost: 9,
			description:
				"Using the 'Sleep' gesture restores your red health 10 times.",
			pointsToUnlock: '1332',
		},
		{
			id: '12b',
			name: 'Natural Recovery (Lg)',
			cost: 10,
			description:
				"Using the 'Sleep' gesture restores your red health 15 times.",
			pointsToUnlock: '2109',
		},
		{
			id: '13',
			name: 'Master Carver (Sm)',
			cost: 8,
			description:
				'While carving, if the top item in the carve table is below 51%, there is a 1/10th chance of rerolling with that item removed from the pool. Maximum of 10 rerolls.',
			pointsToUnlock: '703',
		},
		{
			id: '13a',
			name: 'Master Carver (Med)',
			cost: 9,
			description:
				'While carving, if the top item in the carve table is below 51%, there is a 1/9th chance of rerolling with that item removed from the pool. Maximum of 15 rerolls.',
			pointsToUnlock: '1369',
		},
		{
			id: '13b',
			name: 'Master Carver (Lg)',
			cost: 10,
			description:
				'While carving, if the top item in the carve table is below 51%, there is a 1/8th chance of rerolling with that item removed from the pool. Maximum of 20 rerolls.',
			pointsToUnlock: '2146',
		},
		{
			id: '14',
			name: 'Healing Technique (Sm)',
			cost: 3,
			description:
				'1/12th chance to not consume healing items when used (up to 5 times per quest).',
			pointsToUnlock: '740',
		},
		{
			id: '14a',
			name: 'Healing Technique (Med)',
			cost: 4,
			description:
				'1/11th chance to not consume healing items when used (up to 5 times per quest).',
			pointsToUnlock: '1406',
		},
		{
			id: '14b',
			name: 'Healing Technique (Lg)',
			cost: 5,
			description:
				'1/10th chance to not consume healing items when used (up to 5 times per quest).',
			pointsToUnlock: '2183',
		},
		{
			id: '15',
			name: 'Negotiation (Sm)',
			cost: 0,
			description: '1/8th chance to receive a 10% discount on purchases.',
			pointsToUnlock: '777',
		},
		{
			id: '15a',
			name: 'Negotiation (Med)',
			cost: 0,
			description: '1/8th chance to receive a 15% discount on purchases.',
			pointsToUnlock: '1443',
		},
		{
			id: '15b',
			name: 'Negotiation (Lg)',
			cost: 0,
			description: '1/8th chance to receive a 25% discount on purchases.',
			pointsToUnlock: '2220',
		},
		{
			id: '16',
			name: 'Gallery Celebrity (Sm)',
			cost: 0,
			description: 'Gain 5000 extra Gallery Points on evaluations.',
			pointsToUnlock: '814',
		},
		{
			id: '16a',
			name: 'Gallery Celebrity (Med)',
			cost: 0,
			description: 'Gain 7000 extra Gallery Points on evaluations.',
			pointsToUnlock: '1480',
		},
		{
			id: '16b',
			name: 'Gallery Celebrity (Lg)',
			cost: 0,
			description: 'Gain 10000 extra Gallery Points on evaluations.',
			pointsToUnlock: '2257',
		},
		{
			id: '17',
			name: 'Garden Celebrity (Sm)',
			cost: 0,
			description: 'Receive 1.2x items from garden tools.',
			pointsToUnlock: '851',
		},
		{
			id: '17a',
			name: 'Garden Celebrity (Med)',
			cost: 0,
			description: 'Receive 1.3x items from garden tools.',
			pointsToUnlock: '1517',
		},
		{
			id: '17b',
			name: 'Garden Celebrity (Lg)',
			cost: 0,
			description: 'Receive 1.5x items from garden tools.',
			pointsToUnlock: '2294',
		},
		{
			id: '18',
			name: 'Last Minute Ace (Sm)',
			cost: 5,
			description:
				'Gain 80% affinity but take 1.3x damage in the last 5 minutes of a quest.',
			pointsToUnlock: '888',
		},
		{
			id: '18a',
			name: 'Last Minute Ace (Med)',
			cost: 6,
			description:
				'Gain 90% affinity but take 1.3x damage in the last 5 minutes of a quest.',
			pointsToUnlock: '1554',
		},
		{
			id: '18b',
			name: 'Last Minute Ace (Lg)',
			cost: 7,
			description:
				'Gain 100% affinity but take 1.3x damage in the last 5 minutes of a quest.',
			pointsToUnlock: '2331',
		},
		{
			id: '19',
			name: 'Goddess of Luck (Sm)',
			cost: 8,
			description:
				'1/10th chance to take no damage on hits (up to 5 times). Stacks with Divine Protection, Diva Buff, and Girly Charms.',
			pointsToUnlock: '925',
		},
		{
			id: '19a',
			name: 'Goddess of Luck (Med)',
			cost: 9,
			description:
				'1/9th chance to take no damage on hits (up to 10 times). Stacks with Divine Protection, Diva Buff, and Girly Charms.',
			pointsToUnlock: '1591',
		},
		{
			id: '19b',
			name: 'Goddess of Luck (Lg)',
			cost: 10,
			description:
				'1/8th chance to take no damage on hits (up to 20 times). Stacks with Divine Protection, Diva Buff, and Girly Charms.',
			pointsToUnlock: '2368',
		},
		{
			id: '20',
			name: 'Hot Master',
			cost: 5,
			description: 'Provides the effects of Heat Cancel.',
			pointsToUnlock: '1646',
		},
		{
			id: '21',
			name: 'Cold Master',
			cost: 5,
			description: 'Grants immunity to cold effects.',
			pointsToUnlock: '1664',
		},
		{
			id: '22',
			name: 'Weapon Art (Sm)',
			cost: 5,
			description: "Boosts your equipped weapon's true raw by 1.01x.",
			pointsToUnlock: '1702',
		},
		{
			id: '22a',
			name: 'Weapon Art (Med)',
			cost: 6,
			description: "Boosts your equipped weapon's true raw by 1.025x.",
			pointsToUnlock: '2479',
		},
		{
			id: '22b',
			name: 'Weapon Art (Lg)',
			cost: 7,
			description: "Boosts your equipped weapon's true raw by 1.05x.",
			pointsToUnlock: '3256',
		},
		{
			id: '23',
			name: 'Bonus Art',
			cost: 5,
			description: 'Prevents food effects from being lost after fainting.',
			pointsToUnlock: '3293',
		},
		{
			id: '24',
			name: 'KO Technique',
			cost: 3,
			description: 'Increases stun damage dealt by 1.1x, stacks with Sigil.',
			pointsToUnlock: '3459',
		},
		{
			id: '25',
			name: 'Art of Dancing',
			cost: 2,
			description:
				"Using the 'Dance' action boosts attack by 10 for one minute, using the same buff slot as Power Seeds.",
			pointsToUnlock: '3718',
		},
		{
			id: '26',
			name: 'Unstable Defender (Sm)',
			cost: 3,
			description:
				'Reduces damage by 90% and grants a 20% chance to take no damage while blocking.',
			pointsToUnlock: '3829',
		},
		{
			id: '26a',
			name: 'Unstable Defender (Med)',
			cost: 4,
			description:
				'Reduces damage by 90% and grants a 25% chance to take no damage while blocking.',
			pointsToUnlock: '4680',
		},
		{
			id: '26b',
			name: 'Unstable Defender (Lg)',
			cost: 5,
			description:
				'Reduces damage by 90% and grants a 50% chance to take no damage while blocking.',
			pointsToUnlock: '5531 (GR700)',
		},
		{
			id: '27',
			name: 'Rousing Attacker (Sm)',
			cost: 3,
			description:
				'Attacking with 50 or less health has a 40% chance to restore 10 HP. Can trigger once every 10 seconds, up to 10 times.',
			pointsToUnlock: '3940',
		},
		{
			id: '27a',
			name: 'Rousing Attacker (Med)',
			cost: 4,
			description:
				'Attacking with 50 or less health has a 40% chance to restore 10 HP. Can trigger once every 10 seconds, up to 15 times.',
			pointsToUnlock: '4791',
		},
		{
			id: '27b',
			name: 'Rousing Attacker (Lg)',
			cost: 5,
			description:
				'Attacking with 50 or less health has a 40% chance to restore 10 HP. Can trigger once every 10 seconds, up to 20 times.',
			pointsToUnlock: '~6100 (On GR700)',
		},
		{
			id: '28',
			name: 'Perfect Defense (Sm)',
			cost: 1,
			description:
				'Blocking within 3 frames of an attack prevents stamina or sharpness loss and allows immediate evasion.',
			pointsToUnlock: '4050',
		},
		{
			id: '28a',
			name: 'Perfect Defense (Med)',
			cost: 2,
			description:
				'Blocking within 4 frames of an attack prevents stamina or sharpness loss and allows immediate evasion.',
			pointsToUnlock: '4901',
		},
		{
			id: '28b',
			name: 'Perfect Defense (Lg)',
			cost: 3,
			description:
				'Blocking within 4 frames of an attack prevents stamina or sharpness loss, allows immediate evasion, and adds a powerful Reflect effect.',
			pointsToUnlock: '6016 (GR700)',
			demo: 'https://res.cloudinary.com/mhfz/video/upload/f_auto:video,q_auto/v1/supplemental/animated/perfect-defense.webm',
		},
		{
			id: '29',
			name: 'Revenge! (Sm)',
			cost: 3,
			description:
				"After getting up from a hit, there's a chance to gain 25 attack, 50 defense, and immunity to minor knockback for 20 seconds. Counted as a Power Pill for terms of buff effects and does not overlap.",
			pointsToUnlock: '4144',
		},
		{
			id: '29a',
			name: 'Revenge! (Med)',
			cost: 4,
			description:
				"After getting up from a hit, there's a chance to gain 25 attack, 50 defense, and immunity to minor knockback for 20 seconds. Counted as a Power Pill for terms of buff effects and does not overlap.",
			pointsToUnlock: '4995',
		},
		{
			id: '29b',
			name: 'Revenge! (Lg)',
			cost: 5,
			description:
				"After getting up from a hit, there's a chance to gain 25 attack, 50 defense, and immunity to minor knockback for 20 seconds. Counted as a Power Pill for terms of buff effects and does not overlap.",
			pointsToUnlock: '6100 (GR700)',
		},
		{
			id: '30',
			name: 'Shooting Rampage',
			cost: 7,
			description:
				'Bowguns and bows receive a 1.1x true raw boost. Bowgun accuracy is reduced by 1.5x immediately after shooting.',
			pointsToUnlock: '4421',
		},
		{
			id: '31',
			name: 'Cafeteria Regular',
			cost: 0,
			description:
				'Chance to not consume food when preparing buffs for a quest.',
			pointsToUnlock: '~5530 (GR700)',
		},
		{
			id: '32',
			name: 'Combination Celebrity',
			cost: 2,
			description:
				'Combining items has a chance to produce double the usual quantity.',
			pointsToUnlock: '~6220 (GR700)',
		},
		{
			id: '33',
			name: 'Wild Awakening',
			cost: 6,
			description: 'Combines the effects of Hot and Cold Master skills.',
			pointsToUnlock: '7200',
		},
		{
			id: '34',
			name: 'Decisive Hunter',
			cost: 7,
			description: 'Combines the effects of Weapon Art [Med] and KO Technique.',
			pointsToUnlock: '7700',
		},
		{
			id: '35',
			name: 'Instant Guard Stance',
			cost: 6,
			description:
				'Combines the effects of Weapon Art [Med] and Perfect Defense [Med].',
			pointsToUnlock: '8075',
		},
		{
			id: '36',
			name: 'Self-Defense',
			cost: 8,
			description:
				'Combines the effects of Weapon Art [Med] and Unstable Defender [Med].',
			pointsToUnlock: '8075',
		},
		{
			id: '37',
			name: 'Prepared Stance',
			cost: 3,
			description:
				'Performing the Combat Ready gesture for 15 seconds increases the attack ceiling of your equipped weapon for a fixed duration.',
			pointsToUnlock: '7700',
			demo: 'https://res.cloudinary.com/mhfz/video/upload/f_auto:video,q_auto/v1/supplemental/animated/caravan-skill-prepared-stance.webm',
		},
		{
			id: '38',
			name: 'Spear Angel',
			cost: 3,
			description:
				'Increases damage dealt by Ballistas when supporting in Berserk Raviente quests.',
			pointsToUnlock: '7380',
		},
		{
			id: '39',
			name: 'Shield Angel',
			cost: 3,
			description:
				'Reduces damage taken when supporting in Berserk Raviente quests.',
			pointsToUnlock: '7200',
		},
		{
			id: '40',
			name: 'Elite Flame',
			cost: 2,
			description:
				'Increases the Friendly Fire (heat up) meter over time instead of through friendly fire in Berserk Raviente quests.',
			pointsToUnlock: '7380',
		},
	];

	const rankRequirements: {
		id: string;
		level: string;
		startingPoints: string;
		cummulativePoints: string;
		pointsToMax: string;
		pointsToUpgrade: string;
		requiredGR: string;
	}[] = [
		{
			id: '0',
			level: 'Level 1',
			startingPoints: '0',
			cummulativePoints: '259',
			pointsToMax: '259',
			pointsToUpgrade: '0',
			requiredGR: '0',
		},
		{
			id: '1',
			level: 'Level 2',
			startingPoints: '259',
			cummulativePoints: '962',
			pointsToMax: '703',
			pointsToUpgrade: '100000',
			requiredGR: '0',
		},
		{
			id: '2',
			level: 'Level 3',
			startingPoints: '962',
			cummulativePoints: '1739',
			pointsToMax: '777',
			pointsToUpgrade: '200000',
			requiredGR: '0',
		},
		{
			id: '3',
			level: 'Level 4',
			startingPoints: '1739',
			cummulativePoints: '2516',
			pointsToMax: '777',
			requiredGR: '0',

			pointsToUpgrade: '500000',
		},
		{
			id: '4',
			level: 'Level 5',
			startingPoints: '2516',
			cummulativePoints: '3330',
			pointsToMax: '814',
			pointsToUpgrade: '1000000',
			requiredGR: '0',
		},
		{
			id: '5',
			level: 'Level 6',
			startingPoints: '3330',
			cummulativePoints: '4181',
			pointsToMax: '851',
			requiredGR: '0',

			pointsToUpgrade: '1500000',
		},
		{
			id: '6',
			level: 'Level 7',
			startingPoints: '4181',
			cummulativePoints: '5296',
			pointsToMax: '1115',
			requiredGR: '0',

			pointsToUpgrade: '2000000',
		},
		{
			id: '7',
			level: 'Level 8',
			startingPoints: '5296',
			cummulativePoints: '7047',
			pointsToMax: '1751',
			requiredGR: '700',

			pointsToUpgrade: '2500000',
		},
		{
			id: '8',
			level: 'Level 9',
			startingPoints: '7047',
			cummulativePoints: '8484',
			requiredGR: '800',

			pointsToMax: '1437',
			pointsToUpgrade: '3000000',
		},
	];

	const caravanGemColorBonuses: {
		id: string;
		source: string;
		bonus: string;
		requirement: string;
	}[] = [
		{
			id: '0',
			source: 'Rainbow Gem',
			bonus: 'All Colors +1',
			requirement:
				'Speak to the Gem Smith in the Caravan Hut. This costs 40,000 CP CP or is free with a Premium subscription.',
		},
		{
			id: '1',
			source: 'Double Color Charm',
			bonus: 'Color +1',
			requirement:
				'Available from the Combiner NPC in exchange for 40 Medals. Use it with  Impatience Charms to reduce quest wait times while grinding colors.',
		},
		{
			id: '2',
			source: 'Elder Medicine Buff',
			bonus: 'Color +1',
			requirement:
				'Applied automatically once a month or can be manually activated for 100,000 CP CP from the elder at the top of the Caravan Hut.',
		},
		{
			id: '3',
			source: 'Hunter Soul Sigil',
			bonus: 'Color +1',
			requirement:
				'Available on the White Monoblos B and Yian Garuga ★ recipes and can randomly appear on any Sigil. The Garuga ★ grants Hunter Soul at a 10% chance.',
		},
		{
			id: '4',
			source: 'Premium Course',
			bonus: 'All Colors x2',
			requirement:
				'Aids in color acquisition by applying a 2x multiplier to all color gains and making the Rainbow Gem free.',
		},
		{
			id: '5',
			source: 'Assist Course',
			bonus: 'All Colors x2',
			requirement:
				'Provides an additional 2x multiplier to all color gains, stacking with the Premium Course multiplier.',
		},
	];

	let caravanSkillsTablePageSize = 10;
	let caravanSkillsTablePage = 1;
	let caravanSkillsTableFilteredRowIds: string[] = [];
	let caravanSkillsSortKey = 'cost';
	let caravanSkillsSortDirection:
		| 'none'
		| 'ascending'
		| 'descending'
		| undefined = 'ascending';
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
			<div>
				{#await import('$lib/player/Player.svelte') then { default: Player }}
					<svelte:component
						this={Player}
						{...{ title: modalHeading, src: modalImage }}
					/>
				{/await}
			</div>
			<div>{modalNotes}</div>
		</div>
	{:else}
	<!-- TODO: do i need this?-->
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
		<SectionHeadingTopLevel title={'Pallone Caravan'} />
		<div>
			<p class="spaced-paragraph">
				The <InlineTooltip
					text="Caravan"
					tooltip="Location"
					iconType="file"
					icon={LocationIcons.find((e) => e.name === 'Caravan')?.icon}
				/> Area or Pallone is located near the town entrance and should be visited
				once reached HR2. This area houses all facilities related to Caravan Quests,
				<InlineTooltip
					text="Caravan Gems"
					tooltip="Caravan Gem"
					icon={CaravanGemRainbow}
					iconType="component"
				/>, and <InlineTooltip
					text="Raviente"
					tooltip="Monster"
					iconType="file"
					icon={getMonsterIcon('Raviente')}
				/>.
			</p>
			<CenteredFigure
				width={'100%'}
				type="file"
				src={'https://res.cloudinary.com/mhfz/image/upload/f_auto,q_auto/v1/supplemental/caravan-gem-player-list.webp'}
				alt="Caravan Gem next to player name"
				figcaption="Caravan Gem next to player name."
			/>
			<p class="spaced-paragraph">
				Before engaging in Caravan activities, you should obtain a Caravan Gem.
				This can be done by entering the <InlineTooltip
					text="Caravan"
					tooltip="Location"
					iconType="file"
					icon={LocationIcons.find((e) => e.name === 'Caravan')?.icon}
				/> area and talking to Kashira near the Bonfire. After this, you will receive
				a new icon next to your name in a random color, which is your Caravan Gem.
			</p>
			<section>
				<SectionHeading level={2} title="Getting Started" />
				<div>
					<p class="spaced-paragraph">
						The <InlineTooltip
							text="Caravan"
							tooltip="Location"
							iconType="file"
							icon={LocationIcons.find((e) => e.name === 'Caravan')?.icon}
						/> Area, also known as Pallone, is situated next to the town entrance.
						After reaching Hunter Rank (HR) 2, you should promptly enter this area
						to obtain your Caravan Gem.
					</p>
					<p class="spaced-paragraph">
						To acquire the gem, enter the <InlineTooltip
							text="Caravan"
							tooltip="Location"
							iconType="file"
							icon={LocationIcons.find((e) => e.name === 'Caravan')?.icon}
						/> area and speak with Kashira, the woman near the Bonfire. After speaking
						with her, you will receive a new icon next to your name in a random color,
						indicating your <InlineTooltip
							text="Caravan Gem"
							tooltip="Caravan Gem"
							icon={CaravanGemRainbow}
							iconType="component"
						/>.
					</p>
					<CenteredFigure
						width={'100%'}
						type="file"
						src={'https://res.cloudinary.com/mhfz/image/upload/f_auto,q_auto/v1/supplemental/kashira.webp'}
						alt="Kashira"
						figcaption="Kashira."
					/>
					<p class="spaced-paragraph">
						This gem adds a new option to your equipment box. Initially, it will
						provide the skill <InlineTooltip
							text="Recovery Items Up"
							tooltip="Caravan Skill"
							icon={CaravanGem}
							iconType="component"
						/>, which you should equip when possible. This skill increases the
						potency of <InlineTooltip
							text="Potions"
							tooltip="Item"
							iconType="component"
							icon={getItemIcon('Medicine')}
							iconColor={ItemColors.find((e) => e.name === 'Green')?.value}
						/> and <InlineTooltip
							text="Mega Potions"
							tooltip="Item"
							iconType="component"
							icon={getItemIcon('Medicine')}
							iconColor={ItemColors.find((e) => e.name === 'Green')?.value}
						/> to 1.10x their original healing amounts. The Caravan Gem offers numerous
						passive skills, including powerful abilities like timed blocks that damage
						enemies and a 5% attack increase for weapons. These skills significantly
						enhance gameplay and do not occupy skill slots or cost skill points.
					</p>
				</div>

				<section>
					<SectionHeading level={3} title="Equipping Caravan Skills" />
					<div>
						<p class="spaced-paragraph">
							To equip your Caravan skills, use a box that allows you to change
							equipment. You can equip up to three skills with a total value of
							10 points. Activated skills will turn orange.
						</p>
						<CenteredFigure
							width={'100%'}
							type="file"
							src={'https://res.cloudinary.com/mhfz/image/upload/f_auto,q_auto/v1/supplemental/caravan-skills.webp'}
							alt="Caravan Skills"
							figcaption="Caravan Skills."
						/>
					</div>
				</section>
			</section>

			<section>
				<SectionHeading level={2} title="Caravan Gem" />
				<div>
					<p class="spaced-paragraph">
						Your gem can be one of eight colors: Peach, Brown, Yellow, Green,
						White, Purple/Blue, Cyan, and Rainbow. Monsters can be assigned any
						of these colors except Rainbow. Each day at 12:00 server time, the
						game randomly assigns colors to your gem and to monsters. Only your
						own gem can be Rainbow.
					</p>
					<p class="spaced-paragraph">
						When you embark on quests, you earn extra points (PP) in these
						colors based on the colors of the monster, your gem, and the gems of
						your party members. Each color adds to its respective pool, while
						Rainbow adds to all colors. Prior to <InlineTooltip
							text="G10"
							tooltip="Game"
							iconType="file"
							icon={gameInfo.find((e) => e.name === 'Monster Hunter Frontier G')
								?.icon}
						/>, only one Rainbow gem was considered, and they did not stack. The
						current mechanics after <InlineTooltip
							text="G10"
							tooltip="Game"
							iconType="file"
							icon={gameInfo.find((e) => e.name === 'Monster Hunter Frontier G')
								?.icon}
						/>
						are unclear.
					</p>
					<CenteredFigure
						width={'100%'}
						type="file"
						src={'https://res.cloudinary.com/mhfz/image/upload/f_auto,q_auto/v1/supplemental/mezeporta-caravan-npc.webp'}
						alt="Mezeporta Caravan NPC"
						figcaption="Mezeporta Caravan NPC."
					/>
				</div>

				<section>
					<SectionHeading level={3} title="Obtaining Colors" />
					<div>
						<p class="spaced-paragraph">
							You gain colors simply by possessing a Hunter Gem and hunting
							monsters. The colors you earn are determined by the monster
							species you hunt. For any gathering quest, you earn a point in the
							color assigned to your gem. You can check the currently assigned
							colors at the board, next to the <InlineTooltip
								text="Blacksmith"
								tooltip="Location"
								icon={LocationIcons.find((e) => e.name === 'Blacksmith')?.icon}
								iconType="file"
							/> in town.
						</p>
						<CenteredFigure
							width={'100%'}
							type="file"
							src={'https://res.cloudinary.com/mhfz/image/upload/f_auto,q_auto/v1/supplemental/caravan-gem-monster-types.webp'}
							alt="Caravan Gem monster types"
							figcaption="Caravan Gem monster types."
						/>
						<p class="spaced-paragraph">
							If your gem's color matches the monster's assigned color for the
							day, you earn double PP for hunting that monster. If you have a
							Rainbow Gem, you gain PP in all colors. Strive to have Rainbow
							active if you're grinding for colors.
						</p>
					</div>
				</section>

				<section>
					<SectionHeading level={3} title="Grinding Colors" />
					<div>
						<p class="spaced-paragraph">
							The key to efficiently grinding colors is to have a <InlineTooltip
								text="Rainbow Gem"
								tooltip="Caravan Gem"
								icon={CaravanGemRainbow}
								iconType="component"
							/>. Earning points in all colors significantly reduces the number
							of required quests. Even if you optimize for double points in
							specific colors, you would still need to complete 3.5 times more
							quests compared to using a Rainbow Gem.
						</p>
						<p class="spaced-paragraph">
							To get a Rainbow Gem, speak to the Gem Smith in the Caravan Hut.
							This costs 40,000 <InlineTooltip
								icon={getCurrencyIcon('CP')}
								text="CP"
								tooltip="Currency"
								iconType="file"
							/> or is free with a Premium subscription. This makes color grinding
							particularly effective when combined with Hiden grinding, as a Premium
							subscription is beneficial for both.
						</p>
						<p class="spaced-paragraph">
							Beyond the Rainbow Gem, several methods can further multiply PP
							gains per quest:
						</p>
						<UnorderedList>
							<ListItem
								><p>
									<InlineTooltip
										text="Double Color Charm"
										tooltip="Item"
										iconType="component"
										icon={getItemIcon('Sac')}
										iconColor={ItemColors.find((e) => e.name === 'Pink')?.value}
									/>: Available from the Combiner NPC in exchange for <InlineTooltip
										text="Medals"
										tooltip="Item"
										iconType="component"
										icon={getItemIcon('Coin')}
										iconColor={ItemColors.find((e) => e.name === 'Yellow')
											?.value}
									/>. You earn 1 Medal for every 10 kills of a single monster
									type and need 40 Medals for this charm. Use it with <InlineTooltip
										text="Impatience Charms"
										tooltip="Item"
										iconType="component"
										icon={getItemIcon('Sac')}
										iconColor={ItemColors.find((e) => e.name === 'Gray')?.value}
									/> to reduce quest wait times while grinding colors.
								</p></ListItem
							>
							<ListItem
								><p>
									<strong>Elder Medicine Buff:</strong> Provides +1 color gains.
									Applied automatically once a month or can be manually
									activated for 100,000 <InlineTooltip
										icon={getCurrencyIcon('CP')}
										text="CP"
										tooltip="Currency"
										iconType="file"
									/> from the elder at the top of the Caravan Hut.
								</p></ListItem
							>
							<ListItem
								><p>
									<strong>Hunter Soul Sigil:</strong> Adds +1 to colors when
									used on a quest. Available on the <InlineTooltip
										text="White Monoblos B"
										tooltip="Sigil"
										iconType="component"
										icon={getItemIcon('Sigil')}
										iconColor={ItemColors.find((e) => e.name === 'White')
											?.value}
									/> and <InlineTooltip
										text="Yian Garuga ★"
										tooltip="Sigil"
										iconType="component"
										icon={getItemIcon('Sigil')}
										iconColor={ItemColors.find((e) => e.name === 'White')
											?.value}
									/> recipes and can randomly appear on any Sigil. The <InlineTooltip
										text="Garuga ★"
										tooltip="Sigil"
										iconType="component"
										icon={getItemIcon('Sigil')}
										iconColor={ItemColors.find((e) => e.name === 'White')
											?.value}
									/> grants Hunter Soul at a 10% chance. Though small, the gains
									accumulate with a Rainbow Gem and other buffs.
								</p></ListItem
							><ListItem
								><p>
									<strong>Premium Course:</strong> Aids in color acquisition by applying
									a 2x multiplier to all color gains and making the Rainbow Gem free.
								</p></ListItem
							>
							<ListItem
								><p>
									<strong>Assist Course:</strong> Provides an additional 2x multiplier
									to all color gains, stacking with the Premium Course multiplier.
								</p></ListItem
							>
						</UnorderedList>
						<CenteredFigure
							width={'100%'}
							type="file"
							src={'https://res.cloudinary.com/mhfz/image/upload/f_auto,q_auto/v1/supplemental/combiner-npc-talisman.webp'}
							alt="Combiner NPC"
							figcaption="Combiner NPC."
						/>
						<CenteredFigure
							width={'100%'}
							type="file"
							src={'https://res.cloudinary.com/mhfz/image/upload/f_auto,q_auto/v1/supplemental/talisman-exchange.webp'}
							alt="Talisman Exchange"
							figcaption="Talisman Exchange."
						/>
						<CenteredFigure
							width={'100%'}
							type="file"
							src={'https://res.cloudinary.com/mhfz/image/upload/f_auto,q_auto/v1/supplemental/caravan-hut-2nd-floor.webp'}
							alt="Caravan Hut 2nd Floor"
							figcaption="Caravan Hut 2nd Floor."
						/>
						<p class="spaced-paragraph">
							The best way to grind colors is by stacking as many buffs as
							possible and completing <InlineTooltip
								text="Map"
								tooltip="Item"
								iconType="component"
								icon={getItemIcon('Map')}
								iconColor={ItemColors.find((e) => e.name === 'White')?.value}
							/> Deliveries or <InlineTooltip
								text="Iron Ore"
								tooltip="Item"
								iconType="component"
								icon={getItemIcon('Ore')}
								iconColor={ItemColors.find((e) => e.name === 'Gray')?.value}
							/> Deliveries. Iron Ore Deliveries, found in the HR1 quests section,
							are particularly efficient. You can carry a stack of 99 <InlineTooltip
								text="Iron Ore"
								tooltip="Item"
								iconType="component"
								icon={getItemIcon('Ore')}
								iconColor={ItemColors.find((e) => e.name === 'Gray')?.value}
							/>, completing the quest 33 times without breaks or accessing the
							supply box. This method also helps unlock the Green Armor Color. <InlineTooltip
								text="Iron Ore"
								tooltip="Item"
								iconType="component"
								icon={getItemIcon('Ore')}
								iconColor={ItemColors.find((e) => e.name === 'Gray')?.value}
							/> can be bought for 5 <InlineTooltip
								icon={getCurrencyIcon('GCP')}
								text="GCP"
								tooltip="Currency"
								iconType="file"
							/> or 5 Festi Points.
						</p>

						<p>
							The maximum amount of colors you can obtain per quest is 16 for
							each color.
						</p>

						<div class="table">
							<DataTable
								id="caravan-gem-color-bonus-dom"
								useStaticWidth
								title="Caravan Gem Color Bonus"
								sortable
								zebra
								size="medium"
								headers={[
									{ key: 'source', value: 'Source' },
									{ key: 'bonus', value: 'Bonus' },
									{ key: 'requirement', value: 'Requirements' },
								]}
								rows={caravanGemColorBonuses}
								><Toolbar
									><div class="toolbar">
										<CopyButton
											iconDescription={'Copy as CSV'}
											text={getCSVFromArray(caravanGemColorBonuses)}
										/>
										<Button
											kind="tertiary"
											icon={Download}
											on:click={() =>
												downloadDomAsPng(
													'caravan-gem-color-bonus-dom',
													'caravan-gem-color-bonus',
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
					<SectionHeading level={3} title="Gem Rank" />
					<div>
						<p class="spaced-paragraph">
							You can rank up your gem by filling all colors to capacity, with
							total capacity based on your gem's level. The initial level is 1,
							and you can increase it by reaching the cap on total color PP.
							Once all seven colors are at their cap (e.g., 259 in each color
							for level 1), visit the Caravan Gem Smith to rank up your gem.
						</p>
						<div class="table">
							<DataTable
								id="caravan-gem-upgrade-dom"
								useStaticWidth
								title="Caravan Gem Rank Upgrade Requirements"
								sortable
								zebra
								size="medium"
								headers={[
									{ key: 'level', value: 'Level' },
									{ key: 'startingPoints', value: 'Starting Points' },
									{ key: 'pointsToMax', value: 'Points to Max' },
									{ key: 'cummulativePoints', value: 'Cumulative Points' },
									{
										key: 'pointsToUpgrade',
										value: 'Caravan Points to Upgrade',
									},
									{ key: 'requiredGR', value: 'Required GR to Upgrade' },
								]}
								rows={rankRequirements}
								><Toolbar
									><div class="toolbar">
										<CopyButton
											iconDescription={'Copy as CSV'}
											text={getCSVFromArray(rankRequirements)}
										/>
										<Button
											kind="tertiary"
											icon={Download}
											on:click={() =>
												downloadDomAsPng(
													'caravan-gem-upgrade-dom',
													'caravan-gem-upgrade',
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
					<SectionHeading level={3} title="Caravan Points" />
					<div>
						<p class="spaced-paragraph">
							Completing Normal Caravan Routes is a solid way to earn <InlineTooltip
								icon={getCurrencyIcon('CP')}
								text="CP"
								tooltip="Currency"
								iconType="file"
							/>. Finish the 7☆ Caravan Quests to unlock Limited Routes, though
							only the quest poster needs to have completed this. Limited routes
							rotate on a fixed schedule, starting at 12:00 midday server time.
						</p>
						<CenteredFigure
							width={'100%'}
							type="file"
							src={'https://res.cloudinary.com/mhfz/image/upload/f_auto,q_auto/v1/supplemental/caravan-quests.webp'}
							alt="Caravan quests"
							figcaption="Caravan quests."
						/>
					</div>
				</section>
				<section>
					<SectionHeading level={3} title="Limited Routes" />
					<div>
						<p class="spaced-paragraph">
							One of the best options for <InlineTooltip
								icon={getCurrencyIcon('CP')}
								text="CP"
								tooltip="Currency"
								iconType="file"
							/> grinding is the Fatalis Trio quest line within the Limited Routes.
							Equip a set with Carving and High Speed Gathering, and use a G Finesse
							weapon if available. Be cautious when killing <InlineTooltip
								text="Fatalis"
								tooltip="Monster"
								iconType="file"
								icon={getMonsterIcon('Fatalis')}
							/>, as their carve zones can clip into terrain.
						</p>
					</div>
				</section>
				<section>
					<SectionHeading level={3} title="G Rank Caravan Routes" />
					<div>
						<p class="spaced-paragraph">
							Added in Z2.3, these routes are a solid alternative to normal
							quests, averaging 50,000 to 90,000 <InlineTooltip
								icon={getCurrencyIcon('CP')}
								text="CP"
								tooltip="Currency"
								iconType="file"
							/> per run, with the most profitable ones exceeding the Fatalis Trio.
						</p>
						<CenteredFigure
							width={'100%'}
							type="file"
							src={'https://res.cloudinary.com/mhfz/image/upload/f_auto,q_auto/v1/supplemental/caravan-limited-quests.webp'}
							alt="Caravan limited quests"
							figcaption="Caravan limited quests."
						/>
					</div>
				</section>

				<section>
					<SectionHeading level={3} title="Fatalis Trio" />
					<div>
						<p class="spaced-paragraph">
							This Limited Route features all three HR Fatalis, taking around 10
							minutes and yielding 100,000 to 150,000 <InlineTooltip
								icon={getCurrencyIcon('CP')}
								text="CP"
								tooltip="Currency"
								iconType="file"
							/> per run. CP gain is multiplied by using a G Finesse weapon (1.20x)
							and having a Premium subscription (3.00x). Premium also boosts your
							and your legendaries' damage by 1.25x, allowing for more carves and
							increasing your total CP. With a Daily Bonus, you can earn 600,000
							to 900,000 <InlineTooltip
								icon={getCurrencyIcon('CP')}
								text="CP"
								tooltip="Currency"
								iconType="file"
							/> per hour, or 1.8 to 2.7 million per hour on Premium.
						</p>
					</div>
				</section>
				<section>
					<SectionHeading level={3} title="Raviente Runs" />
					<div>
						<p class="spaced-paragraph">
							Another option for CP gain is participating in <InlineTooltip
								text="Raviente"
								tooltip="Monster"
								iconType="file"
								icon={getMonsterIcon('Raviente')}
							/> Hunts, though it's best to do this with a group and proper gear.
							Each Raviente slain earns 140,000 to 200,000 <InlineTooltip
								icon={getCurrencyIcon('CP')}
								text="CP"
								tooltip="Currency"
								iconType="file"
							/>, taking around 30 minutes. This amounts to 280,000 to 400,000
							<InlineTooltip
								icon={getCurrencyIcon('CP')}
								text="CP"
								tooltip="Currency"
								iconType="file"
							/> per hour. Premium might boost this by at least 2.0x, though this
							is not confirmed.
						</p>
					</div>
				</section>
				<section>
					<SectionHeading level={3} title="Caravan Skills" />
					<div>
						<p class="spaced-paragraph">
							Caravan skills are additional abilities gained as you rank up your
							Caravan Gem, similar to the food skills in the mainline series.
							There are two types of Caravan Skills: passive and active.
						</p>
						<p class="spaced-paragraph">
							<strong>Passive Skills</strong> are always active. An example is <InlineTooltip
								text="Negotiation"
								tooltip="Caravan Skill"
								icon={CaravanGem}
								iconType="component"
							/>, which gives you up to a 1/8 chance to get a 25% discount on
							anything that consumes <InlineTooltip
								icon={getCurrencyIcon('z')}
								text="Zenny"
								tooltip="Currency"
								iconType="file"
							/> or <InlineTooltip
								icon={getCurrencyIcon('Gz')}
								text="GZenny"
								tooltip="Currency"
								iconType="file"
							/>, including crafting, upgrading equipment, and buying items.
						</p>
						<p class="spaced-paragraph">
							<strong>Active Skills</strong> are user-selected and have an
							associated cost. You can activate up to 10 points' worth of
							skills. Examples include
							<InlineTooltip
								text="Courage"
								tooltip="Caravan Skill"
								icon={CaravanGem}
								iconType="component"
							/>, <InlineTooltip
								text="Weapon Art Large"
								tooltip="Caravan Skill"
								icon={CaravanGem}
								iconType="component"
							/>, and <InlineTooltip
								text="KO Technique"
								tooltip="Caravan Skill"
								icon={CaravanGem}
								iconType="component"
							/>.
						</p>
						<p class="spaced-paragraph">
							Notable skills, marked in red, are highly recommended based on
							your weapon and play style. For example:
						</p>
						<UnorderedList class="spaced-list">
							<ListItem
								><p>
									<InlineTooltip
										text="Bonus Art"
										tooltip="Caravan Skill"
										icon={CaravanGem}
										iconType="component"
									/> is beneficial for fighting <InlineTooltip
										text="Raviente"
										tooltip="Monster"
										iconType="file"
										icon={getMonsterIcon('Raviente')}
									/>
									or <InlineTooltip
										text="Duremudira"
										tooltip="Monster"
										iconType="file"
										icon={getMonsterIcon('Duremudira')}
									/>.
								</p></ListItem
							>
							<ListItem
								><p>
									<InlineTooltip
										text="KO Technique"
										tooltip="Caravan Skill"
										icon={CaravanGem}
										iconType="component"
									/> and
									<strong
										><InlineTooltip
											text="Weapon Art Large"
											tooltip="Caravan Skill"
											icon={CaravanGem}
											iconType="component"
										/></strong
									> are great for Hammers and Tonfa.
								</p></ListItem
							>
							<ListItem
								><p>
									<InlineTooltip
										text="Shooting Rampage"
										tooltip="Caravan Skill"
										icon={CaravanGem}
										iconType="component"
									/> provides a buff based on your weapon's base true raw, which
									is multiplied by other buffs like <InlineTooltip
										text="Adrenaline"
										tooltip="Armor Skill"
										icon={getItemIcon('Jewel')}
										iconType="component"
									/> or <InlineTooltip
										text="Combat Supremacy"
										tooltip="Armor Skill"
										icon={getItemIcon('Jewel')}
										iconType="component"
									/>.
								</p></ListItem
							></UnorderedList
						>
						<p class="spaced-paragraph">
							Matching your skills to your weapon and the quests you'll be doing
							is generally recommended. Active Skills are powerful and don't
							occupy normal skill slots, so it's beneficial to always have them
							enabled. Ranking up your <InlineTooltip
								text="Caravan Gem"
								tooltip="Caravan Gem"
								icon={CaravanGemRainbow}
								iconType="component"
							/> can provide significant boosts, such as 5-10% extra true raw on
							your weapons and retention of food buffs.
						</p>
						<p class="spaced-paragraph">
							If your <InlineTooltip
								text="Caravan Gem"
								tooltip="Caravan Gem"
								icon={CaravanGemRainbow}
								iconType="component"
							/> is below level 8, you will have fewer skill pages.
						</p>
						<p>
							There are a total of {caravanGemSkills.length} caravan skills.
						</p>
						<div class="table">
							<DataTable
								id="caravan-skills-dom"
								pageSize={caravanSkillsTablePageSize}
								page={caravanSkillsTablePage}
								sortable
								title="Caravan Gem Skills"
								bind:sortKey={caravanSkillsSortKey}
								bind:sortDirection={caravanSkillsSortDirection}
								zebra
								size="medium"
								headers={[
									{ key: 'name', value: 'Name' },
									{ key: 'cost', value: 'Cost' },
									{ key: 'description', value: 'Description' },
									{ key: 'pointsToUnlock', value: 'Points to Unlock' },
								]}
								rows={caravanGemSkills}
								><Toolbar
									><div class="toolbar">
										<CopyButton
											iconDescription={'Copy as CSV'}
											text={getCSVFromArray(caravanGemSkills)}
										/>
										<Button
											kind="tertiary"
											icon={Download}
											on:click={() =>
												downloadDomAsPng(
													'caravan-skills-dom',
													'caravan-skills',
												)}>Download</Button
										>
										<ToolbarSearch
											shouldFilterRows
											value=""
											bind:filteredRowIds={caravanSkillsTableFilteredRowIds}
										/>
									</div>
								</Toolbar>

								<svelte:fragment slot="cell" let:cell>
									{#if cell.key === 'name' && caravanGemSkills.find((e) => e.name === cell.value)?.demo}
										<button
											class="table-button"
											on:click={() => changeModal(cell, 'Caravan')}
										>
											<span>{cell.value}</span><Image
												size={20}
												fill="var(--ctp-blue)"
											/></button
										>
									{:else}
										<p>{cell.value}</p>
									{/if}
								</svelte:fragment>
							</DataTable>
							<Pagination
								pageSizes={[10, 72]}
								bind:pageSize={caravanSkillsTablePageSize}
								bind:page={caravanSkillsTablePage}
								totalItems={caravanSkillsTableFilteredRowIds.length}
							/>
						</div>
					</div>
				</section>
				<section>
					<SectionHeading level={3} title="Maintaining Your Gem" />
					<div>
						<p class="spaced-paragraph">
							To keep your gem's skills active, you must maintain it every 30
							days. This can be done for free by selecting the Maintain Gem
							option at the Gem Smith. Regular maintenance prevents skill decay
							and deactivation.
						</p>
					</div>
				</section>
				<section>
					<SectionHeading level={3} title="Upgrading Your Gem" />
					<div>
						<p class="spaced-paragraph">
							You can upgrade your gem after reaching the color cap for your
							current level. Select the Upgrade Gem option at the Gem Smith to
							advance to the next level, allowing you to gain more Color PP. New
							skills will unlock as you level up all colors, and existing skills
							will be retained.
						</p>
						<CenteredFigure
							width={'100%'}
							type="file"
							src={'https://res.cloudinary.com/mhfz/image/upload/f_auto,q_auto/v1/supplemental/caravan-gem-upgrade.webp'}
							alt="Gem Smith"
							figcaption="Gem Smith."
						/>
					</div>
				</section>
				<section>
					<SectionHeading level={3} title="Changing Gem Color" />
					<div>
						<p class="spaced-paragraph">
							To change your Hunter Gem's color, choose the Change Gem Color
							option. You have two choices:
						</p>
						<UnorderedList>
							<ListItem
								><p>
									<strong>Randomised Gem Color:</strong> Changes the active color
									of your gem randomly.
								</p></ListItem
							>
							<ListItem
								><p>
									<strong>Rainbow Gem Color:</strong> Changes your gem to a Rainbow
									gem, granting points in all colors.
								</p></ListItem
							></UnorderedList
						>
						<CenteredFigure
							width={'100%'}
							type="file"
							src={'https://res.cloudinary.com/mhfz/image/upload/f_auto,q_auto/v1/supplemental/caravan-gem-color.webp'}
							alt="Change gem color"
							figcaption="Change gem color."
						/>
					</div>
				</section>
				<section>
					<SectionHeading level={3} title="Premium Options" />
					<div>
						<p class="spaced-paragraph">
							By spending <InlineTooltip
								icon={Gacha}
								text="Lottery Coins"
								tooltip="Currency"
								iconColor={ItemColors.find((e) => e.name === 'Yellow')?.value}
								iconType="component"
							/>, you can add +100 PP to colors. However, this is generally not
							cost-effective compared to grinding with a Rainbow Gem and a
							Premium subscription. It's best to ignore this option unless you
							need points instantly and have a large amount of money to spare.
						</p>
						<CenteredFigure
							width={'100%'}
							type="file"
							src={'https://res.cloudinary.com/mhfz/image/upload/f_auto,q_auto/v1/supplemental/caravan-gem-gacha.webp'}
							alt="Upgrade with Gacha Coins"
							figcaption="Upgrade with Gacha Coins."
						/>
					</div>
				</section>
			</section>

			<section>
				<SectionHeading level={2} title="Pioneering System" />
				<div>
					<p class="spaced-paragraph">
						The Pioneering System allows you to customize a standard map by
						setting up specific facilities to gather extra and exclusive
						materials. While mostly obsolete, it has two significant uses:
					</p>
					<OrderedList class="spaced-list">
						<ListItem
							><p>
								Providing easier quests for grinding <InlineTooltip
									icon={getItemIcon('Ball')}
									iconType="component"
									text="Ribbons"
									tooltip="Item"
								/> or <InlineTooltip
									icon={getItemIcon('Coin')}
									iconType="component"
									text="Merits"
									tooltip="Item"
								/> at G Rank.
							</p></ListItem
						>
						<ListItem
							><p>
								Increasing Contribution Points in <InlineTooltip
									text="Raviente"
									tooltip="Monster"
									iconType="file"
									icon={getMonsterIcon('Raviente')}
								/> hunts. A Level 5 Pioneer Map grants an additional 50,000 points
								per Raviente run, equivalent to an extra phase or multiple broken
								parts, depending on the Raviente type.
							</p></ListItem
						>
					</OrderedList>
					<p class="spaced-paragraph">
						Access this system by speaking to the Cat behind Kashira in the
						<InlineTooltip
							text="Caravan Pallone"
							tooltip="Location"
							iconType="file"
							icon={LocationIcons.find((e) => e.name === 'Caravan')?.icon}
						/> area.
					</p>
					<CenteredFigure
						width={'100%'}
						type="file"
						src={'https://res.cloudinary.com/mhfz/image/upload/f_auto,q_auto/v1/supplemental/pioneer-npc.webp'}
						alt="Pioneer NPC"
						figcaption="Pioneer NPC."
					/>
					<section>
						<SectionHeading level={3} title="Menu Use" />
						<div>
							<p class="spaced-paragraph">
								Select a map spot, choose a balloon type, and select the level
								to work on. After queuing an upgrade, go into Migration and use
								the 150,000 <InlineTooltip
									icon={getCurrencyIcon('CP')}
									text="CP"
									tooltip="Currency"
									iconType="file"
								/> option to instantly finish the upgrade, then repeat.
							</p>
							<CenteredFigure
								width={'100%'}
								type="file"
								src={'https://res.cloudinary.com/mhfz/image/upload/f_auto,q_auto/v1/supplemental/pioneer-map.webp'}
								alt="Pioneer Map"
								figcaption="Pioneer Map."
							/>
						</div>
					</section>
					<section>
						<SectionHeading level={3} title="Quick Maxing Out" />
						<div>
							<p class="spaced-paragraph">
								A Level 5 flag is granted based on the total number of levels
								you have, with each level having a different weighting. Using
								the <InlineTooltip
									icon={getLocationIcon('Snowy Mountains')}
									text="Snowy Mountains"
									tooltip="Location"
									iconType="file"
								/> as your final location allows you to meet the requirements for
								a Level 5 flag earlier.
							</p>
							<p>
								<strong>Level 5 Requirements: </strong>
							</p>
							<p class="spaced-paragraph">
								For normal maps, 51 points are required; for <InlineTooltip
									icon={getLocationIcon('Snowy Mountains')}
									text="Snowy Mountains"
									tooltip="Location"
									iconType="file"
								/>, 41 points are needed.
							</p>
							<UnorderedList class="spaced-list">
								<ListItem><p>Level 3 facilities: 10 points</p></ListItem>
								<ListItem><p>Level 2 facilities: 5 points</p></ListItem>
								<ListItem><p>Level 1 facilities: 1 point</p></ListItem>
							</UnorderedList>
							<p>
								<strong>Level 5 Requirements: </strong>
							</p>
							<UnorderedList class="spaced-list">
								<ListItem><p>Level 3 facilities: 10 points</p></ListItem>
								<ListItem><p>Level 2 facilities: 5 points</p></ListItem>
								<ListItem><p>Level 1 facilities: 1 point</p></ListItem>
							</UnorderedList>
							<p>
								<strong
									><InlineTooltip
										icon={getLocationIcon('Snowy Mountains')}
										text="Snowy Mountains"
										tooltip="Location"
										iconType="file"
									/> Requirements:
								</strong>
							</p>
							<UnorderedList class="spaced-list">
								<ListItem><p>10x Level 3 Facilities</p></ListItem>
								<ListItem><p>5x Level 2 Facilities</p></ListItem>
								<ListItem><p>1x Level 1 Facility</p></ListItem>
							</UnorderedList>
							<p class="spaced-paragraph">
								Moving to another location requires at least 10 extra points to
								count as Level 5.
							</p>
							<p class="spaced-paragraph">
								<strong>Materials:</strong> 6.5 ~ 9 million <InlineTooltip
									icon={getCurrencyIcon('CP')}
									text="CP"
									tooltip="Currency"
									iconType="file"
								/>
							</p>
							<p class="spaced-paragraph">
								<strong>Facility Materials by Level: </strong>
							</p>

							<div class="facility-materials-levels">
								<div>
									<p>
										<em
											><InlineTooltip
												icon={getLocationIcon('Snowy Mountains')}
												text="Snowy Mountains"
												tooltip="Location"
												iconType="file"
											/> Level 1:
										</em>
									</p>
									<UnorderedList>
										<ListItem
											><p>
												<InlineTooltip
													icon={getItemIcon('Herb')}
													iconColor={ItemColors.find((e) => e.name === 'Gray')
														?.value}
													text="Silver Cordgrass"
													tooltip="Item"
													iconType="component"
												/> ×10 (Buyable) (80x)
											</p></ListItem
										>
										<ListItem
											><p>
												<InlineTooltip
													icon={getItemIcon('Seed')}
													iconColor={ItemColors.find((e) => e.name === 'Pink')
														?.value}
													text="Paintberry"
													tooltip="Item"
													iconType="component"
												/> ×10 (Buyable) (80x)
											</p></ListItem
										>
										<ListItem
											><p>
												<InlineTooltip
													icon={getItemIcon('Husk')}
													iconColor={ItemColors.find((e) => e.name === 'Gray')
														?.value}
													text="Huskberry"
													tooltip="Item"
													iconType="component"
												/> ×10 (Buyable) (80x)
											</p></ListItem
										>
									</UnorderedList>
								</div>
								<div>
									<p>
										<em
											><InlineTooltip
												icon={getLocationIcon('Jungle')}
												text="Jungle"
												tooltip="Location"
												iconType="file"
											/> Level 1 (All Buyable):
										</em>
									</p>
									<UnorderedList>
										<ListItem
											><p>
												<InlineTooltip
													icon={getItemIcon('Mushroom')}
													iconColor={ItemColors.find((e) => e.name === 'Blue')
														?.value}
													text="Blue Mushroom"
													tooltip="Item"
													iconType="component"
												/> ×10 (80x)
											</p></ListItem
										>
										<ListItem
											><p>
												<InlineTooltip
													icon={getItemIcon('Herb')}
													iconColor={ItemColors.find((e) => e.name === 'Yellow')
														?.value}
													text="Day Herbs"
													tooltip="Item"
													iconType="component"
												/> ×10 (80x)
											</p></ListItem
										>
										<ListItem
											><p>
												<InlineTooltip
													icon={getItemIcon('Herb')}
													iconColor={ItemColors.find((e) => e.name === 'Purple')
														?.value}
													text="Sunset Herb"
													tooltip="Item"
													iconType="component"
												/> ×10 (80x)
											</p></ListItem
										>
									</UnorderedList>
								</div>
								<div>
									<p>
										<em
											><InlineTooltip
												icon={getLocationIcon('Snowy Mountains')}
												text="Snowy Mountains"
												tooltip="Location"
												iconType="file"
											/> Level 2:
										</em>
									</p>
									<UnorderedList>
										<ListItem
											><p>
												<InlineTooltip
													icon={getItemIcon('Seed')}
													iconColor={ItemColors.find((e) => e.name === 'Orange')
														?.value}
													text="Purse Grass"
													tooltip="Item"
													iconType="component"
												/> ×5 (Snowy Lv1 Gathering) (40x)
											</p></ListItem
										>
										<ListItem
											><p>
												<InlineTooltip
													icon={getItemIcon('Herb')}
													iconColor={ItemColors.find((e) => e.name === 'Blue')
														?.value}
													text="Sleep Herb"
													tooltip="Item"
													iconType="component"
												/> ×5 (Buyable) (40x)
											</p></ListItem
										>
										<ListItem
											><p>
												<InlineTooltip
													icon={getItemIcon('Seed')}
													iconColor={ItemColors.find((e) => e.name === 'Orange')
														?.value}
													text="Armour Seed"
													tooltip="Item"
													iconType="component"
												/> ×5 (Buyable) (40x)
											</p></ListItem
										>
									</UnorderedList>
								</div>

								<div>
									<p>
										<em
											><InlineTooltip
												icon={getLocationIcon('Desert')}
												text="Desert"
												tooltip="Location"
												iconType="file"
											/> Level 2:
										</em>
									</p>
									<UnorderedList>
										<ListItem
											><p>
												<InlineTooltip
													icon={getItemIcon('Herb')}
													iconColor={ItemColors.find((e) => e.name === 'Green')
														?.value}
													text="Utility Grass"
													tooltip="Item"
													iconType="component"
												/> ×5 (<InlineTooltip
													icon={getLocationIcon('Desert')}
													text="Desert"
													tooltip="Location"
													iconType="file"
												/> Lv1 Gathering) (30x)
											</p></ListItem
										>
										<ListItem
											><p>
												<InlineTooltip
													icon={getItemIcon('Mushroom')}
													iconColor={ItemColors.find((e) => e.name === 'Purple')
														?.value}
													text="Dragon Toadstool"
													tooltip="Item"
													iconType="component"
												/> ×5 (Buyable) (30x)
											</p></ListItem
										>
										<ListItem
											><p>
												<InlineTooltip
													icon={getItemIcon('Herb')}
													iconColor={ItemColors.find((e) => e.name === 'Yellow')
														?.value}
													text="Sliced Cactus"
													tooltip="Item"
													iconType="component"
												/> ×5 (Buyable) (30x)
											</p></ListItem
										>
									</UnorderedList>
								</div>
								<div>
									<p>
										<em
											><InlineTooltip
												icon={getLocationIcon('Snowy Mountains')}
												text="Snowy Mountains"
												tooltip="Location"
												iconType="file"
											/> Level 3:
										</em>
									</p>
									<UnorderedList>
										<!--TODO: overturned not found-->
										<ListItem
											><p>
												Overturned Grass ×5 (Snowy Lv2 Gathering)
											</p></ListItem
										>
										<ListItem
											><p>
												<InlineTooltip
													icon={getItemIcon('Question Mark')}
													iconColor={ItemColors.find((e) => e.name === 'Gray')
														?.value}
													text="Cracked Pot"
													tooltip="Item"
													iconType="component"
												/> ×10 (Pickled Purse Grass)
											</p></ListItem
										>
										<ListItem
											><p>
												<InlineTooltip
													icon={getItemIcon('Herb')}
													iconColor={ItemColors.find((e) => e.name === 'Pink')
														?.value}
													text="Dandelion"
													tooltip="Item"
													iconType="component"
												/> ×5 (GCP)
											</p></ListItem
										>
									</UnorderedList>
								</div>
								<div>
									<p>
										<em
											><InlineTooltip
												icon={getLocationIcon('Jungle')}
												text="Jungle"
												tooltip="Location"
												iconType="file"
											/> Level 3:
										</em>
									</p>
									<UnorderedList>
										<ListItem
											><p>
												Yellow Flower ×5 (<InlineTooltip
													icon={getLocationIcon('Desert')}
													text="Desert"
													tooltip="Location"
													iconType="file"
												/> Lv2 Gathering)
											</p></ListItem
										>
										<ListItem
											><p>
												<InlineTooltip
													icon={getItemIcon('Herb')}
													iconColor={ItemColors.find((e) => e.name === 'Green')
														?.value}
													text="Silky Grass"
													tooltip="Item"
													iconType="component"
												/> ×5 (Snowy Lv2/Jungle Lv2 Gathering)
											</p></ListItem
										>
										<ListItem
											><p>
												<InlineTooltip
													icon={getItemIcon('Mushroom')}
													iconColor={ItemColors.find((e) => e.name === 'Purple')
														?.value}
													text="Exciteshroom"
													tooltip="Item"
													iconType="component"
												/> ×5 (Normal gathering)
											</p></ListItem
										>
									</UnorderedList>
								</div>
								<div>
									<p>
										<em
											><InlineTooltip
												icon={getLocationIcon('Desert')}
												text="Desert"
												tooltip="Location"
												iconType="file"
											/> Level 3:
										</em>
									</p>
									<UnorderedList>
										<ListItem
											><p>
												Yellow Flower ×5 (<InlineTooltip
													icon={getLocationIcon('Desert')}
													text="Desert"
													tooltip="Location"
													iconType="file"
												/> Lv2 Gathering)
											</p></ListItem
										>
										<ListItem
											><p>
												<InlineTooltip
													icon={getItemIcon('Herb')}
													iconColor={ItemColors.find((e) => e.name === 'Green')
														?.value}
													text="Silky Grass"
													tooltip="Item"
													iconType="component"
												/> ×5 (Snowy Lv2/Jungle Lv2 Gathering)
											</p></ListItem
										>
										<ListItem
											><p>
												<InlineTooltip
													icon={getItemIcon('Mushroom')}
													iconColor={ItemColors.find((e) => e.name === 'Purple')
														?.value}
													text="Exciteshroom"
													tooltip="Item"
													iconType="component"
												/> ×5 (Normal gathering)
											</p></ListItem
										>
										<ListItem
											><p>
												<InlineTooltip
													icon={getItemIcon('Mushroom')}
													iconColor={ItemColors.find((e) => e.name === 'Gray')
														?.value}
													text="Blk Sesame Mushroom"
													tooltip="Item"
													iconType="component"
												/> ×5 (Jungle Gathering)
											</p></ListItem
										>
										<ListItem
											><p>
												Demon Cactus Flower (<InlineTooltip
													icon={getLocationIcon('Desert')}
													text="Desert"
													tooltip="Location"
													iconType="file"
												/> Lv2 Gathering)
											</p></ListItem
										>
										<ListItem
											><p>
												<InlineTooltip
													icon={getItemIcon('Herb')}
													iconColor={ItemColors.find((e) => e.name === 'Pink')
														?.value}
													text="Dandelion"
													tooltip="Item"
													iconType="component"
												/> ×5 (GCP)
											</p></ListItem
										>
									</UnorderedList>
								</div>
							</div>
							<p><strong>Process: </strong></p>
							<OrderedList class="spaced-list">
								<ListItem
									><p>
										Select <InlineTooltip
											icon={getLocationIcon('Snowy Mountains')}
											text="Snowy Mountains"
											tooltip="Location"
											iconType="file"
										/> as your main base location and create a gathering facility.
									</p></ListItem
								>
								<ListItem
									><p>
										Select <InlineTooltip
											icon={getLocationIcon('Jungle')}
											text="Jungle"
											tooltip="Location"
											iconType="file"
										/> in Migration, choose the 70,000 <InlineTooltip
											icon={getCurrencyIcon('CP')}
											text="CP"
											tooltip="Currency"
											iconType="file"
										/> option to skip the waiting period and complete the Level 1
										upgrade.
									</p></ListItem
								>
								<ListItem
									><p>
										Start a facility in the <InlineTooltip
											icon={getLocationIcon('Jungle')}
											text="Jungle"
											tooltip="Location"
											iconType="file"
										/>, then migrate back to the
										<InlineTooltip
											icon={getLocationIcon('Snowy Mountains')}
											text="Snowy Mountains"
											tooltip="Location"
											iconType="file"
										/>. Avoid Areas 9 and 10.
									</p></ListItem
								>
								<ListItem
									><p>
										Repeat steps 2 and 3 until you have Level 1 collection bases
										in all zones in the <InlineTooltip
											icon={getLocationIcon('Snowy Mountains')}
											text="Snowy Mountains"
											tooltip="Location"
											iconType="file"
										/>.
									</p></ListItem
								>
								<ListItem
									><p>
										Use a Pioneering Quest to gather <InlineTooltip
											icon={getItemIcon('Seed')}
											iconColor={ItemColors.find((e) => e.name === 'Orange')
												?.value}
											text="Purse Grass"
											tooltip="Item"
											iconType="component"
										/> and queue the first Level 2 upgrade.
									</p></ListItem
								>
								<ListItem
									><p>
										Migrate from <InlineTooltip
											icon={getLocationIcon('Jungle')}
											text="Jungle"
											tooltip="Location"
											iconType="file"
										/> to <InlineTooltip
											icon={getLocationIcon('Desert')}
											text="Desert"
											tooltip="Location"
											iconType="file"
										/> using the 150,000 <InlineTooltip
											icon={getCurrencyIcon('CP')}
											text="CP"
											tooltip="Currency"
											iconType="file"
										/> option to skip the waiting period and upgrade to Level 2.
										Gather <InlineTooltip
											icon={getItemIcon('Herb')}
											iconColor={ItemColors.find((e) => e.name === 'Green')
												?.value}
											text="Utility Grass"
											tooltip="Item"
											iconType="component"
										/> as needed and repeat until all facilities are at Level 2.
									</p></ListItem
								>
								<ListItem
									><p>
										Use Mocha pots to mass-produce <InlineTooltip
											icon={getItemIcon('Question Mark')}
											iconColor={ItemColors.find((e) => e.name === 'Gray')
												?.value}
											text="Cracked Pots"
											tooltip="Item"
											iconType="component"
										/> and gather Overturned Grass. Queue an upgrade, migrate, and
										repeat.
									</p></ListItem
								>
							</OrderedList>

							<p class="spaced-paragraph">
								Alternatively, swap between <InlineTooltip
									icon={getLocationIcon('Snowy Mountains')}
									text="Snowy Mountains"
									tooltip="Location"
									iconType="file"
								/>, <InlineTooltip
									icon={getLocationIcon('Jungle')}
									text="Jungle"
									tooltip="Location"
									iconType="file"
								/>, and <InlineTooltip
									icon={getLocationIcon('Desert')}
									text="Desert"
									tooltip="Location"
									iconType="file"
								/>, gathering the necessary materials to upgrade each facility
								until you obtain a Level 5 flag.
							</p>
							<p>
								You can use Guuku Mocha Pots to convert <InlineTooltip
									icon={getItemIcon('Seed')}
									iconColor={ItemColors.find((e) => e.name === 'Orange')?.value}
									text="Purse Grass"
									tooltip="Item"
									iconType="component"
								/> into <InlineTooltip
									icon={getItemIcon('Question Mark')}
									iconColor={ItemColors.find((e) => e.name === 'Gray')?.value}
									text="Cracked Pots"
									tooltip="Item"
									iconType="component"
								/> by cooking it for 6 quests.
							</p>
						</div>
					</section>
				</div>
			</section>

			<div class="page-turn">
				<PageTurn pageUrlPathName={$page.url.pathname} />
			</div>
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

	button {
		all: unset;
	}

	.table-button {
		display: flex;
		align-items: center;
		font-weight: bold;
		gap: 0.25rem;

		img {
			max-width: 4ch;
		}
	}

	.facility-materials-levels {
		display: flex;
		flex-direction: column;
		gap: 2rem;
		margin-bottom: 2rem;
	}
</style>
