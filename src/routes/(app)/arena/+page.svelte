<script lang="ts">
	import {
		HuntingHornWeaponNotesCombinations,
		ItemColors,
		ItemIcons,
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
	import pageThumbnail from '$lib/client/images/icon/pvp.png';
	import ezlion from 'ezlion';
	import type { FrontierWeaponClass, FrontierWeaponID } from 'ezlion';
	import type {
		FrontierCeaselessAffinity,
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

	const minimumWeaponElement = 0;
	const maximumWeaponElement = 10;
	const invalidWeaponElementStatusText = 'Invalid weapon element or status';

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

	function changeModal(cell) {
		modalOpen = true;
		modalTitle = cell.value;
	}

	let modalTitle = '';
	let url = $page.url.toString();
	let modalOpen = false;

	$: modalBlurClass = modalOpen ? 'modal-open-blur' : 'modal-open-noblur';
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
	modalHeading={modalTitle}
	on:open
	on:close
>
	<img src={pageThumbnail} alt={'motion value animation'} />
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
							type="inline"
							bind:selectedId={weaponTrueRaw}
							items={[{ id: '', text: 'None' }]}
						/>
						<Dropdown
							titleText="Melee Sharpness"
							type="inline"
							bind:selectedId={weaponTrueRaw}
							items={[{ id: '', text: 'None' }]}
						/>
						<Dropdown
							titleText="Expert Skills"
							type="inline"
							bind:selectedId={weaponTrueRaw}
							items={[{ id: '', text: 'None' }]}
						/>
						<Dropdown
							titleText="Flash Conversion"
							type="inline"
							bind:selectedId={weaponTrueRaw}
							items={[{ id: '', text: 'None' }]}
						/>

						<Dropdown
							titleText="Issen Skills"
							type="inline"
							bind:selectedId={weaponTrueRaw}
							items={[{ id: '', text: 'None' }]}
						/>

						<Dropdown
							titleText="Ceaseless"
							type="inline"
							bind:selectedId={weaponTrueRaw}
							items={[{ id: '', text: 'None' }]}
						/>

						<Dropdown
							titleText="Starving Wolf"
							type="inline"
							bind:selectedId={weaponTrueRaw}
							items={[{ id: '', text: 'None' }]}
						/>

						<Dropdown
							titleText="Affinity Items"
							type="inline"
							bind:selectedId={weaponTrueRaw}
							items={[{ id: '', text: 'None' }]}
						/>

						<Dropdown
							titleText="GS Active Feature"
							type="inline"
							bind:selectedId={weaponTrueRaw}
							items={[{ id: '', text: 'None' }]}
						/>
					</div>
				</div>

				<div class="input-section">
					<div class="small-header">💪 Multiplied Base</div>
					<div class="inputs-group-column">
						<Dropdown
							titleText="Attack Skills"
							type="inline"
							bind:selectedId={weaponTrueRaw}
							items={[{ id: '', text: 'None' }]}
						/>

						<Dropdown
							titleText="Caravan Skills"
							type="inline"
							bind:selectedId={weaponTrueRaw}
							items={[{ id: '', text: 'None' }]}
						/>

						<Dropdown
							titleText="Passive Items"
							type="inline"
							bind:selectedId={weaponTrueRaw}
							items={[{ id: '', text: 'None' }]}
						/>

						<Dropdown
							titleText="Food / Consumables"
							type="inline"
							bind:selectedId={weaponTrueRaw}
							items={[{ id: '', text: 'None' }]}
						/>
						<Dropdown
							titleText="Seeds, Flutes, Cat"
							type="inline"
							bind:selectedId={weaponTrueRaw}
							items={[{ id: '', text: 'None' }]}
						/>

						<Dropdown
							titleText="Lance / HBG"
							type="inline"
							bind:selectedId={weaponTrueRaw}
							items={[{ id: '', text: 'None' }]}
						/>

						<Dropdown
							titleText="Lone Wolf"
							type="inline"
							bind:selectedId={weaponTrueRaw}
							items={[{ id: '', text: 'None' }]}
						/>

						<Dropdown
							titleText="Crit Conversion"
							type="inline"
							bind:selectedId={weaponTrueRaw}
							items={[{ id: '', text: 'None' }]}
						/>
						<div class="number-input-container">
							<NumberInput
								size="sm"
								step={10}
								min={minimumWeaponElement}
								max={maximumWeaponElement}
								bind:value={weaponElementValue}
								invalidText={invalidWeaponElementStatusText}
								label={'Crit Conversion'}
							/>
						</div>
						<Dropdown
							titleText="Stylish Assault"
							type="inline"
							bind:selectedId={weaponTrueRaw}
							items={[{ id: '', text: 'None' }]}
						/>

						<Dropdown
							titleText="Consumption Slayer"
							type="inline"
							bind:selectedId={weaponTrueRaw}
							items={[{ id: '', text: 'None' }]}
						/>

						<div class="number-input-container">
							<NumberInput
								size="sm"
								step={10}
								min={minimumWeaponElement}
								max={maximumWeaponElement}
								bind:value={weaponElementValue}
								invalidText={invalidWeaponElementStatusText}
								label={'Vampirism'}
							/>
						</div>

						<Dropdown
							titleText="Obscurity"
							type="inline"
							bind:selectedId={weaponTrueRaw}
							items={[{ id: '', text: 'None' }]}
						/>

						<Dropdown
							titleText="Rush"
							type="inline"
							bind:selectedId={weaponTrueRaw}
							items={[{ id: '', text: 'None' }]}
						/>

						<Dropdown
							titleText="Furious"
							type="inline"
							bind:selectedId={weaponTrueRaw}
							items={[{ id: '', text: 'None' }]}
						/>

						<Dropdown
							titleText="Shiriagari"
							type="inline"
							bind:selectedId={weaponTrueRaw}
							items={[{ id: '', text: 'None' }]}
						/>

						<Dropdown
							titleText="Incitement"
							type="inline"
							bind:selectedId={weaponTrueRaw}
							items={[{ id: '', text: 'None' }]}
						/>

						<Dropdown
							titleText="Length Up"
							type="inline"
							bind:selectedId={weaponTrueRaw}
							items={[{ id: '', text: 'None' }]}
						/>

						<Dropdown
							titleText="Road Attack"
							type="inline"
							bind:selectedId={weaponTrueRaw}
							items={[{ id: '', text: 'None' }]}
						/>

						<Dropdown
							titleText="Road Adv. (Lv/Flr)"
							type="inline"
							bind:selectedId={weaponTrueRaw}
							items={[{ id: '', text: 'None' }]}
						/>

						<Dropdown
							titleText="Road Last Stand"
							type="inline"
							bind:selectedId={weaponTrueRaw}
							items={[{ id: '', text: 'None' }]}
						/>

						<Dropdown
							titleText="Duremudira Attack"
							type="inline"
							bind:selectedId={weaponTrueRaw}
							items={[{ id: '', text: 'None' }]}
						/>
						<div class="number-input-container">
							<NumberInput
								size="sm"
								step={10}
								min={minimumWeaponElement}
								max={maximumWeaponElement}
								bind:value={weaponElementValue}
								invalidText={invalidWeaponElementStatusText}
								label={'Conquest Attack'}
							/>
						</div>
						<Dropdown
							titleText="Attack Medicine"
							type="inline"
							bind:selectedId={weaponTrueRaw}
							items={[{ id: '', text: 'None' }]}
						/>
					</div>
				</div>

				<div class="input-section">
					<div class="small-header">⚔️ Multipliers</div>
					<div class="inputs-group-column">
						<Dropdown
							titleText="HH Attack Songs"
							type="inline"
							bind:selectedId={weaponTrueRaw}
							items={[{ id: '', text: 'None' }]}
						/>

						<Dropdown
							titleText="Adrenaline/Vigorous"
							type="inline"
							bind:selectedId={weaponTrueRaw}
							items={[{ id: '', text: 'None' }]}
						/>

						<Dropdown
							titleText="Vigorous Up"
							type="inline"
							bind:selectedId={weaponTrueRaw}
							items={[{ id: '', text: 'None' }]}
						/>

						<Dropdown
							titleText="Hiden Skills"
							type="inline"
							bind:selectedId={weaponTrueRaw}
							items={[{ id: '', text: 'None' }]}
						/>

						<Dropdown
							titleText="Weapon Specific"
							type="inline"
							bind:selectedId={weaponTrueRaw}
							items={[{ id: '', text: 'None' }]}
						/>

						<Dropdown
							titleText="Combat Supremacy"
							type="inline"
							bind:selectedId={weaponTrueRaw}
							items={[{ id: '', text: 'None' }]}
						/>
					</div>
				</div>
				<div class="input-section">
					<div class="small-header">➕ Flat Additions</div>
					<div class="inputs-group-column">
						<Dropdown
							titleText="Armor 1"
							type="inline"
							bind:selectedId={weaponTrueRaw}
							items={[{ id: '', text: 'None' }]}
						/>

						<Dropdown
							titleText="Origin Armor"
							type="inline"
							bind:selectedId={weaponTrueRaw}
							items={[{ id: '', text: 'None' }]}
						/>

						<Dropdown
							titleText="G Armor Pieces"
							type="inline"
							bind:selectedId={weaponTrueRaw}
							items={[{ id: '', text: 'None' }]}
						/>

						<Dropdown
							titleText="GSR999 Secret Tech."
							type="inline"
							bind:selectedId={weaponTrueRaw}
							items={[{ id: '', text: 'None' }]}
						/>

						<Dropdown
							titleText="Red Soul"
							type="inline"
							bind:selectedId={weaponTrueRaw}
							items={[{ id: '', text: 'None' }]}
						/>

						<Dropdown
							titleText="Assistance"
							type="inline"
							bind:selectedId={weaponTrueRaw}
							items={[{ id: '', text: 'None' }]}
						/>

						<Dropdown
							titleText="Bond (Male Hunter)"
							type="inline"
							bind:selectedId={weaponTrueRaw}
							items={[{ id: '', text: 'None' }]}
						/>

						<Dropdown
							titleText="Partnyaa Bond"
							type="inline"
							bind:selectedId={weaponTrueRaw}
							items={[{ id: '', text: 'None' }]}
						/>
					</div>
				</div>
				<div class="input-section">
					<div class="small-header">🐲 Elemental Skills</div>
					<div class="inputs-group-column">
						<Dropdown
							titleText="Fire Multipliers"
							type="inline"
							bind:selectedId={weaponTrueRaw}
							items={[{ id: '', text: 'None' }]}
						/>

						<Dropdown
							titleText="Water Multipliers"
							type="inline"
							bind:selectedId={weaponTrueRaw}
							items={[{ id: '', text: 'None' }]}
						/>

						<Dropdown
							titleText="Thunder Multipliers"
							type="inline"
							bind:selectedId={weaponTrueRaw}
							items={[{ id: '', text: 'None' }]}
						/>

						<Dropdown
							titleText="Ice Multipliers"
							type="inline"
							bind:selectedId={weaponTrueRaw}
							items={[{ id: '', text: 'None' }]}
						/>

						<Dropdown
							titleText="Dragon Multipliers"
							type="inline"
							bind:selectedId={weaponTrueRaw}
							items={[{ id: '', text: 'None' }]}
						/>

						<Dropdown
							titleText="Elemental Attack"
							type="inline"
							bind:selectedId={weaponTrueRaw}
							items={[{ id: '', text: 'None' }]}
						/>

						<Dropdown
							titleText="HH Elemental Up"
							type="inline"
							bind:selectedId={weaponTrueRaw}
							items={[{ id: '', text: 'None' }]}
						/>
					</div>
				</div>
				<div class="input-section">
					<div class="small-header">💤 Status Skills</div>
					<div class="inputs-group-column">
						<Dropdown
							titleText="Abnormality"
							type="inline"
							bind:selectedId={weaponTrueRaw}
							items={[{ id: '', text: 'None' }]}
						/>

						<Dropdown
							titleText="Drug Knowledge"
							type="inline"
							bind:selectedId={weaponTrueRaw}
							items={[{ id: '', text: 'None' }]}
						/>
						<Dropdown
							titleText="Status Assault"
							type="inline"
							bind:selectedId={weaponTrueRaw}
							items={[{ id: '', text: 'None' }]}
						/>

						<Dropdown
							titleText="Status Attack Up"
							type="inline"
							bind:selectedId={weaponTrueRaw}
							items={[{ id: '', text: 'None' }]}
						/>

						<Dropdown
							titleText="Guild Poogie"
							type="inline"
							bind:selectedId={weaponTrueRaw}
							items={[{ id: '', text: 'None' }]}
						/>

						<Dropdown
							titleText="Status Sigil"
							type="inline"
							bind:selectedId={weaponTrueRaw}
							items={[{ id: '', text: 'None' }]}
						/>

						<Dropdown
							titleText="Weapon Modifiers"
							type="inline"
							bind:selectedId={weaponTrueRaw}
							items={[{ id: '', text: 'None' }]}
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
								min={minimumWeaponElement}
								max={maximumWeaponElement}
								bind:value={weaponElementValue}
								invalidText={invalidWeaponElementStatusText}
								label={'Total Motion Value'}
							/>
						</div>
						<div class="number-input-container">
							<NumberInput
								size="sm"
								step={10}
								min={minimumWeaponElement}
								max={maximumWeaponElement}
								bind:value={weaponElementValue}
								invalidText={invalidWeaponElementStatusText}
								label={'Hit Count'}
							/>
						</div>
						<div class="number-input-container">
							<NumberInput
								size="sm"
								step={10}
								min={minimumWeaponElement}
								max={maximumWeaponElement}
								bind:value={weaponElementValue}
								invalidText={invalidWeaponElementStatusText}
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
							type="inline"
							bind:selectedId={weaponTrueRaw}
							items={[{ id: '', text: 'None' }]}
						/>

						<div class="number-input-container">
							<NumberInput
								size="sm"
								step={10}
								min={minimumWeaponElement}
								max={maximumWeaponElement}
								bind:value={weaponElementValue}
								invalidText={invalidWeaponElementStatusText}
								label={'Attack Value'}
							/>
						</div>
						<div class="number-input-container">
							<NumberInput
								size="sm"
								step={10}
								min={minimumWeaponElement}
								max={maximumWeaponElement}
								bind:value={weaponElementValue}
								invalidText={invalidWeaponElementStatusText}
								label={'True Raw'}
							/>
						</div>
						<div class="number-input-container">
							<NumberInput
								size="sm"
								step={10}
								min={minimumWeaponElement}
								max={maximumWeaponElement}
								bind:value={weaponElementValue}
								invalidText={invalidWeaponElementStatusText}
								label={'Unlimited Sigil'}
							/>
						</div>

						<div class="number-input-container">
							<NumberInput
								size="sm"
								step={10}
								min={minimumWeaponElement}
								max={maximumWeaponElement}
								bind:value={weaponElementValue}
								invalidText={invalidWeaponElementStatusText}
								label={'SR Attack'}
							/>
						</div>
						<div class="number-input-container">
							<NumberInput
								size="sm"
								step={10}
								min={minimumWeaponElement}
								max={maximumWeaponElement}
								bind:value={weaponElementValue}
								invalidText={invalidWeaponElementStatusText}
								label={'Sigil 1 Attack'}
							/>
						</div>
						<div class="number-input-container">
							<NumberInput
								size="sm"
								step={10}
								min={minimumWeaponElement}
								max={maximumWeaponElement}
								bind:value={weaponElementValue}
								invalidText={invalidWeaponElementStatusText}
								label={'Sigil 2 Attack'}
							/>
						</div>
						<div class="number-input-container">
							<NumberInput
								size="sm"
								step={10}
								min={minimumWeaponElement}
								max={maximumWeaponElement}
								bind:value={weaponElementValue}
								invalidText={invalidWeaponElementStatusText}
								label={'Sigil 3 Attack'}
							/>
						</div>
						<div class="number-input-container">
							<NumberInput
								size="sm"
								step={10}
								min={minimumWeaponElement}
								max={maximumWeaponElement}
								bind:value={weaponElementValue}
								invalidText={invalidWeaponElementStatusText}
								label={'Zenith Attack Sigil'}
							/>
						</div>
						<div class="number-input-container">
							<NumberInput
								size="sm"
								step={10}
								min={minimumWeaponElement}
								max={maximumWeaponElement}
								bind:value={weaponElementValue}
								invalidText={invalidWeaponElementStatusText}
								label={'AoE Attack Sigil'}
							/>
						</div>

						<Dropdown
							titleText="AoE Attack Sigil"
							type="inline"
							bind:selectedId={weaponTrueRaw}
							items={[{ id: '', text: 'None' }]}
						/>

						<div class="number-input-container">
							<NumberInput
								size="sm"
								step={10}
								min={minimumWeaponElement}
								max={maximumWeaponElement}
								bind:value={weaponElementValue}
								invalidText={invalidWeaponElementStatusText}
								label={'Natural Affinity'}
							/>
						</div>
						<div class="number-input-container">
							<NumberInput
								size="sm"
								step={10}
								min={minimumWeaponElement}
								max={maximumWeaponElement}
								bind:value={weaponElementValue}
								invalidText={invalidWeaponElementStatusText}
								label={'Sigil 1 Affinity'}
							/>
						</div>
						<div class="number-input-container">
							<NumberInput
								size="sm"
								step={10}
								min={minimumWeaponElement}
								max={maximumWeaponElement}
								bind:value={weaponElementValue}
								invalidText={invalidWeaponElementStatusText}
								label={'Sigil 2 Affinity'}
							/>
						</div>
						<div class="number-input-container">
							<NumberInput
								size="sm"
								step={10}
								min={minimumWeaponElement}
								max={maximumWeaponElement}
								bind:value={weaponElementValue}
								invalidText={invalidWeaponElementStatusText}
								label={'Sigil 3 Affinity'}
							/>
						</div>
						<div class="number-input-container">
							<NumberInput
								size="sm"
								step={10}
								min={minimumWeaponElement}
								max={maximumWeaponElement}
								bind:value={weaponElementValue}
								invalidText={invalidWeaponElementStatusText}
								label={'AoE Affinity Sigil'}
							/>
						</div>

						<Dropdown
							titleText="AoE Affinity Sigil"
							type="inline"
							bind:selectedId={weaponTrueRaw}
							items={[{ id: '', text: 'None' }]}
						/>

						<div class="number-input-container">
							<NumberInput
								size="sm"
								step={10}
								min={minimumWeaponElement}
								max={maximumWeaponElement}
								bind:value={weaponElementValue}
								invalidText={invalidWeaponElementStatusText}
								label={'Crit Multiplier'}
							/>
						</div>

						<Dropdown
							titleText="Crit Mode"
							type="inline"
							bind:selectedId={weaponTrueRaw}
							items={[{ id: '', text: 'None' }]}
						/>
					</div>
				</div>
				<div class="input-section">
					<div class="small-header">⚔️ Blademaster</div>
					<div class="inputs-group-column">
						<Dropdown
							titleText="Sharpness"
							type="inline"
							bind:selectedId={weaponTrueRaw}
							items={[{ id: '', text: 'None' }]}
						/>

						<Dropdown
							titleText="Fencing"
							type="inline"
							bind:selectedId={weaponTrueRaw}
							items={[{ id: '', text: 'None' }]}
						/>

						<div class="number-input-container">
							<NumberInput
								size="sm"
								step={10}
								min={minimumWeaponElement}
								max={maximumWeaponElement}
								bind:value={weaponElementValue}
								invalidText={invalidWeaponElementStatusText}
								label={'Lance Impact Multiplier'}
							/>
						</div>
						<div class="number-input-container">
							<NumberInput
								size="sm"
								step={10}
								min={minimumWeaponElement}
								max={maximumWeaponElement}
								bind:value={weaponElementValue}
								invalidText={invalidWeaponElementStatusText}
								label={'Transcend Raw Multiplier'}
							/>
						</div>
						<div class="number-input-container">
							<NumberInput
								size="sm"
								step={10}
								min={minimumWeaponElement}
								max={maximumWeaponElement}
								bind:value={weaponElementValue}
								invalidText={invalidWeaponElementStatusText}
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
							type="inline"
							bind:selectedId={weaponTrueRaw}
							items={[{ id: '', text: 'None' }]}
						/>

						<Dropdown
							titleText="Bullet Modifier"
							type="inline"
							bind:selectedId={weaponTrueRaw}
							items={[{ id: '', text: 'None' }]}
						/>

						<Dropdown
							titleText="Shot Multiplier"
							type="inline"
							bind:selectedId={weaponTrueRaw}
							items={[{ id: '', text: 'None' }]}
						/>

						<Dropdown
							titleText="HBG Charge Shot"
							type="inline"
							bind:selectedId={weaponTrueRaw}
							items={[{ id: '', text: 'None' }]}
						/>
						<div class="number-input-container">
							<NumberInput
								size="sm"
								step={10}
								min={minimumWeaponElement}
								max={maximumWeaponElement}
								bind:value={weaponElementValue}
								invalidText={invalidWeaponElementStatusText}
								label={'Compressed Shot'}
							/>
						</div>
						<Dropdown
							titleText="Compressed Shot"
							type="inline"
							bind:selectedId={weaponTrueRaw}
							items={[{ id: '', text: 'None' }]}
						/>

						<Dropdown
							titleText="Bow Coatings Multiplier"
							type="inline"
							bind:selectedId={weaponTrueRaw}
							items={[{ id: '', text: 'None' }]}
						/>
						<Dropdown
							titleText="Consumption Slayer"
							type="inline"
							bind:selectedId={weaponTrueRaw}
							items={[{ id: '', text: 'None' }]}
						/>
						<Dropdown
							titleText="Charge Multiplier"
							type="inline"
							bind:selectedId={weaponTrueRaw}
							items={[{ id: '', text: 'None' }]}
						/>
						<Dropdown
							titleText="Quick Shot"
							type="inline"
							bind:selectedId={weaponTrueRaw}
							items={[{ id: '', text: 'None' }]}
						/>
					</div>
				</div>
				<div class="input-section">
					<div class="small-header">🐲 Element</div>
					<div class="inputs-group-column">
						<Dropdown
							titleText="Element"
							type="inline"
							bind:selectedId={weaponTrueRaw}
							items={[{ id: '', text: 'None' }]}
						/>

						<div class="number-input-container">
							<NumberInput
								size="sm"
								step={10}
								min={minimumWeaponElement}
								max={maximumWeaponElement}
								bind:value={weaponElementValue}
								invalidText={invalidWeaponElementStatusText}
								label={'Element'}
							/>
						</div>
						<div class="number-input-container">
							<NumberInput
								size="sm"
								step={10}
								min={minimumWeaponElement}
								max={maximumWeaponElement}
								bind:value={weaponElementValue}
								invalidText={invalidWeaponElementStatusText}
								label={'Sigil 1 Element'}
							/>
						</div>
						<div class="number-input-container">
							<NumberInput
								size="sm"
								step={10}
								min={minimumWeaponElement}
								max={maximumWeaponElement}
								bind:value={weaponElementValue}
								invalidText={invalidWeaponElementStatusText}
								label={'Sigil 2 Element'}
							/>
						</div>
						<div class="number-input-container">
							<NumberInput
								size="sm"
								step={10}
								min={minimumWeaponElement}
								max={maximumWeaponElement}
								bind:value={weaponElementValue}
								invalidText={invalidWeaponElementStatusText}
								label={'Sigil 3 Element'}
							/>
						</div>
						<div class="number-input-container">
							<NumberInput
								size="sm"
								step={10}
								min={minimumWeaponElement}
								max={maximumWeaponElement}
								bind:value={weaponElementValue}
								invalidText={invalidWeaponElementStatusText}
								label={'Zenith Element Sigil'}
							/>
						</div>
						<div class="number-input-container">
							<NumberInput
								size="sm"
								step={10}
								min={minimumWeaponElement}
								max={maximumWeaponElement}
								bind:value={weaponElementValue}
								invalidText={invalidWeaponElementStatusText}
								label={'AoE Element Sigil'}
							/>
						</div>

						<Dropdown
							titleText="AoE Element Sigil"
							type="inline"
							bind:selectedId={weaponTrueRaw}
							items={[{ id: '', text: 'None' }]}
						/>

						<Dropdown
							titleText="Weapon Multipliers"
							type="inline"
							bind:selectedId={weaponTrueRaw}
							items={[{ id: '', text: 'None' }]}
						/>
					</div>
				</div>
				<div class="input-section">
					<div class="small-header">💤 Status</div>
					<div class="inputs-group-column">
						<Dropdown
							titleText="Status"
							type="inline"
							bind:selectedId={weaponTrueRaw}
							items={[{ id: '', text: 'None' }]}
						/>

						<div class="number-input-container">
							<NumberInput
								size="sm"
								step={10}
								min={minimumWeaponElement}
								max={maximumWeaponElement}
								bind:value={weaponElementValue}
								invalidText={invalidWeaponElementStatusText}
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
								min={minimumWeaponElement}
								max={maximumWeaponElement}
								bind:value={weaponElementValue}
								invalidText={invalidWeaponElementStatusText}
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
								min={minimumWeaponElement}
								max={maximumWeaponElement}
								bind:value={weaponElementValue}
								invalidText={invalidWeaponElementStatusText}
								label={'Defense Rate'}
							/>
						</div>
						<div class="number-input-container">
							<NumberInput
								size="sm"
								step={10}
								min={minimumWeaponElement}
								max={maximumWeaponElement}
								bind:value={weaponElementValue}
								invalidText={invalidWeaponElementStatusText}
								label={'Rage Modifier'}
							/>
						</div>
						<div class="number-input-container">
							<NumberInput
								size="sm"
								step={10}
								min={minimumWeaponElement}
								max={maximumWeaponElement}
								bind:value={weaponElementValue}
								invalidText={invalidWeaponElementStatusText}
								label={'Hardcore Modifier'}
							/>
						</div>
						<div class="number-input-container">
							<NumberInput
								size="sm"
								step={10}
								min={minimumWeaponElement}
								max={maximumWeaponElement}
								bind:value={weaponElementValue}
								invalidText={invalidWeaponElementStatusText}
								label={'Raw Hitzone'}
							/>
						</div>
						<div class="number-input-container">
							<NumberInput
								size="sm"
								step={10}
								min={minimumWeaponElement}
								max={maximumWeaponElement}
								bind:value={weaponElementValue}
								invalidText={invalidWeaponElementStatusText}
								label={'Fire Hitzone'}
							/>
						</div>
						<div class="number-input-container">
							<NumberInput
								size="sm"
								step={10}
								min={minimumWeaponElement}
								max={maximumWeaponElement}
								bind:value={weaponElementValue}
								invalidText={invalidWeaponElementStatusText}
								label={'Water Hitzone'}
							/>
						</div>
						<div class="number-input-container">
							<NumberInput
								size="sm"
								step={10}
								min={minimumWeaponElement}
								max={maximumWeaponElement}
								bind:value={weaponElementValue}
								invalidText={invalidWeaponElementStatusText}
								label={'Thunder Hitzone'}
							/>
						</div>
						<div class="number-input-container">
							<NumberInput
								size="sm"
								step={10}
								min={minimumWeaponElement}
								max={maximumWeaponElement}
								bind:value={weaponElementValue}
								invalidText={invalidWeaponElementStatusText}
								label={'Ice Hitzone'}
							/>
						</div>
						<div class="number-input-container">
							<NumberInput
								size="sm"
								step={10}
								min={minimumWeaponElement}
								max={maximumWeaponElement}
								bind:value={weaponElementValue}
								invalidText={invalidWeaponElementStatusText}
								label={'Dragon Hitzone'}
							/>
						</div>

						<Dropdown
							titleText="Monster Status"
							type="inline"
							bind:selectedId={weaponTrueRaw}
							items={[{ id: '', text: 'None' }]}
						/>
					</div>
				</div>
				<div class="input-section">
					<div class="small-header">🛡️ Hitzone Value Modifiers</div>
					<div class="inputs-group-column">
						<Dropdown
							titleText="Thunder Clad"
							type="inline"
							bind:selectedId={weaponTrueRaw}
							items={[{ id: '', text: 'None' }]}
						/>

						<Dropdown
							titleText="Exploit Weakness"
							type="inline"
							bind:selectedId={weaponTrueRaw}
							items={[{ id: '', text: 'None' }]}
						/>

						<Dropdown
							titleText="Point Breakthrough"
							type="inline"
							bind:selectedId={weaponTrueRaw}
							items={[{ id: '', text: 'None' }]}
						/>

						<Dropdown
							titleText="Acid Shots"
							type="inline"
							bind:selectedId={weaponTrueRaw}
							items={[{ id: '', text: 'None' }]}
						/>

						<Dropdown
							titleText="Elemental Exploiter"
							type="inline"
							bind:selectedId={weaponTrueRaw}
							items={[{ id: '', text: 'None' }]}
						/>

						<Dropdown
							titleText="Hunting Horn Debuff"
							type="inline"
							bind:selectedId={weaponTrueRaw}
							items={[{ id: '', text: 'None' }]}
						/>

						<Dropdown
							titleText="Precison / Sniper / Crit S."
							type="inline"
							bind:selectedId={weaponTrueRaw}
							items={[{ id: '', text: 'None' }]}
						/>
					</div>
				</div>
				<div class="input-section">
					<div class="small-header">❔ Other</div>
					<div class="inputs-group-column">
						<Dropdown
							titleText="Absolute Defense"
							type="inline"
							bind:selectedId={weaponTrueRaw}
							items={[{ id: '', text: 'None' }]}
						/>

						<Dropdown
							titleText="Premium Boost"
							type="inline"
							bind:selectedId={weaponTrueRaw}
							items={[{ id: '', text: 'None' }]}
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
				rows={[
					{
						id: 'a',
						name: 'Load Balancer 3',
						protocol: 'HTTP',
						port: 3000,
						rule: 100,
					},
					{
						id: 'b',
						name: 'Load Balancer 1',
						protocol: 'HTTP',
						port: 443,
						rule: 100,
					},
					{
						id: 'c',
						name: 'Load Balancer 2',
						protocol: 'HTTP',
						port: 80,
						rule: 'DNS delegation',
					},
					{
						id: 'd',
						name: 'Load Balancer 6',
						protocol: 'HTTP',
						port: 3000,
						rule: 100,
					},
					{
						id: 'e',
						name: 'Load Balancer 4',
						protocol: 'HTTP',
						port: 443,
						rule: 100,
					},
					{
						id: 'f',
						name: 'Load Balancer 5',
						protocol: 'HTTP',
						port: 80,
						rule: 'DNS delegation',
					},
				]}
			>
				<Toolbar>
					<ToolbarContent>
						<Dropdown
							titleText="Weapon Motion Values Section"
							type="inline"
							bind:selectedId={weaponTrueRaw}
							items={[{ id: '', text: 'None' }]}
						/>
					</ToolbarContent>
				</Toolbar>
				<span slot="title">
					<div class="data-table-title">
						<div class="weapon-icon">
							<svelte:component
								this={WeaponTypes[weaponID].icon}
								{...weaponIconProps}
							/>
						</div>
						<div>Dual Swords</div>
					</div>
				</span>
				<svelte:fragment slot="cell" let:row let:cell>
					{#if cell.key === 'name'}
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
		gap: 1rem;
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
