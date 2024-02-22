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
			d="m 12.7,293.56039 c 0,0 0.529167,0 0.529167,-0.52917 0,-0.52916 0,-8.46666 0,-8.46666 0,0 0,-0.79375 -0.793751,-0.79375 -0.79375,0 -6.6145825,0 -6.6145825,0 0,0 -0.79375,0 -0.79375,0.79375 0,0.79375 0,2.11666 0,2.11666 h -3.175 c 0,0 -0.529167,0 -0.529167,0.52917 0,0.52917 0,2.91042 0,2.91042 h 1.852084 v -0.52917 l 0.264583,-0.26458 h 1.0583331 l 0.2645838,0.26458 v 0.79375 h 1.5875 v -0.79375 l 0.2645831,-0.26458 h 1.322917 v 2.64583 h -1.322917 v -0.79375 H 4.7625004 v 0.79375 H 3.4395835 v -0.79375 h -1.5875 v 1.5875 c 0,0 0,0.79375 0.79375,0.79375 0.79375,0 10.0541665,0 10.0541665,0 z"
			id="path2030"
		/>
		<path
			style="display:inline;opacity:1;vector-effect:none;fill:none;fill-opacity:1;fill-rule:evenodd;stroke:#000000;stroke-width:0.5291667;stroke-linecap:round;stroke-linejoin:round;stroke-miterlimit:4;stroke-dasharray:none;stroke-dashoffset:0;stroke-opacity:1"
			d="M 13.229167,289.85622 H 9.7895836 c 0,0 -0.529167,0 -0.529167,0.52917 0,0.52917 0,1.05833 0,1.05833 0,0 0,0.52917 0.529167,0.52917 0.5291664,0 1.5874994,0 1.5874994,0 0,0 0.529167,0 0.529167,-0.52917 0,-0.52916 -0.529167,-0.52916 -0.529167,-0.52916 h -0.793749 v 0.26458"
			id="path2032"
		/>
		<path
			style="display:inline;opacity:1;vector-effect:none;fill:#d0d0d0;fill-opacity:1;fill-rule:evenodd;stroke:#000000;stroke-width:0.5291667;stroke-linecap:butt;stroke-linejoin:round;stroke-miterlimit:4;stroke-dasharray:none;stroke-dashoffset:0;stroke-opacity:1"
			d="M 10.054167,286.15206 H 8.9958335 v 1.5875 h 2.3812495 v -1.5875 z"
			id="path2036"
		/>
		<path
			style="display:inline;opacity:1;vector-effect:none;fill:#4d4d4d;fill-opacity:1;fill-rule:evenodd;stroke:#000000;stroke-width:0.5291667;stroke-linecap:butt;stroke-linejoin:round;stroke-miterlimit:4;stroke-dasharray:none;stroke-dashoffset:0;stroke-opacity:1"
			d="m 13.758332,285.88747 1e-6,-2.38125 h 0.79375 l 1.058334,1.05834 v 0.52916 l -1.058334,1.05834 h -0.793751 z"
			id="path2042"
		/>
		<path
			style="display:inline;opacity:1;vector-effect:none;fill:#4d4d4d;fill-opacity:1;fill-rule:evenodd;stroke:#000000;stroke-width:0.5291667;stroke-linecap:butt;stroke-linejoin:round;stroke-miterlimit:4;stroke-dasharray:none;stroke-dashoffset:0;stroke-opacity:1"
			d="m 13.758332,289.59164 v -2.38125 h 0.79375 l 1.058334,1.05833 v 0.52917 l -1.058334,1.05833 h -0.79375 z"
			id="path2042-8"
		/>
		<path
			style="display:inline;opacity:1;vector-effect:none;fill:#4d4d4d;fill-opacity:1;fill-rule:evenodd;stroke:#000000;stroke-width:0.5291667;stroke-linecap:butt;stroke-linejoin:round;stroke-miterlimit:4;stroke-dasharray:none;stroke-dashoffset:0;stroke-opacity:1"
			d="m 13.758332,293.29581 v -2.38125 h 0.79375 l 1.058334,1.05833 v 0.52917 l -1.058334,1.05833 h -0.79375 z"
			id="path2042-8-4"
		/>
	</g>
</svg>
