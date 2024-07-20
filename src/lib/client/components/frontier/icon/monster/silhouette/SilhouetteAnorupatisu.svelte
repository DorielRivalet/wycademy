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
			></defs
		>
		<!-- svelte-ignore a11y-no-static-element-interactions -->
		<!-- svelte-ignore a11y-mouse-events-have-key-events -->
		<g id="layer1" style="stroke: var(--ctp-mocha-surface1); stroke-width: 1.0;"
			><path
				d="m 116.57738,55.962476 c 0.59841,-0.05623 0.26536,0.754003 -0.55811,2.389518 -2.4111,4.788815 -3.09503,11.415603 -1.49034,14.440462 0.56757,1.06988 1.08028,1.35453 2.81119,1.560112 1.21322,0.144091 4.57955,1.203796 4.93614,1.55391 0.13741,0.134915 -0.38949,0.217558 -1.38751,0.217558 -2.08188,0 -1.7739,0.304195 0.93275,0.921907 2.11211,0.482026 5.91872,2.044616 5.93608,2.436544 0.005,0.12365 -1.75019,0.147132 -4.24574,0.05736 -4.86335,-0.174938 -8.19373,0.130147 -11.95224,1.094507 -7.45811,1.913613 -11.46902,1.853668 -12.17962,-0.182418 -0.582268,-1.668377 -0.643561,-2.249804 -0.275435,-2.617928 0.307665,-0.307664 0.510847,-5.012078 0.24753,-5.731433 -0.672385,-1.836892 1.593815,-5.516154 4.216285,-6.845061 0.62384,-0.316133 1.22816,-0.807032 1.34255,-1.090889 0.4812,-1.194062 2.2213,-2.608903 6.63629,-5.394503 2.90166,-1.830788 4.43177,-2.75342 5.03018,-2.809647 z"
				on:mousemove={(e) =>
					showTooltip(e, `Tail Tip: ${hitzoneValues['Tail Tip']}`)}
				on:mouseout={(e) => hideTooltip()}
				style="fill: {hitzoneColors['Tail Tip']}"
				id="path81"><title id="title86"></title></path
			><path
				d="m 77.250065,64.061723 c 0.112504,-0.02926 0.185956,0.03078 0.254765,0.14211 0.07126,0.115301 0.587849,0.117551 1.189591,0.0052 0.973819,-0.181929 1.161715,-0.134924 2.215369,0.553971 1.396471,0.913034 1.415949,1.018151 0.22686,1.219047 -2.031475,0.343216 -0.943776,1.515153 1.406115,1.515153 3.156672,0 4.443958,0.73277 2.963644,1.686719 -1.346855,0.867944 -0.145303,0.921435 1.912544,0.08527 2.740806,-1.113689 3.558913,-1.056663 2.375566,0.164848 -1.61297,1.664991 -1.112624,1.950523 1.444873,0.824756 4.850074,-2.134925 5.96467,-2.104991 5.210018,0.139526 -0.325822,0.969069 -0.511421,1.762166 -0.412378,1.762166 0.09904,0 0.677252,-0.149471 1.284676,-0.332279 1.098418,-0.330576 1.87653,0.355872 1.565279,1.381311 -0.03892,0.128233 -0.102816,1.021207 -0.141593,1.984375 -0.03878,0.963168 -0.196217,2.172156 -0.350366,2.686658 -0.229414,0.765713 -0.215573,1.185167 0.07855,2.311486 0.339355,1.299531 0.3277,1.816025 -0.03927,1.717725 -0.08861,-0.02373 -1.629853,-0.107443 -3.425114,-0.186035 -7.034254,-0.307945 -14.646869,-2.990621 -20.094381,-7.080705 -3.980808,-2.988859 -3.927027,-2.431263 -0.667143,-6.89777 1.97493,-2.705935 2.664889,-3.595728 3.002401,-3.683496 z"
				on:mousemove={(e) => showTooltip(e, `Tail: ${hitzoneValues['Tail']}`)}
				on:mouseout={(e) => hideTooltip()}
				style="fill: {hitzoneColors['Tail']}"
				id="path80"><title id="title85"></title></path
			><path
				d="m 59.328162,19.309932 c -6.023567,0.56249 -9.106251,3.222447 -7.023861,6.060612 0.299502,0.408201 0.730764,1.26673 0.958598,1.907894 0.570708,1.606076 2.035103,4.054884 2.927986,4.896342 0.699807,0.659503 2.09703,3.07119 2.09703,3.619418 0,0.138431 -0.393493,0.415001 -0.874365,0.614949 -0.480874,0.199948 -2.101869,1.511319 -3.602364,2.914034 -3.537282,3.306772 -6.231511,4.969996 -10.180257,6.285921 -2.017102,0.672204 -3.465705,1.329557 -4.681885,2.123902 -3.851596,2.515663 -6.831703,3.73575 -9.572026,3.91914 -3.705514,0.247986 -7.299973,1.630716 -8.860958,3.408578 -0.925506,1.054093 -0.867562,1.088716 0.905371,0.536918 3.22101,-1.002491 9.219873,-0.645883 8.404139,0.499711 -0.557249,0.782582 -0.148435,1.074429 1.841748,1.316199 1.536097,0.186606 -0.361081,2.156457 -2.076876,2.156457 -1.3401,0 -3.988972,1.080083 -3.463871,1.412317 0.184913,0.117004 0.523221,0.214524 0.751892,0.216524 1.43179,0.01229 2.793492,1.18103 2.644283,2.269629 -0.08014,0.584668 -0.145728,1.310653 -0.145728,1.613339 0,0.497413 -0.101491,0.550354 -1.056783,0.550354 -1.075709,0 -3.577081,1.039173 -3.261299,1.354956 0.08694,0.08694 0.910248,0.436125 1.829862,0.775663 2.892957,1.068127 2.187869,5.704459 -1.120345,7.365442 -2.33567,1.172689 -3.859131,2.454315 -4.599203,3.870048 -0.826163,1.580428 -0.807428,1.697718 0.153479,0.964799 1.090435,-0.831715 2.680862,-1.274341 4.577499,-1.274341 2.555462,0 2.445326,5.829154 -0.136943,7.246069 -3.169649,1.739219 -4.725535,3.242947 -6.207373,6.000151 -1.710631,3.182917 -1.727557,3.149655 0.715202,1.396297 5.187112,-3.723191 7.706311,-3.515908 8.337476,0.68678 0.545607,3.633007 0.586614,3.478322 -1.256254,4.749581 -0.838132,0.578164 -2.638082,3.279705 -2.638082,3.959445 0,0.0856 0.67927,-0.20512 1.509468,-0.64595 3.080902,-1.63597 3.745475,-1.26723 4.900993,2.72024 2.069659,7.14203 6.186694,14.60971 9.357569,16.97313 1.038029,0.77369 1.025035,0.6631 -0.202572,-1.71773 -1.007691,-1.95431 -2.509408,-6.69511 -2.509408,-7.92251 0,-0.17136 2.019615,-3.16469 4.488099,-6.65179 4.827014,-6.818855 6.919768,-9.259154 17.489371,-20.397721 4.745717,-5.001179 5.303169,-5.684751 8.626347,-10.568864 1.954072,-2.871923 5.17946,-7.438902 7.167521,-10.149251 8.580547,-11.697972 8.683508,-13.053746 1.79989,-23.683309 -4.909787,-7.581611 -5.347315,-8.087143 -10.235034,-11.817883 -0.471476,-0.359873 -1.073225,-1.032154 -1.336869,-1.494483 -0.263645,-0.462327 -1.215268,-1.453919 -2.115116,-2.203483 -2.249895,-1.874138 -2.221627,-1.947853 0.928108,-2.38125 1.282329,-0.176446 1.282617,-0.176456 -0.299723,-1.190625 -1.346503,-0.863012 -1.527143,-1.054617 -1.211812,-1.285193 0.673537,-0.492501 -1.87828,-1.174578 -3.742924,-1.000456 z"
				on:mousemove={(e) => showTooltip(e, `Wings: ${hitzoneValues['Wings']}`)}
				on:mouseout={(e) => hideTooltip()}
				style="fill: {hitzoneColors['Wings']}"
				id="path79"><title id="title82"></title></path
			><path
				d="m 51.106441,33.483744 c 0.283004,0.0026 0.418272,0.178579 0.309542,0.556555 -0.565934,1.967348 -0.393525,1.980016 3.468522,0.257866 0.757051,-0.337582 1.400211,-0.58614 1.428854,-0.552421 0.802356,0.944556 1.010308,2.066452 0.424263,2.289266 -0.346846,0.131871 -1.897655,1.423117 -3.445784,2.869075 -4.393089,4.103157 -8.545045,6.443445 -10.100676,5.693193 -0.733035,-0.35353 -0.653245,-0.648023 0.175183,-0.648023 0.686805,0 0.925698,-0.298876 0.466122,-0.58291 -0.128234,-0.07925 -0.233061,-0.396909 -0.233061,-0.7059 0,-0.644138 -0.59554,-0.571908 -0.808219,0.09818 -0.124046,0.390833 -2.178314,1.546007 -2.383834,1.340487 -0.05742,-0.05742 0.264569,-0.617637 0.715202,-1.244885 0.785997,-1.094051 0.801066,-1.15177 0.368969,-1.421619 -0.542709,-0.338929 -1.309256,-0.36702 -1.502234,-0.05478 -0.130716,0.211503 -0.88232,0.456891 -2.568318,0.838192 -0.663274,0.150004 -0.630487,0.08688 0.640787,-1.218014 1.602927,-1.645317 1.596812,-1.617736 0.34985,-1.524971 -2.342181,0.174241 -3.008924,-0.263688 -1.336353,-0.877466 0.831272,-0.305049 1.789724,-0.746667 2.130103,-0.981335 0.7858,-0.541758 1.307889,-0.536524 2.153874,0.02119 0.370971,0.244562 0.804715,0.394863 0.963765,0.33383 0.15905,-0.06103 0.679815,0.05175 1.157035,0.251147 1.395636,0.583134 1.885892,0.312885 2.442745,-1.346688 0.694344,-2.069332 0.79601,-2.182729 1.3193,-1.474845 0.43739,0.591683 0.437558,0.591317 1.669665,-0.617017 0.841959,-0.825712 1.723025,-1.302441 2.194698,-1.298112 z"
				on:mousemove={(e) => showTooltip(e, `Legs: ${hitzoneValues['Legs']}`)}
				on:mouseout={(e) => hideTooltip()}
				style="fill: {hitzoneColors['Legs']}"
				id="path77"><title id="title87"></title></path
			><path
				d="m 102.7684,5.7324666 c -1.31535,-0.00388 -3.634757,0.4143312 -6.652303,1.2252482 -4.837348,1.2999611 -4.837479,1.2998104 -9.383923,1.4490072 -4.546444,0.1491969 -4.546476,0.1494032 -7.927165,2.011247 -1.859379,1.024015 -3.643,1.889043 -3.963582,1.922363 -0.320583,0.03332 -1.922403,0.601315 -3.559473,1.262455 -3.465172,1.399428 -3.116534,1.321073 -3.269568,0.735873 -0.130839,-0.500349 -1.178917,-0.637571 -3.837492,-0.502295 -0.812939,0.04136 -1.224214,-0.02911 -1.224214,-0.209807 0,-0.201375 -0.718073,-0.228843 -2.763656,-0.105936 -2.359888,0.141791 -2.783575,0.114681 -2.899565,-0.187586 -0.119417,-0.311194 -0.342279,-0.298468 -1.841231,0.10542 -0.937818,0.252693 -2.78491,0.546386 -4.104659,0.652674 -1.614193,0.13 -2.529557,0.311249 -2.797762,0.553971 -0.219282,0.198448 -0.673609,0.465122 -1.009241,0.592729 -0.338683,0.128766 -0.666072,0.473326 -0.735872,0.774113 -0.06917,0.298075 -0.404837,1.204343 -0.745691,2.014347 -0.615245,1.462066 -0.608076,3.401013 0.01809,5.032768 0.07862,0.204868 0.04931,0.372587 -0.06511,0.372587 -0.114448,0 -0.165618,1.057355 -0.113688,2.350244 0.06199,1.543367 0.0045,2.439803 -0.166915,2.61121 -0.143562,0.143562 -0.260966,0.452177 -0.260966,0.685746 0,0.233569 -0.262327,0.544329 -0.58291,0.690397 -0.683496,0.311422 -0.765369,0.656808 -0.155546,0.656808 0.663887,0 0.781814,0.275614 0.270785,0.633553 -0.625499,0.438116 -0.585262,0.686685 0.151412,0.932243 0.448499,0.1495 0.636156,0.390456 0.688846,0.8847 0.07077,0.663761 0.469316,1.083629 1.740463,1.834514 0.621237,0.366973 0.639767,0.358564 1.701188,-0.77618 0.590206,-0.630979 1.133478,-1.049197 1.207678,-0.929143 0.0742,0.120049 0.426105,0.218075 0.781864,0.218075 0.888496,0 0.969486,0.148409 0.584978,1.068668 -0.412938,0.988303 -0.361336,0.987067 2.099096,-0.04289 2.369742,-0.991993 2.400584,-1.026596 1.689303,-1.879989 -0.76743,-0.920759 -2.659271,-4.311918 -2.856673,-5.120617 -0.08991,-0.368338 -0.462052,-1.108308 -0.82734,-1.644344 -1.154108,-1.693581 -0.604639,-4.396573 1.033012,-5.080827 1.109306,-0.463498 5.175752,-1.448978 6.719486,-1.628325 1.470951,-0.170891 4.667499,0.871182 4.177006,1.361674 -0.382131,0.382132 -0.301572,0.474548 1.042831,1.200961 1.915481,1.034978 1.976155,1.486505 0.227376,1.683618 -0.600035,0.06763 -1.134404,0.263116 -1.201994,0.43925 -0.06694,0.174444 -0.29419,0.321728 -0.504878,0.327628 -0.239912,0.0067 0.119988,0.468274 0.963248,1.23455 0.740543,0.672935 1.527526,1.584678 1.748731,2.026233 0.251466,0.501958 1.64957,1.813594 3.730521,3.500045 3.328255,2.69729 3.328525,2.697386 6.645073,7.864119 3.377438,5.261591 3.828925,5.81004 3.594612,4.366142 -0.153239,-0.944309 -0.01184,-0.989012 1.470195,-0.466121 1.75164,0.618015 1.704383,0.693798 1.516703,-2.429826 -0.160154,-2.665511 -0.227378,-2.937625 -1.636592,-6.644556 -1.469446,-3.865366 -1.469142,-3.865397 -0.829924,-3.865397 0.882257,0 0.961041,-0.149589 0.572058,-1.080554 -0.426832,-1.021556 0.225865,-2.380118 1.415935,-2.947624 0.567398,-0.270574 1.076529,-0.92728 2.057755,-2.654101 1.990168,-3.50242 3.313468,-4.68479 5.467367,-4.884974 1.798832,-0.167183 1.760945,-0.134906 2.055171,-1.722375 0.139789,-0.754211 0.548411,-1.090139 5.396053,-4.430221 4.907813,-3.381542 6.368083,-4.659213 6.368083,-5.5722694 0,-0.3126083 -0.42777,-0.4668914 -1.21698,-0.469222 z"
				on:mousemove={(e) => showTooltip(e, `Torso: ${hitzoneValues['Torso']}`)}
				on:mouseout={(e) => hideTooltip()}
				style="fill: {hitzoneColors['Torso']}"
				id="path76"><title id="title84"></title></path
			><path
				d="m 40.484351,12.308809 c -0.218103,0.06029 -0.636691,0.442616 -1.473812,1.207679 -2.67331,2.443194 -6.333618,3.481659 -6.391858,1.813326 -0.119822,-3.432504 -1.435749,-2.727493 -4.024561,2.156457 -2.016451,3.804157 -3.899606,3.964342 -5.208984,0.443384 -1.117529,-3.005068 -2.800854,0.905838 -3.170866,7.366992 -0.08513,1.486519 1.04474,1.789335 4.067969,1.089339 2.944644,-0.681799 2.791282,-0.772167 2.637565,1.547709 -0.126528,1.909558 -0.126732,1.909419 2.272729,3.711919 1.319704,0.991375 2.466159,1.804724 2.547648,1.807124 0.0815,0.0024 1.519473,-1.447095 3.195671,-3.220992 4.153109,-4.395172 6.620925,-5.188275 9.581844,-3.079915 0.368051,0.262076 0.731323,0.476457 0.807703,0.476457 0.236656,0 0.150314,-2.864552 -0.115239,-3.820956 -0.181672,-0.65424 -0.180348,-0.950518 0.0041,-1.064534 0.177215,-0.109526 0.193027,-0.613513 0.05219,-1.643311 -0.204358,-1.494298 0.02572,-3.003133 0.630452,-4.133081 0.146736,-0.274179 0.267167,-0.748283 0.267167,-1.053682 0,-0.402528 0.249657,-0.6961 0.907955,-1.066085 0.809361,-0.454886 1.354623,-1.120678 1.114144,-1.361157 -0.04802,-0.04802 -0.811333,0.06249 -1.69602,0.24598 -4.520497,0.937594 -5.633521,0.80251 -5.734534,-0.697115 -0.03529,-0.523912 -0.0532,-0.785825 -0.271301,-0.725538 z"
				on:mousemove={(e) => showTooltip(e, `Torso: ${hitzoneValues['Neck']}`)}
				on:mouseout={(e) => hideTooltip()}
				style="fill: {hitzoneColors['Neck']}"
				id="path75"><title id="title83"></title></path
			><path
				d="m 14.042554,19.871655 c -0.193119,0.150122 -0.07128,0.973058 0.311092,2.510958 0.191295,0.769398 0.409325,2.762675 0.484725,4.429704 0.09221,2.038552 0.247735,3.207921 0.475423,3.571358 0.754941,1.205048 0.530478,2.481951 -0.450619,2.563151 -1.00837,0.08346 -1.032769,0.149691 -0.407727,1.093473 0.649317,0.980434 0.585291,1.238434 -0.349849,1.413868 -0.448816,0.0842 -0.815971,0.227083 -0.815971,0.317293 0,0.09021 0.367155,0.338913 0.815971,0.552938 1.016714,0.484836 1.014997,0.609242 -0.02067,1.314648 -0.833774,0.567894 -0.834087,0.567618 -0.0186,0.985987 1.986638,1.019206 -2.012086,8.864841 -8.3767498,16.435172 C 2.5145832,58.836641 0,62.224169 0,62.724854 0,63.843312 1.6544051,62.240383 7.205245,55.742851 16.634383,44.705579 19.028833,42.151669 19.837032,42.270288 c 0.641577,0.09416 0.731527,0.05036 0.599963,-0.292489 -0.1094,-0.285093 -0.01655,-0.439799 0.317294,-0.527099 0.35676,-0.09329 0.410645,-0.197411 0.220658,-0.426331 -0.303693,-0.365927 0.17563,-1.272273 0.672827,-1.272273 0.221326,0 0.275444,-0.173088 0.176734,-0.566374 -0.174975,-0.697157 0.191534,-1.7283 0.681095,-1.916162 0.591999,-0.227172 0.658449,0.06333 0.348816,1.522387 -0.319718,1.506577 -0.187576,2.101254 0.364836,1.642794 0.260199,-0.215949 0.329178,-0.194297 0.329178,0.104903 0,0.268405 0.212108,0.378272 0.730188,0.378272 0.714719,0 0.727139,0.01941 0.607198,0.913639 -0.110039,0.820406 -0.06435,0.928316 0.445451,1.056266 0.321424,0.08067 0.500988,0.250319 0.413929,0.391191 -0.107027,0.17317 0.373927,0.19902 1.582332,0.08578 1.640083,-0.153688 1.815545,-0.122461 3.175,0.56379 1.690319,0.853271 1.672305,0.889864 0.981335,-1.992127 -0.257895,-1.075652 -0.397654,-2.244107 -0.323494,-2.701127 0.09124,-0.562254 -0.01707,-1.094714 -0.358635,-1.764233 -0.387197,-0.75897 -0.440599,-1.087484 -0.255798,-1.573548 0.12845,-0.337835 0.171175,-0.71508 0.09509,-0.838191 -0.07609,-0.123112 0.02279,-0.469571 0.219625,-0.769979 0.421371,-0.643094 -2.269145,-3.142473 -4.154269,-3.859196 -0.462804,-0.175956 -0.579247,-0.353409 -0.497127,-0.758093 0.338806,-1.669553 0.363051,-3.209624 0.05064,-3.209624 -0.600963,0 -3.758732,0.760831 -4.024044,0.96945 -0.246828,0.194085 -0.471788,0.11206 -2.41794,-0.879016 -0.320583,-0.163257 -0.584944,-0.486013 -0.587044,-0.717785 -0.0021,-0.231772 -0.526275,-0.946335 -1.165304,-1.5875 -0.639029,-0.641166 -1.739013,-1.923803 -2.444295,-2.850472 -0.877529,-1.152986 -1.385596,-1.67561 -1.578715,-1.525489 z"
				on:mousemove={(e) => showTooltip(e, `Head: ${hitzoneValues['Head']}`)}
				on:mouseout={(e) => hideTooltip()}
				style="fill: {hitzoneColors['Head']}"
				id="path74"><title id="title81"></title></path
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
