<script lang="ts">
	import PageTurn from '$lib/client/components/PageTurn.svelte';
	import SectionHeadingTopLevel from '$lib/client/components/SectionHeadingTopLevel.svelte';
	import HunterNotesPage from '$lib/client/components/HunterNotesPage.svelte';
	import { page } from '$app/stores';
	import Dropdown from 'carbon-components-svelte/src/Dropdown/Dropdown.svelte';
	import NumberInput from 'carbon-components-svelte/src/NumberInput/NumberInput.svelte';
	import Button from 'carbon-components-svelte/src/Button/Button.svelte';
	import Download from 'carbon-icons-svelte/lib/Download.svelte';
	import Restart from 'carbon-icons-svelte/lib/Restart.svelte';
	import Item from '$lib/client/components/frontier/Item.svelte';
	import TextInput from 'carbon-components-svelte/src/TextInput/TextInput.svelte';
	import { browser } from '$app/environment';
	import {
		defaultItemComponentValues,
		ItemColors,
		itemInfo,
	} from '$lib/client/modules/frontier/objects';
	import { domToPng } from 'modern-screenshot';
	import slugify from 'slugify';
	import type {
		FrontierRarity,
		FrontierItemRankType,
		FrontierItemColor,
		FrontierItemType,
		FrontierSlot,
		FrontierItemSigil,
		FrontierItemDecoration,
	} from '$lib/client/modules/frontier/types';
	import type {
		FrontierZenithSkill,
		FrontierArmorSkillTree,
		FrontierArmorSkillName,
		FrontierArmorClass,
		FrontierWeaponClass,
	} from 'ezlion';
	import ezlion from 'ezlion';

	type dropdownItem = { id: string; text: string };

	function getItemColors() {
		let array: dropdownItem[] = [];
		ItemColors.forEach((element, i) => {
			array = [...array, { id: element.name, text: element.name }];
		});
		return array;
	}

	function getitemInfo() {
		let array: dropdownItem[] = [];
		itemInfo.forEach((element, i) => {
			array = [...array, { id: element.name, text: element.name }];
		});
		return array;
	}

	function downloadItemsImage() {
		if (!browser) return;
		let node = document.getElementById('item-dom');
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

	function getSigilSkills() {
		let array: dropdownItem[] = [{ id: '', text: 'None' }];
		Object.values(ezlion.SkillSigil).forEach((element) => {
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

	function getZenithSkills() {
		let array: dropdownItem[] = [{ id: '', text: 'None' }];
		Object.values(ezlion.SkillZenith).forEach((element) => {
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

	const minimumRarity = 1;
	const maximumRarity = 12;
	const minimumArmorSkillPoints = -127;
	const maximumArmorSkillPoints = 127;
	const minimumSlots = 0;
	const maximumSlots = 3;

	const invalidSlotsText = `Value must be between ${minimumSlots} and ${maximumSlots}.`;
	const invalidWeaponRarityText = `Value must be between ${minimumRarity} and ${maximumRarity}.`;
	const invalidArmorSkillPointsText = `Value must be between ${minimumArmorSkillPoints} and ${maximumArmorSkillPoints}.`;

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

	let currentItemPage = 1;
</script>

<HunterNotesPage displayTOC={true}>
	<div>
		<SectionHeadingTopLevel title={'Item Generator'} />
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
					items={getitemInfo()}
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
		<div class="page-turn">
			<PageTurn pageRouteId={$page.route.id} />
		</div>
	</div>
</HunterNotesPage>

<style lang="scss">
	.page-turn {
		margin-top: 4rem;
	}

	.item-info {
		display: flex;
		flex-direction: column;
		justify-content: start;
		align-items: center;
	}

	.item-info-values {
		display: grid;
		grid-template-columns: repeat(auto-fit, minmax(128px, 1fr));
		margin: 1rem;
		gap: 1rem;
		align-items: center;
	}

	.container-item {
		display: flex;
		flex-direction: column;
		gap: 1rem;
		margin-top: 2rem;
	}

	.container-item-buttons {
		display: flex;
		flex-direction: row;
		gap: 1rem;
		align-items: center;
		flex-wrap: wrap;
		margin-bottom: 1rem;
	}

	.page-1-item {
		display: grid;
		grid-template-columns: repeat(auto-fit, minmax(128px, 1fr));
		margin: 1rem;
		gap: 1rem;
	}

	.page-3-item {
		display: grid;
		grid-template-columns: repeat(auto-fit, minmax(128px, 1fr));
		margin: 1rem;
		gap: 1rem;
	}

	.page-2-item {
		display: grid;
		grid-template-columns: repeat(auto-fit, minmax(128px, 1fr));
		margin: 1rem;
		gap: 1rem;
	}
</style>
