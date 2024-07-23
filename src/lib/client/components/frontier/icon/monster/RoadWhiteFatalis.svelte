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
				id="filter125646"
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
					id="feComposite125632"
				/><feColorMatrix
					in="composite1"
					values="1"
					type="saturate"
					result="colormatrix1"
					id="feColorMatrix125634"
				/><feFlood
					flood-opacity="1"
					flood-color="rgb(0,0,0)"
					result="flood1"
					id="feFlood125636"
				/><feBlend
					in="flood1"
					in2="colormatrix1"
					mode="multiply"
					result="blend1"
					id="feBlend125638"
				/><feBlend
					in2="blend1"
					mode="screen"
					result="blend2"
					id="feBlend125640"
				/><feColorMatrix
					in="blend2"
					values="1"
					type="saturate"
					result="colormatrix2"
					id="feColorMatrix125642"
				/><feComposite
					in="colormatrix2"
					in2="SourceGraphic"
					operator="in"
					k2="1"
					result="composite2"
					id="feComposite125644"
				/></filter
			><filter
				style="color-interpolation-filters:sRGB;"
				id="filter134145"
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
					id="feComposite134131"
				/><feColorMatrix
					in="composite1"
					values="1"
					type="saturate"
					result="colormatrix1"
					id="feColorMatrix134133"
				/><feFlood
					flood-opacity="1"
					flood-color="rgb(0,0,0)"
					result="flood1"
					id="feFlood134135"
				/><feBlend
					in="flood1"
					in2="colormatrix1"
					mode="multiply"
					result="blend1"
					id="feBlend134137"
				/><feBlend
					in2="blend1"
					mode="screen"
					result="blend2"
					id="feBlend134139"
				/><feColorMatrix
					in="blend2"
					values="1"
					type="saturate"
					result="colormatrix2"
					id="feColorMatrix134141"
				/><feComposite
					in="colormatrix2"
					in2="SourceGraphic"
					operator="in"
					k2="1"
					result="composite2"
					id="feComposite134143"
				/></filter
			><filter
				style="color-interpolation-filters:sRGB;"
				id="filter193050"
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
					id="feComposite193036"
				/><feColorMatrix
					in="composite1"
					values="1"
					type="saturate"
					result="colormatrix1"
					id="feColorMatrix193038"
				/><feFlood
					flood-opacity="1"
					flood-color="rgb(0,0,0)"
					result="flood1"
					id="feFlood193040"
				/><feBlend
					in="flood1"
					in2="colormatrix1"
					mode="multiply"
					result="blend1"
					id="feBlend193042"
				/><feBlend
					in2="blend1"
					mode="screen"
					result="blend2"
					id="feBlend193044"
				/><feColorMatrix
					in="blend2"
					values="1"
					type="saturate"
					result="colormatrix2"
					id="feColorMatrix193046"
				/><feComposite
					in="colormatrix2"
					in2="SourceGraphic"
					operator="in"
					k2="1"
					result="composite2"
					id="feComposite193048"
				/></filter
			></defs
		>
		<!-- svelte-ignore a11y-no-static-element-interactions -->
		<!-- svelte-ignore a11y-mouse-events-have-key-events -->
		<g id="layer1"
			><g
				id="g192671"
				style="filter:url(#filter193050)"
				transform="translate(1.0583333,1.5875)"
				><path
					style="fill:#b6bfc1;fill-opacity:1;fill-rule:evenodd;stroke-width:3;stroke-linecap:round;stroke-linejoin:round;stroke-miterlimit:3;stroke-opacity:0.498674;paint-order:stroke fill markers"
					d="M 87.312499,95.249999 115.09375,83.343749 113.77083,15.875 103.1875,11.90625 83.343749,21.166666 84.666666,31.75 l 14.552083,17.197916 -14.552083,19.84375 -5.291667,7.9375 z"
					id="path192273"
				/><path
					style="fill:#90a2a7;fill-opacity:1;fill-rule:evenodd;stroke-width:3;stroke-linecap:round;stroke-linejoin:round;stroke-miterlimit:3;stroke-opacity:0.498674;paint-order:stroke fill markers"
					d="m 86.518749,29.36875 c 1.305793,-1.01551 2.923359,-1.456266 3.704167,-3.439584 -0.5208,-1.738822 -0.135539,-3.060945 0,-4.497916 l 2.38125,-0.264584 c 0.832576,-1.819153 1.407163,-3.927109 2.645833,-5.291666 2.854713,0.655683 4.679101,2.369248 6.614581,3.96875 1.09234,-1.958167 2.95282,-3.189711 5.29167,-3.96875 2.11319,1.409441 3.87887,3.171514 5.29167,5.291666 l 1.32291,-3.96875 -7.9375,-6.614583 H 75.406249 l -1.322917,3.96875 5.291667,7.9375 z"
					id="path192275"
				/><path
					style="fill:#757574;fill-opacity:1;fill-rule:evenodd;stroke-width:3;stroke-linecap:round;stroke-linejoin:round;stroke-miterlimit:3;stroke-opacity:0.498674;paint-order:stroke fill markers"
					d="m 59.531249,28.045833 8.202083,-4.7625 -5.027083,5.820833 9.525,-2.910416 -3.96875,4.233333 9.525,-1.852083 c -2.76267,1.057771 -4.367926,2.590591 -6.35,3.96875 h 3.175 c 2.261896,-0.968111 4.109211,0.409792 6.085417,1.058333 -2.118241,-0.203516 -4.237524,-0.599978 -6.35,0.264583 l 1.5875,2.116667 c 2.177615,0.276944 3.545275,0.960902 5.027083,1.5875 -1.795233,-0.178385 -3.546643,-0.494277 -5.55625,0 l 0.79375,2.38125 c 2.257544,0.126664 3.890116,1.009682 5.55625,1.852083 -1.785951,-0.32866 -3.466056,-0.761757 -5.820833,-0.529167 l 0.264583,2.645834 c 2.368376,1.066976 4.128102,2.372445 5.820833,3.704166 -2.05681,-0.655315 -3.86272,-1.469721 -6.35,-1.852083 l 0.529167,2.910417 6.879167,5.291666 -7.9375,-1.852083 1.058333,3.704167 6.085417,4.233333 -6.35,-1.852083 -1.5875,-2.645834 -4.233334,-17.197916 z"
					id="path192277"
				/><path
					style="fill:#f1f0ea;fill-opacity:1;fill-rule:evenodd;stroke-width:3;stroke-linecap:round;stroke-linejoin:round;stroke-miterlimit:3;stroke-opacity:0.498674;paint-order:stroke fill markers"
					d="m 74.083332,78.052082 v -4.7625 l -1.058333,-1.058333 v -6.085417 c 1.440193,-1.803866 3.560807,-3.448061 3.704167,-5.556249 V 37.041666 c -0.575361,-5.18908 -3.621653,-8.219208 -8.73125,-8.73125 l -9.789583,-0.264583 -3.96875,2.291358 v 8.027392 l 13.229166,2.645833 -1.322917,17.197917 -6.614583,7.937499 2.645834,17.197917 11.906249,-3.96875 z"
					id="path192279"
				/><path
					style="fill:#b2b8b0;fill-opacity:1;fill-rule:evenodd;stroke-width:3;stroke-linecap:round;stroke-linejoin:round;stroke-miterlimit:3;stroke-opacity:0.498674;paint-order:stroke fill markers"
					d="m 55.297916,37.30625 13.49375,-0.264584 v 19.84375 l -5.291667,7.9375 V 78.052082 H 70.90833 V 108.47917 H 39.6875 l 7.937499,-31.750004 1.5875,-7.14375 3.704167,-8.202083 11.1125,-6.415805 V 41.010416 h -7.14375 l -2.645833,2.645833 H 38.1 l 2.910416,-2.645833 6.614583,-2.645833 z"
					id="path192281"
				/><path
					style="fill:#7f887d;fill-opacity:1;fill-rule:evenodd;stroke-width:3;stroke-linecap:round;stroke-linejoin:round;stroke-miterlimit:3;stroke-opacity:0.498674;paint-order:stroke fill markers"
					d="m 47.889583,75.406249 0.529166,-2.38125 3.439584,-1.5875 z"
					id="path192283"
				/><path
					style="fill:#7f887d;fill-opacity:1;fill-rule:evenodd;stroke-width:3;stroke-linecap:round;stroke-linejoin:round;stroke-miterlimit:3;stroke-opacity:0.498674;paint-order:stroke fill markers"
					d="m 49.2125,69.585417 3.174999,-1.322918 -3.439583,2.910417 z"
					id="path192285"
				/><path
					style="fill:#eae7dc;fill-opacity:1;fill-rule:evenodd;stroke-width:3;stroke-linecap:round;stroke-linejoin:round;stroke-miterlimit:3;stroke-opacity:0.498674;paint-order:stroke fill markers"
					d="m 47.624999,77.258332 1.852084,-8.202083 -6.614584,4.497917 0.264584,4.7625 z"
					id="path192287"
				/><path
					style="fill:#1d150f;fill-opacity:1;fill-rule:evenodd;stroke-width:3;stroke-linecap:round;stroke-linejoin:round;stroke-miterlimit:3;stroke-opacity:0.498674;paint-order:stroke fill markers"
					d="M 19.84375,37.570833 19.579166,35.983333 19.05,32.279166 21.166666,31.057109 H 33.602083 L 42.11262,33.3375 40.127562,40.745833 H 20.902083 Z"
					id="path192289"
				/><path
					style="fill:#9d191a;fill-opacity:1;fill-rule:evenodd;stroke-width:3;stroke-linecap:round;stroke-linejoin:round;stroke-miterlimit:3;stroke-opacity:0.498674;paint-order:stroke fill markers"
					d="M 21.695833,39.6875 C 27.66753,37.181137 32.65608,37.157116 38.1,35.983333 l 2.38125,2.910417 C 38.9965,39.937785 29.311938,41.930054 21.695833,39.6875 Z"
					id="path192291"
				/><path
					style="fill:#75807b;fill-opacity:1;fill-rule:evenodd;stroke-width:3;stroke-linecap:round;stroke-linejoin:round;stroke-miterlimit:3;stroke-opacity:0.498674;paint-order:stroke fill markers"
					d="M 20.372916,39.952083 21.695833,39.6875 h 1.852083 3.96875 1.322917 L 30.1625,38.629166 h 1.058333 l 2.910417,-0.264583 h 2.910416 l 5.556251,0.79375 -3.968751,0.79375 c -4.236456,1.401973 -6.944477,2.382904 -11.90625,2.645833 l -6.35,0.264583 z"
					id="path192293"
				/><path
					style="fill:#7f887d;fill-opacity:1;fill-rule:evenodd;stroke-width:3;stroke-linecap:round;stroke-linejoin:round;stroke-miterlimit:3;stroke-opacity:0.498674;paint-order:stroke fill markers"
					d="m 47.889583,78.052082 c 0,0 10.847916,-7.672916 10.583333,-7.672916 -0.264583,0 -10.847917,12.170833 -10.847917,12.170833 z"
					id="path192295"
				/><path
					style="fill:#7f887d;fill-opacity:1;fill-rule:evenodd;stroke-width:3;stroke-linecap:round;stroke-linejoin:round;stroke-miterlimit:3;stroke-opacity:0.498674;paint-order:stroke fill markers"
					d="m 47.624999,97.895832 13.229167,-15.875 -14.552083,10.583334 z"
					id="path192297"
				/><path
					style="fill:#f1f0ea;fill-opacity:1;fill-rule:evenodd;stroke-width:3;stroke-linecap:round;stroke-linejoin:round;stroke-miterlimit:3;stroke-opacity:0.498674;paint-order:stroke fill markers"
					d="m 73.81875,73.289583 6.879166,-10e-7 2.116666,-4.497916 v -1.5875 h -5.820833 l -1.058333,1.058333 v 1.852083 h 2.645833 v -1.322916 h 2.116667 v 1.058333 h -1.058334 v 1.5875 h -4.233333 l -0.79375,-0.79375 v -3.704167 l 1.852083,-1.852083 h 5.027084 L 94.720832,51.858333 c 0.428701,-1.347233 0.268906,-2.661086 0,-3.96875 -6.904046,-12.149895 -15.539218,-23.639052 -25.4,-34.660416 V 11.90625 h 7.14375 V 15.875 L 101.86458,48.947916 83.343749,73.024999 v 5.027083 l -9.524999,10e-7 z"
					id="path192299"
				/><path
					style="fill:#a2bdbb;fill-opacity:1;fill-rule:evenodd;stroke-width:3;stroke-linecap:round;stroke-linejoin:round;stroke-miterlimit:3;stroke-opacity:0.498674;paint-order:stroke fill markers"
					d="m 74.877082,78.316666 -8.466666,-10.31875 h -1.5875 l 0.529167,7.408333 1.587499,1.322917 2.910417,-1.322917 -2.645833,-2.910417 -0.529167,1.058334 1.852083,1.322916 -1.322916,0.529167 -1.322917,-0.79375 v -4.497917 h 0.79375 l 7.408333,8.466667 z"
					id="path192301"
				/><path
					style="fill:#4b4a38;fill-opacity:1;fill-rule:evenodd;stroke-width:3;stroke-linecap:round;stroke-linejoin:round;stroke-miterlimit:3;stroke-opacity:0.498674;paint-order:stroke fill markers"
					d="M 13.49375,101.6 V 83.872916 h 2.645833 v -19.05 h 3.96875 v -5.820833 h 15.875 v 6.085416 h 8.202083 v 11.90625 h 3.704167 v 23.283331 h 6.614583 v 4.49792 l 6.35,2.38125 V 92.339582 h 10.054166 v -14.2875 h 12.435417 l 8.73125,11.1125 h 7.14375 V 78.581249 h 12.435421 v 4.7625 h 6.35 V 119.59167 H 11.90625 Z"
					id="path192303"
				/><path
					style="fill:#777777;fill-opacity:1;fill-rule:evenodd;stroke-width:3;stroke-linecap:round;stroke-linejoin:round;stroke-miterlimit:3;stroke-opacity:0.498674;paint-order:stroke fill markers"
					d="m 11.377083,101.86458 8.466667,-7.408331 c -1.426371,3.602192 -3.344867,6.869961 -3.439584,11.377081 l 0.79375,0.52917 c 2.247305,-3.41544 5.036891,-5.90367 7.9375,-8.202085 l -3.96875,10.318755 2.645834,-0.26459 9.525,-8.995831 -3.96875,10.847921 3.439583,-0.79375 c 2.764391,-3.30652 6.048747,-6.38401 9.789583,-9.26042 l -3.704166,10.05417 5.291666,0.52916 c 1.096342,-5.48536 4.414208,-6.67129 7.14375,-8.99583 -1.468197,3.03175 -3.044353,5.98582 -3.439583,9.78958 l 4.7625,0.26459 c 1.381809,-3.40625 3.674942,-5.57163 5.820833,-7.9375 -1.000931,2.69555 -2.080319,4.97441 -2.381249,8.46666 l 3.439582,0.52917 c 1.773971,-2.53992 3.031097,-5.54612 5.55625,-7.40833 -1.274861,2.64383 -2.003419,5.41761 -1.852082,7.9375 H 66.675 c 1.079901,-2.65078 3.500724,-4.58175 5.820833,-6.35 -1.200378,2.18798 -2.367232,4.25965 -2.645833,6.87916 L 73.025,114.3 c 1.009953,-2.23667 2.852272,-4.3341 4.762499,-6.35 -0.944512,2.45161 -1.971222,4.94159 -2.381249,7.14375 h 4.233333 c 0.303418,-2.54901 2.746911,-4.82483 4.7625,-6.35 -0.815184,2.17611 -1.672662,3.94051 -2.116666,6.61458 l 2.645833,0.26459 c 0.665396,-2.51576 2.580897,-3.71831 4.233333,-5.29167 -0.950356,1.81238 -1.57548,3.50639 -2.116666,5.55625 l 5.027082,0.52917 c 1.125548,-2.79788 2.279515,-4.3146 3.439583,-5.55625 -0.646043,2.05288 -1.15109,4.18684 -1.058332,6.08541 l 3.174999,0.26459 c 0.349695,-1.74118 1.372708,-3.11561 2.381251,-4.49792 -0.408629,1.56342 -0.86156,3.0752 -0.529167,4.7625 l 2.910417,0.26458 c 0.21331,-1.95074 1.11021,-2.69008 1.85208,-3.70416 -0.27783,1.28823 -0.48802,2.50912 -0.26458,3.96875 l 3.43958,0.26458 c 0.39051,-1.83168 1.19807,-2.87313 2.11667,-3.70417 -0.25753,1.26617 -0.74462,2.37178 -0.52917,3.96875 l 2.64584,0.26459 c 0.2349,-1.16543 0.91744,-1.89963 1.5875,-2.64584 -0.11861,0.95324 -0.36658,1.83458 -0.26459,2.91042 v 0.79375 H 12.7 Z"
					id="path192305"
				/><path
					style="fill:#ced1cb;fill-opacity:1;fill-rule:evenodd;stroke-width:3;stroke-linecap:round;stroke-linejoin:round;stroke-miterlimit:3;stroke-opacity:0.498674;paint-order:stroke fill markers"
					d="m 11.377083,101.86458 c 7.234688,6.49513 15.728088,6.44393 24.077083,7.14375 l 25.664583,2.91042 23.283333,2.91042 29.633338,3.70416 c 5.11264,0.7219 2.98661,0.45304 5.02708,1.05834 -0.86344,0.29379 -2.08549,0.6696 -4.7625,1.05833 H 11.641667 C 7.8381627,119.33756 7.8978162,116.6606 7.1437499,114.3 v -6.08542 c 0.7127532,-2.17364 2.1827978,-4.2855 4.2333331,-6.35 z"
					id="path192307"
				/><path
					style="fill:#6c6c6c;fill-opacity:1;fill-rule:evenodd;stroke-width:3;stroke-linecap:round;stroke-linejoin:round;stroke-miterlimit:3;stroke-opacity:0.498674;paint-order:stroke fill markers"
					d="m 10.31875,112.44792 5.291666,-5.55625 -2.645833,5.82083 2.116667,5.29167 z"
					id="path192309"
				/><path
					style="fill:#6c6c6c;fill-opacity:1;fill-rule:evenodd;stroke-width:2.71429;stroke-linecap:round;stroke-linejoin:round;stroke-miterlimit:3;stroke-opacity:0.498674;paint-order:stroke fill markers"
					d="m 18.772818,113.50625 4.787698,-5.02708 -2.393849,5.26646 1.91508,4.7877 z"
					id="path192311"
				/><path
					style="fill:#6c6c6c;fill-opacity:1;fill-rule:evenodd;stroke-width:2.71429;stroke-linecap:round;stroke-linejoin:round;stroke-miterlimit:3;stroke-opacity:0.498674;paint-order:stroke fill markers"
					d="m 26.710317,114.82917 4.7877,-5.02709 -2.39385,5.26647 1.915081,4.78771 z"
					id="path192313"
				/><path
					style="fill:#6c6c6c;fill-opacity:1;fill-rule:evenodd;stroke-width:2.01361;stroke-linecap:round;stroke-linejoin:round;stroke-miterlimit:3;stroke-opacity:0.498674;paint-order:stroke fill markers"
					d="m 33.942861,114.85437 3.551778,-3.72937 -1.775889,3.90696 1.420712,3.55178 z"
					id="path192315"
				/><path
					style="fill:#6c6c6c;fill-opacity:1;fill-rule:evenodd;stroke-width:2.01361;stroke-linecap:round;stroke-linejoin:round;stroke-miterlimit:3;stroke-opacity:0.498674;paint-order:stroke fill markers"
					d="m 40.557444,114.85437 3.551778,-3.72937 -1.775889,3.90696 1.420712,3.55178 z"
					id="path192317"
				/><path
					style="fill:#6c6c6c;fill-opacity:1;fill-rule:evenodd;stroke-width:1.5;stroke-linecap:round;stroke-linejoin:round;stroke-miterlimit:3;stroke-opacity:0.498674;paint-order:stroke fill markers"
					d="m 47.625001,115.49063 2.645832,-2.77813 -1.322916,2.91042 1.058334,2.64584 z"
					id="path192319"
				/><path
					style="fill:#6c6c6c;fill-opacity:1;fill-rule:evenodd;stroke-width:1.5;stroke-linecap:round;stroke-linejoin:round;stroke-miterlimit:3;stroke-opacity:0.498674;paint-order:stroke fill markers"
					d="m 53.181251,115.75521 2.645832,-2.77813 -1.322916,2.91042 1.058334,2.64584 z"
					id="path192321"
				/><path
					style="fill:#6c6c6c;fill-opacity:1;fill-rule:evenodd;stroke-width:1.5;stroke-linecap:round;stroke-linejoin:round;stroke-miterlimit:3;stroke-opacity:0.498674;paint-order:stroke fill markers"
					d="m 58.208334,116.28438 2.645832,-2.77813 -1.322916,2.91042 1.058334,2.64584 z"
					id="path192323"
				/><path
					style="fill:#6c6c6c;fill-opacity:1;fill-rule:evenodd;stroke-width:1.21429;stroke-linecap:round;stroke-linejoin:round;stroke-miterlimit:3;stroke-opacity:0.498674;paint-order:stroke fill markers"
					d="m 62.693651,116.28438 2.141864,-2.24896 -1.070932,2.35605 0.856747,2.14187 z"
					id="path192325"
				/><path
					style="fill:#6c6c6c;fill-opacity:1;fill-rule:evenodd;stroke-width:1.21429;stroke-linecap:round;stroke-linejoin:round;stroke-miterlimit:3;stroke-opacity:0.498674;paint-order:stroke fill markers"
					d="m 66.926985,116.57416 2.141864,-2.24896 -1.070932,2.35605 0.856747,2.14187 z"
					id="path192327"
				/><path
					style="fill:#6c6c6c;fill-opacity:1;fill-rule:evenodd;stroke-width:1.08504;stroke-linecap:round;stroke-linejoin:round;stroke-miterlimit:3;stroke-opacity:0.498674;paint-order:stroke fill markers"
					d="m 71.803475,117.10333 1.913884,-2.00958 -0.956942,2.10527 0.765555,1.91389 z"
					id="path192329"
				/><path
					style="fill:#6c6c6c;fill-opacity:1;fill-rule:evenodd;stroke-width:1.08504;stroke-linecap:round;stroke-linejoin:round;stroke-miterlimit:3;stroke-opacity:0.498674;paint-order:stroke fill markers"
					d="m 75.507641,117.37931 1.913884,-2.00958 -0.956942,2.10527 0.765555,1.91389 z"
					id="path192331"
				/><path
					style="fill:#6c6c6c;fill-opacity:1;fill-rule:evenodd;stroke-width:0.948334;stroke-linecap:round;stroke-linejoin:round;stroke-miterlimit:3;stroke-opacity:0.498674;paint-order:stroke fill markers"
					d="m 79.596958,117.64389 1.67275,-1.75639 -0.836375,1.84002 0.669102,1.67276 z"
					id="path192333"
				/><path
					style="fill:#6c6c6c;fill-opacity:1;fill-rule:evenodd;stroke-width:0.948334;stroke-linecap:round;stroke-linejoin:round;stroke-miterlimit:3;stroke-opacity:0.498674;paint-order:stroke fill markers"
					d="m 83.036542,117.92054 1.67275,-1.75639 -0.836375,1.84002 0.669102,1.67276 z"
					id="path192335"
				/><path
					style="fill:#6c6c6c;fill-opacity:1;fill-rule:evenodd;stroke-width:0.948334;stroke-linecap:round;stroke-linejoin:round;stroke-miterlimit:3;stroke-opacity:0.498674;paint-order:stroke fill markers"
					d="m 87.005292,117.92054 1.67275,-1.75639 -0.836375,1.84002 0.669102,1.67276 z"
					id="path192337"
				/><path
					style="fill:#6c6c6c;fill-opacity:1;fill-rule:evenodd;stroke-width:0.811988;stroke-linecap:round;stroke-linejoin:round;stroke-miterlimit:3;stroke-opacity:0.498674;paint-order:stroke fill markers"
					d="m 91.358874,118.19714 1.432252,-1.50387 -0.716126,1.57548 0.572902,1.43226 z"
					id="path192339"
				/><path
					style="fill:#6c6c6c;fill-opacity:1;fill-rule:evenodd;stroke-width:0.811988;stroke-linecap:round;stroke-linejoin:round;stroke-miterlimit:3;stroke-opacity:0.498674;paint-order:stroke fill markers"
					d="m 94.798457,118.57515 1.432252,-1.50387 -0.716126,1.57548 0.572902,1.43226 z"
					id="path192341"
				/><path
					style="fill:#6c6c6c;fill-opacity:1;fill-rule:evenodd;stroke-width:0.811988;stroke-linecap:round;stroke-linejoin:round;stroke-miterlimit:3;stroke-opacity:0.498674;paint-order:stroke fill markers"
					d="m 97.973457,118.72631 1.432252,-1.50387 -0.716126,1.57548 0.572902,1.43226 z"
					id="path192343"
				/><path
					style="fill:#6c6c6c;fill-opacity:1;fill-rule:evenodd;stroke-width:0.736862;stroke-linecap:round;stroke-linejoin:round;stroke-miterlimit:3;stroke-opacity:0.498674;paint-order:stroke fill markers"
					d="m 101.07083,118.83973 1.29973,-1.36473 -0.64987,1.42971 0.5199,1.29975 z"
					id="path192345"
				/><path
					style="fill:#6c6c6c;fill-opacity:1;fill-rule:evenodd;stroke-width:0.599996;stroke-linecap:round;stroke-linejoin:round;stroke-miterlimit:3;stroke-opacity:0.498674;paint-order:stroke fill markers"
					d="m 103.98127,118.99752 1.05831,-1.11124 -0.52916,1.16415 0.42333,1.05833 z"
					id="path192347"
				/><path
					style="fill:#6c6c6c;fill-opacity:1;fill-rule:evenodd;stroke-width:0.599996;stroke-linecap:round;stroke-linejoin:round;stroke-miterlimit:3;stroke-opacity:0.498674;paint-order:stroke fill markers"
					d="m 106.6271,119.27417 1.05831,-1.11124 -0.52916,1.16415 0.42333,1.05833 z"
					id="path192349"
				/><path
					style="fill:#6c6c6c;fill-opacity:1;fill-rule:evenodd;stroke-width:0.599996;stroke-linecap:round;stroke-linejoin:round;stroke-miterlimit:3;stroke-opacity:0.498674;paint-order:stroke fill markers"
					d="m 109.00835,119.34825 1.05831,-1.11124 -0.52916,1.16415 0.42333,1.05833 z"
					id="path192351"
				/><path
					style="fill:#6c6c6c;fill-opacity:1;fill-rule:evenodd;stroke-width:0.440001;stroke-linecap:round;stroke-linejoin:round;stroke-miterlimit:3;stroke-opacity:0.498674;paint-order:stroke fill markers"
					d="m 111.26612,119.34825 0.77611,-0.81492 -0.38806,0.85372 0.31045,0.77612 z"
					id="path192353"
				/><path
					style="fill:#6c6c6c;fill-opacity:1;fill-rule:evenodd;stroke-width:0.297142;stroke-linecap:round;stroke-linejoin:round;stroke-miterlimit:3;stroke-opacity:0.498674;paint-order:stroke fill markers"
					d="m 113.08896,119.34825 0.52413,-0.55033 -0.26207,0.57653 0.20966,0.52413 z"
					id="path192355"
				/><path
					style="fill:#d2d2c3;fill-opacity:1;fill-rule:evenodd;stroke-width:3;stroke-linecap:round;stroke-linejoin:round;stroke-miterlimit:3;stroke-opacity:0.498674;paint-order:stroke fill markers"
					d="M 20.372916,39.952083 19.84375,37.570833 21.695833,39.6875 Z"
					id="path192357"
				/><rect
					style="fill:#2b2c21;fill-opacity:1;fill-rule:evenodd;stroke-width:3;stroke-linecap:round;stroke-linejoin:round;stroke-miterlimit:3;stroke-opacity:0.498674;paint-order:stroke fill markers"
					id="rect192359"
					width="7.9375"
					height="3.96875"
					x="91.28125"
					y="101.86458"
					ry="0"
				/><rect
					style="fill:#2b2c21;fill-opacity:1;fill-rule:evenodd;stroke-width:3.07409;stroke-linecap:round;stroke-linejoin:round;stroke-miterlimit:3;stroke-opacity:0.498674;paint-order:stroke fill markers"
					id="rect192361"
					width="5.5562601"
					height="7.9375"
					x="112.44791"
					y="96.572914"
				/><rect
					style="fill:#2b2c21;fill-opacity:1;fill-rule:evenodd;stroke-width:3;stroke-linecap:round;stroke-linejoin:round;stroke-miterlimit:3;stroke-opacity:0.498674;paint-order:stroke fill markers"
					id="rect192363"
					width="2.6458333"
					height="3.96875"
					x="109.80208"
					y="100.54166"
				/><rect
					style="fill:#2b2c21;fill-opacity:1;fill-rule:evenodd;stroke-width:3;stroke-linecap:round;stroke-linejoin:round;stroke-miterlimit:3;stroke-opacity:0.498674;paint-order:stroke fill markers"
					id="rect192365"
					width="5.2916665"
					height="2.6458333"
					x="95.25"
					y="93.927086"
				/><rect
					style="fill:#2b2c21;fill-opacity:1;fill-rule:evenodd;stroke-width:2.95683;stroke-linecap:round;stroke-linejoin:round;stroke-miterlimit:3;stroke-opacity:0.498674;paint-order:stroke fill markers"
					id="rect192367"
					width="8.9958353"
					height="3.96875"
					x="16.139582"
					y="76.729164"
				/><rect
					style="fill:#2b2c21;fill-opacity:1;fill-rule:evenodd;stroke-width:2.93939;stroke-linecap:round;stroke-linejoin:round;stroke-miterlimit:3;stroke-opacity:0.498674;paint-order:stroke fill markers"
					id="rect192369"
					width="6.3499999"
					height="9.260417"
					x="16.139584"
					y="68.791664"
				/><rect
					style="fill:#2b2c21;fill-opacity:1;fill-rule:evenodd;stroke-width:3.22413;stroke-linecap:round;stroke-linejoin:round;stroke-miterlimit:3;stroke-opacity:0.498674;paint-order:stroke fill markers"
					id="rect192371"
					width="5.556251"
					height="2.910418"
					x="30.427082"
					y="62.177082"
				/><path
					style="fill:#7f887d;fill-opacity:1;fill-rule:evenodd;stroke-width:3;stroke-linecap:round;stroke-linejoin:round;stroke-miterlimit:3;stroke-opacity:0.498674;paint-order:stroke fill markers"
					d="M 47.624999,89.958332 58.208333,76.729166 47.624999,85.989582 Z"
					id="path192373"
				/><rect
					style="fill:#2b2c21;fill-opacity:1;fill-rule:evenodd;stroke-width:3.07409;stroke-linecap:round;stroke-linejoin:round;stroke-miterlimit:3;stroke-opacity:0.498674;paint-order:stroke fill markers"
					id="rect192375"
					width="5.5562525"
					height="11.90625"
					x="42.333332"
					y="84.666664"
				/><rect
					style="fill:#2b2c21;fill-opacity:1;fill-rule:evenodd;stroke-width:3.4641;stroke-linecap:round;stroke-linejoin:round;stroke-miterlimit:3;stroke-opacity:0.498674;paint-order:stroke fill markers"
					id="rect192377"
					width="5.2916665"
					height="6.6145835"
					x="37.041668"
					y="87.3125"
				/><rect
					style="fill:#2b2c21;fill-opacity:1;fill-rule:evenodd;stroke-width:3.14643;stroke-linecap:round;stroke-linejoin:round;stroke-miterlimit:3;stroke-opacity:0.498674;paint-order:stroke fill markers"
					id="rect192379"
					width="5.8208332"
					height="2.6458333"
					x="70.908333"
					y="84.666664"
				/><rect
					style="fill:#2b2c21;fill-opacity:1;fill-rule:evenodd;stroke-width:3;stroke-linecap:round;stroke-linejoin:round;stroke-miterlimit:3;stroke-opacity:0.498674;paint-order:stroke fill markers"
					id="rect192381"
					width="5.2916665"
					height="2.6458309"
					x="99.21875"
					y="85.989586"
				/><rect
					style="fill:#2b2c21;fill-opacity:1;fill-rule:evenodd;stroke-width:3;stroke-linecap:round;stroke-linejoin:round;stroke-miterlimit:3;stroke-opacity:0.498674;paint-order:stroke fill markers"
					id="rect192383"
					width="8.7312498"
					height="3.96875"
					x="60.854164"
					y="97.631248"
				/><rect
					style="fill:#2b2c21;fill-opacity:1;fill-rule:evenodd;stroke-width:3;stroke-linecap:round;stroke-linejoin:round;stroke-miterlimit:3;stroke-opacity:0.498674;paint-order:stroke fill markers"
					id="rect192385"
					width="7.9375"
					height="3.96875"
					x="66.145836"
					y="100.54166"
				/><path
					style="fill:#bbbca3;fill-opacity:1;fill-rule:evenodd;stroke-width:3;stroke-linecap:round;stroke-linejoin:round;stroke-miterlimit:3;stroke-opacity:0.498674;paint-order:stroke fill markers"
					d="M 23.547916,39.6875 H 25.4 l -1.852084,-2.38125 z"
					id="path192387"
				/><path
					style="fill:#bbbca3;fill-opacity:1;fill-rule:evenodd;stroke-width:3;stroke-linecap:round;stroke-linejoin:round;stroke-miterlimit:3;stroke-opacity:0.498674;paint-order:stroke fill markers"
					d="m 27.252083,37.30625 1.5875,2.38125 h -1.322917 z"
					id="path192389"
				/><path
					style="fill:#bbbca3;fill-opacity:1;fill-rule:evenodd;stroke-width:3;stroke-linecap:round;stroke-linejoin:round;stroke-miterlimit:3;stroke-opacity:0.498674;paint-order:stroke fill markers"
					d="m 29.897916,36.5125 1.322917,2.116666 H 30.1625 Z"
					id="path192391"
				/><path
					style="fill:#bbbca3;fill-opacity:1;fill-rule:evenodd;stroke-width:3;stroke-linecap:round;stroke-linejoin:round;stroke-miterlimit:3;stroke-opacity:0.498674;paint-order:stroke fill markers"
					d="m 34.13125,35.454166 2.910416,2.910417 H 34.13125 Z"
					id="path192393"
				/><path
					style="fill:#bbbca3;fill-opacity:1;fill-rule:evenodd;stroke-width:3;stroke-linecap:round;stroke-linejoin:round;stroke-miterlimit:3;stroke-opacity:0.498674;paint-order:stroke fill markers"
					d="m 29.633333,32.014583 2.116667,3.175 V 32.54375 Z"
					id="path192395"
				/><path
					style="fill:#bbbca3;fill-opacity:1;fill-rule:evenodd;stroke-width:3;stroke-linecap:round;stroke-linejoin:round;stroke-miterlimit:3;stroke-opacity:0.498674;paint-order:stroke fill markers"
					d="m 27.78125,32.014583 1.058333,2.645833 -2.116666,-2.645833 z"
					id="path192397"
				/><path
					style="fill:#bbbca3;fill-opacity:1;fill-rule:evenodd;stroke-width:3;stroke-linecap:round;stroke-linejoin:round;stroke-miterlimit:3;stroke-opacity:0.498674;paint-order:stroke fill markers"
					d="m 19.05,32.279166 0.529166,3.704167 0.264584,-3.96875 z"
					id="path192399"
				/><path
					style="fill:#bbbca3;fill-opacity:1;fill-rule:evenodd;stroke-width:3;stroke-linecap:round;stroke-linejoin:round;stroke-miterlimit:3;stroke-opacity:0.498674;paint-order:stroke fill markers"
					d="m 20.108333,31.75 2.645833,3.439583 -1.058333,-3.175 z"
					id="path192401"
				/><path
					style="fill:#bbbca3;fill-opacity:1;fill-rule:evenodd;stroke-width:3;stroke-linecap:round;stroke-linejoin:round;stroke-miterlimit:3;stroke-opacity:0.498674;paint-order:stroke fill markers"
					d="m 23.01875,31.75 2.645833,2.910416 -1.058333,-2.645833 z"
					id="path192403"
				/><path
					style="fill:#e3e1d5;fill-opacity:1;fill-rule:evenodd;stroke-width:3;stroke-linecap:round;stroke-linejoin:round;stroke-miterlimit:3;stroke-opacity:0.498674;paint-order:stroke fill markers"
					d="M 19.05,32.279166 H 18.520833 V 30.95625 l -2.38125,-2.38125 2.38125,-2.38125 0.79375,-0.79375 0.79375,0.79375 h 9.525 l 3.666175,-2.116667 h 6.123409 l 0.79375,-0.79375 h 1.587499 V 23.8125 l 5.820833,2.38125 15.610417,-5.027084 -5.027083,6.879167 -2.645834,8.995833 -12.964582,0.264584 -5.556251,-4.497917 H 31.220833 L 30.1625,32.197304 H 20.108333 Z"
					id="path192405"
				/><path
					style="fill:#b2b7b0;fill-opacity:1;fill-rule:evenodd;stroke-width:3;stroke-linecap:round;stroke-linejoin:round;stroke-miterlimit:3;stroke-opacity:0.498674;paint-order:stroke fill markers"
					d="m 51.858333,36.777083 3.704166,-2.38125 -1.5875,3.175 5.027084,-3.175 -1.058334,3.439583 4.233334,-3.175 -0.529167,3.175 4.233333,-2.910416 -0.264583,3.175 4.233333,-2.38125 -2.116667,2.645833 3.175,1.5875 -3.439583,-0.79375 3.439583,4.233333 -3.439583,-2.116667 3.175,4.7625 -3.704167,-1.5875 4.233334,5.027084 -3.96875,-2.116667 3.439583,5.55625 -3.96875,-1.852083 3.439583,4.7625 -2.910416,-1.5875 2.910416,5.027083 -3.175,-2.645833 0.79375,5.55625 -3.174999,-3.704167 V 39.6875 H 52.916666 Z"
					id="path192407"
				/><path
					style="fill:#9fa799;fill-opacity:1;fill-rule:evenodd;stroke-width:3;stroke-linecap:round;stroke-linejoin:round;stroke-miterlimit:3;stroke-opacity:0.498674;paint-order:stroke fill markers"
					d="m 20.372916,42.862499 c 0.868716,1.162579 1.790787,2.305137 3.439584,3.175 L 38.1,43.65625 h 15.874999 l 1.488792,-6.614584 z"
					id="path192409"
				/><path
					style="fill:#95a495;fill-opacity:1;fill-rule:evenodd;stroke-width:3;stroke-linecap:round;stroke-linejoin:round;stroke-miterlimit:3;stroke-opacity:0.498674;paint-order:stroke fill markers"
					d="m 29.897916,28.310416 -0.79375,1.5875 1.5875,-0.79375 h 7.9375 l 3.439583,-1.985843 2.645834,-0.395407 -0.79375,-0.79375 -7.14375,0.529167 -3.439583,1.322917 z"
					id="path192411"
				/><path
					style="fill:#75807b;fill-opacity:1;fill-rule:evenodd;stroke-width:3;stroke-linecap:round;stroke-linejoin:round;stroke-miterlimit:3;stroke-opacity:0.498674;paint-order:stroke fill markers"
					d="m 39.158333,34.13125 3.704166,1.322916 4.7625,-3.439583 8.466667,0.529167 -6.614583,3.175 5.820834,1.322917 -12.964584,2.116666 z"
					id="path192413"
				/><path
					style="fill:#75807b;fill-opacity:1;fill-rule:evenodd;stroke-width:3;stroke-linecap:round;stroke-linejoin:round;stroke-miterlimit:3;stroke-opacity:0.498674;paint-order:stroke fill markers"
					d="M 55.297916,37.041666 56.35625,38.629167 49.741666,38.89375 38.1,43.656249 33.05901,40.745833 c 7.365558,-1.323744 14.160352,-3.719178 22.238906,-3.704167 z"
					id="path192415"
				/><path
					style="fill:#9ca497;fill-opacity:1;fill-rule:evenodd;stroke-width:3;stroke-linecap:round;stroke-linejoin:round;stroke-miterlimit:3;stroke-opacity:0.498674;paint-order:stroke fill markers"
					d="m 39.952083,35.189583 3.96875,3.175 5.55625,-2.645833 -3.439583,2.910417 -3.704167,0.529166 -2.645833,-3.96875 z"
					id="path192417"
				/><path
					style="fill:#1d150f;fill-opacity:1;fill-rule:evenodd;stroke-width:3;stroke-linecap:round;stroke-linejoin:round;stroke-miterlimit:3;stroke-opacity:0.498674;paint-order:stroke fill markers"
					d="m 39.952083,35.189583 2.38125,3.96875 c 0,0 0,0 -1.81545,-0.09141 -0.09835,-0.005 -2.1533,-2.819006 -2.1533,-2.819006 z"
					id="path192419"
				/><path
					style="fill:#bbbca3;fill-opacity:1;fill-rule:evenodd;stroke-width:3;stroke-linecap:round;stroke-linejoin:round;stroke-miterlimit:3;stroke-opacity:0.498674;paint-order:stroke fill markers"
					d="m 39.952083,35.189583 -1.5875,1.058333 -2.116667,-4.7625 z"
					id="path192421"
				/><path
					style="fill:#8d988a;fill-opacity:1;fill-rule:evenodd;stroke-width:3;stroke-linecap:round;stroke-linejoin:round;stroke-miterlimit:3;stroke-opacity:0.498674;paint-order:stroke fill markers"
					d="m 46.831249,28.045833 h 3.439584 c 0,0 -1.852084,2.910417 -1.852084,2.910417 v -1.852084 z"
					id="path192423"
				/><path
					style="fill:#8d988a;fill-opacity:1;fill-rule:evenodd;stroke-width:3;stroke-linecap:round;stroke-linejoin:round;stroke-miterlimit:3;stroke-opacity:0.498674;paint-order:stroke fill markers"
					d="m 51.196875,26.722917 h 3.439584 c 0,0 -1.852084,2.910417 -1.852084,2.910417 V 27.78125 Z"
					id="path192425"
				/><path
					style="fill:#8d988a;fill-opacity:1;fill-rule:evenodd;stroke-width:2.30769;stroke-linecap:round;stroke-linejoin:round;stroke-miterlimit:3;stroke-opacity:0.498674;paint-order:stroke fill markers"
					d="m 55.033333,25.206651 h 2.645834 c 0,0 -1.42468,2.238781 -1.42468,2.238781 v -1.424679 z"
					id="path192427"
				/><path
					style="fill:#8d988a;fill-opacity:1;fill-rule:evenodd;stroke-width:1.66864;stroke-linecap:round;stroke-linejoin:round;stroke-miterlimit:3;stroke-opacity:0.498674;paint-order:stroke fill markers"
					d="m 58.147275,23.572966 h 1.913142 c 0,0 -1.030153,1.618811 -1.030153,1.618811 v -1.030153 z"
					id="path192429"
				/><path
					style="fill:#7f887d;fill-opacity:1;fill-rule:evenodd;stroke-width:3;stroke-linecap:round;stroke-linejoin:round;stroke-miterlimit:3;stroke-opacity:0.498674;paint-order:stroke fill markers"
					d="m 48.418749,43.656249 3.704167,-3.704166 -1.852083,3.704166 z"
					id="path192431"
				/><path
					style="fill:#7f887d;fill-opacity:1;fill-rule:evenodd;stroke-width:3;stroke-linecap:round;stroke-linejoin:round;stroke-miterlimit:3;stroke-opacity:0.498674;paint-order:stroke fill markers"
					d="m 52.387499,43.656249 2.645834,-3.439583 -1.5875,3.439583 z"
					id="path192433"
				/><path
					style="fill:#7f887d;fill-opacity:1;fill-rule:evenodd;stroke-width:3;stroke-linecap:round;stroke-linejoin:round;stroke-miterlimit:3;stroke-opacity:0.498674;paint-order:stroke fill markers"
					d="m 62.970833,37.835416 2.38125,1.322917 -2.38125,1.322916 1.058333,-1.322916 z"
					id="path192435"
				/><path
					style="fill:#7f887d;fill-opacity:1;fill-rule:evenodd;stroke-width:3;stroke-linecap:round;stroke-linejoin:round;stroke-miterlimit:3;stroke-opacity:0.498674;paint-order:stroke fill markers"
					d="m 59.266667,37.835416 2.38125,1.322917 -2.38125,1.322916 1.058333,-1.322916 z"
					id="path192437"
				/><path
					style="fill:#7f887d;fill-opacity:1;fill-rule:evenodd;stroke-width:3;stroke-linecap:round;stroke-linejoin:round;stroke-miterlimit:3;stroke-opacity:0.498674;paint-order:stroke fill markers"
					d="m 64.029166,42.333333 2.645833,-1.5875 -2.645833,3.175 z"
					id="path192439"
				/><path
					style="fill:#7f887d;fill-opacity:1;fill-rule:evenodd;stroke-width:3;stroke-linecap:round;stroke-linejoin:round;stroke-miterlimit:3;stroke-opacity:0.498674;paint-order:stroke fill markers"
					d="M 64.029166,46.0375 66.674999,44.45 64.029166,47.625 Z"
					id="path192441"
				/><path
					style="fill:#7f887d;fill-opacity:1;fill-rule:evenodd;stroke-width:3;stroke-linecap:round;stroke-linejoin:round;stroke-miterlimit:3;stroke-opacity:0.498674;paint-order:stroke fill markers"
					d="m 64.029166,48.683333 2.645833,-1.5875 -2.645833,3.175 z"
					id="path192443"
				/><path
					style="fill:#7f887d;fill-opacity:1;fill-rule:evenodd;stroke-width:3;stroke-linecap:round;stroke-linejoin:round;stroke-miterlimit:3;stroke-opacity:0.498674;paint-order:stroke fill markers"
					d="m 64.029166,51.858333 2.645833,-1.5875 -2.645833,3.175 z"
					id="path192445"
				/><path
					style="fill:#7f887d;fill-opacity:1;fill-rule:evenodd;stroke-width:3;stroke-linecap:round;stroke-linejoin:round;stroke-miterlimit:3;stroke-opacity:0.498674;paint-order:stroke fill markers"
					d="m 61.647916,56.356249 1.058333,2.645834 -2.910416,-1.5875 z"
					id="path192447"
				/><path
					style="fill:#7f887d;fill-opacity:1;fill-rule:evenodd;stroke-width:3;stroke-linecap:round;stroke-linejoin:round;stroke-miterlimit:3;stroke-opacity:0.498674;paint-order:stroke fill markers"
					d="m 59.531249,60.589583 -1.5875,-2.116667 -1.322916,0.79375 z"
					id="path192449"
				/><path
					style="fill:#7f887d;fill-opacity:1;fill-rule:evenodd;stroke-width:3;stroke-linecap:round;stroke-linejoin:round;stroke-miterlimit:3;stroke-opacity:0.498674;paint-order:stroke fill markers"
					d="m 52.652083,61.912499 3.175,0.264584 -3.96875,1.5875 z"
					id="path192451"
				/><path
					style="fill:#7f887d;fill-opacity:1;fill-rule:evenodd;stroke-width:3;stroke-linecap:round;stroke-linejoin:round;stroke-miterlimit:3;stroke-opacity:0.498674;paint-order:stroke fill markers"
					d="m 50.799999,66.145832 2.645834,-0.793749 -3.439584,2.381249 z"
					id="path192453"
				/><path
					style="fill:#a2bdbb;fill-opacity:1;fill-rule:evenodd;stroke-width:3;stroke-linecap:round;stroke-linejoin:round;stroke-miterlimit:3;stroke-opacity:0.498674;paint-order:stroke fill markers"
					d="m 57.679166,29.36875 3.439583,2.116666 -4.233333,1.322917 1.852083,-1.5875 z"
					id="path192455"
				/><path
					style="fill:#a2bdbb;fill-opacity:1;fill-rule:evenodd;stroke-width:3;stroke-linecap:round;stroke-linejoin:round;stroke-miterlimit:3;stroke-opacity:0.498674;paint-order:stroke fill markers"
					d="m 65.352083,29.897916 2.381249,2.116667 -3.174999,0.79375 L 66.145832,31.75 Z"
					id="path192457"
				/><path
					style="fill:#a2bdbb;fill-opacity:1;fill-rule:evenodd;stroke-width:3.4;stroke-linecap:round;stroke-linejoin:round;stroke-miterlimit:3;stroke-opacity:0.498674;paint-order:stroke fill markers"
					d="m 72.337082,31.167917 0.599723,4.497916 -2.998611,-2.69875 2.099027,0.899584 z"
					id="path192459"
				/><path
					style="fill:#a2bdbb;fill-opacity:1;fill-rule:evenodd;stroke-width:3;stroke-linecap:round;stroke-linejoin:round;stroke-miterlimit:3;stroke-opacity:0.498674;paint-order:stroke fill markers"
					d="m 74.877082,37.835416 -0.529166,3.175 -2.645834,-3.175 2.116667,1.058334 z"
					id="path192461"
				/><path
					style="fill:#a2bdbb;fill-opacity:1;fill-rule:evenodd;stroke-width:3;stroke-linecap:round;stroke-linejoin:round;stroke-miterlimit:3;stroke-opacity:0.498674;paint-order:stroke fill markers"
					d="m 75.670832,43.920833 -1.5875,2.910416 -1.5875,-3.175 1.5875,1.5875 z"
					id="path192463"
				/><path
					style="fill:#a2bdbb;fill-opacity:1;fill-rule:evenodd;stroke-width:3;stroke-linecap:round;stroke-linejoin:round;stroke-miterlimit:3;stroke-opacity:0.498674;paint-order:stroke fill markers"
					d="m 75.670832,48.683334 -1.5875,2.910416 -1.5875,-3.175 1.5875,1.5875 z"
					id="path192465"
				/><path
					style="fill:#a2bdbb;fill-opacity:1;fill-rule:evenodd;stroke-width:3;stroke-linecap:round;stroke-linejoin:round;stroke-miterlimit:3;stroke-opacity:0.498674;paint-order:stroke fill markers"
					d="m 71.966666,53.445833 1.5875,3.439583 2.116666,-3.175 -2.116666,1.322917 z"
					id="path192467"
				/><path
					style="fill:#a2bdbb;fill-opacity:1;fill-rule:evenodd;stroke-width:3;stroke-linecap:round;stroke-linejoin:round;stroke-miterlimit:3;stroke-opacity:0.498674;paint-order:stroke fill markers"
					d="m 71.437499,58.208333 v 4.497916 l 3.175,-3.96875 -2.116667,1.322917 z"
					id="path192469"
				/><path
					style="fill:#a2bdbb;fill-opacity:1;fill-rule:evenodd;stroke-width:3;stroke-linecap:round;stroke-linejoin:round;stroke-miterlimit:3;stroke-opacity:0.498674;paint-order:stroke fill markers"
					d="m 72.760416,64.029166 -3.175,3.439583 v -4.497916 l 0.79375,2.116666 z"
					id="path192471"
				/><path
					style="fill:#f1f0ea;fill-opacity:1;fill-rule:evenodd;stroke-width:3;stroke-linecap:round;stroke-linejoin:round;stroke-miterlimit:3;stroke-opacity:0.498674;paint-order:stroke fill markers"
					d="m 81.756249,76.464582 c 0.403725,-2.057974 2.903178,-3.447431 5.55625,-4.7625 l -2.910417,5.291667 z"
					id="path192473"
				/><path
					style="fill:#f1f0ea;fill-opacity:1;fill-rule:evenodd;stroke-width:3;stroke-linecap:round;stroke-linejoin:round;stroke-miterlimit:3;stroke-opacity:0.498674;paint-order:stroke fill markers"
					d="m 88.899999,75.406249 2.645833,0.79375 -3.704165,5.027084 -2.381251,-1.587501 z"
					id="path192475"
				/><path
					style="fill:#f1f0ea;fill-opacity:1;fill-rule:evenodd;stroke-width:3;stroke-linecap:round;stroke-linejoin:round;stroke-miterlimit:3;stroke-opacity:0.498674;paint-order:stroke fill markers"
					d="m 92.074999,80.433332 2.116666,1.058334 -3.704166,3.439583 -2.645832,-1.058332 z"
					id="path192477"
				/><path
					style="fill:#929d8f;fill-opacity:1;fill-rule:evenodd;stroke-width:3;stroke-linecap:round;stroke-linejoin:round;stroke-miterlimit:3;stroke-opacity:0.498674;paint-order:stroke fill markers"
					d="m 87.312499,71.702082 1.5875,3.704167 -3.439583,4.233333 -1.058334,-2.645833 z"
					id="path192479"
				/><path
					style="fill:#929d8f;fill-opacity:1;fill-rule:evenodd;stroke-width:3;stroke-linecap:round;stroke-linejoin:round;stroke-miterlimit:3;stroke-opacity:0.498674;paint-order:stroke fill markers"
					d="m 87.841666,81.227082 v 2.645834 l 4.233333,-3.439584 -0.529167,-4.233333 z"
					id="path192481"
				/><path
					style="fill:#929d8f;fill-opacity:1;fill-rule:evenodd;stroke-width:3;stroke-linecap:round;stroke-linejoin:round;stroke-miterlimit:3;stroke-opacity:0.498674;paint-order:stroke fill markers"
					d="m 94.191665,81.491666 0.264584,1.322916 -2.910416,3.439585 -1.058334,-1.322918 z"
					id="path192483"
				/><path
					style="fill:#5e5e61;fill-opacity:1;fill-rule:evenodd;stroke-width:3;stroke-linecap:round;stroke-linejoin:round;stroke-miterlimit:3;stroke-opacity:0.498674;paint-order:stroke fill markers"
					d="m 81.756249,76.464582 -0.79375,1.5875 2.38125,0.264584 2.116667,1.322916 -1.058334,-2.645833 z"
					id="path192485"
				/><path
					style="fill:#7c7c7e;fill-opacity:1;fill-rule:evenodd;stroke-width:3;stroke-linecap:round;stroke-linejoin:round;stroke-miterlimit:3;stroke-opacity:0.498674;paint-order:stroke fill markers"
					d="m 80.962499,78.052082 -1.852083,8.995834 6.35,-7.408334 -2.116667,-1.322916 z"
					id="path192487"
				/><path
					style="fill:#7c7c7e;fill-opacity:1;fill-rule:evenodd;stroke-width:3;stroke-linecap:round;stroke-linejoin:round;stroke-miterlimit:3;stroke-opacity:0.498674;paint-order:stroke fill markers"
					d="m 85.460417,79.639583 2.381249,4.233333 -6.35,6.085416 z"
					id="path192489"
				/><path
					style="fill:#5e5e61;fill-opacity:1;fill-rule:evenodd;stroke-width:3;stroke-linecap:round;stroke-linejoin:round;stroke-miterlimit:3;stroke-opacity:0.498674;paint-order:stroke fill markers"
					d="m 85.460416,79.639582 0.529167,2.381251 1.852083,1.852083 v -2.645834 z"
					id="path192491"
				/><path
					style="fill:#7c7c7e;fill-opacity:1;fill-rule:evenodd;stroke-width:3;stroke-linecap:round;stroke-linejoin:round;stroke-miterlimit:3;stroke-opacity:0.498674;paint-order:stroke fill markers"
					d="m 87.841667,83.872917 1.322915,1.852082 2.381251,0.529168 -6.879167,5.556249 z"
					id="path192493"
				/><path
					style="fill:#5e5e61;fill-opacity:1;fill-rule:evenodd;stroke-width:3;stroke-linecap:round;stroke-linejoin:round;stroke-miterlimit:3;stroke-opacity:0.498674;paint-order:stroke fill markers"
					d="m 90.487499,84.931249 1.058334,1.322918 v 0 H 88.9 l -1.058333,-2.38125 -10e-7,-10e-7 z"
					id="path192495"
				/><path
					style="fill:#a2bdbb;fill-opacity:1;fill-rule:evenodd;stroke-width:3;stroke-linecap:round;stroke-linejoin:round;stroke-miterlimit:3;stroke-opacity:0.498674;paint-order:stroke fill markers"
					d="m 82.020832,64.558333 2.645834,0.264583 -1.058334,-1.852083 z"
					id="path192497"
				/><path
					style="fill:#a2bdbb;fill-opacity:1;fill-rule:evenodd;stroke-width:3;stroke-linecap:round;stroke-linejoin:round;stroke-miterlimit:3;stroke-opacity:0.498674;paint-order:stroke fill markers"
					d="m 85.460416,61.118749 3.439583,-0.264583 -1.852083,-1.322917 z"
					id="path192499"
				/><path
					style="fill:#a2bdbb;fill-opacity:1;fill-rule:evenodd;stroke-width:3;stroke-linecap:round;stroke-linejoin:round;stroke-miterlimit:3;stroke-opacity:0.498674;paint-order:stroke fill markers"
					d="m 88.899999,57.679166 h 3.439583 l -1.5875,-1.852083 z"
					id="path192501"
				/><path
					style="fill:#a2bdbb;fill-opacity:1;fill-rule:evenodd;stroke-width:3;stroke-linecap:round;stroke-linejoin:round;stroke-miterlimit:3;stroke-opacity:0.498674;paint-order:stroke fill markers"
					d="m 94.191665,52.387499 1.058334,1.058334 -2.645833,0.529166 z"
					id="path192503"
				/><path
					style="fill:#a2bdbb;fill-opacity:1;fill-rule:evenodd;stroke-width:3;stroke-linecap:round;stroke-linejoin:round;stroke-miterlimit:3;stroke-opacity:0.498674;paint-order:stroke fill markers"
					d="m 94.985415,49.477083 1.852084,-3.439584 -2.38125,1.322917 0.264583,0.529167 z"
					id="path192505"
				/><path
					style="fill:#a2bdbb;fill-opacity:1;fill-rule:evenodd;stroke-width:3;stroke-linecap:round;stroke-linejoin:round;stroke-miterlimit:3;stroke-opacity:0.498674;paint-order:stroke fill markers"
					d="m 94.720832,41.804166 -1.322917,3.96875 -1.322916,-2.38125 z"
					id="path192507"
				/><path
					style="fill:#a2bdbb;fill-opacity:1;fill-rule:evenodd;stroke-width:3;stroke-linecap:round;stroke-linejoin:round;stroke-miterlimit:3;stroke-opacity:0.498674;paint-order:stroke fill markers"
					d="m 91.281249,37.30625 -0.79375,3.439583 -1.322917,-1.852083 z"
					id="path192509"
				/><path
					style="fill:#a2bdbb;fill-opacity:1;fill-rule:evenodd;stroke-width:3;stroke-linecap:round;stroke-linejoin:round;stroke-miterlimit:3;stroke-opacity:0.498674;paint-order:stroke fill markers"
					d="m 87.577082,36.5125 1.058334,-3.175 -2.38125,1.058333 z"
					id="path192511"
				/><path
					style="fill:#a2bdbb;fill-opacity:1;fill-rule:evenodd;stroke-width:3;stroke-linecap:round;stroke-linejoin:round;stroke-miterlimit:3;stroke-opacity:0.498674;paint-order:stroke fill markers"
					d="M 85.195832,29.104166 84.402082,31.75 83.343749,30.427083 Z"
					id="path192513"
				/><path
					style="fill:#a2bdbb;fill-opacity:1;fill-rule:evenodd;stroke-width:3;stroke-linecap:round;stroke-linejoin:round;stroke-miterlimit:3;stroke-opacity:0.498674;paint-order:stroke fill markers"
					d="m 82.020832,25.4 -0.264583,2.910416 -1.322917,-1.5875 z"
					id="path192515"
				/><path
					style="fill:#a2bdbb;fill-opacity:1;fill-rule:evenodd;stroke-width:3;stroke-linecap:round;stroke-linejoin:round;stroke-miterlimit:3;stroke-opacity:0.498674;paint-order:stroke fill markers"
					d="m 79.374999,21.43125 -0.529167,3.175 -1.322916,-1.852084 z"
					id="path192517"
				/><path
					style="fill:#a2bdbb;fill-opacity:1;fill-rule:evenodd;stroke-width:3;stroke-linecap:round;stroke-linejoin:round;stroke-miterlimit:3;stroke-opacity:0.498674;paint-order:stroke fill markers"
					d="m 75.935416,17.4625 -0.529167,2.910416 -1.322917,-1.5875 z"
					id="path192519"
				/><path
					style="fill:#a2bdbb;fill-opacity:1;fill-rule:evenodd;stroke-width:3;stroke-linecap:round;stroke-linejoin:round;stroke-miterlimit:3;stroke-opacity:0.498674;paint-order:stroke fill markers"
					d="m 73.024999,14.2875 -0.264583,2.910416 -1.587499,-1.852083 z"
					id="path192521"
				/><path
					style="fill:#d6d7d0;fill-opacity:1;fill-rule:evenodd;stroke-width:3;stroke-linecap:round;stroke-linejoin:round;stroke-miterlimit:3;stroke-opacity:0.498674;paint-order:stroke fill markers"
					d="M 70.114582,11.90625 H 80.697916 V 6.614583 h -10.31875 l -0.79375,0.7937505 0.264583,4.4979165 z"
					id="path192523"
				/><path
					style="fill:#4d4d4b;fill-opacity:1;fill-rule:evenodd;stroke-width:3;stroke-linecap:round;stroke-linejoin:round;stroke-miterlimit:3;stroke-opacity:0.498674;paint-order:stroke fill markers"
					d="m 69.585416,7.4083332 1.852083,1.5875 -2.116666,4.2333338 -0.79375,-0.264584 1.852083,-3.7041664 -1.5875,-1.8520834 z"
					id="path192525"
				/><path
					style="fill:#a2bdbb;fill-opacity:1;fill-rule:evenodd;stroke-width:3;stroke-linecap:round;stroke-linejoin:round;stroke-miterlimit:3;stroke-opacity:0.498674;paint-order:stroke fill markers"
					d="m 60.060417,13.758333 -3.439584,0.264583 c -2.417194,-0.0611 -4.828923,-0.16654 -7.14375,-1.058333 -1.719647,-1.058051 -2.506168,-2.365388 -3.175,-3.7041664 3.071967,-4.0464338 6.816731,-3.7540304 10.31875,-5.0270833 -1.994847,1.2943964 -4.096093,2.3612239 -5.820834,4.2333333 0.25886,0.6517784 0.541751,1.2990152 1.322917,1.8520834 2.740769,0.105972 5.508638,0.117996 8.466667,-0.5291667 z"
					id="path192527"
				/><path
					style="fill:#a2bdbb;fill-opacity:1;fill-rule:evenodd;stroke-width:2.59808;stroke-linecap:round;stroke-linejoin:round;stroke-miterlimit:3;stroke-opacity:0.498674;paint-order:stroke fill markers"
					d="m 60.457291,9.7895832 1.190626,-0.2645833 c 0,0 -0.396876,4.2333331 -0.396876,4.2333331 h -1.190625 z"
					id="path192529"
				/><path
					style="fill:#a2bdbb;fill-opacity:1;fill-rule:evenodd;stroke-width:3;stroke-linecap:round;stroke-linejoin:round;stroke-miterlimit:3;stroke-opacity:0.498674;paint-order:stroke fill markers"
					d="M 68.527082,12.964583 C 68.113217,11.489962 67.607853,10.004242 66.674999,8.4666666 l -0.79375,0.5291666 c 0.280804,1.6810188 0.964106,2.7816958 1.5875,3.9687498 z"
					id="path192531"
				/><path
					style="fill:#a2bdbb;fill-opacity:1;fill-rule:evenodd;stroke-width:3;stroke-linecap:round;stroke-linejoin:round;stroke-miterlimit:3;stroke-opacity:0.498674;paint-order:stroke fill markers"
					d="m 61.11875,13.758333 c 2.033454,-0.09054 4.137343,-0.328402 6.349999,-0.79375 L 65.881249,8.9958332 61.647917,9.525 Z"
					id="path192533"
				/><path
					style="fill:#a2bdbb;fill-opacity:1;fill-rule:evenodd;stroke-width:3;stroke-linecap:round;stroke-linejoin:round;stroke-miterlimit:3;stroke-opacity:0.498674;paint-order:stroke fill markers"
					d="m 68.527082,12.964583 1.852084,-3.7041664 -1.5875,-1.8520834 -2.116667,1.0583334 z"
					id="path192535"
				/><rect
					style="fill:#a2bdbb;fill-opacity:1;fill-rule:evenodd;stroke-width:3.31902;stroke-linecap:round;stroke-linejoin:round;stroke-miterlimit:3;stroke-opacity:0.498674;paint-order:stroke fill markers"
					id="rect192537"
					width="1.7563124"
					height="1.7563124"
					x="59.692299"
					y="-24.614082"
					transform="rotate(31.367005)"
				/><circle
					style="fill:#90a2a7;fill-opacity:1;fill-rule:evenodd;stroke-width:3;stroke-linecap:round;stroke-linejoin:round;stroke-miterlimit:3;stroke-opacity:0.498674;paint-order:stroke fill markers"
					id="circle192539"
					cx="111.65417"
					cy="32.808334"
					r="1.0583333"
				/><path
					style="fill:#d6d7d0;fill-opacity:1;fill-rule:evenodd;stroke-width:3;stroke-linecap:round;stroke-linejoin:round;stroke-miterlimit:3;stroke-opacity:0.498674;paint-order:stroke fill markers"
					d="M 80.433333,6.6145833 V 11.90625 h 25.399997 c 2.60847,1.021325 5.23947,2.017108 6.61459,6.614583 v 64.822916 h 5.29166 V 21.166666 C 116.58613,13.966778 114.91626,7.0950246 103.1875,6.6145832 Z"
					id="path192541"
				/><circle
					style="fill:#90a2a7;fill-opacity:1;fill-rule:evenodd;stroke-width:3;stroke-linecap:round;stroke-linejoin:round;stroke-miterlimit:3;stroke-opacity:0.498674;paint-order:stroke fill markers"
					id="circle192543"
					cx="96.308334"
					cy="27.516666"
					r="1.0583333"
				/><circle
					style="fill:#90a2a7;fill-opacity:1;fill-rule:evenodd;stroke-width:3;stroke-linecap:round;stroke-linejoin:round;stroke-miterlimit:3;stroke-opacity:0.498674;paint-order:stroke fill markers"
					id="circle192545"
					cx="102.12917"
					cy="38.893749"
					r="0.79374999"
				/><circle
					style="fill:#90a2a7;fill-opacity:1;fill-rule:evenodd;stroke-width:3;stroke-linecap:round;stroke-linejoin:round;stroke-miterlimit:3;stroke-opacity:0.498674;paint-order:stroke fill markers"
					id="circle192547"
					cx="99.747917"
					cy="33.602081"
					r="1.0583333"
				/><circle
					style="fill:#90a2a7;fill-opacity:1;fill-rule:evenodd;stroke-width:3;stroke-linecap:round;stroke-linejoin:round;stroke-miterlimit:3;stroke-opacity:0.498674;paint-order:stroke fill markers"
					id="circle192549"
					cx="92.074997"
					cy="24.077084"
					r="0.79374999"
				/><path
					style="fill:#f1f0ea;fill-opacity:1;fill-rule:evenodd;stroke-width:3;stroke-linecap:round;stroke-linejoin:round;stroke-miterlimit:3;stroke-opacity:0.498674;paint-order:stroke fill markers"
					d="m 76.464582,11.90625 c 7.312907,2.801912 14.770195,5.327702 20.108333,11.90625 5.238615,5.065848 8.875055,11.613168 9.260415,21.166666 l -2.11666,33.602083 h -2.64584 l 2.91042,-33.602083 C 102.87608,28.258922 87.246245,17.156608 76.464582,15.875 Z"
					id="path192551"
				/><path
					style="fill:#545355;fill-opacity:1;fill-rule:evenodd;stroke-width:3;stroke-linecap:round;stroke-linejoin:round;stroke-miterlimit:3;stroke-opacity:0.498674;paint-order:stroke fill markers"
					d="M 74.347916,6.6145832 V 9.5249999 L 77.787499,6.6145832 Z"
					id="path192553"
				/><path
					style="fill:#545355;fill-opacity:1;fill-rule:evenodd;stroke-width:3;stroke-linecap:round;stroke-linejoin:round;stroke-miterlimit:3;stroke-opacity:0.498674;paint-order:stroke fill markers"
					d="M 80.301042,6.6145832 V 9.5249999 L 83.740625,6.6145832 Z"
					id="path192555"
				/><path
					style="fill:#545355;fill-opacity:1;fill-rule:evenodd;stroke-width:3;stroke-linecap:round;stroke-linejoin:round;stroke-miterlimit:3;stroke-opacity:0.498674;paint-order:stroke fill markers"
					d="M 87.709375,6.6145832 V 9.5249999 L 91.148958,6.6145832 Z"
					id="path192557"
				/><path
					style="fill:#545355;fill-opacity:1;fill-rule:evenodd;stroke-width:3;stroke-linecap:round;stroke-linejoin:round;stroke-miterlimit:3;stroke-opacity:0.498674;paint-order:stroke fill markers"
					d="M 94.853125,6.6145832 V 9.5249999 L 98.292708,6.6145832 Z"
					id="path192559"
				/><path
					style="fill:#545355;fill-opacity:1;fill-rule:evenodd;stroke-width:2.69615;stroke-linecap:round;stroke-linejoin:round;stroke-miterlimit:3;stroke-opacity:0.498674;paint-order:stroke fill markers"
					d="m 101.20313,6.6145832 v 2.9104167 l 2.51354,-2.9104166 z"
					id="path192561"
				/><path
					style="fill:#545355;fill-opacity:1;fill-rule:evenodd;stroke-width:3;stroke-linecap:round;stroke-linejoin:round;stroke-miterlimit:3;stroke-opacity:0.498674;paint-order:stroke fill markers"
					d="m 108.21458,7.4083332 -1.85208,2.6458338 5.02708,-1.3229171 c -0.917,-0.506121 -1.86303,-0.9988602 -3.175,-1.3229167 z"
					id="path192563"
				/><path
					style="fill:#545355;fill-opacity:1;fill-rule:evenodd;stroke-width:3;stroke-linecap:round;stroke-linejoin:round;stroke-miterlimit:3;stroke-opacity:0.498674;paint-order:stroke fill markers"
					d="m 114.03542,10.847917 -2.38125,1.5875 4.49791,2.116666 c -0.42642,-0.955726 -1.00099,-2.227177 -2.11666,-3.704166 z"
					id="path192565"
				/><path
					style="fill:#545355;fill-opacity:1;fill-rule:evenodd;stroke-width:3;stroke-linecap:round;stroke-linejoin:round;stroke-miterlimit:3;stroke-opacity:0.498674;paint-order:stroke fill markers"
					d="M 116.94583,17.4625 H 114.3 l 3.43958,3.704167 c -0.0974,-1.113773 -0.28222,-2.290841 -0.79375,-3.704167 z"
					id="path192567"
				/><path
					style="fill:#545355;fill-opacity:1;fill-rule:evenodd;stroke-width:3;stroke-linecap:round;stroke-linejoin:round;stroke-miterlimit:3;stroke-opacity:0.498674;paint-order:stroke fill markers"
					d="m 117.73958,23.283333 h -2.64583 l 2.64583,3.439583 z"
					id="path192569"
				/><path
					style="fill:#545355;fill-opacity:1;fill-rule:evenodd;stroke-width:3;stroke-linecap:round;stroke-linejoin:round;stroke-miterlimit:3;stroke-opacity:0.498674;paint-order:stroke fill markers"
					d="m 117.73958,29.236458 h -2.64583 l 2.64583,3.439583 z"
					id="path192571"
				/><path
					style="fill:#545355;fill-opacity:1;fill-rule:evenodd;stroke-width:3;stroke-linecap:round;stroke-linejoin:round;stroke-miterlimit:3;stroke-opacity:0.498674;paint-order:stroke fill markers"
					d="m 117.73958,35.321875 h -2.64583 l 2.64583,3.439583 z"
					id="path192573"
				/><path
					style="fill:#545355;fill-opacity:1;fill-rule:evenodd;stroke-width:3;stroke-linecap:round;stroke-linejoin:round;stroke-miterlimit:3;stroke-opacity:0.498674;paint-order:stroke fill markers"
					d="m 117.73958,42.465625 h -2.64583 l 2.64583,3.439583 z"
					id="path192575"
				/><path
					style="fill:#545355;fill-opacity:1;fill-rule:evenodd;stroke-width:3;stroke-linecap:round;stroke-linejoin:round;stroke-miterlimit:3;stroke-opacity:0.498674;paint-order:stroke fill markers"
					d="m 117.73958,48.286458 h -2.64583 l 2.64583,3.439583 z"
					id="path192577"
				/><path
					style="fill:#545355;fill-opacity:1;fill-rule:evenodd;stroke-width:3;stroke-linecap:round;stroke-linejoin:round;stroke-miterlimit:3;stroke-opacity:0.498674;paint-order:stroke fill markers"
					d="m 117.73958,53.842708 h -2.64583 l 2.64583,3.439583 z"
					id="path192579"
				/><path
					style="fill:#545355;fill-opacity:1;fill-rule:evenodd;stroke-width:3;stroke-linecap:round;stroke-linejoin:round;stroke-miterlimit:3;stroke-opacity:0.498674;paint-order:stroke fill markers"
					d="m 117.73958,60.986458 h -2.64583 l 2.64583,3.439583 z"
					id="path192581"
				/><path
					style="fill:#545355;fill-opacity:1;fill-rule:evenodd;stroke-width:3;stroke-linecap:round;stroke-linejoin:round;stroke-miterlimit:3;stroke-opacity:0.498674;paint-order:stroke fill markers"
					d="m 117.73958,67.071875 h -2.64583 l 2.64583,3.439583 z"
					id="path192583"
				/><path
					style="fill:#545355;fill-opacity:1;fill-rule:evenodd;stroke-width:3;stroke-linecap:round;stroke-linejoin:round;stroke-miterlimit:3;stroke-opacity:0.498674;paint-order:stroke fill markers"
					d="m 117.73958,73.157292 h -2.64583 l 2.64583,3.439583 z"
					id="path192585"
				/><circle
					style="fill:#90a2a7;fill-opacity:1;fill-rule:evenodd;stroke-width:3;stroke-linecap:round;stroke-linejoin:round;stroke-miterlimit:3;stroke-opacity:0.498674;paint-order:stroke fill markers"
					id="circle192587"
					cx="96.572914"
					cy="19.314583"
					r="1.3229166"
				/><circle
					style="fill:#90a2a7;fill-opacity:1;fill-rule:evenodd;stroke-width:3;stroke-linecap:round;stroke-linejoin:round;stroke-miterlimit:3;stroke-opacity:0.498674;paint-order:stroke fill markers"
					id="circle192589"
					cx="108.74375"
					cy="18.520834"
					r="1.3229166"
				/><circle
					style="fill:#90a2a7;fill-opacity:1;fill-rule:evenodd;stroke-width:3;stroke-linecap:round;stroke-linejoin:round;stroke-miterlimit:3;stroke-opacity:0.498674;paint-order:stroke fill markers"
					id="circle192591"
					cx="109.27292"
					cy="23.018749"
					r="1.0583333"
				/><circle
					style="fill:#90a2a7;fill-opacity:1;fill-rule:evenodd;stroke-width:3;stroke-linecap:round;stroke-linejoin:round;stroke-miterlimit:3;stroke-opacity:0.498674;paint-order:stroke fill markers"
					id="circle192593"
					cx="104.775"
					cy="23.8125"
					r="0.79374999"
				/><circle
					style="fill:#90a2a7;fill-opacity:1;fill-rule:evenodd;stroke-width:3;stroke-linecap:round;stroke-linejoin:round;stroke-miterlimit:3;stroke-opacity:0.498674;paint-order:stroke fill markers"
					id="circle192595"
					cx="101.86458"
					cy="22.225"
					r="0.79374999"
				/><circle
					style="fill:#90a2a7;fill-opacity:1;fill-rule:evenodd;stroke-width:3;stroke-linecap:round;stroke-linejoin:round;stroke-miterlimit:3;stroke-opacity:0.498674;paint-order:stroke fill markers"
					id="circle192597"
					cx="98.424995"
					cy="23.018749"
					r="1.0583333"
				/><circle
					style="fill:#90a2a7;fill-opacity:1;fill-rule:evenodd;stroke-width:3;stroke-linecap:round;stroke-linejoin:round;stroke-miterlimit:3;stroke-opacity:0.498674;paint-order:stroke fill markers"
					id="circle192599"
					cx="92.604164"
					cy="28.045834"
					r="1.3229166"
				/><circle
					style="fill:#90a2a7;fill-opacity:1;fill-rule:evenodd;stroke-width:3;stroke-linecap:round;stroke-linejoin:round;stroke-miterlimit:3;stroke-opacity:0.498674;paint-order:stroke fill markers"
					id="circle192601"
					cx="104.51041"
					cy="29.104166"
					r="1.3229166"
				/><circle
					style="fill:#90a2a7;fill-opacity:1;fill-rule:evenodd;stroke-width:3;stroke-linecap:round;stroke-linejoin:round;stroke-miterlimit:3;stroke-opacity:0.498674;paint-order:stroke fill markers"
					id="circle192603"
					cx="109.5375"
					cy="27.252083"
					r="1.0583333"
				/><circle
					style="fill:#90a2a7;fill-opacity:1;fill-rule:evenodd;stroke-width:3;stroke-linecap:round;stroke-linejoin:round;stroke-miterlimit:3;stroke-opacity:0.498674;paint-order:stroke fill markers"
					id="circle192605"
					cx="107.68542"
					cy="32.014584"
					r="0.79374999"
				/><circle
					style="fill:#90a2a7;fill-opacity:1;fill-rule:evenodd;stroke-width:3;stroke-linecap:round;stroke-linejoin:round;stroke-miterlimit:3;stroke-opacity:0.498674;paint-order:stroke fill markers"
					id="circle192607"
					cx="109.00833"
					cy="38.099998"
					r="1.0583333"
				/><circle
					style="fill:#90a2a7;fill-opacity:1;fill-rule:evenodd;stroke-width:3;stroke-linecap:round;stroke-linejoin:round;stroke-miterlimit:3;stroke-opacity:0.498674;paint-order:stroke fill markers"
					id="circle192609"
					cx="105.30417"
					cy="35.454166"
					r="0.52916664"
				/><circle
					style="fill:#90a2a7;fill-opacity:1;fill-rule:evenodd;stroke-width:3;stroke-linecap:round;stroke-linejoin:round;stroke-miterlimit:3;stroke-opacity:0.498674;paint-order:stroke fill markers"
					id="circle192611"
					cx="104.51041"
					cy="32.543751"
					r="0.52916664"
				/><circle
					style="fill:#90a2a7;fill-opacity:1;fill-rule:evenodd;stroke-width:3;stroke-linecap:round;stroke-linejoin:round;stroke-miterlimit:3;stroke-opacity:0.498674;paint-order:stroke fill markers"
					id="circle192613"
					cx="99.48333"
					cy="40.745834"
					r="0.79374999"
				/><circle
					style="fill:#90a2a7;fill-opacity:1;fill-rule:evenodd;stroke-width:3;stroke-linecap:round;stroke-linejoin:round;stroke-miterlimit:3;stroke-opacity:0.498674;paint-order:stroke fill markers"
					id="circle192615"
					cx="98.954163"
					cy="37.041668"
					r="1.0583333"
				/><circle
					style="fill:#90a2a7;fill-opacity:1;fill-rule:evenodd;stroke-width:3;stroke-linecap:round;stroke-linejoin:round;stroke-miterlimit:3;stroke-opacity:0.498674;paint-order:stroke fill markers"
					id="circle192617"
					cx="96.043747"
					cy="31.75"
					r="1.3229166"
				/><circle
					style="fill:#90a2a7;fill-opacity:1;fill-rule:evenodd;stroke-width:3;stroke-linecap:round;stroke-linejoin:round;stroke-miterlimit:3;stroke-opacity:0.498674;paint-order:stroke fill markers"
					id="circle192619"
					cx="91.810417"
					cy="32.014584"
					r="0.79374999"
				/><circle
					style="fill:#90a2a7;fill-opacity:1;fill-rule:evenodd;stroke-width:3;stroke-linecap:round;stroke-linejoin:round;stroke-miterlimit:3;stroke-opacity:0.498674;paint-order:stroke fill markers"
					id="circle192621"
					cx="95.25"
					cy="35.983334"
					r="1.0583333"
				/><circle
					style="fill:#90a2a7;fill-opacity:1;fill-rule:evenodd;stroke-width:3;stroke-linecap:round;stroke-linejoin:round;stroke-miterlimit:3;stroke-opacity:0.498674;paint-order:stroke fill markers"
					id="circle192623"
					cx="88.900002"
					cy="30.1625"
					r="0.79374999"
				/><circle
					style="fill:#90a2a7;fill-opacity:1;fill-rule:evenodd;stroke-width:3;stroke-linecap:round;stroke-linejoin:round;stroke-miterlimit:3;stroke-opacity:0.498674;paint-order:stroke fill markers"
					id="circle192625"
					cx="101.86458"
					cy="19.049999"
					r="1.0583333"
				/><path
					style="fill:#7f887d;fill-opacity:1;fill-rule:evenodd;stroke-width:3;stroke-linecap:round;stroke-linejoin:round;stroke-miterlimit:3;stroke-opacity:0.498674;paint-order:stroke fill markers"
					d="M 30.95625,41.010417 33.3375,44.45 29.36875,41.010417 Z"
					id="path192627"
				/><path
					style="fill:#7f887d;fill-opacity:1;fill-rule:evenodd;stroke-width:3;stroke-linecap:round;stroke-linejoin:round;stroke-miterlimit:3;stroke-opacity:0.498674;paint-order:stroke fill markers"
					d="m 27.78125,41.539583 2.38125,3.439584 -4.233333,-3.439584 z"
					id="path192629"
				/><path
					style="fill:#75807b;fill-opacity:1;fill-rule:evenodd;stroke-width:3;stroke-linecap:round;stroke-linejoin:round;stroke-miterlimit:3;stroke-opacity:0.498674;paint-order:stroke fill markers"
					d="m 25.135416,42.068749 7.9375,-1.322916 -1.322916,-0.79375 -7.14375,1.5875 z"
					id="path192631"
				/><path
					style="fill:#9b0f0e;fill-opacity:1;fill-rule:evenodd;stroke-width:3;stroke-linecap:round;stroke-linejoin:round;stroke-miterlimit:3;stroke-opacity:0.498674;paint-order:stroke fill markers"
					d="m 34.925,28.575 h 2.116667 l 1.322916,-1.5875 h -2.116666 z"
					id="path192633"
				/><path
					style="fill:#9baa9a;fill-opacity:0.929412;fill-rule:evenodd;stroke-width:3;stroke-linecap:round;stroke-linejoin:round;stroke-miterlimit:3;stroke-opacity:0.498674;paint-order:stroke fill markers"
					d="m 16.933333,29.36875 h 1.5875 l 1.5875,-1.852084 2.38125,1.5875 -1.5875,-0.264583 -1.5875,1.5875 h -1.322917 z"
					id="path192635"
				/><path
					style="opacity:1;fill:#676865;fill-opacity:1;fill-rule:evenodd;stroke-width:3;stroke-linecap:round;stroke-linejoin:round;stroke-miterlimit:3;stroke-opacity:0.498674;paint-order:stroke fill markers"
					d="m 33.3375,24.077083 -5.55625,-4.233333 -5.291667,2.645833 5.291667,1.322917 1.852083,2.38125 z"
					id="path192637"
				/><path
					style="opacity:1;fill:#3ce7ed;fill-opacity:1;fill-rule:evenodd;stroke-width:3;stroke-linecap:round;stroke-linejoin:round;stroke-miterlimit:3;stroke-opacity:0.498674;paint-order:stroke fill markers"
					d="m 27.78125,19.84375 -5.291667,-1.322917 -11.90625,3.96875 h 11.90625 z"
					id="path192639"
				/><path
					style="opacity:1;fill:#b7f6f8;fill-opacity:1;fill-rule:evenodd;stroke-width:3;stroke-linecap:round;stroke-linejoin:round;stroke-miterlimit:3;stroke-opacity:0.498674;paint-order:stroke fill markers"
					d="M 27.78125,19.84375 22.489583,18.520833 2.6458333,21.166666 10.583333,22.489583 Z"
					id="path192641"
				/><path
					style="opacity:1;fill:#7a7a7a;fill-opacity:1;fill-rule:evenodd;stroke-width:3;stroke-linecap:round;stroke-linejoin:round;stroke-miterlimit:3;stroke-opacity:0.498674;paint-order:stroke fill markers"
					d="m 47.624999,15.875 h 2.645834 c 0.02657,1.325544 0.601104,2.70526 0,3.96875 -0.985334,2.163977 -2.272657,4.23932 -3.439584,6.35 l -3.175,-1.058334 z"
					id="path192643"
				/><path
					style="opacity:1;fill:#676865;fill-opacity:1;fill-rule:evenodd;stroke-width:3;stroke-linecap:round;stroke-linejoin:round;stroke-miterlimit:3;stroke-opacity:0.498674;paint-order:stroke fill markers"
					d="m 43.656249,25.135416 3.96875,-5.291666 c 0.531464,-1.552147 0.11764,-2.696574 0,-3.96875 h -1.852082 c 0.105684,0.827476 0.118446,1.643842 -0.529168,2.38125 l -5.027083,5.027083 z"
					id="path192645"
				/><path
					style="opacity:1;fill:#3ce7ed;fill-opacity:1;fill-rule:evenodd;stroke-width:3;stroke-linecap:round;stroke-linejoin:round;stroke-miterlimit:3;stroke-opacity:0.498674;paint-order:stroke fill markers"
					d="M 50.270833,15.875 C 49.570124,14.710132 49.532562,13.74153 46.566666,11.90625 H 39.952083 L 41.275,14.022917 Z"
					id="path192647"
				/><path
					style="opacity:1;fill:#7a7a7a;fill-opacity:1;fill-rule:evenodd;stroke-width:3;stroke-linecap:round;stroke-linejoin:round;stroke-miterlimit:3;stroke-opacity:0.498674;paint-order:stroke fill markers"
					d="m 50.270833,15.875 c -1.035949,-0.761902 -1.989385,-1.56585 -3.439584,-2.116667 -1.773259,-0.05562 -3.577433,-0.05484 -5.55625,0.264583 l -1.058332,1.587501 c 1.990349,-0.05634 3.960273,-0.05372 5.820832,0.264583 z"
					id="path192649"
				/><path
					style="opacity:1;fill:#3ce7ed;fill-opacity:1;fill-rule:evenodd;stroke-width:3;stroke-linecap:round;stroke-linejoin:round;stroke-miterlimit:3;stroke-opacity:0.498674;paint-order:stroke fill markers"
					d="m 40.216666,15.610416 c -3.122853,-0.451571 -4.475327,0.579753 -6.349999,0.793751 3.142068,-1.885619 5.173941,-2.784206 7.408332,-2.381251 z"
					id="path192651"
				/><path
					style="opacity:1;fill:#b7f6f8;fill-opacity:1;fill-rule:evenodd;stroke-width:3;stroke-linecap:round;stroke-linejoin:round;stroke-miterlimit:3;stroke-opacity:0.498674;paint-order:stroke fill markers"
					d="M 41.275,14.022917 C 41.106577,12.93338 40.411479,12.58585 39.952083,11.90625 l -6.085416,4.497917 c 3.137354,-1.58515 5.523703,-2.76342 7.408333,-2.38125 z"
					id="path192653"
				/><path
					style="opacity:1;fill:#3ce7ed;fill-opacity:1;fill-rule:evenodd;stroke-width:3;stroke-linecap:round;stroke-linejoin:round;stroke-miterlimit:3;stroke-opacity:0.498674;paint-order:stroke fill markers"
					d="m 50.270833,15.875 7.9375,-2.38125 c -0.999568,-1.109567 -2.275012,-1.129594 -3.439583,-1.5875 h -8.466667 z"
					id="path192655"
				/><path
					style="opacity:1;fill:#b7f6f8;fill-opacity:1;fill-rule:evenodd;stroke-width:3;stroke-linecap:round;stroke-linejoin:round;stroke-miterlimit:3;stroke-opacity:0.498674;paint-order:stroke fill markers"
					d="m 58.208333,13.49375 5.027083,-1.5875 h -8.466667 c 1.165103,0.43459 2.356971,0.732901 3.439584,1.5875 z"
					id="path192657"
				/><path
					style="opacity:1;fill:#7a7a7a;fill-opacity:1;fill-rule:evenodd;stroke-width:3;stroke-linecap:round;stroke-linejoin:round;stroke-miterlimit:3;stroke-opacity:0.498674;paint-order:stroke fill markers"
					d="M 50.270833,17.727083 C 52.088018,15.62565 53.814432,15.151537 55.5625,14.2875 53.806805,14.770333 52.166706,14.599546 50.270833,15.875 Z"
					id="path192659"
				/><path
					style="opacity:1;fill:#b7f6f8;fill-opacity:1;fill-rule:evenodd;stroke-width:3;stroke-linecap:round;stroke-linejoin:round;stroke-miterlimit:3;stroke-opacity:0.498674;paint-order:stroke fill markers"
					d="M 56.620833,12.435417 C 51.368995,12.378055 45.570851,12.383329 40.216666,12.7 l -0.264583,-0.79375 h 16.139583 z"
					id="path192661"
				/><path
					style="opacity:1;fill:#3ce7ed;fill-opacity:1;fill-rule:evenodd;stroke-width:3;stroke-linecap:round;stroke-linejoin:round;stroke-miterlimit:3;stroke-opacity:0.498674;paint-order:stroke fill markers"
					d="m 68.791666,37.041666 7.9375,-2.645833 -7.9375,6.614583 5.291666,-1.322916 -5.291666,3.968749 3.96875,-1.322916 -3.96875,3.96875 z"
					id="path192663"
				/><path
					style="opacity:1;fill:#b7f6f8;fill-opacity:1;fill-rule:evenodd;stroke-width:3;stroke-linecap:round;stroke-linejoin:round;stroke-miterlimit:3;stroke-opacity:0.498674;paint-order:stroke fill markers"
					d="m 72.760416,35.71875 3.96875,-1.322917 -3.175,2.645833 z"
					id="path192665"
				/><path
					style="opacity:1;fill:#b7f6f8;fill-opacity:1;fill-rule:evenodd;stroke-width:3;stroke-linecap:round;stroke-linejoin:round;stroke-miterlimit:3;stroke-opacity:0.498674;paint-order:stroke fill markers"
					d="m 74.083332,39.6875 -3.175,0.793749 1.058334,0.79375 z"
					id="path192667"
				/><path
					style="opacity:1;fill:#b7f6f8;fill-opacity:1;fill-rule:evenodd;stroke-width:3;stroke-linecap:round;stroke-linejoin:round;stroke-miterlimit:3;stroke-opacity:0.498674;paint-order:stroke fill markers"
					d="m 72.760416,42.333333 -1.322917,1.322916 -0.264583,-0.79375 z"
					id="path192669"
				/></g
			><g id="g190819"
				><path
					style="fill:#b6bfc1;fill-opacity:1;fill-rule:evenodd;stroke-width:3;stroke-linecap:round;stroke-linejoin:round;stroke-miterlimit:3;stroke-opacity:0.498674;paint-order:stroke fill markers"
					d="M 87.312499,95.249999 115.09375,83.343749 113.77083,15.875 103.1875,11.90625 83.343749,21.166666 84.666666,31.75 l 14.552083,17.197916 -14.552083,19.84375 -5.291667,7.9375 z"
					id="path119543"
				/><path
					style="fill:#90a2a7;fill-opacity:1;fill-rule:evenodd;stroke-width:3;stroke-linecap:round;stroke-linejoin:round;stroke-miterlimit:3;stroke-opacity:0.498674;paint-order:stroke fill markers"
					d="m 86.518749,29.36875 c 1.305793,-1.01551 2.923359,-1.456266 3.704167,-3.439584 -0.5208,-1.738822 -0.135539,-3.060945 0,-4.497916 l 2.38125,-0.264584 c 0.832576,-1.819153 1.407163,-3.927109 2.645833,-5.291666 2.854713,0.655683 4.679101,2.369248 6.614581,3.96875 1.09234,-1.958167 2.95282,-3.189711 5.29167,-3.96875 2.11319,1.409441 3.87887,3.171514 5.29167,5.291666 l 1.32291,-3.96875 -7.9375,-6.614583 H 75.406249 l -1.322917,3.96875 5.291667,7.9375 z"
					id="path119030"
				/><path
					style="fill:#757574;fill-opacity:1;fill-rule:evenodd;stroke-width:3;stroke-linecap:round;stroke-linejoin:round;stroke-miterlimit:3;stroke-opacity:0.498674;paint-order:stroke fill markers"
					d="m 59.531249,28.045833 8.202083,-4.7625 -5.027083,5.820833 9.525,-2.910416 -3.96875,4.233333 9.525,-1.852083 c -2.76267,1.057771 -4.367926,2.590591 -6.35,3.96875 h 3.175 c 2.261896,-0.968111 4.109211,0.409792 6.085417,1.058333 -2.118241,-0.203516 -4.237524,-0.599978 -6.35,0.264583 l 1.5875,2.116667 c 2.177615,0.276944 3.545275,0.960902 5.027083,1.5875 -1.795233,-0.178385 -3.546643,-0.494277 -5.55625,0 l 0.79375,2.38125 c 2.257544,0.126664 3.890116,1.009682 5.55625,1.852083 -1.785951,-0.32866 -3.466056,-0.761757 -5.820833,-0.529167 l 0.264583,2.645834 c 2.368376,1.066976 4.128102,2.372445 5.820833,3.704166 -2.05681,-0.655315 -3.86272,-1.469721 -6.35,-1.852083 l 0.529167,2.910417 6.879167,5.291666 -7.9375,-1.852083 1.058333,3.704167 6.085417,4.233333 -6.35,-1.852083 -1.5875,-2.645834 -4.233334,-17.197916 z"
					id="path97127"
				/><path
					style="fill:#f1f0ea;fill-opacity:1;fill-rule:evenodd;stroke-width:3;stroke-linecap:round;stroke-linejoin:round;stroke-miterlimit:3;stroke-opacity:0.498674;paint-order:stroke fill markers"
					d="m 74.083332,78.052082 v -4.7625 l -1.058333,-1.058333 v -6.085417 c 1.440193,-1.803866 3.560807,-3.448061 3.704167,-5.556249 V 37.041666 c -0.575361,-5.18908 -3.621653,-8.219208 -8.73125,-8.73125 l -9.789583,-0.264583 -3.96875,2.291358 v 8.027392 l 13.229166,2.645833 -1.322917,17.197917 -6.614583,7.937499 2.645834,17.197917 11.906249,-3.96875 z"
					id="path92953"
				/><path
					style="fill:#b2b8b0;fill-opacity:1;fill-rule:evenodd;stroke-width:3;stroke-linecap:round;stroke-linejoin:round;stroke-miterlimit:3;stroke-opacity:0.498674;paint-order:stroke fill markers"
					d="m 55.297916,37.30625 13.49375,-0.264584 v 19.84375 l -5.291667,7.9375 v 13.229166 l 7.937501,10e-7 v 30.427087 l -31.75,0 7.937499,-31.750004 1.5875,-7.14375 3.704167,-8.202083 11.1125,-6.415805 V 41.010416 h -7.14375 l -2.645833,2.645833 H 38.1 l 2.910416,-2.645833 6.614583,-2.645833 z"
					id="path85381"
				/><path
					style="fill:#7f887d;fill-opacity:1;fill-rule:evenodd;stroke-width:3;stroke-linecap:round;stroke-linejoin:round;stroke-miterlimit:3;stroke-opacity:0.498674;paint-order:stroke fill markers"
					d="m 47.889583,75.406249 0.529166,-2.38125 3.439584,-1.5875 z"
					id="path87024"
				/><path
					style="fill:#7f887d;fill-opacity:1;fill-rule:evenodd;stroke-width:3;stroke-linecap:round;stroke-linejoin:round;stroke-miterlimit:3;stroke-opacity:0.498674;paint-order:stroke fill markers"
					d="m 49.2125,69.585417 3.174999,-1.322918 -3.439583,2.910417 z"
					id="path124603"
				/><path
					style="fill:#eae7dc;fill-opacity:1;fill-rule:evenodd;stroke-width:3;stroke-linecap:round;stroke-linejoin:round;stroke-miterlimit:3;stroke-opacity:0.498674;paint-order:stroke fill markers"
					d="m 47.624999,77.258332 1.852084,-8.202083 -6.614584,4.497917 0.264584,4.7625 z"
					id="path87760"
				/><path
					style="fill:#1d150f;fill-opacity:1;fill-rule:evenodd;stroke-width:3;stroke-linecap:round;stroke-linejoin:round;stroke-miterlimit:3;stroke-opacity:0.498674;paint-order:stroke fill markers"
					d="M 19.84375,37.570833 19.579166,35.983333 19.05,32.279166 21.166666,31.057109 H 33.602083 L 42.11262,33.3375 40.127562,40.745833 H 20.902083 Z"
					id="path77076"
				/><path
					style="fill:#9d191a;fill-opacity:1;fill-rule:evenodd;stroke-width:3;stroke-linecap:round;stroke-linejoin:round;stroke-miterlimit:3;stroke-opacity:0.498674;paint-order:stroke fill markers"
					d="M 21.695833,39.6875 C 27.66753,37.181137 32.65608,37.157116 38.1,35.983333 l 2.38125,2.910417 C 38.9965,39.937785 29.311938,41.930054 21.695833,39.6875 Z"
					id="path67005"
				/><path
					style="fill:#75807b;fill-opacity:1;fill-rule:evenodd;stroke-width:3;stroke-linecap:round;stroke-linejoin:round;stroke-miterlimit:3;stroke-opacity:0.498674;paint-order:stroke fill markers"
					d="M 20.372916,39.952083 21.695833,39.6875 h 1.852083 3.96875 1.322917 L 30.1625,38.629166 h 1.058333 l 2.910417,-0.264583 h 2.910416 l 5.556251,0.79375 -3.968751,0.79375 c -4.236456,1.401973 -6.944477,2.382904 -11.90625,2.645833 l -6.35,0.264583 z"
					id="path67277"
				/><path
					style="fill:#7f887d;fill-opacity:1;fill-rule:evenodd;stroke-width:3;stroke-linecap:round;stroke-linejoin:round;stroke-miterlimit:3;stroke-opacity:0.498674;paint-order:stroke fill markers"
					d="m 47.889583,78.052082 c 0,0 10.847916,-7.672916 10.583333,-7.672916 -0.264583,0 -10.847917,12.170833 -10.847917,12.170833 z"
					id="path87028"
				/><path
					style="fill:#7f887d;fill-opacity:1;fill-rule:evenodd;stroke-width:3;stroke-linecap:round;stroke-linejoin:round;stroke-miterlimit:3;stroke-opacity:0.498674;paint-order:stroke fill markers"
					d="m 47.624999,97.895832 13.229167,-15.875 -14.552083,10.583334 z"
					id="path87032"
				/><path
					style="fill:#f1f0ea;fill-opacity:1;fill-rule:evenodd;stroke-width:3;stroke-linecap:round;stroke-linejoin:round;stroke-miterlimit:3;stroke-opacity:0.498674;paint-order:stroke fill markers"
					d="m 73.81875,73.289583 6.879166,-10e-7 2.116666,-4.497916 v -1.5875 h -5.820833 l -1.058333,1.058333 v 1.852083 h 2.645833 v -1.322916 h 2.116667 v 1.058333 h -1.058334 v 1.5875 h -4.233333 l -0.79375,-0.79375 v -3.704167 l 1.852083,-1.852083 h 5.027084 L 94.720832,51.858333 c 0.428701,-1.347233 0.268906,-2.661086 0,-3.96875 -6.904046,-12.149895 -15.539218,-23.639052 -25.4,-34.660416 l 10e-7,-1.5875 h 7.14375 l -1e-6,4.233333 25.399998,33.072916 -18.520831,24.077083 v 5.027083 l -9.524999,10e-7 z"
					id="path106076"
				/><path
					style="fill:#a2bdbb;fill-opacity:1;fill-rule:evenodd;stroke-width:3;stroke-linecap:round;stroke-linejoin:round;stroke-miterlimit:3;stroke-opacity:0.498674;paint-order:stroke fill markers"
					d="m 74.877082,78.316666 -8.466666,-10.31875 h -1.5875 l 0.529167,7.408333 1.587499,1.322917 2.910417,-1.322917 -2.645833,-2.910417 -0.529167,1.058334 1.852083,1.322916 -1.322916,0.529167 -1.322917,-0.79375 v -4.497917 h 0.79375 l 7.408333,8.466667 z"
					id="path90605"
				/><path
					style="fill:#4b4a38;fill-opacity:1;fill-rule:evenodd;stroke-width:3;stroke-linecap:round;stroke-linejoin:round;stroke-miterlimit:3;stroke-opacity:0.498674;paint-order:stroke fill markers"
					d="M 13.49375,101.6 V 83.872916 h 2.645833 v -19.05 h 3.96875 v -5.820833 h 15.875 v 6.085416 h 8.202083 v 11.90625 h 3.704167 v 23.283331 h 6.614583 v 4.49792 l 6.35,2.38125 V 92.339582 h 10.054166 v -14.2875 h 12.435417 l 8.73125,11.1125 h 7.14375 V 78.581249 h 12.435421 v 4.7625 h 6.35 V 119.59167 H 11.90625 Z"
					id="path63463"
				/><path
					style="fill:#777777;fill-opacity:1;fill-rule:evenodd;stroke-width:3;stroke-linecap:round;stroke-linejoin:round;stroke-miterlimit:3;stroke-opacity:0.498674;paint-order:stroke fill markers"
					d="m 11.377083,101.86458 8.466667,-7.408331 c -1.426371,3.602192 -3.344867,6.869961 -3.439584,11.377081 l 0.79375,0.52917 c 2.247305,-3.41544 5.036891,-5.90367 7.9375,-8.202085 l -3.96875,10.318755 2.645834,-0.26459 9.525,-8.995831 -3.96875,10.847921 3.439583,-0.79375 c 2.764391,-3.30652 6.048747,-6.38401 9.789583,-9.26042 l -3.704166,10.05417 5.291666,0.52916 c 1.096342,-5.48536 4.414208,-6.67129 7.14375,-8.99583 -1.468197,3.03175 -3.044353,5.98582 -3.439583,9.78958 l 4.7625,0.26459 c 1.381809,-3.40625 3.674942,-5.57163 5.820833,-7.9375 -1.000931,2.69555 -2.080319,4.97441 -2.381249,8.46666 l 3.439582,0.52917 c 1.773971,-2.53992 3.031097,-5.54612 5.55625,-7.40833 -1.274861,2.64383 -2.003419,5.41761 -1.852082,7.9375 H 66.675 c 1.079901,-2.65078 3.500724,-4.58175 5.820833,-6.35 -1.200378,2.18798 -2.367232,4.25965 -2.645833,6.87916 L 73.025,114.3 c 1.009953,-2.23667 2.852272,-4.3341 4.762499,-6.35 -0.944512,2.45161 -1.971222,4.94159 -2.381249,7.14375 h 4.233333 c 0.303418,-2.54901 2.746911,-4.82483 4.7625,-6.35 -0.815184,2.17611 -1.672662,3.94051 -2.116666,6.61458 l 2.645833,0.26459 c 0.665396,-2.51576 2.580897,-3.71831 4.233333,-5.29167 -0.950356,1.81238 -1.57548,3.50639 -2.116666,5.55625 l 5.027082,0.52917 c 1.125548,-2.79788 2.279515,-4.3146 3.439583,-5.55625 -0.646043,2.05288 -1.15109,4.18684 -1.058332,6.08541 l 3.174999,0.26459 c 0.349695,-1.74118 1.372708,-3.11561 2.381251,-4.49792 -0.408629,1.56342 -0.86156,3.0752 -0.529167,4.7625 l 2.910417,0.26458 c 0.21331,-1.95074 1.11021,-2.69008 1.85208,-3.70416 -0.27783,1.28823 -0.48802,2.50912 -0.26458,3.96875 l 3.43958,0.26458 c 0.39051,-1.83168 1.19807,-2.87313 2.11667,-3.70417 -0.25753,1.26617 -0.74462,2.37178 -0.52917,3.96875 l 2.64584,0.26459 c 0.2349,-1.16543 0.91744,-1.89963 1.5875,-2.64584 -0.11861,0.95324 -0.36658,1.83458 -0.26459,2.91042 v 0.79375 H 12.7 Z"
					id="path59264"
				/><path
					style="fill:#ced1cb;fill-opacity:1;fill-rule:evenodd;stroke-width:3;stroke-linecap:round;stroke-linejoin:round;stroke-miterlimit:3;stroke-opacity:0.498674;paint-order:stroke fill markers"
					d="m 11.377083,101.86458 c 7.234688,6.49513 15.728088,6.44393 24.077083,7.14375 l 25.664583,2.91042 23.283333,2.91042 29.633338,3.70416 c 5.11264,0.7219 2.98661,0.45304 5.02708,1.05834 -0.86344,0.29379 -2.08549,0.6696 -4.7625,1.05833 H 11.641667 C 7.8381627,119.33756 7.8978162,116.6606 7.1437499,114.3 v -6.08542 c 0.7127532,-2.17364 2.1827978,-4.2855 4.2333331,-6.35 z"
					id="path59262"
				/><path
					style="fill:#6c6c6c;fill-opacity:1;fill-rule:evenodd;stroke-width:3;stroke-linecap:round;stroke-linejoin:round;stroke-miterlimit:3;stroke-opacity:0.498674;paint-order:stroke fill markers"
					d="m 10.31875,112.44792 5.291666,-5.55625 -2.645833,5.82083 2.116667,5.29167 z"
					id="path59214"
				/><path
					style="fill:#6c6c6c;fill-opacity:1;fill-rule:evenodd;stroke-width:2.71429;stroke-linecap:round;stroke-linejoin:round;stroke-miterlimit:3;stroke-opacity:0.498674;paint-order:stroke fill markers"
					d="m 18.772818,113.50625 4.787698,-5.02708 -2.393849,5.26646 1.91508,4.7877 z"
					id="path59216"
				/><path
					style="fill:#6c6c6c;fill-opacity:1;fill-rule:evenodd;stroke-width:2.71429;stroke-linecap:round;stroke-linejoin:round;stroke-miterlimit:3;stroke-opacity:0.498674;paint-order:stroke fill markers"
					d="m 26.710317,114.82917 4.7877,-5.02709 -2.39385,5.26647 1.915081,4.78771 z"
					id="path59218"
				/><path
					style="fill:#6c6c6c;fill-opacity:1;fill-rule:evenodd;stroke-width:2.01361;stroke-linecap:round;stroke-linejoin:round;stroke-miterlimit:3;stroke-opacity:0.498674;paint-order:stroke fill markers"
					d="m 33.942861,114.85437 3.551778,-3.72937 -1.775889,3.90696 1.420712,3.55178 z"
					id="path59220"
				/><path
					style="fill:#6c6c6c;fill-opacity:1;fill-rule:evenodd;stroke-width:2.01361;stroke-linecap:round;stroke-linejoin:round;stroke-miterlimit:3;stroke-opacity:0.498674;paint-order:stroke fill markers"
					d="m 40.557444,114.85437 3.551778,-3.72937 -1.775889,3.90696 1.420712,3.55178 z"
					id="path59222"
				/><path
					style="fill:#6c6c6c;fill-opacity:1;fill-rule:evenodd;stroke-width:1.5;stroke-linecap:round;stroke-linejoin:round;stroke-miterlimit:3;stroke-opacity:0.498674;paint-order:stroke fill markers"
					d="m 47.625001,115.49063 2.645832,-2.77813 -1.322916,2.91042 1.058334,2.64584 z"
					id="path59224"
				/><path
					style="fill:#6c6c6c;fill-opacity:1;fill-rule:evenodd;stroke-width:1.5;stroke-linecap:round;stroke-linejoin:round;stroke-miterlimit:3;stroke-opacity:0.498674;paint-order:stroke fill markers"
					d="m 53.181251,115.75521 2.645832,-2.77813 -1.322916,2.91042 1.058334,2.64584 z"
					id="path59226"
				/><path
					style="fill:#6c6c6c;fill-opacity:1;fill-rule:evenodd;stroke-width:1.5;stroke-linecap:round;stroke-linejoin:round;stroke-miterlimit:3;stroke-opacity:0.498674;paint-order:stroke fill markers"
					d="m 58.208334,116.28438 2.645832,-2.77813 -1.322916,2.91042 1.058334,2.64584 z"
					id="path59228"
				/><path
					style="fill:#6c6c6c;fill-opacity:1;fill-rule:evenodd;stroke-width:1.21429;stroke-linecap:round;stroke-linejoin:round;stroke-miterlimit:3;stroke-opacity:0.498674;paint-order:stroke fill markers"
					d="m 62.693651,116.28438 2.141864,-2.24896 -1.070932,2.35605 0.856747,2.14187 z"
					id="path59230"
				/><path
					style="fill:#6c6c6c;fill-opacity:1;fill-rule:evenodd;stroke-width:1.21429;stroke-linecap:round;stroke-linejoin:round;stroke-miterlimit:3;stroke-opacity:0.498674;paint-order:stroke fill markers"
					d="m 66.926985,116.57416 2.141864,-2.24896 -1.070932,2.35605 0.856747,2.14187 z"
					id="path59232"
				/><path
					style="fill:#6c6c6c;fill-opacity:1;fill-rule:evenodd;stroke-width:1.08504;stroke-linecap:round;stroke-linejoin:round;stroke-miterlimit:3;stroke-opacity:0.498674;paint-order:stroke fill markers"
					d="m 71.803475,117.10333 1.913884,-2.00958 -0.956942,2.10527 0.765555,1.91389 z"
					id="path59234"
				/><path
					style="fill:#6c6c6c;fill-opacity:1;fill-rule:evenodd;stroke-width:1.08504;stroke-linecap:round;stroke-linejoin:round;stroke-miterlimit:3;stroke-opacity:0.498674;paint-order:stroke fill markers"
					d="m 75.507641,117.37931 1.913884,-2.00958 -0.956942,2.10527 0.765555,1.91389 z"
					id="path59236"
				/><path
					style="fill:#6c6c6c;fill-opacity:1;fill-rule:evenodd;stroke-width:0.948334;stroke-linecap:round;stroke-linejoin:round;stroke-miterlimit:3;stroke-opacity:0.498674;paint-order:stroke fill markers"
					d="m 79.596958,117.64389 1.67275,-1.75639 -0.836375,1.84002 0.669102,1.67276 z"
					id="path59238"
				/><path
					style="fill:#6c6c6c;fill-opacity:1;fill-rule:evenodd;stroke-width:0.948334;stroke-linecap:round;stroke-linejoin:round;stroke-miterlimit:3;stroke-opacity:0.498674;paint-order:stroke fill markers"
					d="m 83.036542,117.92054 1.67275,-1.75639 -0.836375,1.84002 0.669102,1.67276 z"
					id="path59240"
				/><path
					style="fill:#6c6c6c;fill-opacity:1;fill-rule:evenodd;stroke-width:0.948334;stroke-linecap:round;stroke-linejoin:round;stroke-miterlimit:3;stroke-opacity:0.498674;paint-order:stroke fill markers"
					d="m 87.005292,117.92054 1.67275,-1.75639 -0.836375,1.84002 0.669102,1.67276 z"
					id="path59242"
				/><path
					style="fill:#6c6c6c;fill-opacity:1;fill-rule:evenodd;stroke-width:0.811988;stroke-linecap:round;stroke-linejoin:round;stroke-miterlimit:3;stroke-opacity:0.498674;paint-order:stroke fill markers"
					d="m 91.358874,118.19714 1.432252,-1.50387 -0.716126,1.57548 0.572902,1.43226 z"
					id="path59244"
				/><path
					style="fill:#6c6c6c;fill-opacity:1;fill-rule:evenodd;stroke-width:0.811988;stroke-linecap:round;stroke-linejoin:round;stroke-miterlimit:3;stroke-opacity:0.498674;paint-order:stroke fill markers"
					d="m 94.798457,118.57515 1.432252,-1.50387 -0.716126,1.57548 0.572902,1.43226 z"
					id="path59246"
				/><path
					style="fill:#6c6c6c;fill-opacity:1;fill-rule:evenodd;stroke-width:0.811988;stroke-linecap:round;stroke-linejoin:round;stroke-miterlimit:3;stroke-opacity:0.498674;paint-order:stroke fill markers"
					d="m 97.973457,118.72631 1.432252,-1.50387 -0.716126,1.57548 0.572902,1.43226 z"
					id="path59248"
				/><path
					style="fill:#6c6c6c;fill-opacity:1;fill-rule:evenodd;stroke-width:0.736862;stroke-linecap:round;stroke-linejoin:round;stroke-miterlimit:3;stroke-opacity:0.498674;paint-order:stroke fill markers"
					d="m 101.07083,118.83973 1.29973,-1.36473 -0.64987,1.42971 0.5199,1.29975 z"
					id="path59250"
				/><path
					style="fill:#6c6c6c;fill-opacity:1;fill-rule:evenodd;stroke-width:0.599996;stroke-linecap:round;stroke-linejoin:round;stroke-miterlimit:3;stroke-opacity:0.498674;paint-order:stroke fill markers"
					d="m 103.98127,118.99752 1.05831,-1.11124 -0.52916,1.16415 0.42333,1.05833 z"
					id="path59252"
				/><path
					style="fill:#6c6c6c;fill-opacity:1;fill-rule:evenodd;stroke-width:0.599996;stroke-linecap:round;stroke-linejoin:round;stroke-miterlimit:3;stroke-opacity:0.498674;paint-order:stroke fill markers"
					d="m 106.6271,119.27417 1.05831,-1.11124 -0.52916,1.16415 0.42333,1.05833 z"
					id="path59254"
				/><path
					style="fill:#6c6c6c;fill-opacity:1;fill-rule:evenodd;stroke-width:0.599996;stroke-linecap:round;stroke-linejoin:round;stroke-miterlimit:3;stroke-opacity:0.498674;paint-order:stroke fill markers"
					d="m 109.00835,119.34825 1.05831,-1.11124 -0.52916,1.16415 0.42333,1.05833 z"
					id="path59256"
				/><path
					style="fill:#6c6c6c;fill-opacity:1;fill-rule:evenodd;stroke-width:0.440001;stroke-linecap:round;stroke-linejoin:round;stroke-miterlimit:3;stroke-opacity:0.498674;paint-order:stroke fill markers"
					d="m 111.26612,119.34825 0.77611,-0.81492 -0.38806,0.85372 0.31045,0.77612 z"
					id="path59258"
				/><path
					style="fill:#6c6c6c;fill-opacity:1;fill-rule:evenodd;stroke-width:0.297142;stroke-linecap:round;stroke-linejoin:round;stroke-miterlimit:3;stroke-opacity:0.498674;paint-order:stroke fill markers"
					d="m 113.08896,119.34825 0.52413,-0.55033 -0.26207,0.57653 0.20966,0.52413 z"
					id="path59260"
				/><path
					style="fill:#d2d2c3;fill-opacity:1;fill-rule:evenodd;stroke-width:3;stroke-linecap:round;stroke-linejoin:round;stroke-miterlimit:3;stroke-opacity:0.498674;paint-order:stroke fill markers"
					d="M 20.372916,39.952083 19.84375,37.570833 21.695833,39.6875 Z"
					id="path64391"
				/><rect
					style="fill:#2b2c21;fill-opacity:1;fill-rule:evenodd;stroke-width:3;stroke-linecap:round;stroke-linejoin:round;stroke-miterlimit:3;stroke-opacity:0.498674;paint-order:stroke fill markers"
					id="rect65225"
					width="7.9375"
					height="3.96875"
					x="91.28125"
					y="101.86458"
					ry="0"
				/><rect
					style="fill:#2b2c21;fill-opacity:1;fill-rule:evenodd;stroke-width:3.07409;stroke-linecap:round;stroke-linejoin:round;stroke-miterlimit:3;stroke-opacity:0.498674;paint-order:stroke fill markers"
					id="rect65227"
					width="5.5562601"
					height="7.9375"
					x="112.44791"
					y="96.572914"
				/><rect
					style="fill:#2b2c21;fill-opacity:1;fill-rule:evenodd;stroke-width:3;stroke-linecap:round;stroke-linejoin:round;stroke-miterlimit:3;stroke-opacity:0.498674;paint-order:stroke fill markers"
					id="rect65229"
					width="2.6458333"
					height="3.96875"
					x="109.80208"
					y="100.54166"
				/><rect
					style="fill:#2b2c21;fill-opacity:1;fill-rule:evenodd;stroke-width:3;stroke-linecap:round;stroke-linejoin:round;stroke-miterlimit:3;stroke-opacity:0.498674;paint-order:stroke fill markers"
					id="rect65231"
					width="5.2916665"
					height="2.6458333"
					x="95.25"
					y="93.927086"
				/><rect
					style="fill:#2b2c21;fill-opacity:1;fill-rule:evenodd;stroke-width:2.95683;stroke-linecap:round;stroke-linejoin:round;stroke-miterlimit:3;stroke-opacity:0.498674;paint-order:stroke fill markers"
					id="rect65233"
					width="8.9958353"
					height="3.96875"
					x="16.139582"
					y="76.729164"
				/><rect
					style="fill:#2b2c21;fill-opacity:1;fill-rule:evenodd;stroke-width:2.93939;stroke-linecap:round;stroke-linejoin:round;stroke-miterlimit:3;stroke-opacity:0.498674;paint-order:stroke fill markers"
					id="rect65235"
					width="6.3499999"
					height="9.260417"
					x="16.139584"
					y="68.791664"
				/><rect
					style="fill:#2b2c21;fill-opacity:1;fill-rule:evenodd;stroke-width:3.22413;stroke-linecap:round;stroke-linejoin:round;stroke-miterlimit:3;stroke-opacity:0.498674;paint-order:stroke fill markers"
					id="rect65237"
					width="5.556251"
					height="2.910418"
					x="30.427082"
					y="62.177082"
				/><path
					style="fill:#7f887d;fill-opacity:1;fill-rule:evenodd;stroke-width:3;stroke-linecap:round;stroke-linejoin:round;stroke-miterlimit:3;stroke-opacity:0.498674;paint-order:stroke fill markers"
					d="M 47.624999,89.958332 58.208333,76.729166 47.624999,85.989582 Z"
					id="path87030"
				/><rect
					style="fill:#2b2c21;fill-opacity:1;fill-rule:evenodd;stroke-width:3.07409;stroke-linecap:round;stroke-linejoin:round;stroke-miterlimit:3;stroke-opacity:0.498674;paint-order:stroke fill markers"
					id="rect65239"
					width="5.5562525"
					height="11.90625"
					x="42.333332"
					y="84.666664"
				/><rect
					style="fill:#2b2c21;fill-opacity:1;fill-rule:evenodd;stroke-width:3.4641;stroke-linecap:round;stroke-linejoin:round;stroke-miterlimit:3;stroke-opacity:0.498674;paint-order:stroke fill markers"
					id="rect65241"
					width="5.2916665"
					height="6.6145835"
					x="37.041668"
					y="87.3125"
				/><rect
					style="fill:#2b2c21;fill-opacity:1;fill-rule:evenodd;stroke-width:3.14643;stroke-linecap:round;stroke-linejoin:round;stroke-miterlimit:3;stroke-opacity:0.498674;paint-order:stroke fill markers"
					id="rect65243"
					width="5.8208332"
					height="2.6458333"
					x="70.908333"
					y="84.666664"
				/><rect
					style="fill:#2b2c21;fill-opacity:1;fill-rule:evenodd;stroke-width:3;stroke-linecap:round;stroke-linejoin:round;stroke-miterlimit:3;stroke-opacity:0.498674;paint-order:stroke fill markers"
					id="rect65245"
					width="5.2916665"
					height="2.6458309"
					x="99.21875"
					y="85.989586"
				/><rect
					style="fill:#2b2c21;fill-opacity:1;fill-rule:evenodd;stroke-width:3;stroke-linecap:round;stroke-linejoin:round;stroke-miterlimit:3;stroke-opacity:0.498674;paint-order:stroke fill markers"
					id="rect66143"
					width="8.7312498"
					height="3.96875"
					x="60.854164"
					y="97.631248"
				/><rect
					style="fill:#2b2c21;fill-opacity:1;fill-rule:evenodd;stroke-width:3;stroke-linecap:round;stroke-linejoin:round;stroke-miterlimit:3;stroke-opacity:0.498674;paint-order:stroke fill markers"
					id="rect66145"
					width="7.9375"
					height="3.96875"
					x="66.145836"
					y="100.54166"
				/><path
					style="fill:#bbbca3;fill-opacity:1;fill-rule:evenodd;stroke-width:3;stroke-linecap:round;stroke-linejoin:round;stroke-miterlimit:3;stroke-opacity:0.498674;paint-order:stroke fill markers"
					d="M 23.547916,39.6875 H 25.4 l -1.852084,-2.38125 z"
					id="path66927"
				/><path
					style="fill:#bbbca3;fill-opacity:1;fill-rule:evenodd;stroke-width:3;stroke-linecap:round;stroke-linejoin:round;stroke-miterlimit:3;stroke-opacity:0.498674;paint-order:stroke fill markers"
					d="m 27.252083,37.30625 1.5875,2.38125 h -1.322917 z"
					id="path66983"
				/><path
					style="fill:#bbbca3;fill-opacity:1;fill-rule:evenodd;stroke-width:3;stroke-linecap:round;stroke-linejoin:round;stroke-miterlimit:3;stroke-opacity:0.498674;paint-order:stroke fill markers"
					d="m 29.897916,36.5125 1.322917,2.116666 H 30.1625 Z"
					id="path66985"
				/><path
					style="fill:#bbbca3;fill-opacity:1;fill-rule:evenodd;stroke-width:3;stroke-linecap:round;stroke-linejoin:round;stroke-miterlimit:3;stroke-opacity:0.498674;paint-order:stroke fill markers"
					d="m 34.13125,35.454166 2.910416,2.910417 H 34.13125 Z"
					id="path66987"
				/><path
					style="fill:#bbbca3;fill-opacity:1;fill-rule:evenodd;stroke-width:3;stroke-linecap:round;stroke-linejoin:round;stroke-miterlimit:3;stroke-opacity:0.498674;paint-order:stroke fill markers"
					d="m 29.633333,32.014583 2.116667,3.175 V 32.54375 Z"
					id="path66991"
				/><path
					style="fill:#bbbca3;fill-opacity:1;fill-rule:evenodd;stroke-width:3;stroke-linecap:round;stroke-linejoin:round;stroke-miterlimit:3;stroke-opacity:0.498674;paint-order:stroke fill markers"
					d="m 27.78125,32.014583 1.058333,2.645833 -2.116666,-2.645833 z"
					id="path66993"
				/><path
					style="fill:#bbbca3;fill-opacity:1;fill-rule:evenodd;stroke-width:3;stroke-linecap:round;stroke-linejoin:round;stroke-miterlimit:3;stroke-opacity:0.498674;paint-order:stroke fill markers"
					d="m 19.05,32.279166 0.529166,3.704167 0.264584,-3.96875 z"
					id="path66997"
				/><path
					style="fill:#bbbca3;fill-opacity:1;fill-rule:evenodd;stroke-width:3;stroke-linecap:round;stroke-linejoin:round;stroke-miterlimit:3;stroke-opacity:0.498674;paint-order:stroke fill markers"
					d="m 20.108333,31.75 2.645833,3.439583 -1.058333,-3.175 z"
					id="path66999"
				/><path
					style="fill:#bbbca3;fill-opacity:1;fill-rule:evenodd;stroke-width:3;stroke-linecap:round;stroke-linejoin:round;stroke-miterlimit:3;stroke-opacity:0.498674;paint-order:stroke fill markers"
					d="m 23.01875,31.75 2.645833,2.910416 -1.058333,-2.645833 z"
					id="path67001"
				/><path
					style="fill:#e3e1d5;fill-opacity:1;fill-rule:evenodd;stroke-width:3;stroke-linecap:round;stroke-linejoin:round;stroke-miterlimit:3;stroke-opacity:0.498674;paint-order:stroke fill markers"
					d="M 19.05,32.279166 H 18.520833 V 30.95625 l -2.38125,-2.38125 2.38125,-2.38125 0.79375,-0.79375 0.79375,0.79375 h 9.525 l 3.666175,-2.116667 h 6.123409 l 0.79375,-0.79375 h 1.587499 V 23.8125 l 5.820833,2.38125 15.610417,-5.027084 -5.027083,6.879167 -2.645834,8.995833 -12.964582,0.264584 -5.556251,-4.497917 H 31.220833 L 30.1625,32.197304 H 20.108333 Z"
					id="path71269"
				/><path
					style="fill:#b2b7b0;fill-opacity:1;fill-rule:evenodd;stroke-width:3;stroke-linecap:round;stroke-linejoin:round;stroke-miterlimit:3;stroke-opacity:0.498674;paint-order:stroke fill markers"
					d="m 51.858333,36.777083 3.704166,-2.38125 -1.5875,3.175 5.027084,-3.175 -1.058334,3.439583 4.233334,-3.175 -0.529167,3.175 4.233333,-2.910416 -0.264583,3.175 4.233333,-2.38125 -2.116667,2.645833 3.175,1.5875 -3.439583,-0.79375 3.439583,4.233333 -3.439583,-2.116667 3.175,4.7625 -3.704167,-1.5875 4.233334,5.027084 -3.96875,-2.116667 3.439583,5.55625 -3.96875,-1.852083 3.439583,4.7625 -2.910416,-1.5875 2.910416,5.027083 -3.175,-2.645833 0.79375,5.55625 -3.174999,-3.704167 V 39.6875 H 52.916666 Z"
					id="path90609"
				/><path
					style="fill:#9fa799;fill-opacity:1;fill-rule:evenodd;stroke-width:3;stroke-linecap:round;stroke-linejoin:round;stroke-miterlimit:3;stroke-opacity:0.498674;paint-order:stroke fill markers"
					d="m 20.372916,42.862499 c 0.868716,1.162579 1.790787,2.305137 3.439584,3.175 L 38.1,43.65625 h 15.874999 l 1.488792,-6.614584 z"
					id="path69618"
				/><path
					style="fill:#95a495;fill-opacity:1;fill-rule:evenodd;stroke-width:3;stroke-linecap:round;stroke-linejoin:round;stroke-miterlimit:3;stroke-opacity:0.498674;paint-order:stroke fill markers"
					d="m 29.897916,28.310416 -0.79375,1.5875 1.5875,-0.79375 h 7.9375 l 3.439583,-1.985843 2.645834,-0.395407 -0.79375,-0.79375 -7.14375,0.529167 -3.439583,1.322917 z"
					id="path72062"
				/><path
					style="fill:#75807b;fill-opacity:1;fill-rule:evenodd;stroke-width:3;stroke-linecap:round;stroke-linejoin:round;stroke-miterlimit:3;stroke-opacity:0.498674;paint-order:stroke fill markers"
					d="m 39.158333,34.13125 3.704166,1.322916 4.7625,-3.439583 8.466667,0.529167 -6.614583,3.175 5.820834,1.322917 -12.964584,2.116666 z"
					id="path80595"
				/><path
					style="fill:#75807b;fill-opacity:1;fill-rule:evenodd;stroke-width:3;stroke-linecap:round;stroke-linejoin:round;stroke-miterlimit:3;stroke-opacity:0.498674;paint-order:stroke fill markers"
					d="M 55.297916,37.041666 56.35625,38.629167 49.741666,38.89375 38.1,43.656249 33.05901,40.745833 c 7.365558,-1.323744 14.160352,-3.719178 22.238906,-3.704167 z"
					id="path81420"
				/><path
					style="fill:#9ca497;fill-opacity:1;fill-rule:evenodd;stroke-width:3;stroke-linecap:round;stroke-linejoin:round;stroke-miterlimit:3;stroke-opacity:0.498674;paint-order:stroke fill markers"
					d="m 39.952083,35.189583 3.96875,3.175 5.55625,-2.645833 -3.439583,2.910417 -3.704167,0.529166 -2.645833,-3.96875 z"
					id="path81422"
				/><path
					style="fill:#1d150f;fill-opacity:1;fill-rule:evenodd;stroke-width:3;stroke-linecap:round;stroke-linejoin:round;stroke-miterlimit:3;stroke-opacity:0.498674;paint-order:stroke fill markers"
					d="m 39.952083,35.189583 2.38125,3.96875 c 0,0 0,0 -1.81545,-0.09141 -0.09835,-0.005 -2.1533,-2.819006 -2.1533,-2.819006 z"
					id="path79141"
				/><path
					style="fill:#bbbca3;fill-opacity:1;fill-rule:evenodd;stroke-width:3;stroke-linecap:round;stroke-linejoin:round;stroke-miterlimit:3;stroke-opacity:0.498674;paint-order:stroke fill markers"
					d="m 39.952083,35.189583 -1.5875,1.058333 -2.116667,-4.7625 z"
					id="path66989"
				/><path
					style="fill:#8d988a;fill-opacity:1;fill-rule:evenodd;stroke-width:3;stroke-linecap:round;stroke-linejoin:round;stroke-miterlimit:3;stroke-opacity:0.498674;paint-order:stroke fill markers"
					d="m 46.831249,28.045833 h 3.439584 c 0,0 -1.852084,2.910417 -1.852084,2.910417 v -1.852084 z"
					id="path83970"
				/><path
					style="fill:#8d988a;fill-opacity:1;fill-rule:evenodd;stroke-width:3;stroke-linecap:round;stroke-linejoin:round;stroke-miterlimit:3;stroke-opacity:0.498674;paint-order:stroke fill markers"
					d="m 51.196875,26.722917 h 3.439584 c 0,0 -1.852084,2.910417 -1.852084,2.910417 V 27.78125 Z"
					id="path83972"
				/><path
					style="fill:#8d988a;fill-opacity:1;fill-rule:evenodd;stroke-width:2.30769;stroke-linecap:round;stroke-linejoin:round;stroke-miterlimit:3;stroke-opacity:0.498674;paint-order:stroke fill markers"
					d="m 55.033333,25.206651 h 2.645834 c 0,0 -1.42468,2.238781 -1.42468,2.238781 v -1.424679 z"
					id="path83974"
				/><path
					style="fill:#8d988a;fill-opacity:1;fill-rule:evenodd;stroke-width:1.66864;stroke-linecap:round;stroke-linejoin:round;stroke-miterlimit:3;stroke-opacity:0.498674;paint-order:stroke fill markers"
					d="m 58.147275,23.572966 h 1.913142 c 0,0 -1.030153,1.618811 -1.030153,1.618811 v -1.030153 z"
					id="path83976"
				/><path
					style="fill:#7f887d;fill-opacity:1;fill-rule:evenodd;stroke-width:3;stroke-linecap:round;stroke-linejoin:round;stroke-miterlimit:3;stroke-opacity:0.498674;paint-order:stroke fill markers"
					d="m 48.418749,43.656249 3.704167,-3.704166 -1.852083,3.704166 z"
					id="path86378"
				/><path
					style="fill:#7f887d;fill-opacity:1;fill-rule:evenodd;stroke-width:3;stroke-linecap:round;stroke-linejoin:round;stroke-miterlimit:3;stroke-opacity:0.498674;paint-order:stroke fill markers"
					d="m 52.387499,43.656249 2.645834,-3.439583 -1.5875,3.439583 z"
					id="path86994"
				/><path
					style="fill:#7f887d;fill-opacity:1;fill-rule:evenodd;stroke-width:3;stroke-linecap:round;stroke-linejoin:round;stroke-miterlimit:3;stroke-opacity:0.498674;paint-order:stroke fill markers"
					d="m 62.970833,37.835416 2.38125,1.322917 -2.38125,1.322916 1.058333,-1.322916 z"
					id="path86998"
				/><path
					style="fill:#7f887d;fill-opacity:1;fill-rule:evenodd;stroke-width:3;stroke-linecap:round;stroke-linejoin:round;stroke-miterlimit:3;stroke-opacity:0.498674;paint-order:stroke fill markers"
					d="m 59.266667,37.835416 2.38125,1.322917 -2.38125,1.322916 1.058333,-1.322916 z"
					id="path87000"
				/><path
					style="fill:#7f887d;fill-opacity:1;fill-rule:evenodd;stroke-width:3;stroke-linecap:round;stroke-linejoin:round;stroke-miterlimit:3;stroke-opacity:0.498674;paint-order:stroke fill markers"
					d="m 64.029166,42.333333 2.645833,-1.5875 -2.645833,3.175 z"
					id="path87002"
				/><path
					style="fill:#7f887d;fill-opacity:1;fill-rule:evenodd;stroke-width:3;stroke-linecap:round;stroke-linejoin:round;stroke-miterlimit:3;stroke-opacity:0.498674;paint-order:stroke fill markers"
					d="M 64.029166,46.0375 66.674999,44.45 64.029166,47.625 Z"
					id="path87006"
				/><path
					style="fill:#7f887d;fill-opacity:1;fill-rule:evenodd;stroke-width:3;stroke-linecap:round;stroke-linejoin:round;stroke-miterlimit:3;stroke-opacity:0.498674;paint-order:stroke fill markers"
					d="m 64.029166,48.683333 2.645833,-1.5875 -2.645833,3.175 z"
					id="path87008"
				/><path
					style="fill:#7f887d;fill-opacity:1;fill-rule:evenodd;stroke-width:3;stroke-linecap:round;stroke-linejoin:round;stroke-miterlimit:3;stroke-opacity:0.498674;paint-order:stroke fill markers"
					d="m 64.029166,51.858333 2.645833,-1.5875 -2.645833,3.175 z"
					id="path87010"
				/><path
					style="fill:#7f887d;fill-opacity:1;fill-rule:evenodd;stroke-width:3;stroke-linecap:round;stroke-linejoin:round;stroke-miterlimit:3;stroke-opacity:0.498674;paint-order:stroke fill markers"
					d="m 61.647916,56.356249 1.058333,2.645834 -2.910416,-1.5875 z"
					id="path87012"
				/><path
					style="fill:#7f887d;fill-opacity:1;fill-rule:evenodd;stroke-width:3;stroke-linecap:round;stroke-linejoin:round;stroke-miterlimit:3;stroke-opacity:0.498674;paint-order:stroke fill markers"
					d="m 59.531249,60.589583 -1.5875,-2.116667 -1.322916,0.79375 z"
					id="path87016"
				/><path
					style="fill:#7f887d;fill-opacity:1;fill-rule:evenodd;stroke-width:3;stroke-linecap:round;stroke-linejoin:round;stroke-miterlimit:3;stroke-opacity:0.498674;paint-order:stroke fill markers"
					d="m 52.652083,61.912499 3.175,0.264584 -3.96875,1.5875 z"
					id="path87018"
				/><path
					style="fill:#7f887d;fill-opacity:1;fill-rule:evenodd;stroke-width:3;stroke-linecap:round;stroke-linejoin:round;stroke-miterlimit:3;stroke-opacity:0.498674;paint-order:stroke fill markers"
					d="m 50.799999,66.145832 2.645834,-0.793749 -3.439584,2.381249 z"
					id="path87020"
				/><path
					style="fill:#a2bdbb;fill-opacity:1;fill-rule:evenodd;stroke-width:3;stroke-linecap:round;stroke-linejoin:round;stroke-miterlimit:3;stroke-opacity:0.498674;paint-order:stroke fill markers"
					d="m 57.679166,29.36875 3.439583,2.116666 -4.233333,1.322917 1.852083,-1.5875 z"
					id="path88928"
				/><path
					style="fill:#a2bdbb;fill-opacity:1;fill-rule:evenodd;stroke-width:3;stroke-linecap:round;stroke-linejoin:round;stroke-miterlimit:3;stroke-opacity:0.498674;paint-order:stroke fill markers"
					d="m 65.352083,29.897916 2.381249,2.116667 -3.174999,0.79375 L 66.145832,31.75 Z"
					id="path90579"
				/><path
					style="fill:#a2bdbb;fill-opacity:1;fill-rule:evenodd;stroke-width:3.4;stroke-linecap:round;stroke-linejoin:round;stroke-miterlimit:3;stroke-opacity:0.498674;paint-order:stroke fill markers"
					d="m 72.337082,31.167917 0.599723,4.497916 -2.998611,-2.69875 2.099027,0.899584 z"
					id="path90581"
				/><path
					style="fill:#a2bdbb;fill-opacity:1;fill-rule:evenodd;stroke-width:3;stroke-linecap:round;stroke-linejoin:round;stroke-miterlimit:3;stroke-opacity:0.498674;paint-order:stroke fill markers"
					d="m 74.877082,37.835416 -0.529166,3.175 -2.645834,-3.175 2.116667,1.058334 z"
					id="path90583"
				/><path
					style="fill:#a2bdbb;fill-opacity:1;fill-rule:evenodd;stroke-width:3;stroke-linecap:round;stroke-linejoin:round;stroke-miterlimit:3;stroke-opacity:0.498674;paint-order:stroke fill markers"
					d="m 75.670832,43.920833 -1.5875,2.910416 -1.5875,-3.175 1.5875,1.5875 z"
					id="path90587"
				/><path
					style="fill:#a2bdbb;fill-opacity:1;fill-rule:evenodd;stroke-width:3;stroke-linecap:round;stroke-linejoin:round;stroke-miterlimit:3;stroke-opacity:0.498674;paint-order:stroke fill markers"
					d="m 75.670832,48.683334 -1.5875,2.910416 -1.5875,-3.175 1.5875,1.5875 z"
					id="path90591"
				/><path
					style="fill:#a2bdbb;fill-opacity:1;fill-rule:evenodd;stroke-width:3;stroke-linecap:round;stroke-linejoin:round;stroke-miterlimit:3;stroke-opacity:0.498674;paint-order:stroke fill markers"
					d="m 71.966666,53.445833 1.5875,3.439583 2.116666,-3.175 -2.116666,1.322917 z"
					id="path90595"
				/><path
					style="fill:#a2bdbb;fill-opacity:1;fill-rule:evenodd;stroke-width:3;stroke-linecap:round;stroke-linejoin:round;stroke-miterlimit:3;stroke-opacity:0.498674;paint-order:stroke fill markers"
					d="m 71.437499,58.208333 v 4.497916 l 3.175,-3.96875 -2.116667,1.322917 z"
					id="path90601"
				/><path
					style="fill:#a2bdbb;fill-opacity:1;fill-rule:evenodd;stroke-width:3;stroke-linecap:round;stroke-linejoin:round;stroke-miterlimit:3;stroke-opacity:0.498674;paint-order:stroke fill markers"
					d="m 72.760416,64.029166 -3.175,3.439583 v -4.497916 l 0.79375,2.116666 z"
					id="path90603"
				/><path
					style="fill:#f1f0ea;fill-opacity:1;fill-rule:evenodd;stroke-width:3;stroke-linecap:round;stroke-linejoin:round;stroke-miterlimit:3;stroke-opacity:0.498674;paint-order:stroke fill markers"
					d="m 81.756249,76.464582 c 0.403725,-2.057974 2.903178,-3.447431 5.55625,-4.7625 l -2.910417,5.291667 z"
					id="path106216"
				/><path
					style="fill:#f1f0ea;fill-opacity:1;fill-rule:evenodd;stroke-width:3;stroke-linecap:round;stroke-linejoin:round;stroke-miterlimit:3;stroke-opacity:0.498674;paint-order:stroke fill markers"
					d="m 88.899999,75.406249 2.645833,0.79375 -3.704165,5.027084 -2.381251,-1.587501 z"
					id="path106218"
				/><path
					style="fill:#f1f0ea;fill-opacity:1;fill-rule:evenodd;stroke-width:3;stroke-linecap:round;stroke-linejoin:round;stroke-miterlimit:3;stroke-opacity:0.498674;paint-order:stroke fill markers"
					d="m 92.074999,80.433332 2.116666,1.058334 -3.704166,3.439583 -2.645832,-1.058332 z"
					id="path106222"
				/><path
					style="fill:#929d8f;fill-opacity:1;fill-rule:evenodd;stroke-width:3;stroke-linecap:round;stroke-linejoin:round;stroke-miterlimit:3;stroke-opacity:0.498674;paint-order:stroke fill markers"
					d="m 87.312499,71.702082 1.5875,3.704167 -3.439583,4.233333 -1.058334,-2.645833 z"
					id="path106224"
				/><path
					style="fill:#929d8f;fill-opacity:1;fill-rule:evenodd;stroke-width:3;stroke-linecap:round;stroke-linejoin:round;stroke-miterlimit:3;stroke-opacity:0.498674;paint-order:stroke fill markers"
					d="m 87.841666,81.227082 v 2.645834 l 4.233333,-3.439584 -0.529167,-4.233333 z"
					id="path106282"
				/><path
					style="fill:#929d8f;fill-opacity:1;fill-rule:evenodd;stroke-width:3;stroke-linecap:round;stroke-linejoin:round;stroke-miterlimit:3;stroke-opacity:0.498674;paint-order:stroke fill markers"
					d="m 94.191665,81.491666 0.264584,1.322916 -2.910416,3.439585 -1.058334,-1.322918 z"
					id="path106284"
				/><path
					style="fill:#5e5e61;fill-opacity:1;fill-rule:evenodd;stroke-width:3;stroke-linecap:round;stroke-linejoin:round;stroke-miterlimit:3;stroke-opacity:0.498674;paint-order:stroke fill markers"
					d="m 81.756249,76.464582 -0.79375,1.5875 2.38125,0.264584 2.116667,1.322916 -1.058334,-2.645833 z"
					id="path106286"
				/><path
					style="fill:#7c7c7e;fill-opacity:1;fill-rule:evenodd;stroke-width:3;stroke-linecap:round;stroke-linejoin:round;stroke-miterlimit:3;stroke-opacity:0.498674;paint-order:stroke fill markers"
					d="m 80.962499,78.052082 -1.852083,8.995834 6.35,-7.408334 -2.116667,-1.322916 z"
					id="path106346"
				/><path
					style="fill:#7c7c7e;fill-opacity:1;fill-rule:evenodd;stroke-width:3;stroke-linecap:round;stroke-linejoin:round;stroke-miterlimit:3;stroke-opacity:0.498674;paint-order:stroke fill markers"
					d="m 85.460417,79.639583 2.381249,4.233333 -6.35,6.085416 z"
					id="path106402"
				/><path
					style="fill:#5e5e61;fill-opacity:1;fill-rule:evenodd;stroke-width:3;stroke-linecap:round;stroke-linejoin:round;stroke-miterlimit:3;stroke-opacity:0.498674;paint-order:stroke fill markers"
					d="m 85.460416,79.639582 0.529167,2.381251 1.852083,1.852083 v -2.645834 z"
					id="path106342"
				/><path
					style="fill:#7c7c7e;fill-opacity:1;fill-rule:evenodd;stroke-width:3;stroke-linecap:round;stroke-linejoin:round;stroke-miterlimit:3;stroke-opacity:0.498674;paint-order:stroke fill markers"
					d="m 87.841667,83.872917 1.322915,1.852082 2.381251,0.529168 -6.879167,5.556249 z"
					id="path106404"
				/><path
					style="fill:#5e5e61;fill-opacity:1;fill-rule:evenodd;stroke-width:3;stroke-linecap:round;stroke-linejoin:round;stroke-miterlimit:3;stroke-opacity:0.498674;paint-order:stroke fill markers"
					d="m 90.487499,84.931249 1.058334,1.322918 v 0 H 88.9 l -1.058333,-2.38125 -10e-7,-10e-7 z"
					id="path106344"
				/><path
					style="fill:#a2bdbb;fill-opacity:1;fill-rule:evenodd;stroke-width:3;stroke-linecap:round;stroke-linejoin:round;stroke-miterlimit:3;stroke-opacity:0.498674;paint-order:stroke fill markers"
					d="m 82.020832,64.558333 2.645834,0.264583 -1.058334,-1.852083 z"
					id="path109316"
				/><path
					style="fill:#a2bdbb;fill-opacity:1;fill-rule:evenodd;stroke-width:3;stroke-linecap:round;stroke-linejoin:round;stroke-miterlimit:3;stroke-opacity:0.498674;paint-order:stroke fill markers"
					d="m 85.460416,61.118749 3.439583,-0.264583 -1.852083,-1.322917 z"
					id="path109533"
				/><path
					style="fill:#a2bdbb;fill-opacity:1;fill-rule:evenodd;stroke-width:3;stroke-linecap:round;stroke-linejoin:round;stroke-miterlimit:3;stroke-opacity:0.498674;paint-order:stroke fill markers"
					d="m 88.899999,57.679166 h 3.439583 l -1.5875,-1.852083 z"
					id="path109535"
				/><path
					style="fill:#a2bdbb;fill-opacity:1;fill-rule:evenodd;stroke-width:3;stroke-linecap:round;stroke-linejoin:round;stroke-miterlimit:3;stroke-opacity:0.498674;paint-order:stroke fill markers"
					d="m 94.191665,52.387499 1.058334,1.058334 -2.645833,0.529166 z"
					id="path109537"
				/><path
					style="fill:#a2bdbb;fill-opacity:1;fill-rule:evenodd;stroke-width:3;stroke-linecap:round;stroke-linejoin:round;stroke-miterlimit:3;stroke-opacity:0.498674;paint-order:stroke fill markers"
					d="m 94.985415,49.477083 1.852084,-3.439584 -2.38125,1.322917 0.264583,0.529167 z"
					id="path109539"
				/><path
					style="fill:#a2bdbb;fill-opacity:1;fill-rule:evenodd;stroke-width:3;stroke-linecap:round;stroke-linejoin:round;stroke-miterlimit:3;stroke-opacity:0.498674;paint-order:stroke fill markers"
					d="m 94.720832,41.804166 -1.322917,3.96875 -1.322916,-2.38125 z"
					id="path109541"
				/><path
					style="fill:#a2bdbb;fill-opacity:1;fill-rule:evenodd;stroke-width:3;stroke-linecap:round;stroke-linejoin:round;stroke-miterlimit:3;stroke-opacity:0.498674;paint-order:stroke fill markers"
					d="m 91.281249,37.30625 -0.79375,3.439583 -1.322917,-1.852083 z"
					id="path109543"
				/><path
					style="fill:#a2bdbb;fill-opacity:1;fill-rule:evenodd;stroke-width:3;stroke-linecap:round;stroke-linejoin:round;stroke-miterlimit:3;stroke-opacity:0.498674;paint-order:stroke fill markers"
					d="m 87.577082,36.5125 1.058334,-3.175 -2.38125,1.058333 z"
					id="path109545"
				/><path
					style="fill:#a2bdbb;fill-opacity:1;fill-rule:evenodd;stroke-width:3;stroke-linecap:round;stroke-linejoin:round;stroke-miterlimit:3;stroke-opacity:0.498674;paint-order:stroke fill markers"
					d="M 85.195832,29.104166 84.402082,31.75 83.343749,30.427083 Z"
					id="path109547"
				/><path
					style="fill:#a2bdbb;fill-opacity:1;fill-rule:evenodd;stroke-width:3;stroke-linecap:round;stroke-linejoin:round;stroke-miterlimit:3;stroke-opacity:0.498674;paint-order:stroke fill markers"
					d="m 82.020832,25.4 -0.264583,2.910416 -1.322917,-1.5875 z"
					id="path109549"
				/><path
					style="fill:#a2bdbb;fill-opacity:1;fill-rule:evenodd;stroke-width:3;stroke-linecap:round;stroke-linejoin:round;stroke-miterlimit:3;stroke-opacity:0.498674;paint-order:stroke fill markers"
					d="m 79.374999,21.43125 -0.529167,3.175 -1.322916,-1.852084 z"
					id="path109551"
				/><path
					style="fill:#a2bdbb;fill-opacity:1;fill-rule:evenodd;stroke-width:3;stroke-linecap:round;stroke-linejoin:round;stroke-miterlimit:3;stroke-opacity:0.498674;paint-order:stroke fill markers"
					d="m 75.935416,17.4625 -0.529167,2.910416 -1.322917,-1.5875 z"
					id="path109553"
				/><path
					style="fill:#a2bdbb;fill-opacity:1;fill-rule:evenodd;stroke-width:3;stroke-linecap:round;stroke-linejoin:round;stroke-miterlimit:3;stroke-opacity:0.498674;paint-order:stroke fill markers"
					d="m 73.024999,14.2875 -0.264583,2.910416 -1.587499,-1.852083 z"
					id="path109555"
				/><circle
					style="fill:#90a2a7;fill-opacity:1;fill-rule:evenodd;stroke-width:3;stroke-linecap:round;stroke-linejoin:round;stroke-miterlimit:3;stroke-opacity:0.498674;paint-order:stroke fill markers"
					id="path119497"
					cx="96.308334"
					cy="27.516666"
					r="1.0583333"
				/><circle
					style="fill:#90a2a7;fill-opacity:1;fill-rule:evenodd;stroke-width:3;stroke-linecap:round;stroke-linejoin:round;stroke-miterlimit:3;stroke-opacity:0.498674;paint-order:stroke fill markers"
					id="path119527"
					cx="99.747917"
					cy="33.602081"
					r="1.0583333"
				/><circle
					style="fill:#90a2a7;fill-opacity:1;fill-rule:evenodd;stroke-width:3;stroke-linecap:round;stroke-linejoin:round;stroke-miterlimit:3;stroke-opacity:0.498674;paint-order:stroke fill markers"
					id="path119521"
					cx="102.12917"
					cy="38.893749"
					r="0.79374999"
				/><circle
					style="fill:#90a2a7;fill-opacity:1;fill-rule:evenodd;stroke-width:3;stroke-linecap:round;stroke-linejoin:round;stroke-miterlimit:3;stroke-opacity:0.498674;paint-order:stroke fill markers"
					id="path119537"
					cx="92.074997"
					cy="24.077084"
					r="0.79374999"
				/><path
					style="fill:#f1f0ea;fill-opacity:1;fill-rule:evenodd;stroke-width:3;stroke-linecap:round;stroke-linejoin:round;stroke-miterlimit:3;stroke-opacity:0.498674;paint-order:stroke fill markers"
					d="m 76.2,11.641667 c 7.312907,2.801912 15.034777,5.592285 20.372915,12.170833 5.238615,5.065848 8.875055,11.613168 9.260415,21.166666 l -2.11666,33.602083 h -2.64584 l 2.91042,-33.602083 C 102.87608,28.258922 86.981663,17.156608 76.2,15.875 Z"
					id="path117847"
				/><path
					style="fill:#d6d7d0;fill-opacity:1;fill-rule:evenodd;stroke-width:3;stroke-linecap:round;stroke-linejoin:round;stroke-miterlimit:3;stroke-opacity:0.498674;paint-order:stroke fill markers"
					d="M 70.114582,11.90625 H 80.697916 V 6.614583 h -10.31875 l -0.79375,0.7937505 0.264583,4.4979165 z"
					id="path113787"
				/><path
					style="fill:#4d4d4b;fill-opacity:1;fill-rule:evenodd;stroke-width:3;stroke-linecap:round;stroke-linejoin:round;stroke-miterlimit:3;stroke-opacity:0.498674;paint-order:stroke fill markers"
					d="m 69.585416,7.4083332 1.852083,1.5875 -2.116666,4.2333338 -0.79375,-0.264584 1.5875,-3.7041663 -1.322917,-1.8520835 z"
					id="path109557"
				/><path
					style="fill:#a2bdbb;fill-opacity:1;fill-rule:evenodd;stroke-width:3;stroke-linecap:round;stroke-linejoin:round;stroke-miterlimit:3;stroke-opacity:0.498674;paint-order:stroke fill markers"
					d="m 60.060417,13.758333 -3.439584,0.264583 c -2.417194,-0.0611 -4.828923,-0.16654 -7.14375,-1.058333 -1.719647,-1.058051 -2.506168,-2.365388 -3.175,-3.7041664 3.071967,-4.0464338 6.816731,-3.7540304 10.31875,-5.0270833 -1.994847,1.2943964 -4.096093,2.3612239 -5.820834,4.2333333 0.25886,0.6517784 0.541751,1.2990152 1.322917,1.8520834 2.740769,0.105972 5.508638,0.117996 8.466667,-0.5291667 z"
					id="path109667"
				/><path
					style="fill:#a2bdbb;fill-opacity:1;fill-rule:evenodd;stroke-width:2.59808;stroke-linecap:round;stroke-linejoin:round;stroke-miterlimit:3;stroke-opacity:0.498674;paint-order:stroke fill markers"
					d="m 60.457291,9.7895832 1.190626,-0.2645833 c 0,0 -0.396876,4.2333331 -0.396876,4.2333331 h -1.190625 z"
					id="path111760"
				/><path
					style="fill:#a2bdbb;fill-opacity:1;fill-rule:evenodd;stroke-width:3;stroke-linecap:round;stroke-linejoin:round;stroke-miterlimit:3;stroke-opacity:0.498674;paint-order:stroke fill markers"
					d="M 68.527082,12.964583 C 68.113217,11.489962 67.607853,10.004242 66.674999,8.4666666 l -0.79375,0.5291666 c 0.280804,1.6810188 0.964106,2.7816958 1.5875,3.9687498 z"
					id="path111816"
				/><path
					style="fill:#a2bdbb;fill-opacity:1;fill-rule:evenodd;stroke-width:3;stroke-linecap:round;stroke-linejoin:round;stroke-miterlimit:3;stroke-opacity:0.498674;paint-order:stroke fill markers"
					d="m 61.11875,13.758333 c 2.033454,-0.09054 4.137343,-0.328402 6.349999,-0.79375 L 65.881249,8.9958332 61.647917,9.525 Z"
					id="path111820"
				/><path
					style="fill:#a2bdbb;fill-opacity:1;fill-rule:evenodd;stroke-width:3;stroke-linecap:round;stroke-linejoin:round;stroke-miterlimit:3;stroke-opacity:0.498674;paint-order:stroke fill markers"
					d="m 68.527082,12.964583 1.852084,-3.7041664 -1.5875,-1.8520834 -2.116667,1.0583334 z"
					id="path111876"
				/><rect
					style="fill:#a2bdbb;fill-opacity:1;fill-rule:evenodd;stroke-width:3.31902;stroke-linecap:round;stroke-linejoin:round;stroke-miterlimit:3;stroke-opacity:0.498674;paint-order:stroke fill markers"
					id="rect111986"
					width="1.7563124"
					height="1.7563124"
					x="59.692299"
					y="-24.614082"
					transform="rotate(31.367005)"
				/><circle
					style="fill:#90a2a7;fill-opacity:1;fill-rule:evenodd;stroke-width:3;stroke-linecap:round;stroke-linejoin:round;stroke-miterlimit:3;stroke-opacity:0.498674;paint-order:stroke fill markers"
					id="path119505"
					cx="111.65417"
					cy="32.808334"
					r="1.0583333"
				/><path
					style="fill:#d6d7d0;fill-opacity:1;fill-rule:evenodd;stroke-width:3;stroke-linecap:round;stroke-linejoin:round;stroke-miterlimit:3;stroke-opacity:0.498674;paint-order:stroke fill markers"
					d="M 80.433333,6.6145833 V 11.90625 h 25.399997 c 2.60847,1.021325 5.23947,2.017108 6.61459,6.614583 v 64.822916 h 5.29166 V 21.166666 C 116.58613,13.966778 114.91626,7.0950246 103.1875,6.6145832 Z"
					id="path113785"
				/><path
					style="fill:#545355;fill-opacity:1;fill-rule:evenodd;stroke-width:3;stroke-linecap:round;stroke-linejoin:round;stroke-miterlimit:3;stroke-opacity:0.498674;paint-order:stroke fill markers"
					d="M 74.347916,6.6145832 V 9.5249999 L 77.787499,6.6145832 Z"
					id="path115162"
				/><path
					style="fill:#545355;fill-opacity:1;fill-rule:evenodd;stroke-width:3;stroke-linecap:round;stroke-linejoin:round;stroke-miterlimit:3;stroke-opacity:0.498674;paint-order:stroke fill markers"
					d="M 80.301042,6.6145832 V 9.5249999 L 83.740625,6.6145832 Z"
					id="path115164"
				/><path
					style="fill:#545355;fill-opacity:1;fill-rule:evenodd;stroke-width:3;stroke-linecap:round;stroke-linejoin:round;stroke-miterlimit:3;stroke-opacity:0.498674;paint-order:stroke fill markers"
					d="M 87.709375,6.6145832 V 9.5249999 L 91.148958,6.6145832 Z"
					id="path115166"
				/><path
					style="fill:#545355;fill-opacity:1;fill-rule:evenodd;stroke-width:3;stroke-linecap:round;stroke-linejoin:round;stroke-miterlimit:3;stroke-opacity:0.498674;paint-order:stroke fill markers"
					d="M 94.853125,6.6145832 V 9.5249999 L 98.292708,6.6145832 Z"
					id="path115168"
				/><path
					style="fill:#545355;fill-opacity:1;fill-rule:evenodd;stroke-width:2.69615;stroke-linecap:round;stroke-linejoin:round;stroke-miterlimit:3;stroke-opacity:0.498674;paint-order:stroke fill markers"
					d="m 101.20313,6.6145832 v 2.9104167 l 2.51354,-2.9104166 z"
					id="path115170"
				/><path
					style="fill:#545355;fill-opacity:1;fill-rule:evenodd;stroke-width:3;stroke-linecap:round;stroke-linejoin:round;stroke-miterlimit:3;stroke-opacity:0.498674;paint-order:stroke fill markers"
					d="m 108.21458,7.4083332 -1.85208,2.6458338 5.02708,-1.3229171 c -0.917,-0.506121 -1.86303,-0.9988602 -3.175,-1.3229167 z"
					id="path115172"
				/><path
					style="fill:#545355;fill-opacity:1;fill-rule:evenodd;stroke-width:3;stroke-linecap:round;stroke-linejoin:round;stroke-miterlimit:3;stroke-opacity:0.498674;paint-order:stroke fill markers"
					d="m 114.03542,10.847917 -2.38125,1.5875 4.49791,2.116666 c -0.42642,-0.955726 -1.00099,-2.227177 -2.11666,-3.704166 z"
					id="path115174"
				/><path
					style="fill:#545355;fill-opacity:1;fill-rule:evenodd;stroke-width:3;stroke-linecap:round;stroke-linejoin:round;stroke-miterlimit:3;stroke-opacity:0.498674;paint-order:stroke fill markers"
					d="M 116.94583,17.4625 H 114.3 l 3.43958,3.704167 c -0.0974,-1.113773 -0.28222,-2.290841 -0.79375,-3.704167 z"
					id="path115176"
				/><path
					style="fill:#545355;fill-opacity:1;fill-rule:evenodd;stroke-width:3;stroke-linecap:round;stroke-linejoin:round;stroke-miterlimit:3;stroke-opacity:0.498674;paint-order:stroke fill markers"
					d="m 117.73958,23.283333 h -2.64583 l 2.64583,3.439583 z"
					id="path115178"
				/><path
					style="fill:#545355;fill-opacity:1;fill-rule:evenodd;stroke-width:3;stroke-linecap:round;stroke-linejoin:round;stroke-miterlimit:3;stroke-opacity:0.498674;paint-order:stroke fill markers"
					d="m 117.73958,29.236458 h -2.64583 l 2.64583,3.439583 z"
					id="path115180"
				/><path
					style="fill:#545355;fill-opacity:1;fill-rule:evenodd;stroke-width:3;stroke-linecap:round;stroke-linejoin:round;stroke-miterlimit:3;stroke-opacity:0.498674;paint-order:stroke fill markers"
					d="m 117.73958,35.321875 h -2.64583 l 2.64583,3.439583 z"
					id="path115182"
				/><path
					style="fill:#545355;fill-opacity:1;fill-rule:evenodd;stroke-width:3;stroke-linecap:round;stroke-linejoin:round;stroke-miterlimit:3;stroke-opacity:0.498674;paint-order:stroke fill markers"
					d="m 117.73958,42.465625 h -2.64583 l 2.64583,3.439583 z"
					id="path115184"
				/><path
					style="fill:#545355;fill-opacity:1;fill-rule:evenodd;stroke-width:3;stroke-linecap:round;stroke-linejoin:round;stroke-miterlimit:3;stroke-opacity:0.498674;paint-order:stroke fill markers"
					d="m 117.73958,48.286458 h -2.64583 l 2.64583,3.439583 z"
					id="path115186"
				/><path
					style="fill:#545355;fill-opacity:1;fill-rule:evenodd;stroke-width:3;stroke-linecap:round;stroke-linejoin:round;stroke-miterlimit:3;stroke-opacity:0.498674;paint-order:stroke fill markers"
					d="m 117.73958,53.842708 h -2.64583 l 2.64583,3.439583 z"
					id="path115188"
				/><path
					style="fill:#545355;fill-opacity:1;fill-rule:evenodd;stroke-width:3;stroke-linecap:round;stroke-linejoin:round;stroke-miterlimit:3;stroke-opacity:0.498674;paint-order:stroke fill markers"
					d="m 117.73958,60.986458 h -2.64583 l 2.64583,3.439583 z"
					id="path115190"
				/><path
					style="fill:#545355;fill-opacity:1;fill-rule:evenodd;stroke-width:3;stroke-linecap:round;stroke-linejoin:round;stroke-miterlimit:3;stroke-opacity:0.498674;paint-order:stroke fill markers"
					d="m 117.73958,67.071875 h -2.64583 l 2.64583,3.439583 z"
					id="path115192"
				/><path
					style="fill:#545355;fill-opacity:1;fill-rule:evenodd;stroke-width:3;stroke-linecap:round;stroke-linejoin:round;stroke-miterlimit:3;stroke-opacity:0.498674;paint-order:stroke fill markers"
					d="m 117.73958,73.157292 h -2.64583 l 2.64583,3.439583 z"
					id="path115194"
				/><circle
					style="fill:#90a2a7;fill-opacity:1;fill-rule:evenodd;stroke-width:3;stroke-linecap:round;stroke-linejoin:round;stroke-miterlimit:3;stroke-opacity:0.498674;paint-order:stroke fill markers"
					id="path119483"
					cx="96.572914"
					cy="19.314583"
					r="1.3229166"
				/><circle
					style="fill:#90a2a7;fill-opacity:1;fill-rule:evenodd;stroke-width:3;stroke-linecap:round;stroke-linejoin:round;stroke-miterlimit:3;stroke-opacity:0.498674;paint-order:stroke fill markers"
					id="path119485"
					cx="108.74375"
					cy="18.520834"
					r="1.3229166"
				/><circle
					style="fill:#90a2a7;fill-opacity:1;fill-rule:evenodd;stroke-width:3;stroke-linecap:round;stroke-linejoin:round;stroke-miterlimit:3;stroke-opacity:0.498674;paint-order:stroke fill markers"
					id="path119487"
					cx="109.27292"
					cy="23.018749"
					r="1.0583333"
				/><circle
					style="fill:#90a2a7;fill-opacity:1;fill-rule:evenodd;stroke-width:3;stroke-linecap:round;stroke-linejoin:round;stroke-miterlimit:3;stroke-opacity:0.498674;paint-order:stroke fill markers"
					id="path119489"
					cx="104.775"
					cy="23.8125"
					r="0.79374999"
				/><circle
					style="fill:#90a2a7;fill-opacity:1;fill-rule:evenodd;stroke-width:3;stroke-linecap:round;stroke-linejoin:round;stroke-miterlimit:3;stroke-opacity:0.498674;paint-order:stroke fill markers"
					id="path119491"
					cx="101.86458"
					cy="22.225"
					r="0.79374999"
				/><circle
					style="fill:#90a2a7;fill-opacity:1;fill-rule:evenodd;stroke-width:3;stroke-linecap:round;stroke-linejoin:round;stroke-miterlimit:3;stroke-opacity:0.498674;paint-order:stroke fill markers"
					id="path119493"
					cx="98.424995"
					cy="23.018749"
					r="1.0583333"
				/><circle
					style="fill:#90a2a7;fill-opacity:1;fill-rule:evenodd;stroke-width:3;stroke-linecap:round;stroke-linejoin:round;stroke-miterlimit:3;stroke-opacity:0.498674;paint-order:stroke fill markers"
					id="path119495"
					cx="92.604164"
					cy="28.045834"
					r="1.3229166"
				/><circle
					style="fill:#90a2a7;fill-opacity:1;fill-rule:evenodd;stroke-width:3;stroke-linecap:round;stroke-linejoin:round;stroke-miterlimit:3;stroke-opacity:0.498674;paint-order:stroke fill markers"
					id="path119499"
					cx="104.51041"
					cy="29.104166"
					r="1.3229166"
				/><circle
					style="fill:#90a2a7;fill-opacity:1;fill-rule:evenodd;stroke-width:3;stroke-linecap:round;stroke-linejoin:round;stroke-miterlimit:3;stroke-opacity:0.498674;paint-order:stroke fill markers"
					id="path119501"
					cx="109.5375"
					cy="27.252083"
					r="1.0583333"
				/><circle
					style="fill:#90a2a7;fill-opacity:1;fill-rule:evenodd;stroke-width:3;stroke-linecap:round;stroke-linejoin:round;stroke-miterlimit:3;stroke-opacity:0.498674;paint-order:stroke fill markers"
					id="path119503"
					cx="107.68542"
					cy="32.014584"
					r="0.79374999"
				/><circle
					style="fill:#90a2a7;fill-opacity:1;fill-rule:evenodd;stroke-width:3;stroke-linecap:round;stroke-linejoin:round;stroke-miterlimit:3;stroke-opacity:0.498674;paint-order:stroke fill markers"
					id="path119509"
					cx="109.00833"
					cy="38.099998"
					r="1.0583333"
				/><circle
					style="fill:#90a2a7;fill-opacity:1;fill-rule:evenodd;stroke-width:3;stroke-linecap:round;stroke-linejoin:round;stroke-miterlimit:3;stroke-opacity:0.498674;paint-order:stroke fill markers"
					id="path119515"
					cx="105.30417"
					cy="35.454166"
					r="0.52916664"
				/><circle
					style="fill:#90a2a7;fill-opacity:1;fill-rule:evenodd;stroke-width:3;stroke-linecap:round;stroke-linejoin:round;stroke-miterlimit:3;stroke-opacity:0.498674;paint-order:stroke fill markers"
					id="path119519"
					cx="104.51041"
					cy="32.543751"
					r="0.52916664"
				/><circle
					style="fill:#90a2a7;fill-opacity:1;fill-rule:evenodd;stroke-width:3;stroke-linecap:round;stroke-linejoin:round;stroke-miterlimit:3;stroke-opacity:0.498674;paint-order:stroke fill markers"
					id="path119523"
					cx="99.48333"
					cy="40.745834"
					r="0.79374999"
				/><circle
					style="fill:#90a2a7;fill-opacity:1;fill-rule:evenodd;stroke-width:3;stroke-linecap:round;stroke-linejoin:round;stroke-miterlimit:3;stroke-opacity:0.498674;paint-order:stroke fill markers"
					id="path119525"
					cx="98.954163"
					cy="37.041668"
					r="1.0583333"
				/><circle
					style="fill:#90a2a7;fill-opacity:1;fill-rule:evenodd;stroke-width:3;stroke-linecap:round;stroke-linejoin:round;stroke-miterlimit:3;stroke-opacity:0.498674;paint-order:stroke fill markers"
					id="path119529"
					cx="96.043747"
					cy="31.75"
					r="1.3229166"
				/><circle
					style="fill:#90a2a7;fill-opacity:1;fill-rule:evenodd;stroke-width:3;stroke-linecap:round;stroke-linejoin:round;stroke-miterlimit:3;stroke-opacity:0.498674;paint-order:stroke fill markers"
					id="path119531"
					cx="91.810417"
					cy="32.014584"
					r="0.79374999"
				/><circle
					style="fill:#90a2a7;fill-opacity:1;fill-rule:evenodd;stroke-width:3;stroke-linecap:round;stroke-linejoin:round;stroke-miterlimit:3;stroke-opacity:0.498674;paint-order:stroke fill markers"
					id="path119533"
					cx="95.25"
					cy="35.983334"
					r="1.0583333"
				/><circle
					style="fill:#90a2a7;fill-opacity:1;fill-rule:evenodd;stroke-width:3;stroke-linecap:round;stroke-linejoin:round;stroke-miterlimit:3;stroke-opacity:0.498674;paint-order:stroke fill markers"
					id="path119539"
					cx="88.900002"
					cy="30.1625"
					r="0.79374999"
				/><circle
					style="fill:#90a2a7;fill-opacity:1;fill-rule:evenodd;stroke-width:3;stroke-linecap:round;stroke-linejoin:round;stroke-miterlimit:3;stroke-opacity:0.498674;paint-order:stroke fill markers"
					id="path119541"
					cx="101.86458"
					cy="19.049999"
					r="1.0583333"
				/><path
					style="fill:#7f887d;fill-opacity:1;fill-rule:evenodd;stroke-width:3;stroke-linecap:round;stroke-linejoin:round;stroke-miterlimit:3;stroke-opacity:0.498674;paint-order:stroke fill markers"
					d="M 30.95625,41.010417 33.3375,44.45 29.36875,41.010417 Z"
					id="path121731"
				/><path
					style="fill:#7f887d;fill-opacity:1;fill-rule:evenodd;stroke-width:3;stroke-linecap:round;stroke-linejoin:round;stroke-miterlimit:3;stroke-opacity:0.498674;paint-order:stroke fill markers"
					d="m 27.78125,41.539583 2.38125,3.439584 -4.233333,-3.439584 z"
					id="path121733"
				/><path
					style="fill:#75807b;fill-opacity:1;fill-rule:evenodd;stroke-width:3;stroke-linecap:round;stroke-linejoin:round;stroke-miterlimit:3;stroke-opacity:0.498674;paint-order:stroke fill markers"
					d="m 25.135416,42.068749 7.9375,-1.322916 -1.322916,-0.79375 -7.14375,1.5875 z"
					id="path122080"
				/><path
					style="fill:#9b0f0e;fill-opacity:1;fill-rule:evenodd;stroke-width:3;stroke-linecap:round;stroke-linejoin:round;stroke-miterlimit:3;stroke-opacity:0.498674;paint-order:stroke fill markers"
					d="m 34.925,28.575 h 2.116667 l 1.322916,-1.5875 h -2.116666 z"
					id="path128079"
				/><path
					style="fill:#9baa9a;fill-opacity:0.929412;fill-rule:evenodd;stroke-width:3;stroke-linecap:round;stroke-linejoin:round;stroke-miterlimit:3;stroke-opacity:0.498674;paint-order:stroke fill markers"
					d="m 16.933333,29.36875 h 1.5875 l 1.5875,-1.852084 2.38125,1.5875 -1.5875,-0.264583 -1.5875,1.5875 h -1.322917 z"
					id="path128351"
				/><path
					style="opacity:1;fill:#676865;fill-opacity:1;fill-rule:evenodd;stroke-width:3;stroke-linecap:round;stroke-linejoin:round;stroke-miterlimit:3;stroke-opacity:0.498674;paint-order:stroke fill markers"
					d="m 33.3375,24.077083 -5.55625,-4.233333 -5.291667,2.645833 5.291667,1.322917 1.852083,2.38125 z"
					id="path137109"
				/><path
					style="opacity:1;fill:#3ce7ed;fill-opacity:1;fill-rule:evenodd;stroke-width:3;stroke-linecap:round;stroke-linejoin:round;stroke-miterlimit:3;stroke-opacity:0.498674;paint-order:stroke fill markers"
					d="m 27.78125,19.84375 -5.291667,-1.322917 -11.90625,3.96875 h 11.90625 z"
					id="path137111"
				/><path
					style="opacity:1;fill:#b7f6f8;fill-opacity:1;fill-rule:evenodd;stroke-width:3;stroke-linecap:round;stroke-linejoin:round;stroke-miterlimit:3;stroke-opacity:0.498674;paint-order:stroke fill markers"
					d="M 27.78125,19.84375 22.489583,18.520833 2.6458333,21.166666 10.583333,22.489583 Z"
					id="path139345"
				/><path
					style="opacity:1;fill:#7a7a7a;fill-opacity:1;fill-rule:evenodd;stroke-width:3;stroke-linecap:round;stroke-linejoin:round;stroke-miterlimit:3;stroke-opacity:0.498674;paint-order:stroke fill markers"
					d="M 47.625,15.610417 50.270833,15.875 c 0.02657,1.325544 0.601104,2.70526 0,3.96875 -0.985334,2.163977 -2.272657,4.23932 -3.439584,6.35 l -3.175,-1.058334 z"
					id="path156259"
				/><path
					style="opacity:1;fill:#676865;fill-opacity:1;fill-rule:evenodd;stroke-width:3;stroke-linecap:round;stroke-linejoin:round;stroke-miterlimit:3;stroke-opacity:0.498674;paint-order:stroke fill markers"
					d="m 43.656249,25.135416 3.96875,-5.291666 c 0.531464,-1.552147 0.11764,-2.696574 0,-3.96875 l -1.852082,-0.264583 c 0.105684,0.827476 0.118446,1.908425 -0.529168,2.645833 l -5.027083,5.027083 z"
					id="path156257"
				/><path
					style="opacity:1;fill:#3ce7ed;fill-opacity:1;fill-rule:evenodd;stroke-width:3;stroke-linecap:round;stroke-linejoin:round;stroke-miterlimit:3;stroke-opacity:0.498674;paint-order:stroke fill markers"
					d="M 50.270833,15.875 C 49.570124,14.710132 49.532562,13.74153 46.566666,11.90625 H 39.952083 L 41.275,14.022917 Z"
					id="path163525"
				/><path
					style="opacity:1;fill:#7a7a7a;fill-opacity:1;fill-rule:evenodd;stroke-width:3;stroke-linecap:round;stroke-linejoin:round;stroke-miterlimit:3;stroke-opacity:0.498674;paint-order:stroke fill markers"
					d="m 50.270833,15.875 c -1.035949,-0.761902 -1.989385,-1.56585 -3.439584,-2.116667 -1.773259,-0.05562 -3.577433,-0.05484 -5.55625,0.264583 l -1.058332,1.587501 c 1.990349,-0.05634 3.960273,-0.05372 5.820832,0.264583 z"
					id="path158439"
				/><path
					style="opacity:1;fill:#3ce7ed;fill-opacity:1;fill-rule:evenodd;stroke-width:3;stroke-linecap:round;stroke-linejoin:round;stroke-miterlimit:3;stroke-opacity:0.498674;paint-order:stroke fill markers"
					d="m 40.216666,15.610416 c -3.122853,-0.451571 -4.475327,0.579753 -6.349999,0.793751 3.142068,-1.885619 5.173941,-2.784206 7.408332,-2.381251 z"
					id="path166558"
				/><path
					style="opacity:1;fill:#b7f6f8;fill-opacity:1;fill-rule:evenodd;stroke-width:3;stroke-linecap:round;stroke-linejoin:round;stroke-miterlimit:3;stroke-opacity:0.498674;paint-order:stroke fill markers"
					d="M 41.275,14.022917 C 41.106577,12.93338 40.411479,12.58585 39.952083,11.90625 l -6.085416,4.497917 c 3.137354,-1.58515 5.523703,-2.76342 7.408333,-2.38125 z"
					id="path164322"
				/><path
					style="opacity:1;fill:#3ce7ed;fill-opacity:1;fill-rule:evenodd;stroke-width:3;stroke-linecap:round;stroke-linejoin:round;stroke-miterlimit:3;stroke-opacity:0.498674;paint-order:stroke fill markers"
					d="m 50.270833,15.875 7.9375,-2.38125 c -0.999568,-1.109567 -2.275012,-1.129594 -3.439583,-1.5875 h -8.466667 z"
					id="path173277"
				/><path
					style="opacity:1;fill:#b7f6f8;fill-opacity:1;fill-rule:evenodd;stroke-width:3;stroke-linecap:round;stroke-linejoin:round;stroke-miterlimit:3;stroke-opacity:0.498674;paint-order:stroke fill markers"
					d="m 58.208333,13.49375 5.027083,-1.5875 h -8.466667 c 1.165103,0.43459 2.356971,0.732901 3.439584,1.5875 z"
					id="path174731"
				/><path
					style="opacity:1;fill:#7a7a7a;fill-opacity:1;fill-rule:evenodd;stroke-width:3;stroke-linecap:round;stroke-linejoin:round;stroke-miterlimit:3;stroke-opacity:0.498674;paint-order:stroke fill markers"
					d="M 50.270833,17.727083 C 52.088018,15.62565 53.814432,15.151537 55.5625,14.2875 53.806805,14.770333 52.166706,14.599546 50.270833,15.875 Z"
					id="path175804"
				/><path
					style="opacity:1;fill:#b7f6f8;fill-opacity:1;fill-rule:evenodd;stroke-width:3;stroke-linecap:round;stroke-linejoin:round;stroke-miterlimit:3;stroke-opacity:0.498674;paint-order:stroke fill markers"
					d="M 56.620833,12.435417 C 51.368995,12.378055 45.570851,12.383329 40.216666,12.7 l -0.264583,-0.79375 h 16.139583 z"
					id="path177258"
				/><path
					style="opacity:1;fill:#3ce7ed;fill-opacity:1;fill-rule:evenodd;stroke-width:3;stroke-linecap:round;stroke-linejoin:round;stroke-miterlimit:3;stroke-opacity:0.498674;paint-order:stroke fill markers"
					d="m 68.791666,37.041666 7.9375,-2.645833 -7.9375,6.614583 5.291666,-1.322916 -5.291666,3.968749 3.96875,-1.322916 -3.96875,3.96875 z"
					id="path182480"
				/><path
					style="opacity:1;fill:#b7f6f8;fill-opacity:1;fill-rule:evenodd;stroke-width:3;stroke-linecap:round;stroke-linejoin:round;stroke-miterlimit:3;stroke-opacity:0.498674;paint-order:stroke fill markers"
					d="m 72.760416,35.71875 3.96875,-1.322917 -3.175,2.645833 z"
					id="path183208"
				/><path
					style="opacity:1;fill:#b7f6f8;fill-opacity:1;fill-rule:evenodd;stroke-width:3;stroke-linecap:round;stroke-linejoin:round;stroke-miterlimit:3;stroke-opacity:0.498674;paint-order:stroke fill markers"
					d="m 74.083332,39.6875 -3.175,0.793749 1.058334,0.79375 z"
					id="path183356"
				/><path
					style="opacity:1;fill:#b7f6f8;fill-opacity:1;fill-rule:evenodd;stroke-width:3;stroke-linecap:round;stroke-linejoin:round;stroke-miterlimit:3;stroke-opacity:0.498674;paint-order:stroke fill markers"
					d="m 72.760416,42.333333 -1.322917,1.322916 -0.264583,-0.79375 z"
					id="path183358"
				/></g
			></g
		><metadata id="metadata122445">
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
