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

	let targetColor =
		$derived(color === '' ? RarityColors[rarity - 1] ?? RarityColors[0] : color);
</script>

<svg width={size} viewBox="0 0 16.933333 16.933334" version="1.1" id="svg8">
	<g id="layer1" transform="translate(0,-280.06665)">
		<path
			style="fill:{blendColor(
				'#ffffff',
				targetColor,
			)};fill-opacity:1;stroke:#000000;stroke-width:0.5291667;stroke-linecap:round;stroke-linejoin:round;stroke-miterlimit:4;stroke-dasharray:none;stroke-opacity:1"
			d="m 2.150465,293.48967 -0.558212,2.17018 2.241175,-0.48722 -0.14478,-1.33355 z"
			id="path874-9"
		/>
		<path
			style="fill:{blendColor(
				'#ffffff',
				targetColor,
			)};fill-opacity:1;stroke:#000000;stroke-width:0.5291667;stroke-linecap:round;stroke-linejoin:round;stroke-miterlimit:4;stroke-dasharray:none;stroke-opacity:1"
			d="m 2.651148,291.86423 0.714611,0.71462 1.027623,0.16536 0.318918,1.18118 0.738235,0.73823 -1.063058,1.06306 -2.799387,-2.79939 z"
			id="path872-4"
		/>
		<path
			style="fill:{blendColor(
				'#ffffff',
				targetColor,
			)};fill-opacity:1;stroke:#000000;stroke-width:0.5291667;stroke-linecap:round;stroke-linejoin:round;stroke-miterlimit:4;stroke-dasharray:none;stroke-opacity:1"
			d="m 5.993875,289.95073 -2.628116,2.62812 1.346541,1.34654 2.628115,-2.62812 z"
			id="path870-5"
		/>
		<path
			style="fill:{blendColor(
				'#d0d0d0',
				targetColor,
			)};fill-opacity:1;stroke:none;stroke-width:0.26458335px;stroke-linecap:butt;stroke-linejoin:miter;stroke-opacity:1"
			d="m 10.846461,284.47629 -5.378209,5.29136 2.102492,2.10249 3.744327,-3.74433 0.68399,-0.0581 0.225515,-0.85141 0.826858,-0.90254 -1.870887,-1.93771 z"
			id="path880-3"
		/>
		<path
			style="fill:{blendColor(
				'#ffffff',
				targetColor,
			)};fill-opacity:1;stroke:none;stroke-width:0.26458335px;stroke-linecap:butt;stroke-linejoin:miter;stroke-opacity:1"
			d="m 12.224576,287.21631 -0.909505,0.9095 1.611081,1.49542 0.897608,-0.80574 z"
			id="path876-3"
		/>
		<path
			style="fill:none;stroke:#000000;stroke-width:0.5291667;stroke-linecap:round;stroke-linejoin:round;stroke-miterlimit:4;stroke-dasharray:none;stroke-opacity:1"
			d="m 11.287461,283.94844 -5.819209,5.81921 2.102492,2.10249 3.744327,-3.74433 1.900386,1.90039 0.909505,-0.90951 -1.900386,-1.90038 1.232195,-1.2322 z"
			id="path862-5"
		/>
		<path
			style="fill:{blendColor(
				'#858585',
				targetColor,
			)};fill-opacity:1;stroke:#000000;stroke-width:0.5291667;stroke-linecap:round;stroke-linejoin:round;stroke-miterlimit:4;stroke-dasharray:none;stroke-opacity:1"
			d="m 10.02759,283.46017 2.031622,-2.03162 3.803385,3.80338 -2.031622,2.03162 z"
			id="path860-1"
		/>
		<path
			style="fill:{blendColor(
				'#858585',
				targetColor,
			)};fill-opacity:1;stroke:#000000;stroke-width:0.5291667;stroke-linecap:round;stroke-linejoin:round;stroke-miterlimit:4;stroke-dasharray:none;stroke-opacity:1"
			d="m 13.82376,288.81549 0.363569,-0.36357 1.102488,1.10249 -1.615615,1.61562 -1.102489,-1.10249 z"
			id="path868-3"
		/>
		<path
			style="fill:{blendColor(
				'#ffffff',
				targetColor,
			)};fill-opacity:1;stroke:#000000;stroke-width:0.5291667;stroke-linecap:round;stroke-linejoin:round;stroke-miterlimit:4;stroke-dasharray:none;stroke-opacity:1"
			d="m 14.782868,293.40108 0.558212,2.17018 -2.241175,-0.48722 0.14478,-1.33355 z"
			id="path874"
		/>
		<path
			style="fill:{blendColor(
				'#ffffff',
				targetColor,
			)};fill-opacity:1;stroke:#000000;stroke-width:0.5291667;stroke-linecap:round;stroke-linejoin:round;stroke-miterlimit:4;stroke-dasharray:none;stroke-opacity:1"
			d="m 14.282185,291.77564 -0.714611,0.71462 -1.027623,0.16536 -0.318918,1.18118 -0.738235,0.73823 1.063058,1.06306 2.799387,-2.79939 z"
			id="path872"
		/>
		<path
			style="fill:{blendColor(
				'#ffffff',
				targetColor,
			)};fill-opacity:1;stroke:#000000;stroke-width:0.5291667;stroke-linecap:round;stroke-linejoin:round;stroke-miterlimit:4;stroke-dasharray:none;stroke-opacity:1"
			d="m 10.939458,289.86214 2.628116,2.62812 -1.346541,1.34654 -2.6281152,-2.62812 z"
			id="path870"
		/>
		<path
			style="fill:{blendColor(
				'#d0d0d0',
				targetColor,
			)};fill-opacity:1;stroke:none;stroke-width:0.26458335px;stroke-linecap:butt;stroke-linejoin:miter;stroke-opacity:1"
			d="m 6.0868726,284.3877 5.3782084,5.29136 -2.1024918,2.10249 -3.744327,-3.74433 -0.6839895,-0.0581 -0.2255158,-0.85141 -0.8268578,-0.90254 1.8708868,-1.93771 z"
			id="path880"
		/>
		<path
			style="fill:{blendColor(
				'#ffffff',
				targetColor,
			)};fill-opacity:1;stroke:none;stroke-width:0.26458335px;stroke-linecap:butt;stroke-linejoin:miter;stroke-opacity:1"
			d="m 4.7087569,287.12772 0.9095053,0.9095 -1.6110805,1.49542 -0.897608,-0.80574 z"
			id="path876"
		/>
		<path
			style="fill:none;stroke:#000000;stroke-width:0.5291667;stroke-linecap:round;stroke-linejoin:round;stroke-miterlimit:4;stroke-dasharray:none;stroke-opacity:1"
			d="m 5.645872,283.85985 5.819209,5.81921 -2.102492,2.10249 -3.7443268,-3.74433 -1.9003856,1.90039 -0.9095052,-0.90951 1.9003855,-1.90038 -1.2321948,-1.2322 z"
			id="path862"
		/>
		<path
			style="fill:{blendColor(
				'#858585',
				targetColor,
			)};fill-opacity:1;stroke:#000000;stroke-width:0.5291667;stroke-linecap:round;stroke-linejoin:round;stroke-miterlimit:4;stroke-dasharray:none;stroke-opacity:1"
			d="m 6.9057432,283.37158 -2.031622,-2.03162 -3.8033849,3.80338 2.0316219,2.03162 z"
			id="path860"
		/>
		<path
			style="fill:{blendColor(
				'#858585',
				targetColor,
			)};fill-opacity:1;stroke:#000000;stroke-width:0.5291667;stroke-linecap:round;stroke-linejoin:round;stroke-miterlimit:4;stroke-dasharray:none;stroke-opacity:1"
			d="m 3.1095737,288.7269 -0.363569,-0.36357 -1.1024882,1.10249 1.6156153,1.61562 1.1024881,-1.10249 z"
			id="path868"
		/>
	</g>
</svg>
