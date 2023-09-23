<!-- Created with Inkscape (http://www.inkscape.org/) -->
<script lang="ts">
	import { blendColor } from '$lib/client/modules/color-blend';
	import { RarityColors } from '$lib/client/modules/frontier/objects';
	import type { FrontierRarity } from '$lib/client/modules/frontier/types';
	export let rarity: FrontierRarity = 1;

	$: targetColor = RarityColors[rarity - 1] ?? RarityColors[0];
</script>

<svg
	height="auto"
	width="100%"
	viewBox="0 0 116.59702 117.59742"
	version="1.1"
	id="svg4846"
	><g id="layer1" transform="translate(339.88646,-17.751587)"
		><g id="g28511" transform="translate(-111.14725,148.40764)" /><path
			style="opacity:1;fill:{blendColor(
				'#ffffff',
				targetColor,
			)};fill-opacity:1;stroke:#000000;stroke-width:2.64583;stroke-linecap:round;stroke-linejoin:round;stroke-miterlimit:3;stroke-dasharray:none;stroke-opacity:1"
			d="m -314.5707,134.02609 h 9.16593 v -22.93114 -2.39326 h 18.47358 l 5.38618,-3.49628 -8.64288,-6.147052 c -8.5124,-25.867478 -15.08153,-52.463683 -19.18563,-79.984276 -5.36505,26.989147 -10.08561,54.049904 -20.22173,80.508932 l -8.96842,5.622546 5.8131,3.34087 h 18.24114 l -0.006,2.62097 z"
			id="path552936"
		/><path
			style="opacity:1;fill:none;fill-opacity:1;stroke:#000000;stroke-width:2.64583;stroke-linecap:round;stroke-linejoin:round;stroke-miterlimit:3;stroke-dasharray:none;stroke-opacity:1"
			d="m -326.40292,91.107089 33.57706,0"
			id="path552938"
		/><path
			style="opacity:1;fill:none;fill-opacity:1;stroke:#000000;stroke-width:2.66594173;stroke-linecap:square;stroke-linejoin:round;stroke-miterlimit:3;stroke-dasharray:none;stroke-opacity:1"
			d="m -290.32202,99.726532 h -38.39919"
			id="path552940"
		/><path
			style="opacity:1;fill:none;fill-opacity:1;stroke:#000000;stroke-width:2.64583;stroke-linecap:round;stroke-linejoin:round;stroke-miterlimit:3;stroke-dasharray:none;stroke-opacity:1"
			d="m -314.24217,120.90764 h 8.48583"
			id="path552944"
		/><path
			style="opacity:1;fill:none;fill-opacity:1;stroke:none;stroke-width:2.64583;stroke-linecap:round;stroke-linejoin:round;stroke-miterlimit:3;stroke-dasharray:none;stroke-opacity:0"
			d="m -264.53002,43.800382 7.45014,-6.9156 0.96885,-0.03341"
			id="path559893"
		/><path
			style="opacity:1;fill:{blendColor(
				'#ffffff',
				targetColor,
			)};fill-opacity:1;stroke:none;stroke-width:2.64583;stroke-linecap:round;stroke-linejoin:round;stroke-miterlimit:3;stroke-dasharray:none;stroke-opacity:0"
			d="m -279.34991,44.745811 12.6953,-0.400905 9.48807,-8.151721 11.62623,-0.133635 10.55714,7.884452 10.15624,0.935442 0.26728,13.497113 -4.94449,6.949006 v 41.694047 l -22.31701,17.77343 -23.92062,-19.77795 V 63.989216 l -4.40995,-4.81085 0.13364,-13.096208 z"
			id="path565411"
		/><path
			style="opacity:1;fill:none;fill-opacity:1;stroke:#000000;stroke-width:2.57657;stroke-linecap:round;stroke-linejoin:round;stroke-miterlimit:3;stroke-dasharray:none;stroke-opacity:1"
			d="m -330.99416,108.56259 44.05335,-0.14234"
			id="path608915"
		/></g
	><g id="layer4"
		><path
			style="opacity:1;fill:{blendColor(
				'#b0b0b0',
				targetColor,
			)};fill-opacity:1;stroke:none;stroke-width:2.64583;stroke-linecap:round;stroke-linejoin:round;stroke-miterlimit:3;stroke-dasharray:none;stroke-opacity:0"
			d="m -256.11103,36.717737 v 84.598913 l -8.56679,-6.89807 V 42.731304 l 6.76272,-5.813113 z"
			id="path559897"
			transform="translate(339.88646,-17.751587)"
		/><path
			style="opacity:1;fill:none;fill-opacity:1;stroke:#000000;stroke-width:2.64204;stroke-linecap:round;stroke-linejoin:round;stroke-miterlimit:3;stroke-dasharray:none;stroke-opacity:1"
			d="M 74.18713,26.47932 V 95.870493"
			id="path554176"
		/><path
			style="opacity:1;fill:none;fill-opacity:1;stroke:#000000;stroke-width:2.64583;stroke-linecap:round;stroke-linejoin:round;stroke-miterlimit:3;stroke-dasharray:none;stroke-opacity:1"
			d="M -254.85045,37.027953 V 122.54507"
			id="path553010"
			transform="translate(339.88646,-17.751587)"
		/><path
			style="opacity:1;fill:none;fill-opacity:1;stroke:#000000;stroke-width:2.6458334;stroke-linecap:round;stroke-linejoin:round;stroke-miterlimit:3;stroke-dasharray:none;stroke-opacity:1"
			d="m -252.01563,125.14365 22.77306,-18.09561 V 65.092686 l 4.63021,-5.858632 V 44.303995 h -9.35491 l -11.62277,-8.315479 h -11.71726 l -9.6384,8.315479 h -13.32365 v 15.402529 l 4.06323,4.441221 v 40.726935 z"
			id="path552924"
			transform="translate(339.88646,-17.75159)"
		/><path
			style="opacity:1;fill:none;fill-opacity:1;stroke:#000000;stroke-width:2.64583;stroke-linecap:round;stroke-linejoin:round;stroke-miterlimit:3;stroke-dasharray:none;stroke-opacity:1"
			d="m 93.043208,39.004648 9.805452,9.805451"
			id="path569443"
		/><path
			style="opacity:1;fill:none;fill-opacity:1;stroke:#000000;stroke-width:2.64583;stroke-linecap:round;stroke-linejoin:round;stroke-miterlimit:3;stroke-dasharray:none;stroke-opacity:1"
			d="M 102.84866,39.004648 93.043208,48.8101"
			id="path569445"
		/></g
	><g id="layer3" transform="translate(339.88646,262.31506)" /></svg
>
