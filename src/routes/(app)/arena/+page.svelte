<script lang="ts">
	import {
		HuntingHornWeaponNotesCombinations,
		ItemColors,
		ItemIcons,
		MotionValues,
	} from '$lib/client/modules/frontier/objects';
	import NumberInput from 'carbon-components-svelte/src/NumberInput/NumberInput.svelte';

	import Restart from 'carbon-icons-svelte/lib/Restart.svelte';
	import { domToPng } from 'modern-screenshot';
	import Download from 'carbon-icons-svelte/lib/Download.svelte';
	import slugify from 'slugify';
	import { frontierMappers } from '$lib/client/modules/frontier/functions';
	import { browser } from '$app/environment';
	import InlineNotification from 'carbon-components-svelte/src/Notification/InlineNotification.svelte';
	import Button from 'carbon-components-svelte/src/Button/Button.svelte';
	import Toggle from 'carbon-components-svelte/src/Toggle/Toggle.svelte';
	import Head from '$lib/client/components/Head.svelte';
	import DataTable from 'carbon-components-svelte/src/DataTable/DataTable.svelte';
	import SectionHeadingTopLevel from '$lib/client/components/SectionHeadingTopLevel.svelte';
	import Play from 'carbon-icons-svelte/lib/Play.svelte';
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
	import ezlion from 'ezlion';
	import type {
		FrontierWeaponClass,
		FrontierWeaponID,
		FrontierWeaponName,
	} from 'ezlion';
	import type {
		FrontierCeaselessAffinity,
		FrontierMotionValue,
		FrontierRarity,
		FrontierStarvingWolfAffinity,
		FrontierWeapon,
		FrontierWeaponType,
	} from '$lib/client/modules/frontier/types';
	import Weapon from '$lib/client/components/frontier/Weapon.svelte';
	import Dropdown from 'carbon-components-svelte/src/Dropdown/Dropdown.svelte';
	import { WeaponTypes } from '$lib/client/modules/frontier/objects';
	import Save from 'carbon-icons-svelte/lib/Save.svelte';
	import Toolbar from 'carbon-components-svelte/src/DataTable/Toolbar.svelte';
	import ToolbarContent from 'carbon-components-svelte/src/DataTable/ToolbarContent.svelte';
	import Link from 'carbon-components-svelte/src/Link/Link.svelte';
	import Launch from 'carbon-icons-svelte/lib/Launch.svelte';
	import Modal from 'carbon-components-svelte/src/Modal/Modal.svelte';
	import Image from 'carbon-icons-svelte/lib/Image.svelte';

	type dropdownItem = { id: string; text: string };

	type DataTableKey = string;

	type DataTableValue = any;

	interface DataTableEmptyHeader {
		key: DataTableKey;
		empty: boolean;
		display?: (item: any, row: DataTableRow) => DataTableValue;
		sort?: false | ((a: DataTableValue, b: DataTableValue) => 0 | -1 | 1);
		columnMenu?: boolean;
		width?: string;
		minWidth?: string;
	}

	interface DataTableNonEmptyHeader {
		key: DataTableKey;
		value: DataTableValue;
		display?: (item: any, row: DataTableRow) => DataTableValue;
		sort?: false | ((a: DataTableValue, b: DataTableValue) => 0 | -1 | 1);
		columnMenu?: boolean;
		width?: string;
		minWidth?: string;
	}

	type DataTableHeader = DataTableNonEmptyHeader | DataTableEmptyHeader;

	interface DataTableRow {
		id: any;
		[key: string]: DataTableValue;
	}

	type DataTableRowId = any;

	interface DataTableCell {
		key: DataTableKey;
		value: DataTableValue;
		display?: (item: any, row: DataTableRow) => DataTableValue;
	}

	const maxTrueRaw = 8_000;

	let weaponID: FrontierWeaponID = 6;
	let attackA = 0;
	let attackB = 0;
	let huntingHornBuff = 0;
	let multipliers = 0;
	let additional = 0;
	let displayedElemental = 0;
	let hybridModifiers = 0;
	let baseShotPower = 0;
	let hitCount = 0;
	let motion = 0;
	let affinity = 0;
	let sharpness = 0;
	let weaponModifier = 0;
	let sweetSpot = 0;
	let statusMulti = 0;
	let hitbox = 0;
	let defenseRate = 0;
	let shotPower = 0;
	let criticalDistanceMultiplier = 0;
	let coatingModifier = 0;
	let shotModifier = 0;
	let shotTypeMulti = 0;
	let weaponClass: FrontierWeaponClass = 'Blademaster';
	let weaponType: FrontierWeaponType = 'Sword and Shield';
	// let rangedWeaponType;
	let elemental = 0;
	let elementHitbox = 0;
	let hybridModifier = 0;
	let statusValue = 0;
	let hitboxAfterModifiers = 0;
	let weaponTrueRaw = 0;
	let starvingWolfAffinity: FrontierStarvingWolfAffinity = 0;
	let ceaselessAffinity: FrontierCeaselessAffinity = 0;
	let furiousAffinity: FrontierFuriousAffinity = 0;
	let aoeAffinity = 0;
	let rarity: FrontierRarity = 1;
	let weaponIconProps = {
		rarity: rarity,
	};

	const minimumNumberValue = 0;
	const maximumNumberValue = 99999;
	const invalidNumberValueText = `Invalid value. Must be between ${minimumNumberValue} and ${maximumNumberValue}`;

	let weaponElementValue = 0;

	const getDisplayAttack = (weapon: FrontierWeapon, trueRaw: number) =>
		Math.floor(trueRaw * weapon.bloatAttackMultiplier);

	// Function to calculate the final true attack value
	function calculateFinalTrueAttack() {
		return (
			((weaponTrueRaw + attackA) * huntingHornBuff + attackB) * multipliers +
			additional
		);
	}

	// Function to calculate elemental values
	function calculateElementalValue() {
		return Math.floor((displayedElemental / 10) * hybridModifiers);
	}

	// Function to calculate bowgun damage
	function calculateBowgunDamage(bowgunType, hitCount) {
		// ... logic for different bowgun types
	}

	// Function to calculate melee weapon damage
	function calculateMeleeDamage(
		weaponClass,
		weaponType,
		motion,
		affinity,
		sharpness,
		weaponModifier,
		sweetSpot,
		statusMulti,
		hitbox,
		defenseRate,
	) {
		// ... logic for different weapon classes and types
	}

	// Function to calculate ranged weapon damage
	function calculateRangedDamage(
		weaponClass,
		weaponType,
		rangedWeaponType,
		elemental,
		elementHitbox,
		hybridModifier,
		defenseRate,
	) {
		// ... logic for different weapon classes and types
	}

	// Function to calculate status values
	function calculateStatusValue(displayedStatus) {
		return displayedStatus / 10;
	}

	// Function to calculate the final hitbox value after modifiers
	function calculateHitboxAfterModifiers() {
		// ... logic for calculating hitbox after modifiers
	}

	function getZenithSkills() {
		let array: dropdownItem[] = [{ id: '', text: 'None' }];
		Object.keys(ezlion.SkillZenith).forEach((element) => {
			if (element !== '') {
				array = [...array, { id: element, text: element }];
			}
		});
		return array;
	}

	function getSigilSkills() {
		let array: dropdownItem[] = [{ id: '', text: 'None' }];
		Object.keys(ezlion.SkillSigil).forEach((element) => {
			if (element !== '') {
				array = [...array, { id: element, text: element }];
			}
		});
		return array;
	}

	function getArmorSkills() {
		let array: dropdownItem[] = [{ id: '', text: 'None' }];
		Object.keys(ezlion.SkillArmor).forEach((element) => {
			if (element !== '') {
				array = [...array, { id: element, text: element }];
			}
		});
		return array;
	}

	function getArmorSkillTree() {
		let array: dropdownItem[] = [{ id: '', text: 'None' }];
		Object.keys(ezlion.SkillTree).forEach((element) => {
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
					'',
				)}-${''}-${new Date().toISOString()}.png`,
			)}`;
			link.href = dataUrl;
			link.click();
		});
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
		const weapon = MotionValues.find((w) => w.name === weaponName);
		if (!weapon) {
			// Return an empty array or an error message if the weapon is not found
			return []; // or throw new Error('Weapon not found');
		}

		// Map over the sections of the found weapon to extract their names
		const sectionNames = weapon.sections.map((section) => section.name);

		// Return the array of section names
		return sectionNames;
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
		const weaponEntry = MotionValues.find((w) => w.name === weaponName);
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

		// Find the weapon by name
		const weaponEntry = MotionValues.find((w) => w.name === weapon);
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

	function changeModal(cell: DataTableCell) {
		modalOpen = true;
		modalHeading = cell.value;
		let motionValue = getMotionValue(
			getWeaponNameById(inputWeaponType),
			inputWeaponMotionValuesSection,
			cell.value,
		);
		modalLabel = inputWeaponMotionValuesSection || '';
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

	function getWeaponNameById(id: string): FrontierWeaponName {
		switch (id) {
			case '1':
				return 'Sword and Shield';
			case '2':
				return 'Dual Swords';
			case '3':
				return 'Great Sword';
			case '4':
				return 'Long Sword';
			case '5':
				return 'Hammer';
			case '6':
				return 'Hunting Horn';
			case '7':
				return 'Lance';
			case '8':
				return 'Gunlance';
			case '9':
				return 'Tonfa';
			case '10':
				return 'Switch Axe F';
			case '11':
				return 'Light Bowgun';
			case '12':
				return 'Heavy Bowgun';
			case '13':
				return 'Bow';
			case '14':
				return 'Magnet Spike';
			default:
				return 'Sword and Shield';
		}
	}

	let modalHeading = '';
	let modalLabel = '';
	let url = $page.url.toString();
	let modalOpen = false;
	let modalImage = '';
	let modalNotes = '';

	let inputStyleRankAffinity = '0';
	let inputMeleeSharpness = '0';
	let inputExpertSkills = '0';
	let inputFlashConversion = '0';
	let inputIssenSkills = '0';
	let inputCeaseless = '0';
	let inputStarvingWolf = '0';
	let inputAffinityItems = '0';
	let inputGsActiveFeature = '0';
	let inputAttackSkills = '0';
	let inputCaravanSkills = '0';
	let inputPassiveItems = '0';
	let inputFoodConsumables = '0';
	let inputSeedsFlutesCat = '0';
	let inputLanceHbg = '0';
	let inputLoneWolf = '0';
	let inputCritConversion = '0';
	let inputStylishAssault = '0';
	let inputConsumptionSlayer = '0';
	let inputObscurity = '0';
	let inputRush = '0';
	let inputFurious = '0';
	let inputShiriagari = '0';
	let inputIncitement = '0';
	let inputLengthUp = '0';
	let inputRoadAttack = '0';
	let inputRoadAdvLvFlr = '0';
	let inputRoadLastStand = '0';
	let inputDuremudiraAttack = '0';
	let inputAttackMedicine = '0';
	let inputHhAttackSongs = '1.0';
	let inputAdrenalineVigorous = '1.0';
	let inputVigorousUp = '0';
	let inputHidenSkills = '1.0';
	let inputWeaponSpecific = '1';
	let inputCombatSupremacy = '1';
	let inputArmor1 = '0';
	let inputOriginArmor = '0';
	let inputGArmorPieces = '0';
	let inputGsr999SecretTech = '0';
	let inputRedSoul = '0';
	let inputAssistance = '0';
	let inputBondMaleHunter = '0';
	let inputPartnyaaBond = '0';
	let inputFireMultipliers = '1';
	let inputWaterMultipliers = '1';
	let inputThunderMultipliers = '1';
	let inputIceMultipliers = '1';
	let inputDragonMultipliers = '1';
	let inputElementalAttack = '1';
	let inputHhElementalUp = '1';
	let inputAbnormality = '0';
	let inputDrugKnowledge = '0.38';
	let inputStatusAssault = '0';
	let inputStatusAttackUp = '1';
	let inputGuildPoogie = '1.0';
	let inputStatusSigil = '1.0';
	let inputWeaponModifiers = '1.0';
	let inputWeaponType = '1';
	let inputAoeAttackSigil = '0';
	let inputAoeAffinitySigil = '0';
	let inputCritMode = '0';
	let inputSharpness = '7';
	let inputFencing = '0';
	let inputDistanceMultiplier = '1';
	let inputBulletModifier = '0';
	let inputShotMultiplier = '1.0';
	let inputHbgChargeShot = '1.0';
	let inputCompressedShot = '0';
	let inputBowCoatingsMultiplier = '1.0';
	let inputChargeMultiplier = '0';
	let inputQuickShot = '0';
	let inputElement = '0';
	let inputAoeElementSigil = '0';
	let inputWeaponMultipliers = '1';
	let inputStatus = '0';
	let inputMonsterStatus = '1';
	let inputThunderClad = '0';
	let inputExploitWeakness = '0';
	let inputPointBreakthrough = '0';
	let inputAcidShots = '0';
	let inputElementalExploiter = '0';
	let inputHuntingHornDebuff = '0';
	let inputPrecisionSniperCritS = '0';
	let inputAbsoluteDefense = '1.0';
	let inputPremiumBoost = '1.0';

	// TODO number inputs
	let inputNumberCritConversion = 0;
	let inputNumberRoadFloor = 0;
	let inputNumberConquestAttack = 0;
	let inputNumberVampirism = 0;
	let inputNumberTotalMotionValue = 0;
	let inputNumberHitCount = 0;
	let inputNumberElementalMultiplier = 0;
	let inputNumberAttackValue = 0;
	let inputNumberTrueRaw = 0;
	let inputNumberUnlimitedSigil = 0;
	let inputNumberStyleRankAttack = 0;
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
	let inputNumberCritMultiplier = 0;
	let inputNumberLanceImpactMultiplier = 0;
	let inputNumberTranscendRawMultiplier = 0;
	let inputNumberRavientePowerSwordCrystalsMultiplier = 0;
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
	let inputNumberDefenseRate = 0;
	let inputNumberMonsterRage = 0;
	let inputNumberHCModifiers = 0;
	let inputNumberRawHitbox = 0;
	let inputNumberFireHitbox = 0;
	let inputNumberWaterHitbox = 0;
	let inputNumberThunderHitbox = 0;
	let inputNumberIceHitbox = 0;
	let inputNumberDragonHitbox = 0;

	let inputWeaponMotionValuesSection = 'None';

	$: modalBlurClass = modalOpen ? 'modal-open-blur' : 'modal-open-noblur';
	$: weaponTypeName = getWeaponNameById(inputWeaponType);
	$: weaponSections = getWeaponSectionMotionValues(
		weaponTypeName,
		inputWeaponMotionValuesSection,
	);
	$: weaponSectionNames = getWeaponSectionNames(weaponTypeName);
	$: weaponIcon = getWeaponIcon(weaponTypeName);
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
	<SectionHeadingTopLevel title="Arena" />

	<div class="container-body">
		<div class="container-buttons">
			<Button kind="tertiary" icon={Save} on:click={(e) => console.log('Save')}
				>Save</Button
			>
			<Button kind="tertiary" icon={Save} on:click={(e) => console.log('Load')}
				>Load</Button
			>
			<Button
				kind="tertiary"
				icon={Restart}
				on:click={(e) => console.log('Restart')}>Restart Values</Button
			>

			<!-- <Toggle labelText="Extra Icons" bind:toggled={weaponExtraIcons} /> -->
		</div>

		<div class="stats">
			<div class="stats-header">Internal Values and Final Displayed Attack</div>
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
								{ id: '0', text: 'None (+0)' },
								{ id: '20', text: 'Affinity +20% (+20%)' },
								{ id: '24', text: 'Affinity +24% (+24%)' },
								{ id: '26', text: 'Affinity +26% (+26%)' },
							]}
						/>
						<Dropdown
							titleText="Melee Sharpness"
							bind:selectedId={inputMeleeSharpness}
							items={[
								{ id: '0', text: 'Below Blue or Gunners (+0%)' },
								{ id: '5', text: 'Blue (+5%)' },
								{ id: '10', text: 'White Upwards (+10%)' },
							]}
						/>
						<Dropdown
							titleText="Expert Skills"
							bind:selectedId={inputExpertSkills}
							items={[
								{ id: '0', text: 'None' },
								{ id: '10', text: 'Expert +1 (+10%)' },
								{ id: '20', text: 'Expert +2 (+20%)' },
								{ id: '30', text: 'Expert +3 (+30%)' },
								{ id: '40', text: 'Expert +4 (+40%)' },
								{ id: '50', text: 'Expert +5 (+50%)' },
								{ id: '100', text: 'Determination (+100%)' },
							]}
						/>
						<Dropdown
							titleText="Flash Conversion"
							bind:selectedId={inputFlashConversion}
							items={[
								{ id: '0', text: 'None' },
								{ id: '30', text: 'Critical Conversion (+30%)' },
							]}
						/>

						<Dropdown
							titleText="Issen Skills"
							bind:selectedId={inputIssenSkills}
							items={[
								{ id: '0', text: 'None or Determination' },
								{ id: '5', text: 'Issen +1 (+5% / +0.10x)' },
								{ id: '10', text: 'Issen +2 (+10% / +0.15x)' },
								{ id: '20', text: 'Issen +3 (+20% / +0.25x)' },
							]}
						/>

						<Dropdown
							titleText="Ceaseless"
							bind:selectedId={inputCeaseless}
							items={[
								{ id: '0', text: 'None (+0% / +0.00x)' },
								{ id: '1', text: 'Ceaseless 1st Stage (+35% / +0.10x)' },
								{ id: '2', text: 'Ceaseless 2nd Stage (+50% / +0.15x)' },
								{ id: '3', text: 'Ceaseless Up 3rd Stage (+60% / +0.20x)' },
							]}
						/>

						<Dropdown
							titleText="Starving Wolf"
							bind:selectedId={inputStarvingWolf}
							items={[
								{ id: '0', text: 'None (+0 / +0.00x)' },
								{ id: '1', text: 'Starving Wolf+1 (+50% / +0.00x)' },
								{ id: '2', text: 'Starving Wolf+2 (+50% / +0.10x)' },
							]}
						/>

						<Dropdown
							titleText="Affinity Items"
							bind:selectedId={inputAffinityItems}
							items={[
								{ id: '0', text: 'None (+0%)' },
								{ id: '30', text: 'Halk Drink (+30%)' },
								{ id: '10', text: 'Caravan Whetstone (+10%)' },
								{ id: '40', text: 'Both (+40%)' },
							]}
						/>

						<Dropdown
							titleText="GS Active Feature"
							bind:selectedId={inputGsActiveFeature}
							items={[
								{ id: '0', text: 'Off' },
								{ id: '100', text: 'Unsheathe and Parry Attacks (+100%)' },
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
								{ id: '0', text: 'None' },
								{ id: '50.0', text: 'Attack Absolute (+50)' },
								{ id: '100', text: 'Determination (+100)' },
								{ id: '20', text: 'Strong Attack +1 (+20)' },
								{ id: '35', text: 'Strong Attack +2 (+35)' },
								{ id: '50', text: 'Strong Attack +3 (+50)' },
								{ id: '80', text: 'Strong Attack +4 (+80)' },
								{ id: '150', text: 'Strong Attack +5 (+150)' },
								{ id: '200', text: 'Strong Attack +6 (+200)' },
							]}
						/>

						<Dropdown
							titleText="Caravan Skills"
							bind:selectedId={inputCaravanSkills}
							items={[
								{ id: '0', text: 'None' },
								{ id: '0.1', text: 'Shooting Rampage (x1.1) (Ranged Only)' },
								{ id: '0.01', text: 'Weapons Art Small (x1.01)' },
								{ id: '0.025', text: 'Weapons Art Medium (x1.025)' },
								{ id: '0.05', text: 'Weapons Art Large (x1.05 )' },
							]}
						/>

						<Dropdown
							titleText="Passive Items"
							bind:selectedId={inputPassiveItems}
							items={[
								{ id: '0', text: 'None' },
								{ id: '6', text: 'Power Charm (+6)' },
								{ id: '9', text: 'Power Talon (+9)' },
								{ id: '15', text: 'Both (+15)' },
							]}
						/>

						<Dropdown
							titleText="Food / Consumables"
							bind:selectedId={inputFoodConsumables}
							items={[
								{ id: '0', text: 'None' },
								{ id: '3', text: 'Demon Drug / Halk D. Drug (+3)' },
								{ id: '5', text: 'Mega Demon Drug (+5)' },
								{ id: '3.0', text: 'Small Atk Food (+3)' },
								{ id: '5.0', text: 'Med Atk Food(+5)' },
								{ id: '10', text: 'SR Med Atk Food (+10)' },
								{ id: '15', text: 'SR Lg Atk Food (+15)' },
							]}
						/>

						<Dropdown
							titleText="Seeds, Flutes, Cat"
							bind:selectedId={inputSeedsFlutesCat}
							items={[
								{ id: '0', text: 'None' },
								{ id: '10', text: 'Power Seed(+10)' },
								{ id: '10.0', text: 'Demon Horn (+10)' },
								{ id: '10.00', text: 'Art of Dancing (+10)' },
								{ id: '25', text: 'Power Pill (+25)' },
								{ id: '25.0', text: 'Tonfa Body Aura (Ranged Only) (+25)' },
								{
									id: '25.00',
									text: 'Tonfa B. Aura A. Feature (Ranged Only) (+50)',
								},
								{ id: '10.000', text: 'Long Sword Attack Up (+10)' },
								{ id: '40', text: 'Long Sword Active Feature Attack Up (+40)' },
								{ id: '10.0000', text: '(Cat) Demon Horn (No Skill) (+10)' },
								{ id: '20', text: '(Cat) Demon Horn +1 (+20)' },
								{ id: '40.0', text: '(Cat) Demon Horn +2 (+40)' },
								{
									id: '20.0',
									text: '(Cat) D. Horn (No Skill) & Encourage+1 (+20)',
								},
								{
									id: '30',
									text: '(Cat) D. Horn (No Skill) & Encourage+2 (+30)',
								},
								{
									id: '30.0',
									text: '(Cat) Demon Horn+1 & Encourage+1 (+30)',
								},
								{
									id: '50',
									text: '(Cat) Demon Horn+2 & Encourage+1 (+50)',
								},
								{
									id: '40.00',
									text: '(Cat) Demon Horn+1 & Encourage+2 (+40)',
								},
								{
									id: '60',
									text: '(Cat) Demon Horn+2 & Encourage+2 (+60)',
								},
							]}
						/>

						<Dropdown
							titleText="Lance / HBG"
							bind:selectedId={inputLanceHbg}
							items={[
								{ id: '0', text: 'Off' },
								{ id: '20', text: 'HBG Power Barrel (+20)' },
								{ id: '50', text: 'Lance Self Buff (+50)' },
							]}
						/>

						<Dropdown
							titleText="Lone Wolf"
							bind:selectedId={inputLoneWolf}
							items={[
								{ id: '0', text: 'Off' },
								{ id: '100', text: 'Active (+100)' },
							]}
						/>

						<Dropdown
							titleText="Crit Conversion"
							bind:selectedId={inputCritConversion}
							items={[
								{ id: '0', text: 'Off' },
								{ id: '1', text: 'Crit C. Up +1 (Z1)' },
								{ id: '2', text: 'Crit C. Up +2 (Z1)' },
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
								{ id: '0', text: 'None' },
								{ id: '100', text: 'Active (+100)' },
								{ id: '120', text: 'S. Assault Up (+120) (Z1)' },
								{ id: '140', text: 'S. Assault Up (+140) (Z1)' },
								{ id: '160', text: 'S. Assault Up (+160) (Z1)' },
								{ id: '180', text: 'S. Assault Up (+180) (Z1)' },
								{ id: '200', text: 'S. Assault Up (+200) (Z1)' },
								{ id: '220', text: 'S. Assault Up (+220) (Z1)' },
							]}
						/>

						<Dropdown
							titleText="Consumption Slayer"
							bind:selectedId={inputConsumptionSlayer}
							items={[
								{ id: '0', text: 'Off' },
								{ id: '100', text: 'Active (+100)' },
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
								{ id: '0', text: 'None' },
								{ id: '1', text: '1 Block (+40 / +30 / +20)' },
								{ id: '2', text: '2 Blocks (+80 / +60 / +40)' },
								{ id: '3', text: '3 Blocks (+120 / +90 / +60)' },
								{ id: '4', text: '4 Blocks (+160 / +120 / +80)' },
								{ id: '5', text: '5 Blocks (+200 / +150 / +100)' },
								{ id: '6', text: '6 Blocks (+220 / +165 / +110)' },
								{ id: '7', text: '7 Blocks (+240 / +180 / +120)' },
								{ id: '8', text: '8 Blocks (+260 / +195 / +130)' },
								{ id: '9', text: '9 Blocks (+280 / +210 / +140)' },
								{ id: '10', text: '10 Blocks (+300 / +225 / +150)' },
								{ id: '11', text: '1 Block (+70 / +50 / +30)' },
								{ id: '12', text: '2 Blocks (+140 / +100 / +60)' },
								{ id: '13', text: '3 Blocks (+210 / +150 / +90)' },
								{ id: '14', text: '4 Blocks (+240 / +175 / +110)' },
								{ id: '15', text: '5 Blocks (+270 / +200 / +130)' },
								{ id: '16', text: '6 Blocks (+300 / +225 / +150)' },
							]}
						/>

						<Dropdown
							titleText="Rush"
							bind:selectedId={inputRush}
							items={[
								{ id: '0', text: 'Inactive' },
								{ id: '50', text: '1st Stage (+50)' },
								{ id: '130', text: '2nd Stage (+130)' },
								{ id: '200', text: '3rd Stage (+200) (Rush Up)' },
							]}
						/>

						<Dropdown
							titleText="Furious"
							bind:selectedId={inputFurious}
							items={[
								{ id: '0', text: 'Inactive' },
								{
									id: '70',
									text: '1st Stage (+70 / 1.05x Ele & Status / +10% Affinity)',
								},
								{
									id: '100',
									text: '2nd Stage (+100 / 1.10x Ele & Status / +25% Affinity)',
								},
								{
									id: '180',
									text: '3rd Stage (+180 / 1.20x Ele & Status / +40% Affinity)',
								},
							]}
						/>

						<Dropdown
							titleText="Shiriagari"
							bind:selectedId={inputShiriagari}
							items={[
								{ id: '0', text: 'Inactive' },
								{ id: '20', text: '1 Minute (+20)' },
								{ id: '50', text: '3 Minutes (+50)' },
								{ id: '80', text: '5 Minutes (+80)' },
								{ id: '130', text: '10 Minutes (+130)' },
								{ id: '180', text: '15 Minutes (+180)' },
								{ id: '200', text: '20 Minutes (+200)' },
							]}
						/>

						<Dropdown
							titleText="Incitement"
							bind:selectedId={inputIncitement}
							items={[
								{ id: '0', text: 'Inactive' },
								{ id: '40', text: 'Active (+40)' },
							]}
						/>

						<Dropdown
							titleText="Length Up"
							bind:selectedId={inputLengthUp}
							items={[
								{ id: '0', text: 'None' },
								{ id: '1', text: 'Active' },
							]}
						/>

						<Dropdown
							titleText="Road Attack"
							bind:selectedId={inputRoadAttack}
							items={[
								{ id: '0', text: 'None' },
								{ id: '10', text: 'Road Attack Lv 1 (+10)' },
								{ id: '20', text: 'Road Attack Lv 2 (+20)' },
								{ id: '30', text: 'Road Attack Lv 3 (+30)' },
								{ id: '50', text: 'Road Attack Lv 4 (+50)' },
								{ id: '70', text: 'Road Attack Lv 5 (+70)' },
							]}
						/>

						<Dropdown
							titleText="Road Advancement"
							bind:selectedId={inputRoadAdvLvFlr}
							items={[
								{ id: '0', text: 'None' },
								{ id: '20', text: 'Lv 1 (+20 / +10)' },
								{ id: '40', text: 'Lv 2 (+40 / +10)' },
								{ id: '60', text: 'Lv 3 (+60 / +10)' },
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
								{ id: '0', text: 'None' },
								{ id: '80', text: 'Last Stand Lv 1 (+80)' },
								{ id: '120', text: 'Last Stand Lv 2 (+120)' },
							]}
						/>

						<Dropdown
							titleText="Duremudira Attack"
							bind:selectedId={inputDuremudiraAttack}
							items={[
								{ id: '0', text: 'None' },
								{ id: '50', text: 'Dure Attack Lv 1 (+50)' },
								{ id: '75', text: 'Dure Attack Lv 2 (+75)' },
								{ id: '100', text: 'Dure Attack Lv 3 (+100)' },
								{ id: '150', text: 'Dure Attack Lv 4 (+150)' },
								{ id: '200', text: 'Dure Attack Lv 5 (+200)' },
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
								{ id: '0', text: 'None' },
								{ id: '100', text: 'Active (+100)' },
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
								{ id: '1.0', text: 'None' },
								{ id: '1.1', text: 'G Rank Atk Sm (x1.10)' },
								{ id: '1.150', text: 'G Rank Atk Sm Bonus (x1.15)' },
								{ id: '1.1500', text: 'G Rank Atk Lg (x1.15)' },
								{ id: '1.200', text: 'G Rank Atk Lg Bonus (x1.2)' },
							]}
						/>

						<Dropdown
							titleText="Adrenaline/Vigorous"
							bind:selectedId={inputAdrenalineVigorous}
							items={[
								{ id: '1.0', text: 'None' },
								{ id: '1.15', text: 'Vigorous (x1.15)' },
								{ id: '0.7', text: 'Worry (x0.70)' },
								{ id: '1.3', text: 'Bowguns (x1.3)' },
								{ id: '1.5', text: 'Melee / Bows (x1.5)' },
							]}
						/>

						<Dropdown
							titleText="Vigorous Up"
							bind:selectedId={inputVigorousUp}
							items={[
								{ id: '0', text: 'Inactive' },
								{ id: '1', text: 'Active (+50 Ranged, +100 Melee)' },
							]}
						/>

						<Dropdown
							titleText="Hiden Skills"
							bind:selectedId={inputHidenSkills}
							items={[
								{ id: '1.0', text: 'None' },
								{ id: '1.4', text: 'Ranged Large Hiden (x1.4)' },
								{ id: '1.3', text: 'SnS or Ranged (x1.3)' },
								{ id: '1.2', text: 'Other Weapons (x1.2)' },
							]}
						/>

						<Dropdown
							titleText="Weapon Specific"
							bind:selectedId={inputWeaponSpecific}
							items={[
								{ id: '1', text: 'None' },
								{ id: '1.05', text: '1 Sharpen (x1.05)' },
								{ id: '1.1', text: '2 Sharpens (x1.10)' },
								{ id: '1.15', text: '3 Sharpens (x1.15)' },
								{ id: '1.2', text: '4 Sharpens (x1.20)' },
								{ id: '1.100', text: '1 Bar (x1.10)' },
								{ id: '1.200', text: '2 Bar (x1.20)' },
								{ id: '1.300', text: '3 Bar (x1.30)' },
								{ id: '1.400', text: '4 Bar (x1.40)' },
								{ id: '1.500', text: '5 Bar (x1.50)' },
								{ id: '1.600', text: '6 Bar (x1.60)' },
								{ id: '1.30', text: 'Hammer Perfect Charge (x1.30)' },
								{ id: '1.2375', text: 'Long Sword Maxed Gauge (x1.2375)' },
								{ id: '1.050', text: 'Swaxe Hiden Boost (x1.05)' },
								{ id: '1.030', text: 'MS Hiden Boost (x1.03)' },
							]}
						/>

						<Dropdown
							titleText="Combat Supremacy"
							bind:selectedId={inputCombatSupremacy}
							items={[
								{ id: '1', text: 'No' },
								{ id: '1.2', text: 'Yes (x1.2)' },
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
								{ id: '0', text: 'None' },
								{ id: '15', text: '1 Storm / Suprem / Burst Piece (+15)' },
								{ id: '30', text: '2 Storm / Suprem / Burst Pieces (+30)' },
								{ id: '45', text: '3 Storm / Suprem / Burst Pieces (+45)' },
								{ id: '60', text: '4 Storm / Suprem / Burst Pieces (+60)' },
								{ id: '80', text: '5 Storm / Suprem / Burst Pieces (+80)' },
							]}
						/>

						<Dropdown
							titleText="Origin Armor"
							bind:selectedId={inputOriginArmor}
							items={[
								{ id: '0', text: 'None' },
								{ id: '20', text: '1 Origin Piece (+20)' },
								{ id: '40', text: '2 Origin Pieces (+40)' },
								{ id: '60', text: '3 Origin Pieces (+60)' },
								{ id: '80', text: '4 Origin Pieces (+80)' },
								{ id: '110', text: '5 Origin Pieces (+110)' },
							]}
						/>

						<Dropdown
							titleText="G Armor Pieces"
							bind:selectedId={inputGArmorPieces}
							items={[
								{ id: '0', text: 'None' },
								{ id: '30', text: '3+ G Rank Pieces (+30)' },
							]}
						/>

						<Dropdown
							titleText="GSR999 Secret Tech."
							bind:selectedId={inputGsr999SecretTech}
							items={[
								{ id: '0', text: 'None' },
								{ id: '320', text: 'Secret Technique Used (+320)' },
							]}
						/>

						<Dropdown
							titleText="Red Soul"
							bind:selectedId={inputRedSoul}
							items={[
								{ id: '0', text: 'None' },
								{ id: '15', text: 'On Self (+15)' },
								{ id: '30', text: 'Hit by Other (+30)' },
								{ id: '100', text: 'Red Soul Up (+100)' },
							]}
						/>

						<Dropdown
							titleText="Assistance"
							bind:selectedId={inputAssistance}
							items={[
								{ id: '0', text: 'None' },
								{ id: '20', text: 'Active (+20)' },
							]}
						/>

						<Dropdown
							titleText="Bond (Male Hunter)"
							bind:selectedId={inputBondMaleHunter}
							items={[
								{ id: '0', text: 'None' },
								{ id: '5', text: 'Active (+5)' },
							]}
						/>

						<Dropdown
							titleText="Partnyaa Bond"
							bind:selectedId={inputPartnyaaBond}
							items={[
								{ id: '0', text: 'None' },
								{ id: '0.0', text: 'Bond Level 1(+0)' },
								{ id: '10', text: 'Bond Level 2(+10)' },
								{ id: '20', text: 'Bond Level 3(+20)' },
								{ id: '30', text: 'Bond Level 4(+30)' },
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
								{ id: '1', text: 'None (1.0x)' },
								{ id: '1.1', text: 'Small or Halk Drink (1.1x)' },
								{ id: '1.2', text: 'Large (1.2x)' },
								{ id: '1.21', text: 'Small and Halk Drink (1.21x)' },
								{ id: '1.331', text: 'Large and Halk Drink (1.33x)' },
							]}
						/>

						<Dropdown
							titleText="Water Multipliers"
							bind:selectedId={inputWaterMultipliers}
							items={[
								{ id: '1', text: 'None (1.0x)' },
								{ id: '1.1', text: 'Small or Halk Drink (1.1x)' },
								{ id: '1.2', text: 'Large (1.2x)' },
								{ id: '1.21', text: 'Small and Halk Drink (1.21x)' },
								{ id: '1.331', text: 'Large and Halk Drink (1.33x)' },
							]}
						/>

						<Dropdown
							titleText="Thunder Multipliers"
							bind:selectedId={inputThunderMultipliers}
							items={[
								{ id: '1', text: 'None (1.0x)' },
								{ id: '1.1', text: 'Small or Halk Drink (1.1x)' },
								{ id: '1.2', text: 'Large (1.2x)' },
								{ id: '1.21', text: 'Small and Halk Drink (1.21x)' },
								{ id: '1.331', text: 'Large and Halk Drink (1.33x)' },
							]}
						/>

						<Dropdown
							titleText="Ice Multipliers"
							bind:selectedId={inputIceMultipliers}
							items={[
								{ id: '1', text: 'None (1.0x)' },
								{ id: '1.1', text: 'Small or Halk Drink (1.1x)' },
								{ id: '1.2', text: 'Large (1.2x)' },
								{ id: '1.21', text: 'Small and Halk Drink (1.21x)' },
								{ id: '1.331', text: 'Large and Halk Drink (1.33x)' },
							]}
						/>

						<Dropdown
							titleText="Dragon Multipliers"
							bind:selectedId={inputDragonMultipliers}
							items={[
								{ id: '1', text: 'None (1.0x)' },
								{ id: '1.1', text: 'Small or Halk Drink (1.1x)' },
								{ id: '1.2', text: 'Large (1.2x)' },
								{ id: '1.21', text: 'Small and Halk Drink (1.21x)' },
								{ id: '1.331', text: 'Large and Halk Drink (1.33x)' },
							]}
						/>

						<Dropdown
							titleText="Elemental Attack"
							bind:selectedId={inputElementalAttack}
							items={[
								{ id: '1', text: 'None (1.0x)' },
								{ id: '1.1', text: 'Active (1.1x)' },
								{ id: '1.2', text: 'SnS Active Feature (1.2x)' },
								{ id: '1.32', text: 'Both (1.32x)' },
							]}
						/>

						<Dropdown
							titleText="HH Elemental Up"
							bind:selectedId={inputHhElementalUp}
							items={[
								{ id: '1', text: 'None (1.0x)' },
								{ id: '1.1', text: 'Ele Up Song (1.1x)' },
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
								{ id: '0', text: 'Off' },
								{ id: '1', text: 'On' },
							]}
						/>

						<Dropdown
							titleText="Drug Knowledge"
							bind:selectedId={inputDrugKnowledge}
							items={[
								{ id: '0.38', text: 'Standard (0.38x Status)' },
								{ id: '0.42', text: 'Drug Knowledge Up (0.42x Status)' },
							]}
						/>

						<Dropdown
							titleText="Status Assault"
							bind:selectedId={inputStatusAssault}
							items={[
								{ id: '0', text: 'Off' },
								{ id: '1', text: 'On (For Sleep add +10 raw hitbox)' },
							]}
						/>

						<Dropdown
							titleText="Status Attack Up"
							bind:selectedId={inputStatusAttackUp}
							items={[
								{ id: '1', text: 'Off' },
								{ id: '1.125', text: 'On (1.125x)' },
							]}
						/>

						<Dropdown
							titleText="Guild Poogie"
							bind:selectedId={inputGuildPoogie}
							items={[
								{ id: '1.0', text: 'Off' },
								{ id: '1.125', text: 'On (1.125x)' },
							]}
						/>

						<Dropdown
							titleText="Status Sigil"
							bind:selectedId={inputStatusSigil}
							items={[
								{ id: '1.0', text: 'Off' },
								{ id: '1.1', text: 'Normal (1.1x)' },
								{ id: '1.5', text: 'Zenith (1.5x)' },
								{ id: '1.65', text: 'Both (1.65x)' },
							]}
						/>

						<Dropdown
							titleText="Weapon Modifiers"
							bind:selectedId={inputWeaponModifiers}
							items={[
								{ id: '1.0', text: 'Off ' },
								{ id: '1.2', text: 'SnS Active Feature (1.2x)' },
								{ id: '1.3', text: 'Swaxe Status Phial Active (1.3x)' },
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
								{ id: '1', text: 'Sword and Shield' },
								{ id: '2', text: 'Dual Swords' },
								{ id: '3', text: 'Great Sword' },
								{ id: '4', text: 'Long Sword' },
								{ id: '5', text: 'Hammer' },
								{ id: '6', text: 'Hunting Horn' },
								{ id: '7', text: 'Lance' },
								{ id: '8', text: 'Gunlance' },
								{ id: '9', text: 'Tonfa' },
								{ id: '10', text: 'Switch Axe F' },
								{ id: '11', text: 'Light Bowgun' },
								{ id: '12', text: 'Heavy Bowgun' },
								{ id: '13', text: 'Bow' },
								{ id: '14', text: 'Magnet Spike' },
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
								{ id: '0', text: '0 Sigils' },
								{ id: '1', text: '1 Sigil' },
								{ id: '2', text: '2 Sigils' },
								{ id: '3', text: '3 Sigils' },
								{ id: '4', text: '4 Sigils' },
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
								{ id: '0', text: '0 Sigils' },
								{ id: '1', text: '1 Sigil' },
								{ id: '2', text: '2 Sigils' },
								{ id: '3', text: '3 Sigils' },
								{ id: '4', text: '4 Sigils' },
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
								{ id: '0', text: 'All Crits' },
								{ id: '1', text: 'Averaged' },
								{ id: '2', text: 'No Crits' },
							]}
						/>
					</div>
				</div>
				<div class="input-section">
					<div class="small-header">⚔️ Blademaster</div>
					<div class="inputs-group-column">
						<Dropdown
							titleText="Sharpness"
							bind:selectedId={inputSharpness}
							items={[
								{ id: '0', text: 'Red (0.6x)' },
								{ id: '1', text: 'Orange (0.85x)' },
								{ id: '2', text: 'Yellow (1.1x)' },
								{ id: '3', text: 'Green (1.325x)' },
								{ id: '4', text: 'Blue (1.45x)' },
								{ id: '5', text: 'White (1.6x)' },
								{ id: '6', text: 'Purple (1.7x)' },
								{ id: '7', text: 'Cyan (1.8x)' },
							]}
						/>

						<Dropdown
							titleText="Fencing"
							bind:selectedId={inputFencing}
							items={[
								{ id: '0', text: 'None' },
								{ id: '1', text: '+2' },
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
				<div class="input-section">
					<div class="small-header">🏹 Gunner</div>
					<div class="inputs-group-column">
						<Dropdown
							titleText="Distance Multiplier"
							bind:selectedId={inputDistanceMultiplier}
							items={[
								{ id: '1.8', text: '1.8x LBG & Bow Crit Distance' },
								{ id: '2.3', text: '2.3x HBG 1st Half Crit Distance' },
								{ id: '2.00', text: '2.0x HBG 2nd Half Crit Distance' },
								{ id: '1.90', text: '1.9x LBG & Bow Crit D. & Z Piece' },
								{ id: '2.45', text: '2.45x HBG 1st Half Crit D. & Zenith' },
								{ id: '2.15', text: '2.15x HBG 2nd Half Crit D. & Zenith' },
								{
									id: '2.4',
									text: '2.4x Z 1st Half Crit D. (HBG Active Feature)',
								},
								{
									id: '2.10',
									text: '2.1x Z 2nd Half Crit D. (HBG Active Feature)',
								},
								{
									id: '2.1',
									text: '2.1x 1st Half Crit D. (HBG Active Feature)',
								},
								{
									id: '1.80',
									text: '1.8x 2nd Half Crit D. (HBG Active Feature)',
								},
								{ id: '2.000', text: '2.0x HBG 1st Half Crit D.' },
								{ id: '1.7', text: '1.7x 2nd Half Crit D.' },
								{ id: '1.5', text: '1.5x Bow or LBG Crit D. ' },
								{ id: '2.2', text: '2.2x' },
								{ id: '1.60', text: '1.6x' },
								{ id: '1.4', text: '1.4x' },
								{ id: '1.3', text: '1.3x' },
								{ id: '1.2', text: '1.2x' },
								{ id: '1.1', text: '1.1x' },
								{ id: '1', text: '1.0x' },
								{ id: '2.30', text: '2.3x Step Shot & Z Piece' },
								{ id: '2.0', text: '2.0x Step Shot & Z Piece' },
								{
									id: '1.9',
									text: '1.9x S. C. Distance & Z Piece (LBG Active Feature)',
								},
								{
									id: '1.6',
									text: '1.6x Standard C. Distance (LBG Active Feature) ',
								},
								{
									id: '2.40',
									text: '2.4x Step Shot & Z Piece (LBG Active Feature)',
								},
								{
									id: '2.100',
									text: '2.1x Step Shot & Z Piece (LBG Active Feature)',
								},
								{ id: '2.50', text: '2.5x' },
								{ id: '2.55', text: '2.55x' },
								{ id: '2.60', text: '2.60x' },
							]}
						/>

						<Dropdown
							titleText="Bullet Modifier"
							bind:selectedId={inputBulletModifier}
							items={[
								{ id: '0', text: 'None (1.0x)' },
								{ id: 'steady', text: 'Steady Hand (All Below)' },
								{ id: 'rapid', text: 'Normal / Rapid Up (1.1x)' },
								{ id: 'pierce', text: 'Pierce Up (1.1x)' },
								{ id: 'scatter', text: 'Pellet / Scatter Up (1.3x)' },
							]}
						/>

						<Dropdown
							titleText="Shot Multiplier"
							bind:selectedId={inputShotMultiplier}
							items={[
								{ id: '1.30', text: 'Just Shot (1.3x)' },
								{ id: '1.40', text: 'Perfect JS (1.4x)' },
								{ id: '0.6', text: 'Evade Shot (0.6x)' },
								{ id: '2.0', text: 'Finishing Shot (2.0x)' },
								{ id: '1.0', text: 'None (1.0x)' },
								{ id: '0.5', text: 'Rapid Fire (0.5x)' },
								{ id: '0.73', text: 'Ultra Rapid Lv 1 Pierce S (0.73x)' },
							]}
						/>

						<Dropdown
							titleText="HBG Charge Shot"
							bind:selectedId={inputHbgChargeShot}
							items={[
								{ id: '1.0', text: 'Normal / Charge Lv 0' },
								{ id: '1.15', text: 'Charge Lv 1 (1.15x)' },
								{ id: '1.3', text: 'Charge Lv 2 (1.3x)' },
								{ id: '1.5', text: 'Charge Lv 3 (1.5x)' },
								{ id: '0.95', text: 'Storm Style Lv 0 (0.95x)' },
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
								{ id: '0', text: 'Not Compressed' },
								{ id: '2.4', text: 'Lv1 Norm S. (2.4x Bullets Loaded)' },
								{ id: '6.0', text: 'Lv2 Norm S. (6.0x Bullets Loaded)' },
								{ id: '6.0', text: 'Lv3 Norm S. (6.0x Bullets Loaded x n)' },
								{ id: '5.0', text: 'Lv1 Pierce 1 Hit (5x Bullets Loaded)' },
								{ id: '4.5', text: 'Lv2 Pierce 1 Hit (4.5x Bullets Loaded)' },
								{ id: '3.5', text: 'Lv3 Pierce 1 Hit (3.5x Bullets Loaded)' },
								{ id: '15.0', text: 'Lv1 Pierce 3 Hits (5x Bullets Loaded)' },
								{ id: '18.0', text: 'Lv2 Pierce 4 Hits (4.5x Bullets Loaded)' },
								{ id: '21.0', text: 'Lv3 Pierce 6 Hits (3.5x Bullets Loaded)' },
								{ id: '9', text: 'Lv1 Pellet S. (3x Bullets Loaded x 3)' },
								{ id: '12', text: 'Lv2 Pellet S. (3x Bullets Loaded x 4)' },
								{ id: '15', text: 'Lv3 Pellet S. (3x Bullets Loaded x 5)' },
								{ id: '10', text: 'Lv1 Impact S. (5.0x Bullets Loaded x 2)' },
								{ id: '13.5', text: 'Lv2 Impact S. (4.5x Bullets Loaded x 3)' },
								{ id: '17.5', text: 'Lv3 Impact S. (3.5x Bullets Loaded x 5)' },
								{ id: '3.1', text: 'Lv1 Norm S. (3.6x Bullets Loaded)' },
								{ id: '8.4', text: 'Lv2 Norm S. (8.4x Bullets Loaded)' },
								{ id: '8.4', text: 'Lv3 Norm S. (8.4x Bullets Loaded x n)' },
								{ id: '7', text: 'Lv1 Pierce 1 Hit (7x Bullets Loaded)' },
								{ id: '6.3', text: 'Lv2 Pierce 1 Hit (6.3x Bullets Loaded)' },
								{ id: '4.9', text: 'Lv3 Pierce 1 Hit (4.9x Bullets Loaded)' },
								{ id: '21', text: 'Lv1 Pierce 3 Hits (7x Bullets Loaded)' },
								{ id: '25.2', text: 'Lv2 Pierce 4 Hits (6.3x Bullets Loaded)' },
								{ id: '29.4', text: 'Lv3 Pierce 6 Hits (4.9x Bullets Loaded)' },
								{ id: '14', text: 'Lv1 Impact S. (7.0x Bullets Loaded x 2)' },
								{ id: '18.9', text: 'Lv2 Impact S. (6.3x Bullets Loaded x 3)' },
								{ id: '24.5', text: 'Lv3 Impact S. (4.9x Bullets Loaded x 5)' },
							]}
						/>

						<Dropdown
							titleText="Bow Coatings Multiplier"
							bind:selectedId={inputBowCoatingsMultiplier}
							items={[
								{ id: '1.0', text: 'None (1.0x)' },
								{ id: '1.6', text: 'Power Bottle (1.6x)' },
								{ id: '1.8', text: 'P. Bottle + Bow Hiden (1.8x)' },
								{ id: '1.7', text: 'P. + Origin (1.7x)' },
								{ id: '1.9', text: 'P. + Origin + Hiden (1.9x)' },
								{ id: '1.5', text: 'Status Bottle (1.5x)' },
								{ id: '1.7', text: 'S. Bottle + Hiden (1.7x)' },
								{ id: '1.6', text: 'S. Bottle + Origin (1.6x)' },
								{ id: '1.8', text: 'S. + Origin + Hiden (1.8x)' },
								{ id: '1.5', text: 'Non-G Power Bottle (1.5x)' },
								{ id: '1.5', text: 'Choose a level lower for Non-G' },
							]}
						/>

						<Dropdown
							titleText="Charge Multiplier"
							bind:selectedId={inputChargeMultiplier}
							items={[
								{ id: '0', text: 'Lv1 (0.4x / 0.7x)' },
								{ id: '1', text: 'Lv2 (1.0x / 0.95x) ' },
								{ id: '2', text: 'Lv3 (1.5x / 1.2x)' },
								{ id: '3', text: 'Lv4 (1.85x / 1.334x)' },
								{ id: '4', text: 'Sniper Lv4 (1.0x / 1.0x)' },
								{ id: '5', text: 'Sniper Lv5 (1.125x / 1.1x)' },
								{ id: '10', text: 'Uncharged Rising Shot (0.4x / 1.0x)' },
								{ id: '11', text: 'Charged Rising Shot (1.0x / 1.5x)' },
								{ id: '6', text: 'Crouched Lv1 (0.48x / 0.7x)' },
								{ id: '7', text: 'Crouched Lv2 (1.3x / 0.8x) ' },
								{ id: '8', text: 'Crouched Lv3 (2.1x / 1.2x)' },
								{ id: '9', text: 'Crouched Lv4 (2.59x / 1.334x)' },
							]}
						/>

						<Dropdown
							titleText="Quick Shot"
							bind:selectedId={inputQuickShot}
							items={[
								{ id: '0', text: 'Normal (All 1.0x)' },
								{
									id: '1',
									text: 'Quick Shot (Lv1 1.0x / Lv2 0.85x / Lv3 0.75x / Lv4 0.65x)',
								},
								{
									id: '2',
									text: 'Normal & Quick Combined (Lv1 2.0x / Lv2 1.85x / Lv3 1.75x / Lv4 1.65x)',
								},
							]}
						/>
					</div>
				</div>
				<div class="input-section">
					<div class="small-header">🐲 Element</div>
					<div class="inputs-group-column">
						<Dropdown
							titleText="Compressed Element Shot"
							bind:selectedId={inputCompressedShot}
							items={[
								{ id: '0', text: 'Not Compressed' },
								{ id: 'compFireS', text: 'Fire Shot' },
								{ id: 'compWaterS', text: 'Water Shot' },
								{ id: 'compThunderS', text: 'Thunder Shot' },
								{ id: 'compIceS', text: 'Ice Shot' },
								{ id: 'compDragonS', text: 'Dragon Shot' },
								{ id: 'pcompFireS', text: 'Perfect Fire Shot' },
								{ id: 'pcompWaterS', text: 'Perfect Water Shot' },
								{ id: 'pcompThunderS', text: 'Perfect Thunder Shot' },
								{ id: 'pcompIceS', text: 'Perfect Ice Shot' },
								{ id: 'pcompDragonS', text: 'Perfect Dragon Shot' },
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
								{ id: '16', text: 'None' },
								{ id: '0', text: 'Fire (火)' },
								{ id: '1', text: 'Water (水)' },
								{ id: '2', text: 'Thunder (雷)' },
								{ id: '4', text: 'Ice (冰)' },
								{ id: '3', text: 'Dragon (龍)' },
								{ id: '5', text: 'Light (光) (70% Fire, 70% Thunder)' },
								{ id: '6', text: 'Blaze (炎) (70% Fire, 70% Dragon)' },
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
								{ id: '12', text: 'Dark (闇) (80% Ice, 80% Dragon)' },
								{ id: '13', text: 'Music (奏) (100% Water, 100% Ice)' },
								{ id: '14', text: 'Sound (響) (100% Water, 100% Dragon)' },
								{ id: '15', text: 'Wind (風) (80% Thunder, 80% Ice)' },
								{ id: '17', text: 'Burning Zero (灼零) (125% Fire, 125% Ice)' },
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
								{ id: '0', text: '0 Sigils' },
								{ id: '1', text: '1 Sigil' },
								{ id: '2', text: '2 Sigils' },
								{ id: '3', text: '3 Sigils' },
								{ id: '4', text: '4 Sigils' },
							]}
						/>

						<Dropdown
							titleText="Weapon Multipliers"
							bind:selectedId={inputWeaponMultipliers}
							items={[
								{ id: '1', text: 'None (1.0x)' },
								{ id: '1.3', text: 'Swaxe Sword Mode Elemental Phial (1.3x)' },
								{ id: '2.0', text: 'Maxed Transcend (2.0x)' },
								{
									id: '2.6',
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
								{ id: '0', text: 'None / Sleep' },
								{ id: '1', text: 'Poison' },
								{ id: '2', text: 'Paralysis' },
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
								{ id: '1', text: 'None (1.0x)' },
								{ id: '1.1', text: 'Paralysed (1.1x)' },
								{ id: '3', text: 'Sleeping (3.0x)' },
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
								{ id: '0', text: 'Off' },
								{ id: '5', text: 'Active (+5 on raw hitboxes)' },
							]}
						/>

						<Dropdown
							titleText="Exploit Weakness"
							bind:selectedId={inputExploitWeakness}
							items={[
								{ id: '0', text: 'Off' },
								{ id: '1', text: 'Exploit Weakness (+5 on 35+ raw hitboxes)' },
								{ id: '2', text: 'Determination (+5 on raw hitboxes)' },
								{
									id: '3',
									text: 'ZZ Exploit Weakness (+5 on 30+ raw hitboxes)',
								},
							]}
						/>

						<Dropdown
							titleText="Point Breakthrough"
							bind:selectedId={inputPointBreakthrough}
							items={[
								{ id: '0', text: 'Off' },
								{ id: '1', text: 'Active (+5 Raw Hitboxes)' },
								{ id: '2', text: 'Raviente (+2 Raw Hitboxes)' },
							]}
						/>

						<Dropdown
							titleText="Acid Shots"
							bind:selectedId={inputAcidShots}
							items={[
								{ id: '0', text: 'Off' },
								{ id: '1', text: 'Raw Acid (+10 raw hitboxes)' },
							]}
						/>

						<Dropdown
							titleText="Elemental Exploiter"
							bind:selectedId={inputElementalExploiter}
							items={[
								{ id: '0', text: 'Off' },
								{
									id: '20',
									text: 'Elemental Exploit (+X to 20+ ele hitboxes)',
								},
								{ id: '15', text: 'Dissolver Up (+X to 15+ ele hitboxes)' },
								{ id: '-100', text: 'Determination (+X to ele hitboxes)' },
							]}
						/>

						<Dropdown
							titleText="Hunting Horn Debuff"
							bind:selectedId={inputHuntingHornDebuff}
							items={[
								{ id: '0', text: 'Off' },
								{ id: 'rawhb', text: 'Raw Weakness (+2 on Raw Hitboxes)' },
								{
									id: 'allelehb',
									text: 'Elemental Weakness (+4 on all Elemental Hitboxes)',
								},
								{ id: 'hhstack', text: 'Both (+4 on Elemental, +2 on Raw)' },
							]}
						/>

						<Dropdown
							titleText="Precision / Sniper / Crit S."
							bind:selectedId={inputPrecisionSniperCritS}
							items={[
								{ id: '0', text: 'Off' },
								{ id: '5', text: 'In Crit Distance (+5 on raw hitboxes)' },
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
								{ id: '1.0', text: 'Active (1.0x)' },
								{ id: '0.8', text: 'Downtime (0.8x)' },
							]}
						/>

						<Dropdown
							titleText="Premium Boost"
							bind:selectedId={inputPremiumBoost}
							items={[
								{ id: '1.0', text: 'Inactive (1x)' },
								{ id: '1.25', text: 'Active (1.25x)' },
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
						<div>{weaponTypeName}</div>
					</div>
				</span>
				<svelte:fragment slot="cell" let:row let:cell>
					{#if cell.key === 'name' && hasAnimation(weaponTypeName, cell, inputWeaponMotionValuesSection)}
						<Button
							on:click={() => changeModal(cell)}
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

	.container-body {
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
