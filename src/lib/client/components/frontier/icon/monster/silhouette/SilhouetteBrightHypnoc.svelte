<!-- Created with Inkscape (http://www.inkscape.org/) -->
<script lang="ts">
	import { browser } from '$app/environment';
	import {
		getHitzoneColorsForHitzones,
		getHitzoneValuesForHitzones,
	} from '$lib/client/modules/frontier/hitzones';
	import type {
		FrontierMonsterHitzoneRankBand,
		FrontierMonsterHitzoneType,
		FrontierMonsterPartInfo,
	} from '$lib/client/modules/frontier/types';

	interface Props {
		size?: string;
		selectedHitzoneType: FrontierMonsterHitzoneType;
		selectedRankBand: FrontierMonsterHitzoneRankBand;
		selectedMonsterState: string;
		hitzones: FrontierMonsterPartInfo[];
	}

	let {
		size = '100%',
		selectedHitzoneType,
		selectedRankBand,
		selectedMonsterState,
		hitzones
	}: Props = $props();

	function showTooltip(evt: { pageX: number; pageY: number }, text: string) {
		if (!browser) return;
		let tooltip = document.getElementById('tooltip');

		if (tooltip) {
			tooltip.innerHTML = text;
			tooltip.style.display = 'block';
			tooltip.style.left = evt.pageX + 20 + 'px';
			tooltip.style.top = evt.pageY + 20 + 'px';
		}
	}

	function hideTooltip() {
		if (!browser) return;

		var tooltip = document.getElementById('tooltip');

		if (tooltip) {
			tooltip.style.display = 'none';
		}
	}

	let hitzoneColors = $derived(getHitzoneColorsForHitzones(
		hitzones,
		selectedHitzoneType,
		selectedMonsterState,
		selectedRankBand,
	));

	let hitzoneValues = $derived(getHitzoneValuesForHitzones(
		hitzones,
		selectedHitzoneType,
		selectedMonsterState,
		selectedRankBand,
	));
</script>

<div id="tooltip" style="position: absolute; display: none;"></div>

<div class="container">
	<svg
		width={size}
		viewBox="0 0 128 128"
		version="1.1"
		id="svg5"
		xml:space="preserve"
		xmlns="http://www.w3.org/2000/svg"
		><defs id="defs2"
			><filter
				style="color-interpolation-filters:sRGB;"
				id="filter2"
				x="0"
				y="0"
				width="1"
				height="1"
				><feComposite
					in2="SourceGraphic"
					operator="arithmetic"
					k1="0"
					k2="1"
					result="composite1"
					id="feComposite1"
				/><feColorMatrix
					in="composite1"
					values="1"
					type="saturate"
					result="colormatrix1"
					id="feColorMatrix1"
				/><feFlood
					flood-opacity="1"
					flood-color="rgb(0,0,0)"
					result="flood1"
					id="feFlood1"
				/><feBlend
					in="flood1"
					in2="colormatrix1"
					mode="multiply"
					result="blend1"
					id="feBlend1"
				/><feBlend
					in2="blend1"
					mode="screen"
					result="blend2"
					id="feBlend2"
				/><feColorMatrix
					in="blend2"
					values="1"
					type="saturate"
					result="colormatrix2"
					id="feColorMatrix2"
				/><feComposite
					in="colormatrix2"
					in2="SourceGraphic"
					operator="in"
					k2="1"
					result="composite2"
					id="feComposite2"
				/></filter
			><filter
				style="color-interpolation-filters:sRGB;"
				id="filter18"
				x="0"
				y="0"
				width="1"
				height="1"
				><feComposite
					in2="SourceGraphic"
					operator="arithmetic"
					k1="0"
					k2="1"
					result="composite1"
					id="feComposite17"
				/><feColorMatrix
					in="composite1"
					values="1"
					type="saturate"
					result="colormatrix1"
					id="feColorMatrix17"
				/><feFlood
					flood-opacity="1"
					flood-color="rgb(0,0,0)"
					result="flood1"
					id="feFlood17"
				/><feBlend
					in="flood1"
					in2="colormatrix1"
					mode="multiply"
					result="blend1"
					id="feBlend17"
				/><feBlend
					in2="blend1"
					mode="screen"
					result="blend2"
					id="feBlend18"
				/><feColorMatrix
					in="blend2"
					values="1"
					type="saturate"
					result="colormatrix2"
					id="feColorMatrix18"
				/><feComposite
					in="colormatrix2"
					in2="SourceGraphic"
					operator="in"
					k2="1"
					result="composite2"
					id="feComposite18"
				/></filter
			><filter
				style="color-interpolation-filters:sRGB;"
				id="filter37"
				x="0"
				y="0"
				width="1"
				height="1"
				><feComposite
					in2="SourceGraphic"
					operator="arithmetic"
					k1="0"
					k2="1"
					result="composite1"
					id="feComposite36"
				/><feColorMatrix
					in="composite1"
					values="1"
					type="saturate"
					result="colormatrix1"
					id="feColorMatrix36"
				/><feFlood
					flood-opacity="1"
					flood-color="rgb(0,0,0)"
					result="flood1"
					id="feFlood36"
				/><feBlend
					in="flood1"
					in2="colormatrix1"
					mode="multiply"
					result="blend1"
					id="feBlend36"
				/><feBlend
					in2="blend1"
					mode="screen"
					result="blend2"
					id="feBlend37"
				/><feColorMatrix
					in="blend2"
					values="1"
					type="saturate"
					result="colormatrix2"
					id="feColorMatrix37"
				/><feComposite
					in="colormatrix2"
					in2="SourceGraphic"
					operator="in"
					k2="1"
					result="composite2"
					id="feComposite37"
				/></filter
			><filter
				style="color-interpolation-filters:sRGB;"
				id="filter51"
				x="0"
				y="0"
				width="1"
				height="1"
				><feComposite
					in2="SourceGraphic"
					operator="arithmetic"
					k1="0"
					k2="1"
					result="composite1"
					id="feComposite50"
				/><feColorMatrix
					in="composite1"
					values="1"
					type="saturate"
					result="colormatrix1"
					id="feColorMatrix50"
				/><feFlood
					flood-opacity="1"
					flood-color="rgb(0,0,0)"
					result="flood1"
					id="feFlood50"
				/><feBlend
					in="flood1"
					in2="colormatrix1"
					mode="multiply"
					result="blend1"
					id="feBlend50"
				/><feBlend
					in2="blend1"
					mode="screen"
					result="blend2"
					id="feBlend51"
				/><feColorMatrix
					in="blend2"
					values="1"
					type="saturate"
					result="colormatrix2"
					id="feColorMatrix51"
				/><feComposite
					in="colormatrix2"
					in2="SourceGraphic"
					operator="in"
					k2="1"
					result="composite2"
					id="feComposite51"
				/></filter
			><filter
				style="color-interpolation-filters:sRGB;"
				id="filter53"
				x="0"
				y="0"
				width="1"
				height="1"
				><feComposite
					in2="SourceGraphic"
					operator="arithmetic"
					k1="0"
					k2="1"
					result="composite1"
					id="feComposite52"
				/><feColorMatrix
					in="composite1"
					values="1"
					type="saturate"
					result="colormatrix1"
					id="feColorMatrix52"
				/><feFlood
					flood-opacity="1"
					flood-color="rgb(0,0,0)"
					result="flood1"
					id="feFlood52"
				/><feBlend
					in="flood1"
					in2="colormatrix1"
					mode="multiply"
					result="blend1"
					id="feBlend52"
				/><feBlend
					in2="blend1"
					mode="screen"
					result="blend2"
					id="feBlend53"
				/><feColorMatrix
					in="blend2"
					values="1"
					type="saturate"
					result="colormatrix2"
					id="feColorMatrix53"
				/><feComposite
					in="colormatrix2"
					in2="SourceGraphic"
					operator="in"
					k2="1"
					result="composite2"
					id="feComposite53"
				/></filter
			><filter
				style="color-interpolation-filters:sRGB;"
				id="filter73"
				x="0"
				y="0"
				width="1"
				height="1"
				><feComposite
					in2="SourceGraphic"
					operator="arithmetic"
					k1="0"
					k2="1"
					result="composite1"
					id="feComposite72"
				/><feColorMatrix
					in="composite1"
					values="1"
					type="saturate"
					result="colormatrix1"
					id="feColorMatrix72"
				/><feFlood
					flood-opacity="1"
					flood-color="rgb(0,0,0)"
					result="flood1"
					id="feFlood72"
				/><feBlend
					in="flood1"
					in2="colormatrix1"
					mode="multiply"
					result="blend1"
					id="feBlend72"
				/><feBlend
					in2="blend1"
					mode="screen"
					result="blend2"
					id="feBlend73"
				/><feColorMatrix
					in="blend2"
					values="1"
					type="saturate"
					result="colormatrix2"
					id="feColorMatrix73"
				/><feComposite
					in="colormatrix2"
					in2="SourceGraphic"
					operator="in"
					k2="1"
					result="composite2"
					id="feComposite73"
				/></filter
			><filter
				style="color-interpolation-filters:sRGB;"
				id="filter88"
				x="0"
				y="0"
				width="1"
				height="1"
				><feComposite
					in2="SourceGraphic"
					operator="arithmetic"
					k1="0"
					k2="1"
					result="composite1"
					id="feComposite87"
				/><feColorMatrix
					in="composite1"
					values="1"
					type="saturate"
					result="colormatrix1"
					id="feColorMatrix87"
				/><feFlood
					flood-opacity="1"
					flood-color="rgb(0,0,0)"
					result="flood1"
					id="feFlood87"
				/><feBlend
					in="flood1"
					in2="colormatrix1"
					mode="multiply"
					result="blend1"
					id="feBlend87"
				/><feBlend
					in2="blend1"
					mode="screen"
					result="blend2"
					id="feBlend88"
				/><feColorMatrix
					in="blend2"
					values="1"
					type="saturate"
					result="colormatrix2"
					id="feColorMatrix88"
				/><feComposite
					in="colormatrix2"
					in2="SourceGraphic"
					operator="in"
					k2="1"
					result="composite2"
					id="feComposite88"
				/></filter
			><filter
				style="color-interpolation-filters:sRGB;"
				id="filter108"
				x="0"
				y="0"
				width="1"
				height="1"
				><feComposite
					in2="SourceGraphic"
					operator="arithmetic"
					k1="0"
					k2="1"
					result="composite1"
					id="feComposite107"
				/><feColorMatrix
					in="composite1"
					values="1"
					type="saturate"
					result="colormatrix1"
					id="feColorMatrix107"
				/><feFlood
					flood-opacity="1"
					flood-color="rgb(0,0,0)"
					result="flood1"
					id="feFlood107"
				/><feBlend
					in="flood1"
					in2="colormatrix1"
					mode="multiply"
					result="blend1"
					id="feBlend107"
				/><feBlend
					in2="blend1"
					mode="screen"
					result="blend2"
					id="feBlend108"
				/><feColorMatrix
					in="blend2"
					values="1"
					type="saturate"
					result="colormatrix2"
					id="feColorMatrix108"
				/><feComposite
					in="colormatrix2"
					in2="SourceGraphic"
					operator="in"
					k2="1"
					result="composite2"
					id="feComposite108"
				/></filter
			><filter
				style="color-interpolation-filters:sRGB;"
				id="filter123"
				x="0"
				y="0"
				width="1"
				height="1"
				><feComposite
					in2="SourceGraphic"
					operator="arithmetic"
					k1="0"
					k2="1"
					result="composite1"
					id="feComposite122"
				/><feColorMatrix
					in="composite1"
					values="1"
					type="saturate"
					result="colormatrix1"
					id="feColorMatrix122"
				/><feFlood
					flood-opacity="1"
					flood-color="rgb(0,0,0)"
					result="flood1"
					id="feFlood122"
				/><feBlend
					in="flood1"
					in2="colormatrix1"
					mode="multiply"
					result="blend1"
					id="feBlend122"
				/><feBlend
					in2="blend1"
					mode="screen"
					result="blend2"
					id="feBlend123"
				/><feColorMatrix
					in="blend2"
					values="1"
					type="saturate"
					result="colormatrix2"
					id="feColorMatrix123"
				/><feComposite
					in="colormatrix2"
					in2="SourceGraphic"
					operator="in"
					k2="1"
					result="composite2"
					id="feComposite123"
				/></filter
			><filter
				style="color-interpolation-filters:sRGB;"
				id="filter137"
				x="0"
				y="0"
				width="1"
				height="1"
				><feComposite
					in2="SourceGraphic"
					operator="arithmetic"
					k1="0"
					k2="1"
					result="composite1"
					id="feComposite136"
				/><feColorMatrix
					in="composite1"
					values="1"
					type="saturate"
					result="colormatrix1"
					id="feColorMatrix136"
				/><feFlood
					flood-opacity="1"
					flood-color="rgb(0,0,0)"
					result="flood1"
					id="feFlood136"
				/><feBlend
					in="flood1"
					in2="colormatrix1"
					mode="multiply"
					result="blend1"
					id="feBlend136"
				/><feBlend
					in2="blend1"
					mode="screen"
					result="blend2"
					id="feBlend137"
				/><feColorMatrix
					in="blend2"
					values="1"
					type="saturate"
					result="colormatrix2"
					id="feColorMatrix137"
				/><feComposite
					in="colormatrix2"
					in2="SourceGraphic"
					operator="in"
					k2="1"
					result="composite2"
					id="feComposite137"
				/></filter
			><filter
				style="color-interpolation-filters:sRGB;"
				id="filter160"
				x="0"
				y="0"
				width="1"
				height="1"
				><feComposite
					in2="SourceGraphic"
					operator="arithmetic"
					k1="0"
					k2="1"
					result="composite1"
					id="feComposite159"
				/><feColorMatrix
					in="composite1"
					values="1"
					type="saturate"
					result="colormatrix1"
					id="feColorMatrix159"
				/><feFlood
					flood-opacity="1"
					flood-color="rgb(0,0,0)"
					result="flood1"
					id="feFlood159"
				/><feBlend
					in="flood1"
					in2="colormatrix1"
					mode="multiply"
					result="blend1"
					id="feBlend159"
				/><feBlend
					in2="blend1"
					mode="screen"
					result="blend2"
					id="feBlend160"
				/><feColorMatrix
					in="blend2"
					values="1"
					type="saturate"
					result="colormatrix2"
					id="feColorMatrix160"
				/><feComposite
					in="colormatrix2"
					in2="SourceGraphic"
					operator="in"
					k2="1"
					result="composite2"
					id="feComposite160"
				/></filter
			><filter
				style="color-interpolation-filters:sRGB;"
				id="filter177"
				x="0"
				y="0"
				width="1"
				height="1"
				><feComposite
					in2="SourceGraphic"
					operator="arithmetic"
					k1="0"
					k2="1"
					result="composite1"
					id="feComposite176"
				/><feColorMatrix
					in="composite1"
					values="1"
					type="saturate"
					result="colormatrix1"
					id="feColorMatrix176"
				/><feFlood
					flood-opacity="1"
					flood-color="rgb(0,0,0)"
					result="flood1"
					id="feFlood176"
				/><feBlend
					in="flood1"
					in2="colormatrix1"
					mode="multiply"
					result="blend1"
					id="feBlend176"
				/><feBlend
					in2="blend1"
					mode="screen"
					result="blend2"
					id="feBlend177"
				/><feColorMatrix
					in="blend2"
					values="1"
					type="saturate"
					result="colormatrix2"
					id="feColorMatrix177"
				/><feComposite
					in="colormatrix2"
					in2="SourceGraphic"
					operator="in"
					k2="1"
					result="composite2"
					id="feComposite177"
				/></filter
			><filter
				style="color-interpolation-filters:sRGB;"
				id="filter198"
				x="0"
				y="0"
				width="1"
				height="1"
				><feComposite
					in2="SourceGraphic"
					operator="arithmetic"
					k1="0"
					k2="1"
					result="composite1"
					id="feComposite197"
				/><feColorMatrix
					in="composite1"
					values="1"
					type="saturate"
					result="colormatrix1"
					id="feColorMatrix197"
				/><feFlood
					flood-opacity="1"
					flood-color="rgb(0,0,0)"
					result="flood1"
					id="feFlood197"
				/><feBlend
					in="flood1"
					in2="colormatrix1"
					mode="multiply"
					result="blend1"
					id="feBlend197"
				/><feBlend
					in2="blend1"
					mode="screen"
					result="blend2"
					id="feBlend198"
				/><feColorMatrix
					in="blend2"
					values="1"
					type="saturate"
					result="colormatrix2"
					id="feColorMatrix198"
				/><feComposite
					in="colormatrix2"
					in2="SourceGraphic"
					operator="in"
					k2="1"
					result="composite2"
					id="feComposite198"
				/></filter
			><filter
				style="color-interpolation-filters:sRGB;"
				id="filter212"
				x="0"
				y="0"
				width="1"
				height="1"
				><feComposite
					in2="SourceGraphic"
					operator="arithmetic"
					k1="0"
					k2="1"
					result="composite1"
					id="feComposite211"
				/><feColorMatrix
					in="composite1"
					values="1"
					type="saturate"
					result="colormatrix1"
					id="feColorMatrix211"
				/><feFlood
					flood-opacity="1"
					flood-color="rgb(0,0,0)"
					result="flood1"
					id="feFlood211"
				/><feBlend
					in="flood1"
					in2="colormatrix1"
					mode="multiply"
					result="blend1"
					id="feBlend211"
				/><feBlend
					in2="blend1"
					mode="screen"
					result="blend2"
					id="feBlend212"
				/><feColorMatrix
					in="blend2"
					values="1"
					type="saturate"
					result="colormatrix2"
					id="feColorMatrix212"
				/><feComposite
					in="colormatrix2"
					in2="SourceGraphic"
					operator="in"
					k2="1"
					result="composite2"
					id="feComposite212"
				/></filter
			><filter
				style="color-interpolation-filters:sRGB;"
				id="filter225"
				x="0"
				y="0"
				width="1"
				height="1"
				><feComposite
					in2="SourceGraphic"
					operator="arithmetic"
					k1="0"
					k2="1"
					result="composite1"
					id="feComposite224"
				/><feColorMatrix
					in="composite1"
					values="1"
					type="saturate"
					result="colormatrix1"
					id="feColorMatrix224"
				/><feFlood
					flood-opacity="1"
					flood-color="rgb(0,0,0)"
					result="flood1"
					id="feFlood224"
				/><feBlend
					in="flood1"
					in2="colormatrix1"
					mode="multiply"
					result="blend1"
					id="feBlend224"
				/><feBlend
					in2="blend1"
					mode="screen"
					result="blend2"
					id="feBlend225"
				/><feColorMatrix
					in="blend2"
					values="1"
					type="saturate"
					result="colormatrix2"
					id="feColorMatrix225"
				/><feComposite
					in="colormatrix2"
					in2="SourceGraphic"
					operator="in"
					k2="1"
					result="composite2"
					id="feComposite225"
				/></filter
			><filter
				style="color-interpolation-filters:sRGB;"
				id="filter244"
				x="0"
				y="0"
				width="1"
				height="1"
				><feComposite
					in2="SourceGraphic"
					operator="arithmetic"
					k1="0"
					k2="1"
					result="composite1"
					id="feComposite243"
				/><feColorMatrix
					in="composite1"
					values="1"
					type="saturate"
					result="colormatrix1"
					id="feColorMatrix243"
				/><feFlood
					flood-opacity="1"
					flood-color="rgb(0,0,0)"
					result="flood1"
					id="feFlood243"
				/><feBlend
					in="flood1"
					in2="colormatrix1"
					mode="multiply"
					result="blend1"
					id="feBlend243"
				/><feBlend
					in2="blend1"
					mode="screen"
					result="blend2"
					id="feBlend244"
				/><feColorMatrix
					in="blend2"
					values="1"
					type="saturate"
					result="colormatrix2"
					id="feColorMatrix244"
				/><feComposite
					in="colormatrix2"
					in2="SourceGraphic"
					operator="in"
					k2="1"
					result="composite2"
					id="feComposite244"
				/></filter
			><filter
				style="color-interpolation-filters:sRGB;"
				id="filter260"
				x="0"
				y="0"
				width="1"
				height="1"
				><feComposite
					in2="SourceGraphic"
					operator="arithmetic"
					k1="0"
					k2="1"
					result="composite1"
					id="feComposite259"
				/><feColorMatrix
					in="composite1"
					values="1"
					type="saturate"
					result="colormatrix1"
					id="feColorMatrix259"
				/><feFlood
					flood-opacity="1"
					flood-color="rgb(0,0,0)"
					result="flood1"
					id="feFlood259"
				/><feBlend
					in="flood1"
					in2="colormatrix1"
					mode="multiply"
					result="blend1"
					id="feBlend259"
				/><feBlend
					in2="blend1"
					mode="screen"
					result="blend2"
					id="feBlend260"
				/><feColorMatrix
					in="blend2"
					values="1"
					type="saturate"
					result="colormatrix2"
					id="feColorMatrix260"
				/><feComposite
					in="colormatrix2"
					in2="SourceGraphic"
					operator="in"
					k2="1"
					result="composite2"
					id="feComposite260"
				/></filter
			><filter
				style="color-interpolation-filters:sRGB;"
				id="filter280"
				x="0"
				y="0"
				width="1"
				height="1"
				><feComposite
					in2="SourceGraphic"
					operator="arithmetic"
					k1="0"
					k2="1"
					result="composite1"
					id="feComposite279"
				/><feColorMatrix
					in="composite1"
					values="1"
					type="saturate"
					result="colormatrix1"
					id="feColorMatrix279"
				/><feFlood
					flood-opacity="1"
					flood-color="rgb(0,0,0)"
					result="flood1"
					id="feFlood279"
				/><feBlend
					in="flood1"
					in2="colormatrix1"
					mode="multiply"
					result="blend1"
					id="feBlend279"
				/><feBlend
					in2="blend1"
					mode="screen"
					result="blend2"
					id="feBlend280"
				/><feColorMatrix
					in="blend2"
					values="1"
					type="saturate"
					result="colormatrix2"
					id="feColorMatrix280"
				/><feComposite
					in="colormatrix2"
					in2="SourceGraphic"
					operator="in"
					k2="1"
					result="composite2"
					id="feComposite280"
				/></filter
			><filter
				style="color-interpolation-filters:sRGB;"
				id="filter290"
				x="0"
				y="0"
				width="1"
				height="1"
				><feComposite
					in2="SourceGraphic"
					operator="arithmetic"
					k1="0"
					k2="1"
					result="composite1"
					id="feComposite289"
				/><feColorMatrix
					in="composite1"
					values="1"
					type="saturate"
					result="colormatrix1"
					id="feColorMatrix289"
				/><feFlood
					flood-opacity="1"
					flood-color="rgb(0,0,0)"
					result="flood1"
					id="feFlood289"
				/><feBlend
					in="flood1"
					in2="colormatrix1"
					mode="multiply"
					result="blend1"
					id="feBlend289"
				/><feBlend
					in2="blend1"
					mode="screen"
					result="blend2"
					id="feBlend290"
				/><feColorMatrix
					in="blend2"
					values="1"
					type="saturate"
					result="colormatrix2"
					id="feColorMatrix290"
				/><feComposite
					in="colormatrix2"
					in2="SourceGraphic"
					operator="in"
					k2="1"
					result="composite2"
					id="feComposite290"
				/></filter
			><filter
				style="color-interpolation-filters:sRGB;"
				id="filter305"
				x="0"
				y="0"
				width="1"
				height="1"
				><feComposite
					in2="SourceGraphic"
					operator="arithmetic"
					k1="0"
					k2="1"
					result="composite1"
					id="feComposite304"
				/><feColorMatrix
					in="composite1"
					values="1"
					type="saturate"
					result="colormatrix1"
					id="feColorMatrix304"
				/><feFlood
					flood-opacity="1"
					flood-color="rgb(0,0,0)"
					result="flood1"
					id="feFlood304"
				/><feBlend
					in="flood1"
					in2="colormatrix1"
					mode="multiply"
					result="blend1"
					id="feBlend304"
				/><feBlend
					in2="blend1"
					mode="screen"
					result="blend2"
					id="feBlend305"
				/><feColorMatrix
					in="blend2"
					values="1"
					type="saturate"
					result="colormatrix2"
					id="feColorMatrix305"
				/><feComposite
					in="colormatrix2"
					in2="SourceGraphic"
					operator="in"
					k2="1"
					result="composite2"
					id="feComposite305"
				/></filter
			><filter
				style="color-interpolation-filters:sRGB;"
				id="filter332"
				x="0"
				y="0"
				width="1"
				height="1"
				><feComposite
					in2="SourceGraphic"
					operator="arithmetic"
					k1="0"
					k2="1"
					result="composite1"
					id="feComposite331"
				/><feColorMatrix
					in="composite1"
					values="1"
					type="saturate"
					result="colormatrix1"
					id="feColorMatrix331"
				/><feFlood
					flood-opacity="1"
					flood-color="rgb(0,0,0)"
					result="flood1"
					id="feFlood331"
				/><feBlend
					in="flood1"
					in2="colormatrix1"
					mode="multiply"
					result="blend1"
					id="feBlend331"
				/><feBlend
					in2="blend1"
					mode="screen"
					result="blend2"
					id="feBlend332"
				/><feColorMatrix
					in="blend2"
					values="1"
					type="saturate"
					result="colormatrix2"
					id="feColorMatrix332"
				/><feComposite
					in="colormatrix2"
					in2="SourceGraphic"
					operator="in"
					k2="1"
					result="composite2"
					id="feComposite332"
				/></filter
			></defs
		>
		<!-- svelte-ignore a11y_no_static_element_interactions -->
		<!-- svelte-ignore a11y_mouse_events_have_key_events -->
		<g id="layer1" style="stroke: var(--ctp-mocha-surface1); stroke-width: 1.0;"
			><path
				d="m 57.264722,71.507263 c 1.340905,-0.04288 1.178222,0.11997 1.25522,0.973584 0.08022,0.889258 0.0803,0.889194 3.608049,2.062407 4.319589,1.43655 4.465447,1.670307 4.53719,7.251753 0.04022,3.129431 0.04069,3.129067 1.250053,5.767607 1.603101,3.497579 1.88438,5.339764 0.603581,3.94963 -0.804805,-0.873506 -2.984664,0.05621 -2.883545,1.229899 0.133696,1.551806 -6.523101,2.867097 -8.280631,1.636076 -0.196056,-0.137323 -0.355145,-0.152014 -0.67076,-0.0615 -0.227572,0.06527 -0.863407,0.118339 -1.412834,0.118339 -1.079491,0 -1.144022,-0.04643 -1.148767,-0.828374 -0.0026,-0.432525 -0.158412,-0.317194 -0.506429,0.374655 -0.370416,0.736376 -0.04395,0.681122 -3.606498,0.611332 -1.627444,-0.03188 -1.988335,-0.07221 -2.109949,-0.235128 -0.121759,-0.163115 -0.213779,-0.173152 -0.540019,-0.05943 -1.142729,0.398358 -3.040414,0.161476 -3.079915,-0.384473 -0.05931,-0.819758 -0.633518,-0.811319 -1.67535,0.02481 -1.102851,0.885096 -1.246436,0.851285 -1.246436,-0.295589 0,-1.136999 0.125326,-1.227247 2.976046,-2.144572 2.293758,-0.738101 1.955514,-0.711453 2.52336,-0.198437 0.719475,0.650002 2.616716,0.793552 2.81895,0.213423 0.133832,-0.383912 0.296727,-0.451499 1.303279,-0.543119 0.324627,-0.02955 0.443493,-0.196345 1.349789,-1.888774 0.607381,-1.134232 1.271947,-2.180097 1.708939,-2.689758 2.45021,-2.857665 3.000473,-7.378587 0.997872,-8.20105 -0.644587,-0.26473 -0.602532,-0.284666 -0.753959,0.351917 -0.116771,0.49089 -0.116545,0.49114 -0.435116,-0.122473 -0.271337,-0.522638 -0.772588,-1.028765 -0.889351,-0.898137 -0.01926,0.02155 -0.235588,0.439269 -0.480591,0.928626 -0.245002,0.489357 -0.48611,0.888791 -0.535884,0.887801 -0.183419,-0.0036 -1.16449,-3.414993 -1.101225,-3.829224 0.05817,-0.380874 -0.211498,-1.077454 -0.417029,-1.077454 -0.04731,0 -0.19896,0.151829 -0.337447,0.337448 -0.251794,0.337487 -0.25191,0.337352 -0.255798,-0.0615 -0.0049,-0.506004 -0.07379,-0.500432 -0.640788,0.05323 -0.611225,0.596845 -0.640719,0.532404 -0.484208,-1.063501 0.150434,-1.533946 0.504262,-2.265091 1.04283,-2.15594 0.813235,0.164815 3.018646,0.188278 5.61051,0.05943 0.845604,-0.04204 1.459892,-0.07924 1.906861,-0.09354 z"
				onmousemove={(e) => showTooltip(e, `Legs: ${hitzoneValues['Legs']}`)}
				onmouseout={(e) => hideTooltip()}
				style="fill: {hitzoneColors['Legs']}"
				id="path339"><title id="title344"></title></path
			><path
				d="m 22.724194,62.539335 c -0.107018,-0.01942 -0.367739,0.144012 -0.781864,0.501262 -1.782506,1.537698 -2.017327,1.661931 -1.81591,0.959631 0.167539,-0.58417 0.120477,-0.582689 -0.882117,0.03411 -0.879332,0.540966 -0.927504,0.554599 -2.431376,0.689364 -2.351012,0.210678 -5.617201,1.682649 -6.8373085,3.080949 -2.0235599,2.319093 -6.2086157,4.365197 -7.6667155,3.748608 -0.18343,-0.07757 -0.1993514,-0.01317 -0.1415934,0.566891 0.065162,0.654422 0.06511,0.65463 -0.7870321,1.412833 -0.4686781,0.417012 -0.92677214,0.941606 -1.01750895,1.165821 -0.0907368,0.224215 -0.20840616,0.438223 -0.26199951,0.475423 -0.05359342,0.0372 -0.04286449,0.257548 0.0237712,0.489892 0.0666357,0.232345 0.12092285,0.689439 0.12092285,1.015959 0,0.507797 0.0842994,0.716221 0.58291016,1.439189 0.72954119,1.057809 0.72033029,1.059302 0.82320559,-0.15968 0.135402,-1.604396 0.3393321,-1.703046 4.2607218,-2.066024 3.7847021,-0.350327 3.6319215,-0.418394 2.7951782,1.249019 -0.3356095,0.66878 -0.5600165,1.215947 -0.4986775,1.215947 0.6644782,0 2.6459617,-1.049359 5.1536907,-2.729033 2.755943,-1.845927 2.756178,-1.845784 3.677295,-1.645894 1.078635,0.234073 1.028815,0.253739 0.86558,-0.337447 -0.163698,-0.592865 -0.13238,-0.615766 0.623218,-0.453719 1.031143,0.221139 1.106909,0.199442 1.106909,-0.31626 0,-0.450922 1.65e-4,-0.451152 0.287321,-0.181384 0.325689,0.305968 0.933693,0.509529 1.522388,0.509529 0.479829,0 0.495336,-0.11742 0.09405,-0.707967 -0.39074,-0.575024 -0.413547,-0.565114 1.832963,-0.81442 1.008982,-0.111971 1.850553,-0.219129 1.869653,-0.238229 0.0191,-0.0191 -0.350943,-0.356263 -0.822172,-0.748791 -1.038352,-0.864936 -1.139114,-0.637712 1.167887,-2.637565 0.979731,-0.849294 0.969555,-0.895095 -0.120922,-0.548804 -0.98688,0.31339 -1.282297,0.342991 -2.193665,0.218074 -0.472417,-0.06475 -0.569625,-0.122703 -0.571025,-0.337963 -0.0045,-0.696219 -0.122582,-0.832648 -0.643371,-0.744658 -0.489552,0.08271 -0.489608,0.08263 -0.08682,-0.502812 0.415475,-0.603872 0.279689,-1.036629 -0.325044,-1.036629 -0.272936,0 -0.20282,-0.211125 0.329695,-0.995288 0.677315,-0.997391 0.926123,-1.53756 0.747758,-1.56993 z"
				onmousemove={(e) => showTooltip(e, `Head: ${hitzoneValues['Head']}`)}
				onmouseout={(e) => hideTooltip()}
				style="fill: {hitzoneColors['Head']}"
				id="path338"><title id="title339"></title></path
			><path
				d="m 35.899101,63.317582 c 0.208515,0.03486 0.268581,0.259696 0.40876,0.713135 0.558175,1.805526 1.673562,3.760127 2.78536,4.880839 1.285806,1.296116 1.313147,1.167625 -0.40411,1.899626 -1.317378,0.561547 -5.080247,2.714895 -9.788033,5.601725 -1.866255,1.144394 -6.820185,3.071718 -7.79849,3.033923 -0.233194,-0.009 -1.445705,-0.108207 -2.694409,-0.220141 -2.116689,-0.18974 -6.135804,-1.084001 -6.13606,-1.365292 -5.91e-4,-0.648701 4.205776,-3.065074 5.207434,-2.991548 1.13588,0.08338 1.135578,0.08332 1.4087,-0.30024 0.237962,-0.334187 0.347402,-0.384525 0.84801,-0.389124 1.850321,-0.01699 3.167898,-0.454596 2.981213,-0.99012 -0.17557,-0.503643 -0.334472,-0.43195 1.778186,-0.798918 1.005636,-0.174678 1.849468,-0.337377 1.875338,-0.361735 0.02587,-0.02436 -0.291402,-0.444069 -0.705383,-0.932243 -0.900082,-1.061393 -0.884784,-0.901784 -0.155546,-1.620056 0.541934,-0.533786 0.669252,-0.598087 1.380277,-0.692981 1.901103,-0.253724 3.921664,-1.320227 4.466394,-2.357996 0.62655,-1.193642 1.5872,-1.988331 3.242696,-2.68149 0.733956,-0.307307 1.091147,-0.462222 1.299663,-0.427364 z"
				onmousemove={(e) => showTooltip(e, `Neck: ${hitzoneValues['Neck']}`)}
				onmouseout={(e) => hideTooltip()}
				style="fill: {hitzoneColors['Neck']}"
				id="path337"><title id="title340"></title></path
			><path
				d="m 126.86254,40.901896 c 0.089,0.0645 0.13356,0.360674 0.26613,0.984953 0.15585,0.73383 -0.58325,2.531299 -1.56527,3.807519 -1.30272,1.692993 -1.20318,1.515989 -0.79944,1.427304 0.71862,-0.157852 1.04347,-0.347142 1.23352,-0.71882 0.3604,-0.704788 1.67744,-2.284098 1.90479,-2.284098 1.28909,0 -0.58028,3.764395 -2.34404,4.720125 -0.70784,0.383561 -2.42612,1.547032 -3.81837,2.585889 -2.53138,1.888831 -2.53145,1.889109 -5.89784,3.316593 -1.85151,0.785117 -3.61488,1.5384 -3.91862,1.674317 -1.53431,0.686569 -6.85345,1.290346 -9.94048,1.128096 -4.435832,-0.233142 -4.458867,-0.232566 -4.389911,0.128158 0.10638,0.55649 0.0072,0.57202 -1.998327,0.313676 -1.04261,-0.134303 -1.93737,-0.244354 -1.987993,-0.24443 -0.05062,-7.6e-5 -0.09198,0.220937 -0.09198,0.490926 0,0.490892 3.29e-4,0.490927 -2.329056,0.490927 -2.329385,0 -2.329473,-2.42e-4 -2.254643,0.545703 0.08894,0.648859 0.387075,0.538151 -2.840654,1.058333 -2.174713,0.350479 -3.077444,0.390267 -3.67161,0.162264 -0.599988,-0.230237 -0.191476,1.701151 0.579293,2.738334 0.431326,0.580414 2.605546,5.411019 2.48822,5.528345 -0.02637,0.02637 -0.784811,-0.117258 -1.685169,-0.31936 -1.920414,-0.431074 -1.759168,-0.476686 -1.454174,0.409794 0.135169,0.392878 0.245463,0.733361 0.245463,0.756543 0,0.07354 -0.742819,0.01888 -2.699577,-0.198438 -1.421314,-0.15785 -2.037458,-0.280337 -2.436027,-0.484725 -0.377074,-0.193365 -0.700631,-0.263008 -1.104326,-0.237711 -0.562126,0.03522 -0.571412,0.02955 -0.609265,-0.359668 -0.04498,-0.462489 -0.004,-0.450321 -0.646472,-0.19327 -0.594313,0.237797 -0.622399,0.212206 -0.843359,-0.775147 -0.151261,-0.675904 -0.151098,-0.675732 -0.415995,-0.437699 -0.50945,0.457781 -0.547115,0.440285 -1.000973,-0.460954 -0.436875,-0.867518 -0.436614,-0.867556 -0.842326,-0.558105 -0.804876,0.613909 -1.128243,0.564397 -1.477946,-0.226343 -0.349036,-0.789233 -0.329391,-0.77929 -0.822172,-0.414962 -0.371113,0.274377 -0.371512,0.27435 -0.799434,-0.240812 -0.427923,-0.515162 -0.42764,-0.514852 -0.972551,-0.250114 -0.544909,0.264738 -0.545144,0.264409 -0.883667,-0.04806 -0.186187,-0.171858 -0.883343,-0.499729 -1.549259,-0.729154 -2.405406,-0.828726 -3.994855,-3.18747 -5.084961,-7.54476 -0.02046,-0.08176 0.697328,-0.770913 1.595251,-1.531172 1.632589,-1.382291 1.63253,-1.382049 2.279965,-3.165699 0.356087,-0.981008 0.659931,-1.796295 0.675411,-1.811775 0.102981,-0.102982 6.623124,-1.688974 7.735445,-1.881539 4.727724,-0.818461 12.655851,-0.918519 14.872477,-0.188102 0.472482,0.15569 1.500326,0.481616 2.284098,0.724503 1.224952,0.379606 1.586225,0.556355 2.570386,1.260388 1.317525,0.94251 1.301815,1.087657 -0.05013,0.463021 -1.011935,-0.467542 -2.297333,-0.608637 -7.933366,-0.872815 -1.443303,-0.06765 -6.144608,0.0627 -5.64565,0.15658 0.101247,0.01905 1.53733,0.287302 3.191019,0.595829 1.65369,0.308528 3.586621,0.68576 4.295345,0.838709 1.28859,0.278088 1.288612,0.277993 5.884913,-0.04703 2.527966,-0.178761 4.681833,-0.304999 4.786271,-0.280603 4.919286,1.149138 11.544266,1.226299 15.039396,0.174666 5.74927,-1.72987 6.43852,-2.281922 6.85074,-5.482869 0.23457,-1.821429 1.21734,-2.880918 2.65824,-2.865975 0.55417,0.0057 0.55418,0.0058 -0.37724,0.889868 -0.86384,0.819854 -0.94597,0.941779 -1.12862,1.678451 -0.2543,1.025699 -0.2078,1.040794 0.30748,0.101286 0.36374,-0.663189 0.50086,-0.801668 0.96532,-0.973584 0.50643,-0.187456 0.54976,-0.239057 0.66455,-0.802535 0.41646,-2.044317 1.42825,-1.886879 2.02107,0.314709 0.17656,0.655671 0.96825,0.03177 1.52187,-1.19941 0.1705,-0.379163 0.55812,-0.932771 0.86145,-1.229899 0.30998,-0.303653 0.44375,-0.470677 0.53278,-0.406177 z"
				onmousemove={(e) => showTooltip(e, `Tail: ${hitzoneValues['Tail']}`)}
				onmouseout={(e) => hideTooltip()}
				style="fill: {hitzoneColors['Tail']}"
				id="path336"><title id="title345"></title></path
			><path
				d="m 59.282686,63.218363 c 1.702767,0.0048 2.709758,0.08901 2.930571,0.252698 1.59212,1.180201 1.532111,0.990762 0.811837,2.585889 -0.357841,0.792474 -0.725664,1.652415 -0.817522,1.911511 -0.343634,0.969261 -2.58306,2.289845 -3.886584,2.29185 -0.588891,9.06e-4 -2.037202,0.143688 -3.218408,0.317293 -1.707371,0.250938 -2.571154,0.312831 -4.212663,0.30024 -2.59211,-0.01988 -2.576299,-0.02447 -2.345593,0.629419 0.09711,0.275241 0.176733,0.521474 0.176733,0.546737 0,0.08934 -0.196048,0.02077 -1.28881,-0.451135 -1.347447,-0.581883 -1.288294,-0.579491 -1.288294,-0.05529 0,0.429569 9.1e-5,0.429376 -1.181323,-0.388607 -0.978379,-0.677407 -1.215814,-0.792906 -1.380794,-0.673861 -0.384016,0.277095 -0.463794,0.269246 -1.32085,-0.130224 -0.791878,-0.369092 -3.783593,-2.928148 -3.597713,-3.077332 0.488837,-0.392331 12.421006,-3.778249 13.512354,-3.834391 3.005658,-0.15462 5.404294,-0.229576 7.107059,-0.224793 z"
				onmousemove={(e) => showTooltip(e, `Belly: ${hitzoneValues['Belly']}`)}
				onmouseout={(e) => hideTooltip()}
				style="fill: {hitzoneColors['Belly']}"
				id="path341"><title id="title343"></title></path
			><path
				d="m 57.341203,54.690719 c -1.336706,-0.02458 -3.768205,0.506174 -8.497673,1.56993 -10.69362,2.405216 -13.210584,4.59656 -10.97039,9.549288 0.398785,0.881649 0.405114,0.888212 0.746725,0.757059 8.867203,-3.404337 12.131962,-4.253732 16.666683,-4.335652 4.021384,-0.07265 5.691836,-0.144936 5.801713,-0.250631 0.01856,-0.01786 -0.28218,-0.937407 -0.668176,-2.043803 -0.385998,-1.106395 -0.902841,-2.674573 -1.148767,-3.484542 -0.35135,-1.157176 -0.59341,-1.737069 -1.930115,-1.761649 z"
				onmousemove={(e) => showTooltip(e, `Back: ${hitzoneValues['Back']}`)}
				onmouseout={(e) => hideTooltip()}
				style="fill: {hitzoneColors['Back']}"
				id="path340"><title id="title342"></title></path
			><path
				d="m 76.984965,33.301843 c -1.543509,0.06069 -4.071656,0.389183 -6.388757,0.938444 -0.206586,0.04897 -0.27662,0.01102 -0.27802,-0.151412 -0.0054,-0.619306 -0.110298,-0.581913 -4.918046,1.755449 -2.592588,1.260427 -7.08821,3.403574 -9.990604,4.763016 -8.937523,4.186217 -12.060517,5.920439 -20.494873,11.379151 -2.747977,1.778489 -3.274162,2.16838 -3.790983,2.811715 -0.370184,0.460801 -0.817536,0.857542 -1.167888,1.035079 -3.681227,1.865419 -4.456453,5.255871 -2.070158,9.056294 0.453381,0.722056 -0.04872,0.818499 4.165121,-0.799434 4.327387,-1.661532 3.769612,-1.302193 4.395597,-2.831352 0.553213,-1.351393 1.92097,-2.701909 3.377055,-3.334163 3.399339,-1.476047 8.65305,-2.906075 15.081767,-4.105176 4.117215,-0.767953 4.173675,-0.761131 4.83278,0.556555 0.301235,0.602232 0.574475,1.122252 0.607715,1.156002 0.682798,0.69326 2.839108,-4.021413 3.362068,-7.351489 0.266785,-1.698817 -0.131523,-1.34765 3.275253,-2.887679 1.573014,-0.71108 3.821271,-1.793758 4.996594,-2.406055 1.832843,-0.95484 2.498962,-1.226226 4.679301,-1.907377 2.424735,-0.757502 2.570745,-0.821199 3.165181,-1.374077 0.460753,-0.428539 1.27089,-0.89852 3.107304,-1.804024 1.366154,-0.673626 2.483569,-1.273545 2.483569,-1.332735 0,-0.05919 -0.07419,-0.07923 -0.164847,-0.04444 -0.09066,0.03479 -1.595331,0.29189 -3.343982,0.571025 -3.962144,0.632471 -5.315304,1.199799 -12.687598,5.318538 -1.154103,0.644773 -2.090687,1.044677 -3.804419,1.624707 -1.25037,0.4232 -3.095759,1.078699 -4.101042,1.456759 -2.144495,0.806486 -1.914533,0.786018 -3.387907,0.299723 -1.064716,-0.351414 -1.349731,-0.391267 -3.28507,-0.458886 -2.119199,-0.07404 -2.119385,-0.07382 -0.797884,-1.006657 3.598241,-2.539972 10.886257,-5.66648 16.021761,-6.873483 1.049664,-0.246702 1.229057,-0.327516 1.42937,-0.643888 0.267912,-0.423141 3.686537,-1.942038 6.172233,-2.741951 1.621863,-0.521927 1.062918,-0.728863 -0.480591,-0.668177 z"
				onmousemove={(e) => showTooltip(e, `Wings: ${hitzoneValues['Wings']}`)}
				onmouseout={(e) => hideTooltip()}
				style="fill: {hitzoneColors['Wings']}"
				id="path334"><title id="title341"></title></path
			></g
		><metadata id="metadata17"
			><rdf:RDF>
				<!-- svelte-ignore attribute_illegal_colon -->
				<cc:License
					rdf:about="http://creativecommons.org/licenses/by-nc-sa/4.0/"
					><cc:permits
						rdf:resource="http://creativecommons.org/ns#Reproduction"
					></cc:permits><cc:permits
						rdf:resource="http://creativecommons.org/ns#Distribution"
					></cc:permits><cc:requires
						rdf:resource="http://creativecommons.org/ns#Notice"
					></cc:requires><cc:requires
						rdf:resource="http://creativecommons.org/ns#Attribution"
					></cc:requires><cc:prohibits
						rdf:resource="http://creativecommons.org/ns#CommercialUse"
					></cc:prohibits><cc:permits
						rdf:resource="http://creativecommons.org/ns#DerivativeWorks"
					></cc:permits><cc:requires
						rdf:resource="http://creativecommons.org/ns#ShareAlike"
					></cc:requires></cc:License
				>
				<!-- svelte-ignore attribute_illegal_colon -->
				<cc:Work rdf:about=""
					><cc:license
						rdf:resource="http://creativecommons.org/licenses/by-nc-sa/4.0/"
					></cc:license><dc:creator
						><cc:Agent><dc:title>Doriel Rivalet</dc:title></cc:Agent
						></dc:creator
					></cc:Work
				></rdf:RDF
			></metadata
		></svg
	>
</div>

<style lang="scss">
	@use '@carbon/motion' as motion;

	#tooltip {
		background: var(--ctp-surface0);
		border: 1px solid var(--ctp-surface1);
		border-radius: 5px;
		padding: var(--cds-spacing-04);
	}

	path {
		transition:
			fill motion.$duration-moderate-02 motion.motion(standard, productive),
			stroke motion.$duration-moderate-02 motion.motion(standard, productive);
	}
</style>
