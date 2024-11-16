<script lang="ts">
	import { themeQuartz, type Theme } from '@ag-grid-community/theming';
	import { onMount } from 'svelte';

	// Define your column definitions and row data
	interface Props {
		gridOptions?: {
		columnDefs: { field: string }[];
		rowData: {}[];
		theme: Theme;
		loadThemeGoogleFonts: boolean;
		defaultColDef: { flex: number; minWidth: number; editable: boolean };
	};
	}

	let { gridOptions = {
		columnDefs: [
			{ field: 'make' },
			{ field: 'model' },
			{ field: 'price' },
			{ field: 'electric' },
		],
		rowData: [
			{ make: 'Tesla', model: 'Model Y', price: 64950, electric: true },
			{ make: 'Ford', model: 'F-Series', price: 33850, electric: false },
			{ make: 'Toyota', model: 'Corolla', price: 29600, electric: false },
		],
		defaultColDef: {
			flex: 1,
			minWidth: 64,
			editable: false,
		},
		theme: themeQuartz,
		loadThemeGoogleFonts: true,
	} }: Props = $props();

	let gridDiv: HTMLDivElement = $state();

	// Function to load AG Grid script dynamically
	async function loadAgGridScript() {
		if (window.agGrid) {
			return; // Script already loaded
		}

		return new Promise((resolve, reject) => {
			const script = document.createElement('script');
			script.src =
				'https://cdn.jsdelivr.net/npm/ag-grid-community/dist/ag-grid-community.min.js';
			script.onload = () => resolve(true);
			script.onerror = () => reject(new Error('Failed to load AG Grid script'));
			document.head.appendChild(script);
		});
	}

	// Initialize AG Grid when the component is mounted
	onMount(async () => {
		try {
			await loadAgGridScript(); // Ensure AG Grid script is loaded
			const agGrid = window.agGrid;
			agGrid.createGrid(gridDiv, gridOptions);
		} catch (error) {
			console.error('Error loading AG Grid:', error);
		}
	});
</script>

<div style="height: 512px; width: 100%;" bind:this={gridDiv}></div>
