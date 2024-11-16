<!--
  ~ © 2023 Doriel Rivalet
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

<svg
	width={size}
	xmlns="http://www.w3.org/2000/svg"
	viewBox="0 0 16.933333 16.933334"
	version="1.1"
	id="svg8"
>
	<defs id="defs2" />

	<g id="layer1">
		<path
			style="fill:{blendColor(
				'#ffffff',
				targetColor,
			)};fill-opacity:1;stroke:#000000;stroke-width:0.52916667;stroke-linecap:round;stroke-linejoin:round;stroke-miterlimit:4;stroke-dasharray:none;stroke-opacity:1"
			d="m 8.1270143,4.8709992 c 0,0 0.2276861,-2.391213 0.440201,-2.7709781 0.2125237,-0.379765 3.3616887,-0.9283144 3.3616887,-0.9283144 0,0 -1.101239,2.8482378 -1.255801,2.9959239 -0.154562,0.1476861 -1.9859726,1.0763335 -1.9859726,1.0763335 z"
			id="path906"
		/>
		<path
			style="fill:none;stroke:#000000;stroke-width:0.52916667;stroke-linecap:round;stroke-linejoin:round;stroke-miterlimit:4;stroke-dasharray:none;stroke-opacity:1"
			d="M 8.3112313,5.1223175 9.4521624,3.3045484"
			id="path908"
		/>
		<path
			style="fill:{blendColor(
				'#858585',
				targetColor,
			)};fill-opacity:1;stroke:#000000;stroke-width:0.44979167;stroke-linecap:round;stroke-linejoin:round;stroke-miterlimit:4;stroke-dasharray:none;stroke-opacity:1"
			d="M 8.4666505,7.9144017 9.4111846,7.6010996 8.6871304,5.2439641 8.1270143,4.8709992 3.9876419,4.4085239 4.0149664,5.7661146 7.5259212,6.034649 7.8674505,7.675692 Z"
			id="path904"
		/>
		<path
			id="path862"
			style="fill:{blendColor(
				'#d0d0d0',
				targetColor,
			)};fill-opacity:1;stroke:none;stroke-width:0.52916667;stroke-linecap:round;stroke-linejoin:round;stroke-miterlimit:4;stroke-dasharray:none;stroke-opacity:1"
			d="m 6.569617,7.2878023 -2.3224023,0.865292 -1.4754363,2.1184317 1.393445,3.908673 3.1421189,1.581374 1.1593082,-0.984631 1.1593438,0.984631 3.1420837,-1.581374 1.393477,-3.908673 -1.475442,-2.1184317 -2.322429,-0.865292 -1.8970335,0.6266006 z"
		/>
		<path
			style="fill:{blendColor(
				'#ffffff',
				targetColor,
			)};fill-opacity:1;stroke:none;stroke-width:0.52916667;stroke-linecap:round;stroke-linejoin:round;stroke-miterlimit:4;stroke-dasharray:none;stroke-dashoffset:0;stroke-opacity:1"
			d="M 7.3073423,15.761573 8.4666504,14.776942 9.8082943,13.400784 8.3527544,11.563315 7.6776412,10.784464 8.4666504,7.9144028 6.569617,7.2878023 4.2472146,8.1530941 2.7717784,10.271526 l 1.393445,3.908673 z"
			id="path1543"
		/>
		<path
			style="fill:{blendColor(
				'#ffffff',
				targetColor,
			)};fill-opacity:1;stroke:#000000;stroke-width:10.53020861;stroke-linecap:round;stroke-linejoin:round;stroke-miterlimit:4;stroke-dasharray:none;stroke-opacity:1"
			id="path893"
			d="m 158.37201,127.37797 -19.65869,-9.24631 -21.54071,2.82071 9.24631,-19.65869 -2.82072,-21.540712 19.6587,9.246311 21.54071,-2.820716 -9.24631,19.658697 z"
			transform="matrix(0.03348944,0.02559215,-0.02343536,0.03657152,9.0041335,2.9093581)"
		/>
		<path
			style="fill:none;stroke:#000000;stroke-width:0.52916667;stroke-linecap:round;stroke-linejoin:round;stroke-miterlimit:4;stroke-dasharray:none;stroke-opacity:1"
			d="M 8.4666504,14.776942 9.8082944,13.400784 8.3527546,11.563315 6.9905903,12.865304 7.7334199,13.753782 8.3975034,13.12921"
			id="path928"
		/>
		<path
			style="fill:none;fill-opacity:1;stroke:#000000;stroke-width:0.52916667;stroke-linecap:round;stroke-linejoin:round;stroke-miterlimit:4;stroke-dasharray:none;stroke-dashoffset:0;stroke-opacity:1"
			d="M 8.4666504,14.776942 7.3073423,15.761573 4.1652234,14.180199 2.7717784,10.271526 4.2472146,8.1530941 6.569617,7.2878023 8.4666504,7.9144016 10.363684,7.2878023 l 2.322429,0.8652918 1.475442,2.1184319 -1.393477,3.908673 -3.1420838,1.581374 z"
			id="path1532"
		/>
	</g>
</svg>
