<!-- Created with Inkscape (http://www.inkscape.org/) -->
<script lang="ts">
	import { blendColor } from '$lib/client/modules/color-blend';
	import { RarityColors } from '$lib/client/modules/frontier/objects';
	import type { FrontierRarity } from '$lib/client/modules/frontier/types';
	export let rarity: FrontierRarity = 1;
	export let size = '100%';

	$: targetColor = RarityColors[rarity - 1] ?? RarityColors[0];
</script>

<svg width={size} viewBox="0 0 16.933333 16.933334" version="1.1" id="svg4846"
	><g id="layer1" transform="translate(0,-280.06665)"
		><path
			style="display:inline;opacity:1;vector-effect:none;fill:{blendColor(
				'#ffffff',
				targetColor,
			)};fill-opacity:1;fill-rule:evenodd;stroke:#000000;stroke-width:0.5291667;stroke-linecap:butt;stroke-linejoin:round;stroke-miterlimit:4;stroke-dasharray:none;stroke-dashoffset:0;stroke-opacity:1"
			d="m 10.583333,283.37396 0.79375,-0.52917 h 1.5875 l 2.116667,0.79375 0.264583,0.52917 v 2.64583 l -0.264583,0.52917 v 1.05833 l 0.264583,0.26458 H 15.875 v 1.32292 h -1.852083 l -0.79375,-0.79375 v -3.70417 l -0.264584,-0.26458 h -0.529166 l -1.058334,0.79375 h -0.79375 z"
			id="path2134-6"
		/><path
			style="display:inline;opacity:1;vector-effect:none;fill:{blendColor(
				'#ffffff',
				targetColor,
			)};fill-opacity:1;fill-rule:evenodd;stroke:#000000;stroke-width:0.5291667;stroke-linecap:butt;stroke-linejoin:round;stroke-miterlimit:4;stroke-dasharray:none;stroke-dashoffset:0;stroke-opacity:1"
			d="m 6.3500007,283.37397 -0.79375,-0.52917 h -1.5875 l -2.116667,0.79375 -0.264583,0.52917 v 2.64583 l 0.264583,0.52917 v 1.05833 l -0.264583,0.26458 h -0.529167 v 1.32292 h 1.852083 l 0.79375,-0.79375 v -3.70417 l 0.264584,-0.26458 h 0.529166 l 1.058334,0.79375 h 0.79375 z"
			id="path2134"
		/><path
			style="display:inline;opacity:1;vector-effect:none;fill:{blendColor(
				'#b0b0b0',
				targetColor,
			)};fill-opacity:1;fill-rule:evenodd;stroke:#000000;stroke-width:0.5291667;stroke-linecap:butt;stroke-linejoin:round;stroke-miterlimit:4;stroke-dasharray:none;stroke-dashoffset:0;stroke-opacity:1"
			d="m 10.583334,291.04688 h 0.793749 v 4.7625 H 5.5562507 v -4.7625 z"
			id="path2132"
		/><path
			style="display:inline;opacity:1;vector-effect:none;fill:{blendColor(
				'#b0b0b0',
				targetColor,
			)};fill-opacity:1;fill-rule:evenodd;stroke:#000000;stroke-width:0.5291667;stroke-linecap:butt;stroke-linejoin:round;stroke-miterlimit:4;stroke-dasharray:none;stroke-dashoffset:0;stroke-opacity:1"
			d="m 10.054167,287.34272 h 0.529167 v 3.70416 H 6.3500007 v -3.70416 z"
			id="path2125"
		/><path
			style="display:inline;opacity:1;vector-effect:none;fill:{blendColor(
				'#b0b0b0',
				targetColor,
			)};fill-opacity:1;fill-rule:evenodd;stroke:#000000;stroke-width:0.5291667;stroke-linecap:butt;stroke-linejoin:round;stroke-miterlimit:4;stroke-dasharray:none;stroke-dashoffset:0;stroke-opacity:1"
			d="m 10.054167,286.28438 v 1.05834 H 6.8791667 v -1.05834 z"
			id="path2123"
		/><path
			style="display:inline;opacity:1;vector-effect:none;fill:{blendColor(
				'#b0b0b0',
				targetColor,
			)};fill-opacity:1;fill-rule:evenodd;stroke:#000000;stroke-width:0.5291667;stroke-linecap:butt;stroke-linejoin:round;stroke-miterlimit:4;stroke-dasharray:none;stroke-dashoffset:0;stroke-opacity:1"
			d="m 8.4666667,282.8448 h -2.116666 v 3.43958 h 4.2333333 v -3.43958 z"
			id="path2119"
		/><path
			style="display:inline;opacity:1;vector-effect:none;fill:{blendColor(
				'#b0b0b0',
				targetColor,
			)};fill-opacity:1;fill-rule:evenodd;stroke:#000000;stroke-width:0.5291667;stroke-linecap:butt;stroke-linejoin:round;stroke-miterlimit:4;stroke-dasharray:none;stroke-dashoffset:0;stroke-opacity:1"
			d="m 6.8791667,282.8448 v -1.32292 c 0,0 0,-0.26458 0.264584,-0.26458 0.264583,0 2.645833,0 2.645833,0 0,0 0.2645833,0 0.2645833,0.26458 0,0.26459 0,1.32292 0,1.32292 z"
			id="path2121"
		/><path
			style="display:inline;opacity:1;vector-effect:none;fill:{blendColor(
				'#6c6c6c',
				targetColor,
			)};fill-opacity:1;fill-rule:evenodd;stroke:#000000;stroke-width:0.5291667;stroke-linecap:butt;stroke-linejoin:round;stroke-miterlimit:4;stroke-dasharray:none;stroke-dashoffset:0;stroke-opacity:1"
			d="m 7.9375007,291.04688 h 1.058332 v 2.11667 h -1.058332 z"
			id="path2127"
		/><path
			style="display:inline;opacity:1;vector-effect:none;fill:{blendColor(
				'#6c6c6c',
				targetColor,
			)};fill-opacity:1;fill-rule:evenodd;stroke:#000000;stroke-width:0.5291667;stroke-linecap:butt;stroke-linejoin:round;stroke-miterlimit:4;stroke-dasharray:none;stroke-dashoffset:0;stroke-opacity:1"
			d="m 7.9375007,291.04688 v -1.5875 l 0.529166,-0.52917 c 0,0 0.529166,0.52917 0.529166,0.52917 v 1.5875 z"
			id="path2129"
		/><path
			style="display:inline;opacity:1;vector-effect:none;fill:{blendColor(
				'#d0d0d0',
				targetColor,
			)};fill-opacity:1;fill-rule:evenodd;stroke:#000000;stroke-width:0.5291667;stroke-linecap:butt;stroke-linejoin:round;stroke-miterlimit:4;stroke-dasharray:none;stroke-dashoffset:0;stroke-opacity:1"
			d="m 10.583334,288.13647 h 2.645834 v 3.43958 h 1.322916 v 1.32292 h -2.645833 v -3.43959 h -1.322917 z"
			id="path2151"
		/></g
	></svg
>
