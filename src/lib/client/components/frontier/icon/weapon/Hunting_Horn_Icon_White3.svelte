<!-- Created with Inkscape (http://www.inkscape.org/) -->
<script lang="ts">
	import { blendColor } from '$lib/client/modules/color-blend';
	import { RarityColors } from '$lib/client/modules/frontier/objects';
	import type { FrontierRarity } from '$lib/client/modules/frontier/types';
	interface Props {
		rarity?: FrontierRarity;
	}

	let { rarity = 1 }: Props = $props();

	let targetColor = $derived(RarityColors[rarity - 1] ?? RarityColors[0]);
</script>

<svg width="100%" viewBox="0 0 16.933333 16.933334" version="1.1" id="svg4846">
	<g id="layer1" transform="translate(0,-280.06665)">
		<g
			id="g22800"
			transform="matrix(1.077085,0,0,1.077085,-2.2988344,-7.4965103)"
			style="opacity:1"
		>
			<path
				style="fill:{blendColor(
					'#ffffff',
					targetColor,
				)};fill-opacity:1;stroke:none;stroke-width:0.264583;stroke-linecap:round;stroke-linejoin:round;stroke-miterlimit:3;stroke-dasharray:none;stroke-opacity:1"
				d="m 13.622111,269.79586 1.654567,-0.0234 -0.0877,2.77125 -1.590254,-0.0409 z"
				id="path628708"
			/>
			<path
				style="fill:{blendColor(
					'#b0b0b0',
					targetColor,
				)};fill-opacity:1;stroke:none;stroke-width:0.264583;stroke-linecap:round;stroke-linejoin:round;stroke-miterlimit:3;stroke-dasharray:none;stroke-opacity:1"
				d="m 13.627959,269.55615 -0.666504,-0.58465 0.03508,-1.3447 2.970033,0.0702 -0.05846,1.27455 -0.689888,0.67819 z"
				id="path627921"
			/>
			<path
				style="fill:{blendColor(
					'#ffffff',
					targetColor,
				)};fill-opacity:1;stroke:#000000;stroke-width:0.529167;stroke-linecap:round;stroke-linejoin:round;stroke-miterlimit:3;stroke-dasharray:none;stroke-opacity:1"
				d="m 5.902009,279.84223 1.464658,1.65365 H 4.957069 Z"
				id="path613971"
			/>
			<path
				style="fill:none;stroke:#000000;stroke-width:0.529167;stroke-linecap:round;stroke-linejoin:round;stroke-miterlimit:3;stroke-dasharray:none;stroke-opacity:1"
				d="m 13.551118,269.6664 h 1.787367"
				id="path613981"
			/>
			<path
				style="fill:none;stroke:#000000;stroke-width:0.529167;stroke-linecap:square;stroke-linejoin:miter;stroke-miterlimit:3;stroke-dasharray:none;stroke-opacity:1"
				d="m 14.486563,267.71199 v 0.61806"
				id="path613983"
			/>
			<path
				style="fill:{blendColor(
					'#ffffff',
					targetColor,
				)};fill-opacity:1;stroke:#000000;stroke-width:0.396875;stroke-linecap:round;stroke-linejoin:round;stroke-miterlimit:3;stroke-dasharray:none;stroke-opacity:1"
				d="M 7.059562,270.51094 5.902009,268.7628 c 0.0286,-0.33363 0.224863,-0.49959 0.472471,-0.61421 0.619784,0.14214 1.283882,0.57972 1.724516,-0.47247 0.225522,-0.002 0.435021,-0.005 0.874071,0.0236 -0.28922,0.6476 -0.145177,1.63205 -1.724517,1.39379 0.750232,0.8169 1.563701,1.68913 1.582775,1.86626 0.189221,2.38037 -4.647015,2.57265 -1.768277,-0.43526 z"
				id="path613985"
			/>
			<path
				style="fill:{blendColor(
					'#d0d0d0',
					targetColor,
				)};fill-opacity:1;stroke:none;stroke-width:0.264583;stroke-linecap:round;stroke-linejoin:round;stroke-miterlimit:3;stroke-dasharray:none;stroke-opacity:1"
				d="m 13.62926,272.61698 1.63711,0.0165 -0.08268,0.92605 -1.628841,-0.0661 z"
				id="path627978"
			/>
			<path
				style="fill:{blendColor(
					'#ffffff',
					targetColor,
				)};fill-opacity:1;stroke:none;stroke-width:0.264583;stroke-linecap:round;stroke-linejoin:round;stroke-miterlimit:3;stroke-dasharray:none;stroke-opacity:1"
				d="m 13.522721,273.59025 h 1.812422 v 4.65383 l -3.063576,3.12204 -4.817535,0.0117 -3.706694,-3.62484 0.01169,-1.181 2.923261,-2.54908 6.781965,0.0117 z"
				id="path628873"
			/>
			<path
				style="fill:none;stroke:#000000;stroke-width:0.529167;stroke-linecap:round;stroke-linejoin:round;stroke-miterlimit:3;stroke-dasharray:none;stroke-opacity:1"
				d="m 13.461533,273.98361 v 1.6064 l -5.480654,3.40178 -2.055246,-1.93712 2.102492,-2.03163 h 0.732329 l 1.322916,1.32292 H 8.12262"
				id="path613969"
			/>
			<rect
				style="fill:{blendColor(
					'#b0b0b0',
					targetColor,
				)};fill-opacity:1;stroke:#000000;stroke-width:0.291042;stroke-linecap:round;stroke-linejoin:round;stroke-miterlimit:3;stroke-dasharray:none;stroke-opacity:1"
				id="rect625662"
				width="2.0872097"
				height="0.98804516"
				x="13.359021"
				y="272.57883"
			/>
			<path
				style="fill:none;fill-opacity:1;stroke:#000000;stroke-width:0.529167;stroke-linecap:round;stroke-linejoin:round;stroke-miterlimit:3;stroke-dasharray:none;stroke-opacity:1"
				d="m 7.413914,281.37777 -3.649832,-3.64983 v -1.14575 l 2.96475,-2.55133 6.732938,-1.1e-4 0.01158,-4.37023 -0.649646,-0.66146 v -1.41741 h 3.189174 v 1.41741 l -0.673269,0.67327 v 8.61077 l -3.059245,3.1183 z"
				id="path612500"
			/>
			<path
				style="fill:{blendColor(
					'#ffffff',
					targetColor,
				)};fill-opacity:1;stroke:#000000;stroke-width:0.529167;stroke-linecap:round;stroke-linejoin:round;stroke-miterlimit:3;stroke-dasharray:none;stroke-opacity:1"
				d="m 14.603493,277.41722 v -1.921 l 1.854182,0.91874 z"
				id="path613977"
			/>
			<path
				style="fill:{blendColor(
					'#ffffff',
					targetColor,
				)};fill-opacity:1;stroke:#000000;stroke-width:0.529167;stroke-linecap:round;stroke-linejoin:round;stroke-miterlimit:3;stroke-dasharray:none;stroke-opacity:1"
				d="m 14.536675,280.19014 -0.567949,-1.82077 -1.419868,1.16931 z"
				id="path613975"
			/>
			<path
				style="fill:{blendColor(
					'#ffffff',
					targetColor,
				)};fill-opacity:1;stroke:#000000;stroke-width:0.529167;stroke-linecap:round;stroke-linejoin:round;stroke-miterlimit:3;stroke-dasharray:none;stroke-opacity:1"
				d="m 8.689584,279.88949 h 1.88988 l -0.968563,1.98437 z"
				id="path613973"
			/>
		</g>
	</g>
</svg>
