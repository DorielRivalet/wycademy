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
				id="filter21326"
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
					id="feComposite21312"
				/><feColorMatrix
					in="composite1"
					values="1"
					type="saturate"
					result="colormatrix1"
					id="feColorMatrix21314"
				/><feFlood
					flood-opacity="1"
					flood-color="rgb(0,0,0)"
					result="flood1"
					id="feFlood21316"
				/><feBlend
					in="flood1"
					in2="colormatrix1"
					mode="multiply"
					result="blend1"
					id="feBlend21318"
				/><feBlend
					in2="blend1"
					mode="screen"
					result="blend2"
					id="feBlend21320"
				/><feColorMatrix
					in="blend2"
					values="1"
					type="saturate"
					result="colormatrix2"
					id="feColorMatrix21322"
				/><feComposite
					in="colormatrix2"
					in2="SourceGraphic"
					operator="in"
					k2="1"
					result="composite2"
					id="feComposite21324"
				/></filter
			></defs
		>
		<!-- svelte-ignore a11y-no-static-element-interactions -->
		<!-- svelte-ignore a11y-mouse-events-have-key-events -->
		<g id="layer1"
			><g
				id="g20947"
				style="filter:url(#filter21326)"
				transform="translate(0.79375,1.5875005)"
				><path
					style="opacity:1;fill:#9f9d97;fill-opacity:1;fill-rule:evenodd;stroke-width:0.3;stroke-linecap:round;stroke-linejoin:round;stroke-miterlimit:3"
					d="m 42.333333,48.154166 6.614583,-5.820833 h 37.041666 c 3.146972,2.937465 6.387202,6.147392 10.31875,11.377083 V 100.0125 c -3.999275,5.02885 -8.386192,9.47297 -13.229166,13.22917 h -50.00625 l 5.291667,5.29166 H 99.218749 L 105.4575,95.249999 V 41.010416 L 74.083332,27.78125 66.939582,28.839583 H 63.499999 54.239583 L 39.422916,43.656249 38.1,48.154166 Z"
					id="path20837"
				/><path
					style="opacity:1;fill:#dc8b17;fill-opacity:1;fill-rule:evenodd;stroke-width:0.3;stroke-linecap:round;stroke-linejoin:round;stroke-miterlimit:3"
					d="m 21.960416,43.127083 h 2.645834 l 2.645833,-0.529167 1.5875,0.264583 V 31.75 H 26.19375 c -1.046357,3.905895 -2.437127,7.704587 -4.233334,11.377083 z"
					id="path20839"
				/><path
					style="opacity:1;fill:#ececd0;fill-opacity:1;fill-rule:evenodd;stroke-width:0.3;stroke-linecap:round;stroke-linejoin:round;stroke-miterlimit:3"
					d="m 46.302083,10.583333 h 3.96875 v 3.439583 h 3.704164 V 23.8125 L 38.1,39.422916 h 3.439583 L 53.710416,26.9875 h 3.175 v -12.7 h 3.704167 v 3.96875 h 3.704166 v 12.7 H 55.033333 L 39.422916,46.566666 h -8.202083 l -4.233333,-5.027083 1.852083,-2.38125 17.4625,-17.197917 z"
					id="path20841"
				/><path
					style="opacity:1;fill:#ececd0;fill-opacity:1;fill-rule:evenodd;stroke-width:0.3;stroke-linecap:round;stroke-linejoin:round;stroke-miterlimit:3"
					d="m 11.1125,74.612499 h 3.439583 v -4.7625 L 18.520833,66.675 v -2.645833 l -7.408333,-10e-7 z"
					id="path20843"
				/><path
					style="opacity:1;fill:#ececd0;fill-opacity:1;fill-rule:evenodd;stroke-width:0.3;stroke-linecap:round;stroke-linejoin:round;stroke-miterlimit:3"
					d="m 31.75,56.885416 v -3.96875 h 5.291666 l 6.11029,10.583333 h 4.473043 l 11.90625,-13.229166 h 7.9375 v 3.96875 h -6.614583 l -11.90625,13.229166 h -7.9375 L 34.395833,56.885416 Z"
					id="path20845"
				/><path
					style="opacity:1;fill:#ececd0;fill-opacity:1;fill-rule:evenodd;stroke-width:0.3;stroke-linecap:round;stroke-linejoin:round;stroke-miterlimit:3"
					d="m 8.4666666,56.885416 v 2.38125 l 1.8520834,-2.38125 z"
					id="path20847"
				/><path
					style="opacity:1;fill:#ececd0;fill-opacity:1;fill-rule:evenodd;stroke-width:0.3;stroke-linecap:round;stroke-linejoin:round;stroke-miterlimit:3"
					d="m 17.4625,55.827083 v -3.704167 l -2.910417,2.116667 z"
					id="path20849"
				/><path
					style="opacity:1;fill:#ececd0;fill-opacity:1;fill-rule:evenodd;stroke-width:0.3;stroke-linecap:round;stroke-linejoin:round;stroke-miterlimit:3"
					d="m 21.43125,60.060416 h 1.058333 l 1.5875,-1.5875 -2.38125,-1.5875 z"
					id="path20851"
				/><path
					style="opacity:1;fill:#584b18;fill-opacity:1;fill-rule:evenodd;stroke-width:0.3;stroke-linecap:round;stroke-linejoin:round;stroke-miterlimit:3"
					d="m 4.4979166,56.885416 v -3.96875 h 4.7625 l 13.2291664,-10.31875 2.38125,0.264583 -0.529167,3.704167 -0.529166,0.79375 -12.7,9.525 z"
					id="path20853"
				/><path
					style="opacity:1;fill:#ececd0;fill-opacity:1;fill-rule:evenodd;stroke-width:0.3;stroke-linecap:round;stroke-linejoin:round;stroke-miterlimit:3"
					d="m 26.19375,56.504416 v -2.264833 h 2.3592 z"
					id="path20855"
				/><path
					style="opacity:1;fill:#ececd0;fill-opacity:1;fill-rule:evenodd;stroke-width:0.3;stroke-linecap:round;stroke-linejoin:round;stroke-miterlimit:3"
					d="m 19.84375,50.270833 h 1.852083 l 2.116667,1.852083 v -4.7625 z"
					id="path20857"
				/><rect
					style="opacity:1;fill:#83a984;fill-opacity:1;fill-rule:evenodd;stroke-width:0.3;stroke-linecap:round;stroke-linejoin:round;stroke-miterlimit:3"
					id="rect20859"
					width="20.637499"
					height="18.256254"
					x="11.1125"
					y="95.51458"
					ry="0"
				/><path
					style="opacity:1;fill:#ececd0;fill-opacity:1;fill-rule:evenodd;stroke-width:0.3;stroke-linecap:round;stroke-linejoin:round;stroke-miterlimit:3"
					d="M 7.6729166,92.074999 H 11.1125 l 10.583333,10.318751 v -6.879168 l -3.704167,10e-7 v -3.439584 h 7.14375 v 13.758331 h 3.704167 V 92.074999 h 3.439583 v 20.108331 l -1.322916,4.49792 H 7.6729166 v -3.43958 H 21.695833 V 109.5375 H 7.6729166 v -7.14375 H 11.1125 v 3.70417 h 6.879166 L 7.6729166,95.514582 Z"
					id="path20861"
				/><path
					style="opacity:1;fill:#83a984;fill-opacity:1;fill-rule:evenodd;stroke-width:0.3;stroke-linecap:round;stroke-linejoin:round;stroke-miterlimit:3"
					d="m 46.037499,106.3625 -3.704166,-2.11667 v -8.731248 h -2.910417 v 10.583338 l 5.027083,2.91041 z"
					id="path20863"
				/><path
					style="opacity:1;fill:#83a984;fill-opacity:1;fill-rule:evenodd;stroke-width:0.3;stroke-linecap:round;stroke-linejoin:round;stroke-miterlimit:3"
					d="m 51.329166,104.51042 1.852083,-2.64584 -3.704166,-2.116665 V 95.25 h -3.175 v 6.35 z"
					id="path20865"
				/><path
					style="opacity:1;fill:#83a984;fill-opacity:1;fill-rule:evenodd;stroke-width:0.3;stroke-linecap:round;stroke-linejoin:round;stroke-miterlimit:3"
					d="m 63.499999,105.30417 7.9375,-6.085421 h 15.610417 l -6.879167,6.350001 z"
					id="path20867"
				/><path
					style="opacity:1;fill:#83a984;fill-opacity:1;fill-rule:evenodd;stroke-width:0.3;stroke-linecap:round;stroke-linejoin:round;stroke-miterlimit:3"
					d="m 74.877082,95.249999 2.910417,-3.175 h 10.847917 v 3.175 z"
					id="path20869"
				/><path
					style="opacity:1;fill:#83a984;fill-opacity:1;fill-rule:evenodd;stroke-width:0.3;stroke-linecap:round;stroke-linejoin:round;stroke-miterlimit:3"
					d="m 119.59167,116.68125 -3.70417,-5.02708 v -7.67292 l 3.96875,-5.027085 -10.58333,0.264584 -0.26459,10.054171 z"
					id="path20871"
				/><path
					style="opacity:1;fill:#83a984;fill-opacity:1;fill-rule:evenodd;stroke-width:0.3;stroke-linecap:round;stroke-linejoin:round;stroke-miterlimit:3"
					d="m 109.00833,92.074999 h 6.87917 v -5.55625 l 3.96875,-5.027083 -6.87917,0.264583 -3.96875,4.233333 z"
					id="path20873"
				/><path
					style="opacity:1;fill:#83a984;fill-opacity:1;fill-rule:evenodd;stroke-width:0.3;stroke-linecap:round;stroke-linejoin:round;stroke-miterlimit:3"
					d="m 109.27292,74.612499 v -5.55625 l 3.70416,-5.027083 h 6.61459 l -3.70417,4.7625 v 5.820833 z"
					id="path20875"
				/><path
					style="opacity:1;fill:#83a984;fill-opacity:1;fill-rule:evenodd;stroke-width:0.3;stroke-linecap:round;stroke-linejoin:round;stroke-miterlimit:3"
					d="m 109.27292,56.885416 -0.26459,-5.55625 3.70417,-4.7625 h 7.14375 l -3.96875,4.7625 v 5.55625 z"
					id="path20877"
				/><path
					style="opacity:1;fill:#83a984;fill-opacity:1;fill-rule:evenodd;stroke-width:0.3;stroke-linecap:round;stroke-linejoin:round;stroke-miterlimit:3"
					d="m 115.8875,39.422916 v -9.789583 c 0,0 3.96875,-4.497917 3.96875,-4.497917 L 112.97708,25.4 l -7.9375,7.14375 4.7625,6.879166 z"
					id="path20879"
				/><path
					style="opacity:1;fill:#d0ecd5;fill-opacity:1;fill-rule:evenodd;stroke-width:0.3;stroke-linecap:round;stroke-linejoin:round;stroke-miterlimit:3"
					d="m 109.5375,21.695833 h 3.43958 V 8.4666666 l -3.70416,3.9687504 z"
					id="path20881"
				/><rect
					style="opacity:1;fill:#83a984;fill-opacity:1;fill-rule:evenodd;stroke-width:0.3;stroke-linecap:round;stroke-linejoin:round;stroke-miterlimit:3"
					id="rect20883"
					width="5.8208332"
					height="7.1437497"
					x="88.106247"
					y="12.170834"
				/><path
					style="opacity:1;fill:#83a984;fill-opacity:1;fill-rule:evenodd;stroke-width:0.3;stroke-linecap:round;stroke-linejoin:round;stroke-miterlimit:3"
					d="m 56.885416,93.927082 7.9375,-6.614583 1.5875,-1.5875 4.497916,-7.672917 c 0,0 -0.152757,-16.139583 0,-15.874999 0.152758,0.264583 -12.435416,12.435416 -12.435416,12.435416 l -2.38125,7.408333 z"
					id="path20885"
				/><path
					style="opacity:1;fill:#83a984;fill-opacity:1;fill-rule:evenodd;stroke-width:0.3;stroke-linecap:round;stroke-linejoin:round;stroke-miterlimit:3"
					d="m 92.339582,74.612499 v -8.466667 l -8.466666,8.466667 z"
					id="path20887"
				/><circle
					style="opacity:1;fill:#000000;fill-opacity:1;fill-rule:evenodd;stroke-width:0.557143;stroke-linecap:round;stroke-linejoin:round;stroke-miterlimit:3"
					id="circle20889"
					cx="26.987499"
					cy="45.508335"
					r="3.4395852"
				/><rect
					style="opacity:1;fill:#f79783;fill-opacity:1;fill-rule:evenodd;stroke-width:0.3;stroke-linecap:round;stroke-linejoin:round;stroke-miterlimit:3"
					id="rect20891"
					width="2.9104166"
					height="2.6458333"
					x="64.293747"
					y="11.641666"
				/><rect
					style="opacity:1;fill:#f79783;fill-opacity:1;fill-rule:evenodd;stroke-width:0.31053;stroke-linecap:round;stroke-linejoin:round;stroke-miterlimit:3"
					id="rect20893"
					width="3.7041667"
					height="3.9687498"
					x="60.589584"
					y="14.2875"
				/><rect
					style="opacity:1;fill:#f79783;fill-opacity:1;fill-rule:evenodd;stroke-width:0.3;stroke-linecap:round;stroke-linejoin:round;stroke-miterlimit:3"
					id="rect20895"
					width="2.9104166"
					height="2.6458333"
					x="53.974998"
					y="7.6729164"
				/><rect
					style="opacity:1;fill:#f79783;fill-opacity:1;fill-rule:evenodd;stroke-width:0.3;stroke-linecap:round;stroke-linejoin:round;stroke-miterlimit:3"
					id="rect20897"
					width="3.7041667"
					height="3.4395833"
					x="50.270832"
					y="10.583333"
				/><path
					style="opacity:1;fill:#917225;fill-opacity:1;fill-rule:evenodd;stroke-width:0.3;stroke-linecap:round;stroke-linejoin:round;stroke-miterlimit:3"
					d="M 28.839583,37.041666 39.422916,26.458333 h 1.852083 L 43.127083,24.60625 40.481249,21.960416 41.190198,19.314583 36.247916,11.90625 30.95625,12.435417 26.19375,31.75 Z"
					id="path20899"
				/><path
					style="opacity:1;fill:#dc8b17;fill-opacity:1;fill-rule:evenodd;stroke-width:0.3;stroke-linecap:round;stroke-linejoin:round;stroke-miterlimit:3"
					d="m 32.014583,33.602083 v -4.7625 H 26.9875 l 1.058333,-4.233333 h 5.027083 v 3.175 H 38.1 Z"
					id="path20901"
				/><path
					style="opacity:1;fill:#dc8b17;fill-opacity:1;fill-rule:evenodd;stroke-width:0.3;stroke-linecap:round;stroke-linejoin:round;stroke-miterlimit:3"
					d="m 42.862499,24.60625 10e-7,-5.291667 H 37.30625 L 35.454166,16.404166 H 30.1625 l -1.058334,4.497917 h 6.35 v 2.645833 c 0.07323,0.525652 0.135186,1.058276 1.058334,1.058334 z"
					id="path20903"
				/><path
					style="opacity:1;fill:#dc8b17;fill-opacity:1;fill-rule:evenodd;stroke-width:0.3;stroke-linecap:round;stroke-linejoin:round;stroke-miterlimit:3"
					d="m 30.95625,12.170833 1.322916,-4.7624998 h 3.96875 V 11.90625 l 0.529167,0.529167 H 30.95625 Z"
					id="path20905"
				/><path
					style="opacity:1;fill:#9f9d97;fill-opacity:1;fill-rule:evenodd;stroke-width:0.3;stroke-linecap:round;stroke-linejoin:round;stroke-miterlimit:3"
					d="m 42.333333,95.514582 h -2.910417 v -6.614583 l 14.2875,-17.727083 h 2.910417 l -2.645834,2.645833 v 11.1125 h -4.497916 v 10.583333 z"
					id="path20907"
				/><path
					style="opacity:1;fill:#9f9d97;fill-opacity:1;fill-rule:evenodd;stroke-width:0.3;stroke-linecap:round;stroke-linejoin:round;stroke-miterlimit:3"
					d="m 70.643749,74.612499 h 8.466667 L 92.339582,61.383333 v -7.672917 l -6.879166,-7.14375 h -7.9375 v 6.614583 h 5.027083 l 3.175,3.175 v 7.9375 c -0.794909,1.858504 -2.123053,3.176118 -3.96875,3.96875 H 70.379166 Z"
					id="path20909"
				/><path
					style="opacity:1;fill:#584b18;fill-opacity:1;fill-rule:evenodd;stroke-width:0.3;stroke-linecap:round;stroke-linejoin:round;stroke-miterlimit:3"
					d="m 14.816666,64.029166 v -3.968749 h 7.672917 l 6.614583,-6.350001 v -5.820833 l 1.322917,-2.910417 0.79375,1.5875 H 44.185416 L 23.8125,64.029166 Z"
					id="path20911"
				/><circle
					style="opacity:1;fill:#000000;fill-opacity:1;fill-rule:evenodd;stroke-width:0.599999;stroke-linecap:round;stroke-linejoin:round;stroke-miterlimit:3"
					id="circle20913"
					cx="27.516666"
					cy="46.831253"
					r="3.7041645"
				/><circle
					style="opacity:1;fill:#efdc24;fill-opacity:1;fill-rule:evenodd;stroke-width:0.342857;stroke-linecap:round;stroke-linejoin:round;stroke-miterlimit:3"
					id="circle20915"
					cx="26.987499"
					cy="45.508335"
					r="2.1166675"
				/><path
					style="opacity:1;fill:#ececd0;fill-opacity:1;fill-rule:evenodd;stroke-width:0.3;stroke-linecap:round;stroke-linejoin:round;stroke-miterlimit:3"
					d="m 60.060416,109.27292 v -3.96875 l 20.108333,-0.26459 6.614583,-5.820831 H 70.379166 v -3.96875 h 18.25625 v -3.175 h -10.84792 v -3.96875 h 14.552086 v 11.1125 L 81.491666,109.27292 Z"
					id="path20917"
				/><path
					style="opacity:1;fill:#ececd0;fill-opacity:1;fill-rule:evenodd;stroke-width:0.3;stroke-linecap:round;stroke-linejoin:round;stroke-miterlimit:3"
					d="M 79.110416,74.612499 92.339582,61.383333 v 4.762499 l -8.466666,8.466667 z"
					id="path20919"
				/><path
					style="opacity:1;fill:#ececd0;fill-opacity:1;fill-rule:evenodd;stroke-width:0.3;stroke-linecap:round;stroke-linejoin:round;stroke-miterlimit:3"
					d="M 74.083332,78.052082 V 74.612499 H 59.266666 L 73.818749,59.531249 70.908332,56.885416 53.974999,73.818749 v 25.4 c 0,0 3.245895,0.264583 3.175,0 -0.0709,-0.264584 0,-17.4625 0,-17.4625 l 10.847917,10.054167 2.38125,-2.38125 -12.170833,-11.377084 z"
					id="path20921"
				/><path
					style="opacity:1;fill:#ececd0;fill-opacity:1;fill-rule:evenodd;stroke-width:0.3;stroke-linecap:round;stroke-linejoin:round;stroke-miterlimit:3"
					d="m 32.014583,112.18333 h 0.264583 l 6.614584,4.49792 H 83.608332 L 102.12917,98.160415 V 53.445833 L 88.899999,39.422916 H 60.060416 v -2.38125 l 7.14375,-5.55625 V 26.19375 l 19.05,-19.0500001 h 10.054166 v 5.2916671 h -6.085416 c -0.65845,0.274844 -1.063799,0.743028 -1.322917,1.322916 v 4.497917 h 9.525 L 109.80208,3.96875 h 10.05417 v 4.2333332 h -6.87917 V 21.695833 h 3.96875 v -3.175 h 6.61459 v 6.614583 L 112.97708,25.4 l -7.40833,7.14375 4.49792,6.879166 h 13.49375 v 7.14375 H 112.7125 l -3.43958,4.7625 v 5.55625 h 14.2875 v 7.14375 h -10.58334 l -3.96875,4.7625 v 5.55625 h 14.55209 v 7.408333 h -10.58334 l -3.96875,4.497917 v 5.820833 h 14.55209 v 7.14375 h -14.55209 v 9.789581 l 10.84792,7.67292 V 123.825 H 39.6875 l -8.73125,-7.14375 v -4.49792 z"
					id="path20923"
				/><path
					style="opacity:1;fill:#83a984;fill-opacity:1;fill-rule:evenodd;stroke-width:0.3;stroke-linecap:round;stroke-linejoin:round;stroke-miterlimit:3"
					d="m 99.218749,123.56042 v -2.64584 l 7.143751,-4.49791 6.35,5.02708 V 123.825 H 99.218749 Z"
					id="path20925"
				/><path
					style="opacity:1;fill:#f79783;fill-opacity:1;fill-rule:evenodd;stroke-width:0.3;stroke-linecap:round;stroke-linejoin:round;stroke-miterlimit:3"
					d="M 101.99688,64.029167 V 69.85 h 2.91041 v -2.910416 h 2.91042 v -2.910417 z"
					id="path20927"
				/><path
					style="opacity:1;fill:#f79783;fill-opacity:1;fill-rule:evenodd;stroke-width:0.3;stroke-linecap:round;stroke-linejoin:round;stroke-miterlimit:3"
					d="m 102.12917,85.592708 v 5.820833 h 2.91041 V 88.503125 H 107.95 v -2.910417 z"
					id="path20929"
				/><path
					style="opacity:1;fill:#f79783;fill-opacity:1;fill-rule:evenodd;stroke-width:0.3;stroke-linecap:round;stroke-linejoin:round;stroke-miterlimit:3"
					d="m 99.086462,102.65833 v 5.82084 h 2.910408 v -2.91042 h 2.91042 v -2.91042 z"
					id="path20931"
				/><path
					style="opacity:1;fill:#f79783;fill-opacity:1;fill-rule:evenodd;stroke-width:0.3;stroke-linecap:round;stroke-linejoin:round;stroke-miterlimit:3"
					d="m 88.900009,116.68125 v 5.82084 h 2.910408 v -2.91042 h 2.91042 v -2.91042 z"
					id="path20933"
				/><path
					style="opacity:1;fill:#f79783;fill-opacity:1;fill-rule:evenodd;stroke-width:0.3;stroke-linecap:round;stroke-linejoin:round;stroke-miterlimit:3"
					d="m 70.908342,116.68125 v 5.82084 h 2.910408 v -2.91042 h 2.91042 v -2.91042 z"
					id="path20935"
				/><path
					style="opacity:1;fill:#f79783;fill-opacity:1;fill-rule:evenodd;stroke-width:0.3;stroke-linecap:round;stroke-linejoin:round;stroke-miterlimit:3"
					d="m 53.975009,116.68125 v 5.82084 h 2.910408 v -2.91042 h 2.91042 v -2.91042 z"
					id="path20937"
				/><rect
					style="opacity:1;fill:#f79783;fill-opacity:1;fill-rule:evenodd;stroke-width:0.3;stroke-linecap:round;stroke-linejoin:round;stroke-miterlimit:3"
					id="rect20939"
					width="5.5562501"
					height="2.3812499"
					x="71.70208"
					y="32.543751"
				/><path
					style="opacity:1;fill:#f79783;fill-opacity:1;fill-rule:evenodd;stroke-width:0.3;stroke-linecap:round;stroke-linejoin:round;stroke-miterlimit:3"
					d="m 102.39375,43.65625 v 5.820833 h 2.91041 v -2.910416 h 2.91042 V 43.65625 Z"
					id="path20941"
				/><path
					style="opacity:1;fill:#f79783;fill-opacity:1;fill-rule:evenodd;stroke-width:0.3;stroke-linecap:round;stroke-linejoin:round;stroke-miterlimit:3"
					d="m 95.514583,25.4 v 5.820833 H 98.425 v -2.910416 h 2.91042 V 25.4 Z"
					id="path20943"
				/><path
					style="opacity:1;fill:#f79783;fill-opacity:1;fill-rule:evenodd;stroke-width:0.3;stroke-linecap:round;stroke-linejoin:round;stroke-miterlimit:3"
					d="m 81.756249,21.695833 v 5.820833 h 2.910417 V 24.60625 h 2.910416 v -2.910417 z"
					id="path20945"
				/></g
			><g id="g20835"
				><path
					style="opacity:1;fill:#9f9d97;fill-opacity:1;fill-rule:evenodd;stroke-width:0.3;stroke-linecap:round;stroke-linejoin:round;stroke-miterlimit:3"
					d="m 42.333333,48.154166 6.614583,-5.820833 h 37.041666 c 3.146972,2.937465 6.387202,6.147392 10.31875,11.377083 V 100.0125 c -3.999275,5.02885 -8.386192,9.47297 -13.229166,13.22917 h -50.00625 l 5.291667,5.29166 H 99.218749 L 105.4575,95.249999 V 41.010416 L 74.083332,27.78125 66.939582,28.839583 H 63.499999 54.239583 L 39.422916,43.656249 38.1,48.154166 Z"
					id="path9152"
				/><path
					style="opacity:1;fill:#dc8b17;fill-opacity:1;fill-rule:evenodd;stroke-width:0.3;stroke-linecap:round;stroke-linejoin:round;stroke-miterlimit:3"
					d="m 21.960416,43.127083 h 2.645834 l 2.645833,-0.529167 1.5875,0.264583 V 31.75 H 26.19375 c -1.046357,3.905895 -2.437127,7.704587 -4.233334,11.377083 z"
					id="path6794"
				/><path
					style="opacity:1;fill:#ececd0;fill-rule:evenodd;stroke-width:0.3;stroke-linecap:round;stroke-linejoin:round;stroke-miterlimit:3;fill-opacity:1"
					d="m 11.1125,74.612499 h 3.439583 v -4.7625 L 18.520833,66.675 v -2.645833 l -7.408333,-10e-7 z"
					id="path1456"
				/><path
					style="opacity:1;fill:#ececd0;fill-opacity:1;fill-rule:evenodd;stroke-width:0.3;stroke-linecap:round;stroke-linejoin:round;stroke-miterlimit:3"
					d="m 8.4666666,56.885416 v 2.38125 l 1.8520834,-2.38125 z"
					id="path3388"
				/><path
					style="opacity:1;fill:#ececd0;fill-opacity:1;fill-rule:evenodd;stroke-width:0.3;stroke-linecap:round;stroke-linejoin:round;stroke-miterlimit:3"
					d="m 17.4625,55.827083 v -3.704167 l -2.910417,2.116667 z"
					id="path3390"
				/><path
					style="opacity:1;fill:#ececd0;fill-opacity:1;fill-rule:evenodd;stroke-width:0.3;stroke-linecap:round;stroke-linejoin:round;stroke-miterlimit:3"
					d="m 21.43125,60.060416 h 1.058333 l 1.5875,-1.5875 -2.38125,-1.5875 z"
					id="path3392"
				/><path
					style="opacity:1;fill:#9f9d97;fill-opacity:1;fill-rule:evenodd;stroke-width:0.3;stroke-linecap:round;stroke-linejoin:round;stroke-miterlimit:3"
					d="m 4.4979166,56.885416 v -3.96875 h 4.7625 l 13.2291664,-10.31875 2.38125,0.264583 -0.529167,3.704167 -0.529166,0.79375 -12.7,9.525 z"
					id="path6968"
				/><path
					style="opacity:1;fill:#ececd0;fill-opacity:1;fill-rule:evenodd;stroke-width:0.3;stroke-linecap:round;stroke-linejoin:round;stroke-miterlimit:3"
					d="m 26.19375,56.504416 v -2.264833 l 2.3592,0 z"
					id="path3394"
				/><path
					style="opacity:1;fill:#ececd0;fill-opacity:1;fill-rule:evenodd;stroke-width:0.3;stroke-linecap:round;stroke-linejoin:round;stroke-miterlimit:3"
					d="m 19.84375,50.270833 h 1.852083 l 2.116667,1.852083 v -4.7625 z"
					id="path3396"
				/><rect
					style="opacity:1;fill:#83a984;fill-opacity:1;fill-rule:evenodd;stroke-width:0.3;stroke-linecap:round;stroke-linejoin:round;stroke-miterlimit:3"
					id="rect4178"
					width="20.637499"
					height="18.256254"
					x="11.1125"
					y="95.51458"
					ry="0"
				/><path
					style="opacity:1;fill:#ececd0;fill-opacity:1;fill-rule:evenodd;stroke-width:0.3;stroke-linecap:round;stroke-linejoin:round;stroke-miterlimit:3"
					d="M 7.6729166,92.074999 H 11.1125 l 10.583333,10.318751 v -6.879168 l -3.704167,10e-7 v -3.439584 h 7.14375 v 13.758331 h 3.704167 V 92.074999 h 3.439583 v 20.108331 l -1.322916,4.49792 H 7.6729166 v -3.43958 H 21.695833 V 109.5375 H 7.6729166 v -7.14375 H 11.1125 v 3.70417 h 6.879166 L 7.6729166,95.514582 Z"
					id="path4124"
				/><path
					style="opacity:1;fill:#83a984;fill-opacity:1;fill-rule:evenodd;stroke-width:0.3;stroke-linecap:round;stroke-linejoin:round;stroke-miterlimit:3"
					d="m 46.037499,106.3625 -3.704166,-2.11667 0,-8.731248 h -2.910417 v 10.583338 l 5.027083,2.91041 z"
					id="path5738"
				/><path
					style="opacity:1;fill:#83a984;fill-opacity:1;fill-rule:evenodd;stroke-width:0.3;stroke-linecap:round;stroke-linejoin:round;stroke-miterlimit:3"
					d="m 51.329166,104.51042 1.852083,-2.64584 -3.704166,-2.116665 V 95.25 h -3.175 v 6.35 z"
					id="path5742"
				/><path
					style="opacity:1;fill:#83a984;fill-opacity:1;fill-rule:evenodd;stroke-width:0.3;stroke-linecap:round;stroke-linejoin:round;stroke-miterlimit:3"
					d="m 63.499999,105.30417 7.9375,-6.085421 h 15.610417 l -6.879167,6.350001 z"
					id="path5744"
				/><path
					style="opacity:1;fill:#83a984;fill-opacity:1;fill-rule:evenodd;stroke-width:0.3;stroke-linecap:round;stroke-linejoin:round;stroke-miterlimit:3"
					d="m 74.877082,95.249999 2.910417,-3.175 h 10.847917 v 3.175 z"
					id="path5746"
				/><path
					style="opacity:1;fill:#83a984;fill-opacity:1;fill-rule:evenodd;stroke-width:0.3;stroke-linecap:round;stroke-linejoin:round;stroke-miterlimit:3"
					d="m 119.59167,116.68125 -3.70417,-5.02708 v -7.67292 l 3.96875,-5.027085 -11.37708,0.264585 0.52916,10.05417 z"
					id="path5750"
				/><path
					style="opacity:1;fill:#83a984;fill-opacity:1;fill-rule:evenodd;stroke-width:0.3;stroke-linecap:round;stroke-linejoin:round;stroke-miterlimit:3"
					d="m 109.00833,92.074999 h 6.87917 v -5.55625 l 3.96875,-5.027083 -6.87917,0.264583 -3.96875,4.233333 z"
					id="path5752"
				/><path
					style="opacity:1;fill:#83a984;fill-opacity:1;fill-rule:evenodd;stroke-width:0.3;stroke-linecap:round;stroke-linejoin:round;stroke-miterlimit:3"
					d="m 108.47917,75.40625 v -6.614583 l 4.49791,-4.762501 h 6.61459 l -3.70417,4.7625 v 5.820833 z"
					id="path5754"
				/><path
					style="opacity:1;fill:#83a984;fill-opacity:1;fill-rule:evenodd;stroke-width:0.3;stroke-linecap:round;stroke-linejoin:round;stroke-miterlimit:3"
					d="m 109.27292,56.885416 -0.26459,-5.55625 3.70417,-4.7625 h 7.14375 l -3.96875,4.7625 v 5.55625 z"
					id="path5756"
				/><path
					style="opacity:1;fill:#83a984;fill-opacity:1;fill-rule:evenodd;stroke-width:0.3;stroke-linecap:round;stroke-linejoin:round;stroke-miterlimit:3"
					d="m 115.8875,39.422916 v -9.789583 c 0,0 3.96875,-4.497917 3.96875,-4.497917 L 112.97708,25.4 l -7.9375,7.14375 4.7625,6.879166 z"
					id="path5758"
				/><path
					style="opacity:1;fill:#d0ecd5;fill-opacity:1;fill-rule:evenodd;stroke-width:0.3;stroke-linecap:round;stroke-linejoin:round;stroke-miterlimit:3"
					d="m 109.5375,21.695833 h 3.43958 V 8.4666666 l -3.70416,3.9687504 z"
					id="path5760"
				/><rect
					style="opacity:1;fill:#83a984;fill-opacity:1;fill-rule:evenodd;stroke-width:0.3;stroke-linecap:round;stroke-linejoin:round;stroke-miterlimit:3"
					id="rect5764"
					width="5.8208332"
					height="7.1437497"
					x="88.106247"
					y="12.170834"
				/><path
					style="opacity:1;fill:#83a984;fill-opacity:1;fill-rule:evenodd;stroke-width:0.3;stroke-linecap:round;stroke-linejoin:round;stroke-miterlimit:3"
					d="m 56.885416,93.927082 7.9375,-6.614583 1.5875,-1.5875 4.497916,-7.672917 c 0,0 -0.152757,-16.139583 0,-15.874999 0.152758,0.264583 -12.435416,12.435416 -12.435416,12.435416 l -2.38125,7.408333 z"
					id="path5768"
				/><path
					style="opacity:1;fill:#83a984;fill-opacity:1;fill-rule:evenodd;stroke-width:0.3;stroke-linecap:round;stroke-linejoin:round;stroke-miterlimit:3"
					d="m 92.339582,74.612499 v -8.466667 l -8.466666,8.466667 z"
					id="path5770"
				/><circle
					style="opacity:1;fill:#000000;fill-opacity:1;fill-rule:evenodd;stroke-width:0.599999;stroke-linecap:round;stroke-linejoin:round;stroke-miterlimit:3"
					id="circle9318"
					cx="27.516666"
					cy="46.831253"
					r="3.7041645"
				/><path
					style="opacity:1;fill:#9f9d97;fill-opacity:1;fill-rule:evenodd;stroke-width:0.3;stroke-linecap:round;stroke-linejoin:round;stroke-miterlimit:3"
					d="m 14.816666,64.029166 v -3.968749 h 7.672917 l 6.614583,-6.350001 v -5.820833 l 1.322917,-2.910417 0.79375,1.5875 H 44.185416 L 23.8125,64.029166 Z"
					id="path6970"
				/><path
					style="opacity:1;fill:#ececd0;fill-opacity:1;fill-rule:evenodd;stroke-width:0.3;stroke-linecap:round;stroke-linejoin:round;stroke-miterlimit:3"
					d="m 31.75,56.885416 v -3.96875 h 5.291666 l 6.11029,10.583333 h 4.473043 l 11.90625,-13.229166 h 7.9375 v 3.96875 h -6.614583 l -11.90625,13.229166 h -7.9375 L 34.395833,56.885416 Z"
					id="path1934"
				/><path
					style="opacity:1;fill:#ececd0;fill-opacity:1;fill-rule:evenodd;stroke-width:0.3;stroke-linecap:round;stroke-linejoin:round;stroke-miterlimit:3"
					d="m 46.302083,10.583333 h 3.96875 v 3.439583 h 3.704164 V 23.8125 L 38.1,39.422916 h 3.439583 L 53.710416,26.9875 h 3.175 v -12.7 h 3.704167 v 3.96875 h 3.704166 v 12.7 H 55.033333 L 39.422916,46.566666 h -8.202083 l -4.233333,-5.027083 1.852083,-2.38125 17.4625,-17.197917 z"
					id="path9598"
				/><circle
					style="opacity:1;fill:#000000;fill-opacity:1;fill-rule:evenodd;stroke-width:0.557143;stroke-linecap:round;stroke-linejoin:round;stroke-miterlimit:3"
					id="circle5878"
					cx="26.987499"
					cy="45.508335"
					r="3.4395852"
				/><rect
					style="opacity:1;fill:#f79783;fill-opacity:1;fill-rule:evenodd;stroke-width:0.3;stroke-linecap:round;stroke-linejoin:round;stroke-miterlimit:3"
					id="rect5932"
					width="2.9104166"
					height="2.6458333"
					x="64.293747"
					y="11.641666"
				/><rect
					style="opacity:1;fill:#f79783;fill-opacity:1;fill-rule:evenodd;stroke-width:0.31053;stroke-linecap:round;stroke-linejoin:round;stroke-miterlimit:3"
					id="rect5986"
					width="3.7041667"
					height="3.9687498"
					x="60.589584"
					y="14.2875"
				/><rect
					style="opacity:1;fill:#f79783;fill-opacity:1;fill-rule:evenodd;stroke-width:0.3;stroke-linecap:round;stroke-linejoin:round;stroke-miterlimit:3"
					id="rect5988"
					width="2.9104166"
					height="2.6458333"
					x="53.974998"
					y="7.6729164"
				/><rect
					style="opacity:1;fill:#f79783;fill-opacity:1;fill-rule:evenodd;stroke-width:0.3;stroke-linecap:round;stroke-linejoin:round;stroke-miterlimit:3"
					id="rect5990"
					width="3.7041667"
					height="3.4395833"
					x="50.270832"
					y="10.583333"
				/><path
					style="opacity:1;fill:#917225;fill-opacity:1;fill-rule:evenodd;stroke-width:0.3;stroke-linecap:round;stroke-linejoin:round;stroke-miterlimit:3"
					d="M 28.839583,37.041666 39.422916,26.458333 h 1.852083 L 43.127083,24.60625 40.481249,21.960416 41.190198,19.314583 36.247916,11.90625 30.95625,12.435417 26.19375,31.75 Z"
					id="path9320"
				/><path
					style="opacity:1;fill:#dc8b17;fill-opacity:1;fill-rule:evenodd;stroke-width:0.3;stroke-linecap:round;stroke-linejoin:round;stroke-miterlimit:3"
					d="m 32.014583,33.602083 v -4.7625 H 26.9875 l 1.058333,-4.233333 h 5.027083 v 3.175 H 38.1 Z"
					id="path6850"
				/><path
					style="opacity:1;fill:#dc8b17;fill-opacity:1;fill-rule:evenodd;stroke-width:0.3;stroke-linecap:round;stroke-linejoin:round;stroke-miterlimit:3"
					d="m 42.862499,24.60625 10e-7,-5.291667 H 37.30625 L 35.454166,16.404166 H 30.1625 l -1.058334,4.497917 h 6.35 v 2.645833 c 0.07323,0.525652 0.135186,1.058276 1.058334,1.058334 z"
					id="path6852"
				/><path
					style="opacity:1;fill:#dc8b17;fill-opacity:1;fill-rule:evenodd;stroke-width:0.3;stroke-linecap:round;stroke-linejoin:round;stroke-miterlimit:3"
					d="m 30.95625,12.170833 1.322916,-4.7624998 h 3.96875 V 11.90625 l 0.529167,0.529167 H 30.95625 Z"
					id="path6854"
				/><path
					style="opacity:1;fill:#9f9d97;fill-opacity:1;fill-rule:evenodd;stroke-width:0.3;stroke-linecap:round;stroke-linejoin:round;stroke-miterlimit:3"
					d="m 42.333333,95.514582 h -2.910417 v -6.614583 l 14.2875,-17.727083 h 2.910417 l -2.645834,2.645833 v 11.1125 l -4.497916,0 v 10.583333 z"
					id="path6856"
				/><path
					style="opacity:1;fill:#9f9d97;fill-opacity:1;fill-rule:evenodd;stroke-width:0.3;stroke-linecap:round;stroke-linejoin:round;stroke-miterlimit:3"
					d="m 70.643749,74.612499 h 8.466667 L 92.339582,61.383333 v -7.672917 l -6.879166,-7.14375 h -7.9375 v 6.614583 h 5.027083 l 3.175,3.175 v 7.9375 c -0.794909,1.858504 -2.123053,3.176118 -3.96875,3.96875 H 70.379166 Z"
					id="path6966"
				/><circle
					style="opacity:1;fill:#efdc24;fill-opacity:1;fill-rule:evenodd;stroke-width:0.342857;stroke-linecap:round;stroke-linejoin:round;stroke-miterlimit:3"
					id="path5824"
					cx="26.987499"
					cy="45.508335"
					r="1.9857218"
				/><path
					style="opacity:1;fill:#ececd0;fill-opacity:1;fill-rule:evenodd;stroke-width:0.3;stroke-linecap:round;stroke-linejoin:round;stroke-miterlimit:3"
					d="m 60.060416,109.27292 v -3.96875 l 20.108333,-0.26459 6.614583,-5.820831 H 70.379166 v -3.96875 h 18.25625 v -3.175 h -10.84792 v -3.96875 h 14.552086 v 11.1125 L 81.491666,109.27292 Z"
					id="path9484"
				/><path
					style="opacity:1;fill:#ececd0;fill-opacity:1;fill-rule:evenodd;stroke-width:0.3;stroke-linecap:round;stroke-linejoin:round;stroke-miterlimit:3"
					d="M 79.110416,74.612499 92.339582,61.383333 v 4.762499 l -8.466666,8.466667 z"
					id="path9594"
				/><path
					style="opacity:1;fill:#ececd0;fill-opacity:1;fill-rule:evenodd;stroke-width:0.3;stroke-linecap:round;stroke-linejoin:round;stroke-miterlimit:3"
					d="M 74.083332,78.052082 V 74.612499 H 59.266666 L 73.818749,59.531249 70.908332,56.885416 53.974999,73.818749 v 25.4 c 0,0 3.245895,0.264583 3.175,0 -0.0709,-0.264584 0,-17.4625 0,-17.4625 l 10.847917,10.054167 2.38125,-2.38125 -12.170833,-11.377084 z"
					id="path9596"
				/><path
					style="opacity:1;fill:#ececd0;fill-opacity:1;fill-rule:evenodd;stroke-width:0.3;stroke-linecap:round;stroke-linejoin:round;stroke-miterlimit:3"
					d="m 32.014583,112.18333 h 0.264583 l 6.614584,4.49792 H 83.608332 L 102.12917,98.160415 V 53.445833 L 88.899999,39.422916 H 60.060416 v -2.38125 l 7.14375,-5.55625 V 26.19375 l 19.05,-19.0500001 h 10.054166 v 5.2916671 h -6.085416 c -0.65845,0.274844 -1.063799,0.743028 -1.322917,1.322916 v 4.497917 h 9.525 L 109.80208,3.96875 h 10.05417 v 4.2333332 h -6.87917 V 21.695833 h 3.96875 v -3.175 h 6.61459 v 6.614583 L 112.97708,25.4 l -7.40833,7.14375 4.49792,6.879166 h 13.49375 v 7.14375 H 112.7125 l -3.43958,4.7625 v 5.55625 h 14.2875 v 7.14375 h -10.58334 l -3.96875,4.7625 v 5.55625 h 14.55209 v 7.408333 h -10.58334 l -3.96875,4.497917 v 5.820833 h 14.55209 v 7.14375 h -14.55209 v 9.789581 l 10.84792,7.67292 V 123.825 H 39.6875 l -8.73125,-7.14375 v -4.49792 z"
					id="path11052"
				/><path
					style="opacity:1;fill:#83a984;fill-opacity:1;fill-rule:evenodd;stroke-width:0.3;stroke-linecap:round;stroke-linejoin:round;stroke-miterlimit:3"
					d="m 99.218749,123.56042 v -2.64584 l 7.143751,-4.49791 6.35,5.02708 V 123.825 H 99.218749 Z"
					id="path5748"
				/><path
					style="opacity:1;fill:#f79783;fill-opacity:1;fill-rule:evenodd;stroke-width:0.3;stroke-linecap:round;stroke-linejoin:round;stroke-miterlimit:3"
					d="M 101.99688,64.029167 V 69.85 h 2.91041 v -2.910416 h 2.91042 v -2.910417 z"
					id="path6782"
				/><path
					style="opacity:1;fill:#f79783;fill-opacity:1;fill-rule:evenodd;stroke-width:0.3;stroke-linecap:round;stroke-linejoin:round;stroke-miterlimit:3"
					d="m 102.12917,85.592708 v 5.820833 h 2.91041 V 88.503125 H 107.95 v -2.910417 z"
					id="path6784"
				/><path
					style="opacity:1;fill:#f79783;fill-opacity:1;fill-rule:evenodd;stroke-width:0.3;stroke-linecap:round;stroke-linejoin:round;stroke-miterlimit:3"
					d="m 99.086462,102.65833 v 5.82084 h 2.910408 v -2.91042 h 2.91042 v -2.91042 z"
					id="path6786"
				/><path
					style="opacity:1;fill:#f79783;fill-opacity:1;fill-rule:evenodd;stroke-width:0.3;stroke-linecap:round;stroke-linejoin:round;stroke-miterlimit:3"
					d="m 88.900009,116.68125 v 5.82084 h 2.910408 v -2.91042 h 2.91042 v -2.91042 z"
					id="path6788"
				/><path
					style="opacity:1;fill:#f79783;fill-opacity:1;fill-rule:evenodd;stroke-width:0.3;stroke-linecap:round;stroke-linejoin:round;stroke-miterlimit:3"
					d="m 70.908342,116.68125 v 5.82084 h 2.910408 v -2.91042 h 2.91042 v -2.91042 z"
					id="path6790"
				/><path
					style="opacity:1;fill:#f79783;fill-opacity:1;fill-rule:evenodd;stroke-width:0.3;stroke-linecap:round;stroke-linejoin:round;stroke-miterlimit:3"
					d="m 53.975009,116.68125 v 5.82084 h 2.910408 v -2.91042 h 2.91042 v -2.91042 z"
					id="path6792"
				/><rect
					style="opacity:1;fill:#f79783;fill-opacity:1;fill-rule:evenodd;stroke-width:0.3;stroke-linecap:round;stroke-linejoin:round;stroke-miterlimit:3"
					id="rect5992"
					width="5.5562501"
					height="2.3812499"
					x="71.70208"
					y="32.543751"
				/><path
					style="opacity:1;fill:#f79783;fill-opacity:1;fill-rule:evenodd;stroke-width:0.3;stroke-linecap:round;stroke-linejoin:round;stroke-miterlimit:3"
					d="m 102.39375,43.65625 v 5.820833 h 2.91041 v -2.910416 h 2.91042 V 43.65625 Z"
					id="path6780"
				/><path
					style="opacity:1;fill:#f79783;fill-opacity:1;fill-rule:evenodd;stroke-width:0.3;stroke-linecap:round;stroke-linejoin:round;stroke-miterlimit:3"
					d="m 95.514583,25.4 v 5.820833 H 98.425 v -2.910416 h 2.91042 V 25.4 Z"
					id="path6052"
				/><path
					style="opacity:1;fill:#f79783;fill-opacity:1;fill-rule:evenodd;stroke-width:0.3;stroke-linecap:round;stroke-linejoin:round;stroke-miterlimit:3"
					d="m 81.756249,21.695833 v 5.820833 h 2.910417 V 24.60625 h 2.910416 v -2.910417 z"
					id="path6050"
				/></g
			></g
		><metadata id="metadata9756">
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
