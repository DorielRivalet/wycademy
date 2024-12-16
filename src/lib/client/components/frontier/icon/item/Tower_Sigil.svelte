<!-- Created with Inkscape (http://www.inkscape.org/) -->
<script lang="ts">
	import { blendColor } from '$lib/client/modules/color-blend';
	interface Props {
		color?: string;
		size?: string;
	}

	let { color = '#ffffff', size = '100%' }: Props = $props();

	let targetColor = $derived(color);
</script>

<svg
	width={size}
	viewBox="0 0 64 64"
	version="1.1"
	id="svg5"
	xml:space="preserve"
	xmlns="http://www.w3.org/2000/svg"
	><g id="layer1" transform="translate(-60.895907,-110.26638)" /><g
		id="layer2"
		transform="translate(-17.219405,25.000929)"
	/><g id="layer3" transform="translate(-17.219405,25.000929)"
		><g
			id="g40204"
			transform="matrix(3.7155242,0,0,3.7155242,22.733997,88.20371)"
			><path
				style="opacity:1;fill:{blendColor(
					'#ffffff',
					targetColor,
				)};fill-opacity:1;fill-rule:evenodd;stroke:none;stroke-width:0.499999;stroke-linecap:round;stroke-linejoin:round;stroke-miterlimit:3;stroke-dasharray:none;stroke-opacity:1"
				d="m 3.394926,-18.898976 h 7.408333 l 0.01654,-1.289844 -0.429948,-2.695442 -0.6118492,-0.148828 -0.099219,-1.091407 -0.6945312,-0.08268 -0.033073,-3.257682 -3.8860676,-0.04961 -0.049609,2.199349 -0.6614583,0.314193 -0.3307292,4.216797 -0.5622396,0.03307 z"
				id="path31278"
			/><path
				style="opacity:1;fill:{blendColor(
					'#767676',
					targetColor,
				)};fill-opacity:1;fill-rule:evenodd;stroke:none;stroke-width:0.499999;stroke-linecap:round;stroke-linejoin:round;stroke-miterlimit:3;stroke-dasharray:none;stroke-opacity:1"
				d="m -0.09426666,-14.731789 0.44648437,-1.141015 4.44830719,-0.04961 0.7110677,1.355989 z"
				id="path26477"
			/><path
				style="opacity:1;fill:{blendColor(
					'#767676',
					targetColor,
				)};fill-opacity:1;fill-rule:evenodd;stroke:none;stroke-width:0.499999;stroke-linecap:round;stroke-linejoin:round;stroke-miterlimit:3;stroke-dasharray:none;stroke-opacity:1"
				d="m 5.1477906,-16.071242 c -0.017645,-0.06585 0.033073,-1.240234 0.033073,-1.240234 h 4.1010416 l -0.2315104,1.81901 -0.3803386,-0.281119 c 0,0 0.033073,-0.496094 -0.033073,-0.496094 -0.066146,0 -3.0096353,0.01654 -3.0096353,0.01654 z"
				id="path27314"
			/><path
				style="opacity:1;fill:{blendColor(
					'#767676',
					targetColor,
				)};fill-opacity:1;fill-rule:evenodd;stroke:none;stroke-width:0.499999;stroke-linecap:round;stroke-linejoin:round;stroke-miterlimit:3;stroke-dasharray:none;stroke-opacity:1"
				d="m 8.7692749,-14.715252 0.79375,-1.091406 4.6467451,-0.09922 c 0,0 0.363802,0.611849 0.363802,0.677995 0,0.06615 -0.248047,0.611849 -0.248047,0.611849 z"
				id="path27316"
			/><path
				style="opacity:1;fill:{blendColor(
					'#767676',
					targetColor,
				)};fill-opacity:1;fill-rule:evenodd;stroke:none;stroke-width:0.499999;stroke-linecap:round;stroke-linejoin:round;stroke-miterlimit:3;stroke-dasharray:none;stroke-opacity:1"
				d="m 1.4601604,-23.727622 0.4795573,-0.959114 -2.14973956,-0.132292 -0.0496094,1.091406 z"
				id="path28044"
			/><path
				style="opacity:1;fill:{blendColor(
					'#767676',
					targetColor,
				)};fill-opacity:1;fill-rule:evenodd;stroke:none;stroke-width:0.499999;stroke-linecap:round;stroke-linejoin:round;stroke-miterlimit:3;stroke-dasharray:none;stroke-opacity:1"
				d="m 12.473442,-23.727622 1.835546,-0.04961 -0.413411,-1.141016 h -1.488281 z"
				id="path28046"
			/><path
				style="opacity:1;fill:{blendColor(
					'#a6a6a6',
					targetColor,
				)};fill-opacity:1;fill-rule:evenodd;stroke:none;stroke-width:0.499999;stroke-linecap:round;stroke-linejoin:round;stroke-miterlimit:3;stroke-dasharray:none;stroke-opacity:1"
				d="M 0.30260834,-16.021632 H 4.9162802 l 0.016536,-1.35599 h 4.4813802 l -0.1984375,1.504818 4.7128911,-0.04961 -0.08268,-4.448308 -1.554428,-0.01654 0.01654,-4.597136 1.5875,-0.06614 0.115755,-3.687631 -4.9774742,0.09922 -0.016536,4.431771 0.7110677,0.08268 0.016536,1.091407 0.6614585,0.01654 0.396875,2.711979 0.148828,2.182813 -8.0532551,0.06614 0.4960937,-0.760677 0.1157552,-1.951302 0.4795573,-0.04961 0.4299479,-4.398698 0.6614583,-0.09922 -0.1157552,-3.472656 -4.94440095,0.06615 0.03307292,3.91914 2.11666663,0.132292 -0.099219,4.382162 -1.85208335,0.04961 z"
				id="path29500"
			/><path
				style="opacity:1;fill:none;fill-opacity:1;fill-rule:evenodd;stroke:#000000;stroke-width:0.499999;stroke-linecap:round;stroke-linejoin:round;stroke-miterlimit:3;stroke-dasharray:none;stroke-opacity:1"
				d="m 52.453531,120.62641 h 5.752976 v -5.82313 H 56.63964 V 111.576 h 1.566867 v -5.28525 h -5.752976 v 1.09914 h -3.320824 v -1.23946 h -5.72959 v 5.42557 h 1.707184 v 3.04019 h -1.707184 v 6.057 h 5.72959 v -1.63703 h 3.250666 z"
				id="path14005"
				transform="translate(-43.676502,-135.26731)"
			/><path
				style="opacity:1;fill:none;fill-opacity:1;fill-rule:evenodd;stroke:#000000;stroke-width:0.499999;stroke-linecap:round;stroke-linejoin:round;stroke-miterlimit:3;stroke-dasharray:none;stroke-opacity:1"
				d="m 52.593848,120.4861 c -0.06817,-0.11808 0.62054,-1.07481 0.62054,-1.07481 h 4.337309 v -4.53785 h -1.520095 v -4.5369 h 1.660411 l 0.316245,1.18024"
				id="path14007"
				transform="translate(-43.676502,-135.26731)"
			/><path
				style="opacity:1;fill:none;fill-opacity:1;fill-rule:evenodd;stroke:#000000;stroke-width:0.499999;stroke-linecap:round;stroke-linejoin:round;stroke-miterlimit:3;stroke-dasharray:none;stroke-opacity:1"
				d="m 57.738786,110.4067 v -3.88209 h -5.004622 v 1.28623 h -4.069179 v -1.30962 h -4.887691 v 4.02241 h 1.987817 v 4.39658 h -1.8475 v 4.56029 l -0.317811,1.18608"
				id="path14009"
				transform="translate(-43.676502,-135.26731)"
			/><path
				style="opacity:1;fill:none;fill-opacity:1;fill-rule:evenodd;stroke:#000000;stroke-width:0.499999;stroke-linecap:round;stroke-linejoin:round;stroke-miterlimit:3;stroke-dasharray:none;stroke-opacity:1"
				d="m 44.081313,119.29341 h 4.396584 l 0.45267,0.78405"
				id="path14011"
				transform="translate(-43.676502,-135.26731)"
			/><path
				style="opacity:1;fill:none;fill-opacity:1;fill-rule:evenodd;stroke:#000000;stroke-width:0.499999;stroke-linecap:round;stroke-linejoin:round;stroke-miterlimit:3;stroke-dasharray:none;stroke-opacity:1"
				d="m 52.780936,119.66759 c 0.156597,-0.27124 0.273333,-1.02009 0.273333,-1.02009 v -0.78064 h -4.41267 v 1.54348"
				id="path14013"
				transform="translate(-43.676502,-135.26731)"
			/><path
				style="opacity:1;fill:none;fill-opacity:1;fill-rule:evenodd;stroke:#000000;stroke-width:0.499999;stroke-linecap:round;stroke-linejoin:round;stroke-miterlimit:3;stroke-dasharray:none;stroke-opacity:1"
				d="m 45.671567,110.71072 -0.567195,0.98241"
				id="path14015"
				transform="translate(-43.676502,-135.26731)"
			/><path
				style="opacity:1;fill:#000000;fill-opacity:1;fill-rule:evenodd;stroke:#000000;stroke-width:0.499999;stroke-linecap:round;stroke-linejoin:round;stroke-miterlimit:3;stroke-dasharray:none;stroke-opacity:1"
				d="m 46.677168,117.14189 h 8.255288 l -0.841899,-0.8419 h -6.758578 z"
				id="path14017"
				transform="translate(-43.676502,-135.26731)"
			/><path
				style="opacity:1;fill:none;fill-opacity:1;fill-rule:evenodd;stroke:#000000;stroke-width:0.499999;stroke-linecap:round;stroke-linejoin:round;stroke-miterlimit:3;stroke-dasharray:none;stroke-opacity:1"
				d="m 46.887643,117.00157 0.28112,-2.53254 1.940558,-0.0165 v -0.91206 h 1.660412 v -0.63142 h 1.777342 v -0.65481 h 1.543482 c 0.28269,1.49286 0.384577,2.98572 0.496094,4.47858"
				id="path14019"
				transform="translate(-43.676502,-135.26731)"
			/><path
				style="opacity:1;fill:none;fill-opacity:1;fill-rule:evenodd;stroke:#000000;stroke-width:0.499999;stroke-linecap:round;stroke-linejoin:round;stroke-miterlimit:3;stroke-dasharray:none;stroke-opacity:1"
				d="m 51.728562,115.17746 v -1.16931"
				id="path14023"
				transform="translate(-43.676502,-135.26731)"
			/><path
				style="opacity:1;fill:none;fill-opacity:1;fill-rule:evenodd;stroke:#000000;stroke-width:0.499999;stroke-linecap:round;stroke-linejoin:round;stroke-miterlimit:3;stroke-dasharray:none;stroke-opacity:1"
				d="m 53.178499,114.66296 v -1.09914"
				id="path14025"
				transform="translate(-43.676502,-135.26731)"
			/><path
				style="opacity:1;fill:none;fill-opacity:1;fill-rule:evenodd;stroke:#000000;stroke-width:0.499999;stroke-linecap:round;stroke-linejoin:round;stroke-miterlimit:3;stroke-dasharray:none;stroke-opacity:1"
				d="m 57.434767,118.4749 -0.982216,-0.98222 -0.195341,-0.72902 h -0.81026"
				id="path14027"
				transform="translate(-43.676502,-135.26731)"
			/><path
				style="opacity:1;fill:none;fill-opacity:1;fill-rule:evenodd;stroke:#000000;stroke-width:0.499999;stroke-linecap:round;stroke-linejoin:round;stroke-miterlimit:3;stroke-dasharray:none;stroke-opacity:1"
				d="m 56.663026,107.27296 -0.673692,0.18052 v 0.56784 l -0.520893,0.30073"
				id="path14029"
				transform="translate(-43.676502,-135.26731)"
			/><path
				style="opacity:1;fill:none;fill-opacity:1;fill-rule:evenodd;stroke:#000000;stroke-width:0.499999;stroke-linecap:round;stroke-linejoin:round;stroke-miterlimit:3;stroke-dasharray:none;stroke-opacity:1"
				d="m 55.213089,109.0503 -0.820582,0.21988"
				id="path14031"
				transform="translate(-43.676502,-135.26731)"
			/><path
				style="opacity:1;fill:none;fill-opacity:1;fill-rule:evenodd;stroke:#000000;stroke-width:0.499999;stroke-linecap:round;stroke-linejoin:round;stroke-miterlimit:3;stroke-dasharray:none;stroke-opacity:1"
				d="M 53.552677,109.23739 H 52.780936"
				id="path14033"
				transform="translate(-43.676502,-135.26731)"
			/><path
				style="opacity:1;fill:none;fill-opacity:1;fill-rule:evenodd;stroke:#000000;stroke-width:0.499999;stroke-linecap:round;stroke-linejoin:round;stroke-miterlimit:3;stroke-dasharray:none;stroke-opacity:1"
				d="m 43.894224,107.95116 h 0.771741"
				id="path14037"
				transform="translate(-43.676502,-135.26731)"
			/><path
				style="opacity:1;fill:none;fill-opacity:1;fill-rule:evenodd;stroke:#000000;stroke-width:0.499999;stroke-linecap:round;stroke-linejoin:round;stroke-miterlimit:3;stroke-dasharray:none;stroke-opacity:1"
				d="m 45.086915,107.7173 h 0.280633 l 0.281247,-0.48714"
				id="path14039"
				transform="translate(-43.676502,-135.26731)"
			/><path
				style="opacity:1;fill:none;fill-opacity:1;fill-rule:evenodd;stroke:#000000;stroke-width:0.499999;stroke-linecap:round;stroke-linejoin:round;stroke-miterlimit:3;stroke-dasharray:none;stroke-opacity:1"
				d="m 46.209447,106.82863 0.295346,0.0791"
				id="path14041"
				transform="translate(-43.676502,-135.26731)"
			/><path
				style="opacity:1;fill:none;fill-opacity:1;fill-rule:evenodd;stroke:#000000;stroke-width:0.499999;stroke-linecap:round;stroke-linejoin:round;stroke-miterlimit:3;stroke-dasharray:none;stroke-opacity:1"
				d="m 46.396535,120.46271 c -0.04406,-0.16443 -0.573041,-0.99253 -0.573041,-0.99253"
				id="path14043"
				transform="translate(-43.676502,-135.26731)"
			/><path
				style="opacity:1;fill:none;fill-opacity:1;fill-rule:evenodd;stroke:#000000;stroke-width:0.499999;stroke-linecap:round;stroke-linejoin:round;stroke-miterlimit:3;stroke-dasharray:none;stroke-opacity:1"
				d="m 47.14489,117.42252 c -0.118077,0.0682 -1.101297,1.9075 -1.101297,1.9075"
				id="path14045"
				transform="translate(-43.676502,-135.26731)"
			/><path
				style="opacity:1;fill:none;fill-opacity:1;fill-rule:evenodd;stroke:#000000;stroke-width:0.499999;stroke-linecap:round;stroke-linejoin:round;stroke-miterlimit:3;stroke-dasharray:none;stroke-opacity:1"
				d="m 47.744417,114.21863 c 0.169969,-0.63433 0.314193,-4.14051 0.314193,-4.14051 l 1.728907,-0.11576 v 0.56127 h 1.637026 l 0.32332,0.56 h 1.71127 v 1.12379"
				id="path14047"
				transform="translate(-43.676502,-135.26731)"
			/><path
				style="opacity:1;fill:none;fill-opacity:1;fill-rule:evenodd;stroke:#000000;stroke-width:0.499999;stroke-linecap:round;stroke-linejoin:round;stroke-miterlimit:3;stroke-dasharray:none;stroke-opacity:1"
				d="m 52.687392,110.92119 v -2.92326"
				id="path14049"
				transform="translate(-43.676502,-135.26731)"
			/><path
				style="opacity:1;fill:none;fill-opacity:1;fill-rule:evenodd;stroke:#000000;stroke-width:0.499999;stroke-linecap:round;stroke-linejoin:round;stroke-miterlimit:3;stroke-dasharray:none;stroke-opacity:1"
				d="m 48.75853,109.91559 c 0.03665,-0.13676 0,-1.98782 0,-1.98782"
				id="path14051"
				transform="translate(-43.676502,-135.26731)"
			/><path
				style="opacity:1;fill:none;fill-opacity:1;fill-rule:evenodd;stroke:#000000;stroke-width:0.499999;stroke-linecap:round;stroke-linejoin:round;stroke-miterlimit:3;stroke-dasharray:none;stroke-opacity:1"
				d="m 49.810903,108.90999 v -0.37418"
				id="path14053"
				transform="translate(-43.676502,-135.26731)"
			/><path
				style="opacity:1;fill:none;fill-opacity:1;fill-rule:evenodd;stroke:#000000;stroke-width:0.499999;stroke-linecap:round;stroke-linejoin:round;stroke-miterlimit:3;stroke-dasharray:none;stroke-opacity:1"
				d="m 50.839891,108.76967 v 0.72497"
				id="path14055"
				transform="translate(-43.676502,-135.26731)"
			/><path
				style="opacity:1;fill:none;fill-opacity:1;fill-rule:evenodd;stroke:#000000;stroke-width:0.499999;stroke-linecap:round;stroke-linejoin:round;stroke-miterlimit:3;stroke-dasharray:none;stroke-opacity:1"
				d="m 51.868879,109.82204 v -0.84189"
				id="path14057"
				transform="translate(-43.676502,-135.26731)"
			/><path
				style="opacity:1;fill:none;fill-opacity:1;fill-rule:evenodd;stroke:#000000;stroke-width:0.499999;stroke-linecap:round;stroke-linejoin:round;stroke-miterlimit:3;stroke-dasharray:none;stroke-opacity:1"
				d="m 49.015777,111.31875 v 0.81852"
				id="path14059"
				transform="translate(-43.676502,-135.26731)"
			/><path
				style="opacity:1;fill:none;fill-opacity:1;fill-rule:evenodd;stroke:#000000;stroke-width:0.499999;stroke-linecap:round;stroke-linejoin:round;stroke-miterlimit:3;stroke-dasharray:none;stroke-opacity:1"
				d="m 45.367548,114.82667 v -3.22728"
				id="path14789"
				transform="translate(-43.676502,-135.26731)"
			/><path
				style="opacity:1;fill:none;fill-opacity:1;fill-rule:evenodd;stroke:#000000;stroke-width:0.499999;stroke-linecap:round;stroke-linejoin:round;stroke-miterlimit:3;stroke-dasharray:none;stroke-opacity:1"
				d="m 56.288849,114.70974 c 0,-0.11693 0,-3.13374 0,-3.13374"
				id="path15517"
				transform="translate(-43.676502,-135.26731)"
			/><path
				style="opacity:1;fill:none;fill-opacity:1;fill-rule:evenodd;stroke:#000000;stroke-width:0.499999;stroke-linecap:round;stroke-linejoin:round;stroke-miterlimit:3;stroke-dasharray:none;stroke-opacity:1"
				d="m 57.94926,115.1073 v 4.34981"
				id="path16245"
				transform="translate(-43.676502,-135.26731)"
			/><path
				style="opacity:1;fill:none;fill-opacity:1;fill-rule:evenodd;stroke:#000000;stroke-width:0.499999;stroke-linecap:round;stroke-linejoin:round;stroke-miterlimit:3;stroke-dasharray:none;stroke-opacity:1"
				d="m 6.5202719,-23.597764 v 0.783434"
				id="path36525"
			/><path
				style="opacity:1;fill:none;fill-opacity:1;fill-rule:evenodd;stroke:#000000;stroke-width:0.499999;stroke-linecap:round;stroke-linejoin:round;stroke-miterlimit:3;stroke-dasharray:none;stroke-opacity:1"
				d="m 6.4384206,-20.931751 v 0.982216"
				id="path37253"
			/></g
		></g
	></svg
>
