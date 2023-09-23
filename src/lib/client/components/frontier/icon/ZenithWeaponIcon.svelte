<!-- Created with Inkscape (http://www.inkscape.org/) -->
<script lang="ts">
	import { blendColor } from '$lib/client/modules/color-blend';
	import { RarityColors } from '$lib/client/modules/frontier/objects';
	import type { FrontierRarity } from '$lib/client/modules/frontier/types';
	export let rarity: FrontierRarity = 1;

	$: targetColor = RarityColors[rarity - 1];
</script>

<svg
	width="100%"
	height="auto"
	viewBox="0 0 5.0654302 6.4833999"
	version="1.1"
	id="svg5"
	xml:space="preserve"
	><g id="layer1" transform="translate(-210.24007,-171.5279)"
		><path
			style="opacity:1;fill:{blendColor(
				'#ffffff',
				targetColor,
			)};fill-opacity:1;fill-rule:evenodd;stroke:#000000;stroke-width:0.5;stroke-linecap:round;stroke-linejoin:round;stroke-miterlimit:3;stroke-dasharray:none;stroke-opacity:1"
			d="m 210.60823,177.7613 h 4.44727 v -1.18164 h -2.48144 l 2.44921,-3.52344 v -1.27832 h -4.5332 v 1.46094 h 2.25586 l -2.20215,3.16895 v 1.35351 z"
			id="path7226"
		/></g
	><g id="layer2" transform="translate(-210.24007,-171.5279)" /></svg
>
