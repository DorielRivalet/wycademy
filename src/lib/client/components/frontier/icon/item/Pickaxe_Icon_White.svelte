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
			)};fill-opacity:1;fill-rule:evenodd;stroke:#000000;stroke-width:0.5291667;stroke-linecap:butt;stroke-linejoin:round;stroke-miterlimit:4;stroke-dasharray:none;stroke-dashoffset:0;stroke-opacity:1"
			d="M 9.7895831,283.37394 H 11.90625 c 1.322917,0 3.439583,1.85208 3.439583,2.64583 v 0.26459 l -0.264583,0.26458 H 14.552083 L 14.2875,286.28436 c 0,-0.52917 -1.5697,-1.32292 -2.38125,-1.32292 H 9.7895831 Z"
			id="path2841-5"
		/>
		<path
			style="display:inline;opacity:1;vector-effect:none;fill:{blendColor(
				'#ffffff',
				targetColor,
			)};fill-opacity:1;fill-rule:evenodd;stroke:#000000;stroke-width:0.5291667;stroke-linecap:butt;stroke-linejoin:round;stroke-miterlimit:4;stroke-dasharray:none;stroke-dashoffset:0;stroke-opacity:1"
			d="m 7.1437502,283.37394 v 1.5875 h 0.5291667 v 3.43958 h 0.79375 0.79375 v -3.43958 h 0.5291662 v -1.5875 H 8.4666669 Z"
			id="path2823"
		/>
		<path
			style="display:inline;opacity:1;vector-effect:none;fill:{blendColor(
				'#ffffff',
				targetColor,
			)};fill-opacity:1;fill-rule:evenodd;stroke:#000000;stroke-width:0.5291667;stroke-linecap:butt;stroke-linejoin:round;stroke-miterlimit:4;stroke-dasharray:none;stroke-dashoffset:0;stroke-opacity:1"
			d="m 7.1437505,283.37394 h -2.116667 c -1.3229171,0 -3.4395831,1.85208 -3.4395831,2.64583 v 0.26459 l 0.264583,0.26458 h 0.529167 l 0.264583,-0.26458 c 0,-0.52917 1.5697,-1.32292 2.3812501,-1.32292 h 2.116667 z"
			id="path2841"
		/>
		<path
			style="display:inline;opacity:1;vector-effect:none;fill:{blendColor(
				'#ffffff',
				targetColor,
			)};fill-opacity:1;fill-rule:evenodd;stroke:#000000;stroke-width:0.5291667;stroke-linecap:butt;stroke-linejoin:round;stroke-miterlimit:4;stroke-dasharray:none;stroke-dashoffset:0;stroke-opacity:1"
			d="m 7.6729174,283.37394 v -1.05833 l 0.2645831,-0.26459 h 1.0583328 l 0.2645841,0.26459 v 1.05833 z"
			id="path2843"
		/>
		<path
			style="display:inline;opacity:1;vector-effect:none;fill:{blendColor(
				'#d5d5d5',
				targetColor,
			)};fill-opacity:1;fill-rule:evenodd;stroke:#000000;stroke-width:0.5291667;stroke-linecap:butt;stroke-linejoin:round;stroke-miterlimit:4;stroke-dasharray:none;stroke-dashoffset:0;stroke-opacity:1"
			d="m 7.9375005,288.40102 v 1.05834 h -0.79375 v 5.55625 h 1.3229159 1.3229167 v -5.55625 H 8.9958333 v -1.05834 H 8.4666664 Z"
			id="path2845"
		/>
		<path
			style="display:inline;opacity:1;vector-effect:none;fill:none;fill-opacity:1;fill-rule:evenodd;stroke:#000000;stroke-width:0.5291667;stroke-linecap:butt;stroke-linejoin:round;stroke-miterlimit:4;stroke-dasharray:none;stroke-dashoffset:0;stroke-opacity:1"
			d="M 7.1437505,291.31144 H 9.7895831"
			id="path2863"
		/>
		<path
			style="display:inline;opacity:1;vector-effect:none;fill:none;fill-opacity:1;fill-rule:evenodd;stroke:#000000;stroke-width:0.5291667;stroke-linecap:butt;stroke-linejoin:round;stroke-miterlimit:4;stroke-dasharray:none;stroke-dashoffset:0;stroke-opacity:1"
			d="M 7.1437505,292.63436 H 9.7895831"
			id="path2863-7"
		/>
		<path
			style="display:inline;opacity:1;vector-effect:none;fill:none;fill-opacity:1;fill-rule:evenodd;stroke:#000000;stroke-width:0.5291667;stroke-linecap:butt;stroke-linejoin:round;stroke-miterlimit:4;stroke-dasharray:none;stroke-dashoffset:0;stroke-opacity:1"
			d="M 7.1437505,293.95727 H 9.7895831"
			id="path2863-7-6"
		/>
	</g>
</svg>
