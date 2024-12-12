<script lang="ts">
	import { type Component, onMount } from 'svelte';
	import { type SpeedrunInfo } from '../modules/frontier/quest';
	import '@carbon/charts-svelte/styles.css';
	import {
		type BarChartStacked,
		type StackedBarChartOptions,
	} from '@carbon/charts-svelte';
	import type { CarbonTheme } from 'carbon-components-svelte/src/Theme/Theme.svelte';
	import type { FrontierWeaponStyle, FrontierWeaponName } from 'ezlion';
	import { ezlionWeaponStyle, ezlionWeaponType } from 'ezlion';
	import Loading from 'carbon-components-svelte/src/Loading/Loading.svelte';
	import { weaponTypeDefaultOrderById } from '../modules/frontier/weapons';

	function getWeaponUsage(hunts: SpeedrunInfo[]): {
		group: FrontierWeaponStyle;
		weapon: FrontierWeaponName;
		count: number;
	}[] {
		// Predefined weapon styles and types
		const weaponStyles: FrontierWeaponStyle[] = [
			'Earth Style',
			'Heaven Style',
			'Storm Style',
			'Extreme Style',
		];

		// Assuming weapon types are numbered 0 to 13
		const weaponTypes = weaponTypeDefaultOrderById;

		// Create a map to track weapon usage counts, initialized with all combinations
		const weaponUsageMap = new Map<string, number>();

		// Initialize all combinations with 0 count
		for (const style of weaponStyles) {
			for (const typeId of weaponTypes) {
				const key = `${style}_${typeId}`;
				weaponUsageMap.set(key, 0);
			}
		}

		// Iterate through each hunt
		for (const hunt of hunts) {
			// Create a unique key combining WeaponStyleID and WeaponTypeID
			const key = `${ezlionWeaponStyle[hunt.StyleID]}_${hunt.WeaponTypeID}`;

			// Increment the count for this weapon combination
			weaponUsageMap.set(key, (weaponUsageMap.get(key) || 0) + 1);
		}

		// Transform the map into the required output format
		return Array.from(weaponUsageMap.entries()).map(([key, count]) => {
			const [group, typeId] = key.split('_');
			return {
				group: group as FrontierWeaponStyle,
				weapon: ezlionWeaponType[Number(typeId)] as FrontierWeaponName,
				count,
			};
		});
	}

	interface Props {
		theme: CarbonTheme;
		hunts: SpeedrunInfo[];
	}

	let { theme = $bindable(), hunts }: Props = $props();

	let chartOptions = $derived({
		title: 'Weapon Usage',
		toolbar: {
			enabled: true,
		},
		legend: {
			enabled: false,
		},
		axes: {
			left: {
				mapsTo: 'count',
				stacked: true,
			},
			bottom: {
				mapsTo: 'weapon',
				scaleType: 'labels',
			},
		},
		theme: theme,
		height: '400px',
	} as StackedBarChartOptions);

	let chartData: {
		group: FrontierWeaponStyle;
		weapon: FrontierWeaponName;
		count: number;
	}[] = $derived(getWeaponUsage(hunts));
	let chart: Component<BarChartStacked> = $state();
	let chartLoaded = $state(false);

	onMount(async () => {
		const charts = await import('@carbon/charts-svelte');
		chart = charts.BarChartStacked;
		chartLoaded = true;
	});
</script>

<div>
	<div class="chart">
		{#if chartLoaded}
			{@const SvelteComponent = chart}
			<SvelteComponent data={chartData} options={chartOptions} />
		{:else}
			<Loading withOverlay={false} />
		{/if}
	</div>
</div>

<style lang="scss">
	.chart {
		margin-bottom: 1rem;
	}
</style>
