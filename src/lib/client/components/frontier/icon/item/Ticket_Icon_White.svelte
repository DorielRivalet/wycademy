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
			)};fill-opacity:1;fill-rule:evenodd;stroke:#000000;stroke-width:0.5291667;stroke-linecap:butt;stroke-linejoin:round;stroke-miterlimit:4;stroke-dasharray:none;stroke-dashoffset:0;stroke-opacity:1"
			d="m 7.1437504,282.71249 h -0.79375 L 5.0270837,281.91874 H 2.116667 v 3.43958 l 0.5291667,1.05833 v 2.64584 h 0.5291667 l -0.5291667,0.26458 v 1.05833 l -0.5291667,1.5875 v 2.91042 h 2.6458334 l 1.852083,0.52917 h 6.3500006 v -1.05834 l 0.264583,1.05834 h 1.587499 v -2.11667 l -0.529166,-1.5875 v -6.35 l 0.529166,-1.32292 v -2.38125 h -2.381249 v 1.05834 l -0.264583,-1.05834 H 9.2604174 l -1.322917,1.05834 z"
			id="path2671"
		/>
		<path
			style="display:inline;opacity:1;vector-effect:none;fill:{blendColor(
				'#d5d5d5',
				targetColor,
			)};fill-opacity:1;fill-rule:evenodd;stroke:none;stroke-width:0.99999994;stroke-linecap:butt;stroke-linejoin:miter;stroke-miterlimit:4;stroke-dasharray:none;stroke-dashoffset:0;stroke-opacity:1"
			d="M 39 32 L 36 35 L 36 37 L 39 40 L 41 40 L 44 37 L 44 35 L 41 32 L 39 32 z M 34 38 L 31 41 L 31 42 L 34 45 L 35 45 L 38 42 L 38 41 L 35 38 L 34 38 z M 45 38 L 42 41 L 42 42 L 45 45 L 46 45 L 49 42 L 49 41 L 46 38 L 45 38 z M 39 43 L 36 46 L 36 48 L 39 51 L 41 51 L 44 48 L 44 46 L 41 43 L 39 43 z "
			transform="matrix(0.26458334,0,0,0.26458334,0,280.06665)"
			id="path2723-4-2-3"
		/>
		<path
			style="display:inline;opacity:1;vector-effect:none;fill:{blendColor(
				'#858585',
				targetColor,
			)};fill-opacity:1;fill-rule:evenodd;stroke:none;stroke-width:0.99999994;stroke-linecap:butt;stroke-linejoin:miter;stroke-miterlimit:4;stroke-dasharray:none;stroke-dashoffset:0;stroke-opacity:1"
			d="M 15 17 L 15 18 L 18 21 L 20 21 L 23 18 L 23 17 L 15 17 z M 28 17 L 28 18 L 31 21 L 33 21 L 36 18 L 36 17 L 28 17 z M 40 17 L 40 18 L 43 21 L 45 21 L 48 18 L 48 17 L 40 17 z M 17.900391 27.001953 A 1.0013833 1.0013833 0 0 0 17.996094 29.001953 L 21.998047 29.001953 A 1.0002331 1.0002331 0 0 0 21.998047 27.001953 L 17.996094 27.001953 A 1.0001001 1.0001001 0 0 0 17.900391 27.001953 z M 26.900391 27.001953 A 1.0015669 1.0015669 0 0 0 27.003906 29.001953 L 47 29.001953 A 1.0002331 1.0002331 0 0 0 47 27.001953 L 27.003906 27.001953 A 1.0001001 1.0001001 0 0 0 26.900391 27.001953 z M 19.001953 32 A 1.000252 1.000252 0 0 0 19.001953 34 C 26.835285 34 32.904761 36 47 36 A 1.000252 1.000252 0 1 0 47 34 C 33.095238 34 27.168621 32 19.001953 32 z M 17.996094 38.998047 A 1.0002331 1.0002331 0 1 0 17.996094 40.998047 L 32.996094 40.998047 A 1.0002331 1.0002331 0 1 0 32.996094 38.998047 L 17.996094 38.998047 z M 36.902344 42.001953 A 1.0013833 1.0013833 0 0 0 36.998047 44.001953 L 47 44.001953 A 1.0002331 1.0002331 0 1 0 47 42.001953 L 36.998047 42.001953 A 1.0001001 1.0001001 0 0 0 36.902344 42.001953 z M 17 45 A 1.0002331 1.0002331 0 1 0 17 47 C 24.833334 47 28.775828 49 34.998047 49 L 47 49 A 1.000252 1.000252 0 1 0 47 47 L 34.998047 47 C 29.220267 47 25.166663 45 17 45 z "
			transform="matrix(0.26458334,0,0,0.26458334,0,280.06665)"
			id="path2673"
		/>
	</g>
</svg>
