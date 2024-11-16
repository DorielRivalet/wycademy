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
	>
		<defs id="defs2">
			<linearGradient id="linearGradient12735">
				<stop
					style="stop-color:#1e66f5;stop-opacity:1;"
					offset="0"
					id="stop12731"
				/>
				<stop
					style="stop-color:#89dceb;stop-opacity:1;"
					offset="1"
					id="stop12733"
				/>
			</linearGradient>
			<linearGradient id="linearGradient12729">
				<stop
					style="stop-color:#1e66f5;stop-opacity:1;"
					offset="0"
					id="stop12725"
				/>
				<stop
					style="stop-color:#89dceb;stop-opacity:1;"
					offset="1"
					id="stop12727"
				/>
			</linearGradient>
			<linearGradient id="linearGradient6915">
				<stop
					style="stop-color:#1e66f5;stop-opacity:1;"
					offset="0"
					id="stop6911"
				/>
				<stop
					style="stop-color:#89dceb;stop-opacity:1;"
					offset="1"
					id="stop6913"
				/>
			</linearGradient>
			<linearGradient id="linearGradient216457">
				<stop
					style="stop-color:#1c2c3d;stop-opacity:1;"
					offset="0"
					id="stop216453"
				/>
				<stop
					style="stop-color:#d75b1d;stop-opacity:1;"
					offset="1"
					id="stop216455"
				/>
			</linearGradient>
			<linearGradient id="linearGradient214536">
				<stop
					style="stop-color:#e5db45;stop-opacity:1;"
					offset="0"
					id="stop214534"
				/>
				<stop
					style="stop-color:#d75b1d;stop-opacity:1;"
					offset="0.18640351"
					id="stop214532"
				/>
			</linearGradient>
			<linearGradient id="linearGradient214321">
				<stop
					style="stop-color:#e5dc45;stop-opacity:1;"
					offset="0"
					id="stop214319"
				/>
				<stop
					style="stop-color:#d75b1d;stop-opacity:1;"
					offset="0.21271929"
					id="stop214317"
				/>
			</linearGradient>
			<linearGradient id="linearGradient211308">
				<stop
					style="stop-color:#e4d944;stop-opacity:1;"
					offset="0"
					id="stop211306"
				/>
				<stop
					style="stop-color:#d75b1d;stop-opacity:1;"
					offset="0.28070176"
					id="stop211304"
				/>
			</linearGradient>
			<linearGradient
				xlink:href="#linearGradient6915"
				id="linearGradient178705"
				x1="54.768749"
				y1="40.084373"
				x2="91.54583"
				y2="40.084373"
				gradientUnits="userSpaceOnUse"
				gradientTransform="translate(0.76458499,0.23541835)"
			/>
			<linearGradient id="linearGradient178703">
				<stop
					style="stop-color:#1e66f5;stop-opacity:1;"
					offset="0"
					id="stop178699"
				/>
				<stop
					style="stop-color:#89dceb;stop-opacity:1;"
					offset="1"
					id="stop178701"
				/>
			</linearGradient>
			<linearGradient
				xlink:href="#linearGradient12735"
				id="linearGradient175472"
				x1="92.604164"
				y1="57.546875"
				x2="116.68125"
				y2="57.546875"
				gradientUnits="userSpaceOnUse"
				gradientTransform="translate(0.76458499,0.23541835)"
			/>
			<linearGradient
				xlink:href="#linearGradient178703"
				id="linearGradient175255"
				x1="102.65833"
				y1="72.760414"
				x2="118.79792"
				y2="72.760414"
				gradientUnits="userSpaceOnUse"
				gradientTransform="translate(0.76458499,0.23541835)"
			/>
			<linearGradient
				xlink:href="#linearGradient12729"
				id="linearGradient177624"
				x1="74.612495"
				y1="44.185417"
				x2="110.59583"
				y2="44.185417"
				gradientUnits="userSpaceOnUse"
				gradientTransform="translate(0.76458499,0.23541835)"
			/>
			<linearGradient
				xlink:href="#linearGradient211308"
				id="linearGradient211312"
				x1="46.302082"
				y1="23.32439"
				x2="62.970833"
				y2="23.32439"
				gradientUnits="userSpaceOnUse"
				spreadMethod="pad"
				gradientTransform="rotate(6.6057962,53.857171,28.44586)"
			/>
			<linearGradient
				xlink:href="#linearGradient214321"
				id="linearGradient214323"
				x1="49.67438"
				y1="18.436647"
				x2="65.946255"
				y2="18.436647"
				gradientUnits="userSpaceOnUse"
				gradientTransform="rotate(6.6057962,53.857171,28.44586)"
			/>
			<linearGradient
				xlink:href="#linearGradient214536"
				id="linearGradient214538"
				x1="52.608254"
				y1="12.286861"
				x2="72.454285"
				y2="12.286861"
				gradientUnits="userSpaceOnUse"
				gradientTransform="rotate(6.6057962,53.857171,28.44586)"
			/>
			<linearGradient
				xlink:href="#linearGradient216457"
				id="linearGradient216459"
				x1="57.943749"
				y1="8.2020831"
				x2="70.114583"
				y2="8.2020831"
				gradientUnits="userSpaceOnUse"
				gradientTransform="matrix(1.1169195,0.16050237,-0.12934651,1.3859535,-4.1816689,-12.936184)"
			/>
			<filter
				style="color-interpolation-filters:sRGB;"
				id="filter58360"
				x="0"
				y="0"
				width="1"
				height="1"
			>
				<feComposite
					in2="SourceGraphic"
					operator="arithmetic"
					k1="0"
					k2="1"
					result="composite1"
					id="feComposite58346"
				/>
				<feColorMatrix
					in="composite1"
					values="1"
					type="saturate"
					result="colormatrix1"
					id="feColorMatrix58348"
				/>
				<feFlood
					flood-opacity="1"
					flood-color="rgb(0,0,0)"
					result="flood1"
					id="feFlood58350"
				/>
				<feBlend
					in="flood1"
					in2="colormatrix1"
					mode="multiply"
					result="blend1"
					id="feBlend58352"
				/>
				<feBlend in2="blend1" mode="screen" result="blend2" id="feBlend58354" />
				<feColorMatrix
					in="blend2"
					values="1"
					type="saturate"
					result="colormatrix2"
					id="feColorMatrix58356"
				/>
				<feComposite
					in="colormatrix2"
					in2="SourceGraphic"
					operator="in"
					k2="1"
					result="composite2"
					id="feComposite58358"
				/>
			</filter>
			<linearGradient
				xlink:href="#linearGradient12735"
				id="linearGradient58725"
				gradientUnits="userSpaceOnUse"
				gradientTransform="translate(0.76458499,0.23541835)"
				x1="92.604164"
				y1="57.546875"
				x2="116.68125"
				y2="57.546875"
			/>
			<linearGradient
				xlink:href="#linearGradient178703"
				id="linearGradient58727"
				gradientUnits="userSpaceOnUse"
				gradientTransform="translate(0.76458499,0.23541835)"
				x1="102.65833"
				y1="72.760414"
				x2="118.79792"
				y2="72.760414"
			/>
			<linearGradient
				xlink:href="#linearGradient12729"
				id="linearGradient58729"
				gradientUnits="userSpaceOnUse"
				gradientTransform="translate(0.76458499,0.23541835)"
				x1="74.612495"
				y1="44.185417"
				x2="110.59583"
				y2="44.185417"
			/>
			<linearGradient
				xlink:href="#linearGradient6915"
				id="linearGradient58731"
				gradientUnits="userSpaceOnUse"
				gradientTransform="translate(0.76458499,0.23541835)"
				x1="54.768749"
				y1="40.084373"
				x2="91.54583"
				y2="40.084373"
			/>
			<linearGradient
				xlink:href="#linearGradient216457"
				id="linearGradient58733"
				gradientUnits="userSpaceOnUse"
				gradientTransform="matrix(1.1169195,0.16050237,-0.12934651,1.3859535,-4.1816689,-12.936184)"
				x1="57.943749"
				y1="8.2020831"
				x2="70.114583"
				y2="8.2020831"
			/>
			<linearGradient
				xlink:href="#linearGradient214536"
				id="linearGradient58735"
				gradientUnits="userSpaceOnUse"
				gradientTransform="rotate(6.6057962,53.857171,28.44586)"
				x1="52.608254"
				y1="12.286861"
				x2="72.454285"
				y2="12.286861"
			/>
			<linearGradient
				xlink:href="#linearGradient214321"
				id="linearGradient58737"
				gradientUnits="userSpaceOnUse"
				gradientTransform="rotate(6.6057962,53.857171,28.44586)"
				x1="49.67438"
				y1="18.436647"
				x2="65.946255"
				y2="18.436647"
			/>
			<linearGradient
				xlink:href="#linearGradient211308"
				id="linearGradient58739"
				gradientUnits="userSpaceOnUse"
				gradientTransform="rotate(6.6057962,53.857171,28.44586)"
				x1="46.302082"
				y1="23.32439"
				x2="62.970833"
				y2="23.32439"
				spreadMethod="pad"
			/>
			<filter
				style="color-interpolation-filters:sRGB"
				id="filter23101"
				x="-0.068986724"
				y="-0.070997991"
				width="1.1379832"
				height="1.1420004"
			>
				<feGaussianBlur stdDeviation="0.39257814" id="feGaussianBlur23103" />
			</filter>
		</defs>
		<g
			id="g57981"
			style="filter:url(#filter58360)"
			transform="translate(1.0583333,1.5875)"
		>
			<path
				style="fill:url(#linearGradient58725);fill-opacity:1;fill-rule:evenodd;stroke:none;stroke-width:4.99999;stroke-linecap:round;stroke-linejoin:round;stroke-miterlimit:3"
				d="m 96.54375,75.1125 -3.174999,-3.175 1.322916,-6.879166 20.372913,-24.60625 c 0.31316,4.587512 0.74075,9.132689 2.38125,13.229167 l -14.2875,15.610416 -1.85208,-1.852083 z"
				id="path57785"
			/>
			<path
				style="fill:url(#linearGradient58727);fill-opacity:1;fill-rule:evenodd;stroke:none;stroke-width:4.99999;stroke-linecap:round;stroke-linejoin:round;stroke-miterlimit:3"
				d="m 103.42291,77.49375 c 2.38595,-7.094298 8.97975,-10.582232 15.08125,-12.435416 -2.4191,6.176808 -3.60439,11.527796 1.05834,12.964583 l -2.11667,2.910417 z"
				id="path57787"
			/>
			<path
				style="fill:url(#linearGradient58729);fill-opacity:1;fill-rule:evenodd;stroke:none;stroke-width:4.99999;stroke-linecap:round;stroke-linejoin:round;stroke-miterlimit:3"
				d="m 75.377084,71.408334 h 7.408333 C 99.40582,57.561675 112.14356,42.149055 111.36041,24.577084 l -4.23333,1.322917 V 17.433334 L 102.62916,21.931251 98.925,17.697918 C 91.075695,35.60139 65.998257,65.296481 75.377084,71.408334 Z"
				id="path57789"
			/>
			<path
				style="fill:url(#linearGradient58731);fill-opacity:1;fill-rule:evenodd;stroke:none;stroke-width:4.99999;stroke-linecap:round;stroke-linejoin:round;stroke-miterlimit:3"
				d="m 55.533334,71.408334 h 7.14375 L 75.641667,56.327084 C 102.47046,20.453573 91.286641,24.483781 92.310417,14.258334 l -3.175,2.910417 -3.175,-5.820833 -3.175,5.55625 -6.085416,-7.6729164 C 79.174855,32.842033 64.385339,50.756943 55.533334,71.408334 Z"
				id="path57791"
			/>
			<path
				style="fill:#2c6167;fill-opacity:1;fill-rule:evenodd;stroke:none;stroke-width:4.99999;stroke-linecap:round;stroke-linejoin:round;stroke-miterlimit:3"
				d="m 34.631251,31.191668 h -4.7625 l -1.058333,1.058333 -2.645833,2.116667 h -3.439584 v 0.529166 h -0.264583 v 2.645834 l -7.408333,3.704166 h -5.027083 v 6.879167 l 2.910416,2.910416 h 16.933333 v -1.5875 h 5.688542 v 8.995834 H 17.962501 l -1.852083,7.937499 v 21.960417 l 7.672918,7.672916 h 7.937499 V 82.25625 l 4.7625,-4.7625 h 8.731249 l 5.291667,5.291667 v 10.31875 h 21.695833 v -11.1125 l 7.672917,-7.672917 h 9.525 l 10.318749,10.31875 10.84791,6.263048 v 28.397372 l 4.58272,2.64583 h 8.64645 l 3.43958,-3.43958 -1.55969,-5.82083 -1.08614,0.79375 H 124.325 l -2.38125,3.96875 -3.175,0.52916 V 82.25625 l -4.7625,-4.7625 h -10.58334 c 1.50231,-3.381183 3.22945,-5.207482 5.29167,-6.879165 1.5085,-1.222824 3.13427,-2.4514 5.29167,-3.704167 v -1e-6 l 1.85208,-7.9375 h -3.175 l -5.82083,6.085418 -3.70417,4.233332 -1.85208,-1.852083 -4.7625,7.672916 -3.174999,-3.175 1.058334,-2.910415 2.38125,-3.175 c 3.284565,-3.768058 7.032905,-7.246104 10.583325,-10.847917 l 3.43959,-5.027084 -2.11667,-5.027083 -3.175,3.704166 -2.11667,-2.645833 -11.112493,15.875 -2.645833,-2.910417 -4.762499,7.408334 -2.116668,5.027083 h -7.408333 l 1.058334,-3.704166 2.38125,-3.96875 10.583334,-11.90625 4.497915,-6.614584 -3.439583,-3.96875 -2.910417,3.704167 -2.38125,-3.704167 -3.968749,6.879167 -5.556251,8.202083 -2.116666,-2.116667 c -4.450371,5.546416 -8.77722,11.120399 -10.847917,17.197917 h -7.14375 l 4.497918,-8.466666 10.054166,-14.552083 2.116666,-4.233334 c -0.49724,-1.761897 -1.637677,-2.92673 -2.910417,-3.96875 l -1.852083,3.439583 c -1.315704,-2.873029 -3.394856,-5.468345 -5.820833,-7.9375 l -5.027083,18.785417 -2.38125,-2.645834 -12.435417,19.579167 h -8.202083 l -0.79375,-0.79375 V 67.175 l 3.175,-1.587499 h 7.9375 l 6.35,-10.583334 V 38.335418 h -3.175 v -3.439584 z"
				id="path57793"
			/>
			<path
				style="fill:#1c2c3d;fill-opacity:1;fill-rule:evenodd;stroke:none;stroke-width:4.99999;stroke-linecap:round;stroke-linejoin:round;stroke-miterlimit:3"
				d="m 19.285418,68.7625 v -5.556249 h 6.085417 l 0.529166,-0.529167 4.497917,-0.529167 h 8.202083 l 2.116667,-1.852083 v -6.35 h -2.910417 l -3.175,-6.35 h 3.175 l 6.085417,6.085417 v 11.90625 H 28.281251 l -2.910416,1.322916 -2.910417,1.852083 z"
				id="path57795"
			/>
			<path
				style="fill:#d75b1d;fill-opacity:1;fill-rule:evenodd;stroke:none;stroke-width:4.99999;stroke-linecap:round;stroke-linejoin:round;stroke-miterlimit:3"
				d="m 14.522918,117.975 h 7.672917 v -3.96875 c -3.555648,-0.0732 -7.284507,-0.38865 -7.672917,3.96875 z"
				id="path57797"
			/>
			<path
				style="fill:#7c1817;fill-opacity:1;fill-rule:evenodd;stroke:none;stroke-width:4.99999;stroke-linecap:round;stroke-linejoin:round;stroke-miterlimit:3"
				d="m 17.962502,117.975 h 4.233333 v -3.96875 c -3.672811,1.23283 -4.141238,2.91439 -4.233333,3.96875 z"
				id="path57799"
			/>
			<path
				style="fill:#d75b1d;fill-opacity:1;fill-rule:evenodd;stroke:none;stroke-width:4.99999;stroke-linecap:round;stroke-linejoin:round;stroke-miterlimit:3"
				d="m 14.522918,124.325 h 7.672917 v -3.96875 c -3.555648,-0.0732 -7.284507,-0.38865 -7.672917,3.96875 z"
				id="path57801"
			/>
			<path
				style="fill:#7c1817;fill-opacity:1;fill-rule:evenodd;stroke:none;stroke-width:4.99999;stroke-linecap:round;stroke-linejoin:round;stroke-miterlimit:3"
				d="m 17.962502,124.325 h 4.233333 v -3.96875 c -3.672811,1.23283 -4.141238,2.91439 -4.233333,3.96875 z"
				id="path57803"
			/>
			<path
				style="fill:#2c6167;fill-opacity:1;fill-rule:evenodd;stroke:none;stroke-width:4.99999;stroke-linecap:round;stroke-linejoin:round;stroke-miterlimit:3"
				d="m 25.900001,124.325 h 25.135417 l 5.55625,-5.55625 v -16.40416 h -9.525 V 83.05 l -2.38125,-2.38125 H 37.277085 L 34.366668,83.05 v 20.6375 l 4.7625,4.7625 h 5.027083 v 5.82084 h -18.25625 z"
				id="path57805"
			/>
			<path
				style="fill:#d75b1d;fill-opacity:1;fill-rule:evenodd;stroke:none;stroke-width:4.99999;stroke-linecap:round;stroke-linejoin:round;stroke-miterlimit:3"
				d="M 49.712501,120.35625 H 31.985418 l 2.116667,-2.64583 H 47.066668 V 102.36459 H 67.175001 L 63.470834,105.275 H 49.712501 Z"
				id="path57807"
			/>
			<path
				style="fill:#d75b1d;fill-opacity:1;fill-rule:evenodd;stroke:none;stroke-width:4.99999;stroke-linecap:round;stroke-linejoin:round;stroke-miterlimit:3"
				d="m 53.152084,116.91667 h 7.408334 l 3.175,-2.64583 H 52.887501 v 2.64583 z"
				id="path57809"
			/>
			<path
				style="fill:#d75b1d;fill-opacity:1;fill-rule:evenodd;stroke:none;stroke-width:4.99999;stroke-linecap:round;stroke-linejoin:round;stroke-miterlimit:3"
				d="m 53.152085,111.09583 h 8.73125 L 65.322918,108.45 H 52.887502 v 2.64583 z"
				id="path57811"
			/>
			<path
				style="fill:#d75b1d;fill-opacity:1;fill-rule:evenodd;stroke:none;stroke-width:4.99999;stroke-linecap:round;stroke-linejoin:round;stroke-miterlimit:3"
				d="m 37.277085,90.19375 h 6.879166 v -6.879166 c -1.768858,2.623738 -3.885032,5.131361 -6.879166,6.879166 z"
				id="path57813"
			/>
			<path
				style="fill:#d75b1d;fill-opacity:1;fill-rule:evenodd;stroke:none;stroke-width:4.99999;stroke-linecap:round;stroke-linejoin:round;stroke-miterlimit:3"
				d="m 67.175001,117.975 h 7.672917 v -3.96875 c -3.555648,-0.0732 -7.284507,-0.38865 -7.672917,3.96875 z"
				id="path57815"
			/>
			<path
				style="fill:#7c1817;fill-opacity:1;fill-rule:evenodd;stroke:none;stroke-width:4.99999;stroke-linecap:round;stroke-linejoin:round;stroke-miterlimit:3"
				d="m 70.614585,117.975 h 4.233333 v -3.96875 c -3.672811,1.23283 -4.141238,2.91439 -4.233333,3.96875 z"
				id="path57817"
			/>
			<path
				style="fill:#d75b1d;fill-opacity:1;fill-rule:evenodd;stroke:none;stroke-width:4.99999;stroke-linecap:round;stroke-linejoin:round;stroke-miterlimit:3"
				d="m 67.175001,124.325 h 7.672917 v -3.96875 c -3.555648,-0.0732 -7.284507,-0.38865 -7.672917,3.96875 z"
				id="path57819"
			/>
			<path
				style="fill:#7c1817;fill-opacity:1;fill-rule:evenodd;stroke:none;stroke-width:4.99999;stroke-linecap:round;stroke-linejoin:round;stroke-miterlimit:3"
				d="m 70.614585,124.325 h 4.233333 v -3.96875 c -3.672811,1.23283 -4.141238,2.91439 -4.233333,3.96875 z"
				id="path57821"
			/>
			<path
				style="fill:#2c6167;fill-opacity:1;fill-rule:evenodd;stroke:none;stroke-width:4.99999;stroke-linecap:round;stroke-linejoin:round;stroke-miterlimit:3"
				d="M 78.287501,124.325 H 99.71875 V 102.36459 H 83.843751 V 99.454167 H 96.54375 V 84.6375 L 89.929167,78.022917 H 79.875001 L 74.847917,83.05 v 23.01875 l 5.027084,5.02709 h 7.408333 v 3.175 h -8.995833 z"
				id="path57823"
			/>
			<path
				style="fill:#d75b1d;fill-opacity:1;fill-rule:evenodd;stroke:none;stroke-width:4.99999;stroke-linecap:round;stroke-linejoin:round;stroke-miterlimit:3"
				d="m 81.462501,120.35625 c 0.351824,-2.09263 1.375468,-2.34476 2.38125,-2.64583 h 6.614583 v -15.34583 h 17.197916 l -3.70417,2.91041 H 93.104167 v 15.08125 z"
				id="path57825"
			/>
			<path
				style="fill:#d75b1d;fill-opacity:1;fill-rule:evenodd;stroke:none;stroke-width:5.24404;stroke-linecap:round;stroke-linejoin:round;stroke-miterlimit:3"
				d="m 96.279167,116.91667 h 7.672913 l 3.175,-2.91042 H 96.279167 Z"
				id="path57827"
			/>
			<path
				style="fill:#d75b1d;fill-opacity:1;fill-rule:evenodd;stroke:none;stroke-width:5.24403;stroke-linecap:round;stroke-linejoin:round;stroke-miterlimit:3"
				d="m 96.279167,111.09583 h 7.672913 l 3.175,-2.91041 H 96.279167 Z"
				id="path57829"
			/>
			<path
				style="fill:#d75b1d;fill-opacity:1;fill-rule:evenodd;stroke:none;stroke-width:4.99999;stroke-linecap:round;stroke-linejoin:round;stroke-miterlimit:3"
				d="M 84.108334,89.929167 H 77.229167 C 80.059435,88.259643 82.255681,85.854222 84.108334,83.05 Z"
				id="path57831"
			/>
			<path
				style="fill:#d75b1d;fill-opacity:1;fill-rule:evenodd;stroke:none;stroke-width:4.99999;stroke-linecap:round;stroke-linejoin:round;stroke-miterlimit:3"
				d="M 93.368752,89.929167 H 86.489585 C 89.319853,88.259643 91.516099,85.854222 93.368752,83.05 Z"
				id="path57833"
			/>
			<path
				style="fill:#e7e04d;fill-opacity:1;fill-rule:evenodd;stroke:none;stroke-width:4.99999;stroke-linecap:round;stroke-linejoin:round;stroke-miterlimit:3"
				d="m 124.58958,111.36042 h 3.43958 l -1.5875,-16.668753 z"
				id="path57835"
			/>
			<path
				style="fill:#e19a38;fill-opacity:1;fill-rule:evenodd;stroke:none;stroke-width:4.99999;stroke-linecap:round;stroke-linejoin:round;stroke-miterlimit:3"
				d="m 128.02916,111.36042 v 7.14375 h -3.43958 v -7.14375 z"
				id="path57837"
			/>
			<path
				style="fill:#cfb481;fill-opacity:1;fill-rule:evenodd;stroke:none;stroke-width:4.99999;stroke-linecap:round;stroke-linejoin:round;stroke-miterlimit:3"
				d="m 128.02916,118.50417 v 0.79375 l -4.49791,4.49792 -9.525,0.26458 -4.7625,-4.7625 V 92.045834 l -2.38125,-2.38125 h -7.14375 v -6.35 h 7.9375 l 4.7625,4.7625 v 30.427086 l 2.38125,2.38125 h 7.40833 l 2.38125,-2.38125 z"
				id="path57839"
			/>
			<path
				style="fill:#d75b1d;fill-opacity:1;fill-rule:evenodd;stroke:none;stroke-width:4.99999;stroke-linecap:round;stroke-linejoin:round;stroke-miterlimit:3"
				d="m 115.59375,115.06459 -3.175,3.175 v 0.26458 l 1.85208,1.85208 3.175,-3.175 z"
				id="path57841"
			/>
			<path
				style="fill:#e3bc19;fill-opacity:1;fill-rule:evenodd;stroke:none;stroke-width:4.99999;stroke-linecap:round;stroke-linejoin:round;stroke-miterlimit:3"
				d="m 117.44583,117.18125 4.23333,-4.23333 -1.85208,-1.85208 -4.23333,3.96875 z"
				id="path57843"
			/>
			<path
				style="fill:#e7e04d;fill-opacity:1;fill-rule:evenodd;stroke:none;stroke-width:4.99999;stroke-linecap:round;stroke-linejoin:round;stroke-miterlimit:3"
				d="m 119.82708,111.09584 3.175,-1.5875 -1.32292,3.43958 z"
				id="path57845"
			/>
			<path
				style="fill:#e7e04d;fill-opacity:1;fill-rule:evenodd;stroke:none;stroke-width:4.99999;stroke-linecap:round;stroke-linejoin:round;stroke-miterlimit:3"
				d="m 120.62083,108.18542 v -2.64583 l 2.91042,1.32291 z"
				id="path57847"
			/>
			<path
				style="fill:#e3bc19;fill-opacity:1;fill-rule:evenodd;stroke:none;stroke-width:4.99999;stroke-linecap:round;stroke-linejoin:round;stroke-miterlimit:3"
				d="m 120.62083,108.18542 h -5.29167 v -2.64583 h 5.29167 z"
				id="path57849"
			/>
			<path
				style="fill:#d75b1d;fill-opacity:1;fill-rule:evenodd;stroke:none;stroke-width:4.99999;stroke-linecap:round;stroke-linejoin:round;stroke-miterlimit:3"
				d="m 112.41875,108.18542 h 2.91041 v -2.64583 h -2.91041 z"
				id="path57851"
			/>
			<path
				style="fill:#e7e04d;fill-opacity:1;fill-rule:evenodd;stroke:none;stroke-width:4.99999;stroke-linecap:round;stroke-linejoin:round;stroke-miterlimit:3"
				d="m 120.62083,98.660416 v -2.64583 l 2.91042,1.32291 z"
				id="path57853"
			/>
			<path
				style="fill:#e3bc19;fill-opacity:1;fill-rule:evenodd;stroke:none;stroke-width:4.99999;stroke-linecap:round;stroke-linejoin:round;stroke-miterlimit:3"
				d="m 120.62083,98.660416 h -5.29167 v -2.64583 h 5.29167 z"
				id="path57855"
			/>
			<path
				style="fill:#d75b1d;fill-opacity:1;fill-rule:evenodd;stroke:none;stroke-width:4.99999;stroke-linecap:round;stroke-linejoin:round;stroke-miterlimit:3"
				d="m 112.41875,98.660416 h 2.91041 v -2.64583 h -2.91041 z"
				id="path57857"
			/>
			<path
				style="fill:#e7e04d;fill-opacity:1;fill-rule:evenodd;stroke:none;stroke-width:4.99999;stroke-linecap:round;stroke-linejoin:round;stroke-miterlimit:3"
				d="m 120.62083,89.4 v -2.64583 l 2.91042,1.32291 z"
				id="path57859"
			/>
			<path
				style="fill:#e3bc19;fill-opacity:1;fill-rule:evenodd;stroke:none;stroke-width:4.99999;stroke-linecap:round;stroke-linejoin:round;stroke-miterlimit:3"
				d="m 120.62083,89.4 h -5.29167 v -2.64583 h 5.29167 z"
				id="path57861"
			/>
			<path
				style="fill:#d75b1d;fill-opacity:1;fill-rule:evenodd;stroke:none;stroke-width:6.39601;stroke-linecap:round;stroke-linejoin:round;stroke-miterlimit:3"
				d="m 110.56666,89.4 h 4.7625 v -2.64583 h -4.7625 z"
				id="path57863"
			/>
			<path
				style="fill:#d75b1d;fill-opacity:1;fill-rule:evenodd;stroke:none;stroke-width:4.99999;stroke-linecap:round;stroke-linejoin:round;stroke-miterlimit:3"
				d="M 68.762502,89.929167 H 61.883335 C 64.713603,88.259643 66.909849,85.854222 68.762502,83.05 Z"
				id="path57865"
			/>
			<path
				style="fill:#d75b1d;fill-opacity:1;fill-rule:evenodd;stroke:none;stroke-width:4.99999;stroke-linecap:round;stroke-linejoin:round;stroke-miterlimit:3"
				d="M 59.502085,89.929167 H 52.622918 C 55.453186,88.259643 57.649432,85.854222 59.502085,83.05 Z"
				id="path57867"
			/>
			<path
				style="fill:#d75b1d;fill-opacity:1;fill-rule:evenodd;stroke:none;stroke-width:4.99999;stroke-linecap:round;stroke-linejoin:round;stroke-miterlimit:3"
				d="m 59.502085,80.933335 h -6.879167 c 2.830268,-1.669524 5.026514,-4.074945 6.879167,-6.879167 z"
				id="path57869"
			/>
			<path
				style="fill:#d75b1d;fill-opacity:1;fill-rule:evenodd;stroke:none;stroke-width:4.99999;stroke-linecap:round;stroke-linejoin:round;stroke-miterlimit:3"
				d="m 68.762502,80.933335 h -6.879167 c 2.830268,-1.669524 5.026514,-4.074945 6.879167,-6.879167 z"
				id="path57871"
			/>
			<path
				style="fill:#d75b1d;fill-opacity:1;fill-rule:evenodd;stroke:none;stroke-width:4.99999;stroke-linecap:round;stroke-linejoin:round;stroke-miterlimit:3"
				d="M 28.281252,89.929167 H 21.402085 C 24.232353,88.259643 26.428599,85.854222 28.281252,83.05 Z"
				id="path57873"
			/>
			<path
				style="fill:#d75b1d;fill-opacity:1;fill-rule:evenodd;stroke:none;stroke-width:4.99999;stroke-linecap:round;stroke-linejoin:round;stroke-miterlimit:3"
				d="m 28.281252,80.933335 h -6.879167 c 2.830268,-1.669524 5.026514,-4.074945 6.879167,-6.879167 z"
				id="path57875"
			/>
			<path
				style="fill:#cfb481;fill-opacity:1;fill-rule:evenodd;stroke:none;stroke-width:4.99999;stroke-linecap:round;stroke-linejoin:round;stroke-miterlimit:3"
				d="M 72.202084,93.104167 H 50.241668 v 6.085416 c 9.42881,-0.0082 18.730707,-0.07425 21.960416,-2.910416 z"
				id="path57877"
			/>
			<path
				style="fill:#cfb481;fill-opacity:1;fill-rule:evenodd;stroke:none;stroke-width:4.99999;stroke-linecap:round;stroke-linejoin:round;stroke-miterlimit:3"
				d="m 31.720835,102.36459 v -6.350007 h -7.9375 L 16.110418,88.341667 V 66.38125 l 7.408333,-7.408333 h 12.170834 l 2.116666,-2.116666 v -6.085417 l -3.175,-3.175 h -7.14375 l -2.116666,-1.5875 v 4.7625 h -0.529167 l -1.058333,-1.058333 h -1.322917 v -2.116667 l -3.175,-1.833086 v 5.008086 h -3.175 v -3.175 l -3.175,-1.833086 v 8.447669 h 15.345833 c 2.114948,-0.255855 3.161154,-1.49465 3.439584,-3.439583 h 2.645833 v 6.085417 h -18.25625 v 5.291666 h -3.175 v 31.75 l 8.466667,8.466673 z"
				id="path57879"
			/>
			<path
				style="fill:#cfb481;fill-opacity:1;fill-rule:evenodd;stroke:none;stroke-width:4.99999;stroke-linecap:round;stroke-linejoin:round;stroke-miterlimit:3"
				d="m 16.110418,34.895834 v -2.645833 h 12.7 l -2.645833,2.116667 h -3.439584 v 0.529166 z"
				id="path57881"
			/>
			<path
				style="fill:#d75b1d;fill-opacity:1;fill-rule:evenodd;stroke:none;stroke-width:4.99999;stroke-linecap:round;stroke-linejoin:round;stroke-miterlimit:3"
				d="m 16.110418,87.01875 v -2.910416 h -4.233333 l -1.5875,2.910416 z"
				id="path57883"
			/>
			<path
				style="fill:#d75b1d;fill-opacity:1;fill-rule:evenodd;stroke:none;stroke-width:4.99999;stroke-linecap:round;stroke-linejoin:round;stroke-miterlimit:3"
				d="m 16.110418,80.668751 v -2.910416 h -4.233333 l -1.5875,2.910416 z"
				id="path57885"
			/>
			<path
				style="fill:#d75b1d;fill-opacity:1;fill-rule:evenodd;stroke:none;stroke-width:4.99999;stroke-linecap:round;stroke-linejoin:round;stroke-miterlimit:3"
				d="m 16.110418,74.583334 v -2.910416 h -4.233333 l -1.5875,2.910416 z"
				id="path57887"
			/>
			<path
				style="fill:#d75b1d;fill-opacity:1;fill-rule:evenodd;stroke:none;stroke-width:4.99999;stroke-linecap:round;stroke-linejoin:round;stroke-miterlimit:3"
				d="m 16.110418,68.233334 v -2.910416 h -4.233333 l -1.5875,2.910416 z"
				id="path57889"
			/>
			<path
				style="fill:#d75b1d;fill-opacity:1;fill-rule:evenodd;stroke:none;stroke-width:4.99999;stroke-linecap:round;stroke-linejoin:round;stroke-miterlimit:3"
				d="m 16.110418,62.147917 v -3.174999 h -4.233333 l -1.5875,3.174999 z"
				id="path57891"
			/>
			<path
				style="fill:#d75b1d;fill-opacity:1;fill-rule:evenodd;stroke:none;stroke-width:4.99999;stroke-linecap:round;stroke-linejoin:round;stroke-miterlimit:3"
				d="m 19.285418,65.322917 v -2.116666 h 3.175 l 2.910417,3.704166 V 68.7625 h -2.910417 z"
				id="path57893"
			/>
			<path
				style="fill:#d75b1d;fill-opacity:1;fill-rule:evenodd;stroke:none;stroke-width:4.99999;stroke-linecap:round;stroke-linejoin:round;stroke-miterlimit:3"
				d="m 25.635418,62.941667 v -3.96875 h 1.852083 l 2.910417,3.175 v 3.439584 h -2.116667 z"
				id="path57895"
			/>
			<path
				style="fill:#d75b1d;fill-opacity:1;fill-rule:evenodd;stroke:none;stroke-width:4.99999;stroke-linecap:round;stroke-linejoin:round;stroke-miterlimit:3"
				d="m 35.160418,65.587501 h 2.645833 v -2.116667 l -4.497916,-4.497917 h -1.5875 v 3.175 z"
				id="path57897"
			/>
			<path
				style="fill:#d75b1d;fill-opacity:1;fill-rule:evenodd;stroke:none;stroke-width:4.99999;stroke-linecap:round;stroke-linejoin:round;stroke-miterlimit:3"
				d="m 41.510418,65.587501 h 2.116666 0.264584 v -2.38125 l -3.96875,-3.704167 h -2.116667 v 2.645833 z"
				id="path57899"
			/>
			<path
				style="fill:#d75b1d;fill-opacity:1;fill-rule:evenodd;stroke:none;stroke-width:4.99999;stroke-linecap:round;stroke-linejoin:round;stroke-miterlimit:3"
				d="m 43.891668,59.766667 v -2.910416 l -3.175,-2.910417 h -2.910417 v 1.058333 l 4.7625,4.7625 z"
				id="path57901"
			/>
			<path
				style="fill:#d75b1d;fill-opacity:1;fill-rule:evenodd;stroke:none;stroke-width:4.99999;stroke-linecap:round;stroke-linejoin:round;stroke-miterlimit:3"
				d="m 37.806251,47.595834 v 1.058333 l 5.027083,5.027084 h 1.058334 v -3.704167 l -2.645834,-2.38125 z"
				id="path57903"
			/>
			<path
				style="fill:#d75b1d;fill-opacity:1;fill-rule:evenodd;stroke:none;stroke-width:4.99999;stroke-linecap:round;stroke-linejoin:round;stroke-miterlimit:3"
				d="m 46.272918,47.595835 2.38125,-2.910418 h 6.614583 l -2.116667,2.910417 z"
				id="path57905"
			/>
			<path
				style="fill:#813611;fill-opacity:1;fill-rule:evenodd;stroke:none;stroke-width:4.99999;stroke-linecap:round;stroke-linejoin:round;stroke-miterlimit:3"
				d="M -1.0874983,38.335418 H 5.2625015 V 32.250001 Z"
				id="path57907"
			/>
			<path
				style="fill:#813611;fill-opacity:1;fill-rule:evenodd;stroke:none;stroke-width:4.99999;stroke-linecap:round;stroke-linejoin:round;stroke-miterlimit:3"
				d="m -1.0874983,32.250001 h 6.3499998 v 6.085417 z"
				id="path57909"
			/>
			<path
				style="fill:#d75b1d;fill-opacity:1;fill-rule:evenodd;stroke:none;stroke-width:4.99999;stroke-linecap:round;stroke-linejoin:round;stroke-miterlimit:3"
				d="m -0.029165,32.250001 h 6.3499999 v 6.085417 z"
				id="path57911"
			/>
			<path
				style="fill:#d75b1d;fill-opacity:1;fill-rule:evenodd;stroke:none;stroke-width:4.99999;stroke-linecap:round;stroke-linejoin:round;stroke-miterlimit:3"
				d="m 72.995834,19.020834 c 1.790687,3.242277 3.915132,3.171568 6.085417,2.645834 C 79.88832,14.388292 76.943536,9.445772 74.054167,4.4687517 73.963937,9.4404122 73.961117,14.452342 72.995834,19.020834 Z"
				id="path57913"
			/>
			<path
				style="fill:#d75b1d;fill-opacity:1;fill-rule:evenodd;stroke:none;stroke-width:4.99999;stroke-linecap:round;stroke-linejoin:round;stroke-miterlimit:3"
				d="m 91.781251,22.195834 c 2.230164,3.09907 5.271311,2.771565 8.202083,2.910417 C 99.397676,17.146017 97.114381,9.8585875 92.045834,3.6750016 92.619082,9.828271 92.202536,16.011979 91.781251,22.195834 Z"
				id="path57915"
			/>
			<path
				style="fill:#d75b1d;fill-opacity:1;fill-rule:evenodd;stroke:none;stroke-width:4.99999;stroke-linecap:round;stroke-linejoin:round;stroke-miterlimit:3"
				d="m 110.83125,29.339584 c 2.00879,2.399901 4.16058,1.735494 6.35,0.264584 -1.47559,-9.233637 -3.56187,-13.21763 -5.55625,-17.991667 0.43398,6.784307 0.0115,12.475977 -0.79375,17.727083 z"
				id="path57917"
			/>
			<path
				style="fill:#d75b1d;fill-opacity:1;fill-rule:evenodd;stroke:none;stroke-width:4.99999;stroke-linecap:round;stroke-linejoin:round;stroke-miterlimit:3"
				d="m 117.44583,53.681251 c 0.71568,2.314209 2.20057,2.751544 4.23333,1.852083 l 3.96875,-10.847917 z"
				id="path57919"
			/>
			<path
				style="fill:#d75b1d;fill-opacity:1;fill-rule:evenodd;stroke:none;stroke-width:4.99999;stroke-linecap:round;stroke-linejoin:round;stroke-miterlimit:3"
				d="m 19.285418,54.210417 h 3.175 V 51.300001 C 22.201006,50.39447 21.792867,49.869487 21.137501,49.977084 h -1.852083 z"
				id="path57921"
			/>
			<path
				style="fill:#d75b1d;fill-opacity:1;fill-rule:evenodd;stroke:none;stroke-width:4.99999;stroke-linecap:round;stroke-linejoin:round;stroke-miterlimit:3"
				d="m 12.935418,54.210417 h 3.175 V 51.300001 C 15.851006,50.39447 15.442867,49.869487 14.787501,49.977084 h -1.852083 z"
				id="path57923"
			/>
			<path
				style="fill:#e3bc19;fill-opacity:1;fill-rule:evenodd;stroke:none;stroke-width:4.99999;stroke-linecap:round;stroke-linejoin:round;stroke-miterlimit:3"
				d="m 41.245834,47.595834 v -2.910417 h 7.408334 l -2.38125,2.910417 z"
				id="path57925"
			/>
			<path
				style="fill:#cfb481;fill-opacity:1;fill-rule:evenodd;stroke:none;stroke-width:4.99999;stroke-linecap:round;stroke-linejoin:round;stroke-miterlimit:3"
				d="m 42.833334,47.595834 2.645834,-2.910417 h -4.233334 v 2.910417 z"
				id="path57927"
			/>
			<path
				style="fill:#d75b1d;fill-opacity:1;fill-rule:evenodd;stroke:none;stroke-width:4.99999;stroke-linecap:round;stroke-linejoin:round;stroke-miterlimit:3"
				d="m 46.272918,41.113544 2.38125,-2.910418 h 6.614583 l -2.116667,2.910417 z"
				id="path57929"
			/>
			<path
				style="fill:#e3bc19;fill-opacity:1;fill-rule:evenodd;stroke:none;stroke-width:4.99999;stroke-linecap:round;stroke-linejoin:round;stroke-miterlimit:3"
				d="m 41.245834,41.113543 v -2.910417 h 7.408334 l -2.38125,2.910417 z"
				id="path57931"
			/>
			<path
				style="fill:#cfb481;fill-opacity:1;fill-rule:evenodd;stroke:none;stroke-width:4.99999;stroke-linecap:round;stroke-linejoin:round;stroke-miterlimit:3"
				d="m 42.833334,41.113543 2.645834,-2.910417 h -4.233334 v 2.910417 z"
				id="path57933"
			/>
			<path
				style="fill:#e9a33e;fill-opacity:1;fill-rule:evenodd;stroke:none;stroke-width:4.99999;stroke-linecap:round;stroke-linejoin:round;stroke-miterlimit:3"
				d="m 6.3208349,38.335418 h 3.7041671 v -2.645834 l 1.058333,-0.79375 -1.3229168,-2.645833 H 6.3208349 Z"
				id="path57935"
			/>
			<path
				style="fill:#b89354;fill-opacity:1;fill-rule:evenodd;stroke:none;stroke-width:4.99999;stroke-linecap:round;stroke-linejoin:round;stroke-miterlimit:3"
				d="m 11.083335,34.895834 h 5.027083 V 32.250001 H 9.7604182 Z"
				id="path57937"
			/>
			<path
				style="fill:#867866;fill-opacity:1;fill-rule:evenodd;stroke:none;stroke-width:4.99999;stroke-linecap:round;stroke-linejoin:round;stroke-miterlimit:3"
				d="m 34.631251,33.837501 v 1.322917 h 3.175 v 2.910416 l 3.175,-1.852083 v -1.322917 -1.058333 z"
				id="path57939"
			/>
			<path
				style="fill:#1c2c3d;fill-opacity:1;fill-rule:evenodd;stroke:none;stroke-width:4.99999;stroke-linecap:round;stroke-linejoin:round;stroke-miterlimit:3"
				d="m 10.025002,41.245834 h 5.027083 l -2.38125,2.116667 z"
				id="path57941"
			/>
			<path
				style="fill:#1c2c3d;fill-opacity:1;fill-rule:evenodd;stroke:none;stroke-width:4.99999;stroke-linecap:round;stroke-linejoin:round;stroke-miterlimit:3"
				d="m 19.020835,44.420834 v -1.058333 l 5.291666,-5.027083 h 9.789584 v 0.529166 l -4.497917,4.497917 h -6.35 l -1.322917,1.058333 z"
				id="path57943"
			/>
			<path
				style="fill:#7f1617;fill-opacity:1;fill-rule:evenodd;stroke:none;stroke-width:4.99999;stroke-linecap:round;stroke-linejoin:round;stroke-miterlimit:3"
				d="m 23.254168,43.362501 3.175,-5.027083 h 5.291667 l -5.027084,5.027083 z"
				id="path57945"
			/>
			<circle
				style="fill:#17d1a3;fill-opacity:1;fill-rule:evenodd;stroke:none;stroke-width:4.99999;stroke-linecap:round;stroke-linejoin:round;stroke-miterlimit:3"
				id="circle57947"
				cx="26.164585"
				cy="39.92292"
				r="2.0032752"
			/>
			<path
				style="fill:#1c2c3d;fill-opacity:1;fill-rule:evenodd;stroke:none;stroke-width:4.99999;stroke-linecap:round;stroke-linejoin:round;stroke-miterlimit:3"
				d="m 23.254168,43.362501 3.175,-5.027083 h -2.116667 z"
				id="path57949"
			/>
			<path
				style="fill:#2c6167;fill-opacity:1;fill-rule:evenodd;stroke:none;stroke-width:4.99999;stroke-linecap:round;stroke-linejoin:round;stroke-miterlimit:3"
				d="m 24.841668,38.335418 h 2.645833 l -1.5875,-0.79375 z"
				id="path57951"
			/>
			<path
				style="fill:#595650;fill-opacity:1;fill-rule:evenodd;stroke:none;stroke-width:4.99999;stroke-linecap:round;stroke-linejoin:round;stroke-miterlimit:3"
				d="m 114.00625,66.910417 4.49791,-1.852083 3.175,-9.525 -4.23333,-1.852083 -4.7625,5.291666 z"
				id="path57953"
			/>
			<path
				style="fill:#595650;fill-opacity:1;fill-rule:evenodd;stroke:none;stroke-width:4.99999;stroke-linecap:round;stroke-linejoin:round;stroke-miterlimit:3"
				d="m 103.42291,46.008335 2.11667,2.645832 5.29167,1.322917 c 3.09058,-6.679387 6.71426,-13.297696 6.35,-20.372916 l -6.35,-0.264584 c -1.41334,4.575615 -2.82798,8.887969 -7.40834,16.668751 z"
				id="path57955"
			/>
			<path
				style="fill:#595650;fill-opacity:1;fill-rule:evenodd;stroke:none;stroke-width:4.99999;stroke-linecap:round;stroke-linejoin:round;stroke-miterlimit:3"
				d="m 87.547917,44.950001 6.35,0.264583 c 3.371925,-7.547121 6.464783,-14.918851 6.085417,-20.108333 l -8.202083,-2.910417 c -0.970383,6.215452 -3.078378,12.554895 -6.614584,19.05 z"
				id="path57957"
			/>
			<path
				style="fill:#595650;fill-opacity:1;fill-rule:evenodd;stroke:none;stroke-width:4.99999;stroke-linecap:round;stroke-linejoin:round;stroke-miterlimit:3"
				d="m 67.439584,43.627084 4.7625,0.529167 c 2.177175,-4.237975 3.547415,-8.920727 5.027084,-12.964583 1.462284,-3.996344 2.176988,-7.733626 1.852083,-9.525 l -6.085417,-2.645834 c -1.401596,7.442081 -4.818551,14.115233 -7.9375,20.902084 z"
				id="path57959"
			/>
			<path
				style="fill:#d75b1d;fill-opacity:1;fill-rule:evenodd;stroke:none;stroke-width:4.99999;stroke-linecap:round;stroke-linejoin:round;stroke-miterlimit:3"
				d="m 43.920833,100.27708 h 8.73125 l 3.439583,-2.645821 H 43.65625 v 2.645821 z"
				id="path57961"
			/>
			<path
				style="fill:#e9a33e;fill-opacity:1;fill-rule:evenodd;stroke-width:4.99999;stroke-linecap:round;stroke-linejoin:round;stroke-miterlimit:3"
				d="M 22.225,32.279166 19.05,28.839583 v 3.439583 z"
				id="path57963"
			/>
			<path
				style="fill:#e9a33e;fill-opacity:1;fill-rule:evenodd;stroke-width:4.99999;stroke-linecap:round;stroke-linejoin:round;stroke-miterlimit:3"
				d="m 16.139583,32.279166 -3.175,-3.439583 v 3.439583 z"
				id="path57965"
			/>
			<path
				style="fill:#d75b1d;fill-opacity:1;fill-rule:evenodd;stroke:none;stroke-width:4.99999;stroke-linecap:round;stroke-linejoin:round;stroke-miterlimit:3"
				d="M -0.029165,38.335418 H 6.3208349 V 32.250001 Z"
				id="path57967"
			/>
			<path
				style="fill:url(#linearGradient58733);fill-opacity:1;fill-rule:evenodd;stroke-width:6.26249;stroke-linecap:round;stroke-linejoin:round;stroke-miterlimit:3"
				d="M 59.236364,10.298533 73.788448,1.984375 66.440719,16.536458 c -2.950247,-1.038109 -6.150726,-1.601471 -7.204355,-6.237925 z"
				id="path57969"
			/>
			<path
				style="fill:url(#linearGradient58735);fill-opacity:1;fill-rule:evenodd;stroke:none;stroke-width:1;stroke-linecap:round;stroke-linejoin:round;stroke-miterlimit:3;stroke-dasharray:none;stroke-opacity:1"
				d="M 53.987782,16.461425 C 55.444114,13.371181 56.763759,7.6754606 56.44177,4.1943433 58.705817,12.613522 67.160093,16.265872 73.874172,17.258245 71.254748,17.406869 64.984446,19.452066 62.026346,21.408747 Z"
				id="path57971"
			/>
			<path
				style="fill:url(#linearGradient58737);fill-opacity:1;fill-rule:evenodd;stroke-width:6.4006;stroke-linecap:round;stroke-linejoin:round;stroke-miterlimit:3"
				d="m 50.453753,21.474508 c 1.194055,-2.533709 2.27604,-7.203663 2.012039,-10.057852 1.856305,6.902934 8.788015,9.897516 14.292927,10.711169 -2.147682,0.121858 -7.288738,1.798726 -9.714102,3.403021 z"
				id="path57973"
			/>
			<path
				style="fill:url(#linearGradient58739);fill-opacity:1;fill-rule:evenodd;stroke-width:5.99594;stroke-linecap:round;stroke-linejoin:round;stroke-miterlimit:3"
				d="m 46.598882,25.446966 c 1.171965,-2.153264 2.188427,-6.143453 1.863866,-8.599918 2.029771,5.964368 9.172557,8.669215 14.815112,9.473559 -2.192962,0.0635 -7.415856,1.405185 -9.864242,2.736593 z"
				id="path57975"
			/>
			<path
				style="fill:#1c2c3d;fill-opacity:1;fill-rule:evenodd;stroke-width:4.99999;stroke-linecap:round;stroke-linejoin:round;stroke-miterlimit:3"
				d="m 46.831249,25.4 6.614584,2.116666 v 2.910417 l -6.35,4.497917 h -6.085417 v -1.058334 l -6.614583,10e-7 V 31.220833 C 36.730603,27.829032 43.304024,26.059441 46.831249,25.4 Z"
				id="path57977"
			/>
			<path
				style="fill:#d75b1d;fill-opacity:1;fill-rule:evenodd;stroke:none;stroke-width:4.99999;stroke-linecap:round;stroke-linejoin:round;stroke-miterlimit:3"
				d="m 87.973958,100.27708 h 8.73125 l 3.439582,-2.645821 H 87.709375 v 2.645821 z"
				id="path57979"
			/>
		</g>
		<g id="g57783">
			<path
				style="fill:url(#linearGradient175472);fill-opacity:1;fill-rule:evenodd;stroke:none;stroke-width:4.99999;stroke-linecap:round;stroke-linejoin:round;stroke-miterlimit:3"
				d="m 96.54375,75.1125 -3.174999,-3.175 1.322916,-6.879166 20.372913,-24.60625 c 0.31316,4.587512 0.74075,9.132689 2.38125,13.229167 l -14.2875,15.610416 -1.85208,-1.852083 z"
				id="path175464"
			/>
			<path
				style="fill:url(#linearGradient175255);fill-opacity:1;fill-rule:evenodd;stroke:none;stroke-width:4.99999;stroke-linecap:round;stroke-linejoin:round;stroke-miterlimit:3"
				d="m 103.42291,77.49375 c 2.38595,-7.094298 8.97975,-10.582232 15.08125,-12.435416 -2.4191,6.176808 -3.60439,11.527796 1.05834,12.964583 l -2.11667,2.910417 z"
				id="path175247"
			/>
			<path
				style="fill:url(#linearGradient177624);fill-opacity:1;fill-rule:evenodd;stroke:none;stroke-width:4.99999;stroke-linecap:round;stroke-linejoin:round;stroke-miterlimit:3"
				d="m 75.377084,71.408334 h 7.408333 C 99.40582,57.561675 112.14356,42.149055 111.36041,24.577084 l -4.23333,1.322917 V 17.433334 L 102.62916,21.931251 98.925,17.697918 C 91.075695,35.60139 65.998257,65.296481 75.377084,71.408334 Z"
				id="path177616"
			/>
			<path
				style="fill:url(#linearGradient178705);fill-opacity:1;fill-rule:evenodd;stroke:none;stroke-width:4.99999;stroke-linecap:round;stroke-linejoin:round;stroke-miterlimit:3"
				d="m 55.533334,71.408334 h 7.14375 L 75.641667,56.327084 C 102.47046,20.453573 91.286641,24.483781 92.310417,14.258334 l -3.175,2.910417 -3.175,-5.820833 -3.175,5.55625 -6.085416,-7.6729164 C 79.174855,32.842033 64.385339,50.756943 55.533334,71.408334 Z"
				id="path178697"
			/>
			<path
				style="fill:#2c6167;fill-opacity:1;fill-rule:evenodd;stroke:none;stroke-width:4.99999;stroke-linecap:round;stroke-linejoin:round;stroke-miterlimit:3"
				d="m 34.631251,31.191668 h -4.7625 l -1.058333,1.058333 -2.645833,2.116667 h -3.439584 v 0.529166 h -0.264583 v 2.645834 l -7.408333,3.704166 h -5.027083 v 6.879167 l 2.910416,2.910416 h 16.933333 v -1.5875 h 5.688542 v 8.995834 H 17.962501 l -1.852083,7.937499 v 21.960417 l 7.672918,7.672916 h 7.937499 V 82.25625 l 4.7625,-4.7625 h 8.731249 l 5.291667,5.291667 v 10.31875 h 21.695833 v -11.1125 l 7.672917,-7.672917 h 9.525 l 10.318749,10.31875 10.84791,6.263048 v 28.397372 l 4.58272,2.64583 h 8.64645 l 3.43958,-3.43958 -1.55969,-5.82083 -1.08614,0.79375 H 124.325 l -2.38125,3.96875 -3.175,0.52916 V 82.25625 l -4.7625,-4.7625 h -10.58334 c 1.50231,-3.381183 3.22945,-5.207482 5.29167,-6.879165 1.5085,-1.222824 3.13427,-2.4514 5.29167,-3.704167 v -1e-6 l 1.85208,-7.9375 h -3.175 l -5.82083,6.085418 -3.70417,4.233332 -1.85208,-1.852083 -4.7625,7.672916 -3.174999,-3.175 1.058334,-2.910415 2.38125,-3.175 c 3.284565,-3.768058 7.032905,-7.246104 10.583325,-10.847917 l 3.43959,-5.027084 -2.11667,-5.027083 -3.175,3.704166 -2.11667,-2.645833 -11.112493,15.875 -2.645833,-2.910417 -4.762499,7.408334 -2.116668,5.027083 h -7.408333 l 1.058334,-3.704166 2.38125,-3.96875 10.583334,-11.90625 4.497915,-6.614584 -3.439583,-3.96875 -2.910417,3.704167 -2.38125,-3.704167 -3.968749,6.879167 -5.556251,8.202083 -2.116666,-2.116667 c -4.450371,5.546416 -8.77722,11.120399 -10.847917,17.197917 h -7.14375 l 4.497918,-8.466666 10.054166,-14.552083 2.116666,-4.233334 c -0.49724,-1.761897 -1.637677,-2.92673 -2.910417,-3.96875 l -1.852083,3.439583 c -1.315704,-2.873029 -3.394856,-5.468345 -5.820833,-7.9375 l -5.027083,18.785417 -2.38125,-2.645834 -12.435417,19.579167 h -8.202083 l -0.79375,-0.79375 V 67.175 l 3.175,-1.587499 h 7.9375 l 6.35,-10.583334 V 38.335418 h -3.175 v -3.439584 z"
				id="path171764"
			/>
			<path
				style="fill:#1c2c3d;fill-opacity:1;fill-rule:evenodd;stroke:none;stroke-width:4.99999;stroke-linecap:round;stroke-linejoin:round;stroke-miterlimit:3"
				d="m 19.285418,68.7625 v -5.556249 h 6.085417 l 0.529166,-0.529167 4.497917,-0.529167 h 8.202083 l 2.116667,-1.852083 v -6.35 h -2.910417 l -3.175,-6.35 h 3.175 l 6.085417,6.085417 v 11.90625 H 28.281251 l -2.910416,1.322916 -2.910417,1.852083 z"
				id="path170019"
			/>
			<path
				style="fill:#d75b1d;fill-opacity:1;fill-rule:evenodd;stroke:none;stroke-width:4.99999;stroke-linecap:round;stroke-linejoin:round;stroke-miterlimit:3"
				d="m 14.522918,117.975 h 7.672917 v -3.96875 c -3.555648,-0.0732 -7.284507,-0.38865 -7.672917,3.96875 z"
				id="path159276"
			/>
			<path
				style="fill:#7c1817;fill-opacity:1;fill-rule:evenodd;stroke:none;stroke-width:4.99999;stroke-linecap:round;stroke-linejoin:round;stroke-miterlimit:3"
				d="m 17.962502,117.975 h 4.233333 v -3.96875 c -3.672811,1.23283 -4.141238,2.91439 -4.233333,3.96875 z"
				id="path159761"
			/>
			<path
				style="fill:#d75b1d;fill-opacity:1;fill-rule:evenodd;stroke:none;stroke-width:4.99999;stroke-linecap:round;stroke-linejoin:round;stroke-miterlimit:3"
				d="m 14.522918,124.325 h 7.672917 v -3.96875 c -3.555648,-0.0732 -7.284507,-0.38865 -7.672917,3.96875 z"
				id="path160239"
			/>
			<path
				style="fill:#7c1817;fill-opacity:1;fill-rule:evenodd;stroke:none;stroke-width:4.99999;stroke-linecap:round;stroke-linejoin:round;stroke-miterlimit:3"
				d="m 17.962502,124.325 h 4.233333 v -3.96875 c -3.672811,1.23283 -4.141238,2.91439 -4.233333,3.96875 z"
				id="path160241"
			/>
			<path
				style="fill:#2c6167;fill-opacity:1;fill-rule:evenodd;stroke:none;stroke-width:4.99999;stroke-linecap:round;stroke-linejoin:round;stroke-miterlimit:3"
				d="m 25.900001,124.325 h 25.135417 l 5.55625,-5.55625 v -16.40416 h -9.525 V 83.05 l -2.38125,-2.38125 H 37.277085 L 34.366668,83.05 v 20.6375 l 4.7625,4.7625 h 5.027083 v 5.82084 h -18.25625 z"
				id="path160243"
			/>
			<path
				style="fill:#d75b1d;fill-opacity:1;fill-rule:evenodd;stroke:none;stroke-width:4.99999;stroke-linecap:round;stroke-linejoin:round;stroke-miterlimit:3"
				d="M 49.712501,120.35625 H 31.985418 l 2.116667,-2.64583 H 47.066668 V 102.36459 H 67.175001 L 63.470834,105.275 H 49.712501 Z"
				id="path160514"
			/>
			<path
				style="fill:#d75b1d;fill-opacity:1;fill-rule:evenodd;stroke:none;stroke-width:4.99999;stroke-linecap:round;stroke-linejoin:round;stroke-miterlimit:3"
				d="m 53.152084,116.91667 h 7.408334 l 3.175,-2.64583 H 52.887501 v 2.64583 z"
				id="path160854"
			/>
			<path
				style="fill:#d75b1d;fill-opacity:1;fill-rule:evenodd;stroke:none;stroke-width:4.99999;stroke-linecap:round;stroke-linejoin:round;stroke-miterlimit:3"
				d="m 53.152085,111.09583 h 8.73125 L 65.322918,108.45 H 52.887502 v 2.64583 z"
				id="path160856"
			/>
			<path
				style="fill:#d75b1d;fill-opacity:1;fill-rule:evenodd;stroke:none;stroke-width:4.99999;stroke-linecap:round;stroke-linejoin:round;stroke-miterlimit:3"
				d="m 37.277085,90.19375 h 6.879166 v -6.879166 c -1.768858,2.623738 -3.885032,5.131361 -6.879166,6.879166 z"
				id="path160858"
			/>
			<path
				style="fill:#d75b1d;fill-opacity:1;fill-rule:evenodd;stroke:none;stroke-width:4.99999;stroke-linecap:round;stroke-linejoin:round;stroke-miterlimit:3"
				d="m 67.175001,117.975 h 7.672917 v -3.96875 c -3.555648,-0.0732 -7.284507,-0.38865 -7.672917,3.96875 z"
				id="path160900"
			/>
			<path
				style="fill:#7c1817;fill-opacity:1;fill-rule:evenodd;stroke:none;stroke-width:4.99999;stroke-linecap:round;stroke-linejoin:round;stroke-miterlimit:3"
				d="m 70.614585,117.975 h 4.233333 v -3.96875 c -3.672811,1.23283 -4.141238,2.91439 -4.233333,3.96875 z"
				id="path160902"
			/>
			<path
				style="fill:#d75b1d;fill-opacity:1;fill-rule:evenodd;stroke:none;stroke-width:4.99999;stroke-linecap:round;stroke-linejoin:round;stroke-miterlimit:3"
				d="m 67.175001,124.325 h 7.672917 v -3.96875 c -3.555648,-0.0732 -7.284507,-0.38865 -7.672917,3.96875 z"
				id="path160904"
			/>
			<path
				style="fill:#7c1817;fill-opacity:1;fill-rule:evenodd;stroke:none;stroke-width:4.99999;stroke-linecap:round;stroke-linejoin:round;stroke-miterlimit:3"
				d="m 70.614585,124.325 h 4.233333 v -3.96875 c -3.672811,1.23283 -4.141238,2.91439 -4.233333,3.96875 z"
				id="path160906"
			/>
			<path
				style="fill:#2c6167;fill-opacity:1;fill-rule:evenodd;stroke:none;stroke-width:4.99999;stroke-linecap:round;stroke-linejoin:round;stroke-miterlimit:3"
				d="M 78.287501,124.325 H 99.71875 V 102.36459 H 83.843751 V 99.454167 H 96.54375 V 84.6375 L 89.929167,78.022917 H 79.875001 L 74.847917,83.05 v 23.01875 l 5.027084,5.02709 h 7.408333 v 3.175 h -8.995833 z"
				id="path162425"
			/>
			<path
				style="fill:#d75b1d;fill-opacity:1;fill-rule:evenodd;stroke:none;stroke-width:4.99999;stroke-linecap:round;stroke-linejoin:round;stroke-miterlimit:3"
				d="m 81.462501,120.35625 c 0.351824,-2.09263 1.375468,-2.34476 2.38125,-2.64583 h 6.614583 v -15.34583 h 17.197916 l -3.70417,2.91041 H 93.104167 v 15.08125 z"
				id="path162496"
			/>
			<path
				style="fill:#d75b1d;fill-opacity:1;fill-rule:evenodd;stroke:none;stroke-width:5.24404;stroke-linecap:round;stroke-linejoin:round;stroke-miterlimit:3"
				d="m 96.279167,116.91667 h 7.672913 l 3.175,-2.91042 H 96.279167 Z"
				id="path162774"
			/>
			<path
				style="fill:#d75b1d;fill-opacity:1;fill-rule:evenodd;stroke:none;stroke-width:5.24403;stroke-linecap:round;stroke-linejoin:round;stroke-miterlimit:3"
				d="m 96.279167,111.09583 h 7.672913 l 3.175,-2.91041 H 96.279167 Z"
				id="path162776"
			/>
			<path
				style="fill:#d75b1d;fill-opacity:1;fill-rule:evenodd;stroke:none;stroke-width:4.99999;stroke-linecap:round;stroke-linejoin:round;stroke-miterlimit:3"
				d="M 84.108334,89.929167 H 77.229167 C 80.059435,88.259643 82.255681,85.854222 84.108334,83.05 Z"
				id="path162778"
			/>
			<path
				style="fill:#d75b1d;fill-opacity:1;fill-rule:evenodd;stroke:none;stroke-width:4.99999;stroke-linecap:round;stroke-linejoin:round;stroke-miterlimit:3"
				d="M 93.368752,89.929167 H 86.489585 C 89.319853,88.259643 91.516099,85.854222 93.368752,83.05 Z"
				id="path162780"
			/>
			<path
				style="fill:#e7e04d;fill-opacity:1;fill-rule:evenodd;stroke:none;stroke-width:4.99999;stroke-linecap:round;stroke-linejoin:round;stroke-miterlimit:3"
				d="m 124.58958,111.36042 h 3.43958 l -1.5875,-16.668753 z"
				id="path164236"
			/>
			<path
				style="fill:#e19a38;fill-opacity:1;fill-rule:evenodd;stroke:none;stroke-width:4.99999;stroke-linecap:round;stroke-linejoin:round;stroke-miterlimit:3"
				d="m 128.02916,111.36042 v 7.14375 h -3.43958 v -7.14375 z"
				id="path164982"
			/>
			<path
				style="fill:#cfb481;fill-opacity:1;fill-rule:evenodd;stroke:none;stroke-width:4.99999;stroke-linecap:round;stroke-linejoin:round;stroke-miterlimit:3"
				d="m 128.02916,118.50417 v 0.79375 l -4.49791,4.49792 -9.525,0.26458 -4.7625,-4.7625 V 92.045834 l -2.38125,-2.38125 h -7.14375 v -6.35 h 7.9375 l 4.7625,4.7625 v 30.427086 l 2.38125,2.38125 h 7.40833 l 2.38125,-2.38125 z"
				id="path165253"
			/>
			<path
				style="fill:#d75b1d;fill-opacity:1;fill-rule:evenodd;stroke:none;stroke-width:4.99999;stroke-linecap:round;stroke-linejoin:round;stroke-miterlimit:3"
				d="m 115.59375,115.06459 -3.175,3.175 v 0.26458 l 1.85208,1.85208 3.175,-3.175 z"
				id="path165457"
			/>
			<path
				style="fill:#e3bc19;fill-opacity:1;fill-rule:evenodd;stroke:none;stroke-width:4.99999;stroke-linecap:round;stroke-linejoin:round;stroke-miterlimit:3"
				d="m 117.44583,117.18125 4.23333,-4.23333 -1.85208,-1.85208 -4.23333,3.96875 z"
				id="path165743"
			/>
			<path
				style="fill:#e7e04d;fill-opacity:1;fill-rule:evenodd;stroke:none;stroke-width:4.99999;stroke-linecap:round;stroke-linejoin:round;stroke-miterlimit:3"
				d="m 119.82708,111.09584 3.175,-1.5875 -1.32292,3.43958 z"
				id="path165937"
			/>
			<path
				style="fill:#e7e04d;fill-opacity:1;fill-rule:evenodd;stroke:none;stroke-width:4.99999;stroke-linecap:round;stroke-linejoin:round;stroke-miterlimit:3"
				d="m 120.62083,108.18542 v -2.64583 l 2.91042,1.32291 z"
				id="path166154"
			/>
			<path
				style="fill:#e3bc19;fill-opacity:1;fill-rule:evenodd;stroke:none;stroke-width:4.99999;stroke-linecap:round;stroke-linejoin:round;stroke-miterlimit:3"
				d="m 120.62083,108.18542 h -5.29167 v -2.64583 h 5.29167 z"
				id="path166156"
			/>
			<path
				style="fill:#d75b1d;fill-opacity:1;fill-rule:evenodd;stroke:none;stroke-width:4.99999;stroke-linecap:round;stroke-linejoin:round;stroke-miterlimit:3"
				d="m 112.41875,108.18542 h 2.91041 v -2.64583 h -2.91041 z"
				id="path166158"
			/>
			<path
				style="fill:#e7e04d;fill-opacity:1;fill-rule:evenodd;stroke:none;stroke-width:4.99999;stroke-linecap:round;stroke-linejoin:round;stroke-miterlimit:3"
				d="m 120.62083,98.660416 v -2.64583 l 2.91042,1.32291 z"
				id="path166298"
			/>
			<path
				style="fill:#e3bc19;fill-opacity:1;fill-rule:evenodd;stroke:none;stroke-width:4.99999;stroke-linecap:round;stroke-linejoin:round;stroke-miterlimit:3"
				d="m 120.62083,98.660416 h -5.29167 v -2.64583 h 5.29167 z"
				id="path166300"
			/>
			<path
				style="fill:#d75b1d;fill-opacity:1;fill-rule:evenodd;stroke:none;stroke-width:4.99999;stroke-linecap:round;stroke-linejoin:round;stroke-miterlimit:3"
				d="m 112.41875,98.660416 h 2.91041 v -2.64583 h -2.91041 z"
				id="path166302"
			/>
			<path
				style="fill:#e7e04d;fill-opacity:1;fill-rule:evenodd;stroke:none;stroke-width:4.99999;stroke-linecap:round;stroke-linejoin:round;stroke-miterlimit:3"
				d="m 120.62083,89.4 v -2.64583 l 2.91042,1.32291 z"
				id="path166304"
			/>
			<path
				style="fill:#e3bc19;fill-opacity:1;fill-rule:evenodd;stroke:none;stroke-width:4.99999;stroke-linecap:round;stroke-linejoin:round;stroke-miterlimit:3"
				d="m 120.62083,89.4 h -5.29167 v -2.64583 h 5.29167 z"
				id="path166306"
			/>
			<path
				style="fill:#d75b1d;fill-opacity:1;fill-rule:evenodd;stroke:none;stroke-width:6.39601;stroke-linecap:round;stroke-linejoin:round;stroke-miterlimit:3"
				d="m 110.56666,89.4 h 4.7625 v -2.64583 h -4.7625 z"
				id="path166308"
			/>
			<path
				style="fill:#d75b1d;fill-opacity:1;fill-rule:evenodd;stroke:none;stroke-width:4.99999;stroke-linecap:round;stroke-linejoin:round;stroke-miterlimit:3"
				d="M 68.762502,89.929167 H 61.883335 C 64.713603,88.259643 66.909849,85.854222 68.762502,83.05 Z"
				id="path167762"
			/>
			<path
				style="fill:#d75b1d;fill-opacity:1;fill-rule:evenodd;stroke:none;stroke-width:4.99999;stroke-linecap:round;stroke-linejoin:round;stroke-miterlimit:3"
				d="M 59.502085,89.929167 H 52.622918 C 55.453186,88.259643 57.649432,85.854222 59.502085,83.05 Z"
				id="path167764"
			/>
			<path
				style="fill:#d75b1d;fill-opacity:1;fill-rule:evenodd;stroke:none;stroke-width:4.99999;stroke-linecap:round;stroke-linejoin:round;stroke-miterlimit:3"
				d="m 59.502085,80.933335 h -6.879167 c 2.830268,-1.669524 5.026514,-4.074945 6.879167,-6.879167 z"
				id="path167766"
			/>
			<path
				style="fill:#d75b1d;fill-opacity:1;fill-rule:evenodd;stroke:none;stroke-width:4.99999;stroke-linecap:round;stroke-linejoin:round;stroke-miterlimit:3"
				d="m 68.762502,80.933335 h -6.879167 c 2.830268,-1.669524 5.026514,-4.074945 6.879167,-6.879167 z"
				id="path167768"
			/>
			<path
				style="fill:#d75b1d;fill-opacity:1;fill-rule:evenodd;stroke:none;stroke-width:4.99999;stroke-linecap:round;stroke-linejoin:round;stroke-miterlimit:3"
				d="M 28.281252,89.929167 H 21.402085 C 24.232353,88.259643 26.428599,85.854222 28.281252,83.05 Z"
				id="path167770"
			/>
			<path
				style="fill:#d75b1d;fill-opacity:1;fill-rule:evenodd;stroke:none;stroke-width:4.99999;stroke-linecap:round;stroke-linejoin:round;stroke-miterlimit:3"
				d="m 28.281252,80.933335 h -6.879167 c 2.830268,-1.669524 5.026514,-4.074945 6.879167,-6.879167 z"
				id="path167772"
			/>
			<path
				style="fill:#cfb481;fill-opacity:1;fill-rule:evenodd;stroke:none;stroke-width:4.99999;stroke-linecap:round;stroke-linejoin:round;stroke-miterlimit:3"
				d="M 72.202084,93.104167 H 50.241668 v 6.085416 c 9.42881,-0.0082 18.730707,-0.07425 21.960416,-2.910416 z"
				id="path167774"
			/>
			<path
				style="fill:#cfb481;fill-opacity:1;fill-rule:evenodd;stroke:none;stroke-width:4.99999;stroke-linecap:round;stroke-linejoin:round;stroke-miterlimit:3"
				d="m 31.720835,102.36459 v -6.350007 h -7.9375 L 16.110418,88.341667 V 66.38125 l 7.408333,-7.408333 h 12.170834 l 2.116666,-2.116666 v -6.085417 l -3.175,-3.175 h -7.14375 l -2.116666,-1.5875 v 4.7625 h -0.529167 l -1.058333,-1.058333 h -1.322917 v -2.116667 l -3.175,-1.833086 v 5.008086 h -3.175 v -3.175 l -3.175,-1.833086 v 8.447669 h 15.345833 c 2.114948,-0.255855 3.161154,-1.49465 3.439584,-3.439583 h 2.645833 v 6.085417 h -18.25625 v 5.291666 h -3.175 v 31.75 l 8.466667,8.466673 z"
				id="path167776"
			/>
			<path
				style="fill:#cfb481;fill-opacity:1;fill-rule:evenodd;stroke:none;stroke-width:4.99999;stroke-linecap:round;stroke-linejoin:round;stroke-miterlimit:3"
				d="m 16.110418,34.895834 v -2.645833 h 12.7 l -2.645833,2.116667 h -3.439584 v 0.529166 z"
				id="path167778"
			/>
			<path
				style="fill:#d75b1d;fill-opacity:1;fill-rule:evenodd;stroke:none;stroke-width:4.99999;stroke-linecap:round;stroke-linejoin:round;stroke-miterlimit:3"
				d="m 16.110418,87.01875 v -2.910416 h -4.233333 l -1.5875,2.910416 z"
				id="path167782"
			/>
			<path
				style="fill:#d75b1d;fill-opacity:1;fill-rule:evenodd;stroke:none;stroke-width:4.99999;stroke-linecap:round;stroke-linejoin:round;stroke-miterlimit:3"
				d="m 16.110418,80.668751 v -2.910416 h -4.233333 l -1.5875,2.910416 z"
				id="path168060"
			/>
			<path
				style="fill:#d75b1d;fill-opacity:1;fill-rule:evenodd;stroke:none;stroke-width:4.99999;stroke-linecap:round;stroke-linejoin:round;stroke-miterlimit:3"
				d="m 16.110418,74.583334 v -2.910416 h -4.233333 l -1.5875,2.910416 z"
				id="path168062"
			/>
			<path
				style="fill:#d75b1d;fill-opacity:1;fill-rule:evenodd;stroke:none;stroke-width:4.99999;stroke-linecap:round;stroke-linejoin:round;stroke-miterlimit:3"
				d="m 16.110418,68.233334 v -2.910416 h -4.233333 l -1.5875,2.910416 z"
				id="path168064"
			/>
			<path
				style="fill:#d75b1d;fill-opacity:1;fill-rule:evenodd;stroke:none;stroke-width:4.99999;stroke-linecap:round;stroke-linejoin:round;stroke-miterlimit:3"
				d="m 16.110418,62.147917 v -3.174999 h -4.233333 l -1.5875,3.174999 z"
				id="path168066"
			/>
			<path
				style="fill:#d75b1d;fill-opacity:1;fill-rule:evenodd;stroke:none;stroke-width:4.99999;stroke-linecap:round;stroke-linejoin:round;stroke-miterlimit:3"
				d="m 19.285418,65.322917 v -2.116666 h 3.175 l 2.910417,3.704166 V 68.7625 h -2.910417 z"
				id="path168068"
			/>
			<path
				style="fill:#d75b1d;fill-opacity:1;fill-rule:evenodd;stroke:none;stroke-width:4.99999;stroke-linecap:round;stroke-linejoin:round;stroke-miterlimit:3"
				d="m 25.635418,62.941667 v -3.96875 h 1.852083 l 2.910417,3.175 v 3.439584 h -2.116667 z"
				id="path168070"
			/>
			<path
				style="fill:#d75b1d;fill-opacity:1;fill-rule:evenodd;stroke:none;stroke-width:4.99999;stroke-linecap:round;stroke-linejoin:round;stroke-miterlimit:3"
				d="m 35.160418,65.587501 h 2.645833 v -2.116667 l -4.497916,-4.497917 h -1.5875 v 3.175 z"
				id="path168072"
			/>
			<path
				style="fill:#d75b1d;fill-opacity:1;fill-rule:evenodd;stroke:none;stroke-width:4.99999;stroke-linecap:round;stroke-linejoin:round;stroke-miterlimit:3"
				d="m 41.510418,65.587501 h 2.116666 0.264584 v -2.38125 l -3.96875,-3.704167 h -2.116667 v 2.645833 z"
				id="path168074"
			/>
			<path
				style="fill:#d75b1d;fill-opacity:1;fill-rule:evenodd;stroke:none;stroke-width:4.99999;stroke-linecap:round;stroke-linejoin:round;stroke-miterlimit:3"
				d="m 43.891668,59.766667 v -2.910416 l -3.175,-2.910417 h -2.910417 v 1.058333 l 4.7625,4.7625 z"
				id="path168076"
			/>
			<path
				style="fill:#d75b1d;fill-opacity:1;fill-rule:evenodd;stroke:none;stroke-width:4.99999;stroke-linecap:round;stroke-linejoin:round;stroke-miterlimit:3"
				d="m 37.806251,47.595834 v 1.058333 l 5.027083,5.027084 h 1.058334 v -3.704167 l -2.645834,-2.38125 z"
				id="path168078"
			/>
			<path
				style="fill:#d75b1d;fill-opacity:1;fill-rule:evenodd;stroke:none;stroke-width:4.99999;stroke-linecap:round;stroke-linejoin:round;stroke-miterlimit:3"
				d="m 46.272918,47.595835 2.38125,-2.910418 h 6.614583 l -2.116667,2.910417 z"
				id="path168080"
			/>
			<path
				style="fill:#813611;fill-opacity:1;fill-rule:evenodd;stroke:none;stroke-width:4.99999;stroke-linecap:round;stroke-linejoin:round;stroke-miterlimit:3"
				d="M -1.0874983,38.335418 H 5.2625015 V 32.250001 Z"
				id="path191351"
			/>
			<path
				style="fill:#813611;fill-opacity:1;fill-rule:evenodd;stroke:none;stroke-width:4.99999;stroke-linecap:round;stroke-linejoin:round;stroke-miterlimit:3"
				d="m -1.0874983,32.250001 h 6.3499998 v 6.085417 z"
				id="path191353"
			/>
			<path
				style="fill:#d75b1d;fill-opacity:1;fill-rule:evenodd;stroke:none;stroke-width:4.99999;stroke-linecap:round;stroke-linejoin:round;stroke-miterlimit:3"
				d="m -0.029165,32.250001 h 6.3499999 v 6.085417 z"
				id="path168082"
			/>
			<path
				style="fill:#d75b1d;fill-opacity:1;fill-rule:evenodd;stroke:none;stroke-width:4.99999;stroke-linecap:round;stroke-linejoin:round;stroke-miterlimit:3"
				d="m 72.995834,19.020834 c 1.790687,3.242277 3.915132,3.171568 6.085417,2.645834 C 79.88832,14.388292 76.943536,9.445772 74.054167,4.4687517 73.963937,9.4404122 73.961117,14.452342 72.995834,19.020834 Z"
				id="path168086"
			/>
			<path
				style="fill:#d75b1d;fill-opacity:1;fill-rule:evenodd;stroke:none;stroke-width:4.99999;stroke-linecap:round;stroke-linejoin:round;stroke-miterlimit:3"
				d="m 91.781251,22.195834 c 2.230164,3.09907 5.271311,2.771565 8.202083,2.910417 C 99.397676,17.146017 97.114381,9.8585875 92.045834,3.6750016 92.619082,9.828271 92.202536,16.011979 91.781251,22.195834 Z"
				id="path168088"
			/>
			<path
				style="fill:#d75b1d;fill-opacity:1;fill-rule:evenodd;stroke:none;stroke-width:4.99999;stroke-linecap:round;stroke-linejoin:round;stroke-miterlimit:3"
				d="m 110.83125,29.339584 c 2.00879,2.399901 4.16058,1.735494 6.35,0.264584 -1.47559,-9.233637 -3.56187,-13.21763 -5.55625,-17.991667 0.43398,6.784307 0.0115,12.475977 -0.79375,17.727083 z"
				id="path168090"
			/>
			<path
				style="fill:#d75b1d;fill-opacity:1;fill-rule:evenodd;stroke:none;stroke-width:4.99999;stroke-linecap:round;stroke-linejoin:round;stroke-miterlimit:3"
				d="m 117.44583,53.681251 c 0.71568,2.314209 2.20057,2.751544 4.23333,1.852083 l 3.96875,-10.847917 z"
				id="path168092"
			/>
			<path
				style="fill:#d75b1d;fill-opacity:1;fill-rule:evenodd;stroke:none;stroke-width:4.99999;stroke-linecap:round;stroke-linejoin:round;stroke-miterlimit:3"
				d="m 19.285418,54.210417 h 3.175 V 51.300001 C 22.201006,50.39447 21.792867,49.869487 21.137501,49.977084 h -1.852083 z"
				id="path168094"
			/>
			<path
				style="fill:#d75b1d;fill-opacity:1;fill-rule:evenodd;stroke:none;stroke-width:4.99999;stroke-linecap:round;stroke-linejoin:round;stroke-miterlimit:3"
				d="m 12.935418,54.210417 h 3.175 V 51.300001 C 15.851006,50.39447 15.442867,49.869487 14.787501,49.977084 h -1.852083 z"
				id="path168096"
			/>
			<path
				style="fill:#e3bc19;fill-opacity:1;fill-rule:evenodd;stroke:none;stroke-width:4.99999;stroke-linecap:round;stroke-linejoin:round;stroke-miterlimit:3"
				d="m 41.245834,47.595834 v -2.910417 h 7.408334 l -2.38125,2.910417 z"
				id="path168098"
			/>
			<path
				style="fill:#cfb481;fill-opacity:1;fill-rule:evenodd;stroke:none;stroke-width:4.99999;stroke-linecap:round;stroke-linejoin:round;stroke-miterlimit:3"
				d="m 42.833334,47.595834 2.645834,-2.910417 h -4.233334 v 2.910417 z"
				id="path168238"
			/>
			<path
				style="fill:#d75b1d;fill-opacity:1;fill-rule:evenodd;stroke:none;stroke-width:4.99999;stroke-linecap:round;stroke-linejoin:round;stroke-miterlimit:3"
				d="m 46.272918,41.113544 2.38125,-2.910418 h 6.614583 l -2.116667,2.910417 z"
				id="path168516"
			/>
			<path
				style="fill:#e3bc19;fill-opacity:1;fill-rule:evenodd;stroke:none;stroke-width:4.99999;stroke-linecap:round;stroke-linejoin:round;stroke-miterlimit:3"
				d="m 41.245834,41.113543 v -2.910417 h 7.408334 l -2.38125,2.910417 z"
				id="path168518"
			/>
			<path
				style="fill:#cfb481;fill-opacity:1;fill-rule:evenodd;stroke:none;stroke-width:4.99999;stroke-linecap:round;stroke-linejoin:round;stroke-miterlimit:3"
				d="m 42.833334,41.113543 2.645834,-2.910417 h -4.233334 v 2.910417 z"
				id="path168520"
			/>
			<path
				style="fill:#e9a33e;fill-opacity:1;fill-rule:evenodd;stroke:none;stroke-width:4.99999;stroke-linecap:round;stroke-linejoin:round;stroke-miterlimit:3"
				d="m 6.3208349,38.335418 h 3.7041671 v -2.645834 l 1.058333,-0.79375 -1.3229168,-2.645833 H 6.3208349 Z"
				id="path168800"
			/>
			<path
				style="fill:#b89354;fill-opacity:1;fill-rule:evenodd;stroke:none;stroke-width:4.99999;stroke-linecap:round;stroke-linejoin:round;stroke-miterlimit:3"
				d="m 11.083335,34.895834 h 5.027083 V 32.250001 H 9.7604182 Z"
				id="path169339"
			/>
			<path
				style="fill:#867866;fill-opacity:1;fill-rule:evenodd;stroke:none;stroke-width:4.99999;stroke-linecap:round;stroke-linejoin:round;stroke-miterlimit:3"
				d="m 34.631251,33.837501 v 1.322917 h 3.175 v 2.910416 l 3.175,-1.852083 v -1.322917 -1.058333 z"
				id="path169541"
			/>
			<path
				style="fill:#1c2c3d;fill-opacity:1;fill-rule:evenodd;stroke:none;stroke-width:4.99999;stroke-linecap:round;stroke-linejoin:round;stroke-miterlimit:3"
				d="m 10.025002,41.245834 h 5.027083 l -2.38125,2.116667 z"
				id="path170351"
			/>
			<path
				style="fill:#1c2c3d;fill-opacity:1;fill-rule:evenodd;stroke:none;stroke-width:4.99999;stroke-linecap:round;stroke-linejoin:round;stroke-miterlimit:3"
				d="m 19.020835,44.420834 v -1.058333 l 5.291666,-5.027083 h 9.789584 v 0.529166 l -4.497917,4.497917 h -6.35 l -1.322917,1.058333 z"
				id="path170430"
			/>
			<path
				style="fill:#7f1617;fill-opacity:1;fill-rule:evenodd;stroke:none;stroke-width:4.99999;stroke-linecap:round;stroke-linejoin:round;stroke-miterlimit:3"
				d="m 23.254168,43.362501 3.175,-5.027083 h 5.291667 l -5.027084,5.027083 z"
				id="path170432"
			/>
			<circle
				style="fill:#17d1a3;fill-opacity:1;fill-rule:evenodd;stroke:none;stroke-width:4.99999;stroke-linecap:round;stroke-linejoin:round;stroke-miterlimit:3"
				id="path170816"
				cx="26.164585"
				cy="39.92292"
				r="2.0032752"
			/>
			<path
				style="fill:#1c2c3d;fill-opacity:1;fill-rule:evenodd;stroke:none;stroke-width:4.99999;stroke-linecap:round;stroke-linejoin:round;stroke-miterlimit:3"
				d="m 23.254168,43.362501 3.175,-5.027083 h -2.116667 z"
				id="path171553"
			/>
			<path
				style="fill:#2c6167;fill-opacity:1;fill-rule:evenodd;stroke:none;stroke-width:4.99999;stroke-linecap:round;stroke-linejoin:round;stroke-miterlimit:3"
				d="m 24.841668,38.335418 h 2.645833 l -1.5875,-0.79375 z"
				id="path171835"
			/>
			<path
				style="fill:#595650;fill-opacity:1;fill-rule:evenodd;stroke:none;stroke-width:4.99999;stroke-linecap:round;stroke-linejoin:round;stroke-miterlimit:3"
				d="m 114.00625,66.910417 4.49791,-1.852083 3.175,-9.525 -4.23333,-1.852083 -4.7625,5.291666 z"
				id="path174015"
			/>
			<path
				style="fill:#595650;fill-opacity:1;fill-rule:evenodd;stroke:none;stroke-width:4.99999;stroke-linecap:round;stroke-linejoin:round;stroke-miterlimit:3"
				d="m 103.42291,46.008335 2.11667,2.645832 5.29167,1.322917 c 3.09058,-6.679387 6.71426,-13.297696 6.35,-20.372916 l -6.35,-0.264584 c -1.41334,4.575615 -2.82798,8.887969 -7.40834,16.668751 z"
				id="path174416"
			/>
			<path
				style="fill:#595650;fill-opacity:1;fill-rule:evenodd;stroke:none;stroke-width:4.99999;stroke-linecap:round;stroke-linejoin:round;stroke-miterlimit:3"
				d="m 87.547917,44.950001 6.35,0.264583 c 3.371925,-7.547121 6.464783,-14.918851 6.085417,-20.108333 l -8.202083,-2.910417 c -0.970383,6.215452 -3.078378,12.554895 -6.614584,19.05 z"
				id="path174418"
			/>
			<path
				style="fill:#595650;fill-opacity:1;fill-rule:evenodd;stroke:none;stroke-width:4.99999;stroke-linecap:round;stroke-linejoin:round;stroke-miterlimit:3"
				d="m 67.439584,43.627084 4.7625,0.529167 c 2.177175,-4.237975 3.547415,-8.920727 5.027084,-12.964583 1.462284,-3.996344 2.176988,-7.733626 1.852083,-9.525 l -6.085417,-2.645834 c -1.401596,7.442081 -4.818551,14.115233 -7.9375,20.902084 z"
				id="path174420"
			/>
			<path
				style="fill:#d75b1d;fill-opacity:1;fill-rule:evenodd;stroke:none;stroke-width:4.99999;stroke-linecap:round;stroke-linejoin:round;stroke-miterlimit:3"
				d="m 43.920833,100.27708 h 8.73125 l 3.439583,-2.645821 H 43.65625 v 2.645821 z"
				id="path185840"
			/>
			<path
				style="fill:#e9a33e;fill-opacity:1;fill-rule:evenodd;stroke-width:4.99999;stroke-linecap:round;stroke-linejoin:round;stroke-miterlimit:3"
				d="M 22.225,32.279166 19.05,28.839583 v 3.439583 z"
				id="path188441"
			/>
			<path
				style="fill:#e9a33e;fill-opacity:1;fill-rule:evenodd;stroke-width:4.99999;stroke-linecap:round;stroke-linejoin:round;stroke-miterlimit:3"
				d="m 16.139583,32.279166 -3.175,-3.439583 v 3.439583 z"
				id="path188443"
			/>
			<path
				style="fill:#d75b1d;fill-opacity:1;fill-rule:evenodd;stroke:none;stroke-width:4.99999;stroke-linecap:round;stroke-linejoin:round;stroke-miterlimit:3"
				d="M -0.029165,38.335418 H 6.3208349 V 32.250001 Z"
				id="path190623"
			/>
			<path
				style="fill:url(#linearGradient216459);fill-opacity:1;fill-rule:evenodd;stroke-width:6.26249;stroke-linecap:round;stroke-linejoin:round;stroke-miterlimit:3"
				d="M 59.236364,10.298533 73.788448,1.984375 66.440719,16.536458 c -2.950247,-1.038109 -6.150726,-1.601471 -7.204355,-6.237925 z"
				id="path202501"
			/>
			<path
				style="fill:url(#linearGradient214538);fill-opacity:1;fill-rule:evenodd;stroke:none;stroke-width:1;stroke-linecap:round;stroke-linejoin:round;stroke-miterlimit:3;stroke-dasharray:none;stroke-opacity:1"
				d="M 53.987782,16.461425 C 55.444114,13.371181 56.763759,7.6754606 56.44177,4.1943433 58.705817,12.613522 67.160093,16.265872 73.874172,17.258245 71.254748,17.406869 64.984446,19.452066 62.026346,21.408747 Z"
				id="path201773"
			/>
			<path
				style="fill:url(#linearGradient214323);fill-opacity:1;fill-rule:evenodd;stroke-width:6.4006;stroke-linecap:round;stroke-linejoin:round;stroke-miterlimit:3"
				d="m 50.453753,21.474508 c 1.194055,-2.533709 2.27604,-7.203663 2.012039,-10.057852 1.856305,6.902934 8.788015,9.897516 14.292927,10.711169 -2.147682,0.121858 -7.288738,1.798726 -9.714102,3.403021 z"
				id="path201771"
			/>
			<path
				style="fill:url(#linearGradient211312);fill-opacity:1;fill-rule:evenodd;stroke-width:5.99594;stroke-linecap:round;stroke-linejoin:round;stroke-miterlimit:3"
				d="m 46.598882,25.446966 c 1.171965,-2.153264 2.188427,-6.143453 1.863866,-8.599918 2.029771,5.964368 9.172557,8.669215 14.815112,9.473559 -2.192962,0.0635 -7.415856,1.405185 -9.864242,2.736593 z"
				id="path200317"
			/>
			<path
				style="fill:#1c2c3d;fill-opacity:1;fill-rule:evenodd;stroke-width:4.99999;stroke-linecap:round;stroke-linejoin:round;stroke-miterlimit:3"
				d="m 46.831249,25.4 6.614584,2.116666 v 2.910417 l -6.35,4.497917 h -6.085417 v -1.058334 l -6.614583,10e-7 V 31.220833 C 36.730603,27.829032 43.304024,26.059441 46.831249,25.4 Z"
				id="path197945"
			/>
			<path
				style="fill:#d75b1d;fill-opacity:1;fill-rule:evenodd;stroke:none;stroke-width:4.99999;stroke-linecap:round;stroke-linejoin:round;stroke-miterlimit:3"
				d="m 87.973958,100.27708 h 8.73125 l 3.439582,-2.645821 H 87.709375 v 2.645821 z"
				id="path18641"
			/>
		</g>
		<g id="g24322">
			<g id="g24304">
				<path
					style="opacity:1;fill:#fd2549;fill-opacity:1;fill-rule:evenodd;stroke:#9f9f9f;stroke-width:3;stroke-linecap:round;stroke-linejoin:round;stroke-miterlimit:3;stroke-dasharray:none;stroke-opacity:0.498674;paint-order:stroke fill markers;filter:url(#filter23101)"
					d="M 87.312499,120.38542 H 122.70833 V 85.989582 L 96.572915,105.83333 111.125,104.51042 Z"
					id="path21544"
				/>
				<path
					style="opacity:1;fill:#fd2549;fill-opacity:1;fill-rule:evenodd;stroke:#9f9f9f;stroke-width:3;stroke-linecap:round;stroke-linejoin:round;stroke-miterlimit:3;stroke-dasharray:none;stroke-opacity:0.498674;paint-order:stroke fill markers"
					d="M 123.03125,71.437499 V 56.885416 l -14.55208,6.614583 z"
					id="path24293"
				/>
				<path
					style="opacity:1;fill:#fd2549;fill-opacity:1;fill-rule:evenodd;stroke:#9f9f9f;stroke-width:3;stroke-linecap:round;stroke-linejoin:round;stroke-miterlimit:3;stroke-dasharray:none;stroke-opacity:0.498674;paint-order:stroke fill markers;filter:url(#filter23101)"
					d="M 87.312499,120.38542 H 122.70833 V 85.989582 L 96.572915,105.83333 111.125,104.51042 Z"
					id="path24299"
					transform="matrix(1,0,0,-1,0,128.058)"
				/>
			</g>
			<g id="g24312" transform="matrix(-1,0,0,1,129.58733,0)" style="opacity:1">
				<path
					style="opacity:1;fill:#fd2549;fill-opacity:1;fill-rule:evenodd;stroke:#9f9f9f;stroke-width:3;stroke-linecap:round;stroke-linejoin:round;stroke-miterlimit:3;stroke-dasharray:none;stroke-opacity:0.498674;paint-order:stroke fill markers;filter:url(#filter23101)"
					d="M 87.312499,120.38542 H 122.70833 V 85.989582 L 96.572915,105.83333 111.125,104.51042 Z"
					id="path24306"
				/>
				<path
					style="opacity:1;fill:#fd2549;fill-opacity:1;fill-rule:evenodd;stroke:#9f9f9f;stroke-width:3;stroke-linecap:round;stroke-linejoin:round;stroke-miterlimit:3;stroke-dasharray:none;stroke-opacity:0.498674;paint-order:stroke fill markers"
					d="M 123.03125,71.437499 V 56.885416 l -14.55208,6.614583 z"
					id="path24308"
				/>
				<path
					style="opacity:1;fill:#fd2549;fill-opacity:1;fill-rule:evenodd;stroke:#9f9f9f;stroke-width:3;stroke-linecap:round;stroke-linejoin:round;stroke-miterlimit:3;stroke-dasharray:none;stroke-opacity:0.498674;paint-order:stroke fill markers;filter:url(#filter23101)"
					d="M 87.312499,120.38542 H 122.70833 V 85.989582 L 96.572915,105.83333 111.125,104.51042 Z"
					id="path24310"
					transform="matrix(1,0,0,-1,0,128.058)"
				/>
			</g>
		</g>
		<metadata id="metadata26865">
			<!-- svelte-ignore attribute_illegal_colon -->
			<rdf:RDF>
				<cc:Work rdf:about="">
					<dc:creator>
						<cc:Agent>
							<dc:title>Doriel Rivalet</dc:title>
						</cc:Agent>
					</dc:creator>
					<cc:license
						rdf:resource="http://creativecommons.org/licenses/by-nc-sa/4.0/"
					></cc:license>
				</cc:Work>
				<!-- svelte-ignore attribute_illegal_colon -->

				<cc:License
					rdf:about="http://creativecommons.org/licenses/by-nc-sa/4.0/"
				>
					<cc:permits
						rdf:resource="http://creativecommons.org/ns#Reproduction"
					></cc:permits>
					<cc:permits
						rdf:resource="http://creativecommons.org/ns#Distribution"
					></cc:permits>
					<cc:requires rdf:resource="http://creativecommons.org/ns#Notice"></cc:requires>
					<cc:requires
						rdf:resource="http://creativecommons.org/ns#Attribution"
					></cc:requires>
					<cc:prohibits
						rdf:resource="http://creativecommons.org/ns#CommercialUse"
					></cc:prohibits>
					<cc:permits
						rdf:resource="http://creativecommons.org/ns#DerivativeWorks"
					></cc:permits>
					<cc:requires
						rdf:resource="http://creativecommons.org/ns#ShareAlike"
					></cc:requires>
				</cc:License>
			</rdf:RDF>
		</metadata>
	</svg>
</div>
