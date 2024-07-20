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
				id="filter19747"
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
					id="feComposite19733"
				/><feColorMatrix
					in="composite1"
					values="1"
					type="saturate"
					result="colormatrix1"
					id="feColorMatrix19735"
				/><feFlood
					flood-opacity="1"
					flood-color="rgb(0,0,0)"
					result="flood1"
					id="feFlood19737"
				/><feBlend
					in="flood1"
					in2="colormatrix1"
					mode="multiply"
					result="blend1"
					id="feBlend19739"
				/><feBlend
					in2="blend1"
					mode="screen"
					result="blend2"
					id="feBlend19741"
				/><feColorMatrix
					in="blend2"
					values="1"
					type="saturate"
					result="colormatrix2"
					id="feColorMatrix19743"
				/><feComposite
					in="colormatrix2"
					in2="SourceGraphic"
					operator="in"
					k2="1"
					result="composite2"
					id="feComposite19745"
				/></filter
			></defs
		>
		<!-- svelte-ignore a11y-no-static-element-interactions -->
		<!-- svelte-ignore a11y-mouse-events-have-key-events -->
		<g id="layer1"
			><g
				id="g19367"
				style="filter:url(#filter19747)"
				transform="translate(1.0583333,1.5875)"
				><path
					style="opacity:1;fill:#7d4333;fill-opacity:1;fill-rule:evenodd;stroke-width:3;stroke-linecap:round;stroke-linejoin:round;stroke-miterlimit:3;stroke-opacity:0.498674;paint-order:stroke fill markers"
					d="m 53.710416,61.383333 h 3.704167 V 12.435417 c 0.06074,-2.192496 2.803356,-2.8768274 5.291666,-3.7041671 V 5.2916666 h -5.291666 l -5.820834,3.4395833 v 22.4895831 1.5875 l 2.116667,5.55625 z"
					id="path19233"
				/><path
					style="opacity:1;fill:#9a896a;fill-opacity:1;fill-rule:evenodd;stroke-width:3;stroke-linecap:round;stroke-linejoin:round;stroke-miterlimit:3;stroke-opacity:0.498674;paint-order:stroke fill markers"
					d="m 57.414583,57.679166 h 4.7625 l 7.937499,-4.582718 3.96875,-5.471449 7.9375,-3.96875 L 95.249999,37.041666 103.1875,30.427083 111.125,17.197916 123.29583,5.0270833 124.35417,3.175 V 2.1166666 H 91.545832 l -5.027083,5.0270833 -1.852083,3.1750001 -2.38125,0.529167 H 69.056249 V 8.7312499 h -6.350002 l -5.291664,9.7895831 z"
					id="path19235"
				/><path
					style="opacity:1;fill:#a13121;fill-opacity:1;fill-rule:evenodd;stroke-width:3;stroke-linecap:round;stroke-linejoin:round;stroke-miterlimit:3;stroke-opacity:0.498674;paint-order:stroke fill markers"
					d="m 27.516666,125.94167 c 2.464808,-2.57663 5.428687,-4.63811 8.73125,-6.35 h 75.935414 c 2.53644,-0.57049 2.66609,-1.93533 3.175,-3.175 V 64.293749 c -0.87487,-4.02221 -3.96049,-7.437925 -8.99583,-10.31875 v -7.672916 h 6.87917 c 5.74338,2.547647 6.94051,5.385361 8.46666,8.202083 v 65.881254 c -0.32826,2.58951 -0.59347,5.20954 -5.55625,5.55625 z"
					id="path19237"
				/><path
					style="opacity:1;fill:#f0e7a4;fill-opacity:1;fill-rule:evenodd;stroke-width:3;stroke-linecap:round;stroke-linejoin:round;stroke-miterlimit:3;stroke-opacity:0.498674;paint-order:stroke fill markers"
					d="m 13.229167,114.03542 -2.116667,2.38125 v -6.61459 c 0.263307,-0.98449 1.080152,-1.76993 2.38125,-2.38125 h 3.96875 v 3.70417 z"
					id="path19239"
				/><path
					style="opacity:1;fill:#d5b67e;fill-opacity:1;fill-rule:evenodd;stroke-width:3;stroke-linecap:round;stroke-linejoin:round;stroke-miterlimit:3;stroke-opacity:0.498674;paint-order:stroke fill markers"
					d="m 13.229167,114.03542 c 0.77127,-2.13057 2.376393,-2.74885 4.233333,-2.91042 v 2.64583 c -1.431432,0.0404 -2.981664,-0.19874 -4.233333,0.26459 z"
					id="path19241"
				/><path
					style="opacity:1;fill:#f0e7a4;fill-opacity:1;fill-rule:evenodd;stroke-width:3;stroke-linecap:round;stroke-linejoin:round;stroke-miterlimit:3;stroke-opacity:0.498674;paint-order:stroke fill markers"
					d="m 72.495832,113.77083 v -3.43958 h -3.175 v 6.35 c 0.915467,-1.45527 1.857853,-2.81913 3.175,-2.91042 z"
					id="path19243"
				/><path
					style="opacity:1;fill:#f0e7a4;fill-opacity:1;fill-rule:evenodd;stroke-width:3;stroke-linecap:round;stroke-linejoin:round;stroke-miterlimit:3;stroke-opacity:0.498674;paint-order:stroke fill markers"
					d="m 66.939583,113.77083 v -3.43958 h -3.175 v 6.35 c 0.915467,-1.45527 1.857853,-2.81913 3.175,-2.91042 z"
					id="path19245"
				/><path
					style="opacity:1;fill:#d5b67e;fill-opacity:1;fill-rule:evenodd;stroke-width:3;stroke-linecap:round;stroke-linejoin:round;stroke-miterlimit:3;stroke-opacity:0.498674;paint-order:stroke fill markers"
					d="m 72.495832,113.77083 h 3.704167 v -3.43958 H 72.49583 Z"
					id="path19247"
				/><path
					style="opacity:1;fill:#f0e7a4;fill-opacity:1;fill-rule:evenodd;stroke-width:3;stroke-linecap:round;stroke-linejoin:round;stroke-miterlimit:3;stroke-opacity:0.498674;paint-order:stroke fill markers"
					d="M 62.706249,8.7312499 V 3.7041666 h 11.377083 l -5.027083,5.0270833 z"
					id="path19249"
				/><path
					style="opacity:1;fill:#d5b67e;fill-opacity:1;fill-rule:evenodd;stroke-width:3;stroke-linecap:round;stroke-linejoin:round;stroke-miterlimit:3;stroke-opacity:0.498674;paint-order:stroke fill markers"
					d="m 51.593749,8.7312499 h 5.820834 V 2.1166666 h -2.910417 l -5.291667,1.4178979 z"
					id="path19251"
				/><path
					style="opacity:1;fill:#f0e7a4;fill-opacity:1;fill-rule:evenodd;stroke-width:3;stroke-linecap:round;stroke-linejoin:round;stroke-miterlimit:3;stroke-opacity:0.498674;paint-order:stroke fill markers"
					d="M 51.593749,8.7312499 C 51.377129,5.4573872 52.17652,3.0987205 54.504166,2.1166666 h -11.90625 l 6.614583,6.6145833 z"
					id="path19253"
				/><path
					style="opacity:1;fill:#86495e;fill-opacity:1;fill-rule:evenodd;stroke-width:3;stroke-linecap:round;stroke-linejoin:round;stroke-miterlimit:3;stroke-opacity:0.498674;paint-order:stroke fill markers"
					d="m 20.902083,113.77083 v -6.61458 h 16.66875 l 5.820833,-6.08542 c 1.6312,1.66323 3.146226,4.11622 4.990372,6.04676 1.71516,1.79552 3.847153,3.28909 7.445045,3.21366 v 3.43958 z"
					id="path19255"
				/><path
					style="opacity:1;fill:#86495e;fill-opacity:1;fill-rule:evenodd;stroke-width:3;stroke-linecap:round;stroke-linejoin:round;stroke-miterlimit:3;stroke-opacity:0.498674;paint-order:stroke fill markers"
					d="m 79.374999,116.68125 h 10.583333 l 1.322917,-1.32292 v -1.85208 h 17.727081 c 2.09214,-0.0643 2.7601,-1.27836 2.91042,-2.91042 V 97.895832 c -1.28897,1.937483 -2.98956,3.209908 -5.49926,3.174998 h -9.317408 v 6.08542 h 3.174998 v 2.91042 H 79.110416 v 6.61458 z"
					id="path19257"
				/><path
					style="opacity:1;fill:#86495e;fill-opacity:1;fill-rule:evenodd;stroke-width:3;stroke-linecap:round;stroke-linejoin:round;stroke-miterlimit:3;stroke-opacity:0.498674;paint-order:stroke fill markers"
					d="M 39.158333,101.07083 V 88.635416 l -7.9375,7.672916 c 0.303302,1.783983 0.546157,3.588493 2.645833,4.762498 z"
					id="path19259"
				/><path
					style="opacity:1;fill:#86495e;fill-opacity:1;fill-rule:evenodd;stroke-width:3;stroke-linecap:round;stroke-linejoin:round;stroke-miterlimit:3;stroke-opacity:0.498674;paint-order:stroke fill markers"
					d="m 38.629166,80.962499 v 4.233333 l -9.789583,9.789583 c -3.751135,0.699697 -5.796932,-0.386764 -4.7625,-4.762499 L 33.3375,80.962499 Z"
					id="path19261"
				/><path
					style="opacity:1;fill:#86495e;fill-opacity:1;fill-rule:evenodd;stroke-width:3;stroke-linecap:round;stroke-linejoin:round;stroke-miterlimit:3;stroke-opacity:0.498674;paint-order:stroke fill markers"
					d="M 84.666666,94.720832 V 76.993749 h -6.085417 v 17.727083 z"
					id="path19263"
				/><path
					style="opacity:1;fill:#86495e;fill-opacity:1;fill-rule:evenodd;stroke-width:3;stroke-linecap:round;stroke-linejoin:round;stroke-miterlimit:3;stroke-opacity:0.498674;paint-order:stroke fill markers"
					d="m 69.585416,97.895832 h 6.085416 V 80.168749 h -6.085416 z"
					id="path19265"
				/><path
					style="opacity:1;fill:#86495e;fill-opacity:1;fill-rule:evenodd;stroke-width:3;stroke-linecap:round;stroke-linejoin:round;stroke-miterlimit:3;stroke-opacity:0.498674;paint-order:stroke fill markers"
					d="m 60.324999,104.51042 5.820833,-3.70417 V 76.993749 c -2.831035,0.441612 -4.617922,1.916292 -5.820833,3.96875 z"
					id="path19267"
				/><path
					style="opacity:1;fill:#a13121;fill-opacity:1;fill-rule:evenodd;stroke-width:3;stroke-linecap:round;stroke-linejoin:round;stroke-miterlimit:3;stroke-opacity:0.498674;paint-order:stroke fill markers"
					d="M 97.102082,101.07083 V 97.895832 H 104.775 c 6.30088,-1.630286 5.80947,-4.56191 7.14375,-7.14375 v -23.8125 c -1.48989,-3.679161 -3.06259,-8.309674 -8.46667,-8.995833 V 46.302083 H 91.016666 v 17.197916 h 11.906254 c 2.11699,0.234546 3.04755,1.48963 3.43958,3.175 v 17.4625 h -2.91042 v -8.466667 l -2.11666,-2.116666 h -9.260421 l -3.704167,3.704166 v 20.6375 l 3.175,3.174998 z"
					id="path19269"
				/><path
					style="opacity:1;fill:#834737;fill-opacity:1;fill-rule:evenodd;stroke-width:3;stroke-linecap:round;stroke-linejoin:round;stroke-miterlimit:3;stroke-opacity:0.498674;paint-order:stroke fill markers"
					d="m 97.366665,97.895832 v -11.1125 h 2.645835 v 11.1125 z"
					id="path19271"
				/><path
					style="opacity:1;fill:#834737;fill-opacity:1;fill-rule:evenodd;stroke-width:3;stroke-linecap:round;stroke-linejoin:round;stroke-miterlimit:3;stroke-opacity:0.498674;paint-order:stroke fill markers"
					d="m 91.016666,63.499999 v 6.614583 h 12.435414 c 1.78262,0.440621 2.83561,1.356758 2.91042,2.910417 v -9.525 z"
					id="path19273"
				/><path
					style="opacity:1;fill:#834737;fill-opacity:1;fill-rule:evenodd;stroke-width:3;stroke-linecap:round;stroke-linejoin:round;stroke-miterlimit:3;stroke-opacity:0.498674;paint-order:stroke fill markers"
					d="m 81.75625,66.939583 h 6.085417 l -10e-7,6.879166 h -6.085417 z"
					id="path19275"
				/><path
					style="opacity:1;fill:#a13121;fill-opacity:1;fill-rule:evenodd;stroke-width:3;stroke-linecap:round;stroke-linejoin:round;stroke-miterlimit:3;stroke-opacity:0.498674;paint-order:stroke fill markers"
					d="M 81.756249,66.939582 V 48.683333 h 6.085417 v 18.256249 z"
					id="path19277"
				/><path
					style="opacity:1;fill:#a13121;fill-opacity:1;fill-rule:evenodd;stroke-width:3;stroke-linecap:round;stroke-linejoin:round;stroke-miterlimit:3;stroke-opacity:0.498674;paint-order:stroke fill markers"
					d="m 72.495832,55.562499 6.085417,-5.027083 v 19.84375 h -6.085417 z"
					id="path19279"
				/><path
					style="opacity:1;fill:#a13121;fill-opacity:1;fill-rule:evenodd;stroke-width:3;stroke-linecap:round;stroke-linejoin:round;stroke-miterlimit:3;stroke-opacity:0.498674;paint-order:stroke fill markers"
					d="m 57.414583,107.68542 h -3.96875 c -3.263963,-1.30543 -4.934677,-3.37499 -5.820834,-5.82084 V 91.545832 c -0.973438,-0.297275 -2.001075,-0.404763 -3.175,0 v 7.408333 C 43.36572,98.524669 42.677005,97.936018 42.597916,97.102082 V 79.904166 c 1.877513,-4.696592 6.244924,-5.801811 10.998523,-6.35 v -10.31875 h 8.845227 c 3.663194,-0.973189 5.104647,-2.606436 6.614583,-4.233333 v 11.641666 c -4.861675,1.637169 -9.255013,3.882123 -11.641666,8.73125 z"
					id="path19281"
				/><path
					style="opacity:1;fill:#a13121;fill-opacity:1;fill-rule:evenodd;stroke-width:3;stroke-linecap:round;stroke-linejoin:round;stroke-miterlimit:3;stroke-opacity:0.498674;paint-order:stroke fill markers"
					d="m 45.508333,66.939582 h 6.085416 v -7.143749 c -2.369547,0.462926 -4.48699,1.561511 -6.085416,3.96875 z"
					id="path19283"
				/><path
					style="opacity:1;fill:#6a332b;fill-opacity:1;fill-rule:evenodd;stroke-width:3;stroke-linecap:round;stroke-linejoin:round;stroke-miterlimit:3;stroke-opacity:0.498674;paint-order:stroke fill markers"
					d="m 29.897916,41.539583 v -5.291667 l 7.672917,-4.429961 h 8.466666 V 39.6875 l -12.170833,3.261164 z"
					id="path19285"
				/><path
					style="opacity:1;fill:#f0e7a4;fill-opacity:1;fill-rule:evenodd;stroke-width:3;stroke-linecap:round;stroke-linejoin:round;stroke-miterlimit:3;stroke-opacity:0.498674;paint-order:stroke fill markers"
					d="m 43.920833,23.547916 h 4.7625 c 3.864342,-2.626682 3.687619,-6.696146 4.7625,-10.318749 -1.568262,1.638052 -2.432379,3.429571 -6.614584,4.497916 -2.308581,-1.091566 -2.867225,-2.705955 -3.706848,-4.236397 -0.427606,-0.676671 -1.0171,-1.377226 -1.849402,-2.113603 h -8.995833 c -3.959084,1.549115 -12.170833,11.1125 -18.25625,16.66875 v 5.820831 l 4.497917,1.205214 9.936461,-9.936462 4.615622,-2.66483 2.89142,-2.89142 h 5.83983 z"
					id="path19287"
				/><path
					style="opacity:1;fill:#533522;fill-opacity:1;fill-rule:evenodd;stroke-width:3;stroke-linecap:round;stroke-linejoin:round;stroke-miterlimit:3;stroke-opacity:0.498674;paint-order:stroke fill markers"
					d="m 29.897916,41.539583 2.910417,-2.910417 h 9.525 l -9.525,7.408333 h -2.910417 z"
					id="path19289"
				/><path
					style="opacity:1;fill:#9a896a;fill-opacity:1;fill-rule:evenodd;stroke-width:3;stroke-linecap:round;stroke-linejoin:round;stroke-miterlimit:3;stroke-opacity:0.498674;paint-order:stroke fill markers"
					d="m 14.022916,33.866666 c 3.778578,-4.351398 8.054172,-6.868567 12.435417,-8.995833 3.470078,-1.721485 4.918779,-2.916328 5.820833,-3.96875 0.49697,-0.901469 1.017924,-1.722695 1.5875,-2.38125 h 8.466667 c 1.144634,1.024881 1.366862,3.025141 1.5875,5.027083 h -2.38125 C 40.922051,21.164129 39.774106,20.020918 38.1,20.108333 c -2.060394,-0.362241 -2.576616,1.675882 -3.439584,3.175 0.161097,0.537764 -2.473148,1.907721 -4.7625,3.175 L 19.84375,36.5125 h -6.35 z"
					id="path19291"
				/><path
					style="opacity:1;fill:#6a332b;fill-opacity:1;fill-rule:evenodd;stroke-width:3;stroke-linecap:round;stroke-linejoin:round;stroke-miterlimit:3;stroke-opacity:0.498674;paint-order:stroke fill markers"
					d="m 17.727083,35.454166 h 1.852083 v -1.058333 c 2.928447,-3.063594 6.542893,-5.566509 10.31875,-7.9375 l -3.439583,7.408333 h 3.439583 v 2.38125 l -3.666175,6.35 H 16.66875 v -7.14375 z"
					id="path19293"
				/><path
					style="opacity:1;fill:#a13121;fill-opacity:1;fill-rule:evenodd;stroke-width:3;stroke-linecap:round;stroke-linejoin:round;stroke-miterlimit:3;stroke-opacity:0.498674;paint-order:stroke fill markers"
					d="m 32.808333,73.818749 h 8.995833 l 0.79375,-3.439583 v -7.408333 l 0.529167,-1.974877 7.408333,-7.408333 1.058333,-4.90429 V 37.041666 C 51.066458,33.361763 50.457359,29.685808 46.037499,26.19375 H 34.395833 c -3.292654,0.483156 -4.103177,2.616876 -4.497917,5.027083 v 5.027083 H 34.925 c 0.101288,-1.257434 0.644316,-2.117971 1.852083,-2.38125 h 7.672916 v 2.38125 c -2.519769,3.457063 -6.964218,4.519322 -11.641666,5.291667 z"
					id="path19295"
				/><path
					style="opacity:1;fill:#834737;fill-opacity:1;fill-rule:evenodd;stroke-width:3;stroke-linecap:round;stroke-linejoin:round;stroke-miterlimit:3;stroke-opacity:0.498674;paint-order:stroke fill markers"
					d="m 51.593749,66.939582 v 3.704167 c -2.0305,0.176445 -4.059628,0.601391 -6.085416,1.630582 v -5.334749 z"
					id="path19297"
				/><path
					style="opacity:1;fill:#834737;fill-opacity:1;fill-rule:evenodd;stroke-width:3;stroke-linecap:round;stroke-linejoin:round;stroke-miterlimit:3;stroke-opacity:0.498674;paint-order:stroke fill markers"
					d="m 78.581249,70.379166 v 6.614583 h -6.085417 v -6.614583 z"
					id="path19299"
				/><path
					style="opacity:1;fill:#834737;fill-opacity:1;fill-rule:evenodd;stroke-width:3;stroke-linecap:round;stroke-linejoin:round;stroke-miterlimit:3;stroke-opacity:0.498674;paint-order:stroke fill markers"
					d="m 69.056249,70.643749 v 3.175 c -5.239019,0.0661 -8.033048,2.274774 -11.1125,4.233333 v -8.466666 h 11.1125 z"
					id="path19301"
				/><path
					style="opacity:1;fill:#834737;fill-opacity:1;fill-rule:evenodd;stroke-width:3;stroke-linecap:round;stroke-linejoin:round;stroke-miterlimit:3;stroke-opacity:0.498674;paint-order:stroke fill markers"
					d="m 44.449999,98.954165 h 3.175 v -7.937499 h -3.175 z"
					id="path19303"
				/><path
					style="opacity:1;fill:#834737;fill-opacity:1;fill-rule:evenodd;stroke-width:3;stroke-linecap:round;stroke-linejoin:round;stroke-miterlimit:3;stroke-opacity:0.498674;paint-order:stroke fill markers"
					d="m 15.08125,92.074999 v -7.672916 h 11.641667 c -3.48925,3.355789 -7.289505,7.158171 -10.054167,7.672916 z"
					id="path19305"
				/><path
					style="opacity:1;fill:#834737;fill-opacity:1;fill-rule:evenodd;stroke-width:3;stroke-linecap:round;stroke-linejoin:round;stroke-miterlimit:3;stroke-opacity:0.498674;paint-order:stroke fill markers"
					d="m 32.808333,76.993749 v -3.175 h 3.96875 c 4.33411,-1.009275 4.960904,-2.346286 5.820834,-3.439582 V 73.025 c -0.241646,1.735707 -1.393296,3.410397 -3.968751,3.968749 z"
					id="path19307"
				/><path
					style="opacity:1;fill:#834737;fill-opacity:1;fill-rule:evenodd;stroke-width:3;stroke-linecap:round;stroke-linejoin:round;stroke-miterlimit:3;stroke-opacity:0.498674;paint-order:stroke fill markers"
					d="m 42.597916,62.970833 c 1.581873,-2.609623 4.52254,-4.577277 8.995833,-5.820834 v -8.466666 c -1.000521,2.274336 -1.732821,4.675779 -3.998507,6.350571 -3.06363,1.560596 -4.932388,4.048679 -4.997326,7.936929 z"
					id="path19309"
				/><path
					style="opacity:1;fill:#a13121;fill-opacity:1;fill-rule:evenodd;stroke-width:3;stroke-linecap:round;stroke-linejoin:round;stroke-miterlimit:3;stroke-opacity:0.498674;paint-order:stroke fill markers"
					d="m 6.3499999,70.114582 v -1.5875 L 7.6729166,67.204166 H 12.964583 L 15.875,64.293749 h 4.7625 v 2.645833 c -2.131384,0.377523 -3.84941,1.200273 -4.497917,3.175 z"
					id="path19311"
				/><path
					style="opacity:1;fill:#a13121;fill-opacity:1;fill-rule:evenodd;stroke-width:3;stroke-linecap:round;stroke-linejoin:round;stroke-miterlimit:3;stroke-opacity:0.498674;paint-order:stroke fill markers"
					d="M 2.9104166,92.074999 11.90625,82.285416 H 22.225 c 0.581492,-0.259298 1.048673,-0.666384 1.322916,-1.322917 v -2.645833 h 6.35 v 2.910416 l -3.175,3.175 H 15.08125 v 7.672917 z"
					id="path19313"
				/><path
					style="opacity:1;fill:#6a332b;fill-opacity:1;fill-rule:evenodd;stroke-width:3;stroke-linecap:round;stroke-linejoin:round;stroke-miterlimit:3;stroke-opacity:0.498674;paint-order:stroke fill markers"
					d="m 11.90625,82.285416 -3.1750001,-3.175 V 76.993749 H 29.897916 v 1.322917 h -6.35 v 3.96875 z"
					id="path19315"
				/><path
					style="opacity:1;fill:#3d2518;fill-opacity:1;fill-rule:evenodd;stroke-width:3;stroke-linecap:round;stroke-linejoin:round;stroke-miterlimit:3;stroke-opacity:0.498674;paint-order:stroke fill markers"
					d="m 23.8125,76.993749 v -3.175 H 13.49375 v 3.175 z"
					id="path19317"
				/><path
					style="opacity:1;fill:#f0e7a4;fill-opacity:1;fill-rule:evenodd;stroke-width:3;stroke-linecap:round;stroke-linejoin:round;stroke-miterlimit:3;stroke-opacity:0.498674;paint-order:stroke fill markers"
					d="m 11.1125,70.643749 c 0.978579,1.261357 1.727322,2.630594 4.233333,3.175 v 3.175 H 11.1125 Z"
					id="path19319"
				/><path
					style="opacity:1;fill:#f0e7a4;fill-opacity:1;fill-rule:evenodd;stroke-width:3;stroke-linecap:round;stroke-linejoin:round;stroke-miterlimit:3;stroke-opacity:0.498674;paint-order:stroke fill markers"
					d="m 17.4625,70.643749 c 0.978579,1.261357 1.727322,2.630594 4.233333,3.175 v 3.175 H 17.4625 Z"
					id="path19321"
				/><path
					style="opacity:1;fill:#f0e7a4;fill-opacity:1;fill-rule:evenodd;stroke-width:3;stroke-linecap:round;stroke-linejoin:round;stroke-miterlimit:3;stroke-opacity:0.498674;paint-order:stroke fill markers"
					d="M 29.897916,69.585416 V 68.527082 L 25.664583,64.293749 H 23.8125 v 12.7 h 3.439583 z"
					id="path19323"
				/><path
					style="opacity:1;fill:#d5b67e;fill-opacity:1;fill-rule:evenodd;stroke-width:3;stroke-linecap:round;stroke-linejoin:round;stroke-miterlimit:3;stroke-opacity:0.498674;paint-order:stroke fill markers"
					d="m 27.252083,76.993749 v -9.789583 l 2.645833,2.645833 v 7.14375 z"
					id="path19325"
				/><path
					style="opacity:1;fill:#513321;fill-opacity:1;fill-rule:evenodd;stroke-width:3;stroke-linecap:round;stroke-linejoin:round;stroke-miterlimit:3;stroke-opacity:0.498674;paint-order:stroke fill markers"
					d="M 5.8208333,54.504166 H 17.727083 l 5.820833,2.910417 v 3.96875 L 17.727083,57.679166 H 5.8208333 Z"
					id="path19327"
				/><path
					style="opacity:1;fill:#533522;fill-opacity:1;fill-rule:evenodd;stroke-width:3;stroke-linecap:round;stroke-linejoin:round;stroke-miterlimit:3;stroke-opacity:0.498674;paint-order:stroke fill markers"
					d="m 23.547916,51.858333 v -2.910417 h 4.233334 c 1.988638,0.749723 1.972956,1.869175 2.38125,2.910417 z"
					id="path19329"
				/><path
					style="opacity:1;fill:#5b3636;fill-opacity:1;fill-rule:evenodd;stroke-width:3;stroke-linecap:round;stroke-linejoin:round;stroke-miterlimit:3;stroke-opacity:0.498674;paint-order:stroke fill markers"
					d="M 23.547916,48.947916 H 17.727083 L 15.875,50.799999 H 11.641667 L 6.3499999,47.360416 5.8208333,54.504166 H 17.727083 l 6.35,3.666175 v -9.222425 z"
					id="path19331"
				/><path
					style="opacity:1;fill:#a13121;fill-opacity:1;fill-rule:evenodd;stroke-width:3;stroke-linecap:round;stroke-linejoin:round;stroke-miterlimit:3;stroke-opacity:0.498674;paint-order:stroke fill markers"
					d="M 23.547916,61.383333 H 30.1625 v -9.525 h -6.35 -0.264584 z"
					id="path19333"
				/><path
					style="opacity:1;fill:#6a332b;fill-opacity:1;fill-rule:evenodd;stroke-width:3;stroke-linecap:round;stroke-linejoin:round;stroke-miterlimit:3;stroke-opacity:0.498674;paint-order:stroke fill markers"
					d="m 14.2875,46.037499 c -1.351737,-0.269172 -2.671576,-2.15992 -3.439583,-6.614583 0.748534,-3.391238 1.870834,-4.902602 3.174999,-5.499261 l 1.5875,2.749632 z"
					id="path19335"
				/><path
					style="opacity:1;fill:#3d2518;fill-opacity:1;fill-rule:evenodd;stroke-width:3;stroke-linecap:round;stroke-linejoin:round;stroke-miterlimit:3;stroke-opacity:0.498674;paint-order:stroke fill markers"
					d="m 6.3499999,47.360416 1.5275727,-2.645833 c 1.4012705,2.46418 3.2498334,4.287827 6.4099274,4.233333 v -13.49375 h 3.439583 v 6.085417 h 7.9375 l 3.055146,-5.291667 h 1.178187 v 9.789583 H 17.727083 v 2.910417 c -0.287977,0.726261 -0.07487,1.618191 -1.852083,1.852083 H 11.641667 C 9.1985042,49.927579 7.823133,48.624273 6.3499999,47.360416 Z"
					id="path19337"
				/><path
					style="opacity:1;fill:#f0e7a4;fill-opacity:1;fill-rule:evenodd;stroke-width:3;stroke-linecap:round;stroke-linejoin:round;stroke-miterlimit:3;stroke-opacity:0.498674;paint-order:stroke fill markers"
					d="m 7.9374999,54.504166 h 3.4395831 v 3.439583 c -1.5663419,-0.134838 -2.5569702,1.003746 -3.4395831,2.38125 z"
					id="path19339"
				/><path
					style="opacity:1;fill:#f0e7a4;fill-opacity:1;fill-rule:evenodd;stroke-width:3;stroke-linecap:round;stroke-linejoin:round;stroke-miterlimit:3;stroke-opacity:0.498674;paint-order:stroke fill markers"
					d="M 14.022917,54.504166 H 17.4625 v 3.439583 c -1.566342,-0.134838 -2.55697,1.003746 -3.439583,2.38125 z"
					id="path19341"
				/><circle
					style="opacity:1;fill:#3666aa;fill-opacity:1;fill-rule:evenodd;stroke-width:3;stroke-linecap:round;stroke-linejoin:round;stroke-miterlimit:3;stroke-opacity:0.498674;paint-order:stroke fill markers"
					id="circle19343"
					cx="19.314583"
					cy="44.185417"
					r="1.8520837"
				/><path
					style="opacity:1;fill:#9a896a;fill-opacity:1;fill-rule:evenodd;stroke-width:3;stroke-linecap:round;stroke-linejoin:round;stroke-miterlimit:3;stroke-opacity:0.498674;paint-order:stroke fill markers"
					d="m 14.2875,19.579166 h 3.175 V 8.4666666 l 0.0709,-0.2645834 h -3.2459 z"
					id="path19345"
				/><path
					style="opacity:1;fill:#9a896a;fill-opacity:1;fill-rule:evenodd;stroke-width:3;stroke-linecap:round;stroke-linejoin:round;stroke-miterlimit:3;stroke-opacity:0.498674;paint-order:stroke fill markers"
					d="m 20.6375,18.520833 2.910416,-2.910417 V 5.2916666 H 20.6375 Z"
					id="path19347"
				/><path
					style="opacity:1;fill:#9a896a;fill-opacity:1;fill-rule:evenodd;stroke-width:3;stroke-linecap:round;stroke-linejoin:round;stroke-miterlimit:3;stroke-opacity:0.498674;paint-order:stroke fill markers"
					d="M 27.252083,12.435417 29.897916,9.7895832 V 5.2916666 h -2.645833 z"
					id="path19349"
				/><path
					style="opacity:1;fill:#907d5f;fill-opacity:1;fill-rule:evenodd;stroke-width:3;stroke-linecap:round;stroke-linejoin:round;stroke-miterlimit:3;stroke-opacity:0.498674;paint-order:stroke fill markers"
					d="m 27.252083,12.435417 -3.704167,3.174999 v -5.556249 h 3.704167 z"
					id="path19351"
				/><path
					style="opacity:1;fill:#907d5f;fill-opacity:1;fill-rule:evenodd;stroke-width:3;stroke-linecap:round;stroke-linejoin:round;stroke-miterlimit:3;stroke-opacity:0.498674;paint-order:stroke fill markers"
					d="m 17.4625,12.7 h 3.175 v 5.820833 l -1.058334,1.058333 H 17.4625 Z"
					id="path19353"
				/><path
					style="opacity:1;fill:#5b534b;fill-opacity:1;fill-rule:evenodd;stroke-width:3;stroke-linecap:round;stroke-linejoin:round;stroke-miterlimit:3;stroke-opacity:0.498674;paint-order:stroke fill markers"
					d="m 82.285416,10.847917 h 2.645833 C 86.395967,9.7810075 87.851173,8.6843217 89.164583,7.14375 90.63322,5.5078931 91.264581,3.8226131 91.545832,2.1166666 h -2.38125 c -1.8232,3.1535002 -3.966712,6.1412844 -6.879166,8.7312504 z"
					id="path19355"
				/><path
					style="opacity:1;fill:#5b534b;fill-opacity:1;fill-rule:evenodd;stroke-width:3;stroke-linecap:round;stroke-linejoin:round;stroke-miterlimit:3;stroke-opacity:0.498674;paint-order:stroke fill markers"
					d="M 124.61875,2.9104166 V 6.3499999 L 110.86042,19.314583 c -0.0774,5.027517 -4.13753,11.504319 -14.287505,19.05 -4.736766,2.92256 -11.985582,5.293612 -17.991666,7.9375 -3.349043,1.631911 -5.488397,4.415659 -7.408333,7.408333 -5.694645,5.667003 -9.913642,7.194911 -13.758333,7.672917 v -3.704167 c 9.489559,-1.499635 9.592402,-4.600551 12.964583,-7.14375 l 2.116666,-2.910417 c 1.772613,-1.912465 3.753286,-3.488957 6.085417,-4.497916 9.319013,-2.866023 14.30548,-5.925526 19.050001,-8.995833 5.32886,-4.548604 9.15291,-9.982449 10.84792,-16.66875 z"
					id="path19357"
				/><path
					style="opacity:1;fill:#5b534b;fill-opacity:1;fill-rule:evenodd;stroke-width:3;stroke-linecap:round;stroke-linejoin:round;stroke-miterlimit:3;stroke-opacity:0.498674;paint-order:stroke fill markers"
					d="m 57.414583,18.520833 c 2.118263,-1.294986 4.91698,-2.366994 5.291666,-4.233333 V 8.7312499 C 60.812142,9.5084316 58.514764,9.4149214 57.414583,11.90625 Z"
					id="path19359"
				/><path
					style="opacity:1;fill:#7d4333;fill-opacity:1;fill-rule:evenodd;stroke-width:3;stroke-linecap:round;stroke-linejoin:round;stroke-miterlimit:3;stroke-opacity:0.498674;paint-order:stroke fill markers"
					d="m 70.379166,50.535416 2.116666,-2.910417 C 71.516098,40.482253 69.31995,39.494443 67.204166,38.1 L 64.558333,36.247916 V 25.664583 l -2.38125,-2.38125 v 14.552083 c 0.630449,1.011389 3.508927,2.46573 5.291666,3.704167 2.010322,2.628349 2.416804,5.827599 2.910417,8.995833 z"
					id="path19361"
				/><path
					style="opacity:1;fill:#7d4333;fill-opacity:1;fill-rule:evenodd;stroke-width:3;stroke-linecap:round;stroke-linejoin:round;stroke-miterlimit:3;stroke-opacity:0.498674;paint-order:stroke fill markers"
					d="M 94.191665,35.189583 H 88.370832 L 71.437499,21.166666 h -4.7625 l -1.852083,-2.38125 h 7.9375 L 89.693749,32.54375 c 3.637723,0.243181 3.997245,1.465588 4.497916,2.645833 z"
					id="path19363"
				/><path
					style="opacity:1;fill:#7d4333;fill-opacity:1;fill-rule:evenodd;stroke-width:3;stroke-linecap:round;stroke-linejoin:round;stroke-miterlimit:3;stroke-opacity:0.498674;paint-order:stroke fill markers"
					d="M 69.585416,16.139583 C 68.794797,15.359239 68.13994,14.539446 68.262499,13.49375 H 87.841666 L 92.074999,9.5249999 H 113.77083 L 111.125,12.170833 H 92.868749 l -4.497917,3.96875 z"
					id="path19365"
				/></g
			><g id="g19231"
				><path
					style="opacity:1;fill:#7d4333;fill-opacity:1;fill-rule:evenodd;stroke-width:3;stroke-linecap:round;stroke-linejoin:round;stroke-miterlimit:3;stroke-opacity:0.498674;paint-order:stroke fill markers"
					d="m 53.710416,61.383333 h 3.704167 V 12.435417 c 0.06074,-2.192496 2.803356,-2.8768274 5.291666,-3.7041671 V 5.2916666 h -5.291666 l -5.820834,3.4395833 v 22.4895831 1.5875 l 2.116667,5.55625 z"
					id="path14404"
				/><path
					style="opacity:1;fill:#9a896a;fill-opacity:1;fill-rule:evenodd;stroke-width:3;stroke-linecap:round;stroke-linejoin:round;stroke-miterlimit:3;stroke-opacity:0.498674;paint-order:stroke fill markers"
					d="m 57.414583,57.679166 h 4.7625 l 7.937499,-4.582718 3.96875,-5.471449 7.9375,-3.96875 L 95.249999,37.041666 103.1875,30.427083 111.125,17.197916 123.29583,5.0270833 124.35417,3.175 V 2.1166666 H 91.545832 l -5.027083,5.0270833 -1.852083,3.1750001 -2.38125,0.529167 H 69.056249 V 8.7312499 h -6.350002 l -5.291664,9.7895831 z"
					id="path16991"
				/><path
					style="opacity:1;fill:#a13121;fill-rule:evenodd;stroke-width:3;stroke-linecap:round;stroke-linejoin:round;stroke-miterlimit:3;stroke-opacity:0.498674;paint-order:stroke fill markers;fill-opacity:1"
					d="m 27.516666,125.94167 c 2.464808,-2.57663 5.428687,-4.63811 8.73125,-6.35 h 75.935414 c 2.53644,-0.57049 2.66609,-1.93533 3.175,-3.175 V 64.293749 c -0.87487,-4.02221 -3.96049,-7.437925 -8.99583,-10.31875 v -7.672916 h 6.87917 c 5.74338,2.547647 6.94051,5.385361 8.46666,8.202083 v 65.881254 c -0.32826,2.58951 -0.59347,5.20954 -5.55625,5.55625 z"
					id="path138537"
				/><path
					style="opacity:1;fill:#f0e7a4;fill-rule:evenodd;stroke-width:3;stroke-linecap:round;stroke-linejoin:round;stroke-miterlimit:3;stroke-opacity:0.498674;paint-order:stroke fill markers;fill-opacity:1"
					d="m 13.229167,114.03542 -2.116667,2.38125 v -6.61459 c 0.263307,-0.98449 1.080152,-1.76993 2.38125,-2.38125 h 3.96875 v 3.70417 z"
					id="path138541"
				/><path
					style="opacity:1;fill:#d5b67e;fill-rule:evenodd;stroke-width:3;stroke-linecap:round;stroke-linejoin:round;stroke-miterlimit:3;stroke-opacity:0.498674;paint-order:stroke fill markers;fill-opacity:1"
					d="m 13.229167,114.03542 c 0.77127,-2.13057 2.376393,-2.74885 4.233333,-2.91042 v 2.64583 c -1.431432,0.0404 -2.981664,-0.19874 -4.233333,0.26459 z"
					id="path138539"
				/><path
					style="opacity:1;fill:#f0e7a4;fill-opacity:1;fill-rule:evenodd;stroke-width:3;stroke-linecap:round;stroke-linejoin:round;stroke-miterlimit:3;stroke-opacity:0.498674;paint-order:stroke fill markers"
					d="m 72.495832,113.77083 v -3.43958 h -3.175 v 6.35 c 0.915467,-1.45527 1.857853,-2.81913 3.175,-2.91042 z"
					id="path138597"
				/><path
					style="opacity:1;fill:#f0e7a4;fill-opacity:1;fill-rule:evenodd;stroke-width:3;stroke-linecap:round;stroke-linejoin:round;stroke-miterlimit:3;stroke-opacity:0.498674;paint-order:stroke fill markers"
					d="m 66.939583,113.77083 v -3.43958 h -3.175 v 6.35 c 0.915467,-1.45527 1.857853,-2.81913 3.175,-2.91042 z"
					id="path138599"
				/><path
					style="opacity:1;fill:#d5b67e;fill-opacity:1;fill-rule:evenodd;stroke-width:3;stroke-linecap:round;stroke-linejoin:round;stroke-miterlimit:3;stroke-opacity:0.498674;paint-order:stroke fill markers"
					d="m 72.495832,113.77083 h 3.704167 v -3.43958 H 72.49583 Z"
					id="path138601"
				/><path
					style="opacity:1;fill:#f0e7a4;fill-opacity:1;fill-rule:evenodd;stroke-width:3;stroke-linecap:round;stroke-linejoin:round;stroke-miterlimit:3;stroke-opacity:0.498674;paint-order:stroke fill markers"
					d="M 62.706249,8.7312499 V 3.7041666 h 11.377083 l -5.027083,5.0270833 z"
					id="path138659"
				/><path
					style="opacity:1;fill:#d5b67e;fill-opacity:1;fill-rule:evenodd;stroke-width:3;stroke-linecap:round;stroke-linejoin:round;stroke-miterlimit:3;stroke-opacity:0.498674;paint-order:stroke fill markers"
					d="m 51.593749,8.7312499 h 5.820834 V 2.1166666 h -2.910417 l -5.291667,1.4178979 z"
					id="path138663"
				/><path
					style="opacity:1;fill:#f0e7a4;fill-opacity:1;fill-rule:evenodd;stroke-width:3;stroke-linecap:round;stroke-linejoin:round;stroke-miterlimit:3;stroke-opacity:0.498674;paint-order:stroke fill markers"
					d="M 51.593749,8.7312499 C 51.377129,5.4573872 52.17652,3.0987205 54.504166,2.1166666 h -11.90625 l 6.614583,6.6145833 z"
					id="path138661"
				/><path
					style="opacity:1;fill:#86495e;fill-opacity:1;fill-rule:evenodd;stroke-width:3;stroke-linecap:round;stroke-linejoin:round;stroke-miterlimit:3;stroke-opacity:0.498674;paint-order:stroke fill markers"
					d="m 20.902083,113.77083 v -6.61458 h 16.66875 l 5.820833,-6.08542 c 1.6312,1.66323 3.146226,4.11622 4.990372,6.04676 1.71516,1.79552 3.847153,3.28909 7.445045,3.21366 v 3.43958 z"
					id="path138719"
				/><path
					style="opacity:1;fill:#86495e;fill-opacity:1;fill-rule:evenodd;stroke-width:3;stroke-linecap:round;stroke-linejoin:round;stroke-miterlimit:3;stroke-opacity:0.498674;paint-order:stroke fill markers"
					d="m 79.374999,116.68125 h 10.583333 l 1.322917,-1.32292 v -1.85208 h 17.727081 c 2.09214,-0.0643 2.7601,-1.27836 2.91042,-2.91042 V 97.895832 c -1.28897,1.937483 -2.98956,3.209908 -5.49926,3.174998 h -9.317408 v 6.08542 h 3.174998 v 2.91042 H 79.110416 v 6.61458 z"
					id="path138937"
				/><path
					style="opacity:1;fill:#86495e;fill-opacity:1;fill-rule:evenodd;stroke-width:3;stroke-linecap:round;stroke-linejoin:round;stroke-miterlimit:3;stroke-opacity:0.498674;paint-order:stroke fill markers"
					d="M 39.158333,101.07083 V 88.635416 l -7.9375,7.672916 c 0.303302,1.783983 0.546157,3.588493 2.645833,4.762498 z"
					id="path138939"
				/><path
					style="opacity:1;fill:#86495e;fill-opacity:1;fill-rule:evenodd;stroke-width:3;stroke-linecap:round;stroke-linejoin:round;stroke-miterlimit:3;stroke-opacity:0.498674;paint-order:stroke fill markers"
					d="m 38.629166,80.962499 v 4.233333 l -9.789583,9.789583 c -3.751135,0.699697 -5.796932,-0.386764 -4.7625,-4.762499 L 33.3375,80.962499 Z"
					id="path138941"
				/><path
					style="opacity:1;fill:#86495e;fill-opacity:1;fill-rule:evenodd;stroke-width:3;stroke-linecap:round;stroke-linejoin:round;stroke-miterlimit:3;stroke-opacity:0.498674;paint-order:stroke fill markers"
					d="M 84.666666,94.720832 V 76.993749 h -6.085417 v 17.727083 z"
					id="path138943"
				/><path
					style="opacity:1;fill:#86495e;fill-opacity:1;fill-rule:evenodd;stroke-width:3;stroke-linecap:round;stroke-linejoin:round;stroke-miterlimit:3;stroke-opacity:0.498674;paint-order:stroke fill markers"
					d="m 69.585416,97.895832 h 6.085416 V 80.168749 h -6.085416 z"
					id="path138945"
				/><path
					style="opacity:1;fill:#86495e;fill-opacity:1;fill-rule:evenodd;stroke-width:3;stroke-linecap:round;stroke-linejoin:round;stroke-miterlimit:3;stroke-opacity:0.498674;paint-order:stroke fill markers"
					d="m 60.324999,104.51042 5.820833,-3.70417 V 76.993749 c -2.831035,0.441612 -4.617922,1.916292 -5.820833,3.96875 z"
					id="path138947"
				/><path
					style="opacity:1;fill:#a13121;fill-opacity:1;fill-rule:evenodd;stroke-width:3;stroke-linecap:round;stroke-linejoin:round;stroke-miterlimit:3;stroke-opacity:0.498674;paint-order:stroke fill markers"
					d="M 97.102082,101.07083 V 97.895832 H 104.775 c 6.30088,-1.630286 5.80947,-4.56191 7.14375,-7.14375 v -23.8125 c -1.48989,-3.679161 -3.06259,-8.309674 -8.46667,-8.995833 V 46.302083 H 91.016666 v 17.197916 h 11.906254 c 2.11699,0.234546 3.04755,1.48963 3.43958,3.175 v 17.4625 h -2.91042 v -8.466667 l -2.11666,-2.116666 h -9.260421 l -3.704167,3.704166 v 20.6375 l 3.175,3.174998 z"
					id="path138951"
				/><path
					style="opacity:1;fill:#834737;fill-opacity:1;fill-rule:evenodd;stroke-width:3;stroke-linecap:round;stroke-linejoin:round;stroke-miterlimit:3;stroke-opacity:0.498674;paint-order:stroke fill markers"
					d="m 97.366665,97.895832 v -11.1125 h 2.645835 v 11.1125 z"
					id="path138949"
				/><path
					style="opacity:1;fill:#834737;fill-opacity:1;fill-rule:evenodd;stroke-width:3;stroke-linecap:round;stroke-linejoin:round;stroke-miterlimit:3;stroke-opacity:0.498674;paint-order:stroke fill markers"
					d="m 91.016666,63.499999 v 6.614583 h 12.435414 c 1.78262,0.440621 2.83561,1.356758 2.91042,2.910417 v -9.525 z"
					id="path139007"
				/><path
					style="opacity:1;fill:#834737;fill-opacity:1;fill-rule:evenodd;stroke-width:3;stroke-linecap:round;stroke-linejoin:round;stroke-miterlimit:3;stroke-opacity:0.498674;paint-order:stroke fill markers"
					d="m 81.75625,66.939583 h 6.085417 l -10e-7,6.879166 h -6.085417 z"
					id="path139063"
				/><path
					style="opacity:1;fill:#a13121;fill-opacity:1;fill-rule:evenodd;stroke-width:3;stroke-linecap:round;stroke-linejoin:round;stroke-miterlimit:3;stroke-opacity:0.498674;paint-order:stroke fill markers"
					d="M 81.756249,66.939582 V 48.683333 h 6.085417 v 18.256249 z"
					id="path139065"
				/><path
					style="opacity:1;fill:#a13121;fill-opacity:1;fill-rule:evenodd;stroke-width:3;stroke-linecap:round;stroke-linejoin:round;stroke-miterlimit:3;stroke-opacity:0.498674;paint-order:stroke fill markers"
					d="m 72.495832,55.562499 6.085417,-5.027083 v 19.84375 h -6.085417 z"
					id="path139121"
				/><path
					style="opacity:1;fill:#a13121;fill-opacity:1;fill-rule:evenodd;stroke-width:3;stroke-linecap:round;stroke-linejoin:round;stroke-miterlimit:3;stroke-opacity:0.498674;paint-order:stroke fill markers"
					d="m 57.414583,107.68542 h -3.96875 c -3.263963,-1.30543 -4.934677,-3.37499 -5.820834,-5.82084 V 91.545832 c -0.973438,-0.297275 -2.001075,-0.404763 -3.175,0 v 7.408333 C 43.36572,98.524669 42.677005,97.936018 42.597916,97.102082 V 79.904166 c 1.877513,-4.696592 6.244924,-5.801811 10.998523,-6.35 v -10.31875 h 8.845227 c 3.663194,-0.973189 5.104647,-2.606436 6.614583,-4.233333 v 11.641666 c -4.861675,1.637169 -9.255013,3.882123 -11.641666,8.73125 z"
					id="path139123"
				/><path
					style="opacity:1;fill:#a13121;fill-opacity:1;fill-rule:evenodd;stroke-width:3;stroke-linecap:round;stroke-linejoin:round;stroke-miterlimit:3;stroke-opacity:0.498674;paint-order:stroke fill markers"
					d="m 45.508333,66.939582 h 6.085416 v -7.143749 c -2.369547,0.462926 -4.48699,1.561511 -6.085416,3.96875 z"
					id="path139125"
				/><path
					style="opacity:1;fill:#6a332b;fill-opacity:1;fill-rule:evenodd;stroke-width:3;stroke-linecap:round;stroke-linejoin:round;stroke-miterlimit:3;stroke-opacity:0.498674;paint-order:stroke fill markers"
					d="m 29.897916,41.539583 v -5.291667 l 7.672917,-4.429961 h 8.466666 V 39.6875 l -12.170833,3.261164 z"
					id="path11713"
				/><path
					style="opacity:1;fill:#f0e7a4;fill-opacity:1;fill-rule:evenodd;stroke-width:3;stroke-linecap:round;stroke-linejoin:round;stroke-miterlimit:3;stroke-opacity:0.498674;paint-order:stroke fill markers"
					d="m 43.920833,23.547916 h 4.7625 c 3.864342,-2.626682 3.687619,-6.696146 4.7625,-10.318749 -1.568262,1.638052 -2.432379,3.429571 -6.614584,4.497916 -2.308581,-1.091566 -2.867225,-2.705955 -3.706848,-4.236397 -0.427606,-0.676671 -1.0171,-1.377226 -1.849402,-2.113603 h -8.995833 c -3.959084,1.549115 -12.170833,11.1125 -18.25625,16.66875 v 5.820831 l 4.497917,1.205214 9.936461,-9.936462 4.615622,-2.66483 2.89142,-2.89142 h 5.83983 z"
					id="path11975"
				/><path
					style="opacity:1;fill:#533522;fill-opacity:1;fill-rule:evenodd;stroke-width:3;stroke-linecap:round;stroke-linejoin:round;stroke-miterlimit:3;stroke-opacity:0.498674;paint-order:stroke fill markers"
					d="m 29.897916,41.539583 2.910417,-2.910417 h 9.525 l -9.525,7.408333 h -2.910417 z"
					id="path11097"
				/><path
					style="opacity:1;fill:#9a896a;fill-opacity:1;fill-rule:evenodd;stroke-width:3;stroke-linecap:round;stroke-linejoin:round;stroke-miterlimit:3;stroke-opacity:0.498674;paint-order:stroke fill markers"
					d="m 14.022916,33.866666 c 3.778578,-4.351398 8.054172,-6.868567 12.435417,-8.995833 3.470078,-1.721485 4.918779,-2.916328 5.820833,-3.96875 0.49697,-0.901469 1.017924,-1.722695 1.5875,-2.38125 h 8.466667 c 1.144634,1.024881 1.366862,3.025141 1.5875,5.027083 h -2.38125 C 40.922051,21.164129 39.774106,20.020918 38.1,20.108333 c -2.060394,-0.362241 -2.576616,1.675882 -3.439584,3.175 0.161097,0.537764 -2.473148,1.907721 -4.7625,3.175 L 19.84375,36.5125 h -6.35 z"
					id="path11919"
				/><path
					style="opacity:1;fill:#6a332b;fill-opacity:1;fill-rule:evenodd;stroke-width:3;stroke-linecap:round;stroke-linejoin:round;stroke-miterlimit:3;stroke-opacity:0.498674;paint-order:stroke fill markers"
					d="m 17.727083,35.454166 h 1.852083 v -1.058333 c 2.928447,-3.063594 6.542893,-5.566509 10.31875,-7.9375 l -3.439583,7.408333 h 3.439583 v 2.38125 l -3.666175,6.35 H 16.66875 v -7.14375 z"
					id="path11917"
				/><path
					style="opacity:1;fill:#a13121;fill-opacity:1;fill-rule:evenodd;stroke-width:3;stroke-linecap:round;stroke-linejoin:round;stroke-miterlimit:3;stroke-opacity:0.498674;paint-order:stroke fill markers"
					d="m 32.808333,73.818749 h 8.995833 l 0.79375,-3.439583 v -7.408333 l 0.529167,-1.974877 7.408333,-7.408333 1.058333,-4.90429 V 37.041666 C 51.066458,33.361763 50.457359,29.685808 46.037499,26.19375 H 34.395833 c -3.292654,0.483156 -4.103177,2.616876 -4.497917,5.027083 v 5.027083 H 34.925 c 0.101288,-1.257434 0.644316,-2.117971 1.852083,-2.38125 h 7.672916 v 2.38125 c -2.519769,3.457063 -6.964218,4.519322 -11.641666,5.291667 z"
					id="path10205"
				/><path
					style="opacity:1;fill:#834737;fill-opacity:1;fill-rule:evenodd;stroke-width:3;stroke-linecap:round;stroke-linejoin:round;stroke-miterlimit:3;stroke-opacity:0.498674;paint-order:stroke fill markers"
					d="m 51.593749,66.939582 v 3.704167 c -2.0305,0.176445 -4.059628,0.601391 -6.085416,1.630582 v -5.334749 z"
					id="path139127"
				/><path
					style="opacity:1;fill:#834737;fill-opacity:1;fill-rule:evenodd;stroke-width:3;stroke-linecap:round;stroke-linejoin:round;stroke-miterlimit:3;stroke-opacity:0.498674;paint-order:stroke fill markers"
					d="m 78.581249,70.379166 v 6.614583 h -6.085417 v -6.614583 z"
					id="path139183"
				/><path
					style="opacity:1;fill:#834737;fill-opacity:1;fill-rule:evenodd;stroke-width:3;stroke-linecap:round;stroke-linejoin:round;stroke-miterlimit:3;stroke-opacity:0.498674;paint-order:stroke fill markers"
					d="m 69.056249,70.643749 v 3.175 c -5.239019,0.0661 -8.033048,2.274774 -11.1125,4.233333 v -8.466666 h 11.1125 z"
					id="path139185"
				/><path
					style="opacity:1;fill:#834737;fill-opacity:1;fill-rule:evenodd;stroke-width:3;stroke-linecap:round;stroke-linejoin:round;stroke-miterlimit:3;stroke-opacity:0.498674;paint-order:stroke fill markers"
					d="m 44.449999,98.954165 h 3.175 v -7.937499 h -3.175 z"
					id="path139187"
				/><path
					style="opacity:1;fill:#834737;fill-opacity:1;fill-rule:evenodd;stroke-width:3;stroke-linecap:round;stroke-linejoin:round;stroke-miterlimit:3;stroke-opacity:0.498674;paint-order:stroke fill markers"
					d="m 15.08125,92.074999 0,-7.672916 h 11.641667 c -3.48925,3.355789 -7.289505,7.158171 -10.054167,7.672916 z"
					id="path139189"
				/><path
					style="opacity:1;fill:#834737;fill-opacity:1;fill-rule:evenodd;stroke-width:3;stroke-linecap:round;stroke-linejoin:round;stroke-miterlimit:3;stroke-opacity:0.498674;paint-order:stroke fill markers"
					d="m 32.808333,76.993749 v -3.175 h 3.96875 c 4.33411,-1.009275 4.960904,-2.346286 5.820834,-3.439582 V 73.025 c -0.241646,1.735707 -1.393296,3.410397 -3.968751,3.968749 z"
					id="path139191"
				/><path
					style="opacity:1;fill:#834737;fill-opacity:1;fill-rule:evenodd;stroke-width:3;stroke-linecap:round;stroke-linejoin:round;stroke-miterlimit:3;stroke-opacity:0.498674;paint-order:stroke fill markers"
					d="m 42.597916,62.970833 c 1.581873,-2.609623 4.52254,-4.577277 8.995833,-5.820834 v -8.466666 c -1.000521,2.274336 -1.732821,4.675779 -3.998507,6.350571 -3.06363,1.560596 -4.932388,4.048679 -4.997326,7.936929 z"
					id="path139193"
				/><path
					style="opacity:1;fill:#a13121;fill-opacity:1;fill-rule:evenodd;stroke-width:3;stroke-linecap:round;stroke-linejoin:round;stroke-miterlimit:3;stroke-opacity:0.498674;paint-order:stroke fill markers"
					d="m 6.3499999,70.114582 v -1.5875 L 7.6729166,67.204166 H 12.964583 L 15.875,64.293749 h 4.7625 v 2.645833 c -2.131384,0.377523 -3.84941,1.200273 -4.497917,3.175 z"
					id="path1382"
				/><path
					style="opacity:1;fill:#a13121;fill-opacity:1;fill-rule:evenodd;stroke-width:3;stroke-linecap:round;stroke-linejoin:round;stroke-miterlimit:3;stroke-opacity:0.498674;paint-order:stroke fill markers"
					d="M 2.9104166,92.074999 11.90625,82.285416 H 22.225 c 0.581492,-0.259298 1.048673,-0.666384 1.322916,-1.322917 v -2.645833 h 6.35 v 2.910416 l -3.175,3.175 H 15.08125 v 7.672917 z"
					id="path1480"
				/><path
					style="opacity:1;fill:#6a332b;fill-opacity:1;fill-rule:evenodd;stroke-width:3;stroke-linecap:round;stroke-linejoin:round;stroke-miterlimit:3;stroke-opacity:0.498674;paint-order:stroke fill markers"
					d="m 11.90625,82.285416 -3.1750001,-3.175 V 76.993749 H 29.897916 v 1.322917 h -6.35 v 3.96875 z"
					id="path1536"
				/><path
					style="opacity:1;fill:#3d2518;fill-opacity:1;fill-rule:evenodd;stroke-width:3;stroke-linecap:round;stroke-linejoin:round;stroke-miterlimit:3;stroke-opacity:0.498674;paint-order:stroke fill markers"
					d="m 23.8125,76.993749 v -3.175 H 13.49375 v 3.175 z"
					id="path1712"
				/><path
					style="opacity:1;fill:#f0e7a4;fill-opacity:1;fill-rule:evenodd;stroke-width:3;stroke-linecap:round;stroke-linejoin:round;stroke-miterlimit:3;stroke-opacity:0.498674;paint-order:stroke fill markers"
					d="m 11.1125,70.643749 c 0.978579,1.261357 1.727322,2.630594 4.233333,3.175 v 3.175 H 11.1125 Z"
					id="path1592"
				/><path
					style="opacity:1;fill:#f0e7a4;fill-opacity:1;fill-rule:evenodd;stroke-width:3;stroke-linecap:round;stroke-linejoin:round;stroke-miterlimit:3;stroke-opacity:0.498674;paint-order:stroke fill markers"
					d="m 17.4625,70.643749 c 0.978579,1.261357 1.727322,2.630594 4.233333,3.175 v 3.175 H 17.4625 Z"
					id="path1650"
				/><path
					style="opacity:1;fill:#f0e7a4;fill-opacity:1;fill-rule:evenodd;stroke-width:3;stroke-linecap:round;stroke-linejoin:round;stroke-miterlimit:3;stroke-opacity:0.498674;paint-order:stroke fill markers"
					d="M 29.897916,69.585416 V 68.527082 L 25.664583,64.293749 H 23.8125 v 12.7 h 3.439583 z"
					id="path1656"
				/><path
					style="opacity:1;fill:#d5b67e;fill-opacity:1;fill-rule:evenodd;stroke-width:3;stroke-linecap:round;stroke-linejoin:round;stroke-miterlimit:3;stroke-opacity:0.498674;paint-order:stroke fill markers"
					d="m 27.252083,76.993749 v -9.789583 l 2.645833,2.645833 v 7.14375 z"
					id="path1654"
				/><path
					style="opacity:1;fill:#513321;fill-opacity:1;fill-rule:evenodd;stroke-width:3;stroke-linecap:round;stroke-linejoin:round;stroke-miterlimit:3;stroke-opacity:0.498674;paint-order:stroke fill markers"
					d="M 5.8208333,54.504166 H 17.727083 l 5.820833,2.910417 v 3.96875 L 17.727083,57.679166 H 5.8208333 Z"
					id="path1768"
				/><path
					style="opacity:1;fill:#533522;fill-opacity:1;fill-rule:evenodd;stroke-width:3;stroke-linecap:round;stroke-linejoin:round;stroke-miterlimit:3;stroke-opacity:0.498674;paint-order:stroke fill markers"
					d="m 23.547916,51.858333 v -2.910417 h 4.233334 c 1.988638,0.749723 1.972956,1.869175 2.38125,2.910417 z"
					id="path3390"
				/><path
					style="opacity:1;fill:#5b3636;fill-opacity:1;fill-rule:evenodd;stroke-width:3;stroke-linecap:round;stroke-linejoin:round;stroke-miterlimit:3;stroke-opacity:0.498674;paint-order:stroke fill markers"
					d="M 23.547916,48.947916 H 17.727083 L 15.875,50.799999 H 11.641667 L 6.3499999,47.360416 5.8208333,54.504166 H 17.727083 l 6.35,3.666175 v -9.222425 z"
					id="path3392"
				/><path
					style="opacity:1;fill:#a13121;fill-opacity:1;fill-rule:evenodd;stroke-width:3;stroke-linecap:round;stroke-linejoin:round;stroke-miterlimit:3;stroke-opacity:0.498674;paint-order:stroke fill markers"
					d="M 23.547916,61.383333 H 30.1625 v -9.525 h -6.35 -0.264584 z"
					id="path3226"
				/><path
					style="opacity:1;fill:#6a332b;fill-opacity:1;fill-rule:evenodd;stroke-width:3;stroke-linecap:round;stroke-linejoin:round;stroke-miterlimit:3;stroke-opacity:0.498674;paint-order:stroke fill markers"
					d="m 14.2875,46.037499 c -1.351737,-0.269172 -2.671576,-2.15992 -3.439583,-6.614583 0.748534,-3.391238 1.870834,-4.902602 3.174999,-5.499261 l 1.5875,2.749632 z"
					id="path11915"
				/><path
					style="opacity:1;fill:#3d2518;fill-opacity:1;fill-rule:evenodd;stroke-width:3;stroke-linecap:round;stroke-linejoin:round;stroke-miterlimit:3;stroke-opacity:0.498674;paint-order:stroke fill markers"
					d="m 6.3499999,47.360416 1.5275727,-2.645833 c 1.4012705,2.46418 3.2498334,4.287827 6.4099274,4.233333 v -13.49375 h 3.439583 v 6.085417 h 7.9375 l 3.055146,-5.291667 h 1.178187 v 9.789583 H 17.727083 v 2.910417 c -0.287977,0.726261 -0.07487,1.618191 -1.852083,1.852083 H 11.641667 C 9.1985042,49.927579 7.823133,48.624273 6.3499999,47.360416 Z"
					id="path3448"
				/><path
					style="opacity:1;fill:#f0e7a4;fill-opacity:1;fill-rule:evenodd;stroke-width:3;stroke-linecap:round;stroke-linejoin:round;stroke-miterlimit:3;stroke-opacity:0.498674;paint-order:stroke fill markers"
					d="m 7.9374999,54.504166 h 3.4395831 v 3.439583 c -1.5663419,-0.134838 -2.5569702,1.003746 -3.4395831,2.38125 z"
					id="path3504"
				/><path
					style="opacity:1;fill:#f0e7a4;fill-opacity:1;fill-rule:evenodd;stroke-width:3;stroke-linecap:round;stroke-linejoin:round;stroke-miterlimit:3;stroke-opacity:0.498674;paint-order:stroke fill markers"
					d="M 14.022917,54.504166 H 17.4625 v 3.439583 c -1.566342,-0.134838 -2.55697,1.003746 -3.439583,2.38125 z"
					id="path3560"
				/><circle
					style="opacity:1;fill:#3666aa;fill-opacity:1;fill-rule:evenodd;stroke-width:3;stroke-linecap:round;stroke-linejoin:round;stroke-miterlimit:3;stroke-opacity:0.498674;paint-order:stroke fill markers"
					id="path8133"
					cx="19.314583"
					cy="44.185417"
					r="1.8520837"
				/><path
					style="opacity:1;fill:#9a896a;fill-opacity:1;fill-rule:evenodd;stroke-width:3;stroke-linecap:round;stroke-linejoin:round;stroke-miterlimit:3;stroke-opacity:0.498674;paint-order:stroke fill markers"
					d="m 14.2875,19.579166 h 3.175 V 8.4666666 l 0.0709,-0.2645834 h -3.2459 z"
					id="path12714"
				/><path
					style="opacity:1;fill:#9a896a;fill-opacity:1;fill-rule:evenodd;stroke-width:3;stroke-linecap:round;stroke-linejoin:round;stroke-miterlimit:3;stroke-opacity:0.498674;paint-order:stroke fill markers"
					d="m 20.6375,18.520833 2.910416,-2.910417 V 5.2916666 H 20.6375 Z"
					id="path12770"
				/><path
					style="opacity:1;fill:#9a896a;fill-opacity:1;fill-rule:evenodd;stroke-width:3;stroke-linecap:round;stroke-linejoin:round;stroke-miterlimit:3;stroke-opacity:0.498674;paint-order:stroke fill markers"
					d="M 27.252083,12.435417 29.897916,9.7895832 V 5.2916666 h -2.645833 z"
					id="path12772"
				/><path
					style="opacity:1;fill:#907d5f;fill-opacity:1;fill-rule:evenodd;stroke-width:3;stroke-linecap:round;stroke-linejoin:round;stroke-miterlimit:3;stroke-opacity:0.498674;paint-order:stroke fill markers"
					d="m 27.252083,12.435417 -3.704167,3.174999 v -5.556249 h 3.704167 z"
					id="path12774"
				/><path
					style="opacity:1;fill:#907d5f;fill-opacity:1;fill-rule:evenodd;stroke-width:3;stroke-linecap:round;stroke-linejoin:round;stroke-miterlimit:3;stroke-opacity:0.498674;paint-order:stroke fill markers"
					d="m 17.4625,12.7 h 3.175 v 5.820833 l -1.058334,1.058333 H 17.4625 Z"
					id="path12830"
				/><path
					style="opacity:1;fill:#5b534b;fill-opacity:1;fill-rule:evenodd;stroke-width:3;stroke-linecap:round;stroke-linejoin:round;stroke-miterlimit:3;stroke-opacity:0.498674;paint-order:stroke fill markers"
					d="m 82.285416,10.847917 h 2.645833 C 86.395967,9.7810075 87.851173,8.6843217 89.164583,7.14375 90.63322,5.5078931 91.264581,3.8226131 91.545832,2.1166666 h -2.38125 c -1.8232,3.1535002 -3.966712,6.1412844 -6.879166,8.7312504 z"
					id="path16927"
				/><path
					style="opacity:1;fill:#5b534b;fill-opacity:1;fill-rule:evenodd;stroke-width:3;stroke-linecap:round;stroke-linejoin:round;stroke-miterlimit:3;stroke-opacity:0.498674;paint-order:stroke fill markers"
					d="M 124.61875,2.9104166 V 6.3499999 L 110.86042,19.314583 c -0.0774,5.027517 -4.13753,11.504319 -14.287505,19.05 -4.736766,2.92256 -11.985582,5.293612 -17.991666,7.9375 -3.349043,1.631911 -5.488397,4.415659 -7.408333,7.408333 -5.694645,5.667003 -9.913642,7.194911 -13.758333,7.672917 v -3.704167 c 9.489559,-1.499635 9.592402,-4.600551 12.964583,-7.14375 l 2.116666,-2.910417 c 1.772613,-1.912465 3.753286,-3.488957 6.085417,-4.497916 9.319013,-2.866023 14.30548,-5.925526 19.050001,-8.995833 5.32886,-4.548604 9.15291,-9.982449 10.84792,-16.66875 z"
					id="path16929"
				/><path
					style="opacity:1;fill:#5b534b;fill-opacity:1;fill-rule:evenodd;stroke-width:3;stroke-linecap:round;stroke-linejoin:round;stroke-miterlimit:3;stroke-opacity:0.498674;paint-order:stroke fill markers"
					d="m 57.414583,18.520833 c 2.118263,-1.294986 4.91698,-2.366994 5.291666,-4.233333 V 8.7312499 C 60.812142,9.5084316 58.514764,9.4149214 57.414583,11.90625 Z"
					id="path16630"
				/><path
					style="opacity:1;fill:#7d4333;fill-opacity:1;fill-rule:evenodd;stroke-width:3;stroke-linecap:round;stroke-linejoin:round;stroke-miterlimit:3;stroke-opacity:0.498674;paint-order:stroke fill markers"
					d="m 70.379166,50.535416 2.116666,-2.910417 C 71.516098,40.482253 69.31995,39.494443 67.204166,38.1 L 64.558333,36.247916 V 25.664583 l -2.38125,-2.38125 v 14.552083 c 0.630449,1.011389 3.508927,2.46573 5.291666,3.704167 2.010322,2.628349 2.416804,5.827599 2.910417,8.995833 z"
					id="path16931"
				/><path
					style="opacity:1;fill:#7d4333;fill-opacity:1;fill-rule:evenodd;stroke-width:3;stroke-linecap:round;stroke-linejoin:round;stroke-miterlimit:3;stroke-opacity:0.498674;paint-order:stroke fill markers"
					d="M 94.191665,35.189583 H 88.370832 L 71.437499,21.166666 h -4.7625 l -1.852083,-2.38125 h 7.9375 L 89.693749,32.54375 c 3.637723,0.243181 3.997245,1.465588 4.497916,2.645833 z"
					id="path16987"
				/><path
					style="opacity:1;fill:#7d4333;fill-opacity:1;fill-rule:evenodd;stroke-width:3;stroke-linecap:round;stroke-linejoin:round;stroke-miterlimit:3;stroke-opacity:0.498674;paint-order:stroke fill markers"
					d="M 69.585416,16.139583 C 68.794797,15.359239 68.13994,14.539446 68.262499,13.49375 H 87.841666 L 92.074999,9.5249999 H 113.77083 L 111.125,12.170833 H 92.868749 l -4.497917,3.96875 z"
					id="path16989"
				/></g
			></g
		><metadata id="metadata21205">
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
