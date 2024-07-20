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
				id="filter54057"
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
					id="feComposite54043"
				/><feColorMatrix
					in="composite1"
					values="1"
					type="saturate"
					result="colormatrix1"
					id="feColorMatrix54045"
				/><feFlood
					flood-opacity="1"
					flood-color="rgb(0,0,0)"
					result="flood1"
					id="feFlood54047"
				/><feBlend
					in="flood1"
					in2="colormatrix1"
					mode="multiply"
					result="blend1"
					id="feBlend54049"
				/><feBlend
					in2="blend1"
					mode="screen"
					result="blend2"
					id="feBlend54051"
				/><feColorMatrix
					in="blend2"
					values="1"
					type="saturate"
					result="colormatrix2"
					id="feColorMatrix54053"
				/><feComposite
					in="colormatrix2"
					in2="SourceGraphic"
					operator="in"
					k2="1"
					result="composite2"
					id="feComposite54055"
				/></filter
			><filter
				style="color-interpolation-filters:sRGB;"
				id="filter60373"
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
					id="feComposite60359"
				/><feColorMatrix
					in="composite1"
					values="1"
					type="saturate"
					result="colormatrix1"
					id="feColorMatrix60361"
				/><feFlood
					flood-opacity="1"
					flood-color="rgb(0,0,0)"
					result="flood1"
					id="feFlood60363"
				/><feBlend
					in="flood1"
					in2="colormatrix1"
					mode="multiply"
					result="blend1"
					id="feBlend60365"
				/><feBlend
					in2="blend1"
					mode="screen"
					result="blend2"
					id="feBlend60367"
				/><feColorMatrix
					in="blend2"
					values="1"
					type="saturate"
					result="colormatrix2"
					id="feColorMatrix60369"
				/><feComposite
					in="colormatrix2"
					in2="SourceGraphic"
					operator="in"
					k2="1"
					result="composite2"
					id="feComposite60371"
				/></filter
			></defs
		>
		<!-- svelte-ignore a11y-no-static-element-interactions -->
		<!-- svelte-ignore a11y-mouse-events-have-key-events -->
		<g id="layer1"
			><g
				id="g59994"
				style="filter:url(#filter60373)"
				transform="translate(1.0583333,1.5875)"
				><path
					style="opacity:1;fill:#7e150d;fill-opacity:1;fill-rule:evenodd;stroke-width:3;stroke-linecap:round;stroke-linejoin:round;stroke-miterlimit:3;stroke-opacity:0.498674;paint-order:stroke fill markers"
					d="M 53.945833,61.354165 H 57.65 V 12.406249 c 0.06074,-2.192496 2.803356,-2.8768277 5.291666,-3.7041674 V 5.2624983 H 57.65 l -5.820834,3.4395833 v 22.4895834 1.5875 l 2.116667,5.55625 z"
					id="path59858"
				/><path
					style="opacity:1;fill:#ecac7f;fill-opacity:1;fill-rule:evenodd;stroke-width:3;stroke-linecap:round;stroke-linejoin:round;stroke-miterlimit:3;stroke-opacity:0.498674;paint-order:stroke fill markers"
					d="m 57.65,57.649998 h 4.7625 l 7.937499,-4.582718 3.96875,-5.471449 7.9375,-3.96875 13.229167,-6.614583 7.937504,-6.614583 7.9375,-13.229167 12.17083,-12.170833 1.05834,-1.8520833 V 2.0874983 H 91.781249 l -5.027083,5.0270833 -1.852083,3.1750004 -2.38125,0.529167 H 69.291666 V 8.7020816 H 62.941664 L 57.65,18.491665 Z"
					id="path59860"
				/><path
					style="opacity:1;fill:#a23322;fill-opacity:1;fill-rule:evenodd;stroke-width:3;stroke-linecap:round;stroke-linejoin:round;stroke-miterlimit:3;stroke-opacity:0.498674;paint-order:stroke fill markers"
					d="m 27.752083,125.9125 c 2.464808,-2.57663 5.428687,-4.63811 8.73125,-6.35 h 75.935417 c 2.53644,-0.57049 2.66609,-1.93533 3.175,-3.175 V 64.264581 c -0.87487,-4.02221 -3.96049,-7.437925 -8.99583,-10.31875 v -7.672916 h 6.87917 c 5.74338,2.547647 6.94051,5.385361 8.46666,8.202083 v 65.881252 c -0.32826,2.58951 -0.59347,5.20954 -5.55625,5.55625 z"
					id="path59862"
				/><path
					style="opacity:1;fill:#481814;fill-opacity:1;fill-rule:evenodd;stroke-width:3;stroke-linecap:round;stroke-linejoin:round;stroke-miterlimit:3;stroke-opacity:0.498674;paint-order:stroke fill markers"
					d="M 62.941666,8.7020816 V 3.6749983 h 11.377083 l -5.027083,5.0270833 z"
					id="path59864"
				/><path
					style="opacity:1;fill:#481814;fill-opacity:1;fill-rule:evenodd;stroke-width:3;stroke-linecap:round;stroke-linejoin:round;stroke-miterlimit:3;stroke-opacity:0.498674;paint-order:stroke fill markers"
					d="M 51.829166,8.7020816 H 57.65 V 2.0874983 h -2.910417 l -5.291667,1.4178979 z"
					id="path59866"
				/><path
					style="opacity:1;fill:#481814;fill-opacity:1;fill-rule:evenodd;stroke-width:3;stroke-linecap:round;stroke-linejoin:round;stroke-miterlimit:3;stroke-opacity:0.498674;paint-order:stroke fill markers"
					d="m 51.829166,8.7020816 c -0.21662,-3.2738627 0.582771,-5.6325294 2.910417,-6.6145833 h -11.90625 l 6.614583,6.6145833 z"
					id="path59868"
				/><path
					style="opacity:1;fill:#86495e;fill-opacity:1;fill-rule:evenodd;stroke-width:3;stroke-linecap:round;stroke-linejoin:round;stroke-miterlimit:3;stroke-opacity:0.498674;paint-order:stroke fill markers"
					d="m 21.1375,113.74166 v -6.61458 h 16.66875 l 5.820833,-6.08542 c 1.6312,1.66323 3.146226,4.11622 4.990372,6.04676 1.71516,1.79552 3.847153,3.28909 7.445045,3.21366 v 3.43958 z"
					id="path59870"
				/><path
					style="opacity:1;fill:#86495e;fill-opacity:1;fill-rule:evenodd;stroke-width:3;stroke-linecap:round;stroke-linejoin:round;stroke-miterlimit:3;stroke-opacity:0.498674;paint-order:stroke fill markers"
					d="m 79.610416,116.65208 h 10.583333 l 1.322917,-1.32292 v -1.85208 h 17.727084 c 2.09214,-0.0643 2.7601,-1.27836 2.91042,-2.91042 V 97.866664 c -1.28897,1.937483 -2.98956,3.209906 -5.49926,3.174996 h -9.317411 v 6.08542 h 3.175001 v 2.91042 H 79.345833 v 6.61458 z"
					id="path59872"
				/><path
					style="opacity:1;fill:#86495e;fill-opacity:1;fill-rule:evenodd;stroke-width:3;stroke-linecap:round;stroke-linejoin:round;stroke-miterlimit:3;stroke-opacity:0.498674;paint-order:stroke fill markers"
					d="M 39.39375,101.04166 V 88.606248 l -7.9375,7.672916 c 0.303302,1.783983 0.546157,3.588493 2.645833,4.762496 z"
					id="path59874"
				/><path
					style="opacity:1;fill:#86495e;fill-opacity:1;fill-rule:evenodd;stroke-width:3;stroke-linecap:round;stroke-linejoin:round;stroke-miterlimit:3;stroke-opacity:0.498674;paint-order:stroke fill markers"
					d="m 38.864583,80.933331 v 4.233333 L 29.075,94.956247 c -3.751135,0.699697 -5.796932,-0.386764 -4.7625,-4.762499 l 9.260417,-9.260417 z"
					id="path59876"
				/><path
					style="opacity:1;fill:#86495e;fill-opacity:1;fill-rule:evenodd;stroke-width:3;stroke-linecap:round;stroke-linejoin:round;stroke-miterlimit:3;stroke-opacity:0.498674;paint-order:stroke fill markers"
					d="M 84.902083,94.691664 V 76.964581 h -6.085417 v 17.727083 z"
					id="path59878"
				/><path
					style="opacity:1;fill:#86495e;fill-opacity:1;fill-rule:evenodd;stroke-width:3;stroke-linecap:round;stroke-linejoin:round;stroke-miterlimit:3;stroke-opacity:0.498674;paint-order:stroke fill markers"
					d="m 69.820833,97.866664 h 6.085416 V 80.139581 h -6.085416 z"
					id="path59880"
				/><path
					style="opacity:1;fill:#86495e;fill-opacity:1;fill-rule:evenodd;stroke-width:3;stroke-linecap:round;stroke-linejoin:round;stroke-miterlimit:3;stroke-opacity:0.498674;paint-order:stroke fill markers"
					d="m 60.560416,104.48125 5.820833,-3.70417 V 76.964581 c -2.831035,0.441612 -4.617922,1.916292 -5.820833,3.96875 z"
					id="path59882"
				/><path
					style="opacity:1;fill:#a23322;fill-opacity:1;fill-rule:evenodd;stroke-width:3;stroke-linecap:round;stroke-linejoin:round;stroke-miterlimit:3;stroke-opacity:0.498674;paint-order:stroke fill markers"
					d="m 97.337499,101.04166 v -3.174996 h 7.672921 c 6.30088,-1.630286 5.80947,-4.56191 7.14375,-7.14375 v -23.8125 c -1.48989,-3.679161 -3.06259,-8.309674 -8.46667,-8.995833 V 46.272915 H 91.252083 v 17.197916 h 11.906257 c 2.11699,0.234546 3.04755,1.48963 3.43958,3.175 v 17.4625 h -2.91042 v -8.466667 l -2.11666,-2.116666 h -9.260424 l -3.704167,3.704166 v 20.6375 l 3.175,3.174996 z"
					id="path59884"
				/><path
					style="opacity:1;fill:#834737;fill-opacity:1;fill-rule:evenodd;stroke-width:3;stroke-linecap:round;stroke-linejoin:round;stroke-miterlimit:3;stroke-opacity:0.498674;paint-order:stroke fill markers"
					d="m 97.602082,97.866664 v -11.1125 h 2.645838 v 11.1125 z"
					id="path59886"
				/><path
					style="opacity:1;fill:#834737;fill-opacity:1;fill-rule:evenodd;stroke-width:3;stroke-linecap:round;stroke-linejoin:round;stroke-miterlimit:3;stroke-opacity:0.498674;paint-order:stroke fill markers"
					d="m 91.252083,63.470831 v 6.614583 H 103.6875 c 1.78262,0.440621 2.83561,1.356758 2.91042,2.910417 v -9.525 z"
					id="path59888"
				/><path
					style="opacity:1;fill:#834737;fill-opacity:1;fill-rule:evenodd;stroke-width:3;stroke-linecap:round;stroke-linejoin:round;stroke-miterlimit:3;stroke-opacity:0.498674;paint-order:stroke fill markers"
					d="m 81.991667,66.910415 h 6.085417 l -10e-7,6.879166 h -6.085417 z"
					id="path59890"
				/><path
					style="opacity:1;fill:#a23322;fill-opacity:1;fill-rule:evenodd;stroke-width:3;stroke-linecap:round;stroke-linejoin:round;stroke-miterlimit:3;stroke-opacity:0.498674;paint-order:stroke fill markers"
					d="M 81.991666,66.910414 V 48.654165 h 6.085417 v 18.256249 z"
					id="path59892"
				/><path
					style="opacity:1;fill:#a23322;fill-opacity:1;fill-rule:evenodd;stroke-width:3;stroke-linecap:round;stroke-linejoin:round;stroke-miterlimit:3;stroke-opacity:0.498674;paint-order:stroke fill markers"
					d="m 72.731249,55.533331 6.085417,-5.027083 v 19.84375 h -6.085417 z"
					id="path59894"
				/><path
					style="opacity:1;fill:#a23322;fill-opacity:1;fill-rule:evenodd;stroke-width:3;stroke-linecap:round;stroke-linejoin:round;stroke-miterlimit:3;stroke-opacity:0.498674;paint-order:stroke fill markers"
					d="m 57.65,107.65625 h -3.96875 c -3.263963,-1.30543 -4.934677,-3.37499 -5.820834,-5.82084 V 91.516664 c -0.973438,-0.297275 -2.001075,-0.404763 -3.175,0 v 7.408333 C 43.601137,98.495501 42.912422,97.90685 42.833333,97.072914 V 79.874998 c 1.877513,-4.696592 6.244924,-5.801811 10.998523,-6.35 v -10.31875 h 8.845227 c 3.663194,-0.973189 5.104647,-2.606436 6.614583,-4.233333 V 70.614581 C 64.429991,72.25175 60.036653,74.496704 57.65,79.345831 Z"
					id="path59896"
				/><path
					style="opacity:1;fill:#a23322;fill-opacity:1;fill-rule:evenodd;stroke-width:3;stroke-linecap:round;stroke-linejoin:round;stroke-miterlimit:3;stroke-opacity:0.498674;paint-order:stroke fill markers"
					d="m 45.74375,66.910414 h 6.085416 v -7.143749 c -2.369547,0.462926 -4.48699,1.561511 -6.085416,3.96875 z"
					id="path59898"
				/><path
					style="opacity:1;fill:#6a332b;fill-opacity:1;fill-rule:evenodd;stroke-width:3;stroke-linecap:round;stroke-linejoin:round;stroke-miterlimit:3;stroke-opacity:0.498674;paint-order:stroke fill markers"
					d="m 30.133333,41.510415 v -5.291667 l 7.672917,-4.429961 h 8.466666 v 7.869545 l -12.170833,3.261164 z"
					id="path59900"
				/><path
					style="opacity:1;fill:#bd2720;fill-opacity:1;fill-rule:evenodd;stroke-width:3;stroke-linecap:round;stroke-linejoin:round;stroke-miterlimit:3;stroke-opacity:0.498674;paint-order:stroke fill markers"
					d="m 44.15625,23.518748 h 4.7625 c 3.864342,-2.626682 3.687619,-6.696146 4.7625,-10.318749 -1.568262,1.638052 -2.432379,3.429571 -6.614584,4.497916 -2.308581,-1.091566 -2.867225,-2.705955 -3.706848,-4.236397 -0.427606,-0.676671 -1.0171,-1.377226 -1.849402,-2.113603 h -8.995833 c -3.959084,1.549115 -12.170833,11.1125 -18.25625,16.66875 v 5.820831 l 4.497917,1.205214 9.936461,-9.936462 4.615622,-2.66483 2.89142,-2.89142 h 5.83983 z"
					id="path59902"
				/><path
					style="opacity:1;fill:#533522;fill-opacity:1;fill-rule:evenodd;stroke-width:3;stroke-linecap:round;stroke-linejoin:round;stroke-miterlimit:3;stroke-opacity:0.498674;paint-order:stroke fill markers"
					d="m 30.133333,41.510415 2.910417,-2.910417 h 9.525 l -9.525,7.408333 h -2.910417 z"
					id="path59904"
				/><path
					style="opacity:1;fill:#9b291e;fill-opacity:1;fill-rule:evenodd;stroke-width:3;stroke-linecap:round;stroke-linejoin:round;stroke-miterlimit:3;stroke-opacity:0.498674;paint-order:stroke fill markers"
					d="m 14.258333,33.837498 c 3.778578,-4.351398 8.054172,-6.868567 12.435417,-8.995833 3.470078,-1.721485 4.918779,-2.916328 5.820833,-3.96875 0.49697,-0.901469 1.017924,-1.722695 1.5875,-2.38125 h 8.466667 c 1.144634,1.024881 1.366862,3.025141 1.5875,5.027083 H 41.775 c -0.617532,-2.383787 -1.765477,-3.526998 -3.439583,-3.439583 -2.060394,-0.362241 -2.576616,1.675882 -3.439584,3.175 0.161097,0.537764 -2.473148,1.907721 -4.7625,3.175 L 20.079167,36.483332 h -6.35 z"
					id="path59906"
				/><path
					style="opacity:1;fill:#6a332b;fill-opacity:1;fill-rule:evenodd;stroke-width:3;stroke-linecap:round;stroke-linejoin:round;stroke-miterlimit:3;stroke-opacity:0.498674;paint-order:stroke fill markers"
					d="m 17.9625,35.424998 h 1.852083 v -1.058333 c 2.928447,-3.063594 6.542893,-5.566509 10.31875,-7.9375 l -3.439583,7.408333 h 3.439583 v 2.38125 l -3.666175,6.35 h -9.562991 v -7.14375 z"
					id="path59908"
				/><path
					style="opacity:1;fill:#a23322;fill-opacity:1;fill-rule:evenodd;stroke-width:3;stroke-linecap:round;stroke-linejoin:round;stroke-miterlimit:3;stroke-opacity:0.498674;paint-order:stroke fill markers"
					d="m 33.04375,73.789581 h 8.995833 l 0.79375,-3.439583 v -7.408333 l 0.529167,-1.974877 7.408333,-7.408333 1.058333,-4.90429 V 37.012498 C 51.301875,33.332595 50.692776,29.65664 46.272916,26.164582 H 34.63125 c -3.292654,0.483156 -4.103177,2.616876 -4.497917,5.027083 v 5.027083 h 5.027084 c 0.101288,-1.257434 0.644316,-2.117971 1.852083,-2.38125 h 7.672916 v 2.38125 c -2.519769,3.457063 -6.964218,4.519322 -11.641666,5.291667 z"
					id="path59910"
				/><path
					style="opacity:1;fill:#834737;fill-opacity:1;fill-rule:evenodd;stroke-width:3;stroke-linecap:round;stroke-linejoin:round;stroke-miterlimit:3;stroke-opacity:0.498674;paint-order:stroke fill markers"
					d="m 51.829166,66.910414 v 3.704167 c -2.0305,0.176445 -4.059628,0.601391 -6.085416,1.630582 v -5.334749 z"
					id="path59912"
				/><path
					style="opacity:1;fill:#834737;fill-opacity:1;fill-rule:evenodd;stroke-width:3;stroke-linecap:round;stroke-linejoin:round;stroke-miterlimit:3;stroke-opacity:0.498674;paint-order:stroke fill markers"
					d="m 78.816666,70.349998 v 6.614583 h -6.085417 v -6.614583 z"
					id="path59914"
				/><path
					style="opacity:1;fill:#834737;fill-opacity:1;fill-rule:evenodd;stroke-width:3;stroke-linecap:round;stroke-linejoin:round;stroke-miterlimit:3;stroke-opacity:0.498674;paint-order:stroke fill markers"
					d="m 69.291666,70.614581 v 3.175 c -5.239019,0.0661 -8.033048,2.274774 -11.1125,4.233333 v -8.466666 h 11.1125 z"
					id="path59916"
				/><path
					style="opacity:1;fill:#834737;fill-opacity:1;fill-rule:evenodd;stroke-width:3;stroke-linecap:round;stroke-linejoin:round;stroke-miterlimit:3;stroke-opacity:0.498674;paint-order:stroke fill markers"
					d="m 44.685416,98.924997 h 3.175 v -7.937499 h -3.175 z"
					id="path59918"
				/><path
					style="opacity:1;fill:#aa3019;fill-opacity:1;fill-rule:evenodd;stroke-width:3;stroke-linecap:round;stroke-linejoin:round;stroke-miterlimit:3;stroke-opacity:0.498674;paint-order:stroke fill markers"
					d="m 15.316667,92.045831 v -7.672916 h 11.641667 c -3.48925,3.355789 -7.289505,7.158171 -10.054167,7.672916 z"
					id="path59920"
				/><path
					style="opacity:1;fill:#834737;fill-opacity:1;fill-rule:evenodd;stroke-width:3;stroke-linecap:round;stroke-linejoin:round;stroke-miterlimit:3;stroke-opacity:0.498674;paint-order:stroke fill markers"
					d="m 33.04375,76.964581 v -3.175 h 3.96875 c 4.33411,-1.009275 4.960904,-2.346286 5.820834,-3.439582 v 2.645833 c -0.241646,1.735707 -1.393296,3.410397 -3.968751,3.968749 z"
					id="path59922"
				/><path
					style="opacity:1;fill:#834737;fill-opacity:1;fill-rule:evenodd;stroke-width:3;stroke-linecap:round;stroke-linejoin:round;stroke-miterlimit:3;stroke-opacity:0.498674;paint-order:stroke fill markers"
					d="m 42.833333,62.941665 c 1.581873,-2.609623 4.52254,-4.577277 8.995833,-5.820834 v -8.466666 c -1.000521,2.274336 -1.732821,4.675779 -3.998507,6.350571 -3.06363,1.560596 -4.932388,4.048679 -4.997326,7.936929 z"
					id="path59924"
				/><path
					style="opacity:1;fill:#efd3d5;fill-opacity:1;fill-rule:evenodd;stroke-width:3;stroke-linecap:round;stroke-linejoin:round;stroke-miterlimit:3;stroke-opacity:0.498674;paint-order:stroke fill markers"
					d="m 6.5854166,70.085414 v -1.5875 L 7.9083333,67.174998 H 13.2 l 2.910417,-2.910417 h 4.7625 v 2.645833 c -2.131384,0.377523 -3.84941,1.200273 -4.497917,3.175 z"
					id="path59926"
				/><path
					style="opacity:1;fill:#e34231;fill-opacity:1;fill-rule:evenodd;stroke-width:3;stroke-linecap:round;stroke-linejoin:round;stroke-miterlimit:3;stroke-opacity:0.498674;paint-order:stroke fill markers"
					d="m 3.1458333,92.045831 8.9958337,-9.789583 h 10.31875 c 0.581492,-0.259298 1.048673,-0.666384 1.322916,-1.322917 v -2.645833 h 6.35 v 2.910416 l -3.175,3.175 H 15.316667 v 7.672917 z"
					id="path59928"
				/><path
					style="opacity:1;fill:#6a332b;fill-opacity:1;fill-rule:evenodd;stroke-width:3;stroke-linecap:round;stroke-linejoin:round;stroke-miterlimit:3;stroke-opacity:0.498674;paint-order:stroke fill markers"
					d="m 12.141667,82.256248 -3.1750004,-3.175 V 76.964581 H 30.133333 v 1.322917 h -6.35 v 3.96875 z"
					id="path59930"
				/><path
					style="opacity:1;fill:#3d2518;fill-opacity:1;fill-rule:evenodd;stroke-width:3;stroke-linecap:round;stroke-linejoin:round;stroke-miterlimit:3;stroke-opacity:0.498674;paint-order:stroke fill markers"
					d="m 24.047917,76.964581 v -3.175 h -10.31875 v 3.175 z"
					id="path59932"
				/><path
					style="opacity:1;fill:#f0e7a4;fill-opacity:1;fill-rule:evenodd;stroke-width:3;stroke-linecap:round;stroke-linejoin:round;stroke-miterlimit:3;stroke-opacity:0.498674;paint-order:stroke fill markers"
					d="m 11.347917,70.614581 c 0.978579,1.261357 1.727322,2.630594 4.233333,3.175 v 3.175 h -4.233333 z"
					id="path59934"
				/><path
					style="opacity:1;fill:#f0e7a4;fill-opacity:1;fill-rule:evenodd;stroke-width:3;stroke-linecap:round;stroke-linejoin:round;stroke-miterlimit:3;stroke-opacity:0.498674;paint-order:stroke fill markers"
					d="m 17.697917,70.614581 c 0.978579,1.261357 1.727322,2.630594 4.233333,3.175 v 3.175 h -4.233333 z"
					id="path59936"
				/><path
					style="opacity:1;fill:#f0e7a4;fill-opacity:1;fill-rule:evenodd;stroke-width:3;stroke-linecap:round;stroke-linejoin:round;stroke-miterlimit:3;stroke-opacity:0.498674;paint-order:stroke fill markers"
					d="M 30.133333,69.556248 V 68.497914 L 25.9,64.264581 h -1.852083 v 12.7 H 27.4875 Z"
					id="path59938"
				/><path
					style="opacity:1;fill:#d5b67e;fill-opacity:1;fill-rule:evenodd;stroke-width:3;stroke-linecap:round;stroke-linejoin:round;stroke-miterlimit:3;stroke-opacity:0.498674;paint-order:stroke fill markers"
					d="m 27.4875,76.964581 v -9.789583 l 2.645833,2.645833 v 7.14375 z"
					id="path59940"
				/><path
					style="opacity:1;fill:#513321;fill-opacity:1;fill-rule:evenodd;stroke-width:3;stroke-linecap:round;stroke-linejoin:round;stroke-miterlimit:3;stroke-opacity:0.498674;paint-order:stroke fill markers"
					d="M 6.05625,54.474998 H 17.9625 l 5.820833,2.910417 v 3.96875 L 17.9625,57.649998 H 6.05625 Z"
					id="path59942"
				/><path
					style="opacity:1;fill:#533522;fill-opacity:1;fill-rule:evenodd;stroke-width:3;stroke-linecap:round;stroke-linejoin:round;stroke-miterlimit:3;stroke-opacity:0.498674;paint-order:stroke fill markers"
					d="m 23.783333,51.829165 v -2.910417 h 4.233334 c 1.988638,0.749723 1.972956,1.869175 2.38125,2.910417 z"
					id="path59944"
				/><path
					style="opacity:1;fill:#5b3636;fill-opacity:1;fill-rule:evenodd;stroke-width:3;stroke-linecap:round;stroke-linejoin:round;stroke-miterlimit:3;stroke-opacity:0.498674;paint-order:stroke fill markers"
					d="M 23.783333,48.918748 H 17.9625 l -1.852083,1.852083 H 11.877084 L 6.5854166,47.331248 6.05625,54.474998 H 17.9625 l 6.35,3.666175 v -9.222425 z"
					id="path59946"
				/><path
					style="opacity:1;fill:#e14130;fill-opacity:1;fill-rule:evenodd;stroke-width:3;stroke-linecap:round;stroke-linejoin:round;stroke-miterlimit:3;stroke-opacity:0.498674;paint-order:stroke fill markers"
					d="m 23.783333,61.354165 h 6.614584 v -9.525 h -6.35 -0.264584 z"
					id="path59948"
				/><path
					style="opacity:1;fill:#6a332b;fill-opacity:1;fill-rule:evenodd;stroke-width:3;stroke-linecap:round;stroke-linejoin:round;stroke-miterlimit:3;stroke-opacity:0.498674;paint-order:stroke fill markers"
					d="m 14.522917,46.008331 c -1.351737,-0.269172 -2.671576,-2.15992 -3.439583,-6.614583 0.748534,-3.391238 1.870834,-4.902602 3.174999,-5.499261 l 1.5875,2.749632 z"
					id="path59950"
				/><path
					style="opacity:1;fill:#3d2518;fill-opacity:1;fill-rule:evenodd;stroke-width:3;stroke-linecap:round;stroke-linejoin:round;stroke-miterlimit:3;stroke-opacity:0.498674;paint-order:stroke fill markers"
					d="m 6.5854166,47.331248 1.5275727,-2.645833 c 1.4012705,2.46418 3.2498337,4.287827 6.4099277,4.233333 V 35.424998 H 17.9625 v 6.085417 H 25.9 l 3.055146,-5.291667 h 1.178187 v 9.789583 H 17.9625 v 2.910417 c -0.287977,0.726261 -0.07487,1.618191 -1.852083,1.852083 H 11.877084 C 9.4339209,49.898411 8.0585497,48.595105 6.5854166,47.331248 Z"
					id="path59952"
				/><path
					style="opacity:1;fill:#f0e7a4;fill-opacity:1;fill-rule:evenodd;stroke-width:3;stroke-linecap:round;stroke-linejoin:round;stroke-miterlimit:3;stroke-opacity:0.498674;paint-order:stroke fill markers"
					d="M 8.1729166,54.474998 H 11.6125 v 3.439583 c -1.566342,-0.134838 -2.5569705,1.003746 -3.4395834,2.38125 z"
					id="path59954"
				/><path
					style="opacity:1;fill:#f0e7a4;fill-opacity:1;fill-rule:evenodd;stroke-width:3;stroke-linecap:round;stroke-linejoin:round;stroke-miterlimit:3;stroke-opacity:0.498674;paint-order:stroke fill markers"
					d="m 14.258334,54.474998 h 3.439583 v 3.439583 c -1.566342,-0.134838 -2.55697,1.003746 -3.439583,2.38125 z"
					id="path59956"
				/><circle
					style="opacity:1;fill:#e25a16;fill-opacity:1;fill-rule:evenodd;stroke-width:3;stroke-linecap:round;stroke-linejoin:round;stroke-miterlimit:3;stroke-opacity:0.498674;paint-order:stroke fill markers"
					id="circle59958"
					cx="19.549999"
					cy="44.15625"
					r="1.8520837"
				/><path
					style="opacity:1;fill:#e86024;fill-opacity:1;fill-rule:evenodd;stroke-width:3;stroke-linecap:round;stroke-linejoin:round;stroke-miterlimit:3;stroke-opacity:0.498674;paint-order:stroke fill markers"
					d="m 14.522917,19.549998 h 3.175 V 8.4374983 l 0.0709,-0.2645834 h -3.2459 z"
					id="path59960"
				/><path
					style="opacity:1;fill:#ce291f;fill-opacity:1;fill-rule:evenodd;stroke-width:3;stroke-linecap:round;stroke-linejoin:round;stroke-miterlimit:3;stroke-opacity:0.498674;paint-order:stroke fill markers"
					d="m 20.872917,18.491665 2.910416,-2.910417 V 5.2624983 h -2.910416 z"
					id="path59962"
				/><path
					style="opacity:1;fill:#ce291f;fill-opacity:1;fill-rule:evenodd;stroke-width:3;stroke-linecap:round;stroke-linejoin:round;stroke-miterlimit:3;stroke-opacity:0.498674;paint-order:stroke fill markers"
					d="M 27.4875,12.406249 30.133333,9.7604149 V 5.2624983 H 27.4875 Z"
					id="path59964"
				/><path
					style="opacity:1;fill:#ce291f;fill-opacity:1;fill-rule:evenodd;stroke-width:3;stroke-linecap:round;stroke-linejoin:round;stroke-miterlimit:3;stroke-opacity:0.498674;paint-order:stroke fill markers"
					d="m 27.4875,12.406249 -3.704167,3.174999 V 10.024999 H 27.4875 Z"
					id="path59966"
				/><path
					style="opacity:1;fill:#ce291f;fill-opacity:1;fill-rule:evenodd;stroke-width:3;stroke-linecap:round;stroke-linejoin:round;stroke-miterlimit:3;stroke-opacity:0.498674;paint-order:stroke fill markers"
					d="m 17.697917,12.670832 h 3.175 v 5.820833 l -1.058334,1.058333 h -2.116666 z"
					id="path59968"
				/><path
					style="opacity:1;fill:#e6793c;fill-opacity:1;fill-rule:evenodd;stroke-width:3;stroke-linecap:round;stroke-linejoin:round;stroke-miterlimit:3;stroke-opacity:0.498674;paint-order:stroke fill markers"
					d="m 82.520833,10.818749 h 2.645833 C 86.631384,9.7518392 88.08659,8.6551534 89.4,7.1145817 90.868637,5.4787248 91.499998,3.7934448 91.781249,2.0874983 h -2.38125 c -1.8232,3.1535002 -3.966712,6.1412844 -6.879166,8.7312507 z"
					id="path59970"
				/><path
					style="opacity:1;fill:#e6793c;fill-opacity:1;fill-rule:evenodd;stroke-width:3;stroke-linecap:round;stroke-linejoin:round;stroke-miterlimit:3;stroke-opacity:0.498674;paint-order:stroke fill markers"
					d="M 124.85417,2.8812483 V 6.3208316 L 111.09584,19.285415 c -0.0774,5.027517 -4.13753,11.504319 -14.287508,19.05 -4.736766,2.92256 -11.985582,5.293612 -17.991666,7.9375 -3.349043,1.631911 -5.488397,4.415659 -7.408333,7.408333 -5.694645,5.667003 -9.913642,7.194911 -13.758333,7.672917 v -3.704167 c 9.489559,-1.499635 9.592402,-4.600551 12.964583,-7.14375 l 2.116666,-2.910417 c 1.772613,-1.912465 3.753286,-3.488957 6.085417,-4.497916 9.319013,-2.866023 14.30548,-5.925526 19.050001,-8.995833 5.328863,-4.548604 9.152913,-9.982449 10.847923,-16.66875 z"
					id="path59972"
				/><path
					style="opacity:1;fill:#5b534b;fill-opacity:1;fill-rule:evenodd;stroke-width:3;stroke-linecap:round;stroke-linejoin:round;stroke-miterlimit:3;stroke-opacity:0.498674;paint-order:stroke fill markers"
					d="m 57.65,18.491665 c 2.118263,-1.294986 4.91698,-2.366994 5.291666,-4.233333 V 8.7020816 C 61.047559,9.4792633 58.750181,9.3857531 57.65,11.877082 Z"
					id="path59974"
				/><path
					style="opacity:1;fill:#a05b44;fill-opacity:1;fill-rule:evenodd;stroke-width:3;stroke-linecap:round;stroke-linejoin:round;stroke-miterlimit:3;stroke-opacity:0.498674;paint-order:stroke fill markers"
					d="m 70.614583,50.506248 2.116666,-2.910417 C 71.751515,40.453085 69.555367,39.465275 67.439583,38.070832 L 64.79375,36.218748 V 25.635415 l -2.38125,-2.38125 v 14.552083 c 0.630449,1.011389 3.508927,2.46573 5.291666,3.704167 2.010322,2.628349 2.416804,5.827599 2.910417,8.995833 z"
					id="path59976"
				/><path
					style="opacity:1;fill:#a05b44;fill-opacity:1;fill-rule:evenodd;stroke-width:3;stroke-linecap:round;stroke-linejoin:round;stroke-miterlimit:3;stroke-opacity:0.498674;paint-order:stroke fill markers"
					d="M 94.427082,35.160415 H 88.606249 L 71.672916,21.137498 h -4.7625 l -1.852083,-2.38125 h 7.9375 l 16.933333,13.758334 c 3.637723,0.243181 3.997245,1.465588 4.497916,2.645833 z"
					id="path59978"
				/><path
					style="opacity:1;fill:#a05b44;fill-opacity:1;fill-rule:evenodd;stroke-width:3;stroke-linecap:round;stroke-linejoin:round;stroke-miterlimit:3;stroke-opacity:0.498674;paint-order:stroke fill markers"
					d="m 69.820833,16.110415 c -0.790619,-0.780344 -1.445476,-1.600137 -1.322917,-2.645833 h 19.579167 l 4.233333,-3.9687504 h 21.695834 l -2.64583,2.6458334 H 93.104166 l -4.497917,3.96875 z"
					id="path59980"
				/><path
					style="opacity:1;fill:#e08c13;fill-opacity:1;fill-rule:evenodd;stroke-width:3;stroke-linecap:round;stroke-linejoin:round;stroke-miterlimit:3;stroke-opacity:0.498674;paint-order:stroke fill markers"
					d="m 11.90625,113.77083 h -1.5875 l 4.497916,-8.73125 1.5875,2.11667 3.175,-8.466668 0.264584,9.789588 -2.645834,3.96875 -1.322916,0.52916 z"
					id="path59982"
				/><path
					style="opacity:1;fill:#e0d213;fill-opacity:1;fill-rule:evenodd;stroke-width:3;stroke-linecap:round;stroke-linejoin:round;stroke-miterlimit:3;stroke-opacity:0.498674;paint-order:stroke fill markers"
					d="m 11.90625,113.77083 2.645833,-3.96875 1.322917,2.64584 2.645833,-7.9375 2.645833,7.9375 z"
					id="path59984"
				/><path
					style="opacity:1;fill:#e08c13;fill-opacity:1;fill-rule:evenodd;stroke-width:3;stroke-linecap:round;stroke-linejoin:round;stroke-miterlimit:3;stroke-opacity:0.498674;paint-order:stroke fill markers"
					d="m 28.045833,125.9125 c -2.935893,-1.8458 -2.684827,-7.48568 -1.5875,-9.49583 2.264237,-3.06721 4.736785,-6.12627 5.291667,-9.26042 0.515995,-2.22222 1.301319,-4.43166 2.645833,-6.61458 0.723914,-2.009411 1.74439,-3.558075 2.645833,-5.291671 0.497628,4.828221 0.889231,9.661221 0,14.552081 l 3.439583,-3.96875 c 0.316428,1.04856 0.658876,2.04796 0.79375,3.43959 0.253923,0.76982 0.527607,3.38237 0.79375,5.29166 1.519902,-1.06233 1.806191,-2.2677 2.38125,-3.43958 1.609758,-2.94016 3.997959,-5.66106 6.085417,-8.46667 0.07714,4.34471 0.82545,8.44147 1.852083,12.43542 1.135438,6.77123 -2.328438,8.13802 -3.704166,10.81875 H 30.95625 Z"
					id="path59986"
				/><path
					style="opacity:1;fill:#e0d213;fill-opacity:1;fill-rule:evenodd;stroke-width:3;stroke-linecap:round;stroke-linejoin:round;stroke-miterlimit:3;stroke-opacity:0.498674;paint-order:stroke fill markers"
					d="m 30.95625,125.9125 h -2.645834 c -3.126967,-3.96695 3.986712,-12.45599 7.14375,-16.63958 1.308992,2.12737 1.829249,4.75514 1.058334,8.20208 0,0 2.645833,-3.70417 2.645833,-3.43958 0,0.26458 1.5875,7.9375 1.5875,7.9375 1.336366,-4.08113 4.582546,-6.7055 6.879166,-10.05417 1.516274,1.38845 1.166481,3.42843 1.322917,5.29167 l 1.852083,-1.5875 c 3.358628,4.00161 0.812056,9.31315 -2.116666,10.28958 z"
					id="path59988"
				/><path
					style="opacity:1;fill:#e08c13;fill-opacity:1;fill-rule:evenodd;stroke-width:3;stroke-linecap:round;stroke-linejoin:round;stroke-miterlimit:3;stroke-opacity:0.498674;paint-order:stroke fill markers"
					d="m 61.912499,114.82917 h -1.058333 c -0.442869,-0.53838 -0.251068,-1.18995 0,-1.85209 2.19683,-2.26085 3.250684,-5.07841 4.7625,-7.67291 l 1.058333,2.11666 c 0.532548,-3.02868 1.902945,-5.72836 3.175,-8.466665 0.820511,0.663711 -0.662388,4.685405 2.645833,7.937505 0.720386,-3.08408 2.232386,-5.49366 3.704167,-7.937505 0.43115,3.861015 0.265881,7.627055 0,11.377085 l -3.175,3.175 h -6.879167 z"
					id="path59990"
				/><path
					style="opacity:1;fill:#e0d213;fill-opacity:1;fill-rule:evenodd;stroke-width:3;stroke-linecap:round;stroke-linejoin:round;stroke-miterlimit:3;stroke-opacity:0.498674;paint-order:stroke fill markers"
					d="m 61.912499,114.82917 c 0.913497,-1.66059 1.851035,-3.29441 3.175001,-4.49792 0.471589,0.64793 0.70246,1.46543 0.793749,2.38125 1.812059,-2.38432 2.183215,-4.42556 3.175,-6.61458 1.383207,1.83874 2.131918,4.14092 2.645833,6.61458 0.668524,-2.55878 1.947471,-4.77823 3.439584,-6.87917 0.786312,1.8166 1.425921,4.1783 2.116666,6.35 -4.333399,3.62016 -9.74273,3.4723 -15.345833,2.64584 z"
					id="path59992"
				/></g
			><g id="g51285"
				><path
					style="fill:#7e150d;fill-opacity:1;fill-rule:evenodd;stroke-width:3;stroke-linecap:round;stroke-linejoin:round;stroke-miterlimit:3;stroke-opacity:0.498674;paint-order:stroke fill markers;opacity:1"
					d="M 53.945833,61.354165 H 57.65 V 12.406249 c 0.06074,-2.192496 2.803356,-2.8768277 5.291666,-3.7041674 V 5.2624983 H 57.65 l -5.820834,3.4395833 v 22.4895834 1.5875 l 2.116667,5.55625 z"
					id="path14404"
				/><path
					style="fill:#ecac7f;fill-opacity:1;fill-rule:evenodd;stroke-width:3;stroke-linecap:round;stroke-linejoin:round;stroke-miterlimit:3;stroke-opacity:0.498674;paint-order:stroke fill markers;opacity:1"
					d="m 57.65,57.649998 h 4.7625 l 7.937499,-4.582718 3.96875,-5.471449 7.9375,-3.96875 13.229167,-6.614583 7.937504,-6.614583 7.9375,-13.229167 12.17083,-12.170833 1.05834,-1.8520833 V 2.0874983 H 91.781249 l -5.027083,5.0270833 -1.852083,3.1750004 -2.38125,0.529167 H 69.291666 V 8.7020816 H 62.941664 L 57.65,18.491665 Z"
					id="path16991"
				/><path
					style="fill:#a23322;fill-opacity:1;fill-rule:evenodd;stroke-width:3;stroke-linecap:round;stroke-linejoin:round;stroke-miterlimit:3;stroke-opacity:0.498674;paint-order:stroke fill markers;opacity:1"
					d="m 27.752083,125.9125 c 2.464808,-2.57663 5.428687,-4.63811 8.73125,-6.35 h 75.935417 c 2.53644,-0.57049 2.66609,-1.93533 3.175,-3.175 V 64.264581 c -0.87487,-4.02221 -3.96049,-7.437925 -8.99583,-10.31875 v -7.672916 h 6.87917 c 5.74338,2.547647 6.94051,5.385361 8.46666,8.202083 v 65.881252 c -0.32826,2.58951 -0.59347,5.20954 -5.55625,5.55625 z"
					id="path138537"
				/><path
					style="fill:#481814;fill-opacity:1;fill-rule:evenodd;stroke-width:3;stroke-linecap:round;stroke-linejoin:round;stroke-miterlimit:3;stroke-opacity:0.498674;paint-order:stroke fill markers;opacity:1"
					d="M 62.941666,8.7020816 V 3.6749983 h 11.377083 l -5.027083,5.0270833 z"
					id="path138659"
				/><path
					style="fill:#481814;fill-opacity:1;fill-rule:evenodd;stroke-width:3;stroke-linecap:round;stroke-linejoin:round;stroke-miterlimit:3;stroke-opacity:0.498674;paint-order:stroke fill markers;opacity:1"
					d="M 51.829166,8.7020816 H 57.65 V 2.0874983 h -2.910417 l -5.291667,1.4178979 z"
					id="path138663"
				/><path
					style="fill:#481814;fill-opacity:1;fill-rule:evenodd;stroke-width:3;stroke-linecap:round;stroke-linejoin:round;stroke-miterlimit:3;stroke-opacity:0.498674;paint-order:stroke fill markers;opacity:1"
					d="m 51.829166,8.7020816 c -0.21662,-3.2738627 0.582771,-5.6325294 2.910417,-6.6145833 h -11.90625 l 6.614583,6.6145833 z"
					id="path138661"
				/><path
					style="fill:#86495e;fill-opacity:1;fill-rule:evenodd;stroke-width:3;stroke-linecap:round;stroke-linejoin:round;stroke-miterlimit:3;stroke-opacity:0.498674;paint-order:stroke fill markers;opacity:1"
					d="m 21.1375,113.74166 v -6.61458 h 16.66875 l 5.820833,-6.08542 c 1.6312,1.66323 3.146226,4.11622 4.990372,6.04676 1.71516,1.79552 3.847153,3.28909 7.445045,3.21366 v 3.43958 z"
					id="path138719"
				/><path
					style="fill:#86495e;fill-opacity:1;fill-rule:evenodd;stroke-width:3;stroke-linecap:round;stroke-linejoin:round;stroke-miterlimit:3;stroke-opacity:0.498674;paint-order:stroke fill markers;opacity:1"
					d="m 79.610416,116.65208 h 10.583333 l 1.322917,-1.32292 v -1.85208 h 17.727084 c 2.09214,-0.0643 2.7601,-1.27836 2.91042,-2.91042 V 97.866664 c -1.28897,1.937483 -2.98956,3.209906 -5.49926,3.174996 h -9.317411 v 6.08542 h 3.175001 v 2.91042 H 79.345833 v 6.61458 z"
					id="path138937"
				/><path
					style="fill:#86495e;fill-opacity:1;fill-rule:evenodd;stroke-width:3;stroke-linecap:round;stroke-linejoin:round;stroke-miterlimit:3;stroke-opacity:0.498674;paint-order:stroke fill markers;opacity:1"
					d="M 39.39375,101.04166 V 88.606248 l -7.9375,7.672916 c 0.303302,1.783983 0.546157,3.588493 2.645833,4.762496 z"
					id="path138939"
				/><path
					style="fill:#86495e;fill-opacity:1;fill-rule:evenodd;stroke-width:3;stroke-linecap:round;stroke-linejoin:round;stroke-miterlimit:3;stroke-opacity:0.498674;paint-order:stroke fill markers;opacity:1"
					d="m 38.864583,80.933331 v 4.233333 L 29.075,94.956247 c -3.751135,0.699697 -5.796932,-0.386764 -4.7625,-4.762499 l 9.260417,-9.260417 z"
					id="path138941"
				/><path
					style="fill:#86495e;fill-opacity:1;fill-rule:evenodd;stroke-width:3;stroke-linecap:round;stroke-linejoin:round;stroke-miterlimit:3;stroke-opacity:0.498674;paint-order:stroke fill markers;opacity:1"
					d="M 84.902083,94.691664 V 76.964581 h -6.085417 v 17.727083 z"
					id="path138943"
				/><path
					style="fill:#86495e;fill-opacity:1;fill-rule:evenodd;stroke-width:3;stroke-linecap:round;stroke-linejoin:round;stroke-miterlimit:3;stroke-opacity:0.498674;paint-order:stroke fill markers;opacity:1"
					d="m 69.820833,97.866664 h 6.085416 V 80.139581 h -6.085416 z"
					id="path138945"
				/><path
					style="fill:#86495e;fill-opacity:1;fill-rule:evenodd;stroke-width:3;stroke-linecap:round;stroke-linejoin:round;stroke-miterlimit:3;stroke-opacity:0.498674;paint-order:stroke fill markers;opacity:1"
					d="m 60.560416,104.48125 5.820833,-3.70417 V 76.964581 c -2.831035,0.441612 -4.617922,1.916292 -5.820833,3.96875 z"
					id="path138947"
				/><path
					style="fill:#a23322;fill-opacity:1;fill-rule:evenodd;stroke-width:3;stroke-linecap:round;stroke-linejoin:round;stroke-miterlimit:3;stroke-opacity:0.498674;paint-order:stroke fill markers;opacity:1"
					d="m 97.337499,101.04166 v -3.174996 h 7.672921 c 6.30088,-1.630286 5.80947,-4.56191 7.14375,-7.14375 v -23.8125 c -1.48989,-3.679161 -3.06259,-8.309674 -8.46667,-8.995833 V 46.272915 H 91.252083 v 17.197916 h 11.906257 c 2.11699,0.234546 3.04755,1.48963 3.43958,3.175 v 17.4625 h -2.91042 v -8.466667 l -2.11666,-2.116666 h -9.260424 l -3.704167,3.704166 v 20.6375 l 3.175,3.174996 z"
					id="path138951"
				/><path
					style="fill:#834737;fill-opacity:1;fill-rule:evenodd;stroke-width:3;stroke-linecap:round;stroke-linejoin:round;stroke-miterlimit:3;stroke-opacity:0.498674;paint-order:stroke fill markers;opacity:1"
					d="m 97.602082,97.866664 v -11.1125 h 2.645838 v 11.1125 z"
					id="path138949"
				/><path
					style="fill:#834737;fill-opacity:1;fill-rule:evenodd;stroke-width:3;stroke-linecap:round;stroke-linejoin:round;stroke-miterlimit:3;stroke-opacity:0.498674;paint-order:stroke fill markers;opacity:1"
					d="m 91.252083,63.470831 v 6.614583 H 103.6875 c 1.78262,0.440621 2.83561,1.356758 2.91042,2.910417 v -9.525 z"
					id="path139007"
				/><path
					style="fill:#834737;fill-opacity:1;fill-rule:evenodd;stroke-width:3;stroke-linecap:round;stroke-linejoin:round;stroke-miterlimit:3;stroke-opacity:0.498674;paint-order:stroke fill markers;opacity:1"
					d="m 81.991667,66.910415 h 6.085417 l -10e-7,6.879166 h -6.085417 z"
					id="path139063"
				/><path
					style="fill:#a23322;fill-opacity:1;fill-rule:evenodd;stroke-width:3;stroke-linecap:round;stroke-linejoin:round;stroke-miterlimit:3;stroke-opacity:0.498674;paint-order:stroke fill markers;opacity:1"
					d="M 81.991666,66.910414 V 48.654165 h 6.085417 v 18.256249 z"
					id="path139065"
				/><path
					style="fill:#a23322;fill-opacity:1;fill-rule:evenodd;stroke-width:3;stroke-linecap:round;stroke-linejoin:round;stroke-miterlimit:3;stroke-opacity:0.498674;paint-order:stroke fill markers;opacity:1"
					d="m 72.731249,55.533331 6.085417,-5.027083 v 19.84375 h -6.085417 z"
					id="path139121"
				/><path
					style="fill:#a23322;fill-opacity:1;fill-rule:evenodd;stroke-width:3;stroke-linecap:round;stroke-linejoin:round;stroke-miterlimit:3;stroke-opacity:0.498674;paint-order:stroke fill markers;opacity:1"
					d="m 57.65,107.65625 h -3.96875 c -3.263963,-1.30543 -4.934677,-3.37499 -5.820834,-5.82084 V 91.516664 c -0.973438,-0.297275 -2.001075,-0.404763 -3.175,0 v 7.408333 C 43.601137,98.495501 42.912422,97.90685 42.833333,97.072914 V 79.874998 c 1.877513,-4.696592 6.244924,-5.801811 10.998523,-6.35 v -10.31875 h 8.845227 c 3.663194,-0.973189 5.104647,-2.606436 6.614583,-4.233333 V 70.614581 C 64.429991,72.25175 60.036653,74.496704 57.65,79.345831 Z"
					id="path139123"
				/><path
					style="fill:#a23322;fill-opacity:1;fill-rule:evenodd;stroke-width:3;stroke-linecap:round;stroke-linejoin:round;stroke-miterlimit:3;stroke-opacity:0.498674;paint-order:stroke fill markers;opacity:1"
					d="m 45.74375,66.910414 h 6.085416 v -7.143749 c -2.369547,0.462926 -4.48699,1.561511 -6.085416,3.96875 z"
					id="path139125"
				/><path
					style="fill:#6a332b;fill-opacity:1;fill-rule:evenodd;stroke-width:3;stroke-linecap:round;stroke-linejoin:round;stroke-miterlimit:3;stroke-opacity:0.498674;paint-order:stroke fill markers;opacity:1"
					d="m 30.133333,41.510415 v -5.291667 l 7.672917,-4.429961 h 8.466666 v 7.869545 l -12.170833,3.261164 z"
					id="path11713"
				/><path
					style="fill:#bd2720;fill-opacity:1;fill-rule:evenodd;stroke-width:3;stroke-linecap:round;stroke-linejoin:round;stroke-miterlimit:3;stroke-opacity:0.498674;paint-order:stroke fill markers;opacity:1"
					d="m 44.15625,23.518748 h 4.7625 c 3.864342,-2.626682 3.687619,-6.696146 4.7625,-10.318749 -1.568262,1.638052 -2.432379,3.429571 -6.614584,4.497916 -2.308581,-1.091566 -2.867225,-2.705955 -3.706848,-4.236397 -0.427606,-0.676671 -1.0171,-1.377226 -1.849402,-2.113603 h -8.995833 c -3.959084,1.549115 -12.170833,11.1125 -18.25625,16.66875 v 5.820831 l 4.497917,1.205214 9.936461,-9.936462 4.615622,-2.66483 2.89142,-2.89142 h 5.83983 z"
					id="path11975"
				/><path
					style="fill:#533522;fill-opacity:1;fill-rule:evenodd;stroke-width:3;stroke-linecap:round;stroke-linejoin:round;stroke-miterlimit:3;stroke-opacity:0.498674;paint-order:stroke fill markers;opacity:1"
					d="m 30.133333,41.510415 2.910417,-2.910417 h 9.525 l -9.525,7.408333 h -2.910417 z"
					id="path11097"
				/><path
					style="fill:#9b291e;fill-opacity:1;fill-rule:evenodd;stroke-width:3;stroke-linecap:round;stroke-linejoin:round;stroke-miterlimit:3;stroke-opacity:0.498674;paint-order:stroke fill markers;opacity:1"
					d="m 14.258333,33.837498 c 3.778578,-4.351398 8.054172,-6.868567 12.435417,-8.995833 3.470078,-1.721485 4.918779,-2.916328 5.820833,-3.96875 0.49697,-0.901469 1.017924,-1.722695 1.5875,-2.38125 h 8.466667 c 1.144634,1.024881 1.366862,3.025141 1.5875,5.027083 H 41.775 c -0.617532,-2.383787 -1.765477,-3.526998 -3.439583,-3.439583 -2.060394,-0.362241 -2.576616,1.675882 -3.439584,3.175 0.161097,0.537764 -2.473148,1.907721 -4.7625,3.175 L 20.079167,36.483332 h -6.35 z"
					id="path11919"
				/><path
					style="fill:#6a332b;fill-opacity:1;fill-rule:evenodd;stroke-width:3;stroke-linecap:round;stroke-linejoin:round;stroke-miterlimit:3;stroke-opacity:0.498674;paint-order:stroke fill markers;opacity:1"
					d="m 17.9625,35.424998 h 1.852083 v -1.058333 c 2.928447,-3.063594 6.542893,-5.566509 10.31875,-7.9375 l -3.439583,7.408333 h 3.439583 v 2.38125 l -3.666175,6.35 h -9.562991 v -7.14375 z"
					id="path11917"
				/><path
					style="fill:#a23322;fill-opacity:1;fill-rule:evenodd;stroke-width:3;stroke-linecap:round;stroke-linejoin:round;stroke-miterlimit:3;stroke-opacity:0.498674;paint-order:stroke fill markers;opacity:1"
					d="m 33.04375,73.789581 h 8.995833 l 0.79375,-3.439583 v -7.408333 l 0.529167,-1.974877 7.408333,-7.408333 1.058333,-4.90429 V 37.012498 C 51.301875,33.332595 50.692776,29.65664 46.272916,26.164582 H 34.63125 c -3.292654,0.483156 -4.103177,2.616876 -4.497917,5.027083 v 5.027083 h 5.027084 c 0.101288,-1.257434 0.644316,-2.117971 1.852083,-2.38125 h 7.672916 v 2.38125 c -2.519769,3.457063 -6.964218,4.519322 -11.641666,5.291667 z"
					id="path10205"
				/><path
					style="fill:#834737;fill-opacity:1;fill-rule:evenodd;stroke-width:3;stroke-linecap:round;stroke-linejoin:round;stroke-miterlimit:3;stroke-opacity:0.498674;paint-order:stroke fill markers;opacity:1"
					d="m 51.829166,66.910414 v 3.704167 c -2.0305,0.176445 -4.059628,0.601391 -6.085416,1.630582 v -5.334749 z"
					id="path139127"
				/><path
					style="fill:#834737;fill-opacity:1;fill-rule:evenodd;stroke-width:3;stroke-linecap:round;stroke-linejoin:round;stroke-miterlimit:3;stroke-opacity:0.498674;paint-order:stroke fill markers;opacity:1"
					d="m 78.816666,70.349998 v 6.614583 h -6.085417 v -6.614583 z"
					id="path139183"
				/><path
					style="fill:#834737;fill-opacity:1;fill-rule:evenodd;stroke-width:3;stroke-linecap:round;stroke-linejoin:round;stroke-miterlimit:3;stroke-opacity:0.498674;paint-order:stroke fill markers;opacity:1"
					d="m 69.291666,70.614581 v 3.175 c -5.239019,0.0661 -8.033048,2.274774 -11.1125,4.233333 v -8.466666 h 11.1125 z"
					id="path139185"
				/><path
					style="fill:#834737;fill-opacity:1;fill-rule:evenodd;stroke-width:3;stroke-linecap:round;stroke-linejoin:round;stroke-miterlimit:3;stroke-opacity:0.498674;paint-order:stroke fill markers;opacity:1"
					d="m 44.685416,98.924997 h 3.175 v -7.937499 h -3.175 z"
					id="path139187"
				/><path
					style="fill:#aa3019;fill-opacity:1;fill-rule:evenodd;stroke-width:3;stroke-linecap:round;stroke-linejoin:round;stroke-miterlimit:3;stroke-opacity:0.498674;paint-order:stroke fill markers;opacity:1"
					d="m 15.316667,92.045831 v -7.672916 h 11.641667 c -3.48925,3.355789 -7.289505,7.158171 -10.054167,7.672916 z"
					id="path139189"
				/><path
					style="fill:#834737;fill-opacity:1;fill-rule:evenodd;stroke-width:3;stroke-linecap:round;stroke-linejoin:round;stroke-miterlimit:3;stroke-opacity:0.498674;paint-order:stroke fill markers;opacity:1"
					d="m 33.04375,76.964581 v -3.175 h 3.96875 c 4.33411,-1.009275 4.960904,-2.346286 5.820834,-3.439582 v 2.645833 c -0.241646,1.735707 -1.393296,3.410397 -3.968751,3.968749 z"
					id="path139191"
				/><path
					style="fill:#834737;fill-opacity:1;fill-rule:evenodd;stroke-width:3;stroke-linecap:round;stroke-linejoin:round;stroke-miterlimit:3;stroke-opacity:0.498674;paint-order:stroke fill markers;opacity:1"
					d="m 42.833333,62.941665 c 1.581873,-2.609623 4.52254,-4.577277 8.995833,-5.820834 v -8.466666 c -1.000521,2.274336 -1.732821,4.675779 -3.998507,6.350571 -3.06363,1.560596 -4.932388,4.048679 -4.997326,7.936929 z"
					id="path139193"
				/><path
					style="fill:#efd3d5;fill-opacity:1;fill-rule:evenodd;stroke-width:3;stroke-linecap:round;stroke-linejoin:round;stroke-miterlimit:3;stroke-opacity:0.498674;paint-order:stroke fill markers;opacity:1"
					d="m 6.5854166,70.085414 v -1.5875 L 7.9083333,67.174998 H 13.2 l 2.910417,-2.910417 h 4.7625 v 2.645833 c -2.131384,0.377523 -3.84941,1.200273 -4.497917,3.175 z"
					id="path1382"
				/><path
					style="fill:#e34231;fill-opacity:1;fill-rule:evenodd;stroke-width:3;stroke-linecap:round;stroke-linejoin:round;stroke-miterlimit:3;stroke-opacity:0.498674;paint-order:stroke fill markers;opacity:1"
					d="m 3.1458333,92.045831 8.9958337,-9.789583 h 10.31875 c 0.581492,-0.259298 1.048673,-0.666384 1.322916,-1.322917 v -2.645833 h 6.35 v 2.910416 l -3.175,3.175 H 15.316667 v 7.672917 z"
					id="path1480"
				/><path
					style="fill:#6a332b;fill-opacity:1;fill-rule:evenodd;stroke-width:3;stroke-linecap:round;stroke-linejoin:round;stroke-miterlimit:3;stroke-opacity:0.498674;paint-order:stroke fill markers;opacity:1"
					d="m 12.141667,82.256248 -3.1750004,-3.175 V 76.964581 H 30.133333 v 1.322917 h -6.35 v 3.96875 z"
					id="path1536"
				/><path
					style="fill:#3d2518;fill-opacity:1;fill-rule:evenodd;stroke-width:3;stroke-linecap:round;stroke-linejoin:round;stroke-miterlimit:3;stroke-opacity:0.498674;paint-order:stroke fill markers;opacity:1"
					d="m 24.047917,76.964581 v -3.175 h -10.31875 v 3.175 z"
					id="path1712"
				/><path
					style="fill:#f0e7a4;fill-opacity:1;fill-rule:evenodd;stroke-width:3;stroke-linecap:round;stroke-linejoin:round;stroke-miterlimit:3;stroke-opacity:0.498674;paint-order:stroke fill markers;opacity:1"
					d="m 11.347917,70.614581 c 0.978579,1.261357 1.727322,2.630594 4.233333,3.175 v 3.175 h -4.233333 z"
					id="path1592"
				/><path
					style="fill:#f0e7a4;fill-opacity:1;fill-rule:evenodd;stroke-width:3;stroke-linecap:round;stroke-linejoin:round;stroke-miterlimit:3;stroke-opacity:0.498674;paint-order:stroke fill markers;opacity:1"
					d="m 17.697917,70.614581 c 0.978579,1.261357 1.727322,2.630594 4.233333,3.175 v 3.175 h -4.233333 z"
					id="path1650"
				/><path
					style="fill:#f0e7a4;fill-opacity:1;fill-rule:evenodd;stroke-width:3;stroke-linecap:round;stroke-linejoin:round;stroke-miterlimit:3;stroke-opacity:0.498674;paint-order:stroke fill markers;opacity:1"
					d="M 30.133333,69.556248 V 68.497914 L 25.9,64.264581 h -1.852083 v 12.7 H 27.4875 Z"
					id="path1656"
				/><path
					style="fill:#d5b67e;fill-opacity:1;fill-rule:evenodd;stroke-width:3;stroke-linecap:round;stroke-linejoin:round;stroke-miterlimit:3;stroke-opacity:0.498674;paint-order:stroke fill markers;opacity:1"
					d="m 27.4875,76.964581 v -9.789583 l 2.645833,2.645833 v 7.14375 z"
					id="path1654"
				/><path
					style="fill:#513321;fill-opacity:1;fill-rule:evenodd;stroke-width:3;stroke-linecap:round;stroke-linejoin:round;stroke-miterlimit:3;stroke-opacity:0.498674;paint-order:stroke fill markers;opacity:1"
					d="M 6.05625,54.474998 H 17.9625 l 5.820833,2.910417 v 3.96875 L 17.9625,57.649998 H 6.05625 Z"
					id="path1768"
				/><path
					style="fill:#533522;fill-opacity:1;fill-rule:evenodd;stroke-width:3;stroke-linecap:round;stroke-linejoin:round;stroke-miterlimit:3;stroke-opacity:0.498674;paint-order:stroke fill markers;opacity:1"
					d="m 23.783333,51.829165 v -2.910417 h 4.233334 c 1.988638,0.749723 1.972956,1.869175 2.38125,2.910417 z"
					id="path3390"
				/><path
					style="fill:#5b3636;fill-opacity:1;fill-rule:evenodd;stroke-width:3;stroke-linecap:round;stroke-linejoin:round;stroke-miterlimit:3;stroke-opacity:0.498674;paint-order:stroke fill markers;opacity:1"
					d="M 23.783333,48.918748 H 17.9625 l -1.852083,1.852083 H 11.877084 L 6.5854166,47.331248 6.05625,54.474998 H 17.9625 l 6.35,3.666175 v -9.222425 z"
					id="path3392"
				/><path
					style="fill:#e14130;fill-opacity:1;fill-rule:evenodd;stroke-width:3;stroke-linecap:round;stroke-linejoin:round;stroke-miterlimit:3;stroke-opacity:0.498674;paint-order:stroke fill markers;opacity:1"
					d="m 23.783333,61.354165 h 6.614584 v -9.525 h -6.35 -0.264584 z"
					id="path3226"
				/><path
					style="fill:#6a332b;fill-opacity:1;fill-rule:evenodd;stroke-width:3;stroke-linecap:round;stroke-linejoin:round;stroke-miterlimit:3;stroke-opacity:0.498674;paint-order:stroke fill markers;opacity:1"
					d="m 14.522917,46.008331 c -1.351737,-0.269172 -2.671576,-2.15992 -3.439583,-6.614583 0.748534,-3.391238 1.870834,-4.902602 3.174999,-5.499261 l 1.5875,2.749632 z"
					id="path11915"
				/><path
					style="fill:#3d2518;fill-opacity:1;fill-rule:evenodd;stroke-width:3;stroke-linecap:round;stroke-linejoin:round;stroke-miterlimit:3;stroke-opacity:0.498674;paint-order:stroke fill markers;opacity:1"
					d="m 6.5854166,47.331248 1.5275727,-2.645833 c 1.4012705,2.46418 3.2498337,4.287827 6.4099277,4.233333 V 35.424998 H 17.9625 v 6.085417 H 25.9 l 3.055146,-5.291667 h 1.178187 v 9.789583 H 17.9625 v 2.910417 c -0.287977,0.726261 -0.07487,1.618191 -1.852083,1.852083 H 11.877084 C 9.4339209,49.898411 8.0585497,48.595105 6.5854166,47.331248 Z"
					id="path3448"
				/><path
					style="fill:#f0e7a4;fill-opacity:1;fill-rule:evenodd;stroke-width:3;stroke-linecap:round;stroke-linejoin:round;stroke-miterlimit:3;stroke-opacity:0.498674;paint-order:stroke fill markers;opacity:1"
					d="M 8.1729166,54.474998 H 11.6125 v 3.439583 c -1.566342,-0.134838 -2.5569705,1.003746 -3.4395834,2.38125 z"
					id="path3504"
				/><path
					style="fill:#f0e7a4;fill-opacity:1;fill-rule:evenodd;stroke-width:3;stroke-linecap:round;stroke-linejoin:round;stroke-miterlimit:3;stroke-opacity:0.498674;paint-order:stroke fill markers;opacity:1"
					d="m 14.258334,54.474998 h 3.439583 v 3.439583 c -1.566342,-0.134838 -2.55697,1.003746 -3.439583,2.38125 z"
					id="path3560"
				/><circle
					style="fill:#e25a16;fill-opacity:1;fill-rule:evenodd;stroke-width:3;stroke-linecap:round;stroke-linejoin:round;stroke-miterlimit:3;stroke-opacity:0.498674;paint-order:stroke fill markers;opacity:1"
					id="path8133"
					cx="19.549999"
					cy="44.15625"
					r="1.8520837"
				/><path
					style="fill:#e86024;fill-opacity:1;fill-rule:evenodd;stroke-width:3;stroke-linecap:round;stroke-linejoin:round;stroke-miterlimit:3;stroke-opacity:0.498674;paint-order:stroke fill markers;opacity:1"
					d="m 14.522917,19.549998 h 3.175 V 8.4374983 l 0.0709,-0.2645834 h -3.2459 z"
					id="path12714"
				/><path
					style="fill:#ce291f;fill-opacity:1;fill-rule:evenodd;stroke-width:3;stroke-linecap:round;stroke-linejoin:round;stroke-miterlimit:3;stroke-opacity:0.498674;paint-order:stroke fill markers;opacity:1"
					d="m 20.872917,18.491665 2.910416,-2.910417 V 5.2624983 h -2.910416 z"
					id="path12770"
				/><path
					style="fill:#ce291f;fill-opacity:1;fill-rule:evenodd;stroke-width:3;stroke-linecap:round;stroke-linejoin:round;stroke-miterlimit:3;stroke-opacity:0.498674;paint-order:stroke fill markers;opacity:1"
					d="M 27.4875,12.406249 30.133333,9.7604149 V 5.2624983 H 27.4875 Z"
					id="path12772"
				/><path
					style="fill:#ce291f;fill-opacity:1;fill-rule:evenodd;stroke-width:3;stroke-linecap:round;stroke-linejoin:round;stroke-miterlimit:3;stroke-opacity:0.498674;paint-order:stroke fill markers;opacity:1"
					d="m 27.4875,12.406249 -3.704167,3.174999 V 10.024999 H 27.4875 Z"
					id="path12774"
				/><path
					style="fill:#ce291f;fill-opacity:1;fill-rule:evenodd;stroke-width:3;stroke-linecap:round;stroke-linejoin:round;stroke-miterlimit:3;stroke-opacity:0.498674;paint-order:stroke fill markers;opacity:1"
					d="m 17.697917,12.670832 h 3.175 v 5.820833 l -1.058334,1.058333 h -2.116666 z"
					id="path12830"
				/><path
					style="fill:#e6793c;fill-opacity:1;fill-rule:evenodd;stroke-width:3;stroke-linecap:round;stroke-linejoin:round;stroke-miterlimit:3;stroke-opacity:0.498674;paint-order:stroke fill markers;opacity:1"
					d="m 82.520833,10.818749 h 2.645833 C 86.631384,9.7518392 88.08659,8.6551534 89.4,7.1145817 90.868637,5.4787248 91.499998,3.7934448 91.781249,2.0874983 h -2.38125 c -1.8232,3.1535002 -3.966712,6.1412844 -6.879166,8.7312507 z"
					id="path16927"
				/><path
					style="fill:#e6793c;fill-opacity:1;fill-rule:evenodd;stroke-width:3;stroke-linecap:round;stroke-linejoin:round;stroke-miterlimit:3;stroke-opacity:0.498674;paint-order:stroke fill markers;opacity:1"
					d="M 124.85417,2.8812483 V 6.3208316 L 111.09584,19.285415 c -0.0774,5.027517 -4.13753,11.504319 -14.287508,19.05 -4.736766,2.92256 -11.985582,5.293612 -17.991666,7.9375 -3.349043,1.631911 -5.488397,4.415659 -7.408333,7.408333 -5.694645,5.667003 -9.913642,7.194911 -13.758333,7.672917 v -3.704167 c 9.489559,-1.499635 9.592402,-4.600551 12.964583,-7.14375 l 2.116666,-2.910417 c 1.772613,-1.912465 3.753286,-3.488957 6.085417,-4.497916 9.319013,-2.866023 14.30548,-5.925526 19.050001,-8.995833 5.328863,-4.548604 9.152913,-9.982449 10.847923,-16.66875 z"
					id="path16929"
				/><path
					style="fill:#5b534b;fill-opacity:1;fill-rule:evenodd;stroke-width:3;stroke-linecap:round;stroke-linejoin:round;stroke-miterlimit:3;stroke-opacity:0.498674;paint-order:stroke fill markers;opacity:1"
					d="m 57.65,18.491665 c 2.118263,-1.294986 4.91698,-2.366994 5.291666,-4.233333 V 8.7020816 C 61.047559,9.4792633 58.750181,9.3857531 57.65,11.877082 Z"
					id="path16630"
				/><path
					style="fill:#a05b44;fill-opacity:1;fill-rule:evenodd;stroke-width:3;stroke-linecap:round;stroke-linejoin:round;stroke-miterlimit:3;stroke-opacity:0.498674;paint-order:stroke fill markers;opacity:1"
					d="m 70.614583,50.506248 2.116666,-2.910417 C 71.751515,40.453085 69.555367,39.465275 67.439583,38.070832 L 64.79375,36.218748 V 25.635415 l -2.38125,-2.38125 v 14.552083 c 0.630449,1.011389 3.508927,2.46573 5.291666,3.704167 2.010322,2.628349 2.416804,5.827599 2.910417,8.995833 z"
					id="path16931"
				/><path
					style="fill:#a05b44;fill-opacity:1;fill-rule:evenodd;stroke-width:3;stroke-linecap:round;stroke-linejoin:round;stroke-miterlimit:3;stroke-opacity:0.498674;paint-order:stroke fill markers;opacity:1"
					d="M 94.427082,35.160415 H 88.606249 L 71.672916,21.137498 h -4.7625 l -1.852083,-2.38125 h 7.9375 l 16.933333,13.758334 c 3.637723,0.243181 3.997245,1.465588 4.497916,2.645833 z"
					id="path16987"
				/><path
					style="fill:#a05b44;fill-opacity:1;fill-rule:evenodd;stroke-width:3;stroke-linecap:round;stroke-linejoin:round;stroke-miterlimit:3;stroke-opacity:0.498674;paint-order:stroke fill markers;opacity:1"
					d="m 69.820833,16.110415 c -0.790619,-0.780344 -1.445476,-1.600137 -1.322917,-2.645833 h 19.579167 l 4.233333,-3.9687504 h 21.695834 l -2.64583,2.6458334 H 93.104166 l -4.497917,3.96875 z"
					id="path16989"
				/><path
					style="opacity:1;fill:#e08c13;fill-opacity:1;fill-rule:evenodd;stroke-width:3;stroke-linecap:round;stroke-linejoin:round;stroke-miterlimit:3;stroke-opacity:0.498674;paint-order:stroke fill markers"
					d="m 11.90625,113.77083 h -1.5875 l 4.497916,-8.73125 1.5875,2.11667 3.175,-8.466668 0.264584,9.789588 -2.645834,3.96875 -1.322916,0.52916 z"
					id="path48943"
				/><path
					style="opacity:1;fill:#e0d213;fill-opacity:1;fill-rule:evenodd;stroke-width:3;stroke-linecap:round;stroke-linejoin:round;stroke-miterlimit:3;stroke-opacity:0.498674;paint-order:stroke fill markers"
					d="m 11.90625,113.77083 2.645833,-3.96875 1.322917,2.64584 2.645833,-7.9375 2.645833,7.9375 z"
					id="path48941"
				/><path
					style="opacity:1;fill:#e08c13;fill-opacity:1;fill-rule:evenodd;stroke-width:3;stroke-linecap:round;stroke-linejoin:round;stroke-miterlimit:3;stroke-opacity:0.498674;paint-order:stroke fill markers"
					d="m 28.045833,125.9125 c -2.935893,-1.8458 -2.684827,-7.48568 -1.5875,-9.49583 2.264237,-3.06721 4.736785,-6.12627 5.291667,-9.26042 0.515995,-2.22222 1.301319,-4.43166 2.645833,-6.61458 0.723914,-2.009411 1.74439,-3.558075 2.645833,-5.291671 0.497628,4.828221 0.889231,9.661221 0,14.552081 l 3.439583,-3.96875 c 0.316428,1.04856 0.658876,2.04796 0.79375,3.43959 0.253923,0.76982 0.527607,3.38237 0.79375,5.29166 1.519902,-1.06233 1.806191,-2.2677 2.38125,-3.43958 1.609758,-2.94016 3.997959,-5.66106 6.085417,-8.46667 0.07714,4.34471 0.82545,8.44147 1.852083,12.43542 1.135438,6.77123 -2.328438,8.13802 -3.704166,10.81875 l -17.727083,0 z"
					id="path49113"
				/><path
					style="opacity:1;fill:#e0d213;fill-opacity:1;fill-rule:evenodd;stroke-width:3;stroke-linecap:round;stroke-linejoin:round;stroke-miterlimit:3;stroke-opacity:0.498674;paint-order:stroke fill markers"
					d="m 30.95625,125.9125 h -2.645834 c -3.126967,-3.96695 3.986712,-12.45599 7.14375,-16.63958 1.308992,2.12737 1.829249,4.75514 1.058334,8.20208 0,0 2.645833,-3.70417 2.645833,-3.43958 0,0.26458 1.5875,7.9375 1.5875,7.9375 1.336366,-4.08113 4.582546,-6.7055 6.879166,-10.05417 1.516274,1.38845 1.166481,3.42843 1.322917,5.29167 l 1.852083,-1.5875 c 3.358628,4.00161 0.812056,9.31315 -2.116666,10.28958 z"
					id="path48999"
				/><path
					style="opacity:1;fill:#e08c13;fill-opacity:1;fill-rule:evenodd;stroke-width:3;stroke-linecap:round;stroke-linejoin:round;stroke-miterlimit:3;stroke-opacity:0.498674;paint-order:stroke fill markers"
					d="m 61.912499,114.82917 h -1.058333 c -0.442869,-0.53838 -0.251068,-1.18995 0,-1.85209 2.19683,-2.26085 3.250684,-5.07841 4.7625,-7.67291 l 1.058333,2.11666 c 0.532548,-3.02868 1.902945,-5.72836 3.175,-8.466665 0.820511,0.663711 -0.662388,4.685405 2.645833,7.937505 0.720386,-3.08408 2.232386,-5.49366 3.704167,-7.937505 0.43115,3.861015 0.265881,7.627055 0,11.377085 l -3.175,3.175 h -6.879167 z"
					id="path49057"
				/><path
					style="opacity:1;fill:#e0d213;fill-opacity:1;fill-rule:evenodd;stroke-width:3;stroke-linecap:round;stroke-linejoin:round;stroke-miterlimit:3;stroke-opacity:0.498674;paint-order:stroke fill markers"
					d="m 61.912499,114.82917 c 0.913497,-1.66059 1.851035,-3.29441 3.175001,-4.49792 0.471589,0.64793 0.70246,1.46543 0.793749,2.38125 1.812059,-2.38432 2.183215,-4.42556 3.175,-6.61458 1.383207,1.83874 2.131918,4.14092 2.645833,6.61458 0.668524,-2.55878 1.947471,-4.77823 3.439584,-6.87917 0.786312,1.8166 1.425921,4.1783 2.116666,6.35 -4.333399,3.62016 -9.74273,3.4723 -15.345833,2.64584 z"
					id="path49055"
				/></g
			></g
		><metadata id="metadata51650">
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
