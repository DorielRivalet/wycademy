<!--
  ~ © 2023 Doriel Rivalet
  ~ Use of this source code is governed by a MIT license that can be
  ~ found in the LICENSE file.
-->
<script lang="ts">
	import { blendColor } from '$lib/client/modules/color-blend';
	export let color = '#ffffff';
	export let size = '100%';

	$: targetColor = color;
</script>

<svg version="1.1" id="svg2" width={size} viewBox="0 0 64 64">
	<g id="layer1" style="display:inline;opacity:0.994">
		<path
			style="fill:{blendColor(
				'#858585',
				targetColor,
			)};fill-opacity:1;stroke:#000000;stroke-width:2.33872;stroke-linecap:round;stroke-linejoin:round;stroke-miterlimit:4;stroke-dasharray:none;stroke-opacity:1;paint-order:normal"
			d="M 17.617601,37.869939 V 31.8622 L 12.180503,26.267237 5.1693589,26.219048 V 22.28533 l 7.4799471,-7.418637 4.968295,4.884999 h 6.314689 l -0.741394,18.045332 z"
			id="path986"
		/>
		<path
			style="fill:{blendColor(
				'#858585',
				targetColor,
			)};fill-opacity:1;stroke:#000000;stroke-width:2.33872;stroke-linecap:round;stroke-linejoin:round;stroke-miterlimit:4;stroke-dasharray:none;stroke-opacity:1;paint-order:normal"
			d="m 23.410894,36.666918 6.673287,-3.499703 h 3.959971 l 7.186615,-6.671304 5.243295,5.030821 4.033305,-4.192351 1.846138,8.89e-4 6.477136,6.708159 v 2.623489 h -5.756626 l -7.003284,6.598393 -6.178288,-5.541193 -6.654952,6.580166 z"
			id="path976"
		/>
		<path
			style="fill:{blendColor(
				'#858585',
				targetColor,
			)};fill-opacity:1;stroke:#000000;stroke-width:2.33872;stroke-linecap:round;stroke-linejoin:round;stroke-miterlimit:4;stroke-dasharray:none;stroke-opacity:1;paint-order:normal"
			d="m 29.475189,41.260274 v -9.842909 l 6.988946,-6.416119 h 5.939956 v -4.082985 l -3.739973,-2.989327 h -5.646626 l -9.716596,9.915821 -0.11,9.952273 z"
			id="path982"
		/>
		<path
			style="fill:{blendColor(
				'#858585',
				targetColor,
			)};fill-opacity:1;stroke:#000000;stroke-width:2.33872;stroke-linecap:round;stroke-linejoin:round;stroke-miterlimit:4;stroke-dasharray:none;stroke-opacity:1;paint-order:normal"
			d="M 21.28872,39.956408 V 11.684657 l 7.225791,-6.5152983 h 2.436447 l 3.361816,3.4817227 h 1.554346 l 3.861402,-3.4817227 h 2.785568 l 3.043313,3.4817227 h 1.759986 L 50.5807,5.1693587 h 2.529982 l 5.719959,5.5778983 v 4.119439 H 52.70735 l -4.06997,3.973619 -4.460271,0.02694 -3.862778,-4.000553 -3.850196,3.062239 h -3.446643 l -3.043311,-3.062239 -5.169963,3.759507 v 21.358139 z"
			id="path970"
		/>
		<path
			style="fill:{blendColor(
				'#ffffff',
				targetColor,
			)};fill-opacity:1;stroke:#000000;stroke-width:2.33872;stroke-linecap:round;stroke-linejoin:round;stroke-miterlimit:4;stroke-dasharray:none;paint-order:normal"
			d="m 31.839584,58.830641 h 5.48621 l 1.586847,-2.350708 1.555623,2.350708 h 4.691785 l 4.285462,-2.350708 V 51.82773 H 43.307277 L 39.13302,47.161463 h -6.115528 v -5.937644 l -3.189978,-3.35388 H 17.617601 l -3.373307,3.499701 v 15.110293 l 2.199985,2.350708 z"
			id="path857"
		/>
		<path
			style="fill:#000000;fill-opacity:1;stroke:none;stroke-width:1.66267;stroke-linecap:round;stroke-linejoin:round;stroke-miterlimit:4;stroke-dasharray:none;paint-order:normal"
			d="m 16.619354,50.629265 v -0.82938 l 2.502488,-2.488074 h 0.834163 l 2.502487,2.488074 v 0.82938 z"
			id="path899"
		/>
		<path
			style="fill:#000000;fill-opacity:1;stroke:none;stroke-width:1.66267;stroke-linecap:round;stroke-linejoin:round;stroke-miterlimit:4;stroke-dasharray:none;paint-order:normal"
			d="m 22.466862,56.484386 v -0.82938 l 2.50249,-2.488075 h 0.834161 l 2.502488,2.488075 v 0.82938 z"
			id="path899-1"
		/>
	</g>
</svg>
