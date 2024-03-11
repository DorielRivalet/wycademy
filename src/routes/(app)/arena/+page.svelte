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
	import pageThumbnail from '$lib/client/images/icon/pvp.webp';
	import type { FrontierWeaponClass, FrontierWeaponName } from 'ezlion';
	import type {
		FrontierMotionValue,
		FrontierRarity,
		FrontierWeapon,
	} from '$lib/client/modules/frontier/types';
	import Dropdown from 'carbon-components-svelte/src/Dropdown/Dropdown.svelte';
	import { WeaponTypes } from '$lib/client/modules/frontier/objects';
	import Toolbar from 'carbon-components-svelte/src/DataTable/Toolbar.svelte';
	import Link from 'carbon-components-svelte/src/Link/Link.svelte';
	import Launch from 'carbon-icons-svelte/lib/Launch.svelte';
	import Modal from 'carbon-components-svelte/src/Modal/Modal.svelte';
	import Image from 'carbon-icons-svelte/lib/Image.svelte';
	import { goto } from '$app/navigation';
	import Download from 'carbon-icons-svelte/lib/Download.svelte';
	import SectionHeading from '$lib/client/components/SectionHeading.svelte';
	import Upload from 'carbon-icons-svelte/lib/Upload.svelte';
	import Restart from 'carbon-icons-svelte/lib/Restart.svelte';
	import DocumentDownload from 'carbon-icons-svelte/lib/DocumentDownload.svelte';

	type dropdownItem = { id: string; text: string };

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

	const maxTrueRaw = 8_000;

	let rarity: FrontierRarity = 1;
	let weaponIconProps = {
		rarity: rarity,
	};
	let sharedMotionValues = getSharedMotionValues();

	const minimumNumberValue = 0;
	const maximumNumberValue = 99999;
	const invalidNumberValueText = `Invalid value. Must be between ${minimumNumberValue} and ${maximumNumberValue}`;

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

	function getWeaponSectionMotionValues(
		weaponName: FrontierWeaponName,
		section: string,
	) {
		let defaultResult = [
			{
				id: '',
				name: '',
				motion: '',
				raw: '0', // TODO
				element: '0',
				total: '0',
				fire: '0',
				water: '0',
				thunder: '0',
				ice: '0',
				dragon: '0',
			},
		];

		// Find the weapon by name
		const weaponEntry = weaponMotionValues.find((w) => w.name === weaponName);
		if (!weaponEntry) {
			// Return an empty object or an error message if the weapon is not found
			return defaultResult; // or throw new Error('Weapon not found');
		}

		// Find the section by name within the found weapon
		const sectionEntry = weaponEntry.sections.find((s) => s.name === section);
		if (!sectionEntry) {
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
			}[] = [];

			weaponEntry.sections[0].motionValues.forEach((element, index) => {
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
				});
			});

			inputWeaponMotionValuesSection = weaponEntry.sections[0].name;
			return result;
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
		}[] = [];

		sectionEntry.motionValues.forEach((element, index) => {
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
			});
		});

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

	function changeModal(cell: DataTableCell, section: string) {
		modalOpen = true;
		modalHeading = cell.value;
		let motionValue = getMotionValue(inputWeaponType, section, cell.value);
		modalLabel = section || '';
		modalImage = motionValue.animation || '';
		modalNotes = motionValue.notes || '';
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
		console.log(newInputs.inputStyleRankAffinity);
		console.log(inputStyleRankAffinity);

		inputMeleeSharpness = newInputs.inputMeleeSharpness || inputMeleeSharpness;
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
		inputElementalAttack =
			newInputs.inputElementalAttack || inputElementalAttack;
		inputHhElementalUp = newInputs.inputHhElementalUp || inputHhElementalUp;
		inputAbnormality = newInputs.inputAbnormality || inputAbnormality;
		inputDrugKnowledge = newInputs.inputDrugKnowledge || inputDrugKnowledge;
		inputStatusAssault = newInputs.inputStatusAssault || inputStatusAssault;
		inputStatusAttackUp = newInputs.inputStatusAttackUp || inputStatusAttackUp;
		inputGuildPoogie = newInputs.inputGuildPoogie || inputGuildPoogie;
		inputStatusSigil = newInputs.inputStatusSigil || inputStatusSigil;
		inputWeaponModifiers =
			newInputs.inputWeaponModifiers || inputWeaponModifiers;
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
		inputCompressedShot = newInputs.inputCompressedShot || inputCompressedShot;
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
		inputWeaponMultipliers =
			newInputs.inputWeaponMultipliers || inputWeaponMultipliers;
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

		// TODO number inputs
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
		inputNumberAttackValue =
			newInputs.inputNumberAttackValue || inputNumberAttackValue;
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
		inputNumberElementalValue =
			newInputs.inputNumberElementalValue || inputNumberElementalValue;
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
		inputNumberRawHitbox =
			newInputs.inputNumberRawHitbox || inputNumberRawHitbox;
		inputNumberFireHitbox =
			newInputs.inputNumberFireHitbox || inputNumberFireHitbox;
		inputNumberWaterHitbox =
			newInputs.inputNumberWaterHitbox || inputNumberWaterHitbox;
		inputNumberThunderHitbox =
			newInputs.inputNumberThunderHitbox || inputNumberThunderHitbox;
		inputNumberIceHitbox =
			newInputs.inputNumberIceHitbox || inputNumberIceHitbox;
		inputNumberDragonHitbox =
			newInputs.inputNumberDragonHitbox || inputNumberDragonHitbox;
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

	function getFuriousMultiplier(outputFurious: number) {
		let result = 1;
		if (outputFurious == 0) {
			return result;
		} else if (outputFurious == 70) {
			return 1.05;
		} else if (outputFurious == 100) {
			return 1.1;
		} else if (outputFurious == 180) {
			return 1.2;
		}

		return result;
	}

	function getDrugKnowledgeAddition(
		outputDrugKnowledge: number,
		outputDrugKnowledgeUp: number,
		outputFurious: number,
		outputStatusValue: number,
		outputStatusAttack: number,
		outputStatusGuildPoogie: number,
		outputStatusSigil: number,
	) {
		let drugKnowledgeRaw = 0;

		if (outputDrugKnowledge == 1) {
			let furious = getFuriousMultiplier(outputFurious) || 1;
			drugKnowledgeRaw = Math.floor(
				Math.floor(
					(outputStatusValue *
						outputStatusAttack *
						outputStatusGuildPoogie *
						outputStatusSigil *
						furious) /
						10,
				) *
					outputDrugKnowledgeUp *
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
			if (outputCritUp == 1) {
				result = 0 + Math.floor(Math.sqrt(naturalAffinity) * 5);
			} else if (outputCritUp == 2) {
				result = 0 + Math.floor(Math.sqrt(naturalAffinity) * 10);
			} else {
				result = 0;
			}
		} else {
			if (outputCritUp == 1) {
				result =
					Math.floor(Math.sqrt(outputCritConversion - 100) * 7) +
					Math.floor(Math.sqrt(naturalAffinity) * 5);
			} else if (outputCritUp == 2) {
				result =
					Math.floor(Math.sqrt(outputCritConversion - 100) * 7) +
					Math.floor(Math.sqrt(naturalAffinity) * 10);
			} else {
				result = Math.floor(Math.sqrt(outputCritConversion - 100) * 7);
			}
		}

		return result;
	}

	function getLengthAttackValue(outputLengthType: number, trueRaw: number) {
		let result = 0;
		if (outputLengthType == 1) {
			result = Math.ceil(trueRaw - (trueRaw * 0.07 + 0.7));
		} else if (outputLengthType == 2) {
			result = Math.ceil(trueRaw - (+trueRaw * 0.07 + 1));
		} else if (outputLengthType == 0) {
			result = trueRaw;
		}

		return result;
	}

	function getObscurityValue(
		weaponClass: FrontierWeaponClass,
		weaponType: FrontierWeaponName,
		outputObscurityLevel: number,
	) {
		let obscurityArray: number[] = [];
		let obscurity = 0;

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

	function getFinalAttackValue(
		additions: number,
		multipliers: number,
		weaponTypeMultiplier: number,
		missionRequirement: Array<number>,
	) {
		let lengthUp = 0;
		let result = Math.floor(additions / multipliers);
		let bloatedResult = Math.floor(
			Math.floor(additions + Math.floor(multipliers)) * weaponTypeMultiplier,
		);

		let attackCeiling = Math.ceil(
			(Math.floor(additions + multipliers) - 800) / 40,
		);

		let attackCeilingDisplay = 0;
		let missionsNeededDisplay = 0;

		if (attackCeiling < 0) {
			attackCeilingDisplay = 0;
			missionsNeededDisplay = 0;
		} else if (attackCeiling > 110 && attackCeiling < 180) {
			attackCeilingDisplay = attackCeiling;
			missionsNeededDisplay = missionRequirement[attackCeiling - 1];
		} else if (attackCeiling > 180) {
			attackCeilingDisplay = 180;
			result = maxTrueRaw;
			bloatedResult = Math.floor(maxTrueRaw * weaponTypeMultiplier);
			missionsNeededDisplay = 249;
		} else {
			attackCeilingDisplay = attackCeiling;
			if (attackCeiling <= 0) {
				missionsNeededDisplay = 0;
			} else {
				missionsNeededDisplay = missionRequirement[attackCeiling - 1];
			}
		}

		let roundedResult = Math.floor(
			Math.floor(additions + Math.floor(multipliers)) * weaponTypeMultiplier,
		);

		return roundedResult;
	}

	let inputTextImportData = '';

	let modalHeading = '';
	let modalLabel = '';
	let url = $page.url.toString();
	let modalOpen = false;
	let modalImage = '';
	let modalNotes = '';

	let inputStyleRankAffinity = 'None';
	let inputMeleeSharpness = 'Below Blue or Gunners (+0%)';
	let inputExpertSkills = 'None';
	let inputFlashConversion = 'None';
	let inputIssenSkills = 'None or Determination';
	let inputCeaseless = 'None (1x)';
	let inputStarvingWolf = 'None (1x)';
	let inputAffinityItems = 'None';
	let inputGsActiveFeature = 'None';
	let inputAttackSkills = 'None';
	let inputCaravanSkills = 'None (1x)';
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
	let inputElementalAttack = 'None (1x)';
	let inputHhElementalUp = 'None (1x)';
	let inputAbnormality = 'None';
	let inputDrugKnowledge = 'Standard (0.38x Status)';
	let inputStatusAssault = 'None';
	let inputStatusAttackUp = 'None (1x)';
	let inputGuildPoogie = 'None (1x)';
	let inputStatusSigil = 'None (1x)';
	let inputWeaponModifiers = 'None (1x)';
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
	let inputCompressedShot = 'Not Compressed (x1)';
	let inputBowCoatingsMultiplier = 'None (1x)';
	let inputChargeMultiplier = 'Lv4 (1.85x / 1.334x)';
	let inputQuickShot = 'Normal (All 1.0x)';
	let inputCompressedElementShot = 'Not Compressed';
	let inputElement = 'None';
	let inputAoeElementSigil = 'None';
	let inputWeaponMultipliers = 'None (1x)';
	let inputStatus = 'None';
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

	// TODO number inputs
	let inputNumberCritConversion = 0;
	let inputNumberRoadFloor = 0;
	let inputNumberConquestAttack = 0;
	let inputNumberVampirism = 0;
	let inputNumberTotalMotionValue = 125;
	let inputNumberHitCount = 0;
	let inputNumberElementalMultiplier = 1;
	let inputNumberAttackValue = 770;
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
	let inputNumberElementalValue = 0;
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
	let inputNumberRawHitbox = 30;
	let inputNumberFireHitbox = 30;
	let inputNumberWaterHitbox = 30;
	let inputNumberThunderHitbox = 30;
	let inputNumberIceHitbox = 30;
	let inputNumberDragonHitbox = 30;

	let inputWeaponMotionValuesSection = 'None';

	$: inputs = {
		inputStyleRankAffinity: inputStyleRankAffinity,
		inputMeleeSharpness: inputMeleeSharpness,
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
		inputElementalAttack: inputElementalAttack,
		inputHhElementalUp: inputHhElementalUp,
		inputAbnormality: inputAbnormality,
		inputDrugKnowledge: inputDrugKnowledge,
		inputStatusAssault: inputStatusAssault,
		inputStatusAttackUp: inputStatusAttackUp,
		inputGuildPoogie: inputGuildPoogie,
		inputStatusSigil: inputStatusSigil,
		inputWeaponModifiers: inputWeaponModifiers,
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
		inputCompressedShot: inputCompressedShot,
		inputCompressedElementShot: inputCompressedElementShot,
		inputBowCoatingsMultiplier: inputBowCoatingsMultiplier,
		inputChargeMultiplier: inputChargeMultiplier,
		inputQuickShot: inputQuickShot,
		inputElement: inputElement,
		inputAoeElementSigil: inputAoeElementSigil,
		inputWeaponMultipliers: inputWeaponMultipliers,
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
		inputNumberAttackValue: inputNumberAttackValue,
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
		inputNumberElementalValue: inputNumberElementalValue,
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
		inputNumberRawHitbox: inputNumberRawHitbox,
		inputNumberFireHitbox: inputNumberFireHitbox,
		inputNumberWaterHitbox: inputNumberWaterHitbox,
		inputNumberThunderHitbox: inputNumberThunderHitbox,
		inputNumberIceHitbox: inputNumberIceHitbox,
		inputNumberDragonHitbox: inputNumberDragonHitbox,
	};

	$: modalBlurClass = modalOpen ? 'modal-open-blur' : 'modal-open-noblur';
	$: weaponSections = getWeaponSectionMotionValues(
		inputWeaponType,
		inputWeaponMotionValuesSection,
	);
	$: console.log(inputWeaponType);
	$: weaponSectionNames = getWeaponSectionNames(inputWeaponType);
	$: weaponIcon = getWeaponIcon(inputWeaponType);
	$: inputTextInputs = prettyPrintJson(inputs);

	$: outputStarvingWolfAffinity =
		affinityDropdownItems.find((item) => item.name === inputStarvingWolf)
			?.value || 0;
	$: outputCeaselessAffinity =
		affinityDropdownItems.find((item) => item.name === inputCeaseless)?.value ||
		0;
	$: outputFuriousAffinity =
		affinityDropdownItems.find((item) => item.name === inputFurious)?.value ||
		0;
	$: outputIssenAffinity =
		affinityDropdownItems.find((item) => item.name === inputIssenSkills)
			?.value || 0;
	$: outputSharpnessAffinity =
		affinityDropdownItems.find((item) => item.name === inputSharpness)?.value ||
		0;
	$: outputStyleRankAffinity =
		affinityDropdownItems.find((item) => item.name === inputStyleRankAffinity)
			?.value || 0;
	$: outputExpertAffinity =
		affinityDropdownItems.find((item) => item.name === inputExpertSkills)
			?.value || 0;
	$: outputFlashConversionAffinity =
		affinityDropdownItems.find((item) => item.name === inputFlashConversion)
			?.value || 0;
	$: outputFGSActiveFeatureAffinity =
		affinityDropdownItems.find((item) => item.name === inputGsActiveFeature)
			?.value || 0;
	$: outputDrinkAffinity =
		affinityDropdownItems.find((item) => item.name === inputAffinityItems)
			?.value || 0;

	$: outputAOEAffinityCount =
		sigilDropdownItems.find((item) => item.name === inputAoeAffinitySigil)
			?.value || 0;

	$: outputAOETotalAffinity =
		outputAOEAffinityCount === 0 || inputNumberAOEAffinitySigil === 0
			? 0
			: 20 * outputAOEAffinityCount + outputAOEAffinityCount * 2;

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

	$: outputWeaponTypeMultiplier =
		WeaponTypes.find((weaponType) => weaponType.name === inputWeaponType)
			?.bloatAttackMultiplier || 1.2;

	$: outputWeaponDisplayedAttack = Math.ceil(
		inputNumberTrueRaw * outputWeaponTypeMultiplier,
	);

	$: outputTrueRaw = Math.ceil(
		outputWeaponDisplayedAttack / outputWeaponTypeMultiplier,
	);

	$: outputRoadAdvLvFlr =
		multipliedBaseDropdownItems.find((item) => item.name === inputRoadAdvLvFlr)
			?.value || 0;

	$: outputRoadAdvancement = getRoadAdvancementValue(
		outputRoadAdvLvFlr,
		inputNumberRoadFloor,
	);

	$: outputVigorousUp = inputVigorousUp === 'Active (+50 Ranged, +100 Melee)';
	$: outputAdrenaline =
		multipliersDropdownItems.find(
			(item) => item.name === inputAdrenalineVigorous,
		)?.value || 0;

	$: outputVigorousAddition =
		outputVigorousUp && outputAdrenaline === 1.15
			? getWeaponClass(inputWeaponType) === 'Blademaster'
				? 100
				: 50
			: 0;

	$: outputCaravanMultiplier =
		multipliersDropdownItems.find((item) => item.name === inputCaravanSkills)
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

	$: outputRush =
		multipliedBaseDropdownItems.find((item) => item.name === inputRush)
			?.value || 0;

	$: outputStylishAssault =
		multipliedBaseDropdownItems.find(
			(item) => item.name === inputStylishAssault,
		)?.value || 0;

	$: outputFurious =
		multipliedBaseDropdownItems.find((item) => item.name === inputFurious)
			?.value || 0;

	$: outputCritConversion =
		multipliedBaseDropdownItems.find(
			(item) => item.name === inputCritConversion,
		)?.value || 0;

	$: outputObscurity =
		multipliedBaseDropdownItems.find((item) => item.name === inputObscurity)
			?.value || 0;

	$: outputIncitement =
		multipliedBaseDropdownItems.find((item) => item.name === inputIncitement)
			?.value || 0;

	/* Rush / Stylish Assault / Vampirism / Flash Conversion / Obscurity / Incitement / Furious / Vigorous Up
does not get multiplied by horn */
	$: attackB =
		outputRush +
		outputStylishAssault +
		outputFurious +
		outputVigorousAddition +
		outputCritConversion +
		inputNumberVampirism +
		outputObscurity +
		outputIncitement;

	$: outputAttackMedicine =
		multipliedBaseDropdownItems.find(
			(item) => item.name === inputAttackMedicine,
		)?.value || 0;

	$: outputAttackSkill =
		multipliedBaseDropdownItems.find((item) => item.name === inputAttackSkills)
			?.value || 0;
	$: outputFoodAttack =
		multipliedBaseDropdownItems.find(
			(item) => item.name === inputFoodConsumables,
		)?.value || 0;
	$: outputSeedAttack =
		multipliedBaseDropdownItems.find(
			(item) => item.name === inputSeedsFlutesCat,
		)?.value || 0;
	$: outputUnlimitedSigilAttack = 10 * inputNumberUnlimitedSigil; // TODO

	$: outputDrugKnowledge =
		multipliersDropdownItems.find((item) => item.name === inputDrugKnowledge)
			?.value || 0;
	$: outputDrugKnowledgeUp =
		multipliersDropdownItems.find((item) => item.name === inputDrugKnowledge)
			?.value || 0;
	$: outputStatusValue =
		multipliersDropdownItems.find((item) => item.name === inputStatusAttackUp)
			?.value || 0;
	$: outputStatusAttack =
		multipliersDropdownItems.find((item) => item.name === inputStatusAssault)
			?.value || 0;
	$: outputStatusGuildPoogie =
		multipliersDropdownItems.find((item) => item.name === inputGuildPoogie)
			?.value || 0;
	$: outputStatusSigil =
		multipliersDropdownItems.find((item) => item.name === inputStatusSigil)
			?.value || 0;

	$: outputDrugKnowledgeTotal = getDrugKnowledgeAddition(
		outputDrugKnowledge,
		outputDrugKnowledgeUp,
		outputFurious,
		outputStatusValue,
		outputStatusAttack,
		outputStatusGuildPoogie,
		outputStatusSigil,
	);
	$: outputPassives =
		multipliedBaseDropdownItems.find(
			(item) => item.name === inputAttackMedicine,
		)?.value || 0;

	$: outputLoneWolfAttack =
		multipliedBaseDropdownItems.find((item) => item.name === inputLoneWolf)
			?.value || 0;

	$: outputDuremudiraAttack =
		multipliedBaseDropdownItems.find(
			(item) => item.name === inputDuremudiraAttack,
		)?.value || 0;
	$: outputRisingAttack =
		multipliedBaseDropdownItems.find(
			(item) => item.name === inputPrecisionSniperCritS,
		)?.value || 0;
	$: outputDrugAttack =
		multipliedBaseDropdownItems.find((item) => item.name === inputDrugKnowledge)
			?.value || 0;
	$: outputConsumptionSlayerAttack =
		multipliedBaseDropdownItems.find(
			(item) => item.name === inputConsumptionSlayer,
		)?.value || 0;
	$: outputRoadLastStandAttack =
		multipliedBaseDropdownItems.find((item) => item.name === inputRoadLastStand)
			?.value || 0;

	$: outputLanceRedPhialAttack =
		multipliedBaseDropdownItems.find((item) => item.name === inputLanceHbg)
			?.value || 0;
	$: outputTowerAttack =
		multipliedBaseDropdownItems.find(
			(item) => item.name === inputDuremudiraAttack,
		)?.value || 0;

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
		outputDrugKnowledgeTotal +
		outputDuremudiraAttack +
		outputLoneWolfAttack +
		outputCaravanAddition +
		outputRisingAttack +
		outputRoadAdvancement +
		Math.floor(outputDrugAttack * 0.025) +
		outputConsumptionSlayerAttack +
		outputRoadLastStandAttack +
		outputLanceRedPhialAttack +
		outputTowerAttack +
		outputZenithTotalAttack +
		outputAOETotalAttack;

	$: outputHuntingHornMultiplier =
		multipliedBaseDropdownItems.find((item) => item.name === inputHhAttackSongs)
			?.value || 0;

	$: outputConsumptionSlayerAttackMultiplier =
		multipliedBaseDropdownItems.find(
			(item) => item.name === inputConsumptionSlayer,
		)?.value || 0;
	$: outputHidenMultiplier =
		multipliedBaseDropdownItems.find((item) => item.name === inputHidenSkills)
			?.value || 0;
	$: outputHammerMultiplier =
		multipliedBaseDropdownItems.find(
			(item) => item.name === inputChargeMultiplier,
		)?.value || 0;

	$: outputMultipliers =
		Math.floor(attackA * outputHuntingHornMultiplier + attackB) *
		outputAdrenaline *
		outputConsumptionSlayerAttackMultiplier *
		outputWeaponTypeMultiplier *
		outputHidenMultiplier *
		outputHammerMultiplier;

	$: outputPartnyaBond =
		flatAdditionsDropdownItems.find((item) => item.name === inputPartnyaaBond)
			?.value || 0;

	$: outputHunterBond =
		flatAdditionsDropdownItems.find((item) => item.name === inputBondMaleHunter)
			?.value || 0;

	$: outputAssist =
		flatAdditionsDropdownItems.find((item) => item.name === inputAssistance)
			?.value || 0;

	$: outputSoul =
		flatAdditionsDropdownItems.find((item) => item.name === inputRedSoul)
			?.value || 0;

	$: outputArmor1 =
		flatAdditionsDropdownItems.find((item) => item.name === inputArmor1)
			?.value || 0;

	$: outputArmor2 =
		flatAdditionsDropdownItems.find((item) => item.name === inputOriginArmor)
			?.value || 0;

	$: outputArmorG =
		flatAdditionsDropdownItems.find((item) => item.name === inputGArmorPieces)
			?.value || 0;

	$: outputSecretTech =
		flatAdditionsDropdownItems.find(
			(item) => item.name === inputGsr999SecretTech,
		)?.value || 0;

	$: outputFlatAdditions =
		outputPartnyaBond +
		outputHunterBond +
		outputAssist +
		outputSoul +
		outputArmor1 +
		outputArmor2 +
		outputArmorG +
		outputSecretTech;

	$: outputFinalAttackValue = getFinalAttackValue(
		outputFlatAdditions,
		outputMultipliers,
		outputWeaponTypeMultiplier,
		missionRequirementAttackCeilings,
	);

	$: outputCompressedShots =
		flatAdditionsDropdownItems.find((item) => item.name === inputCompressedShot)
			?.value || 0;

	$: outputCompressedShotPower = Math.floor(
		inputNumberCompressedShot * outputCompressedShots,
	);

	$: outputCritValue = getCritValue(
		outputStarvingWolfAffinity,
		outputCeaselessAffinity,
		outputExpertAffinity,
		outputIssenAffinity,
	);

	$: outputSwordAndShieldMultiplier =
		inputWeaponType === 'Sword and Shield' ? 1.25 : 1;

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

	$: outputGunlanceShell = Math.floor(outputGunlanceShellDamage);
	$: outputGunlanceShellBoosted = Math.floor(outputGunlanceShellDamage * 1.5);

	$: outputSharpnessMultiplier =
		blademasterDropdownItems.find((item) => item.name === inputSharpness)
			?.value || 0;

	// TODO datatable description having weapon guide link
</script>

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
	{/if}
</Modal>

<div class={modalBlurClass}>
	<section>
		<SectionHeadingTopLevel title="Arena" />

		<InlineNotification
			title="Note:"
			subtitle="Refreshing the page resets all values."
			kind="info"
			lowContrast
		/>

		<p>To load your gear from the game:</p>
		<ol>
			<li>1. Load the overlay.</li>
			<li>2. Go into a quest and open overlay settings.</li>
			<li>
				3. Go to Hunter's Notes tab, right-click your guild card and select
				"Copy stats for Wycademy's Arena".
			</li>
			<li>4. Paste them here.</li>
		</ol>
		<div class="container-arena">
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
					<TextArea
						labelText="Current Data"
						helperText="These are your current inputs values"
						placeholder="No inputs found."
						value={inputTextInputs}
						readonly
					/>
					<CopyButton text={inputTextInputs} />
					<Button
						kind="tertiary"
						icon={DocumentDownload}
						on:click={() => saveInputsAsJSONFile(inputTextInputs)}
						>Save inputs to file</Button
					>
				</div>
				<!-- <Toggle labelText="Extra Icons" bind:toggled={weaponExtraIcons} /> -->
			</div>

			<div class="stats">
				<div class="stats-header">
					Internal Values and Final Displayed Attack
				</div>
				<div class="stats-values">
					<div class="fire">🔥 {100}</div>
					<div class="water">💧 {100}</div>
					<div class="ice">❄️ {100}</div>
					<div class="thunder">⚡ {100}</div>
					<div class="dragon">🐲 {100}</div>
					<div class="total-attack">⚔️ True Raw: {100}</div>
					<div class="my-missions">🎫 My Missions: {100}</div>
					<div class="status">Status: {100}</div>
					<div class="attack-ceiling">⚓ Attack Ceiling: {100}</div>
					<div class="attack">🗡️ Attack: {100}</div>
					<div class="affinity">✨ Affinity: {100}</div>
				</div>
			</div>

			<div class="inputs-left">
				<div class="input-sections-container">
					<div class="input-section">
						<div class="small-header">✨ Affinity</div>
						<div class="inputs-group-column">
							<Dropdown
								titleText="Style Rank Affinity"
								bind:selectedId={inputStyleRankAffinity}
								items={[
									{ id: 'None', text: 'None' },
									{ id: 'Affinity +20% (+20%)', text: 'Affinity +20% (+20%)' },
									{ id: 'Affinity +24% (+24%)', text: 'Affinity +24% (+24%)' },
									{ id: 'Affinity +26% (+26%)', text: 'Affinity +26% (+26%)' },
								]}
							/>
							<Dropdown
								titleText="Melee Sharpness"
								bind:selectedId={inputMeleeSharpness}
								items={[
									{
										id: 'Below Blue or Gunners (+0%)',
										text: 'Below Blue or Gunners (+0%)',
									},
									{ id: 'Blue (+5%)', text: 'Blue (+5%)' },
									{ id: 'White Upwards (+10%)', text: 'White Upwards (+10%)' },
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
									{ id: 'Determination (+100)', text: 'Determination (+100)' },
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
									{ id: 'None (1x)', text: 'None (1x)' },
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
									{ id: 'Mega Demon Drug (+5)', text: 'Mega Demon Drug (+5)' },
									{ id: 'Small Atk Food (+3)', text: 'Small Atk Food (+3)' },
									{ id: 'Med Atk Food(+5)', text: 'Med Atk Food(+5)' },
									{
										id: 'SR Med Atk Food (+10)',
										text: 'SR Med Atk Food (+10)',
									},
									{ id: 'SR Lg Atk Food (+15)', text: 'SR Lg Atk Food (+15)' },
								]}
							/>

							<Dropdown
								titleText="Seeds, Flutes, Cat"
								bind:selectedId={inputSeedsFlutesCat}
								items={[
									{ id: 'None', text: 'None' },
									{ id: 'Power Seed(+10)', text: 'Power Seed(+10)' },
									{ id: 'Demon Horn (+10)', text: 'Demon Horn (+10)' },
									{ id: 'Art of Dancing (+10)', text: 'Art of Dancing (+10)' },
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
								titleText="Crit Conversion"
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
									{ id: 'Melee / Bows (x1.5)', text: 'Melee / Bows (x1.5)' },
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
									{ id: 'SnS or Ranged (x1.3)', text: 'SnS or Ranged (x1.3)' },
									{ id: 'Other Weapons (x1.2)', text: 'Other Weapons (x1.2)' },
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
									{ id: '1 Origin Piece (+20)', text: '1 Origin Piece (+20)' },
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
								bind:selectedId={inputElementalAttack}
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
										id: 'On (For Sleep add +10 raw hitbox)', // TODO
										text: 'On (For Sleep add +10 raw hitbox)',
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
								bind:selectedId={inputWeaponModifiers}
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

			<div class="inputs-middle">
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
									bind:value={inputNumberAttackValue}
									invalidText={invalidNumberValueText}
									label={'Attack Value'}
								/>
							</div>
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
										label={'Lance Impact Multiplier'}
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
										label={'Transcend Raw Multiplier'}
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
										label={'Raviente Power Sword Crystals'}
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
										{ id: 'Charge Lv 1 (1.15x)', text: 'Charge Lv 1 (1.15x)' },
										{ id: 'Charge Lv 2 (1.3x)', text: 'Charge Lv 2 (1.3x)' },
										{ id: 'Charge Lv 3 (1.5x)', text: 'Charge Lv 3 (1.5x)' },
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
									bind:selectedId={inputCompressedShot}
									items={[
										{ id: 'Not Compressed (x1)', text: 'Not Compressed (x1)' },
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
										{ id: 'Power Bottle (1.6x)', text: 'Power Bottle (1.6x)' },
										{
											id: 'P. Bottle + Bow Hiden (1.8x)',
											text: 'P. Bottle + Bow Hiden (1.8x)',
										},
										{ id: 'P. + Origin (1.7x)', text: 'P. + Origin (1.7x)' },
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
										{ id: 'Lv2 (1.0x / 0.95x) ', text: 'Lv2 (1.0x / 0.95x) ' },
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
									{ id: 'Perfect Thunder Shot', text: 'Perfect Thunder Shot' },
									{ id: 'Perfect Ice Shot', text: 'Perfect Ice Shot' },
									{ id: 'Perfect Dragon Shot', text: 'Perfect Dragon Shot' },
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
									{ id: 'Fire (火)', text: 'Fire (火)' }, // TODO
									{ id: 'Water (水)', text: 'Water (水)' },
									{ id: 'Thunder (雷)', text: 'Thunder (雷)' },
									{ id: 'Ice (冰)', text: 'Ice (冰)' },
									{ id: 'Dragon (龍)', text: 'Dragon (龍)' },
									{
										id: 'Light (光) (70% Fire, 70% Thunder)',
										text: 'Light (光) (70% Fire, 70% Thunder)',
									},
									{
										id: 'Blaze (炎) (70% Fire, 70% Dragon)',
										text: 'Blaze (炎) (70% Fire, 70% Dragon)',
									},
									{
										id: '7',
										text: 'Tenshou (天翔) (30% Fire, 100% Water, 70% Thunder)',
									},
									{
										id: '8',
										text: 'Lightning Rod (雷棰) (70% Thunder, 70% Dragon)',
									},
									{
										id: '9',
										text: 'Okiko (熾凍) (80% Fire, 80% Ice, 40% Dragon)',
									},
									{
										id: '10',
										text: 'Black Flame (黑焰) (50% Fire, 150% Dragon)',
									},
									{
										id: '11',
										text: 'Crimson Demon (紅魔) (50% Dragon, 150% Fire)',
									},
									{
										id: 'Dark (闇) (80% Ice, 80% Dragon)',
										text: 'Dark (闇) (80% Ice, 80% Dragon)',
									},
									{
										id: 'Music (奏) (100% Water, 100% Ice)',
										text: 'Music (奏) (100% Water, 100% Ice)',
									},
									{
										id: 'Sound (響) (100% Water, 100% Dragon)',
										text: 'Sound (響) (100% Water, 100% Dragon)',
									},
									{
										id: 'Wind (風) (80% Thunder, 80% Ice)',
										text: 'Wind (風) (80% Thunder, 80% Ice)',
									},
									{
										id: '17',
										text: 'Burning Zero (灼零) (125% Fire, 125% Ice)',
									},
									{
										id: '18',
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
									bind:value={inputNumberElementalValue}
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
								bind:selectedId={inputWeaponMultipliers}
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

			<div class="inputs-right">
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
									bind:value={inputNumberRawHitbox}
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
									bind:value={inputNumberFireHitbox}
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
									bind:value={inputNumberWaterHitbox}
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
									bind:value={inputNumberThunderHitbox}
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
									bind:value={inputNumberIceHitbox}
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
									bind:value={inputNumberDragonHitbox}
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
										id: 'Active (+5 on raw hitboxes)',
										text: 'Active (+5 on raw hitboxes)',
									},
								]}
							/>

							<Dropdown
								titleText="Exploit Weakness"
								bind:selectedId={inputExploitWeakness}
								items={[
									{ id: 'None', text: 'None' },
									{
										id: 'Exploit Weakness (+5 on 35+ raw hitboxes)',
										text: 'Exploit Weakness (+5 on 35+ raw hitboxes)',
									},
									{
										id: 'Determination (+5 on raw hitboxes)',
										text: 'Determination (+5 on raw hitboxes)',
									},
									{
										id: 'ZZ Exploit Weakness (+5 on 30+ raw hitboxes)',
										text: 'ZZ Exploit Weakness (+5 on 30+ raw hitboxes)',
									},
								]}
							/>

							<Dropdown
								titleText="Point Breakthrough"
								bind:selectedId={inputPointBreakthrough}
								items={[
									{ id: 'None', text: 'None' },
									{
										id: 'Active (+5 Raw Hitboxes)',
										text: 'Active (+5 Raw Hitboxes)',
									},
									{
										id: 'Raviente (+2 Raw Hitboxes)',
										text: 'Raviente (+2 Raw Hitboxes)',
									},
								]}
							/>

							<Dropdown
								titleText="Acid Shots"
								bind:selectedId={inputAcidShots}
								items={[
									{ id: 'None', text: 'None' },
									{
										id: 'Raw Acid (+10 raw hitboxes)',
										text: 'Raw Acid (+10 raw hitboxes)',
									},
								]}
							/>

							<Dropdown
								titleText="Elemental Exploiter"
								bind:selectedId={inputElementalExploiter}
								items={[
									{ id: 'None', text: 'None' },
									{
										id: 'Elemental Exploit (+X to 20+ ele hitboxes)',
										text: 'Elemental Exploit (+X to 20+ ele hitboxes)',
									},
									{
										id: 'Dissolver Up (+X to 15+ ele hitboxes)',
										text: 'Dissolver Up (+X to 15+ ele hitboxes)',
									},
									{
										id: 'Determination (+X to ele hitboxes)',
										text: 'Determination (+X to ele hitboxes)',
									},
								]}
							/>

							<Dropdown
								titleText="Hunting Horn Debuff"
								bind:selectedId={inputHuntingHornDebuff}
								items={[
									{ id: 'None', text: 'None' },
									{
										id: 'Raw Weakness (+2 on Raw Hitboxes)',
										text: 'Raw Weakness (+2 on Raw Hitboxes)',
									},
									{
										id: 'Elemental Weakness (+4 on all Elemental Hitboxes)',
										text: 'Elemental Weakness (+4 on all Elemental Hitboxes)',
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
										id: 'In Crit Distance (+5 on raw hitboxes)',
										text: 'In Crit Distance (+5 on raw hitboxes)',
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
			<!--TODO animations-->
			<div class="motion-values">
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
						</div>
					</Toolbar>
					<span slot="title">
						<div class="data-table-title">
							<div class="weapon-icon">
								<svelte:component this={weaponIcon} {...weaponIconProps} />
							</div>
							<div>{inputWeaponType}</div>
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
							{cell.value}
						{/if}
					</svelte:fragment>
				</DataTable>
			</div>
		</div>
	</section>

	<section>
		<SectionHeading level={2} title="Shared Motion Values" />
		<div class="motion-values">
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
				]}
				rows={sharedMotionValues}
			>
				<span slot="title">
					<div class="data-table-title">
						<div>Shared Motion Values</div>
					</div>
				</span>
				<svelte:fragment slot="cell" let:cell>
					{#if cell.key === 'name' && hasAnimation(inputWeaponType, cell, 'Shared')}
						<Button
							on:click={() => changeModal(cell, 'Shared')}
							size="small"
							icon={Image}
							kind="ghost">{cell.value}</Button
						>
					{:else}
						{cell.value}
					{/if}
				</svelte:fragment>
			</DataTable>
		</div>
	</section>

	<section>
		<SectionHeading level={2} title="Gunlance Shells and Wyvernfire" />
		<div></div>
	</section>

	<section>
		<SectionHeading level={2} title="Ice Age" />
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
		<SectionHeading level={2} title="Elements" />
		<div></div>
	</section>
</div>

<style>
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
		gap: 1rem;
		align-items: center;
	}

	.number-input-container {
		margin-right: 1rem;
	}

	.inputs-left {
		grid-area: inputs-left;
	}

	.inputs-right {
		grid-area: inputs-right;
	}

	.inputs-middle {
		grid-area: inputs-middle;
	}

	.inputs-left,
	.inputs-middle,
	.inputs-right {
		max-height: 48rem;
		overflow-y: auto;
		overflow-x: auto;
		border-radius: 10px 10px 10px 10px;
		border: 1px solid var(--ctp-surface0);
		background-color: var(--ctp-mantle);
	}

	.motion-values {
		grid-area: motion-values;
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

	.stats {
		grid-area: stats;
		display: flex;
		flex-direction: column;
		gap: 1rem;
		border-radius: 10px 10px 10px 10px;
		border: 1px solid var(--ctp-surface0);
		padding-bottom: 1rem;
		background-color: var(--ctp-mantle);
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
		font-size: 1.5rem;
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
</style>
