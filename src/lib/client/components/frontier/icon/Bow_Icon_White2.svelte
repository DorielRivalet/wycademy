<!-- Created with Inkscape (http://www.inkscape.org/) -->
<script lang="ts">
	import { blendColor } from '$lib/client/modules/color-blend';
	import { RarityColors } from '$lib/client/modules/frontier/objects';
	import type { FrontierRarity } from '$lib/client/modules/frontier/types';
	export let rarity: FrontierRarity = 1;

	$: targetColor = RarityColors[rarity - 1];
</script>

<svg
	width="100%"
	height="auto"
	viewBox="0 0 26.949418 23.613934"
	version="1.1"
	id="svg4846"
	><g id="layer1" transform="translate(-24.2627,-276.92966)"
		><rect
			style="opacity:1;fill:#000000;fill-opacity:1;stroke:none;stroke-width:0.396875;stroke-linecap:round;stroke-linejoin:round;stroke-miterlimit:3;stroke-opacity:1"
			id="rect725272"
			width="4.0880489"
			height="2.5391779"
			x="218.63576"
			y="173.064"
			ry="1.0150909"
			transform="rotate(45)"
			rx="0.21715869"
		/><rect
			style="opacity:1;fill:#000000;fill-opacity:1;stroke:none;stroke-width:0.396875;stroke-linecap:round;stroke-linejoin:round;stroke-miterlimit:3;stroke-opacity:1"
			id="rect725272-3"
			width="4.0880489"
			height="2.5391779"
			x="185.76575"
			y="232.74403"
			ry="0.98556274"
			transform="matrix(-0.70710678,0.70710678,0.70710678,0.70710678,0,0)"
			rx="0.21715869"
		/><path
			style="opacity:1;fill:{blendColor(
				'#ffffff',
				targetColor,
			)};fill-opacity:1;stroke:none;stroke-width:0.396875;stroke-linecap:round;stroke-linejoin:round;stroke-miterlimit:3;stroke-opacity:1"
			d="m 49.444012,292.91784 h 0.6024 l 0.708705,-0.75595 -2.267857,-2.39779 -2.14974,0.0118 2.161551,2.29148 z"
			id="path735038"
		/><path
			style="opacity:1;fill:{blendColor(
				'#ffffff',
				targetColor,
			)};fill-opacity:1;stroke:none;stroke-width:0.396875;stroke-linecap:round;stroke-linejoin:round;stroke-miterlimit:3;stroke-opacity:1"
			d="m 47.790366,287.92147 2.917505,-3.00019 c 0,0 -1.429224,-0.0827 -1.559153,-0.0118 -0.129929,0.0709 -2.976562,3.00019 -2.976562,3.00019 z"
			id="path735099"
		/><path
			style="opacity:1;fill:{blendColor(
				'#979797',
				targetColor,
			)};fill-opacity:1;stroke:none;stroke-width:0.529167;stroke-linecap:round;stroke-linejoin:round;stroke-miterlimit:3;stroke-dasharray:none;stroke-opacity:1"
			d="m 29.056921,290.17751 -0.0118,-3.13011 -4.228609,1.84263 z"
			id="path735602"
		/></g
	><g id="layer20" transform="translate(-24.2627,3.136989)" /><g
		id="layer19"
		transform="translate(-24.2627,3.136989)"
		><path
			style="opacity:1;fill:{blendColor(
				'#979797',
				targetColor,
			)};fill-opacity:1;stroke:none;stroke-width:0.396875;stroke-linecap:round;stroke-linejoin:round;stroke-miterlimit:3;stroke-opacity:1"
			d="m 41.022229,300.19388 1.122116,-0.54334 0.992188,-1.09849 0.165364,-0.6969 -0.354351,-1.24023 -0.637836,-0.79139 -0.862256,-0.48428 h -3.48447 l -0.791387,-0.43703 -0.614212,-0.75596 0.02363,-1.06305 0.73233,-0.81502 0.389787,-0.35435 v -2.19699 h -1.759953 l -0.409414,1.52796 -0.868045,0.86804 -0.624234,1.23021 -0.578776,1.35836 -0.129929,1.32291 0.448847,0.83864 0.755952,0.83863 0.826823,0.28348 1.452848,0.0827 1.878068,-0.24805 0.307105,-0.0827 0.02363,1.32291 0.330729,0.86226 0.944941,0.28348 z"
			id="path735606"
			transform="translate(0,-280.06665)"
		/><path
			style="opacity:1;fill:{blendColor(
				'#979797',
				targetColor,
			)};fill-opacity:1;stroke:none;stroke-width:0.396875;stroke-linecap:round;stroke-linejoin:round;stroke-miterlimit:3;stroke-opacity:1"
			d="m 44.270463,7.8193825 h 1.984375 l 2.964751,-2.9647508 h -2.126117 z"
			id="path736347"
		/><path
			style="opacity:1;fill:{blendColor(
				'#979797',
				targetColor,
			)};fill-opacity:1;stroke:none;stroke-width:0.396875;stroke-linecap:round;stroke-linejoin:round;stroke-miterlimit:3;stroke-opacity:1"
			d="m 36.037669,7.8548179 h 1.665457 l 0.0118,-2.3977865 -0.271669,-0.023625 -0.874069,-0.9685639 -0.04725,-1.1693639 0.696894,-0.8386347 1.063058,-0.3307291 1.783575,0.035435 1.74815,-0.1771753 0.944941,-0.7677641 0.437036,-1.25204617 -0.07087,-1.29929323 -0.744141,-1.0039992 -1.299292,-0.4606585 -0.897694,0.2007998 -0.803199,0.437035 -0.484282,0.7559524 c 0,0 -0.02363,0.62602308 -0.05906,0.90950524 -0.03543,0.28348215 -0.862256,0.047247 -0.862256,0.047247 l -1.157552,-0.12992931 -1.441034,0.0944941 -0.602401,0.25985862 -0.566965,0.63783484 -0.626023,0.83863471 -0.177175,0.6142113 0.271671,2.1497395 0.472469,0.8740701 0.696894,0.826823 0.614212,0.6378347 0.460658,1.0039993 z"
			id="path735116"
		/><path
			style="opacity:1;fill:{blendColor(
				'#ffffff',
				targetColor,
			)};fill-opacity:1;stroke:none;stroke-width:0.396875;stroke-linecap:round;stroke-linejoin:round;stroke-miterlimit:3;stroke-opacity:1"
			d="m 47.317897,12.839379 -3.071059,-3.2127975 -2.409597,0.094494 3.141927,3.1655505 z"
			id="path735105"
		/><path
			style="opacity:1;fill:{blendColor(
				'#979797',
				targetColor,
			)};fill-opacity:1;stroke:none;stroke-width:0.396875;stroke-linecap:round;stroke-linejoin:round;stroke-miterlimit:3;stroke-opacity:1"
			d="M 49.408576,12.792132 46.207591,9.5911461 h -2.102493 l 3.260045,3.2600449 z"
			id="path736344"
		/><path
			style="opacity:1;fill:{blendColor(
				'#ffffff',
				targetColor,
			)};fill-opacity:1;stroke:none;stroke-width:0.529167;stroke-linecap:round;stroke-linejoin:round;stroke-miterlimit:3;stroke-dasharray:none;stroke-opacity:1"
			d="m 48.876917,287.98451 -0.01669,1.72055 -8.936475,-2e-5 0.04725,1.44104 -0.354354,0.67327 -1.81901,0.0945 -0.07087,-2.18517 -1.81901,0.0236 -0.307107,1.29929 -0.838634,1.06306 -2.267858,-0.0945 -0.0118,-2.26786 -3.416769,-0.0639 0.03341,-1.77066 3.4578,-0.0334 0.03341,-2.30519 2.12145,-0.0334 0.501132,0.51783 0.584652,0.91874 0.11693,0.95215 1.870888,-0.0167 -0.0167,-2.37201 1.03567,0.0334 0.88533,0.30067 0.384201,0.80181 -0.01669,1.08579 0.167045,0.18374 z"
			id="path735110"
			transform="translate(0,-280.06665)"
		/><path
			style="opacity:1;fill:{blendColor(
				'#ffffff',
				targetColor,
			)};fill-opacity:1;stroke:none;stroke-width:0.396875;stroke-linecap:round;stroke-linejoin:round;stroke-miterlimit:3;stroke-opacity:1"
			d="m 44.105098,7.8430061 3.047434,-3.0592449 -2.4096,0.082682 -2.728516,2.9411275 z"
			id="path735102"
		/><path
			style="opacity:1;fill:none;fill-opacity:1;stroke:#000000;stroke-width:0.529167;stroke-linecap:round;stroke-linejoin:round;stroke-miterlimit:3;stroke-dasharray:none;stroke-opacity:1"
			d="m 47.313267,292.85557 -3.093493,-3.1269"
			id="path729944"
			transform="translate(0,-280.06665)"
		/><path
			style="opacity:1;fill:none;fill-opacity:1;stroke:#000000;stroke-width:0.529167;stroke-linecap:round;stroke-linejoin:round;stroke-miterlimit:3;stroke-dasharray:none;stroke-opacity:1"
			d="m 44.219774,287.87768 2.976563,-2.97656"
			id="path729946"
			transform="translate(0,-280.06665)"
		/><path
			style="opacity:1;fill:none;fill-opacity:1;stroke:#000000;stroke-width:0.529167;stroke-linecap:round;stroke-linejoin:round;stroke-miterlimit:3;stroke-dasharray:none;stroke-opacity:1"
			d="m 49.35955,292.87227 -3.151959,-3.1436"
			id="path729834"
			transform="translate(0,-280.06665)"
		/><rect
			style="opacity:1;fill:{blendColor(
				'#ffffff',
				targetColor,
			)};fill-opacity:1;stroke:none;stroke-width:0.396875;stroke-linecap:round;stroke-linejoin:round;stroke-miterlimit:3;stroke-opacity:1"
			id="rect725274"
			width="1.2756697"
			height="1.2047991"
			x="31.466518"
			y="278.15314"
			rx="0.63783485"
			ry="0.98556274"
			transform="translate(0,-280.06665)"
		/><rect
			style="opacity:1;fill:{blendColor(
				'#ffffff',
				targetColor,
			)};fill-opacity:1;stroke:none;stroke-width:0.396875;stroke-linecap:round;stroke-linejoin:round;stroke-miterlimit:3;stroke-opacity:1"
			id="rect726884"
			width="1.2756697"
			height="1.2047991"
			x="32.824871"
			y="279.44061"
			rx="0.50064141"
			ry="0.98556274"
			transform="translate(0,-280.06665)"
		/></g
	><g id="layer18" transform="translate(-24.2627,3.136989)"
		><path
			style="opacity:1;fill:none;fill-opacity:1;stroke:#000000;stroke-width:0.66145833;stroke-linecap:round;stroke-linejoin:round;stroke-miterlimit:3;stroke-dasharray:none;stroke-opacity:1"
			d="m 38.837053,279.73592 c 0.642455,1.02988 1.924772,1.32267 2.14974,0.4961"
			id="path720890"
			transform="translate(0,-280.06665)"
		/><path
			style="opacity:1;fill:none;fill-opacity:1;stroke:#000000;stroke-width:0.661458;stroke-linecap:round;stroke-linejoin:round;stroke-miterlimit:3;stroke-dasharray:none;stroke-opacity:1"
			d="m 50.81462,292.22741 -2.355313,-2.35531 0.517836,-0.0501 -0.08352,-1.89856 -1.085784,0.0152 3.073599,-3.06107 h -6.147199 l -2.789625,3.04019 h -1.921001 c -0.118434,-1.10953 0.721156,-2.65336 -2.539061,-2.33861 -1.419026,-1.20991 -1.10493,-1.95766 -0.668173,-2.67269 1.243965,-1.20633 2.98256,-0.47536 4.476766,-0.70158 1.644165,-0.37621 1.6527,-1.468 1.937702,-2.43884 0.200503,-1.44093 -0.953502,-2.42788 -2.372016,-2.50565 -1.479279,0.27014 -2.196968,1.08159 -2.00452,2.50565 -1.412976,-0.23598 -2.752376,-0.55807 -4.250663,0.0591 -0.09868,-0.11513 -1.26908,1.58521 -1.161546,1.74501 0.0036,1.42626 0.04498,2.84442 1.269529,4.00904 h -2.138156 l -0.03341,2.32275 -3.458812,0.0827 0.0059,-1.06722 -4.49378,1.92338 4.485506,1.65179 0.01181,-0.78251 3.449368,0.0118 v 2.33861 h 2.271792 c -0.871591,1.33412 -1.647338,2.83946 -1.436574,4.14268 -0.10015,0.073 0.788705,1.59884 1.327996,1.60361 1.636493,0.39439 2.900184,0.38414 4.351482,-0.16704 -0.286619,2.36617 0.532569,2.56797 1.403164,2.57247 1.720036,0.0396 2.782334,-1.7301 2.772921,-2.03793 0.009,-1.03109 -0.192815,-2.14523 -1.859073,-2.81647 0,0 -2.6338,0.0766 -3.560891,-0.0236 -1.165311,-0.58832 -2.203278,-1.5926 -0.123502,-3.41104 l 1.316427,0.0354 c 0.617802,-0.0814 1.02077,-0.47926 1.019805,-1.26785 V 289.7887 H 41.8945 l 3.0736,3.14037 h 5.178346 z"
			id="path720054"
			transform="translate(0,-280.06665)"
		/><path
			style="opacity:1;fill:none;fill-opacity:1;stroke:#000000;stroke-width:0.66145833;stroke-linecap:round;stroke-linejoin:round;stroke-miterlimit:3;stroke-dasharray:none;stroke-opacity:1"
			d="m 39.073289,297.61892 c 0.711302,-1.16792 2.144338,-0.6182 2.031622,-0.21261"
			id="path720892"
			transform="translate(0,-280.06665)"
		/><path
			style="opacity:1;fill:none;fill-opacity:1;stroke:#000000;stroke-width:0.661458;stroke-linecap:round;stroke-linejoin:round;stroke-miterlimit:3;stroke-dasharray:none;stroke-opacity:1"
			d="M 48.758929,289.70504 H 29.080543 v -1.77176 H 48.8298"
			id="path720902"
			transform="translate(0,-280.06665)"
		/><path
			style="opacity:1;fill:none;fill-opacity:1;stroke:#000000;stroke-width:0.529167;stroke-linecap:round;stroke-linejoin:round;stroke-miterlimit:3;stroke-dasharray:none;stroke-opacity:1"
			d="m 37.750373,289.70504 v 2.03163"
			id="path720910"
			transform="translate(0,-280.06665)"
		/><path
			style="opacity:1;fill:none;fill-opacity:1;stroke:#000000;stroke-width:0.529167;stroke-linecap:round;stroke-linejoin:round;stroke-miterlimit:3;stroke-dasharray:none;stroke-opacity:1"
			d="m 37.773997,285.6418 v 2.26786"
			id="path720906"
			transform="translate(0,-280.06665)"
		/><path
			style="opacity:1;fill:none;fill-opacity:1;stroke:#000000;stroke-width:0.529167;stroke-linecap:round;stroke-linejoin:round;stroke-miterlimit:3;stroke-dasharray:none;stroke-opacity:1"
			d="m 34.750188,285.57093 c 0.706582,0.64298 1.135036,1.22844 1.204799,2.30329"
			id="path720904"
			transform="translate(0,-280.06665)"
		/><path
			style="opacity:1;fill:none;fill-opacity:1;stroke:#000000;stroke-width:0.529167;stroke-linecap:round;stroke-linejoin:round;stroke-miterlimit:3;stroke-dasharray:none;stroke-opacity:1"
			d="m 35.947753,289.72176 c -0.05378,1.01667 -0.452934,1.81749 -1.219417,2.38872"
			id="path721640"
			transform="translate(0,-280.06665)"
		/><path
			style="opacity:1;fill:none;fill-opacity:1;stroke:#000000;stroke-width:0.529167;stroke-linecap:round;stroke-linejoin:round;stroke-miterlimit:3;stroke-dasharray:none;stroke-opacity:1"
			d="m 46.207591,287.87768 2.976563,-2.97656"
			id="path729948"
			transform="translate(0,-280.06665)"
		/><rect
			style="opacity:1;fill:{blendColor(
				'#ffffff',
				targetColor,
			)};fill-opacity:1;stroke:none;stroke-width:0.396875;stroke-linecap:round;stroke-linejoin:round;stroke-miterlimit:3;stroke-opacity:1"
			id="rect726884-5"
			width="1.2756697"
			height="1.2047991"
			x="-32.617912"
			y="298.39838"
			rx="0.63783485"
			ry="0.98556274"
			transform="matrix(-0.99999999,0,0,0.99999999,0,-280.06665)"
		/><rect
			style="opacity:1;fill:{blendColor(
				'#ffffff',
				targetColor,
			)};fill-opacity:1;stroke:none;stroke-width:0.396875;stroke-linecap:round;stroke-linejoin:round;stroke-miterlimit:3;stroke-opacity:1"
			id="rect725274-1"
			width="1.2756697"
			height="1.2047991"
			x="-33.976265"
			y="297.1109"
			rx="0.63783485"
			ry="0.98556274"
			transform="matrix(-0.99999999,0,0,0.99999999,0,-280.06665)"
		/></g
	></svg
>
