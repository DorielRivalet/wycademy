<!--
  ~ © 2024 Doriel Rivalet
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

<svg width={size} viewBox="0 0 16.933333 16.933334" version="1.1" id="svg4846">
	<defs id="defs4840" />
	<g id="layer1" transform="translate(0,-280.06665)">
		<path
			id="path1033"
			style="display:inline;opacity:1;vector-effect:none;fill:{blendColor(
				'#ffffff',
				targetColor,
			)};fill-opacity:1;fill-rule:evenodd;stroke:#000000;stroke-width:2;stroke-linecap:butt;stroke-linejoin:round;stroke-miterlimit:4;stroke-dasharray:none;stroke-dashoffset:0;stroke-opacity:1"
			d="M 30 5 L 27 23 L 10 16 L 8 16 L 8 19 L 22 32 L 8 45 L 8 48 L 10 48 L 27 41 L 30 59 L 32 59 L 34 59 L 37 41 L 54 48 L 56 48 L 56 45 L 42 32 L 56 19 L 56 16 L 54 16 L 37 23 L 34 5 L 32 5 L 30 5 z "
			transform="matrix(0.26458334,0,0,0.26458334,0,280.06665)"
		/>
		<path
			style="display:inline;opacity:1;vector-effect:none;fill:{blendColor(
				'#ffffff',
				targetColor,
			)};fill-opacity:1;fill-rule:evenodd;stroke:#000000;stroke-width:0.5291667;stroke-linecap:butt;stroke-linejoin:round;stroke-miterlimit:4;stroke-dasharray:none;stroke-dashoffset:0;stroke-opacity:1"
			d="m 5.8208337,283.50624 0.529166,-0.52917 v -1.5875 h -1.322916 l -1.058334,1.05834 v 1.05833 z"
			id="path1050"
		/>
		<path
			style="display:inline;opacity:1;vector-effect:none;fill:{blendColor(
				'#ffffff',
				targetColor,
			)};fill-opacity:1;fill-rule:evenodd;stroke:#000000;stroke-width:0.5291667;stroke-linecap:butt;stroke-linejoin:round;stroke-miterlimit:4;stroke-dasharray:none;stroke-dashoffset:0;stroke-opacity:1"
			d="m 1.0583337,287.21041 v 1.32291 1.32292 h 0.79375 l 1.058333,-1.05833 v -0.26459 -0.26458 l -1.058333,-1.05833 z"
			id="path1052"
		/>
		<path
			style="display:inline;opacity:1;vector-effect:none;fill:{blendColor(
				'#ffffff',
				targetColor,
			)};fill-opacity:1;fill-rule:evenodd;stroke:#000000;stroke-width:0.5291667;stroke-linecap:butt;stroke-linejoin:round;stroke-miterlimit:4;stroke-dasharray:none;stroke-dashoffset:0;stroke-opacity:1"
			d="m 5.8208337,293.56041 0.529166,0.52916 v 1.5875 h -1.322916 l -1.058334,-1.05833 v -1.05833 z"
			id="path1050-7"
		/>
		<path
			style="display:inline;opacity:1;vector-effect:none;fill:{blendColor(
				'#ffffff',
				targetColor,
			)};fill-opacity:1;fill-rule:evenodd;stroke:#000000;stroke-width:0.5291667;stroke-linecap:butt;stroke-linejoin:round;stroke-miterlimit:4;stroke-dasharray:none;stroke-dashoffset:0;stroke-opacity:1"
			d="m 11.1125,283.50624 -0.529167,-0.52917 v -1.5875 h 1.322917 l 1.058333,1.05834 v 1.05833 z"
			id="path1050-5"
		/>
		<path
			style="display:inline;opacity:1;vector-effect:none;fill:{blendColor(
				'#ffffff',
				targetColor,
			)};fill-opacity:1;fill-rule:evenodd;stroke:#000000;stroke-width:0.5291667;stroke-linecap:butt;stroke-linejoin:round;stroke-miterlimit:4;stroke-dasharray:none;stroke-dashoffset:0;stroke-opacity:1"
			d="m 15.875,287.21041 v 1.32291 1.32292 h -0.79375 l -1.058333,-1.05833 v -0.26459 -0.26458 l 1.058333,-1.05833 z"
			id="path1052-1"
		/>
		<path
			style="display:inline;opacity:1;vector-effect:none;fill:{blendColor(
				'#ffffff',
				targetColor,
			)};fill-opacity:1;fill-rule:evenodd;stroke:#000000;stroke-width:0.5291667;stroke-linecap:butt;stroke-linejoin:round;stroke-miterlimit:4;stroke-dasharray:none;stroke-dashoffset:0;stroke-opacity:1"
			d="m 11.1125,293.56041 -0.529167,0.52916 v 1.5875 h 1.322917 l 1.058333,-1.05833 v -1.05833 z"
			id="path1050-7-0"
		/>
	</g>
</svg>
