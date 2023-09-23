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
	viewBox="0 0 17.196324 19.195098"
	version="1.1"
	id="svg4846"
	><g id="layer1" transform="translate(-23.606551,-277.98909)" /><g
		id="layer22"
		transform="translate(-23.606551,2.0775642)"
	/><g id="layer21" transform="translate(-23.606551,2.0775642)"
		><path
			style="opacity:1;fill:{blendColor(
				'#ffffff',
				targetColor,
			)};fill-opacity:1;stroke:none;stroke-width:0.661458;stroke-linecap:round;stroke-linejoin:round;stroke-miterlimit:3;stroke-dasharray:none;stroke-opacity:1"
			d="m 25.190154,14.081764 1.553504,-1.486687 3.449447,-0.06682 0.810162,-1.085783 0.618059,-0.5763 -0.701582,-0.676526 -0.768401,0.08352 -1.127543,1.002261 -2.714455,0.133634 -1.219418,0.810161 c 0,0 -0.442665,1.160952 -0.459369,1.194361 -0.01671,0.03341 -0.03341,0.634765 -0.03341,0.634765 z"
			id="path760191"
		/><path
			style="opacity:1;fill:{blendColor(
				'#969696',
				targetColor,
			)};fill-opacity:1;stroke:none;stroke-width:0.661458;stroke-linecap:round;stroke-linejoin:round;stroke-miterlimit:3;stroke-dasharray:none;stroke-opacity:1"
			d="m 27.90461,12.745416 c 0,0 1.845831,0.05011 1.812422,0.05846 -0.03341,0.0084 -0.05846,1.336348 -0.05846,1.336348 l 0.751695,0.718287 0.34244,0.851921 -0.425961,0.868626 c 0,0 -0.88533,0.167044 -0.943795,0.175396 -0.05847,0.0084 -1.252826,-0.200452 -1.252826,-0.200452 l -0.22551,-1.720548 0.141986,-0.726639 -1.22777,-0.06682 z"
			id="path759129"
		/><path
			style="opacity:1;fill:none;stroke:#000000;stroke-width:0.661458;stroke-linecap:round;stroke-linejoin:round;stroke-miterlimit:3;stroke-dasharray:none;stroke-opacity:1"
			d="m 27.993862,14.07961 h 1.441035"
			id="path751841"
		/><path
			style="opacity:1;fill:{blendColor(
				'#ffffff',
				targetColor,
			)};fill-opacity:1;stroke:none;stroke-width:0.661458;stroke-linecap:round;stroke-linejoin:round;stroke-miterlimit:3;stroke-dasharray:none;stroke-opacity:1"
			d="m 26.576452,-1.29929 0.944941,-0.37798 1.570963,0.14174 -0.02363,0.98038 c 0,0 -0.531529,0.69689 -0.566965,0.76776 -0.03543,0.0709 -0.02363,1.06306 -0.02363,1.06306 l -0.153554,4.60658 0.968566,3.38998 0.862264,0.98037 -1.464657,1.13393 -2.716704,-0.0591 -1.594587,-6.69726 -0.165365,-2.12612 0.755953,-2.35054 z"
			id="path759462"
		/><path
			style="opacity:1;fill:{blendColor(
				'#979797',
				targetColor,
			)};fill-opacity:1;stroke:none;stroke-width:0.661458;stroke-linecap:round;stroke-linejoin:round;stroke-miterlimit:3;stroke-dasharray:none;stroke-opacity:1"
			d="m 31.507261,10.903884 c -0.599949,0.454857 -1.32581,0.850715 -1.456142,1.657784 l 0.785104,0.150339 0.985557,-1.403165 z"
			id="path752576"
		/><path
			style="opacity:1;fill:none;stroke:#000000;stroke-width:0.661458;stroke-linecap:round;stroke-linejoin:round;stroke-miterlimit:3;stroke-dasharray:none;stroke-opacity:1"
			d="m 26.127605,11.33929 h 2.740327 l 1.157552,-1.15756"
			id="path751845"
		/><path
			style="opacity:1;fill:{blendColor(
				'#979797',
				targetColor,
			)};fill-opacity:1;stroke:none;stroke-width:0.661458;stroke-linecap:round;stroke-linejoin:round;stroke-miterlimit:3;stroke-dasharray:none;stroke-opacity:1"
			d="m 30.268276,12.72036 -0.04176,-0.34244 -3.449447,0.0835 c -0.906645,0.65045 -1.0605,1.00947 -1.547156,1.52368 -0.145678,-0.007 -0.291357,0.007 -0.437035,-0.0591 -0.07149,-0.5868 0.193889,-1.08939 0.354353,-1.61821 l -1.252046,1.39379 0.188988,0.96856 2.007999,-0.14174 1.606398,-1.74814 1.842636,-0.0709 z"
			id="path752579"
		/><path
			style="opacity:1;fill:none;stroke:#000000;stroke-width:0.661458;stroke-linecap:round;stroke-linejoin:round;stroke-miterlimit:3;stroke-dasharray:none;stroke-opacity:1"
			d="m 29.694754,12.7567 h -1.913503 l -1.169959,1.42052"
			id="path751843"
		/><path
			style="opacity:1;fill:none;stroke:#000000;stroke-width:0.661458;stroke-linecap:round;stroke-linejoin:round;stroke-miterlimit:3;stroke-dasharray:none;stroke-opacity:1"
			d="m 28.59784,16.70435 c 0.414448,0.0702 0.825239,0.14655 1.369755,0 0.34223,0.0122 0.498439,-0.25461 0.668177,-0.50113 0.150694,-0.34196 0.06433,-0.6365 0,-0.93545 -0.08482,-0.46429 -0.538668,-0.74406 -0.968854,-1.03567 l -0.0084,-1.45328 1.369758,-0.008 0.977203,-1.27788 -0.798049,-1.38226 h -1.206474 c -1.215799,-1.5215 -1.32496,-3.04299 -1.603615,-4.56449 -0.03701,-1.71875 -0.05157,-3.44872 0,-5.21175 0.152903,-0.29104 0.165118,-0.65243 0.734991,-0.73499 v -1.20272 c -0.726269,-0.0397 -1.342713,-0.29908 -2.238383,0 -0.668174,0.54906 -1.336348,1.1442 -2.004522,2.00452 -0.301374,0.75845 -0.603449,1.51636 -0.658943,2.45922 0.273254,2.97098 0.789485,5.86097 1.861656,8.56565 -0.777281,0.5767 -1.590855,1.0663 -2.15486,2.15486 v 1.1526 h 1.787365 l 1.041023,-0.60103 h 1.230768 v 2.10442 c 0.08333,0.27303 0.295428,0.4173 0.601356,0.46773 z"
			id="path745994"
		/><path
			style="opacity:1;fill:{blendColor(
				'#ffffff',
				targetColor,
			)};fill-opacity:1;stroke:none;stroke-width:0.661458;stroke-linecap:round;stroke-linejoin:round;stroke-miterlimit:3;stroke-dasharray:none;stroke-opacity:1"
			d="m 39.219272,14.081764 -1.553504,-1.486687 -3.449447,-0.06682 -0.810162,-1.085783 -0.618059,-0.5763 0.701582,-0.676526 0.768401,0.08352 1.127543,1.002261 2.714455,0.133634 1.219418,0.810161 c 0,0 0.442665,1.160952 0.459369,1.194361 0.01671,0.03341 0.03341,0.634765 0.03341,0.634765 z"
			id="path762447"
		/><path
			style="opacity:1;fill:{blendColor(
				'#969696',
				targetColor,
			)};fill-opacity:1;stroke:none;stroke-width:0.661458;stroke-linecap:round;stroke-linejoin:round;stroke-miterlimit:3;stroke-dasharray:none;stroke-opacity:1"
			d="m 36.504816,12.745416 c 0,0 -1.845831,0.05011 -1.812422,0.05846 0.03341,0.0084 0.05846,1.336348 0.05846,1.336348 l -0.751695,0.718287 -0.34244,0.851921 0.425961,0.868626 c 0,0 0.88533,0.167044 0.943795,0.175396 0.05847,0.0084 1.252826,-0.200452 1.252826,-0.200452 l 0.22551,-1.720548 -0.141986,-0.726639 1.22777,-0.06682 z"
			id="path762449"
		/><path
			style="opacity:1;fill:none;stroke:#000000;stroke-width:0.661458;stroke-linecap:round;stroke-linejoin:round;stroke-miterlimit:3;stroke-dasharray:none;stroke-opacity:1"
			d="M 36.415564,14.07961 H 34.974529"
			id="path762451"
		/><path
			style="opacity:1;fill:{blendColor(
				'#ffffff',
				targetColor,
			)};fill-opacity:1;stroke:none;stroke-width:0.661458;stroke-linecap:round;stroke-linejoin:round;stroke-miterlimit:3;stroke-dasharray:none;stroke-opacity:1"
			d="m 37.832974,-1.29929 -0.944941,-0.37798 -1.570963,0.14174 0.02363,0.98038 c 0,0 0.531529,0.69689 0.566965,0.76776 0.03543,0.0709 0.02363,1.06306 0.02363,1.06306 l 0.153554,4.60658 -0.968566,3.38998 -0.862264,0.98037 1.464657,1.13393 2.716704,-0.0591 1.594587,-6.69726 0.165365,-2.12612 -0.755953,-2.35054 z"
			id="path762453"
		/><path
			style="opacity:1;fill:{blendColor(
				'#979797',
				targetColor,
			)};fill-opacity:1;stroke:none;stroke-width:0.661458;stroke-linecap:round;stroke-linejoin:round;stroke-miterlimit:3;stroke-dasharray:none;stroke-opacity:1"
			d="m 32.902165,10.903884 c 0.599949,0.454857 1.32581,0.850715 1.456142,1.657784 l -0.785104,0.150339 -0.985557,-1.403165 z"
			id="path762455"
		/><path
			style="opacity:1;fill:none;stroke:#000000;stroke-width:0.661458;stroke-linecap:round;stroke-linejoin:round;stroke-miterlimit:3;stroke-dasharray:none;stroke-opacity:1"
			d="M 38.281821,11.33929 H 35.541494 L 34.383942,10.18173"
			id="path762457"
		/><path
			style="opacity:1;fill:{blendColor(
				'#979797',
				targetColor,
			)};fill-opacity:1;stroke:none;stroke-width:0.661458;stroke-linecap:round;stroke-linejoin:round;stroke-miterlimit:3;stroke-dasharray:none;stroke-opacity:1"
			d="m 34.14115,12.72036 0.04176,-0.34244 3.449447,0.0835 c 0.906645,0.65045 1.0605,1.00947 1.547156,1.52368 0.145678,-0.007 0.291357,0.007 0.437035,-0.0591 0.07149,-0.5868 -0.193889,-1.08939 -0.354353,-1.61821 l 1.252046,1.39379 -0.188988,0.96856 -2.007999,-0.14174 -1.606398,-1.74814 -1.842636,-0.0709 z"
			id="path762459"
		/><path
			style="opacity:1;fill:none;stroke:#000000;stroke-width:0.661458;stroke-linecap:round;stroke-linejoin:round;stroke-miterlimit:3;stroke-dasharray:none;stroke-opacity:1"
			d="m 34.714672,12.7567 h 1.913503 l 1.169959,1.42052"
			id="path762461"
		/><path
			style="opacity:1;fill:none;stroke:#000000;stroke-width:0.661458;stroke-linecap:round;stroke-linejoin:round;stroke-miterlimit:3;stroke-dasharray:none;stroke-opacity:1"
			d="m 35.811586,16.70435 c -0.414448,0.0702 -0.825239,0.14655 -1.369755,0 -0.34223,0.0122 -0.498439,-0.25461 -0.668177,-0.50113 -0.150694,-0.34196 -0.06433,-0.6365 0,-0.93545 0.08482,-0.46429 0.538668,-0.74406 0.968854,-1.03567 l 0.0084,-1.45328 -1.369758,-0.008 -0.977203,-1.27788 0.798049,-1.38226 h 1.206474 c 1.215799,-1.5215 1.32496,-3.04299 1.603615,-4.56449 0.03701,-1.71875 0.05157,-3.44872 0,-5.21175 -0.152903,-0.29104 -0.165118,-0.65243 -0.734991,-0.73499 v -1.20272 c 0.726269,-0.0397 1.342713,-0.29908 2.238383,0 0.668174,0.54906 1.336348,1.1442 2.004522,2.00452 0.301374,0.75845 0.603449,1.51636 0.658943,2.45922 -0.273254,2.97098 -0.789485,5.86097 -1.861656,8.56565 0.777281,0.5767 1.590855,1.0663 2.15486,2.15486 v 1.1526 H 38.684781 L 37.643758,14.13255 H 36.41299 v 2.10442 c -0.08333,0.27303 -0.295428,0.4173 -0.601356,0.46773 z"
			id="path762463"
		/></g
	></svg
>
