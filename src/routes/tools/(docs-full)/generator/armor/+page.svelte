<script lang="ts">
	import PageTurn from '$lib/client/components/PageTurn.svelte';
	import SectionHeadingTopLevel from '$lib/client/components/SectionHeadingTopLevel.svelte';
	import TableOfContentsPage from '$lib/client/components/TableOfContentsPage.svelte';
	import { page } from '$app/stores';
	import Armor from '$lib/client/components/frontier/Armor.svelte';
	import Button from 'carbon-components-svelte/src/Button/Button.svelte';
	import Download from 'carbon-icons-svelte/lib/Download.svelte';
	import Restart from 'carbon-icons-svelte/lib/Restart.svelte';
	import Dropdown from 'carbon-components-svelte/src/Dropdown/Dropdown.svelte';
	import TextInput from 'carbon-components-svelte/src/TextInput/TextInput.svelte';
	import NumberInput from 'carbon-components-svelte/src/NumberInput/NumberInput.svelte';
	import { defaultArmorComponentValues } from '$lib/client/modules/frontier/objects';
	import type {
		FrontierArmorClass,
		FrontierArmorGRLevel,
		FrontierArmorLevel,
		FrontierArmorType,
		FrontierEquipmentDecorations,
		FrontierEquipmentRank,
		FrontierEquipmentSkillPoints,
		FrontierRarity,
	} from '$lib/client/modules/frontier/types';
	import { browser } from '$app/environment';
	import { frontierMappers } from '$lib/client/modules/frontier/functions';
	import {
		type FrontierZenithSkill,
		type FrontierArmorSkillTree,
		type FrontierArmorSkillName,
		ezlionSkillZenith,
		ezlionSkillArmor,
		ezlionSkillTree,
	} from 'ezlion';
	import { domToPng } from 'modern-screenshot';
	import slugify from 'slugify';

	type dropdownItem = { id: string; text: string };

	function downloadArmorImage() {
		if (!browser) return;
		let node = document.getElementById('armor-dom');
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

	function getZenithSkills() {
		let array: dropdownItem[] = [{ id: '', text: 'None' }];
		Object.values(ezlionSkillZenith).forEach((element) => {
			if (element !== '' && element !== 'None') {
				array = [...array, { id: element, text: element }];
			}
		});
		return array;
	}

	function getArmorSkills() {
		let array: dropdownItem[] = [{ id: '', text: 'None' }];
		Object.values(ezlionSkillArmor).forEach((element) => {
			if (element !== '' && element !== 'None') {
				array = [...array, { id: element, text: element }];
			}
		});

		return array;
	}

	function getArmorSkillTree() {
		let array: dropdownItem[] = [{ id: '', text: 'None' }];
		Object.values(ezlionSkillTree).forEach((element) => {
			if (element !== '') {
				array = [...array, { id: element, text: element }];
			}
		});
		return array;
	}

	const minimumArmorLevel = 0;
	const maximumArmorLevel = 7;
	const minimumArmorDefense = 0;
	const maximumArmorDefense = 65535;
	const minimumArmorElementResistance = -127;
	const maximumArmorElementResistance = 127;
	const minimumArmorGRLevel = 0;
	const maximumArmorGRLevel = 7;
	const minimumRarity = 1;
	const maximumRarity = 12;
	const minimumArmorSkillPoints = -127;
	const maximumArmorSkillPoints = 127;

	let currentArmorPage = $state(1);

	const invalidArmorSkillPointsText = `Value must be between ${minimumArmorSkillPoints} and ${maximumArmorSkillPoints}.`;
	const invalidArmorDefenseText = `Value must be between ${minimumArmorDefense} and ${maximumArmorDefense}.`;
	const invalidArmorElementalResistanceText = `Value must be between ${minimumArmorElementResistance} and ${maximumArmorElementResistance}.`;
	const invalidArmorLevelText = `Value must be between ${minimumArmorLevel} and ${maximumArmorLevel}.`;
	const invalidArmorGRLevelText = `Value must be between ${minimumArmorGRLevel} and ${maximumArmorGRLevel}.`;
	const invalidWeaponRarityText = `Value must be between ${minimumRarity} and ${maximumRarity}.`;

	let armorName = $state(defaultArmorComponentValues.armorName);
	let armorLevel: FrontierArmorLevel = $state(
		defaultArmorComponentValues.armorLevel,
	);
	let armorGRLevel: FrontierArmorGRLevel = $state(
		defaultArmorComponentValues.armorGRLevel,
	);
	let armorDefense: number = $state(defaultArmorComponentValues.armorDefense);
	let armorFireResistance: number = $state(
		defaultArmorComponentValues.armorFireResistance,
	);
	let armorWaterResistance: number = $state(
		defaultArmorComponentValues.armorWaterResistance,
	);
	let armorThunderResistance: number = $state(
		defaultArmorComponentValues.armorThunderResistance,
	);
	let armorIceResistance: number = $state(
		defaultArmorComponentValues.armorIceResistance,
	);
	let armorDragonResistance: number = $state(
		defaultArmorComponentValues.armorDragonResistance,
	);
	let armorTransmog = $state(defaultArmorComponentValues.armorTransmog);
	let armorClass: FrontierArmorClass = $state(
		defaultArmorComponentValues.armorClass,
	);
	let armorID = $state(defaultArmorComponentValues.armorID);
	let armorRank: FrontierEquipmentRank = $state(
		defaultArmorComponentValues.armorRank,
	);
	let armorZenithSkill: FrontierZenithSkill = $state(
		defaultArmorComponentValues.armorZenithSkill,
	);
	let armorDescription: string = $state(
		defaultArmorComponentValues.armorDescription,
	);
	let armorRarity: FrontierRarity = $state(
		defaultArmorComponentValues.armorRarity,
	);

	/** TODO Show extra icons.*/
	let armorExtraIcons = $state(defaultArmorComponentValues.armorExtraIcons);

	let armorSkillTreeNames: FrontierArmorSkillTree[] = $state([
		'Blazing Grace',
		'Strong Attack',
		'Determination',
		'Absolute Defense',
		'Three Worlds Protection',
	]);
	let armorSkillPoints: FrontierEquipmentSkillPoints = $state([
		10, 20, -30, 40, 50,
	]);
	let armorType: FrontierArmorType = $state(
		defaultArmorComponentValues.armorType,
	);
	let armorAutomaticSkill: FrontierArmorSkillName = $state(
		defaultArmorComponentValues.armorAutomaticSkill,
	);
	let armorDecorations: FrontierEquipmentDecorations = $state({
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
	});
</script>

<TableOfContentsPage displayTOC={false}>
	<div>
		<SectionHeadingTopLevel title={'Armor Generator'} />
		<div class="spaced-paragraph">
			This is a playground for armor, which can be useful for creating custom
			armor and demonstrate translations.
		</div>
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
		<div class="page-turn">
			<PageTurn pageUrlPathName={$page.url.pathname} />
		</div>
	</div>
</TableOfContentsPage>

<style lang="scss">
	.page-turn {
		margin-top: 4rem;
	}

	.armor-info {
		display: flex;
		flex-direction: column;
		justify-content: start;
		align-items: center;
	}

	.armor-info-values {
		display: grid;
		grid-template-columns: repeat(auto-fit, minmax(128px, 1fr));
		margin: 1rem;
		gap: 1rem;
		align-items: center;
	}

	.container-armor {
		display: flex;
		flex-direction: column;
		gap: 1rem;
		margin-top: 2rem;
	}

	.container-armor-buttons {
		display: flex;
		flex-direction: row;
		gap: 1rem;
		align-items: center;
		flex-wrap: wrap;
		margin-bottom: 1rem;
	}

	.page-2-armor {
		display: flex;
		flex-direction: column;
		gap: 1rem;
	}

	.armor-deco-skills,
	.page-3-armor {
		display: grid;
		grid-template-columns: repeat(auto-fit, minmax(128px, 1fr));
		margin: 1rem;
		gap: 1rem;
	}

	.page-1-armor {
		display: grid;
		grid-template-columns: repeat(auto-fit, minmax(128px, 1fr));
		margin: 1rem;
		gap: 1rem;
	}
</style>
