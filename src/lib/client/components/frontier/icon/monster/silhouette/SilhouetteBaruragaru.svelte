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
			></defs
		>
		<!-- svelte-ignore a11y-no-static-element-interactions -->
		<!-- svelte-ignore a11y-mouse-events-have-key-events -->
		<g id="layer1" style="stroke: var(--ctp-mocha-surface1); stroke-width: 1.0;"
			><path
				d="m 104.37606,84.662016 c 0.46826,0.02067 0.92146,0.08464 1.33377,0.194303 1.25283,0.333218 2.29277,0.333385 4.43435,0.0015 0.64996,-0.100717 0.70383,-0.04327 0.70383,0.750859 0,0.652166 0.17007,0.975573 0.70384,1.336869 1.51067,1.022547 1.96597,1.103498 4.55631,0.809253 4.27665,-0.485799 6.38214,1.210509 7.66361,6.174817 0.23311,0.903008 0.81927,2.426765 1.30225,3.38584 1.71518,3.405883 0.51547,7.025493 -1.81023,5.462203 -0.5632,-0.37857 -1.70109,-1.27289 -2.52904,-1.98748 -1.3803,-1.191316 -1.53256,-1.262447 -1.83296,-0.851627 -0.48989,0.669967 -2.01182,-0.375573 -2.8174,-1.935799 -0.651,-1.260861 -0.80159,-1.349554 -2.73627,-1.612305 -0.97789,-0.132809 -1.47886,-0.408638 -2.59571,-1.42937 -0.76122,-0.695715 -1.54073,-1.265284 -1.73219,-1.265556 -0.19146,-2.72e-4 -1.48667,-0.276144 -2.87838,-0.612883 -2.90288,-0.702379 -3.98837,-0.52833 -5.86579,0.939478 -1.232905,0.963917 -1.310802,0.860853 -0.749308,-0.989604 0.434679,-1.432529 0.506188,-1.516985 1.344108,-1.597318 0.80516,-0.07719 1.25882,-0.3864 1.26917,-0.864547 0.002,-0.09966 -0.51988,-0.488298 -1.16014,-0.863513 -1.320696,-0.773982 -1.389832,-0.653672 1.22835,-2.130619 2.40872,-1.358791 1.77644,-1.728752 -2.04845,-1.19941 -0.819947,0.113474 -0.712142,-0.235216 0.25631,-0.830957 1.01103,-0.621934 2.55517,-0.946207 3.95997,-0.884184 z"
				on:mousemove={(e) =>
					showTooltip(e, `Forelegs: ${hitzoneValues['Forelegs']}`)}
				on:mouseout={(e) => hideTooltip()}
				style="fill: {hitzoneColors['Forelegs']}"
				id="path167"><title id="title173"></title></path
			><path
				d="m 70.026217,93.861454 c 1.575031,-0.129737 3.85767,1.031532 6.688997,3.496428 2.761702,2.404281 2.640025,2.138124 1.492932,3.249928 -0.530394,0.51408 -0.896069,1.11734 -0.896069,1.47847 0,0.74655 -2.70182,4.97552 -3.953247,6.18773 -1.099706,1.06524 -1.108671,1.14819 -0.177767,1.69809 0.403315,0.23824 0.916485,0.74303 1.139982,1.12138 0.61591,1.04265 5.758851,6.03716 7.240385,7.03161 0.7179,0.48187 1.769242,1.40322 2.336291,2.04742 0.567051,0.6442 1.211992,1.1715 1.433505,1.1715 1.536088,0 3.648703,4.79824 2.596224,5.8968 -0.736359,0.76859 -8.854183,1.01867 -12.313461,0.37931 -0.863514,-0.1596 -1.84281,-0.46283 -2.176094,-0.67438 -2.609703,-1.65652 -2.476243,-1.62708 -2.940906,-0.65267 -0.692163,1.45147 -2.400887,1.8086 -2.400887,0.50177 0,-0.29005 -0.254208,-0.23255 -1.127063,0.25529 -2.741447,1.53222 -5.443234,-0.74412 -4.233333,-3.56671 0.809939,-1.88951 0.45702,-2.83436 -0.488859,-1.30897 -1.118103,1.80315 -2.110622,2.44845 -2.441195,1.58699 -0.193235,-0.50356 0.615012,-2.10104 1.463476,-2.89285 0.499008,-0.46568 0.598612,-0.72934 0.435633,-1.15238 -0.116192,-0.3016 -0.357706,-1.0397 -0.536402,-1.64021 -0.261955,-0.88031 -0.416056,-1.06259 -0.795817,-0.94206 -1.660674,0.52708 -0.200401,-3.26504 3.910356,-10.15339 3.300947,-5.53136 3.30109,-5.53143 3.30109,-8.870776 0,-2.698117 0.867197,-4.118582 2.442229,-4.24832 z"
				on:mousemove={(e) =>
					showTooltip(e, `Forelegs: ${hitzoneValues['Forelegs']}`)}
				on:mouseout={(e) => hideTooltip()}
				style="fill: {hitzoneColors['Forelegs']}"
				id="path166"><title id="title174"></title></path
			><path
				d="m 64.87511,104.09959 c 0.433146,0.11063 -0.22093,1.17536 -1.965255,4.10362 -1.40933,2.3659 -2.679255,4.8519 -3.050976,5.97277 -0.636746,1.91999 -0.63671,1.91985 -2.151807,2.09186 -0.833304,0.0946 -2.490518,0.53306 -3.682463,0.9741 -1.191944,0.44104 -2.410372,0.74077 -2.707845,0.66611 -0.737625,-0.18513 -2.61404,3.43852 -2.845821,5.49579 -0.210408,1.86755 -0.388477,2.03605 -2.15129,2.03605 -0.819249,0 -1.560425,0.11551 -1.647444,0.25631 -0.08702,0.1408 -0.353089,0.23652 -0.591179,0.21291 -0.23809,-0.0236 -1.604428,-0.11026 -3.03599,-0.19224 -3.494127,-0.20011 -3.479647,-1.85061 0.03359,-3.83335 2.120034,-1.19648 2.775279,-2.33594 2.072741,-3.60495 -0.375932,-0.67906 1.490513,-3.28446 2.782776,-3.88452 1.945928,-0.9036 2.401337,-1.30663 3.730005,-3.30109 2.048384,-3.07484 6.471454,-5.71923 9.334831,-5.58105 1.571357,0.0758 2.071367,-0.0233 3.922758,-0.77722 1.041954,-0.42434 1.693481,-0.70148 1.953369,-0.6351 z"
				on:mousemove={(e) =>
					showTooltip(e, `Hindlegs: ${hitzoneValues['Hindlegs']}`)}
				on:mouseout={(e) => hideTooltip()}
				style="fill: {hitzoneColors['Hindlegs']}"
				id="path165"><title id="title175"></title></path
			><path
				d="m 39.691634,75.297213 c -0.554611,-0.0328 -1.061692,0.100133 -1.62419,0.392224 -0.478531,0.248489 -1.302529,0.40375 -1.980758,0.37362 -0.771133,-0.03426 -1.642885,0.161755 -2.59519,0.582911 -0.788698,0.348799 -2.161371,0.716415 -3.05046,0.817004 -0.889089,0.100589 -2.658619,0.602498 -3.932577,1.115177 C 23.175264,79.919527 0.48396424,93.241094 0.87178141,93.62891 1.2370107,93.99414 8.0943567,91.300001 12.159981,89.194039 c 16.206016,-8.39459 24.29938,-6.822061 31.81718,6.181535 0.574719,0.994096 1.123958,2.123857 1.221114,2.510958 0.109556,0.436506 0.30531,0.654991 0.514697,0.574642 0.252202,-0.09678 8.42638,-5.937297 9.048543,-6.465239 0.184401,-0.156474 -0.390489,-1.204188 -1.351338,-2.462382 -0.511675,-0.670018 -0.930176,-1.389921 -0.930176,-1.599902 0,-0.209982 -0.143877,-0.35301 -0.319877,-0.31781 -0.20675,0.04135 -0.294164,-0.183224 -0.247014,-0.635104 0.05464,-0.523699 -0.02057,-0.663478 -0.299206,-0.556555 -0.288017,0.110523 -0.414158,-0.194453 -0.557072,-1.348755 -0.331602,-2.678311 -0.652921,-3.308602 -2.899048,-5.685958 -0.476379,-0.50421 -0.977316,-1.235683 -1.11311,-1.625223 -0.32747,-0.939378 -0.858376,-0.895205 -1.479497,0.123506 -0.507279,0.831999 -0.507022,0.832476 -0.507979,0.05168 -0.0012,-0.98697 -0.405385,-1.393372 -1.396297,-1.403532 -0.42944,-0.0044 -1.356857,-0.291379 -2.060856,-0.637687 -0.751768,-0.369808 -1.3538,-0.568201 -1.908411,-0.600997 z"
				on:mousemove={(e) => showTooltip(e, `Tail: ${hitzoneValues['Tail']}`)}
				on:mouseout={(e) => hideTooltip()}
				style="fill: {hitzoneColors['Tail']}"
				id="path164"><title id="title176"></title></path
			><path
				d="m 74.318978,76.913135 c -0.519721,0.01634 -0.943549,0.06528 -1.432471,0.136426 -5.550118,0.807613 -14.743685,3.875678 -10.291361,3.434415 2.812312,-0.278723 3.317664,1.038491 1.361157,3.548104 -0.818385,1.049742 -0.678022,1.173679 0.624768,0.552421 2.32818,-1.110231 3.377718,0.06773 2.112016,2.370398 -0.817046,1.486434 -0.905104,2.034751 -0.216008,1.345654 0.196329,-0.196327 0.323342,0.07907 0.443901,0.960148 0.09296,0.679386 0.359275,1.676159 0.591695,2.214852 0.364097,0.843898 0.371546,1.011371 0.05478,1.211813 -0.557901,0.353026 -3.665229,0.292189 -4.065902,-0.07958 -0.280673,-0.260432 -0.317307,-0.241239 -0.196887,0.102836 0.292709,0.836357 -0.744229,0.681808 -2.021065,-0.301273 -1.400854,-1.078566 -3.586112,-1.768289 -2.431376,-0.767396 0.855211,0.741275 0.594171,0.843037 -1.312065,0.51108 -1.607564,-0.279945 -11.972396,6.269619 -11.972396,7.56543 0,2.830049 3.95511,10.269199 4.847766,9.118309 1.173584,-1.51308 6.479751,-4.04142 8.246009,-3.92896 5.502327,0.35037 8.666654,-2.31419 8.666654,-7.298264 0,-4.433246 0.378755,-4.751887 4.455025,-3.747058 3.181085,0.78416 3.132183,0.756313 5.976896,3.396175 2.765057,2.565942 2.664107,2.275581 1.247986,3.602877 -0.870059,0.81548 -1.151547,1.28457 -1.261421,2.10375 -0.151753,1.1314 -0.190618,1.18936 -2.80293,4.18631 -1.903898,2.18422 -1.961954,2.30778 -1.204578,2.54816 0.28776,0.0913 0.938917,0.79188 1.44694,1.55701 1.046578,1.57627 0.63635,1.61287 3.514515,-0.31212 0.711867,-0.47612 2.551083,-1.24684 4.224031,-1.76992 1.629724,-0.50956 3.951965,-1.26586 5.160409,-1.68052 1.208444,-0.41466 2.985596,-0.95259 3.949113,-1.19579 1.730303,-0.43675 1.756888,-0.45685 2.154907,-1.60352 0.221637,-0.63852 0.846333,-1.88196 1.388546,-2.76365 1.289702,-2.097199 3.49436,-8.463331 3.49436,-10.090344 0,-1.217132 -6e-5,-1.21698 1.066601,-1.21698 1.17219,0 1.12791,-0.234072 -0.12506,-0.661459 -1.437991,-0.490502 -1.210378,-1.191616 0.70849,-2.183846 2.09306,-1.082302 2.09473,-1.225358 0.0139,-1.058333 -2.116393,0.169884 -2.310937,-0.422827 -0.5116,-1.559595 1.43803,-0.908496 1.43791,-1.011004 -5.1e-4,-0.7953 -1.109775,0.166421 -1.151871,0.14888 -1.151871,-0.481108 0,-0.359677 -0.101816,-0.71679 -0.226343,-0.79375 C 98.721118,83.013573 98.475932,82.19152 98.300977,81.26429 97.896832,79.122406 98.979604,79.412061 85.942558,77.962166 78.301434,77.11237 75.878141,76.864115 74.318978,76.913135 Z"
				on:mousemove={(e) => showTooltip(e, `Torso: ${hitzoneValues['Torso']}`)}
				on:mouseout={(e) => hideTooltip()}
				style="fill: {hitzoneColors['Torso']}"
				id="path163"><title id="title172"></title></path
			><path
				d="m 84.020194,35.170463 c 0.577164,-0.104317 1.648001,0.679501 5.246192,3.009635 2.647424,1.714434 5.431943,3.514374 6.187736,3.999756 1.374172,0.882513 1.373988,0.882477 -0.294556,2.583305 -1.830191,1.865605 -2.006188,2.168867 -4.17959,7.204728 -2.582198,5.983059 -2.501228,6.417987 3.494361,18.815906 2.090084,4.32196 3.049291,6.750394 3.058728,7.74423 0.0038,0.40086 0.986368,0.482962 -11.620996,-0.97255 C 74.530778,76.24151 74.763307,76.297576 74.75616,74.85848 c -0.0022,-0.434134 -0.09077,-0.875736 -0.19637,-0.981336 -0.1056,-0.1056 -0.197232,-0.268387 -0.204122,-0.362251 -0.176526,-2.404997 -0.498264,-2.834274 -1.7632,-2.353345 -0.834563,0.317301 -0.831589,0.08916 0.01034,-0.789616 0.604355,-0.63081 0.650564,-0.818837 0.488342,-1.998328 -0.190972,-1.388526 -0.251055,-1.438237 -1.26659,-1.052132 -0.832342,0.316456 -0.838889,0.01086 -0.01654,-0.76171 1.064174,-0.99974 0.940224,-3.010173 -0.192236,-3.120223 -0.831998,-0.08085 -0.831854,-0.08093 0.03307,-0.551905 0.886227,-0.482565 1.06172,-3.202268 0.2682,-4.158402 -0.168572,-0.203117 -0.138646,-0.344027 0.09198,-0.432532 0.720721,-0.276567 1.330941,-4.024561 0.655258,-4.024561 -0.178892,0 -0.131293,-0.181796 0.120406,-0.45992 0.422927,-0.46733 2.062798,-3.895548 1.918229,-4.010091 -0.04349,-0.03445 -0.309579,-0.188798 -0.591179,-0.343131 -0.482111,-0.264228 -0.465702,-0.296869 0.275436,-0.559139 0.629519,-0.222773 0.961339,-0.648506 1.658813,-2.125452 0.479625,-1.015636 1.310476,-2.509061 1.846399,-3.318661 0.535925,-0.809598 0.883925,-1.474299 0.77308,-1.477429 -0.110846,-0.0031 0.04251,-0.204767 0.341064,-0.448034 0.94054,-0.766386 2.429056,-3.211213 2.084627,-3.424081 -0.20143,-0.124492 -0.0763,-0.276107 0.366386,-0.444417 0.369592,-0.140519 1.097686,-0.809567 1.617989,-1.486731 0.430033,-0.559679 0.598348,-0.942 0.944645,-1.00459 z"
				on:mousemove={(e) => showTooltip(e, `Neck: ${hitzoneValues['Neck']}`)}
				on:mouseout={(e) => hideTooltip()}
				style="fill: {hitzoneColors['Neck']}"
				id="path169"><title id="title171"></title></path
			><path
				d="m 115.15938,7.4698283 c -0.50848,0.061964 -1.11197,0.3620057 -2.16473,0.9772013 -1.04861,0.6127731 -1.9325,0.9648293 -2.20451,0.8784994 -0.24971,-0.079256 -0.45424,-0.033714 -0.45424,0.1012858 0,0.1349997 -0.48939,0.4373718 -1.08779,0.6717932 -0.5984,0.234423 -2.13251,1.053581 -3.40909,1.820044 -1.27659,0.766466 -2.50359,1.393197 -2.72645,1.393197 -0.22286,0 -1.00404,0.403271 -1.73633,0.896069 -0.7323,0.4928 -1.483613,0.89607 -1.669148,0.89607 -0.803789,0 -1.274418,0.332187 -0.74414,0.525032 0.397952,0.144723 0.20878,0.306517 -0.978752,0.837158 -1.61831,0.723139 -1.915863,1.079799 -0.67231,0.806669 1.186816,-0.260668 0.690784,0.314752 -0.56224,0.652157 -0.561502,0.151197 -0.961011,0.371952 -0.887801,0.490409 0.07321,0.118459 -0.528189,0.475834 -1.336353,0.794267 -1.96412,0.773902 -4.413684,2.059934 -4.413684,2.317171 0,0.113999 0.40327,0.03847 0.89607,-0.167431 1.943609,-0.812092 0.827073,0.306624 -1.926498,1.930115 -1.741546,1.026804 -3.371088,2.228134 -4.282426,3.15743 -1.471095,1.50008 -1.470726,1.500027 0.19327,0.467154 3.78329,-2.348354 3.951954,-2.118349 0.714685,0.973068 -4.046108,3.863825 -5.368674,5.953819 -2.440678,3.857129 0.786818,-0.563428 1.49254,-1.024227 1.56838,-1.024227 0.07584,0 -0.606372,1.051387 -1.516186,2.336808 -1.592563,2.25004 -2.241088,3.615773 -1.069186,2.251542 0.984751,-1.146366 2.176064,-1.858952 2.275313,-1.36064 0.0459,0.230478 2.906091,2.238531 6.355685,4.46226 7.359164,4.743975 6.42927,4.483511 8.753988,2.450496 1.475321,-1.290197 3.340581,-2.460315 3.921211,-2.460315 0.0379,0 0.14189,0.290298 0.23099,0.645439 0.13155,0.524129 0.24776,0.59994 0.61753,0.402042 0.27762,-0.148596 0.60016,-0.152567 0.82579,-0.0098 0.54599,0.345425 0.64336,0.305305 0.96377,-0.397909 0.16038,-0.351998 0.46687,-0.639754 0.68109,-0.639754 0.22984,0 0.38964,-0.229485 0.38964,-0.559656 0,-1.181585 1.09836,-1.895875 1.42472,-0.926558 0.4046,1.201657 0.71476,1.050421 0.98702,-0.481108 0.19148,-1.077157 0.34834,-1.355652 0.83148,-1.476912 1.84277,-0.46251 6.73204,-4.29942 8.45116,-6.632153 1.4167,-1.922357 1.54864,-3.003119 0.19689,-1.611272 -0.99626,1.025812 -1.26691,1.127038 -1.48622,0.555522 -0.0829,-0.21605 -0.31549,-0.31437 -0.5395,-0.22841 -0.29221,0.112132 -0.39377,-0.02089 -0.39377,-0.516247 0,-0.66942 -0.34418,-0.890434 -0.64027,-0.411345 -0.34698,0.561411 -0.89556,0.247565 -0.89556,-0.512113 0,-0.885305 -0.0584,-0.909198 -0.88676,-0.366386 -0.57304,0.375473 -0.63116,0.366422 -0.89917,-0.134359 -0.26407,-0.493418 -0.33025,-0.504603 -0.84336,-0.145211 -0.79387,0.556053 -1.46658,0.497613 -1.46658,-0.127124 0,-0.423509 -0.11589,-0.487662 -0.64027,-0.35605 -1.4415,0.361792 -1.9719,-0.0595 -1.13223,-0.89917 0.41159,-0.411597 0.74827,-0.987596 0.74827,-1.280025 0,-0.29243 0.12308,-0.531751 0.27337,-0.531751 0.16215,0 0.2027,-0.221364 0.10025,-0.544153 -0.11498,-0.362236 -0.0792,-0.486089 0.10697,-0.371037 0.18904,0.116817 0.23131,-0.06815 0.13074,-0.571024 -0.1346,-0.672987 -0.072,-0.759292 0.65319,-0.904338 0.78754,-0.157507 0.79428,-0.170939 0.38654,-0.793233 -0.52327,-0.798627 -0.3025,-1.167887 0.69919,-1.167887 0.66807,0 0.73708,-0.05735 0.4656,-0.384473 -0.25426,-0.306356 -0.25426,-0.383956 0,-0.383956 0.24954,0 0.24721,-0.08594 -0.0109,-0.396875 -0.2782,-0.335209 -0.24362,-0.419233 0.22221,-0.541052 0.43302,-0.113256 0.51877,-0.275469 0.39842,-0.754993 -0.1374,-0.547424 -0.0689,-0.610815 0.65784,-0.610815 0.47539,0 0.74538,-0.106229 0.65268,-0.256315 -0.0871,-0.1408 -0.0478,-0.255799 0.0873,-0.255799 0.13526,0 0.23466,-0.40243 0.22066,-0.894519 -0.03,-1.057229 0.46947,-1.53055 2.05982,-1.950785 2.35477,-0.622231 -0.15712,-1.1706099 -2.71973,-0.593762 -0.58717,0.132171 -0.58003,0.101628 0.21342,-0.9002036 0.6233,-0.7869775 1.00126,-1.0366292 1.56787,-1.0366292 0.92022,0 0.96335,-0.3312374 0.0946,-0.7270875 -0.25562,-0.1164668 -0.47556,-0.1974361 -0.69092,-0.236678 -0.16152,-0.029431 -0.3204,-0.035124 -0.48989,-0.014469 z"
				on:mousemove={(e) => showTooltip(e, `Head: ${hitzoneValues['Head']}`)}
				on:mouseout={(e) => hideTooltip()}
				style="fill: {hitzoneColors['Head']}"
				id="path168"><title id="title170"></title></path
			><path
				d="M 101.17987,0.05115967 C 98.421667,0.06635855 95.816844,0.22181786 93.15297,0.51107992 82.556875,1.6616783 81.184975,1.9246162 70.911951,4.7769694 58.407285,8.2489483 54.777237,9.655215 32.38407,19.70319 c -9.215991,4.135283 -9.215987,4.135322 -10.049516,3.694865 -1.043836,-0.551587 -1.33046,-0.3313 -0.45992,0.353467 0.987701,0.776926 0.833527,1.110877 -0.434599,0.941028 -1.025665,-0.137375 -1.053332,-0.125475 -0.480591,0.214457 0.60755,0.36059 0.60755,0.360544 0,0.520382 -0.607543,0.159837 -0.607324,0.160274 -0.01912,0.573608 0.46428,0.326254 0.525395,0.48851 0.290938,0.771012 -0.228816,0.275711 -0.217044,0.382551 0.05168,0.464571 0.191856,0.05856 0.55045,0.171141 0.79685,0.250631 0.2464,0.07949 0.448035,0.378541 0.448035,0.664559 0,0.384037 0.167642,0.520382 0.640271,0.520382 0.491825,0 0.640788,0.133033 0.643888,0.575675 0.0038,0.535109 0.05791,0.515238 0.758093,-0.279053 0.74497,-0.845091 1.79279,-0.159637 1.79679,1.175122 5.28e-4,0.176 0.07344,0.319878 0.161747,0.319878 0.08831,0 0.104514,-0.581741 0.03617,-1.292945 -0.12425,-1.293097 -0.123964,-1.293205 0.607715,-0.592212 0.925736,0.886912 0.950479,0.383705 0.05633,-1.142049 -0.654686,-1.117139 -0.660761,-1.163062 -0.192236,-1.511019 2.041028,-1.515798 14.873176,-8.129325 23.139156,-11.925887 3.386633,-1.55548 5.264653,-2.224752 9.47229,-3.374471 6.394998,-1.7474056 14.176553,-4.0133479 16.255855,-4.7340777 4.670254,-1.6188084 13.689595,-2.7373201 26.904296,-3.3362305 9.68445,-0.4389132 16.41325,0.6854747 20.87935,3.4891927 3.39775,2.1330209 -0.5949,7.7087575 -11.2267,15.6786295 -2.86657,2.148846 -3.00303,2.306108 -1.85312,2.137337 0.6354,-0.09326 0.81084,-0.01212 0.92604,0.428398 0.17688,0.676401 0.38795,0.683667 0.9772,0.03256 0.34769,-0.384192 0.54687,-0.441385 0.80099,-0.230477 0.3593,0.298193 5.4591,-3.948116 10.15183,-8.452714 7.56658,-7.2632308 5.05267,-13.1038753 -6.22804,-14.4694009 -6.43525,-0.77898459 -11.45886,-1.14257591 -16.05587,-1.11724443 z"
				on:mousemove={(e) =>
					showTooltip(e, `Tongue: ${hitzoneValues['Tongue']}`)}
				on:mouseout={(e) => hideTooltip()}
				style="fill: {hitzoneColors['Tongue']}"
				id="path161"><title id="title169"></title></path
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
