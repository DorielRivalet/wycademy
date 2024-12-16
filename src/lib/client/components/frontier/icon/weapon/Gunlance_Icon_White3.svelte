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
		<g
			id="g21258"
			style="opacity:1"
			transform="matrix(0.86498679,0,0,0.86498679,-1.6311954,32.942779)"
		>
			<path
				style="opacity:0.557927;fill:none;stroke:#000000;stroke-width:0.264583;stroke-linecap:round;stroke-linejoin:round;stroke-miterlimit:3;stroke-dasharray:none;stroke-opacity:1"
				d="M 18.556244,295.23707 H 15.432531"
				id="path635140"
			/>
			<path
				style="opacity:0.557927;fill:none;stroke:#000000;stroke-width:0.264583;stroke-linecap:round;stroke-linejoin:round;stroke-miterlimit:3;stroke-dasharray:none;stroke-opacity:1"
				d="m 12.251563,295.23707 h 3.123713"
				id="path635166"
			/>
			<path
				style="fill:{blendColor(
					'#ffffff',
					targetColor,
				)};fill-opacity:1;stroke:none;stroke-width:0.264583;stroke-linecap:round;stroke-linejoin:round;stroke-miterlimit:3;stroke-dasharray:none;stroke-opacity:1"
				d="m 15.481939,301.68323 0.885884,0.0591 2.220608,-2.35054 -0.03543,-4.15774 -3.165552,-0.0118 -0.02362,-5.87045 -1.098492,0.0354 -2.008,2.03162 h -1.098492 l 1.039434,3.07106 -0.0118,0.73233 3.082867,0.0472 0.106307,0.28349 0.03543,5.9295 z"
				id="path636110"
			/>
			<path
				style="fill:{blendColor(
					'#b0b0b0',
					targetColor,
				)};fill-opacity:1;stroke:none;stroke-width:0.264583;stroke-linecap:round;stroke-linejoin:round;stroke-miterlimit:3;stroke-dasharray:none;stroke-opacity:1"
				d="m 15.399122,301.71835 -0.918739,0.0334 -2.271792,-2.28849 0.03341,-4.24291 3.190531,-0.0167 -0.01669,-5.82982 1.11919,0.0334 2.004521,2.02123 1.069078,-0.0334 -1.03567,3.0736 0.03341,0.7851 -2.956668,-0.0167 -0.23386,0.11693 -0.05012,2.62258 z"
				id="path635913"
			/>
			<path
				style="fill:none;stroke:#000000;stroke-width:0.529167;stroke-linecap:round;stroke-linejoin:round;stroke-miterlimit:3;stroke-dasharray:none;stroke-opacity:1"
				d="m 15.408685,301.68495 v -12.31111 h -1.102487 l -2.012874,2.01288 h -1.127543 l 1.03567,2.98172 v 5.07812 l 2.280142,2.28015 z"
				id="path635164"
			/>
			<path
				style="fill:none;stroke:#000000;stroke-width:0.529167;stroke-linecap:round;stroke-linejoin:round;stroke-miterlimit:3;stroke-dasharray:none;stroke-opacity:1"
				d="m 15.399122,301.68495 v -12.31111 h 1.102487 l 2.012874,2.01288 h 1.127543 l -1.03567,2.98172 v 5.07812 l -2.280142,2.28015 z"
				id="path635138"
			/>
			<path
				style="fill:none;stroke:#000000;stroke-width:0.529167;stroke-linecap:round;stroke-linejoin:round;stroke-miterlimit:3;stroke-dasharray:none;stroke-opacity:1"
				d="m 17.353531,293.93413 h -0.751695 v -0.70158"
				id="path635142"
			/>
			<path
				style="fill:none;stroke:#000000;stroke-width:0.529167;stroke-linecap:round;stroke-linejoin:round;stroke-miterlimit:3;stroke-dasharray:none;stroke-opacity:1"
				d="m 16.601836,297.05784 v -0.60135 h 0.718286"
				id="path635144"
			/>
			<path
				style="fill:none;stroke:#000000;stroke-width:0.529167;stroke-linecap:round;stroke-linejoin:round;stroke-miterlimit:3;stroke-dasharray:none;stroke-opacity:1"
				d="m 13.454276,293.93413 h 0.751695 v -0.70158"
				id="path635168"
			/>
			<path
				style="fill:none;stroke:#000000;stroke-width:0.529167;stroke-linecap:round;stroke-linejoin:round;stroke-miterlimit:3;stroke-dasharray:none;stroke-opacity:1"
				d="m 14.205971,297.05784 v -0.60135 h -0.718286"
				id="path635170"
			/>
			<path
				style="fill:none;fill-opacity:1;stroke:#000000;stroke-width:0.264163;stroke-linecap:round;stroke-linejoin:round;stroke-miterlimit:3;stroke-dasharray:none;stroke-opacity:1"
				d="m 12.291696,295.23707 h 6.302552"
				id="path637653"
			/>
			<path
				style="fill:{blendColor(
					'#ffffff',
					targetColor,
				)};fill-opacity:1;stroke:#000000;stroke-width:0.529167;stroke-linecap:round;stroke-linejoin:round;stroke-miterlimit:3;stroke-dasharray:none;stroke-opacity:1"
				d="m 5.772677,287.46778 -0.02362,-1.38788 -2.539528,1.72451 v 4.29948 h 2.515905"
				id="path642791"
			/>
			<path
				style="fill:{blendColor(
					'#b0b0b0',
					targetColor,
				)};fill-opacity:1;stroke:#000000;stroke-width:0.529167;stroke-linecap:round;stroke-linejoin:round;stroke-miterlimit:3;stroke-dasharray:none;stroke-opacity:1"
				d="m 8.040534,301.10445 v 2.68127 c -0.02764,0.35002 -0.252056,0.6106 -0.626023,0.8032 H 4.426136 v -2.05525 h 0.685082 v -1.46465"
				id="path643527"
			/>
			<path
				style="fill:{blendColor(
					'#ffffff',
					targetColor,
				)};fill-opacity:1;stroke:#000000;stroke-width:0.529167;stroke-linecap:round;stroke-linejoin:round;stroke-miterlimit:3;stroke-dasharray:none;stroke-opacity:1"
				d="m 8.194087,298.60036 1.706798,1.7068 v 0.75004 H 3.233149 v -0.7087 l 1.783575,-1.78358"
				id="path642795"
			/>
			<rect
				style="fill:{blendColor(
					'#b0b0b0',
					targetColor,
				)};fill-opacity:1;stroke:#000000;stroke-width:0.529167;stroke-linecap:round;stroke-linejoin:round;stroke-miterlimit:3;stroke-dasharray:none;stroke-opacity:1"
				id="rect641292"
				width="6.7090778"
				height="4.6302085"
				x="3.2685838"
				y="293.89929"
				ry="0.03340869"
			/>
			<rect
				style="fill:{blendColor(
					'#5b5b5b',
					targetColor,
				)};fill-opacity:1;stroke:none;stroke-width:0.291042;stroke-linecap:square;stroke-linejoin:miter;stroke-miterlimit:3;stroke-dasharray:none;stroke-opacity:1"
				id="rect641294"
				width="1.1358956"
				height="2.8063302"
				x="4.8753839"
				y="293.98425"
			/>
			<g
				id="g641331"
				transform="translate(-16.929519,289.05646)"
				style="fill:{blendColor(
					'#5b5b5b',
					targetColor,
				)};fill-opacity:1;stroke:none;stroke-opacity:1"
			>
				<rect
					style="opacity:1;fill:{blendColor(
						'#5b5b5b',
						targetColor,
					)};fill-opacity:1;stroke:none;stroke-width:0.291042;stroke-linecap:square;stroke-linejoin:miter;stroke-miterlimit:3;stroke-dasharray:none;stroke-opacity:1"
					id="rect641325"
					width="1.1358956"
					height="2.8063302"
					x="24.016066"
					y="4.9277821"
				/>
			</g>
			<rect
				style="fill:{blendColor(
					'#b0b0b0',
					targetColor,
				)};fill-opacity:1;stroke:#000000;stroke-width:0.529167;stroke-linecap:round;stroke-linejoin:round;stroke-miterlimit:3;stroke-dasharray:none;stroke-opacity:1"
				id="rect642785"
				width="2.3387277"
				height="5.0554318"
				x="5.7726769"
				y="288.86746"
			/>
			<rect
				style="fill:{blendColor(
					'#b0b0b0',
					targetColor,
				)};fill-opacity:1;stroke:#000000;stroke-width:0.529167;stroke-linecap:round;stroke-linejoin:round;stroke-miterlimit:3;stroke-dasharray:none;stroke-opacity:1"
				id="rect642787"
				width="2.9734936"
				height="1.3804758"
				x="5.7726769"
				y="287.48044"
			/>
			<rect
				style="fill:#000000;fill-opacity:1;stroke:none;stroke-width:0.291042;stroke-linecap:square;stroke-linejoin:miter;stroke-miterlimit:3;stroke-dasharray:none;stroke-opacity:1"
				id="rect641327"
				width="1.1358948"
				height="0.86862612"
				x="7.0865464"
				y="293.98425"
			/>
			<rect
				style="fill:#000000;fill-opacity:1;stroke:none;stroke-width:0.291042;stroke-linecap:square;stroke-linejoin:miter;stroke-miterlimit:3;stroke-dasharray:none;stroke-opacity:1"
				id="rect641296"
				width="1.1358948"
				height="0.86862612"
				x="4.8753839"
				y="293.98425"
			/>
		</g>
	</g>
</svg>
