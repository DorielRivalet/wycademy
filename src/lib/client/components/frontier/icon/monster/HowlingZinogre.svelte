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
				id="filter84977"
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
					id="feComposite84963"
				/><feColorMatrix
					in="composite1"
					values="1"
					type="saturate"
					result="colormatrix1"
					id="feColorMatrix84965"
				/><feFlood
					flood-opacity="1"
					flood-color="rgb(0,0,0)"
					result="flood1"
					id="feFlood84967"
				/><feBlend
					in="flood1"
					in2="colormatrix1"
					mode="multiply"
					result="blend1"
					id="feBlend84969"
				/><feBlend
					in2="blend1"
					mode="screen"
					result="blend2"
					id="feBlend84971"
				/><feColorMatrix
					in="blend2"
					values="1"
					type="saturate"
					result="colormatrix2"
					id="feColorMatrix84973"
				/><feComposite
					in="colormatrix2"
					in2="SourceGraphic"
					operator="in"
					k2="1"
					result="composite2"
					id="feComposite84975"
				/></filter
			><filter
				style="color-interpolation-filters:sRGB;"
				id="filter118999"
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
					id="feComposite118985"
				/><feColorMatrix
					in="composite1"
					values="1"
					type="saturate"
					result="colormatrix1"
					id="feColorMatrix118987"
				/><feFlood
					flood-opacity="1"
					flood-color="rgb(0,0,0)"
					result="flood1"
					id="feFlood118989"
				/><feBlend
					in="flood1"
					in2="colormatrix1"
					mode="multiply"
					result="blend1"
					id="feBlend118991"
				/><feBlend
					in2="blend1"
					mode="screen"
					result="blend2"
					id="feBlend118993"
				/><feColorMatrix
					in="blend2"
					values="1"
					type="saturate"
					result="colormatrix2"
					id="feColorMatrix118995"
				/><feComposite
					in="colormatrix2"
					in2="SourceGraphic"
					operator="in"
					k2="1"
					result="composite2"
					id="feComposite118997"
				/></filter
			></defs
		>
		<!-- svelte-ignore a11y_no_static_element_interactions -->
		<!-- svelte-ignore a11y_mouse_events_have_key_events -->
		<g id="layer1"
			><g
				id="g118620"
				style="filter:url(#filter118999)"
				transform="translate(1.0583333,1.5875)"
				><path
					style="opacity:1;fill:#755629;fill-opacity:1;fill-rule:evenodd;stroke-width:3;stroke-linecap:round;stroke-linejoin:round;stroke-miterlimit:3;stroke-opacity:0.498674;paint-order:stroke fill markers"
					d="M 7.4083332,15.08125 H 74.08333 L 62.177083,31.75 31.75,30.427083 Z"
					id="path118508"
				/><path
					style="opacity:1;fill:#a8761e;fill-opacity:1;fill-rule:evenodd;stroke-width:3;stroke-linecap:round;stroke-linejoin:round;stroke-miterlimit:3;stroke-opacity:0.498674;paint-order:stroke fill markers"
					d="m 17.991666,15.08125 c 3.33558,1.684473 6.552581,3.948025 10.423384,5.896482 4.053888,2.040617 7.236292,5.809635 10.743283,9.184768 h 3.704166 C 39.274112,25.453559 35.343101,21.079813 33.072916,15.08125 Z"
					id="path118510"
				/><path
					style="opacity:1;fill:#a8761e;fill-opacity:1;fill-rule:evenodd;stroke-width:3;stroke-linecap:round;stroke-linejoin:round;stroke-miterlimit:3;stroke-opacity:0.498674;paint-order:stroke fill markers"
					d="M 45.508333,30.1625 C 42.600848,24.918978 40.597761,19.994039 38.629166,15.08125 h 6.614583 c 1.554205,2.979929 2.496136,5.874028 3.175,8.73125 0.0988,2.24473 -0.021,4.339756 -0.264583,6.35 z"
					id="path118512"
				/><path
					style="fill:#a8761e;fill-opacity:1;fill-rule:evenodd;stroke-width:3;stroke-linecap:round;stroke-linejoin:round;stroke-miterlimit:3;stroke-opacity:0.498674;paint-order:stroke fill markers"
					d="m 52.652083,70.379166 34.131249,-34.13125 h 15.345838 l 2.64583,2.910417 v 1.852083 h 9.78958 v -8.73125 l -6.35,-6.35 H 89.429166 l -5.55625,4.7625 -2.910416,1.587501 -6.350001,2.910416 -20.372916,7.14375 v 16.139583 l -4.497917,4.497917 -2.645833,1.852083 0.264583,0.529167 z"
					id="path118514"
				/><path
					style="fill:#a8761e;fill-opacity:1;fill-rule:evenodd;stroke-width:3;stroke-linecap:round;stroke-linejoin:round;stroke-miterlimit:3;stroke-opacity:0.498674;paint-order:stroke fill markers"
					d="m 104.775,96.837499 10.05417,10.054171 -12.96459,12.96458 H 15.345833 v -2.91042 l -4.7625,-1.27611 v -2.69264 l 4.7625,-2.74963 v -4.39412 l -4.497916,-1.20521 v -2.23437 l 4.497916,-2.11667 v -4.762498 h -4.497916 v -1.5875 l 3.174999,-1.833086 h 23.547917 l 3.633271,2.097669 v 2.38125 l -3.175,3.175 h -1.781188 v 5.291665 h 60.324999 z"
					id="path118516"
				/><path
					style="fill:#735931;fill-opacity:1;fill-rule:evenodd;stroke-width:3;stroke-linecap:round;stroke-linejoin:round;stroke-miterlimit:3;stroke-opacity:0.498674;paint-order:stroke fill markers"
					d="m 25.4,119.85625 -6.35,-6.35 V 93.927082 h 5.027083 V 112.18333 L 31.75,119.85625 Z"
					id="path118518"
				/><path
					style="fill:#735931;fill-opacity:1;fill-rule:evenodd;stroke-width:3;stroke-linecap:round;stroke-linejoin:round;stroke-miterlimit:3;stroke-opacity:0.498674;paint-order:stroke fill markers"
					d="m 34.925,119.85625 h 6.349999 l -7.672916,-7.67292 V 93.927082 H 28.575 v 19.314588 z"
					id="path118520"
				/><path
					style="fill:#755629;fill-opacity:1;fill-rule:evenodd;stroke-width:3;stroke-linecap:round;stroke-linejoin:round;stroke-miterlimit:3;stroke-opacity:0.498674;paint-order:stroke fill markers"
					d="m 68.791667,54.239583 3.175,-3.175 -10e-7,-13.229167 -3.96875,-0.264583 0.79375,3.439583 z"
					id="path118522"
				/><path
					style="opacity:1;fill:#a8761e;fill-opacity:1;fill-rule:evenodd;stroke-width:3;stroke-linecap:round;stroke-linejoin:round;stroke-miterlimit:3;stroke-opacity:0.498674;paint-order:stroke fill markers"
					d="m 62.970833,24.60625 4.497916,-9.525 h 3.439583 l -2.910416,6.35 z"
					id="path118524"
				/><path
					style="opacity:1;fill:#f9e2af;fill-opacity:1;fill-rule:evenodd;stroke-width:3;stroke-linecap:round;stroke-linejoin:round;stroke-miterlimit:3;stroke-opacity:0.498674;paint-order:stroke fill markers"
					d="m 62.706249,46.831249 11.90625,-11.641666 14.816667,-17.4625 V 3.7041666 h -3.175 L 74.083332,15.08125 48.683333,35.454166 l 8.73125,10.847917 z"
					id="path118526"
				/><path
					style="opacity:1;fill:#ddd1cc;fill-opacity:1;fill-rule:evenodd;stroke-width:3;stroke-linecap:round;stroke-linejoin:round;stroke-miterlimit:3;stroke-opacity:0.498674;paint-order:stroke fill markers"
					d="m 48.154166,30.1625 1.852083,-0.264584 h 12.170834 l -0.79375,4.7625 -12.170834,0.529167 z"
					id="path118528"
				/><path
					style="opacity:1;fill:#a8761e;fill-opacity:1;fill-rule:evenodd;stroke-width:3;stroke-linecap:round;stroke-linejoin:round;stroke-miterlimit:3;stroke-opacity:0.498674;paint-order:stroke fill markers"
					d="m 51.064583,28.575 2.910416,-1.058334 c 5.107314,-7.269418 5.767774,-9.089822 7.672917,-12.435416 H 50.006249 c 0.579413,1.751148 0.984881,3.484728 2.116667,5.291666 -0.425394,2.722676 -0.985653,5.424267 -1.058333,8.202084 z"
					id="path118530"
				/><path
					style="opacity:1;fill:#ede5e3;fill-opacity:1;fill-rule:evenodd;stroke-width:3;stroke-linecap:round;stroke-linejoin:round;stroke-miterlimit:3;stroke-opacity:0.498674;paint-order:stroke fill markers"
					d="M 18.785416,33.072916 29.36875,32.54375 c 1.649813,0.129242 2.066035,-1.071553 2.38125,-2.38125 h 16.404166 c 2.356542,6.150869 7.45375,5.075909 12.964583,2.910416 V 30.1625 h -3.439583 c -2.512628,3.163851 -5.077546,2.549778 -7.672917,-0.264584 l 1.5875,-2.38125 h 7.9375 l 3.96875,-3.439583 h 10.583333 v 1.852083 l -9.524999,8.73125 -15.345834,0.79375 -11.112499,3.96875 -8.202084,2.116667 -4.7625,-2.116667 z"
					id="path118532"
				/><path
					style="fill:#ddd1cc;fill-opacity:1;fill-rule:evenodd;stroke-width:3;stroke-linecap:round;stroke-linejoin:round;stroke-miterlimit:3;stroke-opacity:0.498674;paint-order:stroke fill markers"
					d="m 51.064583,54.504166 3.175,3.96875 5.820833,-6.085417 0.264583,-3.175 2.38125,-2.38125 -6.35,-4.7625 v -1.322916 l -5.291666,8.202083 z"
					id="path118534"
				/><path
					style="opacity:1;fill:#ddd1cc;fill-opacity:1;fill-rule:evenodd;stroke-width:3;stroke-linecap:round;stroke-linejoin:round;stroke-miterlimit:3;stroke-opacity:0.498674;paint-order:stroke fill markers"
					d="m 15.875,33.3375 2.910416,-0.264584 6.35,6.35 -2.116666,-0.79375 2.116666,3.439583 -4.233333,-1.322916 z"
					id="path118536"
				/><path
					style="fill:#a8761e;fill-opacity:1;fill-rule:evenodd;stroke-width:3;stroke-linecap:round;stroke-linejoin:round;stroke-miterlimit:3;stroke-opacity:0.498674;paint-order:stroke fill markers"
					d="m 51.064583,54.504166 v -5.55625 h 5.291666 V 40.745833 L 46.566666,33.3375 H 43.127083 L 38.1,38.364583 h -5.55625 l -5.027084,-0.79375 2.38125,3.439583 -6.879166,-2.38125 2.116666,3.439583 -6.614583,-2.116666 2.38125,3.439583 6.879167,2.38125 3.704166,-5.291667 9.525,1.5875 0.79375,1.852084 z"
					id="path118538"
				/><path
					style="fill:#755629;fill-opacity:1;fill-rule:evenodd;stroke-width:3;stroke-linecap:round;stroke-linejoin:round;stroke-miterlimit:3;stroke-opacity:0.498674;paint-order:stroke fill markers"
					d="m 38.89375,105.03958 6.085416,-8.202081 h 2.910417 l 3.36066,5.820831 v 2.38125 z"
					id="path118540"
				/><path
					style="fill:#ede5e3;fill-opacity:1;fill-rule:evenodd;stroke-width:3;stroke-linecap:round;stroke-linejoin:round;stroke-miterlimit:3;stroke-opacity:0.498674;paint-order:stroke fill markers"
					d="m 103.45208,73.818749 v -31.75 l -2.91041,-2.910416 H 86.783332 L 52.122916,73.818749 v 8.202083 l 19.84375,21.166668 15.610416,1.85208 h 5.820833 L 103.45208,94.985415 Z"
					id="path118542"
				/><path
					style="fill:#a68e53;fill-opacity:1;fill-rule:evenodd;stroke-width:3;stroke-linecap:round;stroke-linejoin:round;stroke-miterlimit:3;stroke-opacity:0.498674;paint-order:stroke fill markers"
					d="M 72.495832,102.65833 59.531249,83.872916 52.122916,78.845832 v -5.027083 h -0.79375 v -2.38125 h -5.820833 l -3.175,3.175 5.820833,5.820833 v 2.910417 l 14.022917,13.49375 5.346504,9.260421 h 4.707662 z"
					id="path118544"
				/><path
					style="fill:#a19e8f;fill-opacity:1;fill-rule:evenodd;stroke-width:3;stroke-linecap:round;stroke-linejoin:round;stroke-miterlimit:3;stroke-opacity:0.498674;paint-order:stroke fill markers"
					d="m 36.247916,105.03958 h 55.827083 v 6.35 l 2.38125,2.11667 -1.322917,2.64583 c -0.597992,-0.70652 -1.57598,-1.52977 -2.645832,-2.38125 -0.94706,-0.60258 -1.039775,-1.37899 -1.322918,-2.11666 v -1.85209 c -0.183241,-0.81995 -0.639073,-1.41076 -1.5875,-1.5875 h -7.672916 v 3.70417 l 2.910416,1.68033 -1.626735,2.81759 -5.252431,-2.91042 c -1.021473,-0.45041 -1.441447,-1.28059 -1.852084,-2.11667 v -1.5875 c -0.593148,-1.62434 -1.680288,-1.53506 -2.749629,-1.5875 h -6.246204 v 3.70417 l 2.116667,1.05833 -1.5875,2.91042 -6.085417,-3.43958 v -2.64584 c -0.282876,-1.26375 -0.965785,-1.33437 -1.5875,-1.5875 h -7.672916 v 3.70417 l 2.645833,1.52757 -1.714929,2.97035 -6.751738,-3.89812 v -2.71647 c -0.02347,-1.86842 -3.141459,-2.812 -8.202083,-3.175 z"
					id="path118546"
				/><path
					style="fill:#755629;fill-opacity:1;fill-rule:evenodd;stroke-width:3;stroke-linecap:round;stroke-linejoin:round;stroke-miterlimit:3;stroke-opacity:0.498674;paint-order:stroke fill markers"
					d="m 55.562499,105.03958 6.614584,-8.466663 h 3.704167 l 2.381249,8.466663 z"
					id="path118548"
				/><path
					style="fill:#755629;fill-opacity:1;fill-rule:evenodd;stroke-width:3;stroke-linecap:round;stroke-linejoin:round;stroke-miterlimit:3;stroke-opacity:0.498674;paint-order:stroke fill markers"
					d="m 70.379166,105.03958 6.085416,-8.202081 h 4.497917 l 3.96875,3.704171 2.645833,4.49791 z"
					id="path118550"
				/><path
					style="fill:#755629;fill-opacity:1;fill-rule:evenodd;stroke-width:3;stroke-linecap:round;stroke-linejoin:round;stroke-miterlimit:3;stroke-opacity:0.498674;paint-order:stroke fill markers"
					d="m 13.49375,86.783332 h 10.847916 l 0.916544,-1.5875 -5.149877,-5.149876 H 16.66875 Z"
					id="path118552"
				/><path
					style="fill:#755629;fill-opacity:1;fill-rule:evenodd;stroke-width:3;stroke-linecap:round;stroke-linejoin:round;stroke-miterlimit:3;stroke-opacity:0.498674;paint-order:stroke fill markers"
					d="m 26.326042,86.783332 h 10.847916 l 0.916544,-1.5875 -5.149877,-5.149876 h -3.439583 z"
					id="path118554"
				/><path
					style="fill:#755629;fill-opacity:1;fill-rule:evenodd;stroke-width:3;stroke-linecap:round;stroke-linejoin:round;stroke-miterlimit:3;stroke-opacity:0.498674;paint-order:stroke fill markers"
					d="m 104.775,96.837499 v -4.7625 l 12.53067,12.530671 -2.4765,4.13808 -9.525,-7.14375 z"
					id="path118556"
				/><path
					style="fill:#f9e2af;fill-opacity:1;fill-rule:evenodd;stroke-width:3;stroke-linecap:round;stroke-linejoin:round;stroke-miterlimit:3;stroke-opacity:0.498674;paint-order:stroke fill markers"
					d="m 101.86458,119.85625 h 16.40417 v -16.13958 l -3.43958,3.175 z"
					id="path118558"
				/><path
					style="fill:#a8761e;fill-opacity:1;fill-rule:evenodd;stroke-width:3;stroke-linecap:round;stroke-linejoin:round;stroke-miterlimit:3;stroke-opacity:0.498674;paint-order:stroke fill markers"
					d="M 123.29583,41.010416 H 104.775 v 51.329166 l 12.39308,12.393088 1.10067,-1.016 5.02708,-7.672921 v -4.7625 l -5.02708,-6.614583 5.02708,-5.027084 v -5.55625 l -3.96875,-7.9375 3.96875,-3.968749 v -3.439584 l -5.02708,-8.73125 5.02708,-5.027083 z"
					id="path118560"
				/><path
					style="fill:#f9e2af;fill-opacity:1;fill-rule:evenodd;stroke-width:3;stroke-linecap:round;stroke-linejoin:round;stroke-miterlimit:3;stroke-opacity:0.498674;paint-order:stroke fill markers"
					d="m 115.09375,92.868749 h 11.37708 l -8.20208,-8.202083 -3.175,3.175 z"
					id="path118562"
				/><path
					style="fill:#f9e2af;fill-opacity:1;fill-rule:evenodd;stroke-width:3;stroke-linecap:round;stroke-linejoin:round;stroke-miterlimit:3;stroke-opacity:0.498674;paint-order:stroke fill markers"
					d="m 115.09375,75.141667 h 12.7 l -8.46667,-8.995834 -4.23333,3.968751 z"
					id="path118564"
				/><path
					style="fill:#f9e2af;fill-opacity:1;fill-rule:evenodd;stroke-width:3;stroke-linecap:round;stroke-linejoin:round;stroke-miterlimit:3;stroke-opacity:0.498674;paint-order:stroke fill markers"
					d="M 115.09375,58.7375 H 127 l -8.73125,-8.73125 -3.175,3.175 z"
					id="path118566"
				/><path
					style="fill:#755629;fill-opacity:1;fill-rule:evenodd;stroke-width:3;stroke-linecap:round;stroke-linejoin:round;stroke-miterlimit:3;stroke-opacity:0.498674;paint-order:stroke fill markers"
					d="m 104.775,82.020832 10.31875,7.408334 v -5.820834 l -10.31875,-9.525 z"
					id="path118568"
				/><path
					style="fill:#755629;fill-opacity:1;fill-rule:evenodd;stroke-width:3;stroke-linecap:round;stroke-linejoin:round;stroke-miterlimit:3;stroke-opacity:0.498674;paint-order:stroke fill markers"
					d="M 115.09375,72.231249 104.775,66.273716 v -7.271633 l 10.31875,8.466666 z"
					id="path118570"
				/><path
					style="fill:#755629;fill-opacity:1;fill-rule:evenodd;stroke-width:3;stroke-linecap:round;stroke-linejoin:round;stroke-miterlimit:3;stroke-opacity:0.498674;paint-order:stroke fill markers"
					d="M 115.09375,55.297916 104.775,48.683333 v -7.672917 l 10.31875,10.31875 z"
					id="path118572"
				/><circle
					style="fill:#94e2d5;fill-opacity:1;fill-rule:evenodd;stroke-width:3.66666;stroke-linecap:round;stroke-linejoin:round;stroke-miterlimit:3;stroke-opacity:0.498674;paint-order:stroke fill markers"
					id="circle118574"
					cx="92.604164"
					cy="95.51458"
					r="2.910413"
				/><circle
					style="fill:#a68e53;fill-opacity:1;fill-rule:evenodd;stroke-width:3;stroke-linecap:round;stroke-linejoin:round;stroke-miterlimit:3;stroke-opacity:0.498674;paint-order:stroke fill markers"
					id="circle118576"
					cx="59.53125"
					cy="74.877083"
					r="3.175"
				/><circle
					style="fill:#a68e53;fill-opacity:1;fill-rule:evenodd;stroke-width:3;stroke-linecap:round;stroke-linejoin:round;stroke-miterlimit:3;stroke-opacity:0.498674;paint-order:stroke fill markers"
					id="circle118578"
					cx="63.764584"
					cy="67.73333"
					r="2.1166666"
				/><circle
					style="fill:#a68e53;fill-opacity:1;fill-rule:evenodd;stroke-width:3;stroke-linecap:round;stroke-linejoin:round;stroke-miterlimit:3;stroke-opacity:0.498674;paint-order:stroke fill markers"
					id="circle118580"
					cx="67.73333"
					cy="62.177082"
					r="1.5875"
				/><circle
					style="fill:#a68e53;fill-opacity:1;fill-rule:evenodd;stroke-width:3;stroke-linecap:round;stroke-linejoin:round;stroke-miterlimit:3;stroke-opacity:0.498674;paint-order:stroke fill markers"
					id="circle118582"
					cx="73.554169"
					cy="57.679165"
					r="2.1166666"
				/><circle
					style="fill:#a68e53;fill-opacity:1;fill-rule:evenodd;stroke-width:3;stroke-linecap:round;stroke-linejoin:round;stroke-miterlimit:3;stroke-opacity:0.498674;paint-order:stroke fill markers"
					id="circle118584"
					cx="79.63958"
					cy="52.122917"
					r="2.3812499"
				/><circle
					style="fill:#a68e53;fill-opacity:1;fill-rule:evenodd;stroke-width:3;stroke-linecap:round;stroke-linejoin:round;stroke-miterlimit:3;stroke-opacity:0.498674;paint-order:stroke fill markers"
					id="circle118586"
					cx="85.460419"
					cy="47.095833"
					r="1.5875"
				/><circle
					style="fill:#a68e53;fill-opacity:1;fill-rule:evenodd;stroke-width:3;stroke-linecap:round;stroke-linejoin:round;stroke-miterlimit:3;stroke-opacity:0.498674;paint-order:stroke fill markers"
					id="circle118588"
					cx="90.487495"
					cy="41.804165"
					r="1.5875"
				/><circle
					style="fill:#a68e53;fill-opacity:1;fill-rule:evenodd;stroke-width:3;stroke-linecap:round;stroke-linejoin:round;stroke-miterlimit:3;stroke-opacity:0.498674;paint-order:stroke fill markers"
					id="circle118590"
					cx="98.424995"
					cy="42.068748"
					r="1.8520833"
				/><path
					style="fill:#a68e53;fill-opacity:1;fill-rule:evenodd;stroke-width:3;stroke-linecap:round;stroke-linejoin:round;stroke-miterlimit:3;stroke-opacity:0.498674;paint-order:stroke fill markers"
					d="M 103.45208,68.791666 99.747915,64.293749 H 74.347916 l -6.085417,6.085417 v 14.552083 l 5.820833,5.820833 h 12.435417 l 2.910417,-2.910416 v -8.995834 l -2.645834,-2.645833 h -6.614583 v 2.645833 h 2.645833 l 2.645834,1.527572 v 6.409928 h -6.879167 l -3.175,-3.175 V 73.024999 l 2.645833,-2.645833 h 16.66875 l 2.645833,2.645833 h 2.38125 l 1.587505,0.916543 h 2.11666 z"
					id="path118592"
				/><path
					style="fill:#a68e53;fill-opacity:1;fill-rule:evenodd;stroke-width:3;stroke-linecap:round;stroke-linejoin:round;stroke-miterlimit:3;stroke-opacity:0.498674;paint-order:stroke fill markers"
					d="m 82.549999,64.293749 6.614583,-8.202083 h 2.910417 v 8.202083 z"
					id="path118594"
				/><path
					style="fill:#a68e53;fill-opacity:1;fill-rule:evenodd;stroke-width:3;stroke-linecap:round;stroke-linejoin:round;stroke-miterlimit:3;stroke-opacity:0.498674;paint-order:stroke fill markers"
					d="m 93.133332,64.293749 6.35,-8.202083 h 3.968748 v 12.7 l -3.704165,-4.497917 z"
					id="path118596"
				/><path
					style="fill:#755629;fill-opacity:1;fill-rule:evenodd;stroke-width:3;stroke-linecap:round;stroke-linejoin:round;stroke-miterlimit:3;stroke-opacity:0.498674;paint-order:stroke fill markers"
					d="m 43.127083,71.172916 1.058333,-8.202083 h 7.14375 l 1.5875,1.852083 h -5.291667 l -1.488791,5.55625 z"
					id="path118598"
				/><path
					style="fill:#94e2d5;fill-opacity:1;fill-rule:evenodd;stroke-width:3;stroke-linecap:round;stroke-linejoin:round;stroke-miterlimit:3;stroke-opacity:0.498674;paint-order:stroke fill markers"
					d="m 38.364583,46.831249 c -0.894627,2.464618 -1.485429,4.981395 -1.058333,7.672917 l -2.910417,3.175 6.614583,6.35 v 5.820833 l -7.9375,7.9375 H 28.575 l -8.995834,-8.995833 v -4.233333 l 2.38125,-2.38125 H 26.9875 l 3.175,3.175 v 1.852083 H 25.4 v 1.852083 l 4.497916,3.175 h 0.79375 l 5.291667,-5.291667 v -2.381249 l -7.9375,-7.9375 z"
					id="path118600"
				/><path
					style="fill:#a8761e;fill-opacity:1;fill-rule:evenodd;stroke-width:3;stroke-linecap:round;stroke-linejoin:round;stroke-miterlimit:3;stroke-opacity:0.498674;paint-order:stroke fill markers"
					d="m 8.4666666,55.562499 20.9020834,-8.202083 -1.5875,-1.5875 -6.879167,-2.38125 z"
					id="path118602"
				/><path
					style="opacity:1;fill:#755629;fill-opacity:1;fill-rule:evenodd;stroke-width:3;stroke-linecap:round;stroke-linejoin:round;stroke-miterlimit:3;stroke-opacity:0.498674;paint-order:stroke fill markers"
					d="m 29.36875,47.360416 2.116666,-2.116667 10.31875,-1.322916 -0.79375,-1.852084 -9.525,-1.5875 -3.704166,5.291667 z"
					id="path118604"
				/><path
					style="opacity:1;fill:#ddd1cc;fill-opacity:1;fill-rule:evenodd;stroke-width:3;stroke-linecap:round;stroke-linejoin:round;stroke-miterlimit:3;stroke-opacity:0.498674;paint-order:stroke fill markers"
					d="m 43.127083,33.3375 h -3.704167 c -2.642889,0.453388 -4.18076,2.025539 -3.704166,5.027083 H 38.1 Z"
					id="path118606"
				/><path
					style="fill:#f9e2af;fill-opacity:1;fill-rule:evenodd;stroke-width:3;stroke-linecap:round;stroke-linejoin:round;stroke-miterlimit:3;stroke-opacity:0.498674;paint-order:stroke fill markers"
					d="M 93.662499,15.345833 105.30417,3.7041666 V 17.727083 h 17.72708 l -10.31875,10.31875 12.96458,12.964583 h -11.1125 v -8.73125 l -6.35,-6.35 H 89.429166 l -5.55625,4.7625 v 1.852084 l -4.497917,-2.116667 z"
					id="path118608"
				/><path
					style="opacity:1;fill:#755629;fill-opacity:1;fill-rule:evenodd;stroke-width:3;stroke-linecap:round;stroke-linejoin:round;stroke-miterlimit:3;stroke-opacity:0.498674;paint-order:stroke fill markers"
					d="m 83.872917,39.158333 -2.645834,2.645834 -10e-7,-8.995834 v -2.116667 h 2.645834 z"
					id="path118610"
				/><path
					style="fill:#94e2d5;fill-opacity:1;fill-rule:evenodd;stroke-width:3;stroke-linecap:round;stroke-linejoin:round;stroke-miterlimit:3;stroke-opacity:0.498674;paint-order:stroke fill markers"
					d="m 74.612499,35.189583 16.66875,-19.84375 h 7.14375 l 11.906251,-11.9062497 4.7625,0.5291667 -31.220833,26.722917 -10e-7,1.852083 z"
					id="path118612"
				/><path
					style="fill:#755629;fill-opacity:1;fill-rule:evenodd;stroke-width:3;stroke-linecap:round;stroke-linejoin:round;stroke-miterlimit:3;stroke-opacity:0.498674;paint-order:stroke fill markers"
					d="m 59.266666,63.764583 0.79375,-11.377084 0.264583,-3.175 2.38125,-2.38125 v 13.49375 z"
					id="path118614"
				/><path
					style="fill:#755629;fill-opacity:1;fill-rule:evenodd;stroke-width:3;stroke-linecap:round;stroke-linejoin:round;stroke-miterlimit:3;stroke-opacity:0.498674;paint-order:stroke fill markers"
					d="m 91.545832,36.247916 v -10.31875 h 3.704167 v 10.31875 z"
					id="path118616"
				/><path
					style="fill:#755629;fill-opacity:1;fill-rule:evenodd;stroke-width:3;stroke-linecap:round;stroke-linejoin:round;stroke-miterlimit:3;stroke-opacity:0.498674;paint-order:stroke fill markers"
					d="M 98.689582,36.247916 C 98.954165,35.983333 104.775,25.664583 104.775,25.664583 l 3.43958,0.264583 -6.35,10.31875 z"
					id="path118618"
				/></g
			><g id="g118506"
				><path
					style="opacity:1;fill:#755629;fill-opacity:1;fill-rule:evenodd;stroke-width:3;stroke-linecap:round;stroke-linejoin:round;stroke-miterlimit:3;stroke-opacity:0.498674;paint-order:stroke fill markers"
					d="M 7.4083332,15.08125 H 74.08333 L 62.177083,31.75 31.75,30.427083 Z"
					id="path114159"
				/><path
					style="opacity:1;fill:#a8761e;fill-opacity:1;fill-rule:evenodd;stroke-width:3;stroke-linecap:round;stroke-linejoin:round;stroke-miterlimit:3;stroke-opacity:0.498674;paint-order:stroke fill markers"
					d="m 17.991666,15.08125 c 3.33558,1.684473 6.552581,3.948025 10.423384,5.896482 4.053888,2.040617 7.236292,5.809635 10.743283,9.184768 h 3.704166 C 39.274112,25.453559 35.343101,21.079813 33.072916,15.08125 Z"
					id="path114099"
				/><path
					style="opacity:1;fill:#a8761e;fill-opacity:1;fill-rule:evenodd;stroke-width:3;stroke-linecap:round;stroke-linejoin:round;stroke-miterlimit:3;stroke-opacity:0.498674;paint-order:stroke fill markers"
					d="M 45.508333,30.1625 C 42.600848,24.918978 40.597761,19.994039 38.629166,15.08125 h 6.614583 c 1.554205,2.979929 2.496136,5.874028 3.175,8.73125 0.0988,2.24473 -0.021,4.339756 -0.264583,6.35 z"
					id="path114155"
				/><path
					style="fill:#a8761e;fill-opacity:1;fill-rule:evenodd;stroke-width:3;stroke-linecap:round;stroke-linejoin:round;stroke-miterlimit:3;stroke-opacity:0.498674;paint-order:stroke fill markers"
					d="m 52.652083,70.379166 34.131249,-34.13125 h 15.345838 l 2.64583,2.910417 v 1.852083 h 9.78958 v -8.73125 l -6.35,-6.35 H 89.429166 l -5.55625,4.7625 -2.910416,1.587501 -6.350001,2.910416 -20.372916,7.14375 v 16.139583 l -4.497917,4.497917 -2.645833,1.852083 0.264583,0.529167 z"
					id="path84288"
				/><path
					style="fill:#a8761e;fill-opacity:1;fill-rule:evenodd;stroke-width:3;stroke-linecap:round;stroke-linejoin:round;stroke-miterlimit:3;stroke-opacity:0.498674;paint-order:stroke fill markers"
					d="m 104.775,96.837499 10.05417,10.054171 -12.96459,12.96458 H 15.345833 v -2.91042 l -4.7625,-1.27611 v -2.69264 l 4.7625,-2.74963 v -4.39412 l -4.497916,-1.20521 v -2.23437 l 4.497916,-2.11667 v -4.762498 h -4.497916 v -1.5875 l 3.174999,-1.833086 h 23.547917 l 3.633271,2.097669 v 2.38125 l -3.175,3.175 h -1.781188 v 5.291665 h 60.324999 z"
					id="path67367"
				/><path
					style="fill:#735931;fill-opacity:1;fill-rule:evenodd;stroke-width:3;stroke-linecap:round;stroke-linejoin:round;stroke-miterlimit:3;stroke-opacity:0.498674;paint-order:stroke fill markers"
					d="m 25.4,119.85625 -6.35,-6.35 V 93.927082 h 5.027083 V 112.18333 L 31.75,119.85625 Z"
					id="path65683"
				/><path
					style="fill:#735931;fill-opacity:1;fill-rule:evenodd;stroke-width:3;stroke-linecap:round;stroke-linejoin:round;stroke-miterlimit:3;stroke-opacity:0.498674;paint-order:stroke fill markers"
					d="m 34.925,119.85625 h 6.349999 l -7.672916,-7.67292 V 93.927082 H 28.575 v 19.314588 z"
					id="path65685"
				/><path
					style="fill:#755629;fill-opacity:1;fill-rule:evenodd;stroke-width:3;stroke-linecap:round;stroke-linejoin:round;stroke-miterlimit:3;stroke-opacity:0.498674;paint-order:stroke fill markers"
					d="m 68.791667,54.239583 3.175,-3.175 -10e-7,-13.229167 -3.96875,-0.264583 0.79375,3.439583 z"
					id="path84280"
				/><path
					style="opacity:1;fill:#a8761e;fill-opacity:1;fill-rule:evenodd;stroke-width:3;stroke-linecap:round;stroke-linejoin:round;stroke-miterlimit:3;stroke-opacity:0.498674;paint-order:stroke fill markers"
					d="m 62.970833,24.60625 4.497916,-9.525 h 3.439583 l -2.910416,6.35 z"
					id="path117121"
				/><path
					style="fill:#f9e2af;fill-opacity:1;fill-rule:evenodd;stroke-width:3;stroke-linecap:round;stroke-linejoin:round;stroke-miterlimit:3;stroke-opacity:0.498674;paint-order:stroke fill markers;opacity:1"
					d="m 62.706249,46.831249 11.90625,-11.641666 14.816667,-17.4625 V 3.7041666 h -3.175 L 74.083332,15.08125 48.683333,35.454166 l 8.73125,10.847917 z"
					id="path83410"
				/><path
					style="fill:#ddd1cc;fill-opacity:1;fill-rule:evenodd;stroke-width:3;stroke-linecap:round;stroke-linejoin:round;stroke-miterlimit:3;stroke-opacity:0.498674;paint-order:stroke fill markers;opacity:1"
					d="m 48.154166,30.1625 1.852083,-0.264584 h 12.170834 l -0.79375,4.7625 -12.170834,0.529167 z"
					id="path81808"
				/><path
					style="opacity:1;fill:#a8761e;fill-opacity:1;fill-rule:evenodd;stroke-width:3;stroke-linecap:round;stroke-linejoin:round;stroke-miterlimit:3;stroke-opacity:0.498674;paint-order:stroke fill markers"
					d="m 51.064583,28.575 2.910416,-1.058334 c 5.107314,-7.269418 5.767774,-9.089822 7.672917,-12.435416 H 50.006249 c 0.579413,1.751148 0.984881,3.484728 2.116667,5.291666 -0.425394,2.722676 -0.985653,5.424267 -1.058333,8.202084 z"
					id="path116339"
				/><path
					style="opacity:1;fill:#ddd1cc;fill-opacity:1;fill-rule:evenodd;stroke-width:3;stroke-linecap:round;stroke-linejoin:round;stroke-miterlimit:3;stroke-opacity:0.498674;paint-order:stroke fill markers"
					d="m 15.875,33.3375 3.175,-0.264583 6.085416,6.349999 -2.116666,-0.79375 2.116666,3.439583 -4.233333,-1.322916 z"
					id="path78102"
				/><path
					style="opacity:1;fill:#ede5e3;fill-opacity:1;fill-rule:evenodd;stroke-width:3;stroke-linecap:round;stroke-linejoin:round;stroke-miterlimit:3;stroke-opacity:0.498674;paint-order:stroke fill markers"
					d="M 18.785416,33.072916 29.36875,32.54375 c 1.649813,0.129242 2.066035,-1.071553 2.38125,-2.38125 h 16.404166 c 2.356542,6.150869 7.45375,5.075909 12.964583,2.910416 V 30.1625 h -3.439583 c -2.512628,3.163851 -5.077546,2.549778 -7.672917,-0.264584 l 1.5875,-2.38125 6.879168,1e-6 4.233333,-3.439584 11.377082,0 v 1.852083 l -9.524999,8.73125 -15.345834,0.79375 -11.112499,3.96875 -8.202084,2.116667 -4.7625,-2.116667 z"
					id="path78183"
				/><path
					style="fill:#ddd1cc;fill-opacity:1;fill-rule:evenodd;stroke-width:3;stroke-linecap:round;stroke-linejoin:round;stroke-miterlimit:3;stroke-opacity:0.498674;paint-order:stroke fill markers"
					d="m 51.064583,54.504166 3.175,3.96875 5.820833,-6.085417 0.264583,-3.175 2.38125,-2.38125 -6.35,-4.7625 v -1.322916 l -5.291666,8.202083 z"
					id="path78104"
				/><path
					style="fill:#a8761e;fill-opacity:1;fill-rule:evenodd;stroke-width:3;stroke-linecap:round;stroke-linejoin:round;stroke-miterlimit:3;stroke-opacity:0.498674;paint-order:stroke fill markers"
					d="m 51.064583,54.504166 v -5.55625 h 5.291666 V 40.745833 L 46.566666,33.3375 H 43.127083 L 38.1,38.364583 h -5.55625 l -5.027084,-0.79375 2.38125,3.439583 -6.879166,-2.38125 2.116666,3.439583 -6.614583,-2.116666 2.38125,3.704167 6.879167,2.116666 3.704166,-5.291667 9.525,1.5875 0.79375,1.852084 z"
					id="path66469"
				/><path
					style="fill:#755629;fill-opacity:1;fill-rule:evenodd;stroke-width:3;stroke-linecap:round;stroke-linejoin:round;stroke-miterlimit:3;stroke-opacity:0.498674;paint-order:stroke fill markers"
					d="m 38.89375,105.03958 6.085416,-8.202081 h 2.910417 l 3.36066,5.820831 v 2.38125 z"
					id="path67361"
				/><path
					style="fill:#ede5e3;fill-opacity:1;fill-rule:evenodd;stroke-width:3;stroke-linecap:round;stroke-linejoin:round;stroke-miterlimit:3;stroke-opacity:0.498674;paint-order:stroke fill markers"
					d="m 103.45208,73.818749 v -31.75 l -2.91041,-2.910416 H 86.783332 L 52.122916,73.818749 v 8.202083 l 19.84375,21.166668 15.610416,1.85208 h 5.820833 L 103.45208,94.985415 Z"
					id="path74326"
				/><path
					style="fill:#a68e53;fill-opacity:1;fill-rule:evenodd;stroke-width:3;stroke-linecap:round;stroke-linejoin:round;stroke-miterlimit:3;stroke-opacity:0.498674;paint-order:stroke fill markers"
					d="M 72.495832,102.65833 59.531249,83.872916 52.122916,78.845832 v -5.027083 h -0.79375 v -2.38125 h -5.820833 l -3.175,3.175 5.820833,5.820833 v 2.910417 l 14.022917,13.49375 5.346504,9.260421 h 4.707662 z"
					id="path74322"
				/><path
					style="fill:#a19e8f;fill-opacity:1;fill-rule:evenodd;stroke-width:3;stroke-linecap:round;stroke-linejoin:round;stroke-miterlimit:3;stroke-opacity:0.498674;paint-order:stroke fill markers"
					d="m 36.247916,105.03958 h 55.827083 v 6.35 l 2.38125,2.11667 -1.322917,2.64583 c -0.597992,-0.70652 -1.57598,-1.52977 -2.645832,-2.38125 -0.94706,-0.60258 -1.039775,-1.37899 -1.322918,-2.11666 v -1.85209 c -0.183241,-0.81995 -0.639073,-1.41076 -1.5875,-1.5875 h -7.672916 v 3.70417 l 2.910416,1.68033 -1.626735,2.81759 -5.252431,-2.91042 c -1.021473,-0.45041 -1.441447,-1.28059 -1.852084,-2.11667 v -1.5875 c -0.593148,-1.62434 -1.680288,-1.53506 -2.749629,-1.5875 h -6.246204 v 3.70417 l 2.116667,1.05833 -1.5875,2.91042 -6.085417,-3.43958 v -2.64584 c -0.282876,-1.26375 -0.965785,-1.33437 -1.5875,-1.5875 h -7.672916 v 3.70417 l 2.645833,1.52757 -1.714929,2.97035 -6.751738,-3.89812 v -2.71647 c -0.02347,-1.86842 -3.141459,-2.812 -8.202083,-3.175 z"
					id="path65687"
				/><path
					style="fill:#755629;fill-opacity:1;fill-rule:evenodd;stroke-width:3;stroke-linecap:round;stroke-linejoin:round;stroke-miterlimit:3;stroke-opacity:0.498674;paint-order:stroke fill markers"
					d="m 55.562499,105.03958 6.614584,-8.466663 h 3.704167 l 2.381249,8.466663 z"
					id="path67363"
				/><path
					style="fill:#755629;fill-opacity:1;fill-rule:evenodd;stroke-width:3;stroke-linecap:round;stroke-linejoin:round;stroke-miterlimit:3;stroke-opacity:0.498674;paint-order:stroke fill markers"
					d="m 70.379166,105.03958 6.085416,-8.202081 h 4.497917 l 3.96875,3.704171 2.645833,4.49791 z"
					id="path67365"
				/><path
					style="fill:#755629;fill-opacity:1;fill-rule:evenodd;stroke-width:3;stroke-linecap:round;stroke-linejoin:round;stroke-miterlimit:3;stroke-opacity:0.498674;paint-order:stroke fill markers"
					d="m 13.49375,86.783332 h 10.847916 l 0.916544,-1.5875 -5.149877,-5.149876 H 16.66875 Z"
					id="path68842"
				/><path
					style="fill:#755629;fill-opacity:1;fill-rule:evenodd;stroke-width:3;stroke-linecap:round;stroke-linejoin:round;stroke-miterlimit:3;stroke-opacity:0.498674;paint-order:stroke fill markers"
					d="m 26.326042,86.783332 h 10.847916 l 0.916544,-1.5875 -5.149877,-5.149876 h -3.439583 z"
					id="path68844"
				/><path
					style="fill:#755629;fill-opacity:1;fill-rule:evenodd;stroke-width:3;stroke-linecap:round;stroke-linejoin:round;stroke-miterlimit:3;stroke-opacity:0.498674;paint-order:stroke fill markers"
					d="m 104.775,96.837499 v -4.7625 l 12.53067,12.530671 -2.4765,4.13808 -9.525,-7.14375 z"
					id="path69697"
				/><path
					style="fill:#f9e2af;fill-opacity:1;fill-rule:evenodd;stroke-width:3;stroke-linecap:round;stroke-linejoin:round;stroke-miterlimit:3;stroke-opacity:0.498674;paint-order:stroke fill markers"
					d="m 101.86458,119.85625 h 16.40417 v -16.13958 l -3.43958,3.175 z"
					id="path69572"
				/><path
					style="fill:#a8761e;fill-opacity:1;fill-rule:evenodd;stroke-width:3;stroke-linecap:round;stroke-linejoin:round;stroke-miterlimit:3;stroke-opacity:0.498674;paint-order:stroke fill markers"
					d="M 123.29583,41.010416 H 104.775 v 51.329166 l 12.39308,12.393088 1.10067,-1.016 5.02708,-7.672921 v -4.7625 l -5.02708,-6.614583 5.02708,-5.027084 v -5.55625 l -3.96875,-7.9375 3.96875,-3.968749 v -3.439584 l -5.02708,-8.73125 5.02708,-5.027083 z"
					id="path71023"
				/><path
					style="fill:#f9e2af;fill-opacity:1;fill-rule:evenodd;stroke-width:3;stroke-linecap:round;stroke-linejoin:round;stroke-miterlimit:3;stroke-opacity:0.498674;paint-order:stroke fill markers"
					d="m 115.09375,92.868749 h 11.37708 l -8.20208,-8.202083 -3.175,3.175 z"
					id="path70246"
				/><path
					style="fill:#f9e2af;fill-opacity:1;fill-rule:evenodd;stroke-width:3;stroke-linecap:round;stroke-linejoin:round;stroke-miterlimit:3;stroke-opacity:0.498674;paint-order:stroke fill markers"
					d="m 115.09375,75.141667 h 12.7 l -8.46667,-8.995834 -4.23333,3.968751 z"
					id="path70662"
				/><path
					style="fill:#f9e2af;fill-opacity:1;fill-rule:evenodd;stroke-width:3;stroke-linecap:round;stroke-linejoin:round;stroke-miterlimit:3;stroke-opacity:0.498674;paint-order:stroke fill markers"
					d="M 115.09375,58.7375 H 127 l -8.73125,-8.73125 -3.175,3.175 z"
					id="path70666"
				/><path
					style="fill:#755629;fill-opacity:1;fill-rule:evenodd;stroke-width:3;stroke-linecap:round;stroke-linejoin:round;stroke-miterlimit:3;stroke-opacity:0.498674;paint-order:stroke fill markers"
					d="m 104.775,82.020832 10.31875,7.408334 v -5.820834 l -10.31875,-9.525 z"
					id="path70670"
				/><path
					style="fill:#755629;fill-opacity:1;fill-rule:evenodd;stroke-width:3;stroke-linecap:round;stroke-linejoin:round;stroke-miterlimit:3;stroke-opacity:0.498674;paint-order:stroke fill markers"
					d="M 115.09375,72.231249 104.775,66.273716 v -7.271633 l 10.31875,8.466666 z"
					id="path70674"
				/><path
					style="fill:#755629;fill-opacity:1;fill-rule:evenodd;stroke-width:3;stroke-linecap:round;stroke-linejoin:round;stroke-miterlimit:3;stroke-opacity:0.498674;paint-order:stroke fill markers"
					d="M 115.09375,55.297916 104.775,48.683333 v -7.672917 l 10.31875,10.31875 z"
					id="path70676"
				/><circle
					style="fill:#94e2d5;fill-opacity:1;fill-rule:evenodd;stroke-width:3.66666;stroke-linecap:round;stroke-linejoin:round;stroke-miterlimit:3;stroke-opacity:0.498674;paint-order:stroke fill markers"
					id="path71568"
					cx="92.604164"
					cy="95.51458"
					r="2.910413"
				/><circle
					style="fill:#a68e53;fill-opacity:1;fill-rule:evenodd;stroke-width:3;stroke-linecap:round;stroke-linejoin:round;stroke-miterlimit:3;stroke-opacity:0.498674;paint-order:stroke fill markers"
					id="path71570"
					cx="59.53125"
					cy="74.877083"
					r="3.175"
				/><circle
					style="fill:#a68e53;fill-opacity:1;fill-rule:evenodd;stroke-width:3;stroke-linecap:round;stroke-linejoin:round;stroke-miterlimit:3;stroke-opacity:0.498674;paint-order:stroke fill markers"
					id="path71572"
					cx="63.764584"
					cy="67.73333"
					r="2.1166666"
				/><circle
					style="fill:#a68e53;fill-opacity:1;fill-rule:evenodd;stroke-width:3;stroke-linecap:round;stroke-linejoin:round;stroke-miterlimit:3;stroke-opacity:0.498674;paint-order:stroke fill markers"
					id="path71574"
					cx="67.73333"
					cy="62.177082"
					r="1.5875"
				/><circle
					style="fill:#a68e53;fill-opacity:1;fill-rule:evenodd;stroke-width:3;stroke-linecap:round;stroke-linejoin:round;stroke-miterlimit:3;stroke-opacity:0.498674;paint-order:stroke fill markers"
					id="path71576"
					cx="73.554169"
					cy="57.679165"
					r="2.1166666"
				/><circle
					style="fill:#a68e53;fill-opacity:1;fill-rule:evenodd;stroke-width:3;stroke-linecap:round;stroke-linejoin:round;stroke-miterlimit:3;stroke-opacity:0.498674;paint-order:stroke fill markers"
					id="path71578"
					cx="79.63958"
					cy="52.122917"
					r="2.3812499"
				/><circle
					style="fill:#a68e53;fill-opacity:1;fill-rule:evenodd;stroke-width:3;stroke-linecap:round;stroke-linejoin:round;stroke-miterlimit:3;stroke-opacity:0.498674;paint-order:stroke fill markers"
					id="path71580"
					cx="85.460419"
					cy="47.095833"
					r="1.5875"
				/><circle
					style="fill:#a68e53;fill-opacity:1;fill-rule:evenodd;stroke-width:3;stroke-linecap:round;stroke-linejoin:round;stroke-miterlimit:3;stroke-opacity:0.498674;paint-order:stroke fill markers"
					id="path71582"
					cx="90.487495"
					cy="41.804165"
					r="1.5875"
				/><circle
					style="fill:#a68e53;fill-opacity:1;fill-rule:evenodd;stroke-width:3;stroke-linecap:round;stroke-linejoin:round;stroke-miterlimit:3;stroke-opacity:0.498674;paint-order:stroke fill markers"
					id="path71584"
					cx="98.424995"
					cy="42.068748"
					r="1.8520833"
				/><path
					style="fill:#a68e53;fill-opacity:1;fill-rule:evenodd;stroke-width:3;stroke-linecap:round;stroke-linejoin:round;stroke-miterlimit:3;stroke-opacity:0.498674;paint-order:stroke fill markers"
					d="M 103.45208,68.791666 99.747915,64.293749 H 74.347916 l -6.085417,6.085417 v 14.552083 l 5.820833,5.820833 h 12.435417 l 2.910417,-2.910416 v -8.995834 l -2.645834,-2.645833 h -6.614583 v 2.645833 h 2.645833 l 2.645834,1.527572 v 6.409928 h -6.879167 l -3.175,-3.175 V 73.024999 l 2.645833,-2.645833 h 16.66875 l 2.645833,2.645833 h 2.38125 l 1.587505,0.916543 h 2.11666 z"
					id="path71586"
				/><path
					style="fill:#a68e53;fill-opacity:1;fill-rule:evenodd;stroke-width:3;stroke-linecap:round;stroke-linejoin:round;stroke-miterlimit:3;stroke-opacity:0.498674;paint-order:stroke fill markers"
					d="m 82.549999,64.293749 6.614583,-8.202083 h 2.910417 l 10e-7,8.731251 z"
					id="path74111"
				/><path
					style="fill:#a68e53;fill-opacity:1;fill-rule:evenodd;stroke-width:3;stroke-linecap:round;stroke-linejoin:round;stroke-miterlimit:3;stroke-opacity:0.498674;paint-order:stroke fill markers"
					d="m 93.133332,64.293749 6.35,-8.202083 h 3.968748 v 12.7 l -4.23333,-3.439583 z"
					id="path74320"
				/><path
					style="fill:#755629;fill-opacity:1;fill-rule:evenodd;stroke-width:3;stroke-linecap:round;stroke-linejoin:round;stroke-miterlimit:3;stroke-opacity:0.498674;paint-order:stroke fill markers"
					d="m 43.127083,71.172916 1.058333,-8.202083 h 7.14375 l 1.5875,1.852083 h -5.291667 l -1.488791,5.55625 z"
					id="path74535"
				/><path
					style="fill:#94e2d5;fill-opacity:1;fill-rule:evenodd;stroke-width:3;stroke-linecap:round;stroke-linejoin:round;stroke-miterlimit:3;stroke-opacity:0.498674;paint-order:stroke fill markers"
					d="m 38.364583,46.831249 c -0.894627,2.464618 -1.485429,4.981395 -1.058333,7.672917 l -2.910417,3.175 6.614583,6.35 v 5.820833 l -7.9375,7.9375 H 28.575 l -8.995834,-8.995833 v -4.233333 l 2.38125,-2.38125 H 26.9875 l 3.175,3.175 v 1.852083 H 25.4 v 1.852083 l 4.497916,3.175 h 0.79375 l 5.291667,-5.291667 v -2.381249 l -7.9375,-7.9375 z"
					id="path76963"
				/><path
					style="fill:#a8761e;fill-opacity:1;fill-rule:evenodd;stroke-width:3;stroke-linecap:round;stroke-linejoin:round;stroke-miterlimit:3;stroke-opacity:0.498674;paint-order:stroke fill markers"
					d="m 8.4666666,55.562499 20.9020834,-8.202083 -1.5875,-1.5875 -6.879167,-2.38125 z"
					id="path78098"
				/><path
					style="fill:#755629;fill-opacity:1;fill-rule:evenodd;stroke-width:3;stroke-linecap:round;stroke-linejoin:round;stroke-miterlimit:3;stroke-opacity:0.498674;paint-order:stroke fill markers;opacity:1"
					d="m 29.36875,47.360416 2.116666,-2.116667 10.31875,-1.322916 -0.79375,-1.852084 -9.525,-1.5875 -3.704166,5.291667 z"
					id="path78100"
				/><path
					style="fill:#ddd1cc;fill-opacity:1;fill-rule:evenodd;stroke-width:3;stroke-linecap:round;stroke-linejoin:round;stroke-miterlimit:3;stroke-opacity:0.498674;paint-order:stroke fill markers;opacity:1"
					d="m 43.127083,33.3375 h -3.704167 c -2.642889,0.453388 -4.18076,2.025539 -3.704166,5.027083 H 38.1 Z"
					id="path66633"
				/><path
					style="fill:#755629;fill-opacity:1;fill-rule:evenodd;stroke-width:3;stroke-linecap:round;stroke-linejoin:round;stroke-miterlimit:3;stroke-opacity:0.498674;paint-order:stroke fill markers"
					d="M 98.689582,36.247916 C 98.954165,35.983333 104.775,25.664583 104.775,25.664583 l 3.43958,0.264583 -6.35,10.31875 z"
					id="path84286"
				/><path
					style="fill:#f9e2af;fill-opacity:1;fill-rule:evenodd;stroke-width:3;stroke-linecap:round;stroke-linejoin:round;stroke-miterlimit:3;stroke-opacity:0.498674;paint-order:stroke fill markers"
					d="M 93.662499,15.345833 105.30417,3.7041666 V 17.727083 h 17.72708 l -10.31875,10.31875 12.96458,12.964583 h -11.1125 v -8.73125 l -6.35,-6.35 H 89.429166 l -5.55625,4.7625 v 1.852084 l -4.497917,-2.116667 z"
					id="path83412"
				/><path
					style="fill:#755629;fill-opacity:1;fill-rule:evenodd;stroke-width:3;stroke-linecap:round;stroke-linejoin:round;stroke-miterlimit:3;stroke-opacity:0.498674;paint-order:stroke fill markers;opacity:1"
					d="m 83.872917,39.158333 -2.645834,2.645834 -10e-7,-8.995834 v -2.116667 h 2.645834 z"
					id="path84282"
				/><path
					style="fill:#94e2d5;fill-opacity:1;fill-rule:evenodd;stroke-width:3;stroke-linecap:round;stroke-linejoin:round;stroke-miterlimit:3;stroke-opacity:0.498674;paint-order:stroke fill markers"
					d="m 74.612499,35.189583 16.66875,-19.84375 h 7.14375 l 11.906251,-11.9062497 4.7625,0.5291667 -31.220833,26.722917 -10e-7,1.852083 z"
					id="path82613"
				/><path
					style="fill:#755629;fill-opacity:1;fill-rule:evenodd;stroke-width:3;stroke-linecap:round;stroke-linejoin:round;stroke-miterlimit:3;stroke-opacity:0.498674;paint-order:stroke fill markers"
					d="m 59.266666,63.764583 0.79375,-11.377084 0.264583,-3.175 2.38125,-2.38125 v 13.49375 z"
					id="path84140"
				/><path
					style="fill:#755629;fill-opacity:1;fill-rule:evenodd;stroke-width:3;stroke-linecap:round;stroke-linejoin:round;stroke-miterlimit:3;stroke-opacity:0.498674;paint-order:stroke fill markers"
					d="m 91.545832,36.247916 v -10.31875 h 3.704167 v 10.31875 z"
					id="path84284"
				/></g
			></g
		><metadata id="metadata86431">
			<!-- svelte-ignore attribute_illegal_colon -->
			<!-- 	data-license="https://creativecommons.org/licenses/by-nc-sa/4.0/" data-author="Doriel Rivalet"--></metadata
		></svg
	>
</div>
