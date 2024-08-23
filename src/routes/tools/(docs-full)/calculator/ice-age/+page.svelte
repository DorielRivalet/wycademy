<script lang="ts">
	import PageTurn from '$lib/client/components/PageTurn.svelte';
	import SectionHeadingTopLevel from '$lib/client/components/SectionHeadingTopLevel.svelte';
	import HunterNotesPage from '$lib/client/components/HunterNotesPage.svelte';
	import { page } from '$app/stores';
	import Dropdown from 'carbon-components-svelte/src/Dropdown/Dropdown.svelte';
	import InlineTooltip from '$lib/client/components/frontier/InlineTooltip.svelte';
	import { getWeaponIcon } from '$lib/client/modules/frontier/weapons';
	import DataTable, {
		type DataTableCell,
	} from 'carbon-components-svelte/src/DataTable/DataTable.svelte';
	import CopyButton from 'carbon-components-svelte/src/CopyButton/CopyButton.svelte';
	import Toolbar from 'carbon-components-svelte/src/DataTable/Toolbar.svelte';
	import { getCSVFromArray } from '$lib/client/modules/csv';
	import Button from 'carbon-components-svelte/src/Button/Button.svelte';
	import NumberInput from 'carbon-components-svelte/src/NumberInput/NumberInput.svelte';
	import type { FrontierWeaponName } from 'ezlion';
	import type {
		FrontierMotionValue,
		TagColor,
	} from '$lib/client/modules/frontier/types';
	import IceAgeStage1Animation from '$lib/client/images/weapon/motion/sword_and_shield_none_jump_slash.webp';
	import IceAgeStage2Animation from '$lib/client/images/weapon/motion/sword_and_shield_none_jump_slash.webp';
	import IceAgeStage3Animation from '$lib/client/images/weapon/motion/sword_and_shield_none_jump_slash.webp';
	import {
		sharedWeaponMotionValues,
		weaponMotionValues,
	} from '$lib/client/modules/frontier/motion-values';
	import { display } from 'mathlifier';
	import Modal from 'carbon-components-svelte/src/Modal/Modal.svelte';
	import Tag from 'carbon-components-svelte/src/Tag/Tag.svelte';
	import Image from 'carbon-icons-svelte/lib/Image.svelte';
	import { getTag } from '$lib/client/modules/frontier/tags';
	import { downloadDomAsPng } from '$lib/client/modules/download';
	import Download from 'carbon-icons-svelte/lib/Download.svelte';
	import {
		getAOESigilTrueRaw,
		getZenithSigilTrueRaw,
	} from '$lib/client/modules/frontier/sigils';
	import TrueRawConverter from '$lib/client/components/frontier/TrueRawConverter.svelte';

	let modalHeading = '';
	let modalLabel = '';
	let modalOpen = false;
	let modalImage = '';
	let modalNotes = '';

	function getIceAgeAnimation(stage: string) {
		switch (stage) {
			case '1':
				return IceAgeStage1Animation;
			case '2':
				return IceAgeStage2Animation;
			case '3':
				return IceAgeStage3Animation;
			default:
				return IceAgeStage1Animation;
		}
	}

	function getMotionValue(
		weapon: FrontierWeaponName,
		section: string,
		motionValueName: string,
	): FrontierMotionValue {
		let defaultValue = {
			name: '',
			animation: '',
			values: '',
			motionValue: 0,
			specialFlag: '',
			hitCount: 0,
			elementMultiplier: 0,
		};

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
		modalLabel = section || '';

		switch (section) {
			case 'Ice Age Stages':
				modalImage = getIceAgeAnimation(cell.value);
				modalNotes = '';
				break;
			default:
				let motionValue = getMotionValue(inputWeaponType, section, cell.value);
				modalImage = motionValue.animation || '';
				modalNotes = motionValue.notes || '';
				break;
		}
	}

	function getGRankArmorTrueRaw(option: string) {
		switch (option) {
			case 'None':
				return 0;
			case '3+ G Rank Pieces (+30)':
				return 30;
			default:
				return 0;
		}
	}

	function getIceAgeBaseMultiplier(stage: string) {
		switch (stage) {
			case 'Stage 1':
				return 0.042;
			case 'Stage 2':
				return 0.098;
			case 'Stage 3':
				return 0.14;
			default:
				return 0.042;
		}
	}

	let inputWeaponType: FrontierWeaponName = 'Sword and Shield';
	let inputNumberIceAgeCalculatorSRTrueRaw = 0;
	let inputIceAgeCalculatorGRankArmorTrueRaw = 'None';
	let inputNumberIceAgeCalculatorSecondsElapsed = 0;
	let inputIceAgeCalculatorStage = 'Stage 1';
	let inputIceAgeCalculatorHunters = '1';
	let inputNumberIceAgeCalculatorMonsterDefenseRate = 1;
	let inputNumberIceAgeCalculatorMonsterTrueHP = 30_000;

	const maxTrueRaw = 8_000;

	const minimumNumberValue = 0;
	const maximumNumberValue = 99999;
	const invalidNumberValueText = `Invalid value. Must be between ${minimumNumberValue} and ${maximumNumberValue}`;
	const invalidTrueRawText = `Invalid value. Must be between ${minimumNumberValue} and ${maxTrueRaw}`;

	$: iceAgeCalculatorSecondsNeeded =
		iceAgeCalculatorDamagePerSecond > 0
			? Math.floor(
					inputNumberIceAgeCalculatorMonsterTrueHP /
						iceAgeCalculatorDamagePerSecond,
				)
			: 'Infinity';

	$: iceAgeCalculatorMaxHPPercentDealt =
		Math.floor(
			((iceAgeCalculatorTotalDamage * 100) /
				inputNumberIceAgeCalculatorMonsterTrueHP) *
				100,
		) / 100;

	$: iceAgeCalculatorDamagePerSecond = Math.floor(
		getIceAgeBaseMultiplier(inputIceAgeCalculatorStage) *
			(inputNumberIceAgeCalculatorWeaponTrueRaw +
				inputNumberIceAgeCalculatorSigil1TrueRaw +
				inputNumberIceAgeCalculatorSigil2TrueRaw +
				inputNumberIceAgeCalculatorSigil3TrueRaw +
				inputNumberIceAgeCalculatorUnlimitedSigilTrueRaw +
				getZenithSigilTrueRaw(inputNumberIceAgeCalculatorZenithSigil) +
				getAOESigilTrueRaw(
					inputNumberIceAgeCalculatorAOESigil,
					Number.parseInt(inputIceAgeCalculatorAOESigilHunters),
				) +
				inputNumberIceAgeCalculatorSRTrueRaw +
				getGRankArmorTrueRaw(inputIceAgeCalculatorGRankArmorTrueRaw)) *
			inputNumberIceAgeCalculatorMonsterDefenseRate *
			Number.parseInt(inputIceAgeCalculatorHunters),
	);

	const formulaIceAgeDamagePerSecond = display(
		`\\text{Ice Age DPS} = \\lfloor \\text{Stage Multiplier} \\times (\\text{Weapon True Raw} + \\text{Sigils True Raw} + \\text{SR True Raw} + \\text{GRank Armor Bonus}) \\times \\text{Monster Defense Rate} \\times \\text{Ice Age Hunters}\\rfloor`,
	);

	let inputNumberIceAgeCalculatorWeaponTrueRaw = 0;
	let inputNumberIceAgeCalculatorSigil1TrueRaw = 0;
	let inputNumberIceAgeCalculatorSigil2TrueRaw = 0;
	let inputNumberIceAgeCalculatorSigil3TrueRaw = 0;
	let inputNumberIceAgeCalculatorZenithSigil = 0;
	let inputNumberIceAgeCalculatorAOESigil = 0;
	let inputIceAgeCalculatorAOESigilHunters = '1';
	let inputNumberIceAgeCalculatorUnlimitedSigilTrueRaw = 0;

	$: iceAgeCalculatorTotalDamage =
		inputNumberIceAgeCalculatorSecondsElapsed * iceAgeCalculatorDamagePerSecond;

	$: formulaValuesIceAgeDamagePerSecond = `${iceAgeCalculatorDamagePerSecond} = \\lfloor ${getIceAgeBaseMultiplier(inputIceAgeCalculatorStage)} \\times (${inputNumberIceAgeCalculatorWeaponTrueRaw} + ${
		inputNumberIceAgeCalculatorSigil1TrueRaw +
		inputNumberIceAgeCalculatorSigil2TrueRaw +
		inputNumberIceAgeCalculatorSigil3TrueRaw +
		inputNumberIceAgeCalculatorUnlimitedSigilTrueRaw +
		getZenithSigilTrueRaw(inputNumberIceAgeCalculatorZenithSigil) +
		getAOESigilTrueRaw(
			inputNumberIceAgeCalculatorAOESigil,
			Number.parseInt(inputIceAgeCalculatorAOESigilHunters),
		)
	} + ${inputNumberIceAgeCalculatorSRTrueRaw} + ${getGRankArmorTrueRaw(inputIceAgeCalculatorGRankArmorTrueRaw)}) \\times ${inputNumberIceAgeCalculatorMonsterDefenseRate} \\times ${Number.parseInt(inputIceAgeCalculatorHunters)} \\rfloor`;

	let modalLink = '';
	let modalPopoverIconType = 'component';
	let modalPopoverIcon: any;
	let modalDescription = '';
	let modalTag1 = '';
	let modalTag1Info: { link: string; icon: any; color: TagColor } = {
		link: '',
		icon: undefined,
		color: 'outline',
	};
	let modalTag2 = '';
	let modalTag2Info: { link: string; icon: any; color: TagColor } = {
		link: '',
		icon: undefined,
		color: 'outline',
	};
	let modalTag3 = '';
	let modalTag3Info: { link: string; icon: any; color: TagColor } = {
		link: '',
		icon: undefined,
		color: 'outline',
	};

	$: modalBlurClass = modalOpen ? 'modal-open-blur' : 'modal-open-noblur';

	let trueRawConverterWeaponType: FrontierWeaponName = 'Sword and Shield';
	let trueRawConverterValue = 1500;
</script>

<svelte:head>
	<link
		rel="stylesheet"
		href="https://cdn.jsdelivr.net/npm/katex@0.16.4/dist/katex.min.css"
		integrity="sha384-vKruj+a13U8yHIkAyGgK1J3ArTLzrFGBbBc0tDp4ad/EyewESeXE/Iv67Aj8gKZ0"
		crossorigin="anonymous"
	/>
</svelte:head>

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
			<img src={modalImage} alt={'ice age'} />
			<div>{modalNotes}</div>
		</div>
	{:else}
		<div class="modal-mobile-container">
			<div class="modal-mobile-contents-top">
				{#if modalLink !== ''}
					<div class="modal-mobile-image">
						<a href={modalLink}>
							<div>
								{#if modalPopoverIconType === 'component'}
									<svelte:component this={modalPopoverIcon} />
								{:else}
									<img src={modalPopoverIcon} alt={modalHeading} />
								{/if}
							</div>
						</a>
					</div>
					<div class="modal-mobile-title modal-mobile-link">
						<a href={modalLink}>
							{modalHeading.substring(0, 64)}
						</a>
					</div>
				{:else}
					<div class="modal-mobile-image">
						<div>
							{#if modalPopoverIconType === 'component'}
								<svelte:component this={modalPopoverIcon} />
							{:else}
								<img src={modalPopoverIcon} alt={modalHeading} />
							{/if}
						</div>
					</div>
					<div class="modal-mobile-title">
						{modalHeading.substring(0, 64)}
					</div>
				{/if}

				{#if modalLabel !== ''}
					<div class="modal-mobile-subtitle">{modalLabel.substring(0, 64)}</div>
				{/if}
				{#if modalDescription !== ''}
					<div class="modal-mobile-description">{modalDescription}</div>
				{/if}
			</div>
			{#if modalTag1 !== ''}
				<hr />
				<div class="modal-mobile-contents-bottom">
					<div class="modal-mobile-tag1">
						<a href={modalTag1Info.link === '' ? '/' : modalTag1Info.link}>
							<Tag
								icon={modalTag1Info.icon}
								type={modalTag1Info.color}
								interactive>{modalTag1.substring(0, 32)}</Tag
							></a
						>
					</div>
					{#if modalTag2 !== ''}<div class="modal-mobile-tag2">
							<a href={modalTag2Info.link === '' ? '/' : modalTag2Info.link}>
								<Tag
									icon={modalTag2Info.icon}
									type={modalTag2Info.color}
									interactive>{modalTag2.substring(0, 32)}</Tag
								></a
							>
						</div>
					{/if}
					{#if modalTag3 !== ''}<div class="modal-mobile-tag3">
							<a href={modalTag3Info.link === '' ? '/' : modalTag3Info.link}>
								<Tag
									icon={modalTag3Info.icon}
									type={modalTag3Info.color}
									interactive>{modalTag3.substring(0, 32)}</Tag
								></a
							>
						</div>
					{/if}
				</div>
			{/if}
		</div>
	{/if}
</Modal>

<HunterNotesPage displayTOC={true}>
	<div class={modalBlurClass}>
		<div>
			<SectionHeadingTopLevel title={'Ice Age'} />
			<div class="ice-age-section">
				<div class="ice-age-descriptions">
					<p class="ice-age-description-1">
						Upon hitting a monster (can be dead), the hunter becomes enveloped
						in an icy aura, which inflicts damage on all nearby monsters while
						providing extra skills. This aura progresses through three stages as
						you deal more hits to a monster. Additionally, it bestows <InlineTooltip
							text="Stamina Recovery Up"
							tooltip="Armor Skill"
							icon={getTag('Armor Skill').icon}
						/> and <InlineTooltip
							text="Razor Sharp"
							tooltip="Armor Skill"
							icon={getTag('Armor Skill').icon}
						/> to all hunters within its range, with the wielder also gaining <InlineTooltip
							text="Winter General"
							tooltip="Armor Skill"
							icon={getTag('Armor Skill').icon}
						/>. Damage occurs in fixed intervals of one second rather than
						gradually over time.
					</p>
					<div class="ice-age-description-2">
						<p>
							Typically, damage output ranges between 800 to 1600 per minute,
							contingent on the level, surpassing the poison output for most G
							Rank monsters. Within a group of four hunters equipped with <InlineTooltip
								text="Ice Age"
								tooltip="Armor Skill"
								icon={getTag('Armor Skill').icon}
							/>, the damage stacks and thus escalates from 800-1600 (1p) to
							3200-6400 (4p).
						</p>
					</div>
					<p>
						Ice Age's attack power only comes from SR, sigils, weapon base
						attack and G Rank armor bonus. The following buffs are ignored:
						items (e.g Seeds, Hunter Powertalon, etc.), meals (e.g. bento, guild
						food), skills (e.g. Adrenaline, Solid Determination). Buffs that
						affect weapon base attack like Drug Knowledge does count.
					</p>
					<p class="spaced-paragraph">
						Ice Age's required hits can be reached faster with <InlineTooltip
							text="Fencing+2"
							tooltip="Armor Skill"
							icon={getTag('Armor Skill').icon}
						/>.
					</p>
				</div>

				<div class="ice-age-tables-container" id="ice-age-dom">
					<Button
						kind="tertiary"
						icon={Download}
						on:click={() => downloadDomAsPng('ice-age-dom', 'ice-age')}
						>Download Tables</Button
					>
					<div class="ice-age-table-hits toc-exclude">
						<DataTable
							sortable
							zebra
							size="medium"
							headers={[
								{
									key: 'weapon',
									value: 'Weapon',
									minWidth: '12rem',
								},
								{ key: 'stage1', value: 'Stage 1', minWidth: '1rem' },
								{ key: 'stage2', value: 'Stage 2', minWidth: '1rem' },
								{
									key: 'stage3',
									value: 'Stage 3',
									minWidth: '1rem',
								},
							]}
							rows={[
								{
									id: 'gs',
									weapon: 'Great Sword',
									stage1: '1',
									stage2: '8',
									stage3: '17',
								},
								{
									id: 'ha',
									weapon: 'Hammer',
									stage1: '1',
									stage2: '9',
									stage3: '21',
								},
								{
									id: 'hh',
									weapon: 'Hunting Horn',
									stage1: '1',
									stage2: '9',
									stage3: '21',
								},
								{
									id: 'la',
									weapon: 'Lance',
									stage1: '1',
									stage2: '12',
									stage3: '26',
								},
								{
									id: 'gl',
									weapon: 'Gunlance',
									stage1: '1',
									stage2: '12',
									stage3: '26',
								},
								{
									id: 'ls',
									weapon: 'Long Sword',
									stage1: '1',
									stage2: '12',
									stage3: '26',
								},
								{
									id: 'saf',
									weapon: 'Switch Axe F',
									stage1: '1',
									stage2: '12',
									stage3: '26',
								},
								{
									id: 'hbg',
									weapon: 'Heavy Bowgun',
									stage1: '1',
									stage2: '12',
									stage3: '26',
								},

								{
									id: 'to',
									weapon: 'Tonfa',
									stage1: '1',
									stage2: '17',
									stage3: '38',
								},
								{
									id: 'lbg',
									weapon: 'Light Bowgun',
									stage1: '1',
									stage2: '17',
									stage3: '38',
								},
								{
									id: 'bow',
									weapon: 'Bow',
									stage1: '1',
									stage2: '17',
									stage3: '38',
								},
								{
									id: 'sns',
									weapon: 'Sword and Shield',
									stage1: '1',
									stage2: '17',
									stage3: '38',
								},
								{
									id: 'ds',
									weapon: 'Dual Swords',
									stage1: '1',
									stage2: '32',
									stage3: '75',
								},
								{
									id: 'ms',
									weapon: 'Magnet Spike',
									stage1: '1',
									stage2: '10',
									stage3: '22',
								},
							]}
							><Toolbar
								><div class="toolbar">
									<CopyButton
										iconDescription={'Copy as CSV'}
										text={getCSVFromArray([
											{
												id: 'gs',
												weapon: 'Great Sword',
												stage1: '1',
												stage2: '8',
												stage3: '17',
											},
											{
												id: 'ha',
												weapon: 'Hammer',
												stage1: '1',
												stage2: '9',
												stage3: '21',
											},
											{
												id: 'hh',
												weapon: 'Hunting Horn',
												stage1: '1',
												stage2: '9',
												stage3: '21',
											},
											{
												id: 'la',
												weapon: 'Lance',
												stage1: '1',
												stage2: '12',
												stage3: '26',
											},
											{
												id: 'gl',
												weapon: 'Gunlance',
												stage1: '1',
												stage2: '12',
												stage3: '26',
											},
											{
												id: 'ls',
												weapon: 'Long Sword',
												stage1: '1',
												stage2: '12',
												stage3: '26',
											},
											{
												id: 'saf',
												weapon: 'Switch Axe F',
												stage1: '1',
												stage2: '12',
												stage3: '26',
											},
											{
												id: 'hbg',
												weapon: 'Heavy Bowgun',
												stage1: '1',
												stage2: '12',
												stage3: '26',
											},

											{
												id: 'to',
												weapon: 'Tonfa',
												stage1: '1',
												stage2: '17',
												stage3: '38',
											},
											{
												id: 'lbg',
												weapon: 'Light Bowgun',
												stage1: '1',
												stage2: '17',
												stage3: '38',
											},
											{
												id: 'bow',
												weapon: 'Bow',
												stage1: '1',
												stage2: '17',
												stage3: '38',
											},
											{
												id: 'sns',
												weapon: 'Sword and Shield',
												stage1: '1',
												stage2: '17',
												stage3: '38',
											},
											{
												id: 'ds',
												weapon: 'Dual Swords',
												stage1: '1',
												stage2: '32',
												stage3: '75',
											},
											{
												id: 'ms',
												weapon: 'Magnet Spike',
												stage1: '1',
												stage2: 'Unknown',
												stage3: 'Unknown',
											},
										])}
									/>
								</div>
							</Toolbar>
							<span slot="title">
								<div class="data-table-title">
									<div>Ice Age Required Hits</div>
								</div>
							</span>
							<svelte:fragment slot="cell" let:cell>
								{#if cell.key === 'weapon'}
									<InlineTooltip
										icon={getWeaponIcon(cell.value)}
										text={cell.value}
										tooltip="Weapon"
									/>
								{:else}
									<p>{cell.value}</p>
								{/if}
							</svelte:fragment>
						</DataTable>
					</div>
					<div class="ice-age-table-stages toc-exclude">
						<DataTable
							sortable
							zebra
							size="short"
							headers={[
								{ key: 'stage', value: 'Stage', minWidth: '1rem' },
								{ key: 'formula', value: 'DPS Formula', minWidth: '8rem' },
								{ key: 'duration', value: 'Duration', minWidth: '1rem' },
								{
									key: 'downgradeDuration',
									value: 'Downgrade Duration',
									minWidth: '1rem',
								},
							]}
							rows={[
								{
									id: '1',
									stage: '1',
									formula: '0.042 x True Raw x DefRate',
									duration: '11-18s',
									downgradeDuration: '7s',
								},
								{
									id: '2',
									stage: '2',
									formula: '0.098 x True Raw x DefRate',
									duration: '15-25s',
									downgradeDuration: '10s',
								},
								{
									id: '3',
									stage: '3',
									formula: '0.14 x True Raw x DefRate',
									duration: '6-9s',
									downgradeDuration: '-',
								},
							]}
							><Toolbar
								><div class="toolbar">
									<CopyButton
										iconDescription={'Copy as CSV'}
										text={getCSVFromArray([
											{
												id: '1',
												stage: '1',
												formula: '0.042 x True Raw x DefRate',
												duration: '11-18s',
												downgradeDuration: '7s',
											},
											{
												id: '2',
												stage: '2',
												formula: '0.098 x True Raw x DefRate',
												duration: '15-25s',
												downgradeDuration: '10s',
											},
											{
												id: '3',
												stage: '3',
												formula: '0.14 x True Raw x DefRate',
												duration: '6-9s',
												downgradeDuration: '-',
											},
										])}
									/>
								</div>
							</Toolbar>
							<span slot="title">
								<div class="data-table-title">
									<div>Ice Age Stages</div>
								</div>
							</span>
							<svelte:fragment slot="cell" let:cell>
								{#if cell.key === 'stage'}
									<Button
										on:click={() => changeModal(cell, 'Ice Age Stages')}
										size="small"
										icon={Image}
										kind="ghost">{cell.value}</Button
									>
								{:else}
									<p>{cell.value}</p>
								{/if}
							</svelte:fragment>
						</DataTable>
					</div>
				</div>

				<TrueRawConverter
					bind:weaponType={trueRawConverterWeaponType}
					bind:value={trueRawConverterValue}
					showWeapon
				/>

				<div class="ice-age-formula">
					<p>Formula:</p>
					<div class="formula-container">
						{@html formulaIceAgeDamagePerSecond}
					</div>
					<div class="formula-container">
						{@html display(formulaValuesIceAgeDamagePerSecond)}
					</div>
				</div>
				<div class="ice-age-calculator">
					<div>
						<NumberInput
							size="sm"
							step={10}
							min={minimumNumberValue}
							max={maxTrueRaw}
							bind:value={inputNumberIceAgeCalculatorWeaponTrueRaw}
							invalidText={invalidTrueRawText}
							label={'Weapon Base True Raw'}
						/>
					</div>
					<div>
						<NumberInput
							size="sm"
							step={1}
							min={0}
							max={45}
							bind:value={inputNumberIceAgeCalculatorSigil1TrueRaw}
							invalidText={'Invalid value'}
							label={'Sigil 1 True Raw'}
						/>
					</div>
					<div>
						<NumberInput
							size="sm"
							step={1}
							min={0}
							max={45}
							bind:value={inputNumberIceAgeCalculatorSigil2TrueRaw}
							invalidText={'Invalid value'}
							label={'Sigil 2 True Raw'}
						/>
					</div>
					<div>
						<NumberInput
							size="sm"
							step={1}
							min={0}
							max={45}
							bind:value={inputNumberIceAgeCalculatorSigil3TrueRaw}
							invalidText={'Invalid value'}
							label={'Sigil 3 True Raw'}
						/>
					</div>
					<div>
						<NumberInput
							size="sm"
							step={1}
							min={0}
							max={15}
							bind:value={inputNumberIceAgeCalculatorUnlimitedSigilTrueRaw}
							invalidText={'Invalid value'}
							label={'Unlimited Sigil True Raw'}
						/>
					</div>
					<div>
						<NumberInput
							size="sm"
							step={1}
							min={0}
							max={15}
							bind:value={inputNumberIceAgeCalculatorZenithSigil}
							invalidText={'Invalid value'}
							label={'Zenith Sigil Attack'}
						/>
					</div>
					<div>
						<NumberInput
							size="sm"
							step={1}
							min={0}
							max={15}
							bind:value={inputNumberIceAgeCalculatorAOESigil}
							invalidText={'Invalid value'}
							label={'AOE Sigil Attack'}
						/>
					</div>
					<div>
						<Dropdown
							titleText="AOE Attack Sigil Hunters"
							bind:selectedId={inputIceAgeCalculatorAOESigilHunters}
							items={[
								{ id: '1', text: '1 Hunter' },
								{ id: '2', text: '2 Hunters' },
								{ id: '3', text: '3 Hunters' },
								{ id: '4', text: '4 Hunters' },
							]}
						/>
					</div>
					<div>
						<NumberInput
							size="sm"
							step={10}
							min={minimumNumberValue}
							max={100}
							bind:value={inputNumberIceAgeCalculatorSRTrueRaw}
							invalidText={'Invalid value. Must be between 0 and 100'}
							label={'SR True Raw'}
						/>
					</div>
					<div>
						<Dropdown
							titleText="G Armor Pieces"
							bind:selectedId={inputIceAgeCalculatorGRankArmorTrueRaw}
							items={[
								{ id: 'None', text: 'None' },
								{
									id: '3+ G Rank Pieces (+30)',
									text: '3+ G Rank Pieces (+30)',
								},
							]}
						/>
					</div>
					<div>
						<NumberInput
							size="sm"
							step={10}
							min={minimumNumberValue}
							max={maximumNumberValue}
							bind:value={inputNumberIceAgeCalculatorSecondsElapsed}
							invalidText={invalidNumberValueText}
							label={'Seconds Elapsed'}
						/>
					</div>
					<div>
						<NumberInput
							size="sm"
							step={0.01}
							min={0.0001}
							max={10}
							bind:value={inputNumberIceAgeCalculatorMonsterDefenseRate}
							invalidText={'Invalid value'}
							label={'Monster Defense Rate'}
						/>
					</div>
					<div>
						<NumberInput
							size="sm"
							step={100}
							min={1}
							max={maximumNumberValue}
							bind:value={inputNumberIceAgeCalculatorMonsterTrueHP}
							invalidText={'Invalid value'}
							label={'Monster True HP'}
						/>
					</div>
					<div>
						<Dropdown
							titleText="Ice Age Stage"
							bind:selectedId={inputIceAgeCalculatorStage}
							items={[
								{ id: 'Stage 1', text: 'Stage 1' },
								{ id: 'Stage 2', text: 'Stage 2' },
								{ id: 'Stage 3', text: 'Stage 3' },
							]}
						/>
					</div>
					<div>
						<Dropdown
							titleText="Ice Age Hunters"
							bind:selectedId={inputIceAgeCalculatorHunters}
							items={[
								{ id: '1', text: '1 Hunter' },
								{ id: '2', text: '2 Hunters' },
								{ id: '3', text: '3 Hunters' },
								{ id: '4', text: '4 Hunters' },
							]}
						/>
					</div>
					<p>
						Seconds needed: {iceAgeCalculatorSecondsNeeded}
					</p>
					<p>
						Max HP% Dealt: {iceAgeCalculatorMaxHPPercentDealt}
					</p>
					<p>
						Total Damage: {iceAgeCalculatorTotalDamage} ({iceAgeCalculatorDamagePerSecond}
						DPS)
					</p>
				</div>
			</div>
			<div class="page-turn">
				<PageTurn pageUrlPathName={$page.url.pathname} />
			</div>
		</div>
	</div>
</HunterNotesPage>

<style lang="scss">
	.page-turn {
		margin-top: 4rem;
	}

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
		display: flex;
		align-items: center;
		gap: 1rem;
		flex-grow: 1;
		flex-shrink: 1;
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

	.ice-age-tables-container {
		display: flex;
		flex-wrap: wrap;
		gap: 1rem;
		margin-bottom: 2rem;
		align-items: start;
		width: 100%;
		background-color: var(--ctp-base);
	}

	.ice-age-table-stages {
		grid-area: ice-age-table-stages;
	}

	.ice-age-descriptions {
		grid-area: ice-age-descriptions;
		display: flex;
		gap: 1rem;
		flex-direction: column;
	}

	.ice-age-table-hits {
		grid-area: ice-age-table-hits;
	}

	.datatable-bottom {
		margin-top: 2rem;
	}

	@media (min-width: 320px) {
		.ice-age-calculator {
			display: flex;
			flex-direction: column;
			gap: 1rem;
		}
	}

	@media (min-width: 1056px) {
		.ice-age-calculator {
			display: grid;
			grid-template-columns: 1fr 1fr 1fr;
			gap: 1rem;
			align-items: center;
		}
	}

	.modal-mobile-popover-image {
		max-width: 100%; /* Ensures the image does not exceed the width of its container */
		max-height: 100%; /* Ensures the image does not exceed the height of its container */
		object-fit: cover; /* Ensures the image covers the area without distorting its aspect ratio */
		display: inline-block; /* Removes any extra space below the image */
	}

	.modal-mobile-container hr {
		width: 100%;
		margin-bottom: 0;
	}

	.modal-mobile-container {
		display: flex;
		gap: 0.5rem;
		padding: var(--cds-spacing-04);
		flex-direction: column;
		max-width: 48ch;
		overflow: hidden;
	}

	.modal-mobile-link:hover {
		text-decoration: underline;
	}

	.modal-mobile-image {
		grid-area: image;
		display: inline-block;
		max-width: 8ch;
	}

	.modal-mobile-button {
		grid-area: button;
	}

	.modal-mobile-container a {
		font-family: var(--font-body);
		font-size: 1rem;
		color: var(--ctp-text);
		text-decoration: none;
	}

	.modal-mobile-title {
		display: -webkit-box;
		-webkit-line-clamp: 1; /* number of lines to show */
		line-clamp: 1;
		-webkit-box-orient: vertical;
		overflow: hidden;
		grid-area: title;
		font-weight: bold;
		height: fit-content;
	}

	.modal-mobile-subtitle {
		display: -webkit-box;
		-webkit-line-clamp: 2; /* number of lines to show */
		line-clamp: 2;
		-webkit-box-orient: vertical;
		overflow: hidden;
		grid-area: subtitle;
		color: var(--ctp-subtext0);
	}

	.modal-mobile-title,
	.modal-mobile-subtitle {
		padding-left: 0.5rem;
		padding-top: 0;
		padding-bottom: 0;
		margin: 0;
	}

	.modal-mobile-tag1,
	.modal-mobile-tag2,
	.modal-mobile-tag3 {
		display: -webkit-box;
		-webkit-line-clamp: 1; /* number of lines to show */
		line-clamp: 1;
		-webkit-box-orient: vertical;
		overflow: hidden;
	}

	.modal-mobile-description {
		grid-area: description;
		text-wrap: wrap;
		margin-top: 1rem;
		display: -webkit-box;
		-webkit-line-clamp: 3; /* number of lines to show */
		line-clamp: 3;
		-webkit-box-orient: vertical;
		overflow: hidden;
	}

	.modal-mobile-contents-top {
		display: grid;
		grid-template-areas:
			'image title button'
			'image subtitle subtitle'
			'description description description';
		gap: 0;
		grid-template-columns: auto 1fr auto;
		grid-template-rows: auto 1fr auto;
	}

	.modal-mobile-contents-bottom {
		display: flex;
		gap: 0.5rem;
	}

	.ice-age-table-hits {
		display: flex;
		flex-wrap: wrap;
		overflow-x: auto;
		max-width: 90vw;
	}

	.ice-age-formula {
		max-width: 80vw;
		overflow-x: auto;
	}

	.formula-container {
		margin-bottom: 1rem;
		margin-top: 1rem;
	}

	@media (min-width: 320px) {
		.formula-container {
			max-width: 95vw;
		}
	}

	@media (min-width: 1056px) {
		.formula-container {
			max-width: 80vw;
		}
	}

	.weapon-type {
		display: flex;
		gap: 0.5rem;
		align-items: center;
	}
</style>
