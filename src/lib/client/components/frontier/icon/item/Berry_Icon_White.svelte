<!--
  ~ © 2023 Doriel Rivalet
  ~ Use of this source code is governed by a MIT license that can be
  ~ found in the LICENSE file.
-->
<script lang="ts">
	import { blendColor } from '$lib/client/modules/color-blend';
	import { ColorCodes } from '$lib/client/modules/frontier/objects';
	export let colorCode = 0;

	$: targetColor = ColorCodes[colorCode] ?? ColorCodes[0];
</script>

<svg
	xmlns="http://www.w3.org/2000/svg"
	width="100%"
	height="100%"
	viewBox="0 0 16.933333 16.933334"
	version="1.1"
	id="svg8"
>
	<g id="layer1" transform="translate(0,-280.06665)">
		<path
			style="fill:#000000;stroke:none;stroke-width:0.26458335px;stroke-linecap:butt;stroke-linejoin:miter;stroke-opacity:1"
			d="m 4.4979197,286.81353 c 0,0 0,0.79375 -1.0583333,0.79375 -1.0583334,0 -1.0583334,5.82083 -1.0583334,5.82083 l 2.3812501,1.5875 c 0,0 2.1166667,-0.26458 3.175,0 l 0.7937499,-6.35 -3.175,-1.5875 z"
			id="path1499"
		/>
		<path
			style="fill:#d0d0d0;fill-opacity:1;stroke:#000000;stroke-width:0.5291667;stroke-linecap:round;stroke-linejoin:round;stroke-miterlimit:4;stroke-dasharray:none;stroke-opacity:1"
			d="M 10.292294,289.19478 H 10.05417 c 0,0 -0.9524982,0 -0.9524982,0.9525 v 0.47625 c 0,0 0,0.9525 0.9524982,0.9525 h 0.476248 c 0,0 0.952498,0 0.952498,-0.9525 v -0.47625 c 0,0 0,-0.9525 -0.952498,-0.9525 z"
			id="path1343-7-0-28"
		/>
		<path
			style="fill:#d0d0d0;fill-opacity:1;stroke:#000000;stroke-width:0.5291667;stroke-linecap:round;stroke-linejoin:round;stroke-miterlimit:4;stroke-dasharray:none;stroke-opacity:1"
			d="M 7.937503,287.0781 H 7.6729197 c 0,0 -1.0583334,0 -1.0583334,1.05834 v 0.52916 c 0,0 0,1.05834 1.0583334,1.05834 h 0.5291666 c 0,0 1.0583332,0 1.0583332,-1.05834 v -0.52916 c 0,0 0,-1.05834 -1.0583332,-1.05834 z"
			id="path1343-03-4"
		/>
		<circle
			style="opacity:1;fill:{blendColor(
				'#ffffff',
				targetColor,
			)};fill-opacity:1;stroke:none;stroke-width:0.5291667;stroke-linecap:round;stroke-linejoin:round;stroke-miterlimit:4;stroke-dasharray:none;stroke-dashoffset:0;stroke-opacity:1;paint-order:normal"
			id="path1347-2-7-9"
			cx="9.7366676"
			cy="289.98853"
			r="0.26458335"
		/>
		<path
			style="fill:#d0d0d0;fill-opacity:1;stroke:#000000;stroke-width:0.5291667;stroke-linecap:round;stroke-linejoin:round;stroke-miterlimit:4;stroke-dasharray:none;stroke-opacity:1"
			d="M 5.6091702,285.75519 H 5.3975041 c 0,0 -0.8466644,0 -0.8466644,0.84667 v 0.42333 c 0,0 0,0.84667 0.8466644,0.84667 h 0.4233322 c 0,0 0.8466644,0 0.8466644,-0.84667 v -0.42333 c 0,0 0,-0.84667 -0.8466644,-0.84667 z"
			id="path1343-7-0-2-6"
		/>
		<circle
			style="opacity:1;fill:{blendColor(
				'#ffffff',
				targetColor,
			)};fill-opacity:1;stroke:none;stroke-width:0.5291667;stroke-linecap:round;stroke-linejoin:round;stroke-miterlimit:4;stroke-dasharray:none;stroke-dashoffset:0;stroke-opacity:1;paint-order:normal"
			id="path1347-7-3"
			cx="7.4083371"
			cy="287.87189"
			r="0.26458335"
		/>
		<path
			style="fill:#d0d0d0;fill-opacity:1;stroke:#000000;stroke-width:0.5291667;stroke-linecap:round;stroke-linejoin:round;stroke-miterlimit:4;stroke-dasharray:none;stroke-opacity:1"
			d="M 7.937503,289.98852 H 7.6729197 c 0,0 -1.0583334,0 -1.0583334,1.05834 v 0.52916 c 0,0 0,1.05834 1.0583334,1.05834 h 0.5291666 c 0,0 1.0583332,0 1.0583332,-1.05834 v -0.52916 c 0,0 0,-1.05834 -1.0583332,-1.05834 z"
			id="path1343-5"
		/>
		<path
			style="fill:#d0d0d0;fill-opacity:1;stroke:#000000;stroke-width:0.5291667;stroke-linecap:round;stroke-linejoin:round;stroke-miterlimit:4;stroke-dasharray:none;stroke-opacity:1"
			d="M 2.6458363,292.36977 H 2.381253 c 0,0 -1.0583333,0 -1.0583333,1.05834 v 0.52916 c 0,0 0,1.05834 1.0583333,1.05834 h 0.5291666 c 0,0 1.0583332,0 1.0583332,-1.05834 v -0.52916 c 0,0 0,-1.05834 -1.0583332,-1.05834 z"
			id="path1343-7"
		/>
		<path
			style="fill:{blendColor(
				'#ffffff',
				targetColor,
			)};fill-opacity:1;stroke:#000000;stroke-width:0.5291667;stroke-linecap:round;stroke-linejoin:round;stroke-miterlimit:4;stroke-dasharray:none;stroke-opacity:1"
			d="m 11.377087,280.99269 h -1.058333 v 2.91042 l 1.058333,1.05833 v 2.64584 l -2.1166671,2.11666 h 1.3229171 l 2.116667,-1.85208 -10e-7,-3.43958 -1.322916,-1.05834 z"
			id="path1326"
		/>
		<circle
			style="opacity:1;fill:{blendColor(
				'#ffffff',
				targetColor,
			)};fill-opacity:1;stroke:none;stroke-width:0.5291667;stroke-linecap:round;stroke-linejoin:round;stroke-miterlimit:4;stroke-dasharray:none;stroke-dashoffset:0;stroke-opacity:1;paint-order:normal"
			id="path1347-25"
			cx="7.4083371"
			cy="290.78229"
			r="0.26458335"
		/>
		<path
			style="fill:{blendColor(
				'#858585',
				targetColor,
			)};fill-opacity:1;stroke:#000000;stroke-width:0.5291667;stroke-linecap:round;stroke-linejoin:round;stroke-miterlimit:4;stroke-dasharray:none;stroke-opacity:1"
			d="m 10.318754,289.45936 2.38125,-1.5875 v 3.96875 l -2.116667,2.11667 h -0.264583 z"
			id="path1246"
		/>
		<path
			style="fill:{blendColor(
				'#858585',
				targetColor,
			)};fill-opacity:1;stroke:#000000;stroke-width:0.5291667;stroke-linecap:round;stroke-linejoin:round;stroke-miterlimit:4;stroke-dasharray:none;stroke-opacity:1"
			d="m 11.377087,287.60728 -2.6458341,2.64583 h -0.529166 l -10e-7,-3.96875 -1.058333,-1.32292 v -0.52916 h 2.116667 c 1.0583341,0 2.1166671,1.32291 2.1166671,2.11666 z"
			id="path1248"
		/>
		<circle
			style="opacity:1;fill:{blendColor(
				'#ffffff',
				targetColor,
			)};fill-opacity:1;stroke:none;stroke-width:0.5291667;stroke-linecap:round;stroke-linejoin:round;stroke-miterlimit:4;stroke-dasharray:none;stroke-dashoffset:0;stroke-opacity:1;paint-order:normal"
			id="path1347-2-7-3-2"
			cx="5.3975043"
			cy="286.54895"
			r="0.26458335"
		/>
		<path
			style="fill:{blendColor(
				'#858585',
				targetColor,
			)};fill-opacity:1;stroke:#000000;stroke-width:0.5291667;stroke-linecap:round;stroke-linejoin:round;stroke-miterlimit:4;stroke-dasharray:none;stroke-opacity:1"
			d="m 6.8791699,283.90311 -2.116667,2.11667 H 1.3229196 l 2.1166668,-2.11667 z"
			id="path1250"
		/>
		<path
			style="fill:{blendColor(
				'#858585',
				targetColor,
			)};fill-opacity:1;stroke:#000000;stroke-width:0.5291667;stroke-linecap:round;stroke-linejoin:round;stroke-miterlimit:4;stroke-dasharray:none;stroke-opacity:1"
			d="M 10.318754,283.90311 H 8.9958369 l -0.79375,-1.05833 v -0.52917 h 2.1166671 z"
			id="path1252"
		/>
		<path
			style="fill:{blendColor(
				'#858585',
				targetColor,
			)};fill-opacity:1;stroke:#000000;stroke-width:0.5291667;stroke-linecap:round;stroke-linejoin:round;stroke-miterlimit:4;stroke-dasharray:none;stroke-opacity:1"
			d="m 15.345837,282.84478 h -3.96875 v 0.52916 l 1.322917,1.05834 v 0.52916 h 1.5875 z"
			id="path1254"
		/>
		<path
			style="fill:{blendColor(
				'#858585',
				targetColor,
			)};fill-opacity:1;stroke:#000000;stroke-width:0.5291667;stroke-linecap:round;stroke-linejoin:round;stroke-miterlimit:4;stroke-dasharray:none;stroke-opacity:1"
			d="m 15.875004,285.22603 h -3.175 v 2.11666 c 0,0 0.79375,0 1.322916,0 0.529167,0 1.852084,-0.52916 1.852084,-2.11666 z"
			id="path1256"
		/>
		<path
			style="fill:#d0d0d0;fill-opacity:1;stroke:#000000;stroke-width:0.5291667;stroke-linecap:round;stroke-linejoin:round;stroke-miterlimit:4;stroke-dasharray:none;stroke-opacity:1"
			d="M 5.0270864,290.51769 H 4.7625031 c 0,0 -1.0583334,0 -1.0583334,1.05834 v 0.52916 c 0,0 0,1.05834 1.0583334,1.05834 h 0.5291666 c 0,0 1.0583333,0 1.0583333,-1.05834 v -0.52916 c 0,0 0,-1.05834 -1.0583333,-1.05834 z"
			id="path1343"
		/>
		<circle
			style="opacity:1;fill:{blendColor(
				'#ffffff',
				targetColor,
			)};fill-opacity:1;stroke:none;stroke-width:0.5291667;stroke-linecap:round;stroke-linejoin:round;stroke-miterlimit:4;stroke-dasharray:none;stroke-dashoffset:0;stroke-opacity:1;paint-order:normal"
			id="path1347-2"
			cx="2.1166699"
			cy="293.16351"
			r="0.26458335"
		/>
		<circle
			style="opacity:1;fill:{blendColor(
				'#ffffff',
				targetColor,
			)};fill-opacity:1;stroke:none;stroke-width:0.5291667;stroke-linecap:round;stroke-linejoin:round;stroke-miterlimit:4;stroke-dasharray:none;stroke-dashoffset:0;stroke-opacity:1;paint-order:normal"
			id="path1347"
			cx="4.49792"
			cy="291.31143"
			r="0.26458335"
		/>
		<path
			style="fill:#d0d0d0;fill-opacity:1;stroke:#000000;stroke-width:0.5291667;stroke-linecap:round;stroke-linejoin:round;stroke-miterlimit:4;stroke-dasharray:none;stroke-opacity:1"
			d="M 5.2916697,293.4281 H 5.0270864 c 0,0 -1.0583333,0 -1.0583333,1.05834 v 0.52916 c 0,0 0,1.05834 1.0583333,1.05834 H 5.556253 c 0,0 1.0583333,0 1.0583333,-1.05834 v -0.52916 c 0,0 0,-1.05834 -1.0583333,-1.05834 z"
			id="path1343-7-8"
		/>
		<circle
			style="opacity:1;fill:{blendColor(
				'#ffffff',
				targetColor,
			)};fill-opacity:1;stroke:none;stroke-width:0.5291667;stroke-linecap:round;stroke-linejoin:round;stroke-miterlimit:4;stroke-dasharray:none;stroke-dashoffset:0;stroke-opacity:1;paint-order:normal"
			id="path1347-2-8"
			cx="4.7625036"
			cy="294.22186"
			r="0.26458335"
		/>
		<path
			style="fill:#d0d0d0;fill-opacity:1;stroke:#000000;stroke-width:0.5291667;stroke-linecap:round;stroke-linejoin:round;stroke-miterlimit:4;stroke-dasharray:none;stroke-opacity:1"
			d="M 8.2285454,292.63436 H 7.990421 c 0,0 -0.9524975,0 -0.9524975,0.9525 v 0.47625 c 0,0 0,0.9525 0.9524975,0.9525 h 0.4762487 c 0,0 0.9524976,0 0.9524976,-0.9525 v -0.47625 c 0,0 0,-0.9525 -0.9524976,-0.9525 z"
			id="path1343-7-0"
		/>
		<circle
			style="opacity:1;fill:{blendColor(
				'#ffffff',
				targetColor,
			)};fill-opacity:1;stroke:none;stroke-width:0.5291667;stroke-linecap:round;stroke-linejoin:round;stroke-miterlimit:4;stroke-dasharray:none;stroke-dashoffset:0;stroke-opacity:1;paint-order:normal"
			id="path1347-2-7"
			cx="7.6729198"
			cy="293.4281"
			r="0.26458335"
		/>
		<path
			style="fill:#d0d0d0;fill-opacity:1;stroke:#000000;stroke-width:0.5291667;stroke-linecap:round;stroke-linejoin:round;stroke-miterlimit:4;stroke-dasharray:none;stroke-opacity:1"
			d="M 2.381253,289.45935 H 2.1166697 c 0,0 -1.0583333,0 -1.0583333,1.05834 v 0.52916 c 0,0 0,1.05834 1.0583333,1.05834 h 0.5291666 c 0,0 1.0583332,0 1.0583332,-1.05834 v -0.52916 c 0,0 0,-1.05834 -1.0583332,-1.05834 z"
			id="path1343-0"
		/>
		<circle
			style="opacity:1;fill:{blendColor(
				'#ffffff',
				targetColor,
			)};fill-opacity:1;stroke:none;stroke-width:0.5291667;stroke-linecap:round;stroke-linejoin:round;stroke-miterlimit:4;stroke-dasharray:none;stroke-dashoffset:0;stroke-opacity:1;paint-order:normal"
			id="path1347-0"
			cx="1.8520867"
			cy="290.25311"
			r="0.26458335"
		/>
		<path
			style="fill:#d0d0d0;fill-opacity:1;stroke:#000000;stroke-width:0.5291667;stroke-linecap:round;stroke-linejoin:round;stroke-miterlimit:4;stroke-dasharray:none;stroke-opacity:1"
			d="M 5.2916697,287.87185 H 5.0270864 c 0,0 -1.0583334,0 -1.0583334,1.05834 v 0.52916 c 0,0 0,1.05834 1.0583334,1.05834 H 5.556253 c 0,0 1.0583332,0 1.0583332,-1.05834 v -0.52916 c 0,0 0,-1.05834 -1.0583332,-1.05834 z"
			id="path1343-03"
		/>
		<circle
			style="opacity:1;fill:{blendColor(
				'#ffffff',
				targetColor,
			)};fill-opacity:1;stroke:none;stroke-width:0.5291667;stroke-linecap:round;stroke-linejoin:round;stroke-miterlimit:4;stroke-dasharray:none;stroke-dashoffset:0;stroke-opacity:1;paint-order:normal"
			id="path1347-7"
			cx="4.7625036"
			cy="288.66562"
			r="0.26458335"
		/>
		<path
			style="fill:#d0d0d0;fill-opacity:1;stroke:#000000;stroke-width:0.5291667;stroke-linecap:round;stroke-linejoin:round;stroke-miterlimit:4;stroke-dasharray:none;stroke-opacity:1"
			d="M 2.8575024,287.34269 H 2.6458363 c 0,0 -0.8466644,0 -0.8466644,0.84667 v 0.42333 c 0,0 0,0.84667 0.8466644,0.84667 h 0.4233322 c 0,0 0.8466644,0 0.8466644,-0.84667 v -0.42333 c 0,0 0,-0.84667 -0.8466644,-0.84667 z"
			id="path1343-7-0-2"
		/>
		<circle
			style="opacity:1;fill:{blendColor(
				'#ffffff',
				targetColor,
			)};fill-opacity:1;stroke:none;stroke-width:0.5291667;stroke-linecap:round;stroke-linejoin:round;stroke-miterlimit:4;stroke-dasharray:none;stroke-dashoffset:0;stroke-opacity:1;paint-order:normal"
			id="path1347-2-7-3"
			cx="2.6458361"
			cy="288.13644"
			r="0.26458335"
		/>
	</g>
</svg>
