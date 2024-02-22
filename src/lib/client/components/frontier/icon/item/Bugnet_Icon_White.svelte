<!--
  ~ © 2023 Doriel Rivalet
  ~ Use of this source code is governed by a MIT license that can be
  ~ found in the LICENSE file.
-->

<!-- Created with Inkscape (http://www.inkscape.org/) -->
<script lang="ts">
	import { blendColor } from '$lib/client/modules/color-blend';
	import { ColorCodes } from '$lib/client/modules/frontier/objects';
	export let colorCode = 0;

	$: targetColor = ColorCodes[colorCode] ?? ColorCodes[0];
</script>

<svg
	width="100%"
	height="100%"
	viewBox="0 0 16.933333 16.933334"
	version="1.1"
	id="svg4846"
>
	<g id="layer1" transform="translate(0,-280.06665)">
		<path
			style="display:inline;opacity:1;vector-effect:none;fill:{blendColor(
				'#ffffff',
				targetColor,
			)};fill-opacity:1;fill-rule:evenodd;stroke:#000000;stroke-width:0.5291667;stroke-linecap:butt;stroke-linejoin:miter;stroke-miterlimit:4;stroke-dasharray:none;stroke-dashoffset:0;stroke-opacity:1"
			d="m 7.6729167,281.65415 h 5.5562503 l 1.5875,1.5875 v 4.7625 l -1.5875,1.5875 H 7.6729167 Z"
			id="path2953"
		/>
		<path
			style="display:inline;opacity:1;vector-effect:none;fill:{blendColor(
				'#ffffff',
				targetColor,
			)};fill-opacity:1;fill-rule:evenodd;stroke:#000000;stroke-width:0.5291667;stroke-linecap:butt;stroke-linejoin:round;stroke-miterlimit:4;stroke-dasharray:none;stroke-dashoffset:0;stroke-opacity:1"
			d="m 6.0854167,281.65415 h -1.5875 l -2.38125,2.38125 v 3.175 l 2.38125,2.38125 h 3.175 l 2.3812503,-2.38125 v -3.175 l -2.3812503,-2.38125 z"
			id="path2951"
		/>
		<path
			style="display:inline;opacity:1;vector-effect:none;fill:#000000;fill-opacity:1;fill-rule:evenodd;stroke:none;stroke-width:0.26458332;stroke-linecap:butt;stroke-linejoin:miter;stroke-miterlimit:4;stroke-dasharray:none;stroke-dashoffset:0;stroke-opacity:1"
			d="m 6.0854167,286.15207 h -0.529166 l -0.529167,-0.52917 h -1.5875 l 0.79375,0.79375 h 1.058333 l 0.529167,0.52917 v 0.52917 h -0.264583 l -0.264584,-0.26459 h -1.058333 l 0.529166,0.52917 h 0.79375 l 0.264583,0.26458 h 0.79375 l 0.264584,-0.26458 h 0.79375 l 0.529166,-0.52917 h -1.322916 l -0.264584,0.26459 v -0.52917 l 0.529167,-0.52917 h 1.058333 l 0.79375,-0.79375 h -1.5875 l -0.529166,0.52917 z"
			id="path2928"
		/>
		<rect
			style="display:inline;opacity:1;fill:#000000;fill-opacity:1;fill-rule:nonzero;stroke:none;stroke-width:0.5291667;stroke-linecap:butt;stroke-linejoin:round;stroke-miterlimit:4;stroke-dasharray:none;stroke-dashoffset:0;stroke-opacity:1;paint-order:markers stroke fill"
			id="rect2930"
			width="1.3229166"
			height="1.3229166"
			x="5.5562496"
			y="284.29996"
		/>
		<path
			style="display:inline;opacity:1;vector-effect:none;fill:#000000;fill-opacity:1;fill-rule:evenodd;stroke:none;stroke-width:0.26458332;stroke-linecap:butt;stroke-linejoin:miter;stroke-miterlimit:4;stroke-dasharray:none;stroke-dashoffset:0;stroke-opacity:1"
			d="m 5.2916667,284.29999 h -0.79375 l -0.264583,-0.26459 v -0.52916 h 0.79375 l 0.264583,0.26458 z"
			id="path2932"
		/>
		<path
			style="display:inline;opacity:1;vector-effect:none;fill:#000000;fill-opacity:1;fill-rule:evenodd;stroke:none;stroke-width:0.26458332;stroke-linecap:butt;stroke-linejoin:miter;stroke-miterlimit:4;stroke-dasharray:none;stroke-dashoffset:0;stroke-opacity:1"
			d="m 6.8791667,284.29999 h 0.79375 l 0.264583,-0.26459 v -0.52916 h -0.79375 l -0.264583,0.26458 z"
			id="path2932-0"
		/>
		<path
			style="display:inline;opacity:1;vector-effect:none;fill:none;fill-opacity:1;fill-rule:evenodd;stroke:#000000;stroke-width:0.5291667;stroke-linecap:butt;stroke-linejoin:round;stroke-miterlimit:4;stroke-dasharray:none;stroke-dashoffset:0;stroke-opacity:1"
			d="m 12.7,281.65415 -1.058333,2.11667 1.322916,1.85208 -1.322916,2.11667 1.058333,1.85208"
			id="path2955"
		/>
		<path
			style="display:inline;opacity:1;vector-effect:none;fill:{blendColor(
				'#d5d5d5',
				targetColor,
			)};fill-opacity:1;fill-rule:evenodd;stroke:#000000;stroke-width:0.5291667;stroke-linecap:butt;stroke-linejoin:round;stroke-miterlimit:4;stroke-dasharray:none;stroke-dashoffset:0;stroke-opacity:1"
			d="m 7.1437507,289.59165 v 4.23334 h -1.852084 v -4.23334 z"
			id="path2957"
		/>
		<path
			style="display:inline;opacity:1;vector-effect:none;fill:{blendColor(
				'#ffffff',
				targetColor,
			)};fill-opacity:1;fill-rule:evenodd;stroke:#000000;stroke-width:0.5291667;stroke-linecap:butt;stroke-linejoin:round;stroke-miterlimit:4;stroke-dasharray:none;stroke-dashoffset:0;stroke-opacity:1"
			d="m 7.1437507,293.82499 v 1.5875 h -1.852084 v -1.5875 z"
			id="path2959"
		/>
	</g>
</svg>
