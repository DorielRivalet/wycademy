<!-- Created with Inkscape (http://www.inkscape.org/) -->
<script lang="ts">
	import { blendColor } from '$lib/client/modules/color-blend';
	import { RarityColors } from '$lib/client/modules/frontier/objects';
	import type { FrontierRarity } from '$lib/client/modules/frontier/types';
	export let rarity: FrontierRarity = 1;

	$: targetColor = RarityColors[rarity - 1] ?? RarityColors[0];
</script>

<svg
	width="100%"
	height="auto"
	viewBox="0 0 16.961652 19.038166"
	version="1.1"
	id="svg4846"
	><g id="layer1" transform="translate(-19.968959,-276.82553)"
		><path
			style="opacity:0.557927;fill:none;stroke:#000000;stroke-width:0.264583;stroke-linecap:round;stroke-linejoin:round;stroke-miterlimit:3;stroke-dasharray:none;stroke-opacity:1"
			d="M 35.580257,286.24726 H 32.456544"
			id="path635140"
		/><path
			style="opacity:0.557927;fill:none;stroke:#000000;stroke-width:0.264583;stroke-linecap:round;stroke-linejoin:round;stroke-miterlimit:3;stroke-dasharray:none;stroke-opacity:1"
			d="m 29.275576,286.24726 h 3.123713"
			id="path635166"
		/><path
			style="opacity:1;fill:{blendColor(
				'#ffffff',
				targetColor,
			)};fill-opacity:1;stroke:none;stroke-width:0.264583;stroke-linecap:round;stroke-linejoin:round;stroke-miterlimit:3;stroke-dasharray:none;stroke-opacity:1"
			d="m 32.505952,292.69342 0.885884,0.0591 2.220608,-2.35054 -0.03543,-4.15774 -3.165552,-0.0118 -0.02362,-5.87045 -1.098492,0.0354 -2.008,2.03162 h -1.098492 l 1.039434,3.07106 -0.0118,0.73233 3.082867,0.0472 0.106307,0.28349 0.03543,5.9295 z"
			id="path636110"
		/></g
	><g id="layer12" transform="translate(-19.968959,3.241123)"
		><path
			style="opacity:1;fill:{blendColor(
				'#b0b0b0',
				targetColor,
			)};fill-opacity:1;stroke:none;stroke-width:0.264583;stroke-linecap:round;stroke-linejoin:round;stroke-miterlimit:3;stroke-dasharray:none;stroke-opacity:1"
			d="m 32.423135,12.661894 -0.918739,0.03341 -2.271792,-2.288495 0.03341,-4.2429044 3.190531,-0.016703 -0.01669,-5.82981688 1.11919,0.0334087 2.004521,2.02122588 1.069078,-0.033409 -1.03567,3.0735996 0.03341,0.7851042 -2.956668,-0.016703 -0.23386,0.1169302 -0.05012,2.6225824 z"
			id="path635913"
		/><path
			style="opacity:1;fill:none;stroke:#000000;stroke-width:0.529167;stroke-linecap:round;stroke-linejoin:round;stroke-miterlimit:3;stroke-dasharray:none;stroke-opacity:1"
			d="m 32.432698,292.69514 v -12.31111 h -1.102487 l -2.012874,2.01288 h -1.127543 l 1.03567,2.98172 v 5.07812 l 2.280142,2.28015 z"
			id="path635164"
			transform="translate(0,-280.06665)"
		/><path
			style="opacity:1;fill:none;stroke:#000000;stroke-width:0.529167;stroke-linecap:round;stroke-linejoin:round;stroke-miterlimit:3;stroke-dasharray:none;stroke-opacity:1"
			d="m 32.423135,292.69514 v -12.31111 h 1.102487 l 2.012874,2.01288 h 1.127543 l -1.03567,2.98172 v 5.07812 l -2.280142,2.28015 z"
			id="path635138"
			transform="translate(0,-280.06665)"
		/><path
			style="opacity:1;fill:none;stroke:#000000;stroke-width:0.529167;stroke-linecap:round;stroke-linejoin:round;stroke-miterlimit:3;stroke-dasharray:none;stroke-opacity:1"
			d="m 34.377544,284.94432 h -0.751695 v -0.70158"
			id="path635142"
			transform="translate(0,-280.06665)"
		/><path
			style="opacity:1;fill:none;stroke:#000000;stroke-width:0.529167;stroke-linecap:round;stroke-linejoin:round;stroke-miterlimit:3;stroke-dasharray:none;stroke-opacity:1"
			d="m 33.625849,288.06803 v -0.60135 h 0.718286"
			id="path635144"
			transform="translate(0,-280.06665)"
		/><path
			style="opacity:1;fill:none;stroke:#000000;stroke-width:0.529167;stroke-linecap:round;stroke-linejoin:round;stroke-miterlimit:3;stroke-dasharray:none;stroke-opacity:1"
			d="m 30.478289,284.94432 h 0.751695 v -0.70158"
			id="path635168"
			transform="translate(0,-280.06665)"
		/><path
			style="opacity:1;fill:none;stroke:#000000;stroke-width:0.529167;stroke-linecap:round;stroke-linejoin:round;stroke-miterlimit:3;stroke-dasharray:none;stroke-opacity:1"
			d="m 31.229984,288.06803 v -0.60135 h -0.718286"
			id="path635170"
			transform="translate(0,-280.06665)"
		/><path
			style="opacity:1;fill:none;fill-opacity:1;stroke:#000000;stroke-width:0.264163;stroke-linecap:round;stroke-linejoin:round;stroke-miterlimit:3;stroke-dasharray:none;stroke-opacity:1"
			d="m 29.315709,6.1806081 h 6.302552"
			id="path637653"
		/><path
			style="opacity:1;fill:{blendColor(
				'#ffffff',
				targetColor,
			)};fill-opacity:1;stroke:#000000;stroke-width:0.529167;stroke-linecap:round;stroke-linejoin:round;stroke-miterlimit:3;stroke-dasharray:none;stroke-opacity:1"
			d="m 22.79669,-1.5886812 -0.02362,-1.3878814 -2.539528,1.7245164 v 4.2994793 h 2.515905"
			id="path642791"
		/><path
			style="opacity:1;fill:{blendColor(
				'#b0b0b0',
				targetColor,
			)};fill-opacity:1;stroke:#000000;stroke-width:0.529167;stroke-linecap:round;stroke-linejoin:round;stroke-miterlimit:3;stroke-dasharray:none;stroke-opacity:1"
			d="m 25.064547,12.047991 v 2.681269 c -0.02764,0.350023 -0.252056,0.610599 -0.626023,0.803199 h -2.988375 v -2.055245 h 0.685082 v -1.464658"
			id="path643527"
		/></g
	><g id="layer14" transform="translate(-19.968959,3.241123)"
		><path
			style="opacity:1;fill:{blendColor(
				'#ffffff',
				targetColor,
			)};fill-opacity:1;stroke:#000000;stroke-width:0.529167;stroke-linecap:round;stroke-linejoin:round;stroke-miterlimit:3;stroke-dasharray:none;stroke-opacity:1"
			d="m 25.2181,9.5438992 1.706798,1.7067988 v 0.750046 h -6.667736 v -0.708705 l 1.783575,-1.7835752"
			id="path642795"
		/></g
	><g id="layer13" transform="translate(-19.968959,3.241123)"
		><rect
			style="opacity:1;fill:{blendColor(
				'#b0b0b0',
				targetColor,
			)};fill-opacity:1;stroke:#000000;stroke-width:0.529167;stroke-linecap:round;stroke-linejoin:round;stroke-miterlimit:3;stroke-dasharray:none;stroke-opacity:1"
			id="rect641292"
			width="6.7090778"
			height="4.6302085"
			x="20.292597"
			y="4.8428202"
			ry="0.03340869"
		/><rect
			style="opacity:1;fill:{blendColor(
				'#5b5b5b',
				targetColor,
			)};fill-opacity:1;stroke:none;stroke-width:0.291042;stroke-linecap:square;stroke-linejoin:miter;stroke-miterlimit:3;stroke-dasharray:none;stroke-opacity:1"
			id="rect641294"
			width="1.1358956"
			height="2.8063302"
			x="21.899397"
			y="4.9277821"
		/><g
			id="g641331"
			transform="translate(0.09449405)"
			style="fill:{blendColor(
				'#5b5b5b',
				targetColor,
			)};fill-opacity:1;stroke:none;stroke-opacity:1"
			><rect
				style="opacity:1;fill:{blendColor(
					'#5b5b5b',
					targetColor,
				)};fill-opacity:1;stroke:none;stroke-width:0.291042;stroke-linecap:square;stroke-linejoin:miter;stroke-miterlimit:3;stroke-dasharray:none;stroke-opacity:1"
				id="rect641325"
				width="1.1358956"
				height="2.8063302"
				x="24.016066"
				y="4.9277821"
			/></g
		><rect
			style="opacity:1;fill:{blendColor(
				'#b0b0b0',
				targetColor,
			)};fill-opacity:1;stroke:#000000;stroke-width:0.529167;stroke-linecap:round;stroke-linejoin:round;stroke-miterlimit:3;stroke-dasharray:none;stroke-opacity:1"
			id="rect642785"
			width="2.3387277"
			height="5.0554318"
			x="22.79669"
			y="-0.1889881"
		/><rect
			style="opacity:1;fill:{blendColor(
				'#b0b0b0',
				targetColor,
			)};fill-opacity:1;stroke:#000000;stroke-width:0.529167;stroke-linecap:round;stroke-linejoin:round;stroke-miterlimit:3;stroke-dasharray:none;stroke-opacity:1"
			id="rect642787"
			width="2.9734936"
			height="1.3804758"
			x="22.79669"
			y="-1.576036"
		/></g
	><g id="layer15" transform="translate(-19.968959,3.241123)"
		><rect
			style="opacity:1;fill:#000000;fill-opacity:1;stroke:none;stroke-width:0.291042;stroke-linecap:square;stroke-linejoin:miter;stroke-miterlimit:3;stroke-dasharray:none;stroke-opacity:1"
			id="rect641327"
			width="1.1358948"
			height="0.86862612"
			x="24.016066"
			y="4.9277821"
			transform="translate(0.09449405)"
		/><rect
			style="opacity:1;fill:#000000;fill-opacity:1;stroke:none;stroke-width:0.291042;stroke-linecap:square;stroke-linejoin:miter;stroke-miterlimit:3;stroke-dasharray:none;stroke-opacity:1"
			id="rect641296"
			width="1.1358948"
			height="0.86862612"
			x="21.899397"
			y="4.9277821"
		/></g
	></svg
>
