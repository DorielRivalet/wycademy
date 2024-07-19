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
			></defs
		><g
			id="layer1"
			style="stroke: var(--ctp-mocha-surface1); stroke-width: 1.0;"
			><path
				d="m 40.270927,67.992232 c 0.624363,0.0081 2.826088,0.707063 3.151746,1.000456 0.204203,0.183972 0.839443,0.647285 1.4118,1.029911 0.572357,0.382626 2.167735,1.788238 3.545003,3.123324 2.504124,2.427428 2.504139,2.427414 3.490743,2.068091 1.622057,-0.590758 2.140518,-0.209312 0.803052,0.590661 -0.543325,0.324977 -0.987537,0.641533 -0.987537,0.703317 0,0.306126 1.228485,1.029715 1.494999,0.880566 0.276087,-0.154506 2.246231,0.21856 2.542997,0.481624 0.07461,0.06613 -0.166265,0.210842 -0.535367,0.321428 -1.878412,0.562785 -1.50328,1.653834 0.625284,1.817977 2.278271,0.175687 2.39368,0.294953 1.02216,1.06195 -0.638429,0.357031 -1.161169,0.685448 -1.161169,0.729671 0,0.537608 0.589282,1.11628 1.036629,1.018026 1.55171,-0.340812 2.202789,0.36183 0.957564,1.033529 -0.524326,0.282833 -0.95343,0.534908 -0.95343,0.560172 0,0.574962 0.59617,1.41003 0.799435,1.119829 0.147446,-0.21051 0.494867,-0.360382 0.931726,-0.402043 0.794784,-0.07579 0.822786,-0.04156 0.364319,0.451652 -0.898167,0.966233 -0.507141,2.386835 0.443383,1.610754 0.959509,-0.783418 1.306124,-0.414902 0.654741,0.696599 -0.246892,0.421289 -0.422933,0.789445 -0.390674,0.817521 0.61716,0.537145 1.156999,0.583986 1.350305,0.117305 0.272001,-0.656667 1.508877,-1.295222 1.318266,-0.680578 -0.51318,1.6548 0.05682,3.601771 0.585494,1.999878 0.396483,-1.20136 0.880566,-1.139292 0.880566,0.112654 0,0.852435 0.06376,1.134602 0.274402,1.21543 0.412422,0.158261 0.405295,0.165184 0.801502,-0.718302 0.369459,-0.823849 0.36901,-0.823857 0.557071,0.255281 0.185006,1.061607 0.493545,1.294249 0.646473,0.487826 0.06001,-0.316437 1.058693,-1.133781 1.385445,-1.133781 0.07946,0 0.09604,0.351562 0.03721,0.780831 -0.113864,0.830727 -0.04783,0.888389 0.762227,0.671277 0.213562,-0.05724 0.341648,-0.179218 0.284737,-0.271302 -0.109455,-0.177101 0.247174,-1.690727 0.453719,-1.92598 0.06687,-0.07616 0.292563,0.331063 0.501779,0.904854 0.450085,1.234403 0.520298,1.291109 1.408699,1.141016 0.646374,-0.109205 0.699074,-0.165835 0.979269,-1.054716 0.357463,-1.134005 0.34439,-1.132334 1.100708,-0.161231 0.815472,1.04706 1.264162,1.009295 1.393713,-0.117305 0.08377,-0.728497 0.535879,-1.528072 0.86403,-1.528072 0.06789,0 0.288216,0.396006 0.489376,0.880049 0.419169,1.008635 0.642782,0.992487 0.803051,-0.05736 0.264607,-1.733308 0.548998,-1.997018 1.098641,-1.019059 0.760998,1.354012 1.953803,1.316762 2.213819,-0.06925 0.193136,-1.0295 1.288293,-2.123318 1.288293,-1.286743 0,1.576444 2.278073,1.771407 2.511475,0.214973 0.154122,-1.027755 0.484495,-1.11094 1.289327,-0.325044 0.797653,0.778888 1.39037,0.644434 1.812809,-0.411345 0.494435,-1.235711 1.468017,-1.718184 1.437122,-0.712101 -0.03774,1.228924 0.80402,1.493351 1.258838,0.395325 0.113733,-0.27458 0.444765,-0.591238 0.759126,-0.726054 0.306577,-0.131478 0.616269,-0.270886 0.687814,-0.310059 0.07154,-0.03917 0.129707,0.20853 0.129707,0.550354 0,0.620964 0.001,0.621151 0.780831,0.621151 0.429268,0 0.780314,-0.06687 0.780314,-0.148828 0,-0.212569 1.385178,-1.758549 1.575615,-1.758549 0.08729,0 0.158647,0.351046 0.158647,0.780314 0,1.120564 1.945416,1.19851 3.252514,0.130225 0.795804,-0.650406 0.795551,-0.650502 0.683679,-0.08682 -0.19598,0.987474 1.986839,0.371631 2.452559,-0.691947 0.16547,-0.377878 0.40467,-0.05727 0.34417,0.460954 -0.0999,0.855812 0.65888,0.964834 1.78077,0.256315 0.99016,-0.625327 0.9707,-0.627302 0.88522,0.104903 -0.0838,0.718225 0.24797,0.781671 1.84898,0.355534 0.99734,-0.265459 1.00563,-0.257392 0.64285,0.619083 -0.16561,0.400105 0.2485,0.523353 2.11822,0.629419 1.60773,0.0912 1.60782,0.09109 1.50895,0.63097 -0.12323,0.672844 1.00984,1.396627 2.49546,1.593701 0.87169,0.115635 0.91192,0.143376 0.80822,0.556555 -0.1602,0.638258 0.75403,1.516284 1.9358,1.859835 0.89389,0.25986 1.11495,0.466708 0.74465,0.695564 -0.0981,0.0606 1.24849,1.530799 2.99207,3.267501 4.15757,4.141163 7.30299,7.772116 8.34678,9.635076 0.85515,1.52627 1.03227,2.20535 0.2868,1.09967 -1.40052,-2.07726 -11.13606,-10.902376 -16.43931,-14.901933 -3.89571,-2.938034 -8.37873,-3.671725 -16.254817,-2.660303 -5.889921,0.756365 -8.806247,1.68025 -17.717782,5.611027 -9.861232,4.349677 -16.44631,3.442984 -24.984004,-3.439583 -3.125722,-2.519766 -2.813334,-5.195133 0.729154,-6.24303 3.783688,-1.119246 0.180972,-7.440176 -5.897314,-10.347172 -1.734416,-0.8295 -1.734211,-0.829253 -2.489254,-2.201416 -0.665336,-1.209135 -0.834497,-1.395988 -1.423686,-1.572514 -0.68877,-0.20636 -3.064023,-2.796086 -2.5585,-2.789494 z"
				on:mousemove={(e) =>
					showTooltip(e, `Back/Tail: ${hitzoneValues['Back/Tail']}`)}
				on:mouseout={(e) => hideTooltip()}
				style="fill: {hitzoneColors['Back/Tail']}"
				id="path253"><title id="title256"></title></path
			><path
				d="m 35.097599,66.908061 c 0.326295,0.01872 0.675742,0.06073 1.042314,0.128674 0.775714,0.143781 1.683572,0.299773 2.017448,0.346749 0.563341,0.07926 1.870509,1.430009 3.373954,3.486092 0.115347,0.157747 0.512982,0.336105 0.883667,0.396358 0.626794,0.101883 0.727463,0.204805 1.436088,1.469161 0.761962,1.359524 0.761694,1.359436 2.52026,2.181262 5.503917,2.57213 9.26406,8.549318 5.954675,9.466089 -2.424451,0.671627 -4.056388,3.374445 -2.982764,4.940267 0.944552,1.377579 0.957568,2.184304 0.04703,2.96261 -0.482983,0.412841 -0.773319,0.789906 -0.718302,0.933276 0.05245,0.136679 -0.09763,0.365083 -0.347266,0.52865 -0.241686,0.158359 -0.64102,0.632583 -0.887801,1.053683 -0.246781,0.421099 -0.550813,0.765328 -0.675411,0.765328 -0.276193,0 -0.817784,1.312037 -0.684713,1.658813 0.201752,0.525756 -0.219753,0.214715 -0.591695,-0.436666 -0.508328,-0.890232 -0.499013,-1.038155 0.217041,-3.525366 0.333875,-1.159712 0.601876,-2.227912 0.595829,-2.374015 -0.01599,-0.386248 -0.309175,0.411124 -0.699182,1.902209 -0.187131,0.715447 -0.46861,1.703229 -0.625802,2.195215 -0.26632,0.833543 -0.26614,0.925105 0.0047,1.33842 0.39986,0.610264 0.374766,0.730075 -0.295072,1.399914 -0.351399,0.351399 -0.750015,1.043236 -0.995805,1.728577 -0.461062,1.285589 -0.526505,1.337429 -0.841809,0.666109 -0.16276,-0.346529 -0.248434,-0.406059 -0.313676,-0.217041 -0.04939,0.143091 -0.273361,0.480691 -0.497644,0.750341 -0.224283,0.26965 -0.407727,0.67938 -0.407727,0.91054 0,0.23117 -0.07773,0.42065 -0.173116,0.42065 -0.09539,0 -0.173633,-0.11736 -0.173633,-0.26045 0,-0.50162 -0.293356,-0.25338 -0.522965,0.44235 -0.333913,1.01176 -0.464718,0.98238 -0.556556,-0.12506 h 5.17e-4 c -0.08505,-1.02552 0.172566,-1.95272 0.802535,-2.885095 0.180851,-0.267667 0.510065,-1.004715 0.731222,-1.637626 0.304782,-0.872235 0.629973,-1.383757 1.34307,-2.1146 1.153468,-1.182172 1.558987,-1.937291 1.4087,-2.621545 -0.119067,-0.542107 -0.09872,-0.533393 -2.599325,-1.12913 -5.070772,-1.208045 -6.547474,-4.902201 -2.907316,-7.273458 1.018032,-0.663163 1.070556,-0.732192 1.184424,-1.561145 0.160051,-1.16516 0.965459,-2.341937 2.229321,-3.257166 0.118801,-0.08603 -0.0978,-0.386562 -0.593245,-0.823205 -1.551445,-1.367311 -5.564906,-0.934384 -5.049304,0.544669 0.201113,0.576917 -0.369493,1.933439 -0.962216,2.287199 -0.127814,0.07628 -0.232544,0.330048 -0.232544,0.56379 0,0.233743 -0.07772,0.42478 -0.173116,0.42478 -0.09539,0 -0.173632,-0.07824 -0.173632,-0.173633 0,-0.09539 -0.07824,-0.173116 -0.173633,-0.173116 -0.09539,0 -0.173116,0.0811 -0.173116,0.180351 0,0.09925 -0.148861,0.392139 -0.330729,0.650606 -0.18187,0.258468 -0.380381,0.762622 -0.441317,1.120345 -0.136104,0.799003 -0.437587,0.856134 -0.454236,0.0863 -0.01006,-0.46537 -0.03727,-0.502906 -0.155029,-0.216524 -0.214587,0.521867 -0.425565,-0.09312 -0.299207,-0.871782 0.13106,-0.807623 -0.102744,-0.888656 -0.608231,-0.210839 -0.928133,1.244546 -1.353923,2.177736 -1.353923,2.966744 0,0.429919 -0.08672,1.001149 -0.19327,1.26969 -0.106559,0.26854 -0.243478,0.914522 -0.303857,1.435571 -0.159365,1.375275 -0.607898,0.615285 -0.927075,-1.570447 -0.452881,-3.101323 0.22781,-4.476287 3.665409,-7.403682 0.593389,-0.50532 0.593518,-0.50551 -0.299723,-1.691887 -1.106698,-1.469884 -1.16176,-1.439811 1.13223,-0.61805 2.287991,0.819611 2.301896,0.812616 4.533057,-2.22467 1.420585,-1.933848 -0.418381,-4.187851 -5.267379,-6.456971 -1.904144,-0.891057 -0.745137,-1.879238 1.538924,-1.748213 z"
				on:mousemove={(e) =>
					showTooltip(e, `Belly/Limbs: ${hitzoneValues['Belly/Limbs']}`)}
				on:mouseout={(e) => hideTooltip()}
				style="fill: {hitzoneColors['Belly/Limbs']}"
				id="path252"><title id="title258"></title></path
			><path
				d="m 31.383614,68.705367 c 0.375886,1.17e-4 0.893911,0.165053 1.589567,0.481108 1.515784,0.688661 6.288846,4.147901 6.088517,4.41265 -0.08345,0.110285 -0.757581,1.039517 -1.497583,2.06499 -0.740002,1.025473 -1.396678,1.863273 -1.459859,1.861902 -0.06318,-0.0014 -0.89607,-0.378118 -1.850533,-0.837158 -2.774808,-1.334519 -4.515203,-3.343906 -4.055049,-4.681368 0.179928,-0.522971 0.327111,-1.362089 0.327111,-1.865002 0,-0.97967 0.231353,-1.437317 0.857829,-1.437122 z"
				on:mousemove={(e) => showTooltip(e, `Chest: ${hitzoneValues['Chest']}`)}
				on:mouseout={(e) => hideTooltip()}
				style="fill: {hitzoneColors['Chest']}"
				id="path251"><title id="title259"></title></path
			><path
				d="m 12.797668,76.314205 c 0.151252,0 0.107939,0.214711 -0.141593,0.703833 -0.232647,0.456025 -0.315615,0.837647 -0.236161,1.084171 0.06743,0.209209 0.106076,0.760556 0.08578,1.225765 -0.02735,0.626995 0.0491,0.941418 0.295589,1.214397 0.722251,0.799873 0.62962,1.036835 -1.013375,2.600358 -0.842979,0.802204 -1.9606184,1.70348 -2.4840861,2.002978 C 8.4343667,85.643161 8.3122,85.791368 7.8930583,86.856197 7.3534349,88.22711 6.6256781,89.11577 6.045109,89.11239 5.8206599,89.11109 5.4686823,89.164559 5.2632446,89.231763 4.9757925,89.325793 4.8635022,89.270617 4.7749023,88.991467 4.7115814,88.79196 4.5392354,88.628699 4.3924967,88.628699 c -0.9273245,0 -1.2583785,-0.818972 -0.5586222,-1.381311 0.4987718,-0.400824 0.6619547,-0.643229 0.5885946,-0.874366 -0.075976,-0.23938 -0.00162,-0.333983 0.2961059,-0.376204 0.5124292,-0.07267 0.518443,-0.559473 0.00775,-0.632003 C 4.1256272,85.279505 4.2595859,85.06309 5.1149333,84.73643 6.1168331,84.3538 6.198954,84.194795 5.5645182,83.866715 c -0.7392924,-0.382302 -1.6930496,0.07442 -1.8262451,0.874882 -0.030329,0.182266 -0.142511,0.312203 -0.2490804,0.288355 -0.1065694,-0.02385 -0.1937866,0.112555 -0.1937866,0.303341 0,0.383876 -0.2685166,0.470101 -0.40566,0.130224 -0.048115,-0.119242 -0.093238,-0.02943 -0.100769,0.199988 -0.013329,0.406035 -0.023041,0.408931 -0.3607015,0.103353 -0.3035634,-0.274722 -0.3467489,-0.279181 -0.3467489,-0.03566 0,0.20613 -0.2739665,0.08942 -1.0562663,-0.450102 -1.00380154,-0.692281 -1.05124994,-0.757424 -0.96118162,-1.313614 0.1136506,-0.701817 0.10783854,-0.695094 0.83354085,-0.94878 1.10615587,-0.386681 2.54843247,-1.540108 2.66702067,-2.132686 0.2576888,-1.287657 1.1360368,-1.704859 2.1512899,-1.021643 1.4204004,0.955859 1.5610562,0.952986 2.931604,-0.06304 0.6568915,-0.486975 1.3216432,-0.885218 1.4769128,-0.885218 0.155269,0 0.282153,-0.06182 0.282153,-0.136942 0,-0.235712 2.162429,-2.464966 2.391068,-2.464966 z"
				on:mousemove={(e) => showTooltip(e, `Face: ${hitzoneValues['Face']}`)}
				on:mouseout={(e) => hideTooltip()}
				style="fill: {hitzoneColors['Face']}"
				id="path250"><title id="title253"></title></path
			><path
				d="m 12.435933,71.174984 c -0.03274,-0.03274 -0.417862,0.356215 -0.856278,0.86403 -0.438417,0.507815 -1.330423,1.241518 -1.982308,1.630908 -1.3695961,0.8181 -2.1340457,1.574441 -3.2318441,3.196704 -1.2685431,1.874579 -1.2480989,2.02604 0.3953247,2.903182 1.1250494,0.60047 4.5488194,-2.41854 5.5991414,-4.937166 0.629841,-1.510335 0.630079,-1.510327 -0.791683,-0.13746 -2.0410396,1.970851 -2.8312075,2.559364 -2.9651936,2.210201 -0.1367142,-0.356271 0.2908489,-0.933069 1.7223756,-2.325439 1.016885,-0.98907 2.359674,-3.155751 2.110465,-3.40496 z"
				on:mousemove={(e) => showTooltip(e, `Head: ${hitzoneValues['Head']}`)}
				on:mouseout={(e) => hideTooltip()}
				style="fill: {hitzoneColors['Head']}"
				id="path249"><title id="title254"></title></path
			><path
				d="m 34.013428,64.520093 c -0.286375,0 -0.857008,0.552585 -1.048515,1.014925 -0.206361,0.498197 -0.704025,0.719853 -1.616439,0.719853 -0.304094,0 -0.336675,-0.08528 -0.257865,-0.672828 0.116487,-0.868472 -0.441813,-0.81117 -0.871265,0.0894 -0.344673,0.722783 -0.709567,0.750097 -0.846977,0.06305 -0.131047,-0.655234 -0.495712,-0.667718 -0.826306,-0.02842 -0.420177,0.812534 -1.315682,0.582537 -1.315682,-0.337964 0,-1.052471 -0.615193,-0.87862 -0.98857,0.27957 -0.223819,0.694274 -0.583691,0.726378 -1.00614,0.08992 -0.423401,-0.637902 -0.606681,-0.663896 -0.606681,-0.08578 0,1.011911 -1.099027,0.940916 -1.408183,-0.09095 -0.256297,-0.855445 -0.682847,-0.71108 -0.996839,0.33693 -0.289365,0.965815 -0.890384,0.615856 -0.890384,-0.518314 0,-0.629036 -0.347164,-0.34461 -0.562757,0.46147 -0.363575,1.359366 -1.357717,1.483072 -1.700154,0.211357 -0.257586,-0.956602 -0.669546,-0.390727 -0.679546,0.933276 -0.0084,1.115418 -0.5051,1.428773 -1.20406,0.759127 -0.645233,-0.618177 -0.743564,-0.570209 -0.687814,0.336414 0.118091,1.920328 -1.792253,2.36883 -2.500105,0.587044 -0.227256,-0.572043 -0.413557,0.263258 -0.334347,1.497583 0.05264,0.820196 0.01138,1.374373 -0.113171,1.524455 -0.146451,0.176457 -0.132943,0.445091 0.05426,1.067118 0.239921,0.797196 0.232486,0.867146 -0.191203,1.703255 -0.441781,0.871811 -0.441925,0.8716 -0.05529,1.163237 0.330704,0.249447 0.368602,0.389337 0.262517,0.967899 -0.06822,0.37203 -0.144156,1.113022 -0.168466,1.646411 -0.02431,0.53339 -0.09678,1.05533 -0.16123,1.15962 -0.06445,0.104289 0.05611,0.545844 0.267684,0.981335 0.55732,1.147133 0.392903,1.331264 4.574398,-5.125785 1.844481,-2.848263 6.191868,-4.063438 10.210229,-2.85409 0.986558,0.296911 1.265738,-0.12301 1.491899,-2.24224 0.175706,-1.646446 0.221664,-1.719631 1.297595,-2.058789 0.715457,-0.225528 1.08923,-0.477483 1.560111,-1.052132 0.550113,-0.671336 0.688374,-0.749249 1.238168,-0.698149 0.593362,0.05515 0.613865,0.03821 0.503328,-0.408244 -0.0634,-0.25608 -0.1581,-0.680247 -0.21084,-0.942578 -0.05274,-0.26233 -0.148016,-0.476973 -0.211356,-0.476973 z"
				on:mousemove={(e) => showTooltip(e, `Neck: ${hitzoneValues['Neck']}`)}
				on:mouseout={(e) => hideTooltip()}
				style="fill: {hitzoneColors['Neck']}"
				id="path248"><title id="title255"></title></path
			><path
				d="m 53.626701,20.643184 c -1.687877,0.0024 -3.235965,0.116967 -4.58525,0.339515 -1.120287,0.184777 -2.641832,0.388168 -3.381706,0.452168 -1.098501,0.09502 -1.409141,0.189098 -1.692403,0.513147 -0.610783,0.698733 -7.390081,5.629114 -7.740096,5.629114 -0.233985,0 -0.438436,0.236948 -0.668693,0.774113 -0.61994,1.446264 -4.42363,6.294717 -6.671944,8.504907 -1.627043,1.599456 -2.220896,2.309555 -2.565218,3.06648 -0.485969,1.068303 -0.936527,1.406814 -2.139921,1.60662 -0.671672,0.111521 -3.886704,2.584736 -3.657658,2.813782 0.0439,0.0439 0.692607,-0.227544 1.441772,-0.603581 2.486565,-1.248106 3.559792,-1.191435 4.926831,0.259933 1.789567,1.899958 2.351259,2.66048 2.985865,4.044197 0.466857,1.01795 1.07929,1.846697 2.817399,3.811137 2.729363,3.084773 3.227771,4.038188 3.555338,6.802169 0.330742,2.79076 0.0039,6.139243 -0.652156,6.680212 -0.789553,0.651087 -0.125365,1.144948 1.902209,1.414901 4.911222,0.653884 6.732485,1.502055 10.445357,4.863269 1.842541,1.668026 1.54687,1.613177 2.160075,0.398425 1.615037,-3.199371 2.457945,-8.380495 1.975074,-12.144478 -0.253784,-1.978252 0.229274,-4.20974 1.051615,-4.857585 0.515788,-0.406341 4.841435,-0.774195 5.967078,-0.507462 1.201928,0.284809 1.362996,0.196073 0.5333,-0.294039 -1.701389,-1.005036 -5.519559,-4.706004 -5.519559,-5.350061 0,-0.275292 -0.24972,-0.853584 -0.56379,-1.305864 -2.018984,-2.907445 0.994046,-5.951151 6.200655,-6.264217 1.734415,-0.104288 1.734184,-0.104459 0.325561,-0.557072 -1.009278,-0.324297 -1.771286,-0.72391 -2.688208,-1.409216 -0.703846,-0.526056 -1.942998,-1.287053 -2.753837,-1.69137 -2.880366,-1.436265 -4.833297,-3.036491 -4.729944,-3.875732 0.309471,-2.51292 1.780288,-4.457166 3.216858,-4.252454 1.504589,0.214404 1.644888,0.146715 0.645439,-0.311092 C 53.242083,28.952725 52.311722,28.684364 51.69917,28.596704 50.698631,28.453519 50.5249,28.366105 49.98713,27.737842 49.657894,27.353204 48.831991,26.661485 48.1521,26.200468 46.164459,24.8527 46.017033,24.636196 46.531527,23.822835 c 0.654571,-1.034808 4.744986,-2.331648 8.687325,-2.753837 1.929208,-0.206601 1.095243,-0.429614 -1.592151,-0.425814 z"
				on:mousemove={(e) => showTooltip(e, `Wings: ${hitzoneValues['Wings']}`)}
				on:mouseout={(e) => hideTooltip()}
				style="fill: {hitzoneColors['Wings']}"
				id="path247"><title id="title257"></title></path
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
