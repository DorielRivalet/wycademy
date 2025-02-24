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

<svg width={size} viewBox="0 0 16.933333 16.933334" version="1.1">
	<defs id="defs4840" />
	<g transform="translate(0,-280.06665)">
		<path
			style="opacity:1;vector-effect:none;fill:#000000;fill-opacity:1;fill-rule:evenodd;stroke:none;stroke-width:0.26458332;stroke-linecap:butt;stroke-linejoin:miter;stroke-miterlimit:4;stroke-dasharray:none;stroke-dashoffset:0;stroke-opacity:1"
			d="m 5.8208265,288.00416 h -0.52916 v -5.55625 h 0.52916 z"
		/>
		<path
			style="opacity:1;vector-effect:none;fill:{blendColor(
				'#ffffff',
				targetColor,
			)};fill-opacity:1;fill-rule:evenodd;stroke:#000000;stroke-width:0.5291667;stroke-linecap:butt;stroke-linejoin:round;stroke-miterlimit:4;stroke-dasharray:none;stroke-dashoffset:0;stroke-opacity:1"
			d="m 5.8208265,293.825 v -3.43959 h 6.3500005 v 3.43959 z"
		/>
		<path
			style="opacity:1;vector-effect:none;fill:{blendColor(
				'#ffffff',
				targetColor,
			)};fill-opacity:1;fill-rule:evenodd;stroke:#000000;stroke-width:0.5291667;stroke-linecap:butt;stroke-linejoin:round;stroke-miterlimit:4;stroke-dasharray:none;stroke-dashoffset:0;stroke-opacity:1"
			d="m 11.377087,293.82499 -6.3500105,10e-6 v 1.5875 h 7.9375005 l 10e-6,-1.58751 z"
		/>
		<circle
			style="opacity:1;fill:#000000;fill-opacity:1;fill-rule:nonzero;stroke:none;stroke-width:0.5291667;stroke-linecap:round;stroke-linejoin:round;stroke-miterlimit:4;stroke-dasharray:none;stroke-dashoffset:0;stroke-opacity:1;paint-order:normal"
			cx="7.0114512"
			cy="292.10519"
			r="0.39687502"
		/>
		<circle
			style="opacity:1;fill:#000000;fill-opacity:1;fill-rule:nonzero;stroke:none;stroke-width:0.5291667;stroke-linecap:round;stroke-linejoin:round;stroke-miterlimit:4;stroke-dasharray:none;stroke-dashoffset:0;stroke-opacity:1;paint-order:normal"
			cx="8.3343725"
			cy="292.10519"
			r="0.39687502"
		/>
		<circle
			style="opacity:1;fill:#000000;fill-opacity:1;fill-rule:nonzero;stroke:none;stroke-width:0.5291667;stroke-linecap:round;stroke-linejoin:round;stroke-miterlimit:4;stroke-dasharray:none;stroke-dashoffset:0;stroke-opacity:1;paint-order:normal"
			cx="9.6572866"
			cy="292.10519"
			r="0.39687502"
		/>
		<circle
			style="opacity:1;fill:#000000;fill-opacity:1;fill-rule:nonzero;stroke:none;stroke-width:0.5291667;stroke-linecap:round;stroke-linejoin:round;stroke-miterlimit:4;stroke-dasharray:none;stroke-dashoffset:0;stroke-opacity:1;paint-order:normal"
			cx="10.980208"
			cy="292.10519"
			r="0.39687502"
		/>
		<path
			style="opacity:1;vector-effect:none;fill:{blendColor(
				'#ffffff',
				targetColor,
			)};fill-opacity:1;fill-rule:evenodd;stroke:#000000;stroke-width:0.5291667;stroke-linecap:butt;stroke-linejoin:round;stroke-miterlimit:4;stroke-dasharray:none;stroke-dashoffset:0;stroke-opacity:1"
			d="m 5.8208265,290.38541 v -1.5875 h 6.3500005 v 1.5875 z"
		/>
		<path
			style="opacity:1;vector-effect:none;fill:{blendColor(
				'#ffffff',
				targetColor,
			)};fill-opacity:1;fill-rule:evenodd;stroke:#000000;stroke-width:0.5291667;stroke-linecap:butt;stroke-linejoin:round;stroke-miterlimit:4;stroke-dasharray:none;stroke-dashoffset:0;stroke-opacity:1"
			d="m 5.8208265,288.53333 v -3.70417 h 6.3500005 v 3.70417 z"
		/>
		<circle
			style="opacity:1;fill:#000000;fill-opacity:1;fill-rule:nonzero;stroke:none;stroke-width:0.5291667;stroke-linecap:round;stroke-linejoin:round;stroke-miterlimit:4;stroke-dasharray:none;stroke-dashoffset:0;stroke-opacity:1;paint-order:normal"
			cx="7.0114512"
			cy="286.54895"
			r="0.39687502"
		/>
		<circle
			style="opacity:1;fill:#000000;fill-opacity:1;fill-rule:nonzero;stroke:none;stroke-width:0.5291667;stroke-linecap:round;stroke-linejoin:round;stroke-miterlimit:4;stroke-dasharray:none;stroke-dashoffset:0;stroke-opacity:1;paint-order:normal"
			cx="8.3343725"
			cy="286.54895"
			r="0.39687502"
		/>
		<circle
			style="opacity:1;fill:#000000;fill-opacity:1;fill-rule:nonzero;stroke:none;stroke-width:0.5291667;stroke-linecap:round;stroke-linejoin:round;stroke-miterlimit:4;stroke-dasharray:none;stroke-dashoffset:0;stroke-opacity:1;paint-order:normal"
			cx="9.6572866"
			cy="286.54895"
			r="0.39687502"
		/>
		<circle
			style="opacity:1;fill:#000000;fill-opacity:1;fill-rule:nonzero;stroke:none;stroke-width:0.5291667;stroke-linecap:round;stroke-linejoin:round;stroke-miterlimit:4;stroke-dasharray:none;stroke-dashoffset:0;stroke-opacity:1;paint-order:normal"
			cx="10.980216"
			cy="286.54895"
			r="0.39687502"
		/>
		<path
			style="opacity:1;vector-effect:none;fill:{blendColor(
				'#d0d0d0',
				targetColor,
			)};fill-opacity:1;fill-rule:evenodd;stroke:#000000;stroke-width:0.5291667;stroke-linecap:butt;stroke-linejoin:round;stroke-miterlimit:4;stroke-dasharray:none;stroke-dashoffset:0;stroke-opacity:1"
			d="m 12.170827,284.82916 v -2.11666 c 0,0 0,-0.52917 -0.52916,-0.52917 -0.52917,0 -1.05834,0 -1.05834,0 v 2.64583 z"
		/>
		<path
			style="opacity:1;vector-effect:none;fill:{blendColor(
				'#d0d0d0',
				targetColor,
			)};fill-opacity:1;fill-rule:evenodd;stroke:#000000;stroke-width:0.5291667;stroke-linecap:butt;stroke-linejoin:round;stroke-miterlimit:4;stroke-dasharray:none;stroke-dashoffset:0;stroke-opacity:1"
			d="m 10.583327,282.18333 c 0,0 0,-0.52917 -0.52916,-0.52917 -0.5291701,0 -1.0583401,0 -1.0583401,0 v 3.175 h 1.5875001 z"
		/>
		<path
			style="opacity:1;vector-effect:none;fill:{blendColor(
				'#d0d0d0',
				targetColor,
			)};fill-opacity:1;fill-rule:evenodd;stroke:#000000;stroke-width:0.5291667;stroke-linecap:butt;stroke-linejoin:round;stroke-miterlimit:4;stroke-dasharray:none;stroke-dashoffset:0;stroke-opacity:1"
			d="M 8.9958269,281.65416 H 6.3499965 c 0,0 -0.52917,0 -0.52917,0.52917 0,0.52917 0,2.64583 0,2.64583 h 3.1750004 z"
		/>
		<path
			style="opacity:1;vector-effect:none;fill:none;fill-opacity:1;fill-rule:evenodd;stroke:#000000;stroke-width:0.5291667;stroke-linecap:butt;stroke-linejoin:round;stroke-miterlimit:4;stroke-dasharray:none;stroke-dashoffset:0;stroke-opacity:1"
			d="m 7.4083269,281.65416 v 3.175"
		/>
		<path
			style="opacity:1;vector-effect:none;fill:{blendColor(
				'#d0d0d0',
				targetColor,
			)};fill-opacity:1;fill-rule:evenodd;stroke:#000000;stroke-width:0.5291667;stroke-linecap:butt;stroke-linejoin:round;stroke-miterlimit:4;stroke-dasharray:none;stroke-dashoffset:0;stroke-opacity:1"
			d="M 5.2916665,287.73958 V 282.7125 H 4.4979166 c 0,0 -0.52917,0 -0.52917,0.52916 v 3.175 z"
		/>
	</g>
</svg>
