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
	xmlns:cc="http://creativecommons.org/ns#"
	xmlns:rdf="http://www.w3.org/1999/02/22-rdf-syntax-ns#"
	xmlns:svg="http://www.w3.org/2000/svg"
	xmlns="http://www.w3.org/2000/svg"
	xmlns:sodipodi="http://sodipodi.sourceforge.net/DTD/sodipodi-0.dtd"
	xmlns:inkscape="http://www.inkscape.org/namespaces/inkscape"
	width={size}
	viewBox="0 0 16.933333 16.933334"
	version="1.1"
	id="svg8"
>
	<defs id="defs2" />

	<g id="layer1" transform="translate(0,-280.06665)">
		<path
			style="fill:{blendColor(
				'#d5d5d5',
				targetColor,
			)};fill-opacity:1;stroke:none;stroke-width:0.26458335px;stroke-linecap:butt;stroke-linejoin:miter;stroke-opacity:1"
			d="m 8.4666674,281.85382 -0.2503021,1.8e-4 -0.586333,0.75779 -0.1359678,1.34457 -0.8364566,-0.0718 -1.0099699,2.18763 -1.7599509,-1.08227 -0.4628231,0.53259 -1.0441224,-0.72474 -0.6650846,0.20268 0.2288492,0.72945 0.1935038,2.61778 12.541037,0.18205 0.692758,-3.73196 h -0.819213 l -1.152967,1.24398 0.02023,-1.05183 -2.134162,1.08227 -1.00997,-2.18763 H 9.6893959 l -0.3860911,-1.27279 z"
			id="path933"
		/>
		<path
			style="fill:{blendColor(
				'#ffffff',
				targetColor,
			)};fill-opacity:1;stroke:none;stroke-width:0.26458335px;stroke-linecap:butt;stroke-linejoin:miter;stroke-opacity:1"
			d="m 8.4666676,284.45714 -0.7509069,1.45176 -0.7221221,-0.35043 -1.1588999,2.08815 -0.3360308,-0.46493 -1.0224848,-0.32165 -0.2934796,0.71524 -1.9667504,-1.02999 0.1576906,3.2752 2.8459371,1.14451 h 3.2470468 3.2470464 l 2.845938,-1.14451 0.157689,-3.2752 -1.96675,1.02999 -0.29348,-0.71524 -1.022484,0.32165 -0.336031,0.46493 -1.1588994,-2.08815 -0.7221221,0.35043 z"
			id="path915"
		/>
		<path
			style="fill:{blendColor(
				'#4d4d4d',
				targetColor,
			)};fill-opacity:1;stroke:#000000;stroke-width:0.5291667;stroke-linecap:round;stroke-linejoin:round;stroke-miterlimit:4;stroke-dasharray:none;stroke-opacity:1"
			d="m 8.4666676,291.67273 -3.9115993,0.95115 v 0.85854 c 0,0 0.013855,1.73021 1.7302146,1.73021 h 2.1813847 2.1813844 c 1.716361,0 1.730214,-1.73021 1.730214,-1.73021 v -0.85854 z"
			id="path844"
		/>
		<path
			style="fill:{blendColor(
				'#4d4d4d',
				targetColor,
			)};fill-opacity:1;stroke:#000000;stroke-width:0.5291667;stroke-linecap:round;stroke-linejoin:round;stroke-miterlimit:4;stroke-dasharray:none;stroke-opacity:1"
			d="m 8.4666676,291.92303 -1.9999155,0.28785 v 0.8066 c 0,0 0.049851,0.92112 0.9211125,0.92112 h 1.078803 1.0788032 c 0.8712612,0 0.9211112,-0.92112 0.9211112,-0.92112 v -0.8066 z"
			id="path842"
		/>
		<path
			style="fill:none;stroke:#000000;stroke-width:0.5291667;stroke-linecap:round;stroke-linejoin:round;stroke-miterlimit:4;stroke-dasharray:none;stroke-opacity:1"
			d="m 8.2163653,281.854 -0.5863331,0.75779 -0.2002419,1.7665 -0.1858493,-0.49371 H 6.6576078 l -1.0099699,2.18763 v 2.72079 l 2.8190297,1.48617 2.8190294,-1.48617 v -2.72079 l -1.00997,-2.18763 H 9.6893944 L 9.5035449,284.37829 9.3033031,282.61179 8.7169699,281.854 H 8.4666676 Z"
			id="path834"
		/>
		<path
			style="fill:none;stroke:#000000;stroke-width:0.5291667;stroke-linecap:round;stroke-linejoin:round;stroke-miterlimit:4;stroke-dasharray:none;stroke-opacity:1"
			d="M 8.4666689,290.96483 H 5.219891 l -2.846295,-1.14424 -0.4290898,-4.09067 -0.3829781,-0.93213 h 0.8192134 l 1.1529666,1.24398 -0.02023,-1.05182 h 0.3742085 l 1.4058098,0.92034 0.3539809,2.88242 2.8191896,1.48672 z"
			id="path836"
		/>
		<path
			style="fill:{blendColor(
				'#4d4d4d',
				targetColor,
			)};fill-opacity:1;stroke:#000000;stroke-width:0.5291667;stroke-linecap:round;stroke-linejoin:round;stroke-miterlimit:4;stroke-dasharray:none;stroke-opacity:1"
			d="m 1.8586867,291.98033 c 0,0 3.4613235,-1.07272 4.2908967,-1.07272 0.8295735,0 1.1442392,0 1.1442392,0 v 1.25866 c -2.2741751,0 -4.3195028,1.27297 -4.8344104,1.31587 -0.5149076,0.0429 -0.6007255,-1.50181 -0.6007255,-1.50181 z"
			id="path838"
		/>
		<path
			style="fill:{blendColor(
				'#4d4d4d',
				targetColor,
			)};fill-opacity:1;stroke:#000000;stroke-width:0.5291667;stroke-linecap:round;stroke-linejoin:round;stroke-miterlimit:4;stroke-dasharray:none;stroke-opacity:1"
			d="m 7.2940014,290.90743 v 0.95991 c 0,0 0.045221,0.79221 0.7922067,0.79221 h 0.3804595 0.3804595 c 0.7469857,0 0.7922067,-0.79221 0.7922067,-0.79221 v -0.95991 H 8.4666676 Z"
			id="path840"
		/>
		<path
			style="fill:{blendColor(
				'#d5d5d5',
				targetColor,
			)};fill-opacity:1;stroke:#000000;stroke-width:0.5291667;stroke-linecap:round;stroke-linejoin:round;stroke-miterlimit:4;stroke-dasharray:none;stroke-opacity:1"
			d="M 8.4666676,287.76113 6.664491,288.5477 v 0.74341 l 1.8021766,0.98806 1.8021764,-0.98806 v -0.74341 z"
			id="path846"
		/>
		<path
			style="fill:none;stroke:#000000;stroke-width:0.5291667;stroke-linecap:round;stroke-linejoin:round;stroke-miterlimit:4;stroke-dasharray:none;stroke-opacity:1"
			d="m 8.4666648,290.96483 h 3.2467772 l 2.846295,-1.14424 0.429089,-4.09067 0.382979,-0.93213 h -0.819213 l -1.152967,1.24398 0.02023,-1.05182 H 13.04565 l -1.405808,0.92034 -0.353981,2.88242 -2.8191901,1.48672 z"
			id="path836-7"
		/>
		<path
			style="fill:{blendColor(
				'#4d4d4d',
				targetColor,
			)};fill-opacity:1;stroke:#000000;stroke-width:0.5291667;stroke-linecap:round;stroke-linejoin:round;stroke-miterlimit:4;stroke-dasharray:none;stroke-opacity:1"
			d="m 15.074646,291.98033 c 0,0 -3.461322,-1.07272 -4.290896,-1.07272 -0.8295727,0 -1.1442389,0 -1.1442389,0 v 1.25866 c 2.2741749,0 4.3195019,1.27297 4.8344099,1.31587 0.514908,0.0429 0.600725,-1.50181 0.600725,-1.50181 z"
			id="path838-2"
		/>
	</g>
</svg>
