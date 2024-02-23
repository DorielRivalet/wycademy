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
	id="svg8"
>
	<g id="layer1" transform="translate(0,-280.06665)">
		<path
			style="fill:{blendColor(
				'#ffffff',
				targetColor,
			)};fill-opacity:1;stroke:#000000;stroke-width:0.5291667;stroke-linecap:butt;stroke-linejoin:miter;stroke-miterlimit:4;stroke-dasharray:none;stroke-opacity:1"
			d="m 6.2502495,286.12561 -3.138289,3.1988 4.243762,6.65767 h 1.11082 1.111064 l 4.2437615,-6.65767 -3.138533,-3.1988 H 8.4665425 Z"
			id="path829"
		/>
		<path
			style="fill:#000000;stroke:none;stroke-width:0.5291667;stroke-linecap:butt;stroke-linejoin:miter;stroke-miterlimit:4;stroke-dasharray:none;stroke-opacity:1"
			d="m 5.3786985,289.82939 -0.233678,-0.31253 1.749704,-1.7833 h 3.1438795 l 1.749704,1.7833 -0.926529,1.44141 -4.6818295,0.16012 z"
			id="path868"
		/>
		<path
			style="fill:#d0d0d0;fill-opacity:1;stroke:none;stroke-width:0.5291667;stroke-linecap:butt;stroke-linejoin:miter;stroke-miterlimit:4;stroke-dasharray:none;stroke-opacity:1"
			d="m 5.3786985,289.82939 h 6.2686205 l -2.9737295,4.52542 h -0.413854 z"
			id="path866"
		/>
		<path
			style="fill:{blendColor(
				'#ffffff',
				targetColor,
			)};fill-opacity:1;stroke:#000000;stroke-width:0.5291667;stroke-linecap:butt;stroke-linejoin:miter;stroke-miterlimit:4;stroke-dasharray:none;stroke-opacity:1"
			d="m 8.4665425,281.19775 -2.318115,2.36263 0.98202,1.00088 h 0.259298 2.153838 0.259298 l 0.9817795,-1.00088 z"
			id="path835"
		/>
		<path
			style="fill:{blendColor(
				'#ffffff',
				targetColor,
			)};fill-opacity:1;stroke:#000000;stroke-width:0.5291667;stroke-linecap:butt;stroke-linejoin:miter;stroke-miterlimit:4;stroke-dasharray:none;stroke-opacity:1"
			d="m 7.3897455,284.56126 v 1.56435 h 1.076797 1.077041 v -1.56435 h -1.077041 z"
			id="path833"
		/>
		<path
			style="fill:none;stroke:#000000;stroke-width:0.5291667;stroke-linecap:butt;stroke-linejoin:miter;stroke-miterlimit:4;stroke-dasharray:none;stroke-opacity:1"
			d="m 6.8947245,287.73356 -1.749704,1.7833 3.114719,4.83795 h 0.206803 0.207051 l 3.1147195,-4.83795 -1.749709,-1.7833 H 8.4665425 Z"
			id="path831"
		/>
	</g>
</svg>
