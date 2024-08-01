<script lang="ts">
	import PageTurn from '$lib/client/components/PageTurn.svelte';
	import SectionHeadingTopLevel from '$lib/client/components/SectionHeadingTopLevel.svelte';
	import HunterNotesPage from '$lib/client/components/HunterNotesPage.svelte';
	import { page } from '$app/stores';
	import InlineNotification from 'carbon-components-svelte/src/Notification/InlineNotification.svelte';
	import {
		getWeaponIcon,
		getWeaponImage,
	} from '$lib/client/modules/frontier/weapons';
	import Dropdown, {
		type DropdownItem,
	} from 'carbon-components-svelte/src/Dropdown/Dropdown.svelte';
	import ImageDialog from '$lib/client/components/ImageDialog.svelte';
	import Slider from 'carbon-components-svelte/src/Slider/Slider.svelte';
	import RadioButtonGroup from 'carbon-components-svelte/src/RadioButtonGroup/RadioButtonGroup.svelte';
	import RadioButton from 'carbon-components-svelte/src/RadioButton/RadioButton.svelte';
	import Download from 'carbon-icons-svelte/lib/Download.svelte';
	import SharpnessBar from '$lib/client/components/frontier/SharpnessBar.svelte';
	import Button from 'carbon-components-svelte/src/Button/Button.svelte';
	import InlineTooltip from '$lib/client/components/frontier/InlineTooltip.svelte';
	import type {
		FrontierBowgunRecoil,
		FrontierBowgunReloadSpeed,
		FrontierTowerWeapon,
		FrontierTowerWeaponSeries,
	} from '$lib/client/modules/frontier/types';
	import {
		getTowerWeaponIconColor,
		towerWeapons,
		towerWeaponSeries,
		towerWeaponSlotImages,
		type FrontierTowerWeaponSeriesInfo,
		type FrontierTowerWeaponSlotInfo,
	} from '$lib/client/modules/frontier/tower-weapons';
	import type { FrontierWeaponName } from 'ezlion';
	import { browser } from '$app/environment';
	import { domToPng } from 'modern-screenshot';
	import slugify from 'slugify';
	import { RarityColors } from '$lib/client/modules/frontier/objects';
	import { LocationIcons } from '$lib/client/modules/frontier/locations';
	import { getItemIcon, ItemColors } from '$lib/client/modules/frontier/items';
	import { StatusIcons } from '$lib/client/modules/frontier/ailments';
	import { ElementIcons } from '$lib/client/modules/frontier/elements';
	import { WeaponTypes } from '$lib/client/modules/frontier/weapons';
	import { getTag } from '$lib/client/modules/frontier/tags';
	import SectionHeading from '$lib/client/components/SectionHeading.svelte';
	import Link from 'carbon-components-svelte/src/Link/Link.svelte';

	function onSelectTowerWeaponOption() {
		towerWeaponSelected = getTowerWeaponSelected(
			towerWeaponSelectedWeaponOption,
		);

		towerWeaponGunlanceShellLevel = '0';
		towerWeaponGunlanceShellLevelCost = getTowerWeaponGunlanceShellLevelCost();
		towerWeaponSelectedSeriesInfo =
			getTowerWeaponSeriesInfo(towerWeaponSelected);

		towerWeaponAttackValue = towerWeaponSelected.attack[0][0];
		towerWeaponElementValue = 0;
		towerWeaponParalysisValue = 0;
		towerWeaponPoisonValue = 0;
		towerWeaponSleepValue = 0;
		towerWeaponAffinityValue = towerWeaponSelected.affinity[0][0];
		towerWeaponSharpnessLevel = 0;
		towerWeaponGunlanceShellLevel = '0';

		towerWeaponReloadSpeedValue = 'Very Slow';
		towerWeaponRecoilValue = 'Max';
		towerWeaponBowCharge1Level = '1';
		towerWeaponBowCharge2Level = '1';
		towerWeaponBowCharge3Level = '1';
		towerWeaponBowCharge4Level = '1';
		towerWeaponReloadSpeedCost = 0;
		towerWeaponRecoilCost = 0;
		towerWeaponBowCharge1Cost = 0;
		towerWeaponBowCharge2Cost = 0;
		towerWeaponBowCharge3Cost = 0;
		towerWeaponBowCharge4Cost = 0;

		towerWeaponSlots = getTowerWeaponSlots(towerWeaponSelectedSeriesInfo);
		updateTowerWeaponSlotsState();
		updateSliderDisabledState();
	}

	function onSelectTowerWeaponGunlanceShellLevel() {
		towerWeaponGunlanceShellLevelCost = getTowerWeaponGunlanceShellLevelCost();
	}

	function onSelectTowerWeaponReloadSpeed() {
		towerWeaponReloadSpeedCost = getTowerWeaponReloadSpeedCost();
	}

	function onSelectTowerWeaponRecoil() {
		towerWeaponRecoilCost = getTowerWeaponRecoilCost();
	}

	function onSelectTowerWeaponBowCharge1() {
		towerWeaponBowCharge1Cost = getTowerWeaponBowChargeCost(1);
	}

	function onSelectTowerWeaponBowCharge2() {
		towerWeaponBowCharge2Cost = getTowerWeaponBowChargeCost(2);
	}

	function onSelectTowerWeaponBowCharge3() {
		towerWeaponBowCharge3Cost = getTowerWeaponBowChargeCost(3);
	}

	function onSelectTowerWeaponBowCharge4() {
		towerWeaponBowCharge4Cost = getTowerWeaponBowChargeCost(4);
	}

	function onSelectTowerWeaponType() {
		towerWeaponsFromType = getTowerWeaponsByType(towerWeaponSelectedWeaponType);
		towerWeaponSelectedWeaponOption = towerWeaponsFromType[0].id;
		towerWeaponSelected = getTowerWeaponSelected(
			towerWeaponSelectedWeaponOption,
		);

		towerWeaponGunlanceShellLevel = '0';
		towerWeaponGunlanceShellLevelCost = getTowerWeaponGunlanceShellLevelCost();
		towerWeaponSelectedSeriesInfo =
			getTowerWeaponSeriesInfo(towerWeaponSelected);

		towerWeaponAttackValue = towerWeaponSelected.attack[0][0];
		towerWeaponElementValue = 0;
		towerWeaponParalysisValue = 0;
		towerWeaponPoisonValue = 0;
		towerWeaponSleepValue = 0;
		towerWeaponAffinityValue = towerWeaponSelected.affinity[0][0];
		towerWeaponSharpnessLevel = 0;
		towerWeaponGunlanceShellLevel = '0';

		towerWeaponReloadSpeedValue = 'Very Slow';
		towerWeaponRecoilValue = 'Max';
		towerWeaponBowCharge1Level = '1';
		towerWeaponBowCharge2Level = '1';
		towerWeaponBowCharge3Level = '1';
		towerWeaponBowCharge4Level = '1';
		towerWeaponReloadSpeedCost = 0;
		towerWeaponRecoilCost = 0;
		towerWeaponBowCharge1Cost = 0;
		towerWeaponBowCharge2Cost = 0;
		towerWeaponBowCharge3Cost = 0;
		towerWeaponBowCharge4Cost = 0;

		towerWeaponSlots = getTowerWeaponSlots(towerWeaponSelectedSeriesInfo);
		updateTowerWeaponSlotsState();
		updateSliderDisabledState();
	}

	/**TODO Add side-effects here */
	function getTowerWeaponsByType(type: FrontierWeaponName) {
		let result: DropdownItem[] = [];
		let filtered = towerWeapons.filter((e) => e.type == type);
		filtered.forEach((element) => {
			result.push({ id: element.name, text: element.name });
		});

		return result;
	}

	function getTowerWeaponImageSource(weaponOption: string) {
		let found =
			towerWeapons.find((e) => e.name === weaponOption)?.image ??
			towerWeapons[0].image;
		return found;
	}

	function getTowerWeaponSharpnessLevels(series: FrontierTowerWeaponSeries) {
		let result: number[] = [];
		let weapon = towerWeaponSeries.find((e) => e.series === series);
		weapon?.sharpnessLevels.forEach((element, index) => {
			result.push(index);
		});
		if (towerWeaponSharpnessLevel > result[result.length - 1]) {
			towerWeaponSharpnessLevel = result[result.length - 1];
		}
		return result;
	}

	function handleSliderButton(
		arr: [number, number, number][],
		property: string,
		updatedIndex: number,
	) {
		let index = updatedIndex;
		switch (property) {
			case 'attack':
				towerWeaponAttackValue = arr[index][0];
				break;
			case 'element':
				towerWeaponElementValue = arr[index][0];
				break;
			case 'poison':
				towerWeaponPoisonValue = arr[index][0];
				break;
			case 'paralysis':
				towerWeaponParalysisValue = arr[index][0];
				break;
			case 'sleep':
				towerWeaponSleepValue = arr[index][0];
				break;
			case 'affinity':
				towerWeaponAffinityValue = arr[index][0];
				break;
		}

		updateTowerWeaponSlotsState();
	}

	function findClosestIndex(arr?: [number, number, number][], w: number) {
		if (!arr) {
			return 0;
		}
		// Initialize variables to keep track of the minimum difference and its index
		let minDifference = Infinity; // Start with a large value
		let closestIndex = -1; // Initialize to -1 to indicate no match

		// Iterate over the array
		for (let i = 0; i < arr.length; i++) {
			// Calculate the absolute difference between w and the current element in x
			const difference = Math.abs(w - arr[i][0]);

			// Check if this difference is smaller than the current minimum difference
			if (difference < minDifference) {
				// Update the minimum difference and the index where it was found
				minDifference = difference;
				closestIndex = i;
			}
		}

		// Return the index where the closest value to w was found
		return closestIndex;
	}

	function handleSliderChange(
		arr: [number, number, number][],
		property: string,
	) {
		let index = 0;
		switch (property) {
			case 'attack':
				index = findClosestIndex(arr, towerWeaponAttackValue);
				towerWeaponAttackValue = arr[index][0];
				break;
			case 'element':
				index = findClosestIndex(arr, towerWeaponElementValue);
				towerWeaponElementValue = arr[index][0];
				break;
			case 'poison':
				index = findClosestIndex(arr, towerWeaponPoisonValue);
				towerWeaponPoisonValue = arr[index][0];
				break;
			case 'paralysis':
				index = findClosestIndex(arr, towerWeaponParalysisValue);
				towerWeaponParalysisValue = arr[index][0];
				break;
			case 'sleep':
				index = findClosestIndex(arr, towerWeaponSleepValue);
				towerWeaponSleepValue = arr[index][0];
				break;
			case 'affinity':
				index = findClosestIndex(arr, towerWeaponAffinityValue);
				towerWeaponAffinityValue = arr[index][0];
				break;
		}

		updateTowerWeaponSlotsState();
	}

	function getTowerWeaponSelected(option: string) {
		return towerWeapons.find((e) => e.name === option) ?? towerWeapons[0];
	}

	function getTowerWeaponGunlanceShellLevelCost() {
		if (towerWeaponSelected.type !== 'Gunlance') {
			return 0;
		}

		if (
			towerWeaponSelected.type === 'Gunlance' &&
			towerWeaponSelected.gunlanceShellLevel !== undefined
		) {
			return towerWeaponSelected.gunlanceShellLevel[
				parseInt(towerWeaponGunlanceShellLevel)
			][1];
		} else {
			return 0;
		}
	}

	function getTowerWeaponReloadSpeedCost() {
		if (
			towerWeaponSelected.type !== 'Light Bowgun' &&
			towerWeaponSelected.type !== 'Heavy Bowgun'
		) {
			return 0;
		}

		if (towerWeaponSelectedSeriesInfo.reload !== undefined) {
			return towerWeaponSelectedSeriesInfo.reload.find(
				(e) => e[0] === towerWeaponReloadSpeedValue,
			)[1];
		} else {
			return 0;
		}
	}

	function getTowerWeaponRecoilCost() {
		if (
			towerWeaponSelected.type !== 'Light Bowgun' &&
			towerWeaponSelected.type !== 'Heavy Bowgun'
		) {
			return 0;
		}

		if (towerWeaponSelectedSeriesInfo.recoil !== undefined) {
			return towerWeaponSelectedSeriesInfo.recoil.find(
				(e) => e[0] === towerWeaponRecoilValue,
			)[1];
		} else {
			return 0;
		}
	}

	function getTowerWeaponBowChargeCost(level: number) {
		if (
			towerWeaponSelected.type !== 'Bow' ||
			towerWeaponSelected.bowCharge1 === undefined ||
			towerWeaponSelected.bowCharge2 === undefined ||
			towerWeaponSelected.bowCharge3 === undefined ||
			towerWeaponSelected.bowCharge4 === undefined
		) {
			return 0;
		}

		switch (level) {
			case 1:
				return towerWeaponSelected.bowCharge1[
					parseInt(towerWeaponBowCharge1Level) - 1
				][1];
			case 2:
				return towerWeaponSelected.bowCharge2[
					parseInt(towerWeaponBowCharge2Level) - 1
				][1];
			case 3:
				return towerWeaponSelected.bowCharge3[
					parseInt(towerWeaponBowCharge3Level) - 1
				][1];
			case 4:
				return towerWeaponSelected.bowCharge4[
					parseInt(towerWeaponBowCharge4Level) - 1
				][1];
			default:
				return 0;
		}
	}

	function getTowerWeaponGunlaceShellOptions(weapon: FrontierTowerWeapon) {
		let result: DropdownItem[] = [];
		weapon.gunlanceShellLevel?.forEach((e, i) => {
			result.push({
				id: `${i}`,
				text: `LV${towerWeaponSelected.series === 'Blue' && i > 0 ? i + 5 : i + 1}`,
			});
		});
		return result;
	}

	function updateTowerWeaponSlotsState() {
		towerWeaponSigilsUsed = 0;

		if (towerWeaponElementValue > 0) {
			towerWeaponSigilsUsed++;
		}

		if (towerWeaponAffinityValue > 0) {
			towerWeaponSigilsUsed++;
		}

		if (
			towerWeaponPoisonValue >= 1 ||
			towerWeaponParalysisValue >= 1 ||
			towerWeaponSleepValue >= 1
		) {
			towerWeaponSigilsUsed++;
		}

		if (towerWeaponSlots[0].type === 'Sigil') {
			if (towerWeaponSlots[0].state === 'off' && towerWeaponSigilsUsed >= 1) {
				towerWeaponSlots[0].state = 'on';
				towerWeaponSlots[0].image = towerWeaponSlotImages[3].image;
			}
		}

		if (towerWeaponSlots[1].type === 'Sigil') {
			if (
				towerWeaponSlots[1].state === 'off' &&
				towerWeaponSlots[0].state === 'on' &&
				towerWeaponSigilsUsed >= 2
			) {
				towerWeaponSlots[1].state = 'on';
				towerWeaponSlots[1].image = towerWeaponSlotImages[3].image;
			}
		}

		if (towerWeaponSlots[2].type === 'Sigil') {
			if (
				towerWeaponSlots[2].state === 'off' &&
				towerWeaponSlots[1].state === 'on' &&
				towerWeaponSlots[0].state === 'on' &&
				towerWeaponSigilsUsed >= 3
			) {
				towerWeaponSlots[2].state = 'on';
				towerWeaponSlots[2].image = towerWeaponSlotImages[3].image;
			}
		}

		if (towerWeaponSigilsUsed === 2) {
			towerWeaponSlots[2].state = 'off';
			towerWeaponSlots[2].image =
				towerWeaponSlots[2].type === 'Sigil'
					? towerWeaponSlotImages[2].image
					: towerWeaponSlotImages[1].image;
		} else if (towerWeaponSigilsUsed === 1) {
			towerWeaponSlots[1].state = 'off';
			towerWeaponSlots[1].image =
				towerWeaponSlots[1].type === 'Sigil'
					? towerWeaponSlotImages[2].image
					: towerWeaponSlotImages[1].image;
		} else if (towerWeaponSigilsUsed === 0) {
			towerWeaponSlots[0].state = 'off';
			towerWeaponSlots[0].image =
				towerWeaponSlots[0].type === 'Sigil'
					? towerWeaponSlotImages[2].image
					: towerWeaponSlotImages[1].image;
		}

		updateSliderDisabledState();
	}

	function getTowerWeaponSlots(seriesInfo: FrontierTowerWeaponSeriesInfo) {
		let result: FrontierTowerWeaponSlotInfo[] = [];
		seriesInfo.slots.forEach((e, i) => {
			result.push({
				state: 'off',
				type:
					i === 2 &&
					towerWeaponSelected.series === 'Blue' &&
					(towerWeaponSelected.type === 'Bow' ||
						towerWeaponSelected.type === 'Light Bowgun' ||
						towerWeaponSelected.type === 'Heavy Bowgun')
						? 'Decoration'
						: e,
				image:
					towerWeaponSlotImages.find(
						(element) =>
							element.state === 'off' &&
							element.type ===
								(i === 2 &&
								towerWeaponSelected.series === 'Blue' &&
								(towerWeaponSelected.type === 'Bow' ||
									towerWeaponSelected.type === 'Light Bowgun' ||
									towerWeaponSelected.type === 'Heavy Bowgun')
									? 'Decoration'
									: e),
					).image ?? '',
			});
		});
		return result;
	}

	function getTowerWeaponSeriesInfo(weapon: FrontierTowerWeapon) {
		return (
			towerWeaponSeries.find((e) => e.series === weapon.series) ??
			towerWeaponSeries[0]
		);
	}

	function updateSliderDisabledState() {
		// Example logic: Disable the slider if all sigil slots are in use and the property value is 0

		const maxSigilsSlots = towerWeaponSelectedSeriesInfo.slots.filter(
			(e) => e === 'Sigil',
		).length;
		const sigilSlotsInUse = towerWeaponSigilsUsed;

		// Determine if any of the conditions for disabling poison, sleep, and paralysis sliders are met
		const disablePoisonSleepParalysis =
			sigilSlotsInUse >= maxSigilsSlots &&
			(towerWeaponElementValue > 0 || towerWeaponAffinityValue > 0);
		// Disable sliders based on the values of poison, paralysis, and sleep
		// Adjusted to ensure that sliders are disabled when any of the conditions are met
		towerWeaponPoisonDisabled =
			towerWeaponPoisonValue <= 0 &&
			(disablePoisonSleepParalysis ||
				towerWeaponSleepValue > 0 ||
				towerWeaponParalysisValue > 0);

		towerWeaponParalysisDisabled =
			towerWeaponParalysisValue <= 0 &&
			(disablePoisonSleepParalysis ||
				towerWeaponSleepValue > 0 ||
				towerWeaponPoisonValue > 0);

		towerWeaponSleepDisabled =
			towerWeaponSleepValue <= 0 &&
			(disablePoisonSleepParalysis ||
				towerWeaponPoisonValue > 0 ||
				towerWeaponParalysisValue > 0);

		towerWeaponElementDisabled =
			towerWeaponSigilsUsed >= maxSigilsSlots && towerWeaponElementValue <= 0;

		towerWeaponAffinityDisabled =
			towerWeaponSigilsUsed >= maxSigilsSlots && towerWeaponAffinityValue <= 0;
	}

	function getTowerWeaponTotalGems(
		weapon: FrontierTowerWeapon,
		attackGems: number,
		elementGems: number,
		poisonGems: number,
		sleepGems: number,
		paralysisGems: number,
		affinityGems: number,
		sharpnessGems: number,
		gunlanceShellIndex: number,
		reloadIndex: number,
		recoilIndex: number,
		bowCharge1Index: number,
		bowCharge2Index: number,
		bowCharge3Index: number,
		bowCharge4Index: number,
	) {
		let result = { courage: 0, glittering: 0, divine: 0 };

		result.courage = attackGems + affinityGems;

		result.glittering = elementGems + poisonGems + sleepGems + paralysisGems;

		result.divine =
			sharpnessGems +
			(towerWeaponSelected.gunlanceShellLevel
				? towerWeaponSelected.gunlanceShellLevel[gunlanceShellIndex][2]
				: 0) +
			towerWeaponSelectedSeriesInfo.reload[reloadIndex][2] +
			towerWeaponSelectedSeriesInfo.recoil[recoilIndex][2] +
			(towerWeaponSelected.bowCharge1
				? towerWeaponSelected.bowCharge1[bowCharge1Index][2]
				: 0) +
			(towerWeaponSelected.bowCharge2
				? towerWeaponSelected.bowCharge2[bowCharge2Index][2]
				: 0) +
			(towerWeaponSelected.bowCharge3
				? towerWeaponSelected.bowCharge3[bowCharge3Index][2]
				: 0) +
			(towerWeaponSelected.bowCharge4
				? towerWeaponSelected.bowCharge4[bowCharge4Index][2]
				: 0);

		return result;
	}

	function downloadTowerWeaponImage() {
		if (!browser) return;
		let node = document.getElementById('tower-weapon-dom');
		if (!node) return;
		domToPng(node, { quality: 1 }).then((dataUrl) => {
			const link = document.createElement('a');
			link.download = `${slugify(
				`Tower-${towerWeaponSelected.type}-${towerWeaponSelected.name}-${new Date().toISOString()}.png`,
			)}`;
			link.href = dataUrl;
			link.click();
		});
	}

	function getTowerWeaponTotalCost(
		weapon: FrontierTowerWeapon,
		attackCost: number,
		elementCost: number,
		poisonCost: number,
		sleepCost: number,
		paralysisCost: number,
		affinityCost: number,
		sharpnessCost: number,
		gunlanceShellCost: number,
		reloadCost: number,
		recoilCost: number,
		bowCharge1Cost: number,
		bowCharge2Cost: number,
		bowCharge3Cost: number,
		bowCharge4Cost: number,
	) {
		let result = 0;
		result =
			attackCost +
			elementCost +
			poisonCost +
			sleepCost +
			paralysisCost +
			affinityCost +
			sharpnessCost +
			gunlanceShellCost +
			reloadCost +
			recoilCost +
			bowCharge1Cost +
			bowCharge2Cost +
			bowCharge3Cost +
			bowCharge4Cost;

		return result;
	}

	let towerWeaponSelectedWeaponType = towerWeapons[0].type;
	let towerWeaponSelectedWeaponOption = towerWeapons[0].name;
	let towerWeaponAttackValue = towerWeapons[0].attack[0][0];
	let towerWeaponElementValue = 0;
	let towerWeaponParalysisValue = 0;
	let towerWeaponPoisonValue = 0;
	let towerWeaponSleepValue = 0;
	let towerWeaponAffinityValue = towerWeapons[0].affinity[0][0];
	let towerWeaponSharpnessLevel = 0;
	let towerWeaponGunlanceShellLevel = '0';

	let towerWeaponReloadSpeedValue: FrontierBowgunReloadSpeed = 'Very Slow';
	let towerWeaponRecoilValue: FrontierBowgunRecoil = 'Max';
	let towerWeaponBowCharge1Level = '1';
	let towerWeaponBowCharge2Level = '1';
	let towerWeaponBowCharge3Level = '1';
	let towerWeaponBowCharge4Level = '1';

	let towerWeaponSelected = towerWeapons[0];
	let towerWeaponsFromType = getTowerWeaponsByType(
		towerWeaponSelectedWeaponType,
	);

	let towerWeaponSelectedSeriesInfo =
		getTowerWeaponSeriesInfo(towerWeaponSelected);

	const towerWeaponReloadSpeedOptions = [
		{ id: 'Very Slow', text: 'Very Slow' },
		{ id: 'Slow', text: 'Slow' },
		{ id: 'Normal', text: 'Normal' },
		{ id: 'Fast', text: 'Fast' },
		{ id: 'Very Fast', text: 'Very Fast' },
	];

	const towerWeaponRecoilOptions = [
		{ id: 'Max', text: 'Max' },
		{ id: 'Large', text: 'Large' },
		{ id: 'Medium', text: 'Medium' },
		{ id: 'Small', text: 'Small' },
		{ id: 'Smaller', text: 'Smaller' },
	];

	$: towerWeaponSeriesColor = getTowerWeaponIconColor(
		towerWeaponSelected.series,
	);

	$: towerWeaponReloadSpeedIndex = towerWeaponReloadSpeedOptions.findIndex(
		(e) => e.id === towerWeaponReloadSpeedValue,
	);

	$: towerWeaponRecoilIndex = towerWeaponRecoilOptions.findIndex(
		(e) => e.id === towerWeaponRecoilValue,
	);

	$: towerWeaponSharpnessLevels = getTowerWeaponSharpnessLevels(
		towerWeaponSelected.series,
	);

	$: towerWeaponAttackIndex = findClosestIndex(
		towerWeaponSelected.attack,
		towerWeaponAttackValue,
	);

	$: towerWeaponElementIndex = findClosestIndex(
		towerWeaponSelected.element,
		towerWeaponElementValue,
	);

	$: towerWeaponParalysisIndex = findClosestIndex(
		towerWeaponSelected.paralysis,
		towerWeaponParalysisValue,
	);

	$: towerWeaponPoisonIndex = findClosestIndex(
		towerWeaponSelected.poison,
		towerWeaponPoisonValue,
	);

	$: towerWeaponSleepIndex = findClosestIndex(
		towerWeaponSelected.sleep,
		towerWeaponSleepValue,
	);

	$: towerWeaponAffinityIndex = findClosestIndex(
		towerWeaponSelected.affinity,
		towerWeaponAffinityValue,
	);

	$: towerWeaponSharpnessIndex =
		towerWeaponSharpnessLevels.findIndex(
			(e) => e === towerWeaponSharpnessLevel,
		) ?? 0;

	let towerWeaponGunlanceShellLevelCost =
		getTowerWeaponGunlanceShellLevelCost();
	let towerWeaponReloadSpeedCost = getTowerWeaponReloadSpeedCost();
	let towerWeaponRecoilCost = getTowerWeaponRecoilCost();
	let towerWeaponBowCharge1Cost = getTowerWeaponBowChargeCost(1);
	let towerWeaponBowCharge2Cost = getTowerWeaponBowChargeCost(2);
	let towerWeaponBowCharge3Cost = getTowerWeaponBowChargeCost(3);
	let towerWeaponBowCharge4Cost = getTowerWeaponBowChargeCost(4);

	$: towerWeaponGunlanceShellOptions =
		getTowerWeaponGunlaceShellOptions(towerWeaponSelected);

	const towerWeaponBowChargeOptions = [
		{ id: '1', text: 'LV1' },
		{ id: '2', text: 'LV2' },
		{ id: '3', text: 'LV3' },
		{ id: '4', text: 'LV4' },
	];

	let towerWeaponSlots = getTowerWeaponSlots(towerWeaponSelectedSeriesInfo);
	let towerWeaponSigilsUsed = 0;
	let towerWeaponElementDisabled = false;
	let towerWeaponAffinityDisabled = false;
	let towerWeaponSleepDisabled = false;
	let towerWeaponPoisonDisabled = false;
	let towerWeaponParalysisDisabled = false;

	$: towerWeaponSharpnessBarValues =
		towerWeaponSeries.find((e) => e.series === towerWeaponSelected.series)
			?.sharpnessLevels[towerWeaponSharpnessIndex][0] ??
		towerWeaponSeries[0].sharpnessLevels[0][0];

	$: towerWeaponImage = getTowerWeaponImageSource(
		towerWeaponSelectedWeaponOption,
	);

	$: towerWeaponTotalGems = getTowerWeaponTotalGems(
		towerWeaponSelected,
		towerWeaponSelected.attack[towerWeaponAttackIndex][2],
		towerWeaponSelected.element
			? towerWeaponSelected.element[towerWeaponElementIndex][2]
			: 0,
		towerWeaponSelected.poison
			? towerWeaponSelected.poison[towerWeaponPoisonIndex][2]
			: 0,
		towerWeaponSelected.sleep
			? towerWeaponSelected.sleep[towerWeaponSleepIndex][2]
			: 0,
		towerWeaponSelected.paralysis
			? towerWeaponSelected.paralysis[towerWeaponParalysisIndex][2]
			: 0,
		towerWeaponSelected.affinity[towerWeaponAffinityIndex][2],
		towerWeaponSelectedSeriesInfo.sharpnessLevels[towerWeaponSharpnessIndex][2],
		parseInt(towerWeaponGunlanceShellLevel),
		towerWeaponReloadSpeedIndex,
		towerWeaponRecoilIndex,
		parseInt(towerWeaponBowCharge1Level) - 1,
		parseInt(towerWeaponBowCharge2Level) - 1,
		parseInt(towerWeaponBowCharge3Level) - 1,
		parseInt(towerWeaponBowCharge4Level) - 1,
	);

	$: towerWeaponTotalCost = getTowerWeaponTotalCost(
		towerWeaponSelected,
		towerWeaponSelected.attack[towerWeaponAttackIndex][1],
		towerWeaponSelected.element
			? towerWeaponSelected.element[towerWeaponElementIndex][1]
			: 0,
		towerWeaponSelected.poison
			? towerWeaponSelected.poison[towerWeaponPoisonIndex][1]
			: 0,
		towerWeaponSelected.sleep
			? towerWeaponSelected.sleep[towerWeaponSleepIndex][1]
			: 0,
		towerWeaponSelected.paralysis
			? towerWeaponSelected.paralysis[towerWeaponParalysisIndex][1]
			: 0,
		towerWeaponSelected.affinity[towerWeaponAffinityIndex][1],
		towerWeaponSelectedSeriesInfo.sharpnessLevels[towerWeaponSharpnessIndex][1],
		towerWeaponGunlanceShellLevelCost,
		towerWeaponReloadSpeedCost,
		towerWeaponRecoilCost,
		towerWeaponBowCharge1Cost,
		towerWeaponBowCharge2Cost,
		towerWeaponBowCharge3Cost,
		towerWeaponBowCharge4Cost,
	);

	$: towerWeaponExceedsMaxCost =
		towerWeaponTotalCost > towerWeaponSelectedSeriesInfo.maxTotalCost;
</script>

<HunterNotesPage displayTOC={false}>
	<div>
		<SectionHeadingTopLevel title={'Tower Weapon Simulator'} />

		<div>
			<InlineNotification
				lowContrast
				hideCloseButton
				kind="info"
				title="Value correction:"
				subtitle="The sliders automatically adjust to the correct values once you release them."
			/>

			<p class="spaced-paragraph">
				If you are looking for an explanation on tower weapons, see our <Link
					inline
					href="/hunter-notes/weapons/tower">Hunter's Notes page.</Link
				>
			</p>

			<div class="tower-weapon-simulator-container">
				<div class="tower-weapon-simulator-weapon-container">
					<div class="flex-centered padded">
						<Dropdown
							let:item
							titleText="Weapon Type"
							type="inline"
							hideLabel
							on:select={onSelectTowerWeaponType}
							bind:selectedId={towerWeaponSelectedWeaponType}
							items={[
								{ id: 'Great Sword', text: 'Great Sword' },
								{ id: 'Long Sword', text: 'Long Sword' },
								{ id: 'Sword and Shield', text: 'Sword and Shield' },
								{ id: 'Dual Swords', text: 'Dual Swords' },
								{ id: 'Hammer', text: 'Hammer' },
								{ id: 'Hunting Horn', text: 'Hunting Horn' },
								{ id: 'Lance', text: 'Lance' },
								{ id: 'Gunlance', text: 'Gunlance' },
								{ id: 'Heavy Bowgun', text: 'Heavy Bowgun' },
								{ id: 'Light Bowgun', text: 'Light Bowgun' },
								{ id: 'Bow', text: 'Bow' },
								{ id: 'Tonfa', text: 'Tonfa' },
								{ id: 'Switch Axe F', text: 'Switch Axe F' },
								{ id: 'Magnet Spike', text: 'Magnet Spike' },
							]}
						>
							<div>
								<img
									alt="Theme Icon"
									src={getWeaponImage(item.id)}
									width="24"
								/>
								<strong style="vertical-align: center;">{item.text}</strong>
							</div>
						</Dropdown>
						<Dropdown
							titleText="Tower Weapon"
							type="inline"
							let:item
							hideLabel
							on:select={onSelectTowerWeaponOption}
							bind:selectedId={towerWeaponSelectedWeaponOption}
							items={towerWeaponsFromType}
						>
							<div>
								<svelte:component
									this={getWeaponIcon(towerWeaponSelectedWeaponType)}
									{...{
										color: getTowerWeaponIconColor(
											towerWeapons.find((e) => e.name === item.text)?.series ||
												'Light',
										),
										size: '24px',
									}}
								/>
								<strong style="vertical-align: center;">{item.text}</strong>
							</div>
						</Dropdown>
					</div>
					<div class="flex-centered padded flex-column">
						<ImageDialog
							width={195}
							height={200}
							src={towerWeaponImage}
							alt="Tower Weapon"
							type="file"
						/>
						<div class="tower-weapon-slots-container">
							{#each towerWeaponSlots as weaponSlot}
								<img src={weaponSlot.image} alt="Tower Weapon Slot" />
							{/each}
						</div>
					</div>

					<div
						class="flex-centered padded"
						style={towerWeaponExceedsMaxCost
							? 'color: var(--ctp-red)'
							: 'var(--ctp-text)'}
					>
						<p><strong>Total Cost: {towerWeaponTotalCost}</strong></p>
					</div>
				</div>

				<div class="tower-weapon-properties">
					<div class="tower-weapon-property">
						<div class="tower-weapon-slider-container">
							<button
								on:click={() =>
									handleSliderButton(
										towerWeaponSelected.attack,
										'attack',
										Math.max(towerWeaponAttackIndex - 1, 0),
									)}
								class="tower-weapon-slider-button">-</button
							>
							<Slider
								labelText="Attack"
								min={towerWeaponSelected.attack[0][0]}
								max={towerWeaponSelected.attack.at(-1)[0]}
								bind:value={towerWeaponAttackValue}
								on:change={(e) =>
									handleSliderChange(towerWeaponSelected.attack, 'attack')}
							/>
							<button
								on:click={() =>
									handleSliderButton(
										towerWeaponSelected.attack,
										'attack',
										Math.min(
											towerWeaponAttackIndex + 1,
											towerWeaponSelected.attack.length - 1,
										),
									)}
								class="tower-weapon-slider-button">+</button
							>
						</div>
						<p>
							Upgrade #{towerWeaponAttackIndex} Cost: {towerWeaponSelected
								.attack[towerWeaponAttackIndex][1]}
						</p>
					</div>
					{#if towerWeaponSelectedWeaponType !== 'Light Bowgun' && towerWeaponSelectedWeaponType !== 'Heavy Bowgun'}
						<div class="tower-weapon-property">
							<div class="tower-weapon-slider-container">
								<button
									on:click={() =>
										handleSliderButton(
											towerWeaponSelected.element,
											'element',
											Math.max(towerWeaponElementIndex - 1, 0),
										)}
									class="tower-weapon-slider-button">-</button
								>
								<Slider
									labelText="Element"
									min={towerWeaponSelected.element[0][0]}
									max={towerWeaponSelected.element.at(-1)[0]}
									bind:value={towerWeaponElementValue}
									disabled={towerWeaponElementDisabled}
									on:change={(e) =>
										handleSliderChange(towerWeaponSelected.element, 'element')}
								/>
								<button
									on:click={() =>
										handleSliderButton(
											towerWeaponSelected.element,
											'element',
											Math.min(
												towerWeaponElementIndex + 1,
												towerWeaponSelected.element.length - 1,
											),
										)}
									class="tower-weapon-slider-button">+</button
								>
							</div>
							<p>
								Upgrade #{towerWeaponElementIndex} Cost: {towerWeaponSelected
									.element[towerWeaponElementIndex][1]}
							</p>
						</div>
					{/if}
					<div class="tower-weapon-property">
						<div class="tower-weapon-slider-container">
							<button
								on:click={() =>
									handleSliderButton(
										towerWeaponSelected.affinity,
										'affinity',
										Math.max(towerWeaponAffinityIndex - 1, 0),
									)}
								class="tower-weapon-slider-button">-</button
							>
							<Slider
								labelText="Affinity"
								min={towerWeaponSelected.affinity[0][0]}
								max={towerWeaponSelected.affinity.at(-1)[0]}
								bind:value={towerWeaponAffinityValue}
								disabled={towerWeaponAffinityDisabled}
								on:change={(e) =>
									handleSliderChange(towerWeaponSelected.affinity, 'affinity')}
							/>
							<button
								on:click={() =>
									handleSliderButton(
										towerWeaponSelected.affinity,
										'affinity',
										Math.min(
											towerWeaponAffinityIndex + 1,
											towerWeaponSelected.affinity.length - 1,
										),
									)}
								class="tower-weapon-slider-button">+</button
							>
						</div>
						<p>
							Upgrade #{towerWeaponAffinityIndex} Cost: {towerWeaponSelected
								.affinity[towerWeaponAffinityIndex][1]}
						</p>
					</div>
					{#if towerWeaponSelectedWeaponType !== 'Bow'}
						<div class="tower-weapon-property">
							<div class="tower-weapon-slider-container">
								<button
									on:click={() =>
										handleSliderButton(
											towerWeaponSelected.poison,
											'poison',
											Math.max(towerWeaponPoisonIndex - 1, 0),
										)}
									class="tower-weapon-slider-button">-</button
								>
								<Slider
									disabled={towerWeaponPoisonDisabled}
									labelText="Poison"
									min={towerWeaponSelected.poison[0][0]}
									max={towerWeaponSelected.poison.at(-1)[0]}
									bind:value={towerWeaponPoisonValue}
									on:change={(e) =>
										handleSliderChange(towerWeaponSelected.poison, 'poison')}
								/>
								<button
									on:click={() =>
										handleSliderButton(
											towerWeaponSelected.poison,
											'poison',
											Math.min(
												towerWeaponPoisonIndex + 1,
												towerWeaponSelected.poison.length - 1,
											),
										)}
									class="tower-weapon-slider-button">+</button
								>
							</div>
							<p>
								Upgrade #{towerWeaponPoisonIndex} Cost: {towerWeaponSelected
									.poison[towerWeaponPoisonIndex][1]}
							</p>
						</div>
						<div class="tower-weapon-property">
							<div class="tower-weapon-slider-container">
								<button
									on:click={() =>
										handleSliderButton(
											towerWeaponSelected.paralysis,
											'paralysis',
											Math.max(towerWeaponParalysisIndex - 1, 0),
										)}
									class="tower-weapon-slider-button">-</button
								>
								<Slider
									disabled={towerWeaponParalysisDisabled}
									labelText="Paralysis"
									min={towerWeaponSelected.paralysis[0][0]}
									max={towerWeaponSelected.paralysis.at(-1)[0]}
									bind:value={towerWeaponParalysisValue}
									on:change={(e) =>
										handleSliderChange(
											towerWeaponSelected.paralysis,
											'paralysis',
										)}
								/>
								<button
									on:click={() =>
										handleSliderButton(
											towerWeaponSelected.paralysis,
											'paralysis',
											Math.min(
												towerWeaponParalysisIndex + 1,
												towerWeaponSelected.paralysis.length - 1,
											),
										)}
									class="tower-weapon-slider-button">+</button
								>
							</div>
							<p>
								Upgrade #{towerWeaponParalysisIndex} Cost: {towerWeaponSelected
									.paralysis[towerWeaponParalysisIndex][1]}
							</p>
						</div>
						<div class="tower-weapon-property">
							<div class="tower-weapon-slider-container">
								<button
									on:click={() =>
										handleSliderButton(
											towerWeaponSelected.sleep,
											'sleep',
											Math.max(towerWeaponSleepIndex - 1, 0),
										)}
									class="tower-weapon-slider-button">-</button
								>
								<Slider
									disabled={towerWeaponSleepDisabled}
									labelText="Sleep"
									min={towerWeaponSelected.sleep[0][0]}
									max={towerWeaponSelected.sleep.at(-1)[0]}
									bind:value={towerWeaponSleepValue}
									on:change={(e) =>
										handleSliderChange(towerWeaponSelected.sleep, 'sleep')}
								/>
								<button
									on:click={() =>
										handleSliderButton(
											towerWeaponSelected.sleep,
											'sleep',
											Math.min(
												towerWeaponSleepIndex + 1,
												towerWeaponSelected.sleep.length - 1,
											),
										)}
									class="tower-weapon-slider-button">+</button
								>
							</div>

							<p>
								Upgrade #{towerWeaponSleepIndex} Cost: {towerWeaponSelected
									.sleep[towerWeaponSleepIndex][1]}
							</p>
						</div>
					{/if}

					{#if towerWeaponSelectedWeaponType !== 'Bow' && towerWeaponSelectedWeaponType !== 'Light Bowgun' && towerWeaponSelectedWeaponType !== 'Heavy Bowgun'}
						<div class="tower-weapon-property">
							<RadioButtonGroup
								legendText="Sharpness"
								name="sharpness"
								bind:selected={towerWeaponSharpnessLevel}
							>
								{#each towerWeaponSharpnessLevels as value}
									<RadioButton labelText={`LV${value}`} {value} />
								{/each}
							</RadioButtonGroup>
							<div class="sharpness-bar-container">
								<SharpnessBar
									sharpnessBoost={false}
									sharpnessValues={towerWeaponSharpnessBarValues}
								/>
							</div>
							<p>
								Upgrade #{towerWeaponSharpnessIndex} Cost: {towerWeaponSelectedSeriesInfo
									.sharpnessLevels[towerWeaponSharpnessIndex][1]}
							</p>
						</div>
					{/if}
					{#if towerWeaponSelectedWeaponType === 'Gunlance'}
						<div class="tower-weapon-property">
							<Dropdown
								type="default"
								titleText="Shell Level"
								on:select={onSelectTowerWeaponGunlanceShellLevel}
								bind:selectedId={towerWeaponGunlanceShellLevel}
								items={towerWeaponGunlanceShellOptions}
							/>
							<p>
								Upgrade #{towerWeaponGunlanceShellLevel} Cost: {towerWeaponGunlanceShellLevelCost}
							</p>
						</div>
					{/if}
					{#if towerWeaponSelectedWeaponType === 'Heavy Bowgun' || towerWeaponSelectedWeaponType === 'Light Bowgun'}
						<div class="tower-weapon-property">
							<Dropdown
								type="default"
								titleText="Reload Speed"
								on:select={onSelectTowerWeaponReloadSpeed}
								bind:selectedId={towerWeaponReloadSpeedValue}
								items={towerWeaponReloadSpeedOptions}
							/>
							<p>
								Upgrade #{towerWeaponReloadSpeedIndex} Cost: {towerWeaponReloadSpeedCost}
							</p>
						</div>
						<div class="tower-weapon-property">
							<Dropdown
								type="default"
								titleText="Recoil"
								on:select={onSelectTowerWeaponRecoil}
								bind:selectedId={towerWeaponRecoilValue}
								items={towerWeaponRecoilOptions}
							/>
							<p>
								Upgrade #{towerWeaponRecoilIndex} Cost: {towerWeaponRecoilCost}
							</p>
						</div>
					{/if}
					{#if towerWeaponSelectedWeaponType === 'Bow'}
						<div class="tower-weapon-property">
							<Dropdown
								type="default"
								titleText="Charge 1"
								on:select={onSelectTowerWeaponBowCharge1}
								bind:selectedId={towerWeaponBowCharge1Level}
								items={towerWeaponBowChargeOptions}
							/>
							<p>
								Upgrade #{parseInt(towerWeaponBowCharge1Level) - 1} Cost: {towerWeaponBowCharge1Cost}
							</p>
						</div>
						<div class="tower-weapon-property">
							<Dropdown
								type="default"
								titleText="Charge 2"
								on:select={onSelectTowerWeaponBowCharge2}
								bind:selectedId={towerWeaponBowCharge2Level}
								items={towerWeaponBowChargeOptions}
							/>
							<p>
								Upgrade #{parseInt(towerWeaponBowCharge2Level) - 1} Cost: {towerWeaponBowCharge2Cost}
							</p>
						</div>
						<div class="tower-weapon-property">
							<Dropdown
								type="default"
								titleText="Charge 3"
								on:select={onSelectTowerWeaponBowCharge3}
								bind:selectedId={towerWeaponBowCharge3Level}
								items={towerWeaponBowChargeOptions}
							/>
							<p>
								Upgrade #{parseInt(towerWeaponBowCharge3Level) - 1} Cost: {towerWeaponBowCharge3Cost}
							</p>
						</div>
						<div class="tower-weapon-property">
							<Dropdown
								type="default"
								titleText="Charge 4"
								on:select={onSelectTowerWeaponBowCharge4}
								bind:selectedId={towerWeaponBowCharge4Level}
								items={towerWeaponBowChargeOptions}
							/>
							<p>
								Upgrade #{parseInt(towerWeaponBowCharge4Level) - 1} Cost: {towerWeaponBowCharge4Cost}
							</p>
						</div>
					{/if}
				</div>
			</div>

			<div class="tower-weapon-simulator-preview-container">
				<div class="container-buttons">
					<Button
						kind="tertiary"
						icon={Download}
						on:click={downloadTowerWeaponImage}>Download</Button
					>
				</div>
				<div class="tower-weapon-stats" id="tower-weapon-dom">
					<div
						class="flex-centered"
						style={towerWeaponExceedsMaxCost
							? 'color: var(--ctp-red)'
							: 'var(--ctp-text)'}
					>
						<p><strong>Total Cost: {towerWeaponTotalCost}</strong></p>
					</div>
					<div class="tower-weapon-gems">
						<p>
							<InlineTooltip
								tooltip="Item"
								text={`${towerWeaponTotalGems.courage} Courage Gems`}
								icon={getItemIcon('Ball')}
								iconColor={ItemColors.find((e) => e.name === 'Red')?.value}
								iconSize={'clamp(1rem, 2vw, 2rem)'}
							/>
						</p>
						<p>
							<InlineTooltip
								tooltip="Item"
								text={`${towerWeaponTotalGems.glittering} Glittering Gems`}
								icon={getItemIcon('Ball')}
								iconColor={RarityColors[5]}
								iconSize={'clamp(1rem, 2vw, 2rem)'}
							/>
						</p>
						<p>
							<InlineTooltip
								tooltip="Item"
								text={`${towerWeaponTotalGems.divine} Divine Gems`}
								icon={getItemIcon('Ball')}
								iconColor={RarityColors[3]}
								iconSize={'clamp(1rem, 2vw, 2rem)'}
							/>
						</p>
					</div>
					<div class="tower-weapon-summary">
						<p>
							<InlineTooltip
								tooltip={'Stat'}
								text={`${towerWeaponAttackValue} Attack (${towerWeaponAttackIndex !== towerWeaponSelected.attack.length - 1 ? towerWeaponAttackIndex : 'MAX'})`}
								iconSize={'clamp(1rem, 2vw, 2rem)'}
								icon={getItemIcon('Knife')}
								iconColor={ItemColors.find((e) => e.name === 'Red')?.value}
							/>
						</p>
						{#if towerWeaponElementValue > 0}
							<p>
								<InlineTooltip
									tooltip={'Stat'}
									text={`${towerWeaponElementValue * 10} Element (${towerWeaponElementIndex !== towerWeaponSelected.element.length - 1 ? towerWeaponElementIndex : 'MAX'})`}
									iconSize={'clamp(1rem, 2vw, 2rem)'}
									icon={ElementIcons.find((e) => e.name === 'Dragon')?.icon}
								/>
							</p>
						{/if}
						{#if towerWeaponPoisonValue > 0}
							<p>
								<InlineTooltip
									tooltip={'Stat'}
									text={`${towerWeaponPoisonValue * 10} Status (${towerWeaponPoisonIndex !== towerWeaponSelected.poison.length - 1 ? towerWeaponPoisonIndex : 'MAX'})`}
									iconSize={'clamp(1rem, 2vw, 2rem)'}
									icon={StatusIcons.find((e) => e.name === 'Poison')?.icon}
								/>
							</p>
						{:else if towerWeaponParalysisValue > 0}
							<p>
								<InlineTooltip
									tooltip={'Stat'}
									text={`${towerWeaponParalysisValue * 10} Status (${towerWeaponParalysisIndex !== towerWeaponSelected.paralysis.length - 1 ? towerWeaponParalysisIndex : 'MAX'})`}
									iconSize={'clamp(1rem, 2vw, 2rem)'}
									icon={StatusIcons.find((e) => e.name === 'Paralysis')?.icon}
								/>
							</p>
						{:else if towerWeaponSleepValue > 0}
							<p>
								<InlineTooltip
									tooltip={'Stat'}
									text={`${towerWeaponSleepValue * 10} Status (${towerWeaponSleepIndex !== towerWeaponSelected.sleep.length - 1 ? towerWeaponSleepIndex : 'MAX'})`}
									iconSize={'clamp(1rem, 2vw, 2rem)'}
									icon={StatusIcons.find((e) => e.name === 'Sleep')?.icon}
								/>
							</p>
						{/if}
						{#if towerWeaponAffinityValue > 0}
							<p>
								<InlineTooltip
									tooltip={'Stat'}
									text={`${towerWeaponAffinityValue}% Affinity (${towerWeaponAffinityIndex !== towerWeaponSelected.affinity.length - 1 ? towerWeaponAffinityIndex : 'MAX'})`}
									iconSize={'clamp(1rem, 2vw, 2rem)'}
									icon={getItemIcon('Knife')}
									iconColor={ItemColors.find((e) => e.name === 'Cyan')?.value}
								/>
							</p>
						{/if}
						{#if towerWeaponSharpnessLevel > 0}
							<p>
								<InlineTooltip
									tooltip={'Stat'}
									text={`Sharpness LV${towerWeaponSharpnessIndex !== towerWeaponSelectedSeriesInfo.sharpnessLevels.length - 1 ? towerWeaponSharpnessIndex : ' MAX'}`}
									iconColor={ItemColors.find((e) => e.name === 'Yellow')?.value}
									iconSize={'clamp(1rem, 2vw, 2rem)'}
									icon={getItemIcon('Whetstone')}
								/>
							</p>
						{/if}
						{#if towerWeaponGunlanceShellLevel !== '0'}
							<p>
								<InlineTooltip
									tooltip={'Stat'}
									text={`Shell LV${parseInt(towerWeaponGunlanceShellLevel) !== 8 ? parseInt(towerWeaponGunlanceShellLevel) + 1 : ' MAX'}`}
									iconSize={'clamp(1rem, 2vw, 2rem)'}
									icon={getWeaponIcon('Gunlance')}
								/>
							</p>
						{/if}
						{#if towerWeaponReloadSpeedValue !== 'Very Slow'}
							<p>
								<InlineTooltip
									tooltip={'Stat'}
									text={`${towerWeaponReloadSpeedValue} Reload`}
									iconSize={'clamp(1rem, 2vw, 2rem)'}
									icon={getItemIcon('Shot')}
								/>
							</p>
						{/if}
						{#if towerWeaponRecoilValue !== 'Max'}
							<p>
								<InlineTooltip
									tooltip={'Stat'}
									text={`${towerWeaponRecoilValue} Recoil`}
									iconSize={'clamp(1rem, 2vw, 2rem)'}
									icon={getItemIcon('Shot')}
								/>
							</p>
						{/if}
						{#if towerWeaponBowCharge1Level !== '1'}
							<p>
								<InlineTooltip
									tooltip={'Stat'}
									text={`Charge 1 LV${towerWeaponBowCharge1Level !== '4' ? towerWeaponBowCharge1Level : ' MAX'}`}
									iconSize={'clamp(1rem, 2vw, 2rem)'}
									icon={getWeaponIcon('Bow')}
								/>
							</p>
						{/if}
						{#if towerWeaponBowCharge2Level !== '1'}
							<p>
								<InlineTooltip
									tooltip={'Stat'}
									text={`Charge 2 LV${towerWeaponBowCharge2Level !== '4' ? towerWeaponBowCharge2Level : ' MAX'}`}
									iconSize={'clamp(1rem, 2vw, 2rem)'}
									icon={getWeaponIcon('Bow')}
								/>
							</p>
						{/if}
						{#if towerWeaponBowCharge3Level !== '1'}
							<p>
								<InlineTooltip
									tooltip={'Stat'}
									text={`Charge 3 LV${towerWeaponBowCharge3Level !== '4' ? towerWeaponBowCharge3Level : ' MAX'}`}
									iconSize={'clamp(1rem, 2vw, 2rem)'}
									icon={getWeaponIcon('Bow')}
								/>
							</p>
						{/if}
						{#if towerWeaponBowCharge4Level !== '1'}
							<p>
								<InlineTooltip
									tooltip={'Stat'}
									text={`Charge 4 LV${towerWeaponBowCharge4Level !== '4' ? towerWeaponBowCharge4Level : ' MAX'}`}
									iconSize={'clamp(1rem, 2vw, 2rem)'}
									icon={getWeaponIcon('Bow')}
								/>
							</p>
						{/if}
					</div>
					<div class="tower-weapon-name">
						{#key towerWeaponSeriesColor}
							<svelte:component
								this={WeaponTypes.find(
									(e) => e.name === towerWeaponSelectedWeaponType,
								)?.icon}
								{...{ color: towerWeaponSeriesColor, size: '64px' }}
							/>

							<strong>{towerWeaponSelectedWeaponOption}</strong>
						{/key}
					</div>
				</div>
			</div>
		</div>

		<div class="page-turn">
			<PageTurn pageUrlPathName={$page.url.pathname} />
		</div>
	</div>
</HunterNotesPage>

<style lang="scss">
	.page-turn {
		margin-top: 4rem;
	}

	.container-buttons {
		display: flex;
		flex-direction: row;
		gap: 1rem;
		align-items: center;
		flex-wrap: wrap;
		margin-bottom: 1rem;
		margin-top: 2rem;
	}

	.tower-weapon-properties {
		margin-top: 1rem;
		display: flex;
		justify-content: center;
		gap: 1rem;
		flex-direction: column;
	}

	.tower-weapon-property {
		text-align: center;
		align-items: end;
		display: flex;
		flex-wrap: wrap;
		gap: 1rem;
		flex-direction: row;
	}

	.flex-centered {
		display: flex;
		justify-content: center;
		align-items: center;
	}

	.padded {
		padding: 0.5rem;
	}

	.sharpness-bar-container {
		display: inline-flex;
		margin: 1rem;
	}

	.tower-weapon-slots-container {
		background-color: #000;
		border: 2px solid #000;
		border-radius: 4px;
		padding: 1rem;
		width: 8rem;
		display: flex;
		justify-content: center;
	}

	.flex-column {
		display: flex;
		flex-direction: column;
		gap: 1rem;
	}

	.tower-weapon-stats {
		display: flex;
		flex-direction: column;
		gap: 1rem;
		margin: 2rem;
		border: 2px solid (--ctp-surface0);
		background: var(--ctp-mantle);
		padding: 1rem;
		border-radius: 4px;
	}

	.tower-weapon-gems {
		display: flex;
		gap: 1rem;
		font-size: clamp(1rem, 2vw, 2rem);
		justify-content: center;
		text-align: center;
		flex-wrap: wrap;
	}

	.tower-weapon-summary {
		width: 100%;
		display: flex;
		justify-content: center;
		align-items: center;
		gap: 1rem;
		font-size: clamp(1rem, 2vw, 2rem);
		text-align: center;
		vertical-align: bottom;
		flex-wrap: wrap;
	}

	.tower-weapon-name {
		width: 100%;
		display: flex;
		flex-wrap: wrap;
		justify-content: center;
		align-items: center;
		gap: 1rem;
		font-size: 32px;
	}

	.tower-weapon-slider-container {
		display: flex;
		flex-wrap: wrap;
		flex-direction: row;
		align-items: end;
		gap: 1rem;
	}

	.tower-weapon-slider-button {
		color: var(--ctp-text);
		padding: 1rem;
		display: flex;
		justify-content: center;
		align-items: center;
		font-weight: bold;
		font-size: 24px;
		background-color: var(--ctp-surface0);
		border: 2px solid var(--ctp-yellow);
		outline: 2px outset var(--ctp-surface0);
		width: 1ch;
		height: 1ch;
	}

	.tower-weapon-slider-button:active {
		outline: 2px inset var(--ctp-surface0);
	}

	.tower-weapon-simulator-container {
		display: flex;
		justify-content: center;
		gap: 1rem;
		flex-wrap: wrap;
	}
</style>
