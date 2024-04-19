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
		xmlns:svg="http://www.w3.org/2000/svg"
		xmlns:rdf="http://www.w3.org/1999/02/22-rdf-syntax-ns#"
		xmlns:cc="http://creativecommons.org/ns#"
		xmlns:dc="http://purl.org/dc/elements/1.1/"
		><defs id="defs2"
			><filter
				style="color-interpolation-filters:sRGB;"
				id="filter48265"
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
					id="feComposite48251"
				/><feColorMatrix
					in="composite1"
					values="1"
					type="saturate"
					result="colormatrix1"
					id="feColorMatrix48253"
				/><feFlood
					flood-opacity="1"
					flood-color="rgb(0,0,0)"
					result="flood1"
					id="feFlood48255"
				/><feBlend
					in="flood1"
					in2="colormatrix1"
					mode="multiply"
					result="blend1"
					id="feBlend48257"
				/><feBlend
					in2="blend1"
					mode="screen"
					result="blend2"
					id="feBlend48259"
				/><feColorMatrix
					in="blend2"
					values="1"
					type="saturate"
					result="colormatrix2"
					id="feColorMatrix48261"
				/><feComposite
					in="colormatrix2"
					in2="SourceGraphic"
					operator="in"
					k2="1"
					result="composite2"
					id="feComposite48263"
				/></filter
			></defs
		><g id="layer1"
			><g
				id="g47886"
				style="filter:url(#filter48265)"
				transform="translate(1.0583333,1.5875)"
				><path
					style="opacity:1;fill:#cd853c;fill-opacity:1;fill-rule:evenodd;stroke-width:1.2;stroke-linecap:round;stroke-linejoin:round;stroke-miterlimit:3;paint-order:stroke fill markers"
					d="m 30.95625,31.485416 c -2.322772,7.74106 -6.982671,14.566095 -3.439584,24.60625 l -2.645833,1.852083 -0.529167,-0.529166 -3.175,-8.466667 1.322917,-5.291667 6.614583,-10.583333 z"
					id="path47762"
				/><path
					style="opacity:1;fill:#d8d7a7;fill-opacity:1;fill-rule:evenodd;stroke-width:1.2;stroke-linecap:round;stroke-linejoin:round;stroke-miterlimit:3;paint-order:stroke fill markers"
					d="M 14.022916,66.939582 21.695833,55.827083 19.05,47.360416 28.310417,31.485417 h 2.645833 c -2.928174,4.849575 -5.96715,9.912761 -8.202084,15.081249 -0.02736,3.881685 0.898826,7.41767 2.116667,10.847917 l 0.264583,7.672916 -10.31875,2.645833 z"
					id="path47764"
				/><path
					style="opacity:1;fill:#000000;fill-opacity:1;fill-rule:evenodd;stroke-width:1.2;stroke-linecap:round;stroke-linejoin:round;stroke-miterlimit:3;paint-order:stroke fill markers"
					d="m 19.84375,65.881249 1.5875,-4.7625 h 3.439583 l 1.058333,2.910417 -3.704166,1.852083 z"
					id="path47766"
				/><circle
					style="opacity:1;fill:#ff0000;fill-opacity:1;fill-rule:evenodd;stroke-width:0.9;stroke-linecap:round;stroke-linejoin:round;stroke-miterlimit:3;paint-order:stroke fill markers"
					id="circle47768"
					cx="22.489584"
					cy="63.235416"
					r="0.79374975"
				/><path
					style="opacity:1;fill:#cd853c;fill-opacity:1;fill-rule:evenodd;stroke-width:1.2;stroke-linecap:round;stroke-linejoin:round;stroke-miterlimit:3;paint-order:stroke fill markers"
					d="m 19.84375,65.881249 c 1.079928,-1.857271 2.255748,-3.671121 5.027083,-4.7625 l 5.291667,0.529167 v -5.027083 l -2.645834,-0.529167 c -3.307714,1.300597 -6.698669,3.895729 -10.31875,10.054166 l 1.5875,0.79375 z"
					id="path47770"
				/><path
					style="opacity:1;fill:#675f59;fill-opacity:1;fill-rule:evenodd;stroke-width:1.2;stroke-linecap:round;stroke-linejoin:round;stroke-miterlimit:3;paint-order:stroke fill markers"
					d="m 45.243749,76.729166 v -9.525 l 1.5875,-1.5875 h 2.645834 l 3.828325,-14.2875 h -4.092909 -6.614583 l -2.116667,0.264583 -4.497916,0.79375 -2.38125,0.79375 -6.085416,2.910418 1.852083,3.174999 -4.497917,1.852083 c -0.364046,2.079164 -0.867057,4.106236 -5.027083,4.7625 l -2.645834,0.264583 -3.175,0.79375 -2.645833,0.79375 5.291667,5.55625 -0.529167,-4.497916 5.027083,1.058333 -1.322916,-2.116667 1.058333,-0.264583 3.704167,0.529167 -1.322917,-1.5875 1.058333,-0.529167 3.704167,1.058333 -1.058333,-1.852083 c 2.886994,-0.433188 3.351108,-0.263341 3.439583,0 v 4.233333 c -1.480038,-0.502458 -2.98494,-0.697957 -4.497917,-0.79375 0.554213,0.458675 1.066303,0.93209 1.058334,1.5875 -0.49996,0.646577 -3.039818,0.149622 -4.497917,0 1.000328,0.789363 1.396675,1.471293 1.5875,2.116667 -1.491776,0.11609 -2.995916,-0.103264 -4.497917,-0.264583 l 3.704167,3.439583 5.291667,-3.439583 4.497916,-2.645834 7.9375,-7.143749 2.645833,1.322916 -5.291666,9.260417 1.058333,1.058333 z"
					id="path47772"
				/><path
					style="opacity:1;fill:#675f59;fill-opacity:1;fill-rule:evenodd;stroke-width:1.2;stroke-linecap:round;stroke-linejoin:round;stroke-miterlimit:3;paint-order:stroke fill markers"
					d="M 51.858333,14.2875 49.741666,8.7312499 H 122.2375 l -2.11667,4.2333331 -46.037498,8.202083 z"
					id="path47774"
				/><path
					style="opacity:1;fill:#675f59;fill-opacity:1;fill-rule:evenodd;stroke-width:1.2;stroke-linecap:round;stroke-linejoin:round;stroke-miterlimit:3;paint-order:stroke fill markers"
					d="m 37.30625,19.05 -2.645834,-2.645834 8.466667,-0.264583 3.439583,1.322917 -0.529167,3.96875 -7.672916,-1.322917 z"
					id="path47776"
				/><path
					style="opacity:1;fill:#cd863c;fill-opacity:1;fill-rule:evenodd;stroke-width:1.2;stroke-linecap:round;stroke-linejoin:round;stroke-miterlimit:3;paint-order:stroke fill markers"
					d="m 19.05,12.7 4.7625,3.96875 h 28.574999 l 0.529167,-3.704167 -3.175,-4.2333331 h -32.54375 z"
					id="path47778"
				/><path
					style="opacity:1;fill:#675f59;fill-opacity:1;fill-rule:evenodd;stroke-width:1.2;stroke-linecap:round;stroke-linejoin:round;stroke-miterlimit:3;paint-order:stroke fill markers"
					d="m 46.302083,29.633333 -2.116667,-2.910417 10.31875,-0.264583 1.322917,5.027083 -10.847917,-0.264583 z"
					id="path47780"
				/><path
					style="opacity:1;fill:#d8d7a7;fill-opacity:1;fill-rule:evenodd;stroke-width:1.2;stroke-linecap:round;stroke-linejoin:round;stroke-miterlimit:3;paint-order:stroke fill markers"
					d="M 47.889583,29.36875 H 29.897916 l 7.14375,4.233333 h 16.139583 z"
					id="path47782"
				/><path
					style="opacity:1;fill:#675f59;fill-opacity:1;fill-rule:evenodd;stroke-width:1.2;stroke-linecap:round;stroke-linejoin:round;stroke-miterlimit:3;paint-order:stroke fill markers"
					d="m 56.356249,71.702082 h -4.233333 c -1.135031,0.438706 -1.766077,1.051345 -1.852083,1.852084 v 3.96875 c 0.354235,0.50485 0.706992,0.704251 1.058333,0.611028 l 2.910417,-0.08186 c 0.429122,-0.416918 0.268385,-0.74567 0,-1.058333 l -1.322917,-10e-7 c -0.346677,0.117462 -0.674428,0.09981 -0.916543,-0.529167 v -2.38125 c 0.296477,-0.690237 0.827697,-1.07069 1.710293,-0.987438 h 1.852083 c 0.749484,0.19735 1.045753,0.646027 1.058334,1.252022 V 80.16875 H 47.360416 V 68.2625 h 4.497917 l 0.79375,-1.5875 -1.5875,-2.645833 2.116666,0.264583 0.529167,-1.5875 -1.322917,-2.910416 2.116667,0.529166 c 0.335333,-3.866537 0.408707,-7.778217 0,-11.90625 -0.873548,-3.997055 -2.090149,-7.715916 -3.704167,-11.112499 h 8.202084 l 5.820833,15.610416 -3.175,18.785416 z"
					id="path47784"
				/><path
					style="opacity:1;fill:#cd863c;fill-opacity:1;fill-rule:evenodd;stroke-width:1.2;stroke-linecap:round;stroke-linejoin:round;stroke-miterlimit:3;paint-order:stroke fill markers"
					d="m 59.002083,37.30625 h -15.875 l -4.497917,-3.704167 h 12.435417 l -3.175,-4.233333 h 6.879166 l 6.085417,6.085416 z"
					id="path47786"
				/><path
					style="opacity:1;fill:#d8d7a7;fill-opacity:1;fill-rule:evenodd;stroke-width:1.2;stroke-linecap:round;stroke-linejoin:round;stroke-miterlimit:3;paint-order:stroke fill markers"
					d="M 20.108333,19.05 26.9875,23.021688 H 43.656249 L 39.68456,19.05 Z"
					id="path47788"
				/><path
					style="opacity:1;fill:#cd863c;fill-opacity:1;fill-rule:evenodd;stroke-width:1.2;stroke-linecap:round;stroke-linejoin:round;stroke-miterlimit:3;paint-order:stroke fill markers"
					d="M 37.30625,26.9875 H 55.562499 L 47.624999,19.05 H 38.1 l 3.968749,3.96875 H 32.54375 Z"
					id="path47790"
				/><path
					style="opacity:1;fill:#764133;fill-opacity:1;fill-rule:evenodd;stroke-width:1.2;stroke-linecap:round;stroke-linejoin:round;stroke-miterlimit:3;paint-order:stroke fill markers"
					d="m 86.783332,76.464582 c -6.960871,-4.063081 -15.467976,-3.694396 -25.135416,0 l -0.916543,0.529167 h -2.52304 v -3.175 c -0.09891,-1.325483 -0.949071,-1.752669 -1.852084,-2.116667 1.478234,-4.343312 2.359343,-8.364667 3.33206,-12.435416 0.346627,-4.859113 0.627842,-9.699994 0,-14.2875 -0.275977,-4.650708 -2.059101,-9.596599 -5.471876,-15.436154 -2.332148,-3.99051 -5.984824,-7.977751 -10.567637,-12.345096 -1.658781,-1.575618 -3.336006,-2.940962 -5.01963,-4.233333 h 54.239583 l 12.964581,55.827083 z"
					id="path47792"
				/><path
					style="opacity:1;fill:#cd863c;fill-opacity:1;fill-rule:evenodd;stroke-width:1.2;stroke-linecap:round;stroke-linejoin:round;stroke-miterlimit:3;paint-order:stroke fill markers"
					d="M 96.837499,84.137499 86.783332,76.464582 c 2.033653,-6.518706 5.14615,-10.196331 8.202083,-14.022916 H 66.674999 C 73.189762,52.308305 80.198842,43.139418 88.106249,39.6875 h -23.01875 c 2.217952,-4.213928 5.32416,-8.194216 8.63795,-12.085384 4.47298,-5.252331 9.237751,-10.486699 17.291217,-14.637533 h 25.400004 l -12.17084,12.170833 5.82084,8.995834 -1.32292,9.260416 v 12.435417 l -0.26458,15.610416 z"
					id="path47794"
				/><path
					style="opacity:1;fill:#fcd34d;fill-opacity:1;fill-rule:evenodd;stroke-width:1.2;stroke-linecap:round;stroke-linejoin:round;stroke-miterlimit:3;paint-order:stroke fill markers"
					d="m 101.33542,91.545832 2.11666,-5.027083 c -2.23775,-0.56836 -4.506778,-0.92246 -6.614581,-2.38125 0.680984,-14.81948 5.904821,-22.347447 11.906251,-28.310416 H 85.195832 C 93.686645,45.298314 101.98945,37.860367 110.06667,34.13125 H 81.756249 C 91.253242,23.16045 102.64738,16.787463 115.09375,12.964583 h 5.02708 L 110.06667,34.13125 h 14.02291 L 114.3,55.827083 h 9.78958 c -1.23294,3.779145 -2.6036,7.718176 -5.55625,13.493749 l -0.79375,11.641667 -13.22916,11.90625 z"
					id="path47796"
				/><path
					style="opacity:1;fill:#afa2a1;fill-opacity:1;fill-rule:evenodd;stroke-width:1.2;stroke-linecap:round;stroke-linejoin:round;stroke-miterlimit:3;paint-order:stroke fill markers"
					d="m 46.302083,115.09375 v -3.70417 h 39.158333 c 2.067218,-0.29997 4.135031,-0.59912 6.085416,-1.05833 l 4.497917,-2.11667 2.645833,-1.85208 c 1.312608,-1.77082 2.460228,-3.57277 2.645838,-5.55625 v -5.556251 -3.704167 c 5.00402,-5.698059 10.19079,-11.303221 14.2875,-17.4625 l 3.43958,9.260417 v 22.489581 l -10.58333,9.26042 -27.781254,2.64583 H 43.656249 Z"
					id="path47798"
				/><path
					style="opacity:1;fill:#afa2a1;fill-opacity:1;fill-rule:evenodd;stroke-width:1.2;stroke-linecap:round;stroke-linejoin:round;stroke-miterlimit:3;paint-order:stroke fill markers"
					d="m 42.333333,101.33542 v 7.67291 h -12.7 c -4.737952,-0.90604 -7.035898,-3.50093 -8.202083,-6.87916 H 28.575 l 6.085416,-2.645838 h 7.408333 z"
					id="path47800"
				/><path
					style="opacity:1;fill:#675f59;fill-opacity:1;fill-rule:evenodd;stroke-width:1.2;stroke-linecap:round;stroke-linejoin:round;stroke-miterlimit:3;paint-order:stroke fill markers"
					d="m 38.364583,115.09375 h 52.916666 c 10.972671,-0.56622 15.089231,-2.56656 17.991671,-4.82086 4.76932,-4.68192 6.19373,-10.299493 6.08541,-16.345808 v -8.466666 l 0.26459,-11.377084 2.91041,-4.7625 c 2.59019,5.106069 5.15734,10.200249 4.23334,13.49375 v 3.630943 6.95239 3.400134 l -0.26459,7.183201 -0.79375,3.175 c -1.24562,5.04921 -5.44477,7.93153 -10.31875,10.31875 -2.45627,1.28314 -5.22373,1.32854 -7.9375,1.5875 H 42.862499 l -4.497916,-2.59687 z"
					id="path47802"
				/><path
					style="opacity:1;fill:#764133;fill-opacity:1;fill-rule:evenodd;stroke-width:1.2;stroke-linecap:round;stroke-linejoin:round;stroke-miterlimit:3;paint-order:stroke fill markers"
					d="m 10.583333,100.0125 7.672917,3.43958 -9.2604168,6.61459 H 2.9104166 c 1.9557002,-3.51907 4.4023432,-6.90138 7.6729164,-10.05417 z"
					id="path47804"
				/><path
					style="opacity:1;fill:#cd863c;fill-opacity:1;fill-rule:evenodd;stroke-width:1.2;stroke-linecap:round;stroke-linejoin:round;stroke-miterlimit:3;paint-order:stroke fill markers"
					d="M 18.25625,103.45208 C 16.862372,99.967082 14.491723,97.90991 15.610416,90.752082 L 8.4666666,90.222916 c -0.3310288,1.283139 -0.373982,2.754395 0,4.497916 1.2759916,1.674616 1.7584454,3.473421 2.1166664,5.291668 z"
					id="path47806"
				/><path
					style="opacity:1;fill:#fcd34d;fill-opacity:1;fill-rule:evenodd;stroke-width:1.2;stroke-linecap:round;stroke-linejoin:round;stroke-miterlimit:3;paint-order:stroke fill markers"
					d="m 8.4666666,90.222916 c 1.052804,-4.120134 3.2096494,-8.56963 8.7312494,-14.022917 h 2.910417 c -2.091802,4.564801 -3.837112,9.296792 -4.497917,14.552083 z"
					id="path47808"
				/><path
					style="opacity:1;fill:#d8d7a7;fill-opacity:1;fill-rule:evenodd;stroke-width:1.2;stroke-linecap:round;stroke-linejoin:round;stroke-miterlimit:3;paint-order:stroke fill markers"
					d="m 34.395833,111.38958 h 11.90625 v 3.70417 H 36.5125 Z"
					id="path47810"
				/><path
					style="opacity:1;fill:#cd863c;fill-opacity:1;fill-rule:evenodd;stroke-width:1.2;stroke-linecap:round;stroke-linejoin:round;stroke-miterlimit:3;paint-order:stroke fill markers"
					d="m 13.49375,119.0625 10.054166,-7.67292 h 10.847917 l 8.466666,7.67292 z"
					id="path47812"
				/><path
					style="opacity:1;fill:#cd863c;fill-opacity:1;fill-rule:evenodd;stroke-width:1.2;stroke-linecap:round;stroke-linejoin:round;stroke-miterlimit:3;paint-order:stroke fill markers"
					d="m 52.122916,115.09375 h 6.085417 c -2.24381,5.0979 -5.344901,5.12366 -8.466667,5.02708 1.95384,-1.29344 2.371073,-3.0932 2.38125,-5.02708 z"
					id="path47814"
				/><path
					style="opacity:1;fill:#cd863c;fill-opacity:1;fill-rule:evenodd;stroke-width:1.2;stroke-linecap:round;stroke-linejoin:round;stroke-miterlimit:3;paint-order:stroke fill markers"
					d="m 62.441667,115.09375 h 6.085417 c -2.24381,5.0979 -5.344901,5.12366 -8.466667,5.02708 1.95384,-1.29344 2.371073,-3.0932 2.38125,-5.02708 z"
					id="path47816"
				/><path
					style="opacity:1;fill:#cd863c;fill-opacity:1;fill-rule:evenodd;stroke-width:1.2;stroke-linecap:round;stroke-linejoin:round;stroke-miterlimit:3;paint-order:stroke fill markers"
					d="m 73.686458,115.09375 h 6.085417 c -2.24381,5.0979 -5.344901,5.12366 -8.466667,5.02708 1.95384,-1.29344 2.371073,-3.0932 2.38125,-5.02708 z"
					id="path47818"
				/><path
					style="opacity:1;fill:#cd863c;fill-opacity:1;fill-rule:evenodd;stroke-width:1.2;stroke-linecap:round;stroke-linejoin:round;stroke-miterlimit:3;paint-order:stroke fill markers"
					d="m 117.73958,106.49479 v -6.08541 c 5.34176,2.14266 6.25755,5.44586 6.08542,8.59895 -1.29344,-1.95384 -4.15154,-2.50336 -6.08542,-2.51354 z"
					id="path47820"
				/><path
					style="opacity:1;fill:#cd863c;fill-opacity:1;fill-rule:evenodd;stroke-width:1.2;stroke-linecap:round;stroke-linejoin:round;stroke-miterlimit:3;paint-order:stroke fill markers"
					d="m 117.73958,95.382288 v -6.08541 c 5.34176,2.14266 6.25755,5.44586 6.08542,8.59895 -1.29344,-1.95384 -4.15154,-2.50336 -6.08542,-2.51354 z"
					id="path47822"
				/><path
					style="opacity:1;fill:#cd863c;fill-opacity:1;fill-rule:evenodd;stroke-width:1.21832;stroke-linecap:round;stroke-linejoin:round;stroke-miterlimit:3;paint-order:stroke fill markers"
					d="m 117.73958,84.986202 v -6.272657 c 5.34176,2.208589 6.25755,5.613428 6.08542,8.863538 -1.29344,-2.013959 -4.15154,-2.580388 -6.08542,-2.590881 z"
					id="path47824"
				/><path
					style="opacity:1;fill:#cd863c;fill-opacity:1;fill-rule:evenodd;stroke-width:1.2;stroke-linecap:round;stroke-linejoin:round;stroke-miterlimit:3;paint-order:stroke fill markers"
					d="m 51.064583,52.122916 -3.704166,1e-6 c -0.69408,-3.852803 0.98587,-4.993265 1.852083,-6.614584 -0.344517,2.686094 -0.197999,5.353624 1.852083,6.614583 z"
					id="path47826"
				/><path
					style="opacity:1;fill:#cd863c;fill-opacity:1;fill-rule:evenodd;stroke-width:1.2;stroke-linecap:round;stroke-linejoin:round;stroke-miterlimit:3;paint-order:stroke fill markers"
					d="m 44.45,53.975 -3.704167,-1e-6 c -1.270326,-2.830351 0.912933,-6.291249 1.852083,-9.525 0.0044,3.470161 -0.194575,7.038279 1.852084,9.525001 z"
					id="path47828"
				/><path
					style="opacity:1;fill:#cd863c;fill-opacity:1;fill-rule:evenodd;stroke-width:1.2;stroke-linecap:round;stroke-linejoin:round;stroke-miterlimit:3;paint-order:stroke fill markers"
					d="m 38.1,55.827083 h -3.96875 c -1.661491,-3.669541 0.226923,-7.981349 2.116666,-10.847917 -0.20982,4.168163 -0.657153,8.49488 1.852084,10.847917 z"
					id="path47830"
				/><path
					style="opacity:1;fill:#cd863c;fill-opacity:1;fill-rule:evenodd;stroke-width:1.2;stroke-linecap:round;stroke-linejoin:round;stroke-miterlimit:3;paint-order:stroke fill markers"
					d="m 52.122916,105.30417 h 3.439583 l -3.439583,3.43958 z"
					id="path47832"
				/><path
					style="opacity:1;fill:#cd863c;fill-opacity:1;fill-rule:evenodd;stroke-width:1.2;stroke-linecap:round;stroke-linejoin:round;stroke-miterlimit:3;paint-order:stroke fill markers"
					d="m 91.810416,102.39375 v 4.49792 l 4.233333,-4.49792 z"
					id="path47834"
				/><path
					style="opacity:1;fill:#675f59;fill-opacity:1;fill-rule:evenodd;stroke-width:1.2;stroke-linecap:round;stroke-linejoin:round;stroke-miterlimit:3;paint-order:stroke fill markers"
					d="m 91.810416,106.89167 h -16.66875 c -1.49775,-0.19361 -2.479156,-0.96437 -2.645834,-2.64584 V 88.106249 c 0.451274,-1.298353 1.172962,-2.425652 2.910417,-2.910417 h 14.022917 c 0.787842,0.38772 1.608508,0.648657 2.116666,2.116667 v 13.758331 h -8.995833 c -1.335451,-0.43684 -1.751339,-1.265967 -2.116667,-2.116665 v -6.879166 h 3.96875 v 2.116666 c 1.450251,1.352734 2.196422,0.721696 2.910417,0 V 91.545832 C 87.07358,90.949911 86.574998,90.459799 85.989582,90.222916 h -6.614583 c -0.638168,0.269069 -1.061527,0.725395 -1.322917,1.322916 v 7.672917 c 0.468859,1.139311 -0.176629,2.431711 3.175,3.175001 h 10.583334 z"
					id="path47836"
				/><path
					style="opacity:1;fill:#675f59;fill-opacity:1;fill-rule:evenodd;stroke-width:1.2;stroke-linecap:round;stroke-linejoin:round;stroke-miterlimit:3;paint-order:stroke fill markers"
					d="m 93.133332,89.429166 v -5.820834 l 3.96875,2.910417 z"
					id="path47838"
				/><path
					style="opacity:1;fill:#afa2a1;fill-opacity:1;fill-rule:evenodd;stroke-width:1.2;stroke-linecap:round;stroke-linejoin:round;stroke-miterlimit:3;paint-order:stroke fill markers"
					d="m 54.504166,92.074999 v 8.995831 c 0.31903,1.21294 1.326461,1.818 2.38125,2.38125 3.038263,-0.77903 8.336075,-1.29793 8.73125,-2.38125 v -4.233331 c 0.448895,-1.710862 1.392071,-2.932145 4.124446,-2.38125 h 0.638054 v -8.202086 l -3.175,-0.850739 -12.964583,3.47385 z"
					id="path47840"
				/><path
					style="opacity:1;fill:#675f59;fill-opacity:1;fill-rule:evenodd;stroke-width:1.2;stroke-linecap:round;stroke-linejoin:round;stroke-miterlimit:3;paint-order:stroke fill markers"
					d="M 91.281249,84.137499 H 72.760416 c -1.33588,-0.0038 -2.115623,0.720061 -2.38125,2.116667 -6.215047,-0.224903 -11.410929,1.939974 -15.875,5.820833 h -2.116667 v 10.583331 h -3.704166 v 2.64584 h 3.439583 v 3.43958 H 44.714583 V 82.020832 h 13.758333 l 1.5875,-3.175 c 8.656239,-2.743935 17.226406,-4.242031 25.4,0 3.452116,1.540085 4.88683,3.435287 5.820833,5.291667 z"
					id="path47842"
				/><path
					style="opacity:1;fill:#764133;fill-opacity:1;fill-rule:evenodd;stroke-width:1.2;stroke-linecap:round;stroke-linejoin:round;stroke-miterlimit:3;paint-order:stroke fill markers"
					d="m 91.545832,110.33125 4.497917,-2.11667 1.058333,5.82084 z"
					id="path47844"
				/><path
					style="opacity:1;fill:#764133;fill-opacity:1;fill-rule:evenodd;stroke-width:1.2;stroke-linecap:round;stroke-linejoin:round;stroke-miterlimit:3;paint-order:stroke fill markers"
					d="m 98.954165,106.09792 c 1.223615,-1.74069 2.115505,-3.43123 2.381255,-5.02709 v -5.820831 l 11.1125,5.556251 z"
					id="path47846"
				/><rect
					style="opacity:1;fill:#2d2323;fill-opacity:1;fill-rule:evenodd;stroke-width:1.2;stroke-linecap:round;stroke-linejoin:round;stroke-miterlimit:3;paint-order:stroke fill markers"
					id="rect47848"
					width="5.2916665"
					height="5.2916665"
					x="58.472916"
					y="23.8125"
				/><rect
					style="opacity:1;fill:#2d2323;fill-opacity:1;fill-rule:evenodd;stroke-width:1.2;stroke-linecap:round;stroke-linejoin:round;stroke-miterlimit:3;paint-order:stroke fill markers"
					id="rect47850"
					width="5.2916665"
					height="5.2916665"
					x="61.118748"
					y="15.081249"
				/><rect
					style="opacity:1;fill:#2d2323;fill-opacity:1;fill-rule:evenodd;stroke-width:1.2;stroke-linecap:round;stroke-linejoin:round;stroke-miterlimit:3;paint-order:stroke fill markers"
					id="rect47852"
					width="5.2916665"
					height="5.2916665"
					x="51.064583"
					y="16.139584"
				/><path
					style="opacity:1;fill:#d8d7a7;fill-opacity:1;fill-rule:evenodd;stroke-width:1.2;stroke-linecap:round;stroke-linejoin:round;stroke-miterlimit:3;paint-order:stroke fill markers"
					d="M 6.0854166,8.7312499 H 24.077083 L 30.427083,12.7 H 12.7 Z"
					id="path47854"
				/><path
					style="opacity:1;fill:#afa2a1;fill-opacity:1;fill-rule:evenodd;stroke-width:1.2;stroke-linecap:round;stroke-linejoin:round;stroke-miterlimit:3;paint-order:stroke fill markers"
					d="m 21.43125,101.07083 h 6.879166 L 33.3375,98.689582 31.485416,92.604166 30.1625,91.281249 h -8.73125 z"
					id="path47856"
				/><path
					style="opacity:1;fill:#675f59;fill-opacity:1;fill-rule:evenodd;stroke-width:1.2;stroke-linecap:round;stroke-linejoin:round;stroke-miterlimit:3;paint-order:stroke fill markers"
					d="m 42.333333,101.33542 v -5.027088 l -7.672917,3.175 c 1.701507,1.180918 4.322247,1.756748 7.672917,1.852088 z"
					id="path47858"
				/><path
					style="opacity:1;fill:#675f59;fill-opacity:1;fill-rule:evenodd;stroke-width:1.2;stroke-linecap:round;stroke-linejoin:round;stroke-miterlimit:3;paint-order:stroke fill markers"
					d="m 33.3375,98.689582 c -1.486726,-1.109892 -2.787095,-2.811208 -3.175,-7.408333 h 12.170833 v 3.704166 z"
					id="path47860"
				/><path
					style="opacity:1;fill:#afa2a1;fill-opacity:1;fill-rule:evenodd;stroke-width:1.2;stroke-linecap:round;stroke-linejoin:round;stroke-miterlimit:3;paint-order:stroke fill markers"
					d="M 34.13125,81.227082 29.633333,79.374999 34.660416,72.760416 38.89375,74.877082 38.1,80.433332 Z"
					id="path47862"
				/><path
					style="opacity:1;fill:#afa2a1;fill-opacity:1;fill-rule:evenodd;stroke-width:1.2;stroke-linecap:round;stroke-linejoin:round;stroke-miterlimit:3;paint-order:stroke fill markers"
					d="m 21.43125,89.958332 7.14375,-9.260416 4.7625,1.852083 1.5875,4.497917 -4.7625,2.910416 z"
					id="path47864"
				/><path
					style="opacity:1;fill:#675f59;fill-opacity:1;fill-rule:evenodd;stroke-width:1.2;stroke-linecap:round;stroke-linejoin:round;stroke-miterlimit:3;paint-order:stroke fill markers"
					d="m 30.1625,89.958332 c 0.37244,-2.798449 1.640181,-5.167446 3.175,-7.408333 l 8.995833,3.439583 v 3.96875 z"
					id="path47866"
				/><path
					style="opacity:1;fill:#675f59;fill-opacity:1;fill-rule:evenodd;stroke-width:1.2;stroke-linecap:round;stroke-linejoin:round;stroke-miterlimit:3;paint-order:stroke fill markers"
					d="m 34.13125,81.227082 c 1.272053,-2.193434 2.894214,-4.301666 4.7625,-6.35 2.174219,1.512796 7.276725,3.711993 6.349999,4.497917 h -2.910416 v 5.291667 z"
					id="path47868"
				/><path
					style="opacity:1;fill:#764133;fill-opacity:1;fill-rule:evenodd;stroke-width:1.2;stroke-linecap:round;stroke-linejoin:round;stroke-miterlimit:3;paint-order:stroke fill markers"
					d="m 40.48125,64.558333 4.124446,-2.645834 v -6.35 l -4.124447,2.38125 z"
					id="path47870"
				/><path
					style="opacity:1;fill:#cd863c;fill-opacity:1;fill-rule:evenodd;stroke-width:1.2;stroke-linecap:round;stroke-linejoin:round;stroke-miterlimit:3;paint-order:stroke fill markers"
					d="M 40.481249,57.943749 36.5125,60.235107 v 6.969059 l 3.96875,-2.645833 z"
					id="path47872"
				/><path
					style="opacity:1;fill:#fcd34d;fill-opacity:1;fill-rule:evenodd;stroke-width:1.2;stroke-linecap:round;stroke-linejoin:round;stroke-miterlimit:3;paint-order:stroke fill markers"
					d="m 36.5125,67.204166 v -6.879167 l -3.439584,1.985844 v 7.009989 z"
					id="path47874"
				/><path
					style="opacity:1;fill:#afa2a1;fill-opacity:1;fill-rule:evenodd;stroke-width:1.2;stroke-linecap:round;stroke-linejoin:round;stroke-miterlimit:3;paint-order:stroke fill markers"
					d="m 39.422916,73.818749 -3.96875,-2.116667 5.55625,-7.672916 C 41.11024,62.824582 40.621875,62.65324 39.6875,63.26538 l -3.156003,1.822119 v -1.322916 l 3.666172,-2.116667 1.606497,-0.92751 c 2.064753,-0.111284 3.550117,0.352716 3.704167,2.1386 -0.0089,1.68956 -0.501639,2.770495 -1.022493,3.815993 z"
					id="path47876"
				/><path
					style="opacity:1;fill:#d8d7a7;fill-opacity:1;fill-rule:evenodd;stroke-width:1.2;stroke-linecap:round;stroke-linejoin:round;stroke-miterlimit:3;paint-order:stroke fill markers"
					d="M 8.4666666,64.822916 3.96875,60.589583 l 6.085417,2.116666 1.5875,1.852084 -2.3812504,0.529166 z"
					id="path47878"
				/><path
					style="opacity:1;fill:#cd853c;fill-opacity:1;fill-rule:evenodd;stroke-width:1.2;stroke-linecap:round;stroke-linejoin:round;stroke-miterlimit:3;paint-order:stroke fill markers"
					d="m 10.31875,64.558333 -0.264583,-1.852084 2.38125,0.79375 0.264583,2.910417 -2.116667,0.79375 -2.1166664,-2.38125 z"
					id="path47880"
				/><path
					style="opacity:1;fill:#cd853c;fill-opacity:1;fill-rule:evenodd;stroke-width:1.2;stroke-linecap:round;stroke-linejoin:round;stroke-miterlimit:3;paint-order:stroke fill markers"
					d="m 16.933333,60.589583 3.175,-4.7625 -2.38125,-8.466667 6.35,-11.641666 -10.31875,4.233333 -3.175,2.38125 1.322917,6.614583 3.96875,11.90625 z"
					id="path47882"
				/><path
					style="opacity:1;fill:#d8d7a7;fill-opacity:1;fill-rule:evenodd;stroke-width:1.2;stroke-linecap:round;stroke-linejoin:round;stroke-miterlimit:3;paint-order:stroke fill markers"
					d="m 16.933333,60.589583 -3.175,5.027083 L 5.8208333,22.225 l 7.9374997,17.727083 -1.5875,4.7625 z"
					id="path47884"
				/></g
			><g id="g47760"
				><path
					style="opacity:1;fill:#cd853c;fill-opacity:1;fill-rule:evenodd;stroke-width:1.2;stroke-linecap:round;stroke-linejoin:round;stroke-miterlimit:3;paint-order:stroke fill markers"
					d="m 30.95625,31.485416 c -2.322772,7.74106 -6.982671,14.566095 -3.439584,24.60625 l -2.645833,1.852083 -0.529167,-0.529166 -3.175,-8.466667 1.322917,-5.291667 6.614583,-10.583333 z"
					id="path47627"
				/><path
					style="opacity:1;fill:#d8d7a7;fill-opacity:1;fill-rule:evenodd;stroke-width:1.2;stroke-linecap:round;stroke-linejoin:round;stroke-miterlimit:3;paint-order:stroke fill markers"
					d="M 14.022916,66.939582 21.695833,55.827083 19.05,47.360416 28.310417,31.485417 h 2.645833 c -2.928174,4.849575 -5.96715,9.912761 -8.202084,15.081249 -0.02736,3.881685 0.898826,7.41767 2.116667,10.847917 l 0.264583,7.672916 -10.31875,2.645833 z"
					id="path46791"
				/><path
					style="opacity:1;fill:#000000;fill-opacity:1;fill-rule:evenodd;stroke-width:1.2;stroke-linecap:round;stroke-linejoin:round;stroke-miterlimit:3;paint-order:stroke fill markers"
					d="m 19.84375,65.881249 1.5875,-4.7625 h 3.439583 l 1.058333,2.910417 -3.704166,1.852083 z"
					id="path45278"
				/><circle
					style="opacity:1;fill:#ff0000;fill-opacity:1;fill-rule:evenodd;stroke-width:0.9;stroke-linecap:round;stroke-linejoin:round;stroke-miterlimit:3;paint-order:stroke fill markers"
					id="path45498"
					cx="22.489584"
					cy="63.235416"
					r="0.79374975"
				/><path
					style="opacity:1;fill:#cd853c;fill-opacity:1;fill-rule:evenodd;stroke-width:1.2;stroke-linecap:round;stroke-linejoin:round;stroke-miterlimit:3;paint-order:stroke fill markers"
					d="m 19.84375,65.881249 c 1.079928,-1.857271 2.255748,-3.671121 5.027083,-4.7625 l 5.291667,0.529167 v -5.027083 l -2.645834,-0.529167 c -3.307714,1.300597 -6.698669,3.895729 -10.31875,10.054166 l 1.5875,0.79375 z"
					id="path42876"
				/><path
					style="opacity:1;fill:#675f59;fill-opacity:1;fill-rule:evenodd;stroke-width:1.2;stroke-linecap:round;stroke-linejoin:round;stroke-miterlimit:3;paint-order:stroke fill markers"
					d="m 45.243749,76.729166 v -9.525 l 1.5875,-1.5875 h 2.645834 l 3.828325,-14.2875 h -4.092909 -6.614583 l -2.116667,0.264583 -4.497916,0.79375 -2.38125,0.79375 -6.085416,2.910418 1.852083,3.174999 -4.497917,1.852083 c -0.364046,2.079164 -0.867057,4.106236 -5.027083,4.7625 l -2.645834,0.264583 -3.175,0.79375 -2.645833,0.79375 5.291667,5.55625 -0.529167,-4.497916 5.027083,1.058333 -1.322916,-2.116667 1.058333,-0.264583 3.704167,0.529167 -1.322917,-1.5875 1.058333,-0.529167 3.704167,1.058333 -1.058333,-1.852083 c 2.886994,-0.433188 3.351108,-0.263341 3.439583,0 v 4.233333 c -1.480038,-0.502458 -2.98494,-0.697957 -4.497917,-0.79375 0.554213,0.458675 1.066303,0.93209 1.058334,1.5875 -0.49996,0.646577 -3.039818,0.149622 -4.497917,0 1.000328,0.789363 1.396675,1.471293 1.5875,2.116667 -1.491776,0.11609 -2.995916,-0.103264 -4.497917,-0.264583 l 3.704167,3.439583 5.291667,-3.439583 4.497916,-2.645834 7.9375,-7.143749 2.645833,1.322916 -5.291666,9.260417 1.058333,1.058333 z"
					id="path42115"
				/><path
					style="opacity:1;fill:#675f59;fill-opacity:1;fill-rule:evenodd;stroke-width:1.2;stroke-linecap:round;stroke-linejoin:round;stroke-miterlimit:3;paint-order:stroke fill markers"
					d="M 51.858333,14.2875 49.741666,8.7312499 H 122.2375 l -2.11667,4.2333331 -46.037498,8.202083 z"
					id="path40172"
				/><path
					style="opacity:1;fill:#675f59;fill-opacity:1;fill-rule:evenodd;stroke-width:1.2;stroke-linecap:round;stroke-linejoin:round;stroke-miterlimit:3;paint-order:stroke fill markers"
					d="m 37.30625,19.05 -2.645834,-2.645834 8.466667,-0.264583 3.439583,1.322917 -0.529167,3.96875 -7.672916,-1.322917 z"
					id="path40170"
				/><path
					style="opacity:1;fill:#cd863c;fill-opacity:1;fill-rule:evenodd;stroke-width:1.2;stroke-linecap:round;stroke-linejoin:round;stroke-miterlimit:3;paint-order:stroke fill markers"
					d="m 19.05,12.7 4.7625,3.96875 h 28.574999 l 0.529167,-3.704167 -3.175,-4.2333331 h -32.54375 z"
					id="path40097"
				/><path
					style="opacity:1;fill:#675f59;fill-opacity:1;fill-rule:evenodd;stroke-width:1.2;stroke-linecap:round;stroke-linejoin:round;stroke-miterlimit:3;paint-order:stroke fill markers"
					d="m 46.302083,29.633333 -2.116667,-2.910417 10.31875,-0.264583 1.322917,5.027083 -10.847917,-0.264583 z"
					id="path40168"
				/><path
					style="opacity:1;fill:#d8d7a7;fill-opacity:1;fill-rule:evenodd;stroke-width:1.2;stroke-linecap:round;stroke-linejoin:round;stroke-miterlimit:3;paint-order:stroke fill markers"
					d="M 47.889583,29.36875 H 29.897916 l 7.14375,4.233333 h 16.139583 z"
					id="path39882"
				/><path
					style="opacity:1;fill:#675f59;fill-opacity:1;fill-rule:evenodd;stroke-width:1.2;stroke-linecap:round;stroke-linejoin:round;stroke-miterlimit:3;paint-order:stroke fill markers"
					d="m 56.356249,71.702082 h -4.233333 c -1.135031,0.438706 -1.766077,1.051345 -1.852083,1.852084 v 3.96875 c 0.354235,0.50485 0.706992,0.704251 1.058333,0.611028 l 2.910417,-0.08186 c 0.429122,-0.416918 0.268385,-0.74567 0,-1.058333 l -1.322917,-1e-6 c -0.346677,0.117462 -0.674428,0.09981 -0.916543,-0.529167 v -2.38125 c 0.296477,-0.690237 0.827697,-1.07069 1.710293,-0.987438 h 1.852083 c 0.749484,0.19735 1.045753,0.646027 1.058334,1.252022 v 5.820833 h -9.260417 v -11.90625 h 4.497917 l 0.79375,-1.5875 -1.5875,-2.645833 2.116666,0.264583 0.529167,-1.5875 -1.322917,-2.910416 2.116667,0.529166 c 0.335333,-3.866537 0.408707,-7.778217 0,-11.90625 -0.873548,-3.997055 -2.090149,-7.715916 -3.704167,-11.112499 h 8.202084 l 5.820833,15.610416 -3.175,18.785416 z"
					id="path39736"
				/><path
					style="opacity:1;fill:#cd863c;fill-opacity:1;fill-rule:evenodd;stroke-width:1.2;stroke-linecap:round;stroke-linejoin:round;stroke-miterlimit:3;paint-order:stroke fill markers"
					d="m 59.002083,37.30625 h -15.875 l -4.497917,-3.704167 h 12.435417 l -3.175,-4.233333 h 6.879166 l 6.085417,6.085416 z"
					id="path39738"
				/><path
					style="opacity:1;fill:#d8d7a7;fill-opacity:1;fill-rule:evenodd;stroke-width:1.2;stroke-linecap:round;stroke-linejoin:round;stroke-miterlimit:3;paint-order:stroke fill markers"
					d="M 20.108333,19.05 26.9875,23.021688 H 43.656249 L 39.68456,19.05 Z"
					id="path39886"
				/><path
					style="opacity:1;fill:#cd863c;fill-opacity:1;fill-rule:evenodd;stroke-width:1.2;stroke-linecap:round;stroke-linejoin:round;stroke-miterlimit:3;paint-order:stroke fill markers"
					d="M 37.30625,26.9875 H 55.562499 L 47.624999,19.05 H 38.1 l 3.968749,3.96875 H 32.54375 Z"
					id="path39884"
				/><path
					style="opacity:1;fill:#764133;fill-opacity:1;fill-rule:evenodd;stroke-width:1.2;stroke-linecap:round;stroke-linejoin:round;stroke-miterlimit:3;paint-order:stroke fill markers"
					d="m 86.783332,76.464582 c -6.960871,-4.063081 -15.467976,-3.694396 -25.135416,0 l -0.916543,0.529167 h -2.52304 v -3.175 c -0.09891,-1.325483 -0.949071,-1.752669 -1.852084,-2.116667 1.478234,-4.343312 2.359343,-8.364667 3.33206,-12.435416 0.346627,-4.859113 0.627842,-9.699994 0,-14.2875 -0.275977,-4.650708 -2.059101,-9.596599 -5.471876,-15.436154 -2.332148,-3.99051 -5.984824,-7.977751 -10.567637,-12.345096 -1.658781,-1.575618 -3.336006,-2.940962 -5.01963,-4.233333 h 54.239583 l 12.964581,55.827083 z"
					id="path39120"
				/><path
					style="opacity:1;fill:#cd863c;fill-opacity:1;fill-rule:evenodd;stroke-width:1.2;stroke-linecap:round;stroke-linejoin:round;stroke-miterlimit:3;paint-order:stroke fill markers"
					d="M 96.837499,84.137499 86.783332,76.464582 c 2.033653,-6.518706 5.14615,-10.196331 8.202083,-14.022916 H 66.674999 C 73.189762,52.308305 80.198842,43.139418 88.106249,39.6875 h -23.01875 c 2.217952,-4.213928 5.32416,-8.194216 8.63795,-12.085384 4.47298,-5.252331 9.237751,-10.486699 17.291217,-14.637533 h 25.400004 l -12.17084,12.170833 5.82084,8.995834 -1.32292,9.260416 v 12.435417 l -0.26458,15.610416 z"
					id="path39041"
				/><path
					style="opacity:1;fill:#fcd34d;fill-opacity:1;fill-rule:evenodd;stroke-width:1.2;stroke-linecap:round;stroke-linejoin:round;stroke-miterlimit:3;paint-order:stroke fill markers"
					d="m 101.33542,91.545832 2.11666,-5.027083 c -2.23775,-0.56836 -4.506778,-0.92246 -6.614581,-2.38125 0.680984,-14.81948 5.904821,-22.347447 11.906251,-28.310416 H 85.195832 C 93.686645,45.298314 101.98945,37.860367 110.06667,34.13125 H 81.756249 C 91.253242,23.16045 102.64738,16.787463 115.09375,12.964583 h 5.02708 L 110.06667,34.13125 h 14.02291 L 114.3,55.827083 h 9.78958 c -1.23294,3.779145 -2.6036,7.718176 -5.55625,13.493749 l -0.79375,11.641667 -13.22916,11.90625 z"
					id="path38433"
				/><path
					style="opacity:1;fill:#afa2a1;fill-opacity:1;fill-rule:evenodd;stroke-width:1.2;stroke-linecap:round;stroke-linejoin:round;stroke-miterlimit:3;paint-order:stroke fill markers"
					d="m 46.302083,115.09375 v -3.70417 h 39.158333 c 2.067218,-0.29997 4.135031,-0.59912 6.085416,-1.05833 l 4.497917,-2.11667 2.645833,-1.85208 c 1.312608,-1.77082 2.460228,-3.57277 2.645838,-5.55625 v -5.556251 -3.704167 c 5.00402,-5.698059 10.19079,-11.303221 14.2875,-17.4625 l 3.43958,9.260417 v 22.489581 l -10.58333,9.26042 -27.781254,2.64583 H 43.656249 Z"
					id="path37407"
				/><path
					style="opacity:1;fill:#afa2a1;fill-opacity:1;fill-rule:evenodd;stroke-width:1.2;stroke-linecap:round;stroke-linejoin:round;stroke-miterlimit:3;paint-order:stroke fill markers"
					d="m 42.333333,101.33542 v 7.67291 h -12.7 c -4.737952,-0.90604 -7.035898,-3.50093 -8.202083,-6.87916 H 28.575 l 6.085416,-2.645838 h 7.408333 z"
					id="path40908"
				/><path
					style="opacity:1;fill:#675f59;fill-opacity:1;fill-rule:evenodd;stroke-width:1.2;stroke-linecap:round;stroke-linejoin:round;stroke-miterlimit:3;paint-order:stroke fill markers"
					d="m 38.364583,115.09375 h 52.916666 c 10.972671,-0.56622 15.089231,-2.56656 17.991671,-4.82086 4.76932,-4.68192 6.19373,-10.299493 6.08541,-16.345808 v -8.466666 l 0.26459,-11.377084 2.91041,-4.7625 c 2.59019,5.106069 5.15734,10.200249 4.23334,13.49375 v 3.630943 6.95239 3.400134 l -0.26459,7.183201 -0.79375,3.175 c -1.24562,5.04921 -5.44477,7.93153 -10.31875,10.31875 -2.45627,1.28314 -5.22373,1.32854 -7.9375,1.5875 H 42.862499 l -4.497916,-2.59687 z"
					id="path36812"
				/><path
					style="opacity:1;fill:#764133;fill-rule:evenodd;stroke-width:1.2;stroke-linecap:round;stroke-linejoin:round;stroke-miterlimit:3;paint-order:stroke fill markers;fill-opacity:1"
					d="m 10.583333,100.0125 7.672917,3.43958 -9.2604168,6.61459 H 2.9104166 c 1.9557002,-3.51907 4.4023432,-6.90138 7.6729164,-10.05417 z"
					id="path35403"
				/><path
					style="opacity:1;fill:#cd863c;fill-rule:evenodd;stroke-width:1.2;stroke-linecap:round;stroke-linejoin:round;stroke-miterlimit:3;paint-order:stroke fill markers;fill-opacity:1"
					d="M 18.25625,103.45208 C 16.862372,99.967082 14.491723,97.90991 15.610416,90.752082 L 8.4666666,90.222916 c -0.3310288,1.283139 -0.373982,2.754395 0,4.497916 1.2759916,1.674616 1.7584454,3.473421 2.1166664,5.291668 z"
					id="path35405"
				/><path
					style="opacity:1;fill:#fcd34d;fill-rule:evenodd;stroke-width:1.2;stroke-linecap:round;stroke-linejoin:round;stroke-miterlimit:3;paint-order:stroke fill markers;fill-opacity:1"
					d="m 8.4666666,90.222916 c 1.052804,-4.120134 3.2096494,-8.56963 8.7312494,-14.022917 h 2.910417 c -2.091802,4.564801 -3.837112,9.296792 -4.497917,14.552083 z"
					id="path35407"
				/><path
					style="opacity:1;fill:#d8d7a7;fill-opacity:1;fill-rule:evenodd;stroke-width:1.2;stroke-linecap:round;stroke-linejoin:round;stroke-miterlimit:3;paint-order:stroke fill markers"
					d="m 34.395833,111.38958 h 11.90625 v 3.70417 H 36.5125 Z"
					id="path37228"
				/><path
					style="opacity:1;fill:#cd863c;fill-rule:evenodd;stroke-width:1.2;stroke-linecap:round;stroke-linejoin:round;stroke-miterlimit:3;paint-order:stroke fill markers;fill-opacity:1"
					d="m 13.49375,119.0625 10.054166,-7.67292 h 10.847917 l 8.466666,7.67292 z"
					id="path35409"
				/><path
					style="opacity:1;fill:#cd863c;fill-opacity:1;fill-rule:evenodd;stroke-width:1.2;stroke-linecap:round;stroke-linejoin:round;stroke-miterlimit:3;paint-order:stroke fill markers"
					d="m 52.122916,115.09375 h 6.085417 c -2.24381,5.0979 -5.344901,5.12366 -8.466667,5.02708 1.95384,-1.29344 2.371073,-3.0932 2.38125,-5.02708 z"
					id="path35611"
				/><path
					style="opacity:1;fill:#cd863c;fill-opacity:1;fill-rule:evenodd;stroke-width:1.2;stroke-linecap:round;stroke-linejoin:round;stroke-miterlimit:3;paint-order:stroke fill markers"
					d="m 62.441667,115.09375 h 6.085417 c -2.24381,5.0979 -5.344901,5.12366 -8.466667,5.02708 1.95384,-1.29344 2.371073,-3.0932 2.38125,-5.02708 z"
					id="path35615"
				/><path
					style="opacity:1;fill:#cd863c;fill-opacity:1;fill-rule:evenodd;stroke-width:1.2;stroke-linecap:round;stroke-linejoin:round;stroke-miterlimit:3;paint-order:stroke fill markers"
					d="m 73.686458,115.09375 h 6.085417 c -2.24381,5.0979 -5.344901,5.12366 -8.466667,5.02708 1.95384,-1.29344 2.371073,-3.0932 2.38125,-5.02708 z"
					id="path35617"
				/><path
					style="opacity:1;fill:#cd863c;fill-opacity:1;fill-rule:evenodd;stroke-width:1.2;stroke-linecap:round;stroke-linejoin:round;stroke-miterlimit:3;paint-order:stroke fill markers"
					d="m 117.73958,106.49479 v -6.08541 c 5.34176,2.14266 6.25755,5.44586 6.08542,8.59895 -1.29344,-1.95384 -4.15154,-2.50336 -6.08542,-2.51354 z"
					id="path35619"
				/><path
					style="opacity:1;fill:#cd863c;fill-opacity:1;fill-rule:evenodd;stroke-width:1.2;stroke-linecap:round;stroke-linejoin:round;stroke-miterlimit:3;paint-order:stroke fill markers"
					d="m 117.73958,95.382288 v -6.08541 c 5.34176,2.14266 6.25755,5.44586 6.08542,8.59895 -1.29344,-1.95384 -4.15154,-2.50336 -6.08542,-2.51354 z"
					id="path35621"
				/><path
					style="opacity:1;fill:#cd863c;fill-opacity:1;fill-rule:evenodd;stroke-width:1.21832;stroke-linecap:round;stroke-linejoin:round;stroke-miterlimit:3;paint-order:stroke fill markers"
					d="m 117.73958,84.986202 v -6.272657 c 5.34176,2.208589 6.25755,5.613428 6.08542,8.863538 -1.29344,-2.013959 -4.15154,-2.580388 -6.08542,-2.590881 z"
					id="path35623"
				/><path
					style="opacity:1;fill:#cd863c;fill-opacity:1;fill-rule:evenodd;stroke-width:1.2;stroke-linecap:round;stroke-linejoin:round;stroke-miterlimit:3;paint-order:stroke fill markers"
					d="m 51.064583,52.122916 -3.704166,1e-6 c -0.69408,-3.852803 0.98587,-4.993265 1.852083,-6.614584 -0.344517,2.686094 -0.197999,5.353624 1.852083,6.614583 z"
					id="path35625"
				/><path
					style="opacity:1;fill:#cd863c;fill-opacity:1;fill-rule:evenodd;stroke-width:1.2;stroke-linecap:round;stroke-linejoin:round;stroke-miterlimit:3;paint-order:stroke fill markers"
					d="m 44.45,53.975 -3.704167,-1e-6 c -1.270326,-2.830351 0.912933,-6.291249 1.852083,-9.525 0.0044,3.470161 -0.194575,7.038279 1.852084,9.525001 z"
					id="path35627"
				/><path
					style="opacity:1;fill:#cd863c;fill-opacity:1;fill-rule:evenodd;stroke-width:1.2;stroke-linecap:round;stroke-linejoin:round;stroke-miterlimit:3;paint-order:stroke fill markers"
					d="m 38.1,55.827083 h -3.96875 c -1.661491,-3.669541 0.226923,-7.981349 2.116666,-10.847917 -0.20982,4.168163 -0.657153,8.49488 1.852084,10.847917 z"
					id="path35629"
				/><path
					style="opacity:1;fill:#cd863c;fill-opacity:1;fill-rule:evenodd;stroke-width:1.2;stroke-linecap:round;stroke-linejoin:round;stroke-miterlimit:3;paint-order:stroke fill markers"
					d="m 52.122916,105.30417 h 3.439583 l -3.439583,3.43958 z"
					id="path35631"
				/><path
					style="opacity:1;fill:#cd863c;fill-opacity:1;fill-rule:evenodd;stroke-width:1.2;stroke-linecap:round;stroke-linejoin:round;stroke-miterlimit:3;paint-order:stroke fill markers"
					d="m 91.810416,102.39375 v 4.49792 l 4.233333,-4.49792 z"
					id="path35635"
				/><path
					style="opacity:1;fill:#675f59;fill-opacity:1;fill-rule:evenodd;stroke-width:1.2;stroke-linecap:round;stroke-linejoin:round;stroke-miterlimit:3;paint-order:stroke fill markers"
					d="m 91.810416,106.89167 h -16.66875 c -1.49775,-0.19361 -2.479156,-0.96437 -2.645834,-2.64584 V 88.106249 c 0.451274,-1.298353 1.172962,-2.425652 2.910417,-2.910417 h 14.022917 c 0.787842,0.38772 1.608508,0.648657 2.116666,2.116667 v 13.758331 h -8.995833 c -1.335451,-0.43684 -1.751339,-1.265967 -2.116667,-2.116665 v -6.879166 h 3.96875 v 2.116666 c 1.450251,1.352734 2.196422,0.721696 2.910417,0 V 91.545832 C 87.07358,90.949911 86.574998,90.459799 85.989582,90.222916 h -6.614583 c -0.638168,0.269069 -1.061527,0.725395 -1.322917,1.322916 v 7.672917 c 0.468859,1.139311 -0.176629,2.431711 3.175,3.175001 h 10.583334 z"
					id="path35637"
				/><path
					style="opacity:1;fill:#675f59;fill-opacity:1;fill-rule:evenodd;stroke-width:1.2;stroke-linecap:round;stroke-linejoin:round;stroke-miterlimit:3;paint-order:stroke fill markers"
					d="m 93.133332,89.429166 v -5.820834 l 3.96875,2.910417 z"
					id="path36391"
				/><path
					style="opacity:1;fill:#afa2a1;fill-opacity:1;fill-rule:evenodd;stroke-width:1.2;stroke-linecap:round;stroke-linejoin:round;stroke-miterlimit:3;paint-order:stroke fill markers"
					d="m 54.504166,92.074999 v 8.995831 c 0.31903,1.21294 1.326461,1.818 2.38125,2.38125 3.038263,-0.77903 8.336075,-1.29793 8.73125,-2.38125 v -4.233331 c 0.448895,-1.710862 1.392071,-2.932145 4.124446,-2.38125 h 0.638054 v -8.202086 l -3.175,-0.850739 -12.964583,3.47385 z"
					id="path36610"
				/><path
					style="opacity:1;fill:#675f59;fill-opacity:1;fill-rule:evenodd;stroke-width:1.2;stroke-linecap:round;stroke-linejoin:round;stroke-miterlimit:3;paint-order:stroke fill markers"
					d="M 91.281249,84.137499 H 72.760416 c -1.33588,-0.0038 -2.115623,0.720061 -2.38125,2.116667 -6.215047,-0.224903 -11.410929,1.939974 -15.875,5.820833 h -2.116667 v 10.583331 h -3.704166 v 2.64584 h 3.439583 v 3.43958 H 44.714583 V 82.020832 h 13.758333 l 1.5875,-3.175 c 8.656239,-2.743935 17.226406,-4.242031 25.4,0 3.452116,1.540085 4.88683,3.435287 5.820833,5.291667 z"
					id="path36393"
				/><path
					style="opacity:1;fill:#764133;fill-opacity:1;fill-rule:evenodd;stroke-width:1.2;stroke-linecap:round;stroke-linejoin:round;stroke-miterlimit:3;paint-order:stroke fill markers"
					d="m 91.545832,110.33125 4.497917,-2.11667 1.058333,5.82084 z"
					id="path37754"
				/><path
					style="opacity:1;fill:#764133;fill-opacity:1;fill-rule:evenodd;stroke-width:1.2;stroke-linecap:round;stroke-linejoin:round;stroke-miterlimit:3;paint-order:stroke fill markers"
					d="m 98.954165,106.09792 c 1.223615,-1.74069 2.115505,-3.43123 2.381255,-5.02709 v -5.820831 l 11.1125,5.556251 z"
					id="path37756"
				/><rect
					style="opacity:1;fill:#2d2323;fill-opacity:1;fill-rule:evenodd;stroke-width:1.2;stroke-linecap:round;stroke-linejoin:round;stroke-miterlimit:3;paint-order:stroke fill markers"
					id="rect39182"
					width="5.2916665"
					height="5.2916665"
					x="58.472916"
					y="23.8125"
				/><rect
					style="opacity:1;fill:#2d2323;fill-opacity:1;fill-rule:evenodd;stroke-width:1.2;stroke-linecap:round;stroke-linejoin:round;stroke-miterlimit:3;paint-order:stroke fill markers"
					id="rect39184"
					width="5.2916665"
					height="5.2916665"
					x="61.118748"
					y="15.081249"
				/><rect
					style="opacity:1;fill:#2d2323;fill-opacity:1;fill-rule:evenodd;stroke-width:1.2;stroke-linecap:round;stroke-linejoin:round;stroke-miterlimit:3;paint-order:stroke fill markers"
					id="rect39186"
					width="5.2916665"
					height="5.2916665"
					x="51.064583"
					y="16.139584"
				/><path
					style="opacity:1;fill:#d8d7a7;fill-opacity:1;fill-rule:evenodd;stroke-width:1.2;stroke-linecap:round;stroke-linejoin:round;stroke-miterlimit:3;paint-order:stroke fill markers"
					d="M 6.0854166,8.7312499 H 24.077083 L 30.427083,12.7 H 12.7 Z"
					id="path40095"
				/><path
					style="opacity:1;fill:#afa2a1;fill-opacity:1;fill-rule:evenodd;stroke-width:1.2;stroke-linecap:round;stroke-linejoin:round;stroke-miterlimit:3;paint-order:stroke fill markers"
					d="m 21.43125,101.07083 h 6.879166 L 33.3375,98.689582 31.485416,92.604166 30.1625,91.281249 h -8.73125 z"
					id="path41186"
				/><path
					style="opacity:1;fill:#675f59;fill-opacity:1;fill-rule:evenodd;stroke-width:1.2;stroke-linecap:round;stroke-linejoin:round;stroke-miterlimit:3;paint-order:stroke fill markers"
					d="m 42.333333,101.33542 v -5.027088 l -7.672917,3.175 c 1.701507,1.180918 4.322247,1.756748 7.672917,1.852088 z"
					id="path40900"
				/><path
					style="opacity:1;fill:#675f59;fill-opacity:1;fill-rule:evenodd;stroke-width:1.2;stroke-linecap:round;stroke-linejoin:round;stroke-miterlimit:3;paint-order:stroke fill markers"
					d="m 33.3375,98.689582 c -1.486726,-1.109892 -2.787095,-2.811208 -3.175,-7.408333 h 12.170833 v 3.704166 z"
					id="path40902"
				/><path
					style="opacity:1;fill:#afa2a1;fill-opacity:1;fill-rule:evenodd;stroke-width:1.2;stroke-linecap:round;stroke-linejoin:round;stroke-miterlimit:3;paint-order:stroke fill markers"
					d="M 34.13125,81.227082 29.633333,79.374999 34.660416,72.760416 38.89375,74.877082 38.1,80.433332 Z"
					id="path41190"
				/><path
					style="opacity:1;fill:#afa2a1;fill-opacity:1;fill-rule:evenodd;stroke-width:1.2;stroke-linecap:round;stroke-linejoin:round;stroke-miterlimit:3;paint-order:stroke fill markers"
					d="m 21.43125,89.958332 7.14375,-9.260416 4.7625,1.852083 1.5875,4.497917 -4.7625,2.910416 z"
					id="path41188"
				/><path
					style="opacity:1;fill:#675f59;fill-opacity:1;fill-rule:evenodd;stroke-width:1.2;stroke-linecap:round;stroke-linejoin:round;stroke-miterlimit:3;paint-order:stroke fill markers"
					d="m 30.1625,89.958332 c 0.37244,-2.798449 1.640181,-5.167446 3.175,-7.408333 l 8.995833,3.439583 v 3.96875 z"
					id="path40904"
				/><path
					style="opacity:1;fill:#675f59;fill-opacity:1;fill-rule:evenodd;stroke-width:1.2;stroke-linecap:round;stroke-linejoin:round;stroke-miterlimit:3;paint-order:stroke fill markers"
					d="m 34.13125,81.227082 c 1.272053,-2.193434 2.894214,-4.301666 4.7625,-6.35 2.174219,1.512796 7.276725,3.711993 6.349999,4.497917 h -2.910416 v 5.291667 z"
					id="path40906"
				/><path
					style="opacity:1;fill:#764133;fill-opacity:1;fill-rule:evenodd;stroke-width:1.2;stroke-linecap:round;stroke-linejoin:round;stroke-miterlimit:3;paint-order:stroke fill markers"
					d="m 40.48125,64.558333 4.124446,-2.645834 v -6.35 l -4.124447,2.38125 z"
					id="path41194"
				/><path
					style="opacity:1;fill:#cd863c;fill-opacity:1;fill-rule:evenodd;stroke-width:1.2;stroke-linecap:round;stroke-linejoin:round;stroke-miterlimit:3;paint-order:stroke fill markers"
					d="M 40.481249,57.943749 36.5125,60.235107 v 6.969059 l 3.96875,-2.645833 z"
					id="path41549"
				/><path
					style="opacity:1;fill:#fcd34d;fill-opacity:1;fill-rule:evenodd;stroke-width:1.2;stroke-linecap:round;stroke-linejoin:round;stroke-miterlimit:3;paint-order:stroke fill markers"
					d="m 36.5125,67.204166 v -6.879167 l -3.439584,1.985844 v 7.009989 z"
					id="path41906"
				/><path
					style="opacity:1;fill:#afa2a1;fill-opacity:1;fill-rule:evenodd;stroke-width:1.2;stroke-linecap:round;stroke-linejoin:round;stroke-miterlimit:3;paint-order:stroke fill markers"
					d="m 39.422916,73.818749 -3.96875,-2.116667 5.55625,-7.672916 C 41.11024,62.824582 40.621875,62.65324 39.6875,63.26538 l -3.156003,1.822119 v -1.322916 l 3.666172,-2.116667 1.606497,-0.92751 c 2.064753,-0.111284 3.550117,0.352716 3.704167,2.1386 -0.0089,1.68956 -0.501639,2.770495 -1.022493,3.815993 z"
					id="path41192"
				/><path
					style="opacity:1;fill:#d8d7a7;fill-opacity:1;fill-rule:evenodd;stroke-width:1.2;stroke-linecap:round;stroke-linejoin:round;stroke-miterlimit:3;paint-order:stroke fill markers"
					d="M 8.4666666,64.822916 3.96875,60.589583 l 6.085417,2.116666 1.5875,1.852084 -2.3812504,0.529166 z"
					id="path46643"
				/><path
					style="opacity:1;fill:#cd853c;fill-opacity:1;fill-rule:evenodd;stroke-width:1.2;stroke-linecap:round;stroke-linejoin:round;stroke-miterlimit:3;paint-order:stroke fill markers"
					d="m 10.31875,64.558333 -0.264583,-1.852084 2.38125,0.79375 0.264583,2.910417 -2.116667,0.79375 -2.1166664,-2.38125 z"
					id="path46641"
				/><path
					style="opacity:1;fill:#cd853c;fill-opacity:1;fill-rule:evenodd;stroke-width:1.2;stroke-linecap:round;stroke-linejoin:round;stroke-miterlimit:3;paint-order:stroke fill markers"
					d="m 16.933333,60.589583 3.175,-4.7625 -2.38125,-8.466667 6.35,-11.641666 -10.31875,4.233333 -3.175,2.38125 1.322917,6.614583 3.96875,11.90625 z"
					id="path46797"
				/><path
					style="opacity:1;fill:#d8d7a7;fill-opacity:1;fill-rule:evenodd;stroke-width:1.2;stroke-linecap:round;stroke-linejoin:round;stroke-miterlimit:3;paint-order:stroke fill markers"
					d="m 16.933333,60.589583 -3.175,5.027083 L 5.8208333,22.225 l 7.9374997,17.727083 -1.5875,4.7625 z"
					id="path46795"
				/></g
			></g
		><metadata id="metadata48993"
			><rdf:RDF
				><cc:Work rdf:about=""
					><dc:creator
						><cc:Agent><dc:title>Doriel Rivalet</dc:title></cc:Agent
						></dc:creator
					><cc:license
						rdf:resource="http://creativecommons.org/licenses/by-nc-sa/4.0/"
					/></cc:Work
				><cc:License
					rdf:about="http://creativecommons.org/licenses/by-nc-sa/4.0/"
					><cc:permits
						rdf:resource="http://creativecommons.org/ns#Reproduction"
					/><cc:permits
						rdf:resource="http://creativecommons.org/ns#Distribution"
					/><cc:requires
						rdf:resource="http://creativecommons.org/ns#Notice"
					/><cc:requires
						rdf:resource="http://creativecommons.org/ns#Attribution"
					/><cc:prohibits
						rdf:resource="http://creativecommons.org/ns#CommercialUse"
					/><cc:permits
						rdf:resource="http://creativecommons.org/ns#DerivativeWorks"
					/><cc:requires
						rdf:resource="http://creativecommons.org/ns#ShareAlike"
					/></cc:License
				></rdf:RDF
			></metadata
		></svg
	>
</div>
