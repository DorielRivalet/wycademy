<!--
  ~ © 2023 Doriel Rivalet
  ~ Use of this source code is governed by a MIT license that can be
  ~ found in the LICENSE file.
-->

<!-- Created with Inkscape (http://www.inkscape.org/) -->
<script lang="ts">
	import { blendColor } from '$lib/client/modules/color-blend';
	export let color = '#ffffff';

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
			style="display:inline;opacity:1;vector-effect:none;fill:{blendColor(
				'#d5d5d5',
				targetColor,
			)};fill-opacity:1;fill-rule:evenodd;stroke:#000000;stroke-width:2;stroke-linecap:butt;stroke-linejoin:miter;stroke-miterlimit:4;stroke-dasharray:none;stroke-dashoffset:0;stroke-opacity:1"
			d="M 20.5 9 C 20.5 9 18.5 8.9999874 18.5 11 L 18.5 14 L 21.5 17 L 29.5 17 L 29.5 9 L 20.5 9 z M 34.5 15 L 34.5 23 L 42.5 23 L 45.5 20 L 45.5 17 C 45.5 14.999987 43.5 15 43.5 15 L 34.5 15 z M 17.5 18 C 17.5 18 15.5 17.999987 15.5 20 L 15.5 23 L 18.5 26 L 29.5 26 L 29.5 18 L 17.5 18 z M 34.5 24 L 34.5 32 L 46.5 32 L 49.5 29 L 49.5 26 C 49.5 23.999987 47.5 24 47.5 24 L 34.5 24 z M 14.5 27 C 14.5 27 12.5 26.999987 12.5 29 L 12.5 32 L 15.5 35 L 29.5 35 L 29.5 27 L 14.5 27 z M 34.5 33 L 34.5 41 L 50.5 41 L 53.5 38 L 53.5 35 C 53.5 32.999987 51.5 33 51.5 33 L 34.5 33 z M 12.5 36 C 12.5 36 10.5 35.999987 10.5 38 L 10.5 41 L 13.5 44 L 29.5 44 L 29.5 36 L 12.5 36 z "
			transform="matrix(0.26458334,0,0,0.26458334,0,280.06665)"
			id="path5725"
		/>
		<path
			style="display:inline;opacity:1;vector-effect:none;fill:{blendColor(
				'#ffffff',
				targetColor,
			)};fill-opacity:1;fill-rule:evenodd;stroke:#000000;stroke-width:0.5291667;stroke-linecap:butt;stroke-linejoin:miter;stroke-miterlimit:4;stroke-dasharray:none;stroke-dashoffset:0;stroke-opacity:1"
			d="m 9.9218747,293.82499 h -0.529167 v -1.5875 l 0.7937503,-0.79375 h 1.322917 c 0,0 0.79375,0 0.79375,1.05833 v 1.32292 c 0,0 0,1.5875 -1.5875,1.5875 H 9.1281247 c 0,0 -1.322917,0 -1.322917,-1.85209 v -11.37708 c 0,0 0,-0.52917 0.529167,-0.52917 h 0.264583 c 0.529167,0 0.529167,0.52917 0.529167,0.52917 v 11.1125 c 0,0 0,0.79375 0.79375,0.79375 h 0.5291663 c 0,0 0.529167,0 0.529167,-0.52917 v -0.52916 h -0.264583 v 0.79375 z"
			id="path5723"
		/>
	</g>
</svg>
