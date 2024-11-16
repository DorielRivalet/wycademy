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

<svg
	xmlns:cc="http://creativecommons.org/ns#"
	xmlns:rdf="http://www.w3.org/1999/02/22-rdf-syntax-ns#"
	xmlns:svg="http://www.w3.org/2000/svg"
	xmlns="http://www.w3.org/2000/svg"
	xmlns:sodipodi="http://sodipodi.sourceforge.net/DTD/sodipodi-0.dtd"
	xmlns:inkscape="http://www.inkscape.org/namespaces/inkscape"
	width={size}
	viewBox="0 0 16.933333 16.933334"
	version="1.1"
	id="svg8"
>
	<defs id="defs2" />

	<g id="layer1" transform="translate(0,-280.06665)">
		<path
			style="fill:{blendColor(
				'#ffffff',
				targetColor,
			)};fill-opacity:1;stroke:#000000;stroke-width:0.5291667;stroke-linecap:round;stroke-linejoin:round;stroke-miterlimit:4;stroke-dasharray:none;stroke-opacity:1"
			d="m 8.0648824,281.15573 -2.0314005,3.93309 H 8.4664083 10.899852 L 8.8679341,281.15573 H 8.4664083 Z"
			id="path1030"
		/>
		<path
			style="fill:{blendColor(
				'#d5d5d5',
				targetColor,
			)};fill-opacity:1;stroke:#000000;stroke-width:0.5291667;stroke-linecap:round;stroke-linejoin:round;stroke-miterlimit:4;stroke-dasharray:none;stroke-opacity:1"
			d="m 6.0334819,285.08882 -0.8035687,1.60662 h 3.2364951 3.2364947 l -0.803051,-1.60662 H 8.4664083 Z"
			id="path1032"
		/>
		<path
			style="fill:{blendColor(
				'#ffffff',
				targetColor,
			)};fill-opacity:1;stroke:#000000;stroke-width:0.5291667;stroke-linecap:round;stroke-linejoin:round;stroke-miterlimit:4;stroke-dasharray:none;stroke-opacity:1"
			d="m 5.2299132,286.69544 -0.6020303,0.99219 v 1.97249 h 3.8385254 3.8390427 v -1.97249 l -0.602548,-0.99219 H 8.4664083 Z"
			id="path1034"
		/>
		<path
			style="fill:{blendColor(
				'#ffffff',
				targetColor,
			)};fill-opacity:1;stroke:#000000;stroke-width:0.5291667;stroke-linecap:round;stroke-linejoin:round;stroke-miterlimit:4;stroke-dasharray:none;stroke-opacity:1"
			d="m 5.8324605,289.66012 v 3.20083 h 2.6339478 2.6339477 v -3.20083 H 8.4664083 Z"
			id="path1036"
		/>
		<path
			style="fill:{blendColor(
				'#d5d5d5',
				targetColor,
			)};fill-opacity:1;stroke:#000000;stroke-width:0.5291667;stroke-linecap:round;stroke-linejoin:round;stroke-miterlimit:4;stroke-dasharray:none;stroke-opacity:1"
			d="m 6.078133,292.86118 v 1.38076 H 5.0118685 v -1.38076 z"
			id="path1038"
		/>
		<path
			style="fill:{blendColor(
				'#d5d5d5',
				targetColor,
			)};fill-opacity:1;stroke:#000000;stroke-width:0.5291667;stroke-linecap:round;stroke-linejoin:round;stroke-miterlimit:4;stroke-dasharray:none;stroke-opacity:1"
			d="m 7.3814036,292.86118 v 1.38076 H 6.315139 v -1.38076 z"
			id="path1038-0"
		/>
		<path
			style="fill:{blendColor(
				'#d5d5d5',
				targetColor,
			)};fill-opacity:1;stroke:#000000;stroke-width:0.5291667;stroke-linecap:round;stroke-linejoin:round;stroke-miterlimit:4;stroke-dasharray:none;stroke-opacity:1"
			d="m 7.6235656,292.86095 v 1.3808 h 0.8428427 0.8428426 v -1.3808 H 8.4664083 Z"
			id="path1038-9"
		/>
		<path
			style="fill:{blendColor(
				'#ffffff',
				targetColor,
			)};fill-opacity:1;stroke:#000000;stroke-width:0.5291667;stroke-linecap:round;stroke-linejoin:round;stroke-miterlimit:4;stroke-dasharray:none;stroke-opacity:1"
			d="m 7.3812033,294.24175 v 1.01699 l 0.6521564,0.65216 h 0.4330486 0.4335653 l 0.6516399,-0.65216 v -1.01699 H 8.4664083 Z"
			id="path1063"
		/>
		<path
			style="fill:{blendColor(
				'#d5d5d5',
				targetColor,
			)};fill-opacity:1;stroke:#000000;stroke-width:0.5291667;stroke-linecap:round;stroke-linejoin:round;stroke-miterlimit:4;stroke-dasharray:none;stroke-opacity:1"
			d="m 10.854831,292.86118 v 1.38076 h 1.066264 v -1.38076 z"
			id="path1038-1"
		/>
		<path
			style="fill:{blendColor(
				'#d5d5d5',
				targetColor,
			)};fill-opacity:1;stroke:#000000;stroke-width:0.5291667;stroke-linecap:round;stroke-linejoin:round;stroke-miterlimit:4;stroke-dasharray:none;stroke-opacity:1"
			d="m 9.5515598,292.86118 v 1.38076 h 1.0662652 v -1.38076 z"
			id="path1038-0-3"
		/>
	</g>
</svg>
