<script lang="ts">
	import {
		ArmorSkillTree,
		ArmorSkills,
		HuntingHornWeaponNotesCombinations,
		ItemColors,
		ItemIcons,
		SigilSkills,
		ZenithSkills,
	} from '$lib/client/modules/frontier/objects';
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
	import SectionHeading from '$lib/client/components/SectionHeading.svelte';
	import pageThumbnail from '$lib/client/images/icon/pvp.png';

	type dropdownItem = { id: string; text: string };

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
</div>

<style>
	.container-buttons {
		display: flex;
		flex-direction: row;
		gap: 1rem;
	}
</style>
