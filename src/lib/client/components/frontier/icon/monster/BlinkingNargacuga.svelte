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
				id="filter134632"
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
					id="feComposite134618"
				/><feColorMatrix
					in="composite1"
					values="1"
					type="saturate"
					result="colormatrix1"
					id="feColorMatrix134620"
				/><feFlood
					flood-opacity="1"
					flood-color="rgb(0,0,0)"
					result="flood1"
					id="feFlood134622"
				/><feBlend
					in="flood1"
					in2="colormatrix1"
					mode="multiply"
					result="blend1"
					id="feBlend134624"
				/><feBlend
					in2="blend1"
					mode="screen"
					result="blend2"
					id="feBlend134626"
				/><feColorMatrix
					in="blend2"
					values="1"
					type="saturate"
					result="colormatrix2"
					id="feColorMatrix134628"
				/><feComposite
					in="colormatrix2"
					in2="SourceGraphic"
					operator="in"
					k2="1"
					result="composite2"
					id="feComposite134630"
				/></filter
			></defs
		>
		<!-- svelte-ignore a11y-no-static-element-interactions -->
		<!-- svelte-ignore a11y-mouse-events-have-key-events -->
		<g id="layer1"
			><g
				id="g134253"
				style="filter:url(#filter134632)"
				transform="translate(0.52916667,1.5875)"
				><path
					style="opacity:1;fill:#cb150e;fill-opacity:1;fill-rule:evenodd;stroke-width:0.3;stroke-linecap:round;stroke-linejoin:round;stroke-miterlimit:3"
					d="m 116.41667,124.08958 h 1.85208 v -3.175 h 3.43958 v -6.08541 h -5.29166 z"
					id="path134163"
				/><path
					style="opacity:1;fill:#cb150e;fill-opacity:1;fill-rule:evenodd;stroke-width:0.3;stroke-linecap:round;stroke-linejoin:round;stroke-miterlimit:3"
					d="m 107.95,124.08958 h 1.85208 v -3.175 h 3.43958 v -6.08541 H 107.95 Z"
					id="path134165"
				/><path
					style="opacity:1;fill:#ececec;fill-opacity:1;fill-rule:evenodd;stroke-width:0.3;stroke-linecap:round;stroke-linejoin:round;stroke-miterlimit:3"
					d="M 62.970833,101.33542 76.199999,85.195832 h 5.820833 L 69.585416,71.172916 h -5.027083 l -10.054167,8.466666 -0.264583,12.964584 z"
					id="path134167"
				/><path
					style="opacity:1;fill:#cccccc;fill-opacity:1;fill-rule:evenodd;stroke-width:0.3;stroke-linecap:round;stroke-linejoin:round;stroke-miterlimit:3"
					d="m 69.056249,116.68125 -2.910417,2.38125 -5.291666,0.52917 H 57.67905 L 52.387499,114.82917 37.30625,96.043749 36.777083,93.927082 V 35.983333 h 3.175 v 5.291666 l 2.910416,6.085417 v 13.229167 l 2.116667,2.910416 V 35.983333 h 4.233333 v 5.820833 l 2.116667,5.027083 v 10.583334 l 3.175,6.085416 v 16.139583 12.170834 l 14.552083,16.404164 z"
					id="path134169"
				/><path
					style="opacity:1;fill:#cb150e;fill-opacity:1;fill-rule:evenodd;stroke-width:0.3;stroke-linecap:round;stroke-linejoin:round;stroke-miterlimit:3"
					d="m 57.67905,124.08958 h -1.852068 v -3.175 H 52.38742 v -6.08541 h 5.29163 z"
					id="path134171"
				/><path
					style="opacity:1;fill:#cb150e;fill-opacity:1;fill-rule:evenodd;stroke-width:0.3;stroke-linecap:round;stroke-linejoin:round;stroke-miterlimit:3"
					d="m 66.145672,124.08958 h -1.852068 v -3.175 h -3.439562 v -6.08541 h 5.29163 z"
					id="path134173"
				/><path
					style="opacity:1;fill:#d09762;fill-opacity:1;fill-rule:evenodd;stroke-width:0.3;stroke-linecap:round;stroke-linejoin:round;stroke-miterlimit:3"
					d="m 70.379166,114.82917 h 1.852083 l 5.027083,-6.61459 h 18.785417 v 5.29167 H 75.935416 v 4.23333 h 19.843749 l 2.116667,-2.91041 v -7.67292 h -3.175 v -4.49792 H 78.581249 v -2.38125 l 3.175,-3.174998 H 70.379166 Z"
					id="path134175"
				/><path
					style="opacity:1;fill:#eae6dc;fill-opacity:1;fill-rule:evenodd;stroke-width:0.3;stroke-linecap:round;stroke-linejoin:round;stroke-miterlimit:3"
					d="m 107.95,114.82917 v -2.91042 l 11.37708,-11.64167 h 2.38125 v 14.55209 z"
					id="path134177"
				/><path
					style="opacity:1;fill:#eae6dc;fill-opacity:1;fill-rule:evenodd;stroke-width:0.3;stroke-linecap:round;stroke-linejoin:round;stroke-miterlimit:3"
					d="m 97.895832,114.82917 h 5.820838 l 11.90625,-12.7 v -7.408338 l -8.46667,7.937498 H 94.720832 v 4.49792 h 3.174997 z"
					id="path134179"
				/><path
					style="opacity:1;fill:#eae6dc;fill-opacity:1;fill-rule:evenodd;stroke-width:0.3;stroke-linecap:round;stroke-linejoin:round;stroke-miterlimit:3"
					d="m 75.670832,97.102082 v -5.291666 l 3.96875,-2.910417 H 104.775 l 15.08125,-15.08125 h 3.175 c 0,0 0,14.022917 0,14.022917 l -7.40833,6.879166 -33.866671,2.38125 z"
					id="path134181"
				/><path
					style="opacity:1;fill:#cb150e;fill-opacity:1;fill-rule:evenodd;stroke-width:0.3;stroke-linecap:round;stroke-linejoin:round;stroke-miterlimit:3"
					d="m 78.581249,102.65833 v -2.38125 l 5.820833,-6.085415 H 104.51042 L 119.0625,79.904166 h 3.96875 v 7.9375 l -7.40833,6.879166 -8.46667,7.937498 z"
					id="path134183"
				/><rect
					style="opacity:1;fill:#f4372b;fill-opacity:1;fill-rule:evenodd;stroke-width:0.3;stroke-linecap:round;stroke-linejoin:round;stroke-miterlimit:3"
					id="rect134185"
					width="5.2916665"
					height="5.2916665"
					x="87.57708"
					y="94.191666"
				/><path
					style="opacity:1;fill:#ececec;fill-opacity:1;fill-rule:evenodd;stroke-width:0.3;stroke-linecap:round;stroke-linejoin:round;stroke-miterlimit:3"
					d="m 84.931249,85.460416 h 21.166671 l 10.84791,-10.847917 h -4.49791 c 0,0 -8.20209,-9.525 -8.46667,-9.525 -0.26458,0 -10.318751,10.31875 -10.318751,10.31875 l -9.260417,-9.789583 v 8.466666 h -9.525 z"
					id="path134187"
				/><path
					style="opacity:1;fill:#cccccc;fill-opacity:1;fill-rule:evenodd;stroke-width:0.3;stroke-linecap:round;stroke-linejoin:round;stroke-miterlimit:3"
					d="m 110.06667,69.849999 -2.64584,-3.175 v -7.14375 h 15.34584 v 2.910417 z"
					id="path134189"
				/><path
					style="opacity:1;fill:#ececec;fill-opacity:1;fill-rule:evenodd;stroke-width:0.3;stroke-linecap:round;stroke-linejoin:round;stroke-miterlimit:3"
					d="m 111.125,70.908332 -1.05833,-1.058333 v -7.672916 h 12.7 v 2.38125 l -6.61459,6.349999 z"
					id="path134191"
				/><path
					style="opacity:1;fill:#ececec;fill-opacity:1;fill-rule:evenodd;stroke-width:0.3;stroke-linecap:round;stroke-linejoin:round;stroke-miterlimit:3"
					d="m 116.41667,55.562499 h 6.61458 V 37.30625 l -4.49792,-4.233334 h -2.11666 z"
					id="path134193"
				/><path
					style="opacity:1;fill:#cccccc;fill-opacity:1;fill-rule:evenodd;stroke-width:0.3;stroke-linecap:round;stroke-linejoin:round;stroke-miterlimit:3"
					d="m 78.316666,70.908332 h 3.439583 L 81.491666,59.531249 H 63.499999 l 2.38125,2.910417 z"
					id="path134195"
				/><path
					style="opacity:1;fill:#ececec;fill-opacity:1;fill-rule:evenodd;stroke-width:0.3;stroke-linecap:round;stroke-linejoin:round;stroke-miterlimit:3"
					d="m 65.881249,62.441666 h 12.435417 v 8.466666 h -5.027084 z"
					id="path134197"
				/><path
					style="opacity:1;fill:#ececec;fill-opacity:1;fill-rule:evenodd;stroke-width:0.3;stroke-linecap:round;stroke-linejoin:round;stroke-miterlimit:3"
					d="m 57.943749,74.347916 v -32.54375 h 2.910417 v -3.175 h 3.175 v -2.645833 h 14.2875 v 20.6375 H 61.118749 v 3.96875 l 5.55625,6.349999 z"
					id="path134199"
				/><path
					style="opacity:1;fill:#cccccc;fill-opacity:1;fill-rule:evenodd;stroke-width:0.3;stroke-linecap:round;stroke-linejoin:round;stroke-miterlimit:3"
					d="m 87.047916,62.706249 -2.38125,-2.38125 10.054166,-9.789583 9.789588,9.789583 -2.38125,2.116667 z"
					id="path134201"
				/><path
					style="opacity:1;fill:#ececec;fill-opacity:1;fill-rule:evenodd;stroke-width:0.3;stroke-linecap:round;stroke-linejoin:round;stroke-miterlimit:3"
					d="m 94.720832,70.114582 7.408338,-7.672916 -7.408338,-6.614583 -7.672916,6.879166 z"
					id="path134203"
				/><path
					style="opacity:1;fill:#ececec;fill-opacity:1;fill-rule:evenodd;stroke-width:0.3;stroke-linecap:round;stroke-linejoin:round;stroke-miterlimit:3"
					d="m 81.491666,55.562499 h 4.7625 l 7.408333,-9.789583 12.170831,13.758333 7.40834,-3.96875 V 15.610416 L 103.98125,6.3499999 H 11.641667 v 3.175 L 8.2020832,15.482533 H 5.0270833 v 14.1508 L 15.610416,38.629166 27.252083,26.9875 h 7.9375 l 2.38125,-3.175 h 38.893749 l 5.027084,5.027083 z"
					id="path134205"
				/><path
					style="opacity:1;fill:#cccccc;fill-opacity:1;fill-rule:evenodd;stroke-width:0.3;stroke-linecap:round;stroke-linejoin:round;stroke-miterlimit:3"
					d="m 32.014583,105.56875 v -4.23333 L 22.754166,84.666666 v -46.0375 l -3.175,-3.96875 H 5.0270833 v 43.127083 h 6.6145837 v 10.31875 l 17.462499,17.462501 z"
					id="path134207"
				/><path
					style="opacity:1;fill:#cb150e;fill-opacity:1;fill-rule:evenodd;stroke-width:0.3;stroke-linecap:round;stroke-linejoin:round;stroke-miterlimit:3"
					d="m 34.660416,117.475 h 2.910417 L 37.30625,101.07083 h -5.291667 v 4.49792 h -6.35 v 2.64583 z"
					id="path134209"
				/><path
					style="opacity:1;fill:#cb150e;fill-opacity:1;fill-rule:evenodd;stroke-width:0.3;stroke-linecap:round;stroke-linejoin:round;stroke-miterlimit:3"
					d="M 11.641667,105.83333 20.6375,97.102082 14.816666,91.281249 11.641667,98.689582 Z"
					id="path134211"
				/><path
					style="opacity:1;fill:#cb150e;fill-opacity:1;fill-rule:evenodd;stroke-width:0.3;stroke-linecap:round;stroke-linejoin:round;stroke-miterlimit:3"
					d="M 37.30625,97.102082 V 94.191665 L 28.575,85.989582 h -5.55625 l 5.55625,11.377083 1.058333,-0.264583 z"
					id="path134213"
				/><path
					style="opacity:1;fill:#cb150e;fill-opacity:1;fill-rule:evenodd;stroke-width:0.3;stroke-linecap:round;stroke-linejoin:round;stroke-miterlimit:3"
					d="M 11.90625,82.814582 H 5.0270833 v -9.789583 l 8.9958327,0.529167 z"
					id="path134215"
				/><path
					style="opacity:1;fill:#cb150e;fill-opacity:1;fill-rule:evenodd;stroke-width:0.3;stroke-linecap:round;stroke-linejoin:round;stroke-miterlimit:3"
					d="M 26.19375,82.814582 28.575,74.347916 h -5.820834 v -3.175 h -1.852083 v 8.995833 c 0.258119,2.152274 1.488098,2.325496 2.645833,2.645833 z"
					id="path134217"
				/><path
					style="opacity:1;fill:#cb150e;fill-opacity:1;fill-rule:evenodd;stroke-width:0.3;stroke-linecap:round;stroke-linejoin:round;stroke-miterlimit:3"
					d="m 5.0270833,62.970833 6.6145837,-4.233334 v -4.7625 L 5.0270833,50.535416 Z"
					id="path134219"
				/><path
					style="opacity:1;fill:#cb150e;fill-opacity:1;fill-rule:evenodd;stroke-width:0.3;stroke-linecap:round;stroke-linejoin:round;stroke-miterlimit:3"
					d="m 22.754166,61.912499 v -2.116666 l 6.085417,-4.7625 -6.085417,-4.233334 h -1.852083 v 11.1125 z"
					id="path134221"
				/><path
					style="opacity:1;fill:#cb150e;fill-opacity:1;fill-rule:evenodd;stroke-width:0.3;stroke-linecap:round;stroke-linejoin:round;stroke-miterlimit:3"
					d="m 5.0270833,39.422916 5.8208337,-4.7625 -5.8208337,-5.027083 z"
					id="path134223"
				/><path
					style="opacity:1;fill:#cb150e;fill-opacity:1;fill-rule:evenodd;stroke-width:0.3;stroke-linecap:round;stroke-linejoin:round;stroke-miterlimit:3"
					d="m 22.754166,38.629166 -3.175,-3.96875 7.672917,-7.672916 h 1.058333 L 31.75,38.629166 Z"
					id="path134225"
				/><path
					style="opacity:1;fill:#cb150e;fill-opacity:1;fill-rule:evenodd;stroke-width:0.3;stroke-linecap:round;stroke-linejoin:round;stroke-miterlimit:3"
					d="M 8.2020832,21.695833 H 10.054167 L 20.902083,11.641667 V 9.5249999 H 8.2020832 Z"
					id="path134227"
				/><path
					style="opacity:1;fill:#cb150e;fill-opacity:1;fill-rule:evenodd;stroke-width:0.3;stroke-linecap:round;stroke-linejoin:round;stroke-miterlimit:3"
					d="m 43.127083,29.633333 h 3.175 l 5.55625,-5.820833 -3.96875,-5.027084 h -6.35 L 38.1,23.01875 Z"
					id="path134229"
				/><path
					style="opacity:1;fill:#cb150e;fill-opacity:1;fill-rule:evenodd;stroke-width:0.3;stroke-linecap:round;stroke-linejoin:round;stroke-miterlimit:3"
					d="m 66.674999,29.897916 h 3.175 L 76.464582,23.8125 71.172916,18.520833 h -4.497917 l -6.35,5.291667 z"
					id="path134231"
				/><rect
					style="opacity:1;fill:#cb150e;fill-opacity:1;fill-rule:evenodd;stroke-width:0.3;stroke-linecap:round;stroke-linejoin:round;stroke-miterlimit:3"
					id="rect134233"
					width="5.8208332"
					height="6.0854168"
					x="25.929167"
					y="12.435416"
				/><rect
					style="opacity:1;fill:#cb150e;fill-opacity:1;fill-rule:evenodd;stroke-width:0.3;stroke-linecap:round;stroke-linejoin:round;stroke-miterlimit:3"
					id="rect134235"
					width="5.8208332"
					height="6.0854168"
					x="43.391666"
					y="9.3927088"
				/><rect
					style="opacity:1;fill:#cb150e;fill-opacity:1;fill-rule:evenodd;stroke-width:0.3;stroke-linecap:round;stroke-linejoin:round;stroke-miterlimit:3"
					id="rect134237"
					width="5.8208332"
					height="6.0854168"
					x="60.589581"
					y="9.260417"
				/><rect
					style="opacity:1;fill:#cb150e;fill-opacity:1;fill-rule:evenodd;stroke-width:0.3;stroke-linecap:round;stroke-linejoin:round;stroke-miterlimit:3"
					id="rect134239"
					width="5.8208332"
					height="6.0854168"
					x="78.316666"
					y="9.3927078"
				/><rect
					style="opacity:1;fill:#cb150e;fill-opacity:1;fill-rule:evenodd;stroke-width:0.3;stroke-linecap:round;stroke-linejoin:round;stroke-miterlimit:3"
					id="rect134241"
					width="5.8208332"
					height="6.0854168"
					x="93.133331"
					y="15.478125"
				/><rect
					style="opacity:1;fill:#cb150e;fill-opacity:1;fill-rule:evenodd;stroke-width:0.3;stroke-linecap:round;stroke-linejoin:round;stroke-miterlimit:3"
					id="rect134243"
					width="5.8208332"
					height="6.0854168"
					x="81.491669"
					y="23.680208"
				/><rect
					style="opacity:1;fill:#cb150e;fill-opacity:1;fill-rule:evenodd;stroke-width:0.3;stroke-linecap:round;stroke-linejoin:round;stroke-miterlimit:3"
					id="rect134245"
					width="5.8208332"
					height="6.0854168"
					x="104.51041"
					y="23.8125"
				/><rect
					style="opacity:1;fill:#cb150e;fill-opacity:1;fill-rule:evenodd;stroke-width:0.3;stroke-linecap:round;stroke-linejoin:round;stroke-miterlimit:3"
					id="rect134247"
					width="5.8208332"
					height="6.0854168"
					x="104.51041"
					y="47.360416"
				/><rect
					style="opacity:1;fill:#cb150e;fill-opacity:1;fill-rule:evenodd;stroke-width:0.3;stroke-linecap:round;stroke-linejoin:round;stroke-miterlimit:3"
					id="rect134249"
					width="5.8208332"
					height="6.0854168"
					x="81.491669"
					y="47.228127"
				/><rect
					style="opacity:1;fill:#cb150e;fill-opacity:1;fill-rule:evenodd;stroke-width:0.3;stroke-linecap:round;stroke-linejoin:round;stroke-miterlimit:3"
					id="rect134251"
					width="5.8208332"
					height="6.0854168"
					x="93.133331"
					y="35.851044"
				/></g
			><g id="g134161"
				><path
					style="fill:#cb150e;fill-rule:evenodd;stroke-width:0.3;stroke-linecap:round;stroke-linejoin:round;stroke-miterlimit:3;opacity:1;fill-opacity:1"
					d="m 116.41667,124.08958 h 1.85208 v -3.175 h 3.43958 v -6.08541 h -5.29166 z"
					id="path126534"
				/><path
					style="opacity:1;fill:#cb150e;fill-rule:evenodd;stroke-width:0.3;stroke-linecap:round;stroke-linejoin:round;stroke-miterlimit:3;fill-opacity:1"
					d="m 107.95,124.08958 h 1.85208 v -3.175 h 3.43958 v -6.08541 H 107.95 Z"
					id="path126901"
				/><path
					style="opacity:1;fill:#ececec;fill-opacity:1;fill-rule:evenodd;stroke-width:0.3;stroke-linecap:round;stroke-linejoin:round;stroke-miterlimit:3"
					d="M 62.970833,101.33542 76.199999,85.195832 h 5.820833 L 69.585416,71.172916 h -5.027083 l -10.054167,8.466666 -0.264583,12.964584 z"
					id="path129228"
				/><path
					style="opacity:1;fill:#cccccc;fill-opacity:1;fill-rule:evenodd;stroke-width:0.3;stroke-linecap:round;stroke-linejoin:round;stroke-miterlimit:3"
					d="m 69.056249,116.68125 -2.910417,2.38125 -5.291666,0.52917 H 57.67905 L 52.387499,114.82917 37.30625,96.043749 36.777083,93.927082 V 35.983333 h 3.175 v 5.291666 l 2.910416,6.085417 v 13.229167 l 2.116667,2.910416 V 35.983333 h 4.233333 v 5.820833 l 2.116667,5.027083 v 10.583334 l 3.175,6.085416 v 16.139583 12.170834 l 14.552083,16.404164 z"
					id="path128886"
				/><path
					style="opacity:1;fill:#cb150e;fill-rule:evenodd;stroke-width:0.3;stroke-linecap:round;stroke-linejoin:round;stroke-miterlimit:3;fill-opacity:1"
					d="m 57.67905,124.08958 h -1.852068 v -3.175 H 52.38742 v -6.08541 h 5.29163 z"
					id="path126903"
				/><path
					style="opacity:1;fill:#cb150e;fill-rule:evenodd;stroke-width:0.3;stroke-linecap:round;stroke-linejoin:round;stroke-miterlimit:3;fill-opacity:1"
					d="m 66.145672,124.08958 h -1.852068 v -3.175 h -3.439562 v -6.08541 h 5.29163 z"
					id="path126905"
				/><path
					style="opacity:1;fill:#d09762;fill-rule:evenodd;stroke-width:0.3;stroke-linecap:round;stroke-linejoin:round;stroke-miterlimit:3;fill-opacity:1"
					d="m 70.379166,114.82917 h 1.852083 l 5.027083,-6.61459 h 18.785417 v 5.29167 H 75.935416 v 4.23333 h 19.843749 l 2.116667,-2.91041 v -7.67292 h -3.175 v -4.49792 H 78.581249 v -2.38125 l 3.175,-3.174998 H 70.379166 Z"
					id="path126907"
				/><path
					style="opacity:1;fill:#eae6dc;fill-opacity:1;fill-rule:evenodd;stroke-width:0.3;stroke-linecap:round;stroke-linejoin:round;stroke-miterlimit:3"
					d="m 107.95,114.82917 v -2.91042 l 11.37708,-11.64167 h 2.38125 v 14.55209 z"
					id="path126963"
				/><path
					style="opacity:1;fill:#eae6dc;fill-opacity:1;fill-rule:evenodd;stroke-width:0.3;stroke-linecap:round;stroke-linejoin:round;stroke-miterlimit:3"
					d="m 97.895832,114.82917 h 5.820838 l 11.90625,-12.7 v -7.408338 l -8.46667,7.937498 H 94.720832 v 4.49792 h 3.174997 z"
					id="path127019"
				/><path
					style="opacity:1;fill:#eae6dc;fill-opacity:1;fill-rule:evenodd;stroke-width:0.3;stroke-linecap:round;stroke-linejoin:round;stroke-miterlimit:3"
					d="m 75.670832,97.102082 v -5.291666 l 3.96875,-2.910417 H 104.775 l 15.08125,-15.08125 h 3.175 c 0,0 0,14.022917 0,14.022917 l -7.40833,6.879166 -33.866671,2.38125 z"
					id="path127021"
				/><path
					style="opacity:1;fill:#cb150e;fill-opacity:1;fill-rule:evenodd;stroke-width:0.3;stroke-linecap:round;stroke-linejoin:round;stroke-miterlimit:3"
					d="m 78.581249,102.65833 v -2.38125 l 5.820833,-6.085415 H 104.51042 L 119.0625,79.904166 h 3.96875 v 7.9375 l -7.40833,6.879166 -8.46667,7.937498 z"
					id="path127023"
				/><rect
					style="opacity:1;fill:#f4372b;fill-opacity:1;fill-rule:evenodd;stroke-width:0.3;stroke-linecap:round;stroke-linejoin:round;stroke-miterlimit:3"
					id="rect127187"
					width="5.2916665"
					height="5.2916665"
					x="87.57708"
					y="94.191666"
				/><path
					style="opacity:1;fill:#ececec;fill-opacity:1;fill-rule:evenodd;stroke-width:0.3;stroke-linecap:round;stroke-linejoin:round;stroke-miterlimit:3"
					d="m 84.931249,85.460416 h 21.166671 l 10.84791,-10.847917 h -4.49791 c 0,0 -8.20209,-9.525 -8.46667,-9.525 -0.26458,0 -10.318751,10.31875 -10.318751,10.31875 l -9.260417,-9.789583 v 8.466666 h -9.525 z"
					id="path130486"
				/><path
					style="opacity:1;fill:#cccccc;fill-opacity:1;fill-rule:evenodd;stroke-width:0.3;stroke-linecap:round;stroke-linejoin:round;stroke-miterlimit:3"
					d="m 110.06667,69.849999 -2.64584,-3.175 v -7.14375 h 15.34584 v 2.910417 z"
					id="path131417"
				/><path
					style="opacity:1;fill:#ececec;fill-opacity:1;fill-rule:evenodd;stroke-width:0.3;stroke-linecap:round;stroke-linejoin:round;stroke-miterlimit:3"
					d="m 111.125,70.908332 -1.05833,-1.058333 v -7.672916 l 12.7,0 v 2.38125 l -6.61459,6.349999 z"
					id="path130488"
				/><path
					style="opacity:1;fill:#ececec;fill-opacity:1;fill-rule:evenodd;stroke-width:0.3;stroke-linecap:round;stroke-linejoin:round;stroke-miterlimit:3"
					d="m 116.41667,55.562499 h 6.61458 V 37.30625 l -4.49792,-4.233334 h -2.11666 z"
					id="path130490"
				/><path
					style="opacity:1;fill:#cccccc;fill-opacity:1;fill-rule:evenodd;stroke-width:0.3;stroke-linecap:round;stroke-linejoin:round;stroke-miterlimit:3"
					d="m 78.316666,70.908332 h 3.439583 L 81.491666,59.531249 H 63.499999 l 2.38125,2.910417 z"
					id="path130717"
				/><path
					style="opacity:1;fill:#ececec;fill-opacity:1;fill-rule:evenodd;stroke-width:0.3;stroke-linecap:round;stroke-linejoin:round;stroke-miterlimit:3"
					d="m 65.881249,62.441666 h 12.435417 v 8.466666 h -5.027084 z"
					id="path130492"
				/><path
					style="opacity:1;fill:#ececec;fill-opacity:1;fill-rule:evenodd;stroke-width:0.3;stroke-linecap:round;stroke-linejoin:round;stroke-miterlimit:3"
					d="m 57.943749,74.347916 v -32.54375 h 2.910417 v -3.175 h 3.175 v -2.645833 h 14.2875 v 20.6375 H 61.118749 v 3.96875 l 5.55625,6.349999 z"
					id="path130494"
				/><path
					style="opacity:1;fill:#cccccc;fill-opacity:1;fill-rule:evenodd;stroke-width:0.3;stroke-linecap:round;stroke-linejoin:round;stroke-miterlimit:3"
					d="m 87.047916,62.706249 -2.38125,-2.38125 10.054166,-9.789583 9.789588,9.789583 -2.38125,2.116667 z"
					id="path131419"
				/><path
					style="opacity:1;fill:#ececec;fill-opacity:1;fill-rule:evenodd;stroke-width:0.3;stroke-linecap:round;stroke-linejoin:round;stroke-miterlimit:3"
					d="m 94.720832,70.114582 7.408338,-7.672916 -7.408338,-6.614583 -7.672916,6.879166 z"
					id="path130496"
				/><path
					style="opacity:1;fill:#ececec;fill-opacity:1;fill-rule:evenodd;stroke-width:0.3;stroke-linecap:round;stroke-linejoin:round;stroke-miterlimit:3"
					d="m 81.491666,55.562499 h 4.7625 l 7.408333,-9.789583 12.170831,13.758333 7.40834,-3.96875 V 15.610416 L 103.98125,6.3499999 H 11.641667 v 3.175 L 8.2020832,15.482533 H 5.0270833 v 14.1508 L 15.610416,38.629166 27.252083,26.9875 h 7.9375 l 2.38125,-3.175 h 38.893749 l 5.027084,5.027083 z"
					id="path130498"
				/><path
					style="opacity:1;fill:#cccccc;fill-opacity:1;fill-rule:evenodd;stroke-width:0.3;stroke-linecap:round;stroke-linejoin:round;stroke-miterlimit:3"
					d="m 32.014583,105.56875 v -4.23333 L 22.754166,84.666666 v -46.0375 l -3.175,-3.96875 H 5.0270833 v 43.127083 h 6.6145837 v 10.31875 l 17.462499,17.462501 z"
					id="path130500"
				/><path
					style="opacity:1;fill:#cb150e;fill-opacity:1;fill-rule:evenodd;stroke-width:0.3;stroke-linecap:round;stroke-linejoin:round;stroke-miterlimit:3"
					d="m 34.660416,117.475 h 2.910417 l -0.264583,-16.40417 -5.291667,0 0,4.49792 -6.35,0 0,2.64583 z"
					id="path132199"
				/><path
					style="opacity:1;fill:#cb150e;fill-opacity:1;fill-rule:evenodd;stroke-width:0.3;stroke-linecap:round;stroke-linejoin:round;stroke-miterlimit:3"
					d="M 11.641667,105.83333 20.6375,97.102082 14.816666,91.281249 11.641667,98.689582 Z"
					id="path132363"
				/><path
					style="opacity:1;fill:#cb150e;fill-opacity:1;fill-rule:evenodd;stroke-width:0.3;stroke-linecap:round;stroke-linejoin:round;stroke-miterlimit:3"
					d="M 37.30625,97.102082 V 94.191665 L 28.575,85.989582 h -5.55625 l 5.55625,11.377083 1.058333,-0.264583 z"
					id="path132365"
				/><path
					style="opacity:1;fill:#cb150e;fill-opacity:1;fill-rule:evenodd;stroke-width:0.3;stroke-linecap:round;stroke-linejoin:round;stroke-miterlimit:3"
					d="M 11.90625,82.814582 H 5.0270833 v -9.789583 l 8.9958327,0.529167 z"
					id="path132367"
				/><path
					style="opacity:1;fill:#cb150e;fill-opacity:1;fill-rule:evenodd;stroke-width:0.3;stroke-linecap:round;stroke-linejoin:round;stroke-miterlimit:3"
					d="M 26.19375,82.814582 28.575,74.347916 h -5.820834 v -3.175 h -1.852083 v 8.995833 c 0.258119,2.152274 1.488098,2.325496 2.645833,2.645833 z"
					id="path132369"
				/><path
					style="opacity:1;fill:#cb150e;fill-opacity:1;fill-rule:evenodd;stroke-width:0.3;stroke-linecap:round;stroke-linejoin:round;stroke-miterlimit:3"
					d="m 5.0270833,62.970833 6.6145837,-4.233334 v -4.7625 L 5.0270833,50.535416 Z"
					id="path132371"
				/><path
					style="opacity:1;fill:#cb150e;fill-opacity:1;fill-rule:evenodd;stroke-width:0.3;stroke-linecap:round;stroke-linejoin:round;stroke-miterlimit:3"
					d="m 22.754166,61.912499 v -2.116666 l 6.085417,-4.7625 -6.085417,-4.233334 h -1.852083 v 11.1125 z"
					id="path133099"
				/><path
					style="opacity:1;fill:#cb150e;fill-opacity:1;fill-rule:evenodd;stroke-width:0.3;stroke-linecap:round;stroke-linejoin:round;stroke-miterlimit:3"
					d="m 5.0270833,39.422916 5.8208337,-4.7625 -5.8208337,-5.027083 z"
					id="path133101"
				/><path
					style="opacity:1;fill:#cb150e;fill-opacity:1;fill-rule:evenodd;stroke-width:0.3;stroke-linecap:round;stroke-linejoin:round;stroke-miterlimit:3"
					d="m 22.754166,38.629166 -3.175,-3.96875 7.672917,-7.672916 h 1.058333 L 31.75,38.629166 Z"
					id="path133103"
				/><path
					style="opacity:1;fill:#cb150e;fill-opacity:1;fill-rule:evenodd;stroke-width:0.3;stroke-linecap:round;stroke-linejoin:round;stroke-miterlimit:3"
					d="M 8.2020832,21.695833 H 10.054167 L 20.902083,11.641667 V 9.5249999 H 8.2020832 Z"
					id="path133105"
				/><path
					style="opacity:1;fill:#cb150e;fill-opacity:1;fill-rule:evenodd;stroke-width:0.3;stroke-linecap:round;stroke-linejoin:round;stroke-miterlimit:3"
					d="m 43.127083,29.633333 h 3.175 l 5.55625,-5.820833 -3.96875,-5.027084 h -6.35 L 38.1,23.01875 Z"
					id="path133107"
				/><path
					style="opacity:1;fill:#cb150e;fill-opacity:1;fill-rule:evenodd;stroke-width:0.3;stroke-linecap:round;stroke-linejoin:round;stroke-miterlimit:3"
					d="m 66.674999,29.897916 h 3.175 L 76.464582,23.8125 71.172916,18.520833 h -4.497917 l -6.35,5.291667 z"
					id="path133109"
				/><rect
					style="opacity:1;fill:#cb150e;fill-opacity:1;fill-rule:evenodd;stroke-width:0.3;stroke-linecap:round;stroke-linejoin:round;stroke-miterlimit:3"
					id="rect133370"
					width="5.8208332"
					height="6.0854168"
					x="25.929167"
					y="12.435416"
				/><rect
					style="opacity:1;fill:#cb150e;fill-opacity:1;fill-rule:evenodd;stroke-width:0.3;stroke-linecap:round;stroke-linejoin:round;stroke-miterlimit:3"
					id="rect133372"
					width="5.8208332"
					height="6.0854168"
					x="43.391666"
					y="9.3927088"
				/><rect
					style="opacity:1;fill:#cb150e;fill-opacity:1;fill-rule:evenodd;stroke-width:0.3;stroke-linecap:round;stroke-linejoin:round;stroke-miterlimit:3"
					id="rect133374"
					width="5.8208332"
					height="6.0854168"
					x="60.589581"
					y="9.260417"
				/><rect
					style="opacity:1;fill:#cb150e;fill-opacity:1;fill-rule:evenodd;stroke-width:0.3;stroke-linecap:round;stroke-linejoin:round;stroke-miterlimit:3"
					id="rect133376"
					width="5.8208332"
					height="6.0854168"
					x="78.316666"
					y="9.3927078"
				/><rect
					style="opacity:1;fill:#cb150e;fill-opacity:1;fill-rule:evenodd;stroke-width:0.3;stroke-linecap:round;stroke-linejoin:round;stroke-miterlimit:3"
					id="rect133378"
					width="5.8208332"
					height="6.0854168"
					x="93.133331"
					y="15.478125"
				/><rect
					style="opacity:1;fill:#cb150e;fill-opacity:1;fill-rule:evenodd;stroke-width:0.3;stroke-linecap:round;stroke-linejoin:round;stroke-miterlimit:3"
					id="rect133380"
					width="5.8208332"
					height="6.0854168"
					x="81.491669"
					y="23.680208"
				/><rect
					style="opacity:1;fill:#cb150e;fill-opacity:1;fill-rule:evenodd;stroke-width:0.3;stroke-linecap:round;stroke-linejoin:round;stroke-miterlimit:3"
					id="rect133382"
					width="5.8208332"
					height="6.0854168"
					x="104.51041"
					y="23.8125"
				/><rect
					style="opacity:1;fill:#cb150e;fill-opacity:1;fill-rule:evenodd;stroke-width:0.3;stroke-linecap:round;stroke-linejoin:round;stroke-miterlimit:3"
					id="rect133384"
					width="5.8208332"
					height="6.0854168"
					x="104.51041"
					y="47.360416"
				/><rect
					style="opacity:1;fill:#cb150e;fill-opacity:1;fill-rule:evenodd;stroke-width:0.3;stroke-linecap:round;stroke-linejoin:round;stroke-miterlimit:3"
					id="rect133386"
					width="5.8208332"
					height="6.0854168"
					x="81.491669"
					y="47.228127"
				/><rect
					style="opacity:1;fill:#cb150e;fill-opacity:1;fill-rule:evenodd;stroke-width:0.3;stroke-linecap:round;stroke-linejoin:round;stroke-miterlimit:3"
					id="rect133388"
					width="5.8208332"
					height="6.0854168"
					x="93.133331"
					y="35.851044"
				/></g
			><path
				style="opacity:1;fill:none;fill-opacity:1;fill-rule:evenodd;stroke:#e78284;stroke-width:1.5;stroke-linecap:round;stroke-linejoin:round;stroke-miterlimit:3;stroke-dasharray:none;stroke-dashoffset:0;stroke-opacity:1"
				d="m 89.958333,97.895833 c 10.295437,-6.3514 24.860597,2.387747 33.072927,0"
				id="path134997"
			/></g
		><metadata id="metadata12220">
			<!-- svelte-ignore illegal-attribute-character -->
			<!-- 	data-license="https://creativecommons.org/licenses/by-nc-sa/4.0/" data-author="Doriel Rivalet"--></metadata
		></svg
	>
</div>
