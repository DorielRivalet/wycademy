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
				id="filter156036"
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
					id="feComposite156022"
				/><feColorMatrix
					in="composite1"
					values="1"
					type="saturate"
					result="colormatrix1"
					id="feColorMatrix156024"
				/><feFlood
					flood-opacity="1"
					flood-color="rgb(0,0,0)"
					result="flood1"
					id="feFlood156026"
				/><feBlend
					in="flood1"
					in2="colormatrix1"
					mode="multiply"
					result="blend1"
					id="feBlend156028"
				/><feBlend
					in2="blend1"
					mode="screen"
					result="blend2"
					id="feBlend156030"
				/><feColorMatrix
					in="blend2"
					values="1"
					type="saturate"
					result="colormatrix2"
					id="feColorMatrix156032"
				/><feComposite
					in="colormatrix2"
					in2="SourceGraphic"
					operator="in"
					k2="1"
					result="composite2"
					id="feComposite156034"
				/></filter
			></defs
		>
		<!-- svelte-ignore a11y-no-static-element-interactions -->
		<!-- svelte-ignore a11y-mouse-events-have-key-events -->
		<g id="layer1"
			><g
				id="g155657"
				style="filter:url(#filter156036)"
				transform="translate(1.0583333,1.5875)"
				><path
					style="opacity:1;fill:#cee1eb;fill-opacity:1;fill-rule:evenodd;stroke-width:1.2;stroke-linecap:round;stroke-linejoin:round;stroke-miterlimit:3;paint-order:stroke fill markers"
					d="m 51.064584,17.197917 6.349997,-1e-6 5.29167,1e-6 -1e-6,-5.820834 V 8.2020832 H 53.975001 V 5.0270833 H 51.064583 V 15.08125 Z"
					id="path155257"
				/><path
					style="opacity:1;fill:#cee1eb;fill-opacity:1;fill-rule:evenodd;stroke-width:1.2;stroke-linecap:round;stroke-linejoin:round;stroke-miterlimit:3;paint-order:stroke fill markers"
					d="m 62.441666,17.197917 6.349997,-1e-6 5.29167,1e-6 -10e-7,-5.820834 V 8.2020832 H 65.352083 V 5.0270833 H 62.441665 V 15.08125 Z"
					id="path155259"
				/><path
					style="opacity:1;fill:#cee1eb;fill-opacity:1;fill-rule:evenodd;stroke-width:1.2;stroke-linecap:round;stroke-linejoin:round;stroke-miterlimit:3;paint-order:stroke fill markers"
					d="m 100.0125,17.197916 h 3.43958 l 2.64584,-5.820833 V 8.2020832 H 100.0125 V 5.0270833 H 97.102082 V 15.08125 Z"
					id="path155261"
				/><path
					style="opacity:1;fill:#cee1eb;fill-opacity:1;fill-rule:evenodd;stroke-width:1.2;stroke-linecap:round;stroke-linejoin:round;stroke-miterlimit:3;paint-order:stroke fill markers"
					d="M 117.73958,22.754166 H 123.825 V 14.2875 l -6.08542,-6.0854168 h -5.55625 V 5.0270833 h -3.70416 V 17.197916 h 3.70416 4.23334 z"
					id="path155263"
				/><path
					style="opacity:1;fill:#98b0c0;fill-opacity:1;fill-rule:evenodd;stroke-width:1.2;stroke-linecap:round;stroke-linejoin:round;stroke-miterlimit:3;paint-order:stroke fill markers"
					d="m 67.997916,103.98125 -0.79375,-0.52917 -1.322917,2.64584 h -2.910416 v 7.9375 l 6.349999,-6.35 z"
					id="path155265"
				/><path
					style="opacity:1;fill:#5b7082;fill-opacity:1;fill-rule:evenodd;stroke-width:1.2;stroke-linecap:round;stroke-linejoin:round;stroke-miterlimit:3;paint-order:stroke fill markers"
					d="m 53.974999,119.0625 v -6.08542 h 9.789584 l 1.5875,-2.91041 2.645833,-2.91042 v -3.175 l 6.085416,-11.112501 h 3.175 6.085417 l 2.910417,-2.645833 h 2.645833 l 1.058333,2.116666 -1.322916,2.910417 -2.645834,5.027081 v 0.79375 l -1.322916,3.175 -1.322917,3.175 -1.058333,2.64584 -1.322917,3.175 -1.058333,2.38125 -2.116667,0.79375 -5.027083,3.43958 h -18.25625 z"
					id="path155267"
				/><path
					style="opacity:1;fill:#5b7082;fill-opacity:1;fill-rule:evenodd;stroke-width:1.2;stroke-linecap:round;stroke-linejoin:round;stroke-miterlimit:3;paint-order:stroke fill markers"
					d="m 86.254166,75.670832 c 3.224642,2.90523 6.221491,5.948801 5.291666,11.377084 h -5.291666 z"
					id="path155269"
				/><path
					style="opacity:1;fill:#5b7082;fill-opacity:1;fill-rule:evenodd;stroke-width:1.2;stroke-linecap:round;stroke-linejoin:round;stroke-miterlimit:3;paint-order:stroke fill markers"
					d="m 67.997916,83.872916 v -7.14375 h 16.66875 v 7.14375 z"
					id="path155271"
				/><path
					style="opacity:1;fill:#cee1eb;fill-opacity:1;fill-rule:evenodd;stroke-width:1.2;stroke-linecap:round;stroke-linejoin:round;stroke-miterlimit:3;paint-order:stroke fill markers"
					d="m 116.15208,80.697916 v 5.027083 L 111.125,80.697916 H 95.249999 l -0.79375,-0.79375 -2.116667,-6.085417 -4.497916,0.79375 -2.38125,-1.058333 -1.322917,-3.439584 -7.408333,2.645834 -3.175,0.264583 -2.910417,-1.5875 -2.645833,0.79375 -7.14375,3.96875 -4.233333,1.852083 -7.9375,-5.027083 -0.529167,-1.5875 1.058333,-3.175 5.55625,-8.995833 4.497917,-4.233333 0.264583,2.645833 h 2.116667 l 8.202083,-5.027083 1.058333,-3.439584 1.5875,3.439584 2.116667,2.116666 9.789583,-1.5875 h 3.175 l 0.79375,0.529167 1.058334,1.058333 6.879166,0.264584 2.38125,1.5875 1.852088,2.116666 5.55625,2.116667 v 8.202083 h 2.64583 6.08542 l 3.43958,8.466667 z"
					id="path155273"
				/><path
					style="opacity:1;fill:#a9b2b4;fill-opacity:1;fill-rule:evenodd;stroke-width:1.2;stroke-linecap:round;stroke-linejoin:round;stroke-miterlimit:3;paint-order:stroke fill markers"
					d="m 89.958332,71.172916 c 0.533715,-1.940446 1.847575,-2.801046 3.704167,-2.910417 1.945856,-0.09632 3.18839,0.01569 3.96875,0.264583 l 6.879171,3.439584 -1.5875,0.79375 H 91.281249 Z"
					id="path155275"
				/><path
					style="opacity:1;fill:#a9b2b4;fill-opacity:1;fill-rule:evenodd;stroke-width:1.2;stroke-linecap:round;stroke-linejoin:round;stroke-miterlimit:3;paint-order:stroke fill markers"
					d="m 78.316666,72.760416 h -1.5875 c 0.460918,-2.955392 0.352729,-6.01541 2.116666,-8.73125 2.902295,0.17663 5.637906,0.702481 8.202084,1.5875 l -3.704167,5.291666 z"
					id="path155277"
				/><path
					style="opacity:1;fill:#a9b2b4;fill-opacity:1;fill-rule:evenodd;stroke-width:1.2;stroke-linecap:round;stroke-linejoin:round;stroke-miterlimit:3;paint-order:stroke fill markers"
					d="m 84.931249,61.383333 3.439583,-7.672917 8.73125,0.264583 -3.055146,5.291667 z"
					id="path155279"
				/><path
					style="opacity:1;fill:#a9b2b4;fill-opacity:1;fill-rule:evenodd;stroke-width:1.2;stroke-linecap:round;stroke-linejoin:round;stroke-miterlimit:3;paint-order:stroke fill markers"
					d="m 50.270833,63.764583 c -2.82e-4,-2.925619 1.27529,-4.409693 2.655265,-5.564868 1.921247,-1.608273 4.193617,-2.533327 6.340568,-3.166382 l -2.38125,8.73125 z"
					id="path155281"
				/><path
					style="opacity:1;fill:#a9b2b4;fill-opacity:1;fill-rule:evenodd;stroke-width:1.2;stroke-linecap:round;stroke-linejoin:round;stroke-miterlimit:3;paint-order:stroke fill markers"
					d="m 74.083332,60.854166 h -1.322916 l 1.985057,-7.408333 c 0.457482,-1.11979 1.442188,-1.35723 2.512859,-1.450801 h 7.9375 l -2.38125,4.124447 -5.027083,4.20552 z"
					id="path155283"
				/><path
					style="opacity:1;fill:#a9b2b4;fill-opacity:1;fill-rule:evenodd;stroke-width:1.2;stroke-linecap:round;stroke-linejoin:round;stroke-miterlimit:3;paint-order:stroke fill markers"
					d="m 61.647916,73.289582 1.058333,-4.497916 c 4.786364,-3.251507 8.257436,-3.820537 12.170833,-5.291667 l -0.79375,6.085417 -12.170833,5.027083 z"
					id="path155285"
				/><g
					id="g155291"
					transform="matrix(1.2499966,0,0,1.2499966,-27.119416,-35.850659)"
					style="opacity:1"
					><path
						style="opacity:1;fill:#98b0c0;fill-opacity:1;fill-rule:evenodd;stroke-width:1.2;stroke-linecap:round;stroke-linejoin:round;stroke-miterlimit:3;paint-order:stroke fill markers"
						d="m 108.47916,116.73418 v -4.86835 l 3.17501,1.37584 v 1.85208 z"
						id="path155287"
					/><path
						style="opacity:1;fill:#cee1eb;fill-opacity:1;fill-rule:evenodd;stroke-width:1.2;stroke-linecap:round;stroke-linejoin:round;stroke-miterlimit:3;paint-order:stroke fill markers"
						d="m 111.65417,113.24167 1.85208,1.05833 -1.85208,0.79375 z"
						id="path155289"
					/></g
				><path
					style="opacity:1;fill:#5b7082;fill-opacity:1;fill-rule:evenodd;stroke-width:1.2;stroke-linecap:round;stroke-linejoin:round;stroke-miterlimit:3;paint-order:stroke fill markers"
					d="m 108.74375,106.89167 v -2.91042 h -7.9375 c 0.10197,-4.211661 2.55054,-5.167943 5.02708,-6.085418 h 6.08542 l 2.91042,-2.910417 v -2.645833 l -3.70417,-2.38125 -9.26042,1.322917 -1.32291,2.645833 -1.322921,5.291667 -2.645834,2.645831 v 6.61459 h 9.260415 z"
					id="path155293"
				/><path
					style="opacity:1;fill:#5b7082;fill-opacity:1;fill-rule:evenodd;stroke-width:1.2;stroke-linecap:round;stroke-linejoin:round;stroke-miterlimit:3;paint-order:stroke fill markers"
					d="m 65.881249,98.160415 h 2.116667 v -5.556249 h -6.879167 l -2.645833,-2.38125 h -2.38125 v 10.847914 c 0.688909,0.77312 1.568677,0.62047 2.38125,0.79375 h 5.027083 v -2.116665 z"
					id="path155295"
				/><path
					style="opacity:1;fill:#cee1eb;fill-opacity:1;fill-rule:evenodd;stroke-width:1.2;stroke-linecap:round;stroke-linejoin:round;stroke-miterlimit:3;paint-order:stroke fill markers"
					d="m 28.045833,111.125 h 3.175 l 1.5875,3.96875 -1.5875,1.32292 -3.704167,-4.7625 z"
					id="path155297"
				/><path
					style="opacity:1;fill:#cee1eb;fill-opacity:1;fill-rule:evenodd;stroke-width:1.2;stroke-linecap:round;stroke-linejoin:round;stroke-miterlimit:3;paint-order:stroke fill markers"
					d="m 34.660416,110.06667 3.704167,2.64583 c -0.570127,1.66397 0.339975,3.08688 1.322917,4.49792 h -0.79375 -4.497917 l -2.38125,-2.64584 -1.058333,-3.96875 z"
					id="path155299"
				/><path
					style="opacity:1;fill:#cee1eb;fill-opacity:1;fill-rule:evenodd;stroke-width:1.2;stroke-linecap:round;stroke-linejoin:round;stroke-miterlimit:3;paint-order:stroke fill markers"
					d="m 50.799999,101.86458 1.322917,0.26459 -3.175,6.35 -9.260416,2.64583 -6.614584,-2.64583 9.260417,-6.61459 6.614583,-3.968748 z"
					id="path155301"
				/><path
					style="opacity:1;fill:#cee1eb;fill-opacity:1;fill-rule:evenodd;stroke-width:1.2;stroke-linecap:round;stroke-linejoin:round;stroke-miterlimit:3;paint-order:stroke fill markers"
					d="m 47.889583,92.604166 c 2.418345,0.04971 4.048201,-1.291721 5.820833,-2.38125 l -3.704167,8.466666 -9.260416,2.645838 -4.233333,-9.260421 7.672916,-0.79375 z"
					id="path155303"
				/><path
					style="opacity:1;fill:#cee1eb;fill-opacity:1;fill-rule:evenodd;stroke-width:1.2;stroke-linecap:round;stroke-linejoin:round;stroke-miterlimit:3;paint-order:stroke fill markers"
					d="m 45.243749,71.702082 -6.085416,7.9375 c 1.293219,0.343026 2.037201,-0.346886 2.910416,-0.79375 0.173383,1.687128 0.154198,3.330451 -0.79375,4.7625 5.852344,-2.980925 9.963055,-2.832204 13.758334,-2.116666 l -16.66875,9.260416 -6.35,-5.027083 9.789583,-12.964583 z"
					id="path155305"
				/><path
					style="opacity:1;fill:#5b7082;fill-opacity:1;fill-rule:evenodd;stroke-width:1.2;stroke-linecap:round;stroke-linejoin:round;stroke-miterlimit:3;paint-order:stroke fill markers"
					d="m 47.889583,92.604166 h -6.35 l -3.96875,-2.291358 0.79375,-0.354476 c 4.464984,-5.303134 10.51161,-7.010522 16.66875,-8.466666 -2.7176,3.552976 -5.761021,6.959496 -7.14375,11.1125 z"
					id="path155307"
				/><path
					style="opacity:1;fill:#5b7082;fill-opacity:1;fill-rule:evenodd;stroke-width:1.2;stroke-linecap:round;stroke-linejoin:round;stroke-miterlimit:3;paint-order:stroke fill markers"
					d="m 28.310416,111.125 c 2.115313,3.12549 5.225627,5.64591 10.583334,6.08542 l -5.027083,1.5875 c -1.977447,0.33375 -3.513612,0.0339 -4.497917,-1.05834 l -3.704167,-5.02708 z"
					id="path155309"
				/><path
					style="opacity:1;fill:#cee1eb;fill-opacity:1;fill-rule:evenodd;stroke-width:1.2;stroke-linecap:round;stroke-linejoin:round;stroke-miterlimit:3;paint-order:stroke fill markers"
					d="m 7.9374999,117.475 c 1.6734749,-0.30982 3.3408711,-0.26044 5.0270831,-1.32292 l 1.5875,-1.5875 13.758333,-8.20208 2.38125,1.85208 -2.38125,3.175 -10.847916,7.14375 c -3.166574,0.46536 -6.34683,-0.39773 -9.5250001,-1.05833 z"
					id="path155311"
				/><path
					style="opacity:1;fill:#deeeee;fill-opacity:1;fill-rule:evenodd;stroke-width:1.2;stroke-linecap:round;stroke-linejoin:round;stroke-miterlimit:3;paint-order:stroke fill markers"
					d="m 15.345833,79.904166 -0.79375,-1.5875 6.085417,-6.879167 0.79375,-2.38125 3.704166,3.704167 -4.7625,5.820833 z"
					id="path155313"
				/><path
					style="opacity:1;fill:#98b0c0;fill-opacity:1;fill-rule:evenodd;stroke-width:1.2;stroke-linecap:round;stroke-linejoin:round;stroke-miterlimit:3;paint-order:stroke fill markers"
					d="m 15.875,83.872916 -0.529167,-3.96875 7.14375,-7.14375 h 2.645833 v 8.73125 z"
					id="path155315"
				/><path
					style="opacity:1;fill:#deeeee;fill-opacity:1;fill-rule:evenodd;stroke-width:1.2;stroke-linecap:round;stroke-linejoin:round;stroke-miterlimit:3;paint-order:stroke fill markers"
					d="m 26.722916,73.818749 v -2.38125 l 9.260417,-16.66875 2.910417,2.910417 v 2.645833 L 31.75,72.760416 Z"
					id="path155317"
				/><path
					style="opacity:1;fill:#98b0c0;fill-opacity:1;fill-rule:evenodd;stroke-width:1.2;stroke-linecap:round;stroke-linejoin:round;stroke-miterlimit:3;paint-order:stroke fill markers"
					d="M 26.722916,78.316666 V 73.024999 L 37.30625,60.060416 h 1.5875 v 10.054166 l -3.360661,5.820834 -5.370589,2.910416 z"
					id="path155319"
				/><path
					style="opacity:1;fill:#deeeee;fill-opacity:1;fill-rule:evenodd;stroke-width:1.2;stroke-linecap:round;stroke-linejoin:round;stroke-miterlimit:3;paint-order:stroke fill markers"
					d="m 43.127083,64.822916 2.116666,-4.233333 2.910417,2.910416 -2.910417,2.910417 z"
					id="path155321"
				/><path
					style="opacity:1;fill:#98b0c0;fill-opacity:1;fill-rule:evenodd;stroke-width:1.2;stroke-linecap:round;stroke-linejoin:round;stroke-miterlimit:3;paint-order:stroke fill markers"
					d="m 38.1,74.612499 5.027083,-9.789583 1.852083,-1.322917 h 3.175 c -0.177947,2.583348 -0.725897,5.237073 -2.910417,8.202083 l -6.879166,3.175 z"
					id="path155323"
				/><path
					style="opacity:1;fill:#5b7082;fill-opacity:1;fill-rule:evenodd;stroke-width:1.2;stroke-linecap:round;stroke-linejoin:round;stroke-miterlimit:3;paint-order:stroke fill markers"
					d="M 50.799999,101.86458 48.683333,101.33542 44.45,99.483333 c 5.053146,-2.450739 7.20743,-5.973758 9.260416,-9.260417 0.41823,3.240831 0.03816,6.849499 -2.910417,11.641664 z"
					id="path155325"
				/><path
					style="opacity:1;fill:#5b7082;fill-opacity:1;fill-rule:evenodd;stroke-width:1.2;stroke-linecap:round;stroke-linejoin:round;stroke-miterlimit:3;paint-order:stroke fill markers"
					d="m 35.983333,111.65417 c 2.892368,2.56207 7.327603,0.5668 11.90625,-1.85209 3.423773,-2.31765 5.012181,-5.09612 6.35,-7.9375 l -2.116667,0.26459 c -1.574426,1.82173 -3.168846,3.61462 -5.027083,5.02708 -3.053808,1.44564 -6.049128,2.10706 -8.995833,2.11667 z"
					id="path155327"
				/><path
					style="opacity:1;fill:#303547;fill-opacity:1;fill-rule:evenodd;stroke-width:1.2;stroke-linecap:round;stroke-linejoin:round;stroke-miterlimit:3;paint-order:stroke fill markers"
					d="M 28.310416,107.15625 29.36875,107.95 c 0.838287,3.50943 1.298599,7.2093 5.55625,8.99583 -1.207274,-1.57996 -2.434286,-3.15683 -2.910417,-5.29166 3.731849,0.91468 6.504966,-0.0545 9.260416,-1.05834 -1.822358,-0.67328 -3.675673,-1.30965 -4.497916,-3.175 7.659017,-0.13501 11.090417,-4.32609 14.022916,-8.995831 -3.264809,1.102458 -6.529061,1.794471 -9.789583,-0.264584 0.133185,-1.888329 -0.92807,-3.275366 -2.38125,-4.497916 4.233262,-0.349513 6.361479,-2.032686 7.672917,-4.233333 -2.611317,0.582821 -5.170009,1.785305 -7.9375,0.529166 1.969241,-2.35367 1.887628,-5.123419 1.5875,-7.9375 -1.407696,2.193669 -3.514599,3.528578 -6.35,3.96875 l -4.233333,3.96875 -0.264584,11.906248 z"
					id="path155329"
				/><path
					style="opacity:1;fill:#1c272d;fill-opacity:1;fill-rule:evenodd;stroke-width:1.2;stroke-linecap:round;stroke-linejoin:round;stroke-miterlimit:3;paint-order:stroke fill markers"
					d="m 10.31875,110.59583 v -1.32291 c 0.0136,-0.66037 0.801985,-0.76311 1.322917,-1.05834 l 2.116666,-1.05833 c 0.676124,-0.52063 1.331136,-1.01264 1.852083,-1.32292 l 5.291667,-2.64583 C 22.52515,101.40401 24.146843,99.627584 25.4,99.747915 l 2.116666,1.058335 -1.322916,3.175 -11.641667,6.61458 z"
					id="path155331"
				/><path
					style="opacity:1;fill:#deeeee;fill-opacity:1;fill-rule:evenodd;stroke-width:1.2;stroke-linecap:round;stroke-linejoin:round;stroke-miterlimit:3;paint-order:stroke fill markers"
					d="m 16.933333,107.68542 c -2.245563,-3.65161 -3.960151,-7.09919 -3.704166,-9.789588 2.817659,3.074708 6.587561,5.101248 10.583333,6.879168 z"
					id="path155333"
				/><path
					style="opacity:1;fill:#98b0c0;fill-opacity:1;fill-rule:evenodd;stroke-width:1.2;stroke-linecap:round;stroke-linejoin:round;stroke-miterlimit:3;paint-order:stroke fill markers"
					d="m 16.933333,107.68542 -1.322916,-2.11667 5.027083,-2.38125 3.175,1.5875 z"
					id="path155335"
				/><path
					style="opacity:1;fill:#deeeee;fill-opacity:1;fill-rule:evenodd;stroke-width:1.2;stroke-linecap:round;stroke-linejoin:round;stroke-miterlimit:3;paint-order:stroke fill markers"
					d="m 12.170833,109.80208 c -1.072876,-1.88886 -0.904261,-3.36038 -0.529166,-4.7625 0.856599,1.46765 2.299347,2.53166 3.968749,3.43959 z"
					id="path155337"
				/><path
					style="opacity:1;fill:#98b0c0;fill-opacity:1;fill-rule:evenodd;stroke-width:1.2;stroke-linecap:round;stroke-linejoin:round;stroke-miterlimit:3;paint-order:stroke fill markers"
					d="m 15.345833,108.21458 -0.529166,-0.26458 -2.910417,1.32292 0.264583,0.52916 3.175,-0.52916 z"
					id="path155339"
				/><path
					style="opacity:1;fill:#cee1eb;fill-opacity:1;fill-rule:evenodd;stroke-width:1.2;stroke-linecap:round;stroke-linejoin:round;stroke-miterlimit:3;paint-order:stroke fill markers"
					d="m 13.229167,113.77083 c -1.887674,-0.50262 -2.878184,-1.64761 -3.7041671,-2.91041 L 25.4,103.71667 v -7.672921 c -0.247635,-2.245774 -1.47259,-2.797872 -2.645834,-3.439583 h 3.704167 l 0.79375,5.556249 -0.79375,8.995835 z"
					id="path155341"
				/><path
					style="opacity:1;fill:#576b7e;fill-opacity:1;fill-rule:evenodd;stroke-width:1.2;stroke-linecap:round;stroke-linejoin:round;stroke-miterlimit:3;paint-order:stroke fill markers"
					d="M 5.0270833,94.985415 C 6.035864,94.145024 6.7289137,93.197726 8.4666666,92.604166 H 24.60625 c 0.765439,0.819051 1.444849,1.631394 1.322916,2.381249 v 10.318755 l -9.260416,4.49791 c -2.527095,0.7196 -3.915708,2.66991 -3.704167,6.35 0.891345,-0.36842 1.626282,-0.28774 2.38125,-0.26458 l 12.964583,-8.73125 3.704167,-8.995835 1.852083,-2.38125 c -0.560292,-2.328229 -1.080061,-4.647255 -2.38125,-7.143749 6.079282,-7.050039 8.786577,-11.065284 10.31875,-14.022917 L 38.1,75.406249 l -12.7,7.9375 -15.6104168,5.55625 -4.2333333,1.058333 -0.2645833,1.5875 -0.2645833,0.79375 z"
					id="path155343"
				/><path
					style="opacity:1;fill:#98b0c0;fill-opacity:1;fill-rule:evenodd;stroke-width:1.2;stroke-linecap:round;stroke-linejoin:round;stroke-miterlimit:3;paint-order:stroke fill markers"
					d="m 24.870833,89.958332 v -3.439583 h 2.38125 l 1.058333,-1.058333 h 4.497917 l -3.96875,4.7625 h -3.96875 z"
					id="path155345"
				/><path
					style="opacity:1;fill:#bbd8e7;fill-opacity:1;fill-rule:evenodd;stroke-width:1.2;stroke-linecap:round;stroke-linejoin:round;stroke-miterlimit:3;paint-order:stroke fill markers"
					d="m 30.691666,84.137499 v -1.852083 c 3.043122,-2.018582 6.063698,-4.123095 9.260417,-5.55625 l -6.085417,7.408333 z"
					id="path155347"
				/><path
					style="opacity:1;fill:#cee1eb;fill-opacity:1;fill-rule:evenodd;stroke-width:1.2;stroke-linecap:round;stroke-linejoin:round;stroke-miterlimit:3;paint-order:stroke fill markers"
					d="M 5.0270833,92.339582 C 6.1724026,89.11003 10.057905,90.233833 13.229167,90.222916 l 8.995833,-3.96875 2.38125,-0.529167 c 5.412708,-3.941826 11.113455,-7.669683 17.197916,-11.1125 l 3.439583,-2.910417 c -5.273633,1.870572 -10.742821,3.055218 -15.610416,6.35 h -3.96875 C 22.7452,78.8298 19.240868,81.285357 15.875,83.343749 c -2.2953,1.766549 -5.742773,3.015696 -9.2604168,4.233333 -1.631485,0.708239 -1.5826473,2.756782 -1.5874999,4.7625 z"
					id="path155349"
				/><path
					style="opacity:1;fill:#282929;fill-opacity:1;fill-rule:evenodd;stroke-width:1.2;stroke-linecap:round;stroke-linejoin:round;stroke-miterlimit:3;paint-order:stroke fill markers"
					d="m 13.229167,90.222916 h 7.143749 c 0.313855,-1.787649 1.317089,-2.982254 2.38125,-4.124447 -4.147718,0.0026 -7.640134,0.929673 -9.524999,4.124447 z"
					id="path155351"
				/><circle
					style="opacity:1;fill:#cd4a4f;fill-opacity:1;fill-rule:evenodd;stroke-width:1.2;stroke-linecap:round;stroke-linejoin:round;stroke-miterlimit:3;paint-order:stroke fill markers"
					id="circle155353"
					cx="18.520834"
					cy="88.370834"
					r="1.5875"
				/><path
					style="opacity:1;fill:#98b0c0;fill-opacity:1;fill-rule:evenodd;stroke-width:1.2;stroke-linecap:round;stroke-linejoin:round;stroke-miterlimit:3;paint-order:stroke fill markers"
					d="m 29.897916,90.222916 h 5.820834 l -2.645834,2.645833 h -1.852083 l -1.322917,-1.322917 z"
					id="path155355"
				/><path
					style="opacity:1;fill:#98b0c0;fill-opacity:1;fill-rule:evenodd;stroke-width:1.2;stroke-linecap:round;stroke-linejoin:round;stroke-miterlimit:3;paint-order:stroke fill markers"
					d="m 33.866666,95.779165 -2.38125,2.38125 2.116667,2.116665 h 7.9375 l -4.497917,-4.497915 z"
					id="path155357"
				/><path
					style="opacity:1;fill:#98b0c0;fill-opacity:1;fill-rule:evenodd;stroke-width:1.2;stroke-linecap:round;stroke-linejoin:round;stroke-miterlimit:3;paint-order:stroke fill markers"
					d="m 29.633333,106.89167 1.5875,-3.175 c 1.373234,1.49171 3.333207,1.6702 5.291667,1.85208 -1.222276,1.09085 -2.964923,1.86588 -6.879167,1.32292 z"
					id="path155359"
				/><path
					style="opacity:1;fill:#98b0c0;fill-opacity:1;fill-rule:evenodd;stroke-width:1.2;stroke-linecap:round;stroke-linejoin:round;stroke-miterlimit:3;paint-order:stroke fill markers"
					d="m 26.722916,109.80208 2.645834,-1.85208 1.852083,6.08542 z"
					id="path155361"
				/><path
					style="opacity:1;fill:#98b0c0;fill-opacity:1;fill-rule:evenodd;stroke-width:1.2;stroke-linecap:round;stroke-linejoin:round;stroke-miterlimit:3;paint-order:stroke fill markers"
					d="m 21.695833,112.97708 2.910417,-1.85208 1.058333,6.35 z"
					id="path155363"
				/><path
					style="opacity:1;fill:#98b0c0;fill-opacity:1;fill-rule:evenodd;stroke-width:1.2;stroke-linecap:round;stroke-linejoin:round;stroke-miterlimit:3;paint-order:stroke fill markers"
					d="m 15.875,112.97708 h 2.910416 l -1.322916,6.87917 z"
					id="path155365"
				/><path
					style="opacity:1;fill:#deeeee;fill-opacity:1;fill-rule:evenodd;stroke-width:1.2;stroke-linecap:round;stroke-linejoin:round;stroke-miterlimit:3;paint-order:stroke fill markers"
					d="m 9.7895832,98.954165 v -6.614583 h -2.38125 l -0.5291666,1.058333 v 2.645834 z"
					id="path155367"
				/><path
					style="opacity:1;fill:#deeeee;fill-opacity:1;fill-rule:evenodd;stroke-width:1.2;stroke-linecap:round;stroke-linejoin:round;stroke-miterlimit:3;paint-order:stroke fill markers"
					d="m 16.139583,98.425 v -6.614583 h -2.38125 l -0.529167,1.058333 v 2.645834 z"
					id="path155369"
				/><path
					style="opacity:1;fill:#deeeee;fill-opacity:1;fill-rule:evenodd;stroke-width:1.2;stroke-linecap:round;stroke-linejoin:round;stroke-miterlimit:3;paint-order:stroke fill markers"
					d="m 21.960417,98.425 v -6.614583 h -2.38125 L 19.05,92.86875 v 2.645834 z"
					id="path155371"
				/><path
					style="opacity:1;fill:#cee1eb;fill-opacity:1;fill-rule:evenodd;stroke-width:1.2;stroke-linecap:round;stroke-linejoin:round;stroke-miterlimit:3;paint-order:stroke fill markers"
					d="M 56.091666,101.07083 V 90.222916 h -0.529167 v 10.054164 z"
					id="path155373"
				/><path
					style="opacity:1;fill:#cee1eb;fill-opacity:1;fill-rule:evenodd;stroke-width:1.2;stroke-linecap:round;stroke-linejoin:round;stroke-miterlimit:3;paint-order:stroke fill markers"
					d="m 58.472916,101.86458 h 2.645833 l 10e-7,-9.260413 -2.645834,-2.381251 z"
					id="path155375"
				/><path
					style="opacity:1;fill:#cee1eb;fill-opacity:1;fill-rule:evenodd;stroke-width:1.2;stroke-linecap:round;stroke-linejoin:round;stroke-miterlimit:3;paint-order:stroke fill markers"
					d="m 65.881249,92.604166 v 5.556249 l -2.38125,1.852085 v -7.408334 z"
					id="path155377"
				/><path
					style="opacity:1;fill:#cee1eb;fill-opacity:1;fill-rule:evenodd;stroke-width:1.2;stroke-linecap:round;stroke-linejoin:round;stroke-miterlimit:3;paint-order:stroke fill markers"
					d="m 68.262499,92.604166 h 2.910417 l -3.175,5.499261 v -5.499261 z"
					id="path155379"
				/><path
					style="opacity:1;fill:#98b0c0;fill-opacity:1;fill-rule:evenodd;stroke-width:1.2;stroke-linecap:round;stroke-linejoin:round;stroke-miterlimit:3;paint-order:stroke fill markers"
					d="m 40.745833,121.44375 c 1.908488,-1.01094 3.819963,-2.03338 5.55625,-2.38125 h 5.55625 v -4.23333 l -3.96875,-0.52917 -3.704167,1.05833 -2.116667,3.70417 z"
					id="path155381"
				/><path
					style="opacity:1;fill:#cee1eb;fill-opacity:1;fill-rule:evenodd;stroke-width:1.2;stroke-linecap:round;stroke-linejoin:round;stroke-miterlimit:3;paint-order:stroke fill markers"
					d="m 40.745833,121.44375 c 1.87366,-2.29285 2.896001,-4.89396 6.35,-6.61458 h 4.7625 v -1.5875 h -4.7625 c -3.858264,0.66916 -4.99331,4.56701 -6.35,8.20208 z"
					id="path155383"
				/><path
					style="opacity:1;fill:#98b0c0;fill-opacity:1;fill-rule:evenodd;stroke-width:1.2;stroke-linecap:round;stroke-linejoin:round;stroke-miterlimit:3;paint-order:stroke fill markers"
					d="m 84.402082,118.79792 c 1.147437,-2.36701 2.096208,-4.97494 4.497917,-5.82084 h 6.614583 L 95.160107,114.3 h -5.995525 c -1.978882,0.98706 -3.240214,2.91326 -4.7625,4.49792 z"
					id="path155385"
				/><path
					style="opacity:1;fill:#98b0c0;fill-opacity:1;fill-rule:evenodd;stroke-width:1.2;stroke-linecap:round;stroke-linejoin:round;stroke-miterlimit:3;paint-order:stroke fill markers"
					d="m 84.402082,118.79792 h 8.202084 c 1.871001,-1.04049 2.068393,-2.84475 2.596872,-4.49792 l -3.126039,-0.83762 h -3.175 l -1.895954,1.89595 z"
					id="path155387"
				/><path
					style="opacity:1;fill:#5b7082;fill-opacity:1;fill-rule:evenodd;stroke-width:1.2;stroke-linecap:round;stroke-linejoin:round;stroke-miterlimit:3;paint-order:stroke fill markers"
					d="m 94.720832,115.8875 0.779844,-2.91042 h 7.157654 v -2.91041 h 6.08542 v 5.55625 z"
					id="path155389"
				/><path
					style="opacity:1;fill:#cee1eb;fill-opacity:1;fill-rule:evenodd;stroke-width:1.2;stroke-linecap:round;stroke-linejoin:round;stroke-miterlimit:3;paint-order:stroke fill markers"
					d="m 92.604166,118.79792 h 16.139584 v -3.175 H 93.662499 Z"
					id="path155391"
				/><g id="g155397" style="opacity:1"
					><path
						style="opacity:1;fill:#98b0c0;fill-opacity:1;fill-rule:evenodd;stroke-width:1.2;stroke-linecap:round;stroke-linejoin:round;stroke-miterlimit:3;paint-order:stroke fill markers"
						d="m 108.74375,116.68125 v -4.7625 l 2.91042,1.32292 v 1.85208 z"
						id="path155393"
					/><path
						style="opacity:1;fill:#cee1eb;fill-opacity:1;fill-rule:evenodd;stroke-width:1.2;stroke-linecap:round;stroke-linejoin:round;stroke-miterlimit:3;paint-order:stroke fill markers"
						d="m 111.65417,113.24167 1.85208,1.05833 -1.85208,0.79375 z"
						id="path155395"
					/></g
				><path
					style="opacity:1;fill:#cee1eb;fill-opacity:1;fill-rule:evenodd;stroke-width:1.2;stroke-linecap:round;stroke-linejoin:round;stroke-miterlimit:3;paint-order:stroke fill markers"
					d="m 102.65833,110.06667 v -3.175 h 6.15157 v 3.175 z"
					id="path155399"
				/><path
					style="opacity:1;fill:#cee1eb;fill-opacity:1;fill-rule:evenodd;stroke-width:1.2;stroke-linecap:round;stroke-linejoin:round;stroke-miterlimit:3;paint-order:stroke fill markers"
					d="m 114.82917,88.899999 v 3.439583 h -6.08542 v -3.439583 z"
					id="path155401"
				/><path
					style="opacity:1;fill:#cee1eb;fill-opacity:1;fill-rule:evenodd;stroke-width:1.2;stroke-linecap:round;stroke-linejoin:round;stroke-miterlimit:3;paint-order:stroke fill markers"
					d="m 117.73958,83.872916 h 3.175 v 3.175 h 3.175 v 5.291666 c -0.0677,1.601172 -1.18457,2.468702 -2.91041,2.910417 h -3.43959 z"
					id="path155403"
				/><path
					style="opacity:1;fill:#303547;fill-opacity:1;fill-rule:evenodd;stroke-width:1.2;stroke-linecap:round;stroke-linejoin:round;stroke-miterlimit:3;paint-order:stroke fill markers"
					d="m 102.65833,106.89167 h -4.497915 v 3.175 h 4.497915 z"
					id="path155405"
				/><path
					style="opacity:1;fill:#303547;fill-opacity:1;fill-rule:evenodd;stroke-width:1.2;stroke-linecap:round;stroke-linejoin:round;stroke-miterlimit:3;paint-order:stroke fill markers"
					d="m 98.160415,106.89167 v -6.08542 h -3.439583 v 6.08542 z"
					id="path155407"
				/><path
					style="opacity:1;fill:#303547;fill-opacity:1;fill-rule:evenodd;stroke-width:1.2;stroke-linecap:round;stroke-linejoin:round;stroke-miterlimit:3;paint-order:stroke fill markers"
					d="M 98.160415,100.80625 V 92.604166 H 104.775 v 2.910416 h -3.43958 v 2.38125 c 0.0271,1.8531 -1.496755,2.444568 -3.175005,2.910418 z"
					id="path155409"
				/><path
					style="opacity:1;fill:#303547;fill-opacity:1;fill-rule:evenodd;stroke-width:1.2;stroke-linecap:round;stroke-linejoin:round;stroke-miterlimit:3;paint-order:stroke fill markers"
					d="m 98.160415,88.899999 2.381255,-5.027083 h 5.55625 v 5.027083 z"
					id="path155411"
				/><path
					style="opacity:1;fill:#5b7082;fill-opacity:1;fill-rule:evenodd;stroke-width:1.2;stroke-linecap:round;stroke-linejoin:round;stroke-miterlimit:3;paint-order:stroke fill markers"
					d="m 108.74375,83.872916 v 5.027083 h 6.08542 v -2.38125 l -2.64584,-2.645833 z"
					id="path155413"
				/><path
					style="opacity:1;fill:#9b5a67;fill-opacity:1;fill-rule:evenodd;stroke-width:1.2;stroke-linecap:round;stroke-linejoin:round;stroke-miterlimit:3;paint-order:stroke fill markers"
					d="m 98.160415,110.06667 c -2.701365,-0.47953 -3.017576,-1.84696 -3.439583,-3.175 h 3.439583 z"
					id="path155415"
				/><path
					style="opacity:1;fill:#9b5a67;fill-opacity:1;fill-rule:evenodd;stroke-width:1.2;stroke-linecap:round;stroke-linejoin:round;stroke-miterlimit:3;paint-order:stroke fill markers"
					d="m 94.720832,100.80625 c 0.260284,-1.522847 1.443961,-2.469818 3.439583,-2.910418 v 2.910418 z"
					id="path155417"
				/><path
					style="opacity:1;fill:#9b5a67;fill-opacity:1;fill-rule:evenodd;stroke-width:1.2;stroke-linecap:round;stroke-linejoin:round;stroke-miterlimit:3;paint-order:stroke fill markers"
					d="m 98.160415,92.604166 v -3.704172 h 7.937505 v -5.027078 h 2.64583 v 8.73125 z"
					id="path155419"
				/><path
					style="opacity:1;fill:#303547;fill-opacity:1;fill-rule:evenodd;stroke-width:1.2;stroke-linecap:round;stroke-linejoin:round;stroke-miterlimit:3;paint-order:stroke fill markers"
					d="m 120.91458,83.872916 h 3.175 v 3.175 h -3.175 z"
					id="path155421"
				/><g id="g155427" style="opacity:1"
					><path
						style="opacity:1;fill:#cee1eb;fill-opacity:1;fill-rule:evenodd;stroke-width:1.2;stroke-linecap:round;stroke-linejoin:round;stroke-miterlimit:3;paint-order:stroke fill markers"
						d="m 117.73958,80.697916 h 6.35 v -8.466667 h -3.175 v -3.175 h -3.175 z"
						id="path155423"
					/><path
						style="opacity:1;fill:#303547;fill-opacity:1;fill-rule:evenodd;stroke-width:1.2;stroke-linecap:round;stroke-linejoin:round;stroke-miterlimit:3;paint-order:stroke fill markers"
						d="m 120.91458,72.231249 v -3.175 h 3.175 v 3.175 z"
						id="path155425"
					/></g
				><path
					style="opacity:1;fill:#cee1eb;fill-opacity:1;fill-rule:evenodd;stroke-width:1.2;stroke-linecap:round;stroke-linejoin:round;stroke-miterlimit:3;paint-order:stroke fill markers"
					d="m 117.73958,65.881249 h 6.35 v -8.202083 h -3.175 v -3.175 h -3.175 z"
					id="path155429"
				/><path
					style="opacity:1;fill:#cee1eb;fill-opacity:1;fill-rule:evenodd;stroke-width:1.2;stroke-linecap:round;stroke-linejoin:round;stroke-miterlimit:3;paint-order:stroke fill markers"
					d="m 117.73958,52.122916 h 6.35 v -9.260417 h -3.175 V 39.6875 h -3.175 z"
					id="path155431"
				/><path
					style="opacity:1;fill:#cee1eb;fill-opacity:1;fill-rule:evenodd;stroke-width:1.2;stroke-linecap:round;stroke-linejoin:round;stroke-miterlimit:3;paint-order:stroke fill markers"
					d="m 117.73958,37.30625 h 6.35 v -8.995834 h -3.175 v 0 -3.175 h -3.175 z"
					id="path155433"
				/><path
					style="opacity:1;fill:#303547;fill-opacity:1;fill-rule:evenodd;stroke-width:1.2;stroke-linecap:round;stroke-linejoin:round;stroke-miterlimit:3;paint-order:stroke fill markers"
					d="m 120.91458,54.504166 h 3.175 v 3.175 h -3.175 z"
					id="path155435"
				/><path
					style="opacity:1;fill:#303547;fill-opacity:1;fill-rule:evenodd;stroke-width:1.2;stroke-linecap:round;stroke-linejoin:round;stroke-miterlimit:3;paint-order:stroke fill markers"
					d="M 120.91458,42.862499 V 39.6875 h 3.175 v 3.174999 z"
					id="path155437"
				/><path
					style="opacity:1;fill:#303547;fill-opacity:1;fill-rule:evenodd;stroke-width:1.2;stroke-linecap:round;stroke-linejoin:round;stroke-miterlimit:3;paint-order:stroke fill markers"
					d="m 120.91458,28.310416 v -3.175 h 3.175 v 3.175 z"
					id="path155439"
				/><path
					style="opacity:1;fill:#a9b2b4;fill-opacity:1;fill-rule:evenodd;stroke-width:1.2;stroke-linecap:round;stroke-linejoin:round;stroke-miterlimit:3;paint-order:stroke fill markers"
					d="m 46.566666,75.141666 1.5875,-3.704167 c 4.280455,-2.424197 8.422587,-5.460581 13.229167,-5.55625 -0.356626,2.082878 -1.093014,4.298517 -2.116667,6.614583 l -11.641667,3.439584 z"
					id="path155441"
				/><path
					style="opacity:1;fill:#303547;fill-opacity:1;fill-rule:evenodd;stroke-width:1.2;stroke-linecap:round;stroke-linejoin:round;stroke-miterlimit:3;paint-order:stroke fill markers"
					d="m 44.449999,78.052082 2.116667,-2.910416 12.7,-2.645834 -2.645833,5.55625 z"
					id="path155443"
				/><path
					style="opacity:1;fill:#303547;fill-opacity:1;fill-rule:evenodd;stroke-width:1.2;stroke-linecap:round;stroke-linejoin:round;stroke-miterlimit:3;paint-order:stroke fill markers"
					d="m 60.854166,76.199999 0.79375,-2.910417 c 4.392533,-1.775327 8.759527,-3.494847 12.435416,-3.704166 l -0.529166,3.439583 -2.38125,-0.264583 z"
					id="path155445"
				/><path
					style="opacity:1;fill:#303547;fill-opacity:1;fill-rule:evenodd;stroke-width:1.2;stroke-linecap:round;stroke-linejoin:round;stroke-miterlimit:3;paint-order:stroke fill markers"
					d="m 85.460416,73.554166 -1.852084,-0.79375 h -5.291666 c 2.288314,-3.068926 5.078045,-5.583583 8.73125,-7.14375 l 2.116666,0.529166 z"
					id="path155447"
				/><path
					style="opacity:1;fill:#303547;fill-opacity:1;fill-rule:evenodd;stroke-width:1.2;stroke-linecap:round;stroke-linejoin:round;stroke-miterlimit:3;paint-order:stroke fill markers"
					d="m 87.841666,74.612499 2.116666,-3.439583 c 4.627246,-1.090125 8.6647,0.943707 12.964588,1.5875 l -8.466671,7.14375 C 92.465868,77.83583 90.27698,76.049267 87.841666,74.612499 Z"
					id="path155449"
				/><path
					style="opacity:1;fill:#303547;fill-opacity:1;fill-rule:evenodd;stroke-width:1.2;stroke-linecap:round;stroke-linejoin:round;stroke-miterlimit:3;paint-order:stroke fill markers"
					d="m 49.212499,68.262499 1.058334,-4.497916 h 6.614583 z"
					id="path155451"
				/><path
					style="opacity:1;fill:#a9b2b4;fill-opacity:1;fill-rule:evenodd;stroke-width:1.2;stroke-linecap:round;stroke-linejoin:round;stroke-miterlimit:3;paint-order:stroke fill markers"
					d="m 60.854166,61.912499 3.96875,-0.79375 3.704166,-1.852083 1.058334,-2.116667 1.322916,-7.9375 c -4.072173,2.56715 -8.388322,5.057375 -9.789583,8.466667 z"
					id="path155453"
				/><path
					style="opacity:1;fill:#303547;fill-opacity:1;fill-rule:evenodd;stroke-width:1.2;stroke-linecap:round;stroke-linejoin:round;stroke-miterlimit:3;paint-order:stroke fill markers"
					d="m 74.083332,60.854166 8.73125,-4.7625 -2.645833,5.027083 z"
					id="path155455"
				/><path
					style="opacity:1;fill:#a9b2b4;fill-opacity:1;fill-rule:evenodd;stroke-width:1.2;stroke-linecap:round;stroke-linejoin:round;stroke-miterlimit:3;paint-order:stroke fill markers"
					d="m 97.102082,64.558333 -1.852083,-0.79375 3.439583,-7.14375 10.054168,0.79375 -2.91042,4.233333 -3.96875,2.910417 z"
					id="path155457"
				/><path
					style="opacity:1;fill:#303547;fill-opacity:1;fill-rule:evenodd;stroke-width:1.2;stroke-linecap:round;stroke-linejoin:round;stroke-miterlimit:3;paint-order:stroke fill markers"
					d="m 84.931249,61.383333 6.879167,1.852083 5.291666,-9.260417 c -1.978755,3.016008 -4.863668,5.793696 -12.170833,7.408334 z"
					id="path155459"
				/><path
					style="opacity:1;fill:#303547;fill-opacity:1;fill-rule:evenodd;stroke-width:1.2;stroke-linecap:round;stroke-linejoin:round;stroke-miterlimit:3;paint-order:stroke fill markers"
					d="m 97.102082,64.558333 c 3.695078,-0.509916 6.298258,-1.660256 8.731248,-2.910417 l -3.70416,5.027083 z"
					id="path155461"
				/><path
					style="opacity:1;fill:#303547;fill-opacity:1;fill-rule:evenodd;stroke-width:1.2;stroke-linecap:round;stroke-linejoin:round;stroke-miterlimit:3;paint-order:stroke fill markers"
					d="m 108.74375,69.056249 h 6.08542 c -0.79343,6.145701 -4.49074,6.666649 -7.9375,7.672917 0.92122,-2.477064 1.83098,-4.954798 1.85208,-7.672917 z"
					id="path155463"
				/><path
					style="opacity:1;fill:#5b7082;fill-opacity:1;fill-rule:evenodd;stroke-width:1.2;stroke-linecap:round;stroke-linejoin:round;stroke-miterlimit:3;paint-order:stroke fill markers"
					d="m 117.73958,69.056249 h -2.91041 v 10.31875 l 1.32291,1.322917 h 1.5875 z"
					id="path155465"
				/><path
					style="opacity:1;fill:#98b0c0;fill-opacity:1;fill-rule:evenodd;stroke-width:1.2;stroke-linecap:round;stroke-linejoin:round;stroke-miterlimit:3;paint-order:stroke fill markers"
					d="m 87.312499,83.872916 v -3.704167 l 8.466666,-6.614583 v 2.116666 h 2.910417 l -7.672916,8.202084 z"
					id="path155467"
				/><path
					style="opacity:1;fill:#deeeee;fill-opacity:1;fill-rule:evenodd;stroke-width:1.2;stroke-linecap:round;stroke-linejoin:round;stroke-miterlimit:3;paint-order:stroke fill markers"
					d="m 95.779165,75.670832 h 2.910414 l 0.79375,-0.79375 v -2.645833 h -2.116664 l -1.5875,1.322917 z"
					id="path155469"
				/><path
					style="opacity:1;fill:#cee1eb;fill-opacity:1;fill-rule:evenodd;stroke-width:1.2;stroke-linecap:round;stroke-linejoin:round;stroke-miterlimit:3;paint-order:stroke fill markers"
					d="m 59.795833,83.872916 h 2.38125 v -5.291667 c -1.114914,0.38938 -1.806157,1.19585 -2.38125,2.116667 z"
					id="path155471"
				/><path
					style="opacity:1;fill:#cee1eb;fill-opacity:1;fill-rule:evenodd;stroke-width:1.2;stroke-linecap:round;stroke-linejoin:round;stroke-miterlimit:3;paint-order:stroke fill markers"
					d="m 65.881249,83.872916 v -7.14375 l 2.116667,-0.79375 v 7.9375 z"
					id="path155473"
				/><path
					style="opacity:1;fill:#9b5a67;fill-opacity:1;fill-rule:evenodd;stroke-width:1.2;stroke-linecap:round;stroke-linejoin:round;stroke-miterlimit:3;paint-order:stroke fill markers"
					d="m 77.258332,80.962499 v 2.910417 H 74.08333 l 0.921633,-3.439584 z"
					id="path155475"
				/><path
					style="opacity:1;fill:#cee1eb;fill-opacity:1;fill-rule:evenodd;stroke-width:1.2;stroke-linecap:round;stroke-linejoin:round;stroke-miterlimit:3;paint-order:stroke fill markers"
					d="m 74.083332,83.872916 c 0.440738,-1.402555 0.887936,-2.800587 3.175,-2.910417 v -6.085417 h -3.175 z"
					id="path155477"
				/><path
					style="opacity:1;fill:#9b5a67;fill-opacity:1;fill-rule:evenodd;stroke-width:1.2;stroke-linecap:round;stroke-linejoin:round;stroke-miterlimit:3;paint-order:stroke fill markers"
					d="m 83.343749,80.962499 v 2.910417 h 2.910417 l -1.205215,-4.497917 z"
					id="path155479"
				/><path
					style="opacity:1;fill:#303547;fill-opacity:1;fill-rule:evenodd;stroke-width:1.2;stroke-linecap:round;stroke-linejoin:round;stroke-miterlimit:3;paint-order:stroke fill markers"
					d="m 77.258332,77.258332 h 6.35 l -0.264583,-2.38125 h -6.085417 z"
					id="path155481"
				/><path
					style="opacity:1;fill:#cee1eb;fill-opacity:1;fill-rule:evenodd;stroke-width:1.2;stroke-linecap:round;stroke-linejoin:round;stroke-miterlimit:3;paint-order:stroke fill markers"
					d="m 86.254166,83.872916 v -8.202084 c -0.860703,-0.500264 -1.883917,-0.698319 -2.962315,-0.79375 v 6.085417 c 1.26395,0.212724 2.457699,0.617739 2.962315,2.910417 z"
					id="path155483"
				/><path
					style="opacity:1;fill:#98b0c0;fill-opacity:1;fill-rule:evenodd;stroke-width:1.2;stroke-linecap:round;stroke-linejoin:round;stroke-miterlimit:3;paint-order:stroke fill markers"
					d="m 95.514582,89.958332 -1.5875,-2.910416 -5.55625,1.058333 0.529167,2.116667 1.058333,2.116666 z"
					id="path155485"
				/><path
					style="opacity:1;fill:#cee1eb;fill-opacity:1;fill-rule:evenodd;stroke-width:1.2;stroke-linecap:round;stroke-linejoin:round;stroke-miterlimit:3;paint-order:stroke fill markers"
					d="m 86.254166,90.222916 v -3.175 h 5.291666 l -0.79375,3.175 z"
					id="path155487"
				/><path
					style="opacity:1;fill:#cee1eb;fill-opacity:1;fill-rule:evenodd;stroke-width:1.2;stroke-linecap:round;stroke-linejoin:round;stroke-miterlimit:3;paint-order:stroke fill markers"
					d="m 80.168749,101.07083 v -3.174998 h 7.14375 l -1.322917,3.174998 z"
					id="path155489"
				/><path
					style="opacity:1;fill:#cee1eb;fill-opacity:1;fill-rule:evenodd;stroke-width:1.2;stroke-linecap:round;stroke-linejoin:round;stroke-miterlimit:3;paint-order:stroke fill markers"
					d="m 53.975,119.0625 h 24.341666 l -1.058334,2.64583 H 53.975 Z"
					id="path155491"
				/><path
					style="opacity:1;fill:#cee1eb;fill-opacity:1;fill-rule:evenodd;stroke-width:1.2;stroke-linecap:round;stroke-linejoin:round;stroke-miterlimit:3;paint-order:stroke fill markers"
					d="m 62.970833,113.24167 2.38125,-3.175 h 16.933333 l -1.322917,3.175 z"
					id="path155493"
				/><path
					style="opacity:1;fill:#cee1eb;fill-opacity:1;fill-rule:evenodd;stroke-width:1.2;stroke-linecap:round;stroke-linejoin:round;stroke-miterlimit:3;paint-order:stroke fill markers"
					d="m 76.993749,103.98125 v 3.175 h 4.497917 l 1.852083,-3.2079 z"
					id="path155495"
				/><path
					style="opacity:1;fill:#cee1eb;fill-opacity:1;fill-rule:evenodd;stroke-width:1.2;stroke-linecap:round;stroke-linejoin:round;stroke-miterlimit:3;paint-order:stroke fill markers"
					d="m 77.258332,87.047916 h 2.910417 v 5.820833 h -2.910417 z"
					id="path155497"
				/><path
					style="opacity:1;fill:#deeeee;fill-opacity:1;fill-rule:evenodd;stroke-width:1.2;stroke-linecap:round;stroke-linejoin:round;stroke-miterlimit:3;paint-order:stroke fill markers"
					d="m 93.927082,87.047916 1.5875,2.910416 0.529167,-0.264583 1.852083,-2.116667 -1.5875,-1.5875 z"
					id="path155499"
				/><path
					style="opacity:1;fill:#deeeee;fill-opacity:1;fill-rule:evenodd;stroke-width:1.2;stroke-linecap:round;stroke-linejoin:round;stroke-miterlimit:3;paint-order:stroke fill markers"
					d="m 95.779165,94.191665 -4.233333,0.529167 v 1.5875 l 1.852083,2.116667 2.38125,-2.645834 z"
					id="path155501"
				/><path
					style="opacity:1;fill:#deeeee;fill-opacity:1;fill-rule:evenodd;stroke-width:1.2;stroke-linecap:round;stroke-linejoin:round;stroke-miterlimit:3;paint-order:stroke fill markers"
					d="m 89.958332,103.1875 v 1.5875 l -2.38125,2.38125 -1.5875,-1.85208 v -1.5875 z"
					id="path155503"
				/><path
					style="opacity:1;fill:#deeeee;fill-opacity:1;fill-rule:evenodd;stroke-width:1.2;stroke-linecap:round;stroke-linejoin:round;stroke-miterlimit:3;paint-order:stroke fill markers"
					d="m 78.58125,117.21042 1.058332,-1.85209 3.175,1.5875 -2.645832,2.11667 z"
					id="path155505"
				/><path
					style="opacity:1;fill:#98b0c0;fill-opacity:1;fill-rule:evenodd;stroke-width:1.2;stroke-linecap:round;stroke-linejoin:round;stroke-miterlimit:3;paint-order:stroke fill markers"
					d="m 71.702082,119.0625 v -3.70417 l 2.38125,-2.38125 5.55625,2.38125 0.529167,3.70417 z"
					id="path155507"
				/><path
					style="opacity:1;fill:#98b0c0;fill-opacity:1;fill-rule:evenodd;stroke-width:1.2;stroke-linecap:round;stroke-linejoin:round;stroke-miterlimit:3;paint-order:stroke fill markers"
					d="m 78.845832,110.33125 -1.5875,-2.91042 3.704167,-3.175 5.027083,-0.52916 1.5875,2.64583 v 0.79375 l -5.027083,0.52917 z"
					id="path155509"
				/><path
					style="opacity:1;fill:#98b0c0;fill-opacity:1;fill-rule:evenodd;stroke-width:1.2;stroke-linecap:round;stroke-linejoin:round;stroke-miterlimit:3;paint-order:stroke fill markers"
					d="m 84.666666,101.33542 -1.5875,-2.645838 3.704166,-3.439583 4.7625,-0.529167 1.058334,1.322917 0.793749,2.38125 -5.027083,0.529166 z"
					id="path155511"
				/><path
					style="opacity:1;fill:#303547;fill-opacity:1;fill-rule:evenodd;stroke-width:1.2;stroke-linecap:round;stroke-linejoin:round;stroke-miterlimit:3;paint-order:stroke fill markers"
					d="m 67.997916,113.24167 v -6.08542 h 6.085416 v 6.08542 z"
					id="path155513"
				/><path
					style="opacity:1;fill:#9b5a67;fill-opacity:1;fill-rule:evenodd;stroke-width:1.2;stroke-linecap:round;stroke-linejoin:round;stroke-miterlimit:3;paint-order:stroke fill markers"
					d="m 71.172916,109.80208 v -2.64583 h 2.910414 v 2.91042 h -2.910414 z"
					id="path155515"
				/><path
					style="opacity:1;fill:#303547;fill-opacity:1;fill-rule:evenodd;stroke-width:1.2;stroke-linecap:round;stroke-linejoin:round;stroke-miterlimit:3;paint-order:stroke fill markers"
					d="m 70.908333,107.15625 v -6.08542 h 6.085416 v 6.08542 z"
					id="path155517"
				/><path
					style="opacity:1;fill:#9b5a67;fill-opacity:1;fill-rule:evenodd;stroke-width:1.2;stroke-linecap:round;stroke-linejoin:round;stroke-miterlimit:3;paint-order:stroke fill markers"
					d="m 74.083333,103.71666 v -2.64583 h 2.910414 v 2.91042 h -2.910414 z"
					id="path155519"
				/><path
					style="opacity:1;fill:#303547;fill-opacity:1;fill-rule:evenodd;stroke-width:1.2;stroke-linecap:round;stroke-linejoin:round;stroke-miterlimit:3;paint-order:stroke fill markers"
					d="m 74.083333,101.07083 v -6.217705 h 6.085416 v 6.217705 z"
					id="path155521"
				/><path
					style="opacity:1;fill:#303547;fill-opacity:1;fill-rule:evenodd;stroke-width:1.2;stroke-linecap:round;stroke-linejoin:round;stroke-miterlimit:3;paint-order:stroke fill markers"
					d="m 77.258332,94.985415 h 6.085417 v -2.116666 h -6.085417 z"
					id="path155523"
				/><path
					style="opacity:1;fill:#9b5a67;fill-opacity:1;fill-rule:evenodd;stroke-width:1.2;stroke-linecap:round;stroke-linejoin:round;stroke-miterlimit:3;paint-order:stroke fill markers"
					d="m 77.258333,97.498955 v -2.64583 h 2.910416 l -2e-6,2.91042 h -2.910414 z"
					id="path155525"
				/><path
					style="opacity:1;fill:#303547;fill-opacity:1;fill-rule:evenodd;stroke-width:1.2;stroke-linecap:round;stroke-linejoin:round;stroke-miterlimit:3;paint-order:stroke fill markers"
					d="m 59.795833,83.872916 h 6.085416 v 6.085416 h -3.175 c -1.352703,-0.07214 -2.183305,-1.369812 -2.910416,-2.910416 z"
					id="path155527"
				/><path
					style="opacity:1;fill:#303547;fill-opacity:1;fill-rule:evenodd;stroke-width:1.2;stroke-linecap:round;stroke-linejoin:round;stroke-miterlimit:3;paint-order:stroke fill markers"
					d="m 67.997916,89.958332 h 6.085416 v -4.233333 c 0.17529,-0.824081 0.740985,-1.420103 1.5875,-1.852083 h -7.672916 z"
					id="path155529"
				/><path
					style="opacity:1;fill:#303547;fill-opacity:1;fill-rule:evenodd;stroke-width:1.2;stroke-linecap:round;stroke-linejoin:round;stroke-miterlimit:3;paint-order:stroke fill markers"
					d="m 67.997916,79.904166 h 3.175 V 77.258332 H 74.08333 V 74.87708 c -1.867648,-0.0022 -3.900997,0.361313 -6.085414,1.058336 z"
					id="path155531"
				/><path
					style="opacity:1;fill:#303547;fill-opacity:1;fill-rule:evenodd;stroke-width:1.2;stroke-linecap:round;stroke-linejoin:round;stroke-miterlimit:3;paint-order:stroke fill markers"
					d="m 83.079166,90.222916 h 3.175 v -3.175 -3.175 h -3.175 z"
					id="path155533"
				/><path
					style="opacity:1;fill:#303547;fill-opacity:1;fill-rule:evenodd;stroke-width:1.2;stroke-linecap:round;stroke-linejoin:round;stroke-miterlimit:3;paint-order:stroke fill markers"
					d="m 77.258332,83.872916 v -2.910417 h 6.085417 v 2.910417 z"
					id="path155535"
				/><path
					style="opacity:1;fill:#303547;fill-opacity:1;fill-rule:evenodd;stroke-width:1.2;stroke-linecap:round;stroke-linejoin:round;stroke-miterlimit:3;paint-order:stroke fill markers"
					d="m 81.491666,83.872916 c 0.858047,0.07714 1.427861,0.801223 1.852083,1.852083 v -2.116667 h -1.852083 z"
					id="path155537"
				/><path
					style="opacity:1;fill:#9b5a67;fill-opacity:1;fill-rule:evenodd;stroke-width:1.2;stroke-linecap:round;stroke-linejoin:round;stroke-miterlimit:3;paint-order:stroke fill markers"
					d="m 65.881249,89.958332 h 2.116667 v -6.085416 h -2.116667 z"
					id="path155539"
				/><path
					style="opacity:1;fill:#9b5a67;fill-opacity:1;fill-rule:evenodd;stroke-width:1.2;stroke-linecap:round;stroke-linejoin:round;stroke-miterlimit:3;paint-order:stroke fill markers"
					d="m 83.343749,92.868749 v -2.645833 h 2.910417 v 2.645833 z"
					id="path155541"
				/><path
					style="opacity:1;fill:#9b5a67;fill-opacity:1;fill-rule:evenodd;stroke-width:1.2;stroke-linecap:round;stroke-linejoin:round;stroke-miterlimit:3;paint-order:stroke fill markers"
					d="m 83.079166,90.222916 v 2.645833 h 0.264583 v -2.645833 z"
					id="path155543"
				/><path
					style="opacity:1;fill:#5b7082;fill-opacity:1;fill-rule:evenodd;stroke-width:1.2;stroke-linecap:round;stroke-linejoin:round;stroke-miterlimit:3;paint-order:stroke fill markers"
					d="m 62.177083,83.872916 v -5.291667 l 3.704166,-1.852083 v 7.14375 z"
					id="path155545"
				/><path
					style="opacity:1;fill:#deeeee;fill-opacity:1;fill-rule:evenodd;stroke-width:1.2;stroke-linecap:round;stroke-linejoin:round;stroke-miterlimit:3;paint-order:stroke fill markers"
					d="m 55.033333,107.15625 1.5875,-2.64583 1.852083,2.64583 -1.322917,2.38125 h -1.322916 z"
					id="path155547"
				/><path
					style="opacity:1;fill:#98b0c0;fill-opacity:1;fill-rule:evenodd;stroke-width:1.2;stroke-linecap:round;stroke-linejoin:round;stroke-miterlimit:3;paint-order:stroke fill markers"
					d="m 53.974999,112.97708 1.058334,-5.82083 1.852083,2.11667 1.5875,-2.11667 1.058333,6.08542 h -5.55625 z"
					id="path155549"
				/><path
					style="opacity:1;fill:#deeeee;fill-opacity:1;fill-rule:evenodd;stroke-width:1.2;stroke-linecap:round;stroke-linejoin:round;stroke-miterlimit:3;paint-order:stroke fill markers"
					d="m 62.970833,106.09792 h 2.910416 l 1.322917,-2.64584 -2.645833,-1.85208 -1.5875,3.175 z"
					id="path155551"
				/><path
					style="opacity:1;fill:#5b7082;fill-opacity:1;fill-rule:evenodd;stroke-width:1.2;stroke-linecap:round;stroke-linejoin:round;stroke-miterlimit:3;paint-order:stroke fill markers"
					d="m 117.73958,65.881249 h -2.91041 V 54.504166 h 2.91041 z"
					id="path155553"
				/><path
					style="opacity:1;fill:#5b7082;fill-opacity:1;fill-rule:evenodd;stroke-width:1.2;stroke-linecap:round;stroke-linejoin:round;stroke-miterlimit:3;paint-order:stroke fill markers"
					d="m 117.73958,52.122916 h -2.91041 V 39.6875 h 2.91041 z"
					id="path155555"
				/><path
					style="opacity:1;fill:#5b7082;fill-opacity:1;fill-rule:evenodd;stroke-width:1.2;stroke-linecap:round;stroke-linejoin:round;stroke-miterlimit:3;paint-order:stroke fill markers"
					d="m 117.73958,37.30625 h -2.91041 V 25.135416 h 2.91041 z"
					id="path155557"
				/><path
					style="opacity:1;fill:#5b7082;fill-opacity:1;fill-rule:evenodd;stroke-width:1.2;stroke-linecap:round;stroke-linejoin:round;stroke-miterlimit:3;paint-order:stroke fill markers"
					d="m 114.82917,22.754166 h 2.91041 V 11.1125 h -5.55625 v 6.085416 h 2.64584 z"
					id="path155559"
				/><path
					style="opacity:1;fill:#5b7082;fill-opacity:1;fill-rule:evenodd;stroke-width:1.2;stroke-linecap:round;stroke-linejoin:round;stroke-miterlimit:3;paint-order:stroke fill markers"
					d="m 108.47917,11.377083 h -5.02709 v 5.820833 h 5.02709 z"
					id="path155561"
				/><path
					style="opacity:1;fill:#5b7082;fill-opacity:1;fill-rule:evenodd;stroke-width:1.2;stroke-linecap:round;stroke-linejoin:round;stroke-miterlimit:3;paint-order:stroke fill markers"
					d="M 100.0125,17.197916 V 11.377083 H 97.102082 V 8.2020832 h -2.38125 v 8.9958328 z"
					id="path155563"
				/><path
					style="opacity:1;fill:#cee1eb;fill-opacity:1;fill-rule:evenodd;stroke-width:1.2;stroke-linecap:round;stroke-linejoin:round;stroke-miterlimit:3;paint-order:stroke fill markers"
					d="m 74.083333,17.197917 6.349997,-1e-6 5.29167,1e-6 -10e-7,-5.820834 V 8.2020832 H 76.99375 V 5.0270833 H 74.083332 V 15.08125 Z"
					id="path155565"
				/><path
					style="opacity:1;fill:#5b7082;fill-opacity:1;fill-rule:evenodd;stroke-width:1.2;stroke-linecap:round;stroke-linejoin:round;stroke-miterlimit:3;paint-order:stroke fill markers"
					d="m 83.079166,8.2020832 h 2.645833 V 11.1125 h -2.645833 z"
					id="path155567"
				/><path
					style="opacity:1;fill:#cee1eb;fill-opacity:1;fill-rule:evenodd;stroke-width:1.2;stroke-linecap:round;stroke-linejoin:round;stroke-miterlimit:3;paint-order:stroke fill markers"
					d="m 85.725,17.197917 6.349997,-1e-6 2.645836,1e-6 4e-6,-5.820834 V 8.2020832 h -6.08542 V 5.0270833 H 85.724999 V 15.08125 Z"
					id="path155569"
				/><path
					style="opacity:1;fill:#5b7082;fill-opacity:1;fill-rule:evenodd;stroke-width:1.2;stroke-linecap:round;stroke-linejoin:round;stroke-miterlimit:3;paint-order:stroke fill markers"
					d="m 85.724999,11.1125 h 5.820833 v 6.085416 h -5.820833 z"
					id="path155571"
				/><path
					style="opacity:1;fill:#5b7082;fill-opacity:1;fill-rule:evenodd;stroke-width:1.2;stroke-linecap:round;stroke-linejoin:round;stroke-miterlimit:3;paint-order:stroke fill markers"
					d="m 77.258332,11.1125 h 5.291667 v 6.085416 h -5.55625 V 11.1125 Z"
					id="path155573"
				/><path
					style="opacity:1;fill:#5b7082;fill-opacity:1;fill-rule:evenodd;stroke-width:1.2;stroke-linecap:round;stroke-linejoin:round;stroke-miterlimit:3;paint-order:stroke fill markers"
					d="m 68.527082,17.197916 h 5.55625 V 7.9374999 h -2.38125 V 11.1125 h -3.175 z"
					id="path155575"
				/><path
					style="opacity:1;fill:#5b7082;fill-opacity:1;fill-rule:evenodd;stroke-width:1.2;stroke-linecap:round;stroke-linejoin:round;stroke-miterlimit:3;paint-order:stroke fill markers"
					d="m 65.616667,17.197916 h -5.55625 V 7.9374999 h 2.38125 V 11.1125 h 3.175 z"
					id="path155577"
				/><path
					style="opacity:1;fill:#cee1eb;fill-opacity:1;fill-rule:evenodd;stroke-width:1.2;stroke-linecap:round;stroke-linejoin:round;stroke-miterlimit:3;paint-order:stroke fill markers"
					d="m 114.82917,54.504166 v -2.38125 h 2.91041 v 2.38125 z"
					id="path155579"
				/><path
					style="opacity:1;fill:#cee1eb;fill-opacity:1;fill-rule:evenodd;stroke-width:1.2;stroke-linecap:round;stroke-linejoin:round;stroke-miterlimit:3;paint-order:stroke fill markers"
					d="m 114.82917,39.6875 v -2.38125 h 2.91041 v 2.38125 z"
					id="path155581"
				/><path
					style="opacity:1;fill:#cee1eb;fill-opacity:1;fill-rule:evenodd;stroke-width:1.2;stroke-linecap:round;stroke-linejoin:round;stroke-miterlimit:3;paint-order:stroke fill markers"
					d="m 114.82917,25.135416 v -2.38125 h 2.91041 v 2.38125 z"
					id="path155583"
				/><path
					style="opacity:1;fill:#303547;fill-opacity:1;fill-rule:evenodd;stroke-width:1.2;stroke-linecap:round;stroke-linejoin:round;stroke-miterlimit:3;paint-order:stroke fill markers"
					d="m 60.060416,17.197916 h 54.768754 v 48.683333 h -6.08542 v -3.96875 l 3.43958,-3.439583 V 36.777083 L 108.74375,33.3375 v -8.202084 c 0.0273,-1.612128 -0.89005,-2.055655 -2.11667,-2.116666 H 76.993749 l -2.116667,2.116666 H 60.060416 Z"
					id="path155585"
				/><path
					style="opacity:1;fill:#303547;fill-opacity:1;fill-rule:evenodd;stroke-width:1.2;stroke-linecap:round;stroke-linejoin:round;stroke-miterlimit:3;paint-order:stroke fill markers"
					d="m 69.056249,60.589583 0.529167,-3.439584 c -1.223128,1.479578 -2.794758,2.809318 -4.7625,3.96875 z"
					id="path155587"
				/><path
					style="opacity:1;fill:#9b5a67;fill-opacity:1;fill-rule:evenodd;stroke-width:1.2;stroke-linecap:round;stroke-linejoin:round;stroke-miterlimit:3;paint-order:stroke fill markers"
					d="m 114.82917,54.504166 v -2.38125 h -2.64584 v 2.38125 z"
					id="path155589"
				/><path
					style="opacity:1;fill:#9b5a67;fill-opacity:1;fill-rule:evenodd;stroke-width:1.2;stroke-linecap:round;stroke-linejoin:round;stroke-miterlimit:3;paint-order:stroke fill markers"
					d="m 114.82917,39.6875 v -2.38125 h -2.64584 v 2.38125 z"
					id="path155591"
				/><path
					style="opacity:1;fill:#9b5a67;fill-opacity:1;fill-rule:evenodd;stroke-width:1.2;stroke-linecap:round;stroke-linejoin:round;stroke-miterlimit:3;paint-order:stroke fill markers"
					d="m 114.82917,25.135416 h -6.08542 v -7.9375 h 3.43958 v 5.55625 h 2.64584 z"
					id="path155593"
				/><path
					style="opacity:1;fill:#9b5a67;fill-opacity:1;fill-rule:evenodd;stroke-width:1.2;stroke-linecap:round;stroke-linejoin:round;stroke-miterlimit:3;paint-order:stroke fill markers"
					d="m 100.0125,23.01875 v -5.820834 h 3.43958 v 5.820834 z"
					id="path155595"
				/><path
					style="opacity:1;fill:#9b5a67;fill-opacity:1;fill-rule:evenodd;stroke-width:1.15292;stroke-linecap:round;stroke-linejoin:round;stroke-miterlimit:3;paint-order:stroke fill markers"
					d="m 91.545833,23.01875 v -5.820834 h 3.175 v 5.820834 z"
					id="path155597"
				/><path
					style="opacity:1;fill:#9b5a67;fill-opacity:1;fill-rule:evenodd;stroke-width:1.15292;stroke-linecap:round;stroke-linejoin:round;stroke-miterlimit:3;paint-order:stroke fill markers"
					d="m 82.55,23.01875 v -5.820834 h 3.175 v 5.820834 z"
					id="path155599"
				/><path
					style="opacity:1;fill:#9b5a67;fill-opacity:1;fill-rule:evenodd;stroke-width:1.28901;stroke-linecap:round;stroke-linejoin:round;stroke-miterlimit:3;paint-order:stroke fill markers"
					d="m 65.616667,25.135417 v -7.937501 h 2.910416 v 7.937501 z"
					id="path155601"
				/><path
					style="opacity:1;fill:#9b5a67;fill-opacity:1;fill-rule:evenodd;stroke-width:1.28901;stroke-linecap:round;stroke-linejoin:round;stroke-miterlimit:3;paint-order:stroke fill markers"
					d="m 57.15,25.135417 v -7.937501 h 2.910416 v 7.937501 z"
					id="path155603"
				/><path
					style="opacity:1;fill:#9b5a67;fill-opacity:1;fill-rule:evenodd;stroke-width:1.2;stroke-linecap:round;stroke-linejoin:round;stroke-miterlimit:3;paint-order:stroke fill markers"
					d="m 74.083332,25.135416 h 0.79375 l 2.116667,-2.116666 v -5.820834 h -2.910417 z"
					id="path155605"
				/><path
					style="opacity:1;fill:#98b0c0;fill-opacity:1;fill-rule:evenodd;stroke-width:1.2;stroke-linecap:round;stroke-linejoin:round;stroke-miterlimit:3;paint-order:stroke fill markers"
					d="M 13.229167,56.091666 16.139583,55.033333 28.045833,39.6875 25.4,38.89375 l -3.704167,-2.645834 -2.38125,-2.38125 -7.408333,11.1125 -0.529167,5.820833 z"
					id="path155607"
				/><path
					style="opacity:1;fill:#deeeee;fill-opacity:1;fill-rule:evenodd;stroke-width:1.2;stroke-linecap:round;stroke-linejoin:round;stroke-miterlimit:3;paint-order:stroke fill markers"
					d="M 10.583333,57.149999 13.229167,56.091666 25.4,38.89375 21.695833,36.247916 21.43125,36.5125 11.377083,50.799999 Z"
					id="path155609"
				/><path
					style="opacity:1;fill:#5b7082;fill-opacity:1;fill-rule:evenodd;stroke-width:1.2;stroke-linecap:round;stroke-linejoin:round;stroke-miterlimit:3;paint-order:stroke fill markers"
					d="M 57.149999,25.135416 V 11.1125 H 51.064583 V 7.9374999 h -12.7 l -1.5875,0.4253693 -6.879167,5.3954638 -5.820833,1.322917 c -1.340304,1.151739 -2.671117,2.541336 -3.96875,4.7625 l -1.322917,2.910416 c -0.783751,6.038319 -0.820548,10.260754 0.529167,11.1125 1.697191,2.680552 3.955565,5.123822 8.466667,6.614583 h 11.1125 c 3.402885,-0.612842 6.996092,-2.788503 11.112499,-9.260416 l 1.322917,-1.5875 c 1.628625,-2.211529 3.186234,-4.58535 5.820833,-4.497917 z"
					id="path155611"
				/><path
					style="opacity:1;fill:#cee1eb;fill-opacity:1;fill-rule:evenodd;stroke-width:1.2;stroke-linecap:round;stroke-linejoin:round;stroke-miterlimit:3;paint-order:stroke fill markers"
					d="m 19.314583,33.866666 6.35,3.175 V 30.1625 Z"
					id="path155613"
				/><path
					style="opacity:1;fill:#cee1eb;fill-opacity:1;fill-rule:evenodd;stroke-width:1.2;stroke-linecap:round;stroke-linejoin:round;stroke-miterlimit:3;paint-order:stroke fill markers"
					d="m 21.695833,28.045833 v -3.96875 l 3.175,-4.233333 2.116667,-2.645834 0.79375,-1.058333 2.116666,1.058333 h 4.497917 v 4.762501 l -7.14375,6.085416 z"
					id="path155615"
				/><path
					style="opacity:1;fill:#cee1eb;fill-opacity:1;fill-rule:evenodd;stroke-width:1.2;stroke-linecap:round;stroke-linejoin:round;stroke-miterlimit:3;paint-order:stroke fill markers"
					d="m 32.808333,36.777083 h -3.96875 V 29.36875 L 31.75,26.9875 l 5.820833,-2.38125 0.79375,0.264583 2.38125,4.497917 -0.264584,1.852083 -3.704166,2.38125 z"
					id="path155617"
				/><path
					style="opacity:1;fill:#cee1eb;fill-opacity:1;fill-rule:evenodd;stroke-width:1.2;stroke-linecap:round;stroke-linejoin:round;stroke-miterlimit:3;paint-order:stroke fill markers"
					d="m 53.974999,18.785416 h -4.497916 l -1.852084,2.116667 -2.910416,2.910417 -2.910417,3.96875 2.116667,3.96875 1.322916,-0.529167 h 3.175 l 1.852084,-3.175 0.79375,-0.264583 2.910416,-2.910417 z"
					id="path155619"
				/><path
					style="opacity:1;fill:#cee1eb;fill-opacity:1;fill-rule:evenodd;stroke-width:1.2;stroke-linecap:round;stroke-linejoin:round;stroke-miterlimit:3;paint-order:stroke fill markers"
					d="m 42.597916,10.583333 h 5.027083 V 15.875 l -6.614583,7.14375 H 36.5125 l -0.264584,-1.5875 v -3.704167 l 2.910417,-3.175 z"
					id="path155621"
				/><path
					style="opacity:1;fill:#cee1eb;fill-opacity:1;fill-rule:evenodd;stroke-width:1.2;stroke-linecap:round;stroke-linejoin:round;stroke-miterlimit:3;paint-order:stroke fill markers"
					d="m 26.722916,12.964583 c 2.28511,-1.710943 4.927388,-2.913351 7.672917,-3.9687498 L 38.1,13.229167 37.570833,13.758333 h -8.466667 z"
					id="path155623"
				/><path
					style="opacity:1;fill:#98b0c0;fill-opacity:1;fill-rule:evenodd;stroke-width:1.2;stroke-linecap:round;stroke-linejoin:round;stroke-miterlimit:3;paint-order:stroke fill markers"
					d="m 37.041666,8.4666666 5.55625,2.1166664 v 3.96875 H 38.89375 l -4.7625,-3.96875 z"
					id="path155625"
				/><path
					style="opacity:1;fill:#deeeee;fill-opacity:1;fill-rule:evenodd;stroke-width:1.2;stroke-linecap:round;stroke-linejoin:round;stroke-miterlimit:3;paint-order:stroke fill markers"
					d="m 34.13125,8.2020832 h 1.852083 l 1.058333,0.2835796 V 10.583333 H 34.13125 Z"
					id="path155627"
				/><path
					style="opacity:1;fill:#98b0c0;fill-opacity:1;fill-rule:evenodd;stroke-width:1.2;stroke-linecap:round;stroke-linejoin:round;stroke-miterlimit:3;paint-order:stroke fill markers"
					d="M 32.808333,37.570833 31.75,33.602083 l 2.910416,-2.645833 2.116667,2.645833 -0.79375,3.96875 z"
					id="path155629"
				/><path
					style="opacity:1;fill:#deeeee;fill-opacity:1;fill-rule:evenodd;stroke-width:1.2;stroke-linecap:round;stroke-linejoin:round;stroke-miterlimit:3;paint-order:stroke fill markers"
					d="M 35.983333,37.570833 35.416175,39.6875 H 33.3375 l -0.567159,-2.116667 z"
					id="path155631"
				/><path
					style="opacity:1;fill:#98b0c0;fill-opacity:1;fill-rule:evenodd;stroke-width:1.2;stroke-linecap:round;stroke-linejoin:round;stroke-miterlimit:3;paint-order:stroke fill markers"
					d="M 45.243749,33.866666 V 29.36875 l -3.439583,-1.5875 -2.116666,2.38125 2.381249,3.704166 z"
					id="path155633"
				/><path
					style="opacity:1;fill:#deeeee;fill-opacity:1;fill-rule:evenodd;stroke-width:1.2;stroke-linecap:round;stroke-linejoin:round;stroke-miterlimit:3;paint-order:stroke fill markers"
					d="m 42.068749,33.866666 h 3.175 v 3.281744 h -3.175 z"
					id="path155635"
				/><path
					style="opacity:1;fill:#98b0c0;fill-opacity:1;fill-rule:evenodd;stroke-width:1.2;stroke-linecap:round;stroke-linejoin:round;stroke-miterlimit:3;paint-order:stroke fill markers"
					d="m 51.064583,28.575 0.264583,-4.7625 -3.704167,-2.910417 -2.910416,2.910417 3.175,4.7625 z"
					id="path155637"
				/><path
					style="opacity:1;fill:#deeeee;fill-opacity:1;fill-rule:evenodd;stroke-width:1.2;stroke-linecap:round;stroke-linejoin:round;stroke-miterlimit:3;paint-order:stroke fill markers"
					d="m 47.889583,28.575 v 2.645833 h 3.175 V 28.575 Z"
					id="path155639"
				/><path
					style="opacity:1;fill:#98b0c0;fill-opacity:1;fill-rule:evenodd;stroke-width:1.2;stroke-linecap:round;stroke-linejoin:round;stroke-miterlimit:3;paint-order:stroke fill markers"
					d="m 38.364583,21.43125 h -3.96875 L 31.75,24.870833 l 2.645833,2.116667 3.96875,-2.116667 z"
					id="path155641"
				/><path
					style="opacity:1;fill:#deeeee;fill-opacity:1;fill-rule:evenodd;stroke-width:1.2;stroke-linecap:round;stroke-linejoin:round;stroke-miterlimit:3;paint-order:stroke fill markers"
					d="M 34.395833,24.60625 H 32.279166 L 31.75,24.870833 V 26.9875 h 2.645833 z"
					id="path155643"
				/><path
					style="opacity:1;fill:#98b0c0;fill-opacity:1;fill-rule:evenodd;stroke-width:1.2;stroke-linecap:round;stroke-linejoin:round;stroke-miterlimit:3;paint-order:stroke fill markers"
					d="m 25.4,34.925 3.439583,-2.645834 V 29.36875 h -3.704167 l -1.852083,2.910416 z"
					id="path155645"
				/><path
					style="opacity:1;fill:#deeeee;fill-opacity:1;fill-rule:evenodd;stroke-width:1.2;stroke-linecap:round;stroke-linejoin:round;stroke-miterlimit:3;paint-order:stroke fill markers"
					d="M 25.4,32.54375 V 34.925 H 22.754166 V 32.54375 32.279166 H 25.4 Z"
					id="path155647"
				/><path
					style="opacity:1;fill:#98b0c0;fill-opacity:1;fill-rule:evenodd;stroke-width:1.2;stroke-linecap:round;stroke-linejoin:round;stroke-miterlimit:3;paint-order:stroke fill markers"
					d="m 18.785416,22.754166 6.085417,3.175 3.175,-2.116666 -1.852083,-3.96875 h -4.497917 z"
					id="path155649"
				/><path
					style="opacity:1;fill:#deeeee;fill-opacity:1;fill-rule:evenodd;stroke-width:1.2;stroke-linecap:round;stroke-linejoin:round;stroke-miterlimit:3;paint-order:stroke fill markers"
					d="M 18.785416,22.754166 V 19.84375 h 2.910417 v 2.910416 z"
					id="path155651"
				/><path
					style="opacity:1;fill:#98b0c0;fill-opacity:1;fill-rule:evenodd;stroke-width:1.2;stroke-linecap:round;stroke-linejoin:round;stroke-miterlimit:3;paint-order:stroke fill markers"
					d="m 24.60625,12.170833 5.291666,1.322917 v 3.704166 H 26.9875 l -2.38125,-1.5875 z"
					id="path155653"
				/><path
					style="opacity:1;fill:#deeeee;fill-opacity:1;fill-rule:evenodd;stroke-width:1.2;stroke-linecap:round;stroke-linejoin:round;stroke-miterlimit:3;paint-order:stroke fill markers"
					d="m 22.489583,14.022916 v -2.381249 l 2.116667,0.567159 v 3.40159 z"
					id="path155655"
				/></g
			><g id="g155255"
				><path
					style="opacity:1;fill:#cee1eb;fill-opacity:1;fill-rule:evenodd;stroke-width:1.2;stroke-linecap:round;stroke-linejoin:round;stroke-miterlimit:3;paint-order:stroke fill markers"
					d="m 51.064584,17.197917 6.349997,-1e-6 5.29167,1e-6 -1e-6,-5.820834 V 8.2020832 H 53.975001 V 5.0270833 H 51.064583 V 15.08125 Z"
					id="path146758"
				/><path
					style="opacity:1;fill:#cee1eb;fill-opacity:1;fill-rule:evenodd;stroke-width:1.2;stroke-linecap:round;stroke-linejoin:round;stroke-miterlimit:3;paint-order:stroke fill markers"
					d="m 62.441666,17.197917 6.349997,-1e-6 5.29167,1e-6 -10e-7,-5.820834 V 8.2020832 H 65.352083 V 5.0270833 H 62.441665 V 15.08125 Z"
					id="path146756"
				/><path
					style="opacity:1;fill:#cee1eb;fill-opacity:1;fill-rule:evenodd;stroke-width:1.2;stroke-linecap:round;stroke-linejoin:round;stroke-miterlimit:3;paint-order:stroke fill markers"
					d="m 100.0125,17.197916 h 3.43958 l 2.64584,-5.820833 V 8.2020832 H 100.0125 V 5.0270833 H 97.102082 V 15.08125 Z"
					id="path146748"
				/><path
					style="opacity:1;fill:#cee1eb;fill-opacity:1;fill-rule:evenodd;stroke-width:1.2;stroke-linecap:round;stroke-linejoin:round;stroke-miterlimit:3;paint-order:stroke fill markers"
					d="M 117.73958,22.754166 H 123.825 V 14.2875 l -6.08542,-6.0854168 h -5.55625 V 5.0270833 h -3.70416 V 17.197916 h 3.70416 4.23334 z"
					id="path146746"
				/><path
					style="opacity:1;fill:#98b0c0;fill-opacity:1;fill-rule:evenodd;stroke-width:1.2;stroke-linecap:round;stroke-linejoin:round;stroke-miterlimit:3;paint-order:stroke fill markers"
					d="m 67.997916,103.98125 -0.79375,-0.52917 -1.322917,2.64584 h -2.910416 v 7.9375 l 6.349999,-6.35 z"
					id="path141723"
				/><path
					style="opacity:1;fill:#5b7082;fill-opacity:1;fill-rule:evenodd;stroke-width:1.2;stroke-linecap:round;stroke-linejoin:round;stroke-miterlimit:3;paint-order:stroke fill markers"
					d="m 53.974999,119.0625 v -6.08542 h 9.789584 l 1.5875,-2.91041 2.645833,-2.91042 v -3.175 l 6.085416,-11.112501 h 3.175 6.085417 l 2.910417,-2.645833 h 2.645833 l 1.058333,2.116666 -1.322916,2.910417 -2.645834,5.027081 v 0.79375 l -1.322916,3.175 -1.322917,3.175 -1.058333,2.64584 -1.322917,3.175 -1.058333,2.38125 -2.116667,0.79375 -5.027083,3.43958 h -18.25625 z"
					id="path141648"
				/><path
					style="opacity:1;fill:#5b7082;fill-opacity:1;fill-rule:evenodd;stroke-width:1.2;stroke-linecap:round;stroke-linejoin:round;stroke-miterlimit:3;paint-order:stroke fill markers"
					d="m 86.254166,75.670832 c 3.224642,2.90523 6.221491,5.948801 5.291666,11.377084 h -5.291666 z"
					id="path141646"
				/><path
					style="opacity:1;fill:#5b7082;fill-opacity:1;fill-rule:evenodd;stroke-width:1.2;stroke-linecap:round;stroke-linejoin:round;stroke-miterlimit:3;paint-order:stroke fill markers"
					d="m 67.997916,83.872916 v -7.14375 h 16.66875 v 7.14375 z"
					id="path141644"
				/><path
					style="opacity:1;fill:#cee1eb;fill-opacity:1;fill-rule:evenodd;stroke-width:1.2;stroke-linecap:round;stroke-linejoin:round;stroke-miterlimit:3;paint-order:stroke fill markers"
					d="m 116.15208,80.697916 v 5.027083 L 111.125,80.697916 H 95.249999 l -0.79375,-0.79375 -2.116667,-6.085417 -4.497916,0.79375 -2.38125,-1.058333 -1.322917,-3.439584 -7.408333,2.645834 -3.175,0.264583 -2.910417,-1.5875 -2.645833,0.79375 -7.14375,3.96875 -4.233333,1.852083 -7.9375,-5.027083 -0.529167,-1.5875 1.058333,-3.175 5.55625,-8.995833 4.497917,-4.233333 0.264583,2.645833 h 2.116667 l 8.202083,-5.027083 1.058333,-3.439584 1.5875,3.439584 2.116667,2.116666 9.789583,-1.5875 h 3.175 l 0.79375,0.529167 1.058334,1.058333 6.879166,0.264584 2.38125,1.5875 1.852088,2.116666 5.55625,2.116667 v 8.202083 h 2.64583 6.08542 l 3.43958,8.466667 z"
					id="path133890"
				/><path
					style="opacity:1;fill:#a9b2b4;fill-opacity:1;fill-rule:evenodd;stroke-width:1.2;stroke-linecap:round;stroke-linejoin:round;stroke-miterlimit:3;paint-order:stroke fill markers"
					d="m 89.958332,71.172916 c 0.533715,-1.940446 1.847575,-2.801046 3.704167,-2.910417 1.945856,-0.09632 3.18839,0.01569 3.96875,0.264583 l 6.879171,3.439584 -1.5875,0.79375 H 91.281249 Z"
					id="path130991"
				/><path
					style="opacity:1;fill:#a9b2b4;fill-opacity:1;fill-rule:evenodd;stroke-width:1.2;stroke-linecap:round;stroke-linejoin:round;stroke-miterlimit:3;paint-order:stroke fill markers"
					d="m 78.316666,72.760416 h -1.5875 c 0.460918,-2.955392 0.352729,-6.01541 2.116666,-8.73125 2.902295,0.17663 5.637906,0.702481 8.202084,1.5875 l -3.704167,5.291666 z"
					id="path130989"
				/><path
					style="opacity:1;fill:#a9b2b4;fill-opacity:1;fill-rule:evenodd;stroke-width:1.2;stroke-linecap:round;stroke-linejoin:round;stroke-miterlimit:3;paint-order:stroke fill markers"
					d="m 84.931249,61.383333 3.439583,-7.672917 8.73125,0.264583 -3.055146,5.291667 z"
					id="path131058"
				/><path
					style="opacity:1;fill:#a9b2b4;fill-opacity:1;fill-rule:evenodd;stroke-width:1.2;stroke-linecap:round;stroke-linejoin:round;stroke-miterlimit:3;paint-order:stroke fill markers"
					d="m 50.270833,63.764583 c -2.82e-4,-2.925619 1.27529,-4.409693 2.655265,-5.564868 1.921247,-1.608273 4.193617,-2.533327 6.340568,-3.166382 l -2.38125,8.73125 z"
					id="path131064"
				/><path
					style="opacity:1;fill:#a9b2b4;fill-opacity:1;fill-rule:evenodd;stroke-width:1.2;stroke-linecap:round;stroke-linejoin:round;stroke-miterlimit:3;paint-order:stroke fill markers"
					d="m 74.083332,60.854166 h -1.322916 l 1.985057,-7.408333 c 0.457482,-1.11979 1.442188,-1.35723 2.512859,-1.450801 h 7.9375 l -2.38125,4.124447 -5.027083,4.20552 z"
					id="path131060"
				/><path
					style="opacity:1;fill:#a9b2b4;fill-opacity:1;fill-rule:evenodd;stroke-width:1.2;stroke-linecap:round;stroke-linejoin:round;stroke-miterlimit:3;paint-order:stroke fill markers"
					d="m 61.647916,73.289582 1.058333,-4.497916 c 4.786364,-3.251507 8.257436,-3.820537 12.170833,-5.291667 l -0.79375,6.085417 -12.170833,5.027083 z"
					id="path130987"
				/><g
					id="g125981"
					transform="matrix(1.2499966,0,0,1.2499966,-27.119416,-35.850659)"
					style="opacity:1"
					><path
						style="opacity:1;fill:#98b0c0;fill-opacity:1;fill-rule:evenodd;stroke-width:1.2;stroke-linecap:round;stroke-linejoin:round;stroke-miterlimit:3;paint-order:stroke fill markers"
						d="m 108.47916,116.73418 v -4.86835 l 3.17501,1.37584 v 1.85208 z"
						id="path125977"
					/><path
						style="opacity:1;fill:#cee1eb;fill-opacity:1;fill-rule:evenodd;stroke-width:1.2;stroke-linecap:round;stroke-linejoin:round;stroke-miterlimit:3;paint-order:stroke fill markers"
						d="m 111.65417,113.24167 1.85208,1.05833 -1.85208,0.79375 z"
						id="path125979"
					/></g
				><path
					style="opacity:1;fill:#5b7082;fill-opacity:1;fill-rule:evenodd;stroke-width:1.2;stroke-linecap:round;stroke-linejoin:round;stroke-miterlimit:3;paint-order:stroke fill markers"
					d="m 108.74375,106.89167 v -2.91042 h -7.9375 c 0.10197,-4.211661 2.55054,-5.167943 5.02708,-6.085418 h 6.08542 l 2.91042,-2.910417 v -2.645833 l -3.70417,-2.38125 -9.26042,1.322917 -1.32291,2.645833 -1.322921,5.291667 -2.645834,2.645831 v 6.61459 h 9.260415 z"
					id="path126994"
				/><path
					style="opacity:1;fill:#5b7082;fill-opacity:1;fill-rule:evenodd;stroke-width:1.2;stroke-linecap:round;stroke-linejoin:round;stroke-miterlimit:3;paint-order:stroke fill markers"
					d="m 65.881249,98.160415 h 2.116667 v -5.556249 h -6.879167 l -2.645833,-2.38125 h -2.38125 v 10.847914 c 0.688909,0.77312 1.568677,0.62047 2.38125,0.79375 h 5.027083 v -2.116665 z"
					id="path120230"
				/><path
					style="opacity:1;fill:#cee1eb;fill-opacity:1;fill-rule:evenodd;stroke-width:1.2;stroke-linecap:round;stroke-linejoin:round;stroke-miterlimit:3;paint-order:stroke fill markers"
					d="m 28.045833,111.125 h 3.175 l 1.5875,3.96875 -1.5875,1.32292 -3.704167,-4.7625 z"
					id="path117842"
				/><path
					style="opacity:1;fill:#cee1eb;fill-opacity:1;fill-rule:evenodd;stroke-width:1.2;stroke-linecap:round;stroke-linejoin:round;stroke-miterlimit:3;paint-order:stroke fill markers"
					d="m 34.660416,110.06667 3.704167,2.64583 c -0.570127,1.66397 0.339975,3.08688 1.322917,4.49792 h -0.79375 -4.497917 l -2.38125,-2.64584 -1.058333,-3.96875 z"
					id="path115693"
				/><path
					style="opacity:1;fill:#cee1eb;fill-opacity:1;fill-rule:evenodd;stroke-width:1.2;stroke-linecap:round;stroke-linejoin:round;stroke-miterlimit:3;paint-order:stroke fill markers"
					d="m 50.799999,101.86458 1.322917,0.26459 -3.175,6.35 -9.260416,2.64583 -6.614584,-2.64583 9.260417,-6.61459 6.614583,-3.968748 z"
					id="path115691"
				/><path
					style="opacity:1;fill:#cee1eb;fill-opacity:1;fill-rule:evenodd;stroke-width:1.2;stroke-linecap:round;stroke-linejoin:round;stroke-miterlimit:3;paint-order:stroke fill markers"
					d="m 47.889583,92.604166 c 2.418345,0.04971 4.048201,-1.291721 5.820833,-2.38125 l -3.704167,8.466666 -9.260416,2.645838 -4.233333,-9.260421 7.672916,-0.79375 z"
					id="path115689"
				/><path
					style="opacity:1;fill:#cee1eb;fill-opacity:1;fill-rule:evenodd;stroke-width:1.2;stroke-linecap:round;stroke-linejoin:round;stroke-miterlimit:3;paint-order:stroke fill markers"
					d="m 45.243749,71.702082 -6.085416,7.9375 c 1.293219,0.343026 2.037201,-0.346886 2.910416,-0.79375 0.173383,1.687128 0.154198,3.330451 -0.79375,4.7625 5.852344,-2.980925 9.963055,-2.832204 13.758334,-2.116666 l -16.66875,9.260416 -6.35,-5.027083 9.789583,-12.964583 z"
					id="path115633"
				/><path
					style="opacity:1;fill:#5b7082;fill-opacity:1;fill-rule:evenodd;stroke-width:1.2;stroke-linecap:round;stroke-linejoin:round;stroke-miterlimit:3;paint-order:stroke fill markers"
					d="m 47.889583,92.604166 h -6.35 l -3.96875,-2.291358 0.79375,-0.354476 c 4.464984,-5.303134 10.51161,-7.010522 16.66875,-8.466666 -2.7176,3.552976 -5.761021,6.959496 -7.14375,11.1125 z"
					id="path115631"
				/><path
					style="opacity:1;fill:#5b7082;fill-opacity:1;fill-rule:evenodd;stroke-width:1.2;stroke-linecap:round;stroke-linejoin:round;stroke-miterlimit:3;paint-order:stroke fill markers"
					d="m 28.310416,111.125 c 2.115313,3.12549 5.225627,5.64591 10.583334,6.08542 l -5.027083,1.5875 c -1.977447,0.33375 -3.513612,0.0339 -4.497917,-1.05834 l -3.704167,-5.02708 z"
					id="path115625"
				/><path
					style="opacity:1;fill:#cee1eb;fill-opacity:1;fill-rule:evenodd;stroke-width:1.2;stroke-linecap:round;stroke-linejoin:round;stroke-miterlimit:3;paint-order:stroke fill markers"
					d="m 7.9374999,117.475 c 1.6734749,-0.30982 3.3408711,-0.26044 5.0270831,-1.32292 l 1.5875,-1.5875 13.758333,-8.20208 2.38125,1.85208 -2.38125,3.175 -10.847916,7.14375 c -3.166574,0.46536 -6.34683,-0.39773 -9.5250001,-1.05833 z"
					id="path111649"
				/><path
					style="opacity:1;fill:#deeeee;fill-opacity:1;fill-rule:evenodd;stroke-width:1.2;stroke-linecap:round;stroke-linejoin:round;stroke-miterlimit:3;paint-order:stroke fill markers"
					d="m 15.345833,79.904166 -0.79375,-1.5875 6.085417,-6.879167 0.79375,-2.38125 3.704166,3.704167 -4.7625,5.820833 z"
					id="path104727"
				/><path
					style="opacity:1;fill:#98b0c0;fill-opacity:1;fill-rule:evenodd;stroke-width:1.2;stroke-linecap:round;stroke-linejoin:round;stroke-miterlimit:3;paint-order:stroke fill markers"
					d="m 15.875,83.872916 -0.529167,-3.96875 7.14375,-7.14375 h 2.645833 v 8.73125 z"
					id="path104667"
				/><path
					style="opacity:1;fill:#deeeee;fill-opacity:1;fill-rule:evenodd;stroke-width:1.2;stroke-linecap:round;stroke-linejoin:round;stroke-miterlimit:3;paint-order:stroke fill markers"
					d="m 26.722916,73.818749 v -2.38125 l 9.260417,-16.66875 2.910417,2.910417 v 2.645833 L 31.75,72.760416 Z"
					id="path104783"
				/><path
					style="opacity:1;fill:#98b0c0;fill-opacity:1;fill-rule:evenodd;stroke-width:1.2;stroke-linecap:round;stroke-linejoin:round;stroke-miterlimit:3;paint-order:stroke fill markers"
					d="M 26.722916,78.316666 V 73.024999 L 37.30625,60.060416 h 1.5875 v 10.054166 l -3.360661,5.820834 -5.370589,2.910416 z"
					id="path104723"
				/><path
					style="opacity:1;fill:#deeeee;fill-opacity:1;fill-rule:evenodd;stroke-width:1.2;stroke-linecap:round;stroke-linejoin:round;stroke-miterlimit:3;paint-order:stroke fill markers"
					d="m 43.127083,64.822916 2.116666,-4.233333 2.910417,2.910416 -2.910417,2.910417 z"
					id="path104785"
				/><path
					style="opacity:1;fill:#98b0c0;fill-opacity:1;fill-rule:evenodd;stroke-width:1.2;stroke-linecap:round;stroke-linejoin:round;stroke-miterlimit:3;paint-order:stroke fill markers"
					d="m 38.1,74.612499 5.027083,-9.789583 1.852083,-1.322917 h 3.175 c -0.177947,2.583348 -0.725897,5.237073 -2.910417,8.202083 l -6.879166,3.175 z"
					id="path104725"
				/><path
					style="opacity:1;fill:#5b7082;fill-opacity:1;fill-rule:evenodd;stroke-width:1.2;stroke-linecap:round;stroke-linejoin:round;stroke-miterlimit:3;paint-order:stroke fill markers"
					d="M 50.799999,101.86458 48.683333,101.33542 44.45,99.483333 c 5.053146,-2.450739 7.20743,-5.973758 9.260416,-9.260417 0.41823,3.240831 0.03816,6.849499 -2.910417,11.641664 z"
					id="path115629"
				/><path
					style="opacity:1;fill:#5b7082;fill-opacity:1;fill-rule:evenodd;stroke-width:1.2;stroke-linecap:round;stroke-linejoin:round;stroke-miterlimit:3;paint-order:stroke fill markers"
					d="m 35.983333,111.65417 c 2.892368,2.56207 7.327603,0.5668 11.90625,-1.85209 3.423773,-2.31765 5.012181,-5.09612 6.35,-7.9375 l -2.116667,0.26459 c -1.574426,1.82173 -3.168846,3.61462 -5.027083,5.02708 -3.053808,1.44564 -6.049128,2.10706 -8.995833,2.11667 z"
					id="path115627"
				/><path
					style="opacity:1;fill:#303547;fill-opacity:1;fill-rule:evenodd;stroke-width:1.2;stroke-linecap:round;stroke-linejoin:round;stroke-miterlimit:3;paint-order:stroke fill markers"
					d="M 28.310416,107.15625 29.36875,107.95 c 0.838287,3.50943 1.298599,7.2093 5.55625,8.99583 -1.207274,-1.57996 -2.434286,-3.15683 -2.910417,-5.29166 3.731849,0.91468 6.504966,-0.0545 9.260416,-1.05834 -1.822358,-0.67328 -3.675673,-1.30965 -4.497916,-3.175 7.659017,-0.13501 11.090417,-4.32609 14.022916,-8.995831 -3.264809,1.102458 -6.529061,1.794471 -9.789583,-0.264584 0.133185,-1.888329 -0.92807,-3.275366 -2.38125,-4.497916 4.233262,-0.349513 6.361479,-2.032686 7.672917,-4.233333 -2.611317,0.582821 -5.170009,1.785305 -7.9375,0.529166 1.969241,-2.35367 1.887628,-5.123419 1.5875,-7.9375 -1.407696,2.193669 -3.514599,3.528578 -6.35,3.96875 l -4.233333,3.96875 -0.264584,11.906248 z"
					id="path111278"
				/><path
					style="opacity:1;fill:#1c272d;fill-opacity:1;fill-rule:evenodd;stroke-width:1.2;stroke-linecap:round;stroke-linejoin:round;stroke-miterlimit:3;paint-order:stroke fill markers"
					d="m 10.31875,110.59583 v -1.32291 c 0.0136,-0.66037 0.801985,-0.76311 1.322917,-1.05834 l 2.116666,-1.05833 c 0.676124,-0.52063 1.331136,-1.01264 1.852083,-1.32292 l 5.291667,-2.64583 C 22.52515,101.40401 24.146843,99.627584 25.4,99.747915 l 2.116666,1.058335 -1.322916,3.175 -11.641667,6.61458 z"
					id="path112590"
				/><path
					style="opacity:1;fill:#deeeee;fill-opacity:1;fill-rule:evenodd;stroke-width:1.2;stroke-linecap:round;stroke-linejoin:round;stroke-miterlimit:3;paint-order:stroke fill markers"
					d="m 16.933333,107.68542 c -2.245563,-3.65161 -3.960151,-7.09919 -3.704166,-9.789588 2.817659,3.074708 6.587561,5.101248 10.583333,6.879168 z"
					id="path114352"
				/><path
					style="opacity:1;fill:#98b0c0;fill-opacity:1;fill-rule:evenodd;stroke-width:1.2;stroke-linecap:round;stroke-linejoin:round;stroke-miterlimit:3;paint-order:stroke fill markers"
					d="m 16.933333,107.68542 -1.322916,-2.11667 5.027083,-2.38125 3.175,1.5875 z"
					id="path114348"
				/><path
					style="opacity:1;fill:#deeeee;fill-opacity:1;fill-rule:evenodd;stroke-width:1.2;stroke-linecap:round;stroke-linejoin:round;stroke-miterlimit:3;paint-order:stroke fill markers"
					d="m 12.170833,109.80208 c -1.072876,-1.88886 -0.904261,-3.36038 -0.529166,-4.7625 0.856599,1.46765 2.299347,2.53166 3.968749,3.43959 z"
					id="path114350"
				/><path
					style="opacity:1;fill:#98b0c0;fill-opacity:1;fill-rule:evenodd;stroke-width:1.2;stroke-linecap:round;stroke-linejoin:round;stroke-miterlimit:3;paint-order:stroke fill markers"
					d="m 15.345833,108.21458 -0.529166,-0.26458 -2.910417,1.32292 0.264583,0.52916 3.175,-0.52916 z"
					id="path112784"
				/><path
					style="opacity:1;fill:#cee1eb;fill-opacity:1;fill-rule:evenodd;stroke-width:1.2;stroke-linecap:round;stroke-linejoin:round;stroke-miterlimit:3;paint-order:stroke fill markers"
					d="m 13.229167,113.77083 c -1.887674,-0.50262 -2.878184,-1.64761 -3.7041671,-2.91041 L 25.4,103.71667 v -7.672921 c -0.247635,-2.245774 -1.47259,-2.797872 -2.645834,-3.439583 h 3.704167 l 0.79375,5.556249 -0.79375,8.995835 z"
					id="path112028"
				/><path
					style="opacity:1;fill:#576b7e;fill-opacity:1;fill-rule:evenodd;stroke-width:1.2;stroke-linecap:round;stroke-linejoin:round;stroke-miterlimit:3;paint-order:stroke fill markers"
					d="M 5.0270833,94.985415 C 6.035864,94.145024 6.7289137,93.197726 8.4666666,92.604166 H 24.60625 c 0.765439,0.819051 1.444849,1.631394 1.322916,2.381249 v 10.318755 l -9.260416,4.49791 c -2.527095,0.7196 -3.915708,2.66991 -3.704167,6.35 0.891345,-0.36842 1.626282,-0.28774 2.38125,-0.26458 l 12.964583,-8.73125 3.704167,-8.995835 1.852083,-2.38125 c -0.560292,-2.328229 -1.080061,-4.647255 -2.38125,-7.143749 6.079282,-7.050039 8.786577,-11.065284 10.31875,-14.022917 L 38.1,75.406249 l -12.7,7.9375 -15.6104168,5.55625 -4.2333333,1.058333 -0.2645833,1.5875 -0.2645833,0.79375 z"
					id="path105517"
				/><path
					style="opacity:1;fill:#98b0c0;fill-opacity:1;fill-rule:evenodd;stroke-width:1.2;stroke-linecap:round;stroke-linejoin:round;stroke-miterlimit:3;paint-order:stroke fill markers"
					d="m 24.870833,89.958332 v -3.439583 h 2.38125 l 1.058333,-1.058333 h 4.497917 l -3.96875,4.7625 h -3.96875 z"
					id="path105513"
				/><path
					style="opacity:1;fill:#bbd8e7;fill-opacity:1;fill-rule:evenodd;stroke-width:1.2;stroke-linecap:round;stroke-linejoin:round;stroke-miterlimit:3;paint-order:stroke fill markers"
					d="m 30.691666,84.137499 v -1.852083 c 3.043122,-2.018582 6.063698,-4.123095 9.260417,-5.55625 l -6.085417,7.408333 z"
					id="path105515"
				/><path
					style="opacity:1;fill:#cee1eb;fill-opacity:1;fill-rule:evenodd;stroke-width:1.2;stroke-linecap:round;stroke-linejoin:round;stroke-miterlimit:3;paint-order:stroke fill markers"
					d="M 5.0270833,92.339582 C 6.1724026,89.11003 10.057905,90.233833 13.229167,90.222916 l 8.995833,-3.96875 2.38125,-0.529167 c 5.412708,-3.941826 11.113455,-7.669683 17.197916,-11.1125 l 3.439583,-2.910417 c -5.273633,1.870572 -10.742821,3.055218 -15.610416,6.35 h -3.96875 C 22.7452,78.8298 19.240868,81.285357 15.875,83.343749 c -2.2953,1.766549 -5.742773,3.015696 -9.2604168,4.233333 -1.631485,0.708239 -1.5826473,2.756782 -1.5874999,4.7625 z"
					id="path104665"
				/><path
					style="opacity:1;fill:#282929;fill-opacity:1;fill-rule:evenodd;stroke-width:1.2;stroke-linecap:round;stroke-linejoin:round;stroke-miterlimit:3;paint-order:stroke fill markers"
					d="m 13.229167,90.222916 h 7.143749 c 0.313855,-1.787649 1.317089,-2.982254 2.38125,-4.124447 -4.147718,0.0026 -7.640134,0.929673 -9.524999,4.124447 z"
					id="path104609"
				/><circle
					style="opacity:1;fill:#cd4a4f;fill-rule:evenodd;stroke-width:1.2;stroke-linecap:round;stroke-linejoin:round;stroke-miterlimit:3;paint-order:stroke fill markers;fill-opacity:1"
					id="path104663"
					cx="18.520834"
					cy="88.370834"
					r="1.5875"
				/><path
					style="opacity:1;fill:#98b0c0;fill-opacity:1;fill-rule:evenodd;stroke-width:1.2;stroke-linecap:round;stroke-linejoin:round;stroke-miterlimit:3;paint-order:stroke fill markers"
					d="m 29.897916,90.222916 h 5.820834 l -2.645834,2.645833 h -1.852083 l -1.322917,-1.322917 z"
					id="path109985"
				/><path
					style="opacity:1;fill:#98b0c0;fill-opacity:1;fill-rule:evenodd;stroke-width:1.2;stroke-linecap:round;stroke-linejoin:round;stroke-miterlimit:3;paint-order:stroke fill markers"
					d="m 33.866666,95.779165 -2.38125,2.38125 2.116667,2.116665 h 7.9375 l -4.497917,-4.497915 z"
					id="path109987"
				/><path
					style="opacity:1;fill:#98b0c0;fill-opacity:1;fill-rule:evenodd;stroke-width:1.2;stroke-linecap:round;stroke-linejoin:round;stroke-miterlimit:3;paint-order:stroke fill markers"
					d="m 29.633333,106.89167 1.5875,-3.175 c 1.373234,1.49171 3.333207,1.6702 5.291667,1.85208 -1.222276,1.09085 -2.964923,1.86588 -6.879167,1.32292 z"
					id="path109989"
				/><path
					style="opacity:1;fill:#98b0c0;fill-opacity:1;fill-rule:evenodd;stroke-width:1.2;stroke-linecap:round;stroke-linejoin:round;stroke-miterlimit:3;paint-order:stroke fill markers"
					d="m 26.722916,109.80208 2.645834,-1.85208 1.852083,6.08542 z"
					id="path110717"
				/><path
					style="opacity:1;fill:#98b0c0;fill-opacity:1;fill-rule:evenodd;stroke-width:1.2;stroke-linecap:round;stroke-linejoin:round;stroke-miterlimit:3;paint-order:stroke fill markers"
					d="m 21.695833,112.97708 2.910417,-1.85208 1.058333,6.35 z"
					id="path110719"
				/><path
					style="opacity:1;fill:#98b0c0;fill-opacity:1;fill-rule:evenodd;stroke-width:1.2;stroke-linecap:round;stroke-linejoin:round;stroke-miterlimit:3;paint-order:stroke fill markers"
					d="m 15.875,112.97708 h 2.910416 l -1.322916,6.87917 z"
					id="path110721"
				/><path
					style="opacity:1;fill:#deeeee;fill-opacity:1;fill-rule:evenodd;stroke-width:1.2;stroke-linecap:round;stroke-linejoin:round;stroke-miterlimit:3;paint-order:stroke fill markers"
					d="m 9.7895832,98.954165 v -6.614583 h -2.38125 l -0.5291666,1.058333 v 2.645834 z"
					id="path110723"
				/><path
					style="opacity:1;fill:#deeeee;fill-opacity:1;fill-rule:evenodd;stroke-width:1.2;stroke-linecap:round;stroke-linejoin:round;stroke-miterlimit:3;paint-order:stroke fill markers"
					d="m 16.139583,98.425 v -6.614583 h -2.38125 l -0.529167,1.058333 v 2.645834 z"
					id="path110727"
				/><path
					style="opacity:1;fill:#deeeee;fill-opacity:1;fill-rule:evenodd;stroke-width:1.2;stroke-linecap:round;stroke-linejoin:round;stroke-miterlimit:3;paint-order:stroke fill markers"
					d="m 21.960417,98.425 v -6.614583 h -2.38125 L 19.05,92.86875 v 2.645834 z"
					id="path110729"
				/><path
					style="opacity:1;fill:#cee1eb;fill-opacity:1;fill-rule:evenodd;stroke-width:1.2;stroke-linecap:round;stroke-linejoin:round;stroke-miterlimit:3;paint-order:stroke fill markers"
					d="M 56.091666,101.07083 V 90.222916 h -0.529167 v 10.054164 z"
					id="path118764"
				/><path
					style="opacity:1;fill:#cee1eb;fill-opacity:1;fill-rule:evenodd;stroke-width:1.2;stroke-linecap:round;stroke-linejoin:round;stroke-miterlimit:3;paint-order:stroke fill markers"
					d="m 58.472916,101.86458 h 2.645833 l 10e-7,-9.260413 -2.645834,-2.381251 z"
					id="path118766"
				/><path
					style="opacity:1;fill:#cee1eb;fill-opacity:1;fill-rule:evenodd;stroke-width:1.2;stroke-linecap:round;stroke-linejoin:round;stroke-miterlimit:3;paint-order:stroke fill markers"
					d="m 65.881249,92.604166 v 5.556249 l -2.38125,1.852085 v -7.408334 z"
					id="path118770"
				/><path
					style="opacity:1;fill:#cee1eb;fill-opacity:1;fill-rule:evenodd;stroke-width:1.2;stroke-linecap:round;stroke-linejoin:round;stroke-miterlimit:3;paint-order:stroke fill markers"
					d="m 68.262499,92.604166 h 2.910417 l -3.175,5.499261 v -5.499261 z"
					id="path118774"
				/><path
					style="opacity:1;fill:#98b0c0;fill-opacity:1;fill-rule:evenodd;stroke-width:1.2;stroke-linecap:round;stroke-linejoin:round;stroke-miterlimit:3;paint-order:stroke fill markers"
					d="m 40.745833,121.44375 c 1.908488,-1.01094 3.819963,-2.03338 5.55625,-2.38125 h 5.55625 v -4.23333 l -3.96875,-0.52917 -3.704167,1.05833 -2.116667,3.70417 z"
					id="path122001"
				/><path
					style="opacity:1;fill:#cee1eb;fill-opacity:1;fill-rule:evenodd;stroke-width:1.2;stroke-linecap:round;stroke-linejoin:round;stroke-miterlimit:3;paint-order:stroke fill markers"
					d="m 40.745833,121.44375 c 1.87366,-2.29285 2.896001,-4.89396 6.35,-6.61458 h 4.7625 v -1.5875 h -4.7625 c -3.858264,0.66916 -4.99331,4.56701 -6.35,8.20208 z"
					id="path121999"
				/><path
					style="opacity:1;fill:#5b7082;fill-opacity:1;fill-rule:evenodd;stroke-width:1.2;stroke-linecap:round;stroke-linejoin:round;stroke-miterlimit:3;paint-order:stroke fill markers"
					d="m 93.6625,115.62292 1.838176,-2.64584 h 7.157654 v -2.91041 h 6.08542 v 5.55625 z"
					id="path125407"
				/><path
					style="opacity:1;fill:#cee1eb;fill-opacity:1;fill-rule:evenodd;stroke-width:1.2;stroke-linecap:round;stroke-linejoin:round;stroke-miterlimit:3;paint-order:stroke fill markers"
					d="m 92.604166,118.79792 h 16.139584 v -3.175 H 93.662499 Z"
					id="path124439"
				/><path
					style="opacity:1;fill:#98b0c0;fill-opacity:1;fill-rule:evenodd;stroke-width:1.2;stroke-linecap:round;stroke-linejoin:round;stroke-miterlimit:3;paint-order:stroke fill markers"
					d="m 84.402082,118.79792 h 8.202084 c 1.871001,-1.04049 2.068393,-2.84475 2.596872,-4.49792 l -3.126039,-0.83762 h -3.175 l -1.895954,1.89595 z"
					id="path124230"
				/><path
					style="opacity:1;fill:#deeeee;fill-opacity:1;fill-rule:evenodd;stroke-width:1.2;stroke-linecap:round;stroke-linejoin:round;stroke-miterlimit:3;paint-order:stroke fill markers"
					d="m 84.402082,118.79792 c 1.147437,-2.36701 2.096208,-4.97494 4.497917,-5.82084 h 6.614583 L 95.160107,114.3 h -5.995525 c -1.978882,0.98706 -3.240214,2.91326 -4.7625,4.49792 z"
					id="path124228"
				/><g id="g125975" style="opacity:1"
					><path
						style="opacity:1;fill:#98b0c0;fill-opacity:1;fill-rule:evenodd;stroke-width:1.2;stroke-linecap:round;stroke-linejoin:round;stroke-miterlimit:3;paint-order:stroke fill markers"
						d="m 108.74375,116.68125 v -4.7625 l 2.91042,1.32292 v 1.85208 z"
						id="path125754"
					/><path
						style="opacity:1;fill:#cee1eb;fill-opacity:1;fill-rule:evenodd;stroke-width:1.2;stroke-linecap:round;stroke-linejoin:round;stroke-miterlimit:3;paint-order:stroke fill markers"
						d="m 111.65417,113.24167 1.85208,1.05833 -1.85208,0.79375 z"
						id="path125971"
					/></g
				><path
					style="opacity:1;fill:#cee1eb;fill-opacity:1;fill-rule:evenodd;stroke-width:1.2;stroke-linecap:round;stroke-linejoin:round;stroke-miterlimit:3;paint-order:stroke fill markers"
					d="m 102.65833,110.06667 v -3.175 h 6.15157 v 3.175 z"
					id="path126709"
				/><path
					style="opacity:1;fill:#cee1eb;fill-opacity:1;fill-rule:evenodd;stroke-width:1.2;stroke-linecap:round;stroke-linejoin:round;stroke-miterlimit:3;paint-order:stroke fill markers"
					d="m 114.82917,88.899999 v 3.439583 h -6.08542 v -3.439583 z"
					id="path126711"
				/><path
					style="opacity:1;fill:#cee1eb;fill-opacity:1;fill-rule:evenodd;stroke-width:1.2;stroke-linecap:round;stroke-linejoin:round;stroke-miterlimit:3;paint-order:stroke fill markers"
					d="m 117.73958,83.872916 h 3.175 v 3.175 h 3.175 v 5.291666 c -0.0677,1.601172 -1.18457,2.468702 -2.91041,2.910417 h -3.43959 z"
					id="path126713"
				/><path
					style="opacity:1;fill:#303547;fill-opacity:1;fill-rule:evenodd;stroke-width:1.2;stroke-linecap:round;stroke-linejoin:round;stroke-miterlimit:3;paint-order:stroke fill markers"
					d="m 102.65833,106.89167 h -4.497915 v 3.175 h 4.497915 z"
					id="path126715"
				/><path
					style="opacity:1;fill:#303547;fill-opacity:1;fill-rule:evenodd;stroke-width:1.2;stroke-linecap:round;stroke-linejoin:round;stroke-miterlimit:3;paint-order:stroke fill markers"
					d="m 98.160415,106.89167 v -6.08542 h -3.439583 v 6.08542 z"
					id="path126771"
				/><path
					style="opacity:1;fill:#303547;fill-opacity:1;fill-rule:evenodd;stroke-width:1.2;stroke-linecap:round;stroke-linejoin:round;stroke-miterlimit:3;paint-order:stroke fill markers"
					d="M 98.160415,100.80625 V 92.604166 H 104.775 v 2.910416 h -3.43958 v 2.38125 c 0.0271,1.8531 -1.496755,2.444568 -3.175005,2.910418 z"
					id="path126773"
				/><path
					style="opacity:1;fill:#303547;fill-opacity:1;fill-rule:evenodd;stroke-width:1.2;stroke-linecap:round;stroke-linejoin:round;stroke-miterlimit:3;paint-order:stroke fill markers"
					d="m 98.160415,88.899999 2.381255,-5.027083 h 5.55625 v 5.027083 z"
					id="path126775"
				/><path
					style="opacity:1;fill:#5b7082;fill-opacity:1;fill-rule:evenodd;stroke-width:1.2;stroke-linecap:round;stroke-linejoin:round;stroke-miterlimit:3;paint-order:stroke fill markers"
					d="m 108.74375,83.872916 v 5.027083 h 6.08542 v -2.38125 l -2.64584,-2.645833 z"
					id="path126777"
				/><path
					style="opacity:1;fill:#9b5a67;fill-opacity:1;fill-rule:evenodd;stroke-width:1.2;stroke-linecap:round;stroke-linejoin:round;stroke-miterlimit:3;paint-order:stroke fill markers"
					d="m 98.160415,110.06667 c -2.701365,-0.47953 -3.017576,-1.84696 -3.439583,-3.175 h 3.439583 z"
					id="path126996"
				/><path
					style="opacity:1;fill:#9b5a67;fill-opacity:1;fill-rule:evenodd;stroke-width:1.2;stroke-linecap:round;stroke-linejoin:round;stroke-miterlimit:3;paint-order:stroke fill markers"
					d="m 94.720832,100.80625 c 0.260284,-1.522847 1.443961,-2.469818 3.439583,-2.910418 v 2.910418 z"
					id="path126998"
				/><path
					style="opacity:1;fill:#9b5a67;fill-opacity:1;fill-rule:evenodd;stroke-width:1.2;stroke-linecap:round;stroke-linejoin:round;stroke-miterlimit:3;paint-order:stroke fill markers"
					d="m 98.160415,92.604166 v -3.704172 h 7.937505 v -5.027078 h 2.64583 v 8.73125 z"
					id="path127000"
				/><path
					style="opacity:1;fill:#303547;fill-opacity:1;fill-rule:evenodd;stroke-width:1.2;stroke-linecap:round;stroke-linejoin:round;stroke-miterlimit:3;paint-order:stroke fill markers"
					d="m 120.91458,83.872916 h 3.175 v 3.175 h -3.175 z"
					id="path127968"
				/><g id="g128674" style="opacity:1"
					><path
						style="opacity:1;fill:#cee1eb;fill-opacity:1;fill-rule:evenodd;stroke-width:1.2;stroke-linecap:round;stroke-linejoin:round;stroke-miterlimit:3;paint-order:stroke fill markers"
						d="m 117.73958,80.697916 h 6.35 v -8.466667 h -3.175 v -3.175 h -3.175 z"
						id="path128392"
					/><path
						style="opacity:1;fill:#303547;fill-opacity:1;fill-rule:evenodd;stroke-width:1.2;stroke-linecap:round;stroke-linejoin:round;stroke-miterlimit:3;paint-order:stroke fill markers"
						d="m 120.91458,72.231249 v -3.175 h 3.175 v 3.175 z"
						id="path128532"
					/></g
				><path
					style="opacity:1;fill:#cee1eb;fill-opacity:1;fill-rule:evenodd;stroke-width:1.2;stroke-linecap:round;stroke-linejoin:round;stroke-miterlimit:3;paint-order:stroke fill markers"
					d="m 117.73958,65.881249 h 6.35 v -8.202083 h -3.175 v -3.175 h -3.175 z"
					id="path128688"
				/><path
					style="opacity:1;fill:#cee1eb;fill-opacity:1;fill-rule:evenodd;stroke-width:1.2;stroke-linecap:round;stroke-linejoin:round;stroke-miterlimit:3;paint-order:stroke fill markers"
					d="m 117.73958,52.122916 h 6.35 v -9.260417 h -3.175 V 39.6875 h -3.175 z"
					id="path129104"
				/><path
					style="opacity:1;fill:#cee1eb;fill-opacity:1;fill-rule:evenodd;stroke-width:1.2;stroke-linecap:round;stroke-linejoin:round;stroke-miterlimit:3;paint-order:stroke fill markers"
					d="m 117.73958,37.30625 h 6.35 v -8.995834 h -3.175 v 0 -3.175 h -3.175 z"
					id="path129106"
				/><path
					style="opacity:1;fill:#303547;fill-opacity:1;fill-rule:evenodd;stroke-width:1.2;stroke-linecap:round;stroke-linejoin:round;stroke-miterlimit:3;paint-order:stroke fill markers"
					d="m 120.91458,54.504166 h 3.175 v 3.175 h -3.175 z"
					id="path129108"
				/><path
					style="opacity:1;fill:#303547;fill-opacity:1;fill-rule:evenodd;stroke-width:1.2;stroke-linecap:round;stroke-linejoin:round;stroke-miterlimit:3;paint-order:stroke fill markers"
					d="M 120.91458,42.862499 V 39.6875 h 3.175 v 3.174999 z"
					id="path129455"
				/><path
					style="opacity:1;fill:#303547;fill-opacity:1;fill-rule:evenodd;stroke-width:1.2;stroke-linecap:round;stroke-linejoin:round;stroke-miterlimit:3;paint-order:stroke fill markers"
					d="m 120.91458,28.310416 v -3.175 h 3.175 v 3.175 z"
					id="path129457"
				/><path
					style="opacity:1;fill:#a9b2b4;fill-opacity:1;fill-rule:evenodd;stroke-width:1.2;stroke-linecap:round;stroke-linejoin:round;stroke-miterlimit:3;paint-order:stroke fill markers"
					d="m 46.566666,75.141666 1.5875,-3.704167 c 4.280455,-2.424197 8.422587,-5.460581 13.229167,-5.55625 -0.356626,2.082878 -1.093014,4.298517 -2.116667,6.614583 l -11.641667,3.439584 z"
					id="path130931"
				/><path
					style="opacity:1;fill:#303547;fill-opacity:1;fill-rule:evenodd;stroke-width:1.2;stroke-linecap:round;stroke-linejoin:round;stroke-miterlimit:3;paint-order:stroke fill markers"
					d="m 44.449999,78.052082 2.116667,-2.910416 12.7,-2.645834 -2.645833,5.55625 z"
					id="path130185"
				/><path
					style="opacity:1;fill:#303547;fill-opacity:1;fill-rule:evenodd;stroke-width:1.2;stroke-linecap:round;stroke-linejoin:round;stroke-miterlimit:3;paint-order:stroke fill markers"
					d="m 60.854166,76.199999 0.79375,-2.910417 c 4.392533,-1.775327 8.759527,-3.494847 12.435416,-3.704166 l -0.529166,3.439583 -2.38125,-0.264583 z"
					id="path130187"
				/><path
					style="opacity:1;fill:#303547;fill-opacity:1;fill-rule:evenodd;stroke-width:1.2;stroke-linecap:round;stroke-linejoin:round;stroke-miterlimit:3;paint-order:stroke fill markers"
					d="m 85.460416,73.554166 -1.852084,-0.79375 h -5.291666 c 2.288314,-3.068926 5.078045,-5.583583 8.73125,-7.14375 l 2.116666,0.529166 z"
					id="path130189"
				/><path
					style="opacity:1;fill:#303547;fill-opacity:1;fill-rule:evenodd;stroke-width:1.2;stroke-linecap:round;stroke-linejoin:round;stroke-miterlimit:3;paint-order:stroke fill markers"
					d="m 87.841666,74.612499 2.116666,-3.439583 c 4.627246,-1.090125 8.6647,0.943707 12.964588,1.5875 l -8.466671,7.14375 C 92.465868,77.83583 90.27698,76.049267 87.841666,74.612499 Z"
					id="path130191"
				/><path
					style="opacity:1;fill:#303547;fill-opacity:1;fill-rule:evenodd;stroke-width:1.2;stroke-linecap:round;stroke-linejoin:round;stroke-miterlimit:3;paint-order:stroke fill markers"
					d="m 49.212499,68.262499 1.058334,-4.497916 h 6.614583 z"
					id="path130193"
				/><path
					style="opacity:1;fill:#a9b2b4;fill-opacity:1;fill-rule:evenodd;stroke-width:1.2;stroke-linecap:round;stroke-linejoin:round;stroke-miterlimit:3;paint-order:stroke fill markers"
					d="m 60.854166,61.912499 3.96875,-0.79375 3.704166,-1.852083 1.058334,-2.116667 1.322916,-7.9375 c -4.072173,2.56715 -8.388322,5.057375 -9.789583,8.466667 z"
					id="path131062"
				/><path
					style="opacity:1;fill:#303547;fill-opacity:1;fill-rule:evenodd;stroke-width:1.2;stroke-linecap:round;stroke-linejoin:round;stroke-miterlimit:3;paint-order:stroke fill markers"
					d="m 74.083332,60.854166 8.73125,-4.7625 -2.645833,5.027083 z"
					id="path130197"
				/><path
					style="opacity:1;fill:#a9b2b4;fill-opacity:1;fill-rule:evenodd;stroke-width:1.2;stroke-linecap:round;stroke-linejoin:round;stroke-miterlimit:3;paint-order:stroke fill markers"
					d="m 97.102082,64.558333 -1.852083,-0.79375 3.439583,-7.14375 10.054168,0.79375 -2.91042,4.233333 -3.96875,2.910417 z"
					id="path130993"
				/><path
					style="opacity:1;fill:#303547;fill-opacity:1;fill-rule:evenodd;stroke-width:1.2;stroke-linecap:round;stroke-linejoin:round;stroke-miterlimit:3;paint-order:stroke fill markers"
					d="m 84.931249,61.383333 6.879167,1.852083 5.291666,-9.260417 c -1.978755,3.016008 -4.863668,5.793696 -12.170833,7.408334 z"
					id="path130199"
				/><path
					style="opacity:1;fill:#303547;fill-opacity:1;fill-rule:evenodd;stroke-width:1.2;stroke-linecap:round;stroke-linejoin:round;stroke-miterlimit:3;paint-order:stroke fill markers"
					d="m 97.102082,64.558333 c 3.695078,-0.509916 6.298258,-1.660256 8.731248,-2.910417 l -3.70416,5.027083 z"
					id="path130201"
				/><path
					style="opacity:1;fill:#303547;fill-opacity:1;fill-rule:evenodd;stroke-width:1.2;stroke-linecap:round;stroke-linejoin:round;stroke-miterlimit:3;paint-order:stroke fill markers"
					d="m 108.74375,69.056249 h 6.08542 c -0.79343,6.145701 -4.49074,6.666649 -7.9375,7.672917 0.92122,-2.477064 1.83098,-4.954798 1.85208,-7.672917 z"
					id="path130203"
				/><path
					style="opacity:1;fill:#5b7082;fill-opacity:1;fill-rule:evenodd;stroke-width:1.2;stroke-linecap:round;stroke-linejoin:round;stroke-miterlimit:3;paint-order:stroke fill markers"
					d="m 117.73958,69.056249 h -2.91041 v 10.31875 l 1.32291,1.322917 h 1.5875 z"
					id="path131066"
				/><path
					style="opacity:1;fill:#98b0c0;fill-opacity:1;fill-rule:evenodd;stroke-width:1.2;stroke-linecap:round;stroke-linejoin:round;stroke-miterlimit:3;paint-order:stroke fill markers"
					d="m 87.312499,83.872916 v -3.704167 l 8.466666,-6.614583 v 2.116666 h 2.910417 l -7.672916,8.202084 z"
					id="path135040"
				/><path
					style="opacity:1;fill:#deeeee;fill-opacity:1;fill-rule:evenodd;stroke-width:1.2;stroke-linecap:round;stroke-linejoin:round;stroke-miterlimit:3;paint-order:stroke fill markers"
					d="m 95.779165,75.670832 h 2.910414 l 0.79375,-0.79375 v -2.645833 h -2.116664 l -1.5875,1.322917 z"
					id="path135042"
				/><path
					style="opacity:1;fill:#cee1eb;fill-opacity:1;fill-rule:evenodd;stroke-width:1.2;stroke-linecap:round;stroke-linejoin:round;stroke-miterlimit:3;paint-order:stroke fill markers"
					d="m 59.795833,83.872916 h 2.38125 v -5.291667 c -1.114914,0.38938 -1.806157,1.19585 -2.38125,2.116667 z"
					id="path135206"
				/><path
					style="opacity:1;fill:#cee1eb;fill-opacity:1;fill-rule:evenodd;stroke-width:1.2;stroke-linecap:round;stroke-linejoin:round;stroke-miterlimit:3;paint-order:stroke fill markers"
					d="m 65.881249,83.872916 v -7.14375 l 2.116667,-0.79375 v 7.9375 z"
					id="path135208"
				/><path
					style="opacity:1;fill:#9b5a67;fill-opacity:1;fill-rule:evenodd;stroke-width:1.2;stroke-linecap:round;stroke-linejoin:round;stroke-miterlimit:3;paint-order:stroke fill markers"
					d="m 77.258332,80.962499 v 2.910417 H 74.08333 l 0.921633,-3.439584 z"
					id="path140382"
				/><path
					style="opacity:1;fill:#cee1eb;fill-opacity:1;fill-rule:evenodd;stroke-width:1.2;stroke-linecap:round;stroke-linejoin:round;stroke-miterlimit:3;paint-order:stroke fill markers"
					d="m 74.083332,83.872916 c 0.440738,-1.402555 0.887936,-2.800587 3.175,-2.910417 v -6.085417 h -3.175 z"
					id="path135210"
				/><path
					style="opacity:1;fill:#9b5a67;fill-opacity:1;fill-rule:evenodd;stroke-width:1.2;stroke-linecap:round;stroke-linejoin:round;stroke-miterlimit:3;paint-order:stroke fill markers"
					d="m 83.343749,80.962499 v 2.910417 h 2.910417 l -1.205215,-4.497917 z"
					id="path141076"
				/><path
					style="opacity:1;fill:#303547;fill-opacity:1;fill-rule:evenodd;stroke-width:1.2;stroke-linecap:round;stroke-linejoin:round;stroke-miterlimit:3;paint-order:stroke fill markers"
					d="m 77.258332,77.258332 h 6.35 l -0.264583,-2.38125 h -6.085417 z"
					id="path140374"
				/><path
					style="opacity:1;fill:#cee1eb;fill-opacity:1;fill-rule:evenodd;stroke-width:1.2;stroke-linecap:round;stroke-linejoin:round;stroke-miterlimit:3;paint-order:stroke fill markers"
					d="m 86.254166,83.872916 v -8.202084 c -0.860703,-0.500264 -1.883917,-0.698319 -2.962315,-0.79375 v 6.085417 c 1.26395,0.212724 2.457699,0.617739 2.962315,2.910417 z"
					id="path135212"
				/><path
					style="opacity:1;fill:#98b0c0;fill-opacity:1;fill-rule:evenodd;stroke-width:1.2;stroke-linecap:round;stroke-linejoin:round;stroke-miterlimit:3;paint-order:stroke fill markers"
					d="m 95.514582,89.958332 -1.5875,-2.910416 -5.55625,1.058333 0.529167,2.116667 1.058333,2.116666 z"
					id="path136020"
				/><path
					style="opacity:1;fill:#cee1eb;fill-opacity:1;fill-rule:evenodd;stroke-width:1.2;stroke-linecap:round;stroke-linejoin:round;stroke-miterlimit:3;paint-order:stroke fill markers"
					d="m 86.254166,90.222916 v -3.175 h 5.291666 l -0.79375,3.175 z"
					id="path135214"
				/><path
					style="opacity:1;fill:#cee1eb;fill-opacity:1;fill-rule:evenodd;stroke-width:1.2;stroke-linecap:round;stroke-linejoin:round;stroke-miterlimit:3;paint-order:stroke fill markers"
					d="m 80.168749,101.07083 v -3.174998 h 7.14375 l -1.322917,3.174998 z"
					id="path135216"
				/><path
					style="opacity:1;fill:#cee1eb;fill-opacity:1;fill-rule:evenodd;stroke-width:1.2;stroke-linecap:round;stroke-linejoin:round;stroke-miterlimit:3;paint-order:stroke fill markers"
					d="m 53.975,119.0625 24.341666,0 -1.058334,2.64583 -23.283332,0 z"
					id="path135218"
				/><path
					style="opacity:1;fill:#cee1eb;fill-opacity:1;fill-rule:evenodd;stroke-width:1.2;stroke-linecap:round;stroke-linejoin:round;stroke-miterlimit:3;paint-order:stroke fill markers"
					d="m 62.970833,113.24167 2.38125,-3.175 h 16.933333 l -1.322917,3.175 z"
					id="path135220"
				/><path
					style="opacity:1;fill:#cee1eb;fill-opacity:1;fill-rule:evenodd;stroke-width:1.2;stroke-linecap:round;stroke-linejoin:round;stroke-miterlimit:3;paint-order:stroke fill markers"
					d="m 76.993749,103.98125 v 3.175 h 4.497917 l 1.852083,-3.2079 z"
					id="path135222"
				/><path
					style="opacity:1;fill:#cee1eb;fill-opacity:1;fill-rule:evenodd;stroke-width:1.2;stroke-linecap:round;stroke-linejoin:round;stroke-miterlimit:3;paint-order:stroke fill markers"
					d="m 77.258332,87.047916 h 2.910417 v 5.820833 h -2.910417 z"
					id="path135224"
				/><path
					style="opacity:1;fill:#deeeee;fill-opacity:1;fill-rule:evenodd;stroke-width:1.2;stroke-linecap:round;stroke-linejoin:round;stroke-miterlimit:3;paint-order:stroke fill markers"
					d="m 93.927082,87.047916 1.5875,2.910416 0.529167,-0.264583 1.852083,-2.116667 -1.5875,-1.5875 z"
					id="path135226"
				/><path
					style="opacity:1;fill:#deeeee;fill-opacity:1;fill-rule:evenodd;stroke-width:1.2;stroke-linecap:round;stroke-linejoin:round;stroke-miterlimit:3;paint-order:stroke fill markers"
					d="m 95.779165,94.191665 -4.233333,0.529167 v 1.5875 l 1.852083,2.116667 2.38125,-2.645834 z"
					id="path135228"
				/><path
					style="opacity:1;fill:#deeeee;fill-opacity:1;fill-rule:evenodd;stroke-width:1.2;stroke-linecap:round;stroke-linejoin:round;stroke-miterlimit:3;paint-order:stroke fill markers"
					d="m 89.958332,103.1875 v 1.5875 l -2.38125,2.38125 -1.5875,-1.85208 v -1.5875 z"
					id="path135230"
				/><path
					style="opacity:1;fill:#deeeee;fill-opacity:1;fill-rule:evenodd;stroke-width:1.2;stroke-linecap:round;stroke-linejoin:round;stroke-miterlimit:3;paint-order:stroke fill markers"
					d="m 78.58125,117.21042 1.058332,-1.85209 3.175,1.5875 -2.645832,2.11667 z"
					id="path135232"
				/><path
					style="opacity:1;fill:#98b0c0;fill-opacity:1;fill-rule:evenodd;stroke-width:1.2;stroke-linecap:round;stroke-linejoin:round;stroke-miterlimit:3;paint-order:stroke fill markers"
					d="m 71.702082,119.0625 v -3.70417 l 2.38125,-2.38125 5.55625,2.38125 0.529167,3.70417 z"
					id="path135960"
				/><path
					style="opacity:1;fill:#98b0c0;fill-opacity:1;fill-rule:evenodd;stroke-width:1.2;stroke-linecap:round;stroke-linejoin:round;stroke-miterlimit:3;paint-order:stroke fill markers"
					d="m 78.845832,110.33125 -1.5875,-2.91042 3.704167,-3.175 5.027083,-0.52916 1.5875,2.64583 v 0.79375 l -5.027083,0.52917 z"
					id="path136016"
				/><path
					style="opacity:1;fill:#98b0c0;fill-opacity:1;fill-rule:evenodd;stroke-width:1.2;stroke-linecap:round;stroke-linejoin:round;stroke-miterlimit:3;paint-order:stroke fill markers"
					d="m 84.666666,101.33542 -1.5875,-2.645838 3.704166,-3.439583 4.7625,-0.529167 1.058334,1.322917 0.793749,2.38125 -5.027083,0.529166 z"
					id="path136018"
				/><path
					style="opacity:1;fill:#303547;fill-opacity:1;fill-rule:evenodd;stroke-width:1.2;stroke-linecap:round;stroke-linejoin:round;stroke-miterlimit:3;paint-order:stroke fill markers"
					d="m 67.997916,113.24167 v -6.08542 h 6.085416 v 6.08542 z"
					id="path139403"
				/><path
					style="opacity:1;fill:#9b5a67;fill-opacity:1;fill-rule:evenodd;stroke-width:1.2;stroke-linecap:round;stroke-linejoin:round;stroke-miterlimit:3;paint-order:stroke fill markers"
					d="m 71.172916,109.80208 v -2.64583 h 2.910414 v 2.91042 h -2.910414 z"
					id="path139513"
				/><path
					style="opacity:1;fill:#303547;fill-opacity:1;fill-rule:evenodd;stroke-width:1.2;stroke-linecap:round;stroke-linejoin:round;stroke-miterlimit:3;paint-order:stroke fill markers"
					d="m 70.908333,107.15625 v -6.08542 h 6.085416 v 6.08542 z"
					id="path140052"
				/><path
					style="opacity:1;fill:#9b5a67;fill-opacity:1;fill-rule:evenodd;stroke-width:1.2;stroke-linecap:round;stroke-linejoin:round;stroke-miterlimit:3;paint-order:stroke fill markers"
					d="m 74.083333,103.71666 v -2.64583 h 2.910414 v 2.91042 h -2.910414 z"
					id="path140054"
				/><path
					style="opacity:1;fill:#303547;fill-opacity:1;fill-rule:evenodd;stroke-width:1.2;stroke-linecap:round;stroke-linejoin:round;stroke-miterlimit:3;paint-order:stroke fill markers"
					d="m 74.083333,101.07083 0,-6.217705 h 6.085416 l 0,6.217705 z"
					id="path140056"
				/><path
					style="opacity:1;fill:#303547;fill-opacity:1;fill-rule:evenodd;stroke-width:1.2;stroke-linecap:round;stroke-linejoin:round;stroke-miterlimit:3;paint-order:stroke fill markers"
					d="m 77.258332,94.985415 h 6.085417 v -2.116666 h -6.085417 z"
					id="path140228"
				/><path
					style="opacity:1;fill:#9b5a67;fill-opacity:1;fill-rule:evenodd;stroke-width:1.2;stroke-linecap:round;stroke-linejoin:round;stroke-miterlimit:3;paint-order:stroke fill markers"
					d="m 77.258333,97.498955 v -2.64583 l 2.910416,0 -2e-6,2.91042 h -2.910414 z"
					id="path140058"
				/><path
					style="opacity:1;fill:#303547;fill-opacity:1;fill-rule:evenodd;stroke-width:1.2;stroke-linecap:round;stroke-linejoin:round;stroke-miterlimit:3;paint-order:stroke fill markers"
					d="m 59.795833,83.872916 h 6.085416 v 6.085416 h -3.175 c -1.352703,-0.07214 -2.183305,-1.369812 -2.910416,-2.910416 z"
					id="path140368"
				/><path
					style="opacity:1;fill:#303547;fill-opacity:1;fill-rule:evenodd;stroke-width:1.2;stroke-linecap:round;stroke-linejoin:round;stroke-miterlimit:3;paint-order:stroke fill markers"
					d="m 67.997916,89.958332 h 6.085416 v -4.233333 c 0.17529,-0.824081 0.740985,-1.420103 1.5875,-1.852083 h -7.672916 z"
					id="path140370"
				/><path
					style="opacity:1;fill:#303547;fill-opacity:1;fill-rule:evenodd;stroke-width:1.2;stroke-linecap:round;stroke-linejoin:round;stroke-miterlimit:3;paint-order:stroke fill markers"
					d="m 67.997916,79.904166 h 3.175 V 77.258332 H 74.08333 V 74.87708 c -1.867648,-0.0022 -3.900997,0.361313 -6.085414,1.058336 z"
					id="path140372"
				/><path
					style="opacity:1;fill:#303547;fill-opacity:1;fill-rule:evenodd;stroke-width:1.2;stroke-linecap:round;stroke-linejoin:round;stroke-miterlimit:3;paint-order:stroke fill markers"
					d="m 83.079166,90.222916 h 3.175 v -3.175 -3.175 h -3.175 z"
					id="path140376"
				/><path
					style="opacity:1;fill:#303547;fill-opacity:1;fill-rule:evenodd;stroke-width:1.2;stroke-linecap:round;stroke-linejoin:round;stroke-miterlimit:3;paint-order:stroke fill markers"
					d="m 77.258332,83.872916 v -2.910417 h 6.085417 v 2.910417 z"
					id="path140378"
				/><path
					style="opacity:1;fill:#303547;fill-opacity:1;fill-rule:evenodd;stroke-width:1.2;stroke-linecap:round;stroke-linejoin:round;stroke-miterlimit:3;paint-order:stroke fill markers"
					d="m 81.491666,83.872916 c 0.858047,0.07714 1.427861,0.801223 1.852083,1.852083 v -2.116667 h -1.852083 z"
					id="path140380"
				/><path
					style="opacity:1;fill:#9b5a67;fill-opacity:1;fill-rule:evenodd;stroke-width:1.2;stroke-linecap:round;stroke-linejoin:round;stroke-miterlimit:3;paint-order:stroke fill markers"
					d="m 65.881249,89.958332 h 2.116667 v -6.085416 h -2.116667 z"
					id="path141074"
				/><path
					style="opacity:1;fill:#9b5a67;fill-opacity:1;fill-rule:evenodd;stroke-width:1.2;stroke-linecap:round;stroke-linejoin:round;stroke-miterlimit:3;paint-order:stroke fill markers"
					d="m 83.343749,92.868749 v -2.645833 h 2.910417 v 2.645833 z"
					id="path141078"
				/><path
					style="opacity:1;fill:#9b5a67;fill-opacity:1;fill-rule:evenodd;stroke-width:1.2;stroke-linecap:round;stroke-linejoin:round;stroke-miterlimit:3;paint-order:stroke fill markers"
					d="m 83.079166,90.222916 v 2.645833 h 0.264583 v -2.645833 z"
					id="path141080"
				/><path
					style="opacity:1;fill:#5b7082;fill-opacity:1;fill-rule:evenodd;stroke-width:1.2;stroke-linecap:round;stroke-linejoin:round;stroke-miterlimit:3;paint-order:stroke fill markers"
					d="m 62.177083,83.872916 v -5.291667 l 3.704166,-1.852083 v 7.14375 z"
					id="path141082"
				/><path
					style="opacity:1;fill:#deeeee;fill-opacity:1;fill-rule:evenodd;stroke-width:1.2;stroke-linecap:round;stroke-linejoin:round;stroke-miterlimit:3;paint-order:stroke fill markers"
					d="m 55.033333,107.15625 1.5875,-2.64583 1.852083,2.64583 -1.322917,2.38125 h -1.322916 z"
					id="path142072"
				/><path
					style="opacity:1;fill:#98b0c0;fill-opacity:1;fill-rule:evenodd;stroke-width:1.2;stroke-linecap:round;stroke-linejoin:round;stroke-miterlimit:3;paint-order:stroke fill markers"
					d="m 53.974999,112.97708 1.058334,-5.82083 1.852083,2.11667 1.5875,-2.11667 1.058333,6.08542 h -5.55625 z"
					id="path141650"
				/><path
					style="opacity:1;fill:#deeeee;fill-opacity:1;fill-rule:evenodd;stroke-width:1.2;stroke-linecap:round;stroke-linejoin:round;stroke-miterlimit:3;paint-order:stroke fill markers"
					d="m 62.970833,106.09792 h 2.910416 l 1.322917,-2.64584 -2.645833,-1.85208 -1.5875,3.175 z"
					id="path141725"
				/><path
					style="opacity:1;fill:#5b7082;fill-opacity:1;fill-rule:evenodd;stroke-width:1.2;stroke-linecap:round;stroke-linejoin:round;stroke-miterlimit:3;paint-order:stroke fill markers"
					d="m 117.73958,65.881249 h -2.91041 V 54.504166 h 2.91041 z"
					id="path145704"
				/><path
					style="opacity:1;fill:#5b7082;fill-opacity:1;fill-rule:evenodd;stroke-width:1.2;stroke-linecap:round;stroke-linejoin:round;stroke-miterlimit:3;paint-order:stroke fill markers"
					d="m 117.73958,52.122916 h -2.91041 V 39.6875 h 2.91041 z"
					id="path145921"
				/><path
					style="opacity:1;fill:#5b7082;fill-opacity:1;fill-rule:evenodd;stroke-width:1.2;stroke-linecap:round;stroke-linejoin:round;stroke-miterlimit:3;paint-order:stroke fill markers"
					d="m 117.73958,37.30625 h -2.91041 V 25.135416 h 2.91041 z"
					id="path145923"
				/><path
					style="opacity:1;fill:#5b7082;fill-opacity:1;fill-rule:evenodd;stroke-width:1.2;stroke-linecap:round;stroke-linejoin:round;stroke-miterlimit:3;paint-order:stroke fill markers"
					d="m 114.82917,22.754166 h 2.91041 V 11.1125 h -5.55625 v 6.085416 h 2.64584 z"
					id="path145925"
				/><path
					style="opacity:1;fill:#5b7082;fill-opacity:1;fill-rule:evenodd;stroke-width:1.2;stroke-linecap:round;stroke-linejoin:round;stroke-miterlimit:3;paint-order:stroke fill markers"
					d="m 108.47917,11.377083 h -5.02709 v 5.820833 h 5.02709 z"
					id="path145927"
				/><path
					style="opacity:1;fill:#5b7082;fill-opacity:1;fill-rule:evenodd;stroke-width:1.2;stroke-linecap:round;stroke-linejoin:round;stroke-miterlimit:3;paint-order:stroke fill markers"
					d="M 100.0125,17.197916 V 11.377083 H 97.102082 V 8.2020832 h -2.38125 v 8.9958328 z"
					id="path145929"
				/><path
					style="opacity:1;fill:#cee1eb;fill-opacity:1;fill-rule:evenodd;stroke-width:1.2;stroke-linecap:round;stroke-linejoin:round;stroke-miterlimit:3;paint-order:stroke fill markers"
					d="m 74.083333,17.197917 6.349997,-1e-6 5.29167,1e-6 -10e-7,-5.820834 V 8.2020832 H 76.99375 V 5.0270833 H 74.083332 V 15.08125 Z"
					id="path146754"
				/><path
					style="opacity:1;fill:#5b7082;fill-opacity:1;fill-rule:evenodd;stroke-width:1.2;stroke-linecap:round;stroke-linejoin:round;stroke-miterlimit:3;paint-order:stroke fill markers"
					d="m 83.079166,8.2020832 h 2.645833 V 11.1125 h -2.645833 z"
					id="path145931"
				/><path
					style="opacity:1;fill:#cee1eb;fill-opacity:1;fill-rule:evenodd;stroke-width:1.2;stroke-linecap:round;stroke-linejoin:round;stroke-miterlimit:3;paint-order:stroke fill markers"
					d="m 85.725,17.197917 6.349997,-1e-6 2.645836,1e-6 4e-6,-5.820834 V 8.2020832 h -6.08542 V 5.0270833 H 85.724999 V 15.08125 Z"
					id="path146752"
				/><path
					style="opacity:1;fill:#5b7082;fill-opacity:1;fill-rule:evenodd;stroke-width:1.2;stroke-linecap:round;stroke-linejoin:round;stroke-miterlimit:3;paint-order:stroke fill markers"
					d="m 85.724999,11.1125 h 5.820833 v 6.085416 h -5.820833 z"
					id="path145935"
				/><path
					style="opacity:1;fill:#5b7082;fill-opacity:1;fill-rule:evenodd;stroke-width:1.2;stroke-linecap:round;stroke-linejoin:round;stroke-miterlimit:3;paint-order:stroke fill markers"
					d="m 77.258332,11.1125 h 5.291667 v 6.085416 h -5.55625 V 11.1125 Z"
					id="path145937"
				/><path
					style="opacity:1;fill:#5b7082;fill-opacity:1;fill-rule:evenodd;stroke-width:1.2;stroke-linecap:round;stroke-linejoin:round;stroke-miterlimit:3;paint-order:stroke fill markers"
					d="m 68.527082,17.197916 h 5.55625 V 7.9374999 h -2.38125 V 11.1125 h -3.175 z"
					id="path145939"
				/><path
					style="opacity:1;fill:#5b7082;fill-opacity:1;fill-rule:evenodd;stroke-width:1.2;stroke-linecap:round;stroke-linejoin:round;stroke-miterlimit:3;paint-order:stroke fill markers"
					d="m 65.616667,17.197916 h -5.55625 V 7.9374999 h 2.38125 V 11.1125 h 3.175 z"
					id="path145943"
				/><path
					style="opacity:1;fill:#cee1eb;fill-opacity:1;fill-rule:evenodd;stroke-width:1.2;stroke-linecap:round;stroke-linejoin:round;stroke-miterlimit:3;paint-order:stroke fill markers"
					d="m 114.82917,54.504166 v -2.38125 h 2.91041 v 2.38125 z"
					id="path146671"
				/><path
					style="opacity:1;fill:#cee1eb;fill-opacity:1;fill-rule:evenodd;stroke-width:1.2;stroke-linecap:round;stroke-linejoin:round;stroke-miterlimit:3;paint-order:stroke fill markers"
					d="m 114.82917,39.6875 v -2.38125 h 2.91041 v 2.38125 z"
					id="path146742"
				/><path
					style="opacity:1;fill:#cee1eb;fill-opacity:1;fill-rule:evenodd;stroke-width:1.2;stroke-linecap:round;stroke-linejoin:round;stroke-miterlimit:3;paint-order:stroke fill markers"
					d="m 114.82917,25.135416 v -2.38125 h 2.91041 v 2.38125 z"
					id="path146744"
				/><path
					style="opacity:1;fill:#303547;fill-opacity:1;fill-rule:evenodd;stroke-width:1.2;stroke-linecap:round;stroke-linejoin:round;stroke-miterlimit:3;paint-order:stroke fill markers"
					d="m 60.060416,17.197916 h 54.768754 v 48.683333 h -6.08542 v -3.96875 l 3.43958,-3.439583 V 36.777083 L 108.74375,33.3375 v -8.202084 c 0.0273,-1.612128 -0.89005,-2.055655 -2.11667,-2.116666 H 76.993749 l -2.116667,2.116666 H 60.060416 Z"
					id="path147486"
				/><path
					style="opacity:1;fill:#303547;fill-opacity:1;fill-rule:evenodd;stroke-width:1.2;stroke-linecap:round;stroke-linejoin:round;stroke-miterlimit:3;paint-order:stroke fill markers"
					d="m 69.056249,60.589583 0.529167,-3.439584 c -1.223128,1.479578 -2.794758,2.809318 -4.7625,3.96875 z"
					id="path130195"
				/><path
					style="opacity:1;fill:#9b5a67;fill-opacity:1;fill-rule:evenodd;stroke-width:1.2;stroke-linecap:round;stroke-linejoin:round;stroke-miterlimit:3;paint-order:stroke fill markers"
					d="m 114.82917,54.504166 v -2.38125 h -2.64584 v 2.38125 z"
					id="path147971"
				/><path
					style="opacity:1;fill:#9b5a67;fill-opacity:1;fill-rule:evenodd;stroke-width:1.2;stroke-linecap:round;stroke-linejoin:round;stroke-miterlimit:3;paint-order:stroke fill markers"
					d="m 114.82917,39.6875 v -2.38125 h -2.64584 v 2.38125 z"
					id="path148249"
				/><path
					style="opacity:1;fill:#9b5a67;fill-opacity:1;fill-rule:evenodd;stroke-width:1.2;stroke-linecap:round;stroke-linejoin:round;stroke-miterlimit:3;paint-order:stroke fill markers"
					d="m 114.82917,25.135416 h -6.08542 v -7.9375 h 3.43958 v 5.55625 h 2.64584 z"
					id="path148251"
				/><path
					style="opacity:1;fill:#9b5a67;fill-opacity:1;fill-rule:evenodd;stroke-width:1.2;stroke-linecap:round;stroke-linejoin:round;stroke-miterlimit:3;paint-order:stroke fill markers"
					d="m 100.0125,23.01875 v -5.820834 h 3.43958 v 5.820834 z"
					id="path148253"
				/><path
					style="opacity:1;fill:#9b5a67;fill-opacity:1;fill-rule:evenodd;stroke-width:1.15292;stroke-linecap:round;stroke-linejoin:round;stroke-miterlimit:3;paint-order:stroke fill markers"
					d="m 91.545833,23.01875 v -5.820834 h 3.175 v 5.820834 z"
					id="path148255"
				/><path
					style="opacity:1;fill:#9b5a67;fill-opacity:1;fill-rule:evenodd;stroke-width:1.15292;stroke-linecap:round;stroke-linejoin:round;stroke-miterlimit:3;paint-order:stroke fill markers"
					d="m 82.55,23.01875 v -5.820834 h 3.175 v 5.820834 z"
					id="path148257"
				/><path
					style="opacity:1;fill:#9b5a67;fill-opacity:1;fill-rule:evenodd;stroke-width:1.28901;stroke-linecap:round;stroke-linejoin:round;stroke-miterlimit:3;paint-order:stroke fill markers"
					d="m 65.616667,25.135417 v -7.937501 h 2.910416 v 7.937501 z"
					id="path148259"
				/><path
					style="opacity:1;fill:#9b5a67;fill-opacity:1;fill-rule:evenodd;stroke-width:1.28901;stroke-linecap:round;stroke-linejoin:round;stroke-miterlimit:3;paint-order:stroke fill markers"
					d="m 57.15,25.135417 v -7.937501 h 2.910416 v 7.937501 z"
					id="path148261"
				/><path
					style="opacity:1;fill:#9b5a67;fill-opacity:1;fill-rule:evenodd;stroke-width:1.2;stroke-linecap:round;stroke-linejoin:round;stroke-miterlimit:3;paint-order:stroke fill markers"
					d="m 74.083332,25.135416 h 0.79375 l 2.116667,-2.116666 v -5.820834 h -2.910417 z"
					id="path148263"
				/><path
					style="opacity:1;fill:#98b0c0;fill-opacity:1;fill-rule:evenodd;stroke-width:1.2;stroke-linecap:round;stroke-linejoin:round;stroke-miterlimit:3;paint-order:stroke fill markers"
					d="M 13.229167,56.091666 16.139583,55.033333 28.045833,39.6875 25.4,38.89375 l -3.704167,-2.645834 -2.38125,-2.38125 -7.408333,11.1125 -0.529167,5.820833 z"
					id="path150549"
				/><path
					style="opacity:1;fill:#deeeee;fill-opacity:1;fill-rule:evenodd;stroke-width:1.2;stroke-linecap:round;stroke-linejoin:round;stroke-miterlimit:3;paint-order:stroke fill markers"
					d="M 10.583333,57.149999 13.229167,56.091666 25.4,38.89375 21.695833,36.247916 21.43125,36.5125 11.377083,50.799999 Z"
					id="path150064"
				/><path
					style="opacity:1;fill:#5b7082;fill-opacity:1;fill-rule:evenodd;stroke-width:1.2;stroke-linecap:round;stroke-linejoin:round;stroke-miterlimit:3;paint-order:stroke fill markers"
					d="M 57.149999,25.135416 V 11.1125 H 51.064583 V 7.9374999 h -12.7 l -1.5875,0.4253693 -6.879167,5.3954638 -5.820833,1.322917 c -1.340304,1.151739 -2.671117,2.541336 -3.96875,4.7625 l -1.322917,2.910416 c -0.783751,6.038319 -0.820548,10.260754 0.529167,11.1125 1.697191,2.680552 3.955565,5.123822 8.466667,6.614583 h 11.1125 c 3.402885,-0.612842 6.996092,-2.788503 11.112499,-9.260416 l 1.322917,-1.5875 c 1.628625,-2.211529 3.186234,-4.58535 5.820833,-4.497917 z"
					id="path149717"
				/><path
					style="opacity:1;fill:#cee1eb;fill-opacity:1;fill-rule:evenodd;stroke-width:1.2;stroke-linecap:round;stroke-linejoin:round;stroke-miterlimit:3;paint-order:stroke fill markers"
					d="m 19.314583,33.866666 6.35,3.175 V 30.1625 Z"
					id="path155053"
				/><path
					style="opacity:1;fill:#cee1eb;fill-opacity:1;fill-rule:evenodd;stroke-width:1.2;stroke-linecap:round;stroke-linejoin:round;stroke-miterlimit:3;paint-order:stroke fill markers"
					d="m 21.695833,28.045833 v -3.96875 l 3.175,-4.233333 2.116667,-2.645834 0.79375,-1.058333 2.116666,1.058333 h 4.497917 l 0,4.762501 -7.14375,6.085416 z"
					id="path154325"
				/><path
					style="opacity:1;fill:#cee1eb;fill-opacity:1;fill-rule:evenodd;stroke-width:1.2;stroke-linecap:round;stroke-linejoin:round;stroke-miterlimit:3;paint-order:stroke fill markers"
					d="m 32.808333,36.777083 h -3.96875 V 29.36875 L 31.75,26.9875 l 5.820833,-2.38125 0.79375,0.264583 2.38125,4.497917 -0.264584,1.852083 -3.704166,2.38125 z"
					id="path154323"
				/><path
					style="opacity:1;fill:#cee1eb;fill-opacity:1;fill-rule:evenodd;stroke-width:1.2;stroke-linecap:round;stroke-linejoin:round;stroke-miterlimit:3;paint-order:stroke fill markers"
					d="m 53.974999,18.785416 h -4.497916 l -1.852084,2.116667 -2.910416,2.910417 -2.910417,3.96875 2.116667,3.96875 1.322916,-0.529167 h 3.175 l 1.852084,-3.175 0.79375,-0.264583 2.910416,-2.910417 z"
					id="path154321"
				/><path
					style="opacity:1;fill:#cee1eb;fill-opacity:1;fill-rule:evenodd;stroke-width:1.2;stroke-linecap:round;stroke-linejoin:round;stroke-miterlimit:3;paint-order:stroke fill markers"
					d="m 42.597916,10.583333 h 5.027083 V 15.875 l -6.614583,7.14375 H 36.5125 l -0.264584,-1.5875 v -3.704167 l 2.910417,-3.175 z"
					id="path154319"
				/><path
					style="opacity:1;fill:#cee1eb;fill-opacity:1;fill-rule:evenodd;stroke-width:1.2;stroke-linecap:round;stroke-linejoin:round;stroke-miterlimit:3;paint-order:stroke fill markers"
					d="m 26.722916,12.964583 c 2.28511,-1.710943 4.927388,-2.913351 7.672917,-3.9687498 L 38.1,13.229167 37.570833,13.758333 h -8.466667 z"
					id="path154108"
				/><path
					style="opacity:1;fill:#98b0c0;fill-opacity:1;fill-rule:evenodd;stroke-width:1.2;stroke-linecap:round;stroke-linejoin:round;stroke-miterlimit:3;paint-order:stroke fill markers"
					d="m 37.041666,8.4666666 5.55625,2.1166664 v 3.96875 H 38.89375 l -4.7625,-3.96875 z"
					id="path152640"
				/><path
					style="opacity:1;fill:#deeeee;fill-opacity:1;fill-rule:evenodd;stroke-width:1.2;stroke-linecap:round;stroke-linejoin:round;stroke-miterlimit:3;paint-order:stroke fill markers"
					d="m 34.13125,8.2020832 h 1.852083 l 1.058333,0.2835796 V 10.583333 H 34.13125 Z"
					id="path152210"
				/><path
					style="opacity:1;fill:#98b0c0;fill-opacity:1;fill-rule:evenodd;stroke-width:1.2;stroke-linecap:round;stroke-linejoin:round;stroke-miterlimit:3;paint-order:stroke fill markers"
					d="M 32.808333,37.570833 31.75,33.602083 l 2.910416,-2.645833 2.116667,2.645833 -0.79375,3.96875 z"
					id="path152642"
				/><path
					style="opacity:1;fill:#deeeee;fill-opacity:1;fill-rule:evenodd;stroke-width:1.2;stroke-linecap:round;stroke-linejoin:round;stroke-miterlimit:3;paint-order:stroke fill markers"
					d="M 35.983333,37.570833 35.416175,39.6875 H 33.3375 l -0.567159,-2.116667 z"
					id="path152218"
				/><path
					style="opacity:1;fill:#98b0c0;fill-opacity:1;fill-rule:evenodd;stroke-width:1.2;stroke-linecap:round;stroke-linejoin:round;stroke-miterlimit:3;paint-order:stroke fill markers"
					d="M 45.243749,33.866666 V 29.36875 l -3.439583,-1.5875 -2.116666,2.38125 2.381249,3.704166 z"
					id="path152644"
				/><path
					style="opacity:1;fill:#deeeee;fill-opacity:1;fill-rule:evenodd;stroke-width:1.2;stroke-linecap:round;stroke-linejoin:round;stroke-miterlimit:3;paint-order:stroke fill markers"
					d="m 42.068749,33.866666 h 3.175 v 3.281744 h -3.175 z"
					id="path152220"
				/><path
					style="opacity:1;fill:#98b0c0;fill-opacity:1;fill-rule:evenodd;stroke-width:1.2;stroke-linecap:round;stroke-linejoin:round;stroke-miterlimit:3;paint-order:stroke fill markers"
					d="m 51.064583,28.575 0.264583,-4.7625 -3.704167,-2.910417 -2.910416,2.910417 3.175,4.7625 z"
					id="path152646"
				/><path
					style="opacity:1;fill:#deeeee;fill-opacity:1;fill-rule:evenodd;stroke-width:1.2;stroke-linecap:round;stroke-linejoin:round;stroke-miterlimit:3;paint-order:stroke fill markers"
					d="m 47.889583,28.575 v 2.645833 h 3.175 V 28.575 Z"
					id="path152222"
				/><path
					style="opacity:1;fill:#98b0c0;fill-opacity:1;fill-rule:evenodd;stroke-width:1.2;stroke-linecap:round;stroke-linejoin:round;stroke-miterlimit:3;paint-order:stroke fill markers"
					d="m 38.364583,21.43125 h -3.96875 L 31.75,24.870833 l 2.645833,2.116667 3.96875,-2.116667 z"
					id="path152648"
				/><path
					style="opacity:1;fill:#deeeee;fill-opacity:1;fill-rule:evenodd;stroke-width:1.2;stroke-linecap:round;stroke-linejoin:round;stroke-miterlimit:3;paint-order:stroke fill markers"
					d="M 34.395833,24.60625 H 32.279166 L 31.75,24.870833 V 26.9875 h 2.645833 z"
					id="path152638"
				/><path
					style="opacity:1;fill:#98b0c0;fill-opacity:1;fill-rule:evenodd;stroke-width:1.2;stroke-linecap:round;stroke-linejoin:round;stroke-miterlimit:3;paint-order:stroke fill markers"
					d="m 25.4,34.925 3.439583,-2.645834 V 29.36875 h -3.704167 l -1.852083,2.910416 z"
					id="path152650"
				/><path
					style="opacity:1;fill:#deeeee;fill-opacity:1;fill-rule:evenodd;stroke-width:1.2;stroke-linecap:round;stroke-linejoin:round;stroke-miterlimit:3;paint-order:stroke fill markers"
					d="M 25.4,32.54375 V 34.925 H 22.754166 V 32.54375 32.279166 H 25.4 Z"
					id="path152216"
				/><path
					style="opacity:1;fill:#98b0c0;fill-opacity:1;fill-rule:evenodd;stroke-width:1.2;stroke-linecap:round;stroke-linejoin:round;stroke-miterlimit:3;paint-order:stroke fill markers"
					d="m 18.785416,22.754166 6.085417,3.175 3.175,-2.116666 -1.852083,-3.96875 h -4.497917 z"
					id="path152652"
				/><path
					style="opacity:1;fill:#deeeee;fill-opacity:1;fill-rule:evenodd;stroke-width:1.2;stroke-linecap:round;stroke-linejoin:round;stroke-miterlimit:3;paint-order:stroke fill markers"
					d="M 18.785416,22.754166 V 19.84375 h 2.910417 v 2.910416 z"
					id="path152214"
				/><path
					style="opacity:1;fill:#98b0c0;fill-opacity:1;fill-rule:evenodd;stroke-width:1.2;stroke-linecap:round;stroke-linejoin:round;stroke-miterlimit:3;paint-order:stroke fill markers"
					d="m 24.60625,12.170833 5.291666,1.322917 v 3.704166 H 26.9875 l -2.38125,-1.5875 z"
					id="path152654"
				/><path
					style="opacity:1;fill:#deeeee;fill-opacity:1;fill-rule:evenodd;stroke-width:1.2;stroke-linecap:round;stroke-linejoin:round;stroke-miterlimit:3;paint-order:stroke fill markers"
					d="m 22.489583,14.022916 v -2.381249 l 2.116667,0.567159 v 3.40159 z"
					id="path152212"
				/></g
			></g
		><metadata id="metadata100606">
			<!-- svelte-ignore illegal-attribute-character -->
			<!-- 	data-license="https://creativecommons.org/licenses/by-nc-sa/4.0/" data-author="Doriel Rivalet"--></metadata
		></svg
	>
</div>
