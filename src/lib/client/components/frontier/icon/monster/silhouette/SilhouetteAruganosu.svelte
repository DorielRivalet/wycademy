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
			></defs
		><g
			id="layer1"
			style="stroke: var(--ctp-mocha-surface1); stroke-width: 1.0;"
			><path
				d="m 95.858748,65.326762 c -0.225589,0.01287 -0.542315,0.04738 -0.966349,0.09198 -0.774644,0.08147 -1.558515,0.149395 -1.742012,0.150895 -0.183498,0.0015 -0.871399,0.353879 -1.528589,0.782898 -1.157823,0.755835 -1.28898,0.799439 -4.234367,1.406116 -1.671829,0.344355 -4.732905,1.0507 -6.802169,1.569413 -4.31708,1.082184 -4.009933,1.077146 -3.322278,0.05529 1.059252,-1.574042 1.046882,-1.656731 -0.341581,-2.316655 -2.225751,-1.057878 -2.61225,-0.941613 -6.91379,2.079977 -1.695558,1.191035 -3.146439,2.209558 -3.224609,2.263427 -0.07817,0.05387 0.632937,0.50811 1.580265,1.009758 1.644383,0.870768 1.739352,0.948982 2.099613,1.727026 0.290346,0.62705 0.874879,1.2803 2.535246,2.831869 1.706029,1.594236 2.121057,2.061 1.981791,2.228804 -0.130201,0.156872 -0.129168,0.315146 0.0041,0.607715 0.258651,0.567678 0.235109,0.634796 -0.303341,0.857829 -0.266159,0.110247 -0.590492,0.363751 -0.720886,0.562756 -0.21921,0.334559 -0.313609,0.354241 -1.251604,0.266651 -0.652887,-0.06097 -1.233727,-0.02205 -1.629357,0.10852 -0.792651,0.261599 -2.052731,-0.163634 -3.780648,-1.275374 -1.850417,-1.190555 -2.410702,-1.090948 -2.243791,0.397908 0.0687,0.61287 0.110708,2.515481 0.09302,4.228166 -0.02962,2.868673 -0.01127,3.107497 0.235644,3.034957 0.147416,-0.04331 1.789416,-0.369476 3.648873,-0.72502 3.814526,-0.72937 7.255777,-1.778827 11.086145,-3.381189 11.916385,-4.984997 19.932753,-5.204347 24.762833,-0.676962 1.6651,1.560749 11.15327,4.211227 12.86278,3.593063 4.15852,-1.503742 7.47067,-3.826246 9.94771,-6.975285 0.59375,-0.754827 -1.56934,-4.077693 -3.99304,-6.133476 -2.62984,-2.230631 -2.59307,-2.209812 -4.97592,-2.801896 -2.12285,-0.527477 -2.1228,-0.527565 -0.58963,-0.572575 1.87202,-0.05495 1.87145,-0.0503 0.0884,-1.198893 -1.64402,-1.059019 -2.08219,-1.212911 -6.73241,-2.364197 -5.37457,-1.330623 -7.12012,-1.433555 -9.57667,-0.564307 -1.9146,0.677478 -1.914856,0.67762 -2.301156,0.31471 -0.386299,-0.36291 -0.386085,-0.363135 -2.003495,0.129708 -2.274176,0.692966 -2.664678,0.570364 -1.74718,-0.549321 0.531319,-0.648405 0.675218,-0.802907 -0.0016,-0.764294 z"
				on:mousemove={(e) => showTooltip(e, `Tail: ${hitzoneValues['Tail']}`)}
				on:mouseout={(e) => hideTooltip()}
				style="fill: {hitzoneColors['Tail']}"
				id="path95"><title id="title103"></title></path
			><path
				d="m 57.864168,66.778353 c 0.224126,-0.02467 0.589214,0.25783 1.182357,0.694531 0.69189,0.509404 3.334118,2.112384 5.871476,3.562057 4.521528,2.58329 4.628606,2.656413 5.384168,3.658174 0.423999,0.562163 1.482144,1.728446 2.351277,2.59209 0.896038,0.890378 1.615528,1.741607 1.661915,1.965772 0.04499,0.217433 0.150125,0.520489 0.23306,0.673343 0.142307,0.262283 -0.299829,0.586528 -0.798917,0.586528 -0.07503,0 -0.182773,0.146986 -0.239779,0.326595 -0.09676,0.304878 -0.179615,0.319739 -1.247986,0.219625 -0.678588,-0.06359 -1.264838,-0.04376 -1.440222,0.04909 -0.22023,0.116597 -0.596675,0.04785 -1.474845,-0.269234 -0.648648,-0.234202 -1.603951,-0.686319 -2.122868,-1.00459 -0.518919,-0.318269 -1.130932,-0.578554 -1.359607,-0.578776 -0.31911,-3.11e-4 -0.671919,-0.284471 -1.51722,-1.222147 -0.947779,-1.05135 -1.486893,-1.459023 -3.869015,-2.92437 -3.327437,-2.046847 -2.944905,-1.407946 -2.958992,-4.937683 -0.0098,-2.455248 -0.02834,-3.349891 0.345198,-3.391007 z"
				on:mousemove={(e) => showTooltip(e, `Fins: ${hitzoneValues['Fins']}`)}
				on:mouseout={(e) => hideTooltip()}
				style="fill: {hitzoneColors['Fins']}"
				id="path97"><title id="title107"></title></path
			><path
				d="m 42.417566,53.85046 c -1.175452,-0.09478 -2.066329,3.858697 -0.964799,4.281392 0.209275,0.08031 0.235475,0.252065 0.152445,0.985987 -0.130193,1.15077 0.168591,2.57722 1.170988,5.589839 0.985234,2.96104 2.735803,4.10799 9.980786,6.541203 2.248644,0.755202 4.151029,1.379179 4.227649,1.386479 0.07949,0.0076 0.09088,-0.768761 0.02687,-1.808159 -0.09842,-1.598302 0.190274,-4.585025 0.475423,-4.918562 0.02681,-0.03136 0.484765,0.274388 1.017509,0.679545 0.532747,0.405155 1.067467,0.774351 1.188041,0.820621 0.415969,0.159623 0.250791,-1.236107 -0.330729,-2.797762 -0.30228,-0.811767 -0.549933,-1.494867 -0.550354,-1.517737 -4.21e-4,-0.02286 0.430929,0.176501 0.958598,0.442868 1.258926,0.635503 1.291943,0.530946 0.19172,-0.61495 C 58.313288,61.204371 51.332792,57.248219 49.372697,56.92004 47.87583,56.669421 47.876144,56.669631 46.268494,55.388867 44.569562,54.035386 44.533219,54.021052 42.417566,53.85046 Z"
				on:mousemove={(e) => showTooltip(e, `Back: ${hitzoneValues['Back']}`)}
				on:mouseout={(e) => hideTooltip()}
				style="fill: {hitzoneColors['Back']}"
				id="path96"><title id="title102"></title></path
			><path
				d="m 26.085229,77.614901 c 0.138053,0.0538 0.293367,0.283192 0.524,0.753442 0.472345,0.963094 4.520619,4.169368 7.199043,5.701978 1.336608,0.764814 1.336494,0.764825 0.181901,0.81132 -0.697784,0.0281 -1.239558,-0.02399 -1.369425,-0.131775 -0.564233,-0.468272 -1.170988,-0.02465 -1.170988,0.855761 0,1.617518 -1.230803,4.35774 -2.007113,4.468978 -0.235619,0.03376 -0.786274,0.637596 -1.688269,1.850533 -1.338722,1.800218 -1.338922,1.800272 -1.960604,1.483114 -0.790083,-0.403071 -0.691836,-0.438849 -1.190108,0.429431 -0.235749,0.410811 -0.843734,1.324917 -1.351339,2.031401 -1.014607,1.412128 -1.033453,1.467387 -0.67541,2.01383 0.280351,0.427871 0.434535,0.369403 -1.882056,0.718819 -0.605865,0.09138 -1.853931,0.484739 -2.830318,0.891936 -2.702937,1.127241 -6.473323,1.420201 -14.1242028,1.098641 -3.55466948,-0.1494 -4.23622312,-0.48339 -3.35225019,-1.642794 0.0159726,-0.02095 1.84191049,-0.687988 4.05815019,-1.482597 4.029527,-1.444746 4.0295543,-1.444754 7.4574258,-4.104142 3.889078,-3.0172 4.23074,-3.21283 8.206734,-4.701522 4.108994,-1.538491 4.152375,-1.591223 2.224671,-2.706295 -1.981258,-1.14605 -2.170818,-2.227658 -0.912089,-5.207951 0.219166,-0.518918 0.447132,-1.172536 0.506946,-1.452624 0.13724,-0.64265 0.11584,-0.631183 2.110982,-1.145667 0.918019,-0.236728 1.777592,-0.475632 1.909961,-0.531233 0.04427,-0.0186 0.08834,-0.02052 0.134358,-0.0026 z"
				on:mousemove={(e) => showTooltip(e, `Legs: ${hitzoneValues['Legs']}`)}
				on:mouseout={(e) => hideTooltip()}
				style="fill: {hitzoneColors['Legs']}"
				id="path93"><title id="title105"></title></path
			><path
				d="m 20.953243,62.589978 c -0.559782,0.02374 -1.169602,1.392992 -1.783354,4.004407 -0.347149,1.477062 -0.412298,1.610676 -1.070735,2.200382 -0.801204,0.717572 -2.435231,3.15457 -2.318722,3.458187 0.04271,0.111302 -0.128954,0.400528 -0.381889,0.642855 -0.252933,0.242327 -0.45992,0.524826 -0.45992,0.627869 0,0.103042 -0.395941,0.525299 -0.879533,0.938444 -0.696403,0.594955 -5.5676186,6.21318 -5.5676186,6.421313 0,0.578749 1.9620156,-0.242581 3.2752526,-1.370976 0.611971,-0.525834 1.446587,-1.044971 2.167826,-1.347721 0.736025,-0.308957 1.947219,-1.066301 3.250964,-2.033468 1.142678,-0.847681 2.944432,-2.057724 4.00389,-2.689241 1.956729,-1.166357 2.04425,-1.241338 1.772502,-1.513086 -0.08449,-0.08449 -0.302066,-1.454898 -0.483175,-3.045292 -0.300844,-2.641866 -0.375524,-2.984298 -0.868164,-3.962549 -0.347458,-0.689961 -0.539502,-1.295416 -0.539502,-1.703255 0,-0.348105 -0.05295,-0.630569 -0.117822,-0.627869 z"
				on:mousemove={(e) => showTooltip(e, `Fins: ${hitzoneValues['Fins']}`)}
				on:mouseout={(e) => hideTooltip()}
				style="fill: {hitzoneColors['Fins']}"
				id="path92"><title id="title106"></title></path
			><path
				d="m 46.565633,72.33512 c 2.458742,-0.09315 7.937001,1.358646 9.580811,2.919718 0.220946,0.209828 0.557854,0.381372 0.748791,0.381372 0.85924,0 1.513066,1.569488 1.600936,3.841626 0.07863,2.033036 0.07877,2.033044 1.669149,3.097485 1.727191,1.156011 1.813536,1.298355 2.247925,3.706234 0.0737,0.408526 0.551737,1.331526 1.254703,2.422591 0.624622,0.969465 1.074289,1.804897 0.998906,1.856218 -0.07538,0.05132 -0.403945,0.261827 -0.730188,0.468188 -0.59317,0.375202 -0.593361,0.375389 0.42633,1.415418 2.313321,2.35946 2.886075,3.512902 1.916163,3.859196 -0.973702,0.347645 -0.976632,0.35305 -0.561723,1.166337 0.21977,0.430787 1.031418,1.147303 2.977596,2.627747 3.115763,2.37013 3.009666,2.20984 1.55546,2.34559 -0.627025,0.0585 -2.175834,0.27813 -3.44165,0.48783 -2.784845,0.46136 -8.573271,0.51354 -11.889714,0.10697 -1.344618,-0.16484 -1.926497,-0.29731 -1.926497,-0.43873 0,-0.13602 -0.46678,-0.26654 -1.420585,-0.39688 -1.745035,-0.23847 -1.857429,-0.0328 1.348238,-2.4722 2.223406,-1.691871 2.731763,-2.154103 2.983797,-2.713013 0.167067,-0.370487 0.491647,-0.932884 0.721403,-1.250053 0.924054,-1.275618 0.476778,-5.534987 -0.854211,-8.134904 -0.230974,-0.451177 -0.42013,-0.917286 -0.42013,-1.035595 0,-0.127295 -0.588458,-0.434082 -1.441772,-0.751892 -1.403948,-0.522893 -4.218864,-4.088277 -4.218864,-5.343344 0,-0.173867 -0.718211,-0.938699 -1.768884,-1.883605 -1.76904,-1.590958 -1.769339,-1.590983 -2.1177,-3.426148 -0.191599,-1.009342 -0.387934,-1.996732 -0.436666,-2.194698 -0.105262,-0.427606 0.378796,-0.630408 1.198376,-0.661458 z"
				on:mousemove={(e) => showTooltip(e, `Legs: ${hitzoneValues['Legs']}`)}
				on:mouseout={(e) => hideTooltip()}
				style="fill: {hitzoneColors['Legs']}"
				id="path99"><title id="title104"></title></path
			><path
				d="m 40.928251,58.699776 c -1.958349,1.12671 -9.337926,2.620799 -14.101981,2.855123 -6.231958,0.306524 -5.939609,0.119858 -4.805392,3.074231 0.318041,0.82842 0.576685,2.04364 0.869714,4.083988 1.23047,8.567646 10.123309,16.664247 20.903117,19.031397 3.975748,0.873038 3.919865,0.868431 6.886402,0.535368 1.363582,-0.153095 2.70865,-0.212839 3.452502,-0.153479 1.357368,0.108319 1.382819,0.08451 0.912089,-0.838192 -0.283274,-0.555262 -0.40289,-0.628414 -1.584916,-0.969967 -0.943023,-0.272489 -1.351432,-0.474419 -1.554944,-0.768945 -0.553723,-0.801357 -2.686141,-4.701496 -2.686141,-4.912878 0,-0.119615 -0.781292,-0.921519 -1.736328,-1.78232 -0.955035,-0.860803 -1.76568,-1.707164 -1.80144,-1.880506 -0.425768,-2.064117 -0.71918,-4.534973 -0.550871,-4.638993 1.623483,-1.003369 8.129162,0.415726 11.200867,2.443262 0.322468,0.212851 0.71134,0.390524 0.864546,0.395324 0.970767,0.03025 1.957024,2.195168 1.850017,4.060734 -0.104832,1.827607 -0.104538,1.827284 1.532723,2.811715 1.801431,1.083142 1.847441,1.165011 2.145088,3.815271 0.172031,1.531763 1.744664,3.33066 1.749764,2.001428 7.4e-4,-0.194595 0.07444,-1.167549 0.163815,-2.162142 0.530319,-5.901897 -0.06749,-7.243762 -4.394048,-9.860896 -1.256775,-0.760226 -2.608619,-1.637158 -3.003951,-1.948719 -0.707602,-0.557661 -2.782565,-1.390638 -7.029545,-2.822566 -4.80043,-1.618534 -7.013734,-3.354204 -7.962821,-6.244064 -1.071325,-3.262058 -1.270219,-4.117342 -1.228349,-5.278231 0.01818,-0.503972 -0.02251,-0.884723 -0.08992,-0.845943 z"
				on:mousemove={(e) => showTooltip(e, `Belly: ${hitzoneValues['Belly']}`)}
				on:mouseout={(e) => hideTooltip()}
				style="fill: {hitzoneColors['Belly']}"
				id="path98"><title id="title101"></title></path
			><path
				d="m 33.284273,32.982483 c -1.211316,-0.06701 -4.964514,3.266444 -7.543725,6.879683 -4.09972,5.743334 -7.283461,17.505485 -5.062224,18.701701 0.550368,0.296393 0.550354,0.296476 0.550354,1.451074 0,1.361426 -0.711484,1.256659 6.289539,0.929143 8.593813,-0.402029 13.050984,-1.931265 13.053984,-4.47828 0.0033,-2.824017 0.260257,-3.80198 1.218013,-4.635893 2.032857,-1.769997 2.260254,-0.952967 -1.890841,-6.794934 -4.454462,-6.268905 -3.628674,-4.711884 -6.262666,-11.806514 -0.05847,-0.157488 -0.179389,-0.236407 -0.352434,-0.24598 z"
				on:mousemove={(e) => showTooltip(e, `Neck: ${hitzoneValues['Neck']}`)}
				on:mouseout={(e) => hideTooltip()}
				style="fill: {hitzoneColors['Neck']}"
				id="path90"><title id="title100"></title></path
			><path
				d="m 45.094922,24.744226 c -0.369022,0.03525 -0.709319,0.108712 -1.006657,0.221692 -0.773935,0.294069 -0.858469,0.294166 -3.841109,0.01964 -4.018132,-0.369839 -5.160826,0.06721 -3.379639,1.292428 1.9001,1.307008 1.933155,1.846309 0.177767,2.87941 -1.307535,0.769526 -1.481414,0.924668 -1.570964,1.401982 -0.08889,0.473825 -0.182952,0.559755 -0.804602,0.733805 -0.966877,0.270709 -0.94986,0.413525 0.54622,4.52944 1.526437,4.199426 8.11671,13.867887 9.452653,13.867887 0.475218,0 0.721637,0.111793 1.12603,0.51108 0.284675,0.281081 0.781733,0.687605 1.104842,0.903821 0.409975,0.274344 0.616993,0.54769 0.684713,0.904337 0.08824,0.464697 0.148939,0.511447 0.669209,0.513147 0.375659,0.0012 0.950088,0.217029 1.672767,0.628386 1.161896,0.661364 1.905372,0.727525 3.505212,0.312125 0.28458,-0.07389 0.746029,-0.0975 1.02526,-0.05219 2.012165,0.32653 3.999089,-1.200588 3.080949,-2.367814 -0.304552,-0.387177 -0.304286,-0.386725 0.170016,-1.191142 0.600825,-1.018998 0.596304,-1.120091 -0.02429,-0.545186 -0.498555,0.461856 -0.498776,0.461964 -0.146761,-0.04909 0.372606,-0.540952 0.341697,-0.612203 -0.151412,-0.348299 -0.361587,0.193514 -0.407934,-0.03803 -0.0646,-0.322978 0.499218,-0.414314 0.06907,-0.323298 -0.495577,0.104904 -0.435496,0.330256 -0.563522,0.375834 -0.486792,0.173116 0.07728,-0.204165 0.024,-0.274919 -0.205672,-0.274919 -0.388449,0 -0.386317,-0.0743 0.01809,-0.728638 0.369141,-0.597283 0.343434,-0.617049 -0.393775,-0.309025 -0.605675,0.253068 -1.82056,-0.712929 -1.82056,-1.447457 0,-0.696513 0.928556,-2.075325 1.397847,-2.075325 0.23359,0 0.810942,-0.244346 1.282609,-0.543119 0.817442,-0.517803 0.864102,-0.528614 0.999422,-0.235645 0.214846,0.465137 0.357672,0.372148 0.465605,-0.302824 0.150982,-0.944191 1.078564,-1.471581 1.267106,-0.720369 0.136867,0.545319 0.40566,0.332714 0.40566,-0.320911 0,-0.292494 0.07061,-0.575452 0.157097,-0.628902 0.08649,-0.05345 0.157096,-0.02234 0.157096,0.06925 0,0.09159 0.07112,0.166915 0.157613,0.166915 0.08649,0 0.157096,-0.10844 0.157096,-0.240812 0,-0.132372 0.241394,-0.452564 0.536402,-0.711585 1.310523,-1.150654 3.637202,-6.095305 3.291788,-6.995438 -0.04759,-0.124017 -0.01411,-0.433364 0.07442,-0.687297 0.778526,-2.233282 -2.973089,-5.053639 -8.48062,-6.375321 -4.743345,-1.138295 -4.679737,-1.12861 -5.341276,-0.786515 -0.447436,0.231378 -0.524316,0.21756 -1.682584,-0.29869 -1.216487,-0.542198 -2.579531,-0.779604 -3.686597,-0.673861 z"
				on:mousemove={(e) => showTooltip(e, `Head: ${hitzoneValues['Head']}`)}
				on:mouseout={(e) => hideTooltip()}
				style="fill: {hitzoneColors['Head']}"
				id="path89"><title id="title99"></title></path
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
