<!-- Created with Inkscape (http://www.inkscape.org/) -->
<script lang="ts">
	import { blendColor } from '$lib/client/modules/color-blend';
	import { RarityColors } from '$lib/client/modules/frontier/objects';
	import type { FrontierRarity } from '$lib/client/modules/frontier/types';
	interface Props {
		rarity?: FrontierRarity;
	}

	let { rarity = 1 }: Props = $props();

	let targetColor = $derived(RarityColors[rarity - 1] ?? RarityColors[0]);
</script>

<svg width="100%" viewBox="0 0 16.933333 16.933334" version="1.1" id="svg4846">
	<g id="layer1" transform="translate(0,-280.06665)">
		<g id="g534" style="opacity:1" transform="translate(0.80180859,-4.543582)">
			<path
				style="fill:{blendColor(
					'#969696',
					targetColor,
				)};fill-opacity:1;stroke:none;stroke-width:0.529167;stroke-linecap:round;stroke-linejoin:round;stroke-miterlimit:3;stroke-dasharray:none"
				d="m 6.3367,296.48341 h 0.88533 l 3.140417,-0.7684 0.0167,-1.72054 -0.467722,-0.11693 -0.11693,-4.15939 0.801809,-1.63702 1.1526,-0.78511 1.186008,-0.31738 -0.785104,-0.63476 -0.601358,-0.26727 -1.98531,0.43431 -2.044612,1.03065 -0.842734,0.67736 -0.606368,1.69968 0.05011,3.50791 0.05011,3.02348 z"
				id="path576312"
			/>
			<path
				style="display:inline;fill:{blendColor(
					'#ffffff',
					targetColor,
				)};fill-opacity:1;stroke:none;stroke-width:0.529167;stroke-linecap:round;stroke-linejoin:round;stroke-miterlimit:3;stroke-dasharray:none"
				d="m 12.617532,300.42564 -0.11693,-2.05464 -1.88759,-0.70158 -1.002261,-1.57021 -2.572469,0.61806 -0.968852,-0.13363 -0.06682,-6.88219 1.175986,-1.93938 1.580231,-0.88366 2.15486,-0.70158 0.41761,-0.23386 -1.286236,-0.43431 -2.104747,-0.0334 -2.255087,0.90203 -1.495874,1.17516 -1.226934,1.59777 -0.03341,0.7851 -0.06682,7.50025 0.08352,0.91874 1.269531,-0.68488 1.753956,-0.93544 0.985556,0.10022 0.663431,1.45562 0.968565,1.22842 2.445033,0.87407 1.535528,0.0236 z"
				id="path580165"
			/>
			<circle
				style="display:inline;fill:{blendColor(
					'#ffffff',
					targetColor,
				)};fill-opacity:1;stroke:#000000;stroke-width:0.396875;stroke-linecap:round;stroke-linejoin:round;stroke-miterlimit:3;stroke-dasharray:none"
				id="path574130"
				cx="8.1142855"
				cy="293.3407"
				r="0.61421132"
			/>
			<circle
				style="display:inline;fill:{blendColor(
					'#ffffff',
					targetColor,
				)};fill-opacity:1;stroke:#000000;stroke-width:0.396875;stroke-linecap:round;stroke-linejoin:round;stroke-miterlimit:3;stroke-dasharray:none"
				id="circle574132"
				cx="8.1142855"
				cy="290.00027"
				r="0.61421132"
			/>
			<path
				style="display:inline;fill:none;stroke:#000000;stroke-width:0.529167;stroke-linecap:round;stroke-linejoin:round;stroke-miterlimit:3;stroke-dasharray:none"
				d="M 10.419665,295.78838 6.956734,296.6465"
				id="path574056"
			/>
			<path
				style="display:inline;fill:none;stroke:#000000;stroke-width:0.529167;stroke-linecap:round;stroke-linejoin:round;stroke-miterlimit:3;stroke-dasharray:none"
				d="m 9.769593,297.01917 c -0.09449,0 -1.962413,1.1171 -1.962413,1.1171"
				id="path574058"
			/>
			<path
				style="display:inline;fill:none;stroke:#000000;stroke-width:0.529167;stroke-linecap:round;stroke-linejoin:round;stroke-miterlimit:3;stroke-dasharray:none"
				d="m 10.660253,297.91734 -1.506533,1.8017"
				id="path574060"
			/>
			<path
				style="display:inline;fill:none;stroke:#000000;stroke-width:0.529167;stroke-linecap:round;stroke-linejoin:round;stroke-miterlimit:3;stroke-dasharray:none"
				d="m 11.350707,300.45137 0.02363,-2.24423"
				id="path574062"
			/>
			<path
				style="display:inline;fill:none;stroke:#000000;stroke-width:0.529167;stroke-linecap:round;stroke-linejoin:round;stroke-miterlimit:3;stroke-dasharray:none"
				d="m 6.05904,296.52987 v -6.85082 c 0,-2.11884 3.228378,-3.57145 5.573657,-3.5739"
				id="path574064"
			/>
			<path
				style="display:inline;fill:none;fill-opacity:1;stroke:#000000;stroke-width:0.529167;stroke-linecap:round;stroke-linejoin:round;stroke-miterlimit:3;stroke-dasharray:none"
				d="m 12.697246,298.32525 v 2.14974 C 9.82398,300.71444 7.503448,299.42598 6.956733,296.64798 H 6.035416 l -3.118303,1.88988 v -8.25878 c 0,-4.59612 6.810812,-6.03843 10.536087,-3.19862 -1.729163,-0.0397 -2.963224,0.70242 -3.496281,2.55134 v 4.22861 h 0.614212 v 1.88988 l -0.914336,0.245 c 0.098,1.26413 0.725256,2.36026 3.040451,2.32996 z"
				id="path574054"
			/>
		</g>
	</g>
</svg>
