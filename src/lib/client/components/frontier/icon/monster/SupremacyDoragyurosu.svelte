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
			><filter
				style="color-interpolation-filters:sRGB;"
				id="filter43840"
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
					id="feComposite43826"
				/><feColorMatrix
					in="composite1"
					values="1"
					type="saturate"
					result="colormatrix1"
					id="feColorMatrix43828"
				/><feFlood
					flood-opacity="1"
					flood-color="rgb(0,0,0)"
					result="flood1"
					id="feFlood43830"
				/><feBlend
					in="flood1"
					in2="colormatrix1"
					mode="multiply"
					result="blend1"
					id="feBlend43832"
				/><feBlend
					in2="blend1"
					mode="screen"
					result="blend2"
					id="feBlend43834"
				/><feColorMatrix
					in="blend2"
					values="1"
					type="saturate"
					result="colormatrix2"
					id="feColorMatrix43836"
				/><feComposite
					in="colormatrix2"
					in2="SourceGraphic"
					operator="in"
					k2="1"
					result="composite2"
					id="feComposite43838"
				/></filter
			></defs
		><metadata id="metadata145514">
			<!-- svelte-ignore illegal-attribute-character -->
			<!-- 	data-license="https://creativecommons.org/licenses/by-nc-sa/4.0/" data-author="Doriel Rivalet"--></metadata
		><g
			id="g43461"
			style="filter:url(#filter43840)"
			transform="translate(1.0583333,1.5875)"
			><path
				style="opacity:1;fill:#433c3c;fill-opacity:1;fill-rule:evenodd;stroke-width:3;stroke-linecap:round;stroke-linejoin:round;stroke-miterlimit:3;stroke-opacity:0.498674;paint-order:stroke fill markers"
				d="m 31.485416,42.597916 v 2.645833 l -3.439583,1.985844 V 64.029167 H 25.4 V 46.302083 c 0.491941,-3.590405 3.704167,-2.822223 5.55625,-4.233334 z"
				id="path43181"
			/><path
				style="opacity:1;fill:#770011;fill-opacity:1;fill-rule:evenodd;stroke-width:3;stroke-linecap:round;stroke-linejoin:round;stroke-miterlimit:3;stroke-opacity:0.498674;paint-order:stroke fill markers"
				d="m 114.82917,34.925 v 4.233333 l 2.38125,-1.852083 v -6.085417 l -3.175,1.058333 z"
				id="path43183"
			/><path
				style="opacity:1;fill:#f9e2af;fill-opacity:1;fill-rule:evenodd;stroke-width:3;stroke-linecap:round;stroke-linejoin:round;stroke-miterlimit:3;stroke-opacity:0.498674;paint-order:stroke fill markers"
				d="m 79.374999,55.297916 c 8.387925,0.04454 16.166549,2.333363 23.547921,6.085417 l 1.05833,-5.291667 c -0.94765,-8.583118 3.46385,-15.409807 9.525,-21.695833 L 113.24167,30.1625 c -1.73083,-5.606685 2.25925,-11.807691 6.08541,-17.991667 l -10.84791,-1.5875 -9.260421,2.645834 -7.9375,21.166666 -14.552083,15.875 z"
				id="path43185"
			/><path
				style="opacity:1;fill:#c1a67f;fill-opacity:1;fill-rule:evenodd;stroke-width:3;stroke-linecap:round;stroke-linejoin:round;stroke-miterlimit:3;stroke-opacity:0.498674;paint-order:stroke fill markers"
				d="m 73.289582,55.297916 h 6.085417 c 4.013508,-3.614613 8.433651,-3.642591 12.7,-5.027083 l 1.5875,-4.233334 C 93.8638,38.762612 97.870853,33.992968 104.51042,30.95625 l -2.38125,-4.497917 c -2.787367,-4.617064 0.67963,-9.426531 5.82083,-14.2875 L 94.720832,11.641667 87.312499,18.520833 84.666666,39.6875 70.114582,52.916666 Z"
				id="path43187"
			/><path
				style="opacity:1;fill:#2a391d;fill-opacity:1;fill-rule:evenodd;stroke-width:3;stroke-linecap:round;stroke-linejoin:round;stroke-miterlimit:3;stroke-opacity:0.498674;paint-order:stroke fill markers"
				d="m 33.072916,30.427083 4.839338,-1.296696 8.389829,-11.932471 v -6.349999 l -2.645834,-0.79375 -11.641666,13.229166 z"
				id="path43189"
			/><path
				style="opacity:1;fill:#780011;fill-opacity:1;fill-rule:evenodd;stroke-width:3;stroke-linecap:round;stroke-linejoin:round;stroke-miterlimit:3;stroke-opacity:0.498674;paint-order:stroke fill markers"
				d="M 42.862499,24.870833 38.629166,29.897916 36.5125,30.95625 35.454166,28.310416 38.364583,24.870833 Z"
				id="path43191"
			/><path
				style="opacity:1;fill:#a30013;fill-opacity:1;fill-rule:evenodd;stroke-width:3;stroke-linecap:round;stroke-linejoin:round;stroke-miterlimit:3;stroke-opacity:0.498674;paint-order:stroke fill markers"
				d="m 42.8625,12.964583 -0.793751,3.175 H 34.13125 l 1.322916,-2.910416 z"
				id="path43193"
			/><path
				style="opacity:1;fill:#d20f39;fill-opacity:1;fill-rule:evenodd;stroke-width:3;stroke-linecap:round;stroke-linejoin:round;stroke-miterlimit:3;stroke-opacity:0.498674;paint-order:stroke fill markers"
				d="m 37.835416,10.054167 h 5.820833 l -0.850738,3.175 h -7.351345 z"
				id="path43195"
			/><path
				style="opacity:1;fill:#a30013;fill-opacity:1;fill-rule:evenodd;stroke-width:3;stroke-linecap:round;stroke-linejoin:round;stroke-miterlimit:3;stroke-opacity:0.498674;paint-order:stroke fill markers"
				d="m 42.068749,16.139583 -7.937499,9.525 -2.910417,-6.879167 3.175,-2.645833 z"
				id="path43197"
			/><path
				style="opacity:1;fill:#1e1e2e;fill-opacity:1;fill-rule:evenodd;stroke-width:3;stroke-linecap:round;stroke-linejoin:round;stroke-miterlimit:3;stroke-opacity:0.498674;paint-order:stroke fill markers"
				d="m 41.274999,48.418749 -2.381249,-4.762499 10.054166,-10e-7 C 41.548376,35.468587 39.894078,32.130594 37.041666,27.78125 l -0.529166,3.175 c -1.437827,-3.460121 -2.87853,-6.919892 -2.645834,-10.583334 -0.02932,-6.896728 3.57304,-9.086434 5.820834,-12.6999993 -1.748151,2.646e-4 -3.237481,-0.089537 -6.35,3.1750003 L 32.808333,7.9374999 c -4.088236,1.3945957 -4.001186,3.4787261 -5.55625,5.2916671 l 8.466667,30.427082 4.762499,6.35 z"
				id="path43199"
			/><path
				style="opacity:1;fill:#780011;fill-opacity:1;fill-rule:evenodd;stroke-width:3;stroke-linecap:round;stroke-linejoin:round;stroke-miterlimit:3;stroke-opacity:0.498674;paint-order:stroke fill markers"
				d="M 25.664583,22.225 22.225,18.785416 h -1.322917 l 0.264583,2.116667 3.96875,5.55625 1.852084,-1.5875 z"
				id="path43201"
			/><path
				style="opacity:1;fill:#1e1e2e;fill-opacity:1;fill-rule:evenodd;stroke-width:3;stroke-linecap:round;stroke-linejoin:round;stroke-miterlimit:3;stroke-opacity:0.498674;paint-order:stroke fill markers"
				d="M 25.664583,41.274999 V 22.489583 l 1.5875,-9.260416 3.704167,-3.175 0.264583,3.704166 c 1.996146,-3.040342 4.579948,-4.4020223 7.14375,-5.8208331 -2.05406,3.4580951 -4.956876,6.2527541 -5.55625,10.8479161 -0.208891,7.656353 1.901326,10.68878 3.704167,14.2875 L 37.570833,31.75 l 8.202083,10.847916 -6.614583,1e-6 z"
				id="path43203"
			/><path
				style="opacity:1;fill:#a40013;fill-opacity:1;fill-rule:evenodd;stroke-width:3.21846;stroke-linecap:round;stroke-linejoin:round;stroke-miterlimit:3;stroke-opacity:0.498674;paint-order:stroke fill markers"
				d="M 25.649607,61.647916 V 40.481249 l 2.131643,-1.852083 v -13.49375 l -5.176847,-4.497916 -1.827124,2.116666 -5.176847,-0.79375 -3.429599,-0.793749 -0.529166,17.197916 v 1.5875 l 6.394929,15.610416 4.567807,5.291667 2.740683,1.5875 z"
				id="path43205"
			/><path
				style="opacity:1;fill:#581618;fill-opacity:1;fill-rule:evenodd;stroke-width:3;stroke-linecap:round;stroke-linejoin:round;stroke-miterlimit:3;stroke-opacity:0.498674;paint-order:stroke fill markers"
				d="m 17.991666,64.029166 h 11.1125 v 3.175 H 20.6375 c -1.449282,-0.807681 -2.132894,-1.953639 -2.645834,-3.175 z"
				id="path43207"
			/><path
				style="opacity:1;fill:#ebeaea;fill-opacity:1;fill-rule:evenodd;stroke-width:3;stroke-linecap:round;stroke-linejoin:round;stroke-miterlimit:3;stroke-opacity:0.498674;paint-order:stroke fill markers"
				d="m 25.929166,64.293749 c 7.529965,-0.111296 7.158858,-1.956195 8.73125,-3.174999 h -8.995833 v 3.174999 z"
				id="path43209"
			/><path
				style="opacity:1;fill:#a40013;fill-opacity:1;fill-rule:evenodd;stroke-width:3;stroke-linecap:round;stroke-linejoin:round;stroke-miterlimit:3;stroke-opacity:0.498674;paint-order:stroke fill markers"
				d="m 31.485416,43.920833 5.291667,-3.96875 v -2.116667 l -5.291667,3.704167 V 37.041666 L 25.664583,41.274999 25.135417,47.625 Z"
				id="path43211"
			/><path
				style="opacity:1;fill:#581618;fill-opacity:1;fill-rule:evenodd;stroke-width:3;stroke-linecap:round;stroke-linejoin:round;stroke-miterlimit:3;stroke-opacity:0.498674;paint-order:stroke fill markers"
				d="m 14.2875,25.4 c -1.533807,1.850781 -0.08584,12.190631 0.264583,14.2875 l 0.264584,-13.229167 z"
				id="path43213"
			/><path
				style="opacity:1;fill:#17110c;fill-opacity:1;fill-rule:evenodd;stroke-width:2.93263;stroke-linecap:round;stroke-linejoin:round;stroke-miterlimit:3;stroke-opacity:0.498674;paint-order:stroke fill markers"
				d="m 25.664583,54.768749 c -3.566373,0.826013 -5.379924,-0.419925 -5.692948,-3.439583 v -17.4625 l 5.692948,6.614583 z"
				id="path43215"
			/><path
				style="opacity:1;fill:#d20f39;fill-opacity:1;fill-rule:evenodd;stroke-width:3;stroke-linecap:round;stroke-linejoin:round;stroke-miterlimit:3;stroke-opacity:0.498674;paint-order:stroke fill markers"
				d="m 17.727083,33.866666 -5.55625,-12.7 h 3.100693 l 4.30764,1.322917 1.322917,-3.704167 6.879167,6.35 v 16.404167 c -5.38103,0.121368 -6.702778,-5.115278 -10.054167,-7.672917 z"
				id="path43217"
			/><path
				style="opacity:1;fill:#433c3c;fill-opacity:1;fill-rule:evenodd;stroke-width:3;stroke-linecap:round;stroke-linejoin:round;stroke-miterlimit:3;stroke-opacity:0.498674;paint-order:stroke fill markers"
				d="M 40.745833,61.118749 V 50.535416 c -2.880753,-2.4099 -1.769911,-7.083284 -9.260416,-6.879166 l -1e-6,1.587499 3.175,2.116667 1.058334,2.38125 1.058333,4.233333 1.322917,1.5875 v 3.96875 z"
				id="path43219"
			/><path
				style="opacity:1;fill:#ebeaea;fill-opacity:1;fill-rule:evenodd;stroke-width:3;stroke-linecap:round;stroke-linejoin:round;stroke-miterlimit:3;stroke-opacity:0.498674;paint-order:stroke fill markers"
				d="m 31.220833,47.624999 h 6.614583 v 2.38125 c -4.433948,-0.28514 -5.890743,-1.249576 -6.614583,-2.38125 z"
				id="path43221"
			/><path
				style="opacity:1;fill:#ebeaea;fill-opacity:1;fill-rule:evenodd;stroke-width:3;stroke-linecap:round;stroke-linejoin:round;stroke-miterlimit:3;stroke-opacity:0.498674;paint-order:stroke fill markers"
				d="m 41.010416,56.091666 v -2.116667 h -5.820833 c 1.237698,1.77435 3.187941,2.464746 5.820833,2.116667 z"
				id="path43223"
			/><path
				style="opacity:1;fill:#ebeaea;fill-opacity:1;fill-rule:evenodd;stroke-width:3;stroke-linecap:round;stroke-linejoin:round;stroke-miterlimit:3;stroke-opacity:0.498674;paint-order:stroke fill markers"
				d="M 41.274999,61.118749 V 59.002083 H 35.71875 c 0.634615,1.655546 2.291798,2.513182 5.556249,2.116666 z"
				id="path43225"
			/><path
				style="opacity:1;fill:#a40013;fill-opacity:1;fill-rule:evenodd;stroke-width:3;stroke-linecap:round;stroke-linejoin:round;stroke-miterlimit:3;stroke-opacity:0.498674;paint-order:stroke fill markers"
				d="m 40.745833,61.118749 5.55625,5.027084 V 47.625 c -3.183557,-0.828595 -6.353185,-2.318262 -9.525,-3.704167 v -3.96875 c -1.763889,1.322917 -5.476106,0.09077 -5.291667,3.96875 h 1e-6 v 0 L 34.925,46.0375 l 3.439583,5.556249 1.322917,6.614584 z"
				id="path43227"
			/><path
				style="opacity:1;fill:#17110c;fill-opacity:1;fill-rule:evenodd;stroke-width:2.79284;stroke-linecap:round;stroke-linejoin:round;stroke-miterlimit:3;stroke-opacity:0.498674;paint-order:stroke fill markers"
				d="m 25.435277,52.916666 c -1.573414,0.214337 -2.742698,-0.23912 -3.210276,-1.852083 v -6.879167 h 3.439582 v 8.73125 z"
				id="path43229"
			/><circle
				style="opacity:1;fill:#ea1a1e;fill-opacity:1;fill-rule:evenodd;stroke-width:3;stroke-linecap:round;stroke-linejoin:round;stroke-miterlimit:3;stroke-opacity:0.498674;paint-order:stroke fill markers"
				id="circle43231"
				cx="23.8125"
				cy="48.418751"
				r="1.5875"
			/><path
				style="opacity:1;fill:#d20f39;fill-opacity:1;fill-rule:evenodd;stroke-width:3;stroke-linecap:round;stroke-linejoin:round;stroke-miterlimit:3;stroke-opacity:0.498674;paint-order:stroke fill markers"
				d="m 10.054167,40.481249 2.116666,-1.058333 V 21.166666 L 6.0854166,8.7312499 V 22.489583 l -1.8520833,1.852083 z"
				id="path43233"
			/><path
				style="opacity:1;fill:#581618;fill-opacity:1;fill-rule:evenodd;stroke-width:3;stroke-linecap:round;stroke-linejoin:round;stroke-miterlimit:3;stroke-opacity:0.498674;paint-order:stroke fill markers"
				d="m 23.8125,35.983333 v -8.73125 c -3.576863,-3.107952 -5.449016,-6.688745 -7.14375,-10.31875 h -1.5875 c -0.193948,8.767852 3.328212,14.641393 8.73125,19.05 z"
				id="path43235"
			/><path
				style="opacity:1;fill:#780011;fill-opacity:1;fill-rule:evenodd;stroke-width:3;stroke-linecap:round;stroke-linejoin:round;stroke-miterlimit:3;stroke-opacity:0.498674;paint-order:stroke fill markers"
				d="m 23.8125,35.983333 v -2.38125 C 18.981893,29.180312 16.42275,23.911634 15.610416,17.991666 H 15.08125 c 0.0419,6.98906 2.391523,13.180185 8.73125,17.991667 z"
				id="path43237"
			/><path
				style="opacity:1;fill:#d20f39;fill-opacity:1;fill-rule:evenodd;stroke-width:3;stroke-linecap:round;stroke-linejoin:round;stroke-miterlimit:3;stroke-opacity:0.498674;paint-order:stroke fill markers"
				d="M 4.2333333,24.341666 3.6223043,23.283333 V 7.9374999 H 6.0854166 V 22.489583 Z"
				id="path43239"
			/><path
				style="opacity:1;fill:#581618;fill-opacity:1;fill-rule:evenodd;stroke-width:3;stroke-linecap:round;stroke-linejoin:round;stroke-miterlimit:3;stroke-opacity:0.498674;paint-order:stroke fill markers"
				d="m 25.664583,22.489583 1.5875,-9.260416 -1.322917,-1.322917 V 8.4666667 l -2.645833,-1.5875 v 4.4979163 l -1.058333,1.5875 h -1.322917 v 5.820833 z"
				id="path43241"
			/><path
				style="opacity:1;fill:#d20f39;fill-opacity:1;fill-rule:evenodd;stroke-width:3;stroke-linecap:round;stroke-linejoin:round;stroke-miterlimit:3;stroke-opacity:0.498674;paint-order:stroke fill markers"
				d="m 46.302083,10.847917 5.55625,5.556249 V 19.05 l -6.085417,-5.820833 z"
				id="path43243"
			/><path
				style="opacity:1;fill:#d20f39;fill-opacity:1;fill-rule:evenodd;stroke-width:3;stroke-linecap:round;stroke-linejoin:round;stroke-miterlimit:3;stroke-opacity:0.498674;paint-order:stroke fill markers"
				d="m 56.091666,24.077083 h 5.027083 v 5.55625 l -5.55625,-5.55625 z"
				id="path43245"
			/><path
				style="opacity:1;fill:#d20f39;fill-opacity:1;fill-rule:evenodd;stroke-width:3;stroke-linecap:round;stroke-linejoin:round;stroke-miterlimit:3;stroke-opacity:0.498674;paint-order:stroke fill markers"
				d="m 64.029166,32.54375 h 5.027083 v 5.027083 z"
				id="path43247"
			/><path
				style="opacity:1;fill:#780011;fill-opacity:1;fill-rule:evenodd;stroke-width:3;stroke-linecap:round;stroke-linejoin:round;stroke-miterlimit:3;stroke-opacity:0.498674;paint-order:stroke fill markers"
				d="m 75.406249,66.674999 h 4.233333 L 74.75135,58.208333 h -4.372184 z"
				id="path43249"
			/><path
				style="opacity:1;fill:#d20f39;fill-opacity:1;fill-rule:evenodd;stroke-width:3;stroke-linecap:round;stroke-linejoin:round;stroke-miterlimit:3;stroke-opacity:0.498674;paint-order:stroke fill markers"
				d="m 87.841666,68.791666 1.322916,-1.322917 h 5.291667 v 5.291667 l -0.763786,1.322916 z"
				id="path43251"
			/><path
				style="opacity:1;fill:#d20f39;fill-opacity:1;fill-rule:evenodd;stroke-width:3;stroke-linecap:round;stroke-linejoin:round;stroke-miterlimit:3;stroke-opacity:0.498674;paint-order:stroke fill markers"
				d="m 94.985415,75.935416 2.645834,-2.645834 h 6.085421 c 2.31993,0.361726 4.02404,1.654823 5.55625,3.207904 v 10.55043 c -0.73429,0.920498 -1.59353,1.727127 -2.91042,2.116666 v -8.202083 c -0.89123,-1.702487 -1.50235,-3.414541 -5.02708,-5.027083 z"
				id="path43253"
			/><path
				style="opacity:1;fill:#d20f39;fill-opacity:1;fill-rule:evenodd;stroke-width:3;stroke-linecap:round;stroke-linejoin:round;stroke-miterlimit:3;stroke-opacity:0.498674;paint-order:stroke fill markers"
				d="m 106.09792,104.24583 2.64583,-1.52757 v -7.732845 l -2.64583,-1.852083 z"
				id="path43255"
			/><path
				style="opacity:1;fill:#d20f39;fill-opacity:1;fill-rule:evenodd;stroke-width:3;stroke-linecap:round;stroke-linejoin:round;stroke-miterlimit:3;stroke-opacity:0.498674;paint-order:stroke fill markers"
				d="m 95.514582,116.94583 8.202088,-7.67291 v 3.70416 l -5.027088,5.02709 c -1.085731,-0.0917 -2.181297,-0.0896 -3.175,-1.05834 z"
				id="path43257"
			/><path
				style="opacity:1;fill:#d20f39;fill-opacity:1;fill-rule:evenodd;stroke-width:3;stroke-linecap:round;stroke-linejoin:round;stroke-miterlimit:3;stroke-opacity:0.498674;paint-order:stroke fill markers"
				d="m 75.141666,118.00417 h 11.90625 v 3.43958 H 76.464582 c -1.17798,-1.15533 -1.328986,-2.2984 -1.322916,-3.43958 z"
				id="path43259"
			/><path
				style="opacity:1;fill:#a30013;fill-opacity:1;fill-rule:evenodd;stroke-width:3;stroke-linecap:round;stroke-linejoin:round;stroke-miterlimit:3;stroke-opacity:0.498674;paint-order:stroke fill markers"
				d="m 45.772916,13.229167 -0.79375,3.439583 6.614583,6.35 0.264584,-3.96875 z"
				id="path43261"
			/><path
				style="opacity:1;fill:#a30013;fill-opacity:1;fill-rule:evenodd;stroke-width:3;stroke-linecap:round;stroke-linejoin:round;stroke-miterlimit:3;stroke-opacity:0.498674;paint-order:stroke fill markers"
				d="m 55.562499,24.077083 -1.322916,1.5875 5.55625,5.55625 1.322916,-1.5875 z"
				id="path43263"
			/><path
				style="opacity:1;fill:#a30013;fill-opacity:1;fill-rule:evenodd;stroke-width:3;stroke-linecap:round;stroke-linejoin:round;stroke-miterlimit:3;stroke-opacity:0.498674;paint-order:stroke fill markers"
				d="m 64.029166,32.54375 5.027083,5.027083 -1.5875,1.587497 -5.556247,-5.556247 z"
				id="path43265"
			/><path
				style="opacity:1;fill:#a40013;fill-opacity:1;fill-rule:evenodd;stroke-width:3;stroke-linecap:round;stroke-linejoin:round;stroke-miterlimit:3;stroke-opacity:0.498674;paint-order:stroke fill markers"
				d="m 70.379166,58.208333 h -2.910417 l 5.55625,8.466666 h 2.38125 z"
				id="path43267"
			/><path
				style="opacity:1;fill:#a30013;fill-opacity:1;fill-rule:evenodd;stroke-width:3;stroke-linecap:round;stroke-linejoin:round;stroke-miterlimit:3;stroke-opacity:0.498674;paint-order:stroke fill markers"
				d="m 87.841666,68.791666 5.820833,5.291666 -1.852083,1.852084 -5.820834,-5.820834 z"
				id="path43269"
			/><path
				style="opacity:1;fill:#780011;fill-opacity:1;fill-rule:evenodd;stroke-width:3;stroke-linecap:round;stroke-linejoin:round;stroke-miterlimit:3;stroke-opacity:0.498674;paint-order:stroke fill markers"
				d="m 94.456249,84.137499 v 6.085417 h 5.556251 v -7.9375 l -5.556251,1.5875 z"
				id="path43271"
			/><path
				style="opacity:1;fill:#a30013;fill-opacity:1;fill-rule:evenodd;stroke-width:3;stroke-linecap:round;stroke-linejoin:round;stroke-miterlimit:3;stroke-opacity:0.498674;paint-order:stroke fill markers"
				d="m 94.456249,78.052082 v 6.085417 c 2.743766,-0.444129 4.30928,0.630913 5.556251,2.116667 v 3.96875 l 2.91042,-0.264584 v -12.7 z"
				id="path43273"
			/><path
				style="opacity:1;fill:#a30013;fill-opacity:1;fill-rule:evenodd;stroke-width:3;stroke-linecap:round;stroke-linejoin:round;stroke-miterlimit:3;stroke-opacity:0.498674;paint-order:stroke fill markers"
				d="m 94.985415,75.935416 -0.567158,2.116666 h 5.858823 c 1.07177,0.414914 2.04921,0.930432 2.64584,1.852084 v 10.054166 l 3.43958,-0.79375 V 77.522916 c -1.08537,-1.352865 -2.52848,-2.114692 -4.23333,-2.444115 z"
				id="path43275"
			/><path
				style="opacity:1;fill:#a30013;fill-opacity:1;fill-rule:evenodd;stroke-width:3;stroke-linecap:round;stroke-linejoin:round;stroke-miterlimit:3;stroke-opacity:0.498674;paint-order:stroke fill markers"
				d="m 106.09792,93.133332 h -2.91042 v 10.847918 0.26458 h 2.91042 z"
				id="path43277"
			/><path
				style="opacity:1;fill:#a30013;fill-opacity:1;fill-rule:evenodd;stroke-width:3;stroke-linecap:round;stroke-linejoin:round;stroke-miterlimit:3;stroke-opacity:0.498674;paint-order:stroke fill markers"
				d="m 95.514582,116.94583 -2.116667,-2.11666 7.672915,-8.20209 2.64584,2.64584 z"
				id="path43279"
			/><path
				style="opacity:1;fill:#a30013;fill-opacity:1;fill-rule:evenodd;stroke-width:3;stroke-linecap:round;stroke-linejoin:round;stroke-miterlimit:3;stroke-opacity:0.498674;paint-order:stroke fill markers"
				d="m 75.141666,118.00417 v -2.91042 h 11.90625 v 2.91042 z"
				id="path43281"
			/><path
				style="opacity:1;fill:#a30013;fill-opacity:1;fill-rule:evenodd;stroke-width:3;stroke-linecap:round;stroke-linejoin:round;stroke-miterlimit:3;stroke-opacity:0.498674;paint-order:stroke fill markers"
				d="m 44.979166,16.66875 6.614583,6.35 -3.175,3.704166 -2.38125,-1.852083 h -7.672916 z"
				id="path43283"
			/><path
				style="opacity:1;fill:#780011;fill-opacity:1;fill-rule:evenodd;stroke-width:3;stroke-linecap:round;stroke-linejoin:round;stroke-miterlimit:3;stroke-opacity:0.498674;paint-order:stroke fill markers"
				d="m 50.270833,28.839583 5.291666,6.35 -3.704166,3.175 C 49.32197,37.94776 47.657685,35.369381 45.772916,33.3375 Z"
				id="path43285"
			/><path
				style="opacity:1;fill:#a30013;fill-opacity:1;fill-rule:evenodd;stroke-width:3;stroke-linecap:round;stroke-linejoin:round;stroke-miterlimit:3;stroke-opacity:0.498674;paint-order:stroke fill markers"
				d="m 54.239583,25.664583 5.55625,5.55625 -4.233334,3.96875 -5.291666,-6.35 z"
				id="path43287"
			/><path
				style="opacity:1;fill:#780011;fill-opacity:1;fill-rule:evenodd;stroke-width:3;stroke-linecap:round;stroke-linejoin:round;stroke-miterlimit:3;stroke-opacity:0.498674;paint-order:stroke fill markers"
				d="m 59.266666,46.831249 c -2.364347,0.497708 -4.661898,0.63921 -6.614583,-1.058333 -1.46194,-3.33423 2.766649,-5.419958 5.027083,-7.9375 l 4.7625,1.852084 z"
				id="path43289"
			/><path
				style="opacity:1;fill:#a30013;fill-opacity:1;fill-rule:evenodd;stroke-width:3;stroke-linecap:round;stroke-linejoin:round;stroke-miterlimit:3;stroke-opacity:0.498674;paint-order:stroke fill markers"
				d="m 61.912499,33.602083 5.55625,5.55625 c -2.709546,2.735144 -5.314263,6.230346 -8.202083,7.672916 -0.458205,-3.707139 -0.200206,-6.788381 -1.5875,-8.995833 z"
				id="path43291"
			/><path
				style="opacity:1;fill:#a40013;fill-opacity:1;fill-rule:evenodd;stroke-width:3;stroke-linecap:round;stroke-linejoin:round;stroke-miterlimit:3;stroke-opacity:0.498674;paint-order:stroke fill markers"
				d="m 59.266666,55.033333 v -4.7625 h 0.529167 v 4.7625 z"
				id="path43293"
			/><path
				style="opacity:1;fill:#a40013;fill-opacity:1;fill-rule:evenodd;stroke-width:3;stroke-linecap:round;stroke-linejoin:round;stroke-miterlimit:3;stroke-opacity:0.498674;paint-order:stroke fill markers"
				d="M 73.024999,66.674999 H 55.033333 l 2.910416,-8.466666 h 9.525 z"
				id="path43295"
			/><path
				style="opacity:1;fill:#a30013;fill-opacity:1;fill-rule:evenodd;stroke-width:3;stroke-linecap:round;stroke-linejoin:round;stroke-miterlimit:3;stroke-opacity:0.498674;paint-order:stroke fill markers"
				d="m 85.989582,70.114582 h -5.027083 v 13.758334 h 10.847917 v -7.9375 z"
				id="path43297"
			/><path
				style="opacity:1;fill:#a30013;fill-opacity:1;fill-rule:evenodd;stroke-width:3;stroke-linecap:round;stroke-linejoin:round;stroke-miterlimit:3;stroke-opacity:0.498674;paint-order:stroke fill markers"
				d="m 103.1875,93.133332 h -3.175 v 7.143748 l 3.175,3.96875 z"
				id="path43299"
			/><path
				style="opacity:1;fill:#a30013;fill-opacity:1;fill-rule:evenodd;stroke-width:3;stroke-linecap:round;stroke-linejoin:round;stroke-miterlimit:3;stroke-opacity:0.498674;paint-order:stroke fill markers"
				d="m 93.397915,114.82917 -3.439583,-3.43959 7.9375,-7.9375 3.174998,3.175 z"
				id="path43301"
			/><path
				style="opacity:1;fill:#a30013;fill-opacity:1;fill-rule:evenodd;stroke-width:3;stroke-linecap:round;stroke-linejoin:round;stroke-miterlimit:3;stroke-opacity:0.498674;paint-order:stroke fill markers"
				d="m 75.141666,115.09375 2.38125,-2.64583 h 6.614583 l 2.910417,2.64583 z"
				id="path43303"
			/><path
				style="opacity:1;fill:#780011;fill-opacity:1;fill-rule:evenodd;stroke-width:3;stroke-linecap:round;stroke-linejoin:round;stroke-miterlimit:3;stroke-opacity:0.498674;paint-order:stroke fill markers"
				d="m 38.364583,30.1625 4.497916,-5.291667 h 3.175 l 2.38125,1.852083 -5.820833,5.820834 h -4.233333 z"
				id="path43305"
			/><path
				style="opacity:1;fill:#780011;fill-opacity:1;fill-rule:evenodd;stroke-width:3;stroke-linecap:round;stroke-linejoin:round;stroke-miterlimit:3;stroke-opacity:0.498674;paint-order:stroke fill markers"
				d="m 59.266666,55.033333 10e-7,-4.7625 c -3.386615,-0.102123 -7.325943,-0.549031 -8.202084,2.116666 0.03918,2.845985 3.923412,2.889647 8.202083,2.645834 z"
				id="path43307"
			/><path
				style="opacity:1;fill:#780011;fill-opacity:1;fill-rule:evenodd;stroke-width:3;stroke-linecap:round;stroke-linejoin:round;stroke-miterlimit:3;stroke-opacity:0.498674;paint-order:stroke fill markers"
				d="m 55.033333,66.674999 2.910416,-8.466666 c -5.086089,-0.35558 -10.209283,-0.748986 -10.31875,3.96875 0.206381,5.930766 4.120438,4.601277 7.408334,4.497916 z"
				id="path43309"
			/><path
				style="opacity:1;fill:#780011;fill-opacity:1;fill-rule:evenodd;stroke-width:3;stroke-linecap:round;stroke-linejoin:round;stroke-miterlimit:3;stroke-opacity:0.498674;paint-order:stroke fill markers"
				d="m 48.154166,78.052082 6.085417,-5.820833 v -2.116667 h -7.9375 c 0.336299,2.805872 -0.795248,6.447544 1.852083,7.9375 z"
				id="path43311"
			/><path
				style="opacity:1;fill:#780011;fill-opacity:1;fill-rule:evenodd;stroke-width:3;stroke-linecap:round;stroke-linejoin:round;stroke-miterlimit:3;stroke-opacity:0.498674;paint-order:stroke fill markers"
				d="M 91.810416,83.872916 H 80.962499 l -6.085417,6.085416 h 16.933334 z"
				id="path43313"
			/><path
				style="opacity:1;fill:#780011;fill-opacity:1;fill-rule:evenodd;stroke-width:3;stroke-linecap:round;stroke-linejoin:round;stroke-miterlimit:3;stroke-opacity:0.498674;paint-order:stroke fill markers"
				d="m 100.0125,100.27708 -5.027085,-3.968748 v -3.175 h 5.027085 z"
				id="path43315"
			/><path
				style="opacity:1;fill:#780011;fill-opacity:1;fill-rule:evenodd;stroke-width:3;stroke-linecap:round;stroke-linejoin:round;stroke-miterlimit:3;stroke-opacity:0.498674;paint-order:stroke fill markers"
				d="m 89.958332,111.38958 7.9375,-7.9375 -3.96875,-3.968748 -7.9375,7.937498 z"
				id="path43317"
			/><path
				style="opacity:1;fill:#780011;fill-opacity:1;fill-rule:evenodd;stroke-width:3;stroke-linecap:round;stroke-linejoin:round;stroke-miterlimit:3;stroke-opacity:0.498674;paint-order:stroke fill markers"
				d="m 77.522916,112.44792 h 6.614583 l -1.527572,-2.64584 h -3.234928 z"
				id="path43319"
			/><path
				style="opacity:1;fill:#780011;fill-opacity:1;fill-rule:evenodd;stroke-width:3;stroke-linecap:round;stroke-linejoin:round;stroke-miterlimit:3;stroke-opacity:0.498674;paint-order:stroke fill markers"
				d="m 54.239583,72.231249 3.175,-1.322917 -3.175,-0.79375 z"
				id="path43321"
			/><path
				style="opacity:1;fill:#a40013;fill-opacity:1;fill-rule:evenodd;stroke-width:3;stroke-linecap:round;stroke-linejoin:round;stroke-miterlimit:3;stroke-opacity:0.498674;paint-order:stroke fill markers"
				d="m 49.741666,118.00417 h 2.910417 v 2.38125 h 11.1125 v -5.55625 h 6.085416 L 85.460416,99.218749 v -5.55625 -0.529167 H 64.558333 l 12.170833,-12.7 v -7.14375 c -0.670196,-1.37773 -1.368761,-2.732115 -3.175,-3.175 h -9.789583 c -7.471356,5.48558 -13.463113,12.635266 -20.108334,19.05 v 11.641668 h 30.427083 l -11.112499,11.37708 c -9.28375,-0.14604 -13.614635,1.10081 -13.229167,5.82084 z"
				id="path43323"
			/><path
				style="opacity:1;fill:#780011;fill-opacity:1;fill-rule:evenodd;stroke-width:3;stroke-linecap:round;stroke-linejoin:round;stroke-miterlimit:3;stroke-opacity:0.498674;paint-order:stroke fill markers"
				d="m 63.764583,114.82917 h 6.085419 v 5.55625 h -6.085419 z"
				id="path43325"
			/><path
				style="opacity:1;fill:#1e1e2e;fill-opacity:1;fill-rule:evenodd;stroke-width:3;stroke-linecap:round;stroke-linejoin:round;stroke-miterlimit:3;stroke-opacity:0.498674;paint-order:stroke fill markers"
				d="m 55.033333,109.00833 v 4.49792 c -7.038572,-0.82726 -9.36361,2.65318 -10.583334,7.14375 -1.780052,-8.06592 3.304952,-10.71857 10.583334,-11.64167 z"
				id="path43327"
			/><path
				style="opacity:1;fill:#000000;fill-opacity:1;fill-rule:evenodd;stroke-width:3;stroke-linecap:round;stroke-linejoin:round;stroke-miterlimit:3;stroke-opacity:0.498674;paint-order:stroke fill markers"
				d="m 44.449999,120.65 c 0.759338,-2.28374 0.154932,-5.13997 4.497918,-6.61458 2.513274,-1.02987 4.391049,-0.94096 6.085416,-0.52917 -6.793207,-0.36489 -8.740206,3.34576 -10.583334,7.14375 z"
				id="path43329"
			/><path
				style="opacity:1;fill:#5d1819;fill-opacity:1;fill-rule:evenodd;stroke-width:3;stroke-linecap:round;stroke-linejoin:round;stroke-miterlimit:3;stroke-opacity:0.498674;paint-order:stroke fill markers"
				d="M 122.2375,12.435417 125.14792,7.14375 H 112.7125 v 3.175 z"
				id="path43331"
			/><path
				style="opacity:1;fill:#a57e51;fill-opacity:1;fill-rule:evenodd;stroke-width:3;stroke-linecap:round;stroke-linejoin:round;stroke-miterlimit:3;stroke-opacity:0.498674;paint-order:stroke fill markers"
				d="m 97.895832,12.435417 c -3.284651,2.827296 -6.157069,5.856161 -5.55625,10.583333 l 3.175,5.291666 c -4.046873,2.30861 -7.374508,5.526722 -8.202083,11.90625 l 1.852083,7.408333 c -5.422944,1.407821 -11.018078,1.30747 -15.875,7.672917 H 69.056249 V 49.477083 L 82.020832,25.135416 V 10.583333 Z"
				id="path43333"
			/><path
				style="opacity:1;fill:#976b4b;fill-opacity:1;fill-rule:evenodd;stroke-width:3;stroke-linecap:round;stroke-linejoin:round;stroke-miterlimit:3;stroke-opacity:0.498674;paint-order:stroke fill markers"
				d="m 69.320833,50.8 c 4.814472,-3.097827 9.151726,-7.591062 14.816667,-8.202083 0,0 -2.363873,-6.056591 -1.322917,-8.73125 2.792151,-5.442979 5.350565,-6.135846 7.9375,-7.408333 -2.204861,-2.557639 -6.350653,-5.101994 -6.879167,-7.672918 0.141262,-2.416512 1.573029,-4.366185 2.910416,-6.349999 L 84.950246,9.2604166 H 59.531249 L 61.303622,15.875 78.052082,32.623461 72.710669,42.333334 C 71.580724,45.155556 69.252793,47.725222 69.320833,50.8 Z"
				id="path43335"
			/><path
				style="opacity:1;fill:#77010e;fill-opacity:1;fill-rule:evenodd;stroke-width:3;stroke-linecap:round;stroke-linejoin:round;stroke-miterlimit:3;stroke-opacity:0.498674;paint-order:stroke fill markers"
				d="m 48.418749,10.31875 2.116667,2.116667 H 122.2375 l 1.22206,-2.116667 H 112.7125 V 7.1437499 h -3.43958 V 10.31875 h -7.40834 v -3.175 h -3.174997 l -10e-7,3.175 h -8.466666 l 10e-7,-3.175 h -3.175 l -10e-7,3.175 h -8.202084 l 10e-7,-3.175 h -2.910416 l -10e-7,3.175 z"
				id="path43337"
			/><path
				style="opacity:1;fill:#ffffff;fill-opacity:1;fill-rule:evenodd;stroke-width:3;stroke-linecap:round;stroke-linejoin:round;stroke-miterlimit:3;stroke-opacity:0.498674;paint-order:stroke fill markers"
				d="m 48.418749,10.31875 3.96875,-3.1750001 h 6.614584 l -2.38125,3.1750001 z"
				id="path43339"
			/><path
				style="opacity:1;fill:#c8b7a3;fill-opacity:1;fill-rule:evenodd;stroke-width:3;stroke-linecap:round;stroke-linejoin:round;stroke-miterlimit:3;stroke-opacity:0.498674;paint-order:stroke fill markers"
				d="M 56.620833,10.31875 H 75.935416 V 7.4083332 7.1437499 H 59.002083 Z"
				id="path43341"
			/><path
				style="opacity:1;fill:#c8b7a3;fill-opacity:1;fill-rule:evenodd;stroke-width:3;stroke-linecap:round;stroke-linejoin:round;stroke-miterlimit:3;stroke-opacity:0.498674;paint-order:stroke fill markers"
				d="M 78.845832,10.31875 V 7.1437499 h 8.202084 V 10.31875 Z"
				id="path43343"
			/><path
				style="opacity:1;fill:#c8b7a3;fill-opacity:1;fill-rule:evenodd;stroke-width:3;stroke-linecap:round;stroke-linejoin:round;stroke-miterlimit:3;stroke-opacity:0.498674;paint-order:stroke fill markers"
				d="m 90.222916,10.31875 10e-7,-3.175 h 8.466666 l -10e-7,3.175 z"
				id="path43345"
			/><path
				style="opacity:1;fill:#c8b7a3;fill-opacity:1;fill-rule:evenodd;stroke-width:3;stroke-linecap:round;stroke-linejoin:round;stroke-miterlimit:3;stroke-opacity:0.498674;paint-order:stroke fill markers"
				d="m 101.86458,10.31875 v -3.175 h 7.40834 v 3.175 z"
				id="path43347"
			/><path
				style="opacity:1;fill:#5d1819;fill-opacity:1;fill-rule:evenodd;stroke-width:3;stroke-linecap:round;stroke-linejoin:round;stroke-miterlimit:3;stroke-opacity:0.498674;paint-order:stroke fill markers"
				d="m 60.854167,12.435417 h 4.497916 l 9.524999,3.968749 10.054167,3.96875 10.583333,3.439584 10.318748,3.96875 11.37709,3.439583 c -0.315,0.834586 0.12317,2.258164 -2.11667,1.5875 L 113.24167,33.304596 63.499999,15.875 Z"
				id="path43349"
			/><path
				style="opacity:1;fill:#780011;fill-opacity:1;fill-rule:evenodd;stroke-width:3;stroke-linecap:round;stroke-linejoin:round;stroke-miterlimit:3;stroke-opacity:0.498674;paint-order:stroke fill markers"
				d="m 58.737499,12.435417 5.820834,5.027083 50.270837,17.4625 0.26458,-2.116667 -6.87917,-2.38125 v 0 l -3.175,-1.322916 v 0.0658 l -7.672915,-2.711638 h 2e-6 l -2.910417,-1.322916 -10e-7,-1e-6 -6.879167,-2.38125 10e-7,10e-7 -3.96875,-0.79375 -10e-7,-10e-7 -6.879166,-2.645833 h 10e-7 l -3.175,-1.322916 -1e-6,-10e-7 -12.7,-5.556249 z"
				id="path43351"
			/><path
				style="opacity:1;fill:#77010e;fill-opacity:1;fill-rule:evenodd;stroke-width:3;stroke-linecap:round;stroke-linejoin:round;stroke-miterlimit:3;stroke-opacity:0.498674;paint-order:stroke fill markers"
				d="m 65.352083,55.297916 h 3.704166 v -4.7625 L 83.476041,36.115625 59.795833,12.435417 h -3.704167 l 3.513418,6.085416 17.124082,17.197917 -10.583334,11.906249 -2.116666,3.96875 z"
				id="path43353"
			/><path
				style="opacity:1;fill:#5d1819;fill-opacity:1;fill-rule:evenodd;stroke-width:3;stroke-linecap:round;stroke-linejoin:round;stroke-miterlimit:3;stroke-opacity:0.498674;paint-order:stroke fill markers"
				d="m 105.56875,61.118749 0.70895,-2.645833 -2.82562,-3.175 -2.38125,-2.116667 -5.027081,-4.7625 -7.672917,-7.408333 -7.408333,-7.408333 v 3.439586 l 3.704167,3.704166 6.879164,6.879164 5.820833,5.820834 7.672917,7.672919 z"
				id="path43355"
			/><path
				style="opacity:1;fill:#77010e;fill-opacity:1;fill-rule:evenodd;stroke-width:3;stroke-linecap:round;stroke-linejoin:round;stroke-miterlimit:3;stroke-opacity:0.498674;paint-order:stroke fill markers"
				d="m 80.962499,37.041666 3.704167,3.175 10e-7,1e-6 2.116666,2.116666 h -10e-7 l 4.7625,4.7625 h 10e-7 l 2.910417,2.38125 h -10e-7 l 4.497916,4.7625 h 2e-6 l 2.910413,3.439584 v -10e-7 l 3.70417,3.439583 v 2.910417 L 82.285416,40.745833 c -0.838881,-2.602344 -1.004442,-2.367275 -1.322917,-3.704167 z"
				id="path43357"
			/><path
				style="opacity:1;fill:#5d1819;fill-opacity:1;fill-rule:evenodd;stroke-width:3;stroke-linecap:round;stroke-linejoin:round;stroke-miterlimit:3;stroke-opacity:0.498674;paint-order:stroke fill markers"
				d="m 65.352083,55.297916 v -5.027083 c 4.498501,-5.027074 9.578444,-10.044615 13.493749,-15.08125 L 56.091666,12.435417 h -5.55625 l 0.458272,0.79375 h 2.452145 l 22.224999,22.224999 -12.435416,14.2875 v 5.55625 z"
				id="path43359"
			/><path
				style="opacity:1;fill:#77010e;fill-opacity:1;fill-rule:evenodd;stroke-width:3;stroke-linecap:round;stroke-linejoin:round;stroke-miterlimit:3;stroke-opacity:0.498674;paint-order:stroke fill markers"
				d="m 53.445833,13.229167 h -2.452145 l -0.458272,-0.793749 h 3.439583 z"
				id="path43361"
			/><path
				style="opacity:1;fill:#77010e;fill-opacity:1;fill-rule:evenodd;stroke-width:3;stroke-linecap:round;stroke-linejoin:round;stroke-miterlimit:3;stroke-opacity:0.498674;paint-order:stroke fill markers"
				d="m 53.445833,13.229167 h 3.439583 l -1.058333,-1.058333 h -2.38125 z"
				id="path43363"
			/><path
				style="opacity:1;fill:#770011;fill-opacity:1;fill-rule:evenodd;stroke-width:3;stroke-linecap:round;stroke-linejoin:round;stroke-miterlimit:3;stroke-opacity:0.498674;paint-order:stroke fill markers"
				d="m 116.94583,48.683333 v -6.35 l -1.85208,1.0693 v 6.8682 z"
				id="path43365"
			/><path
				style="opacity:1;fill:#d20f39;fill-opacity:1;fill-rule:evenodd;stroke-width:3;stroke-linecap:round;stroke-linejoin:round;stroke-miterlimit:3;stroke-opacity:0.498674;paint-order:stroke fill markers"
				d="m 116.94583,47.360416 v -6.879167 l 3.175,-1.322916 -0.26458,6.614583 z"
				id="path43367"
			/><path
				style="opacity:1;fill:#d20f39;fill-opacity:1;fill-rule:evenodd;stroke-width:3;stroke-linecap:round;stroke-linejoin:round;stroke-miterlimit:3;stroke-opacity:0.498674;paint-order:stroke fill markers"
				d="m 119.85625,57.943749 v -7.14375 l -2.38125,1.374815 v 5.768935 z"
				id="path43369"
			/><path
				style="opacity:1;fill:#d20f39;fill-opacity:1;fill-rule:evenodd;stroke-width:3;stroke-linecap:round;stroke-linejoin:round;stroke-miterlimit:3;stroke-opacity:0.498674;paint-order:stroke fill markers"
				d="m 117.21042,80.9625 v -6.35 l 2.64583,-1.639399 v 6.666481 z"
				id="path43371"
			/><path
				style="opacity:1;fill:#d20f39;fill-opacity:1;fill-rule:evenodd;stroke-width:3;stroke-linecap:round;stroke-linejoin:round;stroke-miterlimit:3;stroke-opacity:0.498674;paint-order:stroke fill markers"
				d="m 117.21042,92.074999 v -6.085417 l 2.64583,-1.527572 v 6.554656 z"
				id="path43373"
			/><path
				style="opacity:1;fill:#d20f39;fill-opacity:1;fill-rule:evenodd;stroke-width:3;stroke-linecap:round;stroke-linejoin:round;stroke-miterlimit:3;stroke-opacity:0.498674;paint-order:stroke fill markers"
				d="m 116.94583,102.92292 h 3.175 v -7.143755 h -3.175 z"
				id="path43375"
			/><path
				style="opacity:1;fill:#770011;fill-opacity:1;fill-rule:evenodd;stroke-width:3;stroke-linecap:round;stroke-linejoin:round;stroke-miterlimit:3;stroke-opacity:0.498674;paint-order:stroke fill markers"
				d="m 117.475,53.181249 -2.29136,1.322917 v 6.614583 l 2.29136,-3.175 z"
				id="path43377"
			/><path
				style="opacity:1;fill:#770011;fill-opacity:1;fill-rule:evenodd;stroke-width:3;stroke-linecap:round;stroke-linejoin:round;stroke-miterlimit:3;stroke-opacity:0.498674;paint-order:stroke fill markers"
				d="m 115.35833,83.872916 1.85209,-1.852084 v -5.55625 h -2.38125 v 7.408334 z"
				id="path43379"
			/><path
				style="opacity:1;fill:#770011;fill-opacity:1;fill-rule:evenodd;stroke-width:3;stroke-linecap:round;stroke-linejoin:round;stroke-miterlimit:3;stroke-opacity:0.498674;paint-order:stroke fill markers"
				d="m 117.21042,92.074999 -2.11667,3.175 v -6.879167 l 2.11667,-1.5875 z"
				id="path43381"
			/><path
				style="opacity:1;fill:#770011;fill-opacity:1;fill-rule:evenodd;stroke-width:3;stroke-linecap:round;stroke-linejoin:round;stroke-miterlimit:3;stroke-opacity:0.498674;paint-order:stroke fill markers"
				d="m 116.94583,102.92292 -1.5875,2.91041 v -6.614581 h 1.5875 z"
				id="path43383"
			/><path
				style="opacity:1;fill:#760011;fill-opacity:1;fill-rule:evenodd;stroke-width:3.19374;stroke-linecap:round;stroke-linejoin:round;stroke-miterlimit:3;stroke-opacity:0.498674;paint-order:stroke fill markers"
				d="M 115.09375,115.62292 V 111.125 h 2.11667 v 4.49792 z"
				id="path43385"
			/><path
				style="opacity:1;fill:#d20f39;fill-opacity:1;fill-rule:evenodd;stroke-width:3;stroke-linecap:round;stroke-linejoin:round;stroke-miterlimit:3;stroke-opacity:0.498674;paint-order:stroke fill markers"
				d="m 116.68125,111.125 v -2.64583 l 3.2079,-1.85209 v 11.90625 c -0.87889,1.88933 -2.75819,2.42453 -4.50113,2.63799 -1.74595,0.21381 -3.37273,-0.49549 -4.79219,-2.63799 l -2.91041,-2.91041 h 8.99583 z"
				id="path43387"
			/><path
				style="opacity:1;fill:#d20f39;fill-opacity:1;fill-rule:evenodd;stroke-width:3;stroke-linecap:round;stroke-linejoin:round;stroke-miterlimit:3;stroke-opacity:0.498674;paint-order:stroke fill markers"
				d="m 117.475,35.983333 2.38125,-1.680329 v -4.405088 l -2.64583,1.322917 v 4.7625 z"
				id="path43389"
			/><path
				style="opacity:1;fill:#d20f39;fill-opacity:1;fill-rule:evenodd;stroke-width:3;stroke-linecap:round;stroke-linejoin:round;stroke-miterlimit:3;stroke-opacity:0.498674;paint-order:stroke fill markers"
				d="m 117.21042,70.008242 v -6.35 l 2.64583,-1.639399 v 6.666481 z"
				id="path43391"
			/><path
				style="opacity:1;fill:#770011;fill-opacity:1;fill-rule:evenodd;stroke-width:3;stroke-linecap:round;stroke-linejoin:round;stroke-miterlimit:3;stroke-opacity:0.498674;paint-order:stroke fill markers"
				d="m 115.35833,72.918658 1.85209,-1.852084 v -5.55625 h -2.38125 v 7.408334 z"
				id="path43393"
			/><path
				style="opacity:1;fill:#5d1819;fill-opacity:1;fill-rule:evenodd;stroke-width:3;stroke-linecap:round;stroke-linejoin:round;stroke-miterlimit:3;stroke-opacity:0.498674;paint-order:stroke fill markers"
				d="M 112.7125,10.31875 V 7.1437499 H 52.387499 l -3.96875,3.1750001 z"
				id="path43395"
			/><path
				style="opacity:1;fill:#d20f39;fill-opacity:1;fill-rule:evenodd;stroke-width:3;stroke-linecap:round;stroke-linejoin:round;stroke-miterlimit:3;stroke-opacity:0.498674;paint-order:stroke fill markers"
				d="m 17.991666,64.029166 v -5.55625 l -7.937499,-17.991667 2.116666,-1.058333 c 2.737431,6.683325 3.853164,12.338113 11.641667,22.225 h 1.852083 v 2.38125 z"
				id="path43397"
			/><path
				style="opacity:1;fill:#ebeaea;fill-opacity:1;fill-rule:evenodd;stroke-width:3;stroke-linecap:round;stroke-linejoin:round;stroke-miterlimit:3;stroke-opacity:0.498674;paint-order:stroke fill markers"
				d="m 31.75,56.356249 h -6.085417 v 2.645834 C 29.413349,58.833096 31.286904,57.886947 31.75,56.356249 Z"
				id="path43399"
			/><path
				style="opacity:1;fill:#a40013;fill-opacity:1;fill-rule:evenodd;stroke-width:3;stroke-linecap:round;stroke-linejoin:round;stroke-miterlimit:3;stroke-opacity:0.498674;paint-order:stroke fill markers"
				d="M 43.920833,51.064583 36.777083,37.835416 27.78125,30.427083 v 9.30852 l 9.082116,5.243563 4.14705,5.291667 1.322917,1.322916 z"
				id="path43401"
			/><path
				style="opacity:1;fill:#ebeaea;fill-opacity:1;fill-rule:evenodd;stroke-width:3;stroke-linecap:round;stroke-linejoin:round;stroke-miterlimit:3;stroke-opacity:0.498674;paint-order:stroke fill markers"
				d="M 25.664583,50.799999 H 34.13125 L 31.75,53.181249 h -6.085417 z"
				id="path43403"
			/><path
				style="opacity:1;fill:#a40013;fill-opacity:1;fill-rule:evenodd;stroke-width:3;stroke-linecap:round;stroke-linejoin:round;stroke-miterlimit:3;stroke-opacity:0.498674;paint-order:stroke fill markers"
				d="M 12.170833,39.422916 7.9374999,23.623901 v -6.425985 l 4.2333331,3.96875 z"
				id="path43405"
			/><path
				style="opacity:1;fill:#a40013;fill-opacity:1;fill-rule:evenodd;stroke-width:3;stroke-linecap:round;stroke-linejoin:round;stroke-miterlimit:3;stroke-opacity:0.498674;paint-order:stroke fill markers"
				d="M 43.391666,44.449999 46.302083,47.625 39.422917,45.772916 36.777083,37.835417 42.06875,43.127082 Z"
				id="path43407"
			/><path
				style="opacity:1;fill:#a40013;fill-opacity:1;fill-rule:evenodd;stroke-width:3;stroke-linecap:round;stroke-linejoin:round;stroke-miterlimit:3;stroke-opacity:0.498674;paint-order:stroke fill markers"
				d="M 46.302083,47.624999 27.78125,36.931991 41.010416,47.624999 Z"
				id="path43409"
			/><path
				style="opacity:1;fill:#d20f39;fill-opacity:1;fill-rule:evenodd;stroke-width:4.08248;stroke-linecap:round;stroke-linejoin:round;stroke-miterlimit:3;stroke-opacity:0.498674;paint-order:stroke fill markers"
				d="M 7.9374999,29.104167 H 10.295166 V 19.304783 L 7.0872635,15.875 v 9.799382 z"
				id="path43411"
			/><path
				style="opacity:1;fill:#581618;fill-opacity:1;fill-rule:evenodd;stroke-width:3;stroke-linecap:round;stroke-linejoin:round;stroke-miterlimit:3;stroke-opacity:0.498674;paint-order:stroke fill markers"
				d="M 12.170833,21.166666 9.7895833,16.139583 C 8.3891907,15.808285 9.5968631,28.655621 10.583333,29.104167 Z"
				id="path43413"
			/><path
				style="opacity:1;fill:#581618;fill-opacity:1;fill-rule:evenodd;stroke-width:3;stroke-linecap:round;stroke-linejoin:round;stroke-miterlimit:3;stroke-opacity:0.498674;paint-order:stroke fill markers"
				d="m 7.9374999,17.197916 1.8520833,0.529167"
				id="path43415"
			/><path
				style="opacity:1;fill:#780011;fill-opacity:1;fill-rule:evenodd;stroke-width:5;stroke-linecap:round;stroke-linejoin:round;stroke-miterlimit:3;stroke-opacity:0.498674;paint-order:stroke fill markers"
				d="M 63.764584,75.318055 H 69.05625 L 66.410417,78.40486 Z"
				id="path43417"
			/><path
				style="opacity:1;fill:#780011;fill-opacity:1;fill-rule:evenodd;stroke-width:5;stroke-linecap:round;stroke-linejoin:round;stroke-miterlimit:3;stroke-opacity:0.498674;paint-order:stroke fill markers"
				d="m 70.64375,75.318055 h 5.291666 l -2.645833,3.086805 z"
				id="path43419"
			/><path
				style="opacity:1;fill:#780011;fill-opacity:1;fill-rule:evenodd;stroke-width:5;stroke-linecap:round;stroke-linejoin:round;stroke-miterlimit:3;stroke-opacity:0.498674;paint-order:stroke fill markers"
				d="m 66.939583,80.697917 h 5.291666 l -2.645833,3.086805 z"
				id="path43421"
			/><path
				style="opacity:1;fill:#f38ba8;fill-opacity:1;fill-rule:evenodd;stroke-width:3;stroke-linecap:round;stroke-linejoin:round;stroke-miterlimit:3;stroke-opacity:0.498674;paint-order:stroke fill markers"
				d="m 24.60625,49.741667 h -1.5875 v -2.645834 c 0.920285,0.07772 1.398278,1.599667 1.5875,2.645834 z"
				id="path43423"
			/><path
				style="opacity:1;fill:#5d1819;fill-opacity:1;fill-rule:evenodd;stroke-width:3;stroke-linecap:round;stroke-linejoin:round;stroke-miterlimit:3;stroke-opacity:0.498674;paint-order:stroke fill markers"
				d="M 116.41667,33.072916 60.854166,12.435417 h 4.497917 l 51.858337,18.785416 z"
				id="path43425"
			/><path
				style="opacity:1;fill:#5d1819;fill-opacity:1;fill-rule:evenodd;stroke-width:3;stroke-linecap:round;stroke-linejoin:round;stroke-miterlimit:3;stroke-opacity:0.498674;paint-order:stroke fill markers"
				d="m 116.41667,33.072916 h 0.79375 v -1.852083 l -1.05834,0.264583 z"
				id="path43427"
			/><path
				style="opacity:1;fill:#77010e;fill-opacity:1;fill-rule:evenodd;stroke-width:3;stroke-linecap:round;stroke-linejoin:round;stroke-miterlimit:3;stroke-opacity:0.498674;paint-order:stroke fill markers"
				d="M 60.854166,12.435417 116.41667,33.072916 116.15208,33.3375 112.18333,33.072916 60.589583,13.49375 Z"
				id="path43429"
			/><path
				style="opacity:1;fill:#77010e;fill-opacity:1;fill-rule:evenodd;stroke-width:3;stroke-linecap:round;stroke-linejoin:round;stroke-miterlimit:3;stroke-opacity:0.498674;paint-order:stroke fill markers"
				d="M 105.56875,61.118749 79.904166,35.454166 V 36.5125 l 25.664584,25.664583 z"
				id="path43431"
			/><path
				style="opacity:1;fill:#77010e;fill-opacity:1;fill-rule:evenodd;stroke-width:3;stroke-linecap:round;stroke-linejoin:round;stroke-miterlimit:3;stroke-opacity:0.498674;paint-order:stroke fill markers"
				d="m 82.285416,40.745833 -2.38125,-2.38125 1.5875,-0.425371"
				id="path43433"
			/><path
				style="opacity:1;fill:#d20f39;fill-opacity:1;fill-rule:evenodd;stroke-width:3;stroke-linecap:round;stroke-linejoin:round;stroke-miterlimit:3;stroke-opacity:0.498674;paint-order:stroke fill markers"
				d="M 35.189583,118.00417 H 18.785416 l -2.38125,2.64583 h 18.25625 c 1e-6,0 0.529167,-2.64583 0.529167,-2.64583 z"
				id="path43435"
			/><path
				style="opacity:1;fill:#d20f39;fill-opacity:1;fill-rule:evenodd;stroke-width:3;stroke-linecap:round;stroke-linejoin:round;stroke-miterlimit:3;stroke-opacity:0.498674;paint-order:stroke fill markers"
				d="M 10.583333,117.73958 14.2875,114.03542 V 99.218749 h -3.439583 -0.264584 z"
				id="path43437"
			/><path
				style="opacity:1;fill:#d20f39;fill-opacity:1;fill-rule:evenodd;stroke-width:3;stroke-linecap:round;stroke-linejoin:round;stroke-miterlimit:3;stroke-opacity:0.498674;paint-order:stroke fill markers"
				d="m 10.583333,93.927082 h 2.645834 v -8.466666 h -3.175 v 8.466666 z"
				id="path43439"
			/><path
				style="opacity:1;fill:#780011;fill-opacity:1;fill-rule:evenodd;stroke-width:3;stroke-linecap:round;stroke-linejoin:round;stroke-miterlimit:3;stroke-opacity:0.498674;paint-order:stroke fill markers"
				d="m 22.489583,114.03542 3.96875,-3.96875 h 15.875 c -2.204962,1.63888 -4.527775,3.18284 -5.820833,5.55625 l -13.758334,-0.79375 z"
				id="path43441"
			/><path
				style="opacity:1;fill:#a40013;fill-opacity:1;fill-rule:evenodd;stroke-width:3;stroke-linecap:round;stroke-linejoin:round;stroke-miterlimit:3;stroke-opacity:0.498674;paint-order:stroke fill markers"
				d="m 35.189583,118.00417 1.680329,-2.91042 -14.380329,-1.05833 -3.704167,3.96875 z"
				id="path43443"
			/><path
				style="opacity:1;fill:#a40013;fill-opacity:1;fill-rule:evenodd;stroke-width:3;stroke-linecap:round;stroke-linejoin:round;stroke-miterlimit:3;stroke-opacity:0.498674;paint-order:stroke fill markers"
				d="m 14.2875,114.03542 4.497916,-4.49792 V 99.218749 H 14.2875 Z"
				id="path43445"
			/><path
				style="opacity:1;fill:#a40013;fill-opacity:1;fill-rule:evenodd;stroke-width:3;stroke-linecap:round;stroke-linejoin:round;stroke-miterlimit:3;stroke-opacity:0.498674;paint-order:stroke fill markers"
				d="m 13.229167,93.927082 h 5.556249 v -8.466666 h -5.556249 z"
				id="path43447"
			/><path
				style="opacity:1;fill:#780011;fill-opacity:1;fill-rule:evenodd;stroke-width:3;stroke-linecap:round;stroke-linejoin:round;stroke-miterlimit:3;stroke-opacity:0.498674;paint-order:stroke fill markers"
				d="m 18.785416,109.5375 3.96875,-3.175 v -7.143751 h -3.96875 z"
				id="path43449"
			/><path
				style="opacity:1;fill:#780011;fill-opacity:1;fill-rule:evenodd;stroke-width:3;stroke-linecap:round;stroke-linejoin:round;stroke-miterlimit:3;stroke-opacity:0.498674;paint-order:stroke fill markers"
				d="M 18.785416,93.927082 H 23.01875 V 85.460416 H 18.785416 Z"
				id="path43451"
			/><path
				style="opacity:1;fill:#1e1e2e;fill-opacity:1;fill-rule:evenodd;stroke-width:3;stroke-linecap:round;stroke-linejoin:round;stroke-miterlimit:3;stroke-opacity:0.498674;paint-order:stroke fill markers"
				d="m 10.583333,99.218749 c -3.7687858,0.525182 -5.4930246,6.714601 -7.6729164,11.641671 2.6541002,-1.25273 5.9278873,-3.75428 7.6729164,-3.175 z"
				id="path43453"
			/><path
				style="opacity:1;fill:#1e1e2e;fill-opacity:1;fill-rule:evenodd;stroke-width:3;stroke-linecap:round;stroke-linejoin:round;stroke-miterlimit:3;stroke-opacity:0.498674;paint-order:stroke fill markers"
				d="m 10.054167,93.927082 c -2.7172745,0.654357 -4.5681669,1.991752 -6.6145837,3.175 C 5.3738085,91.10281 7.5236685,86.86194 10.054167,85.724999 Z"
				id="path43455"
			/><path
				style="opacity:1;fill:#1e1e2e;fill-opacity:1;fill-rule:evenodd;stroke-width:3;stroke-linecap:round;stroke-linejoin:round;stroke-miterlimit:3;stroke-opacity:0.498674;paint-order:stroke fill markers"
				d="m 14.816666,82.549999 c -1.130796,0.726273 -2.565486,0.582746 -3.968749,0.529167 1.029214,-6.661223 5.85751,-10.234587 12.699999,-12.170834 0.0429,1.446292 0.07456,2.889567 -0.264583,4.233334 z"
				id="path43457"
			/><path
				style="opacity:1;fill:#a40013;fill-opacity:1;fill-rule:evenodd;stroke-width:3;stroke-linecap:round;stroke-linejoin:round;stroke-miterlimit:3;stroke-opacity:0.498674;paint-order:stroke fill markers"
				d="m 23.283333,82.549999 v -7.408333 c -3.528091,1.763985 -6.350122,4.233621 -8.466667,7.408333 z"
				id="path43459"
			/></g
		><g id="g43179"
			><path
				style="fill:#433c3c;fill-opacity:1;fill-rule:evenodd;stroke-width:3;stroke-linecap:round;stroke-linejoin:round;stroke-miterlimit:3;stroke-opacity:0.498674;paint-order:stroke fill markers;opacity:1"
				d="m 31.485416,42.597916 v 2.645833 l -3.439583,1.985844 V 64.029167 H 25.4 V 46.302083 c 0.491941,-3.590405 3.704167,-2.822223 5.55625,-4.233334 z"
				id="path64708"
			/><path
				style="fill:#770011;fill-opacity:1;fill-rule:evenodd;stroke-width:3;stroke-linecap:round;stroke-linejoin:round;stroke-miterlimit:3;stroke-opacity:0.498674;paint-order:stroke fill markers;opacity:1"
				d="m 114.82917,34.925 v 4.233333 l 2.38125,-1.852083 v -6.085417 l -3.175,1.058333 z"
				id="path124221"
			/><path
				style="fill:#f9e2af;fill-opacity:1;fill-rule:evenodd;stroke-width:3;stroke-linecap:round;stroke-linejoin:round;stroke-miterlimit:3;stroke-opacity:0.498674;paint-order:stroke fill markers;opacity:1"
				d="m 79.374999,55.297916 c 8.387925,0.04454 16.166549,2.333363 23.547921,6.085417 l 1.05833,-5.291667 c -0.94765,-8.583118 3.46385,-15.409807 9.525,-21.695833 L 113.24167,30.1625 c -1.73083,-5.606685 2.25925,-11.807691 6.08541,-17.991667 l -10.84791,-1.5875 -9.260421,2.645834 -7.9375,21.166666 -14.552083,15.875 z"
				id="path123810"
			/><path
				style="fill:#c1a67f;fill-opacity:1;fill-rule:evenodd;stroke-width:3;stroke-linecap:round;stroke-linejoin:round;stroke-miterlimit:3;stroke-opacity:0.498674;paint-order:stroke fill markers;opacity:1"
				d="m 73.289582,55.297916 h 6.085417 c 4.013508,-3.614613 8.433651,-3.642591 12.7,-5.027083 l 1.5875,-4.233334 C 93.8638,38.762612 97.870853,33.992968 104.51042,30.95625 l -2.38125,-4.497917 c -2.787367,-4.617064 0.67963,-9.426531 5.82083,-14.2875 L 94.720832,11.641667 87.312499,18.520833 84.666666,39.6875 70.114582,52.916666 Z"
				id="path122054"
			/><path
				style="fill:#2a391d;fill-opacity:1;fill-rule:evenodd;stroke-width:3;stroke-linecap:round;stroke-linejoin:round;stroke-miterlimit:3;stroke-opacity:0.498674;paint-order:stroke fill markers;opacity:1"
				d="m 33.072916,30.427083 4.839338,-1.296696 8.389829,-11.932471 v -6.349999 l -2.645834,-0.79375 -11.641666,13.229166 z"
				id="path104941"
			/><path
				style="fill:#780011;fill-opacity:1;fill-rule:evenodd;stroke-width:3;stroke-linecap:round;stroke-linejoin:round;stroke-miterlimit:3;stroke-opacity:0.498674;paint-order:stroke fill markers;opacity:1"
				d="M 42.862499,24.870833 38.629166,29.897916 36.5125,30.95625 35.454166,28.310416 38.364583,24.870833 Z"
				id="path104655"
			/><path
				style="fill:#a30013;fill-opacity:1;fill-rule:evenodd;stroke-width:3;stroke-linecap:round;stroke-linejoin:round;stroke-miterlimit:3;stroke-opacity:0.498674;paint-order:stroke fill markers;opacity:1"
				d="m 42.8625,12.964583 -0.793751,3.175 H 34.13125 l 1.322916,-2.910416 z"
				id="path94011"
			/><path
				style="fill:#d20f39;fill-opacity:1;fill-rule:evenodd;stroke-width:3;stroke-linecap:round;stroke-linejoin:round;stroke-miterlimit:3;stroke-opacity:0.498674;paint-order:stroke fill markers;opacity:1"
				d="m 37.835416,10.054167 h 5.820833 l -0.850738,3.175 h -7.351345 z"
				id="path92627"
			/><path
				style="fill:#a30013;fill-opacity:1;fill-rule:evenodd;stroke-width:3;stroke-linecap:round;stroke-linejoin:round;stroke-miterlimit:3;stroke-opacity:0.498674;paint-order:stroke fill markers;opacity:1"
				d="m 42.068749,16.139583 -7.937499,9.525 -2.910417,-6.879167 3.175,-2.645833 z"
				id="path96016"
			/><path
				style="fill:#1e1e2e;fill-opacity:1;fill-rule:evenodd;stroke-width:3;stroke-linecap:round;stroke-linejoin:round;stroke-miterlimit:3;stroke-opacity:0.498674;paint-order:stroke fill markers;opacity:1"
				d="m 41.274999,48.418749 -2.381249,-4.762499 10.054166,-10e-7 C 41.548376,35.468587 39.894078,32.130594 37.041666,27.78125 l -0.529166,3.175 c -1.437827,-3.460121 -2.87853,-6.919892 -2.645834,-10.583334 -0.02932,-6.896728 3.57304,-9.086434 5.820834,-12.6999993 -1.748151,2.646e-4 -3.237481,-0.089537 -6.35,3.1750003 L 32.808333,7.9374999 c -4.088236,1.3945957 -4.001186,3.4787261 -5.55625,5.2916671 l 8.466667,30.427082 4.762499,6.35 z"
				id="path83586"
			/><path
				style="fill:#780011;fill-opacity:1;fill-rule:evenodd;stroke-width:3;stroke-linecap:round;stroke-linejoin:round;stroke-miterlimit:3;stroke-opacity:0.498674;paint-order:stroke fill markers;opacity:1"
				d="M 25.664583,22.225 22.225,18.785416 h -1.322917 l 0.264583,2.116667 3.96875,5.55625 1.852084,-1.5875 z"
				id="path83420"
			/><path
				style="fill:#1e1e2e;fill-opacity:1;fill-rule:evenodd;stroke-width:3;stroke-linecap:round;stroke-linejoin:round;stroke-miterlimit:3;stroke-opacity:0.498674;paint-order:stroke fill markers;opacity:1"
				d="M 25.664583,41.274999 V 22.489583 l 1.5875,-9.260416 3.704167,-3.175 0.264583,3.704166 c 1.996146,-3.040342 4.579948,-4.4020223 7.14375,-5.8208331 -2.05406,3.4580951 -4.956876,6.2527541 -5.55625,10.8479161 -0.208891,7.656353 1.901326,10.68878 3.704167,14.2875 L 37.570833,31.75 l 8.202083,10.847916 -6.614583,1e-6 z"
				id="path83418"
			/><path
				style="fill:#a40013;fill-opacity:1;fill-rule:evenodd;stroke-width:3.21846;stroke-linecap:round;stroke-linejoin:round;stroke-miterlimit:3;stroke-opacity:0.498674;paint-order:stroke fill markers;opacity:1"
				d="M 25.649607,61.647916 V 40.481249 l 2.131643,-1.852083 v -13.49375 l -5.176847,-4.497916 -1.827124,2.116666 -5.176847,-0.79375 -3.429599,-0.793749 -0.529166,17.197916 v 1.5875 l 6.394929,15.610416 4.567807,5.291667 2.740683,1.5875 z"
				id="path82183"
			/><path
				style="fill:#581618;fill-opacity:1;fill-rule:evenodd;stroke-width:3;stroke-linecap:round;stroke-linejoin:round;stroke-miterlimit:3;stroke-opacity:0.498674;paint-order:stroke fill markers;opacity:1"
				d="m 17.991666,64.029166 h 11.1125 v 3.175 H 20.6375 c -1.449282,-0.807681 -2.132894,-1.953639 -2.645834,-3.175 z"
				id="path64596"
			/><path
				style="fill:#ebeaea;fill-opacity:1;fill-rule:evenodd;stroke-width:3;stroke-linecap:round;stroke-linejoin:round;stroke-miterlimit:3;stroke-opacity:0.498674;paint-order:stroke fill markers;opacity:1"
				d="m 25.929166,64.293749 c 7.529965,-0.111296 7.158858,-1.956195 8.73125,-3.174999 h -8.995833 v 3.174999 z"
				id="path66330"
			/><path
				style="fill:#a40013;fill-opacity:1;fill-rule:evenodd;stroke-width:3;stroke-linecap:round;stroke-linejoin:round;stroke-miterlimit:3;stroke-opacity:0.498674;paint-order:stroke fill markers;opacity:1"
				d="m 31.485416,43.920833 5.291667,-3.96875 v -2.116667 l -5.291667,3.704167 V 37.041666 L 25.664583,41.274999 25.135417,47.625 Z"
				id="path66274"
			/><path
				style="opacity:1;fill:#581618;fill-opacity:1;fill-rule:evenodd;stroke-width:3;stroke-linecap:round;stroke-linejoin:round;stroke-miterlimit:3;stroke-opacity:0.498674;paint-order:stroke fill markers"
				d="m 14.2875,25.4 c -1.533807,1.850781 -0.08584,12.190631 0.264583,14.2875 l 0.264584,-13.229167 z"
				id="path28793"
			/><path
				style="fill:#17110c;fill-opacity:1;fill-rule:evenodd;stroke-width:2.93263;stroke-linecap:round;stroke-linejoin:round;stroke-miterlimit:3;stroke-opacity:0.498674;paint-order:stroke fill markers;opacity:1"
				d="m 25.664583,54.768749 c -3.566373,0.826013 -5.379924,-0.419925 -5.692948,-3.439583 v -17.4625 l 5.692948,6.614583 z"
				id="path79088"
			/><path
				style="opacity:1;fill:#d20f39;fill-opacity:1;fill-rule:evenodd;stroke-width:3;stroke-linecap:round;stroke-linejoin:round;stroke-miterlimit:3;stroke-opacity:0.498674;paint-order:stroke fill markers"
				d="m 17.727083,33.866666 -5.55625,-12.7 h 3.100693 l 4.30764,1.322917 1.322917,-3.704167 6.879167,6.35 v 16.404167 c -5.38103,0.121368 -6.702778,-5.115278 -10.054167,-7.672917 z"
				id="path21697"
			/><path
				style="fill:#433c3c;fill-opacity:1;fill-rule:evenodd;stroke-width:3;stroke-linecap:round;stroke-linejoin:round;stroke-miterlimit:3;stroke-opacity:0.498674;paint-order:stroke fill markers;opacity:1"
				d="M 40.745833,61.118749 V 50.535416 c -2.880753,-2.4099 -1.769911,-7.083284 -9.260416,-6.879166 l -1e-6,1.587499 3.175,2.116667 1.058334,2.38125 1.058333,4.233333 1.322917,1.5875 v 3.96875 z"
				id="path64764"
			/><path
				style="fill:#ebeaea;fill-opacity:1;fill-rule:evenodd;stroke-width:3;stroke-linecap:round;stroke-linejoin:round;stroke-miterlimit:3;stroke-opacity:0.498674;paint-order:stroke fill markers;opacity:1"
				d="m 31.220833,47.624999 h 6.614583 v 2.38125 c -4.433948,-0.28514 -5.890743,-1.249576 -6.614583,-2.38125 z"
				id="path66396"
			/><path
				style="fill:#ebeaea;fill-opacity:1;fill-rule:evenodd;stroke-width:3;stroke-linecap:round;stroke-linejoin:round;stroke-miterlimit:3;stroke-opacity:0.498674;paint-order:stroke fill markers;opacity:1"
				d="m 41.010416,56.091666 v -2.116667 h -5.820833 c 1.237698,1.77435 3.187941,2.464746 5.820833,2.116667 z"
				id="path66394"
			/><path
				style="fill:#ebeaea;fill-opacity:1;fill-rule:evenodd;stroke-width:3;stroke-linecap:round;stroke-linejoin:round;stroke-miterlimit:3;stroke-opacity:0.498674;paint-order:stroke fill markers;opacity:1"
				d="M 41.274999,61.118749 V 59.002083 H 35.71875 c 0.634615,1.655546 2.291798,2.513182 5.556249,2.116666 z"
				id="path66392"
			/><path
				style="fill:#a40013;fill-opacity:1;fill-rule:evenodd;stroke-width:3;stroke-linecap:round;stroke-linejoin:round;stroke-miterlimit:3;stroke-opacity:0.498674;paint-order:stroke fill markers;opacity:1"
				d="m 40.745833,61.118749 5.55625,5.027084 V 47.625 c -3.183557,-0.828595 -6.353185,-2.318262 -9.525,-3.704167 v -3.96875 c -1.763889,1.322917 -5.476106,0.09077 -5.291667,3.96875 h 1e-6 v 0 L 34.925,46.0375 l 3.439583,5.556249 1.322917,6.614584 z"
				id="path66218"
			/><path
				style="fill:#17110c;fill-opacity:1;fill-rule:evenodd;stroke-width:2.79284;stroke-linecap:round;stroke-linejoin:round;stroke-miterlimit:3;stroke-opacity:0.498674;paint-order:stroke fill markers;opacity:1"
				d="m 25.435277,52.916666 c -1.573414,0.214337 -2.742698,-0.23912 -3.210276,-1.852083 v -6.879167 h 3.439582 v 8.73125 z"
				id="path78818"
			/><circle
				style="fill:#ea1a1e;fill-opacity:1;fill-rule:evenodd;stroke-width:3;stroke-linecap:round;stroke-linejoin:round;stroke-miterlimit:3;stroke-opacity:0.498674;paint-order:stroke fill markers;opacity:1"
				id="path78980"
				cx="23.8125"
				cy="48.418751"
				r="1.5875"
			/><path
				style="fill:#d20f39;fill-opacity:1;fill-rule:evenodd;stroke-width:3;stroke-linecap:round;stroke-linejoin:round;stroke-miterlimit:3;stroke-opacity:0.498674;paint-order:stroke fill markers;opacity:1"
				d="m 10.054167,40.481249 2.116666,-1.058333 V 21.166666 L 6.0854166,8.7312499 V 22.489583 l -1.8520833,1.852083 z"
				id="path83075"
			/><path
				style="fill:#581618;fill-opacity:1;fill-rule:evenodd;stroke-width:3;stroke-linecap:round;stroke-linejoin:round;stroke-miterlimit:3;stroke-opacity:0.498674;paint-order:stroke fill markers;opacity:1"
				d="m 23.8125,35.983333 v -8.73125 c -3.576863,-3.107952 -5.449016,-6.688745 -7.14375,-10.31875 h -1.5875 c -0.193948,8.767852 3.328212,14.641393 8.73125,19.05 z"
				id="path83248"
			/><path
				style="fill:#780011;fill-opacity:1;fill-rule:evenodd;stroke-width:3;stroke-linecap:round;stroke-linejoin:round;stroke-miterlimit:3;stroke-opacity:0.498674;paint-order:stroke fill markers;opacity:1"
				d="m 23.8125,35.983333 v -2.38125 C 18.981893,29.180312 16.42275,23.911634 15.610416,17.991666 H 15.08125 c 0.0419,6.98906 2.391523,13.180185 8.73125,17.991667 z"
				id="path83252"
			/><path
				style="fill:#d20f39;fill-opacity:1;fill-rule:evenodd;stroke-width:3;stroke-linecap:round;stroke-linejoin:round;stroke-miterlimit:3;stroke-opacity:0.498674;paint-order:stroke fill markers;opacity:1"
				d="M 4.2333333,24.341666 3.6223043,23.283333 V 7.9374999 H 6.0854166 V 22.489583 Z"
				id="path83308"
			/><path
				style="fill:#581618;fill-opacity:1;fill-rule:evenodd;stroke-width:3;stroke-linecap:round;stroke-linejoin:round;stroke-miterlimit:3;stroke-opacity:0.498674;paint-order:stroke fill markers;opacity:1"
				d="m 25.664583,22.489583 1.5875,-9.260416 -1.322917,-1.322917 V 8.4666667 l -2.645833,-1.5875 v 4.4979163 l -1.058333,1.5875 h -1.322917 v 5.820833 z"
				id="path83530"
			/><path
				style="fill:#d20f39;fill-opacity:1;fill-rule:evenodd;stroke-width:3;stroke-linecap:round;stroke-linejoin:round;stroke-miterlimit:3;stroke-opacity:0.498674;paint-order:stroke fill markers;opacity:1"
				d="m 46.302083,10.847917 5.55625,5.556249 V 19.05 l -6.085417,-5.820833 z"
				id="path92683"
			/><path
				style="fill:#d20f39;fill-opacity:1;fill-rule:evenodd;stroke-width:3;stroke-linecap:round;stroke-linejoin:round;stroke-miterlimit:3;stroke-opacity:0.498674;paint-order:stroke fill markers;opacity:1"
				d="m 56.091666,24.077083 h 5.027083 v 5.55625 l -5.55625,-5.55625 z"
				id="path92685"
			/><path
				style="fill:#d20f39;fill-opacity:1;fill-rule:evenodd;stroke-width:3;stroke-linecap:round;stroke-linejoin:round;stroke-miterlimit:3;stroke-opacity:0.498674;paint-order:stroke fill markers;opacity:1"
				d="m 64.029166,32.54375 h 5.027083 v 5.027083 z"
				id="path92687"
			/><path
				style="fill:#780011;fill-opacity:1;fill-rule:evenodd;stroke-width:3;stroke-linecap:round;stroke-linejoin:round;stroke-miterlimit:3;stroke-opacity:0.498674;paint-order:stroke fill markers;opacity:1"
				d="m 75.406249,66.674999 h 4.233333 L 74.75135,58.208333 h -4.372184 z"
				id="path92689"
			/><path
				style="fill:#d20f39;fill-opacity:1;fill-rule:evenodd;stroke-width:3;stroke-linecap:round;stroke-linejoin:round;stroke-miterlimit:3;stroke-opacity:0.498674;paint-order:stroke fill markers;opacity:1"
				d="m 87.841666,68.791666 1.322916,-1.322917 h 5.291667 v 5.291667 l -0.763786,1.322916 z"
				id="path92691"
			/><path
				style="fill:#d20f39;fill-opacity:1;fill-rule:evenodd;stroke-width:3;stroke-linecap:round;stroke-linejoin:round;stroke-miterlimit:3;stroke-opacity:0.498674;paint-order:stroke fill markers;opacity:1"
				d="m 94.985415,75.935416 2.645834,-2.645834 h 6.085421 c 2.31993,0.361726 4.02404,1.654823 5.55625,3.207904 v 10.55043 c -0.73429,0.920498 -1.59353,1.727127 -2.91042,2.116666 v -8.202083 c -0.89123,-1.702487 -1.50235,-3.414541 -5.02708,-5.027083 z"
				id="path92693"
			/><path
				style="fill:#d20f39;fill-opacity:1;fill-rule:evenodd;stroke-width:3;stroke-linecap:round;stroke-linejoin:round;stroke-miterlimit:3;stroke-opacity:0.498674;paint-order:stroke fill markers;opacity:1"
				d="m 106.09792,104.24583 2.64583,-1.52757 v -7.732845 l -2.64583,-1.852083 z"
				id="path92695"
			/><path
				style="fill:#d20f39;fill-opacity:1;fill-rule:evenodd;stroke-width:3;stroke-linecap:round;stroke-linejoin:round;stroke-miterlimit:3;stroke-opacity:0.498674;paint-order:stroke fill markers;opacity:1"
				d="m 95.514582,116.94583 8.202088,-7.67291 v 3.70416 l -5.027088,5.02709 c -1.085731,-0.0917 -2.181297,-0.0896 -3.175,-1.05834 z"
				id="path92697"
			/><path
				style="fill:#d20f39;fill-opacity:1;fill-rule:evenodd;stroke-width:3;stroke-linecap:round;stroke-linejoin:round;stroke-miterlimit:3;stroke-opacity:0.498674;paint-order:stroke fill markers;opacity:1"
				d="m 75.141666,118.00417 h 11.90625 v 3.43958 H 76.464582 c -1.17798,-1.15533 -1.328986,-2.2984 -1.322916,-3.43958 z"
				id="path92699"
			/><path
				style="fill:#a30013;fill-opacity:1;fill-rule:evenodd;stroke-width:3;stroke-linecap:round;stroke-linejoin:round;stroke-miterlimit:3;stroke-opacity:0.498674;paint-order:stroke fill markers;opacity:1"
				d="m 45.772916,13.229167 -0.79375,3.439583 6.614583,6.35 0.264584,-3.96875 z"
				id="path94013"
			/><path
				style="fill:#a30013;fill-opacity:1;fill-rule:evenodd;stroke-width:3;stroke-linecap:round;stroke-linejoin:round;stroke-miterlimit:3;stroke-opacity:0.498674;paint-order:stroke fill markers;opacity:1"
				d="m 55.562499,24.077083 -1.322916,1.5875 5.55625,5.55625 1.322916,-1.5875 z"
				id="path94015"
			/><path
				style="fill:#a30013;fill-opacity:1;fill-rule:evenodd;stroke-width:3;stroke-linecap:round;stroke-linejoin:round;stroke-miterlimit:3;stroke-opacity:0.498674;paint-order:stroke fill markers;opacity:1"
				d="m 64.029166,32.54375 5.027083,5.027083 -1.5875,1.587497 -5.556247,-5.556247 z"
				id="path94017"
			/><path
				style="fill:#a40013;fill-opacity:1;fill-rule:evenodd;stroke-width:3;stroke-linecap:round;stroke-linejoin:round;stroke-miterlimit:3;stroke-opacity:0.498674;paint-order:stroke fill markers;opacity:1"
				d="m 70.379166,58.208333 h -2.910417 l 5.55625,8.466666 h 2.38125 z"
				id="path95998"
			/><path
				style="fill:#a30013;fill-opacity:1;fill-rule:evenodd;stroke-width:3;stroke-linecap:round;stroke-linejoin:round;stroke-miterlimit:3;stroke-opacity:0.498674;paint-order:stroke fill markers;opacity:1"
				d="m 87.841666,68.791666 5.820833,5.291666 -1.852083,1.852084 -5.820834,-5.820834 z"
				id="path96000"
			/><path
				style="fill:#780011;fill-opacity:1;fill-rule:evenodd;stroke-width:3;stroke-linecap:round;stroke-linejoin:round;stroke-miterlimit:3;stroke-opacity:0.498674;paint-order:stroke fill markers;opacity:1"
				d="m 94.456249,84.137499 v 6.085417 h 5.556251 v -7.9375 l -5.556251,1.5875 z"
				id="path96506"
			/><path
				style="fill:#a30013;fill-opacity:1;fill-rule:evenodd;stroke-width:3;stroke-linecap:round;stroke-linejoin:round;stroke-miterlimit:3;stroke-opacity:0.498674;paint-order:stroke fill markers;opacity:1"
				d="m 94.456249,78.052082 v 6.085417 c 2.743766,-0.444129 4.30928,0.630913 5.556251,2.116667 v 3.96875 l 2.91042,-0.264584 v -12.7 z"
				id="path96422"
			/><path
				style="fill:#a30013;fill-opacity:1;fill-rule:evenodd;stroke-width:3;stroke-linecap:round;stroke-linejoin:round;stroke-miterlimit:3;stroke-opacity:0.498674;paint-order:stroke fill markers;opacity:1"
				d="m 94.985415,75.935416 -0.567158,2.116666 h 5.858823 c 1.07177,0.414914 2.04921,0.930432 2.64584,1.852084 v 10.054166 l 3.43958,-0.79375 V 77.522916 c -1.08537,-1.352865 -2.52848,-2.114692 -4.23333,-2.444115 z"
				id="path96002"
			/><path
				style="fill:#a30013;fill-opacity:1;fill-rule:evenodd;stroke-width:3;stroke-linecap:round;stroke-linejoin:round;stroke-miterlimit:3;stroke-opacity:0.498674;paint-order:stroke fill markers;opacity:1"
				d="m 106.09792,93.133332 h -2.91042 v 10.847918 0.26458 h 2.91042 z"
				id="path96004"
			/><path
				style="fill:#a30013;fill-opacity:1;fill-rule:evenodd;stroke-width:3;stroke-linecap:round;stroke-linejoin:round;stroke-miterlimit:3;stroke-opacity:0.498674;paint-order:stroke fill markers;opacity:1"
				d="m 95.514582,116.94583 -2.116667,-2.11666 7.672915,-8.20209 2.64584,2.64584 z"
				id="path96006"
			/><path
				style="fill:#a30013;fill-opacity:1;fill-rule:evenodd;stroke-width:3;stroke-linecap:round;stroke-linejoin:round;stroke-miterlimit:3;stroke-opacity:0.498674;paint-order:stroke fill markers;opacity:1"
				d="m 75.141666,118.00417 v -2.91042 h 11.90625 v 2.91042 z"
				id="path96008"
			/><path
				style="fill:#a30013;fill-opacity:1;fill-rule:evenodd;stroke-width:3;stroke-linecap:round;stroke-linejoin:round;stroke-miterlimit:3;stroke-opacity:0.498674;paint-order:stroke fill markers;opacity:1"
				d="m 44.979166,16.66875 6.614583,6.35 -3.175,3.704166 -2.38125,-1.852083 h -7.672916 z"
				id="path96410"
			/><path
				style="fill:#780011;fill-opacity:1;fill-rule:evenodd;stroke-width:3;stroke-linecap:round;stroke-linejoin:round;stroke-miterlimit:3;stroke-opacity:0.498674;paint-order:stroke fill markers;opacity:1"
				d="m 50.270833,28.839583 5.291666,6.35 -3.704166,3.175 C 49.32197,37.94776 47.657685,35.369381 45.772916,33.3375 Z"
				id="path96492"
			/><path
				style="fill:#a30013;fill-opacity:1;fill-rule:evenodd;stroke-width:3;stroke-linecap:round;stroke-linejoin:round;stroke-miterlimit:3;stroke-opacity:0.498674;paint-order:stroke fill markers;opacity:1"
				d="m 54.239583,25.664583 5.55625,5.55625 -4.233334,3.96875 -5.291666,-6.35 z"
				id="path96412"
			/><path
				style="fill:#780011;fill-opacity:1;fill-rule:evenodd;stroke-width:3;stroke-linecap:round;stroke-linejoin:round;stroke-miterlimit:3;stroke-opacity:0.498674;paint-order:stroke fill markers;opacity:1"
				d="m 59.266666,46.831249 c -2.364347,0.497708 -4.661898,0.63921 -6.614583,-1.058333 -1.46194,-3.33423 2.766649,-5.419958 5.027083,-7.9375 l 4.7625,1.852084 z"
				id="path96494"
			/><path
				style="fill:#a30013;fill-opacity:1;fill-rule:evenodd;stroke-width:3;stroke-linecap:round;stroke-linejoin:round;stroke-miterlimit:3;stroke-opacity:0.498674;paint-order:stroke fill markers;opacity:1"
				d="m 61.912499,33.602083 5.55625,5.55625 c -2.709546,2.735144 -5.314263,6.230346 -8.202083,7.672916 -0.458205,-3.707139 -0.200206,-6.788381 -1.5875,-8.995833 z"
				id="path96414"
			/><path
				style="fill:#a40013;fill-opacity:1;fill-rule:evenodd;stroke-width:3;stroke-linecap:round;stroke-linejoin:round;stroke-miterlimit:3;stroke-opacity:0.498674;paint-order:stroke fill markers;opacity:1"
				d="m 59.266666,55.033333 v -4.7625 h 0.529167 v 4.7625 z"
				id="path96416"
			/><path
				style="fill:#a40013;fill-opacity:1;fill-rule:evenodd;stroke-width:3;stroke-linecap:round;stroke-linejoin:round;stroke-miterlimit:3;stroke-opacity:0.498674;paint-order:stroke fill markers;opacity:1"
				d="M 73.024999,66.674999 H 55.033333 l 2.910416,-8.466666 h 9.525 z"
				id="path96418"
			/><path
				style="fill:#a30013;fill-opacity:1;fill-rule:evenodd;stroke-width:3;stroke-linecap:round;stroke-linejoin:round;stroke-miterlimit:3;stroke-opacity:0.498674;paint-order:stroke fill markers;opacity:1"
				d="m 85.989582,70.114582 h -5.027083 v 13.758334 h 10.847917 v -7.9375 z"
				id="path96420"
			/><path
				style="fill:#a30013;fill-opacity:1;fill-rule:evenodd;stroke-width:3;stroke-linecap:round;stroke-linejoin:round;stroke-miterlimit:3;stroke-opacity:0.498674;paint-order:stroke fill markers;opacity:1"
				d="m 103.1875,93.133332 h -3.175 v 7.143748 l 3.175,3.96875 z"
				id="path96424"
			/><path
				style="fill:#a30013;fill-opacity:1;fill-rule:evenodd;stroke-width:3;stroke-linecap:round;stroke-linejoin:round;stroke-miterlimit:3;stroke-opacity:0.498674;paint-order:stroke fill markers;opacity:1"
				d="m 93.397915,114.82917 -3.439583,-3.43959 7.9375,-7.9375 3.174998,3.175 z"
				id="path96426"
			/><path
				style="fill:#a30013;fill-opacity:1;fill-rule:evenodd;stroke-width:3;stroke-linecap:round;stroke-linejoin:round;stroke-miterlimit:3;stroke-opacity:0.498674;paint-order:stroke fill markers;opacity:1"
				d="m 75.141666,115.09375 2.38125,-2.64583 h 6.614583 l 2.910417,2.64583 z"
				id="path96428"
			/><path
				style="fill:#780011;fill-opacity:1;fill-rule:evenodd;stroke-width:3;stroke-linecap:round;stroke-linejoin:round;stroke-miterlimit:3;stroke-opacity:0.498674;paint-order:stroke fill markers;opacity:1"
				d="m 38.364583,30.1625 4.497916,-5.291667 h 3.175 l 2.38125,1.852083 -5.820833,5.820834 h -4.233333 z"
				id="path96436"
			/><path
				style="fill:#780011;fill-opacity:1;fill-rule:evenodd;stroke-width:3;stroke-linecap:round;stroke-linejoin:round;stroke-miterlimit:3;stroke-opacity:0.498674;paint-order:stroke fill markers;opacity:1"
				d="m 59.266666,55.033333 10e-7,-4.7625 c -3.386615,-0.102123 -7.325943,-0.549031 -8.202084,2.116666 0.03918,2.845985 3.923412,2.889647 8.202083,2.645834 z"
				id="path96496"
			/><path
				style="fill:#780011;fill-opacity:1;fill-rule:evenodd;stroke-width:3;stroke-linecap:round;stroke-linejoin:round;stroke-miterlimit:3;stroke-opacity:0.498674;paint-order:stroke fill markers;opacity:1"
				d="m 55.033333,66.674999 2.910416,-8.466666 c -5.086089,-0.35558 -10.209283,-0.748986 -10.31875,3.96875 0.206381,5.930766 4.120438,4.601277 7.408334,4.497916 z"
				id="path96498"
			/><path
				style="fill:#780011;fill-opacity:1;fill-rule:evenodd;stroke-width:3;stroke-linecap:round;stroke-linejoin:round;stroke-miterlimit:3;stroke-opacity:0.498674;paint-order:stroke fill markers;opacity:1"
				d="m 48.154166,78.052082 6.085417,-5.820833 v -2.116667 h -7.9375 c 0.336299,2.805872 -0.795248,6.447544 1.852083,7.9375 z"
				id="path96500"
			/><path
				style="fill:#780011;fill-opacity:1;fill-rule:evenodd;stroke-width:3;stroke-linecap:round;stroke-linejoin:round;stroke-miterlimit:3;stroke-opacity:0.498674;paint-order:stroke fill markers;opacity:1"
				d="M 91.810416,83.872916 H 80.962499 l -6.085417,6.085416 h 16.933334 z"
				id="path96502"
			/><path
				style="fill:#780011;fill-opacity:1;fill-rule:evenodd;stroke-width:3;stroke-linecap:round;stroke-linejoin:round;stroke-miterlimit:3;stroke-opacity:0.498674;paint-order:stroke fill markers;opacity:1"
				d="m 100.0125,100.27708 -5.027085,-3.968748 v -3.175 h 5.027085 z"
				id="path96508"
			/><path
				style="fill:#780011;fill-opacity:1;fill-rule:evenodd;stroke-width:3;stroke-linecap:round;stroke-linejoin:round;stroke-miterlimit:3;stroke-opacity:0.498674;paint-order:stroke fill markers;opacity:1"
				d="m 89.958332,111.38958 7.9375,-7.9375 -3.96875,-3.968748 -7.9375,7.937498 z"
				id="path96510"
			/><path
				style="fill:#780011;fill-opacity:1;fill-rule:evenodd;stroke-width:3;stroke-linecap:round;stroke-linejoin:round;stroke-miterlimit:3;stroke-opacity:0.498674;paint-order:stroke fill markers;opacity:1"
				d="m 77.522916,112.44792 h 6.614583 l -1.527572,-2.64584 h -3.234928 z"
				id="path96512"
			/><path
				style="fill:#780011;fill-opacity:1;fill-rule:evenodd;stroke-width:3;stroke-linecap:round;stroke-linejoin:round;stroke-miterlimit:3;stroke-opacity:0.498674;paint-order:stroke fill markers;opacity:1"
				d="m 54.239583,72.231249 3.175,-1.322917 -3.175,-0.79375 z"
				id="path104943"
			/><path
				style="fill:#a40013;fill-opacity:1;fill-rule:evenodd;stroke-width:3;stroke-linecap:round;stroke-linejoin:round;stroke-miterlimit:3;stroke-opacity:0.498674;paint-order:stroke fill markers;opacity:1"
				d="m 49.741666,118.00417 h 2.910417 v 2.38125 h 11.1125 v -5.55625 h 6.085416 L 85.460416,99.218749 v -5.55625 -0.529167 H 64.558333 l 12.170833,-12.7 v -7.14375 c -0.670196,-1.37773 -1.368761,-2.732115 -3.175,-3.175 h -9.789583 c -7.471356,5.48558 -13.463113,12.635266 -20.108334,19.05 v 11.641668 h 30.427083 l -11.112499,11.37708 c -9.28375,-0.14604 -13.614635,1.10081 -13.229167,5.82084 z"
				id="path106464"
			/><path
				style="fill:#780011;fill-opacity:1;fill-rule:evenodd;stroke-width:3;stroke-linecap:round;stroke-linejoin:round;stroke-miterlimit:3;stroke-opacity:0.498674;paint-order:stroke fill markers;opacity:1"
				d="m 63.764583,114.82917 h 6.085419 v 5.55625 h -6.085419 z"
				id="path106519"
			/><path
				style="fill:#1e1e2e;fill-opacity:1;fill-rule:evenodd;stroke-width:3;stroke-linecap:round;stroke-linejoin:round;stroke-miterlimit:3;stroke-opacity:0.498674;paint-order:stroke fill markers;opacity:1"
				d="m 55.033333,109.00833 v 4.49792 c -7.038572,-0.82726 -9.36361,2.65318 -10.583334,7.14375 -1.780052,-8.06592 3.304952,-10.71857 10.583334,-11.64167 z"
				id="path107492"
			/><path
				style="fill:#000000;fill-opacity:1;fill-rule:evenodd;stroke-width:3;stroke-linecap:round;stroke-linejoin:round;stroke-miterlimit:3;stroke-opacity:0.498674;paint-order:stroke fill markers;opacity:1"
				d="m 44.449999,120.65 c 0.759338,-2.28374 0.154932,-5.13997 4.497918,-6.61458 2.513274,-1.02987 4.391049,-0.94096 6.085416,-0.52917 -6.793207,-0.36489 -8.740206,3.34576 -10.583334,7.14375 z"
				id="path112198"
			/><path
				style="fill:#5d1819;fill-opacity:1;fill-rule:evenodd;stroke-width:3;stroke-linecap:round;stroke-linejoin:round;stroke-miterlimit:3;stroke-opacity:0.498674;paint-order:stroke fill markers;opacity:1"
				d="M 122.2375,12.435417 125.14792,7.14375 H 112.7125 v 3.175 z"
				id="path115642"
			/><path
				style="fill:#a57e51;fill-opacity:1;fill-rule:evenodd;stroke-width:3;stroke-linecap:round;stroke-linejoin:round;stroke-miterlimit:3;stroke-opacity:0.498674;paint-order:stroke fill markers;opacity:1"
				d="m 97.895832,12.435417 c -3.284651,2.827296 -6.157069,5.856161 -5.55625,10.583333 l 3.175,5.291666 c -4.046873,2.30861 -7.374508,5.526722 -8.202083,11.90625 l 1.852083,7.408333 c -5.422944,1.407821 -11.018078,1.30747 -15.875,7.672917 H 69.056249 V 49.477083 L 82.020832,25.135416 V 10.583333 Z"
				id="path121921"
			/><path
				style="fill:#976b4b;fill-opacity:1;fill-rule:evenodd;stroke-width:3;stroke-linecap:round;stroke-linejoin:round;stroke-miterlimit:3;stroke-opacity:0.498674;paint-order:stroke fill markers;opacity:1"
				d="m 69.320833,50.8 c 4.814472,-3.097827 9.151726,-7.591062 14.816667,-8.202083 0,0 -2.363873,-6.056591 -1.322917,-8.73125 2.792151,-5.442979 5.350565,-6.135846 7.9375,-7.408333 -2.204861,-2.557639 -6.350653,-5.101994 -6.879167,-7.672918 0.141262,-2.416512 1.573029,-4.366185 2.910416,-6.349999 L 84.950246,9.2604166 H 59.531249 L 61.303622,15.875 78.052082,32.623461 72.710669,42.333334 C 71.580724,45.155556 69.252793,47.725222 69.320833,50.8 Z"
				id="path121297"
			/><path
				style="fill:#77010e;fill-opacity:1;fill-rule:evenodd;stroke-width:3;stroke-linecap:round;stroke-linejoin:round;stroke-miterlimit:3;stroke-opacity:0.498674;paint-order:stroke fill markers;opacity:1"
				d="m 48.418749,10.31875 2.116667,2.116667 H 122.2375 l 1.22206,-2.116667 H 112.7125 V 7.1437499 h -3.43958 V 10.31875 h -7.40834 v -3.175 h -3.174997 l -10e-7,3.175 h -8.466666 l 10e-7,-3.175 h -3.175 l -10e-7,3.175 h -8.202084 l 10e-7,-3.175 h -2.910416 l -10e-7,3.175 z"
				id="path112200"
			/><path
				style="fill:#ffffff;fill-opacity:1;fill-rule:evenodd;stroke-width:3;stroke-linecap:round;stroke-linejoin:round;stroke-miterlimit:3;stroke-opacity:0.498674;paint-order:stroke fill markers;opacity:1"
				d="m 48.418749,10.31875 3.96875,-3.1750001 h 6.614584 l -2.38125,3.1750001 z"
				id="path115162"
			/><path
				style="fill:#c8b7a3;fill-opacity:1;fill-rule:evenodd;stroke-width:3;stroke-linecap:round;stroke-linejoin:round;stroke-miterlimit:3;stroke-opacity:0.498674;paint-order:stroke fill markers;opacity:1"
				d="M 56.620833,10.31875 H 75.935416 V 7.4083332 7.1437499 H 59.002083 Z"
				id="path115164"
			/><path
				style="fill:#c8b7a3;fill-opacity:1;fill-rule:evenodd;stroke-width:3;stroke-linecap:round;stroke-linejoin:round;stroke-miterlimit:3;stroke-opacity:0.498674;paint-order:stroke fill markers;opacity:1"
				d="M 78.845832,10.31875 V 7.1437499 h 8.202084 V 10.31875 Z"
				id="path115634"
			/><path
				style="fill:#c8b7a3;fill-opacity:1;fill-rule:evenodd;stroke-width:3;stroke-linecap:round;stroke-linejoin:round;stroke-miterlimit:3;stroke-opacity:0.498674;paint-order:stroke fill markers;opacity:1"
				d="m 90.222916,10.31875 10e-7,-3.175 h 8.466666 l -10e-7,3.175 z"
				id="path115636"
			/><path
				style="fill:#c8b7a3;fill-opacity:1;fill-rule:evenodd;stroke-width:3;stroke-linecap:round;stroke-linejoin:round;stroke-miterlimit:3;stroke-opacity:0.498674;paint-order:stroke fill markers;opacity:1"
				d="m 101.86458,10.31875 v -3.175 h 7.40834 v 3.175 z"
				id="path115638"
			/><path
				style="fill:#5d1819;fill-opacity:1;fill-rule:evenodd;stroke-width:3;stroke-linecap:round;stroke-linejoin:round;stroke-miterlimit:3;stroke-opacity:0.498674;paint-order:stroke fill markers;opacity:1"
				d="m 60.854167,12.435417 h 4.497916 l 9.524999,3.968749 10.054167,3.96875 10.583333,3.439584 10.318748,3.96875 11.37709,3.439583 c -0.315,0.834586 0.12317,2.258164 -2.11667,1.5875 L 113.24167,33.304596 63.499999,15.875 Z"
				id="path117269"
			/><path
				style="fill:#780011;fill-opacity:1;fill-rule:evenodd;stroke-width:3;stroke-linecap:round;stroke-linejoin:round;stroke-miterlimit:3;stroke-opacity:0.498674;paint-order:stroke fill markers;opacity:1"
				d="m 58.737499,12.435417 5.820834,5.027083 50.270837,17.4625 0.26458,-2.116667 -6.87917,-2.38125 0,0 -3.175,-1.322916 0,0.0658 -7.672915,-2.711638 2e-6,0 -2.910417,-1.322916 -10e-7,-1e-6 -6.879167,-2.38125 10e-7,10e-7 -3.96875,-0.79375 -10e-7,-1e-6 -6.879166,-2.645833 10e-7,0 -3.175,-1.322916 -1e-6,-1e-6 -12.7,-5.556249 z"
				id="path116370"
			/><path
				style="fill:#77010e;fill-opacity:1;fill-rule:evenodd;stroke-width:3;stroke-linecap:round;stroke-linejoin:round;stroke-miterlimit:3;stroke-opacity:0.498674;paint-order:stroke fill markers;opacity:1"
				d="m 65.352083,55.297916 h 3.704166 v -4.7625 L 83.476041,36.115625 59.795833,12.435417 h -3.704167 l 3.513418,6.085416 17.124082,17.197917 -10.583334,11.906249 -2.116666,3.96875 z"
				id="path119169"
			/><path
				style="fill:#5d1819;fill-opacity:1;fill-rule:evenodd;stroke-width:3;stroke-linecap:round;stroke-linejoin:round;stroke-miterlimit:3;stroke-opacity:0.498674;paint-order:stroke fill markers;opacity:1"
				d="m 105.56875,61.118749 0.70895,-2.645833 -2.82562,-3.175 -2.38125,-2.116667 -5.027081,-4.7625 -7.672917,-7.408333 -7.408333,-7.408333 v 3.439586 l 3.704167,3.704166 6.879164,6.879164 5.820833,5.820834 7.672917,7.672919 z"
				id="path117626"
			/><path
				style="fill:#77010e;fill-opacity:1;fill-rule:evenodd;stroke-width:3;stroke-linecap:round;stroke-linejoin:round;stroke-miterlimit:3;stroke-opacity:0.498674;paint-order:stroke fill markers;opacity:1"
				d="m 80.962499,37.041666 3.704167,3.175 10e-7,1e-6 2.116666,2.116666 h -10e-7 l 4.7625,4.7625 h 10e-7 l 2.910417,2.38125 h -10e-7 l 4.497916,4.7625 h 2e-6 l 2.910413,3.439584 v -10e-7 l 3.70417,3.439583 v 2.910417 L 82.285416,40.745833 c -0.838881,-2.602344 -1.004442,-2.367275 -1.322917,-3.704167 z"
				id="path117271"
			/><path
				style="fill:#5d1819;fill-opacity:1;fill-rule:evenodd;stroke-width:3;stroke-linecap:round;stroke-linejoin:round;stroke-miterlimit:3;stroke-opacity:0.498674;paint-order:stroke fill markers;opacity:1"
				d="m 65.352083,55.297916 v -5.027083 c 4.498501,-5.027074 9.578444,-10.044615 13.493749,-15.08125 L 56.091666,12.435417 h -5.55625 l 0.458272,0.79375 h 2.452145 l 22.224999,22.224999 -12.435416,14.2875 v 5.55625 z"
				id="path119113"
			/><path
				style="fill:#77010e;fill-opacity:1;fill-rule:evenodd;stroke-width:3;stroke-linecap:round;stroke-linejoin:round;stroke-miterlimit:3;stroke-opacity:0.498674;paint-order:stroke fill markers;opacity:1"
				d="m 53.445833,13.229167 h -2.452145 l -0.458272,-0.793749 h 3.439583 z"
				id="path119772"
			/><path
				style="fill:#77010e;fill-opacity:1;fill-rule:evenodd;stroke-width:3;stroke-linecap:round;stroke-linejoin:round;stroke-miterlimit:3;stroke-opacity:0.498674;paint-order:stroke fill markers;opacity:1"
				d="m 53.445833,13.229167 h 3.439583 l -1.058333,-1.058333 h -2.38125 z"
				id="path119843"
			/><path
				style="fill:#770011;fill-opacity:1;fill-rule:evenodd;stroke-width:3;stroke-linecap:round;stroke-linejoin:round;stroke-miterlimit:3;stroke-opacity:0.498674;paint-order:stroke fill markers;opacity:1"
				d="m 116.94583,48.683333 v -6.35 l -1.85208,1.0693 v 6.8682 z"
				id="path124906"
			/><path
				style="fill:#d20f39;fill-opacity:1;fill-rule:evenodd;stroke-width:3;stroke-linecap:round;stroke-linejoin:round;stroke-miterlimit:3;stroke-opacity:0.498674;paint-order:stroke fill markers;opacity:1"
				d="m 116.94583,47.360416 v -6.879167 l 3.175,-1.322916 -0.26458,6.614583 z"
				id="path124910"
			/><path
				style="fill:#d20f39;fill-opacity:1;fill-rule:evenodd;stroke-width:3;stroke-linecap:round;stroke-linejoin:round;stroke-miterlimit:3;stroke-opacity:0.498674;paint-order:stroke fill markers;opacity:1"
				d="m 119.85625,57.943749 v -7.14375 l -2.38125,1.374815 v 5.768935 z"
				id="path126293"
			/><path
				style="fill:#d20f39;fill-opacity:1;fill-rule:evenodd;stroke-width:3;stroke-linecap:round;stroke-linejoin:round;stroke-miterlimit:3;stroke-opacity:0.498674;paint-order:stroke fill markers;opacity:1"
				d="m 117.21042,80.9625 v -6.35 l 2.64583,-1.639399 v 6.666481 z"
				id="path126297"
			/><path
				style="fill:#d20f39;fill-opacity:1;fill-rule:evenodd;stroke-width:3;stroke-linecap:round;stroke-linejoin:round;stroke-miterlimit:3;stroke-opacity:0.498674;paint-order:stroke fill markers;opacity:1"
				d="m 117.21042,92.074999 v -6.085417 l 2.64583,-1.527572 v 6.554656 z"
				id="path126299"
			/><path
				style="fill:#d20f39;fill-opacity:1;fill-rule:evenodd;stroke-width:3;stroke-linecap:round;stroke-linejoin:round;stroke-miterlimit:3;stroke-opacity:0.498674;paint-order:stroke fill markers;opacity:1"
				d="m 116.94583,102.92292 h 3.175 v -7.143755 h -3.175 z"
				id="path126303"
			/><path
				style="fill:#770011;fill-opacity:1;fill-rule:evenodd;stroke-width:3;stroke-linecap:round;stroke-linejoin:round;stroke-miterlimit:3;stroke-opacity:0.498674;paint-order:stroke fill markers;opacity:1"
				d="m 117.475,53.181249 -2.29136,1.322917 v 6.614583 l 2.29136,-3.175 z"
				id="path126305"
			/><path
				style="fill:#770011;fill-opacity:1;fill-rule:evenodd;stroke-width:3;stroke-linecap:round;stroke-linejoin:round;stroke-miterlimit:3;stroke-opacity:0.498674;paint-order:stroke fill markers;opacity:1"
				d="m 115.35833,83.872916 1.85209,-1.852084 v -5.55625 h -2.38125 v 7.408334 z"
				id="path127413"
			/><path
				style="fill:#770011;fill-opacity:1;fill-rule:evenodd;stroke-width:3;stroke-linecap:round;stroke-linejoin:round;stroke-miterlimit:3;stroke-opacity:0.498674;paint-order:stroke fill markers;opacity:1"
				d="m 117.21042,92.074999 -2.11667,3.175 v -6.879167 l 2.11667,-1.5875 z"
				id="path127415"
			/><path
				style="fill:#770011;fill-opacity:1;fill-rule:evenodd;stroke-width:3;stroke-linecap:round;stroke-linejoin:round;stroke-miterlimit:3;stroke-opacity:0.498674;paint-order:stroke fill markers;opacity:1"
				d="m 116.94583,102.92292 -1.5875,2.91041 v -6.614581 h 1.5875 z"
				id="path127417"
			/><path
				style="fill:#760011;fill-opacity:1;fill-rule:evenodd;stroke-width:3.19374;stroke-linecap:round;stroke-linejoin:round;stroke-miterlimit:3;stroke-opacity:0.498674;paint-order:stroke fill markers;opacity:1"
				d="M 115.09375,115.62292 V 111.125 h 2.11667 v 4.49792 z"
				id="path127419"
			/><path
				style="fill:#d20f39;fill-opacity:1;fill-rule:evenodd;stroke-width:3;stroke-linecap:round;stroke-linejoin:round;stroke-miterlimit:3;stroke-opacity:0.498674;paint-order:stroke fill markers;opacity:1"
				d="m 116.68125,111.125 v -2.64583 l 3.2079,-1.85209 v 11.90625 c -0.87889,1.88933 -2.75819,2.42453 -4.50113,2.63799 -1.74595,0.21381 -3.37273,-0.49549 -4.79219,-2.63799 l -2.91041,-2.91041 h 8.99583 z"
				id="path127421"
			/><path
				style="fill:#d20f39;fill-opacity:1;fill-rule:evenodd;stroke-width:3;stroke-linecap:round;stroke-linejoin:round;stroke-miterlimit:3;stroke-opacity:0.498674;paint-order:stroke fill markers;opacity:1"
				d="m 117.475,35.983333 2.38125,-1.680329 v -4.405088 l -2.64583,1.322917 v 4.7625 z"
				id="path136563"
			/><path
				style="fill:#d20f39;fill-opacity:1;fill-rule:evenodd;stroke-width:3;stroke-linecap:round;stroke-linejoin:round;stroke-miterlimit:3;stroke-opacity:0.498674;paint-order:stroke fill markers;opacity:1"
				d="m 117.21042,70.008242 v -6.35 l 2.64583,-1.639399 v 6.666481 z"
				id="path137319"
			/><path
				style="fill:#770011;fill-opacity:1;fill-rule:evenodd;stroke-width:3;stroke-linecap:round;stroke-linejoin:round;stroke-miterlimit:3;stroke-opacity:0.498674;paint-order:stroke fill markers;opacity:1"
				d="m 115.35833,72.918658 1.85209,-1.852084 v -5.55625 h -2.38125 v 7.408334 z"
				id="path137321"
			/><path
				style="opacity:1;fill:#5d1819;fill-opacity:1;fill-rule:evenodd;stroke-width:3;stroke-linecap:round;stroke-linejoin:round;stroke-miterlimit:3;stroke-opacity:0.498674;paint-order:stroke fill markers"
				d="M 112.7125,10.31875 V 7.1437499 H 52.387499 l -3.96875,3.1750001 z"
				id="path161128"
			/><path
				style="fill:#d20f39;fill-opacity:1;fill-rule:evenodd;stroke-width:3;stroke-linecap:round;stroke-linejoin:round;stroke-miterlimit:3;stroke-opacity:0.498674;paint-order:stroke fill markers;opacity:1"
				d="m 17.991666,64.029166 v -5.55625 l -7.937499,-17.991667 2.116666,-1.058333 c 2.737431,6.683325 3.853164,12.338113 11.641667,22.225 h 1.852083 v 2.38125 z"
				id="path16933"
			/><path
				style="fill:#ebeaea;fill-opacity:1;fill-rule:evenodd;stroke-width:3;stroke-linecap:round;stroke-linejoin:round;stroke-miterlimit:3;stroke-opacity:0.498674;paint-order:stroke fill markers;opacity:1"
				d="m 31.75,56.356249 h -6.085417 v 2.645834 C 29.413349,58.833096 31.286904,57.886947 31.75,56.356249 Z"
				id="path66388"
			/><path
				style="opacity:1;fill:#a40013;fill-opacity:1;fill-rule:evenodd;stroke-width:3;stroke-linecap:round;stroke-linejoin:round;stroke-miterlimit:3;stroke-opacity:0.498674;paint-order:stroke fill markers"
				d="M 43.920833,51.064583 36.777083,37.835416 27.78125,30.427083 v 9.30852 l 9.082116,5.243563 4.14705,5.291667 1.322917,1.322916 z"
				id="path28789"
			/><path
				style="fill:#ebeaea;fill-opacity:1;fill-rule:evenodd;stroke-width:3;stroke-linecap:round;stroke-linejoin:round;stroke-miterlimit:3;stroke-opacity:0.498674;paint-order:stroke fill markers;opacity:1"
				d="M 25.664583,50.799999 H 34.13125 L 31.75,53.181249 h -6.085417 z"
				id="path66390"
			/><path
				style="opacity:1;fill:#a40013;fill-opacity:1;fill-rule:evenodd;stroke-width:3;stroke-linecap:round;stroke-linejoin:round;stroke-miterlimit:3;stroke-opacity:0.498674;paint-order:stroke fill markers"
				d="M 12.170833,39.422916 7.9374999,23.623901 v -6.425985 l 4.2333331,3.96875 z"
				id="path28791"
			/><path
				style="opacity:1;fill:#a40013;fill-opacity:1;fill-rule:evenodd;stroke-width:3;stroke-linecap:round;stroke-linejoin:round;stroke-miterlimit:3;stroke-opacity:0.498674;paint-order:stroke fill markers"
				d="M 43.391666,44.449999 46.302083,47.625 39.422917,45.772916 36.777083,37.835417 42.06875,43.127082 Z"
				id="path29002"
			/><path
				style="opacity:1;fill:#a40013;fill-opacity:1;fill-rule:evenodd;stroke-width:3;stroke-linecap:round;stroke-linejoin:round;stroke-miterlimit:3;stroke-opacity:0.498674;paint-order:stroke fill markers"
				d="M 46.302083,47.624999 27.78125,36.931991 41.010416,47.624999 Z"
				id="path29211"
			/><path
				style="opacity:1;fill:#d20f39;fill-opacity:1;fill-rule:evenodd;stroke-width:4.08248;stroke-linecap:round;stroke-linejoin:round;stroke-miterlimit:3;stroke-opacity:0.498674;paint-order:stroke fill markers"
				d="M 7.9374999,29.104167 H 10.295166 V 19.304783 L 7.0872635,15.875 v 9.799382 z"
				id="path31172"
			/><path
				style="opacity:1;fill:#581618;fill-opacity:1;fill-rule:evenodd;stroke-width:3;stroke-linecap:round;stroke-linejoin:round;stroke-miterlimit:3;stroke-opacity:0.498674;paint-order:stroke fill markers"
				d="M 12.170833,21.166666 9.7895833,16.139583 C 8.3891907,15.808285 9.5968631,28.655621 10.583333,29.104167 Z"
				id="path30821"
			/><path
				style="opacity:1;fill:#581618;fill-opacity:1;fill-rule:evenodd;stroke-width:3;stroke-linecap:round;stroke-linejoin:round;stroke-miterlimit:3;stroke-opacity:0.498674;paint-order:stroke fill markers"
				d="m 7.9374999,17.197916 1.8520833,0.529167"
				id="path31168"
			/><path
				style="opacity:1;fill:#780011;fill-opacity:1;fill-rule:evenodd;stroke-width:5;stroke-linecap:round;stroke-linejoin:round;stroke-miterlimit:3;stroke-opacity:0.498674;paint-order:stroke fill markers"
				d="M 63.764584,75.318055 H 69.05625 L 66.410417,78.40486 Z"
				id="path32066"
			/><path
				style="opacity:1;fill:#780011;fill-opacity:1;fill-rule:evenodd;stroke-width:5;stroke-linecap:round;stroke-linejoin:round;stroke-miterlimit:3;stroke-opacity:0.498674;paint-order:stroke fill markers"
				d="m 70.64375,75.318055 h 5.291666 l -2.645833,3.086805 z"
				id="path32070"
			/><path
				style="opacity:1;fill:#780011;fill-opacity:1;fill-rule:evenodd;stroke-width:5;stroke-linecap:round;stroke-linejoin:round;stroke-miterlimit:3;stroke-opacity:0.498674;paint-order:stroke fill markers"
				d="m 66.939583,80.697917 h 5.291666 l -2.645833,3.086805 z"
				id="path32072"
			/><path
				style="opacity:1;fill:#f38ba8;fill-opacity:1;fill-rule:evenodd;stroke-width:3;stroke-linecap:round;stroke-linejoin:round;stroke-miterlimit:3;stroke-opacity:0.498674;paint-order:stroke fill markers"
				d="m 24.60625,49.741667 h -1.5875 l 0,-2.645834 c 0.920285,0.07772 1.398278,1.599667 1.5875,2.645834 z"
				id="path36820"
			/><path
				style="opacity:1;fill:#5d1819;fill-opacity:1;fill-rule:evenodd;stroke-width:3;stroke-linecap:round;stroke-linejoin:round;stroke-miterlimit:3;stroke-opacity:0.498674;paint-order:stroke fill markers"
				d="M 116.41667,33.072916 60.854166,12.435417 h 4.497917 l 51.858337,18.785416 z"
				id="path40931"
			/><path
				style="opacity:1;fill:#5d1819;fill-opacity:1;fill-rule:evenodd;stroke-width:3;stroke-linecap:round;stroke-linejoin:round;stroke-miterlimit:3;stroke-opacity:0.498674;paint-order:stroke fill markers"
				d="m 116.41667,33.072916 h 0.79375 v -1.852083 l -1.05834,0.264583 z"
				id="path40933"
			/><path
				style="opacity:1;fill:#77010e;fill-opacity:1;fill-rule:evenodd;stroke-width:3;stroke-linecap:round;stroke-linejoin:round;stroke-miterlimit:3;stroke-opacity:0.498674;paint-order:stroke fill markers"
				d="M 60.854166,12.435417 116.41667,33.072916 116.15208,33.3375 112.18333,33.072916 60.589583,13.49375 Z"
				id="path40935"
			/><path
				style="opacity:1;fill:#77010e;fill-opacity:1;fill-rule:evenodd;stroke-width:3;stroke-linecap:round;stroke-linejoin:round;stroke-miterlimit:3;stroke-opacity:0.498674;paint-order:stroke fill markers"
				d="M 105.56875,61.118749 79.904166,35.454166 V 36.5125 l 25.664584,25.664583 z"
				id="path41144"
			/><path
				style="opacity:1;fill:#77010e;fill-opacity:1;fill-rule:evenodd;stroke-width:3;stroke-linecap:round;stroke-linejoin:round;stroke-miterlimit:3;stroke-opacity:0.498674;paint-order:stroke fill markers"
				d="m 82.285416,40.745833 -2.38125,-2.38125 1.5875,-0.425371"
				id="path41284"
			/><path
				style="opacity:1;fill:#d20f39;fill-opacity:1;fill-rule:evenodd;stroke-width:3;stroke-linecap:round;stroke-linejoin:round;stroke-miterlimit:3;stroke-opacity:0.498674;paint-order:stroke fill markers"
				d="M 35.189583,118.00417 H 18.785416 l -2.38125,2.64583 h 18.25625 c 1e-6,0 0.529167,-2.64583 0.529167,-2.64583 z"
				id="path42012"
			/><path
				style="opacity:1;fill:#d20f39;fill-opacity:1;fill-rule:evenodd;stroke-width:3;stroke-linecap:round;stroke-linejoin:round;stroke-miterlimit:3;stroke-opacity:0.498674;paint-order:stroke fill markers"
				d="M 10.583333,117.73958 14.2875,114.03542 V 99.218749 h -3.439583 -0.264584 z"
				id="path42014"
			/><path
				style="opacity:1;fill:#d20f39;fill-opacity:1;fill-rule:evenodd;stroke-width:3;stroke-linecap:round;stroke-linejoin:round;stroke-miterlimit:3;stroke-opacity:0.498674;paint-order:stroke fill markers"
				d="m 10.583333,93.927082 h 2.645834 v -8.466666 h -3.175 v 8.466666 z"
				id="path42016"
			/><path
				style="opacity:1;fill:#780011;fill-opacity:1;fill-rule:evenodd;stroke-width:3;stroke-linecap:round;stroke-linejoin:round;stroke-miterlimit:3;stroke-opacity:0.498674;paint-order:stroke fill markers"
				d="m 22.489583,114.03542 3.96875,-3.96875 h 15.875 c -2.204962,1.63888 -4.527775,3.18284 -5.820833,5.55625 l -13.758334,-0.79375 z"
				id="path42389"
			/><path
				style="opacity:1;fill:#a40013;fill-opacity:1;fill-rule:evenodd;stroke-width:3;stroke-linecap:round;stroke-linejoin:round;stroke-miterlimit:3;stroke-opacity:0.498674;paint-order:stroke fill markers"
				d="m 35.189583,118.00417 1.680329,-2.91042 -14.380329,-1.05833 -3.704167,3.96875 z"
				id="path42304"
			/><path
				style="opacity:1;fill:#a40013;fill-opacity:1;fill-rule:evenodd;stroke-width:3;stroke-linecap:round;stroke-linejoin:round;stroke-miterlimit:3;stroke-opacity:0.498674;paint-order:stroke fill markers"
				d="m 14.2875,114.03542 4.497916,-4.49792 V 99.218749 H 14.2875 Z"
				id="path42383"
			/><path
				style="opacity:1;fill:#a40013;fill-opacity:1;fill-rule:evenodd;stroke-width:3;stroke-linecap:round;stroke-linejoin:round;stroke-miterlimit:3;stroke-opacity:0.498674;paint-order:stroke fill markers"
				d="m 13.229167,93.927082 h 5.556249 v -8.466666 h -5.556249 z"
				id="path42385"
			/><path
				style="opacity:1;fill:#780011;fill-opacity:1;fill-rule:evenodd;stroke-width:3;stroke-linecap:round;stroke-linejoin:round;stroke-miterlimit:3;stroke-opacity:0.498674;paint-order:stroke fill markers"
				d="m 18.785416,109.5375 3.96875,-3.175 v -7.143751 h -3.96875 z"
				id="path42391"
			/><path
				style="opacity:1;fill:#780011;fill-opacity:1;fill-rule:evenodd;stroke-width:3;stroke-linecap:round;stroke-linejoin:round;stroke-miterlimit:3;stroke-opacity:0.498674;paint-order:stroke fill markers"
				d="M 18.785416,93.927082 H 23.01875 V 85.460416 H 18.785416 Z"
				id="path42393"
			/><path
				style="opacity:1;fill:#1e1e2e;fill-opacity:1;fill-rule:evenodd;stroke-width:3;stroke-linecap:round;stroke-linejoin:round;stroke-miterlimit:3;stroke-opacity:0.498674;paint-order:stroke fill markers"
				d="m 10.583333,99.218749 c -3.7687858,0.525182 -5.4930246,6.714601 -7.6729164,11.641671 2.6541002,-1.25273 5.9278873,-3.75428 7.6729164,-3.175 z"
				id="path42395"
			/><path
				style="opacity:1;fill:#1e1e2e;fill-opacity:1;fill-rule:evenodd;stroke-width:3;stroke-linecap:round;stroke-linejoin:round;stroke-miterlimit:3;stroke-opacity:0.498674;paint-order:stroke fill markers"
				d="m 10.054167,93.927082 c -2.7172745,0.654357 -4.5681669,1.991752 -6.6145837,3.175 C 5.3738085,91.10281 7.5236685,86.86194 10.054167,85.724999 Z"
				id="path42613"
			/><path
				style="opacity:1;fill:#1e1e2e;fill-opacity:1;fill-rule:evenodd;stroke-width:3;stroke-linecap:round;stroke-linejoin:round;stroke-miterlimit:3;stroke-opacity:0.498674;paint-order:stroke fill markers"
				d="m 14.816666,82.549999 c -1.130796,0.726273 -2.565486,0.582746 -3.968749,0.529167 1.029214,-6.661223 5.85751,-10.234587 12.699999,-12.170834 0.0429,1.446292 0.07456,2.889567 -0.264583,4.233334 z"
				id="path42615"
			/><path
				style="opacity:1;fill:#a40013;fill-opacity:1;fill-rule:evenodd;stroke-width:3;stroke-linecap:round;stroke-linejoin:round;stroke-miterlimit:3;stroke-opacity:0.498674;paint-order:stroke fill markers"
				d="m 23.283333,82.549999 v -7.408333 c -3.528091,1.763985 -6.350122,4.233621 -8.466667,7.408333 z"
				id="path42387"
			/></g
		></svg
	>
</div>
