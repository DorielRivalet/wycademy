<!-- Created with Inkscape (http://www.inkscape.org/) -->
<script lang="ts">
	import { blendColor } from '$lib/client/modules/color-blend';
	import { RarityColors } from '$lib/client/modules/frontier/objects';
	import type { FrontierRarity } from '$lib/client/modules/frontier/types';
	export let rarity: FrontierRarity = 1;
	export let size = '100%';
	export let color = '';

	$: targetColor =
		color === '' ? RarityColors[rarity - 1] ?? RarityColors[0] : color;
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
	id="svg4846"
>
	<defs id="defs4840" />

	<g id="layer1" transform="translate(0,-280.06665)">
		<path
			style="fill:{blendColor(
				'#99999B',
				targetColor,
			)};stroke:#000000;stroke-width:0.52916667;stroke-linecap:round;stroke-linejoin:round;stroke-opacity:1;stroke-miterlimit:4;stroke-dasharray:none;fill-opacity:1"
			d="m 3.6616445,286.67651 v -0.77958 h -1.358352 l -1.43512842,1.43513 v 1.81311 H 3.4608445 v -1.99619 z"
			id="path949"
		/>
		<path
			style="fill:{blendColor(
				'#99999B',
				targetColor,
			)};stroke:#000000;stroke-width:0.5291667;stroke-linecap:round;stroke-linejoin:round;stroke-miterlimit:4;stroke-dasharray:none;stroke-opacity:1;fill-opacity:1"
			d="m 13.276563,286.67651 v -0.77958 h 1.358351 l 1.435129,1.43513 v 1.81311 h -2.59268 v -1.99619 z"
			id="path949-3"
		/>
		<path
			style="fill:{blendColor(
				'#99999B',
				targetColor,
			)};fill-opacity:1;stroke:#000000;stroke-width:0.5291667;stroke-linecap:round;stroke-linejoin:round;stroke-miterlimit:4;stroke-dasharray:none;stroke-opacity:1"
			d="m 12.532423,290.42084 -0.487233,0.48723 v 0.66441 l -0.552202,0.37798 h -1.092586 l -0.738236,-0.73824 0.791388,-0.79138 z"
			id="path1108-5"
		/>
		<path
			style="fill:{blendColor(
				'#99999B',
				targetColor,
			)};fill-opacity:1;stroke:#000000;stroke-width:2;stroke-linecap:round;stroke-linejoin:round;stroke-miterlimit:4;stroke-dasharray:none;stroke-opacity:1"
			d="M 27.5 27.392578 L 27.5 30.964844 L 24.375 34.044922 L 21.160156 35.339844 L 16.652344 35.25 L 16.652344 39.134766 L 24.509766 39.134766 L 27.5 42.125 L 32.009766 42.125 L 36.517578 42.125 L 39.509766 39.134766 L 47.367188 39.134766 L 47.367188 35.25 L 42.857422 35.339844 L 39.642578 34.044922 L 36.517578 30.964844 L 36.517578 27.392578 L 32.009766 27.392578 L 27.5 27.392578 z "
			transform="matrix(0.26458334,0,0,0.26458334,0,280.06665)"
			id="path965"
		/>
		<path
			style="fill:{blendColor(
				'#F4F4F4',
				targetColor,
			)};stroke:#000000;stroke-width:0.52916667;stroke-linecap:round;stroke-linejoin:round;stroke-opacity:1;stroke-miterlimit:4;stroke-dasharray:none;fill-opacity:1"
			d="m 1.5000931,289.16879 -0.2834822,2.72852 h 2.0434339 l 0.4015997,-2.48047 v -0.31892 z"
			id="path953"
		/>
		<path
			style="fill:{blendColor(
				'#F4F4F4',
				targetColor,
			)};stroke:#000000;stroke-width:0.52916667;stroke-linecap:round;stroke-linejoin:round;stroke-opacity:1;stroke-miterlimit:4;stroke-dasharray:none;fill-opacity:1"
			d="m 6.2129838,285.94418 1.0630581,1.06306 v 1.25204 l -0.826823,0.81502 -0.8504465,0.34254 H 3.6616445 v -2.74033 l 0.6850817,-0.75595 z"
			id="path947"
		/>
		<path
			style="fill:{blendColor(
				'#F4F4F4',
				targetColor,
			)};stroke:#000000;stroke-width:0.52916667;stroke-linecap:round;stroke-linejoin:round;stroke-opacity:1;stroke-miterlimit:4;stroke-dasharray:none;fill-opacity:1"
			d="m 1.2166109,291.89731 v 1.26385 l 2.0434339,-0.0236 0,-1.24023 z"
			id="path955"
		/>
		<path
			style="fill:{blendColor(
				'#F4F4F4',
				targetColor,
			)};stroke:#000000;stroke-width:0.52916667;stroke-linecap:round;stroke-linejoin:round;stroke-opacity:1;stroke-miterlimit:4;stroke-dasharray:none;fill-opacity:1"
			d="M 0.56696429,293.00761 H 3.7797619 v 1.004 H 0.56696427 Z"
			id="path957"
		/>
		<path
			style="fill:{blendColor(
				'#99999B',
				targetColor,
			)};stroke:#000000;stroke-width:0.52916667;stroke-linecap:round;stroke-linejoin:round;stroke-opacity:1;stroke-miterlimit:4;stroke-dasharray:none;fill-opacity:1"
			d="m 1.2284226,293.95255 h 2.1733632 l 0,1.65955 H 2.9080544 l -0.00742,-0.57755 -0.1491637,-0.002 -0.034766,1.52467 H 1.8449964 L 1.2284226,295.5117 Z"
			id="path963"
		/>
		<path
			style="fill:{blendColor(
				'#F4F4F4',
				targetColor,
			)};stroke:#000000;stroke-width:2;stroke-linecap:round;stroke-linejoin:round;stroke-miterlimit:4;stroke-dasharray:none;stroke-opacity:1;fill-opacity:1"
			d="M 27.5 42.125 L 24.708984 44.916016 L 20.580078 44.916016 L 20.580078 47.527344 L 32.009766 47.527344 L 43.4375 47.527344 L 43.4375 44.916016 L 39.308594 44.916016 L 36.517578 42.125 L 32.009766 42.125 L 27.5 42.125 z "
			transform="matrix(0.26458334,0,0,0.26458334,0,280.06665)"
			id="path967"
		/>
		<path
			style="fill:{blendColor(
				'#F4F4F4',
				targetColor,
			)};stroke:#000000;stroke-width:2;stroke-linecap:round;stroke-linejoin:round;stroke-miterlimit:4;stroke-dasharray:none;stroke-opacity:1;fill-opacity:1"
			d="M 20.580078 47.527344 L 20.580078 50.740234 L 22.521484 52.683594 L 32.009766 52.683594 L 41.496094 52.683594 L 43.4375 50.740234 L 43.4375 47.527344 L 32.009766 47.527344 L 20.580078 47.527344 z "
			transform="matrix(0.26458334,0,0,0.26458334,0,280.06665)"
			id="path969"
		/>
		<path
			style="fill:{blendColor(
				'#99999B',
				targetColor,
			)};fill-opacity:1;stroke:#000000;stroke-width:2;stroke-linecap:round;stroke-linejoin:round;stroke-miterlimit:4;stroke-dasharray:none;stroke-opacity:1"
			d="M 23.972656 52.683594 L 21.328125 55.328125 L 17.857422 55.328125 L 17.857422 59.982422 L 32.009766 59.982422 L 46.162109 59.982422 L 46.162109 55.328125 L 42.689453 55.328125 L 40.044922 52.683594 L 32.009766 52.683594 L 23.972656 52.683594 z "
			transform="matrix(0.26458334,0,0,0.26458334,0,280.06665)"
			id="path971"
		/>
		<path
			style="opacity:1;fill:#000000;fill-opacity:1;stroke:none;stroke-width:0.5291667;stroke-linecap:round;stroke-linejoin:round;stroke-miterlimit:4;stroke-dasharray:none;stroke-dashoffset:0;stroke-opacity:1;paint-order:normal"
			d="m 5.0199965,288.51913 a 0.41341147,0.41341147 0 0 1 -0.4134115,0.41342 0.41341147,0.41341147 0 0 1 -0.4134114,-0.41342 0.41341147,0.41341147 0 0 1 0.4134114,-0.41341 0.41341147,0.41341147 0 0 1 0.4134115,0.41341 z"
			id="path973-5"
		/>
		<path
			style="opacity:1;fill:#000000;fill-opacity:1;stroke:none;stroke-width:0.5291667;stroke-linecap:round;stroke-linejoin:round;stroke-miterlimit:4;stroke-dasharray:none;stroke-dashoffset:0;stroke-opacity:1;paint-order:normal"
			d="m 6.7386066,293.27927 a 0.20670573,0.20670573 0 0 1 -0.2067057,0.2067 0.20670573,0.20670573 0 0 1 -0.2067058,-0.2067 0.20670573,0.20670573 0 0 1 0.2067058,-0.20671 0.20670573,0.20670573 0 0 1 0.2067057,0.20671 z"
			id="path973-5-8"
		/>
		<path
			style="opacity:1;fill:#000000;fill-opacity:1;stroke:none;stroke-width:0.5291667;stroke-linecap:round;stroke-linejoin:round;stroke-miterlimit:4;stroke-dasharray:none;stroke-dashoffset:0;stroke-opacity:1;paint-order:normal"
			d="m 7.4295947,293.29111 a 0.20670573,0.20670573 0 0 1 -0.2067058,0.2067 0.20670573,0.20670573 0 0 1 -0.2067057,-0.2067 0.20670573,0.20670573 0 0 1 0.2067057,-0.20671 0.20670573,0.20670573 0 0 1 0.2067058,0.20671 z"
			id="path973-5-8-7"
		/>
		<path
			style="opacity:1;fill:#000000;fill-opacity:1;stroke:none;stroke-width:0.5291667;stroke-linecap:round;stroke-linejoin:round;stroke-miterlimit:4;stroke-dasharray:none;stroke-dashoffset:0;stroke-opacity:1;paint-order:normal"
			d="m 8.1442062,293.29111 a 0.20670573,0.20670573 0 0 1 -0.2067057,0.2067 0.20670573,0.20670573 0 0 1 -0.2067058,-0.2067 0.20670573,0.20670573 0 0 1 0.2067058,-0.20671 0.20670573,0.20670573 0 0 1 0.2067057,0.20671 z"
			id="path973-5-8-7-7"
		/>
		<path
			style="fill:{blendColor(
				'#F4F4F4',
				targetColor,
			)};stroke:#000000;stroke-width:0.5291667;stroke-linecap:round;stroke-linejoin:round;stroke-miterlimit:4;stroke-dasharray:none;stroke-opacity:1;fill-opacity:1"
			d="m 15.438114,289.16879 0.283482,2.72852 h -2.043434 l -0.401599,-2.48047 v -0.31892 z"
			id="path953-3"
		/>
		<path
			style="fill:{blendColor(
				'#F4F4F4',
				targetColor,
			)};stroke:#000000;stroke-width:0.5291667;stroke-linecap:round;stroke-linejoin:round;stroke-miterlimit:4;stroke-dasharray:none;stroke-opacity:1;fill-opacity:1"
			d="m 10.725222,285.94418 -1.0630578,1.06306 v 1.25204 l 0.8268228,0.81502 0.850448,0.34254 h 1.937128 v -2.74033 l -0.685082,-0.75595 z"
			id="path947-6"
		/>
		<path
			style="fill:{blendColor(
				'#F4F4F4',
				targetColor,
			)};stroke:#000000;stroke-width:0.5291667;stroke-linecap:round;stroke-linejoin:round;stroke-miterlimit:4;stroke-dasharray:none;stroke-opacity:1;fill-opacity:1"
			d="m 15.721596,291.89731 v 1.26385 l -2.043434,-0.0236 v -1.24023 z"
			id="path955-1"
		/>
		<path
			style="fill:{blendColor(
				'#F4F4F4',
				targetColor,
			)};stroke:#000000;stroke-width:0.5291667;stroke-linecap:round;stroke-linejoin:round;stroke-miterlimit:4;stroke-dasharray:none;stroke-opacity:1;fill-opacity:1"
			d="m 16.371242,293.00761 h -3.212797 v 1.004 h 3.212797 z"
			id="path957-9"
		/>
		<path
			style="fill:{blendColor(
				'#99999B',
				targetColor,
			)};stroke:#000000;stroke-width:0.5291667;stroke-linecap:round;stroke-linejoin:round;stroke-miterlimit:4;stroke-dasharray:none;stroke-opacity:1;fill-opacity:1"
			d="m 15.709784,293.95255 h -2.173363 v 1.65955 h 0.493731 l 0.0074,-0.57755 0.149164,-0.002 0.03477,1.52467 h 0.871708 l 0.616574,-1.04552 z"
			id="path963-5"
		/>
		<path
			style="opacity:1;fill:#000000;fill-opacity:1;stroke:none;stroke-width:0.5291667;stroke-linecap:round;stroke-linejoin:round;stroke-miterlimit:4;stroke-dasharray:none;stroke-dashoffset:0;stroke-opacity:1;paint-order:normal"
			d="m 11.918211,287.11356 a 0.41341146,0.41341146 0 0 0 0.413411,0.41341 0.41341146,0.41341146 0 0 0 0.413411,-0.41341 0.41341146,0.41341146 0 0 0 -0.413411,-0.41342 0.41341146,0.41341146 0 0 0 -0.413411,0.41342 z"
			id="path973-6"
		/>
		<path
			style="opacity:1;fill:#000000;fill-opacity:1;stroke:none;stroke-width:0.5291667;stroke-linecap:round;stroke-linejoin:round;stroke-miterlimit:4;stroke-dasharray:none;stroke-dashoffset:0;stroke-opacity:1;paint-order:normal"
			d="m 11.918211,288.51913 a 0.41341146,0.41341146 0 0 0 0.413411,0.41342 0.41341146,0.41341146 0 0 0 0.413411,-0.41342 0.41341146,0.41341146 0 0 0 -0.413411,-0.41341 0.41341146,0.41341146 0 0 0 -0.413411,0.41341 z"
			id="path973-5-2"
		/>
		<path
			style="opacity:1;fill:#000000;fill-opacity:1;stroke:none;stroke-width:0.5291667;stroke-linecap:round;stroke-linejoin:round;stroke-miterlimit:4;stroke-dasharray:none;stroke-dashoffset:0;stroke-opacity:1;paint-order:normal"
			d="m 10.199599,293.27927 a 0.20670573,0.20670573 0 0 0 0.206706,0.2067 0.20670573,0.20670573 0 0 0 0.206706,-0.2067 0.20670573,0.20670573 0 0 0 -0.206706,-0.20671 0.20670573,0.20670573 0 0 0 -0.206706,0.20671 z"
			id="path973-5-8-74"
		/>
		<path
			style="opacity:1;fill:#000000;fill-opacity:1;stroke:none;stroke-width:0.5291667;stroke-linecap:round;stroke-linejoin:round;stroke-miterlimit:4;stroke-dasharray:none;stroke-dashoffset:0;stroke-opacity:1;paint-order:normal"
			d="m 9.5086122,293.29111 a 0.20670573,0.20670573 0 0 0 0.206705,0.2067 0.20670573,0.20670573 0 0 0 0.206706,-0.2067 0.20670573,0.20670573 0 0 0 -0.206706,-0.20671 0.20670573,0.20670573 0 0 0 -0.206705,0.20671 z"
			id="path973-5-8-7-3"
		/>
		<path
			style="opacity:1;fill:#000000;fill-opacity:1;stroke:none;stroke-width:0.5291667;stroke-linecap:round;stroke-linejoin:round;stroke-miterlimit:4;stroke-dasharray:none;stroke-dashoffset:0;stroke-opacity:1;paint-order:normal"
			d="m 8.7940002,293.29111 a 0.20670573,0.20670573 0 0 0 0.206706,0.2067 0.20670573,0.20670573 0 0 0 0.206705,-0.2067 0.20670573,0.20670573 0 0 0 -0.206705,-0.20671 0.20670573,0.20670573 0 0 0 -0.206706,0.20671 z"
			id="path973-5-8-7-7-5"
		/>
		<path
			style="fill:{blendColor(
				'#F4F4F4',
				targetColor,
			)};stroke:#000000;stroke-width:2;stroke-linecap:round;stroke-linejoin:round;stroke-miterlimit:4;stroke-dasharray:none;stroke-opacity:1;fill-opacity:1"
			d="M 32.009766 1.7226562 L 25.402344 5.4726562 L 21.048828 12.927734 L 32.009766 14.089844 L 42.96875 12.927734 L 38.617188 5.4726562 L 32.009766 1.7226562 z "
			transform="matrix(0.26458334,0,0,0.26458334,0,280.06665)"
			id="path943"
		/>
		<path
			style="fill:{blendColor(
				'#F4F4F4',
				targetColor,
			)};stroke:#000000;stroke-width:2;stroke-linecap:round;stroke-linejoin:round;stroke-miterlimit:4;stroke-dasharray:none;stroke-opacity:1;fill-opacity:1"
			d="M 30.580078 8.6875 L 21.048828 12.927734 L 21.048828 18.353516 L 30.625 27.927734 L 32.009766 27.927734 L 33.392578 27.927734 L 42.96875 18.353516 L 42.96875 12.927734 L 33.4375 8.6875 L 32.009766 8.6875 L 30.580078 8.6875 z "
			transform="matrix(0.26458334,0,0,0.26458334,0,280.06665)"
			id="path941"
		/>
		<path
			style="color:#000000;font-style:normal;font-variant:normal;font-weight:normal;font-stretch:normal;font-size:medium;line-height:normal;font-family:sans-serif;font-variant-ligatures:normal;font-variant-position:normal;font-variant-caps:normal;font-variant-numeric:normal;font-variant-alternates:normal;font-feature-settings:normal;text-indent:0;text-align:start;text-decoration:none;text-decoration-line:none;text-decoration-style:solid;text-decoration-color:#000000;letter-spacing:normal;word-spacing:normal;text-transform:none;writing-mode:lr-tb;direction:ltr;text-orientation:mixed;dominant-baseline:auto;baseline-shift:baseline;text-anchor:start;white-space:normal;shape-padding:0;clip-rule:nonzero;display:inline;overflow:visible;visibility:visible;opacity:1;isolation:auto;mix-blend-mode:normal;color-interpolation:sRGB;color-interpolation-filters:linearRGB;solid-color:#000000;solid-opacity:1;vector-effect:none;fill:#000000;fill-opacity:1;fill-rule:nonzero;stroke:none;stroke-width:2;stroke-linecap:round;stroke-linejoin:round;stroke-miterlimit:4;stroke-dasharray:none;stroke-dashoffset:0;stroke-opacity:1;color-rendering:auto;image-rendering:auto;shape-rendering:auto;text-rendering:auto;enable-background:accumulate"
			d="M 24.869141 14.910156 A 1.0001001 1.0001001 0 0 0 24.300781 16.710938 L 29.652344 20.859375 A 1.0001001 1.0001001 0 0 0 30.265625 21.074219 L 31.966797 21.074219 L 32.007812 21.074219 L 33.75 21.074219 A 1.0001001 1.0001001 0 0 0 34.363281 20.861328 L 39.722656 16.710938 A 1.0001001 1.0001001 0 0 0 39.117188 14.910156 A 1.0001001 1.0001001 0 0 0 38.496094 15.132812 L 33.410156 19.074219 L 32.048828 19.074219 A 1.000252 1.000252 0 0 0 32.007812 19.074219 L 30.613281 19.074219 L 25.527344 15.130859 A 1.0001001 1.0001001 0 0 0 24.869141 14.910156 z "
			transform="matrix(0.26458334,0,0,0.26458334,0,280.06665)"
			id="path945"
		/>
		<path
			style="opacity:1;fill:#000000;fill-opacity:1;stroke:none;stroke-width:0.5291667;stroke-linecap:round;stroke-linejoin:round;stroke-miterlimit:4;stroke-dasharray:none;stroke-dashoffset:0;stroke-opacity:1;paint-order:normal"
			d="m 5.0199965,287.11356 a 0.41341147,0.41341147 0 0 1 -0.4134115,0.41341 0.41341147,0.41341147 0 0 1 -0.4134114,-0.41341 0.41341147,0.41341147 0 0 1 0.4134114,-0.41342 0.41341147,0.41341147 0 0 1 0.4134115,0.41342 z"
			id="path973"
		/>
		<path
			style="fill:{blendColor(
				'#99999B',
				targetColor,
			)};stroke:#000000;stroke-width:0.52916667;stroke-linecap:round;stroke-linejoin:round;stroke-opacity:1;stroke-miterlimit:4;stroke-dasharray:none;fill-opacity:1"
			d="m 4.4057852,290.42084 0.4872326,0.48723 v 0.66441 l 0.5522018,0.37798 h 1.092586 l 0.7382365,-0.73824 -0.7913878,-0.79138 z"
			id="path1108"
		/>
	</g>
</svg>
