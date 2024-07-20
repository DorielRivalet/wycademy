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
				id="filter134944"
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
					id="feComposite134930"
				/><feColorMatrix
					in="composite1"
					values="1"
					type="saturate"
					result="colormatrix1"
					id="feColorMatrix134932"
				/><feFlood
					flood-opacity="1"
					flood-color="rgb(0,0,0)"
					result="flood1"
					id="feFlood134934"
				/><feBlend
					in="flood1"
					in2="colormatrix1"
					mode="multiply"
					result="blend1"
					id="feBlend134936"
				/><feBlend
					in2="blend1"
					mode="screen"
					result="blend2"
					id="feBlend134938"
				/><feColorMatrix
					in="blend2"
					values="1"
					type="saturate"
					result="colormatrix2"
					id="feColorMatrix134940"
				/><feComposite
					in="colormatrix2"
					in2="SourceGraphic"
					operator="in"
					k2="1"
					result="composite2"
					id="feComposite134942"
				/></filter
			></defs
		>
		<!-- svelte-ignore a11y-no-static-element-interactions -->
		<!-- svelte-ignore a11y-mouse-events-have-key-events -->
		<g id="layer1"
			><g
				id="g134565"
				style="filter:url(#filter134944)"
				transform="translate(1.0583333,1.5875)"
				><path
					style="opacity:1;fill:#7e8076;fill-opacity:1;fill-rule:evenodd;stroke-width:3;stroke-linecap:round;stroke-linejoin:round;stroke-miterlimit:3;stroke-opacity:0.498674;paint-order:stroke fill markers"
					d="m 83.608332,120.65 h 10.31875 v -13.49375 h -7.408333 l -2.291358,3.96875 z"
					id="path134449"
				/><path
					style="opacity:1;fill:#737269;fill-opacity:1;fill-rule:evenodd;stroke-width:3;stroke-linecap:round;stroke-linejoin:round;stroke-miterlimit:3;stroke-opacity:0.498674;paint-order:stroke fill markers"
					d="m 115.8875,121.17917 h -12.17083 v -12.17084 l 1.22205,-2.11666 h 10.15503 l 0.91654,1.5875 v 12.7 z"
					id="path134451"
				/><path
					style="opacity:1;fill:#85877d;fill-opacity:1;fill-rule:evenodd;stroke-width:3;stroke-linecap:round;stroke-linejoin:round;stroke-miterlimit:3;stroke-opacity:0.498674;paint-order:stroke fill markers"
					d="m 103.71667,100.80625 h 8.73125 c 2.30833,-0.26251 3.12278,-1.661721 3.43958,-3.439585 V 72.231249 h -5.82083 v 1.852083 h -1.05834 v 12.964584 c -3.91421,5.955544 -6.11314,10.818716 -5.29166,13.758334 z"
					id="path134453"
				/><path
					style="opacity:1;fill:#95978c;fill-opacity:1;fill-rule:evenodd;stroke-width:3;stroke-linecap:round;stroke-linejoin:round;stroke-miterlimit:3;stroke-opacity:0.498674;paint-order:stroke fill markers"
					d="m 87.312499,100.80625 v -3.968751 l 0.79375,-0.79375 v -2.645834 l 0.79375,-0.793749 v -2.38125 c 2.81046,-4.155201 4.799245,-8.966493 7.14375,-13.49375 v -13.49375 l -1.322917,-1.322917 h -3.704166 v -3.439583 h 5.291666 l 3.207904,1.852083 v 21.43125 C 97.794593,92.98337 94.955426,101.88753 87.312499,100.80625 Z"
					id="path134455"
				/><path
					style="opacity:1;fill:#95978c;fill-opacity:1;fill-rule:evenodd;stroke-width:3;stroke-linecap:round;stroke-linejoin:round;stroke-miterlimit:3;stroke-opacity:0.498674;paint-order:stroke fill markers"
					d="m 83.343749,50.799999 v -2.38125 h 14.022916 c 14.395645,1.680185 17.678385,9.433685 18.520835,18.520833 -2.0102,-0.09737 -4.25746,-0.679813 -8.20208,-4.735475 C 101.24994,53.99722 92.809507,51.022152 83.343749,50.799999 Z"
					id="path134457"
				/><path
					style="opacity:1;fill:#bcab4a;fill-opacity:1;fill-rule:evenodd;stroke-width:3;stroke-linecap:round;stroke-linejoin:round;stroke-miterlimit:3;stroke-opacity:0.498674;paint-order:stroke fill markers"
					d="m 67.468749,115.09375 h 1.322917 V 97.895832 h 7.9375 v 3.968748 h -3.96875 v 2.64584 h 3.96875 v 5.29166 h -3.96875 v 2.64584 h 3.96875 v 3.96875 h -3.96875 v 2.64583 h 6.614583 V 92.604166 h -9.260417 l -2.645833,2.645833 z"
					id="path134459"
				/><rect
					style="opacity:1;fill:#61625a;fill-opacity:1;fill-rule:evenodd;stroke-width:3;stroke-linecap:round;stroke-linejoin:round;stroke-miterlimit:3;stroke-opacity:0.498674;paint-order:stroke fill markers"
					id="rect134461"
					width="3.7041667"
					height="3.4395833"
					x="106.3625"
					y="115.35833"
					ry="0"
				/><rect
					style="opacity:1;fill:#61625a;fill-opacity:1;fill-rule:evenodd;stroke-width:3;stroke-linecap:round;stroke-linejoin:round;stroke-miterlimit:3;stroke-opacity:0.498674;paint-order:stroke fill markers"
					id="rect134463"
					width="3.96875"
					height="3.7041667"
					x="110.06667"
					y="109.00833"
				/><rect
					style="opacity:1;fill:#73756c;fill-opacity:1;fill-rule:evenodd;stroke-width:3;stroke-linecap:round;stroke-linejoin:round;stroke-miterlimit:3;stroke-opacity:0.498674;paint-order:stroke fill markers"
					id="rect134465"
					width="3.175"
					height="3.175"
					x="90.222916"
					y="89.164581"
				/><rect
					style="opacity:1;fill:#75776e;fill-opacity:1;fill-rule:evenodd;stroke-width:3;stroke-linecap:round;stroke-linejoin:round;stroke-miterlimit:3;stroke-opacity:0.498674;paint-order:stroke fill markers"
					id="rect134467"
					width="3.96875"
					height="3.7041667"
					x="106.3625"
					y="93.927086"
				/><rect
					style="opacity:1;fill:#75776e;fill-opacity:1;fill-rule:evenodd;stroke-width:3;stroke-linecap:round;stroke-linejoin:round;stroke-miterlimit:3;stroke-opacity:0.498674;paint-order:stroke fill markers"
					id="rect134469"
					width="2.9104166"
					height="3.175"
					x="112.97708"
					y="84.137497"
				/><path
					style="opacity:1;fill:#7e8076;fill-opacity:1;fill-rule:evenodd;stroke-width:3;stroke-linecap:round;stroke-linejoin:round;stroke-miterlimit:3;stroke-opacity:0.498674;paint-order:stroke fill markers"
					d="m 46.424538,120.65 h -10.31875 v -13.49375 h 7.408333 l 2.291358,3.96875 z"
					id="path134471"
				/><path
					style="opacity:1;fill:#737269;fill-opacity:1;fill-rule:evenodd;stroke-width:3;stroke-linecap:round;stroke-linejoin:round;stroke-miterlimit:3;stroke-opacity:0.498674;paint-order:stroke fill markers"
					d="M 14.14537,121.17917 H 26.3162 v -12.17084 l -1.22205,-2.11666 H 14.93912 l -0.91654,1.5875 v 12.7 z"
					id="path134473"
				/><path
					style="opacity:1;fill:#85877d;fill-opacity:1;fill-rule:evenodd;stroke-width:3;stroke-linecap:round;stroke-linejoin:round;stroke-miterlimit:3;stroke-opacity:0.498674;paint-order:stroke fill markers"
					d="m 26.3162,100.80625 h -8.73125 c -2.30833,-0.26251 -3.12278,-1.661721 -3.43958,-3.439585 V 72.231249 h 5.82083 v 1.852083 h 1.05834 v 12.964584 c 3.91421,5.955544 6.11314,10.818716 5.29166,13.758334 z"
					id="path134475"
				/><path
					style="opacity:1;fill:#95978c;fill-opacity:1;fill-rule:evenodd;stroke-width:3;stroke-linecap:round;stroke-linejoin:round;stroke-miterlimit:3;stroke-opacity:0.498674;paint-order:stroke fill markers"
					d="m 42.720371,100.80625 v -3.968751 l -0.79375,-0.79375 v -2.645834 l -0.79375,-0.793749 v -2.38125 c -2.81046,-4.155201 -4.799245,-8.966493 -7.14375,-13.49375 v -13.49375 l 1.322917,-1.322917 h 3.704166 v -3.439583 h -5.291666 l -3.207904,1.852083 v 21.43125 c 1.721643,11.227121 4.56081,20.131281 12.203737,19.050001 z"
					id="path134477"
				/><path
					style="opacity:1;fill:#95978c;fill-opacity:1;fill-rule:evenodd;stroke-width:3;stroke-linecap:round;stroke-linejoin:round;stroke-miterlimit:3;stroke-opacity:0.498674;paint-order:stroke fill markers"
					d="m 46.689121,50.799999 v -2.38125 H 32.666205 C 18.27056,50.098934 14.98782,57.852434 14.14537,66.939582 c 2.0102,-0.09737 4.25746,-0.679813 8.20208,-4.735475 6.43548,-8.206887 14.875913,-11.181955 24.341671,-11.404108 z"
					id="path134479"
				/><path
					style="opacity:1;fill:#bcab4a;fill-opacity:1;fill-rule:evenodd;stroke-width:3;stroke-linecap:round;stroke-linejoin:round;stroke-miterlimit:3;stroke-opacity:0.498674;paint-order:stroke fill markers"
					d="M 62.564121,115.09375 H 61.241204 V 97.895832 h -7.9375 v 3.968748 h 3.96875 v 2.64584 h -3.96875 v 5.29166 h 3.96875 v 2.64584 h -3.96875 v 3.96875 h 3.96875 v 2.64583 H 50.657871 V 92.604166 h 9.260417 l 2.645833,2.645833 z"
					id="path134481"
				/><rect
					style="opacity:1;fill:#61625a;fill-opacity:1;fill-rule:evenodd;stroke-width:3;stroke-linecap:round;stroke-linejoin:round;stroke-miterlimit:3;stroke-opacity:0.498674;paint-order:stroke fill markers"
					id="rect134483"
					width="3.7041667"
					height="3.4395833"
					x="-23.670366"
					y="115.35833"
					ry="0"
					transform="scale(-1,1)"
				/><rect
					style="opacity:1;fill:#61625a;fill-opacity:1;fill-rule:evenodd;stroke-width:3;stroke-linecap:round;stroke-linejoin:round;stroke-miterlimit:3;stroke-opacity:0.498674;paint-order:stroke fill markers"
					id="rect134485"
					width="3.96875"
					height="3.7041667"
					x="-19.966196"
					y="109.00833"
					transform="scale(-1,1)"
				/><rect
					style="opacity:1;fill:#73756c;fill-opacity:1;fill-rule:evenodd;stroke-width:3;stroke-linecap:round;stroke-linejoin:round;stroke-miterlimit:3;stroke-opacity:0.498674;paint-order:stroke fill markers"
					id="rect134487"
					width="3.175"
					height="3.175"
					x="-39.809956"
					y="89.164581"
					transform="scale(-1,1)"
				/><rect
					style="opacity:1;fill:#75776e;fill-opacity:1;fill-rule:evenodd;stroke-width:3;stroke-linecap:round;stroke-linejoin:round;stroke-miterlimit:3;stroke-opacity:0.498674;paint-order:stroke fill markers"
					id="rect134489"
					width="3.96875"
					height="3.7041667"
					x="-23.670366"
					y="93.927086"
					transform="scale(-1,1)"
				/><rect
					style="opacity:1;fill:#75776e;fill-opacity:1;fill-rule:evenodd;stroke-width:3;stroke-linecap:round;stroke-linejoin:round;stroke-miterlimit:3;stroke-opacity:0.498674;paint-order:stroke fill markers"
					id="rect134491"
					width="2.9104166"
					height="3.175"
					x="-17.055788"
					y="84.137497"
					transform="scale(-1,1)"
				/><path
					style="opacity:1;fill:#75776e;fill-opacity:1;fill-rule:evenodd;stroke-width:3;stroke-linecap:round;stroke-linejoin:round;stroke-miterlimit:3;stroke-opacity:0.498674;paint-order:stroke fill markers"
					d="M 35.71875,43.656249 H 46.302083 V 29.104166 l -1.322917,-0.763786 -6.055452,6.055453 -3.204964,6.614583 z"
					id="path134493"
				/><path
					style="opacity:1;fill:#75776e;fill-opacity:1;fill-rule:evenodd;stroke-width:3;stroke-linecap:round;stroke-linejoin:round;stroke-miterlimit:3;stroke-opacity:0.498674;paint-order:stroke fill markers"
					d="M 94.45628,43.656249 H 83.872947 V 29.104166 l 1.322917,-0.763786 6.055452,6.055453 3.204964,6.614583 z"
					id="path134495"
				/><path
					style="opacity:1;fill:#75776e;fill-opacity:1;fill-rule:evenodd;stroke-width:3.96863;stroke-linecap:round;stroke-linejoin:round;stroke-miterlimit:3;stroke-opacity:0.498674;paint-order:stroke fill markers"
					d="m 46.302083,30.95625 h 1.5875 l -1.5875,-1.852084 z"
					id="path134497"
				/><path
					style="opacity:1;fill:#75776e;fill-opacity:1;fill-rule:evenodd;stroke-width:4.5826;stroke-linecap:round;stroke-linejoin:round;stroke-miterlimit:3;stroke-opacity:0.498674;paint-order:stroke fill markers"
					d="M 83.872939,30.95625 H 81.75625 l 2.116689,-1.852084 z"
					id="path134499"
				/><path
					style="opacity:1;fill:#aeac8b;fill-opacity:1;fill-rule:evenodd;stroke-width:3;stroke-linecap:round;stroke-linejoin:round;stroke-miterlimit:3;stroke-opacity:0.498674;paint-order:stroke fill markers"
					d="M 22.754166,35.983333 16.66875,33.602083 C 23.00569,29.586638 29.711183,25.813251 33.072916,19.84375 V 7.9374999 l 5.291667,5.2916671 h 6.614583 7.9375 C 58.375254,9.7270677 61.323461,6.1816999 64.822916,2.6458333 V 7.6729166 L 54.239583,18.25625 41.010416,21.800994 31.75,31.061411 Z"
					id="path134501"
				/><path
					style="opacity:1;fill:#8b8670;fill-opacity:1;fill-rule:evenodd;stroke-width:3;stroke-linecap:round;stroke-linejoin:round;stroke-miterlimit:3;stroke-opacity:0.498674;paint-order:stroke fill markers"
					d="m 30.1625,38.1 h -3.175 L 22.754167,35.983333 36.5125,22.314891 V 15.08125 c 1.881003,1.808146 3.526812,3.885893 7.143749,3.704166 l -3.968749,6.35 -9.260417,10.583334 z"
					id="path134503"
				/><path
					style="opacity:1;fill:#5d5a4a;fill-opacity:1;fill-rule:evenodd;stroke-width:3;stroke-linecap:round;stroke-linejoin:round;stroke-miterlimit:3;stroke-opacity:0.498674;paint-order:stroke fill markers"
					d="M 32.279166,40.216666 31.75,36.247916 l 12.699999,-12.7 H 64.822916 V 7.6729166 C 58.410968,12.31461 54.084948,19.994817 43.656249,18.785416 L 28.575,33.866666 c -0.0246,2.488386 0.641413,4.772918 3.704166,6.35 z"
					id="path134505"
				/><path
					style="opacity:1;fill:#aeac8b;fill-opacity:1;fill-rule:evenodd;stroke-width:3;stroke-linecap:round;stroke-linejoin:round;stroke-miterlimit:3;stroke-opacity:0.498674;paint-order:stroke fill markers"
					d="m 106.89171,35.983333 6.08543,-2.38125 C 106.64018,29.586638 99.934663,25.813251 96.572941,19.84375 V 7.9374999 l -5.29167,5.2916671 h -6.614583 -7.9375 C 71.2706,9.7270677 68.322393,6.1816999 64.822938,2.6458333 v 5.0270833 l 10.583333,10.5833334 13.229167,3.544744 9.260404,9.260417 z"
					id="path134507"
				/><path
					style="opacity:1;fill:#8b8670;fill-opacity:1;fill-rule:evenodd;stroke-width:3;stroke-linecap:round;stroke-linejoin:round;stroke-miterlimit:3;stroke-opacity:0.498674;paint-order:stroke fill markers"
					d="m 99.483343,38.1 h 3.175007 L 106.89171,35.983333 93.133354,22.314891 V 15.08125 c -1.881003,1.808146 -3.526812,3.885893 -7.143749,3.704166 l 3.968749,6.35 9.260412,10.583334 z"
					id="path134509"
				/><path
					style="opacity:1;fill:#5d5a4a;fill-opacity:1;fill-rule:evenodd;stroke-width:3;stroke-linecap:round;stroke-linejoin:round;stroke-miterlimit:3;stroke-opacity:0.498674;paint-order:stroke fill markers"
					d="m 97.366685,40.216666 0.529157,-3.96875 -12.699987,-12.7 H 64.822938 V 7.6729166 C 71.234886,12.31461 75.560906,19.994817 85.989605,18.785416 l 15.081245,15.08125 c 0.0246,2.488386 -0.64142,4.772918 -3.704165,6.35 z"
					id="path134511"
				/><path
					style="opacity:1;fill:#8b8670;fill-opacity:1;fill-rule:evenodd;stroke-width:3;stroke-linecap:round;stroke-linejoin:round;stroke-miterlimit:3;stroke-opacity:0.498674;paint-order:stroke fill markers"
					d="m 57.679166,20.372916 c 7.027261,4.938421 8.048867,4.417222 13.758333,-0.529166 9.377625,2.66767 8.891665,6.983171 3.704167,11.641666 0.07089,0.264584 0.264583,10.847917 0.264583,10.847917 V 37.041667 H 54.239583 V 31.75 30.427083 C 46.866257,23.66614 52.889279,22.139278 57.679166,20.372916 Z"
					id="path134513"
				/><path
					style="opacity:1;fill:#000000;fill-opacity:1;fill-rule:evenodd;stroke-width:3.37363;stroke-linecap:round;stroke-linejoin:round;stroke-miterlimit:3;stroke-opacity:0.498674;paint-order:stroke fill markers"
					d="m 53.188614,22.299404 c 5.522989,-0.624329 8.019211,2.732541 7.663298,8.109575 -4.356217,0.659441 -7.852914,-1.328871 -7.663298,-8.109575 z"
					id="path134515"
				/><path
					style="opacity:1;fill:#000000;fill-opacity:1;fill-rule:evenodd;stroke-width:3.44868;stroke-linecap:round;stroke-linejoin:round;stroke-miterlimit:3;stroke-opacity:0.498674;paint-order:stroke fill markers"
					d="m 76.99375,22.489583 c -5.907998,-0.6099 -8.578233,2.669389 -8.197508,7.922154 4.659889,0.644201 8.400343,-1.29816 8.197508,-7.922154 z"
					id="path134517"
				/><path
					style="opacity:1;fill:#2d2626;fill-opacity:1;fill-rule:evenodd;stroke-width:3;stroke-linecap:round;stroke-linejoin:round;stroke-miterlimit:3;stroke-opacity:0.498674;paint-order:stroke fill markers"
					d="m 55.562499,34.660417 h 18.520833 v 16.933332 l -9.260416,9.260417 -9.260417,-9.260417 z"
					id="path134519"
				/><path
					style="opacity:1;fill:#ffffe8;fill-opacity:1;fill-rule:evenodd;stroke-width:3;stroke-linecap:round;stroke-linejoin:round;stroke-miterlimit:3;stroke-opacity:0.498674;paint-order:stroke fill markers"
					d="m 62.441666,47.889583 v 2.910416 h -6.614583 v -2.910416 z"
					id="path134521"
				/><path
					style="opacity:1;fill:#ffffe8;fill-opacity:1;fill-rule:evenodd;stroke-width:3;stroke-linecap:round;stroke-linejoin:round;stroke-miterlimit:3;stroke-opacity:0.498674;paint-order:stroke fill markers"
					d="m 62.441666,41.407292 v 2.910416 h -6.614583 v -2.910416 z"
					id="path134523"
				/><path
					style="opacity:1;fill:#ffffe8;fill-opacity:1;fill-rule:evenodd;stroke-width:3;stroke-linecap:round;stroke-linejoin:round;stroke-miterlimit:3;stroke-opacity:0.498674;paint-order:stroke fill markers"
					d="m 62.441666,34.660417 v 2.910416 h -6.614583 v -2.910416 z"
					id="path134525"
				/><path
					style="opacity:1;fill:#ffffe8;fill-opacity:1;fill-rule:evenodd;stroke-width:3;stroke-linecap:round;stroke-linejoin:round;stroke-miterlimit:3;stroke-opacity:0.498674;paint-order:stroke fill markers"
					d="m 73.421875,34.660417 v 2.910416 h -6.614583 v -2.910416 z"
					id="path134527"
				/><path
					style="opacity:1;fill:#ffffe8;fill-opacity:1;fill-rule:evenodd;stroke-width:3;stroke-linecap:round;stroke-linejoin:round;stroke-miterlimit:3;stroke-opacity:0.498674;paint-order:stroke fill markers"
					d="m 73.421875,41.407292 v 2.910416 h -6.614583 v -2.910416 z"
					id="path134529"
				/><path
					style="opacity:1;fill:#ffffe8;fill-opacity:1;fill-rule:evenodd;stroke-width:3;stroke-linecap:round;stroke-linejoin:round;stroke-miterlimit:3;stroke-opacity:0.498674;paint-order:stroke fill markers"
					d="m 73.421875,47.889583 v 2.910416 h -6.614583 v -2.910416 z"
					id="path134531"
				/><path
					style="opacity:1;fill:#d8dbc6;fill-opacity:1;fill-rule:evenodd;stroke-width:3;stroke-linecap:round;stroke-linejoin:round;stroke-miterlimit:3;stroke-opacity:0.498674;paint-order:stroke fill markers"
					d="M 41.010416,41.274999 V 30.95625 h 6.879167 l 5.291666,5.291666 1.058334,6.085417 v 12.7 l -1.374815,0.79375 v 2.116666 l -3.916852,5.027084 h -6.085417 v -5.820834 l 1.5875,-1.5875 h 5.820834 v -14.2875 z"
					id="path134533"
				/><path
					style="opacity:1;fill:#d8dbc6;fill-opacity:1;fill-rule:evenodd;stroke-width:3;stroke-linecap:round;stroke-linejoin:round;stroke-miterlimit:3;stroke-opacity:0.498674;paint-order:stroke fill markers"
					d="M 88.635417,41.274999 V 30.95625 H 81.75625 l -5.291666,5.291666 -1.058334,6.085417 v 12.7 l 1.374815,0.79375 v 2.116666 l 3.916852,5.027084 h 6.085417 v -5.820834 l -1.5875,-1.5875 H 79.375 v -14.2875 z"
					id="path134535"
				/><path
					style="opacity:1;fill:#95978c;fill-opacity:1;fill-rule:evenodd;stroke-width:3;stroke-linecap:round;stroke-linejoin:round;stroke-miterlimit:3;stroke-opacity:0.498674;paint-order:stroke fill markers"
					d="m 54.239583,42.333333 h 1.5875 v 5.027083 c 1.905963,4.169287 4.770939,8.007748 8.995833,11.377083 3.621942,-3.620447 7.162137,-6.346976 8.202084,-10.583332 0.384225,-1.56519 0.264582,-5.820834 0.264582,-5.820834 h 2.116667 V 54.504166 C 70.536312,57.328737 67.895258,64.543262 64.822916,70.908332 61.785804,64.859227 59.789664,57.764504 54.239583,54.239583 Z"
					id="path134537"
				/><path
					style="opacity:1;fill:#ff7e7f;fill-opacity:1;fill-rule:evenodd;stroke-width:3;stroke-linecap:round;stroke-linejoin:round;stroke-miterlimit:3;stroke-opacity:0.498674;paint-order:stroke fill markers"
					d="M 76.729167,42.333333 V 30.691666 h -3.439583 v 11.641667 z"
					id="path134539"
				/><path
					style="opacity:1;fill:#ff7e7f;fill-opacity:1;fill-rule:evenodd;stroke-width:3;stroke-linecap:round;stroke-linejoin:round;stroke-miterlimit:3;stroke-opacity:0.498674;paint-order:stroke fill markers"
					d="M 56.356249,42.333333 V 30.691666 h -3.439583 v 11.641667 z"
					id="path134541"
				/><path
					style="opacity:1;fill:#9a9383;fill-opacity:1;fill-rule:evenodd;stroke-width:3;stroke-linecap:round;stroke-linejoin:round;stroke-miterlimit:3;stroke-opacity:0.498674;paint-order:stroke fill markers"
					d="m 42.862499,62.970833 h 6.085417 l 0.779844,2.910416 h -6.865261 z"
					id="path134543"
				/><path
					style="opacity:1;fill:#9a9383;fill-opacity:1;fill-rule:evenodd;stroke-width:3;stroke-linecap:round;stroke-linejoin:round;stroke-miterlimit:3;stroke-opacity:0.498674;paint-order:stroke fill markers"
					d="m 80.697916,62.970833 h 6.085416 v 2.910416 h -6.879166 z"
					id="path134545"
				/><g id="g134553"
					><path
						style="opacity:1;fill:#b4b7a4;fill-opacity:1;fill-rule:evenodd;stroke-width:3;stroke-linecap:round;stroke-linejoin:round;stroke-miterlimit:3;stroke-opacity:0.498674;paint-order:stroke fill markers"
						d="m 79.904166,65.881249 h 6.879166 l -3.704166,9.525 v 8.73125 c -0.6729,1.491621 -1.315529,3.003417 -3.175,3.704167 h -7.408334 l 0.79375,-9.789584 z"
						id="path134547"
					/><path
						style="opacity:1;fill:#6b6d65;fill-opacity:1;fill-rule:evenodd;stroke-width:3;stroke-linecap:round;stroke-linejoin:round;stroke-miterlimit:3;stroke-opacity:0.498674;paint-order:stroke fill markers"
						d="m 76.729166,72.495832 h 3.175 v 2.910417 h -3.439584 v -2.910417 z"
						id="path134549"
					/><path
						style="opacity:1;fill:#6b6d65;fill-opacity:1;fill-rule:evenodd;stroke-width:3;stroke-linecap:round;stroke-linejoin:round;stroke-miterlimit:3;stroke-opacity:0.498674;paint-order:stroke fill markers"
						d="m 75.406249,84.666666 v -3.175 h -2.38125 v 3.175 z"
						id="path134551"
					/></g
				><path
					style="opacity:0.398034;fill:#0b0b09;fill-opacity:1;fill-rule:evenodd;stroke-width:3;stroke-linecap:round;stroke-linejoin:round;stroke-miterlimit:3;stroke-opacity:0.498674;paint-order:stroke fill markers"
					d="m 72.760416,84.666666 0.264583,-3.175 v 3.175 z"
					id="path134555"
				/><g id="g134563" transform="matrix(-1,0,0,1,129.64564,0)"
					><path
						style="opacity:1;fill:#b4b7a4;fill-opacity:1;fill-rule:evenodd;stroke-width:3;stroke-linecap:round;stroke-linejoin:round;stroke-miterlimit:3;stroke-opacity:0.498674;paint-order:stroke fill markers"
						d="m 79.904166,65.881249 h 6.879166 l -3.704166,9.525 v 8.73125 c -0.6729,1.491621 -1.315529,3.003417 -3.175,3.704167 h -7.408334 l 0.79375,-9.789584 z"
						id="path134557"
					/><path
						style="opacity:1;fill:#6b6d65;fill-opacity:1;fill-rule:evenodd;stroke-width:3;stroke-linecap:round;stroke-linejoin:round;stroke-miterlimit:3;stroke-opacity:0.498674;paint-order:stroke fill markers"
						d="m 76.729166,72.495832 h 3.175 v 2.910417 h -3.439584 v -2.910417 z"
						id="path134559"
					/><path
						style="opacity:1;fill:#6b6d65;fill-opacity:1;fill-rule:evenodd;stroke-width:3;stroke-linecap:round;stroke-linejoin:round;stroke-miterlimit:3;stroke-opacity:0.498674;paint-order:stroke fill markers"
						d="m 75.406249,84.666666 v -3.175 h -2.38125 v 3.175 z"
						id="path134561"
					/></g
				></g
			><g id="g134447"
				><path
					style="opacity:1;fill:#7e8076;fill-opacity:1;fill-rule:evenodd;stroke-width:3;stroke-linecap:round;stroke-linejoin:round;stroke-miterlimit:3;stroke-opacity:0.498674;paint-order:stroke fill markers"
					d="m 83.608332,120.65 h 10.31875 v -13.49375 h -7.408333 l -2.291358,3.96875 z"
					id="path98938"
				/><path
					style="opacity:1;fill:#737269;fill-opacity:1;fill-rule:evenodd;stroke-width:3;stroke-linecap:round;stroke-linejoin:round;stroke-miterlimit:3;stroke-opacity:0.498674;paint-order:stroke fill markers"
					d="m 115.8875,121.17917 h -12.17083 v -12.17084 l 1.22205,-2.11666 h 10.15503 l 0.91654,1.5875 v 12.7 z"
					id="path98942"
				/><path
					style="opacity:1;fill:#85877d;fill-opacity:1;fill-rule:evenodd;stroke-width:3;stroke-linecap:round;stroke-linejoin:round;stroke-miterlimit:3;stroke-opacity:0.498674;paint-order:stroke fill markers"
					d="m 103.71667,100.80625 h 8.73125 c 2.30833,-0.26251 3.12278,-1.661721 3.43958,-3.439585 V 72.231249 h -5.82083 v 1.852083 h -1.05834 v 12.964584 c -3.91421,5.955544 -6.11314,10.818716 -5.29166,13.758334 z"
					id="path98944"
				/><path
					style="opacity:1;fill:#95978c;fill-opacity:1;fill-rule:evenodd;stroke-width:3;stroke-linecap:round;stroke-linejoin:round;stroke-miterlimit:3;stroke-opacity:0.498674;paint-order:stroke fill markers"
					d="m 87.312499,100.80625 v -3.968751 l 0.79375,-0.79375 v -2.645834 l 0.79375,-0.793749 v -2.38125 c 2.81046,-4.155201 4.799245,-8.966493 7.14375,-13.49375 v -13.49375 l -1.322917,-1.322917 h -3.704166 v -3.439583 h 5.291666 l 3.207904,1.852083 v 21.43125 C 97.794593,92.98337 94.955426,101.88753 87.312499,100.80625 Z"
					id="path98946"
				/><path
					style="opacity:1;fill:#95978c;fill-opacity:1;fill-rule:evenodd;stroke-width:3;stroke-linecap:round;stroke-linejoin:round;stroke-miterlimit:3;stroke-opacity:0.498674;paint-order:stroke fill markers"
					d="m 83.343749,50.799999 v -2.38125 h 14.022916 c 14.395645,1.680185 17.678385,9.433685 18.520835,18.520833 -2.0102,-0.09737 -4.25746,-0.679813 -8.20208,-4.735475 C 101.24994,53.99722 92.809507,51.022152 83.343749,50.799999 Z"
					id="path98948"
				/><path
					style="opacity:1;fill:#bcab4a;fill-opacity:1;fill-rule:evenodd;stroke-width:3;stroke-linecap:round;stroke-linejoin:round;stroke-miterlimit:3;stroke-opacity:0.498674;paint-order:stroke fill markers"
					d="m 67.468749,115.09375 h 1.322917 V 97.895832 h 7.9375 v 3.968748 h -3.96875 v 2.64584 h 3.96875 v 5.29166 h -3.96875 v 2.64584 h 3.96875 v 3.96875 h -3.96875 v 2.64583 h 6.614583 V 92.604166 h -9.260417 l -2.645833,2.645833 z"
					id="path98950"
				/><rect
					style="opacity:1;fill:#61625a;fill-opacity:1;fill-rule:evenodd;stroke-width:3;stroke-linecap:round;stroke-linejoin:round;stroke-miterlimit:3;stroke-opacity:0.498674;paint-order:stroke fill markers"
					id="rect99058"
					width="3.7041667"
					height="3.4395833"
					x="106.3625"
					y="115.35833"
					ry="0"
				/><rect
					style="opacity:1;fill:#61625a;fill-opacity:1;fill-rule:evenodd;stroke-width:3;stroke-linecap:round;stroke-linejoin:round;stroke-miterlimit:3;stroke-opacity:0.498674;paint-order:stroke fill markers"
					id="rect99060"
					width="3.96875"
					height="3.7041667"
					x="110.06667"
					y="109.00833"
				/><rect
					style="opacity:1;fill:#73756c;fill-opacity:1;fill-rule:evenodd;stroke-width:3;stroke-linecap:round;stroke-linejoin:round;stroke-miterlimit:3;stroke-opacity:0.498674;paint-order:stroke fill markers"
					id="rect99062"
					width="3.175"
					height="3.175"
					x="90.222916"
					y="89.164581"
				/><rect
					style="opacity:1;fill:#75776e;fill-opacity:1;fill-rule:evenodd;stroke-width:3;stroke-linecap:round;stroke-linejoin:round;stroke-miterlimit:3;stroke-opacity:0.498674;paint-order:stroke fill markers"
					id="rect99064"
					width="3.96875"
					height="3.7041667"
					x="106.3625"
					y="93.927086"
				/><rect
					style="opacity:1;fill:#75776e;fill-opacity:1;fill-rule:evenodd;stroke-width:3;stroke-linecap:round;stroke-linejoin:round;stroke-miterlimit:3;stroke-opacity:0.498674;paint-order:stroke fill markers"
					id="rect99066"
					width="2.9104166"
					height="3.175"
					x="112.97708"
					y="84.137497"
				/><path
					style="opacity:1;fill:#7e8076;fill-opacity:1;fill-rule:evenodd;stroke-width:3;stroke-linecap:round;stroke-linejoin:round;stroke-miterlimit:3;stroke-opacity:0.498674;paint-order:stroke fill markers"
					d="m 46.424538,120.65 h -10.31875 v -13.49375 h 7.408333 l 2.291358,3.96875 z"
					id="path107943"
				/><path
					style="opacity:1;fill:#737269;fill-opacity:1;fill-rule:evenodd;stroke-width:3;stroke-linecap:round;stroke-linejoin:round;stroke-miterlimit:3;stroke-opacity:0.498674;paint-order:stroke fill markers"
					d="M 14.14537,121.17917 H 26.3162 v -12.17084 l -1.22205,-2.11666 H 14.93912 l -0.91654,1.5875 v 12.7 z"
					id="path107945"
				/><path
					style="opacity:1;fill:#85877d;fill-opacity:1;fill-rule:evenodd;stroke-width:3;stroke-linecap:round;stroke-linejoin:round;stroke-miterlimit:3;stroke-opacity:0.498674;paint-order:stroke fill markers"
					d="m 26.3162,100.80625 h -8.73125 c -2.30833,-0.26251 -3.12278,-1.661721 -3.43958,-3.439585 V 72.231249 h 5.82083 v 1.852083 h 1.05834 v 12.964584 c 3.91421,5.955544 6.11314,10.818716 5.29166,13.758334 z"
					id="path107947"
				/><path
					style="opacity:1;fill:#95978c;fill-opacity:1;fill-rule:evenodd;stroke-width:3;stroke-linecap:round;stroke-linejoin:round;stroke-miterlimit:3;stroke-opacity:0.498674;paint-order:stroke fill markers"
					d="m 42.720371,100.80625 v -3.968751 l -0.79375,-0.79375 v -2.645834 l -0.79375,-0.793749 v -2.38125 c -2.81046,-4.155201 -4.799245,-8.966493 -7.14375,-13.49375 v -13.49375 l 1.322917,-1.322917 h 3.704166 v -3.439583 h -5.291666 l -3.207904,1.852083 v 21.43125 c 1.721643,11.227121 4.56081,20.131281 12.203737,19.050001 z"
					id="path107949"
				/><path
					style="opacity:1;fill:#95978c;fill-opacity:1;fill-rule:evenodd;stroke-width:3;stroke-linecap:round;stroke-linejoin:round;stroke-miterlimit:3;stroke-opacity:0.498674;paint-order:stroke fill markers"
					d="m 46.689121,50.799999 v -2.38125 H 32.666205 C 18.27056,50.098934 14.98782,57.852434 14.14537,66.939582 c 2.0102,-0.09737 4.25746,-0.679813 8.20208,-4.735475 6.43548,-8.206887 14.875913,-11.181955 24.341671,-11.404108 z"
					id="path107951"
				/><path
					style="opacity:1;fill:#bcab4a;fill-opacity:1;fill-rule:evenodd;stroke-width:3;stroke-linecap:round;stroke-linejoin:round;stroke-miterlimit:3;stroke-opacity:0.498674;paint-order:stroke fill markers"
					d="M 62.564121,115.09375 H 61.241204 V 97.895832 h -7.9375 v 3.968748 h 3.96875 v 2.64584 h -3.96875 v 5.29166 h 3.96875 v 2.64584 h -3.96875 v 3.96875 h 3.96875 v 2.64583 H 50.657871 V 92.604166 h 9.260417 l 2.645833,2.645833 z"
					id="path107953"
				/><rect
					style="opacity:1;fill:#61625a;fill-opacity:1;fill-rule:evenodd;stroke-width:3;stroke-linecap:round;stroke-linejoin:round;stroke-miterlimit:3;stroke-opacity:0.498674;paint-order:stroke fill markers"
					id="rect107955"
					width="3.7041667"
					height="3.4395833"
					x="-23.670366"
					y="115.35833"
					ry="0"
					transform="scale(-1,1)"
				/><rect
					style="opacity:1;fill:#61625a;fill-opacity:1;fill-rule:evenodd;stroke-width:3;stroke-linecap:round;stroke-linejoin:round;stroke-miterlimit:3;stroke-opacity:0.498674;paint-order:stroke fill markers"
					id="rect107957"
					width="3.96875"
					height="3.7041667"
					x="-19.966196"
					y="109.00833"
					transform="scale(-1,1)"
				/><rect
					style="opacity:1;fill:#73756c;fill-opacity:1;fill-rule:evenodd;stroke-width:3;stroke-linecap:round;stroke-linejoin:round;stroke-miterlimit:3;stroke-opacity:0.498674;paint-order:stroke fill markers"
					id="rect107959"
					width="3.175"
					height="3.175"
					x="-39.809956"
					y="89.164581"
					transform="scale(-1,1)"
				/><rect
					style="opacity:1;fill:#75776e;fill-opacity:1;fill-rule:evenodd;stroke-width:3;stroke-linecap:round;stroke-linejoin:round;stroke-miterlimit:3;stroke-opacity:0.498674;paint-order:stroke fill markers"
					id="rect107961"
					width="3.96875"
					height="3.7041667"
					x="-23.670366"
					y="93.927086"
					transform="scale(-1,1)"
				/><rect
					style="opacity:1;fill:#75776e;fill-opacity:1;fill-rule:evenodd;stroke-width:3;stroke-linecap:round;stroke-linejoin:round;stroke-miterlimit:3;stroke-opacity:0.498674;paint-order:stroke fill markers"
					id="rect107963"
					width="2.9104166"
					height="3.175"
					x="-17.055788"
					y="84.137497"
					transform="scale(-1,1)"
				/><path
					style="opacity:1;fill:#75776e;fill-opacity:1;fill-rule:evenodd;stroke-width:3;stroke-linecap:round;stroke-linejoin:round;stroke-miterlimit:3;stroke-opacity:0.498674;paint-order:stroke fill markers"
					d="M 35.71875,43.656249 H 46.302083 V 29.104166 l -1.322917,-0.763786 -6.055452,6.055453 -3.204964,6.614583 z"
					id="path115611"
				/><path
					style="opacity:1;fill:#75776e;fill-opacity:1;fill-rule:evenodd;stroke-width:3;stroke-linecap:round;stroke-linejoin:round;stroke-miterlimit:3;stroke-opacity:0.498674;paint-order:stroke fill markers"
					d="M 94.45628,43.656249 H 83.872947 V 29.104166 l 1.322917,-0.763786 6.055452,6.055453 3.204964,6.614583 z"
					id="path115617"
				/><path
					style="opacity:1;fill:#75776e;fill-opacity:1;fill-rule:evenodd;stroke-width:3.96863;stroke-linecap:round;stroke-linejoin:round;stroke-miterlimit:3;stroke-opacity:0.498674;paint-order:stroke fill markers"
					d="m 46.302083,30.95625 h 1.5875 l -1.5875,-1.852084 z"
					id="path115621"
				/><path
					style="opacity:1;fill:#75776e;fill-opacity:1;fill-rule:evenodd;stroke-width:4.5826;stroke-linecap:round;stroke-linejoin:round;stroke-miterlimit:3;stroke-opacity:0.498674;paint-order:stroke fill markers"
					d="M 83.872939,30.95625 H 81.75625 l 2.116689,-1.852084 z"
					id="path115623"
				/><path
					style="opacity:1;fill:#aeac8b;fill-opacity:1;fill-rule:evenodd;stroke-width:3;stroke-linecap:round;stroke-linejoin:round;stroke-miterlimit:3;stroke-opacity:0.498674;paint-order:stroke fill markers"
					d="M 22.754166,35.983333 16.66875,33.602083 C 23.00569,29.586638 29.711183,25.813251 33.072916,19.84375 V 7.9374999 l 5.291667,5.2916671 h 6.614583 7.9375 C 58.375254,9.7270677 61.323461,6.1816999 64.822916,2.6458333 V 7.6729166 L 54.239583,18.25625 41.010416,21.800994 31.75,31.061411 Z"
					id="path115685"
				/><path
					style="opacity:1;fill:#8b8670;fill-opacity:1;fill-rule:evenodd;stroke-width:3;stroke-linecap:round;stroke-linejoin:round;stroke-miterlimit:3;stroke-opacity:0.498674;paint-order:stroke fill markers"
					d="m 30.1625,38.1 h -3.175 L 22.754167,35.983333 36.5125,22.314891 V 15.08125 c 1.881003,1.808146 3.526812,3.885893 7.143749,3.704166 l -3.968749,6.35 -9.260417,10.583334 z"
					id="path115627"
				/><path
					style="opacity:1;fill:#5d5a4a;fill-opacity:1;fill-rule:evenodd;stroke-width:3;stroke-linecap:round;stroke-linejoin:round;stroke-miterlimit:3;stroke-opacity:0.498674;paint-order:stroke fill markers"
					d="M 32.279166,40.216666 31.75,36.247916 l 12.699999,-12.7 H 64.822916 V 7.6729166 C 58.410968,12.31461 54.084948,19.994817 43.656249,18.785416 L 28.575,33.866666 c -0.0246,2.488386 0.641413,4.772918 3.704166,6.35 z"
					id="path115625"
				/><path
					style="opacity:1;fill:#aeac8b;fill-opacity:1;fill-rule:evenodd;stroke-width:3;stroke-linecap:round;stroke-linejoin:round;stroke-miterlimit:3;stroke-opacity:0.498674;paint-order:stroke fill markers"
					d="m 106.89171,35.983333 6.08543,-2.38125 C 106.64018,29.586638 99.934663,25.813251 96.572941,19.84375 V 7.9374999 l -5.29167,5.2916671 h -6.614583 -7.9375 C 71.2706,9.7270677 68.322393,6.1816999 64.822938,2.6458333 v 5.0270833 l 10.583333,10.5833334 13.229167,3.544744 9.260404,9.260417 z"
					id="path115745"
				/><path
					style="opacity:1;fill:#8b8670;fill-opacity:1;fill-rule:evenodd;stroke-width:3;stroke-linecap:round;stroke-linejoin:round;stroke-miterlimit:3;stroke-opacity:0.498674;paint-order:stroke fill markers"
					d="m 99.483343,38.1 h 3.175007 L 106.89171,35.983333 93.133354,22.314891 V 15.08125 c -1.881003,1.808146 -3.526812,3.885893 -7.143749,3.704166 l 3.968749,6.35 9.260412,10.583334 z"
					id="path115743"
				/><path
					style="opacity:1;fill:#5d5a4a;fill-opacity:1;fill-rule:evenodd;stroke-width:3;stroke-linecap:round;stroke-linejoin:round;stroke-miterlimit:3;stroke-opacity:0.498674;paint-order:stroke fill markers"
					d="m 97.366685,40.216666 0.529157,-3.96875 -12.699987,-12.7 H 64.822938 V 7.6729166 C 71.234886,12.31461 75.560906,19.994817 85.989605,18.785416 l 15.081245,15.08125 c 0.0246,2.488386 -0.64142,4.772918 -3.704165,6.35 z"
					id="path115741"
				/><path
					style="opacity:1;fill:#8b8670;fill-opacity:1;fill-rule:evenodd;stroke-width:3;stroke-linecap:round;stroke-linejoin:round;stroke-miterlimit:3;stroke-opacity:0.498674;paint-order:stroke fill markers"
					d="m 57.679166,20.372916 c 7.027261,4.938421 8.048867,4.417222 13.758333,-0.529166 9.377625,2.66767 8.891665,6.983171 3.704167,11.641666 0.07089,0.264584 0.264583,10.847917 0.264583,10.847917 l 0,-5.291666 H 54.239583 l 0,-5.291667 V 30.427083 C 46.866257,23.66614 52.889279,22.139278 57.679166,20.372916 Z"
					id="path122088"
				/><path
					style="opacity:1;fill:#000000;fill-opacity:1;fill-rule:evenodd;stroke-width:3.37363;stroke-linecap:round;stroke-linejoin:round;stroke-miterlimit:3;stroke-opacity:0.498674;paint-order:stroke fill markers"
					d="m 53.188614,22.299404 c 5.522989,-0.624329 8.019211,2.732541 7.663298,8.109575 -4.356217,0.659441 -7.852914,-1.328871 -7.663298,-8.109575 z"
					id="path122090"
				/><path
					style="opacity:1;fill:#000000;fill-opacity:1;fill-rule:evenodd;stroke-width:3.44868;stroke-linecap:round;stroke-linejoin:round;stroke-miterlimit:3;stroke-opacity:0.498674;paint-order:stroke fill markers"
					d="m 76.99375,22.489583 c -5.907998,-0.6099 -8.578233,2.669389 -8.197508,7.922154 4.659889,0.644201 8.400343,-1.29816 8.197508,-7.922154 z"
					id="path122200"
				/><path
					style="opacity:1;fill:#2d2626;fill-opacity:1;fill-rule:evenodd;stroke-width:3;stroke-linecap:round;stroke-linejoin:round;stroke-miterlimit:3;stroke-opacity:0.498674;paint-order:stroke fill markers"
					d="m 55.562499,34.660417 h 18.520833 l 0,16.933332 -9.260416,9.260417 -9.260417,-9.260417 z"
					id="path129140"
				/><path
					style="opacity:1;fill:#ffffe8;fill-opacity:1;fill-rule:evenodd;stroke-width:3;stroke-linecap:round;stroke-linejoin:round;stroke-miterlimit:3;stroke-opacity:0.498674;paint-order:stroke fill markers"
					d="m 62.441666,47.889583 v 2.910416 h -6.614583 v -2.910416 z"
					id="path122932"
				/><path
					style="opacity:1;fill:#ffffe8;fill-opacity:1;fill-rule:evenodd;stroke-width:3;stroke-linecap:round;stroke-linejoin:round;stroke-miterlimit:3;stroke-opacity:0.498674;paint-order:stroke fill markers"
					d="m 62.441666,41.407292 v 2.910416 h -6.614583 v -2.910416 z"
					id="path123042"
				/><path
					style="opacity:1;fill:#ffffe8;fill-opacity:1;fill-rule:evenodd;stroke-width:3;stroke-linecap:round;stroke-linejoin:round;stroke-miterlimit:3;stroke-opacity:0.498674;paint-order:stroke fill markers"
					d="m 62.441666,34.660417 v 2.910416 h -6.614583 v -2.910416 z"
					id="path123044"
				/><path
					style="opacity:1;fill:#ffffe8;fill-opacity:1;fill-rule:evenodd;stroke-width:3;stroke-linecap:round;stroke-linejoin:round;stroke-miterlimit:3;stroke-opacity:0.498674;paint-order:stroke fill markers"
					d="m 73.421875,34.660417 v 2.910416 h -6.614583 v -2.910416 z"
					id="path123046"
				/><path
					style="opacity:1;fill:#ffffe8;fill-opacity:1;fill-rule:evenodd;stroke-width:3;stroke-linecap:round;stroke-linejoin:round;stroke-miterlimit:3;stroke-opacity:0.498674;paint-order:stroke fill markers"
					d="m 73.421875,41.407292 v 2.910416 h -6.614583 v -2.910416 z"
					id="path123050"
				/><path
					style="opacity:1;fill:#ffffe8;fill-opacity:1;fill-rule:evenodd;stroke-width:3;stroke-linecap:round;stroke-linejoin:round;stroke-miterlimit:3;stroke-opacity:0.498674;paint-order:stroke fill markers"
					d="m 73.421875,47.889583 v 2.910416 h -6.614583 v -2.910416 z"
					id="path123052"
				/><path
					style="opacity:1;fill:#d8dbc6;fill-opacity:1;fill-rule:evenodd;stroke-width:3;stroke-linecap:round;stroke-linejoin:round;stroke-miterlimit:3;stroke-opacity:0.498674;paint-order:stroke fill markers"
					d="M 41.010416,41.274999 V 30.95625 h 6.879167 l 5.291666,5.291666 1.058334,6.085417 v 12.7 l -1.374815,0.79375 v 2.116666 l -3.916852,5.027084 h -6.085417 v -5.820834 l 1.5875,-1.5875 h 5.820834 v -14.2875 z"
					id="path123840"
				/><path
					style="opacity:1;fill:#d8dbc6;fill-opacity:1;fill-rule:evenodd;stroke-width:3;stroke-linecap:round;stroke-linejoin:round;stroke-miterlimit:3;stroke-opacity:0.498674;paint-order:stroke fill markers"
					d="M 88.635417,41.274999 V 30.95625 H 81.75625 l -5.291666,5.291666 -1.058334,6.085417 v 12.7 l 1.374815,0.79375 v 2.116666 l 3.916852,5.027084 h 6.085417 v -5.820834 l -1.5875,-1.5875 H 79.375 v -14.2875 z"
					id="path123896"
				/><path
					style="opacity:1;fill:#95978c;fill-opacity:1;fill-rule:evenodd;stroke-width:3;stroke-linecap:round;stroke-linejoin:round;stroke-miterlimit:3;stroke-opacity:0.498674;paint-order:stroke fill markers"
					d="m 54.239583,42.333333 h 1.5875 v 5.027083 c 1.905963,4.169287 4.770939,8.007748 8.995833,11.377083 3.621942,-3.620447 7.162137,-6.346976 8.202084,-10.583332 0.384225,-1.56519 0.264582,-5.820834 0.264582,-5.820834 h 2.116667 V 54.504166 C 70.536312,57.328737 67.895258,64.543262 64.822916,70.908332 61.785804,64.859227 59.789664,57.764504 54.239583,54.239583 Z"
					id="path127763"
				/><path
					style="opacity:1;fill:#ff7e7f;fill-opacity:1;fill-rule:evenodd;stroke-width:3;stroke-linecap:round;stroke-linejoin:round;stroke-miterlimit:3;stroke-opacity:0.498674;paint-order:stroke fill markers"
					d="M 76.729167,42.333333 V 30.691666 h -3.439583 v 11.641667 z"
					id="path123112"
				/><path
					style="opacity:1;fill:#ff7e7f;fill-opacity:1;fill-rule:evenodd;stroke-width:3;stroke-linecap:round;stroke-linejoin:round;stroke-miterlimit:3;stroke-opacity:0.498674;paint-order:stroke fill markers"
					d="M 56.356249,42.333333 V 30.691666 h -3.439583 v 11.641667 z"
					id="path123056"
				/><path
					style="opacity:1;fill:#9a9383;fill-opacity:1;fill-rule:evenodd;stroke-width:3;stroke-linecap:round;stroke-linejoin:round;stroke-miterlimit:3;stroke-opacity:0.498674;paint-order:stroke fill markers"
					d="m 42.862499,62.970833 h 6.085417 l 0.779844,2.910416 h -6.865261 z"
					id="path131950"
				/><path
					style="opacity:1;fill:#9a9383;fill-opacity:1;fill-rule:evenodd;stroke-width:3;stroke-linecap:round;stroke-linejoin:round;stroke-miterlimit:3;stroke-opacity:0.498674;paint-order:stroke fill markers"
					d="m 80.697916,62.970833 h 6.085416 v 2.910416 h -6.879166 z"
					id="path133325"
				/><g id="g134379"
					><path
						style="opacity:1;fill:#b4b7a4;fill-opacity:1;fill-rule:evenodd;stroke-width:3;stroke-linecap:round;stroke-linejoin:round;stroke-miterlimit:3;stroke-opacity:0.498674;paint-order:stroke fill markers"
						d="m 79.904166,65.881249 h 6.879166 l -3.704166,9.525 v 8.73125 c -0.6729,1.491621 -1.315529,3.003417 -3.175,3.704167 h -7.408334 l 0.79375,-9.789584 z"
						id="path133329"
					/><path
						style="opacity:1;fill:#6b6d65;fill-opacity:1;fill-rule:evenodd;stroke-width:3;stroke-linecap:round;stroke-linejoin:round;stroke-miterlimit:3;stroke-opacity:0.498674;paint-order:stroke fill markers"
						d="m 76.729166,72.495832 h 3.175 v 2.910417 h -3.439584 v -2.910417 z"
						id="path133387"
					/><path
						style="opacity:1;fill:#6b6d65;fill-opacity:1;fill-rule:evenodd;stroke-width:3;stroke-linecap:round;stroke-linejoin:round;stroke-miterlimit:3;stroke-opacity:0.498674;paint-order:stroke fill markers"
						d="m 75.406249,84.666666 v -3.175 h -2.38125 v 3.175 z"
						id="path133389"
					/></g
				><path
					style="opacity:0.398034;fill:#0b0b09;fill-opacity:1;fill-rule:evenodd;stroke-width:3;stroke-linecap:round;stroke-linejoin:round;stroke-miterlimit:3;stroke-opacity:0.498674;paint-order:stroke fill markers"
					d="m 72.760416,84.666666 0.264583,-3.175 v 3.175 z"
					id="path133391"
				/><g id="g134387" transform="matrix(-1,0,0,1,129.64564,0)"
					><path
						style="opacity:1;fill:#b4b7a4;fill-opacity:1;fill-rule:evenodd;stroke-width:3;stroke-linecap:round;stroke-linejoin:round;stroke-miterlimit:3;stroke-opacity:0.498674;paint-order:stroke fill markers"
						d="m 79.904166,65.881249 h 6.879166 l -3.704166,9.525 v 8.73125 c -0.6729,1.491621 -1.315529,3.003417 -3.175,3.704167 h -7.408334 l 0.79375,-9.789584 z"
						id="path134381"
					/><path
						style="opacity:1;fill:#6b6d65;fill-opacity:1;fill-rule:evenodd;stroke-width:3;stroke-linecap:round;stroke-linejoin:round;stroke-miterlimit:3;stroke-opacity:0.498674;paint-order:stroke fill markers"
						d="m 76.729166,72.495832 h 3.175 v 2.910417 h -3.439584 v -2.910417 z"
						id="path134383"
					/><path
						style="opacity:1;fill:#6b6d65;fill-opacity:1;fill-rule:evenodd;stroke-width:3;stroke-linecap:round;stroke-linejoin:round;stroke-miterlimit:3;stroke-opacity:0.498674;paint-order:stroke fill markers"
						d="m 75.406249,84.666666 v -3.175 h -2.38125 v 3.175 z"
						id="path134385"
					/></g
				></g
			></g
		><metadata id="metadata135672">
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
