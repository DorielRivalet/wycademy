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
	id="svg8"
>
	<g id="layer1" transform="translate(0,-280.06665)">
		<path
			style="fill:#000000;stroke:none;stroke-width:0.26458335px;stroke-linecap:butt;stroke-linejoin:miter;stroke-opacity:1"
			d="m 9.7027316,285.2109 0.044366,3.18117 2.0788694,3.28367 -6.7327012,0.0236 2.2206101,-3.26005 -0.023624,-3.33091 z"
			id="path887"
		/>
		<path
			style="fill:#d0d0d0;fill-opacity:1;stroke:none;stroke-width:0.26458335px;stroke-linecap:butt;stroke-linejoin:miter;stroke-opacity:1"
			d="m 6.0382065,290.44731 h 4.9845615 l 1.984375,3.28367 -1.063058,1.2048 -6.8271955,-0.11812 -1.2284226,-1.39378 z"
			id="path849"
		/>
		<path
			style="fill:{blendColor(
				'#ffffff',
				targetColor,
			)};fill-opacity:1;stroke:#000000;stroke-width:0.5291667;stroke-linecap:round;stroke-linejoin:round;stroke-miterlimit:4;stroke-dasharray:none;stroke-opacity:1"
			d="m 5.3529032,284.39969 v 1.44126 H 6.581769 v 2.40916 l -3.4018597,5.07927 v 0.96842 l 1.2991455,1.29966 h 3.9873535 3.9878707 l 1.299145,-1.29966 v -0.96842 l -3.401859,-5.07927 v -2.40916 h 1.228349 v -1.44126 H 9.0048769 v 4.25246 l 3.2602661,4.98419 -0.637687,0.6382 H 8.4664083 5.3058777 l -0.6376871,-0.6382 3.2597493,-4.98419 v -4.25246 z"
			id="path831"
		/>
		<path
			style="display:inline;opacity:1;vector-effect:none;fill:{blendColor(
				'#ffffff',
				targetColor,
			)};fill-opacity:1;fill-rule:evenodd;stroke:#000000;stroke-width:0.5291667;stroke-linecap:butt;stroke-linejoin:round;stroke-miterlimit:4;stroke-dasharray:none;stroke-dashoffset:0;stroke-opacity:1"
			d="M 8.9730024,286.00866 H 7.9601966 v -0.84934 l -1.1816073,-1.18908 -0.00636,-1.68934 0.8175,-0.81172 1.6778621,0.005 0.8279566,0.81424 0.009,1.19803 -0.7939345,0.65338 H 8.4666095 L 7.9602066,283.6305 v -0.84934 h 0.8440047 v 0.5096 h 0.1687911 v -0.16985 -0.33975 L 8.8042013,282.61129 H 7.9601966 l -0.1406415,0.13642 0.012707,0.89083 1.1407402,1.18104 z"
			id="path5861"
		/>
	</g>
</svg>
