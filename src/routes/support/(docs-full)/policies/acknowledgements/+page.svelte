<script lang="ts">
	import PageTurn from '$lib/client/components/PageTurn.svelte';
	import SectionHeadingTopLevel from '$lib/client/components/SectionHeadingTopLevel.svelte';
	import TableOfContentsPage from '$lib/client/components/TableOfContentsPage.svelte';
	import { page } from '$app/stores';
	import type { CarbonTheme } from 'carbon-components-svelte/src/Theme/Theme.svelte';
	import { getContext } from 'svelte';
	import type { Writable } from 'svelte/store';
	import { getHexStringFromCatppuccinColor } from '$lib/catppuccin';
	import InlineNotification from 'carbon-components-svelte/src/Notification/InlineNotification.svelte';
	import { licenseInformation } from '$lib/client/modules/license-report'; // license-report
	import { AgGrid } from 'ag-grid-svelte5-extended';
	import { ClientSideRowModelModule } from '@ag-grid-community/client-side-row-model';
	import { themeQuartz } from '@ag-grid-community/theming';
	import { type GridOptions } from '@ag-grid-community/core';

	const carbonThemeStore = getContext(
		Symbol.for('carbonTheme'),
	) as Writable<CarbonTheme>;

	interface LicenseData {
		id: number;
		name: string;
		licenseType: string;
		link: string;
		remoteVersion: string;
		installedVersion: string;
		definedVersion: string;
		latestRemoteVersion: string;
		latestRemoteModified: string;
	}

	// Get AG Grid theme based on carbon theme
	// TODO change on theme update
	function getAgGridTheme(theme: CarbonTheme) {
		return themeQuartz.withParams({
			accentColor: getHexStringFromCatppuccinColor('blue', theme),
			backgroundColor: getHexStringFromCatppuccinColor('base', theme),
			borderColor: getHexStringFromCatppuccinColor('surface1', theme),
			browserColorScheme: theme === 'g10' ? 'light' : 'dark',
			chromeBackgroundColor: {
				ref: 'foregroundColor',
				mix: 0.07,
				onto: 'backgroundColor',
			},
			columnBorder: false,
			fontSize: '14px',
			foregroundColor: getHexStringFromCatppuccinColor('text', theme),
			headerBackgroundColor: getHexStringFromCatppuccinColor('surface0', theme),
			headerFontSize: 14,
			oddRowBackgroundColor: getHexStringFromCatppuccinColor('mantle', theme),
			rowBorder: true,
			sidePanelBorder: true,
			wrapperBorder: true,
		});
	}

	let rowData = $state<LicenseData[]>(
		licenseInformation.map((e, i) => {
			return {
				id: i,
				name: e.name,
				licenseType: e.licenseType,
				link: e.link,
				remoteVersion: e.remoteVersion,
				installedVersion: e.installedVersion,
				definedVersion: e.definedVersion,
				latestRemoteVersion: e.latestRemoteVersion,
				latestRemoteModified: e.latestRemoteModified,
			};
		}),
	);

	// Grid Options: Contains all of the Data Grid configurations
	let gridOptions: GridOptions = $state({
		columnDefs: [
			{ field: 'name' },
			{ field: 'licenseType' },
			{ field: 'link' },
			{ field: 'remoteVersion' },
			{ field: 'installedVersion' },
			{ field: 'definedVersion' },
			{ field: 'latestRemoteVersion' },
			{ field: 'latestRemoteModified' },
		],
		// Important for reducing dom updates and improving performance
		getRowId: (params) => params.data.id.toString(),
		domLayout: 'autoHeight',
		theme: getAgGridTheme($carbonThemeStore),
		defaultColDef: {
			flex: 1,
			minWidth: 100,
			editable: false,
			filter: true,
		},
		pagination: true,
		loadThemeGoogleFonts: true,
	});

	const modules = [ClientSideRowModelModule];
</script>

<TableOfContentsPage displayTOC={false}>
	<div>
		<SectionHeadingTopLevel title={'Acknowledgements'} />
		<InlineNotification
			title="Attributions"
			subtitle="If you are looking for an attribution list, please also check our repository README. View also our licenses page."
			kind="info"
		/>

		<p class="spaced-paragraph">
			These are the open source libraries we use to make Wycademy:
		</p>

		{#key $carbonThemeStore}
			<div style="max-height: 80vh; overflow-y: auto;">
				<AgGrid {gridOptions} {rowData} {modules} />
			</div>
		{/key}

		<div class="page-turn">
			<PageTurn pageUrlPathName={$page.url.pathname} />
		</div>
	</div>
</TableOfContentsPage>

<style lang="scss">
	.page-turn {
		margin-top: 4rem;
	}
</style>
