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
				id="filter75981"
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
					id="feComposite75967"
				/><feColorMatrix
					in="composite1"
					values="1"
					type="saturate"
					result="colormatrix1"
					id="feColorMatrix75969"
				/><feFlood
					flood-opacity="1"
					flood-color="rgb(0,0,0)"
					result="flood1"
					id="feFlood75971"
				/><feBlend
					in="flood1"
					in2="colormatrix1"
					mode="multiply"
					result="blend1"
					id="feBlend75973"
				/><feBlend
					in2="blend1"
					mode="screen"
					result="blend2"
					id="feBlend75975"
				/><feColorMatrix
					in="blend2"
					values="1"
					type="saturate"
					result="colormatrix2"
					id="feColorMatrix75977"
				/><feComposite
					in="colormatrix2"
					in2="SourceGraphic"
					operator="in"
					k2="1"
					result="composite2"
					id="feComposite75979"
				/></filter
			></defs
		>
		<!-- svelte-ignore a11y_no_static_element_interactions -->
		<!-- svelte-ignore a11y_mouse_events_have_key_events -->
		<g id="layer1"
			><g
				id="g75602"
				style="filter:url(#filter75981)"
				transform="translate(0.52916663,1.0583333)"
				><path
					style="opacity:1;fill:#83b6df;fill-opacity:1;fill-rule:evenodd;stroke-width:0.3;stroke-linecap:round;stroke-linejoin:round;stroke-miterlimit:3"
					d="m 14.022916,119.85625 v -2.91042 H 11.1125 Z"
					id="path75376"
				/><path
					style="opacity:1;fill:#83b6df;fill-opacity:1;fill-rule:evenodd;stroke-width:0.3;stroke-linecap:round;stroke-linejoin:round;stroke-miterlimit:3"
					d="m 23.283333,119.85625 2.910417,-2.91042 h -2.910417 z"
					id="path75378"
				/><path
					style="opacity:1;fill:#165591;fill-opacity:1;fill-rule:evenodd;stroke-width:0.3;stroke-linecap:round;stroke-linejoin:round;stroke-miterlimit:3"
					d="m 2.1166666,28.839583 v -4.7625 l 7.6729166,7.9375 8.7312498,-11.377083 8.995833,11.377083 7.672917,-7.9375 V 37.041666 H 2.1166666 Z"
					id="path75380"
				/><path
					style="opacity:1;fill:#0e70bc;fill-opacity:1;fill-rule:evenodd;stroke-width:0.3;stroke-linecap:round;stroke-linejoin:round;stroke-miterlimit:3"
					d="m 23.283333,121.97292 v -10.58334 l 2.91045,-2.91045 v -3.17496 h -2.91045 v -6.614588 l 2.910417,-2.910417 v -2.910416 h -2.910417 v -6.35 L 26.19375,83.608332 V 80.697916 H 23.283333 V 75.670832 L 26.19375,72.760416 V 70.11458 h 2.910416 v -3.439581 l 6.085417,-6.085416 v -32.54375 l -7.408333,7.9375 -9.260417,-11.377083 -8.7312498,11.377083 -7.6729166,-7.9375 v 32.808333 l 6.35,6.085416 v 3.175 l 5.5562494,5.820834 v 5.027083 H 11.1125 v 2.910417 l 2.910416,2.910416 v 6.085417 H 11.1125 v 3.175 l 2.910416,2.910416 v 6.350005 H 11.1125 v 3.175 l 2.910416,2.91041 v 10.58334 z"
					id="path75382"
				/><path
					style="opacity:1;fill:#165591;fill-opacity:1;fill-rule:evenodd;stroke-width:0.3;stroke-linecap:round;stroke-linejoin:round;stroke-miterlimit:3"
					d="m 17.4625,112.18333 1.058333,-1.05833 1.058333,1.05833 v 10.31875 H 17.4625 Z"
					id="path75384"
				/><path
					style="opacity:1;fill:#83b6df;fill-opacity:1;fill-rule:evenodd;stroke-width:0.3;stroke-linecap:round;stroke-linejoin:round;stroke-miterlimit:3"
					d="m 14.022916,121.97292 h 9.260417 v 1.32291 l -2.38125,2.38125 -2.38125,-2.38125 -2.38125,2.38125 -2.116667,-2.11666 z"
					id="path75386"
				/><path
					style="opacity:1;fill:#83b6df;fill-opacity:1;fill-rule:evenodd;stroke-width:0.3;stroke-linecap:round;stroke-linejoin:round;stroke-miterlimit:3"
					d="m 11.1125,108.47917 v -3.175 H 8.4666665 Z"
					id="path75388"
				/><path
					style="opacity:1;fill:#83b6df;fill-opacity:1;fill-rule:evenodd;stroke-width:0.3;stroke-linecap:round;stroke-linejoin:round;stroke-miterlimit:3"
					d="m 26.19375,108.47917 v -2.91042 h 2.645833 z"
					id="path75390"
				/><path
					style="opacity:1;fill:#83b6df;fill-opacity:1;fill-rule:evenodd;stroke-width:0.3;stroke-linecap:round;stroke-linejoin:round;stroke-miterlimit:3"
					d="M 10.847917,95.779165 V 92.868749 H 8.2020832 Z"
					id="path75392"
				/><path
					style="opacity:1;fill:#83b6df;fill-opacity:1;fill-rule:evenodd;stroke-width:0.3;stroke-linecap:round;stroke-linejoin:round;stroke-miterlimit:3"
					d="m 26.19375,95.779167 v -2.910418 h 2.645833 z"
					id="path75394"
				/><path
					style="opacity:1;fill:#83b6df;fill-opacity:1;fill-rule:evenodd;stroke-width:0.3;stroke-linecap:round;stroke-linejoin:round;stroke-miterlimit:3"
					d="M 11.1125,83.872916 V 80.962499 H 7.9374999 Z"
					id="path75396"
				/><path
					style="opacity:1;fill:#83b6df;fill-opacity:1;fill-rule:evenodd;stroke-width:0.3;stroke-linecap:round;stroke-linejoin:round;stroke-miterlimit:3"
					d="m 26.19375,83.608333 0,-2.910417 h 2.910416 z"
					id="path75398"
				/><path
					style="opacity:1;fill:#83b6df;fill-opacity:1;fill-rule:evenodd;stroke-width:0.355756;stroke-linecap:round;stroke-linejoin:round;stroke-miterlimit:3"
					d="m 17.4625,75.935417 h 2.38125 l -1.190626,1.322915 z"
					id="path75400"
				/><path
					style="opacity:1;fill:#83b6df;fill-opacity:1;fill-rule:evenodd;stroke-width:0.355756;stroke-linecap:round;stroke-linejoin:round;stroke-miterlimit:3"
					d="m 17.4625,70.114583 h 2.38125 l -1.190626,1.322915 z"
					id="path75402"
				/><path
					style="opacity:1;fill:#83b6df;fill-opacity:1;fill-rule:evenodd;stroke-width:0.355756;stroke-linecap:round;stroke-linejoin:round;stroke-miterlimit:3"
					d="m 17.4625,64.161459 h 2.38125 l -1.190626,1.322915 z"
					id="path75404"
				/><path
					style="opacity:1;fill:#83b6df;fill-opacity:1;fill-rule:evenodd;stroke-width:0.3;stroke-linecap:round;stroke-linejoin:round;stroke-miterlimit:3"
					d="M 11.509375,73.024999 V 70.114582 H 8.5989583 Z"
					id="path75406"
				/><path
					style="opacity:1;fill:#83b6df;fill-opacity:1;fill-rule:evenodd;stroke-width:0.3;stroke-linecap:round;stroke-linejoin:round;stroke-miterlimit:3"
					d="m 26.19375,72.760416 2.910417,-2.645833 -2.910417,-10e-7 z"
					id="path75408"
				/><path
					style="opacity:1;fill:#1b496c;fill-opacity:0.513725;fill-rule:evenodd;stroke-width:0.3;stroke-linecap:round;stroke-linejoin:round;stroke-miterlimit:3"
					d="m 18.785416,60.060416 6.879167,-7.14375 v -3.175 l -6.879167,6.879167 -7.143749,-6.614584 v 2.910417 z"
					id="path75410"
				/><path
					style="opacity:1;fill:#1b496c;fill-opacity:0.513725;fill-rule:evenodd;stroke-width:0.3;stroke-linecap:round;stroke-linejoin:round;stroke-miterlimit:3"
					d="M 18.785416,52.916667 28.839583,42.597917 V 39.6875 L 18.785416,49.477084 8.4666667,39.6875 v 2.910417 z"
					id="path75412"
				/><path
					style="opacity:1;fill:#83b6df;fill-opacity:1;fill-rule:evenodd;stroke-width:0.3;stroke-linecap:round;stroke-linejoin:round;stroke-miterlimit:3"
					d="M 2.1166666,40.481249 7.1437499,35.189583 5.5562499,33.3375 2.1166666,36.777083 Z"
					id="path75414"
				/><path
					style="opacity:1;fill:#83b6df;fill-opacity:1;fill-rule:evenodd;stroke-width:0.3;stroke-linecap:round;stroke-linejoin:round;stroke-miterlimit:3"
					d="m 2.1166666,34.13125 2.38125,-1.852084 -2.38125,-2.38125 z"
					id="path75416"
				/><path
					style="opacity:1;fill:#83b6df;fill-opacity:1;fill-rule:evenodd;stroke-width:0.3;stroke-linecap:round;stroke-linejoin:round;stroke-miterlimit:3"
					d="m 35.189599,40.481249 -5.027086,-5.291666 1.587501,-1.852083 3.439585,3.439583 z"
					id="path75418"
				/><path
					style="opacity:1;fill:#83b6df;fill-opacity:1;fill-rule:evenodd;stroke-width:0.3;stroke-linecap:round;stroke-linejoin:round;stroke-miterlimit:3"
					d="m 35.189599,34.13125 -2.381251,-1.852084 2.381251,-2.38125 z"
					id="path75420"
				/><path
					style="opacity:1;fill:#83b6df;fill-opacity:1;fill-rule:evenodd;stroke-width:0.3;stroke-linecap:round;stroke-linejoin:round;stroke-miterlimit:3"
					d="m 18.520833,38.364583 5.820833,-6.35 -1.5875,-2.116667 -3.96875,4.233334 L 14.552083,29.897916 12.7,32.279166 Z"
					id="path75422"
				/><path
					style="opacity:1;fill:#83b6df;fill-opacity:1;fill-rule:evenodd;stroke-width:0.3;stroke-linecap:round;stroke-linejoin:round;stroke-miterlimit:3"
					d="M 18.520833,30.95625 21.166666,28.045833 18.520833,24.60625 15.875,28.045833 Z"
					id="path75424"
				/><path
					style="opacity:1;fill:#4c181d;fill-opacity:1;fill-rule:evenodd;stroke-width:0.3;stroke-linecap:round;stroke-linejoin:round;stroke-miterlimit:3"
					d="M 11.377083,66.145832 V 59.795833 C 7.515929,60.11504 6.3840415,57.86513 5.0270833,55.827083 v 4.233333 c 2.2558948,3.736465 4.3051072,4.937438 6.3499997,6.085416 z"
					id="path75426"
				/><path
					id="path75428"
					style="opacity:1;fill:#fa5202;fill-opacity:1;fill-rule:evenodd;stroke-width:0.3;stroke-linecap:round;stroke-linejoin:round;stroke-miterlimit:3"
					d="m 8.5007731,59.440816 a 2.1166666,2.1166666 0 0 0 -0.8278564,1.677934 2.1166666,2.1166666 0 0 0 2.1166666,2.116667 2.1166666,2.1166666 0 0 0 1.5874997,-0.718303 v -2.721281 c -1.188854,0.09828 -2.1187052,-0.04736 -2.8763099,-0.355017 z"
				/><path
					style="opacity:1;fill:#4c181d;fill-opacity:1;fill-rule:evenodd;stroke-width:0.3;stroke-linecap:round;stroke-linejoin:round;stroke-miterlimit:3"
					d="m 25.929164,66.145832 v -6.349999 c 3.861156,0.319207 4.993045,-1.930703 6.350003,-3.96875 v 4.233333 c -2.255895,3.736465 -4.305109,4.937438 -6.350003,6.085416 z"
					id="path75430"
				/><path
					id="path75432"
					style="opacity:1;fill:#fa5202;fill-opacity:1;fill-rule:evenodd;stroke-width:0.3;stroke-linecap:round;stroke-linejoin:round;stroke-miterlimit:3"
					d="m -28.80651,59.440816 c 0.757766,0.307908 1.688023,0.45334 2.877343,0.355017 v 2.721281 a 2.1166666,2.1166666 0 0 1 -1.5875,0.718303 2.1166666,2.1166666 0 0 1 -2.116666,-2.116667 2.1166666,2.1166666 0 0 1 0.826823,-1.677934 z"
					transform="scale(-1,1)"
				/><path
					style="opacity:1;fill:#1d6ebc;fill-opacity:1;fill-rule:evenodd;stroke-width:0.3;stroke-linecap:round;stroke-linejoin:round;stroke-miterlimit:3"
					d="m 35.454166,66.674999 8.202083,8.202083 5.291667,-8.995833 5.291667,8.995833 7.9375,-7.9375 v 30.95625 l -1.322917,1.322917 h -7.14375 l -0.916543,0.529166 V 110.47304 H 44.979166 V 99.747917 l -0.793749,-0.529168 h -7.143751 l -1.5875,-1.5875 z"
					id="path75434"
				/><path
					style="opacity:1;fill:#4e88b8;fill-opacity:1;fill-rule:evenodd;stroke-width:0.3;stroke-linecap:round;stroke-linejoin:round;stroke-miterlimit:3"
					d="m 44.979166,110.59583 3.96875,-3.96875 3.96875,3.96875 z"
					id="path75436"
				/><path
					style="opacity:1;fill:#83b6df;fill-opacity:1;fill-rule:evenodd;stroke-width:0.3;stroke-linecap:round;stroke-linejoin:round;stroke-miterlimit:3"
					d="M 48.947917,80.16875 54.239583,74.877083 52.3875,71.966667 48.947917,75.40625 45.24375,71.966667 43.65625,74.877083 Z"
					id="path75438"
				/><path
					style="opacity:1;fill:#83b6df;fill-opacity:1;fill-rule:evenodd;stroke-width:0.3;stroke-linecap:round;stroke-linejoin:round;stroke-miterlimit:3"
					d="m 47.360416,68.791666 1.5875,-2.74963 1.434743,2.485046 -1.5875,1.5875 z"
					id="path75440"
				/><path
					style="opacity:1;fill:#83b6df;fill-opacity:1;fill-rule:evenodd;stroke-width:0.3;stroke-linecap:round;stroke-linejoin:round;stroke-miterlimit:3"
					d="m 58.472916,70.643749 3.704167,3.704167 v 3.704166 l -5.55625,-5.55625 z"
					id="path75442"
				/><path
					style="opacity:1;fill:#83b6df;fill-opacity:1;fill-rule:evenodd;stroke-width:0.3;stroke-linecap:round;stroke-linejoin:round;stroke-miterlimit:3"
					d="m 56.091666,74.877082 c 0.0709,0.264584 0,3.704167 0,3.704167 0,0 6.085417,6.085417 6.085417,6.085417 v -3.704167 z"
					id="path75444"
				/><path
					style="opacity:1;fill:#83b6df;fill-opacity:1;fill-rule:evenodd;stroke-width:0.3;stroke-linecap:round;stroke-linejoin:round;stroke-miterlimit:3"
					d="m 35.454166,78.052082 c 0,0 5.55625,-5.55625 5.55625,-5.55625 0,0 -1.852083,-1.852083 -1.852083,-1.852083 l -3.704167,3.704167 z"
					id="path75446"
				/><path
					style="opacity:1;fill:#83b6df;fill-opacity:1;fill-rule:evenodd;stroke-width:0.3;stroke-linecap:round;stroke-linejoin:round;stroke-miterlimit:3"
					d="m 35.454166,84.666666 6.085417,-6.085417 v -3.439583 l -6.085417,6.085416 z"
					id="path75448"
				/><path
					style="opacity:1;fill:#83b6df;fill-opacity:1;fill-rule:evenodd;stroke-width:0.3;stroke-linecap:round;stroke-linejoin:round;stroke-miterlimit:3"
					d="m 48.947916,89.958332 5.291667,-5.291666 v -3.704167 l -5.291667,5.291667 -5.55625,-5.291667 v 3.96875 z"
					id="path75450"
				/><path
					style="opacity:1;fill:#165591;fill-opacity:1;fill-rule:evenodd;stroke-width:0.3;stroke-linecap:round;stroke-linejoin:round;stroke-miterlimit:3"
					d="m 48.947916,103.71667 v -3.70417 l -5.55625,-5.556251 v -5.820833 l 5.55625,5.556249 v -4.233333 l -5.291667,-5.291666 v -6.085417 l 5.291667,5.291667 v -3.704167 l -7.408333,-7.408333 v 11.90625 12.170833 z"
					id="path75452"
				/><path
					style="opacity:1;fill:#9da3a7;fill-opacity:1;fill-rule:evenodd;stroke-width:0.3;stroke-linecap:round;stroke-linejoin:round;stroke-miterlimit:3"
					d="M 37.835416,60.060416 V 37.041666 H 115.09375 V 75.406249 L 111.125,74.342825 109.44761,71.437499 V 46.302083 H 63.499999 l -2.645833,2.645833 v 11.90625 H 39.6875 Z"
					id="path75454"
				/><path
					style="opacity:1;fill:#0e70bc;fill-opacity:1;fill-rule:evenodd;stroke-width:0.3;stroke-linecap:round;stroke-linejoin:round;stroke-miterlimit:3"
					d="m 52.916666,110.59583 c -0.0772,1.64503 -0.04176,3.19491 1.852083,3.175 h 56.620831 c 1.54002,-0.36734 2.07894,-1.14043 2.11667,-2.11666 V 44.979166 C 112.61792,41.39713 110.45766,38.982217 106.62708,38.1 H 83.872916 c -2.148648,0.36008 -3.16579,1.584648 -3.704167,3.174999 V 20.902083 h 6.879167 c -0.01102,-2.069081 1.101609,-3.168766 3.175,-3.439583 h 10.318754 c 1.46408,0.185739 2.76183,0.620533 3.70416,1.5875 l 14.55209,14.552083 1.32291,2.645833 v 83.079164 c -0.1967,2.92959 -2.02977,4.59962 -5.82083,4.7625 H 49.477083 c -2.506789,-0.43891 -3.875998,-1.87598 -4.497917,-3.96875 v -9.525 z"
					id="path75456"
				/><path
					style="opacity:1;fill:#165591;fill-opacity:1;fill-rule:evenodd;stroke-width:0.3;stroke-linecap:round;stroke-linejoin:round;stroke-miterlimit:3"
					d="m 48.947917,103.71667 v -3.70417 l 5.55625,-5.556251 v -5.820833 l -5.55625,5.556249 v -4.233333 l 5.291667,-5.291666 v -6.085417 l -5.291667,5.291667 v -3.704167 l 7.408333,-7.408333 v 11.90625 12.170833 z"
					id="path75458"
				/><path
					style="opacity:1;fill:#4e88b8;fill-opacity:1;fill-rule:evenodd;stroke-width:0.354965;stroke-linecap:round;stroke-linejoin:round;stroke-miterlimit:3"
					d="m 98.425,23.8125 5.55625,3.96875 L 98.425,31.75 Z"
					id="path75460"
				/><path
					style="opacity:1;fill:#4e88b8;fill-opacity:1;fill-rule:evenodd;stroke-width:0.3;stroke-linecap:round;stroke-linejoin:round;stroke-miterlimit:3"
					d="m 114.56458,44.185416 4.23334,-4.233333 v 4.233333 z"
					id="path75462"
				/><path
					style="opacity:1;fill:#4e88b8;fill-opacity:1;fill-rule:evenodd;stroke-width:0.249801;stroke-linecap:round;stroke-linejoin:round;stroke-miterlimit:3"
					d="m 113.50625,62.970833 3.43958,3.43959 3.175,-3.43959 z"
					id="path75464"
				/><path
					style="opacity:1;fill:#4e88b8;fill-opacity:1;fill-rule:evenodd;stroke-width:0.249801;stroke-linecap:round;stroke-linejoin:round;stroke-miterlimit:3"
					d="m 113.50625,84.1375 3.43958,3.43959 3.175,-3.43959 z"
					id="path75466"
				/><path
					style="opacity:1;fill:#83b6df;fill-opacity:1;fill-rule:evenodd;stroke-width:0.3;stroke-linecap:round;stroke-linejoin:round;stroke-miterlimit:3"
					d="m 120.12083,105.30417 5.29167,5.82083 v 11.64167 l -5.29167,-6.08542 z"
					id="path75468"
				/><path
					style="opacity:1;fill:#165591;fill-opacity:1;fill-rule:evenodd;stroke-width:0.3;stroke-linecap:round;stroke-linejoin:round;stroke-miterlimit:3"
					d="m 123.56042,120.65 v -8.73125 l -3.43959,-3.70417 v 8.46667 z"
					id="path75470"
				/><path
					style="opacity:1;fill:#4e88b8;fill-opacity:1;fill-rule:evenodd;stroke-width:0.249801;stroke-linecap:round;stroke-linejoin:round;stroke-miterlimit:3"
					d="m 113.50625,105.03958 3.43958,3.43959 3.175,-3.43959 z"
					id="path75472"
				/><path
					style="opacity:1;fill:#4e88b8;fill-opacity:1;fill-rule:evenodd;stroke-width:0.3;stroke-linecap:round;stroke-linejoin:round;stroke-miterlimit:3"
					d="m 104.51042,114.96146 -3.96875,3.96875 3.96875,3.96875 z"
					id="path75474"
				/><path
					style="opacity:1;fill:#4e88b8;fill-opacity:1;fill-rule:evenodd;stroke-width:0.3;stroke-linecap:round;stroke-linejoin:round;stroke-miterlimit:3"
					d="m 83.34375,114.96146 -3.96875,3.96875 3.96875,3.96875 z"
					id="path75476"
				/><path
					style="opacity:1;fill:#4e88b8;fill-opacity:1;fill-rule:evenodd;stroke-width:0.3;stroke-linecap:round;stroke-linejoin:round;stroke-miterlimit:3"
					d="m 62.044792,114.96146 -3.96875,3.96875 3.96875,3.96875 z"
					id="path75478"
				/><path
					style="opacity:1;fill:#0e70bc;fill-opacity:1;fill-rule:evenodd;stroke-width:0.3;stroke-linecap:round;stroke-linejoin:round;stroke-miterlimit:3"
					d="m 98.425,74.877082 h 6.08542 V 53.181249 c -0.51312,-1.375774 -1.23395,-2.473434 -2.64584,-2.645833 H 68.262499 c -1.878521,0.291813 -3.185201,1.251338 -3.439583,3.439583 v 35.189583 c 0.559971,1.886979 0.298284,3.743315 3.96875,3.96875 h 32.279164 v 6.879168 c 0.23143,1.46432 -0.56546,1.66433 -1.587498,1.5875 h -9.789583 v 4.23333 H 105.83333 V 82.020832 H 92.604166 V 77.522916 H 77.522916 V 66.674999 c 0.51597,-1.133623 1.300947,-1.80826 2.645833,-1.527572 h 15.610416 c 1.868708,0.132306 2.853731,0.905087 2.585906,2.585905 z"
					id="path75480"
				/><path
					style="opacity:1;fill:#4e88b8;fill-opacity:1;fill-rule:evenodd;stroke-width:0.3;stroke-linecap:round;stroke-linejoin:round;stroke-miterlimit:3"
					d="m 89.032292,82.153125 3.96875,3.96875 -3.96875,3.96875 z"
					id="path75482"
				/><path
					style="opacity:1;fill:#4e88b8;fill-opacity:1;fill-rule:evenodd;stroke-width:0.3;stroke-linecap:round;stroke-linejoin:round;stroke-miterlimit:3"
					d="m 68.791666,80.697916 v -5.291667 h 5.291666 z"
					id="path75484"
				/><path
					style="opacity:1;fill:#4e88b8;fill-opacity:1;fill-rule:evenodd;stroke-width:0.3;stroke-linecap:round;stroke-linejoin:round;stroke-miterlimit:3"
					d="M 74.083332,64.822916 V 59.531249 H 68.791666 Z"
					id="path75486"
				/><path
					style="opacity:1;fill:#4e88b8;fill-opacity:1;fill-rule:evenodd;stroke-width:0.3;stroke-linecap:round;stroke-linejoin:round;stroke-miterlimit:3"
					d="m 89.032292,54.239583 3.96875,3.96875 -3.96875,3.96875 z"
					id="path75488"
				/><path
					style="opacity:1;fill:#165591;fill-opacity:1;fill-rule:evenodd;stroke-width:0.3;stroke-linecap:round;stroke-linejoin:round;stroke-miterlimit:3"
					d="m 53.974999,113.77083 c -0.95015,-0.60625 -0.975888,-1.2298 -1.0693,-1.85208 v -1.32292 h -7.926533 v 3.175 z"
					id="path75490"
				/><rect
					style="opacity:1;fill:#165591;fill-opacity:1;fill-rule:evenodd;stroke-width:0.3;stroke-linecap:round;stroke-linejoin:round;stroke-miterlimit:3"
					id="rect75492"
					width="3.1750016"
					height="10.318744"
					x="61.912498"
					y="113.77084"
				/><rect
					style="opacity:1;fill:#165591;fill-opacity:1;fill-rule:evenodd;stroke-width:0.3;stroke-linecap:round;stroke-linejoin:round;stroke-miterlimit:3"
					id="rect75494"
					width="3.1750016"
					height="10.318744"
					x="83.34375"
					y="113.77084"
				/><rect
					style="opacity:1;fill:#165591;fill-opacity:1;fill-rule:evenodd;stroke-width:0.3;stroke-linecap:round;stroke-linejoin:round;stroke-miterlimit:3"
					id="rect75496"
					width="3.1750016"
					height="10.318744"
					x="104.51041"
					y="113.77084"
				/><rect
					style="opacity:1;fill:#165591;fill-opacity:1;fill-rule:evenodd;stroke-width:0.3;stroke-linecap:round;stroke-linejoin:round;stroke-miterlimit:3"
					id="rect75498"
					width="6.614583"
					height="1.8520833"
					x="113.50625"
					y="103.1875"
				/><rect
					style="opacity:1;fill:#165591;fill-opacity:1;fill-rule:evenodd;stroke-width:0.3;stroke-linecap:round;stroke-linejoin:round;stroke-miterlimit:3"
					id="rect75500"
					width="6.614583"
					height="1.8520833"
					x="113.50625"
					y="82.417709"
				/><rect
					style="opacity:1;fill:#165591;fill-opacity:1;fill-rule:evenodd;stroke-width:0.3;stroke-linecap:round;stroke-linejoin:round;stroke-miterlimit:3"
					id="rect75502"
					width="6.614583"
					height="1.8520833"
					x="113.50625"
					y="61.118752"
				/><path
					style="opacity:1;fill:#165591;fill-opacity:1;fill-rule:evenodd;stroke-width:0.3;stroke-linecap:round;stroke-linejoin:round;stroke-miterlimit:3"
					d="m 113.50625,44.979166 6.61458,-6.614581 v -2.116669 c 0,0 -0.45827,-1.058333 -0.45827,-0.79375 0,0.264584 -7.06582,7.065814 -7.06582,7.065814 z"
					id="path75504"
				/><path
					style="opacity:1;fill:#165591;fill-opacity:1;fill-rule:evenodd;stroke-width:0.3;stroke-linecap:round;stroke-linejoin:round;stroke-miterlimit:3"
					d="M 98.424999,38.1 V 17.4625 h -2.38125 V 38.1 Z"
					id="path75506"
				/><path
					style="opacity:1;fill:#165591;fill-opacity:1;fill-rule:evenodd;stroke-width:0.3;stroke-linecap:round;stroke-linejoin:round;stroke-miterlimit:3"
					d="M 89.164582,65.087499 V 50.535416 h -2.38125 v 14.612011 z"
					id="path75508"
				/><path
					style="opacity:1;fill:#165591;fill-opacity:1;fill-rule:evenodd;stroke-width:0.3;stroke-linecap:round;stroke-linejoin:round;stroke-miterlimit:3"
					d="m 77.522916,71.702082 v -3.439583 l -12.7,-12.7 v 3.704167 z"
					id="path75510"
				/><path
					style="opacity:1;fill:#165591;fill-opacity:1;fill-rule:evenodd;stroke-width:0.3;stroke-linecap:round;stroke-linejoin:round;stroke-miterlimit:3"
					d="m 64.822916,88.10625 v -3.439583 l 12.7,-12.7 v 3.704167 z"
					id="path75512"
				/><path
					style="opacity:1;fill:#165591;fill-opacity:1;fill-rule:evenodd;stroke-width:0.31008;stroke-linecap:round;stroke-linejoin:round;stroke-miterlimit:3"
					d="M 89.164582,93.069311 V 77.522917 h -2.38125 v 15.610416 z"
					id="path75514"
				/><rect
					style="opacity:1;fill:#165591;fill-opacity:1;fill-rule:evenodd;stroke-width:0.3;stroke-linecap:round;stroke-linejoin:round;stroke-miterlimit:3"
					id="rect75516"
					width="3.4395833"
					height="4.7624998"
					x="101.07083"
					y="94.985413"
				/><rect
					style="opacity:1;fill:#165591;fill-opacity:1;fill-rule:evenodd;stroke-width:0.311325;stroke-linecap:round;stroke-linejoin:round;stroke-miterlimit:3"
					id="rect75518"
					width="4.7624998"
					height="3.7041616"
					x="94.720833"
					y="101.6"
				/><path
					style="opacity:1;fill:#83b6df;fill-opacity:1;fill-rule:evenodd;stroke-width:0.319801;stroke-linecap:round;stroke-linejoin:round;stroke-miterlimit:3"
					d="m 120.12083,84.137503 5.29167,6.085414 v 13.758333 l -5.29167,-6.085417 z"
					id="path75520"
				/><path
					style="opacity:1;fill:#165591;fill-opacity:1;fill-rule:evenodd;stroke-width:0.319801;stroke-linecap:round;stroke-linejoin:round;stroke-miterlimit:3"
					d="M 123.56042,101.86458 V 91.016667 l -3.43959,-3.57188 v 10.451046 z"
					id="path75522"
				/><path
					style="opacity:1;fill:#83b6df;fill-opacity:1;fill-rule:evenodd;stroke-width:0.319801;stroke-linecap:round;stroke-linejoin:round;stroke-miterlimit:3"
					d="m 120.12083,62.970823 5.29167,6.085414 v 13.758312 l -5.29167,-6.085396 z"
					id="path75524"
				/><path
					style="opacity:1;fill:#165591;fill-opacity:1;fill-rule:evenodd;stroke-width:0.319801;stroke-linecap:round;stroke-linejoin:round;stroke-miterlimit:3"
					d="M 123.56042,80.697891 V 69.849987 l -3.43959,-3.57188 v 10.451046 z"
					id="path75526"
				/><path
					style="opacity:1;fill:#83b6df;fill-opacity:1;fill-rule:evenodd;stroke-width:0.319801;stroke-linecap:round;stroke-linejoin:round;stroke-miterlimit:3"
					d="M 120.12083,38.629167 125.4125,44.45 v 16.668702 l -5.29167,-6.085396 z"
					id="path75528"
				/><path
					style="opacity:1;fill:#165591;fill-opacity:1;fill-rule:evenodd;stroke-width:0.319801;stroke-linecap:round;stroke-linejoin:round;stroke-miterlimit:3"
					d="M 123.56042,59.002044 V 45.24375 l -3.43959,-3.704167 v 13.493723 z"
					id="path75530"
				/><path
					style="opacity:1;fill:#9da3a7;fill-opacity:1;fill-rule:evenodd;stroke-width:0.3;stroke-linecap:round;stroke-linejoin:round;stroke-miterlimit:3"
					d="m 69.585416,110.33125 c 0.977131,-1.11363 2.128389,-1.76296 3.439583,-1.98584 H 86.254166 V 101.6 h -11.1125 c -4.61999,2.28589 -4.961047,5.53724 -5.55625,8.73125 z"
					id="path75532"
				/><path
					style="opacity:1;fill:#8d8d8e;fill-opacity:1;fill-rule:evenodd;stroke-width:0.3;stroke-linecap:round;stroke-linejoin:round;stroke-miterlimit:3"
					d="m 86.254167,108.47917 -10e-7,-6.87917 h -3.96875 c -4.740802,1.9288 -8.197301,4.3742 -10.847917,7.14375 0.781678,-0.20701 1.587502,-0.26458 2.381251,-0.26458 z"
					id="path75534"
				/><path
					style="opacity:1;fill:#8d8d8e;fill-opacity:1;fill-rule:evenodd;stroke-width:0.3;stroke-linecap:round;stroke-linejoin:round;stroke-miterlimit:3"
					d="m 80.433332,70.643749 v -0.79375 c 0.09279,-0.756901 0.92988,-1.065538 1.852084,-1.322917 h 11.641666 c 0.896712,0.17554 1.409888,0.720092 1.5875,1.5875 v 5.820834 c 0.258236,0.792876 0.306734,1.789898 1.5875,1.5875 H 107.95 c 1.53935,0.352617 2.15738,1.767675 2.38125,2.38125 v 29.368754 c -0.39966,0.95355 -1.07394,1.76694 -3.175,1.85208 H 89.693749 v -2.64583 l 1.322919,-1.32292 H 105.83333 V 82.020832 H 92.604166 v -7.9375 h -11.90625 z"
					id="path75536"
				/><path
					style="opacity:1;fill:#9da3a7;fill-opacity:1;fill-rule:evenodd;stroke-width:0.3;stroke-linecap:round;stroke-linejoin:round;stroke-miterlimit:3"
					d="m 89.693749,108.47917 v -3.43959 h 13.229171 c 1.12203,-0.21829 1.37229,-0.8937 1.5875,-1.5875 V 84.666666 c -0.49607,-0.889414 -1.32019,-1.023918 -2.11667,-1.222058 h -9.789584 c -1.167845,0.06421 -1.7741,-0.453527 -1.68836,-1.688359 v -2.645833 c 0.01279,-1.560043 -0.883827,-1.631722 -1.751224,-1.751224 h -8.73125 v -6.715443 h 11.377084 c 0.947029,-0.07979 1.418872,0.329411 1.322916,1.322917 v 6.085416 c 0.180958,1.385569 0.797352,1.700205 1.5875,1.5875 H 106.3625 c 1.73942,0.282375 1.51935,1.519733 1.52757,2.645834 v 24.341664 c 0.003,0.91325 -0.0783,1.75659 -1.0693,1.85209 z"
					id="path75538"
				/><path
					style="opacity:1;fill:#8d8d8e;fill-opacity:1;fill-rule:evenodd;stroke-width:0.3;stroke-linecap:round;stroke-linejoin:round;stroke-miterlimit:3"
					d="m 113.50625,76.464582 c -3.4223,-0.430566 -5.28356,-2.255632 -6.08542,-5.027083 v -22.225 c -0.41635,-1.43136 -1.75211,-1.687886 -3.175,-1.833086 H 65.352083 c -1.411359,-0.0054 -2.516318,0.38567 -2.38125,2.38125 v 10.564336 c -0.498631,1.771088 -1.428436,2.27704 -2.645834,2.645834 H 40.745833 c -2.48239,-0.370944 -2.29466,-1.799862 -2.910417,-2.910417 h 19.84375 c 2.266347,0.122793 2.106673,-1.040052 2.116667,-2.116667 V 47.095833 c 0.593635,-1.865299 2.026947,-2.846491 4.582718,-2.645834 h 42.513119 c 3.06898,0.33231 3.27769,1.876033 3.43958,3.439584 v 22.489583 c 0.51007,1.238055 0.63471,2.602459 3.175,3.175 z"
					id="path75540"
				/><path
					style="opacity:1;fill:#2a292e;fill-opacity:1;fill-rule:evenodd;stroke-width:0.3;stroke-linecap:round;stroke-linejoin:round;stroke-miterlimit:3"
					d="m 41.274999,50.535416 h 5.291667 v -1.852083 h -3.439583 v -3.439584 h -1.852084 z"
					id="path75542"
				/><path
					style="opacity:1;fill:#2a292e;fill-opacity:1;fill-rule:evenodd;stroke-width:0.3;stroke-linecap:round;stroke-linejoin:round;stroke-miterlimit:3"
					d="m 49.873958,50.535416 h 5.291667 v -1.852083 h -3.439583 v -3.439584 h -1.852084 z"
					id="path75544"
				/><path
					style="opacity:1;fill:#2a292e;fill-opacity:1;fill-rule:evenodd;stroke-width:0.3;stroke-linecap:round;stroke-linejoin:round;stroke-miterlimit:3"
					d="m 49.873958,59.53125 h 5.291667 v -1.852083 h -3.439583 v -3.439584 h -1.852084 z"
					id="path75546"
				/><path
					style="opacity:1;fill:#2a292e;fill-opacity:1;fill-rule:evenodd;stroke-width:0.3;stroke-linecap:round;stroke-linejoin:round;stroke-miterlimit:3"
					d="m 41.274999,59.53125 h 5.291667 v -1.852083 h -3.439583 v -3.439584 h -1.852084 z"
					id="path75548"
				/><path
					style="opacity:1;fill:#0e70bc;fill-opacity:1;fill-rule:evenodd;stroke-width:0.3;stroke-linecap:round;stroke-linejoin:round;stroke-miterlimit:3"
					d="M 80.168749,20.902083 H 37.835416 V 38.89375 c 0.268731,1.278028 1.011946,2.118391 2.38125,2.381249 h 39.952083 z"
					id="path75550"
				/><path
					style="opacity:1;fill:#165591;fill-opacity:1;fill-rule:evenodd;stroke-width:0.298071;stroke-linecap:round;stroke-linejoin:round;stroke-miterlimit:3"
					d="M 77.258333,41.275 V 20.902083 h -2.38125 V 41.275 Z"
					id="path75552"
				/><path
					style="opacity:1;fill:#165591;fill-opacity:1;fill-rule:evenodd;stroke-width:0.298071;stroke-linecap:round;stroke-linejoin:round;stroke-miterlimit:3"
					d="M 56.091667,41.275 V 20.902083 h -2.38125 V 41.275 Z"
					id="path75554"
				/><path
					style="opacity:1;fill:#4e88b8;fill-opacity:1;fill-rule:evenodd;stroke-width:0.354965;stroke-linecap:round;stroke-linejoin:round;stroke-miterlimit:3"
					d="m 77.258333,23.8125 5.55625,3.96875 -5.55625,3.96875 z"
					id="path75556"
				/><path
					style="opacity:1;fill:#4e88b8;fill-opacity:1;fill-rule:evenodd;stroke-width:0.354965;stroke-linecap:round;stroke-linejoin:round;stroke-miterlimit:3"
					d="m 56.091667,23.8125 5.55625,3.96875 -5.55625,3.96875 z"
					id="path75558"
				/><path
					style="opacity:1;fill:#0e70bc;fill-opacity:1;fill-rule:evenodd;stroke-width:0.3;stroke-linecap:round;stroke-linejoin:round;stroke-miterlimit:3"
					d="M 6.8791666,24.341666 9.7895832,26.9875 18.520833,15.875 27.516666,26.9875 37.835416,16.66875 V 11.1125 H 9.5249999 C 7.6240413,11.20922 6.689462,12.134241 6.8791667,14.022916 Z"
					id="path75560"
				/><path
					style="opacity:1;fill:#82b7e0;fill-opacity:0.513725;fill-rule:evenodd;stroke-width:0.3;stroke-linecap:round;stroke-linejoin:round;stroke-miterlimit:3"
					d="m 33.602083,17.991666 2.38125,-2.38125 -2.38125,-2.381249 z"
					id="path75562"
				/><path
					style="opacity:1;fill:#165591;fill-opacity:1;fill-rule:evenodd;stroke-width:0.3;stroke-linecap:round;stroke-linejoin:round;stroke-miterlimit:3"
					d="m 33.602083,20.902083 -2.38125,2.38125 V 11.1125 h 2.38125 z"
					id="path75564"
				/><path
					style="opacity:1;fill:#9da3a7;fill-opacity:1;fill-rule:evenodd;stroke-width:0.3;stroke-linecap:round;stroke-linejoin:round;stroke-miterlimit:3"
					d="M 20.902083,2.38125 H 37.835416 L 31.75,8.4666667 Z"
					id="path75566"
				/><path
					style="opacity:1;fill:#83b6df;fill-opacity:1;fill-rule:evenodd;stroke-width:0.3;stroke-linecap:round;stroke-linejoin:round;stroke-miterlimit:3"
					d="M 30.427083,2.38125 H 26.722916 L 24.60625,4.4979166 26.9875,5.8208333 Z"
					id="path75568"
				/><path
					style="opacity:1;fill:#0e70bc;fill-opacity:1;fill-rule:evenodd;stroke-width:0.3;stroke-linecap:round;stroke-linejoin:round;stroke-miterlimit:3"
					d="m 29.36875,7.14375 4.7625,-4.7625 H 30.427083 L 26.9875,5.8208333 Z"
					id="path75570"
				/><path
					style="opacity:1;fill:#0e70bc;fill-opacity:1;fill-rule:evenodd;stroke-width:0.3;stroke-linecap:round;stroke-linejoin:round;stroke-miterlimit:3"
					d="m 101.86458,14.2875 4.7625,2.38125 13.75834,13.758333 5.29166,-25.3999997 h -15.875 z"
					id="path75572"
				/><path
					style="opacity:1;fill:#4e88b8;fill-opacity:1;fill-rule:evenodd;stroke-width:0.3;stroke-linecap:round;stroke-linejoin:round;stroke-miterlimit:3"
					d="m 109.80208,5.0270833 h 3.96875 L 124.08958,12.7 123.29583,16.139583 109.27292,5.2916666 109.80208,5.0270833 h 3.96875 z"
					id="path75574"
				/><path
					style="opacity:1;fill:#4e88b8;fill-opacity:1;fill-rule:evenodd;stroke-width:0.3;stroke-linecap:round;stroke-linejoin:round;stroke-miterlimit:3"
					d="M 106.89167,8.4666666 122.50208,20.6375 121.70833,24.077083 105.03958,10.583333 Z"
					id="path75576"
				/><path
					style="opacity:1;fill:#83b6df;fill-opacity:1;fill-rule:evenodd;stroke-width:0.3;stroke-linecap:round;stroke-linejoin:round;stroke-miterlimit:3"
					d="m 98.160415,14.2875 h 3.704165 l 7.9375,-9.2604167 h 15.875 L 126.20625,2.38125 H 107.95 Z"
					id="path75578"
				/><path
					style="opacity:1;fill:#4e88b8;fill-opacity:1;fill-rule:evenodd;stroke-width:0.3;stroke-linecap:round;stroke-linejoin:round;stroke-miterlimit:3"
					d="M 44.185416,15.610416 82.020832,14.552083 91.281249,3.96875 h -47.625 L 42.333333,15.875 h 1.322916 z"
					id="path75580"
				/><path
					style="opacity:1;fill:#9da3a7;fill-opacity:1;fill-rule:evenodd;stroke-width:0.3;stroke-linecap:round;stroke-linejoin:round;stroke-miterlimit:3"
					d="M 47.889583,20.902083 H 44.185416 V 13.49375 c 0.441506,-1.217137 1.426025,-1.759374 2.910417,-1.68033 h 33.337499 l 9.525,-9.5249999 h 7.9375 L 83.079166,17.105087 H 47.889583 Z"
					id="path75582"
				/><path
					style="opacity:1;fill:#0e70bc;fill-opacity:1;fill-rule:evenodd;stroke-width:0.3;stroke-linecap:round;stroke-linejoin:round;stroke-miterlimit:3"
					d="m 37.835416,20.902083 h 6.35 V 6.8791666 c 0.272222,-1.1821816 1.200053,-1.7652 2.38125,-2.1166667 h 44.45 L 93.397915,2.1166666 H 40.481249 c -1.600354,0.4413473 -2.467271,1.4225475 -2.645833,2.9104167 z"
					id="path75584"
				/><rect
					style="opacity:1;fill:#9da3a7;fill-opacity:1;fill-rule:evenodd;stroke-width:0.3;stroke-linecap:round;stroke-linejoin:round;stroke-miterlimit:3"
					id="rect75586"
					width="2.9104166"
					height="2.6458333"
					x="50.535416"
					y="2.1166666"
				/><rect
					style="opacity:1;fill:#165591;fill-opacity:1;fill-rule:evenodd;stroke-width:0.293103;stroke-linecap:round;stroke-linejoin:round;stroke-miterlimit:3"
					id="rect75588"
					width="2.7781246"
					height="2.6458333"
					x="53.445835"
					y="2.1166666"
				/><rect
					style="opacity:1;fill:#9da3a7;fill-opacity:1;fill-rule:evenodd;stroke-width:0.3;stroke-linecap:round;stroke-linejoin:round;stroke-miterlimit:3"
					id="rect75590"
					width="2.9104166"
					height="2.6458333"
					x="59.266666"
					y="2.1166666"
				/><rect
					style="opacity:1;fill:#165591;fill-opacity:1;fill-rule:evenodd;stroke-width:0.293103;stroke-linecap:round;stroke-linejoin:round;stroke-miterlimit:3"
					id="rect75592"
					width="2.7781246"
					height="2.6458333"
					x="62.177086"
					y="2.1166666"
				/><rect
					style="opacity:1;fill:#9da3a7;fill-opacity:1;fill-rule:evenodd;stroke-width:0.3;stroke-linecap:round;stroke-linejoin:round;stroke-miterlimit:3"
					id="rect75594"
					width="2.9104166"
					height="2.6458333"
					x="68.130211"
					y="2.1166666"
				/><rect
					style="opacity:1;fill:#165591;fill-opacity:1;fill-rule:evenodd;stroke-width:0.293103;stroke-linecap:round;stroke-linejoin:round;stroke-miterlimit:3"
					id="rect75596"
					width="2.7781246"
					height="2.6458333"
					x="71.040634"
					y="2.1166666"
				/><rect
					style="opacity:1;fill:#9da3a7;fill-opacity:1;fill-rule:evenodd;stroke-width:0.3;stroke-linecap:round;stroke-linejoin:round;stroke-miterlimit:3"
					id="rect75598"
					width="2.9104166"
					height="2.6458333"
					x="76.993752"
					y="2.1166666"
				/><rect
					style="opacity:1;fill:#165591;fill-opacity:1;fill-rule:evenodd;stroke-width:0.293103;stroke-linecap:round;stroke-linejoin:round;stroke-miterlimit:3"
					id="rect75600"
					width="2.7781246"
					height="2.6458333"
					x="79.904175"
					y="2.1166666"
				/></g
			><g id="g75374"
				><path
					style="opacity:1;fill:#83b6df;fill-opacity:1;fill-rule:evenodd;stroke-width:0.3;stroke-linecap:round;stroke-linejoin:round;stroke-miterlimit:3"
					d="m 14.022916,119.85625 v -2.91042 H 11.1125 Z"
					id="path30896"
				/><path
					style="opacity:1;fill:#83b6df;fill-opacity:1;fill-rule:evenodd;stroke-width:0.3;stroke-linecap:round;stroke-linejoin:round;stroke-miterlimit:3"
					d="m 23.283333,119.85625 2.910417,-2.91042 h -2.910417 z"
					id="path30898"
				/><path
					style="opacity:1;fill:#165591;fill-opacity:1;fill-rule:evenodd;stroke-width:0.3;stroke-linecap:round;stroke-linejoin:round;stroke-miterlimit:3"
					d="m 2.1166666,28.839583 v -4.7625 l 7.6729166,7.9375 8.7312498,-11.377083 8.995833,11.377083 7.672917,-7.9375 0,12.964583 -33.0729164,0 z"
					id="path34046"
				/><path
					style="opacity:1;fill:#0e70bc;fill-opacity:1;fill-rule:evenodd;stroke-width:0.3;stroke-linecap:round;stroke-linejoin:round;stroke-miterlimit:3"
					d="m 23.283333,121.97292 v -10.58334 l 2.91045,-2.91045 v -3.17496 h -2.91045 v -6.614588 l 2.910417,-2.910417 v -2.910416 h -2.910417 v -6.35 L 26.19375,83.608332 V 80.697916 H 23.283333 V 75.670832 L 26.19375,72.760416 V 70.11458 h 2.910416 v -3.439581 l 6.085417,-6.085416 v -32.54375 l -7.408333,7.9375 -9.260417,-11.377083 -8.7312498,11.377083 -7.6729166,-7.9375 v 32.808333 l 6.35,6.085416 v 3.175 l 5.5562494,5.820834 v 5.027083 H 11.1125 v 2.910417 l 2.910416,2.910416 v 6.085417 H 11.1125 v 3.175 l 2.910416,2.910416 v 6.350005 H 11.1125 v 3.175 l 2.910416,2.91041 v 10.58334 z"
					id="path32416"
				/><path
					style="opacity:1;fill:#165591;fill-opacity:1;fill-rule:evenodd;stroke-width:0.3;stroke-linecap:round;stroke-linejoin:round;stroke-miterlimit:3"
					d="m 17.4625,112.18333 1.058333,-1.05833 1.058333,1.05833 v 10.31875 H 17.4625 Z"
					id="path33260"
				/><path
					style="opacity:1;fill:#83b6df;fill-rule:evenodd;stroke-width:0.3;stroke-linecap:round;stroke-linejoin:round;stroke-miterlimit:3;fill-opacity:1"
					d="m 14.022916,121.97292 h 9.260417 v 1.32291 l -2.38125,2.38125 -2.38125,-2.38125 -2.38125,2.38125 -2.116667,-2.11666 z"
					id="path30081"
				/><path
					style="opacity:1;fill:#83b6df;fill-opacity:1;fill-rule:evenodd;stroke-width:0.3;stroke-linecap:round;stroke-linejoin:round;stroke-miterlimit:3"
					d="m 11.1125,108.47917 v -3.175 H 8.4666662 Z"
					id="path30900"
				/><path
					style="opacity:1;fill:#83b6df;fill-opacity:1;fill-rule:evenodd;stroke-width:0.3;stroke-linecap:round;stroke-linejoin:round;stroke-miterlimit:3"
					d="m 26.19375,108.47917 v -2.91042 h 2.645833 z"
					id="path30902"
				/><path
					style="opacity:1;fill:#83b6df;fill-opacity:1;fill-rule:evenodd;stroke-width:0.3;stroke-linecap:round;stroke-linejoin:round;stroke-miterlimit:3"
					d="M 10.847917,95.779165 V 92.868749 H 8.2020832 Z"
					id="path30904"
				/><path
					style="opacity:1;fill:#83b6df;fill-opacity:1;fill-rule:evenodd;stroke-width:0.3;stroke-linecap:round;stroke-linejoin:round;stroke-miterlimit:3"
					d="m 26.19375,95.779167 0,-2.910417 h 2.645833 z"
					id="path30906"
				/><path
					style="opacity:1;fill:#83b6df;fill-opacity:1;fill-rule:evenodd;stroke-width:0.3;stroke-linecap:round;stroke-linejoin:round;stroke-miterlimit:3"
					d="M 11.1125,83.872916 V 80.962499 H 7.9374999 Z"
					id="path30908"
				/><path
					style="opacity:1;fill:#83b6df;fill-opacity:1;fill-rule:evenodd;stroke-width:0.3;stroke-linecap:round;stroke-linejoin:round;stroke-miterlimit:3"
					d="m 26.19375,83.608333 0,-2.910417 h 2.910416 z"
					id="path30910"
				/><path
					style="opacity:1;fill:#83b6df;fill-opacity:1;fill-rule:evenodd;stroke-width:0.355756;stroke-linecap:round;stroke-linejoin:round;stroke-miterlimit:3"
					d="m 17.4625,75.935417 h 2.38125 l -1.190626,1.322915 z"
					id="path30912"
				/><path
					style="opacity:1;fill:#83b6df;fill-opacity:1;fill-rule:evenodd;stroke-width:0.355756;stroke-linecap:round;stroke-linejoin:round;stroke-miterlimit:3"
					d="m 17.4625,70.114583 h 2.38125 l -1.190626,1.322915 z"
					id="path30914"
				/><path
					style="opacity:1;fill:#83b6df;fill-opacity:1;fill-rule:evenodd;stroke-width:0.355756;stroke-linecap:round;stroke-linejoin:round;stroke-miterlimit:3"
					d="m 17.4625,64.161459 h 2.38125 l -1.190626,1.322915 z"
					id="path30916"
				/><path
					style="opacity:1;fill:#83b6df;fill-opacity:1;fill-rule:evenodd;stroke-width:0.293103;stroke-linecap:round;stroke-linejoin:round;stroke-miterlimit:3"
					d="M 11.244792,73.024999 V 70.114582 H 8.4666667 Z"
					id="path30918"
				/><path
					style="opacity:1;fill:#83b6df;fill-opacity:1;fill-rule:evenodd;stroke-width:0.3;stroke-linecap:round;stroke-linejoin:round;stroke-miterlimit:3"
					d="m 26.19375,72.760416 2.910417,-2.645833 -2.910417,-10e-7 z"
					id="path30920"
				/><path
					style="opacity:1;fill:#1b496c;fill-opacity:0.513725;fill-rule:evenodd;stroke-width:0.3;stroke-linecap:round;stroke-linejoin:round;stroke-miterlimit:3"
					d="m 18.785416,60.060416 6.879167,-7.14375 v -3.175 l -6.879167,6.879167 -7.143749,-6.614584 v 2.910417 z"
					id="path34042"
				/><path
					style="opacity:1;fill:#1b496c;fill-opacity:0.513725;fill-rule:evenodd;stroke-width:0.3;stroke-linecap:round;stroke-linejoin:round;stroke-miterlimit:3"
					d="M 18.785416,52.916667 28.839583,42.597917 V 39.6875 L 18.785416,49.477084 8.4666667,39.6875 v 2.910417 z"
					id="path34044"
				/><path
					style="opacity:1;fill:#83b6df;fill-opacity:1;fill-rule:evenodd;stroke-width:0.3;stroke-linecap:round;stroke-linejoin:round;stroke-miterlimit:3"
					d="M 2.1166666,40.481249 7.1437499,35.189583 5.5562499,33.3375 2.1166666,36.777083 Z"
					id="path34156"
				/><path
					style="opacity:1;fill:#83b6df;fill-opacity:1;fill-rule:evenodd;stroke-width:0.3;stroke-linecap:round;stroke-linejoin:round;stroke-miterlimit:3"
					d="m 2.1166666,34.13125 2.38125,-1.852084 -2.38125,-2.38125 z"
					id="path34212"
				/><path
					style="opacity:1;fill:#83b6df;fill-opacity:1;fill-rule:evenodd;stroke-width:0.3;stroke-linecap:round;stroke-linejoin:round;stroke-miterlimit:3"
					d="m 35.189599,40.481249 -5.027086,-5.291666 1.587501,-1.852083 3.439585,3.439583 z"
					id="path34214"
				/><path
					style="opacity:1;fill:#83b6df;fill-opacity:1;fill-rule:evenodd;stroke-width:0.3;stroke-linecap:round;stroke-linejoin:round;stroke-miterlimit:3"
					d="m 35.189599,34.13125 -2.381251,-1.852084 2.381251,-2.38125 z"
					id="path34216"
				/><path
					style="opacity:1;fill:#83b6df;fill-opacity:1;fill-rule:evenodd;stroke-width:0.3;stroke-linecap:round;stroke-linejoin:round;stroke-miterlimit:3"
					d="m 18.520833,38.364583 5.820833,-6.35 -1.5875,-2.116667 -3.96875,4.233334 L 14.552083,29.897916 12.7,32.279166 Z"
					id="path34944"
				/><path
					style="opacity:1;fill:#83b6df;fill-opacity:1;fill-rule:evenodd;stroke-width:0.3;stroke-linecap:round;stroke-linejoin:round;stroke-miterlimit:3"
					d="M 18.520833,30.95625 21.166666,28.045833 18.520833,24.60625 15.875,28.045833 Z"
					id="path34946"
				/><path
					style="opacity:1;fill:#4c181d;fill-opacity:1;fill-rule:evenodd;stroke-width:0.3;stroke-linecap:round;stroke-linejoin:round;stroke-miterlimit:3"
					d="M 11.377083,66.145832 V 59.795833 C 7.515929,60.11504 6.3840415,57.86513 5.0270833,55.827083 v 4.233333 c 2.2558948,3.736465 4.3051072,4.937438 6.3499997,6.085416 z"
					id="path34950"
				/><path
					id="path35166"
					style="opacity:1;fill:#fa5202;fill-opacity:1;fill-rule:evenodd;stroke-width:0.3;stroke-linecap:round;stroke-linejoin:round;stroke-miterlimit:3"
					d="M 8.5007731 59.440816 A 2.1166666 2.1166666 0 0 0 7.6729167 61.11875 A 2.1166666 2.1166666 0 0 0 9.7895833 63.235417 A 2.1166666 2.1166666 0 0 0 11.377083 62.517114 L 11.377083 59.795833 C 10.188229 59.894118 9.2583778 59.748476 8.5007731 59.440816 z "
				/><path
					style="opacity:1;fill:#4c181d;fill-opacity:1;fill-rule:evenodd;stroke-width:0.3;stroke-linecap:round;stroke-linejoin:round;stroke-miterlimit:3"
					d="m 25.929164,66.145832 v -6.349999 c 3.861156,0.319207 4.993045,-1.930703 6.350003,-3.96875 v 4.233333 c -2.255895,3.736465 -4.305109,4.937438 -6.350003,6.085416 z"
					id="path35220"
				/><path
					id="circle35222"
					style="opacity:1;fill:#fa5202;fill-opacity:1;fill-rule:evenodd;stroke-width:0.3;stroke-linecap:round;stroke-linejoin:round;stroke-miterlimit:3"
					d="M -28.80651 59.440816 C -28.048744 59.748724 -27.118487 59.894156 -25.929167 59.795833 L -25.929167 62.517114 A 2.1166666 2.1166666 0 0 1 -27.516667 63.235417 A 2.1166666 2.1166666 0 0 1 -29.633333 61.11875 A 2.1166666 2.1166666 0 0 1 -28.80651 59.440816 z "
					transform="scale(-1,1)"
				/><path
					style="opacity:1;fill:#1d6ebc;fill-opacity:1;fill-rule:evenodd;stroke-width:0.3;stroke-linecap:round;stroke-linejoin:round;stroke-miterlimit:3"
					d="m 35.454166,66.674999 8.202083,8.202083 5.291667,-8.995833 5.291667,8.995833 7.9375,-7.9375 v 30.95625 l -1.322917,1.322917 h -7.14375 l -0.916543,0.529166 v 10.725125 h -7.814707 l 0,-10.725123 -0.793749,-0.529168 h -7.143751 l -1.5875,-1.5875 z"
					id="path42898"
				/><path
					style="opacity:1;fill:#4e88b8;fill-opacity:1;fill-rule:evenodd;stroke-width:0.3;stroke-linecap:round;stroke-linejoin:round;stroke-miterlimit:3"
					d="m 44.979166,110.59583 3.96875,-3.96875 3.96875,3.96875 z"
					id="path30922"
				/><path
					style="opacity:1;fill:#83b6df;fill-opacity:1;fill-rule:evenodd;stroke-width:0.3;stroke-linecap:round;stroke-linejoin:round;stroke-miterlimit:3"
					d="M 48.947917,80.16875 54.239583,74.877083 52.3875,71.966667 48.947917,75.40625 45.24375,71.966667 43.65625,74.877083 Z"
					id="path43680"
				/><path
					style="opacity:1;fill:#83b6df;fill-opacity:1;fill-rule:evenodd;stroke-width:0.3;stroke-linecap:round;stroke-linejoin:round;stroke-miterlimit:3"
					d="m 47.360416,68.791666 1.5875,-2.74963 1.434743,2.485046 -1.5875,1.5875 z"
					id="path43682"
				/><path
					style="opacity:1;fill:#83b6df;fill-opacity:1;fill-rule:evenodd;stroke-width:0.3;stroke-linecap:round;stroke-linejoin:round;stroke-miterlimit:3"
					d="m 58.472916,70.643749 3.704167,3.704167 v 3.704166 l -5.55625,-5.55625 z"
					id="path43738"
				/><path
					style="opacity:1;fill:#83b6df;fill-opacity:1;fill-rule:evenodd;stroke-width:0.3;stroke-linecap:round;stroke-linejoin:round;stroke-miterlimit:3"
					d="m 56.091666,74.877082 c 0.0709,0.264584 0,3.704167 0,3.704167 0,0 6.085417,6.085417 6.085417,6.085417 v -3.704167 z"
					id="path43740"
				/><path
					style="opacity:1;fill:#83b6df;fill-opacity:1;fill-rule:evenodd;stroke-width:0.3;stroke-linecap:round;stroke-linejoin:round;stroke-miterlimit:3"
					d="m 35.454166,78.052082 c 0,0 5.55625,-5.55625 5.55625,-5.55625 0,0 -1.852083,-1.852083 -1.852083,-1.852083 l -3.704167,3.704167 z"
					id="path43742"
				/><path
					style="opacity:1;fill:#83b6df;fill-opacity:1;fill-rule:evenodd;stroke-width:0.3;stroke-linecap:round;stroke-linejoin:round;stroke-miterlimit:3"
					d="m 35.454166,84.666666 6.085417,-6.085417 v -3.439583 l -6.085417,6.085416 z"
					id="path43744"
				/><path
					style="opacity:1;fill:#83b6df;fill-opacity:1;fill-rule:evenodd;stroke-width:0.3;stroke-linecap:round;stroke-linejoin:round;stroke-miterlimit:3"
					d="m 48.947916,89.958332 5.291667,-5.291666 v -3.704167 l -5.291667,5.291667 -5.55625,-5.291667 v 3.96875 z"
					id="path45204"
				/><path
					style="opacity:1;fill:#165591;fill-opacity:1;fill-rule:evenodd;stroke-width:0.3;stroke-linecap:round;stroke-linejoin:round;stroke-miterlimit:3"
					d="m 48.947916,103.71667 v -3.70417 l -5.55625,-5.556251 v -5.820833 l 5.55625,5.556249 v -4.233333 l -5.291667,-5.291666 v -6.085417 l 5.291667,5.291667 v -3.704167 l -7.408333,-7.408333 v 11.90625 12.170833 z"
					id="path45212"
				/><path
					style="opacity:1;fill:#9da3a7;fill-opacity:1;fill-rule:evenodd;stroke-width:0.3;stroke-linecap:round;stroke-linejoin:round;stroke-miterlimit:3"
					d="M 37.835416,60.060416 V 37.041666 H 115.09375 V 75.406249 L 111.125,74.342825 109.44761,71.437499 V 46.302083 H 63.499999 l -2.645833,2.645833 v 11.90625 H 39.6875 Z"
					id="path61297"
				/><path
					style="opacity:1;fill:#0e70bc;fill-opacity:1;fill-rule:evenodd;stroke-width:0.3;stroke-linecap:round;stroke-linejoin:round;stroke-miterlimit:3"
					d="m 52.916666,110.59583 c -0.0772,1.64503 -0.04176,3.19491 1.852083,3.175 h 56.620831 c 1.54002,-0.36734 2.07894,-1.14043 2.11667,-2.11666 V 44.979166 C 112.61792,41.39713 110.45766,38.982217 106.62708,38.1 H 83.872916 c -2.148648,0.36008 -3.16579,1.584648 -3.704167,3.174999 V 20.902083 h 6.879167 c -0.01102,-2.069081 1.101609,-3.168766 3.175,-3.439583 h 10.318754 c 1.46408,0.185739 2.76183,0.620533 3.70416,1.5875 l 14.55209,14.552083 1.32291,2.645833 v 83.079164 c -0.1967,2.92959 -2.02977,4.59962 -5.82083,4.7625 H 49.477083 c -2.506789,-0.43891 -3.875998,-1.87598 -4.497917,-3.96875 v -9.525 z"
					id="path51324"
				/><path
					style="opacity:1;fill:#165591;fill-opacity:1;fill-rule:evenodd;stroke-width:0.3;stroke-linecap:round;stroke-linejoin:round;stroke-miterlimit:3"
					d="m 48.947917,103.71667 v -3.70417 l 5.55625,-5.556251 v -5.820833 l -5.55625,5.556249 v -4.233333 l 5.291667,-5.291666 v -6.085417 l -5.291667,5.291667 v -3.704167 l 7.408333,-7.408333 v 11.90625 12.170833 z"
					id="path45268"
				/><path
					style="opacity:1;fill:#4e88b8;fill-opacity:1;fill-rule:evenodd;stroke-width:0.354965;stroke-linecap:round;stroke-linejoin:round;stroke-miterlimit:3"
					d="m 98.425,23.8125 5.55625,3.96875 L 98.425,31.75 Z"
					id="path30950"
				/><path
					style="opacity:1;fill:#4e88b8;fill-opacity:1;fill-rule:evenodd;stroke-width:0.3;stroke-linecap:round;stroke-linejoin:round;stroke-miterlimit:3"
					d="m 114.56458,44.185416 4.23334,-4.233333 v 4.233333 z"
					id="path30940"
				/><path
					style="opacity:1;fill:#4e88b8;fill-opacity:1;fill-rule:evenodd;stroke-width:0.249801;stroke-linecap:round;stroke-linejoin:round;stroke-miterlimit:3"
					d="m 113.50625,62.970833 3.43958,3.43959 3.175,-3.43959 z"
					id="path30936"
				/><path
					style="opacity:1;fill:#4e88b8;fill-opacity:1;fill-rule:evenodd;stroke-width:0.249801;stroke-linecap:round;stroke-linejoin:round;stroke-miterlimit:3"
					d="m 113.50625,84.1375 3.43958,3.43959 3.175,-3.43959 z"
					id="path30934"
				/><path
					style="opacity:1;fill:#83b6df;fill-opacity:1;fill-rule:evenodd;stroke-width:0.3;stroke-linecap:round;stroke-linejoin:round;stroke-miterlimit:3"
					d="m 120.12083,105.30417 5.29167,5.82083 v 11.64167 l -5.29167,-6.08542 z"
					id="path57698"
				/><path
					style="opacity:1;fill:#165591;fill-opacity:1;fill-rule:evenodd;stroke-width:0.3;stroke-linecap:round;stroke-linejoin:round;stroke-miterlimit:3"
					d="m 123.56042,120.65 v -8.73125 l -3.43959,-3.70417 0,8.46667 z"
					id="path58666"
				/><path
					style="opacity:1;fill:#4e88b8;fill-opacity:1;fill-rule:evenodd;stroke-width:0.249801;stroke-linecap:round;stroke-linejoin:round;stroke-miterlimit:3"
					d="m 113.50625,105.03958 3.43958,3.43959 3.175,-3.43959 z"
					id="path30932"
				/><path
					style="opacity:1;fill:#4e88b8;fill-opacity:1;fill-rule:evenodd;stroke-width:0.3;stroke-linecap:round;stroke-linejoin:round;stroke-miterlimit:3"
					d="m 104.51042,114.96146 -3.96875,3.96875 3.96875,3.96875 z"
					id="path30928"
				/><path
					style="opacity:1;fill:#4e88b8;fill-opacity:1;fill-rule:evenodd;stroke-width:0.3;stroke-linecap:round;stroke-linejoin:round;stroke-miterlimit:3"
					d="m 83.34375,114.96146 -3.96875,3.96875 3.96875,3.96875 z"
					id="path30926"
				/><path
					style="opacity:1;fill:#4e88b8;fill-opacity:1;fill-rule:evenodd;stroke-width:0.3;stroke-linecap:round;stroke-linejoin:round;stroke-miterlimit:3"
					d="m 62.044792,114.96146 -3.96875,3.96875 3.96875,3.96875 z"
					id="path30924"
				/><path
					style="opacity:1;fill:#0e70bc;fill-opacity:1;fill-rule:evenodd;stroke-width:0.3;stroke-linecap:round;stroke-linejoin:round;stroke-miterlimit:3"
					d="m 98.425,74.877082 h 6.08542 V 53.181249 c -0.51312,-1.375774 -1.23395,-2.473434 -2.64584,-2.645833 H 68.262499 c -1.878521,0.291813 -3.185201,1.251338 -3.439583,3.439583 v 35.189583 c 0.559971,1.886979 0.298284,3.743315 3.96875,3.96875 h 32.279164 v 6.879168 c 0.23143,1.46432 -0.56546,1.66433 -1.587498,1.5875 h -9.789583 v 4.23333 H 105.83333 V 82.020832 H 92.604166 V 77.522916 H 77.522916 V 66.674999 c 0.51597,-1.133623 1.300947,-1.80826 2.645833,-1.527572 h 15.610416 c 1.868708,0.132306 2.853731,0.905087 2.585906,2.585905 z"
					id="path53120"
				/><path
					style="opacity:1;fill:#4e88b8;fill-opacity:1;fill-rule:evenodd;stroke-width:0.3;stroke-linecap:round;stroke-linejoin:round;stroke-miterlimit:3"
					d="m 89.032292,82.153125 3.96875,3.96875 -3.96875,3.96875 z"
					id="path30946"
				/><path
					style="opacity:1;fill:#4e88b8;fill-opacity:1;fill-rule:evenodd;stroke-width:0.3;stroke-linecap:round;stroke-linejoin:round;stroke-miterlimit:3"
					d="m 68.791666,80.697916 v -5.291667 h 5.291666 z"
					id="path30942"
				/><path
					style="opacity:1;fill:#4e88b8;fill-opacity:1;fill-rule:evenodd;stroke-width:0.3;stroke-linecap:round;stroke-linejoin:round;stroke-miterlimit:3"
					d="M 74.083332,64.822916 V 59.531249 H 68.791666 Z"
					id="path30944"
				/><path
					style="opacity:1;fill:#4e88b8;fill-opacity:1;fill-rule:evenodd;stroke-width:0.3;stroke-linecap:round;stroke-linejoin:round;stroke-miterlimit:3"
					d="m 89.032292,54.239583 3.96875,3.96875 -3.96875,3.96875 z"
					id="path30948"
				/><path
					style="opacity:1;fill:#165591;fill-opacity:1;fill-rule:evenodd;stroke-width:0.3;stroke-linecap:round;stroke-linejoin:round;stroke-miterlimit:3"
					d="m 53.974999,113.77083 c -0.95015,-0.60625 -0.975888,-1.2298 -1.0693,-1.85208 v -1.32292 h -7.926533 v 3.175 z"
					id="path53902"
				/><rect
					style="opacity:1;fill:#165591;fill-opacity:1;fill-rule:evenodd;stroke-width:0.3;stroke-linecap:round;stroke-linejoin:round;stroke-miterlimit:3"
					id="rect55324"
					width="3.1750016"
					height="10.318744"
					x="61.912498"
					y="113.77084"
				/><rect
					style="opacity:1;fill:#165591;fill-opacity:1;fill-rule:evenodd;stroke-width:0.3;stroke-linecap:round;stroke-linejoin:round;stroke-miterlimit:3"
					id="rect55326"
					width="3.1750016"
					height="10.318744"
					x="83.34375"
					y="113.77084"
				/><rect
					style="opacity:1;fill:#165591;fill-opacity:1;fill-rule:evenodd;stroke-width:0.3;stroke-linecap:round;stroke-linejoin:round;stroke-miterlimit:3"
					id="rect55328"
					width="3.1750016"
					height="10.318744"
					x="104.51041"
					y="113.77084"
				/><rect
					style="opacity:1;fill:#165591;fill-opacity:1;fill-rule:evenodd;stroke-width:0.3;stroke-linecap:round;stroke-linejoin:round;stroke-miterlimit:3"
					id="rect55330"
					width="6.614583"
					height="1.8520833"
					x="113.50625"
					y="103.1875"
				/><rect
					style="opacity:1;fill:#165591;fill-opacity:1;fill-rule:evenodd;stroke-width:0.3;stroke-linecap:round;stroke-linejoin:round;stroke-miterlimit:3"
					id="rect55332"
					width="6.614583"
					height="1.8520833"
					x="113.50625"
					y="82.417709"
				/><rect
					style="opacity:1;fill:#165591;fill-opacity:1;fill-rule:evenodd;stroke-width:0.3;stroke-linecap:round;stroke-linejoin:round;stroke-miterlimit:3"
					id="rect55334"
					width="6.614583"
					height="1.8520833"
					x="113.50625"
					y="61.118752"
				/><path
					style="opacity:1;fill:#165591;fill-opacity:1;fill-rule:evenodd;stroke-width:0.3;stroke-linecap:round;stroke-linejoin:round;stroke-miterlimit:3"
					d="m 113.50625,44.979166 6.61458,-6.614581 v -2.116669 c 0,0 -0.45827,-1.058333 -0.45827,-0.79375 0,0.264584 -7.06582,7.065814 -7.06582,7.065814 z"
					id="path55336"
				/><path
					style="opacity:1;fill:#165591;fill-opacity:1;fill-rule:evenodd;stroke-width:0.3;stroke-linecap:round;stroke-linejoin:round;stroke-miterlimit:3"
					d="M 98.424999,38.1 V 17.4625 h -2.38125 V 38.1 Z"
					id="path55338"
				/><path
					style="opacity:1;fill:#165591;fill-opacity:1;fill-rule:evenodd;stroke-width:0.3;stroke-linecap:round;stroke-linejoin:round;stroke-miterlimit:3"
					d="M 89.164582,65.087499 V 50.535416 h -2.38125 v 14.612011 z"
					id="path56066"
				/><path
					style="opacity:1;fill:#165591;fill-opacity:1;fill-rule:evenodd;stroke-width:0.3;stroke-linecap:round;stroke-linejoin:round;stroke-miterlimit:3"
					d="m 77.522916,71.702082 v -3.439583 l -12.7,-12.7 v 3.704167 z"
					id="path56070"
				/><path
					style="opacity:1;fill:#165591;fill-opacity:1;fill-rule:evenodd;stroke-width:0.3;stroke-linecap:round;stroke-linejoin:round;stroke-miterlimit:3"
					d="m 64.822916,88.10625 v -3.439583 l 12.7,-12.7 v 3.704167 z"
					id="path56072"
				/><path
					style="opacity:1;fill:#165591;fill-opacity:1;fill-rule:evenodd;stroke-width:0.31008;stroke-linecap:round;stroke-linejoin:round;stroke-miterlimit:3"
					d="M 89.164582,93.069311 V 77.522917 h -2.38125 v 15.610416 z"
					id="path56074"
				/><rect
					style="opacity:1;fill:#165591;fill-opacity:1;fill-rule:evenodd;stroke-width:0.3;stroke-linecap:round;stroke-linejoin:round;stroke-miterlimit:3"
					id="rect56076"
					width="3.4395833"
					height="4.7624998"
					x="101.07083"
					y="94.985413"
				/><rect
					style="opacity:1;fill:#165591;fill-opacity:1;fill-rule:evenodd;stroke-width:0.311325;stroke-linecap:round;stroke-linejoin:round;stroke-miterlimit:3"
					id="rect56078"
					width="4.7624998"
					height="3.7041616"
					x="94.720833"
					y="101.6"
				/><path
					style="opacity:1;fill:#83b6df;fill-opacity:1;fill-rule:evenodd;stroke-width:0.319801;stroke-linecap:round;stroke-linejoin:round;stroke-miterlimit:3"
					d="m 120.12083,84.137503 5.29167,6.085414 0,13.758333 -5.29167,-6.085417 z"
					id="path58737"
				/><path
					style="opacity:1;fill:#165591;fill-opacity:1;fill-rule:evenodd;stroke-width:0.319801;stroke-linecap:round;stroke-linejoin:round;stroke-miterlimit:3"
					d="m 123.56042,101.86458 0,-10.847913 -3.43959,-3.57188 0,10.451046 z"
					id="path58739"
				/><path
					style="opacity:1;fill:#83b6df;fill-opacity:1;fill-rule:evenodd;stroke-width:0.319801;stroke-linecap:round;stroke-linejoin:round;stroke-miterlimit:3"
					d="m 120.12083,62.970823 5.29167,6.085414 v 13.758312 l -5.29167,-6.085396 z"
					id="path58741"
				/><path
					style="opacity:1;fill:#165591;fill-opacity:1;fill-rule:evenodd;stroke-width:0.319801;stroke-linecap:round;stroke-linejoin:round;stroke-miterlimit:3"
					d="M 123.56042,80.697891 V 69.849987 l -3.43959,-3.57188 v 10.451046 z"
					id="path58743"
				/><path
					style="opacity:1;fill:#83b6df;fill-opacity:1;fill-rule:evenodd;stroke-width:0.319801;stroke-linecap:round;stroke-linejoin:round;stroke-miterlimit:3"
					d="m 120.12083,38.629167 5.29167,5.820833 0,16.668702 -5.29167,-6.085396 z"
					id="path58745"
				/><path
					style="opacity:1;fill:#165591;fill-opacity:1;fill-rule:evenodd;stroke-width:0.319801;stroke-linecap:round;stroke-linejoin:round;stroke-miterlimit:3"
					d="m 123.56042,59.002044 0,-13.758294 -3.43959,-3.704167 0,13.493723 z"
					id="path58747"
				/><path
					style="opacity:1;fill:#9da3a7;fill-opacity:1;fill-rule:evenodd;stroke-width:0.3;stroke-linecap:round;stroke-linejoin:round;stroke-miterlimit:3"
					d="m 69.585416,110.33125 c 0.977131,-1.11363 2.128389,-1.76296 3.439583,-1.98584 H 86.254166 V 101.6 h -11.1125 c -4.61999,2.28589 -4.961047,5.53724 -5.55625,8.73125 z"
					id="path59475"
				/><path
					style="opacity:1;fill:#8d8d8e;fill-opacity:1;fill-rule:evenodd;stroke-width:0.3;stroke-linecap:round;stroke-linejoin:round;stroke-miterlimit:3"
					d="m 86.254167,108.47917 -10e-7,-6.87917 h -3.96875 c -4.740802,1.9288 -8.197301,4.3742 -10.847917,7.14375 0.781678,-0.20701 1.587502,-0.26458 2.381251,-0.26458 z"
					id="path59537"
				/><path
					style="opacity:1;fill:#8d8d8e;fill-opacity:1;fill-rule:evenodd;stroke-width:0.3;stroke-linecap:round;stroke-linejoin:round;stroke-miterlimit:3"
					d="m 80.433332,70.643749 v -0.79375 c 0.09279,-0.756901 0.92988,-1.065538 1.852084,-1.322917 h 11.641666 c 0.896712,0.17554 1.409888,0.720092 1.5875,1.5875 v 5.820834 c 0.258236,0.792876 0.306734,1.789898 1.5875,1.5875 H 107.95 c 1.53935,0.352617 2.15738,1.767675 2.38125,2.38125 v 29.368754 c -0.39966,0.95355 -1.07394,1.76694 -3.175,1.85208 H 89.693749 v -2.64583 l 1.322919,-1.32292 H 105.83333 V 82.020832 H 92.604166 v -7.9375 h -11.90625 z"
					id="path60291"
				/><path
					style="opacity:1;fill:#9da3a7;fill-opacity:1;fill-rule:evenodd;stroke-width:0.3;stroke-linecap:round;stroke-linejoin:round;stroke-miterlimit:3"
					d="m 89.693749,108.47917 v -3.43959 h 13.229171 c 1.12203,-0.21829 1.37229,-0.8937 1.5875,-1.5875 V 84.666666 c -0.49607,-0.889414 -1.32019,-1.023918 -2.11667,-1.222058 h -9.789584 c -1.167845,0.06421 -1.7741,-0.453527 -1.68836,-1.688359 v -2.645833 c 0.01279,-1.560043 -0.883827,-1.631722 -1.751224,-1.751224 h -8.73125 v -6.715443 h 11.377084 c 0.947029,-0.07979 1.418872,0.329411 1.322916,1.322917 v 6.085416 c 0.180958,1.385569 0.797352,1.700205 1.5875,1.5875 H 106.3625 c 1.73942,0.282375 1.51935,1.519733 1.52757,2.645834 v 24.341664 c 0.003,0.91325 -0.0783,1.75659 -1.0693,1.85209 z"
					id="path59962"
				/><path
					style="opacity:1;fill:#8d8d8e;fill-opacity:1;fill-rule:evenodd;stroke-width:0.3;stroke-linecap:round;stroke-linejoin:round;stroke-miterlimit:3"
					d="m 113.50625,76.464582 c -3.4223,-0.430566 -5.28356,-2.255632 -6.08542,-5.027083 v -22.225 c -0.41635,-1.43136 -1.75211,-1.687886 -3.175,-1.833086 H 65.352083 c -1.411359,-0.0054 -2.516318,0.38567 -2.38125,2.38125 v 10.564336 c -0.498631,1.771088 -1.428436,2.27704 -2.645834,2.645834 H 40.745833 c -2.48239,-0.370944 -2.29466,-1.799862 -2.910417,-2.910417 h 19.84375 c 2.266347,0.122793 2.106673,-1.040052 2.116667,-2.116667 V 47.095833 c 0.593635,-1.865299 2.026947,-2.846491 4.582718,-2.645834 h 42.513119 c 3.06898,0.33231 3.27769,1.876033 3.43958,3.439584 v 22.489583 c 0.51007,1.238055 0.63471,2.602459 3.175,3.175 z"
					id="path61295"
				/><path
					style="opacity:1;fill:#2a292e;fill-opacity:1;fill-rule:evenodd;stroke-width:0.3;stroke-linecap:round;stroke-linejoin:round;stroke-miterlimit:3"
					d="m 41.274999,50.535416 h 5.291667 v -1.852083 h -3.439583 v -3.439584 h -1.852084 z"
					id="path62434"
				/><path
					style="opacity:1;fill:#2a292e;fill-opacity:1;fill-rule:evenodd;stroke-width:0.3;stroke-linecap:round;stroke-linejoin:round;stroke-miterlimit:3"
					d="m 49.873958,50.535416 h 5.291667 v -1.852083 h -3.439583 v -3.439584 h -1.852084 z"
					id="path62835"
				/><path
					style="opacity:1;fill:#2a292e;fill-opacity:1;fill-rule:evenodd;stroke-width:0.3;stroke-linecap:round;stroke-linejoin:round;stroke-miterlimit:3"
					d="m 49.873958,59.53125 h 5.291667 v -1.852083 h -3.439583 v -3.439584 h -1.852084 z"
					id="path62837"
				/><path
					style="opacity:1;fill:#2a292e;fill-opacity:1;fill-rule:evenodd;stroke-width:0.3;stroke-linecap:round;stroke-linejoin:round;stroke-miterlimit:3"
					d="m 41.274999,59.53125 h 5.291667 v -1.852083 h -3.439583 v -3.439584 h -1.852084 z"
					id="path62839"
				/><path
					style="opacity:1;fill:#0e70bc;fill-opacity:1;fill-rule:evenodd;stroke-width:0.3;stroke-linecap:round;stroke-linejoin:round;stroke-miterlimit:3"
					d="M 80.168749,20.902083 H 37.835416 V 38.89375 c 0.268731,1.278028 1.011946,2.118391 2.38125,2.381249 h 39.952083 z"
					id="path62841"
				/><path
					style="opacity:1;fill:#165591;fill-opacity:1;fill-rule:evenodd;stroke-width:0.298071;stroke-linecap:round;stroke-linejoin:round;stroke-miterlimit:3"
					d="M 77.258333,41.275 V 20.902083 h -2.38125 V 41.275 Z"
					id="path62843"
				/><path
					style="opacity:1;fill:#165591;fill-opacity:1;fill-rule:evenodd;stroke-width:0.298071;stroke-linecap:round;stroke-linejoin:round;stroke-miterlimit:3"
					d="M 56.091667,41.275 V 20.902083 h -2.38125 V 41.275 Z"
					id="path62845"
				/><path
					style="opacity:1;fill:#4e88b8;fill-opacity:1;fill-rule:evenodd;stroke-width:0.354965;stroke-linecap:round;stroke-linejoin:round;stroke-miterlimit:3"
					d="m 77.258333,23.8125 5.55625,3.96875 -5.55625,3.96875 z"
					id="path30952"
				/><path
					style="opacity:1;fill:#4e88b8;fill-opacity:1;fill-rule:evenodd;stroke-width:0.354965;stroke-linecap:round;stroke-linejoin:round;stroke-miterlimit:3"
					d="m 56.091667,23.8125 5.55625,3.96875 -5.55625,3.96875 z"
					id="path30954"
				/><path
					style="opacity:1;fill:#0e70bc;fill-opacity:1;fill-rule:evenodd;stroke-width:0.3;stroke-linecap:round;stroke-linejoin:round;stroke-miterlimit:3"
					d="M 6.8791666,24.341666 9.7895832,26.9875 18.520833,15.875 27.516666,26.9875 37.835416,16.66875 V 11.1125 H 9.5249999 c -1.9009586,0.09672 -2.8355379,1.021741 -2.6458332,2.910416 z"
					id="path69591"
				/><path
					style="opacity:1;fill:#82b7e0;fill-opacity:0.513725;fill-rule:evenodd;stroke-width:0.3;stroke-linecap:round;stroke-linejoin:round;stroke-miterlimit:3"
					d="m 33.602083,17.991666 2.38125,-2.38125 -2.38125,-2.381249 z"
					id="path32412"
				/><path
					style="opacity:1;fill:#165591;fill-opacity:1;fill-rule:evenodd;stroke-width:0.3;stroke-linecap:round;stroke-linejoin:round;stroke-miterlimit:3"
					d="m 33.602083,20.902083 -2.38125,2.38125 V 11.1125 h 2.38125 z"
					id="path69595"
				/><path
					style="opacity:1;fill:#9da3a7;fill-opacity:1;fill-rule:evenodd;stroke-width:0.3;stroke-linecap:round;stroke-linejoin:round;stroke-miterlimit:3"
					d="M 20.902083,2.38125 H 37.835416 L 31.75,8.4666667 Z"
					id="path70392"
				/><path
					style="opacity:1;fill:#83b6df;fill-opacity:1;fill-rule:evenodd;stroke-width:0.3;stroke-linecap:round;stroke-linejoin:round;stroke-miterlimit:3"
					d="M 30.427083,2.38125 H 26.722916 L 24.60625,4.4979166 26.9875,5.8208333 Z"
					id="path70542"
				/><path
					style="opacity:1;fill:#0e70bc;fill-opacity:1;fill-rule:evenodd;stroke-width:0.3;stroke-linecap:round;stroke-linejoin:round;stroke-miterlimit:3"
					d="m 29.36875,7.14375 4.7625,-4.7625 H 30.427083 L 26.9875,5.8208333 Z"
					id="path70598"
				/><path
					style="opacity:1;fill:#0e70bc;fill-opacity:1;fill-rule:evenodd;stroke-width:0.3;stroke-linecap:round;stroke-linejoin:round;stroke-miterlimit:3"
					d="m 101.86458,14.2875 4.7625,2.38125 13.75834,13.758333 5.29166,-25.3999997 h -15.875 z"
					id="path71645"
				/><path
					style="opacity:1;fill:#4e88b8;fill-opacity:1;fill-rule:evenodd;stroke-width:0.3;stroke-linecap:round;stroke-linejoin:round;stroke-miterlimit:3"
					d="m 109.80208,5.0270833 h 3.96875 L 124.08958,12.7 123.29583,16.139583 109.27292,5.2916666 109.80208,5.0270833 h 3.96875 z"
					id="path71826"
				/><path
					style="opacity:1;fill:#4e88b8;fill-opacity:1;fill-rule:evenodd;stroke-width:0.3;stroke-linecap:round;stroke-linejoin:round;stroke-miterlimit:3"
					d="M 106.89167,8.4666666 122.50208,20.6375 121.70833,24.077083 105.03958,10.583333 Z"
					id="path71716"
				/><path
					style="opacity:1;fill:#83b6df;fill-opacity:1;fill-rule:evenodd;stroke-width:0.3;stroke-linecap:round;stroke-linejoin:round;stroke-miterlimit:3"
					d="m 98.160415,14.2875 h 3.704165 l 7.9375,-9.2604167 h 15.875 L 126.20625,2.38125 H 107.95 Z"
					id="path71298"
				/><path
					style="opacity:1;fill:#4e88b8;fill-opacity:1;fill-rule:evenodd;stroke-width:0.3;stroke-linecap:round;stroke-linejoin:round;stroke-miterlimit:3"
					d="M 44.185416,15.610416 82.020832,14.552083 91.281249,3.96875 h -47.625 L 42.333333,15.875 h 1.322916 z"
					id="path74327"
				/><path
					style="opacity:1;fill:#9da3a7;fill-opacity:1;fill-rule:evenodd;stroke-width:0.3;stroke-linecap:round;stroke-linejoin:round;stroke-miterlimit:3"
					d="M 47.889583,20.902083 H 44.185416 V 13.49375 c 0.441506,-1.217137 1.426025,-1.759374 2.910417,-1.68033 h 33.337499 l 9.525,-9.5249999 h 7.9375 L 83.079166,17.105087 H 47.889583 Z"
					id="path74325"
				/><path
					style="opacity:1;fill:#0e70bc;fill-opacity:1;fill-rule:evenodd;stroke-width:0.3;stroke-linecap:round;stroke-linejoin:round;stroke-miterlimit:3"
					d="m 37.835416,20.902083 h 6.35 V 6.8791666 c 0.272222,-1.1821816 1.200053,-1.7652 2.38125,-2.1166667 h 44.45 L 93.397915,2.1166666 H 40.481249 c -1.600354,0.4413473 -2.467271,1.4225475 -2.645833,2.9104167 z"
					id="path74323"
				/><rect
					style="opacity:1;fill:#9da3a7;fill-opacity:1;fill-rule:evenodd;stroke-width:0.3;stroke-linecap:round;stroke-linejoin:round;stroke-miterlimit:3"
					id="rect74381"
					width="2.9104166"
					height="2.6458333"
					x="50.535416"
					y="2.1166666"
				/><rect
					style="opacity:1;fill:#165591;fill-opacity:1;fill-rule:evenodd;stroke-width:0.293103;stroke-linecap:round;stroke-linejoin:round;stroke-miterlimit:3"
					id="rect74383"
					width="2.7781246"
					height="2.6458333"
					x="53.445835"
					y="2.1166666"
				/><rect
					style="opacity:1;fill:#9da3a7;fill-opacity:1;fill-rule:evenodd;stroke-width:0.3;stroke-linecap:round;stroke-linejoin:round;stroke-miterlimit:3"
					id="rect74523"
					width="2.9104166"
					height="2.6458333"
					x="59.266666"
					y="2.1166666"
				/><rect
					style="opacity:1;fill:#165591;fill-opacity:1;fill-rule:evenodd;stroke-width:0.293103;stroke-linecap:round;stroke-linejoin:round;stroke-miterlimit:3"
					id="rect74525"
					width="2.7781246"
					height="2.6458333"
					x="62.177086"
					y="2.1166666"
				/><rect
					style="opacity:1;fill:#9da3a7;fill-opacity:1;fill-rule:evenodd;stroke-width:0.3;stroke-linecap:round;stroke-linejoin:round;stroke-miterlimit:3"
					id="rect74527"
					width="2.9104166"
					height="2.6458333"
					x="68.130211"
					y="2.1166666"
				/><rect
					style="opacity:1;fill:#165591;fill-opacity:1;fill-rule:evenodd;stroke-width:0.293103;stroke-linecap:round;stroke-linejoin:round;stroke-miterlimit:3"
					id="rect74529"
					width="2.7781246"
					height="2.6458333"
					x="71.040634"
					y="2.1166666"
				/><rect
					style="opacity:1;fill:#9da3a7;fill-opacity:1;fill-rule:evenodd;stroke-width:0.3;stroke-linecap:round;stroke-linejoin:round;stroke-miterlimit:3"
					id="rect74531"
					width="2.9104166"
					height="2.6458333"
					x="76.993752"
					y="2.1166666"
				/><rect
					style="opacity:1;fill:#165591;fill-opacity:1;fill-rule:evenodd;stroke-width:0.293103;stroke-linecap:round;stroke-linejoin:round;stroke-miterlimit:3"
					id="rect74533"
					width="2.7781246"
					height="2.6458333"
					x="79.904175"
					y="2.1166666"
				/></g
			></g
		><metadata id="metadata10608">
			<!-- svelte-ignore attribute_illegal_colon -->
			<!-- 	data-license="https://creativecommons.org/licenses/by-nc-sa/4.0/" data-author="Doriel Rivalet"--></metadata
		></svg
	>
</div>
