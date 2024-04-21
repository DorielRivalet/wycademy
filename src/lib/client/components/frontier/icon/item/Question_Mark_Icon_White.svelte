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
				'#ffffff',
				targetColor,
			)};fill-opacity:1;fill-rule:evenodd;stroke:#000000;stroke-width:0.5291667;stroke-linecap:butt;stroke-linejoin:round;stroke-miterlimit:4;stroke-dasharray:none;stroke-dashoffset:0;stroke-opacity:1"
			d="M 2.5135408,287.3427 H 2.2489575 l 0.2645834,-5.55625 11.3770841,-0.26459 0.79375,5.02709 v 1.05833 l -3.96875,2.38125 0.264583,1.5875 -4.4979168,0.26458 -0.2645836,-2.91041 4.7625004,-2.11667 v -2.11667 H 6.2177076 l 0.2645836,2.38125 z"
			id="path1964"
		/>
		<path
			style="display:inline;opacity:1;vector-effect:none;fill:{blendColor(
				'#ffffff',
				targetColor,
			)};fill-opacity:1;fill-rule:evenodd;stroke:#000000;stroke-width:0.5291667;stroke-linecap:butt;stroke-linejoin:round;stroke-miterlimit:4;stroke-dasharray:none;stroke-dashoffset:0;stroke-opacity:1"
			d="m 11.509375,293.6927 v -1.32292 H 5.9531242 v 3.175 h 5.5562508 z"
			id="path1968"
		/>
	</g>
</svg>
