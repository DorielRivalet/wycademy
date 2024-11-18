<script lang="ts">
	import PageTurn from '$lib/client/components/PageTurn.svelte';
	import SectionHeadingTopLevel from '$lib/client/components/SectionHeadingTopLevel.svelte';
	import TableOfContentsPage from '$lib/client/components/TableOfContentsPage.svelte';
	import { page } from '$app/stores';
	import Loading from 'carbon-components-svelte/src/Loading/Loading.svelte';
	import NumberInput from 'carbon-components-svelte/src/NumberInput/NumberInput.svelte';
	import { display } from 'mathlifier';
	import Dropdown from 'carbon-components-svelte/src/Dropdown/Dropdown.svelte';
	import { onMount, type Component } from 'svelte';
	import '@carbon/charts-svelte/styles.css';
	import {
		LineChart,
		ScaleTypes,
		type LineChartOptions,
	} from '@carbon/charts-svelte';
	import {
		affinityDropdownItems,
		multipliersDropdownItems,
	} from '$lib/client/modules/frontier/damage-calculator';
	import type { CarbonTheme } from 'carbon-components-svelte/src/Theme/Theme.svelte';
	import { getContext } from 'svelte';
	import type { Writable } from 'svelte/store';

	const carbonThemeStore = getContext(
		Symbol.for('carbonTheme'),
	) as Writable<CarbonTheme>;

	function getCritConversionTrueRaw(
		totalAffinity: number,
		critConversionUpMultiplier: number,
		naturalAffinity: number,
		critConversionAffinity: Number,
	) {
		if (critConversionAffinity !== 30 || totalAffinity <= 0) {
			return 0;
		}

		let excessAffinityTrueRaw =
			totalAffinity > 100 ? Math.floor(Math.sqrt(totalAffinity - 100) * 7) : 0;

		let naturalAffinityTrueRaw = Math.floor(
			Math.sqrt(Math.max(naturalAffinity, 0)) * critConversionUpMultiplier,
		);

		return naturalAffinityTrueRaw + excessAffinityTrueRaw;
	}

	function generateFlashConversionChartData(
		naturalAffinity: number,
		critConversionUpMultiplier: number,
	) {
		const minAffinity = 100;
		const maxAffinity = 500;
		const step = 10;
		let data = [];
		for (let index = minAffinity; index <= maxAffinity; index = index + step) {
			let obj = {
				group: 'Dataset 1',
				affinity: index,
				trueRaw:
					Math.floor(Math.sqrt(Math.max(index - 100, 0)) * 7) +
					Math.floor(
						Math.sqrt(Math.max(naturalAffinity, 0)) *
							critConversionUpMultiplier,
					),
			};
			data.push(obj);
		}
		return data;
	}

	const formulaFlashConversion = display(
		`\\text{Flash Conversion True Raw} = \\lfloor \\sqrt{\\text{Excess Affinity}} \\times 7 \\rfloor`,
	);

	const formulaFlashConversionUp = display(
		`\\text{Flash Conversion Up True Raw} = \\lfloor \\sqrt{\\text{Natural Affinity}} \\times \\text{critConversionUpMultiplier} \\rfloor`,
	);

	let critConversionCalculatorIssenAffinity = $state('0');
	let critConversionCalculatorSharpnessAffinity = $state('10');
	let critConversionCalculatorSigil1Affinity = $state(15);
	let critConversionCalculatorSigil2Affinity = $state(0);
	let critConversionCalculatorSigil3Affinity = $state(0);
	let critConversionCalculatorStyleRankAffinity = $state('26');
	let critConversionCalculatorExpertAffinity = $state('100');
	let critConversionCalculatorGSActiveFeatureAffinity = $state('0');
	let critConversionCalculatorDrinkAffinity = $state('30');
	let critConversionCalculatorStarvingWolfAffinity = $state('50');
	let critConversionCalculatorCeaselessAffinity = $state('60');
	let critConversionCalculatorFuriousAffinity = $state('40');
	let critConversionCalculatorDivaPrayerGemAffinity = $state('100');
	let critConversionCalculatorAOEAffinityCount = $state('1');
	let critConversionCalculatorAOEAffinitySigil = $state(0);
	let critConversionCalculatorCritConversionUp = $state('None');
	let critConversionCalculatorNaturalAffinity = $state(100);
	let critConversionCalculatorFlashConversion = $state(
		'Critical Conversion (+30%)',
	);

	let flashConversionChartLoaded = $state(false);
	let flashConversionChart: Component<LineChart> = $state();

	onMount(async () => {
		const charts = await import('@carbon/charts-svelte');
		flashConversionChart = charts.LineChart;
		flashConversionChartLoaded = true;
	});
	let critConversionCalculatorAOETotalAffinity = $derived(
		Number(critConversionCalculatorAOEAffinityCount) === 0 ||
			critConversionCalculatorAOEAffinitySigil === 0
			? 0
			: (20 + critConversionCalculatorAOEAffinitySigil * 2) *
					Number(critConversionCalculatorAOEAffinityCount),
	);
	let critConversionCalculatorCritConversionUpMultiplier = $derived(
		multipliersDropdownItems.find(
			(item) => item.name === critConversionCalculatorCritConversionUp,
		)?.value || 0,
	);
	let formulaValuesFlashConversionUp = $derived(
		`${Math.floor(
			Math.sqrt(Math.max(0, critConversionCalculatorNaturalAffinity)) *
				critConversionCalculatorCritConversionUpMultiplier,
		)} = \\lfloor \\sqrt{${Math.max(0, critConversionCalculatorNaturalAffinity)}} \\times ${critConversionCalculatorCritConversionUpMultiplier} \\rfloor`,
	);
	let flashConversionChartData = $derived(
		generateFlashConversionChartData(
			critConversionCalculatorNaturalAffinity,
			critConversionCalculatorCritConversionUpMultiplier,
		),
	);
	let critConversionCalculatorFlashConversionAffinity = $derived(
		affinityDropdownItems.find(
			(item) => item.name === critConversionCalculatorFlashConversion,
		)?.value || 0,
	);
	let critConversionCalculatorTotalAffinity = $derived(
		Number(critConversionCalculatorIssenAffinity) +
			Number(critConversionCalculatorSharpnessAffinity) +
			critConversionCalculatorSigil1Affinity +
			critConversionCalculatorSigil2Affinity +
			critConversionCalculatorSigil3Affinity +
			Number(critConversionCalculatorStyleRankAffinity) +
			Number(critConversionCalculatorExpertAffinity) +
			critConversionCalculatorNaturalAffinity +
			critConversionCalculatorFlashConversionAffinity +
			Number(critConversionCalculatorGSActiveFeatureAffinity) +
			Number(critConversionCalculatorDrinkAffinity) +
			Number(critConversionCalculatorStarvingWolfAffinity) +
			Number(critConversionCalculatorCeaselessAffinity) +
			Number(critConversionCalculatorFuriousAffinity) +
			critConversionCalculatorAOETotalAffinity +
			Number(critConversionCalculatorDivaPrayerGemAffinity),
	);
	let critConversionCalculatorExcessAffinity = $derived(
		Math.max(0, critConversionCalculatorTotalAffinity - 100),
	);
	let formulaValuesFlashConversion =
		$derived(`${Math.floor(Math.sqrt(critConversionCalculatorExcessAffinity >= 0 ? critConversionCalculatorExcessAffinity : 0) * 7)} = \\lfloor \\sqrt{${critConversionCalculatorExcessAffinity}} \\times 7 \\rfloor
	`);
	let critConversionCalculatorTrueRaw = $derived(
		getCritConversionTrueRaw(
			critConversionCalculatorTotalAffinity,
			critConversionCalculatorCritConversionUpMultiplier,
			critConversionCalculatorNaturalAffinity,
			critConversionCalculatorFlashConversionAffinity,
		),
	);
	let flashConversionChartOptions = $derived({
		title: 'Flash Conversion Total Affinity to True Raw',
		theme: $carbonThemeStore,
		height: '400px',
		legend: { enabled: false },
		axes: {
			bottom: {
				title: 'Affinity',
				mapsTo: 'affinity',
				scaleType: ScaleTypes.LINEAR,
				domain: [100, 500],
			},
			left: {
				mapsTo: 'trueRaw',
				title: 'True Raw',
				scaleType: ScaleTypes.LINEAR,
			},
		},
	} as LineChartOptions);
</script>

<svelte:head>
	<link
		rel="stylesheet"
		href="https://cdn.jsdelivr.net/npm/katex@0.16.4/dist/katex.min.css"
		integrity="sha384-vKruj+a13U8yHIkAyGgK1J3ArTLzrFGBbBc0tDp4ad/EyewESeXE/Iv67Aj8gKZ0"
		crossorigin="anonymous"
	/>
</svelte:head>

<TableOfContentsPage displayTOC={false}>
	<div>
		<SectionHeadingTopLevel title={'Crit Conversion / Flash Conversion'} />
		<div class="spaced-paragraph">
			Adds 30% affinity and converts any excess affinity past 100% into extra
			true raw.
		</div>
		<div class="spaced-paragraph">
			Critical Conversion Up only uses the base affinity of your weapon (natural
			affinity). Sigils, Skills, SR Skills and the +5-10% from having above blue
			sharpness do not count towards the increase. In game, the sharpness bonus
			is always displayed, so deduct 10% from most weapons for getting the
			correct value.
		</div>
		<div class="spaced-paragraph">
			The zenith skill does not need you to have over 100% affinity for it to
			take effect.
		</div>
		<div>Formulas:</div>
		<div class="formula-container">
			{@html formulaFlashConversion}
			{@html display(formulaValuesFlashConversion)}
		</div>
		<div class="formula-container">
			{@html formulaFlashConversionUp}
			{@html display(formulaValuesFlashConversionUp)}
		</div>
		<div class="flash-conversion-calculator">
			<Dropdown
				titleText="Flash Conversion"
				bind:selectedId={critConversionCalculatorFlashConversion}
				items={[
					{ id: 'None', text: 'None' },
					{
						id: 'Critical Conversion (+30%)',
						text: 'Critical Conversion (+30%)',
					},
				]}
			/>
			<Dropdown
				titleText="Crit Conversion Up"
				bind:selectedId={critConversionCalculatorCritConversionUp}
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
					bind:value={critConversionCalculatorNaturalAffinity}
					label={'Natural Affinity'}
				/>
			</div>
			<div class="number-input-container">
				<NumberInput
					size="sm"
					step={1}
					bind:value={critConversionCalculatorSigil1Affinity}
					label={'Sigil 1 Affinity'}
				/>
			</div>
			<div class="number-input-container">
				<NumberInput
					size="sm"
					step={1}
					bind:value={critConversionCalculatorSigil2Affinity}
					label={'Sigil 2 Affinity'}
				/>
			</div>
			<div class="number-input-container">
				<NumberInput
					size="sm"
					step={1}
					bind:value={critConversionCalculatorSigil3Affinity}
					label={'Sigil 3 Affinity'}
				/>
			</div>
			<Dropdown
				titleText="AOE Affinity Sigil Hunters"
				bind:selectedId={critConversionCalculatorAOEAffinityCount}
				items={[
					{ id: '1', text: '1 Hunter' },
					{ id: '2', text: '2 Hunters' },
					{ id: '3', text: '3 Hunters' },
					{ id: '4', text: '4 Hunters' },
				]}
			/>
			<div class="number-input-container">
				<NumberInput
					size="sm"
					step={1}
					min={0}
					max={15}
					bind:value={critConversionCalculatorAOEAffinitySigil}
					invalidText={'Invalid value'}
					label={'AOE Sigil Affinity'}
				/>
			</div>
			<Dropdown
				titleText="Issen Skills"
				bind:selectedId={critConversionCalculatorIssenAffinity}
				items={[
					{
						id: '0',
						text: 'None or Determination',
					},
					{
						id: '5',
						text: 'Issen +1 (+5% / +0.10x)',
					},
					{
						id: '10',
						text: 'Issen +2 (+10% / +0.15x)',
					},
					{
						id: '20',
						text: 'Issen +3 (+20% / +0.25x)',
					},
				]}
			/>
			<Dropdown
				titleText="Melee Sharpness"
				bind:selectedId={critConversionCalculatorSharpnessAffinity}
				items={[
					{
						id: '0',
						text: 'Below Blue or Gunners (+0%)',
					},
					{ id: '5', text: 'Blue (+5%)' },
					{
						id: '10',
						text: 'White Upwards (+10%)',
					},
				]}
			/>
			<Dropdown
				titleText="Style Rank Affinity"
				bind:selectedId={critConversionCalculatorStyleRankAffinity}
				items={[
					{ id: '0', text: 'None' },
					{
						id: '20',
						text: 'Affinity +20% (+20%)',
					},
					{
						id: '24',
						text: 'Affinity +24% (+24%)',
					},
					{
						id: '26',
						text: 'Affinity +26% (+26%)',
					},
				]}
			/>
			<Dropdown
				titleText="Expert Skills"
				bind:selectedId={critConversionCalculatorExpertAffinity}
				items={[
					{ id: '0', text: 'None' },
					{ id: '10', text: 'Expert +1 (+10%)' },
					{ id: '20', text: 'Expert +2 (+20%)' },
					{ id: '30', text: 'Expert +3 (+30%)' },
					{ id: '40', text: 'Expert +4 (+40%)' },
					{ id: '50', text: 'Expert +5 (+50%)' },
					{
						id: '100',
						text: 'Determination (+100%)',
					},
				]}
			/>
			<Dropdown
				titleText="GS Active Feature"
				bind:selectedId={critConversionCalculatorGSActiveFeatureAffinity}
				items={[
					{ id: '0', text: 'None' },
					{
						id: '100',
						text: 'Unsheathe and Parry Attacks (+100%)',
					},
				]}
			/>
			<Dropdown
				titleText="Affinity Items"
				bind:selectedId={critConversionCalculatorDrinkAffinity}
				items={[
					{ id: '0', text: 'None' },
					{
						id: '10',
						text: 'Caravan Whetstone (+10%)',
					},
					{ id: '30', text: 'Halk Drink (+30%)' },
					{ id: '40', text: 'Both (+40%)' },
				]}
			/>
			<Dropdown
				titleText="Starving Wolf"
				bind:selectedId={critConversionCalculatorStarvingWolfAffinity}
				items={[
					{ id: '0', text: 'None (1x)' },
					{
						id: '50',
						text: 'Starving Wolf +1 or +2 (+50%)',
					},
				]}
			/>
			<Dropdown
				titleText="Ceaseless"
				bind:selectedId={critConversionCalculatorCeaselessAffinity}
				items={[
					{ id: '0', text: 'None (1x)' },
					{
						id: '35',
						text: 'Ceaseless 1st Stage (+35% / +0.10x)',
					},
					{
						id: '50',
						text: 'Ceaseless 2nd Stage (+50% / +0.15x)',
					},
					{
						id: '60',
						text: 'Ceaseless Up 3rd Stage (+60% / +0.20x)',
					},
				]}
			/>
			<Dropdown
				titleText="Furious"
				bind:selectedId={critConversionCalculatorFuriousAffinity}
				items={[
					{
						id: '0',
						text: 'None (x1 Ele & Status)',
					},
					{
						id: '10',
						text: '1st Stage (+70 / 1.05x Ele & Status / +10% Affinity)',
					},
					{
						id: '25',
						text: '2nd Stage (+100 / 1.10x Ele & Status / +25% Affinity)',
					},
					{
						id: '40',
						text: '3rd Stage (+180 / 1.20x Ele & Status / +40% Affinity)',
					},
				]}
			/>
			<Dropdown
				titleText="Diva Prayer Gem Affinity"
				bind:selectedId={critConversionCalculatorDivaPrayerGemAffinity}
				items={[
					{
						id: '0',
						text: 'None',
					},
					{
						id: '25',
						text: 'Affinity UP Lv1 (+25%)',
					},
					{
						id: '50',
						text: 'Affinity UP Lv2 (+50%)',
					},
					{
						id: '100',
						text: 'Affinity UP Lv3 (+100%)',
					},
				]}
			/>
		</div>
		<div>Total Affinity: {critConversionCalculatorTotalAffinity}</div>
		<div>Total True Raw: {critConversionCalculatorTrueRaw}</div>
		<div>
			{#if flashConversionChartLoaded}
				{@const SvelteComponent = flashConversionChart}
				<SvelteComponent
					data={flashConversionChartData}
					options={flashConversionChartOptions}
				/>
			{:else}
				<Loading withOverlay={false} />
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

	.number-input-container {
		margin-right: 1rem;
	}

	.flash-conversion-calculator {
		display: flex;
		gap: 1rem;
		flex-wrap: wrap;
		align-items: center;
		margin: 1rem;
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
</style>
