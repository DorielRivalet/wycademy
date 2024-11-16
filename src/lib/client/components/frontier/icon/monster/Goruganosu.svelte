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
				id="filter27285"
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
					id="feComposite27271"
				/><feColorMatrix
					in="composite1"
					values="1"
					type="saturate"
					result="colormatrix1"
					id="feColorMatrix27273"
				/><feFlood
					flood-opacity="1"
					flood-color="rgb(0,0,0)"
					result="flood1"
					id="feFlood27275"
				/><feBlend
					in="flood1"
					in2="colormatrix1"
					mode="multiply"
					result="blend1"
					id="feBlend27277"
				/><feBlend
					in2="blend1"
					mode="screen"
					result="blend2"
					id="feBlend27279"
				/><feColorMatrix
					in="blend2"
					values="1"
					type="saturate"
					result="colormatrix2"
					id="feColorMatrix27281"
				/><feComposite
					in="colormatrix2"
					in2="SourceGraphic"
					operator="in"
					k2="1"
					result="composite2"
					id="feComposite27283"
				/></filter
			><filter
				style="color-interpolation-filters:sRGB;"
				id="filter38704"
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
					id="feComposite38690"
				/><feColorMatrix
					in="composite1"
					values="1"
					type="saturate"
					result="colormatrix1"
					id="feColorMatrix38692"
				/><feFlood
					flood-opacity="1"
					flood-color="rgb(0,0,0)"
					result="flood1"
					id="feFlood38694"
				/><feBlend
					in="flood1"
					in2="colormatrix1"
					mode="multiply"
					result="blend1"
					id="feBlend38696"
				/><feBlend
					in2="blend1"
					mode="screen"
					result="blend2"
					id="feBlend38698"
				/><feColorMatrix
					in="blend2"
					values="1"
					type="saturate"
					result="colormatrix2"
					id="feColorMatrix38700"
				/><feComposite
					in="colormatrix2"
					in2="SourceGraphic"
					operator="in"
					k2="1"
					result="composite2"
					id="feComposite38702"
				/></filter
			></defs
		><g
			id="g38325"
			style="filter:url(#filter38704)"
			transform="translate(1.0583333,1.5875)"
			><path
				style="opacity:1;fill:#bf984e;fill-opacity:1;fill-rule:evenodd;stroke-width:3;stroke-linecap:round;stroke-linejoin:round;stroke-miterlimit:3;stroke-opacity:0.498674;paint-order:stroke fill markers"
				d="m 74.347916,121.97292 v -3.175 h 24.870833 v 3.175 z"
				id="path38185"
			/><path
				style="fill:#b95e20;fill-opacity:1;fill-rule:evenodd;stroke-width:3;stroke-linecap:round;stroke-linejoin:round;stroke-miterlimit:3;stroke-opacity:0.498674;paint-order:stroke fill markers"
				d="m 7.4083332,21.43125 c 1.5288672,-0.698156 2.6930178,2.338974 3.9687498,4.233333 L 13.229167,28.575 c 1.106258,1.454077 2.217579,2.902753 3.439583,4.233333 h 3.704166 v -7.14375 -6.35 c 0.323285,-2.526108 0.208049,-5.591981 1.322917,-7.14375 1.552526,-1.36034 1.58922,-4.3426841 4.7625,-3.9687498 V 36.247916 H 11.1125 L 8.2767042,25.664583 6.3499999,21.695833 Z"
				id="path38187"
			/><path
				style="fill:#353f4c;fill-opacity:1;fill-rule:evenodd;stroke-width:3;stroke-linecap:round;stroke-linejoin:round;stroke-miterlimit:3;stroke-opacity:0.498674;paint-order:stroke fill markers"
				d="m 23.01875,19.314583 h -3.175 v -2.910417 -0.264583 h 3.175 z"
				id="path38189"
			/><path
				style="fill:#353f4c;fill-opacity:1;fill-rule:evenodd;stroke-width:3;stroke-linecap:round;stroke-linejoin:round;stroke-miterlimit:3;stroke-opacity:0.498674;paint-order:stroke fill markers"
				d="M 9.2604166,27.252083 11.90625,25.4 l 1.852083,2.645833 -3.175,2.116667 z"
				id="path38191"
			/><path
				style="fill:#353f4c;fill-opacity:1;fill-rule:evenodd;stroke-width:3;stroke-linecap:round;stroke-linejoin:round;stroke-miterlimit:3;stroke-opacity:0.498674;paint-order:stroke fill markers"
				d="M 23.283333,12.964583 20.6375,11.641667 21.960416,8.7312499 24.60625,10.31875 Z"
				id="path38193"
			/><path
				style="fill:#353f4c;fill-opacity:1;fill-rule:evenodd;stroke-width:3;stroke-linecap:round;stroke-linejoin:round;stroke-miterlimit:3;stroke-opacity:0.498674;paint-order:stroke fill markers"
				d="m 23.01875,25.664583 h -3.175 v -2.910417 -0.264583 h 3.175 z"
				id="path38195"
			/><path
				style="fill:#edc391;fill-opacity:1;fill-rule:evenodd;stroke-width:3;stroke-linecap:round;stroke-linejoin:round;stroke-miterlimit:3;stroke-opacity:0.498674;paint-order:stroke fill markers"
				d="M 10.931019,42.122107 C 10.003226,39.822874 9.0423489,37.533924 7.4083333,35.454167 5.19886,32.485694 3.5411029,29.904907 2.9104166,28.045833 v -8.466667 h 4.2333333 c 0.1335504,2.730944 0.6658773,5.709579 3.1750001,8.995834 1.451261,1.900749 2.965986,4.247802 5.820833,6.614583 H 23.01875 V 13.758333 C 24.421716,9.1249264 27.06883,6.311179 31.485416,6.0854166 V 42.333333 l -20.554397,0.05336 z"
				id="path38197"
			/><path
				style="fill:#353f4c;fill-opacity:1;fill-rule:evenodd;stroke-width:3;stroke-linecap:round;stroke-linejoin:round;stroke-miterlimit:3;stroke-opacity:0.498674;paint-order:stroke fill markers"
				d="m 16.66875,35.189583 v -3.175 h 3.175 c 0,0 0,3.175 0,3.175 z"
				id="path38199"
			/><path
				style="fill:#353f4c;fill-opacity:1;fill-rule:evenodd;stroke-width:3;stroke-linecap:round;stroke-linejoin:round;stroke-miterlimit:3;stroke-opacity:0.498674;paint-order:stroke fill markers"
				d="m 23.01875,32.014583 h -3.175 v -2.910417 -0.264583 h 3.175 z"
				id="path38201"
			/><path
				style="fill:#4b5a71;fill-opacity:1;fill-rule:evenodd;stroke-width:3;stroke-linecap:round;stroke-linejoin:round;stroke-miterlimit:3;stroke-opacity:0.498674;paint-order:stroke fill markers"
				d="m 13.49375,48.683333 v -2.645834 l 2.910416,-3.96875 h 15.875 v -9.789583 h -6.35 V 15.875 c 0.854997,-3.701525 3.250832,-6.7256803 5.55625,-9.7895834 3.802382,0.2528174 6.505794,1.8970909 8.657808,4.4208244 2.181269,2.558041 4.972611,5.332034 5.100525,9.337509 l 10e-7,0.264583 0,31.220833 h -31.75 z"
				id="path38203"
			/><path
				style="fill:#bf984e;fill-opacity:1;fill-rule:evenodd;stroke-width:3;stroke-linecap:round;stroke-linejoin:round;stroke-miterlimit:3;stroke-opacity:0.498674;paint-order:stroke fill markers"
				d="m 85.195832,34.925 h -8.995833 l -2.116667,-2.910417 -1.322916,-2.38125 -2.910417,-3.439583 -2.645833,-3.704167 -0.79375,-5.55625 2.38125,-3.704166 3.439583,-3.4395838 2.116667,-2.9104166 H 92.339582 L 99.060901,18.520833 V 31.75 Z"
				id="path38205"
			/><path
				style="fill:#b95e20;fill-opacity:1;fill-rule:evenodd;stroke-width:3;stroke-linecap:round;stroke-linejoin:round;stroke-miterlimit:3;stroke-opacity:0.498674;paint-order:stroke fill markers"
				d="m 121.17917,18.785416 3.70416,8.995834 v 32.279166 23.283333 l -8.46666,8.466667 h -10.84792 v -6.085417 l 8.20208,-56.620833 z"
				id="path38207"
			/><path
				style="fill:#c8c3af;fill-opacity:1;fill-rule:evenodd;stroke-width:3;stroke-linecap:round;stroke-linejoin:round;stroke-miterlimit:3;stroke-opacity:0.498674;paint-order:stroke fill markers"
				d="m 57.414583,70.379166 h 17.197916 v -9.789583 h -13.49375 l -4.7625,6.614583 z"
				id="path38209"
			/><path
				style="fill:#bf984e;fill-opacity:1;fill-rule:evenodd;stroke-width:3;stroke-linecap:round;stroke-linejoin:round;stroke-miterlimit:3;stroke-opacity:0.498674;paint-order:stroke fill markers"
				d="m 56.885416,66.674999 h 20.108333 l -2.38125,-2.645833 H 57.679166 Z"
				id="path38211"
			/><path
				style="fill:#353f4c;fill-opacity:1;fill-rule:evenodd;stroke-width:3;stroke-linecap:round;stroke-linejoin:round;stroke-miterlimit:3;stroke-opacity:0.498674;paint-order:stroke fill markers"
				d="m 49.741666,67.204166 h 4.233333 l 4.7625,-7.672917 c 1.139766,-1.706845 2.570353,-1.54368 3.96875,-1.5875 h 11.641667 c 1.227471,0.517419 2.380488,1.319787 2.645834,2.645834 H 62.177083 c -1.107267,-0.12162 -3.118426,4.13565 -4.7625,6.614583 v 3.96875 h -8.466667 v -3.96875 z"
				id="path38213"
			/><path
				style="fill:#b95e20;fill-opacity:1;fill-rule:evenodd;stroke-width:3;stroke-linecap:round;stroke-linejoin:round;stroke-miterlimit:3;stroke-opacity:0.498674;paint-order:stroke fill markers"
				d="m 19.579166,88.899999 v -15.08125 h 3.439584 v -3.96875 h -3.175 V 51.329166 h -3.439584 v 34.660416 l 1.852084,3.439584 z"
				id="path38215"
			/><path
				style="fill:#4b5a71;fill-opacity:1;fill-rule:evenodd;stroke-width:3;stroke-linecap:round;stroke-linejoin:round;stroke-miterlimit:3;stroke-opacity:0.498674;paint-order:stroke fill markers"
				d="m 88.635416,70.643749 v 5.556247 H 65.087499 c -5.993106,0.655947 -6.639018,3.735563 -7.14375,6.87917 v 3.439583 c -0.964202,1.914024 -2.443168,3.174567 -4.497916,3.704167 h -4.7625 v -6.614584 h -3.439584 v 12.7 L 39.158333,106.3625 h -9.525 v 2.11667 h -3.96875 v -6.08542 c -1.111163,-0.88312 -1.886778,-2.02273 -2.645833,-3.175001 v -25.4 c -0.417193,-1.61367 0.06098,-3.633383 -3.175,-3.96875 V 51.329166 l 25.4,0 v 5.291667 l -6.085417,0 v 6.35 c 0.875447,1.811471 1.468088,3.747858 5.291666,4.233333 h 5.027084 c 0.544494,1.35755 0.523165,3.044587 3.175,3.175 h 35.983333 z"
				id="path38217"
			/><path
				style="opacity:1;fill:#bf984e;fill-opacity:1;fill-rule:evenodd;stroke-width:3;stroke-linecap:round;stroke-linejoin:round;stroke-miterlimit:3;stroke-opacity:0.498674;paint-order:stroke fill markers"
				d="m 83.608332,115.8875 v -3.43958 h 10.847917 l 2.116666,3.43958 z"
				id="path38219"
			/><path
				style="opacity:1;fill:#c8c3af;fill-opacity:1;fill-rule:evenodd;stroke-width:3;stroke-linecap:round;stroke-linejoin:round;stroke-miterlimit:3;stroke-opacity:0.498674;paint-order:stroke fill markers"
				d="M 98.954167,118.79792 96.572915,115.8875 H 81.756249 c -2.131931,0.10373 -3.530651,0.99269 -3.96875,2.91042 z"
				id="path38221"
			/><path
				style="fill:#c8c3af;fill-opacity:1;fill-rule:evenodd;stroke-width:3;stroke-linecap:round;stroke-linejoin:round;stroke-miterlimit:3;stroke-opacity:0.498674;paint-order:stroke fill markers"
				d="m 25.664583,124.88333 v -22.225 c 0.01016,-2.11663 -1.092842,-2.920069 -2.645833,-3.439581 v 21.695831 c 0.311841,2.67981 1.552149,3.14979 2.645833,3.96875 z"
				id="path38223"
			/><path
				style="fill:#bf984e;fill-opacity:1;fill-rule:evenodd;stroke-width:3;stroke-linecap:round;stroke-linejoin:round;stroke-miterlimit:3;stroke-opacity:0.498674;paint-order:stroke fill markers"
				d="m 41.804166,97.366665 c -1.213208,1.170535 -2.421478,2.368319 -2.645833,8.995835 h -6.085417 v 16.66875 h 21.166667 v -4.4592 l -6.35,-3.4783 v -5.55625 h -3.704167 z"
				id="path38225"
			/><path
				style="fill:#c9ac5f;fill-opacity:1;fill-rule:evenodd;stroke-width:3;stroke-linecap:round;stroke-linejoin:round;stroke-miterlimit:3;stroke-opacity:0.498674;paint-order:stroke fill markers"
				d="m 57.94375,105.83333 v -4.49791 h -9.260417 v 4.49791 z"
				id="path38227"
			/><path
				style="fill:#edc391;fill-opacity:1;fill-rule:evenodd;stroke-width:3;stroke-linecap:round;stroke-linejoin:round;stroke-miterlimit:3;stroke-opacity:0.498674;paint-order:stroke fill markers"
				d="m 57.943749,101.33542 v -9.525004 h -9.260416 v 9.525004 z"
				id="path38229"
			/><path
				style="fill:#c8c3af;fill-opacity:1;fill-rule:evenodd;stroke-width:3;stroke-linecap:round;stroke-linejoin:round;stroke-miterlimit:3;stroke-opacity:0.498674;paint-order:stroke fill markers"
				d="m 45.243749,96.308332 c -1.095205,0.06837 -2.192368,0.147601 -3.439583,1.058333 v 11.377085 c 0.159518,1.81775 1.727895,2.87155 3.704167,3.70417 h 4.7625 c 2.586973,-0.24831 3.098551,-2.01054 3.704166,-3.70417 h -6.614583 c -2.032939,-0.0581 -1.893032,-1.17603 -2.116667,-2.11667 z"
				id="path38231"
			/><path
				style="fill:#c8c3af;fill-opacity:1;fill-rule:evenodd;stroke-width:3;stroke-linecap:round;stroke-linejoin:round;stroke-miterlimit:3;stroke-opacity:0.498674;paint-order:stroke fill markers"
				d="m 35.454167,106.3625 h 3.704166 v 7.14375 c 0.234605,0.98224 0.684186,1.82165 2.749629,1.5875 h 15.506621 c -0.51865,1.58413 -1.249637,3.07601 -3.96875,3.70417 H 39.422916 c -2.730981,-0.72415 -3.836107,-2.24152 -3.96875,-4.23334 v -7.40833 -0.79375"
				id="path38233"
			/><path
				style="fill:#c8c3af;fill-opacity:1;fill-rule:evenodd;stroke-width:3;stroke-linecap:round;stroke-linejoin:round;stroke-miterlimit:3;stroke-opacity:0.498674;paint-order:stroke fill markers"
				d="m 59.795833,121.70833 c -0.529525,1.98607 -1.724141,3.18035 -3.704167,3.43959 H 33.602083 c -2.298494,-0.77252 -3.917332,-1.92848 -3.96875,-3.96875 V 106.3625 h 3.439583 v 12.96458 c 0.01757,1.33675 0.353253,2.53387 3.96875,2.29136 h 22.754167 z"
				id="path38235"
			/><path
				style="fill:#b95e20;fill-opacity:1;fill-rule:evenodd;stroke-width:3;stroke-linecap:round;stroke-linejoin:round;stroke-miterlimit:3;stroke-opacity:0.498674;paint-order:stroke fill markers"
				d="m 48.683333,91.810416 v -1.5875 h 4.7625 c 2.265486,-1.20067 3.344893,-2.454054 4.497916,-3.704167 v 5.291667 z"
				id="path38237"
			/><path
				style="fill:#c8c3af;fill-opacity:1;fill-rule:evenodd;stroke-width:3;stroke-linecap:round;stroke-linejoin:round;stroke-miterlimit:3;stroke-opacity:0.498674;paint-order:stroke fill markers"
				d="M 72.231249,3.175 H 85.725 l 4.497917,3.9687499 H 69.585416 Z"
				id="path38239"
			/><path
				style="fill:#c8c3af;fill-opacity:1;fill-rule:evenodd;stroke-width:3;stroke-linecap:round;stroke-linejoin:round;stroke-miterlimit:3;stroke-opacity:0.498674;paint-order:stroke fill markers"
				d="m 66.410416,9.7895832 h 28.310417 l 1.852084,3.4395838 H 63.235416 Z"
				id="path38241"
			/><path
				style="fill:#c8c3af;fill-opacity:1;fill-rule:evenodd;stroke-width:3;stroke-linecap:round;stroke-linejoin:round;stroke-miterlimit:3;stroke-opacity:0.498674;paint-order:stroke fill markers"
				d="m 60.324999,19.579166 2.645834,-2.645833 H 97.63125 l -0.529167,5.55625 H 62.706249 Z"
				id="path38243"
			/><path
				style="fill:#c8c3af;fill-opacity:1;fill-rule:evenodd;stroke-width:3;stroke-linecap:round;stroke-linejoin:round;stroke-miterlimit:3;stroke-opacity:0.498674;paint-order:stroke fill markers"
				d="m 63.499999,26.19375 2.910417,3.439583 H 97.366668 L 96.572917,26.19375 Z"
				id="path38245"
			/><path
				style="fill:#c8c3af;fill-opacity:1;fill-rule:evenodd;stroke-width:3;stroke-linecap:round;stroke-linejoin:round;stroke-miterlimit:3;stroke-opacity:0.498674;paint-order:stroke fill markers"
				d="m 69.585416,32.014583 h 19.05 V 34.925 H 71.437499 Z"
				id="path38247"
			/><path
				style="fill:#353f4c;fill-opacity:1;fill-rule:evenodd;stroke-width:3;stroke-linecap:round;stroke-linejoin:round;stroke-miterlimit:3;stroke-opacity:0.498674;paint-order:stroke fill markers"
				d="m 95.779165,86.783332 h 3.704167 v -8.73125 C 99.374904,76.576176 98.50987,76.376627 97.631249,76.199999 h -8.995833 l 0.992528,-3.704167 h 12.765806 l 1.63058,6.085417 v 8.73125 l -4.276415,4.276415 -5.55625,-1.488792 z"
				id="path38249"
			/><path
				style="fill:#c8c3af;fill-opacity:1;fill-rule:evenodd;stroke-width:3;stroke-linecap:round;stroke-linejoin:round;stroke-miterlimit:3;stroke-opacity:0.498674;paint-order:stroke fill markers"
				d="m 95.514582,57.679166 h 3.175 c 0.350484,2.196414 1.472358,3.152588 3.174998,3.175 h 5.02709 l -2.38125,9.260416 -8.995838,0.79375 z"
				id="path38251"
			/><path
				style="fill:#353f4c;fill-opacity:1;fill-rule:evenodd;stroke-width:3;stroke-linecap:round;stroke-linejoin:round;stroke-miterlimit:3;stroke-opacity:0.498674;paint-order:stroke fill markers"
				d="m 48.154167,76.2 v -6.35 c -1.63706,2.505595 -3.55165,4.78613 -6.35,6.35 z"
				id="path38253"
			/><path
				style="fill:#353f4c;fill-opacity:1;fill-rule:evenodd;stroke-width:3;stroke-linecap:round;stroke-linejoin:round;stroke-miterlimit:3;stroke-opacity:0.498674;paint-order:stroke fill markers"
				d="m 38.364583,76.2 v -6.35 c -1.63706,2.505595 -3.55165,4.78613 -6.35,6.35 z"
				id="path38255"
			/><path
				style="fill:#353f4c;fill-opacity:1;fill-rule:evenodd;stroke-width:3;stroke-linecap:round;stroke-linejoin:round;stroke-miterlimit:3;stroke-opacity:0.498674;paint-order:stroke fill markers"
				d="m 38.364583,85.725 v -6.35 c -1.63706,2.505595 -3.55165,4.78613 -6.35,6.35 z"
				id="path38257"
			/><path
				style="fill:#353f4c;fill-opacity:1;fill-rule:evenodd;stroke-width:3;stroke-linecap:round;stroke-linejoin:round;stroke-miterlimit:3;stroke-opacity:0.498674;paint-order:stroke fill markers"
				d="m 38.364583,95.779167 v -6.35 c -1.63706,2.505595 -3.55165,4.78613 -6.35,6.35 z"
				id="path38259"
			/><path
				style="fill:#c9ac5f;fill-opacity:1;fill-rule:evenodd;stroke-width:3;stroke-linecap:round;stroke-linejoin:round;stroke-miterlimit:3;stroke-opacity:0.498674;paint-order:stroke fill markers"
				d="m 105.56875,99.218749 8.20208,-0.264584 11.1125,-10.054166 v 5.820833 c -0.8401,3.222222 -3.1767,5.919318 -8.20208,7.672918 h -8.99583 l -4.23334,-1.13432 z"
				id="path38261"
			/><path
				style="fill:#353f4c;fill-opacity:1;fill-rule:evenodd;stroke-width:3;stroke-linecap:round;stroke-linejoin:round;stroke-miterlimit:3;stroke-opacity:0.498674;paint-order:stroke fill markers"
				d="m 100.0125,99.218749 h 5.55625 c 0.0927,1.657651 1.21793,2.305591 2.11667,3.175001 h -5.02709 c -1.75382,-1.03454 -2.10527,-2.10735 -2.64583,-3.175001 z"
				id="path38263"
			/><path
				style="fill:#353f4c;fill-opacity:1;fill-rule:evenodd;stroke-width:3;stroke-linecap:round;stroke-linejoin:round;stroke-miterlimit:3;stroke-opacity:0.498674;paint-order:stroke fill markers"
				d="m 89.958332,70.643749 c -0.04036,-2.988162 1.30941,-3.757774 3.175,-3.704167 v -9.260416 h 2.38125 v 13.229166 h -5.55625 z"
				id="path38265"
			/><path
				style="fill:#edc391;fill-opacity:1;fill-rule:evenodd;stroke-width:3;stroke-linecap:round;stroke-linejoin:round;stroke-miterlimit:3;stroke-opacity:0.498674;paint-order:stroke fill markers"
				d="m 105.56875,99.218749 v -9.525 H 114.3 c 5.13183,-0.890291 6.54622,-4.354953 7.40833,-8.202083 V 64.293749 c 0.71624,-1.808211 1.79888,-3.1911 3.175,-4.233333 v 28.839583 c -2.69967,3.880428 -4.73012,8.111223 -11.1125,10.054166 z"
				id="path38267"
			/><path
				style="fill:#c8c3af;fill-opacity:1;fill-rule:evenodd;stroke-width:3;stroke-linecap:round;stroke-linejoin:round;stroke-miterlimit:3;stroke-opacity:0.498674;paint-order:stroke fill markers"
				d="m 98.160415,48.418749 v -3.175 l 7.672915,-4.429958 v 7.604958 z"
				id="path38269"
			/><path
				style="fill:#c9ac5f;fill-opacity:1;fill-rule:evenodd;stroke-width:3;stroke-linecap:round;stroke-linejoin:round;stroke-miterlimit:3;stroke-opacity:0.498674;paint-order:stroke fill markers"
				d="m 19.579166,99.747915 v 5.291665 C 13.917554,99.324392 13.676842,96.347981 12.964583,93.133332 Z"
				id="path38271"
			/><path
				style="fill:#edc391;fill-opacity:1;fill-rule:evenodd;stroke-width:3;stroke-linecap:round;stroke-linejoin:round;stroke-miterlimit:3;stroke-opacity:0.498674;paint-order:stroke fill markers"
				d="M 19.579166,99.747915 C 16.003249,97.755212 14.847532,95.388006 12.964583,93.133332 V 65.087499 C 12.362124,62.079592 11.892667,58.230996 11.90625,51.329166 h 4.497916 v 29.633333 c 0.361233,2.550013 1.32189,5.18242 3.175,7.9375 z"
				id="path38273"
			/><path
				style="fill:#e11113;fill-opacity:1;fill-rule:evenodd;stroke-width:3;stroke-linecap:round;stroke-linejoin:round;stroke-miterlimit:3;stroke-opacity:0.498674;paint-order:stroke fill markers"
				d="m 21.43125,56.885416 h 12.7 l -1.852084,2.910417 h -8.995833 z"
				id="path38275"
			/><path
				style="fill:#e11113;fill-opacity:1;fill-rule:evenodd;stroke-width:3;stroke-linecap:round;stroke-linejoin:round;stroke-miterlimit:3;stroke-opacity:0.498674;paint-order:stroke fill markers"
				d="m 32.014583,54.239583 2.116667,-2.910417 h -12.7 l 2.116666,2.910417 z"
				id="path38277"
			/><path
				style="fill:#e11113;fill-opacity:1;fill-rule:evenodd;stroke-width:3;stroke-linecap:round;stroke-linejoin:round;stroke-miterlimit:3;stroke-opacity:0.498674;paint-order:stroke fill markers"
				d="m 25.664583,48.683333 v -2.910417 h 8.466667 l -1.852084,2.910417 z"
				id="path38279"
			/><path
				style="fill:#b95e20;fill-opacity:1;fill-rule:evenodd;stroke-width:3;stroke-linecap:round;stroke-linejoin:round;stroke-miterlimit:3;stroke-opacity:0.498674;paint-order:stroke fill markers"
				d="m 25.929166,42.068749 v -9.789583 h 6.35 v 9.789583 z"
				id="path38281"
			/><path
				style="fill:#bf984e;fill-opacity:1;fill-rule:evenodd;stroke-width:3;stroke-linecap:round;stroke-linejoin:round;stroke-miterlimit:3;stroke-opacity:0.498674;paint-order:stroke fill markers"
				d="m 3.175,48.683333 h 10.31875 v 2.645833 H 7.6729166 Z"
				id="path38283"
			/><path
				style="fill:#353f4c;fill-opacity:1;fill-rule:evenodd;stroke-width:3;stroke-linecap:round;stroke-linejoin:round;stroke-miterlimit:3;stroke-opacity:0.498674;paint-order:stroke fill markers"
				d="m 13.49375,48.683333 h 14.552083 l -1.527572,2.645833 H 13.49375 Z"
				id="path38285"
			/><path
				style="fill:#c8c3af;fill-opacity:1;fill-rule:evenodd;stroke-width:3;stroke-linecap:round;stroke-linejoin:round;stroke-miterlimit:3;stroke-opacity:0.498674;paint-order:stroke fill markers"
				d="m 13.49375,48.683333 v -2.645834 l 2.910416,-1.852082 V 42.068749 H 5.8208333 C 4.3890481,41.949992 3.3418047,42.284373 3.175,43.656249 v 5.027084 z"
				id="path38287"
			/><circle
				style="fill:#000000;fill-opacity:1;fill-rule:evenodd;stroke-width:5.625;stroke-linecap:round;stroke-linejoin:round;stroke-miterlimit:3;stroke-opacity:0.498674;paint-order:stroke fill markers"
				id="circle38289"
				cx="30.956249"
				cy="24.341667"
				r="3.9687505"
			/><circle
				style="fill:#bf984e;fill-opacity:1;fill-rule:evenodd;stroke-width:3;stroke-linecap:round;stroke-linejoin:round;stroke-miterlimit:3;stroke-opacity:0.498674;paint-order:stroke fill markers"
				id="circle38291"
				cx="30.956249"
				cy="24.341667"
				r="2.1166666"
			/><path
				style="fill:#edc391;fill-opacity:1;fill-rule:evenodd;stroke-width:3;stroke-linecap:round;stroke-linejoin:round;stroke-miterlimit:3;stroke-opacity:0.498674;paint-order:stroke fill markers"
				d="M 10.31875,42.068749 C 10.666838,41.55045 9.6699785,39.657349 9.2604166,38.364583 L 12.7,42.068749 Z"
				id="path38293"
			/><path
				style="opacity:1;fill:#c8c3af;fill-opacity:1;fill-rule:evenodd;stroke-width:3;stroke-linecap:round;stroke-linejoin:round;stroke-miterlimit:3;stroke-opacity:0.498674;paint-order:stroke fill markers"
				d="m 66.410416,124.88333 h 32.808333 v -2.91041 h -28.575 c -2.44137,0.0666 -3.526278,1.32281 -4.233333,2.91041 z"
				id="path38295"
			/><path
				style="opacity:1;fill:#353f4c;fill-opacity:1;fill-rule:evenodd;stroke-width:3;stroke-linecap:round;stroke-linejoin:round;stroke-miterlimit:3;stroke-opacity:0.498674;paint-order:stroke fill markers"
				d="m 61.383333,102.65833 v 3.70417 c 1.141705,2.35265 2.41045,4.65886 6.085416,6.08542 h 16.139583 4.233334 c 4.439272,2.45068 7.683608,6.36548 11.112499,10.05416 l 0.79375,-2.38125 -3.175,-11.64166 -29.104166,-2.64584 z"
				id="path38297"
			/><path
				style="opacity:1;fill:#4b5a71;fill-opacity:1;fill-rule:evenodd;stroke-width:3;stroke-linecap:round;stroke-linejoin:round;stroke-miterlimit:3;stroke-opacity:0.498674;paint-order:stroke fill markers"
				d="m 85.195832,34.925 c 4.796897,-3.521131 8.981794,-7.243564 11.1125,-11.641667 V 15.08125 C 95.230962,12.682488 93.188772,10.632799 91.097705,8.8095365 88.701918,6.7205788 86.361616,4.7191774 83.872916,2.9104166 h 20.372914 c 7.35026,2.5074894 12.26865,8.9841954 16.93334,15.8749994 V 28.575 h -2.38125 v 3.439583 h 2.38125 v 6.614583 h -2.38125 v 3.439583 h 2.38125 v 5.820834 h -2.38125 v 3.439583 h 2.38125 v 6.085417 h -2.38125 v 3.439583 h 2.38125 v 0.264583 c -1.44769,1.316445 -2.51482,2.893283 -2.38125,5.291667 v 13.229166 c -0.3999,1.574201 -1.05067,2.999289 -2.09635,4.189625 -1.14546,1.303915 -2.76481,2.326145 -5.0474,2.954125 h -6.08542 V 99.218749 H 74.083332 v 3.439581 h 23.01875 c 2.086521,1.28224 4.054668,3.03036 5.556248,6.61459 l -2.910415,10.84791 c -4.487947,-3.97106 -6.735263,-8.44881 -10.303792,-10.84221 -1.18152,-0.79244 -2.889381,-0.79981 -4.777457,-0.79945 H 68.262499 c -2.227917,0.28351 -4.542997,-2.40867 -6.879166,-5.82084 V 83.343749 c 1.079688,-2.764476 2.893106,-2.936339 4.762499,-2.910417 h 29.633333 v 6.35 2.910417 h 3.704167 c 2.981238,-0.809364 2.358958,-1.894705 2.645838,-2.910417 v -9.525 c -0.18038,-3.231971 -1.84089,-3.660126 -3.704171,-3.704166 h -5.820833 c -1.904154,-0.196569 -3.183185,0.766806 -3.96875,2.645833 v -5.55625 h 6.879166 c 5.182338,-0.995453 8.809028,-4.015187 10.318748,-9.789583 V 38.89375 c -0.5812,-2.163418 -1.17339,-4.319023 -5.29166,-3.96875 z"
				id="path38299"
			/><path
				style="fill:#353f4c;fill-opacity:1;fill-rule:evenodd;stroke-width:3;stroke-linecap:round;stroke-linejoin:round;stroke-miterlimit:3;stroke-opacity:0.498674;paint-order:stroke fill markers"
				d="M 114.56458,31.75 V 25.4 c -1.63706,2.505595 -3.55165,4.78613 -6.35,6.35 z"
				id="path38301"
			/><path
				style="fill:#353f4c;fill-opacity:1;fill-rule:evenodd;stroke-width:3;stroke-linecap:round;stroke-linejoin:round;stroke-miterlimit:3;stroke-opacity:0.498674;paint-order:stroke fill markers"
				d="M 105.03958,31.75 V 25.4 c -1.63706,2.505595 -3.55165,4.78613 -6.349997,6.35 z"
				id="path38303"
			/><path
				style="fill:#353f4c;fill-opacity:1;fill-rule:evenodd;stroke-width:3;stroke-linecap:round;stroke-linejoin:round;stroke-miterlimit:3;stroke-opacity:0.498674;paint-order:stroke fill markers"
				d="m 105.03958,22.754166 v -6.35 c -1.63706,2.505595 -3.55165,4.78613 -6.349997,6.35 z"
				id="path38305"
			/><path
				style="fill:#353f4c;fill-opacity:1;fill-rule:evenodd;stroke-width:3;stroke-linecap:round;stroke-linejoin:round;stroke-miterlimit:3;stroke-opacity:0.498674;paint-order:stroke fill markers"
				d="m 114.56458,22.754166 v -6.35 c -1.63706,2.505595 -3.55165,4.78613 -6.35,6.35 z"
				id="path38307"
			/><path
				style="fill:#353f4c;fill-opacity:1;fill-rule:evenodd;stroke-width:3;stroke-linecap:round;stroke-linejoin:round;stroke-miterlimit:3;stroke-opacity:0.498674;paint-order:stroke fill markers"
				d="m 114.56458,42.333333 v -6.35 c -1.63706,2.505595 -3.55165,4.78613 -6.35,6.35 z"
				id="path38309"
			/><path
				style="fill:#353f4c;fill-opacity:1;fill-rule:evenodd;stroke-width:3;stroke-linecap:round;stroke-linejoin:round;stroke-miterlimit:3;stroke-opacity:0.498674;paint-order:stroke fill markers"
				d="m 114.56458,51.064583 v -6.35 c -1.63706,2.505595 -3.55165,4.78613 -6.35,6.35 z"
				id="path38311"
			/><path
				style="fill:#353f4c;fill-opacity:1;fill-rule:evenodd;stroke-width:3;stroke-linecap:round;stroke-linejoin:round;stroke-miterlimit:3;stroke-opacity:0.498674;paint-order:stroke fill markers"
				d="m 114.56458,60.589583 v -6.35 c -1.63706,2.505595 -3.55165,4.78613 -6.35,6.35 z"
				id="path38313"
			/><path
				style="fill:#353f4c;fill-opacity:1;fill-rule:evenodd;stroke-width:3;stroke-linecap:round;stroke-linejoin:round;stroke-miterlimit:3;stroke-opacity:0.498674;paint-order:stroke fill markers"
				d="m 114.56458,69.585417 v -6.35 c -1.63706,2.505595 -3.55165,4.78613 -6.35,6.35 z"
				id="path38315"
			/><path
				style="fill:#353f4c;fill-opacity:1;fill-rule:evenodd;stroke-width:3;stroke-linecap:round;stroke-linejoin:round;stroke-miterlimit:3;stroke-opacity:0.498674;paint-order:stroke fill markers"
				d="m 114.56458,80.16875 v -6.35 c -1.63706,2.505595 -3.55165,4.78613 -6.35,6.35 z"
				id="path38317"
			/><path
				style="fill:#353f4c;fill-opacity:1;fill-rule:evenodd;stroke-width:3;stroke-linecap:round;stroke-linejoin:round;stroke-miterlimit:3;stroke-opacity:0.498674;paint-order:stroke fill markers"
				d="m 91.545833,88.9 v -6.35 c -1.63706,2.505595 -3.55165,4.78613 -6.35,6.35 z"
				id="path38319"
			/><path
				style="fill:#353f4c;fill-opacity:1;fill-rule:evenodd;stroke-width:3;stroke-linecap:round;stroke-linejoin:round;stroke-miterlimit:3;stroke-opacity:0.498674;paint-order:stroke fill markers"
				d="m 82.55,88.9 v -6.35 c -1.63706,2.505595 -3.55165,4.78613 -6.35,6.35 z"
				id="path38321"
			/><path
				style="fill:#353f4c;fill-opacity:1;fill-rule:evenodd;stroke-width:3;stroke-linecap:round;stroke-linejoin:round;stroke-miterlimit:3;stroke-opacity:0.498674;paint-order:stroke fill markers"
				d="m 73.025,88.9 v -6.35 c -1.63706,2.505595 -3.55165,4.78613 -6.35,6.35 z"
				id="path38323"
			/></g
		><path
			style="fill:#bf984e;fill-opacity:1;fill-rule:evenodd;stroke-width:3;stroke-linecap:round;stroke-linejoin:round;stroke-miterlimit:3;stroke-opacity:0.498674;paint-order:stroke fill markers"
			d="m 74.347916,121.97292 v -3.175 h 24.870833 v 3.175 z"
			id="path3912"
		/><path
			style="fill:#d45b3c;fill-opacity:1;fill-rule:evenodd;stroke-width:3;stroke-linecap:round;stroke-linejoin:round;stroke-miterlimit:3;stroke-opacity:0.498674;paint-order:stroke fill markers"
			d="m 7.4083332,21.43125 c 1.5288672,-0.698156 2.6930178,2.338974 3.9687498,4.233333 L 13.229167,28.575 c 1.106258,1.454077 2.217579,2.902753 3.439583,4.233333 h 3.704166 v -7.14375 -6.35 c 0.323285,-2.526108 0.208049,-5.591981 1.322917,-7.14375 1.552526,-1.36034 1.58922,-4.3426841 4.7625,-3.9687498 V 36.247916 H 11.1125 L 8.2767042,25.664583 6.3499999,21.695833 Z"
			id="path25571"
		/><path
			style="fill:#353f4c;fill-opacity:1;fill-rule:evenodd;stroke-width:3;stroke-linecap:round;stroke-linejoin:round;stroke-miterlimit:3;stroke-opacity:0.498674;paint-order:stroke fill markers"
			d="m 23.01875,19.314583 h -3.175 v -2.910417 -0.264583 h 3.175 z"
			id="path25567"
		/><path
			style="fill:#353f4c;fill-opacity:1;fill-rule:evenodd;stroke-width:3;stroke-linecap:round;stroke-linejoin:round;stroke-miterlimit:3;stroke-opacity:0.498674;paint-order:stroke fill markers"
			d="M 9.2604166,27.252083 11.90625,25.4 l 1.852083,2.645833 -3.175,2.116667 z"
			id="path25482"
		/><path
			style="fill:#353f4c;fill-opacity:1;fill-rule:evenodd;stroke-width:3;stroke-linecap:round;stroke-linejoin:round;stroke-miterlimit:3;stroke-opacity:0.498674;paint-order:stroke fill markers"
			d="M 23.283333,12.964583 20.6375,11.641667 21.960416,8.7312499 24.60625,10.31875 Z"
			id="path25569"
		/><path
			style="fill:#353f4c;fill-opacity:1;fill-rule:evenodd;stroke-width:3;stroke-linecap:round;stroke-linejoin:round;stroke-miterlimit:3;stroke-opacity:0.498674;paint-order:stroke fill markers"
			d="m 23.01875,25.664583 h -3.175 v -2.910417 -0.264583 h 3.175 z"
			id="path25565"
		/><path
			style="fill:#edc391;fill-opacity:1;fill-rule:evenodd;stroke-width:3;stroke-linecap:round;stroke-linejoin:round;stroke-miterlimit:3;stroke-opacity:0.498674;paint-order:stroke fill markers"
			d="M 10.931019,42.122107 C 10.003226,39.822874 9.0423489,37.533924 7.4083333,35.454167 5.19886,32.485694 3.5411029,29.904907 2.9104166,28.045833 v -8.466667 h 4.2333333 c 0.1335504,2.730944 0.6658773,5.709579 3.1750001,8.995834 1.451261,1.900749 2.965986,4.247802 5.820833,6.614583 H 23.01875 V 13.758333 C 24.421716,9.1249264 27.06883,6.311179 31.485416,6.0854166 V 42.333333 l -20.554397,0.05336 z"
			id="path23893"
		/><path
			style="fill:#353f4c;fill-opacity:1;fill-rule:evenodd;stroke-width:3;stroke-linecap:round;stroke-linejoin:round;stroke-miterlimit:3;stroke-opacity:0.498674;paint-order:stroke fill markers"
			d="m 16.66875,35.189583 v -3.175 h 3.175 c 0,0 0,3.175 0,3.175 z"
			id="path25561"
		/><path
			style="fill:#353f4c;fill-opacity:1;fill-rule:evenodd;stroke-width:3;stroke-linecap:round;stroke-linejoin:round;stroke-miterlimit:3;stroke-opacity:0.498674;paint-order:stroke fill markers"
			d="m 23.01875,32.014583 h -3.175 v -2.910417 -0.264583 h 3.175 z"
			id="path25563"
		/><path
			style="fill:#f8e33f;fill-opacity:1;fill-rule:evenodd;stroke-width:3;stroke-linecap:round;stroke-linejoin:round;stroke-miterlimit:3;stroke-opacity:0.498674;paint-order:stroke fill markers"
			d="m 13.229167,48.683333 -1.322917,-2.910416 4.497916,-3.704168 h 15.875 v -9.789583 h -6.35 V 15.875 c 0.854997,-3.701525 3.250832,-6.7256803 5.55625,-9.7895834 3.802382,0.2528174 6.505794,1.8970909 8.657808,4.4208244 2.181269,2.558041 4.972611,5.332034 5.100525,9.337509 l 10e-7,0.264583 v 31.220833 l -32.014583,1.5875 z"
			id="path23666"
		/><path
			style="fill:#bf984e;fill-opacity:1;fill-rule:evenodd;stroke-width:3;stroke-linecap:round;stroke-linejoin:round;stroke-miterlimit:3;stroke-opacity:0.498674;paint-order:stroke fill markers"
			d="m 85.195832,34.925 h -8.995833 l -2.116667,-2.910417 -1.322916,-2.38125 -2.910417,-3.439583 -2.645833,-3.704167 -0.79375,-5.55625 2.38125,-3.704166 3.439583,-3.4395838 2.116667,-2.9104166 H 92.339582 L 99.060901,18.520833 V 31.75 Z"
			id="path7915"
		/><path
			style="fill:#d88e2a;fill-opacity:1;fill-rule:evenodd;stroke-width:3;stroke-linecap:round;stroke-linejoin:round;stroke-miterlimit:3;stroke-opacity:0.498674;paint-order:stroke fill markers"
			d="m 121.17917,18.785416 3.70416,8.995834 v 32.279166 23.283333 l -8.46666,8.466667 h -10.84792 v -6.085417 l 8.20208,-56.620833 z"
			id="path13595"
		/><path
			style="fill:#c8c3af;fill-opacity:1;fill-rule:evenodd;stroke-width:3;stroke-linecap:round;stroke-linejoin:round;stroke-miterlimit:3;stroke-opacity:0.498674;paint-order:stroke fill markers"
			d="m 57.414583,70.379166 h 17.197916 v -9.789583 h -13.49375 l -4.7625,6.614583 z"
			id="path17502"
		/><path
			style="fill:#bf984e;fill-opacity:1;fill-rule:evenodd;stroke-width:3;stroke-linecap:round;stroke-linejoin:round;stroke-miterlimit:3;stroke-opacity:0.498674;paint-order:stroke fill markers"
			d="m 56.885416,66.674999 h 20.108333 l -2.38125,-2.645833 H 57.679166 Z"
			id="path17504"
		/><path
			style="fill:#b75f16;fill-opacity:1;fill-rule:evenodd;stroke-width:3;stroke-linecap:round;stroke-linejoin:round;stroke-miterlimit:3;stroke-opacity:0.498674;paint-order:stroke fill markers"
			d="m 49.741666,67.204166 h 4.233333 l 4.7625,-7.672917 c 1.139766,-1.706845 2.570353,-1.54368 3.96875,-1.5875 h 11.641667 c 1.227471,0.517419 2.380488,1.319787 2.645834,2.645834 H 62.177083 c -1.107267,-0.12162 -3.118426,4.13565 -4.7625,6.614583 v 3.96875 h -8.466667 v -3.96875 z"
			id="path13136"
		/><path
			style="fill:#d78e2a;fill-opacity:1;fill-rule:evenodd;stroke-width:3;stroke-linecap:round;stroke-linejoin:round;stroke-miterlimit:3;stroke-opacity:0.498674;paint-order:stroke fill markers"
			d="m 19.579166,88.899999 v -15.08125 h 3.439584 v -3.96875 h -3.175 V 51.329166 l -3.96875,0 0.529166,34.660416 1.852084,3.439584 z"
			id="path18654"
		/><path
			style="fill:#f8e33f;fill-opacity:1;fill-rule:evenodd;stroke-width:3;stroke-linecap:round;stroke-linejoin:round;stroke-miterlimit:3;stroke-opacity:0.498674;paint-order:stroke fill markers"
			d="m 88.635416,70.643749 v 5.556247 H 65.087499 c -5.993106,0.655947 -6.639018,3.735563 -7.14375,6.87917 v 3.439583 c -0.964202,1.914024 -2.443168,3.174567 -4.497916,3.704167 h -4.7625 v -6.614584 h -3.439584 v 12.7 L 39.158333,106.3625 h -9.525 v 2.11667 h -3.96875 v -6.08542 c -1.111163,-0.88312 -1.886778,-2.02273 -2.645833,-3.175001 v -25.4 c -0.417193,-1.61367 0.06098,-3.633383 -3.175,-3.96875 V 51.329166 h 25.4 l 0,5.291667 h -6.085417 v 6.35 c 0.875447,1.811471 1.468088,3.747858 5.291666,4.233333 h 5.027084 c 0.544494,1.35755 0.523165,3.044587 3.175,3.175 h 35.983333 z"
			id="path20287"
		/><path
			style="fill:#bf984e;fill-opacity:1;fill-rule:evenodd;stroke-width:3;stroke-linecap:round;stroke-linejoin:round;stroke-miterlimit:3;stroke-opacity:0.498674;paint-order:stroke fill markers"
			d="m 83.608332,115.8875 v -3.43958 h 10.847917 l 2.116666,3.43958 z"
			id="path3916"
		/><path
			style="fill:#c8c3af;fill-opacity:1;fill-rule:evenodd;stroke-width:3;stroke-linecap:round;stroke-linejoin:round;stroke-miterlimit:3;stroke-opacity:0.498674;paint-order:stroke fill markers"
			d="M 98.954167,118.79792 96.572915,115.8875 H 81.756249 c -2.131931,0.10373 -3.530651,0.99269 -3.96875,2.91042 z"
			id="path3914"
		/><path
			style="fill:#c8c3af;fill-opacity:1;fill-rule:evenodd;stroke-width:3;stroke-linecap:round;stroke-linejoin:round;stroke-miterlimit:3;stroke-opacity:0.498674;paint-order:stroke fill markers"
			d="m 25.664583,124.88333 v -22.225 c 0.01016,-2.11663 -1.092842,-2.920069 -2.645833,-3.439581 v 21.695831 c 0.311841,2.67981 1.552149,3.14979 2.645833,3.96875 z"
			id="path3918"
		/><path
			style="fill:#bf984e;fill-opacity:1;fill-rule:evenodd;stroke-width:3;stroke-linecap:round;stroke-linejoin:round;stroke-miterlimit:3;stroke-opacity:0.498674;paint-order:stroke fill markers"
			d="m 41.804166,97.366665 c -1.213208,1.170535 -2.421478,2.368319 -2.645833,8.995835 h -6.085417 v 16.66875 h 21.166667 v -4.4592 l -6.35,-3.4783 v -5.55625 h -3.704167 z"
			id="path6104"
		/><path
			style="fill:#c9ac5f;fill-opacity:1;fill-rule:evenodd;stroke-width:3;stroke-linecap:round;stroke-linejoin:round;stroke-miterlimit:3;stroke-opacity:0.498674;paint-order:stroke fill markers"
			d="m 57.94375,105.83333 v -4.49791 h -9.260417 v 4.49791 z"
			id="path6162"
		/><path
			style="fill:#edc391;fill-opacity:1;fill-rule:evenodd;stroke-width:3;stroke-linecap:round;stroke-linejoin:round;stroke-miterlimit:3;stroke-opacity:0.498674;paint-order:stroke fill markers"
			d="m 57.943749,101.33542 v -9.525004 h -9.260416 v 9.525004 z"
			id="path6166"
		/><path
			style="fill:#c8c3af;fill-opacity:1;fill-rule:evenodd;stroke-width:3;stroke-linecap:round;stroke-linejoin:round;stroke-miterlimit:3;stroke-opacity:0.498674;paint-order:stroke fill markers"
			d="m 45.243749,96.308332 c -1.095205,0.06837 -2.192368,0.147601 -3.439583,1.058333 v 11.377085 c 0.159518,1.81775 1.727895,2.87155 3.704167,3.70417 h 4.7625 c 2.586973,-0.24831 3.098551,-2.01054 3.704166,-3.70417 h -6.614583 c -2.032939,-0.0581 -1.893032,-1.17603 -2.116667,-2.11667 z"
			id="path6102"
		/><path
			style="fill:#c8c3af;fill-opacity:1;fill-rule:evenodd;stroke-width:3;stroke-linecap:round;stroke-linejoin:round;stroke-miterlimit:3;stroke-opacity:0.498674;paint-order:stroke fill markers"
			d="m 35.454167,106.3625 h 3.704166 v 7.14375 c 0.234605,0.98224 0.684186,1.82165 2.749629,1.5875 h 15.506621 c -0.51865,1.58413 -1.249637,3.07601 -3.96875,3.70417 H 39.422916 c -2.730981,-0.72415 -3.836107,-2.24152 -3.96875,-4.23334 v -7.40833 -0.79375"
			id="path5372"
		/><path
			style="fill:#c8c3af;fill-opacity:1;fill-rule:evenodd;stroke-width:3;stroke-linecap:round;stroke-linejoin:round;stroke-miterlimit:3;stroke-opacity:0.498674;paint-order:stroke fill markers"
			d="m 59.795833,121.70833 c -0.529525,1.98607 -1.724141,3.18035 -3.704167,3.43959 H 33.602083 c -2.298494,-0.77252 -3.917332,-1.92848 -3.96875,-3.96875 V 106.3625 h 3.439583 v 12.96458 c 0.01757,1.33675 0.353253,2.53387 3.96875,2.29136 h 22.754167 z"
			id="path5374"
		/><path
			style="fill:#d78e2a;fill-opacity:1;fill-rule:evenodd;stroke-width:3;stroke-linecap:round;stroke-linejoin:round;stroke-miterlimit:3;stroke-opacity:0.498674;paint-order:stroke fill markers"
			d="m 48.683333,91.810416 v -1.5875 h 4.7625 c 2.265486,-1.20067 3.344893,-2.454054 4.497916,-3.704167 v 5.291667 z"
			id="path6222"
		/><path
			style="fill:#c8c3af;fill-opacity:1;fill-rule:evenodd;stroke-width:3;stroke-linecap:round;stroke-linejoin:round;stroke-miterlimit:3;stroke-opacity:0.498674;paint-order:stroke fill markers"
			d="M 72.231249,3.175 H 85.725 l 4.497917,3.9687499 H 69.585416 Z"
			id="path6386"
		/><path
			style="fill:#c8c3af;fill-opacity:1;fill-rule:evenodd;stroke-width:3;stroke-linecap:round;stroke-linejoin:round;stroke-miterlimit:3;stroke-opacity:0.498674;paint-order:stroke fill markers"
			d="m 66.410416,9.7895832 h 28.310417 l 1.852084,3.4395838 H 63.235416 Z"
			id="path6390"
		/><path
			style="fill:#c8c3af;fill-opacity:1;fill-rule:evenodd;stroke-width:3;stroke-linecap:round;stroke-linejoin:round;stroke-miterlimit:3;stroke-opacity:0.498674;paint-order:stroke fill markers"
			d="m 60.324999,19.579166 2.645834,-2.645833 H 97.63125 l -0.529167,5.55625 H 62.706249 Z"
			id="path6392"
		/><path
			style="fill:#c8c3af;fill-opacity:1;fill-rule:evenodd;stroke-width:3;stroke-linecap:round;stroke-linejoin:round;stroke-miterlimit:3;stroke-opacity:0.498674;paint-order:stroke fill markers"
			d="m 63.499999,26.19375 2.910417,3.439583 H 97.366668 L 96.572917,26.19375 Z"
			id="path7183"
		/><path
			style="fill:#c8c3af;fill-opacity:1;fill-rule:evenodd;stroke-width:3;stroke-linecap:round;stroke-linejoin:round;stroke-miterlimit:3;stroke-opacity:0.498674;paint-order:stroke fill markers"
			d="m 69.585416,32.014583 h 19.05 V 34.925 H 71.437499 Z"
			id="path7185"
		/><path
			style="fill:#d78e2a;fill-opacity:1;fill-rule:evenodd;stroke-width:3;stroke-linecap:round;stroke-linejoin:round;stroke-miterlimit:3;stroke-opacity:0.498674;paint-order:stroke fill markers"
			d="m 95.779165,86.783332 h 3.704167 v -8.73125 C 99.374904,76.576176 98.50987,76.376627 97.631249,76.199999 h -8.995833 l 0.992528,-3.704167 h 12.765806 l 1.63058,6.085417 v 8.73125 l -4.276415,4.276415 -5.55625,-1.488792 z"
			id="path13132"
		/><path
			style="fill:#c8c3af;fill-opacity:1;fill-rule:evenodd;stroke-width:3;stroke-linecap:round;stroke-linejoin:round;stroke-miterlimit:3;stroke-opacity:0.498674;paint-order:stroke fill markers"
			d="m 95.514582,57.679166 h 3.175 c 0.350484,2.196414 1.472358,3.152588 3.174998,3.175 h 5.02709 l -2.38125,9.260416 -8.995838,0.79375 z"
			id="path17419"
		/><path
			style="fill:#d88e2a;fill-opacity:1;fill-rule:evenodd;stroke-width:3;stroke-linecap:round;stroke-linejoin:round;stroke-miterlimit:3;stroke-opacity:0.498674;paint-order:stroke fill markers"
			d="m 48.154167,76.2 v -6.35 c -1.63706,2.505595 -3.55165,4.78613 -6.35,6.35 z"
			id="path10182"
		/><path
			style="fill:#d88e2a;fill-opacity:1;fill-rule:evenodd;stroke-width:3;stroke-linecap:round;stroke-linejoin:round;stroke-miterlimit:3;stroke-opacity:0.498674;paint-order:stroke fill markers"
			d="m 38.364583,76.2 v -6.35 c -1.63706,2.505595 -3.55165,4.78613 -6.35,6.35 z"
			id="path10184"
		/><path
			style="fill:#d88e2a;fill-opacity:1;fill-rule:evenodd;stroke-width:3;stroke-linecap:round;stroke-linejoin:round;stroke-miterlimit:3;stroke-opacity:0.498674;paint-order:stroke fill markers"
			d="m 38.364583,85.725 v -6.35 c -1.63706,2.505595 -3.55165,4.78613 -6.35,6.35 z"
			id="path10186"
		/><path
			style="fill:#d88e2a;fill-opacity:1;fill-rule:evenodd;stroke-width:3;stroke-linecap:round;stroke-linejoin:round;stroke-miterlimit:3;stroke-opacity:0.498674;paint-order:stroke fill markers"
			d="m 38.364583,95.779167 v -6.35 c -1.63706,2.505595 -3.55165,4.78613 -6.35,6.35 z"
			id="path10188"
		/><path
			style="fill:#c9ac5f;fill-opacity:1;fill-rule:evenodd;stroke-width:3;stroke-linecap:round;stroke-linejoin:round;stroke-miterlimit:3;stroke-opacity:0.498674;paint-order:stroke fill markers"
			d="m 105.56875,99.218749 8.20208,-0.264584 11.1125,-10.054166 v 5.820833 c -0.8401,3.222222 -3.1767,5.919318 -8.20208,7.672918 h -8.99583 l -4.23334,-1.13432 z"
			id="path13138"
		/><path
			style="fill:#b75f16;fill-opacity:1;fill-rule:evenodd;stroke-width:3;stroke-linecap:round;stroke-linejoin:round;stroke-miterlimit:3;stroke-opacity:0.498674;paint-order:stroke fill markers"
			d="m 100.0125,99.218749 h 5.55625 c 0.0927,1.657651 1.21793,2.305591 2.11667,3.175001 h -5.02709 c -1.75382,-1.03454 -2.10527,-2.10735 -2.64583,-3.175001 z"
			id="path12637"
		/><path
			style="fill:#b75f16;fill-opacity:1;fill-rule:evenodd;stroke-width:3;stroke-linecap:round;stroke-linejoin:round;stroke-miterlimit:3;stroke-opacity:0.498674;paint-order:stroke fill markers"
			d="m 89.958332,70.643749 c -0.04036,-2.988162 1.30941,-3.757774 3.175,-3.704167 v -9.260416 h 2.38125 v 13.229166 h -5.55625 z"
			id="path13134"
		/><path
			style="fill:#edc391;fill-opacity:1;fill-rule:evenodd;stroke-width:3;stroke-linecap:round;stroke-linejoin:round;stroke-miterlimit:3;stroke-opacity:0.498674;paint-order:stroke fill markers"
			d="m 105.56875,99.218749 v -9.525 H 114.3 c 5.13183,-0.890291 6.54622,-4.354953 7.40833,-8.202083 V 64.293749 c 0.71624,-1.808211 1.79888,-3.1911 3.175,-4.233333 v 28.839583 c -2.69967,3.880428 -4.73012,8.111223 -11.1125,10.054166 z"
			id="path13539"
		/><path
			style="fill:#c8c3af;fill-opacity:1;fill-rule:evenodd;stroke-width:3;stroke-linecap:round;stroke-linejoin:round;stroke-miterlimit:3;stroke-opacity:0.498674;paint-order:stroke fill markers"
			d="m 98.160415,48.418749 v -3.175 l 7.672915,-4.429958 v 7.604958 z"
			id="path17500"
		/><path
			style="fill:#c9ac5f;fill-opacity:1;fill-rule:evenodd;stroke-width:3;stroke-linecap:round;stroke-linejoin:round;stroke-miterlimit:3;stroke-opacity:0.498674;paint-order:stroke fill markers"
			d="m 19.579166,99.747915 v 5.291665 C 13.917554,99.324392 13.676842,96.347981 12.964583,93.133332 Z"
			id="path17818"
		/><path
			style="fill:#edc391;fill-opacity:1;fill-rule:evenodd;stroke-width:3;stroke-linecap:round;stroke-linejoin:round;stroke-miterlimit:3;stroke-opacity:0.498674;paint-order:stroke fill markers"
			d="M 19.579166,99.747915 C 16.003249,97.755212 14.847532,95.388006 12.964583,93.133332 V 65.087499 C 12.362124,62.079592 11.892667,58.230996 11.90625,51.329166 h 4.497916 v 29.633333 c 0.361233,2.550013 1.32189,5.18242 3.175,7.9375 z"
			id="path17820"
		/><path
			style="fill:#a77030;fill-opacity:1;fill-rule:evenodd;stroke-width:3;stroke-linecap:round;stroke-linejoin:round;stroke-miterlimit:3;stroke-opacity:0.498674;paint-order:stroke fill markers"
			d="m 21.43125,56.885416 h 12.7 l -1.852084,2.910417 h -8.995833 z"
			id="path20427"
		/><path
			style="fill:#a77030;fill-opacity:1;fill-rule:evenodd;stroke-width:3;stroke-linecap:round;stroke-linejoin:round;stroke-miterlimit:3;stroke-opacity:0.498674;paint-order:stroke fill markers"
			d="m 32.014583,54.239583 2.116667,-2.910417 h -12.7 l 2.116666,2.910417 z"
			id="path20537"
		/><path
			style="fill:#a77030;fill-opacity:1;fill-rule:evenodd;stroke-width:3;stroke-linecap:round;stroke-linejoin:round;stroke-miterlimit:3;stroke-opacity:0.498674;paint-order:stroke fill markers"
			d="m 25.664583,48.683333 v -2.910417 h 8.466667 l -1.852084,2.910417 z"
			id="path20539"
		/><path
			style="fill:#d78e2a;fill-opacity:1;fill-rule:evenodd;stroke-width:3;stroke-linecap:round;stroke-linejoin:round;stroke-miterlimit:3;stroke-opacity:0.498674;paint-order:stroke fill markers"
			d="m 25.929166,42.068749 v -9.789583 h 6.35 v 9.789583 z"
			id="path21845"
		/><path
			style="fill:#a76e37;fill-opacity:1;fill-rule:evenodd;stroke-width:3;stroke-linecap:round;stroke-linejoin:round;stroke-miterlimit:3;stroke-opacity:0.498674;paint-order:stroke fill markers"
			d="m 3.175,48.683333 h 10.31875 v 2.645833 H 7.6729166 Z"
			id="path21924"
		/><path
			style="fill:#b55e16;fill-opacity:1;fill-rule:evenodd;stroke-width:3;stroke-linecap:round;stroke-linejoin:round;stroke-miterlimit:3;stroke-opacity:0.498674;paint-order:stroke fill markers"
			d="m 13.49375,48.683333 h 14.552083 l -1.527572,2.645833 H 13.49375 Z"
			id="path22210"
		/><path
			style="fill:#f9d38d;fill-opacity:1;fill-rule:evenodd;stroke-width:3;stroke-linecap:round;stroke-linejoin:round;stroke-miterlimit:3;stroke-opacity:0.498674;paint-order:stroke fill markers"
			d="m 13.49375,48.683333 v -2.645834 l 2.910416,-1.852082 V 42.068749 H 5.8208333 C 4.3890481,41.949992 3.3418047,42.284373 3.175,43.656249 v 5.027084 z"
			id="path23664"
		/><circle
			style="fill:#000000;fill-opacity:1;fill-rule:evenodd;stroke-width:5.625;stroke-linecap:round;stroke-linejoin:round;stroke-miterlimit:3;stroke-opacity:0.498674;paint-order:stroke fill markers"
			id="circle23774"
			cx="30.956249"
			cy="24.341667"
			r="3.9687505"
		/><circle
			style="fill:#f6f190;fill-opacity:1;fill-rule:evenodd;stroke-width:3;stroke-linecap:round;stroke-linejoin:round;stroke-miterlimit:3;stroke-opacity:0.498674;paint-order:stroke fill markers"
			id="path23720"
			cx="30.956249"
			cy="24.341667"
			r="2.1166666"
		/><path
			style="fill:#edc391;fill-opacity:1;fill-rule:evenodd;stroke-width:3;stroke-linecap:round;stroke-linejoin:round;stroke-miterlimit:3;stroke-opacity:0.498674;paint-order:stroke fill markers"
			d="M 10.31875,42.068749 C 10.666838,41.55045 9.6699785,39.657349 9.2604166,38.364583 L 12.7,42.068749 Z"
			id="path24026"
		/><path
			style="fill:#c8c3af;fill-opacity:1;fill-rule:evenodd;stroke-width:3;stroke-linecap:round;stroke-linejoin:round;stroke-miterlimit:3;stroke-opacity:0.498674;paint-order:stroke fill markers"
			d="m 66.410416,124.88333 h 32.808333 v -2.91041 h -28.575 c -2.44137,0.0666 -3.526278,1.32281 -4.233333,2.91041 z"
			id="path3814"
		/><path
			style="fill:#d78e2a;fill-opacity:1;fill-rule:evenodd;stroke-width:3;stroke-linecap:round;stroke-linejoin:round;stroke-miterlimit:3;stroke-opacity:0.498674;paint-order:stroke fill markers"
			d="m 61.383333,102.65833 v 3.70417 c 1.141705,2.35265 2.41045,4.65886 6.085416,6.08542 h 16.139583 4.233334 c 4.439272,2.45068 7.683608,6.36548 11.112499,10.05416 l 0.79375,-2.38125 -3.175,-11.64166 -29.104166,-2.64584 z"
			id="path37152"
		/><path
			style="fill:#f8e33f;fill-opacity:1;fill-rule:evenodd;stroke-width:3;stroke-linecap:round;stroke-linejoin:round;stroke-miterlimit:3;stroke-opacity:0.498674;paint-order:stroke fill markers"
			d="m 85.195832,34.925 c 4.796897,-3.521131 8.981794,-7.243564 11.1125,-11.641667 V 15.08125 C 95.230962,12.682488 93.188772,10.632799 91.097705,8.8095365 88.701918,6.7205788 86.361616,4.7191774 83.872916,2.9104166 h 20.372914 c 7.35026,2.5074894 12.26865,8.9841954 16.93334,15.8749994 V 28.575 h -2.38125 v 3.439583 h 2.38125 v 6.614583 h -2.38125 v 3.439583 h 2.38125 v 5.820834 h -2.38125 v 3.439583 h 2.38125 v 6.085417 h -2.38125 v 3.439583 h 2.38125 v 0.264583 c -1.44769,1.316445 -2.51482,2.893283 -2.38125,5.291667 v 13.229166 c -0.3999,1.574201 -1.05067,2.999289 -2.09635,4.189625 -1.14546,1.303915 -2.76481,2.326145 -5.0474,2.954125 h -6.08542 V 99.218749 H 74.083332 v 3.439581 h 23.01875 c 2.086521,1.28224 4.054668,3.03036 5.556248,6.61459 l -2.910415,10.84791 c -4.487947,-3.97106 -6.735263,-8.44881 -10.303792,-10.84221 -1.18152,-0.79244 -2.889381,-0.79981 -4.777457,-0.79945 H 68.262499 c -2.227917,0.28351 -4.542997,-2.40867 -6.879166,-5.82084 V 83.343749 c 1.079688,-2.764476 2.893106,-2.936339 4.762499,-2.910417 h 29.633333 v 6.35 2.910417 h 3.704167 c 2.981238,-0.809364 2.358958,-1.894705 2.645838,-2.910417 v -9.525 c -0.18038,-3.231971 -1.84089,-3.660126 -3.704171,-3.704166 h -5.820833 c -1.904154,-0.196569 -3.183185,0.766806 -3.96875,2.645833 v -5.820832 h 6.879166 c 5.182338,-0.995453 8.809028,-3.750605 10.318748,-9.525001 V 38.89375 c -0.5812,-2.163418 -1.17339,-4.319023 -5.29166,-3.96875 z"
			id="path7187"
		/><path
			style="fill:#d88e2a;fill-opacity:1;fill-rule:evenodd;stroke-width:3;stroke-linecap:round;stroke-linejoin:round;stroke-miterlimit:3;stroke-opacity:0.498674;paint-order:stroke fill markers"
			d="M 114.56458,31.75 V 25.4 c -1.63706,2.505595 -3.55165,4.78613 -6.35,6.35 z"
			id="path10160"
		/><path
			style="fill:#d88e2a;fill-opacity:1;fill-rule:evenodd;stroke-width:3;stroke-linecap:round;stroke-linejoin:round;stroke-miterlimit:3;stroke-opacity:0.498674;paint-order:stroke fill markers"
			d="M 105.03958,31.75 V 25.4 c -1.63706,2.505595 -3.55165,4.78613 -6.349997,6.35 z"
			id="path10162"
		/><path
			style="fill:#d88e2a;fill-opacity:1;fill-rule:evenodd;stroke-width:3;stroke-linecap:round;stroke-linejoin:round;stroke-miterlimit:3;stroke-opacity:0.498674;paint-order:stroke fill markers"
			d="m 105.03958,22.754166 v -6.35 c -1.63706,2.505595 -3.55165,4.78613 -6.349997,6.35 z"
			id="path10164"
		/><path
			style="fill:#d88e2a;fill-opacity:1;fill-rule:evenodd;stroke-width:3;stroke-linecap:round;stroke-linejoin:round;stroke-miterlimit:3;stroke-opacity:0.498674;paint-order:stroke fill markers"
			d="m 114.56458,22.754166 v -6.35 c -1.63706,2.505595 -3.55165,4.78613 -6.35,6.35 z"
			id="path10158"
		/><path
			style="fill:#d88e2a;fill-opacity:1;fill-rule:evenodd;stroke-width:3;stroke-linecap:round;stroke-linejoin:round;stroke-miterlimit:3;stroke-opacity:0.498674;paint-order:stroke fill markers"
			d="m 114.56458,42.333333 v -6.35 c -1.63706,2.505595 -3.55165,4.78613 -6.35,6.35 z"
			id="path10166"
		/><path
			style="fill:#d88e2a;fill-opacity:1;fill-rule:evenodd;stroke-width:3;stroke-linecap:round;stroke-linejoin:round;stroke-miterlimit:3;stroke-opacity:0.498674;paint-order:stroke fill markers"
			d="m 114.56458,51.064583 v -6.35 c -1.63706,2.505595 -3.55165,4.78613 -6.35,6.35 z"
			id="path10168"
		/><path
			style="fill:#d88e2a;fill-opacity:1;fill-rule:evenodd;stroke-width:3;stroke-linecap:round;stroke-linejoin:round;stroke-miterlimit:3;stroke-opacity:0.498674;paint-order:stroke fill markers"
			d="m 114.56458,60.589583 v -6.35 c -1.63706,2.505595 -3.55165,4.78613 -6.35,6.35 z"
			id="path10170"
		/><path
			style="fill:#d88e2a;fill-opacity:1;fill-rule:evenodd;stroke-width:3;stroke-linecap:round;stroke-linejoin:round;stroke-miterlimit:3;stroke-opacity:0.498674;paint-order:stroke fill markers"
			d="m 114.56458,69.585417 v -6.35 c -1.63706,2.505595 -3.55165,4.78613 -6.35,6.35 z"
			id="path10172"
		/><path
			style="fill:#d88e2a;fill-opacity:1;fill-rule:evenodd;stroke-width:3;stroke-linecap:round;stroke-linejoin:round;stroke-miterlimit:3;stroke-opacity:0.498674;paint-order:stroke fill markers"
			d="m 114.56458,80.16875 v -6.35 c -1.63706,2.505595 -3.55165,4.78613 -6.35,6.35 z"
			id="path10174"
		/><path
			style="fill:#d88e2a;fill-opacity:1;fill-rule:evenodd;stroke-width:3;stroke-linecap:round;stroke-linejoin:round;stroke-miterlimit:3;stroke-opacity:0.498674;paint-order:stroke fill markers"
			d="m 91.545833,88.9 v -6.35 c -1.63706,2.505595 -3.55165,4.78613 -6.35,6.35 z"
			id="path10176"
		/><path
			style="fill:#d88e2a;fill-opacity:1;fill-rule:evenodd;stroke-width:3;stroke-linecap:round;stroke-linejoin:round;stroke-miterlimit:3;stroke-opacity:0.498674;paint-order:stroke fill markers"
			d="m 82.55,88.9 v -6.35 c -1.63706,2.505595 -3.55165,4.78613 -6.35,6.35 z"
			id="path10178"
		/><path
			style="fill:#d88e2a;fill-opacity:1;fill-rule:evenodd;stroke-width:3;stroke-linecap:round;stroke-linejoin:round;stroke-miterlimit:3;stroke-opacity:0.498674;paint-order:stroke fill markers"
			d="m 73.025,88.9 v -6.35 c -1.63706,2.505595 -3.55165,4.78613 -6.35,6.35 z"
			id="path10180"
		/><metadata id="metadata28739">
			<!-- svelte-ignore attribute_illegal_colon -->
			<!-- 	data-license="https://creativecommons.org/licenses/by-nc-sa/4.0/" data-author="Doriel Rivalet"--></metadata
		></svg
	>
</div>
