<!--
  ~ © 2024 Doriel Rivalet
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
			)};fill-opacity:1;fill-rule:evenodd;stroke:none;stroke-width:0.26458332;stroke-linecap:butt;stroke-linejoin:miter;stroke-miterlimit:4;stroke-dasharray:none;stroke-dashoffset:0;stroke-opacity:1"
			d="m 14.2875,281.65415 v 10.31875 h -0.79375 v 1.85209 H 2.6458329 v -12.17084 z"
			id="path4413"
		/>
		<path
			style="display:inline;opacity:1;vector-effect:none;fill:{blendColor(
				'#d5d5d5',
				targetColor,
			)};fill-opacity:1;fill-rule:evenodd;stroke:none;stroke-width:0.26458332;stroke-linecap:butt;stroke-linejoin:miter;stroke-miterlimit:4;stroke-dasharray:none;stroke-dashoffset:0;stroke-opacity:1"
			d="m 5.0270835,282.4479 -0.5291667,0.26458 v 0.79375 l 0.2645833,0.52917 -0.2645833,0.26458 v 0.79375 l 0.2645833,0.52917 -0.2645833,0.26458 v 1.05833 l 0.2645833,0.52917 -0.2645833,0.26458 v 0.79375 l 0.2645833,0.52917 -0.2645833,0.26458 v 0.79375 l 0.5291667,0.52917 0.2645833,-0.52917 v -0.79375 l -0.2645833,-0.26458 0.2645833,-0.52917 v -0.79375 l -0.2645833,-0.26458 0.2645833,-0.52917 v -1.05833 l -0.2645833,-0.26458 0.2645833,-0.52917 v -0.79375 l -0.2645833,-0.26458 0.2645833,-0.52917 v -0.79375 z m -0.2645834,8.20208 -0.2645833,0.26458 H 2.6458334 v 4.49792 H 14.2875 v -1.32292 h -0.79375 v -0.79375 H 4.2333334 V 291.9729 H 14.2875 v -1.05834 H 5.2916668 Z"
			id="path4347"
		/>
		<path
			style="display:inline;opacity:1;vector-effect:none;fill:none;fill-opacity:1;fill-rule:evenodd;stroke:#000000;stroke-width:0.5291667;stroke-linecap:butt;stroke-linejoin:round;stroke-miterlimit:4;stroke-dasharray:none;stroke-dashoffset:0;stroke-opacity:1"
			d="M 14.2875,281.65415 V 291.9729 H 4.233333 v 2.11667 H 14.2875 l 1e-6,1.32292 H 2.6458329 v -13.75834 z"
			id="path4288"
		/>
		<path
			style="display:inline;opacity:1;vector-effect:none;fill:none;fill-opacity:1;fill-rule:evenodd;stroke:#000000;stroke-width:0.5291667;stroke-linecap:butt;stroke-linejoin:round;stroke-miterlimit:4;stroke-dasharray:none;stroke-dashoffset:0;stroke-opacity:1"
			d="m 13.49375,291.9729 v 2.11667"
			id="path4290"
		/>
		<path
			style="display:inline;opacity:1;fill:{blendColor(
				'#858585',
				targetColor,
			)};fill-opacity:1;fill-rule:nonzero;stroke:none;stroke-width:2;stroke-linecap:round;stroke-linejoin:round;stroke-miterlimit:4;stroke-dasharray:none;stroke-dashoffset:0;stroke-opacity:1;paint-order:normal"
			d="M 17 7 L 17 10 L 20 10 L 20 7 L 17 7 z M 17 13 L 17 16 L 20 16 L 20 13 L 17 13 z M 17 19 L 17 22 L 20 22 L 20 19 L 17 19 z M 17 26 L 17 29 L 20 29 L 20 26 L 17 26 z M 17 32 L 17 35 L 20 35 L 20 32 L 17 32 z M 17 38 L 17 41 L 20 41 L 20 38 L 17 38 z "
			transform="matrix(0.26458334,0,0,0.26458334,0,280.06665)"
			id="rect4292"
		/>
		<path
			style="display:inline;opacity:1;vector-effect:none;fill:{blendColor(
				'#d5d5d5',
				targetColor,
			)};fill-opacity:1;fill-rule:evenodd;stroke:none;stroke-width:0.99999994;stroke-linecap:butt;stroke-linejoin:miter;stroke-miterlimit:4;stroke-dasharray:none;stroke-dashoffset:0;stroke-opacity:1"
			d="M 35.199219 12 L 32 15.199219 L 32 16.800781 L 35.199219 20 L 36.800781 20 L 40 16.800781 L 40 15.199219 L 36.800781 12 L 35.199219 12 z M 27.992188 14.986328 A 1.0001001 1.0001001 0 0 0 27.888672 14.992188 A 1.0001001 1.0001001 0 0 0 27.291016 16.705078 L 34.585938 24 L 27.291016 31.291016 A 1.0026548 1.0026548 0 0 0 28.708984 32.708984 L 36 25.414062 L 43.294922 32.708984 A 1.0001001 1.0001001 0 1 0 44.705078 31.291016 L 37.414062 24 L 44.705078 16.705078 A 1.0001001 1.0001001 0 0 0 43.980469 14.992188 A 1.0001001 1.0001001 0 0 0 43.294922 15.294922 L 36 22.585938 L 28.708984 15.294922 A 1.0001001 1.0001001 0 0 0 27.992188 14.986328 z M 27.199219 20 L 24 23.199219 L 24 24.800781 L 27.199219 28 L 28.800781 28 L 32 24.800781 L 32 23.199219 L 28.800781 20 L 27.199219 20 z M 43.199219 20 L 40 23.199219 L 40 24.800781 L 43.199219 28 L 44.800781 28 L 48 24.800781 L 48 23.199219 L 44.800781 20 L 43.199219 20 z M 35.199219 28 L 32 31.199219 L 32 32.800781 L 35.199219 36 L 36.800781 36 L 40 32.800781 L 40 31.199219 L 36.800781 28 L 35.199219 28 z "
			transform="matrix(0.26458334,0,0,0.26458334,0,280.06665)"
			id="path4349"
		/>
	</g>
</svg>
