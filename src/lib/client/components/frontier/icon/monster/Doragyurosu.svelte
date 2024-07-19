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
				id="filter144786"
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
					id="feComposite144772"
				/><feColorMatrix
					in="composite1"
					values="1"
					type="saturate"
					result="colormatrix1"
					id="feColorMatrix144774"
				/><feFlood
					flood-opacity="1"
					flood-color="rgb(0,0,0)"
					result="flood1"
					id="feFlood144776"
				/><feBlend
					in="flood1"
					in2="colormatrix1"
					mode="multiply"
					result="blend1"
					id="feBlend144778"
				/><feBlend
					in2="blend1"
					mode="screen"
					result="blend2"
					id="feBlend144780"
				/><feColorMatrix
					in="blend2"
					values="1"
					type="saturate"
					result="colormatrix2"
					id="feColorMatrix144782"
				/><feComposite
					in="colormatrix2"
					in2="SourceGraphic"
					operator="in"
					k2="1"
					result="composite2"
					id="feComposite144784"
				/></filter
			></defs
		>
		<!-- svelte-ignore a11y-no-static-element-interactions -->
		<!-- svelte-ignore a11y-mouse-events-have-key-events -->
		<g id="layer1"
			><g
				id="g144407"
				style="filter:url(#filter144786)"
				transform="translate(1.0583333,1.5875)"
				><path
					style="opacity:1;fill:#776f68;fill-opacity:1;fill-rule:evenodd;stroke-width:3;stroke-linecap:round;stroke-linejoin:round;stroke-miterlimit:3;stroke-opacity:0.498674;paint-order:stroke fill markers"
					d="m 114.82917,34.925 v 4.233333 l 2.38125,-1.852083 v -6.085417 l -3.175,1.058333 z"
					id="path144153"
				/><path
					style="opacity:1;fill:#e5d8a1;fill-opacity:1;fill-rule:evenodd;stroke-width:3;stroke-linecap:round;stroke-linejoin:round;stroke-miterlimit:3;stroke-opacity:0.498674;paint-order:stroke fill markers"
					d="m 79.374999,55.297916 c 8.387925,0.04454 16.166549,2.333363 23.547921,6.085417 l 1.05833,-5.291667 c -0.94765,-8.583118 3.46385,-15.409807 9.525,-21.695833 L 113.24167,30.1625 c -1.73083,-5.606685 2.25925,-11.807691 6.08541,-17.991667 l -10.84791,-1.5875 -9.260421,2.645834 -7.9375,21.166666 -14.552083,15.875 z"
					id="path144155"
				/><path
					style="opacity:1;fill:#dfaa86;fill-opacity:1;fill-rule:evenodd;stroke-width:3;stroke-linecap:round;stroke-linejoin:round;stroke-miterlimit:3;stroke-opacity:0.498674;paint-order:stroke fill markers"
					d="m 73.289582,55.297916 h 6.085417 c 4.013508,-3.614613 8.433651,-3.642591 12.7,-5.027083 l 1.5875,-4.233334 C 93.8638,38.762612 97.870853,33.992968 104.51042,30.95625 l -2.38125,-4.497917 c -2.787367,-4.617064 0.67963,-9.426531 5.82083,-14.2875 L 94.720832,11.641667 87.312499,18.520833 84.666666,39.6875 70.114582,52.916666 Z"
					id="path144157"
				/><path
					style="opacity:1;fill:#2a391d;fill-opacity:1;fill-rule:evenodd;stroke-width:3;stroke-linecap:round;stroke-linejoin:round;stroke-miterlimit:3;stroke-opacity:0.498674;paint-order:stroke fill markers"
					d="m 33.072916,30.427083 4.839338,-1.296696 8.389829,-11.932471 v -6.349999 l -2.645834,-0.79375 -11.641666,13.229166 z"
					id="path144159"
				/><path
					style="opacity:1;fill:#97834f;fill-opacity:1;fill-rule:evenodd;stroke-width:3;stroke-linecap:round;stroke-linejoin:round;stroke-miterlimit:3;stroke-opacity:0.498674;paint-order:stroke fill markers"
					d="M 42.862499,24.870833 38.629166,29.897916 36.5125,30.95625 35.454166,28.310416 38.364583,24.870833 Z"
					id="path144161"
				/><path
					style="opacity:1;fill:#a88b6f;fill-opacity:1;fill-rule:evenodd;stroke-width:3;stroke-linecap:round;stroke-linejoin:round;stroke-miterlimit:3;stroke-opacity:0.498674;paint-order:stroke fill markers"
					d="m 42.8625,12.964583 -0.793751,3.175 H 34.13125 l 1.322916,-2.910416 z"
					id="path144163"
				/><path
					style="opacity:1;fill:#eed4ac;fill-opacity:1;fill-rule:evenodd;stroke-width:3;stroke-linecap:round;stroke-linejoin:round;stroke-miterlimit:3;stroke-opacity:0.498674;paint-order:stroke fill markers"
					d="m 37.835416,10.054167 h 5.820833 l -0.850738,3.175 h -7.351345 z"
					id="path144165"
				/><path
					style="opacity:1;fill:#617146;fill-opacity:1;fill-rule:evenodd;stroke-width:3;stroke-linecap:round;stroke-linejoin:round;stroke-miterlimit:3;stroke-opacity:0.498674;paint-order:stroke fill markers"
					d="m 42.068749,16.139583 -7.937499,9.525 -2.910417,-6.879167 3.175,-2.645833 z"
					id="path144167"
				/><path
					style="opacity:1;fill:#c7ae82;fill-opacity:1;fill-rule:evenodd;stroke-width:3;stroke-linecap:round;stroke-linejoin:round;stroke-miterlimit:3;stroke-opacity:0.498674;paint-order:stroke fill markers"
					d="m 41.274999,48.418749 v -3.439583 l 7.672917,-1.322917 C 41.548376,35.468587 39.894078,32.130594 37.041666,27.78125 l -0.529166,3.175 c -1.437827,-3.460121 -2.87853,-6.919892 -2.645834,-10.583334 -0.02932,-6.896728 3.57304,-9.086434 5.820834,-12.6999993 -1.748151,2.646e-4 -3.237481,-0.089537 -6.35,3.1750003 L 32.808333,7.9374999 c -4.088236,1.3945957 -4.001186,3.4787261 -5.55625,5.2916671 l 8.466667,30.427082 4.762499,6.35 z"
					id="path144169"
				/><path
					style="opacity:1;fill:#b1abad;fill-opacity:1;fill-rule:evenodd;stroke-width:3;stroke-linecap:round;stroke-linejoin:round;stroke-miterlimit:3;stroke-opacity:0.498674;paint-order:stroke fill markers"
					d="M 25.664583,22.225 22.225,18.785416 h -1.322917 l 0.264583,2.116667 3.96875,5.55625 1.852084,-1.5875 z"
					id="path144171"
				/><path
					style="opacity:1;fill:#fbe2cf;fill-opacity:1;fill-rule:evenodd;stroke-width:3;stroke-linecap:round;stroke-linejoin:round;stroke-miterlimit:3;stroke-opacity:0.498674;paint-order:stroke fill markers"
					d="M 25.664583,41.274999 V 22.489583 l 1.5875,-9.260416 3.704167,-3.175 0.264583,3.704166 c 1.996146,-3.040342 4.579948,-4.4020223 7.14375,-5.8208331 -2.05406,3.4580951 -4.956876,6.2527541 -5.55625,10.8479161 -0.208891,7.656353 1.901326,10.68878 3.704167,14.2875 L 37.570833,31.75 45.772916,42.597916 c -2.867648,0.377109 -5.791709,0.681223 -6.614583,3.704167 z"
					id="path144173"
				/><path
					style="opacity:1;fill:#2a391d;fill-opacity:1;fill-rule:evenodd;stroke-width:3;stroke-linecap:round;stroke-linejoin:round;stroke-miterlimit:3;stroke-opacity:0.498674;paint-order:stroke fill markers"
					d="M 23.8125,61.647916 V 40.481249 l 1.852083,-1.852083 v -13.49375 l -4.497917,-4.497916 -1.5875,2.116666 -4.497916,-0.79375 h -3.439583 v 16.404167 1.5875 l 5.556249,15.610416 3.96875,5.291667 2.38125,1.5875 z"
					id="path144175"
				/><path
					style="opacity:1;fill:#b5afb4;fill-opacity:1;fill-rule:evenodd;stroke-width:3;stroke-linecap:round;stroke-linejoin:round;stroke-miterlimit:3;stroke-opacity:0.498674;paint-order:stroke fill markers"
					d="m 17.991666,64.029166 h 11.1125 v 3.175 H 20.6375 c -1.449282,-0.807681 -2.132894,-1.953639 -2.645834,-3.175 z"
					id="path144177"
				/><path
					style="opacity:1;fill:#c7ae82;fill-opacity:1;fill-rule:evenodd;stroke-width:3;stroke-linecap:round;stroke-linejoin:round;stroke-miterlimit:3;stroke-opacity:0.498674;paint-order:stroke fill markers"
					d="m 31.485416,43.920833 5.291667,-3.96875 v -2.116667 l -5.291667,3.704167 v -4.497917 l -5.820833,4.233333 v 2.910417 z"
					id="path144179"
				/><path
					style="opacity:1;fill:#4a5934;fill-opacity:1;fill-rule:evenodd;stroke-width:3;stroke-linecap:round;stroke-linejoin:round;stroke-miterlimit:3;stroke-opacity:0.498674;paint-order:stroke fill markers"
					d="M 40.745833,61.118749 V 50.535416 l -6.35,-6.35 -2.910417,1.058333 3.175,2.116667 1.058334,2.38125 1.058333,4.233333 1.322917,1.5875 v 3.96875 z"
					id="path144181"
				/><path
					style="opacity:1;fill:#bdb6b7;fill-opacity:1;fill-rule:evenodd;stroke-width:3;stroke-linecap:round;stroke-linejoin:round;stroke-miterlimit:3;stroke-opacity:0.498674;paint-order:stroke fill markers"
					d="m 40.745833,61.118749 3.175,1.852084 v -11.90625 l -7.14375,-7.14375 v -3.96875 l -5.291667,3.96875 v 1.322916 l 2.116667,0.529167 2.645833,1.322917 2.116667,4.497916 1.322917,6.614584 z"
					id="path144183"
				/><path
					style="opacity:1;fill:#4a5934;fill-opacity:1;fill-rule:evenodd;stroke-width:3;stroke-linecap:round;stroke-linejoin:round;stroke-miterlimit:3;stroke-opacity:0.498674;paint-order:stroke fill markers"
					d="m 31.485416,42.597916 v 2.645833 l -3.439583,1.985844 V 64.029167 H 25.4 V 46.302083 l 5.55625,-4.233334 z"
					id="path144185"
				/><path
					style="opacity:1;fill:#ebeaea;fill-opacity:1;fill-rule:evenodd;stroke-width:3;stroke-linecap:round;stroke-linejoin:round;stroke-miterlimit:3;stroke-opacity:0.498674;paint-order:stroke fill markers"
					d="M 41.274999,61.118749 V 59.002083 H 35.71875 c 0.634615,1.655546 2.291798,2.513182 5.556249,2.116666 z"
					id="path144187"
				/><path
					style="opacity:1;fill:#ebeaea;fill-opacity:1;fill-rule:evenodd;stroke-width:3;stroke-linecap:round;stroke-linejoin:round;stroke-miterlimit:3;stroke-opacity:0.498674;paint-order:stroke fill markers"
					d="m 41.010416,56.091666 v -2.116667 h -5.820833 c 1.237698,1.77435 3.187941,2.464746 5.820833,2.116667 z"
					id="path144189"
				/><path
					style="opacity:1;fill:#ebeaea;fill-opacity:1;fill-rule:evenodd;stroke-width:3;stroke-linecap:round;stroke-linejoin:round;stroke-miterlimit:3;stroke-opacity:0.498674;paint-order:stroke fill markers"
					d="m 31.220833,47.624999 h 6.614583 v 2.38125 c -4.433948,-0.28514 -5.890743,-1.249576 -6.614583,-2.38125 z"
					id="path144191"
				/><path
					style="opacity:1;fill:#528230;fill-opacity:1;fill-rule:evenodd;stroke-width:3;stroke-linecap:round;stroke-linejoin:round;stroke-miterlimit:3;stroke-opacity:0.498674;paint-order:stroke fill markers"
					d="m 23.8125,54.768749 c -3.732124,0.826013 -5.629961,-0.419925 -5.957533,-3.439583 v -17.4625 l 5.957533,6.614583 z"
					id="path144193"
				/><path
					style="opacity:1;fill:#17110c;fill-opacity:1;fill-rule:evenodd;stroke-width:3;stroke-linecap:round;stroke-linejoin:round;stroke-miterlimit:3;stroke-opacity:0.498674;paint-order:stroke fill markers"
					d="m 23.8125,52.916666 c -1.81548,0.214337 -3.164653,-0.23912 -3.704167,-1.852083 v -6.879167 h 3.96875 v 8.73125 z"
					id="path144195"
				/><path
					style="opacity:1;fill:#848078;fill-opacity:1;fill-rule:evenodd;stroke-width:3;stroke-linecap:round;stroke-linejoin:round;stroke-miterlimit:3;stroke-opacity:0.498674;paint-order:stroke fill markers"
					d="m 17.991666,64.029166 v -5.55625 C 14.483463,57.318088 12.611842,46.973499 10.054167,40.481249 l 2.291358,-1.322916 c 2.090914,5.980203 3.994177,11.920656 7.762808,18.25625 1.036659,1.609046 2.029165,3.262216 3.704167,4.233333 V 40.481249 l 1.852083,-1.852083 v 4.7625 l 5.820833,-4.233333 v 3.439583 l -5.820833,3.96875 v 17.4625 z"
					id="path144197"
				/><path
					style="opacity:1;fill:#ebeaea;fill-opacity:1;fill-rule:evenodd;stroke-width:3;stroke-linecap:round;stroke-linejoin:round;stroke-miterlimit:3;stroke-opacity:0.498674;paint-order:stroke fill markers"
					d="M 25.664583,50.799999 H 34.13125 L 31.75,53.181249 h -6.085417 z"
					id="path144199"
				/><path
					style="opacity:1;fill:#ebeaea;fill-opacity:1;fill-rule:evenodd;stroke-width:3;stroke-linecap:round;stroke-linejoin:round;stroke-miterlimit:3;stroke-opacity:0.498674;paint-order:stroke fill markers"
					d="m 31.75,56.356249 h -6.085417 v 2.645834 C 29.413349,58.833096 31.286904,57.886947 31.75,56.356249 Z"
					id="path144201"
				/><path
					style="opacity:1;fill:#ebeaea;fill-opacity:1;fill-rule:evenodd;stroke-width:3;stroke-linecap:round;stroke-linejoin:round;stroke-miterlimit:3;stroke-opacity:0.498674;paint-order:stroke fill markers"
					d="m 25.929166,64.293749 c 7.529965,-0.111296 7.158858,-1.956195 8.73125,-3.174999 h -8.995833 v 3.174999 z"
					id="path144203"
				/><path
					style="opacity:1;fill:#b19651;fill-opacity:0.996078;fill-rule:evenodd;stroke-width:3;stroke-linecap:round;stroke-linejoin:round;stroke-miterlimit:3;stroke-opacity:0.498674;paint-order:stroke fill markers"
					d="m 20.108333,50.270833 -2.116667,-1.5875 v -11.1125 l 2.645834,3.704166 v 2.910417 z"
					id="path144205"
				/><circle
					style="opacity:1;fill:#279568;fill-opacity:1;fill-rule:evenodd;stroke-width:3;stroke-linecap:round;stroke-linejoin:round;stroke-miterlimit:3;stroke-opacity:0.498674;paint-order:stroke fill markers"
					id="circle144207"
					cx="21.960417"
					cy="48.418751"
					r="1.5875"
				/><path
					style="opacity:1;fill:#b1abb0;fill-opacity:1;fill-rule:evenodd;stroke-width:3;stroke-linecap:round;stroke-linejoin:round;stroke-miterlimit:3;stroke-opacity:0.498674;paint-order:stroke fill markers"
					d="m 10.054167,40.481249 2.116666,-1.058333 V 21.166666 L 6.0854166,8.7312499 V 22.489583 l -1.8520833,1.852083 z"
					id="path144209"
				/><path
					style="opacity:1;fill:#efefef;fill-opacity:1;fill-rule:evenodd;stroke-width:3;stroke-linecap:round;stroke-linejoin:round;stroke-miterlimit:3;stroke-opacity:0.498674;paint-order:stroke fill markers"
					d="m 23.8125,35.983333 v -8.73125 c -3.576863,-3.107952 -5.449016,-6.688745 -7.14375,-10.31875 h -1.5875 c -0.193948,8.767852 3.328212,14.641393 8.73125,19.05 z"
					id="path144211"
				/><path
					style="opacity:1;fill:#b1abb0;fill-opacity:1;fill-rule:evenodd;stroke-width:3;stroke-linecap:round;stroke-linejoin:round;stroke-miterlimit:3;stroke-opacity:0.498674;paint-order:stroke fill markers"
					d="m 23.8125,35.983333 v -2.38125 C 18.981893,29.180312 16.42275,23.911634 15.610416,17.991666 H 15.08125 c 0.0419,6.98906 2.391523,13.180185 8.73125,17.991667 z"
					id="path144213"
				/><path
					style="opacity:1;fill:#efefef;fill-opacity:1;fill-rule:evenodd;stroke-width:3;stroke-linecap:round;stroke-linejoin:round;stroke-miterlimit:3;stroke-opacity:0.498674;paint-order:stroke fill markers"
					d="M 4.2333333,24.341666 3.6223043,23.283333 V 7.9374999 H 6.0854166 V 22.489583 Z"
					id="path144215"
				/><path
					style="opacity:1;fill:#efefef;fill-opacity:1;fill-rule:evenodd;stroke-width:3;stroke-linecap:round;stroke-linejoin:round;stroke-miterlimit:3;stroke-opacity:0.498674;paint-order:stroke fill markers"
					d="m 25.664583,22.489583 1.5875,-9.260416 -1.322917,-1.322917 V 8.4666667 l -2.645833,-1.5875 v 4.4979163 l -1.058333,1.5875 h -1.322917 v 5.820833 z"
					id="path144217"
				/><path
					style="opacity:1;fill:#eed4ac;fill-opacity:1;fill-rule:evenodd;stroke-width:3;stroke-linecap:round;stroke-linejoin:round;stroke-miterlimit:3;stroke-opacity:0.498674;paint-order:stroke fill markers"
					d="m 46.302083,10.847917 5.55625,5.556249 V 19.05 l -6.085417,-5.820833 z"
					id="path144219"
				/><path
					style="opacity:1;fill:#eed4ac;fill-opacity:1;fill-rule:evenodd;stroke-width:3;stroke-linecap:round;stroke-linejoin:round;stroke-miterlimit:3;stroke-opacity:0.498674;paint-order:stroke fill markers"
					d="m 56.091666,24.077083 h 5.027083 v 5.55625 l -5.55625,-5.55625 z"
					id="path144221"
				/><path
					style="opacity:1;fill:#eed4ac;fill-opacity:1;fill-rule:evenodd;stroke-width:3;stroke-linecap:round;stroke-linejoin:round;stroke-miterlimit:3;stroke-opacity:0.498674;paint-order:stroke fill markers"
					d="m 64.029166,32.54375 h 5.027083 v 5.027083 z"
					id="path144223"
				/><path
					style="opacity:1;fill:#eed4ac;fill-opacity:1;fill-rule:evenodd;stroke-width:3;stroke-linecap:round;stroke-linejoin:round;stroke-miterlimit:3;stroke-opacity:0.498674;paint-order:stroke fill markers"
					d="m 75.406249,66.674999 h 4.233333 L 74.75135,58.208333 h -4.372184 z"
					id="path144225"
				/><path
					style="opacity:1;fill:#eed4ac;fill-opacity:1;fill-rule:evenodd;stroke-width:3;stroke-linecap:round;stroke-linejoin:round;stroke-miterlimit:3;stroke-opacity:0.498674;paint-order:stroke fill markers"
					d="m 87.841666,68.791666 1.322916,-1.322917 h 5.291667 v 5.291667 l -0.763786,1.322916 z"
					id="path144227"
				/><path
					style="opacity:1;fill:#eed4ac;fill-opacity:1;fill-rule:evenodd;stroke-width:3;stroke-linecap:round;stroke-linejoin:round;stroke-miterlimit:3;stroke-opacity:0.498674;paint-order:stroke fill markers"
					d="m 94.985415,75.935416 2.645834,-2.645834 h 6.085421 c 2.31993,0.361726 4.02404,1.654823 5.55625,3.207904 v 10.55043 c -0.73429,0.920498 -1.59353,1.727127 -2.91042,2.116666 v -8.202083 c -0.89123,-1.702487 -1.50235,-3.414541 -5.02708,-5.027083 z"
					id="path144229"
				/><path
					style="opacity:1;fill:#eed4ac;fill-opacity:1;fill-rule:evenodd;stroke-width:3;stroke-linecap:round;stroke-linejoin:round;stroke-miterlimit:3;stroke-opacity:0.498674;paint-order:stroke fill markers"
					d="m 106.09792,104.24583 2.64583,-1.52757 v -7.732845 l -2.64583,-1.852083 z"
					id="path144231"
				/><path
					style="opacity:1;fill:#eed4ac;fill-opacity:1;fill-rule:evenodd;stroke-width:3;stroke-linecap:round;stroke-linejoin:round;stroke-miterlimit:3;stroke-opacity:0.498674;paint-order:stroke fill markers"
					d="m 95.514582,116.94583 8.202088,-7.67291 v 3.70416 l -5.027088,5.02709 c -1.085731,-0.0917 -2.181297,-0.0896 -3.175,-1.05834 z"
					id="path144233"
				/><path
					style="opacity:1;fill:#eed4ac;fill-opacity:1;fill-rule:evenodd;stroke-width:3;stroke-linecap:round;stroke-linejoin:round;stroke-miterlimit:3;stroke-opacity:0.498674;paint-order:stroke fill markers"
					d="m 75.141666,118.00417 h 11.90625 v 3.43958 H 76.464582 c -1.17798,-1.15533 -1.328986,-2.2984 -1.322916,-3.43958 z"
					id="path144235"
				/><path
					style="opacity:1;fill:#eed4ac;fill-opacity:1;fill-rule:evenodd;stroke-width:3;stroke-linecap:round;stroke-linejoin:round;stroke-miterlimit:3;stroke-opacity:0.498674;paint-order:stroke fill markers"
					d="m 30.1625,118.26875 h 10.583333 l -2.116667,2.91042 h -6.35 c -1.334958,-0.54419 -1.751407,-1.70998 -2.116666,-2.91042 z"
					id="path144237"
				/><path
					style="opacity:1;fill:#a88b6f;fill-opacity:1;fill-rule:evenodd;stroke-width:3;stroke-linecap:round;stroke-linejoin:round;stroke-miterlimit:3;stroke-opacity:0.498674;paint-order:stroke fill markers"
					d="m 25.929166,118.26875 v -2.91042 H 19.05 L 14.816666,111.125 v -3.70417 -0.26458 h -1.852083 v 8.73125 l 2.138602,3.70417 z"
					id="path144239"
				/><path
					style="opacity:1;fill:#eed4ac;fill-opacity:1;fill-rule:evenodd;stroke-width:3;stroke-linecap:round;stroke-linejoin:round;stroke-miterlimit:3;stroke-opacity:0.498674;paint-order:stroke fill markers"
					d="m 25.929166,120.91458 v -2.64583 H 16.66875 c -2.88631,-1.09531 -3.372157,-2.12866 -3.704167,-3.43958 v -7.67292 H 7.1437499 l 2.6458333,2.64583 v 6.08542 c 1.3043268,1.74154 2.5580068,3.49205 5.0270828,5.02708 z"
					id="path144241"
				/><path
					style="opacity:1;fill:#eed4ac;fill-opacity:1;fill-rule:evenodd;stroke-width:3;stroke-linecap:round;stroke-linejoin:round;stroke-miterlimit:3;stroke-opacity:0.498674;paint-order:stroke fill markers"
					d="M 12.7,103.98125 V 89.958332 c -2.548148,0.804792 -5.4669297,0.669303 -6.6145834,5.027083 h 3.4395833 v 2.910417 c -3.128053,1.16912 -4.9393315,3.290928 -5.8208333,6.085418 z"
					id="path144243"
				/><path
					style="opacity:1;fill:#a88b6f;fill-opacity:1;fill-rule:evenodd;stroke-width:3;stroke-linecap:round;stroke-linejoin:round;stroke-miterlimit:3;stroke-opacity:0.498674;paint-order:stroke fill markers"
					d="m 45.772916,13.229167 -0.79375,3.439583 6.614583,6.35 0.264584,-3.96875 z"
					id="path144245"
				/><path
					style="opacity:1;fill:#a88b6f;fill-opacity:1;fill-rule:evenodd;stroke-width:3;stroke-linecap:round;stroke-linejoin:round;stroke-miterlimit:3;stroke-opacity:0.498674;paint-order:stroke fill markers"
					d="m 55.562499,24.077083 -1.322916,1.5875 5.55625,5.55625 1.322916,-1.5875 z"
					id="path144247"
				/><path
					style="opacity:1;fill:#a88b6f;fill-opacity:1;fill-rule:evenodd;stroke-width:3;stroke-linecap:round;stroke-linejoin:round;stroke-miterlimit:3;stroke-opacity:0.498674;paint-order:stroke fill markers"
					d="m 64.029166,32.54375 5.027083,5.027083 -1.5875,1.587497 -5.556247,-5.556247 z"
					id="path144249"
				/><path
					style="opacity:1;fill:#a88b6f;fill-opacity:1;fill-rule:evenodd;stroke-width:3;stroke-linecap:round;stroke-linejoin:round;stroke-miterlimit:3;stroke-opacity:0.498674;paint-order:stroke fill markers"
					d="m 70.379166,58.208333 h -2.910417 l 5.55625,8.466666 h 2.38125 z"
					id="path144251"
				/><path
					style="opacity:1;fill:#a88b6f;fill-opacity:1;fill-rule:evenodd;stroke-width:3;stroke-linecap:round;stroke-linejoin:round;stroke-miterlimit:3;stroke-opacity:0.498674;paint-order:stroke fill markers"
					d="m 87.841666,68.791666 5.820833,5.291666 -1.852083,1.852084 -5.820834,-5.820834 z"
					id="path144253"
				/><path
					style="opacity:1;fill:#c9a15e;fill-opacity:1;fill-rule:evenodd;stroke-width:3;stroke-linecap:round;stroke-linejoin:round;stroke-miterlimit:3;stroke-opacity:0.498674;paint-order:stroke fill markers"
					d="m 94.456249,84.137499 v 6.085417 h 5.556251 v -7.9375 l -5.556251,1.5875 z"
					id="path144255"
				/><path
					style="opacity:1;fill:#617146;fill-opacity:1;fill-rule:evenodd;stroke-width:3;stroke-linecap:round;stroke-linejoin:round;stroke-miterlimit:3;stroke-opacity:0.498674;paint-order:stroke fill markers"
					d="m 94.456249,78.052082 v 6.085417 c 2.743766,-0.444129 4.30928,0.630913 5.556251,2.116667 v 3.96875 l 2.91042,-0.264584 v -12.7 z"
					id="path144257"
				/><path
					style="opacity:1;fill:#a88b6f;fill-opacity:1;fill-rule:evenodd;stroke-width:3;stroke-linecap:round;stroke-linejoin:round;stroke-miterlimit:3;stroke-opacity:0.498674;paint-order:stroke fill markers"
					d="m 94.985415,75.935416 -0.567158,2.116666 h 5.858823 c 1.07177,0.414914 2.04921,0.930432 2.64584,1.852084 v 10.054166 l 3.43958,-0.79375 V 77.522916 c -1.08537,-1.352865 -2.52848,-2.114692 -4.23333,-2.444115 z"
					id="path144259"
				/><path
					style="opacity:1;fill:#a88b6f;fill-opacity:1;fill-rule:evenodd;stroke-width:3;stroke-linecap:round;stroke-linejoin:round;stroke-miterlimit:3;stroke-opacity:0.498674;paint-order:stroke fill markers"
					d="m 106.09792,93.133332 h -2.91042 v 10.847918 0.26458 h 2.91042 z"
					id="path144261"
				/><path
					style="opacity:1;fill:#a88b6f;fill-opacity:1;fill-rule:evenodd;stroke-width:3;stroke-linecap:round;stroke-linejoin:round;stroke-miterlimit:3;stroke-opacity:0.498674;paint-order:stroke fill markers"
					d="m 95.514582,116.94583 -2.116667,-2.11666 7.672915,-8.20209 2.64584,2.64584 z"
					id="path144263"
				/><path
					style="opacity:1;fill:#a88b6f;fill-opacity:1;fill-rule:evenodd;stroke-width:3;stroke-linecap:round;stroke-linejoin:round;stroke-miterlimit:3;stroke-opacity:0.498674;paint-order:stroke fill markers"
					d="m 75.141666,118.00417 v -2.91042 h 11.90625 v 2.91042 z"
					id="path144265"
				/><path
					style="opacity:1;fill:#a88b6f;fill-opacity:1;fill-rule:evenodd;stroke-width:3;stroke-linecap:round;stroke-linejoin:round;stroke-miterlimit:3;stroke-opacity:0.498674;paint-order:stroke fill markers"
					d="m 30.1625,118.26875 v -2.91042 h 10.583333 v 2.91042 z"
					id="path144267"
				/><path
					style="opacity:1;fill:#a88b6f;fill-opacity:1;fill-rule:evenodd;stroke-width:3;stroke-linecap:round;stroke-linejoin:round;stroke-miterlimit:3;stroke-opacity:0.498674;paint-order:stroke fill markers"
					d="m 12.7,103.98125 h 2.38125 V 89.958332 h -2.381254 z"
					id="path144269"
				/><path
					style="opacity:1;fill:#617146;fill-opacity:1;fill-rule:evenodd;stroke-width:3;stroke-linecap:round;stroke-linejoin:round;stroke-miterlimit:3;stroke-opacity:0.498674;paint-order:stroke fill markers"
					d="m 44.979166,16.66875 6.614583,6.35 -3.175,3.704166 -2.38125,-1.852083 h -7.672916 z"
					id="path144271"
				/><path
					style="opacity:1;fill:#97834f;fill-opacity:1;fill-rule:evenodd;stroke-width:3;stroke-linecap:round;stroke-linejoin:round;stroke-miterlimit:3;stroke-opacity:0.498674;paint-order:stroke fill markers"
					d="m 50.270833,28.839583 5.291666,6.35 -3.704166,3.175 C 49.32197,37.94776 47.657685,35.369381 45.772916,33.3375 Z"
					id="path144273"
				/><path
					style="opacity:1;fill:#617146;fill-opacity:1;fill-rule:evenodd;stroke-width:3;stroke-linecap:round;stroke-linejoin:round;stroke-miterlimit:3;stroke-opacity:0.498674;paint-order:stroke fill markers"
					d="m 54.239583,25.664583 5.55625,5.55625 -4.233334,3.96875 -5.291666,-6.35 z"
					id="path144275"
				/><path
					style="opacity:1;fill:#cfa967;fill-opacity:1;fill-rule:evenodd;stroke-width:3;stroke-linecap:round;stroke-linejoin:round;stroke-miterlimit:3;stroke-opacity:0.498674;paint-order:stroke fill markers"
					d="m 59.266666,46.831249 c -2.364347,0.497708 -4.661898,0.63921 -6.614583,-1.058333 -1.46194,-3.33423 2.766649,-5.419958 5.027083,-7.9375 l 4.7625,1.852084 z"
					id="path144277"
				/><path
					style="opacity:1;fill:#617146;fill-opacity:1;fill-rule:evenodd;stroke-width:3;stroke-linecap:round;stroke-linejoin:round;stroke-miterlimit:3;stroke-opacity:0.498674;paint-order:stroke fill markers"
					d="m 61.912499,33.602083 5.55625,5.55625 c -2.709546,2.735144 -5.314263,6.230346 -8.202083,7.672916 -0.458205,-3.707139 -0.200206,-6.788381 -1.5875,-8.995833 z"
					id="path144279"
				/><path
					style="opacity:1;fill:#495833;fill-opacity:1;fill-rule:evenodd;stroke-width:3;stroke-linecap:round;stroke-linejoin:round;stroke-miterlimit:3;stroke-opacity:0.498674;paint-order:stroke fill markers"
					d="m 59.266666,55.033333 v -4.7625 h 0.529167 v 4.7625 z"
					id="path144281"
				/><path
					style="opacity:1;fill:#617146;fill-opacity:1;fill-rule:evenodd;stroke-width:3;stroke-linecap:round;stroke-linejoin:round;stroke-miterlimit:3;stroke-opacity:0.498674;paint-order:stroke fill markers"
					d="M 73.024999,66.674999 H 55.033333 l 2.910416,-8.466666 h 9.525 z"
					id="path144283"
				/><path
					style="opacity:1;fill:#617146;fill-opacity:1;fill-rule:evenodd;stroke-width:3;stroke-linecap:round;stroke-linejoin:round;stroke-miterlimit:3;stroke-opacity:0.498674;paint-order:stroke fill markers"
					d="m 85.989582,70.114582 h -5.027083 v 13.758334 h 10.847917 v -7.9375 z"
					id="path144285"
				/><path
					style="opacity:1;fill:#617146;fill-opacity:1;fill-rule:evenodd;stroke-width:3;stroke-linecap:round;stroke-linejoin:round;stroke-miterlimit:3;stroke-opacity:0.498674;paint-order:stroke fill markers"
					d="m 103.1875,93.133332 h -3.175 v 7.143748 l 3.175,3.96875 z"
					id="path144287"
				/><path
					style="opacity:1;fill:#617146;fill-opacity:1;fill-rule:evenodd;stroke-width:3;stroke-linecap:round;stroke-linejoin:round;stroke-miterlimit:3;stroke-opacity:0.498674;paint-order:stroke fill markers"
					d="m 93.397915,114.82917 -3.439583,-3.43959 7.9375,-7.9375 3.174998,3.175 z"
					id="path144289"
				/><path
					style="opacity:1;fill:#617146;fill-opacity:1;fill-rule:evenodd;stroke-width:3;stroke-linecap:round;stroke-linejoin:round;stroke-miterlimit:3;stroke-opacity:0.498674;paint-order:stroke fill markers"
					d="m 75.141666,115.09375 2.38125,-2.64583 h 6.614583 l 2.910417,2.64583 z"
					id="path144291"
				/><path
					style="opacity:1;fill:#617146;fill-opacity:1;fill-rule:evenodd;stroke-width:3;stroke-linecap:round;stroke-linejoin:round;stroke-miterlimit:3;stroke-opacity:0.498674;paint-order:stroke fill markers"
					d="m 40.745833,115.35833 v -2.11666 H 30.1625 v 2.11666 z"
					id="path144293"
				/><path
					style="opacity:1;fill:#94784e;fill-opacity:1;fill-rule:evenodd;stroke-width:3;stroke-linecap:round;stroke-linejoin:round;stroke-miterlimit:3;stroke-opacity:0.498674;paint-order:stroke fill markers"
					d="m 25.929166,112.97708 v -2.91041 c -2.927003,0.29525 -4.581967,-0.7934 -5.291666,-2.91042 h -2.38125 v 6.08542 H 25.4 Z"
					id="path144295"
				/><path
					style="opacity:1;fill:#617146;fill-opacity:1;fill-rule:evenodd;stroke-width:3;stroke-linecap:round;stroke-linejoin:round;stroke-miterlimit:3;stroke-opacity:0.498674;paint-order:stroke fill markers"
					d="m 25.929166,115.35833 1e-6,-2.38125 h -5.027084 c -1.419238,-0.58877 -2.132829,-1.56258 -2.645833,-2.64583 v -3.175 h -3.439584 v 3.96875 c 0.360423,1.05366 0.723174,3.0133 4.233333,4.23333 z"
					id="path144297"
				/><path
					style="opacity:1;fill:#617146;fill-opacity:1;fill-rule:evenodd;stroke-width:3;stroke-linecap:round;stroke-linejoin:round;stroke-miterlimit:3;stroke-opacity:0.498674;paint-order:stroke fill markers"
					d="m 15.08125,103.98125 h 2.645833 V 89.958332 H 15.08125 Z"
					id="path144299"
				/><path
					style="opacity:1;fill:#cfa967;fill-opacity:1;fill-rule:evenodd;stroke-width:3;stroke-linecap:round;stroke-linejoin:round;stroke-miterlimit:3;stroke-opacity:0.498674;paint-order:stroke fill markers"
					d="m 38.364583,30.1625 4.497916,-5.291667 h 3.175 l 2.38125,1.852083 -5.820833,5.820834 h -4.233333 z"
					id="path144301"
				/><path
					style="opacity:1;fill:#a2905b;fill-opacity:1;fill-rule:evenodd;stroke-width:3;stroke-linecap:round;stroke-linejoin:round;stroke-miterlimit:3;stroke-opacity:0.498674;paint-order:stroke fill markers"
					d="m 59.266666,55.033333 10e-7,-4.7625 c -3.386615,-0.102123 -7.325943,-0.549031 -8.202084,2.116666 0.03918,2.845985 3.923412,2.889647 8.202083,2.645834 z"
					id="path144303"
				/><path
					style="opacity:1;fill:#c9a15e;fill-opacity:1;fill-rule:evenodd;stroke-width:3;stroke-linecap:round;stroke-linejoin:round;stroke-miterlimit:3;stroke-opacity:0.498674;paint-order:stroke fill markers"
					d="m 55.033333,66.674999 2.910416,-8.466666 c -5.086089,-0.35558 -10.209283,-0.748986 -10.31875,3.96875 0.206381,5.930766 4.120438,4.601277 7.408334,4.497916 z"
					id="path144305"
				/><path
					style="opacity:1;fill:#a08e59;fill-opacity:1;fill-rule:evenodd;stroke-width:3;stroke-linecap:round;stroke-linejoin:round;stroke-miterlimit:3;stroke-opacity:0.498674;paint-order:stroke fill markers"
					d="m 48.154166,78.052082 6.085417,-5.820833 v -2.116667 h -7.9375 c 0.336299,2.805872 -0.795248,6.447544 1.852083,7.9375 z"
					id="path144307"
				/><path
					style="opacity:1;fill:#a08e59;fill-opacity:1;fill-rule:evenodd;stroke-width:3;stroke-linecap:round;stroke-linejoin:round;stroke-miterlimit:3;stroke-opacity:0.498674;paint-order:stroke fill markers"
					d="M 91.810416,83.872916 H 80.962499 l -6.085417,6.085416 h 16.933334 z"
					id="path144309"
				/><path
					style="opacity:1;fill:#a08e59;fill-opacity:1;fill-rule:evenodd;stroke-width:3;stroke-linecap:round;stroke-linejoin:round;stroke-miterlimit:3;stroke-opacity:0.498674;paint-order:stroke fill markers"
					d="m 100.0125,100.27708 -5.027085,-3.968748 v -3.175 h 5.027085 z"
					id="path144311"
				/><path
					style="opacity:1;fill:#c9a15e;fill-opacity:1;fill-rule:evenodd;stroke-width:3;stroke-linecap:round;stroke-linejoin:round;stroke-miterlimit:3;stroke-opacity:0.498674;paint-order:stroke fill markers"
					d="m 89.958332,111.38958 7.9375,-7.9375 -3.96875,-3.968748 -7.9375,7.937498 z"
					id="path144313"
				/><path
					style="opacity:1;fill:#94784e;fill-opacity:1;fill-rule:evenodd;stroke-width:3;stroke-linecap:round;stroke-linejoin:round;stroke-miterlimit:3;stroke-opacity:0.498674;paint-order:stroke fill markers"
					d="m 77.522916,112.44792 h 6.614583 l -1.527572,-2.64584 h -3.234928 z"
					id="path144315"
				/><path
					style="opacity:1;fill:#c9a15e;fill-opacity:1;fill-rule:evenodd;stroke-width:3;stroke-linecap:round;stroke-linejoin:round;stroke-miterlimit:3;stroke-opacity:0.498674;paint-order:stroke fill markers"
					d="m 30.1625,113.24167 v -3.175 h 10.583333 v 3.175 z"
					id="path144317"
				/><path
					style="opacity:1;fill:#c9a15e;fill-opacity:1;fill-rule:evenodd;stroke-width:3;stroke-linecap:round;stroke-linejoin:round;stroke-miterlimit:3;stroke-opacity:0.498674;paint-order:stroke fill markers"
					d="m 17.727083,103.98125 h 3.175 V 89.958332 h -3.175 z"
					id="path144319"
				/><path
					style="opacity:1;fill:#617146;fill-opacity:1;fill-rule:evenodd;stroke-width:3;stroke-linecap:round;stroke-linejoin:round;stroke-miterlimit:3;stroke-opacity:0.498674;paint-order:stroke fill markers"
					d="m 54.239583,72.231249 3.175,-1.322917 -3.175,-0.79375 z"
					id="path144321"
				/><path
					style="opacity:1;fill:#55653d;fill-opacity:1;fill-rule:evenodd;stroke-width:3;stroke-linecap:round;stroke-linejoin:round;stroke-miterlimit:3;stroke-opacity:0.498674;paint-order:stroke fill markers"
					d="m 49.741666,118.00417 h 2.910417 v 2.38125 h 11.1125 v -5.55625 h 6.085416 L 85.460416,99.218749 v -5.55625 -0.529167 H 64.558333 l 12.170833,-12.7 v -7.14375 c -0.670196,-1.37773 -1.368761,-2.732115 -3.175,-3.175 h -9.789583 c -7.471356,5.48558 -13.463113,12.635266 -20.108334,19.05 v 11.641668 h 30.427083 l -11.112499,11.37708 c -9.28375,-0.14604 -13.614635,1.10081 -13.229167,5.82084 z"
					id="path144323"
				/><path
					style="opacity:1;fill:#344324;fill-opacity:1;fill-rule:evenodd;stroke-width:3;stroke-linecap:round;stroke-linejoin:round;stroke-miterlimit:3;stroke-opacity:0.498674;paint-order:stroke fill markers"
					d="m 63.764583,114.82917 h 6.085419 v 5.55625 h -6.085419 z"
					id="path144325"
				/><path
					style="opacity:1;fill:#364426;fill-opacity:1;fill-rule:evenodd;stroke-width:3;stroke-linecap:round;stroke-linejoin:round;stroke-miterlimit:3;stroke-opacity:0.498674;paint-order:stroke fill markers"
					d="m 61.118749,85.460416 v 4.233333 h 4.497917 z"
					id="path144327"
				/><path
					style="opacity:1;fill:#364426;fill-opacity:1;fill-rule:evenodd;stroke-width:3;stroke-linecap:round;stroke-linejoin:round;stroke-miterlimit:3;stroke-opacity:0.498674;paint-order:stroke fill markers"
					d="m 58.208333,76.99375 v 4.233333 h 4.497917 z"
					id="path144329"
				/><path
					style="opacity:1;fill:#364426;fill-opacity:1;fill-rule:evenodd;stroke-width:3;stroke-linecap:round;stroke-linejoin:round;stroke-miterlimit:3;stroke-opacity:0.498674;paint-order:stroke fill markers"
					d="m 67.336458,73.81875 v 4.233333 h 4.497917 z"
					id="path144331"
				/><path
					style="opacity:1;fill:#fbfbfb;fill-opacity:1;fill-rule:evenodd;stroke-width:3;stroke-linecap:round;stroke-linejoin:round;stroke-miterlimit:3;stroke-opacity:0.498674;paint-order:stroke fill markers"
					d="m 55.033333,109.00833 v 4.49792 c -7.038572,-0.82726 -9.36361,2.65318 -10.583334,7.14375 -1.780052,-8.06592 3.304952,-10.71857 10.583334,-11.64167 z"
					id="path144333"
				/><path
					style="opacity:1;fill:#ffffff;fill-opacity:1;fill-rule:evenodd;stroke-width:3;stroke-linecap:round;stroke-linejoin:round;stroke-miterlimit:3;stroke-opacity:0.498674;paint-order:stroke fill markers"
					d="m 20.902083,87.312499 v -8.202083 l -3.175,3.175 -1.276108,4.7625 1.011525,0.584004 z"
					id="path144335"
				/><path
					style="opacity:1;fill:#617146;fill-opacity:1;fill-rule:evenodd;stroke-width:3;stroke-linecap:round;stroke-linejoin:round;stroke-miterlimit:3;stroke-opacity:0.498674;paint-order:stroke fill markers"
					d="m 12.7,89.958332 2.645833,-2.645833 h 5.55625 v 2.645833 z"
					id="path144337"
				/><path
					style="opacity:1;fill:#afa9ae;fill-opacity:1;fill-rule:evenodd;stroke-width:3;stroke-linecap:round;stroke-linejoin:round;stroke-miterlimit:3;stroke-opacity:0.498674;paint-order:stroke fill markers"
					d="m 20.902083,79.639583 v -2.116666 c -1.732163,1.304535 -3.963856,2.414085 -5.027083,5.027082 -0.497296,1.526134 -0.722039,3.104387 -0.529167,4.7625 H 17.4625 c -0.467052,-2.944678 1.447895,-5.494258 3.439583,-7.672916 z"
					id="path144339"
				/><path
					style="opacity:1;fill:#afa9ae;fill-opacity:1;fill-rule:evenodd;stroke-width:3;stroke-linecap:round;stroke-linejoin:round;stroke-miterlimit:3;stroke-opacity:0.498674;paint-order:stroke fill markers"
					d="m 44.449999,120.65 c 0.759338,-2.28374 0.154932,-5.13997 4.497918,-6.61458 2.513274,-1.02987 4.391049,-0.94096 6.085416,-0.52917 -6.793207,-0.36489 -8.740206,3.34576 -10.583334,7.14375 z"
					id="path144341"
				/><path
					style="opacity:1;fill:#c8b7a3;fill-opacity:1;fill-rule:evenodd;stroke-width:3;stroke-linecap:round;stroke-linejoin:round;stroke-miterlimit:3;stroke-opacity:0.498674;paint-order:stroke fill markers"
					d="M 122.2375,12.435417 125.14792,7.14375 H 112.7125 v 3.175 z"
					id="path144343"
				/><path
					style="opacity:1;fill:#e26753;fill-opacity:1;fill-rule:evenodd;stroke-width:3;stroke-linecap:round;stroke-linejoin:round;stroke-miterlimit:3;stroke-opacity:0.498674;paint-order:stroke fill markers"
					d="m 97.895832,12.435417 c -3.284651,2.827296 -6.157069,5.856161 -5.55625,10.583333 l 3.175,5.291666 c -4.046873,2.30861 -7.374508,5.526722 -8.202083,11.90625 l 1.852083,7.408333 c -5.422944,1.407821 -11.018078,1.30747 -15.875,7.672917 H 69.056249 V 49.477083 L 82.020832,25.135416 V 10.583333 Z"
					id="path144345"
				/><path
					style="opacity:1;fill:#be5546;fill-opacity:1;fill-rule:evenodd;stroke-width:3;stroke-linecap:round;stroke-linejoin:round;stroke-miterlimit:3;stroke-opacity:0.498674;paint-order:stroke fill markers"
					d="m 69.320833,50.8 c 4.814472,-3.097827 9.151726,-7.591062 14.816667,-8.202083 0,0 -2.363873,-6.056591 -1.322917,-8.73125 2.792151,-5.442979 5.350565,-6.135846 7.9375,-7.408333 -2.204861,-2.557639 -6.350653,-5.101994 -6.879167,-7.672918 0.141262,-2.416512 1.573029,-4.366185 2.910416,-6.349999 L 84.950246,9.2604166 H 59.531249 L 61.303622,15.875 78.052082,32.623461 72.710669,42.333334 C 71.580724,45.155556 69.252793,47.725222 69.320833,50.8 Z"
					id="path144347"
				/><path
					style="opacity:1;fill:#868178;fill-opacity:1;fill-rule:evenodd;stroke-width:3;stroke-linecap:round;stroke-linejoin:round;stroke-miterlimit:3;stroke-opacity:0.498674;paint-order:stroke fill markers"
					d="m 48.418749,10.31875 2.116667,2.116667 H 122.2375 l 1.22206,-2.116667 H 112.7125 V 7.1437499 h -3.43958 V 10.31875 h -7.40834 v -3.175 h -3.174997 l -10e-7,3.175 h -8.466666 l 10e-7,-3.175 h -3.175 l -10e-7,3.175 h -8.202084 l 10e-7,-3.175 h -2.910416 l -10e-7,3.175 z"
					id="path144349"
				/><path
					style="opacity:1;fill:#ffffff;fill-opacity:1;fill-rule:evenodd;stroke-width:3;stroke-linecap:round;stroke-linejoin:round;stroke-miterlimit:3;stroke-opacity:0.498674;paint-order:stroke fill markers"
					d="m 48.418749,10.31875 3.96875,-3.1750001 h 6.614584 l -2.38125,3.1750001 z"
					id="path144351"
				/><path
					style="opacity:1;fill:#c8b7a3;fill-opacity:1;fill-rule:evenodd;stroke-width:3;stroke-linecap:round;stroke-linejoin:round;stroke-miterlimit:3;stroke-opacity:0.498674;paint-order:stroke fill markers"
					d="M 56.620833,10.31875 H 75.935416 V 7.4083332 7.1437499 H 59.002083 Z"
					id="path144353"
				/><path
					style="opacity:1;fill:#c8b7a3;fill-opacity:1;fill-rule:evenodd;stroke-width:3;stroke-linecap:round;stroke-linejoin:round;stroke-miterlimit:3;stroke-opacity:0.498674;paint-order:stroke fill markers"
					d="M 78.845832,10.31875 V 7.1437499 h 8.202084 V 10.31875 Z"
					id="path144355"
				/><path
					style="opacity:1;fill:#c8b7a3;fill-opacity:1;fill-rule:evenodd;stroke-width:3;stroke-linecap:round;stroke-linejoin:round;stroke-miterlimit:3;stroke-opacity:0.498674;paint-order:stroke fill markers"
					d="m 90.222916,10.31875 10e-7,-3.175 h 8.466666 l -10e-7,3.175 z"
					id="path144357"
				/><path
					style="opacity:1;fill:#c8b7a3;fill-opacity:1;fill-rule:evenodd;stroke-width:3;stroke-linecap:round;stroke-linejoin:round;stroke-miterlimit:3;stroke-opacity:0.498674;paint-order:stroke fill markers"
					d="m 101.86458,10.31875 v -3.175 h 7.40834 v 3.175 z"
					id="path144359"
				/><path
					style="opacity:1;fill:#c8b7a3;fill-opacity:1;fill-rule:evenodd;stroke-width:3;stroke-linecap:round;stroke-linejoin:round;stroke-miterlimit:3;stroke-opacity:0.498674;paint-order:stroke fill markers"
					d="m 60.854167,12.435417 h 4.497916 l 9.524999,3.968749 10.054167,3.96875 10.583333,3.439584 10.318748,3.96875 11.37709,3.439583 c -0.315,0.834586 0.12317,2.258164 -2.11667,1.5875 L 113.24167,33.304596 63.499999,15.875 Z"
					id="path144361"
				/><path
					style="opacity:1;fill:#868178;fill-opacity:1;fill-rule:evenodd;stroke-width:3;stroke-linecap:round;stroke-linejoin:round;stroke-miterlimit:3;stroke-opacity:0.498674;paint-order:stroke fill markers"
					d="m 58.737499,12.435417 5.820834,5.027083 50.270837,17.4625 0.26458,-2.116667 -6.87917,-2.38125 0.52917,-1.852083 -2.91042,-0.779844 -0.79375,1.374815 -7.672915,-2.711638 1.058334,-1.5875 -2.910417,-1.058333 -1.058333,1.322916 -6.879167,-2.38125 0.79375,-1.322916 -3.439583,-1.058334 -1.322917,1.5875 -6.879166,-2.645833 1.058333,-1.5875 -2.910417,-1.322917 -1.322916,1.5875 -12.7,-5.556249 z"
					id="path144363"
				/><path
					style="opacity:1;fill:#cfaa68;fill-opacity:1;fill-rule:evenodd;stroke-width:3;stroke-linecap:round;stroke-linejoin:round;stroke-miterlimit:3;stroke-opacity:0.498674;paint-order:stroke fill markers"
					d="m 65.352083,55.297916 h 3.704166 v -4.7625 L 83.476041,36.115625 59.795833,12.435417 h -3.704167 l 3.513418,6.085416 17.124082,17.197917 -10.583334,11.906249 -2.116666,3.96875 z"
					id="path144365"
				/><path
					style="opacity:1;fill:#c8b7a3;fill-opacity:1;fill-rule:evenodd;stroke-width:3;stroke-linecap:round;stroke-linejoin:round;stroke-miterlimit:3;stroke-opacity:0.498674;paint-order:stroke fill markers"
					d="m 105.56875,61.118749 0.70895,-2.645833 -2.82562,-3.175 -2.38125,-2.116667 -5.027081,-4.7625 -7.672917,-7.408333 -7.408333,-7.408333 v 3.439586 l 3.704167,3.704166 6.879164,6.879164 5.820833,5.820834 7.672917,7.672919 z"
					id="path144367"
				/><path
					style="opacity:1;fill:#868178;fill-opacity:1;fill-rule:evenodd;stroke-width:3;stroke-linecap:round;stroke-linejoin:round;stroke-miterlimit:3;stroke-opacity:0.498674;paint-order:stroke fill markers"
					d="m 80.962499,37.041666 3.704167,3.175 1.5875,-1.5875 2.116666,2.38125 -1.5875,1.322917 4.7625,4.7625 1.852083,-1.322917 2.645834,2.645833 -1.5875,1.058334 4.497916,4.7625 2.116665,-1.058334 2.38125,2.116667 -1.5875,2.38125 3.70417,3.439583 v 2.910417 L 82.285416,40.745833 c -1.096358,-0.688096 -1.004442,-2.367275 -1.322917,-3.704167 z"
					id="path144369"
				/><path
					style="opacity:1;fill:#5f6f44;fill-opacity:1;fill-rule:evenodd;stroke-width:3;stroke-linecap:round;stroke-linejoin:round;stroke-miterlimit:3;stroke-opacity:0.498674;paint-order:stroke fill markers"
					d="m 65.352083,55.297916 v -5.027083 c 4.498501,-5.027074 9.578444,-10.044615 13.493749,-15.08125 L 56.091666,12.435417 h -5.55625 l 0.458272,0.79375 h 2.452145 l 22.224999,22.224999 -12.435416,14.2875 v 5.55625 z"
					id="path144371"
				/><path
					style="opacity:1;fill:#868178;fill-opacity:1;fill-rule:evenodd;stroke-width:3;stroke-linecap:round;stroke-linejoin:round;stroke-miterlimit:3;stroke-opacity:0.498674;paint-order:stroke fill markers"
					d="m 53.445833,13.229167 h -2.452145 l -0.458272,-0.793749 h 3.439583 z"
					id="path144373"
				/><path
					style="opacity:1;fill:#868178;fill-opacity:1;fill-rule:evenodd;stroke-width:3;stroke-linecap:round;stroke-linejoin:round;stroke-miterlimit:3;stroke-opacity:0.498674;paint-order:stroke fill markers"
					d="m 53.445833,13.229167 h 3.439583 l -1.058333,-1.058333 h -2.38125 z"
					id="path144375"
				/><path
					style="opacity:1;fill:#776f68;fill-opacity:1;fill-rule:evenodd;stroke-width:3;stroke-linecap:round;stroke-linejoin:round;stroke-miterlimit:3;stroke-opacity:0.498674;paint-order:stroke fill markers"
					d="m 116.94583,48.683333 v -6.35 l -1.85208,1.0693 v 6.8682 z"
					id="path144377"
				/><path
					style="opacity:1;fill:#4f5f36;fill-opacity:1;fill-rule:evenodd;stroke-width:3;stroke-linecap:round;stroke-linejoin:round;stroke-miterlimit:3;stroke-opacity:0.498674;paint-order:stroke fill markers"
					d="m 116.94583,47.360416 v -6.879167 l 3.175,-1.322916 -0.26458,6.614583 z"
					id="path144379"
				/><path
					style="opacity:1;fill:#59665c;fill-opacity:1;fill-rule:evenodd;stroke-width:3;stroke-linecap:round;stroke-linejoin:round;stroke-miterlimit:3;stroke-opacity:0.498674;paint-order:stroke fill markers"
					d="m 119.85625,57.943749 v -7.14375 l -2.38125,1.374815 v 5.768935 z"
					id="path144381"
				/><path
					style="opacity:1;fill:#8b7f71;fill-opacity:1;fill-rule:evenodd;stroke-width:3;stroke-linecap:round;stroke-linejoin:round;stroke-miterlimit:3;stroke-opacity:0.498674;paint-order:stroke fill markers"
					d="m 117.21042,80.9625 v -6.35 l 2.64583,-1.639399 v 6.666481 z"
					id="path144383"
				/><path
					style="opacity:1;fill:#c6b5a2;fill-opacity:1;fill-rule:evenodd;stroke-width:3;stroke-linecap:round;stroke-linejoin:round;stroke-miterlimit:3;stroke-opacity:0.498674;paint-order:stroke fill markers"
					d="m 117.21042,92.074999 v -6.085417 l 2.64583,-1.527572 v 6.554656 z"
					id="path144385"
				/><path
					style="opacity:1;fill:#c6b5a2;fill-opacity:1;fill-rule:evenodd;stroke-width:3;stroke-linecap:round;stroke-linejoin:round;stroke-miterlimit:3;stroke-opacity:0.498674;paint-order:stroke fill markers"
					d="m 116.94583,102.92292 h 3.175 v -7.143755 h -3.175 z"
					id="path144387"
				/><path
					style="opacity:1;fill:#776f68;fill-opacity:1;fill-rule:evenodd;stroke-width:3;stroke-linecap:round;stroke-linejoin:round;stroke-miterlimit:3;stroke-opacity:0.498674;paint-order:stroke fill markers"
					d="m 117.475,53.181249 -2.29136,1.322917 v 6.614583 l 2.29136,-3.175 z"
					id="path144389"
				/><path
					style="opacity:1;fill:#776f68;fill-opacity:1;fill-rule:evenodd;stroke-width:3;stroke-linecap:round;stroke-linejoin:round;stroke-miterlimit:3;stroke-opacity:0.498674;paint-order:stroke fill markers"
					d="m 115.35833,83.872916 1.85209,-1.852084 v -5.55625 h -2.38125 v 7.408334 z"
					id="path144391"
				/><path
					style="opacity:1;fill:#776f68;fill-opacity:1;fill-rule:evenodd;stroke-width:3;stroke-linecap:round;stroke-linejoin:round;stroke-miterlimit:3;stroke-opacity:0.498674;paint-order:stroke fill markers"
					d="m 117.21042,92.074999 -2.11667,3.175 v -6.879167 l 2.11667,-1.5875 z"
					id="path144393"
				/><path
					style="opacity:1;fill:#776f68;fill-opacity:1;fill-rule:evenodd;stroke-width:3;stroke-linecap:round;stroke-linejoin:round;stroke-miterlimit:3;stroke-opacity:0.498674;paint-order:stroke fill markers"
					d="m 116.94583,102.92292 -1.5875,2.91041 v -6.614581 h 1.5875 z"
					id="path144395"
				/><path
					style="opacity:1;fill:#89867c;fill-opacity:1;fill-rule:evenodd;stroke-width:3.19374;stroke-linecap:round;stroke-linejoin:round;stroke-miterlimit:3;stroke-opacity:0.498674;paint-order:stroke fill markers"
					d="M 115.09375,115.62292 V 111.125 h 2.11667 v 4.49792 z"
					id="path144397"
				/><path
					style="opacity:1;fill:#c2b09c;fill-opacity:1;fill-rule:evenodd;stroke-width:3;stroke-linecap:round;stroke-linejoin:round;stroke-miterlimit:3;stroke-opacity:0.498674;paint-order:stroke fill markers"
					d="m 116.68125,111.125 v -2.64583 l 3.2079,-1.85209 v 11.90625 c -0.87889,1.88933 -2.75819,2.42453 -4.50113,2.63799 -1.74595,0.21381 -3.37273,-0.49549 -4.79219,-2.63799 l -2.91041,-2.91041 h 8.99583 z"
					id="path144399"
				/><path
					style="opacity:1;fill:#465631;fill-opacity:1;fill-rule:evenodd;stroke-width:3;stroke-linecap:round;stroke-linejoin:round;stroke-miterlimit:3;stroke-opacity:0.498674;paint-order:stroke fill markers"
					d="m 117.475,35.983333 2.38125,-1.680329 v -4.405088 l -2.64583,1.322917 v 4.7625 z"
					id="path144401"
				/><path
					style="opacity:1;fill:#59665c;fill-opacity:1;fill-rule:evenodd;stroke-width:3;stroke-linecap:round;stroke-linejoin:round;stroke-miterlimit:3;stroke-opacity:0.498674;paint-order:stroke fill markers"
					d="m 117.21042,70.008242 v -6.35 l 2.64583,-1.639399 v 6.666481 z"
					id="path144403"
				/><path
					style="opacity:1;fill:#858179;fill-opacity:1;fill-rule:evenodd;stroke-width:3;stroke-linecap:round;stroke-linejoin:round;stroke-miterlimit:3;stroke-opacity:0.498674;paint-order:stroke fill markers"
					d="m 115.35833,72.918658 1.85209,-1.852084 v -5.55625 h -2.38125 v 7.408334 z"
					id="path144405"
				/></g
			><g id="g144151"
				><path
					style="opacity:1;fill:#776f68;fill-opacity:1;fill-rule:evenodd;stroke-width:3;stroke-linecap:round;stroke-linejoin:round;stroke-miterlimit:3;stroke-opacity:0.498674;paint-order:stroke fill markers"
					d="m 114.82917,34.925 v 4.233333 l 2.38125,-1.852083 v -6.085417 l -3.175,1.058333 z"
					id="path124221"
				/><path
					style="opacity:1;fill:#e5d8a1;fill-opacity:1;fill-rule:evenodd;stroke-width:3;stroke-linecap:round;stroke-linejoin:round;stroke-miterlimit:3;stroke-opacity:0.498674;paint-order:stroke fill markers"
					d="m 79.374999,55.297916 c 8.387925,0.04454 16.166549,2.333363 23.547921,6.085417 l 1.05833,-5.291667 c -0.94765,-8.583118 3.46385,-15.409807 9.525,-21.695833 L 113.24167,30.1625 c -1.73083,-5.606685 2.25925,-11.807691 6.08541,-17.991667 l -10.84791,-1.5875 -9.260421,2.645834 -7.9375,21.166666 -14.552083,15.875 z"
					id="path123810"
				/><path
					style="opacity:1;fill:#dfaa86;fill-opacity:1;fill-rule:evenodd;stroke-width:3;stroke-linecap:round;stroke-linejoin:round;stroke-miterlimit:3;stroke-opacity:0.498674;paint-order:stroke fill markers"
					d="m 73.289582,55.297916 h 6.085417 c 4.013508,-3.614613 8.433651,-3.642591 12.7,-5.027083 l 1.5875,-4.233334 C 93.8638,38.762612 97.870853,33.992968 104.51042,30.95625 l -2.38125,-4.497917 c -2.787367,-4.617064 0.67963,-9.426531 5.82083,-14.2875 L 94.720832,11.641667 87.312499,18.520833 84.666666,39.6875 70.114582,52.916666 Z"
					id="path122054"
				/><path
					style="opacity:1;fill:#2a391d;fill-opacity:1;fill-rule:evenodd;stroke-width:3;stroke-linecap:round;stroke-linejoin:round;stroke-miterlimit:3;stroke-opacity:0.498674;paint-order:stroke fill markers"
					d="m 33.072916,30.427083 4.839338,-1.296696 8.389829,-11.932471 v -6.349999 l -2.645834,-0.79375 -11.641666,13.229166 z"
					id="path104941"
				/><path
					style="opacity:1;fill:#97834f;fill-opacity:1;fill-rule:evenodd;stroke-width:3;stroke-linecap:round;stroke-linejoin:round;stroke-miterlimit:3;stroke-opacity:0.498674;paint-order:stroke fill markers"
					d="M 42.862499,24.870833 38.629166,29.897916 36.5125,30.95625 35.454166,28.310416 38.364583,24.870833 Z"
					id="path104655"
				/><path
					style="opacity:1;fill:#a88b6f;fill-opacity:1;fill-rule:evenodd;stroke-width:3;stroke-linecap:round;stroke-linejoin:round;stroke-miterlimit:3;stroke-opacity:0.498674;paint-order:stroke fill markers"
					d="m 42.8625,12.964583 -0.793751,3.175 H 34.13125 l 1.322916,-2.910416 z"
					id="path94011"
				/><path
					style="opacity:1;fill:#eed4ac;fill-opacity:1;fill-rule:evenodd;stroke-width:3;stroke-linecap:round;stroke-linejoin:round;stroke-miterlimit:3;stroke-opacity:0.498674;paint-order:stroke fill markers"
					d="m 37.835416,10.054167 h 5.820833 l -0.850738,3.175 h -7.351345 z"
					id="path92627"
				/><path
					style="opacity:1;fill:#617146;fill-opacity:1;fill-rule:evenodd;stroke-width:3;stroke-linecap:round;stroke-linejoin:round;stroke-miterlimit:3;stroke-opacity:0.498674;paint-order:stroke fill markers"
					d="m 42.068749,16.139583 -7.937499,9.525 -2.910417,-6.879167 3.175,-2.645833 z"
					id="path96016"
				/><path
					style="opacity:1;fill:#c7ae82;fill-opacity:1;fill-rule:evenodd;stroke-width:3;stroke-linecap:round;stroke-linejoin:round;stroke-miterlimit:3;stroke-opacity:0.498674;paint-order:stroke fill markers"
					d="m 41.274999,48.418749 v -3.439583 l 7.672917,-1.322917 C 41.548376,35.468587 39.894078,32.130594 37.041666,27.78125 l -0.529166,3.175 c -1.437827,-3.460121 -2.87853,-6.919892 -2.645834,-10.583334 -0.02932,-6.896728 3.57304,-9.086434 5.820834,-12.6999993 -1.748151,2.646e-4 -3.237481,-0.089537 -6.35,3.1750003 L 32.808333,7.9374999 c -4.088236,1.3945957 -4.001186,3.4787261 -5.55625,5.2916671 l 8.466667,30.427082 4.762499,6.35 z"
					id="path83586"
				/><path
					style="opacity:1;fill:#b1abad;fill-opacity:1;fill-rule:evenodd;stroke-width:3;stroke-linecap:round;stroke-linejoin:round;stroke-miterlimit:3;stroke-opacity:0.498674;paint-order:stroke fill markers"
					d="M 25.664583,22.225 22.225,18.785416 h -1.322917 l 0.264583,2.116667 3.96875,5.55625 1.852084,-1.5875 z"
					id="path83420"
				/><path
					style="opacity:1;fill:#fbe2cf;fill-opacity:1;fill-rule:evenodd;stroke-width:3;stroke-linecap:round;stroke-linejoin:round;stroke-miterlimit:3;stroke-opacity:0.498674;paint-order:stroke fill markers"
					d="M 25.664583,41.274999 V 22.489583 l 1.5875,-9.260416 3.704167,-3.175 0.264583,3.704166 c 1.996146,-3.040342 4.579948,-4.4020223 7.14375,-5.8208331 -2.05406,3.4580951 -4.956876,6.2527541 -5.55625,10.8479161 -0.208891,7.656353 1.901326,10.68878 3.704167,14.2875 L 37.570833,31.75 45.772916,42.597916 c -2.867648,0.377109 -5.791709,0.681223 -6.614583,3.704167 z"
					id="path83418"
				/><path
					style="opacity:1;fill:#2a391d;fill-opacity:1;fill-rule:evenodd;stroke-width:3;stroke-linecap:round;stroke-linejoin:round;stroke-miterlimit:3;stroke-opacity:0.498674;paint-order:stroke fill markers"
					d="M 23.8125,61.647916 V 40.481249 l 1.852083,-1.852083 v -13.49375 l -4.497917,-4.497916 -1.5875,2.116666 -4.497916,-0.79375 h -3.439583 v 16.404167 1.5875 l 5.556249,15.610416 3.96875,5.291667 2.38125,1.5875 z"
					id="path82183"
				/><path
					style="opacity:1;fill:#b5afb4;fill-rule:evenodd;stroke-width:3;stroke-linecap:round;stroke-linejoin:round;stroke-miterlimit:3;stroke-opacity:0.498674;paint-order:stroke fill markers;fill-opacity:1"
					d="m 17.991666,64.029166 h 11.1125 v 3.175 H 20.6375 c -1.449282,-0.807681 -2.132894,-1.953639 -2.645834,-3.175 z"
					id="path64596"
				/><path
					style="opacity:1;fill:#c7ae82;fill-opacity:1;fill-rule:evenodd;stroke-width:3;stroke-linecap:round;stroke-linejoin:round;stroke-miterlimit:3;stroke-opacity:0.498674;paint-order:stroke fill markers"
					d="m 31.485416,43.920833 5.291667,-3.96875 v -2.116667 l -5.291667,3.704167 v -4.497917 l -5.820833,4.233333 v 2.910417 z"
					id="path66274"
				/><path
					style="opacity:1;fill:#4a5934;fill-opacity:1;fill-rule:evenodd;stroke-width:3;stroke-linecap:round;stroke-linejoin:round;stroke-miterlimit:3;stroke-opacity:0.498674;paint-order:stroke fill markers"
					d="M 40.745833,61.118749 V 50.535416 l -6.35,-6.35 -2.910417,1.058333 3.175,2.116667 1.058334,2.38125 1.058333,4.233333 1.322917,1.5875 v 3.96875 z"
					id="path64764"
				/><path
					style="opacity:1;fill:#bdb6b7;fill-opacity:1;fill-rule:evenodd;stroke-width:3;stroke-linecap:round;stroke-linejoin:round;stroke-miterlimit:3;stroke-opacity:0.498674;paint-order:stroke fill markers"
					d="m 40.745833,61.118749 3.175,1.852084 v -11.90625 l -7.14375,-7.14375 v -3.96875 l -5.291667,3.96875 v 1.322916 l 2.116667,0.529167 2.645833,1.322917 2.116667,4.497916 1.322917,6.614584 z"
					id="path66218"
				/><path
					style="opacity:1;fill:#4a5934;fill-opacity:1;fill-rule:evenodd;stroke-width:3;stroke-linecap:round;stroke-linejoin:round;stroke-miterlimit:3;stroke-opacity:0.498674;paint-order:stroke fill markers"
					d="m 31.485416,42.597916 v 2.645833 l -3.439583,1.985844 0,16.799574 H 25.4 l 0,-17.727084 5.55625,-4.233334 z"
					id="path64708"
				/><path
					style="opacity:1;fill:#ebeaea;fill-opacity:1;fill-rule:evenodd;stroke-width:3;stroke-linecap:round;stroke-linejoin:round;stroke-miterlimit:3;stroke-opacity:0.498674;paint-order:stroke fill markers"
					d="M 41.274999,61.118749 V 59.002083 H 35.71875 c 0.634615,1.655546 2.291798,2.513182 5.556249,2.116666 z"
					id="path66392"
				/><path
					style="opacity:1;fill:#ebeaea;fill-opacity:1;fill-rule:evenodd;stroke-width:3;stroke-linecap:round;stroke-linejoin:round;stroke-miterlimit:3;stroke-opacity:0.498674;paint-order:stroke fill markers"
					d="m 41.010416,56.091666 v -2.116667 h -5.820833 c 1.237698,1.77435 3.187941,2.464746 5.820833,2.116667 z"
					id="path66394"
				/><path
					style="opacity:1;fill:#ebeaea;fill-opacity:1;fill-rule:evenodd;stroke-width:3;stroke-linecap:round;stroke-linejoin:round;stroke-miterlimit:3;stroke-opacity:0.498674;paint-order:stroke fill markers"
					d="m 31.220833,47.624999 h 6.614583 v 2.38125 c -4.433948,-0.28514 -5.890743,-1.249576 -6.614583,-2.38125 z"
					id="path66396"
				/><path
					style="opacity:1;fill:#528230;fill-opacity:1;fill-rule:evenodd;stroke-width:3;stroke-linecap:round;stroke-linejoin:round;stroke-miterlimit:3;stroke-opacity:0.498674;paint-order:stroke fill markers"
					d="m 23.8125,54.768749 c -3.732124,0.826013 -5.629961,-0.419925 -5.957533,-3.439583 v -17.4625 l 5.957533,6.614583 z"
					id="path79088"
				/><path
					style="opacity:1;fill:#17110c;fill-opacity:1;fill-rule:evenodd;stroke-width:3;stroke-linecap:round;stroke-linejoin:round;stroke-miterlimit:3;stroke-opacity:0.498674;paint-order:stroke fill markers"
					d="m 23.8125,52.916666 c -1.81548,0.214337 -3.164653,-0.23912 -3.704167,-1.852083 v -6.879167 h 3.96875 v 8.73125 z"
					id="path78818"
				/><path
					style="opacity:1;fill:#848078;fill-opacity:1;fill-rule:evenodd;stroke-width:3;stroke-linecap:round;stroke-linejoin:round;stroke-miterlimit:3;stroke-opacity:0.498674;paint-order:stroke fill markers"
					d="m 17.991666,64.029166 v -5.55625 C 14.483463,57.318088 12.611842,46.973499 10.054167,40.481249 l 2.291358,-1.322916 c 2.090914,5.980203 3.994177,11.920656 7.762808,18.25625 1.036659,1.609046 2.029165,3.262216 3.704167,4.233333 V 40.481249 l 1.852083,-1.852083 v 4.7625 l 5.820833,-4.233333 v 3.439583 l -5.820833,3.96875 v 17.4625 z"
					id="path64598"
				/><path
					style="opacity:1;fill:#ebeaea;fill-opacity:1;fill-rule:evenodd;stroke-width:3;stroke-linecap:round;stroke-linejoin:round;stroke-miterlimit:3;stroke-opacity:0.498674;paint-order:stroke fill markers"
					d="M 25.664583,50.799999 H 34.13125 L 31.75,53.181249 h -6.085417 z"
					id="path66390"
				/><path
					style="opacity:1;fill:#ebeaea;fill-opacity:1;fill-rule:evenodd;stroke-width:3;stroke-linecap:round;stroke-linejoin:round;stroke-miterlimit:3;stroke-opacity:0.498674;paint-order:stroke fill markers"
					d="m 31.75,56.356249 h -6.085417 v 2.645834 C 29.413349,58.833096 31.286904,57.886947 31.75,56.356249 Z"
					id="path66388"
				/><path
					style="opacity:1;fill:#ebeaea;fill-opacity:1;fill-rule:evenodd;stroke-width:3;stroke-linecap:round;stroke-linejoin:round;stroke-miterlimit:3;stroke-opacity:0.498674;paint-order:stroke fill markers"
					d="m 25.929166,64.293749 c 7.529965,-0.111296 7.158858,-1.956195 8.73125,-3.174999 h -8.995833 v 3.174999 z"
					id="path66330"
				/><path
					style="opacity:1;fill:#b19651;fill-opacity:0.99607843;fill-rule:evenodd;stroke-width:3;stroke-linecap:round;stroke-linejoin:round;stroke-miterlimit:3;stroke-opacity:0.498674;paint-order:stroke fill markers"
					d="m 20.108333,50.270833 -2.116667,-1.5875 v -11.1125 l 2.645834,3.704166 v 2.910417 z"
					id="path79090"
				/><circle
					style="opacity:1;fill:#279568;fill-opacity:1;fill-rule:evenodd;stroke-width:3;stroke-linecap:round;stroke-linejoin:round;stroke-miterlimit:3;stroke-opacity:0.498674;paint-order:stroke fill markers"
					id="path78980"
					cx="21.960417"
					cy="48.418751"
					r="1.5875"
				/><path
					style="opacity:1;fill:#b1abb0;fill-opacity:1;fill-rule:evenodd;stroke-width:3;stroke-linecap:round;stroke-linejoin:round;stroke-miterlimit:3;stroke-opacity:0.498674;paint-order:stroke fill markers"
					d="m 10.054167,40.481249 2.116666,-1.058333 V 21.166666 L 6.0854166,8.7312499 V 22.489583 l -1.8520833,1.852083 z"
					id="path83075"
				/><path
					style="opacity:1;fill:#efefef;fill-opacity:1;fill-rule:evenodd;stroke-width:3;stroke-linecap:round;stroke-linejoin:round;stroke-miterlimit:3;stroke-opacity:0.498674;paint-order:stroke fill markers"
					d="m 23.8125,35.983333 v -8.73125 c -3.576863,-3.107952 -5.449016,-6.688745 -7.14375,-10.31875 h -1.5875 c -0.193948,8.767852 3.328212,14.641393 8.73125,19.05 z"
					id="path83248"
				/><path
					style="opacity:1;fill:#b1abb0;fill-opacity:1;fill-rule:evenodd;stroke-width:3;stroke-linecap:round;stroke-linejoin:round;stroke-miterlimit:3;stroke-opacity:0.498674;paint-order:stroke fill markers"
					d="m 23.8125,35.983333 v -2.38125 C 18.981893,29.180312 16.42275,23.911634 15.610416,17.991666 H 15.08125 c 0.0419,6.98906 2.391523,13.180185 8.73125,17.991667 z"
					id="path83252"
				/><path
					style="opacity:1;fill:#efefef;fill-opacity:1;fill-rule:evenodd;stroke-width:3;stroke-linecap:round;stroke-linejoin:round;stroke-miterlimit:3;stroke-opacity:0.498674;paint-order:stroke fill markers"
					d="M 4.2333333,24.341666 3.6223043,23.283333 V 7.9374999 H 6.0854166 V 22.489583 Z"
					id="path83308"
				/><path
					style="opacity:1;fill:#efefef;fill-opacity:1;fill-rule:evenodd;stroke-width:3;stroke-linecap:round;stroke-linejoin:round;stroke-miterlimit:3;stroke-opacity:0.498674;paint-order:stroke fill markers"
					d="m 25.664583,22.489583 1.5875,-9.260416 -1.322917,-1.322917 V 8.4666667 l -2.645833,-1.5875 v 4.4979163 l -1.058333,1.5875 h -1.322917 v 5.820833 z"
					id="path83530"
				/><path
					style="opacity:1;fill:#eed4ac;fill-opacity:1;fill-rule:evenodd;stroke-width:3;stroke-linecap:round;stroke-linejoin:round;stroke-miterlimit:3;stroke-opacity:0.498674;paint-order:stroke fill markers"
					d="m 46.302083,10.847917 5.55625,5.556249 V 19.05 l -6.085417,-5.820833 z"
					id="path92683"
				/><path
					style="opacity:1;fill:#eed4ac;fill-opacity:1;fill-rule:evenodd;stroke-width:3;stroke-linecap:round;stroke-linejoin:round;stroke-miterlimit:3;stroke-opacity:0.498674;paint-order:stroke fill markers"
					d="m 56.091666,24.077083 h 5.027083 v 5.55625 l -5.55625,-5.55625 z"
					id="path92685"
				/><path
					style="opacity:1;fill:#eed4ac;fill-opacity:1;fill-rule:evenodd;stroke-width:3;stroke-linecap:round;stroke-linejoin:round;stroke-miterlimit:3;stroke-opacity:0.498674;paint-order:stroke fill markers"
					d="m 64.029166,32.54375 h 5.027083 v 5.027083 z"
					id="path92687"
				/><path
					style="opacity:1;fill:#eed4ac;fill-opacity:1;fill-rule:evenodd;stroke-width:3;stroke-linecap:round;stroke-linejoin:round;stroke-miterlimit:3;stroke-opacity:0.498674;paint-order:stroke fill markers"
					d="m 75.406249,66.674999 h 4.233333 L 74.75135,58.208333 h -4.372184 z"
					id="path92689"
				/><path
					style="opacity:1;fill:#eed4ac;fill-opacity:1;fill-rule:evenodd;stroke-width:3;stroke-linecap:round;stroke-linejoin:round;stroke-miterlimit:3;stroke-opacity:0.498674;paint-order:stroke fill markers"
					d="m 87.841666,68.791666 1.322916,-1.322917 h 5.291667 v 5.291667 l -0.763786,1.322916 z"
					id="path92691"
				/><path
					style="opacity:1;fill:#eed4ac;fill-opacity:1;fill-rule:evenodd;stroke-width:3;stroke-linecap:round;stroke-linejoin:round;stroke-miterlimit:3;stroke-opacity:0.498674;paint-order:stroke fill markers"
					d="m 94.985415,75.935416 2.645834,-2.645834 h 6.085421 c 2.31993,0.361726 4.02404,1.654823 5.55625,3.207904 v 10.55043 c -0.73429,0.920498 -1.59353,1.727127 -2.91042,2.116666 v -8.202083 c -0.89123,-1.702487 -1.50235,-3.414541 -5.02708,-5.027083 z"
					id="path92693"
				/><path
					style="opacity:1;fill:#eed4ac;fill-opacity:1;fill-rule:evenodd;stroke-width:3;stroke-linecap:round;stroke-linejoin:round;stroke-miterlimit:3;stroke-opacity:0.498674;paint-order:stroke fill markers"
					d="m 106.09792,104.24583 2.64583,-1.52757 v -7.732845 l -2.64583,-1.852083 z"
					id="path92695"
				/><path
					style="opacity:1;fill:#eed4ac;fill-opacity:1;fill-rule:evenodd;stroke-width:3;stroke-linecap:round;stroke-linejoin:round;stroke-miterlimit:3;stroke-opacity:0.498674;paint-order:stroke fill markers"
					d="m 95.514582,116.94583 8.202088,-7.67291 v 3.70416 l -5.027088,5.02709 c -1.085731,-0.0917 -2.181297,-0.0896 -3.175,-1.05834 z"
					id="path92697"
				/><path
					style="opacity:1;fill:#eed4ac;fill-opacity:1;fill-rule:evenodd;stroke-width:3;stroke-linecap:round;stroke-linejoin:round;stroke-miterlimit:3;stroke-opacity:0.498674;paint-order:stroke fill markers"
					d="m 75.141666,118.00417 h 11.90625 v 3.43958 H 76.464582 c -1.17798,-1.15533 -1.328986,-2.2984 -1.322916,-3.43958 z"
					id="path92699"
				/><path
					style="opacity:1;fill:#eed4ac;fill-opacity:1;fill-rule:evenodd;stroke-width:3;stroke-linecap:round;stroke-linejoin:round;stroke-miterlimit:3;stroke-opacity:0.498674;paint-order:stroke fill markers"
					d="m 30.1625,118.26875 h 10.583333 l -2.116667,2.91042 h -6.35 c -1.334958,-0.54419 -1.751407,-1.70998 -2.116666,-2.91042 z"
					id="path92701"
				/><path
					style="opacity:1;fill:#a88b6f;fill-opacity:1;fill-rule:evenodd;stroke-width:3;stroke-linecap:round;stroke-linejoin:round;stroke-miterlimit:3;stroke-opacity:0.498674;paint-order:stroke fill markers"
					d="m 25.929166,118.26875 v -2.91042 H 19.05 L 14.816666,111.125 v -3.70417 -0.26458 h -1.852083 v 8.73125 l 2.138602,3.70417 z"
					id="path96012"
				/><path
					style="opacity:1;fill:#eed4ac;fill-opacity:1;fill-rule:evenodd;stroke-width:3;stroke-linecap:round;stroke-linejoin:round;stroke-miterlimit:3;stroke-opacity:0.498674;paint-order:stroke fill markers"
					d="m 25.929166,120.91458 v -2.64583 H 16.66875 c -2.88631,-1.09531 -3.372157,-2.12866 -3.704167,-3.43958 v -7.67292 H 7.1437499 l 2.6458333,2.64583 v 6.08542 c 1.3043268,1.74154 2.5580068,3.49205 5.0270828,5.02708 z"
					id="path92703"
				/><path
					style="opacity:1;fill:#eed4ac;fill-opacity:1;fill-rule:evenodd;stroke-width:3;stroke-linecap:round;stroke-linejoin:round;stroke-miterlimit:3;stroke-opacity:0.498674;paint-order:stroke fill markers"
					d="M 12.7,103.98125 V 89.958332 c -2.548148,0.804792 -5.4669297,0.669303 -6.6145834,5.027083 h 3.4395833 v 2.910417 c -3.128053,1.16912 -4.9393315,3.290928 -5.8208333,6.085418 z"
					id="path92705"
				/><path
					style="opacity:1;fill:#a88b6f;fill-opacity:1;fill-rule:evenodd;stroke-width:3;stroke-linecap:round;stroke-linejoin:round;stroke-miterlimit:3;stroke-opacity:0.498674;paint-order:stroke fill markers"
					d="m 45.772916,13.229167 -0.79375,3.439583 6.614583,6.35 0.264584,-3.96875 z"
					id="path94013"
				/><path
					style="opacity:1;fill:#a88b6f;fill-opacity:1;fill-rule:evenodd;stroke-width:3;stroke-linecap:round;stroke-linejoin:round;stroke-miterlimit:3;stroke-opacity:0.498674;paint-order:stroke fill markers"
					d="m 55.562499,24.077083 -1.322916,1.5875 5.55625,5.55625 1.322916,-1.5875 z"
					id="path94015"
				/><path
					style="opacity:1;fill:#a88b6f;fill-opacity:1;fill-rule:evenodd;stroke-width:3;stroke-linecap:round;stroke-linejoin:round;stroke-miterlimit:3;stroke-opacity:0.498674;paint-order:stroke fill markers"
					d="m 64.029166,32.54375 5.027083,5.027083 -1.5875,1.587497 -5.556247,-5.556247 z"
					id="path94017"
				/><path
					style="opacity:1;fill:#a88b6f;fill-opacity:1;fill-rule:evenodd;stroke-width:3;stroke-linecap:round;stroke-linejoin:round;stroke-miterlimit:3;stroke-opacity:0.498674;paint-order:stroke fill markers"
					d="m 70.379166,58.208333 h -2.910417 l 5.55625,8.466666 h 2.38125 z"
					id="path95998"
				/><path
					style="opacity:1;fill:#a88b6f;fill-opacity:1;fill-rule:evenodd;stroke-width:3;stroke-linecap:round;stroke-linejoin:round;stroke-miterlimit:3;stroke-opacity:0.498674;paint-order:stroke fill markers"
					d="m 87.841666,68.791666 5.820833,5.291666 -1.852083,1.852084 -5.820834,-5.820834 z"
					id="path96000"
				/><path
					style="opacity:1;fill:#c9a15e;fill-opacity:1;fill-rule:evenodd;stroke-width:3;stroke-linecap:round;stroke-linejoin:round;stroke-miterlimit:3;stroke-opacity:0.498674;paint-order:stroke fill markers"
					d="m 94.456249,84.137499 v 6.085417 h 5.556251 v -7.9375 l -5.556251,1.5875 z"
					id="path96506"
				/><path
					style="opacity:1;fill:#617146;fill-opacity:1;fill-rule:evenodd;stroke-width:3;stroke-linecap:round;stroke-linejoin:round;stroke-miterlimit:3;stroke-opacity:0.498674;paint-order:stroke fill markers"
					d="m 94.456249,78.052082 v 6.085417 c 2.743766,-0.444129 4.30928,0.630913 5.556251,2.116667 v 3.96875 l 2.91042,-0.264584 v -12.7 z"
					id="path96422"
				/><path
					style="opacity:1;fill:#a88b6f;fill-opacity:1;fill-rule:evenodd;stroke-width:3;stroke-linecap:round;stroke-linejoin:round;stroke-miterlimit:3;stroke-opacity:0.498674;paint-order:stroke fill markers"
					d="m 94.985415,75.935416 -0.567158,2.116666 h 5.858823 c 1.07177,0.414914 2.04921,0.930432 2.64584,1.852084 v 10.054166 l 3.43958,-0.79375 V 77.522916 c -1.08537,-1.352865 -2.52848,-2.114692 -4.23333,-2.444115 z"
					id="path96002"
				/><path
					style="opacity:1;fill:#a88b6f;fill-opacity:1;fill-rule:evenodd;stroke-width:3;stroke-linecap:round;stroke-linejoin:round;stroke-miterlimit:3;stroke-opacity:0.498674;paint-order:stroke fill markers"
					d="m 106.09792,93.133332 h -2.91042 v 10.847918 0.26458 h 2.91042 z"
					id="path96004"
				/><path
					style="opacity:1;fill:#a88b6f;fill-opacity:1;fill-rule:evenodd;stroke-width:3;stroke-linecap:round;stroke-linejoin:round;stroke-miterlimit:3;stroke-opacity:0.498674;paint-order:stroke fill markers"
					d="m 95.514582,116.94583 -2.116667,-2.11666 7.672915,-8.20209 2.64584,2.64584 z"
					id="path96006"
				/><path
					style="opacity:1;fill:#a88b6f;fill-opacity:1;fill-rule:evenodd;stroke-width:3;stroke-linecap:round;stroke-linejoin:round;stroke-miterlimit:3;stroke-opacity:0.498674;paint-order:stroke fill markers"
					d="m 75.141666,118.00417 v -2.91042 h 11.90625 v 2.91042 z"
					id="path96008"
				/><path
					style="opacity:1;fill:#a88b6f;fill-opacity:1;fill-rule:evenodd;stroke-width:3;stroke-linecap:round;stroke-linejoin:round;stroke-miterlimit:3;stroke-opacity:0.498674;paint-order:stroke fill markers"
					d="m 30.1625,118.26875 v -2.91042 h 10.583333 v 2.91042 z"
					id="path96010"
				/><path
					style="opacity:1;fill:#a88b6f;fill-opacity:1;fill-rule:evenodd;stroke-width:3;stroke-linecap:round;stroke-linejoin:round;stroke-miterlimit:3;stroke-opacity:0.498674;paint-order:stroke fill markers"
					d="m 12.7,103.98125 h 2.38125 V 89.958332 h -2.381254 z"
					id="path96014"
				/><path
					style="opacity:1;fill:#617146;fill-opacity:1;fill-rule:evenodd;stroke-width:3;stroke-linecap:round;stroke-linejoin:round;stroke-miterlimit:3;stroke-opacity:0.498674;paint-order:stroke fill markers"
					d="m 44.979166,16.66875 6.614583,6.35 -3.175,3.704166 -2.38125,-1.852083 h -7.672916 z"
					id="path96410"
				/><path
					style="opacity:1;fill:#97834f;fill-opacity:1;fill-rule:evenodd;stroke-width:3;stroke-linecap:round;stroke-linejoin:round;stroke-miterlimit:3;stroke-opacity:0.498674;paint-order:stroke fill markers"
					d="m 50.270833,28.839583 5.291666,6.35 -3.704166,3.175 C 49.32197,37.94776 47.657685,35.369381 45.772916,33.3375 Z"
					id="path96492"
				/><path
					style="opacity:1;fill:#617146;fill-opacity:1;fill-rule:evenodd;stroke-width:3;stroke-linecap:round;stroke-linejoin:round;stroke-miterlimit:3;stroke-opacity:0.498674;paint-order:stroke fill markers"
					d="m 54.239583,25.664583 5.55625,5.55625 -4.233334,3.96875 -5.291666,-6.35 z"
					id="path96412"
				/><path
					style="opacity:1;fill:#cfa967;fill-opacity:1;fill-rule:evenodd;stroke-width:3;stroke-linecap:round;stroke-linejoin:round;stroke-miterlimit:3;stroke-opacity:0.498674;paint-order:stroke fill markers"
					d="m 59.266666,46.831249 c -2.364347,0.497708 -4.661898,0.63921 -6.614583,-1.058333 -1.46194,-3.33423 2.766649,-5.419958 5.027083,-7.9375 l 4.7625,1.852084 z"
					id="path96494"
				/><path
					style="opacity:1;fill:#617146;fill-opacity:1;fill-rule:evenodd;stroke-width:3;stroke-linecap:round;stroke-linejoin:round;stroke-miterlimit:3;stroke-opacity:0.498674;paint-order:stroke fill markers"
					d="m 61.912499,33.602083 5.55625,5.55625 c -2.709546,2.735144 -5.314263,6.230346 -8.202083,7.672916 -0.458205,-3.707139 -0.200206,-6.788381 -1.5875,-8.995833 z"
					id="path96414"
				/><path
					style="opacity:1;fill:#495833;fill-opacity:1;fill-rule:evenodd;stroke-width:3;stroke-linecap:round;stroke-linejoin:round;stroke-miterlimit:3;stroke-opacity:0.498674;paint-order:stroke fill markers"
					d="m 59.266666,55.033333 v -4.7625 h 0.529167 v 4.7625 z"
					id="path96416"
				/><path
					style="opacity:1;fill:#617146;fill-opacity:1;fill-rule:evenodd;stroke-width:3;stroke-linecap:round;stroke-linejoin:round;stroke-miterlimit:3;stroke-opacity:0.498674;paint-order:stroke fill markers"
					d="M 73.024999,66.674999 H 55.033333 l 2.910416,-8.466666 h 9.525 z"
					id="path96418"
				/><path
					style="opacity:1;fill:#617146;fill-opacity:1;fill-rule:evenodd;stroke-width:3;stroke-linecap:round;stroke-linejoin:round;stroke-miterlimit:3;stroke-opacity:0.498674;paint-order:stroke fill markers"
					d="m 85.989582,70.114582 h -5.027083 v 13.758334 h 10.847917 v -7.9375 z"
					id="path96420"
				/><path
					style="opacity:1;fill:#617146;fill-opacity:1;fill-rule:evenodd;stroke-width:3;stroke-linecap:round;stroke-linejoin:round;stroke-miterlimit:3;stroke-opacity:0.498674;paint-order:stroke fill markers"
					d="m 103.1875,93.133332 h -3.175 v 7.143748 l 3.175,3.96875 z"
					id="path96424"
				/><path
					style="opacity:1;fill:#617146;fill-opacity:1;fill-rule:evenodd;stroke-width:3;stroke-linecap:round;stroke-linejoin:round;stroke-miterlimit:3;stroke-opacity:0.498674;paint-order:stroke fill markers"
					d="m 93.397915,114.82917 -3.439583,-3.43959 7.9375,-7.9375 3.174998,3.175 z"
					id="path96426"
				/><path
					style="opacity:1;fill:#617146;fill-opacity:1;fill-rule:evenodd;stroke-width:3;stroke-linecap:round;stroke-linejoin:round;stroke-miterlimit:3;stroke-opacity:0.498674;paint-order:stroke fill markers"
					d="m 75.141666,115.09375 2.38125,-2.64583 h 6.614583 l 2.910417,2.64583 z"
					id="path96428"
				/><path
					style="opacity:1;fill:#617146;fill-opacity:1;fill-rule:evenodd;stroke-width:3;stroke-linecap:round;stroke-linejoin:round;stroke-miterlimit:3;stroke-opacity:0.498674;paint-order:stroke fill markers"
					d="m 40.745833,115.35833 v -2.11666 H 30.1625 v 2.11666 z"
					id="path96430"
				/><path
					style="opacity:1;fill:#94784e;fill-opacity:1;fill-rule:evenodd;stroke-width:3;stroke-linecap:round;stroke-linejoin:round;stroke-miterlimit:3;stroke-opacity:0.498674;paint-order:stroke fill markers"
					d="m 25.929166,112.97708 v -2.91041 c -2.927003,0.29525 -4.581967,-0.7934 -5.291666,-2.91042 h -2.38125 v 6.08542 H 25.4 Z"
					id="path96516"
				/><path
					style="opacity:1;fill:#617146;fill-opacity:1;fill-rule:evenodd;stroke-width:3;stroke-linecap:round;stroke-linejoin:round;stroke-miterlimit:3;stroke-opacity:0.498674;paint-order:stroke fill markers"
					d="m 25.929166,115.35833 1e-6,-2.38125 h -5.027084 c -1.419238,-0.58877 -2.132829,-1.56258 -2.645833,-2.64583 v -3.175 h -3.439584 v 3.96875 c 0.360423,1.05366 0.723174,3.0133 4.233333,4.23333 z"
					id="path96432"
				/><path
					style="opacity:1;fill:#617146;fill-opacity:1;fill-rule:evenodd;stroke-width:3;stroke-linecap:round;stroke-linejoin:round;stroke-miterlimit:3;stroke-opacity:0.498674;paint-order:stroke fill markers"
					d="m 15.08125,103.98125 h 2.645833 V 89.958332 H 15.08125 Z"
					id="path96434"
				/><path
					style="opacity:1;fill:#cfa967;fill-opacity:1;fill-rule:evenodd;stroke-width:3;stroke-linecap:round;stroke-linejoin:round;stroke-miterlimit:3;stroke-opacity:0.498674;paint-order:stroke fill markers"
					d="m 38.364583,30.1625 4.497916,-5.291667 h 3.175 l 2.38125,1.852083 -5.820833,5.820834 h -4.233333 z"
					id="path96436"
				/><path
					style="opacity:1;fill:#a2905b;fill-opacity:1;fill-rule:evenodd;stroke-width:3;stroke-linecap:round;stroke-linejoin:round;stroke-miterlimit:3;stroke-opacity:0.498674;paint-order:stroke fill markers"
					d="m 59.266666,55.033333 10e-7,-4.7625 c -3.386615,-0.102123 -7.325943,-0.549031 -8.202084,2.116666 0.03918,2.845985 3.923412,2.889647 8.202083,2.645834 z"
					id="path96496"
				/><path
					style="opacity:1;fill:#c9a15e;fill-opacity:1;fill-rule:evenodd;stroke-width:3;stroke-linecap:round;stroke-linejoin:round;stroke-miterlimit:3;stroke-opacity:0.498674;paint-order:stroke fill markers"
					d="m 55.033333,66.674999 2.910416,-8.466666 c -5.086089,-0.35558 -10.209283,-0.748986 -10.31875,3.96875 0.206381,5.930766 4.120438,4.601277 7.408334,4.497916 z"
					id="path96498"
				/><path
					style="opacity:1;fill:#a08e59;fill-opacity:1;fill-rule:evenodd;stroke-width:3;stroke-linecap:round;stroke-linejoin:round;stroke-miterlimit:3;stroke-opacity:0.498674;paint-order:stroke fill markers"
					d="m 48.154166,78.052082 6.085417,-5.820833 v -2.116667 h -7.9375 c 0.336299,2.805872 -0.795248,6.447544 1.852083,7.9375 z"
					id="path96500"
				/><path
					style="opacity:1;fill:#a08e59;fill-opacity:1;fill-rule:evenodd;stroke-width:3;stroke-linecap:round;stroke-linejoin:round;stroke-miterlimit:3;stroke-opacity:0.498674;paint-order:stroke fill markers"
					d="M 91.810416,83.872916 H 80.962499 l -6.085417,6.085416 h 16.933334 z"
					id="path96502"
				/><path
					style="opacity:1;fill:#a08e59;fill-opacity:1;fill-rule:evenodd;stroke-width:3;stroke-linecap:round;stroke-linejoin:round;stroke-miterlimit:3;stroke-opacity:0.498674;paint-order:stroke fill markers"
					d="m 100.0125,100.27708 -5.027085,-3.968748 v -3.175 h 5.027085 z"
					id="path96508"
				/><path
					style="opacity:1;fill:#c9a15e;fill-opacity:1;fill-rule:evenodd;stroke-width:3;stroke-linecap:round;stroke-linejoin:round;stroke-miterlimit:3;stroke-opacity:0.498674;paint-order:stroke fill markers"
					d="m 89.958332,111.38958 7.9375,-7.9375 -3.96875,-3.968748 -7.9375,7.937498 z"
					id="path96510"
				/><path
					style="opacity:1;fill:#94784e;fill-opacity:1;fill-rule:evenodd;stroke-width:3;stroke-linecap:round;stroke-linejoin:round;stroke-miterlimit:3;stroke-opacity:0.498674;paint-order:stroke fill markers"
					d="m 77.522916,112.44792 h 6.614583 l -1.527572,-2.64584 h -3.234928 z"
					id="path96512"
				/><path
					style="opacity:1;fill:#c9a15e;fill-opacity:1;fill-rule:evenodd;stroke-width:3;stroke-linecap:round;stroke-linejoin:round;stroke-miterlimit:3;stroke-opacity:0.498674;paint-order:stroke fill markers"
					d="m 30.1625,113.24167 v -3.175 h 10.583333 v 3.175 z"
					id="path96514"
				/><path
					style="opacity:1;fill:#c9a15e;fill-opacity:1;fill-rule:evenodd;stroke-width:3;stroke-linecap:round;stroke-linejoin:round;stroke-miterlimit:3;stroke-opacity:0.498674;paint-order:stroke fill markers"
					d="m 17.727083,103.98125 h 3.175 V 89.958332 h -3.175 z"
					id="path96518"
				/><path
					style="opacity:1;fill:#617146;fill-opacity:1;fill-rule:evenodd;stroke-width:3;stroke-linecap:round;stroke-linejoin:round;stroke-miterlimit:3;stroke-opacity:0.498674;paint-order:stroke fill markers"
					d="m 54.239583,72.231249 3.175,-1.322917 -3.175,-0.79375 z"
					id="path104943"
				/><path
					style="opacity:1;fill:#55653d;fill-opacity:1;fill-rule:evenodd;stroke-width:3;stroke-linecap:round;stroke-linejoin:round;stroke-miterlimit:3;stroke-opacity:0.498674;paint-order:stroke fill markers"
					d="m 49.741666,118.00417 h 2.910417 v 2.38125 h 11.1125 v -5.55625 h 6.085416 L 85.460416,99.218749 v -5.55625 -0.529167 H 64.558333 l 12.170833,-12.7 v -7.14375 c -0.670196,-1.37773 -1.368761,-2.732115 -3.175,-3.175 h -9.789583 c -7.471356,5.48558 -13.463113,12.635266 -20.108334,19.05 v 11.641668 h 30.427083 l -11.112499,11.37708 c -9.28375,-0.14604 -13.614635,1.10081 -13.229167,5.82084 z"
					id="path106464"
				/><path
					style="opacity:1;fill:#344324;fill-opacity:1;fill-rule:evenodd;stroke-width:3;stroke-linecap:round;stroke-linejoin:round;stroke-miterlimit:3;stroke-opacity:0.498674;paint-order:stroke fill markers"
					d="m 63.764583,114.82917 h 6.085419 v 5.55625 h -6.085419 z"
					id="path106519"
				/><path
					style="opacity:1;fill:#364426;fill-opacity:1;fill-rule:evenodd;stroke-width:3;stroke-linecap:round;stroke-linejoin:round;stroke-miterlimit:3;stroke-opacity:0.498674;paint-order:stroke fill markers"
					d="m 61.118749,85.460416 v 4.233333 h 4.497917 z"
					id="path107482"
				/><path
					style="opacity:1;fill:#364426;fill-opacity:1;fill-rule:evenodd;stroke-width:3;stroke-linecap:round;stroke-linejoin:round;stroke-miterlimit:3;stroke-opacity:0.498674;paint-order:stroke fill markers"
					d="m 58.208333,76.99375 v 4.233333 h 4.497917 z"
					id="path107484"
				/><path
					style="opacity:1;fill:#364426;fill-opacity:1;fill-rule:evenodd;stroke-width:3;stroke-linecap:round;stroke-linejoin:round;stroke-miterlimit:3;stroke-opacity:0.498674;paint-order:stroke fill markers"
					d="m 67.336458,73.81875 v 4.233333 h 4.497917 z"
					id="path107486"
				/><path
					style="opacity:1;fill:#fbfbfb;fill-opacity:1;fill-rule:evenodd;stroke-width:3;stroke-linecap:round;stroke-linejoin:round;stroke-miterlimit:3;stroke-opacity:0.498674;paint-order:stroke fill markers"
					d="m 55.033333,109.00833 v 4.49792 c -7.038572,-0.82726 -9.36361,2.65318 -10.583334,7.14375 -1.780052,-8.06592 3.304952,-10.71857 10.583334,-11.64167 z"
					id="path107492"
				/><path
					style="opacity:1;fill:#ffffff;fill-opacity:1;fill-rule:evenodd;stroke-width:3;stroke-linecap:round;stroke-linejoin:round;stroke-miterlimit:3;stroke-opacity:0.498674;paint-order:stroke fill markers"
					d="m 20.902083,87.312499 v -8.202083 l -3.175,3.175 -1.276108,4.7625 1.011525,0.584004 z"
					id="path110345"
				/><path
					style="opacity:1;fill:#617146;fill-opacity:1;fill-rule:evenodd;stroke-width:3;stroke-linecap:round;stroke-linejoin:round;stroke-miterlimit:3;stroke-opacity:0.498674;paint-order:stroke fill markers"
					d="m 12.7,89.958332 2.645833,-2.645833 h 5.55625 v 2.645833 z"
					id="path109872"
				/><path
					style="opacity:1;fill:#afa9ae;fill-opacity:1;fill-rule:evenodd;stroke-width:3;stroke-linecap:round;stroke-linejoin:round;stroke-miterlimit:3;stroke-opacity:0.498674;paint-order:stroke fill markers"
					d="m 20.902083,79.639583 v -2.116666 c -1.732163,1.304535 -3.963856,2.414085 -5.027083,5.027082 -0.497296,1.526134 -0.722039,3.104387 -0.529167,4.7625 H 17.4625 c -0.467052,-2.944678 1.447895,-5.494258 3.439583,-7.672916 z"
					id="path110343"
				/><path
					style="opacity:1;fill:#afa9ae;fill-opacity:1;fill-rule:evenodd;stroke-width:3;stroke-linecap:round;stroke-linejoin:round;stroke-miterlimit:3;stroke-opacity:0.498674;paint-order:stroke fill markers"
					d="m 44.449999,120.65 c 0.759338,-2.28374 0.154932,-5.13997 4.497918,-6.61458 2.513274,-1.02987 4.391049,-0.94096 6.085416,-0.52917 -6.793207,-0.36489 -8.740206,3.34576 -10.583334,7.14375 z"
					id="path112198"
				/><path
					style="opacity:1;fill:#c8b7a3;fill-opacity:1;fill-rule:evenodd;stroke-width:3;stroke-linecap:round;stroke-linejoin:round;stroke-miterlimit:3;stroke-opacity:0.498674;paint-order:stroke fill markers"
					d="M 122.2375,12.435417 125.14792,7.14375 H 112.7125 l 0,3.175 z"
					id="path115642"
				/><path
					style="opacity:1;fill:#e26753;fill-opacity:1;fill-rule:evenodd;stroke-width:3;stroke-linecap:round;stroke-linejoin:round;stroke-miterlimit:3;stroke-opacity:0.498674;paint-order:stroke fill markers"
					d="m 97.895832,12.435417 c -3.284651,2.827296 -6.157069,5.856161 -5.55625,10.583333 l 3.175,5.291666 c -4.046873,2.30861 -7.374508,5.526722 -8.202083,11.90625 l 1.852083,7.408333 c -5.422944,1.407821 -11.018078,1.30747 -15.875,7.672917 H 69.056249 V 49.477083 L 82.020832,25.135416 V 10.583333 Z"
					id="path121921"
				/><path
					style="opacity:1;fill:#be5546;fill-opacity:1;fill-rule:evenodd;stroke-width:3;stroke-linecap:round;stroke-linejoin:round;stroke-miterlimit:3;stroke-opacity:0.498674;paint-order:stroke fill markers"
					d="m 69.320833,50.8 c 4.814472,-3.097827 9.151726,-7.591062 14.816667,-8.202083 0,0 -2.363873,-6.056591 -1.322917,-8.73125 2.792151,-5.442979 5.350565,-6.135846 7.9375,-7.408333 -2.204861,-2.557639 -6.350653,-5.101994 -6.879167,-7.672918 0.141262,-2.416512 1.573029,-4.366185 2.910416,-6.349999 L 84.950246,9.2604166 H 59.531249 L 61.303622,15.875 78.052082,32.623461 72.710669,42.333334 C 71.580724,45.155556 69.252793,47.725222 69.320833,50.8 Z"
					id="path121297"
				/><path
					style="opacity:1;fill:#868178;fill-opacity:1;fill-rule:evenodd;stroke-width:3;stroke-linecap:round;stroke-linejoin:round;stroke-miterlimit:3;stroke-opacity:0.498674;paint-order:stroke fill markers"
					d="m 48.418749,10.31875 2.116667,2.116667 H 122.2375 l 1.22206,-2.116667 H 112.7125 V 7.1437499 h -3.43958 V 10.31875 h -7.40834 l 0,-3.175 h -3.174997 l -10e-7,3.175 h -8.466666 l 10e-7,-3.175 h -3.175 l -10e-7,3.175 h -8.202084 l 10e-7,-3.175 h -2.910416 l -10e-7,3.175 z"
					id="path112200"
				/><path
					style="opacity:1;fill:#ffffff;fill-opacity:1;fill-rule:evenodd;stroke-width:3;stroke-linecap:round;stroke-linejoin:round;stroke-miterlimit:3;stroke-opacity:0.498674;paint-order:stroke fill markers"
					d="m 48.418749,10.31875 3.96875,-3.1750001 h 6.614584 l -2.38125,3.1750001 z"
					id="path115162"
				/><path
					style="opacity:1;fill:#c8b7a3;fill-opacity:1;fill-rule:evenodd;stroke-width:3;stroke-linecap:round;stroke-linejoin:round;stroke-miterlimit:3;stroke-opacity:0.498674;paint-order:stroke fill markers"
					d="M 56.620833,10.31875 H 75.935416 V 7.4083332 7.1437499 H 59.002083 Z"
					id="path115164"
				/><path
					style="opacity:1;fill:#c8b7a3;fill-opacity:1;fill-rule:evenodd;stroke-width:3;stroke-linecap:round;stroke-linejoin:round;stroke-miterlimit:3;stroke-opacity:0.498674;paint-order:stroke fill markers"
					d="M 78.845832,10.31875 V 7.1437499 h 8.202084 V 10.31875 Z"
					id="path115634"
				/><path
					style="opacity:1;fill:#c8b7a3;fill-opacity:1;fill-rule:evenodd;stroke-width:3;stroke-linecap:round;stroke-linejoin:round;stroke-miterlimit:3;stroke-opacity:0.498674;paint-order:stroke fill markers"
					d="m 90.222916,10.31875 10e-7,-3.175 h 8.466666 l -10e-7,3.175 z"
					id="path115636"
				/><path
					style="opacity:1;fill:#c8b7a3;fill-opacity:1;fill-rule:evenodd;stroke-width:3;stroke-linecap:round;stroke-linejoin:round;stroke-miterlimit:3;stroke-opacity:0.498674;paint-order:stroke fill markers"
					d="m 101.86458,10.31875 0,-3.175 h 7.40834 l 0,3.175 z"
					id="path115638"
				/><path
					style="opacity:1;fill:#c8b7a3;fill-opacity:1;fill-rule:evenodd;stroke-width:3;stroke-linecap:round;stroke-linejoin:round;stroke-miterlimit:3;stroke-opacity:0.498674;paint-order:stroke fill markers"
					d="m 60.854167,12.435417 4.497916,0 9.524999,3.968749 10.054167,3.96875 10.583333,3.439584 10.318748,3.96875 11.37709,3.439583 c -0.315,0.834586 0.12317,2.258164 -2.11667,1.5875 L 113.24167,33.304596 63.499999,15.875 Z"
					id="path117269"
				/><path
					style="opacity:1;fill:#868178;fill-opacity:1;fill-rule:evenodd;stroke-width:3;stroke-linecap:round;stroke-linejoin:round;stroke-miterlimit:3;stroke-opacity:0.498674;paint-order:stroke fill markers"
					d="m 58.737499,12.435417 5.820834,5.027083 50.270837,17.4625 0.26458,-2.116667 -6.87917,-2.38125 0.52917,-1.852083 -2.91042,-0.779844 -0.79375,1.374815 -7.672915,-2.711638 1.058334,-1.5875 -2.910417,-1.058333 -1.058333,1.322916 -6.879167,-2.38125 0.79375,-1.322916 -3.439583,-1.058334 -1.322917,1.5875 -6.879166,-2.645833 1.058333,-1.5875 -2.910417,-1.322917 -1.322916,1.5875 -12.7,-5.556249 z"
					id="path116370"
				/><path
					style="opacity:1;fill:#cfaa68;fill-opacity:1;fill-rule:evenodd;stroke-width:3;stroke-linecap:round;stroke-linejoin:round;stroke-miterlimit:3;stroke-opacity:0.498674;paint-order:stroke fill markers"
					d="m 65.352083,55.297916 h 3.704166 v -4.7625 L 83.476041,36.115625 59.795833,12.435417 h -3.704167 l 3.513418,6.085416 17.124082,17.197917 -10.583334,11.906249 -2.116666,3.96875 z"
					id="path119169"
				/><path
					style="opacity:1;fill:#c8b7a3;fill-opacity:1;fill-rule:evenodd;stroke-width:3;stroke-linecap:round;stroke-linejoin:round;stroke-miterlimit:3;stroke-opacity:0.498674;paint-order:stroke fill markers"
					d="m 105.56875,61.118749 0.70895,-2.645833 -2.82562,-3.175 -2.38125,-2.116667 -5.027081,-4.7625 -7.672917,-7.408333 -7.408333,-7.408333 v 3.439586 l 3.704167,3.704166 6.879164,6.879164 5.820833,5.820834 7.672917,7.672919 z"
					id="path117626"
				/><path
					style="opacity:1;fill:#868178;fill-opacity:1;fill-rule:evenodd;stroke-width:3;stroke-linecap:round;stroke-linejoin:round;stroke-miterlimit:3;stroke-opacity:0.498674;paint-order:stroke fill markers"
					d="m 80.962499,37.041666 3.704167,3.175 1.5875,-1.5875 2.116666,2.38125 -1.5875,1.322917 4.7625,4.7625 1.852083,-1.322917 2.645834,2.645833 -1.5875,1.058334 4.497916,4.7625 2.116665,-1.058334 2.38125,2.116667 -1.5875,2.38125 3.70417,3.439583 v 2.910417 L 82.285416,40.745833 c -1.096358,-0.688096 -1.004442,-2.367275 -1.322917,-3.704167 z"
					id="path117271"
				/><path
					style="opacity:1;fill:#5f6f44;fill-opacity:1;fill-rule:evenodd;stroke-width:3;stroke-linecap:round;stroke-linejoin:round;stroke-miterlimit:3;stroke-opacity:0.498674;paint-order:stroke fill markers"
					d="m 65.352083,55.297916 v -5.027083 c 4.498501,-5.027074 9.578444,-10.044615 13.493749,-15.08125 L 56.091666,12.435417 h -5.55625 l 0.458272,0.79375 h 2.452145 l 22.224999,22.224999 -12.435416,14.2875 v 5.55625 z"
					id="path119113"
				/><path
					style="opacity:1;fill:#868178;fill-opacity:1;fill-rule:evenodd;stroke-width:3;stroke-linecap:round;stroke-linejoin:round;stroke-miterlimit:3;stroke-opacity:0.498674;paint-order:stroke fill markers"
					d="m 53.445833,13.229167 h -2.452145 l -0.458272,-0.793749 h 3.439583 z"
					id="path119772"
				/><path
					style="opacity:1;fill:#868178;fill-opacity:1;fill-rule:evenodd;stroke-width:3;stroke-linecap:round;stroke-linejoin:round;stroke-miterlimit:3;stroke-opacity:0.498674;paint-order:stroke fill markers"
					d="m 53.445833,13.229167 h 3.439583 l -1.058333,-1.058333 h -2.38125 z"
					id="path119843"
				/><path
					style="opacity:1;fill:#776f68;fill-opacity:1;fill-rule:evenodd;stroke-width:3;stroke-linecap:round;stroke-linejoin:round;stroke-miterlimit:3;stroke-opacity:0.498674;paint-order:stroke fill markers"
					d="m 116.94583,48.683333 v -6.35 l -1.85208,1.0693 v 6.8682 z"
					id="path124906"
				/><path
					style="opacity:1;fill:#4f5f36;fill-opacity:1;fill-rule:evenodd;stroke-width:3;stroke-linecap:round;stroke-linejoin:round;stroke-miterlimit:3;stroke-opacity:0.498674;paint-order:stroke fill markers"
					d="m 116.94583,47.360416 v -6.879167 l 3.175,-1.322916 -0.26458,6.614583 z"
					id="path124910"
				/><path
					style="opacity:1;fill:#59665c;fill-opacity:1;fill-rule:evenodd;stroke-width:3;stroke-linecap:round;stroke-linejoin:round;stroke-miterlimit:3;stroke-opacity:0.498674;paint-order:stroke fill markers"
					d="m 119.85625,57.943749 v -7.14375 l -2.38125,1.374815 v 5.768935 z"
					id="path126293"
				/><path
					style="opacity:1;fill:#8b7f71;fill-opacity:1;fill-rule:evenodd;stroke-width:3;stroke-linecap:round;stroke-linejoin:round;stroke-miterlimit:3;stroke-opacity:0.498674;paint-order:stroke fill markers"
					d="m 117.21042,80.9625 v -6.35 l 2.64583,-1.639399 v 6.666481 z"
					id="path126297"
				/><path
					style="opacity:1;fill:#c6b5a2;fill-opacity:1;fill-rule:evenodd;stroke-width:3;stroke-linecap:round;stroke-linejoin:round;stroke-miterlimit:3;stroke-opacity:0.498674;paint-order:stroke fill markers"
					d="m 117.21042,92.074999 v -6.085417 l 2.64583,-1.527572 v 6.554656 z"
					id="path126299"
				/><path
					style="opacity:1;fill:#c6b5a2;fill-opacity:1;fill-rule:evenodd;stroke-width:3;stroke-linecap:round;stroke-linejoin:round;stroke-miterlimit:3;stroke-opacity:0.498674;paint-order:stroke fill markers"
					d="m 116.94583,102.92292 h 3.175 v -7.143755 h -3.175 z"
					id="path126303"
				/><path
					style="opacity:1;fill:#776f68;fill-opacity:1;fill-rule:evenodd;stroke-width:3;stroke-linecap:round;stroke-linejoin:round;stroke-miterlimit:3;stroke-opacity:0.498674;paint-order:stroke fill markers"
					d="m 117.475,53.181249 -2.29136,1.322917 v 6.614583 l 2.29136,-3.175 z"
					id="path126305"
				/><path
					style="opacity:1;fill:#776f68;fill-opacity:1;fill-rule:evenodd;stroke-width:3;stroke-linecap:round;stroke-linejoin:round;stroke-miterlimit:3;stroke-opacity:0.498674;paint-order:stroke fill markers"
					d="m 115.35833,83.872916 1.85209,-1.852084 v -5.55625 h -2.38125 v 7.408334 z"
					id="path127413"
				/><path
					style="opacity:1;fill:#776f68;fill-opacity:1;fill-rule:evenodd;stroke-width:3;stroke-linecap:round;stroke-linejoin:round;stroke-miterlimit:3;stroke-opacity:0.498674;paint-order:stroke fill markers"
					d="m 117.21042,92.074999 -2.11667,3.175 v -6.879167 l 2.11667,-1.5875 z"
					id="path127415"
				/><path
					style="opacity:1;fill:#776f68;fill-opacity:1;fill-rule:evenodd;stroke-width:3;stroke-linecap:round;stroke-linejoin:round;stroke-miterlimit:3;stroke-opacity:0.498674;paint-order:stroke fill markers"
					d="m 116.94583,102.92292 -1.5875,2.91041 v -6.614581 h 1.5875 z"
					id="path127417"
				/><path
					style="opacity:1;fill:#89867c;fill-opacity:1;fill-rule:evenodd;stroke-width:3.19374;stroke-linecap:round;stroke-linejoin:round;stroke-miterlimit:3;stroke-opacity:0.498674;paint-order:stroke fill markers"
					d="M 115.09375,115.62292 V 111.125 h 2.11667 v 4.49792 z"
					id="path127419"
				/><path
					style="opacity:1;fill:#c2b09c;fill-opacity:1;fill-rule:evenodd;stroke-width:3;stroke-linecap:round;stroke-linejoin:round;stroke-miterlimit:3;stroke-opacity:0.498674;paint-order:stroke fill markers"
					d="m 116.68125,111.125 v -2.64583 l 3.2079,-1.85209 v 11.90625 c -0.87889,1.88933 -2.75819,2.42453 -4.50113,2.63799 -1.74595,0.21381 -3.37273,-0.49549 -4.79219,-2.63799 l -2.91041,-2.91041 h 8.99583 z"
					id="path127421"
				/><path
					style="opacity:1;fill:#465631;fill-opacity:1;fill-rule:evenodd;stroke-width:3;stroke-linecap:round;stroke-linejoin:round;stroke-miterlimit:3;stroke-opacity:0.498674;paint-order:stroke fill markers"
					d="m 117.475,35.983333 2.38125,-1.680329 v -4.405088 l -2.64583,1.322917 v 4.7625 z"
					id="path136563"
				/><path
					style="opacity:1;fill:#59665c;fill-opacity:1;fill-rule:evenodd;stroke-width:3;stroke-linecap:round;stroke-linejoin:round;stroke-miterlimit:3;stroke-opacity:0.498674;paint-order:stroke fill markers"
					d="m 117.21042,70.008242 v -6.35 l 2.64583,-1.639399 v 6.666481 z"
					id="path137319"
				/><path
					style="opacity:1;fill:#858179;fill-opacity:1;fill-rule:evenodd;stroke-width:3;stroke-linecap:round;stroke-linejoin:round;stroke-miterlimit:3;stroke-opacity:0.498674;paint-order:stroke fill markers"
					d="m 115.35833,72.918658 1.85209,-1.852084 v -5.55625 h -2.38125 v 7.408334 z"
					id="path137321"
				/></g
			></g
		><metadata id="metadata145514">
			<!-- svelte-ignore illegal-attribute-character -->
			<rdf:RDF
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
