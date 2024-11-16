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
	xmlns="http://www.w3.org/2000/svg"
	width={size}
	viewBox="0 0 16.933333 16.933334"
	version="1.1"
	id="svg4846"
>
	<defs id="defs4840" />

	<g id="layer2">
		<path
			style="opacity:1;vector-effect:none;fill:{blendColor(
				'#d5d5d5',
				targetColor,
			)};fill-opacity:1;fill-rule:evenodd;stroke:#000000;stroke-width:0.5291667;stroke-linecap:round;stroke-linejoin:round;stroke-miterlimit:4;stroke-dasharray:none;stroke-dashoffset:0;stroke-opacity:1"
			d="M 8.4666673,2.6458278 3.4395838,7.6729113 2.9104171,8.995828 v 4.762501 H 8.4666673 14.022917 V 8.995828 L 13.493751,7.6729113 Z"
			id="path905"
		/>
		<path
			style="opacity:1;vector-effect:none;fill:none;fill-opacity:1;fill-rule:evenodd;stroke:#000000;stroke-width:0.5291667;stroke-linecap:butt;stroke-linejoin:round;stroke-miterlimit:4;stroke-dasharray:none;stroke-dashoffset:0;stroke-opacity:1"
			d="M 5.0270838,6.0854112 10.054167,9.5249946"
			id="path923"
		/>
		<path
			style="opacity:1;vector-effect:none;fill:none;fill-opacity:1;fill-rule:evenodd;stroke:#000000;stroke-width:0.5291667;stroke-linecap:butt;stroke-linejoin:round;stroke-miterlimit:4;stroke-dasharray:none;stroke-dashoffset:0;stroke-opacity:1"
			d="M 11.112501,5.2916612 8.2020839,8.2020779"
			id="path925"
		/>
		<path
			style="opacity:1;vector-effect:none;fill:none;fill-opacity:1;fill-rule:evenodd;stroke:#000000;stroke-width:0.5291667;stroke-linecap:butt;stroke-linejoin:round;stroke-miterlimit:4;stroke-dasharray:none;stroke-dashoffset:0;stroke-opacity:1"
			d="M 13.758334,8.2020779 2.9104171,12.435412"
			id="path927"
		/>
		<path
			style="opacity:1;vector-effect:none;fill:{blendColor(
				'#d5d5d5',
				targetColor,
			)};fill-opacity:1;fill-rule:evenodd;stroke:#000000;stroke-width:0.5291667;stroke-linecap:butt;stroke-linejoin:round;stroke-miterlimit:4;stroke-dasharray:none;stroke-dashoffset:0;stroke-opacity:1"
			d="m 3.4395838,3.7041612 -1.8520834,-1e-7 1.8520833,-1.8520833 1.8520834,1.8520833 z"
			id="path931"
		/>
		<path
			style="opacity:1;vector-effect:none;fill:{blendColor(
				'#d5d5d5',
				targetColor,
			)};fill-opacity:1;fill-rule:evenodd;stroke:#000000;stroke-width:0.5291667;stroke-linecap:butt;stroke-linejoin:round;stroke-miterlimit:4;stroke-dasharray:none;stroke-dashoffset:0;stroke-opacity:1"
			d="m 13.49375,3.7041613 1.852083,-2e-7 -1.852083,-1.8520832 -1.852083,1.8520832 z"
			id="path931-4"
		/>
		<path
			style="opacity:1;vector-effect:none;fill:{blendColor(
				'#ffffff',
				targetColor,
			)};fill-opacity:1;fill-rule:evenodd;stroke:#000000;stroke-width:0.5291667;stroke-linecap:butt;stroke-linejoin:round;stroke-miterlimit:4;stroke-dasharray:none;stroke-dashoffset:0;stroke-opacity:1"
			d="m 14.022917,13.758329 v 2.116666 H 2.9104171 v -2.116666 z"
			id="path951"
		/>
		<path
			id="path3959-3-6"
			d="M 8.466667,1.0583278 7.9375001,2.1166578 6.879167,2.6458278 7.9375001,3.1749979 8.466667,4.2333278 8.995834,3.1749979 10.054167,2.6458278 8.995834,2.1166578 Z"
			style="display:inline;opacity:1;vector-effect:none;fill:{blendColor(
				'#ffffff',
				targetColor,
			)};fill-opacity:1;fill-rule:evenodd;stroke:#000000;stroke-width:0.5291667;stroke-linecap:butt;stroke-linejoin:round;stroke-miterlimit:4;stroke-dasharray:none;stroke-dashoffset:0;stroke-opacity:1"
		/>
	</g>
</svg>
