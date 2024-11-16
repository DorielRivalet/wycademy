<!-- Created with Inkscape (http://www.inkscape.org/) -->
<script lang="ts">
	import bg from '$lib/client/images/monster/bg-512.webp';
	interface Props {
		size?: string;
		background?: boolean;
	}

	let { size = '128px', background = false }: Props = $props();

	let backgroundStyle = $derived(background
		? `width: ${size}; height: ${size}; background-image: url('${bg}'); background-size: ${size}`
		: `width: ${size}; height: ${size};`);
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
			><filter
				style="color-interpolation-filters:sRGB;"
				id="filter10420"
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
					id="feComposite10406"
				/><feColorMatrix
					in="composite1"
					values="1"
					type="saturate"
					result="colormatrix1"
					id="feColorMatrix10408"
				/><feFlood
					flood-opacity="1"
					flood-color="rgb(0,0,0)"
					result="flood1"
					id="feFlood10410"
				/><feBlend
					in="flood1"
					in2="colormatrix1"
					mode="multiply"
					result="blend1"
					id="feBlend10412"
				/><feBlend
					in2="blend1"
					mode="screen"
					result="blend2"
					id="feBlend10414"
				/><feColorMatrix
					in="blend2"
					values="1"
					type="saturate"
					result="colormatrix2"
					id="feColorMatrix10416"
				/><feComposite
					in="colormatrix2"
					in2="SourceGraphic"
					operator="in"
					k2="1"
					result="composite2"
					id="feComposite10418"
				/></filter
			></defs
		><g
			id="g10041"
			style="filter:url(#filter10420)"
			transform="translate(1.0583333,1.5875)"
			><path
				style="opacity:1;fill:#e08c14;fill-opacity:1;fill-rule:evenodd;stroke-width:3;stroke-linecap:round;stroke-linejoin:round;stroke-miterlimit:3;stroke-opacity:0.498674;paint-order:stroke fill markers"
				d="M 9.2604166,107.15625 C 6.7510703,104.18602 5.7701355,101.63369 5.2916666,99.218749 10.500763,89.35462 8.5263348,91.273157 9.2604166,88.635416 5.2788314,78.400669 6.5896482,78.864638 6.6145832,76.729166 7.3779322,71.512317 9.1855989,66.97882 10.583333,62.177083 c 0.427365,10.384149 1.641358,11.192926 2.645834,14.552083 0.6587,-4.584215 2.37213,-6.790646 3.968749,-9.260417 L 23.8125,96.572915 11.90625,107.15625 Z"
				id="path9605"
			/><path
				style="opacity:1;fill:#662c26;fill-opacity:1;fill-rule:evenodd;stroke-width:3;stroke-linecap:round;stroke-linejoin:round;stroke-miterlimit:3;stroke-opacity:0.498674;paint-order:stroke fill markers"
				d="m 41.804166,23.283333 3.96875,-3.439583 8.466667,-2.38125 11.90625,0.529167 -12.170834,1.058333 -5.55625,2.38125 -3.704166,3.704166 -3.439584,-0.79375 z"
				id="path9607"
			/><path
				style="opacity:1;fill:#411f17;fill-opacity:1;fill-rule:evenodd;stroke-width:3;stroke-linecap:round;stroke-linejoin:round;stroke-miterlimit:3;stroke-opacity:0.498674;paint-order:stroke fill markers"
				d="M 87.312499,95.249999 115.09375,83.343749 113.77083,15.875 103.1875,11.90625 83.343749,21.166666 84.666666,31.75 l 14.552083,17.197916 -14.552083,19.84375 -5.291667,7.9375 z"
				id="path9609"
			/><path
				style="opacity:1;fill:#311916;fill-opacity:1;fill-rule:evenodd;stroke-width:3;stroke-linecap:round;stroke-linejoin:round;stroke-miterlimit:3;stroke-opacity:0.498674;paint-order:stroke fill markers"
				d="m 86.518749,29.36875 c 1.305793,-1.01551 2.923359,-1.456266 3.704167,-3.439584 -0.5208,-1.738822 -0.135539,-3.060945 0,-4.497916 l 2.38125,-0.264584 c 0.832576,-1.819153 1.407163,-3.927109 2.645833,-5.291666 2.854713,0.655683 4.679101,2.369248 6.614581,3.96875 1.09234,-1.958167 2.95282,-3.189711 5.29167,-3.96875 2.11319,1.409441 3.87887,3.171514 5.29167,5.291666 l 1.32291,-3.96875 -7.9375,-6.614583 H 75.406249 l -1.322917,3.96875 5.291667,7.9375 z"
				id="path9611"
			/><path
				style="opacity:1;fill:#182021;fill-opacity:1;fill-rule:evenodd;stroke-width:3;stroke-linecap:round;stroke-linejoin:round;stroke-miterlimit:3;stroke-opacity:0.498674;paint-order:stroke fill markers"
				d="m 44.714584,25.399999 -0.529167,-2.116666 1.852082,0.529167 -0.264582,-2.38125 1.852082,0.529166 10e-7,-1.587499 1.587499,0.529166 0.793751,-1.5875 1.852083,1.058333 z"
				id="path9613"
			/><path
				style="opacity:1;fill:#182021;fill-opacity:1;fill-rule:evenodd;stroke-width:3;stroke-linecap:round;stroke-linejoin:round;stroke-miterlimit:3;stroke-opacity:0.498674;paint-order:stroke fill markers"
				d="M 47.889583,26.9875 51.858333,23.01875 60.325,21.695833 66.410417,17.991667 53.974999,19.05 48.418749,21.43125 44.449999,25.4 Z"
				id="path9615"
			/><path
				style="opacity:1;fill:#757574;fill-opacity:1;fill-rule:evenodd;stroke-width:3;stroke-linecap:round;stroke-linejoin:round;stroke-miterlimit:3;stroke-opacity:0.498674;paint-order:stroke fill markers"
				d="m 59.531249,28.045833 8.202083,-4.7625 -5.027083,5.820833 9.525,-2.910416 -3.96875,4.233333 9.525,-1.852083 c -2.76267,1.057771 -4.367926,2.590591 -6.35,3.96875 h 3.175 c 2.261896,-0.968111 4.109211,0.409792 6.085417,1.058333 -2.118241,-0.203516 -4.237524,-0.599978 -6.35,0.264583 l 1.5875,2.116667 c 2.177615,0.276944 3.545275,0.960902 5.027083,1.5875 -1.795233,-0.178385 -3.546643,-0.494277 -5.55625,0 l 0.79375,2.38125 c 2.257544,0.126664 3.890116,1.009682 5.55625,1.852083 -1.785951,-0.32866 -3.466056,-0.761757 -5.820833,-0.529167 l 0.264583,2.645834 c 2.368376,1.066976 4.128102,2.372445 5.820833,3.704166 -2.05681,-0.655315 -3.86272,-1.469721 -6.35,-1.852083 l 0.529167,2.910417 6.879167,5.291666 -7.9375,-1.852083 1.058333,3.704167 6.085417,4.233333 -6.35,-1.852083 -1.5875,-2.645834 -4.233334,-17.197916 z"
				id="path9617"
			/><path
				style="opacity:1;fill:#2e2121;fill-opacity:1;fill-rule:evenodd;stroke-width:3;stroke-linecap:round;stroke-linejoin:round;stroke-miterlimit:3;stroke-opacity:0.498674;paint-order:stroke fill markers"
				d="m 74.083332,78.052082 v -4.7625 l -1.058333,-1.058333 v -6.085417 c 1.440193,-1.803866 3.560807,-3.448061 3.704167,-5.556249 V 37.041666 c -0.575361,-5.18908 -3.621653,-8.219208 -8.73125,-8.73125 l -9.789583,-0.264583 -3.96875,2.291358 v 8.027392 l 13.229166,2.645833 -1.322917,17.197917 -6.614583,7.937499 2.645834,17.197917 11.906249,-3.96875 z"
				id="path9619"
			/><path
				style="opacity:1;fill:#2e2121;fill-opacity:1;fill-rule:evenodd;stroke-width:3;stroke-linecap:round;stroke-linejoin:round;stroke-miterlimit:3;stroke-opacity:0.498674;paint-order:stroke fill markers"
				d="m 47.624999,77.258332 1.852084,-8.202083 -6.614584,4.497917 0.264584,4.7625 z"
				id="path9621"
			/><path
				style="opacity:1;fill:#e08c14;fill-opacity:1;fill-rule:evenodd;stroke-width:3;stroke-linecap:round;stroke-linejoin:round;stroke-miterlimit:3;stroke-opacity:0.498674;paint-order:stroke fill markers"
				d="m 35.71875,66.145832 c 1.279509,-2.234601 2.405284,-4.534457 2.645833,-6.614583 2.648285,-2.107829 3.184948,-4.124694 4.7625,-6.349999 0.194183,2.652921 0.261006,5.060112 1.852083,7.672916 0.458904,3.753283 0.341108,5.741577 0,7.9375 3.204862,-2.35793 3.161721,-6.884856 4.762501,-10.054166 0.937671,3.490667 1.469236,6.823395 1.058333,9.789583 l -0.529167,10.847916 h -7.9375 z"
				id="path9623"
			/><path
				style="opacity:1;fill:#782818;fill-opacity:1;fill-rule:evenodd;stroke-width:3;stroke-linecap:round;stroke-linejoin:round;stroke-miterlimit:3;stroke-opacity:0.498674;paint-order:stroke fill markers"
				d="m 55.297916,37.30625 13.49375,-0.264584 v 19.84375 l -5.291667,7.9375 V 78.052082 H 70.90833 V 108.47917 H 39.6875 l 7.937499,-31.750004 1.5875,-7.14375 3.704167,-8.202083 11.1125,-6.415805 V 41.010416 h -7.14375 l -2.645833,2.645833 H 38.1 l 2.910416,-2.645833 6.614583,-2.645833 z"
				id="path9625"
			/><path
				style="opacity:1;fill:#62271d;fill-opacity:1;fill-rule:evenodd;stroke-width:3;stroke-linecap:round;stroke-linejoin:round;stroke-miterlimit:3;stroke-opacity:0.498674;paint-order:stroke fill markers"
				d="m 47.889583,75.406249 0.529166,-2.38125 3.439584,-1.5875 z"
				id="path9627"
			/><path
				style="opacity:1;fill:#62271d;fill-opacity:1;fill-rule:evenodd;stroke-width:3;stroke-linecap:round;stroke-linejoin:round;stroke-miterlimit:3;stroke-opacity:0.498674;paint-order:stroke fill markers"
				d="m 49.2125,69.585417 3.174999,-1.322918 -3.439583,2.910417 z"
				id="path9629"
			/><path
				style="opacity:1;fill:#f4f105;fill-opacity:1;fill-rule:evenodd;stroke-width:3;stroke-linecap:round;stroke-linejoin:round;stroke-miterlimit:3;stroke-opacity:0.498674;paint-order:stroke fill markers"
				d="M 19.84375,37.570833 19.579166,35.983333 19.05,32.279166 21.166666,31.057109 H 33.602083 L 42.11262,33.3375 40.127562,40.745833 H 20.902083 Z"
				id="path9631"
			/><path
				style="opacity:1;fill:#f4f105;fill-opacity:1;fill-rule:evenodd;stroke-width:3;stroke-linecap:round;stroke-linejoin:round;stroke-miterlimit:3;stroke-opacity:0.498674;paint-order:stroke fill markers"
				d="M 21.695833,39.6875 C 27.66753,37.181137 32.65608,37.157116 38.1,35.983333 l 2.38125,2.910417 C 38.9965,39.937785 29.311938,41.930054 21.695833,39.6875 Z"
				id="path9633"
			/><path
				style="opacity:1;fill:#391d15;fill-opacity:1;fill-rule:evenodd;stroke-width:3;stroke-linecap:round;stroke-linejoin:round;stroke-miterlimit:3;stroke-opacity:0.498674;paint-order:stroke fill markers"
				d="M 20.372916,39.952083 21.695833,39.6875 h 1.852083 3.96875 1.322917 L 30.1625,38.629166 h 1.058333 l 2.910417,-0.264583 h 2.910416 l 5.556251,0.79375 -3.968751,0.79375 c -4.236456,1.401973 -6.944477,2.382904 -11.90625,2.645833 l -6.35,0.264583 z"
				id="path9635"
			/><path
				style="opacity:1;fill:#62271d;fill-opacity:1;fill-rule:evenodd;stroke-width:3;stroke-linecap:round;stroke-linejoin:round;stroke-miterlimit:3;stroke-opacity:0.498674;paint-order:stroke fill markers"
				d="m 47.889583,78.052082 c 0,0 10.847916,-7.672916 10.583333,-7.672916 -0.264583,0 -10.847917,12.170833 -10.847917,12.170833 z"
				id="path9637"
			/><path
				style="opacity:1;fill:#62271d;fill-opacity:1;fill-rule:evenodd;stroke-width:3;stroke-linecap:round;stroke-linejoin:round;stroke-miterlimit:3;stroke-opacity:0.498674;paint-order:stroke fill markers"
				d="m 47.624999,97.895832 13.229167,-15.875 -14.552083,10.583334 z"
				id="path9639"
			/><path
				style="opacity:1;fill:#2e2121;fill-opacity:1;fill-rule:evenodd;stroke-width:3;stroke-linecap:round;stroke-linejoin:round;stroke-miterlimit:3;stroke-opacity:0.498674;paint-order:stroke fill markers"
				d="m 73.81875,73.289583 6.879166,-10e-7 2.116666,-4.497916 v -1.5875 h -5.820833 l -1.058333,1.058333 v 1.852083 h 2.645833 v -1.322916 h 2.116667 v 1.058333 h -1.058334 v 1.5875 h -4.233333 l -0.79375,-0.79375 v -3.704167 l 1.852083,-1.852083 h 5.027084 L 94.720832,51.858333 c 0.428701,-1.347233 0.268906,-2.661086 0,-3.96875 -6.904046,-12.149895 -15.539218,-23.639052 -25.4,-34.660416 l 10e-7,-1.5875 h 7.14375 l -1e-6,4.233333 25.399998,33.072916 -18.520831,24.077083 v 5.027083 l -9.524999,10e-7 z"
				id="path9641"
			/><path
				style="opacity:1;fill:#782818;fill-opacity:1;fill-rule:evenodd;stroke-width:3;stroke-linecap:round;stroke-linejoin:round;stroke-miterlimit:3;stroke-opacity:0.498674;paint-order:stroke fill markers"
				d="m 74.877082,78.316666 -8.466666,-10.31875 h -1.5875 l 0.529167,7.408333 1.587499,1.322917 2.910417,-1.322917 -2.645833,-2.910417 -0.529167,1.058334 1.852083,1.322916 -1.322916,0.529167 -1.322917,-0.79375 v -4.497917 h 0.79375 l 7.408333,8.466667 z"
				id="path9643"
			/><path
				style="opacity:1;fill:#a99b95;fill-opacity:1;fill-rule:evenodd;stroke-width:3;stroke-linecap:round;stroke-linejoin:round;stroke-miterlimit:3;stroke-opacity:0.498674;paint-order:stroke fill markers"
				d="M 13.49375,101.6 V 83.872916 h 2.645833 v -19.05 h 3.96875 v -5.820833 h 15.875 v 6.085416 h 8.202083 v 11.90625 h 3.704167 v 23.283331 h 6.614583 v 4.49792 l 6.35,2.38125 V 92.339582 h 10.054166 v -14.2875 h 12.435417 l 8.73125,11.1125 h 7.14375 V 78.581249 h 12.435421 v 4.7625 h 6.35 V 119.59167 H 11.90625 Z"
				id="path9645"
			/><path
				style="opacity:1;fill:#8a807c;fill-opacity:1;fill-rule:evenodd;stroke-width:3;stroke-linecap:round;stroke-linejoin:round;stroke-miterlimit:3;stroke-opacity:0.498674;paint-order:stroke fill markers"
				d="m 109.80208,104.51042 v 10.58333 h -6.61458 v -6.61458 h 5.29167 v -3.96875 z"
				id="path9647"
			/><path
				style="opacity:1;fill:#8a807c;fill-opacity:1;fill-rule:evenodd;stroke-width:3;stroke-linecap:round;stroke-linejoin:round;stroke-miterlimit:3;stroke-opacity:0.498674;paint-order:stroke fill markers"
				d="m 100.54167,104.51042 h -2.645838 v -2.64584 H 91.281249 V 93.927082 H 84.666666 V 115.09375 H 103.1875 v -6.61458 h -2.64583 z"
				id="path9649"
			/><path
				style="opacity:1;fill:#8a807c;fill-opacity:1;fill-rule:evenodd;stroke-width:3;stroke-linecap:round;stroke-linejoin:round;stroke-miterlimit:3;stroke-opacity:0.498674;paint-order:stroke fill markers"
				d="m 109.80208,115.09375 v 3.96875 H 89.958332 v -3.96875 z"
				id="path9651"
			/><path
				style="opacity:1;fill:#777777;fill-opacity:1;fill-rule:evenodd;stroke-width:3;stroke-linecap:round;stroke-linejoin:round;stroke-miterlimit:3;stroke-opacity:0.498674;paint-order:stroke fill markers"
				d="m 11.377083,101.86458 8.466667,-7.408331 c -1.426371,3.602192 -3.344867,6.869961 -3.439584,11.377081 l 0.79375,0.52917 c 2.247305,-3.41544 5.036891,-5.90367 7.9375,-8.202085 l -3.96875,10.318755 2.645834,-0.26459 9.525,-8.995831 -3.96875,10.847921 3.439583,-0.79375 c 2.764391,-3.30652 6.048747,-6.38401 9.789583,-9.26042 l -3.704166,10.05417 5.291666,0.52916 c 1.096342,-5.48536 4.414208,-6.67129 7.14375,-8.99583 -1.468197,3.03175 -3.044353,5.98582 -3.439583,9.78958 l 4.7625,0.26459 c 1.381809,-3.40625 3.674942,-5.57163 5.820833,-7.9375 -1.000931,2.69555 -2.080319,4.97441 -2.381249,8.46666 l 3.439582,0.52917 c 1.773971,-2.53992 3.031097,-5.54612 5.55625,-7.40833 -1.274861,2.64383 -2.003419,5.41761 -1.852082,7.9375 H 66.675 c 1.079901,-2.65078 3.500724,-4.58175 5.820833,-6.35 -1.200378,2.18798 -2.367232,4.25965 -2.645833,6.87916 L 73.025,114.3 c 1.009953,-2.23667 2.852272,-4.3341 4.762499,-6.35 -0.944512,2.45161 -1.971222,4.94159 -2.381249,7.14375 h 4.233333 c 0.303418,-2.54901 2.746911,-4.82483 4.7625,-6.35 -0.815184,2.17611 -1.672662,3.94051 -2.116666,6.61458 l 2.645833,0.26459 c 0.665396,-2.51576 2.580897,-3.71831 4.233333,-5.29167 -0.950356,1.81238 -1.57548,3.50639 -2.116666,5.55625 l 5.027082,0.52917 c 1.125548,-2.79788 2.279515,-4.3146 3.439583,-5.55625 -0.646043,2.05288 -1.15109,4.18684 -1.058332,6.08541 l 3.174999,0.26459 c 0.349695,-1.74118 1.372708,-3.11561 2.381251,-4.49792 -0.408629,1.56342 -0.86156,3.0752 -0.529167,4.7625 l 2.910417,0.26458 c 0.21331,-1.95074 1.11021,-2.69008 1.85208,-3.70416 -0.27783,1.28823 -0.48802,2.50912 -0.26458,3.96875 l 3.43958,0.26458 c 0.39051,-1.83168 1.19807,-2.87313 2.11667,-3.70417 -0.25753,1.26617 -0.74462,2.37178 -0.52917,3.96875 l 2.64584,0.26459 c 0.2349,-1.16543 0.91744,-1.89963 1.5875,-2.64584 -0.11861,0.95324 -0.36658,1.83458 -0.26459,2.91042 v 0.79375 H 12.7 Z"
				id="path9653"
			/><rect
				style="opacity:1;fill:#8a807c;fill-opacity:1;fill-rule:evenodd;stroke-width:3.4641;stroke-linecap:round;stroke-linejoin:round;stroke-miterlimit:3;stroke-opacity:0.498674;paint-order:stroke fill markers"
				id="rect9655"
				width="5.2916665"
				height="6.6145835"
				x="37.041668"
				y="87.3125"
			/><path
				style="opacity:1;fill:#e08c14;fill-opacity:1;fill-rule:evenodd;stroke-width:3;stroke-linecap:round;stroke-linejoin:round;stroke-miterlimit:3;stroke-opacity:0.498674;paint-order:stroke fill markers"
				d="m 23.8125,96.572915 c 1.831307,-4.720443 2.670164,-9.695155 3.96875,-14.552083 l 1.322916,6.614584 c 1.880797,2.736287 1.41202,6.764166 1.322917,10.583333 3.824368,-2.361593 6.372872,-5.774981 9.260417,-7.937499 -0.05358,7.897247 -1.81011,13.25001 -3.96875,18.52083 H 18.520833 l -3.96875,-5.29166 c 2.836534,-2.7213 4.839342,-5.694019 9.260417,-7.937505 z"
				id="path9657"
			/><path
				style="opacity:1;fill:#e0cf14;fill-opacity:1;fill-rule:evenodd;stroke-width:3;stroke-linecap:round;stroke-linejoin:round;stroke-miterlimit:3;stroke-opacity:0.498674;paint-order:stroke fill markers"
				d="m 18.520833,105.83333 9.260417,-9.260415 v 9.260415 l 7.9375,-5.29166 -1.322917,7.9375 -2.645833,3.96875 z"
				id="path9659"
			/><path
				style="opacity:1;fill:#2e2121;fill-opacity:1;fill-rule:evenodd;stroke-width:3;stroke-linecap:round;stroke-linejoin:round;stroke-miterlimit:3;stroke-opacity:0.498674;paint-order:stroke fill markers"
				d="m 11.377083,101.86458 c 7.234688,6.49513 15.728088,6.44393 24.077083,7.14375 l 25.664583,2.91042 23.283333,2.91042 29.633338,3.70416 c 5.11264,0.7219 2.98661,0.45304 5.02708,1.05834 -0.86344,0.29379 -2.08549,0.6696 -4.7625,1.05833 H 11.641667 C 7.8381627,119.33756 7.8978162,116.6606 7.1437499,114.3 v -6.08542 c 0.7127532,-2.17364 2.1827978,-4.2855 4.2333331,-6.35 z"
				id="path9661"
			/><path
				style="opacity:1;fill:#792f27;fill-opacity:1;fill-rule:evenodd;stroke-width:3;stroke-linecap:round;stroke-linejoin:round;stroke-miterlimit:3;stroke-opacity:0.498674;paint-order:stroke fill markers"
				d="m 10.31875,112.44792 5.291666,-5.55625 -2.645833,5.82083 2.116667,5.29167 z"
				id="path9663"
			/><path
				style="opacity:1;fill:#792f27;fill-opacity:1;fill-rule:evenodd;stroke-width:2.71429;stroke-linecap:round;stroke-linejoin:round;stroke-miterlimit:3;stroke-opacity:0.498674;paint-order:stroke fill markers"
				d="m 18.772818,113.50625 4.787698,-5.02708 -2.393849,5.26646 1.91508,4.7877 z"
				id="path9665"
			/><path
				style="opacity:1;fill:#792f27;fill-opacity:1;fill-rule:evenodd;stroke-width:2.71429;stroke-linecap:round;stroke-linejoin:round;stroke-miterlimit:3;stroke-opacity:0.498674;paint-order:stroke fill markers"
				d="m 26.710317,114.82917 4.7877,-5.02709 -2.39385,5.26647 1.915081,4.78771 z"
				id="path9667"
			/><path
				style="opacity:1;fill:#792f27;fill-opacity:1;fill-rule:evenodd;stroke-width:2.01361;stroke-linecap:round;stroke-linejoin:round;stroke-miterlimit:3;stroke-opacity:0.498674;paint-order:stroke fill markers"
				d="m 33.942861,114.85437 3.551778,-3.72937 -1.775889,3.90696 1.420712,3.55178 z"
				id="path9669"
			/><path
				style="opacity:1;fill:#792f27;fill-opacity:1;fill-rule:evenodd;stroke-width:2.01361;stroke-linecap:round;stroke-linejoin:round;stroke-miterlimit:3;stroke-opacity:0.498674;paint-order:stroke fill markers"
				d="m 40.557444,114.85437 3.551778,-3.72937 -1.775889,3.90696 1.420712,3.55178 z"
				id="path9671"
			/><path
				style="opacity:1;fill:#792f27;fill-opacity:1;fill-rule:evenodd;stroke-width:1.5;stroke-linecap:round;stroke-linejoin:round;stroke-miterlimit:3;stroke-opacity:0.498674;paint-order:stroke fill markers"
				d="m 47.625001,115.49063 2.645832,-2.77813 -1.322916,2.91042 1.058334,2.64584 z"
				id="path9673"
			/><path
				style="opacity:1;fill:#792f27;fill-opacity:1;fill-rule:evenodd;stroke-width:1.5;stroke-linecap:round;stroke-linejoin:round;stroke-miterlimit:3;stroke-opacity:0.498674;paint-order:stroke fill markers"
				d="m 53.181251,115.75521 2.645832,-2.77813 -1.322916,2.91042 1.058334,2.64584 z"
				id="path9675"
			/><path
				style="opacity:1;fill:#792f27;fill-opacity:1;fill-rule:evenodd;stroke-width:1.5;stroke-linecap:round;stroke-linejoin:round;stroke-miterlimit:3;stroke-opacity:0.498674;paint-order:stroke fill markers"
				d="m 58.208334,116.28438 2.645832,-2.77813 -1.322916,2.91042 1.058334,2.64584 z"
				id="path9677"
			/><path
				style="opacity:1;fill:#792f27;fill-opacity:1;fill-rule:evenodd;stroke-width:1.21429;stroke-linecap:round;stroke-linejoin:round;stroke-miterlimit:3;stroke-opacity:0.498674;paint-order:stroke fill markers"
				d="m 62.693651,116.28438 2.141864,-2.24896 -1.070932,2.35605 0.856747,2.14187 z"
				id="path9679"
			/><path
				style="opacity:1;fill:#792f27;fill-opacity:1;fill-rule:evenodd;stroke-width:1.21429;stroke-linecap:round;stroke-linejoin:round;stroke-miterlimit:3;stroke-opacity:0.498674;paint-order:stroke fill markers"
				d="m 66.926985,116.57416 2.141864,-2.24896 -1.070932,2.35605 0.856747,2.14187 z"
				id="path9681"
			/><path
				style="opacity:1;fill:#792f27;fill-opacity:1;fill-rule:evenodd;stroke-width:1.08504;stroke-linecap:round;stroke-linejoin:round;stroke-miterlimit:3;stroke-opacity:0.498674;paint-order:stroke fill markers"
				d="m 71.803475,117.10333 1.913884,-2.00958 -0.956942,2.10527 0.765555,1.91389 z"
				id="path9683"
			/><path
				style="opacity:1;fill:#792f27;fill-opacity:1;fill-rule:evenodd;stroke-width:1.08504;stroke-linecap:round;stroke-linejoin:round;stroke-miterlimit:3;stroke-opacity:0.498674;paint-order:stroke fill markers"
				d="m 75.507641,117.37931 1.913884,-2.00958 -0.956942,2.10527 0.765555,1.91389 z"
				id="path9685"
			/><path
				style="opacity:1;fill:#792f27;fill-opacity:1;fill-rule:evenodd;stroke-width:0.948334;stroke-linecap:round;stroke-linejoin:round;stroke-miterlimit:3;stroke-opacity:0.498674;paint-order:stroke fill markers"
				d="m 79.596958,117.64389 1.67275,-1.75639 -0.836375,1.84002 0.669102,1.67276 z"
				id="path9687"
			/><path
				style="opacity:1;fill:#792f27;fill-opacity:1;fill-rule:evenodd;stroke-width:0.948334;stroke-linecap:round;stroke-linejoin:round;stroke-miterlimit:3;stroke-opacity:0.498674;paint-order:stroke fill markers"
				d="m 83.036542,117.92054 1.67275,-1.75639 -0.836375,1.84002 0.669102,1.67276 z"
				id="path9689"
			/><path
				style="opacity:1;fill:#792f27;fill-opacity:1;fill-rule:evenodd;stroke-width:0.948334;stroke-linecap:round;stroke-linejoin:round;stroke-miterlimit:3;stroke-opacity:0.498674;paint-order:stroke fill markers"
				d="m 87.005292,117.92054 1.67275,-1.75639 -0.836375,1.84002 0.669102,1.67276 z"
				id="path9691"
			/><path
				style="opacity:1;fill:#792f27;fill-opacity:1;fill-rule:evenodd;stroke-width:0.811988;stroke-linecap:round;stroke-linejoin:round;stroke-miterlimit:3;stroke-opacity:0.498674;paint-order:stroke fill markers"
				d="m 91.358874,118.19714 1.432252,-1.50387 -0.716126,1.57548 0.572902,1.43226 z"
				id="path9693"
			/><path
				style="opacity:1;fill:#792f27;fill-opacity:1;fill-rule:evenodd;stroke-width:0.811988;stroke-linecap:round;stroke-linejoin:round;stroke-miterlimit:3;stroke-opacity:0.498674;paint-order:stroke fill markers"
				d="m 94.798457,118.57515 1.432252,-1.50387 -0.716126,1.57548 0.572902,1.43226 z"
				id="path9695"
			/><path
				style="opacity:1;fill:#792f27;fill-opacity:1;fill-rule:evenodd;stroke-width:0.811988;stroke-linecap:round;stroke-linejoin:round;stroke-miterlimit:3;stroke-opacity:0.498674;paint-order:stroke fill markers"
				d="m 97.973457,118.72631 1.432252,-1.50387 -0.716126,1.57548 0.572902,1.43226 z"
				id="path9697"
			/><path
				style="opacity:1;fill:#792f27;fill-opacity:1;fill-rule:evenodd;stroke-width:0.736862;stroke-linecap:round;stroke-linejoin:round;stroke-miterlimit:3;stroke-opacity:0.498674;paint-order:stroke fill markers"
				d="m 101.07083,118.83973 1.29973,-1.36473 -0.64987,1.42971 0.5199,1.29975 z"
				id="path9699"
			/><path
				style="opacity:1;fill:#792f27;fill-opacity:1;fill-rule:evenodd;stroke-width:0.599996;stroke-linecap:round;stroke-linejoin:round;stroke-miterlimit:3;stroke-opacity:0.498674;paint-order:stroke fill markers"
				d="m 103.98127,118.99752 1.05831,-1.11124 -0.52916,1.16415 0.42333,1.05833 z"
				id="path9701"
			/><path
				style="opacity:1;fill:#792f27;fill-opacity:1;fill-rule:evenodd;stroke-width:0.599996;stroke-linecap:round;stroke-linejoin:round;stroke-miterlimit:3;stroke-opacity:0.498674;paint-order:stroke fill markers"
				d="m 106.6271,119.27417 1.05831,-1.11124 -0.52916,1.16415 0.42333,1.05833 z"
				id="path9703"
			/><path
				style="opacity:1;fill:#792f27;fill-opacity:1;fill-rule:evenodd;stroke-width:0.599996;stroke-linecap:round;stroke-linejoin:round;stroke-miterlimit:3;stroke-opacity:0.498674;paint-order:stroke fill markers"
				d="m 109.00835,119.34825 1.05831,-1.11124 -0.52916,1.16415 0.42333,1.05833 z"
				id="path9705"
			/><path
				style="opacity:1;fill:#792f27;fill-opacity:1;fill-rule:evenodd;stroke-width:0.440001;stroke-linecap:round;stroke-linejoin:round;stroke-miterlimit:3;stroke-opacity:0.498674;paint-order:stroke fill markers"
				d="m 111.26612,119.34825 0.77611,-0.81492 -0.38806,0.85372 0.31045,0.77612 z"
				id="path9707"
			/><path
				style="opacity:1;fill:#792f27;fill-opacity:1;fill-rule:evenodd;stroke-width:0.297142;stroke-linecap:round;stroke-linejoin:round;stroke-miterlimit:3;stroke-opacity:0.498674;paint-order:stroke fill markers"
				d="m 113.08896,119.34825 0.52413,-0.55033 -0.26207,0.57653 0.20966,0.52413 z"
				id="path9709"
			/><path
				style="opacity:1;fill:#594c61;fill-opacity:1;fill-rule:evenodd;stroke-width:3;stroke-linecap:round;stroke-linejoin:round;stroke-miterlimit:3;stroke-opacity:0.498674;paint-order:stroke fill markers"
				d="M 20.372916,39.952083 19.84375,37.570833 21.695833,39.6875 Z"
				id="path9711"
			/><rect
				style="opacity:1;fill:#8a807c;fill-opacity:1;fill-rule:evenodd;stroke-width:3.07409;stroke-linecap:round;stroke-linejoin:round;stroke-miterlimit:3;stroke-opacity:0.498674;paint-order:stroke fill markers"
				id="rect9713"
				width="5.5562601"
				height="7.9375"
				x="112.44791"
				y="96.572914"
			/><rect
				style="opacity:1;fill:#8a807c;fill-opacity:1;fill-rule:evenodd;stroke-width:3;stroke-linecap:round;stroke-linejoin:round;stroke-miterlimit:3;stroke-opacity:0.498674;paint-order:stroke fill markers"
				id="rect9715"
				width="2.6458333"
				height="3.96875"
				x="109.80208"
				y="100.54166"
			/><rect
				style="opacity:1;fill:#8a807c;fill-opacity:1;fill-rule:evenodd;stroke-width:3;stroke-linecap:round;stroke-linejoin:round;stroke-miterlimit:3;stroke-opacity:0.498674;paint-order:stroke fill markers"
				id="rect9717"
				width="5.2916665"
				height="2.6458333"
				x="95.25"
				y="93.927086"
			/><rect
				style="opacity:1;fill:#8a807c;fill-opacity:1;fill-rule:evenodd;stroke-width:2.95683;stroke-linecap:round;stroke-linejoin:round;stroke-miterlimit:3;stroke-opacity:0.498674;paint-order:stroke fill markers"
				id="rect9719"
				width="8.9958353"
				height="3.96875"
				x="16.139582"
				y="76.729164"
			/><rect
				style="opacity:1;fill:#8a807c;fill-opacity:1;fill-rule:evenodd;stroke-width:2.93939;stroke-linecap:round;stroke-linejoin:round;stroke-miterlimit:3;stroke-opacity:0.498674;paint-order:stroke fill markers"
				id="rect9721"
				width="6.3499999"
				height="9.260417"
				x="16.139584"
				y="68.791664"
			/><rect
				style="opacity:1;fill:#8a807c;fill-opacity:1;fill-rule:evenodd;stroke-width:3.22413;stroke-linecap:round;stroke-linejoin:round;stroke-miterlimit:3;stroke-opacity:0.498674;paint-order:stroke fill markers"
				id="rect9723"
				width="5.556251"
				height="2.910418"
				x="30.427082"
				y="62.177082"
			/><path
				style="opacity:1;fill:#62271d;fill-opacity:1;fill-rule:evenodd;stroke-width:3;stroke-linecap:round;stroke-linejoin:round;stroke-miterlimit:3;stroke-opacity:0.498674;paint-order:stroke fill markers"
				d="M 47.624999,89.958332 58.208333,76.729166 47.624999,85.989582 Z"
				id="path9725"
			/><rect
				style="opacity:1;fill:#8a807c;fill-opacity:1;fill-rule:evenodd;stroke-width:3.07409;stroke-linecap:round;stroke-linejoin:round;stroke-miterlimit:3;stroke-opacity:0.498674;paint-order:stroke fill markers"
				id="rect9727"
				width="5.5562525"
				height="11.90625"
				x="42.333332"
				y="84.666664"
			/><rect
				style="opacity:1;fill:#8a807c;fill-opacity:1;fill-rule:evenodd;stroke-width:4.44972;stroke-linecap:round;stroke-linejoin:round;stroke-miterlimit:3;stroke-opacity:0.498674;paint-order:stroke fill markers"
				id="rect9729"
				width="5.8208332"
				height="5.2916617"
				x="70.908333"
				y="83.34375"
			/><rect
				style="opacity:1;fill:#8a807c;fill-opacity:1;fill-rule:evenodd;stroke-width:3;stroke-linecap:round;stroke-linejoin:round;stroke-miterlimit:3;stroke-opacity:0.498674;paint-order:stroke fill markers"
				id="rect9731"
				width="5.2916665"
				height="2.6458309"
				x="99.21875"
				y="85.989586"
			/><rect
				style="opacity:1;fill:#8a807c;fill-opacity:1;fill-rule:evenodd;stroke-width:3;stroke-linecap:round;stroke-linejoin:round;stroke-miterlimit:3;stroke-opacity:0.498674;paint-order:stroke fill markers"
				id="rect9733"
				width="8.7312498"
				height="3.96875"
				x="60.854164"
				y="97.631248"
			/><rect
				style="opacity:1;fill:#8a807c;fill-opacity:1;fill-rule:evenodd;stroke-width:3;stroke-linecap:round;stroke-linejoin:round;stroke-miterlimit:3;stroke-opacity:0.498674;paint-order:stroke fill markers"
				id="rect9735"
				width="7.9375"
				height="3.96875"
				x="66.145836"
				y="100.54166"
			/><path
				style="opacity:1;fill:#594c61;fill-opacity:1;fill-rule:evenodd;stroke-width:3;stroke-linecap:round;stroke-linejoin:round;stroke-miterlimit:3;stroke-opacity:0.498674;paint-order:stroke fill markers"
				d="M 23.547916,39.6875 H 25.4 l -1.852084,-2.38125 z"
				id="path9737"
			/><path
				style="opacity:1;fill:#594c61;fill-opacity:1;fill-rule:evenodd;stroke-width:3;stroke-linecap:round;stroke-linejoin:round;stroke-miterlimit:3;stroke-opacity:0.498674;paint-order:stroke fill markers"
				d="m 27.252083,37.30625 1.5875,2.38125 h -1.322917 z"
				id="path9739"
			/><path
				style="opacity:1;fill:#594c61;fill-opacity:1;fill-rule:evenodd;stroke-width:3;stroke-linecap:round;stroke-linejoin:round;stroke-miterlimit:3;stroke-opacity:0.498674;paint-order:stroke fill markers"
				d="m 29.897916,36.5125 1.322917,2.116666 H 30.1625 Z"
				id="path9741"
			/><path
				style="opacity:1;fill:#594c61;fill-opacity:1;fill-rule:evenodd;stroke-width:3;stroke-linecap:round;stroke-linejoin:round;stroke-miterlimit:3;stroke-opacity:0.498674;paint-order:stroke fill markers"
				d="m 34.13125,35.454166 2.910416,2.910417 H 34.13125 Z"
				id="path9743"
			/><path
				style="opacity:1;fill:#594c61;fill-opacity:1;fill-rule:evenodd;stroke-width:3;stroke-linecap:round;stroke-linejoin:round;stroke-miterlimit:3;stroke-opacity:0.498674;paint-order:stroke fill markers"
				d="m 29.633333,32.014583 2.116667,3.175 V 32.54375 Z"
				id="path9745"
			/><path
				style="opacity:1;fill:#594c61;fill-opacity:1;fill-rule:evenodd;stroke-width:3;stroke-linecap:round;stroke-linejoin:round;stroke-miterlimit:3;stroke-opacity:0.498674;paint-order:stroke fill markers"
				d="m 27.78125,32.014583 1.058333,2.645833 -2.116666,-2.645833 z"
				id="path9747"
			/><path
				style="opacity:1;fill:#594c61;fill-opacity:1;fill-rule:evenodd;stroke-width:3;stroke-linecap:round;stroke-linejoin:round;stroke-miterlimit:3;stroke-opacity:0.498674;paint-order:stroke fill markers"
				d="m 19.05,32.279166 0.529166,3.704167 0.264584,-3.96875 z"
				id="path9749"
			/><path
				style="opacity:1;fill:#594c61;fill-opacity:1;fill-rule:evenodd;stroke-width:3;stroke-linecap:round;stroke-linejoin:round;stroke-miterlimit:3;stroke-opacity:0.498674;paint-order:stroke fill markers"
				d="m 20.108333,31.75 2.645833,3.439583 -1.058333,-3.175 z"
				id="path9751"
			/><path
				style="opacity:1;fill:#594c61;fill-opacity:1;fill-rule:evenodd;stroke-width:3;stroke-linecap:round;stroke-linejoin:round;stroke-miterlimit:3;stroke-opacity:0.498674;paint-order:stroke fill markers"
				d="m 23.01875,31.75 2.645833,2.910416 -1.058333,-2.645833 z"
				id="path9753"
			/><path
				style="opacity:1;fill:#662c26;fill-opacity:1;fill-rule:evenodd;stroke-width:3;stroke-linecap:round;stroke-linejoin:round;stroke-miterlimit:3;stroke-opacity:0.498674;paint-order:stroke fill markers"
				d="M 19.05,32.279166 H 18.520833 V 30.95625 l -2.38125,-2.38125 2.38125,-2.38125 0.79375,-0.79375 0.79375,0.79375 h 9.525 l 3.666175,-2.116667 h 6.123409 l 0.79375,-0.79375 h 1.587499 V 23.8125 l 5.820833,2.38125 2.645834,1.5875 7.9375,0.264583 L 50.8,35.983333 42.597917,37.30625 37.041666,32.808333 H 31.220833 L 30.1625,32.197304 H 20.108333 Z"
				id="path9755"
			/><path
				style="opacity:1;fill:#782818;fill-opacity:1;fill-rule:evenodd;stroke-width:3;stroke-linecap:round;stroke-linejoin:round;stroke-miterlimit:3;stroke-opacity:0.498674;paint-order:stroke fill markers"
				d="m 51.858333,36.777083 3.704166,-2.38125 -1.5875,3.175 5.027084,-3.175 -1.058334,3.439583 4.233334,-3.175 -0.529167,3.175 4.233333,-2.910416 -0.264583,3.175 4.233333,-2.38125 -2.116667,2.645833 3.175,1.5875 -3.439583,-0.79375 3.439583,4.233333 -3.439583,-2.116667 3.175,4.7625 -3.704167,-1.5875 4.233334,5.027084 -3.96875,-2.116667 3.439583,5.55625 -3.96875,-1.852083 3.439583,4.7625 -2.910416,-1.5875 2.910416,5.027083 -3.175,-2.645833 0.79375,5.55625 -3.174999,-3.704167 V 39.6875 H 52.916666 Z"
				id="path9757"
			/><path
				style="opacity:1;fill:#782818;fill-opacity:1;fill-rule:evenodd;stroke-width:3;stroke-linecap:round;stroke-linejoin:round;stroke-miterlimit:3;stroke-opacity:0.498674;paint-order:stroke fill markers"
				d="m 20.372916,42.862499 c 0.868716,1.162579 1.790787,2.305137 3.439584,3.175 L 38.1,43.65625 h 15.874999 l 1.488792,-6.614584 z"
				id="path9759"
			/><path
				style="opacity:1;fill:#121623;fill-opacity:1;fill-rule:evenodd;stroke-width:3;stroke-linecap:round;stroke-linejoin:round;stroke-miterlimit:3;stroke-opacity:0.498674;paint-order:stroke fill markers"
				d="m 29.897916,28.310416 -0.79375,1.5875 1.5875,-0.79375 h 7.9375 L 41.010417,27.516667 41.275,26.9875 41.010417,26.458333 H 36.777083 L 33.3375,27.78125 Z"
				id="path9761"
			/><path
				style="opacity:1;fill:#782818;fill-opacity:1;fill-rule:evenodd;stroke-width:3;stroke-linecap:round;stroke-linejoin:round;stroke-miterlimit:3;stroke-opacity:0.498674;paint-order:stroke fill markers"
				d="M 46.037499,38.629166 50.270833,38.1 l 5.027083,-1.058334 -4.497917,-1.058333 -2.910416,1.058333 z"
				id="path9763"
			/><path
				style="opacity:1;fill:#782818;fill-opacity:1;fill-rule:evenodd;stroke-width:3;stroke-linecap:round;stroke-linejoin:round;stroke-miterlimit:3;stroke-opacity:0.498674;paint-order:stroke fill markers"
				d="M 39.952083,35.189583 42.06875,38.1 49.477083,35.71875 46.0375,39.952083 42.333333,39.158333 39.6875,35.189583 Z"
				id="path9765"
			/><path
				style="opacity:1;fill:#391d15;fill-opacity:1;fill-rule:evenodd;stroke-width:3;stroke-linecap:round;stroke-linejoin:round;stroke-miterlimit:3;stroke-opacity:0.498674;paint-order:stroke fill markers"
				d="m 53.445833,37.835417 2.910417,1.5875 H 49.741666 L 41.275,43.65625 38.1,43.656249 33.05901,40.745833 C 35.838158,40.246362 42.597917,39.6875 42.597917,39.6875 L 49.2125,37.570833 Z"
				id="path9767"
			/><path
				style="opacity:1;fill:#782818;fill-opacity:1;fill-rule:evenodd;stroke-width:3;stroke-linecap:round;stroke-linejoin:round;stroke-miterlimit:3;stroke-opacity:0.498674;paint-order:stroke fill markers"
				d="m 39.952083,35.189583 2.38125,3.96875 c 0,0 0,0 -1.81545,-0.09141 -0.09835,-0.005 -2.1533,-2.819006 -2.1533,-2.819006 z"
				id="path9769"
			/><path
				style="opacity:1;fill:#594c61;fill-opacity:1;fill-rule:evenodd;stroke-width:3;stroke-linecap:round;stroke-linejoin:round;stroke-miterlimit:3;stroke-opacity:0.498674;paint-order:stroke fill markers"
				d="m 39.952083,35.189583 -1.5875,1.058333 -2.116667,-4.7625 z"
				id="path9771"
			/><path
				style="opacity:1;fill:#62271d;fill-opacity:1;fill-rule:evenodd;stroke-width:3;stroke-linecap:round;stroke-linejoin:round;stroke-miterlimit:3;stroke-opacity:0.498674;paint-order:stroke fill markers"
				d="m 48.418749,43.656249 3.704167,-3.704166 -1.852083,3.704166 z"
				id="path9773"
			/><path
				style="opacity:1;fill:#62271d;fill-opacity:1;fill-rule:evenodd;stroke-width:3;stroke-linecap:round;stroke-linejoin:round;stroke-miterlimit:3;stroke-opacity:0.498674;paint-order:stroke fill markers"
				d="m 52.387499,43.656249 2.645834,-3.439583 -1.5875,3.439583 z"
				id="path9775"
			/><path
				style="opacity:1;fill:#62271d;fill-opacity:1;fill-rule:evenodd;stroke-width:3;stroke-linecap:round;stroke-linejoin:round;stroke-miterlimit:3;stroke-opacity:0.498674;paint-order:stroke fill markers"
				d="m 62.970833,37.835416 2.38125,1.322917 -2.38125,1.322916 1.058333,-1.322916 z"
				id="path9777"
			/><path
				style="opacity:1;fill:#62271d;fill-opacity:1;fill-rule:evenodd;stroke-width:3;stroke-linecap:round;stroke-linejoin:round;stroke-miterlimit:3;stroke-opacity:0.498674;paint-order:stroke fill markers"
				d="m 59.266667,37.835416 2.38125,1.322917 -2.38125,1.322916 1.058333,-1.322916 z"
				id="path9779"
			/><path
				style="opacity:1;fill:#62271d;fill-opacity:1;fill-rule:evenodd;stroke-width:3;stroke-linecap:round;stroke-linejoin:round;stroke-miterlimit:3;stroke-opacity:0.498674;paint-order:stroke fill markers"
				d="m 64.029166,42.333333 2.645833,-1.5875 -2.645833,3.175 z"
				id="path9781"
			/><path
				style="opacity:1;fill:#62271d;fill-opacity:1;fill-rule:evenodd;stroke-width:3;stroke-linecap:round;stroke-linejoin:round;stroke-miterlimit:3;stroke-opacity:0.498674;paint-order:stroke fill markers"
				d="M 64.029166,46.0375 66.674999,44.45 64.029166,47.625 Z"
				id="path9783"
			/><path
				style="opacity:1;fill:#62271d;fill-opacity:1;fill-rule:evenodd;stroke-width:3;stroke-linecap:round;stroke-linejoin:round;stroke-miterlimit:3;stroke-opacity:0.498674;paint-order:stroke fill markers"
				d="m 64.029166,48.683333 2.645833,-1.5875 -2.645833,3.175 z"
				id="path9785"
			/><path
				style="opacity:1;fill:#62271d;fill-opacity:1;fill-rule:evenodd;stroke-width:3;stroke-linecap:round;stroke-linejoin:round;stroke-miterlimit:3;stroke-opacity:0.498674;paint-order:stroke fill markers"
				d="m 64.029166,51.858333 2.645833,-1.5875 -2.645833,3.175 z"
				id="path9787"
			/><path
				style="opacity:1;fill:#62271d;fill-opacity:1;fill-rule:evenodd;stroke-width:3;stroke-linecap:round;stroke-linejoin:round;stroke-miterlimit:3;stroke-opacity:0.498674;paint-order:stroke fill markers"
				d="m 61.647916,56.356249 1.058333,2.645834 -2.910416,-1.5875 z"
				id="path9789"
			/><path
				style="opacity:1;fill:#62271d;fill-opacity:1;fill-rule:evenodd;stroke-width:3;stroke-linecap:round;stroke-linejoin:round;stroke-miterlimit:3;stroke-opacity:0.498674;paint-order:stroke fill markers"
				d="m 59.531249,60.589583 -1.5875,-2.116667 -1.322916,0.79375 z"
				id="path9791"
			/><path
				style="opacity:1;fill:#62271d;fill-opacity:1;fill-rule:evenodd;stroke-width:3;stroke-linecap:round;stroke-linejoin:round;stroke-miterlimit:3;stroke-opacity:0.498674;paint-order:stroke fill markers"
				d="m 52.652083,61.912499 3.175,0.264584 -3.96875,1.5875 z"
				id="path9793"
			/><path
				style="opacity:1;fill:#62271d;fill-opacity:1;fill-rule:evenodd;stroke-width:3;stroke-linecap:round;stroke-linejoin:round;stroke-miterlimit:3;stroke-opacity:0.498674;paint-order:stroke fill markers"
				d="m 50.799999,66.145832 2.645834,-0.793749 -3.439584,2.381249 z"
				id="path9795"
			/><path
				style="opacity:1;fill:#782818;fill-opacity:1;fill-rule:evenodd;stroke-width:3;stroke-linecap:round;stroke-linejoin:round;stroke-miterlimit:3;stroke-opacity:0.498674;paint-order:stroke fill markers"
				d="m 57.679166,29.36875 3.439583,2.116666 -4.233333,1.322917 1.852083,-1.5875 z"
				id="path9797"
			/><path
				style="opacity:1;fill:#782818;fill-opacity:1;fill-rule:evenodd;stroke-width:3;stroke-linecap:round;stroke-linejoin:round;stroke-miterlimit:3;stroke-opacity:0.498674;paint-order:stroke fill markers"
				d="m 65.352083,29.897916 2.381249,2.116667 -3.174999,0.79375 L 66.145832,31.75 Z"
				id="path9799"
			/><path
				style="opacity:1;fill:#782818;fill-opacity:1;fill-rule:evenodd;stroke-width:3.4;stroke-linecap:round;stroke-linejoin:round;stroke-miterlimit:3;stroke-opacity:0.498674;paint-order:stroke fill markers"
				d="m 72.337082,31.167917 0.599723,4.497916 -2.998611,-2.69875 2.099027,0.899584 z"
				id="path9801"
			/><path
				style="opacity:1;fill:#782818;fill-opacity:1;fill-rule:evenodd;stroke-width:3;stroke-linecap:round;stroke-linejoin:round;stroke-miterlimit:3;stroke-opacity:0.498674;paint-order:stroke fill markers"
				d="m 74.877082,37.835416 -0.529166,3.175 -2.645834,-3.175 2.116667,1.058334 z"
				id="path9803"
			/><path
				style="opacity:1;fill:#782818;fill-opacity:1;fill-rule:evenodd;stroke-width:3;stroke-linecap:round;stroke-linejoin:round;stroke-miterlimit:3;stroke-opacity:0.498674;paint-order:stroke fill markers"
				d="m 75.670832,43.920833 -1.5875,2.910416 -1.5875,-3.175 1.5875,1.5875 z"
				id="path9805"
			/><path
				style="opacity:1;fill:#782818;fill-opacity:1;fill-rule:evenodd;stroke-width:3;stroke-linecap:round;stroke-linejoin:round;stroke-miterlimit:3;stroke-opacity:0.498674;paint-order:stroke fill markers"
				d="m 75.670832,48.683334 -1.5875,2.910416 -1.5875,-3.175 1.5875,1.5875 z"
				id="path9807"
			/><path
				style="opacity:1;fill:#782818;fill-opacity:1;fill-rule:evenodd;stroke-width:3;stroke-linecap:round;stroke-linejoin:round;stroke-miterlimit:3;stroke-opacity:0.498674;paint-order:stroke fill markers"
				d="m 71.966666,53.445833 1.5875,3.439583 2.116666,-3.175 -2.116666,1.322917 z"
				id="path9809"
			/><path
				style="opacity:1;fill:#782818;fill-opacity:1;fill-rule:evenodd;stroke-width:3;stroke-linecap:round;stroke-linejoin:round;stroke-miterlimit:3;stroke-opacity:0.498674;paint-order:stroke fill markers"
				d="m 71.437499,58.208333 v 4.497916 l 3.175,-3.96875 -2.116667,1.322917 z"
				id="path9811"
			/><path
				style="opacity:1;fill:#782818;fill-opacity:1;fill-rule:evenodd;stroke-width:3;stroke-linecap:round;stroke-linejoin:round;stroke-miterlimit:3;stroke-opacity:0.498674;paint-order:stroke fill markers"
				d="m 72.760416,64.029166 -3.175,3.439583 v -4.497916 l 0.79375,2.116666 z"
				id="path9813"
			/><path
				style="opacity:1;fill:#782818;fill-opacity:1;fill-rule:evenodd;stroke-width:3;stroke-linecap:round;stroke-linejoin:round;stroke-miterlimit:3;stroke-opacity:0.498674;paint-order:stroke fill markers"
				d="m 81.756249,76.464582 c 0.403725,-2.057974 2.903178,-3.447431 5.55625,-4.7625 l -2.910417,5.291667 z"
				id="path9815"
			/><path
				style="opacity:1;fill:#2e2121;fill-opacity:1;fill-rule:evenodd;stroke-width:3;stroke-linecap:round;stroke-linejoin:round;stroke-miterlimit:3;stroke-opacity:0.498674;paint-order:stroke fill markers"
				d="m 87.312499,71.702082 1.5875,3.704167 -3.439583,4.233333 -1.058334,-2.645833 z"
				id="path9817"
			/><path
				style="opacity:1;fill:#8d6158;fill-opacity:1;fill-rule:evenodd;stroke-width:3;stroke-linecap:round;stroke-linejoin:round;stroke-miterlimit:3;stroke-opacity:0.498674;paint-order:stroke fill markers"
				d="m 81.756249,76.464582 -0.79375,1.5875 2.38125,0.264584 2.116667,1.322916 -1.058334,-2.645833 z"
				id="path9819"
			/><path
				style="opacity:1;fill:#745047;fill-opacity:1;fill-rule:evenodd;stroke-width:3;stroke-linecap:round;stroke-linejoin:round;stroke-miterlimit:3;stroke-opacity:0.498674;paint-order:stroke fill markers"
				d="m 80.962499,78.052082 -1.852083,8.995834 6.35,-7.408334 -2.116667,-1.322916 z"
				id="path9821"
			/><path
				style="opacity:1;fill:#745047;fill-opacity:1;fill-rule:evenodd;stroke-width:3;stroke-linecap:round;stroke-linejoin:round;stroke-miterlimit:3;stroke-opacity:0.498674;paint-order:stroke fill markers"
				d="m 85.460417,79.639583 2.381249,4.233333 -6.35,6.085416 z"
				id="path9823"
			/><path
				style="opacity:1;fill:#8d6158;fill-opacity:1;fill-rule:evenodd;stroke-width:3;stroke-linecap:round;stroke-linejoin:round;stroke-miterlimit:3;stroke-opacity:0.498674;paint-order:stroke fill markers"
				d="m 85.460416,79.639582 0.529167,2.381251 1.852083,1.852083 v -2.645834 z"
				id="path9825"
			/><path
				style="opacity:1;fill:#782818;fill-opacity:1;fill-rule:evenodd;stroke-width:3;stroke-linecap:round;stroke-linejoin:round;stroke-miterlimit:3;stroke-opacity:0.498674;paint-order:stroke fill markers"
				d="m 82.020832,64.558333 2.645834,0.264583 -1.058334,-1.852083 z"
				id="path9827"
			/><path
				style="opacity:1;fill:#782818;fill-opacity:1;fill-rule:evenodd;stroke-width:3;stroke-linecap:round;stroke-linejoin:round;stroke-miterlimit:3;stroke-opacity:0.498674;paint-order:stroke fill markers"
				d="m 85.460416,61.118749 3.439583,-0.264583 -1.852083,-1.322917 z"
				id="path9829"
			/><path
				style="opacity:1;fill:#782818;fill-opacity:1;fill-rule:evenodd;stroke-width:3;stroke-linecap:round;stroke-linejoin:round;stroke-miterlimit:3;stroke-opacity:0.498674;paint-order:stroke fill markers"
				d="m 88.899999,57.679166 h 3.439583 l -1.5875,-1.852083 z"
				id="path9831"
			/><path
				style="opacity:1;fill:#782818;fill-opacity:1;fill-rule:evenodd;stroke-width:3;stroke-linecap:round;stroke-linejoin:round;stroke-miterlimit:3;stroke-opacity:0.498674;paint-order:stroke fill markers"
				d="m 94.191665,52.387499 1.058334,1.058334 -2.645833,0.529166 z"
				id="path9833"
			/><path
				style="opacity:1;fill:#782818;fill-opacity:1;fill-rule:evenodd;stroke-width:3;stroke-linecap:round;stroke-linejoin:round;stroke-miterlimit:3;stroke-opacity:0.498674;paint-order:stroke fill markers"
				d="m 94.985415,49.477083 1.852084,-3.439584 -2.38125,1.322917 0.264583,0.529167 z"
				id="path9835"
			/><path
				style="opacity:1;fill:#782818;fill-opacity:1;fill-rule:evenodd;stroke-width:3;stroke-linecap:round;stroke-linejoin:round;stroke-miterlimit:3;stroke-opacity:0.498674;paint-order:stroke fill markers"
				d="m 94.720832,41.804166 -1.322917,3.96875 -1.322916,-2.38125 z"
				id="path9837"
			/><path
				style="opacity:1;fill:#782818;fill-opacity:1;fill-rule:evenodd;stroke-width:3;stroke-linecap:round;stroke-linejoin:round;stroke-miterlimit:3;stroke-opacity:0.498674;paint-order:stroke fill markers"
				d="m 91.281249,37.30625 -0.79375,3.439583 -1.322917,-1.852083 z"
				id="path9839"
			/><path
				style="opacity:1;fill:#782818;fill-opacity:1;fill-rule:evenodd;stroke-width:3;stroke-linecap:round;stroke-linejoin:round;stroke-miterlimit:3;stroke-opacity:0.498674;paint-order:stroke fill markers"
				d="m 87.577082,36.5125 1.058334,-3.175 -2.38125,1.058333 z"
				id="path9841"
			/><path
				style="opacity:1;fill:#782818;fill-opacity:1;fill-rule:evenodd;stroke-width:3;stroke-linecap:round;stroke-linejoin:round;stroke-miterlimit:3;stroke-opacity:0.498674;paint-order:stroke fill markers"
				d="M 85.195832,29.104166 84.402082,31.75 83.343749,30.427083 Z"
				id="path9843"
			/><path
				style="opacity:1;fill:#782818;fill-opacity:1;fill-rule:evenodd;stroke-width:3;stroke-linecap:round;stroke-linejoin:round;stroke-miterlimit:3;stroke-opacity:0.498674;paint-order:stroke fill markers"
				d="m 82.020832,25.4 -0.264583,2.910416 -1.322917,-1.5875 z"
				id="path9845"
			/><path
				style="opacity:1;fill:#782818;fill-opacity:1;fill-rule:evenodd;stroke-width:3;stroke-linecap:round;stroke-linejoin:round;stroke-miterlimit:3;stroke-opacity:0.498674;paint-order:stroke fill markers"
				d="m 79.374999,21.43125 -0.529167,3.175 -1.322916,-1.852084 z"
				id="path9847"
			/><path
				style="opacity:1;fill:#782818;fill-opacity:1;fill-rule:evenodd;stroke-width:3;stroke-linecap:round;stroke-linejoin:round;stroke-miterlimit:3;stroke-opacity:0.498674;paint-order:stroke fill markers"
				d="m 75.935416,17.4625 -0.529167,2.910416 -1.322917,-1.5875 z"
				id="path9849"
			/><path
				style="opacity:1;fill:#782818;fill-opacity:1;fill-rule:evenodd;stroke-width:3;stroke-linecap:round;stroke-linejoin:round;stroke-miterlimit:3;stroke-opacity:0.498674;paint-order:stroke fill markers"
				d="m 73.024999,14.2875 -0.264583,2.910416 -1.587499,-1.852083 z"
				id="path9851"
			/><circle
				style="opacity:1;fill:#311916;fill-opacity:1;fill-rule:evenodd;stroke-width:3;stroke-linecap:round;stroke-linejoin:round;stroke-miterlimit:3;stroke-opacity:0.498674;paint-order:stroke fill markers"
				id="circle9853"
				cx="96.308334"
				cy="27.516666"
				r="1.0583333"
			/><circle
				style="opacity:1;fill:#311916;fill-opacity:1;fill-rule:evenodd;stroke-width:3;stroke-linecap:round;stroke-linejoin:round;stroke-miterlimit:3;stroke-opacity:0.498674;paint-order:stroke fill markers"
				id="circle9855"
				cx="92.074997"
				cy="24.077084"
				r="0.79374999"
			/><circle
				style="opacity:1;fill:#311916;fill-opacity:1;fill-rule:evenodd;stroke-width:3;stroke-linecap:round;stroke-linejoin:round;stroke-miterlimit:3;stroke-opacity:0.498674;paint-order:stroke fill markers"
				id="circle9857"
				cx="99.747917"
				cy="33.602081"
				r="1.0583333"
			/><circle
				style="opacity:1;fill:#311916;fill-opacity:1;fill-rule:evenodd;stroke-width:3;stroke-linecap:round;stroke-linejoin:round;stroke-miterlimit:3;stroke-opacity:0.498674;paint-order:stroke fill markers"
				id="circle9859"
				cx="102.12917"
				cy="38.893749"
				r="0.79374999"
			/><path
				style="opacity:1;fill:#2f2222;fill-opacity:1;fill-rule:evenodd;stroke-width:3;stroke-linecap:round;stroke-linejoin:round;stroke-miterlimit:3;stroke-opacity:0.498674;paint-order:stroke fill markers"
				d="m 76.2,11.641667 c 7.312907,2.801912 15.034777,5.592285 20.372915,12.170833 5.238615,5.065848 8.875055,11.613168 9.260415,21.166666 l -2.11666,33.602083 h -2.64584 l 2.91042,-33.602083 C 102.87608,28.258922 86.981663,17.156608 76.2,15.875 Z"
				id="path9861"
			/><path
				style="opacity:1;fill:#682c26;fill-opacity:1;fill-rule:evenodd;stroke-width:3;stroke-linecap:round;stroke-linejoin:round;stroke-miterlimit:3;stroke-opacity:0.498674;paint-order:stroke fill markers"
				d="M 70.114582,11.90625 H 80.697916 V 6.614583 h -10.31875 l -0.79375,0.7937505 0.264583,4.4979165 z"
				id="path9863"
			/><path
				style="opacity:1;fill:#4d4d4b;fill-opacity:1;fill-rule:evenodd;stroke-width:3;stroke-linecap:round;stroke-linejoin:round;stroke-miterlimit:3;stroke-opacity:0.498674;paint-order:stroke fill markers"
				d="m 69.585416,7.4083332 1.852083,1.5875 -2.116666,4.2333338 -0.79375,-0.264584 1.852083,-3.7041664 -1.5875,-1.8520834 z"
				id="path9865"
			/><path
				style="opacity:1;fill:#705d52;fill-opacity:1;fill-rule:evenodd;stroke-width:3;stroke-linecap:round;stroke-linejoin:round;stroke-miterlimit:3;stroke-opacity:0.498674;paint-order:stroke fill markers"
				d="m 60.060417,13.758333 -3.439584,0.264583 c -2.417194,-0.0611 -4.828923,-0.16654 -7.14375,-1.058333 -1.719647,-1.058051 -2.506168,-2.365388 -3.175,-3.7041664 3.071967,-4.0464338 6.816731,-3.7540304 10.31875,-5.0270833 -1.994847,1.2943964 -4.096093,2.3612239 -5.820834,4.2333333 0.25886,0.6517784 0.541751,1.2990152 1.322917,1.8520834 2.740769,0.105972 5.508638,0.117996 8.466667,-0.5291667 z"
				id="path9867"
			/><path
				style="opacity:1;fill:#705d52;fill-opacity:1;fill-rule:evenodd;stroke-width:2.59808;stroke-linecap:round;stroke-linejoin:round;stroke-miterlimit:3;stroke-opacity:0.498674;paint-order:stroke fill markers"
				d="m 60.457291,9.7895832 1.190626,-0.2645833 c 0,0 -0.396876,4.2333331 -0.396876,4.2333331 h -1.190625 z"
				id="path9869"
			/><path
				style="opacity:1;fill:#705d52;fill-opacity:1;fill-rule:evenodd;stroke-width:3;stroke-linecap:round;stroke-linejoin:round;stroke-miterlimit:3;stroke-opacity:0.498674;paint-order:stroke fill markers"
				d="M 68.527082,12.964583 C 68.113217,11.489962 67.607853,10.004242 66.674999,8.4666666 l -0.79375,0.5291666 c 0.280804,1.6810188 0.964106,2.7816958 1.5875,3.9687498 z"
				id="path9871"
			/><path
				style="opacity:1;fill:#705d52;fill-opacity:1;fill-rule:evenodd;stroke-width:3;stroke-linecap:round;stroke-linejoin:round;stroke-miterlimit:3;stroke-opacity:0.498674;paint-order:stroke fill markers"
				d="m 61.11875,13.758333 c 2.033454,-0.09054 4.137343,-0.328402 6.349999,-0.79375 L 65.881249,8.9958332 61.647917,9.525 Z"
				id="path9873"
			/><path
				style="opacity:1;fill:#705d52;fill-opacity:1;fill-rule:evenodd;stroke-width:3;stroke-linecap:round;stroke-linejoin:round;stroke-miterlimit:3;stroke-opacity:0.498674;paint-order:stroke fill markers"
				d="m 68.527082,12.964583 1.852084,-3.7041664 -1.5875,-1.8520834 -2.116667,1.0583334 z"
				id="path9875"
			/><rect
				style="opacity:1;fill:#705d52;fill-opacity:1;fill-rule:evenodd;stroke-width:3.31902;stroke-linecap:round;stroke-linejoin:round;stroke-miterlimit:3;stroke-opacity:0.498674;paint-order:stroke fill markers"
				id="rect9877"
				width="1.7563124"
				height="1.7563124"
				x="59.692299"
				y="-24.614082"
				transform="rotate(31.367005)"
			/><circle
				style="opacity:1;fill:#311916;fill-opacity:1;fill-rule:evenodd;stroke-width:3;stroke-linecap:round;stroke-linejoin:round;stroke-miterlimit:3;stroke-opacity:0.498674;paint-order:stroke fill markers"
				id="circle9879"
				cx="111.65417"
				cy="32.808334"
				r="1.0583333"
			/><path
				style="opacity:1;fill:#682c26;fill-opacity:1;fill-rule:evenodd;stroke-width:3;stroke-linecap:round;stroke-linejoin:round;stroke-miterlimit:3;stroke-opacity:0.498674;paint-order:stroke fill markers"
				d="M 80.433333,6.6145833 V 11.90625 h 25.399997 c 2.60847,1.021325 5.23947,2.017108 6.61459,6.614583 v 64.822916 h 5.29166 V 21.166666 C 116.58613,13.966778 114.91626,7.0950246 103.1875,6.6145832 Z"
				id="path9881"
			/><path
				style="opacity:1;fill:#1a2021;fill-opacity:1;fill-rule:evenodd;stroke-width:3;stroke-linecap:round;stroke-linejoin:round;stroke-miterlimit:3;stroke-opacity:0.498674;paint-order:stroke fill markers"
				d="M 74.347916,6.6145832 V 9.5249999 L 77.787499,6.6145832 Z"
				id="path9883"
			/><path
				style="opacity:1;fill:#1a2021;fill-opacity:1;fill-rule:evenodd;stroke-width:3;stroke-linecap:round;stroke-linejoin:round;stroke-miterlimit:3;stroke-opacity:0.498674;paint-order:stroke fill markers"
				d="M 80.301042,6.6145832 V 9.5249999 L 83.740625,6.6145832 Z"
				id="path9885"
			/><path
				style="opacity:1;fill:#1a2021;fill-opacity:1;fill-rule:evenodd;stroke-width:3;stroke-linecap:round;stroke-linejoin:round;stroke-miterlimit:3;stroke-opacity:0.498674;paint-order:stroke fill markers"
				d="M 87.709375,6.6145832 V 9.5249999 L 91.148958,6.6145832 Z"
				id="path9887"
			/><path
				style="opacity:1;fill:#1a2021;fill-opacity:1;fill-rule:evenodd;stroke-width:3;stroke-linecap:round;stroke-linejoin:round;stroke-miterlimit:3;stroke-opacity:0.498674;paint-order:stroke fill markers"
				d="M 94.853125,6.6145832 V 9.5249999 L 98.292708,6.6145832 Z"
				id="path9889"
			/><path
				style="opacity:1;fill:#1a2021;fill-opacity:1;fill-rule:evenodd;stroke-width:2.69615;stroke-linecap:round;stroke-linejoin:round;stroke-miterlimit:3;stroke-opacity:0.498674;paint-order:stroke fill markers"
				d="m 101.20313,6.6145832 v 2.9104167 l 2.51354,-2.9104166 z"
				id="path9891"
			/><path
				style="opacity:1;fill:#1a2021;fill-opacity:1;fill-rule:evenodd;stroke-width:3;stroke-linecap:round;stroke-linejoin:round;stroke-miterlimit:3;stroke-opacity:0.498674;paint-order:stroke fill markers"
				d="m 108.21458,7.4083332 -1.85208,2.6458338 5.02708,-1.3229171 c -0.917,-0.506121 -1.86303,-0.9988602 -3.175,-1.3229167 z"
				id="path9893"
			/><path
				style="opacity:1;fill:#1a2021;fill-opacity:1;fill-rule:evenodd;stroke-width:3;stroke-linecap:round;stroke-linejoin:round;stroke-miterlimit:3;stroke-opacity:0.498674;paint-order:stroke fill markers"
				d="m 114.03542,10.847917 -2.38125,1.5875 4.49791,2.116666 c -0.42642,-0.955726 -1.00099,-2.227177 -2.11666,-3.704166 z"
				id="path9895"
			/><path
				style="opacity:1;fill:#1a2021;fill-opacity:1;fill-rule:evenodd;stroke-width:3;stroke-linecap:round;stroke-linejoin:round;stroke-miterlimit:3;stroke-opacity:0.498674;paint-order:stroke fill markers"
				d="M 116.94583,17.4625 H 114.3 l 3.43958,3.704167 c -0.0974,-1.113773 -0.28222,-2.290841 -0.79375,-3.704167 z"
				id="path9897"
			/><path
				style="opacity:1;fill:#1a2021;fill-opacity:1;fill-rule:evenodd;stroke-width:3;stroke-linecap:round;stroke-linejoin:round;stroke-miterlimit:3;stroke-opacity:0.498674;paint-order:stroke fill markers"
				d="m 117.73958,23.283333 h -2.64583 l 2.64583,3.439583 z"
				id="path9899"
			/><path
				style="opacity:1;fill:#1a2021;fill-opacity:1;fill-rule:evenodd;stroke-width:3;stroke-linecap:round;stroke-linejoin:round;stroke-miterlimit:3;stroke-opacity:0.498674;paint-order:stroke fill markers"
				d="m 117.73958,29.236458 h -2.64583 l 2.64583,3.439583 z"
				id="path9901"
			/><path
				style="opacity:1;fill:#1a2021;fill-opacity:1;fill-rule:evenodd;stroke-width:3;stroke-linecap:round;stroke-linejoin:round;stroke-miterlimit:3;stroke-opacity:0.498674;paint-order:stroke fill markers"
				d="m 117.73958,35.321875 h -2.64583 l 2.64583,3.439583 z"
				id="path9903"
			/><path
				style="opacity:1;fill:#1a2021;fill-opacity:1;fill-rule:evenodd;stroke-width:3;stroke-linecap:round;stroke-linejoin:round;stroke-miterlimit:3;stroke-opacity:0.498674;paint-order:stroke fill markers"
				d="m 117.73958,42.465625 h -2.64583 l 2.64583,3.439583 z"
				id="path9905"
			/><path
				style="opacity:1;fill:#1a2021;fill-opacity:1;fill-rule:evenodd;stroke-width:3;stroke-linecap:round;stroke-linejoin:round;stroke-miterlimit:3;stroke-opacity:0.498674;paint-order:stroke fill markers"
				d="m 117.73958,48.286458 h -2.64583 l 2.64583,3.439583 z"
				id="path9907"
			/><path
				style="opacity:1;fill:#1a2021;fill-opacity:1;fill-rule:evenodd;stroke-width:3;stroke-linecap:round;stroke-linejoin:round;stroke-miterlimit:3;stroke-opacity:0.498674;paint-order:stroke fill markers"
				d="m 117.73958,53.842708 h -2.64583 l 2.64583,3.439583 z"
				id="path9909"
			/><path
				style="opacity:1;fill:#1a2021;fill-opacity:1;fill-rule:evenodd;stroke-width:3;stroke-linecap:round;stroke-linejoin:round;stroke-miterlimit:3;stroke-opacity:0.498674;paint-order:stroke fill markers"
				d="m 117.73958,60.986458 h -2.64583 l 2.64583,3.439583 z"
				id="path9911"
			/><path
				style="opacity:1;fill:#1a2021;fill-opacity:1;fill-rule:evenodd;stroke-width:3;stroke-linecap:round;stroke-linejoin:round;stroke-miterlimit:3;stroke-opacity:0.498674;paint-order:stroke fill markers"
				d="m 117.73958,67.071875 h -2.64583 l 2.64583,3.439583 z"
				id="path9913"
			/><path
				style="opacity:1;fill:#1a2021;fill-opacity:1;fill-rule:evenodd;stroke-width:3;stroke-linecap:round;stroke-linejoin:round;stroke-miterlimit:3;stroke-opacity:0.498674;paint-order:stroke fill markers"
				d="m 117.73958,73.157292 h -2.64583 l 2.64583,3.439583 z"
				id="path9915"
			/><circle
				style="opacity:1;fill:#311916;fill-opacity:1;fill-rule:evenodd;stroke-width:3;stroke-linecap:round;stroke-linejoin:round;stroke-miterlimit:3;stroke-opacity:0.498674;paint-order:stroke fill markers"
				id="circle9917"
				cx="96.572914"
				cy="19.314583"
				r="1.3229166"
			/><circle
				style="opacity:1;fill:#311916;fill-opacity:1;fill-rule:evenodd;stroke-width:3;stroke-linecap:round;stroke-linejoin:round;stroke-miterlimit:3;stroke-opacity:0.498674;paint-order:stroke fill markers"
				id="circle9919"
				cx="108.74375"
				cy="18.520834"
				r="1.3229166"
			/><circle
				style="opacity:1;fill:#311916;fill-opacity:1;fill-rule:evenodd;stroke-width:3;stroke-linecap:round;stroke-linejoin:round;stroke-miterlimit:3;stroke-opacity:0.498674;paint-order:stroke fill markers"
				id="circle9921"
				cx="109.27292"
				cy="23.018749"
				r="1.0583333"
			/><circle
				style="opacity:1;fill:#311916;fill-opacity:1;fill-rule:evenodd;stroke-width:3;stroke-linecap:round;stroke-linejoin:round;stroke-miterlimit:3;stroke-opacity:0.498674;paint-order:stroke fill markers"
				id="circle9923"
				cx="104.775"
				cy="23.8125"
				r="0.79374999"
			/><circle
				style="opacity:1;fill:#311916;fill-opacity:1;fill-rule:evenodd;stroke-width:3;stroke-linecap:round;stroke-linejoin:round;stroke-miterlimit:3;stroke-opacity:0.498674;paint-order:stroke fill markers"
				id="circle9925"
				cx="101.86458"
				cy="22.225"
				r="0.79374999"
			/><circle
				style="opacity:1;fill:#311916;fill-opacity:1;fill-rule:evenodd;stroke-width:3;stroke-linecap:round;stroke-linejoin:round;stroke-miterlimit:3;stroke-opacity:0.498674;paint-order:stroke fill markers"
				id="circle9927"
				cx="98.424995"
				cy="23.018749"
				r="1.0583333"
			/><circle
				style="opacity:1;fill:#311916;fill-opacity:1;fill-rule:evenodd;stroke-width:3;stroke-linecap:round;stroke-linejoin:round;stroke-miterlimit:3;stroke-opacity:0.498674;paint-order:stroke fill markers"
				id="circle9929"
				cx="92.604164"
				cy="28.045834"
				r="1.3229166"
			/><circle
				style="opacity:1;fill:#311916;fill-opacity:1;fill-rule:evenodd;stroke-width:3;stroke-linecap:round;stroke-linejoin:round;stroke-miterlimit:3;stroke-opacity:0.498674;paint-order:stroke fill markers"
				id="circle9931"
				cx="104.51041"
				cy="29.104166"
				r="1.3229166"
			/><circle
				style="opacity:1;fill:#311916;fill-opacity:1;fill-rule:evenodd;stroke-width:3;stroke-linecap:round;stroke-linejoin:round;stroke-miterlimit:3;stroke-opacity:0.498674;paint-order:stroke fill markers"
				id="circle9933"
				cx="109.5375"
				cy="27.252083"
				r="1.0583333"
			/><circle
				style="opacity:1;fill:#311916;fill-opacity:1;fill-rule:evenodd;stroke-width:3;stroke-linecap:round;stroke-linejoin:round;stroke-miterlimit:3;stroke-opacity:0.498674;paint-order:stroke fill markers"
				id="circle9935"
				cx="107.68542"
				cy="32.014584"
				r="0.79374999"
			/><circle
				style="opacity:1;fill:#311916;fill-opacity:1;fill-rule:evenodd;stroke-width:3;stroke-linecap:round;stroke-linejoin:round;stroke-miterlimit:3;stroke-opacity:0.498674;paint-order:stroke fill markers"
				id="circle9937"
				cx="109.00833"
				cy="38.099998"
				r="1.0583333"
			/><circle
				style="opacity:1;fill:#311916;fill-opacity:1;fill-rule:evenodd;stroke-width:3;stroke-linecap:round;stroke-linejoin:round;stroke-miterlimit:3;stroke-opacity:0.498674;paint-order:stroke fill markers"
				id="circle9939"
				cx="105.30417"
				cy="35.454166"
				r="0.52916664"
			/><circle
				style="opacity:1;fill:#311916;fill-opacity:1;fill-rule:evenodd;stroke-width:3;stroke-linecap:round;stroke-linejoin:round;stroke-miterlimit:3;stroke-opacity:0.498674;paint-order:stroke fill markers"
				id="circle9941"
				cx="104.51041"
				cy="32.543751"
				r="0.52916664"
			/><circle
				style="opacity:1;fill:#311916;fill-opacity:1;fill-rule:evenodd;stroke-width:3;stroke-linecap:round;stroke-linejoin:round;stroke-miterlimit:3;stroke-opacity:0.498674;paint-order:stroke fill markers"
				id="circle9943"
				cx="99.48333"
				cy="40.745834"
				r="0.79374999"
			/><circle
				style="opacity:1;fill:#311916;fill-opacity:1;fill-rule:evenodd;stroke-width:3;stroke-linecap:round;stroke-linejoin:round;stroke-miterlimit:3;stroke-opacity:0.498674;paint-order:stroke fill markers"
				id="circle9945"
				cx="98.954163"
				cy="37.041668"
				r="1.0583333"
			/><circle
				style="opacity:1;fill:#311916;fill-opacity:1;fill-rule:evenodd;stroke-width:3;stroke-linecap:round;stroke-linejoin:round;stroke-miterlimit:3;stroke-opacity:0.498674;paint-order:stroke fill markers"
				id="circle9947"
				cx="96.043747"
				cy="31.75"
				r="1.3229166"
			/><circle
				style="opacity:1;fill:#311916;fill-opacity:1;fill-rule:evenodd;stroke-width:3;stroke-linecap:round;stroke-linejoin:round;stroke-miterlimit:3;stroke-opacity:0.498674;paint-order:stroke fill markers"
				id="circle9949"
				cx="91.810417"
				cy="32.014584"
				r="0.79374999"
			/><circle
				style="opacity:1;fill:#311916;fill-opacity:1;fill-rule:evenodd;stroke-width:3;stroke-linecap:round;stroke-linejoin:round;stroke-miterlimit:3;stroke-opacity:0.498674;paint-order:stroke fill markers"
				id="circle9951"
				cx="95.25"
				cy="35.983334"
				r="1.0583333"
			/><circle
				style="opacity:1;fill:#311916;fill-opacity:1;fill-rule:evenodd;stroke-width:3;stroke-linecap:round;stroke-linejoin:round;stroke-miterlimit:3;stroke-opacity:0.498674;paint-order:stroke fill markers"
				id="circle9953"
				cx="88.900002"
				cy="30.1625"
				r="0.79374999"
			/><circle
				style="opacity:1;fill:#311916;fill-opacity:1;fill-rule:evenodd;stroke-width:3;stroke-linecap:round;stroke-linejoin:round;stroke-miterlimit:3;stroke-opacity:0.498674;paint-order:stroke fill markers"
				id="circle9955"
				cx="101.86458"
				cy="19.049999"
				r="1.0583333"
			/><path
				style="opacity:1;fill:#391d15;fill-opacity:1;fill-rule:evenodd;stroke-width:3;stroke-linecap:round;stroke-linejoin:round;stroke-miterlimit:3;stroke-opacity:0.498674;paint-order:stroke fill markers"
				d="M 30.95625,41.010417 33.3375,44.45 29.36875,41.010417 Z"
				id="path9957"
			/><path
				style="opacity:1;fill:#391d15;fill-opacity:1;fill-rule:evenodd;stroke-width:3;stroke-linecap:round;stroke-linejoin:round;stroke-miterlimit:3;stroke-opacity:0.498674;paint-order:stroke fill markers"
				d="m 27.78125,41.539583 2.38125,3.439584 -4.233333,-3.439584 z"
				id="path9959"
			/><path
				style="opacity:1;fill:#391d15;fill-opacity:1;fill-rule:evenodd;stroke-width:3;stroke-linecap:round;stroke-linejoin:round;stroke-miterlimit:3;stroke-opacity:0.498674;paint-order:stroke fill markers"
				d="m 25.135416,42.068749 7.9375,-1.322916 -1.322916,-0.79375 -7.14375,1.5875 z"
				id="path9961"
			/><path
				style="opacity:1;fill:#e4e210;fill-opacity:1;fill-rule:evenodd;stroke-width:3;stroke-linecap:round;stroke-linejoin:round;stroke-miterlimit:3;stroke-opacity:0.498674;paint-order:stroke fill markers"
				d="m 34.925,28.575 h 2.116667 l 1.322916,-1.5875 h -2.116666 z"
				id="path9963"
			/><path
				style="opacity:1;fill:#1e2121;fill-opacity:1;fill-rule:evenodd;stroke-width:3;stroke-linecap:round;stroke-linejoin:round;stroke-miterlimit:3;stroke-opacity:0.498674;paint-order:stroke fill markers"
				d="m 16.933333,29.36875 h 1.5875 l 1.5875,-1.852084 2.38125,1.5875 -1.5875,-0.264583 -1.5875,1.5875 h -1.322917 z"
				id="path9965"
			/><path
				style="opacity:1;fill:#2e2121;fill-opacity:1;fill-rule:evenodd;stroke-width:3;stroke-linecap:round;stroke-linejoin:round;stroke-miterlimit:3;stroke-opacity:0.498674;paint-order:stroke fill markers"
				d="m 58.208333,28.045833 -18.520833,7.408334 0.933717,0.993314 3.346817,1.932286 11.594465,-3.983934 z"
				id="path9967"
			/><path
				style="opacity:1;fill:#e08b14;fill-opacity:1;fill-rule:evenodd;stroke-width:3;stroke-linecap:round;stroke-linejoin:round;stroke-miterlimit:3;stroke-opacity:0.498674;paint-order:stroke fill markers"
				d="m 33.3375,21.43125 c 1.306561,6.403728 0.685872,7.897615 0.529167,11.377083 L 31.75,32.54375 c 0.199564,-3.833911 0.538349,-7.61302 1.5875,-11.1125 z"
				id="path9969"
			/><path
				style="opacity:1;fill:#f4f105;fill-opacity:1;fill-rule:evenodd;stroke-width:3;stroke-linecap:round;stroke-linejoin:round;stroke-miterlimit:3;stroke-opacity:0.498674;paint-order:stroke fill markers"
				d="M 33.866666,33.866666 C 33.765202,31.894051 33.605951,29.403725 33.072917,27.516667 32.378736,28.982911 32.006864,31.284988 31.75,32.808333 Z"
				id="path9971"
			/><path
				style="opacity:1;fill:#2e2121;fill-opacity:1;fill-rule:evenodd;stroke-width:3;stroke-linecap:round;stroke-linejoin:round;stroke-miterlimit:3;stroke-opacity:0.498674;paint-order:stroke fill markers"
				d="M 55.562499,34.395833 52.652083,36.5125 50.799999,35.983333 Z"
				id="path9973"
			/><path
				style="opacity:1;fill:#182021;fill-opacity:1;fill-rule:evenodd;stroke-width:3;stroke-linecap:round;stroke-linejoin:round;stroke-miterlimit:3;stroke-opacity:0.498674;paint-order:stroke fill markers"
				d="M 51.064583,20.6375 52.3875,18.520833 53.975,19.05 55.033333,17.991667 56.620833,19.05 Z"
				id="path9975"
			/><path
				style="opacity:1;fill:#662c26;fill-opacity:1;fill-rule:evenodd;stroke-width:3;stroke-linecap:round;stroke-linejoin:round;stroke-miterlimit:3;stroke-opacity:0.498674;paint-order:stroke fill markers"
				d="m 64.029167,22.489583 c -2.502428,3.104352 -5.442431,6.199847 -12.964584,9.789583 -2.31002,0.872458 -4.975298,1.975863 -7.408334,3.96875 l -1.058333,-7.14375 10.159785,-3.215122 c 3.514381,-1.541335 7.612247,-2.748691 11.271466,-3.399461 z"
				id="path9977"
			/><path
				style="opacity:1;fill:#662c26;fill-opacity:1;fill-rule:evenodd;stroke-width:3;stroke-linecap:round;stroke-linejoin:round;stroke-miterlimit:3;stroke-opacity:0.498674;paint-order:stroke fill markers"
				d="M 47.360416,29.633333 50.799999,29.104166 48.154166,31.75 48.947916,29.897916 Z"
				id="path9979"
			/><path
				style="opacity:1;fill:#182021;fill-opacity:1;fill-rule:evenodd;stroke-width:3;stroke-linecap:round;stroke-linejoin:round;stroke-miterlimit:3;stroke-opacity:0.498674;paint-order:stroke fill markers"
				d="M 46.0375,28.045833 51.064583,28.575 48.683333,33.3375 49.2125,29.36875 Z"
				id="path9981"
			/><path
				style="opacity:1;fill:#182021;fill-opacity:1;fill-rule:evenodd;stroke-width:3;stroke-linecap:round;stroke-linejoin:round;stroke-miterlimit:3;stroke-opacity:0.498674;paint-order:stroke fill markers"
				d="m 51.064583,26.458333 3.704166,0.79375 -1.322916,3.704167 v -3.175 z"
				id="path9983"
			/><path
				style="opacity:1;fill:#182021;fill-opacity:1;fill-rule:evenodd;stroke-width:3;stroke-linecap:round;stroke-linejoin:round;stroke-miterlimit:3;stroke-opacity:0.498674;paint-order:stroke fill markers"
				d="m 51.858333,23.01875 -8.466667,8.466666 -2.38125,1.374815 v -3.756065 l 3.704167,-4.233333 z"
				id="path9985"
			/><path
				style="opacity:1;fill:#e08b14;fill-opacity:1;fill-rule:evenodd;stroke-width:3;stroke-linecap:round;stroke-linejoin:round;stroke-miterlimit:3;stroke-opacity:0.498674;paint-order:stroke fill markers"
				d="m 40.48125,35.983333 c 0.983444,0.448925 2.104931,0.232916 3.174999,0.264583 0.316841,-1.798317 0.06344,-4.093056 -1.058333,-7.14375 l -1.322917,2.38125 0.264584,-8.73125 c -1.177377,3.819484 -2.346888,7.637939 -2.910417,11.377084 0.435565,0.777049 1.040981,1.404903 1.852084,1.852083 z"
				id="path9987"
			/><path
				style="opacity:1;fill:#182021;fill-opacity:1;fill-rule:evenodd;stroke-width:3;stroke-linecap:round;stroke-linejoin:round;stroke-miterlimit:3;stroke-opacity:0.498674;paint-order:stroke fill markers"
				d="M 55.033333,25.135416 58.208333,25.4 57.15,28.839583 l -10e-7,-2.645833 z"
				id="path9989"
			/><path
				style="opacity:1;fill:#182021;fill-opacity:1;fill-rule:evenodd;stroke-width:3;stroke-linecap:round;stroke-linejoin:round;stroke-miterlimit:3;stroke-opacity:0.498674;paint-order:stroke fill markers"
				d="m 58.737499,23.8125 h 2.645834 l -1.322916,2.910417 0.264582,-2.116667 z"
				id="path9991"
			/><path
				style="opacity:1;fill:#391d15;fill-opacity:1;fill-rule:evenodd;stroke-width:3;stroke-linecap:round;stroke-linejoin:round;stroke-miterlimit:3;stroke-opacity:0.498674;paint-order:stroke fill markers"
				d="m 42.333333,39.158333 h 2.116666 l -4.233333,2.645833 -7.14375,-1.058333 z"
				id="path9993"
			/><path
				style="opacity:1;fill:#2e2121;fill-opacity:1;fill-rule:evenodd;stroke-width:3;stroke-linecap:round;stroke-linejoin:round;stroke-miterlimit:3;stroke-opacity:0.498674;paint-order:stroke fill markers"
				d="M 43.920833,38.1 H 42.06875 l -1.587501,-1.852084 3.439584,0.79375 z"
				id="path9995"
			/><path
				style="opacity:1;fill:#f4f105;fill-opacity:1;fill-rule:evenodd;stroke-width:3;stroke-linecap:round;stroke-linejoin:round;stroke-miterlimit:3;stroke-opacity:0.498674;paint-order:stroke fill markers"
				d="m 42.597917,36.247917 c 0.476125,-2.021052 0.309499,-4.21795 -0.264584,-6.085417 l -1.5875,3.96875 v -5.820834 c -0.513779,2.039355 -1.29819,4.912914 -1.322916,6.879167 0.948852,1.176391 2.116666,1.058334 3.175,1.058334 z"
				id="path9997"
			/><path
				style="opacity:1;fill:#782818;fill-opacity:1;fill-rule:evenodd;stroke-width:3;stroke-linecap:round;stroke-linejoin:round;stroke-miterlimit:3;stroke-opacity:0.498674;paint-order:stroke fill markers"
				d="m 42.068749,38.1 h 2.910417 l -0.529167,0.529166 z"
				id="path9999"
			/><path
				style="opacity:1;fill:#182021;fill-opacity:1;fill-rule:evenodd;stroke-width:3;stroke-linecap:round;stroke-linejoin:round;stroke-miterlimit:3;stroke-opacity:0.498674;paint-order:stroke fill markers"
				d="M 56.091666,19.05 57.414583,17.991667 58.737499,19.05 Z"
				id="path10001"
			/><path
				style="opacity:1;fill:#182021;fill-opacity:1;fill-rule:evenodd;stroke-width:3;stroke-linecap:round;stroke-linejoin:round;stroke-miterlimit:3;stroke-opacity:0.498674;paint-order:stroke fill markers"
				d="m 44.979166,25.135416 -2.116667,-0.79375 0.79375,2.116667 -1.5875,-0.79375 0.264584,2.38125 z"
				id="path10003"
			/><path
				style="opacity:1;fill:#e08c14;fill-opacity:1;fill-rule:evenodd;stroke-width:3;stroke-linecap:round;stroke-linejoin:round;stroke-miterlimit:3;stroke-opacity:0.498674;paint-order:stroke fill markers"
				d="m 66.145832,124.35417 c -3.871042,-1.39844 -5.19076,-3.77329 -5.291666,-6.61459 1.283907,-3.56 3.131127,-6.83056 6.614583,-9.26041 3.911233,-5.55908 5.05665,-11.448634 6.614584,-17.19792 l 1.322916,15.875 2.645833,-3.96875 c -0.417842,3.45623 -0.04121,6.97865 1.322917,10.58333 4.557388,-5.02595 8.503305,-10.56424 10.583334,-14.55208 10e-7,3.93476 0,7.0437 -10e-7,9.26042 3.741338,11.85098 -0.677369,12.12484 -2.645833,15.875 l -3.174999,0.52916 -8.731251,-4.49791 z"
				id="path10005"
			/><path
				style="opacity:1;fill:#e0cf14;fill-opacity:1;fill-rule:evenodd;stroke-width:3;stroke-linecap:round;stroke-linejoin:round;stroke-miterlimit:3;stroke-opacity:0.498674;paint-order:stroke fill markers"
				d="m 77.258332,121.97292 c 2.75378,2.68652 4.863207,2.97257 6.879167,2.91041 l 3.175001,-15.08125 -9.260418,9.26042 c -2.618289,-2.18523 -3.836639,-7.29277 -5.291666,-11.90625 -2.749842,4.21735 -5.799946,7.87932 -7.9375,13.22917 -0.600458,4.58321 2.441952,4.93274 6.614583,3.96875 2.669406,-0.81094 5.194391,-1.61847 5.820833,-2.38125 z"
				id="path10007"
			/><path
				style="opacity:1;fill:#e0cf14;fill-opacity:1;fill-rule:evenodd;stroke-width:3;stroke-linecap:round;stroke-linejoin:round;stroke-miterlimit:3;stroke-opacity:0.498674;paint-order:stroke fill markers"
				d="m 84.137499,124.88333 c 4.036403,-2.72556 6.003557,-5.98186 5.820833,-9.78958 l -5.291666,2.64583 z"
				id="path10009"
			/><path
				style="opacity:1;fill:#e0cf14;fill-opacity:1;fill-rule:evenodd;stroke-width:3;stroke-linecap:round;stroke-linejoin:round;stroke-miterlimit:3;stroke-opacity:0.498674;paint-order:stroke fill markers"
				d="m 74.083332,117.73958 2.645834,-5.29166 1.322916,7.9375 h -5.291666 z"
				id="path10011"
			/><path
				style="opacity:1;fill:#e08c14;fill-opacity:1;fill-rule:evenodd;stroke-width:3;stroke-linecap:round;stroke-linejoin:round;stroke-miterlimit:3;stroke-opacity:0.498674;paint-order:stroke fill markers"
				d="m 118.00417,104.51042 c 0.93378,-3.92281 1.63593,-6.519646 1.05833,-10.583338 -2.32267,-7.585138 -1.11038,-13.693152 0,-19.84375 l 3.96875,-13.229166 c -1.46959,1.370983 -2.05652,2.88612 -5.29167,3.96875 0.96356,-3.404637 1.82631,-5.327292 2.64584,-6.614583 -2.14906,-2.690483 -1.22662,-4.507716 -1.32292,-6.614584 v -6.614583 c -1.62187,2.803223 -3.33538,5.249204 -3.96875,11.90625 -1.66722,3.358325 -4.12652,5.666972 -6.61458,7.9375 -0.34408,-2.002234 -0.3614,-4.196892 0,-6.614583 -0.80021,-2.167066 -1.06246,-4.390731 -1.32292,-6.614584 l 1.32292,-5.291666 c -4.03561,3.195858 -4.03068,9.752979 -7.9375,14.552083 -1.59194,2.697808 -4.57147,4.149071 -7.408337,7.672917 -1.732326,3.383629 -3.559181,6.67242 -5.820834,9.524999 l 27.781251,26.458338 z"
				id="path10013"
			/><path
				style="opacity:1;fill:#e0cf14;fill-opacity:1;fill-rule:evenodd;stroke-width:3;stroke-linecap:round;stroke-linejoin:round;stroke-miterlimit:3;stroke-opacity:0.498674;paint-order:stroke fill markers"
				d="m 115.09375,83.343749 -2.64583,3.96875 c -2.14163,-4.801371 -1.2316,-9.691248 -1.32292,-14.552083 -2.48468,3.025107 -4.94339,6.096855 -6.61458,10.583333 -3.27172,-5.884208 -3.15271,-11.553362 -2.64584,-17.197917 -6.200414,4.023887 -8.808578,9.751777 -10.583331,15.875 v 19.843748 h 9.260421 v 6.61459 h 7.9375 v -3.96875 h 6.61458 c 4.52495,-4.42887 2.3846,-12.726878 0,-21.166671 z"
				id="path10015"
			/><path
				style="opacity:1;fill:#745047;fill-opacity:1;fill-rule:evenodd;stroke-width:3;stroke-linecap:round;stroke-linejoin:round;stroke-miterlimit:3;stroke-opacity:0.498674;paint-order:stroke fill markers"
				d="m 87.841667,83.872917 1.322915,1.852082 2.381251,0.529168 -6.879167,5.556249 z"
				id="path10017"
			/><path
				style="opacity:1;fill:#782818;fill-opacity:1;fill-rule:evenodd;stroke-width:3;stroke-linecap:round;stroke-linejoin:round;stroke-miterlimit:3;stroke-opacity:0.498674;paint-order:stroke fill markers"
				d="m 88.899999,75.406249 2.645833,0.79375 -3.704165,5.027084 -2.381251,-1.587501 z"
				id="path10019"
			/><path
				style="opacity:1;fill:#2e2121;fill-opacity:1;fill-rule:evenodd;stroke-width:3;stroke-linecap:round;stroke-linejoin:round;stroke-miterlimit:3;stroke-opacity:0.498674;paint-order:stroke fill markers"
				d="m 87.841666,81.227082 v 2.645834 l 4.233333,-3.439584 -0.529167,-4.233333 z"
				id="path10021"
			/><path
				style="opacity:1;fill:#782818;fill-opacity:1;fill-rule:evenodd;stroke-width:3;stroke-linecap:round;stroke-linejoin:round;stroke-miterlimit:3;stroke-opacity:0.498674;paint-order:stroke fill markers"
				d="m 92.074999,80.433332 2.116666,1.058334 -3.704166,3.439583 -2.645832,-1.058332 z"
				id="path10023"
			/><path
				style="opacity:1;fill:#2e2121;fill-opacity:1;fill-rule:evenodd;stroke-width:3;stroke-linecap:round;stroke-linejoin:round;stroke-miterlimit:3;stroke-opacity:0.498674;paint-order:stroke fill markers"
				d="m 94.191665,81.491666 0.264584,1.322916 -2.910416,3.439585 -1.058334,-1.322918 z"
				id="path10025"
			/><path
				style="opacity:1;fill:#8d6158;fill-opacity:1;fill-rule:evenodd;stroke-width:3;stroke-linecap:round;stroke-linejoin:round;stroke-miterlimit:3;stroke-opacity:0.498674;paint-order:stroke fill markers"
				d="m 90.487499,84.931249 1.058334,1.322918 v 0 H 88.9 l -1.058333,-2.38125 -10e-7,-10e-7 z"
				id="path10027"
			/><path
				style="opacity:1;fill:#a99b95;fill-opacity:1;fill-rule:evenodd;stroke-width:3;stroke-linecap:round;stroke-linejoin:round;stroke-miterlimit:3;stroke-opacity:0.498674;paint-order:stroke fill markers"
				d="m 91.281249,88.370832 h -2.38125 l 2.645833,-2.116666 v 2.116666 z"
				id="path10029"
			/><path
				style="opacity:1;fill:#e0cf14;fill-opacity:1;fill-rule:evenodd;stroke-width:3;stroke-linecap:round;stroke-linejoin:round;stroke-miterlimit:3;stroke-opacity:0.498674;paint-order:stroke fill markers"
				d="m 91.281249,86.518749 0.264583,-0.264583 v 2.116666 h -0.264583 z"
				id="path10031"
			/><path
				style="opacity:1;fill:#8a807c;fill-opacity:1;fill-rule:evenodd;stroke-width:3;stroke-linecap:round;stroke-linejoin:round;stroke-miterlimit:3;stroke-opacity:0.498674;paint-order:stroke fill markers"
				d="m 112.44791,104.51042 v 3.96875 h 5.29167 v -3.96875 z"
				id="path10033"
			/><path
				style="opacity:1;fill:#8a807c;fill-opacity:1;fill-rule:evenodd;stroke-width:3;stroke-linecap:round;stroke-linejoin:round;stroke-miterlimit:3;stroke-opacity:0.498674;paint-order:stroke fill markers"
				d="m 84.666666,103.1875 h -2.645834 v -5.291668 h 2.645834 z"
				id="path10035"
			/><path
				style="opacity:1;fill:#8a807c;fill-opacity:1;fill-rule:evenodd;stroke-width:3;stroke-linecap:round;stroke-linejoin:round;stroke-miterlimit:3;stroke-opacity:0.498674;paint-order:stroke fill markers"
				d="m 84.666666,105.83333 h -5.291667 v -5.29166 h 5.291667 z"
				id="path10037"
			/><path
				style="opacity:1;fill:#8a807c;fill-opacity:1;fill-rule:evenodd;stroke-width:3;stroke-linecap:round;stroke-linejoin:round;stroke-miterlimit:3;stroke-opacity:0.498674;paint-order:stroke fill markers"
				d="m 79.374999,100.54167 v -2.645838 h 2.645833 v 2.645838 z"
				id="path10039"
			/></g
		><g id="g9603"
			><path
				style="opacity:1;fill:#e08c14;fill-opacity:1;fill-rule:evenodd;stroke-width:3;stroke-linecap:round;stroke-linejoin:round;stroke-miterlimit:3;stroke-opacity:0.498674;paint-order:stroke fill markers"
				d="M 9.2604166,107.15625 C 6.7510703,104.18602 5.7701355,101.63369 5.2916666,99.218749 10.500763,89.35462 8.5263348,91.273157 9.2604166,88.635416 5.2788314,78.400669 6.5896482,78.864638 6.6145832,76.729166 7.3779322,71.512317 9.1855989,66.97882 10.583333,62.177083 c 0.427365,10.384149 1.641358,11.192926 2.645834,14.552083 0.6587,-4.584215 2.37213,-6.790646 3.968749,-9.260417 L 23.8125,96.572915 11.90625,107.15625 Z"
				id="path255661"
			/><path
				style="opacity:1;fill:#662c26;fill-opacity:1;fill-rule:evenodd;stroke-width:3;stroke-linecap:round;stroke-linejoin:round;stroke-miterlimit:3;stroke-opacity:0.498674;paint-order:stroke fill markers"
				d="m 41.804166,23.283333 3.96875,-3.439583 8.466667,-2.38125 11.90625,0.529167 -12.170834,1.058333 -5.55625,2.38125 -3.704166,3.704166 -3.439584,-0.79375 z"
				id="path244890"
			/><path
				style="opacity:1;fill:#411f17;fill-opacity:1;fill-rule:evenodd;stroke-width:3;stroke-linecap:round;stroke-linejoin:round;stroke-miterlimit:3;stroke-opacity:0.498674;paint-order:stroke fill markers"
				d="M 87.312499,95.249999 115.09375,83.343749 113.77083,15.875 103.1875,11.90625 83.343749,21.166666 84.666666,31.75 l 14.552083,17.197916 -14.552083,19.84375 -5.291667,7.9375 z"
				id="path119543"
			/><path
				style="opacity:1;fill:#311916;fill-opacity:1;fill-rule:evenodd;stroke-width:3;stroke-linecap:round;stroke-linejoin:round;stroke-miterlimit:3;stroke-opacity:0.498674;paint-order:stroke fill markers"
				d="m 86.518749,29.36875 c 1.305793,-1.01551 2.923359,-1.456266 3.704167,-3.439584 -0.5208,-1.738822 -0.135539,-3.060945 0,-4.497916 l 2.38125,-0.264584 c 0.832576,-1.819153 1.407163,-3.927109 2.645833,-5.291666 2.854713,0.655683 4.679101,2.369248 6.614581,3.96875 1.09234,-1.958167 2.95282,-3.189711 5.29167,-3.96875 2.11319,1.409441 3.87887,3.171514 5.29167,5.291666 l 1.32291,-3.96875 -7.9375,-6.614583 H 75.406249 l -1.322917,3.96875 5.291667,7.9375 z"
				id="path119030"
			/><path
				style="opacity:1;fill:#182021;fill-opacity:1;fill-rule:evenodd;stroke-width:3;stroke-linecap:round;stroke-linejoin:round;stroke-miterlimit:3;stroke-opacity:0.498674;paint-order:stroke fill markers"
				d="m 44.714584,25.399999 -0.529167,-2.116666 1.852082,0.529167 -0.264582,-2.38125 1.852082,0.529166 10e-7,-1.587499 1.587499,0.529166 0.793751,-1.5875 1.852083,1.058333 z"
				id="path249602"
			/><path
				style="opacity:1;fill:#182021;fill-opacity:1;fill-rule:evenodd;stroke-width:3;stroke-linecap:round;stroke-linejoin:round;stroke-miterlimit:3;stroke-opacity:0.498674;paint-order:stroke fill markers"
				d="M 47.889583,26.9875 51.858333,23.01875 60.325,21.695833 66.410417,17.991667 53.974999,19.05 48.418749,21.43125 44.449999,25.4 Z"
				id="path245000"
			/><path
				style="opacity:1;fill:#757574;fill-opacity:1;fill-rule:evenodd;stroke-width:3;stroke-linecap:round;stroke-linejoin:round;stroke-miterlimit:3;stroke-opacity:0.498674;paint-order:stroke fill markers"
				d="m 59.531249,28.045833 8.202083,-4.7625 -5.027083,5.820833 9.525,-2.910416 -3.96875,4.233333 9.525,-1.852083 c -2.76267,1.057771 -4.367926,2.590591 -6.35,3.96875 h 3.175 c 2.261896,-0.968111 4.109211,0.409792 6.085417,1.058333 -2.118241,-0.203516 -4.237524,-0.599978 -6.35,0.264583 l 1.5875,2.116667 c 2.177615,0.276944 3.545275,0.960902 5.027083,1.5875 -1.795233,-0.178385 -3.546643,-0.494277 -5.55625,0 l 0.79375,2.38125 c 2.257544,0.126664 3.890116,1.009682 5.55625,1.852083 -1.785951,-0.32866 -3.466056,-0.761757 -5.820833,-0.529167 l 0.264583,2.645834 c 2.368376,1.066976 4.128102,2.372445 5.820833,3.704166 -2.05681,-0.655315 -3.86272,-1.469721 -6.35,-1.852083 l 0.529167,2.910417 6.879167,5.291666 -7.9375,-1.852083 1.058333,3.704167 6.085417,4.233333 -6.35,-1.852083 -1.5875,-2.645834 -4.233334,-17.197916 z"
				id="path97127"
			/><path
				style="opacity:1;fill:#2e2121;fill-opacity:1;fill-rule:evenodd;stroke-width:3;stroke-linecap:round;stroke-linejoin:round;stroke-miterlimit:3;stroke-opacity:0.498674;paint-order:stroke fill markers"
				d="m 74.083332,78.052082 v -4.7625 l -1.058333,-1.058333 v -6.085417 c 1.440193,-1.803866 3.560807,-3.448061 3.704167,-5.556249 V 37.041666 c -0.575361,-5.18908 -3.621653,-8.219208 -8.73125,-8.73125 l -9.789583,-0.264583 -3.96875,2.291358 v 8.027392 l 13.229166,2.645833 -1.322917,17.197917 -6.614583,7.937499 2.645834,17.197917 11.906249,-3.96875 z"
				id="path92953"
			/><path
				style="opacity:1;fill:#2e2121;fill-opacity:1;fill-rule:evenodd;stroke-width:3;stroke-linecap:round;stroke-linejoin:round;stroke-miterlimit:3;stroke-opacity:0.498674;paint-order:stroke fill markers"
				d="m 47.624999,77.258332 1.852084,-8.202083 -6.614584,4.497917 0.264584,4.7625 z"
				id="path87760"
			/><path
				style="opacity:1;fill:#e08c14;fill-opacity:1;fill-rule:evenodd;stroke-width:3;stroke-linecap:round;stroke-linejoin:round;stroke-miterlimit:3;stroke-opacity:0.498674;paint-order:stroke fill markers"
				d="m 35.71875,66.145832 c 1.279509,-2.234601 2.405284,-4.534457 2.645833,-6.614583 2.648285,-2.107829 3.184948,-4.124694 4.7625,-6.349999 0.194183,2.652921 0.261006,5.060112 1.852083,7.672916 0.458904,3.753283 0.341108,5.741577 0,7.9375 3.204862,-2.35793 3.161721,-6.884856 4.762501,-10.054166 0.937671,3.490667 1.469236,6.823395 1.058333,9.789583 l -0.529167,10.847916 h -7.9375 z"
				id="path255924"
			/><path
				style="opacity:1;fill:#782818;fill-opacity:1;fill-rule:evenodd;stroke-width:3;stroke-linecap:round;stroke-linejoin:round;stroke-miterlimit:3;stroke-opacity:0.498674;paint-order:stroke fill markers"
				d="m 55.297916,37.30625 13.49375,-0.264584 v 19.84375 l -5.291667,7.9375 v 13.229166 l 7.937501,10e-7 v 30.427087 l -31.75,0 7.937499,-31.750004 1.5875,-7.14375 3.704167,-8.202083 11.1125,-6.415805 V 41.010416 h -7.14375 l -2.645833,2.645833 H 38.1 l 2.910416,-2.645833 6.614583,-2.645833 z"
				id="path85381"
			/><path
				style="opacity:1;fill:#62271d;fill-opacity:1;fill-rule:evenodd;stroke-width:3;stroke-linecap:round;stroke-linejoin:round;stroke-miterlimit:3;stroke-opacity:0.498674;paint-order:stroke fill markers"
				d="m 47.889583,75.406249 0.529166,-2.38125 3.439584,-1.5875 z"
				id="path87024"
			/><path
				style="opacity:1;fill:#62271d;fill-opacity:1;fill-rule:evenodd;stroke-width:3;stroke-linecap:round;stroke-linejoin:round;stroke-miterlimit:3;stroke-opacity:0.498674;paint-order:stroke fill markers"
				d="m 49.2125,69.585417 3.174999,-1.322918 -3.439583,2.910417 z"
				id="path124603"
			/><path
				style="opacity:1;fill:#f4f105;fill-opacity:1;fill-rule:evenodd;stroke-width:3;stroke-linecap:round;stroke-linejoin:round;stroke-miterlimit:3;stroke-opacity:0.498674;paint-order:stroke fill markers"
				d="M 19.84375,37.570833 19.579166,35.983333 19.05,32.279166 21.166666,31.057109 H 33.602083 L 42.11262,33.3375 40.127562,40.745833 H 20.902083 Z"
				id="path77076"
			/><path
				style="opacity:1;fill:#f4f105;fill-opacity:1;fill-rule:evenodd;stroke-width:3;stroke-linecap:round;stroke-linejoin:round;stroke-miterlimit:3;stroke-opacity:0.498674;paint-order:stroke fill markers"
				d="M 21.695833,39.6875 C 27.66753,37.181137 32.65608,37.157116 38.1,35.983333 l 2.38125,2.910417 C 38.9965,39.937785 29.311938,41.930054 21.695833,39.6875 Z"
				id="path67005"
			/><path
				style="opacity:1;fill:#391d15;fill-opacity:1;fill-rule:evenodd;stroke-width:3;stroke-linecap:round;stroke-linejoin:round;stroke-miterlimit:3;stroke-opacity:0.498674;paint-order:stroke fill markers"
				d="M 20.372916,39.952083 21.695833,39.6875 h 1.852083 3.96875 1.322917 L 30.1625,38.629166 h 1.058333 l 2.910417,-0.264583 h 2.910416 l 5.556251,0.79375 -3.968751,0.79375 c -4.236456,1.401973 -6.944477,2.382904 -11.90625,2.645833 l -6.35,0.264583 z"
				id="path67277"
			/><path
				style="opacity:1;fill:#62271d;fill-opacity:1;fill-rule:evenodd;stroke-width:3;stroke-linecap:round;stroke-linejoin:round;stroke-miterlimit:3;stroke-opacity:0.498674;paint-order:stroke fill markers"
				d="m 47.889583,78.052082 c 0,0 10.847916,-7.672916 10.583333,-7.672916 -0.264583,0 -10.847917,12.170833 -10.847917,12.170833 z"
				id="path87028"
			/><path
				style="opacity:1;fill:#62271d;fill-opacity:1;fill-rule:evenodd;stroke-width:3;stroke-linecap:round;stroke-linejoin:round;stroke-miterlimit:3;stroke-opacity:0.498674;paint-order:stroke fill markers"
				d="m 47.624999,97.895832 13.229167,-15.875 -14.552083,10.583334 z"
				id="path87032"
			/><path
				style="opacity:1;fill:#2e2121;fill-opacity:1;fill-rule:evenodd;stroke-width:3;stroke-linecap:round;stroke-linejoin:round;stroke-miterlimit:3;stroke-opacity:0.498674;paint-order:stroke fill markers"
				d="m 73.81875,73.289583 6.879166,-10e-7 2.116666,-4.497916 v -1.5875 h -5.820833 l -1.058333,1.058333 v 1.852083 h 2.645833 v -1.322916 h 2.116667 v 1.058333 h -1.058334 v 1.5875 h -4.233333 l -0.79375,-0.79375 v -3.704167 l 1.852083,-1.852083 h 5.027084 L 94.720832,51.858333 c 0.428701,-1.347233 0.268906,-2.661086 0,-3.96875 -6.904046,-12.149895 -15.539218,-23.639052 -25.4,-34.660416 l 10e-7,-1.5875 h 7.14375 l -1e-6,4.233333 25.399998,33.072916 -18.520831,24.077083 v 5.027083 l -9.524999,10e-7 z"
				id="path106076"
			/><path
				style="opacity:1;fill:#782818;fill-opacity:1;fill-rule:evenodd;stroke-width:3;stroke-linecap:round;stroke-linejoin:round;stroke-miterlimit:3;stroke-opacity:0.498674;paint-order:stroke fill markers"
				d="m 74.877082,78.316666 -8.466666,-10.31875 h -1.5875 l 0.529167,7.408333 1.587499,1.322917 2.910417,-1.322917 -2.645833,-2.910417 -0.529167,1.058334 1.852083,1.322916 -1.322916,0.529167 -1.322917,-0.79375 v -4.497917 h 0.79375 l 7.408333,8.466667 z"
				id="path90605"
			/><path
				style="opacity:1;fill:#a99b95;fill-opacity:1;fill-rule:evenodd;stroke-width:3;stroke-linecap:round;stroke-linejoin:round;stroke-miterlimit:3;stroke-opacity:0.498674;paint-order:stroke fill markers"
				d="M 13.49375,101.6 V 83.872916 h 2.645833 v -19.05 h 3.96875 v -5.820833 h 15.875 v 6.085416 h 8.202083 v 11.90625 h 3.704167 v 23.283331 h 6.614583 v 4.49792 l 6.35,2.38125 V 92.339582 h 10.054166 v -14.2875 h 12.435417 l 8.73125,11.1125 h 7.14375 V 78.581249 h 12.435421 v 4.7625 h 6.35 V 119.59167 H 11.90625 Z"
				id="path63463"
			/><path
				style="opacity:1;fill:#8a807c;fill-opacity:1;fill-rule:evenodd;stroke-width:3;stroke-linecap:round;stroke-linejoin:round;stroke-miterlimit:3;stroke-opacity:0.498674;paint-order:stroke fill markers"
				d="m 109.80208,104.51042 v 10.58333 h -6.61458 v -6.61458 h 5.29167 v -3.96875 z"
				id="path9375"
			/><path
				style="opacity:1;fill:#8a807c;fill-opacity:1;fill-rule:evenodd;stroke-width:3;stroke-linecap:round;stroke-linejoin:round;stroke-miterlimit:3;stroke-opacity:0.498674;paint-order:stroke fill markers"
				d="m 100.54167,104.51042 h -2.645838 v -2.64584 H 91.281249 V 93.927082 H 84.666666 V 115.09375 H 103.1875 v -6.61458 h -2.64583 z"
				id="path9373"
			/><path
				style="opacity:1;fill:#8a807c;fill-opacity:1;fill-rule:evenodd;stroke-width:3;stroke-linecap:round;stroke-linejoin:round;stroke-miterlimit:3;stroke-opacity:0.498674;paint-order:stroke fill markers"
				d="m 109.80208,115.09375 v 3.96875 H 89.958332 v -3.96875 z"
				id="path9377"
			/><path
				style="opacity:1;fill:#777777;fill-opacity:1;fill-rule:evenodd;stroke-width:3;stroke-linecap:round;stroke-linejoin:round;stroke-miterlimit:3;stroke-opacity:0.498674;paint-order:stroke fill markers"
				d="m 11.377083,101.86458 8.466667,-7.408331 c -1.426371,3.602192 -3.344867,6.869961 -3.439584,11.377081 l 0.79375,0.52917 c 2.247305,-3.41544 5.036891,-5.90367 7.9375,-8.202085 l -3.96875,10.318755 2.645834,-0.26459 9.525,-8.995831 -3.96875,10.847921 3.439583,-0.79375 c 2.764391,-3.30652 6.048747,-6.38401 9.789583,-9.26042 l -3.704166,10.05417 5.291666,0.52916 c 1.096342,-5.48536 4.414208,-6.67129 7.14375,-8.99583 -1.468197,3.03175 -3.044353,5.98582 -3.439583,9.78958 l 4.7625,0.26459 c 1.381809,-3.40625 3.674942,-5.57163 5.820833,-7.9375 -1.000931,2.69555 -2.080319,4.97441 -2.381249,8.46666 l 3.439582,0.52917 c 1.773971,-2.53992 3.031097,-5.54612 5.55625,-7.40833 -1.274861,2.64383 -2.003419,5.41761 -1.852082,7.9375 H 66.675 c 1.079901,-2.65078 3.500724,-4.58175 5.820833,-6.35 -1.200378,2.18798 -2.367232,4.25965 -2.645833,6.87916 L 73.025,114.3 c 1.009953,-2.23667 2.852272,-4.3341 4.762499,-6.35 -0.944512,2.45161 -1.971222,4.94159 -2.381249,7.14375 h 4.233333 c 0.303418,-2.54901 2.746911,-4.82483 4.7625,-6.35 -0.815184,2.17611 -1.672662,3.94051 -2.116666,6.61458 l 2.645833,0.26459 c 0.665396,-2.51576 2.580897,-3.71831 4.233333,-5.29167 -0.950356,1.81238 -1.57548,3.50639 -2.116666,5.55625 l 5.027082,0.52917 c 1.125548,-2.79788 2.279515,-4.3146 3.439583,-5.55625 -0.646043,2.05288 -1.15109,4.18684 -1.058332,6.08541 l 3.174999,0.26459 c 0.349695,-1.74118 1.372708,-3.11561 2.381251,-4.49792 -0.408629,1.56342 -0.86156,3.0752 -0.529167,4.7625 l 2.910417,0.26458 c 0.21331,-1.95074 1.11021,-2.69008 1.85208,-3.70416 -0.27783,1.28823 -0.48802,2.50912 -0.26458,3.96875 l 3.43958,0.26458 c 0.39051,-1.83168 1.19807,-2.87313 2.11667,-3.70417 -0.25753,1.26617 -0.74462,2.37178 -0.52917,3.96875 l 2.64584,0.26459 c 0.2349,-1.16543 0.91744,-1.89963 1.5875,-2.64584 -0.11861,0.95324 -0.36658,1.83458 -0.26459,2.91042 v 0.79375 H 12.7 Z"
				id="path59264"
			/><rect
				style="opacity:1;fill:#8a807c;fill-opacity:1;fill-rule:evenodd;stroke-width:3.4641;stroke-linecap:round;stroke-linejoin:round;stroke-miterlimit:3;stroke-opacity:0.498674;paint-order:stroke fill markers"
				id="rect65241"
				width="5.2916665"
				height="6.6145835"
				x="37.041668"
				y="87.3125"
			/><path
				style="opacity:1;fill:#e08c14;fill-opacity:1;fill-rule:evenodd;stroke-width:3;stroke-linecap:round;stroke-linejoin:round;stroke-miterlimit:3;stroke-opacity:0.498674;paint-order:stroke fill markers"
				d="m 23.8125,96.572915 c 1.831307,-4.720443 2.670164,-9.695155 3.96875,-14.552083 l 1.322916,6.614584 c 1.880797,2.736287 1.41202,6.764166 1.322917,10.583333 3.824368,-2.361593 6.372872,-5.774981 9.260417,-7.937499 -0.05358,7.897247 -1.81011,13.25001 -3.96875,18.52083 H 18.520833 l -3.96875,-5.29166 c 2.836534,-2.7213 4.839342,-5.694019 9.260417,-7.937505 z"
				id="path256652"
			/><path
				style="opacity:1;fill:#e0cf14;fill-opacity:1;fill-rule:evenodd;stroke-width:3;stroke-linecap:round;stroke-linejoin:round;stroke-miterlimit:3;stroke-opacity:0.498674;paint-order:stroke fill markers"
				d="m 18.520833,105.83333 9.260417,-9.260415 v 9.260415 l 7.9375,-5.29166 -1.322917,7.9375 -2.645833,3.96875 z"
				id="path256654"
			/><path
				style="opacity:1;fill:#2e2121;fill-opacity:1;fill-rule:evenodd;stroke-width:3;stroke-linecap:round;stroke-linejoin:round;stroke-miterlimit:3;stroke-opacity:0.498674;paint-order:stroke fill markers"
				d="m 11.377083,101.86458 c 7.234688,6.49513 15.728088,6.44393 24.077083,7.14375 l 25.664583,2.91042 23.283333,2.91042 29.633338,3.70416 c 5.11264,0.7219 2.98661,0.45304 5.02708,1.05834 -0.86344,0.29379 -2.08549,0.6696 -4.7625,1.05833 H 11.641667 C 7.8381627,119.33756 7.8978162,116.6606 7.1437499,114.3 v -6.08542 c 0.7127532,-2.17364 2.1827978,-4.2855 4.2333331,-6.35 z"
				id="path59262"
			/><path
				style="opacity:1;fill:#792f27;fill-opacity:1;fill-rule:evenodd;stroke-width:3;stroke-linecap:round;stroke-linejoin:round;stroke-miterlimit:3;stroke-opacity:0.498674;paint-order:stroke fill markers"
				d="m 10.31875,112.44792 5.291666,-5.55625 -2.645833,5.82083 2.116667,5.29167 z"
				id="path59214"
			/><path
				style="opacity:1;fill:#792f27;fill-opacity:1;fill-rule:evenodd;stroke-width:2.71429;stroke-linecap:round;stroke-linejoin:round;stroke-miterlimit:3;stroke-opacity:0.498674;paint-order:stroke fill markers"
				d="m 18.772818,113.50625 4.787698,-5.02708 -2.393849,5.26646 1.91508,4.7877 z"
				id="path59216"
			/><path
				style="opacity:1;fill:#792f27;fill-opacity:1;fill-rule:evenodd;stroke-width:2.71429;stroke-linecap:round;stroke-linejoin:round;stroke-miterlimit:3;stroke-opacity:0.498674;paint-order:stroke fill markers"
				d="m 26.710317,114.82917 4.7877,-5.02709 -2.39385,5.26647 1.915081,4.78771 z"
				id="path59218"
			/><path
				style="opacity:1;fill:#792f27;fill-opacity:1;fill-rule:evenodd;stroke-width:2.01361;stroke-linecap:round;stroke-linejoin:round;stroke-miterlimit:3;stroke-opacity:0.498674;paint-order:stroke fill markers"
				d="m 33.942861,114.85437 3.551778,-3.72937 -1.775889,3.90696 1.420712,3.55178 z"
				id="path59220"
			/><path
				style="opacity:1;fill:#792f27;fill-opacity:1;fill-rule:evenodd;stroke-width:2.01361;stroke-linecap:round;stroke-linejoin:round;stroke-miterlimit:3;stroke-opacity:0.498674;paint-order:stroke fill markers"
				d="m 40.557444,114.85437 3.551778,-3.72937 -1.775889,3.90696 1.420712,3.55178 z"
				id="path59222"
			/><path
				style="opacity:1;fill:#792f27;fill-opacity:1;fill-rule:evenodd;stroke-width:1.5;stroke-linecap:round;stroke-linejoin:round;stroke-miterlimit:3;stroke-opacity:0.498674;paint-order:stroke fill markers"
				d="m 47.625001,115.49063 2.645832,-2.77813 -1.322916,2.91042 1.058334,2.64584 z"
				id="path59224"
			/><path
				style="opacity:1;fill:#792f27;fill-opacity:1;fill-rule:evenodd;stroke-width:1.5;stroke-linecap:round;stroke-linejoin:round;stroke-miterlimit:3;stroke-opacity:0.498674;paint-order:stroke fill markers"
				d="m 53.181251,115.75521 2.645832,-2.77813 -1.322916,2.91042 1.058334,2.64584 z"
				id="path59226"
			/><path
				style="opacity:1;fill:#792f27;fill-opacity:1;fill-rule:evenodd;stroke-width:1.5;stroke-linecap:round;stroke-linejoin:round;stroke-miterlimit:3;stroke-opacity:0.498674;paint-order:stroke fill markers"
				d="m 58.208334,116.28438 2.645832,-2.77813 -1.322916,2.91042 1.058334,2.64584 z"
				id="path59228"
			/><path
				style="opacity:1;fill:#792f27;fill-opacity:1;fill-rule:evenodd;stroke-width:1.21429;stroke-linecap:round;stroke-linejoin:round;stroke-miterlimit:3;stroke-opacity:0.498674;paint-order:stroke fill markers"
				d="m 62.693651,116.28438 2.141864,-2.24896 -1.070932,2.35605 0.856747,2.14187 z"
				id="path59230"
			/><path
				style="opacity:1;fill:#792f27;fill-opacity:1;fill-rule:evenodd;stroke-width:1.21429;stroke-linecap:round;stroke-linejoin:round;stroke-miterlimit:3;stroke-opacity:0.498674;paint-order:stroke fill markers"
				d="m 66.926985,116.57416 2.141864,-2.24896 -1.070932,2.35605 0.856747,2.14187 z"
				id="path59232"
			/><path
				style="opacity:1;fill:#792f27;fill-opacity:1;fill-rule:evenodd;stroke-width:1.08504;stroke-linecap:round;stroke-linejoin:round;stroke-miterlimit:3;stroke-opacity:0.498674;paint-order:stroke fill markers"
				d="m 71.803475,117.10333 1.913884,-2.00958 -0.956942,2.10527 0.765555,1.91389 z"
				id="path59234"
			/><path
				style="opacity:1;fill:#792f27;fill-opacity:1;fill-rule:evenodd;stroke-width:1.08504;stroke-linecap:round;stroke-linejoin:round;stroke-miterlimit:3;stroke-opacity:0.498674;paint-order:stroke fill markers"
				d="m 75.507641,117.37931 1.913884,-2.00958 -0.956942,2.10527 0.765555,1.91389 z"
				id="path59236"
			/><path
				style="opacity:1;fill:#792f27;fill-opacity:1;fill-rule:evenodd;stroke-width:0.948334;stroke-linecap:round;stroke-linejoin:round;stroke-miterlimit:3;stroke-opacity:0.498674;paint-order:stroke fill markers"
				d="m 79.596958,117.64389 1.67275,-1.75639 -0.836375,1.84002 0.669102,1.67276 z"
				id="path59238"
			/><path
				style="opacity:1;fill:#792f27;fill-opacity:1;fill-rule:evenodd;stroke-width:0.948334;stroke-linecap:round;stroke-linejoin:round;stroke-miterlimit:3;stroke-opacity:0.498674;paint-order:stroke fill markers"
				d="m 83.036542,117.92054 1.67275,-1.75639 -0.836375,1.84002 0.669102,1.67276 z"
				id="path59240"
			/><path
				style="opacity:1;fill:#792f27;fill-opacity:1;fill-rule:evenodd;stroke-width:0.948334;stroke-linecap:round;stroke-linejoin:round;stroke-miterlimit:3;stroke-opacity:0.498674;paint-order:stroke fill markers"
				d="m 87.005292,117.92054 1.67275,-1.75639 -0.836375,1.84002 0.669102,1.67276 z"
				id="path59242"
			/><path
				style="opacity:1;fill:#792f27;fill-opacity:1;fill-rule:evenodd;stroke-width:0.811988;stroke-linecap:round;stroke-linejoin:round;stroke-miterlimit:3;stroke-opacity:0.498674;paint-order:stroke fill markers"
				d="m 91.358874,118.19714 1.432252,-1.50387 -0.716126,1.57548 0.572902,1.43226 z"
				id="path59244"
			/><path
				style="opacity:1;fill:#792f27;fill-opacity:1;fill-rule:evenodd;stroke-width:0.811988;stroke-linecap:round;stroke-linejoin:round;stroke-miterlimit:3;stroke-opacity:0.498674;paint-order:stroke fill markers"
				d="m 94.798457,118.57515 1.432252,-1.50387 -0.716126,1.57548 0.572902,1.43226 z"
				id="path59246"
			/><path
				style="opacity:1;fill:#792f27;fill-opacity:1;fill-rule:evenodd;stroke-width:0.811988;stroke-linecap:round;stroke-linejoin:round;stroke-miterlimit:3;stroke-opacity:0.498674;paint-order:stroke fill markers"
				d="m 97.973457,118.72631 1.432252,-1.50387 -0.716126,1.57548 0.572902,1.43226 z"
				id="path59248"
			/><path
				style="opacity:1;fill:#792f27;fill-opacity:1;fill-rule:evenodd;stroke-width:0.736862;stroke-linecap:round;stroke-linejoin:round;stroke-miterlimit:3;stroke-opacity:0.498674;paint-order:stroke fill markers"
				d="m 101.07083,118.83973 1.29973,-1.36473 -0.64987,1.42971 0.5199,1.29975 z"
				id="path59250"
			/><path
				style="opacity:1;fill:#792f27;fill-opacity:1;fill-rule:evenodd;stroke-width:0.599996;stroke-linecap:round;stroke-linejoin:round;stroke-miterlimit:3;stroke-opacity:0.498674;paint-order:stroke fill markers"
				d="m 103.98127,118.99752 1.05831,-1.11124 -0.52916,1.16415 0.42333,1.05833 z"
				id="path59252"
			/><path
				style="opacity:1;fill:#792f27;fill-opacity:1;fill-rule:evenodd;stroke-width:0.599996;stroke-linecap:round;stroke-linejoin:round;stroke-miterlimit:3;stroke-opacity:0.498674;paint-order:stroke fill markers"
				d="m 106.6271,119.27417 1.05831,-1.11124 -0.52916,1.16415 0.42333,1.05833 z"
				id="path59254"
			/><path
				style="opacity:1;fill:#792f27;fill-opacity:1;fill-rule:evenodd;stroke-width:0.599996;stroke-linecap:round;stroke-linejoin:round;stroke-miterlimit:3;stroke-opacity:0.498674;paint-order:stroke fill markers"
				d="m 109.00835,119.34825 1.05831,-1.11124 -0.52916,1.16415 0.42333,1.05833 z"
				id="path59256"
			/><path
				style="opacity:1;fill:#792f27;fill-opacity:1;fill-rule:evenodd;stroke-width:0.440001;stroke-linecap:round;stroke-linejoin:round;stroke-miterlimit:3;stroke-opacity:0.498674;paint-order:stroke fill markers"
				d="m 111.26612,119.34825 0.77611,-0.81492 -0.38806,0.85372 0.31045,0.77612 z"
				id="path59258"
			/><path
				style="opacity:1;fill:#792f27;fill-opacity:1;fill-rule:evenodd;stroke-width:0.297142;stroke-linecap:round;stroke-linejoin:round;stroke-miterlimit:3;stroke-opacity:0.498674;paint-order:stroke fill markers"
				d="m 113.08896,119.34825 0.52413,-0.55033 -0.26207,0.57653 0.20966,0.52413 z"
				id="path59260"
			/><path
				style="opacity:1;fill:#594c61;fill-opacity:1;fill-rule:evenodd;stroke-width:3;stroke-linecap:round;stroke-linejoin:round;stroke-miterlimit:3;stroke-opacity:0.498674;paint-order:stroke fill markers"
				d="M 20.372916,39.952083 19.84375,37.570833 21.695833,39.6875 Z"
				id="path64391"
			/><rect
				style="opacity:1;fill:#8a807c;fill-opacity:1;fill-rule:evenodd;stroke-width:3.07409;stroke-linecap:round;stroke-linejoin:round;stroke-miterlimit:3;stroke-opacity:0.498674;paint-order:stroke fill markers"
				id="rect65227"
				width="5.5562601"
				height="7.9375"
				x="112.44791"
				y="96.572914"
			/><rect
				style="opacity:1;fill:#8a807c;fill-opacity:1;fill-rule:evenodd;stroke-width:3;stroke-linecap:round;stroke-linejoin:round;stroke-miterlimit:3;stroke-opacity:0.498674;paint-order:stroke fill markers"
				id="rect65229"
				width="2.6458333"
				height="3.96875"
				x="109.80208"
				y="100.54166"
			/><rect
				style="opacity:1;fill:#8a807c;fill-opacity:1;fill-rule:evenodd;stroke-width:3;stroke-linecap:round;stroke-linejoin:round;stroke-miterlimit:3;stroke-opacity:0.498674;paint-order:stroke fill markers"
				id="rect65231"
				width="5.2916665"
				height="2.6458333"
				x="95.25"
				y="93.927086"
			/><rect
				style="opacity:1;fill:#8a807c;fill-opacity:1;fill-rule:evenodd;stroke-width:2.95683;stroke-linecap:round;stroke-linejoin:round;stroke-miterlimit:3;stroke-opacity:0.498674;paint-order:stroke fill markers"
				id="rect65233"
				width="8.9958353"
				height="3.96875"
				x="16.139582"
				y="76.729164"
			/><rect
				style="opacity:1;fill:#8a807c;fill-opacity:1;fill-rule:evenodd;stroke-width:2.93939;stroke-linecap:round;stroke-linejoin:round;stroke-miterlimit:3;stroke-opacity:0.498674;paint-order:stroke fill markers"
				id="rect65235"
				width="6.3499999"
				height="9.260417"
				x="16.139584"
				y="68.791664"
			/><rect
				style="opacity:1;fill:#8a807c;fill-opacity:1;fill-rule:evenodd;stroke-width:3.22413;stroke-linecap:round;stroke-linejoin:round;stroke-miterlimit:3;stroke-opacity:0.498674;paint-order:stroke fill markers"
				id="rect65237"
				width="5.556251"
				height="2.910418"
				x="30.427082"
				y="62.177082"
			/><path
				style="opacity:1;fill:#62271d;fill-opacity:1;fill-rule:evenodd;stroke-width:3;stroke-linecap:round;stroke-linejoin:round;stroke-miterlimit:3;stroke-opacity:0.498674;paint-order:stroke fill markers"
				d="M 47.624999,89.958332 58.208333,76.729166 47.624999,85.989582 Z"
				id="path87030"
			/><rect
				style="opacity:1;fill:#8a807c;fill-opacity:1;fill-rule:evenodd;stroke-width:3.07409;stroke-linecap:round;stroke-linejoin:round;stroke-miterlimit:3;stroke-opacity:0.498674;paint-order:stroke fill markers"
				id="rect65239"
				width="5.5562525"
				height="11.90625"
				x="42.333332"
				y="84.666664"
			/><rect
				style="opacity:1;fill:#8a807c;fill-opacity:1;fill-rule:evenodd;stroke-width:4.44972;stroke-linecap:round;stroke-linejoin:round;stroke-miterlimit:3;stroke-opacity:0.498674;paint-order:stroke fill markers"
				id="rect65243"
				width="5.8208332"
				height="5.2916617"
				x="70.908333"
				y="83.34375"
			/><rect
				style="opacity:1;fill:#8a807c;fill-opacity:1;fill-rule:evenodd;stroke-width:3;stroke-linecap:round;stroke-linejoin:round;stroke-miterlimit:3;stroke-opacity:0.498674;paint-order:stroke fill markers"
				id="rect65245"
				width="5.2916665"
				height="2.6458309"
				x="99.21875"
				y="85.989586"
			/><rect
				style="opacity:1;fill:#8a807c;fill-opacity:1;fill-rule:evenodd;stroke-width:3;stroke-linecap:round;stroke-linejoin:round;stroke-miterlimit:3;stroke-opacity:0.498674;paint-order:stroke fill markers"
				id="rect66143"
				width="8.7312498"
				height="3.96875"
				x="60.854164"
				y="97.631248"
			/><rect
				style="opacity:1;fill:#8a807c;fill-opacity:1;fill-rule:evenodd;stroke-width:3;stroke-linecap:round;stroke-linejoin:round;stroke-miterlimit:3;stroke-opacity:0.498674;paint-order:stroke fill markers"
				id="rect66145"
				width="7.9375"
				height="3.96875"
				x="66.145836"
				y="100.54166"
			/><path
				style="opacity:1;fill:#594c61;fill-opacity:1;fill-rule:evenodd;stroke-width:3;stroke-linecap:round;stroke-linejoin:round;stroke-miterlimit:3;stroke-opacity:0.498674;paint-order:stroke fill markers"
				d="M 23.547916,39.6875 H 25.4 l -1.852084,-2.38125 z"
				id="path66927"
			/><path
				style="opacity:1;fill:#594c61;fill-opacity:1;fill-rule:evenodd;stroke-width:3;stroke-linecap:round;stroke-linejoin:round;stroke-miterlimit:3;stroke-opacity:0.498674;paint-order:stroke fill markers"
				d="m 27.252083,37.30625 1.5875,2.38125 h -1.322917 z"
				id="path66983"
			/><path
				style="opacity:1;fill:#594c61;fill-opacity:1;fill-rule:evenodd;stroke-width:3;stroke-linecap:round;stroke-linejoin:round;stroke-miterlimit:3;stroke-opacity:0.498674;paint-order:stroke fill markers"
				d="m 29.897916,36.5125 1.322917,2.116666 H 30.1625 Z"
				id="path66985"
			/><path
				style="opacity:1;fill:#594c61;fill-opacity:1;fill-rule:evenodd;stroke-width:3;stroke-linecap:round;stroke-linejoin:round;stroke-miterlimit:3;stroke-opacity:0.498674;paint-order:stroke fill markers"
				d="m 34.13125,35.454166 2.910416,2.910417 H 34.13125 Z"
				id="path66987"
			/><path
				style="opacity:1;fill:#594c61;fill-opacity:1;fill-rule:evenodd;stroke-width:3;stroke-linecap:round;stroke-linejoin:round;stroke-miterlimit:3;stroke-opacity:0.498674;paint-order:stroke fill markers"
				d="m 29.633333,32.014583 2.116667,3.175 V 32.54375 Z"
				id="path66991"
			/><path
				style="opacity:1;fill:#594c61;fill-opacity:1;fill-rule:evenodd;stroke-width:3;stroke-linecap:round;stroke-linejoin:round;stroke-miterlimit:3;stroke-opacity:0.498674;paint-order:stroke fill markers"
				d="m 27.78125,32.014583 1.058333,2.645833 -2.116666,-2.645833 z"
				id="path66993"
			/><path
				style="opacity:1;fill:#594c61;fill-opacity:1;fill-rule:evenodd;stroke-width:3;stroke-linecap:round;stroke-linejoin:round;stroke-miterlimit:3;stroke-opacity:0.498674;paint-order:stroke fill markers"
				d="m 19.05,32.279166 0.529166,3.704167 0.264584,-3.96875 z"
				id="path66997"
			/><path
				style="opacity:1;fill:#594c61;fill-opacity:1;fill-rule:evenodd;stroke-width:3;stroke-linecap:round;stroke-linejoin:round;stroke-miterlimit:3;stroke-opacity:0.498674;paint-order:stroke fill markers"
				d="m 20.108333,31.75 2.645833,3.439583 -1.058333,-3.175 z"
				id="path66999"
			/><path
				style="opacity:1;fill:#594c61;fill-opacity:1;fill-rule:evenodd;stroke-width:3;stroke-linecap:round;stroke-linejoin:round;stroke-miterlimit:3;stroke-opacity:0.498674;paint-order:stroke fill markers"
				d="m 23.01875,31.75 2.645833,2.910416 -1.058333,-2.645833 z"
				id="path67001"
			/><path
				style="opacity:1;fill:#662c26;fill-opacity:1;fill-rule:evenodd;stroke-width:3;stroke-linecap:round;stroke-linejoin:round;stroke-miterlimit:3;stroke-opacity:0.498674;paint-order:stroke fill markers"
				d="M 19.05,32.279166 H 18.520833 V 30.95625 l -2.38125,-2.38125 2.38125,-2.38125 0.79375,-0.79375 0.79375,0.79375 h 9.525 l 3.666175,-2.116667 h 6.123409 l 0.79375,-0.79375 h 1.587499 V 23.8125 l 5.820833,2.38125 2.645834,1.5875 7.9375,0.264583 L 50.8,35.983333 42.597917,37.30625 37.041666,32.808333 H 31.220833 L 30.1625,32.197304 H 20.108333 Z"
				id="path71269"
			/><path
				style="opacity:1;fill:#782818;fill-opacity:1;fill-rule:evenodd;stroke-width:3;stroke-linecap:round;stroke-linejoin:round;stroke-miterlimit:3;stroke-opacity:0.498674;paint-order:stroke fill markers"
				d="m 51.858333,36.777083 3.704166,-2.38125 -1.5875,3.175 5.027084,-3.175 -1.058334,3.439583 4.233334,-3.175 -0.529167,3.175 4.233333,-2.910416 -0.264583,3.175 4.233333,-2.38125 -2.116667,2.645833 3.175,1.5875 -3.439583,-0.79375 3.439583,4.233333 -3.439583,-2.116667 3.175,4.7625 -3.704167,-1.5875 4.233334,5.027084 -3.96875,-2.116667 3.439583,5.55625 -3.96875,-1.852083 3.439583,4.7625 -2.910416,-1.5875 2.910416,5.027083 -3.175,-2.645833 0.79375,5.55625 -3.174999,-3.704167 V 39.6875 H 52.916666 Z"
				id="path90609"
			/><path
				style="opacity:1;fill:#782818;fill-opacity:1;fill-rule:evenodd;stroke-width:3;stroke-linecap:round;stroke-linejoin:round;stroke-miterlimit:3;stroke-opacity:0.498674;paint-order:stroke fill markers"
				d="m 20.372916,42.862499 c 0.868716,1.162579 1.790787,2.305137 3.439584,3.175 L 38.1,43.65625 h 15.874999 l 1.488792,-6.614584 z"
				id="path69618"
			/><path
				style="opacity:1;fill:#121623;fill-opacity:1;fill-rule:evenodd;stroke-width:3;stroke-linecap:round;stroke-linejoin:round;stroke-miterlimit:3;stroke-opacity:0.498674;paint-order:stroke fill markers"
				d="m 29.897916,28.310416 -0.79375,1.5875 1.5875,-0.79375 h 7.9375 L 41.010417,27.516667 41.275,26.9875 41.010417,26.458333 H 36.777083 L 33.3375,27.78125 Z"
				id="path72062"
			/><path
				style="opacity:1;fill:#782818;fill-opacity:1;fill-rule:evenodd;stroke-width:3;stroke-linecap:round;stroke-linejoin:round;stroke-miterlimit:3;stroke-opacity:0.498674;paint-order:stroke fill markers"
				d="M 46.037499,38.629166 50.270833,38.1 l 5.027083,-1.058334 -4.497917,-1.058333 -2.910416,1.058333 z"
				id="path249344"
			/><path
				style="opacity:1;fill:#782818;fill-opacity:1;fill-rule:evenodd;stroke-width:3;stroke-linecap:round;stroke-linejoin:round;stroke-miterlimit:3;stroke-opacity:0.498674;paint-order:stroke fill markers"
				d="M 39.952083,35.189583 42.06875,38.1 49.477083,35.71875 46.0375,39.952083 42.333333,39.158333 39.6875,35.189583 Z"
				id="path81422"
			/><path
				style="opacity:1;fill:#391d15;fill-opacity:1;fill-rule:evenodd;stroke-width:3;stroke-linecap:round;stroke-linejoin:round;stroke-miterlimit:3;stroke-opacity:0.498674;paint-order:stroke fill markers"
				d="m 53.445833,37.835417 2.910417,1.5875 H 49.741666 L 41.275,43.65625 38.1,43.656249 33.05901,40.745833 C 35.838158,40.246362 42.597917,39.6875 42.597917,39.6875 L 49.2125,37.570833 Z"
				id="path81420"
			/><path
				style="opacity:1;fill:#782818;fill-opacity:1;fill-rule:evenodd;stroke-width:3;stroke-linecap:round;stroke-linejoin:round;stroke-miterlimit:3;stroke-opacity:0.498674;paint-order:stroke fill markers"
				d="m 39.952083,35.189583 2.38125,3.96875 c 0,0 0,0 -1.81545,-0.09141 -0.09835,-0.005 -2.1533,-2.819006 -2.1533,-2.819006 z"
				id="path79141"
			/><path
				style="opacity:1;fill:#594c61;fill-opacity:1;fill-rule:evenodd;stroke-width:3;stroke-linecap:round;stroke-linejoin:round;stroke-miterlimit:3;stroke-opacity:0.498674;paint-order:stroke fill markers"
				d="m 39.952083,35.189583 -1.5875,1.058333 -2.116667,-4.7625 z"
				id="path66989"
			/><path
				style="opacity:1;fill:#62271d;fill-opacity:1;fill-rule:evenodd;stroke-width:3;stroke-linecap:round;stroke-linejoin:round;stroke-miterlimit:3;stroke-opacity:0.498674;paint-order:stroke fill markers"
				d="m 48.418749,43.656249 3.704167,-3.704166 -1.852083,3.704166 z"
				id="path86378"
			/><path
				style="opacity:1;fill:#62271d;fill-opacity:1;fill-rule:evenodd;stroke-width:3;stroke-linecap:round;stroke-linejoin:round;stroke-miterlimit:3;stroke-opacity:0.498674;paint-order:stroke fill markers"
				d="m 52.387499,43.656249 2.645834,-3.439583 -1.5875,3.439583 z"
				id="path86994"
			/><path
				style="opacity:1;fill:#62271d;fill-opacity:1;fill-rule:evenodd;stroke-width:3;stroke-linecap:round;stroke-linejoin:round;stroke-miterlimit:3;stroke-opacity:0.498674;paint-order:stroke fill markers"
				d="m 62.970833,37.835416 2.38125,1.322917 -2.38125,1.322916 1.058333,-1.322916 z"
				id="path86998"
			/><path
				style="opacity:1;fill:#62271d;fill-opacity:1;fill-rule:evenodd;stroke-width:3;stroke-linecap:round;stroke-linejoin:round;stroke-miterlimit:3;stroke-opacity:0.498674;paint-order:stroke fill markers"
				d="m 59.266667,37.835416 2.38125,1.322917 -2.38125,1.322916 1.058333,-1.322916 z"
				id="path87000"
			/><path
				style="opacity:1;fill:#62271d;fill-opacity:1;fill-rule:evenodd;stroke-width:3;stroke-linecap:round;stroke-linejoin:round;stroke-miterlimit:3;stroke-opacity:0.498674;paint-order:stroke fill markers"
				d="m 64.029166,42.333333 2.645833,-1.5875 -2.645833,3.175 z"
				id="path87002"
			/><path
				style="opacity:1;fill:#62271d;fill-opacity:1;fill-rule:evenodd;stroke-width:3;stroke-linecap:round;stroke-linejoin:round;stroke-miterlimit:3;stroke-opacity:0.498674;paint-order:stroke fill markers"
				d="M 64.029166,46.0375 66.674999,44.45 64.029166,47.625 Z"
				id="path87006"
			/><path
				style="opacity:1;fill:#62271d;fill-opacity:1;fill-rule:evenodd;stroke-width:3;stroke-linecap:round;stroke-linejoin:round;stroke-miterlimit:3;stroke-opacity:0.498674;paint-order:stroke fill markers"
				d="m 64.029166,48.683333 2.645833,-1.5875 -2.645833,3.175 z"
				id="path87008"
			/><path
				style="opacity:1;fill:#62271d;fill-opacity:1;fill-rule:evenodd;stroke-width:3;stroke-linecap:round;stroke-linejoin:round;stroke-miterlimit:3;stroke-opacity:0.498674;paint-order:stroke fill markers"
				d="m 64.029166,51.858333 2.645833,-1.5875 -2.645833,3.175 z"
				id="path87010"
			/><path
				style="opacity:1;fill:#62271d;fill-opacity:1;fill-rule:evenodd;stroke-width:3;stroke-linecap:round;stroke-linejoin:round;stroke-miterlimit:3;stroke-opacity:0.498674;paint-order:stroke fill markers"
				d="m 61.647916,56.356249 1.058333,2.645834 -2.910416,-1.5875 z"
				id="path87012"
			/><path
				style="opacity:1;fill:#62271d;fill-opacity:1;fill-rule:evenodd;stroke-width:3;stroke-linecap:round;stroke-linejoin:round;stroke-miterlimit:3;stroke-opacity:0.498674;paint-order:stroke fill markers"
				d="m 59.531249,60.589583 -1.5875,-2.116667 -1.322916,0.79375 z"
				id="path87016"
			/><path
				style="opacity:1;fill:#62271d;fill-opacity:1;fill-rule:evenodd;stroke-width:3;stroke-linecap:round;stroke-linejoin:round;stroke-miterlimit:3;stroke-opacity:0.498674;paint-order:stroke fill markers"
				d="m 52.652083,61.912499 3.175,0.264584 -3.96875,1.5875 z"
				id="path87018"
			/><path
				style="opacity:1;fill:#62271d;fill-opacity:1;fill-rule:evenodd;stroke-width:3;stroke-linecap:round;stroke-linejoin:round;stroke-miterlimit:3;stroke-opacity:0.498674;paint-order:stroke fill markers"
				d="m 50.799999,66.145832 2.645834,-0.793749 -3.439584,2.381249 z"
				id="path87020"
			/><path
				style="opacity:1;fill:#782818;fill-opacity:1;fill-rule:evenodd;stroke-width:3;stroke-linecap:round;stroke-linejoin:round;stroke-miterlimit:3;stroke-opacity:0.498674;paint-order:stroke fill markers"
				d="m 57.679166,29.36875 3.439583,2.116666 -4.233333,1.322917 1.852083,-1.5875 z"
				id="path88928"
			/><path
				style="opacity:1;fill:#782818;fill-opacity:1;fill-rule:evenodd;stroke-width:3;stroke-linecap:round;stroke-linejoin:round;stroke-miterlimit:3;stroke-opacity:0.498674;paint-order:stroke fill markers"
				d="m 65.352083,29.897916 2.381249,2.116667 -3.174999,0.79375 L 66.145832,31.75 Z"
				id="path90579"
			/><path
				style="opacity:1;fill:#782818;fill-opacity:1;fill-rule:evenodd;stroke-width:3.4;stroke-linecap:round;stroke-linejoin:round;stroke-miterlimit:3;stroke-opacity:0.498674;paint-order:stroke fill markers"
				d="m 72.337082,31.167917 0.599723,4.497916 -2.998611,-2.69875 2.099027,0.899584 z"
				id="path90581"
			/><path
				style="opacity:1;fill:#782818;fill-opacity:1;fill-rule:evenodd;stroke-width:3;stroke-linecap:round;stroke-linejoin:round;stroke-miterlimit:3;stroke-opacity:0.498674;paint-order:stroke fill markers"
				d="m 74.877082,37.835416 -0.529166,3.175 -2.645834,-3.175 2.116667,1.058334 z"
				id="path90583"
			/><path
				style="opacity:1;fill:#782818;fill-opacity:1;fill-rule:evenodd;stroke-width:3;stroke-linecap:round;stroke-linejoin:round;stroke-miterlimit:3;stroke-opacity:0.498674;paint-order:stroke fill markers"
				d="m 75.670832,43.920833 -1.5875,2.910416 -1.5875,-3.175 1.5875,1.5875 z"
				id="path90587"
			/><path
				style="opacity:1;fill:#782818;fill-opacity:1;fill-rule:evenodd;stroke-width:3;stroke-linecap:round;stroke-linejoin:round;stroke-miterlimit:3;stroke-opacity:0.498674;paint-order:stroke fill markers"
				d="m 75.670832,48.683334 -1.5875,2.910416 -1.5875,-3.175 1.5875,1.5875 z"
				id="path90591"
			/><path
				style="opacity:1;fill:#782818;fill-opacity:1;fill-rule:evenodd;stroke-width:3;stroke-linecap:round;stroke-linejoin:round;stroke-miterlimit:3;stroke-opacity:0.498674;paint-order:stroke fill markers"
				d="m 71.966666,53.445833 1.5875,3.439583 2.116666,-3.175 -2.116666,1.322917 z"
				id="path90595"
			/><path
				style="opacity:1;fill:#782818;fill-opacity:1;fill-rule:evenodd;stroke-width:3;stroke-linecap:round;stroke-linejoin:round;stroke-miterlimit:3;stroke-opacity:0.498674;paint-order:stroke fill markers"
				d="m 71.437499,58.208333 v 4.497916 l 3.175,-3.96875 -2.116667,1.322917 z"
				id="path90601"
			/><path
				style="opacity:1;fill:#782818;fill-opacity:1;fill-rule:evenodd;stroke-width:3;stroke-linecap:round;stroke-linejoin:round;stroke-miterlimit:3;stroke-opacity:0.498674;paint-order:stroke fill markers"
				d="m 72.760416,64.029166 -3.175,3.439583 v -4.497916 l 0.79375,2.116666 z"
				id="path90603"
			/><path
				style="opacity:1;fill:#782818;fill-opacity:1;fill-rule:evenodd;stroke-width:3;stroke-linecap:round;stroke-linejoin:round;stroke-miterlimit:3;stroke-opacity:0.498674;paint-order:stroke fill markers"
				d="m 81.756249,76.464582 c 0.403725,-2.057974 2.903178,-3.447431 5.55625,-4.7625 l -2.910417,5.291667 z"
				id="path106216"
			/><path
				style="opacity:1;fill:#2e2121;fill-opacity:1;fill-rule:evenodd;stroke-width:3;stroke-linecap:round;stroke-linejoin:round;stroke-miterlimit:3;stroke-opacity:0.498674;paint-order:stroke fill markers"
				d="m 87.312499,71.702082 1.5875,3.704167 -3.439583,4.233333 -1.058334,-2.645833 z"
				id="path106224"
			/><path
				style="opacity:1;fill:#8d6158;fill-opacity:1;fill-rule:evenodd;stroke-width:3;stroke-linecap:round;stroke-linejoin:round;stroke-miterlimit:3;stroke-opacity:0.498674;paint-order:stroke fill markers"
				d="m 81.756249,76.464582 -0.79375,1.5875 2.38125,0.264584 2.116667,1.322916 -1.058334,-2.645833 z"
				id="path106286"
			/><path
				style="opacity:1;fill:#745047;fill-opacity:1;fill-rule:evenodd;stroke-width:3;stroke-linecap:round;stroke-linejoin:round;stroke-miterlimit:3;stroke-opacity:0.498674;paint-order:stroke fill markers"
				d="m 80.962499,78.052082 -1.852083,8.995834 6.35,-7.408334 -2.116667,-1.322916 z"
				id="path106346"
			/><path
				style="opacity:1;fill:#745047;fill-opacity:1;fill-rule:evenodd;stroke-width:3;stroke-linecap:round;stroke-linejoin:round;stroke-miterlimit:3;stroke-opacity:0.498674;paint-order:stroke fill markers"
				d="m 85.460417,79.639583 2.381249,4.233333 -6.35,6.085416 z"
				id="path106402"
			/><path
				style="opacity:1;fill:#8d6158;fill-opacity:1;fill-rule:evenodd;stroke-width:3;stroke-linecap:round;stroke-linejoin:round;stroke-miterlimit:3;stroke-opacity:0.498674;paint-order:stroke fill markers"
				d="m 85.460416,79.639582 0.529167,2.381251 1.852083,1.852083 v -2.645834 z"
				id="path106342"
			/><path
				style="opacity:1;fill:#782818;fill-opacity:1;fill-rule:evenodd;stroke-width:3;stroke-linecap:round;stroke-linejoin:round;stroke-miterlimit:3;stroke-opacity:0.498674;paint-order:stroke fill markers"
				d="m 82.020832,64.558333 2.645834,0.264583 -1.058334,-1.852083 z"
				id="path109316"
			/><path
				style="opacity:1;fill:#782818;fill-opacity:1;fill-rule:evenodd;stroke-width:3;stroke-linecap:round;stroke-linejoin:round;stroke-miterlimit:3;stroke-opacity:0.498674;paint-order:stroke fill markers"
				d="m 85.460416,61.118749 3.439583,-0.264583 -1.852083,-1.322917 z"
				id="path109533"
			/><path
				style="opacity:1;fill:#782818;fill-opacity:1;fill-rule:evenodd;stroke-width:3;stroke-linecap:round;stroke-linejoin:round;stroke-miterlimit:3;stroke-opacity:0.498674;paint-order:stroke fill markers"
				d="m 88.899999,57.679166 h 3.439583 l -1.5875,-1.852083 z"
				id="path109535"
			/><path
				style="opacity:1;fill:#782818;fill-opacity:1;fill-rule:evenodd;stroke-width:3;stroke-linecap:round;stroke-linejoin:round;stroke-miterlimit:3;stroke-opacity:0.498674;paint-order:stroke fill markers"
				d="m 94.191665,52.387499 1.058334,1.058334 -2.645833,0.529166 z"
				id="path109537"
			/><path
				style="opacity:1;fill:#782818;fill-opacity:1;fill-rule:evenodd;stroke-width:3;stroke-linecap:round;stroke-linejoin:round;stroke-miterlimit:3;stroke-opacity:0.498674;paint-order:stroke fill markers"
				d="m 94.985415,49.477083 1.852084,-3.439584 -2.38125,1.322917 0.264583,0.529167 z"
				id="path109539"
			/><path
				style="opacity:1;fill:#782818;fill-opacity:1;fill-rule:evenodd;stroke-width:3;stroke-linecap:round;stroke-linejoin:round;stroke-miterlimit:3;stroke-opacity:0.498674;paint-order:stroke fill markers"
				d="m 94.720832,41.804166 -1.322917,3.96875 -1.322916,-2.38125 z"
				id="path109541"
			/><path
				style="opacity:1;fill:#782818;fill-opacity:1;fill-rule:evenodd;stroke-width:3;stroke-linecap:round;stroke-linejoin:round;stroke-miterlimit:3;stroke-opacity:0.498674;paint-order:stroke fill markers"
				d="m 91.281249,37.30625 -0.79375,3.439583 -1.322917,-1.852083 z"
				id="path109543"
			/><path
				style="opacity:1;fill:#782818;fill-opacity:1;fill-rule:evenodd;stroke-width:3;stroke-linecap:round;stroke-linejoin:round;stroke-miterlimit:3;stroke-opacity:0.498674;paint-order:stroke fill markers"
				d="m 87.577082,36.5125 1.058334,-3.175 -2.38125,1.058333 z"
				id="path109545"
			/><path
				style="opacity:1;fill:#782818;fill-opacity:1;fill-rule:evenodd;stroke-width:3;stroke-linecap:round;stroke-linejoin:round;stroke-miterlimit:3;stroke-opacity:0.498674;paint-order:stroke fill markers"
				d="M 85.195832,29.104166 84.402082,31.75 83.343749,30.427083 Z"
				id="path109547"
			/><path
				style="opacity:1;fill:#782818;fill-opacity:1;fill-rule:evenodd;stroke-width:3;stroke-linecap:round;stroke-linejoin:round;stroke-miterlimit:3;stroke-opacity:0.498674;paint-order:stroke fill markers"
				d="m 82.020832,25.4 -0.264583,2.910416 -1.322917,-1.5875 z"
				id="path109549"
			/><path
				style="opacity:1;fill:#782818;fill-opacity:1;fill-rule:evenodd;stroke-width:3;stroke-linecap:round;stroke-linejoin:round;stroke-miterlimit:3;stroke-opacity:0.498674;paint-order:stroke fill markers"
				d="m 79.374999,21.43125 -0.529167,3.175 -1.322916,-1.852084 z"
				id="path109551"
			/><path
				style="opacity:1;fill:#782818;fill-opacity:1;fill-rule:evenodd;stroke-width:3;stroke-linecap:round;stroke-linejoin:round;stroke-miterlimit:3;stroke-opacity:0.498674;paint-order:stroke fill markers"
				d="m 75.935416,17.4625 -0.529167,2.910416 -1.322917,-1.5875 z"
				id="path109553"
			/><path
				style="opacity:1;fill:#782818;fill-opacity:1;fill-rule:evenodd;stroke-width:3;stroke-linecap:round;stroke-linejoin:round;stroke-miterlimit:3;stroke-opacity:0.498674;paint-order:stroke fill markers"
				d="m 73.024999,14.2875 -0.264583,2.910416 -1.587499,-1.852083 z"
				id="path109555"
			/><circle
				style="opacity:1;fill:#311916;fill-opacity:1;fill-rule:evenodd;stroke-width:3;stroke-linecap:round;stroke-linejoin:round;stroke-miterlimit:3;stroke-opacity:0.498674;paint-order:stroke fill markers"
				id="path119497"
				cx="96.308334"
				cy="27.516666"
				r="1.0583333"
			/><circle
				style="opacity:1;fill:#311916;fill-opacity:1;fill-rule:evenodd;stroke-width:3;stroke-linecap:round;stroke-linejoin:round;stroke-miterlimit:3;stroke-opacity:0.498674;paint-order:stroke fill markers"
				id="path119537"
				cx="92.074997"
				cy="24.077084"
				r="0.79374999"
			/><circle
				style="opacity:1;fill:#311916;fill-opacity:1;fill-rule:evenodd;stroke-width:3;stroke-linecap:round;stroke-linejoin:round;stroke-miterlimit:3;stroke-opacity:0.498674;paint-order:stroke fill markers"
				id="path119527"
				cx="99.747917"
				cy="33.602081"
				r="1.0583333"
			/><circle
				style="opacity:1;fill:#311916;fill-opacity:1;fill-rule:evenodd;stroke-width:3;stroke-linecap:round;stroke-linejoin:round;stroke-miterlimit:3;stroke-opacity:0.498674;paint-order:stroke fill markers"
				id="path119521"
				cx="102.12917"
				cy="38.893749"
				r="0.79374999"
			/><path
				style="opacity:1;fill:#2f2222;fill-opacity:1;fill-rule:evenodd;stroke-width:3;stroke-linecap:round;stroke-linejoin:round;stroke-miterlimit:3;stroke-opacity:0.498674;paint-order:stroke fill markers"
				d="m 76.2,11.641667 c 7.312907,2.801912 15.034777,5.592285 20.372915,12.170833 5.238615,5.065848 8.875055,11.613168 9.260415,21.166666 l -2.11666,33.602083 h -2.64584 l 2.91042,-33.602083 C 102.87608,28.258922 86.981663,17.156608 76.2,15.875 Z"
				id="path117847"
			/><path
				style="opacity:1;fill:#682c26;fill-opacity:1;fill-rule:evenodd;stroke-width:3;stroke-linecap:round;stroke-linejoin:round;stroke-miterlimit:3;stroke-opacity:0.498674;paint-order:stroke fill markers"
				d="M 70.114582,11.90625 H 80.697916 V 6.614583 h -10.31875 l -0.79375,0.7937505 0.264583,4.4979165 z"
				id="path113787"
			/><path
				style="opacity:1;fill:#4d4d4b;fill-opacity:1;fill-rule:evenodd;stroke-width:3;stroke-linecap:round;stroke-linejoin:round;stroke-miterlimit:3;stroke-opacity:0.498674;paint-order:stroke fill markers"
				d="m 69.585416,7.4083332 1.852083,1.5875 -2.116666,4.2333338 -0.79375,-0.264584 1.5875,-3.7041663 -1.322917,-1.8520835 z"
				id="path109557"
			/><path
				style="opacity:1;fill:#705d52;fill-opacity:1;fill-rule:evenodd;stroke-width:3;stroke-linecap:round;stroke-linejoin:round;stroke-miterlimit:3;stroke-opacity:0.498674;paint-order:stroke fill markers"
				d="m 60.060417,13.758333 -3.439584,0.264583 c -2.417194,-0.0611 -4.828923,-0.16654 -7.14375,-1.058333 -1.719647,-1.058051 -2.506168,-2.365388 -3.175,-3.7041664 3.071967,-4.0464338 6.816731,-3.7540304 10.31875,-5.0270833 -1.994847,1.2943964 -4.096093,2.3612239 -5.820834,4.2333333 0.25886,0.6517784 0.541751,1.2990152 1.322917,1.8520834 2.740769,0.105972 5.508638,0.117996 8.466667,-0.5291667 z"
				id="path109667"
			/><path
				style="opacity:1;fill:#705d52;fill-opacity:1;fill-rule:evenodd;stroke-width:2.59808;stroke-linecap:round;stroke-linejoin:round;stroke-miterlimit:3;stroke-opacity:0.498674;paint-order:stroke fill markers"
				d="m 60.457291,9.7895832 1.190626,-0.2645833 c 0,0 -0.396876,4.2333331 -0.396876,4.2333331 h -1.190625 z"
				id="path111760"
			/><path
				style="opacity:1;fill:#705d52;fill-opacity:1;fill-rule:evenodd;stroke-width:3;stroke-linecap:round;stroke-linejoin:round;stroke-miterlimit:3;stroke-opacity:0.498674;paint-order:stroke fill markers"
				d="M 68.527082,12.964583 C 68.113217,11.489962 67.607853,10.004242 66.674999,8.4666666 l -0.79375,0.5291666 c 0.280804,1.6810188 0.964106,2.7816958 1.5875,3.9687498 z"
				id="path111816"
			/><path
				style="opacity:1;fill:#705d52;fill-opacity:1;fill-rule:evenodd;stroke-width:3;stroke-linecap:round;stroke-linejoin:round;stroke-miterlimit:3;stroke-opacity:0.498674;paint-order:stroke fill markers"
				d="m 61.11875,13.758333 c 2.033454,-0.09054 4.137343,-0.328402 6.349999,-0.79375 L 65.881249,8.9958332 61.647917,9.525 Z"
				id="path111820"
			/><path
				style="opacity:1;fill:#705d52;fill-opacity:1;fill-rule:evenodd;stroke-width:3;stroke-linecap:round;stroke-linejoin:round;stroke-miterlimit:3;stroke-opacity:0.498674;paint-order:stroke fill markers"
				d="m 68.527082,12.964583 1.852084,-3.7041664 -1.5875,-1.8520834 -2.116667,1.0583334 z"
				id="path111876"
			/><rect
				style="opacity:1;fill:#705d52;fill-opacity:1;fill-rule:evenodd;stroke-width:3.31902;stroke-linecap:round;stroke-linejoin:round;stroke-miterlimit:3;stroke-opacity:0.498674;paint-order:stroke fill markers"
				id="rect111986"
				width="1.7563124"
				height="1.7563124"
				x="59.692299"
				y="-24.614082"
				transform="rotate(31.367005)"
			/><circle
				style="opacity:1;fill:#311916;fill-opacity:1;fill-rule:evenodd;stroke-width:3;stroke-linecap:round;stroke-linejoin:round;stroke-miterlimit:3;stroke-opacity:0.498674;paint-order:stroke fill markers"
				id="path119505"
				cx="111.65417"
				cy="32.808334"
				r="1.0583333"
			/><path
				style="opacity:1;fill:#682c26;fill-opacity:1;fill-rule:evenodd;stroke-width:3;stroke-linecap:round;stroke-linejoin:round;stroke-miterlimit:3;stroke-opacity:0.498674;paint-order:stroke fill markers"
				d="M 80.433333,6.6145833 V 11.90625 h 25.399997 c 2.60847,1.021325 5.23947,2.017108 6.61459,6.614583 v 64.822916 h 5.29166 V 21.166666 C 116.58613,13.966778 114.91626,7.0950246 103.1875,6.6145832 Z"
				id="path113785"
			/><path
				style="opacity:1;fill:#1a2021;fill-opacity:1;fill-rule:evenodd;stroke-width:3;stroke-linecap:round;stroke-linejoin:round;stroke-miterlimit:3;stroke-opacity:0.498674;paint-order:stroke fill markers"
				d="M 74.347916,6.6145832 V 9.5249999 L 77.787499,6.6145832 Z"
				id="path115162"
			/><path
				style="opacity:1;fill:#1a2021;fill-opacity:1;fill-rule:evenodd;stroke-width:3;stroke-linecap:round;stroke-linejoin:round;stroke-miterlimit:3;stroke-opacity:0.498674;paint-order:stroke fill markers"
				d="M 80.301042,6.6145832 V 9.5249999 L 83.740625,6.6145832 Z"
				id="path115164"
			/><path
				style="opacity:1;fill:#1a2021;fill-opacity:1;fill-rule:evenodd;stroke-width:3;stroke-linecap:round;stroke-linejoin:round;stroke-miterlimit:3;stroke-opacity:0.498674;paint-order:stroke fill markers"
				d="M 87.709375,6.6145832 V 9.5249999 L 91.148958,6.6145832 Z"
				id="path115166"
			/><path
				style="opacity:1;fill:#1a2021;fill-opacity:1;fill-rule:evenodd;stroke-width:3;stroke-linecap:round;stroke-linejoin:round;stroke-miterlimit:3;stroke-opacity:0.498674;paint-order:stroke fill markers"
				d="M 94.853125,6.6145832 V 9.5249999 L 98.292708,6.6145832 Z"
				id="path115168"
			/><path
				style="opacity:1;fill:#1a2021;fill-opacity:1;fill-rule:evenodd;stroke-width:2.69615;stroke-linecap:round;stroke-linejoin:round;stroke-miterlimit:3;stroke-opacity:0.498674;paint-order:stroke fill markers"
				d="m 101.20313,6.6145832 v 2.9104167 l 2.51354,-2.9104166 z"
				id="path115170"
			/><path
				style="opacity:1;fill:#1a2021;fill-opacity:1;fill-rule:evenodd;stroke-width:3;stroke-linecap:round;stroke-linejoin:round;stroke-miterlimit:3;stroke-opacity:0.498674;paint-order:stroke fill markers"
				d="m 108.21458,7.4083332 -1.85208,2.6458338 5.02708,-1.3229171 c -0.917,-0.506121 -1.86303,-0.9988602 -3.175,-1.3229167 z"
				id="path115172"
			/><path
				style="opacity:1;fill:#1a2021;fill-opacity:1;fill-rule:evenodd;stroke-width:3;stroke-linecap:round;stroke-linejoin:round;stroke-miterlimit:3;stroke-opacity:0.498674;paint-order:stroke fill markers"
				d="m 114.03542,10.847917 -2.38125,1.5875 4.49791,2.116666 c -0.42642,-0.955726 -1.00099,-2.227177 -2.11666,-3.704166 z"
				id="path115174"
			/><path
				style="opacity:1;fill:#1a2021;fill-opacity:1;fill-rule:evenodd;stroke-width:3;stroke-linecap:round;stroke-linejoin:round;stroke-miterlimit:3;stroke-opacity:0.498674;paint-order:stroke fill markers"
				d="M 116.94583,17.4625 H 114.3 l 3.43958,3.704167 c -0.0974,-1.113773 -0.28222,-2.290841 -0.79375,-3.704167 z"
				id="path115176"
			/><path
				style="opacity:1;fill:#1a2021;fill-opacity:1;fill-rule:evenodd;stroke-width:3;stroke-linecap:round;stroke-linejoin:round;stroke-miterlimit:3;stroke-opacity:0.498674;paint-order:stroke fill markers"
				d="m 117.73958,23.283333 h -2.64583 l 2.64583,3.439583 z"
				id="path115178"
			/><path
				style="opacity:1;fill:#1a2021;fill-opacity:1;fill-rule:evenodd;stroke-width:3;stroke-linecap:round;stroke-linejoin:round;stroke-miterlimit:3;stroke-opacity:0.498674;paint-order:stroke fill markers"
				d="m 117.73958,29.236458 h -2.64583 l 2.64583,3.439583 z"
				id="path115180"
			/><path
				style="opacity:1;fill:#1a2021;fill-opacity:1;fill-rule:evenodd;stroke-width:3;stroke-linecap:round;stroke-linejoin:round;stroke-miterlimit:3;stroke-opacity:0.498674;paint-order:stroke fill markers"
				d="m 117.73958,35.321875 h -2.64583 l 2.64583,3.439583 z"
				id="path115182"
			/><path
				style="opacity:1;fill:#1a2021;fill-opacity:1;fill-rule:evenodd;stroke-width:3;stroke-linecap:round;stroke-linejoin:round;stroke-miterlimit:3;stroke-opacity:0.498674;paint-order:stroke fill markers"
				d="m 117.73958,42.465625 h -2.64583 l 2.64583,3.439583 z"
				id="path115184"
			/><path
				style="opacity:1;fill:#1a2021;fill-opacity:1;fill-rule:evenodd;stroke-width:3;stroke-linecap:round;stroke-linejoin:round;stroke-miterlimit:3;stroke-opacity:0.498674;paint-order:stroke fill markers"
				d="m 117.73958,48.286458 h -2.64583 l 2.64583,3.439583 z"
				id="path115186"
			/><path
				style="opacity:1;fill:#1a2021;fill-opacity:1;fill-rule:evenodd;stroke-width:3;stroke-linecap:round;stroke-linejoin:round;stroke-miterlimit:3;stroke-opacity:0.498674;paint-order:stroke fill markers"
				d="m 117.73958,53.842708 h -2.64583 l 2.64583,3.439583 z"
				id="path115188"
			/><path
				style="opacity:1;fill:#1a2021;fill-opacity:1;fill-rule:evenodd;stroke-width:3;stroke-linecap:round;stroke-linejoin:round;stroke-miterlimit:3;stroke-opacity:0.498674;paint-order:stroke fill markers"
				d="m 117.73958,60.986458 h -2.64583 l 2.64583,3.439583 z"
				id="path115190"
			/><path
				style="opacity:1;fill:#1a2021;fill-opacity:1;fill-rule:evenodd;stroke-width:3;stroke-linecap:round;stroke-linejoin:round;stroke-miterlimit:3;stroke-opacity:0.498674;paint-order:stroke fill markers"
				d="m 117.73958,67.071875 h -2.64583 l 2.64583,3.439583 z"
				id="path115192"
			/><path
				style="opacity:1;fill:#1a2021;fill-opacity:1;fill-rule:evenodd;stroke-width:3;stroke-linecap:round;stroke-linejoin:round;stroke-miterlimit:3;stroke-opacity:0.498674;paint-order:stroke fill markers"
				d="m 117.73958,73.157292 h -2.64583 l 2.64583,3.439583 z"
				id="path115194"
			/><circle
				style="opacity:1;fill:#311916;fill-opacity:1;fill-rule:evenodd;stroke-width:3;stroke-linecap:round;stroke-linejoin:round;stroke-miterlimit:3;stroke-opacity:0.498674;paint-order:stroke fill markers"
				id="path119483"
				cx="96.572914"
				cy="19.314583"
				r="1.3229166"
			/><circle
				style="opacity:1;fill:#311916;fill-opacity:1;fill-rule:evenodd;stroke-width:3;stroke-linecap:round;stroke-linejoin:round;stroke-miterlimit:3;stroke-opacity:0.498674;paint-order:stroke fill markers"
				id="path119485"
				cx="108.74375"
				cy="18.520834"
				r="1.3229166"
			/><circle
				style="opacity:1;fill:#311916;fill-opacity:1;fill-rule:evenodd;stroke-width:3;stroke-linecap:round;stroke-linejoin:round;stroke-miterlimit:3;stroke-opacity:0.498674;paint-order:stroke fill markers"
				id="path119487"
				cx="109.27292"
				cy="23.018749"
				r="1.0583333"
			/><circle
				style="opacity:1;fill:#311916;fill-opacity:1;fill-rule:evenodd;stroke-width:3;stroke-linecap:round;stroke-linejoin:round;stroke-miterlimit:3;stroke-opacity:0.498674;paint-order:stroke fill markers"
				id="path119489"
				cx="104.775"
				cy="23.8125"
				r="0.79374999"
			/><circle
				style="opacity:1;fill:#311916;fill-opacity:1;fill-rule:evenodd;stroke-width:3;stroke-linecap:round;stroke-linejoin:round;stroke-miterlimit:3;stroke-opacity:0.498674;paint-order:stroke fill markers"
				id="path119491"
				cx="101.86458"
				cy="22.225"
				r="0.79374999"
			/><circle
				style="opacity:1;fill:#311916;fill-opacity:1;fill-rule:evenodd;stroke-width:3;stroke-linecap:round;stroke-linejoin:round;stroke-miterlimit:3;stroke-opacity:0.498674;paint-order:stroke fill markers"
				id="path119493"
				cx="98.424995"
				cy="23.018749"
				r="1.0583333"
			/><circle
				style="opacity:1;fill:#311916;fill-opacity:1;fill-rule:evenodd;stroke-width:3;stroke-linecap:round;stroke-linejoin:round;stroke-miterlimit:3;stroke-opacity:0.498674;paint-order:stroke fill markers"
				id="path119495"
				cx="92.604164"
				cy="28.045834"
				r="1.3229166"
			/><circle
				style="opacity:1;fill:#311916;fill-opacity:1;fill-rule:evenodd;stroke-width:3;stroke-linecap:round;stroke-linejoin:round;stroke-miterlimit:3;stroke-opacity:0.498674;paint-order:stroke fill markers"
				id="path119499"
				cx="104.51041"
				cy="29.104166"
				r="1.3229166"
			/><circle
				style="opacity:1;fill:#311916;fill-opacity:1;fill-rule:evenodd;stroke-width:3;stroke-linecap:round;stroke-linejoin:round;stroke-miterlimit:3;stroke-opacity:0.498674;paint-order:stroke fill markers"
				id="path119501"
				cx="109.5375"
				cy="27.252083"
				r="1.0583333"
			/><circle
				style="opacity:1;fill:#311916;fill-opacity:1;fill-rule:evenodd;stroke-width:3;stroke-linecap:round;stroke-linejoin:round;stroke-miterlimit:3;stroke-opacity:0.498674;paint-order:stroke fill markers"
				id="path119503"
				cx="107.68542"
				cy="32.014584"
				r="0.79374999"
			/><circle
				style="opacity:1;fill:#311916;fill-opacity:1;fill-rule:evenodd;stroke-width:3;stroke-linecap:round;stroke-linejoin:round;stroke-miterlimit:3;stroke-opacity:0.498674;paint-order:stroke fill markers"
				id="path119509"
				cx="109.00833"
				cy="38.099998"
				r="1.0583333"
			/><circle
				style="opacity:1;fill:#311916;fill-opacity:1;fill-rule:evenodd;stroke-width:3;stroke-linecap:round;stroke-linejoin:round;stroke-miterlimit:3;stroke-opacity:0.498674;paint-order:stroke fill markers"
				id="path119515"
				cx="105.30417"
				cy="35.454166"
				r="0.52916664"
			/><circle
				style="opacity:1;fill:#311916;fill-opacity:1;fill-rule:evenodd;stroke-width:3;stroke-linecap:round;stroke-linejoin:round;stroke-miterlimit:3;stroke-opacity:0.498674;paint-order:stroke fill markers"
				id="path119519"
				cx="104.51041"
				cy="32.543751"
				r="0.52916664"
			/><circle
				style="opacity:1;fill:#311916;fill-opacity:1;fill-rule:evenodd;stroke-width:3;stroke-linecap:round;stroke-linejoin:round;stroke-miterlimit:3;stroke-opacity:0.498674;paint-order:stroke fill markers"
				id="path119523"
				cx="99.48333"
				cy="40.745834"
				r="0.79374999"
			/><circle
				style="opacity:1;fill:#311916;fill-opacity:1;fill-rule:evenodd;stroke-width:3;stroke-linecap:round;stroke-linejoin:round;stroke-miterlimit:3;stroke-opacity:0.498674;paint-order:stroke fill markers"
				id="path119525"
				cx="98.954163"
				cy="37.041668"
				r="1.0583333"
			/><circle
				style="opacity:1;fill:#311916;fill-opacity:1;fill-rule:evenodd;stroke-width:3;stroke-linecap:round;stroke-linejoin:round;stroke-miterlimit:3;stroke-opacity:0.498674;paint-order:stroke fill markers"
				id="path119529"
				cx="96.043747"
				cy="31.75"
				r="1.3229166"
			/><circle
				style="opacity:1;fill:#311916;fill-opacity:1;fill-rule:evenodd;stroke-width:3;stroke-linecap:round;stroke-linejoin:round;stroke-miterlimit:3;stroke-opacity:0.498674;paint-order:stroke fill markers"
				id="path119531"
				cx="91.810417"
				cy="32.014584"
				r="0.79374999"
			/><circle
				style="opacity:1;fill:#311916;fill-opacity:1;fill-rule:evenodd;stroke-width:3;stroke-linecap:round;stroke-linejoin:round;stroke-miterlimit:3;stroke-opacity:0.498674;paint-order:stroke fill markers"
				id="path119533"
				cx="95.25"
				cy="35.983334"
				r="1.0583333"
			/><circle
				style="opacity:1;fill:#311916;fill-opacity:1;fill-rule:evenodd;stroke-width:3;stroke-linecap:round;stroke-linejoin:round;stroke-miterlimit:3;stroke-opacity:0.498674;paint-order:stroke fill markers"
				id="path119539"
				cx="88.900002"
				cy="30.1625"
				r="0.79374999"
			/><circle
				style="opacity:1;fill:#311916;fill-opacity:1;fill-rule:evenodd;stroke-width:3;stroke-linecap:round;stroke-linejoin:round;stroke-miterlimit:3;stroke-opacity:0.498674;paint-order:stroke fill markers"
				id="path119541"
				cx="101.86458"
				cy="19.049999"
				r="1.0583333"
			/><path
				style="opacity:1;fill:#391d15;fill-opacity:1;fill-rule:evenodd;stroke-width:3;stroke-linecap:round;stroke-linejoin:round;stroke-miterlimit:3;stroke-opacity:0.498674;paint-order:stroke fill markers"
				d="M 30.95625,41.010417 33.3375,44.45 29.36875,41.010417 Z"
				id="path121731"
			/><path
				style="opacity:1;fill:#391d15;fill-opacity:1;fill-rule:evenodd;stroke-width:3;stroke-linecap:round;stroke-linejoin:round;stroke-miterlimit:3;stroke-opacity:0.498674;paint-order:stroke fill markers"
				d="m 27.78125,41.539583 2.38125,3.439584 -4.233333,-3.439584 z"
				id="path121733"
			/><path
				style="opacity:1;fill:#391d15;fill-opacity:1;fill-rule:evenodd;stroke-width:3;stroke-linecap:round;stroke-linejoin:round;stroke-miterlimit:3;stroke-opacity:0.498674;paint-order:stroke fill markers"
				d="m 25.135416,42.068749 7.9375,-1.322916 -1.322916,-0.79375 -7.14375,1.5875 z"
				id="path122080"
			/><path
				style="opacity:1;fill:#e4e210;fill-opacity:1;fill-rule:evenodd;stroke-width:3;stroke-linecap:round;stroke-linejoin:round;stroke-miterlimit:3;stroke-opacity:0.498674;paint-order:stroke fill markers"
				d="m 34.925,28.575 h 2.116667 l 1.322916,-1.5875 h -2.116666 z"
				id="path128079"
			/><path
				style="opacity:1;fill:#1e2121;fill-opacity:1;fill-rule:evenodd;stroke-width:3;stroke-linecap:round;stroke-linejoin:round;stroke-miterlimit:3;stroke-opacity:0.498674;paint-order:stroke fill markers"
				d="m 16.933333,29.36875 h 1.5875 l 1.5875,-1.852084 2.38125,1.5875 -1.5875,-0.264583 -1.5875,1.5875 h -1.322917 z"
				id="path128351"
			/><path
				style="opacity:1;fill:#2e2121;fill-opacity:1;fill-rule:evenodd;stroke-width:3;stroke-linecap:round;stroke-linejoin:round;stroke-miterlimit:3;stroke-opacity:0.498674;paint-order:stroke fill markers"
				d="m 58.208333,28.045833 -18.520833,7.408334 0.933717,0.993314 3.346817,1.932286 11.594465,-3.983934 z"
				id="path248328"
			/><path
				style="opacity:1;fill:#e08b14;fill-opacity:1;fill-rule:evenodd;stroke-width:3;stroke-linecap:round;stroke-linejoin:round;stroke-miterlimit:3;stroke-opacity:0.498674;paint-order:stroke fill markers"
				d="m 33.3375,21.43125 c 1.306561,6.403728 0.685872,7.897615 0.529167,11.377083 l -2.116667,0 c 0.199564,-3.833911 0.538349,-7.877603 1.5875,-11.377083 z"
				id="path248547"
			/><path
				style="opacity:1;fill:#f4f105;fill-opacity:1;fill-rule:evenodd;stroke-width:3;stroke-linecap:round;stroke-linejoin:round;stroke-miterlimit:3;stroke-opacity:0.498674;paint-order:stroke fill markers"
				d="M 33.866666,33.866666 C 33.765202,31.894051 33.605951,29.403725 33.072917,27.516667 32.378736,28.982911 32.006864,31.284988 31.75,32.808333 Z"
				id="path248545"
			/><path
				style="opacity:1;fill:#2e2121;fill-opacity:1;fill-rule:evenodd;stroke-width:3;stroke-linecap:round;stroke-linejoin:round;stroke-miterlimit:3;stroke-opacity:0.498674;paint-order:stroke fill markers"
				d="M 55.562499,34.395833 52.652083,36.5125 50.799999,35.983333 Z"
				id="path249400"
			/><path
				style="opacity:1;fill:#182021;fill-opacity:1;fill-rule:evenodd;stroke-width:3;stroke-linecap:round;stroke-linejoin:round;stroke-miterlimit:3;stroke-opacity:0.498674;paint-order:stroke fill markers"
				d="M 51.064583,20.6375 52.3875,18.520833 53.975,19.05 55.033333,17.991667 56.620833,19.05 Z"
				id="path250287"
			/><path
				style="opacity:1;fill:#662c26;fill-opacity:1;fill-rule:evenodd;stroke-width:3;stroke-linecap:round;stroke-linejoin:round;stroke-miterlimit:3;stroke-opacity:0.498674;paint-order:stroke fill markers"
				d="m 64.029167,22.489583 c -2.502428,3.104352 -5.442431,6.199847 -12.964584,9.789583 -2.31002,0.872458 -4.975298,1.975863 -7.408334,3.96875 l -1.058333,-7.14375 10.159785,-3.215122 c 3.514381,-1.541335 7.612247,-2.748691 11.271466,-3.399461 z"
				id="path251819"
			/><path
				style="opacity:1;fill:#662c26;fill-opacity:1;fill-rule:evenodd;stroke-width:3;stroke-linecap:round;stroke-linejoin:round;stroke-miterlimit:3;stroke-opacity:0.498674;paint-order:stroke fill markers"
				d="M 47.360416,29.633333 50.799999,29.104166 48.154166,31.75 48.947916,29.897916 Z"
				id="path253168"
			/><path
				style="opacity:1;fill:#182021;fill-opacity:1;fill-rule:evenodd;stroke-width:3;stroke-linecap:round;stroke-linejoin:round;stroke-miterlimit:3;stroke-opacity:0.498674;paint-order:stroke fill markers"
				d="M 46.0375,28.045833 51.064583,28.575 48.683333,33.3375 49.2125,29.36875 Z"
				id="path253937"
			/><path
				style="opacity:1;fill:#182021;fill-opacity:1;fill-rule:evenodd;stroke-width:3;stroke-linecap:round;stroke-linejoin:round;stroke-miterlimit:3;stroke-opacity:0.498674;paint-order:stroke fill markers"
				d="m 51.064583,26.458333 3.704166,0.79375 -1.322916,3.704167 v -3.175 z"
				id="path253939"
			/><path
				style="opacity:1;fill:#182021;fill-opacity:1;fill-rule:evenodd;stroke-width:3;stroke-linecap:round;stroke-linejoin:round;stroke-miterlimit:3;stroke-opacity:0.498674;paint-order:stroke fill markers"
				d="m 51.858333,23.01875 -8.466667,8.466666 -2.38125,1.374815 v -3.756065 l 3.704167,-4.233333 z"
				id="path254929"
			/><path
				style="opacity:1;fill:#e08b14;fill-opacity:1;fill-rule:evenodd;stroke-width:3;stroke-linecap:round;stroke-linejoin:round;stroke-miterlimit:3;stroke-opacity:0.498674;paint-order:stroke fill markers"
				d="m 40.48125,35.983333 c 0.983444,0.448925 2.104931,0.232916 3.174999,0.264583 0.316841,-1.798317 0.06344,-4.093056 -1.058333,-7.14375 l -1.322917,2.38125 0.264584,-8.73125 c -1.177377,3.819484 -2.346888,7.637939 -2.910417,11.377084 0.435565,0.777049 1.040981,1.404903 1.852084,1.852083 z"
				id="path246291"
			/><path
				style="opacity:1;fill:#182021;fill-opacity:1;fill-rule:evenodd;stroke-width:3;stroke-linecap:round;stroke-linejoin:round;stroke-miterlimit:3;stroke-opacity:0.498674;paint-order:stroke fill markers"
				d="M 55.033333,25.135416 58.208333,25.4 57.15,28.839583 l -10e-7,-2.645833 z"
				id="path253941"
			/><path
				style="opacity:1;fill:#182021;fill-opacity:1;fill-rule:evenodd;stroke-width:3;stroke-linecap:round;stroke-linejoin:round;stroke-miterlimit:3;stroke-opacity:0.498674;paint-order:stroke fill markers"
				d="m 58.737499,23.8125 h 2.645834 l -1.322916,2.910417 0.264582,-2.116667 z"
				id="path253943"
			/><path
				style="opacity:1;fill:#391d15;fill-opacity:1;fill-rule:evenodd;stroke-width:3;stroke-linecap:round;stroke-linejoin:round;stroke-miterlimit:3;stroke-opacity:0.498674;paint-order:stroke fill markers"
				d="m 42.333333,39.158333 h 2.116666 l -4.233333,2.645833 -7.14375,-1.058333 z"
				id="path254020"
			/><path
				style="opacity:1;fill:#2e2121;fill-opacity:1;fill-rule:evenodd;stroke-width:3;stroke-linecap:round;stroke-linejoin:round;stroke-miterlimit:3;stroke-opacity:0.498674;paint-order:stroke fill markers"
				d="M 43.920833,38.1 H 42.06875 l -1.587501,-1.852084 3.439584,0.79375 z"
				id="path254076"
			/><path
				style="opacity:1;fill:#f4f105;fill-opacity:1;fill-rule:evenodd;stroke-width:3;stroke-linecap:round;stroke-linejoin:round;stroke-miterlimit:3;stroke-opacity:0.498674;paint-order:stroke fill markers"
				d="m 42.597917,36.247917 c 0.476125,-2.021052 0.309499,-4.21795 -0.264584,-6.085417 l -1.5875,3.96875 v -5.820834 c -0.513779,2.039355 -1.29819,4.912914 -1.322916,6.879167 0.948852,1.176391 2.116666,1.058334 3.175,1.058334 z"
				id="path246347"
			/><path
				style="opacity:1;fill:#782818;fill-opacity:1;fill-rule:evenodd;stroke-width:3;stroke-linecap:round;stroke-linejoin:round;stroke-miterlimit:3;stroke-opacity:0.498674;paint-order:stroke fill markers"
				d="m 42.068749,38.1 h 2.910417 l -0.529167,0.529166 z"
				id="path254078"
			/><path
				style="opacity:1;fill:#182021;fill-opacity:1;fill-rule:evenodd;stroke-width:3;stroke-linecap:round;stroke-linejoin:round;stroke-miterlimit:3;stroke-opacity:0.498674;paint-order:stroke fill markers"
				d="M 56.091666,19.05 57.414583,17.991667 58.737499,19.05 Z"
				id="path254806"
			/><path
				style="opacity:1;fill:#182021;fill-opacity:1;fill-rule:evenodd;stroke-width:3;stroke-linecap:round;stroke-linejoin:round;stroke-miterlimit:3;stroke-opacity:0.498674;paint-order:stroke fill markers"
				d="m 44.979166,25.135416 -2.116667,-0.79375 0.79375,2.116667 -1.5875,-0.79375 0.264584,2.38125 z"
				id="path254931"
			/><path
				style="opacity:1;fill:#e08c14;fill-opacity:1;fill-rule:evenodd;stroke-width:3;stroke-linecap:round;stroke-linejoin:round;stroke-miterlimit:3;stroke-opacity:0.498674;paint-order:stroke fill markers"
				d="m 66.145832,124.35417 c -3.871042,-1.39844 -5.19076,-3.77329 -5.291666,-6.61459 1.283907,-3.56 3.131127,-6.83056 6.614583,-9.26041 3.911233,-5.55908 5.05665,-11.448634 6.614584,-17.19792 l 1.322916,15.875 2.645833,-3.96875 c -0.417842,3.45623 -0.04121,6.97865 1.322917,10.58333 4.557388,-5.02595 8.503305,-10.56424 10.583334,-14.55208 10e-7,3.93476 0,7.0437 -10e-7,9.26042 3.741338,11.85098 -0.677369,12.12484 -2.645833,15.875 l -3.174999,0.52916 -8.731251,-4.49791 z"
				id="path256994"
			/><path
				style="opacity:1;fill:#e0cf14;fill-opacity:1;fill-rule:evenodd;stroke-width:3;stroke-linecap:round;stroke-linejoin:round;stroke-miterlimit:3;stroke-opacity:0.498674;paint-order:stroke fill markers"
				d="m 77.258332,121.97292 c 2.75378,2.68652 4.863207,2.97257 6.879167,2.91041 l 3.175001,-15.08125 -9.260418,9.26042 c -2.618289,-2.18523 -3.836639,-7.29277 -5.291666,-11.90625 -2.749842,4.21735 -5.799946,7.87932 -7.9375,13.22917 -0.600458,4.58321 2.441952,4.93274 6.614583,3.96875 2.669406,-0.81094 5.194391,-1.61847 5.820833,-2.38125 z"
				id="path258591"
			/><path
				style="opacity:1;fill:#e0cf14;fill-opacity:1;fill-rule:evenodd;stroke-width:3;stroke-linecap:round;stroke-linejoin:round;stroke-miterlimit:3;stroke-opacity:0.498674;paint-order:stroke fill markers"
				d="m 84.137499,124.88333 c 4.036403,-2.72556 6.003557,-5.98186 5.820833,-9.78958 l -5.291666,2.64583 z"
				id="path258593"
			/><path
				style="opacity:1;fill:#e0cf14;fill-opacity:1;fill-rule:evenodd;stroke-width:3;stroke-linecap:round;stroke-linejoin:round;stroke-miterlimit:3;stroke-opacity:0.498674;paint-order:stroke fill markers"
				d="m 74.083332,117.73958 2.645834,-5.29166 1.322916,7.9375 h -5.291666 z"
				id="path258595"
			/><path
				style="opacity:1;fill:#e08c14;fill-opacity:1;fill-rule:evenodd;stroke-width:3;stroke-linecap:round;stroke-linejoin:round;stroke-miterlimit:3;stroke-opacity:0.498674;paint-order:stroke fill markers"
				d="m 118.00417,104.51042 c 0.93378,-3.92281 1.63593,-6.519646 1.05833,-10.583338 -2.32267,-7.585138 -1.11038,-13.693152 0,-19.84375 l 3.96875,-13.229166 c -1.46959,1.370983 -2.05652,2.88612 -5.29167,3.96875 0.96356,-3.404637 1.82631,-5.327292 2.64584,-6.614583 -2.14906,-2.690483 -1.22662,-4.507716 -1.32292,-6.614584 v -6.614583 c -1.62187,2.803223 -3.33538,5.249204 -3.96875,11.90625 -1.66722,3.358325 -4.12652,5.666972 -6.61458,7.9375 -0.34408,-2.002234 -0.3614,-4.196892 0,-6.614583 -0.80021,-2.167066 -1.06246,-4.390731 -1.32292,-6.614584 l 1.32292,-5.291666 c -4.03561,3.195858 -4.03068,9.752979 -7.9375,14.552083 -1.59194,2.697808 -4.57147,4.149071 -7.408337,7.672917 -1.732326,3.383629 -3.559181,6.67242 -5.820834,9.524999 l 27.781251,26.458338 z"
				id="path258597"
			/><path
				style="opacity:1;fill:#e0cf14;fill-opacity:1;fill-rule:evenodd;stroke-width:3;stroke-linecap:round;stroke-linejoin:round;stroke-miterlimit:3;stroke-opacity:0.498674;paint-order:stroke fill markers"
				d="m 115.09375,83.343749 -2.64583,3.96875 c -2.14163,-4.801371 -1.2316,-9.691248 -1.32292,-14.552083 -2.48468,3.025107 -4.94339,6.096855 -6.61458,10.583333 -3.27172,-5.884208 -3.15271,-11.553362 -2.64584,-17.197917 -6.200414,4.023887 -8.808578,9.751777 -10.583331,15.875 v 19.843748 h 9.260421 v 6.61459 h 7.9375 v -3.96875 h 6.61458 c 4.52495,-4.42887 2.3846,-12.726878 0,-21.166671 z"
				id="path1256"
			/><path
				style="opacity:1;fill:#745047;fill-opacity:1;fill-rule:evenodd;stroke-width:3;stroke-linecap:round;stroke-linejoin:round;stroke-miterlimit:3;stroke-opacity:0.498674;paint-order:stroke fill markers"
				d="m 87.841667,83.872917 1.322915,1.852082 2.381251,0.529168 -6.879167,5.556249 z"
				id="path106404"
			/><path
				style="opacity:1;fill:#782818;fill-opacity:1;fill-rule:evenodd;stroke-width:3;stroke-linecap:round;stroke-linejoin:round;stroke-miterlimit:3;stroke-opacity:0.498674;paint-order:stroke fill markers"
				d="m 88.899999,75.406249 2.645833,0.79375 -3.704165,5.027084 -2.381251,-1.587501 z"
				id="path106218"
			/><path
				style="opacity:1;fill:#2e2121;fill-opacity:1;fill-rule:evenodd;stroke-width:3;stroke-linecap:round;stroke-linejoin:round;stroke-miterlimit:3;stroke-opacity:0.498674;paint-order:stroke fill markers"
				d="m 87.841666,81.227082 v 2.645834 l 4.233333,-3.439584 -0.529167,-4.233333 z"
				id="path106282"
			/><path
				style="opacity:1;fill:#782818;fill-opacity:1;fill-rule:evenodd;stroke-width:3;stroke-linecap:round;stroke-linejoin:round;stroke-miterlimit:3;stroke-opacity:0.498674;paint-order:stroke fill markers"
				d="m 92.074999,80.433332 2.116666,1.058334 -3.704166,3.439583 -2.645832,-1.058332 z"
				id="path106222"
			/><path
				style="opacity:1;fill:#2e2121;fill-opacity:1;fill-rule:evenodd;stroke-width:3;stroke-linecap:round;stroke-linejoin:round;stroke-miterlimit:3;stroke-opacity:0.498674;paint-order:stroke fill markers"
				d="m 94.191665,81.491666 0.264584,1.322916 -2.910416,3.439585 -1.058334,-1.322918 z"
				id="path106284"
			/><path
				style="opacity:1;fill:#8d6158;fill-opacity:1;fill-rule:evenodd;stroke-width:3;stroke-linecap:round;stroke-linejoin:round;stroke-miterlimit:3;stroke-opacity:0.498674;paint-order:stroke fill markers"
				d="m 90.487499,84.931249 1.058334,1.322918 v 0 H 88.9 l -1.058333,-2.38125 -10e-7,-10e-7 z"
				id="path106344"
			/><path
				style="opacity:1;fill:#a99b95;fill-opacity:1;fill-rule:evenodd;stroke-width:3;stroke-linecap:round;stroke-linejoin:round;stroke-miterlimit:3;stroke-opacity:0.498674;paint-order:stroke fill markers"
				d="m 91.281249,88.370832 h -2.38125 l 2.645833,-2.116666 v 2.116666 z"
				id="path9059"
			/><path
				style="opacity:1;fill:#e0cf14;fill-opacity:1;fill-rule:evenodd;stroke-width:3;stroke-linecap:round;stroke-linejoin:round;stroke-miterlimit:3;stroke-opacity:0.498674;paint-order:stroke fill markers"
				d="m 91.281249,86.518749 0.264583,-0.264583 v 2.116666 h -0.264583 z"
				id="path9184"
			/><path
				style="opacity:1;fill:#8a807c;fill-opacity:1;fill-rule:evenodd;stroke-width:3;stroke-linecap:round;stroke-linejoin:round;stroke-miterlimit:3;stroke-opacity:0.498674;paint-order:stroke fill markers"
				d="m 112.44791,104.51042 v 3.96875 h 5.29167 v -3.96875 z"
				id="path9240"
			/><path
				style="opacity:1;fill:#8a807c;fill-opacity:1;fill-rule:evenodd;stroke-width:3;stroke-linecap:round;stroke-linejoin:round;stroke-miterlimit:3;stroke-opacity:0.498674;paint-order:stroke fill markers"
				d="m 84.666666,103.1875 h -2.645834 v -5.291668 h 2.645834 z"
				id="path9379"
			/><path
				style="opacity:1;fill:#8a807c;fill-opacity:1;fill-rule:evenodd;stroke-width:3;stroke-linecap:round;stroke-linejoin:round;stroke-miterlimit:3;stroke-opacity:0.498674;paint-order:stroke fill markers"
				d="m 84.666666,105.83333 h -5.291667 v -5.29166 h 5.291667 z"
				id="path9381"
			/><path
				style="opacity:1;fill:#8a807c;fill-opacity:1;fill-rule:evenodd;stroke-width:3;stroke-linecap:round;stroke-linejoin:round;stroke-miterlimit:3;stroke-opacity:0.498674;paint-order:stroke fill markers"
				d="m 79.374999,100.54167 v -2.645838 h 2.645833 v 2.645838 z"
				id="path9383"
			/></g
		><metadata id="metadata122445">
			<!-- svelte-ignore attribute_illegal_colon -->
			<!-- 	data-license="https://creativecommons.org/licenses/by-nc-sa/4.0/" data-author="Doriel Rivalet"--></metadata
		></svg
	>
</div>
