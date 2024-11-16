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

<svg width={size} viewBox="0 0 16.933333 16.933334" version="1.1" id="svg4846">
	<g id="layer1" transform="translate(0,-280.06665)">
		<path
			style="display:inline;opacity:1;vector-effect:none;fill:{blendColor(
				'#d5d5d5',
				targetColor,
			)};fill-opacity:1;fill-rule:evenodd;stroke:#000000;stroke-width:0.52916667;stroke-linecap:butt;stroke-linejoin:round;stroke-miterlimit:4;stroke-dasharray:none;stroke-dashoffset:0;stroke-opacity:1"
			d="m 10.31875,290.38541 v 1.85208 c 0,0 0,0.26458 0.264583,0.26458 h 2.645834 c 0,0 0.79375,0 0.79375,0.79375 v 1.5875 c 0,0 0,0.79375 -0.79375,0.79375 H 8.2020837 c -0.132292,0 -0.4630211,-0.26458 -0.7606771,-0.56224 -0.297656,-0.29765 -0.5622399,-0.62838 -0.5622399,-0.76067 v -3.96875 z"
			id="path4826"
		/>
		<path
			style="display:inline;opacity:1;vector-effect:none;fill:{blendColor(
				'#ffffff',
				targetColor,
			)};fill-opacity:1;fill-rule:evenodd;stroke:#000000;stroke-width:0.52916667;stroke-linecap:butt;stroke-linejoin:round;stroke-miterlimit:4;stroke-dasharray:none;stroke-dashoffset:0;stroke-opacity:1"
			d="m 1.8520834,289.32707 c 0,1.05834 1.0583334,1.05834 1.0583334,1.05834 H 14.022916 c 0,0 1.058334,0 1.058334,-1.05834 0,0 -5.8208335,-7.9375 -6.0854163,-7.9375 -0.2645842,0 -0.2645842,0 -0.529167,0 -0.264583,0 -6.6145833,7.9375 -6.6145833,7.9375 z"
			id="path4822"
		/>
		<path
			style="display:inline;opacity:1;vector-effect:none;fill:#000000;fill-opacity:1;fill-rule:evenodd;stroke:none;stroke-width:0.99999994;stroke-linecap:butt;stroke-linejoin:miter;stroke-miterlimit:4;stroke-dasharray:none;stroke-dashoffset:0;stroke-opacity:1"
			d="M 25 13 L 25 14 L 28 17 L 29 17 L 32 14 L 32 13 L 25 13 z M 33 13 L 33 14 L 36 17 L 37 17 L 40 14 L 40 13 L 33 13 z M 19 21 L 19 22 L 22 25 L 24 25 L 27 22 L 27 21 L 19 21 z M 28 21 L 28 22 L 32 25 L 33 25 L 37 22 L 37 21 L 28 21 z M 38 21 L 38 22 L 41 25 L 43 25 L 46 22 L 46 21 L 38 21 z M 14 29 L 14 30 L 19 34 L 20 34 L 25 30 L 25 29 L 14 29 z M 27 29 L 27 30 L 32 34 L 33 34 L 38 30 L 38 29 L 27 29 z M 40 29 L 40 30 L 45 34 L 46 34 L 51 30 L 51 29 L 40 29 z "
			transform="matrix(0.26458334,0,0,0.26458334,0,280.06665)"
			id="path4726"
		/>
		<path
			style="display:inline;opacity:1;vector-effect:none;fill:#000000;fill-opacity:1;fill-rule:evenodd;stroke:none;stroke-width:0.26458332;stroke-linecap:butt;stroke-linejoin:miter;stroke-miterlimit:4;stroke-dasharray:none;stroke-dashoffset:0;stroke-opacity:1"
			d="m 10.31875,294.61874 h -0.264583 l -0.5291669,-0.52917 v -0.26458 l 0.5291669,-0.52917 h 0.264583 z"
			id="path4830"
		/>
	</g>
</svg>
