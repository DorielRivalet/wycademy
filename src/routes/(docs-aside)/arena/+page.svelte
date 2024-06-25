<script lang="ts">
	import {
		HuntingHornWeaponNotesCombinations, // TODO in hunter notes
		ItemColors,
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
		bentoValues,
		LocationIcons,
		oldBlademasterSharpness,
		greatSwordCharges,
		obscurityValues,
		affinityBaseCritMultiplierBonusDropdownItems,
		legacyCalculatorKeysMap,
		legacyCalculatorNumberInputs,
		legacyCalculatorValuesMap,
		monsterStatusDropdownOptions,
		elementDropdownItems,
		bowChargeLevels,
		divaPrayerGems,
		divaPrayerGemsDropdownItems,
	} from '$lib/client/modules/frontier/objects';
	import DivaPrayerGem from '$lib/client/components/frontier/icon/DivaPrayerGem.svelte';
	import NumberInput from 'carbon-components-svelte/src/NumberInput/NumberInput.svelte';
	import Toggle from 'carbon-components-svelte/src/Toggle/Toggle.svelte';
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
	import type {
		FrontierDivaPrayerGemSkillName,
		FrontierWeaponClass,
		FrontierWeaponName,
		FrontierWeaponStyle,
	} from 'ezlion';
	import type {
		FrontierDivaPrayerGemLevel,
		FrontierElement,
		FrontierMotionValue,
		FrontierMotionValueSection,
		FrontierRarity,
		FrontierStatus,
		FrontierWeaponSharpness,
		TagColor,
	} from '$lib/client/modules/frontier/types';
	import Dropdown from 'carbon-components-svelte/src/Dropdown/Dropdown.svelte';
	import { WeaponTypes } from '$lib/client/modules/frontier/objects';
	import Toolbar from 'carbon-components-svelte/src/DataTable/Toolbar.svelte';
	import Modal from 'carbon-components-svelte/src/Modal/Modal.svelte';
	import Image from 'carbon-icons-svelte/lib/Image.svelte';
	import Download from 'carbon-icons-svelte/lib/Download.svelte';
	import OutboundLink from 'carbon-components-svelte/src/Link/OutboundLink.svelte';
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
	import {
		getDivaPrayerGemColor,
		getItemIcon,
		getMonster,
		getTag,
		getWeaponIcon,
	} from '$lib/client/modules/frontier/functions';
	import InlineToggletip from '$lib/client/components/frontier/InlineToggletip.svelte';
	import InlineTooltip from '$lib/client/components/frontier/InlineTooltip.svelte';
	import '@carbon/charts-svelte/styles.css';
	import { onMount, type ComponentType } from 'svelte';
	import { ScaleTypes, type LineChartOptions } from '@carbon/charts-svelte';
	import type { LineChart } from '@carbon/charts-svelte';
	import Tag from 'carbon-components-svelte/src/Tag/Tag.svelte';
	import IceAgeStage1Animation from '$lib/client/images/weapon/motion/sword_and_shield_none_jump_slash.webp';
	import IceAgeStage2Animation from '$lib/client/images/weapon/motion/sword_and_shield_none_jump_slash.webp';
	import IceAgeStage3Animation from '$lib/client/images/weapon/motion/sword_and_shield_none_jump_slash.webp';
	import SharpnessBar from '$lib/client/components/frontier/SharpnessBar.svelte';
	import ezlion from 'ezlion';
	import ImageDialog from '$lib/client/components/ImageDialog.svelte';
	import { type BundledLanguage } from 'shiki/langs';
	import Tooltip from 'carbon-components-svelte/src/Tooltip/Tooltip.svelte';
	import UnorderedList from 'carbon-components-svelte/src/UnorderedList/UnorderedList.svelte';
	import ListItem from 'carbon-components-svelte/src/ListItem/ListItem.svelte';
	import OrderedList from 'carbon-components-svelte/src/OrderedList/OrderedList.svelte';
	import { domToPng } from 'modern-screenshot';
	import slugify from 'slugify';
	import { crossfade } from 'svelte/transition';
	import { quintOut } from 'svelte/easing';
	import Link from 'carbon-components-svelte/src/Link/Link.svelte';
	import { getCSVFromArray } from '$lib/client/modules/csv';

	let flashConversionChartLoaded = false;
	let flashConversionChart: ComponentType<LineChart>;

	function generateFlashConversionChartData(
		naturalAffinity: number,
		critConversionUpMultiplier: number,
	) {
		const minAffinity = 100;
		const maxAffinity = 500;
		const step = 10;
		let data = [];
		for (let index = minAffinity; index <= maxAffinity; index = index + step) {
			let obj = {
				group: 'Dataset 1',
				affinity: index,
				trueRaw:
					Math.floor(Math.sqrt(Math.max(index - 100, 0)) * 7) +
					Math.floor(
						Math.sqrt(Math.max(naturalAffinity, 0)) *
							critConversionUpMultiplier,
					),
			};
			data.push(obj);
		}
		return data;
	}

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

	onMount(async () => {
		const charts = await import('@carbon/charts-svelte');
		flashConversionChart = charts.LineChart;
		flashConversionChartLoaded = true;
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

	function getWeaponSectionNames(
		weaponName: FrontierWeaponName,
		style: FrontierWeaponStyle,
	) {
		let result: { id: string; text: string }[] = [];

		let sections = getSectionNamesByWeapon(weaponName, style);

		if (sections.length > 0) {
			sections.forEach((element) => {
				result.push({ id: element, text: element });
			});

			return result;
		} else {
			result.push({ id: 'None', text: 'None' });
			return result;
		}
	}

	function getSectionNamesByWeapon(
		weaponName: FrontierWeaponName,
		style: FrontierWeaponStyle,
	) {
		// Find the weapon by name
		const weapon = weaponMotionValues.find((w) => w.name === weaponName);
		if (!weapon) {
			// Return an empty array or an error message if the weapon is not found
			return []; // or throw new Error('Weapon not found');
		}

		const hasSections =
			weapon.sections.filter((section) => section.style === style).length > 0;

		if (hasSections) {
			// Map over the sections of the found weapon to extract their names
			const sectionNames = weapon.sections
				.filter((section) => section.style === style)
				.map((section) => section.name);

			// Return the array of section names
			return sectionNames;
		} else {
			return [];
		}
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
		let weapon = WeaponTypes.find((w) => w.name === weaponType);
		if (!weapon) {
			return 0;
		}

		switch (statusType) {
			case 'Poison':
				return weapon.statusAssaultPoison;
			case 'Paralysis':
				return weapon.statusAssaultParalysis;
			default:
				return 0;
		}
	}

	let showWeaponMotionValuesSectionWarning = false;
	let showDamageCalculatorInputsJSONError = false;
	let showDamageCalculatorLegacyInputsJSONError = false;
	let showDivaPrayerGemsMaxTotalLevelError = false;

	type MotionValueResult = {
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
	};

	function downloadMotionValuesImage() {
		if (!browser) return;
		let node = document.getElementById('motion-values-dom');
		if (!node) return;
		domToPng(node, { quality: 1 }).then((dataUrl) => {
			const link = document.createElement('a');
			link.download = `${slugify(
				`${inputWeaponType}-Motion-Values-${new Date().toISOString()}.png`,
			)}`;
			link.href = dataUrl;
			link.click();
		});
	}

	function downloadSharedMotionValuesImage() {
		if (!browser) return;
		let node = document.getElementById('shared-motion-values-dom');
		if (!node) return;
		domToPng(node, { quality: 1 }).then((dataUrl) => {
			const link = document.createElement('a');
			link.download = `${slugify(
				`${inputWeaponType}-Shared-Motion-Values-${new Date().toISOString()}.png`,
			)}`;
			link.href = dataUrl;
			link.click();
		});
	}

	/**TODO could be optimized too. bowchargeQuick = bowQuickShotChargeLevel, quickshotmode = outputQuickShotChargeModifier*/
	function getShotValues(
		specialFlag: string,
		bowQuickShotChargeLevel: number,
		bowChargeLevels:
			| undefined
			| {
					chargeModifier: string;
					levels: { raw: number; element: number };
			  },
		outputQuickShotChargeModifier: number,
		inputElement: FrontierElement,
		criticalMultiplier: number,
		motionValue: number,
		criticalDistanceMultiplier: number,
		inputBulletStrengthModifier: string,
		motionValueName: string,
		shotAdjustedMotionValue: number,
	): {
		bombValues: number;
		bulletStrengthModifier: number;
		quickShotChargeModifier: number;
		dragonShotValue: number;
		fireShotValue: number;
		waterShotValue: number;
		iceShotValue: number;
		thunderShotValue: number;
		bowSigilAddedValue: number;
		bowQuickShotChargeLevel: number;
		bowChargeRawLevel: number;
		bowChargeElementLevel: number;
		criticalMultiplier: number;
		motionValue: number;
		criticalDistanceMultiplier: number;
		shotAdjustedMotionValue: number;
	} {
		let bulletStrengthModifier = 1;

		let result = {
			bombValues: 0,
			bulletStrengthModifier: bulletStrengthModifier,
			quickShotChargeModifier: outputQuickShotChargeModifier,
			dragonShotValue: 0,
			fireShotValue: 0,
			waterShotValue: 0,
			iceShotValue: 0,
			thunderShotValue: 0,
			bowSigilAddedValue: 0,
			bowQuickShotChargeLevel: bowQuickShotChargeLevel,
			bowChargeRawLevel: bowChargeLevels?.levels.raw ?? 0,
			bowChargeElementLevel: bowChargeLevels?.levels.element ?? 0,
			criticalMultiplier: criticalMultiplier,
			motionValue: motionValue,
			criticalDistanceMultiplier: criticalDistanceMultiplier,
			shotAdjustedMotionValue: shotAdjustedMotionValue,
		};

		switch (specialFlag) {
			case 'melee': // TODO legacy is wrong maybe
				return {
					...result,
					criticalDistanceMultiplier: 0.6,
					bulletStrengthModifier: 1.0,
					bowChargeRawLevel: 1.0,
					bowChargeElementLevel: 0.6,
					bowQuickShotChargeLevel: 1,
					quickShotChargeModifier: 1,
				};
			case 'bowsigil':
				if (
					inputElement !== 'None' ||
					bowChargeLevels === undefined ||
					bowChargeLevels.chargeModifier === 'Crouched Lv1 (0.48x / 0.7x)' ||
					bowChargeLevels.chargeModifier === 'Crouched Lv2 (1.3x / 0.8x)' ||
					bowChargeLevels.chargeModifier === 'Crouched Lv3 (2.1x / 1.2x)' ||
					bowChargeLevels.chargeModifier === 'Crouched Lv4 (2.59x / 1.334x)' ||
					bowChargeLevels.chargeModifier ===
						'Uncharged Rising Shot (0.4x / 1.0x)' ||
					bowChargeLevels.chargeModifier === 'Charged Rising Shot (1.0x / 1.5x)'
				) {
					return {
						...result,
						bowChargeRawLevel: bowChargeLevels?.levels?.raw ?? 0,
						bowChargeElementLevel: bowChargeLevels?.levels?.element ?? 0,
					};
				}

				const bowRawSigilChargeMultipliers = {
					'Lv1 (0.4x / 0.7x)': 0.4,
					'Lv2 (1.0x / 0.95x)': 1.0,
					'Lv3 (1.5x / 1.2x)': 1.5,
					'Lv4 (1.85x / 1.334x)': 1.85,
					'Sniper Lv4 (1.0x / 1.0x)': 1.0,
					'Sniper Lv5 (1.125x / 1.1x)': 1.1,
					'Crouched Lv1 (0.48x / 0.7x)': 2.0, // TODO unused?
				};

				return {
					...result,
					bowSigilAddedValue: Math.floor(
						Math.floor(
							getMaxTrueRaw(internalTrueRaw) *
								0.015 * // TODO Test
								bowRawSigilChargeMultipliers[bowChargeLevels.chargeModifier] *
								(getExploitWeakness(
									outputWeaponClass,
									inputNumberShotHitzone + outputDivaPrayerGemShotHitzone,
								) /
									100),
						) * outputMonsterTotalDefense,
					),
					criticalMultiplier: 1,
					motionValue: 0,
				};
			case 'nocmel':
			case 'nocrit': // TODO testing
				return {
					...result,
					criticalDistanceMultiplier: 0.6,
					bulletStrengthModifier: 1.0,
					bowChargeRawLevel: 1.0,
					bowChargeElementLevel: 0.6,
					bowQuickShotChargeLevel: 1,
					quickShotChargeModifier: 1,
					criticalMultiplier: 1.0,
				};
			case 'rapid':
				// rapid up normal up and steady hand
				if (
					inputBulletStrengthModifier === 'Normal / Rapid Up (1.1x)' ||
					inputBulletStrengthModifier === 'Steady Hand (All Below)'
				) {
					bulletStrengthModifier = 1.1;
				}

				return {
					...result,
					bulletStrengthModifier: bulletStrengthModifier,
				};
			case 'scatter':
				// scatter up pellet up and steady hand
				if (
					inputBulletStrengthModifier === 'Pellet / Scatter Up (1.3x)' ||
					inputBulletStrengthModifier === 'Steady Hand (All Below)'
				) {
					bulletStrengthModifier = 1.3;
				} else {
					bulletStrengthModifier = 1;
				}

				let waterShotValue = 0;

				if (motionValueName === 'LV1 Pellet S.') {
					waterShotValue = 15;
				} else if (motionValueName === 'LV2 Pellet S.') {
					waterShotValue = 16;
				} else if (motionValueName === 'LV3 Pellet S.') {
					waterShotValue = 20;
				}

				return {
					...result,
					bulletStrengthModifier: bulletStrengthModifier,
					waterShotValue: waterShotValue,
				};

			case 'pierce':
				// pierce up and steady hand
				if (
					inputBulletStrengthModifier === 'Pierce Up (1.1x)' ||
					inputBulletStrengthModifier === 'Steady Hand (All Below)'
				) {
					bulletStrengthModifier = 1.1;
				}

				return {
					...result,
					bulletStrengthModifier: bulletStrengthModifier,
				};
			case 'sniper1':
				// use 1.0x / 1.0x multi
				return {
					...result,
					bowQuickShotChargeLevel: 1,
					quickShotChargeModifier: 1,
					bowChargeRawLevel: 1,
					bowChargeElementLevel: 1,
				};
			case 'sniper2':
				// use 1.125x / 1.2x multi
				return {
					...result,
					bowQuickShotChargeLevel: 1,
					quickShotChargeModifier: 1,
					bowChargeRawLevel: 1.125,
					bowChargeElementLevel: 1.2,
				};
			case 'arcshot1':
				// use 1.0x / 0.7x multi with no critical distance
				return {
					...result,
					bowQuickShotChargeLevel: 1,
					quickShotChargeModifier: 1,
					bowChargeRawLevel: 1,
					bowChargeElementLevel: 0.2,

					criticalDistanceMultiplier: 1,
				};
			case 'arcshot2':
				// use 1.0x / 0.2x multi with no critical distance and 19 bomb damage
				return {
					...result,
					bowQuickShotChargeLevel: 1,
					quickShotChargeModifier: 1,
					bowChargeRawLevel: 1,
					bowChargeElementLevel: 0.2,

					criticalDistanceMultiplier: 1,
				};
			case 'risingmulti1':
				// use 0.4x / 1.0x multi
				return {
					...result,
					bowQuickShotChargeLevel: 1,
					quickShotChargeModifier: 1,
					bowChargeRawLevel: 0.4,
					bowChargeElementLevel: 1,
				};
			case 'risingmulti2':
				// use 1.0x / 1.5x multi
				return {
					...result,
					bowQuickShotChargeLevel: 1,
					quickShotChargeModifier: 1,
					bowChargeRawLevel: 1,
					bowChargeElementLevel: 1.5,
				};
			case 'crag1':
				//Bomb 30, Fire 400
				return {
					...result,
					bombValues: 30,
					fireShotValue: 40,
				};
			case 'crag2':
				//Bomb 40, Fire 600
				return {
					...result,
					bombValues: 40,
					fireShotValue: 60,
				};
			case 'crag3':
				//Bomb 50, Fire 800
				return {
					...result,
					bombValues: 50,
					fireShotValue: 80,
				};
			case 'cluster1':
				// Bomb 32, Fire 20 x 3
				return {
					...result,
					bombValues: 96,
					fireShotValue: 6,
				};
			case 'cluster2':
				// Bomb 32, Fire 20 x 4
				return {
					...result,
					bombValues: 128,
					fireShotValue: 8,
				};
			case 'cluster3':
				// Bomb 32, Fire 20 x 5
				return {
					...result,
					bombValues: 160,
					fireShotValue: 10,
				};
			case 'fireshot':
				//Weapon Attack + Fire x0.5 (0.4x lbg)
				if (inputWeaponType === 'Light Bowgun') {
					return {
						...result,
						bowQuickShotChargeLevel: 1,
						quickShotChargeModifier: 1,
						bowChargeRawLevel: 1,
						bowChargeElementLevel: 1,
						fireShotValue:
							internalTrueRaw *
							0.4 *
							outputFireMultiplier *
							outputElementalAttackMultiplier *
							outputHHElementalSongMultiplier,
					};
				} else if (inputWeaponType === 'Heavy Bowgun') {
					return {
						...result,
						bowQuickShotChargeLevel: 1,
						quickShotChargeModifier: 1,
						bowChargeRawLevel: 1,
						bowChargeElementLevel: 1,
						fireShotValue:
							internalTrueRaw *
							0.5 *
							outputHBGChargeShot *
							outputFireMultiplier *
							outputElementalAttackMultiplier *
							outputHHElementalSongMultiplier,
					};
				} else {
					return {
						...result,
						bowQuickShotChargeLevel: 1,
						quickShotChargeModifier: 1,
						bowChargeRawLevel: 1,
						bowChargeElementLevel: 1,
					};
				}

			case 'watershot':
				//(Weapon Attack x0.25 Water) x 3 (0.13x lbg)
				if (inputWeaponType === 'Light Bowgun') {
					return {
						...result,
						bowQuickShotChargeLevel: 1,
						quickShotChargeModifier: 1,
						bowChargeRawLevel: 1,
						bowChargeElementLevel: 1,
						waterShotValue:
							internalTrueRaw *
							0.2 *
							3 *
							outputWaterMultiplier *
							outputElementalAttackMultiplier *
							outputHHElementalSongMultiplier,
					};
				} else if (inputWeaponType === 'Heavy Bowgun') {
					return {
						...result,
						bowQuickShotChargeLevel: 1,
						quickShotChargeModifier: 1,
						bowChargeRawLevel: 1,
						bowChargeElementLevel: 1,
						waterShotValue:
							internalTrueRaw *
							0.25 *
							3 *
							outputHBGChargeShot *
							outputWaterMultiplier *
							outputElementalAttackMultiplier *
							outputHHElementalSongMultiplier,
					};
				} else {
					return {
						...result,
						bowQuickShotChargeLevel: 1,
						quickShotChargeModifier: 1,
						bowChargeRawLevel: 1,
						bowChargeElementLevel: 1,
					};
				}
			case 'thundershot':
				//(Weapon Attack x 0.27 Thunder) x 3 (0.2x lbg)
				if (inputWeaponType === 'Light Bowgun') {
					return {
						...result,
						bowQuickShotChargeLevel: 1,
						quickShotChargeModifier: 1,
						bowChargeRawLevel: 1,
						bowChargeElementLevel: 1,
						thunderShotValue:
							internalTrueRaw *
							0.2 *
							3 *
							outputThunderMultiplier *
							outputElementalAttackMultiplier *
							outputHHElementalSongMultiplier,
					};
				} else if (inputWeaponType === 'Heavy Bowgun') {
					return {
						...result,
						bowQuickShotChargeLevel: 1,
						quickShotChargeModifier: 1,
						bowChargeRawLevel: 1,
						bowChargeElementLevel: 1,
						thunderShotValue:
							internalTrueRaw *
							0.27 *
							3 *
							outputHBGChargeShot *
							outputThunderMultiplier *
							outputElementalAttackMultiplier *
							outputHHElementalSongMultiplier,
					};
				} else {
					return {
						...result,
						bowQuickShotChargeLevel: 1,
						quickShotChargeModifier: 1,
						bowChargeRawLevel: 1,
						bowChargeElementLevel: 1,
					};
				}
			case 'iceshot':
				//(Weapon Attack x0.25 Ice) x 3 (0.13x lbg)
				if (inputWeaponType === 'Light Bowgun') {
					return {
						...result,
						bowQuickShotChargeLevel: 1,
						quickShotChargeModifier: 1,
						bowChargeRawLevel: 1,
						bowChargeElementLevel: 1,
						iceShotValue:
							internalTrueRaw *
							0.2 *
							3 *
							outputIceMultiplier *
							outputElementalAttackMultiplier *
							outputHHElementalSongMultiplier,
					};
				} else if (inputWeaponType === 'Heavy Bowgun') {
					return {
						...result,
						bowQuickShotChargeLevel: 1,
						quickShotChargeModifier: 1,
						bowChargeRawLevel: 1,
						bowChargeElementLevel: 1,
						iceShotValue:
							internalTrueRaw *
							0.25 *
							3 *
							outputHBGChargeShot *
							outputIceMultiplier *
							outputElementalAttackMultiplier *
							outputHHElementalSongMultiplier,
					};
				} else {
					return {
						...result,
						bowQuickShotChargeLevel: 1,
						quickShotChargeModifier: 1,
						bowChargeRawLevel: 1,
						bowChargeElementLevel: 1,
					};
				}
			case 'dragonshot':
				//90 Dragon x3 (75 lbg)
				if (inputWeaponType === 'Light Bowgun') {
					return {
						...result,
						bowQuickShotChargeLevel: 1,
						quickShotChargeModifier: 1,
						bowChargeRawLevel: 1,
						bowChargeElementLevel: 1,
						dragonShotValue:
							225 *
							outputDragonMultiplier *
							outputElementalAttackMultiplier *
							outputHHElementalSongMultiplier,
					};
				} else if (inputWeaponType === 'Heavy Bowgun') {
					return {
						...result,
						bowQuickShotChargeLevel: 1,
						quickShotChargeModifier: 1,
						bowChargeRawLevel: 1,
						bowChargeElementLevel: 1,
						dragonShotValue:
							270 *
							outputHBGChargeShot *
							outputDragonMultiplier *
							outputElementalAttackMultiplier *
							outputHHElementalSongMultiplier,
					};
				} else {
					return {
						...result,
						bowQuickShotChargeLevel: 1,
						quickShotChargeModifier: 1,
						bowChargeRawLevel: 1,
						bowChargeElementLevel: 1,
					};
				}
			case 'elecomp':
				//outputHBGChargeShot
				switch (inputCompressedElementShot) {
					case 'Fire Shot':
						return {
							...result,
							shotAdjustedMotionValue: inputNumberCompressedElementShot * 0.5,
							bowQuickShotChargeLevel: 1,
							quickShotChargeModifier: 1,
							bowChargeRawLevel: 1,
							bowChargeElementLevel: 1,
							fireShotValue:
								Math.floor(
									internalTrueRaw *
										0.3 *
										inputNumberCompressedElementShot *
										outputHBGChargeShot,
								) *
								outputFireMultiplier *
								outputElementalAttackMultiplier *
								outputHHElementalSongMultiplier,
						};
					case 'Water Shot':
						return {
							...result,
							shotAdjustedMotionValue:
								inputNumberCompressedElementShot * 0.5 * 3,
							bowQuickShotChargeLevel: 1,
							quickShotChargeModifier: 1,
							bowChargeRawLevel: 1,
							bowChargeElementLevel: 1,
							waterShotValue:
								Math.floor(
									internalTrueRaw *
										0.15 *
										3 *
										inputNumberCompressedElementShot *
										outputHBGChargeShot,
								) *
								outputWaterMultiplier *
								outputElementalAttackMultiplier *
								outputHHElementalSongMultiplier,
						};
					case 'Thunder Shot':
						return {
							...result,
							shotAdjustedMotionValue:
								inputNumberCompressedElementShot * 0.5 * 3,
							bowQuickShotChargeLevel: 1,
							quickShotChargeModifier: 1,
							bowChargeRawLevel: 1,
							bowChargeElementLevel: 1,
							thunderShotValue:
								Math.floor(
									internalTrueRaw *
										0.17 *
										3 *
										inputNumberCompressedElementShot *
										outputHBGChargeShot,
								) *
								outputThunderMultiplier *
								outputElementalAttackMultiplier *
								outputHHElementalSongMultiplier,
						};
					case 'Ice Shot':
						return {
							...result,
							shotAdjustedMotionValue:
								inputNumberCompressedElementShot * 0.5 * 3,
							bowQuickShotChargeLevel: 1,
							quickShotChargeModifier: 1,
							bowChargeRawLevel: 1,
							bowChargeElementLevel: 1,
							iceShotValue:
								Math.floor(
									internalTrueRaw *
										0.15 *
										3 *
										inputNumberCompressedElementShot *
										outputHBGChargeShot,
								) *
								outputIceMultiplier *
								outputElementalAttackMultiplier *
								outputHHElementalSongMultiplier,
						};
					case 'Dragon Shot':
						return {
							...result,
							shotAdjustedMotionValue:
								inputNumberCompressedElementShot * outputHBGChargeShot,
							bowQuickShotChargeLevel: 1,
							quickShotChargeModifier: 1,
							bowChargeRawLevel: 1,
							bowChargeElementLevel: 1,
							fireShotValue:
								Math.floor(
									72 *
										3 *
										inputNumberCompressedElementShot *
										outputHBGChargeShot,
								) *
								outputFireMultiplier *
								outputElementalAttackMultiplier *
								outputHHElementalSongMultiplier,
						};
					case 'Perfect Fire Shot':
						return {
							...result,
							shotAdjustedMotionValue: inputNumberCompressedElementShot * 0.8,
							bowQuickShotChargeLevel: 1,
							quickShotChargeModifier: 1,
							bowChargeRawLevel: 1,
							bowChargeElementLevel: 1,
							fireShotValue:
								Math.floor(
									internalTrueRaw *
										0.4 *
										inputNumberCompressedElementShot *
										outputHBGChargeShot,
								) *
								outputFireMultiplier *
								outputElementalAttackMultiplier *
								outputHHElementalSongMultiplier,
						};
					case 'Perfect Water Shot':
						return {
							...result,
							shotAdjustedMotionValue: inputNumberCompressedElementShot * 0.8,
							bowQuickShotChargeLevel: 1,
							quickShotChargeModifier: 1,
							bowChargeRawLevel: 1,
							bowChargeElementLevel: 1,
							waterShotValue:
								Math.floor(
									internalTrueRaw *
										0.2 *
										3 *
										inputNumberCompressedElementShot *
										outputHBGChargeShot,
								) *
								outputWaterMultiplier *
								outputElementalAttackMultiplier *
								outputHHElementalSongMultiplier,
						};
					case 'Perfect Thunder Shot':
						return {
							...result,
							shotAdjustedMotionValue: inputNumberCompressedElementShot * 0.8,
							bowQuickShotChargeLevel: 1,
							quickShotChargeModifier: 1,
							bowChargeRawLevel: 1,
							bowChargeElementLevel: 1,
							thunderShotValue:
								Math.floor(
									internalTrueRaw *
										0.215 *
										3 *
										inputNumberCompressedElementShot *
										outputHBGChargeShot,
								) *
								outputThunderMultiplier *
								outputElementalAttackMultiplier *
								outputHHElementalSongMultiplier,
						};
					case 'Perfect Ice Shot':
						return {
							...result,
							shotAdjustedMotionValue: inputNumberCompressedElementShot * 0.8,
							bowQuickShotChargeLevel: 1,
							quickShotChargeModifier: 1,
							bowChargeRawLevel: 1,
							bowChargeElementLevel: 1,
							iceShotValue:
								Math.floor(
									internalTrueRaw *
										0.2 *
										3 *
										inputNumberCompressedElementShot *
										outputHBGChargeShot,
								) *
								outputIceMultiplier *
								outputElementalAttackMultiplier *
								outputHHElementalSongMultiplier,
						};
					case 'Perfect Dragon Shot':
						return {
							...result,
							shotAdjustedMotionValue: inputNumberCompressedElementShot * 0.5,
							bowQuickShotChargeLevel: 1,
							quickShotChargeModifier: 1,
							bowChargeRawLevel: 1,
							bowChargeElementLevel: 1,
							fireShotValue:
								Math.floor(
									90 *
										3 *
										inputNumberCompressedElementShot *
										outputHBGChargeShot,
								) *
								outputFireMultiplier *
								outputElementalAttackMultiplier *
								outputHHElementalSongMultiplier,
						};

					default:
						return {
							...result,
							bowQuickShotChargeLevel: 1,
							quickShotChargeModifier: 1,
							bowChargeRawLevel: 1,
							bowChargeElementLevel: 1,
							shotAdjustedMotionValue: 0,
						};
				}

			default:
				return result;
		}
	}

	// TODO unused
	function getHitzoneValueFromWeaponType(weaponType: FrontierWeaponName) {
		let damageType =
			WeaponTypes.find((e) => e.name === weaponType)?.damageType || '';
		switch (damageType) {
			default:
				return 0;
			case 'Cutting':
				return inputNumberCuttingHitzone;
			case 'Impact':
				return inputNumberImpactHitzone;
			case 'Shot':
				return inputNumberShotHitzone;
			case 'Pierce':
				return inputNumberImpactHitzone * 0.72 > inputNumberCuttingHitzone
					? inputNumberImpactHitzone
					: inputNumberCuttingHitzone;
		}
	}

	function getRawHitzoneMultiplier(weaponType: FrontierWeaponName) {
		let damageType =
			WeaponTypes.find((e) => e.name === weaponType)?.damageType || '';
		switch (damageType) {
			default:
				return 1;
			case 'Cutting':
				return getExploitWeakness(
					outputWeaponClass,
					inputNumberCuttingHitzone + outputDivaPrayerGemCuttingHitzone,
				);
			case 'Impact':
				return getExploitWeakness(
					outputWeaponClass,
					inputNumberCuttingHitzone + outputDivaPrayerGemCuttingHitzone,
				);
			case 'Shot': // TODO unused
				return getExploitWeakness(
					outputWeaponClass,
					inputNumberShotHitzone + outputDivaPrayerGemShotHitzone,
				);
			case 'Pierce': // lance
				return inputNumberImpactHitzone * 0.72 > inputNumberCuttingHitzone
					? getExploitWeakness(
							outputWeaponClass,
							inputNumberImpactHitzone + outputDivaPrayerGemImpactHitzone,
						)
					: getExploitWeakness(
							outputWeaponClass,
							inputNumberCuttingHitzone + outputDivaPrayerGemCuttingHitzone,
						);
		}
	}

	function getWeaponSectionMotionValues(
		weaponName: FrontierWeaponName,
		section: string,
		isSharedMotionSection = false,
	) {
		let defaultResult: MotionValueResult[] = [
			{
				id: '',
				name: '',
				motion: '', // TODO they are wrong motions
				raw: '0',
				element: '0',
				total: '0',
				fire: '0',
				water: '0',
				thunder: '0',
				ice: '0',
				dragon: '0',
				additional: '0',
			},
		];

		let sectionEntry: FrontierMotionValueSection | undefined =
			sharedWeaponMotionValues;
		showWeaponMotionValuesSectionWarning = false;

		if (!isSharedMotionSection) {
			// Find the weapon by name
			const weaponEntry = weaponMotionValues.find((w) => w.name === weaponName);
			if (!weaponEntry) {
				// Return an empty object or an error message if the weapon is not found
				// TODO warn user?
				console.error('Weapon not found');
				return defaultResult; // or throw new Error('Weapon not found');
			}

			// Find the section by name within the found weapon
			sectionEntry = weaponEntry.sections.find(
				(s) =>
					s.name === section && s.style === inputWeaponMotionValuesSectionStyle,
			);
			if (!sectionEntry) {
				sectionEntry = weaponEntry.sections[0];
				inputWeaponMotionValuesSection = sectionEntry.name;
				showWeaponMotionValuesSectionWarning = true;
			}
		}

		let result: MotionValueResult[] = [];

		let outputTotal = 0;

		// hitzone preprocessing
		let elementHitzoneFireMultiplier = getElementalExploit(
			weaponName,
			inputNumberFireHitzone + outputDivaPrayerGemElementHitzone,
		);
		let elementHitzoneWaterMultiplier = getElementalExploit(
			weaponName,
			inputNumberWaterHitzone + outputDivaPrayerGemElementHitzone,
		);
		let elementHitzoneThunderMultiplier = getElementalExploit(
			weaponName,
			inputNumberThunderHitzone + outputDivaPrayerGemElementHitzone,
		);
		let elementHitzoneIceMultiplier = getElementalExploit(
			weaponName,
			inputNumberIceHitzone + outputDivaPrayerGemElementHitzone,
		);
		let elementHitzoneDragonMultiplier = getElementalExploit(
			weaponName,
			inputNumberDragonHitzone + outputDivaPrayerGemElementHitzone,
		);

		let rawHitzoneMultiplier = getRawHitzoneMultiplier(weaponName);

		let usedFire = Math.floor(
			((Math.floor(
				(inputNumberElementalValueReplacement +
					inputNumberSigil1Element * 10 +
					inputNumberSigil2Element * 10 +
					inputNumberSigil3Element * 10 +
					inputNumberUnlimitedSigil * 10 +
					outputAOETotalElement) *
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
					outputAOETotalElement) *
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
					outputAOETotalElement) *
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
					outputAOETotalElement) *
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
					outputAOETotalElement) *
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

		sectionEntry.motionValues.forEach((motionValueItem, index) => {
			/**also compressionmotionvalue*/
			let motionValue = motionValueItem.motionValue;
			let hitCount = motionValueItem.hitCount;
			let elementMultiplier = motionValueItem.elementMultiplier;
			let critMultiplier = 1;
			let totalAffinityUsed = 0;
			let SwordAndShieldSigilAdded = 0;
			let flagMultiplier = 1;
			let fireOutput = 0;
			let waterOutput = 0;
			let thunderOutput = 0;
			let iceOutput = 0;
			let dragonOutput = 0;
			/**statassmult*/
			let statusAssaultMultiplier = 1;
			let additional = 0;
			/**statusassault*/
			let statusAssault = 0;

			/**shotadjustedmotion*/
			let shotAdjustedMotionValue = motionValue;
			/**bowchargeQuick*/
			let bowQuickShotChargeLevel = 1;

			// handle motions with additional properties
			// Custom Motion
			if (
				motionValueItem.name === 'Custom Motion' ||
				motionValueItem.specialFlag === 'custommotion'
			) {
				motionValue = inputNumberTotalMotionValue;
				hitCount = inputNumberHitCount;
				elementMultiplier = inputNumberElementalMultiplier;
				motionValueItem.values = motionValue.toString();
			} else if (motionValueItem.specialFlag === 'compressionmotion') {
				motionValue = outputCompressedShotPower;
				motionValueItem.values = motionValue.toString();
			}

			if (weaponName == 'Heavy Bowgun') {
				shotAdjustedMotionValue = motionValue * outputHBGChargeShot;
			}

			if (
				outputQuickShotChargeModifier === 1 ||
				outputQuickShotChargeModifier === 2
			) {
				// lv2 0.85x
				if (
					outputBowChargeMultiplierLevels?.chargeModifier ===
					'Lv2 (1.0x / 0.95x)'
				) {
					bowQuickShotChargeLevel = 0.85;
				}
				// lv3 0.75x
				else if (
					outputBowChargeMultiplierLevels?.chargeModifier ===
					'Lv3 (1.5x / 1.2x)'
				) {
					bowQuickShotChargeLevel = 0.75;
				}
				// lv4 0.65x
				else if (
					outputBowChargeMultiplierLevels?.chargeModifier ===
					'Lv4 (1.85x / 1.334x)'
				) {
					bowQuickShotChargeLevel = 0.65;
				}
			}

			// TODO lazy handling of individual shot multipliers and properties
			let shotValues = getShotValues(
				motionValueItem.specialFlag,
				bowQuickShotChargeLevel,
				outputBowChargeMultiplierLevels,
				outputQuickShotChargeModifier,
				inputElement,
				critMultiplier,
				motionValue,
				outputCriticalDistanceMultiplier,
				inputBulletStrengthModifier,
				motionValueItem.name,
				shotAdjustedMotionValue,
			);

			let bombValues = shotValues.bombValues;
			let bulletStrengthModifier = shotValues.bulletStrengthModifier;
			/**TODO it seems bow does not use this but rather outputCriticalDistanceMultiplier*/
			let bowgunsCriticalDistanceMultiplier =
				shotValues.criticalDistanceMultiplier;
			let quickShotMode = shotValues.quickShotChargeModifier;
			let dragonShotValue = shotValues.dragonShotValue;
			let fireShotValue = shotValues.fireShotValue;
			let waterShotValue = shotValues.waterShotValue;
			let iceShotValue = shotValues.iceShotValue;
			let thunderShotValue = shotValues.thunderShotValue;
			let bowSigilAddedValue = shotValues.bowSigilAddedValue;

			bowQuickShotChargeLevel = shotValues.bowQuickShotChargeLevel;
			// TODO does these hold the values in here or does it change due to reactivity instantly?
			// outputQuickShotChargeModifier = shotValues.quickShotChargeModifier;
			// outputCriticalDistanceMultiplier = shotValues.criticalDistanceMultiplier;
			let bowChargeRawLevel = shotValues.bowChargeRawLevel;

			// TODO testing
			if (motionValueItem.specialFlag === 'elecomp') {
				shotAdjustedMotionValue = shotValues.shotAdjustedMotionValue;
			}

			// TODO gunner and blademaster may conflict
			if (outputWeaponClass === 'Gunner') {
				critMultiplier = shotValues.criticalMultiplier;
				motionValue = shotValues.motionValue;
			}

			// Reflect
			// TODO specialFlag types
			// critical handling
			if (
				inputCritMode === 'No Crits' ||
				motionValueItem.specialFlag === 'nocrit'
			) {
				critMultiplier = 1.0;
			} else {
				if (inputCritMode === 'All Crits') {
					critMultiplier = outputCritMultiplier;
					totalAffinityUsed = 100;
				} else if (inputCritMode === 'Averaged') {
					// todo totalAffinity is different than the other ones, missing terms?
					totalAffinityUsed =
						outputIssenAffinity +
						outputSharpnessAffinity +
						inputNumberUnlimitedSigil +
						inputNumberSigil1Affinity +
						inputNumberSigil2Affinity +
						inputNumberSigil3Affinity +
						outputStyleRankAffinity +
						outputExpertAffinity +
						inputNumberNaturalAffinity +
						outputFlashConversionAffinity +
						outputStarvingWolfAffinity +
						outputCeaselessAffinity +
						outputDivaPrayerGemAffinity;
					if (totalAffinityUsed > 100) {
						totalAffinityUsed = 100;
					} else if (totalAffinityUsed < 0) {
						totalAffinityUsed = 0;
					}
					critMultiplier =
						(totalAffinityUsed / 100) * outputCritMultiplier +
						(1 - totalAffinityUsed / 100) * 1;
				} else {
					critMultiplier = 1.0;
					totalAffinityUsed = 0;
				}
			}

			// SnS Sigil
			if (
				motionValueItem.name === 'Sigil Additional' &&
				motionValueItem.specialFlag === 'snssigil'
			) {
				if (inputElement === 'None') {
					SwordAndShieldSigilAdded = Math.floor(
						Math.floor(
							getMaxTrueRaw(internalTrueRaw) *
								0.025 *
								outputOldSharpnessMultiplier *
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
			flagMultiplier =
				greatSwordCharges.find((e) => e.name === 'element.name')?.multiplier ||
				1;

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
				inputStatusAssault === 'On (For Sleep add +10 raw hitbox)' &&
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
									(outputStatusUsedSA + // TODO outputStatusValueMultiplier which is used to calculate this is wrong in the original code, but we leave as is for now
										getStatusAssault(weaponName, 'Poison')),
							) * outputMonsterTotalDefense,
						) * outputFencingMultiplier,
					);
				}
			} else {
				statusAssault = 0;
			}

			if (motionValueItem.name === '~ Burst ~ 3 Hits') {
				additional = Math.floor(50 * outputMonsterTotalDefense);
			} else if (motionValueItem.name === '~ Burst ~ 11 Hits') {
				additional = Math.floor(100 * outputMonsterTotalDefense);
			} else if (motionValueItem.name === '~ Burst ~ 12 Hits+') {
				additional = Math.floor(200 * outputMonsterTotalDefense);
			} else {
				additional = 0;
			}

			// todo: untested diva prayer gems
			let outputAdditional =
				(Math.floor(
					(inputNumberOtherAdditional + outputDivaPrayerGemTrueRaw) *
						outputMonsterTotalDefense,
				) +
					additional +
					statusAssault +
					SwordAndShieldSigilAdded) *
				hitCount;

			let rawOutput = 0;

			if (outputWeaponClass === 'Blademaster') {
				// Raw Output
				rawOutput = Math.floor(
					Math.floor(
						Math.floor(
							Math.floor(
								Math.floor(
									((Math.floor(motionValue * critMultiplier) / 100) *
										getMaxTrueRaw(internalTrueRaw) *
										outputSharpnessMultiplier *
										flagMultiplier *
										outputSwordAndShieldMultiplier *
										outputOtherMultipliers *
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
			} else if (
				weaponName === 'Light Bowgun' ||
				weaponName === 'Heavy Bowgun'
			) {
				// TODO testing
				if (motionValueItem.specialFlag === 'elecomp') {
					motionValue = Math.floor(shotAdjustedMotionValue);
					motionValueItem.values = motionValue.toString();
				}

				// actual raw output
				rawOutput = Math.floor(
					Math.floor(
						Math.floor(
							(shotAdjustedMotionValue / 100) *
								critMultiplier *
								internalTrueRaw *
								bowgunsCriticalDistanceMultiplier *
								bulletStrengthModifier *
								outputShotMultiplier *
								outputMonsterStatusInflictedMultiplier *
								((inputNumberShotHitzone + outputDivaPrayerGemShotHitzone) /
									100) *
								outputMonsterTotalDefense,
						) * outputAbsoluteDefenseMultiplier,
					) * outputPremiumCourseMultiplier,
				);
			} else if (weaponName === 'Bow') {
				if (quickShotMode !== 2) {
					rawOutput = Math.floor(
						Math.floor(
							Math.floor(
								Math.floor(
									(Math.floor(
										(motionValue / 100) * critMultiplier * internalTrueRaw,
									) *
										outputCriticalDistanceMultiplier *
										outputBowCoatingModifier *
										bulletStrengthModifier *
										bowChargeRawLevel *
										bowQuickShotChargeLevel *
										outputMonsterStatusInflictedMultiplier *
										inputNumberShotHitzone) /
										100,
								) * outputMonsterTotalDefense,
							) * outputAbsoluteDefenseMultiplier,
						) * outputPremiumCourseMultiplier,
					);
				} else if (quickShotMode === 2) {
					rawOutput =
						Math.floor(
							Math.floor(
								Math.floor(
									Math.floor(
										(Math.floor(
											(motionValue / 100) * critMultiplier * internalTrueRaw,
										) *
											outputCriticalDistanceMultiplier *
											outputBowCoatingModifier *
											bulletStrengthModifier *
											shotValues.bowChargeRawLevel *
											outputMonsterStatusInflictedMultiplier *
											inputNumberShotHitzone) /
											100,
									) * outputMonsterTotalDefense,
								) * outputAbsoluteDefenseMultiplier,
							) * outputPremiumCourseMultiplier,
						) +
						Math.floor(
							Math.floor(
								Math.floor(
									Math.floor(
										(Math.floor(
											(motionValue / 100) * critMultiplier * internalTrueRaw,
										) *
											outputCriticalDistanceMultiplier *
											outputBowCoatingModifier *
											bulletStrengthModifier *
											shotValues.bowChargeRawLevel *
											bowQuickShotChargeLevel *
											outputMonsterStatusInflictedMultiplier *
											inputNumberShotHitzone) /
											100,
									) * outputMonsterTotalDefense,
								) * outputAbsoluteDefenseMultiplier,
							) * outputPremiumCourseMultiplier,
						);
				}
			}

			// Final Ouput
			outputTotal = totalElementalOutput + rawOutput + outputAdditional;

			// Gunner override TODO refactor needed
			// Elemental
			if (weaponName === 'Light Bowgun' || weaponName === 'Heavy Bowgun') {
				// Bowguns
				fireOutput = Math.floor(
					Math.floor(
						(Math.floor(fireShotValue) *
							shotValues.bowChargeElementLevel *
							outputFuriousMultiplier *
							outputZenithElementMultiplier *
							bowQuickShotChargeLevel *
							(inputNumberFireHitzone + outputDivaPrayerGemElementHitzone)) /
							100,
					) * outputMonsterTotalDefense,
				);
				waterOutput = Math.floor(
					Math.floor(
						(Math.floor(waterShotValue) *
							shotValues.bowChargeElementLevel *
							outputFuriousMultiplier *
							outputZenithElementMultiplier *
							bowQuickShotChargeLevel *
							(inputNumberWaterHitzone + outputDivaPrayerGemElementHitzone)) /
							100,
					) * outputMonsterTotalDefense,
				);
				thunderOutput = Math.floor(
					Math.floor(
						(Math.floor(thunderShotValue) *
							shotValues.bowChargeElementLevel *
							outputFuriousMultiplier *
							outputZenithElementMultiplier *
							bowQuickShotChargeLevel *
							(inputNumberThunderHitzone + outputDivaPrayerGemElementHitzone)) /
							100,
					) * outputMonsterTotalDefense,
				);
				iceOutput = Math.floor(
					Math.floor(
						(Math.floor(iceShotValue) *
							shotValues.bowChargeElementLevel *
							outputFuriousMultiplier *
							outputZenithElementMultiplier *
							bowQuickShotChargeLevel *
							(inputNumberIceHitzone + outputDivaPrayerGemElementHitzone)) /
							100,
					) * outputMonsterTotalDefense,
				);
				dragonOutput = Math.floor(
					Math.floor(
						(Math.floor(dragonShotValue) *
							shotValues.bowChargeElementLevel *
							outputFuriousMultiplier *
							outputZenithElementMultiplier *
							bowQuickShotChargeLevel *
							(inputNumberDragonHitzone + outputDivaPrayerGemElementHitzone)) /
							100,
					) * outputMonsterTotalDefense,
				);

				totalElementalOutput =
					fireOutput + waterOutput + thunderOutput + iceOutput + dragonOutput;
			} else if (weaponName === 'Bow') {
				// Bow
				if (quickShotMode !== 2) {
					fireOutput =
						Math.floor(
							Math.floor(
								((Math.floor(
									(inputNumberElementalValueReplacement +
										inputNumberSigil1Element * 10 +
										inputNumberSigil2Element * 10 +
										inputNumberSigil3Element * 10 +
										inputNumberUnlimitedSigil * 10 +
										outputAOETotalElement) *
										outputFireMultiplier *
										outputZenithElementMultiplier *
										outputFuriousMultiplier *
										getElementMultiplier('Fire', inputElement),
								) /
									10) *
									shotValues.bowChargeElementLevel *
									shotValues.bowQuickShotChargeLevel *
									(inputNumberFireHitzone +
										outputDivaPrayerGemElementHitzone)) /
									100,
							) * outputMonsterTotalDefense,
						) * hitCount;

					waterOutput =
						Math.floor(
							Math.floor(
								((Math.floor(
									(inputNumberElementalValueReplacement +
										inputNumberSigil1Element * 10 +
										inputNumberSigil2Element * 10 +
										inputNumberSigil3Element * 10 +
										inputNumberUnlimitedSigil * 10 +
										outputAOETotalElement) *
										outputWaterMultiplier *
										outputZenithElementMultiplier *
										outputFuriousMultiplier *
										getElementMultiplier('Water', inputElement),
								) /
									10) *
									shotValues.bowChargeElementLevel *
									shotValues.bowQuickShotChargeLevel *
									(inputNumberWaterHitzone +
										outputDivaPrayerGemElementHitzone)) /
									100,
							) * outputMonsterTotalDefense,
						) * hitCount;

					thunderOutput =
						Math.floor(
							Math.floor(
								((Math.floor(
									(inputNumberElementalValueReplacement +
										inputNumberSigil1Element * 10 +
										inputNumberSigil2Element * 10 +
										inputNumberSigil3Element * 10 +
										inputNumberUnlimitedSigil * 10 +
										outputAOETotalElement) *
										outputThunderMultiplier *
										outputZenithElementMultiplier *
										outputFuriousMultiplier *
										getElementMultiplier('Thunder', inputElement),
								) /
									10) *
									shotValues.bowChargeElementLevel *
									shotValues.bowQuickShotChargeLevel *
									(inputNumberThunderHitzone +
										outputDivaPrayerGemElementHitzone)) /
									100,
							) * outputMonsterTotalDefense,
						) * hitCount;

					iceOutput =
						Math.floor(
							Math.floor(
								((Math.floor(
									(inputNumberElementalValueReplacement +
										inputNumberSigil1Element * 10 +
										inputNumberSigil2Element * 10 +
										inputNumberSigil3Element * 10 +
										inputNumberUnlimitedSigil * 10 +
										outputAOETotalElement) *
										outputIceMultiplier *
										outputZenithElementMultiplier *
										outputFuriousMultiplier *
										getElementMultiplier('Ice', inputElement),
								) /
									10) *
									shotValues.bowChargeElementLevel *
									shotValues.bowQuickShotChargeLevel *
									(inputNumberIceHitzone + outputDivaPrayerGemElementHitzone)) /
									100,
							) * outputMonsterTotalDefense,
						) * hitCount;

					dragonOutput =
						Math.floor(
							Math.floor(
								((Math.floor(
									(inputNumberElementalValueReplacement +
										inputNumberSigil1Element * 10 +
										inputNumberSigil2Element * 10 +
										inputNumberSigil3Element * 10 +
										inputNumberUnlimitedSigil * 10 +
										outputAOETotalElement) *
										outputDragonMultiplier *
										outputZenithElementMultiplier *
										outputFuriousMultiplier *
										getElementMultiplier('Dragon', inputElement),
								) /
									10) *
									shotValues.bowChargeElementLevel *
									shotValues.bowQuickShotChargeLevel *
									(inputNumberDragonHitzone +
										outputDivaPrayerGemElementHitzone)) /
									100,
							) * outputMonsterTotalDefense,
						) * hitCount;

					totalElementalOutput =
						fireOutput + waterOutput + thunderOutput + iceOutput + dragonOutput;
				} else if (quickShotMode === 2) {
					fireOutput =
						Math.floor(
							Math.floor(
								((Math.floor(
									(inputNumberElementalValueReplacement +
										inputNumberSigil1Element * 10 +
										inputNumberSigil1Element * 10 +
										inputNumberSigil1Element * 10 +
										inputNumberUnlimitedSigil * 10 +
										outputAOETotalElement) *
										outputFireMultiplier *
										outputZenithElementMultiplier *
										outputFuriousMultiplier *
										getElementMultiplier('Fire', inputElement),
								) /
									10) *
									shotValues.bowChargeElementLevel *
									shotValues.bowQuickShotChargeLevel *
									(inputNumberFireHitzone +
										outputDivaPrayerGemElementHitzone)) /
									100,
							) * outputMonsterTotalDefense,
						) *
							hitCount +
						Math.floor(
							Math.floor(
								((Math.floor(
									(inputNumberElementalValueReplacement +
										inputNumberSigil1Element * 10 +
										inputNumberSigil2Element * 10 +
										inputNumberSigil3Element * 10 +
										inputNumberUnlimitedSigil * 10 +
										outputAOETotalElement) *
										outputFireMultiplier *
										outputZenithElementMultiplier *
										outputFuriousMultiplier *
										getElementMultiplier('Fire', inputElement),
								) /
									10) *
									shotValues.bowChargeElementLevel *
									(inputNumberFireHitzone +
										outputDivaPrayerGemElementHitzone)) /
									100,
							) * outputMonsterTotalDefense,
						) *
							hitCount;

					waterOutput =
						Math.floor(
							Math.floor(
								((Math.floor(
									(inputNumberElementalValueReplacement +
										inputNumberSigil1Element * 10 +
										inputNumberSigil1Element * 10 +
										inputNumberSigil1Element * 10 +
										inputNumberUnlimitedSigil * 10 +
										outputAOETotalElement) *
										outputWaterMultiplier *
										outputZenithElementMultiplier *
										outputFuriousMultiplier *
										getElementMultiplier('Water', inputElement),
								) /
									10) *
									shotValues.bowChargeElementLevel *
									shotValues.bowQuickShotChargeLevel *
									(inputNumberWaterHitzone +
										outputDivaPrayerGemElementHitzone)) /
									100,
							) * outputMonsterTotalDefense,
						) *
							hitCount +
						Math.floor(
							Math.floor(
								((Math.floor(
									(inputNumberElementalValueReplacement +
										inputNumberSigil1Element * 10 +
										inputNumberSigil2Element * 10 +
										inputNumberSigil3Element * 10 +
										inputNumberUnlimitedSigil * 10 +
										outputAOETotalElement) *
										outputWaterMultiplier *
										outputZenithElementMultiplier *
										outputFuriousMultiplier *
										getElementMultiplier('Water', inputElement),
								) /
									10) *
									shotValues.bowChargeElementLevel *
									(inputNumberWaterHitzone +
										outputDivaPrayerGemElementHitzone)) /
									100,
							) * outputMonsterTotalDefense,
						) *
							hitCount;

					thunderOutput =
						Math.floor(
							Math.floor(
								((Math.floor(
									(inputNumberElementalValueReplacement +
										inputNumberSigil1Element * 10 +
										inputNumberSigil1Element * 10 +
										inputNumberSigil1Element * 10 +
										inputNumberUnlimitedSigil * 10 +
										outputAOETotalElement) *
										outputThunderMultiplier *
										outputZenithElementMultiplier *
										outputFuriousMultiplier *
										getElementMultiplier('Thunder', inputElement),
								) /
									10) *
									shotValues.bowChargeElementLevel *
									shotValues.bowQuickShotChargeLevel *
									(inputNumberThunderHitzone +
										outputDivaPrayerGemElementHitzone)) /
									100,
							) * outputMonsterTotalDefense,
						) *
							hitCount +
						Math.floor(
							Math.floor(
								((Math.floor(
									(inputNumberElementalValueReplacement +
										inputNumberSigil1Element * 10 +
										inputNumberSigil2Element * 10 +
										inputNumberSigil3Element * 10 +
										inputNumberUnlimitedSigil * 10 +
										outputAOETotalElement) *
										outputThunderMultiplier *
										outputZenithElementMultiplier *
										outputFuriousMultiplier *
										getElementMultiplier('Thunder', inputElement),
								) /
									10) *
									shotValues.bowChargeElementLevel *
									(inputNumberThunderHitzone +
										outputDivaPrayerGemElementHitzone)) /
									100,
							) * outputMonsterTotalDefense,
						) *
							hitCount;

					iceOutput =
						Math.floor(
							Math.floor(
								((Math.floor(
									(inputNumberElementalValueReplacement +
										inputNumberSigil1Element * 10 +
										inputNumberSigil1Element * 10 +
										inputNumberSigil1Element * 10 +
										inputNumberUnlimitedSigil * 10 +
										outputAOETotalElement) *
										outputIceMultiplier *
										outputZenithElementMultiplier *
										outputFuriousMultiplier *
										getElementMultiplier('Ice', inputElement),
								) /
									10) *
									shotValues.bowChargeElementLevel *
									shotValues.bowQuickShotChargeLevel *
									(inputNumberIceHitzone + outputDivaPrayerGemElementHitzone)) /
									100,
							) * outputMonsterTotalDefense,
						) *
							hitCount +
						Math.floor(
							Math.floor(
								((Math.floor(
									(inputNumberElementalValueReplacement +
										inputNumberSigil1Element * 10 +
										inputNumberSigil2Element * 10 +
										inputNumberSigil3Element * 10 +
										inputNumberUnlimitedSigil * 10 +
										outputAOETotalElement) *
										outputIceMultiplier *
										outputZenithElementMultiplier *
										outputFuriousMultiplier *
										getElementMultiplier('Ice', inputElement),
								) /
									10) *
									shotValues.bowChargeElementLevel *
									(inputNumberIceHitzone + outputDivaPrayerGemElementHitzone)) /
									100,
							) * outputMonsterTotalDefense,
						) *
							hitCount;

					dragonOutput =
						Math.floor(
							Math.floor(
								((Math.floor(
									(inputNumberElementalValueReplacement +
										inputNumberSigil1Element * 10 +
										inputNumberSigil1Element * 10 +
										inputNumberSigil1Element * 10 +
										inputNumberUnlimitedSigil * 10 +
										outputAOETotalElement) *
										outputDragonMultiplier *
										outputZenithElementMultiplier *
										outputFuriousMultiplier *
										getElementMultiplier('Dragon', inputElement),
								) /
									10) *
									shotValues.bowChargeElementLevel *
									shotValues.bowQuickShotChargeLevel *
									(inputNumberDragonHitzone +
										outputDivaPrayerGemElementHitzone)) /
									100,
							) * outputMonsterTotalDefense,
						) *
							hitCount +
						Math.floor(
							Math.floor(
								((Math.floor(
									(inputNumberElementalValueReplacement +
										inputNumberSigil1Element * 10 +
										inputNumberSigil2Element * 10 +
										inputNumberSigil3Element * 10 +
										inputNumberUnlimitedSigil * 10 +
										outputAOETotalElement) *
										outputDragonMultiplier *
										outputZenithElementMultiplier *
										outputFuriousMultiplier *
										getElementMultiplier('Dragon', inputElement),
								) /
									10) *
									shotValues.bowChargeElementLevel *
									(inputNumberDragonHitzone +
										outputDivaPrayerGemElementHitzone)) /
									100,
							) * outputMonsterTotalDefense,
						) *
							hitCount;

					totalElementalOutput =
						fireOutput + waterOutput + thunderOutput + iceOutput + dragonOutput;
				}
			}

			// Sum above
			// Additional
			if (outputWeaponClass === 'Gunner') {
				outputAdditional =
					Math.floor(
						(inputNumberOtherAdditional +
							bombValues +
							outputDivaPrayerGemTrueRaw) *
							outputMonsterTotalDefense,
					) + bowSigilAddedValue;

				outputTotal = totalElementalOutput + rawOutput + outputAdditional;
				// TODO test
				if (weaponName !== 'Bow') {
					internalFire = 0;
					internalWater = 0;
					internalThunder = 0;
					internalIce = 0;
					internalDragon = 0;
				} else {
					internalFire = Math.floor(
						Math.floor(
							(inputNumberElementalValueReplacement +
								inputNumberSigil1Element * 10 +
								inputNumberSigil2Element * 10 +
								inputNumberSigil3Element * 10 +
								inputNumberUnlimitedSigil * 10 +
								outputAOETotalElement * outputFuriousMultiplier) *
								outputFireMultiplier *
								outputZenithElementMultiplier *
								getElementMultiplier('Fire', inputElement),
						) / 10,
					);

					internalWater = Math.floor(
						Math.floor(
							(inputNumberElementalValueReplacement +
								inputNumberSigil1Element * 10 +
								inputNumberSigil2Element * 10 +
								inputNumberSigil3Element * 10 +
								inputNumberUnlimitedSigil * 10 +
								outputAOETotalElement * outputFuriousMultiplier) *
								outputWaterMultiplier *
								outputZenithElementMultiplier *
								getElementMultiplier('Water', inputElement),
						) / 10,
					);

					internalThunder = Math.floor(
						Math.floor(
							(inputNumberElementalValueReplacement +
								inputNumberSigil1Element * 10 +
								inputNumberSigil2Element * 10 +
								inputNumberSigil3Element * 10 +
								inputNumberUnlimitedSigil * 10 +
								outputAOETotalElement * outputFuriousMultiplier) *
								outputThunderMultiplier *
								outputZenithElementMultiplier *
								getElementMultiplier('Thunder', inputElement),
						) / 10,
					);

					internalIce = Math.floor(
						Math.floor(
							(inputNumberElementalValueReplacement +
								inputNumberSigil1Element * 10 +
								inputNumberSigil2Element * 10 +
								inputNumberSigil3Element * 10 +
								inputNumberUnlimitedSigil * 10 +
								outputAOETotalElement * outputFuriousMultiplier) *
								outputIceMultiplier *
								outputZenithElementMultiplier *
								getElementMultiplier('Ice', inputElement),
						) / 10,
					);

					internalDragon = Math.floor(
						Math.floor(
							(inputNumberElementalValueReplacement +
								inputNumberSigil1Element * 10 +
								inputNumberSigil2Element * 10 +
								inputNumberSigil3Element * 10 +
								inputNumberUnlimitedSigil * 10 +
								outputAOETotalElement * outputFuriousMultiplier) *
								outputDragonMultiplier *
								outputZenithElementMultiplier *
								getElementMultiplier('Dragon', inputElement),
						) / 10,
					);
				}

				// $("#internalAffinity").text(totalaffinityused + "%");
				internalStatus = 0;
			}

			// Used Values

			result.push({
				id: index.toString(),
				name: motionValueItem.name,
				motion: motionValueItem.values,
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

		return result;
	}

	function getMotionValue(
		weapon: FrontierWeaponName,
		section: string,
		motionValueName: string,
	): FrontierMotionValue {
		let defaultValue = {
			name: '',
			animation: '',
			values: '',
			motionValue: 0,
			specialFlag: '',
			hitCount: 0,
			elementMultiplier: 0,
		};

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

	function mapLegacyValue(
		legacyKey: string,
		legacyValue: string,
	): string | number | boolean {
		if (legacyCalculatorNumberInputs.find((e) => e === legacyKey)) {
			return Number(legacyValue);
		}

		let legacyStat = legacyCalculatorValuesMap.find(
			(e) => e[legacyKey][legacyValue] !== undefined,
		);

		if (!legacyStat) {
			console.warn(`Invalid value for legacy key ${legacyKey}: ${legacyStat}`);
			return 'None';
		}

		return legacyStat[legacyKey][legacyValue];
	}

	function transformLegacyData(legacyData: { [key: string]: string }) {
		const newData: { [key: string]: string | number | boolean } = {};

		// Iterate over each entry in the legacy data
		for (const [legacyKey, legacyValue] of Object.entries(legacyData)) {
			if (
				legacyKey === 'drugknowledgeupToggle' &&
				newData['inputDrugKnowledge'] === 'None (1x)'
			) {
				continue;
			}

			if (legacyKey === 'drugknowledgeToggle' && legacyValue === '0') {
				newData['inputDrugKnowledge'] = 'None (1x)';
				continue;
			}

			// Find the corresponding new key based on the mapping
			const newKey = legacyCalculatorKeysMap[legacyKey];

			if (newKey === '') {
				continue;
			}

			// Check if a direct mapping exists
			if (newKey) {
				// Assign the transformed value to the new key
				newData[newKey] = mapLegacyValue(legacyKey, legacyValue);
			}
		}

		return newData;
	}

	function loadLegacyInputsFromJSONFile(legacyCalculatorSaveSlot: number) {
		// Create an input element to prompt the user to select a file
		const input = document.createElement('input');
		input.type = 'file';
		input.accept = '.json'; // Accept only JSON files

		// Listen for the change event on the input element
		input.addEventListener('change', (event) => {
			const file = (event.target as HTMLInputElement).files?.[0];
			if (file && file.size < 8 * Math.pow(10, 6)) {
				const reader = new FileReader();

				// Listen for the load event on the FileReader
				reader.onload = (e) => {
					// Parse the JSON content
					let jsonData: { [key: string]: any } = {};
					try {
						jsonData = JSON.parse(e.target?.result as string);
					} catch {
						showDamageCalculatorLegacyInputsJSONError = true;
						return;
					}

					showDamageCalculatorLegacyInputsJSONError = false;

					// Filter keys based on the specified save slot
					const filteredKeys = Object.keys(jsonData).filter((key) =>
						key.startsWith(`save${legacyCalculatorSaveSlot}`),
					);

					if (filteredKeys.length === 0) {
						return;
					}

					// Remove the saveX prefix and prepare for mapping
					const transformedData: { [key: string]: string } = {};
					filteredKeys.forEach((key) => {
						const newKey = key.replace(
							`save${legacyCalculatorSaveSlotNumber}`,
							'',
						);
						transformedData[newKey] = jsonData[key];
					});

					// Now, transformedData contains the relevant data without the saveX prefix
					// Perform key-value mapping here based on your requirements
					// For demonstration, assuming a simple direct mapping
					const mappedData = transformLegacyData(transformedData); // Replace this with your actual mapping logic

					// Load the mapped data into your application
					// Assuming updateInputs is a function that takes the mapped data and updates your UI
					inputTextImportData = JSON.stringify(mappedData, null, 2);
					updateInputs();
				};

				// Read the file as text
				reader.readAsText(file);
			}
		});

		// Trigger the file selection dialog
		input.click();
	}

	function loadInputsFromJSONFile() {
		// Create an input element to prompt the user to select a file
		const input = document.createElement('input');
		input.type = 'file';
		input.accept = '.json'; // Accept only JSON files

		// Listen for the change event on the input element
		input.addEventListener('change', (event) => {
			const file = (event.target as HTMLInputElement).files?.[0];
			if (file && file.size < 8 * Math.pow(10, 6)) {
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
			showDamageCalculatorInputsJSONError = false;
			return;
		}

		let newInputs: { [key: string]: any } = {};

		try {
			newInputs = JSON.parse(inputTextImportData);
		} catch (e) {
			showDamageCalculatorInputsJSONError = true;
			return;
		}

		showDamageCalculatorInputsJSONError = false;

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
		inputCritConversionUp =
			newInputs.inputCritConversionUp || inputCritConversionUp;
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
		inputCriticalDistanceMultiplier =
			newInputs.inputCriticalDistanceMultiplier ||
			inputCriticalDistanceMultiplier;
		inputBulletStrengthModifier =
			newInputs.inputBulletStrengthModifier || inputBulletStrengthModifier;
		inputShotMultiplier = newInputs.inputShotMultiplier || inputShotMultiplier;
		inputHbgChargeShot = newInputs.inputHbgChargeShot || inputHbgChargeShot;
		inputCompressedShotMultiplier =
			newInputs.inputCompressedShotMultiplier || inputCompressedShotMultiplier;
		inputCompressedElementShot =
			newInputs.inputCompressedElementShot || inputCompressedElementShot;
		inputBowCoatingsMultiplier =
			newInputs.inputBowCoatingsMultiplier || inputBowCoatingsMultiplier;
		inputBowChargeMultiplier =
			newInputs.inputBowChargeMultiplier || inputBowChargeMultiplier;
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
		inputNumberCuttingHitzone =
			newInputs.inputNumberCuttingHitzone || inputNumberCuttingHitzone;
		inputNumberImpactHitzone =
			newInputs.inputNumberImpactHitzone || inputNumberImpactHitzone;
		inputNumberShotHitzone =
			newInputs.inputNumberShotHitzone || inputNumberShotHitzone;
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

		inputDivaPrayerGemRedName =
			newInputs.inputDivaPrayerGemRedName || inputDivaPrayerGemRedName;
		inputDivaPrayerGemYellowName =
			newInputs.inputDivaPrayerGemYellowName || inputDivaPrayerGemYellowName;
		inputDivaPrayerGemGreenName =
			newInputs.inputDivaPrayerGemRedName || inputDivaPrayerGemGreenName;
		inputDivaPrayerGemBlueName =
			newInputs.inputDivaPrayerGemBlueName || inputDivaPrayerGemBlueName;

		inputNumberDivaPrayerGemRedLevel =
			newInputs.inputNumberDivaPrayerGemRedLevel ||
			inputNumberDivaPrayerGemRedLevel;
		inputNumberDivaPrayerGemYellowLevel =
			newInputs.inputNumberDivaPrayerGemYellowLevel ||
			inputNumberDivaPrayerGemYellowLevel;
		inputNumberDivaPrayerGemGreenLevel =
			newInputs.inputNumberDivaPrayerGemGreenLevel ||
			inputNumberDivaPrayerGemGreenLevel;
		inputNumberDivaPrayerGemYellowLevel =
			newInputs.inputNumberDivaPrayerGemRedLevel ||
			inputNumberDivaPrayerGemYellowLevel;
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
		outputStatusAttackUpMultiplier: number,
		outputStatusGuildPoogieMultiplier: number,
		outputStatusSigilMultiplier: number,
		outputFuriousMultiplier: number,
	) {
		let drugKnowledgeRaw = 0;

		if (
			outputDrugKnowledgeMultiplier === 0.42 ||
			outputDrugKnowledgeMultiplier === 0.38
		) {
			drugKnowledgeRaw = Math.floor(
				Math.floor(
					(inputStatusValue *
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

	function getCritConversionTrueRaw(
		totalAffinity: number,
		critConversionUpMultiplier: number,
		naturalAffinity: number,
		critConversionAffinity: Number,
	) {
		if (critConversionAffinity !== 30 || totalAffinity <= 0) {
			return 0;
		}

		let excessAffinityTrueRaw =
			totalAffinity > 100 ? Math.floor(Math.sqrt(totalAffinity - 100) * 7) : 0;

		let naturalAffinityTrueRaw = Math.floor(
			Math.sqrt(Math.max(naturalAffinity, 0)) * critConversionUpMultiplier,
		);

		return naturalAffinityTrueRaw + excessAffinityTrueRaw;
	}

	function getLengthAttackValue(outputLengthType: string, trueRaw: number) {
		let result = trueRaw;
		if (outputLengthType === 'Active') {
			result = Math.ceil(trueRaw - (trueRaw * 0.07 + 0.7));
		}
		// else if (outputLengthType === 2) {
		// 	result = Math.ceil(trueRaw - (trueRaw * 0.07 + 1));

		return result;
	}

	function getObscurityValue(
		weaponType: FrontierWeaponName,
		outputObscurityLevel: number,
	) {
		let foundWeapon = WeaponTypes.find((e) => e.name === weaponType);

		if (!foundWeapon) {
			return 0;
		}

		let foundObscurity = obscurityValues.find((e) =>
			e.weapons.find((e) => e === weaponType),
		);

		if (!foundObscurity) {
			return 0;
		}

		return foundObscurity.values[outputObscurityLevel];
	}

	function setAbnormalityValues(abnormalityToggleValue: boolean) {
		inputDrugKnowledge = abnormalityToggleValue
			? 'Standard (0.38x Status)'
			: 'None (1x)';
		inputStatusAssault = abnormalityToggleValue
			? 'On (For Sleep add +10 raw hitzone)'
			: 'None';
		inputStatusAttackUp = abnormalityToggleValue ? 'On (1.125x)' : 'None (1x)';
	}

	function setIssenValues(expertValue: boolean) {
		inputIssenSkills = expertValue ? 'None or Determination' : inputIssenSkills;
	}

	/**The inputIssenSkills side-effect is handled by an on:select event in the dropdown*/
	function getCritValue(
		inputStarvingWolf: string,
		inputCeaseless: string,
		inputExpertSkills: string,
		inputIssenSkills: string,
		outputTotalAffinity: number,
	) {
		// TODO uncomment when removing legacy bugs
		// if (outputTotalAffinity === 0) {
		// 	return 1;
		// }

		let baseCritMultiplier = outputTotalAffinity < 0 ? 0.75 : 1.25;

		let starvingWolfBonusMultiplier =
			affinityBaseCritMultiplierBonusDropdownItems.find(
				(e) => e.name === inputStarvingWolf,
			)?.value || 0;
		let ceaselessBonusMultiplier =
			affinityBaseCritMultiplierBonusDropdownItems.find(
				(e) => e.name === inputCeaseless,
			)?.value || 0;
		let expertBonusMultiplier =
			affinityBaseCritMultiplierBonusDropdownItems.find(
				(e) => e.name === inputExpertSkills,
			)?.value || 0;
		let issenBonusMultiplier =
			affinityBaseCritMultiplierBonusDropdownItems.find(
				(e) => e.name === inputIssenSkills,
			)?.value || 0;

		return (
			baseCritMultiplier +
			starvingWolfBonusMultiplier +
			ceaselessBonusMultiplier +
			expertBonusMultiplier +
			issenBonusMultiplier
		);
	}

	/** Elemental Exploit or Dissolver for melee. proceleex*/
	function getElementalExploit(
		weaponName: FrontierWeaponName,
		hitzone: number,
	) {
		// TODO Gunner
		let result = 0;
		let huntingHornDebuff =
			inputHuntingHornDebuff ===
				'Elemental Weakness (+4 on all Elemental Hitzones)' ||
			inputHuntingHornDebuff === 'Both (+4 on Elemental, +2 on Raw)'
				? 4
				: 0;
		let modifier =
			WeaponTypes.find((e) => e.name === weaponName)
				?.elementalExploitModifier || 0;

		if (
			inputElementalExploiter !== 'None' &&
			hitzone + huntingHornDebuff < outputElementalExploiter
		) {
			result = huntingHornDebuff + hitzone;
		} else if (
			inputElementalExploiter !== 'None' &&
			hitzone + huntingHornDebuff >= outputElementalExploiter
		) {
			result = huntingHornDebuff + modifier + hitzone;
		} else if (
			inputElementalExploiter === 'Determination (+X to ele hitzones)'
		) {
			result = huntingHornDebuff + modifier + hitzone;
		} else {
			result = huntingHornDebuff + hitzone;
		}

		return result;
	}

	/** Exploit Weakness, Thunder Clad Tonfa Modes*/
	function getExploitWeakness(
		weaponClass: FrontierWeaponClass,
		hitzone: number,
	) {
		let huntingHornModifier =
			inputHuntingHornDebuff === 'Raw Weakness (+2 on Raw Hitzones)' ||
			inputHuntingHornDebuff === 'Both (+4 on Elemental, +2 on Raw)'
				? 2
				: 0;

		// set initial hitzone
		let used = hitzone + outputThunderClad + huntingHornModifier;

		// critical shot, sniper, determination, precision in critical distance
		if (weaponClass === 'Gunner') {
			used = used + outputSniper;
		}

		// check if processed hitzones have been pushed to 35 and then apply Exploit Weakness
		if (outputExploitWeakness === 5 && (used >= 35 || used >= 30)) {
			used = used + 5;
		} else if (inputExploitWeakness === 'Determination (+5 on raw hitzones)') {
			//determination is always applied
			used = used + 5;
		}

		used = used + outputPointBreakthrough + outputAcidShot;

		return used;
	}

	const maxTrueRaw = 8_000;

	const minimumNumberValue = 0;
	const maximumNumberValue = 99999;
	const invalidNumberValueText = `Invalid value. Must be between ${minimumNumberValue} and ${maximumNumberValue}`;
	const invalidTrueRawText = `Invalid value. Must be between ${minimumNumberValue} and ${maxTrueRaw}`;

	const formulaOutputAttackA =
		display(`\\text{Attack A} = \\text{outputLengthUpTrueRaw} +\\newline \\text{outputPassives} +\\newline (\\text{inputNumberSigil1Attack} + \\text{inputNumberSigil2Attack} + \\text{inputNumberSigil3Attack}) +\\newline \\text{inputNumberConquestAttack} +\\newline \\text{outputAttackMedicine} +\\newline \\text{outputAttackSkill} +\\newline \\text{outputFoodAttack} +\\newline \\text{outputSeedAttack} +\\newline \\text{inputNumberStyleRankAttack} +\\newline \\text{inputNumberUnlimitedSigil} +\\newline \\text{outputDrugKnowledgeTotalTrueRaw} +\\newline \\text{outputDuremudiraAttack} +\\newline \\text{outputLoneWolfAttack} +\\newline \\text{outputCaravanAddition} +\\newline \\text{outputShiriagariAttack} +\\newline \\text{outputRoadAdvancement} +\\newline \\lfloor \\text{outputDrugKnowledgeMultiplier} \\times 0.025 \\rfloor +\\newline \\text{outputConsumptionSlayerAttack} +\\newline \\text{outputRoadLastStandAttack} +\\newline \\text{outputLanceRedPhialAttack} +\\newline \\text{outputRoadTowerAttack} +\\newline \\text{outputZenithTotalAttack} +\\newline \\text{outputAOETotalAttack}
`);

	$: formulaValuesOutputAttackA = `{${attackA}} = ${outputLengthUpTrueRaw} +\\newline ${outputPassives} +\\newline (${inputNumberSigil1Attack} + ${inputNumberSigil2Attack} + ${inputNumberSigil3Attack}) +\\newline ${inputNumberConquestAttack} +\\newline ${outputAttackMedicine} +\\newline ${outputAttackSkill} +\\newline ${outputFoodAttack} +\\newline ${outputSeedAttack} +\\newline ${inputNumberStyleRankAttack} +\\newline ${inputNumberUnlimitedSigil} +\\newline ${outputDrugKnowledgeTotalTrueRaw} +\\newline ${outputDuremudiraAttack} +\\newline ${outputLoneWolfAttack} +\\newline ${outputCaravanAddition} +\\newline ${outputShiriagariAttack} +\\newline ${outputRoadAdvancement} +\\newline \\lfloor ${outputDrugKnowledgeMultiplier} \\times 0.025 \\rfloor +\\newline ${outputConsumptionSlayerAttack} +\\newline ${outputRoadLastStandAttack} +\\newline ${outputLanceRedPhialAttack} +\\newline ${outputRoadTowerAttack} +\\newline ${outputZenithTotalAttack} +\\newline ${outputAOETotalAttack}
`;

	const formulaOutputAttackB =
		display(`\\text{Attack B} = \\text{outputRush} +\\newline \\text{outputStylishAssault} +\\newline \\text{outputFuriousAttack} +\\newline \\text{outputVigorousAddition} +\\newline \\text{outputCritConversionTrueRaw} +\\newline \\text{inputNumberVampirism} +\\newline \\text{outputObscurityTotal} +\\newline \\text{outputIncitement}
`);

	$: formulaValuesOutputAttackB = `{${attackB}} = ${outputRush} +\\newline ${outputStylishAssault} +\\newline ${outputFuriousAttack} +\\newline ${outputVigorousAddition} +\\newline ${outputCritConversionTrueRaw} +\\newline ${inputNumberVampirism} +\\newline ${outputObscurityTotal} +\\newline ${outputIncitement}
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
		display(`\\text{Internal Fire} = \\lfloor (\\frac{(\\text{inputNumberElementalValueReplacement} + \\text{inputNumberSigil1Element} \\times 10 + \\text{inputNumberSigil2Element} \\times 10 + \\text{inputNumberSigil3Element} \\times 10 + \\text{inputNumberUnlimitedSigil} \\times 10 + \\text{outputAOETotalElement}) \\times \\text{outputFireMultiplier} \\times \\text{outputZenithElementMultiplier} \\times \\text{outputElementalAttackMultiplier} \\times \\text{outputHHElementalSongMultiplier} \\times \\text{outputWeaponElementMultiplier} \\times \\text{outputFuriousMultiplier} \\times \\text{getElementMultiplier('Fire', inputElement)}}{\\text{10}}) \\times \\text{outputSharpnessMultiplier}\\rfloor
`);
	$: formulaValuesInternalFire = `${internalFire} = \\lfloor (\\frac{(${inputNumberElementalValueReplacement} + ${inputNumberSigil1Element} \\times 10 + ${inputNumberSigil2Element} \\times 10 + ${inputNumberSigil3Element} \\times 10 + ${inputNumberUnlimitedSigil} \\times 10 + ${outputAOETotalElement}) \\times ${outputFireMultiplier} \\times ${outputZenithElementMultiplier} \\times ${outputElementalAttackMultiplier} \\times ${outputHHElementalSongMultiplier} \\times ${outputWeaponElementMultiplier} \\times ${outputFuriousMultiplier} \\times ${getElementMultiplier('Fire', inputElement)}}{\\text{10}}) \\times ${outputSharpnessMultiplier}\\rfloor
`;

	const formulaInternalWater =
		display(`\\text{Internal Water} = \\lfloor (\\frac{(\\text{inputNumberElementalValueReplacement} + \\text{inputNumberSigil1Element} \\times 10 + \\text{inputNumberSigil2Element} \\times 10 + \\text{inputNumberSigil3Element} \\times 10 + \\text{inputNumberUnlimitedSigil} \\times 10 + \\text{outputAOETotalElement}) \\times \\text{outputWaterMultiplier} \\times \\text{outputZenithElementMultiplier} \\times \\text{outputElementalAttackMultiplier} \\times \\text{outputHHElementalSongMultiplier} \\times \\text{outputWeaponElementMultiplier} \\times \\text{outputFuriousMultiplier} \\times \\text{getElementMultiplier('Water', inputElement)}}{\\text{10}}) \\times \\text{outputSharpnessMultiplier}\\rfloor
`);
	$: formulaValuesInternalWater = `${internalWater} = \\lfloor (\\frac{(${inputNumberElementalValueReplacement} + ${inputNumberSigil1Element} \\times 10 + ${inputNumberSigil2Element} \\times 10 + ${inputNumberSigil3Element} \\times 10 + ${inputNumberUnlimitedSigil} \\times 10 + ${outputAOETotalElement}) \\times ${outputWaterMultiplier} \\times ${outputZenithElementMultiplier} \\times ${outputElementalAttackMultiplier} \\times ${outputHHElementalSongMultiplier} \\times ${outputWeaponElementMultiplier} \\times ${outputFuriousMultiplier} \\times ${getElementMultiplier('Water', inputElement)}}{\\text{10}}) \\times ${outputSharpnessMultiplier}\\rfloor
`;
	const formulaInternalThunder =
		display(`\\text{Internal Thunder} = \\lfloor (\\frac{(\\text{inputNumberElementalValueReplacement} + \\text{inputNumberSigil1Element} \\times 10 + \\text{inputNumberSigil2Element} \\times 10 + \\text{inputNumberSigil3Element} \\times 10 + \\text{inputNumberUnlimitedSigil} \\times 10 + \\text{outputAOETotalElement}) \\times \\text{outputThunderMultiplier} \\times \\text{outputZenithElementMultiplier} \\times \\text{outputElementalAttackMultiplier} \\times \\text{outputHHElementalSongMultiplier} \\times \\text{outputWeaponElementMultiplier} \\times \\text{outputFuriousMultiplier} \\times \\text{getElementMultiplier('Thunder', inputElement)}}{\\text{10}}) \\times \\text{outputSharpnessMultiplier}\\rfloor
`);
	$: formulaValuesInternalThunder = `${internalThunder} = \\lfloor (\\frac{(${inputNumberElementalValueReplacement} + ${inputNumberSigil1Element} \\times 10 + ${inputNumberSigil2Element} \\times 10 + ${inputNumberSigil3Element} \\times 10 + ${inputNumberUnlimitedSigil} \\times 10 + ${outputAOETotalElement}) \\times ${outputThunderMultiplier} \\times ${outputZenithElementMultiplier} \\times ${outputElementalAttackMultiplier} \\times ${outputHHElementalSongMultiplier} \\times ${outputWeaponElementMultiplier} \\times ${outputFuriousMultiplier} \\times ${getElementMultiplier('Thunder', inputElement)}}{\\text{10}}) \\times ${outputSharpnessMultiplier}\\rfloor
`;
	const formulaInternalIce =
		display(`\\text{Internal Ice} = \\lfloor (\\frac{(\\text{inputNumberElementalValueReplacement} + \\text{inputNumberSigil1Element} \\times 10 + \\text{inputNumberSigil2Element} \\times 10 + \\text{inputNumberSigil3Element} \\times 10 + \\text{inputNumberUnlimitedSigil} \\times 10 + \\text{outputAOETotalElement}) \\times \\text{outputIceMultiplier} \\times \\text{outputZenithElementMultiplier} \\times \\text{outputElementalAttackMultiplier} \\times \\text{outputHHElementalSongMultiplier} \\times \\text{outputWeaponElementMultiplier} \\times \\text{outputFuriousMultiplier} \\times \\text{getElementMultiplier('Ice', inputElement)}}{\\text{10}}) \\times \\text{outputSharpnessMultiplier}\\rfloor
`);
	$: formulaValuesInternalIce = `${internalIce} = \\lfloor (\\frac{(${inputNumberElementalValueReplacement} + ${inputNumberSigil1Element} \\times 10 + ${inputNumberSigil2Element} \\times 10 + ${inputNumberSigil3Element} \\times 10 + ${inputNumberUnlimitedSigil} \\times 10 + ${outputAOETotalElement}) \\times ${outputIceMultiplier} \\times ${outputZenithElementMultiplier} \\times ${outputElementalAttackMultiplier} \\times ${outputHHElementalSongMultiplier} \\times ${outputWeaponElementMultiplier} \\times ${outputFuriousMultiplier} \\times ${getElementMultiplier('Ice', inputElement)}}{\\text{10}}) \\times ${outputSharpnessMultiplier}\\rfloor
`;
	const formulaInternalDragon =
		display(`\\text{Internal Dragon} = \\lfloor (\\frac{(\\text{inputNumberElementalValueReplacement} + \\text{inputNumberSigil1Element} \\times 10 + \\text{inputNumberSigil2Element} \\times 10 + \\text{inputNumberSigil3Element} \\times 10 + \\text{inputNumberUnlimitedSigil} \\times 10 + \\text{outputAOETotalElement}) \\times \\text{outputDragonMultiplier} \\times \\text{outputZenithElementMultiplier} \\times \\text{outputElementalAttackMultiplier} \\times \\text{outputHHElementalSongMultiplier} \\times \\text{outputWeaponElementMultiplier} \\times \\text{outputFuriousMultiplier} \\times \\text{getElementMultiplier('Dragon', inputElement)}}{\\text{10}}) \\times \\text{outputSharpnessMultiplier}\\rfloor
`);
	$: formulaValuesInternalDragon = `${internalDragon} = \\lfloor (\\frac{(${inputNumberElementalValueReplacement} + ${inputNumberSigil1Element} \\times 10 + ${inputNumberSigil2Element} \\times 10 + ${inputNumberSigil3Element} \\times 10 + ${inputNumberUnlimitedSigil} \\times 10 + ${outputAOETotalElement}) \\times ${outputDragonMultiplier} \\times ${outputZenithElementMultiplier} \\times ${outputElementalAttackMultiplier} \\times ${outputHHElementalSongMultiplier} \\times ${outputWeaponElementMultiplier} \\times ${outputFuriousMultiplier} \\times ${getElementMultiplier('Dragon', inputElement)}}{\\text{10}}) \\times ${outputSharpnessMultiplier}\\rfloor
`;

	const internalAffinityFunctionString = `/**This is different from total affinity. */
	function getInternalAffinity(critMode: string, totalAffinity: number) {
		switch (critMode) {
			case 'All Crits':
				return 100;
			case 'Averaged':
				return Math.max(Math.min(totalAffinity, 100), 0);
			default:
				return 0;
		}
	}`;

	const critValueFunctionString = `	function getCritValue(
		inputStarvingWolf: string,
		inputCeaseless: string,
		inputExpertSkills: string,
		inputIssenSkills: string,
		outputTotalAffinity: number,
	) {
		if (outputTotalAffinity === 0) {
			return 1;
		}

		if (outputTotalAffinity < 0) {
			return 0.75;
		}

		let baseCritMultiplier = 1.25;

		let starvingWolfBonusMultiplier =
			affinityBaseCritMultiplierBonusDropdownItems.find(
				(e) => e.name === inputStarvingWolf,
			)?.value || 1;
		let ceaselessBonusMultiplier =
			affinityBaseCritMultiplierBonusDropdownItems.find(
				(e) => e.name === inputCeaseless,
			)?.value || 1;
		let expertBonusMultiplier =
			affinityBaseCritMultiplierBonusDropdownItems.find(
				(e) => e.name === inputExpertSkills,
			)?.value || 1;

		if (expertBonusMultiplier > 1) {
			return (
				baseCritMultiplier +
				starvingWolfBonusMultiplier +
				ceaselessBonusMultiplier +
				expertBonusMultiplier
			);
		}

		let issenBonusMultiplier =
			affinityBaseCritMultiplierBonusDropdownItems.find(
				(e) => e.name === inputIssenSkills,
			)?.value || 1;

		return (
			baseCritMultiplier +
			starvingWolfBonusMultiplier +
			ceaselessBonusMultiplier +
			issenBonusMultiplier
		);
	}`;

	const formulaInternalAffinity =
		display(`\\text{Internal Affinity} = \\text{getInternalAffinity}(\\text{inputCritMode},  \\text{outputIssenAffinity} +\\newline
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
	\\text{outputCeaselessAffinity} +\\newline
	\\text{outputDivaPrayerGemAffinity})`);
	$: formulaValuesInternalAffinity = `${internalAffinity} = \\text{getInternalAffinity}(\\text{${inputCritMode}}, ${outputIssenAffinity} +\\newline
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
	${outputCeaselessAffinity} +\\newline
	${outputDivaPrayerGemAffinity})`;

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
	\\text{outputGSActiveFeatureAffinity} +\\newline
	\\text{outputDivaPrayerGemAffinity} +\\newline
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
	${outputGSActiveFeatureAffinity} +\\newline
	${outputDivaPrayerGemAffinity} +\\newline
	${outputDrinkAffinity} +\\newline
	${outputStarvingWolfAffinity} +\\newline
	${outputCeaselessAffinity} +\\newline
	${outputFuriousAffinity} +\\newline
	${outputAOETotalAffinity}`;

	const formulaInternalTrueRaw = display(
		`\\begin{equation*} \\text{internalTrueRaw} = \\begin{cases} \\text{maxTrueRaw} & \\text{if } \\text{outputAttackCeiling} > 180 \\\\ \\lfloor \\text{outputFlatAdditions} + \\text{outputMultipliers} \\rfloor & \\text{otherwise} \\end{cases} \\end{equation*}`,
	);

	const formulaOutputDrugKnowledgeTotalTrueRaw = display(
		`\\begin{equation*} \\text{outputDrugKnowledgeTotalTrueRaw} = \\begin{cases} 0 & \\text{if } \\text{outputDrugKnowledgeMultiplier} \\ne 1 \\\\ \\lfloor \\lfloor \\frac{\\text{inputNumberStatusValue} \\times \\text{outputStatusAttackUpMultiplier} \\times \\text{outputStatusGuildPoogieMultiplier} \\times \\text{outputStatusSigilMultiplier} \\times \\text{outputFuriousMultiplier}}{10}\\rfloor \\times \\text{outputDrugKnowledgeMultiplier} \\times 0.658 \\rfloor & \\text{otherwise} \\end{cases} \\end{equation*}`,
	);

	const formulaOutputCritValue =
		display(`\\text{outputCritValue} = \\text{getCritValue(
		outputStarvingWolfAffinity,
		outputCeaselessAffinity,
		outputExpertAffinity,
		outputIssenAffinity
	)}`);
	$: formulaValuesOutputCritValue = `${outputCritValue} = \\text{getCritValue}(
		${outputStarvingWolfAffinity},
		${outputCeaselessAffinity},
		${outputExpertAffinity},
		${outputIssenAffinity}
	)`;

	const formulaOutputOtherMultipliers =
		display(`\\text{outputOtherMultipliers} =
	\\text{inputNumberTranscendRawMultiplier} \\times\\newline
	\\text{inputNumberLanceImpactMultiplier} \\times\\newline
	\\text{inputNumberRavientePowerSwordCrystalsMultiplier}`);
	$: formulaValuesOutputOtherMultipliers = `${outputOtherMultipliers} =
	${inputNumberTranscendRawMultiplier} \\times\\newline
	${inputNumberLanceImpactMultiplier} \\times\\newline
	${inputNumberRavientePowerSwordCrystalsMultiplier}`;

	// TODO?
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
	// TODO gunner formulas

	let rarity: FrontierRarity = 1;
	let weaponIconProps = {
		rarity: rarity,
	};

	let inputTextImportData = '';

	let modalHeading = '';
	let modalLabel = '';
	const url = $page.url.toString();
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
	let inputCritConversionUp = 'None';
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
	let inputCriticalDistanceMultiplier = '1.8x LBG & Bow Crit Distance';
	let inputBulletStrengthModifier = 'None (1x)';
	/**bowgunshotmodifier*/
	let inputShotMultiplier = 'Just Shot (1.3x)';
	/**HBGchargemulti*/
	let inputHbgChargeShot = 'Normal / Charge Lv 0 (1x)';
	let inputCompressedShotMultiplier = 'Not Compressed (0x)';
	/**bowbottles*/
	let inputBowCoatingsMultiplier = 'None (1x)';
	let inputBowChargeMultiplier = 'Lv4 (1.85x / 1.334x)';
	let inputQuickShot = 'Normal (All 1.0x)';
	/**eleshottype*/
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

	let inputNumberRoadFloor = 0;
	let inputNumberConquestAttack = 0;
	let inputNumberVampirism = 0;
	let inputNumberTotalMotionValue = 125;
	let inputNumberHitCount = 1;
	let inputNumberElementalMultiplier = 1;
	let inputNumberTrueRaw = 550;
	/**TODO some outputs dont use this that maybe should?*/
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
	let inputNumberLanceImpactMultiplier = 1;
	let inputNumberTranscendRawMultiplier = 1;
	let inputNumberRavientePowerSwordCrystalsMultiplier = 1;
	/**fakeele rangedfakeelement*/
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
	let inputNumberCuttingHitzone = 30;
	let inputNumberImpactHitzone = 30;
	let inputNumberShotHitzone = 30;
	let inputNumberFireHitzone = 30;
	let inputNumberWaterHitzone = 30;
	let inputNumberThunderHitzone = 30;
	let inputNumberIceHitzone = 30;
	let inputNumberDragonHitzone = 30;

	let inputWeaponMotionValuesSection = 'None';
	let inputWeaponMotionValuesSectionStyle: FrontierWeaponStyle =
		'Extreme Style';

	let sharedMotionValues = getWeaponSectionMotionValues(
		inputWeaponType,
		'Shared',
		true,
	);

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
		inputCritConversionUp: inputCritConversionUp,
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
		inputCriticalDistanceMultiplier: inputCriticalDistanceMultiplier,
		inputBulletStrengthModifier: inputBulletStrengthModifier,
		inputShotMultiplier: inputShotMultiplier,
		inputHbgChargeShot: inputHbgChargeShot,
		inputCompressedShotMultiplier: inputCompressedShotMultiplier,
		inputCompressedElementShot: inputCompressedElementShot,
		inputBowCoatingsMultiplier: inputBowCoatingsMultiplier,
		inputBowChargeMultiplier: inputBowChargeMultiplier,
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
		inputNumberCuttingHitzone: inputNumberCuttingHitzone,
		inputNumberImpactHitzone: inputNumberImpactHitzone,
		inputNumberShotHitzone: inputNumberShotHitzone,
		inputNumberFireHitzone: inputNumberFireHitzone,
		inputNumberWaterHitzone: inputNumberWaterHitzone,
		inputNumberThunderHitzone: inputNumberThunderHitzone,
		inputNumberIceHitzone: inputNumberIceHitzone,
		inputNumberDragonHitzone: inputNumberDragonHitzone,

		inputNumberDivaPrayerGemRedLevel: inputNumberDivaPrayerGemRedLevel,
		inputNumberDivaPrayerGemYellowLevel: inputNumberDivaPrayerGemYellowLevel,
		inputNumberDivaPrayerGemGreenLevel: inputNumberDivaPrayerGemGreenLevel,
		inputNumberDivaPrayerGemBlueLevel: inputNumberDivaPrayerGemBlueLevel,

		inputDivaPrayerGemRedName: inputDivaPrayerGemRedName,
		inputDivaPrayerGemYellowName: inputDivaPrayerGemYellowName,
		inputDivaPrayerGemGreenName: inputDivaPrayerGemGreenName,
		inputDivaPrayerGemBlueName: inputDivaPrayerGemBlueName,
	};

	$: modalBlurClass = modalOpen ? 'modal-open-blur' : 'modal-open-noblur';

	$: weaponSectionNames = getWeaponSectionNames(
		inputWeaponType,
		inputWeaponMotionValuesSectionStyle,
	);

	$: weaponIcon = getWeaponIcon(inputWeaponType);
	$: inputTextInputs = prettyPrintJson(inputs);

	$: outputStarvingWolfAffinity =
		affinityDropdownItems.find((item) => item.name === inputStarvingWolf)
			?.value || 0;

	$: addToDamageCalculatorHistoryLogs(
		'outputStarvingWolfAffinity',
		outputStarvingWolfAffinity.toString(),
	);

	$: outputCeaselessAffinity =
		affinityDropdownItems.find((item) => item.name === inputCeaseless)?.value ||
		0;

	$: addToDamageCalculatorHistoryLogs(
		'outputCeaselessAffinity',
		outputCeaselessAffinity.toString(),
	);

	$: outputFuriousAffinity =
		affinityDropdownItems.find((item) => item.name === inputFurious)?.value ||
		0;

	$: addToDamageCalculatorHistoryLogs(
		'outputFuriousAffinity',
		outputFuriousAffinity.toString(),
	);

	$: outputIssenAffinity =
		affinityDropdownItems.find((item) => item.name === inputIssenSkills)
			?.value || 0;

	$: addToDamageCalculatorHistoryLogs(
		'outputIssenAffinity',
		outputIssenAffinity.toString(),
	);

	$: outputSharpnessAffinity =
		affinityDropdownItems.find(
			(item) => item.name === inputMeleeSharpnessAffinity,
		)?.value || 0;

	$: addToDamageCalculatorHistoryLogs(
		'outputSharpnessAffinity',
		outputSharpnessAffinity.toString(),
	);

	$: outputStyleRankAffinity =
		affinityDropdownItems.find((item) => item.name === inputStyleRankAffinity)
			?.value || 0;

	$: addToDamageCalculatorHistoryLogs(
		'outputStyleRankAffinity',
		outputStyleRankAffinity.toString(),
	);

	$: outputExpertAffinity =
		affinityDropdownItems.find((item) => item.name === inputExpertSkills)
			?.value || 0;

	$: addToDamageCalculatorHistoryLogs(
		'outputExpertAffinity',
		outputExpertAffinity.toString(),
	);

	$: outputFlashConversionAffinity =
		affinityDropdownItems.find((item) => item.name === inputFlashConversion)
			?.value || 0;

	$: addToDamageCalculatorHistoryLogs(
		'outputFlashConversionAffinity',
		outputFlashConversionAffinity.toString(),
	);

	$: outputGSActiveFeatureAffinity =
		affinityDropdownItems.find((item) => item.name === inputGsActiveFeature)
			?.value || 0;

	$: addToDamageCalculatorHistoryLogs(
		'outputGSActiveFeatureAffinity',
		outputGSActiveFeatureAffinity.toString(),
	);

	$: outputDrinkAffinity =
		affinityDropdownItems.find((item) => item.name === inputAffinityItems)
			?.value || 0;

	$: addToDamageCalculatorHistoryLogs(
		'outputDrinkAffinity',
		outputDrinkAffinity.toString(),
	);

	$: outputAOEAffinityCount =
		sigilDropdownItems.find((item) => item.name === inputAoeAffinitySigil)
			?.value || 0;

	$: addToDamageCalculatorHistoryLogs(
		'outputAOEAffinityCount',
		outputAOEAffinityCount.toString(),
	);

	/** This should be the correct one, not 20 * count + 2 * value.*/
	$: outputAOETotalAffinity =
		outputAOEAffinityCount === 0 || inputNumberAOEAffinitySigil === 0
			? 0
			: (20 + inputNumberAOEAffinitySigil * 2) * outputAOEAffinityCount;

	$: addToDamageCalculatorHistoryLogs(
		'outputAOETotalAffinity',
		outputAOETotalAffinity.toString(),
	);

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
		outputGSActiveFeatureAffinity +
		outputDivaPrayerGemAffinity +
		outputDrinkAffinity +
		outputStarvingWolfAffinity +
		outputCeaselessAffinity +
		outputFuriousAffinity +
		outputAOETotalAffinity;

	$: addToDamageCalculatorHistoryLogs(
		'outputTotalAffinity',
		outputTotalAffinity.toString(),
	);

	$: outputWeaponTypeMultiplier =
		WeaponTypes.find((weaponType) => weaponType.name === inputWeaponType)
			?.bloatAttackMultiplier || 1.2;

	$: addToDamageCalculatorHistoryLogs(
		'outputWeaponTypeMultiplier',
		outputWeaponTypeMultiplier.toString(),
	);

	$: outputRoadAdvLvFlr =
		multipliedBaseDropdownItems.find((item) => item.name === inputRoadAdvLvFlr)
			?.value || 0;

	$: addToDamageCalculatorHistoryLogs(
		'outputRoadAdvLvFlr',
		outputRoadAdvLvFlr.toString(),
	);

	$: outputRoadAdvancement = getRoadAdvancementValue(
		outputRoadAdvLvFlr,
		inputNumberRoadFloor,
	);

	$: addToDamageCalculatorHistoryLogs(
		'inputNumberRoadFloor',
		inputNumberRoadFloor.toString(),
	);

	$: addToDamageCalculatorHistoryLogs(
		'outputRoadAdvancement',
		outputRoadAdvancement.toString(),
	);

	$: outputVigorousUp = inputVigorousUp === 'Active (+50 Ranged, +100 Melee)';

	$: addToDamageCalculatorHistoryLogs(
		'outputVigorousUp',
		outputVigorousUp.toString(),
	);

	$: outputAdrenaline =
		multipliersDropdownItems.find(
			(item) => item.name === inputAdrenalineVigorous,
		)?.value || 0;

	$: addToDamageCalculatorHistoryLogs(
		'outputAdrenaline',
		outputAdrenaline.toString(),
	);

	$: outputVigorousAddition =
		outputVigorousUp && outputAdrenaline === 1.15
			? outputWeaponClass === 'Blademaster'
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

	/** This should be the correct one, not 25 * count + 5 * value.*/
	$: outputAOETotalAttack =
		outputAOEAttackCount === 0 || inputNumberAOEAttackSigil === 0
			? 0
			: (25 + inputNumberAOEAttackSigil * 5) * outputAOEAttackCount;

	$: outputAOETotalElementCount =
		sigilDropdownItems.find((item) => item.name === inputAoeElementSigil)
			?.value || 0;

	$: outputRush =
		multipliedBaseDropdownItems.find((item) => item.name === inputRush)
			?.value || 0;

	$: addToDamageCalculatorHistoryLogs('outputRush', outputRush.toString());

	$: outputStylishAssault =
		multipliedBaseDropdownItems.find(
			(item) => item.name === inputStylishAssault,
		)?.value || 0;

	$: addToDamageCalculatorHistoryLogs(
		'outputStylishAssault',
		outputStylishAssault.toString(),
	);

	$: outputFuriousAttack =
		multipliedBaseDropdownItems.find((item) => item.name === inputFurious)
			?.value || 0;

	$: addToDamageCalculatorHistoryLogs(
		'outputFuriousAttack',
		outputFuriousAttack.toString(),
	);

	/**furious ele*/
	$: outputFuriousMultiplier =
		multipliersDropdownItems.find((item) => item.name === inputFurious)
			?.value || 1;

	$: addToDamageCalculatorHistoryLogs(
		'outputFuriousMultiplier',
		outputFuriousMultiplier.toString(),
	);

	$: outputCritConversionUpMultiplier =
		multipliersDropdownItems.find((item) => item.name === inputCritConversionUp)
			?.value || 0;

	$: addToDamageCalculatorHistoryLogs(
		'outputCritConversionUpMultiplier',
		outputCritConversionUpMultiplier.toString(),
	);

	let critConversionCalculatorIssenAffinity = '0';
	let critConversionCalculatorSharpnessAffinity = '10';
	let critConversionCalculatorSigil1Affinity = 15;
	let critConversionCalculatorSigil2Affinity = 0;
	let critConversionCalculatorSigil3Affinity = 0;
	let critConversionCalculatorStyleRankAffinity = '26';
	let critConversionCalculatorExpertAffinity = '100';
	let critConversionCalculatorGSActiveFeatureAffinity = '0';
	let critConversionCalculatorDrinkAffinity = '30';
	let critConversionCalculatorStarvingWolfAffinity = '50';
	let critConversionCalculatorCeaselessAffinity = '60';
	let critConversionCalculatorFuriousAffinity = '40';
	let critConversionCalculatorDivaPrayerGemAffinity = '100';
	let critConversionCalculatorAOEAffinityCount = '1';
	let critConversionCalculatorAOEAffinitySigil = 0;
	$: critConversionCalculatorAOETotalAffinity =
		Number(critConversionCalculatorAOEAffinityCount) === 0 ||
		critConversionCalculatorAOEAffinitySigil === 0
			? 0
			: (20 + critConversionCalculatorAOEAffinitySigil * 2) *
				Number(critConversionCalculatorAOEAffinityCount);

	let critConversionCalculatorCritConversionUp = 'None';
	let critConversionCalculatorNaturalAffinity = 100;
	let critConversionCalculatorFlashConversion = 'Critical Conversion (+30%)';

	$: critConversionCalculatorCritConversionUpMultiplier =
		multipliersDropdownItems.find(
			(item) => item.name === critConversionCalculatorCritConversionUp,
		)?.value || 0;
	$: critConversionCalculatorFlashConversionAffinity =
		affinityDropdownItems.find(
			(item) => item.name === critConversionCalculatorFlashConversion,
		)?.value || 0;
	$: critConversionCalculatorTrueRaw = getCritConversionTrueRaw(
		critConversionCalculatorTotalAffinity,
		critConversionCalculatorCritConversionUpMultiplier,
		critConversionCalculatorNaturalAffinity,
		critConversionCalculatorFlashConversionAffinity,
	);

	$: critConversionCalculatorExcessAffinity = Math.max(
		0,
		critConversionCalculatorTotalAffinity - 100,
	);

	$: critConversionCalculatorTotalAffinity =
		Number(critConversionCalculatorIssenAffinity) +
		Number(critConversionCalculatorSharpnessAffinity) +
		critConversionCalculatorSigil1Affinity +
		critConversionCalculatorSigil2Affinity +
		critConversionCalculatorSigil3Affinity +
		Number(critConversionCalculatorStyleRankAffinity) +
		Number(critConversionCalculatorExpertAffinity) +
		critConversionCalculatorNaturalAffinity +
		critConversionCalculatorFlashConversionAffinity +
		Number(critConversionCalculatorGSActiveFeatureAffinity) +
		Number(critConversionCalculatorDrinkAffinity) +
		Number(critConversionCalculatorStarvingWolfAffinity) +
		Number(critConversionCalculatorCeaselessAffinity) +
		Number(critConversionCalculatorFuriousAffinity) +
		critConversionCalculatorAOETotalAffinity +
		Number(critConversionCalculatorDivaPrayerGemAffinity);

	$: outputCritConversionTrueRaw = getCritConversionTrueRaw(
		outputTotalAffinity,
		outputCritConversionUpMultiplier,
		inputNumberNaturalAffinity,
		outputFlashConversionAffinity,
	);

	$: addToDamageCalculatorHistoryLogs(
		'outputCritConversionTrueRaw',
		outputCritConversionTrueRaw.toString(),
	);

	$: outputObscurityLevel =
		multipliedBaseDropdownItems.find((item) => item.name === inputObscurity)
			?.value || 0;

	$: outputObscurityTotal = getObscurityValue(
		inputWeaponType,
		outputObscurityLevel,
	);

	$: addToDamageCalculatorHistoryLogs(
		'outputObscurityTotal',
		outputObscurityTotal.toString(),
	);

	$: outputIncitement =
		multipliedBaseDropdownItems.find((item) => item.name === inputIncitement)
			?.value || 0;

	/** Affects truerawvalue*/
	$: outputLengthUpTrueRaw = getLengthAttackValue(
		inputLengthUp,
		inputNumberTrueRaw,
	);

	$: addToDamageCalculatorHistoryLogs(
		'outputLengthUpTrueRaw',
		outputLengthUpTrueRaw.toString(),
	);

	/** Rush / Stylish Assault / Vampirism / Flash Conversion / Obscurity / Incitement / Furious / Vigorous Up
does not get multiplied by horn */
	$: attackB =
		outputRush +
		outputStylishAssault +
		outputFuriousAttack +
		outputVigorousAddition +
		outputCritConversionTrueRaw +
		inputNumberVampirism +
		outputObscurityTotal +
		outputIncitement;

	$: addToDamageCalculatorHistoryLogs('attackB', attackB.toString());

	$: outputAttackMedicine =
		multipliedBaseDropdownItems.find(
			(item) => item.name === inputAttackMedicine,
		)?.value || 0;

	$: addToDamageCalculatorHistoryLogs(
		'outputAttackMedicine',
		outputAttackMedicine.toString(),
	);

	$: outputAttackSkill =
		multipliedBaseDropdownItems.find((item) => item.name === inputAttackSkills)
			?.value || 0;

	$: addToDamageCalculatorHistoryLogs(
		'outputAttackSkill',
		outputAttackSkill.toString(),
	);

	$: outputFoodAttack =
		multipliedBaseDropdownItems.find(
			(item) => item.name === inputFoodConsumables,
		)?.value || 0;

	$: addToDamageCalculatorHistoryLogs(
		'outputFoodAttack',
		outputFoodAttack.toString(),
	);

	$: outputSeedAttack =
		multipliedBaseDropdownItems.find(
			(item) => item.name === inputSeedsFlutesCat,
		)?.value || 0;

	$: addToDamageCalculatorHistoryLogs(
		'outputSeedAttack',
		outputSeedAttack.toString(),
	);

	$: outputDrugKnowledgeMultiplier =
		statusSkillsDropdownItems.find((item) => item.name === inputDrugKnowledge)
			?.value || 1;

	$: addToDamageCalculatorHistoryLogs(
		'outputDrugKnowledgeMultiplier',
		outputDrugKnowledgeMultiplier.toString(),
	);

	$: outputStatusGuildPoogieMultiplier =
		statusSkillsDropdownItems.find((item) => item.name === inputGuildPoogie)
			?.value || 1;

	$: addToDamageCalculatorHistoryLogs(
		'outputStatusGuildPoogieMultiplier',
		outputStatusGuildPoogieMultiplier.toString(),
	);

	$: outputMonsterStatusInflictedMultiplier =
		monsterStatusDropdownOptions.find(
			(item) => item.name === inputMonsterStatus,
		)?.value || 1;

	$: addToDamageCalculatorHistoryLogs(
		'outputMonsterStatusInflictedMultiplier',
		outputMonsterStatusInflictedMultiplier.toString(),
	);

	$: outputDrugKnowledgeTotalTrueRaw = getDrugKnowledgeAddition(
		outputDrugKnowledgeMultiplier,
		inputNumberStatusValue,
		outputStatusAttackUpMultiplier,
		outputStatusGuildPoogieMultiplier,
		outputStatusSigilMultiplier,
		outputFuriousMultiplier,
	);

	$: addToDamageCalculatorHistoryLogs(
		'outputDrugKnowledgeTotalTrueRaw',
		outputDrugKnowledgeTotalTrueRaw.toString(),
	);

	/**statusAssaultToggle statusassault? TODO unused by original? Edit: Its used but the execution makes it change to another value instantly in the original code.*/
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

	$: addToDamageCalculatorHistoryLogs(
		'outputStatusAssault',
		outputStatusAssault.toString(),
	);

	/**statusStatusattack*/
	$: outputStatusAttackUpMultiplier =
		statusSkillsDropdownItems.find((item) => item.name === inputStatusAttackUp)
			?.value || 1;

	$: addToDamageCalculatorHistoryLogs(
		'outputStatusAttackUpMultiplier',
		outputStatusAttackUpMultiplier.toString(),
	);

	$: outputPassives =
		multipliedBaseDropdownItems.find((item) => item.name === inputPassiveItems)
			?.value || 0;

	$: addToDamageCalculatorHistoryLogs(
		'outputPassives',
		outputPassives.toString(),
	);

	$: outputLoneWolfAttack =
		multipliedBaseDropdownItems.find((item) => item.name === inputLoneWolf)
			?.value || 0;

	$: addToDamageCalculatorHistoryLogs(
		'outputLoneWolfAttack',
		outputLoneWolfAttack.toString(),
	);

	$: outputDuremudiraAttack =
		multipliedBaseDropdownItems.find(
			(item) => item.name === inputDuremudiraAttack,
		)?.value || 0;

	$: addToDamageCalculatorHistoryLogs(
		'outputDuremudiraAttack',
		outputDuremudiraAttack.toString(),
	);

	$: outputShiriagariAttack =
		multipliedBaseDropdownItems.find((item) => item.name === inputShiriagari)
			?.value || 0;

	$: addToDamageCalculatorHistoryLogs(
		'outputShiriagariAttack',
		outputShiriagariAttack.toString(),
	);

	$: outputConsumptionSlayerAttack =
		multipliedBaseDropdownItems.find(
			(item) => item.name === inputConsumptionSlayer,
		)?.value || 0;

	$: addToDamageCalculatorHistoryLogs(
		'outputConsumptionSlayerAttack',
		outputConsumptionSlayerAttack.toString(),
	);

	/**bowgunshotmodifier*/
	$: outputShotMultiplier =
		gunnerDropdownItems.find((item) => item.name === inputShotMultiplier)
			?.value || 1;

	$: addToDamageCalculatorHistoryLogs(
		'outputShotMultiplier',
		outputShotMultiplier.toString(),
	);

	$: outputCriticalDistanceMultiplier =
		gunnerDropdownItems.find((e) => e.name === inputCriticalDistanceMultiplier)
			?.value || 1;

	$: addToDamageCalculatorHistoryLogs(
		'outputCriticalDistanceMultiplier',
		outputCriticalDistanceMultiplier.toString(),
	);

	/** coatingmod*/
	$: outputBowCoatingModifier =
		inputConsumptionSlayer === 'Active (+100)'
			? outputBowCoatingsMultiplier + 0.2
			: outputBowCoatingsMultiplier;

	$: addToDamageCalculatorHistoryLogs(
		'outputBowCoatingModifier',
		outputBowCoatingModifier.toString(),
	);

	/**bowbottles*/
	$: outputBowCoatingsMultiplier =
		elementDropdownItems.find(
			(item) => item.name === inputBowCoatingsMultiplier,
		)?.value || 1;

	$: addToDamageCalculatorHistoryLogs(
		'outputBowCoatingsMultiplier',
		outputBowCoatingsMultiplier.toString(),
	);

	$: outputRoadLastStandAttack =
		multipliedBaseDropdownItems.find((item) => item.name === inputRoadLastStand)
			?.value || 0;

	$: addToDamageCalculatorHistoryLogs(
		'outputRoadLastStandAttack',
		outputRoadLastStandAttack.toString(),
	);

	$: outputLanceRedPhialAttack =
		multipliedBaseDropdownItems.find((item) => item.name === inputLanceHbg)
			?.value || 0;

	$: addToDamageCalculatorHistoryLogs(
		'outputLanceRedPhialAttack',
		outputLanceRedPhialAttack.toString(),
	);

	$: outputRoadTowerAttack =
		multipliedBaseDropdownItems.find((item) => item.name === inputRoadAttack)
			?.value || 0;

	$: addToDamageCalculatorHistoryLogs(
		'outputRoadTowerAttack',
		outputRoadTowerAttack.toString(),
	);

	$: attackA =
		outputLengthUpTrueRaw +
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
		inputNumberUnlimitedSigil +
		outputDrugKnowledgeTotalTrueRaw +
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

	$: addToDamageCalculatorHistoryLogs('attackA', attackA.toString());

	$: outputHuntingHornMultiplier =
		multipliersDropdownItems.find((item) => item.name === inputHhAttackSongs)
			?.value || 1;

	$: addToDamageCalculatorHistoryLogs(
		'outputHuntingHornMultiplier',
		outputHuntingHornMultiplier.toString(),
	);

	$: outputCombatSupremacyAttackMultiplier =
		multipliersDropdownItems.find((item) => item.name === inputCombatSupremacy)
			?.value || 1;

	$: addToDamageCalculatorHistoryLogs(
		'outputCombatSupremacyAttackMultiplier',
		outputCombatSupremacyAttackMultiplier.toString(),
	);

	$: outputHidenMultiplier =
		multipliersDropdownItems.find((item) => item.name === inputHidenSkills)
			?.value || 1;

	$: addToDamageCalculatorHistoryLogs(
		'outputHidenMultiplier',
		outputHidenMultiplier.toString(),
	);

	$: outputWeaponSpecificMultiplier =
		multipliersDropdownItems.find((item) => item.name === inputWeaponSpecific)
			?.value || 1;

	$: addToDamageCalculatorHistoryLogs(
		'outputWeaponSpecificMultiplier',
		outputWeaponSpecificMultiplier.toString(),
	);

	/**TODO legacy unused*/
	const outputHammerMultiplier = 1;
	// multipliersDropdownItems.find((item) => item.name === inputBowChargeMultiplier)
	// 	?.value || 1;

	/**quickshotchargemodifier and quickshotmode*/
	$: outputQuickShotChargeModifier =
		gunnerDropdownItems.find((item) => item.name === inputQuickShot)?.value ||
		0;

	/*bowchargelevel and elebowchargelevel. chargeLevel is bowchargemodifier*/
	$: outputBowChargeMultiplierLevels =
		bowChargeLevels.find(
			(item) => item.chargeModifier === inputBowChargeMultiplier,
		) || undefined;

	$: outputMultipliers = Math.floor(
		Math.floor(attackA * outputHuntingHornMultiplier + attackB) *
			outputAdrenaline *
			outputCombatSupremacyAttackMultiplier *
			outputWeaponSpecificMultiplier *
			outputHidenMultiplier *
			outputHammerMultiplier,
	);

	$: addToDamageCalculatorHistoryLogs(
		'outputMultipliers',
		outputMultipliers.toString(),
	);

	$: outputPartnyaBond =
		flatAdditionsDropdownItems.find((item) => item.name === inputPartnyaaBond)
			?.value || 0;

	$: addToDamageCalculatorHistoryLogs(
		'outputPartnyaBond',
		outputPartnyaBond.toString(),
	);

	$: outputHunterBond =
		flatAdditionsDropdownItems.find((item) => item.name === inputBondMaleHunter)
			?.value || 0;

	$: addToDamageCalculatorHistoryLogs(
		'outputHunterBond',
		outputHunterBond.toString(),
	);

	$: outputAssist =
		flatAdditionsDropdownItems.find((item) => item.name === inputAssistance)
			?.value || 0;

	$: addToDamageCalculatorHistoryLogs('outputAssist', outputAssist.toString());

	$: outputSoul =
		flatAdditionsDropdownItems.find((item) => item.name === inputRedSoul)
			?.value || 0;

	$: addToDamageCalculatorHistoryLogs('outputSoul', outputSoul.toString());

	$: outputArmor1 =
		flatAdditionsDropdownItems.find((item) => item.name === inputArmor1)
			?.value || 0;

	$: addToDamageCalculatorHistoryLogs('outputArmor1', outputArmor1.toString());

	$: outputArmor2 =
		flatAdditionsDropdownItems.find((item) => item.name === inputOriginArmor)
			?.value || 0;

	$: addToDamageCalculatorHistoryLogs('outputArmor2', outputArmor2.toString());

	$: outputArmorG =
		flatAdditionsDropdownItems.find((item) => item.name === inputGArmorPieces)
			?.value || 0;

	$: addToDamageCalculatorHistoryLogs('outputArmorG', outputArmorG.toString());

	$: outputSecretTech =
		flatAdditionsDropdownItems.find(
			(item) => item.name === inputGsr999SecretTech,
		)?.value || 0;

	$: addToDamageCalculatorHistoryLogs(
		'outputSecretTech',
		outputSecretTech.toString(),
	);

	$: outputFlatAdditions =
		outputPartnyaBond +
		outputHunterBond +
		outputAssist +
		outputSoul +
		outputArmor1 +
		outputArmor2 +
		outputArmorG +
		outputSecretTech;

	$: addToDamageCalculatorHistoryLogs(
		'outputFlatAdditions',
		outputFlatAdditions.toString(),
	);

	$: outputCompressedShotsMultiplier =
		gunnerDropdownItems.find(
			(item) => item.name === inputCompressedShotMultiplier,
		)?.value || 0; // TODO

	$: addToDamageCalculatorHistoryLogs(
		'outputCompressedShotsMultiplier',
		outputCompressedShotsMultiplier.toString(),
	);

	/**compressedshotpower*/
	$: outputCompressedShotPower = Math.floor(
		inputNumberCompressedShot * outputCompressedShotsMultiplier,
	);

	$: addToDamageCalculatorHistoryLogs(
		'outputCompressedShotPower',
		outputCompressedShotPower.toString(),
	);

	$: outputCritValue = getCritValue(
		inputStarvingWolf,
		inputCeaseless,
		inputExpertSkills,
		inputIssenSkills,
		outputTotalAffinity,
	);

	$: outputCritMultiplier = Number(outputCritValue.toFixed(2));

	$: addToDamageCalculatorHistoryLogs(
		'outputCritValue',
		outputCritValue.toString(),
	);

	$: outputSwordAndShieldMultiplier =
		inputWeaponType === 'Sword and Shield' ? 1.25 : 1;

	$: addToDamageCalculatorHistoryLogs(
		'outputSwordAndShieldMultiplier',
		outputSwordAndShieldMultiplier.toString(),
	);

	$: outputOtherMultipliers =
		inputNumberTranscendRawMultiplier *
		inputNumberLanceImpactMultiplier *
		inputNumberRavientePowerSwordCrystalsMultiplier;

	$: addToDamageCalculatorHistoryLogs(
		'outputOtherMultipliers',
		outputOtherMultipliers.toString(),
	);

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

	$: addToDamageCalculatorHistoryLogs(
		'outputGunlanceRaw',
		outputGunlanceRaw.toString(),
	);

	$: addToDamageCalculatorHistoryLogs(
		'outputGunlanceShellType',
		outputGunlanceShellType.toString(),
	);

	$: addToDamageCalculatorHistoryLogs(
		'outputGunlanceShellDamage',
		outputGunlanceShellDamage.toString(),
	);

	$: outputGunlanceShell = Math.floor(outputGunlanceShellDamage);
	$: outputGunlanceShellBoosted = Math.floor(outputGunlanceShellDamage * 1.5);

	$: addToDamageCalculatorHistoryLogs(
		'outputGunlanceShell',
		outputGunlanceShell.toString(),
	);

	$: addToDamageCalculatorHistoryLogs(
		'outputGunlanceShellBoosted',
		outputGunlanceShellBoosted.toString(),
	);

	$: outputSharpnessMultiplier =
		blademasterDropdownItems.find((item) => item.name === inputSharpness)
			?.value || 0;

	$: outputOldSharpnessMultiplier =
		oldBlademasterSharpness.find((item) => item.name === inputSharpness)
			?.value || 0;

	$: addToDamageCalculatorHistoryLogs(
		'outputSharpnessMultiplier',
		outputSharpnessMultiplier.toString(),
	);

	$: outputElementalExploiter =
		hitzoneValueModifiersDropdownItems.find(
			(item) => item.name === inputElementalExploiter,
		)?.value || 0;

	$: addToDamageCalculatorHistoryLogs(
		'outputElementalExploiter',
		outputElementalExploiter.toString(),
	);

	$: outputThunderClad =
		hitzoneValueModifiersDropdownItems.find(
			(item) => item.name === inputThunderClad,
		)?.value || 0;
	$: addToDamageCalculatorHistoryLogs(
		'outputThunderClad',
		outputThunderClad.toString(),
	);

	$: outputSniper =
		hitzoneValueModifiersDropdownItems.find(
			(item) => item.name === inputPrecisionSniperCritS,
		)?.value || 0;

	$: addToDamageCalculatorHistoryLogs('outputSniper', outputSniper.toString());

	$: outputExploitWeakness =
		hitzoneValueModifiersDropdownItems.find(
			(item) => item.name === inputExploitWeakness,
		)?.value || 0;

	$: addToDamageCalculatorHistoryLogs(
		'outputExploitWeakness',
		outputExploitWeakness.toString(),
	);

	$: outputAcidShot =
		hitzoneValueModifiersDropdownItems.find(
			(item) => item.name === inputAcidShots,
		)?.value || 0;

	$: addToDamageCalculatorHistoryLogs(
		'outputAcidShot',
		outputAcidShot.toString(),
	);

	$: outputPointBreakthrough =
		hitzoneValueModifiersDropdownItems.find(
			(item) => item.name === inputPointBreakthrough,
		)?.value || 0;

	$: addToDamageCalculatorHistoryLogs(
		'outputPointBreakthrough',
		outputPointBreakthrough.toString(),
	);

	$: outputAbsoluteDefenseMultiplier =
		otherDropdownItems.find((item) => item.name === inputAbsoluteDefense)
			?.value || 1;

	$: addToDamageCalculatorHistoryLogs(
		'outputAbsoluteDefenseMultiplier',
		outputAbsoluteDefenseMultiplier.toString(),
	);

	$: outputPremiumCourseMultiplier =
		otherDropdownItems.find((item) => item.name === inputPremiumBoost)?.value ||
		1;

	$: addToDamageCalculatorHistoryLogs(
		'outputPremiumCourseMultiplier',
		outputPremiumCourseMultiplier.toString(),
	);

	$: outputFencingMultiplier = inputFencing === '+2' ? 1.2 : 1;

	$: addToDamageCalculatorHistoryLogs(
		'outputFencingMultiplier',
		outputFencingMultiplier.toString(),
	);

	$: outputFireMultiplier =
		elementalSkillsDropdownItems.find(
			(item) => item.name === inputFireMultipliers,
		)?.value || 1;

	$: addToDamageCalculatorHistoryLogs(
		'outputFireMultiplier',
		outputFireMultiplier.toString(),
	);

	$: outputWaterMultiplier =
		elementalSkillsDropdownItems.find(
			(item) => item.name === inputWaterMultipliers,
		)?.value || 1;

	$: addToDamageCalculatorHistoryLogs(
		'outputWaterMultiplier',
		outputWaterMultiplier.toString(),
	);

	$: outputThunderMultiplier =
		elementalSkillsDropdownItems.find(
			(item) => item.name === inputThunderMultipliers,
		)?.value || 1;

	$: addToDamageCalculatorHistoryLogs(
		'outputThunderMultiplier',
		outputThunderMultiplier.toString(),
	);

	$: outputIceMultiplier =
		elementalSkillsDropdownItems.find(
			(item) => item.name === inputIceMultipliers,
		)?.value || 1;

	$: addToDamageCalculatorHistoryLogs(
		'outputIceMultiplier',
		outputIceMultiplier.toString(),
	);

	$: outputDragonMultiplier =
		elementalSkillsDropdownItems.find(
			(item) => item.name === inputDragonMultipliers,
		)?.value || 1;

	$: addToDamageCalculatorHistoryLogs(
		'outputDragonMultiplier',
		outputDragonMultiplier.toString(),
	);

	$: outputStatusSigilMultiplier =
		statusSkillsDropdownItems.find((item) => item.name === inputStatusSigil)
			?.value || 1;

	$: addToDamageCalculatorHistoryLogs(
		'outputStatusSigilMultiplier',
		outputStatusSigilMultiplier.toString(),
	);

	$: outputWeaponStatusModifiers =
		statusSkillsDropdownItems.find(
			(item) => item.name === inputWeaponStatusModifiers,
		)?.value || 1;

	$: addToDamageCalculatorHistoryLogs(
		'outputWeaponStatusModifiers',
		outputWeaponStatusModifiers.toString(),
	);

	/**eleHalk*/
	$: outputElementalAttackMultiplier =
		elementalSkillsDropdownItems.find(
			(item) => item.name === inputElementalAttackMultiplier,
		)?.value || 1;

	$: addToDamageCalculatorHistoryLogs(
		'outputElementalAttackMultiplier',
		outputElementalAttackMultiplier.toString(),
	);

	/**eleHH*/
	$: outputHHElementalSongMultiplier =
		elementalSkillsDropdownItems.find(
			(item) => item.name === inputHhElementalUp,
		)?.value || 1;

	$: addToDamageCalculatorHistoryLogs(
		'outputHHElementalSongMultiplier',
		outputHHElementalSongMultiplier.toString(),
	);

	/**eleSwaxe*/
	$: outputWeaponElementMultiplier =
		elementDropdownItems.find(
			(item) => item.name === inputWeaponElementMultipliers,
		)?.value || 1;

	$: addToDamageCalculatorHistoryLogs(
		'outputWeaponElementMultiplier',
		outputWeaponElementMultiplier.toString(),
	);

	$: addToDamageCalculatorHistoryLogs(
		'inputElementalExploiter',
		inputElementalExploiter.toString(),
	);

	$: addToDamageCalculatorHistoryLogs(
		'internalAttack',
		internalAttack.toString(),
	);

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

	/**ACtrueout. ACtrueoutHolder?*/
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
		outputWeaponClass === 'Blademaster'
			? Math.floor(
					getMaxTrueRaw(internalTrueRaw) *
						outputSharpnessMultiplier *
						outputSwordAndShieldMultiplier *
						outputOtherMultipliers *
						outputMonsterStatusInflictedMultiplier,
				)
			: Math.floor(
					getMaxTrueRaw(internalTrueRaw) *
						outputOtherMultipliers *
						outputMonsterStatusInflictedMultiplier,
				);

	/** This should be the correct one, not 50 * count + 50 * value. aoeEle*/
	$: outputAOETotalElement =
		outputAOETotalElementCount === 0 || inputNumberAOEElementSigil === 0
			? 0
			: (50 + inputNumberAOEElementSigil * 50) * outputAOETotalElementCount;

	$: fireValueMultiplier = getElementMultiplier('Fire', inputElement);
	$: waterValueMultiplier = getElementMultiplier('Water', inputElement);
	$: thunderValueMultiplier = getElementMultiplier('Thunder', inputElement);
	$: iceValueMultiplier = getElementMultiplier('Ice', inputElement);
	$: dragonValueMultiplier = getElementMultiplier('Dragon', inputElement);

	/**This is different from total affinity. */
	function getInternalAffinity(critMode: string, totalAffinity: number) {
		switch (critMode) {
			case 'All Crits':
				return 100;
			case 'Averaged':
				return Math.max(Math.min(totalAffinity, 100), 0);
			default:
				return 0;
		}
	}

	$: internalAffinity = getInternalAffinity(
		inputCritMode,
		outputIssenAffinity +
			outputSharpnessAffinity +
			inputNumberUnlimitedSigil +
			inputNumberSigil1Affinity +
			inputNumberSigil2Affinity +
			inputNumberSigil3Affinity +
			outputStyleRankAffinity +
			outputExpertAffinity +
			inputNumberNaturalAffinity +
			outputFlashConversionAffinity +
			outputStarvingWolfAffinity +
			outputCeaselessAffinity,
	);

	$: internalFire = Math.floor(
		(((inputNumberElementalValueReplacement +
			inputNumberSigil1Element * 10 +
			inputNumberSigil2Element * 10 +
			inputNumberSigil3Element * 10 +
			inputNumberUnlimitedSigil * 10 +
			outputAOETotalElement) *
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
			outputAOETotalElement) *
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
			outputAOETotalElement) *
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
			outputAOETotalElement) *
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
			outputAOETotalElement) *
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

	$: internalStatus = Math.floor(
		Math.floor(
			inputNumberStatusValue *
				outputStatusAttackUpMultiplier *
				outputStatusGuildPoogieMultiplier *
				outputStatusSigilMultiplier *
				outputWeaponStatusModifiers *
				outputFuriousMultiplier,
		) * outputDrugKnowledgeMultiplier,
	);

	/**StatusUsedSA*/
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
	// TODO this is wrong. This always evaluates to 1. Leaving this as is for now.
	/**statvalmult*/
	$: outputStatusValueMultiplier =
		inputStatusAssault === 'On (For Sleep add +10 raw hitbox)' &&
		inputStatus !== 'None' &&
		inputNumberStatusValue >= 10 &&
		outputDrugKnowledgeMultiplier === 1
			? outputDrugKnowledgeMultiplier
			: 1;

	$: outputMonsterTotalDefense =
		inputNumberDefenseRate * inputNumberMonsterRage * inputNumberHCModifiers;

	/**HBGchargemulti*/
	$: outputHBGChargeShot =
		gunnerDropdownItems.find((e) => e.name === inputHbgChargeShot)?.value || 1;

	// outputStatusAssault = Math.floor(
	// 	(statusUsedSA + getStatusAssault(inputWeaponType, inputStatus)) *
	// 		0.15 *
	// 		monsterTotalDefense *
	// 		inputNumberHitCount,
	// );

	let isShikiLoading = true;

	async function renderShiki(inputs: string, lang: BundledLanguage) {
		if (!browser) return '';
		const result = await codeToHtml(inputs, {
			lang: lang,
			theme: getCatppuccinFlavorFromThemeForShiki($theme),
		});
		return result;
	}

	// Reactive statement to watch for changes in inputTextInputs
	$: if (inputTextInputs && $theme) {
		isShikiLoading = true;
		// Use an immediately invoked async function expression (IIFE) to handle async operations
		(async () => {
			inputsHTML = await renderShiki(inputTextInputs, 'json');
			internalAffinityFunctionHTML = await renderShiki(
				internalAffinityFunctionString,
				'ts',
			);
			critValueFunctionHTML = await renderShiki(critValueFunctionString, 'ts');
			isShikiLoading = false;
		})();
	}

	/**the generated HTML is sanitized by shiki*/
	let inputsHTML = '';
	/**the generated HTML is sanitized by shiki*/
	let internalAffinityFunctionHTML = '';
	/**the generated HTML is sanitized by shiki*/
	let critValueFunctionHTML = '';

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

	let inputNumberAttackValue = 0;

	const formulaFlashConversion = display(
		`\\text{Flash Conversion True Raw} = \\lfloor \\sqrt{\\text{Excess Affinity}} \\times 7 \\rfloor`,
	);

	$: formulaValuesFlashConversion = `${Math.floor(Math.sqrt(critConversionCalculatorExcessAffinity >= 0 ? critConversionCalculatorExcessAffinity : 0) * 7)} = \\lfloor \\sqrt{${critConversionCalculatorExcessAffinity}} \\times 7 \\rfloor
	`;

	const formulaFlashConversionUp = display(
		`\\text{Flash Conversion Up True Raw} = \\lfloor \\sqrt{\\text{Natural Affinity}} \\times \\text{critConversionUpMultiplier} \\rfloor`,
	);

	$: formulaValuesFlashConversionUp = `${Math.floor(
		Math.sqrt(Math.max(0, critConversionCalculatorNaturalAffinity)) *
			critConversionCalculatorCritConversionUpMultiplier,
	)} = \\lfloor \\sqrt{${Math.max(0, critConversionCalculatorNaturalAffinity)}} \\times ${critConversionCalculatorCritConversionUpMultiplier} \\rfloor`;

	$: flashConversionChartData = generateFlashConversionChartData(
		critConversionCalculatorNaturalAffinity,
		critConversionCalculatorCritConversionUpMultiplier,
	);

	let legacyCalculatorSaveSlotNumber = 1;

	$: outputWeaponClass = getWeaponClass(inputWeaponType);

	function addToDamageCalculatorHistoryLogs(
		variableName: string,
		value: string,
	) {
		damageCalculatorHistoryLogs = [
			...damageCalculatorHistoryLogs,
			{
				time: `${new Date().toLocaleTimeString()}`,
				variableName: variableName,
				value: value,
			},
		];
	}

	let damageCalculatorHistoryLogsOrderReversed = false;

	type DamageCalculatorHistoryLogsEntry = {
		time: string;
		variableName: string;
		value: string;
	};

	let damageCalculatorHistoryLogs: DamageCalculatorHistoryLogsEntry[] = [];

	const maxTotalDivaPrayerGemLevel = 7;

	let inputDivaPrayerGemRedName: FrontierDivaPrayerGemSkillName =
		'Sharpness UP';
	let inputDivaPrayerGemYellowName: FrontierDivaPrayerGemSkillName =
		'Cutting UP';
	let inputDivaPrayerGemGreenName: FrontierDivaPrayerGemSkillName =
		'Friendship UP';
	let inputDivaPrayerGemBlueName: FrontierDivaPrayerGemSkillName = 'None';

	const iconKey = 'divaPrayerGemIcon';

	const mappedDivaPrayerGems = divaPrayerGems
		.filter((e) => !e.unused)
		.map((gem) => ({
			id: gem.name,
			text: gem.name,
		}));

	let inputNumberDivaPrayerGemRedLevel: FrontierDivaPrayerGemLevel = 1;
	let inputNumberDivaPrayerGemYellowLevel: FrontierDivaPrayerGemLevel = 3;
	let inputNumberDivaPrayerGemGreenLevel: FrontierDivaPrayerGemLevel = 3;
	let inputNumberDivaPrayerGemBlueLevel: FrontierDivaPrayerGemLevel = 0;

	function hasDuplicateValues(obj: Object, ignoredString: string) {
		if (!obj) {
			return false;
		}

		// Step 1: Extract values into an array
		const values = Object.values(obj);

		// Step 2: Check for duplicates
		return values.some((value) => {
			// Ignore the specified string when counting occurrences
			if (value === ignoredString) {
				return false;
			}
			// Count occurrences of the current value
			const count = values.filter((v) => v === value).length;
			// Return true if any value appears more than once
			return count > 1;
		});
	}

	function getMaxDivaPrayerGemLevel(skillName: string) {
		return (
			divaPrayerGems.find((e) => e.name === skillName)?.maxLevel ??
			maxTotalDivaPrayerGemLevel
		);
	}

	$: outputDivaPrayerGemRedMaxLevel = getMaxDivaPrayerGemLevel(
		inputDivaPrayerGemRedName,
	);

	$: outputDivaPrayerGemYellowMaxLevel = getMaxDivaPrayerGemLevel(
		inputDivaPrayerGemYellowName,
	);

	$: outputDivaPrayerGemGreenMaxLevel = getMaxDivaPrayerGemLevel(
		inputDivaPrayerGemGreenName,
	);

	$: outputDivaPrayerGemBlueMaxLevel = getMaxDivaPrayerGemLevel(
		inputDivaPrayerGemBlueName,
	);

	$: hasDivaPrayerGemDuplicates = hasDuplicateValues(
		damageCalculatorSelectedDivaPrayerGems,
		'None',
	);

	$: damageCalculatorSelectedDivaPrayerGems = {
		Red: inputDivaPrayerGemRedName,
		Yellow: inputDivaPrayerGemYellowName,
		Green: inputDivaPrayerGemGreenName,
		Blue: inputDivaPrayerGemBlueName,
	};

	const [send, receive] = crossfade({
		duration: 1500,
		easing: quintOut,
	});

	// Calculate the count of gems that aren't "None"
	$: divaPrayerGemsCount = Object.values(
		damageCalculatorSelectedDivaPrayerGems,
	).filter((gem) => gem !== 'None').length;

	// Generate gem emojis based on the count
	$: gemEmojis = '💎'.repeat(divaPrayerGemsCount);

	function getDivaPrayerGemValue(
		name: FrontierDivaPrayerGemSkillName,
		level: FrontierDivaPrayerGemLevel,
		property:
			| 'affinity'
			| 'cutting'
			| 'impact'
			| 'shot'
			| 'element'
			| 'trueRaw',
	) {
		if (
			name === 'None' ||
			level < 0 ||
			level > maxTotalDivaPrayerGemLevel ||
			hasDivaPrayerGemDuplicates ||
			inputNumberDivaPrayerGemRedLevel +
				inputNumberDivaPrayerGemYellowLevel +
				inputNumberDivaPrayerGemGreenLevel +
				inputNumberDivaPrayerGemBlueLevel >
				maxTotalDivaPrayerGemLevel
		) {
			return 0;
		}

		switch (property) {
			default:
				return 0;
			case 'affinity':
				if (name !== 'Affinity UP') {
					return 0;
				}

				return (
					divaPrayerGemsDropdownItems.find(
						(e) => e.name === `${name} Lv${level}`,
					)?.value ?? 0
				);
			case 'cutting':
				if (name !== 'Cutting UP') {
					return 0;
				}

				return (
					divaPrayerGemsDropdownItems.find(
						(e) => e.name === `${name} Lv${level}`,
					)?.value ?? 0
				);
			case 'impact':
				if (name !== 'Impact UP') {
					return 0;
				}

				return (
					divaPrayerGemsDropdownItems.find(
						(e) => e.name === `${name} Lv${level}`,
					)?.value ?? 0
				);
			case 'shot':
				if (name !== 'Shot UP') {
					return 0;
				}

				return (
					divaPrayerGemsDropdownItems.find(
						(e) => e.name === `${name} Lv${level}`,
					)?.value ?? 0
				);
			case 'element':
				if (name !== 'Element UP') {
					return 0;
				}

				return (
					divaPrayerGemsDropdownItems.find(
						(e) => e.name === `${name} Lv${level}`,
					)?.value ?? 0
				);
			case 'trueRaw':
				if (name !== 'Friendship UP') {
					return 0;
				}

				return (
					divaPrayerGemsDropdownItems.find(
						(e) => e.name === `${name} Lv${level}`,
					)?.value ?? 0
				);
		}
	}

	$: outputDivaPrayerGemAffinity =
		getDivaPrayerGemValue(
			inputDivaPrayerGemRedName,
			inputNumberDivaPrayerGemRedLevel,
			'affinity',
		) +
		getDivaPrayerGemValue(
			inputDivaPrayerGemYellowName,
			inputNumberDivaPrayerGemYellowLevel,
			'affinity',
		) +
		getDivaPrayerGemValue(
			inputDivaPrayerGemGreenName,
			inputNumberDivaPrayerGemGreenLevel,
			'affinity',
		) +
		getDivaPrayerGemValue(
			inputDivaPrayerGemBlueName,
			inputNumberDivaPrayerGemBlueLevel,
			'affinity',
		);

	$: outputDivaPrayerGemCuttingHitzone =
		getDivaPrayerGemValue(
			inputDivaPrayerGemRedName,
			inputNumberDivaPrayerGemRedLevel,
			'cutting',
		) +
		getDivaPrayerGemValue(
			inputDivaPrayerGemYellowName,
			inputNumberDivaPrayerGemYellowLevel,
			'cutting',
		) +
		getDivaPrayerGemValue(
			inputDivaPrayerGemGreenName,
			inputNumberDivaPrayerGemGreenLevel,
			'cutting',
		) +
		getDivaPrayerGemValue(
			inputDivaPrayerGemBlueName,
			inputNumberDivaPrayerGemBlueLevel,
			'cutting',
		);

	$: outputDivaPrayerGemImpactHitzone =
		getDivaPrayerGemValue(
			inputDivaPrayerGemRedName,
			inputNumberDivaPrayerGemRedLevel,
			'impact',
		) +
		getDivaPrayerGemValue(
			inputDivaPrayerGemYellowName,
			inputNumberDivaPrayerGemYellowLevel,
			'impact',
		) +
		getDivaPrayerGemValue(
			inputDivaPrayerGemGreenName,
			inputNumberDivaPrayerGemGreenLevel,
			'impact',
		) +
		getDivaPrayerGemValue(
			inputDivaPrayerGemBlueName,
			inputNumberDivaPrayerGemBlueLevel,
			'impact',
		);

	$: outputDivaPrayerGemShotHitzone =
		getDivaPrayerGemValue(
			inputDivaPrayerGemRedName,
			inputNumberDivaPrayerGemRedLevel,
			'shot',
		) +
		getDivaPrayerGemValue(
			inputDivaPrayerGemYellowName,
			inputNumberDivaPrayerGemYellowLevel,
			'shot',
		) +
		getDivaPrayerGemValue(
			inputDivaPrayerGemGreenName,
			inputNumberDivaPrayerGemGreenLevel,
			'shot',
		) +
		getDivaPrayerGemValue(
			inputDivaPrayerGemBlueName,
			inputNumberDivaPrayerGemBlueLevel,
			'shot',
		);

	$: outputDivaPrayerGemElementHitzone =
		getDivaPrayerGemValue(
			inputDivaPrayerGemRedName,
			inputNumberDivaPrayerGemRedLevel,
			'element',
		) +
		getDivaPrayerGemValue(
			inputDivaPrayerGemYellowName,
			inputNumberDivaPrayerGemYellowLevel,
			'element',
		) +
		getDivaPrayerGemValue(
			inputDivaPrayerGemGreenName,
			inputNumberDivaPrayerGemGreenLevel,
			'element',
		) +
		getDivaPrayerGemValue(
			inputDivaPrayerGemBlueName,
			inputNumberDivaPrayerGemBlueLevel,
			'element',
		);

	$: outputDivaPrayerGemTrueRaw =
		getDivaPrayerGemValue(
			inputDivaPrayerGemRedName,
			inputNumberDivaPrayerGemRedLevel,
			'trueRaw',
		) +
		getDivaPrayerGemValue(
			inputDivaPrayerGemYellowName,
			inputNumberDivaPrayerGemYellowLevel,
			'trueRaw',
		) +
		getDivaPrayerGemValue(
			inputDivaPrayerGemGreenName,
			inputNumberDivaPrayerGemGreenLevel,
			'trueRaw',
		) +
		getDivaPrayerGemValue(
			inputDivaPrayerGemBlueName,
			inputNumberDivaPrayerGemBlueLevel,
			'trueRaw',
		);

	$: addToDamageCalculatorHistoryLogs(
		'outputDivaPrayerGemAffinity',
		outputDivaPrayerGemAffinity.toString(),
	);

	$: addToDamageCalculatorHistoryLogs(
		'outputDivaPrayerGemCuttingHitzone',
		outputDivaPrayerGemCuttingHitzone.toString(),
	);

	$: addToDamageCalculatorHistoryLogs(
		'outputDivaPrayerGemImpactHitzone',
		outputDivaPrayerGemImpactHitzone.toString(),
	);

	$: addToDamageCalculatorHistoryLogs(
		'outputDivaPrayerGemShotHitzone',
		outputDivaPrayerGemShotHitzone.toString(),
	);

	$: addToDamageCalculatorHistoryLogs(
		'outputDivaPrayerGemElementHitzone',
		outputDivaPrayerGemElementHitzone.toString(),
	);

	$: addToDamageCalculatorHistoryLogs(
		'outputDivaPrayerGemTrueRaw',
		outputDivaPrayerGemTrueRaw.toString(),
	);
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
		<UnorderedList class="spaced-list">
			<ListItem>
				Select a weapon type such as <InlineToggletip
					title="Long Sword"
					subtitle="A sword from a far away land"
					description="Gauge your spirit with this weapon!"
					iconType="component"
					icon={getWeaponIcon('Long Sword')}
					tag1="Blademaster"
					popoverIcon={getWeaponIcon('Long Sword')}
					popoverIconType="component"
					link="/smithy"
					on:openModal={(e) => handleOpenModal(e)}
				></InlineToggletip>
			</ListItem>
			<ListItem>
				Calculate <InlineToggletip
					title="Gunlance"
					subtitle="It's neither a lance nor a gun"
					description="Prepare your shells!"
					iconType="component"
					icon={getWeaponIcon('Gunlance')}
					tag1="Blademaster"
					tag2="Gunlance"
					tag3="Weapon"
					popoverIcon={getWeaponIcon('Gunlance')}
					popoverIconType="component"
					link="/arena#gunlance-shells-and-wyvernfire"
					on:openModal={(e) => handleOpenModal(e)}
				></InlineToggletip> Shell and Wyvernfire damage.
			</ListItem>
			<ListItem>
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
			</ListItem>
			<ListItem>
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
			</ListItem>
			<ListItem>View element damage.</ListItem>
			<ListItem>And much more!</ListItem>
		</UnorderedList>

		<p class="spaced-paragraph">
			Additionally, you can view motion values animations, graphs of armor
			skills such as <InlineTooltip
				tooltip="Armor Skill"
				text="Flash Conversion"
				iconType="component"
				icon={getTag('Armor Skill').icon}
			/>, and the formulas for your total damage.
		</p>

		<p class="spaced-paragraph">
			If you are looking for guides on topics such as weapons, please refer to
			the <Link href="/hunter-notes">Hunter's Notes page.</Link>
		</p>

		<p>
			If you are looking for a tower weapon simulator, icon generators and other
			tools, please refer to the <Link href="/smithy">Smithy page.</Link>
		</p>

		<section>
			<SectionHeading level={2} title="Damage Calculator" />
			<p class="spaced-paragraph">
				This damage calculator may not reflect the damage output you do in the
				game with total accuracy. In order to track and report damage testing,
				you can check <OutboundLink
					href="https://github.com/DorielRivalet/wycademy/issues/360"
					>the pinned issue in the repository</OutboundLink
				>.
			</p>
			<p class="spaced-paragraph">
				Below are instructions for saving and loading the calculator inputs from
				various sources in case you want to reference them later.
			</p>
			<div class="damage-calculator">
				<div>
					<InlineNotification
						title="Note:"
						subtitle="Refreshing the page resets all values."
						kind="info"
						lowContrast
					/>

					<p>
						To load your gear from the game <strong
							>(this feature is not currently available in overlay)</strong
						>:
					</p>
					<OrderedList class="spaced-list">
						<ListItem>Load the overlay.</ListItem>
						<ListItem>Go into a quest and open overlay settings.</ListItem>
						<ListItem>
							Go to Hunter's Notes tab, right-click your guild card and select
							"Copy stats for Wycademy's Arena".
						</ListItem>
						<ListItem>Paste them here.</ListItem>
					</OrderedList>

					<p>
						If you want to import the save slots from the legacy calculator:
					</p>
					<OrderedList class="spaced-list">
						<ListItem>
							Go to the <OutboundLink
								href="https://dorielrivalet.github.io/mhfz-damage-calculator"
								>legacy calculator</OutboundLink
							>.
						</ListItem>
						<ListItem
							>Open the Console by pressing <kbd>Ctrl</kbd> + <kbd>Shift</kbd> +
							<kbd>I</kbd>.</ListItem
						>
						<ListItem>
							To put all of your save slots into the clipboard, paste the
							following command and run it in the console: <CodeSnippet
								code={'copy(JSON.stringify(localStorage));'}
								showMoreLess={false}
								type="inline"
							/>
						</ListItem>
						<ListItem>
							With the copied clipboard text, paste it into a text editor and
							save as JSON file.
						</ListItem>
						<ListItem>
							Click the button below, specifying the slot number in the number
							input, in order to import the file.
						</ListItem>
					</OrderedList>
					<div class="flex-row">
						<div class="number-input-container">
							<NumberInput
								size="sm"
								step={1}
								min={1}
								max={20}
								bind:value={legacyCalculatorSaveSlotNumber}
								invalidText={'Value must be between 1 and 20.'}
								label={'Legacy Calculator Save Slot Number'}
							/>
						</div>
						<Button
							kind="tertiary"
							icon={Upload}
							on:click={() =>
								loadLegacyInputsFromJSONFile(legacyCalculatorSaveSlotNumber)}
							>Import legacy save file</Button
						>
					</div>
				</div>

				{#if showDamageCalculatorLegacyInputsJSONError}
					<InlineNotification
						title="Error:"
						subtitle="Invalid legacy damage calculator inputs in the imported file."
						kind="error"
						hideCloseButton
						lowContrast
						on:close={() => (showDamageCalculatorLegacyInputsJSONError = false)}
					/>
				{/if}

				<p>
					It is recommended to backup your save slots by doing the above steps
					before August 2024. Afterwards, the legacy calculator will no longer
					be available.
				</p>

				{#if showDamageCalculatorInputsJSONError}
					<InlineNotification
						title="Error:"
						subtitle="Invalid damage calculator inputs in the JSON text area."
						kind="error"
						hideCloseButton
						lowContrast
						on:close={() => (showDamageCalculatorInputsJSONError = false)}
					/>
				{/if}

				<div class="damage-calculator-container-buttons">
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
					<p>Attack Display Value to True Raw Converter:</p>
					<div class="flex-row-centered">
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
									(WeaponTypes.find((e) => e.name === inputWeaponType)
										?.bloatAttackMultiplier ?? 1),
							)}
						</p>
					</div>
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
										on:select={(e) =>
											setIssenValues(
												inputExpertSkills === 'Determination (+100%)',
											)}
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
										disabled={inputExpertSkills === 'Determination (+100%)'}
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

									<div class="dropdown-tooltip-container">
										<Tooltip align="start">
											<p class="spaced-paragraph">
												These are not a final multiplier but rather additional
												true raw damage.
											</p>
											<p>
												For example, Weapons Art Large on a 600 true raw weapon
												would be the same as +30 Attack or Attack Up Very Large
												(600*0.05).
											</p>
										</Tooltip>
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
									</div>

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

									<div class="dropdown-tooltip-container">
										<Tooltip align="start">
											<p>Does not need affinity over 100% to add True Raw.</p>
										</Tooltip>
										<Dropdown
											titleText="Crit Conversion Up"
											bind:selectedId={inputCritConversionUp}
											items={[
												{ id: 'None', text: 'None' },
												{
													id: 'Crit C. Up +1 (Z1)',
													text: 'Crit C. Up +1 (Z1)',
												},
												{
													id: 'Crit C. Up +2 (Z1)',
													text: 'Crit C. Up +2 (Z1)',
												},
											]}
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
											min={0}
											max={80}
											bind:value={inputNumberVampirism}
											invalidText={'Value must be between 0 and 80.'}
											on:click={(e) => e.preventDefault()}
										>
											<span slot="label"
												><Tooltip align="start" triggerText="Vampirism">
													<p class="spaced-paragraph">
														Each successfully leeching attack with a weapon adds
														a certain amount of additional true raw up to a
														maximum of +80.
													</p>
													<p>Dual Swords, Tonfa, LBG: +3</p>
													<p>SnS, LS, Lance, Gunlance, Swaxe F, HBG, Bow: +4</p>
													<p>Hammer, Hunting Horn: +5</p>
													<p>Great Sword: +7</p>
												</Tooltip></span
											>
										</NumberInput>
									</div>

									<Dropdown
										titleText="Obscurity"
										bind:selectedId={inputObscurity}
										items={[
											{ id: 'None', text: 'None' },
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
												text: 'Obscurity Up 1 Block (+70 / +50 / +30)',
											},
											{
												id: '2 Blocks (+140 / +100 / +60)',
												text: 'Obscurity Up 2 Blocks (+140 / +100 / +60)',
											},
											{
												id: '3 Blocks (+210 / +150 / +90)',
												text: 'Obscurity Up 3 Blocks (+210 / +150 / +90)',
											},
											{
												id: '4 Blocks (+240 / +175 / +110)',
												text: 'Obscurity Up 4 Blocks (+240 / +175 / +110)',
											},
											{
												id: '5 Blocks (+270 / +200 / +130)',
												text: 'Obscurity Up 5 Blocks (+270 / +200 / +130)',
											},
											{
												id: '6 Blocks (+300 / +225 / +150)',
												text: 'Obscurity Up 6 Blocks (+300 / +225 / +150)',
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

									<div class="dropdown-tooltip-container">
										<Tooltip align="start">
											<p>
												Adjusts base True Raw appropriately if you are using a
												Length Up sigil on a G Rank weapon. This reduction does
												not stack so 3 sigils to increase length 3 times would
												be the same reduction as 1.
											</p>
										</Tooltip>
										<Dropdown
											titleText="Length Up"
											bind:selectedId={inputLengthUp}
											items={[
												{ id: 'None', text: 'None' },
												{ id: 'Active', text: 'Active' },
											]}
										/>
									</div>

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
											on:click={(e) => e.preventDefault()}
											><span slot="label"
												><Tooltip align="start" triggerText="Road Floor">
													<p>Attack rises every 5 floors, stopping at 26.</p>
												</Tooltip></span
											>
										</NumberInput>
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
											on:click={(e) => e.preventDefault()}
										>
											<span slot="label"
												><Tooltip align="start" triggerText="Conquest Attack">
													<p>
														The value of the skill as displayed on your SR stats
														if enabled. Only takes effect on standard Conquest
														quests.
														<strong>Shiten quests do not count.</strong>
													</p>
												</Tooltip></span
											>
										</NumberInput>
									</div>
									<div class="dropdown-tooltip-container">
										<Tooltip align="start">
											<p>
												Toggle whether or not you have consumed a Conquest
												Attack Potion on a standard Conquest quest.
												<strong>Shiten quests do not count.</strong>
											</p>
										</Tooltip>
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
											{
												id: '2 Sharpens (x1.10)',
												text: '2 Sharpens (x1.10)',
											},
											{
												id: '3 Sharpens (x1.15)',
												text: '3 Sharpens (x1.15)',
											},
											{
												id: '4 Sharpens (x1.20)',
												text: '4 Sharpens (x1.20)',
											},
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
									<div class="dropdown-tooltip-container">
										<Tooltip align="start">
											<p class="spaced-paragraph">
												These buffs only take effect if you are using a weapon
												that is on a Gou tree while on a Gou, Supremacy or G
												Rank quest.
											</p>
											<p>
												For example: normal Lv50 weapons would get no buffs on
												any quests, but having a G Supremacy Weapon and 2
												appropiate armor pieces would result in a +40 addition
												to final damage.
											</p>
										</Tooltip>
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
									</div>

									<div class="dropdown-tooltip-container">
										<Tooltip align="start">
											<p class="spaced-paragraph">
												These buffs only take effect if you are using a weapon
												that is on a Gou tree while on a Gou, Supremacy or G
												Rank quest.
											</p>
											<p>
												For example: normal Lv50 weapons would get no buffs on
												any quests, but having a G Supremacy Weapon and 2
												appropiate armor pieces would result in a +40 addition
												to final damage.
											</p>
										</Tooltip>
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
									</div>

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
											{
												id: 'Hit by Other (+30)',
												text: 'Hit by Other (+30)',
											},
											{
												id: 'Red Soul Up (+100)',
												text: 'Red Soul Up (+100)',
											},
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
											{ id: 'Bond Level 1(+0)', text: 'Bond Level 1 (+0)' },
											{ id: 'Bond Level 2(+10)', text: 'Bond Level 2 (+10)' },
											{ id: 'Bond Level 3(+20)', text: 'Bond Level 3 (+20)' },
											{ id: 'Bond Level 4(+30)', text: 'Bond Level 4 (+30)' },
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
												id: 'Large and Halk Drink (1.331x)',
												text: 'Large and Halk Drink (1.331x)',
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
												id: 'Large and Halk Drink (1.331x)',
												text: 'Large and Halk Drink (1.331x)',
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
												id: 'Large and Halk Drink (1.331x)',
												text: 'Large and Halk Drink (1.331x)',
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
												id: 'Large and Halk Drink (1.331x)',
												text: 'Large and Halk Drink (1.331x)',
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
												id: 'Large and Halk Drink (1.331x)',
												text: 'Large and Halk Drink (1.331x)',
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
											{
												id: 'Ele Up Song (1.1x)',
												text: 'Ele Up Song (1.1x)',
											},
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
											{ id: 'On', text: 'On' },
										]}
										on:select={(e) =>
											setAbnormalityValues(inputAbnormality === 'On')}
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
											{ id: 'Magnet Spike', text: 'Magnet Spike' },
											{ id: 'Light Bowgun', text: 'Light Bowgun' },
											{ id: 'Heavy Bowgun', text: 'Heavy Bowgun' },
											{ id: 'Bow', text: 'Bow' },
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
											max={100}
											bind:value={inputNumberStyleRankAttack}
											invalidText={'Invalid value. Must be between 0 and 100'}
											on:click={(e) => e.preventDefault()}
										>
											<span slot="label"
												><Tooltip align="start" triggerText="SR Attack">
													<p>
														The top most attack level as displayed on SR info.
														Lv MAX is 100.
													</p>
												</Tooltip></span
											>
										</NumberInput>
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
										titleText="AoE Attack Sigil Count"
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
											bind:value={inputNumberNaturalAffinity}
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
										titleText="AoE Affinity Sigil Count"
										bind:selectedId={inputAoeAffinitySigil}
										items={[
											{ id: 'None', text: 'None' },
											{ id: '1 Sigil', text: '1 Sigil' },
											{ id: '2 Sigils', text: '2 Sigils' },
											{ id: '3 Sigils', text: '3 Sigils' },
											{ id: '4 Sigils', text: '4 Sigils' },
										]}
									/>

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
							{#if outputWeaponClass === 'Blademaster'}
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
												{ id: '+2', text: '+2' },
											]}
										/>

										<!-- TODO: toggles?-->
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
										<div class="dropdown-tooltip-container">
											<Tooltip align="start">
												<p>
													You can find the graph for this multiplier in the
													Critical Distance section.
												</p>
											</Tooltip>
											<Dropdown
												titleText="Distance Multiplier"
												bind:selectedId={inputCriticalDistanceMultiplier}
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
										</div>

										<Dropdown
											titleText="Bullet Modifier"
											bind:selectedId={inputBulletStrengthModifier}
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
												{ id: 'None (1x)', text: 'None (1x)' },
												{ id: 'Just Shot (1.3x)', text: 'Just Shot (1.3x)' },
												{
													id: 'Perfect JS (1.4x)',
													text: 'Perfect Just Shot (1.4x)',
												},
												{
													id: 'Evade Shot (0.6x)',
													text: 'Evade Shot (0.6x)',
												},
												{
													id: 'Finishing Shot (2.0x)',
													text: 'Finishing Shot (2.0x)',
												},
												{
													id: 'Rapid Fire (0.5x)',
													text: 'Rapid Fire (0.5x)',
												},
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
													id: 'Normal / Charge Lv 0 (1x)',
													text: 'Normal / Charge Lv 0 (1x)',
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
													id: 'Charge Lv 3 (1.5x)', // TODO 1.49 on Normal?
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
												label={'Compressed Shot Count'}
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

										<div class="dropdown-tooltip-container">
											<Tooltip align="start">
												<p>
													Adjusts for Consumption Slayer, a skill that causes
													double coating consumption for an additional +0.2x
													multiplier.
												</p>
											</Tooltip>
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
										</div>

										<Dropdown
											titleText="Bow Charge Multiplier"
											bind:selectedId={inputBowChargeMultiplier}
											items={[
												{
													id: 'Lv1 (0.4x / 0.7x)',
													text: 'Lv1 (0.4x / 0.7x)',
												},
												{
													id: 'Lv2 (1.0x / 0.95x) ', // TODO using legacy values hence the inconsistency
													text: 'Lv2 (1.0x / 0.8x) ',
												},
												{
													id: 'Lv3 (1.5x / 1.2x)',
													text: 'Lv3 (1.5x / 1.2x)',
												},
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
												{
													id: 'Normal (All 1.0x)',
													text: 'Normal (All 1.0x)',
												},
												{
													id: 'Quick Shot (Lv1 1.0x / Lv2 0.85x / Lv3 0.75x / Lv4 0.65x)',
													text: 'Quick Shot (Lv1 1.0x / Lv2 0.85x / Lv3 0.75x / Lv4 0.65x)',
												},
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
											{
												id: 'Perfect Water Shot',
												text: 'Perfect Water Shot',
											},
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
											label={'Compressed Element Shot Count'}
										/>
									</div>
									<Dropdown
										titleText="Element"
										bind:selectedId={inputElement}
										items={[
											{ id: 'None', text: 'None' },
											{ id: 'Fire', text: 'Fire (火)' },
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
											on:click={(e) => e.preventDefault()}
										>
											<span slot="label"
												><Tooltip align="start" triggerText="Element">
													<p class="spaced-paragraph">
														For the three levels of Standard Elemental Sword
														Crystals you can use the values 500, 700, 900 and
														for the GR600 Crystals you can use the values 1300,
														1500 and 2100.
													</p>
													<p>
														This value replaces any elemental values on the
														weapon so set the element appropriately and use only
														the number above.
													</p>
												</Tooltip></span
											>
										</NumberInput>
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
										titleText="AoE Element Sigil Count"
										bind:selectedId={inputAoeElementSigil}
										items={[
											{ id: 'None', text: 'None' },
											{ id: '1 Sigil', text: '1 Sigil' },
											{ id: '2 Sigils', text: '2 Sigils' },
											{ id: '3 Sigils', text: '3 Sigils' },
											{ id: '4 Sigils', text: '4 Sigils' },
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
											{ id: 'Paralysis', text: 'Paralysis' },
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
											on:click={(e) => e.preventDefault()}
										>
											<span slot="label">
												<Tooltip align="start" triggerText="Additional">
													<p>
														Enter any other additional damage to be calculated
														against only the defense rate such as bombs and
														blast status.
													</p></Tooltip
												>
											</span>
										</NumberInput>
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
											on:click={(e) => e.preventDefault()}
										>
											<span slot="label"
												><Tooltip align="start" triggerText="Defense Rate">
													<p>
														You can find the defense rate using the overlay. The
														value in the overlay already includes the rage and
														hardcore modifier multiplications.
													</p>
												</Tooltip></span
											>
										</NumberInput>
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
											bind:value={inputNumberCuttingHitzone}
											invalidText={invalidNumberValueText}
											label={'Cutting Hitzone'}
										/>
									</div>
									<div class="number-input-container">
										<NumberInput
											size="sm"
											step={10}
											min={minimumNumberValue}
											max={maximumNumberValue}
											bind:value={inputNumberImpactHitzone}
											invalidText={invalidNumberValueText}
											label={'Impact Hitzone'}
										/>
									</div>
									<div class="number-input-container">
										<NumberInput
											size="sm"
											step={10}
											min={minimumNumberValue}
											max={maximumNumberValue}
											bind:value={inputNumberShotHitzone}
											invalidText={invalidNumberValueText}
											label={'Shot Hitzone'}
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
				{#if inputNumberDivaPrayerGemRedLevel + inputNumberDivaPrayerGemYellowLevel + inputNumberDivaPrayerGemGreenLevel + inputNumberDivaPrayerGemBlueLevel > maxTotalDivaPrayerGemLevel}
					<InlineNotification
						title="Error:"
						subtitle={`Total gem level exceeds ${maxTotalDivaPrayerGemLevel}, skipping calculations.`}
						kind="error"
						lowContrast
						hideCloseButton
					/>
				{/if}
				<div class="damage-calculator-diva-prayer-gems-container">
					<div class="stats-header">
						{gemEmojis} Diva Prayer Gems {gemEmojis}
					</div>
					<div class="diva-stats-values">
						<div class="diva-prayer-gem">
							<div class="diva-prayer-gem-icon">
								<!-- Container for the active icon -->
								{#if inputDivaPrayerGemRedName !== 'None'}
									<div
										class="icon-wrapper"
										in:send={{ key: iconKey }}
										out:receive={{ key: iconKey }}
									>
										<DivaPrayerGem color={getDivaPrayerGemColor('Red')} />
									</div>
								{:else}
									<!-- Container for the inactive icon -->

									<div
										class="icon-wrapper"
										in:send={{ key: iconKey }}
										out:receive={{ key: iconKey }}
									>
										<DivaPrayerGem color={getDivaPrayerGemColor('Inactive')} />
									</div>
								{/if}
							</div>
							<Dropdown
								bind:selectedId={inputDivaPrayerGemRedName}
								titleText="Diva Prayer Gem Skill"
								invalid={hasDivaPrayerGemDuplicates}
								invalidText="Duplicate gem found"
								items={mappedDivaPrayerGems}
								disabled={inputDivaPrayerGemYellowName !== 'None'}
								on:select={(e) => {
									if (inputDivaPrayerGemRedName === 'None') {
										inputDivaPrayerGemYellowName = 'None';
										inputNumberDivaPrayerGemYellowLevel = 0;
										inputDivaPrayerGemGreenName = 'None';
										inputNumberDivaPrayerGemGreenLevel = 0;
										inputDivaPrayerGemBlueName = 'None';
										inputNumberDivaPrayerGemBlueLevel = 0;
									}
								}}
							/>
							<div class="diva-prayer-gem-level">
								<!--TODO max levels vary by skill-->
								<NumberInput
									size="sm"
									step={1}
									min={0}
									bind:max={outputDivaPrayerGemRedMaxLevel}
									bind:value={inputNumberDivaPrayerGemRedLevel}
									invalidText={`Invalid value: must be between 0 and ${outputDivaPrayerGemRedMaxLevel}`}
									label={'Diva Prayer Gem Level'}
									disabled={inputDivaPrayerGemRedName === 'None' ||
										inputDivaPrayerGemYellowName !== 'None'}
								/>
							</div>
						</div>
						<div class="diva-prayer-gem">
							<div class="diva-prayer-gem-icon">
								<!-- Container for the active icon -->
								{#if inputDivaPrayerGemYellowName !== 'None'}
									<div
										class="icon-wrapper"
										in:send={{ key: iconKey }}
										out:receive={{ key: iconKey }}
									>
										<DivaPrayerGem color={getDivaPrayerGemColor('Yellow')} />
									</div>
								{:else}
									<!-- Container for the inactive icon -->

									<div
										class="icon-wrapper"
										in:send={{ key: iconKey }}
										out:receive={{ key: iconKey }}
									>
										<DivaPrayerGem color={getDivaPrayerGemColor('Inactive')} />
									</div>
								{/if}
							</div>
							<Dropdown
								bind:selectedId={inputDivaPrayerGemYellowName}
								invalid={hasDivaPrayerGemDuplicates}
								invalidText="Duplicate gem found"
								titleText="Diva Prayer Gem Skill"
								items={mappedDivaPrayerGems}
								disabled={inputDivaPrayerGemRedName === 'None' ||
									inputDivaPrayerGemGreenName !== 'None'}
								on:select={(e) => {
									if (inputDivaPrayerGemYellowName === 'None') {
										inputNumberDivaPrayerGemYellowLevel = 0;
										inputDivaPrayerGemGreenName = 'None';
										inputNumberDivaPrayerGemGreenLevel = 0;
										inputDivaPrayerGemBlueName = 'None';
										inputNumberDivaPrayerGemBlueLevel = 0;
									}
								}}
							/>
							<div class="diva-prayer-gem-level">
								<NumberInput
									size="sm"
									step={1}
									min={0}
									bind:max={outputDivaPrayerGemYellowMaxLevel}
									bind:value={inputNumberDivaPrayerGemYellowLevel}
									invalidText={`Invalid value: must be between 0 and ${outputDivaPrayerGemYellowMaxLevel}`}
									label={'Diva Prayer Gem Level'}
									disabled={inputDivaPrayerGemYellowName === 'None' ||
										inputDivaPrayerGemGreenName !== 'None'}
								/>
							</div>
						</div>
						<div class="diva-prayer-gem">
							<div class="diva-prayer-gem-icon">
								<!-- Container for the active icon -->
								{#if inputDivaPrayerGemGreenName !== 'None'}
									<div
										class="icon-wrapper"
										in:send={{ key: iconKey }}
										out:receive={{ key: iconKey }}
									>
										<DivaPrayerGem color={getDivaPrayerGemColor('Green')} />
									</div>
								{:else}
									<!-- Container for the inactive icon -->

									<div
										class="icon-wrapper"
										in:send={{ key: iconKey }}
										out:receive={{ key: iconKey }}
									>
										<DivaPrayerGem color={getDivaPrayerGemColor('Inactive')} />
									</div>
								{/if}
							</div>
							<Dropdown
								bind:selectedId={inputDivaPrayerGemGreenName}
								invalid={hasDivaPrayerGemDuplicates}
								invalidText="Duplicate gem found"
								titleText="Diva Prayer Gem Skill"
								items={mappedDivaPrayerGems}
								disabled={inputDivaPrayerGemYellowName === 'None' ||
									inputDivaPrayerGemBlueName !== 'None'}
								on:select={(e) => {
									if (inputDivaPrayerGemGreenName === 'None') {
										inputNumberDivaPrayerGemGreenLevel = 0;
										inputDivaPrayerGemBlueName = 'None';
										inputNumberDivaPrayerGemBlueLevel = 0;
									}
								}}
							/>
							<div class="diva-prayer-gem-level">
								<NumberInput
									size="sm"
									step={1}
									min={0}
									bind:max={outputDivaPrayerGemGreenMaxLevel}
									bind:value={inputNumberDivaPrayerGemGreenLevel}
									invalidText={`Invalid value: must be between 0 and ${outputDivaPrayerGemGreenMaxLevel}`}
									label={'Diva Prayer Gem Level'}
									disabled={inputDivaPrayerGemGreenName === 'None' ||
										inputDivaPrayerGemBlueName !== 'None'}
								/>
							</div>
						</div>
						<div class="diva-prayer-gem">
							<div class="diva-prayer-gem-icon">
								<!-- Container for the active icon -->
								{#if inputDivaPrayerGemBlueName !== 'None'}
									<div
										class="icon-wrapper"
										in:send={{ key: iconKey }}
										out:receive={{ key: iconKey }}
									>
										<DivaPrayerGem color={getDivaPrayerGemColor('Blue')} />
									</div>
								{:else}
									<!-- Container for the inactive icon -->

									<div
										class="icon-wrapper"
										in:send={{ key: iconKey }}
										out:receive={{ key: iconKey }}
									>
										<DivaPrayerGem color={getDivaPrayerGemColor('Inactive')} />
									</div>
								{/if}
							</div>
							<Dropdown
								bind:selectedId={inputDivaPrayerGemBlueName}
								invalid={hasDivaPrayerGemDuplicates}
								invalidText="Duplicate gem found"
								titleText="Diva Prayer Gem Skill"
								items={mappedDivaPrayerGems}
								disabled={inputDivaPrayerGemGreenName === 'None'}
								on:select={(e) => {
									if (inputDivaPrayerGemBlueName === 'None') {
										inputNumberDivaPrayerGemBlueLevel = 0;
									}
								}}
							/>
							<div class="diva-prayer-gem-level">
								<NumberInput
									size="sm"
									step={1}
									min={0}
									bind:max={outputDivaPrayerGemBlueMaxLevel}
									bind:value={inputNumberDivaPrayerGemBlueLevel}
									invalidText={`Invalid value: must be between 0 and ${outputDivaPrayerGemBlueMaxLevel}`}
									label={'Diva Prayer Gem Level'}
									disabled={inputDivaPrayerGemBlueName === 'None'}
								/>
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
		<section>
			<SectionHeading level={2} title="Weapon Motion Values" />

			<p class="spaced-paragraph">
				You can change the weapon type shown below in the damage calculator
				above.
			</p>

			<p class="spaced-paragraph">
				Some motion values have numbers in parentheses, those are KO values. KO
				indicates impact portions of the motion value, which use white sharpness
				as the maximum multiplier.
			</p>

			{#if showWeaponMotionValuesSectionWarning}
				<InlineNotification
					title="Warning:"
					subtitle="Section with the selected style not found, displaying default section."
					kind="warning"
					lowContrast
					on:close={() => (showWeaponMotionValuesSectionWarning = false)}
				/>
			{/if}
			<div class="motion-values toc-exclude">
				<DataTable
					id="motion-values-dom"
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
								titleText="Section"
								bind:selectedId={inputWeaponMotionValuesSection}
								items={weaponSectionNames}
							/>
							<Dropdown
								titleText="Style"
								bind:selectedId={inputWeaponMotionValuesSectionStyle}
								items={[
									{ id: 'Earth Style', text: 'Earth Style' },
									{ id: 'Heaven Style', text: 'Heaven Style' },
									{ id: 'Storm Style', text: 'Storm Style' },
									{ id: 'Extreme Style', text: 'Extreme Style' },
								]}
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
							<Button
								kind="tertiary"
								icon={Download}
								on:click={downloadMotionValuesImage}>Download</Button
							>
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

		<section>
			<SectionHeading level={2} title="Shared Motion Values" />
			<p class="spaced-paragraph">
				<InlineTooltip
					text="Dual Swords"
					iconType="component"
					tooltip="Weapon"
					icon={getWeaponIcon('Dual Swords')}
				/>, <InlineTooltip
					text="Hammer"
					iconType="component"
					tooltip="Weapon"
					icon={getWeaponIcon('Hammer')}
				/>, <InlineTooltip
					text="Hunting Horn"
					iconType="component"
					tooltip="Weapon"
					icon={getWeaponIcon('Hunting Horn')}
				/>, <InlineTooltip
					text="Light Bowgun"
					iconType="component"
					tooltip="Weapon"
					icon={getWeaponIcon('Light Bowgun')}
				/>, <InlineTooltip
					text="Heavy Bowgun"
					iconType="component"
					tooltip="Weapon"
					icon={getWeaponIcon('Heavy Bowgun')}
				/> and <InlineTooltip
					text="Bow"
					iconType="component"
					tooltip="Weapon"
					icon={getWeaponIcon('Bow')}
				/> cannot use Reflect or Perfect Guard.
			</p>
			<div class="motion-values toc-exclude">
				<DataTable
					id="shared-motion-values-dom"
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
							<Button
								icon={Restart}
								kind="ghost"
								iconDescription="Refresh"
								on:click={(e) =>
									(sharedMotionValues = getWeaponSectionMotionValues(
										inputWeaponType,
										'Shared',
										true,
									))}
							/>
							<CopyButton
								iconDescription={'Copy as CSV'}
								text={getCSVFromArray(sharedMotionValues)}
							/>
							<Button
								kind="tertiary"
								icon={Download}
								on:click={downloadSharedMotionValuesImage}>Download</Button
							>
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
			<SectionHeading level={2} title="Inputs Logs" />
			<div class="inline-elements-container">
				<span>
					<Toggle
						labelText="Order"
						bind:toggled={damageCalculatorHistoryLogsOrderReversed}
						labelA={'Oldest'}
						labelB="Newest"
					/></span
				><span>
					<CopyButton
						iconDescription={'Copy as CSV'}
						text={getCSVFromArray(damageCalculatorHistoryLogs)}
					/></span
				>
			</div>
			<p class="spaced-paragraph">
				Entries: {damageCalculatorHistoryLogs.length}
			</p>
			<CodeSnippet type="multi" hideCopyButton showMoreLess={false}>
				<div>
					{#if damageCalculatorHistoryLogs.length > 0}
						{#if !damageCalculatorHistoryLogsOrderReversed}
							{#each damageCalculatorHistoryLogs as logEntry}
								<p>
									{`[${logEntry.time}] ${logEntry.variableName} changed to ${logEntry.value}`}
								</p>
							{/each}
						{:else}
							{#each [...damageCalculatorHistoryLogs].reverse() as logEntry}
								<p>
									{`[${logEntry.time}] ${logEntry.variableName} changed to ${logEntry.value}`}
								</p>
							{/each}
						{/if}
					{:else}
						<p>
							No logs found. Try modifying the inputs of the damage calculator.
						</p>
					{/if}
				</div>
			</CodeSnippet>
		</section>

		<section>
			<SectionHeading level={2} title="Formulas" />
			<InlineNotification
				title="Bugs:"
				subtitle="If you notice an error with the damage calculator, you can send an issue on the GitHub repository with the inputs JSON file to facilitate debugging."
				kind="info"
				lowContrast
			/>
			<p>
				Below are the formulas for the above damage calculator. Your current
				inputs values are reflected below each formula.
			</p>
			<section>
				<SectionHeading title={'Internal True Raw'} level={3} />
				<div class="formula-container">
					{@html formulaInternalTrueRaw}
				</div>
				<p>internalTrueRaw: {internalTrueRaw}</p>
				<p>maxTrueRaw: {maxTrueRaw}</p>
				<p>outputAttackCeiling: {outputAttackCeiling}</p>
				<p>outputFlatAdditions: {outputFlatAdditions}</p>
				<p>outputMultipliers: {outputMultipliers}</p>
			</section>
			<section>
				<SectionHeading title={'Attack A'} level={3} />
				<div class="formula-container">
					{@html formulaOutputAttackA}
				</div>
				<div class="formula-container">
					{@html display(formulaValuesOutputAttackA)}
				</div>
			</section>
			<section>
				<SectionHeading title={'Attack B'} level={3} />
				<div class="formula-container">
					{@html formulaOutputAttackB}
				</div>
				<div class="formula-container">
					{@html display(formulaValuesOutputAttackB)}
				</div>
			</section>
			<section>
				<SectionHeading title={'Multipliers'} level={3} />
				<div class="formula-container">
					{@html formulaOutputMultipliers}
				</div>
				<div class="formula-container">
					{@html display(formulaValuesOutputMultipliers)}
				</div>
			</section>
			<section>
				<SectionHeading title={'Flat Additions'} level={3} />
				<div class="formula-container">
					{@html formulaOutputFlatAdditions}
				</div>
				<div class="formula-container">
					{@html display(formulaValuesOutputFlatAdditions)}
				</div>
			</section>
			<section>
				<SectionHeading title={'Internal Attack'} level={3} />
				<div class="formula-container">
					{@html formulaInternalAttack}
				</div>
				<div class="formula-container">
					{@html display(formulaValuesOutputInternalAttack)}
				</div>
			</section>
			<section>
				<SectionHeading title={'Internal Fire'} level={3} />
				<div class="formula-container">
					{@html formulaInternalFire}
				</div>
				<div class="formula-container">
					{@html display(formulaValuesInternalFire)}
				</div>
			</section>
			<section>
				<SectionHeading title={'Internal Water'} level={3} />
				<div class="formula-container">
					{@html formulaInternalWater}
				</div>
				<div class="formula-container">
					{@html display(formulaValuesInternalWater)}
				</div>
			</section>
			<section>
				<SectionHeading title={'Internal Thunder'} level={3} />
				<div class="formula-container">
					{@html formulaInternalThunder}
				</div>
				<div class="formula-container">
					{@html display(formulaValuesInternalThunder)}
				</div>
			</section>
			<section>
				<SectionHeading title={'Internal Ice'} level={3} />
				<div class="formula-container">
					{@html formulaInternalIce}
				</div>
				<div class="formula-container">
					{@html display(formulaValuesInternalIce)}
				</div>
			</section>
			<section>
				<SectionHeading title={'Internal Dragon'} level={3} />
				<div class="formula-container">
					{@html formulaInternalDragon}
				</div>
				<div class="formula-container">
					{@html display(formulaValuesInternalDragon)}
				</div>
			</section>
			<section>
				<SectionHeading title={'Internal Status'} level={3} />
				<div class="formula-container">
					{@html formulaInternalStatus}
				</div>
				<div class="formula-container">
					{@html display(formulaValuesInternalStatus)}
				</div>
			</section>
			<section>
				<SectionHeading title={'Internal Affinity'} level={3} />
				<div class="container-shiki">
					{#if isShikiLoading}
						<div class="shiki-loading">
							<CodeSnippet type="multi" skeleton />
						</div>
					{:else}
						<div class="shiki-code">
							<CodeSnippet showMoreLess={false} hideCopyButton type="multi"
								>{@html internalAffinityFunctionHTML}</CodeSnippet
							>
						</div>
					{/if}
				</div>
				<div class="formula-container">
					{@html formulaInternalAffinity}
				</div>
				<div class="formula-container">
					{@html display(formulaValuesInternalAffinity)}
				</div>
			</section>
			<section>
				<SectionHeading title={'Total Affinity'} level={3} />
				<p>Used for Critical Conversion calculation.</p>
				<div class="formula-container">
					{@html formulaOutputTotalAffinity}
				</div>
				<div class="formula-container">
					{@html display(formulaValuesOutputTotalAffinity)}
				</div>
			</section>
			<section>
				<SectionHeading title={'Drug Knowlege Total True Raw'} level={3} />
				<div class="formula-container">
					{@html formulaOutputDrugKnowledgeTotalTrueRaw}
				</div>
				<p>
					outputDrugKnowledgeTotalTrueRaw: {outputDrugKnowledgeTotalTrueRaw}
				</p>
				<p>inputNumberStatusValue: {inputNumberStatusValue}</p>
				<p>outputStatusAttackUpMultiplier: {outputStatusAttackUpMultiplier}</p>
				<p>
					outputStatusGuildPoogieMultiplier: {outputStatusGuildPoogieMultiplier}
				</p>
				<p>outputStatusSigilMultiplier: {outputStatusSigilMultiplier}</p>
				<p>outputFuriousMultiplier: {outputFuriousMultiplier}</p>
				<p>outputDrugKnowledgeMultiplier: {outputDrugKnowledgeMultiplier}</p>
			</section>
			<section>
				<SectionHeading title={'Critical Multiplier'} level={3} />
				<div class="container-shiki">
					{#if isShikiLoading}
						<div class="shiki-loading">
							<CodeSnippet type="multi" skeleton />
						</div>
					{:else}
						<div class="shiki-code">
							<CodeSnippet showMoreLess={false} hideCopyButton type="multi"
								>{@html critValueFunctionHTML}</CodeSnippet
							>
						</div>
					{/if}
				</div>
				<div class="formula-container">
					{@html formulaOutputCritValue}
				</div>
				<div class="formula-container">
					{@html display(formulaValuesOutputCritValue)}
				</div>
			</section>
			<section>
				<SectionHeading title={'Other Multipliers'} level={3} />
				<div class="formula-container">
					{@html formulaOutputOtherMultipliers}
				</div>
				<div class="formula-container">
					{@html display(formulaValuesOutputOtherMultipliers)}
				</div>
			</section>
			<section>
				<SectionHeading title={'Status Assault Total'} level={3} />
				<div class="formula-container">
					{@html formulaOutputStatusUsedSA}
				</div>
				<div class="formula-container">
					{@html display(formulaValuesOutputStatusUsedSA)}
				</div>
			</section>
			<section>
				<SectionHeading title={'Monster Total Defense'} level={3} />
				<div class="formula-container">
					{@html formulaOutputMonsterTotalDefense}
				</div>
				<div class="formula-container">
					{@html display(formulaValuesOutputMonsterTotalDefense)}
				</div>
			</section>
		</section>

		<section>
			<SectionHeading level={2} title="Gunlance Shells and Wyvernfire" />
			<div></div>
		</section>

		<section>
			<SectionHeading level={2} title="Heavy Bowgun Heat Beam" />
			<div></div>
		</section>

		<section>
			<SectionHeading level={2} title="Ice Age" />
			<div class="ice-age-section">
				<div class="ice-age-descriptions">
					<p class="ice-age-description-1">
						Upon hitting a monster (can be dead), the hunter becomes enveloped
						in an icy aura, which inflicts damage on all nearby monsters while
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
						Ice Age's attack power only comes from SR, sigils, weapon base
						attack and G Rank armor bonus. The following buffs are ignored:
						items (e.g Seeds, Hunter Powertalon, etc.), meals (e.g. bento, guild
						food), skills (e.g. Adrenaline, Solid Determination). Buffs that
						affect weapon base attack like Drug Knowledge does count.
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
					<div class="formula-container">
						{@html formulaIceAgeDamagePerSecond}
					</div>
					<div class="formula-container">
						{@html display(formulaValuesIceAgeDamagePerSecond)}
					</div>
				</div>
				<div class="ice-age-calculator">
					<div>
						<NumberInput
							size="sm"
							step={10}
							min={minimumNumberValue}
							max={maxTrueRaw}
							bind:value={inputNumberIceAgeCalculatorWeaponTrueRaw}
							invalidText={invalidTrueRawText}
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
							max={100}
							bind:value={inputNumberIceAgeCalculatorSRTrueRaw}
							invalidText={'Invalid value. Must be between 0 and 100'}
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
			<SectionHeading
				level={2}
				title="Critical Conversion / Flash Conversion"
			/>
			<p class="spaced-paragraph">
				Adds 30% affinity and converts any excess affinity past 100% into extra
				true raw.
			</p>
			<p class="spaced-paragraph">
				Critical Conversion Up only uses the base affinity of your weapon
				(natural affinity). Sigils, Skills, SR Skills and the +5-10% from having
				above blue sharpness do not count towards the increase. In game, the
				sharpness bonus is always displayed, so deduct 10% from most weapons for
				getting the correct value.
			</p>
			<p class="spaced-paragraph">
				The zenith skill does not need you to have over 100% affinity for it to
				take effect.
			</p>
			<p>Formulas:</p>
			<div class="formula-container">
				{@html formulaFlashConversion}
				{@html display(formulaValuesFlashConversion)}
				{@html formulaFlashConversionUp}
				{@html display(formulaValuesFlashConversionUp)}
			</div>
			<div class="flash-conversion-calculator">
				<Dropdown
					titleText="Flash Conversion"
					bind:selectedId={critConversionCalculatorFlashConversion}
					items={[
						{ id: 'None', text: 'None' },
						{
							id: 'Critical Conversion (+30%)',
							text: 'Critical Conversion (+30%)',
						},
					]}
				/>
				<Dropdown
					titleText="Crit Conversion Up"
					bind:selectedId={critConversionCalculatorCritConversionUp}
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
						bind:value={critConversionCalculatorNaturalAffinity}
						label={'Natural Affinity'}
					/>
				</div>
				<div class="number-input-container">
					<NumberInput
						size="sm"
						step={1}
						bind:value={critConversionCalculatorSigil1Affinity}
						label={'Sigil 1 Affinity'}
					/>
				</div>
				<div class="number-input-container">
					<NumberInput
						size="sm"
						step={1}
						bind:value={critConversionCalculatorSigil2Affinity}
						label={'Sigil 2 Affinity'}
					/>
				</div>
				<div class="number-input-container">
					<NumberInput
						size="sm"
						step={1}
						bind:value={critConversionCalculatorSigil3Affinity}
						label={'Sigil 3 Affinity'}
					/>
				</div>
				<Dropdown
					titleText="AOE Affinity Sigil Hunters"
					bind:selectedId={critConversionCalculatorAOEAffinityCount}
					items={[
						{ id: '1', text: '1 Hunter' },
						{ id: '2', text: '2 Hunters' },
						{ id: '3', text: '3 Hunters' },
						{ id: '4', text: '4 Hunters' },
					]}
				/>
				<div class="number-input-container">
					<NumberInput
						size="sm"
						step={1}
						min={0}
						max={15}
						bind:value={critConversionCalculatorAOEAffinitySigil}
						invalidText={'Invalid value'}
						label={'AOE Sigil Affinity'}
					/>
				</div>
				<Dropdown
					titleText="Issen Skills"
					bind:selectedId={critConversionCalculatorIssenAffinity}
					items={[
						{
							id: '0',
							text: 'None or Determination',
						},
						{
							id: '5',
							text: 'Issen +1 (+5% / +0.10x)',
						},
						{
							id: '10',
							text: 'Issen +2 (+10% / +0.15x)',
						},
						{
							id: '20',
							text: 'Issen +3 (+20% / +0.25x)',
						},
					]}
				/>
				<Dropdown
					titleText="Melee Sharpness"
					bind:selectedId={critConversionCalculatorSharpnessAffinity}
					items={[
						{
							id: '0',
							text: 'Below Blue or Gunners (+0%)',
						},
						{ id: '5', text: 'Blue (+5%)' },
						{
							id: '10',
							text: 'White Upwards (+10%)',
						},
					]}
				/>
				<Dropdown
					titleText="Style Rank Affinity"
					bind:selectedId={critConversionCalculatorStyleRankAffinity}
					items={[
						{ id: '0', text: 'None' },
						{
							id: '20',
							text: 'Affinity +20% (+20%)',
						},
						{
							id: '24',
							text: 'Affinity +24% (+24%)',
						},
						{
							id: '26',
							text: 'Affinity +26% (+26%)',
						},
					]}
				/>
				<Dropdown
					titleText="Expert Skills"
					bind:selectedId={critConversionCalculatorExpertAffinity}
					items={[
						{ id: '0', text: 'None' },
						{ id: '10', text: 'Expert +1 (+10%)' },
						{ id: '20', text: 'Expert +2 (+20%)' },
						{ id: '30', text: 'Expert +3 (+30%)' },
						{ id: '40', text: 'Expert +4 (+40%)' },
						{ id: '50', text: 'Expert +5 (+50%)' },
						{
							id: '100',
							text: 'Determination (+100%)',
						},
					]}
				/>
				<Dropdown
					titleText="GS Active Feature"
					bind:selectedId={critConversionCalculatorGSActiveFeatureAffinity}
					items={[
						{ id: '0', text: 'None' },
						{
							id: '100',
							text: 'Unsheathe and Parry Attacks (+100%)',
						},
					]}
				/>
				<Dropdown
					titleText="Affinity Items"
					bind:selectedId={critConversionCalculatorDrinkAffinity}
					items={[
						{ id: '0', text: 'None' },
						{
							id: '10',
							text: 'Caravan Whetstone (+10%)',
						},
						{ id: '30', text: 'Halk Drink (+30%)' },
						{ id: '40', text: 'Both (+40%)' },
					]}
				/>
				<Dropdown
					titleText="Starving Wolf"
					bind:selectedId={critConversionCalculatorStarvingWolfAffinity}
					items={[
						{ id: '0', text: 'None (1x)' },
						{
							id: '50',
							text: 'Starving Wolf +1 or +2 (+50%)',
						},
					]}
				/>
				<Dropdown
					titleText="Ceaseless"
					bind:selectedId={critConversionCalculatorCeaselessAffinity}
					items={[
						{ id: '0', text: 'None (1x)' },
						{
							id: '35',
							text: 'Ceaseless 1st Stage (+35% / +0.10x)',
						},
						{
							id: '50',
							text: 'Ceaseless 2nd Stage (+50% / +0.15x)',
						},
						{
							id: '60',
							text: 'Ceaseless Up 3rd Stage (+60% / +0.20x)',
						},
					]}
				/>
				<Dropdown
					titleText="Furious"
					bind:selectedId={critConversionCalculatorFuriousAffinity}
					items={[
						{
							id: '0',
							text: 'None (x1 Ele & Status)',
						},
						{
							id: '10',
							text: '1st Stage (+70 / 1.05x Ele & Status / +10% Affinity)',
						},
						{
							id: '25',
							text: '2nd Stage (+100 / 1.10x Ele & Status / +25% Affinity)',
						},
						{
							id: '40',
							text: '3rd Stage (+180 / 1.20x Ele & Status / +40% Affinity)',
						},
					]}
				/>
				<Dropdown
					titleText="Diva Prayer Gem Affinity"
					bind:selectedId={critConversionCalculatorDivaPrayerGemAffinity}
					items={[
						{
							id: '0',
							text: 'None',
						},
						{
							id: '25',
							text: 'Affinity UP Lv1 (+25%)',
						},
						{
							id: '50',
							text: 'Affinity UP Lv2 (+50%)',
						},
						{
							id: '100',
							text: 'Affinity UP Lv3 (+100%)',
						},
					]}
				/>
			</div>
			<p>Total Affinity: {critConversionCalculatorTotalAffinity}</p>
			<p>Total True Raw: {critConversionCalculatorTrueRaw}</p>
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
			<SectionHeading level={2} title="Skill Slots" />
			<div></div>
		</section>

		<section>
			<SectionHeading level={2} title="Monster Hitzones" />
			<div></div>
		</section>

		<section>
			<SectionHeading level={2} title="Bitfields" />
			<div></div>
		</section>
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

	.damage-calculator-container-buttons {
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
		gap: 1rem;
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
		display: flex;
		flex-direction: column;
		gap: 1rem;
		border-radius: 10px 10px 10px 10px;
		border: 1px solid var(--ctp-surface0);
		padding-bottom: 1rem;
		background-color: var(--ctp-mantle);
		margin-bottom: 2rem;
	}

	.damage-calculator-diva-prayer-gems-container {
		display: flex;
		flex-direction: column;
		gap: 1rem;
		border-radius: 10px 10px 10px 10px;
		border: 1px solid var(--ctp-surface0);
		padding-bottom: 1rem;
		background-color: var(--ctp-mantle);
		margin-bottom: 2rem;
	}

	.diva-stats-values {
		display: flex;
		flex-wrap: wrap;
		gap: 1rem;
		flex-direction: column;
		padding: 1rem;
	}

	.diva-prayer-gem {
		display: grid;
		grid-template-columns: auto 1fr 1fr;
		grid-template-rows: auto;
		gap: 1rem;
		align-items: center;
	}

	.diva-prayer-gem-icon {
		position: relative;
		width: 64px;
		height: 64px;
	}

	.icon-wrapper {
		position: absolute;
		top: 0;
		left: 0;
		width: 100%;
		height: 100%;
	}

	.container-shiki {
		height: auto;
		max-width: 80vw;
		height: 256px;
		margin-bottom: 2rem;
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

	.datatable-bottom {
		margin-top: 2rem;
	}

	.flash-conversion-calculator {
		display: flex;
		gap: 1rem;
		flex-wrap: wrap;
		align-items: center;
		margin: 1rem;
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

	.ice-age-table-hits {
		display: flex;
		flex-wrap: wrap;
		overflow-x: auto;
		max-width: 90vw;
	}

	.ice-age-formula {
		max-width: 80vw;
		overflow-x: auto;
	}

	.formula-container {
		margin-bottom: 1rem;
		margin-top: 1rem;
	}

	.dropdown-tooltip-container {
		display: grid;
		grid-template-columns: auto 1fr;
		align-items: center;
		gap: 1rem;
	}

	.flex-row {
		display: flex;
		gap: 1rem;
		flex-wrap: wrap;
	}

	.flex-row-centered {
		display: flex;
		gap: 1rem;
		flex-wrap: wrap;
		align-items: center;
	}

	kbd {
		background-color: var(--ctp-surface0);
		border-radius: 3px;
		border: 1px solid var(--ctp-overlay0);
		box-shadow:
			0 1px 1px rgba(0, 0, 0, 0.2),
			0 2px 0 0 rgba(255, 255, 255, 0.7) inset;
		color: var(--cpt-text);
		display: inline-block;
		font-size: 0.85em;
		font-weight: 700;
		line-height: 1;
		padding: 2px 4px;
		white-space: nowrap;
	}

	.inline-elements-container {
		display: flex;
		flex-direction: row;
		gap: var(--cds-spacing-12);
		align-items: center;
		flex-wrap: wrap;
		margin-bottom: 1rem;
	}
</style>
