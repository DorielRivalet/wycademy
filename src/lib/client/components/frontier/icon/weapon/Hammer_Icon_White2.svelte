<!-- Created with Inkscape (http://www.inkscape.org/) -->
<script lang="ts">
	import { blendColor } from '$lib/client/modules/color-blend';
	import { RarityColors } from '$lib/client/modules/frontier/objects';
	import type { FrontierRarity } from '$lib/client/modules/frontier/types';
	export let rarity: FrontierRarity = 1;

	$: targetColor = RarityColors[rarity - 1] ?? RarityColors[0];
</script>

<svg width="100%" viewBox="0 0 16.933333 16.933334" version="1.1" id="svg4846"
	><g id="layer1" transform="translate(0,-280.06665)"
		><path
			style="display:inline;opacity:1;vector-effect:none;fill:{blendColor(
				'#b0b0b0',
				targetColor,
			)};fill-opacity:1;fill-rule:evenodd;stroke:#000000;stroke-width:0.5291667;stroke-linecap:butt;stroke-linejoin:round;stroke-miterlimit:4;stroke-dasharray:none;stroke-dashoffset:0;stroke-opacity:1"
			d="m 8.598958,282.97707 h -4.7625 v 6.08541 h 9.260416 v -6.08541 z"
			id="path4781"
		/><path
			style="display:inline;opacity:1;vector-effect:none;fill:{blendColor(
				'#ffffff',
				targetColor,
			)};fill-opacity:1;fill-rule:evenodd;stroke:#000000;stroke-width:0.5291667;stroke-linecap:butt;stroke-linejoin:round;stroke-miterlimit:4;stroke-dasharray:none;stroke-dashoffset:0;stroke-opacity:1"
			d="m 8.0697921,281.65415 0.2645828,-0.26459 0.2645831,10e-6 1.0583331,1.05833 v 0.52917 l -2.381249,-1e-5 v -0.52916 z"
			id="path4783"
		/><path
			style="display:inline;opacity:1;vector-effect:none;fill:{blendColor(
				'#ffffff',
				targetColor,
			)};fill-opacity:1;fill-rule:evenodd;stroke:#000000;stroke-width:0.5291667;stroke-linecap:butt;stroke-linejoin:round;stroke-miterlimit:4;stroke-dasharray:none;stroke-dashoffset:0;stroke-opacity:1"
			d="m 2.248959,286.41665 -0.26459,-0.26458 10e-6,-0.26459 1.05833,-1.05833 h 0.52917 l -1e-5,2.38125 h -0.52916 z"
			id="path4783-5"
		/><path
			style="display:inline;opacity:1;vector-effect:none;fill:{blendColor(
				'#ffffff',
				targetColor,
			)};fill-opacity:1;fill-rule:evenodd;stroke:#000000;stroke-width:0.5291667;stroke-linecap:butt;stroke-linejoin:round;stroke-miterlimit:4;stroke-dasharray:none;stroke-dashoffset:0;stroke-opacity:1"
			d="m 14.684374,286.41665 0.26459,-0.26458 -10e-6,-0.26459 -1.05833,-1.05833 h -0.52917 l 10e-6,2.38125 h 0.52916 z"
			id="path4783-5-4"
		/><rect
			style="display:inline;opacity:1;fill:{blendColor(
				'#ffffff',
				targetColor,
			)};fill-opacity:1;fill-rule:nonzero;stroke:#000000;stroke-width:0.5291667;stroke-linecap:round;stroke-linejoin:round;stroke-miterlimit:4;stroke-dasharray:none;stroke-dashoffset:0;stroke-opacity:1;paint-order:normal"
			id="rect4815"
			width="2.1166668"
			height="1.5875001"
			x="7.276042"
			y="289.0625"
		/><rect
			style="display:inline;opacity:1;fill:{blendColor(
				'#b0b0b0',
				targetColor,
			)};fill-opacity:1;fill-rule:nonzero;stroke:#000000;stroke-width:0.5291667;stroke-linecap:round;stroke-linejoin:round;stroke-miterlimit:4;stroke-dasharray:none;stroke-dashoffset:0;stroke-opacity:1;paint-order:normal"
			id="rect4817"
			width="2.1166668"
			height="1.3229166"
			x="7.276042"
			y="290.64999"
		/><rect
			style="display:inline;opacity:1;fill:{blendColor(
				'#b0b0b0',
				targetColor,
			)};fill-opacity:1;fill-rule:nonzero;stroke:#000000;stroke-width:0.5291667;stroke-linecap:round;stroke-linejoin:round;stroke-miterlimit:4;stroke-dasharray:none;stroke-dashoffset:0;stroke-opacity:1;paint-order:normal"
			id="rect4819"
			width="2.1166668"
			height="1.5875001"
			x="7.276042"
			y="291.9729"
		/><rect
			style="display:inline;opacity:1;fill:{blendColor(
				'#ffffff',
				targetColor,
			)};fill-opacity:1;fill-rule:nonzero;stroke:#000000;stroke-width:0.5291667;stroke-linecap:round;stroke-linejoin:round;stroke-miterlimit:4;stroke-dasharray:none;stroke-dashoffset:0;stroke-opacity:1;paint-order:normal"
			id="rect4821"
			width="2.1166668"
			height="2.1166668"
			x="7.276042"
			y="293.56039"
		/><path
			style="display:inline;opacity:1;vector-effect:none;fill:{blendColor(
				'#ffffff',
				targetColor,
			)};fill-opacity:1;fill-rule:evenodd;stroke:#000000;stroke-width:0.5291667;stroke-linecap:butt;stroke-linejoin:round;stroke-miterlimit:4;stroke-dasharray:none;stroke-dashoffset:0;stroke-opacity:1"
			d="M 8.3343741,284.29998 H 7.276041 c 0,0 -0.79375,0 -0.79375,0.79375 0,0.79375 0,1.32292 0,1.32292 0,0 0,0.79375 0.79375,0.79375 0.7937501,0 2.116667,0 2.116667,0 0,0 0.79375,0 0.79375,-0.79375 0,-0.79375 0,-1.32292 0,-1.32292 0,0 0,-0.79375 -0.79375,-0.79375 -0.79375,0 -1.0583339,0 -1.0583339,0 z"
			id="path4827"
		/><path
			style="display:inline;opacity:1;vector-effect:none;fill:#000000;fill-opacity:1;fill-rule:evenodd;stroke:#000000;stroke-width:0.26458332;stroke-linecap:butt;stroke-linejoin:round;stroke-miterlimit:4;stroke-dasharray:none;stroke-dashoffset:0;stroke-opacity:1"
			d="M 8.598958,285.35832 H 8.0697911 7.805208 v 0.79375 h 1.0583331 v -0.79375 z"
			id="path4829"
		/></g
	></svg
>
