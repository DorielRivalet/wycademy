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
			></defs
		>
		<!-- svelte-ignore a11y_no_static_element_interactions -->
		<!-- svelte-ignore a11y_mouse_events_have_key_events -->
		<g id="layer1" style="stroke: var(--ctp-mocha-surface1); stroke-width: 1.0;"
			><path
				d="m 59.458386,87.414303 c 1.983913,0.0858 2.642019,1.133526 3.415812,4.09639 0.723454,2.770117 0.403114,3.842618 -1.900659,6.357752 -0.382623,0.417727 -0.893288,1.301299 -1.134814,1.963704 -0.440397,1.207831 -0.578366,1.312681 -1.333252,1.015441 -0.528498,-0.20811 -2.016042,0.49889 -2.345593,1.11466 -0.379975,0.70999 -1.260728,1.04621 -1.177706,0.44959 0.05297,-0.38064 -0.02347,-0.45183 -0.444934,-0.41445 -0.279809,0.0248 -0.888269,0.0705 -1.352373,0.10129 -0.915111,0.0606 -1.44471,1.80253 -0.790649,2.60087 0.137545,0.16788 0.424396,0.75077 0.63717,1.29553 0.3292,0.84286 0.523003,1.049 1.302246,1.38286 1.307158,0.56006 1.42472,0.79659 1.42472,2.86959 0,1.67448 -0.99434,4.60683 -1.154452,3.40445 -0.02226,-0.16714 -0.09679,-0.73158 -0.165364,-1.25419 -0.107666,-0.82047 -0.206474,-0.97851 -0.724504,-1.1591 -0.329962,-0.11502 -0.897882,-0.42944 -1.261938,-0.69867 -1.108027,-0.8194 -1.10241,-0.82042 -1.780254,0.36432 -0.548011,0.95783 -0.727881,1.12086 -1.236617,1.12086 -0.327556,0 -0.595829,0.10048 -0.595829,0.22273 0,0.12225 -0.183362,0.45492 -0.40721,0.73949 -0.223847,0.28458 -0.406694,0.67914 -0.406694,0.87695 0,0.20756 -0.236684,0.44532 -0.559655,0.56224 -0.30779,0.11143 -0.701667,0.26087 -0.875399,0.33176 -0.173731,0.0709 -0.379757,0.0647 -0.457853,-0.0134 -0.0781,-0.0781 -0.143497,-0.65305 -0.145211,-1.27795 -0.0017,-0.62491 -0.07021,-1.23841 -0.152446,-1.36323 -0.20657,-0.31357 -1.065568,-0.56262 -1.065568,-0.30902 0,0.11192 -0.176835,0.25945 -0.393257,0.32814 -0.249037,0.079 -0.366218,0.26622 -0.319361,0.50953 0.100879,0.52383 -0.260555,0.77573 -1.223698,0.8537 -0.81094,0.0657 -0.810803,0.0657 -0.810803,-1.05007 0,-1.25167 -0.400171,-1.57012 -1.135848,-0.90434 -0.603942,0.54656 -0.712976,0.24349 -0.629935,-1.74459 0.056,-1.34074 1.01681,-2.34292 2.433959,-2.53783 1.221184,-0.16795 1.562471,-0.56068 1.786972,-2.05776 0.106867,-0.71265 0.366525,-1.26384 0.902787,-1.91616 1.427444,-1.73638 2.754567,-4.585812 3.03289,-6.512264 0.246212,-1.704198 0.682609,-2.685953 1.685685,-3.790983 0.450637,-0.496442 0.987216,-2.562075 1.04283,-4.013709 0.05046,-1.317246 1.042894,-1.745378 3.18947,-1.376143 0.909644,0.156468 1.740558,0.166343 2.648417,0.03152 1.009336,-0.149891 1.817614,-0.228071 2.478918,-0.199471 z"
				onmousemove={(e) => showTooltip(e, `Legs: ${hitzoneValues['Legs']}`)}
				onmouseout={(e) => hideTooltip()}
				style="fill: {hitzoneColors['Legs']}"
				id="path233"><title id="title242"></title></path
			><path
				d="m 87.50732,86.048494 c 0.291073,0.03675 0.654825,0.194135 1.26969,0.440284 1.681412,0.673115 3.662107,3.710725 3.886068,5.959326 0.07019,0.70468 0.221905,1.457324 0.33693,1.672249 0.453348,0.847087 -7.18e-4,2.176008 -0.532267,1.558045 -0.498328,-0.57934 -0.812663,-0.685335 -0.93586,-0.315743 -0.05458,0.163745 -0.548043,0.174511 -1.759066,0.03876 -2.035927,-0.228236 -2.029947,-0.450496 -0.09302,3.7021 1.558869,3.342058 2.742963,5.094508 3.624069,5.364528 1.397416,0.42826 3.525448,0.67183 3.938777,0.45062 1.787385,-0.95658 5.799427,1.38852 5.698877,3.33106 -0.0277,0.53452 0.084,1.03925 0.29714,1.34359 0.60947,0.87014 0.45795,1.95118 -0.29456,2.10168 -1.36106,0.27222 -1.95603,0.16339 -2.09289,-0.38189 -0.071,-0.28309 -0.27535,-0.50849 -0.46044,-0.50849 -0.18295,0 -0.685009,-0.38202 -1.115693,-0.84853 -0.70931,-0.76832 -3.385885,-0.34905 -4.811076,0.75344 -0.03347,0.0259 0.424428,0.5138 1.017509,1.08417 1.218699,1.17204 1.167064,1.19175 -1.363741,0.52917 -2.382453,-0.62374 -5.578718,-1.91951 -5.812565,-2.35645 -0.10107,-0.18885 -0.650065,-0.68537 -1.22008,-1.1038 -1.036393,-0.76079 -1.036501,-0.76114 -0.983403,-2.73834 0.04667,-1.73796 0.0021,-2.04163 -0.367419,-2.51147 -0.298629,-0.37964 -0.463255,-0.9904 -0.567924,-2.10737 -0.19487,-2.079546 -0.296024,-2.295903 -1.506368,-3.218923 -1.09371,-0.834074 -2.057239,-2.941425 -2.057239,-4.49895 0,-0.681121 -0.502876,-0.883251 -2.212268,-0.888835 -0.759859,-0.0025 -3.22511,-1.370211 -2.942456,-1.632458 1.336037,-1.239577 5.267798,-3.385901 5.526278,-3.01687 0.279744,0.399392 0.305932,0.39082 1.068151,-0.353467 0.781478,-0.763092 0.781683,-0.763386 1.157552,-0.299207 0.375871,0.464181 0.375618,0.464429 1.627291,-0.577225 0.729079,-0.606745 1.056527,-0.903388 1.406633,-0.96635 0.08753,-0.01574 0.176344,-0.0169 0.273368,-0.0047 z"
				onmousemove={(e) => showTooltip(e, `Legs: ${hitzoneValues['Legs']}`)}
				onmouseout={(e) => hideTooltip()}
				style="fill: {hitzoneColors['Legs']}"
				id="path235"><title id="title243"></title></path
			><path
				d="m 74.483826,70.916602 c -0.04233,-0.01234 -0.08051,-0.01241 -0.115239,0.0016 -0.231539,0.09306 -0.307605,0.798291 -0.417029,2.490804 -0.26183,4.049872 -7.20147,7.64689 -15.409395,7.987109 -3.624802,0.15025 -4.946318,1.251984 -5.514392,4.597136 -0.159819,0.9411 1.534118,1.372527 3.897437,0.993221 3.563361,-0.571911 5.481755,0.360711 5.962943,2.898014 0.26511,1.397914 2.014846,3.278638 3.451986,3.710368 0.503654,0.151305 1.14491,0.243445 1.424719,0.205155 0.279809,-0.03829 1.080472,-0.118167 1.77922,-0.177767 0.878347,-0.07491 1.694678,-0.321259 2.645316,-0.7984 0.756257,-0.379579 1.878843,-0.904487 2.494421,-1.166338 0.61558,-0.26185 2.444056,-1.325412 4.063318,-2.363163 2.37521,-1.522227 2.976897,-1.828507 3.113505,-1.584399 0.268628,0.48001 0.613188,0.358799 1.251604,-0.441317 0.59389,-0.744316 0.593869,-0.744469 1.051098,-0.171049 0.519137,0.651058 0.213429,0.806181 2.803447,-1.425236 1.153813,-0.994061 3.182751,-3.498641 3.182751,-3.928959 0,-1.073297 -0.395464,-1.305415 -1.309997,-0.769462 -1.053107,0.617162 -1.282303,0.648333 -1.371493,0.186035 -0.05492,-0.284672 -0.290885,-0.333242 -1.428853,-0.291972 -1.363262,0.04945 -1.363636,0.04944 -1.883089,-0.975651 -1.215737,-2.399142 -5.673533,-7.060906 -7.19336,-7.522538 -0.905482,-0.275032 -1.576756,-0.628878 -1.969389,-1.038696 -0.218415,-0.227978 -0.382532,-0.377414 -0.509529,-0.414445 z"
				onmousemove={(e) => showTooltip(e, `Belly: ${hitzoneValues['Belly']}`)}
				onmouseout={(e) => hideTooltip()}
				style="fill: {hitzoneColors['Belly']}"
				id="path234"><title id="title240"></title></path
			><path
				d="m 98.473576,58.497205 c -0.508925,-0.31434 -1.071004,-0.632003 -1.668115,-0.951364 -1.108006,-0.44825 -1.40314,-0.50886 -1.16427,-0.06253 0.183291,0.342485 0.16188,0.382292 -0.145211,0.267167 -0.305017,-0.114346 -0.320964,-0.08638 -0.104387,0.180351 0.228528,0.281447 0.156589,0.292734 -0.661975,0.10542 -1.782551,-0.407906 -2.241499,0.167606 -1.32395,1.658813 0.335771,0.545697 0.611483,1.211032 0.612883,1.478463 0.0014,0.26743 0.191534,1.081689 0.422196,1.809192 0.491609,1.550526 0.407089,5.425505 -0.15658,7.193359 -0.271002,0.849937 -0.274745,1.026984 -0.02739,1.274341 0.247356,0.247358 0.238144,0.576984 -0.06718,2.370915 -0.519605,3.052938 -0.545394,2.939203 0.959631,4.208528 1.239766,1.045609 1.50087,1.164637 4.677751,2.136304 3.549648,1.085679 8.257968,4.525833 14.538648,10.623124 1.37024,1.330225 2.43683,2.153859 3.66282,2.827218 2.58568,1.420139 3.75418,2.374505 4.52841,3.699516 0.52899,0.905298 0.81702,1.191874 1.29605,1.289844 0.3388,0.06929 1.0984,0.50721 1.68775,0.973067 1.54613,1.222175 2.47909,0.22137 1.61747,-1.735295 -0.56774,-1.289284 -0.64322,-2.144644 -0.1757,-1.99626 0.65993,0.209484 1.16044,-1.363619 0.65887,-2.071192 -0.22389,-0.315853 -0.40633,-0.830968 -0.40566,-1.144633 6.7e-4,-0.313665 -0.18155,-0.771556 -0.40514,-1.017509 -0.22359,-0.245953 -0.4951,-0.722046 -0.60306,-1.057816 -0.15467,-0.481086 -0.30039,-0.599036 -0.6873,-0.558106 -0.9087,0.09614 -2.06944,-0.766517 -2.67219,-1.985408 -0.61189,-1.237385 -0.8157,-1.519867 -1.28467,-1.78232 -0.26149,-0.146352 -0.27717,-0.282695 -0.0894,-0.77463 0.21485,-0.562866 0.17652,-0.644119 -0.6718,-1.411284 -1.17054,-1.058552 -3.28339,-4.398149 -5.61206,-8.871809 -1.53053,-2.940352 -2.03643,-3.729159 -2.82928,-4.408 -0.53108,-0.454722 -1.92643,-2.048371 -3.10059,-3.541386 -2.13484,-2.714572 -2.13508,-2.714563 -4.37544,-2.714563 -2.23667,0 -2.24009,-5.99e-4 -2.30529,-0.508496 -0.15947,-1.242006 -2.39117,-4.088511 -4.125844,-5.503023 z"
				onmousemove={(e) => showTooltip(e, `Wings: ${hitzoneValues['Wings']}`)}
				onmouseout={(e) => hideTooltip()}
				style="fill: {hitzoneColors['Wings']}"
				id="path231"><title id="title237"></title></path
			><path
				d="m 89.121692,60.472795 c 0.424596,-0.01397 0.905766,0.117868 1.617989,0.345715 0.850636,0.272127 1.811465,0.481263 2.13527,0.464571 1.383939,-0.07134 2.146095,5.800201 1.134298,8.739002 -0.337527,0.980357 -0.369136,1.28553 -0.171566,1.655196 0.673698,1.260531 -1.267616,7.212396 -2.453597,7.522538 -0.247487,0.06472 -0.322567,0.248911 -0.264066,0.647506 0.129046,0.879251 -0.491994,1.277952 -1.00459,0.644921 -0.394135,-0.486735 -0.393779,-0.486698 -1.294495,-0.04909 -0.900316,0.437407 -0.901053,0.437074 -1.120862,0.02635 -0.196312,-0.366812 -0.347858,-0.395982 -1.41335,-0.275436 -1.193555,0.135036 -1.193448,0.135017 -1.820561,-0.976167 -1.230428,-2.1802 -5.889172,-6.930731 -7.202661,-7.344772 -1.894649,-0.597235 -1.837387,-0.822069 0.346749,-1.367875 2.764814,-0.690915 7.655347,-4.993514 7.655347,-6.734989 0,-0.414425 0.328814,-0.833508 1.393196,-1.777153 1.20445,-1.067826 1.755239,-1.497032 2.462899,-1.52032 z"
				onmousemove={(e) => showTooltip(e, `Neck: ${hitzoneValues['Neck']}`)}
				onmouseout={(e) => hideTooltip()}
				style="fill: {hitzoneColors['Neck']}"
				id="path230"><title id="title236"></title></path
			><path
				d="m 58.709078,61.430359 c 0.09017,-0.03467 0.391261,0.0639 0.869714,0.307991 0.684335,0.349122 0.927744,0.378842 1.594218,0.194821 0.777531,-0.214687 0.796294,-0.206151 1.655713,0.743107 1.047351,1.156836 1.810217,1.186302 1.92133,0.07441 0.132422,-1.325114 0.848419,-1.369571 1.576131,-0.09767 0.852478,1.489977 1.471311,1.710076 3.285588,1.168921 0.718807,-0.214403 2.160292,-0.444577 3.202905,-0.511597 2.084439,-0.13399 2.1612,-0.06237 1.338936,1.242302 -0.156232,0.24789 -0.28422,0.720717 -0.28422,1.051099 0,0.330381 -0.09244,0.631464 -0.205672,0.669209 -0.137465,0.04582 -0.128499,0.643446 0.02739,1.797823 0.883133,6.53993 -1.444606,9.699322 -8.594307,11.662854 -5.552311,1.52484 -7.384887,1.474204 -7.205762,-0.198437 0.139271,-1.300494 0.139058,-1.300341 -2.11615,-5.155241 -1.240364,-2.120195 -2.254532,-3.972536 -2.254126,-4.116028 0.0054,-1.912157 3.598811,-7.002329 5.304069,-7.513236 0.945237,-0.2832 0.951964,-0.302348 0.280603,-0.830441 -0.365512,-0.287512 -0.486527,-0.455224 -0.396358,-0.489892 z"
				onmousemove={(e) => showTooltip(e, `Back: ${hitzoneValues['Back']}`)}
				onmouseout={(e) => hideTooltip()}
				style="fill: {hitzoneColors['Back']}"
				id="path229"><title id="title241"></title></path
			><path
				d="m 5.5789876,53.13009 c -0.233568,0.102757 -0.793479,0.676365 -1.8453654,1.794206 -5.5726754,5.922091 -5.2630022,7.464568 2.4732341,12.328963 3.13386,1.970511 8.8572407,5.813238 12.7186037,8.539014 7.020661,4.955957 7.020306,4.955773 16.582967,8.147823 9.562659,3.19205 9.562822,3.192209 9.959599,4.853451 0.472924,1.980059 0.384977,1.960505 1.594734,0.353466 0.970469,-1.289166 0.97032,-1.289165 2.645317,-1.544091 1.772738,-0.269803 2.387451,-0.485515 2.387451,-0.837675 0,-1.98324 2.482853,-5.505139 4.070036,-5.773291 0.44766,-0.07563 0.813904,-0.16242 0.813904,-0.19327 0,-0.03085 0.09251,-0.544322 0.205672,-1.141016 0.205747,-1.084898 0.205703,-1.085218 -2.035018,-5.098913 -2.517453,-4.509395 -2.414645,-4.172929 -1.725476,-5.653402 0.281103,-0.603866 0.486156,-1.120464 0.455786,-1.147734 -1.205758,-1.08285 -12.696212,-6.258601 -13.993978,-6.303491 -3.632027,-0.125626 -6.377021,-0.531785 -7.16287,-1.059367 -0.606533,-0.407197 -1.029821,-0.510398 -2.18798,-0.535368 -1.490829,-0.03214 -1.606027,0.01255 -1.181323,0.461471 0.209575,0.221529 0.111503,0.242913 -0.559139,0.120923 -2.13533,-0.388419 -3.171609,-0.521405 -4.579049,-0.588595 -0.839426,-0.04008 -1.689772,-0.142073 -1.889807,-0.226343 -0.238784,-0.100595 -0.508866,-0.02212 -0.786515,0.227893 -0.686569,0.618225 -3.573208,0.49741 -4.482414,-0.187585 -1.071165,-0.807015 -2.824806,-0.585721 -2.676839,0.337964 0.19299,1.204741 -1.614968,0.982139 -3.204973,-0.394808 C 10.073972,58.656389 9.8592237,58.549193 9.2433634,58.649133 8.8622793,58.71097 8.434919,58.669962 8.2940674,58.557666 8.1532156,58.445371 7.621605,58.293222 7.1127441,58.219702 5.3942888,57.97141 4.74123,56.361567 5.4668498,54.162069 5.7196497,53.395781 5.8125556,53.027333 5.5789876,53.13009 Z"
				onmousemove={(e) => showTooltip(e, `Wings: ${hitzoneValues['Wings']}`)}
				onmouseout={(e) => hideTooltip()}
				style="fill: {hitzoneColors['Wings']}"
				id="path228"><title id="title238"></title></path
			><path
				d="m 26.765291,33.430518 c -0.09041,0.03105 0.103784,0.381209 0.5271,1.069185 1.433993,2.330535 2.783312,5.825082 2.611727,6.763411 -0.194229,1.062155 -0.131396,1.166337 0.701766,1.166337 0.655379,0 0.708603,0.05194 1.302763,1.271757 0.164764,0.338267 -0.728409,-0.15608 -1.639694,-0.907438 -1.104061,-0.910303 -1.097826,-0.91618 -1.228865,1.227316 -0.09362,1.531457 -0.306441,2.004759 -0.813387,1.810225 -0.24874,-0.09545 -0.251796,-0.310381 -0.02119,-1.502234 0.385967,-1.994789 0.380004,-2.009946 -0.538986,-1.282092 -0.452855,0.358669 -0.848929,0.618179 -0.880049,0.576709 -1.036165,-1.380888 -1.349473,-2.282306 -1.352373,-3.893819 -0.003,-1.675798 -0.003,-1.675897 -0.689363,-0.864547 -0.732028,0.865371 -1.093389,0.421776 -1.158069,-1.421619 -0.04868,-1.387389 -0.260018,-1.704102 -0.671794,-1.007173 -0.366935,0.621038 -0.366931,0.621196 -2.194698,-1.187525 -2.024644,-2.003547 -2.273501,-2.099795 -1.503267,-0.579809 0.744012,1.468238 0.795682,5.743854 0.07648,6.326229 -0.445882,0.361056 -0.445827,0.361145 0.0248,2.271179 0.258847,1.050519 0.508918,2.456363 0.556038,3.124357 0.04868,0.690107 0.219362,1.362112 0.394808,1.555977 0.430661,0.475876 1.292395,2.994558 1.297595,3.792534 0.0042,0.651543 0.01822,0.661526 0.970484,0.669726 1.248829,0.01078 2.534303,1.075563 2.889229,2.393652 0.273895,1.01717 0.174262,1.000092 1.404049,0.243396 0.946535,-0.582412 1.096154,-0.610815 3.258715,-0.610815 2.376061,0 2.683561,-0.138104 1.656747,-0.744657 -0.335771,-0.198345 -0.610816,-0.522795 -0.610816,-0.721403 0,-0.465747 2.351195,2.058354 4.372343,4.69377 2.823188,3.681212 2.570368,3.487942 4.683435,3.572392 1.831478,0.0732 1.831438,0.07318 7.732862,3.121773 3.245784,1.676725 5.96038,3.060555 6.03219,3.075264 0.132151,0.02706 0.449114,-0.996795 0.33693,-1.088305 -0.03343,-0.02727 -1.159607,-0.627949 -2.50269,-1.334802 -4.42072,-2.326587 -9.77714,-6.934403 -11.774991,-10.129615 -1.097336,-1.754996 -1.624586,-2.772172 -1.303797,-2.515092 0.282454,0.226359 0.475573,0.206843 1.212846,-0.12299 1.338064,-0.598607 1.627644,-1.041749 1.74408,-2.669087 0.0942,-1.316552 0.15537,-1.46712 0.888834,-2.18333 1.02507,-1.000952 0.998843,-1.093473 -0.312125,-1.093473 -1.712532,0 -1.836128,-1.320818 -0.343649,-3.67161 0.570245,-0.898189 1.03663,-1.672822 1.03663,-1.721342 0,-0.04852 -0.752794,0.229537 -1.672767,0.617533 -2.866384,1.20889 -3.748139,0.42634 -2.827734,-2.509407 0.322896,-1.029917 0.547171,-1.872754 0.498161,-1.872754 -0.04901,0 -0.719142,0.508827 -1.488798,1.13068 -1.996573,1.613157 -3.055628,1.184437 -3.055628,-1.236617 0,-1.792215 0.03545,-1.774745 -1.261421,-0.608748 -1.108138,0.996312 -1.639412,0.776169 -5.18573,-2.147673 -0.713549,-0.588301 -1.088335,-0.876474 -1.17874,-0.845426 z"
				onmousemove={(e) => showTooltip(e, `Tail: ${hitzoneValues['Tail']}`)}
				onmouseout={(e) => hideTooltip()}
				style="fill: {hitzoneColors['Tail']}"
				id="path227"><title id="title239"></title></path
			><path
				d="m 45.710388,13.509253 c -0.10932,0.0694 0.04822,0.757095 0.316777,1.97404 1.668638,7.561314 15.609106,14.843832 28.181742,14.722098 7.235438,-0.07006 10.080013,4.481586 6.825423,10.920781 -0.914025,1.808394 -1.684766,1.703956 -9.606649,-1.299146 -4.687289,-1.776902 -7.959443,-2.284145 -10.510469,-1.629358 -1.361896,0.349561 -1.417948,0.348333 -2.425692,-0.05426 -2.700508,-1.078846 -3.75198,-1.148018 -2.642216,-0.173633 1.22057,1.071676 1.425793,1.649499 0.93121,2.618962 -0.913689,1.790976 0.783659,3.07409 6.228043,4.707723 2.205651,0.661823 4.023083,1.22578 4.038513,1.25367 0.01543,0.02789 0.438332,0.554375 0.939995,1.169955 1.521438,1.866925 1.460695,1.747377 1.082104,2.125968 -0.374282,0.374282 -0.29305,1.976092 0.10697,2.109432 0.517576,0.172526 0.127035,0.880528 -1.055232,1.913578 -2.492729,2.178112 -3.135829,2.568911 -5.304069,3.222543 -3.122333,0.941249 -2.987942,0.820055 -1.753382,1.5875 2.36582,1.470674 4.696073,1.111045 8.436178,-1.30173 3.735907,-2.410069 4.981592,-2.350515 3.640604,0.174667 -0.848989,1.598709 -0.822539,1.745303 0.205156,1.138948 0.748095,-0.441387 0.748082,-0.440985 -0.696082,1.950269 -1.444163,2.391253 -1.444022,2.390991 0.498678,2.245341 2.236765,-0.167697 2.184952,-0.223088 1.560628,1.679484 -0.604972,1.8436 -0.643378,2.161344 -0.418062,3.428214 0.303379,1.705784 0.351175,1.823022 0.855245,2.080493 2.183987,1.115551 8.308338,-3.152613 9.522933,-6.636804 0.778554,-2.233361 3.831375,-3.763621 6.188769,-3.102136 1.431278,0.401622 2.679603,0.422474 2.511475,0.04186 -0.97959,-2.217651 -2.196983,-4.041892 -3.054594,-4.577498 -0.882318,-0.551036 -1.102125,-1.613187 -0.267167,-1.290878 2.695778,1.040621 4.912668,2.049416 6.758244,3.036507 0.224518,0.09083 0.248128,0.08133 0.565857,0.214974 0.315609,0.132751 0.699952,0.408335 1.102258,0.73639 2.982894,1.842398 4.496364,3.603223 4.496364,5.306652 0,0.783229 5.41477,0.400007 6.10454,-0.432015 0.23021,-0.277679 0.84307,-0.429426 2.49287,-0.618566 2.61572,-0.299879 2.59093,-0.213659 0.55345,-1.913062 -1.24288,-1.036662 -1.60882,-1.455116 -1.52652,-1.74718 0.0595,-0.211237 0.16413,-0.578667 0.23203,-0.816488 0.0738,-0.258272 0.0148,-0.499616 -0.14676,-0.599446 -0.20772,-0.12838 -0.17748,-0.200988 0.13074,-0.31316 4.89457,-1.781289 5.18035,-3.628798 0.57206,-3.695898 -5.05392,-0.07359 -5.15903,-0.146958 -3.59875,-2.493388 1.14097,-1.715862 1.21704,-1.621492 -1.1343,-1.401981 -2.68528,0.250686 -3.0914,-0.130562 -1.64434,-1.543576 0.98619,-0.962984 1.00718,-1.118478 0.15245,-1.121378 -2.40268,-0.0081 -3.01455,-0.603072 -1.8955,-1.841748 0.97552,-1.079776 0.92501,-1.208712 -0.47077,-1.208712 -1.82961,0 -1.90708,-0.287531 -0.51883,-1.923913 1.37035,-1.61529 1.38431,-1.585961 -0.6444,-1.364775 -0.88486,0.09647 -1.654535,0.117932 -1.710495,0.04754 -0.05596,-0.07039 -0.321316,-0.22191 -0.589628,-0.33693 -0.466505,-0.199981 -0.486141,-0.286718 -0.445451,-1.978691 0.04798,-1.995027 0.0506,-1.992293 -1.203544,-1.158585 -0.503655,0.334811 -0.970446,0.609303 -1.037146,0.609782 -0.06671,4.8e-4 -0.181125,-1.261801 -0.254764,-2.80448 C 95.784295,22.524055 87.980562,15.938075 77.269185,19.012276 64.656927,22.632036 50.907614,21.460769 47.78468,16.500802 46.432577,14.353336 45.850943,13.420021 45.710388,13.509253 Z"
				onmousemove={(e) => showTooltip(e, `Head: ${hitzoneValues['Head']}`)}
				onmouseout={(e) => hideTooltip()}
				style="fill: {hitzoneColors['Head']}"
				id="path226"><title id="title235"></title></path
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
