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
			d="m 8.4666668,281.38957 c -2.3812498,0 -6.0854167,3.175 -6.0854167,7.40834 0,4.23333 2.3812497,6.87916 6.0854167,6.87916 3.7041662,0 6.0854162,-2.64583 6.0854162,-6.87916 0,-4.23334 -3.704167,-7.40834 -6.0854162,-7.40834 z"
			id="path5486"
		/>
		<path
			style="display:inline;opacity:1;vector-effect:none;fill:#000000;fill-opacity:1;fill-rule:evenodd;stroke:none;stroke-width:0.99999994;stroke-linecap:butt;stroke-linejoin:round;stroke-miterlimit:4;stroke-dasharray:none;stroke-dashoffset:0;stroke-opacity:1"
			d="M 13 22 L 9 26 L 9 27 L 18 27 L 18 26 L 14 22 L 13 22 z M 25 22 L 21 26 L 21 27 L 30 27 L 30 26 L 26 22 L 25 22 z M 38 22 L 34 26 L 34 27 L 43 27 L 43 26 L 39 22 L 38 22 z M 50 22 L 46 26 L 46 27 L 55 27 L 55 26 L 51 22 L 50 22 z M 13 33 L 9 37 L 9 38 L 18 38 L 18 37 L 14 33 L 13 33 z M 25 33 L 21 37 L 21 38 L 30 38 L 30 37 L 26 33 L 25 33 z M 38 33 L 34 37 L 34 38 L 43 38 L 43 37 L 39 33 L 38 33 z M 50 33 L 46 37 L 46 38 L 55 38 L 55 37 L 51 33 L 50 33 z "
			transform="matrix(0.26458334,0,0,0.26458334,0,280.06665)"
			id="path5488"
		/>
	</g>
</svg>
