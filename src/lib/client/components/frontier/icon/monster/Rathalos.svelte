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
				id="filter102"
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
					id="feComposite101"
				/><feColorMatrix
					in="composite1"
					values="1"
					type="saturate"
					result="colormatrix1"
					id="feColorMatrix101"
				/><feFlood
					flood-opacity="1"
					flood-color="rgb(0,0,0)"
					result="flood1"
					id="feFlood101"
				/><feBlend
					in="flood1"
					in2="colormatrix1"
					mode="multiply"
					result="blend1"
					id="feBlend101"
				/><feBlend
					in2="blend1"
					mode="screen"
					result="blend2"
					id="feBlend102"
				/><feColorMatrix
					in="blend2"
					values="1"
					type="saturate"
					result="colormatrix2"
					id="feColorMatrix102"
				/><feComposite
					in="colormatrix2"
					in2="SourceGraphic"
					operator="in"
					k2="1"
					result="composite2"
					id="feComposite102"
				/></filter
			></defs
		>
		<!-- svelte-ignore a11y-no-static-element-interactions -->
		<!-- svelte-ignore a11y-mouse-events-have-key-events -->
		<g id="layer1"
			><g
				id="g101"
				style="filter:url(#filter102)"
				transform="translate(0.52916663,1.5875)"
				><rect
					style="opacity:1;fill:#000000;fill-opacity:1;fill-rule:evenodd;stroke-width:0.3;stroke-linecap:round;stroke-miterlimit:4.1;paint-order:stroke fill markers"
					id="rect52"
					width="11.000001"
					height="8.6009264"
					x="27.999998"
					y="75"
				/><circle
					style="opacity:1;fill:#eee3a4;fill-opacity:1;fill-rule:evenodd;stroke-width:0.3;stroke-linecap:round;stroke-miterlimit:4.1;paint-order:stroke fill markers"
					id="circle52"
					cx="34.754871"
					cy="80.41658"
					r="2.5834222"
				/><path
					id="path53"
					style="opacity:1;fill:#be2320;fill-opacity:1;fill-rule:evenodd;stroke-width:0.3;stroke-linecap:round;stroke-miterlimit:4.1;paint-order:stroke fill markers"
					d="m 33.363855,58.000077 v 6.000151 h -6.247681 v 9.145178 h -9.116239 c 1.571055,2.979448 3.544014,6.050787 7.000089,9.460405 3.454242,2.851742 6.959613,5.658866 9.394259,9.394258 h 11.712463 l -0.10697,-2.999817 h -2.881478 v -3.274218 h 3.002918 v -2.725932 h -3.121257 v -3.000334 h 2.999817 v -9.781315 h -5.999634 v -9.218559 h 2.999817 v -2.999817 z m 0.138493,17.999935 a 3.4978311,3.4978311 0 0 1 3.497461,3.497978 3.4978311,3.4978311 0 0 1 -3.497461,3.497461 3.4978311,3.4978311 0 0 1 -3.497978,-3.497461 3.4978311,3.4978311 0 0 1 3.497978,-3.497978 z"
				/><path
					style="opacity:1;fill:#6a5141;fill-opacity:1;fill-rule:evenodd;stroke-width:0.3;stroke-linecap:round;stroke-miterlimit:4.1;paint-order:stroke fill markers"
					d="m 9.0000001,103.7587 h 5.7749419 v -5.758699 l -3,-2.999999 H 6.1438514 v 5.770298 z"
					id="path54"
				/><path
					style="opacity:1;fill:#6a5141;fill-opacity:1;fill-rule:evenodd;stroke-width:0.3;stroke-linecap:round;stroke-miterlimit:4.1;paint-order:stroke fill markers"
					d="m 30.712386,104.82899 2.789052,-2.78905 v -3.89155 h -3.839046 l -2.662391,2.66239 z"
					id="path55"
				/><path
					style="opacity:1;fill:#6a5141;fill-opacity:1;fill-rule:evenodd;stroke-width:0.3;stroke-linecap:round;stroke-miterlimit:4.1;paint-order:stroke fill markers"
					d="m 9.3178653,122 v -3.59629 l 3.0626447,-3.06264 3.730859,3.73086 L 13,122.18329 H 9.3252781 Z"
					id="path56"
				/><path
					style="opacity:1;fill:#9f2f2b;fill-opacity:1;fill-rule:evenodd;stroke-width:0.3;stroke-linecap:round;stroke-miterlimit:4.1;paint-order:stroke fill markers"
					d="m 19,119 h 8.000001 l 3.790156,-3.79015 v -6.86646 l -7.469325,-7.46933 H 20 l -7.665056,7.66506 v 3.75786 z"
					id="path57"
				/><path
					style="opacity:1;fill:#9f2f2b;fill-opacity:1;fill-rule:evenodd;stroke-width:0.3;stroke-linecap:round;stroke-miterlimit:4.1;paint-order:stroke fill markers"
					d="m 36.566125,110 h 15.610208 l -1.73205,3 v 6 H 36.584686 Z"
					id="path58"
				/><path
					style="opacity:1;fill:#9f2f2b;fill-opacity:1;fill-rule:evenodd;stroke-width:0.3;stroke-linecap:round;stroke-miterlimit:4.1;paint-order:stroke fill markers"
					d="m 85.000001,119 h -21 v -2 l 4,-4 h 8 c 5.923547,-0.74743 7.182556,-5.08885 9,-9 h -12 C 68.513389,103.28258 67.87499,99.548562 67,96.000003 V 81.000001 c 0.703177,-3.737376 2.964795,-6.624919 8,-8 h 16.000002 c 3.182444,0.498219 4.857267,2.140096 6.470125,4.328744 1.42074,1.927944 2.748443,4.260414 3.368873,7.671256 L 101,92.000003 H 79.331785 v 2.999999 H 107 c -0.20518,3.866201 -3.01152,8.602968 -7.999997,13.423138 -3.598757,3.47733 -7.77983,7.29664 -14.000002,10.57686 z"
					id="path59"
				/><path
					style="opacity:1;fill:#9f2f2b;fill-opacity:1;fill-rule:evenodd;stroke-width:0.3;stroke-linecap:round;stroke-miterlimit:4.1;paint-order:stroke fill markers"
					d="m 79.471582,70.000002 v -6.000001 h 5.528419 v -2.999999 h 5.955914 v 2.999999 h 4.044087 c 3.844775,1.806321 5.724368,4.884229 5.999998,9 h -3.36659 c -0.943673,-1.600219 -2.12427,-2.668754 -3.633409,-2.999999 z"
					id="path60"
				/><path
					style="opacity:1;fill:#9f2f2b;fill-opacity:1;fill-rule:evenodd;stroke-width:0.3;stroke-linecap:round;stroke-miterlimit:4.1;paint-order:stroke fill markers"
					d="m 82.561485,57.800464 h 11.675173 v 3.199538 C 97.283111,60.82206 99.346622,62.021569 101,63.795822 101.07263,60.677744 100.90157,57.671401 100,55 99.301405,53.857219 98.504995,52.743782 97.559163,51.675172 h -3.559162 v -2.67517 h -6.371232 v 2.767978 h -5.177822 z"
					id="path61"
				/><path
					style="opacity:1;fill:#272529;fill-opacity:1;fill-rule:evenodd;stroke-width:0.3;stroke-linecap:round;stroke-miterlimit:4.1;paint-order:stroke fill markers"
					d="M 34.394431,92.000003 H 46.106728 C 47.101586,94.35793 48.462211,96.582851 50,98.743348 H 38.51508 c -2.448611,-1.79695 -3.134851,-4.332958 -4.120649,-6.743345 z"
					id="path62"
				/><path
					style="opacity:1;fill:#272529;fill-opacity:1;fill-rule:evenodd;stroke-width:0.3;stroke-linecap:round;stroke-miterlimit:4.1;paint-order:stroke fill markers"
					d="m 58.353536,89.223423 -1.353534,2.585614 c 1.994756,0.15143 2.995853,1.698703 4.214772,2.939989 -0.42983,-2.200337 0.615189,-5.40978 -2.861238,-5.525603 z"
					id="path63"
				/><path
					style="opacity:1;fill:#9f2f2b;fill-opacity:1;fill-rule:evenodd;stroke-width:0.3;stroke-linecap:round;stroke-miterlimit:4.1;paint-order:stroke fill markers"
					d="m 57.000002,91.809037 1.353534,-2.585614 V 70.477959 l -3.263048,-6.477961 h -6.090486 v -2.999996 l -6.000044,-1.09e-4 V 67 h 6.218611 v 6.184731 l 3.059853,2.666777 V 80 h 2.886311 v 3.000002 h -2.997679 v 2.754056 h 2.951276 v 3.245943 h -2.923434 v 2.888628 z"
					id="path64"
				/><path
					style="opacity:1;fill:#c4b1a3;fill-opacity:1;fill-rule:evenodd;stroke-width:0.3;stroke-linecap:round;stroke-miterlimit:4.1;paint-order:stroke fill markers"
					d="M 13.345708,70.000002 H 24.334106 V 64.000001 C 11.984863,57.848257 9.453338,52.919457 3.8193609,47.604201 6.3816631,55.225024 8.4498702,62.971199 13.345708,70.000002 Z"
					id="path65"
				/><path
					style="opacity:1;fill:#9b8568;fill-opacity:1;fill-rule:evenodd;stroke-width:0.3;stroke-linecap:round;stroke-miterlimit:4.1;paint-order:stroke fill markers"
					d="m 54.292343,119 c 2.671204,-2.81613 5.465181,-3.54512 8.334105,-3 C 62.340309,113.91345 64.073772,112.54152 67,111.59165 V 109 c -6.564199,1.01888 -14.148129,1.0241 -12.707657,10 z"
					id="path66"
				/><path
					style="opacity:1;fill:#9b8568;fill-opacity:1;fill-rule:evenodd;stroke-width:0.3;stroke-linecap:round;stroke-miterlimit:4.1;paint-order:stroke fill markers"
					d="m 67,70.139742 h 3.000002 v -3.320614 h 2.987855 v 3.361846 h 2.761562 V 64.000001 H 67 Z"
					id="path67"
				/><path
					style="opacity:1;fill:#9b8568;fill-opacity:1;fill-rule:evenodd;stroke-width:0.3;stroke-linecap:round;stroke-miterlimit:4.1;paint-order:stroke fill markers"
					d="M 67.173503,61.000002 V 58 l 8.575916,-0.02709 V 45.897956 h -8.74654 v 5.893104 h 3.136863 v -2.791058 h 2.80874 V 55 H 64.000001 V 43.000001 h 15.350347 v 18.000001 z"
					id="path68"
				/><path
					style="opacity:1;fill:#9b8568;fill-opacity:1;fill-rule:evenodd;stroke-width:0.3;stroke-linecap:round;stroke-miterlimit:4.1;paint-order:stroke fill markers"
					d="m 110,40.259859 h 3 v -4.584686 c 6.81502,4.390094 10.6786,10.347846 11.34339,18.004641 C 120.55408,50.24474 117.04489,46.562501 110,46 Z"
					id="path69"
				/><path
					style="opacity:1;fill:#9b8568;fill-opacity:1;fill-rule:evenodd;stroke-width:0.3;stroke-linecap:round;stroke-miterlimit:4.1;paint-order:stroke fill markers"
					d="m 33,54.757298 v -2.979364 h 3.132992 V 49.218569 H 46 v 2.480617 H 43.000001 V 55 H 33 Z"
					id="path70"
				/><rect
					style="opacity:1;fill:#9b8568;fill-opacity:1;fill-rule:evenodd;stroke-width:0.297567;stroke-linecap:round;stroke-miterlimit:4.1;paint-order:stroke fill markers"
					id="rect70"
					width="12.790001"
					height="3"
					x="33.209999"
					y="43"
				/><path
					style="opacity:1;fill:#9b8568;fill-opacity:1;fill-rule:evenodd;stroke-width:0.3;stroke-linecap:round;stroke-miterlimit:4.1;paint-order:stroke fill markers"
					d="M 7.5074723,40.000002 H 30.738638 V 34 H 14.253697 Z"
					id="path71"
				/><path
					style="opacity:1;fill:#9b8568;fill-opacity:1;fill-rule:evenodd;stroke-width:0.3;stroke-linecap:round;stroke-miterlimit:4.1;paint-order:stroke fill markers"
					d="m 22,31.000001 3.619906,-3.280103 H 33 v 3.280103 z"
					id="path72"
				/><path
					style="opacity:1;fill:#9b8568;fill-opacity:1;fill-rule:evenodd;stroke-width:0.3;stroke-linecap:round;stroke-miterlimit:4.1;paint-order:stroke fill markers"
					d="m 49.000002,61.000002 h 6.13792 C 57.888957,54.452546 58.0608,49.048309 59,43.303944 55.034861,48.266561 51.054092,53.178449 46.121216,55 v 3 h 2.878786 z"
					id="path73"
				/><path
					style="opacity:1;fill:#9f2f2b;fill-opacity:1;fill-rule:evenodd;stroke-width:0.3;stroke-linecap:round;stroke-miterlimit:4.1;paint-order:stroke fill markers"
					d="M 30.199536,61.000002 V 51.74942 H 16.445475 L 26,61.000002 Z"
					id="path74"
				/><path
					style="opacity:1;fill:#9f2f2b;fill-opacity:1;fill-rule:evenodd;stroke-width:0.3;stroke-linecap:round;stroke-miterlimit:4.1;paint-order:stroke fill markers"
					d="m 17,43.000001 c 0,0 13,0 13,0 v 6.000001 h -7.522042 z"
					id="path75"
				/><rect
					style="opacity:1;fill:#9f2f2b;fill-opacity:1;fill-rule:evenodd;stroke-width:0.3;stroke-linecap:round;stroke-miterlimit:4.1;paint-order:stroke fill markers"
					id="rect75"
					width="6.3480277"
					height="5.9999967"
					x="97.540604"
					y="113.00001"
				/><path
					style="opacity:1;fill:#be2320;fill-opacity:1;fill-rule:evenodd;stroke-width:0.3;stroke-linecap:round;stroke-miterlimit:4.1;paint-order:stroke fill markers"
					d="m 107,107.09977 h 3.18097 L 113.08121,110 v 3 H 107 Z"
					id="path76"
				/><path
					style="opacity:1;fill:#be2320;fill-opacity:1;fill-rule:evenodd;stroke-width:0.3;stroke-linecap:round;stroke-miterlimit:4.1;paint-order:stroke fill markers"
					d="m 110,95.000002 h 6.23457 V 101 H 110 Z"
					id="path77"
				/><path
					style="opacity:1;fill:#be2320;fill-opacity:1;fill-rule:evenodd;stroke-width:0.3;stroke-linecap:round;stroke-miterlimit:4.1;paint-order:stroke fill markers"
					d="m 110.13147,82.000002 5.23686,0.464071 0.86624,0.535929 v 5.999999 H 110 v -6.999999 z"
					id="path78"
				/><path
					style="opacity:1;fill:#be2320;fill-opacity:1;fill-rule:evenodd;stroke-width:0.3;stroke-linecap:round;stroke-miterlimit:4.1;paint-order:stroke fill markers"
					d="M 116.1952,71.701611 114.43645,70.323492 110,69.811619 v 5.945602 h 6.1952 z"
					id="path79"
				/><path
					style="opacity:1;fill:#be2320;fill-opacity:1;fill-rule:evenodd;stroke-width:0.3;stroke-linecap:round;stroke-miterlimit:4.1;paint-order:stroke fill markers"
					d="m 110,64.000001 h 6.21345 V 61.000002 L 113.46521,58.360098 110,57.854788 Z"
					id="path80"
				/><path
					style="opacity:1;fill:#be2320;fill-opacity:1;fill-rule:evenodd;stroke-width:0.3;stroke-linecap:round;stroke-miterlimit:4.1;paint-order:stroke fill markers"
					d="M 94.237153,42.813591 H 106.96836 V 37 h 3.38623 V 31.000001 H 97.354987 V 34 l -3.354986,4 v 4.87703 z"
					id="path81"
				/><path
					style="opacity:1;fill:#be2320;fill-opacity:1;fill-rule:evenodd;stroke-width:0.3;stroke-linecap:round;stroke-miterlimit:4.1;paint-order:stroke fill markers"
					d="m 79.350348,40.162352 h 11.649654 v -3.701237 l 2.999999,-4.461113 v -4.000003 l -2e-6,-0.324826 H 82.153132 v 5.772623 l -2.821347,2.821345 z"
					id="path82"
				/><path
					style="opacity:1;fill:#be2320;fill-opacity:1;fill-rule:evenodd;stroke-width:0.3;stroke-linecap:round;stroke-miterlimit:4.1;paint-order:stroke fill markers"
					d="m 75.717846,35.778619 3.282156,-3.412487 0.0122,-4.690959 H 67.322495 v 5.484918 l -3.322505,3.322505 v 3.719132 h 11.717846 z"
					id="path83"
				/><path
					style="opacity:1;fill:#be2320;fill-opacity:1;fill-rule:evenodd;stroke-width:0.3;stroke-linecap:round;stroke-miterlimit:4.1;paint-order:stroke fill markers"
					d="M 49.139818,40.000002 V 36.198616 L 52.338435,33 v -5.241301 h 11.661566 v 4.554932 l -2.999999,3.294364 v 4.514982 z"
					id="path84"
				/><path
					style="opacity:1;fill:#be2320;fill-opacity:1;fill-rule:evenodd;stroke-width:0.3;stroke-linecap:round;stroke-miterlimit:4.1;paint-order:stroke fill markers"
					d="m 33,40.000002 v -5.846871 h 3.000002 l 0.0464,-6.433233 h 13.382165 v 3.478112 l -3.806238,4.961231 v 3.963736 z"
					id="path85"
				/><path
					style="opacity:1;fill:#9f2f2b;fill-opacity:1;fill-rule:evenodd;stroke-width:0.3;stroke-linecap:round;stroke-miterlimit:4.1;paint-order:stroke fill markers"
					d="M 97.559163,27.675173 H 108.17633 V 24 L 100.529,15.461717 h -2.932713 z"
					id="path86"
				/><path
					style="opacity:1;fill:#9f2f2b;fill-opacity:1;fill-rule:evenodd;stroke-width:0.3;stroke-linecap:round;stroke-miterlimit:4.1;paint-order:stroke fill markers"
					d="M 82.000002,24 V 18.301624 L 88,12.324826 h 6.000001 V 24 Z"
					id="path87"
				/><path
					style="opacity:1;fill:#9f2f2b;fill-opacity:1;fill-rule:evenodd;stroke-width:0.3;stroke-linecap:round;stroke-miterlimit:4.1;paint-order:stroke fill markers"
					d="M 61.451024,24 V 18.322433 H 58 v -2.992489 l 9.656611,-9.1768118 h 5.34339 v 6.3109048 h 3 v 6.032482 h 2.849186 v 5.512761 z"
					id="path88"
				/><path
					style="opacity:1;fill:#9f2f2b;fill-opacity:1;fill-rule:evenodd;stroke-width:0.3;stroke-linecap:round;stroke-miterlimit:4.1;paint-order:stroke fill markers"
					d="M 36.000002,24 V 20.361949 L 47.000001,9.4292342 h 5 V 15.448068 H 55 v 6.378727 h 3 V 24 Z"
					id="path89"
				/><path
					style="opacity:1;fill:#9f2f2b;fill-opacity:1;fill-rule:evenodd;stroke-width:0.3;stroke-linecap:round;stroke-miterlimit:4.1;paint-order:stroke fill markers"
					d="M 33,24 V 21.81367 H 29.806765 V 15.343069 H 27.706772 L 19.907192,24 Z"
					id="path90"
				/><path
					style="opacity:1;fill:#9f2f2b;fill-opacity:1;fill-rule:evenodd;stroke-width:0.3;stroke-linecap:round;stroke-miterlimit:4.1;paint-order:stroke fill markers"
					d="m 107,107.09977 v -3.16984 c 0,0 3.18097,3.16984 3.18097,3.16984 z"
					id="path91"
				/><path
					style="opacity:1;fill:#9f2f2b;fill-opacity:1;fill-rule:evenodd;stroke-width:0.3;stroke-linecap:round;stroke-miterlimit:4.1;paint-order:stroke fill markers"
					d="m 110,95.000002 v -3.15159 l 6.23457,3.15159 z"
					id="path92"
				/><rect
					style="opacity:1;fill:#9f2f2b;fill-opacity:1;fill-rule:evenodd;stroke-width:0.3;stroke-linecap:round;stroke-miterlimit:4.1;paint-order:stroke fill markers"
					id="rect92"
					width="2.9976799"
					height="2.8484111"
					x="103.92575"
					y="89"
				/><rect
					style="opacity:1;fill:#9f2f2b;fill-opacity:1;fill-rule:evenodd;stroke-width:0.3;stroke-linecap:round;stroke-miterlimit:4.1;paint-order:stroke fill markers"
					id="rect93"
					width="2.9999969"
					height="5.763339"
					x="104"
					y="80"
				/><rect
					style="opacity:1;fill:#9f2f2b;fill-opacity:1;fill-rule:evenodd;stroke-width:0.3;stroke-linecap:round;stroke-miterlimit:4.1;paint-order:stroke fill markers"
					id="rect94"
					width="2.9999969"
					height="8.7572193"
					x="104"
					y="67"
				/><rect
					style="opacity:1;fill:#9f2f2b;fill-opacity:1;fill-rule:evenodd;stroke-width:0.3;stroke-linecap:round;stroke-miterlimit:4.1;paint-order:stroke fill markers"
					id="rect95"
					width="3"
					height="9.2295771"
					x="104"
					y="54.770424"
				/><rect
					style="opacity:1;fill:#9f2f2b;fill-opacity:1;fill-rule:evenodd;stroke-width:0.360044;stroke-linecap:round;stroke-miterlimit:4.1;paint-order:stroke fill markers"
					id="rect96"
					width="3"
					height="5.6335588"
					x="104"
					y="46"
				/><rect
					style="opacity:1;fill:#9f2f2b;fill-opacity:1;fill-rule:evenodd;stroke-width:0.307298;stroke-linecap:round;stroke-miterlimit:4.1;paint-order:stroke fill markers"
					id="rect97"
					width="8.3737202"
					height="3.122973"
					x="82.450951"
					y="42.877029"
				/><path
					style="opacity:1;fill:#9f2f2b;fill-opacity:1;fill-rule:evenodd;stroke-width:0.3;stroke-linecap:round;stroke-miterlimit:4.1;paint-order:stroke fill markers"
					d="m 110,49.19232 c 1.29854,0.328049 2.24481,0.816217 3,1.391245 l 0.0452,1.049994 -3.0452,0.07875 z"
					id="path97"
				/><path
					style="opacity:1;fill:#9f2f2b;fill-opacity:1;fill-rule:evenodd;stroke-width:0.3;stroke-linecap:round;stroke-miterlimit:4.1;paint-order:stroke fill markers"
					d="M 113.46521,58.360098 110,54.886312 v 2.968476 z"
					id="path98"
				/><path
					style="opacity:1;fill:#9f2f2b;fill-opacity:1;fill-rule:evenodd;stroke-width:0.3;stroke-linecap:round;stroke-miterlimit:4.1;paint-order:stroke fill markers"
					d="m 110,69.811619 4.43645,0.511873 L 110.13803,67 Z"
					id="path99"
				/><path
					style="opacity:1;fill:#9f2f2b;fill-opacity:1;fill-rule:evenodd;stroke-width:0.3;stroke-linecap:round;stroke-miterlimit:4.1;paint-order:stroke fill markers"
					d="m 110,82.000002 5.36833,0.464071 -5.29592,-3.655301 z"
					id="path100"
				/><path
					style="opacity:1;fill:#9f2f2b;fill-opacity:1;fill-rule:evenodd;stroke-width:0.3;stroke-linecap:round;stroke-miterlimit:4.1;paint-order:stroke fill markers"
					d="M 101.0149,52.801681 V 46 h -3.444008 v 3.000002 z"
					id="path101"
				/></g
			><g id="g52"
				><rect
					style="opacity:1;fill:#000000;fill-opacity:1;fill-rule:evenodd;stroke-width:0.3;stroke-linecap:round;stroke-miterlimit:4.1;paint-order:stroke fill markers"
					id="rect14"
					width="11.000001"
					height="8.6009264"
					x="27.999998"
					y="75"
				/><circle
					style="opacity:1;fill:#eee3a4;fill-opacity:1;fill-rule:evenodd;stroke-width:0.3;stroke-linecap:round;stroke-miterlimit:4.1;paint-order:stroke fill markers"
					id="path14"
					cx="34.754871"
					cy="80.41658"
					r="2.5834222"
				/><path
					id="path12"
					style="opacity:1;fill:#be2320;fill-opacity:1;fill-rule:evenodd;stroke-width:0.3;stroke-linecap:round;stroke-miterlimit:4.1;paint-order:stroke fill markers"
					d="M 33.363855 58.000077 L 33.363855 64.000228 L 27.116174 64.000228 L 27.116174 73.145406 L 17.999935 73.145406 C 19.57099 76.124854 21.543949 79.196193 25.000024 82.605811 C 28.454266 85.457553 31.959637 88.264677 34.394283 92.000069 L 46.106746 92.000069 L 45.999776 89.000252 L 43.118298 89.000252 L 43.118298 85.726034 L 46.121216 85.726034 L 46.121216 83.000102 L 42.999959 83.000102 L 42.999959 79.999768 L 45.999776 79.999768 L 45.999776 70.218453 L 40.000142 70.218453 L 40.000142 60.999894 L 42.999959 60.999894 L 42.999959 58.000077 L 33.363855 58.000077 z M 33.502348 76.000012 A 3.4978311 3.4978311 0 0 1 36.999809 79.49799 A 3.4978311 3.4978311 0 0 1 33.502348 82.995451 A 3.4978311 3.4978311 0 0 1 30.00437 79.49799 A 3.4978311 3.4978311 0 0 1 33.502348 76.000012 z "
				/><path
					style="opacity:1;fill:#6a5141;fill-rule:evenodd;stroke-width:0.3;stroke-linecap:round;stroke-miterlimit:4.1;paint-order:stroke fill markers;fill-opacity:1"
					d="m 9.0000001,103.7587 h 5.7749419 v -5.758699 l -3,-2.999999 H 6.1438514 v 5.770298 z"
					id="path2"
				/><path
					style="opacity:1;fill:#6a5141;fill-opacity:1;fill-rule:evenodd;stroke-width:0.3;stroke-linecap:round;stroke-miterlimit:4.1;paint-order:stroke fill markers"
					d="m 30.712386,104.82899 2.789052,-2.78905 v -3.89155 h -3.839046 l -2.662391,2.66239 z"
					id="path3"
				/><path
					style="opacity:1;fill:#6a5141;fill-opacity:1;fill-rule:evenodd;stroke-width:0.3;stroke-linecap:round;stroke-miterlimit:4.1;paint-order:stroke fill markers"
					d="m 9.3178653,122 v -3.59629 l 3.0626447,-3.06264 3.730859,3.73086 L 13,122.18329 H 9.3252781 Z"
					id="path4"
				/><path
					style="opacity:1;fill:#9f2f2b;fill-opacity:1;fill-rule:evenodd;stroke-width:0.3;stroke-linecap:round;stroke-miterlimit:4.1;paint-order:stroke fill markers"
					d="m 19,119 h 8.000001 l 3.790156,-3.79015 v -6.86646 l -7.469325,-7.46933 H 20 l -7.665056,7.66506 v 3.75786 z"
					id="path5"
				/><path
					style="opacity:1;fill:#9f2f2b;fill-opacity:1;fill-rule:evenodd;stroke-width:0.3;stroke-linecap:round;stroke-miterlimit:4.1;paint-order:stroke fill markers"
					d="m 36.566125,110 h 15.610208 l -1.73205,3 v 6 H 36.584686 Z"
					id="path6"
				/><path
					style="opacity:1;fill:#9f2f2b;fill-opacity:1;fill-rule:evenodd;stroke-width:0.3;stroke-linecap:round;stroke-miterlimit:4.1;paint-order:stroke fill markers"
					d="m 85.000001,119 h -21 v -2 l 4,-4 h 8 c 5.923547,-0.74743 7.182556,-5.08885 9,-9 h -12 C 68.513389,103.28258 67.87499,99.548562 67,96.000003 V 81.000001 c 0.703177,-3.737376 2.964795,-6.624919 8,-8 h 16.000002 c 3.182444,0.498219 4.857267,2.140096 6.470125,4.328744 1.42074,1.927944 2.748443,4.260414 3.368873,7.671256 L 101,92.000003 H 79.331785 v 2.999999 H 107 c -0.20518,3.866201 -3.01152,8.602968 -7.999997,13.423138 -3.598757,3.47733 -7.77983,7.29664 -14.000002,10.57686 z"
					id="path7"
				/><path
					style="opacity:1;fill:#9f2f2b;fill-opacity:1;fill-rule:evenodd;stroke-width:0.3;stroke-linecap:round;stroke-miterlimit:4.1;paint-order:stroke fill markers"
					d="m 79.471582,70.000002 v -6.000001 h 5.528419 v -2.999999 h 5.955914 v 2.999999 h 4.044087 c 3.844775,1.806321 5.724368,4.884229 5.999998,9 h -3.36659 c -0.943673,-1.600219 -2.12427,-2.668754 -3.633409,-2.999999 z"
					id="path8"
				/><path
					style="opacity:1;fill:#9f2f2b;fill-opacity:1;fill-rule:evenodd;stroke-width:0.3;stroke-linecap:round;stroke-miterlimit:4.1;paint-order:stroke fill markers"
					d="m 82.561485,57.800464 h 11.675173 v 3.199538 C 97.283111,60.82206 99.346622,62.021569 101,63.795822 101.07263,60.677744 100.90157,57.671401 100,55 99.301405,53.857219 98.504995,52.743782 97.559163,51.675172 h -3.559162 v -2.67517 h -6.371232 v 2.767978 h -5.177822 z"
					id="path9"
				/><path
					style="opacity:1;fill:#272529;fill-opacity:1;fill-rule:evenodd;stroke-width:0.3;stroke-linecap:round;stroke-miterlimit:4.1;paint-order:stroke fill markers"
					d="M 34.394431,92.000003 H 46.106728 C 47.101586,94.35793 48.462211,96.582851 50,98.743348 H 38.51508 c -2.448611,-1.79695 -3.134851,-4.332958 -4.120649,-6.743345 z"
					id="path10"
				/><path
					style="opacity:1;fill:#272529;fill-opacity:1;fill-rule:evenodd;stroke-width:0.3;stroke-linecap:round;stroke-miterlimit:4.1;paint-order:stroke fill markers"
					d="m 58.353536,89.223423 -1.353534,2.585614 c 1.994756,0.15143 2.995853,1.698703 4.214772,2.939989 -0.42983,-2.200337 0.615189,-5.40978 -2.861238,-5.525603 z"
					id="path11"
				/><path
					style="opacity:1;fill:#9f2f2b;fill-opacity:1;fill-rule:evenodd;stroke-width:0.3;stroke-linecap:round;stroke-miterlimit:4.1;paint-order:stroke fill markers"
					d="m 57.000002,91.809037 1.353534,-2.585614 V 70.477959 l -3.263048,-6.477961 h -6.090486 v -2.999996 l -6.000044,-1.09e-4 V 67 h 6.218611 v 6.184731 l 3.059853,2.666777 V 80 h 2.886311 v 3.000002 h -2.997679 v 2.754056 h 2.951276 v 3.245943 h -2.923434 v 2.888628 z"
					id="path15"
				/><path
					style="opacity:1;fill:#c4b1a3;fill-opacity:1;fill-rule:evenodd;stroke-width:0.3;stroke-linecap:round;stroke-miterlimit:4.1;paint-order:stroke fill markers"
					d="M 13.345708,70.000002 H 24.334106 V 64.000001 C 11.984863,57.848257 9.453338,52.919457 3.8193609,47.604201 6.3816631,55.225024 8.4498702,62.971199 13.345708,70.000002 Z"
					id="path16"
				/><path
					style="opacity:1;fill:#9b8568;fill-opacity:1;fill-rule:evenodd;stroke-width:0.3;stroke-linecap:round;stroke-miterlimit:4.1;paint-order:stroke fill markers"
					d="m 54.292343,119 c 2.671204,-2.81613 5.465181,-3.54512 8.334105,-3 C 62.340309,113.91345 64.073772,112.54152 67,111.59165 V 109 c -6.564199,1.01888 -14.148129,1.0241 -12.707657,10 z"
					id="path17"
				/><path
					style="opacity:1;fill:#9b8568;fill-opacity:1;fill-rule:evenodd;stroke-width:0.3;stroke-linecap:round;stroke-miterlimit:4.1;paint-order:stroke fill markers"
					d="m 67,70.139742 h 3.000002 v -3.320614 h 2.987855 v 3.361846 h 2.761562 V 64.000001 H 67 Z"
					id="path18"
				/><path
					style="opacity:1;fill:#9b8568;fill-opacity:1;fill-rule:evenodd;stroke-width:0.3;stroke-linecap:round;stroke-miterlimit:4.1;paint-order:stroke fill markers"
					d="M 67.173503,61.000002 V 58 l 8.575916,-0.02709 V 45.897956 h -8.74654 v 5.893104 h 3.136863 v -2.791058 h 2.80874 V 55 H 64.000001 V 43.000001 h 15.350347 v 18.000001 z"
					id="path19"
				/><path
					style="opacity:1;fill:#9b8568;fill-opacity:1;fill-rule:evenodd;stroke-width:0.3;stroke-linecap:round;stroke-miterlimit:4.1;paint-order:stroke fill markers"
					d="m 110,40.259859 h 3 v -4.584686 c 6.81502,4.390094 10.6786,10.347846 11.34339,18.004641 C 120.55408,50.24474 117.04489,46.562501 110,46 Z"
					id="path20"
				/><path
					style="opacity:1;fill:#9b8568;fill-opacity:1;fill-rule:evenodd;stroke-width:0.3;stroke-linecap:round;stroke-miterlimit:4.1;paint-order:stroke fill markers"
					d="m 33,54.757298 v -2.979364 h 3.132992 V 49.218569 H 46 v 2.480617 H 43.000001 V 55 H 33 Z"
					id="path21"
				/><rect
					style="opacity:1;fill:#9b8568;fill-opacity:1;fill-rule:evenodd;stroke-width:0.297567;stroke-linecap:round;stroke-miterlimit:4.1;paint-order:stroke fill markers"
					id="rect21"
					width="12.790001"
					height="3"
					x="33.209999"
					y="43"
				/><path
					style="opacity:1;fill:#9b8568;fill-opacity:1;fill-rule:evenodd;stroke-width:0.3;stroke-linecap:round;stroke-miterlimit:4.1;paint-order:stroke fill markers"
					d="M 7.5074723,40.000002 H 30.738638 V 34 H 14.253697 Z"
					id="path22"
				/><path
					style="opacity:1;fill:#9b8568;fill-opacity:1;fill-rule:evenodd;stroke-width:0.3;stroke-linecap:round;stroke-miterlimit:4.1;paint-order:stroke fill markers"
					d="m 22,31.000001 3.619906,-3.280103 H 33 v 3.280103 z"
					id="path23"
				/><path
					style="opacity:1;fill:#9b8568;fill-opacity:1;fill-rule:evenodd;stroke-width:0.3;stroke-linecap:round;stroke-miterlimit:4.1;paint-order:stroke fill markers"
					d="m 49.000002,61.000002 h 6.13792 C 57.888957,54.452546 58.0608,49.048309 59,43.303944 55.034861,48.266561 51.054092,53.178449 46.121216,55 v 3 h 2.878786 z"
					id="path24"
				/><path
					style="opacity:1;fill:#9f2f2b;fill-opacity:1;fill-rule:evenodd;stroke-width:0.3;stroke-linecap:round;stroke-miterlimit:4.1;paint-order:stroke fill markers"
					d="M 30.199536,61.000002 V 51.74942 H 16.445475 L 26,61.000002 Z"
					id="path25"
				/><path
					style="opacity:1;fill:#9f2f2b;fill-opacity:1;fill-rule:evenodd;stroke-width:0.3;stroke-linecap:round;stroke-miterlimit:4.1;paint-order:stroke fill markers"
					d="m 17,43.000001 c 0,0 13,0 13,0 v 6.000001 h -7.522042 z"
					id="path26"
				/><rect
					style="opacity:1;fill:#9f2f2b;fill-opacity:1;fill-rule:evenodd;stroke-width:0.3;stroke-linecap:round;stroke-miterlimit:4.1;paint-order:stroke fill markers"
					id="rect26"
					width="6.3480277"
					height="5.9999967"
					x="97.540604"
					y="113.00001"
				/><path
					style="opacity:1;fill:#be2320;fill-opacity:1;fill-rule:evenodd;stroke-width:0.3;stroke-linecap:round;stroke-miterlimit:4.1;paint-order:stroke fill markers"
					d="m 107,107.09977 h 3.18097 L 113.08121,110 v 3 H 107 Z"
					id="path27"
				/><path
					style="opacity:1;fill:#be2320;fill-opacity:1;fill-rule:evenodd;stroke-width:0.3;stroke-linecap:round;stroke-miterlimit:4.1;paint-order:stroke fill markers"
					d="m 110,95.000002 h 6.23457 V 101 H 110 Z"
					id="path28"
				/><path
					style="opacity:1;fill:#be2320;fill-opacity:1;fill-rule:evenodd;stroke-width:0.3;stroke-linecap:round;stroke-miterlimit:4.1;paint-order:stroke fill markers"
					d="m 110.13147,82.000002 5.23686,0.464071 0.86624,0.535929 v 5.999999 H 110 v -6.999999 z"
					id="path29"
				/><path
					style="opacity:1;fill:#be2320;fill-opacity:1;fill-rule:evenodd;stroke-width:0.3;stroke-linecap:round;stroke-miterlimit:4.1;paint-order:stroke fill markers"
					d="M 116.1952,71.701611 114.43645,70.323492 110,69.811619 v 5.945602 h 6.1952 z"
					id="path30"
				/><path
					style="opacity:1;fill:#be2320;fill-opacity:1;fill-rule:evenodd;stroke-width:0.3;stroke-linecap:round;stroke-miterlimit:4.1;paint-order:stroke fill markers"
					d="m 110,64.000001 h 6.21345 V 61.000002 L 113.46521,58.360098 110,57.854788 Z"
					id="path31"
				/><path
					style="opacity:1;fill:#be2320;fill-opacity:1;fill-rule:evenodd;stroke-width:0.3;stroke-linecap:round;stroke-miterlimit:4.1;paint-order:stroke fill markers"
					d="M 94.237153,42.813591 H 106.96836 V 37 h 3.38623 V 31.000001 H 97.354987 V 34 l -3.354986,4 v 4.87703 z"
					id="path32"
				/><path
					style="opacity:1;fill:#be2320;fill-opacity:1;fill-rule:evenodd;stroke-width:0.3;stroke-linecap:round;stroke-miterlimit:4.1;paint-order:stroke fill markers"
					d="m 79.350348,40.162352 h 11.649654 v -3.701237 l 2.999999,-4.461113 v -4.000003 l -2e-6,-0.324826 H 82.153132 v 5.772623 l -2.821347,2.821345 z"
					id="path33"
				/><path
					style="opacity:1;fill:#be2320;fill-opacity:1;fill-rule:evenodd;stroke-width:0.3;stroke-linecap:round;stroke-miterlimit:4.1;paint-order:stroke fill markers"
					d="m 75.717846,35.778619 3.282156,-3.412487 0.0122,-4.690959 H 67.322495 v 5.484918 l -3.322505,3.322505 v 3.719132 h 11.717846 z"
					id="path34"
				/><path
					style="opacity:1;fill:#be2320;fill-opacity:1;fill-rule:evenodd;stroke-width:0.3;stroke-linecap:round;stroke-miterlimit:4.1;paint-order:stroke fill markers"
					d="M 49.139818,40.000002 V 36.198616 L 52.338435,33 v -5.241301 h 11.661566 v 4.554932 l -2.999999,3.294364 v 4.514982 z"
					id="path35"
				/><path
					style="opacity:1;fill:#be2320;fill-opacity:1;fill-rule:evenodd;stroke-width:0.3;stroke-linecap:round;stroke-miterlimit:4.1;paint-order:stroke fill markers"
					d="m 33,40.000002 v -5.846871 h 3.000002 l 0.0464,-6.433233 h 13.382165 v 3.478112 l -3.806238,4.961231 v 3.963736 z"
					id="path36"
				/><path
					style="opacity:1;fill:#9f2f2b;fill-opacity:1;fill-rule:evenodd;stroke-width:0.3;stroke-linecap:round;stroke-miterlimit:4.1;paint-order:stroke fill markers"
					d="M 97.559163,27.675173 H 108.17633 V 24 L 100.529,15.461717 h -2.932713 z"
					id="path37"
				/><path
					style="opacity:1;fill:#9f2f2b;fill-opacity:1;fill-rule:evenodd;stroke-width:0.3;stroke-linecap:round;stroke-miterlimit:4.1;paint-order:stroke fill markers"
					d="M 82.000002,24 V 18.301624 L 88,12.324826 h 6.000001 V 24 Z"
					id="path38"
				/><path
					style="opacity:1;fill:#9f2f2b;fill-opacity:1;fill-rule:evenodd;stroke-width:0.3;stroke-linecap:round;stroke-miterlimit:4.1;paint-order:stroke fill markers"
					d="M 61.451024,24 V 18.322433 H 58 v -2.992489 l 9.656611,-9.1768118 h 5.34339 v 6.3109048 h 3 v 6.032482 h 2.849186 v 5.512761 z"
					id="path39"
				/><path
					style="opacity:1;fill:#9f2f2b;fill-opacity:1;fill-rule:evenodd;stroke-width:0.3;stroke-linecap:round;stroke-miterlimit:4.1;paint-order:stroke fill markers"
					d="M 36.000002,24 V 20.361949 L 47.000001,9.4292342 h 5 V 15.448068 H 55 v 6.378727 h 3 V 24 Z"
					id="path40"
				/><path
					style="opacity:1;fill:#9f2f2b;fill-opacity:1;fill-rule:evenodd;stroke-width:0.3;stroke-linecap:round;stroke-miterlimit:4.1;paint-order:stroke fill markers"
					d="M 33,24 V 21.81367 H 29.806765 V 15.343069 H 27.706772 L 19.907192,24 Z"
					id="path41"
				/><path
					style="opacity:1;fill:#9f2f2b;fill-opacity:1;fill-rule:evenodd;stroke-width:0.3;stroke-linecap:round;stroke-miterlimit:4.1;paint-order:stroke fill markers"
					d="m 107,107.09977 v -3.16984 c 0,0 3.18097,3.16984 3.18097,3.16984 z"
					id="path42"
				/><path
					style="opacity:1;fill:#9f2f2b;fill-opacity:1;fill-rule:evenodd;stroke-width:0.3;stroke-linecap:round;stroke-miterlimit:4.1;paint-order:stroke fill markers"
					d="m 110,95.000002 v -3.15159 l 6.23457,3.15159 z"
					id="path43"
				/><rect
					style="opacity:1;fill:#9f2f2b;fill-opacity:1;fill-rule:evenodd;stroke-width:0.3;stroke-linecap:round;stroke-miterlimit:4.1;paint-order:stroke fill markers"
					id="rect43"
					width="2.9976799"
					height="2.8484111"
					x="103.92575"
					y="89"
				/><rect
					style="opacity:1;fill:#9f2f2b;fill-opacity:1;fill-rule:evenodd;stroke-width:0.3;stroke-linecap:round;stroke-miterlimit:4.1;paint-order:stroke fill markers"
					id="rect44"
					width="2.9999969"
					height="5.763339"
					x="104"
					y="80"
				/><rect
					style="opacity:1;fill:#9f2f2b;fill-opacity:1;fill-rule:evenodd;stroke-width:0.3;stroke-linecap:round;stroke-miterlimit:4.1;paint-order:stroke fill markers"
					id="rect45"
					width="2.9999969"
					height="8.7572193"
					x="104"
					y="67"
				/><rect
					style="opacity:1;fill:#9f2f2b;fill-opacity:1;fill-rule:evenodd;stroke-width:0.3;stroke-linecap:round;stroke-miterlimit:4.1;paint-order:stroke fill markers"
					id="rect46"
					width="3"
					height="9.2295771"
					x="104"
					y="54.770424"
				/><rect
					style="opacity:1;fill:#9f2f2b;fill-opacity:1;fill-rule:evenodd;stroke-width:0.360044;stroke-linecap:round;stroke-miterlimit:4.1;paint-order:stroke fill markers"
					id="rect47"
					width="3"
					height="5.6335588"
					x="104"
					y="46"
				/><rect
					style="opacity:1;fill:#9f2f2b;fill-opacity:1;fill-rule:evenodd;stroke-width:0.307298;stroke-linecap:round;stroke-miterlimit:4.1;paint-order:stroke fill markers"
					id="rect48"
					width="8.3737202"
					height="3.122973"
					x="82.450951"
					y="42.877029"
				/><path
					style="opacity:1;fill:#9f2f2b;fill-opacity:1;fill-rule:evenodd;stroke-width:0.3;stroke-linecap:round;stroke-miterlimit:4.1;paint-order:stroke fill markers"
					d="m 110,49.19232 c 1.29854,0.328049 2.24481,0.816217 3,1.391245 l 0.0452,1.049994 -3.0452,0.07875 z"
					id="path48"
				/><path
					style="opacity:1;fill:#9f2f2b;fill-opacity:1;fill-rule:evenodd;stroke-width:0.3;stroke-linecap:round;stroke-miterlimit:4.1;paint-order:stroke fill markers"
					d="M 113.46521,58.360098 110,54.886312 v 2.968476 z"
					id="path49"
				/><path
					style="opacity:1;fill:#9f2f2b;fill-opacity:1;fill-rule:evenodd;stroke-width:0.3;stroke-linecap:round;stroke-miterlimit:4.1;paint-order:stroke fill markers"
					d="m 110,69.811619 4.43645,0.511873 L 110.13803,67 Z"
					id="path50"
				/><path
					style="opacity:1;fill:#9f2f2b;fill-opacity:1;fill-rule:evenodd;stroke-width:0.3;stroke-linecap:round;stroke-miterlimit:4.1;paint-order:stroke fill markers"
					d="m 110,82.000002 5.36833,0.464071 -5.29592,-3.655301 z"
					id="path51"
				/><path
					style="opacity:1;fill:#9f2f2b;fill-opacity:1;fill-rule:evenodd;stroke-width:0.3;stroke-linecap:round;stroke-miterlimit:4.1;paint-order:stroke fill markers"
					d="M 101.0149,52.801681 V 46 h -3.444008 v 3.000002 z"
					id="path52"
				/></g
			></g
		><metadata id="metadata102"
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
