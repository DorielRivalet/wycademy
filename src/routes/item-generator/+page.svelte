<script lang="ts">
	import {
		SharpnessNames,
		ZenithSkills,
		defaultWeaponComponentValues,
	} from '$lib/client/modules/frontier/objects';
	import NumberInput from 'carbon-components-svelte/src/NumberInput/NumberInput.svelte';
	import Weapon from '$lib/client/components/frontier/Weapon.svelte';
	import type { FrontierWeaponID } from '$lib/client/modules/frontier/types';
	import TextInput from 'carbon-components-svelte/src/TextInput/TextInput.svelte';
	import Select from 'carbon-components-svelte/src/Select/Select.svelte';
	import SelectItem from 'carbon-components-svelte/src/Select/SelectItem.svelte';
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

	type dropdownItem = { id: string; text: string };

	function getWeaponType(id: string): FrontierWeaponID {
		if (parseInt(id) < 0 || parseInt(id) >= 14) return 0;
		return parseInt(id) as FrontierWeaponID;
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
	}

	function getZenithSkills() {
		let array: dropdownItem[] = [{ id: '', text: 'None' }];
		ZenithSkills.forEach((element) => {
			if (element !== '') {
				array = [...array, { id: element, text: element }];
			}
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

	const invalidSharpnessValueText = 'Value must be between 0 and 400.';
	const invalidWeaponLevelText = 'Value must be between 0 and 100.';
	const invalidWeaponRarityText = 'Value must be between 1 and 12.';
	const invalidWeaponAttackText = 'Value must be between 1 and 65536';
	const invalidWeaponElementStatusText = 'Value must be between -2550 and 2550';
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

	let url = $page.url.toString();
	let currentWeaponPage = 1;
	let currentArmorPage = 1;
	let weaponDescription =
		"Unparalleled ferocity and flame, a truly awe-inspiring addition to any hunter's arsenal.";
</script>

<Head
	title={'About'}
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
		</div>
		<div class="container-weapon">
			<div class="weapon-info">
				{#key weaponRarity}
					<div id="weapon-dom">
						<Weapon
							bind:currentPage={currentWeaponPage}
							name={weaponName}
							length={weaponLength}
							weaponType={getWeaponType(weaponTypeId)}
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
				<div class="page-1">
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
				</div>
			{:else if currentWeaponPage === 2}
				<div class="page-2">
					<p>2</p>
				</div>
			{:else if currentWeaponPage === 3}
				<div class="page-3">
					<p>2</p>
				</div>
			{:else if currentWeaponPage === 4}
				<div class="page-4">
					<p>2</p>
				</div>
			{:else if currentWeaponPage === 5}
				<div class="page-5">
					<p>2</p>
				</div>
			{:else if currentWeaponPage === 6}
				<div class="page-6">
					<p>2</p>
				</div>
			{/if}
		</div>
	</section>

	<section>
		<SectionHeading level={2} title="Armor" />
		<p>WIP</p>
	</section>
	<section>
		<SectionHeading level={2} title="Items" />
		<p>WIP</p>
	</section>
</div>

<style>
	.weapon-info {
		display: flex;
		flex-direction: row;
		justify-content: start;
		gap: var(--cds-spacing-04);
	}

	.weapon-info-values {
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

	.container-weapon {
		display: flex;
		flex-direction: column;
		gap: 1rem;
		margin-top: 2rem;
	}

	.container-weapon-buttons {
		display: flex;
		flex-direction: row;
		gap: 1rem;
	}
</style>
