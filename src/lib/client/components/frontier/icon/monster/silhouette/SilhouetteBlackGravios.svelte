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
			></defs
		>
		<!-- svelte-ignore a11y-no-static-element-interactions -->
		<!-- svelte-ignore a11y-mouse-events-have-key-events -->
		<g id="layer1" style="stroke: var(--ctp-mocha-surface1); stroke-width: 1.0;"
			><path
				d="m 107.06478,64.854439 c -0.0505,-0.01 -0.11516,-0.0072 -0.19378,0.0052 -0.20967,0.03311 -0.51986,0.135361 -0.93535,0.251147 -1.30667,0.364143 -1.30678,0.364186 -1.80816,1.571481 -0.80454,1.937311 -2.32206,4.196502 -2.89026,4.303096 -0.61806,0.115949 -0.67445,0.310558 0.78342,-2.688725 0.72005,-1.481358 1.26531,-2.711216 1.21181,-2.733166 -0.0535,-0.02195 -0.54202,0.165308 -1.08572,0.416512 -0.54369,0.251203 -1.08694,0.45682 -1.20716,0.45682 -0.30558,0 -0.45503,0.197473 -1.801962,2.372981 -1.464048,2.364663 -1.470901,2.372465 -2.002979,2.372465 -0.572915,0 -0.574998,0.0078 0.590662,-2.436543 0.555053,-1.163926 0.994071,-2.131913 0.975651,-2.150773 -0.632581,-0.647607 -2.279492,0.257734 -3.470589,1.907893 -1.408925,1.951938 -1.220942,1.825519 -2.930054,1.97249 -1.004528,0.08638 -1.041658,0.228425 0.467155,-1.770952 0.882538,-1.169483 0.903334,-1.073235 -0.265617,-1.212845 -1.072194,-0.128055 -1.180855,-0.06523 -1.088305,0.624768 0.07559,0.563568 0.05236,0.573771 -0.79065,0.348299 -0.531221,-0.142081 -0.617337,-0.12811 -1.221114,0.200504 -0.704494,0.383436 -2.079031,-0.265371 -1.652095,-0.779797 0.157919,-0.190284 -0.04006,-0.428094 -0.342615,-0.411344 -1.332963,0.07378 -2.056458,0.842436 -2.769857,2.942972 -0.394585,1.161816 -0.769611,2.095556 -0.833541,2.075326 -0.06393,-0.02023 -0.837513,-0.573566 -1.719275,-1.229382 -0.881761,-0.655818 -1.672498,-1.232179 -1.756998,-1.281059 -0.516799,-0.298988 -2.537089,0.188937 -2.988965,0.72192 -1.309747,1.544824 -1.589298,2.543066 -0.763778,2.724381 0.229756,0.05046 0.415069,0.240689 0.596863,0.612883 1.353998,2.772097 5.761962,5.636324 11.02465,7.163387 2.869457,0.832625 2.90299,0.844598 2.80603,1.001489 -0.03533,0.05716 0.244718,0.09643 0.622701,0.08733 1.838009,-0.0444 2.766557,0.886993 2.348177,2.355929 -0.235391,0.826467 -0.171027,1.251011 0.315227,2.08256 0.535524,0.915808 0.442867,0.944805 1.23455,-0.382922 0.368035,-0.617235 0.721551,-1.203147 0.785481,-1.302247 0.09742,-0.151008 0.232081,-0.13301 0.833541,0.111105 0.838351,0.340261 0.809801,0.19656 0.579293,2.89388 -0.138492,1.620588 -0.138418,1.620753 0.189136,2.093412 0.365929,0.528039 1.458678,1.637373 1.527038,1.550293 0.02423,-0.03087 0.333916,-1.325442 0.687809,-2.877344 0.92272,-4.046141 1.77105,-4.202906 2.43241,-0.449068 0.41803,2.372741 0.41839,2.372857 1.34669,3.206523 0.51056,0.458515 0.98975,0.903597 1.06505,0.989087 0.2816,0.319635 0.35302,0.140927 0.28112,-0.700733 -0.0407,-0.47615 -0.11108,-1.984393 -0.15658,-3.351733 -0.0896,-2.689271 -0.12662,-2.559964 0.58963,-2.045353 0.17635,0.126707 0.63506,0.390242 1.01958,0.585494 0.55421,0.28142 0.72901,0.447185 0.84387,0.800468 0.12945,0.39814 0.25324,0.489962 1.16066,0.859896 1.3879,0.56582 1.32161,0.606398 1.12964,-0.691948 -0.20367,-1.377563 -0.32643,-1.31741 1.27021,-0.622184 0.73997,0.322202 1.3768,0.585494 1.4149,0.585494 0.37353,0 -1.42549,-3.595786 -2.11822,-4.23385 -0.76246,-0.702284 -0.76614,-0.708945 -0.50798,-0.942578 0.35253,-0.319036 0.4589,-0.222348 1.04852,0.950329 0.50134,0.99713 0.51993,1.015263 1.18339,1.203028 1.43914,0.407287 1.42384,0.407215 1.35134,0.02791 -0.0823,-0.430703 -0.10351,-0.434525 1.00459,0.173633 0.51412,0.282162 0.96652,0.513147 1.00562,0.513147 0.1958,0 -1.34994,-2.224996 -2.06292,-2.969328 -0.44953,-0.469294 -0.81811,-0.931254 -0.81907,-1.026294 -9e-4,-0.09503 -0.0354,-0.298317 -0.0765,-0.451652 -0.25558,-0.952887 0.84206,-1.077163 3.13262,-0.355017 2.12202,0.669006 3.77781,0.834318 4.19303,0.419096 0.27242,-0.272419 -1.51646,-1.235905 -3.15795,-1.701189 -2.0125,-0.570444 -1.90191,-0.520611 -1.82211,-0.825789 0.0576,-0.22033 0.24747,-0.24524 2.26446,-0.30024 2.13937,-0.05834 3.16363,-0.261954 3.16363,-0.627869 0,-0.322322 -1.41494,-0.883763 -2.26033,-0.897102 -2.27054,-0.03583 -2.48979,-0.126485 -1.61178,-0.667143 1.01704,-0.626273 1.03073,-0.600889 -0.56276,-1.033529 -1.35555,-0.368038 -1.35527,-0.368075 -1.01131,-0.727087 0.18915,-0.197458 0.30495,-0.422245 0.25735,-0.499195 -0.0476,-0.07695 0.038,-0.298137 0.19017,-0.491442 0.27672,-0.351473 0.27691,-0.351333 -0.34416,-0.434083 -1.79996,-0.239821 -1.69806,-0.249575 -2.20711,0.210324 -0.45086,0.407335 -2.01843,1.069445 -1.84743,0.780314 0.045,-0.07612 0.3975,-0.628752 0.78342,-1.228349 1.76922,-2.748845 1.73794,-2.437061 0.24391,-2.437061 -1.32347,0 -1.32345,1.1e-5 -2.28048,1.091407 -0.93478,1.066028 -1.33904,1.272443 -1.76268,0.89917 -0.0199,-0.0175 0.31808,-0.63117 0.75085,-1.363742 1.49005,-2.522232 2.36987,-4.740675 1.87121,-4.718575 -1.79415,0.07952 -2.11407,0.317251 -3.6897,2.745053 -1.37012,2.111135 -2.38119,3.210587 -1.98592,2.159558 0.0488,-0.129654 0.64143,-1.608729 1.31671,-3.287138 0.93438,-2.322444 1.2637,-3.014015 0.91002,-3.08405 z"
				on:mousemove={(e) => showTooltip(e, `Tail: ${hitzoneValues['Tail']}`)}
				on:mouseout={(e) => hideTooltip()}
				style="fill: {hitzoneColors['Tail']}"
				id="path268"><title id="title273"></title></path
			><path
				d="m 92.878569,44.994153 c -0.09416,-0.03576 -0.44348,0.210568 -1.120346,0.711068 -1.125504,0.83224 -1.125422,0.83212 -4.085022,1.568379 -2.798395,0.69616 -3.010266,0.770026 -3.884,1.356507 -0.508237,0.341144 -1.019972,0.620634 -1.137398,0.620634 -0.86405,0 -6.510955,4.713661 -5.906617,4.930448 0.441037,0.15821 0.4266,0.27776 -0.04496,0.37207 -0.23962,0.04793 -0.35901,0.138012 -0.31936,0.241329 0.03616,0.09425 -0.15674,0.301228 -0.451136,0.483175 -0.630029,0.389375 -0.630835,0.334714 0.0124,1.436088 0.527457,0.903133 0.52781,0.903579 -0.592729,2.029333 -1.161499,1.166905 -1.224706,1.330655 -0.565857,1.475363 0.585305,0.128553 0.581705,0.209095 -0.142627,3.296956 -0.368616,1.57142 -0.677246,2.894709 -0.685746,2.940389 -0.0085,0.04568 0.417655,0.616887 0.946712,1.26969 1.195506,1.475134 1.211369,1.502332 1.018026,1.735294 -0.272957,0.328893 -0.06071,0.34048 2.255676,0.123507 2.555567,-0.239378 2.109652,-0.380924 4.614189,1.463993 0.564327,0.415702 1.05641,0.759928 1.09399,0.765328 0.03758,0.0054 0.288505,-0.882483 0.557588,-1.973523 0.667719,-2.707346 1.825853,-3.217684 4.873605,-2.147672 1.031453,0.362126 1.875347,0.61704 1.875337,0.56689 -9e-6,-0.05015 -0.143559,-0.552918 -0.318843,-1.117244 -0.415661,-1.338218 -0.448613,-1.234278 0.535368,-1.662948 0.857514,-0.373569 0.857511,-0.373623 2.020031,0.02429 1.387614,0.474957 1.343806,0.496133 0.834575,-0.406176 -0.224796,-0.398317 -0.387398,-0.737363 -0.361218,-0.753443 0.680294,-0.417762 1.188575,-0.551353 1.74718,-0.459403 1.205174,0.198369 1.307815,0.172326 1.228865,-0.314193 -0.112803,-0.695121 0.634361,-1.100615 1.511536,-0.820105 0.626331,0.200294 0.626318,0.200043 0.626318,-0.280603 0,-0.635481 0.187423,-0.713475 2.544029,-1.057817 2.21343,-0.32342 2.05939,-0.252698 1.64021,-0.750858 -0.18513,-0.220015 -0.33626,-0.438785 -0.33589,-0.486275 0.004,-0.457761 7.93361,-4.219582 12.76097,-6.053378 5.87549,-2.231949 5.34974,-1.979548 4.88808,-2.34766 -0.36011,-0.287146 -0.35998,-0.287147 3.40392,-3.348633 2.07016,-1.683816 3.82177,-3.118072 3.89227,-3.187402 0.25217,-0.247858 -0.43108,0.0329 -5.82807,2.395719 -6.10545,2.673009 -5.8888,2.616316 -7.38249,1.939933 -1.37227,-0.621404 -2.73664,-0.999915 -3.35535,-0.930175 -0.43214,0.04871 -0.52154,0.02453 -0.46354,-0.126608 0.061,-0.158839 -0.14455,-0.18089 -1.35495,-0.14366 -1.42712,0.0439 -1.42752,0.04385 -0.18139,-1.206645 0.68537,-0.687773 1.21249,-1.250053 1.17099,-1.250053 -0.0415,0 -1.05452,0.489491 -2.25103,1.087789 -2.4938,1.246998 -2.23498,1.241816 -6.71121,0.133842 -1.23447,-0.305558 -2.763894,-0.651843 -3.398764,-0.769462 -0.634868,-0.117619 -1.247063,-0.262978 -1.36064,-0.322978 -0.13329,-0.07041 -0.995957,0.0894 -2.433444,0.450619 -2.619144,0.658156 -2.462327,0.703472 -1.790071,-0.521415 0.344058,-0.626884 0.504987,-0.944542 0.410828,-0.980302 z"
				on:mousemove={(e) => showTooltip(e, `Wings: ${hitzoneValues['Wings']}`)}
				on:mouseout={(e) => hideTooltip()}
				style="fill: {hitzoneColors['Wings']}"
				id="path267"><title id="title276"></title></path
			><path
				d="m 70.248425,35.91202 c -0.574844,0 -3.276152,0.439837 -3.380155,0.550354 -0.08025,0.08528 -1.658179,2.393068 -3.506246,5.128886 -1.848067,2.735817 -3.484861,5.05521 -3.637504,5.15369 -0.405378,0.261531 -3.856914,2.111954 -3.883484,2.082044 -0.378151,-0.425664 0.22587,-1.067479 1.184941,-1.259355 1.505252,-0.301147 1.513986,-0.319352 0.208256,-0.422713 -1.132279,-0.08963 -1.183222,-0.106883 -1.120862,-0.373104 0.107027,-0.456915 0.962901,-6.796832 0.922941,-6.836792 -0.02024,-0.02024 -0.691702,0.17196 -1.491899,0.426847 -1.738186,0.553667 -1.275653,-0.136786 -3.842142,5.736601 -2.013302,4.607422 -2.013327,4.60723 -3.418913,4.981091 -1.534385,0.408119 -2.463303,1.802099 -1.894458,2.842721 1.091213,1.996222 1.093592,1.996872 2.6479,0.377238 1.15294,-1.201397 5.215702,-1.521901 5.215702,-0.411344 0,0.05613 -0.834381,1.509687 -1.85415,3.229777 -2.034228,3.431221 -2.202733,5.493947 -0.460437,5.634281 0.320772,0.02583 0.713666,0.05756 0.873332,0.07028 0.159665,0.01272 0.935012,-0.265346 1.722892,-0.61805 1.43251,-0.64128 1.432353,-0.641372 3.108337,-0.643372 2.807734,-0.0033 5.50994,-0.38354 7.255371,-1.020609 2.622006,-0.957014 4.781757,-1.211209 6.913274,-0.813904 2.500713,0.46612 4.435296,-1.302175 3.448885,-3.152779 -0.60378,-1.132746 -0.603743,-1.13294 -0.08733,-1.365808 0.360609,-0.162612 0.499503,-0.296477 0.460953,-0.443901 -0.03037,-0.116115 0.01938,-0.313483 0.110588,-0.438216 0.09121,-0.124734 0.137022,-0.301478 0.101802,-0.393258 -0.03522,-0.09178 0.170896,-0.355921 0.457854,-0.586527 0.677882,-0.544761 0.654177,-0.570263 -2.660303,-2.886129 -0.02188,-0.01529 0.854018,-1.88428 1.946651,-4.153235 1.231603,-2.557541 1.929307,-4.143825 1.835547,-4.173905 -0.872021,-0.279756 -2.217559,-0.294012 -2.470133,-0.02636 -0.146618,0.155374 -1.321078,1.422147 -2.610177,2.815332 -2.527789,2.731892 -2.427294,2.65502 -2.960543,2.275313 -0.353529,-0.251733 -0.386421,-0.25315 -1.345654,-0.04237 -1.612601,0.354343 -1.610491,0.238161 0.06718,-4.193542 1.345266,-3.553626 2.407317,-7.049182 2.141988,-7.049182 z"
				on:mousemove={(e) => showTooltip(e, `Back: ${hitzoneValues['Back']}`)}
				on:mouseout={(e) => hideTooltip()}
				style="fill: {hitzoneColors['Back']}"
				id="path265"><title id="title272"></title></path
			><path
				d="m 60.234566,31.975309 c -0.02403,-0.02403 -2.346881,0.132049 -5.161442,0.347266 -8.239278,0.630022 -7.416003,0.614712 -7.610905,0.144177 -0.221407,-0.534524 0.113277,-0.622921 -4.818827,1.27124 -7.168892,2.753194 -12.03812,3.746235 -13.879773,2.830319 -1.324154,-0.658547 -1.32422,-0.658574 -1.884123,0.54777 -0.637508,1.373549 -0.909987,1.550702 -1.807641,1.175639 -0.612037,-0.255727 -0.574642,-0.271214 -0.574642,0.244429 0,0.646017 -0.724292,0.86982 -1.512569,0.467672 -0.669964,-0.34179 -0.620977,-0.354436 -0.803052,0.21084 -0.364972,1.133101 -1.084352,1.319253 -2.165759,0.560689 -0.7653,-0.53683 -0.765549,-0.536882 -0.803569,0.314709 -0.06052,1.355683 -1.026265,1.654098 -3.099552,0.957565 -2.434425,-0.817859 -2.262529,-0.868496 -1.982825,0.584977 0.13161,0.68393 0.224015,1.249371 0.205155,1.256771 -0.01886,0.0074 -0.52488,0.250889 -1.124479,0.541052 -1.09018,0.52757 -1.090342,0.527818 -3.8235391,-0.04599 -3.2758123,-0.687728 -3.132182,-0.778216 -1.6867187,1.062467 1.1800214,1.502664 1.1798934,1.502494 0.9637654,2.223121 -0.2537527,0.846077 0.8372542,3.610149 1.4918984,3.779614 0.289153,0.07485 0.873849,0.792813 0.873849,1.072803 0,0.547741 -0.858245,0.669615 -2.1419884,0.304374 -1.2567284,-0.357559 -1.2564663,-0.357604 -1.7518311,-0.04548 -0.3610313,0.227485 -0.9281175,0.379761 -2.0908284,0.56069 -1.5953358,0.248248 -1.5950933,0.248046 -3.1936035,1.547709 -1.8925355,1.538718 -1.89034028,1.492094 -0.055294,0.981335 2.3319858,-0.649074 3.607038,-0.38998 5.4585815,1.110527 1.5796907,1.280194 1.6273481,1.296574 3.2080727,1.097607 2.679237,-0.337237 3.870146,-0.06757 3.135209,0.709518 -0.547923,0.579346 -0.644405,0.756166 -0.644405,1.183907 0,0.276541 -0.03725,0.776847 -0.0832,1.112077 -0.08354,0.609514 -0.08376,0.609614 0.288355,0.535884 0.204666,-0.04055 0.634694,-0.109669 0.955497,-0.153479 0.462945,-0.06322 0.925807,-0.322568 2.244307,-1.257804 3.176955,-2.253473 2.262631,-1.989447 8.587073,-2.482536 3.033263,-0.23649 5.873894,-0.401403 6.312276,-0.366903 0.797059,0.06273 0.797203,0.06269 1.154452,-0.44235 0.455283,-0.643625 0.436031,-0.649316 0.867647,0.253731 0.730616,1.528626 1.089526,1.330864 1.108976,-0.610815 0.04208,-4.200084 0.04724,-4.221695 1.28571,-5.392953 1.351579,-1.278225 2.378575,-0.563514 2.566252,1.785421 0.162164,2.029634 0.718028,2.821194 1.555977,2.215886 2.016912,-1.456955 1.822111,-1.009157 1.822111,-4.191476 0,-1.81178 0.05043,-2.927873 0.13901,-3.077331 0.06745,-0.113816 0.713453,-0.517975 1.488798,-0.978752 0.163257,-0.200489 0.329057,-0.307425 0.487308,-0.283704 1.5929,-0.923916 3.547982,-1.972754 3.606499,-1.860351 0.385185,0.739912 0.378662,2.109265 -0.0217,4.495849 -0.480596,2.864831 -0.740196,2.62196 2.141988,2.00763 0.0273,-0.0058 2.207889,-5.1761 2.252059,-5.339726 0.08542,-0.316416 -2.477887,-3.00085 -2.865459,-3.00085 -0.462178,0 -0.459485,-0.06685 0.01809,-0.468706 0.381604,-0.321097 0.50108,-0.726954 0.258382,-0.876949 -0.631992,-0.390593 2.697095,-2.231371 6.025989,-3.332096 2.553511,-0.844339 3.38451,-1.198489 2.437061,-1.038179 -3.510184,0.593928 -6.231993,0.722215 -7.222815,0.34003 -0.19858,-0.0766 -0.620965,-0.139526 -0.938444,-0.139526 -0.616731,0 -0.944801,-0.127797 -1.339453,-0.522449 -0.15463,-0.154635 -0.424086,-0.247013 -0.721403,-0.247013 -0.88366,0 -0.243338,-0.210934 3.873665,-1.277958 7.232711,-1.874536 9.040493,-2.357261 8.995833,-2.401921 z"
				on:mousemove={(e) => showTooltip(e, `Wings: ${hitzoneValues['Wings']}`)}
				on:mouseout={(e) => hideTooltip()}
				style="fill: {hitzoneColors['Wings']}"
				id="path264"><title id="title275"></title></path
			><path
				d="m 43.734281,45.637524 c -0.167513,0.09716 -0.331784,0.191278 -0.487308,0.283704 -0.524358,0.643939 -1.011617,2.305196 -1.050582,4.190442 -0.03752,1.815246 -0.117197,3.152322 -0.192237,3.222542 -0.210386,0.196876 -3.169848,2.088514 -3.202388,2.046904 -0.335515,-0.429078 -1.079952,-2.508833 -1.138432,-3.180685 -0.336255,-3.862992 -2.578216,-2.321383 -2.704744,1.859835 -0.165916,5.482803 -0.17885,5.603006 -0.588078,5.300452 -0.233379,-0.172545 -0.38769,-0.429352 -0.43925,-0.731222 -0.331722,-1.942357 -1.063416,-2.511359 -1.855184,-1.443322 -0.678487,0.915228 -0.736448,1.088465 -0.529683,1.581298 0.377402,0.899553 0.51104,5.258385 0.174666,5.699394 -0.428618,0.561947 -0.36534,0.580599 -1.812809,-0.531234 -1.474618,-1.132687 -1.315213,-1.094937 -1.809192,-0.42323 -0.635581,0.864256 -0.567154,1.066944 0.790649,2.347144 1.111836,1.048291 1.19445,1.162001 1.314649,1.807641 0.121632,0.653343 0.788349,0.512344 1.823661,-0.385506 0.01541,-0.01337 0.192989,-1.269515 0.394808,-2.791044 0.668453,-5.039537 1.345059,-5.051026 2.454631,-0.04186 0.296883,1.340279 0.570275,2.544157 0.607715,2.675289 0.05933,0.207798 1.489742,0.980302 1.815393,0.980302 0.06162,0 0.497292,-0.340066 0.967899,-0.755509 1.164522,-1.028019 1.269192,-1.041273 1.81591,-0.229444 0.545529,0.810069 0.545965,0.729878 -0.0217,2.14819 -0.512282,1.279927 -0.353744,2.181436 0.460954,2.624646 0.43646,0.237441 0.419042,0.241689 0.839225,-0.196888 0.368633,-0.384769 0.368572,-0.384989 2.262394,-0.384989 1.893821,0 1.893697,3.71e-4 2.027267,-0.480591 0.294602,-1.060813 0.08555,-1.34183 -1.164787,-1.565279 -0.931415,-0.166453 -0.931664,-0.166513 -0.44235,-0.417546 0.27607,-0.141662 0.53776,-0.202763 0.60048,-0.140043 0.06272,0.06272 0.992797,0.04294 2.13372,-0.04548 1.112207,-0.08619 2.122324,-0.160548 2.244824,-0.164848 0.209192,-0.0074 0.528207,-0.577502 0.681612,-1.21853 0.07574,-0.31648 -0.647293,-0.841292 -1.159102,-0.841292 -0.442701,0 -0.424548,-0.04641 0.426847,-1.079004 1.262221,-1.530852 1.65992,-2.790984 1.30483,-4.135148 -0.29579,-1.119683 0.460008,-2.991198 2.462899,-6.097819 0.773686,-1.20004 0.797683,-1.156673 -0.798401,-1.449524 -1.296267,-0.237841 -1.296071,-0.237835 -2.825668,1.287776 -0.930476,0.928052 -1.573336,1.476925 -1.640726,1.401465 -1.762964,-1.974237 -1.774371,-2.046117 -1.002006,-6.268351 0.687516,-3.7584 0.812003,-4.881592 0.614949,-5.555733 -0.127611,-0.436569 -2.552206,0.983798 -2.676322,1.567863 -0.08177,0.384765 -0.08169,0.384731 -0.226343,0.03101 -0.132073,-0.322963 -0.287757,-0.477057 -0.452686,-0.501779 z"
				on:mousemove={(e) => showTooltip(e, `Neck: ${hitzoneValues['Neck']}`)}
				on:mouseout={(e) => hideTooltip()}
				style="fill: {hitzoneColors['Neck']}"
				id="path263"><title id="title277"></title></path
			><path
				d="m 33.528186,61.212801 c 0.262319,-0.03627 0.571549,1.054811 1.040247,3.257682 0.312675,1.469567 0.600643,2.806252 0.640271,2.970878 0.267223,1.110132 2.160539,1.299441 3.158463,0.315743 1.088215,-1.072701 1.143251,-1.08507 1.574581,-0.357084 0.303263,0.511837 0.303068,0.511642 -0.268717,1.794206 -0.721477,1.618334 -0.278421,2.913366 1.054716,3.08405 1.585379,0.202978 2.054472,0.441044 2.176094,1.103291 0.08586,0.467542 0.08537,0.46719 -0.979268,0.811837 -1.007481,0.32614 -1.780253,0.657428 -1.780253,0.762744 0,0.02622 0.779373,0.238988 1.731677,0.47284 2.064684,0.507011 2.025175,0.366777 0.401526,1.432987 -1.937927,1.272587 -2.093982,1.756547 -0.919841,2.849439 0.963778,0.897085 1.022583,1.175192 0.271818,1.287776 -0.318389,0.04775 -0.644268,0.165429 -0.723986,0.261483 -0.120866,0.145636 -0.229766,0.131551 -0.655774,-0.08578 -0.564771,-0.288125 -1.177181,-0.241389 -1.370976,0.104903 -0.08031,0.143505 -0.222268,0.180029 -0.49196,0.126091 -0.742578,-0.148516 -1.353947,0.387566 -1.528072,1.340486 -0.208384,1.140415 -0.06683,1.386242 0.533818,0.928109 0.528041,-0.402756 0.533904,-0.363539 0.128157,0.829407 -0.253015,0.743895 -0.526958,1.183715 -1.396297,2.24069 -0.692684,0.842192 -1.313546,1.774546 -1.72651,2.59209 -1.499451,2.96847 -1.319539,2.90947 -2.064473,0.674377 -0.530805,-1.592622 -0.861716,-2.324511 -1.703255,-3.765661 -1.02715,-1.759014 -1.61548,-3.706106 -1.00614,-3.329513 0.120999,0.07478 0.124659,0.03658 0.01602,-0.166398 -0.07758,-0.144958 -0.141076,-0.518268 -0.141076,-0.829407 0,-0.656505 -0.277619,-0.99012 -0.823723,-0.99012 -0.251328,0 -0.374804,-0.07803 -0.424263,-0.267167 -0.05275,-0.201734 -0.135743,-0.246868 -0.340548,-0.185519 -0.712909,0.213552 -1.182255,0.219537 -1.350305,0.01705 -0.09389,-0.113127 -0.24844,-0.205673 -0.343132,-0.205673 -0.468069,0 -0.471436,-0.53137 -0.0067,-1.008207 0.942181,-0.966776 0.812251,-2.018856 -0.436149,-3.533634 -0.97213,-1.17956 -0.999418,-1.229567 -0.668176,-1.230416 0.168927,-4.33e-4 0.230828,-0.118565 0.249597,-0.47749 0.02778,-0.5313 0.296897,-0.804602 0.7922,-0.804602 1.179335,0 2.386196,-0.734974 1.684135,-1.025778 -0.295783,-0.122518 -0.38499,-0.241132 -0.38499,-0.51263 0,-0.592775 0.151887,-1.154968 0.312126,-1.154968 0.60004,0 0.641887,-0.325568 0.155029,-1.211296 -0.47412,-0.862555 -0.474224,-0.862529 -0.18035,-1.395263 0.412238,-0.74731 0.601465,-0.728841 1.697054,0.166398 0.960175,0.784587 0.960097,0.784776 1.956986,0.118339 0.54829,-0.36654 1.005897,-0.672002 1.016476,-0.679029 0.01058,-0.007 0.173967,-1.276238 0.363285,-2.820499 0.282795,-2.306768 0.498358,-3.470497 0.760677,-3.506763 z"
				on:mousemove={(e) => showTooltip(e, `Head: ${hitzoneValues['Head']}`)}
				on:mouseout={(e) => hideTooltip()}
				style="fill: {hitzoneColors['Head']}"
				id="path262"><title id="title271"></title></path
			><path
				d="m 73.339709,72.140299 c 0.219469,0.03818 0.646747,0.281478 1.53169,0.773597 0.824518,0.458515 1.566633,0.833541 1.648995,0.833541 0.131522,0 1.588017,2.385445 1.588017,2.600874 0,0.04568 -0.671344,-0.232219 -1.491382,-0.617533 -0.820038,-0.385315 -1.549137,-0.700732 -1.620573,-0.700732 -0.251034,0 0.03092,1.379277 0.580843,2.840136 0.548365,1.456708 0.548525,1.456474 0.481624,4.593518 -0.06121,2.870303 -0.04643,3.180883 0.171566,3.655074 0.13104,0.285044 0.511295,1.354513 0.845427,2.3766 0.601396,1.839631 0.613341,1.861598 1.161686,2.182295 0.493051,0.28836 0.578179,0.410723 0.775663,1.111044 0.122025,0.432726 0.485825,1.294624 0.808219,1.915645 0.66677,1.284376 0.660646,1.193142 0.07752,1.194759 -2.127464,0.0059 -2.393979,-0.04556 -3.037024,-0.586527 -0.8514,-0.716252 -1.527625,-0.536801 -2.058789,0.546219 -0.198742,0.405227 -0.424105,0.692465 -0.543636,0.692465 -0.112279,0 -0.266492,0.06185 -0.342615,0.137976 -0.568744,0.568743 -1.880026,0.260905 -2.2934,-0.538469 -0.240974,-0.46599 -1.010579,-0.541533 -1.1467,-0.112654 -0.05944,0.187288 -0.193914,0.256315 -0.498677,0.256315 -0.264407,0 -0.602254,0.139899 -0.921391,0.381372 -0.796447,0.602621 -1.081071,0.53489 -1.081071,-0.257866 0,-1.356268 -0.327989,-1.66243 -1.783354,-1.66243 -1.265434,0 -1.265332,6.3e-5 -1.422135,-0.830957 -0.201258,-1.066624 -0.213784,-1.009772 0.248047,-1.144117 0.217956,-0.0634 0.710384,-0.390435 1.094506,-0.72657 0.384123,-0.336138 1.041219,-0.822155 1.45986,-1.080555 1.102443,-0.680466 1.438431,-1.177285 1.910994,-2.823083 0.47639,-1.659124 0.717586,-4.390689 0.376205,-4.259688 -0.101166,0.03882 -0.450761,0.110725 -0.777214,0.15968 -0.345804,0.05186 -0.593762,0.156723 -0.593762,0.251147 0,0.180753 -2.058019,0.745667 -2.332674,0.640271 -0.115219,-0.04421 -0.469767,0.586815 -1.117245,1.988509 -0.521742,1.129501 -0.968358,2.053622 -0.992187,2.053622 -0.162359,0 -0.974616,-1.054662 -1.135848,-1.474846 -0.179132,-0.466829 -0.175816,-0.677343 0.03824,-2.340425 0.129378,-1.005208 0.195016,-1.827796 0.145728,-1.827796 -0.04929,0 -0.296596,0.08642 -0.549837,0.192237 -0.640682,0.267694 -0.776138,0.24461 -0.540019,-0.0925 0.220489,-0.314792 0.280904,-1.701823 0.07958,-1.826245 -1.140489,-0.70486 -0.417067,-2.55288 1.187007,-3.032373 2.653121,-0.793076 2.464085,-0.772511 3.364653,-0.368453 0.808115,0.362576 0.808247,0.362914 1.426269,-0.07648 0.339913,-0.241669 0.75118,-0.43925 0.914156,-0.43925 0.890669,0 1.461704,-0.28197 1.71049,-0.844393 0.166246,-0.375824 0.33375,-0.562302 0.529684,-0.590145 0.259698,-0.0369 0.294726,-0.136257 0.378788,-1.064017 0.152587,-1.684048 0.301709,-1.904217 0.951363,-1.4087 0.426659,0.325428 0.426212,0.325575 0.509013,-0.192236 0.05261,-0.329001 0.06423,-0.496036 0.283703,-0.457854 z"
				on:mousemove={(e) => showTooltip(e, `Legs: ${hitzoneValues['Legs']}`)}
				on:mouseout={(e) => hideTooltip()}
				style="fill: {hitzoneColors['Legs']}"
				id="path271"><title id="title278"></title></path
			><path
				d="m 47.911804,80.663293 c -0.690908,-0.0049 -1.226282,0.293003 -1.226282,0.82424 0,0.0832 -0.460876,0.48501 -1.024226,0.892452 -0.563352,0.40744 -1.28857,0.969205 -1.611272,1.248502 -0.571217,0.494384 -0.612917,0.507814 -1.57303,0.515214 -1.594916,0.01233 -2.44543,0.390875 -2.717664,1.208712 -0.19344,0.581125 -0.258431,0.649264 -0.715718,0.754476 -0.802878,0.184725 -1.813078,1.131944 -2.252576,2.111499 -0.444563,0.990847 -0.446648,0.987594 0.42168,0.736389 1.659364,-0.479983 1.936061,-0.479542 1.879471,0.0052 -0.05677,0.48627 0.0026,0.507848 0.859896,0.310575 1.07285,-0.246868 2.555565,-0.374805 2.723865,-0.235128 0.216324,0.179533 1.662153,0.01621 2.00918,-0.226859 0.269658,-0.188878 0.805863,-0.239828 1.1467,-0.109038 0.152432,0.05849 0.1128,0.147238 -0.186552,0.417029 -0.365544,0.32945 -0.371756,0.353842 -0.167949,0.641822 0.253838,0.35867 1.345695,0.301481 2.334742,-0.122474 0.36617,-0.156958 0.865752,-0.241329 1.433504,-0.241329 2.41273,0 3.860804,-1.703573 3.653007,-4.297412 -0.06258,-0.781106 -0.02972,-1.20688 0.135909,-1.776635 0.264973,-0.911474 0.29702,-0.878496 -1.283126,-1.305864 -0.775535,-0.209752 -1.767553,-0.604949 -2.509924,-0.999939 -0.444471,-0.236486 -0.915089,-0.3484 -1.329635,-0.3514 z"
				on:mousemove={(e) => showTooltip(e, `Legs: ${hitzoneValues['Legs']}`)}
				on:mouseout={(e) => hideTooltip()}
				style="fill: {hitzoneColors['Legs']}"
				id="path270"><title id="title279"></title></path
			><path
				d="m 70.625663,60.038713 c -1.837924,0.03561 -3.946209,0.368531 -5.599658,0.984952 -2.427079,0.904837 -4.593031,1.24391 -7.139099,1.117245 -1.816345,-0.09036 -1.815993,-0.09032 -3.141927,0.512113 -1.314916,0.597424 -1.336898,0.602074 -2.614828,0.583944 -1.288635,-0.01828 -1.288498,-0.01822 -1.596285,0.72502 -0.16928,0.408782 -0.57077,1.025353 -0.891935,1.369943 -0.583929,0.626526 -0.583805,0.626419 0.0708,1.195275 0.654601,0.568858 0.654823,0.568992 0.384989,1.447457 -0.303245,0.987248 -0.02886,0.890609 -3.134175,1.102775 -1.19655,0.08175 -1.196319,0.08188 -0.859379,0.433566 0.954371,0.996148 0.09813,2.015558 -1.770952,2.108398 -2.856451,0.141889 -3.248507,0.279664 -1.884122,0.662492 0.81208,0.227858 0.833908,0.255084 0.968933,1.214396 0.08195,0.582256 0.08213,0.582039 -0.986503,0.884184 -1.636559,0.462719 -1.642159,0.450394 0.406176,0.909505 0.670141,0.150204 1.321111,0.30184 1.446424,0.33693 0.171483,0.04802 -0.04715,0.274153 -0.883151,0.914156 -1.292037,0.98913 0.265188,2.978113 2.331641,2.978113 0.218437,0 0.342446,0.136497 0.523482,0.576709 0.281407,0.684284 0.279421,0.683752 0.749825,0.192753 0.512024,-0.534436 0.798859,-0.491732 2.262395,0.336931 1.010249,0.572006 1.612413,0.808883 2.904732,1.142566 2.075051,0.535788 1.980315,0.537271 3.875215,-0.06821 0.94025,-0.300442 2.319213,-0.619572 3.334681,-0.772046 2.573207,-0.386372 2.378781,-0.306785 2.061889,-0.843876 -0.397486,-0.673692 -0.344535,-1.146781 0.206189,-1.834514 0.260014,-0.324698 0.487162,-0.610136 0.504362,-0.634586 0.337852,-0.480092 3.684695,-1.091496 4.446757,-0.812354 0.860044,0.315032 0.860021,0.314884 1.353923,-0.02739 0.307554,-0.213136 0.802847,-0.391863 1.312064,-0.473873 0.964884,-0.15539 0.916714,-0.120401 1.086239,-0.799435 0.09815,-0.393117 0.206104,-0.546348 0.40411,-0.575158 0.280081,-0.04075 0.313018,-0.140968 0.49816,-1.49965 0.161153,-1.182627 0.656369,-1.816666 1.09244,-1.398881 0.360662,0.345534 0.628902,0.145405 0.628902,-0.469222 0,-0.195575 0.09531,-0.150045 1.090373,0.521415 1.25744,0.848511 1.329831,0.838259 1.860352,-0.258382 0.239327,-0.494716 0.565953,-1.022649 0.726054,-1.173055 0.359538,-0.33777 0.280262,-0.492244 -0.253732,-0.494544 -0.817092,-0.0035 -0.999783,-0.115296 -0.916223,-0.560689 0.06869,-0.366168 -0.0291,-0.523025 -1.071252,-1.717725 -1.146902,-1.314779 -1.147266,-1.314817 -0.4408,-4.138765 0.388555,-1.553173 0.673212,-2.857838 0.632003,-2.899048 -0.573273,-0.573271 -2.141161,-0.835054 -3.979086,-0.799434 z"
				on:mousemove={(e) => showTooltip(e, `Belly: ${hitzoneValues['Belly']}`)}
				on:mouseout={(e) => hideTooltip()}
				style="fill: {hitzoneColors['Belly']}"
				id="path269"><title id="title274"></title></path
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
