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
			id="g963"
			transform="matrix(0.84418137,0,0,0.84418137,-10.693601,41.978303)"
			style="opacity:1"
		>
			<path
				style="fill:{blendColor(
					'#484848',
					targetColor,
				)};fill-opacity:1;fill-rule:evenodd;stroke:none;stroke-width:0.661458;stroke-linecap:round;stroke-linejoin:round;stroke-miterlimit:3;stroke-dasharray:none;stroke-opacity:1"
				d="m 21.096078,299.46319 0.434314,-0.7684 0.584652,-0.11693 0.23386,-2.50565 -0.400904,-0.3675 -1.403165,0.25057 0.01669,3.4745 z"
				id="path12367"
			/>
			<path
				style="fill:{blendColor(
					'#b5b5b5',
					targetColor,
				)};fill-opacity:1;fill-rule:evenodd;stroke:none;stroke-width:0.661458;stroke-linecap:round;stroke-linejoin:round;stroke-miterlimit:3;stroke-dasharray:none;stroke-opacity:1"
				d="m 20.175847,295.70678 h 5.114488 v -3.14192 h -1.405599 l 0.07087,0.80319 -0.437034,0.4016 -0.862258,-0.1063 -0.248047,-0.57878 0.118118,-0.42522 h -1.901693 v 1.39379 H 19.86874 v 1.66545 z"
				id="path15675"
			/>
			<path
				style="fill:{blendColor(
					'#ffffff',
					targetColor,
				)};fill-opacity:1;fill-rule:evenodd;stroke:none;stroke-width:0.661458;stroke-linecap:round;stroke-linejoin:round;stroke-miterlimit:3;stroke-dasharray:none;stroke-opacity:1"
				d="m 29.353581,292.0097 -1.110305,-1.42922 1.346539,-1.5119 -1.594586,-1.85445 1.429221,-1.59459 -1.299292,-1.3111 1.157552,-1.37017 h 1.61821 v 7.59496 z"
				id="path15666"
			/>
			<path
				style="fill:{blendColor(
					'#ffffff',
					targetColor,
				)};fill-opacity:1;fill-rule:evenodd;stroke:none;stroke-width:0.661458;stroke-linecap:round;stroke-linejoin:round;stroke-miterlimit:3;stroke-dasharray:none;stroke-opacity:1"
				d="m 19.191783,297.74264 -0.100226,-1.63703 -1.419869,-0.96885 -0.451018,-2.3219 v -7.43344 h -3.073599 v 8.95353 l 1.102487,2.2885 1.586913,0.93544 z"
				id="path15672"
			/>
			<path
				style="fill:{blendColor(
					'#ffffff',
					targetColor,
				)};fill-opacity:1;fill-rule:evenodd;stroke:none;stroke-width:0.661458;stroke-linecap:round;stroke-linejoin:round;stroke-miterlimit:3;stroke-dasharray:none;stroke-opacity:1"
				d="m 21.54601,300.7504 h 3.260045 v -2.36235 h -0.826823 v -2.63402 h -1.712706 v 2.88207 h -0.862258 v 2.14974 z"
				id="path15120"
			/>
			<ellipse
				style="fill:{blendColor(
					'#bebebe',
					targetColor,
				)};fill-opacity:1;fill-rule:evenodd;stroke:#000000;stroke-width:0.529167;stroke-linecap:round;stroke-linejoin:round;stroke-miterlimit:3;stroke-dasharray:none;stroke-opacity:1"
				id="path3141"
				cx="23.217529"
				cy="293.08212"
				rx="0.73499125"
				ry="0.78510427"
			/>
			<rect
				style="fill:{blendColor(
					'#b5b5b5',
					targetColor,
				)};fill-opacity:1;fill-rule:evenodd;stroke:none;stroke-width:0.265642;stroke-linecap:round;stroke-linejoin:round;stroke-miterlimit:3;stroke-dasharray:none;stroke-opacity:1"
				id="rect3891"
				width="1.9854406"
				height="2.4542189"
				x="16.939074"
				y="290.02655"
			/>
			<rect
				style="fill:{blendColor(
					'#b5b5b5',
					targetColor,
				)};fill-opacity:1;fill-rule:evenodd;stroke:none;stroke-width:0.265642;stroke-linecap:round;stroke-linejoin:round;stroke-miterlimit:3;stroke-dasharray:none;stroke-opacity:1"
				id="rect3893"
				width="2.054286"
				height="2.1353102"
				x="16.87023"
				y="285.46594"
			/>
			<path
				style="fill:{blendColor(
					'#898989',
					targetColor,
				)};fill-opacity:1;fill-rule:evenodd;stroke:none;stroke-width:0.661458;stroke-linecap:round;stroke-linejoin:round;stroke-miterlimit:3;stroke-dasharray:none;stroke-opacity:1"
				d="m 20.628358,292.46407 h 4.69392 v -8.20184 h -6.481286 v 3.52462 h -1.65373 v 2.13816 h 1.837478 v 1.90429 h 1.520095 z"
				id="path15894"
			/>
			<path
				style="fill:{blendColor(
					'#b5b5b5',
					targetColor,
				)};fill-opacity:1;fill-rule:evenodd;stroke:none;stroke-width:0.268059;stroke-linecap:round;stroke-linejoin:round;stroke-miterlimit:3;stroke-dasharray:none;stroke-opacity:1"
				d="m 29.223651,291.70301 -0.743065,-0.97723 1.492181,-1.51947 -1.723586,-1.7551 1.642444,-1.67246 -1.437283,-1.46356 1.069078,-1.08863 h -2.190053 l -0.135656,9.76918 1.00533,-0.0482 z"
				id="path3897"
			/>
			<path
				style="fill:none;fill-rule:evenodd;stroke:#8f8f8f;stroke-width:0.661458;stroke-linecap:round;stroke-linejoin:round;stroke-miterlimit:3;stroke-dasharray:none;stroke-opacity:1"
				d="m 22.382313,297.44196 h 1.469983"
				id="path3149"
			/>
			<rect
				style="fill:{blendColor(
					'#636363',
					targetColor,
				)};fill-opacity:1;fill-rule:evenodd;stroke:#5d5d5d;stroke-width:0.348299;stroke-linecap:round;stroke-linejoin:round;stroke-miterlimit:3;stroke-dasharray:none;stroke-opacity:1"
				id="rect3889"
				width="0.69691896"
				height="0.58850938"
				x="22.839386"
				y="298.93936"
				ry="0.029529391"
			/>
			<ellipse
				style="fill:{blendColor(
					'#bebebe',
					targetColor,
				)};fill-opacity:1;fill-rule:evenodd;stroke:#000000;stroke-width:0.529167;stroke-linecap:round;stroke-linejoin:round;stroke-miterlimit:3;stroke-dasharray:none;stroke-opacity:1"
				id="ellipse3143"
				cx="23.217529"
				cy="290.20239"
				rx="0.73499125"
				ry="0.78510427"
			/>
			<ellipse
				style="fill:{blendColor(
					'#bebebe',
					targetColor,
				)};fill-opacity:1;fill-rule:evenodd;stroke:#000000;stroke-width:0.529167;stroke-linecap:round;stroke-linejoin:round;stroke-miterlimit:3;stroke-dasharray:none;stroke-opacity:1"
				id="ellipse3145"
				cx="23.217529"
				cy="286.7446"
				rx="0.73499125"
				ry="0.78510427"
			/>
			<rect
				style="fill:#000000;fill-opacity:1;fill-rule:evenodd;stroke:none;stroke-width:0.265642;stroke-linecap:round;stroke-linejoin:round;stroke-miterlimit:3;stroke-dasharray:none;stroke-opacity:1"
				id="rect3081"
				width="1.7706608"
				height="1.0857824"
				x="25.439209"
				y="289.89282"
			/>
			<rect
				style="fill:#000000;fill-opacity:1;fill-rule:evenodd;stroke:none;stroke-width:0.265642;stroke-linecap:round;stroke-linejoin:round;stroke-miterlimit:3;stroke-dasharray:none;stroke-opacity:1"
				id="rect3079"
				width="1.7706608"
				height="1.0857824"
				x="25.439209"
				y="286.71777"
			/>
			<path
				style="fill:none;fill-rule:evenodd;stroke:#000000;stroke-width:0.661458;stroke-linecap:round;stroke-linejoin:round;stroke-miterlimit:3;stroke-dasharray:none;stroke-opacity:1"
				d="m 21.368835,300.80946 v -2.19699 h 1.015809 v -2.92931 h 1.677271 -4.063246"
				id="path3087"
			/>
			<path
				style="fill:none;fill-rule:evenodd;stroke:#000000;stroke-width:0.661458;stroke-linecap:round;stroke-linejoin:round;stroke-miterlimit:3;stroke-dasharray:none;stroke-opacity:1"
				d="m 19.006482,292.54123 0.03341,-2.58237 -1.862204,0.0334 -0.01671,-2.21726 1.814957,-0.0236 -0.0167,-3.40752"
				id="path3085"
			/>
			<path
				style="fill:none;fill-rule:evenodd;stroke:#000000;stroke-width:0.661458;stroke-linecap:round;stroke-linejoin:round;stroke-miterlimit:3;stroke-dasharray:none;stroke-opacity:1"
				d="m 20.528132,292.51418 h 4.710625"
				id="path3147"
			/>
			<path
				style="fill:none;fill-rule:evenodd;stroke:#000000;stroke-width:0.661458;stroke-linecap:round;stroke-linejoin:round;stroke-miterlimit:3;stroke-dasharray:none;stroke-opacity:1"
				d="m 21.162896,300.86635 h 3.674957 v -2.47224 h -0.868627 v -2.6727 h 1.369756 v -11.52599 h -6.447877 v 1.1693 h -4.810851 v 8.8533 c 0.766046,1.8524 1.900232,3.16927 2.672434,3.2694 1.715277,0.22241 2.028452,0.13416 2.36452,0.13829 l -0.05906,-1.57021 c -1.364747,-0.49391 -1.949121,-1.60156 -1.80407,-3.44109 h 1.703844 l 0.08268,-0.86863 h 1.487527 v 2.20498 l -0.687994,0.0161 v 1.78796 l 0.749065,0.20072 v 3.49094 h 0.623805 z"
				id="path1919"
			/>
			<path
				style="fill:none;fill-rule:evenodd;stroke:#000000;stroke-width:0.661458;stroke-linecap:round;stroke-linejoin:round;stroke-miterlimit:3;stroke-dasharray:none;stroke-opacity:1"
				d="m 25.422505,291.02749 h 1.553504 v 2.17157 l 1.353053,-0.0334 2.647636,-2.79798 0.111204,-7.28823 -4.061782,0.0236 -0.06682,3.54788 h -1.536798 z"
				id="path3025"
			/>
			<path
				style="fill:none;fill-opacity:1;fill-rule:evenodd;stroke:#000000;stroke-width:0.657912;stroke-linecap:round;stroke-linejoin:round;stroke-miterlimit:3;stroke-dasharray:none;stroke-opacity:1"
				d="m 27.05953,293.15248 -0.03544,-9.91527"
				id="path13661"
			/>
		</g>
	</g>
</svg>
