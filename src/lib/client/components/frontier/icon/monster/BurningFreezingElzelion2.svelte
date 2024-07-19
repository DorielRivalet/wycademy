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
				id="filter51675"
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
					id="feComposite51661"
				/><feColorMatrix
					in="composite1"
					values="1"
					type="saturate"
					result="colormatrix1"
					id="feColorMatrix51663"
				/><feFlood
					flood-opacity="1"
					flood-color="rgb(0,0,0)"
					result="flood1"
					id="feFlood51665"
				/><feBlend
					in="flood1"
					in2="colormatrix1"
					mode="multiply"
					result="blend1"
					id="feBlend51667"
				/><feBlend
					in2="blend1"
					mode="screen"
					result="blend2"
					id="feBlend51669"
				/><feColorMatrix
					in="blend2"
					values="1"
					type="saturate"
					result="colormatrix2"
					id="feColorMatrix51671"
				/><feComposite
					in="colormatrix2"
					in2="SourceGraphic"
					operator="in"
					k2="1"
					result="composite2"
					id="feComposite51673"
				/></filter
			></defs
		>
		<!-- svelte-ignore a11y-no-static-element-interactions -->
		<!-- svelte-ignore a11y-mouse-events-have-key-events -->
		<g id="layer1"
			><g
				id="g51296"
				style="filter:url(#filter51675)"
				transform="translate(1.0583333,1.5875)"
				><path
					style="opacity:1;fill:#000000;fill-opacity:1;fill-rule:evenodd;stroke:none;stroke-width:3;stroke-linecap:round;stroke-linejoin:round;stroke-miterlimit:3;stroke-opacity:0.498674;paint-order:stroke fill markers"
					d="m 55.827083,73.289582 c -0.869057,-0.02016 -1.493838,0.177859 -1.058334,1.322917 l 2.910417,3.439583 c 0.693293,0.256129 1.061491,0.01513 1.058333,-0.79375 -0.78414,-1.475328 -1.74437,-2.806363 -2.910416,-3.96875 z"
					id="path51092"
				/><path
					style="opacity:1;fill:#000000;fill-opacity:1;fill-rule:evenodd;stroke:none;stroke-width:3;stroke-linecap:round;stroke-linejoin:round;stroke-miterlimit:3;stroke-opacity:0.498674;paint-order:stroke fill markers"
					d="m 69.320832,77.522916 2.645834,-3.96875 h 1.5875 c 0,0 0,2.645833 -0.264584,2.645833 -0.264583,0 -3.175,2.38125 -3.175,2.38125 h -1.058333 z"
					id="path51094"
				/><ellipse
					style="opacity:1;fill:#ffcc00;fill-opacity:1;fill-rule:evenodd;stroke:none;stroke-width:3.28633;stroke-linecap:round;stroke-linejoin:round;stroke-miterlimit:3;stroke-opacity:0.498674;paint-order:stroke fill markers"
					id="ellipse51096"
					cx="81.353699"
					cy="63.256485"
					rx="0.79374874"
					ry="1.7197917"
					transform="rotate(8.8500375)"
				/><path
					style="opacity:1;fill:#3f3432;fill-opacity:1;fill-rule:evenodd;stroke:none;stroke-width:3;stroke-linecap:round;stroke-linejoin:round;stroke-miterlimit:3;stroke-opacity:0.498674;paint-order:stroke fill markers"
					d="m 65.087499,80.697916 h 1.322918 l 6.35,-8.466667 2.910415,-5.55625 0.264584,-3.439583 -1.852084,0.264583 0.264584,-2.645833 -5.291667,0.529167 -0.79375,-1.5875 -2.910416,-2.38125 -0.264584,21.431249 z"
					id="path51098"
				/><g id="g51128"
					><path
						style="opacity:1;fill:#8e5e4c;fill-opacity:1;fill-rule:evenodd;stroke:none;stroke-width:3;stroke-linecap:round;stroke-linejoin:round;stroke-miterlimit:3;stroke-opacity:0.498674;paint-order:stroke fill markers"
						d="m 86.518749,116.68125 c -1.587512,-0.58073 -3.601256,-0.81832 -3.96875,-2.38125 v -1.5875 h 2.910417 v 1.85208 c 0.06518,0.64755 0.626836,1.39524 1.058333,2.11667 z"
						id="path51100"
					/><path
						style="opacity:1;fill:#8e5e4c;fill-opacity:1;fill-rule:evenodd;stroke:none;stroke-width:3;stroke-linecap:round;stroke-linejoin:round;stroke-miterlimit:3;stroke-opacity:0.498674;paint-order:stroke fill markers"
						d="M 81.491666,116.68125 C 79.904154,116.10052 77.89041,115.86293 77.522916,114.3 v -1.5875 h 2.910417 v 1.85208 c 0.06518,0.64755 0.626836,1.39524 1.058333,2.11667 z"
						id="path51102"
					/><path
						style="opacity:1;fill:#3f3432;fill-opacity:1;fill-rule:evenodd;stroke:none;stroke-width:3;stroke-linecap:round;stroke-linejoin:round;stroke-miterlimit:3;stroke-opacity:0.498674;paint-order:stroke fill markers"
						d="m 71.966666,111.38958 h 9.260416 c 2.462524,-0.80672 3.878215,-2.17445 4.497917,-3.96875 2e-6,-1.87546 10e-7,-3.45988 0,-5.02708 -0.767855,-2.439622 -2.274271,-2.694114 -3.704167,-3.175001 h -2.116666 c -0.992106,0.216762 -1.975265,0.458897 -2.645834,1.587501 z"
						id="path51104"
					/><path
						style="opacity:1;fill:#3f3432;fill-opacity:1;fill-rule:evenodd;stroke:none;stroke-width:3;stroke-linecap:round;stroke-linejoin:round;stroke-miterlimit:3;stroke-opacity:0.498674;paint-order:stroke fill markers"
						d="m 80.433332,96.572915 c 0.972338,-2.997306 2.625253,-5.039054 4.233334,-7.143749 l 5.291666,-6.879167 3.704167,-4.233333 7.143751,-1.322917 c 1.45056,0.68151 2.35655,2.432517 3.43958,3.96875 -3.56067,6.171802 23.74786,40.507491 -8.995831,17.4625 l -5.820833,2.381251 c -2.056502,-3.669784 -5.527078,-3.949377 -8.995834,-4.233335 z"
						id="path51106"
					/><path
						style="opacity:1;fill:#8d482f;fill-opacity:1;fill-rule:evenodd;stroke:none;stroke-width:3;stroke-linecap:round;stroke-linejoin:round;stroke-miterlimit:3;stroke-opacity:0.498674;paint-order:stroke fill markers"
						d="m 118.00417,114.3 -1.05834,-4.23333 -21.695831,-11.641671 h -1.5875 c 0.262843,-0.866115 0.694972,-1.41201 1.322916,-1.5875 L 94.45625,94.720833 c -1.078401,-0.0094 -2.141602,0.497009 -2.910418,1.058332 -0.179593,-2.49208 -0.144259,-4.973207 0.79375,-7.408333 -0.613623,0.104295 -1.249469,0.247337 -2.116666,0.79375 -0.524307,-2.296921 -0.195946,-4.41385 -0.264584,-6.614583 l -5.291666,6.879167 c 4.302522,4.237807 4.633499,7.817401 4.7625,11.377084 1.204839,2.61789 1.646701,5.22277 1.5875,7.9375 -3.614021,1.88079 -3.465096,5.19727 -3.439584,8.46667 1.491009,-2.52796 3.259729,-2.58082 5.027084,-2.64584 z"
						id="path51108"
					/><path
						style="opacity:1;fill:#e16826;fill-opacity:1;fill-rule:evenodd;stroke:none;stroke-width:3;stroke-linecap:round;stroke-linejoin:round;stroke-miterlimit:3;stroke-opacity:0.498674;paint-order:stroke fill markers"
						d="m 92.604166,106.89167 5.820833,-0.79375 c -2.882144,-2.06108 -5.232847,-4.34444 -6.35,-7.143755 l 3.704166,0.529167 c -2.249288,-5.972718 -1.83405,-7.090775 -2.38125,-11.641666 v -1.852084 l 0.264584,-7.9375 8.731251,-3.704166 -1.85208,2.645833 c -1.713612,2.351406 -2.111379,3.912794 -2.645838,5.55625 l 0.529167,0.529167 C 105.26648,81.972203 110.07775,77.694038 114.3,72.495832 c -0.42102,4.792541 1.658,7.57022 -4.7625,17.197917 7.68921,0.238301 8.76068,-5.073539 12.43542,-8.202083 0.003,6.829854 1.11657,13.576611 -7.9375,20.637504 2.95506,0.58241 5.95137,-0.97405 8.99583,-5.027087 0.4195,8.194037 -4.81578,12.844127 -9.70069,14.364157 -7.5098,2.3368 -18.613076,-1.12515 -20.726394,-4.57457 z"
						id="path51110"
					/><path
						style="opacity:1;fill:#fcd26f;fill-opacity:1;fill-rule:evenodd;stroke:none;stroke-width:3;stroke-linecap:round;stroke-linejoin:round;stroke-miterlimit:3;stroke-opacity:0.498674;paint-order:stroke fill markers"
						d="m 111.38958,114.3 -7.67291,-13.49375 4.7625,1.05833 -8.995838,-10.847914 v -1.058334 h 5.820838 l -7.408338,-7.408333 -4.497917,3.439583 v 1.852084 l 3.96875,-2.116667 v 5.820833 l -1.322916,0.529167 v 2.38125 l 1.5875,-0.79375 1.5875,3.96875 -1.058334,1.058333 -0.264583,0.264583 8.466668,15.610415 c 0.97161,0.49841 1.4011,0.27807 1.5875,-0.26458 l -5.55625,-10.05417 1.05833,-0.52916 6.35,11.1125 c 0.92495,0.56612 1.40707,0.30147 1.5875,-0.52917 z"
						id="path51112"
					/><path
						style="opacity:1;fill:#c15333;fill-opacity:1;fill-rule:evenodd;stroke:none;stroke-width:3;stroke-linecap:round;stroke-linejoin:round;stroke-miterlimit:3;stroke-opacity:0.498674;paint-order:stroke fill markers"
						d="M 97.895832,121.70833 H 119.0625 L 118.00417,114.3 92.604166,114.56458 Z"
						id="path51114"
					/><path
						style="opacity:1;fill:#e16826;fill-opacity:1;fill-rule:evenodd;stroke:none;stroke-width:3;stroke-linecap:round;stroke-linejoin:round;stroke-miterlimit:3;stroke-opacity:0.498674;paint-order:stroke fill markers"
						d="m 92.604166,114.56458 c 4.971787,0.64678 5.259311,5.60897 5.820833,10.31875 -2.096374,-1.61152 -4.200727,-3.25582 -5.820833,-2.91041 -2.770137,-4.64958 -1.427595,-6.92718 0,-7.40834 z"
						id="path51116"
					/><path
						style="opacity:1;fill:#e16826;fill-opacity:1;fill-rule:evenodd;stroke:none;stroke-width:3;stroke-linecap:round;stroke-linejoin:round;stroke-miterlimit:3;stroke-opacity:0.498674;paint-order:stroke fill markers"
						d="m 118.00417,114.3 c -0.74678,1.69157 -3.47751,2.90087 -0.26459,7.40833 3.15898,0.51491 4.72038,2.08741 6.61459,3.43959 -1.39132,-3.53199 0.63646,-7.38902 -6.35,-10.84792 z"
						id="path51118"
					/><path
						style="opacity:1;fill:#e16826;fill-opacity:1;fill-rule:evenodd;stroke:none;stroke-width:3;stroke-linecap:round;stroke-linejoin:round;stroke-miterlimit:3;stroke-opacity:0.498674;paint-order:stroke fill markers"
						d="m 109.80208,114.56458 c 4.97178,0.64678 5.25931,5.60897 5.82083,10.31875 -2.09637,-1.61152 -4.20073,-3.25582 -5.82083,-2.91041 -3.10085,-3.64508 -1.45099,-6.46381 0,-7.40834 z"
						id="path51120"
					/><path
						style="opacity:1;fill:#e16826;fill-opacity:1;fill-rule:evenodd;stroke:none;stroke-width:3;stroke-linecap:round;stroke-linejoin:round;stroke-miterlimit:3;stroke-opacity:0.498674;paint-order:stroke fill markers"
						d="m 100.80625,114.56458 c 4.97178,0.64678 5.25931,5.60897 5.82083,10.31875 -2.09637,-1.61152 -4.20073,-3.25582 -5.82083,-2.91041 -3.098511,-3.63296 -1.359878,-5.99142 0,-7.40834 z"
						id="path51122"
					/><path
						style="opacity:1;fill:#8d482f;fill-opacity:1;fill-rule:evenodd;stroke:none;stroke-width:3;stroke-linecap:round;stroke-linejoin:round;stroke-miterlimit:3;stroke-opacity:0.498674;paint-order:stroke fill markers"
						d="m 82.285416,87.841666 c 2.96883,-5.267156 7.532591,-8.603954 11.906249,-12.170834 -3.341468,-0.05379 -6.413677,-0.775837 -8.995833,-2.645833 -2.394502,4.414404 -4.794567,8.829064 -6.879166,13.229167 z"
						id="path51124"
					/><path
						style="opacity:1;fill:#3f3432;fill-opacity:1;fill-rule:evenodd;stroke:none;stroke-width:3;stroke-linecap:round;stroke-linejoin:round;stroke-miterlimit:3;stroke-opacity:0.498674;paint-order:stroke fill markers"
						d="m 78.581249,95.249999 c 0.945615,-2.682864 2.244935,-5.104622 3.704167,-7.408333 -0.774373,-1.121037 -1.957381,-1.801164 -3.96875,-1.5875 0.04458,3.008522 -0.331133,8.228342 0.264583,8.995833 z"
						id="path51126"
					/></g
				><g id="g51158" transform="matrix(-1,0,0,1,128.05791,0)"
					><path
						style="opacity:1;fill:#4b6b8e;fill-opacity:1;fill-rule:evenodd;stroke:none;stroke-width:3;stroke-linecap:round;stroke-linejoin:round;stroke-miterlimit:3;stroke-opacity:0.498674;paint-order:stroke fill markers"
						d="m 86.518749,116.68125 c -1.587512,-0.58073 -3.601256,-0.81832 -3.96875,-2.38125 v -1.5875 h 2.910417 v 1.85208 c 0.06518,0.64755 0.626836,1.39524 1.058333,2.11667 z"
						id="path51130"
					/><path
						style="opacity:1;fill:#4b6b8e;fill-opacity:1;fill-rule:evenodd;stroke:none;stroke-width:3;stroke-linecap:round;stroke-linejoin:round;stroke-miterlimit:3;stroke-opacity:0.498674;paint-order:stroke fill markers"
						d="M 81.491666,116.68125 C 79.904154,116.10052 77.89041,115.86293 77.522916,114.3 v -1.5875 h 2.910417 v 1.85208 c 0.06518,0.64755 0.626836,1.39524 1.058333,2.11667 z"
						id="path51132"
					/><path
						style="opacity:1;fill:#3f3432;fill-opacity:1;fill-rule:evenodd;stroke:none;stroke-width:3;stroke-linecap:round;stroke-linejoin:round;stroke-miterlimit:3;stroke-opacity:0.498674;paint-order:stroke fill markers"
						d="m 71.966666,111.38958 h 9.260416 c 2.462524,-0.80672 3.878215,-2.17445 4.497917,-3.96875 2e-6,-1.87546 10e-7,-3.45988 0,-5.02708 -0.767855,-2.439622 -2.274271,-2.694114 -3.704167,-3.175001 h -2.116666 c -0.992106,0.216762 -1.975265,0.458897 -2.645834,1.587501 z"
						id="path51134"
					/><path
						style="opacity:1;fill:#3f3432;fill-opacity:1;fill-rule:evenodd;stroke:none;stroke-width:3;stroke-linecap:round;stroke-linejoin:round;stroke-miterlimit:3;stroke-opacity:0.498674;paint-order:stroke fill markers"
						d="m 80.433332,96.572915 c 0.972338,-2.997306 2.625253,-5.039054 4.233334,-7.143749 l 5.291666,-6.879167 3.704167,-4.233333 7.143751,-1.322917 c 1.45056,0.68151 2.35655,2.432517 3.43958,3.96875 -3.56067,6.171802 23.74786,40.507491 -8.995831,17.4625 l -5.820833,2.381251 c -2.056502,-3.669784 -5.527078,-3.949377 -8.995834,-4.233335 z"
						id="path51136"
					/><path
						style="opacity:1;fill:#537bb5;fill-opacity:1;fill-rule:evenodd;stroke:none;stroke-width:3;stroke-linecap:round;stroke-linejoin:round;stroke-miterlimit:3;stroke-opacity:0.498674;paint-order:stroke fill markers"
						d="m 118.00417,114.3 -1.05834,-4.23333 -21.695831,-11.641671 h -1.5875 c 0.262843,-0.866115 0.694972,-1.41201 1.322916,-1.5875 L 94.45625,94.720833 c -1.078401,-0.0094 -2.141602,0.497009 -2.910418,1.058332 -0.179593,-2.49208 -0.144259,-4.973207 0.79375,-7.408333 -0.613623,0.104295 -1.249469,0.247337 -2.116666,0.79375 -0.524307,-2.296921 -0.195946,-4.41385 -0.264584,-6.614583 l -5.291666,6.879167 c 4.302522,4.237807 4.633499,7.817401 4.7625,11.377084 1.204839,2.61789 1.646701,5.22277 1.5875,7.9375 -3.614021,1.88079 -3.465096,5.19727 -3.439584,8.46667 1.491009,-2.52796 3.259729,-2.58082 5.027084,-2.64584 z"
						id="path51138"
					/><path
						style="opacity:1;fill:#63a5d8;fill-opacity:1;fill-rule:evenodd;stroke:none;stroke-width:3;stroke-linecap:round;stroke-linejoin:round;stroke-miterlimit:3;stroke-opacity:0.498674;paint-order:stroke fill markers"
						d="m 92.604166,106.89167 5.820833,-0.79375 c -2.882144,-2.06108 -5.232847,-4.34444 -6.35,-7.143755 l 3.704166,0.529167 c -2.249288,-5.972718 -1.83405,-7.090775 -2.38125,-11.641666 v -1.852084 l 0.264584,-7.9375 8.731251,-3.704166 -1.85208,2.645833 c -1.713612,2.351406 -2.111379,3.912794 -2.645838,5.55625 l 0.529167,0.529167 C 105.26648,81.972203 110.07775,77.694038 114.3,72.495832 c -0.42102,4.792541 1.658,7.57022 -4.7625,17.197917 7.68921,0.238301 8.76068,-5.073539 12.43542,-8.202083 0.003,6.829854 1.11657,13.576611 -7.9375,20.637504 2.95506,0.58241 5.95137,-0.97405 8.99583,-5.027087 0.4195,8.194037 -4.81578,12.844127 -9.70069,14.364157 -7.5098,2.3368 -18.613076,-1.12515 -20.726394,-4.57457 z"
						id="path51140"
					/><path
						style="opacity:1;fill:#dff7f8;fill-opacity:1;fill-rule:evenodd;stroke:none;stroke-width:3;stroke-linecap:round;stroke-linejoin:round;stroke-miterlimit:3;stroke-opacity:0.498674;paint-order:stroke fill markers"
						d="m 111.38958,114.3 -7.67291,-13.49375 4.7625,1.05833 -8.995838,-10.847914 v -1.058334 h 5.820838 l -7.408338,-7.408333 -4.497917,3.439583 v 1.852084 l 3.96875,-2.116667 v 5.820833 l -1.322916,0.529167 v 2.38125 l 1.5875,-0.79375 1.5875,3.96875 -1.058334,1.058333 -0.264583,0.264583 8.466668,15.610415 c 0.97161,0.49841 1.4011,0.27807 1.5875,-0.26458 l -5.55625,-10.05417 1.05833,-0.52916 6.35,11.1125 c 0.92495,0.56612 1.40707,0.30147 1.5875,-0.52917 z"
						id="path51142"
					/><path
						style="opacity:1;fill:#63a5d8;fill-opacity:1;fill-rule:evenodd;stroke:none;stroke-width:3;stroke-linecap:round;stroke-linejoin:round;stroke-miterlimit:3;stroke-opacity:0.498674;paint-order:stroke fill markers"
						d="M 97.895832,121.70833 H 119.0625 L 118.00417,114.3 92.604166,114.56458 Z"
						id="path51144"
					/><path
						style="opacity:1;fill:#dff7f8;fill-opacity:1;fill-rule:evenodd;stroke:none;stroke-width:3;stroke-linecap:round;stroke-linejoin:round;stroke-miterlimit:3;stroke-opacity:0.498674;paint-order:stroke fill markers"
						d="m 92.604166,114.56458 c 4.971787,0.64678 5.259311,5.60897 5.820833,10.31875 -2.096374,-1.61152 -4.200727,-3.25582 -5.820833,-2.91041 -2.770137,-4.64958 -1.427595,-6.92718 0,-7.40834 z"
						id="path51146"
					/><path
						style="opacity:1;fill:#dff7f8;fill-opacity:1;fill-rule:evenodd;stroke:none;stroke-width:3;stroke-linecap:round;stroke-linejoin:round;stroke-miterlimit:3;stroke-opacity:0.498674;paint-order:stroke fill markers"
						d="m 118.00417,114.3 c -0.74678,1.69157 -3.47751,2.90087 -0.26459,7.40833 3.15898,0.51491 4.72038,2.08741 6.61459,3.43959 -1.39132,-3.53199 0.63646,-7.38902 -6.35,-10.84792 z"
						id="path51148"
					/><path
						style="opacity:1;fill:#dff7f8;fill-opacity:1;fill-rule:evenodd;stroke:none;stroke-width:3;stroke-linecap:round;stroke-linejoin:round;stroke-miterlimit:3;stroke-opacity:0.498674;paint-order:stroke fill markers"
						d="m 109.80208,114.56458 c 4.97178,0.64678 5.25931,5.60897 5.82083,10.31875 -2.09637,-1.61152 -4.20073,-3.25582 -5.82083,-2.91041 -3.10085,-3.64508 -1.45099,-6.46381 0,-7.40834 z"
						id="path51150"
					/><path
						style="opacity:1;fill:#dff7f8;fill-opacity:1;fill-rule:evenodd;stroke:none;stroke-width:3;stroke-linecap:round;stroke-linejoin:round;stroke-miterlimit:3;stroke-opacity:0.498674;paint-order:stroke fill markers"
						d="m 100.80625,114.56458 c 4.97178,0.64678 5.25931,5.60897 5.82083,10.31875 -2.09637,-1.61152 -4.20073,-3.25582 -5.82083,-2.91041 -3.098511,-3.63296 -1.359878,-5.99142 0,-7.40834 z"
						id="path51152"
					/><path
						style="opacity:1;fill:#537bb5;fill-opacity:1;fill-rule:evenodd;stroke:none;stroke-width:3;stroke-linecap:round;stroke-linejoin:round;stroke-miterlimit:3;stroke-opacity:0.498674;paint-order:stroke fill markers"
						d="m 82.285416,87.841666 c 2.96883,-5.267156 7.532591,-8.603954 11.906249,-12.170834 -3.341468,-0.05379 -6.413677,-0.775837 -8.995833,-2.645833 -2.394502,4.414404 -4.794567,8.829064 -6.879166,13.229167 z"
						id="path51154"
					/><path
						style="opacity:1;fill:#3f3432;fill-opacity:1;fill-rule:evenodd;stroke:none;stroke-width:3;stroke-linecap:round;stroke-linejoin:round;stroke-miterlimit:3;stroke-opacity:0.498674;paint-order:stroke fill markers"
						d="m 78.581249,95.249999 c 0.945615,-2.682864 2.244935,-5.104622 3.704167,-7.408333 -0.774373,-1.121037 -1.957381,-1.801164 -3.96875,-1.5875 0.04458,3.008522 -0.331133,8.228342 0.264583,8.995833 z"
						id="path51156"
					/></g
				><ellipse
					style="opacity:1;fill:#ffcc00;fill-opacity:1;fill-rule:evenodd;stroke:none;stroke-width:3.28633;stroke-linecap:round;stroke-linejoin:round;stroke-miterlimit:3;stroke-opacity:0.498674;paint-order:stroke fill markers"
					id="ellipse51160"
					cx="-45.180019"
					cy="82.958107"
					rx="0.79374874"
					ry="1.7197917"
					transform="matrix(-0.9880944,0.15384882,0.15384882,0.9880944,0,0)"
				/><path
					style="opacity:1;fill:#3f3432;fill-opacity:1;fill-rule:evenodd;stroke:none;stroke-width:3;stroke-linecap:round;stroke-linejoin:round;stroke-miterlimit:3;stroke-opacity:0.498674;paint-order:stroke fill markers"
					d="m 62.706249,80.697916 h -0.529166 c -3.470294,-4.631855 -7.209531,-9.305371 -9.525,-13.758334 -0.30191,-1.064607 -0.383787,-2.427419 -0.529167,-3.704166 l 2.38125,0.264583 c -0.720294,-0.99771 -0.638669,-1.791706 -0.79375,-2.645833 1.764045,0.176245 4.018529,-0.101857 5.291667,0.529167 0.151417,-0.418626 0.490297,-0.874269 0.79375,-1.322917 l 2.910416,-2.645833 0.529167,21.431249 v 1.852084 z"
					id="path51162"
				/><path
					style="opacity:1;fill:#3f3432;fill-opacity:1;fill-rule:evenodd;stroke:none;stroke-width:3;stroke-linecap:round;stroke-linejoin:round;stroke-miterlimit:3;stroke-opacity:0.498674;paint-order:stroke fill markers"
					d="m 62.706249,60.854166 h 2.645834 v -3.439583 l -1.322917,-1.058334 -1.322917,1.058334 z"
					id="path51164"
				/><path
					style="opacity:1;fill:#e7d197;fill-opacity:1;fill-rule:evenodd;stroke:none;stroke-width:3;stroke-linecap:round;stroke-linejoin:round;stroke-miterlimit:3;stroke-opacity:0.498674;paint-order:stroke fill markers"
					d="m 65.087499,80.697916 h 0.529167 c 1.346329,-2.671463 2.854544,-5.41335 2.645833,-7.408334 l 1.058333,0.529167 0.79375,-1.058333 -1.852083,-1.058334 v -3.175 l 1.852083,0.79375 5.027084,-2.38125 -4.7625,1.058334 -2.116667,-1.322917 v -2.38125 l 2.116667,1.058334 3.439583,-1.852084 -3.175,0.79375 -2.38125,-2.645833 v -1.852083 l -2.910416,-2.38125 v 3.439583 l -1.322917,-0.264583 -1.322917,0.264583 v -3.439583 l -2.910416,2.645833 v 1.852083 l -2.116667,2.116667 -3.175,-0.529167 3.175,1.852084 2.116667,-1.058334 v 2.645833 l -1.852084,1.058334 -5.027083,-1.058334 5.027083,2.645834 1.852084,-1.058334 v 3.175 l -1.852084,0.79375 0.79375,1.322917 1.058334,-0.264583 c 0.07946,2.216308 1.409353,4.664179 2.910416,7.14375 h 0.529168 v -1.852084 h 1.852082 z"
					id="path51166"
				/><path
					style="opacity:1;fill:#ce4c18;fill-opacity:1;fill-rule:evenodd;stroke:none;stroke-width:3;stroke-linecap:round;stroke-linejoin:round;stroke-miterlimit:3;stroke-opacity:0.498674;paint-order:stroke fill markers"
					d="m 66.145832,80.697916 2.645834,-3.439584 0.529166,0.264584 c 0.168653,0.989198 1.08425,0.585747 1.058334,0.529166 l 1.322916,1.058334 -1.852083,1.5875 z"
					id="path51168"
				/><path
					style="opacity:1;fill:#ce4c18;fill-opacity:1;fill-rule:evenodd;stroke:none;stroke-width:3;stroke-linecap:round;stroke-linejoin:round;stroke-miterlimit:3;stroke-opacity:0.498674;paint-order:stroke fill markers"
					d="m 70.379166,78.052082 2.645833,-3.175 2.38125,0.529167 c -0.843898,1.150375 -1.963656,2.360286 -3.704167,3.704167 z"
					id="path51170"
				/><path
					style="opacity:1;fill:#ce4c18;fill-opacity:1;fill-rule:evenodd;stroke:none;stroke-width:3;stroke-linecap:round;stroke-linejoin:round;stroke-miterlimit:3;stroke-opacity:0.498674;paint-order:stroke fill markers"
					d="m 75.406249,75.406249 c 1.286347,-1.316741 1.275358,-4.603016 1.058333,-8.202083 l -0.79375,-0.529167 c -2.026175,3.383018 -4.153201,6.820739 -6.879166,10.583333 l 0.529167,0.264585 2.645834,-3.96875 c 0.638206,-0.07186 1.070736,-0.02839 1.058332,0.264582 v 1.058333 z"
					id="path51172"
				/><path
					style="opacity:1;fill:#518fd2;fill-opacity:1;fill-rule:evenodd;stroke:none;stroke-width:3;stroke-linecap:round;stroke-linejoin:round;stroke-miterlimit:3;stroke-opacity:0.498674;paint-order:stroke fill markers"
					d="m 62.177083,80.697916 h -3.704167 c -2.147585,-1.94146 -5.732937,-3.403341 -6.879167,-8.202084 v -4.233333 c 0.07704,-1.535163 0.636263,-1.156912 1.058334,-1.322917 0.79375,2.645833 -0.553978,5.124593 2.38125,7.9375 l 2.645833,3.175 c 0.647258,0.222564 1.069805,0.0734 1.058333,-0.79375 -0.96248,-1.778907 -2.20523,-3.126272 -2.910416,-3.96875 l 1.058333,-0.529166 z"
					id="path51174"
				/><path
					style="opacity:1;fill:#518fd2;fill-opacity:1;fill-rule:evenodd;stroke:none;stroke-width:3;stroke-linecap:round;stroke-linejoin:round;stroke-miterlimit:3;stroke-opacity:0.498674;paint-order:stroke fill markers"
					d="m 54.768749,74.612499 c 0.03455,-0.981846 0.33244,-1.418052 1.058334,-1.322917 l 1.058333,-0.529166 -4.233333,-5.820834 c 0.03752,2.71525 -1.151182,5.719808 2.116666,7.672917 z"
					id="path51176"
				/><path
					style="opacity:1;fill:#3f3432;fill-opacity:1;fill-rule:evenodd;stroke:none;stroke-width:3;stroke-linecap:round;stroke-linejoin:round;stroke-miterlimit:3;stroke-opacity:0.498674;paint-order:stroke fill markers"
					d="m 62.970833,81.756249 h 2.38125 v 1.058333 h 1.058333 v 4.497917 l -2.38125,2.645833 -2.38125,-2.645833 v -4.497917 h 1.322917 z"
					id="path51178"
				/><path
					style="opacity:1;fill:#e7d197;fill-opacity:1;fill-rule:evenodd;stroke:none;stroke-width:3;stroke-linecap:round;stroke-linejoin:round;stroke-miterlimit:3;stroke-opacity:0.498674;paint-order:stroke fill markers"
					d="m 61.647916,87.312499 -1.852083,-2.116667 v -2.38125 h -1.322917 v -1.058333 h 2.38125 v 1.058333 h 0.79375 z"
					id="path51180"
				/><path
					style="opacity:1;fill:#e7d197;fill-opacity:1;fill-rule:evenodd;stroke:none;stroke-width:3;stroke-linecap:round;stroke-linejoin:round;stroke-miterlimit:3;stroke-opacity:0.498674;paint-order:stroke fill markers"
					d="M 66.410417,87.312499 68.2625,85.195832 v -2.38125 h 1.322917 v -1.058333 h -2.38125 v 1.058333 h -0.79375 z"
					id="path51182"
				/><path
					style="opacity:1;fill:#3f3432;fill-opacity:1;fill-rule:evenodd;stroke:none;stroke-width:3;stroke-linecap:round;stroke-linejoin:round;stroke-miterlimit:3;stroke-opacity:0.498674;paint-order:stroke fill markers"
					d="m 61.912499,114.3 4.497917,-0.26458 1.322916,-1.05834 8.73125,-26.722914 c 0.04053,-1.860869 0.683029,-2.920645 1.058334,-4.233334 l 0.79375,-1.322916 1.5875,-3.175 0.79375,-1.322917 c 1.044876,-1.507415 0.928292,-3.475768 0.529166,-5.55625 -0.973869,-0.110906 -2.16044,-0.682504 -2.645833,0.264583 v 2.645834 2.38125 l -2.645833,2.645833 -1.322917,1.852083 C 71.135476,85.134543 67.81044,89.916323 64.029166,94.456249 60.068627,89.824408 56.973611,85.107638 53.445833,80.433332 l -1.322917,-1.852083 -2.38125,-2.645833 v -2.645834 -2.38125 c -0.910686,-0.647779 -1.789755,-0.679987 -2.645833,-0.264583 -0.621093,1.493695 -0.99511,3.098426 0.529166,5.55625 l 0.529167,1.058333 1.5875,3.439584 0.79375,1.058333 c 0.423567,1.518409 1.422917,3.192203 1.058333,4.497917 l 7.9375,25.929164 z"
					id="path51184"
				/><path
					style="opacity:1;fill:#cfab52;fill-opacity:1;fill-rule:evenodd;stroke:none;stroke-width:3;stroke-linecap:round;stroke-linejoin:round;stroke-miterlimit:3;stroke-opacity:0.498674;paint-order:stroke fill markers"
					d="m 64.029167,116.15208 2.38125,-2.11666 v -1.85209 l -2.38125,1.32292 -2.38125,-1.32292 L 61.9125,114.3 Z"
					id="path51186"
				/><path
					style="opacity:1;fill:#cfab52;fill-opacity:1;fill-rule:evenodd;stroke:none;stroke-width:3;stroke-linecap:round;stroke-linejoin:round;stroke-miterlimit:3;stroke-opacity:0.498674;paint-order:stroke fill markers"
					d="m 64.029167,112.18333 2.38125,-1.5875 0.264583,-3.70416 -2.645833,1.85208 -2.645834,-1.85208 0.264584,3.70416 z"
					id="path51188"
				/><path
					style="opacity:1;fill:#e6d197;fill-opacity:0.768627;fill-rule:evenodd;stroke:none;stroke-width:3;stroke-linecap:round;stroke-linejoin:round;stroke-miterlimit:3;stroke-opacity:0.498674;paint-order:stroke fill markers"
					d="m 64.029167,107.15625 2.910416,-2.38125 0.264584,-3.43958 -3.175,2.38125 -3.175,-2.38125 v 3.175 z"
					id="path51190"
				/><path
					style="opacity:1;fill:#e7d197;fill-opacity:1;fill-rule:evenodd;stroke:none;stroke-width:3;stroke-linecap:round;stroke-linejoin:round;stroke-miterlimit:3;stroke-opacity:0.498674;paint-order:stroke fill markers"
					d="m 64.029167,101.4677 3.439583,-2.513533 v -5.027084 l -3.439583,3.704167 -3.439584,-3.704167 v 5.027084 z"
					id="path51192"
				/><path
					style="opacity:1;fill:#ce4c18;fill-opacity:1;fill-rule:evenodd;stroke:none;stroke-width:3;stroke-linecap:round;stroke-linejoin:round;stroke-miterlimit:3;stroke-opacity:0.498674;paint-order:stroke fill markers"
					d="m 78.581249,70.908332 c 0.593668,-0.310316 1.569837,-0.325908 2.645833,-0.264583 -0.738593,-0.947054 -1.437828,-1.911985 -2.645833,-2.645833 z"
					id="path51194"
				/><path
					style="opacity:1;fill:#ce4c18;fill-opacity:1;fill-rule:evenodd;stroke:none;stroke-width:3;stroke-linecap:round;stroke-linejoin:round;stroke-miterlimit:3;stroke-opacity:0.498674;paint-order:stroke fill markers"
					d="m 78.581249,75.935416 v -2.38125 c 1.296839,0.633516 1.756186,1.618905 2.116667,2.645833 l -0.79375,1.322917 c 0.116701,-0.58177 -0.46258,-1.09789 -1.322917,-1.5875 z"
					id="path51196"
				/><path
					style="opacity:1;fill:#ce4c18;fill-opacity:1;fill-rule:evenodd;stroke:none;stroke-width:3;stroke-linecap:round;stroke-linejoin:round;stroke-miterlimit:3;stroke-opacity:0.498674;paint-order:stroke fill markers"
					d="m 74.612499,80.433332 1.322917,-1.852083 c 1.434284,0.558865 1.815076,1.358994 2.38125,2.116667 l -0.79375,1.322916 c -0.733865,-1.042865 -1.591591,-1.816435 -2.910417,-1.5875 z"
					id="path51198"
				/><path
					style="opacity:1;fill:#ce4c18;fill-opacity:1;fill-rule:evenodd;stroke:none;stroke-width:3;stroke-linecap:round;stroke-linejoin:round;stroke-miterlimit:3;stroke-opacity:0.498674;paint-order:stroke fill markers"
					d="m 69.056249,90.752082 c 2.169964,-2.09454 4.665642,-3.541705 7.408333,-4.497916 v 10.054166 l -7.672916,15.610418 -1.058334,1.05833 c 0.828364,-7.28309 1.443615,-14.635085 1.322917,-22.224998 z"
					id="path51200"
				/><path
					style="opacity:1;fill:#518fd2;fill-opacity:1;fill-rule:evenodd;stroke:none;stroke-width:3;stroke-linecap:round;stroke-linejoin:round;stroke-miterlimit:3;stroke-opacity:0.498674;paint-order:stroke fill markers"
					d="m 60.324999,112.7125 -0.79375,-0.52917 -7.672916,-15.610415 c -0.513583,0.24759 -0.103539,-6.167821 -0.264584,-10.318749 1.392871,0.290165 3.722022,1.631902 7.408334,4.497916 0.03914,5.765197 0.0067,11.019298 1.322916,21.960418 z"
					id="path51202"
				/><path
					style="opacity:1;fill:#518fd2;fill-opacity:1;fill-rule:evenodd;stroke:none;stroke-width:3;stroke-linecap:round;stroke-linejoin:round;stroke-miterlimit:3;stroke-opacity:0.498674;paint-order:stroke fill markers"
					d="m 50.535416,81.756249 c 0.876978,-1.100454 1.872528,-1.361541 2.910417,-1.322917 l -1.322917,-1.852083 c -1.052714,0.368528 -1.792494,1.144322 -2.381249,2.116668 z"
					id="path51204"
				/><path
					style="opacity:1;fill:#518fd2;fill-opacity:1;fill-rule:evenodd;stroke:none;stroke-width:3;stroke-linecap:round;stroke-linejoin:round;stroke-miterlimit:3;stroke-opacity:0.498674;paint-order:stroke fill markers"
					d="m 49.741666,75.935416 v -2.645834 c -0.872028,0.7196 -1.697083,1.509895 -2.116667,2.910417 0.148521,0.297042 0.292322,0.584643 0.529167,1.058333 0.590792,-1.103509 1.102827,-1.3603 1.5875,-1.322916 z"
					id="path51206"
				/><path
					style="opacity:1;fill:#518fd2;fill-opacity:1;fill-rule:evenodd;stroke:none;stroke-width:3;stroke-linecap:round;stroke-linejoin:round;stroke-miterlimit:3;stroke-opacity:0.498674;paint-order:stroke fill markers"
					d="m 47.095833,70.643749 c 0.935341,-0.0988 1.808257,0.02101 2.645833,0.264583 l -0.264583,-2.645833 c -1.063407,0.564066 -2.066991,1.179088 -2.38125,2.38125 z"
					id="path51208"
				/><g id="g51248" style="opacity:1"
					><path
						style="opacity:1;fill:#ce4c18;fill-opacity:1;fill-rule:evenodd;stroke:none;stroke-width:3;stroke-linecap:round;stroke-linejoin:round;stroke-miterlimit:3;stroke-opacity:0.498674;paint-order:stroke fill markers"
						d="m 73.554166,58.737499 h -3.96875 c -2.066951,-1.189846 -3.160137,-1.67324 -3.96875,-2.910416 v -1.852084 c 1.026786,-2.501645 2.580934,-3.846524 3.96875,-5.55625 1.007188,3.4542 1.976505,6.910152 3.96875,10.31875 z"
						id="path51210"
					/><g id="g51228"
						><path
							style="opacity:1;fill:#3f3432;fill-opacity:1;fill-rule:evenodd;stroke:none;stroke-width:3;stroke-linecap:round;stroke-linejoin:round;stroke-miterlimit:3;stroke-opacity:0.498674;paint-order:stroke fill markers"
							d="m 115.35833,60.060416 -2.64583,-4.497917 c -6.86616,1.176988 -12.65117,-1.628697 -17.197918,-8.995833 -1.450888,-4.00052 -2.629649,-8.414521 -5.027083,-10.847916 l -1.5875,-0.79375 c -1.10955,-0.302111 -0.981957,-0.758659 -6.35,-0.529167 l -6.614583,9.260416 c -0.166933,0.813441 -0.380993,1.321942 -0.264584,3.96875 l 0.529167,11.377084 c 1.001783,3.205508 2.011923,6.409849 5.55625,9.260416 8.731072,6.505155 15.354036,5.84695 21.695831,4.233333 3.46424,-1.416128 6.53612,-3.206482 8.46667,-6.085416 z"
							id="path51212"
						/><path
							style="opacity:1;fill:#ce4c18;fill-opacity:1;fill-rule:evenodd;stroke:none;stroke-width:3;stroke-linecap:round;stroke-linejoin:round;stroke-miterlimit:3;stroke-opacity:0.498674;paint-order:stroke fill markers"
							d="m 107.95,59.795833 0.26458,-3.175 c -2.15651,3.094175 -5.61471,9.56322 -10.318748,8.202083 v 1.852083 l 2.910418,1.852083 c 6.53106,-5.870034 5.73149,-6.511911 7.14375,-8.731249 z"
							id="path51214"
						/><path
							style="opacity:1;fill:#e7d197;fill-opacity:1;fill-rule:evenodd;stroke:none;stroke-width:3;stroke-linecap:round;stroke-linejoin:round;stroke-miterlimit:3;stroke-opacity:0.498674;paint-order:stroke fill markers"
							d="m 104.24583,66.410416 1.85209,-6.614583 11.64166,0.264583 5.55625,11.377083 c -5.09182,-2.903838 -9.69892,-6.280831 -19.05,-5.027083 z"
							id="path51216"
						/><path
							style="opacity:1;fill:#ce4c18;fill-opacity:1;fill-rule:evenodd;stroke:none;stroke-width:3;stroke-linecap:round;stroke-linejoin:round;stroke-miterlimit:3;stroke-opacity:0.498674;paint-order:stroke fill markers"
							d="m 89.693749,64.558333 1.852083,-1.852084 -2.910416,-1.322916 5.556249,-6.614584 -8.731249,3.704167 -1.058334,-1.058333 -2.38125,-0.264584 c 0.961154,2.064457 2.283442,3.93781 1.5875,6.879167 2.183159,-0.371742 4.31103,-0.547568 6.085417,0.529167 z"
							id="path51218"
						/><path
							style="opacity:1;fill:#e7d197;fill-opacity:1;fill-rule:evenodd;stroke:none;stroke-width:3;stroke-linecap:round;stroke-linejoin:round;stroke-miterlimit:3;stroke-opacity:0.498674;paint-order:stroke fill markers"
							d="m 87.312499,70.908332 v -3.96875 l 6.35,-6.349999 4.233333,4.233333 c 0,0 0,6.085416 0,6.085416 z"
							id="path51220"
						/><path
							style="opacity:1;fill:#ce4c18;fill-opacity:1;fill-rule:evenodd;stroke:none;stroke-width:3;stroke-linecap:round;stroke-linejoin:round;stroke-miterlimit:3;stroke-opacity:0.498674;paint-order:stroke fill markers"
							d="m 79.374999,51.064583 v -3.704167 c 5.590125,-1.595304 5.641499,-4.955394 6.879167,-7.9375 -0.173641,-0.437326 -0.739872,-0.746038 -2.910417,-0.529166 l -0.529167,-1.322917 c 1.515057,-0.104687 3.743666,-0.956501 4.497917,-0.264583 l 1.5875,-2.38125 1.5875,0.79375 c -0.06092,1.176945 0.239388,2.756701 -0.264583,3.439583 1.557821,1.612065 2.301043,3.471734 3.174999,5.291666 C 92.115058,43.379196 91.122632,42.25443 88.9,41.275 c -3.533351,5.957903 -6.659029,8.153702 -9.525001,9.789583 z"
							id="path51222"
						/><path
							style="opacity:1;fill:#e7d197;fill-opacity:1;fill-rule:evenodd;stroke:none;stroke-width:3;stroke-linecap:round;stroke-linejoin:round;stroke-miterlimit:3;stroke-opacity:0.498674;paint-order:stroke fill markers"
							d="m 85.724999,57.149999 v -6.35 C 78.709766,51.109395 73.772623,46.204584 69.056249,40.745833 l 6.614583,18.25625 z"
							id="path51224"
						/><path
							style="opacity:1;fill:#e7d197;fill-opacity:1;fill-rule:evenodd;stroke:none;stroke-width:3;stroke-linecap:round;stroke-linejoin:round;stroke-miterlimit:3;stroke-opacity:0.498674;paint-order:stroke fill markers"
							d="m 83.608332,43.656249 2.116667,-3.439583 -4.7625,-8.73125 c -1.269546,-6.634433 1.383297,-10.135974 2.116667,-15.08125 L 70.643749,30.1625 c 2.285127,4.284632 4.448611,8.619039 5.291667,13.493749 z"
							id="path51226"
						/></g
					><g id="g51234"
						><path
							style="opacity:1;fill:#3f3432;fill-opacity:1;fill-rule:evenodd;stroke:none;stroke-width:3;stroke-linecap:round;stroke-linejoin:round;stroke-miterlimit:3;stroke-opacity:0.498674;paint-order:stroke fill markers"
							d="m 109.5375,53.445833 -2.64583,-1.058334 -1.5875,-0.79375 c -3.59086,-1.561967 -5.01038,-3.161542 -6.350005,-4.7625 -0.725014,-3.254933 -2.245142,-6.51944 -4.233332,-9.789582 C 91.830049,32.64754 88.616078,30.73736 84.931249,31.75 l 1.058333,-3.175 0.529167,-1.5875 0.79375,-2.645834 h 15.610421 l 10.84791,14.022917 z"
							id="path51230"
						/><path
							style="opacity:1;fill:#ce4c18;fill-opacity:1;fill-rule:evenodd;stroke:none;stroke-width:3;stroke-linecap:round;stroke-linejoin:round;stroke-miterlimit:3;stroke-opacity:0.498674;paint-order:stroke fill markers"
							d="m 105.30417,51.593749 1.5875,0.79375 c 1.22464,-0.614124 2.11476,-1.403587 2.64583,-2.38125 v -7.14375 l 2.91042,-1.058333 -2.91042,-1.058333 c -0.0539,-1.689983 -0.0133,-3.361926 -1.32292,-5.291667 -0.61964,-1.283336 -2.19873,-1.744094 -4.49791,-1.5875 l 1.05833,-2.645833 -2.11667,1.322917 c -1.16682,-1.38251 -2.36421,-2.735209 -4.497915,-3.175 -0.188918,-1.882157 -2.400277,-1.935337 -4.7625,-1.852084 v -2.38125 L 92.074999,26.9875 h -5.55625 l -0.529167,1.5875 h 5.55625 v 2.645833 l 1.5875,-2.38125 h 2.910417 c 0.976623,-0.01275 1.417502,0.861421 1.5875,2.116667 1.865488,-0.135146 2.876421,0.988174 3.704171,2.38125 -0.46288,1.388618 -0.70599,2.11796 -1.05834,3.175 l 2.64584,-1.5875 c 1.67965,0.117905 3.59713,0.02778 4.23333,1.058333 0.80563,1.476104 1.44512,2.962779 1.32292,4.497916 l -4.23334,1.322917 3.70417,1.058333 v 6.085417 c -0.27158,1.007058 -0.64996,1.992224 -2.64583,2.645833 z"
							id="path51232"
						/></g
					><g id="g51240"
						><path
							style="opacity:1;fill:#3f3432;fill-opacity:1;fill-rule:evenodd;stroke:none;stroke-width:3;stroke-linecap:round;stroke-linejoin:round;stroke-miterlimit:3;stroke-opacity:0.498674;paint-order:stroke fill markers"
							d="m 114.03542,34.13125 2.91041,-2.38125 1.05834,-1.058334 0.79375,-0.79375 v -4.7625 l -8.20209,-8.995833 H 96.837499 l -0.529167,1.322917 -2.38125,4.124446 h 10.054168 z"
							id="path51236"
						/><path
							style="opacity:1;fill:#ce4c18;fill-opacity:1;fill-rule:evenodd;stroke:none;stroke-width:3;stroke-linecap:round;stroke-linejoin:round;stroke-miterlimit:3;stroke-opacity:0.498674;paint-order:stroke fill markers"
							d="m 116.94583,31.75 1.05834,-1.058334 V 27.78125 L 114.3,24.077083 115.35833,22.225 l -2.11666,1.058333 -4.7625,-4.7625 h -5.02709 c -0.25069,-0.349151 -0.38266,-0.303158 -0.52916,-0.305515 l 0.26458,-1.811152 -1.32292,1.058334 h -5.556248 l -0.611029,1.058333 h 5.373527 l -0.52916,2.645833 1.85208,-1.852083 c 0.16535,-0.0727 0.33883,-0.02697 0.52917,0.264583 H 107.95 l 4.49792,4.497917 -1.05834,2.116667 2.11667,-1.058334 3.43958,3.439584 z"
							id="path51238"
						/></g
					><g id="g51246"
						><path
							style="opacity:1;fill:#e16826;fill-opacity:1;fill-rule:evenodd;stroke:none;stroke-width:3;stroke-linecap:round;stroke-linejoin:round;stroke-miterlimit:3;stroke-opacity:0.498674;paint-order:stroke fill markers"
							d="m 114.56458,17.727083 4.7625,-7.672916 -1.85208,-1.0583338 -4.7625,-2.38125 -6.08542,-2.6458332 c -4.59152,1.1883233 -9.406013,2.1616763 -17.197914,0.2645833 -4.137108,0.8711998 -8.845267,1.6198199 -13.49375,2.3812499 5.671275,0.4535326 12.35559,0.047516 15.345833,4.7624998 5.063781,-3.2796341 9.374651,-2.9938097 11.641671,2.116667 h 8.20208 z"
							id="path51242"
						/><path
							style="opacity:1;fill:#fcd26f;fill-opacity:1;fill-rule:evenodd;stroke:none;stroke-width:3;stroke-linecap:round;stroke-linejoin:round;stroke-miterlimit:3;stroke-opacity:0.498674;paint-order:stroke fill markers"
							d="m 117.475,8.9958332 -4.7625,-2.38125 -3.70417,2.6458334 -8.20208,-2.6458334 7.9375,4.7624998 z"
							id="path51244"
						/></g
					></g
				><g
					id="g51288"
					transform="matrix(-1,0,0,1,128.05795,0)"
					style="opacity:1"
					><path
						style="opacity:1;fill:#63a5d8;fill-opacity:1;fill-rule:evenodd;stroke:none;stroke-width:3;stroke-linecap:round;stroke-linejoin:round;stroke-miterlimit:3;stroke-opacity:0.498674;paint-order:stroke fill markers"
						d="m 73.554166,58.737499 h -3.96875 c -2.066951,-1.189846 -3.160137,-1.67324 -3.96875,-2.910416 v -1.852084 c 1.026786,-2.501645 2.580934,-3.846524 3.96875,-5.55625 1.007188,3.4542 1.976505,6.910152 3.96875,10.31875 z"
						id="path51250"
					/><g id="g51268"
						><path
							style="opacity:1;fill:#3f3432;fill-opacity:1;fill-rule:evenodd;stroke:none;stroke-width:3;stroke-linecap:round;stroke-linejoin:round;stroke-miterlimit:3;stroke-opacity:0.498674;paint-order:stroke fill markers"
							d="m 115.35833,60.060416 -2.64583,-4.497917 c -6.86616,1.176988 -12.65117,-1.628697 -17.197918,-8.995833 -1.450888,-4.00052 -2.629649,-8.414521 -5.027083,-10.847916 l -1.5875,-0.79375 c -1.10955,-0.302111 -0.981957,-0.758659 -6.35,-0.529167 l -6.614583,9.260416 c -0.166933,0.813441 -0.380993,1.321942 -0.264584,3.96875 l 0.529167,11.377084 c 1.001783,3.205508 2.011923,6.409849 5.55625,9.260416 8.731072,6.505155 15.354036,5.84695 21.695831,4.233333 3.46424,-1.416128 6.53612,-3.206482 8.46667,-6.085416 z"
							id="path51252"
						/><path
							style="opacity:1;fill:#518fd2;fill-opacity:1;fill-rule:evenodd;stroke:none;stroke-width:3;stroke-linecap:round;stroke-linejoin:round;stroke-miterlimit:3;stroke-opacity:0.498674;paint-order:stroke fill markers"
							d="m 107.95,59.795833 0.26458,-3.175 c -2.15651,3.094175 -5.61471,9.56322 -10.318748,8.202083 v 1.852083 l 2.910418,1.852083 c 6.53106,-5.870034 5.73149,-6.511911 7.14375,-8.731249 z"
							id="path51254"
						/><path
							style="opacity:1;fill:#e7d197;fill-opacity:1;fill-rule:evenodd;stroke:none;stroke-width:3;stroke-linecap:round;stroke-linejoin:round;stroke-miterlimit:3;stroke-opacity:0.498674;paint-order:stroke fill markers"
							d="m 104.24583,66.410416 1.85209,-6.614583 11.64166,0.264583 5.55625,11.377083 c -5.09182,-2.903838 -9.69892,-6.280831 -19.05,-5.027083 z"
							id="path51256"
						/><path
							style="opacity:1;fill:#518fd2;fill-opacity:1;fill-rule:evenodd;stroke:none;stroke-width:3;stroke-linecap:round;stroke-linejoin:round;stroke-miterlimit:3;stroke-opacity:0.498674;paint-order:stroke fill markers"
							d="m 89.693749,64.558333 1.852083,-1.852084 -2.910416,-1.322916 5.556249,-6.614584 -8.731249,3.704167 -1.058334,-1.058333 -2.38125,-0.264584 c 0.961154,2.064457 2.283442,3.93781 1.5875,6.879167 2.183159,-0.371742 4.31103,-0.547568 6.085417,0.529167 z"
							id="path51258"
						/><path
							style="opacity:1;fill:#e7d197;fill-opacity:1;fill-rule:evenodd;stroke:none;stroke-width:3;stroke-linecap:round;stroke-linejoin:round;stroke-miterlimit:3;stroke-opacity:0.498674;paint-order:stroke fill markers"
							d="m 87.312499,70.908332 v -3.96875 l 6.35,-6.349999 4.233333,4.233333 c 0,0 0,6.085416 0,6.085416 z"
							id="path51260"
						/><path
							style="opacity:1;fill:#518fd2;fill-opacity:1;fill-rule:evenodd;stroke:none;stroke-width:3;stroke-linecap:round;stroke-linejoin:round;stroke-miterlimit:3;stroke-opacity:0.498674;paint-order:stroke fill markers"
							d="m 79.374999,51.064583 v -3.704167 c 5.590125,-1.595304 5.641499,-4.955394 6.879167,-7.9375 -0.173641,-0.437326 -0.739872,-0.746038 -2.910417,-0.529166 l -0.529167,-1.322917 c 1.515057,-0.104687 3.743666,-0.956501 4.497917,-0.264583 l 1.5875,-2.38125 1.5875,0.79375 c -0.06092,1.176945 0.239388,2.756701 -0.264583,3.439583 1.557821,1.612065 2.301043,3.471734 3.174999,5.291666 C 92.115058,43.379196 91.122632,42.25443 88.9,41.275 c -3.533351,5.957903 -6.659029,8.153702 -9.525001,9.789583 z"
							id="path51262"
						/><path
							style="opacity:1;fill:#e7d197;fill-opacity:1;fill-rule:evenodd;stroke:none;stroke-width:3;stroke-linecap:round;stroke-linejoin:round;stroke-miterlimit:3;stroke-opacity:0.498674;paint-order:stroke fill markers"
							d="m 85.724999,57.149999 v -6.35 C 78.709766,51.109395 73.772623,46.204584 69.056249,40.745833 l 6.614583,18.25625 z"
							id="path51264"
						/><path
							style="opacity:1;fill:#e7d197;fill-opacity:1;fill-rule:evenodd;stroke:none;stroke-width:3;stroke-linecap:round;stroke-linejoin:round;stroke-miterlimit:3;stroke-opacity:0.498674;paint-order:stroke fill markers"
							d="m 83.608332,43.656249 2.116667,-3.439583 -4.7625,-8.73125 c -1.289773,-5.696927 1.383297,-10.135974 2.116667,-15.08125 L 70.643749,30.1625 c 2.285127,4.284632 4.448611,8.619039 5.291667,13.493749 z"
							id="path51266"
						/></g
					><g id="g51274"
						><path
							style="opacity:1;fill:#3f3432;fill-opacity:1;fill-rule:evenodd;stroke:none;stroke-width:3;stroke-linecap:round;stroke-linejoin:round;stroke-miterlimit:3;stroke-opacity:0.498674;paint-order:stroke fill markers"
							d="m 109.5375,53.445833 -2.64583,-1.058334 -1.5875,-0.79375 c -3.59086,-1.561967 -5.01038,-3.161542 -6.350005,-4.7625 -0.725014,-3.254933 -2.245142,-6.51944 -4.233332,-9.789582 C 91.830049,32.64754 88.616078,30.73736 84.931249,31.75 l 1.058333,-3.175 0.529167,-1.5875 0.79375,-2.645834 h 15.610421 l 10.84791,14.022917 z"
							id="path51270"
						/><path
							style="opacity:1;fill:#518fd2;fill-opacity:1;fill-rule:evenodd;stroke:none;stroke-width:3;stroke-linecap:round;stroke-linejoin:round;stroke-miterlimit:3;stroke-opacity:0.498674;paint-order:stroke fill markers"
							d="m 105.30417,51.593749 1.5875,0.79375 c 1.22464,-0.614124 2.11476,-1.403587 2.64583,-2.38125 v -7.14375 l 2.91042,-1.058333 -2.91042,-1.058333 c -0.0539,-1.689983 -0.0133,-3.361926 -1.32292,-5.291667 -0.61964,-1.283336 -2.19873,-1.744094 -4.49791,-1.5875 l 1.05833,-2.645833 -2.11667,1.322917 c -1.16682,-1.38251 -2.36421,-2.735209 -4.497915,-3.175 -0.188918,-1.882157 -2.400277,-1.935337 -4.7625,-1.852084 v -2.38125 L 92.074999,26.9875 h -5.55625 l -0.529167,1.5875 h 5.55625 v 2.645833 l 1.5875,-2.38125 h 2.910417 c 0.976623,-0.01275 1.417502,0.861421 1.5875,2.116667 1.865488,-0.135146 2.876421,0.988174 3.704171,2.38125 -0.46288,1.388618 -0.70599,2.11796 -1.05834,3.175 l 2.64584,-1.5875 c 1.67965,0.117905 3.59713,0.02778 4.23333,1.058333 0.80563,1.476104 1.44512,2.962779 1.32292,4.497916 l -4.23334,1.322917 3.70417,1.058333 v 6.085417 c -0.27158,1.007058 -0.64996,1.992224 -2.64583,2.645833 z"
							id="path51272"
						/></g
					><g id="g51280"
						><path
							style="opacity:1;fill:#3f3432;fill-opacity:1;fill-rule:evenodd;stroke:none;stroke-width:3;stroke-linecap:round;stroke-linejoin:round;stroke-miterlimit:3;stroke-opacity:0.498674;paint-order:stroke fill markers"
							d="m 114.03542,34.13125 2.91041,-2.38125 1.05834,-1.058334 0.79375,-0.79375 v -4.7625 l -8.20209,-8.995833 H 96.837499 l -0.529167,1.322917 -2.38125,4.124446 h 10.054168 z"
							id="path51276"
						/><path
							style="opacity:1;fill:#518fd2;fill-opacity:1;fill-rule:evenodd;stroke:none;stroke-width:3;stroke-linecap:round;stroke-linejoin:round;stroke-miterlimit:3;stroke-opacity:0.498674;paint-order:stroke fill markers"
							d="m 116.94583,31.75 1.05834,-1.058334 V 27.78125 L 114.3,24.077083 115.35833,22.225 l -2.11666,1.058333 -4.7625,-4.7625 h -5.02709 c -0.25069,-0.349151 -0.38266,-0.303158 -0.52916,-0.305515 l 0.26458,-1.811152 -1.32292,1.058334 h -5.556248 l -0.611029,1.058333 h 5.373527 l -0.52916,2.645833 1.85208,-1.852083 c 0.16535,-0.0727 0.33883,-0.02697 0.52917,0.264583 H 107.95 l 4.49792,4.497917 -1.05834,2.116667 2.11667,-1.058334 3.43958,3.439584 z"
							id="path51278"
						/></g
					><g id="g51286"
						><path
							style="opacity:1;fill:#63a5d8;fill-opacity:1;fill-rule:evenodd;stroke:none;stroke-width:3;stroke-linecap:round;stroke-linejoin:round;stroke-miterlimit:3;stroke-opacity:0.498674;paint-order:stroke fill markers"
							d="m 114.56458,17.727083 4.7625,-7.672916 -1.85208,-1.0583338 -4.7625,-2.38125 -6.08542,-2.6458332 c -4.59152,1.1883233 -9.406013,2.1616763 -17.197914,0.2645833 -4.137108,0.8711998 -8.845267,1.6198199 -13.49375,2.3812499 5.671275,0.4535326 12.35559,0.047516 15.345833,4.7624998 5.063781,-3.2796341 9.374651,-2.9938097 11.641671,2.116667 h 8.20208 z"
							id="path51282"
						/><path
							style="opacity:1;fill:#e7fefe;fill-opacity:1;fill-rule:evenodd;stroke:none;stroke-width:3;stroke-linecap:round;stroke-linejoin:round;stroke-miterlimit:3;stroke-opacity:0.498674;paint-order:stroke fill markers"
							d="m 117.475,8.9958332 -4.7625,-2.38125 -3.70417,2.6458334 -8.20208,-2.6458334 7.9375,4.7624998 z"
							id="path51284"
						/></g
					></g
				><path
					style="opacity:1;fill:#3f3432;fill-opacity:1;fill-rule:evenodd;stroke:none;stroke-width:3;stroke-linecap:round;stroke-linejoin:round;stroke-miterlimit:3;stroke-opacity:0.498674;paint-order:stroke fill markers"
					d="m 62.706249,77.258332 c 0.896534,-0.362505 1.777691,-0.342935 2.645834,0 v -4.233333 c -0.835739,-0.318148 -1.707826,-0.386029 -2.645834,0 z"
					id="path51290"
				/><path
					style="opacity:1;fill:#3f3432;fill-opacity:1;fill-rule:evenodd;stroke:none;stroke-width:2.72243;stroke-linecap:round;stroke-linejoin:round;stroke-miterlimit:3;stroke-opacity:0.498674;paint-order:stroke fill markers"
					d="m 62.706249,71.172916 c 0.896534,-0.298527 1.777691,-0.28241 2.645834,0 v -3.486202 c -0.835739,-0.261998 -1.707826,-0.317899 -2.645834,0 z"
					id="path51292"
				/><path
					style="opacity:1;fill:#3f3432;fill-opacity:1;fill-rule:evenodd;stroke:none;stroke-width:2.72243;stroke-linecap:round;stroke-linejoin:round;stroke-miterlimit:3;stroke-opacity:0.498674;paint-order:stroke fill markers"
					d="m 62.706249,66.036851 c 0.896534,-0.298527 1.777691,-0.28241 2.645834,0 v -3.486202 c -0.835739,-0.261998 -1.707826,-0.317899 -2.645834,0 z"
					id="path51294"
				/></g
			><g id="g50364"
				><path
					style="opacity:1;fill:#000000;fill-opacity:1;fill-rule:evenodd;stroke:none;stroke-width:3;stroke-linecap:round;stroke-linejoin:round;stroke-miterlimit:3;stroke-opacity:0.498674;paint-order:stroke fill markers"
					d="m 55.827083,73.289582 c -0.869057,-0.02016 -1.493838,0.177859 -1.058334,1.322917 l 2.910417,3.439583 c 0.693293,0.256129 1.061491,0.01513 1.058333,-0.79375 -0.78414,-1.475328 -1.74437,-2.806363 -2.910416,-3.96875 z"
					id="path28584"
				/><path
					style="opacity:1;fill:#000000;fill-opacity:1;fill-rule:evenodd;stroke:none;stroke-width:3;stroke-linecap:round;stroke-linejoin:round;stroke-miterlimit:3;stroke-opacity:0.498674;paint-order:stroke fill markers"
					d="m 69.320832,77.522916 2.645834,-3.96875 h 1.5875 c 0,0 0,2.645833 -0.264584,2.645833 -0.264583,0 -3.175,2.38125 -3.175,2.38125 h -1.058333 z"
					id="path24410"
				/><ellipse
					style="opacity:1;fill:#ffcc00;fill-opacity:1;fill-rule:evenodd;stroke:none;stroke-width:3.28633;stroke-linecap:round;stroke-linejoin:round;stroke-miterlimit:3;stroke-opacity:0.498674;paint-order:stroke fill markers"
					id="path23572"
					cx="81.353699"
					cy="63.256485"
					rx="0.79374874"
					ry="1.7197917"
					transform="rotate(8.8500375)"
				/><path
					style="opacity:1;fill:#3f3432;fill-opacity:1;fill-rule:evenodd;stroke:none;stroke-width:3;stroke-linecap:round;stroke-linejoin:round;stroke-miterlimit:3;stroke-opacity:0.498674;paint-order:stroke fill markers"
					d="m 65.087499,80.697916 1.322918,0 6.35,-8.466667 2.910415,-5.55625 0.264584,-3.439583 -1.852084,0.264583 0.264584,-2.645833 -5.291667,0.529167 -0.79375,-1.5875 -2.910416,-2.38125 -0.264584,21.431249 z"
					id="path22271"
				/><g id="g15026"
					><path
						style="opacity:1;fill:#8e5e4c;fill-opacity:1;fill-rule:evenodd;stroke:none;stroke-width:3;stroke-linecap:round;stroke-linejoin:round;stroke-miterlimit:3;stroke-opacity:0.498674;paint-order:stroke fill markers"
						d="m 86.518749,116.68125 c -1.587512,-0.58073 -3.601256,-0.81832 -3.96875,-2.38125 v -1.5875 h 2.910417 v 1.85208 c 0.06518,0.64755 0.626836,1.39524 1.058333,2.11667 z"
						id="path3067"
					/><path
						style="opacity:1;fill:#8e5e4c;fill-opacity:1;fill-rule:evenodd;stroke:none;stroke-width:3;stroke-linecap:round;stroke-linejoin:round;stroke-miterlimit:3;stroke-opacity:0.498674;paint-order:stroke fill markers"
						d="M 81.491666,116.68125 C 79.904154,116.10052 77.89041,115.86293 77.522916,114.3 v -1.5875 h 2.910417 v 1.85208 c 0.06518,0.64755 0.626836,1.39524 1.058333,2.11667 z"
						id="path3905"
					/><path
						style="opacity:1;fill:#3f3432;fill-opacity:1;fill-rule:evenodd;stroke:none;stroke-width:3;stroke-linecap:round;stroke-linejoin:round;stroke-miterlimit:3;stroke-opacity:0.498674;paint-order:stroke fill markers"
						d="m 71.966666,111.38958 h 9.260416 c 2.462524,-0.80672 3.878215,-2.17445 4.497917,-3.96875 2e-6,-1.87546 10e-7,-3.45988 0,-5.02708 -0.767855,-2.439622 -2.274271,-2.694114 -3.704167,-3.175001 h -2.116666 c -0.992106,0.216762 -1.975265,0.458897 -2.645834,1.587501 z"
						id="path6139"
					/><path
						style="opacity:1;fill:#3f3432;fill-opacity:1;fill-rule:evenodd;stroke:none;stroke-width:3;stroke-linecap:round;stroke-linejoin:round;stroke-miterlimit:3;stroke-opacity:0.498674;paint-order:stroke fill markers"
						d="m 80.433332,96.572915 c 0.972338,-2.997306 2.625253,-5.039054 4.233334,-7.143749 l 5.291666,-6.879167 3.704167,-4.233333 7.143751,-1.322917 c 1.45056,0.68151 2.35655,2.432517 3.43958,3.96875 -3.56067,6.171802 23.74786,40.507491 -8.995831,17.4625 l -5.820833,2.381251 c -2.056502,-3.669784 -5.527078,-3.949377 -8.995834,-4.233335 z"
						id="path10170"
					/><path
						style="opacity:1;fill:#8d482f;fill-opacity:1;fill-rule:evenodd;stroke:none;stroke-width:3;stroke-linecap:round;stroke-linejoin:round;stroke-miterlimit:3;stroke-opacity:0.498674;paint-order:stroke fill markers"
						d="m 118.00417,114.3 -1.05834,-4.23333 -21.695831,-11.641671 h -1.5875 c 0.262843,-0.866115 0.694972,-1.41201 1.322916,-1.5875 L 94.45625,94.720833 c -1.078401,-0.0094 -2.141602,0.497009 -2.910418,1.058332 -0.179593,-2.49208 -0.144259,-4.973207 0.79375,-7.408333 -0.613623,0.104295 -1.249469,0.247337 -2.116666,0.79375 -0.524307,-2.296921 -0.195946,-4.41385 -0.264584,-6.614583 l -5.291666,6.879167 c 4.302522,4.237807 4.633499,7.817401 4.7625,11.377084 1.204839,2.61789 1.646701,5.22277 1.5875,7.9375 -3.614021,1.88079 -3.465096,5.19727 -3.439584,8.46667 1.491009,-2.52796 3.259729,-2.58082 5.027084,-2.64584 z"
						id="path8069"
					/><path
						style="opacity:1;fill:#e16826;fill-opacity:1;fill-rule:evenodd;stroke:none;stroke-width:3;stroke-linecap:round;stroke-linejoin:round;stroke-miterlimit:3;stroke-opacity:0.498674;paint-order:stroke fill markers"
						d="m 92.604166,106.89167 5.820833,-0.79375 c -2.882144,-2.06108 -5.232847,-4.34444 -6.35,-7.143755 l 3.704166,0.529167 c -2.249288,-5.972718 -1.83405,-7.090775 -2.38125,-11.641666 v -1.852084 l 0.264584,-7.9375 8.731251,-3.704166 -1.85208,2.645833 c -1.713612,2.351406 -2.111379,3.912794 -2.645838,5.55625 l 0.529167,0.529167 C 105.26648,81.972203 110.07775,77.694038 114.3,72.495832 c -0.42102,4.792541 1.658,7.57022 -4.7625,17.197917 7.68921,0.238301 8.76068,-5.073539 12.43542,-8.202083 0.003,6.829854 1.11657,13.576611 -7.9375,20.637504 2.95506,0.58241 5.95137,-0.97405 8.99583,-5.027087 0.4195,8.194037 -4.81578,12.844127 -9.70069,14.364157 -7.5098,2.3368 -18.613076,-1.12515 -20.726394,-4.57457 z"
						id="path12721"
					/><path
						style="opacity:1;fill:#fcd26f;fill-opacity:1;fill-rule:evenodd;stroke:none;stroke-width:3;stroke-linecap:round;stroke-linejoin:round;stroke-miterlimit:3;stroke-opacity:0.498674;paint-order:stroke fill markers"
						d="m 111.38958,114.3 -7.67291,-13.49375 4.7625,1.05833 -8.995838,-10.847914 v -1.058334 h 5.820838 l -7.408338,-7.408333 -4.497917,3.439583 v 1.852084 l 3.96875,-2.116667 v 5.820833 l -1.322916,0.529167 v 2.38125 l 1.5875,-0.79375 1.5875,3.96875 -1.058334,1.058333 -0.264583,0.264583 8.466668,15.610415 c 0.97161,0.49841 1.4011,0.27807 1.5875,-0.26458 l -5.55625,-10.05417 1.05833,-0.52916 6.35,11.1125 c 0.92495,0.56612 1.40707,0.30147 1.5875,-0.52917 z"
						id="path14323"
					/><path
						style="opacity:1;fill:#c15333;fill-rule:evenodd;stroke:none;stroke-width:3;stroke-linecap:round;stroke-linejoin:round;stroke-miterlimit:3;stroke-opacity:0.498674;paint-order:stroke fill markers;fill-opacity:1"
						d="M 97.895832,121.70833 H 119.0625 L 118.00417,114.3 92.604166,114.56458 Z"
						id="path1822"
					/><path
						style="opacity:1;fill:#e16826;fill-rule:evenodd;stroke:none;stroke-width:3;stroke-linecap:round;stroke-linejoin:round;stroke-miterlimit:3;stroke-opacity:0.498674;paint-order:stroke fill markers;fill-opacity:1"
						d="m 92.604166,114.56458 c 4.971787,0.64678 5.259311,5.60897 5.820833,10.31875 -2.096374,-1.61152 -4.200727,-3.25582 -5.820833,-2.91041 -2.770137,-4.64958 -1.427595,-6.92718 0,-7.40834 z"
						id="path1662"
					/><path
						style="opacity:1;fill:#e16826;fill-rule:evenodd;stroke:none;stroke-width:3;stroke-linecap:round;stroke-linejoin:round;stroke-miterlimit:3;stroke-opacity:0.498674;paint-order:stroke fill markers;fill-opacity:1"
						d="m 118.00417,114.3 c -0.74678,1.69157 -3.47751,2.90087 -0.26459,7.40833 3.15898,0.51491 4.72038,2.08741 6.61459,3.43959 -1.39132,-3.53199 0.63646,-7.38902 -6.35,-10.84792 z"
						id="path1820"
					/><path
						style="opacity:1;fill:#e16826;fill-rule:evenodd;stroke:none;stroke-width:3;stroke-linecap:round;stroke-linejoin:round;stroke-miterlimit:3;stroke-opacity:0.498674;paint-order:stroke fill markers;fill-opacity:1"
						d="m 109.80208,114.56458 c 4.97178,0.64678 5.25931,5.60897 5.82083,10.31875 -2.09637,-1.61152 -4.20073,-3.25582 -5.82083,-2.91041 -3.10085,-3.64508 -1.45099,-6.46381 0,-7.40834 z"
						id="path1816"
					/><path
						style="opacity:1;fill:#e16826;fill-rule:evenodd;stroke:none;stroke-width:3;stroke-linecap:round;stroke-linejoin:round;stroke-miterlimit:3;stroke-opacity:0.498674;paint-order:stroke fill markers;fill-opacity:1"
						d="m 100.80625,114.56458 c 4.97178,0.64678 5.25931,5.60897 5.82083,10.31875 -2.09637,-1.61152 -4.20073,-3.25582 -5.82083,-2.91041 -3.098511,-3.63296 -1.359878,-5.99142 0,-7.40834 z"
						id="path1814"
					/><path
						style="opacity:1;fill:#8d482f;fill-opacity:1;fill-rule:evenodd;stroke:none;stroke-width:3;stroke-linecap:round;stroke-linejoin:round;stroke-miterlimit:3;stroke-opacity:0.498674;paint-order:stroke fill markers"
						d="m 82.285416,87.841666 c 2.96883,-5.267156 7.532591,-8.603954 11.906249,-12.170834 -3.341468,-0.05379 -6.413677,-0.775837 -8.995833,-2.645833 -2.394502,4.414404 -4.794567,8.829064 -6.879166,13.229167 z"
						id="path14450"
					/><path
						style="opacity:1;fill:#3f3432;fill-opacity:1;fill-rule:evenodd;stroke:none;stroke-width:3;stroke-linecap:round;stroke-linejoin:round;stroke-miterlimit:3;stroke-opacity:0.498674;paint-order:stroke fill markers"
						d="m 78.581249,95.249999 c 0.945615,-2.682864 2.244935,-5.104622 3.704167,-7.408333 -0.774373,-1.121037 -1.957381,-1.801164 -3.96875,-1.5875 0.04458,3.008522 -0.331133,8.228342 0.264583,8.995833 z"
						id="path14448"
					/></g
				><g id="g15056" transform="matrix(-1,0,0,1,128.05791,0)"
					><path
						style="opacity:1;fill:#4b6b8e;fill-opacity:1;fill-rule:evenodd;stroke:none;stroke-width:3;stroke-linecap:round;stroke-linejoin:round;stroke-miterlimit:3;stroke-opacity:0.498674;paint-order:stroke fill markers"
						d="m 86.518749,116.68125 c -1.587512,-0.58073 -3.601256,-0.81832 -3.96875,-2.38125 v -1.5875 h 2.910417 v 1.85208 c 0.06518,0.64755 0.626836,1.39524 1.058333,2.11667 z"
						id="path15028"
					/><path
						style="opacity:1;fill:#4b6b8e;fill-opacity:1;fill-rule:evenodd;stroke:none;stroke-width:3;stroke-linecap:round;stroke-linejoin:round;stroke-miterlimit:3;stroke-opacity:0.498674;paint-order:stroke fill markers"
						d="M 81.491666,116.68125 C 79.904154,116.10052 77.89041,115.86293 77.522916,114.3 v -1.5875 h 2.910417 v 1.85208 c 0.06518,0.64755 0.626836,1.39524 1.058333,2.11667 z"
						id="path15030"
					/><path
						style="opacity:1;fill:#3f3432;fill-opacity:1;fill-rule:evenodd;stroke:none;stroke-width:3;stroke-linecap:round;stroke-linejoin:round;stroke-miterlimit:3;stroke-opacity:0.498674;paint-order:stroke fill markers"
						d="m 71.966666,111.38958 h 9.260416 c 2.462524,-0.80672 3.878215,-2.17445 4.497917,-3.96875 2e-6,-1.87546 10e-7,-3.45988 0,-5.02708 -0.767855,-2.439622 -2.274271,-2.694114 -3.704167,-3.175001 h -2.116666 c -0.992106,0.216762 -1.975265,0.458897 -2.645834,1.587501 z"
						id="path15032"
					/><path
						style="opacity:1;fill:#3f3432;fill-opacity:1;fill-rule:evenodd;stroke:none;stroke-width:3;stroke-linecap:round;stroke-linejoin:round;stroke-miterlimit:3;stroke-opacity:0.498674;paint-order:stroke fill markers"
						d="m 80.433332,96.572915 c 0.972338,-2.997306 2.625253,-5.039054 4.233334,-7.143749 l 5.291666,-6.879167 3.704167,-4.233333 7.143751,-1.322917 c 1.45056,0.68151 2.35655,2.432517 3.43958,3.96875 -3.56067,6.171802 23.74786,40.507491 -8.995831,17.4625 l -5.820833,2.381251 c -2.056502,-3.669784 -5.527078,-3.949377 -8.995834,-4.233335 z"
						id="path15034"
					/><path
						style="opacity:1;fill:#537bb5;fill-opacity:1;fill-rule:evenodd;stroke:none;stroke-width:3;stroke-linecap:round;stroke-linejoin:round;stroke-miterlimit:3;stroke-opacity:0.498674;paint-order:stroke fill markers"
						d="m 118.00417,114.3 -1.05834,-4.23333 -21.695831,-11.641671 h -1.5875 c 0.262843,-0.866115 0.694972,-1.41201 1.322916,-1.5875 L 94.45625,94.720833 c -1.078401,-0.0094 -2.141602,0.497009 -2.910418,1.058332 -0.179593,-2.49208 -0.144259,-4.973207 0.79375,-7.408333 -0.613623,0.104295 -1.249469,0.247337 -2.116666,0.79375 -0.524307,-2.296921 -0.195946,-4.41385 -0.264584,-6.614583 l -5.291666,6.879167 c 4.302522,4.237807 4.633499,7.817401 4.7625,11.377084 1.204839,2.61789 1.646701,5.22277 1.5875,7.9375 -3.614021,1.88079 -3.465096,5.19727 -3.439584,8.46667 1.491009,-2.52796 3.259729,-2.58082 5.027084,-2.64584 z"
						id="path15036"
					/><path
						style="opacity:1;fill:#63a5d8;fill-opacity:1;fill-rule:evenodd;stroke:none;stroke-width:3;stroke-linecap:round;stroke-linejoin:round;stroke-miterlimit:3;stroke-opacity:0.498674;paint-order:stroke fill markers"
						d="m 92.604166,106.89167 5.820833,-0.79375 c -2.882144,-2.06108 -5.232847,-4.34444 -6.35,-7.143755 l 3.704166,0.529167 c -2.249288,-5.972718 -1.83405,-7.090775 -2.38125,-11.641666 v -1.852084 l 0.264584,-7.9375 8.731251,-3.704166 -1.85208,2.645833 c -1.713612,2.351406 -2.111379,3.912794 -2.645838,5.55625 l 0.529167,0.529167 C 105.26648,81.972203 110.07775,77.694038 114.3,72.495832 c -0.42102,4.792541 1.658,7.57022 -4.7625,17.197917 7.68921,0.238301 8.76068,-5.073539 12.43542,-8.202083 0.003,6.829854 1.11657,13.576611 -7.9375,20.637504 2.95506,0.58241 5.95137,-0.97405 8.99583,-5.027087 0.4195,8.194037 -4.81578,12.844127 -9.70069,14.364157 -7.5098,2.3368 -18.613076,-1.12515 -20.726394,-4.57457 z"
						id="path15038"
					/><path
						style="opacity:1;fill:#dff7f8;fill-opacity:1;fill-rule:evenodd;stroke:none;stroke-width:3;stroke-linecap:round;stroke-linejoin:round;stroke-miterlimit:3;stroke-opacity:0.498674;paint-order:stroke fill markers"
						d="m 111.38958,114.3 -7.67291,-13.49375 4.7625,1.05833 -8.995838,-10.847914 v -1.058334 h 5.820838 l -7.408338,-7.408333 -4.497917,3.439583 v 1.852084 l 3.96875,-2.116667 v 5.820833 l -1.322916,0.529167 v 2.38125 l 1.5875,-0.79375 1.5875,3.96875 -1.058334,1.058333 -0.264583,0.264583 8.466668,15.610415 c 0.97161,0.49841 1.4011,0.27807 1.5875,-0.26458 l -5.55625,-10.05417 1.05833,-0.52916 6.35,11.1125 c 0.92495,0.56612 1.40707,0.30147 1.5875,-0.52917 z"
						id="path15040"
					/><path
						style="opacity:1;fill:#63a5d8;fill-opacity:1;fill-rule:evenodd;stroke:none;stroke-width:3;stroke-linecap:round;stroke-linejoin:round;stroke-miterlimit:3;stroke-opacity:0.498674;paint-order:stroke fill markers"
						d="M 97.895832,121.70833 H 119.0625 L 118.00417,114.3 92.604166,114.56458 Z"
						id="path15042"
					/><path
						style="opacity:1;fill:#dff7f8;fill-opacity:1;fill-rule:evenodd;stroke:none;stroke-width:3;stroke-linecap:round;stroke-linejoin:round;stroke-miterlimit:3;stroke-opacity:0.498674;paint-order:stroke fill markers"
						d="m 92.604166,114.56458 c 4.971787,0.64678 5.259311,5.60897 5.820833,10.31875 -2.096374,-1.61152 -4.200727,-3.25582 -5.820833,-2.91041 -2.770137,-4.64958 -1.427595,-6.92718 0,-7.40834 z"
						id="path15044"
					/><path
						style="opacity:1;fill:#dff7f8;fill-opacity:1;fill-rule:evenodd;stroke:none;stroke-width:3;stroke-linecap:round;stroke-linejoin:round;stroke-miterlimit:3;stroke-opacity:0.498674;paint-order:stroke fill markers"
						d="m 118.00417,114.3 c -0.74678,1.69157 -3.47751,2.90087 -0.26459,7.40833 3.15898,0.51491 4.72038,2.08741 6.61459,3.43959 -1.39132,-3.53199 0.63646,-7.38902 -6.35,-10.84792 z"
						id="path15046"
					/><path
						style="opacity:1;fill:#dff7f8;fill-opacity:1;fill-rule:evenodd;stroke:none;stroke-width:3;stroke-linecap:round;stroke-linejoin:round;stroke-miterlimit:3;stroke-opacity:0.498674;paint-order:stroke fill markers"
						d="m 109.80208,114.56458 c 4.97178,0.64678 5.25931,5.60897 5.82083,10.31875 -2.09637,-1.61152 -4.20073,-3.25582 -5.82083,-2.91041 -3.10085,-3.64508 -1.45099,-6.46381 0,-7.40834 z"
						id="path15048"
					/><path
						style="opacity:1;fill:#dff7f8;fill-opacity:1;fill-rule:evenodd;stroke:none;stroke-width:3;stroke-linecap:round;stroke-linejoin:round;stroke-miterlimit:3;stroke-opacity:0.498674;paint-order:stroke fill markers"
						d="m 100.80625,114.56458 c 4.97178,0.64678 5.25931,5.60897 5.82083,10.31875 -2.09637,-1.61152 -4.20073,-3.25582 -5.82083,-2.91041 -3.098511,-3.63296 -1.359878,-5.99142 0,-7.40834 z"
						id="path15050"
					/><path
						style="opacity:1;fill:#537bb5;fill-opacity:1;fill-rule:evenodd;stroke:none;stroke-width:3;stroke-linecap:round;stroke-linejoin:round;stroke-miterlimit:3;stroke-opacity:0.498674;paint-order:stroke fill markers"
						d="m 82.285416,87.841666 c 2.96883,-5.267156 7.532591,-8.603954 11.906249,-12.170834 -3.341468,-0.05379 -6.413677,-0.775837 -8.995833,-2.645833 -2.394502,4.414404 -4.794567,8.829064 -6.879166,13.229167 z"
						id="path15052"
					/><path
						style="opacity:1;fill:#3f3432;fill-opacity:1;fill-rule:evenodd;stroke:none;stroke-width:3;stroke-linecap:round;stroke-linejoin:round;stroke-miterlimit:3;stroke-opacity:0.498674;paint-order:stroke fill markers"
						d="m 78.581249,95.249999 c 0.945615,-2.682864 2.244935,-5.104622 3.704167,-7.408333 -0.774373,-1.121037 -1.957381,-1.801164 -3.96875,-1.5875 0.04458,3.008522 -0.331133,8.228342 0.264583,8.995833 z"
						id="path15054"
					/></g
				><ellipse
					style="opacity:1;fill:#ffcc00;fill-opacity:1;fill-rule:evenodd;stroke:none;stroke-width:3.28633;stroke-linecap:round;stroke-linejoin:round;stroke-miterlimit:3;stroke-opacity:0.498674;paint-order:stroke fill markers"
					id="ellipse28748"
					cx="-45.180019"
					cy="82.958107"
					rx="0.79374874"
					ry="1.7197917"
					transform="matrix(-0.9880944,0.15384882,0.15384882,0.9880944,0,0)"
				/><path
					style="opacity:1;fill:#3f3432;fill-opacity:1;fill-rule:evenodd;stroke:none;stroke-width:3;stroke-linecap:round;stroke-linejoin:round;stroke-miterlimit:3;stroke-opacity:0.498674;paint-order:stroke fill markers"
					d="m 62.706249,80.697916 h -0.529166 c -3.470294,-4.631855 -7.209531,-9.305371 -9.525,-13.758334 -0.30191,-1.064607 -0.383787,-2.427419 -0.529167,-3.704166 l 2.38125,0.264583 c -0.720294,-0.99771 -0.638669,-1.791706 -0.79375,-2.645833 1.764045,0.176245 4.018529,-0.101857 5.291667,0.529167 0.151417,-0.418626 0.490297,-0.874269 0.79375,-1.322917 l 2.910416,-2.645833 0.529167,21.431249 v 1.852084 z"
					id="path26796"
				/><path
					style="opacity:1;fill:#3f3432;fill-opacity:1;fill-rule:evenodd;stroke:none;stroke-width:3;stroke-linecap:round;stroke-linejoin:round;stroke-miterlimit:3;stroke-opacity:0.498674;paint-order:stroke fill markers"
					d="m 62.706249,60.854166 h 2.645834 v -3.439583 l -1.322917,-1.058334 -1.322917,1.058334 z"
					id="path30202"
				/><path
					style="opacity:1;fill:#e7d197;fill-opacity:1;fill-rule:evenodd;stroke:none;stroke-width:3;stroke-linecap:round;stroke-linejoin:round;stroke-miterlimit:3;stroke-opacity:0.498674;paint-order:stroke fill markers"
					d="m 65.087499,80.697916 h 0.529167 c 1.346329,-2.671463 2.854544,-5.41335 2.645833,-7.408334 l 1.058333,0.529167 0.79375,-1.058333 -1.852083,-1.058334 v -3.175 l 1.852083,0.79375 5.027084,-2.38125 -4.7625,1.058334 -2.116667,-1.322917 v -2.38125 l 2.116667,1.058334 3.439583,-1.852084 -3.175,0.79375 -2.38125,-2.645833 v -1.852083 l -2.910416,-2.38125 v 3.439583 l -1.322917,-0.264583 -1.322917,0.264583 v -3.439583 l -2.910416,2.645833 v 1.852083 l -2.116667,2.116667 -3.175,-0.529167 3.175,1.852084 2.116667,-1.058334 v 2.645833 l -1.852084,1.058334 -5.027083,-1.058334 5.027083,2.645834 1.852084,-1.058334 v 3.175 l -1.852084,0.79375 0.79375,1.322917 1.058334,-0.264583 c 0.07946,2.216308 1.409353,4.664179 2.910416,7.14375 h 0.529168 v -1.852084 h 1.852082 z"
					id="path21931"
				/><path
					style="opacity:1;fill:#ce4c18;fill-opacity:1;fill-rule:evenodd;stroke:none;stroke-width:3;stroke-linecap:round;stroke-linejoin:round;stroke-miterlimit:3;stroke-opacity:0.498674;paint-order:stroke fill markers"
					d="m 66.145832,80.697916 2.645834,-3.439584 0.529166,0.264584 c 0.168653,0.989198 1.08425,0.585747 1.058334,0.529166 l 1.322916,1.058334 -1.852083,1.5875 z"
					id="path23514"
				/><path
					style="opacity:1;fill:#ce4c18;fill-opacity:1;fill-rule:evenodd;stroke:none;stroke-width:3;stroke-linecap:round;stroke-linejoin:round;stroke-miterlimit:3;stroke-opacity:0.498674;paint-order:stroke fill markers"
					d="m 70.379166,78.052082 2.645833,-3.175 2.38125,0.529167 c -0.843898,1.150375 -1.963656,2.360286 -3.704167,3.704167 z"
					id="path23516"
				/><path
					style="opacity:1;fill:#ce4c18;fill-opacity:1;fill-rule:evenodd;stroke:none;stroke-width:3;stroke-linecap:round;stroke-linejoin:round;stroke-miterlimit:3;stroke-opacity:0.498674;paint-order:stroke fill markers"
					d="m 75.406249,75.406249 c 1.286347,-1.316741 1.275358,-4.603016 1.058333,-8.202083 l -0.79375,-0.529167 c -2.026175,3.383018 -4.153201,6.820739 -6.879166,10.583333 l 0.529167,0.264585 2.645834,-3.96875 c 0.638206,-0.07186 1.070736,-0.02839 1.058332,0.264582 v 1.058333 z"
					id="path23518"
				/><path
					style="opacity:1;fill:#518fd2;fill-opacity:1;fill-rule:evenodd;stroke:none;stroke-width:3;stroke-linecap:round;stroke-linejoin:round;stroke-miterlimit:3;stroke-opacity:0.498674;paint-order:stroke fill markers"
					d="m 62.177083,80.697916 h -3.704167 c -2.147585,-1.94146 -5.732937,-3.403341 -6.879167,-8.202084 v -4.233333 c 0.07704,-1.535163 0.636263,-1.156912 1.058334,-1.322917 0.79375,2.645833 -0.553978,5.124593 2.38125,7.9375 l 2.645833,3.175 c 0.647258,0.222564 1.069805,0.0734 1.058333,-0.79375 -0.96248,-1.778907 -2.20523,-3.126272 -2.910416,-3.96875 l 1.058333,-0.529166 z"
					id="path28388"
				/><path
					style="opacity:1;fill:#518fd2;fill-opacity:1;fill-rule:evenodd;stroke:none;stroke-width:3;stroke-linecap:round;stroke-linejoin:round;stroke-miterlimit:3;stroke-opacity:0.498674;paint-order:stroke fill markers"
					d="m 54.768749,74.612499 c 0.03455,-0.981846 0.33244,-1.418052 1.058334,-1.322917 l 1.058333,-0.529166 -4.233333,-5.820834 c 0.03752,2.71525 -1.151182,5.719808 2.116666,7.672917 z"
					id="path28582"
				/><path
					style="opacity:1;fill:#3f3432;fill-opacity:1;fill-rule:evenodd;stroke:none;stroke-width:3;stroke-linecap:round;stroke-linejoin:round;stroke-miterlimit:3;stroke-opacity:0.498674;paint-order:stroke fill markers"
					d="m 62.970833,81.756249 h 2.38125 v 1.058333 h 1.058333 v 4.497917 l -2.38125,2.645833 -2.38125,-2.645833 v -4.497917 h 1.322917 z"
					id="path30549"
				/><path
					style="opacity:1;fill:#e7d197;fill-opacity:1;fill-rule:evenodd;stroke:none;stroke-width:3;stroke-linecap:round;stroke-linejoin:round;stroke-miterlimit:3;stroke-opacity:0.498674;paint-order:stroke fill markers"
					d="m 61.647916,87.312499 -1.852083,-2.116667 v -2.38125 h -1.322917 v -1.058333 h 2.38125 v 1.058333 h 0.79375 z"
					id="path30551"
				/><path
					style="opacity:1;fill:#e7d197;fill-opacity:1;fill-rule:evenodd;stroke:none;stroke-width:3;stroke-linecap:round;stroke-linejoin:round;stroke-miterlimit:3;stroke-opacity:0.498674;paint-order:stroke fill markers"
					d="M 66.410417,87.312499 68.2625,85.195832 v -2.38125 h 1.322917 v -1.058333 h -2.38125 v 1.058333 h -0.79375 z"
					id="path30898"
				/><path
					style="opacity:1;fill:#3f3432;fill-opacity:1;fill-rule:evenodd;stroke:none;stroke-width:3;stroke-linecap:round;stroke-linejoin:round;stroke-miterlimit:3;stroke-opacity:0.498674;paint-order:stroke fill markers"
					d="m 61.912499,114.3 4.497917,-0.26458 1.322916,-1.05834 8.73125,-26.722914 c 0.04053,-1.860869 0.683029,-2.920645 1.058334,-4.233334 l 0.79375,-1.322916 1.5875,-3.175 0.79375,-1.322917 c 1.044876,-1.507415 0.928292,-3.475768 0.529166,-5.55625 -0.973869,-0.110906 -2.16044,-0.682504 -2.645833,0.264583 v 2.645834 2.38125 l -2.645833,2.645833 -1.322917,1.852083 C 71.135476,85.134543 67.81044,89.916323 64.029166,94.456249 60.068627,89.824408 56.973611,85.107638 53.445833,80.433332 l -1.322917,-1.852083 -2.38125,-2.645833 v -2.645834 -2.38125 c -0.910686,-0.647779 -1.789755,-0.679987 -2.645833,-0.264583 -0.621093,1.493695 -0.99511,3.098426 0.529166,5.55625 l 0.529167,1.058333 1.5875,3.439584 0.79375,1.058333 c 0.423567,1.518409 1.422917,3.192203 1.058333,4.497917 l 7.9375,25.929164 z"
					id="path34868"
				/><path
					style="opacity:1;fill:#cfab52;fill-opacity:1;fill-rule:evenodd;stroke:none;stroke-width:3;stroke-linecap:round;stroke-linejoin:round;stroke-miterlimit:3;stroke-opacity:0.498674;paint-order:stroke fill markers"
					d="m 64.029167,116.15208 2.38125,-2.11666 v -1.85209 l -2.38125,1.32292 -2.38125,-1.32292 L 61.9125,114.3 Z"
					id="path32127"
				/><path
					style="opacity:1;fill:#cfab52;fill-opacity:1;fill-rule:evenodd;stroke:none;stroke-width:3;stroke-linecap:round;stroke-linejoin:round;stroke-miterlimit:3;stroke-opacity:0.498674;paint-order:stroke fill markers"
					d="m 64.029167,112.18333 2.38125,-1.5875 0.264583,-3.70416 -2.645833,1.85208 -2.645834,-1.85208 0.264584,3.70416 z"
					id="path32528"
				/><path
					style="opacity:1;fill:#e7d197;fill-opacity:1;fill-rule:evenodd;stroke:none;stroke-width:3;stroke-linecap:round;stroke-linejoin:round;stroke-miterlimit:3;stroke-opacity:0.498674;paint-order:stroke fill markers"
					d="m 64.029167,107.15625 2.910416,-2.38125 0.264584,-3.43958 -3.175,2.38125 -3.175,-2.38125 v 3.175 z"
					id="path32530"
				/><path
					style="opacity:1;fill:#e7d197;fill-opacity:1;fill-rule:evenodd;stroke:none;stroke-width:3;stroke-linecap:round;stroke-linejoin:round;stroke-miterlimit:3;stroke-opacity:0.498674;paint-order:stroke fill markers"
					d="m 64.029167,101.4677 3.439583,-2.513533 v -5.027084 l -3.439583,3.704167 -3.439584,-3.704167 v 5.027084 z"
					id="path32532"
				/><path
					style="opacity:1;fill:#ce4c18;fill-opacity:1;fill-rule:evenodd;stroke:none;stroke-width:3;stroke-linecap:round;stroke-linejoin:round;stroke-miterlimit:3;stroke-opacity:0.498674;paint-order:stroke fill markers"
					d="m 78.581249,70.908332 c 0.593668,-0.310316 1.569837,-0.325908 2.645833,-0.264583 -0.738593,-0.947054 -1.437828,-1.911985 -2.645833,-2.645833 z"
					id="path33355"
				/><path
					style="opacity:1;fill:#ce4c18;fill-opacity:1;fill-rule:evenodd;stroke:none;stroke-width:3;stroke-linecap:round;stroke-linejoin:round;stroke-miterlimit:3;stroke-opacity:0.498674;paint-order:stroke fill markers"
					d="m 78.581249,75.935416 v -2.38125 c 1.296839,0.633516 1.756186,1.618905 2.116667,2.645833 l -0.79375,1.322917 c 0.116701,-0.58177 -0.46258,-1.09789 -1.322917,-1.5875 z"
					id="path33357"
				/><path
					style="opacity:1;fill:#ce4c18;fill-opacity:1;fill-rule:evenodd;stroke:none;stroke-width:3;stroke-linecap:round;stroke-linejoin:round;stroke-miterlimit:3;stroke-opacity:0.498674;paint-order:stroke fill markers"
					d="m 74.612499,80.433332 1.322917,-1.852083 c 1.434284,0.558865 1.815076,1.358994 2.38125,2.116667 l -0.79375,1.322916 c -0.733865,-1.042865 -1.591591,-1.816435 -2.910417,-1.5875 z"
					id="path33359"
				/><path
					style="opacity:1;fill:#ce4c18;fill-opacity:1;fill-rule:evenodd;stroke:none;stroke-width:3;stroke-linecap:round;stroke-linejoin:round;stroke-miterlimit:3;stroke-opacity:0.498674;paint-order:stroke fill markers"
					d="m 69.056249,90.752082 c 2.169964,-2.09454 4.665642,-3.541705 7.408333,-4.497916 v 10.054166 l -7.672916,15.610418 -1.058334,1.05833 c 0.828364,-7.28309 1.443615,-14.635085 1.322917,-22.224998 z"
					id="path33361"
				/><path
					style="opacity:1;fill:#518fd2;fill-opacity:1;fill-rule:evenodd;stroke:none;stroke-width:3;stroke-linecap:round;stroke-linejoin:round;stroke-miterlimit:3;stroke-opacity:0.498674;paint-order:stroke fill markers"
					d="m 60.324999,112.7125 -0.79375,-0.52917 -7.672916,-15.610415 c -0.513583,0.24759 -0.103539,-6.167821 -0.264584,-10.318749 1.392871,0.290165 3.722022,1.631902 7.408334,4.497916 0.03914,5.765197 0.0067,11.019298 1.322916,21.960418 z"
					id="path33363"
				/><path
					style="opacity:1;fill:#518fd2;fill-opacity:1;fill-rule:evenodd;stroke:none;stroke-width:3;stroke-linecap:round;stroke-linejoin:round;stroke-miterlimit:3;stroke-opacity:0.498674;paint-order:stroke fill markers"
					d="m 50.535416,81.756249 c 0.876978,-1.100454 1.872528,-1.361541 2.910417,-1.322917 l -1.322917,-1.852083 c -1.052714,0.368528 -1.792494,1.144322 -2.381249,2.116668 z"
					id="path33365"
				/><path
					style="opacity:1;fill:#518fd2;fill-opacity:1;fill-rule:evenodd;stroke:none;stroke-width:3;stroke-linecap:round;stroke-linejoin:round;stroke-miterlimit:3;stroke-opacity:0.498674;paint-order:stroke fill markers"
					d="m 49.741666,75.935416 v -2.645834 c -0.872028,0.7196 -1.697083,1.509895 -2.116667,2.910417 0.148521,0.297042 0.292322,0.584643 0.529167,1.058333 0.590792,-1.103509 1.102827,-1.3603 1.5875,-1.322916 z"
					id="path33371"
				/><path
					style="opacity:1;fill:#518fd2;fill-opacity:1;fill-rule:evenodd;stroke:none;stroke-width:3;stroke-linecap:round;stroke-linejoin:round;stroke-miterlimit:3;stroke-opacity:0.498674;paint-order:stroke fill markers"
					d="m 47.095833,70.643749 c 0.935341,-0.0988 1.808257,0.02101 2.645833,0.264583 l -0.264583,-2.645833 c -1.063407,0.564066 -2.066991,1.179088 -2.38125,2.38125 z"
					id="path33373"
				/><g id="g46006" style="opacity:1"
					><path
						style="opacity:1;fill:#ce4c18;fill-opacity:1;fill-rule:evenodd;stroke:none;stroke-width:3;stroke-linecap:round;stroke-linejoin:round;stroke-miterlimit:3;stroke-opacity:0.498674;paint-order:stroke fill markers"
						d="m 73.554166,58.737499 h -3.96875 c -2.066951,-1.189846 -3.160137,-1.67324 -3.96875,-2.910416 v -1.852084 c 1.026786,-2.501645 2.580934,-3.846524 3.96875,-5.55625 1.007188,3.4542 1.976505,6.910152 3.96875,10.31875 z"
						id="path37028"
					/><g id="g45985"
						><path
							style="opacity:1;fill:#3f3432;fill-opacity:1;fill-rule:evenodd;stroke:none;stroke-width:3;stroke-linecap:round;stroke-linejoin:round;stroke-miterlimit:3;stroke-opacity:0.498674;paint-order:stroke fill markers"
							d="m 115.35833,60.060416 -2.64583,-4.497917 c -6.86616,1.176988 -12.65117,-1.628697 -17.197918,-8.995833 -1.450888,-4.00052 -2.629649,-8.414521 -5.027083,-10.847916 l -1.5875,-0.79375 c -1.10955,-0.302111 -0.981957,-0.758659 -6.35,-0.529167 l -6.614583,9.260416 c -0.166933,0.813441 -0.380993,1.321942 -0.264584,3.96875 l 0.529167,11.377084 c 1.001783,3.205508 2.011923,6.409849 5.55625,9.260416 8.731072,6.505155 15.354036,5.84695 21.695831,4.233333 3.46424,-1.416128 6.53612,-3.206482 8.46667,-6.085416 z"
							id="path41594"
						/><path
							style="opacity:1;fill:#ce4c18;fill-opacity:1;fill-rule:evenodd;stroke:none;stroke-width:3;stroke-linecap:round;stroke-linejoin:round;stroke-miterlimit:3;stroke-opacity:0.498674;paint-order:stroke fill markers"
							d="m 107.95,59.795833 0.26458,-3.175 c -2.15651,3.094175 -5.61471,9.56322 -10.318748,8.202083 v 1.852083 l 2.910418,1.852083 c 6.53106,-5.870034 5.73149,-6.511911 7.14375,-8.731249 z"
							id="path37667"
						/><path
							style="opacity:1;fill:#e7d197;fill-opacity:1;fill-rule:evenodd;stroke:none;stroke-width:3;stroke-linecap:round;stroke-linejoin:round;stroke-miterlimit:3;stroke-opacity:0.498674;paint-order:stroke fill markers"
							d="m 104.24583,66.410416 1.85209,-6.614583 11.64166,0.264583 5.55625,11.377083 c -5.09182,-2.903838 -9.69892,-6.280831 -19.05,-5.027083 z"
							id="path37444"
						/><path
							style="opacity:1;fill:#ce4c18;fill-opacity:1;fill-rule:evenodd;stroke:none;stroke-width:3;stroke-linecap:round;stroke-linejoin:round;stroke-miterlimit:3;stroke-opacity:0.498674;paint-order:stroke fill markers"
							d="m 89.693749,64.558333 1.852083,-1.852084 -2.910416,-1.322916 5.556249,-6.614584 -8.731249,3.704167 -1.058334,-1.058333 -2.38125,-0.264584 c 0.961154,2.064457 2.283442,3.93781 1.5875,6.879167 2.183159,-0.371742 4.31103,-0.547568 6.085417,0.529167 z"
							id="path38682"
						/><path
							style="opacity:1;fill:#e7d197;fill-opacity:1;fill-rule:evenodd;stroke:none;stroke-width:3;stroke-linecap:round;stroke-linejoin:round;stroke-miterlimit:3;stroke-opacity:0.498674;paint-order:stroke fill markers"
							d="m 87.312499,70.908332 v -3.96875 l 6.35,-6.349999 4.233333,4.233333 c 0,0 0,6.085416 0,6.085416 z"
							id="path37661"
						/><path
							style="opacity:1;fill:#ce4c18;fill-opacity:1;fill-rule:evenodd;stroke:none;stroke-width:3;stroke-linecap:round;stroke-linejoin:round;stroke-miterlimit:3;stroke-opacity:0.498674;paint-order:stroke fill markers"
							d="m 79.374999,51.064583 v -3.704167 c 5.590125,-1.595304 5.641499,-4.955394 6.879167,-7.9375 -0.173641,-0.437326 -0.739872,-0.746038 -2.910417,-0.529166 l -0.529167,-1.322917 c 1.515057,-0.104687 3.743666,-0.956501 4.497917,-0.264583 l 1.5875,-2.38125 1.5875,0.79375 c -0.06092,1.176945 0.239388,2.756701 -0.264583,3.439583 1.557821,1.612065 2.301043,3.471734 3.174999,5.291666 C 92.115058,43.379196 91.122632,42.25443 88.9,41.275 c -3.533351,5.957903 -6.659029,8.153702 -9.525001,9.789583 z"
							id="path38684"
						/><path
							style="opacity:1;fill:#e7d197;fill-opacity:1;fill-rule:evenodd;stroke:none;stroke-width:3;stroke-linecap:round;stroke-linejoin:round;stroke-miterlimit:3;stroke-opacity:0.498674;paint-order:stroke fill markers"
							d="m 85.724999,57.149999 v -6.35 C 78.709766,51.109395 73.772623,46.204584 69.056249,40.745833 l 6.614583,18.25625 z"
							id="path37663"
						/><path
							style="opacity:1;fill:#e7d197;fill-opacity:1;fill-rule:evenodd;stroke:none;stroke-width:3;stroke-linecap:round;stroke-linejoin:round;stroke-miterlimit:3;stroke-opacity:0.498674;paint-order:stroke fill markers"
							d="m 83.608332,43.656249 2.116667,-3.439583 -4.7625,-8.73125 c -1.269546,-6.634433 1.383297,-10.135974 2.116667,-15.08125 L 70.643749,30.1625 c 2.285127,4.284632 4.448611,8.619039 5.291667,13.493749 z"
							id="path37665"
						/></g
					><g id="g45975"
						><path
							style="opacity:1;fill:#3f3432;fill-opacity:1;fill-rule:evenodd;stroke:none;stroke-width:3;stroke-linecap:round;stroke-linejoin:round;stroke-miterlimit:3;stroke-opacity:0.498674;paint-order:stroke fill markers"
							d="m 109.5375,53.445833 -2.64583,-1.058334 -1.5875,-0.79375 c -3.59086,-1.561967 -5.01038,-3.161542 -6.350005,-4.7625 -0.725014,-3.254933 -2.245142,-6.51944 -4.233332,-9.789582 C 91.830049,32.64754 88.616078,30.73736 84.931249,31.75 l 1.058333,-3.175 0.529167,-1.5875 0.79375,-2.645834 h 15.610421 l 10.84791,14.022917 z"
							id="path44500"
						/><path
							style="opacity:1;fill:#ce4c18;fill-opacity:1;fill-rule:evenodd;stroke:none;stroke-width:3;stroke-linecap:round;stroke-linejoin:round;stroke-miterlimit:3;stroke-opacity:0.498674;paint-order:stroke fill markers"
							d="m 105.30417,51.593749 1.5875,0.79375 c 1.22464,-0.614124 2.11476,-1.403587 2.64583,-2.38125 v -7.14375 l 2.91042,-1.058333 -2.91042,-1.058333 c -0.0539,-1.689983 -0.0133,-3.361926 -1.32292,-5.291667 -0.61964,-1.283336 -2.19873,-1.744094 -4.49791,-1.5875 l 1.05833,-2.645833 -2.11667,1.322917 c -1.16682,-1.38251 -2.36421,-2.735209 -4.497915,-3.175 -0.188918,-1.882157 -2.400277,-1.935337 -4.7625,-1.852084 v -2.38125 L 92.074999,26.9875 h -5.55625 l -0.529167,1.5875 h 5.55625 v 2.645833 l 1.5875,-2.38125 h 2.910417 c 0.976623,-0.01275 1.417502,0.861421 1.5875,2.116667 1.865488,-0.135146 2.876421,0.988174 3.704171,2.38125 -0.46288,1.388618 -0.70599,2.11796 -1.05834,3.175 l 2.64584,-1.5875 c 1.67965,0.117905 3.59713,0.02778 4.23333,1.058333 0.80563,1.476104 1.44512,2.962779 1.32292,4.497916 l -4.23334,1.322917 3.70417,1.058333 v 6.085417 c -0.27158,1.007058 -0.64996,1.992224 -2.64583,2.645833 z"
							id="path41590"
						/></g
					><g id="g45971"
						><path
							style="opacity:1;fill:#3f3432;fill-opacity:1;fill-rule:evenodd;stroke:none;stroke-width:3;stroke-linecap:round;stroke-linejoin:round;stroke-miterlimit:3;stroke-opacity:0.498674;paint-order:stroke fill markers"
							d="m 114.03542,34.13125 2.91041,-2.38125 1.05834,-1.058334 0.79375,-0.79375 v -4.7625 l -8.20209,-8.995833 H 96.837499 l -0.529167,1.322917 -2.38125,4.124446 h 10.054168 z"
							id="path44993"
						/><path
							style="opacity:1;fill:#ce4c18;fill-opacity:1;fill-rule:evenodd;stroke:none;stroke-width:3;stroke-linecap:round;stroke-linejoin:round;stroke-miterlimit:3;stroke-opacity:0.498674;paint-order:stroke fill markers"
							d="m 116.94583,31.75 1.05834,-1.058334 V 27.78125 L 114.3,24.077083 115.35833,22.225 l -2.11666,1.058333 -4.7625,-4.7625 h -5.02709 c -0.25069,-0.349151 -0.38266,-0.303158 -0.52916,-0.305515 l 0.26458,-1.811152 -1.32292,1.058334 h -5.556248 l -0.611029,1.058333 h 5.373527 l -0.52916,2.645833 1.85208,-1.852083 c 0.16535,-0.0727 0.33883,-0.02697 0.52917,0.264583 H 107.95 l 4.49792,4.497917 -1.05834,2.116667 2.11667,-1.058334 3.43958,3.439584 z"
							id="path41592"
						/></g
					><g id="g45967"
						><path
							style="opacity:1;fill:#e16826;fill-opacity:1;fill-rule:evenodd;stroke:none;stroke-width:3;stroke-linecap:round;stroke-linejoin:round;stroke-miterlimit:3;stroke-opacity:0.498674;paint-order:stroke fill markers"
							d="m 114.56458,17.727083 4.7625,-7.672916 -1.85208,-1.0583338 -4.7625,-2.38125 -6.08542,-2.6458332 c -4.59152,1.1883233 -9.406013,2.1616763 -17.197914,0.2645833 -4.137108,0.8711998 -8.845267,1.6198199 -13.49375,2.3812499 5.671275,0.4535326 12.35559,0.047516 15.345833,4.7624998 5.063781,-3.2796341 9.374651,-2.9938097 11.641671,2.116667 h 8.20208 z"
							id="path45894"
						/><path
							style="opacity:1;fill:#fcd26f;fill-opacity:1;fill-rule:evenodd;stroke:none;stroke-width:3;stroke-linecap:round;stroke-linejoin:round;stroke-miterlimit:3;stroke-opacity:0.498674;paint-order:stroke fill markers"
							d="m 117.475,8.9958332 -4.7625,-2.38125 -3.70417,2.6458334 -8.20208,-2.6458334 7.9375,4.7624998 z"
							id="path44995"
						/></g
					></g
				><g
					id="g48224"
					transform="matrix(-1,0,0,1,128.05795,0)"
					style="opacity:1"
					><path
						style="opacity:1;fill:#63a5d8;fill-opacity:1;fill-rule:evenodd;stroke:none;stroke-width:3;stroke-linecap:round;stroke-linejoin:round;stroke-miterlimit:3;stroke-opacity:0.498674;paint-order:stroke fill markers"
						d="m 73.554166,58.737499 h -3.96875 c -2.066951,-1.189846 -3.160137,-1.67324 -3.96875,-2.910416 v -1.852084 c 1.026786,-2.501645 2.580934,-3.846524 3.96875,-5.55625 1.007188,3.4542 1.976505,6.910152 3.96875,10.31875 z"
						id="path48186"
					/><g id="g48204"
						><path
							style="opacity:1;fill:#3f3432;fill-opacity:1;fill-rule:evenodd;stroke:none;stroke-width:3;stroke-linecap:round;stroke-linejoin:round;stroke-miterlimit:3;stroke-opacity:0.498674;paint-order:stroke fill markers"
							d="m 115.35833,60.060416 -2.64583,-4.497917 c -6.86616,1.176988 -12.65117,-1.628697 -17.197918,-8.995833 -1.450888,-4.00052 -2.629649,-8.414521 -5.027083,-10.847916 l -1.5875,-0.79375 c -1.10955,-0.302111 -0.981957,-0.758659 -6.35,-0.529167 l -6.614583,9.260416 c -0.166933,0.813441 -0.380993,1.321942 -0.264584,3.96875 l 0.529167,11.377084 c 1.001783,3.205508 2.011923,6.409849 5.55625,9.260416 8.731072,6.505155 15.354036,5.84695 21.695831,4.233333 3.46424,-1.416128 6.53612,-3.206482 8.46667,-6.085416 z"
							id="path48188"
						/><path
							style="opacity:1;fill:#518fd2;fill-opacity:1;fill-rule:evenodd;stroke:none;stroke-width:3;stroke-linecap:round;stroke-linejoin:round;stroke-miterlimit:3;stroke-opacity:0.498674;paint-order:stroke fill markers"
							d="m 107.95,59.795833 0.26458,-3.175 c -2.15651,3.094175 -5.61471,9.56322 -10.318748,8.202083 v 1.852083 l 2.910418,1.852083 c 6.53106,-5.870034 5.73149,-6.511911 7.14375,-8.731249 z"
							id="path48190"
						/><path
							style="opacity:1;fill:#e7d197;fill-opacity:1;fill-rule:evenodd;stroke:none;stroke-width:3;stroke-linecap:round;stroke-linejoin:round;stroke-miterlimit:3;stroke-opacity:0.498674;paint-order:stroke fill markers"
							d="m 104.24583,66.410416 1.85209,-6.614583 11.64166,0.264583 5.55625,11.377083 c -5.09182,-2.903838 -9.69892,-6.280831 -19.05,-5.027083 z"
							id="path48192"
						/><path
							style="opacity:1;fill:#518fd2;fill-opacity:1;fill-rule:evenodd;stroke:none;stroke-width:3;stroke-linecap:round;stroke-linejoin:round;stroke-miterlimit:3;stroke-opacity:0.498674;paint-order:stroke fill markers"
							d="m 89.693749,64.558333 1.852083,-1.852084 -2.910416,-1.322916 5.556249,-6.614584 -8.731249,3.704167 -1.058334,-1.058333 -2.38125,-0.264584 c 0.961154,2.064457 2.283442,3.93781 1.5875,6.879167 2.183159,-0.371742 4.31103,-0.547568 6.085417,0.529167 z"
							id="path48194"
						/><path
							style="opacity:1;fill:#e7d197;fill-opacity:1;fill-rule:evenodd;stroke:none;stroke-width:3;stroke-linecap:round;stroke-linejoin:round;stroke-miterlimit:3;stroke-opacity:0.498674;paint-order:stroke fill markers"
							d="m 87.312499,70.908332 v -3.96875 l 6.35,-6.349999 4.233333,4.233333 c 0,0 0,6.085416 0,6.085416 z"
							id="path48196"
						/><path
							style="opacity:1;fill:#518fd2;fill-opacity:1;fill-rule:evenodd;stroke:none;stroke-width:3;stroke-linecap:round;stroke-linejoin:round;stroke-miterlimit:3;stroke-opacity:0.498674;paint-order:stroke fill markers"
							d="m 79.374999,51.064583 v -3.704167 c 5.590125,-1.595304 5.641499,-4.955394 6.879167,-7.9375 -0.173641,-0.437326 -0.739872,-0.746038 -2.910417,-0.529166 l -0.529167,-1.322917 c 1.515057,-0.104687 3.743666,-0.956501 4.497917,-0.264583 l 1.5875,-2.38125 1.5875,0.79375 c -0.06092,1.176945 0.239388,2.756701 -0.264583,3.439583 1.557821,1.612065 2.301043,3.471734 3.174999,5.291666 C 92.115058,43.379196 91.122632,42.25443 88.9,41.275 c -3.533351,5.957903 -6.659029,8.153702 -9.525001,9.789583 z"
							id="path48198"
						/><path
							style="opacity:1;fill:#e7d197;fill-opacity:1;fill-rule:evenodd;stroke:none;stroke-width:3;stroke-linecap:round;stroke-linejoin:round;stroke-miterlimit:3;stroke-opacity:0.498674;paint-order:stroke fill markers"
							d="m 85.724999,57.149999 v -6.35 C 78.709766,51.109395 73.772623,46.204584 69.056249,40.745833 l 6.614583,18.25625 z"
							id="path48200"
						/><path
							style="opacity:1;fill:#e7d197;fill-opacity:1;fill-rule:evenodd;stroke:none;stroke-width:3;stroke-linecap:round;stroke-linejoin:round;stroke-miterlimit:3;stroke-opacity:0.498674;paint-order:stroke fill markers"
							d="m 83.608332,43.656249 2.116667,-3.439583 -4.7625,-8.73125 c -1.289773,-5.696927 1.383297,-10.135974 2.116667,-15.08125 L 70.643749,30.1625 c 2.285127,4.284632 4.448611,8.619039 5.291667,13.493749 z"
							id="path48202"
						/></g
					><g id="g48210"
						><path
							style="opacity:1;fill:#3f3432;fill-opacity:1;fill-rule:evenodd;stroke:none;stroke-width:3;stroke-linecap:round;stroke-linejoin:round;stroke-miterlimit:3;stroke-opacity:0.498674;paint-order:stroke fill markers"
							d="m 109.5375,53.445833 -2.64583,-1.058334 -1.5875,-0.79375 c -3.59086,-1.561967 -5.01038,-3.161542 -6.350005,-4.7625 -0.725014,-3.254933 -2.245142,-6.51944 -4.233332,-9.789582 C 91.830049,32.64754 88.616078,30.73736 84.931249,31.75 l 1.058333,-3.175 0.529167,-1.5875 0.79375,-2.645834 h 15.610421 l 10.84791,14.022917 z"
							id="path48206"
						/><path
							style="opacity:1;fill:#518fd2;fill-opacity:1;fill-rule:evenodd;stroke:none;stroke-width:3;stroke-linecap:round;stroke-linejoin:round;stroke-miterlimit:3;stroke-opacity:0.498674;paint-order:stroke fill markers"
							d="m 105.30417,51.593749 1.5875,0.79375 c 1.22464,-0.614124 2.11476,-1.403587 2.64583,-2.38125 v -7.14375 l 2.91042,-1.058333 -2.91042,-1.058333 c -0.0539,-1.689983 -0.0133,-3.361926 -1.32292,-5.291667 -0.61964,-1.283336 -2.19873,-1.744094 -4.49791,-1.5875 l 1.05833,-2.645833 -2.11667,1.322917 c -1.16682,-1.38251 -2.36421,-2.735209 -4.497915,-3.175 -0.188918,-1.882157 -2.400277,-1.935337 -4.7625,-1.852084 v -2.38125 L 92.074999,26.9875 h -5.55625 l -0.529167,1.5875 h 5.55625 v 2.645833 l 1.5875,-2.38125 h 2.910417 c 0.976623,-0.01275 1.417502,0.861421 1.5875,2.116667 1.865488,-0.135146 2.876421,0.988174 3.704171,2.38125 -0.46288,1.388618 -0.70599,2.11796 -1.05834,3.175 l 2.64584,-1.5875 c 1.67965,0.117905 3.59713,0.02778 4.23333,1.058333 0.80563,1.476104 1.44512,2.962779 1.32292,4.497916 l -4.23334,1.322917 3.70417,1.058333 v 6.085417 c -0.27158,1.007058 -0.64996,1.992224 -2.64583,2.645833 z"
							id="path48208"
						/></g
					><g id="g48216"
						><path
							style="opacity:1;fill:#3f3432;fill-opacity:1;fill-rule:evenodd;stroke:none;stroke-width:3;stroke-linecap:round;stroke-linejoin:round;stroke-miterlimit:3;stroke-opacity:0.498674;paint-order:stroke fill markers"
							d="m 114.03542,34.13125 2.91041,-2.38125 1.05834,-1.058334 0.79375,-0.79375 v -4.7625 l -8.20209,-8.995833 H 96.837499 l -0.529167,1.322917 -2.38125,4.124446 h 10.054168 z"
							id="path48212"
						/><path
							style="opacity:1;fill:#518fd2;fill-opacity:1;fill-rule:evenodd;stroke:none;stroke-width:3;stroke-linecap:round;stroke-linejoin:round;stroke-miterlimit:3;stroke-opacity:0.498674;paint-order:stroke fill markers"
							d="m 116.94583,31.75 1.05834,-1.058334 V 27.78125 L 114.3,24.077083 115.35833,22.225 l -2.11666,1.058333 -4.7625,-4.7625 h -5.02709 c -0.25069,-0.349151 -0.38266,-0.303158 -0.52916,-0.305515 l 0.26458,-1.811152 -1.32292,1.058334 h -5.556248 l -0.611029,1.058333 h 5.373527 l -0.52916,2.645833 1.85208,-1.852083 c 0.16535,-0.0727 0.33883,-0.02697 0.52917,0.264583 H 107.95 l 4.49792,4.497917 -1.05834,2.116667 2.11667,-1.058334 3.43958,3.439584 z"
							id="path48214"
						/></g
					><g id="g48222"
						><path
							style="opacity:1;fill:#63a5d8;fill-opacity:1;fill-rule:evenodd;stroke:none;stroke-width:3;stroke-linecap:round;stroke-linejoin:round;stroke-miterlimit:3;stroke-opacity:0.498674;paint-order:stroke fill markers"
							d="m 114.56458,17.727083 4.7625,-7.672916 -1.85208,-1.0583338 -4.7625,-2.38125 -6.08542,-2.6458332 c -4.59152,1.1883233 -9.406013,2.1616763 -17.197914,0.2645833 -4.137108,0.8711998 -8.845267,1.6198199 -13.49375,2.3812499 5.671275,0.4535326 12.35559,0.047516 15.345833,4.7624998 5.063781,-3.2796341 9.374651,-2.9938097 11.641671,2.116667 h 8.20208 z"
							id="path48218"
						/><path
							style="opacity:1;fill:#e7fefe;fill-opacity:1;fill-rule:evenodd;stroke:none;stroke-width:3;stroke-linecap:round;stroke-linejoin:round;stroke-miterlimit:3;stroke-opacity:0.498674;paint-order:stroke fill markers"
							d="m 117.475,8.9958332 -4.7625,-2.38125 -3.70417,2.6458334 -8.20208,-2.6458334 7.9375,4.7624998 z"
							id="path48220"
						/></g
					></g
				><path
					style="opacity:1;fill:#3f3432;fill-opacity:1;fill-rule:evenodd;stroke:none;stroke-width:3;stroke-linecap:round;stroke-linejoin:round;stroke-miterlimit:3;stroke-opacity:0.498674;paint-order:stroke fill markers"
					d="m 62.706249,77.258332 c 0.896534,-0.362505 1.777691,-0.342935 2.645834,0 v -4.233333 c -0.835739,-0.318148 -1.707826,-0.386029 -2.645834,0 z"
					id="path49972"
				/><path
					style="opacity:1;fill:#3f3432;fill-opacity:1;fill-rule:evenodd;stroke:none;stroke-width:2.72243;stroke-linecap:round;stroke-linejoin:round;stroke-miterlimit:3;stroke-opacity:0.498674;paint-order:stroke fill markers"
					d="m 62.706249,71.172916 c 0.896534,-0.298527 1.777691,-0.28241 2.645834,0 v -3.486202 c -0.835739,-0.261998 -1.707826,-0.317899 -2.645834,0 z"
					id="path49974"
				/><path
					style="opacity:1;fill:#3f3432;fill-opacity:1;fill-rule:evenodd;stroke:none;stroke-width:2.72243;stroke-linecap:round;stroke-linejoin:round;stroke-miterlimit:3;stroke-opacity:0.498674;paint-order:stroke fill markers"
					d="m 62.706249,66.036851 c 0.896534,-0.298527 1.777691,-0.28241 2.645834,0 v -3.486202 c -0.835739,-0.261998 -1.707826,-0.317899 -2.645834,0 z"
					id="path49976"
				/></g
			></g
		><metadata id="metadata53141">
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
