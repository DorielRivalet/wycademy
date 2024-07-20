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
			></defs
		>
		<!-- svelte-ignore a11y-no-static-element-interactions -->
		<!-- svelte-ignore a11y-mouse-events-have-key-events -->
		<g id="layer1" style="stroke: var(--ctp-mocha-surface1); stroke-width: 1.0;"
			><path
				d="m 110.45321,92.275505 c 0,0.07755 0.60744,1.027633 1.34978,2.111499 1.87986,2.744665 1.8085,2.939457 -0.6506,1.776119 -1.76867,-0.836719 -1.91332,-0.755995 -0.58963,0.328662 0.56135,0.459989 0.96554,0.925576 0.89814,1.034562 -0.0674,0.108986 0.17832,0.35314 0.5457,0.543119 1.1173,0.577785 0.95713,0.696094 -0.84129,0.620634 -1.72403,-0.07234 -1.72433,-0.07206 -0.65578,0.965316 1.1716,1.137434 1.23034,1.237134 0.72657,1.237134 -0.18804,0 -0.74249,0.25345 -1.23248,0.56276 -0.48998,0.30931 -0.9738,0.56224 -1.07487,0.56224 -0.10108,0 -0.58372,0.41773 -1.0728,0.9281 -0.48911,0.51037 -0.7375,0.87134 -0.55191,0.80254 2.95302,-1.09467 3.99797,-1.03529 4.37855,0.24856 0.1321,0.44564 0.32862,0.68857 0.50281,0.62167 0.35536,-0.13636 0.82108,0.68334 0.60203,1.05937 -0.0886,0.1521 -0.54879,0.74588 -1.02268,1.31981 -0.47388,0.57394 -0.86144,1.13384 -0.86144,1.24386 0,0.26746 2.61857,3.4704 2.85305,3.4897 0.10125,0.008 0.4877,0.25455 0.85887,0.54726 v 5.1e-4 c 0.98632,0.77779 1.01479,0.70392 0.44286,-1.1498 -0.2863,-0.92793 -0.47122,-1.68723 -0.41082,-1.68723 0.0604,0 0.31439,0.10964 0.5643,0.24339 0.67435,0.3609 0.7523,0.0956 0.19999,-0.68006 -0.44281,-0.62182 -0.45166,-0.68781 -0.093,-0.68781 0.21818,0 0.69193,-0.27883 1.05265,-0.61908 0.62137,-0.58608 0.6693,-0.59626 0.91209,-0.20051 0.14094,0.22975 0.79215,1.24116 1.44694,2.24793 0.65478,1.00678 1.24775,2.05923 1.31775,2.33835 0.14621,0.58254 0.52865,0.68633 0.52865,0.14367 0,-0.42014 1.52025,-1.88619 1.95595,-1.88619 0.16141,0 0.29352,-0.10107 0.29352,-0.2248 0,-0.12373 -0.12647,-0.22641 -0.28112,-0.22841 -0.61095,-0.007 -0.9441,-0.39162 -0.64853,-0.74776 0.23004,-0.27717 0.19382,-0.36242 -0.20619,-0.48937 -0.35247,-0.11187 -0.41684,-0.22136 -0.23668,-0.40153 0.36063,-0.36063 0.30336,-0.60498 -0.14625,-0.62528 -0.24747,-0.0112 -0.28641,-0.0609 -0.1049,-0.13384 0.15882,-0.0638 0.41227,-0.0148 0.56276,0.10852 0.26764,0.21938 0.89317,0.34574 1.45469,0.29404 0.52549,-0.0484 0.28369,-0.4685 -0.4501,-0.78239 -1.23672,-0.52903 -2.06506,-1.56895 -1.70688,-2.1425 0.32627,-0.52244 0.53887,-0.59363 0.75086,-0.25063 0.21474,0.34746 0.5183,0.267 0.63459,-0.16847 0.089,-0.3334 0.13001,-0.31599 0.26768,0.11266 0.18762,0.58418 0.4549,0.65424 0.64131,0.16846 0.0712,-0.18559 0.2844,-0.33744 0.47387,-0.33744 0.18947,0 0.34468,0.15185 0.34468,0.33744 0,0.41809 0.21189,0.41758 0.76636,-0.002 0.37907,-0.28688 0.46266,-0.27933 0.71521,0.0636 0.27038,0.3666 0.29389,0.3661 0.43821,-0.006 0.0839,-0.21652 0.29991,-0.39326 0.47956,-0.39326 0.19208,0 0.25951,0.10824 0.16381,0.26303 -0.10805,0.17482 -0.0416,0.21676 0.19741,0.12506 0.19789,-0.0759 0.40934,-0.0175 0.46974,0.13022 0.23289,0.56918 0.58714,-0.43124 0.59014,-1.66759 0.003,-1.26144 0.004,-1.26118 -1.74615,-2.84117 -0.96239,-0.869001 -1.94685,-1.946421 -2.18798,-2.394173 -0.53662,-0.996473 -0.70564,-1.017816 -0.90433,-0.113172 -0.154,0.701168 -0.15401,0.70112 -1.53634,-0.643888 -1.99669,-1.94279 -4.74851,-3.361129 -3.84473,-1.981791 0.58461,0.892233 0.35345,0.855075 -1.36374,-0.218075 -1.66884,-1.04294 -5.95984,-3.112956 -5.95984,-2.875276 z"
				on:mousemove={(e) => showTooltip(e, `Head: ${hitzoneValues['Head']}`)}
				on:mouseout={(e) => hideTooltip()}
				style="fill: {hitzoneColors['Head']}"
				id="path130"><title id="title136"></title></path
			><path
				d="m 92.72974,87.772937 c -0.302868,-0.183433 -0.136063,0.395606 0.273369,1.599386 0.303502,0.892335 0.45407,1.62264 0.334863,1.62264 -0.119207,0 -0.06611,0.229334 0.117822,0.510046 0.665418,1.015556 -0.0047,2.924656 -1.727026,4.919596 -1.094838,1.268137 -1.094946,1.268256 -0.938961,3.037024 0.240752,2.729971 0.186462,2.664591 2.491321,2.974491 1.093363,0.147 2.898627,0.46179 4.012158,0.6997 1.113532,0.2379 3.644334,0.74509 5.623944,1.12707 1.97961,0.38198 4.71307,1.08663 6.07405,1.56579 2.47452,0.87119 2.47455,0.8714 2.9807,0.3173 0.58619,-0.64171 0.64589,-0.97876 0.17311,-0.97876 -0.18323,0 -0.39754,-0.25572 -0.47594,-0.56792 -0.29826,-1.18834 -1.64643,-1.5363 -3.46542,-0.89452 -2.67512,0.94384 -1.77123,-0.88037 1.18132,-2.38435 0.71142,-0.36239 1.29347,-0.74401 1.29347,-0.84801 0,-0.35762 -2.36831,-2.428483 -2.94194,-2.572453 -0.35465,-0.08901 -0.90145,-0.619497 -1.43041,-1.387512 -0.9846,-1.429605 -1.25022,-1.538309 -1.25522,-0.51263 -0.009,1.873038 -1.2401,1.453462 -2.2164,-0.755509 -0.72209,-1.633831 -0.89401,-1.666712 -0.75758,-0.144178 0.10583,1.181018 0.10567,1.181306 -0.76429,0.364319 -0.47848,-0.449342 -1.07237,-0.920942 -1.319817,-1.047481 -0.247452,-0.12654 -0.649212,-0.7457 -0.892969,-1.376143 -0.510104,-1.319312 -0.78714,-1.461189 -0.809769,-0.414962 -0.03798,1.756142 -0.208689,1.649612 -3.016354,-1.878439 C 93.805392,88.9023 93.032609,87.95637 92.72974,87.772937 Z"
				on:mousemove={(e) => showTooltip(e, `Neck: ${hitzoneValues['Neck']}`)}
				on:mouseout={(e) => hideTooltip()}
				style="fill: {hitzoneColors['Neck']}"
				id="path129"><title id="title135"></title></path
			><path
				d="m 65.271468,104.49336 c 0.543961,0.10876 1.625019,0.62081 2.739368,1.32447 1.778604,1.12312 5.683272,1.82612 10.130131,1.82418 1.371899,-6e-4 1.446527,0.13987 0.967383,1.81436 -0.181323,0.63367 1.423321,3.50296 2.325956,4.15943 0.556765,0.40493 1.248292,1.05544 1.536857,1.44591 0.915999,1.23947 2.111582,1.58209 4.6762,1.33945 1.526723,-0.14444 2.243611,-0.13462 2.346627,0.032 0.10129,0.1639 0.417061,0.12761 0.995805,-0.1142 3.034333,-1.26783 5.711967,0.76443 3.964099,3.0086 -0.428936,0.55073 -0.429097,0.55081 -0.776697,-0.28112 -0.410171,-0.98167 -0.813853,-1.08481 -0.836124,-0.21342 -0.03372,1.31939 -0.266475,1.49319 -0.988571,0.73949 -0.85546,-0.89291 -2.37854,-0.74491 -3.259232,0.31626 -0.333194,0.40148 -2.201287,0.42307 -7.071403,0.0827 -2.875038,-0.20097 -2.906676,-0.20942 -3.889685,-1.01493 -1.060757,-0.86921 -4.571297,-5.76787 -4.571297,-6.37894 0,-0.73147 -0.743002,-1.15146 -1.32085,-0.74672 -0.629687,0.44105 -0.656485,0.413 -0.909505,-0.9462 -0.209331,-1.1245 -1.666201,-2.81385 -2.072225,-2.40295 -1.610581,1.62989 -1.677489,4.91459 -0.129191,6.33915 2.501077,2.3012 3.162812,2.74495 3.896403,2.61173 0.77039,-0.13989 1.435054,0.53078 1.435054,1.44849 0,0.53147 -0.07781,0.55415 -0.661458,0.18965 -0.324445,-0.20262 -0.567453,-0.2061 -0.989087,-0.0139 -0.445682,0.20307 -1.418639,0.11596 -4.797123,-0.42944 -5.279016,-0.85219 -5.113335,-0.7879 -5.460132,-2.13578 -0.154151,-0.59914 -0.474274,-1.58416 -0.711068,-2.18953 -0.462965,-1.18358 -0.461724,-1.18891 0.642855,-2.41381 0.387108,-0.42927 0.594479,-1.03973 0.761194,-2.24276 0.175104,-1.26357 1.23292,-4.48749 1.679484,-5.11855 0.04323,-0.0611 0.164912,-0.0698 0.346232,-0.0336 z"
				on:mousemove={(e) => showTooltip(e, `Legs: ${hitzoneValues['Legs']}`)}
				on:mouseout={(e) => hideTooltip()}
				style="fill: {hitzoneColors['Legs']}"
				id="path128"><title id="title134"></title></path
			><path
				d="m 78.397799,95.808105 c 2.296356,0.100654 4.879411,0.582655 7.979358,1.428854 4.352078,1.187997 4.399182,1.233314 4.228165,4.105691 -0.06027,1.0123 -0.06044,1.01235 -1.423685,1.34979 -0.848332,0.20998 -1.810195,0.66767 -2.546615,1.21181 -1.338971,0.98937 -6.594779,3.28509 -7.450708,3.25458 -0.309314,-0.011 -2.562503,-0.20938 -5.007446,-0.44131 -4.445353,-0.4217 -4.445689,-0.422 -5.863208,-1.31724 -0.779637,-0.49238 -2.321878,-1.27194 -3.427698,-1.73219 -1.105821,-0.46025 -2.036927,-0.85187 -2.069124,-0.87075 -0.05642,-0.0331 0.629371,-3.543828 0.710551,-3.637501 0.02194,-0.02532 0.729393,0.0512 1.571997,0.170532 1.532004,0.216959 1.531536,0.216981 3.140376,-0.771529 3.29978,-2.027462 6.330777,-2.918493 10.158037,-2.750737 z"
				on:mousemove={(e) => showTooltip(e, `Belly: ${hitzoneValues['Belly']}`)}
				on:mouseout={(e) => hideTooltip()}
				style="fill: {hitzoneColors['Belly']}"
				id="path127"><title id="title133"></title></path
			><path
				d="m 76.931738,86.594714 c -2.081273,0.04678 -4.150093,0.149434 -6.007902,0.31316 -2.378183,0.209587 -4.579873,0.312596 -4.892724,0.228926 -0.690644,-0.184707 -0.698369,-0.116162 -0.09353,0.86248 0.593085,0.959632 0.860316,0.85019 -2.814815,1.154451 -3.720269,0.308 -3.558269,0.201587 -2.548682,1.67225 0.445936,0.649593 1.02689,1.687174 1.290878,2.305802 0.263987,0.618628 0.643904,1.305989 0.844393,1.527555 0.206074,0.227742 0.468609,1.155949 0.604097,2.135271 0.230966,1.669456 0.264317,1.737569 0.913123,1.876371 1.749288,0.374231 2.562444,0.228536 3.889685,-0.697115 4.614609,-3.218346 9.913942,-3.658944 17.817,-1.48053 4.554424,1.25539 3.996766,1.298033 5.502507,-0.417029 2.082523,-2.372026 1.65653,-7.063496 -0.777731,-8.567952 -1.124702,-0.695104 -7.482474,-1.053975 -13.726294,-0.91364 z"
				on:mousemove={(e) => showTooltip(e, `Back: ${hitzoneValues['Back']}`)}
				on:mouseout={(e) => hideTooltip()}
				style="fill: {hitzoneColors['Back']}"
				id="path126"><title id="title131"></title></path
			><path
				d="m 15.755111,81.262223 c -0.290728,-0.334806 -0.924968,5.851582 -0.993738,9.693982 -0.06914,3.862803 -0.07499,3.901605 -0.627352,4.274158 -0.773778,0.521893 -2.885995,2.372852 -2.886129,2.529045 -6.1e-5,0.07058 0.683105,-0.09513 1.518254,-0.367937 0.835148,-0.272804 1.560755,-0.456847 1.612305,-0.409277 0.155288,0.143279 0.08518,0.170024 -5.1552414,1.994194 -5.7462902,2.000262 -9.71542773,4.198962 -8.95449215,4.959902 0.22976351,0.22976 6.17070455,-0.68289 8.70334475,-1.33687 1.6560288,-0.42763 2.9216878,-0.69328 2.8122318,-0.59066 -0.109457,0.10262 -1.428759,0.93276 -2.9316044,1.84485 -2.3157844,1.40546 -6.3362707,4.91288 -5.6316976,4.91288 1.0330042,0 5.6985987,-1.44032 8.402071,-2.59364 4.026118,-1.71757 3.949923,-1.70327 2.913001,-0.55552 -0.771422,0.85386 -0.813904,0.9822 -0.813904,2.47478 0,1.91299 -0.06992,1.90894 1.792139,0.10335 2.996161,-2.90529 3.097804,-2.94465 4.90771,-1.90117 5.385741,3.10511 11.404667,3.02474 23.219255,-0.31006 8.6608,-2.4446 8.661192,-2.44469 13.467912,-2.85719 2.643695,-0.22688 4.833173,-0.44256 4.865852,-0.47956 0.988112,-1.11971 0.993397,-7.110183 0.0067,-7.559744 -0.362476,-0.165156 -0.593372,-0.557744 -0.776696,-1.320333 -0.432066,-1.797293 -1.481849,-3.27914 -2.220537,-3.134692 -0.334662,0.06544 -1.59557,0.236827 -2.801896,0.380855 -2.222654,0.265372 -2.37262,0.349873 -1.965255,1.111043 0.200396,0.374442 0.112276,0.456362 -0.731221,0.677478 -0.527409,0.138257 -1.464964,0.390096 -2.083594,0.559656 -0.618628,0.16956 -1.556185,0.418878 -2.083594,0.554488 -0.807531,0.207636 -0.926168,0.307982 -0.751375,0.634587 0.179887,0.336121 -0.164721,0.537278 -2.583305,1.508952 -1.738406,0.69841 -2.753368,1.222727 -2.691308,1.390096 0.06165,0.166268 -0.388725,0.406254 -1.18184,0.629935 -0.7049,0.198802 -1.803756,0.507956 -2.441712,0.687297 -0.915762,0.257438 -1.137923,0.409164 -1.056783,0.719853 0.08333,0.319043 -0.186992,0.47504 -1.427303,0.825269 -0.841419,0.2376 -1.947767,0.60862 -2.458765,0.82424 -1.686808,0.7118 -4.982009,0.75591 -4.283459,0.0574 0.06186,-0.0619 0.334317,0.006 0.605648,0.15142 0.323777,0.17328 0.569302,0.18776 0.714685,0.0424 0.145383,-0.14538 -0.07509,-0.31623 -0.642338,-0.49764 -0.736639,-0.23559 -1.510391,-0.67211 -1.190625,-0.6718 0.05568,6e-5 0.860578,0.24084 1.788521,0.53537 1.430547,0.45405 1.772626,0.49284 2.249475,0.25528 0.309314,-0.1541 1.118882,-0.45785 1.799374,-0.67541 2.114097,-0.675891 2.146264,-0.651835 -1.968356,-1.492931 -1.665956,-0.340549 -1.747626,-0.507527 -0.411861,-0.843877 4.391347,-1.105754 1.661559,-2.267646 -5.428092,-2.309936 -2.943366,-0.01756 -4.946312,-0.09599 -4.451408,-0.174666 1.021351,-0.162379 -0.665032,-1.291693 -2.357479,-1.578715 -0.7388,-0.125294 -0.792736,-0.195301 -0.962732,-1.254188 -0.145787,-0.908088 -0.34904,-1.272052 -1.066085,-1.909444 -0.851489,-0.7569 -0.930578,-0.952304 -2.051554,-5.061189 -0.641336,-2.350789 -1.233105,-4.351741 -1.315165,-4.446241 z"
				on:mousemove={(e) => showTooltip(e, `Tail: ${hitzoneValues['Tail']}`)}
				on:mouseout={(e) => hideTooltip()}
				style="fill: {hitzoneColors['Tail']}"
				id="path125"><title id="title130"></title></path
			><path
				d="m 54.87572,7.8734212 c -0.505135,-0.062067 0.303144,0.427168 2.451013,1.6727661 2.926795,1.6973157 7.235734,6.6075377 7.235734,8.2454917 0,0.288653 -1.380376,-0.02466 -4.049365,-0.919841 -1.659993,-0.556765 -3.072033,-1.012341 -3.137793,-1.012341 -0.06576,0 1.714536,1.847182 3.955831,4.105176 7.241563,7.295517 12.073941,16.123006 9.898104,18.08055 -0.179946,0.161892 -4.90661,-1.900318 -5.45083,-2.378149 -1.360434,-1.194476 -4.11885,-1.917309 -5.476668,-1.435055 -1.500293,0.532858 -1.441896,0.653511 0.482141,0.997355 1.341357,0.239714 1.85139,0.466041 2.96571,1.314132 2.043957,1.555622 1.826065,2.005516 -0.615466,1.270723 -0.952335,-0.286585 -1.444288,-0.285865 -2.372982,0.0041 -0.173147,0.05407 0.869376,0.843777 2.318205,1.755966 2.146573,1.351492 5.75177,4.314535 5.485453,4.508252 -0.0362,0.02634 -1.229706,0.634719 -2.652551,1.351855 -1.422847,0.717137 -2.688506,1.378518 -2.812232,1.469678 -0.753121,0.554905 -3.337189,0.394089 -5.529378,-0.344165 -3.26285,-1.098818 -4.529273,-1.324312 -5.490621,-0.976685 -1.105199,0.399646 -1.01109,0.529591 0.840776,1.157035 4.167688,1.412087 6.875923,3.281717 7.837764,5.41104 0.8297,1.836788 1.231149,4.208026 0.710551,4.196126 -0.09279,-0.0021 -0.927757,-0.202757 -1.8557,-0.445968 -2.360673,-0.618724 -3.388863,-0.590352 -4.048332,0.111621 -0.669148,0.712275 -0.644632,0.730956 1.362191,1.014409 7.248227,1.023775 7.501697,5.111541 0.597379,9.639205 -1.387527,0.909903 -2.82656,1.939052 -3.197737,2.287199 -0.631518,0.592334 -0.840999,0.64351 -3.261817,0.793233 -2.88615,0.178503 -4.52494,0.768326 -4.99401,1.797823 -0.329009,0.722097 -0.201593,0.817958 0.733288,0.549837 1.540947,-0.441937 6.911997,-0.281857 7.17734,0.213941 0.325034,0.60733 0.336432,0.598887 -0.698149,0.500228 -1.313172,-0.125232 -3.568257,0.944684 -3.568257,1.692919 0,0.614886 0.04872,0.621018 1.482597,0.186036 3.648608,-1.106844 3.999078,-0.901776 9.769946,5.725232 6.095531,6.999836 4.83486,6.31449 10.568347,5.744869 4.406765,-0.437813 13.409634,-0.444016 15.468823,-0.01085 1.551246,0.326315 1.551345,0.326275 4.861202,-1.012341 1.820422,-0.736239 3.542627,-1.338936 3.827157,-1.338936 0.28453,0 1.112839,-0.204844 1.840714,-0.45527 0.995342,-0.342444 1.63172,-0.421558 2.566252,-0.319877 1.12043,0.121906 1.63972,-0.0011 5.28288,-1.252636 6.61283,-2.271678 13.54596,-2.49882 15.66881,-0.513147 1.09909,1.02807 1.09916,1.02793 1.09916,0.0925 0,-2.580027 -2.08643,-3.71055 -8.54832,-4.632275 -4.42401,-0.631043 -6.32244,-1.169334 -6.98045,-1.979724 -0.5161,-0.635621 -0.69654,-0.5487 4.05609,-1.950785 4.70577,-1.388263 4.58617,-1.349498 4.47517,-1.45986 -0.0486,-0.04836 -2.36623,-0.264175 -5.15007,-0.480074 -4.90672,-0.380538 -5.62435,-0.534858 -5.62394,-1.207678 4e-5,-0.06915 1.82067,-0.733007 4.04574,-1.475362 5.29499,-1.766557 4.83421,-2.110899 -2.38383,-1.78077 -5.62315,0.257184 -5.14238,-2.005287 0.75551,-3.554822 1.31474,-0.345416 0.054,-0.56553 -3.4587,-0.60358 -2.05374,-0.02225 -2.05411,-0.02204 -2.86856,-1.015959 -1.044868,-1.27512 -1.073886,-1.18093 0.76584,-2.472717 1.93397,-1.357955 1.92497,-1.366828 -0.78238,-0.80977 -1.208441,0.248647 -2.261772,0.450235 -2.340942,0.448035 -1.102255,-0.03105 -1.563638,-1.877603 -0.719336,-2.878894 1.186031,-1.406564 1.198447,-1.390987 -0.812354,-1.011308 -2.28458,0.431372 -4.151183,-0.996289 -3.265434,-2.497522 0.513865,-0.870935 0.36945,-0.988096 -0.599963,-0.486792 -0.661938,0.342301 -2.283065,-1.636271 -2.283065,-2.786393 0,-0.279436 -0.112027,-0.401166 -0.302307,-0.328146 C 89.477919,48.633281 86.602071,44.099881 80.485527,33.18092 74.019566,21.638198 63.512441,10.518729 57.198059,8.5364299 55.954928,8.1461686 55.178801,7.9106617 54.87572,7.8734212 Z"
				on:mousemove={(e) => showTooltip(e, `Wings: ${hitzoneValues['Wings']}`)}
				on:mouseout={(e) => hideTooltip()}
				style="fill: {hitzoneColors['Wings']}"
				id="path124"><title id="title132"></title></path
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
