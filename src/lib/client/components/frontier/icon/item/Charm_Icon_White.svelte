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
	<g id="layer1" transform="translate(0,-280.06665)">
		<ellipse
			style="display:inline;opacity:1;fill:{blendColor(
				'#ffffff',
				targetColor,
			)};fill-opacity:1;fill-rule:nonzero;stroke:#000000;stroke-width:0.5291667;stroke-linecap:round;stroke-linejoin:round;stroke-miterlimit:4;stroke-dasharray:none;stroke-dashoffset:0;stroke-opacity:1;paint-order:normal"
			id="path4220"
			cx="8.6083584"
			cy="289.45935"
			rx="4.1010418"
			ry="4.2333326"
		/>
		<path
			style="display:inline;opacity:1;vector-effect:none;fill:{blendColor(
				'#d5d5d5',
				targetColor,
			)};fill-opacity:1;fill-rule:evenodd;stroke:none;stroke-width:0.26458332;stroke-linecap:butt;stroke-linejoin:miter;stroke-miterlimit:4;stroke-dasharray:none;stroke-dashoffset:0;stroke-opacity:1"
			d="m 12.709401,289.72395 h 0.79375 l 1.058333,1.05833 v 4.23334 h -3.96875 v 0.52916 H 4.7719004 v -0.79375 H 2.3906505 v -2.91042 -0.26458 l 1.5875,-2.38125 h 0.793752 l -2.1e-6,1.05833 H 7.9469 l 2.645834,1.5875 v -0.26458 H 11.1219 l 1.058334,-0.79375 z"
			id="path4222"
		/>
		<path
			style="color:#000000;font-style:normal;font-variant:normal;font-weight:normal;font-stretch:normal;font-size:medium;line-height:normal;font-family:sans-serif;font-variant-ligatures:normal;font-variant-position:normal;font-variant-caps:normal;font-variant-numeric:normal;font-variant-alternates:normal;font-feature-settings:normal;text-indent:0;text-align:start;text-decoration:none;text-decoration-line:none;text-decoration-style:solid;text-decoration-color:#000000;letter-spacing:normal;word-spacing:normal;text-transform:none;writing-mode:lr-tb;direction:ltr;text-orientation:mixed;dominant-baseline:auto;baseline-shift:baseline;text-anchor:start;white-space:normal;shape-padding:0;clip-rule:nonzero;display:inline;overflow:visible;visibility:visible;opacity:1;isolation:auto;mix-blend-mode:normal;color-interpolation:sRGB;color-interpolation-filters:linearRGB;solid-color:#000000;solid-opacity:1;vector-effect:none;fill:{blendColor(
				'#858585',
				targetColor,
			)};fill-opacity:1;fill-rule:evenodd;stroke:none;stroke-width:0.5291667;stroke-linecap:butt;stroke-linejoin:round;stroke-miterlimit:4;stroke-dasharray:none;stroke-dashoffset:0;stroke-opacity:1;color-rendering:auto;image-rendering:auto;shape-rendering:auto;text-rendering:auto;enable-background:accumulate"
			d="m 5.7519531,291.125 -0.3730469,0.37305 4.2324219,4.23437 0.375,-0.375 z"
			id="path4214"
		/>
		<path
			style="color:#000000;font-style:normal;font-variant:normal;font-weight:normal;font-stretch:normal;font-size:medium;line-height:normal;font-family:sans-serif;font-variant-ligatures:normal;font-variant-position:normal;font-variant-caps:normal;font-variant-numeric:normal;font-variant-alternates:normal;font-feature-settings:normal;text-indent:0;text-align:start;text-decoration:none;text-decoration-line:none;text-decoration-style:solid;text-decoration-color:#000000;letter-spacing:normal;word-spacing:normal;text-transform:none;writing-mode:lr-tb;direction:ltr;text-orientation:mixed;dominant-baseline:auto;baseline-shift:baseline;text-anchor:start;white-space:normal;shape-padding:0;clip-rule:nonzero;display:inline;overflow:visible;visibility:visible;opacity:1;isolation:auto;mix-blend-mode:normal;color-interpolation:sRGB;color-interpolation-filters:linearRGB;solid-color:#000000;solid-opacity:1;vector-effect:none;fill:{blendColor(
				'#858585',
				targetColor,
			)};fill-opacity:1;fill-rule:evenodd;stroke:none;stroke-width:0.5291667;stroke-linecap:butt;stroke-linejoin:round;stroke-miterlimit:4;stroke-dasharray:none;stroke-dashoffset:0;stroke-opacity:1;color-rendering:auto;image-rendering:auto;shape-rendering:auto;text-rendering:auto;enable-background:accumulate"
			d="m 14.375,290.5957 -3.96875,3.96875 0.373047,0.37305 3.96875,-3.96875 z"
			id="path4210"
		/>
		<path
			style="display:inline;opacity:1;vector-effect:none;fill:none;fill-opacity:1;fill-rule:evenodd;stroke:#000000;stroke-width:0.5291667;stroke-linecap:butt;stroke-linejoin:round;stroke-miterlimit:4;stroke-dasharray:none;stroke-dashoffset:0;stroke-opacity:1"
			d="m 12.709401,289.72395 h 0.79375 l 1.058333,1.05833 v 4.23334 h -3.96875 v -3.43959 H 11.1219 c 0,0 1.587501,-0.79375 1.587501,-1.85208 z"
			id="path4208"
		/>
		<path
			style="display:inline;opacity:1;vector-effect:none;fill:none;fill-opacity:1;fill-rule:evenodd;stroke:#000000;stroke-width:0.5291667;stroke-linecap:butt;stroke-linejoin:round;stroke-miterlimit:4;stroke-dasharray:none;stroke-dashoffset:0;stroke-opacity:1"
			d="m 10.592734,295.01562 v 0.52916 H 4.7719004 v -3.175 l 1.5875,-2.11667 H 7.9469 l 2.645834,1.5875 z"
			id="path4212"
		/>
		<path
			style="display:inline;opacity:1;vector-effect:none;fill:none;fill-opacity:1;fill-rule:evenodd;stroke:#000000;stroke-width:0.5291667;stroke-linecap:butt;stroke-linejoin:round;stroke-miterlimit:4;stroke-dasharray:none;stroke-dashoffset:0;stroke-opacity:1"
			d="M 4.7719004,289.19478 H 3.9781505 l -1.5875,2.38125 v 3.175 h 2.3812499 v -2.38125 l 1.5875,-2.11667 h -1.5875 z"
			id="path4216"
		/>
		<path
			style="display:inline;opacity:1;vector-effect:none;fill:{blendColor(
				'#ffffff',
				targetColor,
			)};fill-opacity:1;fill-rule:evenodd;stroke:{blendColor(
				'#d5d5d5',
				targetColor,
			)};stroke-width:0.26458332;stroke-linecap:butt;stroke-linejoin:miter;stroke-miterlimit:4;stroke-dasharray:none;stroke-dashoffset:0;stroke-opacity:1"
			d="m 7.15315,287.07811 h 0.529168 v 0.52917 l 0.264582,0.26458 h 0.529167 v 0.52917 H 7.9469 l -0.264582,0.26458 v 0.52917 H 7.15315 v -0.52917 L 6.8885676,288.40103 H 6.3594004 v -0.52917 H 6.8885676 L 7.15315,287.60728 Z"
			id="path4218"
		/>
		<path
			style="display:inline;opacity:1;vector-effect:none;fill:{blendColor(
				'#ffffff',
				targetColor,
			)};fill-opacity:1;fill-rule:evenodd;stroke:#000000;stroke-width:0.5291667;stroke-linecap:butt;stroke-linejoin:round;stroke-miterlimit:4;stroke-dasharray:none;stroke-dashoffset:0;stroke-opacity:1"
			d="m 7.153152,281.78645 v 0.52916 l 1.322916,1.32292 1.322917,-1.32292 v -0.79375 H 7.153152 Z"
			id="path4125-6"
		/>
		<path
			style="display:inline;opacity:1;vector-effect:none;fill:{blendColor(
				'#ffffff',
				targetColor,
			)};fill-opacity:1;fill-rule:evenodd;stroke:#000000;stroke-width:0.5291667;stroke-linecap:butt;stroke-linejoin:round;stroke-miterlimit:4;stroke-dasharray:none;stroke-dashoffset:0;stroke-opacity:1"
			d="m 1.9976715,284.58727 0.374177,0.37418 h 1.870887 v -1.87089 l -0.561266,-0.56127 -1.870887,1.87089 z"
			id="path4125-6-5"
		/>
		<path
			style="display:inline;opacity:1;vector-effect:none;fill:{blendColor(
				'#ffffff',
				targetColor,
			)};fill-opacity:1;fill-rule:evenodd;stroke:#000000;stroke-width:0.5291667;stroke-linecap:butt;stroke-linejoin:round;stroke-miterlimit:4;stroke-dasharray:none;stroke-dashoffset:0;stroke-opacity:1"
			d="m 14.935662,284.58727 -0.374177,0.37418 h -1.870887 v -1.87089 l 0.561266,-0.56126 1.870887,1.87088 z"
			id="path4125-6-5-8"
		/>
	</g>
</svg>
