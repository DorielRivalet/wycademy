<!--
  ~ © 2023 Doriel Rivalet
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

	let targetColor =
		$derived(color === '' ? RarityColors[rarity - 1] ?? RarityColors[0] : color);
</script>

<!-- Created with Inkscape (http://www.inkscape.org/) -->

<svg width={size} viewBox="0 0 16.933333 16.933334" version="1.1" id="svg4846">
	<g id="layer1" transform="translate(0,-280.06665)">
		<path
			style="display:inline;opacity:1;vector-effect:none;fill:#000000;fill-opacity:1;fill-rule:evenodd;stroke:none;stroke-width:0.26458332;stroke-linecap:butt;stroke-linejoin:miter;stroke-miterlimit:4;stroke-dasharray:none;stroke-dashoffset:0;stroke-opacity:1"
			d="m 5.8208319,281.91874 h 0.79375 l 0.79375,0.79375 h 1.0583299 1.05834 l 0.7937502,-0.79375 h 0.79375 l 1.32291,2.91041 -1.5875,1.32292 H 5.2916618 l -0.79375,-1.85208 z"
			id="path3137"
		/>
		<path
			style="display:inline;opacity:1;vector-effect:none;fill:{blendColor(
				'#ffffff',
				targetColor,
			)};fill-opacity:1;fill-rule:evenodd;stroke:#000000;stroke-width:0.5291667;stroke-linecap:butt;stroke-linejoin:round;stroke-miterlimit:4;stroke-dasharray:none;stroke-dashoffset:0;stroke-opacity:1"
			d="m 2.6458328,293.82499 v 1.85208 H 8.4666663 14.2875 v -1.85208 H 8.4666663 Z"
			id="path3089-0"
		/>
		<path
			style="display:inline;opacity:1;vector-effect:none;fill:{blendColor(
				'#d0d0d0',
				targetColor,
			)};fill-opacity:1;fill-rule:evenodd;stroke:#000000;stroke-width:0.5291667;stroke-linecap:butt;stroke-linejoin:round;stroke-miterlimit:4;stroke-dasharray:none;stroke-dashoffset:0;stroke-opacity:1"
			d="m 3.4395828,292.50207 -0.79375,0.79375 v 0.52917 H 8.4666663 14.2875 v -0.52917 l -0.79375,-0.79375 H 13.229166 8.4666663 3.7041662 Z"
			id="path3087-2"
		/>
		<path
			style="display:inline;opacity:1;vector-effect:none;fill:{blendColor(
				'#ffffff',
				targetColor,
			)};fill-opacity:1;fill-rule:evenodd;stroke:#000000;stroke-width:0.5291667;stroke-linecap:butt;stroke-linejoin:round;stroke-miterlimit:4;stroke-dasharray:none;stroke-dashoffset:0;stroke-opacity:1"
			d="m 8.4666663,286.94582 -3.4395834,0.26458 -1.8520834,1.5875 v 1.32292 l 0.5291667,0.52917 v 1.85208 h 4.7625001 4.7624997 v -1.85208 l 0.529167,-0.52917 v -1.32292 l -1.852083,-1.5875 z"
			id="path3035-7"
		/>
		<path
			style="display:inline;opacity:1;vector-effect:none;fill:{blendColor(
				'#ffffff',
				targetColor,
			)};fill-opacity:1;fill-rule:evenodd;stroke:#000000;stroke-width:0.5291667;stroke-linecap:butt;stroke-linejoin:round;stroke-miterlimit:4;stroke-dasharray:none;stroke-dashoffset:0;stroke-opacity:1"
			d="m 13.758332,285.6229 h 1.5875 v -3.175 c 0,0 0,-1.05833 -1.05833,-1.05833 -1.05833,0 -3.175,0 -3.175,0 v 2.64583 h 0.26458 l 1.5875,1.5875 z"
			id="path3027-3"
		/>
		<path
			style="display:inline;opacity:1;vector-effect:none;fill:{blendColor(
				'#d0d0d0',
				targetColor,
			)};fill-opacity:1;fill-rule:evenodd;stroke:#000000;stroke-width:0.5291667;stroke-linecap:butt;stroke-linejoin:round;stroke-miterlimit:4;stroke-dasharray:none;stroke-dashoffset:0;stroke-opacity:1"
			d="m 6.8791663,283.24165 v 1.85209 H 5.5562496 v -1.05834 l -1.5875,1.5875 H 3.1749995 v 3.175 h 1.5875001 v -0.79375 h 3.7041667 3.7041667 v 0.79375 h 1.5875 v -3.175 h -0.79375 l -1.5875,-1.5875 v 1.05834 h -1.322916 v -1.85209 H 8.4666663 Z"
			id="path3023-5"
		/>
		<path
			style="display:inline;opacity:1;vector-effect:none;fill:none;fill-opacity:1;fill-rule:evenodd;stroke:#000000;stroke-width:0.5291667;stroke-linecap:butt;stroke-linejoin:round;stroke-miterlimit:4;stroke-dasharray:none;stroke-dashoffset:0;stroke-opacity:1"
			d="m 12.170832,288.00415 v -1.05833 h 1.5875"
			id="path3025-4"
		/>
		<circle
			style="display:inline;opacity:1;fill:#000000;fill-opacity:1;fill-rule:nonzero;stroke:none;stroke-width:0.5291667;stroke-linecap:round;stroke-linejoin:round;stroke-miterlimit:4;stroke-dasharray:none;stroke-dashoffset:0;stroke-opacity:1;paint-order:normal"
			id="path3029-0"
			cx="-14.022926"
			cy="282.97708"
			r="0.5291667"
			transform="scale(-1,1)"
		/>
		<circle
			style="display:inline;opacity:1;fill:#000000;fill-opacity:1;fill-rule:nonzero;stroke:none;stroke-width:0.5291667;stroke-linecap:round;stroke-linejoin:round;stroke-miterlimit:4;stroke-dasharray:none;stroke-dashoffset:0;stroke-opacity:1;paint-order:normal"
			id="path3033-2"
			cx="-14.022926"
			cy="284.29999"
			r="0.5291667"
			transform="scale(-1,1)"
		/>
		<ellipse
			style="display:inline;opacity:1;fill:#000000;fill-opacity:1;fill-rule:nonzero;stroke:none;stroke-width:0.5291667;stroke-linecap:round;stroke-linejoin:round;stroke-miterlimit:4;stroke-dasharray:none;stroke-dashoffset:0;stroke-opacity:1;paint-order:normal"
			id="path3037-0"
			cx="-10.054161"
			cy="291.31146"
			rx="0.39687937"
			ry="0.39687502"
			transform="scale(-1,1)"
		/>
		<ellipse
			style="display:inline;opacity:1;fill:#000000;fill-opacity:1;fill-rule:nonzero;stroke:none;stroke-width:0.5291667;stroke-linecap:round;stroke-linejoin:round;stroke-miterlimit:4;stroke-dasharray:none;stroke-dashoffset:0;stroke-opacity:1;paint-order:normal"
			id="path3037-9-9"
			cx="-11.64167"
			cy="291.31146"
			rx="0.39687937"
			ry="0.39687502"
			transform="scale(-1,1)"
		/>
		<path
			style="display:inline;opacity:1;vector-effect:none;fill:{blendColor(
				'#ffffff',
				targetColor,
			)};fill-opacity:1;fill-rule:evenodd;stroke:#000000;stroke-width:0.5291667;stroke-linecap:butt;stroke-linejoin:round;stroke-miterlimit:4;stroke-dasharray:none;stroke-dashoffset:0;stroke-opacity:1"
			d="m 3.1750018,285.6229 h -1.5875 v -3.175 c 0,0 0,-1.05833 1.05833,-1.05833 1.05833,0 3.1750001,0 3.1750001,0 v 2.64583 H 5.5562517 l -1.5875,1.5875 z"
			id="path3027"
		/>
		<path
			style="display:inline;opacity:1;vector-effect:none;fill:none;fill-opacity:1;fill-rule:evenodd;stroke:#000000;stroke-width:0.5291667;stroke-linecap:butt;stroke-linejoin:round;stroke-miterlimit:4;stroke-dasharray:none;stroke-dashoffset:0;stroke-opacity:1"
			d="m 4.7625017,288.00415 v -1.05833 H 3.1750018"
			id="path3025"
		/>
		<circle
			style="display:inline;opacity:1;fill:#000000;fill-opacity:1;fill-rule:nonzero;stroke:none;stroke-width:0.5291667;stroke-linecap:round;stroke-linejoin:round;stroke-miterlimit:4;stroke-dasharray:none;stroke-dashoffset:0;stroke-opacity:1;paint-order:normal"
			id="path3029"
			cx="2.9104085"
			cy="282.97708"
			r="0.5291667"
		/>
		<circle
			style="display:inline;opacity:1;fill:#000000;fill-opacity:1;fill-rule:nonzero;stroke:none;stroke-width:0.5291667;stroke-linecap:round;stroke-linejoin:round;stroke-miterlimit:4;stroke-dasharray:none;stroke-dashoffset:0;stroke-opacity:1;paint-order:normal"
			id="path3033"
			cx="2.9104085"
			cy="284.29999"
			r="0.5291667"
		/>
		<ellipse
			style="display:inline;opacity:1;fill:#000000;fill-opacity:1;fill-rule:nonzero;stroke:none;stroke-width:0.5291667;stroke-linecap:round;stroke-linejoin:round;stroke-miterlimit:4;stroke-dasharray:none;stroke-dashoffset:0;stroke-opacity:1;paint-order:normal"
			id="path3037"
			cx="6.8791733"
			cy="291.31146"
			rx="0.39687937"
			ry="0.39687502"
		/>
		<ellipse
			style="display:inline;opacity:1;fill:#000000;fill-opacity:1;fill-rule:nonzero;stroke:none;stroke-width:0.5291667;stroke-linecap:round;stroke-linejoin:round;stroke-miterlimit:4;stroke-dasharray:none;stroke-dashoffset:0;stroke-opacity:1;paint-order:normal"
			id="path3037-9"
			cx="5.2916641"
			cy="291.31146"
			rx="0.39687937"
			ry="0.39687502"
		/>
		<ellipse
			style="display:inline;opacity:1;fill:#000000;fill-opacity:1;fill-rule:nonzero;stroke:none;stroke-width:0.5291667;stroke-linecap:round;stroke-linejoin:round;stroke-miterlimit:4;stroke-dasharray:none;stroke-dashoffset:0;stroke-opacity:1;paint-order:normal"
			id="path3037-93"
			cx="8.4666681"
			cy="291.31146"
			rx="0.39687937"
			ry="0.39687502"
		/>
	</g>
</svg>
