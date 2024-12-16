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

<svg width="100%" viewBox="0 0 11.0652 15.410238" version="1.1" id="svg4846"
	><g id="layer1" transform="translate(-17.831028,-279.83199)"
		><path
			style="opacity:1;fill:{blendColor(
				'#969696',
				targetColor,
			)};fill-opacity:1;stroke:none;stroke-width:0.529167;stroke-linecap:round;stroke-linejoin:round;stroke-miterlimit:3;stroke-dasharray:none"
			d="m 21.515198,290.95788 h 0.88533 l 3.140417,-0.7684 0.0167,-1.72054 -0.467722,-0.11693 -0.11693,-4.15939 0.801809,-1.63702 1.1526,-0.78511 1.186008,-0.31738 -0.785104,-0.63476 -0.601358,-0.26727 -1.98531,0.43431 -2.044612,1.03065 -0.842734,0.67736 -0.606368,1.69968 0.05011,3.50791 0.05011,3.02348 z"
			id="path576312"
		/></g
	><g
		id="layer5"
		style="display:inline"
		transform="translate(-17.831028,0.23466399)"
		><path
			style="display:inline;opacity:1;fill:{blendColor(
				'#ffffff',
				targetColor,
			)};fill-opacity:1;stroke:none;stroke-width:0.529167;stroke-linecap:round;stroke-linejoin:round;stroke-miterlimit:3;stroke-dasharray:none"
			d="m 27.79603,294.90011 -0.11693,-2.05464 -1.88759,-0.70158 -1.002261,-1.57021 -2.572469,0.61806 -0.968852,-0.13363 -0.06682,-6.88219 1.175986,-1.93938 1.580231,-0.88366 2.15486,-0.70158 0.41761,-0.23386 -1.286236,-0.43431 -2.104747,-0.0334 -2.255087,0.90203 -1.495874,1.17516 -1.226934,1.59777 -0.03341,0.7851 -0.06682,7.50025 0.08352,0.91874 1.269531,-0.68488 1.753956,-0.93544 0.985556,0.10022 0.663431,1.45562 0.968565,1.22842 2.445033,0.87407 1.535528,0.0236 z"
			id="path580165"
			transform="translate(0,-280.06665)"
		/><circle
			style="opacity:1;fill:{blendColor(
				'#ffffff',
				targetColor,
			)};fill-opacity:1;stroke:#000000;stroke-width:0.396875;stroke-linecap:round;stroke-linejoin:round;stroke-miterlimit:3;stroke-dasharray:none"
			id="path574130"
			cx="23.292784"
			cy="287.81516"
			r="0.61421132"
			transform="translate(0,-280.06665)"
		/><circle
			style="opacity:1;fill:{blendColor(
				'#ffffff',
				targetColor,
			)};fill-opacity:1;stroke:#000000;stroke-width:0.396875;stroke-linecap:round;stroke-linejoin:round;stroke-miterlimit:3;stroke-dasharray:none"
			id="circle574132"
			cx="23.292784"
			cy="284.47473"
			r="0.61421132"
			transform="translate(0,-280.06665)"
		/><path
			style="opacity:1;fill:none;stroke:#000000;stroke-width:0.529167;stroke-linecap:round;stroke-linejoin:round;stroke-miterlimit:3;stroke-dasharray:none"
			d="m 25.598163,290.26285 -3.462931,0.85812"
			id="path574056"
			transform="translate(0,-280.06665)"
		/><path
			style="opacity:1;fill:none;stroke:#000000;stroke-width:0.529167;stroke-linecap:round;stroke-linejoin:round;stroke-miterlimit:3;stroke-dasharray:none"
			d="m 24.948091,291.49364 c -0.09449,0 -1.962413,1.1171 -1.962413,1.1171"
			id="path574058"
			transform="translate(0,-280.06665)"
		/><path
			style="opacity:1;fill:none;stroke:#000000;stroke-width:0.529167;stroke-linecap:round;stroke-linejoin:round;stroke-miterlimit:3;stroke-dasharray:none"
			d="m 25.838751,292.39181 -1.506533,1.8017"
			id="path574060"
			transform="translate(0,-280.06665)"
		/><path
			style="opacity:1;fill:none;stroke:#000000;stroke-width:0.529167;stroke-linecap:round;stroke-linejoin:round;stroke-miterlimit:3;stroke-dasharray:none"
			d="m 26.529205,294.92584 0.02363,-2.24423"
			id="path574062"
			transform="translate(0,-280.06665)"
		/><path
			style="opacity:1;fill:none;stroke:#000000;stroke-width:0.529167;stroke-linecap:round;stroke-linejoin:round;stroke-miterlimit:3;stroke-dasharray:none"
			d="m 21.237538,291.00434 v -6.85082 c 0,-2.11884 3.228378,-3.57145 5.573657,-3.5739"
			id="path574064"
			transform="translate(0,-280.06665)"
		/></g
	><g id="layer6" transform="translate(-17.831028,0.23466399)"
		><path
			style="display:inline;opacity:1;fill:none;fill-opacity:1;stroke:#000000;stroke-width:0.529167;stroke-linecap:round;stroke-linejoin:round;stroke-miterlimit:3;stroke-dasharray:none"
			d="m 27.875744,292.79972 v 2.14974 c -2.873266,0.23945 -5.193798,-1.04901 -5.740513,-3.82701 h -0.921317 l -3.118303,1.88988 v -8.25878 c 0,-4.59612 6.810812,-6.03843 10.536087,-3.19862 -1.729163,-0.0397 -2.963224,0.70242 -3.496281,2.55134 v 4.22861 h 0.614212 v 1.88988 l -0.914336,0.245 c 0.098,1.26413 0.725256,2.36026 3.040451,2.32996 z"
			id="path574054"
			transform="translate(0,-280.06665)"
		/></g
	></svg
>
