<!--
  ~ © 2023 Doriel Rivalet
  ~ Use of this source code is governed by a MIT license that can be
  ~ found in the LICENSE file.
-->
<script lang="ts">
	import { blendColor } from '$lib/client/modules/color-blend';
	interface Props {
		color?: string;
		size?: string;
	}

	let { color = '#ffffff', size = '100%' }: Props = $props();

	let targetColor = $derived(color);
</script>

<svg
	xmlns="http://www.w3.org/2000/svg"
	width={size}
	viewBox="0 0 16.933333 16.933334"
	version="1.1"
	id="svg4846"
>
	<defs id="defs4840" />
	<g id="layer1" transform="translate(0,-280.06665)">
		<path
			style="display:inline;opacity:1;vector-effect:none;fill:#000000;fill-opacity:1;fill-rule:evenodd;stroke:none;stroke-width:0.26458332;stroke-linecap:butt;stroke-linejoin:miter;stroke-miterlimit:4;stroke-dasharray:none;stroke-dashoffset:0;stroke-opacity:1"
			d="m 4.3656219,284.1677 h 2.9104201 1.5875 v 5.02708 H 4.3656219 Z"
			id="path1484"
		/>
		<path
			style="display:inline;opacity:1;vector-effect:none;fill:{blendColor(
				'#858585',
				targetColor,
			)};fill-opacity:1;fill-rule:evenodd;stroke:#000000;stroke-width:0.5291667;stroke-linecap:butt;stroke-linejoin:round;stroke-miterlimit:4;stroke-dasharray:none;stroke-dashoffset:0;stroke-opacity:1"
			d="m 11.509382,288.9302 1.32291,-1.32292 v -1.85208 l -1.32291,-1.32292 h 2.91041 l 0.79375,0.79375 v 2.91042 l -0.79375,0.79375 z"
			id="path1431-3"
		/>
		<path
			style="display:inline;opacity:1;vector-effect:none;fill:{blendColor(
				'#ffffff',
				targetColor,
			)};fill-opacity:1;fill-rule:evenodd;stroke:#000000;stroke-width:0.5291667;stroke-linecap:butt;stroke-linejoin:round;stroke-miterlimit:4;stroke-dasharray:none;stroke-dashoffset:0;stroke-opacity:1"
			d="M 7.5406219,284.43228 H 7.276042 l -1.3229201,1.32292 v 1.85208 l 1.3229201,1.32292 h 1.3229198 l 1.3229101,-1.32292 v -1.85208 l -1.3229101,-1.32292 z"
			id="path1397-3"
		/>
		<path
			style="display:inline;opacity:1;vector-effect:none;fill:{blendColor(
				'#4d4d4d',
				targetColor,
			)};fill-opacity:1;fill-rule:evenodd;stroke:#000000;stroke-width:0.5291667;stroke-linecap:butt;stroke-linejoin:round;stroke-miterlimit:4;stroke-dasharray:none;stroke-dashoffset:0;stroke-opacity:1"
			d="m 2.2489619,282.31561 -0.26458,-0.26458 -1e-5,-0.52917 h 3.4395899 v 0.52917 l -1.5874999,1.5875 h -0.26459 z"
			id="path1371"
		/>
		<path
			style="display:inline;opacity:1;vector-effect:none;fill:{blendColor(
				'#4d4d4d',
				targetColor,
			)};fill-opacity:1;fill-rule:evenodd;stroke:#000000;stroke-width:0.5291667;stroke-linecap:butt;stroke-linejoin:round;stroke-miterlimit:4;stroke-dasharray:none;stroke-dashoffset:0;stroke-opacity:1"
			d="m 6.7468819,282.31561 -0.2645799,-0.26458 -10e-6,-0.52917 h 3.43959 v 0.52917 l -1.5875001,1.5875 H 8.069792 Z"
			id="path1371-3"
		/>
		<path
			style="display:inline;opacity:1;vector-effect:none;fill:{blendColor(
				'#ffffff',
				targetColor,
			)};fill-opacity:1;fill-rule:evenodd;stroke:#000000;stroke-width:0.5291667;stroke-linecap:butt;stroke-linejoin:round;stroke-miterlimit:4;stroke-dasharray:none;stroke-dashoffset:0;stroke-opacity:1"
			d="M 3.307292,284.43228 H 3.0427119 l -1.32292,1.32292 v 1.85208 l 1.32292,1.32292 h 1.32292 l 1.3229101,-1.32292 v -1.85208 l -1.3229101,-1.32292 z"
			id="path1397"
		/>
		<ellipse
			style="display:inline;opacity:1;fill:#000000;fill-opacity:1;fill-rule:nonzero;stroke:none;stroke-width:0.5291667;stroke-linecap:butt;stroke-linejoin:round;stroke-miterlimit:4;stroke-dasharray:none;stroke-dashoffset:0;stroke-opacity:1;paint-order:normal"
			id="path1399"
			cx="3.7041652"
			cy="286.54895"
			rx="0.661457"
			ry="0.79375005"
		/>
		<ellipse
			style="display:inline;opacity:1;fill:#000000;fill-opacity:1;fill-rule:nonzero;stroke:none;stroke-width:0.5291667;stroke-linecap:butt;stroke-linejoin:round;stroke-miterlimit:4;stroke-dasharray:none;stroke-dashoffset:0;stroke-opacity:1;paint-order:normal"
			id="path1399-3"
			cx="7.9375024"
			cy="286.54895"
			rx="0.661457"
			ry="0.79375005"
		/>
		<path
			style="display:inline;opacity:1;vector-effect:none;fill:{blendColor(
				'#d5d5d5',
				targetColor,
			)};fill-opacity:1;fill-rule:evenodd;stroke:#000000;stroke-width:0.5291667;stroke-linecap:butt;stroke-linejoin:round;stroke-miterlimit:4;stroke-dasharray:none;stroke-dashoffset:0;stroke-opacity:1"
			d="m 8.863542,288.9302 1.32292,-1.32292 v -1.85208 l -1.32292,-1.32292 h 2.64583 l 1.05834,1.05833 v 2.38125 l -1.05834,1.05834 z"
			id="path1431"
		/>
		<path
			style="display:inline;opacity:1;vector-effect:none;fill:{blendColor(
				'#858585',
				targetColor,
			)};fill-opacity:1;fill-rule:evenodd;stroke:#000000;stroke-width:0.5291667;stroke-linecap:round;stroke-linejoin:round;stroke-miterlimit:4;stroke-dasharray:none;stroke-dashoffset:0;stroke-opacity:1"
			d="m 14.684372,289.98853 0.52917,0.52917 v 4.49791 l -0.52917,0.52917 h -2.64583 l -0.52917,-0.52917 v -4.49791 l 0.52917,-0.52917 z"
			id="path1448"
		/>
		<path
			style="display:inline;opacity:1;vector-effect:none;fill:{blendColor(
				'#858585',
				targetColor,
			)};fill-opacity:1;fill-rule:evenodd;stroke:#000000;stroke-width:0.5291667;stroke-linecap:butt;stroke-linejoin:round;stroke-miterlimit:4;stroke-dasharray:none;stroke-dashoffset:0;stroke-opacity:1"
			d="m 9.657292,293.42811 v 0.26459 h -3.175 v -3.175 h 1.5875 l 9.8e-6,1.58749 1.5875,1e-5 z"
			id="path1450"
		/>
	</g>
</svg>
