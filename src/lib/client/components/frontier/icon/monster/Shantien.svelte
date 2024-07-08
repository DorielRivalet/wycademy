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
				id="filter212"
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
					id="feComposite211"
				/><feColorMatrix
					in="composite1"
					values="1"
					type="saturate"
					result="colormatrix1"
					id="feColorMatrix211"
				/><feFlood
					flood-opacity="1"
					flood-color="rgb(0,0,0)"
					result="flood1"
					id="feFlood211"
				/><feBlend
					in="flood1"
					in2="colormatrix1"
					mode="multiply"
					result="blend1"
					id="feBlend211"
				/><feBlend
					in2="blend1"
					mode="screen"
					result="blend2"
					id="feBlend212"
				/><feColorMatrix
					in="blend2"
					values="1"
					type="saturate"
					result="colormatrix2"
					id="feColorMatrix212"
				/><feComposite
					in="colormatrix2"
					in2="SourceGraphic"
					operator="in"
					k2="1"
					result="composite2"
					id="feComposite212"
				/></filter
			></defs
		><g id="layer1"
			><g
				id="g211"
				style="filter:url(#filter212)"
				transform="translate(1.0583333,1.5875)"
				><path
					style="opacity:1;fill:#0fb57c;fill-opacity:1;fill-rule:evenodd;stroke-width:0.3;stroke-linecap:round;stroke-miterlimit:4.1;paint-order:stroke fill markers"
					d="m 98.63157,98.080472 h 5.22603 l 2.35349,-2.353496 V 78.25052 L 76.233072,19 H 80 V 9.5249999 L 76.66302,5.7546874 h 3.819922 l 8.517059,8.5658856 V 5.6885416 l 8.937437,8.7312494 V 9.0000001 L 101.18659,12 101.1565,6.6299547 106,11.525911 V 5.8539062 l 2.84362,2.843618 V 5.7216145 l 6.2584,5.9944665 L 112,14.163476 109.63672,11.600325 109.56844,21.716937 102.28133,46.151424 110,75 l -1,22.357125 -3.80351,3.803515 h -3.48475 z"
					id="path108"
				/><path
					style="opacity:1;fill:#431806;fill-opacity:1;fill-rule:evenodd;stroke-width:0.3;stroke-linecap:round;stroke-miterlimit:4.1;paint-order:stroke fill markers"
					d="m 22,121 h 5.365523 v -5.25105 h -5.131855 c -1.279795,0.65686 -2.618315,1.24445 -3.084364,2.86124 z"
					id="path109"
				/><path
					style="opacity:1;fill:#9f3207;fill-opacity:1;fill-rule:evenodd;stroke-width:0.3;stroke-linecap:round;stroke-miterlimit:4.1;paint-order:stroke fill markers"
					d="m 18,124 c 0.878671,-1.6962 2.00928,-3.00662 4,-3 v -2.38981 H 19.149304 C 18.210857,120.33947 18.07969,122.16661 18,124 Z"
					id="path110"
				/><path
					style="opacity:1;fill:#431806;fill-opacity:1;fill-rule:evenodd;stroke-width:0.3;stroke-linecap:round;stroke-miterlimit:4.1;paint-order:stroke fill markers"
					d="M 62.886311,121.10441 H 67 v -5.35499 h -3.491881 c -1.277912,0.39477 -2.059107,1.50902 -2.709976,2.81206 z"
					id="path111"
				/><path
					style="opacity:1;fill:#9f3207;fill-opacity:1;fill-rule:evenodd;stroke-width:0.3;stroke-linecap:round;stroke-miterlimit:4.1;paint-order:stroke fill markers"
					d="m 60.000001,124.16705 c 0.70779,-1.29143 1.084312,-2.93526 2.88631,-3.06264 v -2.54293 h -2.088168 c -0.592701,1.79013 -0.823745,3.66705 -0.798142,5.60557 z"
					id="path112"
				/><path
					style="opacity:1;fill:#b2aca7;fill-opacity:1;fill-rule:evenodd;stroke-width:0.3;stroke-linecap:round;stroke-miterlimit:4.1;paint-order:stroke fill markers"
					d="m 29.447797,121 v -7.76566 H 42.264501 V 109 l -2.35731,-2.12297 V 93.512761 l 2.454756,-2.454757 h 6.18725 l 2.521445,2.521445 v 10.317671 h -2.744571 v 3.16967 h 2.585617 v 8.27529 L 45.253761,121 Z"
					id="path113"
				/><path
					style="opacity:1;fill:#978d86;fill-opacity:1;fill-rule:evenodd;stroke-width:0.3;stroke-linecap:round;stroke-miterlimit:4.1;paint-order:stroke fill markers"
					d="M 34.106728,118.77494 H 38.13457 V 115 Z"
					id="path114"
				/><path
					style="opacity:1;fill:#978d86;fill-opacity:1;fill-rule:evenodd;stroke-width:0.3;stroke-linecap:round;stroke-miterlimit:4.1;paint-order:stroke fill markers"
					d="m 43.487966,109.57807 h 4.027842 v -3.77494 z"
					id="path115"
				/><path
					style="opacity:1;fill:#978d86;fill-opacity:1;fill-rule:evenodd;stroke-width:0.3;stroke-linecap:round;stroke-miterlimit:4.1;paint-order:stroke fill markers"
					d="m 41.204903,100.27877 h 4.027842 v -3.774944 z"
					id="path116"
				/><path
					style="opacity:1;fill:#0462f7;fill-opacity:1;fill-rule:evenodd;stroke-width:0.3;stroke-linecap:round;stroke-miterlimit:4.1;paint-order:stroke fill markers"
					d="m 47.777262,121.09513 1.22274,-1.22274 h 3.334104 l 3.973317,-3.97332 v -3.07309 h 3.033644 v 2.96984 l -5.424594,5.4246 z"
					id="path117"
				/><path
					style="opacity:1;fill:#d9feff;fill-opacity:1;fill-rule:evenodd;stroke-width:0.3;stroke-linecap:round;stroke-miterlimit:4.1;paint-order:stroke fill markers"
					d="m 49.000002,119.87239 h 3.334104 l 3.982599,-3.9826 v -3.06381 H 53.011601 V 116 Z"
					id="path118"
				/><path
					style="opacity:1;fill:#0462f7;fill-opacity:1;fill-rule:evenodd;stroke-width:0.3;stroke-linecap:round;stroke-miterlimit:4.1;paint-order:stroke fill markers"
					d="m 53.000001,110.24659 1e-6,-2.24659 h 3.538281 l 2.524363,-2.52436 v -4.84455 h -6.062644 v -2.032482 h 10.424591 v 5.651972 l -5.987846,5.98785 z"
					id="path119"
				/><path
					style="opacity:1;fill:#d9feff;fill-opacity:1;fill-rule:evenodd;stroke-width:0.3;stroke-linecap:round;stroke-miterlimit:4.1;paint-order:stroke fill markers"
					d="M 53.000002,100.63109 V 108 h 3.538281 l 2.524363,-2.52436 v -4.84455 z"
					id="path120"
				/><path
					style="opacity:1;fill:#6a5c52;fill-opacity:1;fill-rule:evenodd;stroke-width:0.3;stroke-linecap:round;stroke-miterlimit:4.1;paint-order:stroke fill markers"
					d="m 59.480277,111 6.218097,-6.5774 h 7.61949 v 8.28274 H 62.292343 Z"
					id="path121"
				/><path
					style="opacity:1;fill:#b2aca7;fill-opacity:1;fill-rule:evenodd;stroke-width:0.3;stroke-linecap:round;stroke-miterlimit:4.1;paint-order:stroke fill markers"
					d="m 69.466356,121 v -4.74014 H 77.16159 V 112 h -1.666867 v -7.70913 l 3.149989,-3.14999 h 4.449358 l 2.986934,2.98693 v 5.68193 h -2.962675 v 3.08121 h 2.886311 v 8.23202 z"
					id="path122"
				/><path
					style="opacity:1;fill:#978d86;fill-opacity:1;fill-rule:evenodd;stroke-width:0.3;stroke-linecap:round;stroke-miterlimit:4.1;paint-order:stroke fill markers"
					d="m 75.986081,109 h 4.027842 v -3.77494 z"
					id="path123"
				/><path
					style="opacity:1;fill:#978d86;fill-opacity:1;fill-rule:evenodd;stroke-width:0.3;stroke-linecap:round;stroke-miterlimit:4.1;paint-order:stroke fill markers"
					d="m 78.361951,118 h 4.027842 v -3.77494 z"
					id="path124"
				/><path
					style="opacity:1;fill:#36deca;fill-opacity:1;fill-rule:evenodd;stroke-width:0.3;stroke-linecap:round;stroke-miterlimit:4.1;paint-order:stroke fill markers"
					d="M 12,59.337908 15.316819,56.161669 7.7305965,48.627945 V 44.999999 L 4.821153,46.679768 v 5.452541 z"
					id="path125"
				/><path
					style="opacity:1;fill:#389daa;fill-opacity:1;fill-rule:evenodd;stroke-width:0.3;stroke-linecap:round;stroke-miterlimit:4.1;paint-order:stroke fill markers"
					d="m 15.316819,56.161669 1.824368,-1.811244 V 49.572944 L 13.295576,46 V 35.266746 l -5.5781044,5.578104 0.013126,4.155149 v 3.627946 z"
					id="path126"
				/><path
					style="opacity:1;fill:#94cee7;fill-opacity:1;fill-rule:evenodd;stroke-width:0.3;stroke-linecap:round;stroke-miterlimit:4.1;paint-order:stroke fill markers"
					d="M 4.821153,46.679768 V 35.712995 l 8.463446,-8.463447 v 8.028176 l -5.5671274,5.567126 0.013126,4.155149 z"
					id="path127"
				/><path
					style="opacity:1;fill:#d7feff;fill-opacity:1;fill-rule:evenodd;stroke-width:0.3;stroke-linecap:round;stroke-miterlimit:4.1;paint-order:stroke fill markers"
					d="M 4.821153,35.712995 V 31.51301 l 8.463446,-8.806844 v 4.543382 z"
					id="path128"
				/><path
					style="opacity:1;fill:#36deca;fill-opacity:1;fill-rule:evenodd;stroke-width:0.3;stroke-linecap:round;stroke-miterlimit:4.1;paint-order:stroke fill markers"
					d="M 18.867749,45.828307 23,41.698375 l -4.271462,-4.2413 v -4.631089 h -2.292343 v 10.496518 z"
					id="path129"
				/><path
					style="opacity:1;fill:#389daa;fill-opacity:1;fill-rule:evenodd;stroke-width:0.3;stroke-linecap:round;stroke-miterlimit:4.1;paint-order:stroke fill markers"
					d="M 23,41.698375 27.638052,37 25.187935,34.663573 V 19.350348 l -6.396906,6.396905 -0.06249,7.078733 v 4.631089 z"
					id="path130"
				/><path
					style="opacity:1;fill:#94cee7;fill-opacity:1;fill-rule:evenodd;stroke-width:0.3;stroke-linecap:round;stroke-miterlimit:4.1;paint-order:stroke fill markers"
					d="m 16.436195,32.825986 0.06187,-10.11982 11.084301,-11.021711 V 17 l -2.39443,2.350348 -6.396906,6.396905 -0.06249,7.078733 z"
					id="path131"
				/><path
					style="opacity:1;fill:#d7feff;fill-opacity:1;fill-rule:evenodd;stroke-width:0.3;stroke-linecap:round;stroke-miterlimit:4.1;paint-order:stroke fill markers"
					d="M 16.498065,22.706166 V 17.469311 L 27.582365,6.0000001 V 11.684455 Z"
					id="path132"
				/><path
					style="opacity:1;fill:#0fb57c;fill-opacity:1;fill-rule:evenodd;stroke-width:0.3;stroke-linecap:round;stroke-miterlimit:4.1;paint-order:stroke fill markers"
					d="m 88.80078,93.095431 3.834043,-3.834046 h 7.679787 l -4.749027,4.749022 v 2.258404 z"
					id="path133"
				/><path
					style="opacity:1;fill:#6a5c52;fill-opacity:1;fill-rule:evenodd;stroke-width:0.3;stroke-linecap:round;stroke-miterlimit:4.1;paint-order:stroke fill markers"
					d="M 109.63672,11.600325 112,14.163476 V 45.602863 L 115.74942,50 118,63 v 29.268534 9.430686 l -2.89798,2.72024 v 5.16765 l -8.93723,8.93723 H 90.272525 c -1.833095,-0.20312 -2.73781,-1.28305 -2.984468,-2.98447 V 107 l 28.007763,-5.94443 -5.72738,-42.698261 z"
					id="path134"
				/><path
					style="opacity:1;fill:#0462f7;fill-opacity:1;fill-rule:evenodd;stroke-width:0.3;stroke-linecap:round;stroke-miterlimit:4.1;paint-order:stroke fill markers"
					d="m 115.10202,109.58711 v -5.16765 L 118,101.69922 v -9.430686 l 3.26854,-3.268533 V 62.253754 L 118.18607,60.00869 V 9.2356119 l 6.06419,-4.5350091 V 100.53677 Z"
					id="path135"
				/><path
					style="opacity:1;fill:#a43a0b;fill-opacity:1;fill-rule:evenodd;stroke-width:0.3;stroke-linecap:round;stroke-miterlimit:4.1;paint-order:stroke fill markers"
					d="m 115.10202,97.011132 v 2.599637 c 6.10292,-4.619377 5.12007,-6.708125 6.41614,-9.61077 z"
					id="path136"
				/><path
					style="opacity:1;fill:#5a2008;fill-opacity:1;fill-rule:evenodd;stroke-width:0.3;stroke-linecap:round;stroke-miterlimit:4.1;paint-order:stroke fill markers"
					d="m 115.10202,94.91927 c 2.60928,-1.326047 4.30462,-3.261385 6.41614,-4.919269 -1.60996,2.885022 -3.14039,5.852466 -6.41614,7.011131 z"
					id="path137"
				/><path
					style="opacity:1;fill:#d9feff;fill-opacity:1;fill-rule:evenodd;stroke-width:0.3;stroke-linecap:round;stroke-miterlimit:4.1;paint-order:stroke fill markers"
					d="m 112,14.163476 6.18607,-4.9278641 V 60.00869 l 1.46883,0.678196 1.61364,1.566868 V 89.000001 L 118,92.268534 V 63 l -2.25058,-2.815915 V 50 L 114.87915,49.497554 112,45.602863 Z"
					id="path138"
				/><path
					style="opacity:1;fill:#a43a0b;fill-opacity:1;fill-rule:evenodd;stroke-width:0.3;stroke-linecap:round;stroke-miterlimit:4.1;paint-order:stroke fill markers"
					d="m 115.10202,88.486585 6.48229,-7.143747 c -0.89466,2.859483 -1.07254,5.552827 -6.48229,9.458854 z"
					id="path139"
				/><path
					style="opacity:1;fill:#5a2008;fill-opacity:1;fill-rule:evenodd;stroke-width:0.3;stroke-linecap:round;stroke-miterlimit:4.1;paint-order:stroke fill markers"
					d="m 115.10202,86.369921 c 2.53644,-1.365356 4.41669,-3.272772 6.48229,-5.027083 -1.5492,2.778767 -3.20196,5.49022 -6.48229,7.143749 z"
					id="path140"
				/><path
					style="opacity:1;fill:#b2aca7;fill-opacity:1;fill-rule:evenodd;stroke-width:0.3;stroke-linecap:round;stroke-miterlimit:4.1;paint-order:stroke fill markers"
					d="m 52.999999,96.763706 v -3.478111 l 3.277235,-3.277235 h 12.975667 l 5.346964,3.087073 h 19.046666 l 8.065209,8.065207 h 3.48475 L 109,97.357127 V 76.556843 L 83.000002,23.13929 V 13.269326 L 91.591378,21.860704 91.769662,16 101,25.113689 V 13 l 8.56844,8.716937 v 36.640372 l 2.6427,2.642693 v 7.635729 l 3.08468,3.084684 v 29.335155 l -10.12709,10.12708 H 91.480914 L 87.298259,107 v -3.83788 l -3.473651,-3.473651 h -7.22739 l -3.076183,3.076181 h -8.521034 v -6.003629 z"
					id="path141"
				/><path
					style="opacity:1;fill:#978d86;fill-opacity:1;fill-rule:evenodd;stroke-width:0.3;stroke-linecap:round;stroke-miterlimit:4.1;paint-order:stroke fill markers"
					d="M 65.000001,96.761021 V 90.00836 h -2.590855 c 0,0 -3.409146,3.409143 -3.409146,3.409143 l 3.344111,3.344111 z"
					id="path142"
				/><path
					style="opacity:1;fill:#978d86;fill-opacity:1;fill-rule:evenodd;stroke-width:0.3;stroke-linecap:round;stroke-miterlimit:4.1;paint-order:stroke fill markers"
					d="m 75.792263,100.49342 0.794059,-0.794058 h 1.41368 v -6.603931 h -2.780903 l -3.346789,3.346788 z"
					id="path143"
				/><path
					style="opacity:1;fill:#978d86;fill-opacity:1;fill-rule:evenodd;stroke-width:0.3;stroke-linecap:round;stroke-miterlimit:4.1;paint-order:stroke fill markers"
					d="m 86.917256,102.78112 8.207481,-8.207484 -1.478208,-1.478205 h -0.672053 l -3.206345,3.206345 h -3.768129 v 5.562084 z"
					id="path144"
				/><path
					style="opacity:1;fill:#978d86;fill-opacity:1;fill-rule:evenodd;stroke-width:0.3;stroke-linecap:round;stroke-miterlimit:4.1;paint-order:stroke fill markers"
					d="m 98.205942,97.654844 1.986078,1.986079 v 11.541727 h -3.192019 l -2.383669,-2.38367 3.383669,-3.38367 z"
					id="path145"
				/><path
					style="opacity:1;fill:#978d86;fill-opacity:1;fill-rule:evenodd;stroke-width:0.3;stroke-linecap:round;stroke-miterlimit:4.1;paint-order:stroke fill markers"
					d="M 108.32009,98.037032 113.28306,103 l -1.7355,1.7355 -4.96296,-4.96297 z"
					id="path146"
				/><path
					style="opacity:1;fill:#978d86;fill-opacity:1;fill-rule:evenodd;stroke-width:0.3;stroke-linecap:round;stroke-miterlimit:4.1;paint-order:stroke fill markers"
					d="M 115.29582,93.528405 V 87.333427 H 109 v 2.06062 h 2.12897 z"
					id="path147"
				/><path
					style="opacity:1;fill:#a43a0b;fill-opacity:1;fill-rule:evenodd;stroke-width:0.3;stroke-linecap:round;stroke-miterlimit:4.1;paint-order:stroke fill markers"
					d="m 115.10202,78.666408 v 2.600232 c 6.22254,-4.844498 5.5834,-6.931026 6.55238,-9.599988 z"
					id="path148"
				/><path
					style="opacity:1;fill:#5a2008;fill-opacity:1;fill-rule:evenodd;stroke-width:0.3;stroke-linecap:round;stroke-miterlimit:4.1;paint-order:stroke fill markers"
					d="m 121.6544,71.666652 c -1.73147,3.358181 -3.88106,6.159727 -6.55238,6.999758 v -2.116909 c 2.14854,-1.205243 4.44447,-3.078356 6.55238,-4.882849 z"
					id="path149"
				/><path
					style="opacity:1;fill:#978d86;fill-opacity:1;fill-rule:evenodd;stroke-width:0.3;stroke-linecap:round;stroke-miterlimit:4.1;paint-order:stroke fill markers"
					d="M 115.29582,82.332821 V 75 h -7.05358 L 109,76.556843 v 1.287245 h 1.56459 z"
					id="path150"
				/><path
					style="opacity:1;fill:#978d86;fill-opacity:1;fill-rule:evenodd;stroke-width:0.3;stroke-linecap:round;stroke-miterlimit:4.1;paint-order:stroke fill markers"
					d="m 112.21114,68.635731 -0.74397,0.429527 -3.20185,-3.201847 h -4.47015 l -0.99061,-2.035223 h 9.40658 z"
					id="path151"
				/><path
					style="opacity:1;fill:#978d86;fill-opacity:1;fill-rule:evenodd;stroke-width:0.3;stroke-linecap:round;stroke-miterlimit:4.1;paint-order:stroke fill markers"
					d="M 109.56844,54.663572 V 52.000001 H 97.047414 l 1.324488,2.721187 H 103 l 2.85634,2.856341 2.96964,-2.969641 z"
					id="path152"
				/><path
					style="opacity:1;fill:#978d86;fill-opacity:1;fill-rule:evenodd;stroke-width:0.3;stroke-linecap:round;stroke-miterlimit:4.1;paint-order:stroke fill markers"
					d="m 92.717116,43.103313 -0.974696,-2.002538 17.82602,-0.0036 v 1.902844 h -4.1357 l -3.15141,3.151404 -3.237249,-3.01413 z"
					id="path153"
				/><path
					style="opacity:1;fill:#978d86;fill-opacity:1;fill-rule:evenodd;stroke-width:0.3;stroke-linecap:round;stroke-miterlimit:4.1;paint-order:stroke fill markers"
					d="m 85.865071,29.025636 1.089002,2.237382 3.634343,3.518104 4.114673,-4.114673 h 0.570937 l 4.124515,4.124518 3.940769,-3.940768 h 0.99093 l 3.85545,3.855456 1.38275,-1.382745 V 29 Z"
					id="path154"
				/><path
					style="opacity:1;fill:#978d86;fill-opacity:1;fill-rule:evenodd;stroke-width:0.3;stroke-linecap:round;stroke-miterlimit:4.1;paint-order:stroke fill markers"
					d="m 83.000002,17 h 3.730673 L 90.192483,20.461809 87.749419,23 83,18.204308 Z"
					id="path155"
				/><path
					style="opacity:1;fill:#978d86;fill-opacity:1;fill-rule:evenodd;stroke-width:0.3;stroke-linecap:round;stroke-miterlimit:4.1;paint-order:stroke fill markers"
					d="m 91.733266,17.196442 1.179232,-0.06805 5.024942,4.96144 -1.538369,1.483252 -4.718553,-4.642734 z"
					id="path156"
				/><path
					style="opacity:1;fill:#978d86;fill-opacity:1;fill-rule:evenodd;stroke-width:0.3;stroke-linecap:round;stroke-miterlimit:4.1;paint-order:stroke fill markers"
					d="m 100.99304,17 3.94091,0.0021 3.26828,3.32492 L 105.40649,23 101.86275,19.267429 101,19.146172 Z"
					id="path157"
				/><path
					style="opacity:1;fill:#0fb57c;fill-opacity:1;fill-rule:evenodd;stroke-width:0.3;stroke-linecap:round;stroke-miterlimit:4.1;paint-order:stroke fill markers"
					d="m 75,93.000001 v -1.396712 l 5.074364,-5.074364 h -8.074363 l -3.479435,3.479435 h 0.732335 l 5.346967,3.087071 H 75 Z"
					id="path158"
				/><path
					style="opacity:1;fill:#0fb57c;fill-opacity:1;fill-rule:evenodd;stroke-width:0.3;stroke-linecap:round;stroke-miterlimit:4.1;paint-order:stroke fill markers"
					d="m 77.225259,93.095431 6.595632,-6.595634 h 7.146165 l -4.967054,4.967054 v 1.62858 z"
					id="path159"
				/><path
					style="opacity:1;fill:#a0d3ea;fill-opacity:1;fill-rule:evenodd;stroke-width:0.3;stroke-linecap:round;stroke-miterlimit:4.1;paint-order:stroke fill markers"
					d="M 76.233072,19 69.550213,5.6885416 76.66302,5.7546874 79.999998,9.5249999 80,19 Z"
					id="path160"
				/><path
					style="opacity:1;fill:#a0d3ea;fill-opacity:1;fill-rule:evenodd;stroke-width:0.3;stroke-linecap:round;stroke-miterlimit:4.1;paint-order:stroke fill markers"
					d="M 89.000001,14.320573 V 5.6885416 h -2.999999 v 5.6148344 z"
					id="path161"
				/><path
					style="opacity:1;fill:#a0d3ea;fill-opacity:1;fill-rule:evenodd;stroke-width:0.3;stroke-linecap:round;stroke-miterlimit:4.1;paint-order:stroke fill markers"
					d="M 97.937438,8.9999999 V 5.8932931 h 2.406402 L 101.1565,6.6299547 101.18659,12 Z"
					id="path162"
				/><path
					style="opacity:1;fill:#a0d3ea;fill-opacity:1;fill-rule:evenodd;stroke-width:0.3;stroke-linecap:round;stroke-miterlimit:4.1;paint-order:stroke fill markers"
					d="m 106,5.8539062 2.84362,-0.1322917 V 8.697524 Z"
					id="path163"
				/><path
					style="opacity:1;fill:#6a5c52;fill-opacity:1;fill-rule:evenodd;stroke-width:0.3;stroke-linecap:round;stroke-miterlimit:4.1;paint-order:stroke fill markers"
					d="m 109.63672,11.600325 -0.0683,10.116612 v 36.640372 l 1.077,-0.77978 0.0271,-44.85383 z"
					id="path164"
				/><path
					style="opacity:1;fill:#6b5d53;fill-opacity:1;fill-rule:evenodd;stroke-width:0.3;stroke-linecap:round;stroke-miterlimit:4.1;paint-order:stroke fill markers"
					d="M 54.471093,78.25052 H 70.164192 L 73.414709,75 l -2.221627,-5.414584 3.105224,-3.422203 -5.035351,-5.163211 3.050976,-3.09766 -4.31393,-4.90234 -8,4.999998 -2.999999,8.163213 L 54.471093,75 Z"
					id="path165"
				/><path
					style="opacity:1;fill:#b2aca7;fill-opacity:1;fill-rule:evenodd;stroke-width:0.3;stroke-linecap:round;stroke-miterlimit:4.1;paint-order:stroke fill markers"
					d="M 40.000002,89.000001 V 82.447637 L 51.194456,71.25318 V 62.788932 L 65.08629,48.897098 h 12.321646 l -9.005245,9.005244 h -8.40269 v 3.09766 H 67 l -5.163211,5.163211 h -4.836787 v 3.422203 h 4.499086 L 56.084501,75 h -1.613408 v 3.25052 h 5.655469 L 49.291046,89.086033 Z"
					id="path166"
				/><path
					style="opacity:1;fill:#978d86;fill-opacity:1;fill-rule:evenodd;stroke-width:0.3;stroke-linecap:round;stroke-miterlimit:4.1;paint-order:stroke fill markers"
					d="M 49.291046,89.086033 60.126559,78.25052 h 3.873442 L 53.153055,89.097465 Z"
					id="path167"
				/><path
					style="opacity:1;fill:#b2aca7;fill-opacity:1;fill-rule:evenodd;stroke-width:0.3;stroke-linecap:round;stroke-miterlimit:4.1;paint-order:stroke fill markers"
					d="m 64.000001,78.25052 h 10.192348 l -5.69417,5.694169 h -6.02344 l -3.055313,3.055313 h -4.16891 z"
					id="path168"
				/><path
					style="opacity:1;fill:#0fb57c;fill-opacity:1;fill-rule:evenodd;stroke-width:0.3;stroke-linecap:round;stroke-miterlimit:4.1;paint-order:stroke fill markers"
					d="m 68.498179,83.944689 5.694167,-5.694169 h 3.21559 L 71.713425,84 Z"
					id="path169"
				/><path
					style="opacity:1;fill:#abd9ec;fill-opacity:1;fill-rule:evenodd;stroke-width:0.3;stroke-linecap:round;stroke-miterlimit:4.1;paint-order:stroke fill markers"
					d="m 71.713425,83.999998 5.694511,-5.749478 h 5.413877 l -5.65495,5.65495 z"
					id="path170"
				/><path
					style="opacity:1;fill:#978d86;fill-opacity:1;fill-rule:evenodd;stroke-width:0.3;stroke-linecap:round;stroke-miterlimit:4.1;paint-order:stroke fill markers"
					d="m 61.499088,69.585416 h 3.61946 L 59.703964,75 h -3.703963 z"
					id="path171"
				/><path
					style="opacity:1;fill:#978d86;fill-opacity:1;fill-rule:evenodd;stroke-width:0.3;stroke-linecap:round;stroke-miterlimit:4.1;paint-order:stroke fill markers"
					d="m 61.836789,66.163213 h 3.655938 l 5.163211,-5.163211 H 67 Z"
					id="path172"
				/><path
					style="opacity:1;fill:#0fb57c;fill-opacity:1;fill-rule:evenodd;stroke-width:0.3;stroke-linecap:round;stroke-miterlimit:4.1;paint-order:stroke fill markers"
					d="m 68.402691,57.902342 h 3.191904 l 8.902341,-8.90234 -3.089,-0.102904 z"
					id="path173"
				/><path
					style="opacity:1;fill:#abd9ec;fill-opacity:1;fill-rule:evenodd;stroke-width:0.3;stroke-linecap:round;stroke-miterlimit:4.1;paint-order:stroke fill markers"
					d="m 71.594593,57.902342 h 7.20163 l 8.78496,-8.78496 c 0,0 -7.084247,-0.11738 -7.084247,-0.11738 z"
					id="path174"
				/><path
					style="opacity:1;fill:#b2aca7;fill-opacity:1;fill-rule:evenodd;stroke-width:0.3;stroke-linecap:round;stroke-miterlimit:4.1;paint-order:stroke fill markers"
					d="m 59.703964,75 5.414584,-5.414584 H 77.267619 L 71.853033,75 Z"
					id="path175"
				/><path
					style="opacity:1;fill:#b2aca7;fill-opacity:1;fill-rule:evenodd;stroke-width:0.3;stroke-linecap:round;stroke-miterlimit:4.1;paint-order:stroke fill markers"
					d="m 65.492727,66.163213 h 8.805579 l 5.163212,-5.163211 -8.805582,0.0071 z"
					id="path176"
				/><path
					style="opacity:1;fill:#0fb57c;fill-opacity:1;fill-rule:evenodd;stroke-width:0.3;stroke-linecap:round;stroke-miterlimit:4.1;paint-order:stroke fill markers"
					d="m 71.853033,75 5.414586,-5.414584 h 3.110349 L 75,74.963382 Z"
					id="path177"
				/><path
					style="opacity:1;fill:#0fb57c;fill-opacity:1;fill-rule:evenodd;stroke-width:0.3;stroke-linecap:round;stroke-miterlimit:4.1;paint-order:stroke fill markers"
					d="m 74.298306,66.163213 5.163212,-5.163211 h 3.538484 l -5.118401,5.118399 z"
					id="path178"
				/><path
					style="opacity:1;fill:#abd9ec;fill-opacity:1;fill-rule:evenodd;stroke-width:0.3;stroke-linecap:round;stroke-miterlimit:4.1;paint-order:stroke fill markers"
					d="m 77.881601,66.118401 5.118401,-5.118399 h 8.479684 l -5.136067,5.136065 z"
					id="path179"
				/><path
					style="opacity:1;fill:#abd9ec;fill-opacity:1;fill-rule:evenodd;stroke-width:0.3;stroke-linecap:round;stroke-miterlimit:4.1;paint-order:stroke fill markers"
					d="m 80.377968,69.585416 h 5.741284 L 80.704665,75 75,74.963382 Z"
					id="path180"
				/><path
					style="opacity:1;fill:#6a5c52;fill-opacity:1;fill-rule:evenodd;stroke-width:0.3;stroke-linecap:round;stroke-miterlimit:4.1;paint-order:stroke fill markers"
					d="m 38,105.71679 v 2.63008 L 28.256283,98.603156 V 84 L 42.236808,70.019475 V 44.999999 h -2.889724 v 8.511979 H 30 v -2.265494 h 2.366339 V 37.587369 l 10.633659,4.028353 2.38428,2.384279 V 69.26958 L 30.736952,83.916905 v 14.723068 z"
					id="path181"
				/><path
					style="opacity:1;fill:#b2aca7;fill-opacity:1;fill-rule:evenodd;stroke-width:0.3;stroke-linecap:round;stroke-miterlimit:4.1;paint-order:stroke fill markers"
					d="M 38,105.71679 V 81.746055 L 49.122467,70.836445 V 62.226692 L 53.000002,58.34916 V 45.690234 L 44.999999,37.587369 H 32.345312 l 0.02103,1.739776 2.28007,2.288577 h 8.35359 l 2.384279,2.384279 V 69.26958 L 30.736952,83.916905 v 14.723068 z"
					id="path182"
				/><path
					style="opacity:1;fill:#978d86;fill-opacity:1;fill-rule:evenodd;stroke-width:0.3;stroke-linecap:round;stroke-miterlimit:4.1;paint-order:stroke fill markers"
					d="M 30.736952,98.639973 H 38 v -5.853906 h -7.263048 z"
					id="path183"
				/><path
					style="opacity:1;fill:#978d86;fill-opacity:1;fill-rule:evenodd;stroke-width:0.3;stroke-linecap:round;stroke-miterlimit:4.1;paint-order:stroke fill markers"
					d="m 30.736952,86.610358 v -2.693453 l 2.964186,-2.964188 h 5.107675 L 38,81.761533 v 4.86052 z"
					id="path184"
				/><path
					style="opacity:1;fill:#978d86;fill-opacity:1;fill-rule:evenodd;stroke-width:0.3;stroke-linecap:round;stroke-miterlimit:4.1;paint-order:stroke fill markers"
					d="m 39.670434,74.983421 5.713844,-5.713841 v -0.105844 l 3.738189,5.29e-4 v 1.672103 l -4.219064,4.138319 z"
					id="path185"
				/><path
					style="opacity:1;fill:#978d86;fill-opacity:1;fill-rule:evenodd;stroke-width:0.3;stroke-linecap:round;stroke-miterlimit:4.1;paint-order:stroke fill markers"
					d="m 49.064002,63.999998 0.05846,-1.773306 3.877535,-3.877532 v -0.702464 h -7.615724 v 6.353305 z"
					id="path186"
				/><path
					style="opacity:1;fill:#978d86;fill-opacity:1;fill-rule:evenodd;stroke-width:0.3;stroke-linecap:round;stroke-miterlimit:4.1;paint-order:stroke fill markers"
					d="m 53.000002,52.019697 h -7.615724 v -5.701078 h 7.615724 z"
					id="path187"
				/><path
					style="opacity:1;fill:#978d86;fill-opacity:1;fill-rule:evenodd;stroke-width:0.3;stroke-linecap:round;stroke-miterlimit:4.1;paint-order:stroke fill markers"
					d="m 42.999998,41.615722 2.750235,-3.268472 -0.750234,-0.759881 h -5.804923 l -3.905475,4.028353 z"
					id="path188"
				/><path
					style="opacity:1;fill:#36deca;fill-opacity:1;fill-rule:evenodd;stroke-width:0.3;stroke-linecap:round;stroke-miterlimit:4.1;paint-order:stroke fill markers"
					d="m 32.366341,39.327145 9.870467,9.753063 -2.889724,2.81533 -7.015824,-6.895539 z"
					id="path189"
				/><path
					style="opacity:1;fill:#36deca;fill-opacity:1;fill-rule:evenodd;stroke-width:0.3;stroke-linecap:round;stroke-miterlimit:4.1;paint-order:stroke fill markers"
					d="m 36.000002,69.538518 v -5.296947 h 3.873269 v 5.285255 z"
					id="path190"
				/><path
					style="opacity:1;fill:#36deca;fill-opacity:1;fill-rule:evenodd;stroke-width:0.3;stroke-linecap:round;stroke-miterlimit:4.1;paint-order:stroke fill markers"
					d="m 42.236808,60.93244 v -5.589275 h -2.632475 l -2.784054,2.432153 2.760668,3.224684 h 2.655861 z"
					id="path191"
				/><path
					style="opacity:1;fill:#b2aca7;fill-opacity:1;fill-rule:evenodd;stroke-width:0.3;stroke-linecap:round;stroke-miterlimit:4.1;paint-order:stroke fill markers"
					d="m 30,53.511978 h 4.461979 L 32.91582,55.058137 H 30 Z"
					id="path192"
				/><path
					style="opacity:1;fill:#d9feff;fill-opacity:1;fill-rule:evenodd;stroke-width:0.3;stroke-linecap:round;stroke-miterlimit:4.1;paint-order:stroke fill markers"
					d="m 34.346224,35.000001 -3.501888,-3.50189 V 24 l 5.850065,-4 h 4.349088 v 3 l -1.043487,1.407812 -4,10.592189 z"
					id="path193"
				/><path
					style="opacity:1;fill:#d9feff;fill-opacity:1;fill-rule:evenodd;stroke-width:0.3;stroke-linecap:round;stroke-miterlimit:4.1;paint-order:stroke fill markers"
					d="m 54.595116,53.594661 v -9.59466 l -9,-9 H 42.796354 L 44.000001,24.344913 V 21 h 12.114906 l -2.724478,4 2.229948,2.367838 3.704167,-3.803385 7.978841,6.118489 -6.713802,5.109766 v 4.706387 L 69.320832,33 l 2.976563,8.771093 -0.859896,2.228908 h -7.437498 z"
					id="path194"
				/><path
					style="opacity:1;fill:#0462f7;fill-opacity:1;fill-rule:evenodd;stroke-width:0.3;stroke-linecap:round;stroke-miterlimit:4.1;paint-order:stroke fill markers"
					d="M 34.346224,35.000001 30.844336,31.551562 V 24 l 5.850065,-4 h 4.349088 v 3 l -1.043487,1.407812 h 3.999999 V 21 h 12.114906 l -2.724478,4 2.229948,2.367838 3.704167,-3.803385 7.978841,6.118489 -6.713802,5.109766 v 4.706387 L 69.32083,33 l 2.976565,8.771093 -0.859896,2.228908 h -7.437498 l -9.404885,9.59466 v 2.683949 l 9.404882,-9.225809 h 9.951043 L 75.304935,42 70.000002,27.698567 57.546874,18.802411 H 41.688411 L 37,17 28.145152,23.409469 v 8.395604 l 3.215585,3.194928 z"
					id="path195"
				/><path
					style="opacity:1;fill:#36deca;fill-opacity:1;fill-rule:evenodd;stroke-width:0.3;stroke-linecap:round;stroke-miterlimit:4.1;paint-order:stroke fill markers"
					d="m 35.581926,36.283508 4.418076,-11.875696 h 4.999997 l -2.335937,11.889714 z"
					id="path196"
				/><path
					style="opacity:1;fill:#36deca;fill-opacity:1;fill-rule:evenodd;stroke-width:0.3;stroke-linecap:round;stroke-miterlimit:4.1;paint-order:stroke fill markers"
					d="M 48.47935,39.601544 44.690805,36.225043 53.390429,25 l 2.609572,2.79436 z"
					id="path197"
				/><path
					style="opacity:1;fill:#36deca;fill-opacity:1;fill-rule:evenodd;stroke-width:0.3;stroke-linecap:round;stroke-miterlimit:4.1;paint-order:stroke fill markers"
					d="m 60.589583,34.792708 v 2.769857 l 1.363225,0.921813 -8.410371,5.884868 -3.887935,-3.636537 z"
					id="path198"
				/><path
					style="opacity:1;fill:#36deca;fill-opacity:1;fill-rule:evenodd;stroke-width:0.3;stroke-linecap:round;stroke-miterlimit:4.1;paint-order:stroke fill markers"
					d="m 53.578124,51.717773 4.200261,-4.183724 V 44.68151 l -4.225065,2.811198 z"
					id="path199"
				/><path
					style="opacity:1;fill:#978d86;fill-opacity:1;fill-rule:evenodd;stroke-width:0.3;stroke-linecap:round;stroke-miterlimit:4.1;paint-order:stroke fill markers"
					d="m 18.818099,81.219867 1.457635,-0.01169 2.116441,-1.952739 V 76.788202 L 19,79.594532 Z"
					id="path200"
				/><path
					style="opacity:1;fill:#978d86;fill-opacity:1;fill-rule:evenodd;stroke-width:0.3;stroke-linecap:round;stroke-miterlimit:4.1;paint-order:stroke fill markers"
					d="m 18,83.371387 0.45162,-3.940556 8.044813,-7.565397 h 7.634817 l 1.868752,-2.326916 V 64.241571 L 39.580947,61.000002 37.624948,58.715237 33.219932,63 v 5.000001 h -5.12449 L 15,80 v 2.401171 l 1.544726,1.016992 z"
					id="path201"
				/><path
					style="opacity:1;fill:#b2aca7;fill-opacity:1;fill-rule:evenodd;stroke-width:0.3;stroke-linecap:round;stroke-miterlimit:4.1;paint-order:stroke fill markers"
					d="m 15,82.401171 -2.383208,-1.882886 4.513514,-4.291346 0.397563,-4.466743 2.350302,2.794637 2.853102,-2.853102 -0.04677,-4.431663 1.648719,2.729934 2,-2.000001 0.0229,-5.000001 2.269503,2.269506 1.747057,-1.747057 v -2.90572 l 4.077946,-4.077949 h 3.785105 l -0.61078,2.176457 -4.405016,9.284764 h -5.12449 L 15,80 Z"
					id="path202"
				/><path
					style="opacity:1;fill:#b2aca7;fill-opacity:1;fill-rule:evenodd;stroke-width:0.3;stroke-linecap:round;stroke-miterlimit:4.1;paint-order:stroke fill markers"
					d="M 7.6589423,75.782603 H 11.10839 l 1.566867,-1.782601 2.093054,1.999999 0.05847,-4.60229 2.642627,-2.525697 2.198292,2.268451 0.53788,-5.332027 1.46163,-1.379778 2.773679,2.42824 L 25,61.796744 29.747099,57.482993 H 28.823348 V 53.004558 L 25,56.16168 V 59 Z"
					id="path203"
				/><path
					style="opacity:1;fill:#6a5c52;fill-opacity:1;fill-rule:evenodd;stroke-width:0.3;stroke-linecap:round;stroke-miterlimit:4.1;paint-order:stroke fill markers"
					d="m 7.6589421,75.782603 v -2.45554 L 25,51.428385 28.823348,53.004558 25,56.16168 V 59 Z"
					id="path204"
				/><circle
					style="opacity:1;fill:#172c4a;fill-opacity:1;fill-rule:evenodd;stroke-width:0.319771;stroke-linecap:round;stroke-miterlimit:4.1;paint-order:stroke fill markers"
					id="circle204"
					cx="20.420248"
					cy="57.128624"
					r="2.5797534"
				/><path
					style="opacity:1;fill:#b2aca7;fill-opacity:1;fill-rule:evenodd;stroke-width:0.3;stroke-linecap:round;stroke-miterlimit:4.1;paint-order:stroke fill markers"
					d="M 6.7995037,77.000001 5.6185064,75.911228 25,51.428385 v -4.820378 h 2.999999 0.219467 v 2.496921 h 1.925195 V 40.000002 H 27.999999 L 19.681871,48.318131 19,53.7763 4.7415283,72.461778 v 4.538223 z"
					id="path205"
				/><circle
					style="opacity:1;fill:#36deca;fill-opacity:1;fill-rule:evenodd;stroke-width:0.3;stroke-linecap:round;stroke-miterlimit:4.1;paint-order:stroke fill markers"
					id="circle205"
					cx="20.696684"
					cy="57.470238"
					r="1.4702362"
				/><path
					style="opacity:1;fill:#6a5c52;fill-opacity:1;fill-rule:evenodd;stroke-width:0.3;stroke-linecap:round;stroke-miterlimit:4.1;paint-order:stroke fill markers"
					d="m 25,51.428385 3.823348,1.576173 -0.01169,-1.576173 z"
					id="path206"
				/><path
					style="opacity:1;fill:#978d86;fill-opacity:1;fill-rule:evenodd;stroke-width:0.3;stroke-linecap:round;stroke-miterlimit:4.1;paint-order:stroke fill markers"
					d="m 15.237169,63.760862 h 4.843545 L 7.6589421,75.782603 H 11.10839 l -0.95883,1.217398 H 6.7995037 L 5.6185064,75.911228 11.177056,68.889625 17.443094,65.12884 h -3.292169 z"
					id="path207"
				/><path
					style="opacity:1;fill:#a43a0b;fill-opacity:1;fill-rule:evenodd;stroke-width:0.3;stroke-linecap:round;stroke-miterlimit:4.1;paint-order:stroke fill markers"
					d="m 110.37062,50.174842 v 4.296251 c 7.60834,-5.824279 9.15248,-10.929808 10.40681,-16.000986 z"
					id="path208"
				/><path
					style="opacity:1;fill:#5a2008;fill-opacity:1;fill-rule:evenodd;stroke-width:0.3;stroke-linecap:round;stroke-miterlimit:4.1;paint-order:stroke fill markers"
					d="m 110.37062,46.538305 v 3.636537 c 5.60215,-2.400293 7.83882,-7.1691 10.40681,-11.704735 -3.35159,2.74618 -5.83771,5.911136 -10.40681,8.068198 z"
					id="path209"
				/><path
					style="opacity:1;fill:#a43a0b;fill-opacity:1;fill-rule:evenodd;stroke-width:0.3;stroke-linecap:round;stroke-miterlimit:4.1;paint-order:stroke fill markers"
					d="m 113.19206,66.790754 v -2.790753 l 8.36744,-8 c -1.14917,3.15947 -1.35424,6.06711 -8.36744,10.790753 z"
					id="path210"
				/><path
					style="opacity:1;fill:#5a2008;fill-opacity:1;fill-rule:evenodd;stroke-width:0.3;stroke-linecap:round;stroke-miterlimit:4.1;paint-order:stroke fill markers"
					d="m 113.19206,64.000001 0.002,-2.604625 8.36501,-5.395375 c -2.32786,2.961801 -3.97317,6.360426 -8.36701,8 z"
					id="path211"
				/></g
			><g id="g107"
				><path
					style="opacity:1;fill:#0fb57c;fill-opacity:1;fill-rule:evenodd;stroke-width:0.3;stroke-linecap:round;stroke-miterlimit:4.1;paint-order:stroke fill markers"
					d="m 98.63157,98.080472 h 5.22603 l 2.35349,-2.353496 V 78.25052 L 76.233072,19 H 80 V 9.5249999 L 76.66302,5.7546874 h 3.819922 l 8.517059,8.5658856 V 5.6885416 l 8.937437,8.7312494 V 9.0000001 L 101.18659,12 101.1565,6.6299547 106,11.525911 V 5.8539062 l 2.84362,2.843618 V 5.7216145 l 6.2584,5.9944665 L 112,14.163476 109.63672,11.600325 109.56844,21.716937 102.28133,46.151424 110,75 l -1,22.357125 -3.80351,3.803515 h -3.48475 z"
					id="path44"
				/><path
					style="opacity:1;fill:#431806;fill-rule:evenodd;stroke-width:0.3;stroke-linecap:round;stroke-miterlimit:4.1;paint-order:stroke fill markers;fill-opacity:1"
					d="m 22,121 h 5.365523 v -5.25105 h -5.131855 c -1.279795,0.65686 -2.618315,1.24445 -3.084364,2.86124 z"
					id="path3"
				/><path
					style="opacity:1;fill:#9f3207;fill-rule:evenodd;stroke-width:0.3;stroke-linecap:round;stroke-miterlimit:4.1;paint-order:stroke fill markers;fill-opacity:1"
					d="m 18,124 c 0.878671,-1.6962 2.00928,-3.00662 4,-3 v -2.38981 H 19.149304 C 18.210857,120.33947 18.07969,122.16661 18,124 Z"
					id="path2"
				/><path
					style="opacity:1;fill:#431806;fill-rule:evenodd;stroke-width:0.3;stroke-linecap:round;stroke-miterlimit:4.1;paint-order:stroke fill markers;fill-opacity:1"
					d="M 62.886311,121.10441 H 67 v -5.35499 h -3.491881 c -1.277912,0.39477 -2.059107,1.50902 -2.709976,2.81206 z"
					id="path5"
				/><path
					style="opacity:1;fill:#9f3207;fill-rule:evenodd;stroke-width:0.3;stroke-linecap:round;stroke-miterlimit:4.1;paint-order:stroke fill markers;fill-opacity:1"
					d="m 60.000001,124.16705 c 0.70779,-1.29143 1.084312,-2.93526 2.88631,-3.06264 v -2.54293 h -2.088168 c -0.592701,1.79013 -0.823745,3.66705 -0.798142,5.60557 z"
					id="path4"
				/><path
					style="opacity:1;fill:#b2aca7;fill-rule:evenodd;stroke-width:0.3;stroke-linecap:round;stroke-miterlimit:4.1;paint-order:stroke fill markers;fill-opacity:1"
					d="m 29.447797,121 v -7.76566 H 42.264501 V 109 l -2.35731,-2.12297 V 93.512761 l 2.454756,-2.454757 h 6.18725 l 2.521445,2.521445 v 10.317671 h -2.744571 v 3.16967 h 2.585617 v 8.27529 L 45.253761,121 Z"
					id="path6"
				/><path
					style="opacity:1;fill:#978d86;fill-rule:evenodd;stroke-width:0.3;stroke-linecap:round;stroke-miterlimit:4.1;paint-order:stroke fill markers;fill-opacity:1"
					d="M 34.106728,118.77494 H 38.13457 V 115 Z"
					id="path7"
				/><path
					style="opacity:1;fill:#978d86;fill-rule:evenodd;stroke-width:0.3;stroke-linecap:round;stroke-miterlimit:4.1;paint-order:stroke fill markers;fill-opacity:1"
					d="m 43.487966,109.57807 h 4.027842 v -3.77494 z"
					id="path8"
				/><path
					style="opacity:1;fill:#978d86;fill-rule:evenodd;stroke-width:0.3;stroke-linecap:round;stroke-miterlimit:4.1;paint-order:stroke fill markers;fill-opacity:1"
					d="m 41.204903,100.27877 h 4.027842 v -3.774944 z"
					id="path9"
				/><path
					style="opacity:1;fill:#0462f7;fill-rule:evenodd;stroke-width:0.3;stroke-linecap:round;stroke-miterlimit:4.1;paint-order:stroke fill markers;fill-opacity:1"
					d="m 47.777262,121.09513 1.22274,-1.22274 h 3.334104 l 3.973317,-3.97332 v -3.07309 h 3.033644 v 2.96984 l -5.424594,5.4246 z"
					id="path10"
				/><path
					style="opacity:1;fill:#d9feff;fill-rule:evenodd;stroke-width:0.3;stroke-linecap:round;stroke-miterlimit:4.1;paint-order:stroke fill markers;fill-opacity:1"
					d="m 49.000002,119.87239 h 3.334104 l 3.982599,-3.9826 v -3.06381 H 53.011601 V 116 Z"
					id="path11"
				/><path
					style="opacity:1;fill:#0462f7;fill-rule:evenodd;stroke-width:0.3;stroke-linecap:round;stroke-miterlimit:4.1;paint-order:stroke fill markers;fill-opacity:1"
					d="m 53.000001,110.24659 1e-6,-2.24659 h 3.538281 l 2.524363,-2.52436 v -4.84455 h -6.062644 v -2.032482 h 10.424591 v 5.651972 l -5.987846,5.98785 z"
					id="path12"
				/><path
					style="opacity:1;fill:#d9feff;fill-rule:evenodd;stroke-width:0.3;stroke-linecap:round;stroke-miterlimit:4.1;paint-order:stroke fill markers;fill-opacity:1"
					d="M 53.000002,100.63109 V 108 h 3.538281 l 2.524363,-2.52436 v -4.84455 z"
					id="path13"
				/><path
					style="opacity:1;fill:#6a5c52;fill-rule:evenodd;stroke-width:0.3;stroke-linecap:round;stroke-miterlimit:4.1;paint-order:stroke fill markers;fill-opacity:1"
					d="m 59.480277,111 6.218097,-6.5774 h 7.61949 v 8.28274 H 62.292343 Z"
					id="path14"
				/><path
					style="opacity:1;fill:#b2aca7;fill-rule:evenodd;stroke-width:0.3;stroke-linecap:round;stroke-miterlimit:4.1;paint-order:stroke fill markers;fill-opacity:1"
					d="m 69.466356,121 v -4.74014 H 77.16159 V 112 h -1.666867 v -7.70913 l 3.149989,-3.14999 h 4.449358 l 2.986934,2.98693 v 5.68193 h -2.962675 v 3.08121 h 2.886311 v 8.23202 z"
					id="path15"
				/><path
					style="opacity:1;fill:#978d86;fill-rule:evenodd;stroke-width:0.3;stroke-linecap:round;stroke-miterlimit:4.1;paint-order:stroke fill markers;fill-opacity:1"
					d="m 75.986081,109 h 4.027842 v -3.77494 z"
					id="path16"
				/><path
					style="opacity:1;fill:#978d86;fill-rule:evenodd;stroke-width:0.3;stroke-linecap:round;stroke-miterlimit:4.1;paint-order:stroke fill markers;fill-opacity:1"
					d="m 78.361951,118 h 4.027842 v -3.77494 z"
					id="path17"
				/><path
					style="opacity:1;fill:#36deca;fill-rule:evenodd;stroke-width:0.3;stroke-linecap:round;stroke-miterlimit:4.1;paint-order:stroke fill markers;fill-opacity:1"
					d="M 12,59.337908 15.316819,56.161669 7.7305965,48.627945 V 44.999999 L 4.821153,46.679768 v 5.452541 z"
					id="path18"
				/><path
					style="opacity:1;fill:#389daa;fill-rule:evenodd;stroke-width:0.3;stroke-linecap:round;stroke-miterlimit:4.1;paint-order:stroke fill markers;fill-opacity:1"
					d="m 15.316819,56.161669 1.824368,-1.811244 V 49.572944 L 13.295576,46 V 35.266746 l -5.5781044,5.578104 0.013126,4.155149 v 3.627946 z"
					id="path19"
				/><path
					style="opacity:1;fill:#94cee7;fill-rule:evenodd;stroke-width:0.3;stroke-linecap:round;stroke-miterlimit:4.1;paint-order:stroke fill markers;fill-opacity:1"
					d="M 4.821153,46.679768 V 35.712995 l 8.463446,-8.463447 v 8.028176 l -5.5671274,5.567126 0.013126,4.155149 z"
					id="path20"
				/><path
					style="opacity:1;fill:#d7feff;fill-rule:evenodd;stroke-width:0.3;stroke-linecap:round;stroke-miterlimit:4.1;paint-order:stroke fill markers;fill-opacity:1"
					d="M 4.821153,35.712995 V 31.51301 l 8.463446,-8.806844 v 4.543382 z"
					id="path21"
				/><path
					style="opacity:1;fill:#36deca;fill-rule:evenodd;stroke-width:0.3;stroke-linecap:round;stroke-miterlimit:4.1;paint-order:stroke fill markers;fill-opacity:1"
					d="M 18.867749,45.828307 23,41.698375 l -4.271462,-4.2413 v -4.631089 h -2.292343 v 10.496518 z"
					id="path22"
				/><path
					style="opacity:1;fill:#389daa;fill-rule:evenodd;stroke-width:0.3;stroke-linecap:round;stroke-miterlimit:4.1;paint-order:stroke fill markers;fill-opacity:1"
					d="M 23,41.698375 27.638052,37 25.187935,34.663573 V 19.350348 l -6.396906,6.396905 -0.06249,7.078733 v 4.631089 z"
					id="path23"
				/><path
					style="opacity:1;fill:#94cee7;fill-rule:evenodd;stroke-width:0.3;stroke-linecap:round;stroke-miterlimit:4.1;paint-order:stroke fill markers;fill-opacity:1"
					d="m 16.436195,32.825986 0.06187,-10.11982 11.084301,-11.021711 V 17 l -2.39443,2.350348 -6.396906,6.396905 -0.06249,7.078733 z"
					id="path24"
				/><path
					style="opacity:1;fill:#d7feff;fill-rule:evenodd;stroke-width:0.3;stroke-linecap:round;stroke-miterlimit:4.1;paint-order:stroke fill markers;fill-opacity:1"
					d="M 16.498065,22.706166 V 17.469311 L 27.582365,6.0000001 V 11.684455 Z"
					id="path25"
				/><path
					style="opacity:1;fill:#0fb57c;fill-opacity:1;fill-rule:evenodd;stroke-width:0.3;stroke-linecap:round;stroke-miterlimit:4.1;paint-order:stroke fill markers"
					d="m 88.80078,93.095431 3.834043,-3.834046 h 7.679787 l -4.749027,4.749022 v 2.258404 z"
					id="path43"
				/><path
					style="opacity:1;fill:#6a5c52;fill-opacity:1;fill-rule:evenodd;stroke-width:0.3;stroke-linecap:round;stroke-miterlimit:4.1;paint-order:stroke fill markers"
					d="M 109.63672,11.600325 112,14.163476 V 45.602863 L 115.74942,50 118,63 v 29.268534 9.430686 l -2.89798,2.72024 v 5.16765 l -8.93723,8.93723 H 90.272525 c -1.833095,-0.20312 -2.73781,-1.28305 -2.984468,-2.98447 V 107 l 28.007763,-5.94443 -5.72738,-42.698261 z"
					id="path50"
				/><path
					style="opacity:1;fill:#0462f7;fill-opacity:1;fill-rule:evenodd;stroke-width:0.3;stroke-linecap:round;stroke-miterlimit:4.1;paint-order:stroke fill markers"
					d="m 115.10202,109.58711 v -5.16765 L 118,101.69922 v -9.430686 l 3.26854,-3.268533 V 62.253754 L 118.18607,60.00869 V 9.2356119 l 6.06419,-4.5350091 V 100.53677 Z"
					id="path52"
				/><path
					style="opacity:1;fill:#a43a0b;fill-opacity:1;fill-rule:evenodd;stroke-width:0.3;stroke-linecap:round;stroke-miterlimit:4.1;paint-order:stroke fill markers"
					d="m 115.10202,97.011132 v 2.599637 c 6.10292,-4.619377 5.12007,-6.708125 6.41614,-9.61077 z"
					id="path105"
				/><path
					style="opacity:1;fill:#5a2008;fill-opacity:1;fill-rule:evenodd;stroke-width:0.3;stroke-linecap:round;stroke-miterlimit:4.1;paint-order:stroke fill markers"
					d="m 115.10202,94.91927 c 2.60928,-1.326047 4.30462,-3.261385 6.41614,-4.919269 -1.60996,2.885022 -3.14039,5.852466 -6.41614,7.011131 z"
					id="path104"
				/><path
					style="opacity:1;fill:#d9feff;fill-opacity:1;fill-rule:evenodd;stroke-width:0.3;stroke-linecap:round;stroke-miterlimit:4.1;paint-order:stroke fill markers"
					d="m 112,14.163476 6.18607,-4.9278641 V 60.00869 l 1.46883,0.678196 1.61364,1.566868 V 89.000001 L 118,92.268534 V 63 l -2.25058,-2.815915 V 50 L 114.87915,49.497554 112,45.602863 Z"
					id="path49"
				/><path
					style="opacity:1;fill:#a43a0b;fill-opacity:1;fill-rule:evenodd;stroke-width:0.3;stroke-linecap:round;stroke-miterlimit:4.1;paint-order:stroke fill markers"
					d="m 115.10202,88.486585 6.48229,-7.143747 c -0.89466,2.859483 -1.07254,5.552827 -6.48229,9.458854 z"
					id="path106"
				/><path
					style="opacity:1;fill:#5a2008;fill-opacity:1;fill-rule:evenodd;stroke-width:0.3;stroke-linecap:round;stroke-miterlimit:4.1;paint-order:stroke fill markers"
					d="m 115.10202,86.369921 c 2.53644,-1.365356 4.41669,-3.272772 6.48229,-5.027083 -1.5492,2.778767 -3.20196,5.49022 -6.48229,7.143749 z"
					id="path103"
				/><path
					style="opacity:1;fill:#b2aca7;fill-opacity:1;fill-rule:evenodd;stroke-width:0.3;stroke-linecap:round;stroke-miterlimit:4.1;paint-order:stroke fill markers"
					d="m 52.999999,96.763706 v -3.478111 l 3.277235,-3.277235 h 12.975667 l 5.346964,3.087073 h 19.046666 l 8.065209,8.065207 h 3.48475 L 109,97.357127 V 76.556843 L 83.000002,23.13929 V 13.269326 L 91.591378,21.860704 91.769662,16 101,25.113689 V 13 l 8.56844,8.716937 v 36.640372 l 2.6427,2.642693 v 7.635729 l 3.08468,3.084684 v 29.335155 l -10.12709,10.12708 H 91.480914 L 87.298259,107 v -3.83788 l -3.473651,-3.473651 h -7.22739 l -3.076183,3.076181 h -8.521034 v -6.003629 z"
					id="path26"
				/><path
					style="opacity:1;fill:#978d86;fill-opacity:1;fill-rule:evenodd;stroke-width:0.3;stroke-linecap:round;stroke-miterlimit:4.1;paint-order:stroke fill markers"
					d="M 65.000001,96.761021 V 90.00836 h -2.590855 c 0,0 -3.409146,3.409143 -3.409146,3.409143 l 3.344111,3.344111 z"
					id="path27"
				/><path
					style="opacity:1;fill:#978d86;fill-opacity:1;fill-rule:evenodd;stroke-width:0.3;stroke-linecap:round;stroke-miterlimit:4.1;paint-order:stroke fill markers"
					d="m 75.792263,100.49342 0.794059,-0.794058 h 1.41368 v -6.603931 h -2.780903 l -3.346789,3.346788 z"
					id="path28"
				/><path
					style="opacity:1;fill:#978d86;fill-opacity:1;fill-rule:evenodd;stroke-width:0.3;stroke-linecap:round;stroke-miterlimit:4.1;paint-order:stroke fill markers"
					d="m 86.917256,102.78112 8.207481,-8.207484 -1.478208,-1.478205 h -0.672053 l -3.206345,3.206345 h -3.768129 v 5.562084 z"
					id="path29"
				/><path
					style="opacity:1;fill:#978d86;fill-opacity:1;fill-rule:evenodd;stroke-width:0.3;stroke-linecap:round;stroke-miterlimit:4.1;paint-order:stroke fill markers"
					d="m 98.205942,97.654844 1.986078,1.986079 v 11.541727 h -3.192019 l -2.383669,-2.38367 3.383669,-3.38367 z"
					id="path30"
				/><path
					style="opacity:1;fill:#978d86;fill-opacity:1;fill-rule:evenodd;stroke-width:0.3;stroke-linecap:round;stroke-miterlimit:4.1;paint-order:stroke fill markers"
					d="M 108.32009,98.037032 113.28306,103 l -1.7355,1.7355 -4.96296,-4.96297 z"
					id="path31"
				/><path
					style="opacity:1;fill:#978d86;fill-opacity:1;fill-rule:evenodd;stroke-width:0.3;stroke-linecap:round;stroke-miterlimit:4.1;paint-order:stroke fill markers"
					d="M 115.29582,93.528405 V 87.333427 H 109 v 2.06062 h 2.12897 z"
					id="path32"
				/><path
					style="opacity:1;fill:#a43a0b;fill-opacity:1;fill-rule:evenodd;stroke-width:0.3;stroke-linecap:round;stroke-miterlimit:4.1;paint-order:stroke fill markers"
					d="m 115.10202,78.666408 v 2.600232 c 6.22254,-4.844498 5.5834,-6.931026 6.55238,-9.599988 z"
					id="path107"
				/><path
					style="opacity:1;fill:#5a2008;fill-opacity:1;fill-rule:evenodd;stroke-width:0.3;stroke-linecap:round;stroke-miterlimit:4.1;paint-order:stroke fill markers"
					d="m 121.6544,71.666652 c -1.73147,3.358181 -3.88106,6.159727 -6.55238,6.999758 v -2.116909 c 2.14854,-1.205243 4.44447,-3.078356 6.55238,-4.882849 z"
					id="path102"
				/><path
					style="opacity:1;fill:#978d86;fill-opacity:1;fill-rule:evenodd;stroke-width:0.3;stroke-linecap:round;stroke-miterlimit:4.1;paint-order:stroke fill markers"
					d="M 115.29582,82.332821 V 75 h -7.05358 L 109,76.556843 v 1.287245 h 1.56459 z"
					id="path33"
				/><path
					style="opacity:1;fill:#978d86;fill-opacity:1;fill-rule:evenodd;stroke-width:0.3;stroke-linecap:round;stroke-miterlimit:4.1;paint-order:stroke fill markers"
					d="m 112.21114,68.635731 -0.74397,0.429527 -3.20185,-3.201847 h -4.47015 l -0.99061,-2.035223 h 9.40658 z"
					id="path34"
				/><path
					style="opacity:1;fill:#978d86;fill-opacity:1;fill-rule:evenodd;stroke-width:0.3;stroke-linecap:round;stroke-miterlimit:4.1;paint-order:stroke fill markers"
					d="M 109.56844,54.663572 V 52.000001 H 97.047414 l 1.324488,2.721187 H 103 l 2.85634,2.856341 2.96964,-2.969641 z"
					id="path35"
				/><path
					style="opacity:1;fill:#978d86;fill-opacity:1;fill-rule:evenodd;stroke-width:0.3;stroke-linecap:round;stroke-miterlimit:4.1;paint-order:stroke fill markers"
					d="m 92.717116,43.103313 -0.974696,-2.002538 17.82602,-0.0036 v 1.902844 h -4.1357 l -3.15141,3.151404 -3.237249,-3.01413 z"
					id="path36"
				/><path
					style="opacity:1;fill:#978d86;fill-opacity:1;fill-rule:evenodd;stroke-width:0.3;stroke-linecap:round;stroke-miterlimit:4.1;paint-order:stroke fill markers"
					d="m 85.865071,29.025636 1.089002,2.237382 3.634343,3.518104 4.114673,-4.114673 h 0.570937 l 4.124515,4.124518 3.940769,-3.940768 h 0.99093 l 3.85545,3.855456 1.38275,-1.382745 V 29 Z"
					id="path37"
				/><path
					style="opacity:1;fill:#978d86;fill-opacity:1;fill-rule:evenodd;stroke-width:0.3;stroke-linecap:round;stroke-miterlimit:4.1;paint-order:stroke fill markers"
					d="m 83.000002,17 h 3.730673 L 90.192483,20.461809 87.749419,23 83,18.204308 Z"
					id="path38"
				/><path
					style="opacity:1;fill:#978d86;fill-opacity:1;fill-rule:evenodd;stroke-width:0.3;stroke-linecap:round;stroke-miterlimit:4.1;paint-order:stroke fill markers"
					d="m 91.733266,17.196442 1.179232,-0.06805 5.024942,4.96144 -1.538369,1.483252 -4.718553,-4.642734 z"
					id="path39"
				/><path
					style="opacity:1;fill:#978d86;fill-opacity:1;fill-rule:evenodd;stroke-width:0.3;stroke-linecap:round;stroke-miterlimit:4.1;paint-order:stroke fill markers"
					d="m 100.99304,17 3.94091,0.0021 3.26828,3.32492 L 105.40649,23 101.86275,19.267429 101,19.146172 Z"
					id="path40"
				/><path
					style="opacity:1;fill:#0fb57c;fill-opacity:1;fill-rule:evenodd;stroke-width:0.3;stroke-linecap:round;stroke-miterlimit:4.1;paint-order:stroke fill markers"
					d="m 75,93.000001 v -1.396712 l 5.074364,-5.074364 h -8.074363 l -3.479435,3.479435 h 0.732335 l 5.346967,3.087071 H 75 Z"
					id="path41"
				/><path
					style="opacity:1;fill:#0fb57c;fill-opacity:1;fill-rule:evenodd;stroke-width:0.3;stroke-linecap:round;stroke-miterlimit:4.1;paint-order:stroke fill markers"
					d="m 77.225259,93.095431 6.595632,-6.595634 h 7.146165 l -4.967054,4.967054 v 1.62858 z"
					id="path42"
				/><path
					style="opacity:1;fill:#a0d3ea;fill-opacity:1;fill-rule:evenodd;stroke-width:0.3;stroke-linecap:round;stroke-miterlimit:4.1;paint-order:stroke fill markers"
					d="M 76.233072,19 69.550213,5.6885416 76.66302,5.7546874 79.999998,9.5249999 80,19 Z"
					id="path45"
				/><path
					style="opacity:1;fill:#a0d3ea;fill-opacity:1;fill-rule:evenodd;stroke-width:0.3;stroke-linecap:round;stroke-miterlimit:4.1;paint-order:stroke fill markers"
					d="M 89.000001,14.320573 V 5.6885416 h -2.999999 v 5.6148344 z"
					id="path46"
				/><path
					style="opacity:1;fill:#a0d3ea;fill-opacity:1;fill-rule:evenodd;stroke-width:0.3;stroke-linecap:round;stroke-miterlimit:4.1;paint-order:stroke fill markers"
					d="M 97.937438,8.9999999 V 5.8932931 h 2.406402 L 101.1565,6.6299547 101.18659,12 Z"
					id="path47"
				/><path
					style="opacity:1;fill:#a0d3ea;fill-opacity:1;fill-rule:evenodd;stroke-width:0.3;stroke-linecap:round;stroke-miterlimit:4.1;paint-order:stroke fill markers"
					d="m 106,5.8539062 2.84362,-0.1322917 V 8.697524 Z"
					id="path48"
				/><path
					style="opacity:1;fill:#6a5c52;fill-opacity:1;fill-rule:evenodd;stroke-width:0.3;stroke-linecap:round;stroke-miterlimit:4.1;paint-order:stroke fill markers"
					d="m 109.63672,11.600325 -0.0683,10.116612 v 36.640372 l 1.077,-0.77978 0.0271,-44.85383 z"
					id="path51"
				/><path
					style="opacity:1;fill:#6b5d53;fill-opacity:1;fill-rule:evenodd;stroke-width:0.3;stroke-linecap:round;stroke-miterlimit:4.1;paint-order:stroke fill markers"
					d="M 54.471093,78.25052 H 70.164192 L 73.414709,75 l -2.221627,-5.414584 3.105224,-3.422203 -5.035351,-5.163211 3.050976,-3.09766 -4.31393,-4.90234 -8,4.999998 -2.999999,8.163213 L 54.471093,75 Z"
					id="path68"
				/><path
					style="opacity:1;fill:#b2aca7;fill-opacity:1;fill-rule:evenodd;stroke-width:0.3;stroke-linecap:round;stroke-miterlimit:4.1;paint-order:stroke fill markers"
					d="M 40.000002,89.000001 V 82.447637 L 51.194456,71.25318 V 62.788932 L 65.08629,48.897098 h 12.321646 l -9.005245,9.005244 h -8.40269 v 3.09766 H 67 l -5.163211,5.163211 h -4.836787 v 3.422203 h 4.499086 L 56.084501,75 h -1.613408 v 3.25052 h 5.655469 L 49.291046,89.086033 Z"
					id="path53"
				/><path
					style="opacity:1;fill:#978d86;fill-opacity:1;fill-rule:evenodd;stroke-width:0.3;stroke-linecap:round;stroke-miterlimit:4.1;paint-order:stroke fill markers"
					d="M 49.291046,89.086033 60.126559,78.25052 h 3.873442 L 53.153055,89.097465 Z"
					id="path54"
				/><path
					style="opacity:1;fill:#b2aca7;fill-opacity:1;fill-rule:evenodd;stroke-width:0.3;stroke-linecap:round;stroke-miterlimit:4.1;paint-order:stroke fill markers"
					d="m 64.000001,78.25052 h 10.192348 l -5.69417,5.694169 h -6.02344 l -3.055313,3.055313 h -4.16891 z"
					id="path55"
				/><path
					style="opacity:1;fill:#0fb57c;fill-opacity:1;fill-rule:evenodd;stroke-width:0.3;stroke-linecap:round;stroke-miterlimit:4.1;paint-order:stroke fill markers"
					d="m 68.498179,83.944689 5.694167,-5.694169 h 3.21559 L 71.713425,84 Z"
					id="path56"
				/><path
					style="opacity:1;fill:#abd9ec;fill-opacity:1;fill-rule:evenodd;stroke-width:0.3;stroke-linecap:round;stroke-miterlimit:4.1;paint-order:stroke fill markers"
					d="m 71.713425,83.999998 5.694511,-5.749478 h 5.413877 l -5.65495,5.65495 z"
					id="path57"
				/><path
					style="opacity:1;fill:#978d86;fill-opacity:1;fill-rule:evenodd;stroke-width:0.3;stroke-linecap:round;stroke-miterlimit:4.1;paint-order:stroke fill markers"
					d="m 61.499088,69.585416 h 3.61946 L 59.703964,75 h -3.703963 z"
					id="path58"
				/><path
					style="opacity:1;fill:#978d86;fill-opacity:1;fill-rule:evenodd;stroke-width:0.3;stroke-linecap:round;stroke-miterlimit:4.1;paint-order:stroke fill markers"
					d="m 61.836789,66.163213 h 3.655938 l 5.163211,-5.163211 H 67 Z"
					id="path59"
				/><path
					style="opacity:1;fill:#0fb57c;fill-opacity:1;fill-rule:evenodd;stroke-width:0.3;stroke-linecap:round;stroke-miterlimit:4.1;paint-order:stroke fill markers"
					d="m 68.402691,57.902342 h 3.191904 l 8.902341,-8.90234 -3.089,-0.102904 z"
					id="path60"
				/><path
					style="opacity:1;fill:#abd9ec;fill-opacity:1;fill-rule:evenodd;stroke-width:0.3;stroke-linecap:round;stroke-miterlimit:4.1;paint-order:stroke fill markers"
					d="m 71.594593,57.902342 h 7.20163 l 8.78496,-8.78496 c 0,0 -7.084247,-0.11738 -7.084247,-0.11738 z"
					id="path61"
				/><path
					style="opacity:1;fill:#b2aca7;fill-opacity:1;fill-rule:evenodd;stroke-width:0.3;stroke-linecap:round;stroke-miterlimit:4.1;paint-order:stroke fill markers"
					d="m 59.703964,75 5.414584,-5.414584 H 77.267619 L 71.853033,75 Z"
					id="path62"
				/><path
					style="opacity:1;fill:#b2aca7;fill-opacity:1;fill-rule:evenodd;stroke-width:0.3;stroke-linecap:round;stroke-miterlimit:4.1;paint-order:stroke fill markers"
					d="m 65.492727,66.163213 h 8.805579 l 5.163212,-5.163211 -8.805582,0.0071 z"
					id="path63"
				/><path
					style="opacity:1;fill:#0fb57c;fill-opacity:1;fill-rule:evenodd;stroke-width:0.3;stroke-linecap:round;stroke-miterlimit:4.1;paint-order:stroke fill markers"
					d="m 71.853033,75 5.414586,-5.414584 h 3.110349 L 75,74.963382 Z"
					id="path64"
				/><path
					style="opacity:1;fill:#0fb57c;fill-opacity:1;fill-rule:evenodd;stroke-width:0.3;stroke-linecap:round;stroke-miterlimit:4.1;paint-order:stroke fill markers"
					d="m 74.298306,66.163213 5.163212,-5.163211 h 3.538484 l -5.118401,5.118399 z"
					id="path65"
				/><path
					style="opacity:1;fill:#abd9ec;fill-opacity:1;fill-rule:evenodd;stroke-width:0.3;stroke-linecap:round;stroke-miterlimit:4.1;paint-order:stroke fill markers"
					d="m 77.881601,66.118401 5.118401,-5.118399 h 8.479684 l -5.136067,5.136065 z"
					id="path66"
				/><path
					style="opacity:1;fill:#abd9ec;fill-opacity:1;fill-rule:evenodd;stroke-width:0.3;stroke-linecap:round;stroke-miterlimit:4.1;paint-order:stroke fill markers"
					d="m 80.377968,69.585416 h 5.741284 L 80.704665,75 75,74.963382 Z"
					id="path67"
				/><path
					style="opacity:1;fill:#6a5c52;fill-opacity:1;fill-rule:evenodd;stroke-width:0.3;stroke-linecap:round;stroke-miterlimit:4.1;paint-order:stroke fill markers"
					d="m 38,105.71679 v 2.63008 L 28.256283,98.603156 V 84 L 42.236808,70.019475 V 44.999999 h -2.889724 v 8.511979 H 30 v -2.265494 h 2.366339 V 37.587369 l 10.633659,4.028353 2.38428,2.384279 V 69.26958 L 30.736952,83.916905 v 14.723068 z"
					id="path76"
				/><path
					style="opacity:1;fill:#b2aca7;fill-opacity:1;fill-rule:evenodd;stroke-width:0.3;stroke-linecap:round;stroke-miterlimit:4.1;paint-order:stroke fill markers"
					d="M 38,105.71679 V 81.746055 L 49.122467,70.836445 V 62.226692 L 53.000002,58.34916 V 45.690234 L 44.999999,37.587369 H 32.345312 l 0.02103,1.739776 2.28007,2.288577 8.35359,0 2.384279,2.384279 V 69.26958 L 30.736952,83.916905 v 14.723068 z"
					id="path69"
				/><path
					style="opacity:1;fill:#978d86;fill-opacity:1;fill-rule:evenodd;stroke-width:0.3;stroke-linecap:round;stroke-miterlimit:4.1;paint-order:stroke fill markers"
					d="M 30.736952,98.639973 H 38 v -5.853906 h -7.263048 z"
					id="path70"
				/><path
					style="opacity:1;fill:#978d86;fill-opacity:1;fill-rule:evenodd;stroke-width:0.3;stroke-linecap:round;stroke-miterlimit:4.1;paint-order:stroke fill markers"
					d="m 30.736952,86.610358 v -2.693453 l 2.964186,-2.964188 h 5.107675 L 38,81.761533 v 4.86052 z"
					id="path71"
				/><path
					style="opacity:1;fill:#978d86;fill-opacity:1;fill-rule:evenodd;stroke-width:0.3;stroke-linecap:round;stroke-miterlimit:4.1;paint-order:stroke fill markers"
					d="m 39.670434,74.983421 5.713844,-5.713841 v -0.105844 l 3.738189,5.29e-4 v 1.672103 l -4.219064,4.138319 z"
					id="path72"
				/><path
					style="opacity:1;fill:#978d86;fill-opacity:1;fill-rule:evenodd;stroke-width:0.3;stroke-linecap:round;stroke-miterlimit:4.1;paint-order:stroke fill markers"
					d="m 49.064002,63.999998 0.05846,-1.773306 3.877535,-3.877532 v -0.702464 h -7.615724 v 6.353305 z"
					id="path73"
				/><path
					style="opacity:1;fill:#978d86;fill-opacity:1;fill-rule:evenodd;stroke-width:0.3;stroke-linecap:round;stroke-miterlimit:4.1;paint-order:stroke fill markers"
					d="m 53.000002,52.019697 h -7.615724 v -5.701078 h 7.615724 z"
					id="path74"
				/><path
					style="opacity:1;fill:#978d86;fill-opacity:1;fill-rule:evenodd;stroke-width:0.3;stroke-linecap:round;stroke-miterlimit:4.1;paint-order:stroke fill markers"
					d="m 42.999998,41.615722 2.750235,-3.268472 -0.750234,-0.759881 h -5.804923 l -3.905475,4.028353 z"
					id="path75"
				/><path
					style="opacity:1;fill:#36deca;fill-opacity:1;fill-rule:evenodd;stroke-width:0.3;stroke-linecap:round;stroke-miterlimit:4.1;paint-order:stroke fill markers"
					d="m 32.366341,39.327145 9.870467,9.753063 -2.889724,2.81533 -7.015824,-6.895539 z"
					id="path77"
				/><path
					style="opacity:1;fill:#36deca;fill-opacity:1;fill-rule:evenodd;stroke-width:0.3;stroke-linecap:round;stroke-miterlimit:4.1;paint-order:stroke fill markers"
					d="m 36.000002,69.538518 v -5.296947 h 3.873269 v 5.285255 z"
					id="path78"
				/><path
					style="opacity:1;fill:#36deca;fill-opacity:1;fill-rule:evenodd;stroke-width:0.3;stroke-linecap:round;stroke-miterlimit:4.1;paint-order:stroke fill markers"
					d="m 42.236808,60.93244 v -5.589275 h -2.632475 l -2.784054,2.432153 2.760668,3.224684 h 2.655861 z"
					id="path79"
				/><path
					style="opacity:1;fill:#b2aca7;fill-opacity:1;fill-rule:evenodd;stroke-width:0.3;stroke-linecap:round;stroke-miterlimit:4.1;paint-order:stroke fill markers"
					d="m 30,53.511978 h 4.461979 L 32.91582,55.058137 H 30 Z"
					id="path80"
				/><path
					style="opacity:1;fill:#d9feff;fill-opacity:1;fill-rule:evenodd;stroke-width:0.3;stroke-linecap:round;stroke-miterlimit:4.1;paint-order:stroke fill markers"
					d="m 34.346224,35.000001 -3.501888,-3.50189 V 24 l 5.850065,-4 h 4.349088 v 3 l -1.043487,1.407812 -4,10.592189 z"
					id="path81"
				/><path
					style="opacity:1;fill:#d9feff;fill-opacity:1;fill-rule:evenodd;stroke-width:0.3;stroke-linecap:round;stroke-miterlimit:4.1;paint-order:stroke fill markers"
					d="m 54.595116,53.594661 v -9.59466 l -9,-9 H 42.796354 L 44.000001,24.344913 V 21 h 12.114906 l -2.724478,4 2.229948,2.367838 3.704167,-3.803385 7.978841,6.118489 -6.713802,5.109766 v 4.706387 L 69.320832,33 l 2.976563,8.771093 -0.859896,2.228908 h -7.437498 z"
					id="path82"
				/><path
					style="opacity:1;fill:#0462f7;fill-opacity:1;fill-rule:evenodd;stroke-width:0.3;stroke-linecap:round;stroke-miterlimit:4.1;paint-order:stroke fill markers"
					d="M 34.346224,35.000001 30.844336,31.551562 V 24 l 5.850065,-4 h 4.349088 v 3 l -1.043487,1.407812 h 3.999999 V 21 h 12.114906 l -2.724478,4 2.229948,2.367838 3.704167,-3.803385 7.978841,6.118489 -6.713802,5.109766 v 4.706387 L 69.32083,33 l 2.976565,8.771093 -0.859896,2.228908 h -7.437498 l -9.404885,9.59466 v 2.683949 l 9.404882,-9.225809 h 9.951043 L 75.304935,42 70.000002,27.698567 57.546874,18.802411 H 41.688411 L 37,17 28.145152,23.409469 v 8.395604 l 3.215585,3.194928 z"
					id="path83"
				/><path
					style="opacity:1;fill:#36deca;fill-opacity:1;fill-rule:evenodd;stroke-width:0.3;stroke-linecap:round;stroke-miterlimit:4.1;paint-order:stroke fill markers"
					d="m 35.581926,36.283508 4.418076,-11.875696 h 4.999997 l -2.335937,11.889714 z"
					id="path84"
				/><path
					style="opacity:1;fill:#36deca;fill-opacity:1;fill-rule:evenodd;stroke-width:0.3;stroke-linecap:round;stroke-miterlimit:4.1;paint-order:stroke fill markers"
					d="M 48.47935,39.601544 44.690805,36.225043 53.390429,25 l 2.609572,2.79436 z"
					id="path85"
				/><path
					style="opacity:1;fill:#36deca;fill-opacity:1;fill-rule:evenodd;stroke-width:0.3;stroke-linecap:round;stroke-miterlimit:4.1;paint-order:stroke fill markers"
					d="m 60.589583,34.792708 v 2.769857 l 1.363225,0.921813 -8.410371,5.884868 -3.887935,-3.636537 z"
					id="path86"
				/><path
					style="opacity:1;fill:#36deca;fill-opacity:1;fill-rule:evenodd;stroke-width:0.3;stroke-linecap:round;stroke-miterlimit:4.1;paint-order:stroke fill markers"
					d="m 53.578124,51.717773 4.200261,-4.183724 V 44.68151 l -4.225065,2.811198 z"
					id="path87"
				/><path
					style="opacity:1;fill:#978d86;fill-opacity:1;fill-rule:evenodd;stroke-width:0.3;stroke-linecap:round;stroke-miterlimit:4.1;paint-order:stroke fill markers"
					d="m 18.818099,81.219867 1.457635,-0.01169 2.116441,-1.952739 V 76.788202 L 19,79.594532 Z"
					id="path88"
				/><path
					style="opacity:1;fill:#978d86;fill-opacity:1;fill-rule:evenodd;stroke-width:0.3;stroke-linecap:round;stroke-miterlimit:4.1;paint-order:stroke fill markers"
					d="m 18,83.371387 0.45162,-3.940556 8.044813,-7.565397 h 7.634817 l 1.868752,-2.326916 V 64.241571 L 39.580947,61.000002 37.624948,58.715237 33.219932,63 v 5.000001 h -5.12449 L 15,80 v 2.401171 l 1.544726,1.016992 z"
					id="path89"
				/><path
					style="opacity:1;fill:#b2aca7;fill-opacity:1;fill-rule:evenodd;stroke-width:0.3;stroke-linecap:round;stroke-miterlimit:4.1;paint-order:stroke fill markers"
					d="m 15,82.401171 -2.383208,-1.882886 4.513514,-4.291346 0.397563,-4.466743 2.350302,2.794637 2.853102,-2.853102 -0.04677,-4.431663 1.648719,2.729934 2,-2.000001 0.0229,-5.000001 2.269503,2.269506 1.747057,-1.747057 v -2.90572 l 4.077946,-4.077949 h 3.785105 l -0.61078,2.176457 -4.405016,9.284764 h -5.12449 L 15,80 Z"
					id="path90"
				/><path
					style="opacity:1;fill:#b2aca7;fill-opacity:1;fill-rule:evenodd;stroke-width:0.3;stroke-linecap:round;stroke-miterlimit:4.1;paint-order:stroke fill markers"
					d="M 7.6589423,75.782603 H 11.10839 l 1.566867,-1.782601 2.093054,1.999999 0.05847,-4.60229 2.642627,-2.525697 2.198292,2.268451 0.53788,-5.332027 1.46163,-1.379778 2.773679,2.42824 L 25,61.796744 29.747099,57.482993 H 28.823348 V 53.004558 L 25,56.16168 V 59 Z"
					id="path91"
				/><path
					style="opacity:1;fill:#6a5c52;fill-opacity:1;fill-rule:evenodd;stroke-width:0.3;stroke-linecap:round;stroke-miterlimit:4.1;paint-order:stroke fill markers"
					d="m 7.6589421,75.782603 v -2.45554 L 25,51.428385 28.823348,53.004558 25,56.16168 V 59 Z"
					id="path95"
				/><circle
					style="opacity:1;fill:#172c4a;fill-opacity:1;fill-rule:evenodd;stroke-width:0.319771;stroke-linecap:round;stroke-miterlimit:4.1;paint-order:stroke fill markers"
					id="path93"
					cx="20.420248"
					cy="57.128624"
					r="2.5797534"
				/><path
					style="opacity:1;fill:#b2aca7;fill-opacity:1;fill-rule:evenodd;stroke-width:0.3;stroke-linecap:round;stroke-miterlimit:4.1;paint-order:stroke fill markers"
					d="M 6.7995037,77.000001 5.6185064,75.911228 25,51.428385 v -4.820378 h 2.999999 0.219467 v 2.496921 h 1.925195 V 40.000002 H 27.999999 L 19.681871,48.318131 19,53.7763 4.7415283,72.461778 v 4.538223 z"
					id="path92"
				/><circle
					style="opacity:1;fill:#36deca;fill-opacity:1;fill-rule:evenodd;stroke-width:0.3;stroke-linecap:round;stroke-miterlimit:4.1;paint-order:stroke fill markers"
					id="path94"
					cx="20.696684"
					cy="57.470238"
					r="1.4702362"
				/><path
					style="opacity:1;fill:#6a5c52;fill-opacity:1;fill-rule:evenodd;stroke-width:0.3;stroke-linecap:round;stroke-miterlimit:4.1;paint-order:stroke fill markers"
					d="m 25,51.428385 3.823348,1.576173 -0.01169,-1.576173 z"
					id="path96"
				/><path
					style="opacity:1;fill:#978d86;fill-opacity:1;fill-rule:evenodd;stroke-width:0.3;stroke-linecap:round;stroke-miterlimit:4.1;paint-order:stroke fill markers"
					d="m 15.237169,63.760862 h 4.843545 L 7.6589421,75.782603 H 11.10839 l -0.95883,1.217398 H 6.7995037 L 5.6185064,75.911228 11.177056,68.889625 17.443094,65.12884 h -3.292169 z"
					id="path97"
				/><path
					style="opacity:1;fill:#a43a0b;fill-opacity:1;fill-rule:evenodd;stroke-width:0.3;stroke-linecap:round;stroke-miterlimit:4.1;paint-order:stroke fill markers"
					d="m 110.37062,50.174842 v 4.296251 c 7.60834,-5.824279 9.15248,-10.929808 10.40681,-16.000986 z"
					id="path99"
				/><path
					style="opacity:1;fill:#5a2008;fill-opacity:1;fill-rule:evenodd;stroke-width:0.3;stroke-linecap:round;stroke-miterlimit:4.1;paint-order:stroke fill markers"
					d="m 110.37062,46.538305 v 3.636537 c 5.60215,-2.400293 7.83882,-7.1691 10.40681,-11.704735 -3.35159,2.74618 -5.83771,5.911136 -10.40681,8.068198 z"
					id="path98"
				/><path
					style="opacity:1;fill:#a43a0b;fill-opacity:1;fill-rule:evenodd;stroke-width:0.3;stroke-linecap:round;stroke-miterlimit:4.1;paint-order:stroke fill markers"
					d="m 113.19206,66.790754 v -2.790753 l 8.36744,-8 c -1.14917,3.15947 -1.35424,6.06711 -8.36744,10.790753 z"
					id="path100"
				/><path
					style="opacity:1;fill:#5a2008;fill-opacity:1;fill-rule:evenodd;stroke-width:0.3;stroke-linecap:round;stroke-miterlimit:4.1;paint-order:stroke fill markers"
					d="m 113.19206,64.000001 0.002,-2.604625 8.36501,-5.395375 c -2.32786,2.961801 -3.97317,6.360426 -8.36701,8 z"
					id="path101"
				/></g
			></g
		><metadata id="metadata212"
			><rdf:RDF
				><cc:Work rdf:about=""
					><cc:license
						rdf:resource="http://creativecommons.org/licenses/by-nc-sa/4.0/"
					/><dc:creator
						><cc:Agent><dc:title>Doriel Rivalet</dc:title></cc:Agent
						></dc:creator
					></cc:Work
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
