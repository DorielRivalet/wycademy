<!--
  ~ © 2023 Doriel Rivalet
  ~ Use of this source code is governed by a MIT license that can be
  ~ found in the LICENSE file.
-->

<!-- Created with Inkscape (http://www.inkscape.org/) -->
<script lang="ts">
	import { blendColor } from '$lib/client/modules/color-blend';
	export let color = '#000000';

	$: targetColor = color;
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
			style="display:inline;opacity:1;vector-effect:none;fill:#000000;fill-opacity:1;fill-rule:evenodd;stroke:none;stroke-width:0.26458332;stroke-linecap:butt;stroke-linejoin:miter;stroke-miterlimit:4;stroke-dasharray:none;stroke-dashoffset:0;stroke-opacity:1"
			d="M 12.170835,293.6927 V 281.52186 H 4.7625007 v 12.17084 z"
			id="path5865"
		/>
		<path
			style="display:inline;opacity:1;vector-effect:none;fill:{blendColor(
				'#d0d0d0',
				targetColor,
			)};fill-opacity:1;fill-rule:evenodd;stroke:none;stroke-width:0.26458332;stroke-linecap:butt;stroke-linejoin:miter;stroke-miterlimit:4;stroke-dasharray:none;stroke-dashoffset:0;stroke-opacity:1"
			d="m 4.7625007,288.66561 h 7.4083343 v 5.02709 H 4.7625007 Z"
			id="path5859"
		/>
		<path
			style="display:inline;opacity:1;vector-effect:none;fill:{blendColor(
				'#ffffff',
				targetColor,
			)};fill-opacity:1;fill-rule:evenodd;stroke:#000000;stroke-width:0.5291667;stroke-linecap:butt;stroke-linejoin:round;stroke-miterlimit:4;stroke-dasharray:none;stroke-dashoffset:0;stroke-opacity:1"
			d="m 2.9104167,281.52186 v 1.5875 h 1.322917 v 1.5875 l -1.058333,1.05834 v 8.73125 l 1.058333,1.05833 h 4.497917 3.9687503 l 1.058333,-1.05833 v -8.73125 l -1.058333,-1.05834 v -1.5875 h 1.322916 v -1.5875 h -2.910416 v 3.70417 l 1.058333,1.05833 v 7.14375 l -0.264583,0.26459 H 8.7312507 5.0270837 l -0.264583,-0.26459 v -7.14375 l 1.058333,-1.05833 v -3.70417 z"
			id="path5841"
		/>
		<path
			style="display:inline;opacity:1;vector-effect:none;fill:{blendColor(
				'#ffffff',
				targetColor,
			)};fill-opacity:1;fill-rule:evenodd;stroke:#000000;stroke-width:0.5291667;stroke-linecap:butt;stroke-linejoin:round;stroke-miterlimit:4;stroke-dasharray:none;stroke-dashoffset:0;stroke-opacity:1"
			d="m 9.5250007,288.40103 h -1.5875 v -1.32292 l -1.852083,-1.85208 v -2.11667 l 1.322916,-1.32291 h 2.38125 l 1.0583343,1.05833 v 1.85208 l -0.79375,0.79375 H 8.7312507 l -0.79375,-0.79375 v -1.32291 h 1.322917 v 0.79375 h 0.264583 v -0.26459 -0.52916 l -0.264583,-0.26459 h -1.322917 l -0.529167,0.52917 v 0.79375 l 2.116667,2.11667 z"
			id="path5861"
		/>
	</g>
</svg>
