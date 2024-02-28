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
	import ezlion, { type FrontierWeaponClass } from 'ezlion';
	import type {
		FrontierStarvingWolfAffinity,
		FrontierWeapon,
		FrontierWeaponType,
	} from '$lib/client/modules/frontier/types';
	import Weapon from '$lib/client/components/frontier/Weapon.svelte';
	import Dropdown from 'carbon-components-svelte/src/Dropdown/Dropdown.svelte';

	type dropdownItem = { id: string; text: string };

	const maxTrueRaw = 8_000;

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

	let url = $page.url.toString();
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

<div>
	<SectionHeadingTopLevel title="Arena" />

	<div class="container-buttons">
		<Button
			kind="tertiary"
			icon={Download}
			on:click={(e) => console.log('Download')}>Download</Button
		>

		<!-- <Toggle labelText="Extra Icons" bind:toggled={weaponExtraIcons} /> -->
	</div>

	<Dropdown
		titleText="Status"
		type="inline"
		hideLabel
		bind:selectedId={weaponTrueRaw}
		items={[{ id: '', text: 'None' }]}
	/>
	<Dropdown
		titleText="Status"
		type="inline"
		hideLabel
		bind:selectedId={weaponTrueRaw}
		items={[{ id: '', text: 'None' }]}
	/>
	<Dropdown
		titleText="Status"
		type="inline"
		hideLabel
		bind:selectedId={weaponTrueRaw}
		items={[{ id: '', text: 'None' }]}
	/>
	<Dropdown
		titleText="Status"
		type="inline"
		hideLabel
		bind:selectedId={weaponTrueRaw}
		items={[{ id: '', text: 'None' }]}
	/><Dropdown
		titleText="Status"
		type="inline"
		hideLabel
		bind:selectedId={weaponTrueRaw}
		items={[{ id: '', text: 'None' }]}
	/><Dropdown
		titleText="Status"
		type="inline"
		hideLabel
		bind:selectedId={weaponTrueRaw}
		items={[{ id: '', text: 'None' }]}
	/><Dropdown
		titleText="Status"
		type="inline"
		hideLabel
		bind:selectedId={weaponTrueRaw}
		items={[{ id: '', text: 'None' }]}
	/><Dropdown
		titleText="Status"
		type="inline"
		hideLabel
		bind:selectedId={weaponTrueRaw}
		items={[{ id: '', text: 'None' }]}
	/><Dropdown
		titleText="Status"
		type="inline"
		hideLabel
		bind:selectedId={weaponTrueRaw}
		items={[{ id: '', text: 'None' }]}
	/><Dropdown
		titleText="Status"
		type="inline"
		hideLabel
		bind:selectedId={weaponTrueRaw}
		items={[{ id: '', text: 'None' }]}
	/><Dropdown
		titleText="Status"
		type="inline"
		hideLabel
		bind:selectedId={weaponTrueRaw}
		items={[{ id: '', text: 'None' }]}
	/><Dropdown
		titleText="Status"
		type="inline"
		hideLabel
		bind:selectedId={weaponTrueRaw}
		items={[{ id: '', text: 'None' }]}
	/><Dropdown
		titleText="Status"
		type="inline"
		hideLabel
		bind:selectedId={weaponTrueRaw}
		items={[{ id: '', text: 'None' }]}
	/>
	<Dropdown
		titleText="Status"
		type="inline"
		hideLabel
		bind:selectedId={weaponTrueRaw}
		items={[{ id: '', text: 'None' }]}
	/><Dropdown
		titleText="Status"
		type="inline"
		hideLabel
		bind:selectedId={weaponTrueRaw}
		items={[{ id: '', text: 'None' }]}
	/><Dropdown
		titleText="Status"
		type="inline"
		hideLabel
		bind:selectedId={weaponTrueRaw}
		items={[{ id: '', text: 'None' }]}
	/><Dropdown
		titleText="Status"
		type="inline"
		hideLabel
		bind:selectedId={weaponTrueRaw}
		items={[{ id: '', text: 'None' }]}
	/><Dropdown
		titleText="Status"
		type="inline"
		hideLabel
		bind:selectedId={weaponTrueRaw}
		items={[{ id: '', text: 'None' }]}
	/><Dropdown
		titleText="Status"
		type="inline"
		hideLabel
		bind:selectedId={weaponTrueRaw}
		items={[{ id: '', text: 'None' }]}
	/><Dropdown
		titleText="Status"
		type="inline"
		hideLabel
		bind:selectedId={weaponTrueRaw}
		items={[{ id: '', text: 'None' }]}
	/><Dropdown
		titleText="Status"
		type="inline"
		hideLabel
		bind:selectedId={weaponTrueRaw}
		items={[{ id: '', text: 'None' }]}
	/><Dropdown
		titleText="Status"
		type="inline"
		hideLabel
		bind:selectedId={weaponTrueRaw}
		items={[{ id: '', text: 'None' }]}
	/><Dropdown
		titleText="Status"
		type="inline"
		hideLabel
		bind:selectedId={weaponTrueRaw}
		items={[{ id: '', text: 'None' }]}
	/><Dropdown
		titleText="Status"
		type="inline"
		hideLabel
		bind:selectedId={weaponTrueRaw}
		items={[{ id: '', text: 'None' }]}
	/><Dropdown
		titleText="Status"
		type="inline"
		hideLabel
		bind:selectedId={weaponTrueRaw}
		items={[{ id: '', text: 'None' }]}
	/><Dropdown
		titleText="Status"
		type="inline"
		hideLabel
		bind:selectedId={weaponTrueRaw}
		items={[{ id: '', text: 'None' }]}
	/><Dropdown
		titleText="Status"
		type="inline"
		hideLabel
		bind:selectedId={weaponTrueRaw}
		items={[{ id: '', text: 'None' }]}
	/><Dropdown
		titleText="Status"
		type="inline"
		hideLabel
		bind:selectedId={weaponTrueRaw}
		items={[{ id: '', text: 'None' }]}
	/><Dropdown
		titleText="Status"
		type="inline"
		hideLabel
		bind:selectedId={weaponTrueRaw}
		items={[{ id: '', text: 'None' }]}
	/><Dropdown
		titleText="Status"
		type="inline"
		hideLabel
		bind:selectedId={weaponTrueRaw}
		items={[{ id: '', text: 'None' }]}
	/><Dropdown
		titleText="Status"
		type="inline"
		hideLabel
		bind:selectedId={weaponTrueRaw}
		items={[{ id: '', text: 'None' }]}
	/><Dropdown
		titleText="Status"
		type="inline"
		hideLabel
		bind:selectedId={weaponTrueRaw}
		items={[{ id: '', text: 'None' }]}
	/><Dropdown
		titleText="Status"
		type="inline"
		hideLabel
		bind:selectedId={weaponTrueRaw}
		items={[{ id: '', text: 'None' }]}
	/><Dropdown
		titleText="Status"
		type="inline"
		hideLabel
		bind:selectedId={weaponTrueRaw}
		items={[{ id: '', text: 'None' }]}
	/><Dropdown
		titleText="Status"
		type="inline"
		hideLabel
		bind:selectedId={weaponTrueRaw}
		items={[{ id: '', text: 'None' }]}
	/><Dropdown
		titleText="Status"
		type="inline"
		hideLabel
		bind:selectedId={weaponTrueRaw}
		items={[{ id: '', text: 'None' }]}
	/><Dropdown
		titleText="Status"
		type="inline"
		hideLabel
		bind:selectedId={weaponTrueRaw}
		items={[{ id: '', text: 'None' }]}
	/><Dropdown
		titleText="Status"
		type="inline"
		hideLabel
		bind:selectedId={weaponTrueRaw}
		items={[{ id: '', text: 'None' }]}
	/><Dropdown
		titleText="Status"
		type="inline"
		hideLabel
		bind:selectedId={weaponTrueRaw}
		items={[{ id: '', text: 'None' }]}
	/><Dropdown
		titleText="Status"
		type="inline"
		hideLabel
		bind:selectedId={weaponTrueRaw}
		items={[{ id: '', text: 'None' }]}
	/><Dropdown
		titleText="Status"
		type="inline"
		hideLabel
		bind:selectedId={weaponTrueRaw}
		items={[{ id: '', text: 'None' }]}
	/><Dropdown
		titleText="Status"
		type="inline"
		hideLabel
		bind:selectedId={weaponTrueRaw}
		items={[{ id: '', text: 'None' }]}
	/><Dropdown
		titleText="Status"
		type="inline"
		hideLabel
		bind:selectedId={weaponTrueRaw}
		items={[{ id: '', text: 'None' }]}
	/><Dropdown
		titleText="Status"
		type="inline"
		hideLabel
		bind:selectedId={weaponTrueRaw}
		items={[{ id: '', text: 'None' }]}
	/><Dropdown
		titleText="Status"
		type="inline"
		hideLabel
		bind:selectedId={weaponTrueRaw}
		items={[{ id: '', text: 'None' }]}
	/><Dropdown
		titleText="Status"
		type="inline"
		hideLabel
		bind:selectedId={weaponTrueRaw}
		items={[{ id: '', text: 'None' }]}
	/><Dropdown
		titleText="Status"
		type="inline"
		hideLabel
		bind:selectedId={weaponTrueRaw}
		items={[{ id: '', text: 'None' }]}
	/><Dropdown
		titleText="Status"
		type="inline"
		hideLabel
		bind:selectedId={weaponTrueRaw}
		items={[{ id: '', text: 'None' }]}
	/><Dropdown
		titleText="Status"
		type="inline"
		hideLabel
		bind:selectedId={weaponTrueRaw}
		items={[{ id: '', text: 'None' }]}
	/><Dropdown
		titleText="Status"
		type="inline"
		hideLabel
		bind:selectedId={weaponTrueRaw}
		items={[{ id: '', text: 'None' }]}
	/><Dropdown
		titleText="Status"
		type="inline"
		hideLabel
		bind:selectedId={weaponTrueRaw}
		items={[{ id: '', text: 'None' }]}
	/><Dropdown
		titleText="Status"
		type="inline"
		hideLabel
		bind:selectedId={weaponTrueRaw}
		items={[{ id: '', text: 'None' }]}
	/><Dropdown
		titleText="Status"
		type="inline"
		hideLabel
		bind:selectedId={weaponTrueRaw}
		items={[{ id: '', text: 'None' }]}
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
		min={minimumWeaponElement}
		max={maximumWeaponElement}
		bind:value={weaponElementValue}
		invalidText={invalidWeaponElementStatusText}
		label={'Element'}
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
		min={minimumWeaponElement}
		max={maximumWeaponElement}
		bind:value={weaponElementValue}
		invalidText={invalidWeaponElementStatusText}
		label={'Element'}
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
		min={minimumWeaponElement}
		max={maximumWeaponElement}
		bind:value={weaponElementValue}
		invalidText={invalidWeaponElementStatusText}
		label={'Element'}
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
		min={minimumWeaponElement}
		max={maximumWeaponElement}
		bind:value={weaponElementValue}
		invalidText={invalidWeaponElementStatusText}
		label={'Element'}
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
		min={minimumWeaponElement}
		max={maximumWeaponElement}
		bind:value={weaponElementValue}
		invalidText={invalidWeaponElementStatusText}
		label={'Element'}
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
		min={minimumWeaponElement}
		max={maximumWeaponElement}
		bind:value={weaponElementValue}
		invalidText={invalidWeaponElementStatusText}
		label={'Element'}
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
		min={minimumWeaponElement}
		max={maximumWeaponElement}
		bind:value={weaponElementValue}
		invalidText={invalidWeaponElementStatusText}
		label={'Element'}
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
		min={minimumWeaponElement}
		max={maximumWeaponElement}
		bind:value={weaponElementValue}
		invalidText={invalidWeaponElementStatusText}
		label={'Element'}
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
		min={minimumWeaponElement}
		max={maximumWeaponElement}
		bind:value={weaponElementValue}
		invalidText={invalidWeaponElementStatusText}
		label={'Element'}
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
		min={minimumWeaponElement}
		max={maximumWeaponElement}
		bind:value={weaponElementValue}
		invalidText={invalidWeaponElementStatusText}
		label={'Element'}
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
		min={minimumWeaponElement}
		max={maximumWeaponElement}
		bind:value={weaponElementValue}
		invalidText={invalidWeaponElementStatusText}
		label={'Element'}
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
		min={minimumWeaponElement}
		max={maximumWeaponElement}
		bind:value={weaponElementValue}
		invalidText={invalidWeaponElementStatusText}
		label={'Element'}
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
		min={minimumWeaponElement}
		max={maximumWeaponElement}
		bind:value={weaponElementValue}
		invalidText={invalidWeaponElementStatusText}
		label={'Element'}
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
		min={minimumWeaponElement}
		max={maximumWeaponElement}
		bind:value={weaponElementValue}
		invalidText={invalidWeaponElementStatusText}
		label={'Element'}
	/>
</div>

<style>
	.container-buttons {
		display: flex;
		flex-direction: row;
		gap: 1rem;
	}
</style>
