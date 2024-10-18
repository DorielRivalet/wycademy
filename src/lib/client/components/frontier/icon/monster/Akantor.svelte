<!-- Created with Inkscape (http://www.inkscape.org/) -->
<script lang="ts">
	import bg from '$lib/client/images/monster/bg-512.webp';
	export let size = '128px';
	export let background = false;

	$: backgroundStyle = background
		? `width: ${size}; height: ${size}; background-image: url('${bg}'); background-size: ${size}`
		: `width: ${size}; height: ${size};`;
</script>

<div class="container" style={backgroundStyle}>
	<svg
		width="100%"
		viewBox="0 0 128 128"
		version="1.1"
		id="svg5"
		xml:space="preserve"
		xmlns="http://www.w3.org/2000/svg"
		xmlns:rdf="http://www.w3.org/1999/02/22-rdf-syntax-ns#"
		xmlns:cc="http://creativecommons.org/ns#"
		xmlns:dc="http://purl.org/dc/elements/1.1/"
		><defs id="defs2"
			><filter
				style="color-interpolation-filters:sRGB;"
				id="filter90267"
				x="0"
				y="0"
				width="1"
				height="1"
				><feComposite
					in2="SourceGraphic"
					operator="arithmetic"
					k1="0"
					k2="1"
					result="composite1"
					id="feComposite90253"
				/><feColorMatrix
					in="composite1"
					values="1"
					type="saturate"
					result="colormatrix1"
					id="feColorMatrix90255"
				/><feFlood
					flood-opacity="1"
					flood-color="rgb(0,0,0)"
					result="flood1"
					id="feFlood90257"
				/><feBlend
					in="flood1"
					in2="colormatrix1"
					mode="multiply"
					result="blend1"
					id="feBlend90259"
				/><feBlend
					in2="blend1"
					mode="screen"
					result="blend2"
					id="feBlend90261"
				/><feColorMatrix
					in="blend2"
					values="1"
					type="saturate"
					result="colormatrix2"
					id="feColorMatrix90263"
				/><feComposite
					in="colormatrix2"
					in2="SourceGraphic"
					operator="in"
					k2="1"
					result="composite2"
					id="feComposite90265"
				/></filter
			></defs
		>
		<!-- svelte-ignore a11y-no-static-element-interactions -->
		<!-- svelte-ignore a11y-mouse-events-have-key-events -->
		<g id="layer1"
			><g
				id="g89888"
				style="filter:url(#filter90267)"
				transform="translate(1.0583333,1.5875)"
				><path
					style="opacity:1;fill:#5c442d;fill-opacity:1;fill-rule:evenodd;stroke-width:3;stroke-linecap:round;stroke-linejoin:round;stroke-miterlimit:3;stroke-opacity:0.498674;paint-order:stroke fill markers"
					d="M 52.387499,37.041666 H 33.602083 l 5.820833,12.170833 h 1.058333 l 5.55625,-4.233333 0.79375,-0.212685 6.401898,-6.401898 z"
					id="path89790"
				/><path
					style="opacity:1;fill:#5c442d;fill-opacity:1;fill-rule:evenodd;stroke-width:3;stroke-linecap:round;stroke-linejoin:round;stroke-miterlimit:3;stroke-opacity:0.498674;paint-order:stroke fill markers"
					d="m 74.083332,37.041666 h 10.583334 l 7.9375,7.9375 -5.346505,9.260417 -17.143079,-9.897563 z"
					id="path89792"
				/><path
					style="opacity:1;fill:#542911;fill-opacity:1;fill-rule:evenodd;stroke-width:3;stroke-linecap:round;stroke-linejoin:round;stroke-miterlimit:3;stroke-opacity:0.498674;paint-order:stroke fill markers"
					d="m 93.397915,116.15208 h 19.050005 l 0.79375,-1.85208 4.49791,-5.02708 V 66.410416 l -6.61458,-5.027083 -7.14375,-6.35 -3.96875,-2.910417 -15.345834,-1.5875 L 71.437499,37.30625 H 54.239583 l -7.9375,7.937499 L 31.75,49.14297 l -6.879167,2.186196 0.264583,1.5875 -3.96875,3.96875 -2.38125,2.645833 -5.556249,3.439584 -2.910417,3.439583 -1.3229168,8.73125 0.2645834,6.085416 -0.2645834,0.264584 V 100.0125 c 0,0 1.0583338,10.58333 1.0583338,10.58333 l 4.497916,3.43959 3.207903,1.85208 h 16.635847 l 0.992529,-3.70417 -0.992529,-1.5875 1.5875,-5.29166 h 52.652083 l 1.134319,4.23333 1.701477,6.35 z"
					id="path89794"
				/><path
					style="opacity:1;fill:#c36515;fill-opacity:1;fill-rule:evenodd;stroke-width:3;stroke-linecap:round;stroke-linejoin:round;stroke-miterlimit:3;stroke-opacity:0.498674;paint-order:stroke fill markers"
					d="m 85.989582,117.73958 4.497917,-6.08541 3.96875,3.175 -1.852083,2.91041 z"
					id="path89796"
				/><path
					style="opacity:1;fill:#c36515;fill-opacity:1;fill-rule:evenodd;stroke-width:3;stroke-linecap:round;stroke-linejoin:round;stroke-miterlimit:3;stroke-opacity:0.498674;paint-order:stroke fill markers"
					d="m 96.308332,118.00417 3.704168,-11.37709 4.7625,3.96875 c 0,0 1.32292,7.47923 1.05833,7.40834 -0.26458,-0.0709 -9.524998,0 -9.524998,0 z"
					id="path89798"
				/><path
					style="opacity:1;fill:#c36515;fill-opacity:1;fill-rule:evenodd;stroke-width:3;stroke-linecap:round;stroke-linejoin:round;stroke-miterlimit:3;stroke-opacity:0.498674;paint-order:stroke fill markers"
					d="m 109.5375,118.79792 h 5.29167 c -1.23611,-2.73142 -1.76203,-5.70244 -2.11667,-8.73125 l -4.23333,-2.64584 c 0.114,3.79573 -0.71736,7.60478 1.05833,11.37709 z"
					id="path89800"
				/><path
					style="opacity:1;fill:#c36515;fill-opacity:1;fill-rule:evenodd;stroke-width:3;stroke-linecap:round;stroke-linejoin:round;stroke-miterlimit:3;stroke-opacity:0.498674;paint-order:stroke fill markers"
					d="m 112.44792,104.51042 -1.32292,-6.614588 11.37708,-0.79375 c -1.58495,2.786821 -4.86348,5.269358 -10.05416,7.408338 z"
					id="path89802"
				/><path
					style="opacity:1;fill:#c36515;fill-opacity:1;fill-rule:evenodd;stroke-width:3;stroke-linecap:round;stroke-linejoin:round;stroke-miterlimit:3;stroke-opacity:0.498674;paint-order:stroke fill markers"
					d="m 112.18333,93.662499 5.82084,-0.529167 4.49791,-6.085416 -8.73125,3.175 z"
					id="path89804"
				/><path
					style="opacity:1;fill:#c36515;fill-opacity:1;fill-rule:evenodd;stroke-width:3;stroke-linecap:round;stroke-linejoin:round;stroke-miterlimit:3;stroke-opacity:0.498674;paint-order:stroke fill markers"
					d="m 114.56458,81.756249 h 3.175 l 5.29167,-5.291667 H 120.65 v -2.38125 l -5.49926,3.175 z"
					id="path89806"
				/><path
					style="opacity:1;fill:#c36515;fill-opacity:1;fill-rule:evenodd;stroke-width:3;stroke-linecap:round;stroke-linejoin:round;stroke-miterlimit:3;stroke-opacity:0.498674;paint-order:stroke fill markers"
					d="m 115.35833,71.172916 7.67292,-7.14375 -1.85208,-1.058333 -0.26459,-2.38125 -8.99583,6.085416 z"
					id="path89808"
				/><path
					style="opacity:1;fill:#c36515;fill-opacity:1;fill-rule:evenodd;stroke-width:3;stroke-linecap:round;stroke-linejoin:round;stroke-miterlimit:3;stroke-opacity:0.498674;paint-order:stroke fill markers"
					d="m 108.47917,65.087499 6.35,-6.879166 v -6.085417 l -4.49792,4.233333 -2.38125,5.291667 z"
					id="path89810"
				/><path
					style="opacity:1;fill:#c36515;fill-opacity:1;fill-rule:evenodd;stroke-width:3;stroke-linecap:round;stroke-linejoin:round;stroke-miterlimit:3;stroke-opacity:0.498674;paint-order:stroke fill markers"
					d="m 104.775,56.091666 5.82083,-7.672917 h -7.67291 v -2.38125 l 8.73125,-11.377083 v -5.55625 c -5.35183,2.513368 -11.18843,3.626476 -15.953852,7.740954 -3.092804,2.670334 -8.995359,8.838201 -7.329486,12.631963 l -2.116666,1.222057 1.058333,0.611029 z"
					id="path89812"
				/><path
					style="opacity:1;fill:#c36515;fill-opacity:1;fill-rule:evenodd;stroke-width:3;stroke-linecap:round;stroke-linejoin:round;stroke-miterlimit:3;stroke-opacity:0.498674;paint-order:stroke fill markers"
					d="m 81.756249,32.279166 2.645833,6.614584 8.995833,-2.116667 4.7625,-8.73125 0.529167,-14.552083 -8.73125,16.66875 z"
					id="path89814"
				/><path
					style="opacity:1;fill:#c36515;fill-opacity:1;fill-rule:evenodd;stroke-width:3;stroke-linecap:round;stroke-linejoin:round;stroke-miterlimit:3;stroke-opacity:0.498674;paint-order:stroke fill markers"
					d="m 78.581249,50.799999 -3.704167,1.058334 v 6.35 l 4.7625,-2.116667 v -5.820833 z"
					id="path89816"
				/><path
					style="opacity:1;fill:#c36515;fill-opacity:1;fill-rule:evenodd;stroke-width:3;stroke-linecap:round;stroke-linejoin:round;stroke-miterlimit:3;stroke-opacity:0.498674;paint-order:stroke fill markers"
					d="M 68.527082,51.329166 V 32.014583 L 71.966666,27.78125 V 14.022916 L 81.227082,3.96875 c 1e-5,10e-8 0.07452,-0.3122668 -0.517318,6.309254 -0.27876,3.11881 -0.470815,8.745275 -1.373922,18.943255 -0.295248,3.333971 -2.912104,6.313787 -6.04626,9.407907 -0.148647,5.697519 -2.208098,9.450592 -4.7625,12.7 z"
					id="path89818"
				/><path
					style="opacity:1;fill:#c36515;fill-opacity:1;fill-rule:evenodd;stroke-width:3;stroke-linecap:round;stroke-linejoin:round;stroke-miterlimit:3;stroke-opacity:0.498674;paint-order:stroke fill markers"
					d="m 62.177083,47.624999 2.645833,-5.291666 V 29.104166 L 66.939582,25.4 V 12.435417 L 63.764583,4.4979166 58.737499,14.2875 v 14.816666 l 2.645834,4.582719 z"
					id="path89820"
				/><path
					style="opacity:1;fill:#c36515;fill-opacity:1;fill-rule:evenodd;stroke-width:3;stroke-linecap:round;stroke-linejoin:round;stroke-miterlimit:3;stroke-opacity:0.498674;paint-order:stroke fill markers"
					d="M 57.943749,48.154166 V 37.570833 L 56.956311,37.30625 V 31.485416 L 54.239583,28.768688 V 23.8125 H 52.916666 V 17.197916 L 51.593749,16.843442 V 15.875 l -5.291666,-5.291667 v 3.96875 l 1.322916,0.763786 v 5.586214 l 0.529167,0.14179 v 6.20821 c 3.172681,6.942827 3.94778,13.235785 9.789583,20.902083 z"
					id="path89822"
				/><path
					style="opacity:1;fill:#c36515;fill-opacity:1;fill-rule:evenodd;stroke-width:3;stroke-linecap:round;stroke-linejoin:round;stroke-miterlimit:3;stroke-opacity:0.498674;paint-order:stroke fill markers"
					d="m 38.364583,37.041666 h 9.260416 C 49.767984,32.251085 46.784643,30.853305 42.333333,30.427083 38.025188,25.353175 34.523494,17.457493 29.36875,15.345833 Z"
					id="path89824"
				/><path
					style="opacity:1;fill:#c36515;fill-opacity:1;fill-rule:evenodd;stroke-width:3;stroke-linecap:round;stroke-linejoin:round;stroke-miterlimit:3;stroke-opacity:0.498674;paint-order:stroke fill markers"
					d="M 25.135416,52.916666 28.575,50.799999 h 11.641666 l 0.264583,-1.5875 -6.879166,-14.816666 -16.66875,-5.027083 v 6.614583 L 29.36875,48.154166 h -8.466667 z"
					id="path89826"
				/><path
					style="opacity:1;fill:#c36515;fill-opacity:1;fill-rule:evenodd;stroke-width:3;stroke-linecap:round;stroke-linejoin:round;stroke-miterlimit:3;stroke-opacity:0.498674;paint-order:stroke fill markers"
					d="m 20.372916,61.912499 3.175,-2.38125 -2.645833,-4.582718 v -2.296448 l -1.322917,-0.354476 -2.544974,-4.408024 v 3.96875 c 0,0 -1.509031,0.233833 -1.423776,0.3815 0.08526,0.147666 0,4.381 0,4.381 z"
					id="path89828"
				/><path
					style="opacity:1;fill:#c36515;fill-opacity:1;fill-rule:evenodd;stroke-width:3;stroke-linecap:round;stroke-linejoin:round;stroke-miterlimit:3;stroke-opacity:0.498674;paint-order:stroke fill markers"
					d="m 14.2875,67.468749 3.704166,-3.704166 -3.175,-1.833087 H 13.758333 L 8.2020832,58.208333 v 5.291666 l 1.8330868,3.175 z"
					id="path89830"
				/><path
					style="opacity:1;fill:#c36515;fill-opacity:1;fill-rule:evenodd;stroke-width:3;stroke-linecap:round;stroke-linejoin:round;stroke-miterlimit:3;stroke-opacity:0.498674;paint-order:stroke fill markers"
					d="m 13.229167,81.491666 -2.645834,-7.14375 H 6.0854166 l 2.9104166,7.14375 z"
					id="path89832"
				/><path
					style="opacity:1;fill:#c36515;fill-opacity:1;fill-rule:evenodd;stroke-width:3;stroke-linecap:round;stroke-linejoin:round;stroke-miterlimit:3;stroke-opacity:0.498674;paint-order:stroke fill markers"
					d="m 7.4083332,86.254166 3.4395838,0.264583 3.174999,1.322917 1.322917,2.910416 L 12.7,93.397915 7.9374999,89.429166 Z"
					id="path89834"
				/><path
					style="opacity:1;fill:#c36515;fill-opacity:1;fill-rule:evenodd;stroke-width:3;stroke-linecap:round;stroke-linejoin:round;stroke-miterlimit:3;stroke-opacity:0.498674;paint-order:stroke fill markers"
					d="m 7.9374999,99.218749 6.6145831,-2.645834 2.116667,7.143755 -8.9958334,-3.43959 z"
					id="path89836"
				/><path
					style="opacity:1;fill:#c36515;fill-opacity:1;fill-rule:evenodd;stroke-width:3;stroke-linecap:round;stroke-linejoin:round;stroke-miterlimit:3;stroke-opacity:0.498674;paint-order:stroke fill markers"
					d="m 12.435417,118.79792 5.291666,0.26458 1.852083,-11.37708 -5.55625,6.08541 v 2.64584 z"
					id="path89838"
				/><path
					style="opacity:1;fill:#c36515;fill-opacity:1;fill-rule:evenodd;stroke-width:3;stroke-linecap:round;stroke-linejoin:round;stroke-miterlimit:3;stroke-opacity:0.498674;paint-order:stroke fill markers"
					d="m 21.695833,117.73958 9.789583,-0.26458 c -1.351406,-4.29895 -1.400653,-10.10814 -5.820833,-10.84792 -3.57155,-0.32698 -3.970559,5.03348 -3.96875,11.1125 z"
					id="path89840"
				/><path
					style="opacity:1;fill:#c36515;fill-opacity:1;fill-rule:evenodd;stroke-width:3;stroke-linecap:round;stroke-linejoin:round;stroke-miterlimit:3;stroke-opacity:0.498674;paint-order:stroke fill markers"
					d="m 33.866666,117.73958 h 8.202083 l -7.672916,-7.40833 c -0.883859,2.4105 -2.232736,4.78227 -0.529167,7.40833 z"
					id="path89842"
				/><path
					style="opacity:1;fill:#c36515;fill-opacity:1;fill-rule:evenodd;stroke-width:3;stroke-linecap:round;stroke-linejoin:round;stroke-miterlimit:3;stroke-opacity:0.498674;paint-order:stroke fill markers"
					d="m 47.095833,51.329166 3.704166,-1.058333 1.322917,7.14375 -5.55625,-1.852084 z"
					id="path89844"
				/><path
					style="opacity:1;fill:#c36515;fill-opacity:1;fill-rule:evenodd;stroke-width:3;stroke-linecap:round;stroke-linejoin:round;stroke-miterlimit:3;stroke-opacity:0.498674;paint-order:stroke fill markers"
					d="m 43.656249,106.89167 -8.202083,2.64583 -1.852083,-6.87917 2.38125,-2.64583 3.175,3.43958 3.96875,0.26459 z"
					id="path89846"
				/><path
					style="opacity:1;fill:#c36515;fill-opacity:1;fill-rule:evenodd;stroke-width:3;stroke-linecap:round;stroke-linejoin:round;stroke-miterlimit:3;stroke-opacity:0.498674;paint-order:stroke fill markers"
					d="m 47.624999,107.95 6.35,1.05833 c -0.05825,2.96343 -0.965597,5.53187 -4.497916,6.87917 -1.451112,-2.42831 -1.68353,-5.17458 -1.852084,-7.9375 z"
					id="path89848"
				/><path
					style="opacity:1;fill:#c36515;fill-opacity:1;fill-rule:evenodd;stroke-width:3;stroke-linecap:round;stroke-linejoin:round;stroke-miterlimit:3;stroke-opacity:0.498674;paint-order:stroke fill markers"
					d="m 81.491666,108.74375 c -1.196935,2.29619 -2.667429,4.59387 -1.852084,6.87917 -4.16989,-1.15959 -6.271678,-3.85335 -8.995833,-6.08542 z"
					id="path89850"
				/><path
					style="opacity:1;fill:#c36515;fill-opacity:1;fill-rule:evenodd;stroke-width:3;stroke-linecap:round;stroke-linejoin:round;stroke-miterlimit:3;stroke-opacity:0.498674;paint-order:stroke fill markers"
					d="m 84.137499,108.74375 5.55625,-6.87917 0.529167,-2.910415 1.852083,3.175005 c 1.072063,3.3568 -0.581484,5.27397 -1.322917,7.67291 -2.057185,0.36524 -4.269337,-0.023 -6.614583,-1.05833 z"
					id="path89852"
				/><path
					style="opacity:1;fill:#c36515;fill-opacity:1;fill-rule:evenodd;stroke-width:3;stroke-linecap:round;stroke-linejoin:round;stroke-miterlimit:3;stroke-opacity:0.498674;paint-order:stroke fill markers"
					d="m 48.418749,63.499999 4.497917,-2.38125 8.466667,6.35 h 3.439583 l 7.14375,-6.35 3.439583,2.38125 -8.466667,6.879167 -2.381249,4.497916 h -2.910417 l -2.596872,-4.497916 z"
					id="path89854"
				/><path
					style="opacity:1;fill:#0db4a9;fill-opacity:1;fill-rule:evenodd;stroke-width:3;stroke-linecap:round;stroke-linejoin:round;stroke-miterlimit:3;stroke-opacity:0.498674;paint-order:stroke fill markers"
					d="m 45.508333,70.643749 h 7.14375 v -2.38125 L 45.772916,64.29081 Z"
					id="path89856"
				/><path
					style="opacity:1;fill:#0db4a9;fill-opacity:1;fill-rule:evenodd;stroke-width:3;stroke-linecap:round;stroke-linejoin:round;stroke-miterlimit:3;stroke-opacity:0.498674;paint-order:stroke fill markers"
					d="m 80.036458,69.05625 h -7.14375 V 66.675 l 6.879167,-3.971689 z"
					id="path89858"
				/><path
					style="opacity:1;fill:#938556;fill-opacity:1;fill-rule:evenodd;stroke-width:3;stroke-linecap:round;stroke-linejoin:round;stroke-miterlimit:3;stroke-opacity:0.498674;paint-order:stroke fill markers"
					d="m 31.485416,92.868749 c 0,-0.264583 -5.291666,-2.38125 -5.291666,-2.38125 l -1.322917,-8.73125 5.820833,-8.73125 c 1.730525,6.530979 0.929482,13.206336 0.79375,19.84375 z"
					id="path89860"
				/><path
					style="opacity:1;fill:#c36515;fill-opacity:1;fill-rule:evenodd;stroke-width:3;stroke-linecap:round;stroke-linejoin:round;stroke-miterlimit:3;stroke-opacity:0.498674;paint-order:stroke fill markers"
					d="M 36.777083,96.837499 31.75,82.285416 29.36875,84.402082 31.75,94.720832 Z"
					id="path89862"
				/><path
					style="opacity:1;fill:#938556;fill-opacity:1;fill-rule:evenodd;stroke-width:3;stroke-linecap:round;stroke-linejoin:round;stroke-miterlimit:3;stroke-opacity:0.498674;paint-order:stroke fill markers"
					d="m 96.043749,93.133332 4.233331,-2.444115 2.11667,-9.726718 -9.525001,-10.583333 -3.96875,-1.058334 2.910417,10.31875 c 1.820564,0.883026 2.87188,2.343657 3.704166,3.96875 z"
					id="path89864"
				/><path
					style="opacity:1;fill:#615035;fill-opacity:1;fill-rule:evenodd;stroke-width:3;stroke-linecap:round;stroke-linejoin:round;stroke-miterlimit:3;stroke-opacity:0.498674;paint-order:stroke fill markers"
					d="m 37.30625,97.102082 v 5.027088 L 55.178848,91.810416 51.593749,88.370832 50.270833,86.518749 41.010416,89.00007 Z"
					id="path89866"
				/><path
					style="opacity:1;fill:#615035;fill-opacity:1;fill-rule:evenodd;stroke-width:3;stroke-linecap:round;stroke-linejoin:round;stroke-miterlimit:3;stroke-opacity:0.498674;paint-order:stroke fill markers"
					d="m 89.693749,101.86458 v -4.762498 l -7.408333,-11.641666 -7.14375,1.058333 -1.322917,1.322917 3.360661,5.820833 9.603922,8.466671 z"
					id="path89868"
				/><path
					style="opacity:1;fill:#938556;fill-opacity:1;fill-rule:evenodd;stroke-width:3;stroke-linecap:round;stroke-linejoin:round;stroke-miterlimit:3;stroke-opacity:0.498674;paint-order:stroke fill markers"
					d="m 43.391666,106.89167 4.233333,1.05833 6.35,1.05833 16.139583,1.05834 0.529167,-0.52917 10.847917,-0.79375 h 2.645833 l 5.55625,-6.87917 -11.90625,-12.699998 -3.96875,-1.322916 -10.31875,-1.852084 h -1.322916 l -13.49375,3.175 -4.7625,4.7625 -6.35,7.937498 0.79375,4.49792 z"
					id="path89870"
				/><path
					style="opacity:1;fill:#c3a843;fill-opacity:1;fill-rule:evenodd;stroke-width:3;stroke-linecap:round;stroke-linejoin:round;stroke-miterlimit:3;stroke-opacity:0.498674;paint-order:stroke fill markers"
					d="m 37.30625,97.102082 9.260416,-9.525 3.704167,-0.992529 C 48.46167,81.137979 47.687139,75.899027 46.831249,70.643749 V 43.920833 c -6.37641,4.685788 -6.990024,18.992429 -10.847916,28.574999 z"
					id="path89872"
				/><path
					style="opacity:1;fill:#c3a843;fill-opacity:1;fill-rule:evenodd;stroke-width:3;stroke-linecap:round;stroke-linejoin:round;stroke-miterlimit:3;stroke-opacity:0.498674;paint-order:stroke fill markers"
					d="m 89.693749,97.102082 -8.995833,-8.995833 -5.55625,-1.488792 4.233333,-11.475791 V 34.925 l 12.7,30.162499 c 1.994984,4.41041 -1.221475,20.521276 -2.38125,32.014583 z"
					id="path89874"
				/><path
					style="opacity:1;fill:#c36515;fill-opacity:1;fill-rule:evenodd;stroke-width:3;stroke-linecap:round;stroke-linejoin:round;stroke-miterlimit:3;stroke-opacity:0.498674;paint-order:stroke fill markers"
					d="m 91.545832,96.308332 4.497917,-3.175 0.79375,-8.202083 -1.5875,-1.5875 z"
					id="path89876"
				/><path
					style="opacity:1;fill:#c3a843;fill-opacity:1;fill-rule:evenodd;stroke-width:3;stroke-linecap:round;stroke-linejoin:round;stroke-miterlimit:3;stroke-opacity:0.498674;paint-order:stroke fill markers"
					d="m 51.59375,88.635417 3.439583,-7.408335 1.852083,6.35 z"
					id="path89878"
				/><path
					style="opacity:1;fill:#c3a843;fill-opacity:1;fill-rule:evenodd;stroke-width:3;stroke-linecap:round;stroke-linejoin:round;stroke-miterlimit:3;stroke-opacity:0.498674;paint-order:stroke fill markers"
					d="m 60.060416,80.697916 2.116667,6.35 h -4.497917 z"
					id="path89880"
				/><path
					style="opacity:1;fill:#c3a843;fill-opacity:1;fill-rule:evenodd;stroke-width:3;stroke-linecap:round;stroke-linejoin:round;stroke-miterlimit:3;stroke-opacity:0.498674;paint-order:stroke fill markers"
					d="m 65.881249,80.697916 1.852083,6.614583 -4.497916,-0.79375 z"
					id="path89882"
				/><path
					style="opacity:1;fill:#c3a843;fill-opacity:1;fill-rule:evenodd;stroke-width:3;stroke-linecap:round;stroke-linejoin:round;stroke-miterlimit:3;stroke-opacity:0.498674;paint-order:stroke fill markers"
					d="m 71.172916,81.491666 2.910416,7.14375 -4.233333,-1.322917 z"
					id="path89884"
				/><path
					style="opacity:1;fill:#c36515;fill-opacity:1;fill-rule:evenodd;stroke-width:3;stroke-linecap:round;stroke-linejoin:round;stroke-miterlimit:3;stroke-opacity:0.498674;paint-order:stroke fill markers"
					d="m 53.974999,109.00833 8.73125,-6.87916 7.408333,7.9375 c -2.961242,1.80243 -5.21332,3.49433 -5.556249,7.9375 H 62.70625 c -0.427317,-0.97445 -1.531108,-2.58317 -2.116667,-3.43959 -1.80462,-2.63936 -3.002948,-4.26466 -6.614584,-5.55625 z"
					id="path89886"
				/></g
			><g id="g89788"
				><path
					style="opacity:1;fill:#5c442d;fill-opacity:1;fill-rule:evenodd;stroke-width:3;stroke-linecap:round;stroke-linejoin:round;stroke-miterlimit:3;stroke-opacity:0.498674;paint-order:stroke fill markers"
					d="M 52.387499,37.041666 H 33.602083 l 5.820833,12.170833 h 1.058333 l 5.55625,-4.233333 0.79375,-0.212685 6.401898,-6.401898 z"
					id="path79488"
				/><path
					style="opacity:1;fill:#5c442d;fill-opacity:1;fill-rule:evenodd;stroke-width:3;stroke-linecap:round;stroke-linejoin:round;stroke-miterlimit:3;stroke-opacity:0.498674;paint-order:stroke fill markers"
					d="m 74.083332,37.041666 h 10.583334 l 7.9375,7.9375 -5.346505,9.260417 -17.143079,-9.897563 z"
					id="path79830"
				/><path
					style="opacity:1;fill:#542911;fill-opacity:1;fill-rule:evenodd;stroke-width:3;stroke-linecap:round;stroke-linejoin:round;stroke-miterlimit:3;stroke-opacity:0.498674;paint-order:stroke fill markers"
					d="m 93.397915,116.15208 h 19.050005 l 0.79375,-1.85208 4.49791,-5.02708 V 66.410416 l -6.61458,-5.027083 -7.14375,-6.35 -3.96875,-2.910417 -15.345834,-1.5875 L 71.437499,37.30625 H 54.239583 l -7.9375,7.937499 L 31.75,49.14297 l -6.879167,2.186196 0.264583,1.5875 -3.96875,3.96875 -2.38125,2.645833 -5.556249,3.439584 -2.910417,3.439583 -1.3229168,8.73125 0.2645834,6.085416 -0.2645834,0.264584 V 100.0125 c 0,0 1.0583338,10.58333 1.0583338,10.58333 l 4.497916,3.43959 3.207903,1.85208 h 16.635847 l 0.992529,-3.70417 -0.992529,-1.5875 1.5875,-5.29166 h 52.652083 l 1.134319,4.23333 1.701477,6.35 z"
					id="path76336"
				/><path
					style="opacity:1;fill:#c36515;fill-rule:evenodd;stroke-width:3;stroke-linecap:round;stroke-linejoin:round;stroke-miterlimit:3;stroke-opacity:0.498674;paint-order:stroke fill markers;fill-opacity:1"
					d="m 85.989582,117.73958 4.497917,-6.08541 3.96875,3.175 -1.852083,2.91041 z"
					id="path70668"
				/><path
					style="opacity:1;fill:#c36515;fill-rule:evenodd;stroke-width:3;stroke-linecap:round;stroke-linejoin:round;stroke-miterlimit:3;stroke-opacity:0.498674;paint-order:stroke fill markers;fill-opacity:1"
					d="m 96.308332,118.00417 3.704168,-11.37709 4.7625,3.96875 c 0,0 1.32292,7.47923 1.05833,7.40834 -0.26458,-0.0709 -9.524998,0 -9.524998,0 z"
					id="path70670"
				/><path
					style="opacity:1;fill:#c36515;fill-rule:evenodd;stroke-width:3;stroke-linecap:round;stroke-linejoin:round;stroke-miterlimit:3;stroke-opacity:0.498674;paint-order:stroke fill markers;fill-opacity:1"
					d="m 109.5375,118.79792 h 5.29167 c -1.23611,-2.73142 -1.76203,-5.70244 -2.11667,-8.73125 l -4.23333,-2.64584 c 0.114,3.79573 -0.71736,7.60478 1.05833,11.37709 z"
					id="path70672"
				/><path
					style="opacity:1;fill:#c36515;fill-rule:evenodd;stroke-width:3;stroke-linecap:round;stroke-linejoin:round;stroke-miterlimit:3;stroke-opacity:0.498674;paint-order:stroke fill markers;fill-opacity:1"
					d="m 112.44792,104.51042 -1.32292,-6.614588 11.37708,-0.79375 c -1.58495,2.786821 -4.86348,5.269358 -10.05416,7.408338 z"
					id="path70674"
				/><path
					style="opacity:1;fill:#c36515;fill-rule:evenodd;stroke-width:3;stroke-linecap:round;stroke-linejoin:round;stroke-miterlimit:3;stroke-opacity:0.498674;paint-order:stroke fill markers;fill-opacity:1"
					d="m 112.18333,93.662499 5.82084,-0.529167 4.49791,-6.085416 -8.73125,3.175 z"
					id="path70676"
				/><path
					style="opacity:1;fill:#c36515;fill-rule:evenodd;stroke-width:3;stroke-linecap:round;stroke-linejoin:round;stroke-miterlimit:3;stroke-opacity:0.498674;paint-order:stroke fill markers;fill-opacity:1"
					d="m 114.56458,81.756249 h 3.175 l 5.29167,-5.291667 H 120.65 v -2.38125 l -5.49926,3.175 z"
					id="path70678"
				/><path
					style="opacity:1;fill:#c36515;fill-rule:evenodd;stroke-width:3;stroke-linecap:round;stroke-linejoin:round;stroke-miterlimit:3;stroke-opacity:0.498674;paint-order:stroke fill markers;fill-opacity:1"
					d="m 115.35833,71.172916 7.67292,-7.14375 -1.85208,-1.058333 -0.26459,-2.38125 -8.99583,6.085416 z"
					id="path70680"
				/><path
					style="opacity:1;fill:#c36515;fill-rule:evenodd;stroke-width:3;stroke-linecap:round;stroke-linejoin:round;stroke-miterlimit:3;stroke-opacity:0.498674;paint-order:stroke fill markers;fill-opacity:1"
					d="m 108.47917,65.087499 6.35,-6.879166 v -6.085417 l -4.49792,4.233333 -2.38125,5.291667 z"
					id="path70682"
				/><path
					style="opacity:1;fill:#c36515;fill-rule:evenodd;stroke-width:3;stroke-linecap:round;stroke-linejoin:round;stroke-miterlimit:3;stroke-opacity:0.498674;paint-order:stroke fill markers;fill-opacity:1"
					d="m 104.775,56.091666 5.82083,-7.672917 h -7.67291 v -2.38125 l 8.73125,-11.377083 v -5.55625 c -5.35183,2.513368 -11.18843,3.626476 -15.953852,7.740954 -3.092804,2.670334 -8.995359,8.838201 -7.329486,12.631963 l -2.116666,1.222057 1.058333,0.611029 z"
					id="path72136"
				/><path
					style="opacity:1;fill:#c36515;fill-rule:evenodd;stroke-width:3;stroke-linecap:round;stroke-linejoin:round;stroke-miterlimit:3;stroke-opacity:0.498674;paint-order:stroke fill markers;fill-opacity:1"
					d="m 81.756249,32.279166 2.645833,6.614584 8.995833,-2.116667 4.7625,-8.73125 0.529167,-14.552083 -8.73125,16.66875 z"
					id="path72138"
				/><path
					style="opacity:1;fill:#c36515;fill-rule:evenodd;stroke-width:3;stroke-linecap:round;stroke-linejoin:round;stroke-miterlimit:3;stroke-opacity:0.498674;paint-order:stroke fill markers;fill-opacity:1"
					d="m 78.581249,50.799999 -3.704167,1.058334 v 6.35 l 4.7625,-2.116667 v -5.820833 z"
					id="path72140"
				/><path
					style="opacity:1;fill:#c36515;fill-rule:evenodd;stroke-width:3;stroke-linecap:round;stroke-linejoin:round;stroke-miterlimit:3;stroke-opacity:0.498674;paint-order:stroke fill markers;fill-opacity:1"
					d="M 68.527082,51.329166 V 32.014583 L 71.966666,27.78125 V 14.022916 L 81.227082,3.96875 c 1e-5,10e-8 0.07452,-0.3122668 -0.517318,6.309254 -0.27876,3.11881 -0.470815,8.745275 -1.373922,18.943255 -0.295248,3.333971 -2.912104,6.313787 -6.04626,9.407907 -0.148647,5.697519 -2.208098,9.450592 -4.7625,12.7 z"
					id="path72142"
				/><path
					style="opacity:1;fill:#c36515;fill-rule:evenodd;stroke-width:3;stroke-linecap:round;stroke-linejoin:round;stroke-miterlimit:3;stroke-opacity:0.498674;paint-order:stroke fill markers;fill-opacity:1"
					d="m 62.177083,47.624999 2.645833,-5.291666 V 29.104166 L 66.939582,25.4 V 12.435417 L 63.764583,4.4979166 58.737499,14.2875 v 14.816666 l 2.645834,4.582719 z"
					id="path72144"
				/><path
					style="opacity:1;fill:#c36515;fill-rule:evenodd;stroke-width:3;stroke-linecap:round;stroke-linejoin:round;stroke-miterlimit:3;stroke-opacity:0.498674;paint-order:stroke fill markers;fill-opacity:1"
					d="M 57.943749,48.154166 V 37.570833 L 56.956311,37.30625 V 31.485416 L 54.239583,28.768688 V 23.8125 H 52.916666 V 17.197916 L 51.593749,16.843442 V 15.875 l -5.291666,-5.291667 v 3.96875 l 1.322916,0.763786 v 5.586214 l 0.529167,0.14179 v 6.20821 c 3.172681,6.942827 3.94778,13.235785 9.789583,20.902083 z"
					id="path72146"
				/><path
					style="opacity:1;fill:#c36515;fill-rule:evenodd;stroke-width:3;stroke-linecap:round;stroke-linejoin:round;stroke-miterlimit:3;stroke-opacity:0.498674;paint-order:stroke fill markers;fill-opacity:1"
					d="m 38.364583,37.041666 h 9.260416 C 49.767984,32.251085 46.784643,30.853305 42.333333,30.427083 38.025188,25.353175 34.523494,17.457493 29.36875,15.345833 Z"
					id="path72148"
				/><path
					style="opacity:1;fill:#c36515;fill-rule:evenodd;stroke-width:3;stroke-linecap:round;stroke-linejoin:round;stroke-miterlimit:3;stroke-opacity:0.498674;paint-order:stroke fill markers;fill-opacity:1"
					d="M 25.135416,52.916666 28.575,50.799999 h 11.641666 l 0.264583,-1.5875 -6.879166,-14.816666 -16.66875,-5.027083 v 6.614583 L 29.36875,48.154166 h -8.466667 z"
					id="path72876"
				/><path
					style="opacity:1;fill:#c36515;fill-rule:evenodd;stroke-width:3;stroke-linecap:round;stroke-linejoin:round;stroke-miterlimit:3;stroke-opacity:0.498674;paint-order:stroke fill markers;fill-opacity:1"
					d="m 20.372916,61.912499 3.175,-2.38125 -2.645833,-4.582718 v -2.296448 l -1.322917,-0.354476 -2.544974,-4.408024 v 3.96875 c 0,0 -1.509031,0.233833 -1.423776,0.3815 0.08526,0.147666 0,4.381 0,4.381 z"
					id="path72880"
				/><path
					style="opacity:1;fill:#c36515;fill-rule:evenodd;stroke-width:3;stroke-linecap:round;stroke-linejoin:round;stroke-miterlimit:3;stroke-opacity:0.498674;paint-order:stroke fill markers;fill-opacity:1"
					d="m 14.2875,67.468749 3.704166,-3.704166 -3.175,-1.833087 H 13.758333 L 8.2020832,58.208333 v 5.291666 l 1.8330868,3.175 z"
					id="path72882"
				/><path
					style="opacity:1;fill:#c36515;fill-rule:evenodd;stroke-width:3;stroke-linecap:round;stroke-linejoin:round;stroke-miterlimit:3;stroke-opacity:0.498674;paint-order:stroke fill markers;fill-opacity:1"
					d="m 13.229167,81.491666 -2.645834,-7.14375 H 6.0854166 l 2.9104166,7.14375 z"
					id="path74338"
				/><path
					style="opacity:1;fill:#c36515;fill-rule:evenodd;stroke-width:3;stroke-linecap:round;stroke-linejoin:round;stroke-miterlimit:3;stroke-opacity:0.498674;paint-order:stroke fill markers;fill-opacity:1"
					d="m 7.4083332,86.254166 3.4395838,0.264583 3.174999,1.322917 1.322917,2.910416 L 12.7,93.397915 7.9374999,89.429166 Z"
					id="path74340"
				/><path
					style="opacity:1;fill:#c36515;fill-rule:evenodd;stroke-width:3;stroke-linecap:round;stroke-linejoin:round;stroke-miterlimit:3;stroke-opacity:0.498674;paint-order:stroke fill markers;fill-opacity:1"
					d="m 7.9374999,99.218749 6.6145831,-2.645834 2.116667,7.143755 -8.9958334,-3.43959 z"
					id="path74342"
				/><path
					style="opacity:1;fill:#c36515;fill-rule:evenodd;stroke-width:3;stroke-linecap:round;stroke-linejoin:round;stroke-miterlimit:3;stroke-opacity:0.498674;paint-order:stroke fill markers;fill-opacity:1"
					d="m 12.435417,118.79792 5.291666,0.26458 1.852083,-11.37708 -5.55625,6.08541 v 2.64584 z"
					id="path74344"
				/><path
					style="opacity:1;fill:#c36515;fill-rule:evenodd;stroke-width:3;stroke-linecap:round;stroke-linejoin:round;stroke-miterlimit:3;stroke-opacity:0.498674;paint-order:stroke fill markers;fill-opacity:1"
					d="m 21.695833,117.73958 9.789583,-0.26458 c -1.351406,-4.29895 -1.400653,-10.10814 -5.820833,-10.84792 -3.57155,-0.32698 -3.970559,5.03348 -3.96875,11.1125 z"
					id="path74346"
				/><path
					style="opacity:1;fill:#c36515;fill-rule:evenodd;stroke-width:3;stroke-linecap:round;stroke-linejoin:round;stroke-miterlimit:3;stroke-opacity:0.498674;paint-order:stroke fill markers;fill-opacity:1"
					d="m 33.866666,117.73958 h 8.202083 l -7.672916,-7.40833 c -0.883859,2.4105 -2.232736,4.78227 -0.529167,7.40833 z"
					id="path74348"
				/><path
					style="opacity:1;fill:#c36515;fill-rule:evenodd;stroke-width:3;stroke-linecap:round;stroke-linejoin:round;stroke-miterlimit:3;stroke-opacity:0.498674;paint-order:stroke fill markers;fill-opacity:1"
					d="m 47.095833,51.329166 3.704166,-1.058333 1.322917,7.14375 -5.55625,-1.852084 z"
					id="path74350"
				/><path
					style="opacity:1;fill:#c36515;fill-rule:evenodd;stroke-width:3;stroke-linecap:round;stroke-linejoin:round;stroke-miterlimit:3;stroke-opacity:0.498674;paint-order:stroke fill markers;fill-opacity:1"
					d="m 43.656249,106.89167 -8.202083,2.64583 -1.852083,-6.87917 2.38125,-2.64583 3.175,3.43958 3.96875,0.26459 z"
					id="path74354"
				/><path
					style="opacity:1;fill:#c36515;fill-rule:evenodd;stroke-width:3;stroke-linecap:round;stroke-linejoin:round;stroke-miterlimit:3;stroke-opacity:0.498674;paint-order:stroke fill markers;fill-opacity:1"
					d="m 47.624999,107.95 6.35,1.05833 c -0.05825,2.96343 -0.965597,5.53187 -4.497916,6.87917 -1.451112,-2.42831 -1.68353,-5.17458 -1.852084,-7.9375 z"
					id="path74356"
				/><path
					style="opacity:1;fill:#c36515;fill-rule:evenodd;stroke-width:3;stroke-linecap:round;stroke-linejoin:round;stroke-miterlimit:3;stroke-opacity:0.498674;paint-order:stroke fill markers;fill-opacity:1"
					d="m 81.491666,108.74375 c -1.196935,2.29619 -2.667429,4.59387 -1.852084,6.87917 -4.16989,-1.15959 -6.271678,-3.85335 -8.995833,-6.08542 z"
					id="path74362"
				/><path
					style="opacity:1;fill:#c36515;fill-rule:evenodd;stroke-width:3;stroke-linecap:round;stroke-linejoin:round;stroke-miterlimit:3;stroke-opacity:0.498674;paint-order:stroke fill markers;fill-opacity:1"
					d="m 84.137499,108.74375 5.55625,-6.87917 0.529167,-2.910415 1.852083,3.175005 c 1.072063,3.3568 -0.581484,5.27397 -1.322917,7.67291 -2.057185,0.36524 -4.269337,-0.023 -6.614583,-1.05833 z"
					id="path74364"
				/><path
					style="opacity:1;fill:#c36515;fill-rule:evenodd;stroke-width:3;stroke-linecap:round;stroke-linejoin:round;stroke-miterlimit:3;stroke-opacity:0.498674;paint-order:stroke fill markers;fill-opacity:1"
					d="m 48.418749,63.499999 4.497917,-2.38125 8.466667,6.35 h 3.439583 l 7.14375,-6.35 3.439583,2.38125 -8.466667,6.879167 -2.381249,4.497916 h -2.910417 l -2.596872,-4.497916 z"
					id="path74370"
				/><path
					style="opacity:1;fill:#0db4a9;fill-rule:evenodd;stroke-width:3;stroke-linecap:round;stroke-linejoin:round;stroke-miterlimit:3;stroke-opacity:0.498674;paint-order:stroke fill markers;fill-opacity:1"
					d="m 45.508333,70.643749 h 7.14375 v -2.38125 L 45.772916,64.29081 Z"
					id="path74372"
				/><path
					style="opacity:1;fill:#0db4a9;fill-opacity:1;fill-rule:evenodd;stroke-width:3;stroke-linecap:round;stroke-linejoin:round;stroke-miterlimit:3;stroke-opacity:0.498674;paint-order:stroke fill markers"
					d="m 80.036458,69.05625 h -7.14375 V 66.675 l 6.879167,-3.971689 z"
					id="path75154"
				/><path
					style="opacity:1;fill:#938556;fill-opacity:1;fill-rule:evenodd;stroke-width:3;stroke-linecap:round;stroke-linejoin:round;stroke-miterlimit:3;stroke-opacity:0.498674;paint-order:stroke fill markers"
					d="m 31.485416,92.868749 c 0,-0.264583 -5.291666,-2.38125 -5.291666,-2.38125 l -1.322917,-8.73125 5.820833,-8.73125 c 1.730525,6.530979 0.929482,13.206336 0.79375,19.84375 z"
					id="path75882"
				/><path
					style="opacity:1;fill:#c36515;fill-rule:evenodd;stroke-width:3;stroke-linecap:round;stroke-linejoin:round;stroke-miterlimit:3;stroke-opacity:0.498674;paint-order:stroke fill markers;fill-opacity:1"
					d="M 36.777083,96.837499 31.75,82.285416 29.36875,84.402082 31.75,94.720832 Z"
					id="path74366"
				/><path
					style="opacity:1;fill:#938556;fill-opacity:1;fill-rule:evenodd;stroke-width:3;stroke-linecap:round;stroke-linejoin:round;stroke-miterlimit:3;stroke-opacity:0.498674;paint-order:stroke fill markers"
					d="m 96.043749,93.133332 4.233331,-2.444115 2.11667,-9.726718 -9.525001,-10.583333 -3.96875,-1.058334 2.910417,10.31875 c 1.820564,0.883026 2.87188,2.343657 3.704166,3.96875 z"
					id="path75992"
				/><path
					style="opacity:1;fill:#615035;fill-opacity:1;fill-rule:evenodd;stroke-width:3;stroke-linecap:round;stroke-linejoin:round;stroke-miterlimit:3;stroke-opacity:0.498674;paint-order:stroke fill markers"
					d="m 37.30625,97.102082 v 5.027088 L 55.178848,91.810416 51.593749,88.370832 50.270833,86.518749 41.010416,89.00007 Z"
					id="path76278"
				/><path
					style="opacity:1;fill:#615035;fill-opacity:1;fill-rule:evenodd;stroke-width:3;stroke-linecap:round;stroke-linejoin:round;stroke-miterlimit:3;stroke-opacity:0.498674;paint-order:stroke fill markers"
					d="m 89.693749,101.86458 v -4.762498 l -7.408333,-11.641666 -7.14375,1.058333 -1.322917,1.322917 3.360661,5.820833 9.603922,8.466671 z"
					id="path76334"
				/><path
					style="opacity:1;fill:#938556;fill-opacity:1;fill-rule:evenodd;stroke-width:3;stroke-linecap:round;stroke-linejoin:round;stroke-miterlimit:3;stroke-opacity:0.498674;paint-order:stroke fill markers"
					d="m 43.391666,106.89167 4.233333,1.05833 6.35,1.05833 16.139583,1.05834 0.529167,-0.52917 10.847917,-0.79375 h 2.645833 l 5.55625,-6.87917 -11.90625,-12.699998 -3.96875,-1.322916 -10.31875,-1.852084 h -1.322916 l -13.49375,3.175 -4.7625,4.7625 -6.35,7.937498 0.79375,4.49792 z"
					id="path75994"
				/><path
					style="opacity:1;fill:#c3a843;fill-opacity:1;fill-rule:evenodd;stroke-width:3;stroke-linecap:round;stroke-linejoin:round;stroke-miterlimit:3;stroke-opacity:0.498674;paint-order:stroke fill markers"
					d="m 37.30625,97.102082 9.260416,-9.525 3.704167,-0.992529 C 48.46167,81.137979 47.687139,75.899027 46.831249,70.643749 V 43.920833 c -6.37641,4.685788 -6.990024,18.992429 -10.847916,28.574999 z"
					id="path76050"
				/><path
					style="opacity:1;fill:#c3a843;fill-opacity:1;fill-rule:evenodd;stroke-width:3;stroke-linecap:round;stroke-linejoin:round;stroke-miterlimit:3;stroke-opacity:0.498674;paint-order:stroke fill markers"
					d="m 89.693749,97.102082 -8.995833,-8.995833 -5.55625,-1.488792 4.233333,-11.475791 V 34.925 l 12.7,30.162499 c 1.994984,4.41041 -1.221475,20.521276 -2.38125,32.014583 z"
					id="path76106"
				/><path
					style="opacity:1;fill:#c36515;fill-rule:evenodd;stroke-width:3;stroke-linecap:round;stroke-linejoin:round;stroke-miterlimit:3;stroke-opacity:0.498674;paint-order:stroke fill markers;fill-opacity:1"
					d="m 91.545832,96.308332 4.497917,-3.175 0.79375,-8.202083 -1.5875,-1.5875 z"
					id="path74368"
				/><path
					style="opacity:1;fill:#c3a843;fill-opacity:1;fill-rule:evenodd;stroke-width:3;stroke-linecap:round;stroke-linejoin:round;stroke-miterlimit:3;stroke-opacity:0.498674;paint-order:stroke fill markers"
					d="m 51.59375,88.635417 3.439583,-7.408335 1.852083,6.35 z"
					id="path76108"
				/><path
					style="opacity:1;fill:#c3a843;fill-opacity:1;fill-rule:evenodd;stroke-width:3;stroke-linecap:round;stroke-linejoin:round;stroke-miterlimit:3;stroke-opacity:0.498674;paint-order:stroke fill markers"
					d="m 60.060416,80.697916 2.116667,6.35 h -4.497917 z"
					id="path76272"
				/><path
					style="opacity:1;fill:#c3a843;fill-opacity:1;fill-rule:evenodd;stroke-width:3;stroke-linecap:round;stroke-linejoin:round;stroke-miterlimit:3;stroke-opacity:0.498674;paint-order:stroke fill markers"
					d="m 65.881249,80.697916 1.852083,6.614583 -4.497916,-0.79375 z"
					id="path76274"
				/><path
					style="opacity:1;fill:#c3a843;fill-opacity:1;fill-rule:evenodd;stroke-width:3;stroke-linecap:round;stroke-linejoin:round;stroke-miterlimit:3;stroke-opacity:0.498674;paint-order:stroke fill markers"
					d="m 71.172916,81.491666 2.910416,7.14375 -4.233333,-1.322917 z"
					id="path76276"
				/><path
					style="opacity:1;fill:#c36515;fill-rule:evenodd;stroke-width:3;stroke-linecap:round;stroke-linejoin:round;stroke-miterlimit:3;stroke-opacity:0.498674;paint-order:stroke fill markers;fill-opacity:1"
					d="m 53.974999,109.00833 8.73125,-6.87916 7.408333,7.9375 c -2.961242,1.80243 -5.21332,3.49433 -5.556249,7.9375 H 62.70625 c -0.427317,-0.97445 -1.531108,-2.58317 -2.116667,-3.43959 -1.80462,-2.63936 -3.002948,-4.26466 -6.614584,-5.55625 z"
					id="path74358"
				/></g
			></g
		><metadata id="metadata91721">
			<!-- svelte-ignore illegal-attribute-character -->
			<!-- 	data-license="https://creativecommons.org/licenses/by-nc-sa/4.0/" data-author="Doriel Rivalet"--></metadata
		></svg
	>
</div>
