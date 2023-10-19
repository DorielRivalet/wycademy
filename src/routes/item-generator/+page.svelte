<script lang="ts">
	import {
		ArmorSkillTree,
		ArmorSkills,
		HuntingHornWeaponNotesCombinations,
		SharpnessNames,
		SigilSkills,
		ZenithSkills,
		defaultWeaponComponentValues,
	} from '$lib/client/modules/frontier/objects';
	import NumberInput from 'carbon-components-svelte/src/NumberInput/NumberInput.svelte';
	import Weapon from '$lib/client/components/frontier/Weapon.svelte';
	import Armor from '$lib/client/components/frontier/Armor.svelte';
	import TextInput from 'carbon-components-svelte/src/TextInput/TextInput.svelte';
	import Select from 'carbon-components-svelte/src/Select/Select.svelte';
	import SelectItem from 'carbon-components-svelte/src/Select/SelectItem.svelte';
	import Checkbox from 'carbon-components-svelte/src/Checkbox/Checkbox.svelte';
	import Restart from 'carbon-icons-svelte/lib/Restart.svelte';
	import { domToPng } from 'modern-screenshot';
	import Download from 'carbon-icons-svelte/lib/Download.svelte';
	import slugify from 'slugify';
	import { frontierMappers } from '$lib/client/modules/frontier/functions';
	import { browser } from '$app/environment';
	import InlineNotification from 'carbon-components-svelte/src/Notification/InlineNotification.svelte';
	import Dropdown from 'carbon-components-svelte/src/Dropdown/Dropdown.svelte';
	import Button from 'carbon-components-svelte/src/Button/Button.svelte';
	import Toggle from 'carbon-components-svelte/src/Toggle/Toggle.svelte';
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
	import logo from '$lib/client/images/logo.webp';
	import { page } from '$app/stores';
	import SectionHeading from '$lib/client/components/SectionHeading.svelte';
	import type {
		FrontierArmorClass,
		FrontierArmorGRLevel,
		FrontierArmorID,
		FrontierArmorLevel,
		FrontierArmorSkillName,
		FrontierArmorSkillTree,
		FrontierArmorType,
		FrontierEquipmentDecorations,
		FrontierEquipmentRank,
		FrontierEquipmentSkillPoints,
		FrontierGunlanceShell,
		FrontierGunlanceShellLevel,
		FrontierHuntingHornWeaponNote,
		FrontierRarity,
		FrontierSwitchAxeFPhial,
		FrontierZenithSkill,
	} from '$lib/client/modules/frontier/types';

	type dropdownItem = { id: string; text: string };
	type levelQuantity = [level1: number, level2: number, level3: number];

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

	// TODO
	function resetArmorValues() {}

	// TODO
	function resetItemsValues() {}

	function getZenithSkills() {
		let array: dropdownItem[] = [{ id: '', text: 'None' }];
		ZenithSkills.forEach((element) => {
			if (element !== '') {
				array = [...array, { id: element, text: element }];
			}
		});
		return array;
	}

	function getSigilSkills() {
		let array: dropdownItem[] = [{ id: '', text: 'None' }];
		SigilSkills.forEach((element) => {
			if (element !== '') {
				array = [...array, { id: element, text: element }];
			}
		});
		return array;
	}

	function getArmorSkills() {
		let array: dropdownItem[] = [{ id: '', text: 'None' }];
		ArmorSkills.forEach((element) => {
			if (element !== '') {
				array = [...array, { id: element, text: element }];
			}
		});
		return array;
	}

	function getArmorSkillTree() {
		let array: dropdownItem[] = [{ id: '', text: 'None' }];
		ArmorSkillTree.forEach((element) => {
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

	// TODO
	function downloadItemsImage() {}

	const invalidSharpnessValueText = 'Value must be between 0 and 400.';
	const invalidWeaponLevelText = 'Value must be between 0 and 100.';
	const invalidWeaponRarityText = 'Value must be between 1 and 12.';
	const invalidWeaponAttackText = 'Value must be between 1 and 65536';
	const invalidArmorDefenseText = 'Value must be between -2550 and 2550';
	const invalidArmorElementalResistanceText =
		'Value must be between -2550 and 2550';
	const invalidWeaponElementStatusText = 'Value must be between -2550 and 2550';
	const invalidWeaponAffinityText = 'Value must be between -2550 and 2550';
	const invalidWeaponSigilValueText = 'Value must be between -127 and 127';
	const invalidArmorSkillPointsText = 'Value must be between -127 and 127';
	const invalidGunlanceShellLevelText = 'Value must be between 1 and 9';
	const invalidBowChargeLevelText = 'Value must be between 1 and 4';
	const invalidBowgunAttackLevelText = 'Value must be between 0 and 5';
	const invalidBowgunAmmoText = 'Value must be between 0 and 64';
	const invalidArmorLevelText = 'Value must be between 1 and 7';

	const minimumSharpnessValue = 0;
	const maximumSharpnessValue = 400;

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

	let url = $page.url.toString();
	let currentWeaponPage = 1;
	let currentArmorPage = 1;

	let armorName = 'Barb Helmet ZP';
	let armorLevel: FrontierArmorLevel = 7;
	let armorGRLevel: FrontierArmorGRLevel = 7;
	let armorDefense: number = 100;
	let armorFireResistance: number = 0;
	let armorWaterResistance: number = 0;
	let armorThunderResistance: number = 0;
	let armorIceResistance: number = 0;
	let armorDragonResistance: number = 0;
	let armorTransmog = true;
	let armorClass: FrontierArmorClass = 'Either';
	let armorID = '0';
	let armorRank: FrontierEquipmentRank = 'Z';
	let armorZenithSkill: FrontierZenithSkill = 'Skill Slots Up+1';
	let armorDescription: string =
		'A very very very very very very very very long description.';
	let armorRarity: FrontierRarity = 12;

	/** TODO Show extra icons.*/
	let armorExtraIcons = false;

	let armorSkillTreeNames: FrontierArmorSkillTree[] = [
		'Blazing Grace',
		'Strong Attack',
		'Determination',
		'Absolute Defense',
		'Three Worlds Protection',
	];
	let armorSkillPoints: FrontierEquipmentSkillPoints = [10, 20, -30, 40, 50];
	let armorType: FrontierArmorType = 'Zenith';
	let armorAutomaticSkill: FrontierArmorSkillName = '';
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

	$: huntingHornNotesArray = [
		huntingHornNotes.split(' ')[0],
		huntingHornNotes.split(' ')[1],
		huntingHornNotes.split(' ')[2],
	] as FrontierHuntingHornWeaponNote[];
	//TODO default values
</script>

<Head
	title={'Item Generator'}
	{description}
	image={logo}
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
	<SectionHeadingTopLevel title="Item Generator" />

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
						min={1}
						max={12}
						bind:value={weaponRarity}
						invalidText={invalidWeaponRarityText}
						label={'Rarity'}
					/>
					<NumberInput
						size="sm"
						step={1}
						min={0}
						max={100}
						bind:value={weaponLevel}
						invalidText={invalidWeaponLevelText}
						label={'Level'}
					/>
				</div>
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
							min={1}
							max={65536}
							bind:value={weaponAttack}
							invalidText={invalidWeaponAttackText}
							label={'Attack'}
						/>
						<NumberInput
							size="sm"
							step={10}
							min={-2550}
							max={2550}
							bind:value={weaponElementValue}
							invalidText={invalidWeaponElementStatusText}
							label={'Element'}
						/>
						<NumberInput
							size="sm"
							step={10}
							min={-2550}
							max={2550}
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
							min={1}
							max={9}
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
							min={0}
							max={5}
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
							min={1}
							max={5}
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
						min={-2550}
						max={2550}
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
							min={1}
							max={4}
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
							min={1}
							max={4}
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
							min={1}
							max={4}
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
							min={0}
							max={64}
							bind:value={bowgunNormalAmmo[0]}
							invalidText={invalidBowgunAmmoText}
							label={'Normal LV1'}
						/>
						<NumberInput
							size="sm"
							step={1}
							min={0}
							max={64}
							bind:value={bowgunNormalAmmo[1]}
							invalidText={invalidBowgunAmmoText}
							label={'Normal LV2'}
						/>
						<NumberInput
							size="sm"
							step={1}
							min={0}
							max={64}
							bind:value={bowgunNormalAmmo[2]}
							invalidText={invalidBowgunAmmoText}
							label={'Normal LV3'}
						/>
						<NumberInput
							size="sm"
							step={1}
							min={0}
							max={64}
							bind:value={bowgunPierceAmmo[0]}
							invalidText={invalidBowgunAmmoText}
							label={'Pierce LV1'}
						/>
						<NumberInput
							size="sm"
							step={1}
							min={0}
							max={64}
							bind:value={bowgunPierceAmmo[1]}
							invalidText={invalidBowgunAmmoText}
							label={'Pierce LV2'}
						/>
						<NumberInput
							size="sm"
							step={1}
							min={0}
							max={64}
							bind:value={bowgunPierceAmmo[2]}
							invalidText={invalidBowgunAmmoText}
							label={'Pierce LV3'}
						/>
						<NumberInput
							size="sm"
							step={1}
							min={0}
							max={64}
							bind:value={bowgunPelletAmmo[0]}
							invalidText={invalidBowgunAmmoText}
							label={'Pellet LV1'}
						/>
						<NumberInput
							size="sm"
							step={1}
							min={0}
							max={64}
							bind:value={bowgunPelletAmmo[1]}
							invalidText={invalidBowgunAmmoText}
							label={'Pellet LV2'}
						/>
						<NumberInput
							size="sm"
							step={1}
							min={0}
							max={64}
							bind:value={bowgunPelletAmmo[2]}
							invalidText={invalidBowgunAmmoText}
							label={'Pellet LV3'}
						/>
						<NumberInput
							size="sm"
							step={1}
							min={0}
							max={64}
							bind:value={bowgunCragAmmo[0]}
							invalidText={invalidBowgunAmmoText}
							label={'Crag LV1'}
						/>
						<NumberInput
							size="sm"
							step={1}
							min={0}
							max={64}
							bind:value={bowgunCragAmmo[1]}
							invalidText={invalidBowgunAmmoText}
							label={'Crag LV2'}
						/>
						<NumberInput
							size="sm"
							step={1}
							min={0}
							max={12647}
							bind:value={bowgunCragAmmo[2]}
							invalidText={invalidBowgunAmmoText}
							label={'Crag LV3'}
						/>
						<NumberInput
							size="sm"
							step={1}
							min={0}
							max={64}
							bind:value={bowgunClusterAmmo[0]}
							invalidText={invalidBowgunAmmoText}
							label={'Cluster LV1'}
						/>
						<NumberInput
							size="sm"
							step={1}
							min={0}
							max={64}
							bind:value={bowgunClusterAmmo[1]}
							invalidText={invalidBowgunAmmoText}
							label={'Cluster LV2'}
						/>
						<NumberInput
							size="sm"
							step={1}
							min={0}
							max={64}
							bind:value={bowgunClusterAmmo[2]}
							invalidText={invalidBowgunAmmoText}
							label={'Cluster LV3'}
						/>
						<NumberInput
							size="sm"
							step={1}
							min={0}
							max={64}
							bind:value={bowgunRecoveryAmmo[0]}
							invalidText={invalidBowgunAmmoText}
							label={'Recovery LV1'}
						/>
						<NumberInput
							size="sm"
							step={1}
							min={0}
							max={64}
							bind:value={bowgunRecoveryAmmo[1]}
							invalidText={invalidBowgunAmmoText}
							label={'Recovery LV2'}
						/>
						<NumberInput
							size="sm"
							step={1}
							min={0}
							max={64}
							bind:value={bowgunRecoveryAmmo[2]}
							invalidText={invalidBowgunAmmoText}
							label={'Recovery LV3'}
						/>
						<NumberInput
							size="sm"
							step={1}
							min={0}
							max={64}
							bind:value={bowgunPoisonAmmo[0]}
							invalidText={invalidBowgunAmmoText}
							label={'Poison LV1'}
						/>
						<NumberInput
							size="sm"
							step={1}
							min={0}
							max={64}
							bind:value={bowgunPoisonAmmo[1]}
							invalidText={invalidBowgunAmmoText}
							label={'Poison LV2'}
						/>
						<NumberInput
							size="sm"
							step={1}
							min={0}
							max={64}
							bind:value={bowgunPoisonAmmo[2]}
							invalidText={invalidBowgunAmmoText}
							label={'Poison LV3'}
						/>
						<NumberInput
							size="sm"
							step={1}
							min={0}
							max={64}
							bind:value={bowgunParalysisAmmo[0]}
							invalidText={invalidBowgunAmmoText}
							label={'Paralysis LV1'}
						/>
						<NumberInput
							size="sm"
							step={1}
							min={0}
							max={64}
							bind:value={bowgunParalysisAmmo[1]}
							invalidText={invalidBowgunAmmoText}
							label={'Paralysis LV2'}
						/>
						<NumberInput
							size="sm"
							step={1}
							min={0}
							max={64}
							bind:value={bowgunParalysisAmmo[2]}
							invalidText={invalidBowgunAmmoText}
							label={'Paralysis LV3'}
						/>
						<NumberInput
							size="sm"
							step={1}
							min={0}
							max={64}
							bind:value={bowgunSleepAmmo[0]}
							invalidText={invalidBowgunAmmoText}
							label={'Sleep LV1'}
						/>
						<NumberInput
							size="sm"
							step={1}
							min={0}
							max={64}
							bind:value={bowgunSleepAmmo[1]}
							invalidText={invalidBowgunAmmoText}
							label={'Sleep LV2'}
						/>
						<NumberInput
							size="sm"
							step={1}
							min={0}
							max={64}
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
							min={0}
							max={64}
							bind:value={bowgunFlamingAmmo[0]}
							invalidText={invalidBowgunAmmoText}
							label={'Flaming LV1'}
						/>
						<NumberInput
							size="sm"
							step={1}
							min={0}
							max={64}
							bind:value={bowgunFlamingAmmo[1]}
							invalidText={invalidBowgunAmmoText}
							label={'Flaming LV2'}
						/>
						<NumberInput
							size="sm"
							step={1}
							min={0}
							max={64}
							bind:value={bowgunFlamingAmmo[2]}
							invalidText={invalidBowgunAmmoText}
							label={'Flaming LV3'}
						/>
						<NumberInput
							size="sm"
							step={1}
							min={0}
							max={64}
							bind:value={bowgunWaterAmmo[0]}
							invalidText={invalidBowgunAmmoText}
							label={'Water LV1'}
						/>
						<NumberInput
							size="sm"
							step={1}
							min={0}
							max={64}
							bind:value={bowgunWaterAmmo[1]}
							invalidText={invalidBowgunAmmoText}
							label={'Water LV2'}
						/>
						<NumberInput
							size="sm"
							step={1}
							min={0}
							max={64}
							bind:value={bowgunWaterAmmo[2]}
							invalidText={invalidBowgunAmmoText}
							label={'Water LV3'}
						/>
						<NumberInput
							size="sm"
							step={1}
							min={0}
							max={64}
							bind:value={bowgunThunderAmmo[0]}
							invalidText={invalidBowgunAmmoText}
							label={'Thunder LV1'}
						/>
						<NumberInput
							size="sm"
							step={1}
							min={0}
							max={64}
							bind:value={bowgunThunderAmmo[1]}
							invalidText={invalidBowgunAmmoText}
							label={'Thunder LV2'}
						/>
						<NumberInput
							size="sm"
							step={1}
							min={0}
							max={64}
							bind:value={bowgunThunderAmmo[2]}
							invalidText={invalidBowgunAmmoText}
							label={'Thunder LV3'}
						/>
						<NumberInput
							size="sm"
							step={1}
							min={0}
							max={64}
							bind:value={bowgunFreezeAmmo[0]}
							invalidText={invalidBowgunAmmoText}
							label={'Freeze LV1'}
						/>
						<NumberInput
							size="sm"
							step={1}
							min={0}
							max={64}
							bind:value={bowgunFreezeAmmo[1]}
							invalidText={invalidBowgunAmmoText}
							label={'Freeze LV2'}
						/>
						<NumberInput
							size="sm"
							step={1}
							min={0}
							max={12647}
							bind:value={bowgunFreezeAmmo[2]}
							invalidText={invalidBowgunAmmoText}
							label={'Freeze LV3'}
						/>
						<NumberInput
							size="sm"
							step={1}
							min={0}
							max={64}
							bind:value={bowgunDragonAmmo[0]}
							invalidText={invalidBowgunAmmoText}
							label={'Dragon LV1'}
						/>
						<NumberInput
							size="sm"
							step={1}
							min={0}
							max={64}
							bind:value={bowgunDragonAmmo[1]}
							invalidText={invalidBowgunAmmoText}
							label={'Dragon LV2'}
						/>
						<NumberInput
							size="sm"
							step={1}
							min={0}
							max={64}
							bind:value={bowgunDragonAmmo[2]}
							invalidText={invalidBowgunAmmoText}
							label={'Dragon LV3'}
						/>
						<NumberInput
							size="sm"
							step={1}
							min={0}
							max={64}
							bind:value={bowgunTranqAmmo[0]}
							invalidText={invalidBowgunAmmoText}
							label={'Tranq LV1'}
						/>
						<NumberInput
							size="sm"
							step={1}
							min={0}
							max={64}
							bind:value={bowgunTranqAmmo[1]}
							invalidText={invalidBowgunAmmoText}
							label={'Tranq LV2'}
						/>
						<NumberInput
							size="sm"
							step={1}
							min={0}
							max={64}
							bind:value={bowgunTranqAmmo[2]}
							invalidText={invalidBowgunAmmoText}
							label={'Tranq LV3'}
						/>
						<NumberInput
							size="sm"
							step={1}
							min={0}
							max={64}
							bind:value={bowgunPaintAmmo[0]}
							invalidText={invalidBowgunAmmoText}
							label={'Paint LV1'}
						/>
						<NumberInput
							size="sm"
							step={1}
							min={0}
							max={64}
							bind:value={bowgunPaintAmmo[1]}
							invalidText={invalidBowgunAmmoText}
							label={'Paint LV2'}
						/>
						<NumberInput
							size="sm"
							step={1}
							min={0}
							max={64}
							bind:value={bowgunPaintAmmo[2]}
							invalidText={invalidBowgunAmmoText}
							label={'Paint LV3'}
						/>
						<NumberInput
							size="sm"
							step={1}
							min={0}
							max={64}
							bind:value={bowgunDemonAmmo[0]}
							invalidText={invalidBowgunAmmoText}
							label={'Demon LV1'}
						/>
						<NumberInput
							size="sm"
							step={1}
							min={0}
							max={64}
							bind:value={bowgunDemonAmmo[1]}
							invalidText={invalidBowgunAmmoText}
							label={'Demon LV2'}
						/>
						<NumberInput
							size="sm"
							step={1}
							min={0}
							max={64}
							bind:value={bowgunDemonAmmo[2]}
							invalidText={invalidBowgunAmmoText}
							label={'Demon LV3'}
						/>
						<NumberInput
							size="sm"
							step={1}
							min={0}
							max={64}
							bind:value={bowgunArmorAmmo[0]}
							invalidText={invalidBowgunAmmoText}
							label={'Armor LV1'}
						/>
						<NumberInput
							size="sm"
							step={1}
							min={0}
							max={64}
							bind:value={bowgunArmorAmmo[1]}
							invalidText={invalidBowgunAmmoText}
							label={'Armor LV2'}
						/>
						<NumberInput
							size="sm"
							step={1}
							min={0}
							max={64}
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
								min={-127}
								max={127}
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
								min={-127}
								max={127}
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
								min={-127}
								max={127}
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
								min={-127}
								max={127}
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
								min={-127}
								max={127}
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
								min={-127}
								max={127}
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
								min={-127}
								max={127}
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
								min={-127}
								max={127}
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
								min={-127}
								max={127}
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
								min={-127}
								max={127}
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
								min={-127}
								max={127}
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
								min={-127}
								max={127}
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
							min={-127}
							max={127}
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
							min={-127}
							max={127}
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
							min={-127}
							max={127}
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
							min={-127}
							max={127}
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
							min={-127}
							max={127}
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
							min={-127}
							max={127}
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
			<Toggle labelText="Extra Icons" bind:toggled={armorExtraIcons} />
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
						min={1}
						max={12}
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
			</div>
			{#if currentArmorPage === 1}
				<div class="page-1-armor">
					<NumberInput
						size="sm"
						step={1}
						min={1}
						max={7}
						bind:value={armorLevel}
						invalidText={invalidArmorLevelText}
						label={'Level'}
					/>
					<NumberInput
						size="sm"
						step={1}
						min={-2550}
						max={2550}
						bind:value={armorDefense}
						invalidText={invalidArmorDefenseText}
						label={'Defense'}
					/>
					<NumberInput
						size="sm"
						step={1}
						min={-2550}
						max={2550}
						bind:value={armorFireResistance}
						invalidText={invalidArmorElementalResistanceText}
						label={'Fire Resistance'}
					/>
					<NumberInput
						size="sm"
						step={1}
						min={-2550}
						max={2550}
						bind:value={armorWaterResistance}
						invalidText={invalidArmorElementalResistanceText}
						label={'Water Resistance'}
					/>
					<NumberInput
						size="sm"
						step={1}
						min={-2550}
						max={2550}
						bind:value={armorThunderResistance}
						invalidText={invalidArmorElementalResistanceText}
						label={'Thunder Resistance'}
					/>
					<NumberInput
						size="sm"
						step={1}
						min={-2550}
						max={2550}
						bind:value={armorIceResistance}
						invalidText={invalidArmorElementalResistanceText}
						label={'Ice Resistance'}
					/>
					<NumberInput
						size="sm"
						step={1}
						min={-2550}
						max={2550}
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
						min={-127}
						max={127}
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
						min={-127}
						max={127}
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
						min={-127}
						max={127}
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
						min={-127}
						max={127}
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
						min={-127}
						max={127}
						bind:value={armorSkillPoints[4]}
						invalidText={invalidArmorSkillPointsText}
						label={'Skill 5 Points'}
					/>
				</div>
			{:else if currentArmorPage === 4}
				<div class="page-4-armor" />
			{:else if currentArmorPage === 5}
				<div class="page-5-armor" />
			{:else if currentArmorPage === 6}
				<div class="page-6-armor" />
			{/if}
		</div>
	</section>
	<section>
		<SectionHeading level={2} title="Items" />
		<div class="container-items-buttons">
			<Button kind="tertiary" icon={Download} on:click={downloadItemsImage}
				>Download</Button
			>

			<Button kind="tertiary" icon={Restart} on:click={resetItemsValues}
				>Restore values</Button
			>
		</div>
	</section>
</div>

<style>
	.weapon-info,
	.armor-info,
	.items-info {
		display: flex;
		flex-direction: row;
		justify-content: start;
		gap: var(--cds-spacing-04);
	}

	.weapon-info-values,
	.armor-info-values,
	.items-info-values {
		display: grid;
		grid-template-columns: repeat(2, 1fr);
		margin: 1rem;
		gap: 1rem;
	}

	.weapon-sharpness-values {
		display: grid;
		grid-template-columns: repeat(4, 1fr);
		margin: 1rem;
		gap: 1rem;
	}

	.weapon-info-values-bottom {
		display: grid;
		grid-template-columns: repeat(4, 1fr);
		margin: 1rem;
		gap: 1rem;
	}

	.container-weapon,
	.container-armor,
	.container-items {
		display: flex;
		flex-direction: column;
		gap: 1rem;
		margin-top: 2rem;
	}

	.container-weapon-buttons,
	.container-armor-buttons,
	.container-items-buttons {
		display: flex;
		flex-direction: row;
		gap: 1rem;
	}

	.page-2-blademaster,
	.page-2-armor,
	.bow-coatings {
		display: flex;
		flex-direction: column;
		gap: 1rem;
	}

	.page-3-bow {
		display: grid;
		grid-template-columns: repeat(2, 1fr);
		margin: 1rem;
		gap: 1rem;
	}

	.sigils,
	.armor-decorations,
	.page-3-armor {
		display: grid;
		grid-template-columns: repeat(2, 1fr);
		margin: 1rem;
		gap: 1rem;
	}

	.page-3-bowgun,
	.page-4-bowgun,
	.page-1-armor {
		display: grid;
		grid-template-columns: repeat(3, 1fr);
		margin: 1rem;
		gap: 1rem;
	}
</style>
