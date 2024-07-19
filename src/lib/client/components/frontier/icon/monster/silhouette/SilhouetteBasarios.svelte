<!-- Created with Inkscape (http://www.inkscape.org/) -->
<script lang="ts">
	import { browser } from '$app/environment';
	import {
		getHitzoneColorsForHitzones,
		getHitzoneValuesForHitzones,
	} from '$lib/client/modules/frontier/functions';
	import type {
		FrontierMonsterHitzoneRankBand,
		FrontierMonsterHitzoneType,
		FrontierMonsterPartInfo,
	} from '$lib/client/modules/frontier/types';

	export let size = '100%';
	export let selectedHitzoneType: FrontierMonsterHitzoneType;
	export let selectedRankBand: FrontierMonsterHitzoneRankBand;
	export let selectedMonsterState: string;
	export let hitzones: FrontierMonsterPartInfo[];

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

	$: hitzoneColors = getHitzoneColorsForHitzones(
		hitzones,
		selectedHitzoneType,
		selectedMonsterState,
		selectedRankBand,
	);

	$: hitzoneValues = getHitzoneValuesForHitzones(
		hitzones,
		selectedHitzoneType,
		selectedMonsterState,
		selectedRankBand,
	);
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
		xmlns:svg="http://www.w3.org/2000/svg"
		xmlns:rdf="http://www.w3.org/1999/02/22-rdf-syntax-ns#"
		xmlns:cc="http://creativecommons.org/ns#"
		xmlns:dc="http://purl.org/dc/elements/1.1/"
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
			></defs
		><g
			id="layer1"
			style="stroke: var(--ctp-mocha-surface1); stroke-width: 1.0;"
			><path
				d="m 66.720992,43.501737 c 0.197754,-0.05437 0.24684,0.237352 0.395325,2.349728 0.06256,0.890044 -1.995078,2.911807 -2.373499,2.332157 -0.0049,-0.0076 -0.313776,-0.06076 -0.686263,-0.118339 -0.372485,-0.05758 -0.921449,-0.08369 -1.219564,-0.05839 -0.533356,0.04527 -0.545625,0.0388 -0.768945,-0.398942 -0.124997,-0.245013 -0.286886,-0.420094 -0.360701,-0.389641 -0.07371,0.03041 -0.527597,0.236359 -1.008724,0.457854 -0.985352,0.453621 -0.988982,0.45041 -0.63252,-0.605131 0.695113,-2.058344 0.840497,-2.168128 3.795117,-2.876827 1.47304,-0.353326 2.760116,-0.665067 2.859774,-0.692465 z"
				on:mousemove={(e) => showTooltip(e, `Back: ${hitzoneValues['Back']}`)}
				on:mouseout={(e) => hideTooltip()}
				style="fill: {hitzoneColors['Back']}"
				id="path182"><title id="title191"></title></path
			><path
				d="m 45.391028,81.642045 c 0.07939,2.82e-4 0.177238,0.01295 0.307991,0.02997 3.779954,0.492106 3.461441,0.372032 3.42253,1.291911 -0.09612,2.272429 -1.776041,3.767856 -3.803385,3.385323 -0.733853,-0.138469 -3.101338,0.538538 -3.35225,0.958598 -0.29966,0.501674 -0.530286,0.646703 -1.27124,0.802018 -0.909392,0.190625 -2.126216,0.819656 -2.569869,1.328085 -0.230959,0.264676 -0.33277,0.316989 -0.40411,0.208256 -0.0719,-0.10958 -0.171801,-0.116224 -0.40411,-0.02791 -0.437669,0.166403 -2.024435,0.156101 -1.920296,-0.0124 0.07662,-0.123965 -0.150949,-0.09822 -0.772046,0.0863 -0.108642,0.03228 -0.197404,0.03039 -0.197404,-0.0036 0,-0.897638 1.644993,-2.436543 2.604492,-2.436543 0.472383,0 0.471906,7.95e-4 0.870748,-1.022677 0.12765,-0.327563 1.208726,-0.559559 2.599842,-0.558105 1.104095,0.0012 3.159306,-1.658387 4.299996,-3.47214 0.280525,-0.446052 0.350932,-0.557919 0.589111,-0.557072 z"
				on:mousemove={(e) => showTooltip(e, `Legs: ${hitzoneValues['Legs']}`)}
				on:mouseout={(e) => hideTooltip()}
				style="fill: {hitzoneColors['Legs']}"
				id="path188"><title id="title197"></title></path
			><path
				d="m 56.929342,81.662199 c 0.990476,0.05728 0.701833,0.629941 0.553971,2.845821 -0.188935,2.831393 -0.188997,2.831448 0.08165,4.260722 0.458155,2.419535 -0.521919,3.141832 -4.308264,3.175517 -1.571874,0.01398 -3.239075,0.07949 -3.704684,0.14521 -1.649747,0.232858 -3.076665,0.173269 -2.98173,-0.12454 0.216321,-0.678598 -0.0516,-0.820147 -0.707967,-0.374137 -0.570437,0.38762 -1.90843,0.425572 -2.236039,0.06356 -0.241408,-0.266753 -1.846693,-0.317831 -3.232361,-0.102836 -0.98137,0.152265 -0.990438,0.142222 -0.63252,-0.687297 0.292318,-0.677479 0.292485,-0.677478 -0.319877,-0.677478 -1.238503,0 -0.414999,-1.260452 1.032495,-1.580265 1.221704,-0.269926 1.391936,-0.342237 1.589051,-0.675928 0.186399,-0.315551 0.676184,-0.534719 1.040246,-0.465605 0.08509,0.01615 0.305024,-0.114224 0.488342,-0.289388 0.33331,-0.318478 0.333461,-0.318539 1.99006,-0.291971 2.459987,0.03945 3.712335,-1.095276 4.261755,-3.86178 0.181145,-0.912116 0.206002,-0.961731 0.485759,-0.963249 0.162227,-8.8e-4 1.866485,-0.10202 3.786849,-0.224276 1.03635,-0.06598 1.778731,-0.14295 2.306319,-0.168465 0.197845,-0.0096 0.365449,-0.0118 0.506946,-0.0036 z"
				on:mousemove={(e) => showTooltip(e, `Legs: ${hitzoneValues['Legs']}`)}
				on:mouseout={(e) => hideTooltip()}
				style="fill: {hitzoneColors['Legs']}"
				id="path187"><title id="title196"></title></path
			><path
				d="m 76.974113,48.323149 c 0.373468,3.42e-4 0.632968,0.209565 0.934827,0.579809 0.57006,0.699209 0.665689,0.930938 0.637687,1.544609 -0.01697,0.371876 0.03957,0.650371 0.174149,0.855761 0.256132,0.390906 0.297374,0.36348 -1.651062,1.111044 -1.919807,0.736578 -1.712627,0.705095 -2.607592,0.394291 -0.698404,-0.242541 -0.698582,-0.242465 -1.627291,0.225826 -0.510791,0.25756 -0.942216,0.463221 -0.959115,0.457336 -0.0169,-0.0059 -0.627317,-0.123809 -1.355989,-0.261999 -1.44129,-0.273336 -1.610777,-0.34434 -1.201994,-0.502812 0.148292,-0.05749 0.535622,-0.210172 0.860929,-0.339514 0.325306,-0.129342 1.790085,-1.074126 3.255099,-2.099613 1.978752,-1.385096 2.917906,-1.965309 3.540352,-1.964738 z"
				on:mousemove={(e) => showTooltip(e, `Tail: ${hitzoneValues['Tail']}`)}
				on:mouseout={(e) => hideTooltip()}
				style="fill: {hitzoneColors['Tail']}"
				id="path186"><title id="title192"></title></path
			><path
				d="m 90.589303,49.77784 c 0.02707,0 0.04909,0.603117 0.04909,1.340487 0,1.109829 0.03243,1.367276 0.187069,1.495516 0.317843,0.263594 0.490409,0.847961 0.490409,1.660364 0,0.821935 0.101234,0.913718 1.018026,0.920357 0.09787,7.09e-4 0.460854,-0.484417 0.845426,-1.129647 1.020893,-1.712838 1.872521,-1.7875 7.589715,-0.663009 0.59259,0.116555 0.59255,0.116749 0.59428,1.717208 0.002,1.883887 -0.0255,1.820664 0.88005,2.02985 0.70957,0.163927 0.70978,0.16394 1.09968,-0.610298 0.29395,-0.583697 0.45882,-0.788928 0.67127,-0.833024 0.155,-0.03217 0.40349,-0.08316 0.55191,-0.113688 1.71523,-0.352719 5.74035,1.598264 5.25601,2.547648 -0.12157,0.2383 -0.22066,0.478081 -0.22066,0.532784 0,0.1191 1.34498,0.535042 5.15266,1.592667 2.80567,0.779313 13.13304,4.15617 13.13304,4.294312 0,0.03928 -1.15598,0.134727 -2.56831,0.21239 -1.41234,0.07766 -4.54846,0.26295 -6.9696,0.411344 -6.14109,0.376394 -6.42713,0.383327 -18.17306,0.45837 -13.945142,0.08909 -20.487103,1.228143 -25.762764,4.484998 -0.543657,0.335619 -1.095178,0.666611 -1.225765,0.735872 -0.224416,0.119027 -0.28317,0.0276 -1.072286,-1.672249 -0.834879,-1.798426 -0.835295,-1.798608 -2.438611,-3.550688 -1.182394,-1.292099 -1.619587,-1.848081 -1.666048,-2.118733 -0.129677,-0.755421 -0.388414,-2.616158 -0.365869,-2.631364 0.01288,-0.0087 1.902747,-0.645559 4.199743,-1.415418 4.176359,-1.399742 4.176237,-1.399926 4.571297,-2.190047 0.550651,-1.101301 3.861756,-2.891659 4.503085,-2.434994 0.589037,0.419433 0.964294,0.267808 1.705322,-0.689363 0.531344,-0.686325 0.734511,-0.854711 1.410767,-1.167888 0.434566,-0.201248 2.075803,-1.006923 3.647322,-1.790071 1.571521,-0.783147 2.879733,-1.423686 2.9068,-1.423686 z"
				on:mousemove={(e) => showTooltip(e, `Tail: ${hitzoneValues['Tail']}`)}
				on:mouseout={(e) => hideTooltip()}
				style="fill: {hitzoneColors['Tail']}"
				id="path185"><title id="title193"></title></path
			><path
				d="m 66.559762,61.615877 c 0.430517,0.05177 0.610586,0.298796 0.644405,0.709001 0.145428,1.764026 0.05847,1.59555 1.811775,3.532084 1.487572,1.643025 3.225392,4.607501 3.224093,5.50044 -6.2e-5,0.04243 -0.774607,0.561958 -1.721342,1.154451 -1.721337,1.077261 -1.721593,1.077186 -4.004407,3.542419 -2.340496,2.527529 -6.061935,4.57228 -8.778792,4.822962 -4.870345,0.44938 -8.133974,0.548852 -10.553878,0.321944 -1.803444,-0.169105 -1.90814,-0.200801 -6.038908,-1.815393 -1.886068,-0.737207 -6.94984,-3.229312 -6.937561,-3.414262 0.0273,-0.41116 7.550364,-3.619248 10.874789,-4.637443 1.979227,-0.606191 3.641891,-1.170597 3.694865,-1.254187 0.05297,-0.08359 0.203757,-0.471678 0.334863,-0.86248 0.238374,-0.710548 0.238517,-0.710794 0.763778,-0.690397 0.621781,0.02415 0.244033,0.18951 6.733439,-2.944523 5.318441,-2.56852 8.081409,-3.767952 9.435083,-3.950146 0.203051,-0.02733 0.374292,-0.03173 0.517798,-0.01447 z"
				on:mousemove={(e) => showTooltip(e, `Belly: ${hitzoneValues['Belly']}`)}
				on:mouseout={(e) => hideTooltip()}
				style="fill: {hitzoneColors['Belly']}"
				id="path184"><title id="title194"></title></path
			><path
				d="m 100.9711,43.990597 c 0.0903,-0.08718 -0.4502,0.100477 -1.603522,0.546219 -1.954014,0.755202 -1.629339,0.630994 -12.792501,4.905127 -4.749196,1.818367 -9.238876,3.53527 -9.976652,3.815271 -1.341408,0.509097 -1.340992,0.50896 -2.093412,0.248047 -0.752421,-0.260914 -0.752427,-0.260795 -1.570964,0.191203 -0.818535,0.452001 -0.818523,0.452079 -2.426208,0.0832 -0.884228,-0.202884 -1.859693,-0.40132 -2.16731,-0.4408 -1.469213,-0.188582 -1.495155,-0.119623 0.353467,-0.933276 1.335351,-0.587742 2.055116,-0.998126 3.480925,-1.984375 0.988713,-0.683907 2.561857,-1.743362 3.495394,-2.354379 0.933537,-0.611014 1.647513,-1.111043 1.586983,-1.111043 -0.133957,0 -4.291363,1.837753 -5.468917,2.417424 -3.260235,1.604901 -3.414129,1.646893 -6.014103,1.639693 -1.598977,-0.0044 -2.338734,-0.0433 -2.225704,-0.116789 0.09312,-0.06054 0.880113,-0.522549 1.749247,-1.026294 0.879609,-0.509814 2.106015,-1.346569 2.765723,-1.88774 0.65185,-0.534725 1.499858,-1.22396 1.884639,-1.531689 1.009512,-0.807362 0.924761,-0.775818 -2.234489,0.833541 -2.867013,1.460489 -2.867062,1.460436 -3.795117,1.30948 -0.705817,-0.11481 -1.026725,-0.120784 -1.339453,-0.0248 -0.436411,0.133938 -0.426573,0.139707 -0.869714,-0.516248 -0.334223,-0.494728 -5.269986,1.902091 -6.570142,3.190503 -1.128746,1.11855 -1.128625,1.118421 -1.918746,0.964282 -3.155933,-0.615663 -6.413148,0.551321 -9.255766,3.316077 -0.682891,0.664186 -1.532054,1.4509 -1.886706,1.748214 -0.354654,0.297312 -0.938318,0.924638 -1.297595,1.393713 -0.685247,0.894656 -1.803459,1.811049 -2.866492,2.349727 -0.338758,0.171662 -1.264367,0.912856 -2.128036,1.704289 -1.238074,1.134526 -2.160994,1.82834 -4.858101,3.651457 -4.527533,3.060398 -5.498637,3.819632 -5.591907,4.372343 -0.124829,0.739718 -0.162502,0.798583 -0.885734,1.374076 -0.70894,0.564122 -0.708966,0.564169 -0.910539,1.635042 -0.201572,1.070873 -0.201951,1.07055 -1.286743,1.678451 -1.084792,0.607901 -1.084647,0.608176 -1.263488,1.389579 -0.133943,0.585224 -0.368172,1.082328 -0.933277,1.980241 -0.75454,1.198914 -0.754441,1.199 -0.747241,3.66851 0.0081,2.774229 -0.02985,2.736995 0.730705,0.719853 0.362899,-0.96248 0.52213,-1.210799 1.554427,-2.423625 1.250699,-1.469422 1.160945,-1.608602 1.30638,2.023132 0.01808,0.451395 0.1152,0.308886 0.68988,-1.010274 0.453891,-1.041888 1.11676,-1.97559 1.402499,-1.97559 0.06287,0 0.347868,-0.230208 0.633553,-0.511597 0.519426,-0.511616 0.519214,-0.511348 1.454691,-0.293522 0.935476,0.217826 0.935416,0.217498 1.264006,-0.311092 0.325275,-0.523255 0.342405,-0.532757 1.679484,-0.948779 1.350548,-0.420214 1.350907,-0.420476 2.316654,-1.330152 1.08624,-1.02317 1.369971,-1.172918 6.713286,-3.545003 2.341481,-1.039466 3.473437,-1.463933 6.06888,-2.274796 3.388499,-1.058627 3.638538,-1.224405 3.638538,-2.415357 0,-0.195042 0.07973,-0.221692 0.665592,-0.221692 0.620914,0 0.852427,-0.09105 3.470589,-1.367358 7.777127,-3.791215 7.816057,-3.809357 10.932666,-5.086511 2.160126,-0.885198 5.273854,-2.005093 10.413318,-3.745508 1.383242,-0.468419 1.382972,-0.468371 1.703772,-1.1467 0.358678,-0.758422 -0.239066,-0.413965 5.491138,-3.164148 3.517717,-1.688311 4.773369,-2.292105 7.6755,-3.691248 1.614108,-0.778174 3.925541,-1.892265 5.136121,-2.475818 1.21058,-0.583551 3.25347,-1.564025 4.539774,-2.178678 1.369438,-0.654377 2.090448,-1.016629 2.180748,-1.103808 z"
				on:mousemove={(e) => showTooltip(e, `Wings: ${hitzoneValues['Wings']}`)}
				on:mouseout={(e) => hideTooltip()}
				style="fill: {hitzoneColors['Wings']}"
				id="path183"><title id="title195"></title></path
			><path
				d="m 0.6836792,55.781091 c -0.1005404,0.05688 -0.15360669,0.582409 -0.27905274,1.643828 -0.11556064,0.977777 -0.26370772,1.845201 -0.3286621,1.927531 -0.08126296,0.103004 -0.08143556,0.173496 -0.0010335,0.225826 0.2473366,0.160984 1.25164257,3.010109 1.33170167,3.778064 0.046988,0.450727 0.2118621,1.058008 0.3994588,1.471744 0.1864592,0.411227 0.3739838,1.102351 0.4511353,1.659847 0.072687,0.525238 0.2566814,1.217369 0.4087605,1.538408 0.6404027,1.351888 0.6460181,2.077214 0.022738,2.979146 -0.8892848,1.28686 -0.8036329,1.497802 0.6413045,1.583883 0.8804622,0.05245 1.2744005,0.133205 1.7916219,0.366902 0.6826943,0.308464 2.1021973,0.435119 2.1021973,0.187586 0,-0.06232 0.2029748,-0.03067 0.4578532,0.07131 1.2529714,0.50134 1.66289,0.06694 0.8407755,-0.890901 -0.8087376,-0.942252 -0.808927,-0.942131 0.190686,-0.805119 0.5192364,0.07117 0.9348804,0.559396 1.4174848,1.665531 0.124197,0.284661 0.165688,0.306131 0.338997,0.175183 0.534324,-0.403721 0.818038,-0.733178 0.818038,-0.949296 0,-0.131172 0.06007,-0.298817 0.133842,-0.372587 0.103588,-0.103588 -0.0078,-0.346398 -0.489893,-1.066601 -1.1820655,-1.766028 -1.1243354,-1.603391 -0.974617,-2.747636 0.145853,-1.114698 0.184778,-1.172106 0.800468,-1.174606 0.416987,-0.0017 0.438437,-0.02229 0.769462,-0.729671 0.567129,-1.211926 0.502809,-1.321371 -0.91674,-1.55546 -1.4796908,-0.244008 -2.6001974,-0.763473 -2.238623,-1.037663 0.02055,-0.01558 0.3300792,-0.192692 0.6872966,-0.393775 1.5774664,-0.887979 2.1289684,-6.564237 0.6294189,-6.478157 -0.8534309,0.04899 -0.9329446,0.134953 -1.88774,2.041736 C 6.6824021,61.129169 5.6080797,62.054379 5.3800334,60.980774 5.3363066,60.774915 5.1910091,60.612987 4.9485352,60.5007 4.6339294,60.35501 4.5452379,60.213707 4.3103312,59.485258 4.0934837,58.812811 3.8376917,58.375051 3.0680298,57.357222 2.0104208,55.958602 1.9555982,55.944013 1.9135783,57.058016 1.8642901,58.364701 1.7893123,58.352804 1.2464355,56.948979 0.93217299,56.136327 0.7842196,55.72421 0.6836792,55.781091 Z"
				on:mousemove={(e) => showTooltip(e, `Head: ${hitzoneValues['Head']}`)}
				on:mouseout={(e) => hideTooltip()}
				style="fill: {hitzoneColors['Head']}"
				id="path180"><title id="title188"></title></path
			><path
				d="m 22.701973,51.140031 c -0.409609,-0.0087 -0.823308,0.115999 -1.225765,0.383956 -1.259163,0.838356 -1.139528,0.621682 -1.452107,2.631364 -0.07522,0.483601 -0.07522,0.484044 -0.953947,-0.944129 -0.483302,-0.785494 -0.929167,-1.478487 -0.990637,-1.539957 -0.07376,-0.07376 -0.620691,0.565742 -1.608171,1.881539 -1.496193,1.993647 -1.496019,1.993535 -1.778703,1.479496 -0.346855,-0.630728 -0.274854,-0.634328 -1.215429,0.06666 -1.756327,1.308951 -2.567346,2.267623 -2.436027,2.878894 0.06249,0.290928 0.04882,0.509453 -0.04082,0.660425 -0.09816,0.165297 -0.110185,0.649011 -0.04548,1.806092 0.1083,1.93649 -0.158221,2.686811 -1.0903728,3.070096 -0.5551646,0.228275 -0.5990499,0.309305 -0.2635498,0.488859 0.1671425,0.08945 2.4666776,0.551673 2.7869096,0.560173 0.718841,0.01907 -0.532121,3.048393 -1.258838,3.048393 -0.572018,0 -0.631486,0.08672 -0.631486,0.921391 0,0.517484 0.0722,0.671785 0.874366,1.856734 0.874779,1.292211 0.874926,1.292036 1.382861,1.231966 0.279365,-0.03304 1.778003,-0.189086 3.330029,-0.346749 9.423414,-0.957278 10.779474,-1.731591 10.200411,-5.8229 -0.142536,-1.007077 -0.142077,-1.007146 0.181901,-1.653129 0.315588,-0.62925 0.326265,-0.708745 0.411345,-3.072681 0.04804,-1.334744 0.161084,-2.807578 0.251664,-3.273185 0.164694,-0.84656 0.165053,-0.846877 -0.179317,-1.693437 -0.414045,-1.017837 -0.475095,-1.09546 -0.705384,-0.904338 -0.202422,0.167996 -0.189961,0.178784 -0.364318,-0.316259 -0.756667,-2.148355 -1.950307,-3.373268 -3.179135,-3.399276 z"
				on:mousemove={(e) => showTooltip(e, `Neck: ${hitzoneValues['Neck']}`)}
				on:mouseout={(e) => hideTooltip()}
				style="fill: {hitzoneColors['Neck']}"
				id="path179"><title id="title189"></title></path
			><path
				d="m 52.452612,36.366256 c -1.133056,-0.05507 -2.325124,0.104262 -3.493843,0.491959 -3.954208,1.311724 -3.351791,0.757662 -4.654497,4.275192 -1.290234,3.483855 -1.155022,3.22124 -1.765266,3.442683 -0.486774,0.17664 -0.50411,0.201782 -1.372527,1.974557 -1.194623,2.438694 -1.259614,2.344069 -0.770495,-1.12758 0.450447,-3.197178 0.931548,-2.823956 -3.389974,-2.633948 -3.629562,0.159585 -3.629461,0.159921 -4.261239,1.627291 -0.819333,1.902989 -1.283113,2.637624 -2.705261,4.28656 -2.472533,2.866828 -3.163944,4.822226 -2.352311,6.654375 0.680451,1.536023 0.680454,1.535772 0.428914,2.662369 -0.174443,0.781296 -0.263682,1.614 -0.291972,2.716114 -0.06306,2.456165 -0.144248,3.015623 -0.522448,3.615283 -0.325398,0.515936 -0.326684,0.527779 -0.200505,1.376143 0.09387,0.63086 0.09416,1.045377 0.0015,1.577165 -0.06908,0.396727 -0.125573,0.780658 -0.125573,0.853178 0,0.217764 0.09121,0.165406 1.224731,-0.695565 0.598856,-0.454862 2.124376,-1.479004 3.389974,-2.27583 1.972355,-1.241805 2.536787,-1.664494 3.950663,-2.961576 1.053812,-0.966761 1.894326,-1.638592 2.32699,-1.859835 1.39296,-0.712286 1.945835,-1.175353 2.581755,-2.161109 2.678022,-4.151272 9.267491,-7.463535 12.802836,-6.435782 0.632866,0.183978 0.632864,0.183752 1.71049,-0.956014 1.077626,-1.139767 1.077803,-1.139609 2.488737,-1.694987 1.960515,-0.771709 1.996754,-1.000258 0.519865,-3.264401 -1.010593,-1.549287 -1.010417,-1.549223 -0.830441,-4.483964 0.099,-1.614107 0.14554,-2.969469 0.10387,-3.012219 -1.181128,-1.211749 -2.905595,-1.898276 -4.794023,-1.990059 z"
				on:mousemove={(e) => showTooltip(e, `Back: ${hitzoneValues['Back']}`)}
				on:mouseout={(e) => hideTooltip()}
				style="fill: {hitzoneColors['Back']}"
				id="path178"><title id="title190"></title></path
			></g
		><metadata id="metadata17"
			><rdf:RDF>
				<!-- svelte-ignore illegal-attribute-character -->
				<cc:License
					rdf:about="http://creativecommons.org/licenses/by-nc-sa/4.0/"
					><cc:permits
						rdf:resource="http://creativecommons.org/ns#Reproduction"
					/><cc:permits
						rdf:resource="http://creativecommons.org/ns#Distribution"
					/><cc:requires
						rdf:resource="http://creativecommons.org/ns#Notice"
					/><cc:requires
						rdf:resource="http://creativecommons.org/ns#Attribution"
					/><cc:prohibits
						rdf:resource="http://creativecommons.org/ns#CommercialUse"
					/><cc:permits
						rdf:resource="http://creativecommons.org/ns#DerivativeWorks"
					/><cc:requires
						rdf:resource="http://creativecommons.org/ns#ShareAlike"
					/></cc:License
				>
				<!-- svelte-ignore illegal-attribute-character -->
				<cc:Work rdf:about=""
					><cc:license
						rdf:resource="http://creativecommons.org/licenses/by-nc-sa/4.0/"
					/><dc:creator
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
