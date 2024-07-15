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

<div
	id="tooltip"
	display="none"
	style="position: absolute; display: none;"
></div>

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
			></defs
		><g
			id="layer1"
			style="stroke: var(--ctp-mocha-surface1); stroke-width: 1.0;"
			><path
				d="m 6.2828206,59.805135 c -0.7091301,0.06307 -5.96916874,0.822452 -6.03839108,0.871782 -0.18716824,0.133381 4.68695768,0.974617 5.64720048,0.974617 0.649459,0 0.6493555,-1.25e-4 1.1089763,1.203544 0.5138787,1.345761 0.7591754,1.515158 2.4510132,1.696021 0.7029675,0.07515 0.7027165,0.07548 0.234611,0.275435 -0.5695079,0.243263 -0.4180403,0.266811 2.9905155,0.466121 1.328201,0.07767 2.236374,0.181271 2.347143,0.268201 0.586705,0.460436 2.366241,1.982477 3.530017,3.018937 1.462618,1.30261 1.915024,1.565478 2.99465,1.740979 4.551156,0.739823 7.823711,-2.759793 4.525305,-4.839498 -0.618151,-0.389754 -0.618353,-0.389784 -1.944068,0.163815 -1.827643,0.763195 -2.790855,0.624046 -5.249292,-0.756543 -1.585337,-0.890281 -3.083384,-1.470312 -3.804935,-1.473812 -0.778515,-0.0037 -0.512863,-0.96338 0.451135,-1.629358 1.318349,-0.910777 0.601854,-1.135856 -2.842721,-0.893486 -2.249038,0.158249 -2.292759,0.156632 -2.541447,-0.077 -0.3822855,-0.35914 -3.1206253,-1.075488 -3.8597124,-1.009758 z"
				on:mousemove={(e) => showTooltip(e, `Fangs: ${hitzoneValues['Fangs']}`)}
				on:mouseout={(e) => hideTooltip()}
				style="fill: {hitzoneColors['Fangs']}"
				id="path203"><title id="title205"></title></path
			><path
				d="m 73.807381,35.038688 c -0.01954,-0.107475 -0.489603,0.295672 -1.431437,1.094507 -0.828379,0.702605 -3.619756,3.043153 -6.203239,5.201233 -2.583483,2.158081 -5.132366,4.307613 -5.663737,4.776969 -1.766463,1.56031 -1.498672,1.597771 -4.107243,-0.575675 -2.255214,-1.879032 -2.255398,-1.878965 -1.761649,-2.289266 0.66859,-0.555595 0.664216,-0.573985 -0.162781,-0.660425 -0.705326,-0.07372 -0.745252,-0.06216 -1.586467,0.448552 -0.810166,0.491864 -0.940127,0.531874 -2.128035,0.652673 -0.695908,0.07077 -1.633339,0.174614 -2.08256,0.230994 -1.025619,0.128732 -0.9456,0.206171 -1.183391,-1.144117 -0.258554,-1.468192 -0.175936,-1.437992 -1.405082,-0.518831 -0.932492,0.697322 -2.494321,1.546676 -2.844271,1.546676 -0.0684,0 -0.158611,-0.18529 -0.201021,-0.411345 -0.09299,-0.495658 -0.09877,-0.496132 -0.636654,-0.07855 -1.979864,1.53707 -4.44906,2.838586 -5.385201,2.838586 -0.316871,0 -0.318209,-0.0068 -0.09974,-0.529683 0.16367,-0.391712 0.08244,-0.624121 -0.164848,-0.471289 -0.37968,0.234655 -0.734979,-1.134883 -0.607715,-2.341459 0.160795,-1.52448 0.0537,-2.000431 -0.342614,-1.522905 -0.324327,0.39079 -0.815455,-1.081329 -0.815455,-2.445328 0,-1.071881 -0.310728,-3.140894 -0.471805,-3.140894 -0.121168,0 -0.691406,2.591577 -1.291911,5.871476 -0.747473,4.08262 -0.558018,3.723896 -1.685169,3.19412 -0.92434,-0.43445 -0.924067,-0.434464 -1.653129,-2.841687 -0.661331,-2.183587 -3.235461,-6.866742 -3.235461,-5.886462 0,0.07958 0.188186,1.098736 0.418062,2.264978 0.472442,2.396853 0.495031,4.006364 0.05478,3.891235 -0.191656,-0.05012 -0.192669,-0.01137 -0.02222,0.642855 0.202089,0.775676 -0.05885,3.428986 -0.585494,5.957259 -0.335033,1.608422 -0.921907,2.553757 -0.921907,1.485181 0,-2.404401 -0.156932,-2.565814 -0.870748,-0.897103 -0.317516,0.742257 -0.643507,1.349272 -0.723987,1.349272 -0.08095,0 -0.1829,0.223078 -0.22841,0.499194 -0.139614,0.847051 -0.211608,0.861661 -0.689363,0.14211 -0.242297,-0.364926 -0.457861,-0.644921 -0.479041,-0.622701 -0.02118,0.02222 -0.313229,0.753299 -0.649056,1.625224 -0.804402,2.088515 -0.738296,2.000586 -1.061951,1.424719 -0.35969,-0.639981 -0.394254,-0.621771 -0.577742,0.307475 -0.08608,0.435964 -0.254612,1.078627 -0.374137,1.42782 -0.123748,0.36153 -0.217909,0.968321 -0.219109,1.409216 -0.0021,0.774275 -0.0023,0.773977 -0.968933,1.343071 -0.639826,0.376675 -1.115976,0.761342 -1.408699,1.136881 -0.295336,0.378894 -0.588266,0.613891 -0.881083,0.707451 -0.684953,0.218852 -0.672803,0.291577 0.0863,0.521415 0.876353,0.265339 0.879468,0.233601 -0.106453,1.070735 -0.970112,0.823712 -0.955713,0.777889 -0.330213,1.046448 0.274496,0.117856 1.491853,0.683939 2.705262,1.257805 3.171266,1.499808 3.54026,1.551083 5.247741,0.727604 2.235491,-1.078127 5.083253,1.433976 4.143934,3.655591 -1.429127,3.380074 -6.930289,3.625857 -10.716142,0.478523 -2.054177,-1.707721 -2.054088,-1.707718 -2.427759,-1.487247 -0.373671,0.220471 -0.373922,0.220675 -0.646989,-0.180351 -0.150187,-0.220565 -0.305132,-0.401602 -0.344682,-0.402043 -0.138987,-0.0016 -0.230177,1.314996 -0.101802,1.469678 0.06884,0.08295 0.09121,0.284886 0.05013,0.448551 -0.04792,0.190912 0.0012,0.426055 0.136942,0.655774 0.205317,0.347574 0.204974,0.362921 -0.01602,0.524516 -0.220531,0.161256 -0.221383,0.1801 -0.02067,0.600997 0.302838,0.635056 0.232769,0.724729 -1.473295,1.878955 -1.556555,1.053076 -1.556981,1.052993 -0.617533,1.179256 1.921852,0.258299 2.376331,0.780887 1.869136,2.149223 -0.387898,1.046494 -0.472815,0.999217 1.067118,0.590662 2.203019,-0.584477 3.592875,-0.29718 4.868437,1.005623 0.66576,0.679977 0.654497,0.68253 0.937927,-0.258382 0.475298,-1.577857 1.481726,-2.206966 3.026172,-1.892391 0.880016,0.179242 0.880208,0.179118 0.832508,-0.569991 -0.116719,-1.833043 3.289343,-3.430033 7.332885,-3.438033 0.136845,-2.7e-4 0.205673,-0.09157 0.205673,-0.273885 0,-0.647933 0.902601,-0.607014 2.429825,0.110587 0.740544,0.347961 1.372816,0.63252 1.404566,0.63252 0.03176,0 0.02318,-0.277418 -0.01912,-0.6165 -0.143359,-1.14934 0.944976,-1.586445 3.006018,-1.207678 1.329236,0.244281 1.345377,0.22558 0.409794,-0.479041 -1.231421,-0.927425 0.04715,-1.73823 2.541963,-1.611788 1.397893,0.07085 4.023794,-0.120779 4.135665,-0.30179 0.02538,-0.04107 -0.314817,-0.226752 -0.756026,-0.412895 -1.314941,-0.554763 -1.005295,-1.59403 0.474907,-1.594218 0.594425,-7.6e-5 0.778774,-0.07963 2.57762,-1.115177 1.937613,-1.115432 1.937613,-1.115756 0,-1.116211 -1.937612,-4.56e-4 -1.937586,-4.98e-4 -1.233,-0.481108 0.787693,-0.537296 0.93229,-0.511327 -1.526522,-0.271301 -0.822017,0.08024 -0.822076,0.07996 0.293523,-0.729154 1.019339,-0.739302 1.156238,-0.885441 1.585433,-1.698605 0.258348,-0.489472 0.835834,-1.361409 1.283125,-1.937349 0.447291,-0.57594 0.818473,-1.057459 0.825273,-1.070219 0.0068,-0.01275 0.498447,-0.06006 1.09244,-0.104903 0.895284,-0.06759 1.091387,-0.117608 1.147217,-0.293522 0.08697,-0.274022 0.14396,-0.287216 2.228287,-0.521415 1.831459,-0.205787 2.51967,-0.370897 10.856702,-2.599842 2.031648,-0.54317 3.718332,-1.012037 3.748092,-1.041797 0.02976,-0.02975 -0.356268,-0.05426 -0.858346,-0.05426 -0.772984,0 -0.902526,-0.02751 -0.843876,-0.180351 0.0381,-0.09928 0.154451,-0.472932 0.258382,-0.83044 0.242777,-0.835125 1.419416,-1.754608 3.485575,-2.723865 1.632996,-0.766056 1.640716,-0.804142 0.112655,-0.561206 -0.64287,0.10221 -1.228699,0.186035 -1.301729,0.186035 -1.137132,0 1.10622,-2.956904 3.667476,-4.833813 1.56389,-1.146032 1.416503,-1.028308 1.357023,-1.081588 -0.02691,-0.0241 -0.735982,0.158841 -1.575614,0.406694 -0.839632,0.247852 -1.566882,0.452452 -1.615922,0.454752 -1.43813,0.06765 -0.790141,-3.377371 1.166854,-6.202722 0.861043,-1.243106 1.292335,-1.861397 1.27279,-1.968872 z"
				on:mousemove={(e) => showTooltip(e, `Head: ${hitzoneValues['Head']}`)}
				on:mouseout={(e) => hideTooltip()}
				style="fill: {hitzoneColors['Head']}"
				id="path202"><title id="title206"></title></path
			><path
				d="m 83.809355,72.572314 c 0.02919,0 1.832822,0.950599 4.008024,2.112533 4.674137,2.496796 7.346802,3.381757 13.290661,4.399731 5.24597,0.89845 4.1619,0.443781 9.6852,4.060218 4.86268,3.183897 4.86288,3.184186 6.51381,3.429765 2.01971,0.300434 2.09944,0.535676 1.04903,3.085599 -0.60158,1.460346 -0.60164,1.460347 -1.26245,1.705323 -0.45487,0.168627 -0.88029,0.457394 -1.36529,0.927075 -0.96566,0.935159 -2.24136,1.254717 -3.75791,0.941028 -0.25835,-0.05344 -0.93277,-0.100148 -1.49914,-0.10387 -0.61134,-0.004 -1.80621,-0.149386 -2.94039,-0.358118 -4.15318,-0.764342 -7.4586,-1.189728 -8.61084,-1.107942 -0.756333,0.05368 -1.508787,0.0149 -2.550748,-0.130742 -1.36004,-0.190096 -1.55007,-0.191954 -2.391069,-0.02429 -0.853978,0.170256 -0.979202,0.167724 -1.912028,-0.03772 -0.747288,-0.164584 -1.238471,-0.201821 -1.954403,-0.148312 -1.01772,0.07606 -10.376111,-1.399969 -10.376111,-1.636592 0,-0.0567 0.38838,-0.773426 0.862997,-1.592151 0.474615,-0.818727 1.010202,-1.897754 1.190108,-2.398304 0.179905,-0.500549 0.363382,-0.910022 0.407727,-0.910022 0.07727,0 2.022758,0.401533 2.548682,0.526067 0.215152,0.05095 0.281461,-0.02274 0.440283,-0.48886 0.270638,-0.794276 0.28967,-0.747303 -0.958081,-2.361612 -0.629723,-0.814723 -1.209963,-1.570859 -1.289844,-1.680518 -0.11763,-0.161478 -0.06932,-0.720671 0.255282,-2.941423 0.220437,-1.508094 0.437367,-3.310096 0.482141,-4.004406 0.04477,-0.694312 0.105171,-1.262456 0.134359,-1.262456 z"
				on:mousemove={(e) => showTooltip(e, `Belly: ${hitzoneValues['Belly']}`)}
				on:mouseout={(e) => hideTooltip()}
				style="fill: {hitzoneColors['Belly']}"
				id="path207"><title id="title208"></title></path
			><path
				d="m 66.488448,53.675793 c -0.340878,0.03916 -0.976617,0.22127 -2.429826,0.637171 -7.258678,2.077395 -7.544667,2.148697 -9.45317,2.345593 -1.777403,0.183371 -1.993055,0.249534 -2.138887,0.657841 -0.01848,0.05173 -0.570452,0.13087 -1.226799,0.1757 -1.320586,0.09021 -1.287,0.05722 -2.858223,2.778642 -0.372392,0.644995 -0.666856,1.001897 -0.997872,1.208711 -0.469723,0.293482 -0.469875,0.293291 0.384473,0.217042 0.854348,-0.07625 0.85421,-0.07588 0.733805,0.240812 -0.2587,0.680423 -0.233118,0.694724 1.052649,0.606164 1.739721,-0.119821 2.098058,0.405084 0.822172,1.203544 -0.961397,0.601652 -0.985984,0.507627 0.385506,1.466577 1.542527,1.078539 1.965785,1.613015 2.765723,3.493327 3.293003,7.740427 13.604473,16.902196 22.720577,20.186882 1.239751,0.446703 2.316065,0.814838 2.391585,0.818038 0.214487,0.009 1.761975,-2.96435 2.289266,-4.398181 0.595656,-1.61973 0.411431,-1.506751 1.908411,-1.168405 0.704158,0.159146 1.295018,0.274396 1.313098,0.256316 0.01808,-0.01808 -0.492316,-0.793417 -1.134298,-1.722893 -1.303531,-1.887282 -1.256197,-1.705383 -0.925008,-3.538802 0.133295,-0.7379 0.342387,-2.319569 0.464571,-3.514514 0.122183,-1.194945 0.301892,-2.663294 0.398942,-3.263367 0.13324,-0.823768 0.147308,-1.247911 0.05788,-1.731677 -0.251813,-1.362176 0.124876,-2.588159 1.022676,-3.326929 0.419708,-0.345361 0.746998,-0.644222 0.727088,-0.664042 -0.592847,-0.590184 -3.055869,-0.828249 -3.742407,-0.361735 -0.370678,0.251882 -0.444525,0.264458 -0.7028,0.12144 -0.15866,-0.08786 -0.58986,-0.161514 -0.958598,-0.163814 -1.83198,-0.01137 -2.443251,-0.213955 -2.75177,-0.911573 -0.155629,-0.351902 -0.553562,-0.925789 -0.884183,-1.275374 -0.60114,-0.635607 -0.60141,-0.63562 0.06149,-0.63562 0.80471,0 0.80427,0.07161 0.0072,-1.00614 -0.800366,-1.082256 -1.594505,-1.621613 -4.007507,-2.721798 -2.046251,-0.932968 -2.788029,-1.727441 -2.850989,-3.05356 -7.67e-4,-0.01615 0.315795,-0.02946 0.703316,-0.02946 0.861464,0 0.862353,0.04577 -0.02015,-1.003556 -0.590179,-0.70174 -0.867959,-0.927243 -1.497067,-1.21543 -0.424887,-0.194637 -0.931234,-0.456259 -1.124996,-0.58136 -0.08807,-0.05687 -0.154002,-0.09998 -0.243912,-0.120406 -0.06743,-0.01533 -0.148374,-0.01822 -0.262,-0.0052 z"
				on:mousemove={(e) => showTooltip(e, `Neck: ${hitzoneValues['Neck']}`)}
				on:mouseout={(e) => hideTooltip()}
				style="fill: {hitzoneColors['Neck']}"
				id="path206"><title id="title207"></title></path
			><path
				d="m 84.184009,53.85356 c 0.16852,-0.0378 0.809962,0.172349 2.112016,0.588078 2.980955,0.951784 5.217321,2.224963 6.051827,3.446301 0.605605,0.886336 1.009003,1.183673 2.871659,2.114083 1.158016,0.578438 1.139754,0.585683 0.898136,-0.346749 -0.10412,-0.401811 -0.165866,-0.754489 -0.136942,-0.783414 0.176839,-0.176838 2.279109,1.854527 3.464388,3.347599 2.051537,2.584279 2.783317,2.969226 2.659787,1.398881 -0.087,-1.106399 -0.40769,-1.348059 2.97553,2.238623 1.86234,1.974337 1.86539,1.976514 1.80247,1.316716 -0.0573,-0.600669 1.36616,-0.06965 2.31252,0.862479 0.66639,0.656367 0.68048,0.658029 0.77463,0.100769 0.19179,-1.135201 0.43335,-0.810847 0.72296,0.968933 0.16955,1.042095 0.17879,1.060388 0.77824,1.614372 0.70909,0.655316 0.67541,0.642426 0.67541,0.267167 0,-0.595214 0.8488,0.0087 1.87431,1.334286 0.7855,1.015391 0.69778,0.975 1.67793,0.782898 0.16437,-0.03222 0.20567,0.04208 0.20567,0.37207 0,0.292165 0.045,0.395324 0.154,0.353467 0.0847,-0.03251 0.28279,0.04019 0.44028,0.16123 0.18324,0.140842 0.48227,0.221055 0.82993,0.222726 0.54326,0.0026 0.54322,0.0026 0.96479,0.7953 0.79175,1.488605 0.76329,1.460216 1.66605,1.665531 0.81832,0.186113 0.81823,0.186145 0.87695,0.706417 0.0578,0.511925 0.0682,0.52261 0.63717,0.667143 1.14737,0.291463 1.46227,0.831658 0.94155,1.615922 -0.53502,0.805784 -0.29053,1.782636 0.46457,1.856217 0.38417,0.03744 0.43092,0.286486 0.23874,1.272274 -0.10239,0.525199 1.9992,3.340561 2.85668,3.82664 0.99254,0.562637 2.02353,1.636132 1.6769,1.746147 -0.34471,0.109408 -1.12481,0.112824 -1.73633,0.0078 -0.65155,-0.11198 -0.78841,0.439863 -0.14418,0.58136 0.33203,0.07293 0.81907,0.732985 0.81907,1.11001 0,0.412335 -1.81625,0.115209 -2.466,-0.403593 -0.48158,-0.384523 -1.12395,-0.699991 -2.52491,-1.239718 -1.03339,-0.398119 -1.89403,-0.73809 -1.91254,-0.755509 -0.0185,-0.01742 0.0742,-0.304997 0.20567,-0.638721 0.13155,-0.333724 0.23926,-0.645272 0.23926,-0.692464 0,-0.04719 -0.9116,-0.239788 -2.02571,-0.427881 -2.55257,-0.430937 -3.43925,-0.929521 -11.4205,-6.423897 -0.41252,-0.283981 -0.88548,-0.39548 -3.88503,-0.916223 -11.211049,-1.946322 -19.992783,-6.06756 -19.028296,-8.930205 0.03259,-0.09673 0.118685,-0.477829 0.191203,-0.846976 0.124942,-0.636012 0.177616,-0.70966 1.005107,-1.405599 1.068787,-0.898874 1.095095,-0.760328 -0.271818,-1.426787 -1.575487,-0.768149 -2.898275,-0.992423 -3.810104,-0.645955 -0.835655,0.317525 -3.382222,0.0144 -3.382222,-0.402559 0,-0.07385 -0.171981,-0.312012 -0.381889,-0.529167 -0.326506,-0.337777 -0.354558,-0.409739 -0.19482,-0.499711 0.792907,-0.446603 0.793003,-0.468375 0.0088,-1.498617 -0.879399,-1.155226 -0.879507,-1.152885 -0.08527,-1.25212 0.543273,-0.06788 1.709973,-0.707211 1.709973,-0.936893 0,-0.02145 0.07796,-0.226306 0.173633,-0.45527 0.173941,-0.416298 0.174239,-0.416309 -0.491443,-0.638204 -1.727665,-0.575888 0.827141,-1.299815 2.943489,-0.834057 2.26705,0.498921 4.475602,0.133913 5.48442,-0.906922 0.435674,-0.4495 0.410406,-0.48694 -1.761649,-2.605525 -0.589967,-0.575444 -0.894574,-0.860857 -0.726054,-0.898654 z"
				on:mousemove={(e) => showTooltip(e, `Back: ${hitzoneValues['Back']}`)}
				on:mouseout={(e) => hideTooltip()}
				style="fill: {hitzoneColors['Back']}"
				id="path205"><title id="title209"></title></path
			><path
				d="m 78.078438,38.712366 c -0.913018,0.212441 -1.630908,3.540086 -1.630908,7.752498 0,4.756002 1.94e-4,4.756106 -0.58446,5.412073 -0.67949,0.762369 -0.28017,1.549218 1.068152,2.104781 0.947858,0.390555 1.867188,0.354841 3.817854,-0.149345 1.893065,-0.489297 1.789844,-0.431742 1.53479,-0.863513 -0.275099,-0.465709 -0.294704,-0.373872 0.624252,-2.956409 0.848017,-2.383179 0.736728,-2.921447 -0.784449,-3.784782 -0.216802,-0.123045 -0.139664,-0.228064 -0.84801,1.156002 -0.579182,1.131702 -0.599263,1.154704 -0.545703,0.645439 0.03057,-0.290642 0.111881,-1.796478 0.180351,-3.346566 0.06847,-1.550089 0.147133,-2.960824 0.175183,-3.135209 0.04532,-0.281767 -2.400977,-2.739299 -2.82205,-2.834969 -0.06245,-0.01419 -0.124132,-0.01416 -0.185002,0 z"
				on:mousemove={(e) => showTooltip(e, `Crystal`)}
				on:mouseout={(e) => hideTooltip()}
				style="fill: {hitzoneColors['Crystal']}"
				id="path204"><title id="title210"></title></path
			><path
				d="m 34.695557,71.644206 c 0.08827,-0.0099 0.1657,0.0073 0.22996,0.05426 0.210454,0.153888 0.209295,0.175825 -0.03307,0.691431 -0.609947,1.297603 -0.217651,2.234507 0.516764,1.234033 0.57403,-0.781983 1.630794,-1.353065 2.403471,-1.299146 0.702634,0.04903 0.719167,0.08938 0.21394,0.522966 -0.288481,0.247577 -0.442755,0.487628 -0.465087,0.722953 -0.0555,0.584829 0.06284,0.650086 0.722436,0.399459 0.823271,-0.312818 2.014943,-0.302417 2.53938,0.0217 0.450702,0.278549 0.430485,0.407155 -0.08268,0.519865 -0.593212,0.130292 -0.449881,0.669903 0.207739,0.781348 0.934077,0.158294 2.341423,1.506884 1.572514,1.506884 -0.620429,0 -0.0032,1.313253 0.693498,1.475363 0.964499,0.224437 1.403163,0.576416 0.881083,0.70745 -0.354673,0.08902 -0.374793,0.290936 -0.05788,0.577742 0.272687,0.246778 0.249469,0.261228 0.566374,-0.367419 0.243851,-0.483729 0.243689,-0.483273 -0.04444,-0.753959 -0.523017,-0.49135 -0.320958,-0.521417 1.470195,-0.219108 1.78946,0.302022 3.359094,-1.18327 2.383317,-2.25516 -0.279307,-0.306818 -0.279295,-0.306904 1.459342,-0.392741 2.666972,-0.13167 5.033932,-1.498583 4.015776,-2.319238 -0.280604,-0.226172 -0.280841,-0.226285 0.423746,-0.155029 1.297363,0.131205 1.231833,0.08581 1.991093,1.387512 0.636905,1.091927 0.912617,1.4077 3.082499,3.533118 2.722968,2.667169 2.587653,2.457309 1.707907,2.648934 -3.757197,0.818385 -7.837332,2.225605 -9.374622,3.232877 -0.792718,0.519409 0.01327,0.611849 1.139465,0.130742 0.154107,-0.06583 0.179773,-0.02387 0.133325,0.219108 -0.07498,0.392209 0.357964,0.417948 0.754993,0.04496 0.271789,-0.255332 0.271818,-0.255332 0.271818,0 0,0.764426 1.303994,-0.161187 2.329057,-1.653129 0.454303,-0.661222 0.540852,-0.69283 0.441317,-0.162264 -0.127325,0.678701 0.215633,1.02757 0.62115,0.632003 0.121756,-0.118768 0.143114,-0.07078 0.111622,0.249597 -0.04861,0.494561 0.241369,0.740321 0.605131,0.513147 0.316888,-0.1979 0.320363,-0.194998 0.261482,0.206189 -0.05078,0.345961 0.02507,0.411915 0.415479,0.361218 0.08073,-0.01048 0.146761,0.06795 0.146761,0.174667 0,0.147763 0.06922,0.176956 0.290421,0.121439 0.237212,-0.05954 0.276593,-0.03727 0.215491,0.121957 -0.06134,0.159857 -0.01712,0.183938 0.244946,0.133841 0.244738,-0.04678 0.304377,-0.02128 0.254765,0.108004 -0.04783,0.124656 -0.0033,0.149425 0.169499,0.09457 0.134337,-0.04264 0.234094,-0.02097 0.234094,0.05116 0,0.06913 0.21139,0.217254 0.469739,0.329179 0.258348,0.111924 0.469739,0.243654 0.469739,0.293005 0,0.04935 0.290727,0.08992 0.645955,0.08992 1.695669,0 -0.14178,0.45828 -2.877344,0.717786 -3.224317,0.305869 -9.671199,0.124472 -10.92078,-0.307475 -0.372588,-0.128795 -0.46612,-0.111806 -0.998389,0.181384 -1.553838,0.855901 -5.179151,1.670711 -8.583455,1.929598 -2.901964,0.220685 -2.351934,0.264363 -5.265312,-0.416512 -1.351877,-0.315943 -2.489001,-0.624816 -2.526977,-0.686263 -0.03798,-0.06145 -0.517292,-0.275095 -1.065052,-0.474906 -1.070973,-0.390668 -2.140801,-1.082467 -2.047937,-1.324467 0.0315,-0.08209 -0.423344,-0.591911 -1.015958,-1.138432 -0.967841,-0.892565 -1.048709,-0.99836 -0.823723,-1.081588 0.229805,-0.08501 0.249598,-0.178291 0.249598,-1.18494 0,-1.025641 0.02022,-1.11783 0.332796,-1.501201 0.183143,-0.224624 0.535184,-0.772141 0.782381,-1.21698 0.399418,-0.718769 0.466119,-0.786569 0.598413,-0.605648 0.134046,0.183319 0.173481,0.155758 0.396358,-0.281119 0.136134,-0.266844 0.302595,-0.451653 0.369487,-0.410311 0.130741,0.0808 0.69143,-0.3852 0.69143,-0.574642 0,-0.388571 1.106896,-2.119368 1.17719,-1.840715 0.0596,0.23628 0.110877,0.135872 0.262516,-0.515214 0.148552,-0.63783 0.281485,-0.9046 0.628902,-1.260388 0.525795,-0.538462 0.564528,-0.52364 0.394808,0.150379 -0.321599,1.277182 -0.09124,1.764107 0.372587,0.788065 0.853602,-1.796258 2.001046,-3.192671 2.618962,-3.261816 z"
				on:mousemove={(e) => showTooltip(e, `Tail: ${hitzoneValues['Tail']}`)}
				on:mouseout={(e) => hideTooltip()}
				style="fill: {hitzoneColors['Tail']}"
				id="path199"><title id="title211"></title></path
			></g
		><metadata id="metadata17"
			><rdf:RDF
				><cc:License
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
				><cc:Work rdf:about=""
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
