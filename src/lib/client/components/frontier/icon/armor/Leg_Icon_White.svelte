<!--
  ~ © 2024 Doriel Rivalet
  ~ Use of this source code is governed by a MIT license that can be
  ~ found in the LICENSE file.
-->
<script lang="ts">
	import { blendColor } from '$lib/client/modules/color-blend';
	import { RarityColors } from '$lib/client/modules/frontier/objects';
	import type { FrontierRarity } from '$lib/client/modules/frontier/types';
	interface Props {
		rarity?: FrontierRarity;
		size?: string;
		color?: string;
	}

	let { rarity = 1, size = '100%', color = '' }: Props = $props();

	let targetColor = $derived(
		color === '' ? (RarityColors[rarity - 1] ?? RarityColors[0]) : color,
	);
</script>

<!-- Created with Inkscape (http://www.inkscape.org/) -->

<svg width={size} viewBox="0 0 16.933333 16.933334" version="1.1" id="svg4846">
	<g id="layer1" transform="translate(0,-280.06665)">
		<path
			style="opacity:1;vector-effect:none;fill:{blendColor(
				'#ffffff',
				targetColor,
			)};fill-opacity:1;fill-rule:evenodd;stroke:#000000;stroke-width:0.5291667;stroke-linecap:butt;stroke-linejoin:round;stroke-miterlimit:4;stroke-dasharray:none;stroke-dashoffset:0;stroke-opacity:1"
			d="m 7.80521,286.01977 v -2.38125 h 5.291667 v 2.38125 z"
			id="path3539"
		/>
		<path
			style="opacity:1;vector-effect:none;fill:{blendColor(
				'#ffffff',
				targetColor,
			)};fill-opacity:1;fill-rule:evenodd;stroke:#000000;stroke-width:0.5291667;stroke-linecap:butt;stroke-linejoin:round;stroke-miterlimit:4;stroke-dasharray:none;stroke-dashoffset:0;stroke-opacity:1"
			d="m 7.80521,289.19477 v -2.91042 h 5.291667 v 2.91042 z"
			id="path3537"
		/>
		<path
			style="opacity:1;vector-effect:none;fill:{blendColor(
				'#ffffff',
				targetColor,
			)};fill-opacity:1;fill-rule:evenodd;stroke:#000000;stroke-width:0.5291667;stroke-linecap:butt;stroke-linejoin:round;stroke-miterlimit:4;stroke-dasharray:none;stroke-dashoffset:0;stroke-opacity:1"
			d="M 7.80521,295.0156 H 5.1593771 l 8e-7,-5.55625 H 7.80521 Z"
			id="path3533"
		/>
		<path
			style="opacity:1;vector-effect:none;fill:{blendColor(
				'#d0d0d0',
				targetColor,
			)};fill-opacity:1;fill-rule:evenodd;stroke:#000000;stroke-width:0.5291667;stroke-linecap:butt;stroke-linejoin:round;stroke-miterlimit:4;stroke-dasharray:none;stroke-dashoffset:0;stroke-opacity:1"
			d="m 9.39271,295.0156 h -1.5875 v -3.70417 h 1.5875 z"
			id="path3531"
		/>
		<path
			style="opacity:1;vector-effect:none;fill:{blendColor(
				'#ffffff',
				targetColor,
			)};fill-opacity:1;fill-rule:evenodd;stroke:#000000;stroke-width:0.5291667;stroke-linecap:butt;stroke-linejoin:round;stroke-miterlimit:4;stroke-dasharray:none;stroke-dashoffset:0;stroke-opacity:1"
			d="m 7.80521,289.45935 v -0.26458 h 5.291667 v 1.85208 l -1.322917,1.32292 v 2.64583 H 9.39271 v -3.70417 h -1.5875 z"
			id="path3529"
		/>
		<path
			style="opacity:1;vector-effect:none;fill:{blendColor(
				'#d0d0d0',
				targetColor,
			)};fill-opacity:1;fill-rule:evenodd;stroke:#000000;stroke-width:0.5291667;stroke-linecap:butt;stroke-linejoin:round;stroke-miterlimit:4;stroke-dasharray:none;stroke-dashoffset:0;stroke-opacity:1"
			d="m 5.1593771,289.45935 v 5.55625 H 2.778127 c 0,0 -1.058331,0 -1.058331,-1.05833 0,-1.05834 0,-3.43959 0,-3.43959 0,0 0,-1.05833 1.058331,-1.05833 1.058333,0 2.3812501,0 2.3812501,0 z"
			id="path3467"
		/>
		<path
			style="opacity:1;vector-effect:none;fill:#000000;fill-opacity:1;fill-rule:evenodd;stroke:none;stroke-width:0.26458332;stroke-linecap:butt;stroke-linejoin:miter;stroke-miterlimit:4;stroke-dasharray:none;stroke-dashoffset:0;stroke-opacity:1"
			d="m 1.719796,291.04685 h 1.587498 v 0.52917 H 1.719796 Z"
			id="path3469"
		/>
		<path
			style="opacity:1;vector-effect:none;fill:#000000;fill-opacity:1;fill-rule:evenodd;stroke:none;stroke-width:0.26458332;stroke-linecap:butt;stroke-linejoin:miter;stroke-miterlimit:4;stroke-dasharray:none;stroke-dashoffset:0;stroke-opacity:1"
			d="m 1.719796,292.10518 h 1.587499 v 0.52917 H 1.719796 Z"
			id="path3469-3"
		/>
		<path
			style="opacity:1;vector-effect:none;fill:#000000;fill-opacity:1;fill-rule:evenodd;stroke:none;stroke-width:0.26458332;stroke-linecap:butt;stroke-linejoin:miter;stroke-miterlimit:4;stroke-dasharray:none;stroke-dashoffset:0;stroke-opacity:1"
			d="m 1.719796,293.16351 h 1.587499 v 0.52917 H 1.719796 Z"
			id="path3469-7"
		/>
		<rect
			style="opacity:1;fill:#000000;fill-opacity:1;fill-rule:nonzero;stroke:none;stroke-width:0.5291667;stroke-linecap:round;stroke-linejoin:round;stroke-miterlimit:4;stroke-dasharray:none;stroke-dashoffset:0;stroke-opacity:1;paint-order:normal"
			id="rect3492"
			width="0.5291667"
			height="0.5291667"
			x="6.2177086"
			y="290.78226"
		/>
		<rect
			style="opacity:1;fill:#000000;fill-opacity:1;fill-rule:nonzero;stroke:none;stroke-width:0.5291667;stroke-linecap:round;stroke-linejoin:round;stroke-miterlimit:4;stroke-dasharray:none;stroke-dashoffset:0;stroke-opacity:1;paint-order:normal"
			id="rect3496"
			width="0.5291667"
			height="0.5291667"
			x="6.2177086"
			y="292.10516"
		/>
		<rect
			style="opacity:1;fill:#000000;fill-opacity:1;fill-rule:nonzero;stroke:none;stroke-width:0.5291667;stroke-linecap:round;stroke-linejoin:round;stroke-miterlimit:4;stroke-dasharray:none;stroke-dashoffset:0;stroke-opacity:1;paint-order:normal"
			id="rect3498"
			width="0.5291667"
			height="0.5291667"
			x="6.2177086"
			y="293.4281"
		/>
		<circle
			style="opacity:1;fill:#000000;fill-opacity:1;fill-rule:nonzero;stroke:none;stroke-width:0.5291667;stroke-linecap:round;stroke-linejoin:round;stroke-miterlimit:4;stroke-dasharray:none;stroke-dashoffset:0;stroke-opacity:1;paint-order:normal"
			id="path3500"
			cx="10.583333"
			cy="293.82498"
			r="0.39687502"
		/>
		<rect
			style="opacity:1;fill:#000000;fill-opacity:1;fill-rule:nonzero;stroke:none;stroke-width:0.5291667;stroke-linecap:round;stroke-linejoin:round;stroke-miterlimit:4;stroke-dasharray:none;stroke-dashoffset:0;stroke-opacity:1;paint-order:normal"
			id="rect3502"
			width="0.5291667"
			height="0.5291667"
			x="8.8635454"
			y="287.34268"
		/>
		<rect
			style="opacity:1;fill:#000000;fill-opacity:1;fill-rule:nonzero;stroke:none;stroke-width:0.5291667;stroke-linecap:round;stroke-linejoin:round;stroke-miterlimit:4;stroke-dasharray:none;stroke-dashoffset:0;stroke-opacity:1;paint-order:normal"
			id="rect3504"
			width="1.0583334"
			height="0.5291667"
			x="9.9218798"
			y="287.34268"
		/>
		<rect
			style="opacity:1;fill:#000000;fill-opacity:1;fill-rule:nonzero;stroke:none;stroke-width:0.5291667;stroke-linecap:round;stroke-linejoin:round;stroke-miterlimit:4;stroke-dasharray:none;stroke-dashoffset:0;stroke-opacity:1;paint-order:normal"
			id="rect3506"
			width="0.5291667"
			height="0.5291667"
			x="11.50938"
			y="287.34268"
		/>
		<rect
			style="opacity:1;fill:#000000;fill-opacity:1;fill-rule:nonzero;stroke:none;stroke-width:0.5291667;stroke-linecap:round;stroke-linejoin:round;stroke-miterlimit:4;stroke-dasharray:none;stroke-dashoffset:0;stroke-opacity:1;paint-order:normal"
			id="rect3502-2"
			width="0.5291667"
			height="0.5291667"
			x="8.8635454"
			y="284.43225"
		/>
		<rect
			style="opacity:1;fill:#000000;fill-opacity:1;fill-rule:nonzero;stroke:none;stroke-width:0.5291667;stroke-linecap:round;stroke-linejoin:round;stroke-miterlimit:4;stroke-dasharray:none;stroke-dashoffset:0;stroke-opacity:1;paint-order:normal"
			id="rect3504-8"
			width="1.0583334"
			height="0.5291667"
			x="9.9218798"
			y="284.43225"
		/>
		<rect
			style="opacity:1;fill:#000000;fill-opacity:1;fill-rule:nonzero;stroke:none;stroke-width:0.5291667;stroke-linecap:round;stroke-linejoin:round;stroke-miterlimit:4;stroke-dasharray:none;stroke-dashoffset:0;stroke-opacity:1;paint-order:normal"
			id="rect3506-9"
			width="0.5291667"
			height="0.5291667"
			x="11.50938"
			y="284.43225"
		/>
		<path
			style="opacity:1;vector-effect:none;fill:{blendColor(
				'#d0d0d0',
				targetColor,
			)};fill-opacity:1;fill-rule:evenodd;stroke:#000000;stroke-width:0.5291667;stroke-linecap:butt;stroke-linejoin:round;stroke-miterlimit:4;stroke-dasharray:none;stroke-dashoffset:0;stroke-opacity:1"
			d="m 13.096877,289.72393 h 0.79375 l 1.322917,1.32292 v 2.38125 l -1.5875,1.5875 H 11.77396 v -2.64583 l 1.322917,-1.32292 z"
			id="path3535"
		/>
		<path
			style="opacity:1;vector-effect:none;fill:{blendColor(
				'#ffffff',
				targetColor,
			)};fill-opacity:1;fill-rule:evenodd;stroke:#000000;stroke-width:0.5291667;stroke-linecap:butt;stroke-linejoin:round;stroke-miterlimit:4;stroke-dasharray:none;stroke-dashoffset:0;stroke-opacity:1"
			d="M 12.832294,283.37393 H 7.2760441 v -1.32291 h 6.3499999 v 1.32291 z"
			id="path3541"
		/>
	</g>
</svg>
