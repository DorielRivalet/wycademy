<script lang="ts">
	import PageTurn from '$lib/client/components/PageTurn.svelte';
	import SectionHeadingTopLevel from '$lib/client/components/SectionHeadingTopLevel.svelte';
	import TableOfContentsPage from '$lib/client/components/TableOfContentsPage.svelte';
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
	import type {
		FrontierBowgunRecoil,
		FrontierBowgunReloadSpeed,
		FrontierTowerWeapon,
		FrontierTowerWeaponSeries,
	} from '$lib/client/modules/frontier/types';
	import {
		getTowerWeaponIconColor,
		getTowerWeaponSeriesInfo,
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
	import { weaponTypeInfo } from '$lib/client/modules/frontier/weapons';
	import Link from 'carbon-components-svelte/src/Link/Link.svelte';
	import Head from '$lib/client/components/Head.svelte';
	import {
		authorName,
		authorUrl,
		datePublished,
		projectName,
		website,
	} from '$lib/constants';
	import CodeSnippet from 'carbon-components-svelte/src/CodeSnippet/CodeSnippet.svelte';
	import TowerWeaponStats from '$lib/client/components/frontier/TowerWeaponStats.svelte';
	import { findClosestIndex } from '$lib/client/modules/math';
	import SectionHeading from '$lib/client/components/SectionHeading.svelte';
	import OrderedList from 'carbon-components-svelte/src/OrderedList/OrderedList.svelte';
	import CiteNote from '$lib/client/components/CiteNote.svelte';

	function onSelectTowerWeaponOption() {
		towerWeaponGunlanceShellLevel = '0';
		towerWeaponGunlanceShellLevelCost = getTowerWeaponGunlanceShellLevelCost();

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
		towerWeaponSelectedWeaponOption = towerWeaponsFromType[0].id;

		towerWeaponGunlanceShellLevel = '0';
		towerWeaponGunlanceShellLevelCost = getTowerWeaponGunlanceShellLevelCost();

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
		disabled: boolean,
	) {
		if (disabled) return;

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
		updateSliderDisabledState();
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
		updateSliderDisabledState();
	}

	function getTowerWeaponSelected(option: string, weaponType: string) {
		return (
			towerWeapons.find((e) => e.name === option && e.type === weaponType) ??
			towerWeapons[0]
		);
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

	let towerWeaponSelectedWeaponType = $state(
		$page.url.searchParams.get('wt') ?? towerWeapons[0].type,
	);
	let towerWeaponSelectedWeaponOption = $state(
		$page.url.searchParams.get('w') ?? towerWeapons[0].name,
	);
	let towerWeaponAttackValue = $state(
		Number($page.url.searchParams.get('ak') ?? towerWeapons[0].attack[0][0]),
	);
	let towerWeaponElementValue = $state(
		Number($page.url.searchParams.get('e') ?? 0),
	);
	let towerWeaponParalysisValue = $state(
		Number($page.url.searchParams.get('ps') ?? 0),
	);
	let towerWeaponPoisonValue = $state(
		Number($page.url.searchParams.get('pn') ?? 0),
	);
	let towerWeaponSleepValue = $state(
		Number($page.url.searchParams.get('sp') ?? 0),
	);
	let towerWeaponAffinityValue = $state(
		Number($page.url.searchParams.get('ay') ?? towerWeapons[0].affinity[0][0]),
	);
	let towerWeaponSharpnessLevel = $state(
		Number($page.url.searchParams.get('ss') ?? 0),
	);
	let towerWeaponGunlanceShellLevel = $state(
		$page.url.searchParams.get('g') ?? '0',
	);

	let towerWeaponReloadSpeedValue: FrontierBowgunReloadSpeed = $state(
		$page.url.searchParams.get('rs') ?? 'Very Slow',
	);
	let towerWeaponRecoilValue: FrontierBowgunRecoil = $state(
		$page.url.searchParams.get('rl') ?? 'Max',
	);
	let towerWeaponBowCharge1Level = $state(
		$page.url.searchParams.get('b1') ?? '1',
	);
	let towerWeaponBowCharge2Level = $state(
		$page.url.searchParams.get('b2') ?? '1',
	);
	let towerWeaponBowCharge3Level = $state(
		$page.url.searchParams.get('b3') ?? '1',
	);
	let towerWeaponBowCharge4Level = $state(
		$page.url.searchParams.get('b4') ?? '1',
	);

	let towerWeaponSelected = $derived(
		getTowerWeaponSelected(
			towerWeaponSelectedWeaponOption,
			towerWeaponSelectedWeaponType,
		),
	);

	let towerWeaponsFromType = $derived(
		getTowerWeaponsByType(towerWeaponSelectedWeaponType),
	);

	let towerWeaponSelectedSeriesInfo = $derived(
		getTowerWeaponSeriesInfo(towerWeaponSelected.series),
	);

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

	let towerWeaponReloadSpeedIndex = $derived(
		towerWeaponReloadSpeedOptions.findIndex(
			(e) => e.id === towerWeaponReloadSpeedValue,
		),
	);

	let towerWeaponRecoilIndex = $derived(
		towerWeaponRecoilOptions.findIndex((e) => e.id === towerWeaponRecoilValue),
	);

	let towerWeaponSharpnessLevels = $derived(
		getTowerWeaponSharpnessLevels(towerWeaponSelected.series),
	);

	let towerWeaponAttackIndex = $derived(
		findClosestIndex(towerWeaponSelected.attack, towerWeaponAttackValue),
	);

	let towerWeaponElementIndex = $derived(
		findClosestIndex(towerWeaponSelected.element, towerWeaponElementValue),
	);

	let towerWeaponParalysisIndex = $derived(
		findClosestIndex(towerWeaponSelected.paralysis, towerWeaponParalysisValue),
	);

	let towerWeaponPoisonIndex = $derived(
		findClosestIndex(towerWeaponSelected.poison, towerWeaponPoisonValue),
	);

	let towerWeaponSleepIndex = $derived(
		findClosestIndex(towerWeaponSelected.sleep, towerWeaponSleepValue),
	);

	let towerWeaponAffinityIndex = $derived(
		findClosestIndex(towerWeaponSelected.affinity, towerWeaponAffinityValue),
	);

	let towerWeaponSharpnessIndex = $derived(
		towerWeaponSharpnessLevels.findIndex(
			(e) => e === towerWeaponSharpnessLevel,
		) ?? 0,
	);

	let towerWeaponGunlanceShellLevelCost = $state(
		getTowerWeaponGunlanceShellLevelCost(),
	);
	let towerWeaponReloadSpeedCost = $state(getTowerWeaponReloadSpeedCost());
	let towerWeaponRecoilCost = $state(getTowerWeaponRecoilCost());
	let towerWeaponBowCharge1Cost = $state(getTowerWeaponBowChargeCost(1));
	let towerWeaponBowCharge2Cost = $state(getTowerWeaponBowChargeCost(2));
	let towerWeaponBowCharge3Cost = $state(getTowerWeaponBowChargeCost(3));
	let towerWeaponBowCharge4Cost = $state(getTowerWeaponBowChargeCost(4));

	let towerWeaponGunlanceShellOptions = $derived(
		getTowerWeaponGunlaceShellOptions(towerWeaponSelected),
	);

	const towerWeaponBowChargeOptions = [
		{ id: '1', text: 'LV1' },
		{ id: '2', text: 'LV2' },
		{ id: '3', text: 'LV3' },
		{ id: '4', text: 'LV4' },
	];

	let towerWeaponSlots = $derived(
		getTowerWeaponSlots(towerWeaponSelectedSeriesInfo),
	);
	let towerWeaponSigilsUsed = 0;
	let towerWeaponElementDisabled = $state(false);
	let towerWeaponAffinityDisabled = $state(false);
	let towerWeaponSleepDisabled = $state(false);
	let towerWeaponPoisonDisabled = $state(false);
	let towerWeaponParalysisDisabled = $state(false);

	let towerWeaponSharpnessBarValues = $derived(
		towerWeaponSeries.find((e) => e.series === towerWeaponSelected.series)
			?.sharpnessLevels[towerWeaponSharpnessIndex][0] ??
			towerWeaponSeries[0].sharpnessLevels[0][0],
	);

	let towerWeaponImage = $derived(
		getTowerWeaponImageSource(towerWeaponSelectedWeaponOption),
	);

	let towerWeaponTotalGems = $derived(
		getTowerWeaponTotalGems(
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
			towerWeaponSelectedSeriesInfo.sharpnessLevels[
				towerWeaponSharpnessIndex
			][2],
			parseInt(towerWeaponGunlanceShellLevel),
			towerWeaponReloadSpeedIndex,
			towerWeaponRecoilIndex,
			parseInt(towerWeaponBowCharge1Level) - 1,
			parseInt(towerWeaponBowCharge2Level) - 1,
			parseInt(towerWeaponBowCharge3Level) - 1,
			parseInt(towerWeaponBowCharge4Level) - 1,
		),
	);

	let towerWeaponTotalCost = $derived(
		getTowerWeaponTotalCost(
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
			towerWeaponSelectedSeriesInfo.sharpnessLevels[
				towerWeaponSharpnessIndex
			][1],
			towerWeaponGunlanceShellLevelCost,
			towerWeaponReloadSpeedCost,
			towerWeaponRecoilCost,
			towerWeaponBowCharge1Cost,
			towerWeaponBowCharge2Cost,
			towerWeaponBowCharge3Cost,
			towerWeaponBowCharge4Cost,
		),
	);

	let towerWeaponExceedsMaxCost = $derived(
		towerWeaponTotalCost > towerWeaponSelectedSeriesInfo.maxTotalCost,
	);

	let allParams = $derived(
		new URLSearchParams({
			wt: towerWeaponSelectedWeaponType.toString(),
			w: towerWeaponSelectedWeaponOption.toString(),
			ak: towerWeaponAttackValue.toString(),
			e: towerWeaponElementValue.toString(),
			ay: towerWeaponAffinityValue.toString(),
			pn: towerWeaponPoisonValue.toString(),
			ps: towerWeaponParalysisValue.toString(),
			sp: towerWeaponSleepValue.toString(),
			ss: towerWeaponSharpnessLevel.toString(),
			g: towerWeaponGunlanceShellLevel.toString(),
			rs: towerWeaponReloadSpeedValue.toString(),
			rl: towerWeaponRecoilValue.toString(),
			b1: towerWeaponBowCharge1Level.toString(),
			b2: towerWeaponBowCharge2Level.toString(),
			b3: towerWeaponBowCharge3Level.toString(),
			b4: towerWeaponBowCharge4Level.toString(),
			tc: towerWeaponTotalCost.toString(),
			tgc: towerWeaponTotalGems.courage.toString(),
			tgg: towerWeaponTotalGems.glittering.toString(),
			tgd: towerWeaponTotalGems.divine.toString(),
			ssi: towerWeaponSharpnessIndex.toString(),
		}),
	);

	let shareUrl = $derived(
		`${$page.url.origin}${$page.url.pathname}?${allParams}`,
	);

	// $effect(() => {
	// 	// Update the URL without reloading
	// 	replaceState(shareUrl, {});
	// });

	// TODO test if i need to remove Head from layout
	// if so, add blacklist of routes

	// TODO add tower decos
</script>

<Head
	title={'Tower Weapon Simulator'}
	description={`A Tower weapon simulator (${$page.url.searchParams.get('wt') ?? towerWeapons[0].type}, etc.).`}
	image={`${$page.url.origin}/api/og/tower-weapon?${allParams}`}
	url={$page.url.toString()}
	{website}
	{authorName}
	{datePublished}
	{authorUrl}
	contentType="SoftwareApplication"
	name={projectName}
	siteName={projectName}
/>

<TableOfContentsPage displayTOC={false}>
	{@const SvelteComponent_1 = weaponTypeInfo.find(
		(e) => e.name === towerWeaponSelectedWeaponType,
	)?.icon}
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

			<div class="spaced-paragraph">
				If you are looking for an explanation on tower weapons, see our <Link
					inline
					href="/hunter-notes/weapons/tower">Hunter's Notes page.</Link
				> This page is for checking the values of a Tower Weapon, as shown in the
				game.
			</div>

			<div class="spaced-paragraph">
				<span><strong>Share URL</strong></span><span
					><CodeSnippet code={shareUrl} /></span
				>
			</div>

			<div class="tower-weapon-simulator-preview-container">
				<div class="container-buttons">
					<Button
						kind="tertiary"
						icon={Download}
						on:click={downloadTowerWeaponImage}>Download</Button
					>
				</div>
			</div>

			<div class="tower-weapon-simulator-container">
				<div class="tower-weapon-simulator-weapon-container">
					<div class="flex-centered">
						<Dropdown
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
							{#snippet children({ item })}
								<div>
									<img
										alt="Theme Icon"
										src={getWeaponImage(item.id)}
										width="24"
									/>
									<strong style="vertical-align: center;">{item.text}</strong>
								</div>
							{/snippet}
						</Dropdown>
						<Dropdown
							titleText="Tower Weapon"
							type="inline"
							hideLabel
							on:select={onSelectTowerWeaponOption}
							bind:selectedId={towerWeaponSelectedWeaponOption}
							items={towerWeaponsFromType}
						>
							{#snippet children({ item })}
								{@const SvelteComponent = getWeaponIcon(
									towerWeaponSelectedWeaponType,
								)}
								<div>
									<SvelteComponent
										{...{
											color: getTowerWeaponIconColor(
												towerWeapons.find((e) => e.name === item.text)
													?.series || 'Light',
											),
											size: '24px',
										}}
									/>
									<strong style="vertical-align: center;">{item.text}</strong>
								</div>
							{/snippet}
						</Dropdown>
					</div>
					<div class="flex-centered flex-column">
						<div class="tower-weapon-image">
							<ImageDialog
								width={195}
								height={200}
								src={towerWeaponImage}
								alt="Tower Weapon"
								type="file"
							/>
						</div>

						<div class="tower-weapon-slots-container">
							{#each towerWeaponSlots as weaponSlot}
								<img src={weaponSlot.image} alt="Tower Weapon Slot" />
							{/each}
						</div>
					</div>

					<div id="tower-weapon-dom">
						<TowerWeaponStats
							{towerWeaponSleepValue}
							{towerWeaponTotalCost}
							{towerWeaponTotalGems}
							{towerWeaponExceedsMaxCost}
							{towerWeaponAffinityIndex}
							{towerWeaponAffinityValue}
							{towerWeaponAttackIndex}
							{towerWeaponAttackValue}
							{towerWeaponBowCharge1Level}
							{towerWeaponBowCharge2Level}
							{towerWeaponBowCharge3Level}
							{towerWeaponBowCharge4Level}
							{towerWeaponElementIndex}
							{towerWeaponElementValue}
							{towerWeaponGunlanceShellLevel}
							{towerWeaponParalysisIndex}
							{towerWeaponParalysisValue}
							{towerWeaponPoisonIndex}
							{towerWeaponPoisonValue}
							{towerWeaponRecoilValue}
							{towerWeaponReloadSpeedValue}
							{towerWeaponSharpnessIndex}
							{towerWeaponSharpnessLevel}
							{towerWeaponSleepIndex}
							towerWeaponMaxSharpnessLevel={towerWeaponSelectedSeriesInfo
								.sharpnessLevels.length - 1}
							towerWeaponMaxAttackIndex={towerWeaponSelected.attack.length - 1}
							towerWeaponMaxElementIndex={(towerWeaponSelected?.element
								?.length || 1) - 1}
							towerWeaponMaxAffinityIndex={(towerWeaponSelected.affinity
								.length || 1) - 1}
							towerWeaponMaxPoisonIndex={(towerWeaponSelected?.poison?.length ||
								1) - 1}
							towerWeaponMaxParalysisIndex={(towerWeaponSelected?.paralysis
								?.length || 1) - 1}
							towerWeaponMaxSleepIndex={(towerWeaponSelected?.sleep?.length ||
								1) - 1}
							towerWeaponName={towerWeaponSelected.name}
							towerWeaponType={towerWeaponSelected.type}
						/>
					</div>
				</div>

				<div class="tower-weapon-properties">
					<div class="tower-weapon-property">
						<div class="tower-weapon-slider-container">
							<button
								onclick={() =>
									handleSliderButton(
										towerWeaponSelected.attack,
										'attack',
										Math.max(towerWeaponAttackIndex - 1, 0),
										false,
									)}
								class="tower-weapon-slider-button">-</button
							>
							<Slider
								min={towerWeaponSelected.attack[0][0]}
								max={towerWeaponSelected.attack.at(-1)[0]}
								bind:value={towerWeaponAttackValue}
								on:change={(e) =>
									handleSliderChange(towerWeaponSelected.attack, 'attack')}
							>
								{#snippet labelText()}
									<span>
										<div>
											Attack Upgrade #{towerWeaponAttackIndex} Cost: {towerWeaponSelected
												.attack[towerWeaponAttackIndex][1]}
										</div>
									</span>
								{/snippet}
							</Slider>
							<button
								onclick={() =>
									handleSliderButton(
										towerWeaponSelected.attack,
										'attack',
										Math.min(
											towerWeaponAttackIndex + 1,
											towerWeaponSelected.attack.length - 1,
										),
										false,
									)}
								class="tower-weapon-slider-button">+</button
							>
						</div>
					</div>
					{#if towerWeaponSelectedWeaponType !== 'Light Bowgun' && towerWeaponSelectedWeaponType !== 'Heavy Bowgun'}
						<div class="tower-weapon-property">
							<div class="tower-weapon-slider-container">
								<button
									onclick={() =>
										handleSliderButton(
											towerWeaponSelected.element,
											'element',
											Math.max(towerWeaponElementIndex - 1, 0),
											towerWeaponElementDisabled,
										)}
									class="tower-weapon-slider-button">-</button
								>
								<Slider
									min={towerWeaponSelected.element[0][0]}
									max={towerWeaponSelected.element.at(-1)[0]}
									bind:value={towerWeaponElementValue}
									disabled={towerWeaponElementDisabled}
									on:change={(e) =>
										handleSliderChange(towerWeaponSelected.element, 'element')}
								>
									{#snippet labelText()}
										<span>
											<div>
												Element Upgrade #{towerWeaponElementIndex} Cost: {towerWeaponSelected
													.element[towerWeaponElementIndex][1]}
											</div>
										</span>
									{/snippet}
								</Slider>
								<button
									onclick={() =>
										handleSliderButton(
											towerWeaponSelected.element,
											'element',
											Math.min(
												towerWeaponElementIndex + 1,
												towerWeaponSelected.element.length - 1,
											),
											towerWeaponElementDisabled,
										)}
									class="tower-weapon-slider-button">+</button
								>
							</div>
						</div>
					{/if}
					<div class="tower-weapon-property">
						<div class="tower-weapon-slider-container">
							<button
								onclick={() =>
									handleSliderButton(
										towerWeaponSelected.affinity,
										'affinity',
										Math.max(towerWeaponAffinityIndex - 1, 0),
										towerWeaponAffinityDisabled,
									)}
								class="tower-weapon-slider-button">-</button
							>
							<Slider
								min={towerWeaponSelected.affinity[0][0]}
								max={towerWeaponSelected.affinity.at(-1)[0]}
								bind:value={towerWeaponAffinityValue}
								disabled={towerWeaponAffinityDisabled}
								on:change={(e) =>
									handleSliderChange(towerWeaponSelected.affinity, 'affinity')}
							>
								{#snippet labelText()}
									<span>
										<div>
											Affinity Upgrade #{towerWeaponAffinityIndex} Cost: {towerWeaponSelected
												.affinity[towerWeaponAffinityIndex][1]}
										</div>
									</span>
								{/snippet}
							</Slider>
							<button
								onclick={() =>
									handleSliderButton(
										towerWeaponSelected.affinity,
										'affinity',
										Math.min(
											towerWeaponAffinityIndex + 1,
											towerWeaponSelected.affinity.length - 1,
										),
										towerWeaponAffinityDisabled,
									)}
								class="tower-weapon-slider-button">+</button
							>
						</div>
					</div>
					{#if towerWeaponSelectedWeaponType !== 'Bow'}
						<div class="tower-weapon-property">
							<div class="tower-weapon-slider-container">
								<button
									onclick={() =>
										handleSliderButton(
											towerWeaponSelected.poison,
											'poison',
											Math.max(towerWeaponPoisonIndex - 1, 0),
											towerWeaponPoisonDisabled,
										)}
									class="tower-weapon-slider-button">-</button
								>
								<Slider
									disabled={towerWeaponPoisonDisabled}
									min={towerWeaponSelected.poison[0][0]}
									max={towerWeaponSelected.poison.at(-1)[0]}
									bind:value={towerWeaponPoisonValue}
									on:change={(e) =>
										handleSliderChange(towerWeaponSelected.poison, 'poison')}
								>
									{#snippet labelText()}
										<span>
											<div>
												Poison Upgrade #{towerWeaponPoisonIndex} Cost: {towerWeaponSelected
													.poison[towerWeaponPoisonIndex][1]}
											</div>
										</span>
									{/snippet}
								</Slider>
								<button
									onclick={() =>
										handleSliderButton(
											towerWeaponSelected.poison,
											'poison',
											Math.min(
												towerWeaponPoisonIndex + 1,
												towerWeaponSelected.poison.length - 1,
											),
											towerWeaponPoisonDisabled,
										)}
									class="tower-weapon-slider-button">+</button
								>
							</div>
						</div>
						<div class="tower-weapon-property">
							<div class="tower-weapon-slider-container">
								<button
									onclick={() =>
										handleSliderButton(
											towerWeaponSelected.paralysis,
											'paralysis',
											Math.max(towerWeaponParalysisIndex - 1, 0),
											towerWeaponParalysisDisabled,
										)}
									class="tower-weapon-slider-button">-</button
								>
								<Slider
									disabled={towerWeaponParalysisDisabled}
									min={towerWeaponSelected.paralysis[0][0]}
									max={towerWeaponSelected.paralysis.at(-1)[0]}
									bind:value={towerWeaponParalysisValue}
									on:change={(e) =>
										handleSliderChange(
											towerWeaponSelected.paralysis,
											'paralysis',
										)}
								>
									{#snippet labelText()}
										<span>
											<div>
												Paralysis Upgrade #{towerWeaponParalysisIndex} Cost: {towerWeaponSelected
													.paralysis[towerWeaponParalysisIndex][1]}
											</div>
										</span>
									{/snippet}
								</Slider>
								<button
									onclick={() =>
										handleSliderButton(
											towerWeaponSelected.paralysis,
											'paralysis',
											Math.min(
												towerWeaponParalysisIndex + 1,
												towerWeaponSelected.paralysis.length - 1,
											),
											towerWeaponParalysisDisabled,
										)}
									class="tower-weapon-slider-button">+</button
								>
							</div>
						</div>
						<div class="tower-weapon-property">
							<div class="tower-weapon-slider-container">
								<button
									onclick={() =>
										handleSliderButton(
											towerWeaponSelected.sleep,
											'sleep',
											Math.max(towerWeaponSleepIndex - 1, 0),
											towerWeaponSleepDisabled,
										)}
									class="tower-weapon-slider-button">-</button
								>
								<Slider
									disabled={towerWeaponSleepDisabled}
									min={towerWeaponSelected.sleep[0][0]}
									max={towerWeaponSelected.sleep.at(-1)[0]}
									bind:value={towerWeaponSleepValue}
									on:change={(e) =>
										handleSliderChange(towerWeaponSelected.sleep, 'sleep')}
								>
									{#snippet labelText()}
										<span>
											<div>
												Sleep Upgrade #{towerWeaponSleepIndex} Cost: {towerWeaponSelected
													.sleep[towerWeaponSleepIndex][1]}
											</div>
										</span>
									{/snippet}
								</Slider>
								<button
									onclick={() =>
										handleSliderButton(
											towerWeaponSelected.sleep,
											'sleep',
											Math.min(
												towerWeaponSleepIndex + 1,
												towerWeaponSelected.sleep.length - 1,
											),
											towerWeaponSleepDisabled,
										)}
									class="tower-weapon-slider-button">+</button
								>
							</div>
						</div>
					{/if}

					{#if towerWeaponSelectedWeaponType !== 'Bow' && towerWeaponSelectedWeaponType !== 'Light Bowgun' && towerWeaponSelectedWeaponType !== 'Heavy Bowgun'}
						<div class="tower-weapon-sharpness">
							<RadioButtonGroup
								name="sharpness"
								bind:selected={towerWeaponSharpnessLevel}
							>
								{#snippet legendText()}
									<span>
										<div>
											Sharpness Upgrade #{towerWeaponSharpnessIndex} Cost: {towerWeaponSelectedSeriesInfo
												.sharpnessLevels[towerWeaponSharpnessIndex][1]}
										</div>
									</span>
								{/snippet}

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
							<div>
								Upgrade #{towerWeaponGunlanceShellLevel} Cost: {towerWeaponGunlanceShellLevelCost}
							</div>
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
							<div>
								Upgrade #{towerWeaponReloadSpeedIndex} Cost: {towerWeaponReloadSpeedCost}
							</div>
						</div>
						<div class="tower-weapon-property">
							<Dropdown
								type="default"
								titleText="Recoil"
								on:select={onSelectTowerWeaponRecoil}
								bind:selectedId={towerWeaponRecoilValue}
								items={towerWeaponRecoilOptions}
							/>
							<div>
								Upgrade #{towerWeaponRecoilIndex} Cost: {towerWeaponRecoilCost}
							</div>
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
							<div>
								Upgrade #{parseInt(towerWeaponBowCharge1Level) - 1} Cost: {towerWeaponBowCharge1Cost}
							</div>
						</div>
						<div class="tower-weapon-property">
							<Dropdown
								type="default"
								titleText="Charge 2"
								on:select={onSelectTowerWeaponBowCharge2}
								bind:selectedId={towerWeaponBowCharge2Level}
								items={towerWeaponBowChargeOptions}
							/>
							<div>
								Upgrade #{parseInt(towerWeaponBowCharge2Level) - 1} Cost: {towerWeaponBowCharge2Cost}
							</div>
						</div>
						<div class="tower-weapon-property">
							<Dropdown
								type="default"
								titleText="Charge 3"
								on:select={onSelectTowerWeaponBowCharge3}
								bind:selectedId={towerWeaponBowCharge3Level}
								items={towerWeaponBowChargeOptions}
							/>
							<div>
								Upgrade #{parseInt(towerWeaponBowCharge3Level) - 1} Cost: {towerWeaponBowCharge3Cost}
							</div>
						</div>
						<div class="tower-weapon-property">
							<Dropdown
								type="default"
								titleText="Charge 4"
								on:select={onSelectTowerWeaponBowCharge4}
								bind:selectedId={towerWeaponBowCharge4Level}
								items={towerWeaponBowChargeOptions}
							/>
							<div>
								Upgrade #{parseInt(towerWeaponBowCharge4Level) - 1} Cost: {towerWeaponBowCharge4Cost}
							</div>
						</div>
					{/if}
				</div>
			</div>
		</div>

		<section>
			<SectionHeading level={2} title="References" />
			<div>
				<OrderedList class="spaced-list">
					<CiteNote
						href="https://web.archive.org/web/20190609044254/http://members.mhf-z.jp/contents/quest/tenrou/weapon_sim.html"
						text="https://web.archive.org/web/20190609044254/http://members.mhf-z.jp/contents/quest/tenrou/weapon_sim.html"
						unlinked={true}
					/>
				</OrderedList>
			</div>
		</section>

		<div class="page-turn">
			<PageTurn pageUrlPathName={$page.url.pathname} />
		</div>
	</div>
</TableOfContentsPage>

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
		gap: 0.5rem;
		flex-direction: column;
	}

	.tower-weapon-property {
		text-align: start;
		align-items: center;
		display: flex;
		flex-wrap: wrap;
		gap: 0.5rem;
		flex-direction: row;
	}

	.tower-weapon-sharpness {
		text-align: start;
	}

	.flex-centered {
		display: flex;
		justify-content: center;
		align-items: center;
	}

	.sharpness-bar-container {
		display: inline-flex;
		margin: 1rem 0rem;
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

	.tower-weapon-slider-container {
		display: flex;
		flex-wrap: wrap;
		flex-direction: row;
		align-items: end;
		gap: 1rem;
	}

	.tower-weapon-slider-button {
		color: var(--ctp-text);
		padding: 12px;
		display: flex;
		justify-content: center;
		align-items: center;
		font-weight: bold;
		font-size: 20px;
		background-color: var(--ctp-surface0);
		border: 2px solid var(--ctp-yellow);
		outline: 2px outset var(--ctp-surface0);
		width: 1ch;
		height: 1ch;
	}

	.tower-weapon-slider-button:active {
		outline: 2px inset var(--ctp-surface0);
	}

	@media (min-width: 320px) {
		.tower-weapon-simulator-container {
			display: flex;
			gap: 1rem;
			flex-wrap: wrap;
			width: 100%;
			margin: 0 auto;
		}
	}

	@media (min-width: 1312px) {
		.tower-weapon-simulator-container {
			width: 95%;
			display: grid;
			gap: 1rem;
			grid-template-columns: 1fr 1fr;
		}
	}

	.tower-weapon-image {
		margin-top: 0.5rem;
	}
</style>
