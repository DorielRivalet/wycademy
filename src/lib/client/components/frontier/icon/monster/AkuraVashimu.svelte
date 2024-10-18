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
				id="filter128375"
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
					id="feComposite128361"
				/><feColorMatrix
					in="composite1"
					values="1"
					type="saturate"
					result="colormatrix1"
					id="feColorMatrix128363"
				/><feFlood
					flood-opacity="1"
					flood-color="rgb(0,0,0)"
					result="flood1"
					id="feFlood128365"
				/><feBlend
					in="flood1"
					in2="colormatrix1"
					mode="multiply"
					result="blend1"
					id="feBlend128367"
				/><feBlend
					in2="blend1"
					mode="screen"
					result="blend2"
					id="feBlend128369"
				/><feColorMatrix
					in="blend2"
					values="1"
					type="saturate"
					result="colormatrix2"
					id="feColorMatrix128371"
				/><feComposite
					in="colormatrix2"
					in2="SourceGraphic"
					operator="in"
					k2="1"
					result="composite2"
					id="feComposite128373"
				/></filter
			></defs
		><g id="layer1"
			><path
				style="opacity:1;fill:#000000;fill-opacity:1;fill-rule:evenodd;stroke-width:0.3;stroke-linecap:round;stroke-linejoin:round;stroke-miterlimit:3"
				d="m 41.369982,100.27952 v 1.61364 l 1.870885,0.6782 v 8.30206 l 13.096208,4.98124 0.09354,1.42655 6.173928,1.42655 0.04677,-1.91766 2.174907,-2.03459 2.50231,1.98782 v 2.08136 l 6.384401,-1.54348 -0.163703,-1.33301 6.87551,-3.04019 5.682819,-3.50791 -0.02339,-6.64165 2.73617,-0.95883 v -9.447978 h 4.081481 L 105.40108,75.490278 v -9.868929 h -1.28624 l -9.845538,18.147601 -8.863327,1.824114 -1.917658,13.330068 -19.503993,7.249688 z"
				id="path127579"
			/><path
				style="opacity:1;fill:#2e2f2f;fill-opacity:1;fill-rule:evenodd;stroke-width:0.3;stroke-linecap:round;stroke-linejoin:round;stroke-miterlimit:3"
				d="m 88.040103,90.933983 v 9.706897 l -19.016927,6.18464 v 6.7138 l 3.810974,-1.02115 v 3.46855 l -6.159151,1.45521 v -2.05053 l -2.410042,-1.91043 -2.397074,1.89427 v 2.17491 l -6.015707,-1.61191 v -3.45725 l 3.650623,0.97818 v -6.66672 l -18.927945,-6.37261 v -9.866195 h 44.488687 z"
				id="path123741"
			/><path
				style="opacity:1;fill:#000000;fill-opacity:1;fill-rule:evenodd;stroke-width:0.3;stroke-linecap:round;stroke-linejoin:round;stroke-miterlimit:3"
				d="m 92.912908,100.34968 v 1.30963 h 5.495732 c 0,0 5.84652,-5.752983 5.84652,-5.846527 0,-0.09354 0,-3.671615 0,-3.671615 h -1.21608 z"
				id="path128766"
			/><path
				style="opacity:1;fill:#000000;fill-opacity:1;fill-rule:evenodd;stroke-width:0.3;stroke-linecap:round;stroke-linejoin:round;stroke-miterlimit:3"
				d="m 84.666666,125.4125 -2.348177,0.76068 4.20026,1.28984 h 29.666401 l 8.63204,-8.63203 V 79.242707 l -1.02526,1.025261 -6.25079,13.295312 -3.86953,21.79505 -6.7138,8.23516 z"
				id="path128762"
			/><path
				style="opacity:1;fill:#000000;fill-opacity:1;fill-rule:evenodd;stroke-width:0.3;stroke-linecap:round;stroke-linejoin:round;stroke-miterlimit:3"
				d="m 90.421353,117.30963 1.157552,-3.20807 17.793225,-7.11068 -0.99218,4.23334 -1.59909,-1.16931 z"
				id="path128764"
			/><path
				style="fill:#393a3b;fill-opacity:1;fill-rule:evenodd;stroke-width:0.3;stroke-linecap:round;stroke-linejoin:round;stroke-miterlimit:3"
				d="m 81.245463,124.81539 c 1.785009,0.96732 3.809502,1.37584 6.024068,1.34086 h 23.289059 l 5.10331,-5.14196 -0.076,-30.779915 h -5.3711 L 98.781393,101.66782 c -4.495379,4.68764 -7.659725,9.37527 -9.119701,14.06291 l 17.500888,-7.26166 -2.06607,8.2947 z"
				id="path73576"
			/><path
				style="fill:#2e2f2f;fill-opacity:1;fill-rule:evenodd;stroke-width:0.3;stroke-linecap:round;stroke-linejoin:round;stroke-miterlimit:3"
				d="m 110.6263,126.06112 h 5.01328 l 8.52257,-8.52257 v -5.30192 z"
				id="path74304"
			/><path
				style="fill:#4d6ba1;fill-opacity:1;fill-rule:evenodd;stroke-width:0.300688;stroke-linecap:round;stroke-linejoin:round;stroke-miterlimit:3"
				d="m 115.66996,121.01746 8.38585,-8.63802 v -4.15114 l -8.53777,3.35754 z"
				id="path74524"
			/><path
				style="fill:#a8d4ee;fill-opacity:1;fill-rule:evenodd;stroke-width:0.308213;stroke-linecap:round;stroke-linejoin:round;stroke-miterlimit:3"
				d="M 115.51804,107.08819 V 94.356488 l 8.477,-4.16907 v 13.277172 z"
				id="path74690"
			/><path
				style="fill:#79abd3;fill-opacity:1;fill-rule:evenodd;stroke-width:0.3;stroke-linecap:round;stroke-linejoin:round;stroke-miterlimit:3"
				d="m 115.54843,111.62896 8.47699,-3.37257 v -5.22596 l -8.56814,3.40295 z"
				id="path74526"
			/><path
				style="fill:#d8eff4;fill-opacity:1;fill-rule:evenodd;stroke-width:0.3;stroke-linecap:round;stroke-linejoin:round;stroke-miterlimit:3"
				d="m 115.45728,94.345331 v -7.418155 l 8.59853,-9.05428 v 12.521949 z"
				id="path74746"
			/><path
				style="fill:#8d181c;fill-opacity:1;fill-rule:evenodd;stroke-width:0.3;stroke-linecap:round;stroke-linejoin:round;stroke-miterlimit:3"
				d="m 95.605467,100.49653 c -0.02829,-0.1056 0,-3.650182 0,-3.650182 0,0 5.736323,-0.07075 5.650393,0.01519 -0.0859,0.08594 -3.262256,3.631632 -3.262256,3.631632 z"
				id="path74804"
			/><rect
				style="fill:#6c1316;fill-opacity:1;fill-rule:evenodd;stroke-width:0.3;stroke-linecap:round;stroke-linejoin:round;stroke-miterlimit:3"
				id="rect75022"
				width="3.6308594"
				height="3.6738281"
				x="92.039062"
				y="96.808594"
			/><path
				style="fill:#010101;fill-opacity:1;fill-rule:evenodd;stroke-width:0.3;stroke-linecap:round;stroke-linejoin:round;stroke-miterlimit:3"
				d="m 92.060545,97.023437 c 0,-0.171876 0,-1.095703 0,-1.095703 l 2.975371,-5.153496 h 8.389864 v 4.994535 l -2.40346,1.387639 z"
				id="path75856"
			/><path
				style="opacity:1;fill:#000000;fill-opacity:1;fill-rule:evenodd;stroke-width:0.3;stroke-linecap:round;stroke-linejoin:round;stroke-miterlimit:3"
				d="m 105.75187,54.466188 v 1.637027 h 10.87453 c 4.5315,1.834293 5.50367,4.9539 8.04481,7.506933 -1.18024,-3.5432 0.64058,-6.312928 -6.03361,-11.272094 z"
				id="path128770"
			/><path
				style="opacity:1;fill:#000000;fill-opacity:1;fill-rule:evenodd;stroke-width:0.3;stroke-linecap:round;stroke-linejoin:round;stroke-miterlimit:3"
				d="m 109.30655,70.251795 v 1.917658 h 10.78099 c 3.74556,1.611698 5.74563,4.549964 7.99804,7.296457 -0.54537,-3.629953 -0.77867,-7.293005 -5.30864,-10.500349 z"
				id="path128768"
			/><g id="g94679"
				><path
					style="opacity:1;fill:#2e2f2f;fill-opacity:1;fill-rule:evenodd;stroke-width:0.3;stroke-linecap:round;stroke-linejoin:round;stroke-miterlimit:3"
					d="m 108.60352,70.8125 -0.15039,-6.273437 c 14.57666,-1.76626 17.9747,5.79648 19.24002,14.25654 0.85554,-0.557962 -6.94515,-7.721515 -7.63846,-7.510448 -0.25951,0.079 -11.45117,-0.472655 -11.45117,-0.472655 z"
					id="path77540"
				/><path
					style="opacity:1;fill:#2e2f2f;fill-opacity:1;fill-rule:evenodd;stroke-width:0.3;stroke-linecap:round;stroke-linejoin:round;stroke-miterlimit:3"
					d="m 104.84945,54.673019 -0.15039,-6.273437 c 14.57666,-1.76626 17.9747,5.79648 19.24002,14.25654 0.85554,-0.557962 -6.94515,-7.721515 -7.63846,-7.510448 -0.25951,0.079 -11.45117,-0.472655 -11.45117,-0.472655 z"
					id="path77652"
				/></g
			><path
				style="opacity:1;fill:#000000;fill-opacity:1;fill-rule:evenodd;stroke-width:0.3;stroke-linecap:round;stroke-linejoin:round;stroke-miterlimit:3"
				d="m 71.046921,124.48412 2.549083,-2.08136 10.991459,-12.37124 1.403164,-0.77174 v 7.67064 c -0.627223,6.44043 -7.510785,7.24453 -14.943706,7.5537 z"
				id="path128742"
			/><g id="g93130"
				><path
					style="opacity:1;fill:#393a3b;fill-opacity:1;fill-rule:evenodd;stroke-width:0.3;stroke-linecap:round;stroke-linejoin:round;stroke-miterlimit:3"
					d="m 70.307405,122.962 c 6.197947,-4.26569 5.323826,-8.90723 5.651331,-13.40465 l 7.170505,-0.0752 -0.425371,9.3477 -4.587907,3.25103 c -2.087639,0.72305 -4.749391,0.96768 -7.808558,0.88112 z"
					id="path90559"
				/><path
					style="opacity:1;fill:#6c1316;fill-opacity:1;fill-rule:evenodd;stroke-width:0.3;stroke-linecap:round;stroke-linejoin:round;stroke-miterlimit:3"
					d="m 81.853134,109.51806 3.585252,-0.0967 v 4.15212 l -3.494103,-2.55221 z"
					id="path90285"
				/><path
					style="opacity:1;fill:#8d181c;fill-opacity:1;fill-rule:evenodd;stroke-width:0.3;stroke-linecap:round;stroke-linejoin:round;stroke-miterlimit:3"
					d="m 85.286468,113.42158 c 0.188491,5.92021 -3.393624,8.6903 -9.601184,9.26697 5.19913,-1.36946 6.918811,-5.54181 6.289384,-11.6065 z"
					id="path90503"
				/></g
			><path
				style="opacity:1;fill:#000000;fill-opacity:1;fill-rule:evenodd;stroke-width:0.3;stroke-linecap:round;stroke-linejoin:round;stroke-miterlimit:3"
				d="m 44.620648,118.56744 c 1.201887,4.35653 5.946527,6.33087 14.38244,5.82314 -2.294512,-2.85488 -5.836667,-3.73556 -5.636045,-10.21972 z"
				id="path128740"
			/><g id="g93138" transform="matrix(-1,0,0,1,128.5036,0)"
				><path
					style="opacity:1;fill:#393a3b;fill-opacity:1;fill-rule:evenodd;stroke-width:0.3;stroke-linecap:round;stroke-linejoin:round;stroke-miterlimit:3"
					d="m 70.307405,122.962 c 6.197947,-4.26569 5.323826,-8.90723 5.651331,-13.40465 l 7.170505,-0.0752 -0.425371,9.3477 -4.587907,3.25103 c -2.087639,0.72305 -4.749391,0.96768 -7.808558,0.88112 z"
					id="path93132"
				/><path
					style="opacity:1;fill:#6c1316;fill-opacity:1;fill-rule:evenodd;stroke-width:0.3;stroke-linecap:round;stroke-linejoin:round;stroke-miterlimit:3"
					d="m 81.853134,109.51806 3.585252,-0.0967 v 4.15212 l -3.494103,-2.55221 z"
					id="path93134"
				/><path
					style="opacity:1;fill:#8d181c;fill-opacity:1;fill-rule:evenodd;stroke-width:0.3;stroke-linecap:round;stroke-linejoin:round;stroke-miterlimit:3"
					d="m 85.286468,113.42158 c 0.188491,5.92021 -3.393624,8.6903 -9.601184,9.26697 5.19913,-1.36946 6.918811,-5.54181 6.289384,-11.6065 z"
					id="path93136"
				/></g
			><path
				style="opacity:1;fill:#000000;fill-opacity:1;fill-rule:evenodd;stroke-width:0.3;stroke-linecap:round;stroke-linejoin:round;stroke-miterlimit:3"
				d="m 5.4489574,117.70216 v 1.23946 l 8.3424486,8.53794 h 29.88138 c 2.149311,-0.0635 3.179879,-0.81274 4.409001,-1.44026 -0.919822,-0.35299 -1.824615,-0.71933 -3.016803,-0.83021 h -26.31264 z"
				id="path128758"
			/><path
				style="opacity:1;fill:#000000;fill-opacity:1;fill-rule:evenodd;stroke-width:0.3;stroke-linecap:round;stroke-linejoin:round;stroke-miterlimit:3"
				d="m 24.18121,117.32798 -1.941045,-7.41339 17.399246,7.39 c -0.352295,-2.72143 -1.837218,-5.18149 -5.425572,-7.15614 l -14.171966,-4.11595 0.140317,11.90352 4.045792,-0.49111 z"
				id="path128760"
			/><path
				style="opacity:1;fill:#000000;fill-opacity:1;fill-rule:evenodd;stroke-width:0.3;stroke-linecap:round;stroke-linejoin:round;stroke-miterlimit:3"
				d="m 13.821175,90.738004 c 0,-0.233863 0,-2.38538 0,-2.38538 l -0.92375,-0.923751 -0.549573,4.0341 z"
				id="path128756"
			/><path
				style="opacity:1;fill:#000000;fill-opacity:1;fill-rule:evenodd;stroke-width:0.3;stroke-linecap:round;stroke-linejoin:round;stroke-miterlimit:3"
				d="m 26.262571,96.18696 c 0.09354,0.11693 4.957849,5.56589 4.957849,5.56589 h 6.033611 v -4.607059 l -1.286234,-1.286235 z"
				id="path128754"
			/><path
				style="fill:#393a3b;fill-opacity:1;fill-rule:evenodd;stroke-width:0.3;stroke-linecap:round;stroke-linejoin:round;stroke-miterlimit:3"
				d="m 47.432497,124.81539 c -1.785009,0.96732 -3.809502,1.37584 -6.024068,1.34086 H 18.11937 l -5.10331,-5.14196 0.076,-30.779915 h 5.3711 l 11.433407,11.433445 c 4.495379,4.68764 7.659725,9.37527 9.119701,14.06291 l -17.500888,-7.26166 2.06607,8.2947 z"
				id="path94657"
			/><path
				style="fill:#2e2f2f;fill-opacity:1;fill-rule:evenodd;stroke-width:0.3;stroke-linecap:round;stroke-linejoin:round;stroke-miterlimit:3"
				d="m 18.05166,126.06112 h -5.01328 l -8.52257,-8.52257 v -5.30192 z"
				id="path94659"
			/><path
				style="fill:#4d6ba1;fill-opacity:1;fill-rule:evenodd;stroke-width:0.301361;stroke-linecap:round;stroke-linejoin:round;stroke-miterlimit:3"
				d="m 13.008,121.01746 -8.38585,-8.67671 v -4.16974 l 8.53777,3.37258 z"
				id="path94661"
			/><path
				style="fill:#a8d4ee;fill-opacity:1;fill-rule:evenodd;stroke-width:0.303052;stroke-linecap:round;stroke-linejoin:round;stroke-miterlimit:3"
				d="M 13.15992,106.5737 V 94.264807 l -8.477,-4.030617 v 12.83624 z"
				id="path94663"
			/><path
				style="fill:#79abd3;fill-opacity:1;fill-rule:evenodd;stroke-width:0.3;stroke-linecap:round;stroke-linejoin:round;stroke-miterlimit:3"
				d="m 13.12953,111.62896 -8.47699,-3.37257 v -5.22596 l 8.56814,3.40295 z"
				id="path94665"
			/><path
				style="fill:#d8eff4;fill-opacity:1;fill-rule:evenodd;stroke-width:0.3;stroke-linecap:round;stroke-linejoin:round;stroke-miterlimit:3"
				d="M 13.22068,94.345331 V 86.927176 L 4.62215,77.872896 V 90.394845 Z"
				id="path94667"
			/><path
				style="fill:#8d181c;fill-opacity:1;fill-rule:evenodd;stroke-width:0.3;stroke-linecap:round;stroke-linejoin:round;stroke-miterlimit:3"
				d="m 33.072493,100.49653 c 0.02829,-0.1056 0,-3.650182 0,-3.650182 0,0 -5.736323,-0.07075 -5.650393,0.01519 0.0859,0.08594 3.262256,3.631632 3.262256,3.631632 z"
				id="path94669"
			/><rect
				style="fill:#6c1316;fill-opacity:1;fill-rule:evenodd;stroke-width:0.3;stroke-linecap:round;stroke-linejoin:round;stroke-miterlimit:3"
				id="rect94671"
				width="3.6308594"
				height="3.6738281"
				x="-36.638897"
				y="96.808594"
				transform="scale(-1,1)"
			/><path
				style="fill:#010101;fill-opacity:1;fill-rule:evenodd;stroke-width:0.3;stroke-linecap:round;stroke-linejoin:round;stroke-miterlimit:3"
				d="m 36.617415,97.023437 c 0,-0.171876 0,-1.095703 0,-1.095703 L 33.642044,90.774238 H 25.25218 v 4.994535 l 2.40346,1.387639 z"
				id="path94673"
			/><path
				style="opacity:1;fill:#000000;fill-opacity:1;fill-rule:evenodd;stroke-width:0.3;stroke-linecap:round;stroke-linejoin:round;stroke-miterlimit:3"
				d="m 5.4255714,63.610148 c 1.8286016,-3.225996 4.3467015,-5.45605 7.2964576,-7.0626 l 11.7632,-0.374176 V 49.7422 l -9.003011,2.41235 -7.7414244,4.743791 -1.8007285,3.133735 c -0.3497467,1.192691 -0.4005557,2.385381 -0.5144937,3.578072 z"
				id="path128778"
			/><path
				style="opacity:1;fill:#000000;fill-opacity:1;fill-rule:evenodd;stroke-width:0.3;stroke-linecap:round;stroke-linejoin:round;stroke-miterlimit:3"
				d="M 1.8475006,79.933632 C 4.0267407,77.187516 5.8491345,74.21991 9.7519968,72.543629 H 20.696684 v -6.641647 h -0.701583 l -13.1195925,5.07478 -4.4433558,4.887692 c -0.3695212,1.20172 -0.5500012,2.516865 -0.6080382,3.905475 z"
				id="path128776"
			/><g id="g94685" transform="matrix(-1,0,0,1,128.74035,0)"
				><path
					style="opacity:1;fill:#2e2f2f;fill-opacity:1;fill-rule:evenodd;stroke-width:0.3;stroke-linecap:round;stroke-linejoin:round;stroke-miterlimit:3"
					d="m 108.60352,70.8125 -0.15039,-6.273437 c 14.57666,-1.76626 17.9747,5.79648 19.24002,14.25654 0.85554,-0.557962 -6.94515,-7.721515 -7.63846,-7.510448 -0.25951,0.079 -11.45117,-0.472655 -11.45117,-0.472655 z"
					id="path94681"
				/><path
					style="opacity:1;fill:#2e2f2f;fill-opacity:1;fill-rule:evenodd;stroke-width:0.3;stroke-linecap:round;stroke-linejoin:round;stroke-miterlimit:3"
					d="m 104.84945,54.673019 -0.15039,-6.273437 c 14.57666,-1.76626 17.9747,5.79648 19.24002,14.25654 0.85554,-0.557962 -6.94515,-7.721515 -7.63846,-7.510448 -0.25951,0.079 -11.45117,-0.472655 -11.45117,-0.472655 z"
					id="path94683"
				/></g
			><path
				style="opacity:1;fill:#000000;fill-opacity:1;fill-rule:evenodd;stroke-width:0.3;stroke-linecap:round;stroke-linejoin:round;stroke-miterlimit:3"
				d="m 61.879426,22.919531 -11.972395,14.2875 -2.667143,7.50716 -8.699622,8.699624 -8.676238,-9.02703 -2.478926,1.800731 H 18.03067 v -3.999021 l -0.514494,-5.215097 -0.222167,-0.268941 h -2.30353 L 3.405706,25.119684 4.4152343,24.110156 22.216779,13.283295 21.480859,12.286588 12.914974,3.9274088 h 3.100586 35.433822 z"
				id="path129522"
			/><path
				style="opacity:1;fill:#79abd3;fill-opacity:1;fill-rule:evenodd;stroke-width:0.3;stroke-linecap:round;stroke-linejoin:round;stroke-miterlimit:3"
				d="m 50.132765,23.638358 c 0,0 9.598131,-0.303834 9.294297,0 -0.303837,0.303835 -9.901965,11.849564 -9.901965,11.849564 H 39.498542 L 38.70857,26.129805 Z"
				id="path95647"
			/><path
				style="opacity:1;fill:#d8f0f4;fill-opacity:1;fill-rule:evenodd;stroke-width:0.3;stroke-linecap:round;stroke-linejoin:round;stroke-miterlimit:3"
				d="M 11.974151,2.3594866 31.341653,2.4454241 21.794497,12.22891 Z"
				id="path95531"
			/><path
				style="opacity:1;fill:#4d6ba1;fill-opacity:1;fill-rule:evenodd;stroke-width:0.3;stroke-linecap:round;stroke-linejoin:round;stroke-miterlimit:3"
				d="m 37.979368,34.947759 8.750445,3.335443 -0.249806,4.982893 -7.710667,-1.033039 z"
				id="path95645"
			/><path
				style="opacity:1;fill:#d8eff4;fill-opacity:1;fill-rule:evenodd;stroke-width:0.3;stroke-linecap:round;stroke-linejoin:round;stroke-miterlimit:3"
				d="m 37.979368,51.773473 c -0.541742,-0.312775 -8.718572,-7.911521 -8.583338,-8.416227 0.135236,-0.504705 8.765639,-8.705951 8.765639,-8.705951 l 8.568144,8.675567 z"
				id="path95415"
			/><path
				style="opacity:1;fill:#000000;fill-opacity:1;fill-rule:evenodd;stroke-width:0.3;stroke-linecap:round;stroke-linejoin:round;stroke-miterlimit:3"
				d="M 105.33092,28.71811 V 23.058678 H 55.893228 l 3.042709,-9.961803 h 48.947913 l 10.42635,-2.128802 2.47892,0.257247 c 0.42187,0.758718 0.66148,1.626787 0.77174,2.572469 v 9.237503 h -3.67161 v 2.759558 z"
				id="path129520"
			/><path
				style="opacity:1;fill:#2e2f2f;fill-opacity:1;fill-rule:evenodd;stroke-width:0.3;stroke-linecap:round;stroke-linejoin:round;stroke-miterlimit:3"
				d="m 61.860794,21.602664 c 2.419342,-0.51715 3.182812,-1.898234 3.767553,-3.372567 V 5.2563445 C 65.293448,3.9097511 64.66646,2.7384111 62.726723,2.3547208 H 46.456361 l -19.357215,19.3572172 34.670497,0.01226 z"
				id="path103939"
			/><path
				style="opacity:1;fill:#a8d4ee;fill-opacity:1;fill-rule:evenodd;stroke-width:0.3;stroke-linecap:round;stroke-linejoin:round;stroke-miterlimit:3"
				d="m 39.559309,12.031864 10.208855,-0.128906 9.587072,11.796167 H 46.365212 Z"
				id="path95649"
			/><path
				style="opacity:1;fill:#d8eff4;fill-opacity:1;fill-rule:evenodd;stroke-width:0.3;stroke-linecap:round;stroke-linejoin:round;stroke-miterlimit:3"
				d="M 39.498542,35.366388 51.044271,23.820659 39.485958,12.004534 27.709746,23.790276 Z"
				id="path95529"
			/><path
				style="opacity:1;fill:#4d6ba1;fill-opacity:1;fill-rule:evenodd;stroke-width:0.3;stroke-linecap:round;stroke-linejoin:round;stroke-miterlimit:3"
				d="m 14.280242,35.305621 h 17.075523 l 0.484079,-2.864215 c 0.301616,-0.98112 0.0735,-1.96224 0,-2.94336 L 25.716797,23.568359 15.46875,27.585937 Z"
				id="path95705"
			/><path
				style="opacity:1;fill:#79abd3;fill-opacity:1;fill-rule:evenodd;stroke-width:0.3;stroke-linecap:round;stroke-linejoin:round;stroke-miterlimit:3"
				d="M 26.43364,44.861228 32.738214,40.410047 32.631872,32.388804 25.2183,36.156357 Z"
				id="path95533"
			/><path
				style="opacity:1;fill:#d8eff4;fill-opacity:1;fill-rule:evenodd;stroke-width:0.3;stroke-linecap:round;stroke-linejoin:round;stroke-miterlimit:3"
				d="M 14.219475,35.366388 25.82597,23.516824 14.371393,12.062247 2.6433639,23.699125 Z"
				id="path95527"
			/><path
				style="opacity:1;fill:#a8d4ee;fill-opacity:1;fill-rule:evenodd;stroke-width:0.3;stroke-linecap:round;stroke-linejoin:round;stroke-miterlimit:3"
				d="m 17.166675,35.411962 4.952509,-2.78009 10.573455,-0.167109 -8.325077,5.575372 z"
				id="path95589"
			/><path
				style="opacity:1;fill:#d8eff4;fill-opacity:1;fill-rule:evenodd;stroke-width:0.3;stroke-linecap:round;stroke-linejoin:round;stroke-miterlimit:3"
				d="m 17.110804,44.785271 c 0,0 9.18909,0.72593 9.383602,0 0.194514,-0.725931 0,-9.434075 0,-9.434075 l -9.297348,-0.03038 z"
				id="path95525"
			/><path
				style="opacity:1;fill:#a8d4ee;fill-opacity:1;fill-rule:evenodd;stroke-width:0.3;stroke-linecap:round;stroke-linejoin:round;stroke-miterlimit:3"
				d="m 21.511514,12.183781 9.692335,-9.6923345 10.770947,0 -10.254427,9.8746355 z"
				id="path97647"
			/><path
				style="opacity:1;fill:#4d6ba1;fill-opacity:1;fill-rule:evenodd;stroke-width:0.3;stroke-linecap:round;stroke-linejoin:round;stroke-miterlimit:3"
				d="M 31.385517,12.639534 41.698107,2.3699125 h 5.457077 L 35.898097,13.626997 Z"
				id="path97649"
			/><path
				style="opacity:1;fill:#79abd3;fill-opacity:1;fill-rule:evenodd;stroke-width:0.3;stroke-linecap:round;stroke-linejoin:round;stroke-miterlimit:3"
				d="M 25.82597,23.972577 37.721108,12.077439 H 14.356082 Z"
				id="path95761"
			/><g id="g104919" transform="matrix(1.0715997,0,0,1,27.859143,0)"
				><rect
					style="opacity:1;fill:#8d181c;fill-opacity:1;fill-rule:evenodd;stroke-width:0.3;stroke-linecap:round;stroke-linejoin:round;stroke-miterlimit:3"
					id="rect104915"
					width="3.6953125"
					height="16.242188"
					x="65.613281"
					y="5.3710938"
				/><rect
					style="opacity:1;fill:#6c1316;fill-opacity:1;fill-rule:evenodd;stroke-width:0.3;stroke-linecap:round;stroke-linejoin:round;stroke-miterlimit:3"
					id="rect104917"
					width="3.6953125"
					height="3.4375"
					x="65.613281"
					y="18.175781"
				/></g
			><path
				style="opacity:1;fill:#000000;fill-opacity:1;fill-rule:evenodd;stroke-width:0.3;stroke-linecap:round;stroke-linejoin:round;stroke-miterlimit:3"
				d="m 89.966262,47.871313 v 1.496708 h 10.102788 c 3.71839,-1.797038 2.65423,-2.877965 2.82972,-3.484525 h 15.15418 v -0.935445 c 2.5704,-1.400471 3.07547,-2.880378 3.3908,-4.367583 V 28.277343 c -0.11744,-1.494497 -1.24693,-1.281177 -1.87071,-1.921227 l -11.71642,13.727631 -10.430196,4.911077 z"
				id="path129514"
			/><g id="g104913" transform="matrix(1.1073996,0,0,1,8.9440509,0)"
				><rect
					style="opacity:1;fill:#8d181c;fill-opacity:1;fill-rule:evenodd;stroke-width:0.3;stroke-linecap:round;stroke-linejoin:round;stroke-miterlimit:3"
					id="rect104909"
					width="3.6953125"
					height="16.242188"
					x="65.613281"
					y="5.3710938"
				/><rect
					style="opacity:1;fill:#6c1316;fill-opacity:1;fill-rule:evenodd;stroke-width:0.3;stroke-linecap:round;stroke-linejoin:round;stroke-miterlimit:3"
					id="rect104911"
					width="3.6953125"
					height="3.4375"
					x="65.613281"
					y="18.175781"
				/></g
			><g id="g104907" transform="matrix(0.94304277,0,0,1,3.7371505,0)"
				><rect
					style="opacity:1;fill:#8d181c;fill-opacity:1;fill-rule:evenodd;stroke-width:0.3;stroke-linecap:round;stroke-linejoin:round;stroke-miterlimit:3"
					id="rect104254"
					width="3.6953125"
					height="16.242188"
					x="65.613281"
					y="5.3710938"
				/><rect
					style="opacity:1;fill:#6c1316;fill-opacity:1;fill-rule:evenodd;stroke-width:0.3;stroke-linecap:round;stroke-linejoin:round;stroke-miterlimit:3"
					id="rect104412"
					width="3.6953125"
					height="3.4375"
					x="65.613281"
					y="18.175781"
				/></g
			><path
				style="opacity:1;fill:#2e2f2f;fill-opacity:1;fill-rule:evenodd;stroke-width:0.3;stroke-linecap:round;stroke-linejoin:round;stroke-miterlimit:3"
				d="M 69.031299,2.1268446 V 19.506203 c 1.014119,0.947749 1.700323,2.319858 3.623045,2.091767 h 8.986105 V 4.2536893 C 81.05323,3.0424617 80.274744,1.9645411 77.825469,2.0511103 Z"
				id="path104943"
			/><path
				style="opacity:1;fill:#2e2f2f;fill-opacity:1;fill-rule:evenodd;stroke-width:0.3;stroke-linecap:round;stroke-linejoin:round;stroke-miterlimit:3"
				d="M 85.647621,2.1268446 V 19.506203 c 1.014119,0.947749 1.700323,2.319858 3.623045,2.091767 h 8.986105 V 4.2536893 C 97.669552,3.0424617 96.891066,1.9645411 94.441791,2.0511103 Z"
				id="path105871"
			/><path
				style="opacity:1;fill:#2e2f2f;fill-opacity:1;fill-rule:evenodd;stroke-width:0.3;stroke-linecap:round;stroke-linejoin:round;stroke-miterlimit:3"
				d="m 102.11892,17.774344 c 0.44824,1.76355 1.15035,3.351346 3.67641,3.676403 h 15.10059 v -9.358116 c -1.08567,-4.8623619 -4.5488,-8.3322145 -11.30266,-9.8746359 h -7.47434 z"
				id="path105873"
			/><path
				style="opacity:1;fill:#2e2f2f;fill-opacity:1;fill-rule:evenodd;stroke-width:0.3;stroke-linecap:round;stroke-linejoin:round;stroke-miterlimit:3"
				d="m 108.28677,24.914465 h 8.8416 c 2.00222,-0.03466 3.45993,0.487304 3.64602,2.309146 v 12.305316 c -0.97557,2.083711 -2.06994,4.103845 -5.86402,4.679058 h -9.41888 V 26.769531 c 0.0735,-1.304997 1.30306,-1.685078 2.79528,-1.855066 z"
				id="path105875"
			/><rect
				style="opacity:1;fill:#000000;fill-opacity:1;fill-rule:evenodd;stroke-width:0.3;stroke-linecap:round;stroke-linejoin:round;stroke-miterlimit:3"
				id="rect129512"
				width="5.238483"
				height="3.5546846"
				x="86.037399"
				y="42.188492"
			/><rect
				style="opacity:1;fill:#000000;fill-opacity:1;fill-rule:evenodd;stroke-width:0.3;stroke-linecap:round;stroke-linejoin:round;stroke-miterlimit:3"
				id="rect129510"
				width="1.9176589"
				height="5.308641"
				x="84.564079"
				y="43.895676"
			/><g id="g104931" transform="matrix(1.0178999,0,0,1,18.809174,22.969922)"
				><rect
					style="opacity:1;fill:#8d181c;fill-opacity:1;fill-rule:evenodd;stroke-width:0.3;stroke-linecap:round;stroke-linejoin:round;stroke-miterlimit:3"
					id="rect104927"
					width="3.6953125"
					height="16.242188"
					x="65.613281"
					y="5.3710938"
				/><rect
					style="opacity:1;fill:#6c1316;fill-opacity:1;fill-rule:evenodd;stroke-width:0.3;stroke-linecap:round;stroke-linejoin:round;stroke-miterlimit:3"
					id="rect104929"
					width="3.6953125"
					height="3.4375"
					x="65.613281"
					y="18.175781"
				/></g
			><path
				style="opacity:1;fill:#000000;fill-opacity:1;fill-rule:evenodd;stroke-width:0.3;stroke-linecap:round;stroke-linejoin:round;stroke-miterlimit:3"
				d="m 102.68829,28.577794 v -2.15152 h -1.09914 l -0.64063,2.390859 z"
				id="path129516"
			/><g id="g104925" transform="matrix(1.0316429,0,0,1,34.016083,22.969922)"
				><rect
					style="opacity:1;fill:#8d181c;fill-opacity:1;fill-rule:evenodd;stroke-width:0.3;stroke-linecap:round;stroke-linejoin:round;stroke-miterlimit:3"
					id="rect104921"
					width="3.6953125"
					height="16.242188"
					x="65.613281"
					y="5.3710938"
				/><rect
					style="opacity:1;fill:#6c1316;fill-opacity:1;fill-rule:evenodd;stroke-width:0.3;stroke-linecap:round;stroke-linejoin:round;stroke-miterlimit:3"
					id="rect104923"
					width="3.6953125"
					height="3.4375"
					x="65.613281"
					y="18.175781"
				/></g
			><path
				style="opacity:1;fill:#2e2f2f;fill-opacity:1;fill-rule:evenodd;stroke-width:0.3;stroke-linecap:round;stroke-linejoin:round;stroke-miterlimit:3"
				d="m 89.074219,48.060546 h 10.355466 c 1.601295,-0.360125 2.221665,-1.420909 2.631835,-2.631834 V 24.857422 H 91.093749 c -1.588367,0.500769 -2.235048,1.813337 -2.162643,3.745806 v 19.457318 z"
				id="path106603"
			/><path
				style="opacity:1;fill:#2e2f2f;fill-opacity:1;fill-rule:evenodd;stroke-width:0.3;stroke-linecap:round;stroke-linejoin:round;stroke-miterlimit:3"
				d="m 66.995605,24.823315 h 16.194403 c 1.164082,0.516931 2.196264,1.121796 2.400294,2.278762 V 44.359901 H 52.836897 v -4.314455 c 0.436741,-1.90539 1.497941,-3.766176 3.068732,-5.590563 3.717939,-3.561647 7.518828,-8.491969 11.089976,-9.631568 z"
				id="path106607"
			/><path
				style="opacity:1;fill:#000000;fill-opacity:1;fill-rule:evenodd;stroke-width:0.3;stroke-linecap:round;stroke-linejoin:round;stroke-miterlimit:3"
				d="m 42.492514,59.447424 c 0.468856,-0.736095 1.007907,-1.437091 1.847501,-1.987817 l 5.823135,-0.771742 c 0,0 -2.128135,5.425572 -2.245065,5.519115 -0.11693,0.09355 -5.425571,-2.759556 -5.425571,-2.759556 z"
				id="path128752"
			/><path
				style="opacity:1;fill:#9d2828;fill-opacity:1;fill-rule:evenodd;stroke-width:0.3;stroke-linecap:round;stroke-linejoin:round;stroke-miterlimit:3"
				d="m 47.448242,61.305664 3.023925,-3.023925 0.02686,-0.48877 -2.846679,0.01074 c -2.266449,1.333244 -2.840044,2.727676 -2.739258,4.146483 z"
				id="path109387"
			/><path
				style="opacity:1;fill:#000000;fill-opacity:1;fill-rule:evenodd;stroke-width:0.3;stroke-linecap:round;stroke-linejoin:round;stroke-miterlimit:3"
				d="m 86.0374,59.447424 -0.374176,-0.795126 c 1.919946,-0.8419 1.503643,-1.683799 2.151518,-2.525699 v -6.524718 h -1.379779 l -6.477944,5.612662 1.309621,4.794147 c 0,0 3.414369,2.899873 3.507912,2.829716 0.09354,-0.07016 1.262848,-3.390982 1.262848,-3.390982 z"
				id="path129506"
			/><rect
				style="opacity:1;fill:#000000;fill-opacity:1;fill-rule:evenodd;stroke-width:0.3;stroke-linecap:round;stroke-linejoin:round;stroke-miterlimit:3"
				id="rect129508"
				width="3.6716151"
				height="3.8119316"
				x="49.718811"
				y="44.456944"
			/><path
				style="opacity:1;fill:#9d2828;fill-opacity:1;fill-rule:evenodd;stroke-width:0.3;stroke-linecap:round;stroke-linejoin:round;stroke-miterlimit:3"
				d="m 83.706527,61.967136 c -0.149693,-1.458495 -0.589595,-2.905609 -2.780091,-4.284073 h -3.463718 l 4.717039,4.717039 z"
				id="path109331"
			/><path
				style="opacity:1;fill:#6a1b1b;fill-opacity:1;fill-rule:evenodd;stroke-width:0.306426;stroke-linecap:round;stroke-linejoin:round;stroke-miterlimit:3"
				d="M 47.394531,60.866927 H 81.336615 C 80.955281,59.494235 79.877439,58.460656 78.281368,57.679388 H 50.011231 c -1.348203,0.991573 -2.461129,2.018213 -2.6167,3.187539 z"
				id="path108551"
			/><path
				style="opacity:1;fill:#2e2f2f;fill-opacity:1;fill-rule:evenodd;stroke-width:0.3;stroke-linecap:round;stroke-linejoin:round;stroke-miterlimit:3"
				d="m 87.097655,48.167969 v 6.423827 c -0.294307,1.704959 -1.356151,2.861677 -3.351562,3.351562 H 43.699218 v -5.478516 c 0.58851,-2.824102 2.388959,-4.022433 4.629883,-4.629882 h 11.93457 z"
				id="path106609"
			/><path
				style="opacity:1;fill:#8d181c;fill-opacity:1;fill-rule:evenodd;stroke-width:0.3;stroke-linecap:round;stroke-linejoin:round;stroke-miterlimit:3"
				d="m 87.35384,86.394725 0.694531,4.522722 h -9.665559 v -4.960938 h 6.879166 z"
				id="path123739"
			/><path
				style="opacity:1;fill:#000000;fill-opacity:1;fill-rule:evenodd;stroke-width:0.3;stroke-linecap:round;stroke-linejoin:round;stroke-miterlimit:3"
				d="m 40.36438,75.817681 v -5.472342 h 3.461139 v 5.799748 z"
				id="path128748"
			/><path
				style="opacity:1;fill:#000000;fill-opacity:1;fill-rule:evenodd;stroke-width:0.3;stroke-linecap:round;stroke-linejoin:round;stroke-miterlimit:3"
				d="m 41.043489,92.174218 c -0.23151,0 -3.902604,0 -3.902604,0 L 24.578774,75.583822 V 74.39113 l 7.998041,3.414369 4.045791,8.231901 5.004623,-0.724969 z"
				id="path128744"
			/><path
				style="opacity:1;fill:#000000;fill-opacity:1;fill-rule:evenodd;stroke-width:0.3;stroke-linecap:round;stroke-linejoin:round;stroke-miterlimit:3"
				d="m 89.164582,75.803124 v -5.655469 c 4.928545,-2.294888 9.710712,-4.753374 13.163018,-8.698177 v -8.698177 h -1.75286 l -13.163022,13.526823 -3.604948,4.927865 0.926041,5.126302 z"
				id="path128746"
			/><path
				style="opacity:1;fill:#2e2f2f;fill-opacity:1;fill-rule:evenodd;stroke-width:0.3;stroke-linecap:round;stroke-linejoin:round;stroke-miterlimit:3"
				d="m 36.824218,86.474608 h 55.025086 v -7.35599 C 91.44027,77.185992 90.300255,75.609942 87.550039,74.819356 h -2.142037 l -0.0067,-0.465985 H 43.22052 v 0.511559 h -3.007965 c -1.655721,1.137642 -3.28553,2.296235 -3.624665,4.498351 v 7.154296 z"
				id="path107339"
			/><rect
				style="opacity:1;fill:#8d181c;fill-opacity:1;fill-rule:evenodd;stroke-width:0.3;stroke-linecap:round;stroke-linejoin:round;stroke-miterlimit:3"
				id="rect123521"
				width="9.5746088"
				height="4.7459636"
				x="40.481251"
				y="86.254166"
			/><rect
				style="opacity:1;fill:#8d181c;fill-opacity:1;fill-rule:evenodd;stroke-width:0.308644;stroke-linecap:round;stroke-linejoin:round;stroke-miterlimit:3"
				id="rect108069"
				width="8.937499"
				height="3.5929687"
				x="108.1953"
				y="21.406641"
			/><rect
				style="opacity:0.452088;fill:#6c1316;fill-opacity:1;fill-rule:evenodd;stroke-width:0.3;stroke-linecap:round;stroke-linejoin:round;stroke-miterlimit:3"
				id="rect108175"
				width="2.75"
				height="3.3945312"
				x="108.1953"
				y="21.505859"
			/><rect
				style="opacity:1;fill:#8d181c;fill-opacity:1;fill-rule:evenodd;stroke-width:0.315654;stroke-linecap:round;stroke-linejoin:round;stroke-miterlimit:3"
				id="rect108231"
				width="32.905323"
				height="3.8682792"
				x="52.776131"
				y="44.334122"
			/><rect
				style="opacity:1;fill:#6c1316;fill-opacity:1;fill-rule:evenodd;stroke-width:0.319449;stroke-linecap:round;stroke-linejoin:round;stroke-miterlimit:3"
				id="rect108493"
				width="2.8256671"
				height="3.9618242"
				x="52.776131"
				y="44.217194"
			/><rect
				style="opacity:1;fill:#6c1316;fill-opacity:1;fill-rule:evenodd;stroke-width:0.314555;stroke-linecap:round;stroke-linejoin:round;stroke-miterlimit:3"
				id="rect108495"
				width="2.8256671"
				height="3.8413682"
				x="82.987862"
				y="44.351833"
			/><path
				style="opacity:1;fill:#010101;fill-opacity:1;fill-rule:evenodd;stroke-width:0.3;stroke-linecap:round;stroke-linejoin:round;stroke-miterlimit:3"
				d="m 83.402693,62.589999 v -3.099117 c 4.1394,0.30852 7.456935,-3.821029 10.755757,-8.051626 h 7.29204 v 8.87198 l -14.644848,8.598529 z"
				id="path110279"
			/><path
				style="opacity:1;fill:#010101;fill-opacity:1;fill-rule:evenodd;stroke-width:0.3;stroke-linecap:round;stroke-linejoin:round;stroke-miterlimit:3"
				d="m 45.256573,62.589999 v -3.099117 c -4.139394,0.30852 -7.456929,-3.821029 -10.755751,-8.051626 h -7.29204 v 8.87198 l 14.644848,8.598529 z"
				id="path115560"
			/><path
				style="opacity:1;fill:#000000;fill-opacity:1;fill-rule:evenodd;stroke-width:0.3;stroke-linecap:round;stroke-linejoin:round;stroke-miterlimit:3"
				d="M 40.59824,69.994546 C 32.066123,66.86272 30.919894,64.217876 27.648958,61.432942 l 0.413411,-0.843359 20.159734,5.780121 z"
				id="path128750"
			/><path
				style="opacity:1;fill:#2e2f2f;fill-opacity:1;fill-rule:evenodd;stroke-width:0.3;stroke-linecap:round;stroke-linejoin:round;stroke-miterlimit:3"
				d="M 40.258129,70.884692 H 88.355201 V 64.352241 L 81.962889,60.843749 H 46.621094 l -6.402346,3.544922 z"
				id="path107337"
			/><rect
				style="opacity:1;fill:#9d2828;fill-opacity:1;fill-rule:evenodd;stroke-width:0.305278;stroke-linecap:round;stroke-linejoin:round;stroke-miterlimit:3"
				id="rect109441"
				width="42.109375"
				height="4.0934415"
				x="43.18359"
				y="70.871246"
			/><rect
				style="opacity:1;fill:#581717;fill-opacity:1;fill-rule:evenodd;stroke-width:0.307017;stroke-linecap:round;stroke-linejoin:round;stroke-miterlimit:3"
				id="rect109443"
				width="2.7500038"
				height="4.1402135"
				x="43.18359"
				y="70.847862"
			/><rect
				style="opacity:1;fill:#581717;fill-opacity:1;fill-rule:evenodd;stroke-width:0.309877;stroke-linecap:round;stroke-linejoin:round;stroke-miterlimit:3"
				id="rect109497"
				width="2.7500038"
				height="4.2177081"
				x="82.59819"
				y="70.809113"
			/><path
				style="opacity:1;fill:#8d181c;fill-opacity:1;fill-rule:evenodd;stroke-width:0.3;stroke-linecap:round;stroke-linejoin:round;stroke-miterlimit:3"
				d="m 88.385585,68.666698 c -0.04205,-0.156935 0,-3.099118 0,-3.099118 9.426271,-4.03799 9.485279,-6.533207 13.156055,-9.510032 v 4.162539 c -2.812434,3.578164 -7.689476,6.155306 -13.156055,8.446611 z"
				id="path113551"
			/><path
				style="opacity:1;fill:#8d181c;fill-opacity:1;fill-rule:evenodd;stroke-width:0.3;stroke-linecap:round;stroke-linejoin:round;stroke-miterlimit:3"
				d="m 40.273687,68.666698 c 0.04205,-0.156935 0,-3.099118 0,-3.099118 -9.426271,-4.03799 -9.485279,-6.533207 -13.156055,-9.510032 v 4.162539 c 2.812434,3.578164 7.689476,6.155306 13.156055,8.446611 z"
				id="path115562"
			/><circle
				style="opacity:1;fill:#ef1014;fill-opacity:1;fill-rule:evenodd;stroke-width:0.282608;stroke-linecap:round;stroke-linejoin:round;stroke-miterlimit:3"
				id="path117794"
				cx="47.702087"
				cy="105.00536"
				r="1.9749271"
			/><circle
				style="opacity:1;fill:#ef1014;fill-opacity:1;fill-rule:evenodd;stroke-width:0.282608;stroke-linecap:round;stroke-linejoin:round;stroke-miterlimit:3"
				id="circle117848"
				cx="80.896057"
				cy="105.03574"
				r="1.9749271"
			/><circle
				style="opacity:1;fill:#ef1014;fill-opacity:1;fill-rule:evenodd;stroke-width:0.282608;stroke-linecap:round;stroke-linejoin:round;stroke-miterlimit:3"
				id="circle117850"
				cx="74.171448"
				cy="108.27988"
				r="1.9749271"
			/><circle
				style="opacity:1;fill:#ef1014;fill-opacity:1;fill-rule:evenodd;stroke-width:0.282608;stroke-linecap:round;stroke-linejoin:round;stroke-miterlimit:3"
				id="circle117852"
				cx="54.436604"
				cy="108.27988"
				r="1.9749271"
			/><path
				style="opacity:1;fill:#010101;fill-opacity:1;fill-rule:evenodd;stroke-width:0.3;stroke-linecap:round;stroke-linejoin:round;stroke-miterlimit:3"
				d="m 91.970838,86.684108 v -7.474339 l 7.231271,-15.161363 h 5.377881 v 4.435989 L 92.517739,87.504462 Z"
				id="path119362"
			/><path
				style="opacity:1;fill:#8d181c;fill-opacity:1;fill-rule:evenodd;stroke-width:0.3;stroke-linecap:round;stroke-linejoin:round;stroke-miterlimit:3"
				d="M 92.122753,90.816265 104.64075,74.105343 V 67.846341 L 92.031605,86.684108 Z"
				id="path119360"
			/><path
				style="opacity:1;fill:#010101;fill-opacity:1;fill-rule:evenodd;stroke-width:0.3;stroke-linecap:round;stroke-linejoin:round;stroke-miterlimit:3"
				d="M 36.664282,86.684108 V 79.209769 L 29.433035,64.048406 h -5.377881 v 4.435989 l 12.062231,19.020067 z"
				id="path119664"
			/><path
				style="opacity:1;fill:#8d181c;fill-opacity:1;fill-rule:evenodd;stroke-width:0.3;stroke-linecap:round;stroke-linejoin:round;stroke-miterlimit:3"
				d="M 36.512372,90.816265 23.994394,74.105343 v -6.259002 l 12.609118,18.837767 z"
				id="path119666"
			/><rect
				style="opacity:1;fill:#010101;fill-opacity:1;fill-rule:evenodd;stroke-width:0.3;stroke-linecap:round;stroke-linejoin:round;stroke-miterlimit:3"
				id="rect123945"
				width="18.124214"
				height="19.270134"
				x="55.09761"
				y="80.892464"
			/><rect
				style="opacity:1;fill:#4d6ba1;fill-opacity:1;fill-rule:evenodd;stroke-width:0.3;stroke-linecap:round;stroke-linejoin:round;stroke-miterlimit:3"
				id="rect120000"
				width="11.545728"
				height="7.292038"
				x="58.564182"
				y="96.194145"
				rx="0"
				ry="0"
			/><path
				style="opacity:1;fill:#79abd3;fill-opacity:1;fill-rule:evenodd;stroke-width:0.3;stroke-linecap:round;stroke-linejoin:round;stroke-miterlimit:3"
				d="m 58.573777,96.593749 -0.04557,-6.552735 11.596797,0 v 6.531251 l -5.943555,1.592572 z"
				id="path119836"
			/><path
				style="opacity:1;fill:#a8d4ee;fill-opacity:1;fill-rule:evenodd;stroke-width:0.3;stroke-linecap:round;stroke-linejoin:round;stroke-miterlimit:3"
				d="m 58.564879,80.394531 -0.04558,9.667968 5.600813,5.40332 5.961915,-5.381835 -0.02149,-9.775392 z"
				id="path119780"
			/><path
				style="opacity:1;fill:#d8eff4;fill-opacity:1;fill-rule:evenodd;stroke-width:0.3;stroke-linecap:round;stroke-linejoin:round;stroke-miterlimit:3"
				d="m 64.345703,68.578123 5.693359,5.671876 c -0.07912,0.03956 0.142149,6.233687 0,6.327029 -0.277842,0.182445 -5.577924,5.577924 -5.577924,5.577924 l -5.851377,-5.714651 0.09115,-6.243809 z"
				id="path119670"
			/><g id="g122675"
				><path
					style="opacity:1;fill:#d8eff4;fill-opacity:1;fill-rule:evenodd;stroke-width:0.316182;stroke-linecap:round;stroke-linejoin:round;stroke-miterlimit:3"
					d="m 73.296866,83.445312 v -2.654168 l 5.550472,-5.477037 0.02994,8.018738 z"
					id="path121480"
				/><rect
					style="opacity:1;fill:#4d6ba1;fill-opacity:1;fill-rule:evenodd;stroke-width:0.3;stroke-linecap:round;stroke-linejoin:round;stroke-miterlimit:3"
					id="rect121654"
					width="5.6503901"
					height="7.3261719"
					x="73.261719"
					y="90.100784"
				/><rect
					style="opacity:1;fill:#79abd3;fill-opacity:1;fill-rule:evenodd;stroke-width:0.299135;stroke-linecap:round;stroke-linejoin:round;stroke-miterlimit:3"
					id="rect121598"
					width="5.5644531"
					height="7.3261719"
					x="73.31543"
					y="86.646484"
					rx="0"
					ry="0"
				/><path
					style="opacity:1;fill:#a8d4ee;fill-opacity:1;fill-rule:evenodd;stroke-width:0.3;stroke-linecap:round;stroke-linejoin:round;stroke-miterlimit:3"
					d="m 78.879883,87.312499 -5.601019,3.177931 v -7.077344 l 5.601019,-0.139648 z"
					id="path122109"
				/></g
			><g id="g122685" transform="matrix(-1,0,0,1,128.60581,0)"
				><path
					style="opacity:1;fill:#d8eff4;fill-opacity:1;fill-rule:evenodd;stroke-width:0.316182;stroke-linecap:round;stroke-linejoin:round;stroke-miterlimit:3"
					d="m 73.296866,83.445312 v -2.654168 l 5.550472,-5.477037 0.02994,8.018738 z"
					id="path122677"
				/><rect
					style="opacity:1;fill:#4d6ba1;fill-opacity:1;fill-rule:evenodd;stroke-width:0.3;stroke-linecap:round;stroke-linejoin:round;stroke-miterlimit:3"
					id="rect122679"
					width="5.6503901"
					height="7.3261719"
					x="73.261719"
					y="90.100784"
				/><rect
					style="opacity:1;fill:#79abd3;fill-opacity:1;fill-rule:evenodd;stroke-width:0.299135;stroke-linecap:round;stroke-linejoin:round;stroke-miterlimit:3"
					id="rect122681"
					width="5.5644531"
					height="7.3261719"
					x="73.31543"
					y="86.646484"
					rx="0"
					ry="0"
				/><path
					style="opacity:1;fill:#a8d4ee;fill-opacity:1;fill-rule:evenodd;stroke-width:0.3;stroke-linecap:round;stroke-linejoin:round;stroke-miterlimit:3"
					d="m 78.879883,87.312499 -5.601019,3.177931 v -7.077344 l 5.601019,-0.139648 z"
					id="path122683"
				/></g
			><path
				style="opacity:1;fill:#000000;fill-opacity:1;fill-rule:evenodd;stroke-width:0.3;stroke-linecap:round;stroke-linejoin:round;stroke-miterlimit:3"
				d="M 86.470042,28.577794 C 86.321458,27.944087 86.06583,27.381741 85.452748,27.057699 l -0.257246,2.057974 z"
				id="path129518"
			/></g
		><metadata id="metadata9233">
			<!-- svelte-ignore illegal-attribute-character -->
			<!-- 	data-license="https://creativecommons.org/licenses/by-nc-sa/4.0/" data-author="Doriel Rivalet"--></metadata
		></svg
	>
</div>
