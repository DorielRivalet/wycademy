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

<svg width={size} viewBox="0 0 16.933333 16.933334" version="1.1" id="svg8">
	<g id="layer1" transform="translate(0,-280.06665)">
		<path
			style="color:#000000;font-style:normal;font-variant:normal;font-weight:normal;font-stretch:normal;font-size:medium;line-height:normal;font-family:sans-serif;font-variant-ligatures:normal;font-variant-position:normal;font-variant-caps:normal;font-variant-numeric:normal;font-variant-alternates:normal;font-feature-settings:normal;text-indent:0;text-align:start;text-decoration:none;text-decoration-line:none;text-decoration-style:solid;text-decoration-color:#000000;letter-spacing:normal;word-spacing:normal;text-transform:none;writing-mode:lr-tb;direction:ltr;text-orientation:mixed;dominant-baseline:auto;baseline-shift:baseline;text-anchor:start;white-space:normal;shape-padding:0;clip-rule:nonzero;overflow:visible;visibility:visible;opacity:1;isolation:auto;mix-blend-mode:normal;color-interpolation:sRGB;color-interpolation-filters:linearRGB;solid-color:#000000;solid-opacity:1;vector-effect:none;fill:#000000;fill-opacity:1;fill-rule:nonzero;stroke:none;stroke-width:0.5291667;stroke-linecap:butt;stroke-linejoin:round;stroke-miterlimit:4;stroke-dasharray:none;stroke-dashoffset:0;stroke-opacity:1;color-rendering:auto;image-rendering:auto;shape-rendering:auto;text-rendering:auto;enable-background:accumulate"
			d="m 3.9687506,294.61914 v 0.5293 h 3.1757812 v -0.5293 z"
			id="path1063"
		/>
		<path
			style="fill:{blendColor(
				'#ffffff',
				targetColor,
			)};fill-opacity:1;stroke:none;stroke-width:0.26458335px;stroke-linecap:butt;stroke-linejoin:miter;stroke-opacity:1"
			d="M 7.6729175,281.12498 H 6.8791674 l -2.6458334,1.85209 -1.8520833,2.38125 -1.3229167,2.91041 -0.52916671,1.85209 v 3.96875 l 2.11666671,2.11666 v -0.79375 l 3.4395834,-10.05416 1.3229167,-2.64584 z"
			id="path1059"
		/>
		<path
			style="fill:{blendColor(
				'#d0d0d0',
				targetColor,
			)};fill-opacity:1;stroke:none;stroke-width:0.26458335px;stroke-linecap:butt;stroke-linejoin:miter;stroke-opacity:1"
			d="m 7.4083341,282.71248 -3.7041667,3.43959 -0.2645834,2.91041 -1.3229167,1.32292 -0.79375,2.91042 0.5291667,0.52916 2.38125,-3.175 1.5875001,-5.29166 1.5875,-2.11667 z"
			id="path1057"
		/>
		<path
			style="fill:{blendColor(
				'#858585',
				targetColor,
			)};fill-opacity:1;stroke:#000000;stroke-width:0.5291667;stroke-linecap:round;stroke-linejoin:round;stroke-miterlimit:4;stroke-dasharray:none;stroke-opacity:1"
			d="m 8.4666675,286.41665 v 0.52917 l -2.3812501,1.5875 -2.1166668,6.87916 H 2.645834 L 1.5875006,293.5604 v -0.26458 l 2.1166668,-2.91042 1.3229167,-5.02708 2.38125,-2.64584 0.5291667,0.26459 0.2645833,1.05833 z"
			id="path1051"
		/>
		<path
			style="fill:none;stroke:#000000;stroke-width:0.5291667;stroke-linecap:round;stroke-linejoin:round;stroke-miterlimit:4;stroke-dasharray:none;stroke-opacity:1"
			d="m 2.645834,296.20623 -2.11666671,-2.11666 v -3.175 c 0,-4.7625 4.49791671,-9.78959 7.14375021,-9.78959 l -0.2645835,1.5875 -2.38125,2.64584 -1.3229167,5.02708 -2.1166667,2.91042 v 0.26458 l 1.0583334,1.85208 z"
			id="path1029"
		/>
		<path
			style="fill:{blendColor(
				'#d0d0d0',
				targetColor,
			)};fill-opacity:1;stroke:#000000;stroke-width:0.5291667;stroke-linecap:round;stroke-linejoin:round;stroke-miterlimit:4;stroke-dasharray:none;stroke-opacity:1"
			d="m 5.2916674,289.59165 1.0583333,0.52917 -1.0583334,3.175 -1.0583333,-0.52917 z"
			id="path1053"
		/>
		<path
			style="fill:{blendColor(
				'#d0d0d0',
				targetColor,
			)};fill-opacity:1;stroke:#000000;stroke-width:0.5291667;stroke-linecap:round;stroke-linejoin:round;stroke-miterlimit:4;stroke-dasharray:none;stroke-opacity:1"
			d="m 7.1437508,294.08957 v 1.5875 h 1.3229167 1.3229167 v -1.5875 H 8.4666675 Z"
			id="path1061"
		/>
		<path
			style="color:#000000;font-style:normal;font-variant:normal;font-weight:normal;font-stretch:normal;font-size:medium;line-height:normal;font-family:sans-serif;font-variant-ligatures:normal;font-variant-position:normal;font-variant-caps:normal;font-variant-numeric:normal;font-variant-alternates:normal;font-feature-settings:normal;text-indent:0;text-align:start;text-decoration:none;text-decoration-line:none;text-decoration-style:solid;text-decoration-color:#000000;letter-spacing:normal;word-spacing:normal;text-transform:none;writing-mode:lr-tb;direction:ltr;text-orientation:mixed;dominant-baseline:auto;baseline-shift:baseline;text-anchor:start;white-space:normal;shape-padding:0;clip-rule:nonzero;overflow:visible;visibility:visible;opacity:1;isolation:auto;mix-blend-mode:normal;color-interpolation:sRGB;color-interpolation-filters:linearRGB;solid-color:#000000;solid-opacity:1;vector-effect:none;fill:#000000;fill-opacity:1;fill-rule:nonzero;stroke:none;stroke-width:0.5291667;stroke-linecap:butt;stroke-linejoin:round;stroke-miterlimit:4;stroke-dasharray:none;stroke-dashoffset:0;stroke-opacity:1;color-rendering:auto;image-rendering:auto;shape-rendering:auto;text-rendering:auto;enable-background:accumulate"
			d="m 12.964583,294.61914 v 0.5293 h -3.17578 v -0.5293 z"
			id="path1063-9"
		/>
		<path
			style="fill:{blendColor(
				'#ffffff',
				targetColor,
			)};fill-opacity:1;stroke:none;stroke-width:0.26458335px;stroke-linecap:butt;stroke-linejoin:miter;stroke-opacity:1"
			d="m 9.260417,281.12498 h 0.793749 l 2.645834,1.85209 1.852083,2.38125 1.322916,2.91041 0.529167,1.85209 v 3.96875 l -2.116666,2.11666 v -0.79375 L 10.847916,285.35832 9.525,282.71248 Z"
			id="path1059-1"
		/>
		<path
			style="fill:{blendColor(
				'#d0d0d0',
				targetColor,
			)};fill-opacity:1;stroke:none;stroke-width:0.26458335px;stroke-linecap:butt;stroke-linejoin:miter;stroke-opacity:1"
			d="m 9.525,282.71248 3.704166,3.43959 0.264584,2.91041 1.322916,1.32292 0.79375,2.91042 -0.529167,0.52916 L 12.7,290.64998 11.112499,285.35832 9.525,283.24165 Z"
			id="path1057-0"
		/>
		<path
			style="fill:{blendColor(
				'#858585',
				targetColor,
			)};fill-opacity:1;stroke:#000000;stroke-width:0.5291667;stroke-linecap:round;stroke-linejoin:round;stroke-miterlimit:4;stroke-dasharray:none;stroke-opacity:1"
			d="m 8.466667,286.41665 v 0.52917 l 2.381249,1.5875 2.116667,6.87916 H 14.2875 l 1.058333,-1.85208 v -0.26458 L 13.229166,290.3854 11.90625,285.35832 9.525,282.71248 8.995834,282.97707 8.73125,284.0354 Z"
			id="path1051-7"
		/>
		<path
			style="fill:none;stroke:#000000;stroke-width:0.5291667;stroke-linecap:round;stroke-linejoin:round;stroke-miterlimit:4;stroke-dasharray:none;stroke-opacity:1"
			d="m 14.2875,296.20623 2.116666,-2.11666 v -3.175 c 0,-4.7625 -4.497916,-9.78959 -7.143749,-9.78959 l 0.264583,1.5875 2.38125,2.64584 1.322916,5.02708 2.116667,2.91042 v 0.26458 l -1.058333,1.85208 z"
			id="path1029-2"
		/>
		<path
			style="fill:{blendColor(
				'#d0d0d0',
				targetColor,
			)};fill-opacity:1;stroke:#000000;stroke-width:0.5291667;stroke-linecap:round;stroke-linejoin:round;stroke-miterlimit:4;stroke-dasharray:none;stroke-opacity:1"
			d="m 11.641667,289.59165 -1.058333,0.52917 1.058333,3.175 1.058334,-0.52917 z"
			id="path1053-2"
		/>
		<path
			style="fill:{blendColor(
				'#d0d0d0',
				targetColor,
			)};fill-opacity:1;stroke:#000000;stroke-width:0.5291667;stroke-linecap:round;stroke-linejoin:round;stroke-miterlimit:4;stroke-dasharray:none;stroke-opacity:1"
			d="m 7.6729175,283.50623 -0.2645834,0.26459 v 0.26458 l -0.2645833,0.26458 H 6.6145841 l -0.2645833,0.52917 v 0.26458 l 0.2645833,0.52917 h 0.5291667 l 0.2645833,0.26458 v 0.26459 l 0.2645834,0.26458 h 0.79375 0.79375 l 0.2645833,-0.26458 v -0.26459 l 0.2645834,-0.26458 h 0.5291668 l 0.264583,-0.52917 v -0.26458 l -0.264583,-0.52917 H 9.7895842 L 9.5250008,284.0354 v -0.26458 l -0.2645833,-0.26459 h -0.79375 z"
			id="path1031"
		/>
		<circle
			style="opacity:1;fill:{blendColor(
				'#4d4d4d',
				targetColor,
			)};fill-opacity:1;stroke:none;stroke-width:0.26458335;stroke-linecap:round;stroke-linejoin:round;stroke-miterlimit:4;stroke-dasharray:none;stroke-dashoffset:0;stroke-opacity:1;paint-order:normal"
			id="path1055"
			cx="7.0114589"
			cy="284.96146"
			r="0.13229167"
		/>
		<circle
			style="opacity:1;fill:{blendColor(
				'#4d4d4d',
				targetColor,
			)};fill-opacity:1;stroke:none;stroke-width:0.26458335;stroke-linecap:round;stroke-linejoin:round;stroke-miterlimit:4;stroke-dasharray:none;stroke-dashoffset:0;stroke-opacity:1;paint-order:normal"
			id="path1055-7"
			cx="-9.921875"
			cy="284.96146"
			r="0.13229167"
			transform="scale(-1,1)"
		/>
	</g>
</svg>
