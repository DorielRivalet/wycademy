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
				id="filter225"
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
					id="feComposite224"
				/><feColorMatrix
					in="composite1"
					values="1"
					type="saturate"
					result="colormatrix1"
					id="feColorMatrix224"
				/><feFlood
					flood-opacity="1"
					flood-color="rgb(0,0,0)"
					result="flood1"
					id="feFlood224"
				/><feBlend
					in="flood1"
					in2="colormatrix1"
					mode="multiply"
					result="blend1"
					id="feBlend224"
				/><feBlend
					in2="blend1"
					mode="screen"
					result="blend2"
					id="feBlend225"
				/><feColorMatrix
					in="blend2"
					values="1"
					type="saturate"
					result="colormatrix2"
					id="feColorMatrix225"
				/><feComposite
					in="colormatrix2"
					in2="SourceGraphic"
					operator="in"
					k2="1"
					result="composite2"
					id="feComposite225"
				/></filter
			></defs
		><g id="layer1"
			><g
				id="g224"
				style="filter:url(#filter225)"
				transform="translate(0.52916667,1.5875)"
				><path
					style="opacity:1;fill:#4d1b06;fill-opacity:1;fill-rule:evenodd;stroke-width:0.3;stroke-linecap:round;stroke-miterlimit:4.1;paint-order:stroke fill markers"
					d="m 29.583642,124 v -3.51294 H 26.433653 L 24.727409,124 Z"
					id="path117"
				/><path
					style="opacity:1;fill:#4d1b06;fill-opacity:1;fill-rule:evenodd;stroke-width:0.3;stroke-linecap:round;stroke-miterlimit:4.1;paint-order:stroke fill markers"
					d="M 24.727409,118.47894 26.381153,115 h 3.110615 v 3.41331 z"
					id="path118"
				/><path
					style="opacity:1;fill:#7a5131;fill-opacity:1;fill-rule:evenodd;stroke-width:0.3;stroke-linecap:round;stroke-miterlimit:4.1;paint-order:stroke fill markers"
					d="m 24.727409,124 h -2.296866 l 4.00311,-3.51294 z"
					id="path119"
				/><path
					style="opacity:1;fill:#7a5131;fill-opacity:1;fill-rule:evenodd;stroke-width:0.3;stroke-linecap:round;stroke-miterlimit:4.1;paint-order:stroke fill markers"
					d="m 24.727409,118.47894 h -2.23089 L 26.381153,115 Z"
					id="path120"
				/><path
					style="opacity:1;fill:#7a5131;fill-opacity:1;fill-rule:evenodd;stroke-width:0.3;stroke-linecap:round;stroke-miterlimit:4.1;paint-order:stroke fill markers"
					d="m 69.661253,123.84223 1.679813,-3.34107 -3.888631,3.35963 z"
					id="path121"
				/><path
					style="opacity:1;fill:#7a5131;fill-opacity:1;fill-rule:evenodd;stroke-width:0.3;stroke-linecap:round;stroke-miterlimit:4.1;paint-order:stroke fill markers"
					d="m 69.614848,118.44083 1.726218,-3.40603 -3.888631,3.35035 z"
					id="path122"
				/><path
					style="opacity:1;fill:#4d1b06;fill-opacity:1;fill-rule:evenodd;stroke-width:0.3;stroke-linecap:round;stroke-miterlimit:4.1;paint-order:stroke fill markers"
					d="m 69.614848,118.44083 1.726218,-3.40603 h 3.127611 l 0.0093,3.40603 z"
					id="path123"
				/><path
					style="opacity:1;fill:#4d1b06;fill-opacity:1;fill-rule:evenodd;stroke-width:0.3;stroke-linecap:round;stroke-miterlimit:4.1;paint-order:stroke fill markers"
					d="m 71.341066,120.50116 -1.679813,3.34107 4.816724,0.0186 v -3.35963 z"
					id="path124"
				/><path
					style="opacity:1;fill:#842320;fill-opacity:1;fill-rule:evenodd;stroke-width:0.3;stroke-linecap:round;stroke-miterlimit:4.1;paint-order:stroke fill markers"
					d="m 39.879349,111.10905 h -0.287703 l -6.802784,8.0928 v 4.64038 h 26.496521 l 8.714618,-8.71462 H 64.742459 V 114 l 7.828833,-7.82883 h -7.73403 l 8.964342,-9.171169 H 62.159771 v 20.308579 l -3.262667,3.26267 H 40.000002 v -9.44228 z"
					id="path125"
				/><path
					style="opacity:1;fill:#4d1b06;fill-opacity:1;fill-rule:evenodd;stroke-width:0.3;stroke-linecap:round;stroke-miterlimit:4.1;paint-order:stroke fill markers"
					d="m 40.000002,111.12897 h 3.303942 v 6.36523 h 9.696058 v -11.2297 h 9.159769 V 109 h -5.677173 v 8.30858 h 5.677168 l -3.262665,3.26267 H 40.000002 Z"
					id="path126"
				/><path
					style="opacity:1;fill:#b3def2;fill-opacity:1;fill-rule:evenodd;stroke-width:0.3;stroke-linecap:round;stroke-miterlimit:4.1;paint-order:stroke fill markers"
					d="m 43.303944,117.4942 v -6.36523 h 9.696058 v 6.36523 z"
					id="path127"
				/><path
					style="opacity:1;fill:#b3def2;fill-opacity:1;fill-rule:evenodd;stroke-width:0.3;stroke-linecap:round;stroke-miterlimit:4.1;paint-order:stroke fill markers"
					d="M 56.482598,117.30858 V 109 h 5.677173 v 8.30858 z"
					id="path128"
				/><path
					style="opacity:1;fill:#b3def2;fill-opacity:1;fill-rule:evenodd;stroke-width:0.3;stroke-linecap:round;stroke-miterlimit:4.1;paint-order:stroke fill markers"
					d="M 62.159771,106.2645 H 50.51794 l -3.657745,-3.65775 V 85.351561 l 3.968239,-3.96824 h 5.228236 l 3.943331,3.943332 v 7.555015 h -6.106729 v 4.118335 l 8.266499,2e-6 z"
					id="path129"
				/><rect
					style="opacity:1;fill:#b3def2;fill-opacity:1;fill-rule:evenodd;stroke-width:0.336219;stroke-linecap:round;stroke-miterlimit:4.1;paint-order:stroke fill markers"
					id="rect129"
					width="5.2413006"
					height="11.587"
					x="47.758701"
					y="67.206497"
				/><path
					style="opacity:1;fill:#b3def2;fill-opacity:1;fill-rule:evenodd;stroke-width:0.3;stroke-linecap:round;stroke-miterlimit:4.1;paint-order:stroke fill markers"
					d="m 47.758701,65.037124 v -9.426916 l 9.241301,0.01856 v 6.371233 l -3.000002,3 z"
					id="path130"
				/><path
					style="opacity:1;fill:#b3def2;fill-opacity:1;fill-rule:evenodd;stroke-width:0.3;stroke-linecap:round;stroke-miterlimit:4.1;paint-order:stroke fill markers"
					d="m 47.758701,53.023388 0.0098,-6.023387 -6.76849,-6.748262 2.63805,-2.386311 H 50 l 7.000002,8.779584 v 6.366589 z"
					id="path131"
				/><path
					style="opacity:1;fill:#842320;fill-opacity:1;fill-rule:evenodd;stroke-width:0.3;stroke-linecap:round;stroke-miterlimit:4.1;paint-order:stroke fill markers"
					d="m 76.566124,115.26682 h 3.341068 v 5.56845 h 12.092811 l 6.253384,-6.24132 V 97.000001 h 6.526193 L 101,101 v 1.42227 h 3.2413 L 101,105.68909 v 0.85383 h 3.46404 L 100,111 v 6.71694 L 93.790904,124 H 76.518467 Z"
					id="path132"
				/><path
					style="opacity:1;fill:#4d1b06;fill-opacity:1;fill-rule:evenodd;stroke-width:0.3;stroke-linecap:round;stroke-miterlimit:4.1;paint-order:stroke fill markers"
					d="m 79.90719,115.26682 h 3.545244 l 0.221552,-0.38374 v 2.35555 h 5.326015 v -7.86841 l 0.471535,-0.12635 v -3.99488 h 8.781849 V 109 h -6.562471 v 8.23207 h 3.919252 l -3.610163,3.61016 H 79.917831 Z"
					id="path133"
				/><path
					style="opacity:1;fill:#b3def2;fill-opacity:1;fill-rule:evenodd;stroke-width:0.3;stroke-linecap:round;stroke-miterlimit:4.1;paint-order:stroke fill markers"
					d="m 83.673986,117.23863 v -2.35555 l 5.326015,-5.51286 v 7.86841 z"
					id="path134"
				/><path
					style="opacity:1;fill:#b3def2;fill-opacity:1;fill-rule:evenodd;stroke-width:0.3;stroke-linecap:round;stroke-miterlimit:4.1;paint-order:stroke fill markers"
					d="m 91.690914,117.23207 h 3.919252 l 2.643219,-2.64322 V 109 h -6.562471 z"
					id="path135"
				/><path
					style="opacity:1;fill:#b3def2;fill-opacity:1;fill-rule:evenodd;stroke-width:0.3;stroke-linecap:round;stroke-miterlimit:4.1;paint-order:stroke fill markers"
					d="M 98.253385,105.24899 H 82.728537 L 79.90719,102.32947 V 84.498438 l 3.161871,-3.161871 h 10.196846 l 2.912218,2.912218 v 8.660726 h -6.178124 v 4.09049 h 8.253384 z"
					id="path136"
				/><path
					style="opacity:1;fill:#b3def2;fill-opacity:1;fill-rule:evenodd;stroke-width:0.3;stroke-linecap:round;stroke-miterlimit:4.1;paint-order:stroke fill markers"
					d="m 58.537284,81.383319 3.871862,3.955116 H 78.277211 V 72.554734 l -8.859343,8.859343 z"
					id="path137"
				/><path
					style="opacity:1;fill:#b3def2;fill-opacity:1;fill-rule:evenodd;stroke-width:0.3;stroke-linecap:round;stroke-miterlimit:4.1;paint-order:stroke fill markers"
					d="m 79.90719,81.138452 2.479373,-2.479376 h 11.299344 l 2.617805,2.617809 -0.150315,-8.722151 H 80 Z"
					id="path138"
				/><path
					style="opacity:1;fill:#b3def2;fill-opacity:1;fill-rule:evenodd;stroke-width:0.3;stroke-linecap:round;stroke-miterlimit:4.1;paint-order:stroke fill markers"
					d="m 98.253385,83.212193 2e-6,-10.657459 h 13.256203 l 4.84311,4.843105 v 5.906103 z"
					id="path139"
				/><path
					style="opacity:1;fill:#b3def2;fill-opacity:1;fill-rule:evenodd;stroke-width:0.3;stroke-linecap:round;stroke-miterlimit:4.1;paint-order:stroke fill markers"
					d="m 98.253385,123.84704 c 4.101285,-2.22006 6.794505,-5.04661 7.746615,-8.62309 v -4.31811 h 10.30626 c -0.24821,5.99983 -2.63471,8.1379 -4.76743,9.79617 -3.46136,2.69133 -4.35845,2.88565 -13.285445,3.14503 z"
					id="path140"
				/><rect
					style="opacity:1;fill:#842320;fill-opacity:1;fill-rule:evenodd;stroke-width:0.3;stroke-linecap:round;stroke-miterlimit:4.1;paint-order:stroke fill markers"
					id="rect140"
					width="6.598959"
					height="5.7722564"
					x="106.00001"
					y="103.22775"
				/><path
					style="opacity:1;fill:#842320;fill-opacity:1;fill-rule:evenodd;stroke-width:0.3;stroke-linecap:round;stroke-miterlimit:4.1;paint-order:stroke fill markers"
					d="m 98.000001,92.844547 h 3.846869 l 2.35267,-2.352669 v -5.248259 h -6.199539 z"
					id="path141"
				/><path
					style="opacity:1;fill:#bec8cd;fill-opacity:1;fill-rule:evenodd;stroke-width:0.3;stroke-linecap:round;stroke-miterlimit:4.1;paint-order:stroke fill markers"
					d="m 113.08458,122.57392 c 1.15337,-0.51702 2.3455,-0.98337 3.28124,-1.78499 l 1.34531,0.66937 c -1.54218,0.8341 -3.08437,1.04407 -4.62655,1.11562 z"
					id="path142"
				/><path
					style="opacity:1;fill:#bec8cd;fill-opacity:1;fill-rule:evenodd;stroke-width:0.3;stroke-linecap:round;stroke-miterlimit:4.1;paint-order:stroke fill markers"
					d="m 118.27378,117.63341 c 2.30423,-1.96084 3.67682,-4.2739 4.6775,-6.72757 H 119 c 0.31955,2.74468 -0.2674,4.67885 -0.72622,6.72757 z"
					id="path143"
				/><path
					style="opacity:1;fill:#bec8cd;fill-opacity:1;fill-rule:evenodd;stroke-width:0.3;stroke-linecap:round;stroke-miterlimit:4.1;paint-order:stroke fill markers"
					d="m 119,107.48023 v -4.31811 h 4.54517 z"
					id="path144"
				/><path
					style="opacity:1;fill:#bec8cd;fill-opacity:1;fill-rule:evenodd;stroke-width:0.3;stroke-linecap:round;stroke-miterlimit:4.1;paint-order:stroke fill markers"
					d="m 119.20185,99.000002 v -5.672857 h 6.18098 z"
					id="path145"
				/><path
					style="opacity:1;fill:#bec8cd;fill-opacity:1;fill-rule:evenodd;stroke-width:0.3;stroke-linecap:round;stroke-miterlimit:4.1;paint-order:stroke fill markers"
					d="m 119.20185,91.081205 v -5.772621 l 6.18098,-0.05568 z"
					id="path146"
				/><path
					style="opacity:1;fill:#bec8cd;fill-opacity:1;fill-rule:evenodd;stroke-width:0.3;stroke-linecap:round;stroke-miterlimit:4.1;paint-order:stroke fill markers"
					d="m 119.20185,83.303942 v -5.772621 l 6.18098,-0.05568 z"
					id="path147"
				/><path
					style="opacity:1;fill:#bec8cd;fill-opacity:1;fill-rule:evenodd;stroke-width:0.3;stroke-linecap:round;stroke-miterlimit:4.1;paint-order:stroke fill markers"
					d="M 118.42227,74.654293 114.80278,71 124,66.338745 Z"
					id="path148"
				/><path
					style="opacity:1;fill:#bec8cd;fill-opacity:1;fill-rule:evenodd;stroke-width:0.3;stroke-linecap:round;stroke-miterlimit:4.1;paint-order:stroke fill markers"
					d="m 98.253385,70.914114 5.564985,-6.089978 V 71 Z"
					id="path149"
				/><path
					style="opacity:1;fill:#bec8cd;fill-opacity:1;fill-rule:evenodd;stroke-width:0.3;stroke-linecap:round;stroke-miterlimit:4.1;paint-order:stroke fill markers"
					d="m 106,70.914114 5.56499,-6.089978 V 71 Z"
					id="path150"
				/><rect
					style="opacity:1;fill:#5a82c6;fill-opacity:1;fill-rule:evenodd;stroke-width:0.3;stroke-linecap:round;stroke-miterlimit:4.1;paint-order:stroke fill markers"
					id="rect150"
					width="3.7072914"
					height="5.7722564"
					x="112.59896"
					y="103.22775"
				/><rect
					style="opacity:1;fill:#842320;fill-opacity:1;fill-rule:evenodd;stroke-width:0.3;stroke-linecap:round;stroke-miterlimit:4.1;paint-order:stroke fill markers"
					id="rect151"
					width="6.598959"
					height="5.7722564"
					x="106.00001"
					y="93.227745"
				/><rect
					style="opacity:1;fill:#85b2dd;fill-opacity:1;fill-rule:evenodd;stroke-width:0.3;stroke-linecap:round;stroke-miterlimit:4.1;paint-order:stroke fill markers"
					id="rect152"
					width="3.7072914"
					height="5.7722564"
					x="112.59896"
					y="93.227745"
				/><rect
					style="opacity:1;fill:#842320;fill-opacity:1;fill-rule:evenodd;stroke-width:0.3;stroke-linecap:round;stroke-miterlimit:4.1;paint-order:stroke fill markers"
					id="rect153"
					width="6.598959"
					height="5.7722564"
					x="106.00001"
					y="85.379715"
				/><rect
					style="opacity:1;fill:#b3def2;fill-opacity:1;fill-rule:evenodd;stroke-width:0.3;stroke-linecap:round;stroke-miterlimit:4.1;paint-order:stroke fill markers"
					id="rect154"
					width="3.7072914"
					height="5.7722564"
					x="112.59896"
					y="85.379715"
				/><rect
					style="opacity:1;fill:#842320;fill-opacity:1;fill-rule:evenodd;stroke-width:0.3;stroke-linecap:round;stroke-miterlimit:4.1;paint-order:stroke fill markers"
					id="rect155"
					width="16.117439"
					height="5.7169375"
					x="62.159771"
					y="87.146172"
				/><path
					style="opacity:1;fill:#dcfeff;fill-opacity:1;fill-rule:evenodd;stroke-width:0.3;stroke-linecap:round;stroke-miterlimit:4.1;paint-order:stroke fill markers"
					d="m 57.000002,79.000002 v -9.595257 l 7.999999,-7.404743 V 26.538653 L 69.538653,22 H 124 l -4.62856,5.838021 H 76.000001 V 29.53114 L 116.62181,41.568446 111.471,44.426915 74.300352,31.723009 h -2.493741 l -0.0525,2.585615 39.521989,19.315506 h -5.30858 L 71.814385,37.772623 v 36.603246 l -4.624134,4.624133 z"
					id="path155"
				/><path
					style="opacity:1;fill:#bec8cd;fill-opacity:1;fill-rule:evenodd;stroke-width:0.3;stroke-linecap:round;stroke-miterlimit:4.1;paint-order:stroke fill markers"
					d="M 62.273782,43.684454 V 40.278423 H 58.923433 Z"
					id="path156"
				/><path
					style="opacity:1;fill:#bec8cd;fill-opacity:1;fill-rule:evenodd;stroke-width:0.3;stroke-linecap:round;stroke-miterlimit:4.1;paint-order:stroke fill markers"
					d="m 62.273782,37.661252 v -5.347621 h -5.27378 z"
					id="path157"
				/><path
					style="opacity:1;fill:#bec8cd;fill-opacity:1;fill-rule:evenodd;stroke-width:0.3;stroke-linecap:round;stroke-miterlimit:4.1;paint-order:stroke fill markers"
					d="M 50.478565,13.5712 67,21.68242 62.273782,26.433653 v 3.596237 z"
					id="path158"
				/><path
					style="opacity:1;fill:#bec8cd;fill-opacity:1;fill-rule:evenodd;stroke-width:0.3;stroke-linecap:round;stroke-miterlimit:4.1;paint-order:stroke fill markers"
					d="m 71,20 5.714616,-6 v 6 z"
					id="path159"
				/><path
					style="opacity:1;fill:#bec8cd;fill-opacity:1;fill-rule:evenodd;stroke-width:0.3;stroke-linecap:round;stroke-miterlimit:4.1;paint-order:stroke fill markers"
					d="m 80.000002,20 5.714616,-6 v 6 z"
					id="path160"
				/><path
					style="opacity:1;fill:#bec8cd;fill-opacity:1;fill-rule:evenodd;stroke-width:0.3;stroke-linecap:round;stroke-miterlimit:4.1;paint-order:stroke fill markers"
					d="m 89.000002,20 5.714616,-6 v 6 z"
					id="path161"
				/><path
					style="opacity:1;fill:#bbb69d;fill-opacity:1;fill-rule:evenodd;stroke-width:0.3;stroke-linecap:round;stroke-miterlimit:4.1;paint-order:stroke fill markers"
					d="m 71.814385,74.375869 4.89095,-4.890953 H 90.802784 L 103.52668,56.213456 71.814385,39.611104 Z"
					id="path162"
				/><path
					style="opacity:1;fill:#bbb69d;fill-opacity:1;fill-rule:evenodd;stroke-width:0.3;stroke-linecap:round;stroke-miterlimit:4.1;paint-order:stroke fill markers"
					d="m 108.73335,52.381417 2.13312,-6.102837 -39.059859,-14.555571 -0.0525,2.585615 z"
					id="path163"
				/><path
					style="opacity:1;fill:#bbb69d;fill-opacity:1;fill-rule:evenodd;stroke-width:0.3;stroke-linecap:round;stroke-miterlimit:4.1;paint-order:stroke fill markers"
					d="m 113.27298,40.576097 4.05416,-12.738076 H 76.000001 v 1.693119 z"
					id="path164"
				/><path
					style="opacity:1;fill:#a0958d;fill-opacity:1;fill-rule:evenodd;stroke-width:0.3;stroke-linecap:round;stroke-miterlimit:4.1;paint-order:stroke fill markers"
					d="m 97.999999,34.87471 1.187934,1.187934 h 2.951277 V 33.139212 L 101,32.000001 102.19257,30.807426 V 28.00696 h -2.948952 l -1.13225,1.132252 -1.187937,-1.187936 h -2.923432 v 2.802784 l 1.287706,1.287706 -1.287706,1.287703 v 2.612528 h 3.000002 z"
					id="path165"
				/><path
					style="opacity:1;fill:#a0958d;fill-opacity:1;fill-rule:evenodd;stroke-width:0.3;stroke-linecap:round;stroke-miterlimit:4.1;paint-order:stroke fill markers"
					d="m 88,59.832946 1.187934,1.187934 h 2.951277 v -2.923432 l -1.139209,-1.139211 1.192575,-1.192575 v -2.800466 h -2.948958 l -1.13225,1.132252 -1.187937,-1.187936 H 84 v 2.802784 L 85.287706,57.000002 84,58.287705 v 2.612528 h 3.000002 z"
					id="path166"
				/><path
					style="opacity:1;fill:#a0958d;fill-opacity:1;fill-rule:evenodd;stroke-width:0.3;stroke-linecap:round;stroke-miterlimit:4.1;paint-order:stroke fill markers"
					d="m 75.888633,53.735499 1.187934,1.187934 h 2.951277 V 52.000001 L 78.888635,50.86079 80.08121,49.668215 v -2.800466 h -2.948958 l -1.13225,1.132252 -1.187937,-1.187936 h -2.923432 v 2.802784 l 1.287706,1.287706 -1.287706,1.287703 v 2.612528 h 3.000002 z"
					id="path167"
				/><path
					style="opacity:1;fill:#a0958d;fill-opacity:1;fill-rule:evenodd;stroke-width:0.3;stroke-linecap:round;stroke-miterlimit:4.1;paint-order:stroke fill markers"
					d="m 75.888633,65.874711 1.187934,1.187934 h 2.951277 v -2.923432 l -1.139209,-1.139211 1.192575,-1.192575 v -2.800466 h -2.948958 l -1.13225,1.132252 -1.187937,-1.187936 h -2.923432 v 2.802784 l 1.287706,1.287706 -1.287706,1.287703 v 2.612528 h 3.000002 z"
					id="path168"
				/><path
					style="opacity:1;fill:#a0958d;fill-opacity:1;fill-rule:evenodd;stroke-width:0.3;stroke-linecap:round;stroke-miterlimit:4.1;paint-order:stroke fill markers"
					d="m 109,34.87471 1.18794,1.187934 h 2.95127 V 33.139212 L 112,32.000001 113.19257,30.807426 V 28.00696 h -2.94895 l -1.13225,1.132252 -1.18794,-1.187936 H 105 v 2.802784 l 1.28771,1.287706 L 105,33.329469 v 2.612528 h 3 z"
					id="path169"
				/><path
					style="opacity:1;fill:#a0958d;fill-opacity:1;fill-rule:evenodd;stroke-width:0.3;stroke-linecap:round;stroke-miterlimit:4.1;paint-order:stroke fill markers"
					d="m 71.814385,39.611104 v -1.838481 l 34.153135,15.851507 -2.44084,2.589326 z"
					id="path170"
				/><path
					style="opacity:1;fill:#a0958d;fill-opacity:1;fill-rule:evenodd;stroke-width:0.3;stroke-linecap:round;stroke-miterlimit:4.1;paint-order:stroke fill markers"
					d="M 111.471,44.426915 110.86647,46.27858 71.806611,31.723009 h 2.493741 z"
					id="path171"
				/><path
					style="opacity:1;fill:#842320;fill-opacity:1;fill-rule:evenodd;stroke-width:0.3;stroke-linecap:round;stroke-miterlimit:4.1;paint-order:stroke fill markers"
					d="m 27.000001,103 c 1.171697,2.11174 2.705507,4.21745 5.353005,6.3046 h 8.386845 l 4.049048,-4.04905 V 103 Z"
					id="path172"
				/><path
					style="opacity:1;fill:#842320;fill-opacity:1;fill-rule:evenodd;stroke-width:0.3;stroke-linecap:round;stroke-miterlimit:4.1;paint-order:stroke fill markers"
					d="M 41.356724,100.68151 33.626126,93.000001 H 14.266823 l 7.993095,7.760249 z"
					id="path173"
				/><path
					style="opacity:1;fill:#842320;fill-opacity:1;fill-rule:evenodd;stroke-width:0.3;stroke-linecap:round;stroke-miterlimit:4.1;paint-order:stroke fill markers"
					d="M 44.788899,100.26914 V 91.000002 H 39.38747 L 38,93.40317 Z"
					id="path174"
				/><path
					style="opacity:1;fill:#842320;fill-opacity:1;fill-rule:evenodd;stroke-width:0.3;stroke-linecap:round;stroke-miterlimit:4.1;paint-order:stroke fill markers"
					d="m 44.788899,88.315545 -0.0186,-6.932226 h -6.770301 v 6.950786 z"
					id="path175"
				/><path
					style="opacity:1;fill:#842320;fill-opacity:1;fill-rule:evenodd;stroke-width:0.3;stroke-linecap:round;stroke-miterlimit:4.1;paint-order:stroke fill markers"
					d="M 44.788899,78.880961 V 67.619752 h -8.472157 v 4.213109 l 1.568432,1.568431 -0.01969,5.392203 z"
					id="path176"
				/><path
					style="opacity:1;fill:#842320;fill-opacity:1;fill-rule:evenodd;stroke-width:0.3;stroke-linecap:round;stroke-miterlimit:4.1;paint-order:stroke fill markers"
					d="m 36.474241,65.231009 v -5.696228 l 2.53478,-2.534779 h 5.694566 v 8.257259 z"
					id="path177"
				/><path
					style="opacity:1;fill:#0463f6;fill-opacity:1;fill-rule:evenodd;stroke-width:0.3;stroke-linecap:round;stroke-miterlimit:4.1;paint-order:stroke fill markers"
					d="m 27.000001,103 h -2.155454 l -2.241166,-2.24117 18.753343,-0.0773 -7.730598,-7.681509 H 18.145246 L 20,91.000002 h 15.43737 l 2.562628,-2.665899 6.788901,-0.01855 v 2.684458 H 39.38747 L 38,93.403181 l 6.788899,6.865969 v 2.73086 z"
					id="path178"
				/><path
					style="opacity:1;fill:#4d1b06;fill-opacity:1;fill-rule:evenodd;stroke-width:0.3;stroke-linecap:round;stroke-miterlimit:4.1;paint-order:stroke fill markers"
					d="M 32.353006,109.3046 H 29.382831 C 26.861705,107.5812 25.812122,105.30598 24.844547,103 h 2.155454 z"
					id="path179"
				/><path
					style="opacity:1;fill:#4d1b06;fill-opacity:1;fill-rule:evenodd;stroke-width:0.3;stroke-linecap:round;stroke-miterlimit:4.1;paint-order:stroke fill markers"
					d="m 22.259918,100.76025 h -3.800521 l -7.760248,-7.760249 h 3.567675 z"
					id="path180"
				/><path
					style="opacity:1;fill:#842320;fill-opacity:1;fill-rule:evenodd;stroke-width:0.3;stroke-linecap:round;stroke-miterlimit:4.1;paint-order:stroke fill markers"
					d="m 11,84.529 h 6.354988 v 6.471002 H 14.962445 C 12.098899,89.8574 11.335176,87.334092 11,84.529 Z"
					id="path181"
				/><path
					style="opacity:1;fill:#842320;fill-opacity:1;fill-rule:evenodd;stroke-width:0.295859;stroke-linecap:round;stroke-miterlimit:4.1;paint-order:stroke fill markers"
					d="m 20.776799,84.529 v 6.471002 h 6.446403 V 84.529 Z"
					id="path182"
				/><path
					style="opacity:1;fill:#842320;fill-opacity:1;fill-rule:evenodd;stroke-width:0.3;stroke-linecap:round;stroke-miterlimit:4.1;paint-order:stroke fill markers"
					d="m 29.150519,84.529 v 6.471002 c 0,0 6.286851,0 6.286851,0 L 35.450494,84.529 Z"
					id="path183"
				/><rect
					style="opacity:1;fill:#fefe03;fill-opacity:1;fill-rule:evenodd;stroke-width:0.3;stroke-linecap:round;stroke-miterlimit:4.1;paint-order:stroke fill markers"
					id="rect183"
					width="4.0677485"
					height="4.2412968"
					x="20.776798"
					y="80.287704"
				/><rect
					style="opacity:1;fill:#fefe03;fill-opacity:1;fill-rule:evenodd;stroke-width:0.3;stroke-linecap:round;stroke-miterlimit:4.1;paint-order:stroke fill markers"
					id="rect184"
					width="4.0805697"
					height="4.1649194"
					x="11"
					y="80.364075"
				/><rect
					style="opacity:1;fill:#fefe03;fill-opacity:1;fill-rule:evenodd;stroke-width:0.3;stroke-linecap:round;stroke-miterlimit:4.1;paint-order:stroke fill markers"
					id="rect185"
					width="4.0031095"
					height="4.13867"
					x="29.15052"
					y="80.390327"
				/><rect
					style="opacity:1;fill:#4d1b06;fill-opacity:1;fill-rule:evenodd;stroke-width:0.289159;stroke-linecap:round;stroke-miterlimit:4.1;paint-order:stroke fill markers"
					id="rect186"
					width="2.3786547"
					height="4.2412958"
					x="24.844547"
					y="80.287704"
				/><rect
					style="opacity:1;fill:#4d1b06;fill-opacity:1;fill-rule:evenodd;stroke-width:0.3;stroke-linecap:round;stroke-miterlimit:4.1;paint-order:stroke fill markers"
					id="rect187"
					width="2.2968647"
					height="4.1386724"
					x="33.153629"
					y="80.390327"
				/><rect
					style="opacity:1;fill:#4d1b06;fill-opacity:1;fill-rule:evenodd;stroke-width:0.3;stroke-linecap:round;stroke-miterlimit:4.1;paint-order:stroke fill markers"
					id="rect188"
					width="2.2744179"
					height="4.164917"
					x="15.080569"
					y="80.364067"
				/><rect
					style="opacity:1;fill:#842320;fill-opacity:1;fill-rule:evenodd;stroke-width:0.295859;stroke-linecap:round;stroke-miterlimit:4.1;paint-order:stroke fill markers"
					id="rect189"
					width="6.4464035"
					height="1.9054918"
					x="20.776798"
					y="78.382217"
				/><path
					style="opacity:1;fill:#192bc3;fill-opacity:1;fill-rule:evenodd;stroke-width:0.3;stroke-linecap:round;stroke-miterlimit:4.1;paint-order:stroke fill markers"
					d="m 11,80.364067 6.354987,-6.142466 V 71.452236 C 12.825897,73.54778 10.049707,76.279598 11,80.364067 Z"
					id="path189"
				/><path
					style="opacity:1;fill:#0255e9;fill-opacity:1;fill-rule:evenodd;stroke-width:0.3;stroke-linecap:round;stroke-miterlimit:4.1;paint-order:stroke fill markers"
					d="M 17.354988,80.364067 H 11 c 0.384132,-3.137555 2.298228,-5.313419 6.354987,-6.142466 z"
					id="path190"
				/><path
					style="opacity:1;fill:#192bc3;fill-opacity:1;fill-rule:evenodd;stroke-width:0.3;stroke-linecap:round;stroke-miterlimit:4.1;paint-order:stroke fill markers"
					d="m 20.776798,78.382216 6.446406,-6.382215 v -2.608382 c -4.567536,2.145596 -7.045692,5.026546 -6.446406,8.990597 z"
					id="path191"
				/><path
					style="opacity:1;fill:#0255e9;fill-opacity:1;fill-rule:evenodd;stroke-width:0.29586;stroke-linecap:round;stroke-miterlimit:4.1;paint-order:stroke fill markers"
					d="m 20.776798,78.382216 h 6.446405 v -6.382215 c -2.272569,1.149405 -4.789523,0.971281 -6.446405,6.382215 z"
					id="path192"
				/><path
					style="opacity:1;fill:#192bc3;fill-opacity:1;fill-rule:evenodd;stroke-width:0.3;stroke-linecap:round;stroke-miterlimit:4.1;paint-order:stroke fill markers"
					d="m 35.450491,80.390327 h -6.299972 v -8.951214 c 6.724916,3.463575 6.50924,6.207062 6.299972,8.951214 z"
					id="path193"
				/><path
					style="opacity:1;fill:#0255e9;fill-opacity:1;fill-rule:evenodd;stroke-width:0.3;stroke-linecap:round;stroke-miterlimit:4.1;paint-order:stroke fill markers"
					d="m 35.450491,80.390327 h -6.299972 v -4.711856 c 4.227017,0.158831 5.839554,2.052991 6.299972,4.711856 z"
					id="path194"
				/><path
					style="opacity:1;fill:#dcfeff;fill-opacity:1;fill-rule:evenodd;stroke-width:0.3;stroke-linecap:round;stroke-miterlimit:4.1;paint-order:stroke fill markers"
					d="M 116.62181,41.568446 76.000001,29.53114 74.300352,31.723009 111.471,44.426915 Z"
					id="path195"
				/><path
					style="opacity:1;fill:#0b5ceb;fill-opacity:1;fill-rule:evenodd;stroke-width:0.3;stroke-linecap:round;stroke-miterlimit:4.1;paint-order:stroke fill markers"
					d="m 3.2681129,71 2.9238704,-2.923868 h 8.5079627 l -2.928361,2.928361 z"
					id="path196"
				/><path
					style="opacity:1;fill:#0b5ceb;fill-opacity:1;fill-rule:evenodd;stroke-width:0.3;stroke-linecap:round;stroke-miterlimit:4.1;paint-order:stroke fill markers"
					d="M 20,70.348027 V 67 l 7.000001,-6.999999 v 3.2761 z"
					id="path197"
				/><path
					style="opacity:1;fill:#0b5ceb;fill-opacity:1;fill-rule:evenodd;stroke-width:0.3;stroke-linecap:round;stroke-miterlimit:4.1;paint-order:stroke fill markers"
					d="m 30.187389,64.496013 0.01312,-3.228737 5.026856,-5.026859 v 3.294364 z"
					id="path198"
				/><path
					style="opacity:1;fill:#b3def2;fill-opacity:1;fill-rule:evenodd;stroke-width:0.3;stroke-linecap:round;stroke-miterlimit:4.1;paint-order:stroke fill markers"
					d="m 6.1919833,68.076132 3.07613,-3.076131 H 17.75806 l -3.07613,3.076131 z"
					id="path199"
				/><path
					style="opacity:1;fill:#b3def2;fill-opacity:1;fill-rule:evenodd;stroke-width:0.3;stroke-linecap:round;stroke-miterlimit:4.1;paint-order:stroke fill markers"
					d="m 35.227365,56.240417 v -3.240415 l -5.039976,4.89327 v 3.368908 z"
					id="path200"
				/><path
					style="opacity:1;fill:#b3def2;fill-opacity:1;fill-rule:evenodd;stroke-width:0.3;stroke-linecap:round;stroke-miterlimit:4.1;paint-order:stroke fill markers"
					d="M 27.000001,60.000001 20,67.000003 v -2.83759 l 6.317865,-6.317867 h 0.682136 z"
					id="path201"
				/><path
					style="opacity:1;fill:#973c2e;fill-opacity:1;fill-rule:evenodd;stroke-width:0.3;stroke-linecap:round;stroke-miterlimit:4.1;paint-order:stroke fill markers"
					d="M 14.873549,60.932178 V 53.000002 H 21 v -4.085159 h 8.550651 L 30.834245,53.705286 23.5,58.161057 17.048454,61.647916 Z"
					id="path202"
				/><rect
					style="opacity:1;fill:#842320;fill-opacity:1;fill-rule:evenodd;stroke-width:0.3;stroke-linecap:round;stroke-miterlimit:4.1;paint-order:stroke fill markers"
					id="rect202"
					width="3.9515455"
					height="7.932178"
					x="17.048454"
					y="53.000004"
				/><rect
					style="opacity:1;fill:#842320;fill-opacity:1;fill-rule:evenodd;stroke-width:0.309849;stroke-linecap:round;stroke-miterlimit:4.1;paint-order:stroke fill markers"
					id="rect203"
					width="4.0970058"
					height="2.9097021"
					x="23.159309"
					y="53.090298"
				/><path
					style="opacity:1;fill:#4d1b06;fill-opacity:1;fill-rule:evenodd;stroke-width:0.3;stroke-linecap:round;stroke-miterlimit:4.1;paint-order:stroke fill markers"
					d="M 9.2681133,65.000001 3.4534726,59.185359 h 5.4452448 l 1.7468246,1.746825 h 6.895061 l 6.7471,-6.779051 h 4.315546 l 1.187934,-1.187937 h 3.703016 v -3.965194 l 1.733166,-0.007 v 4.006964 l -5.039976,4.89327 h -3.187388 v -0.04872 H 26.317865 L 20,64.162415 19.162409,65.000007 h -1.40435 z"
					id="path203"
				/><path
					style="opacity:1;fill:#434a55;fill-opacity:1;fill-rule:evenodd;stroke-width:0.3;stroke-linecap:round;stroke-miterlimit:4.1;paint-order:stroke fill markers"
					d="m 44.703587,57.000002 v -4 h -4.296752 l -3.999999,-4 h -1.179471 v 4 l 3.772636,4 z"
					id="path204"
				/><path
					style="opacity:1;fill:#973c2e;fill-opacity:1;fill-rule:evenodd;stroke-width:0.3;stroke-linecap:round;stroke-miterlimit:4.1;paint-order:stroke fill markers"
					d="M 11.318865,60.932178 H 10.645536 L 8.8987169,59.185359 H 3.4534726 v -6.185357 l 7.8653924,0.03963 z"
					id="path205"
				/><path
					style="opacity:1;fill:#842320;fill-opacity:1;fill-rule:evenodd;stroke-width:0.3;stroke-linecap:round;stroke-miterlimit:4.1;paint-order:stroke fill markers"
					d="m 3.4534726,59.185359 v -3.185358 h 2.1689232 v -2.999999 h 3.3320963 v 6.241132 z"
					id="path206"
				/><rect
					style="opacity:1;fill:#842320;fill-opacity:1;fill-rule:evenodd;stroke-width:0.3;stroke-linecap:round;stroke-miterlimit:4.1;paint-order:stroke fill markers"
					id="rect206"
					width="3.5546846"
					height="5.5422449"
					x="11.318865"
					y="55.389935"
				/><path
					style="opacity:1;fill:#dcfeff;fill-opacity:1;fill-rule:evenodd;stroke-width:0.3;stroke-linecap:round;stroke-miterlimit:4.1;paint-order:stroke fill markers"
					d="M 44.703587,53.000002 V 49.286913 L 41.558889,46.142216 H 20.673298 v -3.018279 l 3.715397,-3.540001 H 37 L 42.583936,34 h 7.075048 l 6.000001,-6.000001 H 42.333333 l -5.901627,5.901629 H 24.391685 L 17,41.293311 v 11.706691 h 4 v -4 l 2.159309,0.0306 V 53.0903 h 4.097005 v -4.090294 l 2.151687,-0.007 v 4.007001 l 4.086198,-0.03481 v -3.965194 h 2.912637 l 3.999999,4 z"
					id="path207"
				/><path
					style="opacity:1;fill:#000000;fill-opacity:1;fill-rule:evenodd;stroke-width:0.3;stroke-linecap:round;stroke-miterlimit:4.1;paint-order:stroke fill markers"
					d="m 24.388695,39.583936 -3.715397,3.540001 v 3.018279 h 8.45407 l 4.040682,-4.040682 v -2.517598 z"
					id="path208"
				/><circle
					style="opacity:1;fill:#fefe03;fill-opacity:1;fill-rule:evenodd;stroke-width:0.3;stroke-linecap:round;stroke-miterlimit:4.1;paint-order:stroke fill markers"
					id="circle208"
					cx="24.508615"
					cy="45.000004"
					r="2"
				/><path
					style="opacity:1;fill:#842320;fill-opacity:1;fill-rule:evenodd;stroke-width:0.3;stroke-linecap:round;stroke-miterlimit:4.1;paint-order:stroke fill markers"
					d="M 29.127368,46.142216 33.16805,42.101534 V 39.583936 H 37 L 38.394915,42 34.958072,46.142216 Z"
					id="path209"
				/><path
					style="opacity:1;fill:#4d1b06;fill-opacity:1;fill-rule:evenodd;stroke-width:0.3;stroke-linecap:round;stroke-miterlimit:4.1;paint-order:stroke fill markers"
					d="M 34.958072,46.142216 38.394915,42 h 4.605086 l -2.354988,4.142216 z"
					id="path210"
				/><path
					style="opacity:1;fill:#424a56;fill-opacity:1;fill-rule:evenodd;stroke-width:0.3;stroke-linecap:round;stroke-miterlimit:4.1;paint-order:stroke fill markers"
					d="M 41.00001,40.251739 42.748271,42 H 38.394915 L 37,39.583939 42.583938,34 h 7.075046 l 5.792901,-5.792901 v 2.919778 L 50,36.578762 h -5.723633 v 1.286666 h -0.638308 z"
					id="path211"
				/><path
					style="opacity:1;fill:#302d34;fill-opacity:1;fill-rule:evenodd;stroke-width:0.3;stroke-linecap:round;stroke-miterlimit:4.1;paint-order:stroke fill markers"
					d="m 50,37.865428 v -1.286666 h -5.723633 v 1.286666 z"
					id="path212"
				/><path
					style="opacity:1;fill:#424a56;fill-opacity:1;fill-rule:evenodd;stroke-width:0.3;stroke-linecap:round;stroke-miterlimit:4.1;paint-order:stroke fill markers"
					d="m 11.318865,55.389933 v -2.350302 l -3.1825691,-3.18257 v -3.621124 l 6.7640651,6.764065 -0.01755,2.389931 z"
					id="path213"
				/><path
					style="opacity:1;fill:#424a56;fill-opacity:1;fill-rule:evenodd;stroke-width:0.3;stroke-linecap:round;stroke-miterlimit:4.1;paint-order:stroke fill markers"
					d="M 17,53.000002 V 41.293311 l 7.41682,-7.416821 h 10.583181 l 6.322523,-6.322523 h 4.475197 l 3.681476,-3.681476 v -2.217999 l -4.668473,4.668472 h -6.313849 l -5.929861,5.929858 h -4.752691 l 0.185676,-1.106403 9.709147,-9.709147 h 3.177247 l 4.604281,-4.604281 v -1.743473 l -4.402272,4.402271 H 36.413281 L 23,32.90507 v -5.905069 l 6.677217,-6.677217 V 17 l -8.384188,8 v 8.858398 l -4.354392,4.354393 V 22.31595 L 21,18.454687 v -2.61276 l -5.940786,5.940786 v 31.217289 z"
					id="path214"
				/><path
					style="opacity:1;fill:#424a56;fill-opacity:1;fill-rule:evenodd;stroke-width:0.3;stroke-linecap:round;stroke-miterlimit:4.1;paint-order:stroke fill markers"
					d="M 15.059214,43.937369 5.6554144,34.53357 v 2.930935 l 9.4037996,9.366744 z"
					id="path215"
				/><path
					style="opacity:1;fill:#b3def2;fill-opacity:1;fill-rule:evenodd;stroke-width:0.3;stroke-linecap:round;stroke-miterlimit:4.1;paint-order:stroke fill markers"
					d="M 15.059214,53.000002 V 46.831249 L 8,39.772034 l 0.1362959,6.463903 6.7640651,6.764065 z"
					id="path216"
				/><path
					style="opacity:1;fill:#dcfeff;fill-opacity:1;fill-rule:evenodd;stroke-width:0.3;stroke-linecap:round;stroke-miterlimit:4.1;paint-order:stroke fill markers"
					d="M 15.059214,43.937369 V 21.782713 L 21,15.841927 V 3 L 5.5337479,18.466252 5.6554144,34.53357 Z"
					id="path217"
				/><path
					style="opacity:1;fill:#dcfeff;fill-opacity:1;fill-rule:evenodd;stroke-width:0.3;stroke-linecap:round;stroke-miterlimit:4.1;paint-order:stroke fill markers"
					d="m 16.938637,38.212791 4.349088,-4.349088 V 25 l 8.389492,-8 v -6.254095 l -12.73858,12.73858 z"
					id="path218"
				/><path
					style="opacity:1;fill:#dcfeff;fill-opacity:1;fill-rule:evenodd;stroke-width:0.3;stroke-linecap:round;stroke-miterlimit:4.1;paint-order:stroke fill markers"
					d="M 45.490674,15.089518 H 36.144562 L 23,28.234081 V 32.90507 L 36.413281,19.491789 h 4.675121 z"
					id="path219"
				/><path
					style="opacity:1;fill:#dcfeff;fill-opacity:1;fill-rule:evenodd;stroke-width:0.3;stroke-linecap:round;stroke-miterlimit:4.1;paint-order:stroke fill markers"
					d="m 40.886393,21.437272 8.592804,0.04869 v 0.168528 l -4.668473,4.668472 H 38.496875 L 32.567014,32.25282 H 27.814323 L 38.627962,21.43727 Z"
					id="path220"
				/><path
					style="opacity:1;fill:#323037;fill-opacity:1;fill-rule:evenodd;stroke-width:0.3;stroke-linecap:round;stroke-miterlimit:4.1;paint-order:stroke fill markers"
					d="m 21,18.454687 v 0.968435 l -4.061363,4.061363 V 22.31595 Z"
					id="path221"
				/><path
					style="opacity:1;fill:#323037;fill-opacity:1;fill-rule:evenodd;stroke-width:0.3;stroke-linecap:round;stroke-miterlimit:4.1;paint-order:stroke fill markers"
					d="m 29.677217,20.322784 v 1.234079 L 23,28.234081 v -1.23408 z"
					id="path222"
				/><path
					style="opacity:1;fill:#323037;fill-opacity:1;fill-rule:evenodd;stroke-width:0.3;stroke-linecap:round;stroke-miterlimit:4.1;paint-order:stroke fill markers"
					d="m 27.814323,32.252819 0.185676,-1.1064 9.709147,-9.709147 0.918816,-2e-6 z"
					id="path223"
				/><path
					style="opacity:1;fill:#323037;fill-opacity:1;fill-rule:evenodd;stroke-width:0.3;stroke-linecap:round;stroke-miterlimit:4.1;paint-order:stroke fill markers"
					d="m 35.000001,33.87649 6.322523,-6.322523 h 4.475197 l -0.446032,0.446032 h -3.018356 l -5.901627,5.901629 z"
					id="path224"
				/></g
			><g id="g116"
				><path
					style="opacity:1;fill:#4d1b06;fill-rule:evenodd;stroke-width:0.3;stroke-linecap:round;stroke-miterlimit:4.1;paint-order:stroke fill markers;fill-opacity:1"
					d="m 29.583642,124 v -3.51294 H 26.433653 L 24.727409,124 Z"
					id="path2"
				/><path
					style="opacity:1;fill:#4d1b06;fill-opacity:1;fill-rule:evenodd;stroke-width:0.3;stroke-linecap:round;stroke-miterlimit:4.1;paint-order:stroke fill markers"
					d="M 24.727409,118.47894 26.381153,115 h 3.110615 v 3.41331 z"
					id="path3"
				/><path
					style="opacity:1;fill:#7a5131;fill-opacity:1;fill-rule:evenodd;stroke-width:0.3;stroke-linecap:round;stroke-miterlimit:4.1;paint-order:stroke fill markers"
					d="m 24.727409,124 h -2.296866 l 4.00311,-3.51294 z"
					id="path4"
				/><path
					style="opacity:1;fill:#7a5131;fill-opacity:1;fill-rule:evenodd;stroke-width:0.3;stroke-linecap:round;stroke-miterlimit:4.1;paint-order:stroke fill markers"
					d="m 24.727409,118.47894 h -2.23089 L 26.381153,115 Z"
					id="path5"
				/><path
					style="opacity:1;fill:#7a5131;fill-opacity:1;fill-rule:evenodd;stroke-width:0.3;stroke-linecap:round;stroke-miterlimit:4.1;paint-order:stroke fill markers"
					d="m 69.661253,123.84223 1.679813,-3.34107 -3.888631,3.35963 z"
					id="path6"
				/><path
					style="opacity:1;fill:#7a5131;fill-opacity:1;fill-rule:evenodd;stroke-width:0.3;stroke-linecap:round;stroke-miterlimit:4.1;paint-order:stroke fill markers"
					d="m 69.614848,118.44083 1.726218,-3.40603 -3.888631,3.35035 z"
					id="path7"
				/><path
					style="opacity:1;fill:#4d1b06;fill-opacity:1;fill-rule:evenodd;stroke-width:0.3;stroke-linecap:round;stroke-miterlimit:4.1;paint-order:stroke fill markers"
					d="m 69.614848,118.44083 1.726218,-3.40603 h 3.127611 l 0.0093,3.40603 z"
					id="path8"
				/><path
					style="opacity:1;fill:#4d1b06;fill-opacity:1;fill-rule:evenodd;stroke-width:0.3;stroke-linecap:round;stroke-miterlimit:4.1;paint-order:stroke fill markers"
					d="m 71.341066,120.50116 -1.679813,3.34107 4.816724,0.0186 v -3.35963 z"
					id="path9"
				/><path
					style="opacity:1;fill:#842320;fill-opacity:1;fill-rule:evenodd;stroke-width:0.3;stroke-linecap:round;stroke-miterlimit:4.1;paint-order:stroke fill markers"
					d="m 39.879349,111.10905 h -0.287703 l -6.802784,8.0928 v 4.64038 h 26.496521 l 8.714618,-8.71462 H 64.742459 V 114 l 7.828833,-7.82883 h -7.73403 l 8.964342,-9.171169 H 62.159771 v 20.308579 l -3.262667,3.26267 H 40.000002 v -9.44228 z"
					id="path10"
				/><path
					style="opacity:1;fill:#4d1b06;fill-opacity:1;fill-rule:evenodd;stroke-width:0.3;stroke-linecap:round;stroke-miterlimit:4.1;paint-order:stroke fill markers"
					d="m 40.000002,111.12897 h 3.303942 v 6.36523 h 9.696058 v -11.2297 h 9.159769 V 109 h -5.677173 v 8.30858 h 5.677168 l -3.262665,3.26267 H 40.000002 Z"
					id="path11"
				/><path
					style="opacity:1;fill:#b3def2;fill-opacity:1;fill-rule:evenodd;stroke-width:0.3;stroke-linecap:round;stroke-miterlimit:4.1;paint-order:stroke fill markers"
					d="m 43.303944,117.4942 v -6.36523 h 9.696058 v 6.36523 z"
					id="path12"
				/><path
					style="opacity:1;fill:#b3def2;fill-opacity:1;fill-rule:evenodd;stroke-width:0.3;stroke-linecap:round;stroke-miterlimit:4.1;paint-order:stroke fill markers"
					d="M 56.482598,117.30858 V 109 h 5.677173 v 8.30858 z"
					id="path13"
				/><path
					style="opacity:1;fill:#b3def2;fill-opacity:1;fill-rule:evenodd;stroke-width:0.3;stroke-linecap:round;stroke-miterlimit:4.1;paint-order:stroke fill markers"
					d="M 62.159771,106.2645 H 50.51794 l -3.657745,-3.65775 V 85.351561 l 3.968239,-3.96824 h 5.228236 l 3.943331,3.943332 v 7.555015 h -6.106729 v 4.118335 l 8.266499,2e-6 z"
					id="path14"
				/><rect
					style="opacity:1;fill:#b3def2;fill-opacity:1;fill-rule:evenodd;stroke-width:0.336219;stroke-linecap:round;stroke-miterlimit:4.1;paint-order:stroke fill markers"
					id="rect15"
					width="5.2413006"
					height="11.587"
					x="47.758701"
					y="67.206497"
				/><path
					style="opacity:1;fill:#b3def2;fill-opacity:1;fill-rule:evenodd;stroke-width:0.3;stroke-linecap:round;stroke-miterlimit:4.1;paint-order:stroke fill markers"
					d="m 47.758701,65.037124 v -9.426916 l 9.241301,0.01856 v 6.371233 L 54,65.000001 Z"
					id="path15"
				/><path
					style="opacity:1;fill:#b3def2;fill-opacity:1;fill-rule:evenodd;stroke-width:0.3;stroke-linecap:round;stroke-miterlimit:4.1;paint-order:stroke fill markers"
					d="m 47.758701,53.023388 0.0098,-6.023387 -6.76849,-6.748262 2.63805,-2.386311 H 50 l 7.000002,8.779584 v 6.366589 z"
					id="path16"
				/><path
					style="opacity:1;fill:#842320;fill-opacity:1;fill-rule:evenodd;stroke-width:0.3;stroke-linecap:round;stroke-miterlimit:4.1;paint-order:stroke fill markers"
					d="m 76.566124,115.26682 h 3.341068 v 5.56845 h 12.092811 l 6.253384,-6.24132 V 97.000001 h 6.526193 L 101,101 v 1.42227 h 3.2413 L 101,105.68909 v 0.85383 h 3.46404 L 100,111 v 6.71694 L 93.790904,124 H 76.518467 Z"
					id="path17"
				/><path
					style="opacity:1;fill:#4d1b06;fill-opacity:1;fill-rule:evenodd;stroke-width:0.3;stroke-linecap:round;stroke-miterlimit:4.1;paint-order:stroke fill markers"
					d="m 79.90719,115.26682 h 3.545244 l 0.221552,-0.38374 v 2.35555 h 5.326015 v -7.86841 l 0.471535,-0.12635 v -3.99488 h 8.781849 V 109 h -6.562471 v 8.23207 h 3.919252 l -3.610163,3.61016 H 79.917831 Z"
					id="path18"
				/><path
					style="opacity:1;fill:#b3def2;fill-opacity:1;fill-rule:evenodd;stroke-width:0.3;stroke-linecap:round;stroke-miterlimit:4.1;paint-order:stroke fill markers"
					d="m 83.673986,117.23863 v -2.35555 l 5.326015,-5.51286 v 7.86841 z"
					id="path19"
				/><path
					style="opacity:1;fill:#b3def2;fill-opacity:1;fill-rule:evenodd;stroke-width:0.3;stroke-linecap:round;stroke-miterlimit:4.1;paint-order:stroke fill markers"
					d="m 91.690914,117.23207 h 3.919252 l 2.643219,-2.64322 V 109 h -6.562471 z"
					id="path20"
				/><path
					style="opacity:1;fill:#b3def2;fill-opacity:1;fill-rule:evenodd;stroke-width:0.3;stroke-linecap:round;stroke-miterlimit:4.1;paint-order:stroke fill markers"
					d="M 98.253385,105.24899 H 82.728537 L 79.90719,102.32947 V 84.498438 l 3.161871,-3.161871 h 10.196846 l 2.912218,2.912218 v 8.660726 h -6.178124 v 4.09049 h 8.253384 z"
					id="path21"
				/><path
					style="opacity:1;fill:#b3def2;fill-opacity:1;fill-rule:evenodd;stroke-width:0.3;stroke-linecap:round;stroke-miterlimit:4.1;paint-order:stroke fill markers"
					d="m 58.537284,81.383319 3.871862,3.955116 H 78.277211 V 72.554734 l -8.859343,8.859343 z"
					id="path22"
				/><path
					style="opacity:1;fill:#b3def2;fill-opacity:1;fill-rule:evenodd;stroke-width:0.3;stroke-linecap:round;stroke-miterlimit:4.1;paint-order:stroke fill markers"
					d="m 79.90719,81.138452 2.479373,-2.479376 h 11.299344 l 2.617805,2.617809 -0.150315,-8.722151 H 80 Z"
					id="path23"
				/><path
					style="opacity:1;fill:#b3def2;fill-opacity:1;fill-rule:evenodd;stroke-width:0.3;stroke-linecap:round;stroke-miterlimit:4.1;paint-order:stroke fill markers"
					d="m 98.253385,83.212193 2e-6,-10.657459 h 13.256203 l 4.84311,4.843105 v 5.906103 z"
					id="path24"
				/><path
					style="opacity:1;fill:#b3def2;fill-opacity:1;fill-rule:evenodd;stroke-width:0.3;stroke-linecap:round;stroke-miterlimit:4.1;paint-order:stroke fill markers"
					d="m 98.253385,123.84704 c 4.101285,-2.22006 6.794505,-5.04661 7.746615,-8.62309 v -4.31811 h 10.30626 c -0.24821,5.99983 -2.63471,8.1379 -4.76743,9.79617 -3.46136,2.69133 -4.35845,2.88565 -13.285445,3.14503 z"
					id="path25"
				/><rect
					style="opacity:1;fill:#842320;fill-opacity:1;fill-rule:evenodd;stroke-width:0.3;stroke-linecap:round;stroke-miterlimit:4.1;paint-order:stroke fill markers"
					id="rect26"
					width="6.598959"
					height="5.7722564"
					x="106.00001"
					y="103.22775"
				/><path
					style="opacity:1;fill:#842320;fill-opacity:1;fill-rule:evenodd;stroke-width:0.3;stroke-linecap:round;stroke-miterlimit:4.1;paint-order:stroke fill markers"
					d="m 98.000001,92.844547 h 3.846869 l 2.35267,-2.352669 v -5.248259 h -6.199539 z"
					id="path28"
				/><path
					style="opacity:1;fill:#bec8cd;fill-opacity:1;fill-rule:evenodd;stroke-width:0.3;stroke-linecap:round;stroke-miterlimit:4.1;paint-order:stroke fill markers"
					d="m 113.08458,122.57392 c 1.15337,-0.51702 2.3455,-0.98337 3.28124,-1.78499 l 1.34531,0.66937 c -1.54218,0.8341 -3.08437,1.04407 -4.62655,1.11562 z"
					id="path29"
				/><path
					style="opacity:1;fill:#bec8cd;fill-opacity:1;fill-rule:evenodd;stroke-width:0.3;stroke-linecap:round;stroke-miterlimit:4.1;paint-order:stroke fill markers"
					d="m 118.27378,117.63341 c 2.30423,-1.96084 3.67682,-4.2739 4.6775,-6.72757 H 119 c 0.31955,2.74468 -0.2674,4.67885 -0.72622,6.72757 z"
					id="path30"
				/><path
					style="opacity:1;fill:#bec8cd;fill-opacity:1;fill-rule:evenodd;stroke-width:0.3;stroke-linecap:round;stroke-miterlimit:4.1;paint-order:stroke fill markers"
					d="m 119,107.48023 v -4.31811 h 4.54517 z"
					id="path31"
				/><path
					style="opacity:1;fill:#bec8cd;fill-opacity:1;fill-rule:evenodd;stroke-width:0.3;stroke-linecap:round;stroke-miterlimit:4.1;paint-order:stroke fill markers"
					d="m 119.20185,99.000002 v -5.672857 h 6.18098 z"
					id="path32"
				/><path
					style="opacity:1;fill:#bec8cd;fill-opacity:1;fill-rule:evenodd;stroke-width:0.3;stroke-linecap:round;stroke-miterlimit:4.1;paint-order:stroke fill markers"
					d="m 119.20185,91.081205 v -5.772621 l 6.18098,-0.05568 z"
					id="path33"
				/><path
					style="opacity:1;fill:#bec8cd;fill-opacity:1;fill-rule:evenodd;stroke-width:0.3;stroke-linecap:round;stroke-miterlimit:4.1;paint-order:stroke fill markers"
					d="m 119.20185,83.303942 v -5.772621 l 6.18098,-0.05568 z"
					id="path34"
				/><path
					style="opacity:1;fill:#bec8cd;fill-opacity:1;fill-rule:evenodd;stroke-width:0.3;stroke-linecap:round;stroke-miterlimit:4.1;paint-order:stroke fill markers"
					d="M 118.42227,74.654293 114.80278,71 124,66.338745 Z"
					id="path35"
				/><path
					style="opacity:1;fill:#bec8cd;fill-opacity:1;fill-rule:evenodd;stroke-width:0.3;stroke-linecap:round;stroke-miterlimit:4.1;paint-order:stroke fill markers"
					d="m 98.253385,70.914114 5.564985,-6.089978 V 71 Z"
					id="path36"
				/><path
					style="opacity:1;fill:#bec8cd;fill-opacity:1;fill-rule:evenodd;stroke-width:0.3;stroke-linecap:round;stroke-miterlimit:4.1;paint-order:stroke fill markers"
					d="m 106,70.914114 5.56499,-6.089978 V 71 Z"
					id="path37"
				/><rect
					style="opacity:1;fill:#5a82c6;fill-opacity:1;fill-rule:evenodd;stroke-width:0.3;stroke-linecap:round;stroke-miterlimit:4.1;paint-order:stroke fill markers"
					id="rect37"
					width="3.7072914"
					height="5.7722564"
					x="112.59896"
					y="103.22775"
				/><rect
					style="opacity:1;fill:#842320;fill-opacity:1;fill-rule:evenodd;stroke-width:0.3;stroke-linecap:round;stroke-miterlimit:4.1;paint-order:stroke fill markers"
					id="rect38"
					width="6.598959"
					height="5.7722564"
					x="106.00001"
					y="93.227745"
				/><rect
					style="opacity:1;fill:#85b2dd;fill-opacity:1;fill-rule:evenodd;stroke-width:0.3;stroke-linecap:round;stroke-miterlimit:4.1;paint-order:stroke fill markers"
					id="rect39"
					width="3.7072914"
					height="5.7722564"
					x="112.59896"
					y="93.227745"
				/><rect
					style="opacity:1;fill:#842320;fill-opacity:1;fill-rule:evenodd;stroke-width:0.3;stroke-linecap:round;stroke-miterlimit:4.1;paint-order:stroke fill markers"
					id="rect40"
					width="6.598959"
					height="5.7722564"
					x="106.00001"
					y="85.379715"
				/><rect
					style="opacity:1;fill:#b3def2;fill-opacity:1;fill-rule:evenodd;stroke-width:0.3;stroke-linecap:round;stroke-miterlimit:4.1;paint-order:stroke fill markers"
					id="rect41"
					width="3.7072914"
					height="5.7722564"
					x="112.59896"
					y="85.379715"
				/><rect
					style="opacity:1;fill:#842320;fill-opacity:1;fill-rule:evenodd;stroke-width:0.3;stroke-linecap:round;stroke-miterlimit:4.1;paint-order:stroke fill markers"
					id="rect42"
					width="16.117439"
					height="5.7169375"
					x="62.159771"
					y="87.146172"
				/><path
					style="opacity:1;fill:#dcfeff;fill-opacity:1;fill-rule:evenodd;stroke-width:0.3;stroke-linecap:round;stroke-miterlimit:4.1;paint-order:stroke fill markers"
					d="m 57.000002,79.000002 v -9.595257 l 7.999999,-7.404743 V 26.538653 L 69.538653,22 H 124 l -4.62856,5.838021 H 76.000001 V 29.53114 L 116.62181,41.568446 111.471,44.426915 74.300352,31.723009 h -2.493741 l -0.0525,2.585615 39.521989,19.315506 h -5.30858 L 71.814385,37.772623 v 36.603246 l -4.624134,4.624133 z"
					id="path42"
				/><path
					style="opacity:1;fill:#bec8cd;fill-opacity:1;fill-rule:evenodd;stroke-width:0.3;stroke-linecap:round;stroke-miterlimit:4.1;paint-order:stroke fill markers"
					d="M 62.273782,43.684454 V 40.278423 H 58.923433 Z"
					id="path43"
				/><path
					style="opacity:1;fill:#bec8cd;fill-opacity:1;fill-rule:evenodd;stroke-width:0.3;stroke-linecap:round;stroke-miterlimit:4.1;paint-order:stroke fill markers"
					d="m 62.273782,37.661252 v -5.347621 h -5.27378 z"
					id="path44"
				/><path
					style="opacity:1;fill:#bec8cd;fill-opacity:1;fill-rule:evenodd;stroke-width:0.3;stroke-linecap:round;stroke-miterlimit:4.1;paint-order:stroke fill markers"
					d="M 50.478565,13.5712 67,21.68242 62.273782,26.433653 v 3.596237 z"
					id="path45"
				/><path
					style="opacity:1;fill:#bec8cd;fill-opacity:1;fill-rule:evenodd;stroke-width:0.3;stroke-linecap:round;stroke-miterlimit:4.1;paint-order:stroke fill markers"
					d="m 71,20 5.714616,-6 v 6 z"
					id="path46"
				/><path
					style="opacity:1;fill:#bec8cd;fill-opacity:1;fill-rule:evenodd;stroke-width:0.3;stroke-linecap:round;stroke-miterlimit:4.1;paint-order:stroke fill markers"
					d="m 80.000002,20 5.714616,-6 v 6 z"
					id="path47"
				/><path
					style="opacity:1;fill:#bec8cd;fill-opacity:1;fill-rule:evenodd;stroke-width:0.3;stroke-linecap:round;stroke-miterlimit:4.1;paint-order:stroke fill markers"
					d="m 89.000002,20 5.714616,-6 v 6 z"
					id="path48"
				/><path
					style="opacity:1;fill:#bbb69d;fill-opacity:1;fill-rule:evenodd;stroke-width:0.3;stroke-linecap:round;stroke-miterlimit:4.1;paint-order:stroke fill markers"
					d="m 71.814385,74.375869 4.89095,-4.890953 H 90.802784 L 103.52668,56.213456 71.814385,39.611104 Z"
					id="path49"
				/><path
					style="opacity:1;fill:#bbb69d;fill-opacity:1;fill-rule:evenodd;stroke-width:0.3;stroke-linecap:round;stroke-miterlimit:4.1;paint-order:stroke fill markers"
					d="m 108.73335,52.381417 2.13312,-6.102837 -39.059859,-14.555571 -0.0525,2.585615 z"
					id="path50"
				/><path
					style="opacity:1;fill:#bbb69d;fill-opacity:1;fill-rule:evenodd;stroke-width:0.3;stroke-linecap:round;stroke-miterlimit:4.1;paint-order:stroke fill markers"
					d="m 113.27298,40.576097 4.05416,-12.738076 H 76.000001 v 1.693119 z"
					id="path51"
				/><path
					style="opacity:1;fill:#a0958d;fill-opacity:1;fill-rule:evenodd;stroke-width:0.3;stroke-linecap:round;stroke-miterlimit:4.1;paint-order:stroke fill markers"
					d="m 97.999999,34.87471 1.187934,1.187934 h 2.951277 V 33.139212 L 101,32.000001 102.19257,30.807426 V 28.00696 h -2.948952 l -1.13225,1.132252 -1.187937,-1.187936 h -2.923432 v 2.802784 l 1.287706,1.287706 -1.287706,1.287703 v 2.612528 h 3.000002 z"
					id="path57"
				/><path
					style="opacity:1;fill:#a0958d;fill-opacity:1;fill-rule:evenodd;stroke-width:0.3;stroke-linecap:round;stroke-miterlimit:4.1;paint-order:stroke fill markers"
					d="m 88,59.832946 1.187934,1.187934 h 2.951277 v -2.923432 l -1.139209,-1.139211 1.192575,-1.192575 v -2.800466 h -2.948958 l -1.13225,1.132252 -1.187937,-1.187936 H 84 v 2.802784 L 85.287706,57.000002 84,58.287705 v 2.612528 h 3.000002 z"
					id="path54"
				/><path
					style="opacity:1;fill:#a0958d;fill-opacity:1;fill-rule:evenodd;stroke-width:0.3;stroke-linecap:round;stroke-miterlimit:4.1;paint-order:stroke fill markers"
					d="m 75.888633,53.735499 1.187934,1.187934 h 2.951277 V 52.000001 L 78.888635,50.86079 80.08121,49.668215 v -2.800466 h -2.948958 l -1.13225,1.132252 -1.187937,-1.187936 h -2.923432 v 2.802784 l 1.287706,1.287706 -1.287706,1.287703 v 2.612528 h 3.000002 z"
					id="path55"
				/><path
					style="opacity:1;fill:#a0958d;fill-opacity:1;fill-rule:evenodd;stroke-width:0.3;stroke-linecap:round;stroke-miterlimit:4.1;paint-order:stroke fill markers"
					d="m 75.888633,65.874711 1.187934,1.187934 h 2.951277 v -2.923432 l -1.139209,-1.139211 1.192575,-1.192575 v -2.800466 h -2.948958 l -1.13225,1.132252 -1.187937,-1.187936 h -2.923432 v 2.802784 l 1.287706,1.287706 -1.287706,1.287703 v 2.612528 h 3.000002 z"
					id="path56"
				/><path
					style="opacity:1;fill:#a0958d;fill-opacity:1;fill-rule:evenodd;stroke-width:0.3;stroke-linecap:round;stroke-miterlimit:4.1;paint-order:stroke fill markers"
					d="m 109,34.87471 1.18794,1.187934 h 2.95127 V 33.139212 L 112,32.000001 113.19257,30.807426 V 28.00696 h -2.94895 l -1.13225,1.132252 -1.18794,-1.187936 H 105 v 2.802784 l 1.28771,1.287706 L 105,33.329469 v 2.612528 h 3 z"
					id="path58"
				/><path
					style="opacity:1;fill:#a0958d;fill-opacity:1;fill-rule:evenodd;stroke-width:0.3;stroke-linecap:round;stroke-miterlimit:4.1;paint-order:stroke fill markers"
					d="m 71.814385,39.611104 v -1.838481 l 34.153135,15.851507 -2.44084,2.589326 z"
					id="path59"
				/><path
					style="opacity:1;fill:#a0958d;fill-opacity:1;fill-rule:evenodd;stroke-width:0.3;stroke-linecap:round;stroke-miterlimit:4.1;paint-order:stroke fill markers"
					d="M 111.471,44.426915 110.86647,46.27858 71.806611,31.723009 h 2.493741 z"
					id="path60"
				/><path
					style="opacity:1;fill:#842320;fill-opacity:1;fill-rule:evenodd;stroke-width:0.3;stroke-linecap:round;stroke-miterlimit:4.1;paint-order:stroke fill markers"
					d="m 27.000001,103 c 1.171697,2.11174 2.705507,4.21745 5.353005,6.3046 h 8.386845 l 4.049048,-4.04905 V 103 Z"
					id="path61"
				/><path
					style="opacity:1;fill:#842320;fill-opacity:1;fill-rule:evenodd;stroke-width:0.3;stroke-linecap:round;stroke-miterlimit:4.1;paint-order:stroke fill markers"
					d="M 41.356724,100.68151 33.626126,93.000001 H 14.266823 l 7.993095,7.760249 z"
					id="path62"
				/><path
					style="opacity:1;fill:#842320;fill-opacity:1;fill-rule:evenodd;stroke-width:0.3;stroke-linecap:round;stroke-miterlimit:4.1;paint-order:stroke fill markers"
					d="M 44.788899,100.26914 V 91.000002 H 39.38747 L 38,93.40317 Z"
					id="path63"
				/><path
					style="opacity:1;fill:#842320;fill-opacity:1;fill-rule:evenodd;stroke-width:0.3;stroke-linecap:round;stroke-miterlimit:4.1;paint-order:stroke fill markers"
					d="m 44.788899,88.315545 -0.0186,-6.932226 h -6.770301 v 6.950786 z"
					id="path64"
				/><path
					style="opacity:1;fill:#842320;fill-opacity:1;fill-rule:evenodd;stroke-width:0.3;stroke-linecap:round;stroke-miterlimit:4.1;paint-order:stroke fill markers"
					d="M 44.788899,78.880961 V 67.619752 h -8.472157 v 4.213109 l 1.568432,1.568431 -0.01969,5.392203 z"
					id="path65"
				/><path
					style="opacity:1;fill:#842320;fill-opacity:1;fill-rule:evenodd;stroke-width:0.3;stroke-linecap:round;stroke-miterlimit:4.1;paint-order:stroke fill markers"
					d="m 36.474241,65.231009 v -5.696228 l 2.53478,-2.534779 h 5.694566 v 8.257259 z"
					id="path66"
				/><path
					style="opacity:1;fill:#0463f6;fill-opacity:1;fill-rule:evenodd;stroke-width:0.3;stroke-linecap:round;stroke-miterlimit:4.1;paint-order:stroke fill markers"
					d="m 27.000001,103 h -2.155454 l -2.241166,-2.24117 18.753343,-0.0773 -7.730598,-7.681509 H 18.145246 L 20,91.000002 h 15.43737 l 2.562628,-2.665899 6.788901,-0.01855 v 2.684458 H 39.38747 L 38,93.403181 l 6.788899,6.865969 v 2.73086 z"
					id="path67"
				/><path
					style="opacity:1;fill:#4d1b06;fill-opacity:1;fill-rule:evenodd;stroke-width:0.3;stroke-linecap:round;stroke-miterlimit:4.1;paint-order:stroke fill markers"
					d="M 32.353006,109.3046 H 29.382831 C 26.861705,107.5812 25.812122,105.30598 24.844547,103 h 2.155454 z"
					id="path68"
				/><path
					style="opacity:1;fill:#4d1b06;fill-opacity:1;fill-rule:evenodd;stroke-width:0.3;stroke-linecap:round;stroke-miterlimit:4.1;paint-order:stroke fill markers"
					d="m 22.259918,100.76025 h -3.800521 l -7.760248,-7.760249 h 3.567675 z"
					id="path69"
				/><path
					style="opacity:1;fill:#842320;fill-opacity:1;fill-rule:evenodd;stroke-width:0.3;stroke-linecap:round;stroke-miterlimit:4.1;paint-order:stroke fill markers"
					d="m 11,84.529 h 6.354988 v 6.471002 H 14.962445 C 12.098899,89.8574 11.335176,87.334092 11,84.529 Z"
					id="path70"
				/><path
					style="opacity:1;fill:#842320;fill-opacity:1;fill-rule:evenodd;stroke-width:0.295859;stroke-linecap:round;stroke-miterlimit:4.1;paint-order:stroke fill markers"
					d="m 20.776799,84.529 v 6.471002 h 6.446403 V 84.529 Z"
					id="path71"
				/><path
					style="opacity:1;fill:#842320;fill-opacity:1;fill-rule:evenodd;stroke-width:0.3;stroke-linecap:round;stroke-miterlimit:4.1;paint-order:stroke fill markers"
					d="m 29.150519,84.529 v 6.471002 c 0,0 6.286851,0 6.286851,0 L 35.450494,84.529 Z"
					id="path72"
				/><rect
					style="opacity:1;fill:#fefe03;fill-opacity:1;fill-rule:evenodd;stroke-width:0.3;stroke-linecap:round;stroke-miterlimit:4.1;paint-order:stroke fill markers"
					id="rect72"
					width="4.0677485"
					height="4.2412968"
					x="20.776798"
					y="80.287704"
				/><rect
					style="opacity:1;fill:#fefe03;fill-opacity:1;fill-rule:evenodd;stroke-width:0.3;stroke-linecap:round;stroke-miterlimit:4.1;paint-order:stroke fill markers"
					id="rect73"
					width="4.0805697"
					height="4.1649194"
					x="11"
					y="80.364075"
				/><rect
					style="opacity:1;fill:#fefe03;fill-opacity:1;fill-rule:evenodd;stroke-width:0.3;stroke-linecap:round;stroke-miterlimit:4.1;paint-order:stroke fill markers"
					id="rect74"
					width="4.0031095"
					height="4.13867"
					x="29.15052"
					y="80.390327"
				/><rect
					style="opacity:1;fill:#4d1b06;fill-opacity:1;fill-rule:evenodd;stroke-width:0.289159;stroke-linecap:round;stroke-miterlimit:4.1;paint-order:stroke fill markers"
					id="rect75"
					width="2.3786547"
					height="4.2412958"
					x="24.844547"
					y="80.287704"
				/><rect
					style="opacity:1;fill:#4d1b06;fill-opacity:1;fill-rule:evenodd;stroke-width:0.3;stroke-linecap:round;stroke-miterlimit:4.1;paint-order:stroke fill markers"
					id="rect76"
					width="2.2968647"
					height="4.1386724"
					x="33.153629"
					y="80.390327"
				/><rect
					style="opacity:1;fill:#4d1b06;fill-opacity:1;fill-rule:evenodd;stroke-width:0.3;stroke-linecap:round;stroke-miterlimit:4.1;paint-order:stroke fill markers"
					id="rect77"
					width="2.2744179"
					height="4.164917"
					x="15.080569"
					y="80.364067"
				/><rect
					style="opacity:1;fill:#842320;fill-opacity:1;fill-rule:evenodd;stroke-width:0.295859;stroke-linecap:round;stroke-miterlimit:4.1;paint-order:stroke fill markers"
					id="rect78"
					width="6.4464035"
					height="1.9054918"
					x="20.776798"
					y="78.382217"
				/><path
					style="opacity:1;fill:#192bc3;fill-opacity:1;fill-rule:evenodd;stroke-width:0.3;stroke-linecap:round;stroke-miterlimit:4.1;paint-order:stroke fill markers"
					d="m 11,80.364067 6.354987,-6.142466 V 71.452236 C 12.825897,73.54778 10.049707,76.279598 11,80.364067 Z"
					id="path79"
				/><path
					style="opacity:1;fill:#0255e9;fill-opacity:1;fill-rule:evenodd;stroke-width:0.3;stroke-linecap:round;stroke-miterlimit:4.1;paint-order:stroke fill markers"
					d="M 17.354988,80.364067 H 11 c 0.384132,-3.137555 2.298228,-5.313419 6.354987,-6.142466 z"
					id="path78"
				/><path
					style="opacity:1;fill:#192bc3;fill-opacity:1;fill-rule:evenodd;stroke-width:0.3;stroke-linecap:round;stroke-miterlimit:4.1;paint-order:stroke fill markers"
					d="m 20.776798,78.382216 6.446406,-6.382215 v -2.608382 c -4.567536,2.145596 -7.045692,5.026546 -6.446406,8.990597 z"
					id="path81"
				/><path
					style="opacity:1;fill:#0255e9;fill-opacity:1;fill-rule:evenodd;stroke-width:0.29586;stroke-linecap:round;stroke-miterlimit:4.1;paint-order:stroke fill markers"
					d="m 20.776798,78.382216 h 6.446405 v -6.382215 c -2.272569,1.149405 -4.789523,0.971281 -6.446405,6.382215 z"
					id="path80"
				/><path
					style="opacity:1;fill:#192bc3;fill-opacity:1;fill-rule:evenodd;stroke-width:0.3;stroke-linecap:round;stroke-miterlimit:4.1;paint-order:stroke fill markers"
					d="m 35.450491,80.390327 h -6.299972 v -8.951214 c 6.724916,3.463575 6.50924,6.207062 6.299972,8.951214 z"
					id="path83"
				/><path
					style="opacity:1;fill:#0255e9;fill-opacity:1;fill-rule:evenodd;stroke-width:0.3;stroke-linecap:round;stroke-miterlimit:4.1;paint-order:stroke fill markers"
					d="m 35.450491,80.390327 h -6.299972 v -4.711856 c 4.227017,0.158831 5.839554,2.052991 6.299972,4.711856 z"
					id="path82"
				/><path
					style="opacity:1;fill:#dcfeff;fill-opacity:1;fill-rule:evenodd;stroke-width:0.3;stroke-linecap:round;stroke-miterlimit:4.1;paint-order:stroke fill markers"
					d="M 116.62181,41.568446 76.000001,29.53114 74.300352,31.723009 111.471,44.426915 Z"
					id="path84"
				/><path
					style="opacity:1;fill:#0b5ceb;fill-opacity:1;fill-rule:evenodd;stroke-width:0.3;stroke-linecap:round;stroke-miterlimit:4.1;paint-order:stroke fill markers"
					d="m 3.2681129,71 2.9238704,-2.923868 h 8.5079627 l -2.928361,2.928361 z"
					id="path85"
				/><path
					style="opacity:1;fill:#0b5ceb;fill-opacity:1;fill-rule:evenodd;stroke-width:0.3;stroke-linecap:round;stroke-miterlimit:4.1;paint-order:stroke fill markers"
					d="M 20,70.348027 V 67 l 7.000001,-6.999999 v 3.2761 z"
					id="path86"
				/><path
					style="opacity:1;fill:#0b5ceb;fill-opacity:1;fill-rule:evenodd;stroke-width:0.3;stroke-linecap:round;stroke-miterlimit:4.1;paint-order:stroke fill markers"
					d="m 30.187389,64.496013 0.01312,-3.228737 5.026856,-5.026859 v 3.294364 z"
					id="path87"
				/><path
					style="opacity:1;fill:#b3def2;fill-opacity:1;fill-rule:evenodd;stroke-width:0.3;stroke-linecap:round;stroke-miterlimit:4.1;paint-order:stroke fill markers"
					d="m 6.1919833,68.076132 3.07613,-3.076131 H 17.75806 l -3.07613,3.076131 z"
					id="path88"
				/><path
					style="opacity:1;fill:#b3def2;fill-opacity:1;fill-rule:evenodd;stroke-width:0.3;stroke-linecap:round;stroke-miterlimit:4.1;paint-order:stroke fill markers"
					d="m 35.227365,56.240417 v -3.240415 l -5.039976,4.89327 v 3.368908 z"
					id="path89"
				/><path
					style="opacity:1;fill:#b3def2;fill-opacity:1;fill-rule:evenodd;stroke-width:0.3;stroke-linecap:round;stroke-miterlimit:4.1;paint-order:stroke fill markers"
					d="M 27.000001,60.000001 20,67.000003 v -2.83759 l 6.317865,-6.317867 h 0.682136 z"
					id="path90"
				/><path
					style="opacity:1;fill:#973c2e;fill-opacity:1;fill-rule:evenodd;stroke-width:0.3;stroke-linecap:round;stroke-miterlimit:4.1;paint-order:stroke fill markers"
					d="M 14.873549,60.932178 V 53.000002 H 21 v -4.085159 h 8.550651 L 30.834245,53.705286 23.5,58.161057 17.048454,61.647916 Z"
					id="path97"
				/><rect
					style="opacity:1;fill:#842320;fill-opacity:1;fill-rule:evenodd;stroke-width:0.3;stroke-linecap:round;stroke-miterlimit:4.1;paint-order:stroke fill markers"
					id="rect94"
					width="3.9515455"
					height="7.932178"
					x="17.048454"
					y="53.000004"
				/><rect
					style="opacity:1;fill:#842320;fill-opacity:1;fill-rule:evenodd;stroke-width:0.309849;stroke-linecap:round;stroke-miterlimit:4.1;paint-order:stroke fill markers"
					id="rect95"
					width="4.0970058"
					height="2.9097021"
					x="23.159309"
					y="53.090298"
				/><path
					style="opacity:1;fill:#4d1b06;fill-opacity:1;fill-rule:evenodd;stroke-width:0.3;stroke-linecap:round;stroke-miterlimit:4.1;paint-order:stroke fill markers"
					d="M 9.2681133,65.000001 3.4534726,59.185359 h 5.4452448 l 1.7468246,1.746825 h 6.895061 l 6.7471,-6.779051 h 4.315546 l 1.187934,-1.187937 h 3.703016 v -3.965194 l 1.733166,-0.007 v 4.006964 l -5.039976,4.89327 h -3.187388 v -0.04872 H 26.317865 L 20,64.162415 19.162409,65.000007 h -1.40435 z"
					id="path91"
				/><path
					style="opacity:1;fill:#434a55;fill-opacity:1;fill-rule:evenodd;stroke-width:0.3;stroke-linecap:round;stroke-miterlimit:4.1;paint-order:stroke fill markers"
					d="m 44.703587,57.000002 v -4 h -4.296752 l -3.999999,-4 h -1.179471 v 4 l 3.772636,4 z"
					id="path92"
				/><path
					style="opacity:1;fill:#973c2e;fill-opacity:1;fill-rule:evenodd;stroke-width:0.3;stroke-linecap:round;stroke-miterlimit:4.1;paint-order:stroke fill markers"
					d="M 11.318865,60.932178 H 10.645536 L 8.8987169,59.185359 H 3.4534726 v -6.185357 l 7.8653924,0.03963 z"
					id="path96"
				/><path
					style="opacity:1;fill:#842320;fill-opacity:1;fill-rule:evenodd;stroke-width:0.3;stroke-linecap:round;stroke-miterlimit:4.1;paint-order:stroke fill markers"
					d="m 3.4534726,59.185359 v -3.185358 h 2.1689232 v -2.999999 h 3.3320963 v 6.241132 z"
					id="path93"
				/><rect
					style="opacity:1;fill:#842320;fill-opacity:1;fill-rule:evenodd;stroke-width:0.3;stroke-linecap:round;stroke-miterlimit:4.1;paint-order:stroke fill markers"
					id="rect93"
					width="3.5546846"
					height="5.5422449"
					x="11.318865"
					y="55.389935"
				/><path
					style="opacity:1;fill:#dcfeff;fill-opacity:1;fill-rule:evenodd;stroke-width:0.3;stroke-linecap:round;stroke-miterlimit:4.1;paint-order:stroke fill markers"
					d="M 44.703587,53.000002 V 49.286913 L 41.558889,46.142216 H 20.673298 v -3.018279 l 3.715397,-3.540001 H 37 L 42.583936,34 h 7.075048 l 6.000001,-6.000001 H 42.333333 l -5.901627,5.901629 H 24.391685 L 17,41.293311 v 11.706691 h 4 v -4 l 2.159309,0.0306 V 53.0903 h 4.097005 v -4.090294 l 2.151687,-0.007 v 4.007001 l 4.086198,-0.03481 v -3.965194 h 2.912637 l 3.999999,4 z"
					id="path98"
				/><path
					style="opacity:1;fill:#000000;fill-opacity:1;fill-rule:evenodd;stroke-width:0.3;stroke-linecap:round;stroke-miterlimit:4.1;paint-order:stroke fill markers"
					d="m 24.388695,39.583936 -3.715397,3.540001 v 3.018279 h 8.45407 l 4.040682,-4.040682 v -2.517598 z"
					id="path99"
				/><circle
					style="opacity:1;fill:#fefe03;fill-opacity:1;fill-rule:evenodd;stroke-width:0.3;stroke-linecap:round;stroke-miterlimit:4.1;paint-order:stroke fill markers"
					id="path100"
					cx="24.508615"
					cy="45.000004"
					r="2"
				/><path
					style="opacity:1;fill:#842320;fill-opacity:1;fill-rule:evenodd;stroke-width:0.3;stroke-linecap:round;stroke-miterlimit:4.1;paint-order:stroke fill markers"
					d="M 29.127368,46.142216 33.16805,42.101534 V 39.583936 H 37 L 38.394915,42 34.958072,46.142216 Z"
					id="path101"
				/><path
					style="opacity:1;fill:#4d1b06;fill-opacity:1;fill-rule:evenodd;stroke-width:0.3;stroke-linecap:round;stroke-miterlimit:4.1;paint-order:stroke fill markers"
					d="M 34.958072,46.142216 38.394915,42 h 4.605086 l -2.354988,4.142216 z"
					id="path102"
				/><path
					style="opacity:1;fill:#424a56;fill-opacity:1;fill-rule:evenodd;stroke-width:0.3;stroke-linecap:round;stroke-miterlimit:4.1;paint-order:stroke fill markers"
					d="M 41.00001,40.251739 42.748271,42 H 38.394915 L 37,39.583939 42.583938,34 h 7.075046 l 5.792901,-5.792901 v 2.919778 L 50,36.578762 h -5.723633 v 1.286666 h -0.638308 z"
					id="path103"
				/><path
					style="opacity:1;fill:#302d34;fill-opacity:1;fill-rule:evenodd;stroke-width:0.3;stroke-linecap:round;stroke-miterlimit:4.1;paint-order:stroke fill markers"
					d="m 50,37.865428 v -1.286666 h -5.723633 v 1.286666 z"
					id="path104"
				/><path
					style="opacity:1;fill:#424a56;fill-opacity:1;fill-rule:evenodd;stroke-width:0.3;stroke-linecap:round;stroke-miterlimit:4.1;paint-order:stroke fill markers"
					d="m 11.318865,55.389933 v -2.350302 l -3.1825691,-3.18257 v -3.621124 l 6.7640651,6.764065 -0.01755,2.389931 z"
					id="path105"
				/><path
					style="opacity:1;fill:#424a56;fill-opacity:1;fill-rule:evenodd;stroke-width:0.3;stroke-linecap:round;stroke-miterlimit:4.1;paint-order:stroke fill markers"
					d="M 17,53.000002 V 41.293311 l 7.41682,-7.416821 h 10.583181 l 6.322523,-6.322523 h 4.475197 l 3.681476,-3.681476 v -2.217999 l -4.668473,4.668472 h -6.313849 l -5.929861,5.929858 h -4.752691 l 0.185676,-1.106403 9.709147,-9.709147 h 3.177247 l 4.604281,-4.604281 v -1.743473 l -4.402272,4.402271 H 36.413281 L 23,32.90507 v -5.905069 l 6.677217,-6.677217 V 17 l -8.384188,8 v 8.858398 l -4.354392,4.354393 V 22.31595 L 21,18.454687 v -2.61276 l -5.940786,5.940786 v 31.217289 z"
					id="path106"
				/><path
					style="opacity:1;fill:#424a56;fill-opacity:1;fill-rule:evenodd;stroke-width:0.3;stroke-linecap:round;stroke-miterlimit:4.1;paint-order:stroke fill markers"
					d="M 15.059214,43.937369 5.6554144,34.53357 v 2.930935 l 9.4037996,9.366744 z"
					id="path107"
				/><path
					style="opacity:1;fill:#b3def2;fill-opacity:1;fill-rule:evenodd;stroke-width:0.3;stroke-linecap:round;stroke-miterlimit:4.1;paint-order:stroke fill markers"
					d="M 15.059214,53.000002 V 46.831249 L 8,39.772034 l 0.1362959,6.463903 6.7640651,6.764065 z"
					id="path108"
				/><path
					style="opacity:1;fill:#dcfeff;fill-opacity:1;fill-rule:evenodd;stroke-width:0.3;stroke-linecap:round;stroke-miterlimit:4.1;paint-order:stroke fill markers"
					d="M 15.059214,43.937369 V 21.782713 L 21,15.841927 V 3 L 5.5337479,18.466252 5.6554144,34.53357 Z"
					id="path109"
				/><path
					style="opacity:1;fill:#dcfeff;fill-opacity:1;fill-rule:evenodd;stroke-width:0.3;stroke-linecap:round;stroke-miterlimit:4.1;paint-order:stroke fill markers"
					d="m 16.938637,38.212791 4.349088,-4.349088 V 25 l 8.389492,-8 v -6.254095 l -12.73858,12.73858 z"
					id="path110"
				/><path
					style="opacity:1;fill:#dcfeff;fill-opacity:1;fill-rule:evenodd;stroke-width:0.3;stroke-linecap:round;stroke-miterlimit:4.1;paint-order:stroke fill markers"
					d="M 45.490674,15.089518 H 36.144562 L 23,28.234081 V 32.90507 L 36.413281,19.491789 h 4.675121 z"
					id="path111"
				/><path
					style="opacity:1;fill:#dcfeff;fill-opacity:1;fill-rule:evenodd;stroke-width:0.3;stroke-linecap:round;stroke-miterlimit:4.1;paint-order:stroke fill markers"
					d="m 40.886393,21.437272 8.592804,0.04869 v 0.168528 l -4.668473,4.668472 H 38.496875 L 32.567014,32.25282 H 27.814323 L 38.627962,21.43727 Z"
					id="path112"
				/><path
					style="opacity:1;fill:#323037;fill-opacity:1;fill-rule:evenodd;stroke-width:0.3;stroke-linecap:round;stroke-miterlimit:4.1;paint-order:stroke fill markers"
					d="m 21,18.454687 v 0.968435 l -4.061363,4.061363 V 22.31595 Z"
					id="path113"
				/><path
					style="opacity:1;fill:#323037;fill-opacity:1;fill-rule:evenodd;stroke-width:0.3;stroke-linecap:round;stroke-miterlimit:4.1;paint-order:stroke fill markers"
					d="m 29.677217,20.322784 v 1.234079 L 23,28.234081 v -1.23408 z"
					id="path114"
				/><path
					style="opacity:1;fill:#323037;fill-opacity:1;fill-rule:evenodd;stroke-width:0.3;stroke-linecap:round;stroke-miterlimit:4.1;paint-order:stroke fill markers"
					d="m 27.814323,32.252819 0.185676,-1.1064 9.709147,-9.709147 0.918816,-2e-6 z"
					id="path115"
				/><path
					style="opacity:1;fill:#323037;fill-opacity:1;fill-rule:evenodd;stroke-width:0.3;stroke-linecap:round;stroke-miterlimit:4.1;paint-order:stroke fill markers"
					d="m 35.000001,33.87649 6.322523,-6.322523 h 4.475197 l -0.446032,0.446032 h -3.018356 l -5.901627,5.901629 z"
					id="path116"
				/></g
			></g
		><metadata id="metadata225"
			><rdf:RDF>
				<!-- svelte-ignore illegal-attribute-character -->
				<cc:License
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
				>
				<!-- svelte-ignore illegal-attribute-character -->
				<cc:Work rdf:about=""
					><cc:license
						rdf:resource="http://creativecommons.org/licenses/by-nc-sa/4.0/"
					/><dc:creator
						><cc:Agent><dc:title>Doriel Rivalet</dc:title></cc:Agent
						></dc:creator
					></cc:Work
				></rdf:RDF
			></metadata
		></svg
	>
</div>
