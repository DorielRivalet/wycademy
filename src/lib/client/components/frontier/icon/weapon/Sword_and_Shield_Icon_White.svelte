<!--
  ~ © 2023 Doriel Rivalet
  ~ Use of this source code is governed by a MIT license that can be
  ~ found in the LICENSE file.
-->

<script lang="ts">
	import { blendColor } from '$lib/client/modules/color-blend';
	import { RarityColors } from '$lib/client/modules/frontier/objects';
	import type { FrontierRarity } from '$lib/client/modules/frontier/types';
	export let rarity: FrontierRarity = 1;
	export let size = '100%';

	$: targetColor = RarityColors[rarity - 1] ?? RarityColors[0];
</script>

<!-- Created with Inkscape (http://www.inkscape.org/) -->

<svg width={size} viewBox="0 0 16.933333 16.933334" version="1.1" id="svg4846">
	<g id="layer1" transform="translate(0,-280.06665)">
		<circle
			style="display:inline;opacity:1;fill:{blendColor(
				'#ffffff',
				targetColor,
			)};fill-opacity:1;fill-rule:nonzero;stroke:#000000;stroke-width:0.5291667;stroke-linecap:round;stroke-linejoin:round;stroke-miterlimit:4;stroke-dasharray:none;stroke-dashoffset:0;stroke-opacity:1;paint-order:normal"
			id="path4336"
			cx="12.170833"
			cy="289.72394"
			r="3.5718751"
		/>
		<path
			style="display:inline;opacity:1;vector-effect:none;fill:{blendColor(
				'#ffffff',
				targetColor,
			)};fill-opacity:1;fill-rule:evenodd;stroke:#000000;stroke-width:0.5291667;stroke-linecap:butt;stroke-linejoin:round;stroke-miterlimit:4;stroke-dasharray:none;stroke-dashoffset:0;stroke-opacity:1"
			d="m 5.1593752,281.65415 h -0.79375 l -1.3229201,1.32291 v 7.9375 h 2.1166701 z"
			id="path4322"
		/>
		<path
			style="display:inline;opacity:1;vector-effect:none;fill:{blendColor(
				'#ffffff',
				targetColor,
			)};fill-opacity:1;fill-rule:evenodd;stroke:#000000;stroke-width:0.5291667;stroke-linecap:butt;stroke-linejoin:round;stroke-miterlimit:4;stroke-dasharray:none;stroke-dashoffset:0;stroke-opacity:1"
			d="m 5.4239651,291.17914 -1e-5,1.58751 H 1.1906255 l 1e-5,-1.58751 z"
			id="path4324"
		/>
		<path
			style="display:inline;opacity:1;vector-effect:none;fill:{blendColor(
				'#ffffff',
				targetColor,
			)};fill-opacity:1;fill-rule:evenodd;stroke:#000000;stroke-width:0.5291667;stroke-linecap:butt;stroke-linejoin:round;stroke-miterlimit:4;stroke-dasharray:none;stroke-dashoffset:0;stroke-opacity:1"
			d="m 5.4239551,291.17915 h 1.3229201 v 1.5875 H 5.4239551 Z"
			id="path4328"
		/>
		<path
			style="display:inline;opacity:1;vector-effect:none;fill:{blendColor(
				'#d0d0d0',
				targetColor,
			)};fill-opacity:1;fill-rule:evenodd;stroke:#000000;stroke-width:0.5291667;stroke-linecap:butt;stroke-linejoin:round;stroke-miterlimit:4;stroke-dasharray:none;stroke-dashoffset:0;stroke-opacity:1"
			d="m 5.1593752,293.03123 v 1.32292 H 3.0427051 v -1.32292 z"
			id="path4330"
		/>
		<path
			style="display:inline;opacity:1;vector-effect:none;fill:{blendColor(
				'#d0d0d0',
				targetColor,
			)};fill-opacity:1;fill-rule:evenodd;stroke:#000000;stroke-width:0.5291667;stroke-linecap:butt;stroke-linejoin:round;stroke-miterlimit:4;stroke-dasharray:none;stroke-dashoffset:0;stroke-opacity:1"
			d="m 5.1593752,294.35415 v 1.05833 H 3.0427051 v -1.05833 z"
			id="path4332"
		/>
		<path
			style="display:inline;opacity:1;vector-effect:none;fill:{blendColor(
				'#858585',
				targetColor,
			)};fill-opacity:1;fill-rule:evenodd;stroke:#000000;stroke-width:0.5291667;stroke-linecap:butt;stroke-linejoin:round;stroke-miterlimit:4;stroke-dasharray:none;stroke-dashoffset:0;stroke-opacity:1"
			d="m 10.980215,288.26873 h 2.64583 v 2.91042 h -2.91042 v -2.91042 z"
			id="path4334"
		/>
		<path
			style="display:inline;opacity:1;vector-effect:none;fill:#000000;fill-opacity:1;fill-rule:evenodd;stroke:none;stroke-width:0.26458332;stroke-linecap:butt;stroke-linejoin:miter;stroke-miterlimit:4;stroke-dasharray:none;stroke-dashoffset:0;stroke-opacity:1"
			d="m 8.5989551,289.32706 h 0.79375 v 0.79375 h -0.79375 z"
			id="path4338"
		/>
		<path
			style="display:inline;opacity:1;vector-effect:none;fill:#000000;fill-opacity:1;fill-rule:evenodd;stroke:none;stroke-width:0.26458332;stroke-linecap:butt;stroke-linejoin:miter;stroke-miterlimit:4;stroke-dasharray:none;stroke-dashoffset:0;stroke-opacity:1"
			d="m 11.773965,286.15206 h 0.79375 v 1.05833 h -0.79375 z"
			id="path4338-4"
		/>
		<path
			style="display:inline;opacity:1;vector-effect:none;fill:#000000;fill-opacity:1;fill-rule:evenodd;stroke:none;stroke-width:0.26458332;stroke-linecap:butt;stroke-linejoin:miter;stroke-miterlimit:4;stroke-dasharray:none;stroke-dashoffset:0;stroke-opacity:1"
			d="m 14.948965,289.32706 h 0.79375 v 0.79375 h -0.79375 z"
			id="path4338-4-7"
		/>
		<path
			style="display:inline;opacity:1;vector-effect:none;fill:#000000;fill-opacity:1;fill-rule:evenodd;stroke:none;stroke-width:0.26458332;stroke-linecap:butt;stroke-linejoin:miter;stroke-miterlimit:4;stroke-dasharray:none;stroke-dashoffset:0;stroke-opacity:1"
			d="m 11.773965,292.23747 h 0.79375 v 1.05833 h -0.79375 z"
			id="path4338-4-7-1"
		/>
	</g>
</svg>
