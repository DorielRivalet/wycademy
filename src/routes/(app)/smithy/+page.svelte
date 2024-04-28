<script lang="ts">
	import {
		AilmentIcons,
		ArmorTypes,
		ColorCodes,
		ElementIcons,
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
	import { frontierMappers } from '$lib/client/modules/frontier/functions';
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
		FrontierWeapon,
		IconSize,
	} from '$lib/client/modules/frontier/types';
	import Item from '$lib/client/components/frontier/Item.svelte';
	import pageThumbnail from '$lib/client/images/icon/blacksmith.png';
	import ezlion, {
		type FrontierArmorSkillName,
		type FrontierArmorSkillTree,
		type FrontierWeaponClass,
		type FrontierZenithSkill,
	} from 'ezlion';
	import type { HTMLImgAttributes } from 'svelte/elements';
	import Upload from 'carbon-icons-svelte/lib/Upload.svelte';
	import ImageSearch from 'carbon-icons-svelte/lib/ImageSearch.svelte';
	import Add from 'carbon-icons-svelte/lib/Add.svelte';
	import Delete from 'carbon-icons-svelte/lib/Delete.svelte';
	import CharacterUppercase from 'carbon-icons-svelte/lib/CharacterUppercase.svelte';
	import ColorPalette from 'carbon-icons-svelte/lib/ColorPalette.svelte';
	import ColorSwitch from 'carbon-icons-svelte/lib/ColorSwitch.svelte';
	import TextColor from 'carbon-icons-svelte/lib/TextColor.svelte';
	import TextFill from 'carbon-icons-svelte/lib/TextFill.svelte';
	import TextCreation from 'carbon-icons-svelte/lib/TextCreation.svelte';
	import TextFont from 'carbon-icons-svelte/lib/TextFont.svelte';
	import TextItalic from 'carbon-icons-svelte/lib/TextItalic.svelte';
	import TextStrikethrough from 'carbon-icons-svelte/lib/TextStrikethrough.svelte';
	import TextBold from 'carbon-icons-svelte/lib/TextBold.svelte';
	import TextScale from 'carbon-icons-svelte/lib/TextScale.svelte';
	import TextUnderline from 'carbon-icons-svelte/lib/TextUnderline.svelte';
	import TextAlignCenter from 'carbon-icons-svelte/lib/TextAlignCenter.svelte';
	import TextAlignLeft from 'carbon-icons-svelte/lib/TextAlignLeft.svelte';
	import TextAlignRight from 'carbon-icons-svelte/lib/TextAlignRight.svelte';
	import TextVerticalAlignment from 'carbon-icons-svelte/lib/TextVerticalAlignment.svelte';
	import Txt from 'carbon-icons-svelte/lib/Txt.svelte';
	import StringText from 'carbon-icons-svelte/lib/StringText.svelte';
	import Edit from 'carbon-icons-svelte/lib/Edit.svelte';
	import InlineTooltip from '$lib/client/components/frontier/InlineTooltip.svelte';
	import FileUploaderDropContainer from 'carbon-components-svelte/src/FileUploader/FileUploaderDropContainer.svelte';
	import { getHexStringFromCatppuccinColor } from '$lib/client/themes/catppuccin';
	import { theme } from '$lib/client/stores/theme';
	import ColorPicker from 'svelte-awesome-color-picker';

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
		// Remove duplicates based on 'id'
		const uniqueResult = array.filter(
			(obj, index) => array.findIndex((item) => item.id === obj.id) === index,
		);
		return uniqueResult;
	}

	function getArmorSkills() {
		let array: dropdownItem[] = [{ id: '', text: 'None' }];
		Object.values(ezlion.SkillArmor).forEach((element) => {
			if (element !== '' && element !== 'None') {
				array = [...array, { id: element, text: element }];
			}
		});

		// Remove duplicates based on 'id'
		const uniqueResult = array.filter(
			(obj, index) => array.findIndex((item) => item.id === obj.id) === index,
		);
		return uniqueResult;
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

	function getThumbnailGeneratorImagesFromType(
		type: FrontierImageType | 'Habitat',
	) {
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
		}

		list = list.filter((e) => e.icon !== '');

		let result: DropdownItem[] = [];
		list.forEach((element) => {
			if (
				(type === 'Monster Icon' || type === 'Element') &&
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

	function addThumbnailImage() {
		if (thumbnailImages.length > 16) {
			return;
		}
		thumbnailImages = [
			...thumbnailImages,
			{
				fileFormat: thumbnailGeneratorImageFormat,
				fileType: thumbnailGeneratorImageType,
				src: getIconBlobFromIconMetaData(
					thumbnailGeneratorImageType,
					thumbnailGeneratorImageIdFromList,
					'128px',
					thumbnailGeneratorImageFormat,
					thumbnailGeneratorImageColor,
				),
				alt: 'Thumbnail Image',
				top: 0,
				left: 0,
				width: 128,
				height: 128,
				zindex: 1,
				opacity: 1,
				dropShadowSize: thumbnailGeneratorImageShadowWidth,
				dropShadowColor: thumbnailGeneratorImageShadowColor,
				borderWidth: thumbnailGeneratorImageBorderWidth,
				borderColor: thumbnailGeneratorImageBorderColor,
				borderRadius: thumbnailGeneratorImageBorderRadius,
				background: thumbnailGeneratorImageBackground,
				color: thumbnailGeneratorImageColor,
			},
		];
	}

	function removeThumbnailImage(index: number) {
		thumbnailImages.splice(index, 1);
	}

	function addThumbnailText() {
		if (thumbnailTexts.length > 16) {
			return;
		}
		thumbnailTexts = [
			...thumbnailTexts,
			{
				text: thumbnailGeneratorText,
				top: 100,
				left: 100,
				zindex: 1,
				opacity: 1,
				fontSize: thumbnailGeneratorTextFontSize,
				gradientolor: thumbnailGeneratorTextColor,
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

	function removeThumbnailText(index: number) {
		thumbnailTexts.splice(index, 1);
	}

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

	function addUploadedImage(files: ReadonlyArray<File>) {
		if (files.length === 0 || thumbnailUploadedImages.length > 16) {
			return;
		}
		thumbnailUploadedImages = [
			...thumbnailUploadedImages,
			{
				fileType: files[files.length - 1].type.toLowerCase(),
				src: URL.createObjectURL(files[files.length - 1]),
				alt: 'Thumbnail Image',
				top: 0,
				left: 0,
				width: 128,
				height: 128,
				zindex: 1,
				opacity: 1,
				dropShadowSize: thumbnailGeneratorUploadedImageShadowWidth,
				dropShadowColor: thumbnailGeneratorUploadedImageShadowColor,
				borderWidth: thumbnailGeneratorUploadedImageBorderWidth,
				borderColor: thumbnailGeneratorUploadedImageBorderColor,
				borderRadius: thumbnailGeneratorUploadedImageBorderRadius,
			},
		];
	}

	let selectedIconFormat: 'Vector' | 'Raster' = 'Vector';
	let selectedIconMonsterRenderSize: 'Small' | 'Full' = 'Full';
	let selectedIconSize: IconSize = '256px';
	let selectedIconType: FrontierImageType = 'Monster Icon';
	const unlistedMonsterNames = ['Random', 'Cactus', 'PSO2 Rappy'];
	let uniqueMonsters = getUniqueMonsters().sort(
		(a, b) =>
			(a?.displayName?.codePointAt(0) ?? 0) -
			(b?.displayName?.codePointAt(0) ?? 0),
	);
	let selectedIconIdFromList = 'Abiorugu';
	let allFrontierColors = getAllFrontierColors();
	let selectedIconColor = allFrontierColors[0].id;
	let selectedIconBackground = false;

	let thumbnailImages: HTMLImgAttributes[] = [];
	let thumbnailUploadedImages: HTMLImgAttributes[] = [];
	let thumbnailTexts: HTMLParagraphElement[] = [];

	let thumbnailGeneratorImageFormat: 'SVG' | 'PNG' = 'SVG';
	let thumbnailGeneratorImageType: FrontierImageType = 'Monster Icon';
	let thumbnailGeneratorImageIdFromList = 'Abiorugu';
	let thumbnailGeneratorImageColor = allFrontierColors[0].id;
	let thumbnailGeneratorImageBackground = false;
	let thumbnailGeneratorBackgroundGradientStartColor =
		getHexStringFromCatppuccinColor('mantle', $theme);
	let thumbnailGeneratorBackgroundGradientEndColor =
		getHexStringFromCatppuccinColor('crust', $theme);
	let thumbnailGeneratorBackgroundGradientRotation = 45;
	let thumbnailGeneratorBackgroundGradientLinear = false;
	let thumbnailGeneratorImageShadowColor = '#000';
	let thumbnailGeneratorImageShadowWidth = 4;
	let thumbnailGeneratorImageBorderWidth = 0;
	let thumbnailGeneratorImageBorderColor = '#000';
	let thumbnailGeneratorImageBorderRadius = 5;

	let thumbnailGeneratorBorderWidth = 12;
	let thumbnailGeneratorBorderStyle = 'outset';
	let thumbnailGeneratorBorderColor = getHexStringFromCatppuccinColor(
		'red',
		$theme,
	);
	let thumbnailGeneratorBorder = false;

	let thumbnailGeneratorImageFiles: ReadonlyArray<File> = [];

	let thumbnailGeneratorText = '5 Musous No Hit SW+CS';
	let thumbnailGeneratorTextFontSize = 48;
	let thumbnailGeneratorTextColor = '#000';
	let thumbnailGeneratorTextRotation = 0;
	let thumbnailGeneratorTextShadowColor = '#f00';
	let thumbnailGeneratorTextShadowWidth = 1;
	let thumbnailGeneratorTextFontFamily = 'Arial';
	let thumbnailGeneratorTextFontStyle = 'italic';
	let thumbnailGeneratorTextFontWeight = 'Bold';
	let thumbnailGeneratorTextDecoration = 'underline';
	let thumbnailGeneratorTextDecorationColor = '#f00';

	let thumbnailGeneratorSectionOption: 'Text' | 'Image' | 'Custom Image' =
		'Image';

	let thumbnailGeneratorUploadedImageShadowWidth = 4;
	let thumbnailGeneratorUploadedImageShadowColor = '#000';
	let thumbnailGeneratorUploadedImageBorderWidth = 4;
	let thumbnailGeneratorUploadedImageBorderColor = '#000';
	let thumbnailGeneratorUploadedImageBorderRadius = 5;

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
		<p class="spaced-paragraph"></p>
	</section>
	<section>
		<SectionHeading level={2} title="Icons" />
		<p class="spaced-paragraph">
			You can find the image for the monster backgrounds in our <OutboundLink
				href="https://github.com/DorielRivalet/wycademy/blob/main/src/lib/client/images/monster/bg-512.webp"
				>repository</OutboundLink
			>
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
					titleText="Format"
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
		<p>Rule of thirds:</p>
		<ul class="spaced-list">
			<li>X: 427, 853</li>
			<li>Y: 240, 480</li>
		</ul>
		<div class="container-item-buttons">
			<Button
				kind="tertiary"
				icon={Download}
				on:click={downloadGeneratedThumbnailImage}>Download</Button
			>
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
					]}
				/>

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
						{ id: '300', text: '300' },
						{ id: '400', text: '400' },
						{ id: '500', text: '500' },
						{ id: '700', text: '700' },
						{ id: '900', text: '900' },
						{ id: 'Bold', text: 'Bold' },
					]}
				/>

				<Dropdown
					titleText="Text Decoration"
					type="inline"
					bind:selectedId={thumbnailGeneratorTextDecoration}
					items={[
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
					bind:selectedId={thumbnailGeneratorImageIdFromList}
					items={thumbnailGeneratorImagesFromType}
				/>
				{#if selectedIconType === 'Armor' || selectedIconType === 'Item' || selectedIconType === 'Weapon'}
					<Dropdown
						type="inline"
						titleText="Color"
						bind:selectedId={thumbnailGeneratorImageColor}
						items={allFrontierColors}
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

		<div class="thumbnail-container">
			<div style={thumbnailGeneratorPreviewStyle} id="generated-thumbnail-dom">
				{#each thumbnailImages as image, i}
					{#if image.fileType === 'Location' || image.fileType === 'Habitat'}
						<img
							src={image.src.image}
							alt={image.alt}
							style="position: absolute; top: {image.top}px; left: {image.left}px; width: {image.width}px; height: {image.height}px; z-index: {image.zindex}; opacity: {image.opacity}; filter: drop-shadow(0 0 {image.dropShadowSize}px {image.dropShadowColor}); border-color: {image.borderColor}; border-style: solid; border-radius: {image.borderRadius}px; border-width: {image.borderWidth}px {image.borderWidth}px {image.borderWidth}px {image.borderWidth}px;"
						/>
					{:else}
						<div
							style="position: absolute; top: {image.top}px; left: {image.left}px; width: {image.width}px; height: {image.height}px; z-index: {image.zindex}; opacity: {image.opacity}; filter: drop-shadow(0 0 {image.dropShadowSize}px {image.dropShadowColor}); border-color: {image.borderColor}; border-style: solid; border-radius: {image.borderRadius}px; border-width: {image.borderWidth}px {image.borderWidth}px {image.borderWidth}px {image.borderWidth}px;"
						>
							<svelte:component
								this={image.src.component}
								{...{ color: image.color, background: image.background }}
							/>
						</div>
					{/if}
				{/each}
				{#each thumbnailUploadedImages as image, i}
					{#if image.fileType !== 'image/svg+xml'}
						<img
							src={image.src}
							alt={image.alt}
							style="position: absolute; top: {image.top}px; left: {image.left}px; width: {image.width}px; height: {image.height}px; z-index: {image.zindex}; opacity: {image.opacity}; filter: drop-shadow(0 0 {image.dropShadowSize}px {image.dropShadowColor}); border-color: {image.borderColor}; border-style: solid; border-radius: {image.borderRadius}px; border-width: {image.borderWidth}px {image.borderWidth}px {image.borderWidth}px {image.borderWidth}px;"
						/>
					{:else if image.fileType === 'image/svg+xml'}
						<img
							src={image.src}
							alt={image.alt}
							style="position: absolute; top: {image.top}px; left: {image.left}px; width: {image.width}px; height: {image.height}px; z-index: {image.zindex}; opacity: {image.opacity}; filter: drop-shadow(0 0 {image.dropShadowSize}px {image.dropShadowColor}); border-color: {image.borderColor}; border-style: solid; border-radius: {image.borderRadius}px; border-width: {image.borderWidth}px {image.borderWidth}px {image.borderWidth}px {image.borderWidth}px;"
						/>
					{/if}
				{/each}
				{#each thumbnailTexts as text, i}
					<p
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
	</section>
</div>

<style lang="scss">
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
</style>
