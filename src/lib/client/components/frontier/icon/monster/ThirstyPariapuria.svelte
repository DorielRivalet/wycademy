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
				id="filter13967"
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
					id="feComposite13953"
				/><feColorMatrix
					in="composite1"
					values="1"
					type="saturate"
					result="colormatrix1"
					id="feColorMatrix13955"
				/><feFlood
					flood-opacity="1"
					flood-color="rgb(0,0,0)"
					result="flood1"
					id="feFlood13957"
				/><feBlend
					in="flood1"
					in2="colormatrix1"
					mode="multiply"
					result="blend1"
					id="feBlend13959"
				/><feBlend
					in2="blend1"
					mode="screen"
					result="blend2"
					id="feBlend13961"
				/><feColorMatrix
					in="blend2"
					values="1"
					type="saturate"
					result="colormatrix2"
					id="feColorMatrix13963"
				/><feComposite
					in="colormatrix2"
					in2="SourceGraphic"
					operator="in"
					k2="1"
					result="composite2"
					id="feComposite13965"
				/></filter
			></defs
		><g id="layer1"
			><g
				id="g13587"
				style="filter:url(#filter13967)"
				transform="translate(1.0583333,1.5875)"
				><path
					style="opacity:1;fill:#ad401b;fill-opacity:1;fill-rule:evenodd;stroke:none;stroke-width:1.2;stroke-linecap:round;stroke-linejoin:round;stroke-miterlimit:3;stroke-opacity:1;paint-order:stroke fill markers"
					d="M 70.114582,117.73958 63.499999,87.312499 44.979166,89.958332 47.624999,120.38542 Z"
					id="path13343"
				/><path
					style="opacity:1;fill:#1c120a;fill-opacity:1;fill-rule:evenodd;stroke:none;stroke-width:1.2;stroke-linecap:round;stroke-linejoin:round;stroke-miterlimit:3;stroke-opacity:1;paint-order:stroke fill markers"
					d="M 47.889583,112.97708 V 91.016666 H 66.939582 L 65.592581,85.989582 H 42.333333 v 27.781248 z"
					id="path13345"
				/><path
					style="opacity:1;fill:#961311;fill-opacity:1;fill-rule:evenodd;stroke:none;stroke-width:1.2;stroke-linecap:round;stroke-linejoin:round;stroke-miterlimit:3;stroke-opacity:1;paint-order:stroke fill markers"
					d="m 19.579166,34.13125 v -3.439584 c 3.521298,-4.874614 7.0645,-7.856242 9.748553,-10.32527 6.288123,-5.784368 9.269169,-7.824578 14.857697,-12.1643128 V 11.90625 L 37.041666,26.458333 23.8125,35.71875 Z"
					id="path13347"
				/><path
					style="opacity:1;fill:#4e2723;fill-opacity:1;fill-rule:evenodd;stroke:none;stroke-width:1.2;stroke-linecap:round;stroke-linejoin:round;stroke-miterlimit:3;stroke-opacity:1;paint-order:stroke fill markers"
					d="M 11.377083,41.010416 V 36.5125 c 2.27639,-2.760784 5.062366,-4.607924 8.202083,-5.820834 v 3.439584 l -6.349999,6.879166 z"
					id="path13349"
				/><path
					style="opacity:1;fill:#4e2723;fill-opacity:1;fill-rule:evenodd;stroke:none;stroke-width:1.2;stroke-linecap:round;stroke-linejoin:round;stroke-miterlimit:3;stroke-opacity:1;paint-order:stroke fill markers"
					d="m 23.8125,34.13125 c 2.042773,-3.57815 5.695307,-7.350601 9.260416,-11.1125 v 5.027083 H 43.127083 L 37.041666,35.71875 H 23.8125 Z"
					id="path13351"
				/><path
					style="opacity:1;fill:#3a0100;fill-opacity:1;fill-rule:evenodd;stroke:none;stroke-width:1.2;stroke-linecap:round;stroke-linejoin:round;stroke-miterlimit:3;stroke-opacity:1;paint-order:stroke fill markers"
					d="m 38.89375,16.933333 5.291666,-5.027083 v 4.233333 l -5.55625,5.291667 z"
					id="path13353"
				/><path
					style="opacity:1;fill:#76625b;fill-opacity:1;fill-rule:evenodd;stroke-width:1.2;stroke-linecap:round;stroke-linejoin:round;stroke-miterlimit:3;paint-order:stroke fill markers"
					d="m 124.61875,99.218749 c -0.11207,2.952501 -2.03044,6.605961 -4.44707,9.977511 -1.95939,2.73364 -4.19754,5.71188 -7.1946,6.95582 H 98.160415 c -2.037305,-0.61135 -4.289783,-2.16152 -6.671933,-4.55416 -2.094272,-1.81327 -3.899852,-4.02689 -4.969733,-6.82292 2.805209,-4.62545 5.964505,-7.094373 9.260416,-8.731251 1.665798,2e-6 3.210958,10e-7 4.762505,0 4.44683,-0.672162 4.60189,-4.047006 6.87916,-6.085417 l 2.38125,7.9375 z"
					id="path13355"
				/><path
					style="opacity:1;fill:#b3aca5;fill-opacity:1;fill-rule:evenodd;stroke-width:1.2;stroke-linecap:round;stroke-linejoin:round;stroke-miterlimit:3;paint-order:stroke fill markers"
					d="m 99.747915,97.895832 h -3.704166 c -3.971148,2.764148 -5.214748,4.866878 -6.085417,6.879168 0.608407,1.70554 1.615078,3.47888 3.704426,5.30169 1.338221,1.16751 2.847598,2.50188 5.026824,3.69414 h 3.968748 l 2.38125,-2.38125 z"
					id="path13357"
				/><path
					style="opacity:1;fill:#e2ccb6;fill-opacity:1;fill-rule:evenodd;stroke-width:1.2;stroke-linecap:round;stroke-linejoin:round;stroke-miterlimit:3;paint-order:stroke fill markers"
					d="m 73.818749,37.835416 3.439583,-2.645833 29.897918,-0.79375 14.55208,14.552083 1.32292,39.6875 1.5875,2.749629 v 7.833704 c -1.39089,2.541031 -2.86094,5.024101 -4.5166,7.365701 -2.29086,3.23997 -5.16726,6.22435 -9.24173,7.18638 h -8.20209 c -4.366058,-2.85827 -8.406155,-5.75 -8.995831,-8.99583 1.241636,-2.55091 3.483466,-4.77404 6.085416,-6.879168 h 3.704165 c 3.21591,-2.199295 3.7688,-6.733149 4.49792,-11.1125 V 53.445833 c 0.0508,-3.521806 -1.69489,-4.449839 -4.23333,-4.233334 H 89.95833 l -2.962318,0.79375 -5.76893,2.645834 -3.175,-1.058334 z"
					id="path13359"
				/><path
					style="opacity:1;fill:#c01313;fill-opacity:1;fill-rule:evenodd;stroke-width:1.2;stroke-linecap:round;stroke-linejoin:round;stroke-miterlimit:3;paint-order:stroke fill markers"
					d="M 26.722916,94.456249 H 30.1625 v 6.350001 l -4.582718,-2.645835 z"
					id="path13361"
				/><path
					style="opacity:1;fill:#4e2723;fill-opacity:1;fill-rule:evenodd;stroke-width:1.2;stroke-linecap:round;stroke-linejoin:round;stroke-miterlimit:3;paint-order:stroke fill markers"
					d="M 124.61875,82.814582 V 43.127083 c -2.44491,-7.566729 -6.584,-10.881452 -10.05417,-15.875 l -2.11666,-2.116667 -3.70417,-3.704166 -2.91042,-2.645834 c -1.23931,-0.819005 -2.49325,-1.718419 -3.70416,-2.38125 l -8.202088,-2.645833 h -4.7625 l -11.1125,4.7625 5.291667,3.704167 h 12.964583 l 10.847918,9.525 9.26042,11.906249 3.96875,5.291667 v 34.395833 l 3.96875,2.645833 z"
					id="path13363"
				/><path
					style="opacity:1;fill:#271f11;fill-rule:evenodd;stroke-width:1.2;stroke-linecap:round;stroke-linejoin:round;stroke-miterlimit:3;paint-order:stroke fill markers"
					d="M 66.410416,30.95625 V 28.045833 H 79.374999 L 81.227082,22.225 h 15.610417 l 5.027081,1.5875 2.11667,1.322916 4.49792,3.175 3.43958,2.910417 2.64583,2.645833 3.175,3.96875 3.43959,6.085417 v 35.454166 h -3.175 v -34.925 L 104.51042,34.395833 H 70.114582 Z"
					id="path13365"
				/><path
					style="opacity:1;fill:#b3aca5;fill-opacity:1;fill-rule:evenodd;stroke:none;stroke-width:1.2;stroke-linecap:round;stroke-linejoin:round;stroke-miterlimit:3;stroke-opacity:1;paint-order:stroke fill markers"
					d="M 74.083332,38.629166 76.993749,36.5125 h 27.252081 c 3.8857,2.309952 7.65453,4.823423 10.31875,9.260416 h 2.11667 l -0.85074,-3.175 -9.99718,-9.525 L 103.1875,31.75 H 71.437499 v 10.583333 z"
					id="path13367"
				/><path
					style="opacity:1;fill:#b3aca5;fill-opacity:1;fill-rule:evenodd;stroke:none;stroke-width:1.2;stroke-linecap:round;stroke-linejoin:round;stroke-miterlimit:3;stroke-opacity:1;paint-order:stroke fill markers"
					d="m 91.545832,11.90625 c -2.846727,2.899031 -5.565783,5.244829 -9.525,12.964583 H 67.468749 v -7.672917 l 13.229167,-7.143749 z"
					id="path13369"
				/><path
					style="opacity:1;fill:#93877c;fill-opacity:1;fill-rule:evenodd;stroke:none;stroke-width:1.2;stroke-linecap:round;stroke-linejoin:round;stroke-miterlimit:3;stroke-opacity:1;paint-order:stroke fill markers"
					d="m 66.410416,28.045833 h 12.964583 l 2.645833,-3.175 H 69.056249 V 18.25625 c 3.988596,-2.261613 8.082605,-4.425622 12.435417,-6.35 h 10.054166 c 1.248517,-1.470457 3.035584,-2.5325303 5.027083,-3.4395834 L 89.693749,7.1437499 77.787499,8.2020832 63.499999,15.875 64.822916,29.104166 Z"
					id="path13371"
				/><path
					style="opacity:1;fill:#76625b;fill-opacity:1;fill-rule:evenodd;stroke:none;stroke-width:1.2;stroke-linecap:round;stroke-linejoin:round;stroke-miterlimit:3;stroke-opacity:1;paint-order:stroke fill markers"
					d="m 66.410416,28.045833 v -11.90625 l -8.466667,4.888232 2.305841,8.605518 z"
					id="path13373"
				/><path
					style="opacity:1;fill:#961311;fill-opacity:1;fill-rule:evenodd;stroke:none;stroke-width:1.2;stroke-linecap:round;stroke-linejoin:round;stroke-miterlimit:3;stroke-opacity:1;paint-order:stroke fill markers"
					d="m 55.562499,25.135416 c -1.455784,-4.861162 1.735765,-8.536812 8.202084,-11.377083 5.009146,-2.810349 9.927366,-5.7389405 15.610416,-7.6729164 h 17.197916 v 2.38125 H 83.079166 c -8.324063,3.5401204 -15.466938,7.5193634 -22.225,11.6416664 -0.732437,1.757383 -1.066345,3.40307 -1.322917,5.027083 z"
					id="path13375"
				/><path
					style="opacity:1;fill:#4e2723;fill-opacity:1;fill-rule:evenodd;stroke:none;stroke-width:1.2;stroke-linecap:round;stroke-linejoin:round;stroke-miterlimit:3;stroke-opacity:1;paint-order:stroke fill markers"
					d="M 44.185416,28.045833 V 23.01875 c 6.456435,-3.837645 12.931735,-7.4728 19.579167,-9.260417 -3.524251,2.309944 -7.791696,4.055153 -8.202084,8.73125 v 2.645833 l -0.264583,4.7625 z"
					id="path13377"
				/><path
					style="opacity:1;fill:#2a1f1a;fill-opacity:1;fill-rule:evenodd;stroke:none;stroke-width:1.2;stroke-linecap:round;stroke-linejoin:round;stroke-miterlimit:3;stroke-opacity:1;paint-order:stroke fill markers"
					d="m 66.410416,48.947916 h -0.264584 v 3.704167 h 2.910417 v 5.55625 H 55.297916 v -9.260417 h -2.910417 l 1.322917,-1.322917 V 39.6875 L 34.925,45.772916 H 11.377083 v -4.7625 c 1.908531,-3.891212 4.744659,-5.986602 8.202083,-6.879166 H 23.8125 35.189583 l 18.520833,-6.085417 1.852083,-2.910417 h 6.879167 v 2.910417 h 3.96875 v 8.995833 z"
					id="path13379"
				/><path
					style="opacity:1;fill:#961311;fill-opacity:1;fill-rule:evenodd;stroke:none;stroke-width:1.2;stroke-linecap:round;stroke-linejoin:round;stroke-miterlimit:3;stroke-opacity:1;paint-order:stroke fill markers"
					d="m 44.449999,37.041666 0.529167,-8.995833 h 3.175 l -1.058333,8.995833 z"
					id="path13381"
				/><path
					style="opacity:1;fill:#600000;fill-opacity:1;fill-rule:evenodd;stroke:none;stroke-width:1.2;stroke-linecap:round;stroke-linejoin:round;stroke-miterlimit:3;stroke-opacity:1;paint-order:stroke fill markers"
					d="m 41.274999,37.041666 h 3.175 l 0.529167,-8.995833 h -1.852083 l -1.852084,1.322917 z"
					id="path13383"
				/><path
					style="opacity:1;fill:#c01313;fill-opacity:1;fill-rule:evenodd;stroke-width:1.2;stroke-linecap:round;stroke-linejoin:round;stroke-miterlimit:3;paint-order:stroke fill markers"
					d="M 12.964583,79.374999 H 20.6375 v 2.38125 l -10.583333,2.835794 1.114323,-4.158711 z"
					id="path13385"
				/><path
					style="opacity:1;fill:#3a0100;fill-opacity:1;fill-rule:evenodd;stroke:none;stroke-width:1.2;stroke-linecap:round;stroke-linejoin:round;stroke-miterlimit:3;stroke-opacity:1;paint-order:stroke fill markers"
					d="m 11.377083,88.106249 c 0.735677,-1.112612 1.417875,-2.277316 2.645833,-2.910417 H 20.6375 v -3.439583 h -7.14375 c -1.495772,0.576586 -2.095778,1.542803 -2.38125,2.645833 z"
					id="path13387"
				/><path
					style="opacity:1;fill:#961311;fill-opacity:1;fill-rule:evenodd;stroke-width:1.2;stroke-linecap:round;stroke-linejoin:round;stroke-miterlimit:3;paint-order:stroke fill markers"
					d="M 7.9374999,94.720832 C 9.0749002,92.454786 10.19308,90.059899 11.377083,88.106249 v -5.820833 c -0.132893,-1.415059 0.896699,-2.056997 1.5875,-2.910417 -1.579902,0.341298 -3.1357859,0.214118 -5.0270831,3.704167 z"
					id="path13389"
				/><path
					style="opacity:1;fill:#961311;fill-opacity:1;fill-rule:evenodd;stroke-width:1.2;stroke-linecap:round;stroke-linejoin:round;stroke-miterlimit:3;paint-order:stroke fill markers"
					d="m 17.197916,88.106249 v 7.9375 c -0.916405,2.890107 -1.045784,5.521841 -1.322916,8.202081 -1.388048,-2.19993 -1.743461,-4.941084 -2.116667,-7.672915 v -5.820833 c 0.673107,-1.810895 1.956792,-2.423708 3.439583,-2.645833 z"
					id="path13391"
				/><circle
					style="opacity:1;fill:#961311;fill-opacity:1;fill-rule:evenodd;stroke:#ba1313;stroke-width:1.18415;stroke-linecap:round;stroke-linejoin:round;stroke-miterlimit:3;stroke-opacity:1;paint-order:stroke fill markers"
					id="circle13393"
					cx="24.870832"
					cy="40.481251"
					r="4.6995912"
				/><circle
					style="opacity:1;fill:#ce859b;fill-opacity:1;fill-rule:evenodd;stroke:none;stroke-width:0.6;stroke-linecap:round;stroke-linejoin:round;stroke-miterlimit:3;stroke-opacity:1;paint-order:stroke fill markers"
					id="circle13395"
					cx="24.870832"
					cy="40.745834"
					r="2.3812511"
				/><path
					style="opacity:1;fill:#961311;fill-opacity:1;fill-rule:evenodd;stroke:none;stroke-width:1.2;stroke-linecap:round;stroke-linejoin:round;stroke-miterlimit:3;stroke-opacity:1;paint-order:stroke fill markers"
					d="m 23.547916,91.281249 h 3.175 v 6.35 l 3.439584,3.175001 v 5.02708 c -2.682963,-1.80545 -5.125521,-3.63435 -6.614584,-5.55625 z"
					id="path13397"
				/><path
					style="opacity:1;fill:#c01313;fill-opacity:1;fill-rule:evenodd;stroke:none;stroke-width:1.2;stroke-linecap:round;stroke-linejoin:round;stroke-miterlimit:3;stroke-opacity:1;paint-order:stroke fill markers"
					d="m 35.71875,94.456249 h 4.497916 L 39.6875,102.39375 34.395833,96.837499 Z"
					id="path13399"
				/><path
					style="opacity:1;fill:#961311;fill-opacity:1;fill-rule:evenodd;stroke:none;stroke-width:1.2;stroke-linecap:round;stroke-linejoin:round;stroke-miterlimit:3;stroke-opacity:1;paint-order:stroke fill markers"
					d="m 38.89375,105.83333 v -5.29166 l -3.175,-3.175005 v -6.085416 h -2.645834 v 9.260421 c 1.59864,1.77857 3.548519,3.54204 5.820834,5.29166 z"
					id="path13401"
				/><path
					style="opacity:1;fill:#c01313;fill-opacity:1;fill-rule:evenodd;stroke-width:1.2;stroke-linecap:round;stroke-linejoin:round;stroke-miterlimit:3;paint-order:stroke fill markers"
					d="m 90.222916,88.106249 v 2.910417 h -5.027084 l 2.138601,-3.704167 z"
					id="path13403"
				/><path
					style="opacity:1;fill:#961311;fill-opacity:1;fill-rule:evenodd;stroke:none;stroke-width:1.2;stroke-linecap:round;stroke-linejoin:round;stroke-miterlimit:3;stroke-opacity:1;paint-order:stroke fill markers"
					d="m 80.168749,91.016666 5.820833,-5.820834 h 4.233334 v 2.910417 h -2.116667 l -2.910417,2.910417 z"
					id="path13405"
				/><path
					style="opacity:1;fill:#1c120a;fill-opacity:1;fill-rule:evenodd;stroke:none;stroke-width:1.2;stroke-linecap:round;stroke-linejoin:round;stroke-miterlimit:3;stroke-opacity:1;paint-order:stroke fill markers"
					d="m 89.429166,116.15208 h 4.233333 c -0.963623,2.48328 -2.732816,4.55419 -5.55625,6.08542 h -5.291667 v -3.175 z"
					id="path13407"
				/><path
					style="opacity:1;fill:#961311;fill-opacity:1;fill-rule:evenodd;stroke:none;stroke-width:1.2;stroke-linecap:round;stroke-linejoin:round;stroke-miterlimit:3;stroke-opacity:1;paint-order:stroke fill markers"
					d="m 82.814582,119.0625 h 3.704167 c 1.251029,-0.72333 2.401019,-1.53545 2.910417,-2.91042 h -6.614584 z"
					id="path13409"
				/><path
					style="opacity:1;fill:#76625b;fill-opacity:1;fill-rule:evenodd;stroke:none;stroke-width:1.2;stroke-linecap:round;stroke-linejoin:round;stroke-miterlimit:3;stroke-opacity:1;paint-order:stroke fill markers"
					d="m 81.491666,112.97708 3.439583,3.175 H 42.333333 l 1.852083,-3.175 z"
					id="path13411"
				/><path
					style="opacity:1;fill:#3a0100;fill-opacity:1;fill-rule:evenodd;stroke:none;stroke-width:1.2;stroke-linecap:round;stroke-linejoin:round;stroke-miterlimit:3;stroke-opacity:1;paint-order:stroke fill markers"
					d="m 35.71875,94.456249 h 3.96875 v -3.96875 h -3.96875 z"
					id="path13413"
				/><path
					style="opacity:1;fill:#2a1f1a;fill-opacity:1;fill-rule:evenodd;stroke:none;stroke-width:1.2;stroke-linecap:round;stroke-linejoin:round;stroke-miterlimit:3;stroke-opacity:1;paint-order:stroke fill markers"
					d="M 82.814582,116.15208 H 46.831249 c -1.041397,0.11541 -2.025403,-0.0329 -2.645833,-1.85208 V 87.841666 h 20.372917 c 0.227115,1.332874 0.41718,2.699424 1.587499,3.175 h 8.995834 v -14.2875 c -0.268919,-2.000219 -1.382533,-3.178765 -3.439584,-3.439584 h -2.645833 v 6.085417 3.439583 H 38.629166 L 35.189583,79.374999 H 23.547916 v 5.55625 h 3.175 v 3.175 h -3.175 v 3.175 H 38.89375 v 26.987501 c 0.34243,1.89531 0.59193,3.84486 3.968749,3.96875 H 82.81458 Z"
					id="path13415"
				/><path
					style="opacity:1;fill:#da7223;fill-opacity:1;fill-rule:evenodd;stroke:none;stroke-width:1.2;stroke-linecap:round;stroke-linejoin:round;stroke-miterlimit:3;stroke-opacity:1;paint-order:stroke fill markers"
					d="m 67.733332,112.97708 c -2.45089,-2.91743 -3.902078,-6.21946 -3.968749,-10.05416 l -3.96875,-3.704171 v -8.202083 h 15.345833 c -1.768478,1.20047 -2.505884,2.834825 -3.175,4.497916 v 3.96875 c 1.239442,4.402038 5.23773,8.940738 9.525,13.493748 z"
					id="path13417"
				/><path
					style="opacity:1;fill:#2a1f1a;fill-opacity:1;fill-rule:evenodd;stroke:none;stroke-width:1.2;stroke-linecap:round;stroke-linejoin:round;stroke-miterlimit:3;stroke-opacity:1;paint-order:stroke fill markers"
					d="m 59.795833,99.218749 h 3.96875 v 3.704171 h -3.96875 z"
					id="path13419"
				/><path
					style="opacity:1;fill:#3a0100;fill-opacity:1;fill-rule:evenodd;stroke:none;stroke-width:1.2;stroke-linecap:round;stroke-linejoin:round;stroke-miterlimit:3;stroke-opacity:1;paint-order:stroke fill markers"
					d="M 26.722916,94.456249 V 91.016666 H 30.1625 v 3.439583 z"
					id="path13421"
				/><path
					style="opacity:1;fill:#3a0100;fill-opacity:1;fill-rule:evenodd;stroke:none;stroke-width:1.2;stroke-linecap:round;stroke-linejoin:round;stroke-miterlimit:3;stroke-opacity:1;paint-order:stroke fill markers"
					d="M 17.197916,91.281249 H 20.6375 v 4.7625 h -3.439584 z"
					id="path13423"
				/><path
					style="opacity:1;fill:#2a1f1a;fill-opacity:1;fill-rule:evenodd;stroke:none;stroke-width:1.2;stroke-linecap:round;stroke-linejoin:round;stroke-miterlimit:3;stroke-opacity:1;paint-order:stroke fill markers"
					d="m 101.86458,52.387499 h -9.524998 c -1.887968,0.364533 -3.214585,1.130514 -4.233333,2.116667 l -5.291667,5.291667 c -0.59648,1.014546 -1.268534,1.781896 -1.5875,3.704166 v 12.435417 c 0.266822,1.738547 1.03553,3.170114 3.704167,3.439583 h 11.641666 v 3.704167 h -2.910416 v 2.116666 l 5.55625,3.207901 3.482661,-12.997484 -15.388911,-1.322917 1.322917,-9.260416 h 11.906254 l 2.64583,-10.583333 z"
					id="path13425"
				/><path
					style="opacity:1;fill:#76625b;fill-opacity:1;fill-rule:evenodd;stroke:none;stroke-width:1.2;stroke-linecap:round;stroke-linejoin:round;stroke-miterlimit:3;stroke-opacity:1;paint-order:stroke fill markers"
					d="m 93.6625,91.016667 5.820832,-10e-7 c 2.469058,-1.593376 4.526588,-3.388092 5.820838,-5.55625 v -9.789584 c -0.60648,-0.896285 -1.31604,-1.728419 -2.38125,-2.38125 H 90.222916 v -6.35 h 3.704166 v 3.175 H 105.30417 V 54.768749 c -0.3131,-1.171911 -1.14799,-2.107067 -3.43959,-2.38125 v 2.116667 c -2.584373,3.750244 -6.504125,6.620717 -10.583331,9.260417 h -3.439583 c -0.54014,0.09716 -1.02754,0.283352 -1.322917,0.79375 v 9.789583 c 0.201917,0.787692 0.526438,1.445485 1.5875,1.322916 h 9.789583 c 0.991024,0.266889 1.403617,0.716843 1.322917,1.322917 v 8.202083 l -5.556249,10e-7 z"
					id="path13427"
				/><circle
					style="opacity:1;fill:#961311;fill-opacity:1;fill-rule:evenodd;stroke:none;stroke-width:1.37143;stroke-linecap:round;stroke-linejoin:round;stroke-miterlimit:3;stroke-opacity:1;paint-order:stroke fill markers"
					id="circle13429"
					cx="6.8791666"
					cy="44.450001"
					r="2.1166666"
				/><circle
					style="opacity:1;fill:#961311;fill-opacity:1;fill-rule:evenodd;stroke:none;stroke-width:1.2;stroke-linecap:round;stroke-linejoin:round;stroke-miterlimit:3;stroke-opacity:1;paint-order:stroke fill markers"
					id="circle13431"
					cx="12.435416"
					cy="50.799999"
					r="1.5875"
				/><circle
					style="opacity:1;fill:#961311;fill-opacity:1;fill-rule:evenodd;stroke:none;stroke-width:1.2;stroke-linecap:round;stroke-linejoin:round;stroke-miterlimit:3;stroke-opacity:1;paint-order:stroke fill markers"
					id="circle13433"
					cx="18.520834"
					cy="56.356251"
					r="1.5875"
				/><circle
					style="opacity:1;fill:#961311;fill-opacity:1;fill-rule:evenodd;stroke:none;stroke-width:1.2;stroke-linecap:round;stroke-linejoin:round;stroke-miterlimit:3;stroke-opacity:1;paint-order:stroke fill markers"
					id="circle13435"
					cx="27.78125"
					cy="53.710415"
					r="2.1166666"
				/><path
					style="opacity:1;fill:#961311;fill-opacity:1;fill-rule:evenodd;stroke:none;stroke-width:1.2;stroke-linecap:round;stroke-linejoin:round;stroke-miterlimit:3;stroke-opacity:1;paint-order:stroke fill markers"
					d="m 11.377083,54.768749 c -1.7768304,1.296792 -2.8364949,3.08725 -2.9104164,5.55625 -0.7629236,1.576719 -1.891582,1.588368 -2.6623101,1.317257 -0.7450809,-0.26209 -1.6015471,-1.104961 -1.5710232,-2.904757 1.6428676,-2.908312 4.2318812,-3.785135 7.1437497,-3.96875 z"
					id="path13437"
				/><path
					style="opacity:1;fill:#76625b;fill-opacity:1;fill-rule:evenodd;stroke:none;stroke-width:1.2;stroke-linecap:round;stroke-linejoin:round;stroke-miterlimit:3;stroke-opacity:1;paint-order:stroke fill markers"
					d="m 69.056249,73.289582 v -3.175 h 6.085417 0.264583 v -3.175 H 60.854166 v 7.14375 l 6.614583,1.772373 z"
					id="path13439"
				/><path
					style="opacity:1;fill:#961311;fill-opacity:1;fill-rule:evenodd;stroke:none;stroke-width:1.2;stroke-linecap:round;stroke-linejoin:round;stroke-miterlimit:3;stroke-opacity:1;paint-order:stroke fill markers"
					d="M 53.710416,43.127083 V 39.6875 h -3.175 v 3.439583 z"
					id="path13441"
				/><path
					style="opacity:1;fill:#2a1f1a;fill-opacity:1;fill-rule:evenodd;stroke:none;stroke-width:1.2;stroke-linecap:round;stroke-linejoin:round;stroke-miterlimit:3;stroke-opacity:1;paint-order:stroke fill markers"
					d="m 69.056249,73.289582 h -6.614583 v -6.35 h 12.964583 c 4.378823,-3.455762 5.080478,-6.754136 5.820833,-10.054166 v -11.1125 c -1.291572,-3.21145 -3.275054,-6.194837 -6.614583,-8.73125 h -8.202083 v 11.90625 h 5.820833 V 61.912499 H 53.710416 v 6.35 c 0.61979,1.140548 1.365756,2.166452 3.439583,1.985844 v 6.745406 c 0.732201,1.439045 1.825655,2.515332 4.124447,2.38125 h 7.781803 z"
					id="path13443"
				/><path
					style="opacity:1;fill:#f899b0;fill-opacity:1;fill-rule:evenodd;stroke:none;stroke-width:1.2;stroke-linecap:round;stroke-linejoin:round;stroke-miterlimit:3;stroke-opacity:1;paint-order:stroke fill markers"
					d="m 44.185417,78.052083 h 2.910416 V 79.375 l -1.322917,1.322916 -1.587499,-1.587499 z"
					id="path13445"
				/><path
					style="opacity:1;fill:#961311;fill-opacity:1;fill-rule:evenodd;stroke:none;stroke-width:1.2;stroke-linecap:round;stroke-linejoin:round;stroke-miterlimit:3;stroke-opacity:1;paint-order:stroke fill markers"
					d="M 38.89375,70.908332 35.189583,70.379166 14.022916,63.764583 H 11.1125 v -2.910417 h 29.897916 l 4.7625,1.276109 0.79375,2.163474 0.529167,1.322917 v 1.058333 7.9375 h -2.910417 l -2.910417,-3.704167 z"
					id="path13447"
				/><path
					style="opacity:1;fill:#c01313;fill-opacity:1;fill-rule:evenodd;stroke:none;stroke-width:1.2;stroke-linecap:round;stroke-linejoin:round;stroke-miterlimit:3;stroke-opacity:1;paint-order:stroke fill markers"
					d="m 47.095833,78.052082 v -3.439583 h -2.910417 v 3.439583 z"
					id="path13449"
				/><path
					style="opacity:1;fill:#3a0100;fill-opacity:1;fill-rule:evenodd;stroke:none;stroke-width:1.2;stroke-linecap:round;stroke-linejoin:round;stroke-miterlimit:3;stroke-opacity:1;paint-order:stroke fill markers"
					d="m 44.185416,74.612499 v -6.879167 c -0.577094,-3.581599 -3.054009,-3.5475 -5.291666,-3.968749 v 7.143749 c 2.131343,1.055152 3.745515,2.363039 5.291666,3.704167 z"
					id="path13451"
				/><path
					style="opacity:1;fill:#3a0100;fill-opacity:1;fill-rule:evenodd;stroke:none;stroke-width:1.2;stroke-linecap:round;stroke-linejoin:round;stroke-miterlimit:3;stroke-opacity:1;paint-order:stroke fill markers"
					d="m 47.095833,66.674999 c -0.554949,-2.910175 -2.2525,-4.451479 -6.085416,-5.820832 l 3.174999,-10e-7 c 2.188648,0.531973 3.181075,2.44649 2.910417,5.820833 z"
					id="path13453"
				/><path
					style="opacity:1;fill:#600000;fill-opacity:1;fill-rule:evenodd;stroke:none;stroke-width:1.2;stroke-linecap:round;stroke-linejoin:round;stroke-miterlimit:3;stroke-opacity:1;paint-order:stroke fill markers"
					d="m 14.022916,63.764583 v 6.614583 c 0.189333,2.231774 1.348615,3.538448 3.704167,3.704166 H 31.75 c 1.549469,-0.592078 3.099502,-1.183257 3.439583,-3.704166 v -6.614583 z"
					id="path13455"
				/><path
					style="opacity:1;fill:#c01313;fill-opacity:1;fill-rule:evenodd;stroke:none;stroke-width:1.2;stroke-linecap:round;stroke-linejoin:round;stroke-miterlimit:3;stroke-opacity:1;paint-order:stroke fill markers"
					d="m 14.022916,60.854166 v -2.645833 h 2.910417 v 2.645833 z"
					id="path13457"
				/><path
					style="opacity:1;fill:#c01313;fill-opacity:1;fill-rule:evenodd;stroke:none;stroke-width:1.2;stroke-linecap:round;stroke-linejoin:round;stroke-miterlimit:3;stroke-opacity:1;paint-order:stroke fill markers"
					d="m 19.976041,60.854166 v -2.645833 h 2.910417 v 2.645833 z"
					id="path13459"
				/><path
					style="opacity:1;fill:#c01313;fill-opacity:1;fill-rule:evenodd;stroke:none;stroke-width:1.2;stroke-linecap:round;stroke-linejoin:round;stroke-miterlimit:3;stroke-opacity:1;paint-order:stroke fill markers"
					d="m 26.061458,60.854166 v -2.645833 h 2.910417 v 2.645833 z"
					id="path13461"
				/><path
					style="opacity:1;fill:#c01313;fill-opacity:1;fill-rule:evenodd;stroke:none;stroke-width:1.2;stroke-linecap:round;stroke-linejoin:round;stroke-miterlimit:3;stroke-opacity:1;paint-order:stroke fill markers"
					d="m 32.146875,60.854166 v -2.645833 h 2.910417 v 2.645833 z"
					id="path13463"
				/><path
					style="opacity:1;fill:#c01313;fill-opacity:1;fill-rule:evenodd;stroke:none;stroke-width:1.31453;stroke-linecap:round;stroke-linejoin:round;stroke-miterlimit:3;stroke-opacity:1;paint-order:stroke fill markers"
					d="m 14.022916,48.947916 v -3.174999 h 2.910417 v 3.174999 z"
					id="path13465"
				/><path
					style="opacity:1;fill:#c01313;fill-opacity:1;fill-rule:evenodd;stroke:none;stroke-width:1.31453;stroke-linecap:round;stroke-linejoin:round;stroke-miterlimit:3;stroke-opacity:1;paint-order:stroke fill markers"
					d="m 19.976041,48.947916 v -3.174999 h 2.910417 v 3.174999 z"
					id="path13467"
				/><path
					style="opacity:1;fill:#c01313;fill-opacity:1;fill-rule:evenodd;stroke:none;stroke-width:1.31453;stroke-linecap:round;stroke-linejoin:round;stroke-miterlimit:3;stroke-opacity:1;paint-order:stroke fill markers"
					d="m 26.061458,48.947916 v -3.174999 h 2.910417 v 3.174999 z"
					id="path13469"
				/><path
					style="opacity:1;fill:#c01313;fill-opacity:1;fill-rule:evenodd;stroke:none;stroke-width:1.31453;stroke-linecap:round;stroke-linejoin:round;stroke-miterlimit:3;stroke-opacity:1;paint-order:stroke fill markers"
					d="m 32.146875,48.947916 v -3.174999 h 2.910417 v 3.174999 z"
					id="path13471"
				/><path
					style="opacity:1;fill:#3f2a1f;fill-opacity:1;fill-rule:evenodd;stroke:none;stroke-width:1.2;stroke-linecap:round;stroke-linejoin:round;stroke-miterlimit:3;stroke-opacity:1;paint-order:stroke fill markers"
					d="m 38.629166,58.208333 v 2.645833 H 34.925 v -2.645833 z"
					id="path13473"
				/><path
					style="opacity:1;fill:#93877c;fill-opacity:1;fill-rule:evenodd;stroke:none;stroke-width:1.2;stroke-linecap:round;stroke-linejoin:round;stroke-miterlimit:3;stroke-opacity:1;paint-order:stroke fill markers"
					d="m 38.629166,58.208333 h 5.55625 v 2.645833 h -5.55625 z"
					id="path13475"
				/><path
					style="opacity:1;fill:#ad401b;fill-opacity:1;fill-rule:evenodd;stroke:none;stroke-width:1.2;stroke-linecap:round;stroke-linejoin:round;stroke-miterlimit:3;stroke-opacity:1;paint-order:stroke fill markers"
					d="m 34.925,58.208333 h 3.704166 V 48.947916 H 34.925 Z"
					id="path13477"
				/><path
					style="opacity:1;fill:#99707b;fill-opacity:1;fill-rule:evenodd;stroke:none;stroke-width:1.2;stroke-linecap:round;stroke-linejoin:round;stroke-miterlimit:3;stroke-opacity:1;paint-order:stroke fill markers"
					d="m 38.629166,53.181249 v -4.233333 h 11.377083 l -2.1386,3.704167 -8.973899,1.322916 z"
					id="path13479"
				/><path
					style="opacity:1;fill:#694b53;fill-opacity:1;fill-rule:evenodd;stroke:none;stroke-width:1.2;stroke-linecap:round;stroke-linejoin:round;stroke-miterlimit:3;stroke-opacity:1;paint-order:stroke fill markers"
					d="m 38.629166,55.562499 v -2.38125 c 3.956447,-0.174026 7.706374,-1.14679 10.054167,-4.233332 H 52.3875 l 0.793749,2.116666 -1.852083,3.175 -4.233333,2.116666 -7.14375,0.264584 z"
					id="path13481"
				/><path
					style="opacity:1;fill:#b3aca5;fill-opacity:1;fill-rule:evenodd;stroke:none;stroke-width:1.2;stroke-linecap:round;stroke-linejoin:round;stroke-miterlimit:3;stroke-opacity:1;paint-order:stroke fill markers"
					d="m 38.629166,58.208333 v -2.645834 h 8.202083 C 49.180456,54.483758 51.306614,53.472285 52.3875,50.8 v -1.852083 h 2.910417 l -10e-7,3.439582 c -1.491833,2.466217 -3.21652,4.779583 -6.879167,5.820834 z"
					id="path13483"
				/><path
					style="opacity:1;fill:#694b53;fill-opacity:1;fill-rule:evenodd;stroke:none;stroke-width:1.2;stroke-linecap:round;stroke-linejoin:round;stroke-miterlimit:3;stroke-opacity:1;paint-order:stroke fill markers"
					d="m 38.1,39.6875 h 8.995833 v 3.968749 H 37.30625 l 0.264583,-3.439583 z"
					id="path13485"
				/><path
					style="opacity:1;fill:#b3aca5;fill-opacity:1;fill-rule:evenodd;stroke:none;stroke-width:1.2;stroke-linecap:round;stroke-linejoin:round;stroke-miterlimit:3;stroke-opacity:1;paint-order:stroke fill markers"
					d="m 47.095833,39.6875 h 3.439584 l -1e-6,3.704166 h -3.439583 z"
					id="path13487"
				/><path
					style="opacity:1;fill:#93877c;fill-opacity:1;fill-rule:evenodd;stroke:none;stroke-width:1.2;stroke-linecap:round;stroke-linejoin:round;stroke-miterlimit:3;stroke-opacity:1;paint-order:stroke fill markers"
					d="m 43.920833,48.947916 3.175,-3.175 h 6.614583 V 43.127083 H 43.656247 l -6.614581,1.772372 1.5875,4.048461 z"
					id="path13489"
				/><path
					style="opacity:1;fill:#b3aca5;fill-opacity:1;fill-rule:evenodd;stroke:none;stroke-width:1.2;stroke-linecap:round;stroke-linejoin:round;stroke-miterlimit:3;stroke-opacity:1;paint-order:stroke fill markers"
					d="M 38.629166,48.947916 H 34.925 v -7.672917 c 0.381303,-1.000976 1.178658,-1.396567 2.116666,-1.587499 H 38.1 c 0.01296,1.25635 -0.21014,2.555594 1.852083,3.439583 h 3.704166 c -3.44008,1.414438 -4.491053,3.540902 -5.027083,5.820833 z"
					id="path13491"
				/><path
					style="opacity:1;fill:#76625b;fill-opacity:1;fill-rule:evenodd;stroke:none;stroke-width:1.2;stroke-linecap:round;stroke-linejoin:round;stroke-miterlimit:3;stroke-opacity:1;paint-order:stroke fill markers"
					d="m 43.920833,48.947916 3.175,-3.175 h 6.614583 v 1.852083 l -1.322917,1.322917 z"
					id="path13493"
				/><path
					style="opacity:1;fill:#3a0100;fill-opacity:1;fill-rule:evenodd;stroke:none;stroke-width:1.2;stroke-linecap:round;stroke-linejoin:round;stroke-miterlimit:3;stroke-opacity:1;paint-order:stroke fill markers"
					d="m 53.710416,39.6875 h 2.645833 l 1.852084,1.852083 -1.5875,1.5875 h -2.910417 z"
					id="path13495"
				/><path
					style="opacity:1;fill:#600000;fill-opacity:1;fill-rule:evenodd;stroke:none;stroke-width:1.2;stroke-linecap:round;stroke-linejoin:round;stroke-miterlimit:3;stroke-opacity:1;paint-order:stroke fill markers"
					d="M 35.189583,37.041666 V 34.13125 L 38.1,31.75 v 5.291666 z"
					id="path13497"
				/><path
					style="opacity:1;fill:#961311;fill-opacity:1;fill-rule:evenodd;stroke:none;stroke-width:1.2;stroke-linecap:round;stroke-linejoin:round;stroke-miterlimit:3;stroke-opacity:1;paint-order:stroke fill markers"
					d="m 38.1,37.041666 h 3.174999 V 29.36875 L 38.1,31.75 Z"
					id="path13499"
				/><path
					style="opacity:1;fill:#961311;fill-opacity:1;fill-rule:evenodd;stroke:none;stroke-width:1.2;stroke-linecap:round;stroke-linejoin:round;stroke-miterlimit:3;stroke-opacity:1;paint-order:stroke fill markers"
					d="m 50.270833,35.189583 3.175,-1.852083 0.264583,-5.291667 h -2.116667 z"
					id="path13501"
				/><path
					style="opacity:1;fill:#600000;fill-opacity:1;fill-rule:evenodd;stroke:none;stroke-width:1.2;stroke-linecap:round;stroke-linejoin:round;stroke-miterlimit:3;stroke-opacity:1;paint-order:stroke fill markers"
					d="M 47.095833,37.041666 50.762008,34.925 51.593749,28.045833 h -3.439583 z"
					id="path13503"
				/><path
					style="opacity:1;fill:#600000;fill-opacity:1;fill-rule:evenodd;stroke:none;stroke-width:1.2;stroke-linecap:round;stroke-linejoin:round;stroke-miterlimit:3;stroke-opacity:1;paint-order:stroke fill markers"
					d="m 53.445833,33.3375 3.704166,-2.38125 v -2.910417 h -3.439583 z"
					id="path13505"
				/><path
					style="opacity:1;fill:#76625b;fill-opacity:1;fill-rule:evenodd;stroke:none;stroke-width:1.2;stroke-linecap:round;stroke-linejoin:round;stroke-miterlimit:3;stroke-opacity:1;paint-order:stroke fill markers"
					d="m 33.072916,28.045833 v -1.5875 l 11.1125,-10.31875 v 11.90625 z"
					id="path13507"
				/><path
					style="opacity:1;fill:#c01313;fill-opacity:1;fill-rule:evenodd;stroke:none;stroke-width:1.2;stroke-linecap:round;stroke-linejoin:round;stroke-miterlimit:3;stroke-opacity:1;paint-order:stroke fill markers"
					d="M 33.072916,26.458333 V 23.01875 l 5.820834,-6.085417 v 4.233333 z"
					id="path13509"
				/><path
					style="opacity:1;fill:#93877c;fill-opacity:1;fill-rule:evenodd;stroke:none;stroke-width:1.2;stroke-linecap:round;stroke-linejoin:round;stroke-miterlimit:3;stroke-opacity:1;paint-order:stroke fill markers"
					d="m 69.056249,37.041666 h 3.96875 c 0.216851,-2.140782 1.271253,-3.373418 3.175,-3.704166 H 103.1875 c 5.06869,2.546601 9.49782,6.644669 13.22917,12.435416 h 1.5875 V 44.449999 C 113.77278,38.07277 109.27905,34.460128 104.775,30.95625 H 69.056249 l -1.322917,3.439583 z"
					id="path13511"
				/><path
					style="opacity:1;fill:#76625b;fill-opacity:1;fill-rule:evenodd;stroke:none;stroke-width:1.2;stroke-linecap:round;stroke-linejoin:round;stroke-miterlimit:3;stroke-opacity:1;paint-order:stroke fill markers"
					d="m 69.056249,37.041666 v -4.7625 c 0.17873,-0.600465 0.678883,-1.054642 1.5875,-1.322916 h -4.233333 v 6.085416 z"
					id="path13513"
				/><path
					style="opacity:1;fill:#76625b;fill-opacity:1;fill-rule:evenodd;stroke:none;stroke-width:1.2;stroke-linecap:round;stroke-linejoin:round;stroke-miterlimit:3;stroke-opacity:1;paint-order:stroke fill markers"
					d="m 81.227082,30.95625 h 3.439584 v 5.55625 l -1.5875,2.38125 -1.852084,-2.38125 z"
					id="path13515"
				/><path
					style="opacity:1;fill:#76625b;fill-opacity:1;fill-rule:evenodd;stroke:none;stroke-width:1.2;stroke-linecap:round;stroke-linejoin:round;stroke-miterlimit:3;stroke-opacity:1;paint-order:stroke fill markers"
					d="m 89.958333,30.95625 h 3.439584 v 5.55625 l -1.5875,2.38125 -1.852084,-2.38125 z"
					id="path13517"
				/><path
					style="opacity:1;fill:#76625b;fill-opacity:1;fill-rule:evenodd;stroke:none;stroke-width:1.2;stroke-linecap:round;stroke-linejoin:round;stroke-miterlimit:3;stroke-opacity:1;paint-order:stroke fill markers"
					d="m 98.689583,30.95625 h 3.439587 v 5.55625 l -1.5875,2.38125 -1.852087,-2.38125 z"
					id="path13519"
				/><ellipse
					style="opacity:1;fill:#ad401b;fill-opacity:1;fill-rule:evenodd;stroke-width:1.32;stroke-linecap:round;stroke-linejoin:round;stroke-miterlimit:3;paint-order:stroke fill markers"
					id="ellipse13521"
					cx="82.682289"
					cy="29.501041"
					rx="1.4552088"
					ry="1.455209"
				/><ellipse
					style="opacity:1;fill:#ad401b;fill-opacity:1;fill-rule:evenodd;stroke-width:1.32;stroke-linecap:round;stroke-linejoin:round;stroke-miterlimit:3;paint-order:stroke fill markers"
					id="ellipse13523"
					cx="88.767708"
					cy="29.501041"
					rx="1.4552088"
					ry="1.455209"
				/><ellipse
					style="opacity:1;fill:#da7223;fill-opacity:1;fill-rule:evenodd;stroke-width:1.32;stroke-linecap:round;stroke-linejoin:round;stroke-miterlimit:3;paint-order:stroke fill markers"
					id="ellipse13525"
					cx="94.720833"
					cy="29.501041"
					rx="1.4552088"
					ry="1.455209"
				/><ellipse
					style="opacity:1;fill:#da7223;fill-opacity:1;fill-rule:evenodd;stroke-width:1.32;stroke-linecap:round;stroke-linejoin:round;stroke-miterlimit:3;paint-order:stroke fill markers"
					id="ellipse13527"
					cx="100.54166"
					cy="29.501041"
					rx="1.4552088"
					ry="1.455209"
				/><path
					style="opacity:1;fill:#da7223;fill-opacity:1;fill-rule:evenodd;stroke-width:1.2;stroke-linecap:round;stroke-linejoin:round;stroke-miterlimit:3;paint-order:stroke fill markers"
					d="m 114.56458,45.772916 h 3.43959 v 3.704167 h -3.43959 z"
					id="path13529"
				/><path
					style="opacity:1;fill:#76625b;fill-opacity:1;fill-rule:evenodd;stroke-width:1.2;stroke-linecap:round;stroke-linejoin:round;stroke-miterlimit:3;paint-order:stroke fill markers"
					d="m 118.00417,51.329166 h -5.55625 l -2.64584,1.852083 2.64584,1.5875 h 5.55625 z"
					id="path13531"
				/><path
					style="opacity:1;fill:#ad401b;fill-opacity:1;fill-rule:evenodd;stroke-width:1.2;stroke-linecap:round;stroke-linejoin:round;stroke-miterlimit:3;paint-order:stroke fill markers"
					d="m 114.56458,49.477083 1.85209,2.645833 1.5875,-2.645833 z"
					id="path13533"
				/><path
					style="opacity:1;fill:#76625b;fill-opacity:1;fill-rule:evenodd;stroke-width:1.2;stroke-linecap:round;stroke-linejoin:round;stroke-miterlimit:3;paint-order:stroke fill markers"
					d="m 118.00417,63.5 h -5.55625 l -2.64584,1.852083 2.64584,1.5875 h 5.55625 z"
					id="path13535"
				/><path
					style="opacity:1;fill:#76625b;fill-opacity:1;fill-rule:evenodd;stroke-width:1.2;stroke-linecap:round;stroke-linejoin:round;stroke-miterlimit:3;paint-order:stroke fill markers"
					d="m 118.00417,75.670834 h -5.55625 l -2.64584,1.852083 2.64584,1.5875 h 5.55625 z"
					id="path13537"
				/><path
					style="opacity:1;fill:#da7223;fill-opacity:1;fill-rule:evenodd;stroke-width:1.15292;stroke-linecap:round;stroke-linejoin:round;stroke-miterlimit:3;paint-order:stroke fill markers"
					d="m 114.3,57.679167 h 3.70417 v 3.175 H 114.3 Z"
					id="path13539"
				/><path
					style="opacity:1;fill:#ad401b;fill-opacity:1;fill-rule:evenodd;stroke-width:1.24529;stroke-linecap:round;stroke-linejoin:round;stroke-miterlimit:3;paint-order:stroke fill markers"
					d="M 114.3,60.854167 116.29456,63.5 118.00417,60.854167 Z"
					id="path13541"
				/><path
					style="opacity:1;fill:#da7223;fill-opacity:1;fill-rule:evenodd;stroke-width:1.2;stroke-linecap:round;stroke-linejoin:round;stroke-miterlimit:3;paint-order:stroke fill markers"
					d="m 114.3,69.85 h 3.70417 v 3.439583 H 114.3 Z"
					id="path13543"
				/><path
					style="opacity:1;fill:#ad401b;fill-opacity:1;fill-rule:evenodd;stroke-width:1.24529;stroke-linecap:round;stroke-linejoin:round;stroke-miterlimit:3;paint-order:stroke fill markers"
					d="m 114.3,73.289583 1.99456,2.645833 1.70961,-2.645833 z"
					id="path13545"
				/><path
					style="opacity:1;fill:#da7223;fill-opacity:1;fill-rule:evenodd;stroke-width:1.2;stroke-linecap:round;stroke-linejoin:round;stroke-miterlimit:3;paint-order:stroke fill markers"
					d="m 114.3,82.814584 h 3.70417 v 3.439583 H 114.3 Z"
					id="path13547"
				/><rect
					style="opacity:1;fill:#b3aca5;fill-opacity:1;fill-rule:evenodd;stroke-width:1.2;stroke-linecap:round;stroke-linejoin:round;stroke-miterlimit:3;paint-order:stroke fill markers"
					id="rect13549"
					width="6.3499999"
					height="6.3499999"
					x="107.95"
					y="100.0125"
				/><path
					style="opacity:1;fill:#b3aca5;fill-opacity:1;fill-rule:evenodd;stroke-width:1.2;stroke-linecap:round;stroke-linejoin:round;stroke-miterlimit:3;paint-order:stroke fill markers"
					d="m 114.56458,99.747915 h 6.61459 v -2.645833 c -1.21541,0.85666 -2.58725,1.462656 -4.49792,1.205214 h -2.11667 z"
					id="path13551"
				/><path
					style="opacity:1;fill:#694b53;fill-opacity:1;fill-rule:evenodd;stroke-width:1.2;stroke-linecap:round;stroke-linejoin:round;stroke-miterlimit:3;paint-order:stroke fill markers"
					d="m 124.61875,91.281249 v -8.466667 h -3.43958 l -1.98585,3.439584 3.04418,6.35 z"
					id="path13553"
				/><path
					style="opacity:1;fill:#93877c;fill-opacity:1;fill-rule:evenodd;stroke-width:1.2;stroke-linecap:round;stroke-linejoin:round;stroke-miterlimit:3;paint-order:stroke fill markers"
					d="m 121.17917,97.102082 c 1.68034,-1.148814 2.82271,-2.47309 3.43958,-3.96875 v -1.852083 c -1.6617,-0.451967 -3.51661,-0.643429 -3.43958,-3.439583 v -8.466667 h -3.175 v 6.879167 H 114.3 v 5.027083 h 3.70417 c -0.36963,1.629617 -0.91854,3.249515 -3.43959,4.7625 v 2.263545 h 5.55625 z"
					id="path13555"
				/><path
					style="opacity:1;fill:#ad401b;fill-opacity:1;fill-rule:evenodd;stroke-width:1.24529;stroke-linecap:round;stroke-linejoin:round;stroke-miterlimit:3;paint-order:stroke fill markers"
					d="M 114.3,86.254167 116.29456,88.9 118.00417,86.254167 Z"
					id="path13557"
				/><circle
					style="opacity:1;fill:#694b53;fill-opacity:1;fill-rule:evenodd;stroke-width:1.2;stroke-linecap:round;stroke-linejoin:round;stroke-miterlimit:3;paint-order:stroke fill markers"
					id="circle13559"
					cx="115.8875"
					cy="96.837502"
					r="1.3229166"
				/><circle
					style="opacity:1;fill:#694b53;fill-opacity:1;fill-rule:evenodd;stroke-width:1.2;stroke-linecap:round;stroke-linejoin:round;stroke-miterlimit:3;paint-order:stroke fill markers"
					id="circle13561"
					cx="120.65"
					cy="92.868752"
					r="1.3229166"
				/><path
					style="opacity:1;fill:#b3aca5;fill-opacity:1;fill-rule:evenodd;stroke-width:1.2;stroke-linecap:round;stroke-linejoin:round;stroke-miterlimit:3;paint-order:stroke fill markers"
					d="m 81.227082,56.885416 c 2.506964,-3.056673 5.250196,-5.821104 8.73125,-7.672917 -2.406359,-0.09683 -5.337592,0.7337 -8.73125,2.38125 z"
					id="path13563"
				/><path
					style="opacity:1;fill:#93877c;fill-opacity:1;fill-rule:evenodd;stroke-width:1.2;stroke-linecap:round;stroke-linejoin:round;stroke-miterlimit:3;paint-order:stroke fill markers"
					d="m 118.00417,73.289582 h 3.175 v -6.35 h -3.175 z"
					id="path13565"
				/><path
					style="opacity:1;fill:#93877c;fill-opacity:1;fill-rule:evenodd;stroke-width:1.2;stroke-linecap:round;stroke-linejoin:round;stroke-miterlimit:3;paint-order:stroke fill markers"
					d="m 121.17917,60.854166 h -3.175 v -6.085417 h 3.175 z"
					id="path13567"
				/><path
					style="opacity:1;fill:#ad401b;fill-opacity:1;fill-rule:evenodd;stroke-width:1.2;stroke-linecap:round;stroke-linejoin:round;stroke-miterlimit:3;paint-order:stroke fill markers"
					d="m 114.56458,37.041666 h 3.43959 l -1.5875,2.74963 z"
					id="path13569"
				/><path
					style="opacity:1;fill:#da7223;fill-opacity:1;fill-rule:evenodd;stroke-width:1.2;stroke-linecap:round;stroke-linejoin:round;stroke-miterlimit:3;paint-order:stroke fill markers"
					d="m 114.56458,37.041666 v -3.439583 h 3.43959 v 3.439588 z"
					id="path13571"
				/><path
					style="opacity:1;fill:#da7223;fill-opacity:1;fill-rule:evenodd;stroke-width:1.2;stroke-linecap:round;stroke-linejoin:round;stroke-miterlimit:3;paint-order:stroke fill markers"
					d="m 110.86042,30.95625 h -2.38125 v -2.910417 l 3.96875,-3.175 H 114.3 v 2.38125 l -2.91042,3.175 z"
					id="path13573"
				/><path
					style="opacity:1;fill:#ad401b;fill-opacity:1;fill-rule:evenodd;stroke-width:1.2;stroke-linecap:round;stroke-linejoin:round;stroke-miterlimit:3;paint-order:stroke fill markers"
					d="m 114.3,27.252083 v 3.704167 h -3.43958 c 0.32512,-2.92928 1.8622,-3.358301 3.43958,-3.704167 z"
					id="path13575"
				/><path
					style="opacity:1;fill:#da7223;fill-opacity:1;fill-rule:evenodd;stroke-width:1.2;stroke-linecap:round;stroke-linejoin:round;stroke-miterlimit:3;paint-order:stroke fill markers"
					d="m 105.03958,24.870833 h -2.91041 V 22.225 l 3.96875,-3.96875 h 2.64583 v 2.38125 l -2.11667,3.175 z"
					id="path13577"
				/><path
					style="opacity:1;fill:#ad401b;fill-opacity:1;fill-rule:evenodd;stroke-width:1.2;stroke-linecap:round;stroke-linejoin:round;stroke-miterlimit:3;paint-order:stroke fill markers"
					d="m 107.42083,24.870833 1.32292,-2.116667 V 20.6375 c -2.1211,0.383469 -3.54921,1.570383 -3.70417,4.233333 z"
					id="path13579"
				/><path
					style="opacity:1;fill:#da7223;fill-opacity:1;fill-rule:evenodd;stroke-width:1.2;stroke-linecap:round;stroke-linejoin:round;stroke-miterlimit:3;paint-order:stroke fill markers"
					d="m 97.631249,18.785416 h -4.497917 v -3.96875 c 2.427152,-3.216306 4.146056,-4.19151 5.820833,-5.0270828 h 5.291665 v 1.8520838 l -3.43958,3.439583 z"
					id="path13581"
				/><path
					style="opacity:1;fill:#ad401b;fill-opacity:1;fill-rule:evenodd;stroke-width:1.2;stroke-linecap:round;stroke-linejoin:round;stroke-miterlimit:3;paint-order:stroke fill markers"
					d="m 97.631249,18.785416 h 4.497921 v -4.233333 l 2.11666,-2.116666 v -0.79375 c -1.58952,0.564928 -3.44116,1.495534 -4.769759,2.917879 -0.919955,0.984869 -1.62999,2.271695 -1.844822,4.22587 z"
					id="path13583"
				/><path
					style="opacity:1;fill:#c01313;fill-opacity:1;fill-rule:evenodd;stroke-width:1.2;stroke-linecap:round;stroke-linejoin:round;stroke-miterlimit:3;paint-order:stroke fill markers"
					d="m 17.197916,91.281249 v -3.175 H 20.6375 v 3.175 z"
					id="path13585"
				/></g
			><g id="g13341"
				><path
					style="opacity:1;fill:#ad401b;fill-opacity:1;fill-rule:evenodd;stroke:none;stroke-width:1.2;stroke-linecap:round;stroke-linejoin:round;stroke-miterlimit:3;stroke-opacity:1;paint-order:stroke fill markers"
					d="M 70.114582,117.73958 63.499999,87.312499 44.979166,89.958332 47.624999,120.38542 Z"
					id="path165084"
				/><path
					style="opacity:1;fill:#1c120a;fill-opacity:1;fill-rule:evenodd;stroke:none;stroke-width:1.2;stroke-linecap:round;stroke-linejoin:round;stroke-miterlimit:3;stroke-opacity:1;paint-order:stroke fill markers"
					d="M 47.889583,112.97708 V 91.016666 H 66.939582 L 65.592581,85.989582 H 42.333333 v 27.781248 z"
					id="path165005"
				/><path
					style="opacity:1;fill:#961311;fill-opacity:1;fill-rule:evenodd;stroke:none;stroke-width:1.2;stroke-linecap:round;stroke-linejoin:round;stroke-miterlimit:3;stroke-opacity:1;paint-order:stroke fill markers"
					d="m 19.579166,34.13125 v -3.439584 c 3.521298,-4.874614 7.0645,-7.856242 9.748553,-10.32527 6.288123,-5.784368 9.269169,-7.824578 14.857697,-12.1643128 V 11.90625 L 37.041666,26.458333 23.8125,35.71875 Z"
					id="path180611"
				/><path
					style="opacity:1;fill:#4e2723;fill-opacity:1;fill-rule:evenodd;stroke:none;stroke-width:1.2;stroke-linecap:round;stroke-linejoin:round;stroke-miterlimit:3;stroke-opacity:1;paint-order:stroke fill markers"
					d="M 11.377083,41.010416 V 36.5125 c 2.27639,-2.760784 5.062366,-4.607924 8.202083,-5.820834 v 3.439584 l -6.349999,6.879166 z"
					id="path180123"
				/><path
					style="opacity:1;fill:#4e2723;fill-opacity:1;fill-rule:evenodd;stroke:none;stroke-width:1.2;stroke-linecap:round;stroke-linejoin:round;stroke-miterlimit:3;stroke-opacity:1;paint-order:stroke fill markers"
					d="m 23.8125,34.13125 c 2.042773,-3.57815 5.695307,-7.350601 9.260416,-11.1125 v 5.027083 H 43.127083 L 37.041666,35.71875 H 23.8125 Z"
					id="path180248"
				/><path
					style="opacity:1;fill:#3a0100;fill-opacity:1;fill-rule:evenodd;stroke:none;stroke-width:1.2;stroke-linecap:round;stroke-linejoin:round;stroke-miterlimit:3;stroke-opacity:1;paint-order:stroke fill markers"
					d="m 38.89375,16.933333 5.291666,-5.027083 v 4.233333 l -5.55625,5.291667 z"
					id="path180540"
				/><path
					style="opacity:1;fill:#76625b;fill-opacity:1;fill-rule:evenodd;stroke-width:1.2;stroke-linecap:round;stroke-linejoin:round;stroke-miterlimit:3;paint-order:stroke fill markers"
					d="m 124.61875,99.218749 c -0.11207,2.952501 -2.03044,6.605961 -4.44707,9.977511 -1.95939,2.73364 -4.19754,5.71188 -7.1946,6.95582 H 98.160415 c -2.037305,-0.61135 -4.289783,-2.16152 -6.671933,-4.55416 -2.094272,-1.81327 -3.899852,-4.02689 -4.969733,-6.82292 2.805209,-4.62545 5.964505,-7.094373 9.260416,-8.731251 1.665798,2e-6 3.210958,10e-7 4.762505,0 4.44683,-0.672162 4.60189,-4.047006 6.87916,-6.085417 l 2.38125,7.9375 z"
					id="path10908"
				/><path
					style="opacity:1;fill:#b3aca5;fill-opacity:1;fill-rule:evenodd;stroke-width:1.2;stroke-linecap:round;stroke-linejoin:round;stroke-miterlimit:3;paint-order:stroke fill markers"
					d="m 99.747915,97.895832 h -3.704166 c -3.971148,2.764148 -5.214748,4.866878 -6.085417,6.879168 0.608407,1.70554 1.615078,3.47888 3.704426,5.30169 1.338221,1.16751 2.847598,2.50188 5.026824,3.69414 h 3.968748 l 2.38125,-2.38125 z"
					id="path10906"
				/><path
					style="opacity:1;fill:#e2ccb6;fill-opacity:1;fill-rule:evenodd;stroke-width:1.2;stroke-linecap:round;stroke-linejoin:round;stroke-miterlimit:3;paint-order:stroke fill markers"
					d="m 73.818749,37.835416 3.439583,-2.645833 29.897918,-0.79375 14.55208,14.552083 1.32292,39.6875 1.5875,2.749629 v 7.833704 c -1.39089,2.541031 -2.86094,5.024101 -4.5166,7.365701 -2.29086,3.23997 -5.16726,6.22435 -9.24173,7.18638 h -8.20209 c -4.366058,-2.85827 -8.406155,-5.75 -8.995831,-8.99583 1.241636,-2.55091 3.483466,-4.77404 6.085416,-6.879168 h 3.704165 c 3.21591,-2.199295 3.7688,-6.733149 4.49792,-11.1125 V 53.445833 c 0.0508,-3.521806 -1.69489,-4.449839 -4.23333,-4.233334 H 89.95833 l -2.962318,0.79375 -5.76893,2.645834 -3.175,-1.058334 z"
					id="path7451"
				/><path
					style="opacity:1;fill:#c01313;fill-opacity:1;fill-rule:evenodd;stroke-width:1.2;stroke-linecap:round;stroke-linejoin:round;stroke-miterlimit:3;paint-order:stroke fill markers"
					d="M 26.722916,94.456249 H 30.1625 v 6.350001 l -4.582718,-2.645835 z"
					id="path11866"
				/><path
					style="opacity:1;fill:#4e2723;fill-opacity:1;fill-rule:evenodd;stroke-width:1.2;stroke-linecap:round;stroke-linejoin:round;stroke-miterlimit:3;paint-order:stroke fill markers"
					d="M 124.61875,82.814582 V 43.127083 c -2.44491,-7.566729 -6.584,-10.881452 -10.05417,-15.875 l -2.11666,-2.116667 -3.70417,-3.704166 -2.91042,-2.645834 c -1.23931,-0.819005 -2.49325,-1.718419 -3.70416,-2.38125 l -8.202088,-2.645833 h -4.7625 l -11.1125,4.7625 5.291667,3.704167 h 12.964583 l 10.847918,9.525 9.26042,11.906249 3.96875,5.291667 v 34.395833 l 3.96875,2.645833 z"
					id="path8401"
				/><path
					style="fill:#271f11;fill-rule:evenodd;stroke-width:1.2;stroke-linecap:round;stroke-linejoin:round;stroke-miterlimit:3;paint-order:stroke fill markers;opacity:1"
					d="M 66.410416,30.95625 V 28.045833 H 79.374999 L 81.227082,22.225 h 15.610417 l 5.027081,1.5875 2.11667,1.322916 4.49792,3.175 3.43958,2.910417 2.64583,2.645833 3.175,3.96875 3.43959,6.085417 v 35.454166 h -3.175 v -34.925 L 104.51042,34.395833 H 70.114582 Z"
					id="path513"
				/><path
					style="opacity:1;fill:#b3aca5;fill-opacity:1;fill-rule:evenodd;stroke:none;stroke-width:1.2;stroke-linecap:round;stroke-linejoin:round;stroke-miterlimit:3;stroke-opacity:1;paint-order:stroke fill markers"
					d="M 74.083332,38.629166 76.993749,36.5125 h 27.252081 c 3.8857,2.309952 7.65453,4.823423 10.31875,9.260416 h 2.11667 l -0.85074,-3.175 -9.99718,-9.525 L 103.1875,31.75 H 71.437499 v 10.583333 z"
					id="path182294"
				/><path
					style="opacity:1;fill:#b3aca5;fill-opacity:1;fill-rule:evenodd;stroke:none;stroke-width:1.2;stroke-linecap:round;stroke-linejoin:round;stroke-miterlimit:3;stroke-opacity:1;paint-order:stroke fill markers"
					d="m 91.545832,11.90625 c -2.846727,2.899031 -5.565783,5.244829 -9.525,12.964583 H 67.468749 v -7.672917 l 13.229167,-7.143749 z"
					id="path181114"
				/><path
					style="opacity:1;fill:#93877c;fill-opacity:1;fill-rule:evenodd;stroke:none;stroke-width:1.2;stroke-linecap:round;stroke-linejoin:round;stroke-miterlimit:3;stroke-opacity:1;paint-order:stroke fill markers"
					d="m 66.410416,28.045833 h 12.964583 l 2.645833,-3.175 H 69.056249 V 18.25625 c 3.988596,-2.261613 8.082605,-4.425622 12.435417,-6.35 h 10.054166 c 1.248517,-1.470457 3.035584,-2.5325303 5.027083,-3.4395834 L 89.693749,7.1437499 77.787499,8.2020832 63.499999,15.875 64.822916,29.104166 Z"
					id="path180970"
				/><path
					style="opacity:1;fill:#76625b;fill-opacity:1;fill-rule:evenodd;stroke:none;stroke-width:1.2;stroke-linecap:round;stroke-linejoin:round;stroke-miterlimit:3;stroke-opacity:1;paint-order:stroke fill markers"
					d="m 66.410416,28.045833 v -11.90625 l -8.466667,4.888232 2.305841,8.605518 z"
					id="path180968"
				/><path
					style="opacity:1;fill:#961311;fill-opacity:1;fill-rule:evenodd;stroke:none;stroke-width:1.2;stroke-linecap:round;stroke-linejoin:round;stroke-miterlimit:3;stroke-opacity:1;paint-order:stroke fill markers"
					d="m 55.562499,25.135416 c -1.455784,-4.861162 1.735765,-8.536812 8.202084,-11.377083 5.009146,-2.810349 9.927366,-5.7389405 15.610416,-7.6729164 h 17.197916 v 2.38125 H 83.079166 c -8.324063,3.5401204 -15.466938,7.5193634 -22.225,11.6416664 -0.732437,1.757383 -1.066345,3.40307 -1.322917,5.027083 z"
					id="path180966"
				/><path
					style="opacity:1;fill:#4e2723;fill-opacity:1;fill-rule:evenodd;stroke:none;stroke-width:1.2;stroke-linecap:round;stroke-linejoin:round;stroke-miterlimit:3;stroke-opacity:1;paint-order:stroke fill markers"
					d="M 44.185416,28.045833 V 23.01875 c 6.456435,-3.837645 12.931735,-7.4728 19.579167,-9.260417 -3.524251,2.309944 -7.791696,4.055153 -8.202084,8.73125 v 2.645833 l -0.264583,4.7625 z"
					id="path180250"
				/><path
					style="opacity:1;fill:#2a1f1a;fill-opacity:1;fill-rule:evenodd;stroke:none;stroke-width:1.2;stroke-linecap:round;stroke-linejoin:round;stroke-miterlimit:3;stroke-opacity:1;paint-order:stroke fill markers"
					d="m 66.410416,48.947916 h -0.264584 v 3.704167 h 2.910417 v 5.55625 H 55.297916 v -9.260417 h -2.910417 l 1.322917,-1.322917 V 39.6875 L 34.925,45.772916 H 11.377083 v -4.7625 c 1.908531,-3.891212 4.744659,-5.986602 8.202083,-6.879166 H 23.8125 35.189583 l 18.520833,-6.085417 1.852083,-2.910417 h 6.879167 v 2.910417 h 3.96875 v 8.995833 z"
					id="path178981"
				/><path
					style="opacity:1;fill:#961311;fill-opacity:1;fill-rule:evenodd;stroke:none;stroke-width:1.2;stroke-linecap:round;stroke-linejoin:round;stroke-miterlimit:3;stroke-opacity:1;paint-order:stroke fill markers"
					d="m 44.449999,37.041666 0.529167,-8.995833 h 3.175 l -1.058333,8.995833 z"
					id="path176893"
				/><path
					style="opacity:1;fill:#600000;fill-opacity:1;fill-rule:evenodd;stroke:none;stroke-width:1.2;stroke-linecap:round;stroke-linejoin:round;stroke-miterlimit:3;stroke-opacity:1;paint-order:stroke fill markers"
					d="m 41.274999,37.041666 h 3.175 l 0.529167,-8.995833 h -1.852083 l -1.852084,1.322917 z"
					id="path176837"
				/><path
					style="opacity:1;fill:#c01313;fill-opacity:1;fill-rule:evenodd;stroke-width:1.2;stroke-linecap:round;stroke-linejoin:round;stroke-miterlimit:3;paint-order:stroke fill markers"
					d="M 12.964583,79.374999 H 20.6375 v 2.38125 l -10.583333,2.835794 1.114323,-4.158711 z"
					id="path11242"
				/><path
					style="opacity:1;fill:#3a0100;fill-opacity:1;fill-rule:evenodd;stroke:none;stroke-width:1.2;stroke-linecap:round;stroke-linejoin:round;stroke-miterlimit:3;stroke-opacity:1;paint-order:stroke fill markers"
					d="m 11.377083,88.106249 c 0.735677,-1.112612 1.417875,-2.277316 2.645833,-2.910417 H 20.6375 v -3.439583 h -7.14375 c -1.495772,0.576586 -2.095778,1.542803 -2.38125,2.645833 z"
					id="path165415"
				/><path
					style="opacity:1;fill:#961311;fill-rule:evenodd;stroke-width:1.2;stroke-linecap:round;stroke-linejoin:round;stroke-miterlimit:3;paint-order:stroke fill markers;fill-opacity:1"
					d="M 7.9374999,94.720832 C 9.0749002,92.454786 10.19308,90.059899 11.377083,88.106249 v -5.820833 c -0.132893,-1.415059 0.896699,-2.056997 1.5875,-2.910417 -1.579902,0.341298 -3.1357859,0.214118 -5.0270831,3.704167 z"
					id="path161309"
				/><path
					style="opacity:1;fill:#961311;fill-rule:evenodd;stroke-width:1.2;stroke-linecap:round;stroke-linejoin:round;stroke-miterlimit:3;paint-order:stroke fill markers;fill-opacity:1"
					d="m 17.197916,88.106249 v 7.9375 c -0.916405,2.890107 -1.045784,5.521841 -1.322916,8.202081 -1.388048,-2.19993 -1.743461,-4.941084 -2.116667,-7.672915 v -5.820833 c 0.673107,-1.810895 1.956792,-2.423708 3.439583,-2.645833 z"
					id="path161313"
				/><circle
					style="opacity:1;fill:#961311;fill-opacity:1;fill-rule:evenodd;stroke:#ba1313;stroke-width:1.18415;stroke-linecap:round;stroke-linejoin:round;stroke-miterlimit:3;stroke-opacity:1;paint-order:stroke fill markers"
					id="path161367"
					cx="24.870832"
					cy="40.481251"
					r="4.6995912"
				/><circle
					style="opacity:1;fill:#ce859b;fill-opacity:1;fill-rule:evenodd;stroke:none;stroke-width:0.6;stroke-linecap:round;stroke-linejoin:round;stroke-miterlimit:3;stroke-opacity:1;paint-order:stroke fill markers"
					id="circle161369"
					cx="24.870832"
					cy="40.745834"
					r="2.3812511"
				/><path
					style="opacity:1;fill:#961311;fill-opacity:1;fill-rule:evenodd;stroke:none;stroke-width:1.2;stroke-linecap:round;stroke-linejoin:round;stroke-miterlimit:3;stroke-opacity:1;paint-order:stroke fill markers"
					d="m 23.547916,91.281249 h 3.175 v 6.35 l 3.439584,3.175001 v 5.02708 c -2.682963,-1.80545 -5.125521,-3.63435 -6.614584,-5.55625 z"
					id="path163909"
				/><path
					style="opacity:1;fill:#c01313;fill-opacity:1;fill-rule:evenodd;stroke:none;stroke-width:1.2;stroke-linecap:round;stroke-linejoin:round;stroke-miterlimit:3;stroke-opacity:1;paint-order:stroke fill markers"
					d="m 35.71875,94.456249 h 4.497916 L 39.6875,102.39375 34.395833,96.837499 Z"
					id="path166038"
				/><path
					style="opacity:1;fill:#961311;fill-opacity:1;fill-rule:evenodd;stroke:none;stroke-width:1.2;stroke-linecap:round;stroke-linejoin:round;stroke-miterlimit:3;stroke-opacity:1;paint-order:stroke fill markers"
					d="m 38.89375,105.83333 v -5.29166 l -3.175,-3.175005 v -6.085416 h -2.645834 v 9.260421 c 1.59864,1.77857 3.548519,3.54204 5.820834,5.29166 z"
					id="path163911"
				/><path
					style="opacity:1;fill:#c01313;fill-opacity:1;fill-rule:evenodd;stroke-width:1.2;stroke-linecap:round;stroke-linejoin:round;stroke-miterlimit:3;paint-order:stroke fill markers"
					d="m 90.222916,88.106249 v 2.910417 h -5.027084 l 2.138601,-3.704167 z"
					id="path12598"
				/><path
					style="opacity:1;fill:#961311;fill-opacity:1;fill-rule:evenodd;stroke:none;stroke-width:1.2;stroke-linecap:round;stroke-linejoin:round;stroke-miterlimit:3;stroke-opacity:1;paint-order:stroke fill markers"
					d="m 80.168749,91.016666 5.820833,-5.820834 h 4.233334 v 2.910417 h -2.116667 l -2.910417,2.910417 z"
					id="path163913"
				/><path
					style="opacity:1;fill:#1c120a;fill-opacity:1;fill-rule:evenodd;stroke:none;stroke-width:1.2;stroke-linecap:round;stroke-linejoin:round;stroke-miterlimit:3;stroke-opacity:1;paint-order:stroke fill markers"
					d="m 89.429166,116.15208 h 4.233333 c -0.963623,2.48328 -2.732816,4.55419 -5.55625,6.08542 h -5.291667 v -3.175 z"
					id="path163917"
				/><path
					style="opacity:1;fill:#961311;fill-opacity:1;fill-rule:evenodd;stroke:none;stroke-width:1.2;stroke-linecap:round;stroke-linejoin:round;stroke-miterlimit:3;stroke-opacity:1;paint-order:stroke fill markers"
					d="m 82.814582,119.0625 h 3.704167 c 1.251029,-0.72333 2.401019,-1.53545 2.910417,-2.91042 h -6.614584 z"
					id="path163915"
				/><path
					style="opacity:1;fill:#76625b;fill-opacity:1;fill-rule:evenodd;stroke:none;stroke-width:1.2;stroke-linecap:round;stroke-linejoin:round;stroke-miterlimit:3;stroke-opacity:1;paint-order:stroke fill markers"
					d="m 81.491666,112.97708 3.439583,3.175 H 42.333333 l 1.852083,-3.175 z"
					id="path164461"
				/><path
					style="opacity:1;fill:#3a0100;fill-opacity:1;fill-rule:evenodd;stroke:none;stroke-width:1.2;stroke-linecap:round;stroke-linejoin:round;stroke-miterlimit:3;stroke-opacity:1;paint-order:stroke fill markers"
					d="m 35.71875,94.456249 h 3.96875 v -3.96875 h -3.96875 z"
					id="path165209"
				/><path
					style="opacity:1;fill:#2a1f1a;fill-opacity:1;fill-rule:evenodd;stroke:none;stroke-width:1.2;stroke-linecap:round;stroke-linejoin:round;stroke-miterlimit:3;stroke-opacity:1;paint-order:stroke fill markers"
					d="M 82.814582,116.15208 H 46.831249 c -1.041397,0.11541 -2.025403,-0.0329 -2.645833,-1.85208 V 87.841666 h 20.372917 c 0.227115,1.332874 0.41718,2.699424 1.587499,3.175 h 8.995834 v -14.2875 c -0.268919,-2.000219 -1.382533,-3.178765 -3.439584,-3.439584 h -2.645833 v 6.085417 3.439583 H 38.629166 L 35.189583,79.374999 H 23.547916 v 5.55625 h 3.175 v 3.175 h -3.175 v 3.175 H 38.89375 v 26.987501 c 0.34243,1.89531 0.59193,3.84486 3.968749,3.96875 H 82.81458 Z"
					id="path164119"
				/><path
					style="opacity:1;fill:#da7223;fill-opacity:1;fill-rule:evenodd;stroke:none;stroke-width:1.2;stroke-linecap:round;stroke-linejoin:round;stroke-miterlimit:3;stroke-opacity:1;paint-order:stroke fill markers"
					d="m 67.733332,112.97708 c -2.45089,-2.91743 -3.902078,-6.21946 -3.968749,-10.05416 l -3.96875,-3.704171 v -8.202083 h 15.345833 c -1.768478,1.20047 -2.505884,2.834825 -3.175,4.497916 v 3.96875 c 1.239442,4.402038 5.23773,8.940738 9.525,13.493748 z"
					id="path164594"
				/><path
					style="opacity:1;fill:#2a1f1a;fill-opacity:1;fill-rule:evenodd;stroke:none;stroke-width:1.2;stroke-linecap:round;stroke-linejoin:round;stroke-miterlimit:3;stroke-opacity:1;paint-order:stroke fill markers"
					d="m 59.795833,99.218749 h 3.96875 v 3.704171 h -3.96875 z"
					id="path164459"
				/><path
					style="opacity:1;fill:#3a0100;fill-opacity:1;fill-rule:evenodd;stroke:none;stroke-width:1.2;stroke-linecap:round;stroke-linejoin:round;stroke-miterlimit:3;stroke-opacity:1;paint-order:stroke fill markers"
					d="M 26.722916,94.456249 V 91.016666 H 30.1625 v 3.439583 z"
					id="path165411"
				/><path
					style="opacity:1;fill:#3a0100;fill-opacity:1;fill-rule:evenodd;stroke:none;stroke-width:1.2;stroke-linecap:round;stroke-linejoin:round;stroke-miterlimit:3;stroke-opacity:1;paint-order:stroke fill markers"
					d="M 17.197916,91.281249 H 20.6375 v 4.7625 h -3.439584 z"
					id="path165413"
				/><path
					style="opacity:1;fill:#2a1f1a;fill-opacity:1;fill-rule:evenodd;stroke:none;stroke-width:1.2;stroke-linecap:round;stroke-linejoin:round;stroke-miterlimit:3;stroke-opacity:1;paint-order:stroke fill markers"
					d="m 101.86458,52.387499 h -9.524998 c -1.887968,0.364533 -3.214585,1.130514 -4.233333,2.116667 l -5.291667,5.291667 c -0.59648,1.014546 -1.268534,1.781896 -1.5875,3.704166 v 12.435417 c 0.266822,1.738547 1.03553,3.170114 3.704167,3.439583 h 11.641666 v 3.704167 h -2.910416 v 2.116666 l 5.55625,3.207901 3.482661,-12.997484 -15.388911,-1.322917 1.322917,-9.260416 h 11.906254 l 2.64583,-10.583333 z"
					id="path169795"
				/><path
					style="opacity:1;fill:#76625b;fill-opacity:1;fill-rule:evenodd;stroke:none;stroke-width:1.2;stroke-linecap:round;stroke-linejoin:round;stroke-miterlimit:3;stroke-opacity:1;paint-order:stroke fill markers"
					d="m 93.6625,91.016667 5.820832,-10e-7 c 2.469058,-1.593376 4.526588,-3.388092 5.820838,-5.55625 v -9.789584 c -0.60648,-0.896285 -1.31604,-1.728419 -2.38125,-2.38125 H 90.222916 v -6.35 h 3.704166 v 3.175 H 105.30417 V 54.768749 c -0.3131,-1.171911 -1.14799,-2.107067 -3.43959,-2.38125 v 2.116667 c -2.584373,3.750244 -6.504125,6.620717 -10.583331,9.260417 h -3.439583 c -0.54014,0.09716 -1.02754,0.283352 -1.322917,0.79375 v 9.789583 c 0.201917,0.787692 0.526438,1.445485 1.5875,1.322916 h 9.789583 c 0.991024,0.266889 1.403617,0.716843 1.322917,1.322917 v 8.202083 l -5.556249,10e-7 z"
					id="path169793"
				/><circle
					style="opacity:1;fill:#961311;fill-opacity:1;fill-rule:evenodd;stroke:none;stroke-width:1.37143;stroke-linecap:round;stroke-linejoin:round;stroke-miterlimit:3;stroke-opacity:1;paint-order:stroke fill markers"
					id="path170271"
					cx="6.8791666"
					cy="44.450001"
					r="2.1166666"
				/><circle
					style="opacity:1;fill:#961311;fill-opacity:1;fill-rule:evenodd;stroke:none;stroke-width:1.2;stroke-linecap:round;stroke-linejoin:round;stroke-miterlimit:3;stroke-opacity:1;paint-order:stroke fill markers"
					id="path170273"
					cx="12.435416"
					cy="50.799999"
					r="1.5875"
				/><circle
					style="opacity:1;fill:#961311;fill-opacity:1;fill-rule:evenodd;stroke:none;stroke-width:1.2;stroke-linecap:round;stroke-linejoin:round;stroke-miterlimit:3;stroke-opacity:1;paint-order:stroke fill markers"
					id="path170275"
					cx="18.520834"
					cy="56.356251"
					r="1.5875"
				/><circle
					style="opacity:1;fill:#961311;fill-opacity:1;fill-rule:evenodd;stroke:none;stroke-width:1.2;stroke-linecap:round;stroke-linejoin:round;stroke-miterlimit:3;stroke-opacity:1;paint-order:stroke fill markers"
					id="path170277"
					cx="27.78125"
					cy="53.710415"
					r="2.1166666"
				/><path
					style="opacity:1;fill:#961311;fill-opacity:1;fill-rule:evenodd;stroke:none;stroke-width:1.2;stroke-linecap:round;stroke-linejoin:round;stroke-miterlimit:3;stroke-opacity:1;paint-order:stroke fill markers"
					d="m 11.377083,54.768749 c -1.7768304,1.296792 -2.8364949,3.08725 -2.9104164,5.55625 -0.7629236,1.576719 -1.891582,1.588368 -2.6623101,1.317257 -0.7450809,-0.26209 -1.6015471,-1.104961 -1.5710232,-2.904757 1.6428676,-2.908312 4.2318812,-3.785135 7.1437497,-3.96875 z"
					id="path170279"
				/><path
					style="opacity:1;fill:#76625b;fill-opacity:1;fill-rule:evenodd;stroke:none;stroke-width:1.2;stroke-linecap:round;stroke-linejoin:round;stroke-miterlimit:3;stroke-opacity:1;paint-order:stroke fill markers"
					d="m 69.056249,73.289582 v -3.175 h 6.085417 0.264583 v -3.175 H 60.854166 v 7.14375 l 6.614583,1.772373 z"
					id="path170352"
				/><path
					style="opacity:1;fill:#961311;fill-opacity:1;fill-rule:evenodd;stroke:none;stroke-width:1.2;stroke-linecap:round;stroke-linejoin:round;stroke-miterlimit:3;stroke-opacity:1;paint-order:stroke fill markers"
					d="M 53.710416,43.127083 V 39.6875 h -3.175 v 3.439583 z"
					id="path175471"
				/><path
					style="opacity:1;fill:#2a1f1a;fill-opacity:1;fill-rule:evenodd;stroke:none;stroke-width:1.2;stroke-linecap:round;stroke-linejoin:round;stroke-miterlimit:3;stroke-opacity:1;paint-order:stroke fill markers"
					d="m 69.056249,73.289582 h -6.614583 v -6.35 h 12.964583 c 4.378823,-3.455762 5.080478,-6.754136 5.820833,-10.054166 v -11.1125 c -1.291572,-3.21145 -3.275054,-6.194837 -6.614583,-8.73125 h -8.202083 v 11.90625 h 5.820833 V 61.912499 H 53.710416 v 6.35 c 0.61979,1.140548 1.365756,2.166452 3.439583,1.985844 v 6.745406 c 0.732201,1.439045 1.825655,2.515332 4.124447,2.38125 h 7.781803 z"
					id="path170350"
				/><path
					style="opacity:1;fill:#f899b0;fill-opacity:1;fill-rule:evenodd;stroke:none;stroke-width:1.2;stroke-linecap:round;stroke-linejoin:round;stroke-miterlimit:3;stroke-opacity:1;paint-order:stroke fill markers"
					d="m 44.185417,78.052083 h 2.910416 V 79.375 l -1.322917,1.322916 -1.587499,-1.587499 z"
					id="path170492"
				/><path
					style="opacity:1;fill:#961311;fill-opacity:1;fill-rule:evenodd;stroke:none;stroke-width:1.2;stroke-linecap:round;stroke-linejoin:round;stroke-miterlimit:3;stroke-opacity:1;paint-order:stroke fill markers"
					d="M 38.89375,70.908332 35.189583,70.379166 14.022916,63.764583 H 11.1125 v -2.910417 h 29.897916 l 4.7625,1.276109 0.79375,2.163474 0.529167,1.322917 v 1.058333 7.9375 h -2.910417 l -2.910417,-3.704167 z"
					id="path170556"
				/><path
					style="opacity:1;fill:#c01313;fill-opacity:1;fill-rule:evenodd;stroke:none;stroke-width:1.2;stroke-linecap:round;stroke-linejoin:round;stroke-miterlimit:3;stroke-opacity:1;paint-order:stroke fill markers"
					d="m 47.095833,78.052082 v -3.439583 h -2.910417 v 3.439583 z"
					id="path170494"
				/><path
					style="opacity:1;fill:#3a0100;fill-opacity:1;fill-rule:evenodd;stroke:none;stroke-width:1.2;stroke-linecap:round;stroke-linejoin:round;stroke-miterlimit:3;stroke-opacity:1;paint-order:stroke fill markers"
					d="m 44.185416,74.612499 v -6.879167 c -0.577094,-3.581599 -3.054009,-3.5475 -5.291666,-3.968749 v 7.143749 c 2.131343,1.055152 3.745515,2.363039 5.291666,3.704167 z"
					id="path170550"
				/><path
					style="opacity:1;fill:#3a0100;fill-opacity:1;fill-rule:evenodd;stroke:none;stroke-width:1.2;stroke-linecap:round;stroke-linejoin:round;stroke-miterlimit:3;stroke-opacity:1;paint-order:stroke fill markers"
					d="m 47.095833,66.674999 c -0.554949,-2.910175 -2.2525,-4.451479 -6.085416,-5.820832 l 3.174999,-10e-7 c 2.188648,0.531973 3.181075,2.44649 2.910417,5.820833 z"
					id="path170552"
				/><path
					style="opacity:1;fill:#600000;fill-opacity:1;fill-rule:evenodd;stroke:none;stroke-width:1.2;stroke-linecap:round;stroke-linejoin:round;stroke-miterlimit:3;stroke-opacity:1;paint-order:stroke fill markers"
					d="m 14.022916,63.764583 v 6.614583 c 0.189333,2.231774 1.348615,3.538448 3.704167,3.704166 H 31.75 c 1.549469,-0.592078 3.099502,-1.183257 3.439583,-3.704166 v -6.614583 z"
					id="path170554"
				/><path
					style="opacity:1;fill:#c01313;fill-opacity:1;fill-rule:evenodd;stroke:none;stroke-width:1.2;stroke-linecap:round;stroke-linejoin:round;stroke-miterlimit:3;stroke-opacity:1;paint-order:stroke fill markers"
					d="m 14.022916,60.854166 v -2.645833 h 2.910417 v 2.645833 z"
					id="path172276"
				/><path
					style="opacity:1;fill:#c01313;fill-opacity:1;fill-rule:evenodd;stroke:none;stroke-width:1.2;stroke-linecap:round;stroke-linejoin:round;stroke-miterlimit:3;stroke-opacity:1;paint-order:stroke fill markers"
					d="m 19.976041,60.854166 v -2.645833 h 2.910417 v 2.645833 z"
					id="path172424"
				/><path
					style="opacity:1;fill:#c01313;fill-opacity:1;fill-rule:evenodd;stroke:none;stroke-width:1.2;stroke-linecap:round;stroke-linejoin:round;stroke-miterlimit:3;stroke-opacity:1;paint-order:stroke fill markers"
					d="m 26.061458,60.854166 v -2.645833 h 2.910417 v 2.645833 z"
					id="path172426"
				/><path
					style="opacity:1;fill:#c01313;fill-opacity:1;fill-rule:evenodd;stroke:none;stroke-width:1.2;stroke-linecap:round;stroke-linejoin:round;stroke-miterlimit:3;stroke-opacity:1;paint-order:stroke fill markers"
					d="m 32.146875,60.854166 v -2.645833 h 2.910417 v 2.645833 z"
					id="path172428"
				/><path
					style="opacity:1;fill:#c01313;fill-opacity:1;fill-rule:evenodd;stroke:none;stroke-width:1.31453;stroke-linecap:round;stroke-linejoin:round;stroke-miterlimit:3;stroke-opacity:1;paint-order:stroke fill markers"
					d="m 14.022916,48.947916 v -3.174999 h 2.910417 v 3.174999 z"
					id="path172430"
				/><path
					style="opacity:1;fill:#c01313;fill-opacity:1;fill-rule:evenodd;stroke:none;stroke-width:1.31453;stroke-linecap:round;stroke-linejoin:round;stroke-miterlimit:3;stroke-opacity:1;paint-order:stroke fill markers"
					d="m 19.976041,48.947916 v -3.174999 h 2.910417 v 3.174999 z"
					id="path172432"
				/><path
					style="opacity:1;fill:#c01313;fill-opacity:1;fill-rule:evenodd;stroke:none;stroke-width:1.31453;stroke-linecap:round;stroke-linejoin:round;stroke-miterlimit:3;stroke-opacity:1;paint-order:stroke fill markers"
					d="m 26.061458,48.947916 v -3.174999 h 2.910417 v 3.174999 z"
					id="path172434"
				/><path
					style="opacity:1;fill:#c01313;fill-opacity:1;fill-rule:evenodd;stroke:none;stroke-width:1.31453;stroke-linecap:round;stroke-linejoin:round;stroke-miterlimit:3;stroke-opacity:1;paint-order:stroke fill markers"
					d="m 32.146875,48.947916 v -3.174999 h 2.910417 v 3.174999 z"
					id="path172436"
				/><path
					style="opacity:1;fill:#3f2a1f;fill-opacity:1;fill-rule:evenodd;stroke:none;stroke-width:1.2;stroke-linecap:round;stroke-linejoin:round;stroke-miterlimit:3;stroke-opacity:1;paint-order:stroke fill markers"
					d="m 38.629166,58.208333 v 2.645833 H 34.925 v -2.645833 z"
					id="path172438"
				/><path
					style="opacity:1;fill:#93877c;fill-opacity:1;fill-rule:evenodd;stroke:none;stroke-width:1.2;stroke-linecap:round;stroke-linejoin:round;stroke-miterlimit:3;stroke-opacity:1;paint-order:stroke fill markers"
					d="m 38.629166,58.208333 h 5.55625 v 2.645833 h -5.55625 z"
					id="path172548"
				/><path
					style="opacity:1;fill:#ad401b;fill-opacity:1;fill-rule:evenodd;stroke:none;stroke-width:1.2;stroke-linecap:round;stroke-linejoin:round;stroke-miterlimit:3;stroke-opacity:1;paint-order:stroke fill markers"
					d="m 34.925,58.208333 h 3.704166 V 48.947916 H 34.925 Z"
					id="path172604"
				/><path
					style="opacity:1;fill:#99707b;fill-opacity:1;fill-rule:evenodd;stroke:none;stroke-width:1.2;stroke-linecap:round;stroke-linejoin:round;stroke-miterlimit:3;stroke-opacity:1;paint-order:stroke fill markers"
					d="m 38.629166,53.181249 v -4.233333 h 11.377083 l -2.1386,3.704167 -8.973899,1.322916 z"
					id="path173393"
				/><path
					style="opacity:1;fill:#694b53;fill-opacity:1;fill-rule:evenodd;stroke:none;stroke-width:1.2;stroke-linecap:round;stroke-linejoin:round;stroke-miterlimit:3;stroke-opacity:1;paint-order:stroke fill markers"
					d="m 38.629166,55.562499 v -2.38125 c 3.956447,-0.174026 7.706374,-1.14679 10.054167,-4.233332 H 52.3875 l 0.793749,2.116666 -1.852083,3.175 -4.233333,2.116666 -7.14375,0.264584 z"
					id="path173337"
				/><path
					style="opacity:1;fill:#b3aca5;fill-opacity:1;fill-rule:evenodd;stroke:none;stroke-width:1.2;stroke-linecap:round;stroke-linejoin:round;stroke-miterlimit:3;stroke-opacity:1;paint-order:stroke fill markers"
					d="m 38.629166,58.208333 v -2.645834 h 8.202083 C 49.180456,54.483758 51.306614,53.472285 52.3875,50.8 l 0,-1.852083 h 2.910417 l -10e-7,3.439582 c -1.491833,2.466217 -3.21652,4.779583 -6.879167,5.820834 z"
					id="path173281"
				/><path
					style="opacity:1;fill:#694b53;fill-opacity:1;fill-rule:evenodd;stroke:none;stroke-width:1.2;stroke-linecap:round;stroke-linejoin:round;stroke-miterlimit:3;stroke-opacity:1;paint-order:stroke fill markers"
					d="m 38.1,39.6875 8.995833,0 0,3.968749 H 37.30625 l 0.264583,-3.439583 z"
					id="path175359"
				/><path
					style="opacity:1;fill:#b3aca5;fill-opacity:1;fill-rule:evenodd;stroke:none;stroke-width:1.2;stroke-linecap:round;stroke-linejoin:round;stroke-miterlimit:3;stroke-opacity:1;paint-order:stroke fill markers"
					d="m 47.095833,39.6875 h 3.439584 l -1e-6,3.704166 h -3.439583 z"
					id="path175361"
				/><path
					style="opacity:1;fill:#93877c;fill-opacity:1;fill-rule:evenodd;stroke:none;stroke-width:1.2;stroke-linecap:round;stroke-linejoin:round;stroke-miterlimit:3;stroke-opacity:1;paint-order:stroke fill markers"
					d="m 43.920833,48.947916 3.175,-3.175 h 6.614583 V 43.127083 H 43.656247 l -6.614581,1.772372 1.5875,4.048461 z"
					id="path175193"
				/><path
					style="opacity:1;fill:#b3aca5;fill-opacity:1;fill-rule:evenodd;stroke:none;stroke-width:1.2;stroke-linecap:round;stroke-linejoin:round;stroke-miterlimit:3;stroke-opacity:1;paint-order:stroke fill markers"
					d="M 38.629166,48.947916 H 34.925 v -7.672917 c 0.381303,-1.000976 1.178658,-1.396567 2.116666,-1.587499 H 38.1 c 0.01296,1.25635 -0.21014,2.555594 1.852083,3.439583 h 3.704166 c -3.44008,1.414438 -4.491053,3.540902 -5.027083,5.820833 z"
					id="path175191"
				/><path
					style="opacity:1;fill:#76625b;fill-opacity:1;fill-rule:evenodd;stroke:none;stroke-width:1.2;stroke-linecap:round;stroke-linejoin:round;stroke-miterlimit:3;stroke-opacity:1;paint-order:stroke fill markers"
					d="m 43.920833,48.947916 3.175,-3.175 h 6.614583 v 1.852083 l -1.322917,1.322917 z"
					id="path175249"
				/><path
					style="opacity:1;fill:#3a0100;fill-opacity:1;fill-rule:evenodd;stroke:none;stroke-width:1.2;stroke-linecap:round;stroke-linejoin:round;stroke-miterlimit:3;stroke-opacity:1;paint-order:stroke fill markers"
					d="m 53.710416,39.6875 h 2.645833 l 1.852084,1.852083 -1.5875,1.5875 h -2.910417 z"
					id="path175473"
				/><path
					style="opacity:1;fill:#600000;fill-opacity:1;fill-rule:evenodd;stroke:none;stroke-width:1.2;stroke-linecap:round;stroke-linejoin:round;stroke-miterlimit:3;stroke-opacity:1;paint-order:stroke fill markers"
					d="M 35.189583,37.041666 V 34.13125 L 38.1,31.75 v 5.291666 z"
					id="path176779"
				/><path
					style="opacity:1;fill:#961311;fill-opacity:1;fill-rule:evenodd;stroke:none;stroke-width:1.2;stroke-linecap:round;stroke-linejoin:round;stroke-miterlimit:3;stroke-opacity:1;paint-order:stroke fill markers"
					d="m 38.1,37.041666 h 3.174999 V 29.36875 L 38.1,31.75 Z"
					id="path176781"
				/><path
					style="opacity:1;fill:#961311;fill-opacity:1;fill-rule:evenodd;stroke:none;stroke-width:1.2;stroke-linecap:round;stroke-linejoin:round;stroke-miterlimit:3;stroke-opacity:1;paint-order:stroke fill markers"
					d="m 50.270833,35.189583 3.175,-1.852083 0.264583,-5.291667 h -2.116667 z"
					id="path177005"
				/><path
					style="opacity:1;fill:#600000;fill-opacity:1;fill-rule:evenodd;stroke:none;stroke-width:1.2;stroke-linecap:round;stroke-linejoin:round;stroke-miterlimit:3;stroke-opacity:1;paint-order:stroke fill markers"
					d="M 47.095833,37.041666 50.762008,34.925 51.593749,28.045833 h -3.439583 z"
					id="path176949"
				/><path
					style="opacity:1;fill:#600000;fill-opacity:1;fill-rule:evenodd;stroke:none;stroke-width:1.2;stroke-linecap:round;stroke-linejoin:round;stroke-miterlimit:3;stroke-opacity:1;paint-order:stroke fill markers"
					d="m 53.445833,33.3375 3.704166,-2.38125 v -2.910417 h -3.439583 z"
					id="path177115"
				/><path
					style="opacity:1;fill:#76625b;fill-opacity:1;fill-rule:evenodd;stroke:none;stroke-width:1.2;stroke-linecap:round;stroke-linejoin:round;stroke-miterlimit:3;stroke-opacity:1;paint-order:stroke fill markers"
					d="m 33.072916,28.045833 v -1.5875 l 11.1125,-10.31875 v 11.90625 z"
					id="path180252"
				/><path
					style="opacity:1;fill:#c01313;fill-opacity:1;fill-rule:evenodd;stroke:none;stroke-width:1.2;stroke-linecap:round;stroke-linejoin:round;stroke-miterlimit:3;stroke-opacity:1;paint-order:stroke fill markers"
					d="M 33.072916,26.458333 V 23.01875 l 5.820834,-6.085417 v 4.233333 z"
					id="path180469"
				/><path
					style="opacity:1;fill:#93877c;fill-opacity:1;fill-rule:evenodd;stroke:none;stroke-width:1.2;stroke-linecap:round;stroke-linejoin:round;stroke-miterlimit:3;stroke-opacity:1;paint-order:stroke fill markers"
					d="m 69.056249,37.041666 h 3.96875 c 0.216851,-2.140782 1.271253,-3.373418 3.175,-3.704166 H 103.1875 c 5.06869,2.546601 9.49782,6.644669 13.22917,12.435416 h 1.5875 V 44.449999 C 113.77278,38.07277 109.27905,34.460128 104.775,30.95625 H 69.056249 l -1.322917,3.439583 z"
					id="path181602"
				/><path
					style="opacity:1;fill:#76625b;fill-opacity:1;fill-rule:evenodd;stroke:none;stroke-width:1.2;stroke-linecap:round;stroke-linejoin:round;stroke-miterlimit:3;stroke-opacity:1;paint-order:stroke fill markers"
					d="m 69.056249,37.041666 v -4.7625 c 0.17873,-0.600465 0.678883,-1.054642 1.5875,-1.322916 h -4.233333 v 6.085416 z"
					id="path181316"
				/><path
					style="opacity:1;fill:#76625b;fill-opacity:1;fill-rule:evenodd;stroke:none;stroke-width:1.2;stroke-linecap:round;stroke-linejoin:round;stroke-miterlimit:3;stroke-opacity:1;paint-order:stroke fill markers"
					d="m 81.227082,30.95625 h 3.439584 v 5.55625 l -1.5875,2.38125 -1.852084,-2.38125 z"
					id="path182296"
				/><path
					style="opacity:1;fill:#76625b;fill-opacity:1;fill-rule:evenodd;stroke:none;stroke-width:1.2;stroke-linecap:round;stroke-linejoin:round;stroke-miterlimit:3;stroke-opacity:1;paint-order:stroke fill markers"
					d="m 89.958333,30.95625 h 3.439584 v 5.55625 l -1.5875,2.38125 -1.852084,-2.38125 z"
					id="path182436"
				/><path
					style="opacity:1;fill:#76625b;fill-opacity:1;fill-rule:evenodd;stroke:none;stroke-width:1.2;stroke-linecap:round;stroke-linejoin:round;stroke-miterlimit:3;stroke-opacity:1;paint-order:stroke fill markers"
					d="m 98.689583,30.95625 h 3.439587 v 5.55625 l -1.5875,2.38125 -1.852087,-2.38125 z"
					id="path182438"
				/><ellipse
					style="opacity:1;fill:#ad401b;fill-rule:evenodd;stroke-width:1.32;stroke-linecap:round;stroke-linejoin:round;stroke-miterlimit:3;paint-order:stroke fill markers;fill-opacity:1"
					id="path1122"
					cx="82.682289"
					cy="29.501041"
					rx="1.4552088"
					ry="1.455209"
				/><ellipse
					style="opacity:1;fill:#ad401b;fill-opacity:1;fill-rule:evenodd;stroke-width:1.32;stroke-linecap:round;stroke-linejoin:round;stroke-miterlimit:3;paint-order:stroke fill markers"
					id="ellipse1408"
					cx="88.767708"
					cy="29.501041"
					rx="1.4552088"
					ry="1.455209"
				/><ellipse
					style="opacity:1;fill:#da7223;fill-opacity:1;fill-rule:evenodd;stroke-width:1.32;stroke-linecap:round;stroke-linejoin:round;stroke-miterlimit:3;paint-order:stroke fill markers"
					id="ellipse1410"
					cx="94.720833"
					cy="29.501041"
					rx="1.4552088"
					ry="1.455209"
				/><ellipse
					style="opacity:1;fill:#da7223;fill-opacity:1;fill-rule:evenodd;stroke-width:1.32;stroke-linecap:round;stroke-linejoin:round;stroke-miterlimit:3;paint-order:stroke fill markers"
					id="ellipse1412"
					cx="100.54166"
					cy="29.501041"
					rx="1.4552088"
					ry="1.455209"
				/><path
					style="opacity:1;fill:#da7223;fill-opacity:1;fill-rule:evenodd;stroke-width:1.2;stroke-linecap:round;stroke-linejoin:round;stroke-miterlimit:3;paint-order:stroke fill markers"
					d="m 114.56458,45.772916 h 3.43959 v 3.704167 h -3.43959 z"
					id="path2925"
				/><path
					style="opacity:1;fill:#76625b;fill-opacity:1;fill-rule:evenodd;stroke-width:1.2;stroke-linecap:round;stroke-linejoin:round;stroke-miterlimit:3;paint-order:stroke fill markers"
					d="m 118.00417,51.329166 h -5.55625 l -2.64584,1.852083 2.64584,1.5875 h 5.55625 z"
					id="path2983"
				/><path
					style="opacity:1;fill:#ad401b;fill-opacity:1;fill-rule:evenodd;stroke-width:1.2;stroke-linecap:round;stroke-linejoin:round;stroke-miterlimit:3;paint-order:stroke fill markers"
					d="m 114.56458,49.477083 1.85209,2.645833 1.5875,-2.645833 z"
					id="path2927"
				/><path
					style="opacity:1;fill:#76625b;fill-opacity:1;fill-rule:evenodd;stroke-width:1.2;stroke-linecap:round;stroke-linejoin:round;stroke-miterlimit:3;paint-order:stroke fill markers"
					d="m 118.00417,63.5 h -5.55625 l -2.64584,1.852083 2.64584,1.5875 h 5.55625 z"
					id="path3043"
				/><path
					style="opacity:1;fill:#76625b;fill-opacity:1;fill-rule:evenodd;stroke-width:1.2;stroke-linecap:round;stroke-linejoin:round;stroke-miterlimit:3;paint-order:stroke fill markers"
					d="m 118.00417,75.670834 h -5.55625 l -2.64584,1.852083 2.64584,1.5875 h 5.55625 z"
					id="path3053"
				/><path
					style="opacity:1;fill:#da7223;fill-opacity:1;fill-rule:evenodd;stroke-width:1.15292;stroke-linecap:round;stroke-linejoin:round;stroke-miterlimit:3;paint-order:stroke fill markers"
					d="m 114.3,57.679167 h 3.70417 v 3.175 H 114.3 Z"
					id="path3061"
				/><path
					style="opacity:1;fill:#ad401b;fill-opacity:1;fill-rule:evenodd;stroke-width:1.24529;stroke-linecap:round;stroke-linejoin:round;stroke-miterlimit:3;paint-order:stroke fill markers"
					d="M 114.3,60.854167 116.29456,63.5 118.00417,60.854167 Z"
					id="path3055"
				/><path
					style="opacity:1;fill:#da7223;fill-opacity:1;fill-rule:evenodd;stroke-width:1.2;stroke-linecap:round;stroke-linejoin:round;stroke-miterlimit:3;paint-order:stroke fill markers"
					d="m 114.3,69.85 h 3.70417 v 3.439583 H 114.3 Z"
					id="path3063"
				/><path
					style="opacity:1;fill:#ad401b;fill-opacity:1;fill-rule:evenodd;stroke-width:1.24529;stroke-linecap:round;stroke-linejoin:round;stroke-miterlimit:3;paint-order:stroke fill markers"
					d="m 114.3,73.289583 1.99456,2.645833 1.70961,-2.645833 z"
					id="path3057"
				/><path
					style="opacity:1;fill:#da7223;fill-opacity:1;fill-rule:evenodd;stroke-width:1.2;stroke-linecap:round;stroke-linejoin:round;stroke-miterlimit:3;paint-order:stroke fill markers"
					d="m 114.3,82.814584 h 3.70417 v 3.439583 H 114.3 Z"
					id="path3065"
				/><rect
					style="opacity:1;fill:#b3aca5;fill-opacity:1;fill-rule:evenodd;stroke-width:1.2;stroke-linecap:round;stroke-linejoin:round;stroke-miterlimit:3;paint-order:stroke fill markers"
					id="rect3119"
					width="6.3499999"
					height="6.3499999"
					x="107.95"
					y="100.0125"
				/><path
					style="opacity:1;fill:#b3aca5;fill-opacity:1;fill-rule:evenodd;stroke-width:1.2;stroke-linecap:round;stroke-linejoin:round;stroke-miterlimit:3;paint-order:stroke fill markers"
					d="m 114.56458,99.747915 h 6.61459 v -2.645833 c -1.21541,0.85666 -2.58725,1.462656 -4.49792,1.205214 h -2.11667 z"
					id="path3168"
				/><path
					style="opacity:1;fill:#694b53;fill-opacity:1;fill-rule:evenodd;stroke-width:1.2;stroke-linecap:round;stroke-linejoin:round;stroke-miterlimit:3;paint-order:stroke fill markers"
					d="m 124.61875,91.281249 v -8.466667 h -3.43958 l -1.98585,3.439584 3.04418,6.35 z"
					id="path8268"
				/><path
					style="opacity:1;fill:#93877c;fill-opacity:1;fill-rule:evenodd;stroke-width:1.2;stroke-linecap:round;stroke-linejoin:round;stroke-miterlimit:3;paint-order:stroke fill markers"
					d="m 121.17917,97.102082 c 1.68034,-1.148814 2.82271,-2.47309 3.43958,-3.96875 v -1.852083 c -1.6617,-0.451967 -3.51661,-0.643429 -3.43958,-3.439583 v -8.466667 h -3.175 v 6.879167 H 114.3 v 5.027083 h 3.70417 c -0.36963,1.629617 -0.91854,3.249515 -3.43959,4.7625 v 2.263545 h 5.55625 z"
					id="path3273"
				/><path
					style="opacity:1;fill:#ad401b;fill-opacity:1;fill-rule:evenodd;stroke-width:1.24529;stroke-linecap:round;stroke-linejoin:round;stroke-miterlimit:3;paint-order:stroke fill markers"
					d="M 114.3,86.254167 116.29456,88.9 118.00417,86.254167 Z"
					id="path3059"
				/><circle
					style="opacity:1;fill:#694b53;fill-opacity:1;fill-rule:evenodd;stroke-width:1.2;stroke-linecap:round;stroke-linejoin:round;stroke-miterlimit:3;paint-order:stroke fill markers"
					id="path3381"
					cx="115.8875"
					cy="96.837502"
					r="1.3229166"
				/><circle
					style="opacity:1;fill:#694b53;fill-opacity:1;fill-rule:evenodd;stroke-width:1.2;stroke-linecap:round;stroke-linejoin:round;stroke-miterlimit:3;paint-order:stroke fill markers"
					id="path4271"
					cx="120.65"
					cy="92.868752"
					r="1.3229166"
				/><path
					style="opacity:1;fill:#b3aca5;fill-opacity:1;fill-rule:evenodd;stroke-width:1.2;stroke-linecap:round;stroke-linejoin:round;stroke-miterlimit:3;paint-order:stroke fill markers"
					d="m 81.227082,56.885416 c 2.506964,-3.056673 5.250196,-5.821104 8.73125,-7.672917 -2.406359,-0.09683 -5.337592,0.7337 -8.73125,2.38125 z"
					id="path7326"
				/><path
					style="opacity:1;fill:#93877c;fill-opacity:1;fill-rule:evenodd;stroke-width:1.2;stroke-linecap:round;stroke-linejoin:round;stroke-miterlimit:3;paint-order:stroke fill markers"
					d="m 118.00417,73.289582 h 3.175 v -6.35 h -3.175 z"
					id="path7857"
				/><path
					style="opacity:1;fill:#93877c;fill-opacity:1;fill-rule:evenodd;stroke-width:1.2;stroke-linecap:round;stroke-linejoin:round;stroke-miterlimit:3;paint-order:stroke fill markers"
					d="m 121.17917,60.854166 h -3.175 v -6.085417 h 3.175 z"
					id="path8266"
				/><path
					style="opacity:1;fill:#ad401b;fill-opacity:1;fill-rule:evenodd;stroke-width:1.2;stroke-linecap:round;stroke-linejoin:round;stroke-miterlimit:3;paint-order:stroke fill markers"
					d="m 114.56458,37.041666 h 3.43959 l -1.5875,2.74963 z"
					id="path9086"
				/><path
					style="opacity:1;fill:#da7223;fill-opacity:1;fill-rule:evenodd;stroke-width:1.2;stroke-linecap:round;stroke-linejoin:round;stroke-miterlimit:3;paint-order:stroke fill markers"
					d="m 114.56458,37.041666 v -3.439583 h 3.43959 v 3.439588 z"
					id="path9142"
				/><path
					style="opacity:1;fill:#da7223;fill-opacity:1;fill-rule:evenodd;stroke-width:1.2;stroke-linecap:round;stroke-linejoin:round;stroke-miterlimit:3;paint-order:stroke fill markers"
					d="m 110.86042,30.95625 h -2.38125 v -2.910417 l 3.96875,-3.175 H 114.3 v 2.38125 l -2.91042,3.175 z"
					id="path9200"
				/><path
					style="opacity:1;fill:#ad401b;fill-opacity:1;fill-rule:evenodd;stroke-width:1.2;stroke-linecap:round;stroke-linejoin:round;stroke-miterlimit:3;paint-order:stroke fill markers"
					d="m 114.3,27.252083 v 3.704167 h -3.43958 c 0.32512,-2.92928 1.8622,-3.358301 3.43958,-3.704167 z"
					id="path9198"
				/><path
					style="opacity:1;fill:#da7223;fill-opacity:1;fill-rule:evenodd;stroke-width:1.2;stroke-linecap:round;stroke-linejoin:round;stroke-miterlimit:3;paint-order:stroke fill markers"
					d="m 105.03958,24.870833 h -2.91041 V 22.225 l 3.96875,-3.96875 h 2.64583 v 2.38125 l -2.11667,3.175 z"
					id="path9258"
				/><path
					style="opacity:1;fill:#ad401b;fill-opacity:1;fill-rule:evenodd;stroke-width:1.2;stroke-linecap:round;stroke-linejoin:round;stroke-miterlimit:3;paint-order:stroke fill markers"
					d="m 107.42083,24.870833 1.32292,-2.116667 V 20.6375 c -2.1211,0.383469 -3.54921,1.570383 -3.70417,4.233333 z"
					id="path9256"
				/><path
					style="opacity:1;fill:#da7223;fill-opacity:1;fill-rule:evenodd;stroke-width:1.2;stroke-linecap:round;stroke-linejoin:round;stroke-miterlimit:3;paint-order:stroke fill markers"
					d="m 97.631249,18.785416 h -4.497917 v -3.96875 c 2.427152,-3.216306 4.146056,-4.19151 5.820833,-5.0270828 h 5.291665 v 1.8520838 l -3.43958,3.439583 z"
					id="path9316"
				/><path
					style="opacity:1;fill:#ad401b;fill-opacity:1;fill-rule:evenodd;stroke-width:1.2;stroke-linecap:round;stroke-linejoin:round;stroke-miterlimit:3;paint-order:stroke fill markers"
					d="m 97.631249,18.785416 h 4.497921 v -4.233333 l 2.11666,-2.116666 v -0.79375 c -1.58952,0.564928 -3.44116,1.495534 -4.769759,2.917879 -0.919955,0.984869 -1.62999,2.271695 -1.844822,4.22587 z"
					id="path9314"
				/><path
					style="opacity:1;fill:#c01313;fill-opacity:1;fill-rule:evenodd;stroke-width:1.2;stroke-linecap:round;stroke-linejoin:round;stroke-miterlimit:3;paint-order:stroke fill markers"
					d="m 17.197916,91.281249 v -3.175 H 20.6375 v 3.175 z"
					id="path11868"
				/></g
			></g
		><metadata id="metadata15425">
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
