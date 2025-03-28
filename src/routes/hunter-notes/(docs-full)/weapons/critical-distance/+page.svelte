<script lang="ts">
	import PageTurn from '$lib/client/components/PageTurn.svelte';
	import SectionHeadingTopLevel from '$lib/client/components/SectionHeadingTopLevel.svelte';
	import TableOfContentsPage from '$lib/client/components/TableOfContentsPage.svelte';
	import Loading from 'carbon-components-svelte/src/Loading/Loading.svelte';
	import DataTable from 'carbon-components-svelte/src/DataTable/DataTable.svelte';
	import Toolbar from 'carbon-components-svelte/src/DataTable/Toolbar.svelte';
	import CopyButton from 'carbon-components-svelte/src/CopyButton/CopyButton.svelte';
	import { getCSVFromArray } from '$lib/client/modules/csv';
	import SectionHeading from '$lib/client/components/SectionHeading.svelte';
	import Dropdown from 'carbon-components-svelte/src/Dropdown/Dropdown.svelte';
	import { getWeaponIcon } from '$lib/client/modules/frontier/weapons';
	import InlineTooltip from '$lib/client/components/frontier/InlineTooltip.svelte';
	import { onMount, type Component } from 'svelte';
	import {
		ScaleTypes,
		type LineChart,
		type LineChartOptions,
	} from '@carbon/charts-svelte';
	import '@carbon/charts-svelte/styles.css';
	import { page } from '$app/stores';
	import type { CarbonTheme } from 'carbon-components-svelte/src/Theme/Theme.svelte';
	import { getContext } from 'svelte';
	import type { Writable } from 'svelte/store';

	const carbonThemeStore = getContext(
		Symbol.for('carbonTheme'),
	) as Writable<CarbonTheme>;

	let criticalDistanceChartLoaded = $state(false);
	let criticalDistanceChart: Component<LineChart> = $state();
	let criticalDistanceBowChart: Component<LineChart> = $state();

	const criticalDistanceChartAmmoTypesData = [
		{
			type: 'Normal / Rapid Shot',
			data: [
				{
					group: 'Light Bowgun (Earth)',
					multiplier: 1.5,
					distance: 'Close',
				},
				{
					group: 'Light Bowgun (Earth)',
					multiplier: 1.5,
					distance: 'Mid 1',
				},
				{
					group: 'Light Bowgun (Earth)',
					multiplier: 1,
					distance: 'Mid 2',
				},
				{
					group: 'Light Bowgun (Earth)',
					multiplier: 0.8,
					distance: 'Far 1',
				},
				{
					group: 'Light Bowgun (Earth)',
					multiplier: 0.5,
					distance: 'Far 2',
				},
				{
					group: 'Light Bowgun (Earth)',
					multiplier: 0.5,
					distance: 'Far 3',
				},
				{
					group: 'Light Bowgun (Earth)',
					multiplier: 0,
					distance: 'Far 4',
				},
				{
					group: 'Light Bowgun (Earth)',
					multiplier: 0,
					distance: 'Far 5',
				},
				{
					group: 'Light Bowgun (Heaven / Storm)',
					multiplier: 1.6,
					distance: 'Close',
				},
				{
					group: 'Light Bowgun (Heaven / Storm)',
					multiplier: 1,
					distance: 'Mid 1',
				},
				{
					group: 'Light Bowgun (Heaven / Storm)',
					multiplier: 0.8,
					distance: 'Mid 2',
				},
				{
					group: 'Light Bowgun (Heaven / Storm)',
					multiplier: 0.5,
					distance: 'Far 1',
				},
				{
					group: 'Light Bowgun (Heaven / Storm)',
					multiplier: 0.5,
					distance: 'Far 2',
				},
				{
					group: 'Light Bowgun (Heaven / Storm)',
					multiplier: 0.5,
					distance: 'Far 3',
				},
				{
					group: 'Light Bowgun (Heaven / Storm)',
					multiplier: 0,
					distance: 'Far 4',
				},
				{
					group: 'Light Bowgun (Heaven / Storm)',
					multiplier: 0,
					distance: 'Far 5',
				},
				{
					group: 'Light Bowgun (Storm Step Shot)',
					multiplier: 2,
					distance: 'Close',
				},
				{
					group: 'Light Bowgun (Storm Step Shot)',
					multiplier: 2,
					distance: 'Mid 1',
				},
				{
					group: 'Light Bowgun (Storm Step Shot)',
					multiplier: 2,
					distance: 'Mid 2',
				},
				{
					group: 'Light Bowgun (Storm Step Shot)',
					multiplier: 1.5,
					distance: 'Far 1',
				},
				{
					group: 'Light Bowgun (Storm Step Shot)',
					multiplier: 0,
					distance: 'Far 2',
				},
				{
					group: 'Light Bowgun (Storm Step Shot)',
					multiplier: 0,
					distance: 'Far 3',
				},
				{
					group: 'Light Bowgun (Storm Step Shot)',
					multiplier: 0,
					distance: 'Far 4',
				},
				{
					group: 'Light Bowgun (Storm Step Shot)',
					multiplier: 0,
					distance: 'Far 5',
				},
				{
					group: 'Heavy Bowgun',
					multiplier: 2,
					distance: 'Close',
				},
				{
					group: 'Heavy Bowgun',
					multiplier: 2,
					distance: 'Mid 1',
				},
				{
					group: 'Heavy Bowgun',
					multiplier: 1.7,
					distance: 'Mid 2',
				},
				{
					group: 'Heavy Bowgun',
					multiplier: 1.7,
					distance: 'Far 1',
				},
				{
					group: 'Heavy Bowgun',
					multiplier: 1,
					distance: 'Far 2',
				},
				{
					group: 'Heavy Bowgun',
					multiplier: 0.8,
					distance: 'Far 3',
				},
				{
					group: 'Heavy Bowgun',
					multiplier: 0.5,
					distance: 'Far 4',
				},
				{
					group: 'Heavy Bowgun',
					multiplier: 0.5,
					distance: 'Far 5',
				},
			],
		},
		{
			type: 'Pierce Shot',
			data: [
				{
					group: 'Light Bowgun (Earth)',
					multiplier: 1,
					distance: 'Close',
				},
				{
					group: 'Light Bowgun (Earth)',
					multiplier: 1.7,
					distance: 'Mid 1',
				},
				{
					group: 'Light Bowgun (Earth)',
					multiplier: 1.7,
					distance: 'Mid 2',
				},
				{
					group: 'Light Bowgun (Earth)',
					multiplier: 1.7,
					distance: 'Far 1',
				},
				{
					group: 'Light Bowgun (Earth)',
					multiplier: 1.7,
					distance: 'Far 2',
				},
				{
					group: 'Light Bowgun (Earth)',
					multiplier: 0.8,
					distance: 'Far 3',
				},
				{
					group: 'Light Bowgun (Earth)',
					multiplier: 0.5,
					distance: 'Far 4',
				},
				{
					group: 'Light Bowgun (Earth)',
					multiplier: 0.5,
					distance: 'Far 5',
				},
				{
					group: 'Light Bowgun (Heaven / Storm)',
					multiplier: 1,
					distance: 'Close',
				},
				{
					group: 'Light Bowgun (Heaven / Storm)',
					multiplier: 1.6,
					distance: 'Mid 1',
				},
				{
					group: 'Light Bowgun (Heaven / Storm)',
					multiplier: 1.6,
					distance: 'Mid 2',
				},
				{
					group: 'Light Bowgun (Heaven / Storm)',
					multiplier: 1,
					distance: 'Far 1',
				},
				{
					group: 'Light Bowgun (Heaven / Storm)',
					multiplier: 0.8,
					distance: 'Far 2',
				},
				{
					group: 'Light Bowgun (Heaven / Storm)',
					multiplier: 0.5,
					distance: 'Far 3',
				},
				{
					group: 'Light Bowgun (Heaven / Storm)',
					multiplier: 0.5,
					distance: 'Far 4',
				},
				{
					group: 'Light Bowgun (Heaven / Storm)',
					multiplier: 0.5,
					distance: 'Far 5',
				},
				{
					group: 'Light Bowgun (Storm Step Shot)',
					multiplier: 2,
					distance: 'Close',
				},
				{
					group: 'Light Bowgun (Storm Step Shot)',
					multiplier: 2,
					distance: 'Mid 1',
				},
				{
					group: 'Light Bowgun (Storm Step Shot)',
					multiplier: 2,
					distance: 'Mid 2',
				},
				{
					group: 'Light Bowgun (Storm Step Shot)',
					multiplier: 1.5,
					distance: 'Far 1',
				},
				{
					group: 'Light Bowgun (Storm Step Shot)',
					multiplier: 0,
					distance: 'Far 2',
				},
				{
					group: 'Light Bowgun (Storm Step Shot)',
					multiplier: 0,
					distance: 'Far 3',
				},
				{
					group: 'Light Bowgun (Storm Step Shot)',
					multiplier: 0,
					distance: 'Far 4',
				},
				{
					group: 'Light Bowgun (Storm Step Shot)',
					multiplier: 0,
					distance: 'Far 5',
				},
				{
					group: 'Heavy Bowgun',
					multiplier: 1,
					distance: 'Close',
				},
				{
					group: 'Heavy Bowgun',
					multiplier: 2,
					distance: 'Mid 1',
				},
				{
					group: 'Heavy Bowgun',
					multiplier: 2,
					distance: 'Mid 2',
				},
				{
					group: 'Heavy Bowgun',
					multiplier: 1.7,
					distance: 'Far 1',
				},
				{
					group: 'Heavy Bowgun',
					multiplier: 1.7,
					distance: 'Far 2',
				},
				{
					group: 'Heavy Bowgun',
					multiplier: 0.8,
					distance: 'Far 3',
				},
				{
					group: 'Heavy Bowgun',
					multiplier: 0.5,
					distance: 'Far 4',
				},
				{
					group: 'Heavy Bowgun',
					multiplier: 0.5,
					distance: 'Far 5',
				},
			],
		},
		{
			type: 'Pellet / Spread Shot',
			data: [
				{
					group: 'Light Bowgun (Earth)',
					multiplier: 1,
					distance: 'Close',
				},
				{
					group: 'Light Bowgun (Earth)',
					multiplier: 1,
					distance: 'Mid 1',
				},
				{
					group: 'Light Bowgun (Earth)',
					multiplier: 1,
					distance: 'Mid 2',
				},
				{
					group: 'Light Bowgun (Earth)',
					multiplier: 0,
					distance: 'Far 1',
				},
				{
					group: 'Light Bowgun (Earth)',
					multiplier: 0,
					distance: 'Far 2',
				},
				{
					group: 'Light Bowgun (Earth)',
					multiplier: 0,
					distance: 'Far 3',
				},
				{
					group: 'Light Bowgun (Earth)',
					multiplier: 0,
					distance: 'Far 4',
				},
				{
					group: 'Light Bowgun (Earth)',
					multiplier: 0,
					distance: 'Far 5',
				},
				{
					group: 'Light Bowgun (Heaven / Storm)',
					multiplier: 1,
					distance: 'Close',
				},
				{
					group: 'Light Bowgun (Heaven / Storm)',
					multiplier: 1,
					distance: 'Mid 1',
				},
				{
					group: 'Light Bowgun (Heaven / Storm)',
					multiplier: 1,
					distance: 'Mid 2',
				},
				{
					group: 'Light Bowgun (Heaven / Storm)',
					multiplier: 0,
					distance: 'Far 1',
				},
				{
					group: 'Light Bowgun (Heaven / Storm)',
					multiplier: 0,
					distance: 'Far 2',
				},
				{
					group: 'Light Bowgun (Heaven / Storm)',
					multiplier: 0,
					distance: 'Far 3',
				},
				{
					group: 'Light Bowgun (Heaven / Storm)',
					multiplier: 0,
					distance: 'Far 4',
				},
				{
					group: 'Light Bowgun (Heaven / Storm)',
					multiplier: 0,
					distance: 'Far 5',
				},
				{
					group: 'Light Bowgun (Storm Step Shot)',
					multiplier: 1,
					distance: 'Close',
				},
				{
					group: 'Light Bowgun (Storm Step Shot)',
					multiplier: 0,
					distance: 'Mid 1',
				},
				{
					group: 'Light Bowgun (Storm Step Shot)',
					multiplier: 0,
					distance: 'Mid 2',
				},
				{
					group: 'Light Bowgun (Storm Step Shot)',
					multiplier: 0,
					distance: 'Far 1',
				},
				{
					group: 'Light Bowgun (Storm Step Shot)',
					multiplier: 0,
					distance: 'Far 2',
				},
				{
					group: 'Light Bowgun (Storm Step Shot)',
					multiplier: 0,
					distance: 'Far 3',
				},
				{
					group: 'Light Bowgun (Storm Step Shot)',
					multiplier: 0,
					distance: 'Far 4',
				},
				{
					group: 'Light Bowgun (Storm Step Shot)',
					multiplier: 0,
					distance: 'Far 5',
				},
				{
					group: 'Heavy Bowgun',
					multiplier: 1,
					distance: 'Close',
				},
				{
					group: 'Heavy Bowgun',
					multiplier: 1,
					distance: 'Mid 1',
				},
				{
					group: 'Heavy Bowgun',
					multiplier: 1,
					distance: 'Mid 2',
				},
				{
					group: 'Heavy Bowgun',
					multiplier: 0,
					distance: 'Far 1',
				},
				{
					group: 'Heavy Bowgun',
					multiplier: 0,
					distance: 'Far 2',
				},
				{
					group: 'Heavy Bowgun',
					multiplier: 0,
					distance: 'Far 3',
				},
				{
					group: 'Heavy Bowgun',
					multiplier: 0,
					distance: 'Far 4',
				},
				{
					group: 'Heavy Bowgun',
					multiplier: 0,
					distance: 'Far 5',
				},
			],
		},
	];

	function getCriticalDistanceChartData(
		type: string,
	): { group: string; multiplier: number; distance: string }[] {
		return (
			criticalDistanceChartAmmoTypesData.find((e) => e.type === type)?.data ?? [
				{
					group: 'None',
					multiplier: 0,
					distance: 'Close',
				},
			]
		);
	}

	let criticalDistanceAmmoTypeForChart = $state('Normal / Rapid Shot');
	let criticalDistanceChartDropdownOptions = [
		{
			id: 'Normal / Rapid Shot',
			text: 'Normal / Rapid Shot',
		},
		{
			id: 'Pierce Shot',
			text: 'Pierce Shot',
		},
		{
			id: 'Pellet / Spread Shot',
			text: 'Pellet / Spread Shot',
		},
	];

	let criticalDistanceBowChartLoaded = $state(false);

	let criticalDistanceChartData = $derived(
		getCriticalDistanceChartData(criticalDistanceAmmoTypeForChart),
	);

	let criticalDistanceChartOptions = $derived({
		title: `Critical Distance (${criticalDistanceAmmoTypeForChart})`,
		theme: $carbonThemeStore,
		legend: { enabled: true, truncation: { numCharacter: 24 } },
		axes: {
			bottom: {
				title: 'Distance',
				mapsTo: 'distance',
				scaleType: ScaleTypes.LABELS,
			},
			left: {
				title: 'Multiplier',
				mapsTo: 'multiplier',
				scaleType: ScaleTypes.LINEAR,
			},
		},
	} as LineChartOptions);

	let criticalDistanceBowChartOptions = $derived({
		title: 'Critical Distance (Bow)',
		theme: $carbonThemeStore,
		legend: { enabled: true, truncation: { numCharacter: 24 } },
		axes: {
			bottom: {
				title: 'Distance',
				mapsTo: 'distance',
				scaleType: ScaleTypes.LABELS,
			},
			left: {
				title: 'Multiplier',
				mapsTo: 'multiplier',
				scaleType: ScaleTypes.LINEAR,
			},
		},
	} as LineChartOptions);

	onMount(async () => {
		const charts = await import('@carbon/charts-svelte');
		criticalDistanceChart = charts.LineChart;
		criticalDistanceChartLoaded = true;
		criticalDistanceBowChart = charts.LineChart;
		criticalDistanceBowChartLoaded = true;
	});
</script>

<TableOfContentsPage displayTOC={true}>
	<div>
		<SectionHeadingTopLevel title={'Critical Distance'} />
		<div>
			<div>
				<section>
					<SectionHeading level={2} title="Bowguns" />
					<div>
						<p class="spaced-paragraph">
							<strong>Critical Distance</strong> is indicated by the shot expanding
							fully and creating a circle indicator.
						</p>
						<div class="spaced-paragraph">
							<InlineTooltip
								text="Heavy Bowgun"
								icon={getWeaponIcon('Heavy Bowgun')}
								tooltip="Weapon Type"
							/> has a much larger impact animation while in the first half of
							<strong>Critical Distance</strong> on standard shots making it easier
							to see when you are properly spaced. This adds an extra 0.3x multiplier
							to damage in that zone (e.g. 2.0 in first half of Normal Shot range,
							2.3x with an Origin or Zenith Piece and G Rank Weapon, etc.).
						</div>
						<div class="dropdown">
							<Dropdown
								titleText="Ammo Type"
								bind:selectedId={criticalDistanceAmmoTypeForChart}
								items={criticalDistanceChartDropdownOptions}
							/>
						</div>
						<div class="chart">
							{#if criticalDistanceChartLoaded}
								{@const SvelteComponent = criticalDistanceChart}
								<SvelteComponent
									data={criticalDistanceChartData}
									options={criticalDistanceChartOptions}
								/>
							{:else}
								<Loading withOverlay={false} />
							{/if}
						</div>
					</div>
				</section>
				<section>
					<SectionHeading level={2} title="Bow" />
					<div>
						<div class="spaced-paragraph">
							Holding down the aim button/key will show a rough indication of
							<strong>Critical Distance</strong> and hits within
							<strong>Critical Distance</strong> will do a large flash while those
							outside of it will do a small flash.
						</div>
						<div>
							<DataTable
								sortable
								useStaticWidth
								zebra
								size="medium"
								headers={[
									{ key: 'shot', value: 'Shot Type', minWidth: '1rem' },
									{ key: 'backhops', value: 'Backhops', minWidth: '1rem' },
									{ key: 'rolls', value: 'Rolls', minWidth: '1rem' },
								]}
								rows={[
									{
										id: '1',
										shot: 'Pierce',
										backhops: '4-7.5',
										rolls: '2-3.75',
									},
									{
										id: '2',
										shot: 'Rapid',
										backhops: '2-4.5',
										rolls: '1-2.25',
									},
									{
										id: '3',
										shot: 'Scatter',
										backhops: '0.5-3',
										rolls: '0.25-1.5',
									},
									{
										id: '4',
										shot: 'Rising',
										backhops: '6',
										rolls: '3',
									},
								]}
								><Toolbar
									><div class="toolbar">
										<CopyButton
											iconDescription={'Copy as CSV'}
											text={getCSVFromArray([
												{
													id: '1',
													shot: 'Pierce',
													backhops: '4-7.5',
													rolls: '2-3.75',
												},
												{
													id: '2',
													shot: 'Rapid',
													backhops: '2-4.5',
													rolls: '1-2.25',
												},
												{
													id: '3',
													shot: 'Scatter',
													backhops: '0.5-3',
													rolls: '0.25-1.5',
												},
												{
													id: '4',
													shot: 'Rising',
													backhops: '6',
													rolls: '3',
												},
											])}
										/>
									</div>
								</Toolbar>
								{#snippet cell({ cell })}
									<p>{cell.value}</p>
								{/snippet}
							</DataTable>
						</div>
						<div class="chart">
							<div>
								{#if criticalDistanceBowChartLoaded}
									{@const SvelteComponent_1 = criticalDistanceBowChart}
									<SvelteComponent_1
										data={[
											{ group: 'Rapid', multiplier: 1, distance: 'Close' },
											{ group: 'Rapid', multiplier: 1.5, distance: 'Mid 1' },
											{ group: 'Rapid', multiplier: 1.5, distance: 'Mid 2' },
											{ group: 'Rapid', multiplier: 1, distance: 'Far 1' },
											{ group: 'Rapid', multiplier: 0.8, distance: 'Far 2' },
											{ group: 'Rapid', multiplier: 0.8, distance: 'Far 3' },
											{ group: 'Rapid', multiplier: 0.5, distance: 'Far 4' },
											{ group: 'Rapid', multiplier: 0, distance: 'Far 5' },
											{ group: 'Pierce', multiplier: 1, distance: 'Close' },
											{ group: 'Pierce', multiplier: 1.5, distance: 'Mid 1' },
											{ group: 'Pierce', multiplier: 1.5, distance: 'Mid 2' },
											{ group: 'Pierce', multiplier: 1.5, distance: 'Far 1' },
											{ group: 'Pierce', multiplier: 1, distance: 'Far 2' },
											{ group: 'Pierce', multiplier: 0.8, distance: 'Far 3' },
											{ group: 'Pierce', multiplier: 0.5, distance: 'Far 4' },
											{ group: 'Pierce', multiplier: 0, distance: 'Far 5' },
											{ group: 'Spread', multiplier: 1, distance: 'Close' },
											{ group: 'Spread', multiplier: 1.5, distance: 'Mid 1' },
											{ group: 'Spread', multiplier: 1, distance: 'Mid 2' },
											{ group: 'Spread', multiplier: 0.8, distance: 'Far 1' },
											{ group: 'Spread', multiplier: 0.8, distance: 'Far 2' },
											{ group: 'Spread', multiplier: 0.5, distance: 'Far 3' },
											{ group: 'Spread', multiplier: 0, distance: 'Far 4' },
											{ group: 'Spread', multiplier: 0, distance: 'Far 5' },
											{ group: 'Spread', multiplier: 1, distance: 'Close' },
											{
												group: 'Aura Shot',
												multiplier: 1.5,
												distance: 'Mid 1',
											},
											{
												group: 'Aura Shot',
												multiplier: 1.5,
												distance: 'Mid 2',
											},
											{
												group: 'Aura Shot',
												multiplier: 1.5,
												distance: 'Far 1',
											},
											{
												group: 'Aura Shot',
												multiplier: 1.5,
												distance: 'Far 2',
											},
											{
												group: 'Aura Shot',
												multiplier: 1.5,
												distance: 'Far 3',
											},
											{ group: 'Aura Shot', multiplier: 1, distance: 'Far 4' },
											{
												group: 'Aura Shot',
												multiplier: 0.8,
												distance: 'Far 5',
											},
											{
												group: 'Piercing Aura',
												multiplier: 1.5,
												distance: 'Close',
											},
											{
												group: 'Piercing Aura',
												multiplier: 1.5,
												distance: 'Mid 1',
											},
											{
												group: 'Piercing Aura',
												multiplier: 1.5,
												distance: 'Mid 2',
											},
											{
												group: 'Piercing Aura',
												multiplier: 1.5,
												distance: 'Far 1',
											},
											{
												group: 'Piercing Aura',
												multiplier: 1.5,
												distance: 'Far 2',
											},
											{
												group: 'Piercing Aura',
												multiplier: 1.5,
												distance: 'Far 3',
											},
											{
												group: 'Piercing Aura',
												multiplier: 0.8,
												distance: 'Far 4',
											},
											{
												group: 'Piercing Aura',
												multiplier: 0.5,
												distance: 'Far 5',
											},
										]}
										options={criticalDistanceBowChartOptions}
									/>
								{:else}
									<Loading withOverlay={false} />
								{/if}
							</div>
						</div>
					</div>

					<div class="page-turn">
						<PageTurn pageUrlPathName={$page.url.pathname} />
					</div>
				</section>
			</div>
		</div>
	</div></TableOfContentsPage
>

<style lang="scss">
	.page-turn {
		margin-top: 4rem;
	}

	.toolbar {
		padding: 1rem;
		display: flex;
		align-items: center;
		gap: 1rem;
		flex-grow: 1;
		flex-shrink: 1;
	}

	.chart {
		min-width: 50%;
		aspect-ratio: 2/1;
		margin: auto;
		margin-top: 2rem;
		margin-bottom: 2rem;
	}

	.dropdown {
		display: flex;
	}
</style>
