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
				id="filter87570"
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
					id="feComposite87556"
				/><feColorMatrix
					in="composite1"
					values="1"
					type="saturate"
					result="colormatrix1"
					id="feColorMatrix87558"
				/><feFlood
					flood-opacity="1"
					flood-color="rgb(0,0,0)"
					result="flood1"
					id="feFlood87560"
				/><feBlend
					in="flood1"
					in2="colormatrix1"
					mode="multiply"
					result="blend1"
					id="feBlend87562"
				/><feBlend
					in2="blend1"
					mode="screen"
					result="blend2"
					id="feBlend87564"
				/><feColorMatrix
					in="blend2"
					values="1"
					type="saturate"
					result="colormatrix2"
					id="feColorMatrix87566"
				/><feComposite
					in="colormatrix2"
					in2="SourceGraphic"
					operator="in"
					k2="1"
					result="composite2"
					id="feComposite87568"
				/></filter
			><filter
				style="color-interpolation-filters:sRGB;"
				id="filter122104"
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
					id="feComposite122090"
				/><feColorMatrix
					in="composite1"
					values="1"
					type="saturate"
					result="colormatrix1"
					id="feColorMatrix122092"
				/><feFlood
					flood-opacity="1"
					flood-color="rgb(0,0,0)"
					result="flood1"
					id="feFlood122094"
				/><feBlend
					in="flood1"
					in2="colormatrix1"
					mode="multiply"
					result="blend1"
					id="feBlend122096"
				/><feBlend
					in2="blend1"
					mode="screen"
					result="blend2"
					id="feBlend122098"
				/><feColorMatrix
					in="blend2"
					values="1"
					type="saturate"
					result="colormatrix2"
					id="feColorMatrix122100"
				/><feComposite
					in="colormatrix2"
					in2="SourceGraphic"
					operator="in"
					k2="1"
					result="composite2"
					id="feComposite122102"
				/></filter
			></defs
		><g id="layer1"
			><g
				id="g121725"
				style="filter:url(#filter122104)"
				transform="translate(1.0583333,1.5875)"
				><path
					style="opacity:1;fill:#9e7e4f;fill-opacity:1;fill-rule:evenodd;stroke-width:1.2;stroke-linecap:round;stroke-linejoin:round;stroke-miterlimit:3;paint-order:stroke fill markers"
					d="m 69.849999,25.135416 h 1.5875 v -8.73125 h -2.38125 z"
					id="path121407"
				/><path
					style="opacity:1;fill:#363e43;fill-opacity:1;fill-rule:evenodd;stroke-width:1.2;stroke-linecap:round;stroke-linejoin:round;stroke-miterlimit:3;paint-order:stroke fill markers"
					d="m 30.1625,21.960416 c -0.11819,-1.98054 0.819881,-2.790776 2.38125,-2.910416 0.07189,-4.194059 0.723647,-7.964488 4.7625,-9.2604168 -0.125761,0.2945828 -0.370818,0.4043588 -0.264584,1.0583338 v 5.556249 h 3.96875 C 40.205261,10.381493 43.69267,9.2070721 47.095833,7.9374999 v 5.0270831 l -3.704167,11.377083 -12.7,-1.058333 z"
					id="path121409"
				/><path
					style="fill:#0f1010;fill-opacity:1;fill-rule:evenodd;stroke-width:1.2;stroke-linecap:round;stroke-linejoin:round;stroke-miterlimit:3;paint-order:stroke fill markers"
					d="m 91.016666,56.620833 v -4.7625 l 2.910416,2.116666 v 2.645834 z"
					id="path121411"
				/><path
					style="fill:#4c6371;fill-opacity:1;fill-rule:evenodd;stroke-width:1.2;stroke-linecap:round;stroke-linejoin:round;stroke-miterlimit:3;paint-order:stroke fill markers"
					d="m 62.177083,94.985415 -7.9375,-7.937499 H 52.387499 25.929166 v 14.287504 h 17.4625 v -6.350005 z"
					id="path121413"
				/><path
					style="fill:#363e43;fill-opacity:1;fill-rule:evenodd;stroke-width:1.2;stroke-linecap:round;stroke-linejoin:round;stroke-miterlimit:3;paint-order:stroke fill markers"
					d="m 78.316666,57.679166 v 1.852083 c 2.398147,0.876356 4.5841,1.938859 4.7625,4.7625 v 1.322917 h 3.175 l -5.027084,8.995833 -2.116666,1.322917 V 65.881249 h -3.96875 l -3.513418,-6.085416 v -2.38125 z"
					id="path121415"
				/><path
					style="fill:#363e43;fill-opacity:1;fill-rule:evenodd;stroke-width:1.2;stroke-linecap:round;stroke-linejoin:round;stroke-miterlimit:3;paint-order:stroke fill markers"
					d="m 70.379166,102.39375 h 2.38125 l 3.175,7.67292 v 6.61458 h -11.90625 v -12.7 h 6.35 z"
					id="path121417"
				/><path
					style="fill:#363e43;fill-opacity:1;fill-rule:evenodd;stroke-width:1.2;stroke-linecap:round;stroke-linejoin:round;stroke-miterlimit:3;paint-order:stroke fill markers"
					d="m 45.772916,83.343749 -1.5875,-1.852083 h -2.116667 c 0.108152,-2.174589 -1.206228,-3.856652 -4.762499,-4.7625 V 74.6125 L 24.870833,74.877082 19.05,80.697916 20.815339,87.28625 44.714583,87.3125 Z"
					id="path121419"
				/><path
					style="fill:#5e8471;fill-opacity:1;fill-rule:evenodd;stroke-width:1.2;stroke-linecap:round;stroke-linejoin:round;stroke-miterlimit:3;paint-order:stroke fill markers"
					d="m 26.458333,63.235416 v -7.9375 H 23.01875 C 22.71154,54.446995 22.113833,53.856905 20.727391,53.974999 H 19.05 c -0.822162,-0.0054 -1.417126,0.374664 -1.833087,1.058334 L 6.0854166,70.643749 v 8.995833 c 0.1792979,0.850701 0.6732196,1.412259 1.5875,1.5875 H 19.84375 L 31.220833,69.849999 Z"
					id="path121421"
				/><path
					style="fill:#5e8471;fill-opacity:1;fill-rule:evenodd;stroke-width:1.2;stroke-linecap:round;stroke-linejoin:round;stroke-miterlimit:3;paint-order:stroke fill markers"
					d="m 47.095833,62.970833 v -15.08125 h -13.49375 l -7.14375,4.124446 v 11.221387 l 3.175,3.175 5.55625,10e-7 0.264584,-3.439584 z"
					id="path121423"
				/><path
					style="fill:#363e43;fill-opacity:1;fill-rule:evenodd;stroke-width:1.2;stroke-linecap:round;stroke-linejoin:round;stroke-miterlimit:3;paint-order:stroke fill markers"
					d="m 34.925,69.056249 v -3.439582 h 9.260417 l 11.906249,12.435415 c 0.07419,3.17163 -0.770215,5.355304 -3.704167,5.291667 H 44.185416 V 74.877082 H 26.193748 l 4.42996,-7.672916 z"
					id="path121425"
				/><path
					style="fill:#344d5c;fill-opacity:1;fill-rule:evenodd;stroke-width:1.2;stroke-linecap:round;stroke-linejoin:round;stroke-miterlimit:3;paint-order:stroke fill markers"
					d="m 28.575,68.791666 -8.73125,9.789583 v 2.645833 H 22.225 L 32.808333,68.791666 Z"
					id="path121427"
				/><path
					style="fill:#5e8471;fill-opacity:1;fill-rule:evenodd;stroke-width:1.2;stroke-linecap:round;stroke-linejoin:round;stroke-miterlimit:3;paint-order:stroke fill markers"
					d="m 84.931249,45.243749 v -5.291666 c 0.513179,-1.090526 1.237318,-2.061728 2.645833,-2.645833 h 3.439584 v 4.497916 l -2.910417,3.439583 z"
					id="path121429"
				/><path
					style="fill:#5e8471;fill-opacity:1;fill-rule:evenodd;stroke-width:1.2;stroke-linecap:round;stroke-linejoin:round;stroke-miterlimit:3;paint-order:stroke fill markers"
					d="M 84.931249,47.889583 V 45.243749 H 72.495832 c -2.204417,0.698401 -2.26783,1.675371 -2.38125,2.645834 v 3.175 h 2.910417 l 1.852083,-1.852084 z"
					id="path121431"
				/><path
					style="fill:#4c6371;fill-opacity:1;fill-rule:evenodd;stroke-width:1.2;stroke-linecap:round;stroke-linejoin:round;stroke-miterlimit:3;paint-order:stroke fill markers"
					d="m 91.016666,37.30625 v 4.497916 c -1.852083,10e-7 -3.266927,0.0722 -2.910417,3.439583 v 5.820834 l 2.910417,0.79375 2.910416,2.116666 v 6.085417 l 3.175,1.833086 v 5.575247 l 2.645833,-1.322917 6.085415,-13.758333 h -5.02708 c -0.50107,-1.770955 -0.67666,-3.623296 -4.762501,-4.497916 v -2.116667 h 9.789581 v -5.027083 l -3.96875,-5.291667 z"
					id="path121433"
				/><path
					style="fill:#0f1010;fill-opacity:1;fill-rule:evenodd;stroke-width:1.2;stroke-linecap:round;stroke-linejoin:round;stroke-miterlimit:3;paint-order:stroke fill markers"
					d="m 91.016666,33.602083 h 9.789584 l 5.02708,3.439583 v 3.704167 l -5.02708,-3.439583 h -9.789584 z"
					id="path121435"
				/><path
					style="opacity:1;fill:#363e43;fill-opacity:1;fill-rule:evenodd;stroke-width:1.2;stroke-linecap:round;stroke-linejoin:round;stroke-miterlimit:3;paint-order:stroke fill markers"
					d="m 61.647916,25.135416 v -8.202083 h -3.439583 v -6.35 l 0.79375,-0.212684 c 0.295513,-1.1623179 0.570874,-2.3276145 2.645833,-3.2268991 h 4.7625 v 2.6458333 h -2.38125 v 6.6145828 h 6.614583 v 8.73125 z"
					id="path121437"
				/><path
					style="opacity:1;fill:#477187;fill-opacity:1;fill-rule:evenodd;stroke-width:1.2;stroke-linecap:round;stroke-linejoin:round;stroke-miterlimit:3;paint-order:stroke fill markers"
					d="M 23.01875,28.045833 V 23.01875 c 0.39552,-1.000656 0.864565,-0.953281 1.322916,-1.058334 H 28.575 c 0.902189,-0.488776 1.440017,-1.152754 1.852083,-1.852083 L 30.1625,21.960416 v 3.96875 l -4.233334,2.910417 z"
					id="path121439"
				/><path
					style="opacity:1;fill:#ad9f74;fill-opacity:1;fill-rule:evenodd;stroke-width:1.2;stroke-linecap:round;stroke-linejoin:round;stroke-miterlimit:3;paint-order:stroke fill markers"
					d="M 7.4083332,29.633333 C 5.352934,27.298519 4.2181973,24.757955 4.2333333,21.960416 6.7069768,21.60863 8.391918,23.21161 10.054167,24.870833 Z"
					id="path121441"
				/><path
					style="opacity:1;fill:#363e43;fill-opacity:1;fill-rule:evenodd;stroke-width:1.2;stroke-linecap:round;stroke-linejoin:round;stroke-miterlimit:3;paint-order:stroke fill markers"
					d="M 7.4083333,29.633333 7.14375,24.870833 h 2.910417 l 1.5875,1.5875 2.38125,1.5875 h 14.816666 v 5.55625 H 11.90625 C 9.9920236,32.501386 8.4165177,31.21928 7.4083333,29.633333 Z"
					id="path121443"
				/><path
					style="opacity:1;fill:#4c6372;fill-opacity:1;fill-rule:evenodd;stroke-width:1.2;stroke-linecap:round;stroke-linejoin:round;stroke-miterlimit:3;paint-order:stroke fill markers"
					d="m 14.022916,25.135416 h 6.879167 v 2.910417 h -6.879167 z"
					id="path121445"
				/><path
					style="opacity:1;fill:#363e43;fill-opacity:1;fill-rule:evenodd;stroke-width:1.2;stroke-linecap:round;stroke-linejoin:round;stroke-miterlimit:3;paint-order:stroke fill markers"
					d="M 20.6375,28.310416 V 23.283333 C 21.004738,22.3356 22.031644,22.308059 23.01875,22.225 v 6.35 H 20.6375 Z"
					id="path121447"
				/><path
					style="opacity:1;fill:#0f1010;fill-opacity:1;fill-rule:evenodd;stroke-width:1.2;stroke-linecap:round;stroke-linejoin:round;stroke-miterlimit:3;paint-order:stroke fill markers"
					d="m 25.929166,25.135416 h 4.497917 v 2.910417 h -4.497917 z"
					id="path121449"
				/><path
					style="opacity:1;fill:#363e43;fill-opacity:1;fill-rule:evenodd;stroke-width:1.2;stroke-linecap:round;stroke-linejoin:round;stroke-miterlimit:3;paint-order:stroke fill markers"
					d="m 52.916666,33.602083 h 5.027083 l 3.704167,-3.704167 v -1.852083 h -6.879169 l -1.587498,0.425368 -1.058333,3.014215 z"
					id="path121451"
				/><path
					style="opacity:1;fill:#363e43;fill-opacity:1;fill-rule:evenodd;stroke-width:1.2;stroke-linecap:round;stroke-linejoin:round;stroke-miterlimit:3;paint-order:stroke fill markers"
					d="M 52.916666,33.602083 V 36.5125 l -3.175,3.439583 C 47.9978,39.785757 47.30252,38.748834 47.095833,37.30625 l 2.910416,-3.704167 z"
					id="path121453"
				/><path
					style="opacity:1;fill:#4c6371;fill-opacity:1;fill-rule:evenodd;stroke-width:1.2;stroke-linecap:round;stroke-linejoin:round;stroke-miterlimit:3;paint-order:stroke fill markers"
					d="m 31.75,33.602083 15.345833,-5.55625 h 7.672916 c -1.186475,0.537574 -1.755536,1.448744 -1.852083,2.645833 h -2.910417 v 2.910417 c -0.228496,1.550867 -0.571052,3.053112 -2.910416,3.704167 H 31.75 Z"
					id="path121455"
				/><circle
					style="opacity:1;fill:#33c747;fill-opacity:1;fill-rule:evenodd;stroke-width:1.37143;stroke-linecap:round;stroke-linejoin:round;stroke-miterlimit:3;paint-order:stroke fill markers"
					id="circle121457"
					cx="30.956249"
					cy="26.19375"
					r="2.116667"
				/><path
					style="opacity:1;fill:#0f1010;fill-opacity:1;fill-rule:evenodd;stroke-width:1.2;stroke-linecap:round;stroke-linejoin:round;stroke-miterlimit:3;paint-order:stroke fill markers"
					d="m 31.75,28.045833 v -2.910417 h 6.085416 v -3.175 h 3.175 v 6.085417 z"
					id="path121459"
				/><path
					style="opacity:1;fill:#4c6371;fill-opacity:1;fill-rule:evenodd;stroke-width:1.2;stroke-linecap:round;stroke-linejoin:round;stroke-miterlimit:3;paint-order:stroke fill markers"
					d="m 28.839583,25.135416 c 1.004462,-1.086276 1.3987,-2.142292 1.322917,-3.175 h 4.497916 c -0.04,-2.663589 1.300989,-3.86327 3.175,-4.497916 v 7.672916 z"
					id="path121461"
				/><path
					style="opacity:1;fill:#363e43;fill-opacity:1;fill-rule:evenodd;stroke-width:1.2;stroke-linecap:round;stroke-linejoin:round;stroke-miterlimit:3;paint-order:stroke fill markers"
					d="M 28.839583,33.602083 H 33.3375 l -4.497917,-2.596872 z"
					id="path121463"
				/><path
					style="opacity:1;fill:#477187;fill-opacity:1;fill-rule:evenodd;stroke-width:1.2;stroke-linecap:round;stroke-linejoin:round;stroke-miterlimit:3;paint-order:stroke fill markers"
					d="m 28.839583,28.045833 v 2.910417 c 1.736908,1.689832 3.233069,2.45055 4.582718,2.645833 h 10.498532 c 1.489836,-0.943445 2.788241,-1.937859 3.175,-3.175 v -2.38125 z"
					id="path121465"
				/><path
					style="opacity:1;fill:#0f1010;fill-opacity:1;fill-rule:evenodd;stroke-width:1.2;stroke-linecap:round;stroke-linejoin:round;stroke-miterlimit:3;paint-order:stroke fill markers"
					d="M 31.75,33.602083 V 37.30625 H 28.839583 V 33.602083 Z"
					id="path121467"
				/><path
					style="opacity:1;fill:#0f1010;fill-opacity:1;fill-rule:evenodd;stroke-width:1.2;stroke-linecap:round;stroke-linejoin:round;stroke-miterlimit:3;paint-order:stroke fill markers"
					d="m 28.839583,33.602083 h -11.90625 v 3.704167 h 11.90625 z"
					id="path121469"
				/><path
					style="opacity:1;fill:#4c6372;fill-opacity:1;fill-rule:evenodd;stroke-width:1.2;stroke-linecap:round;stroke-linejoin:round;stroke-miterlimit:3;paint-order:stroke fill markers"
					d="M 28.839583,33.602083 V 37.30625 H 25.929166 V 33.602083 Z"
					id="path121471"
				/><path
					style="opacity:1;fill:#4c6372;fill-opacity:1;fill-rule:evenodd;stroke-width:1.2;stroke-linecap:round;stroke-linejoin:round;stroke-miterlimit:3;paint-order:stroke fill markers"
					d="M 23.01875,33.602083 V 37.30625 H 20.108333 V 33.602083 Z"
					id="path121473"
				/><path
					style="opacity:1;fill:#4c6372;fill-opacity:1;fill-rule:evenodd;stroke-width:1.2;stroke-linecap:round;stroke-linejoin:round;stroke-miterlimit:3;paint-order:stroke fill markers"
					d="M 17.197917,33.602083 V 37.30625 H 14.2875 v -3.704167 z"
					id="path121475"
				/><path
					style="opacity:1;fill:#363e43;fill-opacity:1;fill-rule:evenodd;stroke-width:1.2;stroke-linecap:round;stroke-linejoin:round;stroke-miterlimit:3;paint-order:stroke fill markers"
					d="m 31.75,37.30625 h 3.175 v 2.38125 h 2.910416 v 6.614583 H 37.30625 l -3.704167,-4.497917 h -4.7625 l -3.175,3.439583 H 7.9374999 C 9.1199143,41.487857 10.612454,38.581803 12.7,37.30625 Z"
					id="path121477"
				/><path
					style="opacity:1;fill:#4c6372;fill-opacity:1;fill-rule:evenodd;stroke-width:1.2;stroke-linecap:round;stroke-linejoin:round;stroke-miterlimit:3;paint-order:stroke fill markers"
					d="m 25.929166,37.30625 1.322917,2.645833 h 0.264583 l 1.322917,-2.645833 z"
					id="path121479"
				/><path
					style="opacity:1;fill:#4c6372;fill-opacity:1;fill-rule:evenodd;stroke-width:1.2;stroke-linecap:round;stroke-linejoin:round;stroke-miterlimit:3;paint-order:stroke fill markers"
					d="m 20.108333,37.30625 1.322917,2.645833 h 0.264583 L 23.01875,37.30625 Z"
					id="path121481"
				/><path
					style="opacity:1;fill:#4c6372;fill-opacity:1;fill-rule:evenodd;stroke-width:1.2;stroke-linecap:round;stroke-linejoin:round;stroke-miterlimit:3;paint-order:stroke fill markers"
					d="m 14.2875,37.30625 1.322917,2.645833 H 15.875 l 1.322917,-2.645833 z"
					id="path121483"
				/><path
					style="opacity:1;fill:#4c6371;fill-opacity:1;fill-rule:evenodd;stroke-width:1.2;stroke-linecap:round;stroke-linejoin:round;stroke-miterlimit:3;paint-order:stroke fill markers"
					d="m 49.741666,39.952083 h 5.55625 L 58.208333,36.5125 h -5.291667 z"
					id="path121485"
				/><path
					style="opacity:1;fill:#0f1010;fill-opacity:1;fill-rule:evenodd;stroke-width:1.2;stroke-linecap:round;stroke-linejoin:round;stroke-miterlimit:3;paint-order:stroke fill markers"
					d="m 34.925,37.30625 h 6.085416 V 39.6875 H 34.925 Z"
					id="path121487"
				/><path
					style="opacity:1;fill:#4c6371;fill-opacity:1;fill-rule:evenodd;stroke-width:1.2;stroke-linecap:round;stroke-linejoin:round;stroke-miterlimit:3;paint-order:stroke fill markers"
					d="m 37.835416,39.6875 h 3.175 l 3.175,2.116666 v 4.497917 h -6.35 z"
					id="path121489"
				/><path
					style="opacity:1;fill:#363e43;fill-opacity:1;fill-rule:evenodd;stroke-width:1.2;stroke-linecap:round;stroke-linejoin:round;stroke-miterlimit:3;paint-order:stroke fill markers"
					d="m 44.185416,41.804166 3.96875,2.116667 -3.175,2.38125 h -0.79375 z"
					id="path121491"
				/><path
					style="opacity:1;fill:#0f1010;fill-opacity:1;fill-rule:evenodd;stroke-width:1.2;stroke-linecap:round;stroke-linejoin:round;stroke-miterlimit:3;paint-order:stroke fill markers"
					d="m 52.916666,30.691666 v 2.910417 h -2.910417 v -2.910417 z"
					id="path121493"
				/><path
					style="opacity:1;fill:#363e43;fill-opacity:1;fill-rule:evenodd;stroke-width:1.2;stroke-linecap:round;stroke-linejoin:round;stroke-miterlimit:3;paint-order:stroke fill markers"
					d="m 41.010416,28.045833 v -2.910417 h 6.085417 v 2.910417 z"
					id="path121495"
				/><path
					style="opacity:1;fill:#0f1010;fill-opacity:1;fill-rule:evenodd;stroke-width:1.2;stroke-linecap:round;stroke-linejoin:round;stroke-miterlimit:3;paint-order:stroke fill markers"
					d="M 47.095833,28.045833 V 16.404166 h 3.175 v 8.73125 h 2.645833 v 2.910417 z"
					id="path121497"
				/><path
					style="opacity:1;fill:#344d5c;fill-opacity:1;fill-rule:evenodd;stroke-width:1.2;stroke-linecap:round;stroke-linejoin:round;stroke-miterlimit:3;paint-order:stroke fill markers"
					d="m 52.916666,28.045833 v -2.910417 h 6.085417 v 2.910417 z"
					id="path121499"
				/><path
					style="opacity:1;fill:#363e43;fill-opacity:1;fill-rule:evenodd;stroke-width:1.2;stroke-linecap:round;stroke-linejoin:round;stroke-miterlimit:3;paint-order:stroke fill markers"
					d="m 50.270833,25.135416 v -3.175 h 8.73125 v 3.175 z"
					id="path121501"
				/><path
					style="opacity:1;fill:#4c6371;fill-opacity:1;fill-rule:evenodd;stroke-width:1.2;stroke-linecap:round;stroke-linejoin:round;stroke-miterlimit:3;paint-order:stroke fill markers"
					d="M 41.010416,25.135416 V 18.25625 c 1.416874,-2.499351 3.210958,-4.545098 6.085417,-5.291667 v 12.170833 z"
					id="path121503"
				/><path
					style="opacity:1;fill:#363e43;fill-opacity:1;fill-rule:evenodd;stroke-width:1.2;stroke-linecap:round;stroke-linejoin:round;stroke-miterlimit:3;paint-order:stroke fill markers"
					d="M 12.170833,28.045833 H 11.90625 V 24.60625 c 0.0025,-0.876651 0.696558,-1.411483 2.116666,-1.5875 0.123398,-4.575903 2.60527,-3.424614 4.497917,-3.704167 -1.191655,0.45126 -1.754402,1.084416 -1.852083,1.852083 v 3.96875 h -2.645834 v 2.910417 z"
					id="path121505"
				/><path
					style="opacity:1;fill:#363e43;fill-opacity:1;fill-rule:evenodd;stroke-width:1.2;stroke-linecap:round;stroke-linejoin:round;stroke-miterlimit:3;paint-order:stroke fill markers"
					d="M 52.916666,16.404166 V 10.31875 c 0.356198,-1.8979571 1.370933,-3.1738623 3.175,-3.7041668 v 9.7895828 z"
					id="path121507"
				/><path
					style="opacity:1;fill:#344d5c;fill-opacity:1;fill-rule:evenodd;stroke-width:1.2;stroke-linecap:round;stroke-linejoin:round;stroke-miterlimit:3;paint-order:stroke fill markers"
					d="m 58.7375,21.960417 2.910416,-1e-6 V 19.05 H 58.7375 Z"
					id="path121509"
				/><path
					style="opacity:1;fill:#0f1010;fill-opacity:1;fill-rule:evenodd;stroke-width:1.2;stroke-linecap:round;stroke-linejoin:round;stroke-miterlimit:3;paint-order:stroke fill markers"
					d="m 59.002083,19.05 h 2.645833 V 16.933333 C 60.556444,16.617986 59.766805,15.61348 59.002083,14.552083 V 10.31875 h -2.910417 v 6.085416 z"
					id="path121511"
				/><path
					style="opacity:1;fill:#4c6371;fill-opacity:1;fill-rule:evenodd;stroke-width:1.2;stroke-linecap:round;stroke-linejoin:round;stroke-miterlimit:3;paint-order:stroke fill markers"
					d="M 50.270833,21.960416 V 12.964583 C 50.43815,11.597731 51.493427,10.8334 52.916666,10.31875 v 6.085416 h 6.085417 v 5.55625 z"
					id="path121513"
				/><path
					style="opacity:1;fill:#5e8471;fill-opacity:1;fill-rule:evenodd;stroke-width:1.2;stroke-linecap:round;stroke-linejoin:round;stroke-miterlimit:3;paint-order:stroke fill markers"
					d="m 61.647916,28.045833 v -2.910417 h 8.466666 v 2.910417 z"
					id="path121515"
				/><path
					style="fill:#363e43;fill-opacity:1;fill-rule:evenodd;stroke-width:1.2;stroke-linecap:round;stroke-linejoin:round;stroke-miterlimit:3;paint-order:stroke fill markers"
					d="m 69.320832,23.283333 h 4.7625 L 76.993749,12.435417 75.935416,10.31875 V 7.1437499 h 2.910416 L 80.168749,4.2333333 H 68.791666 c -1.487954,0.873924 -2.097027,1.8696588 -2.38125,2.9104166 l -0.529167,2.6458333 c 0.526668,2.6888248 2.159006,4.2297748 4.7625,4.7624998 v 1.852083 6.35 z"
					id="path121517"
				/><path
					style="fill:#5e8471;fill-opacity:1;fill-rule:evenodd;stroke-width:1.2;stroke-linecap:round;stroke-linejoin:round;stroke-miterlimit:3;paint-order:stroke fill markers"
					d="m 76.464582,25.135416 v 2.910417 h 8.466667 v -2.910417 z"
					id="path121519"
				/><path
					style="fill:#4c6371;fill-opacity:1;fill-rule:evenodd;stroke-width:1.2;stroke-linecap:round;stroke-linejoin:round;stroke-miterlimit:3;paint-order:stroke fill markers"
					d="M 76.464582,25.135416 75.259368,20.6375 76.199999,12.964583 78.845832,10.31875 h 5.291667 2.38125 v 1.322917 h -1.852083 v 6.614583 h 8.731249 v 6.879166 z"
					id="path121521"
				/><path
					style="fill:#0f1010;fill-opacity:1;fill-rule:evenodd;stroke-width:1.2;stroke-linecap:round;stroke-linejoin:round;stroke-miterlimit:3;paint-order:stroke fill markers"
					d="m 76.464582,25.135416 v -5.55625 c 0.290145,-2.558663 1.264073,-5.355432 2.38125,-8.202083 V 10.31875 h -2.910416 v 2.116667 c -1.642192,3.330496 -3.194216,6.677839 -3.175,10.318749 l 0.529166,2.38125 z"
					id="path121523"
				/><path
					style="opacity:1;fill:#ad9f74;fill-opacity:1;fill-rule:evenodd;stroke-width:1.2;stroke-linecap:round;stroke-linejoin:round;stroke-miterlimit:3;paint-order:stroke fill markers"
					d="m 71.437499,28.045833 2.38125,-3.439583 c 0.305931,-1.317455 -0.463537,-2.127652 -1.852083,-2.645834 -1.331893,0.440908 -2.657509,0.88724 -1.852084,3.175 z"
					id="path121525"
				/><path
					style="fill:#4c6371;fill-opacity:1;fill-rule:evenodd;stroke-width:1.2;stroke-linecap:round;stroke-linejoin:round;stroke-miterlimit:3;paint-order:stroke fill markers"
					d="M 84.402082,10.31875 C 84.756289,9.0251001 85.288386,7.895245 86.518749,7.4083332 H 109.5375 l -2.91042,2.9104168 h -4.7625 v 3.439583 l -2.381248,2.645833 h -8.202083 c -3.148384,-0.900838 -4.551692,-2.569367 -4.7625,-4.762499 z"
					id="path121527"
				/><path
					style="fill:#4c6371;fill-opacity:1;fill-rule:evenodd;stroke-width:1.2;stroke-linecap:round;stroke-linejoin:round;stroke-miterlimit:3;paint-order:stroke fill markers"
					d="m 96.043749,16.404166 h -5.027083 v 4.7625 z"
					id="path121529"
				/><path
					style="fill:#5e8471;fill-opacity:1;fill-rule:evenodd;stroke-width:1.2;stroke-linecap:round;stroke-linejoin:round;stroke-miterlimit:3;paint-order:stroke fill markers"
					d="m 88.106249,25.135416 v 6.879167 c 0.529861,1.094371 1.955403,1.378575 3.175001,1.5875 v -8.466666 z"
					id="path121531"
				/><path
					style="fill:#363e43;fill-opacity:1;fill-rule:evenodd;stroke-width:1.2;stroke-linecap:round;stroke-linejoin:round;stroke-miterlimit:3;paint-order:stroke fill markers"
					d="m 93.927082,33.602083 h 6.879168 l 5.02708,3.439583 h 2.91042 l 2.38125,3.704167 v -9.260417 h -7.40833 c -0.42462,-1.861249 -0.89095,-3.709517 -4.762505,-4.497916 v -2.116667 h 9.260415 v -2.38125 C 107.9592,21.112901 106.71132,19.992551 104.775,19.05 h -9.789585 l -3.704166,3.439583 z"
					id="path121533"
				/><path
					style="fill:#344d5c;fill-opacity:1;fill-rule:evenodd;stroke-width:1.2;stroke-linecap:round;stroke-linejoin:round;stroke-miterlimit:3;paint-order:stroke fill markers"
					d="m 91.016666,33.602083 h 2.910416 v -8.466667 h -2.910416 z"
					id="path121535"
				/><path
					style="fill:#0f1010;fill-opacity:1;fill-rule:evenodd;stroke-width:1.2;stroke-linecap:round;stroke-linejoin:round;stroke-miterlimit:3;paint-order:stroke fill markers"
					d="M 99.483332,16.404166 V 19.05 h -3.439583 c -1.086271,0.35551 -1.765365,1.085396 -2.116667,2.116666 v 3.96875 h -2.910416 v -5.027083 c 1.027302,-1.83694 2.377021,-3.167991 4.233333,-3.704167 z"
					id="path121537"
				/><path
					style="fill:#ad9f74;fill-opacity:1;fill-rule:evenodd;stroke-width:1.2;stroke-linecap:round;stroke-linejoin:round;stroke-miterlimit:3;paint-order:stroke fill markers"
					d="m 88.635416,27.78125 c 1.903362,-1.260863 2.810182,-2.493812 2.910416,-3.704167 -0.07815,-1.126361 -0.779684,-1.766225 -1.852083,-2.116667 -1.57531,0.374183 -2.067732,1.160942 -2.116667,2.116667 0.935116,1.449911 1.47027,2.752025 1.058334,3.704167 z"
					id="path121539"
				/><path
					style="fill:#363e43;fill-opacity:1;fill-rule:evenodd;stroke-width:1.2;stroke-linecap:round;stroke-linejoin:round;stroke-miterlimit:3;paint-order:stroke fill markers"
					d="m 105.56875,31.485416 v -6.614583 h 2.64583 v 1.058333 c 2.02657,0.254456 2.41348,1.482824 2.91042,2.645834 v 2.910416 z"
					id="path121541"
				/><path
					style="fill:#ad9f74;fill-opacity:1;fill-rule:evenodd;stroke-width:1.2;stroke-linecap:round;stroke-linejoin:round;stroke-miterlimit:3;paint-order:stroke fill markers"
					d="m 94.191667,35.71875 c 1.903362,-1.260863 2.810182,-2.493812 2.910416,-3.704167 -0.07815,-1.126361 -0.779684,-1.766225 -1.852083,-2.116667 -1.57531,0.374183 -2.067732,1.160942 -2.116667,2.116667 0.935116,1.449911 1.47027,2.752025 1.058334,3.704167 z"
					id="path121543"
				/><path
					style="fill:#4c6371;fill-opacity:1;fill-rule:evenodd;stroke-width:1.2;stroke-linecap:round;stroke-linejoin:round;stroke-miterlimit:3;paint-order:stroke fill markers"
					d="m 105.83333,45.772916 v 6.614583 h -3.175 v -6.614583 z"
					id="path121545"
				/><path
					style="fill:#344d5c;fill-opacity:1;fill-rule:evenodd;stroke-width:1.2;stroke-linecap:round;stroke-linejoin:round;stroke-miterlimit:3;paint-order:stroke fill markers"
					d="m 73.024999,51.064583 v -3.175 h 12.964583 v 3.175 z"
					id="path121547"
				/><path
					style="fill:#363e43;fill-opacity:1;fill-rule:evenodd;stroke-width:1.2;stroke-linecap:round;stroke-linejoin:round;stroke-miterlimit:3;paint-order:stroke fill markers"
					d="m 73.024999,51.064583 h 17.991667 v 12.435416 l -2.116667,2.116667 h -5.820833 v -1.322917 h 1.852083 v -6.614583 h -6.614583 -5.291667 z"
					id="path121549"
				/><path
					style="fill:#0f1010;fill-opacity:1;fill-rule:evenodd;stroke-width:1.2;stroke-linecap:round;stroke-linejoin:round;stroke-miterlimit:3;paint-order:stroke fill markers"
					d="m 88.106249,51.064583 v -5.820834 h -3.175 v 5.820834 z"
					id="path121551"
				/><path
					style="fill:#ad9f74;fill-opacity:1;fill-rule:evenodd;stroke-width:1.2;stroke-linecap:round;stroke-linejoin:round;stroke-miterlimit:3;paint-order:stroke fill markers"
					d="m 87.312499,50.006249 c 0.384783,-1.209069 1.18638,-1.763869 2.116667,-2.116666 1.647483,0.283662 2.043696,1.244932 2.116666,2.38125 -0.450321,1.269462 -1.082349,2.501134 -1.852083,3.704166 -0.491108,-0.908881 -0.314257,-1.960274 -1.852083,-2.645833 -0.267992,-0.420253 -0.384009,-0.874881 -0.529167,-1.322917 z"
					id="path121553"
				/><path
					style="fill:#0f1010;fill-opacity:1;fill-rule:evenodd;stroke-width:1.2;stroke-linecap:round;stroke-linejoin:round;stroke-miterlimit:3;paint-order:stroke fill markers"
					d="m 73.025,51.064583 v 10.31875 l 3.704166,4.497916 h 2.38125 v 3.175 h -2.910417 v -0.79375 l -6.085417,-6.614583 10e-7,-10.583333 z"
					id="path121555"
				/><path
					style="opacity:1;fill:#0f1010;fill-opacity:1;fill-rule:evenodd;stroke-width:1.2;stroke-linecap:round;stroke-linejoin:round;stroke-miterlimit:3;paint-order:stroke fill markers"
					d="m 70.114583,51.064583 -10e-7,-3.175 h -3.439583 l 10e-7,3.175 z"
					id="path121557"
				/><path
					style="opacity:1;fill:#0f1010;fill-opacity:1;fill-rule:evenodd;stroke-width:1.2;stroke-linecap:round;stroke-linejoin:round;stroke-miterlimit:3;paint-order:stroke fill markers"
					d="m 50.006249,51.064583 v 11.90625 h -2.910416 v -11.90625 z"
					id="path121559"
				/><path
					style="fill:#0f1010;fill-opacity:1;fill-rule:evenodd;stroke-width:1.2;stroke-linecap:round;stroke-linejoin:round;stroke-miterlimit:3;paint-order:stroke fill markers"
					d="m 56.091666,78.052082 h -3.439583 l -8.466667,-8.466666 v -3.704167 h -5.820833 v -2.910416 h 8.73125 v 5.556249 z"
					id="path121561"
				/><path
					style="fill:#0f1010;fill-opacity:1;fill-rule:evenodd;stroke-width:1.2;stroke-linecap:round;stroke-linejoin:round;stroke-miterlimit:3;paint-order:stroke fill markers"
					d="m 26.458333,69.056249 v -5.820833 l 2.645833,2.645833 H 34.925 v 3.175 z"
					id="path121563"
				/><path
					style="fill:#5e8471;fill-opacity:1;fill-rule:evenodd;stroke-width:1.2;stroke-linecap:round;stroke-linejoin:round;stroke-miterlimit:3;paint-order:stroke fill markers"
					d="M 17.727083,83.872916 H 9.7895832 l -3.7041666,3.704166 v 16.404168 l 4.4979164,3.175 h 9.525 l 2.645833,-3.175 V 89.429166 Z"
					id="path121565"
				/><path
					style="fill:#0f1010;fill-opacity:1;fill-rule:evenodd;stroke-width:1.2;stroke-linecap:round;stroke-linejoin:round;stroke-miterlimit:3;paint-order:stroke fill markers"
					d="m 20.6375,83.872916 v -2.645834 h -2.910417 v 2.645834 z"
					id="path121567"
				/><path
					style="fill:#4c6371;fill-opacity:1;fill-rule:evenodd;stroke-width:1.2;stroke-linecap:round;stroke-linejoin:round;stroke-miterlimit:3;paint-order:stroke fill markers"
					d="m 70.114582,54.768749 v 6.879167 l 6.085417,6.614583 v 3.175 c -0.66878,1.429162 -1.438864,2.761891 -3.175,3.175 h -4.7625 l -6.415804,11.1125 -3.207904,1.852083 v -9.525 h -2.547125 l -8.995833,-9.525 v -5.556249 h 8.202083 v 1.852083 c 2.775237,0.526291 4.221147,2.240298 4.7625,4.7625 h 1.852083 v -6.879167 -7.9375 z"
					id="path121569"
				/><path
					style="fill:#0f1010;fill-opacity:1;fill-rule:evenodd;stroke-width:1.2;stroke-linecap:round;stroke-linejoin:round;stroke-miterlimit:3;paint-order:stroke fill markers"
					d="m 25.929166,89.958332 v -3.175 h 16.404167 l 3.439583,-3.439583 h 6.614583 v 3.704167 h -7.408333 l -2.645833,2.910416 z"
					id="path121571"
				/><path
					style="fill:#5e8471;fill-opacity:1;fill-rule:evenodd;stroke-width:1.2;stroke-linecap:round;stroke-linejoin:round;stroke-miterlimit:3;paint-order:stroke fill markers"
					d="m 52.3875,116.68125 -1e-6,-3.70417 h 3.175 l 10e-7,3.70417 z"
					id="path121573"
				/><path
					style="fill:#4c6371;fill-opacity:1;fill-rule:evenodd;stroke-width:1.2;stroke-linecap:round;stroke-linejoin:round;stroke-miterlimit:3;paint-order:stroke fill markers"
					d="m 29.104166,100.80625 h 14.2875 V 101.6 h 1.852083 c 0.540591,-2.833698 2.379652,-4.231138 4.7625,-5.027085 l 1e-6,-1.852082 12.170833,0.264582 L 52.387499,101.6 v 11.37708 H 37.835416 l -8.73125,-8.99583 z"
					id="path121575"
				/><path
					style="fill:#0f1010;fill-opacity:1;fill-rule:evenodd;stroke-width:1.2;stroke-linecap:round;stroke-linejoin:round;stroke-miterlimit:3;paint-order:stroke fill markers"
					d="m 25.929166,103.98125 v -3.175 h 3.175 v 3.175 z"
					id="path121577"
				/><path
					style="fill:#0f1010;fill-opacity:1;fill-rule:evenodd;stroke-width:1.2;stroke-linecap:round;stroke-linejoin:round;stroke-miterlimit:3;paint-order:stroke fill markers"
					d="m 25.929166,103.98125 v 3.175 h -5.820833 v -3.175 z"
					id="path121579"
				/><path
					style="fill:#0f1010;fill-opacity:1;fill-rule:evenodd;stroke-width:1.2;stroke-linecap:round;stroke-linejoin:round;stroke-miterlimit:3;paint-order:stroke fill markers"
					d="m 37.835416,115.8875 v -2.91042 h 3.175 v 2.91042 z"
					id="path121581"
				/><path
					style="fill:#363e43;fill-opacity:1;fill-rule:evenodd;stroke-width:1.2;stroke-linecap:round;stroke-linejoin:round;stroke-miterlimit:3;paint-order:stroke fill markers"
					d="M 55.562499,112.97708 V 101.6 l 6.614584,-6.614585 1.852083,-1.852083 h 11.641666 v 9.524998 l -2.910416,-0.26458 h -2.38125 l 10e-7,-0.26458 c -3.277565,-0.62359 -4.136939,-2.626369 -4.762501,-4.762505 h -1.5875 V 115.8875 h -8.466667 z"
					id="path121583"
				/><path
					style="fill:#0f1010;fill-opacity:1;fill-rule:evenodd;stroke-width:1.2;stroke-linecap:round;stroke-linejoin:round;stroke-miterlimit:3;paint-order:stroke fill markers"
					d="m 64.029166,115.8875 h 3.175 v 3.43958 h -3.175 z"
					id="path121585"
				/><path
					style="fill:#4c6371;fill-opacity:1;fill-rule:evenodd;stroke-width:1.2;stroke-linecap:round;stroke-linejoin:round;stroke-miterlimit:3;paint-order:stroke fill markers"
					d="m 83.872916,97.366665 c 0.55489,2.426513 1.878324,4.228575 4.7625,4.762505 v 1.85208 11.90625 h 7.672916 l 4.277208,-7.40833 -6.658458,-14.022921 -2.645833,-1.322917 h -7.408333 z"
					id="path121587"
				/><path
					style="fill:#5e8471;fill-opacity:1;fill-rule:evenodd;stroke-width:1.2;stroke-linecap:round;stroke-linejoin:round;stroke-miterlimit:3;paint-order:stroke fill markers"
					d="m 67.204166,115.8875 h 20.902083 v 3.175 c -0.378728,1.57565 -0.550624,3.28704 -2.291361,3.96875 H 70.908332 c -1.769906,-0.84506 -3.155186,-1.97016 -3.704166,-3.70417 z"
					id="path121589"
				/><path
					style="fill:#4c6371;fill-opacity:1;fill-rule:evenodd;stroke-width:1.2;stroke-linecap:round;stroke-linejoin:round;stroke-miterlimit:3;paint-order:stroke fill markers"
					d="m 88.635416,115.8875 v -11.90625 h -6.614584 v -6.614585 h 2.116667 V 93.13333 h -3.175 c -1.057665,0.123327 -1.440553,1.003774 -1.852083,1.852085 l -3.207904,5.556255 -1.554596,7.9375 4.7625,7.40833 z"
					id="path121591"
				/><path
					style="fill:#0f1010;fill-opacity:1;fill-rule:evenodd;stroke-width:1.2;stroke-linecap:round;stroke-linejoin:round;stroke-miterlimit:3;paint-order:stroke fill markers"
					d="m 88.106249,119.0625 v -3.175 h 2.910417 v 3.175 z"
					id="path121593"
				/><path
					style="fill:#344d5c;fill-opacity:1;fill-rule:evenodd;stroke-width:1.15292;stroke-linecap:round;stroke-linejoin:round;stroke-miterlimit:3;paint-order:stroke fill markers"
					d="m 79.110416,112.7125 v 3.175 h -3.174999 v -3.43958 h 3.174999 z"
					id="path121595"
				/><path
					style="fill:#0f1010;fill-opacity:1;fill-rule:evenodd;stroke-width:1.2;stroke-linecap:round;stroke-linejoin:round;stroke-miterlimit:3;paint-order:stroke fill markers"
					d="m 79.110416,112.7125 v -2.64583 h -3.175 v 2.38125 z"
					id="path121597"
				/><path
					style="fill:#0f1010;fill-opacity:1;fill-rule:evenodd;stroke-width:1.2;stroke-linecap:round;stroke-linejoin:round;stroke-miterlimit:3;paint-order:stroke fill markers"
					d="m 75.935416,110.06667 v -6.61459 l 3.175,-3.175 v -5.291665 h -3.439584 v 4.497917 l -2.910416,2.910418 v 7.67292 z"
					id="path121599"
				/><path
					style="fill:#0f1010;fill-opacity:1;fill-rule:evenodd;stroke-width:1.2;stroke-linecap:round;stroke-linejoin:round;stroke-miterlimit:3;paint-order:stroke fill markers"
					d="M 55.562499,112.97708 V 101.6 l 6.614584,-6.614585 H 59.266666 L 52.387499,101.6 v 11.37708 z"
					id="path121601"
				/><path
					style="fill:#363e43;fill-opacity:1;fill-rule:evenodd;stroke-width:1.2;stroke-linecap:round;stroke-linejoin:round;stroke-miterlimit:3;paint-order:stroke fill markers"
					d="m 105.03958,87.312499 h -5.291665 l -5.820833,3.439583 v 8.202083 l 6.415808,11.112505 h 5.49044 V 98.424999 h -6.614581 v -6.614583 h 1.852081 z"
					id="path121603"
				/><path
					style="fill:#0f1010;fill-opacity:1;fill-rule:evenodd;stroke-width:1.2;stroke-linecap:round;stroke-linejoin:round;stroke-miterlimit:3;paint-order:stroke fill markers"
					d="m 107.95,112.97708 v -2.91041 h -2.91042 v 2.91041 z"
					id="path121605"
				/><path
					style="fill:#5e8471;fill-opacity:1;fill-rule:evenodd;stroke-width:1.2;stroke-linecap:round;stroke-linejoin:round;stroke-miterlimit:3;paint-order:stroke fill markers"
					d="m 91.016666,119.0625 v 1.5875 c 0.567908,1.09607 1.217545,2.08274 2.381249,2.38125 h 4.497917 l 7.143748,-5.55625 v -1.5875 -5.82083 h -9.260415 l -1.134319,4.23333 -3.62818,1.5875 z"
					id="path121607"
				/><path
					style="fill:#363e43;fill-opacity:1;fill-rule:evenodd;stroke-width:1.2;stroke-linecap:round;stroke-linejoin:round;stroke-miterlimit:3;paint-order:stroke fill markers"
					d="m 107.95,110.06667 v -1.32292 l 9.78958,-9.789585 v -3.175 h -4.23333 l -8.46667,-8.466666 -3.96875,4.497917 c 0.53481,2.499143 2.34259,3.895872 4.7625,4.762499 v 13.493755 z"
					id="path121609"
				/><path
					style="fill:#0f1010;fill-opacity:1;fill-rule:evenodd;stroke-width:1.2;stroke-linecap:round;stroke-linejoin:round;stroke-miterlimit:3;paint-order:stroke fill markers"
					d="m 98.954165,110.06667 h 3.175005 v -2.64584 h -3.175005 z"
					id="path121611"
				/><path
					style="fill:#0f1010;fill-opacity:1;fill-rule:evenodd;stroke-width:1.2;stroke-linecap:round;stroke-linejoin:round;stroke-miterlimit:3;paint-order:stroke fill markers"
					d="m 98.954165,107.42083 h -2.645833 l -5.04099,-8.731248 v -5.55625 h 2.65974 v 5.820833 z"
					id="path121613"
				/><path
					style="fill:#4c6371;fill-opacity:1;fill-rule:evenodd;stroke-width:1.2;stroke-linecap:round;stroke-linejoin:round;stroke-miterlimit:3;paint-order:stroke fill markers"
					d="m 120.65,93.133332 v -5.820833 h -11.1125 l 5.29167,6.085416 5.55625,0.264584 z"
					id="path121615"
				/><path
					style="fill:#0f1010;fill-opacity:1;fill-rule:evenodd;stroke-width:1.2;stroke-linecap:round;stroke-linejoin:round;stroke-miterlimit:3;paint-order:stroke fill markers"
					d="m 120.65,95.779165 v -2.645833 h -5.55625 l -5.55625,-5.820833 h -4.49792 l 8.46667,8.466666 z"
					id="path121617"
				/><path
					style="fill:#363e43;fill-opacity:1;fill-rule:evenodd;stroke-width:1.2;stroke-linecap:round;stroke-linejoin:round;stroke-miterlimit:3;paint-order:stroke fill markers"
					d="m 120.65,71.702082 v -8.731249 h -5.55625 c -0.62836,0.0791 -1.25851,0.113264 -1.85208,1.0693 -0.43421,3.181044 -2.37729,4.528074 -5.02709,5.016116 v 2.645833 z"
					id="path121619"
				/><path
					style="fill:#0f1010;fill-opacity:1;fill-rule:evenodd;stroke-width:1.2;stroke-linecap:round;stroke-linejoin:round;stroke-miterlimit:3;paint-order:stroke fill markers"
					d="m 120.65,71.702082 v 2.910417 h -5.55625 v -2.910417 z"
					id="path121621"
				/><path
					style="fill:#0f1010;fill-opacity:1;fill-rule:evenodd;stroke-width:1.25336;stroke-linecap:round;stroke-linejoin:round;stroke-miterlimit:3;paint-order:stroke fill markers"
					d="m 120.65,59.795833 v 3.175 h -5.55625 v -3.175 z"
					id="path121623"
				/><path
					style="fill:#0f1010;fill-opacity:1;fill-rule:evenodd;stroke-width:1.25336;stroke-linecap:round;stroke-linejoin:round;stroke-miterlimit:3;paint-order:stroke fill markers"
					d="m 120.65,47.889583 v 3.175 h -5.55625 v -3.175 z"
					id="path121625"
				/><path
					style="opacity:1;fill:#344d5c;fill-opacity:1;fill-rule:evenodd;stroke-width:1.2;stroke-linecap:round;stroke-linejoin:round;stroke-miterlimit:3;paint-order:stroke fill markers"
					d="M 70.114582,51.064583 H 50.006249 v 3.704166 h 20.108333 z"
					id="path121627"
				/><path
					style="opacity:1;fill:#344d5c;fill-opacity:1;fill-rule:evenodd;stroke-width:1.2;stroke-linecap:round;stroke-linejoin:round;stroke-miterlimit:3;paint-order:stroke fill markers"
					d="m 34.925,65.881249 h 3.439583 V 62.970833 H 34.925 Z"
					id="path121629"
				/><path
					style="opacity:1;fill:#344d5c;fill-opacity:1;fill-rule:evenodd;stroke-width:1.2;stroke-linecap:round;stroke-linejoin:round;stroke-miterlimit:3;paint-order:stroke fill markers"
					d="M 26.458333,62.706249 V 55.297916 H 23.01875 v 7.408333 z"
					id="path121631"
				/><path
					style="fill:#344d5c;fill-opacity:1;fill-rule:evenodd;stroke-width:1.2;stroke-linecap:round;stroke-linejoin:round;stroke-miterlimit:3;paint-order:stroke fill markers"
					d="m 17.727083,81.227082 h -5.55625 v 2.645834 h 5.55625 z"
					id="path121633"
				/><path
					style="fill:#344d5c;fill-opacity:1;fill-rule:evenodd;stroke-width:1.2;stroke-linecap:round;stroke-linejoin:round;stroke-miterlimit:3;paint-order:stroke fill markers"
					d="m 17.727083,83.872916 h 5.55625 l 1.058333,2.910416 h 1.5875 v 17.197918 h -3.175 V 89.429166 Z"
					id="path121635"
				/><path
					style="fill:#5e8471;fill-opacity:1;fill-rule:evenodd;stroke-width:1.2;stroke-linecap:round;stroke-linejoin:round;stroke-miterlimit:3;paint-order:stroke fill markers"
					d="m 20.108333,107.15625 h 5.820833 l 6.085417,5.82083 h 5.820833 v 7.40834 l -2.645833,2.64583 h -10.31875 l -13.49375,-8.46667 v -4.49791 h 8.73125 z"
					id="path121637"
				/><path
					style="fill:#344d5c;fill-opacity:1;fill-rule:evenodd;stroke-width:1.2;stroke-linecap:round;stroke-linejoin:round;stroke-miterlimit:3;paint-order:stroke fill markers"
					d="M 20.108333,107.15625 H 14.2875 v 2.91042 h 5.820833 z"
					id="path121639"
				/><path
					style="fill:#344d5c;fill-opacity:1;fill-rule:evenodd;stroke-width:1.2;stroke-linecap:round;stroke-linejoin:round;stroke-miterlimit:3;paint-order:stroke fill markers"
					d="m 25.929166,103.98125 h 3.175 l 8.73125,8.99583 h -5.820833 l -6.085417,-5.82083 z"
					id="path121641"
				/><path
					style="fill:#5e8471;fill-opacity:1;fill-rule:evenodd;stroke-width:1.2;stroke-linecap:round;stroke-linejoin:round;stroke-miterlimit:3;paint-order:stroke fill markers"
					d="m 41.010416,115.8875 v 3.43958 l 5.027083,3.70417 h 16.139584 l 1.852083,-1.85208 v -5.29167 z"
					id="path121643"
				/><path
					style="fill:#344d5c;fill-opacity:1;fill-rule:evenodd;stroke-width:1.2;stroke-linecap:round;stroke-linejoin:round;stroke-miterlimit:3;paint-order:stroke fill markers"
					d="m 37.835416,115.8875 h 3.175 v 3.43958 h -3.175 z"
					id="path121645"
				/><path
					style="fill:#344d5c;fill-opacity:1;fill-rule:evenodd;stroke-width:1.2;stroke-linecap:round;stroke-linejoin:round;stroke-miterlimit:3;paint-order:stroke fill markers"
					d="m 41.010416,115.8875 v -2.91042 h 11.377083 v 2.91042 z"
					id="path121647"
				/><path
					style="fill:#344d5c;fill-opacity:1;fill-rule:evenodd;stroke-width:1.2;stroke-linecap:round;stroke-linejoin:round;stroke-miterlimit:3;paint-order:stroke fill markers"
					d="m 55.562499,112.97708 h 5.55625 v 2.91042 h -5.55625 z"
					id="path121649"
				/><path
					style="fill:#344d5c;fill-opacity:1;fill-rule:evenodd;stroke-width:1.2;stroke-linecap:round;stroke-linejoin:round;stroke-miterlimit:3;paint-order:stroke fill markers"
					d="m 91.016666,115.8875 v -2.91042 h 5.027083 v 2.91042 z"
					id="path121651"
				/><path
					style="fill:#344d5c;fill-opacity:1;fill-rule:evenodd;stroke-width:1.2;stroke-linecap:round;stroke-linejoin:round;stroke-miterlimit:3;paint-order:stroke fill markers"
					d="m 105.03958,112.97708 v 2.91042 H 107.95 v -2.91042 z"
					id="path121653"
				/><path
					style="fill:#344d5c;fill-opacity:1;fill-rule:evenodd;stroke-width:1.2;stroke-linecap:round;stroke-linejoin:round;stroke-miterlimit:3;paint-order:stroke fill markers"
					d="m 107.95,110.06667 v -1.32292 l 9.78958,-9.789585 v -3.175 H 120.65 v 4.233335 l -9.78958,10.05417 z"
					id="path121655"
				/><path
					style="fill:#344d5c;fill-opacity:1;fill-rule:evenodd;stroke-width:1.2;stroke-linecap:round;stroke-linejoin:round;stroke-miterlimit:3;paint-order:stroke fill markers"
					d="M 120.65,95.779165 V 93.13333 h 1.5875 v 2.645835 z"
					id="path121657"
				/><path
					style="fill:#344d5c;fill-opacity:1;fill-rule:evenodd;stroke-width:1.2;stroke-linecap:round;stroke-linejoin:round;stroke-miterlimit:3;paint-order:stroke fill markers"
					d="m 120.65,74.612499 h 1.5875 V 71.702082 H 120.65 Z"
					id="path121659"
				/><path
					style="fill:#344d5c;fill-opacity:1;fill-rule:evenodd;stroke-width:1.2;stroke-linecap:round;stroke-linejoin:round;stroke-miterlimit:3;paint-order:stroke fill markers"
					d="m 120.65,62.970833 v -3.175 h 1.5875 v 3.175 z"
					id="path121661"
				/><path
					style="fill:#5e8471;fill-opacity:1;fill-rule:evenodd;stroke-width:1.2;stroke-linecap:round;stroke-linejoin:round;stroke-miterlimit:3;paint-order:stroke fill markers"
					d="m 112.18333,44.979166 c 2.8136,-6.03145 5.89772,-11.861974 6.08542,-19.84375 h 2.91042 v 18.520833 l -3.43959,1.985844 z"
					id="path121663"
				/><path
					style="fill:#344d5c;fill-opacity:1;fill-rule:evenodd;stroke-width:1.2;stroke-linecap:round;stroke-linejoin:round;stroke-miterlimit:3;paint-order:stroke fill markers"
					d="m 120.65,51.064583 h 1.5875 V 44.979166 H 120.65 Z"
					id="path121665"
				/><path
					style="opacity:1;fill:#5e8471;fill-opacity:1;fill-rule:evenodd;stroke-width:1.2;stroke-linecap:round;stroke-linejoin:round;stroke-miterlimit:3;paint-order:stroke fill markers"
					d="m 50.006249,51.064583 v -3.704167 c 0.541741,-1.404591 1.75575,-2.118418 3.666175,-2.116667 h 13.002575 v 5.820834 z"
					id="path121667"
				/><path
					style="fill:#5e8471;fill-opacity:1;fill-rule:evenodd;stroke-width:1.2;stroke-linecap:round;stroke-linejoin:round;stroke-miterlimit:3;paint-order:stroke fill markers"
					d="m 107.95,112.97708 v -2.91041 h 2.91042 L 120.65,100.0125 v -4.233337 h 3.175 v 7.143757 l -10.05417,10.05416 z"
					id="path121669"
				/><path
					style="fill:#4c6371;fill-opacity:1;fill-rule:evenodd;stroke-width:1.2;stroke-linecap:round;stroke-linejoin:round;stroke-miterlimit:3;paint-order:stroke fill markers"
					d="m 105.03958,87.312499 4.23334,-6.085417 h 2.91041 V 74.612499 H 120.65 v 6.085417 h -1.85208 c -1.08583,3.198378 -2.82933,4.207489 -4.7625,4.7625 v 1.852083 z"
					id="path121671"
				/><path
					style="fill:#5e8471;fill-opacity:1;fill-rule:evenodd;stroke-width:1.2;stroke-linecap:round;stroke-linejoin:round;stroke-miterlimit:3;paint-order:stroke fill markers"
					d="M 120.65,93.133332 V 74.612499 h 1.5875 c 1.08922,0.20677 1.3797,0.873338 1.5875,1.5875 v 15.610417 c -0.17524,1.006725 -0.73558,1.397866 -1.5875,1.322916 z"
					id="path121673"
				/><path
					style="fill:#5e8471;fill-opacity:1;fill-rule:evenodd;stroke-width:1.2;stroke-linecap:round;stroke-linejoin:round;stroke-miterlimit:3;paint-order:stroke fill markers"
					d="m 120.65,71.702082 h 1.5875 c 0.81814,-0.18351 1.41059,-0.636987 1.5875,-1.5875 v -5.291666 c -0.24119,-1.062152 -0.92519,-1.440365 -1.5875,-1.852083 H 120.65 Z"
					id="path121675"
				/><path
					style="fill:#4c6371;fill-opacity:1;fill-rule:evenodd;stroke-width:1.2;stroke-linecap:round;stroke-linejoin:round;stroke-miterlimit:3;paint-order:stroke fill markers"
					d="m 120.65,59.795833 v -8.73125 h -5.55625 c -0.87737,4.015994 -3.48304,6.234305 -5.82083,8.73125 z"
					id="path121677"
				/><path
					style="fill:#5e8471;fill-opacity:1;fill-rule:evenodd;stroke-width:1.2;stroke-linecap:round;stroke-linejoin:round;stroke-miterlimit:3;paint-order:stroke fill markers"
					d="m 120.65,59.795833 h 1.5875 c 0.99375,-0.287319 1.39774,-0.769694 1.5875,-1.322917 v -5.55625 c -0.1756,-0.833342 -0.75103,-1.422442 -1.5875,-1.852083 H 120.65 Z"
					id="path121679"
				/><path
					style="opacity:1;fill:#4c6371;fill-opacity:1;fill-rule:evenodd;stroke-width:1.2;stroke-linecap:round;stroke-linejoin:round;stroke-miterlimit:3;paint-order:stroke fill markers"
					d="M 50.006249,62.970833 H 63.764583 V 54.768749 H 50.006249 Z"
					id="path121681"
				/><path
					style="fill:#4c6371;fill-opacity:1;fill-rule:evenodd;stroke-width:1.2;stroke-linecap:round;stroke-linejoin:round;stroke-miterlimit:3;paint-order:stroke fill markers"
					d="m 82.285416,89.693749 v -1.5875 c 3.052189,-0.597482 3.739918,-2.066272 3.96875,-3.704167 l 1.5875,-0.79375 v 6.085417 z"
					id="path121683"
				/><path
					style="fill:#4c6371;fill-opacity:1;fill-rule:evenodd;stroke-width:1.2;stroke-linecap:round;stroke-linejoin:round;stroke-miterlimit:3;paint-order:stroke fill markers"
					d="M 103.58437,80.9625 V 79.375 c 3.05219,-0.597482 3.34305,-1.801688 3.57188,-3.439583 h 1.05833 V 80.9625 Z"
					id="path121685"
				/><path
					style="fill:#363e43;fill-opacity:1;fill-rule:evenodd;stroke-width:1.2;stroke-linecap:round;stroke-linejoin:round;stroke-miterlimit:3;paint-order:stroke fill markers"
					d="m 108.47917,47.889583 3.70416,-2.910417 h 5.82084 V 42.333333 H 120.65 V 29.104166 c 0.002,-0.230303 -0.10421,-0.896907 0.26458,-3.96875 0.44091,-4.402504 1.408,-8.812184 2.91042,-13.229166 v 33.072916 h -3.175 v 2.910417 z"
					id="path121687"
				/><path
					style="fill:#363e43;fill-opacity:1;fill-rule:evenodd;stroke-width:1.2;stroke-linecap:round;stroke-linejoin:round;stroke-miterlimit:3;paint-order:stroke fill markers"
					d="m 67.204166,89.958332 v -2.910416 c 3.837312,-1.172532 6.001437,-3.734024 7.14375,-7.14375 l 1.322916,-0.529167 v 10.583333 z"
					id="path121689"
				/><path
					style="fill:#363e43;fill-opacity:1;fill-rule:evenodd;stroke-width:1.2;stroke-linecap:round;stroke-linejoin:round;stroke-miterlimit:3;paint-order:stroke fill markers"
					d="m 94.456249,87.047916 v -1.5875 c 1.927173,-0.480491 3.50551,-1.447312 3.96875,-3.96875 l 1.322916,-0.529167 v 6.085417 z"
					id="path121691"
				/><path
					style="fill:#ad9f74;fill-opacity:1;fill-rule:evenodd;stroke-width:1.2;stroke-linecap:round;stroke-linejoin:round;stroke-miterlimit:3;paint-order:stroke fill markers"
					d="m 70.643749,52.916666 c 1.257575,-0.416538 2.626249,-0.721094 3.175,-1.852083 0.565332,0 1.087761,0 1.5875,0 0.941205,0.548209 1.010669,1.353353 1.222058,2.116666 -0.306943,0.798797 -0.930116,1.412762 -1.852084,1.852084 -1.629904,-0.119862 -2.826787,-1.244497 -4.132474,-2.116667 z"
					id="path121693"
				/><path
					style="opacity:1;fill:#ad9f74;fill-opacity:1;fill-rule:evenodd;stroke-width:1.2;stroke-linecap:round;stroke-linejoin:round;stroke-miterlimit:3;paint-order:stroke fill markers"
					d="m 38.89375,62.970833 c 1.342212,-0.562013 2.663888,-1.148346 3.439583,-2.38125 1.102885,-0.648382 2.387635,-0.76085 3.96875,0 0.445877,0.763162 0.247176,1.570543 0,2.38125 -0.410721,0.298855 -0.823423,0.598263 -1.852084,1.0693 -1.971827,-0.04072 -3.74912,-0.59434 -5.556249,-1.0693 z"
					id="path121695"
				/><path
					style="fill:#ad9f74;fill-opacity:1;fill-rule:evenodd;stroke-width:1.2;stroke-linecap:round;stroke-linejoin:round;stroke-miterlimit:3;paint-order:stroke fill markers"
					d="m 19.84375,86.518749 c 4.039996,-0.890879 4.327085,-2.187554 5.027083,-3.439583 -0.270935,-1.472761 -1.193373,-2.099377 -2.38125,-2.38125 -1.292278,0.26726 -2.118226,1.027007 -2.38125,2.38125 -0.0068,1.14192 0.146917,2.274758 -0.264583,3.439583 z"
					id="path121697"
				/><path
					style="fill:#ad9f74;fill-opacity:1;fill-rule:evenodd;stroke-width:1.2;stroke-linecap:round;stroke-linejoin:round;stroke-miterlimit:3;paint-order:stroke fill markers"
					d="m 47.095833,108.21458 c 1.442346,-1.35128 2.709788,-0.72361 3.96875,0 1.924145,2.78459 1.126489,3.23349 1.5875,4.7625 -1.240076,-0.81695 -2.537258,-1.48738 -4.233334,-1.13432 -2.23752,-1.24579 -2.312472,-2.44777 -1.322916,-3.62818 z"
					id="path121699"
				/><path
					style="fill:#ad9f74;fill-opacity:1;fill-rule:evenodd;stroke-width:1.2;stroke-linecap:round;stroke-linejoin:round;stroke-miterlimit:3;paint-order:stroke fill markers"
					d="m 73.024999,111.38958 c 2.031755,-2.53534 3.842442,-0.8047 5.291667,0 0.72312,0.69817 1.121619,1.67521 1.527572,2.64584 -1.653482,-0.27848 -3.264943,-0.42082 -4.702572,0 -1.895993,-0.72218 -1.950335,-1.69152 -2.116667,-2.64584 z"
					id="path121701"
				/><path
					style="fill:#ad9f74;fill-opacity:1;fill-rule:evenodd;stroke-width:1.2;stroke-linecap:round;stroke-linejoin:round;stroke-miterlimit:3;paint-order:stroke fill markers"
					d="m 93.927082,111.38958 c 1.356006,-2.44756 3.658901,-0.92853 5.820833,0 1.066595,0.78975 2.045475,1.6233 2.645835,2.64584 -0.85157,-0.29562 -1.11717,-0.62984 -3.968751,-0.79375 -1.782027,0.25227 -3.450091,0.44193 -3.96875,0 -0.52222,-0.43832 -0.709355,-1.05012 -0.529167,-1.85209 z"
					id="path121703"
				/><path
					style="fill:#ad9f74;fill-opacity:1;fill-rule:evenodd;stroke-width:1.2;stroke-linecap:round;stroke-linejoin:round;stroke-miterlimit:3;paint-order:stroke fill markers"
					d="m 111.65417,105.03958 c 1.84494,-0.56113 3.68713,-1.03233 5.55625,-2.38125 0.82636,-0.79535 1.03997,-1.80021 0.79375,-2.962313 -1.5952,-1.708856 -3.18257,-1.680474 -4.7625,0 -0.58312,0.907673 -0.67458,1.911773 -0.52917,2.962313 z"
					id="path121705"
				/><path
					style="fill:#ad9f74;fill-opacity:1;fill-rule:evenodd;stroke-width:1.2;stroke-linecap:round;stroke-linejoin:round;stroke-miterlimit:3;paint-order:stroke fill markers"
					d="m 117.21042,76.464582 c 0.47994,-1.805015 1.60097,-1.981923 2.91041,-1.680329 l 2.11667,1.680329 -2.11667,1.5875 c -1.51941,0.756572 -2.4512,0.175347 -2.91041,-1.5875 z"
					id="path121707"
				/><path
					style="fill:#ad9f74;fill-opacity:1;fill-rule:evenodd;stroke-width:1.2;stroke-linecap:round;stroke-linejoin:round;stroke-miterlimit:3;paint-order:stroke fill markers"
					d="m 117.21042,64.915746 c 0.47994,-1.805015 1.60097,-1.981923 2.91041,-1.680329 l 2.11667,1.680329 -2.11667,1.5875 c -1.51941,0.756572 -2.4512,0.175347 -2.91041,-1.5875 z"
					id="path121709"
				/><path
					style="fill:#ad9f74;fill-opacity:1;fill-rule:evenodd;stroke-width:1.2;stroke-linecap:round;stroke-linejoin:round;stroke-miterlimit:3;paint-order:stroke fill markers"
					d="m 117.21042,53.009496 c 0.47994,-1.805015 1.60097,-1.981923 2.91041,-1.680329 l 2.11667,1.680329 -2.11667,1.5875 c -1.51941,0.756572 -2.4512,0.175347 -2.91041,-1.5875 z"
					id="path121711"
				/><path
					style="opacity:1;fill:#4c6371;fill-opacity:1;fill-rule:evenodd;stroke-width:1.2;stroke-linecap:round;stroke-linejoin:round;stroke-miterlimit:3;paint-order:stroke fill markers"
					d="m 50.006249,62.441666 h 5.291667 v 1.322917 h -5.291667 z"
					id="path121713"
				/><path
					style="opacity:1;fill:#363e43;fill-opacity:1;fill-rule:evenodd;stroke-width:1.2;stroke-linecap:round;stroke-linejoin:round;stroke-miterlimit:3;paint-order:stroke fill markers"
					d="m 63.764583,115.8875 h 0.79375 v -11.90625 h -1.5875 v 11.90625 z"
					id="path121715"
				/><path
					style="opacity:1;fill:#4c6371;fill-opacity:1;fill-rule:evenodd;stroke-width:1.2;stroke-linecap:round;stroke-linejoin:round;stroke-miterlimit:3;paint-order:stroke fill markers"
					d="m 88.106249,103.98125 h 0.79375 v 11.90625 h -0.529167 z"
					id="path121717"
				/><path
					style="opacity:1;fill:#363e43;fill-opacity:1;fill-rule:evenodd;stroke-width:1.2;stroke-linecap:round;stroke-linejoin:round;stroke-miterlimit:3;paint-order:stroke fill markers"
					d="m 105.30417,98.424999 h 1.05833 v 11.641671 h -0.79375 z"
					id="path121719"
				/><path
					style="opacity:1;fill:#363e43;fill-opacity:1;fill-rule:evenodd;stroke-width:1.2;stroke-linecap:round;stroke-linejoin:round;stroke-miterlimit:3;paint-order:stroke fill markers"
					d="m 82.285416,64.293749 h 4.233333 l -0.264583,1.322917 -4.124447,2.38125 -3.019303,-2.116667 z"
					id="path121721"
				/><path
					style="opacity:1;fill:#363e43;fill-opacity:1;fill-rule:evenodd;stroke-width:1.2;stroke-linecap:round;stroke-linejoin:round;stroke-miterlimit:3;paint-order:stroke fill markers"
					d="m 105.56875,24.870833 v -0.529167 h 2.64583 v 5.027084 l 2.91042,1.680329 v 1.494671 h -5.55625 z"
					id="path121723"
				/></g
			><g id="g121405"
				><path
					style="opacity:1;fill:#9e7e4f;fill-opacity:1;fill-rule:evenodd;stroke-width:1.2;stroke-linecap:round;stroke-linejoin:round;stroke-miterlimit:3;paint-order:stroke fill markers"
					d="m 69.849999,25.135416 h 1.5875 v -8.73125 h -2.38125 z"
					id="path114585"
				/><path
					style="fill:#363e43;fill-opacity:1;fill-rule:evenodd;stroke-width:1.2;stroke-linecap:round;stroke-linejoin:round;stroke-miterlimit:3;paint-order:stroke fill markers;opacity:1"
					d="m 30.1625,21.960416 c -0.11819,-1.98054 0.819881,-2.790776 2.38125,-2.910416 0.07189,-4.194059 0.723647,-7.964488 4.7625,-9.2604168 -0.125761,0.2945828 -0.370818,0.4043588 -0.264584,1.0583338 v 5.556249 h 3.96875 C 40.205261,10.381493 43.69267,9.2070721 47.095833,7.9374999 v 5.0270831 l -3.704167,11.377083 -12.7,-1.058333 z"
					id="path72536"
				/><path
					style="fill:#0f1010;fill-opacity:1;fill-rule:evenodd;stroke-width:1.2;stroke-linecap:round;stroke-linejoin:round;stroke-miterlimit:3;paint-order:stroke fill markers"
					d="m 91.016666,56.620833 v -4.7625 l 2.910416,2.116666 v 2.645834 z"
					id="path79035"
				/><path
					style="fill:#4c6371;fill-opacity:1;fill-rule:evenodd;stroke-width:1.2;stroke-linecap:round;stroke-linejoin:round;stroke-miterlimit:3;paint-order:stroke fill markers"
					d="m 62.177083,94.985415 -7.9375,-7.937499 H 52.387499 25.929166 v 14.287504 h 17.4625 v -6.350005 z"
					id="path81267"
				/><path
					style="fill:#363e43;fill-opacity:1;fill-rule:evenodd;stroke-width:1.2;stroke-linecap:round;stroke-linejoin:round;stroke-miterlimit:3;paint-order:stroke fill markers"
					d="m 78.316666,57.679166 v 1.852083 c 2.398147,0.876356 4.5841,1.938859 4.7625,4.7625 v 1.322917 h 3.175 l -5.027084,8.995833 -2.116666,1.322917 V 65.881249 h -3.96875 l -3.513418,-6.085416 v -2.38125 z"
					id="path85860"
				/><path
					style="fill:#363e43;fill-opacity:1;fill-rule:evenodd;stroke-width:1.2;stroke-linecap:round;stroke-linejoin:round;stroke-miterlimit:3;paint-order:stroke fill markers"
					d="m 70.379166,102.39375 h 2.38125 l 3.175,7.67292 v 6.61458 h -11.90625 v -12.7 h 6.35 z"
					id="path85874"
				/><path
					style="fill:#363e43;fill-opacity:1;fill-rule:evenodd;stroke-width:1.2;stroke-linecap:round;stroke-linejoin:round;stroke-miterlimit:3;paint-order:stroke fill markers"
					d="m 45.772916,83.343749 -1.5875,-1.852083 h -2.116667 c 0.108152,-2.174589 -1.206228,-3.856652 -4.762499,-4.7625 V 74.6125 L 24.870833,74.877082 19.05,80.697916 20.815339,87.28625 44.714583,87.3125 Z"
					id="path85864"
				/><path
					style="fill:#5e8471;fill-opacity:1;fill-rule:evenodd;stroke-width:1.2;stroke-linecap:round;stroke-linejoin:round;stroke-miterlimit:3;paint-order:stroke fill markers"
					d="m 26.458333,63.235416 v -7.9375 H 23.01875 C 22.71154,54.446995 22.113833,53.856905 20.727391,53.974999 H 19.05 c -0.822162,-0.0054 -1.417126,0.374664 -1.833087,1.058334 L 6.0854166,70.643749 v 8.995833 c 0.1792979,0.850701 0.6732196,1.412259 1.5875,1.5875 H 19.84375 L 31.220833,69.849999 Z"
					id="path81239"
				/><path
					style="fill:#5e8471;fill-opacity:1;fill-rule:evenodd;stroke-width:1.2;stroke-linecap:round;stroke-linejoin:round;stroke-miterlimit:3;paint-order:stroke fill markers"
					d="m 47.095833,62.970833 v -15.08125 h -13.49375 l -7.14375,4.124446 v 11.221387 l 3.175,3.175 5.55625,10e-7 0.264584,-3.439584 z"
					id="path81237"
				/><path
					style="fill:#363e43;fill-opacity:1;fill-rule:evenodd;stroke-width:1.2;stroke-linecap:round;stroke-linejoin:round;stroke-miterlimit:3;paint-order:stroke fill markers"
					d="m 34.925,69.056249 v -3.439582 h 9.260417 l 11.906249,12.435415 c 0.07419,3.17163 -0.770215,5.355304 -3.704167,5.291667 H 44.185416 V 74.877082 H 26.193748 l 4.42996,-7.672916 z"
					id="path85862"
				/><path
					style="fill:#344d5c;fill-opacity:1;fill-rule:evenodd;stroke-width:1.2;stroke-linecap:round;stroke-linejoin:round;stroke-miterlimit:3;paint-order:stroke fill markers"
					d="m 28.575,68.791666 -8.73125,9.789583 v 2.645833 H 22.225 L 32.808333,68.791666 Z"
					id="path81148"
				/><path
					style="fill:#5e8471;fill-opacity:1;fill-rule:evenodd;stroke-width:1.2;stroke-linecap:round;stroke-linejoin:round;stroke-miterlimit:3;paint-order:stroke fill markers"
					d="m 84.931249,45.243749 v -5.291666 c 0.513179,-1.090526 1.237318,-2.061728 2.645833,-2.645833 h 3.439584 v 4.497916 l -2.910417,3.439583 z"
					id="path79256"
				/><path
					style="fill:#5e8471;fill-opacity:1;fill-rule:evenodd;stroke-width:1.2;stroke-linecap:round;stroke-linejoin:round;stroke-miterlimit:3;paint-order:stroke fill markers"
					d="M 84.931249,47.889583 V 45.243749 H 72.495832 c -2.204417,0.698401 -2.26783,1.675371 -2.38125,2.645834 v 3.175 h 2.910417 l 1.852083,-1.852084 z"
					id="path81180"
				/><path
					style="fill:#4c6371;fill-opacity:1;fill-rule:evenodd;stroke-width:1.2;stroke-linecap:round;stroke-linejoin:round;stroke-miterlimit:3;paint-order:stroke fill markers"
					d="m 91.016666,37.30625 v 4.497916 c -1.852083,10e-7 -3.266927,0.0722 -2.910417,3.439583 v 5.820834 l 2.910417,0.79375 2.910416,2.116666 v 6.085417 l 3.175,1.833086 v 5.575247 l 2.645833,-1.322917 6.085415,-13.758333 h -5.02708 c -0.50107,-1.770955 -0.67666,-3.623296 -4.762501,-4.497916 v -2.116667 h 9.789581 v -5.027083 l -3.96875,-5.291667 z"
					id="path78893"
				/><path
					style="fill:#0f1010;fill-opacity:1;fill-rule:evenodd;stroke-width:1.2;stroke-linecap:round;stroke-linejoin:round;stroke-miterlimit:3;paint-order:stroke fill markers"
					d="m 91.016666,33.602083 h 9.789584 l 5.02708,3.439583 v 3.704167 l -5.02708,-3.439583 h -9.789584 z"
					id="path78891"
				/><path
					style="fill:#363e43;fill-opacity:1;fill-rule:evenodd;stroke-width:1.2;stroke-linecap:round;stroke-linejoin:round;stroke-miterlimit:3;paint-order:stroke fill markers;opacity:1"
					d="m 61.647916,25.135416 v -8.202083 h -3.439583 v -6.35 l 0.79375,-0.212684 c 0.295513,-1.1623179 0.570874,-2.3276145 2.645833,-3.2268991 h 4.7625 v 2.6458333 h -2.38125 v 6.6145828 h 6.614583 v 8.73125 z"
					id="path73719"
				/><path
					style="fill:#477187;fill-opacity:1;fill-rule:evenodd;stroke-width:1.2;stroke-linecap:round;stroke-linejoin:round;stroke-miterlimit:3;paint-order:stroke fill markers;opacity:1"
					d="M 23.01875,28.045833 V 23.01875 c 0.39552,-1.000656 0.864565,-0.953281 1.322916,-1.058334 H 28.575 c 0.902189,-0.488776 1.440017,-1.152754 1.852083,-1.852083 L 30.1625,21.960416 v 3.96875 l -4.233334,2.910417 z"
					id="path71498"
				/><path
					style="opacity:1;fill:#ad9f74;fill-opacity:1;fill-rule:evenodd;stroke-width:1.2;stroke-linecap:round;stroke-linejoin:round;stroke-miterlimit:3;paint-order:stroke fill markers"
					d="M 7.4083332,29.633333 C 5.352934,27.298519 4.2181973,24.757955 4.2333333,21.960416 6.7069768,21.60863 8.391918,23.21161 10.054167,24.870833 Z"
					id="path120295"
				/><path
					style="opacity:1;fill:#363e43;fill-opacity:1;fill-rule:evenodd;stroke-width:1.2;stroke-linecap:round;stroke-linejoin:round;stroke-miterlimit:3;paint-order:stroke fill markers"
					d="M 7.4083333,29.633333 7.14375,24.870833 h 2.910417 l 1.5875,1.5875 2.38125,1.5875 14.816666,0 v 5.55625 H 11.90625 C 9.9920236,32.501386 8.4165177,31.21928 7.4083333,29.633333 Z"
					id="path61742"
				/><path
					style="fill:#4c6372;fill-opacity:1;fill-rule:evenodd;stroke-width:1.2;stroke-linecap:round;stroke-linejoin:round;stroke-miterlimit:3;paint-order:stroke fill markers;opacity:1"
					d="m 14.022916,25.135416 h 6.879167 v 2.910417 h -6.879167 z"
					id="path71442"
				/><path
					style="fill:#363e43;fill-opacity:1;fill-rule:evenodd;stroke-width:1.2;stroke-linecap:round;stroke-linejoin:round;stroke-miterlimit:3;paint-order:stroke fill markers;opacity:1"
					d="M 20.6375,28.310416 V 23.283333 C 21.004738,22.3356 22.031644,22.308059 23.01875,22.225 v 6.35 H 20.6375 Z"
					id="path71440"
				/><path
					style="fill:#0f1010;fill-opacity:1;fill-rule:evenodd;stroke-width:1.2;stroke-linecap:round;stroke-linejoin:round;stroke-miterlimit:3;paint-order:stroke fill markers;opacity:1"
					d="m 25.929166,25.135416 h 4.497917 v 2.910417 h -4.497917 z"
					id="path61800"
				/><path
					style="fill:#363e43;fill-opacity:1;fill-rule:evenodd;stroke-width:1.2;stroke-linecap:round;stroke-linejoin:round;stroke-miterlimit:3;paint-order:stroke fill markers;opacity:1"
					d="m 52.916666,33.602083 h 5.027083 l 3.704167,-3.704167 v -1.852083 h -6.879169 l -1.587498,0.425368 -1.058333,3.014215 z"
					id="path63538"
				/><path
					style="fill:#363e43;fill-opacity:1;fill-rule:evenodd;stroke-width:1.2;stroke-linecap:round;stroke-linejoin:round;stroke-miterlimit:3;paint-order:stroke fill markers;opacity:1"
					d="M 52.916666,33.602083 V 36.5125 l -3.175,3.439583 C 47.9978,39.785757 47.30252,38.748834 47.095833,37.30625 l 2.910416,-3.704167 z"
					id="path62478"
				/><path
					style="fill:#4c6371;fill-opacity:1;fill-rule:evenodd;stroke-width:1.2;stroke-linecap:round;stroke-linejoin:round;stroke-miterlimit:3;paint-order:stroke fill markers;opacity:1"
					d="m 31.75,33.602083 15.345833,-5.55625 h 7.672916 c -1.186475,0.537574 -1.755536,1.448744 -1.852083,2.645833 h -2.910417 v 2.910417 c -0.228496,1.550867 -0.571052,3.053112 -2.910416,3.704167 H 31.75 Z"
					id="path62312"
				/><circle
					style="fill:#33c747;fill-opacity:1;fill-rule:evenodd;stroke-width:1.37143;stroke-linecap:round;stroke-linejoin:round;stroke-miterlimit:3;paint-order:stroke fill markers;opacity:1"
					id="path61912"
					cx="30.956249"
					cy="26.19375"
					r="2.116667"
				/><path
					style="fill:#0f1010;fill-opacity:1;fill-rule:evenodd;stroke-width:1.2;stroke-linecap:round;stroke-linejoin:round;stroke-miterlimit:3;paint-order:stroke fill markers;opacity:1"
					d="m 31.75,28.045833 v -2.910417 h 6.085416 v -3.175 h 3.175 v 6.085417 z"
					id="path61744"
				/><path
					style="fill:#4c6371;fill-opacity:1;fill-rule:evenodd;stroke-width:1.2;stroke-linecap:round;stroke-linejoin:round;stroke-miterlimit:3;paint-order:stroke fill markers;opacity:1"
					d="m 28.839583,25.135416 c 1.004462,-1.086276 1.3987,-2.142292 1.322917,-3.175 h 4.497916 c -0.04,-2.663589 1.300989,-3.86327 3.175,-4.497916 v 7.672916 z"
					id="path61802"
				/><path
					style="fill:#363e43;fill-opacity:1;fill-rule:evenodd;stroke-width:1.2;stroke-linecap:round;stroke-linejoin:round;stroke-miterlimit:3;paint-order:stroke fill markers;opacity:1"
					d="M 28.839583,33.602083 H 33.3375 l -4.497917,-2.596872 z"
					id="path61968"
				/><path
					style="fill:#477187;fill-opacity:1;fill-rule:evenodd;stroke-width:1.2;stroke-linecap:round;stroke-linejoin:round;stroke-miterlimit:3;paint-order:stroke fill markers;opacity:1"
					d="m 28.839583,28.045833 v 2.910417 c 1.736908,1.689832 3.233069,2.45055 4.582718,2.645833 h 10.498532 c 1.489836,-0.943445 2.788241,-1.937859 3.175,-3.175 v -2.38125 z"
					id="path61858"
				/><path
					style="fill:#0f1010;fill-opacity:1;fill-rule:evenodd;stroke-width:1.2;stroke-linecap:round;stroke-linejoin:round;stroke-miterlimit:3;paint-order:stroke fill markers;opacity:1"
					d="M 31.75,33.602083 V 37.30625 H 28.839583 V 33.602083 Z"
					id="path61970"
				/><path
					style="fill:#0f1010;fill-opacity:1;fill-rule:evenodd;stroke-width:1.2;stroke-linecap:round;stroke-linejoin:round;stroke-miterlimit:3;paint-order:stroke fill markers;opacity:1"
					d="m 28.839583,33.602083 h -11.90625 v 3.704167 h 11.90625 z"
					id="path61972"
				/><path
					style="fill:#4c6372;fill-opacity:1;fill-rule:evenodd;stroke-width:1.2;stroke-linecap:round;stroke-linejoin:round;stroke-miterlimit:3;paint-order:stroke fill markers;opacity:1"
					d="M 28.839583,33.602083 V 37.30625 H 25.929166 V 33.602083 Z"
					id="path61974"
				/><path
					style="fill:#4c6372;fill-opacity:1;fill-rule:evenodd;stroke-width:1.2;stroke-linecap:round;stroke-linejoin:round;stroke-miterlimit:3;paint-order:stroke fill markers;opacity:1"
					d="M 23.01875,33.602083 V 37.30625 H 20.108333 V 33.602083 Z"
					id="path62140"
				/><path
					style="fill:#4c6372;fill-opacity:1;fill-rule:evenodd;stroke-width:1.2;stroke-linecap:round;stroke-linejoin:round;stroke-miterlimit:3;paint-order:stroke fill markers;opacity:1"
					d="M 17.197917,33.602083 V 37.30625 H 14.2875 v -3.704167 z"
					id="path62144"
				/><path
					style="fill:#363e43;fill-opacity:1;fill-rule:evenodd;stroke-width:1.2;stroke-linecap:round;stroke-linejoin:round;stroke-miterlimit:3;paint-order:stroke fill markers;opacity:1"
					d="m 31.75,37.30625 h 3.175 v 2.38125 h 2.910416 v 6.614583 H 37.30625 l -3.704167,-4.497917 h -4.7625 l -3.175,3.439583 H 7.9374999 C 9.1199143,41.487857 10.612454,38.581803 12.7,37.30625 Z"
					id="path62148"
				/><path
					style="fill:#4c6372;fill-opacity:1;fill-rule:evenodd;stroke-width:1.2;stroke-linecap:round;stroke-linejoin:round;stroke-miterlimit:3;paint-order:stroke fill markers;opacity:1"
					d="m 25.929166,37.30625 1.322917,2.645833 h 0.264583 l 1.322917,-2.645833 z"
					id="path62138"
				/><path
					style="fill:#4c6372;fill-opacity:1;fill-rule:evenodd;stroke-width:1.2;stroke-linecap:round;stroke-linejoin:round;stroke-miterlimit:3;paint-order:stroke fill markers;opacity:1"
					d="m 20.108333,37.30625 1.322917,2.645833 h 0.264583 L 23.01875,37.30625 Z"
					id="path62142"
				/><path
					style="fill:#4c6372;fill-opacity:1;fill-rule:evenodd;stroke-width:1.2;stroke-linecap:round;stroke-linejoin:round;stroke-miterlimit:3;paint-order:stroke fill markers;opacity:1"
					d="m 14.2875,37.30625 1.322917,2.645833 H 15.875 l 1.322917,-2.645833 z"
					id="path62146"
				/><path
					style="fill:#4c6371;fill-opacity:1;fill-rule:evenodd;stroke-width:1.2;stroke-linecap:round;stroke-linejoin:round;stroke-miterlimit:3;paint-order:stroke fill markers;opacity:1"
					d="m 49.741666,39.952083 h 5.55625 L 58.208333,36.5125 h -5.291667 z"
					id="path62534"
				/><path
					style="fill:#0f1010;fill-opacity:1;fill-rule:evenodd;stroke-width:1.2;stroke-linecap:round;stroke-linejoin:round;stroke-miterlimit:3;paint-order:stroke fill markers;opacity:1"
					d="m 34.925,37.30625 h 6.085416 V 39.6875 H 34.925 Z"
					id="path63316"
				/><path
					style="fill:#4c6371;fill-opacity:1;fill-rule:evenodd;stroke-width:1.2;stroke-linecap:round;stroke-linejoin:round;stroke-miterlimit:3;paint-order:stroke fill markers;opacity:1"
					d="m 37.835416,39.6875 h 3.175 l 3.175,2.116666 v 4.497917 h -6.35 z"
					id="path63372"
				/><path
					style="fill:#363e43;fill-opacity:1;fill-rule:evenodd;stroke-width:1.2;stroke-linecap:round;stroke-linejoin:round;stroke-miterlimit:3;paint-order:stroke fill markers;opacity:1"
					d="m 44.185416,41.804166 3.96875,2.116667 -3.175,2.38125 h -0.79375 z"
					id="path63428"
				/><path
					style="fill:#0f1010;fill-opacity:1;fill-rule:evenodd;stroke-width:1.2;stroke-linecap:round;stroke-linejoin:round;stroke-miterlimit:3;paint-order:stroke fill markers;opacity:1"
					d="m 52.916666,30.691666 v 2.910417 h -2.910417 v -2.910417 z"
					id="path62368"
				/><path
					style="fill:#363e43;fill-opacity:1;fill-rule:evenodd;stroke-width:1.2;stroke-linecap:round;stroke-linejoin:round;stroke-miterlimit:3;paint-order:stroke fill markers;opacity:1"
					d="m 41.010416,28.045833 v -2.910417 h 6.085417 v 2.910417 z"
					id="path70412"
				/><path
					style="fill:#0f1010;fill-opacity:1;fill-rule:evenodd;stroke-width:1.2;stroke-linecap:round;stroke-linejoin:round;stroke-miterlimit:3;paint-order:stroke fill markers;opacity:1"
					d="M 47.095833,28.045833 V 16.404166 h 3.175 v 8.73125 h 2.645833 v 2.910417 z"
					id="path70545"
				/><path
					style="fill:#344d5c;fill-opacity:1;fill-rule:evenodd;stroke-width:1.2;stroke-linecap:round;stroke-linejoin:round;stroke-miterlimit:3;paint-order:stroke fill markers;opacity:1"
					d="m 52.916666,28.045833 v -2.910417 h 6.085417 v 2.910417 z"
					id="path70693"
				/><path
					style="fill:#363e43;fill-opacity:1;fill-rule:evenodd;stroke-width:1.2;stroke-linecap:round;stroke-linejoin:round;stroke-miterlimit:3;paint-order:stroke fill markers;opacity:1"
					d="m 50.270833,25.135416 v -3.175 h 8.73125 v 3.175 z"
					id="path70818"
				/><path
					style="fill:#4c6371;fill-opacity:1;fill-rule:evenodd;stroke-width:1.2;stroke-linecap:round;stroke-linejoin:round;stroke-miterlimit:3;paint-order:stroke fill markers;opacity:1"
					d="M 41.010416,25.135416 V 18.25625 c 1.416874,-2.499351 3.210958,-4.545098 6.085417,-5.291667 v 12.170833 z"
					id="path71436"
				/><path
					style="fill:#363e43;fill-opacity:1;fill-rule:evenodd;stroke-width:1.2;stroke-linecap:round;stroke-linejoin:round;stroke-miterlimit:3;paint-order:stroke fill markers;opacity:1"
					d="M 12.170833,28.045833 H 11.90625 V 24.60625 c 0.0025,-0.876651 0.696558,-1.411483 2.116666,-1.5875 0.123398,-4.575903 2.60527,-3.424614 4.497917,-3.704167 -1.191655,0.45126 -1.754402,1.084416 -1.852083,1.852083 v 3.96875 h -2.645834 v 2.910417 z"
					id="path71438"
				/><path
					style="fill:#363e43;fill-opacity:1;fill-rule:evenodd;stroke-width:1.2;stroke-linecap:round;stroke-linejoin:round;stroke-miterlimit:3;paint-order:stroke fill markers;opacity:1"
					d="M 52.916666,16.404166 V 10.31875 c 0.356198,-1.8979571 1.370933,-3.1738623 3.175,-3.7041668 v 9.7895828 z"
					id="path72607"
				/><path
					style="fill:#344d5c;fill-opacity:1;fill-rule:evenodd;stroke-width:1.2;stroke-linecap:round;stroke-linejoin:round;stroke-miterlimit:3;paint-order:stroke fill markers;opacity:1"
					d="m 58.7375,21.960417 2.910416,-1e-6 V 19.05 H 58.7375 Z"
					id="path72609"
				/><path
					style="fill:#0f1010;fill-opacity:1;fill-rule:evenodd;stroke-width:1.2;stroke-linecap:round;stroke-linejoin:round;stroke-miterlimit:3;paint-order:stroke fill markers;opacity:1"
					d="m 59.002083,19.05 h 2.645833 V 16.933333 C 60.556444,16.617986 59.766805,15.61348 59.002083,14.552083 V 10.31875 h -2.910417 v 6.085416 z"
					id="path72611"
				/><path
					style="fill:#4c6371;fill-opacity:1;fill-rule:evenodd;stroke-width:1.2;stroke-linecap:round;stroke-linejoin:round;stroke-miterlimit:3;paint-order:stroke fill markers;opacity:1"
					d="M 50.270833,21.960416 V 12.964583 C 50.43815,11.597731 51.493427,10.8334 52.916666,10.31875 v 6.085416 h 6.085417 v 5.55625 z"
					id="path71242"
				/><path
					style="fill:#5e8471;fill-opacity:1;fill-rule:evenodd;stroke-width:1.2;stroke-linecap:round;stroke-linejoin:round;stroke-miterlimit:3;paint-order:stroke fill markers;opacity:1"
					d="m 61.647916,28.045833 v -2.910417 h 8.466666 v 2.910417 z"
					id="path73717"
				/><path
					style="fill:#363e43;fill-opacity:1;fill-rule:evenodd;stroke-width:1.2;stroke-linecap:round;stroke-linejoin:round;stroke-miterlimit:3;paint-order:stroke fill markers"
					d="m 69.320832,23.283333 h 4.7625 L 76.993749,12.435417 75.935416,10.31875 V 7.1437499 h 2.910416 L 80.168749,4.2333333 H 68.791666 c -1.487954,0.873924 -2.097027,1.8696588 -2.38125,2.9104166 l -0.529167,2.6458333 c 0.526668,2.6888248 2.159006,4.2297748 4.7625,4.7624998 v 1.852083 6.35 z"
					id="path74393"
				/><path
					style="fill:#5e8471;fill-opacity:1;fill-rule:evenodd;stroke-width:1.2;stroke-linecap:round;stroke-linejoin:round;stroke-miterlimit:3;paint-order:stroke fill markers"
					d="m 76.464582,25.135416 v 2.910417 h 8.466667 v -2.910417 z"
					id="path75722"
				/><path
					style="fill:#4c6371;fill-opacity:1;fill-rule:evenodd;stroke-width:1.2;stroke-linecap:round;stroke-linejoin:round;stroke-miterlimit:3;paint-order:stroke fill markers"
					d="M 76.464582,25.135416 75.259368,20.6375 76.199999,12.964583 78.845832,10.31875 h 5.291667 2.38125 v 1.322917 h -1.852083 v 6.614583 h 8.731249 v 6.879166 z"
					id="path76123"
				/><path
					style="fill:#0f1010;fill-opacity:1;fill-rule:evenodd;stroke-width:1.2;stroke-linecap:round;stroke-linejoin:round;stroke-miterlimit:3;paint-order:stroke fill markers"
					d="m 76.464582,25.135416 v -5.55625 c 0.290145,-2.558663 1.264073,-5.355432 2.38125,-8.202083 V 10.31875 h -2.910416 v 2.116667 c -1.642192,3.330496 -3.194216,6.677839 -3.175,10.318749 l 0.529166,2.38125 z"
					id="path74391"
				/><path
					style="fill:#ad9f74;fill-opacity:1;fill-rule:evenodd;stroke-width:1.2;stroke-linecap:round;stroke-linejoin:round;stroke-miterlimit:3;paint-order:stroke fill markers;opacity:1"
					d="m 71.437499,28.045833 2.38125,-3.439583 c 0.305931,-1.317455 -0.463537,-2.127652 -1.852083,-2.645834 -1.331893,0.440908 -2.657509,0.88724 -1.852084,3.175 z"
					id="path73982"
				/><path
					style="fill:#4c6371;fill-opacity:1;fill-rule:evenodd;stroke-width:1.2;stroke-linecap:round;stroke-linejoin:round;stroke-miterlimit:3;paint-order:stroke fill markers"
					d="M 84.402082,10.31875 C 84.756289,9.0251001 85.288386,7.895245 86.518749,7.4083332 H 109.5375 l -2.91042,2.9104168 h -4.7625 v 3.439583 l -2.381248,2.645833 h -8.202083 c -3.148384,-0.900838 -4.551692,-2.569367 -4.7625,-4.762499 z"
					id="path76179"
				/><path
					style="fill:#4c6371;fill-opacity:1;fill-rule:evenodd;stroke-width:1.2;stroke-linecap:round;stroke-linejoin:round;stroke-miterlimit:3;paint-order:stroke fill markers"
					d="m 96.043749,16.404166 h -5.027083 v 4.7625 z"
					id="path76237"
				/><path
					style="fill:#5e8471;fill-opacity:1;fill-rule:evenodd;stroke-width:1.2;stroke-linecap:round;stroke-linejoin:round;stroke-miterlimit:3;paint-order:stroke fill markers"
					d="m 88.106249,25.135416 v 6.879167 c 0.529861,1.094371 1.955403,1.378575 3.175001,1.5875 v -8.466666 z"
					id="path77560"
				/><path
					style="fill:#363e43;fill-opacity:1;fill-rule:evenodd;stroke-width:1.2;stroke-linecap:round;stroke-linejoin:round;stroke-miterlimit:3;paint-order:stroke fill markers"
					d="m 93.927082,33.602083 h 6.879168 l 5.02708,3.439583 h 2.91042 l 2.38125,3.704167 v -9.260417 h -7.40833 c -0.42462,-1.861249 -0.89095,-3.709517 -4.762505,-4.497916 v -2.116667 h 9.260415 v -2.38125 C 107.9592,21.112901 106.71132,19.992551 104.775,19.05 h -9.789585 l -3.704166,3.439583 z"
					id="path78055"
				/><path
					style="fill:#344d5c;fill-opacity:1;fill-rule:evenodd;stroke-width:1.2;stroke-linecap:round;stroke-linejoin:round;stroke-miterlimit:3;paint-order:stroke fill markers"
					d="m 91.016666,33.602083 h 2.910416 v -8.466667 h -2.910416 z"
					id="path77976"
				/><path
					style="fill:#0f1010;fill-opacity:1;fill-rule:evenodd;stroke-width:1.2;stroke-linecap:round;stroke-linejoin:round;stroke-miterlimit:3;paint-order:stroke fill markers"
					d="M 99.483332,16.404166 V 19.05 h -3.439583 c -1.086271,0.35551 -1.765365,1.085396 -2.116667,2.116666 v 3.96875 h -2.910416 v -5.027083 c 1.027302,-1.83694 2.377021,-3.167991 4.233333,-3.704167 z"
					id="path76235"
				/><path
					style="fill:#ad9f74;fill-opacity:1;fill-rule:evenodd;stroke-width:1.2;stroke-linecap:round;stroke-linejoin:round;stroke-miterlimit:3;paint-order:stroke fill markers"
					d="m 88.635416,27.78125 c 1.903362,-1.260863 2.810182,-2.493812 2.910416,-3.704167 -0.07815,-1.126361 -0.779684,-1.766225 -1.852083,-2.116667 -1.57531,0.374183 -2.067732,1.160942 -2.116667,2.116667 0.935116,1.449911 1.47027,2.752025 1.058334,3.704167 z"
					id="path77351"
				/><path
					style="fill:#363e43;fill-opacity:1;fill-rule:evenodd;stroke-width:1.2;stroke-linecap:round;stroke-linejoin:round;stroke-miterlimit:3;paint-order:stroke fill markers"
					d="m 105.56875,31.485416 v -6.614583 h 2.64583 v 1.058333 c 2.02657,0.254456 2.41348,1.482824 2.91042,2.645834 v 2.910416 z"
					id="path78885"
				/><path
					style="fill:#ad9f74;fill-opacity:1;fill-rule:evenodd;stroke-width:1.2;stroke-linecap:round;stroke-linejoin:round;stroke-miterlimit:3;paint-order:stroke fill markers"
					d="m 94.191667,35.71875 c 1.903362,-1.260863 2.810182,-2.493812 2.910416,-3.704167 -0.07815,-1.126361 -0.779684,-1.766225 -1.852083,-2.116667 -1.57531,0.374183 -2.067732,1.160942 -2.116667,2.116667 0.935116,1.449911 1.47027,2.752025 1.058334,3.704167 z"
					id="path78887"
				/><path
					style="fill:#4c6371;fill-opacity:1;fill-rule:evenodd;stroke-width:1.2;stroke-linecap:round;stroke-linejoin:round;stroke-miterlimit:3;paint-order:stroke fill markers"
					d="m 105.83333,45.772916 v 6.614583 h -3.175 v -6.614583 z"
					id="path78895"
				/><path
					style="fill:#344d5c;fill-opacity:1;fill-rule:evenodd;stroke-width:1.2;stroke-linecap:round;stroke-linejoin:round;stroke-miterlimit:3;paint-order:stroke fill markers"
					d="m 73.024999,51.064583 v -3.175 h 12.964583 v 3.175 z"
					id="path80795"
				/><path
					style="fill:#363e43;fill-opacity:1;fill-rule:evenodd;stroke-width:1.2;stroke-linecap:round;stroke-linejoin:round;stroke-miterlimit:3;paint-order:stroke fill markers"
					d="m 73.024999,51.064583 h 17.991667 v 12.435416 l -2.116667,2.116667 h -5.820833 v -1.322917 h 1.852083 v -6.614583 h -6.614583 -5.291667 z"
					id="path85651"
				/><path
					style="fill:#0f1010;fill-opacity:1;fill-rule:evenodd;stroke-width:1.2;stroke-linecap:round;stroke-linejoin:round;stroke-miterlimit:3;paint-order:stroke fill markers"
					d="m 88.106249,51.064583 v -5.820834 h -3.175 v 5.820834 z"
					id="path79254"
				/><path
					style="fill:#ad9f74;fill-opacity:1;fill-rule:evenodd;stroke-width:1.2;stroke-linecap:round;stroke-linejoin:round;stroke-miterlimit:3;paint-order:stroke fill markers"
					d="m 87.312499,50.006249 c 0.384783,-1.209069 1.18638,-1.763869 2.116667,-2.116666 1.647483,0.283662 2.043696,1.244932 2.116666,2.38125 -0.450321,1.269462 -1.082349,2.501134 -1.852083,3.704166 -0.491108,-0.908881 -0.314257,-1.960274 -1.852083,-2.645833 -0.267992,-0.420253 -0.384009,-0.874881 -0.529167,-1.322917 z"
					id="path79465"
				/><path
					style="fill:#0f1010;fill-opacity:1;fill-rule:evenodd;stroke-width:1.2;stroke-linecap:round;stroke-linejoin:round;stroke-miterlimit:3;paint-order:stroke fill markers"
					d="m 73.025,51.064583 v 10.31875 l 3.704166,4.497916 h 2.38125 v 3.175 h -2.910417 v -0.79375 l -6.085417,-6.614583 10e-7,-10.583333 z"
					id="path80546"
				/><path
					style="fill:#0f1010;fill-opacity:1;fill-rule:evenodd;stroke-width:1.2;stroke-linecap:round;stroke-linejoin:round;stroke-miterlimit:3;paint-order:stroke fill markers;opacity:1"
					d="m 70.114583,51.064583 -10e-7,-3.175 h -3.439583 l 10e-7,3.175 z"
					id="path80686"
				/><path
					style="fill:#0f1010;fill-opacity:1;fill-rule:evenodd;stroke-width:1.2;stroke-linecap:round;stroke-linejoin:round;stroke-miterlimit:3;paint-order:stroke fill markers;opacity:1"
					d="m 50.006249,51.064583 v 11.90625 h -2.910416 v -11.90625 z"
					id="path80688"
				/><path
					style="fill:#0f1010;fill-opacity:1;fill-rule:evenodd;stroke-width:1.2;stroke-linecap:round;stroke-linejoin:round;stroke-miterlimit:3;paint-order:stroke fill markers"
					d="m 56.091666,78.052082 h -3.439583 l -8.466667,-8.466666 v -3.704167 h -5.820833 v -2.910416 h 8.73125 v 5.556249 z"
					id="path80690"
				/><path
					style="fill:#0f1010;fill-opacity:1;fill-rule:evenodd;stroke-width:1.2;stroke-linecap:round;stroke-linejoin:round;stroke-miterlimit:3;paint-order:stroke fill markers"
					d="m 26.458333,69.056249 v -5.820833 l 2.645833,2.645833 H 34.925 v 3.175 z"
					id="path80692"
				/><path
					style="fill:#5e8471;fill-opacity:1;fill-rule:evenodd;stroke-width:1.2;stroke-linecap:round;stroke-linejoin:round;stroke-miterlimit:3;paint-order:stroke fill markers"
					d="M 17.727083,83.872916 H 9.7895832 l -3.7041666,3.704166 v 16.404168 l 4.4979164,3.175 h 9.525 l 2.645833,-3.175 V 89.429166 Z"
					id="path81241"
				/><path
					style="fill:#0f1010;fill-opacity:1;fill-rule:evenodd;stroke-width:1.2;stroke-linecap:round;stroke-linejoin:round;stroke-miterlimit:3;paint-order:stroke fill markers"
					d="m 20.6375,83.872916 v -2.645834 h -2.910417 v 2.645834 z"
					id="path80694"
				/><path
					style="fill:#4c6371;fill-opacity:1;fill-rule:evenodd;stroke-width:1.2;stroke-linecap:round;stroke-linejoin:round;stroke-miterlimit:3;paint-order:stroke fill markers"
					d="m 70.114582,54.768749 v 6.879167 l 6.085417,6.614583 v 3.175 c -0.66878,1.429162 -1.438864,2.761891 -3.175,3.175 h -4.7625 l -6.415804,11.1125 -3.207904,1.852083 v -9.525 h -2.547125 l -8.995833,-9.525 v -5.556249 h 8.202083 v 1.852083 c 2.775237,0.526291 4.221147,2.240298 4.7625,4.7625 h 1.852083 v -6.879167 -7.9375 z"
					id="path81261"
				/><path
					style="fill:#0f1010;fill-opacity:1;fill-rule:evenodd;stroke-width:1.2;stroke-linecap:round;stroke-linejoin:round;stroke-miterlimit:3;paint-order:stroke fill markers"
					d="m 25.929166,89.958332 v -3.175 h 16.404167 l 3.439583,-3.439583 h 6.614583 v 3.704167 h -7.408333 l -2.645833,2.910416 z"
					id="path80696"
				/><path
					style="fill:#5e8471;fill-opacity:1;fill-rule:evenodd;stroke-width:1.2;stroke-linecap:round;stroke-linejoin:round;stroke-miterlimit:3;paint-order:stroke fill markers"
					d="m 52.3875,116.68125 -1e-6,-3.70417 h 3.175 l 10e-7,3.70417 z"
					id="path86596"
				/><path
					style="fill:#4c6371;fill-opacity:1;fill-rule:evenodd;stroke-width:1.2;stroke-linecap:round;stroke-linejoin:round;stroke-miterlimit:3;paint-order:stroke fill markers"
					d="m 29.104166,100.80625 h 14.2875 V 101.6 h 1.852083 c 0.540591,-2.833698 2.379652,-4.231138 4.7625,-5.027085 l 1e-6,-1.852082 12.170833,0.264582 L 52.387499,101.6 v 11.37708 H 37.835416 l -8.73125,-8.99583 z"
					id="path81265"
				/><path
					style="fill:#0f1010;fill-opacity:1;fill-rule:evenodd;stroke-width:1.2;stroke-linecap:round;stroke-linejoin:round;stroke-miterlimit:3;paint-order:stroke fill markers"
					d="m 25.929166,103.98125 v -3.175 h 3.175 v 3.175 z"
					id="path80698"
				/><path
					style="fill:#0f1010;fill-opacity:1;fill-rule:evenodd;stroke-width:1.2;stroke-linecap:round;stroke-linejoin:round;stroke-miterlimit:3;paint-order:stroke fill markers"
					d="m 25.929166,103.98125 v 3.175 h -5.820833 v -3.175 z"
					id="path80700"
				/><path
					style="fill:#0f1010;fill-opacity:1;fill-rule:evenodd;stroke-width:1.2;stroke-linecap:round;stroke-linejoin:round;stroke-miterlimit:3;paint-order:stroke fill markers"
					d="m 37.835416,115.8875 v -2.91042 h 3.175 v 2.91042 z"
					id="path80702"
				/><path
					style="fill:#363e43;fill-opacity:1;fill-rule:evenodd;stroke-width:1.2;stroke-linecap:round;stroke-linejoin:round;stroke-miterlimit:3;paint-order:stroke fill markers"
					d="M 55.562499,112.97708 V 101.6 l 6.614584,-6.614585 1.852083,-1.852083 h 11.641666 v 9.524998 l -2.910416,-0.26458 h -2.38125 l 10e-7,-0.26458 c -3.277565,-0.62359 -4.136939,-2.626369 -4.762501,-4.762505 h -1.5875 V 115.8875 h -8.466667 z"
					id="path85872"
				/><path
					style="fill:#0f1010;fill-opacity:1;fill-rule:evenodd;stroke-width:1.2;stroke-linecap:round;stroke-linejoin:round;stroke-miterlimit:3;paint-order:stroke fill markers"
					d="m 64.029166,115.8875 h 3.175 v 3.43958 h -3.175 z"
					id="path80704"
				/><path
					style="fill:#4c6371;fill-opacity:1;fill-rule:evenodd;stroke-width:1.2;stroke-linecap:round;stroke-linejoin:round;stroke-miterlimit:3;paint-order:stroke fill markers"
					d="m 83.872916,97.366665 c 0.55489,2.426513 1.878324,4.228575 4.7625,4.762505 v 1.85208 11.90625 h 7.672916 l 4.277208,-7.40833 -6.658458,-14.022921 -2.645833,-1.322917 h -7.408333 z"
					id="path81279"
				/><path
					style="fill:#5e8471;fill-opacity:1;fill-rule:evenodd;stroke-width:1.2;stroke-linecap:round;stroke-linejoin:round;stroke-miterlimit:3;paint-order:stroke fill markers"
					d="m 67.204166,115.8875 h 20.902083 v 3.175 c -0.378728,1.57565 -0.550624,3.28704 -2.291361,3.96875 H 70.908332 c -1.769906,-0.84506 -3.155186,-1.97016 -3.704166,-3.70417 z"
					id="path81247"
				/><path
					style="fill:#4c6371;fill-opacity:1;fill-rule:evenodd;stroke-width:1.2;stroke-linecap:round;stroke-linejoin:round;stroke-miterlimit:3;paint-order:stroke fill markers"
					d="m 88.635416,115.8875 v -11.90625 h -6.614584 v -6.614585 h 2.116667 V 93.13333 h -3.175 c -1.057665,0.123327 -1.440553,1.003774 -1.852083,1.852085 l -3.207904,5.556255 -1.554596,7.9375 4.7625,7.40833 z"
					id="path81281"
				/><path
					style="fill:#0f1010;fill-opacity:1;fill-rule:evenodd;stroke-width:1.2;stroke-linecap:round;stroke-linejoin:round;stroke-miterlimit:3;paint-order:stroke fill markers"
					d="m 88.106249,119.0625 v -3.175 h 2.910417 v 3.175 z"
					id="path80706"
				/><path
					style="fill:#344d5c;fill-opacity:1;fill-rule:evenodd;stroke-width:1.15292;stroke-linecap:round;stroke-linejoin:round;stroke-miterlimit:3;paint-order:stroke fill markers"
					d="m 79.110416,112.7125 v 3.175 h -3.174999 v -3.43958 h 3.174999 z"
					id="path81164"
				/><path
					style="fill:#0f1010;fill-opacity:1;fill-rule:evenodd;stroke-width:1.2;stroke-linecap:round;stroke-linejoin:round;stroke-miterlimit:3;paint-order:stroke fill markers"
					d="m 79.110416,112.7125 v -2.64583 h -3.175 v 2.38125 z"
					id="path80708"
				/><path
					style="fill:#0f1010;fill-opacity:1;fill-rule:evenodd;stroke-width:1.2;stroke-linecap:round;stroke-linejoin:round;stroke-miterlimit:3;paint-order:stroke fill markers"
					d="m 75.935416,110.06667 v -6.61459 l 3.175,-3.175 v -5.291665 h -3.439584 v 4.497917 l -2.910416,2.910418 v 7.67292 z"
					id="path80710"
				/><path
					style="fill:#0f1010;fill-opacity:1;fill-rule:evenodd;stroke-width:1.2;stroke-linecap:round;stroke-linejoin:round;stroke-miterlimit:3;paint-order:stroke fill markers"
					d="M 55.562499,112.97708 V 101.6 l 6.614584,-6.614585 H 59.266666 L 52.387499,101.6 v 11.37708 z"
					id="path80712"
				/><path
					style="fill:#363e43;fill-opacity:1;fill-rule:evenodd;stroke-width:1.2;stroke-linecap:round;stroke-linejoin:round;stroke-miterlimit:3;paint-order:stroke fill markers"
					d="m 105.03958,87.312499 h -5.291665 l -5.820833,3.439583 v 8.202083 l 6.415808,11.112505 h 5.49044 V 98.424999 h -6.614581 v -6.614583 h 1.852081 z"
					id="path85878"
				/><path
					style="fill:#0f1010;fill-opacity:1;fill-rule:evenodd;stroke-width:1.2;stroke-linecap:round;stroke-linejoin:round;stroke-miterlimit:3;paint-order:stroke fill markers"
					d="m 107.95,112.97708 v -2.91041 h -2.91042 v 2.91041 z"
					id="path80716"
				/><path
					style="fill:#5e8471;fill-opacity:1;fill-rule:evenodd;stroke-width:1.2;stroke-linecap:round;stroke-linejoin:round;stroke-miterlimit:3;paint-order:stroke fill markers"
					d="m 91.016666,119.0625 v 1.5875 c 0.567908,1.09607 1.217545,2.08274 2.381249,2.38125 h 4.497917 l 7.143748,-5.55625 v -1.5875 -5.82083 h -9.260415 l -1.134319,4.23333 -3.62818,1.5875 z"
					id="path81249"
				/><path
					style="fill:#363e43;fill-opacity:1;fill-rule:evenodd;stroke-width:1.2;stroke-linecap:round;stroke-linejoin:round;stroke-miterlimit:3;paint-order:stroke fill markers"
					d="m 107.95,110.06667 v -1.32292 l 9.78958,-9.789585 v -3.175 h -4.23333 l -8.46667,-8.466666 -3.96875,4.497917 c 0.53481,2.499143 2.34259,3.895872 4.7625,4.762499 v 13.493755 z"
					id="path85876"
				/><path
					style="fill:#0f1010;fill-opacity:1;fill-rule:evenodd;stroke-width:1.2;stroke-linecap:round;stroke-linejoin:round;stroke-miterlimit:3;paint-order:stroke fill markers"
					d="m 98.954165,110.06667 h 3.175005 v -2.64584 h -3.175005 z"
					id="path80718"
				/><path
					style="fill:#0f1010;fill-opacity:1;fill-rule:evenodd;stroke-width:1.2;stroke-linecap:round;stroke-linejoin:round;stroke-miterlimit:3;paint-order:stroke fill markers"
					d="m 98.954165,107.42083 h -2.645833 l -5.04099,-8.731248 v -5.55625 h 2.65974 v 5.820833 z"
					id="path80720"
				/><path
					style="fill:#4c6371;fill-opacity:1;fill-rule:evenodd;stroke-width:1.2;stroke-linecap:round;stroke-linejoin:round;stroke-miterlimit:3;paint-order:stroke fill markers"
					d="m 120.65,93.133332 v -5.820833 h -11.1125 l 5.29167,6.085416 5.55625,0.264584 z"
					id="path81283"
				/><path
					style="fill:#0f1010;fill-opacity:1;fill-rule:evenodd;stroke-width:1.2;stroke-linecap:round;stroke-linejoin:round;stroke-miterlimit:3;paint-order:stroke fill markers"
					d="m 120.65,95.779165 v -2.645833 h -5.55625 l -5.55625,-5.820833 h -4.49792 l 8.46667,8.466666 z"
					id="path80722"
				/><path
					style="fill:#363e43;fill-opacity:1;fill-rule:evenodd;stroke-width:1.2;stroke-linecap:round;stroke-linejoin:round;stroke-miterlimit:3;paint-order:stroke fill markers"
					d="m 120.65,71.702082 v -8.731249 h -5.55625 c -0.62836,0.0791 -1.25851,0.113264 -1.85208,1.0693 -0.43421,3.181044 -2.37729,4.528074 -5.02709,5.016116 v 2.645833 z"
					id="path85880"
				/><path
					style="fill:#0f1010;fill-opacity:1;fill-rule:evenodd;stroke-width:1.2;stroke-linecap:round;stroke-linejoin:round;stroke-miterlimit:3;paint-order:stroke fill markers"
					d="m 120.65,71.702082 v 2.910417 h -5.55625 v -2.910417 z"
					id="path80724"
				/><path
					style="fill:#0f1010;fill-opacity:1;fill-rule:evenodd;stroke-width:1.25336;stroke-linecap:round;stroke-linejoin:round;stroke-miterlimit:3;paint-order:stroke fill markers"
					d="m 120.65,59.795833 v 3.175 h -5.55625 v -3.175 z"
					id="path80726"
				/><path
					style="fill:#0f1010;fill-opacity:1;fill-rule:evenodd;stroke-width:1.25336;stroke-linecap:round;stroke-linejoin:round;stroke-miterlimit:3;paint-order:stroke fill markers"
					d="m 120.65,47.889583 v 3.175 h -5.55625 v -3.175 z"
					id="path80728"
				/><path
					style="fill:#344d5c;fill-opacity:1;fill-rule:evenodd;stroke-width:1.2;stroke-linecap:round;stroke-linejoin:round;stroke-miterlimit:3;paint-order:stroke fill markers;opacity:1"
					d="M 70.114582,51.064583 H 50.006249 v 3.704166 h 20.108333 z"
					id="path81142"
				/><path
					style="fill:#344d5c;fill-opacity:1;fill-rule:evenodd;stroke-width:1.2;stroke-linecap:round;stroke-linejoin:round;stroke-miterlimit:3;paint-order:stroke fill markers;opacity:1"
					d="m 34.925,65.881249 h 3.439583 V 62.970833 H 34.925 Z"
					id="path81144"
				/><path
					style="fill:#344d5c;fill-opacity:1;fill-rule:evenodd;stroke-width:1.2;stroke-linecap:round;stroke-linejoin:round;stroke-miterlimit:3;paint-order:stroke fill markers;opacity:1"
					d="M 26.458333,62.706249 V 55.297916 H 23.01875 v 7.408333 z"
					id="path81146"
				/><path
					style="fill:#344d5c;fill-opacity:1;fill-rule:evenodd;stroke-width:1.2;stroke-linecap:round;stroke-linejoin:round;stroke-miterlimit:3;paint-order:stroke fill markers"
					d="m 17.727083,81.227082 h -5.55625 v 2.645834 h 5.55625 z"
					id="path81150"
				/><path
					style="fill:#344d5c;fill-opacity:1;fill-rule:evenodd;stroke-width:1.2;stroke-linecap:round;stroke-linejoin:round;stroke-miterlimit:3;paint-order:stroke fill markers"
					d="m 17.727083,83.872916 h 5.55625 l 1.058333,2.910416 h 1.5875 v 17.197918 h -3.175 V 89.429166 Z"
					id="path81152"
				/><path
					style="fill:#5e8471;fill-opacity:1;fill-rule:evenodd;stroke-width:1.2;stroke-linecap:round;stroke-linejoin:round;stroke-miterlimit:3;paint-order:stroke fill markers"
					d="m 20.108333,107.15625 h 5.820833 l 6.085417,5.82083 h 5.820833 v 7.40834 l -2.645833,2.64583 h -10.31875 l -13.49375,-8.46667 v -4.49791 h 8.73125 z"
					id="path81243"
				/><path
					style="fill:#344d5c;fill-opacity:1;fill-rule:evenodd;stroke-width:1.2;stroke-linecap:round;stroke-linejoin:round;stroke-miterlimit:3;paint-order:stroke fill markers"
					d="M 20.108333,107.15625 H 14.2875 v 2.91042 h 5.820833 z"
					id="path81154"
				/><path
					style="fill:#344d5c;fill-opacity:1;fill-rule:evenodd;stroke-width:1.2;stroke-linecap:round;stroke-linejoin:round;stroke-miterlimit:3;paint-order:stroke fill markers"
					d="m 25.929166,103.98125 h 3.175 l 8.73125,8.99583 h -5.820833 l -6.085417,-5.82083 z"
					id="path81156"
				/><path
					style="fill:#5e8471;fill-opacity:1;fill-rule:evenodd;stroke-width:1.2;stroke-linecap:round;stroke-linejoin:round;stroke-miterlimit:3;paint-order:stroke fill markers"
					d="m 41.010416,115.8875 v 3.43958 l 5.027083,3.70417 h 16.139584 l 1.852083,-1.85208 v -5.29167 z"
					id="path81245"
				/><path
					style="fill:#344d5c;fill-opacity:1;fill-rule:evenodd;stroke-width:1.2;stroke-linecap:round;stroke-linejoin:round;stroke-miterlimit:3;paint-order:stroke fill markers"
					d="m 37.835416,115.8875 h 3.175 v 3.43958 h -3.175 z"
					id="path81158"
				/><path
					style="fill:#344d5c;fill-opacity:1;fill-rule:evenodd;stroke-width:1.2;stroke-linecap:round;stroke-linejoin:round;stroke-miterlimit:3;paint-order:stroke fill markers"
					d="m 41.010416,115.8875 v -2.91042 h 11.377083 v 2.91042 z"
					id="path81160"
				/><path
					style="fill:#344d5c;fill-opacity:1;fill-rule:evenodd;stroke-width:1.2;stroke-linecap:round;stroke-linejoin:round;stroke-miterlimit:3;paint-order:stroke fill markers"
					d="m 55.562499,112.97708 h 5.55625 v 2.91042 h -5.55625 z"
					id="path81162"
				/><path
					style="fill:#344d5c;fill-opacity:1;fill-rule:evenodd;stroke-width:1.2;stroke-linecap:round;stroke-linejoin:round;stroke-miterlimit:3;paint-order:stroke fill markers"
					d="m 91.016666,115.8875 v -2.91042 h 5.027083 v 2.91042 z"
					id="path81166"
				/><path
					style="fill:#344d5c;fill-opacity:1;fill-rule:evenodd;stroke-width:1.2;stroke-linecap:round;stroke-linejoin:round;stroke-miterlimit:3;paint-order:stroke fill markers"
					d="m 105.03958,112.97708 v 2.91042 H 107.95 v -2.91042 z"
					id="path81168"
				/><path
					style="fill:#344d5c;fill-opacity:1;fill-rule:evenodd;stroke-width:1.2;stroke-linecap:round;stroke-linejoin:round;stroke-miterlimit:3;paint-order:stroke fill markers"
					d="m 107.95,110.06667 v -1.32292 l 9.78958,-9.789585 v -3.175 H 120.65 v 4.233335 l -9.78958,10.05417 z"
					id="path81170"
				/><path
					style="fill:#344d5c;fill-opacity:1;fill-rule:evenodd;stroke-width:1.2;stroke-linecap:round;stroke-linejoin:round;stroke-miterlimit:3;paint-order:stroke fill markers"
					d="M 120.65,95.779165 V 93.13333 h 1.5875 v 2.645835 z"
					id="path81172"
				/><path
					style="fill:#344d5c;fill-opacity:1;fill-rule:evenodd;stroke-width:1.2;stroke-linecap:round;stroke-linejoin:round;stroke-miterlimit:3;paint-order:stroke fill markers"
					d="m 120.65,74.612499 h 1.5875 V 71.702082 H 120.65 Z"
					id="path81174"
				/><path
					style="fill:#344d5c;fill-opacity:1;fill-rule:evenodd;stroke-width:1.2;stroke-linecap:round;stroke-linejoin:round;stroke-miterlimit:3;paint-order:stroke fill markers"
					d="m 120.65,62.970833 v -3.175 h 1.5875 v 3.175 z"
					id="path81176"
				/><path
					style="fill:#5e8471;fill-opacity:1;fill-rule:evenodd;stroke-width:1.2;stroke-linecap:round;stroke-linejoin:round;stroke-miterlimit:3;paint-order:stroke fill markers"
					d="m 112.18333,44.979166 c 2.8136,-6.03145 5.89772,-11.861974 6.08542,-19.84375 h 2.91042 v 18.520833 l -3.43959,1.985844 z"
					id="path83888"
				/><path
					style="fill:#344d5c;fill-opacity:1;fill-rule:evenodd;stroke-width:1.2;stroke-linecap:round;stroke-linejoin:round;stroke-miterlimit:3;paint-order:stroke fill markers"
					d="m 120.65,51.064583 h 1.5875 V 44.979166 H 120.65 Z"
					id="path81178"
				/><path
					style="fill:#5e8471;fill-opacity:1;fill-rule:evenodd;stroke-width:1.2;stroke-linecap:round;stroke-linejoin:round;stroke-miterlimit:3;paint-order:stroke fill markers;opacity:1"
					d="m 50.006249,51.064583 v -3.704167 c 0.541741,-1.404591 1.75575,-2.118418 3.666175,-2.116667 h 13.002575 v 5.820834 z"
					id="path81182"
				/><path
					style="fill:#5e8471;fill-opacity:1;fill-rule:evenodd;stroke-width:1.2;stroke-linecap:round;stroke-linejoin:round;stroke-miterlimit:3;paint-order:stroke fill markers"
					d="m 107.95,112.97708 v -2.91041 h 2.91042 L 120.65,100.0125 v -4.233337 h 3.175 v 7.143757 l -10.05417,10.05416 z"
					id="path81251"
				/><path
					style="fill:#4c6371;fill-opacity:1;fill-rule:evenodd;stroke-width:1.2;stroke-linecap:round;stroke-linejoin:round;stroke-miterlimit:3;paint-order:stroke fill markers"
					d="m 105.03958,87.312499 4.23334,-6.085417 h 2.91041 V 74.612499 H 120.65 v 6.085417 h -1.85208 c -1.08583,3.198378 -2.82933,4.207489 -4.7625,4.7625 v 1.852083 z"
					id="path81285"
				/><path
					style="fill:#5e8471;fill-opacity:1;fill-rule:evenodd;stroke-width:1.2;stroke-linecap:round;stroke-linejoin:round;stroke-miterlimit:3;paint-order:stroke fill markers"
					d="M 120.65,93.133332 V 74.612499 h 1.5875 c 1.08922,0.20677 1.3797,0.873338 1.5875,1.5875 v 15.610417 c -0.17524,1.006725 -0.73558,1.397866 -1.5875,1.322916 z"
					id="path81253"
				/><path
					style="fill:#5e8471;fill-opacity:1;fill-rule:evenodd;stroke-width:1.2;stroke-linecap:round;stroke-linejoin:round;stroke-miterlimit:3;paint-order:stroke fill markers"
					d="m 120.65,71.702082 h 1.5875 c 0.81814,-0.18351 1.41059,-0.636987 1.5875,-1.5875 v -5.291666 c -0.24119,-1.062152 -0.92519,-1.440365 -1.5875,-1.852083 H 120.65 Z"
					id="path81255"
				/><path
					style="fill:#4c6371;fill-opacity:1;fill-rule:evenodd;stroke-width:1.2;stroke-linecap:round;stroke-linejoin:round;stroke-miterlimit:3;paint-order:stroke fill markers"
					d="m 120.65,59.795833 v -8.73125 h -5.55625 c -0.87737,4.015994 -3.48304,6.234305 -5.82083,8.73125 z"
					id="path81287"
				/><path
					style="fill:#5e8471;fill-opacity:1;fill-rule:evenodd;stroke-width:1.2;stroke-linecap:round;stroke-linejoin:round;stroke-miterlimit:3;paint-order:stroke fill markers"
					d="m 120.65,59.795833 h 1.5875 c 0.99375,-0.287319 1.39774,-0.769694 1.5875,-1.322917 v -5.55625 c -0.1756,-0.833342 -0.75103,-1.422442 -1.5875,-1.852083 H 120.65 Z"
					id="path81257"
				/><path
					style="fill:#4c6371;fill-opacity:1;fill-rule:evenodd;stroke-width:1.2;stroke-linecap:round;stroke-linejoin:round;stroke-miterlimit:3;paint-order:stroke fill markers;opacity:1"
					d="M 50.006249,62.970833 H 63.764583 V 54.768749 H 50.006249 Z"
					id="path81263"
				/><path
					style="fill:#4c6371;fill-opacity:1;fill-rule:evenodd;stroke-width:1.2;stroke-linecap:round;stroke-linejoin:round;stroke-miterlimit:3;paint-order:stroke fill markers"
					d="m 82.285416,89.693749 v -1.5875 c 3.052189,-0.597482 3.739918,-2.066272 3.96875,-3.704167 l 1.5875,-0.79375 v 6.085417 z"
					id="path81269"
				/><path
					style="fill:#4c6371;fill-opacity:1;fill-rule:evenodd;stroke-width:1.2;stroke-linecap:round;stroke-linejoin:round;stroke-miterlimit:3;paint-order:stroke fill markers"
					d="M 103.58437,80.9625 V 79.375 c 3.05219,-0.597482 3.34305,-1.801688 3.57188,-3.439583 h 1.05833 V 80.9625 Z"
					id="path81273"
				/><path
					style="fill:#363e43;fill-opacity:1;fill-rule:evenodd;stroke-width:1.2;stroke-linecap:round;stroke-linejoin:round;stroke-miterlimit:3;paint-order:stroke fill markers"
					d="m 108.47917,47.889583 3.70416,-2.910417 h 5.82084 V 42.333333 H 120.65 V 29.104166 c 0.002,-0.230303 -0.10421,-0.896907 0.26458,-3.96875 0.44091,-4.402504 1.408,-8.812184 2.91042,-13.229166 v 33.072916 h -3.175 v 2.910417 z"
					id="path83740"
				/><path
					style="fill:#363e43;fill-opacity:1;fill-rule:evenodd;stroke-width:1.2;stroke-linecap:round;stroke-linejoin:round;stroke-miterlimit:3;paint-order:stroke fill markers"
					d="m 67.204166,89.958332 v -2.910416 c 3.837312,-1.172532 6.001437,-3.734024 7.14375,-7.14375 l 1.322916,-0.529167 v 10.583333 z"
					id="path85868"
				/><path
					style="fill:#363e43;fill-opacity:1;fill-rule:evenodd;stroke-width:1.2;stroke-linecap:round;stroke-linejoin:round;stroke-miterlimit:3;paint-order:stroke fill markers"
					d="m 94.456249,87.047916 v -1.5875 c 1.927173,-0.480491 3.50551,-1.447312 3.96875,-3.96875 l 1.322916,-0.529167 v 6.085417 z"
					id="path85870"
				/><path
					style="fill:#ad9f74;fill-opacity:1;fill-rule:evenodd;stroke-width:1.2;stroke-linecap:round;stroke-linejoin:round;stroke-miterlimit:3;paint-order:stroke fill markers"
					d="m 70.643749,52.916666 c 1.257575,-0.416538 2.626249,-0.721094 3.175,-1.852083 0.565332,0 1.087761,0 1.5875,0 0.941205,0.548209 1.010669,1.353353 1.222058,2.116666 -0.306943,0.798797 -0.930116,1.412762 -1.852084,1.852084 -1.629904,-0.119862 -2.826787,-1.244497 -4.132474,-2.116667 z"
					id="path85882"
				/><path
					style="fill:#ad9f74;fill-opacity:1;fill-rule:evenodd;stroke-width:1.2;stroke-linecap:round;stroke-linejoin:round;stroke-miterlimit:3;paint-order:stroke fill markers;opacity:1"
					d="m 38.89375,62.970833 c 1.342212,-0.562013 2.663888,-1.148346 3.439583,-2.38125 1.102885,-0.648382 2.387635,-0.76085 3.96875,0 0.445877,0.763162 0.247176,1.570543 0,2.38125 -0.410721,0.298855 -0.823423,0.598263 -1.852084,1.0693 -1.971827,-0.04072 -3.74912,-0.59434 -5.556249,-1.0693 z"
					id="path86578"
				/><path
					style="fill:#ad9f74;fill-opacity:1;fill-rule:evenodd;stroke-width:1.2;stroke-linecap:round;stroke-linejoin:round;stroke-miterlimit:3;paint-order:stroke fill markers"
					d="m 19.84375,86.518749 c 4.039996,-0.890879 4.327085,-2.187554 5.027083,-3.439583 -0.270935,-1.472761 -1.193373,-2.099377 -2.38125,-2.38125 -1.292278,0.26726 -2.118226,1.027007 -2.38125,2.38125 -0.0068,1.14192 0.146917,2.274758 -0.264583,3.439583 z"
					id="path86580"
				/><path
					style="fill:#ad9f74;fill-opacity:1;fill-rule:evenodd;stroke-width:1.2;stroke-linecap:round;stroke-linejoin:round;stroke-miterlimit:3;paint-order:stroke fill markers"
					d="m 47.095833,108.21458 c 1.442346,-1.35128 2.709788,-0.72361 3.96875,0 1.924145,2.78459 1.126489,3.23349 1.5875,4.7625 -1.240076,-0.81695 -2.537258,-1.48738 -4.233334,-1.13432 -2.23752,-1.24579 -2.312472,-2.44777 -1.322916,-3.62818 z"
					id="path86582"
				/><path
					style="fill:#ad9f74;fill-opacity:1;fill-rule:evenodd;stroke-width:1.2;stroke-linecap:round;stroke-linejoin:round;stroke-miterlimit:3;paint-order:stroke fill markers"
					d="m 73.024999,111.38958 c 2.031755,-2.53534 3.842442,-0.8047 5.291667,0 0.72312,0.69817 1.121619,1.67521 1.527572,2.64584 -1.653482,-0.27848 -3.264943,-0.42082 -4.702572,0 -1.895993,-0.72218 -1.950335,-1.69152 -2.116667,-2.64584 z"
					id="path86584"
				/><path
					style="fill:#ad9f74;fill-opacity:1;fill-rule:evenodd;stroke-width:1.2;stroke-linecap:round;stroke-linejoin:round;stroke-miterlimit:3;paint-order:stroke fill markers"
					d="m 93.927082,111.38958 c 1.356006,-2.44756 3.658901,-0.92853 5.820833,0 1.066595,0.78975 2.045475,1.6233 2.645835,2.64584 -0.85157,-0.29562 -1.11717,-0.62984 -3.968751,-0.79375 -1.782027,0.25227 -3.450091,0.44193 -3.96875,0 -0.52222,-0.43832 -0.709355,-1.05012 -0.529167,-1.85209 z"
					id="path86586"
				/><path
					style="fill:#ad9f74;fill-opacity:1;fill-rule:evenodd;stroke-width:1.2;stroke-linecap:round;stroke-linejoin:round;stroke-miterlimit:3;paint-order:stroke fill markers"
					d="m 111.65417,105.03958 c 1.84494,-0.56113 3.68713,-1.03233 5.55625,-2.38125 0.82636,-0.79535 1.03997,-1.80021 0.79375,-2.962313 -1.5952,-1.708856 -3.18257,-1.680474 -4.7625,0 -0.58312,0.907673 -0.67458,1.911773 -0.52917,2.962313 z"
					id="path86588"
				/><path
					style="fill:#ad9f74;fill-opacity:1;fill-rule:evenodd;stroke-width:1.2;stroke-linecap:round;stroke-linejoin:round;stroke-miterlimit:3;paint-order:stroke fill markers"
					d="m 117.21042,76.464582 c 0.47994,-1.805015 1.60097,-1.981923 2.91041,-1.680329 l 2.11667,1.680329 -2.11667,1.5875 c -1.51941,0.756572 -2.4512,0.175347 -2.91041,-1.5875 z"
					id="path86590"
				/><path
					style="fill:#ad9f74;fill-opacity:1;fill-rule:evenodd;stroke-width:1.2;stroke-linecap:round;stroke-linejoin:round;stroke-miterlimit:3;paint-order:stroke fill markers"
					d="m 117.21042,64.915746 c 0.47994,-1.805015 1.60097,-1.981923 2.91041,-1.680329 l 2.11667,1.680329 -2.11667,1.5875 c -1.51941,0.756572 -2.4512,0.175347 -2.91041,-1.5875 z"
					id="path86592"
				/><path
					style="fill:#ad9f74;fill-opacity:1;fill-rule:evenodd;stroke-width:1.2;stroke-linecap:round;stroke-linejoin:round;stroke-miterlimit:3;paint-order:stroke fill markers"
					d="m 117.21042,53.009496 c 0.47994,-1.805015 1.60097,-1.981923 2.91041,-1.680329 l 2.11667,1.680329 -2.11667,1.5875 c -1.51941,0.756572 -2.4512,0.175347 -2.91041,-1.5875 z"
					id="path86594"
				/><path
					style="opacity:1;fill:#4c6371;fill-opacity:1;fill-rule:evenodd;stroke-width:1.2;stroke-linecap:round;stroke-linejoin:round;stroke-miterlimit:3;paint-order:stroke fill markers"
					d="m 50.006249,62.441666 h 5.291667 v 1.322917 h -5.291667 z"
					id="path88004"
				/><path
					style="opacity:1;fill:#363e43;fill-opacity:1;fill-rule:evenodd;stroke-width:1.2;stroke-linecap:round;stroke-linejoin:round;stroke-miterlimit:3;paint-order:stroke fill markers"
					d="m 63.764583,115.8875 h 0.79375 v -11.90625 h -1.5875 v 11.90625 z"
					id="path88006"
				/><path
					style="opacity:1;fill:#4c6371;fill-opacity:1;fill-rule:evenodd;stroke-width:1.2;stroke-linecap:round;stroke-linejoin:round;stroke-miterlimit:3;paint-order:stroke fill markers"
					d="m 88.106249,103.98125 h 0.79375 v 11.90625 h -0.529167 z"
					id="path88012"
				/><path
					style="opacity:1;fill:#363e43;fill-opacity:1;fill-rule:evenodd;stroke-width:1.2;stroke-linecap:round;stroke-linejoin:round;stroke-miterlimit:3;paint-order:stroke fill markers"
					d="m 105.30417,98.424999 h 1.05833 v 11.641671 h -0.79375 z"
					id="path88014"
				/><path
					style="opacity:1;fill:#363e43;fill-opacity:1;fill-rule:evenodd;stroke-width:1.2;stroke-linecap:round;stroke-linejoin:round;stroke-miterlimit:3;paint-order:stroke fill markers"
					d="m 82.285416,64.293749 h 4.233333 l -0.264583,1.322917 -4.124447,2.38125 -3.019303,-2.116667 z"
					id="path111449"
				/><path
					style="opacity:1;fill:#363e43;fill-opacity:1;fill-rule:evenodd;stroke-width:1.2;stroke-linecap:round;stroke-linejoin:round;stroke-miterlimit:3;paint-order:stroke fill markers"
					d="m 105.56875,24.870833 v -0.529167 h 2.64583 v 5.027084 l 2.91042,1.680329 v 1.494671 h -5.55625 z"
					id="path113486"
				/></g
			></g
		><metadata id="metadata89105">
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
