<!--
  ~ © 2024 Doriel Rivalet
  ~ Use of this source code is governed by a MIT license that can be
  ~ found in the LICENSE file.
-->

<!-- Created with Inkscape (http://www.inkscape.org/) -->
<script lang="ts">
	import { blendColor } from '$lib/client/modules/color-blend';
	interface Props {
		size?: string;
		color?: string;
	}

	let { size = '100%', color = '#ffffff' }: Props = $props();

	let targetColor = $derived(color);
</script>

<svg width={size} viewBox="0 0 16.933333 16.933334" version="1.1" id="svg8">
	<g id="layer1" transform="translate(0,-280.06665)">
		<path
			style="fill:{blendColor(
				'#ffffff',
				targetColor,
			)};fill-opacity:1;stroke:#000000;stroke-width:0.5291667;stroke-linecap:round;stroke-linejoin:round;stroke-miterlimit:4;stroke-dasharray:none;stroke-opacity:1"
			d="m 8.3278412,295.48489 c 0,0 5.0575588,-5.19815 5.2830538,-5.24643 0.225497,-0.0483 0.595955,-0.0161 0.708702,-0.11265 0.112749,-0.0966 1.256337,-1.17481 1.256337,-1.17481 0,0 -1.224123,-1.38403 -1.33687,-1.38403 -0.112748,0 -0.257711,0.11265 -0.257711,0.11265 0,0 0.128856,-0.30577 0.06443,-0.40233 -0.06443,-0.0966 -1.594581,-1.7059 -1.659007,-1.7059 -0.06443,0 -0.322139,0 -0.370458,-0.0161 -0.04832,-0.0161 0.01611,-0.20922 -0.03222,-0.32187 -0.04832,-0.11265 -3.6562608,-3.66928 -3.7367938,-3.65318 -0.08054,0.0161 -1.884506,1.70589 -1.96504,1.97948 -0.08054,0.27358 -0.51542,0.99778 -0.837557,1.12653 -0.322137,0.12874 -0.612062,0.25749 -0.676489,0.37014 -0.06443,0.11265 0.257709,0.4828 0.289923,0.59546 0.03221,0.11265 -0.418779,-0.0483 -0.579848,0.0322 -0.161068,0.0805 -2.8670228,2.15651 -3.0925192,2.30134 -0.2254968,0.14484 0.8858782,0.4828 1.3046572,1.07826 0.418779,0.59545 0.708703,1.77026 1.352978,2.20479 0.644274,0.43451 1.932825,1.35184 2.238855,1.72198 0.30603,0.37015 0.869771,1.48059 1.014733,1.52887 0.144962,0.0483 0.483206,-0.28968 0.483206,-0.28968 0,0 -0.177176,0.4828 -0.128855,0.61155 0.04832,0.12874 0.676489,0.64373 0.676489,0.64373 z"
			id="path884"
		/>
		<ellipse
			style="opacity:1;fill:#4d4d4d;fill-opacity:1;stroke:#000000;stroke-width:0.5291667;stroke-linecap:round;stroke-linejoin:round;stroke-miterlimit:4;stroke-dasharray:none;stroke-dashoffset:0;stroke-opacity:1"
			id="path950"
			cx="8.4237251"
			cy="285.81161"
			rx="1.4919957"
			ry="1.4907411"
		/>
		<path
			style="fill:{blendColor(
				'#ffffff',
				targetColor,
			)};fill-opacity:1;stroke:none;stroke-width:0.5291667;stroke-linecap:butt;stroke-linejoin:miter;stroke-miterlimit:4;stroke-dasharray:none;stroke-opacity:1"
			d="m 8.0620422,284.59775 c -0.290463,0 -0.218812,0.30575 -0.355026,0.44185 -0.136215,0.1361 -0.377696,0.13946 -0.377696,0.35472 0,0.21527 0.302189,0.22579 0.376699,0.35473 0.07451,0.12895 0.14251,0.44185 0.356023,0.44185 0.213512,0 0.28151,-0.3129 0.356021,-0.44185 0.07451,-0.12894 0.376949,-0.13946 0.376949,-0.35473 0,-0.21526 -0.241731,-0.21862 -0.377945,-0.35472 -0.136214,-0.1361 -0.06456,-0.44185 -0.355025,-0.44185 z"
			id="path932"
		/>
		<ellipse
			style="opacity:1;fill:#4d4d4d;fill-opacity:1;stroke:#000000;stroke-width:0.5291667;stroke-linecap:round;stroke-linejoin:round;stroke-miterlimit:4;stroke-dasharray:none;stroke-dashoffset:0;stroke-opacity:1"
			id="path950-4"
			cx="5.8839116"
			cy="289.29382"
			rx="1.4919957"
			ry="1.4907411"
		/>
		<path
			style="fill:{blendColor(
				'#ffffff',
				targetColor,
			)};fill-opacity:1;stroke:none;stroke-width:0.5291667;stroke-linecap:butt;stroke-linejoin:miter;stroke-miterlimit:4;stroke-dasharray:none;stroke-opacity:1"
			d="m 5.5222322,288.07993 c -0.290463,0 -0.218813,0.30575 -0.355027,0.44185 -0.136214,0.1361 -0.377696,0.13946 -0.377696,0.35473 0,0.21527 0.30219,0.22578 0.3767,0.35473 0.07451,0.12895 0.14251,0.44185 0.356023,0.44185 0.213512,0 0.28151,-0.3129 0.356021,-0.44185 0.07451,-0.12895 0.37695,-0.13946 0.37695,-0.35473 0,-0.21527 -0.241732,-0.21863 -0.377947,-0.35473 -0.136213,-0.1361 -0.06456,-0.44185 -0.355024,-0.44185 z"
			id="path932-3"
		/>
		<ellipse
			style="opacity:1;fill:#4d4d4d;fill-opacity:1;stroke:#000000;stroke-width:0.5291667;stroke-linecap:round;stroke-linejoin:round;stroke-miterlimit:4;stroke-dasharray:none;stroke-dashoffset:0;stroke-opacity:1"
			id="path950-4-6"
			cx="10.861027"
			cy="289.38486"
			rx="1.4919957"
			ry="1.4907411"
		/>
		<path
			style="fill:{blendColor(
				'#ffffff',
				targetColor,
			)};fill-opacity:1;stroke:none;stroke-width:0.5291667;stroke-linecap:butt;stroke-linejoin:miter;stroke-miterlimit:4;stroke-dasharray:none;stroke-opacity:1"
			d="m 10.499348,288.17097 c -0.290462,0 -0.218811,0.30575 -0.355025,0.44185 -0.136216,0.1361 -0.3776968,0.13946 -0.3776968,0.35473 0,0.21526 0.3021888,0.22578 0.3766998,0.35473 0.07451,0.12894 0.14251,0.44185 0.356022,0.44185 0.213513,0 0.281511,-0.31291 0.356022,-0.44185 0.07451,-0.12895 0.37695,-0.13947 0.37695,-0.35473 0,-0.21527 -0.241732,-0.21863 -0.377947,-0.35473 -0.136213,-0.1361 -0.06456,-0.44185 -0.355025,-0.44185 z"
			id="path932-3-3"
		/>
	</g>
</svg>
