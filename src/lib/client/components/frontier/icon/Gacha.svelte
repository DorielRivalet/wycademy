<script lang="ts">
	import { blendColor } from '$lib/client/modules/color-blend';
	interface Props {
		color?: string;
	}

	let { color = '#ffffff' }: Props = $props();

	// TODO to icon generator

	let targetColor = $derived(color);
</script>

<!-- Created with Inkscape (http://www.inkscape.org/) -->

<svg
	width="100%"
	height="100%"
	viewBox="0 0 128 128"
	version="1.1"
	id="svg5"
	xml:space="preserve"
	xmlns:xlink="http://www.w3.org/1999/xlink"
	xmlns="http://www.w3.org/2000/svg"
	data-license="https://creativecommons.org/licenses/by-nc-sa/4.0/"
	data-author="Doriel Rivalet"
>
	<defs id="defs2">
		<linearGradient id="linearGradient4">
			<stop
				style="stop-color:{blendColor('#ffffff', targetColor)};stop-opacity:1;"
				offset="0"
				id="stop4"
			/>
			<stop
				style="stop-color:{blendColor('#cbcbcb', targetColor)};stop-opacity:1;"
				offset="1"
				id="stop5"
			/>
		</linearGradient>
		<linearGradient
			xlink:href="#linearGradient4"
			id="linearGradient5"
			x1="65"
			y1="5"
			x2="65"
			y2="120"
			gradientUnits="userSpaceOnUse"
		/>
	</defs>
	<path
		style="fill:url(#linearGradient5);fill-opacity:1;fill-rule:evenodd;stroke:#000000;stroke-width:10;stroke-linecap:round;stroke-linejoin:round;stroke-miterlimit:2.6;stroke-dasharray:none;stroke-opacity:1;paint-order:stroke fill markers"
		d="m 25,90.000001 c 26.792328,40.325189 53.456965,39.673739 80,0 v -55 c -26.309017,-35.39600655 -52.958296,-37.1168409 -80,0 z"
		id="path1"
	/>
	<path
		style="fill:{blendColor(
			'#bfbfbf',
			targetColor,
		)};fill-opacity:1;fill-rule:evenodd;stroke:none;stroke-width:10;stroke-linecap:round;stroke-linejoin:round;stroke-miterlimit:2.6;stroke-dasharray:none;stroke-opacity:1;paint-order:stroke fill markers"
		d="M 64.999999,103.13743 90.000003,82.492918 c 0,0 -7.140058,-40.424982 -7.144479,-40.430595 L 82.130312,30 72.339943,50 h -7.339942 z"
		id="path2"
	/>
	<path
		style="fill:{blendColor(
			'#bfbfbf',
			targetColor,
		)};fill-opacity:1;fill-rule:evenodd;stroke:none;stroke-width:10;stroke-linecap:round;stroke-linejoin:round;stroke-miterlimit:2.6;stroke-dasharray:none;stroke-opacity:1;paint-order:stroke fill markers"
		d="M 64.999999,103.13743 40.000001,82.492918 c 0,0 7.140052,-40.424982 7.144473,-40.430595 L 47.869686,30 57.660055,50 h 7.339942 z"
		id="path3"
	/>
	<path
		style="fill:none;fill-rule:evenodd;stroke:#000000;stroke-width:5;stroke-linejoin:round;stroke-miterlimit:2.6;paint-order:stroke markers fill;stroke-opacity:1;stroke-dasharray:none;stroke-linecap:round"
		d="M 64.999999,103.13743 90.000001,82.492918 82.855524,42.062323 82.130312,30 72.339943,50 H 57.660055 L 47.869686,30 47.095833,42.068749 40.000002,82.492918 Z"
		id="path4"
	/></svg
>
