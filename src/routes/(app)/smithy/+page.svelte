<script lang="ts">
	import {
		AilmentIcons,
		ArmorTypes,
		ColorCodes,
		ElementIcons,
		Games,
		Habitats,
		HuntingHornWeaponNotesCombinations,
		ItemColors,
		ItemIcons,
		LocationIcons,
		MonsterIcons,
		RarityColors,
		SharpnessNames,
		StatusIcons,
		WeaponTypes,
		defaultArmorComponentValues,
		defaultItemComponentValues,
		defaultWeaponComponentValues,
	} from '$lib/client/modules/frontier/objects';
	import NumberInput from 'carbon-components-svelte/src/NumberInput/NumberInput.svelte';
	import Weapon from '$lib/client/components/frontier/Weapon.svelte';
	import Armor from '$lib/client/components/frontier/Armor.svelte';
	import TextInput from 'carbon-components-svelte/src/TextInput/TextInput.svelte';
	import Checkbox from 'carbon-components-svelte/src/Checkbox/Checkbox.svelte';
	import Restart from 'carbon-icons-svelte/lib/Restart.svelte';
	import { domToPng } from 'modern-screenshot';
	import Download from 'carbon-icons-svelte/lib/Download.svelte';
	import slugify from 'slugify';
	import {
		frontierMappers,
		getTag,
	} from '$lib/client/modules/frontier/functions';
	import { browser } from '$app/environment';
	import InlineNotification from 'carbon-components-svelte/src/Notification/InlineNotification.svelte';
	import Dropdown, {
		type DropdownItem,
	} from 'carbon-components-svelte/src/Dropdown/Dropdown.svelte';
	import Button from 'carbon-components-svelte/src/Button/Button.svelte';
	import Toggle from 'carbon-components-svelte/src/Toggle/Toggle.svelte';
	import OutboundLink from 'carbon-components-svelte/src/Link/OutboundLink.svelte';
	import Head from '$lib/client/components/Head.svelte';
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
	import SectionHeading from '$lib/client/components/SectionHeading.svelte';
	import type {
		FrontierArmor,
		FrontierArmorClass,
		FrontierArmorGRLevel,
		FrontierArmorLevel,
		FrontierArmorType,
		FrontierBowgunRecoil,
		FrontierBowgunReloadSpeed,
		FrontierEquipmentDecorations,
		FrontierEquipmentRank,
		FrontierEquipmentSkillPoints,
		FrontierGunlanceShell,
		FrontierGunlanceShellLevel,
		FrontierHuntingHornWeaponNote,
		FrontierImageType,
		FrontierItemColor,
		FrontierItemDecoration,
		FrontierItemRankType,
		FrontierItemSigil,
		FrontierItemType,
		FrontierMonsterInfo,
		FrontierRarity,
		FrontierSlot,
		FrontierSwitchAxeFPhial,
		FrontierTowerWeapon,
		FrontierTowerWeaponSeries,
		FrontierWeapon,
		IconSize,
	} from '$lib/client/modules/frontier/types';
	import Item from '$lib/client/components/frontier/Item.svelte';
	import pageThumbnail from '$lib/client/images/icon/blacksmith.png';
	import ezlion, {
		type FrontierArmorSkillName,
		type FrontierArmorSkillTree,
		type FrontierEnumerable,
		type FrontierWeaponClass,
		type FrontierWeaponName,
		type FrontierZenithSkill,
	} from 'ezlion';
	import type { HTMLImgAttributes } from 'svelte/elements';
	import Add from 'carbon-icons-svelte/lib/Add.svelte';
	import InlineTooltip from '$lib/client/components/frontier/InlineTooltip.svelte';
	import FileUploaderDropContainer from 'carbon-components-svelte/src/FileUploader/FileUploaderDropContainer.svelte';
	import { getHexStringFromCatppuccinColor } from '$lib/client/themes/catppuccin';
	import { theme } from '$lib/client/stores/theme';
	import ColorPicker from 'svelte-awesome-color-picker';
	import ThumbnailGeneratorImage from './ThumbnailGeneratorImage.svelte';
	import ThumbnailGeneratorText from './ThumbnailGeneratorText.svelte';
	import {
		towerWeaponSeries,
		towerWeaponSlotImages,
		towerWeapons,
		type FrontierTowerWeaponSeriesInfo,
		type FrontierTowerWeaponSlotInfo,
	} from '$lib/client/modules/frontier/tower-weapons';
	import Slider from 'carbon-components-svelte/src/Slider/Slider.svelte';
	import SharpnessBar from '$lib/client/components/frontier/SharpnessBar.svelte';
	import RadioButtonGroup from 'carbon-components-svelte/src/RadioButtonGroup/RadioButtonGroup.svelte';
	import RadioButton from 'carbon-components-svelte/src/RadioButton/RadioButton.svelte';
	import { onMount } from 'svelte';
	import Youtube from 'svelte-youtube-embed';
	import LogoYoutube from 'carbon-icons-svelte/lib/LogoYoutube.svelte';
	import Modal from 'carbon-components-svelte/src/Modal/Modal.svelte';
	import Save from 'carbon-icons-svelte/lib/Save.svelte';
	import ComboBox from 'carbon-components-svelte/src/ComboBox/ComboBox.svelte';
	import FileUploader from 'carbon-components-svelte/src/FileUploader/FileUploader.svelte';
	import Moveable from 'svelte-moveable';

	type dropdownItem = { id: string; text: string };
	type levelQuantity = [level1: number, level2: number, level3: number];

	// // Assuming componentState is an object containing the state of your component
	// function generateURL() {
	// 	const queryString = Object.entries(componentsState)
	// 		.map(
	// 			([key, value]) =>
	// 				`${encodeURIComponent(key)}=${encodeURIComponent(value)}`,
	// 		)
	// 		.join('&');
	// 	const updatedHref = `${$page.url.origin}${$page.url.pathname}?${queryString}`;
	// 	copyToClipboard(updatedHref);
	// }

	function shouldFilterItem(item: { text: string }, value: string) {
		if (!value) return true;
		return item.text.toLowerCase().includes(value.toLowerCase());
	}

	function resetWeaponValues() {
		// TODO idk why this doesnt work with default
		weaponSharpness = [170, 170, 170, 170, 170, 200, 250, 350];

		weaponName = defaultWeaponComponentValues.weaponName;
		weaponLevel = defaultWeaponComponentValues.weaponLevel;
		weaponRarity = defaultWeaponComponentValues.weaponRarity;
		weaponTypeId = defaultWeaponComponentValues.weaponTypeId;
		weaponRank = defaultWeaponComponentValues.weaponRank;
		weaponLength = defaultWeaponComponentValues.weaponLength;
		weaponElementBoost = defaultWeaponComponentValues.weaponElementBoost;
		weaponStatusBoost = defaultWeaponComponentValues.weaponStatusBoost;
		weaponAttackBoost = defaultWeaponComponentValues.weaponAttackBoost;
		weaponAttack = defaultWeaponComponentValues.weaponAttack;
		weaponElementValue = defaultWeaponComponentValues.weaponElementValue;
		weaponStatusValue = defaultWeaponComponentValues.weaponStatusValue;
		weaponElementType = defaultWeaponComponentValues.weaponElementType;
		weaponStatusType = defaultWeaponComponentValues.weaponStatusType;
		weaponZenithSkill = defaultWeaponComponentValues.weaponZenithSkill;
		weaponSharpnessBoost = defaultWeaponComponentValues.weaponSharpnessBoost;
		weaponDescription = defaultWeaponComponentValues.weaponDescription;
		weaponExtraIcons = defaultWeaponComponentValues.weaponExtraIcons;
		weaponType = defaultWeaponComponentValues.weaponType;
		weaponAffinity = defaultWeaponComponentValues.weaponAffinity;
		weaponSigil1Id = defaultWeaponComponentValues.weaponSigil1Id;
		weaponSigil2Id = defaultWeaponComponentValues.weaponSigil2Id;
		weaponSigil3Id = defaultWeaponComponentValues.weaponSigil3Id;
		weaponSigil4Id = defaultWeaponComponentValues.weaponSigil4Id;
		weaponSigil5Id = defaultWeaponComponentValues.weaponSigil5Id;
		weaponSigil6Id = defaultWeaponComponentValues.weaponSigil6Id;
		weaponSigil7Id = defaultWeaponComponentValues.weaponSigil7Id;
		weaponSigil8Id = defaultWeaponComponentValues.weaponSigil8Id;
		weaponSigil9Id = defaultWeaponComponentValues.weaponSigil9Id;
		weaponSigil1Value = defaultWeaponComponentValues.weaponSigil1Value;
		weaponSigil2Value = defaultWeaponComponentValues.weaponSigil2Value;
		weaponSigil3Value = defaultWeaponComponentValues.weaponSigil3Value;
		weaponSigil4Value = defaultWeaponComponentValues.weaponSigil4Value;
		weaponSigil5Value = defaultWeaponComponentValues.weaponSigil5Value;
		weaponSigil6Value = defaultWeaponComponentValues.weaponSigil6Value;
		weaponSigil7Value = defaultWeaponComponentValues.weaponSigil7Value;
		weaponSigil8Value = defaultWeaponComponentValues.weaponSigil8Value;
		weaponSigil9Value = defaultWeaponComponentValues.weaponSigil9Value;
		weaponAutomaticSkill = defaultWeaponComponentValues.weaponAutomaticSkill;
		huntingHornNote1 = defaultWeaponComponentValues.huntingHornNote1;
		huntingHornNote2 = defaultWeaponComponentValues.huntingHornNote2;
		huntingHornNote3 = defaultWeaponComponentValues.huntingHornNote3;
		huntingHornNotes = `${huntingHornNote1} ${huntingHornNote2} ${huntingHornNote3}`;
		safPhial = defaultWeaponComponentValues.safPhial;
		gunlanceShellType = defaultWeaponComponentValues.gunlanceShellType;
		gunlanceShellLevel = defaultWeaponComponentValues.gunlanceShellLevel;
		bowArc = defaultWeaponComponentValues.bowArc;
		bowChargeType1 = defaultWeaponComponentValues.bowChargeType1;
		bowChargeLevel1 = defaultWeaponComponentValues.bowChargeLevel1;
		bowChargeType2 = defaultWeaponComponentValues.bowChargeType2;
		bowChargeLevel2 = defaultWeaponComponentValues.bowChargeLevel2;
		bowChargeType3 = defaultWeaponComponentValues.bowChargeType3;
		bowChargeLevel3 = defaultWeaponComponentValues.bowChargeLevel3;
		bowPoisonCoatingAvailable =
			defaultWeaponComponentValues.bowPoisonCoatingAvailable;
		bowParalysisCoatingAvailable =
			defaultWeaponComponentValues.bowParalysisCoatingAvailable;
		bowSleepCoatingAvailable =
			defaultWeaponComponentValues.bowSleepCoatingAvailable;
		bowImpactCoatingAvailable =
			defaultWeaponComponentValues.bowImpactCoatingAvailable;
		bowPowerCoatingAvailable =
			defaultWeaponComponentValues.bowPowerCoatingAvailable;
		bowgunReload = defaultWeaponComponentValues.bowgunReload;
		bowgunRecoil = defaultWeaponComponentValues.bowgunRecoil;
		bowgunScope = defaultWeaponComponentValues.bowgunScope;
		lightBowgunUpgrade = defaultWeaponComponentValues.lightBowgunUpgrade;
		heavyBowgunUpgrade = defaultWeaponComponentValues.heavyBowgunUpgrade;
		bowgunAttackLevel = defaultWeaponComponentValues.bowgunAttackLevel;
		bowgunNormalAmmo = [9, 9, 12];
		bowgunPierceAmmo = [6, 6, 6];
		bowgunPelletAmmo = [6, 6, 6];
		bowgunCragAmmo = [2, 2, 2];
		bowgunClusterAmmo = [0, 0, 0];
		bowgunRecoveryAmmo = [0, 0, 0];
		bowgunPoisonAmmo = [0, 0, 0];
		bowgunParalysisAmmo = [0, 0, 0];
		bowgunSleepAmmo = [0, 0, 0];
		bowgunFlamingAmmo = [6, 0, 0];
		bowgunWaterAmmo = [0, 0, 0];
		bowgunThunderAmmo = [0, 0, 0];
		bowgunFreezeAmmo = [0, 0, 0];
		bowgunDragonAmmo = [0, 0, 0];
		bowgunTranqAmmo = [2, 0, 0];
		bowgunPaintAmmo = [2, 0, 0];
		bowgunDemonAmmo = [1, 0, 0];
		bowgunArmorAmmo = [1, 0, 0];
	}

	function resetArmorValues() {
		armorName = defaultArmorComponentValues.armorName;
		armorLevel = defaultArmorComponentValues.armorLevel;
		armorGRLevel = defaultArmorComponentValues.armorGRLevel;
		armorDefense = defaultArmorComponentValues.armorDefense;
		armorFireResistance = defaultArmorComponentValues.armorFireResistance;
		armorWaterResistance = defaultArmorComponentValues.armorWaterResistance;
		armorThunderResistance = defaultArmorComponentValues.armorThunderResistance;
		armorIceResistance = defaultArmorComponentValues.armorIceResistance;
		armorDragonResistance = defaultArmorComponentValues.armorDragonResistance;
		armorTransmog = defaultArmorComponentValues.armorTransmog;
		armorClass = defaultArmorComponentValues.armorClass;
		armorID = defaultArmorComponentValues.armorID;
		armorRank = defaultArmorComponentValues.armorRank;
		armorZenithSkill = defaultArmorComponentValues.armorZenithSkill;
		armorDescription = defaultArmorComponentValues.armorDescription;
		armorRarity = defaultArmorComponentValues.armorRarity;
		armorExtraIcons = defaultArmorComponentValues.armorExtraIcons;
		armorSkillTreeNames = [
			'Blazing Grace',
			'Strong Attack',
			'Determination',
			'Absolute Defense',
			'Three Worlds Protection',
		];
		armorSkillPoints = [10, 20, -30, 40, 50];
		armorType = defaultArmorComponentValues.armorType;
		armorAutomaticSkill = defaultArmorComponentValues.armorAutomaticSkill;
		armorDecorations = {
			slot1: {
				name: 'Zindol BM GX1',
				skill1: {
					name: 'Blazing Grace',
					points: 5,
				},
				skill2: {
					name: 'Blazing Grace',
					points: 5,
				},
				skill3: {
					name: 'Blazing Grace',
					points: 5,
				},
				skill4: {
					name: 'Blazing Grace',
					points: 5,
				},
			},
			slot2: {
				name: 'Zindol BM GX1',
				skill1: {
					name: 'Blazing Grace',
					points: 5,
				},
				skill2: {
					name: 'Blazing Grace',
					points: 5,
				},
				skill3: {
					name: 'Blazing Grace',
					points: 5,
				},
				skill4: {
					name: 'Blazing Grace',
					points: 5,
				},
			},
			slot3: {
				name: 'Zindol BM GX1',
				skill1: {
					name: 'Blazing Grace',
					points: 5,
				},
				skill2: {
					name: 'Blazing Grace',
					points: 5,
				},
				skill3: {
					name: 'Blazing Grace',
					points: 5,
				},
				skill4: {
					name: 'Blazing Grace',
					points: 5,
				},
			},
		};
	}

	function resetItemsValues() {
		itemName = defaultItemComponentValues.itemName;
		itemDescription = defaultItemComponentValues.itemDescription;
		itemRarity = defaultItemComponentValues.itemRarity;
		itemRank = defaultItemComponentValues.itemRank;
		itemIconName = defaultItemComponentValues.itemIconName;
		itemColorName = defaultItemComponentValues.itemColorName;
		itemType = defaultItemComponentValues.itemType;
		itemZenithSkill = defaultItemComponentValues.itemZenithSkill;
		itemCuffSkill1 = defaultItemComponentValues.itemCuffSkill1;
		itemCuffSkill1Points = defaultItemComponentValues.itemCuffSkill1Points;
		itemCuffSkill2 = defaultItemComponentValues.itemCuffSkill2;
		itemCuffSkill2Points = defaultItemComponentValues.itemCuffSkill2Points;
		itemTowerSkill = defaultItemComponentValues.itemTowerSkill;
		itemArmorClass = defaultItemComponentValues.itemArmorClass;
		itemWeaponClass = defaultItemComponentValues.itemWeaponClass;
		itemSlotsRequired = defaultItemComponentValues.itemSlotsRequired;

		itemSigil = {
			slot1: {
				name: 'Attack Slayer',
				value: 8,
			},
			slot2: {
				name: 'Elemental Slayer',
				value: -8,
			},
			slot3: {
				name: 'Zenith Healing',
				value: 4,
			},
			slot4: {
				name: 'Affinity Slayer',
				value: -43,
			},
		};

		itemDecoration = {
			slot1: {
				name: 'Determination',
				value: 7,
			},
			slot2: {
				name: 'Attack',
				value: -58,
			},
			slot3: {
				name: 'Defense',
				value: 9,
			},
			slot4: {
				name: 'Sharpness',
				value: 2,
			},
		};
	}

	function getZenithSkills() {
		let array: dropdownItem[] = [{ id: '', text: 'None' }];
		Object.values(ezlion.SkillZenith).forEach((element) => {
			if (element !== '' && element !== 'None') {
				array = [...array, { id: element, text: element }];
			}
		});
		return array;
	}

	function getSigilSkills() {
		let array: dropdownItem[] = [{ id: '', text: 'None' }];
		Object.values(ezlion.SkillSigil).forEach((element) => {
			if (element !== '' && element !== 'None') {
				array = [...array, { id: element, text: element }];
			}
		});

		return array;
	}

	function getArmorSkills() {
		let array: dropdownItem[] = [{ id: '', text: 'None' }];
		Object.values(ezlion.SkillArmor).forEach((element) => {
			if (element !== '' && element !== 'None') {
				array = [...array, { id: element, text: element }];
			}
		});

		return array;
	}

	function getArmorSkillTree() {
		let array: dropdownItem[] = [{ id: '', text: 'None' }];
		Object.values(ezlion.SkillTree).forEach((element) => {
			if (element !== '') {
				array = [...array, { id: element, text: element }];
			}
		});
		return array;
	}

	function getHHNotes() {
		let array: dropdownItem[] = [];
		HuntingHornWeaponNotesCombinations.forEach((element) => {
			let result = `${element[0]} ${element[1]} ${element[2]}`;
			array = [...array, { id: result, text: result }];
		});
		return array;
	}

	function getItemColors() {
		let array: dropdownItem[] = [];
		ItemColors.forEach((element, i) => {
			array = [...array, { id: element.name, text: element.name }];
		});
		return array;
	}

	function getItemIcons() {
		let array: dropdownItem[] = [];
		ItemIcons.forEach((element, i) => {
			array = [...array, { id: element.name, text: element.name }];
		});
		return array;
	}

	function downloadWeaponImage() {
		if (!browser) return;
		let node = document.querySelector('#weapon-dom');
		if (!node) return;
		domToPng(node, { quality: 1 }).then((dataUrl) => {
			const link = document.createElement('a');
			link.download = `${slugify(
				`${frontierMappers.getWeaponNameById(
					weaponTypeId,
				)}-${weaponName}-${new Date().toISOString()}.png`,
			)}`;
			link.href = dataUrl;
			link.click();
		});
	}

	function downloadArmorImage() {
		if (!browser) return;
		let node = document.querySelector('#armor-dom');
		if (!node) return;
		domToPng(node, { quality: 1 }).then((dataUrl) => {
			const link = document.createElement('a');
			link.download = `${slugify(
				`${frontierMappers.getArmorNameById(
					armorID,
				)}-${armorName}-${new Date().toISOString()}.png`,
			)}`;
			link.href = dataUrl;
			link.click();
		});
	}

	function downloadItemsImage() {
		if (!browser) return;
		let node = document.querySelector('#item-dom');
		if (!node) return;
		domToPng(node, { quality: 1 }).then((dataUrl) => {
			const link = document.createElement('a');
			link.download = `${slugify(
				`${itemName}-${new Date().toISOString()}.png`,
			)}`;
			link.href = dataUrl;
			link.click();
		});
	}

	function downloadIconImage() {
		if (!browser) return;
		const isSVG =
			((selectedIconType === 'Monster Icon' || selectedIconType === 'Weapon') &&
				selectedIconFormat === 'Vector') ||
			selectedIconType === 'Element' ||
			selectedIconType === 'Ailment' ||
			selectedIconType === 'Status' ||
			selectedIconType === 'Armor' ||
			selectedIconType === 'Item';
		let node = isSVG
			? document.querySelector('#icon-dom svg')
			: document.querySelector('#icon-dom img');
		if (!node) return;
		if (!isSVG) {
			domToPng(node, { quality: 1 }).then((dataUrl) => {
				const link = document.createElement('a');
				link.download = `${slugify(`${slugify(selectedIconIdFromList)}.png`)}`;
				link.href = dataUrl;
				link.click();
			});
		} else {
			// Serialize the SVG node to a string
			let svgString = new XMLSerializer().serializeToString(node);

			// Create a Blob from the SVG string
			let blob = new Blob([svgString], { type: 'image/svg+xml;charset=utf-8' });

			// Create a URL for the Blob
			let url = URL.createObjectURL(blob);

			// Create a link element for downloading
			const link = document.createElement('a');
			link.download = `${slugify(`${slugify(selectedIconIdFromList)}${selectedIconType === 'Armor' || selectedIconType === 'Item' || selectedIconType === 'Weapon' ? `-${selectedIconColor}` : ''}.svg`)}`;
			link.href = url;

			// Append the link to the body, click it, and then remove it
			document.body.appendChild(link);
			link.click();
			document.body.removeChild(link);
		}
	}

	function downloadTowerWeaponImage() {
		if (!browser) return;
		let node = document.querySelector('#tower-weapon-dom');
		if (!node) return;
		domToPng(node, { quality: 1 }).then((dataUrl) => {
			const link = document.createElement('a');
			link.download = `${slugify(
				`tower-${towerWeaponSelected.type}-${towerWeaponSelected.name}-${new Date().toISOString()}.png`,
			)}`;
			link.href = dataUrl;
			link.click();
		});
	}

	let url = $page.url.toString();
	let currentWeaponPage = 1;
	let currentArmorPage = 1;
	let currentItemPage = 1;

	const minimumSharpnessValue = 0;
	const maximumSharpnessValue = 400;
	const minimumWeaponAttack = 1;
	const maximumWeaponAttack = 65535;
	const minimumRarity = 1;
	const maximumRarity = 12;
	const minimumWeaponLevel = 0;
	const maximumWeaponLevel = 100;
	const minimumWeaponElement = -2550;
	const maximumWeaponElement = 2550;
	const minimumWeaponStatus = -2550;
	const maximumWeaponStatus = 2550;
	const minimumGunlanceShellLevel = 1;
	const maximumGunlanceShellLevel = 9;
	const minimumBowgunAttackLevel = 0;
	const maximumBowgunAttackLevel = 5;
	const minimumWeaponAffinity = -2250;
	const maximumWeaponAffinity = 2250;
	const minimumBowChargeLevel = 1;
	const maximumBowChargeLevel = 4;
	const minimumBowgunAmmo = 0;
	const maximumBowgunAmmo = 64;
	const minimumSigilPoints = -127;
	const maximumSigilPoints = 127;
	const minimumArmorLevel = 0;
	const maximumArmorLevel = 7;
	const minimumArmorDefense = 0;
	const maximumArmorDefense = 65535;
	const minimumArmorElementResistance = -127;
	const maximumArmorElementResistance = 127;
	const minimumArmorSkillPoints = -127;
	const maximumArmorSkillPoints = 127;
	const minimumArmorGRLevel = 0;
	const maximumArmorGRLevel = 7;
	const minimumSlots = 0;
	const maximumSlots = 3;

	const invalidSharpnessValueText = `Value must be between ${minimumSharpnessValue} and ${maximumSharpnessValue}.`;
	const invalidWeaponLevelText = `Value must be between ${minimumWeaponLevel} and ${maximumWeaponLevel}.`;
	const invalidWeaponRarityText = `Value must be between ${minimumRarity} and ${maximumRarity}.`;
	const invalidWeaponAttackText = `Value must be between ${minimumWeaponAttack} and ${maximumWeaponAttack}.`;
	const invalidArmorDefenseText = `Value must be between ${minimumArmorDefense} and ${maximumArmorDefense}.`;
	const invalidArmorElementalResistanceText = `Value must be between ${minimumArmorElementResistance} and ${maximumArmorElementResistance}.`;
	const invalidWeaponElementStatusText = `Value must be between ${minimumWeaponElement} and ${maximumWeaponElement}.`;
	const invalidWeaponAffinityText = `Value must be between ${minimumWeaponAffinity} and ${maximumWeaponAffinity}.`;
	const invalidWeaponSigilValueText = `Value must be between ${minimumSigilPoints} and ${maximumSigilPoints}.`;
	const invalidArmorSkillPointsText = `Value must be between ${minimumArmorSkillPoints} and ${maximumArmorSkillPoints}.`;
	const invalidGunlanceShellLevelText = `Value must be between ${minimumGunlanceShellLevel} and ${maximumGunlanceShellLevel}.`;
	const invalidBowChargeLevelText = `Value must be between ${minimumBowChargeLevel} and ${maximumBowChargeLevel}.`;
	const invalidBowgunAttackLevelText = `Value must be between ${minimumBowgunAttackLevel} and ${maximumBowgunAttackLevel}.`;
	const invalidBowgunAmmoText = `Value must be between ${minimumBowgunAmmo} and ${maximumBowgunAmmo}.`;
	const invalidArmorLevelText = `Value must be between ${minimumArmorLevel} and ${maximumArmorLevel}.`;
	const invalidArmorGRLevelText = `Value must be between ${minimumArmorGRLevel} and ${maximumArmorGRLevel}.`;
	const invalidSlotsText = `Value must be between ${minimumSlots} and ${maximumSlots}.`;

	let weaponSharpness = defaultWeaponComponentValues.weaponSharpness;
	let weaponName = defaultWeaponComponentValues.weaponName;
	let weaponLevel = defaultWeaponComponentValues.weaponLevel;
	let weaponRarity = defaultWeaponComponentValues.weaponRarity;
	let weaponTypeId = defaultWeaponComponentValues.weaponTypeId;
	let weaponRank = defaultWeaponComponentValues.weaponRank;
	let weaponLength = defaultWeaponComponentValues.weaponLength;
	let weaponElementBoost = defaultWeaponComponentValues.weaponElementBoost;
	let weaponStatusBoost = defaultWeaponComponentValues.weaponStatusBoost;
	let weaponAttackBoost = defaultWeaponComponentValues.weaponAttackBoost;
	let weaponAttack = defaultWeaponComponentValues.weaponAttack;
	let weaponElementValue = defaultWeaponComponentValues.weaponElementValue;
	let weaponStatusValue = defaultWeaponComponentValues.weaponStatusValue;
	let weaponElementType = defaultWeaponComponentValues.weaponElementType;
	let weaponStatusType = defaultWeaponComponentValues.weaponStatusType;
	let weaponZenithSkill = defaultWeaponComponentValues.weaponZenithSkill;
	let weaponSharpnessBoost = defaultWeaponComponentValues.weaponSharpnessBoost;
	let weaponDescription = defaultWeaponComponentValues.weaponDescription;
	let weaponExtraIcons = defaultWeaponComponentValues.weaponExtraIcons;
	let weaponType = defaultWeaponComponentValues.weaponType;
	let weaponAffinity = defaultWeaponComponentValues.weaponAffinity;
	let weaponSigil1Id = defaultWeaponComponentValues.weaponSigil1Id;
	let weaponSigil2Id = defaultWeaponComponentValues.weaponSigil2Id;
	let weaponSigil3Id = defaultWeaponComponentValues.weaponSigil3Id;
	let weaponSigil4Id = defaultWeaponComponentValues.weaponSigil4Id;
	let weaponSigil5Id = defaultWeaponComponentValues.weaponSigil5Id;
	let weaponSigil6Id = defaultWeaponComponentValues.weaponSigil6Id;
	let weaponSigil7Id = defaultWeaponComponentValues.weaponSigil7Id;
	let weaponSigil8Id = defaultWeaponComponentValues.weaponSigil8Id;
	let weaponSigil9Id = defaultWeaponComponentValues.weaponSigil9Id;
	let weaponSigil1Value = defaultWeaponComponentValues.weaponSigil1Value;
	let weaponSigil2Value = defaultWeaponComponentValues.weaponSigil2Value;
	let weaponSigil3Value = defaultWeaponComponentValues.weaponSigil3Value;
	let weaponSigil4Value = defaultWeaponComponentValues.weaponSigil4Value;
	let weaponSigil5Value = defaultWeaponComponentValues.weaponSigil5Value;
	let weaponSigil6Value = defaultWeaponComponentValues.weaponSigil6Value;
	let weaponSigil7Value = defaultWeaponComponentValues.weaponSigil7Value;
	let weaponSigil8Value = defaultWeaponComponentValues.weaponSigil8Value;
	let weaponSigil9Value = defaultWeaponComponentValues.weaponSigil9Value;
	let weaponAutomaticSkill = defaultWeaponComponentValues.weaponAutomaticSkill;
	let huntingHornNote1: FrontierHuntingHornWeaponNote =
		defaultWeaponComponentValues.huntingHornNote1;
	let huntingHornNote2: FrontierHuntingHornWeaponNote =
		defaultWeaponComponentValues.huntingHornNote2;
	let huntingHornNote3: FrontierHuntingHornWeaponNote =
		defaultWeaponComponentValues.huntingHornNote3;
	let huntingHornNotes = `${huntingHornNote1} ${huntingHornNote2} ${huntingHornNote3}`;
	let safPhial: FrontierSwitchAxeFPhial = defaultWeaponComponentValues.safPhial;
	let gunlanceShellType: FrontierGunlanceShell =
		defaultWeaponComponentValues.gunlanceShellType;
	let gunlanceShellLevel: FrontierGunlanceShellLevel =
		defaultWeaponComponentValues.gunlanceShellLevel;
	let bowArc = defaultWeaponComponentValues.bowArc;
	let bowChargeType1 = defaultWeaponComponentValues.bowChargeType1;
	let bowChargeLevel1 = defaultWeaponComponentValues.bowChargeLevel1;
	let bowChargeType2 = defaultWeaponComponentValues.bowChargeType2;
	let bowChargeLevel2 = defaultWeaponComponentValues.bowChargeLevel2;
	let bowChargeType3 = defaultWeaponComponentValues.bowChargeType3;
	let bowChargeLevel3 = defaultWeaponComponentValues.bowChargeLevel3;
	let bowPoisonCoatingAvailable =
		defaultWeaponComponentValues.bowPoisonCoatingAvailable;
	let bowParalysisCoatingAvailable =
		defaultWeaponComponentValues.bowParalysisCoatingAvailable;
	let bowSleepCoatingAvailable =
		defaultWeaponComponentValues.bowSleepCoatingAvailable;
	let bowImpactCoatingAvailable =
		defaultWeaponComponentValues.bowImpactCoatingAvailable;
	let bowPowerCoatingAvailable =
		defaultWeaponComponentValues.bowPowerCoatingAvailable;
	let bowgunReload = defaultWeaponComponentValues.bowgunReload;
	let bowgunRecoil = defaultWeaponComponentValues.bowgunRecoil;
	let bowgunScope = defaultWeaponComponentValues.bowgunScope;
	let lightBowgunUpgrade = defaultWeaponComponentValues.lightBowgunUpgrade;
	let heavyBowgunUpgrade = defaultWeaponComponentValues.heavyBowgunUpgrade;
	let bowgunAttackLevel = defaultWeaponComponentValues.bowgunAttackLevel;
	let bowgunNormalAmmo: levelQuantity = [9, 9, 12];
	let bowgunPierceAmmo: levelQuantity = [6, 6, 6];
	let bowgunPelletAmmo: levelQuantity = [6, 6, 6];
	let bowgunCragAmmo: levelQuantity = [2, 2, 2];
	let bowgunClusterAmmo: levelQuantity = [0, 0, 0];
	let bowgunRecoveryAmmo: levelQuantity = [0, 0, 0];
	let bowgunPoisonAmmo: levelQuantity = [0, 0, 0];
	let bowgunParalysisAmmo: levelQuantity = [0, 0, 0];
	let bowgunSleepAmmo: levelQuantity = [0, 0, 0];
	let bowgunFlamingAmmo: levelQuantity = [6, 0, 0];
	let bowgunWaterAmmo: levelQuantity = [0, 0, 0];
	let bowgunThunderAmmo: levelQuantity = [0, 0, 0];
	let bowgunFreezeAmmo: levelQuantity = [0, 0, 0];
	let bowgunDragonAmmo: levelQuantity = [0, 0, 0];
	let bowgunTranqAmmo: levelQuantity = [2, 0, 0];
	let bowgunPaintAmmo: levelQuantity = [2, 0, 0];
	let bowgunDemonAmmo: levelQuantity = [1, 0, 0];
	let bowgunArmorAmmo: levelQuantity = [1, 0, 0];

	let armorName = defaultArmorComponentValues.armorName;
	let armorLevel: FrontierArmorLevel = defaultArmorComponentValues.armorLevel;
	let armorGRLevel: FrontierArmorGRLevel =
		defaultArmorComponentValues.armorGRLevel;
	let armorDefense: number = defaultArmorComponentValues.armorDefense;
	let armorFireResistance: number =
		defaultArmorComponentValues.armorFireResistance;
	let armorWaterResistance: number =
		defaultArmorComponentValues.armorWaterResistance;
	let armorThunderResistance: number =
		defaultArmorComponentValues.armorThunderResistance;
	let armorIceResistance: number =
		defaultArmorComponentValues.armorIceResistance;
	let armorDragonResistance: number =
		defaultArmorComponentValues.armorDragonResistance;
	let armorTransmog = defaultArmorComponentValues.armorTransmog;
	let armorClass: FrontierArmorClass = defaultArmorComponentValues.armorClass;
	let armorID = defaultArmorComponentValues.armorID;
	let armorRank: FrontierEquipmentRank = defaultArmorComponentValues.armorRank;
	let armorZenithSkill: FrontierZenithSkill =
		defaultArmorComponentValues.armorZenithSkill;
	let armorDescription: string = defaultArmorComponentValues.armorDescription;
	let armorRarity: FrontierRarity = defaultArmorComponentValues.armorRarity;

	/** TODO Show extra icons.*/
	let armorExtraIcons = defaultArmorComponentValues.armorExtraIcons;

	let armorSkillTreeNames: FrontierArmorSkillTree[] = [
		'Blazing Grace',
		'Strong Attack',
		'Determination',
		'Absolute Defense',
		'Three Worlds Protection',
	];
	let armorSkillPoints: FrontierEquipmentSkillPoints = [10, 20, -30, 40, 50];
	let armorType: FrontierArmorType = defaultArmorComponentValues.armorType;
	let armorAutomaticSkill: FrontierArmorSkillName =
		defaultArmorComponentValues.armorAutomaticSkill;
	let armorDecorations: FrontierEquipmentDecorations = {
		slot1: {
			name: 'Zindol BM GX1',
			skill1: {
				name: 'Blazing Grace',
				points: 5,
			},
			skill2: {
				name: 'Blazing Grace',
				points: 5,
			},
			skill3: {
				name: 'Blazing Grace',
				points: 5,
			},
			skill4: {
				name: 'Blazing Grace',
				points: 5,
			},
		},
		slot2: {
			name: 'Zindol BM GX1',
			skill1: {
				name: 'Blazing Grace',
				points: 5,
			},
			skill2: {
				name: 'Blazing Grace',
				points: 5,
			},
			skill3: {
				name: 'Blazing Grace',
				points: 5,
			},
			skill4: {
				name: 'Blazing Grace',
				points: 5,
			},
		},
		slot3: {
			name: 'Zindol BM GX1',
			skill1: {
				name: 'Blazing Grace',
				points: 5,
			},
			skill2: {
				name: 'Blazing Grace',
				points: 5,
			},
			skill3: {
				name: 'Blazing Grace',
				points: 5,
			},
			skill4: {
				name: 'Blazing Grace',
				points: 5,
			},
		},
	};

	let itemName = defaultItemComponentValues.itemName;
	let itemDescription = defaultItemComponentValues.itemDescription;
	let itemRarity: FrontierRarity = defaultItemComponentValues.itemRarity;
	let itemRank: FrontierItemRankType = defaultItemComponentValues.itemRank;
	let itemIconName = defaultItemComponentValues.itemIconName;
	let itemColorName: FrontierItemColor =
		defaultItemComponentValues.itemColorName;
	let itemType: FrontierItemType = defaultItemComponentValues.itemType;
	let itemZenithSkill: FrontierZenithSkill =
		defaultItemComponentValues.itemZenithSkill;
	let itemCuffSkill1: FrontierArmorSkillTree =
		defaultItemComponentValues.itemCuffSkill1;
	let itemCuffSkill1Points = defaultItemComponentValues.itemCuffSkill1Points;
	let itemCuffSkill2: FrontierArmorSkillTree =
		defaultItemComponentValues.itemCuffSkill2;
	let itemCuffSkill2Points = defaultItemComponentValues.itemCuffSkill2Points;
	let itemTowerSkill: FrontierArmorSkillName =
		defaultItemComponentValues.itemTowerSkill;
	let itemArmorClass: FrontierArmorClass =
		defaultItemComponentValues.itemArmorClass;
	let itemWeaponClass: FrontierWeaponClass =
		defaultItemComponentValues.itemWeaponClass;
	let itemSlotsRequired: FrontierSlot =
		defaultItemComponentValues.itemSlotsRequired;
	let itemSigil: FrontierItemSigil = {
		slot1: {
			name: 'Attack Slayer',
			value: 8,
		},
		slot2: {
			name: 'Elemental Slayer',
			value: -8,
		},
		slot3: {
			name: 'Zenith Healing',
			value: 4,
		},
		slot4: {
			name: 'Affinity Slayer',
			value: -43,
		},
	};

	let itemDecoration: FrontierItemDecoration = {
		slot1: {
			name: 'Determination',
			value: 7,
		},
		slot2: {
			name: 'Attack',
			value: -58,
		},
		slot3: {
			name: 'Defense',
			value: 9,
		},
		slot4: {
			name: 'Sharpness',
			value: 2,
		},
	};

	$: huntingHornNotesArray = [
		huntingHornNotes.split(' ')[0],
		huntingHornNotes.split(' ')[1],
		huntingHornNotes.split(' ')[2],
	] as FrontierHuntingHornWeaponNote[];

	function getUniqueMonsters() {
		let names: string[] = [];
		let result: FrontierMonsterInfo[] = [];
		MonsterIcons.forEach((element) => {
			if (!names.find((e) => element.displayName === e)) {
				if (!unlistedMonsterNames.find((e) => e === element.displayName)) {
					names.push(element.displayName);
					result.push(element);
				}
			}
		});

		return result;
	}

	function getThumbnailGeneratorImagesFromType(type: FrontierImageType) {
		let list:
			| FrontierWeapon[]
			| FrontierArmor[]
			| { name: string; icon: any }[]
			| FrontierMonsterInfo[]
			| { name: string; image: any }[];
		switch (type) {
			default:
				list = WeaponTypes;
				break;
			case 'Weapon':
				list = WeaponTypes;
				break;
			case 'Armor':
				list = ArmorTypes;
				break;
			case 'Item':
				list = ItemIcons;
				break;
			case 'Monster Icon':
			case 'Monster Render':
				list = uniqueMonsters;
				break;
			case 'Element':
				list = ElementIcons;
				break;
			case 'Ailment':
				list = AilmentIcons;
				break;
			case 'Status':
				list = StatusIcons;
				break;
			case 'Location':
				list = LocationIcons;
				break;
			case 'Habitat':
				list = Habitats;
				break;
			case 'Game':
				list = Games;
				break;
		}

		list = list.filter((e) => e.icon !== '');

		let result: DropdownItem[] = [];
		list.forEach((element) => {
			if (
				(type === 'Monster Icon' ||
					type === 'Element' ||
					type === 'Monster Render') &&
				'displayName' in element
			) {
				// TypeScript now knows that element is of type FrontierMonsterInfo
				// Ensure 'displayName' is a string before pushing to result
				if (
					typeof element.displayName === 'string' &&
					!result.find((e) => e.id === element.displayName)
				) {
					result.push({
						id: `${element.displayName}`,
						text: element.displayName,
					});
				}
			} else {
				result.push({ id: element.name, text: element.name });
			}
		});

		result.sort((a, b) => a.text.localeCompare(b.text));

		thumbnailGeneratorImageIdFromList = result[0].id;

		return result;
	}

	function getCurrentIconsFromType(type: string) {
		let list:
			| FrontierWeapon[]
			| FrontierArmor[]
			| { name: string; icon: any }[]
			| FrontierMonsterInfo[]
			| { name: string; image: any }[];
		switch (type) {
			default:
				list = WeaponTypes;
				break;
			case 'Weapon':
				list = WeaponTypes;
				break;
			case 'Armor':
				list = ArmorTypes;
				break;
			case 'Item':
				list = ItemIcons;
				break;
			case 'Monster Icon':
			case 'Monster Render':
				list = uniqueMonsters;
				break;
			case 'Element':
				list = ElementIcons;
				break;
			case 'Ailment':
				list = AilmentIcons;
				break;
			case 'Status':
				list = StatusIcons;
				break;
			case 'Location':
				list = LocationIcons;
				break;
			case 'Habitat':
				list = Habitats;
				break;
			case 'Game':
				list = Games;
				break;
		}

		list = list.filter((e) => e.icon !== '');

		let result: DropdownItem[] = [];
		list.forEach((element) => {
			if (
				(type === 'Monster Icon' ||
					type === 'Element' ||
					type === 'Monster Render') &&
				'displayName' in element
			) {
				// TypeScript now knows that element is of type FrontierMonsterInfo
				// Ensure 'displayName' is a string before pushing to result
				if (
					typeof element.displayName === 'string' &&
					!result.find((e) => e.id === element.displayName)
				) {
					result.push({
						id: `${element.displayName}`,
						text: element.displayName,
					});
				}
			} else {
				result.push({ id: element.name, text: element.name });
			}
		});

		result.sort((a, b) => a.text.localeCompare(b.text));

		selectedIconIdFromList = result[0].id;

		return result;
	}

	function getIconBlobFromIconMetaData(
		selectedIconType: FrontierImageType,
		selectionID: string,
		size: IconSize,
		format: 'Vector' | 'Raster',
		color: string,
	) {
		// TODO return html in either the form of img if selecting PNG or
		// svelte component if selecting SVG.
		switch (selectedIconType) {
			case 'Weapon':
				return {
					component: WeaponTypes.find((e) => e.name === selectionID)?.icon,
					image: WeaponTypes.find((e) => e.name === selectionID)?.smallIcon,
				};
			case 'Monster Icon':
				return {
					component: MonsterIcons.find((e) => e.displayName === selectionID)
						?.component,
					image: MonsterIcons.find((e) => e.displayName === selectionID)?.icon,
				};
			case 'Monster Render':
				return {
					full: MonsterIcons.find((e) => e.displayName === selectionID)
						?.fullRender,
					small: MonsterIcons.find((e) => e.displayName === selectionID)
						?.render,
				};
			case 'Armor':
				return {
					component: ArmorTypes.find((e) => e.name === selectionID)?.icon,
					image: ArmorTypes.find((e) => e.name === selectionID)?.icon,
				};
			case 'Item':
				return {
					component: ItemIcons.find((e) => e.name === selectionID)?.icon,
					image: ItemIcons.find((e) => e.name === selectionID)?.icon,
				};
			case 'Location':
				return {
					component: LocationIcons.find((e) => e.name === selectionID)?.icon,
					image: LocationIcons.find((e) => e.name === selectionID)?.icon,
				};
			case 'Element':
				return {
					component: ElementIcons.find((e) => e.displayName === selectionID)
						?.icon,
					image: ElementIcons.find((e) => e.displayName === selectionID)?.icon,
				};
			case 'Ailment':
				return {
					component: AilmentIcons.find((e) => e.name === selectionID)?.icon,
					image: AilmentIcons.find((e) => e.name === selectionID)?.icon,
				};
			case 'Status':
				return {
					component: StatusIcons.find((e) => e.name === selectionID)?.icon,
					image: StatusIcons.find((e) => e.name === selectionID)?.icon,
				};
			case 'Habitat':
				return {
					component: Habitats.find((e) => e.name === selectionID)?.image,
					image: Habitats.find((e) => e.name === selectionID)?.image,
				};
			case 'Game':
				return {
					component: Games.find((e) => e.name === selectionID)?.icon,
					image: Games.find((e) => e.name === selectionID)?.icon,
				};
		}
	}

	function getAllFrontierColors() {
		let result: DropdownItem[] = [];
		RarityColors.forEach((e, i) => {
			if (i < 3) {
				// For the first three entries, group them under "Rare 1-3"
				if (i === 0) {
					result.push({ id: e, text: `Rare 1-3` });
				}
			} else {
				// For the rest, use the index to generate the text "Rare 4 to Rare 12"
				result.push({ id: e, text: `Rare ${i + 1}` });
			}
		});
		ItemColors.forEach((e) => result.push({ id: e.value, text: e.name }));
		ColorCodes.forEach((e, i) => result.push({ id: e, text: `~C${i}` }));

		// Remove duplicates based on 'id'
		const uniqueResult = result.filter(
			(obj, index) => result.findIndex((item) => item.id === obj.id) === index,
		);

		return uniqueResult;
	}

	function loadThumbnailTemplate() {
		if (thumbnailGeneratorTemplateFiles.length > 0) {
			const file = thumbnailGeneratorTemplateFiles[0]; // Assuming one file is uploaded at a time
			const reader = new FileReader();
			reader.onload = function (event) {
				try {
					const jsonData = JSON.parse(event.target.result);
					// You can process the JSON data here
					thumbnailImages = jsonData.thumbnailImages;
					thumbnailTexts = jsonData.thumbnailTexts;
				} catch (error) {
					console.error('Error parsing JSON:', error);
				}
			};
			reader.onerror = function (error) {
				console.error('Error reading file:', error);
			};
			reader.readAsText(file); // Read the file as text
		}
	}

	function saveThumbnailTemplate() {
		let input = JSON.stringify({
			thumbnailImages: thumbnailImages,
			thumbnailTexts: thumbnailTexts,
		});

		// Create a Blob object from the string content
		const blob = new Blob([input], { type: 'application/json;charset=utf-8' });

		// Generate a URL for the Blob
		const url = URL.createObjectURL(blob);

		// Create an anchor element
		const link = document.createElement('a');

		// Set the href and download attributes of the anchor element
		link.href = url;
		link.download = `wycademy-smithy-thumbnail-template-${new Date().toISOString()}.json`; // You can customize the filename here

		// Append the anchor element to the document body
		document.body.appendChild(link);

		// Trigger the download by simulating a click on the anchor element
		link.click();

		// Remove the anchor element from the document
		document.body.removeChild(link);

		// Revoke the URL to free up memory
		URL.revokeObjectURL(url);
	}

	function addThumbnailImage() {
		if (thumbnailImages.length > 16) {
			return;
		}
		thumbnailImages = [
			...thumbnailImages,
			{
				optionId: thumbnailGeneratorImageIdFromList,
				elementType: thumbnailGeneratorSectionOption,
				fileFormat: thumbnailGeneratorImageFormat,
				fileType: thumbnailGeneratorImageType,
				src: getIconBlobFromIconMetaData(
					thumbnailGeneratorImageType,
					thumbnailGeneratorImageIdFromList,
					'256px',
					thumbnailGeneratorImageFormat,
					thumbnailGeneratorImageColor,
				),
				alt: 'Thumbnail Image',
				top: 0,
				left: 0,
				width: thumbnailGeneratorImageType === 'Habitat' ? 1280 : 256,
				height: thumbnailGeneratorImageType === 'Habitat' ? 721 : 256,
				zindex: 1,
				opacity: 1,
				dropShadowSize: thumbnailGeneratorImageShadowWidth,
				dropShadowColor: thumbnailGeneratorImageShadowColor,
				borderWidth: thumbnailGeneratorImageBorderWidth,
				borderColor: thumbnailGeneratorImageBorderColor,
				borderRadius: thumbnailGeneratorImageBorderRadius,
				background: thumbnailGeneratorImageBackground,
				color: thumbnailGeneratorImageColor,
				monsterRenderSize: thumbnailGeneratorMonsterRenderSize,
				name: `${thumbnailGeneratorImageType} ${thumbnailGeneratorImageIdFromList}`,
			},
		];
	}

	function addUploadedImage(files: ReadonlyArray<File>) {
		if (files.length === 0 || thumbnailUploadedImages.length > 16) {
			return;
		}
		thumbnailUploadedImages = [
			...thumbnailUploadedImages,
			{
				elementType: thumbnailGeneratorSectionOption,
				fileType: files[files.length - 1].type.toLowerCase(),
				src: URL.createObjectURL(files[files.length - 1]),
				alt: 'Thumbnail Image',
				top: 0,
				left: 0,
				width: 256,
				height: 256,
				zindex: 1,
				opacity: 1,
				dropShadowSize: thumbnailGeneratorUploadedImageShadowWidth,
				dropShadowColor: thumbnailGeneratorUploadedImageShadowColor,
				borderWidth: thumbnailGeneratorUploadedImageBorderWidth,
				borderColor: thumbnailGeneratorUploadedImageBorderColor,
				borderRadius: thumbnailGeneratorUploadedImageBorderRadius,
				name: files[files.length - 1].name,
			},
		];
	}

	function addThumbnailText() {
		if (thumbnailTexts.length > 16) {
			return;
		}
		thumbnailTexts = [
			...thumbnailTexts,
			{
				elementType: thumbnailGeneratorSectionOption,
				text: thumbnailGeneratorText,
				top: 100,
				left: 100,
				zindex: 1,
				opacity: 1,
				fontSize: thumbnailGeneratorTextFontSize,
				color: thumbnailGeneratorTextColor,
				rotation: thumbnailGeneratorTextRotation,
				shadowWidth: thumbnailGeneratorTextShadowWidth,
				shadowColor: thumbnailGeneratorTextShadowColor,
				decoration: thumbnailGeneratorTextDecoration,
				decorationColor: thumbnailGeneratorTextDecorationColor,
				fontFamily: thumbnailGeneratorTextFontFamily,
				fontWeight: thumbnailGeneratorTextFontWeight,
				fontStyle: thumbnailGeneratorTextFontStyle,
			},
		];
	}

	function handleDelete(
		section: 'Image' | 'Custom Image' | 'Text',
		index: number,
	) {
		switch (section) {
			case 'Image':
				thumbnailImages = thumbnailImages.filter((_, i) => i !== index);
				break;
			case 'Custom Image':
				thumbnailUploadedImages = thumbnailUploadedImages.filter(
					(_, i) => i !== index,
				);
				break;
			case 'Text':
				thumbnailTexts = thumbnailTexts.filter((_, i) => i !== index);
				break;
		}
	}

	function handleDuplicate(
		section: 'Image' | 'Custom Image' | 'Text',
		index: number,
	) {
		switch (section) {
			case 'Image':
				thumbnailImages = [
					...thumbnailImages,
					{
						optionId: thumbnailImages[index].optionId,
						elementType: thumbnailImages[index].elementType,
						fileFormat: thumbnailImages[index].fileFormat,
						fileType: thumbnailImages[index].fileType,
						src: thumbnailImages[index].src,
						alt: thumbnailImages[index].alt,
						top: thumbnailImages[index].top,
						left: thumbnailImages[index].left,
						width: thumbnailImages[index].width,
						height: thumbnailImages[index].height,
						zindex: thumbnailImages[index].zindex,
						opacity: thumbnailImages[index].opacity,
						dropShadowSize: thumbnailImages[index].dropShadowSize,
						dropShadowColor: thumbnailImages[index].dropShadowColor,
						borderWidth: thumbnailImages[index].borderWidth,
						borderColor: thumbnailImages[index].borderColor,
						borderRadius: thumbnailImages[index].borderRadius,
						background: thumbnailImages[index].background,
						color: thumbnailImages[index].color,
						monsterRenderSize: thumbnailImages[index].monsterRenderSize,
						name: thumbnailImages[index].name,
					},
				];
				break;
			case 'Custom Image':
				thumbnailUploadedImages = [
					...thumbnailUploadedImages,
					{
						elementType: thumbnailUploadedImages[index].elementType,
						fileType: thumbnailUploadedImages[index].fileType,
						src: thumbnailUploadedImages[index].src,
						alt: thumbnailUploadedImages[index].alt,
						top: thumbnailUploadedImages[index].top,
						left: thumbnailUploadedImages[index].left,
						width: thumbnailUploadedImages[index].width,
						height: thumbnailUploadedImages[index].height,
						zindex: thumbnailUploadedImages[index].zindex,
						opacity: thumbnailUploadedImages[index].opacity,
						dropShadowSize: thumbnailUploadedImages[index].dropShadowSize,
						dropShadowColor: thumbnailUploadedImages[index].dropShadowColor,
						borderWidth: thumbnailUploadedImages[index].borderWidth,
						borderColor: thumbnailUploadedImages[index].borderColor,
						borderRadius: thumbnailUploadedImages[index].borderRadius,
						name: thumbnailUploadedImages[index].name,
					},
				];
				break;
			case 'Text':
				thumbnailTexts = [
					...thumbnailTexts,
					{
						elementType: thumbnailTexts[index].elementType,
						text: thumbnailTexts[index].text,
						top: thumbnailTexts[index].top,
						left: thumbnailTexts[index].left,
						zindex: thumbnailTexts[index].zindex,
						opacity: thumbnailTexts[index].opacity,
						fontSize: thumbnailTexts[index].fontSize,
						color: thumbnailTexts[index].color,
						rotation: thumbnailTexts[index].rotation,
						shadowWidth: thumbnailTexts[index].shadowWidth,
						shadowColor: thumbnailTexts[index].shadowColor,
						decoration: thumbnailTexts[index].decoration,
						decorationColor: thumbnailTexts[index].decorationColor,
						fontFamily: thumbnailTexts[index].fontFamily,
						fontWeight: thumbnailTexts[index].fontWeight,
						fontStyle: thumbnailTexts[index].fontStyle,
					},
				];
				break;
		}
	}

	async function createThumbnailGeneratorSmallPreview() {
		let node = document.querySelector('#generated-thumbnail-dom');

		if (!node) {
			return;
		}

		await domToPng(node, {
			quality: 1,
		}).then((dataUrl) => {
			thumbnailGeneratorSmallPreview = dataUrl;
		});
	}

	let thumbnailGeneratorSmallPreview = '';
	let thumbnailGeneratorSmallPreviewSize = '512';

	async function downloadGeneratedThumbnailImage() {
		let node = document.querySelector('#generated-thumbnail-dom');

		if (!node) {
			return;
		}

		await domToPng(node, { quality: 1 }).then((dataUrl) => {
			const link = document.createElement('a');
			link.download = `${slugify('generated-thumbnail')}-${new Date().toISOString()}.png`;
			link.href = dataUrl;
			link.click();
		});
	}

	function getThumbnailGeneratorTemplateExampleTexts() {
		return [
			{
				elementType: 'Text',
				text: 'Rush of Madness',
				top: 594,
				left: 431,
				zindex: 2,
				opacity: 1,
				fontSize: 80,
				color: getHexStringFromCatppuccinColor('green', 'g100'),
				rotation: 0,
				shadowWidth: 0,
				shadowColor: '#000000',
				decoration: 'none',
				decorationColor: '#000000',
				fontFamily: 'MS Gothic',
				fontWeight: 'bold',
				fontStyle: 'normal',
			},
			{
				elementType: 'Text',
				text: 'Rush of Madness',
				top: 590,
				left: 427,
				zindex: 2,
				opacity: 1,
				fontSize: 80,
				color: getHexStringFromCatppuccinColor('rosewater', 'g100'),
				rotation: 0,
				shadowWidth: 0,
				shadowColor: '#000000',
				decoration: 'none',
				decorationColor: '#000000',
				fontFamily: 'MS Gothic',
				fontWeight: 'bold',
				fontStyle: 'normal',
			},
			{
				elementType: 'Text',
				text: '23\'29"56',
				top: 474,
				left: 514,
				zindex: 2,
				opacity: 1,
				fontSize: 96,
				color: getHexStringFromCatppuccinColor('blue', 'g100'),
				rotation: 0,
				shadowWidth: 0,
				shadowColor: '#000000',
				decoration: 'none',
				decorationColor: '#000000',
				fontFamily: 'MS Gothic',
				fontWeight: 'bold',
				fontStyle: 'normal',
			},
			{
				elementType: 'Text',
				text: '23\'29"56',
				top: 470,
				left: 510,
				zindex: 2,
				opacity: 1,
				fontSize: 96,
				color: getHexStringFromCatppuccinColor('rosewater', 'g100'),
				rotation: 0,
				shadowWidth: 0,
				shadowColor: '#000000',
				decoration: 'none',
				decorationColor: '#000000',
				fontFamily: 'MS Gothic',
				fontWeight: 'bold',
				fontStyle: 'normal',
			},
		];
	}

	function getThumbnailGeneratorTemplateExampleImages() {
		return [
			{
				optionId: 'Historical Site',
				elementType: 'Image',
				fileFormat: 'Raster',
				fileType: 'Habitat',
				src: getIconBlobFromIconMetaData(
					'Habitat',
					'Historical Site',
					'256px',
					'Raster',
					'#ffffff',
				),
				alt: 'Thumbnail Image',
				top: 0,
				left: 0,
				width: 1280,
				height: 721,
				zindex: 0,
				opacity: 1,
				dropShadowSize: 0,
				dropShadowColor: '#000000',
				borderWidth: 0,
				borderColor: '#000000',
				borderRadius: 0,
				background: false,
				color: '#ffffff',
				monsterRenderSize: 'Full',
			},
			{
				optionId: 'Magnet Spike',
				elementType: 'Image',
				fileFormat: 'Vector',
				fileType: 'Weapon',
				src: getIconBlobFromIconMetaData(
					'Weapon',
					'Magnet Spike',
					'256px',
					'Vector',
					'#ffffff',
				),
				alt: 'Thumbnail Image',
				top: 420,
				left: 64,
				width: 256,
				height: 256,
				zindex: 0,
				opacity: 1,
				dropShadowSize: 8,
				dropShadowColor: '#ff0000',
				borderWidth: 0,
				borderColor: '#000000',
				borderRadius: 0,
				background: false,
				color: '#ffffff',
				monsterRenderSize: 'Full',
			},
			{
				optionId: 'Blinking Nargacuga',
				elementType: 'Image',
				fileFormat: 'Vector',
				fileType: 'Monster Icon',
				src: getIconBlobFromIconMetaData(
					'Monster Icon',
					'Blinking Nargacuga',
					'256px',
					'Vector',
					'#ffffff',
				),
				alt: 'Thumbnail Image',
				top: 50,
				left: 400,
				width: 192,
				height: 192,
				zindex: 0,
				opacity: 1,
				dropShadowSize: 8,
				dropShadowColor: '#ffffff',
				borderWidth: 0,
				borderColor: '#ffffff',
				borderRadius: 0,
				background: false,
				color: '#ffffff',
				monsterRenderSize: 'Full',
			},
			{
				optionId: 'Burning Freezing Elzelion',
				elementType: 'Image',
				fileFormat: 'Vector',
				fileType: 'Monster Icon',
				src: getIconBlobFromIconMetaData(
					'Monster Icon',
					'Burning Freezing Elzelion',
					'256px',
					'Vector',
					'#ffffff',
				),
				alt: 'Thumbnail Image',
				top: 242,
				left: 496,
				width: 192,
				height: 192,
				zindex: 0,
				opacity: 1,
				dropShadowSize: 8,
				dropShadowColor: '#ff00ff',
				borderWidth: 0,
				borderColor: '#0000ff',
				borderRadius: 0,
				background: false,
				color: '#ffffff',
				monsterRenderSize: 'Full',
			},
			{
				optionId: 'Howling Zinogre',
				elementType: 'Image',
				fileFormat: 'Vector',
				fileType: 'Monster Icon',
				src: getIconBlobFromIconMetaData(
					'Monster Icon',
					'Howling Zinogre',
					'256px',
					'Vector',
					'#ffffff',
				),
				alt: 'Thumbnail Image',
				top: 50,
				left: 592,
				width: 192,
				height: 192,
				zindex: 0,
				opacity: 1,
				dropShadowSize: 8,
				dropShadowColor: '#00ffff',
				borderWidth: 0,
				borderColor: '#000000',
				borderRadius: 0,
				background: false,
				color: '#ffffff',
				monsterRenderSize: 'Full',
			},
			{
				optionId: 'Sparkling Zerureusu',
				elementType: 'Image',
				fileFormat: 'Vector',
				fileType: 'Monster Icon',
				src: getIconBlobFromIconMetaData(
					'Monster Icon',
					'Sparkling Zerureusu',
					'256px',
					'Vector',
					'#ffffff',
				),
				alt: 'Thumbnail Image',
				top: 242,
				left: 688,
				width: 192,
				height: 192,
				zindex: 0,
				opacity: 1,
				dropShadowSize: 8,
				dropShadowColor: '#ff0000',
				borderWidth: 0,
				borderColor: '#000000',
				borderRadius: 0,
				background: false,
				color: '#ffffff',
				monsterRenderSize: 'Full',
			},
			{
				optionId: 'Bombardier Bogabadorumu',
				elementType: 'Image',
				fileFormat: 'Vector',
				fileType: 'Monster Icon',
				src: getIconBlobFromIconMetaData(
					'Monster Icon',
					'Bombardier Bogabadorumu',
					'256px',
					'Vector',
					'#ffffff',
				),
				alt: 'Thumbnail Image',
				top: 50,
				left: 784,
				width: 192,
				height: 192,
				zindex: 0,
				opacity: 1,
				dropShadowSize: 8,
				dropShadowColor: '#0000ff',
				borderWidth: 0,
				borderColor: '#000000',
				borderRadius: 0,
				background: false,
				color: '#ffffff',
				monsterRenderSize: 'Full',
			},
		];
	}

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

		// towerWeaponGunlanceShellLevels = towerWeapons.find(
		// 	(element) => element.name === towerWeaponSelectedWeaponOption,
		// )?.gunlanceShellLevel ?? [[]];
		// towerWeaponGunlanceShellOptions =
		// 	getTowerWeaponGunlaceShellOptions(towerWeaponSelected);
		// return result;
	}

	function getTowerWeaponImageSource(weaponOption: string) {
		let found =
			towerWeapons.find((e) => e.name === weaponOption)?.image ??
			towerWeapons[0].image;
		return found;
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

	let selectedIconFormat: 'Vector' | 'Raster' = 'Vector';
	let selectedIconMonsterRenderSize: 'Small' | 'Full' = 'Full';
	let selectedIconSize: IconSize = '256px';
	let selectedIconType: FrontierImageType = 'Monster Icon';
	const unlistedMonsterNames = ['Random', 'Cactus', 'PSO2 Rappy'];
	const allFrontierColors = getAllFrontierColors();

	let uniqueMonsters = getUniqueMonsters().sort(
		(a, b) =>
			(a?.displayName?.codePointAt(0) ?? 0) -
			(b?.displayName?.codePointAt(0) ?? 0),
	);
	let selectedIconIdFromList = 'Abiorugu';
	let selectedIconColor = allFrontierColors[0].id;
	let selectedIconBackground = false;

	let thumbnailImages: HTMLImgAttributes[] = [];
	let thumbnailUploadedImages: HTMLImgAttributes[] = [];
	let thumbnailTexts: HTMLParagraphElement[] = [];

	let thumbnailGeneratorImageFormat: 'Vector' | 'Raster' = 'Vector';
	let thumbnailGeneratorImageType: FrontierImageType = 'Monster Icon';
	let thumbnailGeneratorImageIdFromList = 'Abiorugu';
	let thumbnailGeneratorImageColor = allFrontierColors[0].id;
	let thumbnailGeneratorImageBackground = false;
	let thumbnailGeneratorMonsterRenderSize: 'Small' | 'Full' = 'Full';
	let thumbnailGeneratorBackgroundGradientStartColor =
		getHexStringFromCatppuccinColor('mantle', $theme);
	let thumbnailGeneratorBackgroundGradientEndColor =
		getHexStringFromCatppuccinColor('crust', $theme);
	let thumbnailGeneratorBackgroundGradientRotation = 45;
	let thumbnailGeneratorBackgroundGradientLinear = false;
	let thumbnailGeneratorImageShadowColor = '#000000';
	let thumbnailGeneratorImageShadowWidth = 4;
	let thumbnailGeneratorImageBorderWidth = 0;
	let thumbnailGeneratorImageBorderColor = '#000000';
	let thumbnailGeneratorImageBorderRadius = 5;

	let thumbnailGeneratorBorderWidth = 12;
	let thumbnailGeneratorBorderStyle = 'outset';
	let thumbnailGeneratorBorderColor = getHexStringFromCatppuccinColor(
		'red',
		$theme,
	);
	let thumbnailGeneratorBorder = false;

	let thumbnailGeneratorImageFiles: ReadonlyArray<File> = [];
	let thumbnailGeneratorTemplateFiles: ReadonlyArray<File> = [];

	let thumbnailGeneratorText = '5 Musous No Hit SW+CS';
	let thumbnailGeneratorTextFontSize = 48;
	let thumbnailGeneratorTextColor = '#000000';
	let thumbnailGeneratorTextRotation = 0;
	let thumbnailGeneratorTextShadowColor = '#ff0000';
	let thumbnailGeneratorTextShadowWidth = 1;
	let thumbnailGeneratorTextFontFamily = 'Arial';
	let thumbnailGeneratorTextFontStyle = 'italic';
	let thumbnailGeneratorTextFontWeight = 'bold';
	let thumbnailGeneratorTextDecoration = 'underline';
	let thumbnailGeneratorTextDecorationColor = '#ff0000';

	let thumbnailGeneratorSectionOption: 'Text' | 'Image' | 'Custom Image' =
		'Image';

	let thumbnailGeneratorUploadedImageShadowWidth = 4;
	let thumbnailGeneratorUploadedImageShadowColor = '#000000';
	let thumbnailGeneratorUploadedImageBorderWidth = 4;
	let thumbnailGeneratorUploadedImageBorderColor = '#000000';
	let thumbnailGeneratorUploadedImageBorderRadius = 5;

	let thumbnailGeneratorTemplateExampleImages =
		getThumbnailGeneratorTemplateExampleImages();
	let thumbnailGeneratorTemplateExampleTexts =
		getThumbnailGeneratorTemplateExampleTexts();

	thumbnailImages = [
		...thumbnailImages,
		...thumbnailGeneratorTemplateExampleImages,
	];

	thumbnailTexts = [
		...thumbnailTexts,
		...thumbnailGeneratorTemplateExampleTexts,
	];

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

	$: towerWeaponSeriesColor =
		towerWeaponSelected.series === 'Light'
			? RarityColors[0]
			: towerWeaponSelected.series === 'Dark'
				? RarityColors[11]
				: RarityColors[5];

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

	$: addUploadedImage(thumbnailGeneratorImageFiles);
	$: currentIconsFromType = getCurrentIconsFromType(selectedIconType);
	$: thumbnailGeneratorImagesFromType = getThumbnailGeneratorImagesFromType(
		thumbnailGeneratorImageType,
	);
	$: currentIconPreview = getIconBlobFromIconMetaData(
		selectedIconType,
		selectedIconIdFromList,
		selectedIconSize,
		selectedIconFormat,
		selectedIconColor,
	);
	$: thumbnailGeneratorPreviewStyle = `background: ${thumbnailGeneratorBackgroundGradientLinear ? 'linear' : 'radial'}-gradient(${thumbnailGeneratorBackgroundGradientLinear ? `${thumbnailGeneratorBackgroundGradientRotation}deg` : 'circle'}, ${thumbnailGeneratorBackgroundGradientStartColor} 0%, ${thumbnailGeneratorBackgroundGradientEndColor} 100%); border: ${thumbnailGeneratorBorder ? thumbnailGeneratorBorderWidth : '0'}px ${thumbnailGeneratorBorderStyle} ${thumbnailGeneratorBorderColor};`;

	let thumbnailContainer: HTMLDivElement;
	let thumbnailContainerCursorPosition = { x: 0, y: 0 };

	onMount(() => {
		thumbnailContainer.addEventListener('dragover', (e) => {
			e.preventDefault(); // Necessary to allow dropping
		});

		thumbnailContainer.addEventListener('mousemove', (e) => {
			const rect = thumbnailContainer.getBoundingClientRect();
			thumbnailContainerCursorPosition.x = Math.round(e.clientX - rect.left);
			thumbnailContainerCursorPosition.y = Math.round(e.clientY - rect.top);
		});

		thumbnailContainer.addEventListener('drop', (e) => {
			e.preventDefault(); // Prevents default behavior
			const data = JSON.parse(e.dataTransfer.getData('text/plain'));
			const element = document.getElementById(data.id);
			if (element) {
				// Calculate the correct position based on the cursor's position relative to the container
				// and the initial offset of the dragged element
				const rect = thumbnailContainer.getBoundingClientRect();
				const newTop = Math.round(e.clientY - rect.top - data.offsetY);
				const newLeft = Math.round(e.clientX - rect.left - data.offsetX);

				// Update the element's position
				element.style.top = `${newTop}px`;
				element.style.left = `${newLeft}px`;

				// Update the position in your data model here
				// For example, if you're tracking the position in a Svelte store or a local variable, update it here
				if (data.id.startsWith('image')) {
					thumbnailImages[data.index].top = newTop;
					thumbnailImages[data.index].left = newLeft;
				} else if (data.id.startsWith('upload')) {
					thumbnailUploadedImages[data.index].top = newTop;
					thumbnailUploadedImages[data.index].left = newLeft;
				} else if (data.id.startsWith('text')) {
					thumbnailTexts[data.index].top = newTop;
					thumbnailTexts[data.index].left = newLeft;
				}
			}
		});
	});

	let thumbnailElementsOrderReversed = false;

	let modalOpen = false;
	let modalHeading = '';
	let modalLabel = '';
	let modalImage = '';
	let modalNotes = '';

	function changeModal(heading: string, section: string) {
		modalOpen = true;
		modalHeading = heading;
		modalLabel = section || '';

		switch (section) {
			case 'youtube':
				modalImage = '';
				modalNotes = '';
				break;
			default:
				modalImage = '';
				modalNotes = '';
				break;
		}
	}

	function handleDragStart(
		e: { dataTransfer: { setData: (arg0: string, arg1: string) => void } },
		id: any,
		offsetX: any,
		offsetY: any,
		index: number,
	) {
		e.dataTransfer.setData(
			'text/plain',
			JSON.stringify({ id, offsetX, offsetY, index }),
		);
	}

	function countStringOccurrences(nestedArray: string[][]) {
		const counts = {};

		function countStrings(arr: any[]) {
			arr.forEach((item: string | number) => {
				if (typeof item === 'string') {
					counts[item] = (counts[item] || 0) + 1;
				} else if (Array.isArray(item)) {
					countStrings(item);
				}
			});
		}

		countStrings(nestedArray);
		return counts;
	}

	function countStringValueOccurrencesInFrontierEnumerables(
		inputObj: Record<string, FrontierEnumerable>,
	): Record<string, Record<string, number>> {
		const result: Record<string, Record<string, number>> = {};

		function traverse(obj: FrontierEnumerable, currentKey: string = '') {
			Object.values(obj).forEach((value) => {
				if (typeof value === 'string') {
					if (!result[currentKey]) {
						result[currentKey] = {};
					}
					result[currentKey][value] = (result[currentKey][value] || 0) + 1;
				} else if (value instanceof Object) {
					traverse(value, currentKey);
				}
			});
		}

		Object.keys(inputObj).forEach((key) => {
			traverse(inputObj[key], key);
		});

		// Filter occurrences above 1
		const filteredResult: Record<string, Record<string, number>> = {};
		Object.entries(result).forEach(([key, values]) => {
			const filteredValues = Object.fromEntries(
				Object.entries(values).filter(([_, count]) => count > 1),
			);
			if (Object.keys(filteredValues).length > 0) {
				filteredResult[key] = filteredValues;
			}
		});

		return filteredResult;
	}

	// const duplicatesInput = {
	// 	ArmorArms: ezlion.ArmorArms,
	// 	ArmorChest: ezlion.ArmorChest,
	// 	ArmorColor: ezlion.ArmorColor,
	// 	ArmorHead: ezlion.ArmorHead,
	// 	ArmorLegs: ezlion.ArmorLegs,
	// 	ArmorWaist: ezlion.ArmorWaist,
	// 	Item: ezlion.Item,
	// 	Location: ezlion.Location,
	// 	Monster: ezlion.Monster,
	// 	ObjectiveType: ezlion.ObjectiveType,
	// 	PoogieCostume: ezlion.PoogieCostume,
	// 	Quest: ezlion.Quest,
	// 	RankBand: ezlion.RankBand,
	// 	Sharpness: ezlion.Sharpness,
	// 	SkillArmor: ezlion.SkillArmor,
	// 	SkillCaravan: ezlion.SkillCaravan,
	// 	SkillDiva: ezlion.SkillDiva,
	// 	SkillHalk: ezlion.SkillHalk,
	// 	SkillRoadTower: ezlion.SkillRoadTower,
	// 	SkillSigil: ezlion.SkillSigil,
	// 	SkillStyleRank: ezlion.SkillStyleRank,
	// 	SkillZenith: ezlion.SkillZenith,
	// 	WeaponBlademaster: ezlion.WeaponBlademaster,
	// 	WeaponClass: ezlion.WeaponClass,
	// 	WeaponGunner: ezlion.WeaponGunner,
	// 	WeaponStyle: ezlion.WeaponStyle,
	// 	WeaponType: ezlion.WeaponType,
	// 	PoogieGuildOutfit: ezlion.PoogieGuildOutfit,
	// 	QuestToggleMode: ezlion.QuestToggleMode,
	// 	SkillDivaPrayerGem: ezlion.SkillDivaPrayerGem,
	// 	SkillGuildPoogie: ezlion.SkillGuildPoogie,
	// 	SkillTree: ezlion.SkillTree,
	// 	SkillArmorPriority: ezlion.SkillArmorPriority,
	// };

	// const result =
	// countStringValueOccurrencesInFrontierEnumerables(duplicatesInput);

	// console.log(JSON.stringify(result, null, 2));

	let moveableTarget;

	function onThumbnailImageContainerMouseDown(
		e: MouseEvent & { currentTarget: EventTarget & HTMLDivElement },
		i: number,
	) {
		if (e.target.tagName !== 'svg' && e.target.tagName !== 'div') {
			moveableTarget = undefined;
		} else {
			moveableTarget = document.getElementById(`image-${i}`);
		}
	}

	function onDragEnd(e) {
		let { target, isDrag, clientX, clientY } = e;
		const element = moveableTarget;
		const rect = thumbnailContainer.getBoundingClientRect();

		// Adjustments for centering the element
		const elementWidth = element.offsetWidth;
		const elementHeight = element.offsetHeight;
		const newTop = Math.round(clientY - rect.top - elementHeight / 2); // Subtract half the height
		const newLeft = Math.round(clientX - rect.left - elementWidth / 2); // Subtract half the width

		element.style.top = `${newTop}px`;
		element.style.left = `${newLeft}px`;

		// Update the thumbnailImages array with the new positions
		thumbnailImages[Number(moveableTarget.id.replace('image-', ''))].top =
			newTop;
		thumbnailImages[Number(moveableTarget.id.replace('image-', ''))].left =
			newLeft;
	}
</script>

<Head
	title={'Smithy'}
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
>
	<div class="modal-content">
		<div class="video-container">
			<Youtube id="rLzX-y-BJfw" />
		</div>
	</div>
</Modal>

<div>
	<SectionHeadingTopLevel title="Smithy" />

	<p>
		In the Smithy, you can generate various equipment for display purposes, such
		as <InlineTooltip text="Armor" icon={ArmorTypes[0].icon} tooltip="Armor" />, <InlineTooltip
			text="Weapons"
			icon={WeaponTypes[0].icon}
			tooltip="Weapon"
		/> and <InlineTooltip
			text="Items"
			icon={ItemIcons[0].icon}
			tooltip="Item"
		/>. Additionally, you can download the icons themselves and make thumbnails
		for your videos.
	</p>

	<section>
		<SectionHeading title="Weapon" level={2} />
		<div class="inline-notification-container">
			<InlineNotification
				lowContrast
				hideCloseButton
				kind="info"
				title="Sharpness:"
				subtitle="The game uses integers. The values here is how it works internally. Defaults to a black bar on invalid values."
			/>
			<InlineNotification
				lowContrast
				hideCloseButton
				kind="info"
				title="Length:"
				subtitle="The game uses Medium for Magnet Spike and Tonfa."
			/>
			<InlineNotification
				lowContrast
				hideCloseButton
				kind="info"
				title="Points:"
				subtitle="The game uses values between -127 and 127 for skill and sigil points."
			/>
		</div>
		<div class="container-weapon-buttons">
			<Button kind="tertiary" icon={Download} on:click={downloadWeaponImage}
				>Download</Button
			>

			<Button kind="tertiary" icon={Restart} on:click={resetWeaponValues}
				>Restore values</Button
			>

			<Toggle labelText="Extra Icons" bind:toggled={weaponExtraIcons} />
		</div>
		<div class="container-weapon">
			<div class="weapon-info">
				{#key weaponRarity}
					<div id="weapon-dom">
						<Weapon
							{bowgunAttackLevel}
							{bowgunRecoil}
							{bowgunReload}
							{bowgunScope}
							{heavyBowgunUpgrade}
							{lightBowgunUpgrade}
							bowgunAmmo={[
								{ type: 'Norm S.', levelQuantity: bowgunNormalAmmo },
								{ type: 'Pierce S.', levelQuantity: bowgunPierceAmmo },
								{ type: 'Pellet S.', levelQuantity: bowgunPelletAmmo },
								{ type: 'Crag S.', levelQuantity: bowgunCragAmmo },
								{ type: 'Cluster S.', levelQuantity: bowgunClusterAmmo },
								{ type: 'Rec S.', levelQuantity: bowgunRecoveryAmmo },
								{ type: 'Psn S.', levelQuantity: bowgunPoisonAmmo },
								{ type: 'Para S.', levelQuantity: bowgunParalysisAmmo },
								{ type: 'Slp S.', levelQuantity: bowgunSleepAmmo },
								{ type: 'Flaming S', levelQuantity: bowgunFlamingAmmo },
								{ type: 'Water S', levelQuantity: bowgunWaterAmmo },
								{ type: 'Thunder S', levelQuantity: bowgunThunderAmmo },
								{ type: 'Freeze S', levelQuantity: bowgunFreezeAmmo },
								{ type: 'Dragon S', levelQuantity: bowgunDragonAmmo },
								{ type: 'Tranq S', levelQuantity: bowgunTranqAmmo },
								{ type: 'Paint S', levelQuantity: bowgunPaintAmmo },
								{ type: 'Demon S.', levelQuantity: bowgunDemonAmmo },
								{ type: 'Armor S.', levelQuantity: bowgunArmorAmmo },
							]}
							{bowArc}
							bowCoatings={{
								power: bowPowerCoatingAvailable,
								poison: bowPoisonCoatingAvailable,
								para: bowParalysisCoatingAvailable,
								sleep: bowSleepCoatingAvailable,
								impact: bowImpactCoatingAvailable,
							}}
							bowCharges={[
								{ type: bowChargeType1, level: bowChargeLevel1 },
								{ type: bowChargeType2, level: bowChargeLevel2 },
								{ type: bowChargeType3, level: bowChargeLevel3 },
							]}
							gunlanceShell={gunlanceShellType}
							{gunlanceShellLevel}
							huntingHornNotes={[
								huntingHornNotesArray[0],
								huntingHornNotesArray[1],
								huntingHornNotesArray[2],
							]}
							phial={safPhial}
							automaticSkill={weaponAutomaticSkill}
							sigils={[
								weaponSigil1Id,
								weaponSigil2Id,
								weaponSigil3Id,
								weaponSigil4Id,
								weaponSigil5Id,
								weaponSigil6Id,
								weaponSigil7Id,
								weaponSigil8Id,
								weaponSigil9Id,
							]}
							sigilPoints={[
								weaponSigil1Value,
								weaponSigil2Value,
								weaponSigil3Value,
								weaponSigil4Value,
								weaponSigil5Value,
								weaponSigil6Value,
								weaponSigil7Value,
								weaponSigil8Value,
								weaponSigil9Value,
							]}
							extraIcons={weaponExtraIcons}
							bind:currentPage={currentWeaponPage}
							name={weaponName}
							length={weaponLength}
							weaponID={frontierMappers.getWeaponIdFromString(weaponTypeId)}
							attack={weaponAttack}
							attackBoost={weaponAttackBoost}
							sharpnessValues={weaponSharpness}
							sharpnessBoost={weaponSharpnessBoost}
							elementValue={weaponElementValue}
							statusValue={weaponStatusValue}
							element={weaponElementType}
							status={weaponStatusType}
							elementBoost={weaponElementBoost}
							statusBoost={weaponStatusBoost}
							rank={weaponRank}
							level={weaponLevel >= 0 && weaponLevel <= 100 ? weaponLevel : 0}
							rarity={weaponRarity >= 1 && weaponRarity <= 12
								? weaponRarity
								: 1}
							zenithSkill={weaponZenithSkill}
							description={weaponDescription}
							affinity={weaponAffinity}
							{weaponType}
						/>
					</div>
				{/key}
			</div>
			<div class="weapon-info-values">
				<Dropdown
					titleText="Type"
					type="inline"
					hideLabel
					bind:selectedId={weaponTypeId}
					items={[
						{ id: '0', text: 'Great Sword' },
						{ id: '7', text: 'Long Sword' },
						{ id: '4', text: 'Sword and Shield' },
						{ id: '6', text: 'Dual Swords' },
						{ id: '2', text: 'Hammer' },
						{ id: '8', text: 'Hunting Horn' },
						{ id: '3', text: 'Lance' },
						{ id: '9', text: 'Gunlance' },
						{ id: '1', text: 'Heavy Bowgun' },
						{ id: '5', text: 'Light Bowgun' },
						{ id: '10', text: 'Bow' },
						{ id: '11', text: 'Tonfa' },
						{ id: '12', text: 'Switch Axe F' },
						{ id: '13', text: 'Magnet Spike' },
					]}
				/>
				<TextInput
					labelText="Name"
					placeholder="Enter weapon name"
					hideLabel
					bind:value={weaponName}
				/>

				<NumberInput
					size="sm"
					step={1}
					min={minimumRarity}
					max={maximumRarity}
					bind:value={weaponRarity}
					invalidText={invalidWeaponRarityText}
					label={'Rarity'}
				/>
				<NumberInput
					size="sm"
					step={1}
					min={minimumWeaponLevel}
					max={maximumWeaponLevel}
					bind:value={weaponLevel}
					invalidText={invalidWeaponLevelText}
					label={'Level'}
				/>
			</div>
			{#if currentWeaponPage === 1}
				<div class="page-1-blademaster">
					<div class="weapon-sharpness-values">
						{#each SharpnessNames as name, i}
							<NumberInput
								size="sm"
								step={1}
								min={minimumSharpnessValue}
								max={maximumSharpnessValue}
								bind:value={weaponSharpness[i]}
								invalidText={invalidSharpnessValueText}
								label={name}
							/>
						{/each}
					</div>
					<div class="weapon-info-values-bottom">
						<Toggle
							labelText="Sharpness Boost"
							bind:toggled={weaponSharpnessBoost}
						/>
						<Toggle labelText="Attack Boost" bind:toggled={weaponAttackBoost} />
						<Toggle
							labelText="Element Boost"
							bind:toggled={weaponElementBoost}
						/>
						<Toggle labelText="Status Boost" bind:toggled={weaponStatusBoost} />
						<Dropdown
							titleText="Rank"
							type="inline"
							hideLabel
							bind:selectedId={weaponRank}
							items={[
								{ id: '', text: 'None' },
								{ id: 'G', text: 'G' },
								{ id: 'Z', text: 'Zenith' },
							]}
						/>

						<NumberInput
							size="sm"
							step={1}
							min={minimumWeaponAttack}
							max={maximumWeaponAttack}
							bind:value={weaponAttack}
							invalidText={invalidWeaponAttackText}
							label={'Attack'}
						/>
						<NumberInput
							size="sm"
							step={10}
							min={minimumWeaponElement}
							max={maximumWeaponElement}
							bind:value={weaponElementValue}
							invalidText={invalidWeaponElementStatusText}
							label={'Element'}
						/>
						<NumberInput
							size="sm"
							step={10}
							min={minimumWeaponStatus}
							max={maximumWeaponStatus}
							bind:value={weaponStatusValue}
							invalidText={invalidWeaponElementStatusText}
							label={'Status'}
						/>
						<Dropdown
							titleText="Zenith Skill"
							type="inline"
							hideLabel
							bind:selectedId={weaponZenithSkill}
							items={getZenithSkills()}
						/>
						<Dropdown
							titleText="Length"
							type="inline"
							hideLabel
							bind:selectedId={weaponLength}
							items={[
								{ id: 'Very Short', text: 'Very Short' },
								{ id: 'Short', text: 'Short' },
								{ id: 'Medium', text: 'Medium' },
								{ id: 'Long', text: 'Long' },
								{ id: 'Very Long', text: 'Very Long' },
							]}
						/>
						<Dropdown
							titleText="Element"
							type="inline"
							hideLabel
							bind:selectedId={weaponElementType}
							items={[
								{ id: '', text: 'None' },
								{ id: 'Fire', text: 'Fire' },
								{ id: 'Water', text: 'Water' },
								{ id: 'Thunder', text: 'Thunder' },
								{ id: 'Ice', text: 'Ice' },
								{ id: 'Dragon', text: 'Dragon' },
								{ id: 'Light', text: 'Light' },
								{ id: 'Dark', text: 'Dark' },
								{ id: 'Blaze', text: 'Blaze' },
								{ id: 'L. Rod', text: 'Lightning Rod' },
								{ id: 'Tenshou', text: 'Tenshou' },
								{ id: 'Okiko', text: 'Okiko' },
								{ id: 'Music', text: 'Music' },
								{ id: 'Sound', text: 'Sound' },
								{ id: 'Wind', text: 'Wind' },
								{ id: 'B. Flame', text: 'Black Flame' },
								{ id: 'C. Demon', text: 'Crimson Demon' },
								{ id: 'E. Roar', text: "Emperor's Roar" },
								{ id: 'B. Zero', text: 'Burning Zero' },
							]}
						/>
						<Dropdown
							titleText="Status"
							type="inline"
							hideLabel
							bind:selectedId={weaponStatusType}
							items={[
								{ id: '', text: 'None' },
								{ id: 'Poison', text: 'Poison' },
								{ id: 'Paralysis', text: 'Paralysis' },
								{ id: 'Sleep', text: 'Sleep' },
								{ id: 'Blast', text: 'Blast' },
								{ id: 'Def', text: 'Defense' },
							]}
						/>
					</div>
					{#if frontierMappers.getWeaponNameById(weaponTypeId) === 'Hunting Horn'}
						<Dropdown
							titleText="Hunting Horn Notes"
							type="inline"
							hideLabel
							bind:selectedId={huntingHornNotes}
							items={getHHNotes()}
						/>
					{:else if frontierMappers.getWeaponNameById(weaponTypeId) === 'Switch Axe F'}
						<Dropdown
							titleText="Switch Axe F Phial"
							type="inline"
							hideLabel
							bind:selectedId={safPhial}
							items={[
								{ id: 'Stun', text: 'Stun' },
								{ id: 'Power', text: 'Power' },
								{ id: 'Ele', text: 'Element' },
								{ id: 'Status', text: 'Status' },
							]}
						/>
					{:else if frontierMappers.getWeaponNameById(weaponTypeId) === 'Gunlance'}
						<Dropdown
							titleText="Shell Type"
							type="inline"
							hideLabel
							bind:selectedId={gunlanceShellType}
							items={[
								{ id: 'Spread', text: 'Spread' },
								{ id: 'Long', text: 'Long' },
								{ id: 'Normal', text: 'Normal' },
							]}
						/>
						<NumberInput
							size="sm"
							step={1}
							min={minimumGunlanceShellLevel}
							max={maximumGunlanceShellLevel}
							bind:value={gunlanceShellLevel}
							invalidText={invalidGunlanceShellLevelText}
							label={'Shell Level'}
						/>
					{:else if frontierMappers.getWeaponNameById(weaponTypeId) === 'Bow'}
						<Dropdown
							titleText="Bow Arc"
							type="inline"
							hideLabel
							bind:selectedId={bowArc}
							items={[
								{ id: 'Wide', text: 'Wide' },
								{ id: 'Narrow', text: 'Narrow' },
								{ id: 'Bomb', text: 'Bomb' },
								{ id: 'Slicing', text: 'Slicing' },
							]}
						/>
					{:else if frontierMappers.getWeaponNameById(weaponTypeId) === 'Heavy Bowgun'}
						<Dropdown
							titleText="Reload Speed"
							type="inline"
							hideLabel
							bind:selectedId={bowgunReload}
							items={[
								{ id: 'Very Slow', text: 'Very Slow' },
								{ id: 'Slow', text: 'Slow' },
								{ id: 'Normal', text: 'Normal' },
								{ id: 'Fast', text: 'Fast' },
								{ id: 'Very Fast', text: 'Very Fast' },
							]}
						/>
						<Dropdown
							titleText="Recoil"
							type="inline"
							hideLabel
							bind:selectedId={bowgunRecoil}
							items={[
								{ id: 'Medium', text: 'Medium' },
								{ id: 'Small', text: 'Small' },
								{ id: 'Smaller', text: 'Smaller' },
							]}
						/>
						<Dropdown
							titleText="Scope"
							type="inline"
							hideLabel
							bind:selectedId={bowgunScope}
							items={[
								{ id: 'Fixed', text: 'Fixed' },
								{ id: 'Zoom', text: 'Zoom' },
							]}
						/>
						<Dropdown
							titleText="Upgrade"
							type="inline"
							hideLabel
							bind:selectedId={heavyBowgunUpgrade}
							items={[
								{ id: '', text: 'None' },
								{ id: 'Shield', text: 'Shield' },
								{ id: 'Power Barrel', text: 'Power Barrel' },
								{ id: 'Heavy Barrel', text: 'Heavy Barrel' },
								{ id: 'Heat Beam', text: 'Heat Beam' },
							]}
						/>
						<NumberInput
							size="sm"
							step={1}
							min={minimumBowgunAttackLevel}
							max={maximumBowgunAttackLevel}
							bind:value={bowgunAttackLevel}
							invalidText={invalidBowgunAttackLevelText}
							label={'Attack Level'}
						/>
					{:else if frontierMappers.getWeaponNameById(weaponTypeId) === 'Light Bowgun'}
						<Dropdown
							titleText="Reload Speed"
							type="inline"
							hideLabel
							bind:selectedId={bowgunReload}
							items={[
								{ id: 'Very Slow', text: 'Very Slow' },
								{ id: 'Slow', text: 'Slow' },
								{ id: 'Normal', text: 'Normal' },
								{ id: 'Fast', text: 'Fast' },
								{ id: 'Very Fast', text: 'Very Fast' },
							]}
						/>
						<Dropdown
							titleText="Recoil"
							type="inline"
							hideLabel
							bind:selectedId={bowgunRecoil}
							items={[
								{ id: 'Medium', text: 'Medium' },
								{ id: 'Small', text: 'Small' },
								{ id: 'Smaller', text: 'Smaller' },
							]}
						/>
						<Dropdown
							titleText="Scope"
							type="inline"
							hideLabel
							bind:selectedId={bowgunScope}
							items={[
								{ id: 'Fixed', text: 'Fixed' },
								{ id: 'Zoom', text: 'Zoom' },
							]}
						/>
						<Dropdown
							titleText="Upgrade"
							type="inline"
							hideLabel
							bind:selectedId={lightBowgunUpgrade}
							items={[
								{ id: '', text: 'None' },
								{ id: 'Silencer', text: 'Silencer' },
								{ id: 'Long Barrel', text: 'Long Barrel' },
							]}
						/>
						<NumberInput
							size="sm"
							step={1}
							min={minimumBowgunAttackLevel}
							max={maximumBowgunAttackLevel}
							bind:value={bowgunAttackLevel}
							invalidText={invalidBowgunAttackLevelText}
							label={'Attack Level'}
						/>
					{/if}
				</div>
			{:else if currentWeaponPage === 2}
				<div class="page-2-blademaster">
					<TextInput
						labelText="Description"
						placeholder="Enter weapon description"
						hideLabel
						bind:value={weaponDescription}
					/>
					<Dropdown
						titleText="Type"
						type="inline"
						hideLabel
						bind:selectedId={weaponType}
						items={[
							{ id: 'Standard', text: 'Standard' },
							{ id: 'SP', text: 'SP' },
							{ id: 'HC', text: 'HC' },
							{ id: "Master's Mark", text: "Master's Mark" },
							{ id: 'Evolution', text: 'Evolution' },
							{ id: 'Gou', text: 'Gou' },
							{ id: 'Heavenly Storm', text: 'Heavenly Storm' },
							{ id: 'Supremacy', text: 'Supremacy' },
							{ id: 'G Supremacy', text: 'G Supremacy' },
							{ id: 'Burst', text: 'Burst' },
							{ id: 'Origin', text: 'Origin' },
							{ id: 'G Rank', text: 'G Rank' },
							{ id: 'G Rank Finesse', text: 'G Rank Finesse' },
							{ id: 'Tower', text: 'Tower' },
							{ id: 'Exotic', text: 'Exotic' },
							{ id: 'Prayer', text: 'Prayer' },
							{ id: 'Zenith', text: 'Zenith' },
							{ id: 'Z Finesse', text: 'Z Finesse' },
						]}
					/>
					<NumberInput
						size="sm"
						step={1}
						min={minimumWeaponAffinity}
						max={maximumWeaponAffinity}
						bind:value={weaponAffinity}
						invalidText={invalidWeaponAffinityText}
						label={'Affinity'}
					/>
					<Dropdown
						titleText="Automatic Skill"
						type="inline"
						hideLabel
						bind:selectedId={weaponAutomaticSkill}
						items={getArmorSkills()}
					/>
				</div>
			{:else if currentWeaponPage === 3}
				{#if frontierMappers.getWeaponNameById(weaponTypeId) === 'Bow'}
					<div class="page-3-bow">
						<Dropdown
							titleText="Bow Charge 1"
							type="inline"
							hideLabel
							bind:selectedId={bowChargeType1}
							items={[
								{ id: 'Pierce', text: 'Pierce' },
								{ id: 'Rapid', text: 'Rapid' },
								{ id: 'Spread', text: 'Spread' },
								{ id: 'Rising', text: 'Rising' },
							]}
						/>
						<NumberInput
							size="sm"
							step={1}
							min={minimumBowChargeLevel}
							max={maximumBowChargeLevel}
							bind:value={bowChargeLevel1}
							invalidText={invalidBowChargeLevelText}
							label={'Charge Level 1'}
						/>
						<Dropdown
							titleText="Bow Charge 2"
							type="inline"
							hideLabel
							bind:selectedId={bowChargeType2}
							items={[
								{ id: 'Pierce', text: 'Pierce' },
								{ id: 'Rapid', text: 'Rapid' },
								{ id: 'Spread', text: 'Spread' },
								{ id: 'Rising', text: 'Rising' },
							]}
						/>
						<NumberInput
							size="sm"
							step={1}
							min={minimumBowChargeLevel}
							max={maximumBowChargeLevel}
							bind:value={bowChargeLevel2}
							invalidText={invalidBowChargeLevelText}
							label={'Charge Level 2'}
						/>
						<Dropdown
							titleText="Bow Charge 3"
							type="inline"
							hideLabel
							bind:selectedId={bowChargeType3}
							items={[
								{ id: 'Pierce', text: 'Pierce' },
								{ id: 'Rapid', text: 'Rapid' },
								{ id: 'Spread', text: 'Spread' },
								{ id: 'Rising', text: 'Rising' },
							]}
						/>
						<NumberInput
							size="sm"
							step={1}
							min={minimumBowChargeLevel}
							max={maximumBowChargeLevel}
							bind:value={bowChargeLevel3}
							invalidText={invalidBowChargeLevelText}
							label={'Charge Level 3'}
						/>
					</div>
				{:else if frontierMappers.getWeaponNameById(weaponTypeId) === 'Light Bowgun' || frontierMappers.getWeaponNameById(weaponTypeId) === 'Heavy Bowgun'}
					<div class="page-3-bowgun">
						<NumberInput
							size="sm"
							step={1}
							min={minimumBowgunAmmo}
							max={maximumBowgunAmmo}
							bind:value={bowgunNormalAmmo[0]}
							invalidText={invalidBowgunAmmoText}
							label={'Normal LV1'}
						/>
						<NumberInput
							size="sm"
							step={1}
							min={minimumBowgunAmmo}
							max={maximumBowgunAmmo}
							bind:value={bowgunNormalAmmo[1]}
							invalidText={invalidBowgunAmmoText}
							label={'Normal LV2'}
						/>
						<NumberInput
							size="sm"
							step={1}
							min={minimumBowgunAmmo}
							max={maximumBowgunAmmo}
							bind:value={bowgunNormalAmmo[2]}
							invalidText={invalidBowgunAmmoText}
							label={'Normal LV3'}
						/>
						<NumberInput
							size="sm"
							step={1}
							min={minimumBowgunAmmo}
							max={maximumBowgunAmmo}
							bind:value={bowgunPierceAmmo[0]}
							invalidText={invalidBowgunAmmoText}
							label={'Pierce LV1'}
						/>
						<NumberInput
							size="sm"
							step={1}
							min={minimumBowgunAmmo}
							max={maximumBowgunAmmo}
							bind:value={bowgunPierceAmmo[1]}
							invalidText={invalidBowgunAmmoText}
							label={'Pierce LV2'}
						/>
						<NumberInput
							size="sm"
							step={1}
							min={minimumBowgunAmmo}
							max={maximumBowgunAmmo}
							bind:value={bowgunPierceAmmo[2]}
							invalidText={invalidBowgunAmmoText}
							label={'Pierce LV3'}
						/>
						<NumberInput
							size="sm"
							step={1}
							min={minimumBowgunAmmo}
							max={maximumBowgunAmmo}
							bind:value={bowgunPelletAmmo[0]}
							invalidText={invalidBowgunAmmoText}
							label={'Pellet LV1'}
						/>
						<NumberInput
							size="sm"
							step={1}
							min={minimumBowgunAmmo}
							max={maximumBowgunAmmo}
							bind:value={bowgunPelletAmmo[1]}
							invalidText={invalidBowgunAmmoText}
							label={'Pellet LV2'}
						/>
						<NumberInput
							size="sm"
							step={1}
							min={minimumBowgunAmmo}
							max={maximumBowgunAmmo}
							bind:value={bowgunPelletAmmo[2]}
							invalidText={invalidBowgunAmmoText}
							label={'Pellet LV3'}
						/>
						<NumberInput
							size="sm"
							step={1}
							min={minimumBowgunAmmo}
							max={maximumBowgunAmmo}
							bind:value={bowgunCragAmmo[0]}
							invalidText={invalidBowgunAmmoText}
							label={'Crag LV1'}
						/>
						<NumberInput
							size="sm"
							step={1}
							min={minimumBowgunAmmo}
							max={maximumBowgunAmmo}
							bind:value={bowgunCragAmmo[1]}
							invalidText={invalidBowgunAmmoText}
							label={'Crag LV2'}
						/>
						<NumberInput
							size="sm"
							step={1}
							min={minimumBowgunAmmo}
							max={maximumBowgunAmmo}
							bind:value={bowgunCragAmmo[2]}
							invalidText={invalidBowgunAmmoText}
							label={'Crag LV3'}
						/>
						<NumberInput
							size="sm"
							step={1}
							min={minimumBowgunAmmo}
							max={maximumBowgunAmmo}
							bind:value={bowgunClusterAmmo[0]}
							invalidText={invalidBowgunAmmoText}
							label={'Cluster LV1'}
						/>
						<NumberInput
							size="sm"
							step={1}
							min={minimumBowgunAmmo}
							max={maximumBowgunAmmo}
							bind:value={bowgunClusterAmmo[1]}
							invalidText={invalidBowgunAmmoText}
							label={'Cluster LV2'}
						/>
						<NumberInput
							size="sm"
							step={1}
							min={minimumBowgunAmmo}
							max={maximumBowgunAmmo}
							bind:value={bowgunClusterAmmo[2]}
							invalidText={invalidBowgunAmmoText}
							label={'Cluster LV3'}
						/>
						<NumberInput
							size="sm"
							step={1}
							min={minimumBowgunAmmo}
							max={maximumBowgunAmmo}
							bind:value={bowgunRecoveryAmmo[0]}
							invalidText={invalidBowgunAmmoText}
							label={'Recovery LV1'}
						/>
						<NumberInput
							size="sm"
							step={1}
							min={minimumBowgunAmmo}
							max={maximumBowgunAmmo}
							bind:value={bowgunRecoveryAmmo[1]}
							invalidText={invalidBowgunAmmoText}
							label={'Recovery LV2'}
						/>
						<NumberInput
							size="sm"
							step={1}
							min={minimumBowgunAmmo}
							max={maximumBowgunAmmo}
							bind:value={bowgunRecoveryAmmo[2]}
							invalidText={invalidBowgunAmmoText}
							label={'Recovery LV3'}
						/>
						<NumberInput
							size="sm"
							step={1}
							min={minimumBowgunAmmo}
							max={maximumBowgunAmmo}
							bind:value={bowgunPoisonAmmo[0]}
							invalidText={invalidBowgunAmmoText}
							label={'Poison LV1'}
						/>
						<NumberInput
							size="sm"
							step={1}
							min={minimumBowgunAmmo}
							max={maximumBowgunAmmo}
							bind:value={bowgunPoisonAmmo[1]}
							invalidText={invalidBowgunAmmoText}
							label={'Poison LV2'}
						/>
						<NumberInput
							size="sm"
							step={1}
							min={minimumBowgunAmmo}
							max={maximumBowgunAmmo}
							bind:value={bowgunPoisonAmmo[2]}
							invalidText={invalidBowgunAmmoText}
							label={'Poison LV3'}
						/>
						<NumberInput
							size="sm"
							step={1}
							min={minimumBowgunAmmo}
							max={maximumBowgunAmmo}
							bind:value={bowgunParalysisAmmo[0]}
							invalidText={invalidBowgunAmmoText}
							label={'Paralysis LV1'}
						/>
						<NumberInput
							size="sm"
							step={1}
							min={minimumBowgunAmmo}
							max={maximumBowgunAmmo}
							bind:value={bowgunParalysisAmmo[1]}
							invalidText={invalidBowgunAmmoText}
							label={'Paralysis LV2'}
						/>
						<NumberInput
							size="sm"
							step={1}
							min={minimumBowgunAmmo}
							max={maximumBowgunAmmo}
							bind:value={bowgunParalysisAmmo[2]}
							invalidText={invalidBowgunAmmoText}
							label={'Paralysis LV3'}
						/>
						<NumberInput
							size="sm"
							step={1}
							min={minimumBowgunAmmo}
							max={maximumBowgunAmmo}
							bind:value={bowgunSleepAmmo[0]}
							invalidText={invalidBowgunAmmoText}
							label={'Sleep LV1'}
						/>
						<NumberInput
							size="sm"
							step={1}
							min={minimumBowgunAmmo}
							max={maximumBowgunAmmo}
							bind:value={bowgunSleepAmmo[1]}
							invalidText={invalidBowgunAmmoText}
							label={'Sleep LV2'}
						/>
						<NumberInput
							size="sm"
							step={1}
							min={minimumBowgunAmmo}
							max={maximumBowgunAmmo}
							bind:value={bowgunSleepAmmo[2]}
							invalidText={invalidBowgunAmmoText}
							label={'Sleep LV3'}
						/>
					</div>
				{:else}
					<div class="page-3-blademaster" />
				{/if}
			{:else if currentWeaponPage === 4}
				{#if frontierMappers.getWeaponNameById(weaponTypeId) === 'Bow'}
					<div class="page-4-bow">
						<div class="bow-coatings">
							<Checkbox
								labelText="Power Coating"
								bind:checked={bowPowerCoatingAvailable}
							/>
							<Checkbox
								labelText="Poison Coating"
								bind:checked={bowPoisonCoatingAvailable}
							/>
							<Checkbox
								labelText="Paralysis Coating"
								bind:checked={bowParalysisCoatingAvailable}
							/>
							<Checkbox
								labelText="Sleep Coating"
								bind:checked={bowSleepCoatingAvailable}
							/>
							<Checkbox
								labelText="Impact Coating"
								bind:checked={bowImpactCoatingAvailable}
							/>
						</div>
					</div>
				{:else if frontierMappers.getWeaponNameById(weaponTypeId) === 'Light Bowgun' || frontierMappers.getWeaponNameById(weaponTypeId) === 'Heavy Bowgun'}
					<div class="page-4-bowgun">
						<NumberInput
							size="sm"
							step={1}
							min={minimumBowgunAmmo}
							max={maximumBowgunAmmo}
							bind:value={bowgunFlamingAmmo[0]}
							invalidText={invalidBowgunAmmoText}
							label={'Flaming LV1'}
						/>
						<NumberInput
							size="sm"
							step={1}
							min={minimumBowgunAmmo}
							max={maximumBowgunAmmo}
							bind:value={bowgunFlamingAmmo[1]}
							invalidText={invalidBowgunAmmoText}
							label={'Flaming LV2'}
						/>
						<NumberInput
							size="sm"
							step={1}
							min={minimumBowgunAmmo}
							max={maximumBowgunAmmo}
							bind:value={bowgunFlamingAmmo[2]}
							invalidText={invalidBowgunAmmoText}
							label={'Flaming LV3'}
						/>
						<NumberInput
							size="sm"
							step={1}
							min={minimumBowgunAmmo}
							max={maximumBowgunAmmo}
							bind:value={bowgunWaterAmmo[0]}
							invalidText={invalidBowgunAmmoText}
							label={'Water LV1'}
						/>
						<NumberInput
							size="sm"
							step={1}
							min={minimumBowgunAmmo}
							max={maximumBowgunAmmo}
							bind:value={bowgunWaterAmmo[1]}
							invalidText={invalidBowgunAmmoText}
							label={'Water LV2'}
						/>
						<NumberInput
							size="sm"
							step={1}
							min={minimumBowgunAmmo}
							max={maximumBowgunAmmo}
							bind:value={bowgunWaterAmmo[2]}
							invalidText={invalidBowgunAmmoText}
							label={'Water LV3'}
						/>
						<NumberInput
							size="sm"
							step={1}
							min={minimumBowgunAmmo}
							max={maximumBowgunAmmo}
							bind:value={bowgunThunderAmmo[0]}
							invalidText={invalidBowgunAmmoText}
							label={'Thunder LV1'}
						/>
						<NumberInput
							size="sm"
							step={1}
							min={minimumBowgunAmmo}
							max={maximumBowgunAmmo}
							bind:value={bowgunThunderAmmo[1]}
							invalidText={invalidBowgunAmmoText}
							label={'Thunder LV2'}
						/>
						<NumberInput
							size="sm"
							step={1}
							min={minimumBowgunAmmo}
							max={maximumBowgunAmmo}
							bind:value={bowgunThunderAmmo[2]}
							invalidText={invalidBowgunAmmoText}
							label={'Thunder LV3'}
						/>
						<NumberInput
							size="sm"
							step={1}
							min={minimumBowgunAmmo}
							max={maximumBowgunAmmo}
							bind:value={bowgunFreezeAmmo[0]}
							invalidText={invalidBowgunAmmoText}
							label={'Freeze LV1'}
						/>
						<NumberInput
							size="sm"
							step={1}
							min={minimumBowgunAmmo}
							max={maximumBowgunAmmo}
							bind:value={bowgunFreezeAmmo[1]}
							invalidText={invalidBowgunAmmoText}
							label={'Freeze LV2'}
						/>
						<NumberInput
							size="sm"
							step={1}
							min={minimumBowgunAmmo}
							max={maximumBowgunAmmo}
							bind:value={bowgunFreezeAmmo[2]}
							invalidText={invalidBowgunAmmoText}
							label={'Freeze LV3'}
						/>
						<NumberInput
							size="sm"
							step={1}
							min={minimumBowgunAmmo}
							max={maximumBowgunAmmo}
							bind:value={bowgunDragonAmmo[0]}
							invalidText={invalidBowgunAmmoText}
							label={'Dragon LV1'}
						/>
						<NumberInput
							size="sm"
							step={1}
							min={minimumBowgunAmmo}
							max={maximumBowgunAmmo}
							bind:value={bowgunDragonAmmo[1]}
							invalidText={invalidBowgunAmmoText}
							label={'Dragon LV2'}
						/>
						<NumberInput
							size="sm"
							step={1}
							min={minimumBowgunAmmo}
							max={maximumBowgunAmmo}
							bind:value={bowgunDragonAmmo[2]}
							invalidText={invalidBowgunAmmoText}
							label={'Dragon LV3'}
						/>
						<NumberInput
							size="sm"
							step={1}
							min={minimumBowgunAmmo}
							max={maximumBowgunAmmo}
							bind:value={bowgunTranqAmmo[0]}
							invalidText={invalidBowgunAmmoText}
							label={'Tranq LV1'}
						/>
						<NumberInput
							size="sm"
							step={1}
							min={minimumBowgunAmmo}
							max={maximumBowgunAmmo}
							bind:value={bowgunTranqAmmo[1]}
							invalidText={invalidBowgunAmmoText}
							label={'Tranq LV2'}
						/>
						<NumberInput
							size="sm"
							step={1}
							min={minimumBowgunAmmo}
							max={maximumBowgunAmmo}
							bind:value={bowgunTranqAmmo[2]}
							invalidText={invalidBowgunAmmoText}
							label={'Tranq LV3'}
						/>
						<NumberInput
							size="sm"
							step={1}
							min={minimumBowgunAmmo}
							max={maximumBowgunAmmo}
							bind:value={bowgunPaintAmmo[0]}
							invalidText={invalidBowgunAmmoText}
							label={'Paint LV1'}
						/>
						<NumberInput
							size="sm"
							step={1}
							min={minimumBowgunAmmo}
							max={maximumBowgunAmmo}
							bind:value={bowgunPaintAmmo[1]}
							invalidText={invalidBowgunAmmoText}
							label={'Paint LV2'}
						/>
						<NumberInput
							size="sm"
							step={1}
							min={minimumBowgunAmmo}
							max={maximumBowgunAmmo}
							bind:value={bowgunPaintAmmo[2]}
							invalidText={invalidBowgunAmmoText}
							label={'Paint LV3'}
						/>
						<NumberInput
							size="sm"
							step={1}
							min={minimumBowgunAmmo}
							max={maximumBowgunAmmo}
							bind:value={bowgunDemonAmmo[0]}
							invalidText={invalidBowgunAmmoText}
							label={'Demon LV1'}
						/>
						<NumberInput
							size="sm"
							step={1}
							min={minimumBowgunAmmo}
							max={maximumBowgunAmmo}
							bind:value={bowgunDemonAmmo[1]}
							invalidText={invalidBowgunAmmoText}
							label={'Demon LV2'}
						/>
						<NumberInput
							size="sm"
							step={1}
							min={minimumBowgunAmmo}
							max={maximumBowgunAmmo}
							bind:value={bowgunDemonAmmo[2]}
							invalidText={invalidBowgunAmmoText}
							label={'Demon LV3'}
						/>
						<NumberInput
							size="sm"
							step={1}
							min={minimumBowgunAmmo}
							max={maximumBowgunAmmo}
							bind:value={bowgunArmorAmmo[0]}
							invalidText={invalidBowgunAmmoText}
							label={'Armor LV1'}
						/>
						<NumberInput
							size="sm"
							step={1}
							min={minimumBowgunAmmo}
							max={maximumBowgunAmmo}
							bind:value={bowgunArmorAmmo[1]}
							invalidText={invalidBowgunAmmoText}
							label={'Armor LV2'}
						/>
						<NumberInput
							size="sm"
							step={1}
							min={minimumBowgunAmmo}
							max={maximumBowgunAmmo}
							bind:value={bowgunArmorAmmo[2]}
							invalidText={invalidBowgunAmmoText}
							label={'Armor LV3'}
						/>
					</div>
				{:else}
					<div class="page-4-blademaster">
						<div class="sigils">
							<Dropdown
								titleText="Type"
								type="inline"
								hideLabel
								bind:selectedId={weaponSigil1Id}
								items={getSigilSkills()}
							/>
							<NumberInput
								size="sm"
								step={1}
								min={minimumSigilPoints}
								max={maximumSigilPoints}
								bind:value={weaponSigil1Value}
								invalidText={invalidWeaponSigilValueText}
								label={'Sigil 1'}
							/>
							<Dropdown
								titleText="Type"
								type="inline"
								hideLabel
								bind:selectedId={weaponSigil2Id}
								items={getSigilSkills()}
							/>
							<NumberInput
								size="sm"
								step={1}
								min={minimumSigilPoints}
								max={maximumSigilPoints}
								bind:value={weaponSigil2Value}
								invalidText={invalidWeaponSigilValueText}
								label={'Sigil 2'}
							/>
							<Dropdown
								titleText="Type"
								type="inline"
								hideLabel
								bind:selectedId={weaponSigil3Id}
								items={getSigilSkills()}
							/>
							<NumberInput
								size="sm"
								step={1}
								min={minimumSigilPoints}
								max={maximumSigilPoints}
								bind:value={weaponSigil3Value}
								invalidText={invalidWeaponSigilValueText}
								label={'Sigil 3'}
							/>
						</div>
					</div>
				{/if}
			{:else if currentWeaponPage === 5}
				{#if frontierMappers.getWeaponClassById(weaponTypeId) === 'Gunner'}
					<div class="page-5-gunner" />
				{:else}
					<div class="page-5-blademaster">
						<div class="sigils">
							<Dropdown
								titleText="Type"
								type="inline"
								hideLabel
								bind:selectedId={weaponSigil4Id}
								items={getSigilSkills()}
							/>
							<NumberInput
								size="sm"
								step={1}
								min={minimumSigilPoints}
								max={maximumSigilPoints}
								bind:value={weaponSigil4Value}
								invalidText={invalidWeaponSigilValueText}
								label={'Sigil 4'}
							/>
							<Dropdown
								titleText="Type"
								type="inline"
								hideLabel
								bind:selectedId={weaponSigil5Id}
								items={getSigilSkills()}
							/>
							<NumberInput
								size="sm"
								step={1}
								min={minimumSigilPoints}
								max={maximumSigilPoints}
								bind:value={weaponSigil5Value}
								invalidText={invalidWeaponSigilValueText}
								label={'Sigil 5'}
							/>
							<Dropdown
								titleText="Type"
								type="inline"
								hideLabel
								bind:selectedId={weaponSigil6Id}
								items={getSigilSkills()}
							/>
							<NumberInput
								size="sm"
								step={1}
								min={minimumSigilPoints}
								max={maximumSigilPoints}
								bind:value={weaponSigil6Value}
								invalidText={invalidWeaponSigilValueText}
								label={'Sigil 6'}
							/>
						</div>
					</div>
				{/if}
			{:else if currentWeaponPage === 6}
				{#if frontierMappers.getWeaponClassById(weaponTypeId) === 'Gunner'}
					<div class="page-6-gunner">
						<div class="sigils">
							<Dropdown
								titleText="Type"
								type="inline"
								hideLabel
								bind:selectedId={weaponSigil1Id}
								items={getSigilSkills()}
							/>
							<NumberInput
								size="sm"
								step={1}
								min={minimumSigilPoints}
								max={maximumSigilPoints}
								bind:value={weaponSigil1Value}
								invalidText={invalidWeaponSigilValueText}
								label={'Sigil 1'}
							/>
							<Dropdown
								titleText="Type"
								type="inline"
								hideLabel
								bind:selectedId={weaponSigil2Id}
								items={getSigilSkills()}
							/>
							<NumberInput
								size="sm"
								step={1}
								min={minimumSigilPoints}
								max={maximumSigilPoints}
								bind:value={weaponSigil2Value}
								invalidText={invalidWeaponSigilValueText}
								label={'Sigil 2'}
							/>
							<Dropdown
								titleText="Type"
								type="inline"
								hideLabel
								bind:selectedId={weaponSigil3Id}
								items={getSigilSkills()}
							/>
							<NumberInput
								size="sm"
								step={1}
								min={minimumSigilPoints}
								max={maximumSigilPoints}
								bind:value={weaponSigil3Value}
								invalidText={invalidWeaponSigilValueText}
								label={'Sigil 3'}
							/>
						</div>
					</div>
				{:else}
					<div class="page-6-blademaster">
						<div class="sigils">
							<Dropdown
								titleText="Type"
								type="inline"
								hideLabel
								bind:selectedId={weaponSigil7Id}
								items={getSigilSkills()}
							/>
							<NumberInput
								size="sm"
								step={1}
								min={minimumSigilPoints}
								max={maximumSigilPoints}
								bind:value={weaponSigil7Value}
								invalidText={invalidWeaponSigilValueText}
								label={'Sigil 7'}
							/>
							<Dropdown
								titleText="Type"
								type="inline"
								hideLabel
								bind:selectedId={weaponSigil8Id}
								items={getSigilSkills()}
							/>
							<NumberInput
								size="sm"
								step={1}
								min={minimumSigilPoints}
								max={maximumSigilPoints}
								bind:value={weaponSigil8Value}
								invalidText={invalidWeaponSigilValueText}
								label={'Sigil 8'}
							/>
							<Dropdown
								titleText="Type"
								type="inline"
								hideLabel
								bind:selectedId={weaponSigil9Id}
								items={getSigilSkills()}
							/>
							<NumberInput
								size="sm"
								step={1}
								min={minimumSigilPoints}
								max={maximumSigilPoints}
								bind:value={weaponSigil9Value}
								invalidText={invalidWeaponSigilValueText}
								label={'Sigil 9'}
							/>
						</div>
					</div>
				{/if}
			{:else if currentWeaponPage === 7}
				<div class="page-7-gunner">
					<div class="sigils">
						<Dropdown
							titleText="Type"
							type="inline"
							hideLabel
							bind:selectedId={weaponSigil4Id}
							items={getSigilSkills()}
						/>
						<NumberInput
							size="sm"
							step={1}
							min={minimumSigilPoints}
							max={maximumSigilPoints}
							bind:value={weaponSigil4Value}
							invalidText={invalidWeaponSigilValueText}
							label={'Sigil 4'}
						/>
						<Dropdown
							titleText="Type"
							type="inline"
							hideLabel
							bind:selectedId={weaponSigil5Id}
							items={getSigilSkills()}
						/>
						<NumberInput
							size="sm"
							step={1}
							min={minimumSigilPoints}
							max={maximumSigilPoints}
							bind:value={weaponSigil5Value}
							invalidText={invalidWeaponSigilValueText}
							label={'Sigil 5'}
						/>
						<Dropdown
							titleText="Type"
							type="inline"
							hideLabel
							bind:selectedId={weaponSigil6Id}
							items={getSigilSkills()}
						/>
						<NumberInput
							size="sm"
							step={1}
							min={minimumSigilPoints}
							max={maximumSigilPoints}
							bind:value={weaponSigil6Value}
							invalidText={invalidWeaponSigilValueText}
							label={'Sigil 6'}
						/>
					</div>
				</div>
			{:else if currentWeaponPage === 8}
				<div class="page-8-gunner">
					<div class="sigils">
						<Dropdown
							titleText="Type"
							type="inline"
							hideLabel
							bind:selectedId={weaponSigil7Id}
							items={getSigilSkills()}
						/>
						<NumberInput
							size="sm"
							step={1}
							min={minimumSigilPoints}
							max={maximumSigilPoints}
							bind:value={weaponSigil7Value}
							invalidText={invalidWeaponSigilValueText}
							label={'Sigil 7'}
						/>
						<Dropdown
							titleText="Type"
							type="inline"
							hideLabel
							bind:selectedId={weaponSigil8Id}
							items={getSigilSkills()}
						/>
						<NumberInput
							size="sm"
							step={1}
							min={minimumSigilPoints}
							max={maximumSigilPoints}
							bind:value={weaponSigil8Value}
							invalidText={invalidWeaponSigilValueText}
							label={'Sigil 8'}
						/>
						<Dropdown
							titleText="Type"
							type="inline"
							hideLabel
							bind:selectedId={weaponSigil9Id}
							items={getSigilSkills()}
						/>
						<NumberInput
							size="sm"
							step={1}
							min={minimumSigilPoints}
							max={maximumSigilPoints}
							bind:value={weaponSigil9Value}
							invalidText={invalidWeaponSigilValueText}
							label={'Sigil 9'}
						/>
					</div>
				</div>
			{/if}
		</div>
	</section>

	<section>
		<SectionHeading level={2} title="Armor" />
		<div class="container-armor-buttons">
			<Button kind="tertiary" icon={Download} on:click={downloadArmorImage}
				>Download</Button
			>

			<Button kind="tertiary" icon={Restart} on:click={resetArmorValues}
				>Restore values</Button
			>
			<!-- TODO <Toggle labelText="Extra Icons" bind:toggled={armorExtraIcons} /> -->
		</div>
		<div class="container-armor">
			<div class="armor-info">
				{#key armorRarity}
					<div id="armor-dom">
						<Armor
							skillNames={armorSkillTreeNames}
							GRLevel={armorGRLevel}
							{armorClass}
							rank={armorRank}
							skillPoints={armorSkillPoints}
							transmog={armorTransmog}
							automaticSkill={armorAutomaticSkill}
							decorations={armorDecorations}
							extraIcons={armorExtraIcons}
							bind:currentPage={currentArmorPage}
							name={armorName}
							armorID={frontierMappers.getArmorIdFromString(armorID)}
							defense={armorDefense}
							level={armorLevel}
							rarity={armorRarity >= 1 && armorRarity <= 12 ? armorRarity : 1}
							zenithSkill={armorZenithSkill}
							description={armorDescription}
							{armorType}
							fireResistance={armorFireResistance}
							waterResistance={armorWaterResistance}
							iceResistance={armorIceResistance}
							dragonResistance={armorDragonResistance}
							thunderResistance={armorThunderResistance}
						/>
					</div>
				{/key}
			</div>
			<div class="armor-info-values">
				<Dropdown
					titleText="Type"
					type="inline"
					hideLabel
					bind:selectedId={armorID}
					items={[
						{ id: '0', text: 'Head' },
						{ id: '1', text: 'Chest' },
						{ id: '2', text: 'Arms' },
						{ id: '3', text: 'Waist' },
						{ id: '4', text: 'Legs' },
					]}
				/>
				<TextInput
					labelText="Name"
					placeholder="Enter armor name"
					hideLabel
					bind:value={armorName}
				/>

				<NumberInput
					size="sm"
					step={1}
					min={minimumRarity}
					max={maximumRarity}
					bind:value={armorRarity}
					invalidText={invalidWeaponRarityText}
					label={'Rarity'}
				/>

				<Dropdown
					titleText="Rank"
					type="inline"
					hideLabel
					bind:selectedId={armorRank}
					items={[
						{ id: '', text: 'None' },
						{ id: 'G', text: 'G' },
						{ id: 'Z', text: 'Zenith' },
					]}
				/>
			</div>

			{#if currentArmorPage === 1}
				<div class="page-1-armor">
					<NumberInput
						size="sm"
						step={1}
						min={minimumArmorLevel}
						max={maximumArmorLevel}
						bind:value={armorLevel}
						invalidText={invalidArmorLevelText}
						label={'Level'}
					/>
					<NumberInput
						size="sm"
						step={1}
						min={minimumArmorDefense}
						max={maximumArmorDefense}
						bind:value={armorDefense}
						invalidText={invalidArmorDefenseText}
						label={'Defense'}
					/>
					<NumberInput
						size="sm"
						step={1}
						min={minimumArmorElementResistance}
						max={maximumArmorElementResistance}
						bind:value={armorFireResistance}
						invalidText={invalidArmorElementalResistanceText}
						label={'Fire Resistance'}
					/>
					<NumberInput
						size="sm"
						step={1}
						min={minimumArmorElementResistance}
						max={maximumArmorElementResistance}
						bind:value={armorWaterResistance}
						invalidText={invalidArmorElementalResistanceText}
						label={'Water Resistance'}
					/>
					<NumberInput
						size="sm"
						step={1}
						min={minimumArmorElementResistance}
						max={maximumArmorElementResistance}
						bind:value={armorThunderResistance}
						invalidText={invalidArmorElementalResistanceText}
						label={'Thunder Resistance'}
					/>
					<NumberInput
						size="sm"
						step={1}
						min={minimumArmorElementResistance}
						max={maximumArmorElementResistance}
						bind:value={armorIceResistance}
						invalidText={invalidArmorElementalResistanceText}
						label={'Ice Resistance'}
					/>
					<NumberInput
						size="sm"
						step={1}
						min={minimumArmorElementResistance}
						max={maximumArmorElementResistance}
						bind:value={armorDragonResistance}
						invalidText={invalidArmorElementalResistanceText}
						label={'Dragon Resistance'}
					/>
				</div>
			{:else if currentArmorPage === 2}
				<div class="page-2-armor">
					<TextInput
						labelText="Description"
						placeholder="Enter armor description"
						hideLabel
						bind:value={armorDescription}
					/>
					<Dropdown
						titleText="Type"
						type="inline"
						hideLabel
						bind:selectedId={armorType}
						items={[
							{ id: 'Standard', text: 'Standard' },
							{ id: 'SP', text: 'SP' },
							{ id: 'HC', text: 'HC' },
							{ id: 'HS', text: 'HS' },
							{ id: 'G', text: 'G' },
							{ id: 'GS', text: 'GS' },
							{ id: 'GP', text: 'GP' },
							{ id: 'Gou', text: 'Gou' },
							{ id: 'Heavenly Storm', text: 'Heavenly Storm' },
							{ id: 'Supremacy', text: 'Supremacy' },
							{ id: 'G Supremacy', text: 'G Supremacy' },
							{ id: 'Burst', text: 'Burst' },
							{ id: 'Origin', text: 'Origin' },
							{ id: 'Tower', text: 'Tower' },
							{ id: 'Exotic', text: 'Exotic' },
							{ id: 'Zenith', text: 'Zenith' },
						]}
					/>
					<Dropdown
						titleText="Class"
						type="inline"
						hideLabel
						bind:selectedId={armorClass}
						items={[
							{ id: 'Either', text: 'Either' },
							{ id: 'Blademaster', text: 'Blademaster' },
							{ id: 'Gunner', text: 'Gunner' },
						]}
					/>

					<NumberInput
						size="sm"
						step={1}
						min={minimumArmorLevel}
						max={maximumArmorLevel}
						bind:value={armorGRLevel}
						invalidText={invalidArmorGRLevelText}
						label={'GR Level'}
					/>
					<Dropdown
						titleText="Zenith Skill"
						type="inline"
						hideLabel
						bind:selectedId={armorZenithSkill}
						items={getZenithSkills()}
					/>
					<Dropdown
						titleText="Automatic Skill"
						type="inline"
						hideLabel
						bind:selectedId={armorAutomaticSkill}
						items={getArmorSkills()}
					/>
				</div>
			{:else if currentArmorPage === 3}
				<div class="page-3-armor">
					<Dropdown
						titleText="Skill 1"
						type="inline"
						hideLabel
						bind:selectedId={armorSkillTreeNames[0]}
						items={getArmorSkillTree()}
					/>
					<NumberInput
						size="sm"
						step={1}
						min={minimumArmorSkillPoints}
						max={maximumArmorSkillPoints}
						bind:value={armorSkillPoints[0]}
						invalidText={invalidArmorSkillPointsText}
						label={'Skill 1 Points'}
					/>
					<Dropdown
						titleText="Skill 2"
						type="inline"
						hideLabel
						bind:selectedId={armorSkillTreeNames[1]}
						items={getArmorSkillTree()}
					/>
					<NumberInput
						size="sm"
						step={1}
						min={minimumArmorSkillPoints}
						max={maximumArmorSkillPoints}
						bind:value={armorSkillPoints[1]}
						invalidText={invalidArmorSkillPointsText}
						label={'Skill 2 Points'}
					/>
					<Dropdown
						titleText="Skill 3"
						type="inline"
						hideLabel
						bind:selectedId={armorSkillTreeNames[2]}
						items={getArmorSkillTree()}
					/>
					<NumberInput
						size="sm"
						step={1}
						min={minimumArmorSkillPoints}
						max={maximumArmorSkillPoints}
						bind:value={armorSkillPoints[2]}
						invalidText={invalidArmorSkillPointsText}
						label={'Skill 3 Points'}
					/>
					<Dropdown
						titleText="Skill 4"
						type="inline"
						hideLabel
						bind:selectedId={armorSkillTreeNames[3]}
						items={getArmorSkillTree()}
					/>
					<NumberInput
						size="sm"
						step={1}
						min={minimumArmorSkillPoints}
						max={maximumArmorSkillPoints}
						bind:value={armorSkillPoints[3]}
						invalidText={invalidArmorSkillPointsText}
						label={'Skill 4 Points'}
					/>
					<Dropdown
						titleText="Skill 5"
						type="inline"
						hideLabel
						bind:selectedId={armorSkillTreeNames[4]}
						items={getArmorSkillTree()}
					/>
					<NumberInput
						size="sm"
						step={1}
						min={minimumArmorSkillPoints}
						max={maximumArmorSkillPoints}
						bind:value={armorSkillPoints[4]}
						invalidText={invalidArmorSkillPointsText}
						label={'Skill 5 Points'}
					/>
				</div>
			{:else if currentArmorPage === 4}
				<div class="page-4-armor">
					<TextInput
						labelText="Decoration 1 Name"
						placeholder="Enter decoration name"
						hideLabel
						bind:value={armorDecorations.slot1.name}
					/>
					<div class="armor-deco-skills">
						<Dropdown
							titleText="Decoration Skill 1"
							type="inline"
							hideLabel
							bind:selectedId={armorDecorations.slot1.skill1.name}
							items={getArmorSkillTree()}
						/>
						<NumberInput
							size="sm"
							step={1}
							min={minimumArmorSkillPoints}
							max={maximumArmorSkillPoints}
							bind:value={armorDecorations.slot1.skill1.points}
							invalidText={invalidArmorSkillPointsText}
							label={'Decoration Skill 1 Points'}
						/>
						<Dropdown
							titleText="Decoration Skill 2"
							type="inline"
							hideLabel
							bind:selectedId={armorDecorations.slot1.skill2.name}
							items={getArmorSkillTree()}
						/>
						<NumberInput
							size="sm"
							step={1}
							min={minimumArmorSkillPoints}
							max={maximumArmorSkillPoints}
							bind:value={armorDecorations.slot1.skill2.points}
							invalidText={invalidArmorSkillPointsText}
							label={'Decoration Skill 2 Points'}
						/>
						<Dropdown
							titleText="Decoration Skill 3"
							type="inline"
							hideLabel
							bind:selectedId={armorDecorations.slot1.skill3.name}
							items={getArmorSkillTree()}
						/>
						<NumberInput
							size="sm"
							step={1}
							min={minimumArmorSkillPoints}
							max={maximumArmorSkillPoints}
							bind:value={armorDecorations.slot1.skill3.points}
							invalidText={invalidArmorSkillPointsText}
							label={'Decoration Skill 3 Points'}
						/>
						<Dropdown
							titleText="Decoration Skill 4"
							type="inline"
							hideLabel
							bind:selectedId={armorDecorations.slot1.skill4.name}
							items={getArmorSkillTree()}
						/>
						<NumberInput
							size="sm"
							step={1}
							min={minimumArmorSkillPoints}
							max={maximumArmorSkillPoints}
							bind:value={armorDecorations.slot1.skill4.points}
							invalidText={invalidArmorSkillPointsText}
							label={'Decoration Skill 4 Points'}
						/>
					</div>
				</div>
			{:else if currentArmorPage === 5}
				<div class="page-5-armor">
					<TextInput
						labelText="Decoration 2 Name"
						placeholder="Enter decoration name"
						hideLabel
						bind:value={armorDecorations.slot2.name}
					/>
					<div class="armor-deco-skills">
						<Dropdown
							titleText="Decoration Skill 1"
							type="inline"
							hideLabel
							bind:selectedId={armorDecorations.slot2.skill1.name}
							items={getArmorSkillTree()}
						/>
						<NumberInput
							size="sm"
							step={1}
							min={minimumArmorSkillPoints}
							max={maximumArmorSkillPoints}
							bind:value={armorDecorations.slot2.skill1.points}
							invalidText={invalidArmorSkillPointsText}
							label={'Decoration Skill 1 Points'}
						/>
						<Dropdown
							titleText="Decoration Skill 2"
							type="inline"
							hideLabel
							bind:selectedId={armorDecorations.slot2.skill2.name}
							items={getArmorSkillTree()}
						/>
						<NumberInput
							size="sm"
							step={1}
							min={minimumArmorSkillPoints}
							max={maximumArmorSkillPoints}
							bind:value={armorDecorations.slot2.skill2.points}
							invalidText={invalidArmorSkillPointsText}
							label={'Decoration Skill 2 Points'}
						/>
						<Dropdown
							titleText="Decoration Skill 3"
							type="inline"
							hideLabel
							bind:selectedId={armorDecorations.slot2.skill3.name}
							items={getArmorSkillTree()}
						/>
						<NumberInput
							size="sm"
							step={1}
							min={minimumArmorSkillPoints}
							max={maximumArmorSkillPoints}
							bind:value={armorDecorations.slot2.skill3.points}
							invalidText={invalidArmorSkillPointsText}
							label={'Decoration Skill 3 Points'}
						/>
						<Dropdown
							titleText="Decoration Skill 4"
							type="inline"
							hideLabel
							bind:selectedId={armorDecorations.slot2.skill4.name}
							items={getArmorSkillTree()}
						/>
						<NumberInput
							size="sm"
							step={1}
							min={minimumArmorSkillPoints}
							max={maximumArmorSkillPoints}
							bind:value={armorDecorations.slot2.skill4.points}
							invalidText={invalidArmorSkillPointsText}
							label={'Decoration Skill 4 Points'}
						/>
					</div>
				</div>
			{:else if currentArmorPage === 6}
				<div class="page-6-armor">
					<TextInput
						labelText="Decoration 3 Name"
						placeholder="Enter decoration name"
						hideLabel
						bind:value={armorDecorations.slot3.name}
					/>
					<div class="armor-deco-skills">
						<Dropdown
							titleText="Decoration Skill 1"
							type="inline"
							hideLabel
							bind:selectedId={armorDecorations.slot3.skill1.name}
							items={getArmorSkillTree()}
						/>
						<NumberInput
							size="sm"
							step={1}
							min={minimumArmorSkillPoints}
							max={maximumArmorSkillPoints}
							bind:value={armorDecorations.slot3.skill1.points}
							invalidText={invalidArmorSkillPointsText}
							label={'Decoration Skill 1 Points'}
						/>
						<Dropdown
							titleText="Decoration Skill 2"
							type="inline"
							hideLabel
							bind:selectedId={armorDecorations.slot3.skill2.name}
							items={getArmorSkillTree()}
						/>
						<NumberInput
							size="sm"
							step={1}
							min={minimumArmorSkillPoints}
							max={maximumArmorSkillPoints}
							bind:value={armorDecorations.slot3.skill2.points}
							invalidText={invalidArmorSkillPointsText}
							label={'Decoration Skill 2 Points'}
						/>
						<Dropdown
							titleText="Decoration Skill 3"
							type="inline"
							hideLabel
							bind:selectedId={armorDecorations.slot3.skill3.name}
							items={getArmorSkillTree()}
						/>
						<NumberInput
							size="sm"
							step={1}
							min={minimumArmorSkillPoints}
							max={maximumArmorSkillPoints}
							bind:value={armorDecorations.slot3.skill3.points}
							invalidText={invalidArmorSkillPointsText}
							label={'Decoration Skill 3 Points'}
						/>
						<Dropdown
							titleText="Decoration Skill 4"
							type="inline"
							hideLabel
							bind:selectedId={armorDecorations.slot3.skill4.name}
							items={getArmorSkillTree()}
						/>
						<NumberInput
							size="sm"
							step={1}
							min={minimumArmorSkillPoints}
							max={maximumArmorSkillPoints}
							bind:value={armorDecorations.slot3.skill4.points}
							invalidText={invalidArmorSkillPointsText}
							label={'Decoration Skill 4 Points'}
						/>
					</div>
				</div>
			{/if}
		</div>
	</section>
	<section>
		<SectionHeading level={2} title="Item" />
		<div class="container-item-buttons">
			<Button kind="tertiary" icon={Download} on:click={downloadItemsImage}
				>Download</Button
			>

			<Button kind="tertiary" icon={Restart} on:click={resetItemsValues}
				>Restore values</Button
			>
		</div>

		<div class="container-item">
			<div class="item-info">
				{#key itemRarity}
					<div id="item-dom">
						<Item
							itemRankType={itemRank}
							bind:currentPage={currentItemPage}
							name={itemName}
							description={itemDescription}
							rarity={itemRarity >= 1 && itemRarity <= 12 ? itemRarity : 1}
							iconName={itemIconName}
							colorName={itemColorName}
							{itemType}
							zenithSkill={itemZenithSkill}
							cuffSkill1={itemCuffSkill1}
							cuffSkill1Points={itemCuffSkill1Points}
							cuffSkill2={itemCuffSkill2}
							cuffSkill2Points={itemCuffSkill2Points}
							towerSkill={itemTowerSkill}
							armorClass={itemArmorClass}
							weaponClass={itemWeaponClass}
							slotsRequired={itemSlotsRequired}
							sigil={itemSigil}
							decoration={itemDecoration}
						/>
					</div>
				{/key}
			</div>
			<div class="item-info-values">
				<Dropdown
					titleText="Item Type"
					type="inline"
					hideLabel
					bind:selectedId={itemType}
					items={[
						{ id: 'Decoration', text: 'Decoration' },
						{ id: 'Sigil', text: 'Sigil' },
						{ id: 'Cuff', text: 'Cuff' },
						{ id: 'Zenith Cuff', text: 'Zenith Cuff' },
						{ id: 'Hiden Cuff', text: 'Hiden Cuff' },
						{ id: 'Tower Sigil', text: 'Tower Sigil' },
						{ id: 'Tower Decoration', text: 'Tower Decoration' },
						{ id: 'Other', text: 'Other' },
					]}
				/>
				<Dropdown
					titleText="Item Icon"
					type="inline"
					hideLabel
					bind:selectedId={itemIconName}
					items={getItemIcons()}
				/>
				<Dropdown
					titleText="Item Color"
					type="inline"
					hideLabel
					bind:selectedId={itemColorName}
					items={getItemColors()}
				/>
				<TextInput
					labelText="Name"
					placeholder="Enter item name"
					hideLabel
					bind:value={itemName}
				/>

				<TextInput
					labelText="Description"
					placeholder="Enter item description"
					hideLabel
					bind:value={itemDescription}
				/>

				<Dropdown
					titleText="Rank"
					type="inline"
					hideLabel
					bind:selectedId={itemRank}
					items={[
						{ id: '', text: 'None' },
						{ id: 'G', text: 'G' },
						{ id: 'Z', text: 'Zenith' },
						{ id: 'T', text: 'Tower' },
					]}
				/>

				<NumberInput
					size="sm"
					step={1}
					min={minimumRarity}
					max={maximumRarity}
					bind:value={itemRarity}
					invalidText={invalidWeaponRarityText}
					label={'Rarity'}
				/>
			</div>
			{#if currentItemPage === 1}
				<div class="page-1-item">
					<Dropdown
						titleText="Sigil Slot 1"
						type="inline"
						hideLabel
						bind:selectedId={itemSigil.slot1.name}
						items={getSigilSkills()}
					/>
					<NumberInput
						size="sm"
						step={1}
						min={minimumArmorSkillPoints}
						max={maximumArmorSkillPoints}
						bind:value={itemSigil.slot1.value}
						invalidText={invalidArmorSkillPointsText}
						label={'Sigil Slot 1 Points'}
					/>
					<Dropdown
						titleText="Sigil Slot 2"
						type="inline"
						hideLabel
						bind:selectedId={itemSigil.slot2.name}
						items={getSigilSkills()}
					/>
					<NumberInput
						size="sm"
						step={1}
						min={minimumArmorSkillPoints}
						max={maximumArmorSkillPoints}
						bind:value={itemSigil.slot2.value}
						invalidText={invalidArmorSkillPointsText}
						label={'Sigil Slot 2 Points'}
					/>
					<Dropdown
						titleText="Sigil Slot 3"
						type="inline"
						hideLabel
						bind:selectedId={itemSigil.slot3.name}
						items={getSigilSkills()}
					/>
					<NumberInput
						size="sm"
						step={1}
						min={minimumArmorSkillPoints}
						max={maximumArmorSkillPoints}
						bind:value={itemSigil.slot3.value}
						invalidText={invalidArmorSkillPointsText}
						label={'Sigil Slot 3 Points'}
					/>
					<Dropdown
						titleText="Sigil Slot 4"
						type="inline"
						hideLabel
						bind:selectedId={itemSigil.slot4.name}
						items={getSigilSkills()}
					/>
					<NumberInput
						size="sm"
						step={1}
						min={minimumArmorSkillPoints}
						max={maximumArmorSkillPoints}
						bind:value={itemSigil.slot4.value}
						invalidText={invalidArmorSkillPointsText}
						label={'Sigil Slot 4 Points'}
					/>
				</div>
			{:else if currentItemPage === 2}
				<div class="page-2-item">
					<NumberInput
						size="sm"
						step={1}
						min={minimumSlots}
						max={maximumSlots}
						bind:value={itemSlotsRequired}
						invalidText={invalidSlotsText}
						label={'Slots required'}
					/>
					<Dropdown
						titleText="Armor Class"
						type="inline"
						hideLabel
						bind:selectedId={itemArmorClass}
						items={[
							{ id: 'Either', text: 'Either' },
							{ id: 'Blademaster', text: 'Blademaster' },
							{ id: 'Gunner', text: 'Gunner' },
						]}
					/>
					<Dropdown
						titleText="Weapon Class"
						type="inline"
						hideLabel
						bind:selectedId={itemWeaponClass}
						items={[
							{ id: 'Both', text: 'Both' },
							{ id: 'Blademaster', text: 'Blademaster' },
							{ id: 'Gunner', text: 'Gunner' },
						]}
					/>
				</div>
			{:else if currentItemPage === 3}
				<div class="page-3-item">
					<Dropdown
						titleText="Skill 1"
						type="inline"
						hideLabel
						bind:selectedId={itemDecoration.slot1.name}
						items={getArmorSkillTree()}
					/>
					<NumberInput
						size="sm"
						step={1}
						min={minimumArmorSkillPoints}
						max={maximumArmorSkillPoints}
						bind:value={itemDecoration.slot1.value}
						invalidText={invalidArmorSkillPointsText}
						label={'Skill 1 Points'}
					/>
					<Dropdown
						titleText="Skill 2"
						type="inline"
						hideLabel
						bind:selectedId={itemDecoration.slot2.name}
						items={getArmorSkillTree()}
					/>
					<NumberInput
						size="sm"
						step={1}
						min={minimumArmorSkillPoints}
						max={maximumArmorSkillPoints}
						bind:value={itemDecoration.slot2.value}
						invalidText={invalidArmorSkillPointsText}
						label={'Skill 2 Points'}
					/>
					<Dropdown
						titleText="Skill 3"
						type="inline"
						hideLabel
						bind:selectedId={itemDecoration.slot3.name}
						items={getArmorSkillTree()}
					/>
					<NumberInput
						size="sm"
						step={1}
						min={minimumArmorSkillPoints}
						max={maximumArmorSkillPoints}
						bind:value={itemDecoration.slot3.value}
						invalidText={invalidArmorSkillPointsText}
						label={'Skill 3 Points'}
					/>
					<Dropdown
						titleText="Skill 4"
						type="inline"
						hideLabel
						bind:selectedId={itemDecoration.slot4.name}
						items={getArmorSkillTree()}
					/>
					<NumberInput
						size="sm"
						step={1}
						min={minimumArmorSkillPoints}
						max={maximumArmorSkillPoints}
						bind:value={itemDecoration.slot4.value}
						invalidText={invalidArmorSkillPointsText}
						label={'Skill 4 Points'}
					/>

					<Dropdown
						titleText="Cuff Skill 1"
						type="inline"
						hideLabel
						bind:selectedId={itemCuffSkill1}
						items={getArmorSkillTree()}
					/>
					<NumberInput
						size="sm"
						step={1}
						min={minimumArmorSkillPoints}
						max={maximumArmorSkillPoints}
						bind:value={itemCuffSkill1Points}
						invalidText={invalidArmorSkillPointsText}
						label={'Cuff Skill 1 Points'}
					/>

					<Dropdown
						titleText="Cuff Skill 2"
						type="inline"
						hideLabel
						bind:selectedId={itemCuffSkill2}
						items={getArmorSkillTree()}
					/>
					<NumberInput
						size="sm"
						step={1}
						min={minimumArmorSkillPoints}
						max={maximumArmorSkillPoints}
						bind:value={itemCuffSkill2Points}
						invalidText={invalidArmorSkillPointsText}
						label={'Cuff Skill 2 Points'}
					/>

					<Dropdown
						titleText="Zenith Skill"
						type="inline"
						hideLabel
						bind:selectedId={itemZenithSkill}
						items={getZenithSkills()}
					/>
					<Dropdown
						titleText="Tower Skill"
						type="inline"
						hideLabel
						bind:selectedId={itemTowerSkill}
						items={getArmorSkills()}
					/>
				</div>
			{/if}
		</div>
	</section>
	<section>
		<SectionHeading level={2} title="Tower Weapon" />
		<InlineNotification
			lowContrast
			hideCloseButton
			kind="info"
			title="Value correction:"
			subtitle="The sliders automatically adjust to the correct values once you release them."
		/>

		<p class="spaced-paragraph">
			A customisable weapon made from materials found by playing through the <InlineTooltip
				icon={LocationIcons.find((e) => e.name === 'Tower')?.icon}
				tooltip="Location"
				iconType={'file'}
				text="Sky Corridor"
			/>.
		</p>

		<p class="spaced-paragraph">
			You can customize weapon attributes such as Sharpness, Raw, Elemental,
			Status, Shelling Type, Shot Type, etc. They are comparable to Lv50 G Rank
			weapons when fully upgraded. You can insert Tower Decorations, which gives
			skills without using slots, making it a powerful weapon when built
			correctly. You cannot reverse most of the attribute upgrades.
		</p>

		<p class="spaced-paragraph">
			Light versions of weapons have two sigils slots and a single decoration
			slot, while Dark versions gives you a single sigil slot and two decoration
			slots.
		</p>

		<p class="spaced-paragraph">
			Tower Sigils are used to grant Affinity, Status, Elemental, Zenith Skills
			or Weapon Abilities. You can only have as many of these properties as you
			have Sigil slots and you can't have two of the same type (for example, two
			Elemental, Status or Affinity sigils does not stack.)
		</p>

		<p class="spaced-paragraph">
			Tower Decorations grant your weapon a skill. For example, if you have a
			Tower Decoration for <InlineTooltip
				tooltip="Armor Skill"
				text="Expert+5"
				iconType="component"
				icon={getTag('Armor Skill').icon}
			/>, then it gives you that skill when you slot it into a weapon and equip
			it. You can have a maximum of two skills on a weapon.
		</p>

		<p class="spaced-paragraph">
			In order to remove a Tower Decoration, you need to buy a <InlineTooltip
				tooltip={'Item'}
				text="Twr Removal Solution"
				icon={ItemIcons.find((e) => e.name === 'Medicine')?.icon}
			/>.
		</p>

		<p>
			The rest of the Tower Weapon materials are available at the <InlineTooltip
				icon={LocationIcons.find((e) => e.name === 'Road')?.icon}
				tooltip="Location"
				iconType={'file'}
				text="Road Shop"
			/>. Alternatively, you can replace them directly at the cost of losing the
			previously slotted decoration. A <InlineTooltip
				tooltip="Item"
				icon={ItemIcons.find((e) => e.name === 'Medicine')?.icon}
				text="Pulsating Liquid"
			/> lets you adjust the properties of Tower Hunting Horns, Bows, Bowguns and
			Gunlances.
		</p>

		<p class="spaced-paragraph">
			Tower Weapons can be crafted by talking to the Cat wearing a backpack in
			the <InlineTooltip
				tooltip="Location"
				iconType={'file'}
				icon={LocationIcons.find((e) => e.name === 'Blacksmith')?.icon}
				text="Blacksmith"
			/>.
		</p>

		<p class="spaced-paragraph">
			The Blue series of the tower weapons have 3 Tower Sigil slots. They have
			high enough stats to surpass all weapons (except Evolution, certain
			Premium weapons and Road). They require Zenith materials to craft, but
			<strong>they do not have the Zenith Partbreaker effect</strong>. Zenith
			Sigils affect any skills granted (including Exotics, Hybrids and from
			Tower Decorations).
		</p>

		<div class="flex-centered padded">
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
			/>
			<Dropdown
				titleText="Tower Weapon"
				type="inline"
				hideLabel
				on:select={onSelectTowerWeaponOption}
				bind:selectedId={towerWeaponSelectedWeaponOption}
				items={towerWeaponsFromType}
			/>
		</div>
		<div class="flex-centered padded flex-column">
			<img src={towerWeaponImage} alt="Tower Weapon" />
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
					Upgrade #{towerWeaponAttackIndex} Cost: {towerWeaponSelected.attack[
						towerWeaponAttackIndex
					][1]}
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
						Upgrade #{towerWeaponPoisonIndex} Cost: {towerWeaponSelected.poison[
							towerWeaponPoisonIndex
						][1]}
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
								handleSliderChange(towerWeaponSelected.paralysis, 'paralysis')}
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
						Upgrade #{towerWeaponSleepIndex} Cost: {towerWeaponSelected.sleep[
							towerWeaponSleepIndex
						][1]}
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
		<div class="container-buttons"></div>
		<Button kind="tertiary" icon={Download} on:click={downloadTowerWeaponImage}
			>Download</Button
		>
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
						icon={ItemIcons.find((e) => e.name === 'Ball')?.icon}
						iconColor={ItemColors.find((e) => e.name === 'Red')?.value}
						iconSize={'clamp(1rem, 2vw, 2rem)'}
					/>
				</p>
				<p>
					<InlineTooltip
						tooltip="Item"
						text={`${towerWeaponTotalGems.glittering} Glittering Gems`}
						icon={ItemIcons.find((e) => e.name === 'Ball')?.icon}
						iconColor={RarityColors[5]}
						iconSize={'clamp(1rem, 2vw, 2rem)'}
					/>
				</p>
				<p>
					<InlineTooltip
						tooltip="Item"
						text={`${towerWeaponTotalGems.divine} Divine Gems`}
						icon={ItemIcons.find((e) => e.name === 'Ball')?.icon}
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
						icon={ItemIcons.find((e) => e.name === 'Knife')?.icon}
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
							icon={ItemIcons.find((e) => e.name === 'Knife')?.icon}
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
							icon={ItemIcons.find((e) => e.name === 'Whetstone')?.icon}
						/>
					</p>
				{/if}
				{#if towerWeaponGunlanceShellLevel !== '0'}
					<p>
						<InlineTooltip
							tooltip={'Stat'}
							text={`Shell LV${parseInt(towerWeaponGunlanceShellLevel) !== 8 ? parseInt(towerWeaponGunlanceShellLevel) + 1 : ' MAX'}`}
							iconSize={'clamp(1rem, 2vw, 2rem)'}
							icon={WeaponTypes.find((e) => e.name === 'Gunlance')?.icon}
						/>
					</p>
				{/if}
				{#if towerWeaponReloadSpeedValue !== 'Very Slow'}
					<p>
						<InlineTooltip
							tooltip={'Stat'}
							text={`${towerWeaponReloadSpeedValue} Reload`}
							iconSize={'clamp(1rem, 2vw, 2rem)'}
							icon={ItemIcons.find((e) => e.name === 'Shot')?.icon}
						/>
					</p>
				{/if}
				{#if towerWeaponRecoilValue !== 'Max'}
					<p>
						<InlineTooltip
							tooltip={'Stat'}
							text={`${towerWeaponRecoilValue} Recoil`}
							iconSize={'clamp(1rem, 2vw, 2rem)'}
							icon={ItemIcons.find((e) => e.name === 'Shot')?.icon}
						/>
					</p>
				{/if}
				{#if towerWeaponBowCharge1Level !== '1'}
					<p>
						<InlineTooltip
							tooltip={'Stat'}
							text={`Charge 1 LV${towerWeaponBowCharge1Level !== '4' ? towerWeaponBowCharge1Level : ' MAX'}`}
							iconSize={'clamp(1rem, 2vw, 2rem)'}
							icon={WeaponTypes.find((e) => e.name === 'Bow')?.icon}
						/>
					</p>
				{/if}
				{#if towerWeaponBowCharge2Level !== '1'}
					<p>
						<InlineTooltip
							tooltip={'Stat'}
							text={`Charge 2 LV${towerWeaponBowCharge2Level !== '4' ? towerWeaponBowCharge2Level : ' MAX'}`}
							iconSize={'clamp(1rem, 2vw, 2rem)'}
							icon={WeaponTypes.find((e) => e.name === 'Bow')?.icon}
						/>
					</p>
				{/if}
				{#if towerWeaponBowCharge3Level !== '1'}
					<p>
						<InlineTooltip
							tooltip={'Stat'}
							text={`Charge 3 LV${towerWeaponBowCharge3Level !== '4' ? towerWeaponBowCharge3Level : ' MAX'}`}
							iconSize={'clamp(1rem, 2vw, 2rem)'}
							icon={WeaponTypes.find((e) => e.name === 'Bow')?.icon}
						/>
					</p>
				{/if}
				{#if towerWeaponBowCharge4Level !== '1'}
					<p>
						<InlineTooltip
							tooltip={'Stat'}
							text={`Charge 4 LV${towerWeaponBowCharge4Level !== '4' ? towerWeaponBowCharge4Level : ' MAX'}`}
							iconSize={'clamp(1rem, 2vw, 2rem)'}
							icon={WeaponTypes.find((e) => e.name === 'Bow')?.icon}
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
	</section>
	<section>
		<SectionHeading level={2} title="Icons" />
		<p class="spaced-paragraph">
			You can find the image for the monster backgrounds in our <OutboundLink
				href="https://github.com/DorielRivalet/wycademy/blob/main/src/lib/client/images/monster/bg-512.webp"
				>repository</OutboundLink
			>.
		</p>
		<div class="container-buttons">
			<Button kind="tertiary" icon={Download} on:click={downloadIconImage}
				>Download</Button
			>
			<Dropdown
				type="inline"
				titleText="Type"
				bind:selectedId={selectedIconType}
				items={[
					{ id: 'Ailment', text: 'Ailment' },
					{ id: 'Armor', text: 'Armor' },
					{ id: 'Element', text: 'Element' },
					{ id: 'Game', text: 'Game' },
					{ id: 'Habitat', text: 'Habitat' },
					{ id: 'Item', text: 'Item' },
					{ id: 'Location', text: 'Location' },
					{ id: 'Status', text: 'Status' },
					{ id: 'Monster Icon', text: 'Monster Icon' },
					{ id: 'Monster Render', text: 'Monster Render' },
					{ id: 'Weapon', text: 'Weapon' },
				]}
			/>
			<Dropdown
				type="inline"
				titleText="Icon"
				bind:selectedId={selectedIconIdFromList}
				items={currentIconsFromType}
			/>
			<Dropdown
				type="inline"
				titleText="Size"
				bind:selectedId={selectedIconSize}
				items={[
					{ id: '64px', text: '64px' },
					{ id: '128px', text: '128px' },
					{ id: '256px', text: '256px' },
					{ id: '512px', text: '512px' },
					{ id: '1024px', text: '1024px' },
					{ id: '2048px', text: '2048px' },
				]}
			/>
			{#if selectedIconType === 'Monster Icon' || selectedIconType === 'Weapon'}
				<Dropdown
					type="inline"
					titleText="Format"
					bind:selectedId={selectedIconFormat}
					items={[
						{ id: 'Raster', text: 'Raster' },
						{ id: 'Vector', text: 'Vector' },
					]}
				/>
			{/if}
			{#if selectedIconType === 'Monster Render'}
				<Dropdown
					type="inline"
					titleText="Render Size"
					bind:selectedId={selectedIconMonsterRenderSize}
					items={[
						{ id: 'Small', text: 'Small' },
						{ id: 'Full', text: 'Full' },
					]}
				/>
			{/if}
			{#if selectedIconType === 'Armor' || selectedIconType === 'Item' || selectedIconType === 'Weapon'}
				<Dropdown
					type="inline"
					titleText="Color"
					bind:selectedId={selectedIconColor}
					items={allFrontierColors}
				/>
			{/if}
			{#if selectedIconType === 'Monster Icon' && selectedIconFormat === 'Vector'}
				<Toggle
					labelText="Background"
					bind:toggled={selectedIconBackground}
				/>{/if}
		</div>
		<div class="icon-preview">
			<div id={'icon-dom'} style="width: {selectedIconSize}">
				{#if ((selectedIconType === 'Monster Icon' || selectedIconType === 'Weapon') && selectedIconFormat === 'Vector') || selectedIconType === 'Element' || selectedIconType === 'Ailment' || selectedIconType === 'Status' || selectedIconType === 'Item' || selectedIconType === 'Armor'}
					<svelte:component
						this={currentIconPreview.component}
						{...{
							size: selectedIconType === 'Weapon' ? '100%' : selectedIconSize,
							color: selectedIconColor,
							background: selectedIconBackground,
						}}
					/>
				{:else}
					<img
						src={selectedIconType === 'Monster Render'
							? selectedIconMonsterRenderSize === 'Small'
								? currentIconPreview.small
								: currentIconPreview.full
							: currentIconPreview.image}
						alt={selectedIconIdFromList}
						width={selectedIconSize}
					/>
				{/if}
			</div>
		</div>
	</section>
	<section>
		<SectionHeading level={2} title="Thumbnail Generator" />
		<InlineNotification
			lowContrast
			hideCloseButton
			kind="warning"
			title="Browser compatibility:"
			subtitle="Many features on this section may not work on Firefox. It is confirmed to work with Chromium based browsers."
		/>
		<InlineNotification
			lowContrast
			hideCloseButton
			kind="info"
			title="Background:"
			subtitle="The ZIndex of the background should be 0."
		/>
		<p class="spaced-paragraph">
			Here you can download the thumbnail generated below, with the resulting
			size being 1280x720 pixels, perfect for things such as
			<span
				><Button
					on:click={() => changeModal('', 'YouTube')}
					size="default"
					icon={LogoYoutube}
					kind="ghost">YouTube thumbnails.</Button
				></span
			>
		</p>

		<p class="spaced-paragraph">
			Additionally, for text, vector and raster images you can drag and drop
			them in order to change their position in the thumbnail, as an alternative
			to the number inputs.
		</p>
		<p>Rule of thirds:</p>
		<ul class="spaced-list">
			<li>X: 427, 853</li>
			<li>Y: 240, 480</li>
		</ul>
		<div class="container-item-buttons">
			<Button
				kind="tertiary"
				icon={Download}
				on:click={downloadGeneratedThumbnailImage}>Download Thumbnail</Button
			>
			<Button kind="tertiary" icon={Save} on:click={saveThumbnailTemplate}
				>Save as Template</Button
			>
			<FileUploader
				labelTitle="Load Template"
				buttonLabel="Add File"
				labelDescription="Only JSON files are accepted. Custom images are neither loaded nor saved."
				accept={['.json']}
				status="complete"
				iconDescription="Template file"
				kind="tertiary"
				bind:files={thumbnailGeneratorTemplateFiles}
				on:add={loadThumbnailTemplate}
			/>
		</div>
		<div class="container-buttons">
			<Toggle labelText="Border" bind:toggled={thumbnailGeneratorBorder} />

			{#if thumbnailGeneratorBorder}
				<ColorPicker
					bind:hex={thumbnailGeneratorBorderColor}
					label="Border Color"
					--cp-bg-color={getHexStringFromCatppuccinColor('base', $theme)}
					--cp-border-color={getHexStringFromCatppuccinColor('text', $theme)}
					--cp-input-color={getHexStringFromCatppuccinColor('surface0', $theme)}
					--cp-button-hover-color={getHexStringFromCatppuccinColor(
						'blue',
						$theme,
					)}
				/>

				<Dropdown
					type="inline"
					titleText="Border Style"
					bind:selectedId={thumbnailGeneratorBorderStyle}
					items={[
						{ id: 'none', text: 'None' },
						{ id: 'hidden', text: 'Hidden' },
						{ id: 'dotted', text: 'Dotted' },
						{ id: 'dashed', text: 'Dashed' },
						{ id: 'solid', text: 'Solid' },
						{ id: 'double', text: 'Double' },
						{ id: 'groove', text: 'Groove' },
						{ id: 'ridge', text: 'Ridge' },
						{ id: 'inset', text: 'Inset' },
						{ id: 'outset', text: 'Outset' },
					]}
				/>
				<NumberInput
					size="sm"
					step={1}
					min={0}
					max={128}
					bind:value={thumbnailGeneratorBorderWidth}
					invalidText={'Value must be between 0 and 128'}
					label={'Border Width (px)'}
				/>
			{/if}
		</div>
		<div class="container-buttons">
			<ColorPicker
				bind:hex={thumbnailGeneratorBackgroundGradientStartColor}
				label="Background Color Gradient Start"
				--cp-bg-color={getHexStringFromCatppuccinColor('base', $theme)}
				--cp-border-color={getHexStringFromCatppuccinColor('text', $theme)}
				--cp-input-color={getHexStringFromCatppuccinColor('surface0', $theme)}
				--cp-button-hover-color={getHexStringFromCatppuccinColor(
					'blue',
					$theme,
				)}
			/>
			<ColorPicker
				bind:hex={thumbnailGeneratorBackgroundGradientEndColor}
				label="Background Color Gradient End"
				--cp-bg-color={getHexStringFromCatppuccinColor('base', $theme)}
				--cp-border-color={getHexStringFromCatppuccinColor('text', $theme)}
				--cp-input-color={getHexStringFromCatppuccinColor('surface0', $theme)}
				--cp-button-hover-color={getHexStringFromCatppuccinColor(
					'blue',
					$theme,
				)}
			/>
			<NumberInput
				size="sm"
				step={1}
				min={-360}
				max={360}
				bind:value={thumbnailGeneratorBackgroundGradientRotation}
				invalidText={'Value must be between -360 and 360'}
				label={'Gradient Rotation (degrees)'}
			/>
			<Toggle
				labelText="Gradient Type"
				labelA="Radial"
				labelB="Linear"
				bind:toggled={thumbnailGeneratorBackgroundGradientLinear}
			/>
		</div>

		<div class="container-buttons">
			<Dropdown
				type="inline"
				titleText="Insert Element"
				bind:selectedId={thumbnailGeneratorSectionOption}
				items={[
					{ id: 'Text', text: 'Text' },
					{ id: 'Image', text: 'Image' },
					{ id: 'Custom Image', text: 'Custom Image' },
				]}
			/>
		</div>

		{#if thumbnailGeneratorSectionOption === 'Text'}
			<div class="container-buttons">
				<Button kind="tertiary" icon={Add} on:click={addThumbnailText}
					>Add Text</Button
				>
				<TextInput
					labelText="Text"
					placeholder="Enter text"
					hideLabel
					bind:value={thumbnailGeneratorText}
				/>
				<NumberInput
					size="sm"
					step={1}
					min={1}
					max={128}
					bind:value={thumbnailGeneratorTextFontSize}
					invalidText={'Value must be between 1 and 128'}
					label={'Text Size (px)'}
				/>

				<Dropdown
					titleText="Font Family"
					type="inline"
					bind:selectedId={thumbnailGeneratorTextFontFamily}
					items={[
						{ id: 'Arial', text: 'Arial' },
						{ id: 'Times New Roman', text: 'Times New Roman' },
						{ id: 'Courier New', text: 'Courier New' },
						{ id: 'Verdana', text: 'Verdana' },
						{ id: 'Georgia', text: 'Georgia' },
						{ id: 'Tahoma', text: 'Tahoma' },
						{ id: 'Trebuchet MS', text: 'Trebuchet MS' },
						{ id: 'Palatino', text: 'Palatino' },
						{ id: 'Garamond', text: 'Garamond' },
						{ id: 'Bookman', text: 'Bookman' },
						{ id: 'Comic Sans MS', text: 'Comic Sans MS' },
						{ id: 'Courier', text: 'Courier' },
						{ id: 'Lucida Console', text: 'Lucida Console' },
						{ id: 'MS Gothic', text: 'MS Gothic' },
					]}
					let:item
				>
					<p style="font-family: {item.id}">{item.id}</p>
				</Dropdown>

				<Dropdown
					titleText="Font Style"
					type="inline"
					bind:selectedId={thumbnailGeneratorTextFontStyle}
					items={[
						{ id: 'normal', text: 'Normal' },
						{ id: 'italic', text: 'Italic' },
					]}
				/>

				<Dropdown
					titleText="Font Weight"
					type="inline"
					bind:selectedId={thumbnailGeneratorTextFontWeight}
					items={[
						{ id: '100', text: '100' },
						{ id: '200', text: '200' },
						{ id: '300', text: '300' },
						{ id: '400', text: '400' },
						{ id: '500', text: '500' },
						{ id: '600', text: '600' },
						{ id: '700', text: '700' },
						{ id: '800', text: '800' },
						{ id: '900', text: '900' },
						{ id: 'normal', text: 'Normal' },
						{ id: 'bold', text: 'Bold' },
					]}
				/>

				<Dropdown
					titleText="Text Decoration"
					type="inline"
					bind:selectedId={thumbnailGeneratorTextDecoration}
					items={[
						{ id: 'none', text: 'None' },
						{ id: 'underline', text: 'Underline' },
						{ id: 'line-through', text: 'Strikethrough' },
						{ id: 'overline', text: 'Overline' },
					]}
				/>

				<ColorPicker
					bind:hex={thumbnailGeneratorTextDecorationColor}
					label="Text Decoration Color"
					--cp-bg-color={getHexStringFromCatppuccinColor('base', $theme)}
					--cp-border-color={getHexStringFromCatppuccinColor('text', $theme)}
					--cp-input-color={getHexStringFromCatppuccinColor('surface0', $theme)}
					--cp-button-hover-color={getHexStringFromCatppuccinColor(
						'blue',
						$theme,
					)}
				/>

				<ColorPicker
					bind:hex={thumbnailGeneratorTextShadowColor}
					label="Text Shadow Color"
					--cp-bg-color={getHexStringFromCatppuccinColor('base', $theme)}
					--cp-border-color={getHexStringFromCatppuccinColor('text', $theme)}
					--cp-input-color={getHexStringFromCatppuccinColor('surface0', $theme)}
					--cp-button-hover-color={getHexStringFromCatppuccinColor(
						'blue',
						$theme,
					)}
				/>
				<NumberInput
					size="sm"
					step={1}
					min={0}
					max={128}
					bind:value={thumbnailGeneratorTextShadowWidth}
					invalidText={'Value must be between 0 and 128'}
					label={'Text Shadow Width (px)'}
				/>

				<ColorPicker
					bind:hex={thumbnailGeneratorTextColor}
					label="Text Color"
					--cp-bg-color={getHexStringFromCatppuccinColor('base', $theme)}
					--cp-border-color={getHexStringFromCatppuccinColor('text', $theme)}
					--cp-input-color={getHexStringFromCatppuccinColor('surface0', $theme)}
					--cp-button-hover-color={getHexStringFromCatppuccinColor(
						'blue',
						$theme,
					)}
				/>
				<NumberInput
					size="sm"
					step={1}
					min={-360}
					max={360}
					bind:value={thumbnailGeneratorTextRotation}
					invalidText={'Value must be between -360 and 360'}
					label={'Text Rotation (degrees)'}
				/>
			</div>
		{:else if thumbnailGeneratorSectionOption === 'Image'}
			<div class="container-buttons">
				<Button kind="tertiary" icon={Add} on:click={addThumbnailImage}
					>Add Image</Button
				>
				<Dropdown
					type="inline"
					titleText="Type"
					bind:selectedId={thumbnailGeneratorImageType}
					items={[
						{ id: 'Ailment', text: 'Ailment' },
						{ id: 'Armor', text: 'Armor' },
						{ id: 'Element', text: 'Element' },
						{ id: 'Game', text: 'Game' },
						{ id: 'Habitat', text: 'Habitat' },
						{ id: 'Item', text: 'Item' },
						{ id: 'Location', text: 'Location' },
						{ id: 'Status', text: 'Status' },
						{ id: 'Monster Icon', text: 'Monster Icon' },
						{ id: 'Monster Render', text: 'Monster Render' },
						{ id: 'Weapon', text: 'Weapon' },
					]}
				/>
				<ComboBox
					titleText="Icon"
					placeholder="Select icon"
					bind:selectedId={thumbnailGeneratorImageIdFromList}
					items={thumbnailGeneratorImagesFromType}
					{shouldFilterItem}
				/>
				{#if thumbnailGeneratorImageType === 'Armor' || thumbnailGeneratorImageType === 'Item' || thumbnailGeneratorImageType === 'Weapon'}
					<Dropdown
						type="inline"
						titleText="Color"
						bind:selectedId={thumbnailGeneratorImageColor}
						items={allFrontierColors}
					/>
				{/if}
				{#if thumbnailGeneratorImageType === 'Monster Render'}
					<Dropdown
						type="inline"
						titleText="Render Size"
						bind:selectedId={thumbnailGeneratorMonsterRenderSize}
						items={[
							{ id: 'Small', text: 'Small' },
							{ id: 'Full', text: 'Full' },
						]}
					/>
				{/if}
				{#if thumbnailGeneratorImageType === 'Monster Icon'}
					<Toggle
						labelText="Background"
						bind:toggled={thumbnailGeneratorImageBackground}
					/>
				{/if}
				<ColorPicker
					bind:hex={thumbnailGeneratorImageShadowColor}
					label="Image Shadow Color"
					--cp-bg-color={getHexStringFromCatppuccinColor('base', $theme)}
					--cp-border-color={getHexStringFromCatppuccinColor('text', $theme)}
					--cp-input-color={getHexStringFromCatppuccinColor('surface0', $theme)}
					--cp-button-hover-color={getHexStringFromCatppuccinColor(
						'blue',
						$theme,
					)}
				/>
				<NumberInput
					size="sm"
					step={1}
					min={0}
					max={128}
					bind:value={thumbnailGeneratorImageShadowWidth}
					invalidText={'Value must be between 0 and 128'}
					label={'Image Shadow Width (px)'}
				/>
				<ColorPicker
					bind:hex={thumbnailGeneratorImageBorderColor}
					label="Image Border Color"
					--cp-bg-color={getHexStringFromCatppuccinColor('base', $theme)}
					--cp-border-color={getHexStringFromCatppuccinColor('text', $theme)}
					--cp-input-color={getHexStringFromCatppuccinColor('surface0', $theme)}
					--cp-button-hover-color={getHexStringFromCatppuccinColor(
						'blue',
						$theme,
					)}
				/>
				<NumberInput
					size="sm"
					step={1}
					min={0}
					max={128}
					bind:value={thumbnailGeneratorImageBorderWidth}
					invalidText={'Value must be between 0 and 128'}
					label={'Image Border Width (px)'}
				/>
				<NumberInput
					size="sm"
					step={1}
					min={0}
					max={128}
					bind:value={thumbnailGeneratorImageBorderRadius}
					invalidText={'Value must be between 0 and 128'}
					label={'Image Border Radius (px)'}
				/>
			</div>
		{:else}
			<div class="container-buttons">
				<FileUploaderDropContainer
					accept={['.svg', '.png', '.webp', '.jpg', '.jpeg']}
					bind:files={thumbnailGeneratorImageFiles}
					labelText="Drag and drop images here or click to upload (8MB max)"
					validateFiles={(files) => {
						return files.filter(
							(file) =>
								file.size < 8 * Math.pow(10, 6) &&
								(file.name.endsWith('.png') ||
									file.name.endsWith('.webp') ||
									file.name.endsWith('.jpg') ||
									file.name.endsWith('.svg') ||
									file.name.endsWith('.jpeg')),
						);
					}}
				/>
				<ColorPicker
					bind:hex={thumbnailGeneratorUploadedImageShadowColor}
					label="Uploaded Image Shadow Color"
					--cp-bg-color={getHexStringFromCatppuccinColor('base', $theme)}
					--cp-border-color={getHexStringFromCatppuccinColor('text', $theme)}
					--cp-input-color={getHexStringFromCatppuccinColor('surface0', $theme)}
					--cp-button-hover-color={getHexStringFromCatppuccinColor(
						'blue',
						$theme,
					)}
				/>
				<NumberInput
					size="sm"
					step={1}
					min={0}
					max={128}
					bind:value={thumbnailGeneratorUploadedImageShadowWidth}
					invalidText={'Value must be between 0 and 128'}
					label={'Uploaded Image Shadow Width (px)'}
				/>
				<ColorPicker
					bind:hex={thumbnailGeneratorUploadedImageBorderColor}
					label="Uploaded Image Border Color"
					--cp-bg-color={getHexStringFromCatppuccinColor('base', $theme)}
					--cp-border-color={getHexStringFromCatppuccinColor('text', $theme)}
					--cp-input-color={getHexStringFromCatppuccinColor('surface0', $theme)}
					--cp-button-hover-color={getHexStringFromCatppuccinColor(
						'blue',
						$theme,
					)}
				/>
				<NumberInput
					size="sm"
					step={1}
					min={0}
					max={128}
					bind:value={thumbnailGeneratorUploadedImageBorderWidth}
					invalidText={'Value must be between 0 and 128'}
					label={'Uploaded Image Border Width (px)'}
				/>
				<NumberInput
					size="sm"
					step={1}
					min={0}
					max={128}
					bind:value={thumbnailGeneratorUploadedImageBorderRadius}
					invalidText={'Value must be between 0 and 128'}
					label={'Uploaded Image Border Radius (px)'}
				/>
			</div>
		{/if}

		<div class="container-buttons">
			<Button
				kind="tertiary"
				icon={Add}
				on:click={createThumbnailGeneratorSmallPreview}>Create Preview</Button
			>
			<Dropdown
				type="inline"
				titleText="Size"
				bind:selectedId={thumbnailGeneratorSmallPreviewSize}
				items={[
					{ id: '128', text: '128px' },
					{ id: '256', text: '256px' },
					{ id: '512', text: '512px' },
				]}
			/>
		</div>

		<div class="thumbnail-generator-small-preview">
			{#if thumbnailGeneratorSmallPreview !== ''}
				<img
					src={thumbnailGeneratorSmallPreview}
					width="auto"
					height={`${thumbnailGeneratorSmallPreviewSize}px`}
					alt="Thumbnail Preview"
				/>
			{/if}
		</div>

		<p class="spaced-paragraph flex-centered">
			X: {thumbnailContainerCursorPosition.x} Y: {thumbnailContainerCursorPosition.y}
		</p>

		<div class="thumbnail-container">
			<div
				style={thumbnailGeneratorPreviewStyle}
				id="generated-thumbnail-dom"
				bind:this={thumbnailContainer}
			>
				{#each thumbnailImages as image, i}
					{#if image.fileType === 'Location' || image.fileType === 'Habitat' || image.fileType === 'Monster Render' || image.fileType === 'Game'}
						<img
							src={image.fileType === 'Monster Render'
								? image.monsterRenderSize === 'Small'
									? image.src.small
									: image.src.full
								: image.src.image}
							alt={image.alt}
							draggable={image.fileType === 'Habitat' ? 'false' : 'true'}
							id={`image-${i}`}
							on:dragstart={(e) =>
								handleDragStart(e, `image-${i}`, e.offsetX, e.offsetY, i)}
							style="position: absolute; top: {image.top}px; left: {image.left}px; width: {image.width}px; height: {image.height}px; z-index: {image.zindex}; opacity: {image.opacity}; filter: drop-shadow(0 0 {image.dropShadowSize}px {image.dropShadowColor}); border-color: {image.borderColor}; border-style: solid; border-radius: {image.borderRadius}px; border-width: {image.borderWidth}px {image.borderWidth}px {image.borderWidth}px {image.borderWidth}px;"
						/>
					{:else}
						<div
							style="position: absolute; top: {image.top}px; left: {image.left}px; width: {image.width}px; height: {image.height}px; z-index: {image.zindex}; opacity: {image.opacity}; filter: drop-shadow(0 0 {image.dropShadowSize}px {image.dropShadowColor}); border-color: {image.borderColor}; border-style: solid; border-radius: {image.borderRadius}px; border-width: {image.borderWidth}px {image.borderWidth}px {image.borderWidth}px {image.borderWidth}px;"
							on:mousedown={(e) => onThumbnailImageContainerMouseDown(e, i)}
							id={`image-${i}`}
						>
							<svelte:component
								this={image.src.component}
								{...{
									color: image.color,
									background: image.background,
									size: `${image.width}px`,
								}}
							/>
						</div>
					{/if}
				{/each}
				<Moveable
					target={moveableTarget}
					draggable={true}
					on:dragEnd={({ detail: e }) => onDragEnd(e)}
				/>
				{#each thumbnailUploadedImages as image, i}
					{#if image.fileType !== 'image/svg+xml'}
						<img
							src={image.src}
							alt={image.alt}
							draggable={'true'}
							on:dragstart={(e) =>
								handleDragStart(e, `upload-${i}`, e.offsetX, e.offsetY, i)}
							id={`upload-${i}`}
							style="position: absolute; top: {image.top}px; left: {image.left}px; width: {image.width}px; height: {image.height}px; z-index: {image.zindex}; opacity: {image.opacity}; filter: drop-shadow(0 0 {image.dropShadowSize}px {image.dropShadowColor}); border-color: {image.borderColor}; border-style: solid; border-radius: {image.borderRadius}px; border-width: {image.borderWidth}px {image.borderWidth}px {image.borderWidth}px {image.borderWidth}px;"
						/>
					{:else if image.fileType === 'image/svg+xml'}
						<img
							src={image.src}
							alt={image.alt}
							draggable={'true'}
							on:dragstart={(e) =>
								handleDragStart(e, `upload-${i}`, e.offsetX, e.offsetY, i)}
							id={`upload-${i}`}
							style="position: absolute; top: {image.top}px; left: {image.left}px; width: {image.width}px; height: {image.height}px; z-index: {image.zindex}; opacity: {image.opacity}; filter: drop-shadow(0 0 {image.dropShadowSize}px {image.dropShadowColor}); border-color: {image.borderColor}; border-style: solid; border-radius: {image.borderRadius}px; border-width: {image.borderWidth}px {image.borderWidth}px {image.borderWidth}px {image.borderWidth}px;"
						/>
					{/if}
				{/each}
				{#each thumbnailTexts as text, i}
					<p
						draggable={'true'}
						on:dragstart={(e) =>
							handleDragStart(e, `text-${i}`, e.offsetX, e.offsetY, i)}
						id={`text-${i}`}
						style="position: absolute; top: {text.top}px; left: {text.left}px; z-index: {text.zIndex}; opacity: {text.opacity}; font-size: {text.fontSize}px; text-shadow:
						-{text.shadowWidth}px -{text.shadowWidth}px 0 {text.shadowColor},
						{text.shadowWidth}px -{text.shadowWidth}px 0 {text.shadowColor},
						-{text.shadowWidth}px {text.shadowWidth}px 0 {text.shadowColor},
						{text.shadowWidth}px {text.shadowWidth}px 0 {text.shadowColor};
						color: {text.color};
						 transform: rotate({text.rotation}deg); text-decoration: {text.decoration} {text.decorationColor}; font-family: {text.fontFamily}; font-weight: {text.fontWeight}; font-style: {text.fontStyle};"
					>
						{text.text}
					</p>
				{/each}
			</div>
		</div>

		<div class="thumbnail-order-toggle">
			<Toggle
				labelText="Order"
				bind:toggled={thumbnailElementsOrderReversed}
				labelA={'Oldest'}
				labelB="Newest"
			/>
		</div>

		<div class="thumbnail-element-container">
			{#if !thumbnailElementsOrderReversed}
				{#each thumbnailImages as image, i}
					<ThumbnailGeneratorImage
						index={i}
						on:delete={() => handleDelete(image.elementType, i)}
						on:duplicate={() => handleDuplicate(image.elementType, i)}
						bind:top={image.top}
						bind:left={image.left}
						bind:width={image.width}
						bind:height={image.height}
						bind:zindex={image.zindex}
						bind:opacity={image.opacity}
						bind:dropShadowSize={image.dropShadowSize}
						bind:dropShadowColor={image.dropShadowColor}
						bind:borderWidth={image.borderWidth}
						bind:borderColor={image.borderColor}
						bind:borderRadius={image.borderRadius}
						bind:background={image.background}
						bind:color={image.color}
						bind:monsterRenderSize={image.monsterRenderSize}
						bind:fileType={image.fileType}
						bind:src={image.src}
						optionsList={getThumbnailGeneratorImagesFromType(image.fileType)}
						bind:optionId={image.optionId}
					/>
				{/each}
				{#each thumbnailUploadedImages as image, i}
					<ThumbnailGeneratorImage
						index={i}
						on:delete={() => handleDelete(image.elementType, i)}
						on:duplicate={() => handleDuplicate(image.elementType, i)}
						bind:top={image.top}
						bind:left={image.left}
						bind:width={image.width}
						bind:height={image.height}
						bind:zindex={image.zindex}
						bind:opacity={image.opacity}
						bind:dropShadowSize={image.dropShadowSize}
						bind:dropShadowColor={image.dropShadowColor}
						bind:borderWidth={image.borderWidth}
						bind:borderColor={image.borderColor}
						bind:borderRadius={image.borderRadius}
					/>
				{/each}
				{#each thumbnailTexts as textElement, i}
					<ThumbnailGeneratorText
						index={i}
						bind:text={textElement.text}
						on:delete={() => handleDelete(textElement.elementType, i)}
						on:duplicate={() => handleDuplicate(textElement.elementType, i)}
						bind:top={textElement.top}
						bind:left={textElement.left}
						bind:zindex={textElement.zindex}
						bind:opacity={textElement.opacity}
						bind:fontSize={textElement.fontSize}
						bind:fontFamily={textElement.fontFamily}
						bind:fontWeight={textElement.fontWeight}
						bind:fontStyle={textElement.fontStyle}
						bind:textDecoration={textElement.decoration}
						bind:textDecorationColor={textElement.decorationColor}
						bind:textShadowWidth={textElement.shadowWidth}
						bind:textShadowColor={textElement.shadowColor}
						bind:textColor={textElement.color}
						bind:textRotation={textElement.rotation}
					/>
				{/each}
			{:else}
				{#each [...thumbnailImages].reverse() as image, i}
					<ThumbnailGeneratorImage
						index={i}
						on:delete={() => handleDelete(image.elementType, i)}
						on:duplicate={() => handleDuplicate(image.elementType, i)}
						bind:top={image.top}
						bind:left={image.left}
						bind:width={image.width}
						bind:height={image.height}
						bind:zindex={image.zindex}
						bind:opacity={image.opacity}
						bind:dropShadowSize={image.dropShadowSize}
						bind:dropShadowColor={image.dropShadowColor}
						bind:borderWidth={image.borderWidth}
						bind:borderColor={image.borderColor}
						bind:borderRadius={image.borderRadius}
						bind:background={image.background}
						bind:color={image.color}
						bind:monsterRenderSize={image.monsterRenderSize}
						bind:fileType={image.fileType}
						bind:src={image.src}
						optionsList={getThumbnailGeneratorImagesFromType(image.fileType)}
						bind:optionId={image.optionId}
					/>
				{/each}
				{#each [...thumbnailUploadedImages].reverse() as image, i}
					<ThumbnailGeneratorImage
						index={i}
						on:delete={() => handleDelete(image.elementType, i)}
						on:duplicate={() => handleDuplicate(image.elementType, i)}
						bind:top={image.top}
						bind:left={image.left}
						bind:width={image.width}
						bind:height={image.height}
						bind:zindex={image.zindex}
						bind:opacity={image.opacity}
						bind:dropShadowSize={image.dropShadowSize}
						bind:dropShadowColor={image.dropShadowColor}
						bind:borderWidth={image.borderWidth}
						bind:borderColor={image.borderColor}
						bind:borderRadius={image.borderRadius}
					/>
				{/each}
				{#each [...thumbnailTexts].reverse() as textElement, i}
					<ThumbnailGeneratorText
						index={i}
						bind:text={textElement.text}
						on:delete={() => handleDelete(textElement.elementType, i)}
						on:duplicate={() => handleDuplicate(textElement.elementType, i)}
						bind:top={textElement.top}
						bind:left={textElement.left}
						bind:zindex={textElement.zindex}
						bind:opacity={textElement.opacity}
						bind:fontSize={textElement.fontSize}
						bind:fontFamily={textElement.fontFamily}
						bind:fontWeight={textElement.fontWeight}
						bind:fontStyle={textElement.fontStyle}
						bind:textDecoration={textElement.decoration}
						bind:textDecorationColor={textElement.decorationColor}
						bind:textShadowWidth={textElement.shadowWidth}
						bind:textShadowColor={textElement.shadowColor}
						bind:textColor={textElement.color}
						bind:textRotation={textElement.rotation}
					/>
				{/each}
			{/if}
		</div>
	</section>
</div>

<style lang="scss">
	.thumbnail-element-container {
		margin-top: 2rem;
		display: flex;
		flex-direction: column;
		gap: 1rem;
	}

	.weapon-info,
	.armor-info,
	.item-info {
		display: flex;
		flex-direction: column;
		justify-content: start;
		align-items: center;
	}

	.weapon-info-values,
	.armor-info-values,
	.item-info-values,
	.weapon-info-values-bottom,
	.weapon-sharpness-values {
		display: grid;
		grid-template-columns: repeat(auto-fit, minmax(128px, 1fr));
		margin: 1rem;
		gap: 1rem;
		align-items: center;
	}

	.container-weapon,
	.container-armor,
	.container-item {
		display: flex;
		flex-direction: column;
		gap: 1rem;
		margin-top: 2rem;
	}

	.container-weapon-buttons,
	.container-armor-buttons,
	.container-item-buttons,
	.container-buttons {
		display: flex;
		flex-direction: row;
		gap: 1rem;
		align-items: center;
		flex-wrap: wrap;
		margin-bottom: 1rem;
	}

	.page-2-blademaster,
	.page-2-armor,
	.bow-coatings {
		display: flex;
		flex-direction: column;
		gap: 1rem;
	}

	.page-3-bow,
	.page-1-item {
		display: grid;
		grid-template-columns: repeat(auto-fit, minmax(128px, 1fr));
		margin: 1rem;
		gap: 1rem;
	}

	.sigils,
	.armor-deco-skills,
	.page-3-armor,
	.page-3-item {
		display: grid;
		grid-template-columns: repeat(auto-fit, minmax(128px, 1fr));
		margin: 1rem;
		gap: 1rem;
	}

	.page-3-bowgun,
	.page-4-bowgun,
	.page-1-armor,
	.page-2-item {
		display: grid;
		grid-template-columns: repeat(auto-fit, minmax(128px, 1fr));
		margin: 1rem;
		gap: 1rem;
	}

	.icon-preview {
		display: flex;
		width: 100%;
		justify-content: center;
	}

	.thumbnail-container {
		overflow-x: auto; /* Enable horizontal scrolling */
		overflow-y: auto; /* Prevent vertical scrolling */
		border: 2px solid var(--ctp-surface0); /* Keep the border */
		white-space: nowrap; /* Prevent content from wrapping to the next line */
	}

	#generated-thumbnail-dom {
		position: relative; /* Changed from absolute to relative to allow border to be applied */
		width: 1280px; /* Fixed width to match the desired output size */
		height: 720px; /* Fixed height to match the desired output size */
	}

	.tower-weapon-properties {
		margin-top: 1rem;
		display: flex;
		align-items: center;
		gap: 1rem;
		flex-wrap: wrap;
	}

	.tower-weapon-property {
		text-align: center;
		align-items: center;
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

	.modal-content {
		display: flex;
		gap: var(--cds-spacing-06);
		flex-direction: column;
	}

	.thumbnail-order-toggle {
		width: 100%;
		display: flex;
		justify-content: center;
		align-items: center;
		margin: 1rem;
	}

	.thumbnail-generator-small-preview {
		margin-bottom: 1rem;
	}

	.tower-weapon-slider-container {
		display: flex;
		flex-wrap: wrap;
		flex-direction: row;
		align-items: center;
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
</style>
