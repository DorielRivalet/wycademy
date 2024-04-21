<!--
  ~ © 2023 Doriel Rivalet
  ~ Use of this source code is governed by a MIT license that can be
  ~ found in the LICENSE file.
-->
<script lang="ts">
	import { blendColor } from '$lib/client/modules/color-blend';
	export let color = '#ffffff';
	export let size = '100%';

	$: targetColor = color;
</script>

<svg width={size} viewBox="0 0 16.933333 16.933334" version="1.1" id="svg8">
	<g id="layer2" style="display:inline">
		<path
			style="opacity:0.999;fill:{blendColor(
				'#858585',
				targetColor,
			)};fill-opacity:1;stroke:#000000;stroke-width:0.529167;stroke-linecap:round;stroke-linejoin:round;stroke-miterlimit:4;stroke-dasharray:none"
			d="M 11.743155,15.722325 6.9991207,13.584165 7.7842249,6.9358358 8.4666666,3.6784885 9.5608017,5.529228 12.143444,15.722325 Z"
			id="path1078"
		/>
		<path
			style="opacity:0.999;fill:{blendColor(
				'#ffffff',
				targetColor,
			)};fill-opacity:1;stroke:#000000;stroke-width:0.529167;stroke-linecap:round;stroke-linejoin:round;stroke-miterlimit:4;stroke-dasharray:none"
			d="M 9.5608017,5.529228 8.0180856,5.5994881 7.6873004,4.2869047 8.4666666,1.2109268 Z"
			id="path1076"
		/>
		<path
			style="opacity:0.999;fill:{blendColor(
				'#d0d0d0',
				targetColor,
			)};fill-opacity:1;stroke:#000000;stroke-width:0.529167;stroke-linecap:round;stroke-linejoin:round;stroke-miterlimit:4;stroke-dasharray:none"
			d="M 7.0936442,6.6299309 7.8075707,8.0670526 7.9020648,7.4882765 9.5608017,5.529228 7.7491699,4.042722 Z"
			id="path1074"
		/>
		<path
			style="opacity:0.999;fill:{blendColor(
				'#d0d0d0',
				targetColor,
			)};fill-opacity:1;stroke:#000000;stroke-width:0.529167;stroke-linecap:round;stroke-linejoin:round;stroke-miterlimit:4;stroke-dasharray:none"
			d="M 7.0936442,6.6299309 6.2319336,10.030905 7.8009291,12.047366 10.517417,9.3047713 Z"
			id="path1072"
		/>
		<path
			style="opacity:0.999;fill:{blendColor(
				'#d0d0d0',
				targetColor,
			)};fill-opacity:1;stroke:#000000;stroke-width:0.529167;stroke-linecap:round;stroke-linejoin:round;stroke-miterlimit:4;stroke-dasharray:none"
			d="M 4.7898883,15.722325 H 12.143444 L 6.2319336,10.030905 Z"
			id="path1070"
		/>
		<path
			id="path885"
			style="opacity:0.999;fill:none;stroke:#000000;stroke-width:0.529167;stroke-linecap:round;stroke-linejoin:round;stroke-miterlimit:4;stroke-dasharray:none"
			d="M 8.4666668,1.2109273 7.6769163,4.3278905 4.7898885,15.722325 h 3.6767781 3.6767784 z"
		/>
		<path
			style="opacity:0.999;fill:{blendColor(
				'#ffffff',
				targetColor,
			)};fill-opacity:1;stroke:#000000;stroke-width:0.529167;stroke-linecap:round;stroke-linejoin:round;stroke-miterlimit:4;stroke-dasharray:none"
			d="M 3.12195,6.778666 1.1529299,8.7476829 h 3.9380412 z"
			id="path952"
		/>
		<path
			style="opacity:0.999;fill:{blendColor(
				'#ffffff',
				targetColor,
			)};fill-opacity:1;stroke:#000000;stroke-width:0.529167;stroke-linecap:round;stroke-linejoin:round;stroke-miterlimit:4;stroke-dasharray:none"
			d="m 13.811384,6.7786659 1.96902,1.969017 h -3.938041 z"
			id="path952-1"
		/>
		<path
			style="opacity:0.999;fill:{blendColor(
				'#ffffff',
				targetColor,
			)};fill-opacity:1;stroke:#000000;stroke-width:0.529167;stroke-linecap:round;stroke-linejoin:round;stroke-miterlimit:4;stroke-dasharray:none"
			d="m 14.09992,12.441207 1.375507,1.375505 h -2.751015 z"
			id="path952-1-3"
		/>
		<path
			style="opacity:0.999;fill:{blendColor(
				'#ffffff',
				targetColor,
			)};fill-opacity:1;stroke:#000000;stroke-width:0.529167;stroke-linecap:round;stroke-linejoin:round;stroke-miterlimit:4;stroke-dasharray:none"
			d="m 2.833414,12.441208 -1.3755069,1.375505 h 2.751015 z"
			id="path952-1-3-9"
		/>
	</g>
</svg>
