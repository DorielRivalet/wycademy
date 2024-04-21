<!--
  ~ © 2023 Doriel Rivalet
  ~ Use of this source code is governed by a MIT license that can be
  ~ found in the LICENSE file.
-->

<!-- Created with Inkscape (http://www.inkscape.org/) -->
<script lang="ts">
	import { blendColor } from '$lib/client/modules/color-blend';
	export let color = '#ffffff';
	export let size = '100%';

	$: targetColor = color;
</script>

<svg width={size} viewBox="0 0 16.933333 16.933334" version="1.1" id="svg4846">
	<g id="layer1" transform="translate(0,-280.06665)">
		<path
			style="display:inline;opacity:1;vector-effect:none;fill:{blendColor(
				'#d5d5d5',
				targetColor,
			)};fill-opacity:1;fill-rule:evenodd;stroke:#000000;stroke-width:0.5291667;stroke-linecap:butt;stroke-linejoin:round;stroke-miterlimit:4;stroke-dasharray:none;stroke-dashoffset:0;stroke-opacity:1"
			d="m 8.4666667,283.24165 h -2.116667 l -3.175,3.175 v 4.23334 l 3.175,3.175 h 4.2333333 l 3.175,-3.175 v -4.23334 l -3.175,-3.175 z"
			id="path2556"
		/>
		<path
			style="display:inline;opacity:1;vector-effect:none;fill:#000000;fill-opacity:1;fill-rule:evenodd;stroke:none;stroke-width:0.99999994;stroke-linecap:butt;stroke-linejoin:miter;stroke-miterlimit:4;stroke-dasharray:none;stroke-dashoffset:0;stroke-opacity:1"
			d="M 23 21 L 19 24 L 20 33 L 23 27 L 31 35 L 31 36 L 29 43 L 25 43 L 27 45 L 30 45 L 36 39 L 39 43 L 46 36 L 46 33 L 43 31 L 45 27 L 23 21 z M 34 27 L 40 28 L 37 30 L 34 27 z "
			transform="matrix(0.26458334,0,0,0.26458334,0,280.06665)"
			id="path2558"
		/>
		<path
			id="path2622-4-9"
			style="display:inline;opacity:1;vector-effect:none;fill:{blendColor(
				'#ffffff',
				targetColor,
			)};fill-opacity:1;fill-rule:evenodd;stroke:#000000;stroke-width:0.5291667;stroke-linecap:butt;stroke-linejoin:round;stroke-miterlimit:4;stroke-dasharray:none;stroke-dashoffset:0;stroke-opacity:1"
			d="m 15.345833,291.17915 -4.233334,4.23334 -0.529166,-1.5875 3.175,-3.175 z m -13.7583333,0 4.233334,4.23334 0.529166,-1.5875 -3.175,-3.175 z m 13.7583333,-5.29166 -4.233333,-4.23334 -0.529167,1.5875 3.175,3.175 z m -13.7583333,0 4.233334,-4.23334 0.529166,1.5875 -3.175,3.175 z m 7.14375,9.525 h -2.910416 l 0.529166,-1.5875 h 4.2333333 l 0.529167,1.5875 z m -7.143749,-6.61459 v -2.91041 l 1.5875,0.52916 v 4.23334 l -1.5875,0.52916 z m 13.7583323,0 v -2.91041 l -1.5875,0.52916 v 4.23334 l 1.5875,0.52916 z m -6.6145833,-7.14375 h -2.910416 l 0.529166,1.5875 h 4.2333333 l 0.529167,-1.5875 z"
		/>
	</g>
</svg>
