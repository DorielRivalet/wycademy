<!--
  ~ © 2023 Doriel Rivalet
  ~ Use of this source code is governed by a MIT license that can be
  ~ found in the LICENSE file.
-->

<!-- Created with Inkscape (http://www.inkscape.org/) -->
<script lang="ts">
	import { blendColor } from '$lib/client/modules/color-blend';
	interface Props {
		color?: string;
		size?: string;
	}

	let { color = '#ffffff', size = '100%' }: Props = $props();

	let targetColor = $derived(color);
</script>

<svg width={size} viewBox="0 0 16.933333 16.933334" version="1.1" id="svg4846">
	<g id="layer1" transform="translate(0,-280.06665)">
		<path
			style="display:inline;opacity:1;vector-effect:none;fill:{blendColor(
				'#ffffff',
				targetColor,
			)};fill-opacity:1;fill-rule:evenodd;stroke:#000000;stroke-width:0.5291667;stroke-linecap:butt;stroke-linejoin:round;stroke-miterlimit:4;stroke-dasharray:none;stroke-dashoffset:0;stroke-opacity:1"
			d="m 7.1437507,283.37394 -1.322917,1.32292 v 1.85208 1.32292 l -0.529167,0.52917 v 4.23333 l 1.852084,2.64583 h 1.322916 1.322917 l 1.8520833,-2.64583 v -4.23333 l -0.529166,-0.52917 v -1.32292 -1.85208 l -1.3229173,-1.32292 h -1.322917 z"
			id="path2431"
		/>
		<path
			style="display:inline;opacity:1;vector-effect:none;fill:none;fill-opacity:1;fill-rule:evenodd;stroke:#000000;stroke-width:0.5291667;stroke-linecap:round;stroke-linejoin:round;stroke-miterlimit:4;stroke-dasharray:none;stroke-dashoffset:0;stroke-opacity:1"
			d="m 8.4666667,293.6927 v -5.02709 h -1.5875 l -0.529167,0.52917 v 0.26458"
			id="path2433"
		/>
		<circle
			style="display:inline;opacity:1;fill:#000000;fill-opacity:1;fill-rule:nonzero;stroke:none;stroke-width:0.5291667;stroke-linecap:round;stroke-linejoin:round;stroke-miterlimit:4;stroke-dasharray:none;stroke-dashoffset:0;stroke-opacity:1;paint-order:markers stroke fill"
			id="path2443"
			cx="7.2760406"
			cy="284.82916"
			r="0.39687502"
		/>
		<path
			id="path2439-4"
			style="display:inline;opacity:1;vector-effect:none;fill:{blendColor(
				'#d5d5d5',
				targetColor,
			)};fill-opacity:1;fill-rule:evenodd;stroke:#000000;stroke-width:0.5291667;stroke-linecap:butt;stroke-linejoin:round;stroke-miterlimit:4;stroke-dasharray:none;stroke-dashoffset:0;stroke-opacity:1"
			d="m 11.641667,288.93019 h 2.116667 l 1.322917,1.32292 v 3.96875 l 0.264583,0.26458 v 0.79375 h -1.322916 l -0.529167,-0.52916 v -4.23334 l -0.264583,-0.26458 h -1.587501 z m 1.852084,-6.08541 v -0.52917 l 0.529167,-0.52917 h 1.058333 l 0.264583,0.26459 v 0.79375 l -0.529166,0.52916 v 2.91042 l -1.852084,1.85208 h -1.5875 l -0.264583,-0.26458 v -1.05833 h 1.322916 l 1.058334,-1.05834 z m -8.2020843,6.08542 h -2.116667 l -1.322917,1.32291 v 3.96875 l -0.264583,0.26459 v 0.79375 h 1.322916 l 0.529167,-0.52917 v -4.23333 l 0.264583,-0.26459 h 1.587501 z m -1.852084,-6.08542 v -0.52917 l -0.529167,-0.52917 h -1.058333 l -0.264583,0.26459 v 0.79375 l 0.529166,0.52916 v 2.91042 l 1.852084,1.85209 h 1.5875 l 0.264583,-0.26459 v -1.05833 h -1.322916 l -1.058334,-1.05833 z m 7.6729183,2.38125 h 0.529166 l 0.529167,-0.52917 v -1.5875 l 0.793749,-0.79375 h 0.529168 v 3.175 l -1.322917,1.32292 h -1.058333 z m -5.2916683,0 h -0.529166 l -0.529167,-0.52917 v -1.5875 l -0.793749,-0.79375 h -0.529168 v 3.175 l 1.322917,1.32292 h 1.058333 z"
		/>
		<path
			style="display:inline;opacity:1;vector-effect:none;fill:none;fill-opacity:1;fill-rule:evenodd;stroke:#000000;stroke-width:0.5291667;stroke-linecap:round;stroke-linejoin:round;stroke-miterlimit:4;stroke-dasharray:none;stroke-dashoffset:0;stroke-opacity:1"
			d="m 8.4666667,293.69269 v -5.02708 h 1.5875003 l 0.529167,0.52917 v 0.26458"
			id="path2433-0"
		/>
		<path
			id="path2441-2"
			style="display:inline;opacity:1;vector-effect:none;fill:{blendColor(
				'#858585',
				targetColor,
			)};fill-opacity:1;fill-rule:evenodd;stroke:#000000;stroke-width:0.5291667;stroke-linecap:butt;stroke-linejoin:round;stroke-miterlimit:4;stroke-dasharray:none;stroke-dashoffset:0;stroke-opacity:1"
			d="m 8.7312507,283.37394 v -0.79375 l 0.79375,-0.79375 h 1.5875003 l 0.264583,0.26459 v 0.79375 l -0.264583,0.26458 H 9.7895837 l -0.264583,0.26458 z m -0.529168,0 v -0.79375 l -0.79375,-0.79375 h -1.5875 l -0.264583,0.26459 v 0.79375 l 0.264583,0.26458 h 1.322917 l 0.264583,0.26458 z"
		/>
		<circle
			style="display:inline;opacity:1;fill:#000000;fill-opacity:1;fill-rule:nonzero;stroke:none;stroke-width:0.5291667;stroke-linecap:round;stroke-linejoin:round;stroke-miterlimit:4;stroke-dasharray:none;stroke-dashoffset:0;stroke-opacity:1;paint-order:markers stroke fill"
			id="path2443-9"
			cx="-9.6572962"
			cy="284.82916"
			r="0.39687502"
			transform="scale(-1,1)"
		/>
		<path
			style="display:inline;opacity:1;vector-effect:none;fill:none;fill-opacity:1;fill-rule:evenodd;stroke:#000000;stroke-width:0.5291667;stroke-linecap:butt;stroke-linejoin:round;stroke-miterlimit:4;stroke-dasharray:none;stroke-dashoffset:0;stroke-opacity:1"
			d="M 5.8208327,286.54895 H 11.1125"
			id="path2479"
		/>
		<path
			style="display:inline;opacity:1;vector-effect:none;fill:none;fill-opacity:1;fill-rule:evenodd;stroke:#000000;stroke-width:0.5291667;stroke-linecap:butt;stroke-linejoin:round;stroke-miterlimit:4;stroke-dasharray:none;stroke-dashoffset:0;stroke-opacity:1"
			d="M 5.8208337,287.60728 H 11.112501"
			id="path2479-0"
		/>
	</g>
</svg>
