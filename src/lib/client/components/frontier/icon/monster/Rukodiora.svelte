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
		xmlns:xlink="http://www.w3.org/1999/xlink"
		xmlns="http://www.w3.org/2000/svg"
		xmlns:svg="http://www.w3.org/2000/svg"
		xmlns:rdf="http://www.w3.org/1999/02/22-rdf-syntax-ns#"
		xmlns:cc="http://creativecommons.org/ns#"
		xmlns:dc="http://purl.org/dc/elements/1.1/"
		><defs id="defs2"
			><linearGradient id="linearGradient178703"
				><stop
					style="stop-color:#de6722;stop-opacity:1;"
					offset="0"
					id="stop178699"
				/><stop
					style="stop-color:#e5de46;stop-opacity:1;"
					offset="1"
					id="stop178701"
				/></linearGradient
			><linearGradient id="linearGradient177622"
				><stop
					style="stop-color:#de6722;stop-opacity:1;"
					offset="0"
					id="stop177618"
				/><stop
					style="stop-color:#e5de46;stop-opacity:1;"
					offset="1"
					id="stop177620"
				/></linearGradient
			><linearGradient id="linearGradient175470"
				><stop
					style="stop-color:#de6722;stop-opacity:1;"
					offset="0"
					id="stop175466"
				/><stop
					style="stop-color:#e5de46;stop-opacity:1;"
					offset="1"
					id="stop175468"
				/></linearGradient
			><linearGradient id="linearGradient175253"
				><stop
					style="stop-color:#de6722;stop-opacity:1;"
					offset="0"
					id="stop175249"
				/><stop
					style="stop-color:#e5de46;stop-opacity:1;"
					offset="1"
					id="stop175251"
				/></linearGradient
			><linearGradient
				xlink:href="#linearGradient175253"
				id="linearGradient175255"
				x1="102.65833"
				y1="72.760416"
				x2="118.79792"
				y2="72.760416"
				gradientUnits="userSpaceOnUse"
			/><linearGradient
				xlink:href="#linearGradient175470"
				id="linearGradient175472"
				x1="92.604166"
				y1="57.546874"
				x2="116.68125"
				y2="57.546874"
				gradientUnits="userSpaceOnUse"
			/><linearGradient
				xlink:href="#linearGradient177622"
				id="linearGradient177624"
				x1="74.612499"
				y1="44.185416"
				x2="110.59583"
				y2="44.185416"
				gradientUnits="userSpaceOnUse"
			/><linearGradient
				xlink:href="#linearGradient178703"
				id="linearGradient178705"
				x1="54.768749"
				y1="40.084375"
				x2="91.545832"
				y2="40.084375"
				gradientUnits="userSpaceOnUse"
			/><filter
				style="color-interpolation-filters:sRGB;"
				id="filter180288"
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
					id="feComposite180274"
				/><feColorMatrix
					in="composite1"
					values="1"
					type="saturate"
					result="colormatrix1"
					id="feColorMatrix180276"
				/><feFlood
					flood-opacity="1"
					flood-color="rgb(0,0,0)"
					result="flood1"
					id="feFlood180278"
				/><feBlend
					in="flood1"
					in2="colormatrix1"
					mode="multiply"
					result="blend1"
					id="feBlend180280"
				/><feBlend
					in2="blend1"
					mode="screen"
					result="blend2"
					id="feBlend180282"
				/><feColorMatrix
					in="blend2"
					values="1"
					type="saturate"
					result="colormatrix2"
					id="feColorMatrix180284"
				/><feComposite
					in="colormatrix2"
					in2="SourceGraphic"
					operator="in"
					k2="1"
					result="composite2"
					id="feComposite180286"
				/></filter
			><linearGradient
				xlink:href="#linearGradient178703"
				id="linearGradient180653"
				gradientUnits="userSpaceOnUse"
				x1="54.768749"
				y1="40.084375"
				x2="91.545832"
				y2="40.084375"
			/><linearGradient
				xlink:href="#linearGradient175470"
				id="linearGradient180655"
				gradientUnits="userSpaceOnUse"
				x1="92.604166"
				y1="57.546874"
				x2="116.68125"
				y2="57.546874"
			/><linearGradient
				xlink:href="#linearGradient175253"
				id="linearGradient180657"
				gradientUnits="userSpaceOnUse"
				x1="102.65833"
				y1="72.760416"
				x2="118.79792"
				y2="72.760416"
			/><linearGradient
				xlink:href="#linearGradient177622"
				id="linearGradient180659"
				gradientUnits="userSpaceOnUse"
				x1="74.612499"
				y1="44.185416"
				x2="110.59583"
				y2="44.185416"
			/></defs
		><g id="layer1"
			><g
				id="g179909"
				style="filter:url(#filter180288)"
				transform="translate(1.0583333,1.5875)"
				><path
					style="opacity:1;fill:url(#linearGradient180653);fill-opacity:1;fill-rule:evenodd;stroke:none;stroke-width:4.99999;stroke-linecap:round;stroke-linejoin:round;stroke-miterlimit:3"
					d="m 54.768749,71.172916 h 7.14375 L 74.877082,56.091666 C 101.70587,20.218147 88.823398,22.590837 91.545832,14.022916 l -3.175,2.910417 -3.175,-5.820833 -3.175,5.55625 -6.085416,-7.6729168 C 78.41027,32.606615 63.620754,50.521525 54.768749,71.172916 Z"
					id="path179731"
				/><path
					style="opacity:1;fill:url(#linearGradient180655);fill-opacity:1;fill-rule:evenodd;stroke:none;stroke-width:4.99999;stroke-linecap:round;stroke-linejoin:round;stroke-miterlimit:3"
					d="m 95.779165,74.877082 -3.174999,-3.175 1.322916,-6.879166 L 114.3,40.216666 c 0.31316,4.587512 0.74075,9.132689 2.38125,13.229167 l -14.2875,15.610416 -1.85208,-1.852083 z"
					id="path179733"
				/><path
					style="opacity:1;fill:url(#linearGradient180657);fill-opacity:1;fill-rule:evenodd;stroke:none;stroke-width:4.99999;stroke-linecap:round;stroke-linejoin:round;stroke-miterlimit:3"
					d="m 102.65833,77.258332 c 2.38595,-7.094298 8.97975,-10.582232 15.08125,-12.435416 -2.4191,6.176808 -3.60439,11.527796 1.05834,12.964583 l -2.11667,2.910417 z"
					id="path179735"
				/><path
					style="opacity:1;fill:url(#linearGradient180659);fill-opacity:1;fill-rule:evenodd;stroke:none;stroke-width:4.99999;stroke-linecap:round;stroke-linejoin:round;stroke-miterlimit:3"
					d="m 74.612499,71.172916 h 7.408333 C 98.641235,57.326257 108.52113,41.804059 110.59583,24.341666 l -4.23333,1.322917 v -8.466667 l -4.49792,4.497917 -3.704165,-4.233333 z"
					id="path179737"
				/><path
					style="opacity:1;fill:#2c6167;fill-opacity:1;fill-rule:evenodd;stroke:none;stroke-width:4.99999;stroke-linecap:round;stroke-linejoin:round;stroke-miterlimit:3"
					d="m 33.866666,30.95625 h -4.7625 L 28.045833,32.014583 25.4,34.13125 h -3.439584 v 0.529166 H 21.695833 V 37.30625 L 14.2875,41.010416 H 9.2604166 v 6.879167 l 2.9104164,2.910416 h 16.933333 v -1.5875 h 5.688542 v 8.995834 H 17.197916 l -1.852083,7.937499 v 21.960417 l 7.672918,7.672916 H 30.95625 V 82.020832 l 4.7625,-4.7625 h 8.731249 l 5.291667,5.291667 v 10.31875 h 21.695833 v -11.1125 l 7.672917,-7.672917 h 9.525 l 10.318749,10.31875 10.847915,6.263048 v 28.39737 l 4.58272,2.64583 h 8.64645 l 3.43958,-3.43958 -1.55969,-5.82083 -1.08614,0.79375 h -0.26458 l -2.38125,3.96875 -3.175,0.52916 V 82.020832 l -4.7625,-4.7625 h -10.58334 c 1.50231,-3.381183 3.22945,-5.207482 5.29167,-6.879165 1.5085,-1.222824 3.13427,-2.4514 5.29167,-3.704167 v -10e-7 l 1.85208,-7.9375 h -3.175 l -5.82083,6.085418 -3.70417,4.233332 -1.85208,-1.852083 -4.762505,7.672916 -3.174999,-3.175 1.058334,-2.910415 2.38125,-3.175 c 3.284569,-3.768058 7.03291,-7.246104 10.58333,-10.847917 l 3.43959,-5.027084 -2.11667,-5.027083 -3.175,3.704166 -2.11667,-2.645833 -11.112498,15.875 -2.645833,-2.910417 -4.762499,7.408334 -2.116668,5.027083 H 74.612499 L 75.670833,67.46875 78.052083,63.5 88.635417,51.59375 l 4.497915,-6.614584 -3.439583,-3.96875 -2.910417,3.704167 -2.38125,-3.704167 -3.968749,6.879167 -5.556251,8.202083 -2.116666,-2.116667 c -4.450371,5.546416 -8.77722,11.120399 -10.847917,17.197917 h -7.14375 l 4.497918,-8.466666 10.054166,-14.552083 2.116666,-4.233334 c -0.49724,-1.761897 -1.637677,-2.92673 -2.910417,-3.96875 l -1.852083,3.439583 c -1.315704,-2.873029 -3.394856,-5.468345 -5.820833,-7.9375 l -5.027083,18.785417 -2.38125,-2.645834 -12.435417,19.579167 h -8.202083 l -0.79375,-0.79375 v -3.439584 l 3.175,-1.587499 h 7.9375 l 6.35,-10.583334 V 38.1 h -3.175 v -3.439584 z"
					id="path179739"
				/><path
					style="opacity:1;fill:#1c2c3d;fill-opacity:1;fill-rule:evenodd;stroke:none;stroke-width:4.99999;stroke-linecap:round;stroke-linejoin:round;stroke-miterlimit:3"
					d="m 18.520833,68.527082 v -5.556249 h 6.085417 l 0.529166,-0.529167 4.497917,-0.529167 h 8.202083 l 2.116667,-1.852083 v -6.35 h -2.910417 l -3.175,-6.35 h 3.175 l 6.085417,6.085417 v 11.90625 H 27.516666 l -2.910416,1.322916 -2.910417,1.852083 z"
					id="path179741"
				/><path
					style="opacity:1;fill:#d75b1d;fill-opacity:1;fill-rule:evenodd;stroke:none;stroke-width:4.99999;stroke-linecap:round;stroke-linejoin:round;stroke-miterlimit:3"
					d="m 13.758333,117.73958 h 7.672917 v -3.96875 c -3.555648,-0.0732 -7.284507,-0.38865 -7.672917,3.96875 z"
					id="path179743"
				/><path
					style="opacity:1;fill:#7c1817;fill-opacity:1;fill-rule:evenodd;stroke:none;stroke-width:4.99999;stroke-linecap:round;stroke-linejoin:round;stroke-miterlimit:3"
					d="m 17.197917,117.73958 h 4.233333 v -3.96875 c -3.672811,1.23283 -4.141238,2.91439 -4.233333,3.96875 z"
					id="path179745"
				/><path
					style="opacity:1;fill:#d75b1d;fill-opacity:1;fill-rule:evenodd;stroke:none;stroke-width:4.99999;stroke-linecap:round;stroke-linejoin:round;stroke-miterlimit:3"
					d="m 13.758333,124.08958 h 7.672917 v -3.96875 c -3.555648,-0.0732 -7.284507,-0.38865 -7.672917,3.96875 z"
					id="path179747"
				/><path
					style="opacity:1;fill:#7c1817;fill-opacity:1;fill-rule:evenodd;stroke:none;stroke-width:4.99999;stroke-linecap:round;stroke-linejoin:round;stroke-miterlimit:3"
					d="m 17.197917,124.08958 h 4.233333 v -3.96875 c -3.672811,1.23283 -4.141238,2.91439 -4.233333,3.96875 z"
					id="path179749"
				/><path
					style="opacity:1;fill:#2c6167;fill-opacity:1;fill-rule:evenodd;stroke:none;stroke-width:4.99999;stroke-linecap:round;stroke-linejoin:round;stroke-miterlimit:3"
					d="m 25.135416,124.08958 h 25.135417 l 5.55625,-5.55625 v -16.40416 h -9.525 V 82.814582 l -2.38125,-2.38125 H 36.5125 l -2.910417,2.38125 v 20.637498 l 4.7625,4.7625 h 5.027083 v 5.82084 h -18.25625 z"
					id="path179751"
				/><path
					style="opacity:1;fill:#d75b1d;fill-opacity:1;fill-rule:evenodd;stroke:none;stroke-width:4.99999;stroke-linecap:round;stroke-linejoin:round;stroke-miterlimit:3"
					d="M 48.947916,120.12083 H 31.220833 L 33.3375,117.475 h 12.964583 v -15.34583 h 20.108333 l -3.704167,2.91041 H 48.947916 Z"
					id="path179753"
				/><path
					style="opacity:1;fill:#d75b1d;fill-opacity:1;fill-rule:evenodd;stroke:none;stroke-width:4.99999;stroke-linecap:round;stroke-linejoin:round;stroke-miterlimit:3"
					d="m 52.387499,116.68125 h 7.408334 l 3.175,-2.64583 H 52.122916 v 2.64583 z"
					id="path179755"
				/><path
					style="opacity:1;fill:#d75b1d;fill-opacity:1;fill-rule:evenodd;stroke:none;stroke-width:4.99999;stroke-linecap:round;stroke-linejoin:round;stroke-miterlimit:3"
					d="m 52.3875,110.86041 h 8.73125 l 3.439583,-2.64583 H 52.122917 v 2.64583 z"
					id="path179757"
				/><path
					style="opacity:1;fill:#d75b1d;fill-opacity:1;fill-rule:evenodd;stroke:none;stroke-width:4.99999;stroke-linecap:round;stroke-linejoin:round;stroke-miterlimit:3"
					d="m 36.5125,89.958332 h 6.879166 v -6.879166 c -1.768858,2.623738 -3.885032,5.131361 -6.879166,6.879166 z"
					id="path179759"
				/><path
					style="opacity:1;fill:#d75b1d;fill-opacity:1;fill-rule:evenodd;stroke:none;stroke-width:4.99999;stroke-linecap:round;stroke-linejoin:round;stroke-miterlimit:3"
					d="m 66.410416,117.73958 h 7.672917 v -3.96875 c -3.555648,-0.0732 -7.284507,-0.38865 -7.672917,3.96875 z"
					id="path179761"
				/><path
					style="opacity:1;fill:#7c1817;fill-opacity:1;fill-rule:evenodd;stroke:none;stroke-width:4.99999;stroke-linecap:round;stroke-linejoin:round;stroke-miterlimit:3"
					d="m 69.85,117.73958 h 4.233333 v -3.96875 c -3.672811,1.23283 -4.141238,2.91439 -4.233333,3.96875 z"
					id="path179763"
				/><path
					style="opacity:1;fill:#d75b1d;fill-opacity:1;fill-rule:evenodd;stroke:none;stroke-width:4.99999;stroke-linecap:round;stroke-linejoin:round;stroke-miterlimit:3"
					d="m 66.410416,124.08958 h 7.672917 v -3.96875 c -3.555648,-0.0732 -7.284507,-0.38865 -7.672917,3.96875 z"
					id="path179765"
				/><path
					style="opacity:1;fill:#7c1817;fill-opacity:1;fill-rule:evenodd;stroke:none;stroke-width:4.99999;stroke-linecap:round;stroke-linejoin:round;stroke-miterlimit:3"
					d="m 69.85,124.08958 h 4.233333 v -3.96875 c -3.672811,1.23283 -4.141238,2.91439 -4.233333,3.96875 z"
					id="path179767"
				/><path
					style="opacity:1;fill:#2c6167;fill-opacity:1;fill-rule:evenodd;stroke:none;stroke-width:4.99999;stroke-linecap:round;stroke-linejoin:round;stroke-miterlimit:3"
					d="M 77.522916,124.08958 H 98.954165 V 102.12917 H 83.079166 V 99.218749 H 95.779165 V 84.402082 L 89.164582,77.787499 H 79.110416 l -5.027084,5.027083 v 23.018748 l 5.027084,5.02709 h 7.408333 v 3.175 h -8.995833 z"
					id="path179769"
				/><path
					style="opacity:1;fill:#d75b1d;fill-opacity:1;fill-rule:evenodd;stroke:none;stroke-width:4.99999;stroke-linecap:round;stroke-linejoin:round;stroke-miterlimit:3"
					d="m 80.697916,120.12083 c 0.351824,-2.09263 1.375468,-2.34476 2.38125,-2.64583 h 6.614583 v -15.34583 h 17.197921 l -3.70417,2.91041 H 92.339582 v 15.08125 z"
					id="path179771"
				/><path
					style="opacity:1;fill:#d75b1d;fill-opacity:1;fill-rule:evenodd;stroke:none;stroke-width:5.24404;stroke-linecap:round;stroke-linejoin:round;stroke-miterlimit:3"
					d="m 95.514582,116.68125 h 7.672918 l 3.175,-2.91042 H 95.514582 Z"
					id="path179773"
				/><path
					style="opacity:1;fill:#d75b1d;fill-opacity:1;fill-rule:evenodd;stroke:none;stroke-width:5.24403;stroke-linecap:round;stroke-linejoin:round;stroke-miterlimit:3"
					d="m 95.514582,110.86041 h 7.672918 l 3.175,-2.91041 H 95.514582 Z"
					id="path179775"
				/><path
					style="opacity:1;fill:#d75b1d;fill-opacity:1;fill-rule:evenodd;stroke:none;stroke-width:4.99999;stroke-linecap:round;stroke-linejoin:round;stroke-miterlimit:3"
					d="m 83.343749,89.693749 h -6.879167 c 2.830268,-1.669524 5.026514,-4.074945 6.879167,-6.879167 z"
					id="path179777"
				/><path
					style="opacity:1;fill:#d75b1d;fill-opacity:1;fill-rule:evenodd;stroke:none;stroke-width:4.99999;stroke-linecap:round;stroke-linejoin:round;stroke-miterlimit:3"
					d="M 92.604167,89.693749 H 85.725 c 2.830268,-1.669524 5.026514,-4.074945 6.879167,-6.879167 z"
					id="path179779"
				/><path
					style="opacity:1;fill:#e7e04d;fill-opacity:1;fill-rule:evenodd;stroke:none;stroke-width:4.99999;stroke-linecap:round;stroke-linejoin:round;stroke-miterlimit:3"
					d="m 123.825,111.125 h 3.43958 l -1.5875,-16.668751 z"
					id="path179781"
				/><path
					style="opacity:1;fill:#e19a38;fill-opacity:1;fill-rule:evenodd;stroke:none;stroke-width:4.99999;stroke-linecap:round;stroke-linejoin:round;stroke-miterlimit:3"
					d="m 127.26458,111.125 v 7.14375 H 123.825 V 111.125 Z"
					id="path179783"
				/><path
					style="opacity:1;fill:#cfb481;fill-opacity:1;fill-rule:evenodd;stroke:none;stroke-width:4.99999;stroke-linecap:round;stroke-linejoin:round;stroke-miterlimit:3"
					d="m 127.26458,118.26875 v 0.79375 l -4.49791,4.49792 -9.525,0.26458 -4.7625,-4.7625 V 91.810416 l -2.38125,-2.38125 h -7.143755 v -6.35 h 7.937505 l 4.7625,4.7625 v 30.427084 l 2.38125,2.38125 h 7.40833 l 2.38125,-2.38125 z"
					id="path179785"
				/><path
					style="opacity:1;fill:#d75b1d;fill-opacity:1;fill-rule:evenodd;stroke:none;stroke-width:4.99999;stroke-linecap:round;stroke-linejoin:round;stroke-miterlimit:3"
					d="m 114.82917,114.82917 -3.175,3.175 v 0.26458 l 1.85208,1.85208 3.175,-3.175 z"
					id="path179787"
				/><path
					style="opacity:1;fill:#e3bc19;fill-opacity:1;fill-rule:evenodd;stroke:none;stroke-width:4.99999;stroke-linecap:round;stroke-linejoin:round;stroke-miterlimit:3"
					d="m 116.68125,116.94583 4.23333,-4.23333 -1.85208,-1.85208 -4.23333,3.96875 z"
					id="path179789"
				/><path
					style="opacity:1;fill:#e7e04d;fill-opacity:1;fill-rule:evenodd;stroke:none;stroke-width:4.99999;stroke-linecap:round;stroke-linejoin:round;stroke-miterlimit:3"
					d="m 119.0625,110.86042 3.175,-1.5875 -1.32292,3.43958 z"
					id="path179791"
				/><path
					style="opacity:1;fill:#e7e04d;fill-opacity:1;fill-rule:evenodd;stroke:none;stroke-width:4.99999;stroke-linecap:round;stroke-linejoin:round;stroke-miterlimit:3"
					d="m 119.85625,107.95 v -2.64583 l 2.91042,1.32291 z"
					id="path179793"
				/><path
					style="opacity:1;fill:#e3bc19;fill-opacity:1;fill-rule:evenodd;stroke:none;stroke-width:4.99999;stroke-linecap:round;stroke-linejoin:round;stroke-miterlimit:3"
					d="m 119.85625,107.95 h -5.29167 v -2.64583 h 5.29167 z"
					id="path179795"
				/><path
					style="opacity:1;fill:#d75b1d;fill-opacity:1;fill-rule:evenodd;stroke:none;stroke-width:4.99999;stroke-linecap:round;stroke-linejoin:round;stroke-miterlimit:3"
					d="m 111.65417,107.95 h 2.91041 v -2.64583 h -2.91041 z"
					id="path179797"
				/><path
					style="opacity:1;fill:#e7e04d;fill-opacity:1;fill-rule:evenodd;stroke:none;stroke-width:4.99999;stroke-linecap:round;stroke-linejoin:round;stroke-miterlimit:3"
					d="m 119.85625,98.424998 v -2.64583 l 2.91042,1.32291 z"
					id="path179799"
				/><path
					style="opacity:1;fill:#e3bc19;fill-opacity:1;fill-rule:evenodd;stroke:none;stroke-width:4.99999;stroke-linecap:round;stroke-linejoin:round;stroke-miterlimit:3"
					d="m 119.85625,98.424998 h -5.29167 v -2.64583 h 5.29167 z"
					id="path179801"
				/><path
					style="opacity:1;fill:#d75b1d;fill-opacity:1;fill-rule:evenodd;stroke:none;stroke-width:4.99999;stroke-linecap:round;stroke-linejoin:round;stroke-miterlimit:3"
					d="m 111.65417,98.424998 h 2.91041 v -2.64583 h -2.91041 z"
					id="path179803"
				/><path
					style="opacity:1;fill:#e7e04d;fill-opacity:1;fill-rule:evenodd;stroke:none;stroke-width:4.99999;stroke-linecap:round;stroke-linejoin:round;stroke-miterlimit:3"
					d="m 119.85625,89.164582 v -2.64583 l 2.91042,1.32291 z"
					id="path179805"
				/><path
					style="opacity:1;fill:#e3bc19;fill-opacity:1;fill-rule:evenodd;stroke:none;stroke-width:4.99999;stroke-linecap:round;stroke-linejoin:round;stroke-miterlimit:3"
					d="m 119.85625,89.164582 h -5.29167 v -2.64583 h 5.29167 z"
					id="path179807"
				/><path
					style="opacity:1;fill:#d75b1d;fill-opacity:1;fill-rule:evenodd;stroke:none;stroke-width:6.39601;stroke-linecap:round;stroke-linejoin:round;stroke-miterlimit:3"
					d="m 109.80208,89.164582 h 4.7625 v -2.64583 h -4.7625 z"
					id="path179809"
				/><path
					style="opacity:1;fill:#d75b1d;fill-opacity:1;fill-rule:evenodd;stroke:none;stroke-width:4.99999;stroke-linecap:round;stroke-linejoin:round;stroke-miterlimit:3"
					d="M 67.997917,89.693749 H 61.11875 c 2.830268,-1.669524 5.026514,-4.074945 6.879167,-6.879167 z"
					id="path179811"
				/><path
					style="opacity:1;fill:#d75b1d;fill-opacity:1;fill-rule:evenodd;stroke:none;stroke-width:4.99999;stroke-linecap:round;stroke-linejoin:round;stroke-miterlimit:3"
					d="m 58.7375,89.693749 h -6.879167 c 2.830268,-1.669524 5.026514,-4.074945 6.879167,-6.879167 z"
					id="path179813"
				/><path
					style="opacity:1;fill:#d75b1d;fill-opacity:1;fill-rule:evenodd;stroke:none;stroke-width:4.99999;stroke-linecap:round;stroke-linejoin:round;stroke-miterlimit:3"
					d="M 58.7375,80.697917 H 51.858333 C 54.688601,79.028393 56.884847,76.622972 58.7375,73.81875 Z"
					id="path179815"
				/><path
					style="opacity:1;fill:#d75b1d;fill-opacity:1;fill-rule:evenodd;stroke:none;stroke-width:4.99999;stroke-linecap:round;stroke-linejoin:round;stroke-miterlimit:3"
					d="M 67.997917,80.697917 H 61.11875 c 2.830268,-1.669524 5.026514,-4.074945 6.879167,-6.879167 z"
					id="path179817"
				/><path
					style="opacity:1;fill:#d75b1d;fill-opacity:1;fill-rule:evenodd;stroke:none;stroke-width:4.99999;stroke-linecap:round;stroke-linejoin:round;stroke-miterlimit:3"
					d="M 27.516667,89.693749 H 20.6375 c 2.830268,-1.669524 5.026514,-4.074945 6.879167,-6.879167 z"
					id="path179819"
				/><path
					style="opacity:1;fill:#d75b1d;fill-opacity:1;fill-rule:evenodd;stroke:none;stroke-width:4.99999;stroke-linecap:round;stroke-linejoin:round;stroke-miterlimit:3"
					d="M 27.516667,80.697917 H 20.6375 c 2.830268,-1.669524 5.026514,-4.074945 6.879167,-6.879167 z"
					id="path179821"
				/><path
					style="opacity:1;fill:#cfb481;fill-opacity:1;fill-rule:evenodd;stroke:none;stroke-width:4.99999;stroke-linecap:round;stroke-linejoin:round;stroke-miterlimit:3"
					d="M 71.437499,92.868749 H 49.477083 v 6.085416 c 9.42881,-0.0082 18.730707,-0.07425 21.960416,-2.910416 z"
					id="path179823"
				/><path
					style="opacity:1;fill:#cfb481;fill-opacity:1;fill-rule:evenodd;stroke:none;stroke-width:4.99999;stroke-linecap:round;stroke-linejoin:round;stroke-miterlimit:3"
					d="m 30.95625,102.12917 v -6.350005 h -7.9375 L 15.345833,88.106249 V 66.145832 l 7.408333,-7.408333 H 34.925 l 2.116666,-2.116666 v -6.085417 l -3.175,-3.175 h -7.14375 l -2.116666,-1.5875 v 4.7625 H 24.077083 L 23.01875,49.477083 h -1.322917 v -2.116667 l -3.175,-1.833086 v 5.008086 h -3.175 v -3.175 l -3.175,-1.833086 v 8.447669 h 15.345833 c 2.114948,-0.255855 3.161154,-1.49465 3.439584,-3.439583 h 2.645833 v 6.085417 h -18.25625 v 5.291666 h -3.175 v 31.75 l 8.466667,8.466671 z"
					id="path179825"
				/><path
					style="opacity:1;fill:#cfb481;fill-opacity:1;fill-rule:evenodd;stroke:none;stroke-width:4.99999;stroke-linecap:round;stroke-linejoin:round;stroke-miterlimit:3"
					d="m 15.345833,34.660416 v -2.645833 h 12.7 L 25.4,34.13125 h -3.439584 v 0.529166 z"
					id="path179827"
				/><path
					style="opacity:1;fill:#e3bc19;fill-opacity:1;fill-rule:evenodd;stroke:none;stroke-width:4.99999;stroke-linecap:round;stroke-linejoin:round;stroke-miterlimit:3"
					d="m 47.624999,23.01875 6.35,-7.408334 c 4.286499,1.032689 6.818957,2.690192 7.672917,7.408334 l -8.995833,4.233333 z"
					id="path179829"
				/><path
					style="opacity:1;fill:#cfb481;fill-opacity:1;fill-rule:evenodd;stroke:none;stroke-width:4.99999;stroke-linecap:round;stroke-linejoin:round;stroke-miterlimit:3"
					d="M 33.866666,33.602083 V 30.95625 c 1.742995,-2.243746 6.586649,-4.080849 12.170833,-5.820834 l 1.5875,-2.116666 c 1.405084,-0.818113 2.492818,-0.60511 3.704167,-0.79375 0.989101,1.518992 1.404313,3.20205 1.322917,5.027083 V 30.1625 l -6.35,4.497916 h -6.085417 v -1.058333 z"
					id="path179831"
				/><path
					style="opacity:1;fill:#d75b1d;fill-opacity:1;fill-rule:evenodd;stroke:none;stroke-width:4.99999;stroke-linecap:round;stroke-linejoin:round;stroke-miterlimit:3"
					d="M 15.345833,86.783332 V 83.872916 H 11.1125 l -1.5875001,2.910416 z"
					id="path179833"
				/><path
					style="opacity:1;fill:#d75b1d;fill-opacity:1;fill-rule:evenodd;stroke:none;stroke-width:4.99999;stroke-linecap:round;stroke-linejoin:round;stroke-miterlimit:3"
					d="M 15.345833,80.433333 V 77.522917 H 11.1125 l -1.5875001,2.910416 z"
					id="path179835"
				/><path
					style="opacity:1;fill:#d75b1d;fill-opacity:1;fill-rule:evenodd;stroke:none;stroke-width:4.99999;stroke-linecap:round;stroke-linejoin:round;stroke-miterlimit:3"
					d="M 15.345833,74.347916 V 71.4375 H 11.1125 l -1.5875001,2.910416 z"
					id="path179837"
				/><path
					style="opacity:1;fill:#d75b1d;fill-opacity:1;fill-rule:evenodd;stroke:none;stroke-width:4.99999;stroke-linecap:round;stroke-linejoin:round;stroke-miterlimit:3"
					d="M 15.345833,67.997916 V 65.0875 H 11.1125 l -1.5875001,2.910416 z"
					id="path179839"
				/><path
					style="opacity:1;fill:#d75b1d;fill-opacity:1;fill-rule:evenodd;stroke:none;stroke-width:4.99999;stroke-linecap:round;stroke-linejoin:round;stroke-miterlimit:3"
					d="M 15.345833,61.912499 V 58.7375 H 11.1125 l -1.5875001,3.174999 z"
					id="path179841"
				/><path
					style="opacity:1;fill:#d75b1d;fill-opacity:1;fill-rule:evenodd;stroke:none;stroke-width:4.99999;stroke-linecap:round;stroke-linejoin:round;stroke-miterlimit:3"
					d="m 18.520833,65.087499 v -2.116666 h 3.175 l 2.910417,3.704166 v 1.852083 h -2.910417 z"
					id="path179843"
				/><path
					style="opacity:1;fill:#d75b1d;fill-opacity:1;fill-rule:evenodd;stroke:none;stroke-width:4.99999;stroke-linecap:round;stroke-linejoin:round;stroke-miterlimit:3"
					d="m 24.870833,62.706249 v -3.96875 h 1.852083 l 2.910417,3.175 v 3.439584 h -2.116667 z"
					id="path179845"
				/><path
					style="opacity:1;fill:#d75b1d;fill-opacity:1;fill-rule:evenodd;stroke:none;stroke-width:4.99999;stroke-linecap:round;stroke-linejoin:round;stroke-miterlimit:3"
					d="m 34.395833,65.352083 h 2.645833 V 63.235416 L 32.54375,58.737499 h -1.5875 v 3.175 z"
					id="path179847"
				/><path
					style="opacity:1;fill:#d75b1d;fill-opacity:1;fill-rule:evenodd;stroke:none;stroke-width:4.99999;stroke-linecap:round;stroke-linejoin:round;stroke-miterlimit:3"
					d="m 40.745833,65.352083 h 2.116666 0.264584 v -2.38125 l -3.96875,-3.704167 h -2.116667 v 2.645833 z"
					id="path179849"
				/><path
					style="opacity:1;fill:#d75b1d;fill-opacity:1;fill-rule:evenodd;stroke:none;stroke-width:4.99999;stroke-linecap:round;stroke-linejoin:round;stroke-miterlimit:3"
					d="m 43.127083,59.531249 v -2.910416 l -3.175,-2.910417 h -2.910417 v 1.058333 l 4.7625,4.7625 z"
					id="path179851"
				/><path
					style="opacity:1;fill:#d75b1d;fill-opacity:1;fill-rule:evenodd;stroke:none;stroke-width:4.99999;stroke-linecap:round;stroke-linejoin:round;stroke-miterlimit:3"
					d="m 37.041666,47.360416 v 1.058333 l 5.027083,5.027084 h 1.058334 v -3.704167 l -2.645834,-2.38125 z"
					id="path179853"
				/><path
					style="opacity:1;fill:#d75b1d;fill-opacity:1;fill-rule:evenodd;stroke:none;stroke-width:4.99999;stroke-linecap:round;stroke-linejoin:round;stroke-miterlimit:3"
					d="m 45.508333,47.360417 2.38125,-2.910418 h 6.614583 l -2.116667,2.910417 z"
					id="path179855"
				/><path
					style="opacity:1;fill:#d75b1d;fill-opacity:1;fill-rule:evenodd;stroke:none;stroke-width:4.99999;stroke-linecap:round;stroke-linejoin:round;stroke-miterlimit:3"
					d="M -0.79374999,32.014583 H 5.5562499 V 38.1 Z"
					id="path179857"
				/><path
					style="opacity:1;fill:#d75b1d;fill-opacity:1;fill-rule:evenodd;stroke:none;stroke-width:4.99999;stroke-linecap:round;stroke-linejoin:round;stroke-miterlimit:3"
					d="m 61.647916,23.01875 c -0.978399,-3.748435 -3.7799,-6.020382 -7.672917,-7.408334 4.167322,-4.513136 8.968229,-8.202671 13.758333,-11.9062494 1.445526,3.1893889 -3.305556,8.5062044 -5.556249,12.9645834 -0.151978,1.176633 -0.510854,2.634379 0,2.910416 0.620355,-0.09076 0.766582,-0.645797 1.058333,-1.058333 h 2.910416 c -0.620828,1.933784 -1.681313,3.247951 -4.497916,4.497917 z"
					id="path179859"
				/><path
					style="opacity:1;fill:#d75b1d;fill-opacity:1;fill-rule:evenodd;stroke:none;stroke-width:4.99999;stroke-linecap:round;stroke-linejoin:round;stroke-miterlimit:3"
					d="m 72.231249,18.785416 c 1.790687,3.242277 3.915132,3.171568 6.085417,2.645834 0.807069,-7.278376 -2.137715,-12.2208964 -5.027084,-17.1979167 -0.09023,4.9716605 -0.09305,9.9835907 -1.058333,14.5520827 z"
					id="path179861"
				/><path
					style="opacity:1;fill:#d75b1d;fill-opacity:1;fill-rule:evenodd;stroke:none;stroke-width:4.99999;stroke-linecap:round;stroke-linejoin:round;stroke-miterlimit:3"
					d="m 91.016666,21.960416 c 2.230164,3.09907 5.271311,2.771565 8.202083,2.910417 -0.585658,-7.960234 -2.868953,-15.2476638 -7.9375,-21.4312497 0.573248,6.1532694 0.156702,12.3369777 -0.264583,18.5208327 z"
					id="path179863"
				/><path
					style="opacity:1;fill:#d75b1d;fill-opacity:1;fill-rule:evenodd;stroke:none;stroke-width:4.99999;stroke-linecap:round;stroke-linejoin:round;stroke-miterlimit:3"
					d="m 110.06667,29.104166 c 2.00879,2.399901 4.16058,1.735494 6.35,0.264584 -1.47559,-9.233637 -3.56187,-13.21763 -5.55625,-17.991667 0.43398,6.784307 0.0115,12.475977 -0.79375,17.727083 z"
					id="path179865"
				/><path
					style="opacity:1;fill:#d75b1d;fill-opacity:1;fill-rule:evenodd;stroke:none;stroke-width:4.99999;stroke-linecap:round;stroke-linejoin:round;stroke-miterlimit:3"
					d="m 116.68125,53.445833 c 0.71568,2.314209 2.20057,2.751544 4.23333,1.852083 l 3.96875,-10.847917 z"
					id="path179867"
				/><path
					style="opacity:1;fill:#d75b1d;fill-opacity:1;fill-rule:evenodd;stroke:none;stroke-width:4.99999;stroke-linecap:round;stroke-linejoin:round;stroke-miterlimit:3"
					d="m 18.520833,53.974999 h 3.175 v -2.910416 c -0.259412,-0.905531 -0.667551,-1.430514 -1.322917,-1.322917 h -1.852083 z"
					id="path179869"
				/><path
					style="opacity:1;fill:#d75b1d;fill-opacity:1;fill-rule:evenodd;stroke:none;stroke-width:4.99999;stroke-linecap:round;stroke-linejoin:round;stroke-miterlimit:3"
					d="m 12.170833,53.974999 h 3.175 v -2.910416 c -0.259412,-0.905531 -0.667551,-1.430514 -1.322917,-1.322917 h -1.852083 z"
					id="path179871"
				/><path
					style="opacity:1;fill:#e3bc19;fill-opacity:1;fill-rule:evenodd;stroke:none;stroke-width:4.99999;stroke-linecap:round;stroke-linejoin:round;stroke-miterlimit:3"
					d="m 40.481249,47.360416 v -2.910417 h 7.408334 l -2.38125,2.910417 z"
					id="path179873"
				/><path
					style="opacity:1;fill:#cfb481;fill-opacity:1;fill-rule:evenodd;stroke:none;stroke-width:4.99999;stroke-linecap:round;stroke-linejoin:round;stroke-miterlimit:3"
					d="m 42.068749,47.360416 2.645834,-2.910417 h -4.233334 v 2.910417 z"
					id="path179875"
				/><path
					style="opacity:1;fill:#d75b1d;fill-opacity:1;fill-rule:evenodd;stroke:none;stroke-width:4.99999;stroke-linecap:round;stroke-linejoin:round;stroke-miterlimit:3"
					d="m 45.508333,40.878126 2.38125,-2.910418 h 6.614583 l -2.116667,2.910417 z"
					id="path179877"
				/><path
					style="opacity:1;fill:#e3bc19;fill-opacity:1;fill-rule:evenodd;stroke:none;stroke-width:4.99999;stroke-linecap:round;stroke-linejoin:round;stroke-miterlimit:3"
					d="m 40.481249,40.878125 v -2.910417 h 7.408334 l -2.38125,2.910417 z"
					id="path179879"
				/><path
					style="opacity:1;fill:#cfb481;fill-opacity:1;fill-rule:evenodd;stroke:none;stroke-width:4.99999;stroke-linecap:round;stroke-linejoin:round;stroke-miterlimit:3"
					d="m 42.068749,40.878125 2.645834,-2.910417 h -4.233334 v 2.910417 z"
					id="path179881"
				/><path
					style="opacity:1;fill:#e9a33e;fill-opacity:1;fill-rule:evenodd;stroke:none;stroke-width:4.99999;stroke-linecap:round;stroke-linejoin:round;stroke-miterlimit:3"
					d="M 5.5562499,38.1 H 9.2604166 V 35.454166 L 10.31875,34.660416 8.9958332,32.014583 H 5.5562499 Z"
					id="path179883"
				/><path
					style="opacity:1;fill:#b89354;fill-opacity:1;fill-rule:evenodd;stroke:none;stroke-width:4.99999;stroke-linecap:round;stroke-linejoin:round;stroke-miterlimit:3"
					d="m 10.31875,34.660416 h 5.027083 V 32.014583 H 8.9958332 Z"
					id="path179885"
				/><path
					style="opacity:1;fill:#867866;fill-opacity:1;fill-rule:evenodd;stroke:none;stroke-width:4.99999;stroke-linecap:round;stroke-linejoin:round;stroke-miterlimit:3"
					d="M 33.866666,33.602083 V 34.925 h 3.175 v 2.910416 l 3.175,-1.852083 v -1.322917 -1.058333 z"
					id="path179887"
				/><path
					style="opacity:1;fill:#1c2c3d;fill-opacity:1;fill-rule:evenodd;stroke:none;stroke-width:4.99999;stroke-linecap:round;stroke-linejoin:round;stroke-miterlimit:3"
					d="M 9.2604166,41.010416 H 14.2875 l -2.38125,2.116667 z"
					id="path179889"
				/><path
					style="opacity:1;fill:#1c2c3d;fill-opacity:1;fill-rule:evenodd;stroke:none;stroke-width:4.99999;stroke-linecap:round;stroke-linejoin:round;stroke-miterlimit:3"
					d="M 18.25625,44.185416 V 43.127083 L 23.547916,38.1 H 33.3375 v 0.529166 l -4.497917,4.497917 h -6.35 l -1.322917,1.058333 z"
					id="path179891"
				/><path
					style="opacity:1;fill:#7f1617;fill-opacity:1;fill-rule:evenodd;stroke:none;stroke-width:4.99999;stroke-linecap:round;stroke-linejoin:round;stroke-miterlimit:3"
					d="M 22.489583,43.127083 25.664583,38.1 h 5.291667 l -5.027084,5.027083 z"
					id="path179893"
				/><circle
					style="opacity:1;fill:#d14f17;fill-opacity:1;fill-rule:evenodd;stroke:none;stroke-width:4.99999;stroke-linecap:round;stroke-linejoin:round;stroke-miterlimit:3"
					id="circle179895"
					cx="25.4"
					cy="39.6875"
					r="2.0032752"
				/><path
					style="opacity:1;fill:#1c2c3d;fill-opacity:1;fill-rule:evenodd;stroke:none;stroke-width:4.99999;stroke-linecap:round;stroke-linejoin:round;stroke-miterlimit:3"
					d="M 22.489583,43.127083 25.664583,38.1 h -2.116667 z"
					id="path179897"
				/><path
					style="opacity:1;fill:#2c6167;fill-opacity:1;fill-rule:evenodd;stroke:none;stroke-width:4.99999;stroke-linecap:round;stroke-linejoin:round;stroke-miterlimit:3"
					d="m 24.077083,38.1 h 2.645833 l -1.5875,-0.79375 z"
					id="path179899"
				/><path
					style="opacity:1;fill:#595650;fill-opacity:1;fill-rule:evenodd;stroke:none;stroke-width:4.99999;stroke-linecap:round;stroke-linejoin:round;stroke-miterlimit:3"
					d="m 113.24167,66.674999 4.49791,-1.852083 3.175,-9.525 -4.23333,-1.852083 -4.7625,5.291666 z"
					id="path179901"
				/><path
					style="opacity:1;fill:#595650;fill-opacity:1;fill-rule:evenodd;stroke:none;stroke-width:4.99999;stroke-linecap:round;stroke-linejoin:round;stroke-miterlimit:3"
					d="m 102.65833,45.772917 2.11667,2.645832 5.29167,1.322917 c 3.09058,-6.679387 6.71426,-13.297696 6.35,-20.372916 l -6.35,-0.264584 c -1.41334,4.575615 -2.82798,8.887969 -7.40834,16.668751 z"
					id="path179903"
				/><path
					style="opacity:1;fill:#595650;fill-opacity:1;fill-rule:evenodd;stroke:none;stroke-width:4.99999;stroke-linecap:round;stroke-linejoin:round;stroke-miterlimit:3"
					d="m 86.783332,44.714583 6.35,0.264583 c 3.371925,-7.547121 6.464782,-14.918851 6.085417,-20.108333 l -8.202083,-2.910417 c -0.970383,6.215452 -3.078378,12.554895 -6.614584,19.05 z"
					id="path179905"
				/><path
					style="opacity:1;fill:#595650;fill-opacity:1;fill-rule:evenodd;stroke:none;stroke-width:4.99999;stroke-linecap:round;stroke-linejoin:round;stroke-miterlimit:3"
					d="m 66.674999,43.391666 4.7625,0.529167 c 2.177175,-4.237975 3.547415,-8.920727 5.027084,-12.964583 1.462284,-3.996344 2.176988,-7.733626 1.852083,-9.525 l -6.085417,-2.645834 c -1.401596,7.442081 -4.818551,14.115233 -7.9375,20.902084 z"
					id="path179907"
				/></g
			><g id="g179729"
				><path
					style="opacity:1;fill:url(#linearGradient178705);fill-opacity:1;fill-rule:evenodd;stroke:none;stroke-width:4.99999;stroke-linecap:round;stroke-linejoin:round;stroke-miterlimit:3"
					d="m 54.768749,71.172916 h 7.14375 L 74.877082,56.091666 C 101.70587,20.218147 88.823398,22.590837 91.545832,14.022916 l -3.175,2.910417 -3.175,-5.820833 -3.175,5.55625 -6.085416,-7.6729168 C 78.41027,32.606615 63.620754,50.521525 54.768749,71.172916 Z"
					id="path178697"
				/><path
					style="opacity:1;fill:url(#linearGradient175472);fill-opacity:1;fill-rule:evenodd;stroke:none;stroke-width:4.99999;stroke-linecap:round;stroke-linejoin:round;stroke-miterlimit:3"
					d="m 95.779165,74.877082 -3.174999,-3.175 1.322916,-6.879166 L 114.3,40.216666 c 0.31316,4.587512 0.74075,9.132689 2.38125,13.229167 l -14.2875,15.610416 -1.85208,-1.852083 z"
					id="path175464"
				/><path
					style="opacity:1;fill:url(#linearGradient175255);fill-opacity:1;fill-rule:evenodd;stroke:none;stroke-width:4.99999;stroke-linecap:round;stroke-linejoin:round;stroke-miterlimit:3"
					d="m 102.65833,77.258332 c 2.38595,-7.094298 8.97975,-10.582232 15.08125,-12.435416 -2.4191,6.176808 -3.60439,11.527796 1.05834,12.964583 l -2.11667,2.910417 z"
					id="path175247"
				/><path
					style="opacity:1;fill:url(#linearGradient177624);fill-opacity:1;fill-rule:evenodd;stroke:none;stroke-width:4.99999;stroke-linecap:round;stroke-linejoin:round;stroke-miterlimit:3"
					d="m 74.612499,71.172916 h 7.408333 C 98.641235,57.326257 108.52113,41.804059 110.59583,24.341666 l -4.23333,1.322917 V 17.197916 L 101.86458,21.695833 98.160415,17.4625 C 90.31111,35.365972 79.879035,51.703953 74.612499,71.172916 Z"
					id="path177616"
				/><path
					style="opacity:1;fill:#2c6167;fill-opacity:1;fill-rule:evenodd;stroke:none;stroke-width:4.99999;stroke-linecap:round;stroke-linejoin:round;stroke-miterlimit:3"
					d="m 33.866666,30.95625 h -4.7625 L 28.045833,32.014583 25.4,34.13125 h -3.439584 v 0.529166 H 21.695833 V 37.30625 L 14.2875,41.010416 H 9.2604166 v 6.879167 l 2.9104164,2.910416 h 16.933333 v -1.5875 h 5.688542 v 8.995834 H 17.197916 l -1.852083,7.937499 v 21.960417 l 7.672918,7.672916 H 30.95625 V 82.020832 l 4.7625,-4.7625 h 8.731249 l 5.291667,5.291667 v 10.31875 h 21.695833 v -11.1125 l 7.672917,-7.672917 h 9.525 l 10.318749,10.31875 10.847915,6.263048 v 28.39737 l 4.58272,2.64583 h 8.64645 l 3.43958,-3.43958 -1.55969,-5.82083 -1.08614,0.79375 h -0.26458 l -2.38125,3.96875 -3.175,0.52916 V 82.020832 l -4.7625,-4.7625 h -10.58334 c 1.50231,-3.381183 3.22945,-5.207482 5.29167,-6.879165 1.5085,-1.222824 3.13427,-2.4514 5.29167,-3.704167 v -10e-7 l 1.85208,-7.9375 h -3.175 l -5.82083,6.085418 -3.70417,4.233332 -1.85208,-1.852083 -4.762505,7.672916 -3.174999,-3.175 1.058334,-2.910415 2.38125,-3.175 c 3.284569,-3.768058 7.03291,-7.246104 10.58333,-10.847917 l 3.43959,-5.027084 -2.11667,-5.027083 -3.175,3.704166 -2.11667,-2.645833 -11.112498,15.875 -2.645833,-2.910417 -4.762499,7.408334 -2.116668,5.027083 H 74.612499 L 75.670833,67.46875 78.052083,63.5 88.635417,51.59375 l 4.497915,-6.614584 -3.439583,-3.96875 -2.910417,3.704167 -2.38125,-3.704167 -3.968749,6.879167 -5.556251,8.202083 -2.116666,-2.116667 c -4.450371,5.546416 -8.77722,11.120399 -10.847917,17.197917 h -7.14375 l 4.497918,-8.466666 10.054166,-14.552083 2.116666,-4.233334 c -0.49724,-1.761897 -1.637677,-2.92673 -2.910417,-3.96875 l -1.852083,3.439583 c -1.315704,-2.873029 -3.394856,-5.468345 -5.820833,-7.9375 l -5.027083,18.785417 -2.38125,-2.645834 -12.435417,19.579167 h -8.202083 l -0.79375,-0.79375 v -3.439584 l 3.175,-1.587499 h 7.9375 l 6.35,-10.583334 V 38.1 h -3.175 v -3.439584 z"
					id="path171764"
				/><path
					style="opacity:1;fill:#1c2c3d;fill-opacity:1;fill-rule:evenodd;stroke:none;stroke-width:4.99999;stroke-linecap:round;stroke-linejoin:round;stroke-miterlimit:3"
					d="m 18.520833,68.527082 v -5.556249 h 6.085417 l 0.529166,-0.529167 4.497917,-0.529167 h 8.202083 l 2.116667,-1.852083 v -6.35 h -2.910417 l -3.175,-6.35 h 3.175 l 6.085417,6.085417 v 11.90625 H 27.516666 l -2.910416,1.322916 -2.910417,1.852083 z"
					id="path170019"
				/><path
					style="opacity:1;fill:#d75b1d;fill-opacity:1;fill-rule:evenodd;stroke:none;stroke-width:4.99999;stroke-linecap:round;stroke-linejoin:round;stroke-miterlimit:3"
					d="m 13.758333,117.73958 h 7.672917 v -3.96875 c -3.555648,-0.0732 -7.284507,-0.38865 -7.672917,3.96875 z"
					id="path159276"
				/><path
					style="opacity:1;fill:#7c1817;fill-opacity:1;fill-rule:evenodd;stroke:none;stroke-width:4.99999;stroke-linecap:round;stroke-linejoin:round;stroke-miterlimit:3"
					d="m 17.197917,117.73958 h 4.233333 v -3.96875 c -3.672811,1.23283 -4.141238,2.91439 -4.233333,3.96875 z"
					id="path159761"
				/><path
					style="opacity:1;fill:#d75b1d;fill-opacity:1;fill-rule:evenodd;stroke:none;stroke-width:4.99999;stroke-linecap:round;stroke-linejoin:round;stroke-miterlimit:3"
					d="m 13.758333,124.08958 h 7.672917 v -3.96875 c -3.555648,-0.0732 -7.284507,-0.38865 -7.672917,3.96875 z"
					id="path160239"
				/><path
					style="opacity:1;fill:#7c1817;fill-opacity:1;fill-rule:evenodd;stroke:none;stroke-width:4.99999;stroke-linecap:round;stroke-linejoin:round;stroke-miterlimit:3"
					d="m 17.197917,124.08958 h 4.233333 v -3.96875 c -3.672811,1.23283 -4.141238,2.91439 -4.233333,3.96875 z"
					id="path160241"
				/><path
					style="opacity:1;fill:#2c6167;fill-opacity:1;fill-rule:evenodd;stroke:none;stroke-width:4.99999;stroke-linecap:round;stroke-linejoin:round;stroke-miterlimit:3"
					d="m 25.135416,124.08958 h 25.135417 l 5.55625,-5.55625 v -16.40416 h -9.525 V 82.814582 l -2.38125,-2.38125 H 36.5125 l -2.910417,2.38125 v 20.637498 l 4.7625,4.7625 h 5.027083 v 5.82084 h -18.25625 z"
					id="path160243"
				/><path
					style="opacity:1;fill:#d75b1d;fill-opacity:1;fill-rule:evenodd;stroke:none;stroke-width:4.99999;stroke-linecap:round;stroke-linejoin:round;stroke-miterlimit:3"
					d="M 48.947916,120.12083 H 31.220833 L 33.3375,117.475 h 12.964583 v -15.34583 h 20.108333 l -3.704167,2.91041 H 48.947916 Z"
					id="path160514"
				/><path
					style="opacity:1;fill:#d75b1d;fill-opacity:1;fill-rule:evenodd;stroke:none;stroke-width:4.99999;stroke-linecap:round;stroke-linejoin:round;stroke-miterlimit:3"
					d="m 52.387499,116.68125 h 7.408334 l 3.175,-2.64583 H 52.122916 v 2.64583 z"
					id="path160854"
				/><path
					style="opacity:1;fill:#d75b1d;fill-opacity:1;fill-rule:evenodd;stroke:none;stroke-width:4.99999;stroke-linecap:round;stroke-linejoin:round;stroke-miterlimit:3"
					d="m 52.3875,110.86041 h 8.73125 l 3.439583,-2.64583 H 52.122917 v 2.64583 z"
					id="path160856"
				/><path
					style="opacity:1;fill:#d75b1d;fill-opacity:1;fill-rule:evenodd;stroke:none;stroke-width:4.99999;stroke-linecap:round;stroke-linejoin:round;stroke-miterlimit:3"
					d="m 36.5125,89.958332 h 6.879166 v -6.879166 c -1.768858,2.623738 -3.885032,5.131361 -6.879166,6.879166 z"
					id="path160858"
				/><path
					style="opacity:1;fill:#d75b1d;fill-opacity:1;fill-rule:evenodd;stroke:none;stroke-width:4.99999;stroke-linecap:round;stroke-linejoin:round;stroke-miterlimit:3"
					d="m 66.410416,117.73958 h 7.672917 v -3.96875 c -3.555648,-0.0732 -7.284507,-0.38865 -7.672917,3.96875 z"
					id="path160900"
				/><path
					style="opacity:1;fill:#7c1817;fill-opacity:1;fill-rule:evenodd;stroke:none;stroke-width:4.99999;stroke-linecap:round;stroke-linejoin:round;stroke-miterlimit:3"
					d="m 69.85,117.73958 h 4.233333 v -3.96875 c -3.672811,1.23283 -4.141238,2.91439 -4.233333,3.96875 z"
					id="path160902"
				/><path
					style="opacity:1;fill:#d75b1d;fill-opacity:1;fill-rule:evenodd;stroke:none;stroke-width:4.99999;stroke-linecap:round;stroke-linejoin:round;stroke-miterlimit:3"
					d="m 66.410416,124.08958 h 7.672917 v -3.96875 c -3.555648,-0.0732 -7.284507,-0.38865 -7.672917,3.96875 z"
					id="path160904"
				/><path
					style="opacity:1;fill:#7c1817;fill-opacity:1;fill-rule:evenodd;stroke:none;stroke-width:4.99999;stroke-linecap:round;stroke-linejoin:round;stroke-miterlimit:3"
					d="m 69.85,124.08958 h 4.233333 v -3.96875 c -3.672811,1.23283 -4.141238,2.91439 -4.233333,3.96875 z"
					id="path160906"
				/><path
					style="opacity:1;fill:#2c6167;fill-opacity:1;fill-rule:evenodd;stroke:none;stroke-width:4.99999;stroke-linecap:round;stroke-linejoin:round;stroke-miterlimit:3"
					d="M 77.522916,124.08958 H 98.954165 V 102.12917 H 83.079166 V 99.218749 H 95.779165 V 84.402082 L 89.164582,77.787499 H 79.110416 l -5.027084,5.027083 v 23.018748 l 5.027084,5.02709 h 7.408333 v 3.175 h -8.995833 z"
					id="path162425"
				/><path
					style="opacity:1;fill:#d75b1d;fill-opacity:1;fill-rule:evenodd;stroke:none;stroke-width:4.99999;stroke-linecap:round;stroke-linejoin:round;stroke-miterlimit:3"
					d="m 80.697916,120.12083 c 0.351824,-2.09263 1.375468,-2.34476 2.38125,-2.64583 h 6.614583 v -15.34583 h 17.197921 l -3.70417,2.91041 H 92.339582 v 15.08125 z"
					id="path162496"
				/><path
					style="opacity:1;fill:#d75b1d;fill-opacity:1;fill-rule:evenodd;stroke:none;stroke-width:5.24404;stroke-linecap:round;stroke-linejoin:round;stroke-miterlimit:3"
					d="m 95.514582,116.68125 h 7.672918 l 3.175,-2.91042 H 95.514582 Z"
					id="path162774"
				/><path
					style="opacity:1;fill:#d75b1d;fill-opacity:1;fill-rule:evenodd;stroke:none;stroke-width:5.24403;stroke-linecap:round;stroke-linejoin:round;stroke-miterlimit:3"
					d="m 95.514582,110.86041 h 7.672918 l 3.175,-2.91041 H 95.514582 Z"
					id="path162776"
				/><path
					style="opacity:1;fill:#d75b1d;fill-opacity:1;fill-rule:evenodd;stroke:none;stroke-width:4.99999;stroke-linecap:round;stroke-linejoin:round;stroke-miterlimit:3"
					d="m 83.343749,89.693749 h -6.879167 c 2.830268,-1.669524 5.026514,-4.074945 6.879167,-6.879167 z"
					id="path162778"
				/><path
					style="opacity:1;fill:#d75b1d;fill-opacity:1;fill-rule:evenodd;stroke:none;stroke-width:4.99999;stroke-linecap:round;stroke-linejoin:round;stroke-miterlimit:3"
					d="M 92.604167,89.693749 H 85.725 c 2.830268,-1.669524 5.026514,-4.074945 6.879167,-6.879167 z"
					id="path162780"
				/><path
					style="opacity:1;fill:#e7e04d;fill-opacity:1;fill-rule:evenodd;stroke:none;stroke-width:4.99999;stroke-linecap:round;stroke-linejoin:round;stroke-miterlimit:3"
					d="m 123.825,111.125 h 3.43958 l -1.5875,-16.668751 z"
					id="path164236"
				/><path
					style="opacity:1;fill:#e19a38;fill-opacity:1;fill-rule:evenodd;stroke:none;stroke-width:4.99999;stroke-linecap:round;stroke-linejoin:round;stroke-miterlimit:3"
					d="m 127.26458,111.125 v 7.14375 H 123.825 V 111.125 Z"
					id="path164982"
				/><path
					style="opacity:1;fill:#cfb481;fill-opacity:1;fill-rule:evenodd;stroke:none;stroke-width:4.99999;stroke-linecap:round;stroke-linejoin:round;stroke-miterlimit:3"
					d="m 127.26458,118.26875 v 0.79375 l -4.49791,4.49792 -9.525,0.26458 -4.7625,-4.7625 V 91.810416 l -2.38125,-2.38125 h -7.143755 v -6.35 h 7.937505 l 4.7625,4.7625 v 30.427084 l 2.38125,2.38125 h 7.40833 l 2.38125,-2.38125 z"
					id="path165253"
				/><path
					style="opacity:1;fill:#d75b1d;fill-opacity:1;fill-rule:evenodd;stroke:none;stroke-width:4.99999;stroke-linecap:round;stroke-linejoin:round;stroke-miterlimit:3"
					d="m 114.82917,114.82917 -3.175,3.175 v 0.26458 l 1.85208,1.85208 3.175,-3.175 z"
					id="path165457"
				/><path
					style="opacity:1;fill:#e3bc19;fill-opacity:1;fill-rule:evenodd;stroke:none;stroke-width:4.99999;stroke-linecap:round;stroke-linejoin:round;stroke-miterlimit:3"
					d="m 116.68125,116.94583 4.23333,-4.23333 -1.85208,-1.85208 -4.23333,3.96875 z"
					id="path165743"
				/><path
					style="opacity:1;fill:#e7e04d;fill-opacity:1;fill-rule:evenodd;stroke:none;stroke-width:4.99999;stroke-linecap:round;stroke-linejoin:round;stroke-miterlimit:3"
					d="m 119.0625,110.86042 3.175,-1.5875 -1.32292,3.43958 z"
					id="path165937"
				/><path
					style="opacity:1;fill:#e7e04d;fill-opacity:1;fill-rule:evenodd;stroke:none;stroke-width:4.99999;stroke-linecap:round;stroke-linejoin:round;stroke-miterlimit:3"
					d="m 119.85625,107.95 v -2.64583 l 2.91042,1.32291 z"
					id="path166154"
				/><path
					style="opacity:1;fill:#e3bc19;fill-opacity:1;fill-rule:evenodd;stroke:none;stroke-width:4.99999;stroke-linecap:round;stroke-linejoin:round;stroke-miterlimit:3"
					d="m 119.85625,107.95 h -5.29167 v -2.64583 h 5.29167 z"
					id="path166156"
				/><path
					style="opacity:1;fill:#d75b1d;fill-opacity:1;fill-rule:evenodd;stroke:none;stroke-width:4.99999;stroke-linecap:round;stroke-linejoin:round;stroke-miterlimit:3"
					d="m 111.65417,107.95 h 2.91041 v -2.64583 h -2.91041 z"
					id="path166158"
				/><path
					style="opacity:1;fill:#e7e04d;fill-opacity:1;fill-rule:evenodd;stroke:none;stroke-width:4.99999;stroke-linecap:round;stroke-linejoin:round;stroke-miterlimit:3"
					d="m 119.85625,98.424998 v -2.64583 l 2.91042,1.32291 z"
					id="path166298"
				/><path
					style="opacity:1;fill:#e3bc19;fill-opacity:1;fill-rule:evenodd;stroke:none;stroke-width:4.99999;stroke-linecap:round;stroke-linejoin:round;stroke-miterlimit:3"
					d="m 119.85625,98.424998 h -5.29167 v -2.64583 h 5.29167 z"
					id="path166300"
				/><path
					style="opacity:1;fill:#d75b1d;fill-opacity:1;fill-rule:evenodd;stroke:none;stroke-width:4.99999;stroke-linecap:round;stroke-linejoin:round;stroke-miterlimit:3"
					d="m 111.65417,98.424998 h 2.91041 v -2.64583 h -2.91041 z"
					id="path166302"
				/><path
					style="opacity:1;fill:#e7e04d;fill-opacity:1;fill-rule:evenodd;stroke:none;stroke-width:4.99999;stroke-linecap:round;stroke-linejoin:round;stroke-miterlimit:3"
					d="m 119.85625,89.164582 v -2.64583 l 2.91042,1.32291 z"
					id="path166304"
				/><path
					style="opacity:1;fill:#e3bc19;fill-opacity:1;fill-rule:evenodd;stroke:none;stroke-width:4.99999;stroke-linecap:round;stroke-linejoin:round;stroke-miterlimit:3"
					d="m 119.85625,89.164582 h -5.29167 v -2.64583 h 5.29167 z"
					id="path166306"
				/><path
					style="opacity:1;fill:#d75b1d;fill-opacity:1;fill-rule:evenodd;stroke:none;stroke-width:6.39601;stroke-linecap:round;stroke-linejoin:round;stroke-miterlimit:3"
					d="m 109.80208,89.164582 h 4.7625 v -2.64583 h -4.7625 z"
					id="path166308"
				/><path
					style="opacity:1;fill:#d75b1d;fill-opacity:1;fill-rule:evenodd;stroke:none;stroke-width:4.99999;stroke-linecap:round;stroke-linejoin:round;stroke-miterlimit:3"
					d="M 67.997917,89.693749 H 61.11875 c 2.830268,-1.669524 5.026514,-4.074945 6.879167,-6.879167 z"
					id="path167762"
				/><path
					style="opacity:1;fill:#d75b1d;fill-opacity:1;fill-rule:evenodd;stroke:none;stroke-width:4.99999;stroke-linecap:round;stroke-linejoin:round;stroke-miterlimit:3"
					d="m 58.7375,89.693749 h -6.879167 c 2.830268,-1.669524 5.026514,-4.074945 6.879167,-6.879167 z"
					id="path167764"
				/><path
					style="opacity:1;fill:#d75b1d;fill-opacity:1;fill-rule:evenodd;stroke:none;stroke-width:4.99999;stroke-linecap:round;stroke-linejoin:round;stroke-miterlimit:3"
					d="M 58.7375,80.697917 H 51.858333 C 54.688601,79.028393 56.884847,76.622972 58.7375,73.81875 Z"
					id="path167766"
				/><path
					style="opacity:1;fill:#d75b1d;fill-opacity:1;fill-rule:evenodd;stroke:none;stroke-width:4.99999;stroke-linecap:round;stroke-linejoin:round;stroke-miterlimit:3"
					d="M 67.997917,80.697917 H 61.11875 c 2.830268,-1.669524 5.026514,-4.074945 6.879167,-6.879167 z"
					id="path167768"
				/><path
					style="opacity:1;fill:#d75b1d;fill-opacity:1;fill-rule:evenodd;stroke:none;stroke-width:4.99999;stroke-linecap:round;stroke-linejoin:round;stroke-miterlimit:3"
					d="M 27.516667,89.693749 H 20.6375 c 2.830268,-1.669524 5.026514,-4.074945 6.879167,-6.879167 z"
					id="path167770"
				/><path
					style="opacity:1;fill:#d75b1d;fill-opacity:1;fill-rule:evenodd;stroke:none;stroke-width:4.99999;stroke-linecap:round;stroke-linejoin:round;stroke-miterlimit:3"
					d="M 27.516667,80.697917 H 20.6375 c 2.830268,-1.669524 5.026514,-4.074945 6.879167,-6.879167 z"
					id="path167772"
				/><path
					style="opacity:1;fill:#cfb481;fill-opacity:1;fill-rule:evenodd;stroke:none;stroke-width:4.99999;stroke-linecap:round;stroke-linejoin:round;stroke-miterlimit:3"
					d="M 71.437499,92.868749 H 49.477083 v 6.085416 c 9.42881,-0.0082 18.730707,-0.07425 21.960416,-2.910416 z"
					id="path167774"
				/><path
					style="opacity:1;fill:#cfb481;fill-opacity:1;fill-rule:evenodd;stroke:none;stroke-width:4.99999;stroke-linecap:round;stroke-linejoin:round;stroke-miterlimit:3"
					d="m 30.95625,102.12917 v -6.350005 h -7.9375 L 15.345833,88.106249 V 66.145832 l 7.408333,-7.408333 H 34.925 l 2.116666,-2.116666 v -6.085417 l -3.175,-3.175 h -7.14375 l -2.116666,-1.5875 v 4.7625 H 24.077083 L 23.01875,49.477083 h -1.322917 v -2.116667 l -3.175,-1.833086 v 5.008086 h -3.175 v -3.175 l -3.175,-1.833086 v 8.447669 h 15.345833 c 2.114948,-0.255855 3.161154,-1.49465 3.439584,-3.439583 h 2.645833 v 6.085417 h -18.25625 v 5.291666 h -3.175 v 31.75 l 8.466667,8.466671 z"
					id="path167776"
				/><path
					style="opacity:1;fill:#cfb481;fill-opacity:1;fill-rule:evenodd;stroke:none;stroke-width:4.99999;stroke-linecap:round;stroke-linejoin:round;stroke-miterlimit:3"
					d="m 15.345833,34.660416 v -2.645833 h 12.7 L 25.4,34.13125 h -3.439584 v 0.529166 z"
					id="path167778"
				/><path
					style="opacity:1;fill:#e3bc19;fill-opacity:1;fill-rule:evenodd;stroke:none;stroke-width:4.99999;stroke-linecap:round;stroke-linejoin:round;stroke-miterlimit:3"
					d="m 47.624999,23.01875 6.35,-7.408334 c 4.286499,1.032689 6.818957,2.690192 7.672917,7.408334 l -8.995833,4.233333 z"
					id="path168522"
				/><path
					style="opacity:1;fill:#cfb481;fill-opacity:1;fill-rule:evenodd;stroke:none;stroke-width:4.99999;stroke-linecap:round;stroke-linejoin:round;stroke-miterlimit:3"
					d="M 33.866666,33.602083 V 30.95625 c 1.742995,-2.243746 6.586649,-4.080849 12.170833,-5.820834 l 1.5875,-2.116666 c 1.405084,-0.818113 2.492818,-0.60511 3.704167,-0.79375 0.989101,1.518992 1.404313,3.20205 1.322917,5.027083 V 30.1625 l -6.35,4.497916 h -6.085417 v -1.058333 z"
					id="path167780"
				/><path
					style="opacity:1;fill:#d75b1d;fill-opacity:1;fill-rule:evenodd;stroke:none;stroke-width:4.99999;stroke-linecap:round;stroke-linejoin:round;stroke-miterlimit:3"
					d="M 15.345833,86.783332 V 83.872916 H 11.1125 l -1.5875001,2.910416 z"
					id="path167782"
				/><path
					style="opacity:1;fill:#d75b1d;fill-opacity:1;fill-rule:evenodd;stroke:none;stroke-width:4.99999;stroke-linecap:round;stroke-linejoin:round;stroke-miterlimit:3"
					d="M 15.345833,80.433333 V 77.522917 H 11.1125 l -1.5875001,2.910416 z"
					id="path168060"
				/><path
					style="opacity:1;fill:#d75b1d;fill-opacity:1;fill-rule:evenodd;stroke:none;stroke-width:4.99999;stroke-linecap:round;stroke-linejoin:round;stroke-miterlimit:3"
					d="M 15.345833,74.347916 V 71.4375 H 11.1125 l -1.5875001,2.910416 z"
					id="path168062"
				/><path
					style="opacity:1;fill:#d75b1d;fill-opacity:1;fill-rule:evenodd;stroke:none;stroke-width:4.99999;stroke-linecap:round;stroke-linejoin:round;stroke-miterlimit:3"
					d="M 15.345833,67.997916 V 65.0875 H 11.1125 l -1.5875001,2.910416 z"
					id="path168064"
				/><path
					style="opacity:1;fill:#d75b1d;fill-opacity:1;fill-rule:evenodd;stroke:none;stroke-width:4.99999;stroke-linecap:round;stroke-linejoin:round;stroke-miterlimit:3"
					d="m 15.345833,61.912499 0,-3.174999 H 11.1125 l -1.5875001,3.174999 z"
					id="path168066"
				/><path
					style="opacity:1;fill:#d75b1d;fill-opacity:1;fill-rule:evenodd;stroke:none;stroke-width:4.99999;stroke-linecap:round;stroke-linejoin:round;stroke-miterlimit:3"
					d="m 18.520833,65.087499 v -2.116666 h 3.175 l 2.910417,3.704166 v 1.852083 h -2.910417 z"
					id="path168068"
				/><path
					style="opacity:1;fill:#d75b1d;fill-opacity:1;fill-rule:evenodd;stroke:none;stroke-width:4.99999;stroke-linecap:round;stroke-linejoin:round;stroke-miterlimit:3"
					d="m 24.870833,62.706249 v -3.96875 h 1.852083 l 2.910417,3.175 v 3.439584 h -2.116667 z"
					id="path168070"
				/><path
					style="opacity:1;fill:#d75b1d;fill-opacity:1;fill-rule:evenodd;stroke:none;stroke-width:4.99999;stroke-linecap:round;stroke-linejoin:round;stroke-miterlimit:3"
					d="m 34.395833,65.352083 h 2.645833 V 63.235416 L 32.54375,58.737499 h -1.5875 v 3.175 z"
					id="path168072"
				/><path
					style="opacity:1;fill:#d75b1d;fill-opacity:1;fill-rule:evenodd;stroke:none;stroke-width:4.99999;stroke-linecap:round;stroke-linejoin:round;stroke-miterlimit:3"
					d="m 40.745833,65.352083 h 2.116666 0.264584 v -2.38125 l -3.96875,-3.704167 h -2.116667 v 2.645833 z"
					id="path168074"
				/><path
					style="opacity:1;fill:#d75b1d;fill-opacity:1;fill-rule:evenodd;stroke:none;stroke-width:4.99999;stroke-linecap:round;stroke-linejoin:round;stroke-miterlimit:3"
					d="m 43.127083,59.531249 v -2.910416 l -3.175,-2.910417 h -2.910417 v 1.058333 l 4.7625,4.7625 z"
					id="path168076"
				/><path
					style="opacity:1;fill:#d75b1d;fill-opacity:1;fill-rule:evenodd;stroke:none;stroke-width:4.99999;stroke-linecap:round;stroke-linejoin:round;stroke-miterlimit:3"
					d="m 37.041666,47.360416 v 1.058333 l 5.027083,5.027084 h 1.058334 v -3.704167 l -2.645834,-2.38125 z"
					id="path168078"
				/><path
					style="opacity:1;fill:#d75b1d;fill-opacity:1;fill-rule:evenodd;stroke:none;stroke-width:4.99999;stroke-linecap:round;stroke-linejoin:round;stroke-miterlimit:3"
					d="m 45.508333,47.360417 2.38125,-2.910418 h 6.614583 l -2.116667,2.910417 z"
					id="path168080"
				/><path
					style="opacity:1;fill:#d75b1d;fill-opacity:1;fill-rule:evenodd;stroke:none;stroke-width:4.99999;stroke-linecap:round;stroke-linejoin:round;stroke-miterlimit:3"
					d="M -0.79374999,32.014583 H 5.5562499 V 38.1 Z"
					id="path168082"
				/><path
					style="opacity:1;fill:#d75b1d;fill-opacity:1;fill-rule:evenodd;stroke:none;stroke-width:4.99999;stroke-linecap:round;stroke-linejoin:round;stroke-miterlimit:3"
					d="m 61.647916,23.01875 c -0.978399,-3.748435 -3.7799,-6.020382 -7.672917,-7.408334 4.167322,-4.513136 8.968229,-8.202671 13.758333,-11.9062494 1.445526,3.1893889 -3.305556,8.5062044 -5.556249,12.9645834 -0.151978,1.176633 -0.510854,2.634379 0,2.910416 0.620355,-0.09076 0.766582,-0.645797 1.058333,-1.058333 h 2.910416 c -0.620828,1.933784 -1.681313,3.247951 -4.497916,4.497917 z"
					id="path168084"
				/><path
					style="opacity:1;fill:#d75b1d;fill-opacity:1;fill-rule:evenodd;stroke:none;stroke-width:4.99999;stroke-linecap:round;stroke-linejoin:round;stroke-miterlimit:3"
					d="m 72.231249,18.785416 c 1.790687,3.242277 3.915132,3.171568 6.085417,2.645834 0.807069,-7.278376 -2.137715,-12.2208964 -5.027084,-17.1979167 -0.09023,4.9716605 -0.09305,9.9835907 -1.058333,14.5520827 z"
					id="path168086"
				/><path
					style="opacity:1;fill:#d75b1d;fill-opacity:1;fill-rule:evenodd;stroke:none;stroke-width:4.99999;stroke-linecap:round;stroke-linejoin:round;stroke-miterlimit:3"
					d="m 91.016666,21.960416 c 2.230164,3.09907 5.271311,2.771565 8.202083,2.910417 -0.585658,-7.960234 -2.868953,-15.2476638 -7.9375,-21.4312497 0.573248,6.1532694 0.156702,12.3369777 -0.264583,18.5208327 z"
					id="path168088"
				/><path
					style="opacity:1;fill:#d75b1d;fill-opacity:1;fill-rule:evenodd;stroke:none;stroke-width:4.99999;stroke-linecap:round;stroke-linejoin:round;stroke-miterlimit:3"
					d="m 110.06667,29.104166 c 2.00879,2.399901 4.16058,1.735494 6.35,0.264584 -1.47559,-9.233637 -3.56187,-13.21763 -5.55625,-17.991667 0.43398,6.784307 0.0115,12.475977 -0.79375,17.727083 z"
					id="path168090"
				/><path
					style="opacity:1;fill:#d75b1d;fill-opacity:1;fill-rule:evenodd;stroke:none;stroke-width:4.99999;stroke-linecap:round;stroke-linejoin:round;stroke-miterlimit:3"
					d="m 116.68125,53.445833 c 0.71568,2.314209 2.20057,2.751544 4.23333,1.852083 l 3.96875,-10.847917 z"
					id="path168092"
				/><path
					style="opacity:1;fill:#d75b1d;fill-opacity:1;fill-rule:evenodd;stroke:none;stroke-width:4.99999;stroke-linecap:round;stroke-linejoin:round;stroke-miterlimit:3"
					d="m 18.520833,53.974999 h 3.175 v -2.910416 c -0.259412,-0.905531 -0.667551,-1.430514 -1.322917,-1.322917 h -1.852083 z"
					id="path168094"
				/><path
					style="opacity:1;fill:#d75b1d;fill-opacity:1;fill-rule:evenodd;stroke:none;stroke-width:4.99999;stroke-linecap:round;stroke-linejoin:round;stroke-miterlimit:3"
					d="m 12.170833,53.974999 h 3.175 v -2.910416 c -0.259412,-0.905531 -0.667551,-1.430514 -1.322917,-1.322917 h -1.852083 z"
					id="path168096"
				/><path
					style="opacity:1;fill:#e3bc19;fill-opacity:1;fill-rule:evenodd;stroke:none;stroke-width:4.99999;stroke-linecap:round;stroke-linejoin:round;stroke-miterlimit:3"
					d="m 40.481249,47.360416 v -2.910417 h 7.408334 l -2.38125,2.910417 z"
					id="path168098"
				/><path
					style="opacity:1;fill:#cfb481;fill-opacity:1;fill-rule:evenodd;stroke:none;stroke-width:4.99999;stroke-linecap:round;stroke-linejoin:round;stroke-miterlimit:3"
					d="m 42.068749,47.360416 2.645834,-2.910417 h -4.233334 v 2.910417 z"
					id="path168238"
				/><path
					style="opacity:1;fill:#d75b1d;fill-opacity:1;fill-rule:evenodd;stroke:none;stroke-width:4.99999;stroke-linecap:round;stroke-linejoin:round;stroke-miterlimit:3"
					d="m 45.508333,40.878126 2.38125,-2.910418 h 6.614583 l -2.116667,2.910417 z"
					id="path168516"
				/><path
					style="opacity:1;fill:#e3bc19;fill-opacity:1;fill-rule:evenodd;stroke:none;stroke-width:4.99999;stroke-linecap:round;stroke-linejoin:round;stroke-miterlimit:3"
					d="m 40.481249,40.878125 v -2.910417 h 7.408334 l -2.38125,2.910417 z"
					id="path168518"
				/><path
					style="opacity:1;fill:#cfb481;fill-opacity:1;fill-rule:evenodd;stroke:none;stroke-width:4.99999;stroke-linecap:round;stroke-linejoin:round;stroke-miterlimit:3"
					d="m 42.068749,40.878125 2.645834,-2.910417 h -4.233334 v 2.910417 z"
					id="path168520"
				/><path
					style="opacity:1;fill:#e9a33e;fill-opacity:1;fill-rule:evenodd;stroke:none;stroke-width:4.99999;stroke-linecap:round;stroke-linejoin:round;stroke-miterlimit:3"
					d="M 5.5562499,38.1 H 9.2604166 V 35.454166 L 10.31875,34.660416 8.9958332,32.014583 H 5.5562499 Z"
					id="path168800"
				/><path
					style="opacity:1;fill:#b89354;fill-opacity:1;fill-rule:evenodd;stroke:none;stroke-width:4.99999;stroke-linecap:round;stroke-linejoin:round;stroke-miterlimit:3"
					d="m 10.31875,34.660416 h 5.027083 V 32.014583 H 8.9958332 Z"
					id="path169339"
				/><path
					style="opacity:1;fill:#867866;fill-opacity:1;fill-rule:evenodd;stroke:none;stroke-width:4.99999;stroke-linecap:round;stroke-linejoin:round;stroke-miterlimit:3"
					d="M 33.866666,33.602083 V 34.925 h 3.175 v 2.910416 l 3.175,-1.852083 v -1.322917 -1.058333 z"
					id="path169541"
				/><path
					style="opacity:1;fill:#1c2c3d;fill-opacity:1;fill-rule:evenodd;stroke:none;stroke-width:4.99999;stroke-linecap:round;stroke-linejoin:round;stroke-miterlimit:3"
					d="M 9.2604166,41.010416 H 14.2875 l -2.38125,2.116667 z"
					id="path170351"
				/><path
					style="opacity:1;fill:#1c2c3d;fill-opacity:1;fill-rule:evenodd;stroke:none;stroke-width:4.99999;stroke-linecap:round;stroke-linejoin:round;stroke-miterlimit:3"
					d="M 18.25625,44.185416 V 43.127083 L 23.547916,38.1 H 33.3375 v 0.529166 l -4.497917,4.497917 h -6.35 l -1.322917,1.058333 z"
					id="path170430"
				/><path
					style="opacity:1;fill:#7f1617;fill-opacity:1;fill-rule:evenodd;stroke:none;stroke-width:4.99999;stroke-linecap:round;stroke-linejoin:round;stroke-miterlimit:3"
					d="M 22.489583,43.127083 25.664583,38.1 h 5.291667 l -5.027084,5.027083 z"
					id="path170432"
				/><circle
					style="opacity:1;fill:#d14f17;fill-opacity:1;fill-rule:evenodd;stroke:none;stroke-width:4.99999;stroke-linecap:round;stroke-linejoin:round;stroke-miterlimit:3"
					id="path170816"
					cx="25.4"
					cy="39.6875"
					r="2.0032752"
				/><path
					style="opacity:1;fill:#1c2c3d;fill-opacity:1;fill-rule:evenodd;stroke:none;stroke-width:4.99999;stroke-linecap:round;stroke-linejoin:round;stroke-miterlimit:3"
					d="M 22.489583,43.127083 25.664583,38.1 h -2.116667 z"
					id="path171553"
				/><path
					style="opacity:1;fill:#2c6167;fill-opacity:1;fill-rule:evenodd;stroke:none;stroke-width:4.99999;stroke-linecap:round;stroke-linejoin:round;stroke-miterlimit:3"
					d="m 24.077083,38.1 h 2.645833 l -1.5875,-0.79375 z"
					id="path171835"
				/><path
					style="opacity:1;fill:#595650;fill-opacity:1;fill-rule:evenodd;stroke:none;stroke-width:4.99999;stroke-linecap:round;stroke-linejoin:round;stroke-miterlimit:3"
					d="m 113.24167,66.674999 4.49791,-1.852083 3.175,-9.525 -4.23333,-1.852083 -4.7625,5.291666 z"
					id="path174015"
				/><path
					style="opacity:1;fill:#595650;fill-opacity:1;fill-rule:evenodd;stroke:none;stroke-width:4.99999;stroke-linecap:round;stroke-linejoin:round;stroke-miterlimit:3"
					d="m 102.65833,45.772917 2.11667,2.645832 5.29167,1.322917 c 3.09058,-6.679387 6.71426,-13.297696 6.35,-20.372916 l -6.35,-0.264584 c -1.41334,4.575615 -2.82798,8.887969 -7.40834,16.668751 z"
					id="path174416"
				/><path
					style="opacity:1;fill:#595650;fill-opacity:1;fill-rule:evenodd;stroke:none;stroke-width:4.99999;stroke-linecap:round;stroke-linejoin:round;stroke-miterlimit:3"
					d="m 86.783332,44.714583 6.35,0.264583 c 3.371925,-7.547121 6.464782,-14.918851 6.085417,-20.108333 l -8.202083,-2.910417 c -0.970383,6.215452 -3.078378,12.554895 -6.614584,19.05 z"
					id="path174418"
				/><path
					style="opacity:1;fill:#595650;fill-opacity:1;fill-rule:evenodd;stroke:none;stroke-width:4.99999;stroke-linecap:round;stroke-linejoin:round;stroke-miterlimit:3"
					d="m 66.674999,43.391666 4.7625,0.529167 c 2.177175,-4.237975 3.547415,-8.920727 5.027084,-12.964583 1.462284,-3.996344 2.176988,-7.733626 1.852083,-9.525 l -6.085417,-2.645834 c -1.401596,7.442081 -4.818551,14.115233 -7.9375,20.902084 z"
					id="path174420"
				/></g
			></g
		><metadata id="metadata20898">
			<!-- svelte-ignore attribute_illegal_colon -->
			<!-- 	data-license="https://creativecommons.org/licenses/by-nc-sa/4.0/" data-author="Doriel Rivalet"--></metadata
		></svg
	>
</div>
