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

<svg width={size} viewBox="0 0 16.933333 16.933334" version="1.1">
	<defs id="defs4840" />
	<g id="layer1" transform="translate(0,-280.06665)">
		<path
			style="display:inline;opacity:1;vector-effect:none;fill:{blendColor(
				'#d5d5d5',
				targetColor,
			)};fill-opacity:1;fill-rule:evenodd;stroke:none;stroke-width:0.26458332;stroke-linecap:butt;stroke-linejoin:miter;stroke-miterlimit:4;stroke-dasharray:none;stroke-dashoffset:0;stroke-opacity:1"
			d="m 5.0337307,289.88169 v -2.64584 l 2.116666,-2.11666 h 2.645834 l 2.1166673,2.11666 v 2.64584 l -2.1166673,2.11666 h -2.645834 z"
			id="path4121"
		/>
		<path
			style="display:inline;opacity:1;vector-effect:none;fill:{blendColor(
				'#858585',
				targetColor,
			)};fill-opacity:1;fill-rule:evenodd;stroke:none;stroke-width:0.26458332;stroke-linecap:butt;stroke-linejoin:miter;stroke-miterlimit:4;stroke-dasharray:none;stroke-dashoffset:0;stroke-opacity:1"
			d="m 5.0337307,287.76502 h 1.5875 l 1.058333,-1.05833 v -1.5875 h 1.5875 v 1.5875 l 1.0583343,1.05833 h 1.5875 v 1.5875 h -1.5875 l -1.0583343,1.05833 v 1.5875 h -1.5875 v -1.5875 l -1.058333,-1.05833 h -1.5875 z"
			id="path4117"
		/>
		<path
			style="display:inline;opacity:1;vector-effect:none;fill:none;fill-opacity:1;fill-rule:evenodd;stroke:#000000;stroke-width:0.5291667;stroke-linecap:butt;stroke-linejoin:round;stroke-miterlimit:4;stroke-dasharray:none;stroke-dashoffset:0;stroke-opacity:1"
			d="m 6.8858147,285.38377 -1.852083,1.85208 -1e-6,2.64584 2.116666,2.11666 h 2.645835 l 2.1166663,-2.11667 v -2.64583 l -2.1166673,-2.11666 -2.645833,-1e-5 z"
			id="path4115"
		/>
		<path
			style="display:inline;opacity:1;vector-effect:none;fill:{blendColor(
				'#ffffff',
				targetColor,
			)};fill-opacity:1;fill-rule:evenodd;stroke:none;stroke-width:0.26458332;stroke-linecap:butt;stroke-linejoin:miter;stroke-miterlimit:4;stroke-dasharray:none;stroke-dashoffset:0;stroke-opacity:1"
			d="m 7.9441467,290.14627 -1.058333,-1.05833 v -1.05834 l 1.058333,-1.05833 h 1.058334 l 1.0583333,1.05833 v 1.05834 l -1.0583333,1.05833 z"
			id="path4119"
		/>
		<path
			style="display:inline;opacity:1;vector-effect:none;fill:{blendColor(
				'#ffffff',
				targetColor,
			)};fill-opacity:1;fill-rule:evenodd;stroke:#000000;stroke-width:0.5291667;stroke-linecap:butt;stroke-linejoin:round;stroke-miterlimit:4;stroke-dasharray:none;stroke-dashoffset:0;stroke-opacity:1"
			d="m 3.1816467,287.23585 h -0.529166 l -1.322917,1.32292 1.322917,1.32292 h 0.79375 v -2.64584 z"
			id="path4125"
		/>
		<path
			style="display:inline;opacity:1;vector-effect:none;fill:{blendColor(
				'#ffffff',
				targetColor,
			)};fill-opacity:1;fill-rule:evenodd;stroke:#000000;stroke-width:0.5291667;stroke-linecap:butt;stroke-linejoin:round;stroke-miterlimit:4;stroke-dasharray:none;stroke-dashoffset:0;stroke-opacity:1"
			d="m 5.6591947,283.59038 -0.374177,-0.37418 h -1.870886 v 1.87089 l 0.561266,0.56126 1.870886,-1.87089 z"
			id="path4125-9"
		/>
		<path
			style="display:inline;opacity:1;vector-effect:none;fill:{blendColor(
				'#ffffff',
				targetColor,
			)};fill-opacity:1;fill-rule:evenodd;stroke:#000000;stroke-width:0.5291667;stroke-linecap:butt;stroke-linejoin:round;stroke-miterlimit:4;stroke-dasharray:none;stroke-dashoffset:0;stroke-opacity:1"
			d="m 5.6591957,293.52716 -0.374177,0.37418 h -1.870886 v -1.87089 l 0.561266,-0.56126 1.870886,1.87088 z"
			id="path4125-9-2"
		/>
		<path
			style="display:inline;opacity:1;vector-effect:none;fill:{blendColor(
				'#ffffff',
				targetColor,
			)};fill-opacity:1;fill-rule:evenodd;stroke:#000000;stroke-width:0.5291667;stroke-linecap:butt;stroke-linejoin:round;stroke-miterlimit:4;stroke-dasharray:none;stroke-dashoffset:0;stroke-opacity:1"
			d="m 13.751687,287.18495 h 0.529166 l 1.322917,1.32291 -1.322917,1.32292 h -0.79375 v -2.64583 z"
			id="path4125-98"
		/>
		<path
			style="display:inline;opacity:1;vector-effect:none;fill:{blendColor(
				'#ffffff',
				targetColor,
			)};fill-opacity:1;fill-rule:evenodd;stroke:#000000;stroke-width:0.5291667;stroke-linecap:butt;stroke-linejoin:round;stroke-miterlimit:4;stroke-dasharray:none;stroke-dashoffset:0;stroke-opacity:1"
			d="m 11.274139,283.53947 0.374177,-0.37418 h 1.870886 v 1.87089 l -0.561266,0.56127 -1.870886,-1.87089 z"
			id="path4125-9-8"
		/>
		<path
			style="display:inline;opacity:1;vector-effect:none;fill:{blendColor(
				'#ffffff',
				targetColor,
			)};fill-opacity:1;fill-rule:evenodd;stroke:#000000;stroke-width:0.5291667;stroke-linecap:butt;stroke-linejoin:round;stroke-miterlimit:4;stroke-dasharray:none;stroke-dashoffset:0;stroke-opacity:1"
			d="m 11.274138,293.47626 0.374177,0.37417 1.870886,10e-6 v -1.87089 l -0.561266,-0.56127 -1.870886,1.87089 z"
			id="path4125-9-2-2"
		/>
	</g>
</svg>
