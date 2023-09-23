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
	viewBox="0 0 17.669104 18.448358"
	version="1.1"
	id="svg4846"
	><g id="layer1" transform="translate(-20.516295,-277.95178)"
		><path
			style="opacity:1;fill:{blendColor(
				'#484848',
				targetColor,
			)};fill-opacity:1;fill-rule:evenodd;stroke:none;stroke-width:0.661458;stroke-linecap:round;stroke-linejoin:round;stroke-miterlimit:3;stroke-dasharray:none;stroke-opacity:1"
			d="m 27.862848,14.599598 0.434314,-0.7684 0.584652,-0.11693 0.23386,-2.505652 -0.400904,-0.367496 -1.403165,0.250566 0.01669,3.474503 z"
			id="path12367"
			transform="translate(0,280.06665)"
		/><path
			style="opacity:1;fill:{blendColor(
				'#b5b5b5',
				targetColor,
			)};fill-opacity:1;fill-rule:evenodd;stroke:none;stroke-width:0.661458;stroke-linecap:round;stroke-linejoin:round;stroke-miterlimit:3;stroke-dasharray:none;stroke-opacity:1"
			d="m 26.942617,290.90984 h 5.114488 v -3.14192 h -1.405599 l 0.07087,0.80319 -0.437034,0.4016 -0.862258,-0.1063 -0.248047,-0.57878 0.118118,-0.42522 h -1.901693 v 1.39379 H 26.63551 v 1.66545 z"
			id="path15675"
		/></g
	><g id="layer5" transform="translate(-20.516295,2.1148688)"
		><path
			style="opacity:1;fill:{blendColor(
				'#ffffff',
				targetColor,
			)};fill-opacity:1;fill-rule:evenodd;stroke:none;stroke-width:0.661458;stroke-linecap:round;stroke-linejoin:round;stroke-miterlimit:3;stroke-dasharray:none;stroke-opacity:1"
			d="M 36.120351,7.1461124 35.010046,5.7168901 36.356585,4.2049852 34.761999,2.3505395 36.19122,0.75595238 34.891928,-0.55515255 36.04948,-1.9253163 h 1.61821 v 7.5949592 z"
			id="path15666"
		/><path
			style="opacity:1;fill:{blendColor(
				'#ffffff',
				targetColor,
			)};fill-opacity:1;fill-rule:evenodd;stroke:none;stroke-width:0.661458;stroke-linecap:round;stroke-linejoin:round;stroke-miterlimit:3;stroke-dasharray:none;stroke-opacity:1"
			d="M 25.958553,12.87905 25.858327,11.242025 24.438458,10.273173 23.98744,7.9512686 V 0.51783471 H 20.913841 V 9.4713642 l 1.102487,2.2884958 1.586913,0.935443 z"
			id="path15672"
		/><path
			style="opacity:1;fill:{blendColor(
				'#ffffff',
				targetColor,
			)};fill-opacity:1;fill-rule:evenodd;stroke:none;stroke-width:0.661458;stroke-linecap:round;stroke-linejoin:round;stroke-miterlimit:3;stroke-dasharray:none;stroke-opacity:1"
			d="m 28.31278,15.886812 h 3.260045 v -2.362351 h -0.826823 v -2.634022 h -1.712706 v 2.882069 h -0.862258 v 2.149739 z"
			id="path15120"
		/><ellipse
			style="opacity:1;fill:{blendColor(
				'#bebebe',
				targetColor,
			)};fill-opacity:1;fill-rule:evenodd;stroke:#000000;stroke-width:0.529167;stroke-linecap:round;stroke-linejoin:round;stroke-miterlimit:3;stroke-dasharray:none;stroke-opacity:1"
			id="path3141"
			cx="29.984299"
			cy="288.28519"
			rx="0.73499125"
			ry="0.78510427"
			transform="translate(0,-280.06665)"
		/></g
	><g id="layer4" transform="translate(-20.516295,2.1148688)"
		><rect
			style="opacity:1;fill:{blendColor(
				'#b5b5b5',
				targetColor,
			)};fill-opacity:1;fill-rule:evenodd;stroke:none;stroke-width:0.265642;stroke-linecap:round;stroke-linejoin:round;stroke-miterlimit:3;stroke-dasharray:none;stroke-opacity:1"
			id="rect3891"
			width="1.9854406"
			height="2.4542189"
			x="23.705843"
			y="285.22961"
			transform="translate(0,-280.06665)"
		/><rect
			style="opacity:1;fill:{blendColor(
				'#b5b5b5',
				targetColor,
			)};fill-opacity:1;fill-rule:evenodd;stroke:none;stroke-width:0.265642;stroke-linecap:round;stroke-linejoin:round;stroke-miterlimit:3;stroke-dasharray:none;stroke-opacity:1"
			id="rect3893"
			width="2.054286"
			height="2.1353102"
			x="23.636999"
			y="280.66901"
			transform="translate(0,-280.06665)"
		/><path
			style="opacity:1;fill:{blendColor(
				'#898989',
				targetColor,
			)};fill-opacity:1;fill-rule:evenodd;stroke:none;stroke-width:0.661458;stroke-linecap:round;stroke-linejoin:round;stroke-miterlimit:3;stroke-dasharray:none;stroke-opacity:1"
			d="m 27.395128,287.66713 h 4.69392 v -8.20184 h -6.481286 v 3.52462 h -1.65373 v 2.13816 h 1.837478 v 1.90429 h 1.520095 z"
			id="path15894"
			transform="translate(0,-280.06665)"
		/><path
			style="opacity:1;fill:{blendColor(
				'#b5b5b5',
				targetColor,
			)};fill-opacity:1;fill-rule:evenodd;stroke:none;stroke-width:0.268059;stroke-linecap:round;stroke-linejoin:round;stroke-miterlimit:3;stroke-dasharray:none;stroke-opacity:1"
			d="m 35.990421,286.90607 -0.743065,-0.97723 1.492181,-1.51947 -1.723586,-1.7551 1.642444,-1.67246 -1.437283,-1.46356 1.069078,-1.08863 h -2.113097 l -0.212612,9.76918 1.00533,-0.0482 z"
			id="path3897"
			transform="translate(0,-280.06665)"
		/><path
			style="opacity:1;fill:none;fill-rule:evenodd;stroke:#8f8f8f;stroke-width:0.661458;stroke-linecap:round;stroke-linejoin:round;stroke-miterlimit:3;stroke-dasharray:none;stroke-opacity:1"
			d="m 29.149083,292.64502 h 1.469983"
			id="path3149"
			transform="translate(0,-280.06665)"
		/><rect
			style="opacity:1;fill:{blendColor(
				'#636363',
				targetColor,
			)};fill-opacity:1;fill-rule:evenodd;stroke:#5d5d5d;stroke-width:0.348299;stroke-linecap:round;stroke-linejoin:round;stroke-miterlimit:3;stroke-dasharray:none;stroke-opacity:1"
			id="rect3889"
			width="0.69691896"
			height="0.58850938"
			x="29.606155"
			y="294.14243"
			transform="translate(0,-280.06665)"
			ry="0.029529391"
		/></g
	><g id="layer3" transform="translate(-20.516295,2.1148688)"
		><ellipse
			style="opacity:1;fill:{blendColor(
				'#bebebe',
				targetColor,
			)};fill-opacity:1;fill-rule:evenodd;stroke:#000000;stroke-width:0.529167;stroke-linecap:round;stroke-linejoin:round;stroke-miterlimit:3;stroke-dasharray:none;stroke-opacity:1"
			id="ellipse3143"
			cx="29.984299"
			cy="285.40546"
			rx="0.73499125"
			ry="0.78510427"
			transform="translate(0,-280.06665)"
		/><ellipse
			style="opacity:1;fill:{blendColor(
				'#bebebe',
				targetColor,
			)};fill-opacity:1;fill-rule:evenodd;stroke:#000000;stroke-width:0.529167;stroke-linecap:round;stroke-linejoin:round;stroke-miterlimit:3;stroke-dasharray:none;stroke-opacity:1"
			id="ellipse3145"
			cx="29.984299"
			cy="281.94766"
			rx="0.73499125"
			ry="0.78510427"
			transform="translate(0,-280.06665)"
		/><rect
			style="opacity:1;fill:#000000;fill-opacity:1;fill-rule:evenodd;stroke:none;stroke-width:0.265642;stroke-linecap:round;stroke-linejoin:round;stroke-miterlimit:3;stroke-dasharray:none;stroke-opacity:1"
			id="rect3081"
			width="1.7706608"
			height="1.0857824"
			x="32.205978"
			y="285.09589"
			transform="translate(0,-280.06665)"
		/><rect
			style="opacity:1;fill:#000000;fill-opacity:1;fill-rule:evenodd;stroke:none;stroke-width:0.265642;stroke-linecap:round;stroke-linejoin:round;stroke-miterlimit:3;stroke-dasharray:none;stroke-opacity:1"
			id="rect3079"
			width="1.7706608"
			height="1.0857824"
			x="32.205978"
			y="281.92084"
			transform="translate(0,-280.06665)"
		/><path
			style="opacity:1;fill:none;fill-rule:evenodd;stroke:#000000;stroke-width:0.661458;stroke-linecap:round;stroke-linejoin:round;stroke-miterlimit:3;stroke-dasharray:none;stroke-opacity:1"
			d="m 28.135605,296.01252 v -2.19699 h 1.015809 v -2.92931 h 1.677271 -4.063246"
			id="path3087"
			transform="translate(0,-280.06665)"
		/><path
			style="opacity:1;fill:none;fill-rule:evenodd;stroke:#000000;stroke-width:0.661458;stroke-linecap:round;stroke-linejoin:round;stroke-miterlimit:3;stroke-dasharray:none;stroke-opacity:1"
			d="m 25.773252,287.74429 0.03341,-2.58237 -1.862204,0.0334 -0.01671,-2.21726 1.814957,-0.0236 -0.0167,-3.40752"
			id="path3085"
			transform="translate(0,-280.06665)"
		/></g
	><g id="layer2" transform="translate(-20.516295,2.1148688)"
		><path
			style="opacity:1;fill:none;fill-rule:evenodd;stroke:#000000;stroke-width:0.661458;stroke-linecap:round;stroke-linejoin:round;stroke-miterlimit:3;stroke-dasharray:none;stroke-opacity:1"
			d="m 27.294902,287.71724 h 4.710625"
			id="path3147"
			transform="translate(0,-280.06665)"
		/><path
			style="opacity:1;fill:none;fill-rule:evenodd;stroke:#000000;stroke-width:0.661458;stroke-linecap:round;stroke-linejoin:round;stroke-miterlimit:3;stroke-dasharray:none;stroke-opacity:1"
			d="m 27.929666,296.06941 h 3.674957 v -2.47224 h -0.868627 v -2.6727 h 1.369756 v -11.52599 h -6.447877 v 1.1693 h -4.810851 v 8.8533 c 0.766046,1.8524 1.900232,3.16927 2.672434,3.2694 1.715277,0.22241 2.028452,0.13416 2.36452,0.13829 l -0.05906,-1.57021 c -1.364747,-0.49391 -1.949121,-1.60156 -1.80407,-3.44109 h 1.703844 l 0.08268,-0.86863 h 1.487527 v 2.20498 l -0.687994,0.0161 v 1.78796 l 0.749065,0.20072 v 3.49094 h 0.623805 z"
			id="path1919"
			transform="translate(0,-280.06665)"
		/><path
			style="opacity:1;fill:none;fill-rule:evenodd;stroke:#000000;stroke-width:0.661458;stroke-linecap:round;stroke-linejoin:round;stroke-miterlimit:3;stroke-dasharray:none;stroke-opacity:1"
			d="m 32.189275,286.23055 h 1.553504 v 2.17157 l 1.353053,-0.0334 2.647636,-2.79798 0.111204,-7.28823 -4.061782,0.0236 -0.06682,3.54788 h -1.536798 z"
			id="path3025"
			transform="translate(0,-280.06665)"
		/><path
			style="opacity:1;fill:none;fill-opacity:1;fill-rule:evenodd;stroke:#000000;stroke-width:0.657912;stroke-linecap:round;stroke-linejoin:round;stroke-miterlimit:3;stroke-dasharray:none;stroke-opacity:1"
			d="M 33.8263,8.2888923 33.79086,-1.6263765"
			id="path13661"
		/></g
	></svg
>
