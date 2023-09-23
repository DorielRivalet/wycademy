<!-- Created with Inkscape (http://www.inkscape.org/) -->
<script lang="ts">
	import { blendColor } from '$lib/client/modules/color-blend';
	import { RarityColors } from '$lib/client/modules/frontier/objects';
	import type { FrontierRarity } from '$lib/client/modules/frontier/types';
	export let rarity: FrontierRarity = 1;

	$: targetColor = RarityColors[rarity - 1] || RarityColors[0];
</script>

<svg
	width="100%"
	height="auto"
	viewBox="0 0 7.0691738 6.9698181"
	version="1.1"
	id="svg5"
	xml:space="preserve"
	xmlns="http://www.w3.org/2000/svg"
	><defs id="defs2" /><g
		id="layer1"
		transform="translate(-86.783039,-178.18025)"
		><path
			style="opacity:1;fill:{blendColor(
				'#ffffff',
				targetColor,
			)};fill-opacity:1;fill-rule:evenodd;stroke:none;stroke-width:0.499999;stroke-linecap:round;stroke-linejoin:round;stroke-miterlimit:3;stroke-dasharray:none;stroke-opacity:1"
			d="m 89.008446,178.51822 h 2.734514 l 1.823011,1.82301 v 2.62817 l -1.807819,1.80782 H 88.87172 l -1.617922,-1.61792 v -2.96999 z"
			id="path4615"
		/></g
	><g id="layer2" transform="translate(-86.783039,-178.18025)"
		><path
			style="opacity:1;fill:none;fill-rule:evenodd;stroke:#000000;stroke-width:0.661458;stroke-linecap:round;stroke-linejoin:round;stroke-miterlimit:3;stroke-opacity:1"
			d="m 93.521484,180.33984 v 2.72852 l -1.750978,1.75098 h -2.975584 l -1.681154,-1.68116 v -2.88428 l 1.742921,-1.74292 h 2.731201 z"
			id="path370"
		/><path
			style="opacity:1;fill:#000000;fill-opacity:1;fill-rule:evenodd;stroke:none;stroke-width:0.5;stroke-linecap:round;stroke-linejoin:round;stroke-miterlimit:3;stroke-dasharray:none;stroke-opacity:1"
			d="m 93.349608,180.74805 h -1.460937 l -0.880858,-0.88087 h -1.546876 l -0.988283,0.98829 v 1.61133 l 1.020509,1.0205 h 1.42871 l 0.875491,-0.87549 h -1.455569 v -0.87548 h 3.093752 z"
			id="path3884"
		/></g
	></svg
>
