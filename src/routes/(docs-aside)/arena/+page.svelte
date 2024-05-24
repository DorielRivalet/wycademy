<script lang="ts">
	import {
		HuntingHornWeaponNotesCombinations,
		ItemColors,
		ItemIcons,
		weaponMotionValues,
		sharedWeaponMotionValues,
		sigilDropdownItems,
		affinityDropdownItems,
		multipliedBaseDropdownItems,
		multipliersDropdownItems,
		flatAdditionsDropdownItems,
		missionRequirementAttackCeilings,
		gunlanceShellValues,
		blademasterDropdownItems,
		elementalSkillsDropdownItems,
		otherDropdownItems,
		elementMultipliers,
		hitzoneValueModifiersDropdownItems,
		statusSkillsDropdownItems,
		gunnerDropdownItems,
		ElementIcons,
		StatusIcons,
		MonsterIcons,
		bentoValues,
		LocationIcons,
	} from '$lib/client/modules/frontier/objects';
	import NumberInput from 'carbon-components-svelte/src/NumberInput/NumberInput.svelte';
	import InlineNotification from 'carbon-components-svelte/src/Notification/InlineNotification.svelte';
	import Button from 'carbon-components-svelte/src/Button/Button.svelte';
	import Head from '$lib/client/components/Head.svelte';
	import DataTable from 'carbon-components-svelte/src/DataTable/DataTable.svelte';
	import TextArea from 'carbon-components-svelte/src/TextArea/TextArea.svelte';
	import CopyButton from 'carbon-components-svelte/src/CopyButton/CopyButton.svelte';
	import SectionHeadingTopLevel from '$lib/client/components/SectionHeadingTopLevel.svelte';
	import {
		authorName,
		authorUrl,
		datePublished,
		description,
		projectName,
		website,
	} from '$lib/constants';
	import { page } from '$app/stores';
	import pageThumbnail from '$lib/client/images/icon/pvp.png';
	import type { FrontierWeaponClass, FrontierWeaponName } from 'ezlion';
	import type {
		FrontierElement,
		FrontierMotionValue,
		FrontierRarity,
		FrontierStatus,
		FrontierWeapon,
		FrontierWeaponSharpness,
		FrontierWeaponType,
		TagColor,
	} from '$lib/client/modules/frontier/types';
	import Dropdown from 'carbon-components-svelte/src/Dropdown/Dropdown.svelte';
	import { WeaponTypes } from '$lib/client/modules/frontier/objects';
	import Toolbar from 'carbon-components-svelte/src/DataTable/Toolbar.svelte';
	import Link from 'carbon-components-svelte/src/Link/Link.svelte';
	import Launch from 'carbon-icons-svelte/lib/Launch.svelte';
	import Modal from 'carbon-components-svelte/src/Modal/Modal.svelte';
	import Image from 'carbon-icons-svelte/lib/Image.svelte';
	import Download from 'carbon-icons-svelte/lib/Download.svelte';
	import SectionHeading from '$lib/client/components/SectionHeading.svelte';
	import Upload from 'carbon-icons-svelte/lib/Upload.svelte';
	import Restart from 'carbon-icons-svelte/lib/Restart.svelte';
	import DocumentDownload from 'carbon-icons-svelte/lib/DocumentDownload.svelte';
	import { display } from 'mathlifier';
	import CodeSnippet from 'carbon-components-svelte/src/CodeSnippet/CodeSnippet.svelte';
	import { codeToHtml } from 'shiki';
	import { getCatppuccinFlavorFromThemeForShiki } from '$lib/client/themes/catppuccin';
	import { theme } from '$lib/client/stores/theme';
	import { browser } from '$app/environment';
	import Loading from 'carbon-components-svelte/src/Loading/Loading.svelte';
	import { getMonster, getTag } from '$lib/client/modules/frontier/functions';
	import InlineToggletip from '$lib/client/components/frontier/InlineToggletip.svelte';
	import InlineTooltip from '$lib/client/components/frontier/InlineTooltip.svelte';
	import '@carbon/charts-svelte/styles.css';
	import { onMount, type ComponentType } from 'svelte';
	import { ScaleTypes, type LineChartOptions } from '@carbon/charts-svelte';
	import type { LineChart } from '@carbon/charts-svelte';
	import breakpointObserver from 'carbon-components-svelte/src/Breakpoint/breakpointObserver';
	import Tag from 'carbon-components-svelte/src/Tag/Tag.svelte';
	import IceAgeStage1Animation from '$lib/client/images/weapon/motion/sword_and_shield_none_jump_slash.webp';
	import IceAgeStage2Animation from '$lib/client/images/weapon/motion/sword_and_shield_none_jump_slash.webp';
	import IceAgeStage3Animation from '$lib/client/images/weapon/motion/sword_and_shield_none_jump_slash.webp';
	import SharpnessBar from '$lib/client/components/frontier/SharpnessBar.svelte';
	import ToolbarSearch from 'carbon-components-svelte/src/DataTable/ToolbarSearch.svelte';
	import Copy from 'carbon-icons-svelte/lib/Copy.svelte';
	import Pagination from 'carbon-components-svelte/src/Pagination/Pagination.svelte';
	import ezlion from 'ezlion';

	const breakpointSize = breakpointObserver();
	const breakpointLargerThanSmall = breakpointSize.largerThan('sm');
	const breakpointLargerThanMedium = breakpointSize.largerThan('md');

	let flashConversionChartLoaded = false;
	let flashConversionChart: ComponentType<LineChart>;
	let criticalDistanceChartLoaded = false;
	let criticalDistanceChart: ComponentType<LineChart>;
	let criticalDistanceBowChart: ComponentType<LineChart>;

	function generateFlashConversionChartData() {
		const minAffinity = 100;
		const maxAffinity = 500;
		const step = 10;
		let data = [];
		for (let index = minAffinity; index <= maxAffinity; index = index + step) {
			let obj = {
				group: 'Dataset 1',
				affinity: index,
				trueRaw: Math.floor(Math.sqrt(Math.max(index - 100, 0)) * 7),
			};
			data.push(obj);
		}
		return data;
	}

	function getCriticalDistanceChartData(
		type: string,
	): { group: string; multiplier: number; distance: string }[] {
		return (
			criticalDistanceChartAmmoTypesData.find((e) => e.type === type)?.data ?? [
				{
					group: 'None',
					multiplier: 0,
					distance: 'Close',
				},
			]
		);
	}

	const flashConversionChartData = generateFlashConversionChartData();
	const criticalDistanceChartAmmoTypesData = [
		{
			type: 'Normal / Rapid Shot',
			data: [
				{
					group: 'Light Bowgun (Earth)',
					multiplier: 1.5,
					distance: 'Close',
				},
				{
					group: 'Light Bowgun (Earth)',
					multiplier: 1.5,
					distance: 'Mid 1',
				},
				{
					group: 'Light Bowgun (Earth)',
					multiplier: 1,
					distance: 'Mid 2',
				},
				{
					group: 'Light Bowgun (Earth)',
					multiplier: 0.8,
					distance: 'Far 1',
				},
				{
					group: 'Light Bowgun (Earth)',
					multiplier: 0.5,
					distance: 'Far 2',
				},
				{
					group: 'Light Bowgun (Earth)',
					multiplier: 0.5,
					distance: 'Far 3',
				},
				{
					group: 'Light Bowgun (Earth)',
					multiplier: 0,
					distance: 'Far 4',
				},
				{
					group: 'Light Bowgun (Earth)',
					multiplier: 0,
					distance: 'Far 5',
				},
				{
					group: 'Light Bowgun (Heaven / Storm)',
					multiplier: 1.6,
					distance: 'Close',
				},
				{
					group: 'Light Bowgun (Heaven / Storm)',
					multiplier: 1,
					distance: 'Mid 1',
				},
				{
					group: 'Light Bowgun (Heaven / Storm)',
					multiplier: 0.8,
					distance: 'Mid 2',
				},
				{
					group: 'Light Bowgun (Heaven / Storm)',
					multiplier: 0.5,
					distance: 'Far 1',
				},
				{
					group: 'Light Bowgun (Heaven / Storm)',
					multiplier: 0.5,
					distance: 'Far 2',
				},
				{
					group: 'Light Bowgun (Heaven / Storm)',
					multiplier: 0.5,
					distance: 'Far 3',
				},
				{
					group: 'Light Bowgun (Heaven / Storm)',
					multiplier: 0,
					distance: 'Far 4',
				},
				{
					group: 'Light Bowgun (Heaven / Storm)',
					multiplier: 0,
					distance: 'Far 5',
				},
				{
					group: 'Light Bowgun (Storm Step Shot)',
					multiplier: 2,
					distance: 'Close',
				},
				{
					group: 'Light Bowgun (Storm Step Shot)',
					multiplier: 2,
					distance: 'Mid 1',
				},
				{
					group: 'Light Bowgun (Storm Step Shot)',
					multiplier: 2,
					distance: 'Mid 2',
				},
				{
					group: 'Light Bowgun (Storm Step Shot)',
					multiplier: 1.5,
					distance: 'Far 1',
				},
				{
					group: 'Light Bowgun (Storm Step Shot)',
					multiplier: 0,
					distance: 'Far 2',
				},
				{
					group: 'Light Bowgun (Storm Step Shot)',
					multiplier: 0,
					distance: 'Far 3',
				},
				{
					group: 'Light Bowgun (Storm Step Shot)',
					multiplier: 0,
					distance: 'Far 4',
				},
				{
					group: 'Light Bowgun (Storm Step Shot)',
					multiplier: 0,
					distance: 'Far 5',
				},
				{
					group: 'Heavy Bowgun',
					multiplier: 2,
					distance: 'Close',
				},
				{
					group: 'Heavy Bowgun',
					multiplier: 2,
					distance: 'Mid 1',
				},
				{
					group: 'Heavy Bowgun',
					multiplier: 1.7,
					distance: 'Mid 2',
				},
				{
					group: 'Heavy Bowgun',
					multiplier: 1.7,
					distance: 'Far 1',
				},
				{
					group: 'Heavy Bowgun',
					multiplier: 1,
					distance: 'Far 2',
				},
				{
					group: 'Heavy Bowgun',
					multiplier: 0.8,
					distance: 'Far 3',
				},
				{
					group: 'Heavy Bowgun',
					multiplier: 0.5,
					distance: 'Far 4',
				},
				{
					group: 'Heavy Bowgun',
					multiplier: 0.5,
					distance: 'Far 5',
				},
			],
		},
		{
			type: 'Pierce Shot',
			data: [
				{
					group: 'Light Bowgun (Earth)',
					multiplier: 1,
					distance: 'Close',
				},
				{
					group: 'Light Bowgun (Earth)',
					multiplier: 1.7,
					distance: 'Mid 1',
				},
				{
					group: 'Light Bowgun (Earth)',
					multiplier: 1.7,
					distance: 'Mid 2',
				},
				{
					group: 'Light Bowgun (Earth)',
					multiplier: 1.7,
					distance: 'Far 1',
				},
				{
					group: 'Light Bowgun (Earth)',
					multiplier: 1.7,
					distance: 'Far 2',
				},
				{
					group: 'Light Bowgun (Earth)',
					multiplier: 0.8,
					distance: 'Far 3',
				},
				{
					group: 'Light Bowgun (Earth)',
					multiplier: 0.5,
					distance: 'Far 4',
				},
				{
					group: 'Light Bowgun (Earth)',
					multiplier: 0.5,
					distance: 'Far 5',
				},
				{
					group: 'Light Bowgun (Heaven / Storm)',
					multiplier: 1,
					distance: 'Close',
				},
				{
					group: 'Light Bowgun (Heaven / Storm)',
					multiplier: 1.6,
					distance: 'Mid 1',
				},
				{
					group: 'Light Bowgun (Heaven / Storm)',
					multiplier: 1.6,
					distance: 'Mid 2',
				},
				{
					group: 'Light Bowgun (Heaven / Storm)',
					multiplier: 1,
					distance: 'Far 1',
				},
				{
					group: 'Light Bowgun (Heaven / Storm)',
					multiplier: 0.8,
					distance: 'Far 2',
				},
				{
					group: 'Light Bowgun (Heaven / Storm)',
					multiplier: 0.5,
					distance: 'Far 3',
				},
				{
					group: 'Light Bowgun (Heaven / Storm)',
					multiplier: 0.5,
					distance: 'Far 4',
				},
				{
					group: 'Light Bowgun (Heaven / Storm)',
					multiplier: 0.5,
					distance: 'Far 5',
				},
				{
					group: 'Light Bowgun (Storm Step Shot)',
					multiplier: 2,
					distance: 'Close',
				},
				{
					group: 'Light Bowgun (Storm Step Shot)',
					multiplier: 2,
					distance: 'Mid 1',
				},
				{
					group: 'Light Bowgun (Storm Step Shot)',
					multiplier: 2,
					distance: 'Mid 2',
				},
				{
					group: 'Light Bowgun (Storm Step Shot)',
					multiplier: 1.5,
					distance: 'Far 1',
				},
				{
					group: 'Light Bowgun (Storm Step Shot)',
					multiplier: 0,
					distance: 'Far 2',
				},
				{
					group: 'Light Bowgun (Storm Step Shot)',
					multiplier: 0,
					distance: 'Far 3',
				},
				{
					group: 'Light Bowgun (Storm Step Shot)',
					multiplier: 0,
					distance: 'Far 4',
				},
				{
					group: 'Light Bowgun (Storm Step Shot)',
					multiplier: 0,
					distance: 'Far 5',
				},
				{
					group: 'Heavy Bowgun',
					multiplier: 1,
					distance: 'Close',
				},
				{
					group: 'Heavy Bowgun',
					multiplier: 2,
					distance: 'Mid 1',
				},
				{
					group: 'Heavy Bowgun',
					multiplier: 2,
					distance: 'Mid 2',
				},
				{
					group: 'Heavy Bowgun',
					multiplier: 1.7,
					distance: 'Far 1',
				},
				{
					group: 'Heavy Bowgun',
					multiplier: 1.7,
					distance: 'Far 2',
				},
				{
					group: 'Heavy Bowgun',
					multiplier: 0.8,
					distance: 'Far 3',
				},
				{
					group: 'Heavy Bowgun',
					multiplier: 0.5,
					distance: 'Far 4',
				},
				{
					group: 'Heavy Bowgun',
					multiplier: 0.5,
					distance: 'Far 5',
				},
			],
		},
		{
			type: 'Pellet / Spread Shot',
			data: [
				{
					group: 'Light Bowgun (Earth)',
					multiplier: 1,
					distance: 'Close',
				},
				{
					group: 'Light Bowgun (Earth)',
					multiplier: 1,
					distance: 'Mid 1',
				},
				{
					group: 'Light Bowgun (Earth)',
					multiplier: 1,
					distance: 'Mid 2',
				},
				{
					group: 'Light Bowgun (Earth)',
					multiplier: 0,
					distance: 'Far 1',
				},
				{
					group: 'Light Bowgun (Earth)',
					multiplier: 0,
					distance: 'Far 2',
				},
				{
					group: 'Light Bowgun (Earth)',
					multiplier: 0,
					distance: 'Far 3',
				},
				{
					group: 'Light Bowgun (Earth)',
					multiplier: 0,
					distance: 'Far 4',
				},
				{
					group: 'Light Bowgun (Earth)',
					multiplier: 0,
					distance: 'Far 5',
				},
				{
					group: 'Light Bowgun (Heaven / Storm)',
					multiplier: 1,
					distance: 'Close',
				},
				{
					group: 'Light Bowgun (Heaven / Storm)',
					multiplier: 1,
					distance: 'Mid 1',
				},
				{
					group: 'Light Bowgun (Heaven / Storm)',
					multiplier: 1,
					distance: 'Mid 2',
				},
				{
					group: 'Light Bowgun (Heaven / Storm)',
					multiplier: 0,
					distance: 'Far 1',
				},
				{
					group: 'Light Bowgun (Heaven / Storm)',
					multiplier: 0,
					distance: 'Far 2',
				},
				{
					group: 'Light Bowgun (Heaven / Storm)',
					multiplier: 0,
					distance: 'Far 3',
				},
				{
					group: 'Light Bowgun (Heaven / Storm)',
					multiplier: 0,
					distance: 'Far 4',
				},
				{
					group: 'Light Bowgun (Heaven / Storm)',
					multiplier: 0,
					distance: 'Far 5',
				},
				{
					group: 'Light Bowgun (Storm Step Shot)',
					multiplier: 1,
					distance: 'Close',
				},
				{
					group: 'Light Bowgun (Storm Step Shot)',
					multiplier: 0,
					distance: 'Mid 1',
				},
				{
					group: 'Light Bowgun (Storm Step Shot)',
					multiplier: 0,
					distance: 'Mid 2',
				},
				{
					group: 'Light Bowgun (Storm Step Shot)',
					multiplier: 0,
					distance: 'Far 1',
				},
				{
					group: 'Light Bowgun (Storm Step Shot)',
					multiplier: 0,
					distance: 'Far 2',
				},
				{
					group: 'Light Bowgun (Storm Step Shot)',
					multiplier: 0,
					distance: 'Far 3',
				},
				{
					group: 'Light Bowgun (Storm Step Shot)',
					multiplier: 0,
					distance: 'Far 4',
				},
				{
					group: 'Light Bowgun (Storm Step Shot)',
					multiplier: 0,
					distance: 'Far 5',
				},
				{
					group: 'Heavy Bowgun',
					multiplier: 1,
					distance: 'Close',
				},
				{
					group: 'Heavy Bowgun',
					multiplier: 1,
					distance: 'Mid 1',
				},
				{
					group: 'Heavy Bowgun',
					multiplier: 1,
					distance: 'Mid 2',
				},
				{
					group: 'Heavy Bowgun',
					multiplier: 0,
					distance: 'Far 1',
				},
				{
					group: 'Heavy Bowgun',
					multiplier: 0,
					distance: 'Far 2',
				},
				{
					group: 'Heavy Bowgun',
					multiplier: 0,
					distance: 'Far 3',
				},
				{
					group: 'Heavy Bowgun',
					multiplier: 0,
					distance: 'Far 4',
				},
				{
					group: 'Heavy Bowgun',
					multiplier: 0,
					distance: 'Far 5',
				},
			],
		},
	];

	$: criticalDistanceChartData = getCriticalDistanceChartData(
		criticalDistanceAmmoTypeForChart,
	);

	$: criticalDistanceChartOptions = {
		title: `Critical Distance (${criticalDistanceAmmoTypeForChart})`,
		theme: $theme,
		height: '400px',
		legend: { enabled: true, truncation: { numCharacter: 24 } },
		axes: {
			bottom: {
				title: 'Distance',
				mapsTo: 'distance',
				scaleType: ScaleTypes.LABELS,
			},
			left: {
				title: 'Multiplier',
				mapsTo: 'multiplier',
				scaleType: ScaleTypes.LINEAR,
			},
		},
	} as LineChartOptions;

	$: criticalDistanceBowChartOptions = {
		title: 'Critical Distance (Bow)',
		theme: $theme,
		height: '400px',
		legend: { enabled: true, truncation: { numCharacter: 24 } },
		axes: {
			bottom: {
				title: 'Distance',
				mapsTo: 'distance',
				scaleType: ScaleTypes.LABELS,
			},
			left: {
				title: 'Multiplier',
				mapsTo: 'multiplier',
				scaleType: ScaleTypes.LINEAR,
			},
		},
	} as LineChartOptions;

	$: flashConversionChartOptions = {
		title: 'Flash Conversion Total Affinity to True Raw',
		theme: $theme,
		height: '400px',
		legend: { enabled: false },
		axes: {
			bottom: {
				title: 'Affinity',
				mapsTo: 'affinity',
				scaleType: ScaleTypes.LINEAR,
				domain: [100, 500],
			},
			left: {
				mapsTo: 'trueRaw',
				title: 'True Raw',
				scaleType: ScaleTypes.LINEAR,
			},
		},
	} as LineChartOptions;

	let criticalDistanceBowChartLoaded = false;

	onMount(async () => {
		const charts = await import('@carbon/charts-svelte');
		flashConversionChart = charts.LineChart;
		flashConversionChartLoaded = true;
		criticalDistanceChart = charts.LineChart;
		criticalDistanceChartLoaded = true;
		criticalDistanceBowChart = charts.LineChart;
		criticalDistanceBowChartLoaded = true;
	});

	type DataTableKey = string;

	type DataTableValue = any;

	interface DataTableRow {
		id: any;
		[key: string]: DataTableValue;
	}

	interface DataTableCell {
		key: DataTableKey;
		value: DataTableValue;
		display?: (item: any, row: DataTableRow) => DataTableValue;
	}

	function getSharedMotionValues() {
		let result: {
			id: string;
			name: string;
			motion: string;
			raw: string;
			element: string;
			total: string;
			fire: string;
			water: string;
			thunder: string;
			ice: string;
			dragon: string;
			additional: string;
		}[] = [];

		sharedWeaponMotionValues.motionValues.forEach((element, index) => {
			result.push({
				id: index.toString(),
				name: element.name,
				motion: element.values,
				raw: '0',
				element: '0',
				total: '0',
				fire: '0',
				water: '0',
				thunder: '0',
				ice: '0',
				dragon: '0',
				additional: '0',
			});
		});

		return result;
	}

	function getWeaponSectionNames(weaponName: FrontierWeaponName) {
		let result: { id: string; text: string }[] = [];

		let sections = getSectionNamesByWeapon(weaponName);

		sections.forEach((element) => {
			result.push({ id: element, text: element });
		});

		return result;
	}

	function getSectionNamesByWeapon(weaponName: FrontierWeaponName) {
		// Find the weapon by name
		const weapon = weaponMotionValues.find((w) => w.name === weaponName);
		if (!weapon) {
			// Return an empty array or an error message if the weapon is not found
			return []; // or throw new Error('Weapon not found');
		}

		// Map over the sections of the found weapon to extract their names
		const sectionNames = weapon.sections.map((section) => section.name);

		// Return the array of section names
		return sectionNames;
	}

	function getWeaponClass(weaponName: FrontierWeaponName): FrontierWeaponClass {
		if (
			weaponName === 'Bow' ||
			inputWeaponType === 'Light Bowgun' ||
			inputWeaponType === 'Heavy Bowgun'
		) {
			return 'Gunner';
		} else {
			return 'Blademaster';
		}
	}

	function getElementMultiplier(
		elementSlot: FrontierElement,
		inputElement: FrontierElement,
	) {
		switch (elementSlot) {
			case 'Fire':
				return (
					elementMultipliers.find((w) => w.name === inputElement)
						?.fireMultiplier || 0
				);
			case 'Water':
				return (
					elementMultipliers.find((w) => w.name === inputElement)
						?.waterMultiplier || 0
				);
			case 'Thunder':
				return (
					elementMultipliers.find((w) => w.name === inputElement)
						?.thunderMultiplier || 0
				);
			case 'Ice':
				return (
					elementMultipliers.find((w) => w.name === inputElement)
						?.iceMultiplier || 0
				);
			case 'Dragon':
				return (
					elementMultipliers.find((w) => w.name === inputElement)
						?.dragonMultiplier || 0
				);
			default:
				return 0;
		}
	}

	function getStatusAssault(
		weaponType: FrontierWeaponName,
		statusType: FrontierStatus,
	) {
		if (statusType === 'Poison') {
			return (
				WeaponTypes.find((w) => w.name === weaponType)?.statusAssaultPoison || 0
			);
		} else if (statusType === 'Paralysis') {
			return (
				WeaponTypes.find((w) => w.name === weaponType)
					?.statusAssaultParalysis || 0
			);
		} else {
			return 0;
		}
	}

	function getMotionValueNumber(input: string): number {
		// Remove unwanted patterns
		let cleanedInput = input.replace(
			/\[K\]|\(\d+\s*(Sigil|Healing|Status|KO)\)/g,
			'',
		);
		cleanedInput = cleanedInput.replace(/※ Impact/g, '');
		cleanedInput = cleanedInput.replace('※', '');

		// Remove parentheses and their contents
		cleanedInput = cleanedInput.replace(/\(\d+\)/g, '');

		// Replace multiplication symbols
		cleanedInput = cleanedInput.replace('x', '*');

		// Replace sum symbols
		cleanedInput = cleanedInput.replace('･', '+');

		// Split the cleaned string into an array of numbers and operators
		const parts = cleanedInput.split(/(\d+|\+|\*)/).filter(Boolean);

		console.warn(`parts: ${parts}`);

		// Initialize result
		let result = 0;

		// Iterate over parts and perform operations
		for (let i = 0; i < parts.length; i++) {
			if (parts[i] === '+') {
				// Perform addition
				result += parseFloat(parts[++i]);
			} else if (parts[i] === '*') {
				// Perform multiplication
				result *= parseFloat(parts[++i]);
			} else {
				// Handle numbers
				result = parseFloat(parts[i]);
			}
		}

		// TODO
		if (result === NaN) {
			result = parseFloat(parts[0]);
		}

		return result;
	}

	function getCSVFromArray(array: Array<object>) {
		// Check if the array is not empty
		if (array.length === 0) {
			return '';
		}

		// Extract the keys from the first object in the array to use as the header row
		const header = Object.keys(array[0]).join(',');

		// Convert the array of objects to a CSV string, including the header row
		const csv = array.map((obj) => Object.values(obj).join(',')).join('\n');

		// Return the CSV string with the header row at the beginning
		return `${header}\n${csv}`;
	}

	function getBentoSectionValues(section: string) {
		let defaultResult = [
			{
				id: '',
				ingredient1: '',
				ingredient2: '',
				dish: '',
				health: '0',
				stamina: '0',
				attack: '0',
				defense: '0',
			},
		];

		const bentoSectionEntry = bentoValues.find((b) => b.name === section);
		if (!bentoSectionEntry) {
			console.error('Bento not found');
			return defaultResult;
		}

		let result: {
			id: string;
			ingredient1: string;
			ingredient2: string;
			dish: string;
			health: string;
			stamina: string;
			attack: string;
			defense: string;
		}[] = [];

		bentoSectionEntry.values.forEach((element) => {
			result.push({
				id: `${element.ingredient1} ${element.ingredient2}`,
				ingredient1: element.ingredient1,
				ingredient2: element.ingredient2,
				dish: element.dish,
				health: element.health,
				stamina: element.stamina,
				attack: element.attack,
				defense: element.defense,
			});
		});

		return result;
	}

	function getWeaponSectionMotionValues(
		weaponName: FrontierWeaponName,
		section: string,
	) {
		let weaponClass = getWeaponClass(weaponName);

		let defaultResult = [
			{
				id: '',
				name: '',
				motion: '', // TODO they are wrong motions
				raw: '0', // TODO
				element: '0', // TODO the rest
				total: '0',
				fire: '0',
				water: '0',
				thunder: '0',
				ice: '0',
				dragon: '0',
				additional: '0',
			},
		];

		// Find the weapon by name
		const weaponEntry = weaponMotionValues.find((w) => w.name === weaponName);
		if (!weaponEntry) {
			// Return an empty object or an error message if the weapon is not found
			console.error('Weapon not found');
			return defaultResult; // or throw new Error('Weapon not found');
		}

		// Find the section by name within the found weapon
		let sectionEntry = weaponEntry.sections.find((s) => s.name === section);
		if (!sectionEntry) {
			sectionEntry = weaponEntry.sections[0];
			inputWeaponMotionValuesSection = sectionEntry.name;
		}

		let result: {
			id: string;
			name: string;
			motion: string;
			raw: string;
			element: string;
			total: string;
			fire: string;
			water: string;
			thunder: string;
			ice: string;
			dragon: string;
			additional: string;
		}[] = [];

		let outputTotal = 0;

		// hitzone preprocessing
		let elementHitzoneFireMultiplier = getElementalExploit(
			weaponClass,
			inputNumberFireHitzone,
		);
		let elementHitzoneWaterMultiplier = getElementalExploit(
			weaponClass,
			inputNumberWaterHitzone,
		);
		let elementHitzoneThunderMultiplier = getElementalExploit(
			weaponClass,
			inputNumberThunderHitzone,
		);
		let elementHitzoneIceMultiplier = getElementalExploit(
			weaponClass,
			inputNumberIceHitzone,
		);
		let elementHitzoneDragonMultiplier = getElementalExploit(
			weaponClass,
			inputNumberDragonHitzone,
		);
		let rawHitzoneMultiplier = getExploitWeakness(
			weaponClass,
			inputNumberRawHitzone,
		);

		let usedFire = Math.floor(
			((Math.floor(
				(inputNumberElementalValueReplacement +
					inputNumberSigil1Element * 10 +
					inputNumberSigil2Element * 10 +
					inputNumberSigil3Element * 10 +
					inputNumberUnlimitedSigil * 10 +
					outputAoeElement) *
					outputFireMultiplier *
					outputZenithElementMultiplier *
					outputElementalAttackMultiplier *
					outputHHElementalSongMultiplier *
					outputWeaponElementMultiplier *
					outputFuriousMultiplier *
					fireValueMultiplier,
			) /
				10) *
				outputSharpnessMultiplier *
				elementHitzoneFireMultiplier) /
				100,
		);
		let usedWater = Math.floor(
			((Math.floor(
				(inputNumberElementalValueReplacement +
					inputNumberSigil1Element * 10 +
					inputNumberSigil2Element * 10 +
					inputNumberSigil3Element * 10 +
					inputNumberUnlimitedSigil * 10 +
					outputAoeElement) *
					outputWaterMultiplier *
					outputZenithElementMultiplier *
					outputElementalAttackMultiplier *
					outputHHElementalSongMultiplier *
					outputWeaponElementMultiplier *
					outputFuriousMultiplier *
					waterValueMultiplier,
			) /
				10) *
				outputSharpnessMultiplier *
				elementHitzoneWaterMultiplier) /
				100,
		);
		let usedThunder = Math.floor(
			((Math.floor(
				(inputNumberElementalValueReplacement +
					inputNumberSigil1Element * 10 +
					inputNumberSigil2Element * 10 +
					inputNumberSigil3Element * 10 +
					inputNumberUnlimitedSigil * 10 +
					outputAoeElement) *
					outputThunderMultiplier *
					outputZenithElementMultiplier *
					outputElementalAttackMultiplier *
					outputHHElementalSongMultiplier *
					outputWeaponElementMultiplier *
					outputFuriousMultiplier *
					thunderValueMultiplier,
			) /
				10) *
				outputSharpnessMultiplier *
				elementHitzoneThunderMultiplier) /
				100,
		);
		let usedIce = Math.floor(
			((Math.floor(
				(inputNumberElementalValueReplacement +
					inputNumberSigil1Element * 10 +
					inputNumberSigil2Element * 10 +
					inputNumberSigil3Element * 10 +
					inputNumberUnlimitedSigil * 10 +
					outputAoeElement) *
					outputIceMultiplier *
					outputZenithElementMultiplier *
					outputElementalAttackMultiplier *
					outputHHElementalSongMultiplier *
					outputWeaponElementMultiplier *
					outputFuriousMultiplier *
					iceValueMultiplier,
			) /
				10) *
				outputSharpnessMultiplier *
				elementHitzoneIceMultiplier) /
				100,
		);
		let usedDragon = Math.floor(
			((Math.floor(
				(inputNumberElementalValueReplacement +
					inputNumberSigil1Element * 10 +
					inputNumberSigil2Element * 10 +
					inputNumberSigil3Element * 10 +
					inputNumberUnlimitedSigil * 10 +
					outputAoeElement) *
					outputDragonMultiplier *
					outputZenithElementMultiplier *
					outputElementalAttackMultiplier *
					outputHHElementalSongMultiplier *
					outputWeaponElementMultiplier *
					outputFuriousMultiplier *
					dragonValueMultiplier,
			) /
				10) *
				outputSharpnessMultiplier *
				elementHitzoneDragonMultiplier) /
				100,
		);

		sectionEntry.motionValues.forEach((element, index) => {
			let motionValue = getMotionValueNumber(element.values);
			let hitCount = 1;
			let elementMultiplier = 1;
			let critMultiplier = 1;
			let totalAffinityUsed = 0;
			let SwordAndShieldSigilAdded = 0;
			let flagMultiplier = 1;
			let fireOutput = 0;
			let waterOutput = 0;
			let thunderOutput = 0;
			let iceOutput = 0;
			let dragonOutput = 0;
			let statusAssaultMultiplier = 1;
			let additional = 0;
			let statusAssault = 0;

			// handle motions with additional properties
			if (element.name === 'Custom Motion') {
				// TODO
				motionValue = inputNumberTotalMotionValue;
				hitCount = inputNumberHitCount;
				elementMultiplier = inputNumberElementalMultiplier;
			}

			// Reflect
			if (inputCritMode === 'No Crits') {
				critMultiplier = 1.0;
			} else {
				if (inputCritMode === 'All Crits') {
					critMultiplier = inputNumberCritMultiplier;
					totalAffinityUsed = 100;
				} else if (inputCritMode === 'Averaged') {
					totalAffinityUsed =
						outputIssenAffinity +
						outputSharpnessAffinity +
						inputNumberUnlimitedSigil + // TODO?
						inputNumberSigil1Affinity +
						inputNumberSigil2Affinity +
						inputNumberSigil3Affinity +
						outputStyleRankAffinity +
						outputExpertAffinity +
						inputNumberNaturalAffinity +
						outputFlashConversionAffinity +
						outputStarvingWolfAffinity +
						outputCeaselessAffinity;
					if (totalAffinityUsed > 100) {
						totalAffinityUsed = 100;
					} else if (totalAffinityUsed < 0) {
						totalAffinityUsed = 0;
					}
					critMultiplier =
						(totalAffinityUsed / 100) * inputNumberCritMultiplier +
						(1 - totalAffinityUsed / 100) * 1;
				} else {
					critMultiplier = 1.0;
					totalAffinityUsed = 0;
				}
			}

			// SnS Sigil
			if (element.name === 'Sigil Additional') {
				if (inputElement === 'None') {
					SwordAndShieldSigilAdded = Math.floor(
						Math.floor(
							outputTrueRaw *
								0.025 *
								outputSharpnessMultiplier *
								(rawHitzoneMultiplier / 100),
						) * outputMonsterTotalDefense,
					);
					critMultiplier = 1.0;
					motionValue = 0;
				} else {
					motionValue = 0;
					SwordAndShieldSigilAdded = 0;
				}
			} else {
				SwordAndShieldSigilAdded = 0;
			}

			// GS Charges
			// TODO object
			if (element.name === 'Lv1 Charge') {
				flagMultiplier = 1.1;
			} else if (element.name === 'Lv2 Charge') {
				flagMultiplier = 1.2;
			} else if (element.name === 'Lv3 Charge') {
				flagMultiplier = 1.3;
			} else {
				flagMultiplier = 1;
			}

			fireOutput = Math.floor(
				Math.floor(usedFire * outputMonsterTotalDefense) *
					hitCount *
					elementMultiplier *
					outputFencingMultiplier,
			);

			waterOutput = Math.floor(
				Math.floor(usedWater * outputMonsterTotalDefense) *
					hitCount *
					elementMultiplier *
					outputFencingMultiplier,
			);
			thunderOutput = Math.floor(
				Math.floor(usedThunder * outputMonsterTotalDefense) *
					hitCount *
					elementMultiplier *
					outputFencingMultiplier,
			);
			iceOutput = Math.floor(
				Math.floor(usedIce * outputMonsterTotalDefense) *
					hitCount *
					elementMultiplier *
					outputFencingMultiplier,
			);
			dragonOutput = Math.floor(
				Math.floor(usedDragon * outputMonsterTotalDefense) *
					hitCount *
					elementMultiplier *
					outputFencingMultiplier,
			);

			let totalElementalOutput =
				fireOutput + waterOutput + thunderOutput + iceOutput + dragonOutput;

			// Additional including status assault
			// Status active, poison or paralysis
			if (
				inputStatusAttackUp === 'On (For Sleep add +10 raw hitbox)' &&
				inputStatus !== 'None'
			) {
				// Check for enough to deal status
				if (inputNumberStatusValue < 10) {
					statusAssault = 0;

					// Enough to deal
				} else if (inputNumberStatusValue >= 10) {
					// Set damage multiplier
					if (inputStatus === 'Poison') {
						statusAssaultMultiplier = 1.5;
					} else {
						statusAssaultMultiplier = 6;
					}

					// Status assault Poison (1.5 x (Poison + Modifier)) * defrate stuff
					statusAssault = Math.floor(
						Math.floor(
							Math.floor(
								statusAssaultMultiplier *
									(outputStatusUsedSA +
										getStatusAssault(inputWeaponType, 'Poison')),
							) * outputMonsterTotalDefense,
						) * outputFencingMultiplier,
					);
				}
			} else {
				statusAssault = 0;
			}

			if (element.name === '~ Burst ~ 3 Hits') {
				additional = Math.floor(50 * outputMonsterTotalDefense);
			} else if (element.name === '~ Burst ~ 11 Hits') {
				additional = Math.floor(100 * outputMonsterTotalDefense);
			} else if (element.name === '~ Burst ~ 12 Hits+') {
				additional = Math.floor(200 * outputMonsterTotalDefense);
			} else {
				additional = 0;
			}

			outputAdditional =
				(Math.floor(inputNumberOtherAdditional * outputMonsterTotalDefense) +
					additional +
					statusAssault +
					SwordAndShieldSigilAdded) *
				hitCount;

			// Raw Output
			let rawOutput = Math.floor(
				Math.floor(
					Math.floor(
						Math.floor(
							Math.floor(
								((Math.floor(motionValue * critMultiplier) / 100) *
									getMaxTrueRaw(internalTrueRaw) *
									outputSharpnessMultiplier *
									flagMultiplier *
									outputSwordAndShieldMultiplier *
									outputOtherMultipliers * // TODO
									outputMonsterStatusInflictedMultiplier *
									rawHitzoneMultiplier) /
									100,
							) * outputMonsterTotalDefense,
						),
					) * outputAbsoluteDefenseMultiplier,
				) *
					outputPremiumCourseMultiplier *
					outputFencingMultiplier,
			);

			console.log(`motionValue: ${motionValue}`);
			console.log(`critMultiplier: ${critMultiplier}`);
			console.log(`internalAttack: ${internalAttack}`);
			console.log(`outputSharpnessMultiplier: ${outputSharpnessMultiplier}`);
			console.log(`flagMultiplier: ${flagMultiplier}`);
			console.log(
				`outputSwordAndShieldMultiplier: ${outputSwordAndShieldMultiplier}`,
			);
			console.log(`outputOtherMultipliers: ${outputOtherMultipliers}`);
			console.log(
				`outputMonsterStatusInflictedMultiplier: ${outputMonsterStatusInflictedMultiplier}`,
			);
			console.log(`rawHitzoneMultiplier: ${rawHitzoneMultiplier}`);
			console.log(`outputMonsterTotalDefense: ${outputMonsterTotalDefense}`);
			console.log(
				`outputAbsoluteDefenseMultiplier: ${outputAbsoluteDefenseMultiplier}`,
			);
			console.log(
				`outputPremiumCourseMultiplier: ${outputPremiumCourseMultiplier}`,
			);
			console.log(`outputFencingMultiplier: ${outputFencingMultiplier}`);
			console.log(`rawOutput: ${rawOutput}`);

			// Final Ouput
			outputTotal = totalElementalOutput + rawOutput + outputAdditional;

			// Used Values

			console.log('-start-');
			console.log(
				inputNumberElementalValueReplacement +
					inputNumberSigil1Element * 10 +
					inputNumberSigil2Element * 10 +
					inputNumberSigil3Element * 10 +
					inputNumberUnlimitedSigil * 10 +
					outputAoeElement,
			);
			console.log('-1-');

			console.log(getElementMultiplier('Fire', inputElement));
			console.log('-2-');

			console.log(outputZenithElementMultiplier);
			console.log('-3-');

			console.log(outputElementalAttackMultiplier);
			console.log('-4-');

			console.log(outputHHElementalSongMultiplier);
			console.log('-5-');

			console.log(outputWeaponElementMultiplier);
			console.log('-6-');

			console.log(outputFuriousMultiplier);
			console.log('-7-');

			console.log(fireValueMultiplier);
			console.log('-8-');

			console.log(outputSharpnessMultiplier);
			console.log('-end-');

			internalAffinity = totalAffinityUsed;

			console.log(
				`name: ${element.name}\nmotion: ${element.values}\nraw: ${rawOutput.toString()}`,
			);

			result.push({
				id: index.toString(),
				name: element.name,
				motion: element.values,
				raw: rawOutput.toString() === 'NaN' ? '0' : rawOutput.toString(),
				element:
					totalElementalOutput.toString() === 'NaN'
						? '0'
						: totalElementalOutput.toString(),
				total: outputTotal.toString() === 'NaN' ? '0' : outputTotal.toString(),
				fire: fireOutput.toString() === 'NaN' ? '0' : fireOutput.toString(),
				water: waterOutput.toString() === 'NaN' ? '0' : waterOutput.toString(),
				thunder:
					thunderOutput.toString() === 'NaN' ? '0' : thunderOutput.toString(),
				ice: iceOutput.toString() === 'NaN' ? '0' : iceOutput.toString(),
				dragon:
					dragonOutput.toString() === 'NaN' ? '0' : dragonOutput.toString(),
				additional:
					outputAdditional.toString() === 'NaN'
						? '0'
						: outputAdditional.toString(),
			});
		});
		//  outputStatusAssault = 0;
		/*		let internalFire = 0;
	let internalWater = 0;
	let internalIce = 0;
	let internalThunder = 0;
	let internalDragon = 0;
	let finalTrueRawDisplay = 0;
	let finalTrueRaw = 0;
	let missionsNeeded = 0;
	let internalStatus = 0;
	let attackCeiling = 0;
	let internalAttack = 0;
	let internalAffinity = 0;*/
		return result;
	}

	function getMotionValue(
		weapon: FrontierWeaponName,
		section: string,
		motionValueName: string,
	): FrontierMotionValue {
		let defaultValue = { name: '', animation: '', values: '' };

		if (section === 'Shared') {
			// Find the section by name within the found weapon
			const sectionEntry = sharedWeaponMotionValues;
			if (!sectionEntry) {
				// Return an empty object or an error message if the section is not found
				return defaultValue; // or throw new Error('Section not found');
			}

			// Find the motion value by name within the found section
			const motionValue = sectionEntry.motionValues.find(
				(mv) => mv.name === motionValueName,
			);
			if (!motionValue) {
				// Return an empty object or an error message if the motion value is not found
				return defaultValue; // or throw new Error('Motion value not found');
			}

			// Return the found motion value
			return motionValue;
		} else {
			// Find the weapon by name
			const weaponEntry = weaponMotionValues.find((w) => w.name === weapon);
			if (!weaponEntry) {
				// Return an empty object or an error message if the weapon is not found
				return defaultValue; // or throw new Error('Weapon not found');
			}

			// Find the section by name within the found weapon
			const sectionEntry = weaponEntry.sections.find((s) => s.name === section);
			if (!sectionEntry) {
				// Return an empty object or an error message if the section is not found
				return defaultValue; // or throw new Error('Section not found');
			}

			// Find the motion value by name within the found section
			const motionValue = sectionEntry.motionValues.find(
				(mv) => mv.name === motionValueName,
			);
			if (!motionValue) {
				// Return an empty object or an error message if the motion value is not found
				return defaultValue; // or throw new Error('Motion value not found');
			}

			// Return the found motion value
			return motionValue;
		}
	}

	function getIceAgeAnimation(stage: string) {
		switch (stage) {
			case '1':
				return IceAgeStage1Animation;
			case '2':
				return IceAgeStage2Animation;
			case '3':
				return IceAgeStage3Animation;
			default:
				return IceAgeStage1Animation;
		}
	}

	function changeModal(cell: DataTableCell, section: string) {
		modalOpen = true;
		modalHeading = cell.value;
		modalLabel = section || '';

		switch (section) {
			case 'Ice Age Stages':
				modalImage = getIceAgeAnimation(cell.value);
				modalNotes = '';
				break;
			default:
				let motionValue = getMotionValue(inputWeaponType, section, cell.value);
				modalImage = motionValue.animation || '';
				modalNotes = motionValue.notes || '';
				break;
		}
	}

	function hasAnimation(
		weaponName: FrontierWeaponName,
		cell: DataTableCell,
		section: string,
	) {
		let motionValue = getMotionValue(weaponName, section, cell.value);
		return motionValue.animation !== '' && motionValue.animation !== undefined;
	}

	function getWeaponIcon(weaponName: FrontierWeaponName) {
		let icon = WeaponTypes[4].icon;

		const found = WeaponTypes.find((w) => w.name === weaponName);
		if (!found) {
			return icon;
		}

		return found.icon;
	}

	function saveInputsAsJSONFile(input: string) {
		// Create a Blob object from the string content
		const blob = new Blob([input], { type: 'application/json;charset=utf-8' });

		// Generate a URL for the Blob
		const url = URL.createObjectURL(blob);

		// Create an anchor element
		const link = document.createElement('a');

		// Set the href and download attributes of the anchor element
		link.href = url;
		link.download = 'wycademy-arena-inputs.json'; // You can customize the filename here

		// Append the anchor element to the document body
		document.body.appendChild(link);

		// Trigger the download by simulating a click on the anchor element
		link.click();

		// Remove the anchor element from the document
		document.body.removeChild(link);

		// Revoke the URL to free up memory
		URL.revokeObjectURL(url);
	}

	function loadInputsFromJSONFile() {
		// Create an input element to prompt the user to select a file
		const input = document.createElement('input');
		input.type = 'file';
		input.accept = '.json'; // Accept only JSON files

		// Listen for the change event on the input element
		input.addEventListener('change', (event) => {
			const file = (event.target as HTMLInputElement).files?.[0];
			if (file) {
				const reader = new FileReader();

				// Listen for the load event on the FileReader
				reader.onload = (e) => {
					// Assuming inputTextImportData is a variable where you want to store the file content
					inputTextImportData = e.target?.result as string;
					// Call updateInputs or any other function to process the loaded data
					updateInputs();
				};

				// Read the file as text
				reader.readAsText(file);
			}
		});

		// Trigger the file selection dialog
		input.click();
	}

	function updateInputs() {
		if (inputTextImportData === undefined || inputTextImportData === '') {
			return;
		}

		let newInputs = JSON.parse(inputTextImportData);

		// Update individual variables directly
		inputStyleRankAffinity =
			newInputs.inputStyleRankAffinity || inputStyleRankAffinity;

		inputMeleeSharpnessAffinity =
			newInputs.inputMeleeSharpnessAffinity || inputMeleeSharpnessAffinity;
		inputExpertSkills = newInputs.inputExpertSkills || inputExpertSkills;
		// Update other variables as needed
		inputFlashConversion =
			newInputs.inputFlashConversion || inputFlashConversion;
		inputIssenSkills = newInputs.inputIssenSkills || inputIssenSkills;
		inputCeaseless = newInputs.inputCeaseless || inputCeaseless;
		inputStarvingWolf = newInputs.inputStarvingWolf || inputStarvingWolf;
		inputAffinityItems = newInputs.inputAffinityItems || inputAffinityItems;
		inputGsActiveFeature =
			newInputs.inputGsActiveFeature || inputGsActiveFeature;
		inputAttackSkills = newInputs.inputAttackSkills || inputAttackSkills;
		inputCaravanSkills = newInputs.inputCaravanSkills || inputCaravanSkills;
		inputPassiveItems = newInputs.inputPassiveItems || inputPassiveItems;
		inputFoodConsumables =
			newInputs.inputFoodConsumables || inputFoodConsumables;
		inputSeedsFlutesCat = newInputs.inputSeedsFlutesCat || inputSeedsFlutesCat;
		inputLanceHbg = newInputs.inputLanceHbg || inputLanceHbg;
		inputLoneWolf = newInputs.inputLoneWolf || inputLoneWolf;
		inputCritConversion = newInputs.inputCritConversion || inputCritConversion;
		inputStylishAssault = newInputs.inputStylishAssault || inputStylishAssault;
		inputConsumptionSlayer =
			newInputs.inputConsumptionSlayer || inputConsumptionSlayer;
		inputObscurity = newInputs.inputObscurity || inputObscurity;
		inputRush = newInputs.inputRush || inputRush;
		inputFurious = newInputs.inputFurious || inputFurious;
		inputShiriagari = newInputs.inputShiriagari || inputShiriagari;
		inputIncitement = newInputs.inputIncitement || inputIncitement;
		inputLengthUp = newInputs.inputLengthUp || inputLengthUp;
		inputRoadAttack = newInputs.inputRoadAttack || inputRoadAttack;
		inputRoadAdvLvFlr = newInputs.inputRoadAdvLvFlr || inputRoadAdvLvFlr;
		inputRoadLastStand = newInputs.inputRoadLastStand || inputRoadLastStand;
		inputDuremudiraAttack =
			newInputs.inputDuremudiraAttack || inputDuremudiraAttack;
		inputAttackMedicine = newInputs.inputAttackMedicine || inputAttackMedicine;
		inputHhAttackSongs = newInputs.inputHhAttackSongs || inputHhAttackSongs;
		inputAdrenalineVigorous =
			newInputs.inputAdrenalineVigorous || inputAdrenalineVigorous;
		inputVigorousUp = newInputs.inputVigorousUp || inputVigorousUp;
		inputHidenSkills = newInputs.inputHidenSkills || inputHidenSkills;
		inputWeaponSpecific = newInputs.inputWeaponSpecific || inputWeaponSpecific;
		inputCombatSupremacy =
			newInputs.inputCombatSupremacy || inputCombatSupremacy;
		inputArmor1 = newInputs.inputArmor1 || inputArmor1;
		inputOriginArmor = newInputs.inputOriginArmor || inputOriginArmor;
		inputGArmorPieces = newInputs.inputGArmorPieces || inputGArmorPieces;
		inputGsr999SecretTech =
			newInputs.inputGsr999SecretTech || inputGsr999SecretTech;
		inputRedSoul = newInputs.inputRedSoul || inputRedSoul;
		inputAssistance = newInputs.inputAssistance || inputAssistance;
		inputBondMaleHunter = newInputs.inputBondMaleHunter || inputBondMaleHunter;
		inputPartnyaaBond = newInputs.inputPartnyaaBond || inputPartnyaaBond;
		inputFireMultipliers =
			newInputs.inputFireMultipliers || inputFireMultipliers;
		inputWaterMultipliers =
			newInputs.inputWaterMultipliers || inputWaterMultipliers;
		inputThunderMultipliers =
			newInputs.inputThunderMultipliers || inputThunderMultipliers;
		inputIceMultipliers = newInputs.inputIceMultipliers || inputIceMultipliers;
		inputDragonMultipliers =
			newInputs.inputDragonMultipliers || inputDragonMultipliers;
		inputElementalAttackMultiplier =
			newInputs.inputElementalAttackMultiplier ||
			inputElementalAttackMultiplier;
		inputHhElementalUp = newInputs.inputHhElementalUp || inputHhElementalUp;
		inputAbnormality = newInputs.inputAbnormality || inputAbnormality;
		inputDrugKnowledge = newInputs.inputDrugKnowledge || inputDrugKnowledge;
		inputStatusAssault = newInputs.inputStatusAssault || inputStatusAssault;
		inputStatusAttackUp = newInputs.inputStatusAttackUp || inputStatusAttackUp;
		inputGuildPoogie = newInputs.inputGuildPoogie || inputGuildPoogie;
		inputStatusSigil = newInputs.inputStatusSigil || inputStatusSigil;
		inputWeaponStatusModifiers =
			newInputs.inputWeaponStatusModifiers || inputWeaponStatusModifiers;
		inputWeaponType = newInputs.inputWeaponType || inputWeaponType;
		inputAoeAttackSigil = newInputs.inputAoeAttackSigil || inputAoeAttackSigil;
		inputAoeAffinitySigil =
			newInputs.inputAoeAffinitySigil || inputAoeAffinitySigil;
		inputCritMode = newInputs.inputCritMode || inputCritMode;
		inputSharpness = newInputs.inputSharpness || inputSharpness;
		inputFencing = newInputs.inputFencing || inputFencing;
		inputDistanceMultiplier =
			newInputs.inputDistanceMultiplier || inputDistanceMultiplier;
		inputBulletModifier = newInputs.inputBulletModifier || inputBulletModifier;
		inputShotMultiplier = newInputs.inputShotMultiplier || inputShotMultiplier;
		inputHbgChargeShot = newInputs.inputHbgChargeShot || inputHbgChargeShot;
		inputCompressedShotMultiplier =
			newInputs.inputCompressedShotMultiplier || inputCompressedShotMultiplier;
		inputCompressedElementShot =
			newInputs.inputCompressedElementShot || inputCompressedElementShot;
		inputBowCoatingsMultiplier =
			newInputs.inputBowCoatingsMultiplier || inputBowCoatingsMultiplier;
		inputChargeMultiplier =
			newInputs.inputChargeMultiplier || inputChargeMultiplier;
		inputQuickShot = newInputs.inputQuickShot || inputQuickShot;
		inputElement = newInputs.inputElement || inputElement;
		inputAoeElementSigil =
			newInputs.inputAoeElementSigil || inputAoeElementSigil;
		inputWeaponElementMultipliers =
			newInputs.inputWeaponElementMultipliers || inputWeaponElementMultipliers;
		inputStatus = newInputs.inputStatus || inputStatus;
		inputMonsterStatus = newInputs.inputMonsterStatus || inputMonsterStatus;
		inputThunderClad = newInputs.inputThunderClad || inputThunderClad;
		inputExploitWeakness =
			newInputs.inputExploitWeakness || inputExploitWeakness;
		inputPointBreakthrough =
			newInputs.inputPointBreakthrough || inputPointBreakthrough;
		inputAcidShots = newInputs.inputAcidShots || inputAcidShots;
		inputElementalExploiter =
			newInputs.inputElementalExploiter || inputElementalExploiter;
		inputHuntingHornDebuff =
			newInputs.inputHuntingHornDebuff || inputHuntingHornDebuff;
		inputPrecisionSniperCritS =
			newInputs.inputPrecisionSniperCritS || inputPrecisionSniperCritS;
		inputAbsoluteDefense =
			newInputs.inputAbsoluteDefense || inputAbsoluteDefense;
		inputPremiumBoost = newInputs.inputPremiumBoost || inputPremiumBoost;

		inputNumberCritConversion =
			newInputs.inputNumberCritConversion || inputNumberCritConversion;
		inputNumberRoadFloor =
			newInputs.inputNumberRoadFloor || inputNumberRoadFloor;
		inputNumberConquestAttack =
			newInputs.inputNumberConquestAttack || inputNumberConquestAttack;
		inputNumberVampirism =
			newInputs.inputNumberVampirism || inputNumberVampirism;
		inputNumberTotalMotionValue =
			newInputs.inputNumberTotalMotionValue || inputNumberTotalMotionValue;
		inputNumberHitCount = newInputs.inputNumberHitCount || inputNumberHitCount;
		inputNumberElementalMultiplier =
			newInputs.inputNumberElementalMultiplier ||
			inputNumberElementalMultiplier;
		inputNumberTrueRaw = newInputs.inputNumberTrueRaw || inputNumberTrueRaw;
		inputNumberUnlimitedSigil =
			newInputs.inputNumberUnlimitedSigil || inputNumberUnlimitedSigil;
		inputNumberStyleRankAttack =
			newInputs.inputNumberStyleRankAttack || inputNumberStyleRankAttack;
		inputNumberSigil1Attack =
			newInputs.inputNumberSigil1Attack || inputNumberSigil1Attack;
		inputNumberSigil2Attack =
			newInputs.inputNumberSigil2Attack || inputNumberSigil2Attack;
		inputNumberSigil3Attack =
			newInputs.inputNumberSigil3Attack || inputNumberSigil3Attack;
		inputNumberZenithAttackSigil =
			newInputs.inputNumberZenithAttackSigil || inputNumberZenithAttackSigil;
		inputNumberAOEAttackSigil =
			newInputs.inputNumberAOEAttackSigil || inputNumberAOEAttackSigil;
		inputNumberNaturalAffinity =
			newInputs.inputNumberNaturalAffinity || inputNumberNaturalAffinity;
		inputNumberSigil1Affinity =
			newInputs.inputNumberSigil1Affinity || inputNumberSigil1Affinity;
		inputNumberSigil2Affinity =
			newInputs.inputNumberSigil2Affinity || inputNumberSigil2Affinity;
		inputNumberSigil3Affinity =
			newInputs.inputNumberSigil3Affinity || inputNumberSigil3Affinity;
		inputNumberAOEAffinitySigil =
			newInputs.inputNumberAOEAffinitySigil || inputNumberAOEAffinitySigil;
		inputNumberCritMultiplier =
			newInputs.inputNumberCritMultiplier || inputNumberCritMultiplier;
		inputNumberLanceImpactMultiplier =
			newInputs.inputNumberLanceImpactMultiplier ||
			inputNumberLanceImpactMultiplier;
		inputNumberTranscendRawMultiplier =
			newInputs.inputNumberTranscendRawMultiplier ||
			inputNumberTranscendRawMultiplier;
		inputNumberRavientePowerSwordCrystalsMultiplier =
			newInputs.inputNumberRavientePowerSwordCrystalsMultiplier ||
			inputNumberRavientePowerSwordCrystalsMultiplier;
		inputNumberElementalValueReplacement =
			newInputs.inputNumberElementalValueReplacement ||
			inputNumberElementalValueReplacement;
		inputNumberSigil1Element =
			newInputs.inputNumberSigil1Element || inputNumberSigil1Element;
		inputNumberSigil2Element =
			newInputs.inputNumberSigil2Element || inputNumberSigil2Element;
		inputNumberSigil3Element =
			newInputs.inputNumberSigil3Element || inputNumberSigil3Element;
		inputNumberZenithElementSigil =
			newInputs.inputNumberZenithElementSigil || inputNumberZenithElementSigil;
		inputNumberAOEElementSigil =
			newInputs.inputNumberAOEElementSigil || inputNumberAOEElementSigil;
		inputNumberStatusValue =
			newInputs.inputNumberStatusValue || inputNumberStatusValue;
		inputNumberOtherAdditional =
			newInputs.inputNumberOtherAdditional || inputNumberOtherAdditional;
		inputNumberCompressedShot =
			newInputs.inputNumberCompressedShot || inputNumberCompressedShot;
		inputNumberCompressedElementShot =
			newInputs.inputNumberCompressedElementShot ||
			inputNumberCompressedElementShot;
		inputNumberDefenseRate =
			newInputs.inputNumberDefenseRate || inputNumberDefenseRate;
		inputNumberMonsterRage =
			newInputs.inputNumberMonsterRage || inputNumberMonsterRage;
		inputNumberHCModifiers =
			newInputs.inputNumberHCModifiers || inputNumberHCModifiers;
		inputNumberRawHitzone =
			newInputs.inputNumberRawHitzone || inputNumberRawHitzone;
		inputNumberFireHitzone =
			newInputs.inputNumberFireHitzone || inputNumberFireHitzone;
		inputNumberWaterHitzone =
			newInputs.inputNumberWaterHitzone || inputNumberWaterHitzone;
		inputNumberThunderHitzone =
			newInputs.inputNumberThunderHitzone || inputNumberThunderHitzone;
		inputNumberIceHitzone =
			newInputs.inputNumberIceHitzone || inputNumberIceHitzone;
		inputNumberDragonHitzone =
			newInputs.inputNumberDragonHitzone || inputNumberDragonHitzone;
	}

	function prettyPrintJson(input: string | object) {
		let json;
		if (typeof input === 'string') {
			// If the input is a string, parse it to an object
			json = JSON.parse(input);
		} else {
			// If the input is already an object, just use it
			json = input;
		}

		// Use JSON.stringify with the third parameter for pretty-printing
		return JSON.stringify(json, null, 2);
	}

	function getRoadAdvancementValue(lv: number, floor: number) {
		let advFloors = 0;
		let roadAdvancement = 0;
		if (lv !== 0) {
			if (floor > 10) {
				if (floor > 26) {
					advFloors = 21;
				} else {
					advFloors = floor - 5;
				}

				roadAdvancement = lv + Math.floor((advFloors - 1) / 5) * 10;
			} else if (floor > 5) {
				roadAdvancement = lv;
			} else {
				roadAdvancement = 0;
			}
		} else {
			roadAdvancement = 0;
		}

		return roadAdvancement;
	}

	function getDrugKnowledgeAddition(
		outputDrugKnowledgeMultiplier: number,
		inputStatusValue: number,
		outputStatusAttack: number,
		outputStatusGuildPoogieMultiplier: number,
		outputStatusSigilMultiplier: number,
	) {
		let drugKnowledgeRaw = 0;

		if (outputDrugKnowledgeMultiplier !== 1) {
			drugKnowledgeRaw = Math.floor(
				Math.floor(
					(inputStatusValue * // TODO input?
						outputStatusAttackUpMultiplier *
						outputStatusGuildPoogieMultiplier *
						outputStatusSigilMultiplier *
						outputFuriousMultiplier) /
						10,
				) *
					outputDrugKnowledgeMultiplier *
					0.658,
			);
		}

		return drugKnowledgeRaw;
	}

	function getCritConversionValue(
		outputCritConversion: number,
		outputCritUp: number,
		naturalAffinity: number,
	) {
		let result = 0;
		if (outputCritConversion < 101) {
			if (outputCritUp === 1) {
				result = 0 + Math.floor(Math.sqrt(naturalAffinity) * 5);
			} else if (outputCritUp === 2) {
				result = 0 + Math.floor(Math.sqrt(naturalAffinity) * 10);
			} else {
				result = 0;
			}
		} else {
			if (outputCritUp === 1) {
				result =
					Math.floor(Math.sqrt(outputCritConversion - 100) * 7) +
					Math.floor(Math.sqrt(naturalAffinity) * 5);
			} else if (outputCritUp === 2) {
				result =
					Math.floor(Math.sqrt(outputCritConversion - 100) * 7) +
					Math.floor(Math.sqrt(naturalAffinity) * 10);
			} else {
				result = Math.floor(Math.sqrt(outputCritConversion - 100) * 7);
			}
		}

		return result;
	}

	function getLengthAttackValue(outputLengthType: string, trueRaw: number) {
		let result = trueRaw;
		if (outputLengthType === 'Active') {
			result = Math.ceil(trueRaw - (trueRaw * 0.07 + 0.7));
		}
		// else if (outputLengthType === 2) {
		// 	result = Math.ceil(trueRaw - (trueRaw * 0.07 + 1));
		else if (outputLengthType === 'string') {
			result = trueRaw;
		}

		return result;
	}

	function getObscurityValue(
		weaponType: FrontierWeaponName,
		outputObscurityLevel: number,
	) {
		let obscurityArray: number[] = [];
		let obscurity = 0;
		let weaponClass = getWeaponClass(weaponType);

		if (weaponClass === 'Blademaster') {
			if (
				weaponType === 'Sword and Shield' ||
				weaponType === 'Lance' ||
				weaponType === 'Gunlance' ||
				weaponType === 'Tonfa'
			) {
				// Sns, Lance, Gl, Tonfa
				obscurityArray = [
					0, 40, 80, 120, 160, 200, 220, 240, 260, 280, 300, 70, 140, 210, 240,
					270, 300,
				];
				obscurity = obscurityArray[outputObscurityLevel];
			} else if (
				weaponType === 'Great Sword' ||
				weaponType === 'Switch Axe F' ||
				weaponType === 'Magnet Spike'
			) {
				// GS, Swaxe, Magnet Spike
				obscurityArray = [
					0, 30, 60, 90, 120, 150, 165, 180, 195, 210, 225, 50, 100, 150, 175,
					200, 225,
				];
				obscurity = obscurityArray[outputObscurityLevel];
			} else if (weaponType === 'Long Sword') {
				// LS
				obscurityArray = [
					0, 20, 40, 60, 80, 100, 110, 120, 130, 140, 150, 30, 60, 90, 110, 130,
					150,
				];
				obscurity = obscurityArray[outputObscurityLevel];
			} else {
				obscurity = 0;
			}
		} else {
			obscurity = 0;
		}

		return obscurity;
	}

	// TODO
	function setAbnormalityValues(abnormalityToggleValue: boolean) {
		let drugKnowledgeToggle = false;
		let statusAssaultToggle = false;
		let statusStatusAttackMultiplier = 1;

		if (abnormalityToggleValue) {
			drugKnowledgeToggle = true;
			statusAssaultToggle = true;
			statusStatusAttackMultiplier = 1.125;
		} else {
			drugKnowledgeToggle = false;
			statusAssaultToggle = false;
			statusStatusAttackMultiplier = 1;
		}
	}

	function getCritValue(
		outputStarvingWolfAffinity: number,
		outputCeaselessAffinity: number,
		outputExpertAffinity: number,
		outputIssenAffinity: number,
	) {
		let result = 1.25;
		if (outputStarvingWolfAffinity === 2) {
			result = result + 0.1;
		}

		if (outputCeaselessAffinity === 1) {
			result = result + 0.1;
		} else if (outputCeaselessAffinity === 2) {
			result = result + 0.15;
		} else if (outputCeaselessAffinity === 3) {
			result = result + 0.2;
		} else {
			result = result;
		}

		if (outputExpertAffinity === 100) {
			result = result + 0.25;
			outputIssenAffinity = 0;
		} else if (outputIssenAffinity === 5) {
			result = result + 0.1;
		} else if (outputIssenAffinity === 10) {
			result = result + 0.15;
		} else if (outputIssenAffinity === 20) {
			result = result + 0.25;
		}

		return result.toFixed(2);
	}

	/** Elemental Exploit or Dissolver for melee*/
	function getElementalExploit(
		weaponClass: FrontierWeaponClass,
		hitzone: number,
	) {
		// TODO Gunner
		let result = 0;
		let modifier = 0;
		let debuff = 0;

		// TODO to object
		if (
			inputWeaponType === 'Sword and Shield' ||
			inputWeaponType === 'Great Sword' ||
			inputWeaponType === 'Long Sword' ||
			inputWeaponType === 'Hammer' ||
			inputWeaponType === 'Hunting Horn' ||
			inputWeaponType === 'Lance' ||
			inputWeaponType === 'Switch Axe F'
		) {
			modifier = 15;
		} else if (
			inputWeaponType === 'Dual Swords' ||
			inputWeaponType === 'Gunlance'
		) {
			modifier = 10;
		} else if (inputWeaponType === 'Light Bowgun') {
			modifier = 10;
		} else if (inputWeaponType === 'Heavy Bowgun') {
			modifier = 5;
		} else if (inputWeaponType === 'Bow') {
			modifier = 5;
		}

		if (
			inputHuntingHornDebuff ===
				'Elemental Weakness (+4 on all Elemental Hitzones)' ||
			inputHuntingHornDebuff === 'Both (+4 on Elemental, +2 on Raw)'
		) {
			debuff = 4;
		} else {
			debuff = 0;
		}

		if (
			inputElementalExploiter !== 'Off' &&
			hitzone + debuff < outputElementalExploiter
		) {
			result = debuff + hitzone;
		} else if (
			inputElementalExploiter !== 'Off' &&
			hitzone + debuff >= outputElementalExploiter
		) {
			result = debuff + modifier + hitzone;
		} else if (
			inputElementalExploiter === 'Determination (+X to ele hitzones)'
		) {
			result = debuff + modifier + hitzone;
		} else {
			result = debuff + hitzone;
		}
		return result;
	}

	/** Exploit Weakness, Thunder Clad Tonfa Modes*/
	function getExploitWeakness(
		weaponClass: FrontierWeaponClass,
		hitzone: number,
	) {
		let modifier =
			inputHuntingHornDebuff === 'Raw Weakness (+2 on Raw Hitzones)' ||
			inputHuntingHornDebuff === 'Both (+4 on Elemental, +2 on Raw)'
				? 2
				: 0;

		// set initial hitzone
		let used = hitzone + outputThunderClad + modifier;

		// critical shot, sniper, determination, precision in critical distance
		if (weaponClass === 'Gunner') {
			used = used + outputSniper;
		}

		// check if processed hitzones have been pushed to 35 and then apply Exploit Weakness
		if (outputExploitWeakness === 5 && (used >= 35 || used >= 30)) {
			used = used + 5;
		}

		used = used + outputPointBreakthrough + outputAcidShot;

		return used;
	}

	const maxTrueRaw = 8_000;

	const minimumNumberValue = 0;
	const maximumNumberValue = 99999;
	const invalidNumberValueText = `Invalid value. Must be between ${minimumNumberValue} and ${maximumNumberValue}`;

	const formulaOutputAttackA =
		display(`\\text{Attack A} = \\text{inputNumberTrueRaw} +\\newline \\text{outputPassives} +\\newline (\\text{inputNumberSigil1Attack} + \\text{inputNumberSigil2Attack} + \\text{inputNumberSigil3Attack}) +\\newline \\text{inputNumberConquestAttack} +\\newline \\text{outputAttackMedicine} +\\newline \\text{outputAttackSkill} +\\newline \\text{outputFoodAttack} +\\newline \\text{outputSeedAttack} +\\newline \\text{inputNumberStyleRankAttack} +\\newline \\text{inputNumberUnlimitedSigil} +\\newline \\text{outputDrugKnowledgeMultiplierTotal} +\\newline \\text{outputDuremudiraAttack} +\\newline \\text{outputLoneWolfAttack} +\\newline \\text{outputCaravanAddition} +\\newline \\text{outputShiriagariAttack} +\\newline \\text{outputRoadAdvancement} +\\newline \\lfloor \\text{outputDrugKnowledgeMultiplier} \\times 0.025 \\rfloor +\\newline \\text{outputConsumptionSlayerAttack} +\\newline \\text{outputRoadLastStandAttack} +\\newline \\text{outputLanceRedPhialAttack} +\\newline \\text{outputRoadTowerAttack} +\\newline \\text{outputZenithTotalAttack} +\\newline \\text{outputAOETotalAttack}
`);

	$: formulaValuesOutputAttackA = `{${attackA}} = ${inputNumberTrueRaw} +\\newline ${outputPassives} +\\newline (${inputNumberSigil1Attack} + ${inputNumberSigil2Attack} + ${inputNumberSigil3Attack}) +\\newline ${inputNumberConquestAttack} +\\newline ${outputAttackMedicine} +\\newline ${outputAttackSkill} +\\newline ${outputFoodAttack} +\\newline ${outputSeedAttack} +\\newline ${inputNumberStyleRankAttack} +\\newline ${inputNumberUnlimitedSigil} +\\newline ${outputDrugKnowledgeMultiplierTotal} +\\newline ${outputDuremudiraAttack} +\\newline ${outputLoneWolfAttack} +\\newline ${outputCaravanAddition} +\\newline ${outputShiriagariAttack} +\\newline ${outputRoadAdvancement} +\\newline \\lfloor ${outputDrugKnowledgeMultiplier} \\times 0.025 \\rfloor +\\newline ${outputConsumptionSlayerAttack} +\\newline ${outputRoadLastStandAttack} +\\newline ${outputLanceRedPhialAttack} +\\newline ${outputRoadTowerAttack} +\\newline ${outputZenithTotalAttack} +\\newline ${outputAOETotalAttack}
`;

	const formulaOutputAttackB =
		display(`\\text{Attack B} = \\text{outputRush} +\\newline \\text{outputStylishAssault} +\\newline \\text{outputFuriousAttack} +\\newline \\text{outputVigorousAddition} +\\newline \\text{outputCritConversionAttack} +\\newline \\text{inputNumberVampirism} +\\newline \\text{outputObscurityTotal} +\\newline \\text{outputIncitement}
`);

	$: formulaValuesOutputAttackB = `{${attackB}} = ${outputRush} +\\newline ${outputStylishAssault} +\\newline ${outputFuriousAttack} +\\newline ${outputVigorousAddition} +\\newline ${outputCritConversionAttack} +\\newline ${inputNumberVampirism} +\\newline ${outputObscurityTotal} +\\newline ${outputIncitement}
`;

	const formulaOutputMultipliers =
		display(`\\text{Multipliers} = \\lfloor \\lfloor \\text{attackA} \\times \\text{outputHuntingHornMultiplier} + \\text{attackB} \\rfloor\\newline \\times \\text{outputAdrenaline} \\times \\text{outputCombatSupremacyAttackMultiplier} \\times \\text{outputWeaponSpecificMultiplier} \\times \\text{outputHidenMultiplier} \\times \\text{outputHammerMultiplier} \\rfloor
`);

	$: formulaValuesOutputMultipliers = `{${outputMultipliers}} = \\lfloor \\lfloor ${attackA} \\times ${outputHuntingHornMultiplier} + ${attackB} \\rfloor\\newline \\times ${outputAdrenaline} \\times ${outputCombatSupremacyAttackMultiplier} \\times ${outputWeaponSpecificMultiplier} \\times ${outputHidenMultiplier} \\times ${outputHammerMultiplier} \\rfloor
`;

	const formulaOutputFlatAdditions =
		display(`\\text{Flat Additions} = \\text{outputPartnyaBond} +\\newline \\text{outputHunterBond} +\\newline \\text{outputAssist} +\\newline \\text{outputSoul} +\\newline \\text{outputArmor1} +\\newline \\text{outputArmor2} +\\newline \\text{outputArmorG} +\\newline \\text{outputSecretTech}
`);

	$: formulaValuesOutputFlatAdditions = `{${outputFlatAdditions}} = ${outputPartnyaBond} +\\newline ${outputHunterBond} +\\newline ${outputAssist} +\\newline ${outputSoul} +\\newline ${outputArmor1} +\\newline ${outputArmor2} +\\newline ${outputArmorG} +\\newline ${outputSecretTech}
`;

	/*
	$: internalAttack =
		getWeaponClass(inputWeaponType) === 'Blademaster'
			? Math.floor(
					internalTrueRaw *
						outputSharpnessMultiplier *
						outputSwordAndShieldMultiplier *
						outputOtherMultipliers *
						outputMonsterStatusInflictedMultiplier,
				)
			: Math.floor(
					internalTrueRaw *
						outputOtherMultipliers *
						outputMonsterStatusInflictedMultiplier,
				);

*/

	const formulaInternalAttack = display(
		'\\text{Internal Attack} = \\lfloor \\text{internalTrueRaw} \\times\\newline \\text{outputSharpnessMultiplier}\\times\\newline \\text{outputSwordAndShieldMultiplier} \\times\\newline \\text{outputOtherMultipliers} \\times\\newline \\text{outputMonsterStatusInflictedMultiplier} \\rfloor',
	);

	$: formulaValuesOutputInternalAttack = `{${internalAttack}} = \\lfloor ${internalTrueRaw} \\times\\newline ${outputSharpnessMultiplier} \\times\\newline ${outputSwordAndShieldMultiplier} \\times\\newline ${outputOtherMultipliers} \\times\\newline ${outputMonsterStatusInflictedMultiplier} \\rfloor
`;

	const formulaInternalFire =
		display(`\\text{Internal Fire} = \\lfloor (\\frac{(\\text{inputNumberElementalValueReplacement} + \\text{inputNumberSigil1Element} \\times 10 + \\text{inputNumberSigil2Element} \\times 10 + \\text{inputNumberSigil3Element} \\times 10 + \\text{inputNumberUnlimitedSigil} \\times 10 + \\text{outputAoeElement}) \\times \\text{outputFireMultiplier} \\times \\text{outputZenithElementMultiplier} \\times \\text{outputElementalAttackMultiplier} \\times \\text{outputHHElementalSongMultiplier} \\times \\text{outputWeaponElementMultiplier} \\times \\text{outputFuriousMultiplier} \\times \\text{getElementMultiplier('Fire', inputElement)}}{\\text{10}}) \\times \\text{outputSharpnessMultiplier}\\rfloor
`);
	$: formulaValuesInternalFire = `${internalFire} = \\lfloor (\\frac{(${inputNumberElementalValueReplacement} + ${inputNumberSigil1Element} \\times 10 + ${inputNumberSigil2Element} \\times 10 + ${inputNumberSigil3Element} \\times 10 + ${inputNumberUnlimitedSigil} \\times 10 + ${outputAoeElement}) \\times ${outputFireMultiplier} \\times ${outputZenithElementMultiplier} \\times ${outputElementalAttackMultiplier} \\times ${outputHHElementalSongMultiplier} \\times ${outputWeaponElementMultiplier} \\times ${outputFuriousMultiplier} \\times ${getElementMultiplier('Fire', inputElement)}}{\\text{10}}) \\times ${outputSharpnessMultiplier}\\rfloor
`;

	const formulaInternalWater =
		display(`\\text{Internal Water} = \\lfloor (\\frac{(\\text{inputNumberElementalValueReplacement} + \\text{inputNumberSigil1Element} \\times 10 + \\text{inputNumberSigil2Element} \\times 10 + \\text{inputNumberSigil3Element} \\times 10 + \\text{inputNumberUnlimitedSigil} \\times 10 + \\text{outputAoeElement}) \\times \\text{outputWaterMultiplier} \\times \\text{outputZenithElementMultiplier} \\times \\text{outputElementalAttackMultiplier} \\times \\text{outputHHElementalSongMultiplier} \\times \\text{outputWeaponElementMultiplier} \\times \\text{outputFuriousMultiplier} \\times \\text{getElementMultiplier('Water', inputElement)}}{\\text{10}}) \\times \\text{outputSharpnessMultiplier}\\rfloor
`);
	$: formulaValuesInternalWater = `${internalWater} = \\lfloor (\\frac{(${inputNumberElementalValueReplacement} + ${inputNumberSigil1Element} \\times 10 + ${inputNumberSigil2Element} \\times 10 + ${inputNumberSigil3Element} \\times 10 + ${inputNumberUnlimitedSigil} \\times 10 + ${outputAoeElement}) \\times ${outputWaterMultiplier} \\times ${outputZenithElementMultiplier} \\times ${outputElementalAttackMultiplier} \\times ${outputHHElementalSongMultiplier} \\times ${outputWeaponElementMultiplier} \\times ${outputFuriousMultiplier} \\times ${getElementMultiplier('Water', inputElement)}}{\\text{10}}) \\times ${outputSharpnessMultiplier}\\rfloor
`;
	const formulaInternalThunder =
		display(`\\text{Internal Thunder} = \\lfloor (\\frac{(\\text{inputNumberElementalValueReplacement} + \\text{inputNumberSigil1Element} \\times 10 + \\text{inputNumberSigil2Element} \\times 10 + \\text{inputNumberSigil3Element} \\times 10 + \\text{inputNumberUnlimitedSigil} \\times 10 + \\text{outputAoeElement}) \\times \\text{outputThunderMultiplier} \\times \\text{outputZenithElementMultiplier} \\times \\text{outputElementalAttackMultiplier} \\times \\text{outputHHElementalSongMultiplier} \\times \\text{outputWeaponElementMultiplier} \\times \\text{outputFuriousMultiplier} \\times \\text{getElementMultiplier('Thunder', inputElement)}}{\\text{10}}) \\times \\text{outputSharpnessMultiplier}\\rfloor
`);
	$: formulaValuesInternalThunder = `${internalThunder} = \\lfloor (\\frac{(${inputNumberElementalValueReplacement} + ${inputNumberSigil1Element} \\times 10 + ${inputNumberSigil2Element} \\times 10 + ${inputNumberSigil3Element} \\times 10 + ${inputNumberUnlimitedSigil} \\times 10 + ${outputAoeElement}) \\times ${outputThunderMultiplier} \\times ${outputZenithElementMultiplier} \\times ${outputElementalAttackMultiplier} \\times ${outputHHElementalSongMultiplier} \\times ${outputWeaponElementMultiplier} \\times ${outputFuriousMultiplier} \\times ${getElementMultiplier('Thunder', inputElement)}}{\\text{10}}) \\times ${outputSharpnessMultiplier}\\rfloor
`;
	const formulaInternalIce =
		display(`\\text{Internal Ice} = \\lfloor (\\frac{(\\text{inputNumberElementalValueReplacement} + \\text{inputNumberSigil1Element} \\times 10 + \\text{inputNumberSigil2Element} \\times 10 + \\text{inputNumberSigil3Element} \\times 10 + \\text{inputNumberUnlimitedSigil} \\times 10 + \\text{outputAoeElement}) \\times \\text{outputIceMultiplier} \\times \\text{outputZenithElementMultiplier} \\times \\text{outputElementalAttackMultiplier} \\times \\text{outputHHElementalSongMultiplier} \\times \\text{outputWeaponElementMultiplier} \\times \\text{outputFuriousMultiplier} \\times \\text{getElementMultiplier('Ice', inputElement)}}{\\text{10}}) \\times \\text{outputSharpnessMultiplier}\\rfloor
`);
	$: formulaValuesInternalIce = `${internalIce} = \\lfloor (\\frac{(${inputNumberElementalValueReplacement} + ${inputNumberSigil1Element} \\times 10 + ${inputNumberSigil2Element} \\times 10 + ${inputNumberSigil3Element} \\times 10 + ${inputNumberUnlimitedSigil} \\times 10 + ${outputAoeElement}) \\times ${outputIceMultiplier} \\times ${outputZenithElementMultiplier} \\times ${outputElementalAttackMultiplier} \\times ${outputHHElementalSongMultiplier} \\times ${outputWeaponElementMultiplier} \\times ${outputFuriousMultiplier} \\times ${getElementMultiplier('Ice', inputElement)}}{\\text{10}}) \\times ${outputSharpnessMultiplier}\\rfloor
`;
	const formulaInternalDragon =
		display(`\\text{Internal Dragon} = \\lfloor (\\frac{(\\text{inputNumberElementalValueReplacement} + \\text{inputNumberSigil1Element} \\times 10 + \\text{inputNumberSigil2Element} \\times 10 + \\text{inputNumberSigil3Element} \\times 10 + \\text{inputNumberUnlimitedSigil} \\times 10 + \\text{outputAoeElement}) \\times \\text{outputDragonMultiplier} \\times \\text{outputZenithElementMultiplier} \\times \\text{outputElementalAttackMultiplier} \\times \\text{outputHHElementalSongMultiplier} \\times \\text{outputWeaponElementMultiplier} \\times \\text{outputFuriousMultiplier} \\times \\text{getElementMultiplier('Dragon', inputElement)}}{\\text{10}}) \\times \\text{outputSharpnessMultiplier}\\rfloor
`);
	$: formulaValuesInternalDragon = `${internalDragon} = \\lfloor (\\frac{(${inputNumberElementalValueReplacement} + ${inputNumberSigil1Element} \\times 10 + ${inputNumberSigil2Element} \\times 10 + ${inputNumberSigil3Element} \\times 10 + ${inputNumberUnlimitedSigil} \\times 10 + ${outputAoeElement}) \\times ${outputDragonMultiplier} \\times ${outputZenithElementMultiplier} \\times ${outputElementalAttackMultiplier} \\times ${outputHHElementalSongMultiplier} \\times ${outputWeaponElementMultiplier} \\times ${outputFuriousMultiplier} \\times ${getElementMultiplier('Dragon', inputElement)}}{\\text{10}}) \\times ${outputSharpnessMultiplier}\\rfloor
`;

	const formulaInternalAffinity =
		display(`\\text{Internal Affinity} = \\text{outputIssenAffinity} +\\newline
	\\text{outputSharpnessAffinity} +\\newline
	\\text{inputNumberUnlimitedSigil} +\\newline
	\\text{inputNumberSigil1Affinity} +\\newline
	\\text{inputNumberSigil2Affinity} +\\newline
	\\text{inputNumberSigil3Affinity} +\\newline
	\\text{outputStyleRankAffinity} +\\newline
	\\text{outputExpertAffinity} +\\newline
	\\text{inputNumberNaturalAffinity} +\\newline
	\\text{outputFlashConversionAffinity} +\\newline
	\\text{outputStarvingWolfAffinity} +\\newline
	\\text{outputCeaselessAffinity}`);
	$: formulaValuesInternalAffinity = `${internalAffinity} = ${outputIssenAffinity} +\\newline
	${outputSharpnessAffinity} +\\newline
	${inputNumberUnlimitedSigil} +\\newline
	${inputNumberSigil1Affinity} +\\newline
	${inputNumberSigil2Affinity} +\\newline
	${inputNumberSigil3Affinity} +\\newline
	${outputStyleRankAffinity} +\\newline
	${outputExpertAffinity} +\\newline
	${inputNumberNaturalAffinity} +\\newline
	${outputFlashConversionAffinity} +\\newline
	${outputStarvingWolfAffinity} +\\newline
	${outputCeaselessAffinity}`;

	const formulaInternalStatus =
		display(`\\text{Internal Status} = \\lfloor \\lfloor
		\\text{inputNumberStatusValue} \\times\\newline
		\\text{outputStatusAttackUpMultiplier} \\times\\newline
		\\text{outputStatusGuildPoogieMultiplier} \\times\\newline
		\\text{outputStatusSigilMultiplier} \\times\\newline
		\\text{outputWeaponStatusModifiers} \\times\\newline
		\\text{outputFuriousMultiplier}
		\\rfloor \\times\\newline \\text{outputDrugKnowledgeMultiplier}
		\\rfloor`);
	$: formulaValuesInternalStatus = `${internalStatus} = \\lfloor \\lfloor
		${inputNumberStatusValue} \\times\\newline
		${outputStatusAttackUpMultiplier} \\times\\newline
		${outputStatusGuildPoogieMultiplier} \\times\\newline
		${outputStatusSigilMultiplier} \\times\\newline
		${outputWeaponStatusModifiers} \\times\\newline
		${outputFuriousMultiplier}
		\\rfloor \\times\\newline ${outputDrugKnowledgeMultiplier}
		\\rfloor`;

	const formulaOutputTotalAffinity = display(`\\text{outputTotalAffinity} =
	\\text{outputIssenAffinity} +\\newline
	\\text{outputSharpnessAffinity} +\\newline
	\\text{inputNumberSigil1Affinity} +\\newline
	\\text{inputNumberSigil2Affinity} +\\newline
	\\text{inputNumberSigil3Affinity} +\\newline
	\\text{outputStyleRankAffinity} +\\newline
	\\text{outputExpertAffinity} +\\newline
	\\text{inputNumberNaturalAffinity} +\\newline
	\\text{outputFlashConversionAffinity} +\\newline
	\\text{outputFGSActiveFeatureAffinity} +\\newline
	\\text{outputDrinkAffinity} +\\newline
	\\text{outputStarvingWolfAffinity} +\\newline
	\\text{outputCeaselessAffinity} +\\newline
	\\text{outputFuriousAffinity} +\\newline
	\\text{outputAOETotalAffinity}`);
	$: formulaValuesOutputTotalAffinity = `${outputTotalAffinity} =
	${outputIssenAffinity} +\\newline
	${outputSharpnessAffinity} +\\newline
	${inputNumberSigil1Affinity} +\\newline
	${inputNumberSigil2Affinity} +\\newline
	${inputNumberSigil3Affinity} +\\newline
	${outputStyleRankAffinity} +\\newline
	${outputExpertAffinity} +\\newline
	${inputNumberNaturalAffinity} +\\newline
	${outputFlashConversionAffinity} +\\newline
	${outputFGSActiveFeatureAffinity} +\\newline
	${outputDrinkAffinity} +\\newline
	${outputStarvingWolfAffinity} +\\newline
	${outputCeaselessAffinity} +\\newline
	${outputFuriousAffinity} +\\newline
	${outputAOETotalAffinity}`;

	/*
	$: outputDrugKnowledgeMultiplierTotal = getDrugKnowledgeAddition(
		outputDrugKnowledgeMultiplier,
		inputNumberStatusValue,
		outputStatusAttackUpMultiplier,
		outputStatusGuildPoogieMultiplier,
		outputStatusSigilMultiplier,
	);
*/

	// TODO
	const formulaInternalTrueRaw = display(
		`\\begin{equation*} \\text{internalTrueRaw} = \\begin{cases} \\text{maxTrueRaw} & \\text{if } outputAttackCeiling > 180 \\\\ \\lfloor outputFlatAdditions + outputMultipliers \\rfloor & \\text{otherwise} \\end{cases} \\end{equation*}`,
	);

	const formulaOutputDrugKnowledgeMultiplierTotal = display(
		`\\text{outputDrugKnowledgeMultiplierTotal} = \\text{getDrugKnowledgeAddition(
		outputDrugKnowledgeMultiplier,
		inputNumberStatusValue,
		outputStatusAttackUpMultiplier,
		outputStatusGuildPoogieMultiplier,
		outputStatusSigilMultiplier)}`,
	);
	$: formulaValuesOutputDrugKnowledgeMultiplierTotal = `${outputDrugKnowledgeMultiplierTotal} = ${getDrugKnowledgeAddition(
		outputDrugKnowledgeMultiplier,
		inputNumberStatusValue,
		outputStatusAttackUpMultiplier,
		outputStatusGuildPoogieMultiplier,
		outputStatusSigilMultiplier,
	)}`;

	const formulaOutputCritValue =
		display(`\\text{outputCritValue} = \\text{getCritValue(
		outputStarvingWolfAffinity,
		outputCeaselessAffinity,
		outputExpertAffinity,
		outputIssenAffinity
	)}`);
	$: formulaValuesOutputCritValue = `${outputCritValue} = ${getCritValue(
		outputStarvingWolfAffinity,
		outputCeaselessAffinity,
		outputExpertAffinity,
		outputIssenAffinity,
	)}`;

	const formulaOutputOtherMultipliers =
		display(`\\text{outputOtherMultipliers} =
	\\text{inputNumberTranscendRawMultiplier} \\times\\newline
	\\text{inputNumberLanceImpactMultiplier} \\times\\newline
	\\text{inputNumberRavientePowerSwordCrystalsMultiplier}`);
	$: formulaValuesOutputOtherMultipliers = `${outputOtherMultipliers} =
	${inputNumberTranscendRawMultiplier} \\times\\newline
	${inputNumberLanceImpactMultiplier} \\times\\newline
	${inputNumberRavientePowerSwordCrystalsMultiplier}`;

	const formulaOutputStatusUsedSA =
		display(`\\text{outputStatusUsedSA} = \\lfloor \\lfloor
	(\\text{inputNumberStatusValue} / 10) \\times\\newline
	\\text{outputStatusAttackUpMultiplier} \\times\\newline
	\\text{outputStatusGuildPoogieMultiplier} \\times\\newline
	\\text{outputStatusSigilMultiplier} \\times\\newline
	\\text{outputWeaponStatusModifiers} \\times\\newline
	\\text{outputFuriousMultiplier}
	\\rfloor \\times\\newline \\text{outputStatusValueMultiplier}
	\\rfloor`);
	$: formulaValuesOutputStatusUsedSA = `${outputStatusUsedSA} = \\lfloor \\lfloor
	(${inputNumberStatusValue} / 10) \\times\\newline
	${outputStatusAttackUpMultiplier} \\times\\newline
	${outputStatusGuildPoogieMultiplier} \\times\\newline
	${outputStatusSigilMultiplier} \\times\\newline
	${outputWeaponStatusModifiers} \\times\\newline
	${outputFuriousMultiplier}
	\\rfloor \\times\\newline ${outputStatusValueMultiplier}
	\\rfloor`;

	const formulaOutputMonsterTotalDefense =
		display(`\\text{outputMonsterTotalDefense} =
	\\text{inputNumberDefenseRate} \\times\\newline \\text{inputNumberMonsterRage} \\times\\newline \\text{inputNumberHCModifiers}`);
	$: formulaValuesOutputMonsterTotalDefense = `${outputMonsterTotalDefense} =
	${inputNumberDefenseRate} \\times\\newline ${inputNumberMonsterRage} \\times\\newline ${inputNumberHCModifiers}`;

	// TODO more formulas
	const formulaFlashConversion = display(
		`\\text{Flash Conversion True Raw} = \\lfloor \\sqrt{\\text{Excess Affinity}} \\times 7 \\rfloor`,
	);

	let internalAffinity = 0;
	let rarity: FrontierRarity = 1;
	let weaponIconProps = {
		rarity: rarity,
	};
	let sharedMotionValues = getSharedMotionValues();

	let inputTextImportData = '';

	let modalHeading = '';
	let modalLabel = '';
	let url = $page.url.toString();
	let modalOpen = false;
	let modalImage = '';
	let modalNotes = '';

	let inputStyleRankAffinity = 'None';
	let inputMeleeSharpnessAffinity = 'Below Blue or Gunners (+0%)';
	let inputExpertSkills = 'None';
	let inputFlashConversion = 'None';
	let inputIssenSkills = 'None or Determination';
	let inputCeaseless = 'None (1x)';
	let inputStarvingWolf = 'None (1x)';
	let inputAffinityItems = 'None';
	let inputGsActiveFeature = 'None';
	let inputAttackSkills = 'None';
	let inputCaravanSkills = 'None';
	let inputPassiveItems = 'None';
	let inputFoodConsumables = 'None';
	let inputSeedsFlutesCat = 'None';
	let inputLanceHbg = 'None';
	let inputLoneWolf = 'None';
	let inputCritConversion = 'None';
	let inputStylishAssault = 'None';
	let inputConsumptionSlayer = 'None';
	let inputObscurity = 'None';
	let inputRush = 'None';
	let inputFurious = 'None (x1 Ele & Status)';
	let inputShiriagari = 'None';
	let inputIncitement = 'None';
	let inputLengthUp = 'None';
	let inputRoadAttack = 'None';
	let inputRoadAdvLvFlr = 'None';
	let inputRoadLastStand = 'None';
	let inputDuremudiraAttack = 'None';
	let inputAttackMedicine = 'None';
	let inputHhAttackSongs = 'None (1x)';
	let inputAdrenalineVigorous = 'None (1x)';
	let inputVigorousUp = 'None';
	let inputHidenSkills = 'None (1x)';
	let inputWeaponSpecific = 'None (1x)';
	let inputCombatSupremacy = 'None (1x)';
	let inputArmor1 = 'None';
	let inputOriginArmor = 'None';
	let inputGArmorPieces = '3+ G Rank Pieces (+30)';
	let inputGsr999SecretTech = 'None';
	let inputRedSoul = 'None';
	let inputAssistance = 'None';
	let inputBondMaleHunter = 'None';
	let inputPartnyaaBond = 'None';
	let inputFireMultipliers = 'None (1x)';
	let inputWaterMultipliers = 'None (1x)';
	let inputThunderMultipliers = 'None (1x)';
	let inputIceMultipliers = 'None (1x)';
	let inputDragonMultipliers = 'None (1x)';
	let inputElementalAttackMultiplier = 'None (1x)';
	let inputHhElementalUp = 'None (1x)';
	let inputAbnormality = 'None';
	let inputDrugKnowledge = 'None (1x)';
	let inputStatusAssault = 'None';
	let inputStatusAttackUp = 'None (1x)';
	let inputGuildPoogie = 'None (1x)';
	let inputStatusSigil = 'None (1x)';
	let inputWeaponStatusModifiers = 'None (1x)';
	let inputWeaponType: FrontierWeaponName = 'Sword and Shield';
	let inputAoeAttackSigil = 'None';
	let inputAoeAffinitySigil = 'None';
	let inputCritMode = 'All Crits';
	let inputSharpness = 'Cyan (1.8x)';
	let inputFencing = 'None';
	let inputDistanceMultiplier = '1.8x LBG & Bow Crit Distance';
	let inputBulletModifier = 'None (1x)';
	let inputShotMultiplier = 'None (1x)';
	let inputHbgChargeShot = 'Normal / Charge Lv 0 (x1)';
	let inputCompressedShotMultiplier = 'Not Compressed (0x)';
	let inputBowCoatingsMultiplier = 'None (1x)';
	let inputChargeMultiplier = 'Lv4 (1.85x / 1.334x)';
	let inputQuickShot = 'Normal (All 1.0x)';
	let inputCompressedElementShot = 'Not Compressed';
	let inputElement: FrontierElement = 'None';
	let inputAoeElementSigil = 'None';
	let inputWeaponElementMultipliers = 'None (1x)';
	let inputStatus: FrontierStatus = 'None';
	let inputMonsterStatus = 'None (1x)';
	let inputThunderClad = 'None';
	let inputExploitWeakness = 'None';
	let inputPointBreakthrough = 'None';
	let inputAcidShots = 'None';
	let inputElementalExploiter = 'None';
	let inputHuntingHornDebuff = 'None';
	let inputPrecisionSniperCritS = 'None';
	let inputAbsoluteDefense = 'Active (1.0x)';
	let inputPremiumBoost = 'Inactive (1x)';

	let inputNumberCritConversion = 0;
	let inputNumberRoadFloor = 0;
	let inputNumberConquestAttack = 0;
	let inputNumberVampirism = 0;
	let inputNumberTotalMotionValue = 125;
	let inputNumberHitCount = 1;
	let inputNumberElementalMultiplier = 1;
	let inputNumberTrueRaw = 550;
	let inputNumberUnlimitedSigil = 0;
	let inputNumberStyleRankAttack = 100;
	let inputNumberSigil1Attack = 0;
	let inputNumberSigil2Attack = 0;
	let inputNumberSigil3Attack = 0;
	let inputNumberZenithAttackSigil = 0;
	let inputNumberAOEAttackSigil = 0;
	let inputNumberNaturalAffinity = 0;
	let inputNumberSigil1Affinity = 0;
	let inputNumberSigil2Affinity = 0;
	let inputNumberSigil3Affinity = 0;
	let inputNumberAOEAffinitySigil = 0;
	let inputNumberCritMultiplier = 1.5;
	let inputNumberLanceImpactMultiplier = 1;
	let inputNumberTranscendRawMultiplier = 1;
	let inputNumberRavientePowerSwordCrystalsMultiplier = 1;
	let inputNumberElementalValueReplacement = 0;
	let inputNumberSigil1Element = 0;
	let inputNumberSigil2Element = 0;
	let inputNumberSigil3Element = 0;
	let inputNumberZenithElementSigil = 0;
	let inputNumberAOEElementSigil = 0;
	let inputNumberStatusValue = 0;
	let inputNumberOtherAdditional = 0;
	let inputNumberCompressedShot = 0;
	let inputNumberCompressedElementShot = 0;
	let inputNumberDefenseRate = 0.3;
	let inputNumberMonsterRage = 1;
	let inputNumberHCModifiers = 1;
	let inputNumberRawHitzone = 30;
	let inputNumberFireHitzone = 30;
	let inputNumberWaterHitzone = 30;
	let inputNumberThunderHitzone = 30;
	let inputNumberIceHitzone = 30;
	let inputNumberDragonHitzone = 30;

	let inputWeaponMotionValuesSection = 'None';
	let bentoSection = 'Vigorous';

	let outputAdditional = 0;

	$: inputs = {
		inputStyleRankAffinity: inputStyleRankAffinity,
		inputMeleeSharpnessAffinity: inputMeleeSharpnessAffinity,
		inputExpertSkills: inputExpertSkills,
		inputFlashConversion: inputFlashConversion,
		inputIssenSkills: inputIssenSkills,
		inputCeaseless: inputCeaseless,
		inputStarvingWolf: inputStarvingWolf,
		inputAffinityItems: inputAffinityItems,
		inputGsActiveFeature: inputGsActiveFeature,
		inputAttackSkills: inputAttackSkills,
		inputCaravanSkills: inputCaravanSkills,
		inputPassiveItems: inputPassiveItems,
		inputFoodConsumables: inputFoodConsumables,
		inputSeedsFlutesCat: inputSeedsFlutesCat,
		inputLanceHbg: inputLanceHbg,
		inputLoneWolf: inputLoneWolf,
		inputCritConversion: inputCritConversion,
		inputStylishAssault: inputStylishAssault,
		inputConsumptionSlayer: inputConsumptionSlayer,
		inputObscurity: inputObscurity,
		inputRush: inputRush,
		inputFurious: inputFurious,
		inputShiriagari: inputShiriagari,
		inputIncitement: inputIncitement,
		inputLengthUp: inputLengthUp,
		inputRoadAttack: inputRoadAttack,
		inputRoadAdvLvFlr: inputRoadAdvLvFlr,
		inputRoadLastStand: inputRoadLastStand,
		inputDuremudiraAttack: inputDuremudiraAttack,
		inputAttackMedicine: inputAttackMedicine,
		inputHhAttackSongs: inputHhAttackSongs,
		inputAdrenalineVigorous: inputAdrenalineVigorous,
		inputVigorousUp: inputVigorousUp,
		inputHidenSkills: inputHidenSkills,
		inputWeaponSpecific: inputWeaponSpecific,
		inputCombatSupremacy: inputCombatSupremacy,
		inputArmor1: inputArmor1,
		inputOriginArmor: inputOriginArmor,
		inputGArmorPieces: inputGArmorPieces,
		inputGsr999SecretTech: inputGsr999SecretTech,
		inputRedSoul: inputRedSoul,
		inputAssistance: inputAssistance,
		inputBondMaleHunter: inputBondMaleHunter,
		inputPartnyaaBond: inputPartnyaaBond,
		inputFireMultipliers: inputFireMultipliers,
		inputWaterMultipliers: inputWaterMultipliers,
		inputThunderMultipliers: inputThunderMultipliers,
		inputIceMultipliers: inputIceMultipliers,
		inputDragonMultipliers: inputDragonMultipliers,
		inputElementalAttackMultiplier: inputElementalAttackMultiplier,
		inputHhElementalUp: inputHhElementalUp,
		inputAbnormality: inputAbnormality,
		inputDrugKnowledge: inputDrugKnowledge,
		inputStatusAssault: inputStatusAssault,
		inputStatusAttackUp: inputStatusAttackUp,
		inputGuildPoogie: inputGuildPoogie,
		inputStatusSigil: inputStatusSigil,
		inputWeaponStatusModifiers: inputWeaponStatusModifiers,
		inputWeaponType: inputWeaponType,
		inputAoeAttackSigil: inputAoeAttackSigil,
		inputAoeAffinitySigil: inputAoeAffinitySigil,
		inputCritMode: inputCritMode,
		inputSharpness: inputSharpness,
		inputFencing: inputFencing,
		inputDistanceMultiplier: inputDistanceMultiplier,
		inputBulletModifier: inputBulletModifier,
		inputShotMultiplier: inputShotMultiplier,
		inputHbgChargeShot: inputHbgChargeShot,
		inputCompressedShotMultiplier: inputCompressedShotMultiplier,
		inputCompressedElementShot: inputCompressedElementShot,
		inputBowCoatingsMultiplier: inputBowCoatingsMultiplier,
		inputChargeMultiplier: inputChargeMultiplier,
		inputQuickShot: inputQuickShot,
		inputElement: inputElement,
		inputAoeElementSigil: inputAoeElementSigil,
		inputWeaponElementMultipliers: inputWeaponElementMultipliers,
		inputStatus: inputStatus,
		inputMonsterStatus: inputMonsterStatus,
		inputThunderClad: inputThunderClad,
		inputExploitWeakness: inputExploitWeakness,
		inputPointBreakthrough: inputPointBreakthrough,
		inputAcidShots: inputAcidShots,
		inputElementalExploiter: inputElementalExploiter,
		inputHuntingHornDebuff: inputHuntingHornDebuff,
		inputPrecisionSniperCritS: inputPrecisionSniperCritS,
		inputAbsoluteDefense: inputAbsoluteDefense,
		inputPremiumBoost: inputPremiumBoost,

		inputNumberCritConversion: inputNumberCritConversion,
		inputNumberRoadFloor: inputNumberRoadFloor,
		inputNumberConquestAttack: inputNumberConquestAttack,
		inputNumberVampirism: inputNumberVampirism,
		inputNumberTotalMotionValue: inputNumberTotalMotionValue,
		inputNumberHitCount: inputNumberHitCount,
		inputNumberElementalMultiplier: inputNumberElementalMultiplier,
		inputNumberTrueRaw: inputNumberTrueRaw,
		inputNumberUnlimitedSigil: inputNumberUnlimitedSigil,
		inputNumberStyleRankAttack: inputNumberStyleRankAttack,
		inputNumberSigil1Attack: inputNumberSigil1Attack,
		inputNumberSigil2Attack: inputNumberSigil2Attack,
		inputNumberSigil3Attack: inputNumberSigil3Attack,
		inputNumberZenithAttackSigil: inputNumberZenithAttackSigil,
		inputNumberAOEAttackSigil: inputNumberAOEAttackSigil,
		inputNumberNaturalAffinity: inputNumberNaturalAffinity,
		inputNumberSigil1Affinity: inputNumberSigil1Affinity,
		inputNumberSigil2Affinity: inputNumberSigil2Affinity,
		inputNumberSigil3Affinity: inputNumberSigil3Affinity,
		inputNumberAOEAffinitySigil: inputNumberAOEAffinitySigil,
		inputNumberCritMultiplier: inputNumberCritMultiplier,
		inputNumberLanceImpactMultiplier: inputNumberLanceImpactMultiplier,
		inputNumberTranscendRawMultiplier: inputNumberTranscendRawMultiplier,
		inputNumberRavientePowerSwordCrystalsMultiplier:
			inputNumberRavientePowerSwordCrystalsMultiplier,
		inputNumberElementalValueReplacement: inputNumberElementalValueReplacement,
		inputNumberSigil1Element: inputNumberSigil1Element,
		inputNumberSigil2Element: inputNumberSigil2Element,
		inputNumberSigil3Element: inputNumberSigil3Element,
		inputNumberZenithElementSigil: inputNumberZenithElementSigil,
		inputNumberAOEElementSigil: inputNumberAOEElementSigil,
		inputNumberStatusValue: inputNumberStatusValue,
		inputNumberOtherAdditional: inputNumberOtherAdditional,
		inputNumberCompressedShot: inputNumberCompressedShot,
		inputNumberCompressedElementShot: inputNumberCompressedElementShot,
		inputNumberDefenseRate: inputNumberDefenseRate,
		inputNumberMonsterRage: inputNumberMonsterRage,
		inputNumberHCModifiers: inputNumberHCModifiers,
		inputNumberRawHitzone: inputNumberRawHitzone,
		inputNumberFireHitzone: inputNumberFireHitzone,
		inputNumberWaterHitzone: inputNumberWaterHitzone,
		inputNumberThunderHitzone: inputNumberThunderHitzone,
		inputNumberIceHitzone: inputNumberIceHitzone,
		inputNumberDragonHitzone: inputNumberDragonHitzone,
	};

	$: modalBlurClass = modalOpen ? 'modal-open-blur' : 'modal-open-noblur';
	// $: weaponSections = getWeaponSectionMotionValues(
	// 	inputWeaponType,
	// 	inputWeaponMotionValuesSection,
	// );
	$: weaponSectionNames = getWeaponSectionNames(inputWeaponType);

	let bentoSectionNames = [
		{ id: 'Vigorous', text: 'Vigorous' },
		{ id: 'Starving Wolf', text: 'Starving Wolf' },
		{ id: 'Adrenaline', text: 'Adrenaline' },
		{ id: 'Combo', text: 'Combo' },
	];

	$: weaponIcon = getWeaponIcon(inputWeaponType);
	$: inputTextInputs = prettyPrintJson(inputs);

	$: outputStarvingWolfAffinity =
		affinityDropdownItems.find((item) => item.name === inputStarvingWolf)
			?.value || 0;

	$: console.log(`outputStarvingWolfAffinity: ${outputStarvingWolfAffinity}`);

	$: outputCeaselessAffinity =
		affinityDropdownItems.find((item) => item.name === inputCeaseless)?.value ||
		0;

	$: console.log(`outputCeaselessAffinity: ${outputCeaselessAffinity}`);

	$: outputFuriousAffinity =
		affinityDropdownItems.find((item) => item.name === inputFurious)?.value ||
		0;

	$: console.log(`outputFuriousAffinity: ${outputFuriousAffinity}`);

	$: outputIssenAffinity =
		affinityDropdownItems.find((item) => item.name === inputIssenSkills)
			?.value || 0;

	$: console.log(`outputIssenAffinity: ${outputIssenAffinity}`);

	$: outputSharpnessAffinity =
		affinityDropdownItems.find(
			(item) => item.name === inputMeleeSharpnessAffinity,
		)?.value || 0;

	$: console.log(`outputSharpnessAffinity: ${outputSharpnessAffinity}`);

	$: outputStyleRankAffinity =
		affinityDropdownItems.find((item) => item.name === inputStyleRankAffinity)
			?.value || 0;

	$: console.log(`outputStyleRankAffinity: ${outputStyleRankAffinity}`);

	$: outputExpertAffinity =
		affinityDropdownItems.find((item) => item.name === inputExpertSkills)
			?.value || 0;

	$: console.log(`outputExpertAffinity: ${outputExpertAffinity}`);

	$: outputFlashConversionAffinity =
		affinityDropdownItems.find((item) => item.name === inputFlashConversion)
			?.value || 0;

	$: console.log(
		`outputFlashConversionAffinity: ${outputFlashConversionAffinity}`,
	);

	$: outputFGSActiveFeatureAffinity =
		affinityDropdownItems.find((item) => item.name === inputGsActiveFeature)
			?.value || 0;

	$: console.log(
		`outputFGSActiveFeatureAffinity: ${outputFGSActiveFeatureAffinity}`,
	);

	$: outputDrinkAffinity =
		affinityDropdownItems.find((item) => item.name === inputAffinityItems)
			?.value || 0;

	$: console.log(`outputDrinkAffinity: ${outputDrinkAffinity}`);

	$: outputAOEAffinityCount =
		sigilDropdownItems.find((item) => item.name === inputAoeAffinitySigil)
			?.value || 0;

	$: console.log(`outputAOEAffinityCount: ${outputAOEAffinityCount}`);

	$: outputAOETotalAffinity =
		outputAOEAffinityCount === 0 || inputNumberAOEAffinitySigil === 0
			? 0
			: 20 * outputAOEAffinityCount + outputAOEAffinityCount * 2;

	$: console.log(`outputAOETotalAffinity: ${outputAOETotalAffinity}`);

	$: outputTotalAffinity =
		outputIssenAffinity +
		outputSharpnessAffinity +
		inputNumberSigil1Affinity +
		inputNumberSigil2Affinity +
		inputNumberSigil3Affinity +
		outputStyleRankAffinity +
		outputExpertAffinity +
		inputNumberNaturalAffinity +
		outputFlashConversionAffinity +
		outputFGSActiveFeatureAffinity +
		outputDrinkAffinity +
		outputStarvingWolfAffinity +
		outputCeaselessAffinity +
		outputFuriousAffinity +
		outputAOETotalAffinity;

	$: console.log(`outputTotalAffinity: ${outputTotalAffinity}`);

	$: outputWeaponTypeMultiplier =
		WeaponTypes.find((weaponType) => weaponType.name === inputWeaponType)
			?.bloatAttackMultiplier || 1.2;

	$: console.log(`outputWeaponTypeMultiplier: ${outputWeaponTypeMultiplier}`);

	$: outputWeaponDisplayedAttack = Math.ceil(
		inputNumberTrueRaw * outputWeaponTypeMultiplier,
	);

	$: console.log(`outputWeaponDisplayedAttack: ${outputWeaponDisplayedAttack}`);

	$: outputTrueRaw = Math.ceil(
		outputWeaponDisplayedAttack / outputWeaponTypeMultiplier,
	);

	$: console.log(`outputTrueRaw: ${outputTrueRaw}`);

	$: outputRoadAdvLvFlr =
		multipliedBaseDropdownItems.find((item) => item.name === inputRoadAdvLvFlr)
			?.value || 0;

	$: console.log(`outputRoadAdvLvFlr: ${outputRoadAdvLvFlr}`);

	$: outputRoadAdvancement = getRoadAdvancementValue(
		outputRoadAdvLvFlr,
		inputNumberRoadFloor,
	);

	$: console.log(`inputNumberRoadFloor: ${inputNumberRoadFloor}`);

	$: console.log(`outputRoadAdvancement: ${outputRoadAdvancement}`);

	$: outputVigorousUp = inputVigorousUp === 'Active (+50 Ranged, +100 Melee)';

	$: console.log(`outputVigorousUp: ${outputVigorousUp}`);

	$: outputAdrenaline =
		multipliersDropdownItems.find(
			(item) => item.name === inputAdrenalineVigorous,
		)?.value || 0;

	$: console.log(`outputAdrenaline: ${outputAdrenaline}`);

	$: outputVigorousAddition =
		outputVigorousUp && outputAdrenaline === 1.15
			? getWeaponClass(inputWeaponType) === 'Blademaster'
				? 100
				: 50
			: 0;

	$: outputCaravanMultiplier =
		multipliedBaseDropdownItems.find((item) => item.name === inputCaravanSkills)
			?.value || 0;

	$: outputCaravanAddition = Math.floor(
		inputNumberTrueRaw * outputCaravanMultiplier,
	);

	$: outputZenithTotalAttack =
		inputNumberZenithAttackSigil === 0
			? 0
			: 30 + 20 * inputNumberZenithAttackSigil;

	$: outputAOEAttackCount =
		sigilDropdownItems.find((item) => item.name === inputAoeAttackSigil)
			?.value || 0;

	$: outputAOETotalAttack =
		outputAOEAttackCount === 0 || inputNumberAOEAttackSigil === 0
			? 0
			: 25 * outputAOEAttackCount + inputNumberAOEAttackSigil * 5;

	$: outputAOEElementCount =
		sigilDropdownItems.find((item) => item.name === inputAoeElementSigil)
			?.value || 0;

	$: outputRush =
		multipliedBaseDropdownItems.find((item) => item.name === inputRush)
			?.value || 0;

	$: console.log(`outputRush: ${outputRush}`);

	$: outputStylishAssault =
		multipliedBaseDropdownItems.find(
			(item) => item.name === inputStylishAssault,
		)?.value || 0;

	$: console.log(`outputStylishAssault: ${outputStylishAssault}`);

	$: outputFuriousAttack =
		multipliedBaseDropdownItems.find((item) => item.name === inputFurious)
			?.value || 0;

	$: console.log(`outputFuriousAttack: ${outputFuriousAttack}`);

	$: outputFuriousMultiplier =
		multipliersDropdownItems.find((item) => item.name === inputFurious)
			?.value || 1;

	$: console.log(`outputFuriousMultiplier: ${outputFuriousMultiplier}`);

	$: outputCritConversionAttack =
		multipliedBaseDropdownItems.find(
			(item) => item.name === inputCritConversion,
		)?.value || 0;

	$: console.log(`outputCritConversionAttack: ${outputCritConversionAttack}`);

	$: outputObscurityLevel =
		multipliedBaseDropdownItems.find((item) => item.name === inputObscurity)
			?.value || 0;

	$: outputObscurityTotal = getObscurityValue(
		inputWeaponType,
		outputObscurityLevel,
	);

	$: console.log(`outputObscurityTotal: ${outputObscurityTotal}`);

	$: outputIncitement =
		multipliedBaseDropdownItems.find((item) => item.name === inputIncitement)
			?.value || 0;

	$: outputLengthUpTrueRaw = getLengthAttackValue(inputLengthUp, outputTrueRaw);

	$: console.log(`outputLengthUpTrueRaw: ${outputLengthUpTrueRaw}`);

	/** Rush / Stylish Assault / Vampirism / Flash Conversion / Obscurity / Incitement / Furious / Vigorous Up
does not get multiplied by horn */
	$: attackB =
		outputRush +
		outputStylishAssault +
		outputFuriousAttack +
		outputVigorousAddition +
		outputCritConversionAttack +
		inputNumberVampirism +
		outputObscurityTotal +
		outputIncitement;

	$: console.log(`attackB: ${attackB}`);

	$: outputAttackMedicine =
		multipliedBaseDropdownItems.find(
			(item) => item.name === inputAttackMedicine,
		)?.value || 0;

	$: console.log(`outputAttackMedicine: ${outputAttackMedicine}`);

	$: outputAttackSkill =
		multipliedBaseDropdownItems.find((item) => item.name === inputAttackSkills)
			?.value || 0;

	$: console.log(`outputAttackSkill: ${outputAttackSkill}`);

	$: outputFoodAttack =
		multipliedBaseDropdownItems.find(
			(item) => item.name === inputFoodConsumables,
		)?.value || 0;

	$: console.log(`outputFoodAttack: ${outputFoodAttack}`);

	$: outputSeedAttack =
		multipliedBaseDropdownItems.find(
			(item) => item.name === inputSeedsFlutesCat,
		)?.value || 0;

	$: console.log(`outputSeedAttack: ${outputSeedAttack}`);

	$: outputUnlimitedSigilAttack = 10 * inputNumberUnlimitedSigil; // TODO

	$: console.log(`outputUnlimitedSigilAttack: ${outputUnlimitedSigilAttack}`);

	$: outputDrugKnowledgeMultiplier =
		statusSkillsDropdownItems.find((item) => item.name === inputDrugKnowledge)
			?.value || 1;

	$: console.log(
		`outputDrugKnowledgeMultiplier: ${outputDrugKnowledgeMultiplier}`,
	);

	$: outputStatusGuildPoogieMultiplier =
		statusSkillsDropdownItems.find((item) => item.name === inputGuildPoogie)
			?.value || 1;

	$: console.log(
		`outputStatusGuildPoogieMultiplier: ${outputStatusGuildPoogieMultiplier}`,
	);

	$: outputMonsterStatusInflictedMultiplier =
		statusSkillsDropdownItems.find((item) => item.name === inputMonsterStatus)
			?.value || 1;

	$: console.log(
		`outputMonsterStatusInflictedMultiplier: ${outputMonsterStatusInflictedMultiplier}`,
	);

	$: outputDrugKnowledgeMultiplierTotal = getDrugKnowledgeAddition(
		outputDrugKnowledgeMultiplier,
		inputNumberStatusValue,
		outputStatusAttackUpMultiplier,
		outputStatusGuildPoogieMultiplier,
		outputStatusSigilMultiplier,
	);

	$: console.log(
		`outputDrugKnowledgeMultiplierTotal: ${outputDrugKnowledgeMultiplierTotal}`,
	);

	$: outputStatusAssault =
		inputDrugKnowledge !== 'None (1x)'
			? Math.floor(
					(outputStatusUsedSA +
						getStatusAssault(inputWeaponType, inputStatus)) *
						0.15 *
						outputMonsterTotalDefense *
						inputNumberHitCount,
				)
			: 0;

	$: console.log(`outputStatusAssault: ${outputStatusAssault}`);

	// TODO?
	$: outputStatusAttackUpMultiplier =
		statusSkillsDropdownItems.find((item) => item.name === inputStatusAttackUp)
			?.value || 1;

	$: console.log(
		`outputStatusAttackUpMultiplier: ${outputStatusAttackUpMultiplier}`,
	);

	$: outputPassives =
		multipliedBaseDropdownItems.find((item) => item.name === inputPassiveItems)
			?.value || 0;

	$: console.log(`outputPassives: ${outputPassives}`);

	$: outputLoneWolfAttack =
		multipliedBaseDropdownItems.find((item) => item.name === inputLoneWolf)
			?.value || 0;

	$: console.log(`outputLoneWolfAttack: ${outputLoneWolfAttack}`);

	$: outputDuremudiraAttack =
		multipliedBaseDropdownItems.find(
			(item) => item.name === inputDuremudiraAttack,
		)?.value || 0;

	$: console.log(`outputDuremudiraAttack: ${outputDuremudiraAttack}`);

	$: outputShiriagariAttack =
		multipliedBaseDropdownItems.find((item) => item.name === inputShiriagari)
			?.value || 0;

	$: console.log(`outputShiriagariAttack: ${outputShiriagariAttack}`);

	$: outputConsumptionSlayerAttack =
		multipliedBaseDropdownItems.find(
			(item) => item.name === inputConsumptionSlayer,
		)?.value || 0;

	$: console.log(
		`outputConsumptionSlayerAttack: ${outputConsumptionSlayerAttack}`,
	);

	$: outputRoadLastStandAttack =
		multipliedBaseDropdownItems.find((item) => item.name === inputRoadLastStand)
			?.value || 0;

	$: console.log(`outputRoadLastStandAttack: ${outputRoadLastStandAttack}`);

	$: outputLanceRedPhialAttack =
		multipliedBaseDropdownItems.find((item) => item.name === inputLanceHbg)
			?.value || 0;

	$: console.log(`outputLanceRedPhialAttack: ${outputLanceRedPhialAttack}`);

	$: outputRoadTowerAttack =
		multipliedBaseDropdownItems.find((item) => item.name === inputRoadAttack)
			?.value || 0;

	$: console.log(`outputRoadTowerAttack: ${outputRoadTowerAttack}`);

	$: attackA =
		inputNumberTrueRaw +
		outputPassives +
		(inputNumberSigil1Attack +
			inputNumberSigil2Attack +
			inputNumberSigil3Attack) +
		inputNumberConquestAttack +
		outputAttackMedicine +
		outputAttackSkill +
		outputFoodAttack +
		outputSeedAttack +
		inputNumberStyleRankAttack +
		inputNumberUnlimitedSigil + // TODO
		outputDrugKnowledgeMultiplierTotal +
		outputDuremudiraAttack +
		outputLoneWolfAttack +
		outputCaravanAddition +
		outputShiriagariAttack +
		outputRoadAdvancement +
		Math.floor(outputDrugKnowledgeMultiplier * 0.025) +
		outputConsumptionSlayerAttack +
		outputRoadLastStandAttack +
		outputLanceRedPhialAttack +
		outputRoadTowerAttack +
		outputZenithTotalAttack +
		outputAOETotalAttack;

	$: console.log(`attackA: ${attackA}`);

	$: outputHuntingHornMultiplier =
		multipliersDropdownItems.find((item) => item.name === inputHhAttackSongs)
			?.value || 1;

	$: console.log(`outputHuntingHornMultiplier: ${outputHuntingHornMultiplier}`);

	$: outputCombatSupremacyAttackMultiplier =
		multipliersDropdownItems.find((item) => item.name === inputCombatSupremacy)
			?.value || 1;

	$: console.log(
		`outputCombatSupremacyAttackMultiplier: ${outputCombatSupremacyAttackMultiplier}`,
	);

	$: outputHidenMultiplier =
		multipliersDropdownItems.find((item) => item.name === inputHidenSkills)
			?.value || 1;

	$: console.log(`outputHidenMultiplier: ${outputHidenMultiplier}`);

	$: outputWeaponSpecificMultiplier =
		multipliersDropdownItems.find((item) => item.name === inputWeaponSpecific)
			?.value || 1;

	$: console.log(
		`outputWeaponSpecificMultiplier: ${outputWeaponSpecificMultiplier}`,
	);

	$: outputHammerMultiplier =
		multipliersDropdownItems.find((item) => item.name === inputChargeMultiplier)
			?.value || 1;

	$: console.log(`outputHammerMultiplier: ${outputHammerMultiplier}`);

	$: outputMultipliers = Math.floor(
		Math.floor(attackA * outputHuntingHornMultiplier + attackB) *
			outputAdrenaline *
			outputCombatSupremacyAttackMultiplier *
			outputWeaponSpecificMultiplier *
			outputHidenMultiplier *
			outputHammerMultiplier,
	);

	$: console.log(`outputMultipliers: ${outputMultipliers}`);

	$: outputPartnyaBond =
		flatAdditionsDropdownItems.find((item) => item.name === inputPartnyaaBond)
			?.value || 0;

	$: console.log(`outputPartnyaBond: ${outputPartnyaBond}`);

	$: outputHunterBond =
		flatAdditionsDropdownItems.find((item) => item.name === inputBondMaleHunter)
			?.value || 0;

	$: console.log(`outputHunterBond: ${outputHunterBond}`);

	$: outputAssist =
		flatAdditionsDropdownItems.find((item) => item.name === inputAssistance)
			?.value || 0;

	$: console.log(`outputAssist: ${outputAssist}`);

	$: outputSoul =
		flatAdditionsDropdownItems.find((item) => item.name === inputRedSoul)
			?.value || 0;

	$: console.log(`outputSoul: ${outputSoul}`);

	$: outputArmor1 =
		flatAdditionsDropdownItems.find((item) => item.name === inputArmor1)
			?.value || 0;

	$: console.log(`outputArmor1: ${outputArmor1}`);

	$: outputArmor2 =
		flatAdditionsDropdownItems.find((item) => item.name === inputOriginArmor)
			?.value || 0;

	$: console.log(`outputArmor2: ${outputArmor2}`);

	$: outputArmorG =
		flatAdditionsDropdownItems.find((item) => item.name === inputGArmorPieces)
			?.value || 0;

	$: console.log(`outputArmorG: ${outputArmorG}`);

	$: outputSecretTech =
		flatAdditionsDropdownItems.find(
			(item) => item.name === inputGsr999SecretTech,
		)?.value || 0;

	$: console.log(`outputSecretTech: ${outputSecretTech}`);

	$: outputFlatAdditions =
		outputPartnyaBond +
		outputHunterBond +
		outputAssist +
		outputSoul +
		outputArmor1 +
		outputArmor2 +
		outputArmorG +
		outputSecretTech;

	$: console.log(`outputFlatAdditions: ${outputFlatAdditions}`);

	$: outputCompressedShotsMultiplier =
		gunnerDropdownItems.find(
			(item) => item.name === inputCompressedShotMultiplier,
		)?.value || 0; // TODO

	$: console.log(
		`outputCompressedShotsMultiplier: ${outputCompressedShotsMultiplier}`,
	);

	$: outputCompressedShotPower = Math.floor(
		inputNumberCompressedShot * outputCompressedShotsMultiplier,
	);

	$: console.log(`outputCompressedShotPower: ${outputCompressedShotPower}`);

	$: outputCritValue = getCritValue(
		outputStarvingWolfAffinity,
		outputCeaselessAffinity,
		outputExpertAffinity,
		outputIssenAffinity,
	);

	$: console.log(`outputCritValue: ${outputCritValue}`);

	$: outputSwordAndShieldMultiplier =
		inputWeaponType === 'Sword and Shield' ? 1.25 : 1;

	$: console.log(
		`outputSwordAndShieldMultiplier: ${outputCompressedShotsMultiplier}`,
	);

	$: outputOtherMultipliers =
		inputNumberTranscendRawMultiplier *
		inputNumberLanceImpactMultiplier *
		inputNumberRavientePowerSwordCrystalsMultiplier;

	$: console.log(`outputOtherMultipliers: ${outputOtherMultipliers}`);

	let inputGunlanceRaw = 1;
	let inputGunlanceShellType = 2;

	$: outputGunlanceRaw = inputGunlanceRaw / 2.3;
	$: outputGunlanceShellType = inputGunlanceShellType - 1;
	$: outputGunlanceShellDamage =
		outputGunlanceShellType > 18
			? 0.09 * outputGunlanceRaw + gunlanceShellValues[outputGunlanceShellType]
			: outputGunlanceShellType > 9
				? 0.1 * outputGunlanceRaw + gunlanceShellValues[outputGunlanceShellType]
				: outputGunlanceShellType > 0
					? 0.11 * outputGunlanceRaw +
						gunlanceShellValues[outputGunlanceShellType]
					: 0;

	$: console.log(`outputGunlanceRaw: ${outputGunlanceRaw}`);

	$: console.log(`outputGunlanceShellType: ${outputGunlanceShellType}`);

	$: console.log(`outputGunlanceShellDamage: ${outputGunlanceShellDamage}`);

	$: outputGunlanceShell = Math.floor(outputGunlanceShellDamage);
	$: outputGunlanceShellBoosted = Math.floor(outputGunlanceShellDamage * 1.5);

	$: console.log(`outputGunlanceShell: ${outputGunlanceShell}`);

	$: console.log(`outputGunlanceShellBoosted: ${outputGunlanceShellBoosted}`);

	$: outputSharpnessMultiplier =
		blademasterDropdownItems.find((item) => item.name === inputSharpness)
			?.value || 0;

	$: console.log(`outputSharpnessMultiplier: ${outputSharpnessMultiplier}`);

	$: outputElementalExploiter =
		hitzoneValueModifiersDropdownItems.find(
			(item) => item.name === inputElementalExploiter,
		)?.value || 0;

	$: console.log(`outputElementalExploiter: ${outputElementalExploiter}`);

	$: outputThunderClad =
		hitzoneValueModifiersDropdownItems.find(
			(item) => item.name === inputThunderClad,
		)?.value || 0;
	$: console.log(`outputThunderClad: ${outputThunderClad}`);

	$: outputSniper =
		hitzoneValueModifiersDropdownItems.find(
			(item) => item.name === inputPrecisionSniperCritS,
		)?.value || 0;

	$: console.log(`outputSniper: ${outputSniper}`);

	$: outputExploitWeakness =
		hitzoneValueModifiersDropdownItems.find(
			(item) => item.name === inputExploitWeakness,
		)?.value || 0;

	$: console.log(`outputExploitWeakness: ${outputExploitWeakness}`);

	$: outputAcidShot =
		hitzoneValueModifiersDropdownItems.find(
			(item) => item.name === inputAcidShots,
		)?.value || 0;

	$: console.log(`outputAcidShot: ${outputAcidShot}`);

	$: outputPointBreakthrough =
		hitzoneValueModifiersDropdownItems.find(
			(item) => item.name === inputPointBreakthrough,
		)?.value || 0;

	$: console.log(`outputPointBreakthrough: ${outputPointBreakthrough}`);

	$: outputAbsoluteDefenseMultiplier =
		otherDropdownItems.find((item) => item.name === inputAbsoluteDefense)
			?.value || 1;

	$: console.log(
		`outputAbsoluteDefenseMultiplier: ${outputAbsoluteDefenseMultiplier}`,
	);

	$: outputPremiumCourseMultiplier =
		otherDropdownItems.find((item) => item.name === inputPremiumBoost)?.value ||
		1;

	$: console.log(
		`outputPremiumCourseMultiplier: ${outputPremiumCourseMultiplier}`,
	);

	$: outputFencingMultiplier =
		blademasterDropdownItems.find((item) => item.name === inputFencing)
			?.value || 1;

	$: console.log(`outputFencingMultiplier: ${outputFencingMultiplier}`);

	$: outputFireMultiplier =
		elementalSkillsDropdownItems.find(
			(item) => item.name === inputFireMultipliers,
		)?.value || 1;

	$: console.log(`outputFireMultiplier: ${outputFireMultiplier}`);

	$: outputWaterMultiplier =
		elementalSkillsDropdownItems.find(
			(item) => item.name === inputWaterMultipliers,
		)?.value || 1;

	$: console.log(`outputWaterMultiplier: ${outputWaterMultiplier}`);

	$: outputThunderMultiplier =
		elementalSkillsDropdownItems.find(
			(item) => item.name === inputThunderMultipliers,
		)?.value || 1;

	$: console.log(`outputThunderMultiplier: ${outputThunderMultiplier}`);

	$: outputIceMultiplier =
		elementalSkillsDropdownItems.find(
			(item) => item.name === inputIceMultipliers,
		)?.value || 1;

	$: console.log(`outputIceMultiplier: ${outputIceMultiplier}`);

	$: outputDragonMultiplier =
		elementalSkillsDropdownItems.find(
			(item) => item.name === inputDragonMultipliers,
		)?.value || 1;

	$: console.log(`outputDragonMultiplier: ${outputDragonMultiplier}`);

	$: outputStatusSigilMultiplier =
		statusSkillsDropdownItems.find((item) => item.name === inputStatusSigil)
			?.value || 1;

	$: console.log(`outputStatusSigilMultiplier: ${outputStatusSigilMultiplier}`);

	$: outputWeaponStatusModifiers =
		statusSkillsDropdownItems.find(
			(item) => item.name === inputWeaponStatusModifiers,
		)?.value || 1;

	$: console.log(`outputWeaponStatusModifiers: ${outputWeaponStatusModifiers}`);

	$: outputElementalAttackMultiplier =
		elementalSkillsDropdownItems.find(
			(item) => item.name === inputElementalAttackMultiplier,
		)?.value || 1;

	$: console.log(
		`outputElementalAttackMultiplier: ${outputElementalAttackMultiplier}`,
	);

	$: outputHHElementalSongMultiplier =
		elementalSkillsDropdownItems.find(
			(item) => item.name === inputHhElementalUp,
		)?.value || 1;

	$: console.log(
		`outputHHElementalSongMultiplier: ${outputHHElementalSongMultiplier}`,
	);

	$: outputWeaponElementMultiplier =
		elementalSkillsDropdownItems.find(
			(item) => item.name === inputWeaponElementMultipliers,
		)?.value || 1;

	$: console.log(
		`outputWeaponElementMultiplier: ${outputWeaponElementMultiplier}`,
	);

	$: console.log(`inputElementalExploiter: ${inputElementalExploiter}`);

	$: console.log(`internalAttack: ${internalAttack}`);

	// let roundedResult = Math.floor(
	// 	Math.floor(outputFlatAdditions + Math.floor(outputMultipliers)) *
	// 		outputWeaponTypeMultiplier,
	// );

	/**getIDtrueraw*/
	function getMaxTrueRaw(raw: number) {
		if (raw <= 8000) {
			return raw;
		} else {
			return 8000;
		}
	}

	/**ACtrueout*/
	$: internalTrueRaw =
		outputAttackCeiling > 180
			? maxTrueRaw
			: Math.floor(outputFlatAdditions + outputMultipliers);

	$: internalTrueRawDisplay = Math.floor(
		internalTrueRaw * outputWeaponTypeMultiplier,
	);

	$: internalAttackCeiling =
		outputAttackCeiling < 0
			? 0
			: outputAttackCeiling > 110 && outputAttackCeiling < 180
				? outputAttackCeiling
				: outputAttackCeiling > 180
					? 180
					: outputAttackCeiling;

	$: internalMissionsNeeded =
		outputAttackCeiling < 0
			? 0
			: outputAttackCeiling > 110 && outputAttackCeiling < 180
				? missionRequirementAttackCeilings[outputAttackCeiling - 1]
				: outputAttackCeiling > 180
					? 249
					: outputAttackCeiling <= 0
						? 0
						: missionRequirementAttackCeilings[outputAttackCeiling - 1];

	$: internalAttack =
		getWeaponClass(inputWeaponType) === 'Blademaster'
			? Math.floor(
					internalTrueRaw *
						outputSharpnessMultiplier *
						outputSwordAndShieldMultiplier *
						outputOtherMultipliers *
						outputMonsterStatusInflictedMultiplier,
				)
			: Math.floor(
					internalTrueRaw *
						outputOtherMultipliers *
						outputMonsterStatusInflictedMultiplier,
				);

	$: outputAoeElement =
		outputAOEElementCount === 0 || inputNumberAOEElementSigil === 0
			? 0
			: 50 * outputAOEElementCount + inputNumberAOEElementSigil * 50;

	$: fireValueMultiplier = getElementMultiplier('Fire', inputElement);
	$: waterValueMultiplier = getElementMultiplier('Water', inputElement);
	$: thunderValueMultiplier = getElementMultiplier('Thunder', inputElement);
	$: iceValueMultiplier = getElementMultiplier('Ice', inputElement);
	$: dragonValueMultiplier = getElementMultiplier('Dragon', inputElement);

	$: internalFire = Math.floor(
		(((inputNumberElementalValueReplacement +
			inputNumberSigil1Element * 10 +
			inputNumberSigil2Element * 10 +
			inputNumberSigil3Element * 10 +
			inputNumberUnlimitedSigil * 10 +
			outputAoeElement) *
			outputFireMultiplier *
			outputZenithElementMultiplier *
			outputElementalAttackMultiplier *
			outputHHElementalSongMultiplier *
			outputWeaponElementMultiplier *
			outputFuriousMultiplier *
			getElementMultiplier('Fire', inputElement)) /
			10) *
			outputSharpnessMultiplier,
	);

	$: internalWater = Math.floor(
		(((inputNumberElementalValueReplacement +
			inputNumberSigil1Element * 10 +
			inputNumberSigil2Element * 10 +
			inputNumberSigil3Element * 10 +
			inputNumberUnlimitedSigil * 10 +
			outputAoeElement) *
			outputWaterMultiplier *
			outputZenithElementMultiplier *
			outputElementalAttackMultiplier *
			outputHHElementalSongMultiplier *
			outputWeaponElementMultiplier *
			outputFuriousMultiplier *
			getElementMultiplier('Water', inputElement)) /
			10) *
			outputSharpnessMultiplier,
	);

	$: internalThunder = Math.floor(
		(((inputNumberElementalValueReplacement +
			inputNumberSigil1Element * 10 +
			inputNumberSigil2Element * 10 +
			inputNumberSigil3Element * 10 +
			inputNumberUnlimitedSigil * 10 +
			outputAoeElement) *
			outputThunderMultiplier *
			outputZenithElementMultiplier *
			outputElementalAttackMultiplier *
			outputHHElementalSongMultiplier *
			outputWeaponElementMultiplier *
			outputFuriousMultiplier *
			getElementMultiplier('Thunder', inputElement)) /
			10) *
			outputSharpnessMultiplier,
	);

	$: internalIce = Math.floor(
		(((inputNumberElementalValueReplacement +
			inputNumberSigil1Element * 10 +
			inputNumberSigil2Element * 10 +
			inputNumberSigil3Element * 10 +
			inputNumberUnlimitedSigil * 10 +
			outputAoeElement) *
			outputIceMultiplier *
			outputZenithElementMultiplier *
			outputElementalAttackMultiplier *
			outputHHElementalSongMultiplier *
			outputWeaponElementMultiplier *
			outputFuriousMultiplier *
			getElementMultiplier('Ice', inputElement)) /
			10) *
			outputSharpnessMultiplier,
	);

	$: internalDragon = Math.floor(
		(((inputNumberElementalValueReplacement +
			inputNumberSigil1Element * 10 +
			inputNumberSigil2Element * 10 +
			inputNumberSigil3Element * 10 +
			inputNumberUnlimitedSigil * 10 +
			outputAoeElement) *
			outputDragonMultiplier *
			outputZenithElementMultiplier *
			outputElementalAttackMultiplier *
			outputHHElementalSongMultiplier *
			outputWeaponElementMultiplier *
			outputFuriousMultiplier *
			getElementMultiplier('Dragon', inputElement)) /
			10) *
			outputSharpnessMultiplier,
	);

	$: outputZenithElementMultiplier =
		inputNumberZenithElementSigil === 0
			? 1
			: 1 + (1.3 + inputNumberZenithElementSigil) * 0.1;

	$: outputAttackCeiling = Math.ceil(
		(Math.floor(outputFlatAdditions + outputMultipliers) - 800) / 40,
	);

	$: weaponSections = getWeaponSectionMotionValues(
		inputWeaponType,
		inputWeaponMotionValuesSection,
	);

	$: bentoSectionValue = getBentoSectionValues(bentoSection);

	// TODO i dont need ternary?
	$: internalStatus =
		inputDrugKnowledge !== 'None (1x)'
			? Math.floor(
					Math.floor(
						inputNumberStatusValue *
							outputStatusAttackUpMultiplier *
							outputStatusGuildPoogieMultiplier *
							outputStatusSigilMultiplier *
							outputWeaponStatusModifiers *
							outputFuriousMultiplier,
					) * outputDrugKnowledgeMultiplier,
				)
			: Math.floor(
					Math.floor(
						inputNumberStatusValue *
							outputStatusAttackUpMultiplier *
							outputStatusGuildPoogieMultiplier *
							outputStatusSigilMultiplier *
							outputWeaponStatusModifiers *
							outputFuriousMultiplier,
					),
				);

	$: outputStatusUsedSA = Math.floor(
		Math.floor(
			(inputNumberStatusValue / 10) *
				outputStatusAttackUpMultiplier *
				outputStatusGuildPoogieMultiplier *
				outputStatusSigilMultiplier *
				outputWeaponStatusModifiers *
				outputFuriousMultiplier,
		) * outputStatusValueMultiplier,
	);

	// Additional including status assault
	// Status active, poison or paralysis
	$: outputStatusValueMultiplier =
		inputStatusAttackUp === 'On (For Sleep add +10 raw hitbox)' &&
		inputStatus !== 'None' &&
		inputNumberStatusValue >= 10 &&
		outputDrugKnowledgeMultiplier === 1
			? outputDrugKnowledgeMultiplier
			: 1;

	$: outputMonsterTotalDefense =
		inputNumberDefenseRate * inputNumberMonsterRage * inputNumberHCModifiers;

	// outputStatusAssault = Math.floor(
	// 	(statusUsedSA + getStatusAssault(inputWeaponType, inputStatus)) *
	// 		0.15 *
	// 		monsterTotalDefense *
	// 		inputNumberHitCount,
	// );

	let isShikiLoading = true;

	async function renderShiki(inputs: string) {
		if (!browser) return '';
		const result = await codeToHtml(inputs, {
			lang: 'json',
			theme: getCatppuccinFlavorFromThemeForShiki($theme),
		});
		return result;
	}

	// Reactive statement to watch for changes in inputTextInputs
	$: if (inputTextInputs && $theme) {
		isShikiLoading = true;
		// Use an immediately invoked async function expression (IIFE) to handle async operations
		(async () => {
			inputsHTML = await renderShiki(inputTextInputs);
			isShikiLoading = false;
		})();
	}

	let inputsHTML = '';

	$: inputStatusIcon = StatusIcons.find((e) => e.name === inputStatus)?.icon;

	// TODO datatable description having weapon guide link

	let inputNumberIceAgeCalculatorWeaponTrueRaw = 0;
	let inputNumberIceAgeCalculatorSigil1TrueRaw = 0;
	let inputNumberIceAgeCalculatorSigil2TrueRaw = 0;
	let inputNumberIceAgeCalculatorSigil3TrueRaw = 0;
	let inputNumberIceAgeCalculatorZenithSigil = 0;
	let inputNumberIceAgeCalculatorAOESigil = 0;
	let inputIceAgeCalculatorAOESigilHunters = '1';
	let inputNumberIceAgeCalculatorUnlimitedSigilTrueRaw = 0;

	function getZenithSigilTrueRaw(value: number) {
		if (value > 0) {
			return 20 * value + 30;
		} else {
			return 0;
		}
	}

	function getAOESigilTrueRaw(value: number, hunters: string) {
		if (value > 0) {
			return (25 + value * 5) * Number.parseInt(hunters);
		} else {
			return 0;
		}
	}

	let inputNumberIceAgeCalculatorSRTrueRaw = 0;
	let inputIceAgeCalculatorGRankArmorTrueRaw = 'None';
	let inputNumberIceAgeCalculatorSecondsElapsed = 0;
	let inputIceAgeCalculatorStage = 'Stage 1';
	let inputIceAgeCalculatorHunters = '1';
	let inputNumberIceAgeCalculatorMonsterDefenseRate = 1;
	let inputNumberIceAgeCalculatorMonsterTrueHP = 30_000;

	$: iceAgeCalculatorSecondsNeeded =
		iceAgeCalculatorDamagePerSecond > 0
			? Math.floor(
					inputNumberIceAgeCalculatorMonsterTrueHP /
						iceAgeCalculatorDamagePerSecond,
				)
			: 'Infinity';

	$: iceAgeCalculatorMaxHPPercentDealt =
		Math.floor(
			((iceAgeCalculatorTotalDamage * 100) /
				inputNumberIceAgeCalculatorMonsterTrueHP) *
				100,
		) / 100;

	$: iceAgeCalculatorDamagePerSecond = Math.floor(
		getIceAgeBaseMultiplier(inputIceAgeCalculatorStage) *
			(inputNumberIceAgeCalculatorWeaponTrueRaw +
				inputNumberIceAgeCalculatorSigil1TrueRaw +
				inputNumberIceAgeCalculatorSigil2TrueRaw +
				inputNumberIceAgeCalculatorSigil3TrueRaw +
				inputNumberIceAgeCalculatorUnlimitedSigilTrueRaw +
				getZenithSigilTrueRaw(inputNumberIceAgeCalculatorZenithSigil) +
				getAOESigilTrueRaw(
					inputNumberIceAgeCalculatorAOESigil,
					inputIceAgeCalculatorAOESigilHunters,
				) +
				inputNumberIceAgeCalculatorSRTrueRaw +
				getGRankArmorTrueRaw(inputIceAgeCalculatorGRankArmorTrueRaw)) *
			inputNumberIceAgeCalculatorMonsterDefenseRate *
			Number.parseInt(inputIceAgeCalculatorHunters),
	);

	const formulaIceAgeDamagePerSecond = display(
		`\\text{Ice Age DPS} = \\lfloor \\text{Stage Multiplier} \\times (\\text{Weapon True Raw} + \\text{Sigils True Raw} + \\text{SR True Raw} + \\text{GRank Armor Bonus}) \\times \\text{Monster Defense Rate} \\times \\text{Ice Age Hunters}\\rfloor`,
	);

	$: formulaValuesIceAgeDamagePerSecond = `${iceAgeCalculatorDamagePerSecond} = \\lfloor ${getIceAgeBaseMultiplier(inputIceAgeCalculatorStage)} \\times (${inputNumberIceAgeCalculatorWeaponTrueRaw} + ${
		inputNumberIceAgeCalculatorSigil1TrueRaw +
		inputNumberIceAgeCalculatorSigil2TrueRaw +
		inputNumberIceAgeCalculatorSigil3TrueRaw +
		inputNumberIceAgeCalculatorUnlimitedSigilTrueRaw +
		getZenithSigilTrueRaw(inputNumberIceAgeCalculatorZenithSigil) +
		getAOESigilTrueRaw(
			inputNumberIceAgeCalculatorAOESigil,
			inputIceAgeCalculatorAOESigilHunters,
		)
	} + ${inputNumberIceAgeCalculatorSRTrueRaw} + ${getGRankArmorTrueRaw(inputIceAgeCalculatorGRankArmorTrueRaw)}) \\times ${inputNumberIceAgeCalculatorMonsterDefenseRate} \\times ${Number.parseInt(inputIceAgeCalculatorHunters)} \\rfloor`;

	$: iceAgeCalculatorTotalDamage =
		inputNumberIceAgeCalculatorSecondsElapsed * iceAgeCalculatorDamagePerSecond;

	function getGRankArmorTrueRaw(option: string) {
		switch (option) {
			case 'None':
				return 0;
			case '3+ G Rank Pieces (+30)':
				return 30;
			default:
				return 0;
		}
	}

	function getIceAgeBaseMultiplier(stage: string) {
		switch (stage) {
			case 'Stage 1':
				return 0.042;
			case 'Stage 2':
				return 0.098;
			case 'Stage 3':
				return 0.14;
			default:
				return 0.042;
		}
	}

	let modalLink = '';
	let modalPopoverIconType = 'component';
	let modalPopoverIcon: any;
	let modalDescription = '';
	let modalTag1 = '';
	let modalTag1Info: { link: string; icon: any; color: TagColor } = {
		link: '',
		icon: undefined,
		color: 'outline',
	};
	let modalTag2 = '';
	let modalTag2Info: { link: string; icon: any; color: TagColor } = {
		link: '',
		icon: undefined,
		color: 'outline',
	};
	let modalTag3 = '';
	let modalTag3Info: { link: string; icon: any; color: TagColor } = {
		link: '',
		icon: undefined,
		color: 'outline',
	};

	function handleOpenModal(e: any) {
		modalOpen = true;
		modalImage = '';
		modalHeading = e.detail.heading;
		modalLabel = e.detail.label;
		modalLink = e.detail.link;
		modalPopoverIconType = e.detail.popoverIconType;
		modalPopoverIcon = e.detail.popoverIcon;
		modalDescription = e.detail.description;
		modalTag1 = e.detail.tag1;
		modalTag1Info = e.detail.tag1Info;
		modalTag2 = e.detail.tag2;
		modalTag2Info = e.detail.tag2Info;
		modalTag3 = e.detail.tag3;
		modalTag3Info = e.detail.tag3Info;
	}

	function getElementArray(input: string) {
		// Step 1: Split the string into individual elements
		const elements = input.split(', ');

		// Step 2: For each element, split it to separate the percentage value from the name
		// and construct an object with 'name' and 'value' properties
		const result = elements.map((element) => {
			const [value, name] = element.split(' ');
			return { name, value };
		});

		return result;
	}

	function getStatusArray(input: string) {
		const values = input.split(',');
		return values;
	}

	function getSharpnessArray(input: string): FrontierWeaponSharpness {
		// Split the input string into an array of strings
		let inputValues = input.split(',');

		// Initialize an array with default sharpness levels
		let sharpness: FrontierWeaponSharpness = [
			400, 400, 400, 400, 400, 400, 400, 400,
		];

		// Map the input values to the corresponding sharpness levels
		for (let i = 0; i < inputValues.length; i++) {
			sharpness[i] = parseInt(inputValues[i]) ?? 400;
		}

		return sharpness;
	}

	function getActiveFeatureFinalBitfieldValue(arr: string[]) {
		const initialValue = 0;
		const sumWithInitial = arr.reduce(
			(accumulator, currentValue) =>
				accumulator +
				(WeaponTypes.find((e) => e.name === currentValue)?.activeFeatureValue ??
					0),
			initialValue,
		);

		return sumWithInitial;
	}

	let activeFeatureSelectedRowIds: string[] = [];

	$: activeFeatureFinalBitfieldValue = getActiveFeatureFinalBitfieldValue(
		activeFeatureSelectedRowIds,
	);

	let originsTablePageSize = 5;
	let originsTablePage = 1;
	let originsTableFilteredRowIds: string[] = [];

	let criticalDistanceAmmoTypeForChart = 'Normal / Rapid Shot';
	let criticalDistanceChartDropdownOptions = [
		{
			id: 'Normal / Rapid Shot',
			text: 'Normal / Rapid Shot',
		},
		{
			id: 'Pierce Shot',
			text: 'Pierce Shot',
		},
		{
			id: 'Pellet / Spread Shot',
			text: 'Pellet / Spread Shot',
		},
	];

	let inputNumberAttackValue = 0;
</script>

<svelte:head>
	<link
		rel="stylesheet"
		href="https://cdn.jsdelivr.net/npm/katex@0.16.4/dist/katex.min.css"
		integrity="sha384-vKruj+a13U8yHIkAyGgK1J3ArTLzrFGBbBc0tDp4ad/EyewESeXE/Iv67Aj8gKZ0"
		crossorigin="anonymous"
	/>
</svelte:head>

<Head
	title={'Arena'}
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
				{#if modalLink !== ''}
					<div class="modal-mobile-image">
						<a href={modalLink}>
							<div>
								{#if modalPopoverIconType === 'component'}
									<svelte:component this={modalPopoverIcon} />
								{:else}
									<img src={modalPopoverIcon} alt={modalHeading} />
								{/if}
							</div>
						</a>
					</div>
					<div class="modal-mobile-title modal-mobile-link">
						<a href={modalLink}>
							{modalHeading.substring(0, 64)}
						</a>
					</div>
				{:else}
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
				{/if}

				{#if modalLabel !== ''}
					<div class="modal-mobile-subtitle">{modalLabel.substring(0, 64)}</div>
				{/if}
				{#if modalDescription !== ''}
					<div class="modal-mobile-description">{modalDescription}</div>
				{/if}
			</div>
			{#if modalTag1 !== ''}
				<hr />
				<div class="modal-mobile-contents-bottom">
					<div class="modal-mobile-tag1">
						<a href={modalTag1Info.link === '' ? '/' : modalTag1Info.link}>
							<Tag
								icon={modalTag1Info.icon}
								type={modalTag1Info.color}
								interactive>{modalTag1.substring(0, 32)}</Tag
							></a
						>
					</div>
					{#if modalTag2 !== ''}<div class="modal-mobile-tag2">
							<a href={modalTag2Info.link === '' ? '/' : modalTag2Info.link}>
								<Tag
									icon={modalTag2Info.icon}
									type={modalTag2Info.color}
									interactive>{modalTag2.substring(0, 32)}</Tag
								></a
							>
						</div>
					{/if}
					{#if modalTag3 !== ''}<div class="modal-mobile-tag3">
							<a href={modalTag3Info.link === '' ? '/' : modalTag3Info.link}>
								<Tag
									icon={modalTag3Info.icon}
									type={modalTag3Info.color}
									interactive>{modalTag3.substring(0, 32)}</Tag
								></a
							>
						</div>
					{/if}
				</div>
			{/if}
		</div>
	{/if}
</Modal>

<div class={modalBlurClass}>
	<section>
		<SectionHeadingTopLevel title="Arena" />

		<p>
			Welcome to Wycademy's Arena! Here you can calculate various game
			statistics, such as your total damage, by selecting the gear and weapon
			values. You can, for example:
		</p>
		<ul>
			<li>
				Select a weapon type such as <InlineToggletip
					title="Long Sword"
					subtitle="A sword from a far away land"
					description="Gauge your spirit with this weapon!"
					iconType="component"
					icon={WeaponTypes.find((e) => e.name === 'Long Sword')?.icon}
					tag1="Blademaster"
					popoverIcon={WeaponTypes.find((e) => e.name === 'Long Sword')?.icon}
					popoverIconType="component"
					link="/smithy"
					on:openModal={(e) => handleOpenModal(e)}
				></InlineToggletip>
			</li>
			<li>
				Calculate <InlineToggletip
					title="Gunlance"
					subtitle="It's neither a lance nor a gun"
					description="Prepare your shells!"
					iconType="component"
					icon={WeaponTypes.find((e) => e.name === 'Gunlance')?.icon}
					tag1="Blademaster"
					tag2="Gunlance"
					tag3="Weapon"
					popoverIcon={WeaponTypes.find((e) => e.name === 'Gunlance')?.icon}
					popoverIconType="component"
					link="/arena#gunlance-shells-and-wyvernfire"
					on:openModal={(e) => handleOpenModal(e)}
				></InlineToggletip> Shell and Wyvernfire damage.
			</li>
			<li>
				Calculate <InlineToggletip
					title="Ice Age"
					subtitle="It's cold out there"
					description="Grants Winter General and damage over time on hit."
					iconType="component"
					icon={getTag('Armor Skill').icon}
					tag1="Armor Skill"
					tag2="BM/GN"
					tag3="G Rank"
					popoverIcon={getTag('Armor Skill').icon}
					popoverIconType="component"
					link="/arena#gunlance-shells-and-wyvernfire"
					on:openModal={(e) => handleOpenModal(e)}
				></InlineToggletip> damage.
			</li>
			<li>
				Compare your attack values against <InlineToggletip
					title="Blinking Nargacuga"
					subtitle="Musou"
					description="Good luck hunting this monster!"
					iconType="file"
					icon={getMonster('Blinking Nargacuga', '').icon}
					tag1="Musou"
					tag2="Monster"
					tag3="G Rank"
					popoverIcon={getMonster('Blinking Nargacuga', '').render}
					popoverIconType="file"
					link="/arena#gunlance-shells-and-wyvernfire"
					on:openModal={(e) => handleOpenModal(e)}
				/> or <InlineTooltip
					tooltip="Monster"
					text="Zenith Rathalos"
					iconType="file"
					icon={getMonster('Rathalos', 'Zenith').icon}
				/> defense rate.
			</li>
			<li>View element damage.</li>
			<li>And much more!</li>
		</ul>

		<p>
			Additionally, you can view motion values animations, graphs of armor
			skills such as <InlineTooltip
				tooltip="Armor Skill"
				text="Flash Conversion"
				iconType="component"
				icon={getTag('Armor Skill').icon}
			/>, and the formulas for your total damage.
		</p>

		<section>
			<SectionHeading level={2} title="Damage Calculator" />
			<div class="damage-calculator">
				<div>
					<InlineNotification
						title="Note:"
						subtitle="Refreshing the page resets all values."
						kind="info"
						lowContrast
					/>

					<InlineNotification
						title="Bugs:"
						subtitle="If you notice an error with a calculation, you can send an issue on the GitHub repository."
						kind="info"
						lowContrast
					/>

					<p>To load your gear from the game:</p>
					<ol>
						<li>1. Load the overlay.</li>
						<li>2. Go into a quest and open overlay settings.</li>
						<li>
							3. Go to Hunter's Notes tab, right-click your guild card and
							select "Copy stats for Wycademy's Arena".
						</li>
						<li>4. Paste them here.</li>
					</ol>
				</div>
				<div class="container-buttons">
					<div class="buttons-top">
						<TextArea
							labelText="Load Data"
							helperText={'Press "Update" to update from these inputs values'}
							placeholder="Enter inputs..."
							bind:value={inputTextImportData}
						/>
						<Button kind="tertiary" icon={Restart} on:click={updateInputs}
							>Update</Button
						>
						<Button
							kind="tertiary"
							icon={Upload}
							on:click={loadInputsFromJSONFile}>Load from file</Button
						>
					</div>
					<div class="buttons-bottom">
						<div class="container-shiki">
							{#if isShikiLoading}
								<div class="shiki-loading">
									<CodeSnippet type="multi" skeleton />
								</div>
							{:else}
								<div class="shiki-code">
									<CodeSnippet showMoreLess={false} hideCopyButton type="multi"
										>{@html inputsHTML}</CodeSnippet
									>
								</div>
							{/if}
						</div>
						<div class="button-container">
							<CopyButton text={inputTextInputs} />
						</div>

						<Button
							kind="tertiary"
							icon={DocumentDownload}
							on:click={() => saveInputsAsJSONFile(inputTextInputs)}
							>Save inputs to file</Button
						>
					</div>
					<!-- <Toggle labelText="Extra Icons" bind:toggled={weaponExtraIcons} /> -->
				</div>

				<div>
					<p>Attack Display Value to True Raw Converter</p>
					<div class="number-input-container">
						<NumberInput
							size="sm"
							step={10}
							min={minimumNumberValue}
							max={maximumNumberValue}
							bind:value={inputNumberAttackValue}
							invalidText={invalidNumberValueText}
							label={'Weapon Attack Display Value'}
						/>
					</div>
					<p>
						True Raw: {Math.floor(
							inputNumberAttackValue /
								WeaponTypes.find((e) => e.name === inputWeaponType)
									?.bloatAttackMultiplier,
						)}
					</p>
				</div>

				<div class="container-inputs">
					<div class="inputs-1">
						<div class="input-sections-container">
							<div class="input-section">
								<div class="small-header">✨ Affinity</div>
								<div class="inputs-group-column">
									<Dropdown
										titleText="Style Rank Affinity"
										bind:selectedId={inputStyleRankAffinity}
										items={[
											{ id: 'None', text: 'None' },
											{
												id: 'Affinity +20% (+20%)',
												text: 'Affinity +20% (+20%)',
											},
											{
												id: 'Affinity +24% (+24%)',
												text: 'Affinity +24% (+24%)',
											},
											{
												id: 'Affinity +26% (+26%)',
												text: 'Affinity +26% (+26%)',
											},
										]}
									/>
									<Dropdown
										titleText="Melee Sharpness"
										bind:selectedId={inputMeleeSharpnessAffinity}
										items={[
											{
												id: 'Below Blue or Gunners (+0%)',
												text: 'Below Blue or Gunners (+0%)',
											},
											{ id: 'Blue (+5%)', text: 'Blue (+5%)' },
											{
												id: 'White Upwards (+10%)',
												text: 'White Upwards (+10%)',
											},
										]}
									/>
									<Dropdown
										titleText="Expert Skills"
										bind:selectedId={inputExpertSkills}
										items={[
											{ id: 'None', text: 'None' },
											{ id: 'Expert +1 (+10%)', text: 'Expert +1 (+10%)' },
											{ id: 'Expert +2 (+20%)', text: 'Expert +2 (+20%)' },
											{ id: 'Expert +3 (+30%)', text: 'Expert +3 (+30%)' },
											{ id: 'Expert +4 (+40%)', text: 'Expert +4 (+40%)' },
											{ id: 'Expert +5 (+50%)', text: 'Expert +5 (+50%)' },
											{
												id: 'Determination (+100%)',
												text: 'Determination (+100%)',
											},
										]}
									/>
									<Dropdown
										titleText="Flash Conversion"
										bind:selectedId={inputFlashConversion}
										items={[
											{ id: 'None', text: 'None' },
											{
												id: 'Critical Conversion (+30%)',
												text: 'Critical Conversion (+30%)',
											},
										]}
									/>

									<Dropdown
										titleText="Issen Skills"
										bind:selectedId={inputIssenSkills}
										items={[
											{
												id: 'None or Determination',
												text: 'None or Determination',
											},
											{
												id: 'Issen +1 (+5% / +0.10x)',
												text: 'Issen +1 (+5% / +0.10x)',
											},
											{
												id: 'Issen +2 (+10% / +0.15x)',
												text: 'Issen +2 (+10% / +0.15x)',
											},
											{
												id: 'Issen +3 (+20% / +0.25x)',
												text: 'Issen +3 (+20% / +0.25x)',
											},
										]}
									/>

									<Dropdown
										titleText="Ceaseless"
										bind:selectedId={inputCeaseless}
										items={[
											{ id: 'None (1x)', text: 'None (1x)' },
											{
												id: 'Ceaseless 1st Stage (+35% / +0.10x)',
												text: 'Ceaseless 1st Stage (+35% / +0.10x)',
											},
											{
												id: 'Ceaseless 2nd Stage (+50% / +0.15x)',
												text: 'Ceaseless 2nd Stage (+50% / +0.15x)',
											},
											{
												id: 'Ceaseless Up 3rd Stage (+60% / +0.20x)',
												text: 'Ceaseless Up 3rd Stage (+60% / +0.20x)',
											},
										]}
									/>

									<Dropdown
										titleText="Starving Wolf"
										bind:selectedId={inputStarvingWolf}
										items={[
											{ id: 'None (1x)', text: 'None (1x)' },
											{
												id: 'Starving Wolf+1 (+50% / +0.00x)',
												text: 'Starving Wolf+1 (+50% / +0.00x)',
											},
											{
												id: 'Starving Wolf+2 (+50% / +0.10x)',
												text: 'Starving Wolf+2 (+50% / +0.10x)',
											},
										]}
									/>

									<Dropdown
										titleText="Affinity Items"
										bind:selectedId={inputAffinityItems}
										items={[
											{ id: 'None', text: 'None' },
											{
												id: 'Caravan Whetstone (+10%)',
												text: 'Caravan Whetstone (+10%)',
											},
											{ id: 'Halk Drink (+30%)', text: 'Halk Drink (+30%)' },
											{ id: 'Both (+40%)', text: 'Both (+40%)' },
										]}
									/>

									<Dropdown
										titleText="GS Active Feature"
										bind:selectedId={inputGsActiveFeature}
										items={[
											{ id: 'None', text: 'None' },
											{
												id: 'Unsheathe and Parry Attacks (+100%)',
												text: 'Unsheathe and Parry Attacks (+100%)',
											},
										]}
									/>
								</div>
							</div>

							<div class="input-section">
								<div class="small-header">💪 Multiplied Base</div>
								<div class="inputs-group-column">
									<Dropdown
										titleText="Attack Skills"
										bind:selectedId={inputAttackSkills}
										items={[
											{ id: 'None', text: 'None' },
											{
												id: 'Strong Attack +1 (+20)',
												text: 'Strong Attack +1 (+20)',
											},
											{
												id: 'Strong Attack +2 (+35)',
												text: 'Strong Attack +2 (+35)',
											},
											{
												id: 'Strong Attack +3 (+50)',
												text: 'Strong Attack +3 (+50)',
											},
											{
												id: 'Strong Attack +4 (+80)',
												text: 'Strong Attack +4 (+80)',
											},
											{
												id: 'Determination (+100)',
												text: 'Determination (+100)',
											},
											{
												id: 'Strong Attack +5 (+150)',
												text: 'Strong Attack +5 (+150)',
											},
											{
												id: 'Strong Attack +6 (+200)',
												text: 'Strong Attack +6 (+200)',
											},
										]}
									/>

									<Dropdown
										titleText="Caravan Skills"
										bind:selectedId={inputCaravanSkills}
										items={[
											{ id: 'None', text: 'None' },
											{
												id: 'Shooting Rampage (x1.1) (Ranged Only)',
												text: 'Shooting Rampage (x1.1) (Ranged Only)',
											},
											{
												id: 'Weapons Art Small (x1.01)',
												text: 'Weapons Art Small (x1.01)',
											},
											{
												id: 'Weapons Art Medium (x1.025)',
												text: 'Weapons Art Medium (x1.025)',
											},
											{
												id: 'Weapons Art Large (x1.05)',
												text: 'Weapons Art Large (x1.05)',
											},
										]}
									/>

									<Dropdown
										titleText="Passive Items"
										bind:selectedId={inputPassiveItems}
										items={[
											{ id: 'None', text: 'None' },
											{ id: 'Power Charm (+6)', text: 'Power Charm (+6)' },
											{ id: 'Power Talon (+9)', text: 'Power Talon (+9)' },
											{ id: 'Both (+15)', text: 'Both (+15)' },
										]}
									/>

									<Dropdown
										titleText="Food / Consumables"
										bind:selectedId={inputFoodConsumables}
										items={[
											{ id: 'None', text: 'None' },
											{
												id: 'Demon Drug / Halk D. Drug (+3)',
												text: 'Demon Drug / Halk D. Drug (+3)',
											},
											{
												id: 'Mega Demon Drug (+5)',
												text: 'Mega Demon Drug (+5)',
											},
											{
												id: 'Small Atk Food (+3)',
												text: 'Small Atk Food (+3)',
											},
											{ id: 'Med Atk Food(+5)', text: 'Med Atk Food(+5)' },
											{
												id: 'SR Med Atk Food (+10)',
												text: 'SR Med Atk Food (+10)',
											},
											{
												id: 'SR Lg Atk Food (+15)',
												text: 'SR Lg Atk Food (+15)',
											},
										]}
									/>

									<Dropdown
										titleText="Seeds, Flutes, Cat"
										bind:selectedId={inputSeedsFlutesCat}
										items={[
											{ id: 'None', text: 'None' },
											{ id: 'Power Seed(+10)', text: 'Power Seed(+10)' },
											{ id: 'Demon Horn (+10)', text: 'Demon Horn (+10)' },
											{
												id: 'Art of Dancing (+10)',
												text: 'Art of Dancing (+10)',
											},
											{ id: 'Power Pill (+25)', text: 'Power Pill (+25)' },
											{
												id: 'Tonfa Body Aura (Ranged Only) (+25)',
												text: 'Tonfa Body Aura (Ranged Only) (+25)',
											},
											{
												id: 'Tonfa B. Aura A. Feature (Ranged Only) (+50)',
												text: 'Tonfa B. Aura A. Feature (Ranged Only) (+50)',
											},
											{
												id: 'Long Sword Attack Up (+10)',
												text: 'Long Sword Attack Up (+10)',
											},
											{
												id: 'Long Sword Active Feature Attack Up (+40)',
												text: 'Long Sword Active Feature Attack Up (+40)',
											},
											{
												id: '(Cat) Demon Horn (No Skill) (+10)',
												text: '(Cat) Demon Horn (No Skill) (+10)',
											},
											{
												id: '(Cat) Demon Horn +1 (+20)',
												text: '(Cat) Demon Horn +1 (+20)',
											},
											{
												id: '(Cat) Demon Horn +2 (+40)',
												text: '(Cat) Demon Horn +2 (+40)',
											},
											{
												id: '(Cat) D. Horn (No Skill) & Encourage+1 (+20)',
												text: '(Cat) D. Horn (No Skill) & Encourage+1 (+20)',
											},
											{
												id: '(Cat) D. Horn (No Skill) & Encourage+2 (+30)',
												text: '(Cat) D. Horn (No Skill) & Encourage+2 (+30)',
											},
											{
												id: '(Cat) Demon Horn+1 & Encourage+1 (+30)',
												text: '(Cat) Demon Horn+1 & Encourage+1 (+30)',
											},
											{
												id: '(Cat) Demon Horn+2 & Encourage+1 (+50)',
												text: '(Cat) Demon Horn+2 & Encourage+1 (+50)',
											},
											{
												id: '(Cat) Demon Horn+1 & Encourage+2 (+40)',
												text: '(Cat) Demon Horn+1 & Encourage+2 (+40)',
											},
											{
												id: '(Cat) Demon Horn+2 & Encourage+2 (+60)',
												text: '(Cat) Demon Horn+2 & Encourage+2 (+60)',
											},
										]}
									/>

									<Dropdown
										titleText="Lance / HBG"
										bind:selectedId={inputLanceHbg}
										items={[
											{ id: 'None', text: 'None' },
											{
												id: 'HBG Power Barrel (+20)',
												text: 'HBG Power Barrel (+20)',
											},
											{
												id: 'Lance Self Buff (+50)',
												text: 'Lance Self Buff (+50)',
											},
										]}
									/>

									<Dropdown
										titleText="Lone Wolf"
										bind:selectedId={inputLoneWolf}
										items={[
											{ id: 'None', text: 'None' },
											{ id: 'Active (+100)', text: 'Active (+100)' },
										]}
									/>

									<Dropdown
										titleText="Crit Conversion Up"
										bind:selectedId={inputCritConversion}
										items={[
											{ id: 'None', text: 'None' },
											{ id: 'Crit C. Up +1 (Z1)', text: 'Crit C. Up +1 (Z1)' },
											{ id: 'Crit C. Up +2 (Z1)', text: 'Crit C. Up +2 (Z1)' },
										]}
									/>
									<div class="number-input-container">
										<NumberInput
											size="sm"
											step={10}
											min={minimumNumberValue}
											max={maximumNumberValue}
											bind:value={inputNumberCritConversion}
											invalidText={invalidNumberValueText}
											label={'Crit Conversion'}
										/>
									</div>
									<Dropdown
										titleText="Stylish Assault"
										bind:selectedId={inputStylishAssault}
										items={[
											{ id: 'None', text: 'None' },
											{ id: 'Active (+100)', text: 'Active (+100)' },
											{
												id: 'S. Assault Up (+120) (Z1)',
												text: 'S. Assault Up (+120) (Z1)',
											},
											{
												id: 'S. Assault Up (+140) (Z1)',
												text: 'S. Assault Up (+140) (Z1)',
											},
											{
												id: 'S. Assault Up (+160) (Z1)',
												text: 'S. Assault Up (+160) (Z1)',
											},
											{
												id: 'S. Assault Up (+180) (Z1)',
												text: 'S. Assault Up (+180) (Z1)',
											},
											{
												id: 'S. Assault Up (+200) (Z1)',
												text: 'S. Assault Up (+200) (Z1)',
											},
											{
												id: 'S. Assault Up (+220) (Z1)',
												text: 'S. Assault Up (+220) (Z1)',
											},
										]}
									/>

									<Dropdown
										titleText="Consumption Slayer"
										bind:selectedId={inputConsumptionSlayer}
										items={[
											{ id: 'None', text: 'None' },
											{ id: 'Active (+100)', text: 'Active (+100)' },
										]}
									/>

									<div class="number-input-container">
										<NumberInput
											size="sm"
											step={10}
											min={minimumNumberValue}
											max={maximumNumberValue}
											bind:value={inputNumberVampirism}
											invalidText={invalidNumberValueText}
											label={'Vampirism'}
										/>
									</div>

									<Dropdown
										titleText="Obscurity"
										bind:selectedId={inputObscurity}
										items={[
											{ id: 'None', text: 'None' }, // TODO
											{
												id: '1 Block (+40 / +30 / +20)',
												text: '1 Block (+40 / +30 / +20)',
											},
											{
												id: '2 Blocks (+80 / +60 / +40)',
												text: '2 Blocks (+80 / +60 / +40)',
											},
											{
												id: '3 Blocks (+120 / +90 / +60)',
												text: '3 Blocks (+120 / +90 / +60)',
											},
											{
												id: '4 Blocks (+160 / +120 / +80)',
												text: '4 Blocks (+160 / +120 / +80)',
											},
											{
												id: '5 Blocks (+200 / +150 / +100)',
												text: '5 Blocks (+200 / +150 / +100)',
											},
											{
												id: '6 Blocks (+220 / +165 / +110)',
												text: '6 Blocks (+220 / +165 / +110)',
											},
											{
												id: '7 Blocks (+240 / +180 / +120)',
												text: '7 Blocks (+240 / +180 / +120)',
											},
											{
												id: '8 Blocks (+260 / +195 / +130)',
												text: '8 Blocks (+260 / +195 / +130)',
											},
											{
												id: '9 Blocks (+280 / +210 / +140)',
												text: '9 Blocks (+280 / +210 / +140)',
											},
											{
												id: '10 Blocks (+300 / +225 / +150)',
												text: '10 Blocks (+300 / +225 / +150)',
											},
											{
												id: '1 Block (+70 / +50 / +30)',
												text: '1 Block (+70 / +50 / +30)',
											},
											{
												id: '2 Blocks (+140 / +100 / +60)',
												text: '2 Blocks (+140 / +100 / +60)',
											},
											{
												id: '3 Blocks (+210 / +150 / +90)',
												text: '3 Blocks (+210 / +150 / +90)',
											},
											{
												id: '4 Blocks (+240 / +175 / +110)',
												text: '4 Blocks (+240 / +175 / +110)',
											},
											{
												id: '5 Blocks (+270 / +200 / +130)',
												text: '5 Blocks (+270 / +200 / +130)',
											},
											{
												id: '6 Blocks (+300 / +225 / +150)',
												text: '6 Blocks (+300 / +225 / +150)',
											},
										]}
									/>

									<Dropdown
										titleText="Rush"
										bind:selectedId={inputRush}
										items={[
											{ id: 'None', text: 'None' },
											{ id: '1st Stage (+50)', text: '1st Stage (+50)' },
											{ id: '2nd Stage (+130)', text: '2nd Stage (+130)' },
											{
												id: '3rd Stage (+200) (Rush Up)',
												text: '3rd Stage (+200) (Rush Up)',
											},
										]}
									/>

									<Dropdown
										titleText="Furious"
										bind:selectedId={inputFurious}
										items={[
											{
												id: 'None (x1 Ele & Status)',
												text: 'None (x1 Ele & Status)',
											},
											{
												id: '1st Stage (+70 / 1.05x Ele & Status / +10% Affinity)',
												text: '1st Stage (+70 / 1.05x Ele & Status / +10% Affinity)',
											},
											{
												id: '2nd Stage (+100 / 1.10x Ele & Status / +25% Affinity)',
												text: '2nd Stage (+100 / 1.10x Ele & Status / +25% Affinity)',
											},
											{
												id: '3rd Stage (+180 / 1.20x Ele & Status / +40% Affinity)',
												text: '3rd Stage (+180 / 1.20x Ele & Status / +40% Affinity)',
											},
										]}
									/>

									<Dropdown
										titleText="Shiriagari"
										bind:selectedId={inputShiriagari}
										items={[
											{ id: 'None', text: 'None' },
											{ id: '1 Minute (+20)', text: '1 Minute (+20)' },
											{ id: '3 Minutes (+50)', text: '3 Minutes (+50)' },
											{ id: '5 Minutes (+80)', text: '5 Minutes (+80)' },
											{ id: '10 Minutes (+130)', text: '10 Minutes (+130)' },
											{ id: '15 Minutes (+180)', text: '15 Minutes (+180)' },
											{ id: '20 Minutes (+200)', text: '20 Minutes (+200)' },
										]}
									/>

									<Dropdown
										titleText="Incitement"
										bind:selectedId={inputIncitement}
										items={[
											{ id: 'None', text: 'None' },
											{ id: 'Active (+40)', text: 'Active (+40)' },
										]}
									/>

									<Dropdown
										titleText="Length Up"
										bind:selectedId={inputLengthUp}
										items={[
											{ id: 'None', text: 'None' },
											{ id: 'Active', text: 'Active' }, // TODO
										]}
									/>

									<Dropdown
										titleText="Road Attack"
										bind:selectedId={inputRoadAttack}
										items={[
											{ id: 'None', text: 'None' },
											{
												id: 'Road Attack Lv 1 (+10)',
												text: 'Road Attack Lv 1 (+10)',
											},
											{
												id: 'Road Attack Lv 2 (+20)',
												text: 'Road Attack Lv 2 (+20)',
											},
											{
												id: 'Road Attack Lv 3 (+30)',
												text: 'Road Attack Lv 3 (+30)',
											},
											{
												id: 'Road Attack Lv 4 (+50)',
												text: 'Road Attack Lv 4 (+50)',
											},
											{
												id: 'Road Attack Lv 5 (+70)',
												text: 'Road Attack Lv 5 (+70)',
											},
										]}
									/>

									<Dropdown
										titleText="Road Advancement"
										bind:selectedId={inputRoadAdvLvFlr}
										items={[
											{ id: 'None', text: 'None' },
											{ id: 'Lv 1 (+20 / +10)', text: 'Lv 1 (+20 / +10)' },
											{ id: 'Lv 2 (+40 / +10)', text: 'Lv 2 (+40 / +10)' },
											{ id: 'Lv 3 (+60 / +10)', text: 'Lv 3 (+60 / +10)' },
										]}
									/>

									<div class="number-input-container">
										<NumberInput
											size="sm"
											step={10}
											min={minimumNumberValue}
											max={maximumNumberValue}
											bind:value={inputNumberRoadFloor}
											invalidText={invalidNumberValueText}
											label={'Road Floor'}
										/>
									</div>

									<Dropdown
										titleText="Road Last Stand"
										bind:selectedId={inputRoadLastStand}
										items={[
											{ id: 'None', text: 'None' },
											{
												id: 'Last Stand Lv 1 (+80)',
												text: 'Last Stand Lv 1 (+80)',
											},
											{
												id: 'Last Stand Lv 2 (+120)',
												text: 'Last Stand Lv 2 (+120)',
											},
										]}
									/>

									<Dropdown
										titleText="Duremudira Attack"
										bind:selectedId={inputDuremudiraAttack}
										items={[
											{ id: 'None', text: 'None' },
											{
												id: 'Dure Attack Lv 1 (+50)',
												text: 'Dure Attack Lv 1 (+50)',
											},
											{
												id: 'Dure Attack Lv 2 (+75)',
												text: 'Dure Attack Lv 2 (+75)',
											},
											{
												id: 'Dure Attack Lv 3 (+100)',
												text: 'Dure Attack Lv 3 (+100)',
											},
											{
												id: 'Dure Attack Lv 4 (+150)',
												text: 'Dure Attack Lv 4 (+150)',
											},
											{
												id: 'Dure Attack Lv 5 (+200)',
												text: 'Dure Attack Lv 5 (+200)',
											},
										]}
									/>
									<div class="number-input-container">
										<NumberInput
											size="sm"
											step={10}
											min={minimumNumberValue}
											max={maximumNumberValue}
											bind:value={inputNumberConquestAttack}
											invalidText={invalidNumberValueText}
											label={'Conquest Attack'}
										/>
									</div>
									<Dropdown
										titleText="Attack Medicine"
										bind:selectedId={inputAttackMedicine}
										items={[
											{ id: 'None', text: 'None' },
											{ id: 'Active (+100)', text: 'Active (+100)' },
										]}
									/>
								</div>
							</div>

							<div class="input-section">
								<div class="small-header">⚔️ Multipliers</div>
								<div class="inputs-group-column">
									<Dropdown
										titleText="HH Attack Songs"
										bind:selectedId={inputHhAttackSongs}
										items={[
											{ id: 'None (1x)', text: 'None (1x)' },
											{
												id: 'G Rank Atk Sm (x1.10)',
												text: 'G Rank Atk Sm (x1.10)',
											},
											{
												id: 'G Rank Atk Sm Bonus (x1.15)',
												text: 'G Rank Atk Sm Bonus (x1.15)',
											},
											{
												id: 'G Rank Atk Lg (x1.15)',
												text: 'G Rank Atk Lg (x1.15)',
											},
											{
												id: 'G Rank Atk Lg Bonus (x1.2)',
												text: 'G Rank Atk Lg Bonus (x1.2)',
											},
										]}
									/>

									<Dropdown
										titleText="Adrenaline/Vigorous"
										bind:selectedId={inputAdrenalineVigorous}
										items={[
											{ id: 'None (1x)', text: 'None (1x)' },
											{ id: 'Vigorous (x1.15)', text: 'Vigorous (x1.15)' },
											{ id: 'Worry (x0.70)', text: 'Worry (x0.70)' },
											{ id: 'Bowguns (x1.3)', text: 'Bowguns (x1.3)' },
											{
												id: 'Melee / Bows (x1.5)',
												text: 'Melee / Bows (x1.5)',
											},
										]}
									/>

									<Dropdown
										titleText="Vigorous Up"
										bind:selectedId={inputVigorousUp}
										items={[
											{ id: 'None', text: 'None' },
											{
												id: 'Active (+50 Ranged, +100 Melee)',
												text: 'Active (+50 Ranged, +100 Melee)',
											},
										]}
									/>

									<Dropdown
										titleText="Hiden Skills"
										bind:selectedId={inputHidenSkills}
										items={[
											{ id: 'None (1x)', text: 'None (1x)' },
											{
												id: 'Ranged Large Hiden (x1.4)',
												text: 'Ranged Large Hiden (x1.4)',
											},
											{
												id: 'SnS or Ranged (x1.3)',
												text: 'SnS or Ranged (x1.3)',
											},
											{
												id: 'Other Weapons (x1.2)',
												text: 'Other Weapons (x1.2)',
											},
										]}
									/>

									<Dropdown
										titleText="Weapon Specific"
										bind:selectedId={inputWeaponSpecific}
										items={[
											{ id: 'None (1x)', text: 'None (1x)' },
											{ id: '1 Sharpen (x1.05)', text: '1 Sharpen (x1.05)' },
											{ id: '2 Sharpens (x1.10)', text: '2 Sharpens (x1.10)' },
											{ id: '3 Sharpens (x1.15)', text: '3 Sharpens (x1.15)' },
											{ id: '4 Sharpens (x1.20)', text: '4 Sharpens (x1.20)' },
											{ id: '1 Bar (x1.10)', text: '1 Bar (x1.10)' },
											{ id: '2 Bar (x1.20)', text: '2 Bar (x1.20)' },
											{ id: '3 Bar (x1.30)', text: '3 Bar (x1.30)' },
											{ id: '4 Bar (x1.40)', text: '4 Bar (x1.40)' },
											{ id: '5 Bar (x1.50)', text: '5 Bar (x1.50)' },
											{ id: '6 Bar (x1.60)', text: '6 Bar (x1.60)' },
											{
												id: 'Hammer Perfect Charge (x1.30)',
												text: 'Hammer Perfect Charge (x1.30)',
											},
											{
												id: 'Long Sword Maxed Gauge (x1.2375)',
												text: 'Long Sword Maxed Gauge (x1.2375)',
											},
											{
												id: 'Swaxe Hiden Boost (x1.05)',
												text: 'Swaxe Hiden Boost (x1.05)',
											},
											{
												id: 'MS Hiden Boost (x1.03)',
												text: 'MS Hiden Boost (x1.03)',
											},
										]}
									/>

									<Dropdown
										titleText="Combat Supremacy"
										bind:selectedId={inputCombatSupremacy}
										items={[
											{ id: 'None (1x)', text: 'None (1x)' },
											{ id: 'Yes (x1.2)', text: 'Yes (x1.2)' },
										]}
									/>
								</div>
							</div>
							<div class="input-section">
								<div class="small-header">➕ Flat Additions</div>
								<div class="inputs-group-column">
									<Dropdown
										titleText="Armor 1"
										bind:selectedId={inputArmor1}
										items={[
											{ id: 'None', text: 'None' },
											{
												id: '1 Storm / Suprem / Burst Piece (+15)',
												text: '1 Storm / Suprem / Burst Piece (+15)',
											},
											{
												id: '2 Storm / Suprem / Burst Pieces (+30)',
												text: '2 Storm / Suprem / Burst Pieces (+30)',
											},
											{
												id: '3 Storm / Suprem / Burst Pieces (+45)',
												text: '3 Storm / Suprem / Burst Pieces (+45)',
											},
											{
												id: '4 Storm / Suprem / Burst Pieces (+60)',
												text: '4 Storm / Suprem / Burst Pieces (+60)',
											},
											{
												id: '5 Storm / Suprem / Burst Pieces (+80)',
												text: '5 Storm / Suprem / Burst Pieces (+80)',
											},
										]}
									/>

									<Dropdown
										titleText="Origin Armor"
										bind:selectedId={inputOriginArmor}
										items={[
											{ id: 'None', text: 'None' },
											{
												id: '1 Origin Piece (+20)',
												text: '1 Origin Piece (+20)',
											},
											{
												id: '2 Origin Pieces (+40)',
												text: '2 Origin Pieces (+40)',
											},
											{
												id: '3 Origin Pieces (+60)',
												text: '3 Origin Pieces (+60)',
											},
											{
												id: '4 Origin Pieces (+80)',
												text: '4 Origin Pieces (+80)',
											},
											{
												id: '5 Origin Pieces (+110)',
												text: '5 Origin Pieces (+110)',
											},
										]}
									/>

									<Dropdown
										titleText="G Armor Pieces"
										bind:selectedId={inputGArmorPieces}
										items={[
											{ id: 'None', text: 'None' },
											{
												id: '3+ G Rank Pieces (+30)',
												text: '3+ G Rank Pieces (+30)',
											},
										]}
									/>

									<Dropdown
										titleText="GSR999 Secret Tech."
										bind:selectedId={inputGsr999SecretTech}
										items={[
											{ id: 'None', text: 'None' },
											{
												id: 'Secret Technique Used (+320)',
												text: 'Secret Technique Used (+320)',
											},
										]}
									/>

									<Dropdown
										titleText="Red Soul"
										bind:selectedId={inputRedSoul}
										items={[
											{ id: 'None', text: 'None' },
											{ id: 'On Self (+15)', text: 'On Self (+15)' },
											{ id: 'Hit by Other (+30)', text: 'Hit by Other (+30)' },
											{ id: 'Red Soul Up (+100)', text: 'Red Soul Up (+100)' },
										]}
									/>

									<Dropdown
										titleText="Assistance"
										bind:selectedId={inputAssistance}
										items={[
											{ id: 'None', text: 'None' },
											{ id: 'Active (+20)', text: 'Active (+20)' },
										]}
									/>

									<Dropdown
										titleText="Bond (Male Hunter)"
										bind:selectedId={inputBondMaleHunter}
										items={[
											{ id: 'None', text: 'None' },
											{ id: 'Active (+5)', text: 'Active (+5)' },
										]}
									/>

									<Dropdown
										titleText="Partnyaa Bond"
										bind:selectedId={inputPartnyaaBond}
										items={[
											{ id: 'None', text: 'None' },
											{ id: 'Bond Level 1(+0)', text: 'Bond Level 1(+0)' },
											{ id: 'Bond Level 2(+10)', text: 'Bond Level 2(+10)' },
											{ id: 'Bond Level 3(+20)', text: 'Bond Level 3(+20)' },
											{ id: 'Bond Level 4(+30)', text: 'Bond Level 4(+30)' },
										]}
									/>
								</div>
							</div>
							<div class="input-section">
								<div class="small-header">🐲 Elemental Skills</div>
								<div class="inputs-group-column">
									<Dropdown
										titleText="Fire Multipliers"
										bind:selectedId={inputFireMultipliers}
										items={[
											{ id: 'None (1x)', text: 'None (1x)' },
											{
												id: 'Small or Halk Drink (1.1x)',
												text: 'Small or Halk Drink (1.1x)',
											},
											{ id: 'Large (1.2x)', text: 'Large (1.2x)' },
											{
												id: 'Small and Halk Drink (1.21x)',
												text: 'Small and Halk Drink (1.21x)',
											},
											{
												id: 'Large and Halk Drink (1.33x)',
												text: 'Large and Halk Drink (1.33x)',
											},
										]}
									/>

									<Dropdown
										titleText="Water Multipliers"
										bind:selectedId={inputWaterMultipliers}
										items={[
											{ id: 'None (1x)', text: 'None (1x)' },
											{
												id: 'Small or Halk Drink (1.1x)',
												text: 'Small or Halk Drink (1.1x)',
											},
											{ id: 'Large (1.2x)', text: 'Large (1.2x)' },
											{
												id: 'Small and Halk Drink (1.21x)',
												text: 'Small and Halk Drink (1.21x)',
											},
											{
												id: 'Large and Halk Drink (1.33x)',
												text: 'Large and Halk Drink (1.33x)',
											},
										]}
									/>

									<Dropdown
										titleText="Thunder Multipliers"
										bind:selectedId={inputThunderMultipliers}
										items={[
											{ id: 'None (1x)', text: 'None (1x)' },
											{
												id: 'Small or Halk Drink (1.1x)',
												text: 'Small or Halk Drink (1.1x)',
											},
											{ id: 'Large (1.2x)', text: 'Large (1.2x)' },
											{
												id: 'Small and Halk Drink (1.21x)',
												text: 'Small and Halk Drink (1.21x)',
											},
											{
												id: 'Large and Halk Drink (1.33x)',
												text: 'Large and Halk Drink (1.33x)',
											},
										]}
									/>

									<Dropdown
										titleText="Ice Multipliers"
										bind:selectedId={inputIceMultipliers}
										items={[
											{ id: 'None (1x)', text: 'None (1x)' },
											{
												id: 'Small or Halk Drink (1.1x)',
												text: 'Small or Halk Drink (1.1x)',
											},
											{ id: 'Large (1.2x)', text: 'Large (1.2x)' },
											{
												id: 'Small and Halk Drink (1.21x)',
												text: 'Small and Halk Drink (1.21x)',
											},
											{
												id: 'Large and Halk Drink (1.33x)',
												text: 'Large and Halk Drink (1.33x)',
											},
										]}
									/>

									<Dropdown
										titleText="Dragon Multipliers"
										bind:selectedId={inputDragonMultipliers}
										items={[
											{ id: 'None (1x)', text: 'None (1x)' },
											{
												id: 'Small or Halk Drink (1.1x)',
												text: 'Small or Halk Drink (1.1x)',
											},
											{ id: 'Large (1.2x)', text: 'Large (1.2x)' },
											{
												id: 'Small and Halk Drink (1.21x)',
												text: 'Small and Halk Drink (1.21x)',
											},
											{
												id: 'Large and Halk Drink (1.33x)',
												text: 'Large and Halk Drink (1.33x)',
											},
										]}
									/>

									<Dropdown
										titleText="Elemental Attack"
										bind:selectedId={inputElementalAttackMultiplier}
										items={[
											{ id: 'None (1x)', text: 'None (1x)' },
											{ id: 'Active (1.1x)', text: 'Active (1.1x)' },
											{
												id: 'SnS Active Feature (1.2x)',
												text: 'SnS Active Feature (1.2x)',
											},
											{ id: 'Both (1.32x)', text: 'Both (1.32x)' },
										]}
									/>

									<Dropdown
										titleText="HH Elemental Up"
										bind:selectedId={inputHhElementalUp}
										items={[
											{ id: 'None (1x)', text: 'None (1x)' },
											{ id: 'Ele Up Song (1.1x)', text: 'Ele Up Song (1.1x)' },
										]}
									/>
								</div>
							</div>
							<div class="input-section">
								<div class="small-header">💤 Status Skills</div>
								<div class="inputs-group-column">
									<Dropdown
										titleText="Abnormality"
										bind:selectedId={inputAbnormality}
										items={[
											{ id: 'None', text: 'None' },
											{ id: 'On', text: 'On' }, // TODO
										]}
									/>

									<Dropdown
										titleText="Drug Knowledge"
										bind:selectedId={inputDrugKnowledge}
										items={[
											{
												id: 'None (1x)',
												text: 'None (1x)',
											},
											{
												id: 'Standard (0.38x Status)',
												text: 'Standard (0.38x Status)',
											},
											{
												id: 'Drug Knowledge Up (0.42x Status)',
												text: 'Drug Knowledge Up (0.42x Status)',
											},
										]}
									/>

									<Dropdown
										titleText="Status Assault"
										bind:selectedId={inputStatusAssault}
										items={[
											{ id: 'None', text: 'None' },
											{
												id: 'On (For Sleep add +10 raw hitzone)', // TODO
												text: 'On (For Sleep add +10 raw hitzone)',
											},
										]}
									/>

									<Dropdown
										titleText="Status Attack Up"
										bind:selectedId={inputStatusAttackUp}
										items={[
											{ id: 'None (1x)', text: 'None (1x)' },
											{ id: 'On (1.125x)', text: 'On (1.125x)' },
										]}
									/>

									<Dropdown
										titleText="Guild Poogie"
										bind:selectedId={inputGuildPoogie}
										items={[
											{ id: 'None (1x)', text: 'None (1x)' },
											{ id: 'On (1.125x)', text: 'On (1.125x)' },
										]}
									/>

									<Dropdown
										titleText="Status Sigil"
										bind:selectedId={inputStatusSigil}
										items={[
											{ id: 'None (1x)', text: 'None (1x)' },
											{ id: 'Normal (1.1x)', text: 'Normal (1.1x)' },
											{ id: 'Zenith (1.5x)', text: 'Zenith (1.5x)' },
											{ id: 'Both (1.65x)', text: 'Both (1.65x)' },
										]}
									/>

									<Dropdown
										titleText="Weapon Modifiers"
										bind:selectedId={inputWeaponStatusModifiers}
										items={[
											{ id: 'None (1x)', text: 'None (1x)' },
											{
												id: 'SnS Active Feature (1.2x)',
												text: 'SnS Active Feature (1.2x)',
											},
											{
												id: 'Swaxe Status Phial Active (1.3x)',
												text: 'Swaxe Status Phial Active (1.3x)',
											},
										]}
									/>
								</div>
							</div>
							<div class="input-section">
								<div class="small-header">❓ Arbitrary Custom Motion Value</div>
								<div class="inputs-group-column">
									<div class="number-input-container">
										<NumberInput
											size="sm"
											step={10}
											min={minimumNumberValue}
											max={maximumNumberValue}
											bind:value={inputNumberTotalMotionValue}
											invalidText={invalidNumberValueText}
											label={'Total Motion Value'}
										/>
									</div>
									<div class="number-input-container">
										<NumberInput
											size="sm"
											step={10}
											min={minimumNumberValue}
											max={maximumNumberValue}
											bind:value={inputNumberHitCount}
											invalidText={invalidNumberValueText}
											label={'Hit Count'}
										/>
									</div>
									<div class="number-input-container">
										<NumberInput
											size="sm"
											step={10}
											min={minimumNumberValue}
											max={maximumNumberValue}
											bind:value={inputNumberElementalMultiplier}
											invalidText={invalidNumberValueText}
											label={'Elemental Multiplier'}
										/>
									</div>
								</div>
							</div>
						</div>
					</div>

					<div class="inputs-2">
						<div class="input-sections-container">
							<div class="input-section">
								<div class="small-header">⚔️ Weapon Stats</div>
								<div class="inputs-group-column">
									<Dropdown
										titleText="Weapon Type"
										bind:selectedId={inputWeaponType}
										items={[
											{ id: 'Sword and Shield', text: 'Sword and Shield' },
											{ id: 'Dual Swords', text: 'Dual Swords' },
											{ id: 'Great Sword', text: 'Great Sword' },
											{ id: 'Long Sword', text: 'Long Sword' },
											{ id: 'Hammer', text: 'Hammer' },
											{ id: 'Hunting Horn', text: 'Hunting Horn' },
											{ id: 'Lance', text: 'Lance' },
											{ id: 'Gunlance', text: 'Gunlance' },
											{ id: 'Tonfa', text: 'Tonfa' },
											{ id: 'Switch Axe F', text: 'Switch Axe F' },
											{ id: 'Light Bowgun', text: 'Light Bowgun' },
											{ id: 'Heavy Bowgun', text: 'Heavy Bowgun' },
											{ id: 'Bow', text: 'Bow' },
											{ id: 'Magnet Spike', text: 'Magnet Spike' },
										]}
									/>

									<div class="number-input-container">
										<NumberInput
											size="sm"
											step={10}
											min={minimumNumberValue}
											max={maximumNumberValue}
											bind:value={inputNumberTrueRaw}
											invalidText={invalidNumberValueText}
											label={'True Raw'}
										/>
									</div>
									<div class="number-input-container">
										<NumberInput
											size="sm"
											step={10}
											min={minimumNumberValue}
											max={maximumNumberValue}
											bind:value={inputNumberUnlimitedSigil}
											invalidText={invalidNumberValueText}
											label={'Unlimited Sigil'}
										/>
									</div>

									<div class="number-input-container">
										<NumberInput
											size="sm"
											step={10}
											min={minimumNumberValue}
											max={maximumNumberValue}
											bind:value={inputNumberStyleRankAttack}
											invalidText={invalidNumberValueText}
											label={'SR Attack'}
										/>
									</div>
									<div class="number-input-container">
										<NumberInput
											size="sm"
											step={10}
											min={minimumNumberValue}
											max={maximumNumberValue}
											bind:value={inputNumberSigil1Attack}
											invalidText={invalidNumberValueText}
											label={'Sigil 1 Attack'}
										/>
									</div>
									<div class="number-input-container">
										<NumberInput
											size="sm"
											step={10}
											min={minimumNumberValue}
											max={maximumNumberValue}
											bind:value={inputNumberSigil2Attack}
											invalidText={invalidNumberValueText}
											label={'Sigil 2 Attack'}
										/>
									</div>
									<div class="number-input-container">
										<NumberInput
											size="sm"
											step={10}
											min={minimumNumberValue}
											max={maximumNumberValue}
											bind:value={inputNumberSigil3Attack}
											invalidText={invalidNumberValueText}
											label={'Sigil 3 Attack'}
										/>
									</div>
									<div class="number-input-container">
										<NumberInput
											size="sm"
											step={10}
											min={minimumNumberValue}
											max={maximumNumberValue}
											bind:value={inputNumberZenithAttackSigil}
											invalidText={invalidNumberValueText}
											label={'Zenith Attack Sigil'}
										/>
									</div>
									<div class="number-input-container">
										<NumberInput
											size="sm"
											step={10}
											min={minimumNumberValue}
											max={maximumNumberValue}
											bind:value={inputNumberAOEAttackSigil}
											invalidText={invalidNumberValueText}
											label={'AoE Attack Sigil'}
										/>
									</div>

									<Dropdown
										titleText="AoE Attack Sigil"
										bind:selectedId={inputAoeAttackSigil}
										items={[
											{ id: 'None', text: 'None' },
											{ id: '1 Sigil', text: '1 Sigil' },
											{ id: '2 Sigils', text: '2 Sigils' },
											{ id: '3 Sigils', text: '3 Sigils' },
											{ id: '4 Sigils', text: '4 Sigils' },
										]}
									/>

									<div class="number-input-container">
										<NumberInput
											size="sm"
											step={10}
											min={minimumNumberValue}
											max={maximumNumberValue}
											bind:value={inputNumberNaturalAffinity}
											invalidText={invalidNumberValueText}
											label={'Natural Affinity'}
										/>
									</div>
									<div class="number-input-container">
										<NumberInput
											size="sm"
											step={10}
											min={minimumNumberValue}
											max={maximumNumberValue}
											bind:value={inputNumberSigil1Affinity}
											invalidText={invalidNumberValueText}
											label={'Sigil 1 Affinity'}
										/>
									</div>
									<div class="number-input-container">
										<NumberInput
											size="sm"
											step={10}
											min={minimumNumberValue}
											max={maximumNumberValue}
											bind:value={inputNumberSigil2Affinity}
											invalidText={invalidNumberValueText}
											label={'Sigil 2 Affinity'}
										/>
									</div>
									<div class="number-input-container">
										<NumberInput
											size="sm"
											step={10}
											min={minimumNumberValue}
											max={maximumNumberValue}
											bind:value={inputNumberSigil3Affinity}
											invalidText={invalidNumberValueText}
											label={'Sigil 3 Affinity'}
										/>
									</div>
									<div class="number-input-container">
										<NumberInput
											size="sm"
											step={10}
											min={minimumNumberValue}
											max={maximumNumberValue}
											bind:value={inputNumberAOEAffinitySigil}
											invalidText={invalidNumberValueText}
											label={'AoE Affinity Sigil'}
										/>
									</div>

									<Dropdown
										titleText="AoE Affinity Sigil"
										bind:selectedId={inputAoeAffinitySigil}
										items={[
											{ id: 'None', text: 'None' },
											{ id: '1 Sigil', text: '1 Sigil' },
											{ id: '2 Sigils', text: '2 Sigils' },
											{ id: '3 Sigils', text: '3 Sigils' },
											{ id: '4 Sigils', text: '4 Sigils' },
										]}
									/>

									<div class="number-input-container">
										<NumberInput
											size="sm"
											step={10}
											min={minimumNumberValue}
											max={maximumNumberValue}
											bind:value={inputNumberCritMultiplier}
											invalidText={invalidNumberValueText}
											label={'Crit Multiplier'}
										/>
									</div>

									<Dropdown
										titleText="Crit Mode"
										bind:selectedId={inputCritMode}
										items={[
											{ id: 'All Crits', text: 'All Crits' },
											{ id: 'Averaged', text: 'Averaged' },
											{ id: 'No Crits', text: 'No Crits' },
										]}
									/>
								</div>
							</div>
							{#if getWeaponClass(inputWeaponType) === 'Blademaster'}
								<div class="input-section">
									<div class="small-header">⚔️ Blademaster</div>
									<div class="inputs-group-column">
										<Dropdown
											titleText="Sharpness"
											bind:selectedId={inputSharpness}
											items={[
												{ id: 'Red (0.6x)', text: 'Red (0.6x)' },
												{ id: 'Orange (0.85x)', text: 'Orange (0.85x)' },
												{ id: 'Yellow (1.1x)', text: 'Yellow (1.1x)' },
												{ id: 'Green (1.325x)', text: 'Green (1.325x)' },
												{ id: 'Blue (1.45x)', text: 'Blue (1.45x)' },
												{ id: 'White (1.6x)', text: 'White (1.6x)' },
												{ id: 'Purple (1.7x)', text: 'Purple (1.7x)' },
												{ id: 'Cyan (1.8x)', text: 'Cyan (1.8x)' },
											]}
										/>

										<Dropdown
											titleText="Fencing"
											bind:selectedId={inputFencing}
											items={[
												{ id: 'None', text: 'None' },
												{ id: '+2', text: '+2' }, // TODO
											]}
										/>

										<div class="number-input-container">
											<NumberInput
												size="sm"
												step={10}
												min={minimumNumberValue}
												max={maximumNumberValue}
												bind:value={inputNumberLanceImpactMultiplier}
												invalidText={invalidNumberValueText}
												label={'Lance Impact Multiplier (0.72)'}
											/>
										</div>
										<div class="number-input-container">
											<NumberInput
												size="sm"
												step={10}
												min={minimumNumberValue}
												max={maximumNumberValue}
												bind:value={inputNumberTranscendRawMultiplier}
												invalidText={invalidNumberValueText}
												label={'Transcend Raw Multiplier (1.13)'}
											/>
										</div>
										<div class="number-input-container">
											<NumberInput
												size="sm"
												step={10}
												min={minimumNumberValue}
												max={maximumNumberValue}
												bind:value={inputNumberRavientePowerSwordCrystalsMultiplier}
												invalidText={invalidNumberValueText}
												label={'Raviente Power Sword Crystals (1.2)'}
											/>
										</div>
									</div>
								</div>
							{:else}
								<div class="input-section">
									<div class="small-header">🏹 Gunner</div>
									<div class="inputs-group-column">
										<Dropdown
											titleText="Distance Multiplier"
											bind:selectedId={inputDistanceMultiplier}
											items={[
												{
													id: '1.8x LBG & Bow Crit Distance',
													text: '1.8x LBG & Bow Crit Distance',
												},
												{
													id: '2.3x HBG 1st Half Crit Distance',
													text: '2.3x HBG 1st Half Crit Distance',
												},
												{
													id: '2.0x HBG 2nd Half Crit Distance',
													text: '2.0x HBG 2nd Half Crit Distance',
												},
												{
													id: '1.9x LBG & Bow Crit D. & Z Piece',
													text: '1.9x LBG & Bow Crit D. & Z Piece',
												},
												{
													id: '2.45x HBG 1st Half Crit D. & Zenith',
													text: '2.45x HBG 1st Half Crit D. & Zenith',
												},
												{
													id: '2.15x HBG 2nd Half Crit D. & Zenith',
													text: '2.15x HBG 2nd Half Crit D. & Zenith',
												},
												{
													id: '2.4x Z 1st Half Crit D. (HBG Active Feature)',
													text: '2.4x Z 1st Half Crit D. (HBG Active Feature)',
												},
												{
													id: '2.1x Z 2nd Half Crit D. (HBG Active Feature)',
													text: '2.1x Z 2nd Half Crit D. (HBG Active Feature)',
												},
												{
													id: '2.1x 1st Half Crit D. (HBG Active Feature)',
													text: '2.1x 1st Half Crit D. (HBG Active Feature)',
												},
												{
													id: '1.8x 2nd Half Crit D. (HBG Active Feature)',
													text: '1.8x 2nd Half Crit D. (HBG Active Feature)',
												},
												{
													id: '2.0x HBG 1st Half Crit D.',
													text: '2.0x HBG 1st Half Crit D.',
												},
												{
													id: '1.7x 2nd Half Crit D.',
													text: '1.7x 2nd Half Crit D.',
												},
												{
													id: '1.5x Bow or LBG Crit D.',
													text: '1.5x Bow or LBG Crit D.',
												},
												{ id: '2.2x', text: '2.2x' },
												{ id: '1.6x', text: '1.6x' },
												{ id: '1.4x', text: '1.4x' },
												{ id: '1.3x', text: '1.3x' },
												{ id: '1.2x', text: '1.2x' },
												{ id: '1.1x', text: '1.1x' },
												{ id: '1.0x', text: '1.0x' },
												{
													id: '2.3x Step Shot & Z Piece',
													text: '2.3x Step Shot & Z Piece',
												},
												{
													id: '2.0x Step Shot & Z Piece',
													text: '2.0x Step Shot & Z Piece',
												},
												{
													id: '1.9x S. C. Distance & Z Piece (LBG Active Feature)',
													text: '1.9x S. C. Distance & Z Piece (LBG Active Feature)',
												},
												{
													id: '1.6x Standard C. Distance (LBG Active Feature)',
													text: '1.6x Standard C. Distance (LBG Active Feature) ',
												},
												{
													id: '2.4x Step Shot & Z Piece (LBG Active Feature)',
													text: '2.4x Step Shot & Z Piece (LBG Active Feature)',
												},
												{
													id: '2.1x Step Shot & Z Piece (LBG Active Feature)',
													text: '2.1x Step Shot & Z Piece (LBG Active Feature)',
												},
												{ id: '2.5x', text: '2.5x' },
												{ id: '2.55x', text: '2.55x' },
												{ id: '2.60x', text: '2.60x' },
											]}
										/>

										<Dropdown
											titleText="Bullet Modifier"
											bind:selectedId={inputBulletModifier}
											items={[
												{ id: 'None (1x)', text: 'None (1x)' },
												{
													id: 'Steady Hand (All Below)',
													text: 'Steady Hand (All Below)', // TODO
												},
												{
													id: 'Normal / Rapid Up (1.1x)',
													text: 'Normal / Rapid Up (1.1x)',
												},
												{ id: 'Pierce Up (1.1x)', text: 'Pierce Up (1.1x)' },
												{
													id: 'Pellet / Scatter Up (1.3x)',
													text: 'Pellet / Scatter Up (1.3x)',
												},
											]}
										/>

										<Dropdown
											titleText="Shot Multiplier"
											bind:selectedId={inputShotMultiplier}
											items={[
												{ id: 'Just Shot (1.3x)', text: 'Just Shot (1.3x)' },
												{ id: 'Perfect JS (1.4x)', text: 'Perfect JS (1.4x)' },
												{ id: 'Evade Shot (0.6x)', text: 'Evade Shot (0.6x)' },
												{
													id: 'Finishing Shot (2.0x)',
													text: 'Finishing Shot (2.0x)',
												},
												{ id: 'None (1x)', text: 'None (1x)' },
												{ id: 'Rapid Fire (0.5x)', text: 'Rapid Fire (0.5x)' },
												{
													id: 'Ultra Rapid Lv 1 Pierce S (0.73x)',
													text: 'Ultra Rapid Lv 1 Pierce S (0.73x)',
												},
											]}
										/>

										<Dropdown
											titleText="HBG Charge Shot"
											bind:selectedId={inputHbgChargeShot}
											items={[
												{
													id: 'Normal / Charge Lv 0 (x1)',
													text: 'Normal / Charge Lv 0 (x1)',
												},
												{
													id: 'Charge Lv 1 (1.15x)',
													text: 'Charge Lv 1 (1.15x)',
												},
												{
													id: 'Charge Lv 2 (1.3x)',
													text: 'Charge Lv 2 (1.3x)',
												},
												{
													id: 'Charge Lv 3 (1.5x)',
													text: 'Charge Lv 3 (1.5x)',
												},
												{
													id: 'Storm Style Lv 0 (0.95x)',
													text: 'Storm Style Lv 0 (0.95x)',
												},
											]}
										/>
										<div class="number-input-container">
											<NumberInput
												size="sm"
												step={10}
												min={minimumNumberValue}
												max={maximumNumberValue}
												bind:value={inputNumberCompressedShot}
												invalidText={invalidNumberValueText}
												label={'Compressed Shot'}
											/>
										</div>
										<Dropdown
											titleText="Compressed Shot"
											bind:selectedId={inputCompressedShotMultiplier}
											items={[
												{
													id: 'Not Compressed (0x)',
													text: 'Not Compressed (0x)',
												},
												{
													id: 'Lv1 Norm S. (2.4x Bullets Loaded)',
													text: 'Lv1 Norm S. (2.4x Bullets Loaded)',
												},
												{
													id: 'Lv2 Norm S. (6.0x Bullets Loaded)',
													text: 'Lv2 Norm S. (6.0x Bullets Loaded)',
												},
												{
													id: 'Lv3 Norm S. (6.0x Bullets Loaded x n)',
													text: 'Lv3 Norm S. (6.0x Bullets Loaded x n)',
												},
												{
													id: 'Lv1 Pierce 1 Hit (5x Bullets Loaded)',
													text: 'Lv1 Pierce 1 Hit (5x Bullets Loaded)',
												},
												{
													id: 'Lv2 Pierce 1 Hit (4.5x Bullets Loaded)',
													text: 'Lv2 Pierce 1 Hit (4.5x Bullets Loaded)',
												},
												{
													id: 'Lv3 Pierce 1 Hit (3.5x Bullets Loaded)',
													text: 'Lv3 Pierce 1 Hit (3.5x Bullets Loaded)',
												},
												{
													id: 'Lv1 Pierce 3 Hits (5x Bullets Loaded)',
													text: 'Lv1 Pierce 3 Hits (5x Bullets Loaded)',
												},
												{
													id: 'Lv2 Pierce 4 Hits (4.5x Bullets Loaded)',
													text: 'Lv2 Pierce 4 Hits (4.5x Bullets Loaded)',
												},
												{
													id: 'Lv3 Pierce 6 Hits (3.5x Bullets Loaded)',
													text: 'Lv3 Pierce 6 Hits (3.5x Bullets Loaded)',
												},
												{
													id: 'Lv1 Pellet S. (3x Bullets Loaded x 3)',
													text: 'Lv1 Pellet S. (3x Bullets Loaded x 3)',
												},
												{
													id: 'Lv2 Pellet S. (3x Bullets Loaded x 4)',
													text: 'Lv2 Pellet S. (3x Bullets Loaded x 4)',
												},
												{
													id: 'Lv3 Pellet S. (3x Bullets Loaded x 5)',
													text: 'Lv3 Pellet S. (3x Bullets Loaded x 5)',
												},
												{
													id: 'Lv1 Impact S. (5.0x Bullets Loaded x 2)',
													text: 'Lv1 Impact S. (5.0x Bullets Loaded x 2)',
												},
												{
													id: 'Lv2 Impact S. (4.5x Bullets Loaded x 3)',
													text: 'Lv2 Impact S. (4.5x Bullets Loaded x 3)',
												},
												{
													id: 'Lv3 Impact S. (3.5x Bullets Loaded x 5)',
													text: 'Lv3 Impact S. (3.5x Bullets Loaded x 5)',
												},
												{
													id: 'Lv1 Norm S. (3.6x Bullets Loaded)',
													text: 'Lv1 Norm S. (3.6x Bullets Loaded)',
												},
												{
													id: 'Lv2 Norm S. (8.4x Bullets Loaded)',
													text: 'Lv2 Norm S. (8.4x Bullets Loaded)',
												},
												{
													id: 'Lv3 Norm S. (8.4x Bullets Loaded x n)',
													text: 'Lv3 Norm S. (8.4x Bullets Loaded x n)',
												},
												{
													id: 'Lv1 Pierce 1 Hit (7x Bullets Loaded)',
													text: 'Lv1 Pierce 1 Hit (7x Bullets Loaded)',
												},
												{
													id: 'Lv2 Pierce 1 Hit (6.3x Bullets Loaded)',
													text: 'Lv2 Pierce 1 Hit (6.3x Bullets Loaded)',
												},
												{
													id: 'Lv3 Pierce 1 Hit (4.9x Bullets Loaded)',
													text: 'Lv3 Pierce 1 Hit (4.9x Bullets Loaded)',
												},
												{
													id: 'Lv1 Pierce 3 Hits (7x Bullets Loaded)',
													text: 'Lv1 Pierce 3 Hits (7x Bullets Loaded)',
												},
												{
													id: 'Lv2 Pierce 4 Hits (6.3x Bullets Loaded)',
													text: 'Lv2 Pierce 4 Hits (6.3x Bullets Loaded)',
												},
												{
													id: 'Lv3 Pierce 6 Hits (4.9x Bullets Loaded)',
													text: 'Lv3 Pierce 6 Hits (4.9x Bullets Loaded)',
												},
												{
													id: 'Lv1 Impact S. (7.0x Bullets Loaded x 2)',
													text: 'Lv1 Impact S. (7.0x Bullets Loaded x 2)',
												},
												{
													id: 'Lv2 Impact S. (6.3x Bullets Loaded x 3)',
													text: 'Lv2 Impact S. (6.3x Bullets Loaded x 3)',
												},
												{
													id: 'Lv3 Impact S. (4.9x Bullets Loaded x 5)',
													text: 'Lv3 Impact S. (4.9x Bullets Loaded x 5)',
												},
											]}
										/>

										<Dropdown
											titleText="Bow Coatings Multiplier"
											bind:selectedId={inputBowCoatingsMultiplier}
											items={[
												{ id: 'None (1x)', text: 'None (1x)' },
												{
													id: 'Power Bottle (1.6x)',
													text: 'Power Bottle (1.6x)',
												},
												{
													id: 'P. Bottle + Bow Hiden (1.8x)',
													text: 'P. Bottle + Bow Hiden (1.8x)',
												},
												{
													id: 'P. + Origin (1.7x)',
													text: 'P. + Origin (1.7x)',
												},
												{
													id: 'P. + Origin + Hiden (1.9x)',
													text: 'P. + Origin + Hiden (1.9x)',
												},
												{
													id: 'Status Bottle (1.5x)',
													text: 'Status Bottle (1.5x)',
												},
												{
													id: 'S. Bottle + Hiden (1.7x)',
													text: 'S. Bottle + Hiden (1.7x)',
												},
												{
													id: 'S. Bottle + Origin (1.6x)',
													text: 'S. Bottle + Origin (1.6x)',
												},
												{
													id: 'S. + Origin + Hiden (1.8x)',
													text: 'S. + Origin + Hiden (1.8x)',
												},
												{
													id: 'Non-G Power Bottle (1.5x)',
													text: 'Non-G Power Bottle (1.5x)',
												},
												{
													id: 'Choose a level lower for Non-G',
													text: 'Choose a level lower for Non-G',
												}, // TODO
											]}
										/>

										<Dropdown
											titleText="Charge Multiplier"
											bind:selectedId={inputChargeMultiplier}
											items={[
												{ id: 'Lv1 (0.4x / 0.7x)', text: 'Lv1 (0.4x / 0.7x)' },
												{
													id: 'Lv2 (1.0x / 0.95x) ',
													text: 'Lv2 (1.0x / 0.95x) ',
												},
												{ id: 'Lv3 (1.5x / 1.2x)', text: 'Lv3 (1.5x / 1.2x)' },
												{
													id: 'Lv4 (1.85x / 1.334x)',
													text: 'Lv4 (1.85x / 1.334x)',
												},
												{
													id: 'Sniper Lv4 (1.0x / 1.0x)',
													text: 'Sniper Lv4 (1.0x / 1.0x)',
												},
												{
													id: 'Sniper Lv5 (1.125x / 1.1x)',
													text: 'Sniper Lv5 (1.125x / 1.1x)',
												},
												{
													id: 'Uncharged Rising Shot (0.4x / 1.0x)',
													text: 'Uncharged Rising Shot (0.4x / 1.0x)',
												},
												{
													id: 'Charged Rising Shot (1.0x / 1.5x)',
													text: 'Charged Rising Shot (1.0x / 1.5x)',
												},
												{
													id: 'Crouched Lv1 (0.48x / 0.7x)',
													text: 'Crouched Lv1 (0.48x / 0.7x)',
												},
												{
													id: 'Crouched Lv2 (1.3x / 0.8x)',
													text: 'Crouched Lv2 (1.3x / 0.8x)',
												},
												{
													id: 'Crouched Lv3 (2.1x / 1.2x)',
													text: 'Crouched Lv3 (2.1x / 1.2x)',
												},
												{
													id: 'Crouched Lv4 (2.59x / 1.334x)',
													text: 'Crouched Lv4 (2.59x / 1.334x)',
												},
											]}
										/>

										<Dropdown
											titleText="Quick Shot"
											bind:selectedId={inputQuickShot}
											items={[
												{ id: 'Normal (All 1.0x)', text: 'Normal (All 1.0x)' },
												{
													id: 'Quick Shot (Lv1 1.0x / Lv2 0.85x / Lv3 0.75x / Lv4 0.65x)',
													text: 'Quick Shot (Lv1 1.0x / Lv2 0.85x / Lv3 0.75x / Lv4 0.65x)',
												}, // TODO
												{
													id: 'Normal & Quick Combined (Lv1 2.0x / Lv2 1.85x / Lv3 1.75x / Lv4 1.65x)',
													text: 'Normal & Quick Combined (Lv1 2.0x / Lv2 1.85x / Lv3 1.75x / Lv4 1.65x)',
												},
											]}
										/>
									</div>
								</div>
							{/if}
							<div class="input-section">
								<div class="small-header">🐲 Element</div>
								<div class="inputs-group-column">
									<Dropdown
										titleText="Compressed Element Shot"
										bind:selectedId={inputCompressedElementShot}
										items={[
											{ id: 'Not Compressed', text: 'Not Compressed' },
											{ id: 'Fire Shot', text: 'Fire Shot' }, // TODO
											{ id: 'Water Shot', text: 'Water Shot' },
											{ id: 'Thunder Shot', text: 'Thunder Shot' },
											{ id: 'Ice Shot', text: 'Ice Shot' },
											{ id: 'Dragon Shot', text: 'Dragon Shot' },
											{ id: 'Perfect Fire Shot', text: 'Perfect Fire Shot' },
											{ id: 'Perfect Water Shot', text: 'Perfect Water Shot' },
											{
												id: 'Perfect Thunder Shot',
												text: 'Perfect Thunder Shot',
											},
											{ id: 'Perfect Ice Shot', text: 'Perfect Ice Shot' },
											{
												id: 'Perfect Dragon Shot',
												text: 'Perfect Dragon Shot',
											},
										]}
									/>

									<div class="number-input-container">
										<NumberInput
											size="sm"
											step={10}
											min={minimumNumberValue}
											max={maximumNumberValue}
											bind:value={inputNumberCompressedElementShot}
											invalidText={invalidNumberValueText}
											label={'Compressed Element Shot'}
										/>
									</div>
									<Dropdown
										titleText="Element"
										bind:selectedId={inputElement}
										items={[
											{ id: 'None', text: 'None' },
											{ id: 'Fire', text: 'Fire (火)' }, // TODO
											{ id: 'Water', text: 'Water (水)' },
											{ id: 'Thunder', text: 'Thunder (雷)' },
											{ id: 'Ice', text: 'Ice (冰)' },
											{ id: 'Dragon', text: 'Dragon (龍)' },
											{
												id: 'Light',
												text: 'Light (光) (70% Fire, 70% Thunder)',
											},
											{
												id: 'Blaze',
												text: 'Blaze (炎) (70% Fire, 70% Dragon)',
											},
											{
												id: 'Tenshou',
												text: 'Tenshou (天翔) (30% Fire, 100% Water, 70% Thunder)',
											},
											{
												id: 'Lightning Rod',
												text: 'Lightning Rod (雷棰) (70% Thunder, 70% Dragon)',
											},
											{
												id: 'Okiko',
												text: 'Okiko (熾凍) (80% Fire, 80% Ice, 40% Dragon)',
											},
											{
												id: 'Black Flame',
												text: 'Black Flame (黑焰) (50% Fire, 150% Dragon)',
											},
											{
												id: 'Crimson Demon',
												text: 'Crimson Demon (紅魔) (50% Dragon, 150% Fire)',
											},
											{
												id: 'Dark',
												text: 'Dark (闇) (80% Ice, 80% Dragon)',
											},
											{
												id: 'Music',
												text: 'Music (奏) (100% Water, 100% Ice)',
											},
											{
												id: 'Sound',
												text: 'Sound (響) (100% Water, 100% Dragon)',
											},
											{
												id: 'Wind',
												text: 'Wind (風) (80% Thunder, 80% Ice)',
											},
											{
												id: 'Burning Zero',
												text: 'Burning Zero (灼零) (125% Fire, 125% Ice)',
											},
											{
												id: "Emperor's Roar",
												text: "Emperor's Roar (皇鳴) (150% Thunder, 50% Dragon)",
											},
										]}
									/>

									<div class="number-input-container">
										<NumberInput
											size="sm"
											step={10}
											min={minimumNumberValue}
											max={maximumNumberValue}
											bind:value={inputNumberElementalValueReplacement}
											invalidText={invalidNumberValueText}
											label={'Element'}
										/>
									</div>
									<div class="number-input-container">
										<NumberInput
											size="sm"
											step={10}
											min={minimumNumberValue}
											max={maximumNumberValue}
											bind:value={inputNumberSigil1Element}
											invalidText={invalidNumberValueText}
											label={'Sigil 1 Element'}
										/>
									</div>
									<div class="number-input-container">
										<NumberInput
											size="sm"
											step={10}
											min={minimumNumberValue}
											max={maximumNumberValue}
											bind:value={inputNumberSigil2Element}
											invalidText={invalidNumberValueText}
											label={'Sigil 2 Element'}
										/>
									</div>
									<div class="number-input-container">
										<NumberInput
											size="sm"
											step={10}
											min={minimumNumberValue}
											max={maximumNumberValue}
											bind:value={inputNumberSigil3Element}
											invalidText={invalidNumberValueText}
											label={'Sigil 3 Element'}
										/>
									</div>
									<div class="number-input-container">
										<NumberInput
											size="sm"
											step={10}
											min={minimumNumberValue}
											max={maximumNumberValue}
											bind:value={inputNumberZenithElementSigil}
											invalidText={invalidNumberValueText}
											label={'Zenith Element Sigil'}
										/>
									</div>
									<div class="number-input-container">
										<NumberInput
											size="sm"
											step={10}
											min={minimumNumberValue}
											max={maximumNumberValue}
											bind:value={inputNumberAOEElementSigil}
											invalidText={invalidNumberValueText}
											label={'AoE Element Sigil'}
										/>
									</div>

									<Dropdown
										titleText="AoE Element Sigil"
										bind:selectedId={inputAoeElementSigil}
										items={[
											{ id: 'None', text: 'None' },
											{ id: '1 Sigil', text: '1 Sigil' },
											{ id: '2 Sigils', text: '2 Sigils' },
											{ id: '3 Sigils', text: '3 Sigils' },
											{ id: '4 Sigils', text: '4 Sigils' }, // TODO
										]}
									/>

									<Dropdown
										titleText="Weapon Multipliers"
										bind:selectedId={inputWeaponElementMultipliers}
										items={[
											{ id: 'None (1x)', text: 'None (1x)' },
											{
												id: 'Swaxe Sword Mode Elemental Phial (1.3x)',
												text: 'Swaxe Sword Mode Elemental Phial (1.3x)',
											},
											{
												id: 'Maxed Transcend (2.0x)',
												text: 'Maxed Transcend (2.0x)',
											},
											{
												id: 'Swaxe Ele Phial & Maxed Transcend (2.6x)',
												text: 'Swaxe Ele Phial & Maxed Transcend (2.6x)',
											},
										]}
									/>
								</div>
							</div>
							<div class="input-section">
								<div class="small-header">💤 Status</div>
								<div class="inputs-group-column">
									<Dropdown
										titleText="Status"
										bind:selectedId={inputStatus}
										items={[
											{ id: 'None', text: 'None' },
											{ id: 'Poison', text: 'Poison' },
											{ id: 'Paralysis', text: 'Paralysis' }, // TODO
										]}
									/>

									<div class="number-input-container">
										<NumberInput
											size="sm"
											step={10}
											min={minimumNumberValue}
											max={maximumNumberValue}
											bind:value={inputNumberStatusValue}
											invalidText={invalidNumberValueText}
											label={'Status'}
										/>
									</div>
								</div>
							</div>
							<div class="input-section">
								<div class="small-header">🎲 Other</div>
								<div class="inputs-group-column">
									<div class="number-input-container">
										<NumberInput
											size="sm"
											step={10}
											min={minimumNumberValue}
											max={maximumNumberValue}
											bind:value={inputNumberOtherAdditional}
											invalidText={invalidNumberValueText}
											label={'Additional'}
										/>
									</div>
								</div>
							</div>
						</div>
					</div>

					<div class="inputs-3">
						<div class="input-sections-container">
							<div class="input-section">
								<div class="small-header">🐉 Monster</div>
								<div class="inputs-group-column">
									<div class="number-input-container">
										<NumberInput
											size="sm"
											step={10}
											min={minimumNumberValue}
											max={maximumNumberValue}
											bind:value={inputNumberDefenseRate}
											invalidText={invalidNumberValueText}
											label={'Defense Rate'}
										/>
									</div>
									<div class="number-input-container">
										<NumberInput
											size="sm"
											step={10}
											min={minimumNumberValue}
											max={maximumNumberValue}
											bind:value={inputNumberMonsterRage}
											invalidText={invalidNumberValueText}
											label={'Rage Modifier'}
										/>
									</div>
									<div class="number-input-container">
										<NumberInput
											size="sm"
											step={10}
											min={minimumNumberValue}
											max={maximumNumberValue}
											bind:value={inputNumberHCModifiers}
											invalidText={invalidNumberValueText}
											label={'Hardcore Modifier'}
										/>
									</div>
									<div class="number-input-container">
										<NumberInput
											size="sm"
											step={10}
											min={minimumNumberValue}
											max={maximumNumberValue}
											bind:value={inputNumberRawHitzone}
											invalidText={invalidNumberValueText}
											label={'Raw Hitzone'}
										/>
									</div>
									<div class="number-input-container">
										<NumberInput
											size="sm"
											step={10}
											min={minimumNumberValue}
											max={maximumNumberValue}
											bind:value={inputNumberFireHitzone}
											invalidText={invalidNumberValueText}
											label={'Fire Hitzone'}
										/>
									</div>
									<div class="number-input-container">
										<NumberInput
											size="sm"
											step={10}
											min={minimumNumberValue}
											max={maximumNumberValue}
											bind:value={inputNumberWaterHitzone}
											invalidText={invalidNumberValueText}
											label={'Water Hitzone'}
										/>
									</div>
									<div class="number-input-container">
										<NumberInput
											size="sm"
											step={10}
											min={minimumNumberValue}
											max={maximumNumberValue}
											bind:value={inputNumberThunderHitzone}
											invalidText={invalidNumberValueText}
											label={'Thunder Hitzone'}
										/>
									</div>
									<div class="number-input-container">
										<NumberInput
											size="sm"
											step={10}
											min={minimumNumberValue}
											max={maximumNumberValue}
											bind:value={inputNumberIceHitzone}
											invalidText={invalidNumberValueText}
											label={'Ice Hitzone'}
										/>
									</div>
									<div class="number-input-container">
										<NumberInput
											size="sm"
											step={10}
											min={minimumNumberValue}
											max={maximumNumberValue}
											bind:value={inputNumberDragonHitzone}
											invalidText={invalidNumberValueText}
											label={'Dragon Hitzone'}
										/>
									</div>

									<Dropdown
										titleText="Monster Status"
										bind:selectedId={inputMonsterStatus}
										items={[
											{ id: 'None (1x)', text: 'None (1x)' },
											{ id: 'Paralysed (1.1x)', text: 'Paralysed (1.1x)' },
											{ id: 'Sleeping (3.0x)', text: 'Sleeping (3.0x)' },
										]}
									/>
								</div>
							</div>
							<div class="input-section">
								<div class="small-header">🛡️ Hitzone Value Modifiers</div>
								<div class="inputs-group-column">
									<Dropdown
										titleText="Thunder Clad"
										bind:selectedId={inputThunderClad}
										items={[
											{ id: 'None', text: 'None' },
											{
												id: 'Active (+5 on raw hitzones)',
												text: 'Active (+5 on raw hitzones)',
											},
										]}
									/>

									<Dropdown
										titleText="Exploit Weakness"
										bind:selectedId={inputExploitWeakness}
										items={[
											{ id: 'None', text: 'None' },
											{
												id: 'Exploit Weakness (+5 on 35+ raw hitzones)',
												text: 'Exploit Weakness (+5 on 35+ raw hitzones)',
											},
											{
												id: 'Determination (+5 on raw hitzones)',
												text: 'Determination (+5 on raw hitzones)',
											},
											{
												id: 'ZZ Exploit Weakness (+5 on 30+ raw hitzones)',
												text: 'ZZ Exploit Weakness (+5 on 30+ raw hitzones)',
											},
										]}
									/>

									<Dropdown
										titleText="Point Breakthrough"
										bind:selectedId={inputPointBreakthrough}
										items={[
											{ id: 'None', text: 'None' },
											{
												id: 'Active (+5 Raw Hitzones)',
												text: 'Active (+5 Raw Hitzones)',
											},
											{
												id: 'Raviente (+2 Raw Hitzones)',
												text: 'Raviente (+2 Raw Hitzones)',
											},
										]}
									/>

									<Dropdown
										titleText="Acid Shots"
										bind:selectedId={inputAcidShots}
										items={[
											{ id: 'None', text: 'None' },
											{
												id: 'Raw Acid (+10 raw hitzones)',
												text: 'Raw Acid (+10 raw hitzones)',
											},
										]}
									/>

									<Dropdown
										titleText="Elemental Exploiter"
										bind:selectedId={inputElementalExploiter}
										items={[
											{ id: 'None', text: 'None' },
											{
												id: 'Elemental Exploit (+X to 20+ ele hitzones)',
												text: 'Elemental Exploit (+X to 20+ ele hitzones)',
											},
											{
												id: 'Dissolver Up (+X to 15+ ele hitzones)',
												text: 'Dissolver Up (+X to 15+ ele hitzones)',
											},
											{
												id: 'Determination (+X to ele hitzones)',
												text: 'Determination (+X to ele hitzones)',
											},
										]}
									/>

									<Dropdown
										titleText="Hunting Horn Debuff"
										bind:selectedId={inputHuntingHornDebuff}
										items={[
											{ id: 'None', text: 'None' },
											{
												id: 'Raw Weakness (+2 on Raw Hitzones)',
												text: 'Raw Weakness (+2 on Raw Hitzones)',
											},
											{
												id: 'Elemental Weakness (+4 on all Elemental Hitzones)',
												text: 'Elemental Weakness (+4 on all Elemental Hitzones)',
											},
											{
												id: 'Both (+4 on Elemental, +2 on Raw)',
												text: 'Both (+4 on Elemental, +2 on Raw)',
											},
										]}
									/>

									<Dropdown
										titleText="Precision / Sniper / Crit S."
										bind:selectedId={inputPrecisionSniperCritS}
										items={[
											{ id: 'None', text: 'None' },
											{
												id: 'In Crit Distance (+5 on raw hitzones)',
												text: 'In Crit Distance (+5 on raw hitzones)',
											},
										]}
									/>
								</div>
							</div>
							<div class="input-section">
								<div class="small-header">❔ Other</div>
								<div class="inputs-group-column">
									<Dropdown
										titleText="Absolute Defense"
										bind:selectedId={inputAbsoluteDefense}
										items={[
											{ id: 'Active (1.0x)', text: 'Active (1.0x)' },
											{ id: 'Downtime (0.8x)', text: 'Downtime (0.8x)' },
										]}
									/>

									<Dropdown
										titleText="Premium Boost"
										bind:selectedId={inputPremiumBoost}
										items={[
											{ id: 'Inactive (1x)', text: 'Inactive (1x)' },
											{ id: 'Active (1.25x)', text: 'Active (1.25x)' },
										]}
									/>
								</div>
							</div>
						</div>
					</div>
				</div>
				<div class="calculator-results">
					<div class="stats-header">
						Internal Values and Final Displayed Attack
					</div>
					<div class="stats-values">
						<div class="fire">
							<InlineTooltip
								icon={ElementIcons.find((e) => e.name === 'Fire')?.icon}
								text={'Fire'}
								tooltip={'Element'}
							/>: {internalFire}
						</div>
						<div class="water">
							<InlineTooltip
								icon={ElementIcons.find((e) => e.name === 'Water')?.icon}
								text={'Water'}
								tooltip={'Element'}
							/>: {internalWater}
						</div>
						<div class="ice">
							<InlineTooltip
								icon={ElementIcons.find((e) => e.name === 'Ice')?.icon}
								text={'Ice'}
								tooltip={'Element'}
							/>: {internalIce}
						</div>
						<div class="thunder">
							<InlineTooltip
								icon={ElementIcons.find((e) => e.name === 'Thunder')?.icon}
								text={'Thunder'}
								tooltip={'Element'}
							/>: {internalThunder}
						</div>
						<div class="dragon">
							<InlineTooltip
								icon={ElementIcons.find((e) => e.name === 'Dragon')?.icon}
								text={'Dragon'}
								tooltip={'Element'}
							/>: {internalDragon}
						</div>
						<div class="total-attack">
							⚔️ True Raw: {internalTrueRawDisplay} ({internalTrueRaw})
						</div>
						<div class="my-missions">
							🎫 My Missions: {internalMissionsNeeded}
						</div>
						<div class="status">
							<InlineTooltip
								icon={inputStatusIcon}
								text={inputStatus === 'None' ? 'Status' : inputStatus}
								tooltip={'Status'}
							/>:
							{internalStatus}
						</div>
						<div class="attack-ceiling">
							⚓ Attack Ceiling: {internalAttackCeiling}
						</div>
						<div class="attack">🗡️ Attack: {internalAttack}</div>
						<div class="affinity">✨ Affinity: {internalAffinity}%</div>
					</div>
				</div>
			</div>
		</section>
		<!--TODO animations-->
		<section>
			<SectionHeading level={2} title="Weapon Motion Values" />

			<div class="motion-values toc-exclude">
				<DataTable
					sortable
					zebra
					size="short"
					useStaticWidth
					headers={[
						{ key: 'name', value: 'Name', minWidth: '2rem' },
						{ key: 'motion', value: 'Motion Value', minWidth: '8rem' },
						{ key: 'raw', value: 'Raw', minWidth: '1rem' },
						{ key: 'element', value: 'Element', minWidth: '1rem' },
						{ key: 'total', value: 'Total', minWidth: '1rem' },
						{ key: 'fire', value: '🔥', minWidth: '1rem' },
						{ key: 'water', value: '💧', minWidth: '1rem' },
						{ key: 'thunder', value: '⚡', minWidth: '1rem' },
						{ key: 'ice', value: '❄️', minWidth: '1rem' },
						{ key: 'dragon', value: '🐲', minWidth: '1rem' },
						{ key: 'additional', value: 'Additional', minWidth: '1rem' },
					]}
					rows={weaponSections}
				>
					<Toolbar
						><div class="toolbar">
							<Dropdown
								titleText="Weapon Motion Values Section"
								bind:selectedId={inputWeaponMotionValuesSection}
								items={weaponSectionNames}
							/>
							<Button
								icon={Restart}
								kind="ghost"
								iconDescription="Refresh"
								on:click={(e) =>
									(weaponSections = getWeaponSectionMotionValues(
										inputWeaponType,
										inputWeaponMotionValuesSection,
									))}
							/>
							<CopyButton
								iconDescription={'Copy as CSV'}
								text={getCSVFromArray(weaponSections)}
							/>
						</div>
					</Toolbar>
					<span slot="title">
						<div class="data-table-title">
							<div class="weapon-icon">
								<svelte:component this={weaponIcon} {...weaponIconProps} />
							</div>
							<div>{inputWeaponType} Motion Values</div>
						</div>
					</span>
					<svelte:fragment slot="cell" let:cell>
						{#if cell.key === 'name' && hasAnimation(inputWeaponType, cell, inputWeaponMotionValuesSection)}
							<Button
								on:click={() =>
									changeModal(cell, inputWeaponMotionValuesSection)}
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
		</section>
	</section>

	<section>
		<SectionHeading level={2} title="Shared Motion Values" />
		<div class="motion-values toc-exclude">
			<DataTable
				sortable
				zebra
				size="short"
				useStaticWidth
				headers={[
					{ key: 'name', value: 'Name', minWidth: '2rem' },
					{ key: 'motion', value: 'Motion Value', minWidth: '8rem' },
					{ key: 'raw', value: 'Raw', minWidth: '1rem' },
					{ key: 'element', value: 'Element', minWidth: '1rem' },
					{ key: 'total', value: 'Total', minWidth: '1rem' },
					{ key: 'fire', value: '🔥', minWidth: '1rem' },
					{ key: 'water', value: '💧', minWidth: '1rem' },
					{ key: 'thunder', value: '⚡', minWidth: '1rem' },
					{ key: 'ice', value: '❄️', minWidth: '1rem' },
					{ key: 'dragon', value: '🐲', minWidth: '1rem' },
					{ key: 'additional', value: 'Additional', minWidth: '1rem' },
				]}
				rows={sharedMotionValues}
				><Toolbar
					><div class="toolbar">
						<CopyButton
							iconDescription={'Copy as CSV'}
							text={getCSVFromArray(sharedMotionValues)}
						/>
					</div>
				</Toolbar>
				<svelte:fragment slot="cell" let:cell>
					{#if cell.key === 'name' && hasAnimation(inputWeaponType, cell, 'Shared')}
						<Button
							on:click={() => changeModal(cell, 'Shared')}
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
	</section>

	<section>
		<SectionHeading level={2} title="Formulas" />
		<p>
			Below are the formulas for the above damage calculator. Your current
			inputs values are reflected below each formula.
		</p>
		<section>
			<SectionHeading title={'Internal True Raw'} level={3} />
			{@html formulaInternalTrueRaw}
			<p>maxTrueRaw: {maxTrueRaw}</p>
			<p>outputAttackCeiling: {outputAttackCeiling}</p>
			<p>outputFlatAdditions: {outputFlatAdditions}</p>
			<p>outputMultipliers: {outputMultipliers}</p>
		</section>
		<section>
			<SectionHeading title={'Attack A'} level={3} />
			{@html formulaOutputAttackA}
			{@html display(formulaValuesOutputAttackA)}
		</section>
		<section>
			<SectionHeading title={'Attack B'} level={3} />
			{@html formulaOutputAttackB}
			{@html display(formulaValuesOutputAttackB)}
		</section>
		<section>
			<SectionHeading title={'Multipliers'} level={3} />
			{@html formulaOutputMultipliers}
			{@html display(formulaValuesOutputMultipliers)}
		</section>
		<section>
			<SectionHeading title={'Flat Additions'} level={3} />
			{@html formulaOutputFlatAdditions}
			{@html display(formulaValuesOutputFlatAdditions)}
		</section>
		<section>
			<SectionHeading title={'Internal Attack'} level={3} />
			{@html formulaInternalAttack}
			{@html display(formulaValuesOutputInternalAttack)}
		</section>
		<section>
			<SectionHeading title={'Internal Fire'} level={3} />
			{@html formulaInternalFire}
			{@html display(formulaValuesInternalFire)}
		</section>
		<section>
			<SectionHeading title={'Internal Water'} level={3} />
			{@html formulaInternalWater}
			{@html display(formulaValuesInternalWater)}
		</section>
		<section>
			<SectionHeading title={'Internal Thunder'} level={3} />
			{@html formulaInternalThunder}
			{@html display(formulaValuesInternalThunder)}
		</section>
		<section>
			<SectionHeading title={'Internal Ice'} level={3} />
			{@html formulaInternalIce}
			{@html display(formulaValuesInternalIce)}
		</section>
		<section>
			<SectionHeading title={'Internal Dragon'} level={3} />
			{@html formulaInternalDragon}
			{@html display(formulaValuesInternalDragon)}
		</section>
		<section>
			<SectionHeading title={'Internal Status'} level={3} />
			{@html formulaInternalStatus}
			{@html display(formulaValuesInternalStatus)}
		</section>
		<section>
			<SectionHeading title={'Internal Affinity'} level={3} />
			<p>Averaged, max 100, minimum 0.</p>
			{@html formulaInternalAffinity}
			{@html display(formulaValuesInternalAffinity)}
		</section>
		<section>
			<SectionHeading title={'Total Affinity'} level={3} />
			{@html formulaOutputTotalAffinity}
			{@html display(formulaValuesOutputTotalAffinity)}
		</section>
		<section>
			<SectionHeading title={'Drug Knowlege Total Multiplier'} level={3} />
			{@html formulaOutputDrugKnowledgeMultiplierTotal}
			{@html display(formulaValuesOutputDrugKnowledgeMultiplierTotal)}
		</section>
		<section>
			<SectionHeading title={'Crit Value'} level={3} />
			{@html formulaOutputCritValue}
			{@html display(formulaValuesOutputCritValue)}
		</section>
		<section>
			<SectionHeading title={'Other Multipliers'} level={3} />
			{@html formulaOutputOtherMultipliers}
			{@html display(formulaValuesOutputOtherMultipliers)}
		</section>
		<section>
			<SectionHeading title={'Status Assault Total'} level={3} />
			{@html formulaOutputStatusUsedSA}
			{@html display(formulaValuesOutputStatusUsedSA)}
		</section>
		<section>
			<SectionHeading title={'Monster Total Defense'} level={3} />
			{@html formulaOutputMonsterTotalDefense}
			{@html display(formulaValuesOutputMonsterTotalDefense)}
		</section>
	</section>

	<section>
		<SectionHeading level={2} title="Gunlance Shells and Wyvernfire" />
		<div></div>
	</section>

	<section>
		<SectionHeading level={2} title="Ice Age" />
		<div class="ice-age-section">
			<div class="ice-age-descriptions">
				<p class="ice-age-description-1">
					Upon hitting a monster (can be dead), the hunter becomes enveloped in
					an icy aura, which inflicts damage on all nearby monsters while
					providing extra skills. This aura progresses through three stages as
					you deal more hits to a monster. Additionally, it bestows <InlineTooltip
						text="Stamina Recovery Up"
						tooltip="Armor Skill"
						icon={getTag('Armor Skill').icon}
					/> and <InlineTooltip
						text="Razor Sharp"
						tooltip="Armor Skill"
						icon={getTag('Armor Skill').icon}
					/> to all hunters within its range, with the wielder also gaining <InlineTooltip
						text="Winter General"
						tooltip="Armor Skill"
						icon={getTag('Armor Skill').icon}
					/>. Damage occurs in fixed intervals of one second rather than
					gradually over time.
				</p>
				<div class="ice-age-description-2">
					<p>
						Typically, damage output ranges between 800 to 1600 per minute,
						contingent on the level, surpassing the poison output for most G
						Rank monsters. Within a group of four hunters equipped with <InlineTooltip
							text="Ice Age"
							tooltip="Armor Skill"
							icon={getTag('Armor Skill').icon}
						/>, the damage stacks and thus escalates from 800-1600 (1p) to
						3200-6400 (4p).
					</p>
				</div>
				<p>
					Ice Age's attack power only comes from SR, sigils, weapon base attack
					and G Rank armor bonus. The following buffs are ignored: items (e.g
					Seeds, Hunter Powertalon, etc.), meals (e.g. bento, guild food),
					skills (e.g. Adrenaline, Solid Determination). Buffs that affect
					weapon base attack like Drug Knowledge does count.
				</p>
				<p class="spaced-paragraph">
					Ice Age's required hits can be reached faster with <InlineTooltip
						text="Fencing+2"
						tooltip="Armor Skill"
						icon={getTag('Armor Skill').icon}
					/>.
				</p>
			</div>
			<div class="ice-age-tables-container">
				<div class="ice-age-table-hits toc-exclude">
					<DataTable
						sortable
						zebra
						size="medium"
						headers={[
							{
								key: 'weapon',
								value: 'Weapon',
								minWidth: '12rem',
							},
							{ key: 'stage1', value: 'Stage 1', minWidth: '1rem' },
							{ key: 'stage2', value: 'Stage 2', minWidth: '1rem' },
							{
								key: 'stage3',
								value: 'Stage 3',
								minWidth: '1rem',
							},
						]}
						rows={[
							{
								id: 'gs',
								weapon: 'Great Sword',
								stage1: '1',
								stage2: '8',
								stage3: '17',
							},
							{
								id: 'ha',
								weapon: 'Hammer',
								stage1: '1',
								stage2: '9',
								stage3: '21',
							},
							{
								id: 'hh',
								weapon: 'Hunting Horn',
								stage1: '1',
								stage2: '9',
								stage3: '21',
							},
							{
								id: 'la',
								weapon: 'Lance',
								stage1: '1',
								stage2: '12',
								stage3: '26',
							},
							{
								id: 'gl',
								weapon: 'Gunlance',
								stage1: '1',
								stage2: '12',
								stage3: '26',
							},
							{
								id: 'ls',
								weapon: 'Long Sword',
								stage1: '1',
								stage2: '12',
								stage3: '26',
							},
							{
								id: 'saf',
								weapon: 'Switch Axe F',
								stage1: '1',
								stage2: '12',
								stage3: '26',
							},
							{
								id: 'hbg',
								weapon: 'Heavy Bowgun',
								stage1: '1',
								stage2: '12',
								stage3: '26',
							},

							{
								id: 'to',
								weapon: 'Tonfa',
								stage1: '1',
								stage2: '17',
								stage3: '38',
							},
							{
								id: 'lbg',
								weapon: 'Light Bowgun',
								stage1: '1',
								stage2: '17',
								stage3: '38',
							},
							{
								id: 'bow',
								weapon: 'Bow',
								stage1: '1',
								stage2: '17',
								stage3: '38',
							},
							{
								id: 'sns',
								weapon: 'Sword and Shield',
								stage1: '1',
								stage2: '17',
								stage3: '38',
							},
							{
								id: 'ds',
								weapon: 'Dual Swords',
								stage1: '1',
								stage2: '32',
								stage3: '75',
							},
							{
								id: 'ms',
								weapon: 'Magnet Spike',
								stage1: '1',
								stage2: '10',
								stage3: '22',
							},
						]}
						><Toolbar
							><div class="toolbar">
								<CopyButton
									iconDescription={'Copy as CSV'}
									text={getCSVFromArray([
										{
											id: 'gs',
											weapon: 'Great Sword',
											stage1: '1',
											stage2: '8',
											stage3: '17',
										},
										{
											id: 'ha',
											weapon: 'Hammer',
											stage1: '1',
											stage2: '9',
											stage3: '21',
										},
										{
											id: 'hh',
											weapon: 'Hunting Horn',
											stage1: '1',
											stage2: '9',
											stage3: '21',
										},
										{
											id: 'la',
											weapon: 'Lance',
											stage1: '1',
											stage2: '12',
											stage3: '26',
										},
										{
											id: 'gl',
											weapon: 'Gunlance',
											stage1: '1',
											stage2: '12',
											stage3: '26',
										},
										{
											id: 'ls',
											weapon: 'Long Sword',
											stage1: '1',
											stage2: '12',
											stage3: '26',
										},
										{
											id: 'saf',
											weapon: 'Switch Axe F',
											stage1: '1',
											stage2: '12',
											stage3: '26',
										},
										{
											id: 'hbg',
											weapon: 'Heavy Bowgun',
											stage1: '1',
											stage2: '12',
											stage3: '26',
										},

										{
											id: 'to',
											weapon: 'Tonfa',
											stage1: '1',
											stage2: '17',
											stage3: '38',
										},
										{
											id: 'lbg',
											weapon: 'Light Bowgun',
											stage1: '1',
											stage2: '17',
											stage3: '38',
										},
										{
											id: 'bow',
											weapon: 'Bow',
											stage1: '1',
											stage2: '17',
											stage3: '38',
										},
										{
											id: 'sns',
											weapon: 'Sword and Shield',
											stage1: '1',
											stage2: '17',
											stage3: '38',
										},
										{
											id: 'ds',
											weapon: 'Dual Swords',
											stage1: '1',
											stage2: '32',
											stage3: '75',
										},
										{
											id: 'ms',
											weapon: 'Magnet Spike',
											stage1: '1',
											stage2: 'Unknown',
											stage3: 'Unknown',
										},
									])}
								/>
							</div>
						</Toolbar>
						<span slot="title">
							<div class="data-table-title">
								<div>Ice Age Required Hits</div>
							</div>
						</span>
						<svelte:fragment slot="cell" let:cell>
							{#if cell.key === 'weapon'}
								<InlineTooltip
									icon={getWeaponIcon(cell.value)}
									text={cell.value}
									tooltip="Weapon"
								/>
							{:else}
								<p>{cell.value}</p>
							{/if}
						</svelte:fragment>
					</DataTable>
				</div>
				<div class="ice-age-table-stages toc-exclude">
					<DataTable
						sortable
						zebra
						size="short"
						headers={[
							{ key: 'stage', value: 'Stage', minWidth: '1rem' },
							{ key: 'formula', value: 'DPS Formula', minWidth: '8rem' },
							{ key: 'duration', value: 'Duration', minWidth: '1rem' },
							{
								key: 'downgradeDuration',
								value: 'Downgrade Duration',
								minWidth: '1rem',
							},
						]}
						rows={[
							{
								id: '1',
								stage: '1',
								formula: '0.042 x True Raw x DefRate',
								duration: '11-18s',
								downgradeDuration: '7s',
							},
							{
								id: '2',
								stage: '2',
								formula: '0.098 x True Raw x DefRate',
								duration: '15-25s',
								downgradeDuration: '10s',
							},
							{
								id: '3',
								stage: '3',
								formula: '0.14 x True Raw x DefRate',
								duration: '6-9s',
								downgradeDuration: '-',
							},
						]}
						><Toolbar
							><div class="toolbar">
								<CopyButton
									iconDescription={'Copy as CSV'}
									text={getCSVFromArray([
										{
											id: '1',
											stage: '1',
											formula: '0.042 x True Raw x DefRate',
											duration: '11-18s',
											downgradeDuration: '7s',
										},
										{
											id: '2',
											stage: '2',
											formula: '0.098 x True Raw x DefRate',
											duration: '15-25s',
											downgradeDuration: '10s',
										},
										{
											id: '3',
											stage: '3',
											formula: '0.14 x True Raw x DefRate',
											duration: '6-9s',
											downgradeDuration: '-',
										},
									])}
								/>
							</div>
						</Toolbar>
						<span slot="title">
							<div class="data-table-title">
								<div>Ice Age Stages</div>
							</div>
						</span>
						<svelte:fragment slot="cell" let:cell>
							{#if cell.key === 'stage'}
								<Button
									on:click={() => changeModal(cell, 'Ice Age Stages')}
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

			<div class="ice-age-formula">
				<p>Formula:</p>
				{@html formulaIceAgeDamagePerSecond}
				{@html display(formulaValuesIceAgeDamagePerSecond)}
			</div>
			<div class="ice-age-calculator">
				<div>
					<NumberInput
						size="sm"
						step={10}
						min={minimumNumberValue}
						max={maximumNumberValue}
						bind:value={inputNumberIceAgeCalculatorWeaponTrueRaw}
						invalidText={'Invalid value'}
						label={'Weapon Base True Raw'}
					/>
				</div>
				<div>
					<NumberInput
						size="sm"
						step={1}
						min={0}
						max={45}
						bind:value={inputNumberIceAgeCalculatorSigil1TrueRaw}
						invalidText={'Invalid value'}
						label={'Sigil 1 True Raw'}
					/>
				</div>
				<div>
					<NumberInput
						size="sm"
						step={1}
						min={0}
						max={45}
						bind:value={inputNumberIceAgeCalculatorSigil2TrueRaw}
						invalidText={'Invalid value'}
						label={'Sigil 2 True Raw'}
					/>
				</div>
				<div>
					<NumberInput
						size="sm"
						step={1}
						min={0}
						max={45}
						bind:value={inputNumberIceAgeCalculatorSigil3TrueRaw}
						invalidText={'Invalid value'}
						label={'Sigil 3 True Raw'}
					/>
				</div>
				<div>
					<NumberInput
						size="sm"
						step={1}
						min={0}
						max={15}
						bind:value={inputNumberIceAgeCalculatorUnlimitedSigilTrueRaw}
						invalidText={'Invalid value'}
						label={'Unlimited Sigil True Raw'}
					/>
				</div>
				<div>
					<NumberInput
						size="sm"
						step={1}
						min={0}
						max={15}
						bind:value={inputNumberIceAgeCalculatorZenithSigil}
						invalidText={'Invalid value'}
						label={'Zenith Sigil Attack'}
					/>
				</div>
				<div>
					<NumberInput
						size="sm"
						step={1}
						min={0}
						max={15}
						bind:value={inputNumberIceAgeCalculatorAOESigil}
						invalidText={'Invalid value'}
						label={'AOE Sigil Attack'}
					/>
				</div>
				<div>
					<Dropdown
						titleText="AOE Attack Sigil Hunters"
						bind:selectedId={inputIceAgeCalculatorAOESigilHunters}
						items={[
							{ id: '1', text: '1 Hunter' },
							{ id: '2', text: '2 Hunters' },
							{ id: '3', text: '3 Hunters' },
							{ id: '4', text: '4 Hunters' },
						]}
					/>
				</div>
				<div>
					<NumberInput
						size="sm"
						step={10}
						min={minimumNumberValue}
						max={maximumNumberValue}
						bind:value={inputNumberIceAgeCalculatorSRTrueRaw}
						invalidText={invalidNumberValueText}
						label={'SR True Raw'}
					/>
				</div>
				<div>
					<Dropdown
						titleText="G Armor Pieces"
						bind:selectedId={inputIceAgeCalculatorGRankArmorTrueRaw}
						items={[
							{ id: 'None', text: 'None' },
							{
								id: '3+ G Rank Pieces (+30)',
								text: '3+ G Rank Pieces (+30)',
							},
						]}
					/>
				</div>
				<div>
					<NumberInput
						size="sm"
						step={10}
						min={minimumNumberValue}
						max={maximumNumberValue}
						bind:value={inputNumberIceAgeCalculatorSecondsElapsed}
						invalidText={invalidNumberValueText}
						label={'Seconds Elapsed'}
					/>
				</div>
				<div>
					<NumberInput
						size="sm"
						step={0.01}
						min={0.0001}
						max={10}
						bind:value={inputNumberIceAgeCalculatorMonsterDefenseRate}
						invalidText={'Invalid value'}
						label={'Monster Defense Rate'}
					/>
				</div>
				<div>
					<NumberInput
						size="sm"
						step={100}
						min={1}
						max={maximumNumberValue}
						bind:value={inputNumberIceAgeCalculatorMonsterTrueHP}
						invalidText={'Invalid value'}
						label={'Monster True HP'}
					/>
				</div>
				<div>
					<Dropdown
						titleText="Ice Age Stage"
						bind:selectedId={inputIceAgeCalculatorStage}
						items={[
							{ id: 'Stage 1', text: 'Stage 1' },
							{ id: 'Stage 2', text: 'Stage 2' },
							{ id: 'Stage 3', text: 'Stage 3' },
						]}
					/>
				</div>
				<div>
					<Dropdown
						titleText="Ice Age Hunters"
						bind:selectedId={inputIceAgeCalculatorHunters}
						items={[
							{ id: '1', text: '1 Hunter' },
							{ id: '2', text: '2 Hunters' },
							{ id: '3', text: '3 Hunters' },
							{ id: '4', text: '4 Hunters' },
						]}
					/>
				</div>
				<p>
					Seconds needed: {iceAgeCalculatorSecondsNeeded}
				</p>
				<p>
					Max HP% Dealt: {iceAgeCalculatorMaxHPPercentDealt}
				</p>
				<p>
					Total Damage: {iceAgeCalculatorTotalDamage} ({iceAgeCalculatorDamagePerSecond}
					DPS)
				</p>
			</div>
		</div>
	</section>
	<section>
		<SectionHeading level={2} title="Crit Conversion" />
		<p>
			Adds 30% affinity and converts any excess affinity past 100% into extra
			true raw.
		</p>
		<p>Formula:</p>
		{@html formulaFlashConversion}
		<div>
			{#if flashConversionChartLoaded}
				<svelte:component
					this={flashConversionChart}
					data={flashConversionChartData}
					options={flashConversionChartOptions}
				/>
			{:else}
				<Loading withOverlay={false} />
			{/if}
		</div>
	</section>
	<section>
		<SectionHeading level={2} title="Point Breakthrough" />
		<div></div>
	</section>
	<section>
		<SectionHeading level={2} title="Ceaseless" />
		<div></div>
	</section>
	<section>
		<SectionHeading level={2} title="Status Assault" />
		<div></div>
	</section>
	<section>
		<SectionHeading level={2} title="Rush" />
		<div></div>
	</section>
	<section>
		<SectionHeading level={2} title="Stylish" />
		<div></div>
	</section>
	<section>
		<SectionHeading level={2} title="Combos" />
		<div></div>
	</section>

	<section>
		<SectionHeading level={2} title="Sigils" />
		<div></div>
	</section>

	<section>
		<SectionHeading level={2} title="Critical Distance" />
		<div>
			<section>
				<SectionHeading level={3} title="Bowguns" />
				<div>
					<p>
						Critical Distance is indicated by the shot expanding fully and
						creating a circle indicator.
					</p>
					<p class="spaced-paragraph">
						<InlineTooltip
							text="Heavy Bowgun"
							icon={WeaponTypes.find((e) => e.name === 'Heavy Bowgun')?.icon}
							tooltip="Weapon Type"
						/> has a much larger impact animation while in the first half of critical
						distance on standard shots making it easier to see when you are properly
						spaced. This adds an extra 0.3x multiplier to damage in that zone (e.g.
						2.0 in first half of Normal Shot range, 2.3x with an Origin or Zenith
						Piece and G Rank Weapon, etc.)
					</p>
					<div>
						<Dropdown
							titleText="Ammo Type"
							bind:selectedId={criticalDistanceAmmoTypeForChart}
							items={criticalDistanceChartDropdownOptions}
						/>
					</div>
					<div>
						{#if criticalDistanceChartLoaded}
							<svelte:component
								this={criticalDistanceChart}
								data={criticalDistanceChartData}
								options={criticalDistanceChartOptions}
							/>
						{:else}
							<Loading withOverlay={false} />
						{/if}
					</div>
				</div>
			</section>
			<section>
				<SectionHeading level={3} title="Bow" />
				<div>
					<p class="spaced-paragraph">
						Holding down the aim button/key will show a rough indication of
						Critical Distance and hits within critical distance will do a large
						flash while those outside of it will do a small flash.
					</p>
					<div>
						<DataTable
							sortable
							useStaticWidth
							zebra
							size="medium"
							headers={[
								{ key: 'shot', value: 'Shot Type', minWidth: '1rem' },
								{ key: 'backhops', value: 'Backhops', minWidth: '1rem' },
								{ key: 'rolls', value: 'Rolls', minWidth: '1rem' },
							]}
							rows={[
								{
									id: '1',
									shot: 'Pierce',
									backhops: '4-7.5',
									rolls: '2-3.75',
								},
								{
									id: '2',
									shot: 'Rapid',
									backhops: '2-4.5',
									rolls: '1-2.25',
								},
								{
									id: '3',
									shot: 'Scatter',
									backhops: '0.5-3',
									rolls: '0.25-1.5',
								},
								{
									id: '4',
									shot: 'Rising',
									backhops: '6',
									rolls: '3',
								},
							]}
							><Toolbar
								><div class="toolbar">
									<CopyButton
										iconDescription={'Copy as CSV'}
										text={getCSVFromArray([
											{
												id: '1',
												shot: 'Pierce',
												backhops: '4-7.5',
												rolls: '2-3.75',
											},
											{
												id: '2',
												shot: 'Rapid',
												backhops: '2-4.5',
												rolls: '1-2.25',
											},
											{
												id: '3',
												shot: 'Scatter',
												backhops: '0.5-3',
												rolls: '0.25-1.5',
											},
											{
												id: '4',
												shot: 'Rising',
												backhops: '6',
												rolls: '3',
											},
										])}
									/>
								</div>
							</Toolbar>
							<svelte:fragment slot="cell" let:cell>
								<p>{cell.value}</p>
							</svelte:fragment>
						</DataTable>
					</div>
					<div>
						{#if criticalDistanceBowChartLoaded}
							<svelte:component
								this={criticalDistanceBowChart}
								data={[
									{ group: 'Rapid', multiplier: 1, distance: 'Close' },
									{ group: 'Rapid', multiplier: 1.5, distance: 'Mid 1' },
									{ group: 'Rapid', multiplier: 1.5, distance: 'Mid 2' },
									{ group: 'Rapid', multiplier: 1, distance: 'Far 1' },
									{ group: 'Rapid', multiplier: 0.8, distance: 'Far 2' },
									{ group: 'Rapid', multiplier: 0.8, distance: 'Far 3' },
									{ group: 'Rapid', multiplier: 0.5, distance: 'Far 4' },
									{ group: 'Rapid', multiplier: 0, distance: 'Far 5' },
									{ group: 'Pierce', multiplier: 1, distance: 'Close' },
									{ group: 'Pierce', multiplier: 1.5, distance: 'Mid 1' },
									{ group: 'Pierce', multiplier: 1.5, distance: 'Mid 2' },
									{ group: 'Pierce', multiplier: 1.5, distance: 'Far 1' },
									{ group: 'Pierce', multiplier: 1, distance: 'Far 2' },
									{ group: 'Pierce', multiplier: 0.8, distance: 'Far 3' },
									{ group: 'Pierce', multiplier: 0.5, distance: 'Far 4' },
									{ group: 'Pierce', multiplier: 0, distance: 'Far 5' },
									{ group: 'Spread', multiplier: 1, distance: 'Close' },
									{ group: 'Spread', multiplier: 1.5, distance: 'Mid 1' },
									{ group: 'Spread', multiplier: 1, distance: 'Mid 2' },
									{ group: 'Spread', multiplier: 0.8, distance: 'Far 1' },
									{ group: 'Spread', multiplier: 0.8, distance: 'Far 2' },
									{ group: 'Spread', multiplier: 0.5, distance: 'Far 3' },
									{ group: 'Spread', multiplier: 0, distance: 'Far 4' },
									{ group: 'Spread', multiplier: 0, distance: 'Far 5' },
									{ group: 'Spread', multiplier: 1, distance: 'Close' },
									{ group: 'Aura Shot', multiplier: 1.5, distance: 'Mid 1' },
									{ group: 'Aura Shot', multiplier: 1.5, distance: 'Mid 2' },
									{ group: 'Aura Shot', multiplier: 1.5, distance: 'Far 1' },
									{ group: 'Aura Shot', multiplier: 1.5, distance: 'Far 2' },
									{ group: 'Aura Shot', multiplier: 1.5, distance: 'Far 3' },
									{ group: 'Aura Shot', multiplier: 1, distance: 'Far 4' },
									{ group: 'Aura Shot', multiplier: 0.8, distance: 'Far 5' },
									{
										group: 'Piercing Aura',
										multiplier: 1.5,
										distance: 'Close',
									},
									{
										group: 'Piercing Aura',
										multiplier: 1.5,
										distance: 'Mid 1',
									},
									{
										group: 'Piercing Aura',
										multiplier: 1.5,
										distance: 'Mid 2',
									},
									{
										group: 'Piercing Aura',
										multiplier: 1.5,
										distance: 'Far 1',
									},
									{
										group: 'Piercing Aura',
										multiplier: 1.5,
										distance: 'Far 2',
									},
									{
										group: 'Piercing Aura',
										multiplier: 1.5,
										distance: 'Far 3',
									},
									{
										group: 'Piercing Aura',
										multiplier: 0.8,
										distance: 'Far 4',
									},
									{
										group: 'Piercing Aura',
										multiplier: 0.5,
										distance: 'Far 5',
									},
								]}
								options={criticalDistanceBowChartOptions}
							/>
						{:else}
							<Loading withOverlay={false} />
						{/if}
					</div>
				</div>
			</section>
		</div>
	</section>

	<section>
		<SectionHeading level={2} title="Armor" />
		<div></div>
	</section>

	<section>
		<SectionHeading level={2} title="Weapon Multipliers" />
		<div>
			<div class="weapons-table">
				<DataTable
					sortable
					useStaticWidth
					zebra
					size="medium"
					headers={[
						{ key: 'weapon', value: 'Weapon', minWidth: '1rem' },
						{ key: 'multiplier', value: 'Multiplier', minWidth: '1rem' },
					]}
					rows={[
						{
							id: 'Sword and Shield',
							weapon: 'Sword and Shield',
							multiplier: 'x1.4',
						},
						{
							id: 'Dual Swords',
							weapon: 'Dual Swords',
							multiplier: 'x1.4',
						},
						{
							id: 'Great Sword',
							weapon: 'Great Sword',
							multiplier: 'x4.8',
						},
						{
							id: 'Long Sword',
							weapon: 'Long Sword',
							multiplier: 'x4.8',
						},
						{
							id: 'Hammer',
							weapon: 'Hammer',
							multiplier: 'x5.2',
						},
						{
							id: 'Hunting Horn',
							weapon: 'Hunting Horn',
							multiplier: 'x5.2',
						},
						{
							id: 'Lance',
							weapon: 'Lance',
							multiplier: 'x2.3',
						},
						{
							id: 'Gunlance',
							weapon: 'Gunlance',
							multiplier: 'x2.3',
						},

						{
							id: 'Tonfa',
							weapon: 'Tonfa',
							multiplier: 'x1.8',
						},
						{
							id: 'Switch Axe F',
							weapon: 'Switch Axe F',
							multiplier: 'x5.4',
						},
						{
							id: 'Magnet Spike',
							weapon: 'Magnet Spike',
							multiplier: 'x5.4',
						},
						{
							id: 'Light Bowgun',
							weapon: 'Light Bowgun',
							multiplier: 'x1.2',
						},

						{
							id: 'Heavy Bowgun',
							weapon: 'Heavy Bowgun',
							multiplier: 'x1.2',
						},
						{
							id: 'Bow',
							weapon: 'Bow',
							multiplier: 'x1.2',
						},
					]}
					><Toolbar
						><div class="toolbar">
							<CopyButton
								iconDescription={'Copy as CSV'}
								text={getCSVFromArray([
									{
										id: 'Sword and Shield',
										weapon: 'Sword and Shield',
										multiplier: 'x1.4',
									},
									{
										id: 'Dual Swords',
										weapon: 'Dual Swords',
										multiplier: 'x1.4',
									},
									{
										id: 'Great Sword',
										weapon: 'Great Sword',
										multiplier: 'x4.8',
									},
									{
										id: 'Long Sword',
										weapon: 'Long Sword',
										multiplier: 'x4.8',
									},
									{
										id: 'Hammer',
										weapon: 'Hammer',
										multiplier: 'x5.2',
									},
									{
										id: 'Hunting Horn',
										weapon: 'Hunting Horn',
										multiplier: 'x5.2',
									},
									{
										id: 'Lance',
										weapon: 'Lance',
										multiplier: 'x2.3',
									},
									{
										id: 'Gunlance',
										weapon: 'Gunlance',
										multiplier: 'x2.3',
									},

									{
										id: 'Tonfa',
										weapon: 'Tonfa',
										multiplier: 'x1.8',
									},
									{
										id: 'Switch Axe F',
										weapon: 'Switch Axe F',
										multiplier: 'x5.4',
									},
									{
										id: 'Magnet Spike',
										weapon: 'Magnet Spike',
										multiplier: 'x5.4',
									},
									{
										id: 'Light Bowgun',
										weapon: 'Light Bowgun',
										multiplier: 'x1.2',
									},

									{
										id: 'Heavy Bowgun',
										weapon: 'Heavy Bowgun',
										multiplier: 'x1.2',
									},
									{
										id: 'Bow',
										weapon: 'Bow',
										multiplier: 'x1.2',
									},
								])}
							/>
						</div>
					</Toolbar>
					<svelte:fragment slot="cell" let:cell>
						{#if cell.key === 'weapon'}
							<InlineTooltip
								text={cell.value}
								tooltip={'Weapon'}
								icon={WeaponTypes.find((e) => e.name === cell.value)?.icon}
							/>
						{:else}
							<p>{cell.value}</p>
						{/if}
					</svelte:fragment>
				</DataTable>
			</div>
		</div>
	</section>

	<section>
		<SectionHeading level={2} title="Active Feature" />
		<div class="active-feature-section">
			<div class="active-feature-description">
				<p>
					The Active Feature system is a daily effect to weapon types. These
					effects last from 12 PM to 12 PM the next day, at which time a new
					weapon type will be chosen. You can see up to one day in advance by
					looking behind the main Active Feature bar at the top of your screen
					while in <InlineTooltip
						text="Mezeporta"
						tooltip="Location"
						icon={LocationIcons.find((e) => e.name === 'Mezeporta')?.icon}
						iconType={'file'}
					/>.
				</p>
				<p>
					Final Bitfield Value: {activeFeatureFinalBitfieldValue}
				</p>
			</div>
			<div class="active-feature-table">
				<DataTable
					useStaticWidth
					batchSelection
					bind:selectedRowIds={activeFeatureSelectedRowIds}
					sortable
					zebra
					size="medium"
					headers={[
						{ key: 'weapon', value: 'Weapon', minWidth: '12rem' },
						{ key: 'effect', value: 'Active Feature Effect' },
						{ key: 'bitfield', value: 'Bitfield Value' },
					]}
					rows={[
						{
							id: 'Sword and Shield',
							weapon: 'Sword and Shield',
							effect: 'x1.2 Status and Element (internal).',
							bitfield: '16',
						},
						{
							id: 'Dual Swords',
							weapon: 'Dual Swords',
							effect:
								'Reduces the speed at which the HP bar decreases when in true demon mode. Stamina gauge depletion speed is reduced to x0.5 when in demon mode (equivalent to Marathon Runner). When Marathon Runner is activated, it is reduced to x0.33.',
							bitfield: '64',
						},
						{
							id: 'Great Sword',
							weapon: 'Great Sword',
							effect:
								"+100% Affinity when using an unsheathe attack. This is additional and goes on top of any existing affinity. Synergizes well with Critical Conversion. This also applies to attacks from Parries and also gives the raw increasing effect of skill Critical Conversion (no +30%) while you are performing these actions. This doesn't activate with Shining Sword.",
							bitfield: '1',
						},
						{
							id: 'Long Sword',
							weapon: 'Long Sword',
							bitfield: '128',
							effect:
								'Full spirit bar buff effect increased (from +10 attack to +40 attack)',
						},
						{
							id: 'Hammer',
							weapon: 'Hammer',
							bitfield: '4',
							effect:
								'x1.5 Stun damage. Synergizes well with Sigil and Caravan Skills.',
						},
						{
							id: 'Hunting Horn',
							weapon: 'Hunting Horn',
							bitfield: '256',
							effect: 'x2 Song duration. Synergizes well with Flute Expert.',
						},
						{
							id: 'Lance',
							weapon: 'Lance',
							bitfield: '8',
							effect:
								'Guard Skill goes up by 1 level. Grants Reflect+3. Does not work with Reflect Up nor Guard Up.',
						},
						{
							id: 'Gunlance',
							weapon: 'Gunlance',
							bitfield: '512',
							effect: 'x1.5 Wyvern Fire and Shelling Damage.',
						},

						{
							id: 'Tonfa',
							weapon: 'Tonfa',
							bitfield: '2048',
							effect:
								'All Ryuuki finisher (i.e. explosion) effects buffed. Head: KO duration from 20s to 30s. Tail: Bleeding 1.5x damage. Body: Sharpness return from 15 to 20. Gunner Attack Up from 25 to 50.',
						},
						{
							id: 'Switch Axe F',
							weapon: 'Switch Axe F',
							bitfield: '4096',
							effect:
								'Increases Phial Meter Recovery by primary recovery mechanic (either by reloading or guarding)',
						},
						{
							id: 'Magnet Spike',
							weapon: 'Magnet Spike',
							bitfield: '8192',
							effect:
								'Increases Pin finisher multiplier by 1.25x (from 600 motion value to 750 motion value). x1.1 Cutting damage to the tail in cutting mode. x1.3 Stun value in impact mode.',
						},
						{
							id: 'Light Bowgun',
							weapon: 'Light Bowgun',
							effect:
								'+0.1x Damage increased at critical distance. x1.2 Status damage.',
							bitfield: '32',
						},

						{
							id: 'Heavy Bowgun',
							weapon: 'Heavy Bowgun',
							effect: '+0.1x Damage increased at critical distance.',
							bitfield: '2',
						},
						{
							id: 'Bow',
							weapon: 'Bow',
							effect: 'x0.85 Charge time. Synergizes well with Auto-Reload.',
							bitfield: '1024',
						},
					]}
					><Toolbar
						><div class="toolbar">
							<CopyButton
								iconDescription={'Copy as CSV'}
								text={getCSVFromArray([
									{
										id: 'Sword and Shield',
										weapon: 'Sword and Shield',
										effect: 'x1.2 Status and Element (internal).',
										bitfield: '16',
									},
									{
										id: 'Dual Swords',
										weapon: 'Dual Swords',
										effect:
											'Reduces the speed at which the HP bar decreases when in true demon mode. Stamina gauge depletion speed is reduced to x0.5 when in demon mode (equivalent to Marathon Runner). When Marathon Runner is activated, it is reduced to x0.33.',
										bitfield: '64',
									},
									{
										id: 'Great Sword',
										weapon: 'Great Sword',
										effect:
											'+100% Affinity when using an unsheathe attack. This is additional and goes on top of any existing affinity. Synergizes well with Critical Conversion. This also applies to attacks from Parries and also gives the raw increasing effect of skill Critical Conversion (no +30%) while you are performing these actions.',
										bitfield: '1',
									},
									{
										id: 'Long Sword',
										weapon: 'Long Sword',
										bitfield: '128',
										effect:
											'Full spirit bar buff effect increased (from +10 attack to +40 attack)',
									},
									{
										id: 'Hammer',
										weapon: 'Hammer',
										bitfield: '4',
										effect:
											'x1.5 Stun damage. Synergizes well with Sigil and Caravan Skills.',
									},
									{
										id: 'Hunting Horn',
										weapon: 'Hunting Horn',
										bitfield: '256',
										effect:
											'x2 Song duration. Synergizes well with Flute Expert.',
									},
									{
										id: 'Lance',
										weapon: 'Lance',
										bitfield: '8',
										effect:
											'Guard Skill goes up by 1 level. Grants Reflect+3. Does not work with Reflect Up nor Guard Up.',
									},
									{
										id: 'Gunlance',
										weapon: 'Gunlance',
										bitfield: '512',
										effect: 'x1.5 Wyvern Fire and Shelling Damage.',
									},

									{
										id: 'Tonfa',
										weapon: 'Tonfa',
										bitfield: '2048',
										effect:
											'All Ryuuki finisher (i.e. explosion) effects buffed. Head: KO duration from 20s to 30s. Tail: Bleeding 1.5x damage. Body: Sharpness return from 15 to 20. Gunner Attack Up from 25 to 50.',
									},
									{
										id: 'Switch Axe F',
										weapon: 'Switch Axe F',
										bitfield: '4096',
										effect:
											'Increases Phial Meter Recovery by primary recovery mechanic (either by reloading or guarding)',
									},
									{
										id: 'Magnet Spike',
										weapon: 'Magnet Spike',
										bitfield: '8192',
										effect:
											'Increases Pin finisher multiplier by 1.25x (from 600 motion value to 750 motion value). x1.1 Cutting damage to the tail in cutting mode. x1.3 Stun value in impact mode.',
									},
									{
										id: 'Light Bowgun',
										weapon: 'Light Bowgun',
										effect:
											'+0.1x Damage increased at critical distance. x1.2 Status damage.',
										bitfield: '32',
									},

									{
										id: 'Heavy Bowgun',
										weapon: 'Heavy Bowgun',
										effect: '+0.1x Damage increased at critical distance.',
										bitfield: '2',
									},
									{
										id: 'Bow',
										weapon: 'Bow',
										effect:
											'x0.85 Charge time. Synergizes well with Auto-Reload.',
										bitfield: '1024',
									},
								])}
							/>
						</div>
					</Toolbar>

					<svelte:fragment slot="cell" let:cell>
						{#if cell.key === 'weapon'}
							<InlineTooltip
								text={cell.value}
								tooltip={'Weapon'}
								icon={WeaponTypes.find((e) => e.name === cell.value)?.icon}
								iconSize={'2rem'}
								gap={'0.5rem'}
							/>
						{:else}
							<p>{cell.value}</p>
						{/if}
					</svelte:fragment>
				</DataTable>
			</div>
		</div>
	</section>

	<section>
		<SectionHeading level={2} title="Sharpness" />
		<div class="sharpness-table">
			<DataTable
				useStaticWidth
				sortable
				zebra
				size="medium"
				headers={[
					{ key: 'name', value: 'Color', minWidth: '1rem' },
					{ key: 'bar', value: 'Sharpness Bar', minWidth: '1rem' },
					{ key: 'multiplier', value: 'Multiplier' },
					{ key: 'affinity', value: 'Affinity' },
				]}
				rows={[
					{
						id: '1',
						name: 'Red',
						bar: '400,400,400,400,400,400,400,400',
						multiplier: 'x0.6',
						affinity: '0%',
					},
					{
						id: '2',
						name: 'Orange',
						bar: '0,400,400,400,400,400,400,400',
						multiplier: 'x0.85',
						affinity: '0%',
					},
					{
						id: '3',
						name: 'Yellow',
						bar: '0,0,400,400,400,400,400,400',
						multiplier: 'x1.1',
						affinity: '0%',
					},
					{
						id: '4',
						name: 'Green',
						bar: '0,0,0,400,400,400,400,400',
						multiplier: 'x1.325',
						affinity: '0%',
					},
					{
						id: '5',
						name: 'Blue',
						bar: '0,0,0,0,400,400,400,400',
						multiplier: 'x1.45',
						affinity: '10%',
					},
					{
						id: '6',
						name: 'White',
						bar: '0,0,0,0,0,400,400,400',
						multiplier: 'x1.60',
						affinity: '10%',
					},
					{
						id: '7',
						name: 'Purple',
						bar: '0,0,0,0,0,0,400,400',
						multiplier: 'x1.7',
						affinity: '10%',
					},
					{
						id: '8',
						name: 'Cyan',
						bar: '0,0,0,0,0,0,0,400',
						multiplier: 'x1.8',
						affinity: '10%',
					},
				]}
				><Toolbar
					><div class="toolbar">
						<CopyButton
							iconDescription={'Copy as CSV'}
							text={getCSVFromArray([
								{
									id: '1',
									name: 'Red',
									bar: '400,400,400,400,400,400,400,400',
									multiplier: 'x0.6',
									affinity: '0%',
								},
								{
									id: '2',
									name: 'Orange',
									bar: '0,400,400,400,400,400,400,400',
									multiplier: 'x0.85',
									affinity: '0%',
								},
								{
									id: '3',
									name: 'Yellow',
									bar: '0,0,400,400,400,400,400,400',
									multiplier: 'x1.1',
									affinity: '0%',
								},
								{
									id: '4',
									name: 'Green',
									bar: '0,0,0,400,400,400,400,400',
									multiplier: 'x1.325',
									affinity: '0%',
								},
								{
									id: '5',
									name: 'Blue',
									bar: '0,0,0,0,400,400,400,400',
									multiplier: 'x1.45',
									affinity: '10%',
								},
								{
									id: '6',
									name: 'White',
									bar: '0,0,0,0,0,400,400,400',
									multiplier: 'x1.60',
									affinity: '10%',
								},
								{
									id: '7',
									name: 'Purple',
									bar: '0,0,0,0,0,0,400,400',
									multiplier: 'x1.7',
									affinity: '10%',
								},
								{
									id: '8',
									name: 'Cyan',
									bar: '0,0,0,0,0,0,0,400',
									multiplier: 'x1.8',
									affinity: '10%',
								},
							])}
						/>
					</div>
				</Toolbar>

				<svelte:fragment slot="cell" let:cell>
					{#if cell.key === 'bar'}
						<div class="sharpness-bar-container">
							<SharpnessBar
								sharpnessBoost={false}
								sharpnessValues={getSharpnessArray(cell.value)}
							/>
						</div>
					{:else}
						<p>{cell.value}</p>
					{/if}
				</svelte:fragment>
			</DataTable>
		</div>
	</section>

	<section>
		<SectionHeading level={2} title="Guild Poogie" />
		<div>
			<p class="spaced-paragraph">
				Guild Poogies, found in the <InlineTooltip
					text="Guild Hall"
					tooltip="Location"
					icon={LocationIcons.find((e) => e.name === 'Guild Hall')?.icon}
					iconType="file"
				/>, can grant bonuses upon being successfully fed (indicated by them
				jumping up and down in a white flash), a Guild can have three different
				Poogie Outfit that each grant a different skill when fed successfully.
				The easiest way to get the buff is to to mass feed them
				<InlineTooltip
					text="Pugi Crackers"
					tooltip="Item"
					iconColor={ItemColors.find((e) => e.name === 'Yellow')?.value}
					icon={ItemIcons.find((e) => e.name === 'Scale')?.icon}
				/> from the Guild Shop.
			</p>

			<p class="spaced-paragraph">
				You can only have one buff active at a time. You only need to feed once
				per log in. You can check your current skill in the last page of your
				equipment menu.
			</p>

			<p class="spaced-paragraph">
				All poogie buffs stack with any similar skills. For example, you can use
				the Luck effect poogie even if you have <InlineTooltip
					text="Great Luck"
					tooltip="Armor Skill"
					icon={getTag('Armor Skill').icon}
				/>
				or Premium Course active. The Luck poogie has a 12.5% chance to reroll a
				failed reward roll and a 12.5% chance to add additional reward slots. You
				can get a maximum of 24 standard reward slots if you are using <InlineTooltip
					text="Great Luck"
					tooltip="Armor Skill"
					icon={getTag('Armor Skill').icon}
				/> with the poogie active. The poogie only affects the top 24 Main Reward
				slots and does not change any of the other types of rewards (Sub Objectives,
				Additional, Breaks, Partner, etc.).
			</p>

			<p>Only the guild leader can purchase and change clothes.</p>
		</div>
		<section>
			<SectionHeading level={3} title="Guild Store Discount" />
			<div>
				<p>
					The discount, from guild rank 5, is activated by successfully
					completing the "pat on the head" and "it seems pretty happy" responses
					a specified number of times.
				</p>

				<ul class="spaced-list">
					<li>5 times successful: Guild shop 5% discount.</li>
					<li>10 times successful: Guild shop 10% discount.</li>
					<li>15 times successful: Guild shop 15% discount.</li>
				</ul>

				<p>The effect disappears in any of the following events:</p>
				<ul>
					<li>12 hours have passed.</li>
					<li>Logout.</li>
					<li>Petting poogie for a long time and it getting angry.</li>
				</ul>
			</div>
		</section>
		<section>
			<SectionHeading level={3} title="Guild Poogie Skills" />
			<div>
				<p class="spaced-paragraph">
					Guild Poogie Skills are unlocked at Guild Rank 6. Giving food and
					triggering the alert "seems to love it!" will activate a skill
					according to the Poogie's clothes with a probability.
				</p>

				<div class="guild-poogie-table">
					<DataTable
						useStaticWidth
						sortable
						zebra
						size="medium"
						headers={[
							{ key: 'rank', value: 'Rank' },
							{ key: 'costume', value: 'Costume' },
							{ key: 'skill', value: 'Skill' },
							{ key: 'effect', value: 'Effect' },
							{ key: 'materials', value: 'Materials' },
						]}
						rows={[
							{
								id: '1',
								rank: '6',
								costume: 'Red & White',
								skill: 'Poogie Thrift',
								effect:
									'Flute, Pickaxe and Bugnet are 1/4 less likely to break (Stacks with Whim).',
								materials: '-',
							},
							{
								id: '2',
								rank: '6',
								costume: 'Naked Emperor',
								skill: 'Poogie Discount',
								effect:
									'Furniture store purchase price (Material/Zenny) 10% discount.',
								materials: 'Wht Durable Fabricx45, Appropriate Partsx15',
							},
							{
								id: '3',
								rank: '6',
								costume: 'Soporific White',
								skill: 'Poogie Taijutsu',
								effect: 'Halves stamina consumption when evading and guarding.',
								materials:
									'Wht Durable Fabricx75, Flexible Medicinex22, Appropriate Partsx30',
							},
							{
								id: '4',
								rank: '6',
								costume: 'Black Green Clash',
								skill: 'Poogie Status Attack',
								effect:
									'1.125x attribute value for status attacks (Can be used with status skills)',
								materials: 'Striped Fabricx45, Green Fabricx30',
							},
							{
								id: '5',
								rank: '8',
								costume: 'Silent Suit',
								skill: 'Poogie Reward Technique',
								effect:
									"1/8 chance that the next reward won't be given as a quest reward. In addition, the maximum reward frame will also be increased.",
								materials:
									'Wht Durable Fabricx30, Black Fabricx50, Appropriate Partsx20',
							},
							{
								id: '6',
								rank: '8',
								costume: 'Bewitching Pink',
								skill: 'Poogie Defense',
								effect:
									'When attacked: 1/4 chance to reduce damage taken by 30% (Can be used with the protection skill).',
								materials: 'Wht Durable Fabricx2, Peach Fabricx45',
							},
							{
								id: '7',
								rank: '8',
								costume: 'Nostalgic Stripe',
								skill: 'Poogie Escape Technique',
								effect: 'Halves stamina when running away.',
								materials: 'Striped Fabricx45, Blue Fabricx25',
							},
							{
								id: '8',
								rank: '8',
								costume: 'Soothing Sky',
								skill: 'Poogie Transporation',
								effect:
									'Halves stamina consumption while running while transporting (Can be used with Marathon Runner skill).',
								materials:
									'Wht Durable Fabricx40, Blue Fabricx35, Appropriate Partsx10',
							},

							{
								id: '9',
								rank: '9',
								costume: 'Gentle Green',
								skill: 'Poogie Trap Mastery',
								effect: '100% success in combining pitfall and shock traps.',
								materials:
									'Green Fabricx35, Blue Fabricx20, Appropriate Partsx20',
							},
							{
								id: '10',
								rank: '9',
								costume: 'Restless Brown',
								skill: 'Poogie Patience',
								effect:
									'When attacked: 1/6 chance of gaining super armor (no knockback).',
								materials:
									'Brown Fabricx30, Black Fabricx10, Appropriate Partsx30',
							},
						]}
						><Toolbar
							><div class="toolbar">
								<CopyButton
									iconDescription={'Copy as CSV'}
									text={getCSVFromArray([
										{
											id: '1',
											rank: '6',
											costume: 'Red & White',
											skill: 'Poogie Thrift',
											effect:
												'Flute, Pickaxe and Bugnet are 1/4 less likely to break (Stacks with Whim).',
											materials: '-',
										},
										{
											id: '2',
											rank: '6',
											costume: 'Naked Emperor',
											skill: 'Poogie Discount',
											effect:
												'Furniture store purchase price (Material/Zenny) 10% discount.',
											materials: 'Wht Durable Fabricx45, Appropriate Partsx15',
										},
										{
											id: '3',
											rank: '6',
											costume: 'Soporific White',
											skill: 'Poogie Taijutsu',
											effect:
												'Halves stamina consumption when evading and guarding.',
											materials:
												'Wht Durable Fabricx75, Flexible Medicinex22, Appropriate Partsx30',
										},
										{
											id: '4',
											rank: '6',
											costume: 'Black Green Clash',
											skill: 'Poogie Status Attack',
											effect:
												'1.125x attribute value for status attacks (Can be used with status skills)',
											materials: 'Striped Fabricx45, Green Fabricx30',
										},
										{
											id: '5',
											rank: '8',
											costume: 'Silent Suit',
											skill: 'Poogie Reward Technique',
											effect:
												"1/8 chance that the next reward won't be given as a quest reward. In addition, the maximum reward frame will also be increased.",
											materials:
												'Wht Durable Fabricx30, Black Fabricx50, Appropriate Partsx20',
										},
										{
											id: '6',
											rank: '8',
											costume: 'Bewitching Pink',
											skill: 'Poogie Defense',
											effect:
												'When attacked: 1/4 chance to reduce damage taken by 30% (Can be used with the protection skill).',
											materials: 'Wht Durable Fabricx2, Peach Fabricx45',
										},
										{
											id: '7',
											rank: '8',
											costume: 'Nostalgic Stripe',
											skill: 'Poogie Escape Technique',
											effect: 'Halves stamina when running away.',
											materials: 'Striped Fabricx45, Blue Fabricx25',
										},
										{
											id: '8',
											rank: '8',
											costume: 'Soothing Sky',
											skill: 'Poogie Transporation',
											effect:
												'Halves stamina consumption while running while transporting (Can be used with Marathon Runner skill).',
											materials:
												'Wht Durable Fabricx40, Blue Fabricx35, Appropriate Partsx10',
										},

										{
											id: '9',
											rank: '9',
											costume: 'Gentle Green',
											skill: 'Poogie Trap Mastery',
											effect:
												'100% success in combining pitfall and shock traps.',
											materials:
												'Green Fabricx35, Blue Fabricx20, Appropriate Partsx20',
										},
										{
											id: '10',
											rank: '9',
											costume: 'Restless Brown',
											skill: 'Poogie Patience',
											effect:
												'When attacked: 1/6 chance of gaining super armor (no knockback).',
											materials:
												'Brown Fabricx30, Black Fabricx10, Appropriate Partsx30',
										},
									])}
								/>
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
			<SectionHeading level={3} title="Guild Poogie Clothing Materials" />
			<div>
				<p class="spaced-paragraph">
					Clothing materials are RARE2 and can be put in the guild box.
				</p>
				<div>
					<DataTable
						useStaticWidth
						sortable
						zebra
						size="medium"
						headers={[
							{ key: 'clothingMaterial', value: 'Clothing Material' },
							{ key: 'productionMaterials', value: 'Production Materials' },
						]}
						rows={[
							{
								id: '1',
								clothingMaterial: 'Sturdy Wht Cloth',
								productionMaterials:
									'Anteka Peltx3, Giaprey Hidex2, Blangonga Peltx2',
							},
							{
								id: '2',
								clothingMaterial: 'Appropriate Parts',
								productionMaterials:
									'Sunstonex2, Sticky Caterpillarx1, Sm Monster Bonex1, Machalite Orex3',
							},
							{
								id: '3',
								clothingMaterial: 'Striped Fabric',
								productionMaterials:
									'High Quality Peltx3, Striped Skinx2, Black Rajang Peltx1, Carpenterbugx2',
							},
							{
								id: '4',
								clothingMaterial: 'Green Fabric',
								productionMaterials:
									'Burukku Hidex2, Rathian Scalex3, Gendrome Hidex3, Festi Ticketx1',
							},
							{
								id: '5',
								clothingMaterial: 'Fluffy Serum',
								productionMaterials:
									'Bomb Arowanax3, Firecell Stonex1, Fire Herbx5, Monster Fluidx2',
							},
							{
								id: '6',
								clothingMaterial: 'Black Fabric',
								productionMaterials:
									'Remobra Skin+x2, High Quality Peltx3, B.Gravios Shellx1',
							},
							{
								id: '7',
								clothingMaterial: 'Peach Fabric',
								productionMaterials:
									'Ioprey Hide+x1, Teostra Shellx1, Giaprey Hidex3',
							},
							{
								id: '8',
								clothingMaterial: 'Blue Fabric',
								productionMaterials:
									'Velociprey Scalex3, B.Kut-Ku Scalex2, Rubbery Hidex1',
							},

							{
								id: '9',
								clothingMaterial: 'Brown Fabric',
								productionMaterials:
									'Genprey Hidex4, Diablos Shellx1, Gluehopperx2',
							},
						]}
						><Toolbar
							><div class="toolbar">
								<CopyButton
									iconDescription={'Copy as CSV'}
									text={getCSVFromArray([
										{
											id: '1',
											clothingMaterial: 'Sturdy Wht Cloth',
											productionMaterials:
												'Anteka Peltx3, Giaprey Hidex2, Blangonga Peltx2',
										},
										{
											id: '2',
											clothingMaterial: 'Appropriate Parts',
											productionMaterials:
												'Sunstonex2, Sticky Caterpillarx1, Sm Monster Bonex1, Machalite Orex3',
										},
										{
											id: '3',
											clothingMaterial: 'Striped Fabric',
											productionMaterials:
												'High Quality Peltx3, Striped Skinx2, Black Rajang Peltx1, Carpenterbugx2',
										},
										{
											id: '4',
											clothingMaterial: 'Green Fabric',
											productionMaterials:
												'Burukku Hidex2, Rathian Scalex3, Gendrome Hidex3, Festi Ticketx1',
										},
										{
											id: '5',
											clothingMaterial: 'Fluffy Serum',
											productionMaterials:
												'Bomb Arowanax3, Firecell Stonex1, Fire Herbx5, Monster Fluidx2',
										},
										{
											id: '6',
											clothingMaterial: 'Black Fabric',
											productionMaterials:
												'Remobra Skin+x2, High Quality Peltx3, B.Gravios Shellx1',
										},
										{
											id: '7',
											clothingMaterial: 'Peach Fabric',
											productionMaterials:
												'Ioprey Hide+x1, Teostra Shellx1, Giaprey Hidex3',
										},
										{
											id: '8',
											clothingMaterial: 'Blue Fabric',
											productionMaterials:
												'Velociprey Scalex3, B.Kut-Ku Scalex2, Rubbery Hidex1',
										},

										{
											id: '9',
											clothingMaterial: 'Brown Fabric',
											productionMaterials:
												'Genprey Hidex4, Diablos Shellx1, Gluehopperx2',
										},
									])}
								/>
							</div>
						</Toolbar>

						<svelte:fragment slot="cell" let:cell>
							<p>{cell.value}</p>
						</svelte:fragment>
					</DataTable>
				</div>
			</div>
		</section>
	</section>

	<section>
		<SectionHeading level={2} title="Armor Colors" />
		<div>
			<p class="spaced-paragraph">
				Colors are unlocked by doing a number of different tasks. These colors
				are also the color that is displayed behind your weapon icon in <InlineTooltip
					text="Mezeporta"
					tooltip="Location"
					icon={LocationIcons.find((e) => e.name === 'Mezeporta')?.icon}
					iconType={'file'}
				/>.
			</p>
			<p class="spaced-paragraph">
				Colors other than Green, Red and White require that you have reached at
				least HR3 to be used.
			</p>
			<p class="spaced-paragraph">
				The menu to customise the color used is unlocked by creating or
				otherwise obtaining an armor piece that lets you set its color. You can
				do this by buying the T-Shirt that the NPC wearing glasses in the
				<InlineTooltip
					text="Blacksmith"
					tooltip="Location"
					icon={LocationIcons.find((e) => e.name === 'Blacksmith')?.icon}
					iconType={'file'}
				/> sells.
			</p>
			<p class="spaced-paragraph">
				If your total points for Green, Red or White pass 100, the total points
				of all three goes down by -30.
			</p>
		</div>
		<div>
			<DataTable
				useStaticWidth
				sortable
				zebra
				size="medium"
				headers={[
					{ key: 'color', value: 'Color' },
					{ key: 'requirement', value: 'Requirement' },
					{ key: 'tips', value: 'Tips' },
				]}
				rows={[
					{
						id: '1',
						color: 'Green',
						requirement:
							'Completion of a large number of Delivery Quests. Each Delivery quest adds +3 points, 100 points required.',
						tips: 'Complete the 3 Iron Ore delivery quest, found at the Main Quest Guild Sweetheart.',
					},
					{
						id: '2',
						color: 'Red',
						requirement:
							'Completion of a large number of Slaying Quests. Slaying a main objective adds +2 points, Sub-quests +1, 100 points required',
						tips: '-',
					},
					{
						id: '3',
						color: 'White',
						requirement:
							'Capturing a large number of Monsters. Each capture adds +3 points, 100 points required.',
						tips: 'Use Capture Guru armor skill.',
					},
					{
						id: '4',
						color: 'Blue',
						requirement: 'Have 50 Friends at once on your friendlist.',
						tips: '-',
					},
					{
						id: '5',
						color: 'Dark Blue',
						requirement:
							'Have 20 or more Rare-7 weapons or higher of each type (excluding Tonfa, Switch Axe F and Magnet Spike). Duplicate weapons and G Rank weapons do not count.',
						tips: 'Pure raw SP Weapons upgrade to Rare-7.',
					},
					{
						id: '6',
						color: 'Light Green',
						requirement:
							'35x any armour pieces that are needed for Well Dressed title.',
						tips: '-',
					},
					{
						id: '7',
						color: 'Purple',
						requirement: 'Achieve a single PVP victory.',
						tips: 'Complete the first 3 PVP quests at Blue NPC (Arena quests with preset gear). The quests are hunting 2 Velocidromes, hunting 1 Gypceros and hunting 1 Rathian. Then capture Velocidromes until you can keep one as a pet. Then win a PVP battle from Blue NPC.',
					},
					{
						id: '8',
						color: 'Orange',
						requirement:
							'Complete a large number of Hunter Guide (Navi) Challenges.',
						tips: '-',
					},

					{
						id: '9',
						color: 'Yellow',
						requirement: '15 or more Large Gold Crown Monsters.',
						tips: '-',
					},
					{
						id: '10',
						color: 'Gray',
						requirement: 'Eat 100 times in your house.',
						tips: '-',
					},
					{
						id: '11',
						color: 'Pink',
						requirement: 'Contribute 5000 Souls during the festival.',
						tips: '-',
					},
					{
						id: '12',
						color: 'Rainbow',
						requirement: 'Unlock all other colors.',
						tips: '-',
					},
				]}
				><Toolbar
					><div class="toolbar">
						<CopyButton
							iconDescription={'Copy as CSV'}
							text={getCSVFromArray([
								{
									id: '1',
									color: 'Green',
									requirement:
										'Completion of a large number of Delivery Quests. Each Delivery quest adds +3 points, 100 points required.',
									tips: 'Complete the 3 Iron Ore delivery quest, found at the Main Quest Guild Sweetheart.',
								},
								{
									id: '2',
									color: 'Red',
									requirement:
										'Completion of a large number of Slaying Quests. Slaying a main objective adds +2 points, Sub-quests +1, 100 points required',
									tips: '-',
								},
								{
									id: '3',
									color: 'White',
									requirement:
										'Capturing a large number of Monsters. Each capture adds +3 points, 100 points required.',
									tips: 'Use Capture Guru armor skill.',
								},
								{
									id: '4',
									color: 'Blue',
									requirement: 'Have 50 Friends at once on your friendlist.',
									tips: '-',
								},
								{
									id: '5',
									color: 'Dark Blue',
									requirement:
										'Have 20 or more Rare-7 weapons or higher of each type (excluding Tonfa, Switch Axe F and Magnet Spike). Duplicate weapons and G Rank weapons do not count.',
									tips: 'Pure raw SP Weapons upgrade to Rare-7.',
								},
								{
									id: '6',
									color: 'Light Green',
									requirement:
										'35x any armour pieces that are needed for Well Dressed title.',
									tips: '-',
								},
								{
									id: '7',
									color: 'Purple',
									requirement: 'Achieve a single PVP victory.',
									tips: 'Complete the first 3 PVP quests at Blue NPC (Arena quests with preset gear). The quests are hunting 2 Velocidromes, hunting 1 Gypceros and hunting 1 Rathian. Then capture Velocidromes until you can keep one as a pet. Then win a PVP battle from Blue NPC.',
								},
								{
									id: '8',
									color: 'Orange',
									requirement:
										'Complete a large number of Hunter Guide (Navi) Challenges.',
									tips: '-',
								},

								{
									id: '9',
									color: 'Yellow',
									requirement: '15 or more Large Gold Crown Monsters.',
									tips: '-',
								},
								{
									id: '10',
									color: 'Gray',
									requirement: 'Eat 100 times in your house.',
									tips: '-',
								},
								{
									id: '11',
									color: 'Pink',
									requirement: 'Contribute 5000 Souls during the festival.',
									tips: '-',
								},
								{
									id: '12',
									color: 'Rainbow',
									requirement: 'Unlock all other colors.',
									tips: '-',
								},
							])}
						/>
					</div>
				</Toolbar>

				<svelte:fragment slot="cell" let:cell>
					<p>{cell.value}</p>
				</svelte:fragment>
			</DataTable>
		</div>
	</section>

	<section>
		<SectionHeading level={2} title="Diva Prayer Gems" />
		<div>
			<p class="spaced-paragraph">
				During the <InlineTooltip
					text="Diva Defense"
					tooltip="Event"
					icon={LocationIcons.find((e) => e.name === 'Interception')?.icon}
					iconType="file"
				/> event, there are up to four different colors of Prayer gems, each of these
				will have a different effect based on the skills currently assigned to the
				individual colors.
			</p>
			<p class="spaced-paragraph">
				The buffs are only available in the second week of the event. The total
				number of times they can be used is based on the global server's Song
				Spheres. When Prayers are maxed out you will be forced to choose another
				color, locking you from contributing to it.
			</p>
			<p class="spaced-paragraph">
				You select your color each day by talking to the Blue Guild Girl who
				handles things such as Arena quests. You can change this color once a
				day after 12 PM. Selecting your first color does not count as changing
				it, allowing you to contribute to two different colors on the first day.
			</p>
			<p class="spaced-paragraph">
				There are a number of different possible effects for each of these gems,
				and which is assigned to which color will change on each cycle, which
				should be verified in game.
			</p>
			<p class="spaced-paragraph">
				Each day at some point after 12 PM the most popular prayer is ranked up.
				This is based on server wide contributions and thus cannot be
				manipulated to be something based on what you would personally prefer.
				The total level of prayers cannot exceed 7. If there are four prayers up
				each with three levels levels it's very likely that the two most popular
				ones will get max levels, the third most popular will get a single level
				and then the least popular will get no levels.
			</p>
			<p class="spaced-paragraph">
				You can check your currently equipped gem names in Overlay Settings >
				Hunter Notes > Gear Info (Text)
			</p>
			<div class="diva-prayer-gems-table">
				<DataTable
					useStaticWidth
					sortable
					zebra
					size="medium"
					headers={[
						{ key: 'gem', value: 'Prayer Gem' },
						{ key: 'effects', value: 'Effects' },
						{ key: 'maxLevel', value: 'Max Level' },
						{ key: 'unused', value: 'Unused' },
						{ key: 'partyEffect', value: 'Party Effect' },
					]}
					rows={[
						{
							id: '1',
							gem: ezlion.SkillDivaPrayerGem[1],
							effects:
								'Sharpness does not decrease with blademaster weapons. Works for 5, 10 or 20 quests depending on level during the prayer active window.',
							maxLevel: '3',
							unused: '❌',
							partyEffect: '❌',
						},
						{
							id: '2',
							gem: ezlion.SkillDivaPrayerGem[2],
							effects: 'Reduces the recoil and reload speed of Gunner weapons.',
							maxLevel: '7',
							unused: '✅',
							partyEffect: '✅',
						},
						{
							id: '3',
							gem: ezlion.SkillDivaPrayerGem[3],
							effects: 'Tails can be cut with any damage type.',
							maxLevel: '1',
							unused: '❌',
							partyEffect: '❌',
						},
						{
							id: '4',
							gem: ezlion.SkillDivaPrayerGem[4],
							effects: 'Adds passive HP recovery to all quests.',
							maxLevel: '2',
							unused: '❌',
							partyEffect: '✅',
						},
						{
							id: '5',
							gem: ezlion.SkillDivaPrayerGem[5],
							effects:
								'Makes it easier to scare monsters by attacking with Earth Style.',
							maxLevel: '4',
							unused: '✅',
							partyEffect: '❌',
						},
						{
							id: '6',
							gem: ezlion.SkillDivaPrayerGem[6],
							effects:
								'Makes it easier to scare monsters by attacking with Heaven Style.',
							maxLevel: '4',
							unused: '✅',
							partyEffect: '❌',
						},
						{
							id: '7',
							gem: ezlion.SkillDivaPrayerGem[7],
							effects:
								'Makes it easier to scare monsters by attacking with Storm Style.',
							maxLevel: '4',
							unused: '✅',
							partyEffect: '❌',
						},
						{
							id: '8',
							gem: ezlion.SkillDivaPrayerGem[8],
							effects:
								'Increases the amount of raw damage dealt by a cutting weapon by adjusting hitboxes to be weaker against the damage type. +1/2/3 Raw Hitzone increase.',
							maxLevel: '3',
							unused: '❌',
							partyEffect: '❌',
						},
						{
							id: '9',
							gem: ezlion.SkillDivaPrayerGem[9],
							effects:
								'Increases the amount of raw damage dealt by an impact weapon by adjusting hitboxes to be weaker against the damage type. +1/2/3 Raw Hitzone increase.',
							maxLevel: '3',
							unused: '❌',
							partyEffect: '❌',
						},
						{
							id: '10',
							gem: ezlion.SkillDivaPrayerGem[10],
							effects:
								'Increases the amount of raw damage dealt by a ranged weapon by adjusting hitboxes to be weaker against the damage type. +1/2/3 Raw Hitzone increase.',
							maxLevel: '3',
							unused: '❌',
							partyEffect: '❌',
						},
						{
							id: '11',
							gem: ezlion.SkillDivaPrayerGem[11],
							effects:
								'Increases the duration of status effects on monsters. +22/35/60 seconds increase. Around 10 seconds downtime with Abnormality, around 25 without.',
							maxLevel: '3',
							unused: '❌',
							partyEffect: '✅',
						},
						{
							id: '12',
							gem: ezlion.SkillDivaPrayerGem[12],
							effects: 'Monsters are more susceptible to status ailments.',
							maxLevel: '3',
							unused: '✅',
							partyEffect: '✅',
						},
						{
							id: '13',
							gem: ezlion.SkillDivaPrayerGem[13],
							effects:
								'Increases damage when striking body parts upon which your attacks are highly effective. However, element damage does not change.',
							maxLevel: '3',
							unused: '✅',
							partyEffect: '❌',
						},
						{
							id: '14',
							gem: ezlion.SkillDivaPrayerGem[14],
							effects:
								'Elemental damage increases based on level. +1/2/3 Elemental Hitzone increase.',
							maxLevel: '3',
							unused: '❌',
							partyEffect: '❌',
						},
						{
							id: '15',
							gem: ezlion.SkillDivaPrayerGem[15],
							effects: 'Monsters cannot flee if in the same area as a hunter.',
							maxLevel: '3',
							unused: '❌',
							partyEffect: '✅',
						},
						{
							id: '16',
							gem: ezlion.SkillDivaPrayerGem[16],
							effects: 'Adds new items to the GCP store based on level.',
							maxLevel: '1',
							unused: '❌',
							partyEffect: '❌',
						},
						{
							id: '17',
							gem: ezlion.SkillDivaPrayerGem[17],
							effects:
								'Attack will go up based on the number of players in a quest. +30 True Raw increase if you are the only player.',
							maxLevel: '3',
							unused: '❌',
							partyEffect: '✅',
						},
						{
							id: '18',
							gem: ezlion.SkillDivaPrayerGem[18],
							effects:
								"Gives Divine Protection, Goddess' Embrace or Soul Revival based on level.",
							maxLevel: '3',
							unused: '❌',
							partyEffect: '❌',
						},
						{
							id: '19',
							gem: ezlion.SkillDivaPrayerGem[19],
							effects:
								'Increases affinity of all weapons based on the level of the song. +25/50/100% Affinity increase.',
							maxLevel: '3',
							unused: '❌',
							partyEffect: '❌',
						},
						{
							id: '20',
							gem: ezlion.SkillDivaPrayerGem[20],
							effects: 'Increases fire resistance.',
							maxLevel: '3',
							unused: '✅',
							partyEffect: '❌',
						},
						{
							id: '21',
							gem: ezlion.SkillDivaPrayerGem[21],
							effects: 'Increases water resistance.',
							maxLevel: '3',
							unused: '✅',
							partyEffect: '❌',
						},
						{
							id: '22',
							gem: ezlion.SkillDivaPrayerGem[22],
							effects: 'Increases thunder resistance.',
							maxLevel: '3',
							unused: '✅',
							partyEffect: '❌',
						},
						{
							id: '23',
							gem: ezlion.SkillDivaPrayerGem[23],
							effects: 'Increases dragon resistance.',
							maxLevel: '3',
							unused: '✅',
							partyEffect: '❌',
						},
						{
							id: '24',
							gem: ezlion.SkillDivaPrayerGem[24],
							effects: 'Increases ice resistance.',
							maxLevel: '3',
							unused: '✅',
							partyEffect: '❌',
						},
						{
							id: '25',
							gem: ezlion.SkillDivaPrayerGem[25],
							effects: 'Increases resistance to all elements.',
							maxLevel: '2',
							unused: '✅',
							partyEffect: '❌',
						},
					]}
					><Toolbar
						><div class="toolbar">
							<CopyButton
								iconDescription={'Copy as CSV'}
								text={getCSVFromArray([
									{
										id: '1',
										gem: ezlion.SkillDivaPrayerGem[1],
										effects:
											'Sharpness does not decrease with blademaster weapons. Works for 5, 10 or 20 quests depending on level during the prayer active window.',
										maxLevel: '3',
										unused: '❌',
										partyEffect: '❌',
									},
									{
										id: '2',
										gem: ezlion.SkillDivaPrayerGem[2],
										effects:
											'Reduces the recoil and reload speed of Gunner weapons.',
										maxLevel: '7',
										unused: '✅',
										partyEffect: '✅',
									},
									{
										id: '3',
										gem: ezlion.SkillDivaPrayerGem[3],
										effects: 'Tails can be cut with any damage type.',
										maxLevel: '1',
										unused: '❌',
										partyEffect: '❌',
									},
									{
										id: '4',
										gem: ezlion.SkillDivaPrayerGem[4],
										effects: 'Adds passive HP recovery to all quests.',
										maxLevel: '2',
										unused: '❌',
										partyEffect: '✅',
									},
									{
										id: '5',
										gem: ezlion.SkillDivaPrayerGem[5],
										effects:
											'Makes it easier to scare monsters by attacking with Earth Style.',
										maxLevel: '4',
										unused: '✅',
										partyEffect: '❌',
									},
									{
										id: '6',
										gem: ezlion.SkillDivaPrayerGem[6],
										effects:
											'Makes it easier to scare monsters by attacking with Heaven Style.',
										maxLevel: '4',
										unused: '✅',
										partyEffect: '❌',
									},
									{
										id: '7',
										gem: ezlion.SkillDivaPrayerGem[7],
										effects:
											'Makes it easier to scare monsters by attacking with Storm Style.',
										maxLevel: '4',
										unused: '✅',
										partyEffect: '❌',
									},
									{
										id: '8',
										gem: ezlion.SkillDivaPrayerGem[8],
										effects:
											'Increases the amount of raw damage dealt by a cutting weapon by adjusting hitboxes to be weaker against the damage type.',
										maxLevel: '3',
										unused: '❌',
										partyEffect: '❌',
									},
									{
										id: '9',
										gem: ezlion.SkillDivaPrayerGem[9],
										effects:
											'Increases the amount of raw damage dealt by an impact weapon by adjusting hitboxes to be weaker against the damage type.',
										maxLevel: '3',
										unused: '❌',
										partyEffect: '❌',
									},
									{
										id: '10',
										gem: ezlion.SkillDivaPrayerGem[10],
										effects:
											'Increases the amount of raw damage dealt by a ranged weapon by adjusting hitboxes to be weaker against the damage type.',
										maxLevel: '3',
										unused: '❌',
										partyEffect: '❌',
									},
									{
										id: '11',
										gem: ezlion.SkillDivaPrayerGem[11],
										effects:
											'Increases the duration of status effects on monsters.',
										maxLevel: '3',
										unused: '❌',
										partyEffect: '✅',
									},
									{
										id: '12',
										gem: ezlion.SkillDivaPrayerGem[12],
										effects:
											'Monsters are more susceptible to status ailments.',
										maxLevel: '3',
										unused: '✅',
										partyEffect: '✅',
									},
									{
										id: '13',
										gem: ezlion.SkillDivaPrayerGem[13],
										effects:
											'Increases damage when striking body parts upon which your attacks are highly effective. However, element damage does not change.',
										maxLevel: '3',
										unused: '✅',
										partyEffect: '❌',
									},
									{
										id: '14',
										gem: ezlion.SkillDivaPrayerGem[14],
										effects: 'Elemental damage increases based on level.',
										maxLevel: '3',
										unused: '❌',
										partyEffect: '❌',
									},
									{
										id: '15',
										gem: ezlion.SkillDivaPrayerGem[15],
										effects:
											'Monsters cannot flee if in the same area as a hunter.',
										maxLevel: '3',
										unused: '❌',
										partyEffect: '✅',
									},
									{
										id: '16',
										gem: ezlion.SkillDivaPrayerGem[16],
										effects: 'Adds new items to the GCP store based on level.',
										maxLevel: '1',
										unused: '❌',
										partyEffect: '❌',
									},
									{
										id: '17',
										gem: ezlion.SkillDivaPrayerGem[17],
										effects:
											'Attack will go up based on the number of human hunters in a quest.',
										maxLevel: '3',
										unused: '❌',
										partyEffect: '✅',
									},
									{
										id: '18',
										gem: ezlion.SkillDivaPrayerGem[18],
										effects:
											"Gives Divine Protection, Goddess' Embrace or Soul Revival based on level.",
										maxLevel: '3',
										unused: '❌',
										partyEffect: '❌',
									},
									{
										id: '19',
										gem: ezlion.SkillDivaPrayerGem[19],
										effects:
											'Increases affinity of all weapons based on the level of the song.',
										maxLevel: '3',
										unused: '❌',
										partyEffect: '❌',
									},
									{
										id: '20',
										gem: ezlion.SkillDivaPrayerGem[20],
										effects: 'Increases fire resistance.',
										maxLevel: '3',
										unused: '✅',
										partyEffect: '❌',
									},
									{
										id: '21',
										gem: ezlion.SkillDivaPrayerGem[21],
										effects: 'Increases water resistance.',
										maxLevel: '3',
										unused: '✅',
										partyEffect: '❌',
									},
									{
										id: '22',
										gem: ezlion.SkillDivaPrayerGem[22],
										effects: 'Increases thunder resistance.',
										maxLevel: '3',
										unused: '✅',
										partyEffect: '❌',
									},
									{
										id: '23',
										gem: ezlion.SkillDivaPrayerGem[23],
										effects: 'Increases dragon resistance.',
										maxLevel: '3',
										unused: '✅',
										partyEffect: '❌',
									},
									{
										id: '24',
										gem: ezlion.SkillDivaPrayerGem[24],
										effects: 'Increases ice resistance.',
										maxLevel: '3',
										unused: '✅',
										partyEffect: '❌',
									},
									{
										id: '25',
										gem: ezlion.SkillDivaPrayerGem[25],
										effects: 'Increases resistance to all elements.',
										maxLevel: '2',
										unused: '✅',
										partyEffect: '❌',
									},
								])}
							/>
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
		<SectionHeading level={2} title="Guild Food" />
		<div>
			<p class="spaced-paragraph">
				Guild cooking is available at guild rank 15 in the <InlineTooltip
					text="Guild Hall"
					tooltip="Location"
					icon={LocationIcons.find((e) => e.name === 'Guild Hall')?.icon}
					iconType="file"
				/> and is a mini-game for up to four people. Cooking can activate effects
				independent of armor skills.
			</p>
			<p>
				The skill effect from cooking lasts for 90 minutes. If a new skill is
				obtained, it overwrites the previous effect.
			</p>
			<figure class="centered-figure">
				<img
					width="81"
					height="105"
					src="https://github.com/DorielRivalet/mhfz-overlay/raw/main/demo/buffs.png"
					alt="overlay timers"
				/>
				<figcaption>You can check the duration with the overlay.</figcaption>
			</figure>

			<p class="spaced-paragraph">
				Up to 6 dishes can be stored as "leftovers" for 1 hour at the cat in the
				cooking area.
			</p>
			<p class="spaced-paragraph">
				Yellow ingredients are "base ingredients" and pink ingredients are
				"auxiliary." These allow you to create dishes via the menu. Selecting
				any other option results in a Guild's Yaminabe.
			</p>
			<p class="spaced-paragraph">
				Successfully cooking Guild Food grants a skill with three levels of each
				skill available, and a potential failure option that applies a debuff
				instead of a buff.
			</p>
			<p class="spaced-paragraph">
				During the minigame, press confirm to keep the icon on a meter within
				the blue or green bars. Blue produces the best results, and green
				produces good ones. Cat stamps appear in the top right to indicate your
				performance until the cooking time expires.
			</p>
			<p class="spaced-paragraph">
				By repeatedly pressing confirm, the cursor moves to the right. Hovering
				over the green "Success Area" or blue "Great Success Area" accumulates a
				stamp below the food meter. Green stamps indicate success, and blue
				stamps indicate great success. More participants increase the chance of
				a great success.
			</p>
			<p class="spaced-paragraph">
				Upon completion, the food is sent to the Kitchen Cat, who manages cooked
				food. You will be informed of the buff it grants or asked to replace an
				existing meal if there are no available spots.
			</p>
			<p class="spaced-paragraph">
				Cooked food is available to all guild members after being posted with
				the Kitchen Cat for one hour. The buffs last one hour and thirty
				minutes, giving a maximum of two hours and thirty minutes of skill
				duration per cooking session.
			</p>
			<p class="spaced-paragraph">
				For food with random results, you can keep eating it at the Cat until
				you get the desired skill. The skills available depend on the success
				level, with +20 to elemental resistances in the normal success pool.
			</p>
			<p class="spaced-paragraph">
				Many ingredients can be used for cooking, obtained from the Guild Store
				or the Adventure Boat. The Guild Store requires payment with either
				standard Zeny or <InlineTooltip
					text="Guild Tickets"
					tooltip="Item"
					icon={ItemIcons.find((e) => e.name === 'Ticket')?.icon}
					iconColor={ItemColors.find((e) => e.name === 'Green')?.value}
				/>, while the Adventure Boat relies on RNG with rare items needing
				materials from the <InlineTooltip
					text="Diva Defense"
					tooltip="Event"
					icon={LocationIcons.find((e) => e.name === 'Interception')?.icon}
					iconType="file"
				/> Event.
			</p>
			<p class="spaced-paragraph">
				By claiming rewards from <InlineTooltip
					text="Diva Defense"
					tooltip="Event"
					icon={LocationIcons.find((e) => e.name === 'Interception')?.icon}
					iconType="file"
				/>, you will obtain some materials for the Adventure Boat.
			</p>
			<p class="spaced-paragraph">
				You can send a Felyne to a specific location using the Adventure Boat,
				which is the only way to obtain some items for Guild Special Cooking
				recipes, such as those for the Caring Recipes (prevents hitting other
				players with attacks). Sending out cats costs RP, gained at a rate of 1
				per 30 minutes spent in-game. Rewards depend on several factors and can
				be increased by using <InlineTooltip
					text="Guild Tickets"
					tooltip="Item"
					icon={ItemIcons.find((e) => e.name === 'Ticket')?.icon}
					iconColor={ItemColors.find((e) => e.name === 'Green')?.value}
				/> through the NPC on land after the boat departs.
			</p>
			<p class="spaced-paragraph">
				After the boat returns, claim rewards in front of it. Results vary from
				plain boxes and debris to shining treasures, depending on mission
				success. The boat is out for 6 hours, and all guild members can
				contribute and claim rewards.
			</p>
			<p class="spaced-paragraph">
				There are different cooking modes: normal mode, which doesn't cost any
				<InlineTooltip
					text="Guild Tickets"
					tooltip="Item"
					icon={ItemIcons.find((e) => e.name === 'Ticket')?.icon}
					iconColor={ItemColors.find((e) => e.name === 'Green')?.value}
				/>, and six <InlineTooltip
					text="Guild Ticket"
					tooltip="Item"
					icon={ItemIcons.find((e) => e.name === 'Ticket')?.icon}
					iconColor={ItemColors.find((e) => e.name === 'Green')?.value}
				/> options that alter the results and minigame functions.
			</p>
			<p class="spaced-paragraph">
				Recipes exist for each status you might want, with four result states
				from cooking: Great Failure, Failure, Success, and Great Success. These
				are indicated by the number of stamps collected during the minigame: no
				stamps is a Great Failure, red stamps result in failure, green in
				success, and blue in great success. For fighting Zenith monsters, use
				the Resistance recipes; 55 resistance is required to avoid extreme
				blights, and you can get +83 elemental resistance from a combination of
				SR Skills and Guild Cooking.
			</p>
			<p class="spaced-paragraph">
				Unless you are confident in consistently achieving Great Success, use
				recipes with red ingredients and the Success Level Up cooking option to
				upgrade success into Great Success.
			</p>
		</div>
	</section>

	<section>
		<SectionHeading level={2} title="Bento" />
		<div>
			<p>
				Lunchboxes (or Bentos) are buffs that you set at the quest counter menu,
				right before embarking on a quest.
			</p>
			<p>You can pack a Bento at the appropiate NPC:</p>
			<ul>
				<li>
					The dedicated food store in <InlineTooltip
						text="Mezeporta"
						tooltip="Location"
						icon={LocationIcons.find((e) => e.name === 'Mezeporta')?.icon}
						iconType={'file'}
					/>.
				</li>
				<li>
					The dedicated food store in the <InlineTooltip
						tooltip="Location"
						text="Caravan"
						icon={LocationIcons.find((e) => e.name === 'Caravan')?.icon}
						iconType={'file'}
					/> area.
				</li>
				<li>
					The Guild Store Cat in the <InlineTooltip
						tooltip="Location"
						text="Guild Hall"
						icon={LocationIcons.find((e) => e.name === 'Guild Hall')?.icon}
						iconType={'file'}
					/>.
				</li>
			</ul>

			<section>
				<SectionHeading level={3} title="Recommended Bento" />
				<div class="bento-table">
					<DataTable
						sortable
						zebra
						useStaticWidth
						size="short"
						headers={[
							{ key: 'ingredient1', value: 'Ingredient 1' },
							{ key: 'ingredient2', value: 'Ingredient 2' },
							{ key: 'dish', value: 'Dish' },
							{ key: 'health', value: 'Health' },
							{ key: 'stamina', value: 'Stamina' },
							{ key: 'attack', value: 'Attack' },
							{ key: 'defense', value: 'Defense' },
						]}
						rows={bentoSectionValue}
						><Toolbar
							><div class="toolbar">
								<Dropdown
									titleText="Bento For Armor Skill"
									bind:selectedId={bentoSection}
									items={bentoSectionNames}
								/>
								<CopyButton
									iconDescription={'Copy as CSV'}
									text={getCSVFromArray(bentoSectionValue)}
								/>
							</div>
						</Toolbar>
						<svelte:fragment slot="cell" let:cell>
							{#if cell.key === 'health' || cell.key === 'stamina' || cell.key === 'attack' || cell.key === 'defense'}
								<span
									style={cell.value.includes('-')
										? 'color: var(--ctp-red)'
										: ''}>{cell.value}</span
								>
							{:else}
								<p>{cell.value}</p>
							{/if}
						</svelte:fragment>
					</DataTable>
				</div>
			</section>

			<section>
				<SectionHeading level={3} title="Food Types and Locations" />
				<div>
					<p>Guild Cat Store:</p>
					<ul>
						<li>
							<InlineTooltip
								text="Spirit Mushrooms"
								tooltip="Item"
								iconColor={ItemColors.find((e) => e.name === 'Orange')?.value}
								icon={ItemIcons.find((e) => e.name === 'Mushroom')?.icon}
							/>
						</li>
						<li>
							<InlineTooltip
								text="Frost Tomatoes"
								tooltip="Item"
								iconColor={ItemColors.find((e) => e.name === 'Red')?.value}
								icon={ItemIcons.find((e) => e.name === 'Vegetable')?.icon}
							/>
						</li>
						<li>
							<InlineTooltip
								text="poogie Crackers"
								tooltip="Item"
								iconColor={ItemColors.find((e) => e.name === 'Yellow')?.value}
								icon={ItemIcons.find((e) => e.name === 'Scale')?.icon}
							/>
						</li>
					</ul>
					<p>Lunchbox NPC:</p>
					<ul>
						<li>
							<InlineTooltip
								text="Hot Oil"
								tooltip="Item"
								iconColor={ItemColors.find((e) => e.name === 'Red')?.value}
								icon={ItemIcons.find((e) => e.name === 'Medicine')?.icon}
							/>
						</li>
						<li>
							<InlineTooltip
								text="Power Lard"
								tooltip="Item"
								iconColor={ItemColors.find((e) => e.name === 'Green')?.value}
								icon={ItemIcons.find((e) => e.name === 'Medicine')?.icon}
							/>
						</li>
						<li>
							<InlineTooltip
								text="Fist Rice"
								tooltip="Item"
								icon={ItemIcons.find((e) => e.name === 'Seed')?.icon}
							/>
						</li>
						<li>
							<InlineTooltip
								text="Pepper Bug"
								tooltip="Item"
								iconColor={ItemColors.find((e) => e.name === 'Blue')?.value}
								icon={ItemIcons.find((e) => e.name === 'Bug')?.icon}
							/>
						</li>
						<li>
							<InlineTooltip
								text="Round Egg"
								tooltip="Item"
								iconColor={ItemColors.find((e) => e.name === 'Green')?.value}
								icon={ItemIcons.find((e) => e.name === 'Egg')?.icon}
							/>
						</li>
						<li>
							<InlineTooltip
								text="Predator Honey (Rarely Available)"
								tooltip="Item"
								iconColor={ItemColors.find((e) => e.name === 'Yellow')?.value}
								icon={ItemIcons.find((e) => e.name === 'Medicine')?.icon}
							/>
						</li>
					</ul>
					<p>Town General Store:</p>
					<ul>
						<li>
							<InlineTooltip
								text="Ancient Bean"
								tooltip="Item"
								icon={ItemIcons.find((e) => e.name === 'Seed')?.icon}
							/>
						</li>
						<li>
							<InlineTooltip
								text="Gold Extract"
								tooltip="Item"
								iconColor={ItemColors.find((e) => e.name === 'Yellow')?.value}
								icon={ItemIcons.find((e) => e.name === 'Medicine')?.icon}
							/>
						</li>
					</ul>
					<p>Poogie Farm General Store Lv3:</p>
					<ul>
						<li>
							<InlineTooltip
								text="Predator Honey"
								tooltip="Item"
								iconColor={ItemColors.find((e) => e.name === 'Yellow')?.value}
								icon={ItemIcons.find((e) => e.name === 'Medicine')?.icon}
							/>
						</li>
					</ul>
				</div>
			</section>
		</div>
	</section>

	<section>
		<SectionHeading level={2} title="Exotics" />
		<div>
			<p>
				Only 1 armor piece is needed to activate the armor skill. All weapons
				give Speed Eating. Each Exotic monster has a set of associated G Finesse
				weapon.
			</p>
			<div class="exotics-table">
				<DataTable
					sortable
					useStaticWidth
					zebra
					size="short"
					headers={[
						{ key: 'name', value: 'Name', minWidth: '1rem' },
						{ key: 'armorSkill', value: 'Automatic Skill', minWidth: '1rem' },
					]}
					rows={[
						{
							id: 'Zinogre',
							armorSkill: 'Thunder Attack (Large)',
							name: 'Zinogre',
						},
						{
							id: 'Deviljho',
							armorSkill: 'Starving Wolf+2',
							name: 'Deviljho',
						},
						{
							id: 'Brachydios',
							armorSkill: 'Bomber',
							name: 'Brachydios',
						},

						{
							id: 'Barioth',
							armorSkill: 'Ice Attack (Large)',
							name: 'Barioth',
						},
						{
							id: 'Uragaan',
							armorSkill: 'Guard+2 / Ammo Combiner',
							name: 'Uragaan',
						},
						{
							id: 'Nargacuga',
							armorSkill: 'Evasion+2',
							name: 'Nargacuga',
						},
						{
							id: 'Stygian Zinogre',
							armorSkill: 'Dragon Attack (Large)',
							name: 'Stygian Zinogre',
						},
						{
							id: 'Gore Magala',
							armorSkill: 'Focus+2',
							name: 'Gore Magala',
						},
						{
							id: 'Shagaru Magala',
							armorSkill: 'Status Immunity (Myriad)',
							name: 'Shagaru Magala',
						},
						{
							id: 'Amatsu',
							armorSkill: 'Water Attack (Large)',
							name: 'Amatsu',
						},
						{
							id: 'Seregios',
							armorSkill: 'Critical Eye+5',
							name: 'Seregios',
						},
					]}
					><Toolbar
						><div class="toolbar">
							<CopyButton
								iconDescription={'Copy as CSV'}
								text={getCSVFromArray([
									{
										id: 'Zinogre',
										armorSkill: 'Thunder Attack (Large)',
										name: 'Zinogre',
									},
									{
										id: 'Deviljho',
										armorSkill: 'Starving Wolf+2',
										name: 'Deviljho',
									},
									{
										id: 'Brachydios',
										armorSkill: 'Bomber',
										name: 'Brachydios',
									},

									{
										id: 'Barioth',
										armorSkill: 'Ice Attack (Large)',
										name: 'Barioth',
									},
									{
										id: 'Uragaan',
										armorSkill: 'Guard+2 / Ammo Combiner',
										name: 'Uragaan',
									},
									{
										id: 'Nargacuga',
										armorSkill: 'Evasion+2',
										name: 'Nargacuga',
									},
									{
										id: 'Stygian Zinogre',
										armorSkill: 'Dragon Attack (Large)',
										name: 'Stygian Zinogre',
									},
									{
										id: 'Gore Magala',
										armorSkill: 'Focus+2',
										name: 'Gore Magala',
									},
									{
										id: 'Shagaru Magala',
										armorSkill: 'Status Immunity (Myriad)',
										name: 'Shagaru Magala',
									},
									{
										id: 'Amatsu',
										armorSkill: 'Water Attack (Large)',
										name: 'Amatsu',
									},
									{
										id: 'Seregios',
										armorSkill: 'Critical Eye+5',
										name: 'Seregios',
									},
								])}
							/>
						</div>
					</Toolbar>
					<span slot="title">
						<div class="data-table-title">
							<div>Exotic Skills</div>
						</div>
					</span>
					<svelte:fragment slot="cell" let:cell>
						{#if cell.key === 'name'}
							<InlineTooltip
								icon={MonsterIcons.find((e) => e.name === cell.value)?.icon ??
									''}
								iconType="file"
								tooltip={cell.value}
								text={cell.value}
							/>
						{:else}
							<p>
								{cell.value}
							</p>
						{/if}
					</svelte:fragment>
				</DataTable>
			</div>
		</div>
	</section>

	<section>
		<SectionHeading level={2} title="Origin" />
		<div>
			<p>
				Origin monsters are natural evolutions of the Gou monsters. These are
				required to upgrade Gou armors and weapons beyond G Supremacy level.
			</p>
			<div class="origins-table table-with-pagination">
				<DataTable
					sortable
					zebra
					pageSize={originsTablePageSize}
					page={originsTablePage}
					size="short"
					headers={[
						{ key: 'weapon', value: 'Weapon', minWidth: '1rem' },
						{ key: 'name', value: 'Name', minWidth: '1rem' },
						{ key: 'armorSkill', value: 'Automatic Skill', minWidth: '1rem' },
						{ key: 'monster', value: 'Supremacy Monster', minWidth: '1rem' },
					]}
					rows={[
						{
							id: '1',
							armorSkill: 'Vampirism+2',
							weapon: 'Great Sword',
							name: 'Varusaburosu GS',
							monster: 'Teostra',
						},
						{
							id: '2',
							armorSkill: 'Vampirism+2',
							weapon: 'Long Sword',
							name: 'Teostra LS',
							monster: 'Teostra',
						},
						{
							id: '3',
							armorSkill: 'Vampirism+2',
							weapon: 'Sword and Shield',
							name: 'Varusaburosu SnS',
							monster: 'Aruganosu / Goruganosu',
						},
						{
							id: '4',
							armorSkill: 'Exploit Weakness',
							weapon: 'Dual Swords',
							name: 'Meraginasu DS',
							monster: 'Teostra',
						},
						{
							id: '5',
							armorSkill: 'Vampirism+2',
							weapon: 'Dual Swords',
							name: 'Gureadomosu DS',
							monster: 'Doragyurosu',
						},
						{
							id: '6',
							armorSkill: 'Vampirism+2',
							weapon: 'Hammer',
							name: 'Varusaburosu Hammer',
							monster: 'Teostra',
						},
						{
							id: '7',
							armorSkill: 'Vampirism+2',
							weapon: 'Hunting Horn',
							name: 'Poborubarumu HH',
							monster: 'Doragyurosu',
						},
						{
							id: '8',
							armorSkill: 'Vampirism+2',
							weapon: 'Lance',
							name: 'Varusaburosu Lance',
							monster: 'Teostra',
						},
						{
							id: '9',
							armorSkill: 'Vampirism+2',
							weapon: 'Lance',
							name: 'Varusaburosu Lance',
							monster: 'Aruganosu / Goruganosu',
						},
						{
							id: '10',
							armorSkill: 'Vampirism+2',
							weapon: 'Gunlance',
							name: 'Poborubarumu GL',
							monster: 'Teostra',
						},
						{
							id: '11',
							armorSkill: 'Exploit Weakness',
							weapon: 'Tonfa',
							name: 'Meraginasu Tonfa',
							monster: 'Teostra',
						},
						{
							id: '12',
							armorSkill: 'Vampirism+2',
							weapon: 'Tonfa',
							name: 'Gureadomosu Tonfa',
							monster: 'Teostra',
						},
						{
							id: '13',
							armorSkill: 'Vampirism+2',
							weapon: 'Switch Axe F',
							name: 'Varusaburosu Swaxe',
							monster: 'Aruganosu / Goruganosu',
						},
						{
							id: '14',
							armorSkill: 'Exploit Weakness',
							weapon: 'Light Bowgun',
							name: 'Toa Tesukatora LBG',
							monster: 'Unknown',
						},
						{
							id: '15',
							armorSkill: 'Vampirism+2',
							weapon: 'Light Bowgun',
							name: 'Teostra LBG',
							monster: 'Pariapuria',
						},
						{
							id: '16',
							armorSkill: 'Vampirism+2',
							weapon: 'Heavy Bowgun',
							name: 'Varusaburosu HBG',
							monster: 'Aruganosu / Goruganosu',
						},
						{
							id: '17',
							armorSkill: 'Vampirism+2',
							weapon: 'Bow',
							name: 'Varusaburosu Bow',
							monster: 'Pariapuria',
						},
						{
							id: '18',
							armorSkill: 'Vampirism+2',
							weapon: 'Bow',
							name: 'Poborubarumu Bow',
							monster: 'Pariapuria',
						},
					]}
					><Toolbar size="sm">
						<div class="toolbar">
							<ToolbarSearch
								shouldFilterRows
								value="Vampirism"
								bind:filteredRowIds={originsTableFilteredRowIds}
							/>
							<Button
								size="small"
								icon={Copy}
								on:click={(e) =>
									navigator.clipboard.writeText(
										getCSVFromArray([
											{
												id: '1',
												armorSkill: 'Vampirism+2',
												weapon: 'Great Sword',
												name: 'Varusaburosu GS',
												monster: 'Teostra',
											},
											{
												id: '2',
												armorSkill: 'Vampirism+2',
												weapon: 'Long Sword',
												name: 'Teostra LS',
												monster: 'Teostra',
											},
											{
												id: '3',
												armorSkill: 'Vampirism+2',
												weapon: 'Sword and Shield',
												name: 'Varusaburosu SnS',
												monster: 'Aruganosu / Goruganosu',
											},
											{
												id: '4',
												armorSkill: 'Exploit Weakness',
												weapon: 'Dual Swords',
												name: 'Meraginasu DS',
												monster: 'Teostra',
											},
											{
												id: '5',
												armorSkill: 'Vampirism+2',
												weapon: 'Dual Swords',
												name: 'Gureadomosu DS',
												monster: 'Doragyurosu',
											},
											{
												id: '6',
												armorSkill: 'Vampirism+2',
												weapon: 'Hammer',
												name: 'Varusaburosu Hammer',
												monster: 'Teostra',
											},
											{
												id: '7',
												armorSkill: 'Vampirism+2',
												weapon: 'Hunting Horn',
												name: 'Poborubarumu HH',
												monster: 'Doragyurosu',
											},
											{
												id: '8',
												armorSkill: 'Vampirism+2',
												weapon: 'Lance',
												name: 'Varusaburosu Lance',
												monster: 'Teostra',
											},
											{
												id: '9',
												armorSkill: 'Vampirism+2',
												weapon: 'Lance',
												name: 'Varusaburosu Lance',
												monster: 'Aruganosu / Goruganosu',
											},
											{
												id: '10',
												armorSkill: 'Vampirism+2',
												weapon: 'Gunlance',
												name: 'Poborubarumu GL',
												monster: 'Teostra',
											},
											{
												id: '11',
												armorSkill: 'Exploit Weakness',
												weapon: 'Tonfa',
												name: 'Meraginasu Tonfa',
												monster: 'Teostra',
											},
											{
												id: '12',
												armorSkill: 'Vampirism+2',
												weapon: 'Tonfa',
												name: 'Gureadomosu Tonfa',
												monster: 'Teostra',
											},
											{
												id: '13',
												armorSkill: 'Vampirism+2',
												weapon: 'Switch Axe F',
												name: 'Varusaburosu Swaxe',
												monster: 'Aruganosu / Goruganosu',
											},
											{
												id: '14',
												armorSkill: 'Exploit Weakness',
												weapon: 'Light Bowgun',
												name: 'Toa Tesukatora LBG',
												monster: 'Unknown',
											},
											{
												id: '15',
												armorSkill: 'Vampirism+2',
												weapon: 'Light Bowgun',
												name: 'Teostra LBG',
												monster: 'Pariapuria',
											},
											{
												id: '16',
												armorSkill: 'Vampirism+2',
												weapon: 'Heavy Bowgun',
												name: 'Varusaburosu HBG',
												monster: 'Aruganosu / Goruganosu',
											},
											{
												id: '17',
												armorSkill: 'Vampirism+2',
												weapon: 'Bow',
												name: 'Varusaburosu Bow',
												monster: 'Pariapuria',
											},
											{
												id: '18',
												armorSkill: 'Vampirism+2',
												weapon: 'Bow',
												name: 'Poborubarumu Bow',
												monster: 'Pariapuria',
											},
										]),
									)}
								kind="ghost">Copy</Button
							>
						</div>
					</Toolbar>
					<span slot="title">
						<div class="data-table-title">
							<div>Recommended Origin Weapons</div>
						</div>
					</span>
					<svelte:fragment slot="cell" let:cell>
						{#if cell.key === 'monster'}
							<InlineTooltip
								icon={MonsterIcons.find((e) => e.name === cell.value)?.icon ??
									''}
								iconType="file"
								tooltip={cell.value}
								text={cell.value}
							/>
						{:else if cell.key === 'weapon'}
							<InlineTooltip
								icon={WeaponTypes.find((e) => e.name === cell.value)?.icon ??
									''}
								tooltip={cell.value}
								text={cell.value}
							/>
						{:else}
							<p>{cell.value}</p>
						{/if}
					</svelte:fragment>
				</DataTable>
				<Pagination
					pageSizes={[5, 10, 20]}
					bind:pageSize={originsTablePageSize}
					bind:page={originsTablePage}
					totalItems={originsTableFilteredRowIds.length}
				/>
			</div>
		</div>
	</section>

	<section>
		<SectionHeading level={2} title="Burst" />
		<div>
			<p>
				Burst monsters are natural evolutions of the Gou monsters. These are
				required to upgrade Gou armors and weapons beyond G Supremacy level.
			</p>
		</div>
	</section>

	<section>
		<SectionHeading level={2} title="Raviente" />
		<div></div>
	</section>

	<section>
		<SectionHeading level={2} title="Zeniths" />
		<div></div>
	</section>

	<section>
		<SectionHeading level={2} title="Shitens" />
		<div></div>
	</section>

	<section>
		<SectionHeading level={2} title="Musous" />
		<div></div>
	</section>

	<section>
		<SectionHeading level={2} title="Conquest" />
		<div></div>
	</section>

	<section>
		<SectionHeading level={2} title="Transcend" />
		<div></div>
	</section>

	<section>
		<SectionHeading level={2} title="Elements" />
		<div class="elements-section">
			<p>
				Combo elements are equivalent to having from two to three of them but at
				a percentage of your elemental value. For visual effects, the element
				that deals the most damage will take precedence. <InlineTooltip
					text="Gunlance's"
					tooltip="Weapon"
					icon={WeaponTypes.find((e) => e.name === 'Gunlance')?.icon}
				/> heatblade alternates the effect.
			</p>
			<p>
				With Transcendence bursts, there is a hierarchy on which elements take
				precedence first. The order is <InlineTooltip
					text="Fire"
					tooltip="Element"
					icon={ElementIcons.find((e) => e.name === 'Fire')?.icon}
				/> > <InlineTooltip
					text="Water"
					tooltip="Element"
					icon={ElementIcons.find((e) => e.name === 'Water')?.icon}
				/> > <InlineTooltip
					text="Thunder"
					tooltip="Element"
					icon={ElementIcons.find((e) => e.name === 'Thunder')?.icon}
				/> > <InlineTooltip
					text="Ice"
					tooltip="Element"
					icon={ElementIcons.find((e) => e.name === 'Ice')?.icon}
				/> > <InlineTooltip
					text="Dragon"
					tooltip="Element"
					icon={ElementIcons.find((e) => e.name === 'Dragon')?.icon}
				/>.
			</p>
			<p>
				Negative elemental hitzones will still apply their raw penalty normally
				if the 'wrong' element is involved. Owning <InlineTooltip
					text="Solid Determination"
					tooltip="Armor Skill"
					icon={getTag('Armor Skill')?.icon}
				/> will brute force all elements involved, using the weapon's <InlineTooltip
					text="Dissolver"
					tooltip="Armor Skill"
					icon={getTag('Armor Skill')?.icon}
				/> modifier.
			</p>
			<div class="elements-table">
				<DataTable
					sortable
					zebra
					useStaticWidth
					size="short"
					headers={[
						{ key: 'name', value: 'Name', minWidth: '1rem' },
						{ key: 'composition', value: 'Composition', minWidth: '8rem' },
						{ key: 'origin', value: 'Origin', minWidth: '1rem' },
					]}
					rows={[
						{
							id: 'Light',
							composition: '70% Fire, 70% Thunder',
							origin: 'Zerureusu',
							name: 'Light',
						},
						{
							id: 'Blaze',
							origin: 'None',
							name: 'Blaze',
							composition: '70% Fire, 70% Dragon',
						},
						{
							id: 'Tenshou',
							origin: 'Shantien',
							name: 'Tenshou',
							composition: '30% Fire, 100% Water, 70% Thunder',
						},
						{
							id: 'Lightning Rod',
							origin: 'Rebidiora',
							name: 'Lightning Rod',
							composition: '70% Thunder, 70% Dragon',
						},
						{
							id: 'Okiko',
							origin: 'Disufiroa',
							name: 'Okiko',
							composition: '80% Fire, 80% Ice, 40% Dragon',
						},
						{
							id: 'Black Flame',
							origin: 'Fatalis',
							name: 'Black Flame',
							composition: '50% Fire, 150% Dragon',
						},
						{
							id: 'Crimson Demon',
							origin: 'Crimson Fatalis',
							name: 'Crimson Demon',
							composition: '50% Dragon, 150% Fire',
						},
						{
							id: 'Dark',
							origin: 'Meraginasu',
							name: 'Dark',
							composition: '80% Ice, 80% Dragon',
						},
						{
							id: 'Music',
							origin: 'Diva',
							name: 'Music',
							composition: '100% Water, 100% Ice',
						},
						{
							id: 'Sound',
							origin: 'Diva',
							name: 'Sound',
							composition: '100% Water, 100% Dragon',
						},
						{
							id: 'Wind',
							origin: 'Garuba Daora',
							name: 'Wind',
							composition: '80% Thunder, 80% Ice',
						},
						{
							id: 'Burning Zero',
							origin: 'Elzelion',
							name: 'Burning Zero',
							composition: '125% Fire, 125% Ice',
						},
						{
							id: "Emperor's Roar",
							origin: 'White Fatalis',
							name: "Emperor's Roar",
							composition: '150% Thunder, 50% Dragon',
						},
					]}
					><Toolbar
						><div class="toolbar">
							<CopyButton
								iconDescription={'Copy as CSV'}
								text={getCSVFromArray([
									{
										id: 'Light',
										composition: '70% Fire, 70% Thunder',
										origin: 'Zerureusu',
										name: 'Light',
									},
									{
										id: 'Blaze',
										origin: 'None',
										name: 'Blaze',
										composition: '70% Fire, 70% Dragon',
									},
									{
										id: 'Tenshou',
										origin: 'Shantien',
										name: 'Tenshou',
										composition: '30% Fire, 100% Water, 70% Thunder',
									},
									{
										id: 'Lightning Rod',
										origin: 'Rebidiora',
										name: 'Lightning Rod',
										composition: '70% Thunder, 70% Dragon',
									},
									{
										id: 'Okiko',
										origin: 'Disufiroa',
										name: 'Okiko',
										composition: '80% Fire, 80% Ice, 40% Dragon',
									},
									{
										id: 'Black Flame',
										origin: 'Fatalis',
										name: 'Black Flame',
										composition: '50% Fire, 150% Dragon',
									},
									{
										id: 'Crimson Demon',
										origin: 'Crimson Fatalis',
										name: 'Crimson Demon',
										composition: '50% Dragon, 150% Fire',
									},
									{
										id: 'Dark',
										origin: 'Meraginasu',
										name: 'Dark',
										composition: '80% Ice, 80% Dragon',
									},
									{
										id: 'Music',
										origin: 'Diva',
										name: 'Music',
										composition: '100% Water, 100% Ice',
									},
									{
										id: 'Sound',
										origin: 'Diva',
										name: 'Sound',
										composition: '100% Water, 100% Dragon',
									},
									{
										id: 'Wind',
										origin: 'Garuba Daora',
										name: 'Wind',
										composition: '80% Thunder, 80% Ice',
									},
									{
										id: 'Burning Zero',
										origin: 'Elzelion',
										name: 'Burning Zero',
										composition: '125% Fire, 125% Ice',
									},
									{
										id: "Emperor's Roar",
										origin: 'White Fatalis',
										name: "Emperor's Roar",
										composition: '150% Thunder, 50% Dragon',
									},
								])}
							/>
						</div>
					</Toolbar>
					<span slot="title">
						<div class="data-table-title">
							<div>Combo Elements</div>
						</div>
					</span>
					<svelte:fragment slot="cell" let:cell>
						{#if cell.key === 'name'}
							<InlineTooltip
								icon={ElementIcons.find((e) => e.name === cell.value)?.icon}
								tooltip={'Element'}
								text={cell.value}
							/>
						{:else if cell.key === 'origin'}
							<InlineTooltip
								icon={MonsterIcons.find((e) => e.name === cell.value)?.icon ??
									''}
								iconType="file"
								tooltip={cell.value}
								text={cell.value}
							/>
						{:else if cell.key === 'composition'}
							{#each getElementArray(cell.value) as element}
								<InlineTooltip
									icon={ElementIcons.find((e) => e.name === element.name)
										?.icon ?? ''}
									tooltip={'Element'}
									text={`${element.value} ${element.name}`}
								/>
							{/each}
						{:else}
							<p>{cell.value}</p>
						{/if}
					</svelte:fragment>
				</DataTable>
			</div>
		</div>
	</section>

	<section>
		<SectionHeading level={2} title="Ailments" />
		<section>
			<SectionHeading level={3} title="Monster Status Immunities" />
			<div>
				<div class="datatable-container">
					<DataTable
						sortable
						useStaticWidth
						zebra
						size="short"
						headers={[
							{ key: 'name', value: 'Name', minWidth: '1rem' },
							{ key: 'immunities', value: 'Immunities', minWidth: '1rem' },
						]}
						rows={[
							{
								id: '1',
								immunities: 'Paralysis',
								name: 'Kirin',
							},
							{
								id: '2',
								immunities: 'Poison,Paralysis,Sleep',
								name: 'Lao-Shan Lung',
							},
							{
								id: '3',
								immunities: 'Poison',
								name: 'Yian Garuga',
							},
							{
								id: '4',
								immunities: 'Poison,Paralysis,Sleep',
								name: 'Shen Gaoren',
							},
							{
								id: '5',
								immunities: 'Poison,Paralysis,Sleep',
								name: 'Yama Tsukami',
							},
							{
								id: '6',
								immunities: 'Poison',
								name: 'Espinas',
							},
							{
								id: '7',
								immunities: 'Poison,Paralysis,Sleep',
								name: 'Akura Vashimu',
							},

							{
								id: '8',
								immunities: 'Poison,Paralysis,Sleep',
								name: 'Akura Jebia',
							},
							{
								id: '9',
								immunities: 'Paralysis,Sleep',
								name: 'Berukyurosu',
							},
							{
								id: '10',
								immunities: 'Poison,Paralysis,Sleep',
								name: 'Pariapuria',
							},
							{
								id: '11',
								immunities: 'Poison,Paralysis,Sleep,Blast',
								name: 'Raviente',
							},
							{
								id: '12',
								immunities: 'Paralysis,Sleep',
								name: 'Doragyurosu',
							},
							{
								id: '13',
								immunities: 'Poison,Paralysis',
								name: 'Baruragaru',
							},
							{
								id: '14',
								immunities: 'Sleep',
								name: 'Inagami',
							},
							{
								id: '15',
								immunities: 'Poison,Paralysis,Sleep',
								name: 'Duremudira',
							},
							{
								id: '16',
								immunities: 'Sleep',
								name: 'Varusaburosu',
							},
							{
								id: '17',
								immunities: 'Poison',
								name: 'Gasurabazura',
							},
							{
								id: '18',
								immunities: 'Poison,Paralysis,Sleep',
								name: 'Yama Kurai',
							},
							{
								id: '19',
								immunities: 'Sleep',
								name: 'Keoaruboru',
							},
						]}
						><Toolbar
							><div class="toolbar">
								<CopyButton
									iconDescription={'Copy as CSV'}
									text={getCSVFromArray([
										{
											id: '1',
											immunities: 'Paralysis',
											name: 'Kirin',
										},
										{
											id: '2',
											immunities: 'Poison,Paralysis,Sleep',
											name: 'Lao-Shan Lung',
										},
										{
											id: '3',
											immunities: 'Poison',
											name: 'Yian Garuga',
										},
										{
											id: '4',
											immunities: 'Poison,Paralysis,Sleep',
											name: 'Shen Gaoren',
										},
										{
											id: '5',
											immunities: 'Poison,Paralysis,Sleep',
											name: 'Yama Tsukami',
										},
										{
											id: '6',
											immunities: 'Poison',
											name: 'Espinas',
										},
										{
											id: '7',
											immunities: 'Poison,Paralysis,Sleep',
											name: 'Akura Vashimu',
										},

										{
											id: '8',
											immunities: 'Poison,Paralysis,Sleep',
											name: 'Akura Jebia',
										},
										{
											id: '9',
											immunities: 'Paralysis,Sleep',
											name: 'Berukyurosu',
										},
										{
											id: '10',
											immunities: 'Poison,Paralysis,Sleep',
											name: 'Pariapuria',
										},
										{
											id: '11',
											immunities: 'Poison,Paralysis,Sleep,Blast',
											name: 'Raviente',
										},
										{
											id: '12',
											immunities: 'Paralysis,Sleep',
											name: 'Doragyurosu',
										},
										{
											id: '13',
											immunities: 'Poison,Paralysis',
											name: 'Baruragaru',
										},
										{
											id: '14',
											immunities: 'Sleep',
											name: 'Inagami',
										},
										{
											id: '15',
											immunities: 'Poison,Paralysis,Sleep',
											name: 'Duremudira',
										},
										{
											id: '16',
											immunities: 'Sleep',
											name: 'Varusaburosu',
										},
										{
											id: '17',
											immunities: 'Poison',
											name: 'Gasurabazura',
										},
										{
											id: '18',
											immunities: 'Poison,Paralysis,Sleep',
											name: 'Yama Kurai',
										},
										{
											id: '19',
											immunities: 'Sleep',
											name: 'Keoaruboru',
										},
									])}
								/>
							</div>
						</Toolbar>
						<svelte:fragment slot="cell" let:cell>
							{#if cell.key === 'name'}
								<InlineTooltip
									icon={MonsterIcons.find((e) => e.name === cell.value)?.icon}
									tooltip={'Monster'}
									iconType={'file'}
									text={cell.value}
								/>
							{:else if cell.key === 'immunities'}
								{#each getStatusArray(cell.value) as status}
									<InlineTooltip
										icon={StatusIcons.find((e) => e.name === status)?.icon ??
											''}
										tooltip={'Status'}
										text={`${status}`}
									/>
								{/each}
							{:else}
								<p>{cell.value}</p>
							{/if}
						</svelte:fragment>
					</DataTable>
				</div>
				<p>
					Subspecies and Zeniths are also immune, except <InlineTooltip
						tooltip="Monster"
						text="Doragyurosu"
						icon={MonsterIcons.find((e) => e.name === 'Doragyurosu')?.icon}
						iconType={'file'}
					/> which is immune to these statuses only in G Rank, and also as a Zenith.
				</p>
				<p>
					Only support can inflict poison to <InlineTooltip
						tooltip="Monster"
						text="Raviente"
						iconType={'file'}
						icon={MonsterIcons.find((e) => e.name === 'Raviente')?.icon}
					/>.
				</p>
			</div>
		</section>
	</section>

	<section>
		<SectionHeading level={2} title="Skill Slots" />
		<div></div>
	</section>

	<section>
		<SectionHeading level={2} title="Monster Hitzones" />
		<div></div>
	</section>

	<section>
		<SectionHeading level={2} title="Hunting Horn Notes" />
		<div></div>
	</section>

	<section>
		<SectionHeading level={2} title="HBG Heat Beam" />
		<div></div>
	</section>

	<section>
		<SectionHeading level={2} title="Bitfields" />
		<div></div>
	</section>

	<section>
		<SectionHeading level={2} title="Inputs Logs" />
		<div></div>
	</section>
</div>

<style lang="scss">
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

	.toolbar {
		padding: 1rem;
		display: flex;
		align-items: center;
		gap: 1rem;
		flex-grow: 1;
		flex-shrink: 1;
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

	.weapon-icon {
		width: var(--cds-spacing-09);
	}

	.container-buttons {
		grid-area: container-buttons;
		gap: 1rem;
		display: flex;
		align-items: start;
		flex-direction: column;
	}

	.buttons-top,
	.buttons-bottom {
		display: flex;
		gap: 2rem;
		align-items: center;
		flex-wrap: wrap;
	}

	.number-input-container {
		margin-right: 1rem;
	}

	.inputs-1,
	.inputs-2,
	.inputs-3 {
		max-height: 48rem;
		overflow-y: auto;
		overflow-x: auto;
		border-radius: 10px 10px 10px 10px;
		border: 1px solid var(--ctp-surface0);
		background-color: var(--ctp-mantle);
	}

	.damage-calculator {
		display: flex;
		flex-direction: column;
		gap: 2rem;
	}

	.container-inputs {
		display: grid;
		gap: 1rem;
	}

	@media (min-width: 320px) {
		.container-inputs {
			grid-template-columns: 1fr;
		}
	}

	@media (min-width: 672px) {
		.container-inputs {
			grid-template-columns: 1fr 1fr;
		}
	}

	@media (min-width: 1056px) {
		.container-inputs {
			grid-template-columns: 1fr 1fr 1fr;
		}
	}

	.motion-values {
		overflow-x: auto;
	}

	.attack {
		grid-area: attack;
	}

	.affinity {
		grid-area: affinity;
	}

	.total-attack {
		grid-area: total-attack;
	}

	.fire {
		grid-area: fire;
		color: var(--ctp-red);
		text-shadow:
			-1px -1px 0 #000,
			1px -1px 0 #000,
			-1px 1px 0 #000,
			1px 1px 0 #000;
	}

	.water {
		grid-area: water;
		color: var(--ctp-blue);
		text-shadow:
			-1px -1px 0 #000,
			1px -1px 0 #000,
			-1px 1px 0 #000,
			1px 1px 0 #000;
	}

	.thunder {
		grid-area: thunder;
		color: var(--ctp-yellow);
		text-shadow:
			-1px -1px 0 #000,
			1px -1px 0 #000,
			-1px 1px 0 #000,
			1px 1px 0 #000;
	}

	.ice {
		grid-area: ice;
		color: var(--ctp-sky);
		text-shadow:
			-1px -1px 0 #000,
			1px -1px 0 #000,
			-1px 1px 0 #000,
			1px 1px 0 #000;
	}

	.dragon {
		grid-area: dragon;
		color: var(--ctp-mauve);
		text-shadow:
			-1px -1px 0 #000,
			1px -1px 0 #000,
			-1px 1px 0 #000,
			1px 1px 0 #000;
	}

	.attack-ceiling {
		grid-area: attack-ceiling;
	}

	.status {
		grid-area: status;
	}

	.my-missions {
		grid-area: my-missions;
	}

	.total-attack,
	.my-missions,
	.attack-ceiling {
		font-weight: bold;
		display: flex;
		justify-content: center;
		align-items: center;
	}

	.calculator-results {
		grid-area: stats;
		display: flex;
		flex-direction: column;
		gap: 1rem;
		border-radius: 10px 10px 10px 10px;
		border: 1px solid var(--ctp-surface0);
		padding-bottom: 1rem;
		background-color: var(--ctp-mantle);
		margin-bottom: 2rem;
	}

	.container-shiki {
		height: auto;
		max-width: 80vw;
		height: 256px;
	}

	.shiki-code {
		width: 100%;
	}

	.shiki-loading {
		width: 256px;
	}

	.stats-values {
		display: grid;
		gap: 1rem;
		grid-template-areas:
			'attack affinity total-attack'
			'fire water total-attack'
			'thunder ice attack-ceiling'
			'dragon status my-missions';
		text-align: center;
		font-weight: bold;
		font-size: 1.25rem;
		background-color: var(--ctp-mantle);
	}

	.stats-header {
		font-weight: bold;
		background-color: var(--ctp-crust);
		text-align: center;
		padding: var(--cds-spacing-04);
		border-radius: 10px 10px 0px 0px;
		border: 1px solid var(--ctp-surface0);
	}

	.input-sections-container {
		display: flex;
		flex-direction: column;
		gap: var(--cds-spacing-06);
		background-color: var(--ctp-mantle);
		margin-bottom: 2rem;
	}

	.input-section {
		display: flex;
		flex-direction: column;
		gap: var(--cds-spacing-02);
		background-color: var(--ctp-mantle);
	}

	.inputs-group-column {
		display: flex;
		flex-direction: column;
		gap: var(--cds-spacing-02);
		padding-left: 1rem;
		padding-right: 1rem;
		padding-top: 1rem;
	}

	.small-header {
		font-weight: bold;
		background-color: var(--ctp-crust);
		text-align: center;
		padding: var(--cds-spacing-04);
		border: 1px solid var(--ctp-surface0);
		border-radius: 10px 10px 0px 0px;
	}

	.container-arena {
		display: grid;
		grid-template-areas:
			'container-buttons container-buttons container-buttons'
			'stats stats stats'
			'motion-values motion-values motion-values'
			'inputs-left inputs-middle inputs-right';
		grid-template-columns: 1fr 1fr 1fr;
		gap: var(--cds-spacing-08);
	}

	.ice-age-tables-container {
		display: flex;
		flex-wrap: wrap;
		gap: 1rem;
		margin-bottom: 2rem;
		align-items: start;
	}

	.ice-age-table-stages {
		grid-area: ice-age-table-stages;
	}

	.ice-age-descriptions {
		grid-area: ice-age-descriptions;
		display: flex;
		gap: 1rem;
		flex-direction: column;
	}

	.ice-age-table-hits {
		grid-area: ice-age-table-hits;
	}

	.elements-table,
	.origins-table,
	.exotics-table {
		margin-top: 2rem;
	}

	.datatable-bottom {
		margin-top: 2rem;
	}

	@media (min-width: 320px) {
		.ice-age-calculator {
			display: flex;
			flex-direction: column;
			gap: 1rem;
		}
	}

	@media (min-width: 1056px) {
		.ice-age-calculator {
			display: grid;
			grid-template-columns: 1fr 1fr 1fr;
			gap: 1rem;
			align-items: center;
		}
	}

	.modal-mobile-popover-image {
		max-width: 100%; /* Ensures the image does not exceed the width of its container */
		max-height: 100%; /* Ensures the image does not exceed the height of its container */
		object-fit: cover; /* Ensures the image covers the area without distorting its aspect ratio */
		display: inline-block; /* Removes any extra space below the image */
	}

	.modal-mobile-container hr {
		width: 100%;
		margin-bottom: 0;
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

	.modal-mobile-container a {
		font-family: var(--font-body);
		font-size: 1rem;
		color: var(--ctp-text);
		text-decoration: none;
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

	.modal-mobile-tag1,
	.modal-mobile-tag2,
	.modal-mobile-tag3 {
		display: -webkit-box;
		-webkit-line-clamp: 1; /* number of lines to show */
		line-clamp: 1;
		-webkit-box-orient: vertical;
		overflow: hidden;
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

	.datatable-container {
		margin-top: 2rem;
		margin-bottom: 2rem;
	}

	.active-feature-section {
		display: flex;
		flex-direction: column;
		gap: 1rem;
	}

	.active-feature-description {
		display: flex;
		flex-direction: column; /* Stacks children vertically */
		gap: 2rem;
	}

	.bento-table,
	.exotics-table,
	.origins-table,
	.ice-age-table-hits,
	.sharpness-table,
	.guild-poogie-table,
	.diva-prayer-gems-table {
		display: flex;
		flex-wrap: wrap;
		overflow-x: auto;
		max-width: 90vw;
	}

	.ice-age-formula {
		max-width: 80vw;
		overflow-x: auto;
	}

	.table-with-pagination {
		display: flex;
		flex-direction: column;
	}

	.origins-table {
		max-width: 800px;
	}

	.sharpness-bar-container {
		display: flex;
		justify-content: stretch;
		align-items: stretch;
		width: 100%;
		height: 100%;
	}
</style>
