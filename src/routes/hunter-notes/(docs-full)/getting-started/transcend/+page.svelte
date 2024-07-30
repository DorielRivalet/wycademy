<script lang="ts">
	import PageTurn from '$lib/client/components/PageTurn.svelte';
	import SectionHeadingTopLevel from '$lib/client/components/SectionHeadingTopLevel.svelte';
	import HunterNotesPage from '$lib/client/components/HunterNotesPage.svelte';
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
	import TranscendFire from '$lib/client/images/icon/transcend-fire.webp';
	import TranscendWater from '$lib/client/images/icon/transcend-water.webp';
	import TranscendThunder from '$lib/client/images/icon/transcend-thunder.webp';
	import TranscendIce from '$lib/client/images/icon/transcend-ice.webp';
	import TranscendDragon from '$lib/client/images/icon/transcend-dragon.webp';
	import TranscendRaw from '$lib/client/images/icon/transcend-raw.webp';
	import TranscendCloak from '$lib/client/images/icon/transcend-cloak.webp';
	import TranscendFocus from '$lib/client/images/icon/transcend-focus.webp';
	import TranscendMind from '$lib/client/images/icon/transcend-mind.webp';
	import TranscendWall from '$lib/client/images/icon/transcend-wall.webp';
	import TranscendSpeed from '$lib/client/images/icon/transcend-speed.webp';
	import TranscendVigor from '$lib/client/images/icon/transcend-vigor.webp';
	import { getItemIcon, ItemColors } from '$lib/client/modules/frontier/items';
	import TranscendHeal from '$lib/client/images/supplemental/transcend-heal.webp';
	import TranscendConcentration from '$lib/client/images/supplemental/transcend-concentration.webp';
	import TranscendMenu from '$lib/client/images/supplemental/transcend-menu.webp';
	import TranscendReady from '$lib/client/images/supplemental/transcend-ready.webp';
	import TranscendInterface from '$lib/client/images/supplemental/transcend-interface.webp';
	import Image from 'carbon-icons-svelte/lib/Image.svelte';
	import { gameInfo } from '$lib/client/modules/frontier/objects';
	import CenteredFigure from '$lib/client/components/CenteredFigure.svelte';
	import BurstReady from '$lib/client/images/supplemental/burst-ready.webp';
	import UnorderedList from 'carbon-components-svelte/src/UnorderedList/UnorderedList.svelte';
	import ListItem from 'carbon-components-svelte/src/ListItem/ListItem.svelte';
	import Link from 'carbon-components-svelte/src/Link/Link.svelte';
	import BurstFire from '$lib/client/images/supplemental/burst-fire.webp';
	import BurstWater from '$lib/client/images/supplemental/burst-water.webp';
	import BurstThunder from '$lib/client/images/supplemental/burst-thunder.webp';
	import BurstIce from '$lib/client/images/supplemental/burst-ice.webp';
	import BurstDragon from '$lib/client/images/supplemental/burst-dragon.webp';
	import BurstRaw from '$lib/client/images/supplemental/burst-raw.webp';
	import TranscendWallDemo from '$lib/client/images/supplemental/transcend-wall.webp';

	let modalPopoverIconType = 'file';
	let modalPopoverIcon: any;
	let modalHeading = '';
	let modalLabel = '';
	let modalOpen = false;
	let modalImage = '';
	let modalNotes = '';

	$: modalBlurClass = modalOpen ? 'modal-open-blur' : 'modal-open-noblur';

	const transcendBuffs: {
		id: string;
		icon: string;
		name: string;
		levels: string;
		description: string;
		category: string;
		demo?: string;
	}[] = [
		{
			id: '0',
			icon: TranscendFire,
			name: 'Fire Pulse',
			description: 'Increases fire damage by a set percentage.',
			levels: '10',
			category: 'Offensive',
		},
		{
			id: '1',
			icon: TranscendWater,
			name: 'Water Pulse',
			description: 'Increases water damage by a set percentage.',
			levels: '10',
			category: 'Offensive',
		},
		{
			id: '2',
			icon: TranscendThunder,
			name: 'Thunder Pulse',
			description: 'Increases thunder damage by a set percentage.',
			levels: '10',
			category: 'Offensive',
		},
		{
			id: '3',
			icon: TranscendIce,
			name: 'Ice Pulse',
			description: 'Increases ice damage by a set percentage.',
			levels: '10',
			category: 'Offensive',
		},
		{
			id: '4',
			icon: TranscendDragon,
			name: 'Dragon Pulse',
			description: 'Increases dragon damage by a set percentage.',
			levels: '10',
			category: 'Offensive',
		},
		{
			id: '5',
			icon: TranscendRaw,
			name: 'Raw Pulse',
			description: 'Increases raw damage by a set percentage.',
			levels: '10',
			category: 'Offensive',
		},
		{
			id: '6',
			icon: TranscendCloak,
			name: 'Cloak',
			description: 'Increases defense and element resistance.',
			levels: '10',
			category: 'Defensive',
		},
		{
			id: '7',
			icon: TranscendFocus,
			name: 'Focus',
			description:
				'Start the quest with Transcend being partially charged to a set percentage.',
			levels: '10',
			category: 'Defensive',
			demo: TranscendConcentration,
		},
		{
			id: '8',
			icon: TranscendMind,
			name: 'Mind',
			description: 'Transcend duration increased.',
			levels: '10',
			category: 'Defensive',
		},
		{
			id: '9',
			icon: TranscendWall,
			name: 'Wall',
			description: 'During transcend, become immune to knockback attacks.',
			levels: '1',
			category: 'Defensive',
			demo: TranscendWallDemo,
		},
		{
			id: '10',
			icon: TranscendSpeed,
			name: 'Speed',
			description: 'Grants Movement Speed Up during transcend.',
			levels: '1',
			category: 'Defensive',
		},
		{
			id: '11',
			icon: TranscendVigor,
			name: 'Vigor',
			description: 'Heal by a certain amount to all nearby Hunters and NPCs.',
			levels: '5',
			category: 'Defensive',
			demo: TranscendHeal,
		},
	];

	const transcendUpgradeMaterials: {
		id: string;
		icon: string;
		iconColor: string;
		name: string;
		points: string;
		description: string;
	}[] = [
		{
			id: '0',
			icon: 'Book',
			iconColor: ItemColors.find((e) => e.name === 'Red')?.value || '#000000',
			name: 'Power Ritual (Red)',
			description: 'Upgrades offensive buffs.',
			points: '500',
		},
		{
			id: '1',
			icon: 'Book',
			iconColor: ItemColors.find((e) => e.name === 'Blue')?.value || '#000000',
			name: 'Power Ritual (Blue)',
			description: 'Upgrades offensive buffs.',
			points: '1000',
		},
		{
			id: '2',
			icon: 'Book',
			iconColor: ItemColors.find((e) => e.name === 'Gray')?.value || '#000000',
			name: 'Power Ritual (Dark)',
			description: 'Upgrades offensive buffs.',
			points: '3000',
		},
		{
			id: '3',
			icon: 'Ticket',
			iconColor: ItemColors.find((e) => e.name === 'Red')?.value || '#000000',
			name: 'Purity Ritual (Red)',
			description: 'Upgrades defensive buffs.',
			points: '500',
		},
		{
			id: '4',
			icon: 'Ticket',
			iconColor: ItemColors.find((e) => e.name === 'Blue')?.value || '#000000',
			name: 'Purity Ritual (Blue)',
			description: 'Upgrades defensive buffs.',
			points: '1000',
		},
		{
			id: '5',
			icon: 'Ticket',
			iconColor: ItemColors.find((e) => e.name === 'Gray')?.value || '#000000',
			name: 'Purity Ritual (Dark)',
			description: 'Upgrades defensive buffs.',
			points: '3000',
		},
	];

	const elementalBursts: {
		id: string;
		name: string;
		icon: string;
		effects: string;
		demo: string;
		duration: string;
	}[] = [
		{
			id: '0',
			name: 'Fire Pulse',
			icon: TranscendFire,
			demo: BurstFire,
			effects:
				'Deals fire damage. Flame bursts can force most monsters to stagger (4 staggers maximum).',
			duration: '25 seconds.',
		},
		{
			id: '1',
			name: 'Water Pulse',
			icon: TranscendWater,
			demo: BurstWater,

			effects: 'Deals low water damage and increases hitzones on monsters.',
			duration: '60 seconds.',
		},
		{
			id: '2',
			name: 'Thunder Pulse',
			demo: BurstThunder,
			icon: TranscendThunder,
			effects:
				'Deals thunder damage and paralyzes monsters. Does not work on monsters that are immune to paralysis.',
			duration: '10 seconds (12s with recovery).',
		},
		{
			id: '3',
			name: 'Ice Pulse',
			icon: TranscendIce,
			effects:
				'Freezes a monster, restricting their movement for a period. Tails cannot be cut during this state, and some monsters may resist freezing even if they take ice damage.',
			demo: BurstIce,
			duration: '12 seconds (14s with recovery).',
		},
		{
			id: '4',
			name: 'Dragon Pulse',
			demo: BurstDragon,

			icon: TranscendDragon,
			effects: `Deals dragon and stun damage, capable of KO'ing monsters.`,
			duration: '8 seconds (10s with recovery).',
		},
		{
			id: '5',
			name: 'Raw Pulse',
			demo: BurstRaw,

			icon: TranscendRaw,
			effects:
				'Deals a large amount of raw damage and causes a Flash Bomb effect.',
			duration: '6 seconds (8s with recovery).',
		},
	];

	const chargeTimes: {
		id: string;
		state: string;
		initialCharge: string;
		maxUpgradedCharge: string;
	}[] = [
		{
			id: '0',
			state: 'Idle',
			initialCharge: `14 minutes and 58 seconds (898 seconds)`,
			maxUpgradedCharge: '11 minutes and 14 seconds (674 seconds)',
		},
		{
			id: '1',
			state: 'Monster spotted',
			initialCharge: `5 minutes and 58 seconds (358 seconds)`,
			maxUpgradedCharge: '4 minutes and 29 seconds (269 seconds)',
		},
	];

	const transcendBuffsEffects: {
		id: string;
		effects: string;
		points: string;
		name: string;
		level: string;
		category: string;
	}[] = [
		{
			id: '0',

			name: 'Pulse Fire/Water/Thunder/Ice/Dragon/Raw',
			points: '0',
			level: '0',
			category: 'Offensive',
			effects:
				'110% / 101% Elemental and Raw damage for Blademaster. 101% Damage for Gunner.',
		},
		{
			id: '1',

			name: 'Pulse Fire/Water/Thunder/Ice/Dragon/Raw',
			points: '1500',
			level: '1',
			category: 'Offensive',

			effects:
				'115% / 102% Elemental and Raw damage for Blademaster. 102% Damage for Gunner.',
		},
		{
			id: '2',

			name: 'Pulse Fire/Water/Thunder/Ice/Dragon/Raw',
			points: '2500',
			category: 'Offensive',

			level: '2',
			effects:
				'120% / 103% Elemental and Raw damage for Blademaster. 103% Damage for Gunner.',
		},
		{
			id: '3',

			category: 'Offensive',

			name: 'Pulse Fire/Water/Thunder/Ice/Dragon/Raw',
			points: '4000',
			level: '3',
			effects:
				'125% / 104% Elemental and Raw damage for Blademaster. 104% Damage for Gunner.',
		},
		{
			id: '4',
			category: 'Offensive',

			name: 'Pulse Fire/Water/Thunder/Ice/Dragon/Raw',
			points: '5500',
			level: '4',
			effects:
				'130% / 105% Elemental and Raw damage for Blademaster. 105% Damage for Gunner.',
		},
		{
			id: '5',

			category: 'Offensive',

			name: 'Pulse Fire/Water/Thunder/Ice/Dragon/Raw',
			points: '8000',
			level: '5',
			effects:
				'150% / 106% Elemental and Raw damage for Blademaster. 106% Damage for Gunner.',
		},
		{
			id: '6',
			category: 'Offensive',

			name: 'Pulse Fire/Water/Thunder/Ice/Dragon/Raw',
			points: '9500',
			level: '6',
			effects:
				'155% / 107% Elemental and Raw damage for Blademaster. 107% Damage for Gunner.',
		},
		{
			id: '7',

			category: 'Offensive',

			name: 'Pulse Fire/Water/Thunder/Ice/Dragon/Raw',
			points: '11000',
			level: '7',
			effects:
				'160% / 108% Elemental and Raw damage for Blademaster. 108% Damage for Gunner.',
		},
		{
			id: '8',

			category: 'Offensive',

			name: 'Pulse Fire/Water/Thunder/Ice/Dragon/Raw',
			points: '12500',
			level: '8',
			effects:
				'175% / 109% Elemental and Raw damage for Blademaster. 109% Damage for Gunner.',
		},
		{
			id: '9',

			category: 'Offensive',

			name: 'Pulse Fire/Water/Thunder/Ice/Dragon/Raw',
			points: '14000',
			level: '9',
			effects:
				'180% / 110% Elemental and Raw damage for Blademaster. 110% Damage for Gunner.',
		},
		{
			id: '10',

			category: 'Offensive',
			name: 'Pulse Fire/Water/Thunder/Ice/Dragon/Raw',
			points: '15500',
			level: '10',
			effects:
				'200% / 113% Elemental and Raw damage for Blademaster. 113% Damage for Gunner.',
		},
		{
			id: '11',
			category: 'Defensive',
			name: 'Cloak',
			points: '0',
			level: '0',
			effects: '+50 defense and +10 elemental resistance.',
		},
		{
			id: '12',
			category: 'Defensive',
			name: 'Cloak',
			points: '1500',
			level: '1',
			effects: '+100 defense and +20 elemental resistance.',
		},
		{
			id: '13',
			category: 'Defensive',
			name: 'Cloak',
			points: '2500',
			level: '2',
			effects: '+150 defense and +30 elemental resistance.',
		},
		{
			id: '14',
			category: 'Defensive',
			name: 'Cloak',
			points: '4000',
			level: '3',
			effects: '+200 defense and +40 elemental resistance.',
		},
		{
			id: '15',
			category: 'Defensive',
			name: 'Cloak',
			points: '5500',
			level: '4',
			effects: '+250 defense and +50 elemental resistance.',
		},
		{
			id: '16',
			category: 'Defensive',
			name: 'Cloak',
			points: '8000',
			level: '5',
			effects: '+400 defense and +60 elemental resistance.',
		},
		{
			id: '17',
			category: 'Defensive',
			name: 'Cloak',
			points: '9500',
			level: '6',
			effects: '+450 defense and +65 elemental resistance.',
		},
		{
			id: '18',
			category: 'Defensive',
			name: 'Cloak',
			points: '11000',
			level: '7',
			effects: '+500 defense and +70 elemental resistance.',
		},
		{
			id: '19',

			category: 'Defensive',
			name: 'Cloak',
			points: '12500',
			level: '8',
			effects: '+550 defense and +85 elemental resistance.',
		},
		{
			id: '20',

			category: 'Defensive',
			name: 'Cloak',
			points: '14000',
			level: '9',
			effects: '+600 defense and +90 elemental resistance.',
		},
		{
			id: '21',

			category: 'Defensive',
			name: 'Cloak',
			points: '15500',
			level: '10',
			effects: '+800 defense and +100 elemental resistance.',
		},
		{
			id: '22',

			category: 'Defensive',
			name: 'Focus',
			points: '0',
			level: '0',
			effects: 'Initial Transcend charged to 0%.',
		},
		{
			id: '23',

			category: 'Defensive',
			name: 'Focus',
			points: '1500',
			level: '1',
			effects: 'Initial Transcend charged to 4%.',
		},
		{
			id: '24',

			category: 'Defensive',
			name: 'Focus',
			points: '2500',
			level: '2',
			effects: 'Initial Transcend charged to 6%.',
		},
		{
			id: '25',

			category: 'Defensive',
			name: 'Focus',
			points: '4000',
			level: '3',
			effects: 'Initial Transcend charged to 8%.',
		},
		{
			id: '26',

			category: 'Defensive',
			name: 'Focus',
			points: '5500',
			level: '4',
			effects: 'Initial Transcend charged to 10%.',
		},
		{
			id: '27',

			category: 'Defensive',
			name: 'Focus',
			points: '8000',
			level: '5',
			effects: 'Initial Transcend charged to 13%.',
		},
		{
			id: '28',

			category: 'Defensive',
			name: 'Focus',
			points: '9500',
			level: '6',
			effects: 'Initial Transcend charged to 15%.',
		},
		{
			id: '29',

			category: 'Defensive',
			name: 'Focus',
			points: '11000',
			level: '7',
			effects: 'Initial Transcend charged to 17%.',
		},
		{
			id: '30',

			category: 'Defensive',
			name: 'Focus',
			points: '12500',
			level: '8',
			effects: 'Initial Transcend charged to 19%.',
		},
		{
			id: '31',

			category: 'Defensive',
			name: 'Focus',
			points: '14000',
			level: '9',
			effects: 'Initial Transcend charged to 21%.',
		},
		{
			id: '32',

			category: 'Defensive',
			name: 'Focus',
			points: '15500',
			level: '10',
			effects: 'Initial Transcend charged to 25%.',
		},
		{
			id: '33',

			category: 'Defensive',
			name: 'Mind',
			points: '0',
			level: '0',
			effects: '60 seconds transcend duration.',
		},
		{
			id: '34',

			category: 'Defensive',
			name: 'Mind',
			points: '1500',
			level: '1',
			effects: '65 seconds transcend duration.',
		},
		{
			id: '35',

			category: 'Defensive',
			name: 'Mind',
			points: '2500',
			level: '2',
			effects: '70 seconds transcend duration.',
		},
		{
			id: '36',

			category: 'Defensive',
			name: 'Mind',
			points: '4000',
			level: '3',
			effects: '75 seconds transcend duration.',
		},
		{
			id: '37',

			category: 'Defensive',
			name: 'Mind',
			points: '5500',
			level: '4',
			effects: '80 seconds transcend duration.',
		},
		{
			id: '38',

			category: 'Defensive',
			name: 'Mind',
			points: '8000',
			level: '5',
			effects: '90 seconds transcend duration.',
		},
		{
			id: '39',

			category: 'Defensive',
			name: 'Mind',
			points: '9500',
			level: '6',
			effects: '95 seconds transcend duration.',
		},
		{
			id: '40',

			category: 'Defensive',
			name: 'Mind',
			points: '11000',
			level: '7',
			effects: '100 seconds transcend duration.',
		},
		{
			id: '41',

			category: 'Defensive',
			name: 'Mind',
			points: '12500',
			level: '8',
			effects: '105 seconds transcend duration.',
		},
		{
			id: '42',

			category: 'Defensive',
			name: 'Mind',
			points: '14000',
			level: '9',
			effects: '110 seconds transcend duration.',
		},
		{
			id: '43',

			category: 'Defensive',
			name: 'Mind',
			points: '15500',
			level: '10',
			effects: '120 seconds transcend duration.',
		},
		{
			id: '44',

			category: 'Defensive',
			name: 'Wall',
			points: '10000',
			level: '1',
			effects: '+50 defense and +10 elemental resistance.',
		},
		{
			id: '45',

			category: 'Defensive',
			name: 'Speed',
			points: '10000',
			level: '1',
			effects: 'Knockback immunity.',
		},
		{
			id: '46',

			category: 'Defensive',
			name: 'Vigor',
			points: '0',
			level: '0',
			effects: 'Movement Speed UP.',
		},
		{
			id: '47',

			category: 'Defensive',
			name: 'Vigor',
			points: '2000',
			level: '1',
			effects: 'Heal all nearby Players and NPCs (Small).',
		},
		{
			id: '48',

			category: 'Defensive',
			name: 'Vigor',
			points: '3500',
			level: '2',
			effects: 'Heal all nearby Players and NPCs (Medium).',
		},
		{
			id: '49',

			category: 'Defensive',
			name: 'Vigor',
			points: '5000',
			level: '3',
			effects: 'Heal all nearby Players and NPCs (Large).',
		},
		{
			id: '50',

			category: 'Defensive',
			name: 'Vigor',
			points: '6500',
			level: '4',
			effects: 'Heal all nearby Players and NPCs (XL).',
		},
		{
			id: '51',

			category: 'Defensive',
			name: 'Vigor',
			points: '8000',
			level: '5',
			effects: 'Heal all nearby Players and NPCs (XXL).',
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
			case 'Burst':
				modalImage =
					elementalBursts.find((e) => e.name === cell.value)?.demo || '';
				modalNotes =
					elementalBursts.find((e) => e.name === cell.value)?.effects || '';
				break;
			case 'Transcend':
				modalImage =
					transcendBuffs.find((e) => e.name === cell.value)?.demo || '';
				modalNotes =
					transcendBuffs.find((e) => e.name === cell.value)?.description || '';
				break;
		}
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
			<img src={modalImage} alt={'motion value animation'} />
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
		<SectionHeadingTopLevel title={'Transcend'} />
		<div>
			<p class="spaced-paragraph">
				Transcend, introduced in <InlineTooltip
					tooltip="Game"
					text="G7"
					iconType="file"
					icon={gameInfo.find((e) => e.name === 'Monster Hunter Frontier G')
						?.icon}
				/> and which becomes available at HR3, is a customizable, time-based buff
				that enhances your hunter's abilities. Similar to Wystones in 4U, Transcend
				appears as a usable item among your other consumables. However, unlike Wystones,
				the Transcend state starts with little charge and must be powered up over
				time during quests.
			</p>
			<CenteredFigure
				width={'100%'}
				type="file"
				src={TranscendMenu}
				alt="Transcend menu"
				figcaption="You can access Transcend settings directly from the normal start menu.
				To open the settings menu, select Status and then Secret Ceremony
				Status."
			/>

			<CenteredFigure
				width={'100%'}
				type="file"
				src={TranscendInterface}
				alt="Transcend interface"
				figcaption=" The settings window allows you to manage all aspects of the Transcend
				state. You can toggle the mode on and off and upgrade the various buffs
				the state provides."
			/>
			<div class="table">
				<DataTable
					useStaticWidth
					id="transcend-buffs-dom"
					sortable
					zebra
					title="Buffs"
					size="medium"
					headers={[
						{ key: 'name', value: 'Name' },
						{ key: 'levels', value: 'Levels' },
						{ key: 'description', value: 'Description' },
						{ key: 'category', value: 'Category' },
					]}
					rows={transcendBuffs}
					><Toolbar
						><div class="toolbar">
							<CopyButton
								iconDescription={'Copy as CSV'}
								text={getCSVFromArray(transcendBuffs)}
							/>
							<Button
								kind="tertiary"
								icon={Download}
								on:click={() =>
									downloadDomAsPng('transcend-buffs-dom', 'transcend-buffs')}
								>Download</Button
							>
						</div>
					</Toolbar>

					<svelte:fragment slot="cell" let:cell>
						{#if cell.key === 'name' && transcendBuffs.find((e) => e.name === cell.value)?.demo}
							<button
								class="table-button"
								on:click={() => changeModal(cell, 'Transcend')}
							>
								<img
									src={transcendBuffs.find((e) => e.name === cell.value)?.icon}
									alt="Icon"
								/>
								<span>{cell.value}</span><Image
									size={20}
									fill="var(--ctp-blue)"
								/></button
							>
						{:else if cell.key === 'name'}
							<div>
								<InlineTooltip
									tooltip="Buff"
									text={cell.value}
									iconType="file"
									icon={transcendBuffs.find((e) => e.name === cell.value)?.icon}
								/>
							</div>
						{:else}
							<p>{cell.value}</p>
						{/if}
					</svelte:fragment>
				</DataTable>
			</div>

			<div class="table">
				<DataTable
					useStaticWidth
					id="transcend-buffs-effects-dom"
					sortable
					zebra
					title="Buffs Effects"
					size="medium"
					headers={[
						{ key: 'name', value: 'Name' },
						{ key: 'level', value: 'Level' },
						{ key: 'effects', value: 'Effects' },
						{ key: 'points', value: 'Points' },
						{ key: 'category', value: 'Category' },
					]}
					rows={transcendBuffsEffects}
					><Toolbar
						><div class="toolbar">
							<CopyButton
								iconDescription={'Copy as CSV'}
								text={getCSVFromArray(transcendBuffsEffects)}
							/>
							<Button
								kind="tertiary"
								icon={Download}
								on:click={() =>
									downloadDomAsPng(
										'transcend-buffs--effects-dom',
										'transcend-buffs-effects',
									)}>Download</Button
							>
						</div>
					</Toolbar>

					<svelte:fragment slot="cell" let:cell>
						{#if cell.key === 'name'}
							<div>
								<InlineTooltip
									tooltip="Buff"
									text={cell.value}
									iconType="file"
									icon={transcendBuffs.find((e) => e.name === cell.value)
										?.icon || ''}
								/>
							</div>
						{:else}
							<p>{cell.value}</p>
						{/if}
					</svelte:fragment>
				</DataTable>
			</div>

			<section>
				<SectionHeading level={2} title="Upgrading" />
				<div>
					<p class="spaced-paragraph">
						You can upgrade the various buffs in two ways: by using Ancient
						Hunting Books (Chinese Here) or by taking weapons of the appropriate
						elemental type on quests (Fire, Water, Ice, Thunder, Dragon, Raw,
						and Hybrid Elements).
					</p>
					<p class="spaced-paragraph">
						Ancient Hunting Books are obtained by participating in various
						cycling events (Conquests, Tower, Festival, Caravan, Road). These
						events reward different books based on their type, and each book
						provides varying amounts of points.
					</p>

					<div class="table">
						<DataTable
							useStaticWidth
							id="transcend-upgrade-materials-dom"
							sortable
							zebra
							title="Transcend Upgrade Materials"
							size="medium"
							headers={[
								{ key: 'name', value: 'Name' },
								{ key: 'description', value: 'Description' },
								{ key: 'points', value: 'Points' },
							]}
							rows={transcendUpgradeMaterials}
							><Toolbar
								><div class="toolbar">
									<CopyButton
										iconDescription={'Copy as CSV'}
										text={getCSVFromArray(transcendUpgradeMaterials)}
									/>
									<Button
										kind="tertiary"
										icon={Download}
										on:click={() =>
											downloadDomAsPng(
												'transcend-upgrade-materials-dom',
												'transcend-upgrade-materials',
											)}>Download</Button
									>
								</div>
							</Toolbar>

							<svelte:fragment slot="cell" let:cell>
								{#if cell.key === 'name'}
									<div>
										<InlineTooltip
											tooltip="Item"
											text={cell.value}
											iconColor={transcendUpgradeMaterials.find(
												(e) => e.name === cell.value,
											)?.iconColor}
											iconType="component"
											icon={getItemIcon(
												transcendUpgradeMaterials.find(
													(e) => e.name === cell.value,
												)?.icon || '',
											)}
										/>
									</div>
								{:else}
									<p>{cell.value}</p>
								{/if}
							</svelte:fragment>
						</DataTable>
					</div>

					<p>
						Books are rewarded upon reaching certain milestones during these
						events. For example, you might receive three books for clearing 20
						floors in the Tower.
					</p>
				</div>
			</section>

			<section>
				<SectionHeading level={2} title="Usage" />
				<div>
					<p class="spaced-paragraph">
						When you enter a quest with Transcend active, you'll have a new item
						icon resembling a hunter, which starts out light grey. Over time,
						the light grey area will recede, and the icon will change to a
						yellow hunter on a flashing white background, indicating it is ready
						to use. This flashing icon remains visible behind all items, even if
						you have something other than the Transcend option selected.
					</p>
					<CenteredFigure
						width={'100%'}
						type="file"
						src={TranscendReady}
						alt="Transcend ready"
						figcaption="Transcend ready."
					/>
					<p class="spaced-paragraph">
						Using the "item" activates the Transcend state, marked by a special
						animation and your character gaining an aura. While this aura is
						active, you'll benefit from any activated abilities, and attacking
						with weapons will cause new hit animations depending on the element
						used.
					</p>
					<p>
						After landing enough hits, the monster is surrounded by an aura, a
						sound will play, and the icon will change to a carving knife,
						indicating that you can perform an "Elemental Burst." Using this,
						your character will rush forward with the carving knife and, upon
						hitting the enemy, trigger an Elemental Burst appropriate to the
						weapon's element and the monster hit. Weapons with a combination
						element will either choose an effect based on the monster's most
						damaged element or randomly. If a monster is immune to the elemental
						damage dealt, the burst will default to Raw.
					</p>
					<CenteredFigure
						width={'100%'}
						type="file"
						src={BurstReady}
						alt="Burst ready"
						figcaption="Burst ready."
					/>
					<p class="spaced-paragraph">
						It is unclear how many variables exactly influence the charging time
						for the Transcended state. Taking damage can slightly speed up the
						charge time.
					</p>
					<p>
						The times listed for the Transcended State to charge in the table
						below are based on tests where no damage was taken.
					</p>
					<div class="table">
						<DataTable
							useStaticWidth
							id="transcend-charge-dom"
							sortable
							zebra
							title="Transcend Charging Time"
							size="medium"
							headers={[
								{ key: 'state', value: 'State' },
								{
									key: 'initialCharge',
									value: 'Charge Time (0% initial charge)',
								},
								{
									key: 'maxUpgradedCharge',
									value: 'Charge Time (25% initial charge)',
								},
							]}
							rows={chargeTimes}
							><Toolbar
								><div class="toolbar">
									<CopyButton
										iconDescription={'Copy as CSV'}
										text={getCSVFromArray(chargeTimes)}
									/>
									<Button
										kind="tertiary"
										icon={Download}
										on:click={() =>
											downloadDomAsPng(
												'transcend-charge-dom',
												'transcend-charge',
											)}>Download</Button
									>
								</div>
							</Toolbar>

							<svelte:fragment slot="cell" let:cell>
								{#if cell.key === 'name'}
									<div>
										<InlineTooltip
											tooltip="Buff"
											text={cell.value}
											iconType="file"
											icon={transcendBuffs.find((e) => e.name === cell.value)
												?.icon || ''}
										/>
									</div>
								{:else}
									<p>{cell.value}</p>
								{/if}
							</svelte:fragment>
						</DataTable>
					</div>
				</div>
			</section>

			<section>
				<SectionHeading level={2} title="Elemental Bursts" />
				<div>
					<p class="spaced-paragraph">
						Elemental Bursts can be triggered on monsters after they have taken
						enough hits with Transcend active. When ready, the item icon for the
						Transcend state will change to a knife, allowing you to activate one
						of the following bursts based on your weapon's element.
					</p>
					<p class="spaced-paragraph">
						The burst will default to raw if the monster takes no damage from
						the element used. Hybrid elements, such as Light, have a hierarchy
						for choosing the burst type. For example, Shantien weapons deal 30%
						Fire, 100% Water, and 70% Thunder but will always choose Fire as the
						burst type if fire damage has been dealt.
					</p>
					<p class="spaced-paragraph">
						Status effects will only occur if the monster can normally be
						afflicted by them and if the burst is used during frames when the
						monster is staggerable. For example, performing an Ice element burst
						during an uninterruptible attack animation will not freeze the
						monster, and using a Thunder element burst on a monster that cannot
						be paralyzed will not paralyze it. If you want to see which monsters
						are immune to certain ailments, check our <Link
							inline
							href="/hunter-notes/getting-started/ailments#monster-status-immunities"
							>Ailments
						</Link> page.
					</p>

					<div class="table">
						<DataTable
							useStaticWidth
							id="elemental-bursts-dom"
							sortable
							zebra
							size="medium"
							headers={[
								{ key: 'name', value: 'Name' },
								{ key: 'effects', value: 'Effects' },
								{ key: 'duration', value: 'Duration' },
							]}
							rows={elementalBursts}
							><Toolbar
								><div class="toolbar">
									<CopyButton
										iconDescription={'Copy as CSV'}
										text={getCSVFromArray(elementalBursts)}
									/>
									<Button
										kind="tertiary"
										icon={Download}
										on:click={() =>
											downloadDomAsPng(
												'elemental-bursts-dom',
												'elemental-bursts',
											)}>Download</Button
									>
								</div>
							</Toolbar>

							<svelte:fragment slot="cell" let:cell>
								{#if cell.key === 'name' && elementalBursts.find((e) => e.name === cell.value)?.demo}
									<button
										class="table-button"
										on:click={() => changeModal(cell, 'Burst')}
									>
										<img
											src={elementalBursts.find((e) => e.name === cell.value)
												?.icon}
											alt="Icon"
										/>
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
					</div>
				</div>
			</section>

			<section>
				<SectionHeading level={2} title="Locking Buffs" />
				<div>
					<UnorderedList>
						<ListItem>
							<p>
								You can lock certain Transcend buffs, like Vigor, in the
								Transcend Menu. This prevents the buff from being active during
								a quest.
							</p></ListItem
						>
						<ListItem>
							<p>
								Locking an element and using a weapon that includes it
								<strong>does not</strong> deactivate that element's burst.
							</p></ListItem
						>
						<ListItem>
							<p>
								Locking a buff that is applied outside the active duration, like
								Focus,
								<strong>does not</strong> deactivate that buff.
							</p></ListItem
						>
					</UnorderedList>
				</div>
			</section>

			<section>
				<SectionHeading level={2} title="Multiplayer" />
				<div>
					<p>
						In multiplayer, you can extend the duration of transcend. Example:
						player A activates their transcend while player B doesn't, later on
						player B activates their transcend while player A is still in
						transcend, player A transcend duration will be extended.
					</p>
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
</style>
