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
				id="filter22265"
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
					id="feComposite22251"
				/><feColorMatrix
					in="composite1"
					values="1"
					type="saturate"
					result="colormatrix1"
					id="feColorMatrix22253"
				/><feFlood
					flood-opacity="1"
					flood-color="rgb(0,0,0)"
					result="flood1"
					id="feFlood22255"
				/><feBlend
					in="flood1"
					in2="colormatrix1"
					mode="multiply"
					result="blend1"
					id="feBlend22257"
				/><feBlend
					in2="blend1"
					mode="screen"
					result="blend2"
					id="feBlend22259"
				/><feColorMatrix
					in="blend2"
					values="1"
					type="saturate"
					result="colormatrix2"
					id="feColorMatrix22261"
				/><feComposite
					in="colormatrix2"
					in2="SourceGraphic"
					operator="in"
					k2="1"
					result="composite2"
					id="feComposite22263"
				/></filter
			></defs
		>
		<!-- svelte-ignore a11y-no-static-element-interactions -->
		<!-- svelte-ignore a11y-mouse-events-have-key-events -->
		<g id="layer1"
			><g id="g30690"
				><g
					id="g21886"
					style="filter:url(#filter22265)"
					transform="translate(1.0583333,1.5875)"
					><g id="g21834"
						><path
							style="opacity:1;fill:#9a6644;fill-opacity:1;fill-rule:evenodd;stroke-width:1.2;stroke-linecap:round;stroke-linejoin:round;stroke-miterlimit:3;paint-order:stroke fill markers"
							d="m 64.293749,116.68125 v -8.46667 c 3.547875,-0.0382 6.220416,3.21173 9.065016,5.8153 1.251626,1.22261 2.157819,2.58513 4.957901,3.18054 h 3.96875 v 7.14375 h -7.672917 c -1.633021,0.0269 -4.327531,-1.87732 -6.202485,-3.85055 -1.407587,-1.48137 -2.741369,-2.7175 -4.116265,-3.82237 z"
							id="path21786"
						/><rect
							style="opacity:1;fill:#9a6644;fill-opacity:1;fill-rule:evenodd;stroke-width:1.2;stroke-linecap:round;stroke-linejoin:round;stroke-miterlimit:3;paint-order:stroke fill markers"
							id="rect21788"
							width="10.054167"
							height="7.1437497"
							x="86.783333"
							y="117.21042"
						/><rect
							style="opacity:1;fill:#9a6644;fill-opacity:1;fill-rule:evenodd;stroke-width:1.2;stroke-linecap:round;stroke-linejoin:round;stroke-miterlimit:3;paint-order:stroke fill markers"
							id="rect21790"
							width="10.054167"
							height="7.1437497"
							x="100.80625"
							y="117.21042"
						/><path
							style="opacity:1;fill:#9a6644;fill-opacity:1;fill-rule:evenodd;stroke-width:1.2;stroke-linecap:round;stroke-linejoin:round;stroke-miterlimit:3;paint-order:stroke fill markers"
							d="m 124.35417,108.21458 v 8.99584 c -1.14006,2.96561 -3.52702,5.07253 -6.35,6.87916 h -3.43959 v -2.38125 c 0.2925,-3.23212 3.41035,-7.66811 9.78959,-13.49375 z"
							id="path21792"
						/><path
							style="opacity:1;fill:#c93019;fill-opacity:1;fill-rule:evenodd;stroke-width:1.2;stroke-linecap:round;stroke-linejoin:round;stroke-miterlimit:3;paint-order:stroke fill markers"
							d="m 64.293749,88.106249 v -26.9875 l 8.995833,-5.820833 4.7625,9.525 -3.96875,18.520833 z"
							id="path21794"
						/><path
							style="opacity:1;fill:#7e170e;fill-opacity:1;fill-rule:evenodd;stroke-width:1.2;stroke-linecap:round;stroke-linejoin:round;stroke-miterlimit:3;paint-order:stroke fill markers"
							d="M 64.293749,103.45208 V 87.841666 c 0.26175,-4.744272 2.283974,-7.616697 3.96875,-10.847917 4.448171,-7.727451 4.33519,-14.686351 5.027083,-21.695833 3.985204,-3.919418 7.130928,-5.191107 9.783707,-5.300446 3.652482,-0.150544 6.534818,2.120108 8.737127,5.300446 0.924862,2.304644 1.456384,4.803715 1.587499,7.408333 v 10.847917 c 0.712831,4.560173 1.692063,8.73406 3.968752,12.964584 1.741806,3.236608 4.309883,6.283195 8.731253,9.032461 1.27077,-0.132122 1.73562,-0.86274 1.85208,-1.852083 -2.62631,-3.582163 -4.61974,-7.353556 -4.7625,-11.678296 -0.26214,-6.294665 2.67438,-9.467489 5.82083,-12.435416 3.04223,-2.263407 6.5002,-3.617891 10.05417,-4.7625 1.73174,0.0074 3.59684,-0.384394 5.55625,-1.058333 v 4.762499 c -3.7101,1.372342 -7.45843,2.454097 -10.84792,6.263048 -0.11135,0.710484 -0.34032,1.462296 0.96675,1.674452 3.55689,-1.911703 6.77568,-2.387122 9.88117,-2.38125 v 4.497917 c -2.93718,0.363663 -6.68242,-0.751664 -7.67292,3.175 0.2158,1.827592 0.2436,3.623218 3.43959,5.957533 2.18606,1.986245 4.23264,4.07218 4.35103,7.536217 0.0734,2.556503 -0.56227,4.882851 -1.7052,6.614581 l -9.51109,9.525 c -1.70329,1.08258 -3.39184,1.80982 -5.04099,1.5875 H 81.491666 c -1.559105,0.57649 -3.680143,-0.86706 -5.820834,-2.38125 l -8.202083,-6.08541 c -1.073875,-0.71942 -2.131458,-1.0545 -3.175,-1.05834 z"
							id="path21796"
						/><path
							style="opacity:1;fill:#7e170e;fill-opacity:1;fill-rule:evenodd;stroke-width:1.2;stroke-linecap:round;stroke-linejoin:round;stroke-miterlimit:3;paint-order:stroke fill markers"
							d="m 95.514582,59.795833 v -7.9375 c 1.16566,-2.931231 3.310771,-4.322634 5.556248,-5.55625 3.45551,-1.327297 5.64458,-2.828775 6.61459,-4.497917 H 93.927082 c -4.349473,-0.480224 -7.771539,-2.495053 -10.31875,-5.957533 -1.006318,-2.050821 -1.441469,-4.131421 -1.852083,-6.2133 V 14.022916 c 0.705245,-2.841902 2.111909,-5.2885242 4.233333,-7.3323479 3.230524,-2.677623 6.278394,-3.5536238 9.260417,-3.7801515 H 119.0625 c 2.06115,0.392658 2.43373,1.4076466 2.38028,2.4013441 -0.064,1.1895726 -0.63536,2.780104 -2.38028,2.6257392 h -3.96875 c -1.61428,-0.1708224 -2.39966,1.3700228 -2.38077,2.6385941 0.0127,0.851925 0.46226,2.544618 2.38077,2.388489 h 3.96875 c 2.54191,0.463412 2.25102,1.46245 2.38113,2.334172 0.13469,0.902412 -0.066,1.914878 -2.38113,2.428328 H 101.07083 V 26.9875 h 12.17084 c 3.92289,0.836913 5.71408,2.250313 7.3779,3.895028 4.09852,4.051442 5.14835,9.411602 3.3151,14.625805 -0.80369,2.987203 -2.14813,5.571544 -4.343,7.52231 -3.5076,2.933113 -5.71686,5.844187 -15.38383,8.881856 -2.20117,0.337329 -4.325707,1.000969 -6.841175,0 -0.726689,-0.35097 -1.377243,-0.948871 -1.852083,-2.116666 z"
							id="path21798"
						/><rect
							style="opacity:1;fill:#c93019;fill-opacity:1;fill-rule:evenodd;stroke-width:1.13982;stroke-linecap:round;stroke-linejoin:round;stroke-miterlimit:3;paint-order:stroke fill markers"
							id="rect21800"
							width="7.6729159"
							height="7.4083333"
							x="83.872917"
							y="102.12917"
						/><rect
							style="opacity:1;fill:#c93019;fill-opacity:1;fill-rule:evenodd;stroke-width:1.13982;stroke-linecap:round;stroke-linejoin:round;stroke-miterlimit:3;paint-order:stroke fill markers"
							id="rect21802"
							width="7.672914"
							height="7.4083333"
							x="93.927086"
							y="102.12917"
						/><rect
							style="opacity:1;fill:#c93019;fill-opacity:1;fill-rule:evenodd;stroke-width:1.13982;stroke-linecap:round;stroke-linejoin:round;stroke-miterlimit:3;paint-order:stroke fill markers"
							id="rect21804"
							width="7.6729169"
							height="7.4083333"
							x="103.98125"
							y="102.12917"
						/><rect
							style="opacity:1;fill:#c93019;fill-opacity:1;fill-rule:evenodd;stroke-width:1.13982;stroke-linecap:round;stroke-linejoin:round;stroke-miterlimit:3;paint-order:stroke fill markers"
							id="rect21806"
							width="7.6729169"
							height="7.4083333"
							x="113.77084"
							y="91.28125"
						/><rect
							style="opacity:1;fill:#c93019;fill-opacity:1;fill-rule:evenodd;stroke-width:1.13982;stroke-linecap:round;stroke-linejoin:round;stroke-miterlimit:3;paint-order:stroke fill markers"
							id="rect21808"
							width="7.6729169"
							height="7.4083333"
							x="106.49479"
							y="79.11042"
						/><rect
							style="opacity:1;fill:#c93019;fill-opacity:1;fill-rule:evenodd;stroke-width:1.13982;stroke-linecap:round;stroke-linejoin:round;stroke-miterlimit:3;paint-order:stroke fill markers"
							id="rect21810"
							width="7.6729169"
							height="7.4083333"
							x="106.49479"
							y="79.11042"
						/><rect
							style="opacity:1;fill:#c93019;fill-opacity:1;fill-rule:evenodd;stroke-width:1.13982;stroke-linecap:round;stroke-linejoin:round;stroke-miterlimit:3;paint-order:stroke fill markers"
							id="rect21812"
							width="7.6729169"
							height="7.4083333"
							x="99.880203"
							y="49.741669"
						/><rect
							style="opacity:1;fill:#c93019;fill-opacity:1;fill-rule:evenodd;stroke-width:1.13982;stroke-linecap:round;stroke-linejoin:round;stroke-miterlimit:3;paint-order:stroke fill markers"
							id="rect21814"
							width="7.6729169"
							height="7.4083333"
							x="113.77084"
							y="40.481251"
						/><rect
							style="opacity:1;fill:#c93019;fill-opacity:1;fill-rule:evenodd;stroke-width:1.13982;stroke-linecap:round;stroke-linejoin:round;stroke-miterlimit:3;paint-order:stroke fill markers"
							id="rect21816"
							width="7.6729169"
							height="7.4083333"
							x="103.45208"
							y="30.162498"
						/><rect
							style="opacity:1;fill:#c93019;fill-opacity:1;fill-rule:evenodd;stroke-width:1.13982;stroke-linecap:round;stroke-linejoin:round;stroke-miterlimit:3;paint-order:stroke fill markers"
							id="rect21818"
							width="7.6729169"
							height="7.4083333"
							x="86.121872"
							y="27.252083"
						/><rect
							style="opacity:1;fill:#c93019;fill-opacity:1;fill-rule:evenodd;stroke-width:1.13982;stroke-linecap:round;stroke-linejoin:round;stroke-miterlimit:3;paint-order:stroke fill markers"
							id="rect21820"
							width="7.6729169"
							height="7.4083333"
							x="86.121872"
							y="12.964583"
						/><rect
							style="opacity:1;fill:#c93019;fill-opacity:1;fill-rule:evenodd;stroke-width:1.13982;stroke-linecap:round;stroke-linejoin:round;stroke-miterlimit:3;paint-order:stroke fill markers"
							id="rect21822"
							width="7.6729169"
							height="7.4083333"
							x="96.572914"
							y="6.0854168"
						/><path
							style="opacity:1;fill:#c93019;fill-opacity:1;fill-rule:evenodd;stroke-width:1.2;stroke-linecap:round;stroke-linejoin:round;stroke-miterlimit:3;paint-order:stroke fill markers"
							d="m 77.7875,96.8375 12.964582,-12.964584 10e-7,12.964584 z"
							id="path21824"
						/><path
							style="opacity:1;fill:#c93019;fill-opacity:1;fill-rule:evenodd;stroke-width:1.2;stroke-linecap:round;stroke-linejoin:round;stroke-miterlimit:3;paint-order:stroke fill markers"
							d="M 82.814582,65.616666 V 54.239583 h 4.497917 v 11.377083 z"
							id="path21826"
						/><path
							style="opacity:1;fill:#290604;fill-opacity:1;fill-rule:evenodd;stroke-width:1.2;stroke-linecap:round;stroke-linejoin:round;stroke-miterlimit:3;paint-order:stroke fill markers"
							d="m 73.818749,99.747915 h -8.73125 c 1.333896,-5.498293 4.392795,-8.068474 8.73125,-8.466666 z"
							id="path21828"
						/><path
							style="opacity:1;fill:#290604;fill-opacity:1;fill-rule:evenodd;stroke-width:1.2;stroke-linecap:round;stroke-linejoin:round;stroke-miterlimit:3;paint-order:stroke fill markers"
							d="m 76.861458,89.69375 h -8.73125 c 1.333896,-5.498293 4.392795,-8.068474 8.73125,-8.466666 z"
							id="path21830"
						/><path
							style="opacity:1;fill:#290604;fill-opacity:1;fill-rule:evenodd;stroke-width:1.2;stroke-linecap:round;stroke-linejoin:round;stroke-miterlimit:3;paint-order:stroke fill markers"
							d="m 80.565625,79.375 h -8.73125 c 1.333896,-5.498293 4.392795,-8.068474 8.73125,-8.466666 z"
							id="path21832"
						/></g
					><g id="g21884" transform="matrix(-1,0,0,1,128.5875,0)"
						><path
							style="opacity:1;fill:#9a6644;fill-opacity:1;fill-rule:evenodd;stroke-width:1.2;stroke-linecap:round;stroke-linejoin:round;stroke-miterlimit:3;paint-order:stroke fill markers"
							d="m 64.293749,116.68125 v -8.46667 c 3.547875,-0.0382 6.220416,3.21173 9.065016,5.8153 1.251626,1.22261 2.157819,2.58513 4.957901,3.18054 h 3.96875 v 7.14375 h -7.672917 c -1.633021,0.0269 -4.327531,-1.87732 -6.202485,-3.85055 -1.407587,-1.48137 -2.741369,-2.7175 -4.116265,-3.82237 z"
							id="path21836"
						/><rect
							style="opacity:1;fill:#9a6644;fill-opacity:1;fill-rule:evenodd;stroke-width:1.2;stroke-linecap:round;stroke-linejoin:round;stroke-miterlimit:3;paint-order:stroke fill markers"
							id="rect21838"
							width="10.054167"
							height="7.1437497"
							x="86.783333"
							y="117.21042"
						/><rect
							style="opacity:1;fill:#9a6644;fill-opacity:1;fill-rule:evenodd;stroke-width:1.2;stroke-linecap:round;stroke-linejoin:round;stroke-miterlimit:3;paint-order:stroke fill markers"
							id="rect21840"
							width="10.054167"
							height="7.1437497"
							x="100.80625"
							y="117.21042"
						/><path
							style="opacity:1;fill:#9a6644;fill-opacity:1;fill-rule:evenodd;stroke-width:1.2;stroke-linecap:round;stroke-linejoin:round;stroke-miterlimit:3;paint-order:stroke fill markers"
							d="m 124.35417,108.21458 v 8.99584 c -1.14006,2.96561 -3.52702,5.07253 -6.35,6.87916 h -3.43959 v -2.38125 c 0.2925,-3.23212 3.41035,-7.66811 9.78959,-13.49375 z"
							id="path21842"
						/><path
							style="opacity:1;fill:#c93019;fill-opacity:1;fill-rule:evenodd;stroke-width:1.2;stroke-linecap:round;stroke-linejoin:round;stroke-miterlimit:3;paint-order:stroke fill markers"
							d="m 64.293749,88.106249 v -26.9875 l 8.995833,-5.820833 4.7625,9.525 -3.96875,18.520833 z"
							id="path21844"
						/><path
							style="opacity:1;fill:#7e170e;fill-opacity:1;fill-rule:evenodd;stroke-width:1.2;stroke-linecap:round;stroke-linejoin:round;stroke-miterlimit:3;paint-order:stroke fill markers"
							d="M 64.293749,103.45208 V 87.841666 c 0.26175,-4.744272 2.283974,-7.616697 3.96875,-10.847917 4.448171,-7.727451 4.33519,-14.686351 5.027083,-21.695833 3.985204,-3.919418 7.130928,-5.191107 9.783707,-5.300446 3.652482,-0.150544 6.534818,2.120108 8.737127,5.300446 0.924862,2.304644 1.456384,4.803715 1.587499,7.408333 v 10.847917 c 0.712831,4.560173 1.692063,8.73406 3.968752,12.964584 1.741806,3.236608 4.309883,6.283195 8.731253,9.032461 1.27077,-0.132122 1.73562,-0.86274 1.85208,-1.852083 -2.62631,-3.582163 -4.61974,-7.353556 -4.7625,-11.678296 -0.26214,-6.294665 2.67438,-9.467489 5.82083,-12.435416 3.04223,-2.263407 6.5002,-3.617891 10.05417,-4.7625 1.73174,0.0074 3.59684,-0.384394 5.55625,-1.058333 v 4.762499 c -3.7101,1.372342 -7.45843,2.454097 -10.84792,6.263048 -0.11135,0.710484 -0.34032,1.462296 0.96675,1.674452 3.55689,-1.911703 6.77568,-2.387122 9.88117,-2.38125 v 4.497917 c -2.93718,0.363663 -6.68242,-0.751664 -7.67292,3.175 0.2158,1.827592 0.2436,3.623218 3.43959,5.957533 2.18606,1.986245 4.23264,4.07218 4.35103,7.536217 0.0734,2.556503 -0.56227,4.882851 -1.7052,6.614581 l -9.51109,9.525 c -1.70329,1.08258 -3.39184,1.80982 -5.04099,1.5875 H 81.491666 c -1.559105,0.57649 -3.680143,-0.86706 -5.820834,-2.38125 l -8.202083,-6.08541 c -1.073875,-0.71942 -2.131458,-1.0545 -3.175,-1.05834 z"
							id="path21846"
						/><path
							style="opacity:1;fill:#7e170e;fill-opacity:1;fill-rule:evenodd;stroke-width:1.2;stroke-linecap:round;stroke-linejoin:round;stroke-miterlimit:3;paint-order:stroke fill markers"
							d="m 95.514582,59.795833 v -7.9375 c 1.16566,-2.931231 3.310771,-4.322634 5.556248,-5.55625 3.45551,-1.327297 5.64458,-2.828775 6.61459,-4.497917 H 93.927082 c -4.349473,-0.480224 -7.771539,-2.495053 -10.31875,-5.957533 -1.006318,-2.050821 -1.441469,-4.131421 -1.852083,-6.2133 V 14.022916 c 0.705245,-2.841902 2.111909,-5.2885242 4.233333,-7.3323479 3.230524,-2.677623 6.278394,-3.5536238 9.260417,-3.7801515 H 119.0625 c 2.06115,0.392658 2.43373,1.4076466 2.38028,2.4013441 -0.064,1.1895726 -0.63536,2.780104 -2.38028,2.6257392 h -3.96875 c -1.61428,-0.1708224 -2.39966,1.3700228 -2.38077,2.6385941 0.0127,0.851925 0.46226,2.544618 2.38077,2.388489 h 3.96875 c 2.54191,0.463412 2.25102,1.46245 2.38113,2.334172 0.13469,0.902412 -0.066,1.914878 -2.38113,2.428328 H 101.07083 V 26.9875 h 12.17084 c 3.92289,0.836913 5.71408,2.250313 7.3779,3.895028 4.09852,4.051442 5.14835,9.411602 3.3151,14.625805 -0.80369,2.987203 -2.14813,5.571544 -4.343,7.52231 -3.5076,2.933113 -5.71686,5.844187 -15.38383,8.881856 -2.20117,0.337329 -4.325707,1.000969 -6.841175,0 -0.726689,-0.35097 -1.377243,-0.948871 -1.852083,-2.116666 z"
							id="path21848"
						/><rect
							style="opacity:1;fill:#c93019;fill-opacity:1;fill-rule:evenodd;stroke-width:1.13982;stroke-linecap:round;stroke-linejoin:round;stroke-miterlimit:3;paint-order:stroke fill markers"
							id="rect21850"
							width="7.6729159"
							height="7.4083333"
							x="83.872917"
							y="102.12917"
						/><rect
							style="opacity:1;fill:#c93019;fill-opacity:1;fill-rule:evenodd;stroke-width:1.13982;stroke-linecap:round;stroke-linejoin:round;stroke-miterlimit:3;paint-order:stroke fill markers"
							id="rect21852"
							width="7.672914"
							height="7.4083333"
							x="93.927086"
							y="102.12917"
						/><rect
							style="opacity:1;fill:#c93019;fill-opacity:1;fill-rule:evenodd;stroke-width:1.13982;stroke-linecap:round;stroke-linejoin:round;stroke-miterlimit:3;paint-order:stroke fill markers"
							id="rect21854"
							width="7.6729169"
							height="7.4083333"
							x="103.98125"
							y="102.12917"
						/><rect
							style="opacity:1;fill:#c93019;fill-opacity:1;fill-rule:evenodd;stroke-width:1.13982;stroke-linecap:round;stroke-linejoin:round;stroke-miterlimit:3;paint-order:stroke fill markers"
							id="rect21856"
							width="7.6729169"
							height="7.4083333"
							x="113.77084"
							y="91.28125"
						/><rect
							style="opacity:1;fill:#c93019;fill-opacity:1;fill-rule:evenodd;stroke-width:1.13982;stroke-linecap:round;stroke-linejoin:round;stroke-miterlimit:3;paint-order:stroke fill markers"
							id="rect21858"
							width="7.6729169"
							height="7.4083333"
							x="106.49479"
							y="79.11042"
						/><rect
							style="opacity:1;fill:#c93019;fill-opacity:1;fill-rule:evenodd;stroke-width:1.13982;stroke-linecap:round;stroke-linejoin:round;stroke-miterlimit:3;paint-order:stroke fill markers"
							id="rect21860"
							width="7.6729169"
							height="7.4083333"
							x="106.49479"
							y="79.11042"
						/><rect
							style="opacity:1;fill:#c93019;fill-opacity:1;fill-rule:evenodd;stroke-width:1.13982;stroke-linecap:round;stroke-linejoin:round;stroke-miterlimit:3;paint-order:stroke fill markers"
							id="rect21862"
							width="7.6729169"
							height="7.4083333"
							x="99.880203"
							y="49.741669"
						/><rect
							style="opacity:1;fill:#c93019;fill-opacity:1;fill-rule:evenodd;stroke-width:1.13982;stroke-linecap:round;stroke-linejoin:round;stroke-miterlimit:3;paint-order:stroke fill markers"
							id="rect21864"
							width="7.6729169"
							height="7.4083333"
							x="113.77084"
							y="40.481251"
						/><rect
							style="opacity:1;fill:#c93019;fill-opacity:1;fill-rule:evenodd;stroke-width:1.13982;stroke-linecap:round;stroke-linejoin:round;stroke-miterlimit:3;paint-order:stroke fill markers"
							id="rect21866"
							width="7.6729169"
							height="7.4083333"
							x="103.45208"
							y="30.162498"
						/><rect
							style="opacity:1;fill:#c93019;fill-opacity:1;fill-rule:evenodd;stroke-width:1.13982;stroke-linecap:round;stroke-linejoin:round;stroke-miterlimit:3;paint-order:stroke fill markers"
							id="rect21868"
							width="7.6729169"
							height="7.4083333"
							x="86.121872"
							y="27.252083"
						/><rect
							style="opacity:1;fill:#c93019;fill-opacity:1;fill-rule:evenodd;stroke-width:1.13982;stroke-linecap:round;stroke-linejoin:round;stroke-miterlimit:3;paint-order:stroke fill markers"
							id="rect21870"
							width="7.6729169"
							height="7.4083333"
							x="86.121872"
							y="12.964583"
						/><rect
							style="opacity:1;fill:#c93019;fill-opacity:1;fill-rule:evenodd;stroke-width:1.13982;stroke-linecap:round;stroke-linejoin:round;stroke-miterlimit:3;paint-order:stroke fill markers"
							id="rect21872"
							width="7.6729169"
							height="7.4083333"
							x="96.572914"
							y="6.0854168"
						/><path
							style="opacity:1;fill:#c93019;fill-opacity:1;fill-rule:evenodd;stroke-width:1.2;stroke-linecap:round;stroke-linejoin:round;stroke-miterlimit:3;paint-order:stroke fill markers"
							d="m 77.7875,96.8375 12.964582,-12.964584 10e-7,12.964584 z"
							id="path21874"
						/><path
							style="opacity:1;fill:#c93019;fill-opacity:1;fill-rule:evenodd;stroke-width:1.2;stroke-linecap:round;stroke-linejoin:round;stroke-miterlimit:3;paint-order:stroke fill markers"
							d="M 82.814582,65.616666 V 54.239583 h 4.497917 v 11.377083 z"
							id="path21876"
						/><path
							style="opacity:1;fill:#290604;fill-opacity:1;fill-rule:evenodd;stroke-width:1.2;stroke-linecap:round;stroke-linejoin:round;stroke-miterlimit:3;paint-order:stroke fill markers"
							d="m 73.818749,99.747915 h -8.73125 c 1.333896,-5.498293 4.392795,-8.068474 8.73125,-8.466666 z"
							id="path21878"
						/><path
							style="opacity:1;fill:#290604;fill-opacity:1;fill-rule:evenodd;stroke-width:1.2;stroke-linecap:round;stroke-linejoin:round;stroke-miterlimit:3;paint-order:stroke fill markers"
							d="m 76.861458,89.69375 h -8.73125 c 1.333896,-5.498293 4.392795,-8.068474 8.73125,-8.466666 z"
							id="path21880"
						/><path
							style="opacity:1;fill:#290604;fill-opacity:1;fill-rule:evenodd;stroke-width:1.2;stroke-linecap:round;stroke-linejoin:round;stroke-miterlimit:3;paint-order:stroke fill markers"
							d="m 80.565625,79.375 h -8.73125 c 1.333896,-5.498293 4.392795,-8.068474 8.73125,-8.466666 z"
							id="path21882"
						/></g
					></g
				><g id="g21784"
					><g id="g21682"
						><path
							style="opacity:1;fill:#ffe36a;fill-rule:evenodd;stroke-width:1.2;stroke-linecap:round;stroke-linejoin:round;stroke-miterlimit:3;paint-order:stroke fill markers;fill-opacity:1"
							d="m 64.293749,116.68125 v -8.46667 c 3.547875,-0.0382 6.220416,3.21173 9.065016,5.8153 1.251626,1.22261 2.157819,2.58513 4.957901,3.18054 h 3.96875 v 7.14375 h -7.672917 c -1.633021,0.0269 -4.327531,-1.87732 -6.202485,-3.85055 -1.407587,-1.48137 -2.741369,-2.7175 -4.116265,-3.82237 z"
							id="path19880"
						/><rect
							style="opacity:1;fill:#ffe36a;fill-rule:evenodd;stroke-width:1.2;stroke-linecap:round;stroke-linejoin:round;stroke-miterlimit:3;paint-order:stroke fill markers;fill-opacity:1"
							id="rect19934"
							width="10.054167"
							height="7.1437497"
							x="86.783333"
							y="117.21042"
						/><rect
							style="opacity:1;fill:#ffe36a;fill-rule:evenodd;stroke-width:1.2;stroke-linecap:round;stroke-linejoin:round;stroke-miterlimit:3;paint-order:stroke fill markers;fill-opacity:1"
							id="rect19936"
							width="10.054167"
							height="7.1437497"
							x="100.80625"
							y="117.21042"
						/><path
							style="opacity:1;fill:#ffe36a;fill-rule:evenodd;stroke-width:1.2;stroke-linecap:round;stroke-linejoin:round;stroke-miterlimit:3;paint-order:stroke fill markers;fill-opacity:1"
							d="m 124.35417,108.21458 v 8.99584 c -1.14006,2.96561 -3.52702,5.07253 -6.35,6.87916 h -3.43959 v -2.38125 c 0.2925,-3.23212 3.41035,-7.66811 9.78959,-13.49375 z"
							id="path19938"
						/><path
							style="opacity:1;fill:#2c4802;fill-opacity:1;fill-rule:evenodd;stroke-width:1.2;stroke-linecap:round;stroke-linejoin:round;stroke-miterlimit:3;paint-order:stroke fill markers"
							d="m 64.293749,88.106249 v -26.9875 l 8.995833,-5.820833 4.7625,9.525 -3.96875,18.520833 z"
							id="path20958"
						/><path
							style="opacity:1;fill:#477f35;fill-rule:evenodd;stroke-width:1.2;stroke-linecap:round;stroke-linejoin:round;stroke-miterlimit:3;paint-order:stroke fill markers;fill-opacity:1"
							d="M 64.293749,103.45208 V 87.841666 c 0.26175,-4.744272 2.283974,-7.616697 3.96875,-10.847917 4.448171,-7.727451 4.33519,-14.686351 5.027083,-21.695833 3.985204,-3.919418 7.130928,-5.191107 9.783707,-5.300446 3.652482,-0.150544 6.534818,2.120108 8.737127,5.300446 0.924862,2.304644 1.456384,4.803715 1.587499,7.408333 v 10.847917 c 0.712831,4.560173 1.692063,8.73406 3.968752,12.964584 1.741806,3.236608 4.309883,6.283195 8.731253,9.032461 1.27077,-0.132122 1.73562,-0.86274 1.85208,-1.852083 -2.62631,-3.582163 -4.61974,-7.353556 -4.7625,-11.678296 -0.26214,-6.294665 2.67438,-9.467489 5.82083,-12.435416 3.04223,-2.263407 6.5002,-3.617891 10.05417,-4.7625 1.73174,0.0074 3.59684,-0.384394 5.55625,-1.058333 v 4.762499 c -3.7101,1.372342 -7.45843,2.454097 -10.84792,6.263048 -0.11135,0.710484 -0.34032,1.462296 0.96675,1.674452 3.55689,-1.911703 6.77568,-2.387122 9.88117,-2.38125 v 4.497917 c -2.93718,0.363663 -6.68242,-0.751664 -7.67292,3.175 0.2158,1.827592 0.2436,3.623218 3.43959,5.957533 2.18606,1.986245 4.23264,4.07218 4.35103,7.536217 0.0734,2.556503 -0.56227,4.882851 -1.7052,6.614581 l -9.51109,9.525 c -1.70329,1.08258 -3.39184,1.80982 -5.04099,1.5875 H 81.491666 c -1.559105,0.57649 -3.680143,-0.86706 -5.820834,-2.38125 l -8.202083,-6.08541 c -1.073875,-0.71942 -2.131458,-1.0545 -3.175,-1.05834 z"
							id="path19940"
						/><path
							style="opacity:1;fill:#477f35;fill-rule:evenodd;stroke-width:1.2;stroke-linecap:round;stroke-linejoin:round;stroke-miterlimit:3;paint-order:stroke fill markers;fill-opacity:1"
							d="m 95.514582,59.795833 v -7.9375 c 1.16566,-2.931231 3.310771,-4.322634 5.556248,-5.55625 3.45551,-1.327297 5.64458,-2.828775 6.61459,-4.497917 H 93.927082 c -4.349473,-0.480224 -7.771539,-2.495053 -10.31875,-5.957533 -1.006318,-2.050821 -1.441469,-4.131421 -1.852083,-6.2133 V 14.022916 c 0.705245,-2.841902 2.111909,-5.2885242 4.233333,-7.3323479 3.230524,-2.677623 6.278394,-3.5536238 9.260417,-3.7801515 H 119.0625 c 2.06115,0.392658 2.43373,1.4076466 2.38028,2.4013441 -0.064,1.1895726 -0.63536,2.780104 -2.38028,2.6257392 h -3.96875 c -1.61428,-0.1708224 -2.39966,1.3700228 -2.38077,2.6385941 0.0127,0.851925 0.46226,2.544618 2.38077,2.388489 h 3.96875 c 2.54191,0.463412 2.25102,1.46245 2.38113,2.334172 0.13469,0.902412 -0.066,1.914878 -2.38113,2.428328 H 101.07083 V 26.9875 h 12.17084 c 3.92289,0.836913 5.71408,2.250313 7.3779,3.895028 4.09852,4.051442 5.14835,9.411602 3.3151,14.625805 -0.80369,2.987203 -2.14813,5.571544 -4.343,7.52231 -3.5076,2.933113 -5.71686,5.844187 -15.38383,8.881856 -2.20117,0.337329 -4.325707,1.000969 -6.841175,0 -0.726689,-0.35097 -1.377243,-0.948871 -1.852083,-2.116666 z"
							id="path19942"
						/><rect
							style="opacity:1;fill:#2c4802;fill-opacity:1;fill-rule:evenodd;stroke-width:1.13982;stroke-linecap:round;stroke-linejoin:round;stroke-miterlimit:3;paint-order:stroke fill markers"
							id="rect19944"
							width="7.6729159"
							height="7.4083333"
							x="83.872917"
							y="102.12917"
						/><rect
							style="opacity:1;fill:#2c4802;fill-opacity:1;fill-rule:evenodd;stroke-width:1.13982;stroke-linecap:round;stroke-linejoin:round;stroke-miterlimit:3;paint-order:stroke fill markers"
							id="rect20144"
							width="7.672914"
							height="7.4083333"
							x="93.927086"
							y="102.12917"
						/><rect
							style="opacity:1;fill:#2c4802;fill-opacity:1;fill-rule:evenodd;stroke-width:1.13982;stroke-linecap:round;stroke-linejoin:round;stroke-miterlimit:3;paint-order:stroke fill markers"
							id="rect20146"
							width="7.6729169"
							height="7.4083333"
							x="103.98125"
							y="102.12917"
						/><rect
							style="opacity:1;fill:#2c4802;fill-opacity:1;fill-rule:evenodd;stroke-width:1.13982;stroke-linecap:round;stroke-linejoin:round;stroke-miterlimit:3;paint-order:stroke fill markers"
							id="rect20148"
							width="7.6729169"
							height="7.4083333"
							x="113.77084"
							y="91.28125"
						/><rect
							style="opacity:1;fill:#c93019;fill-opacity:1;fill-rule:evenodd;stroke-width:1.13982;stroke-linecap:round;stroke-linejoin:round;stroke-miterlimit:3;paint-order:stroke fill markers"
							id="rect20150"
							width="7.6729169"
							height="7.4083333"
							x="106.49479"
							y="79.11042"
						/><rect
							style="opacity:1;fill:#2c4802;fill-opacity:1;fill-rule:evenodd;stroke-width:1.13982;stroke-linecap:round;stroke-linejoin:round;stroke-miterlimit:3;paint-order:stroke fill markers"
							id="rect20515"
							width="7.6729169"
							height="7.4083333"
							x="106.49479"
							y="79.11042"
						/><rect
							style="opacity:1;fill:#2c4802;fill-opacity:1;fill-rule:evenodd;stroke-width:1.13982;stroke-linecap:round;stroke-linejoin:round;stroke-miterlimit:3;paint-order:stroke fill markers"
							id="rect20880"
							width="7.6729169"
							height="7.4083333"
							x="99.880203"
							y="49.741669"
						/><rect
							style="opacity:1;fill:#2c4802;fill-opacity:1;fill-rule:evenodd;stroke-width:1.13982;stroke-linecap:round;stroke-linejoin:round;stroke-miterlimit:3;paint-order:stroke fill markers"
							id="rect20882"
							width="7.6729169"
							height="7.4083333"
							x="113.77084"
							y="40.481251"
						/><rect
							style="opacity:1;fill:#2c4802;fill-opacity:1;fill-rule:evenodd;stroke-width:1.13982;stroke-linecap:round;stroke-linejoin:round;stroke-miterlimit:3;paint-order:stroke fill markers"
							id="rect20884"
							width="7.6729169"
							height="7.4083333"
							x="103.45208"
							y="30.162498"
						/><rect
							style="opacity:1;fill:#2c4802;fill-opacity:1;fill-rule:evenodd;stroke-width:1.13982;stroke-linecap:round;stroke-linejoin:round;stroke-miterlimit:3;paint-order:stroke fill markers"
							id="rect20886"
							width="7.6729169"
							height="7.4083333"
							x="86.121872"
							y="27.252083"
						/><rect
							style="opacity:1;fill:#2c4802;fill-opacity:1;fill-rule:evenodd;stroke-width:1.13982;stroke-linecap:round;stroke-linejoin:round;stroke-miterlimit:3;paint-order:stroke fill markers"
							id="rect20888"
							width="7.6729169"
							height="7.4083333"
							x="86.121872"
							y="12.964583"
						/><rect
							style="opacity:1;fill:#2c4802;fill-opacity:1;fill-rule:evenodd;stroke-width:1.13982;stroke-linecap:round;stroke-linejoin:round;stroke-miterlimit:3;paint-order:stroke fill markers"
							id="rect20890"
							width="7.6729169"
							height="7.4083333"
							x="96.572914"
							y="6.0854168"
						/><path
							style="opacity:1;fill:#2c4802;fill-opacity:1;fill-rule:evenodd;stroke-width:1.2;stroke-linecap:round;stroke-linejoin:round;stroke-miterlimit:3;paint-order:stroke fill markers"
							d="m 77.7875,96.8375 12.964582,-12.964584 10e-7,12.964584 z"
							id="path20946"
						/><path
							style="opacity:1;fill:#ca2332;fill-opacity:1;fill-rule:evenodd;stroke-width:1.2;stroke-linecap:round;stroke-linejoin:round;stroke-miterlimit:3;paint-order:stroke fill markers"
							d="M 82.814582,65.616666 V 54.239583 h 4.497917 v 11.377083 z"
							id="path20948"
						/><path
							style="opacity:1;fill:#ffe36a;fill-opacity:1;fill-rule:evenodd;stroke-width:1.2;stroke-linecap:round;stroke-linejoin:round;stroke-miterlimit:3;paint-order:stroke fill markers"
							d="m 73.818749,99.747915 h -8.73125 c 1.333896,-5.498293 4.392795,-8.068474 8.73125,-8.466666 z"
							id="path20952"
						/><path
							style="opacity:1;fill:#ffe36a;fill-opacity:1;fill-rule:evenodd;stroke-width:1.2;stroke-linecap:round;stroke-linejoin:round;stroke-miterlimit:3;paint-order:stroke fill markers"
							d="m 76.861458,89.69375 h -8.73125 c 1.333896,-5.498293 4.392795,-8.068474 8.73125,-8.466666 z"
							id="path20954"
						/><path
							style="opacity:1;fill:#ffe36a;fill-opacity:1;fill-rule:evenodd;stroke-width:1.2;stroke-linecap:round;stroke-linejoin:round;stroke-miterlimit:3;paint-order:stroke fill markers"
							d="m 80.565625,79.375 h -8.73125 c 1.333896,-5.498293 4.392795,-8.068474 8.73125,-8.466666 z"
							id="path20956"
						/></g
					><g id="g21732" transform="matrix(-1,0,0,1,128.5875,0)"
						><path
							style="opacity:1;fill:#ffe36a;fill-opacity:1;fill-rule:evenodd;stroke-width:1.2;stroke-linecap:round;stroke-linejoin:round;stroke-miterlimit:3;paint-order:stroke fill markers"
							d="m 64.293749,116.68125 v -8.46667 c 3.547875,-0.0382 6.220416,3.21173 9.065016,5.8153 1.251626,1.22261 2.157819,2.58513 4.957901,3.18054 h 3.96875 v 7.14375 h -7.672917 c -1.633021,0.0269 -4.327531,-1.87732 -6.202485,-3.85055 -1.407587,-1.48137 -2.741369,-2.7175 -4.116265,-3.82237 z"
							id="path21684"
						/><rect
							style="opacity:1;fill:#ffe36a;fill-opacity:1;fill-rule:evenodd;stroke-width:1.2;stroke-linecap:round;stroke-linejoin:round;stroke-miterlimit:3;paint-order:stroke fill markers"
							id="rect21686"
							width="10.054167"
							height="7.1437497"
							x="86.783333"
							y="117.21042"
						/><rect
							style="opacity:1;fill:#ffe36a;fill-opacity:1;fill-rule:evenodd;stroke-width:1.2;stroke-linecap:round;stroke-linejoin:round;stroke-miterlimit:3;paint-order:stroke fill markers"
							id="rect21688"
							width="10.054167"
							height="7.1437497"
							x="100.80625"
							y="117.21042"
						/><path
							style="opacity:1;fill:#ffe36a;fill-opacity:1;fill-rule:evenodd;stroke-width:1.2;stroke-linecap:round;stroke-linejoin:round;stroke-miterlimit:3;paint-order:stroke fill markers"
							d="m 124.35417,108.21458 v 8.99584 c -1.14006,2.96561 -3.52702,5.07253 -6.35,6.87916 h -3.43959 v -2.38125 c 0.2925,-3.23212 3.41035,-7.66811 9.78959,-13.49375 z"
							id="path21690"
						/><path
							style="opacity:1;fill:#2c4802;fill-opacity:1;fill-rule:evenodd;stroke-width:1.2;stroke-linecap:round;stroke-linejoin:round;stroke-miterlimit:3;paint-order:stroke fill markers"
							d="m 64.293749,88.106249 v -26.9875 l 8.995833,-5.820833 4.7625,9.525 -3.96875,18.520833 z"
							id="path21692"
						/><path
							style="opacity:1;fill:#477f35;fill-opacity:1;fill-rule:evenodd;stroke-width:1.2;stroke-linecap:round;stroke-linejoin:round;stroke-miterlimit:3;paint-order:stroke fill markers"
							d="M 64.293749,103.45208 V 87.841666 c 0.26175,-4.744272 2.283974,-7.616697 3.96875,-10.847917 4.448171,-7.727451 4.33519,-14.686351 5.027083,-21.695833 3.985204,-3.919418 7.130928,-5.191107 9.783707,-5.300446 3.652482,-0.150544 6.534818,2.120108 8.737127,5.300446 0.924862,2.304644 1.456384,4.803715 1.587499,7.408333 v 10.847917 c 0.712831,4.560173 1.692063,8.73406 3.968752,12.964584 1.741806,3.236608 4.309883,6.283195 8.731253,9.032461 1.27077,-0.132122 1.73562,-0.86274 1.85208,-1.852083 -2.62631,-3.582163 -4.61974,-7.353556 -4.7625,-11.678296 -0.26214,-6.294665 2.67438,-9.467489 5.82083,-12.435416 3.04223,-2.263407 6.5002,-3.617891 10.05417,-4.7625 1.73174,0.0074 3.59684,-0.384394 5.55625,-1.058333 v 4.762499 c -3.7101,1.372342 -7.45843,2.454097 -10.84792,6.263048 -0.11135,0.710484 -0.34032,1.462296 0.96675,1.674452 3.55689,-1.911703 6.77568,-2.387122 9.88117,-2.38125 v 4.497917 c -2.93718,0.363663 -6.68242,-0.751664 -7.67292,3.175 0.2158,1.827592 0.2436,3.623218 3.43959,5.957533 2.18606,1.986245 4.23264,4.07218 4.35103,7.536217 0.0734,2.556503 -0.56227,4.882851 -1.7052,6.614581 l -9.51109,9.525 c -1.70329,1.08258 -3.39184,1.80982 -5.04099,1.5875 H 81.491666 c -1.559105,0.57649 -3.680143,-0.86706 -5.820834,-2.38125 l -8.202083,-6.08541 c -1.073875,-0.71942 -2.131458,-1.0545 -3.175,-1.05834 z"
							id="path21694"
						/><path
							style="opacity:1;fill:#477f35;fill-opacity:1;fill-rule:evenodd;stroke-width:1.2;stroke-linecap:round;stroke-linejoin:round;stroke-miterlimit:3;paint-order:stroke fill markers"
							d="m 95.514582,59.795833 v -7.9375 c 1.16566,-2.931231 3.310771,-4.322634 5.556248,-5.55625 3.45551,-1.327297 5.64458,-2.828775 6.61459,-4.497917 H 93.927082 c -4.349473,-0.480224 -7.771539,-2.495053 -10.31875,-5.957533 -1.006318,-2.050821 -1.441469,-4.131421 -1.852083,-6.2133 V 14.022916 c 0.705245,-2.841902 2.111909,-5.2885242 4.233333,-7.3323479 3.230524,-2.677623 6.278394,-3.5536238 9.260417,-3.7801515 H 119.0625 c 2.06115,0.392658 2.43373,1.4076466 2.38028,2.4013441 -0.064,1.1895726 -0.63536,2.780104 -2.38028,2.6257392 h -3.96875 c -1.61428,-0.1708224 -2.39966,1.3700228 -2.38077,2.6385941 0.0127,0.851925 0.46226,2.544618 2.38077,2.388489 h 3.96875 c 2.54191,0.463412 2.25102,1.46245 2.38113,2.334172 0.13469,0.902412 -0.066,1.914878 -2.38113,2.428328 H 101.07083 V 26.9875 h 12.17084 c 3.92289,0.836913 5.71408,2.250313 7.3779,3.895028 4.09852,4.051442 5.14835,9.411602 3.3151,14.625805 -0.80369,2.987203 -2.14813,5.571544 -4.343,7.52231 -3.5076,2.933113 -5.71686,5.844187 -15.38383,8.881856 -2.20117,0.337329 -4.325707,1.000969 -6.841175,0 -0.726689,-0.35097 -1.377243,-0.948871 -1.852083,-2.116666 z"
							id="path21696"
						/><rect
							style="opacity:1;fill:#2c4802;fill-opacity:1;fill-rule:evenodd;stroke-width:1.13982;stroke-linecap:round;stroke-linejoin:round;stroke-miterlimit:3;paint-order:stroke fill markers"
							id="rect21698"
							width="7.6729159"
							height="7.4083333"
							x="83.872917"
							y="102.12917"
						/><rect
							style="opacity:1;fill:#2c4802;fill-opacity:1;fill-rule:evenodd;stroke-width:1.13982;stroke-linecap:round;stroke-linejoin:round;stroke-miterlimit:3;paint-order:stroke fill markers"
							id="rect21700"
							width="7.672914"
							height="7.4083333"
							x="93.927086"
							y="102.12917"
						/><rect
							style="opacity:1;fill:#2c4802;fill-opacity:1;fill-rule:evenodd;stroke-width:1.13982;stroke-linecap:round;stroke-linejoin:round;stroke-miterlimit:3;paint-order:stroke fill markers"
							id="rect21702"
							width="7.6729169"
							height="7.4083333"
							x="103.98125"
							y="102.12917"
						/><rect
							style="opacity:1;fill:#2c4802;fill-opacity:1;fill-rule:evenodd;stroke-width:1.13982;stroke-linecap:round;stroke-linejoin:round;stroke-miterlimit:3;paint-order:stroke fill markers"
							id="rect21704"
							width="7.6729169"
							height="7.4083333"
							x="113.77084"
							y="91.28125"
						/><rect
							style="opacity:1;fill:#c93019;fill-opacity:1;fill-rule:evenodd;stroke-width:1.13982;stroke-linecap:round;stroke-linejoin:round;stroke-miterlimit:3;paint-order:stroke fill markers"
							id="rect21706"
							width="7.6729169"
							height="7.4083333"
							x="106.49479"
							y="79.11042"
						/><rect
							style="opacity:1;fill:#2c4802;fill-opacity:1;fill-rule:evenodd;stroke-width:1.13982;stroke-linecap:round;stroke-linejoin:round;stroke-miterlimit:3;paint-order:stroke fill markers"
							id="rect21708"
							width="7.6729169"
							height="7.4083333"
							x="106.49479"
							y="79.11042"
						/><rect
							style="opacity:1;fill:#2c4802;fill-opacity:1;fill-rule:evenodd;stroke-width:1.13982;stroke-linecap:round;stroke-linejoin:round;stroke-miterlimit:3;paint-order:stroke fill markers"
							id="rect21710"
							width="7.6729169"
							height="7.4083333"
							x="99.880203"
							y="49.741669"
						/><rect
							style="opacity:1;fill:#2c4802;fill-opacity:1;fill-rule:evenodd;stroke-width:1.13982;stroke-linecap:round;stroke-linejoin:round;stroke-miterlimit:3;paint-order:stroke fill markers"
							id="rect21712"
							width="7.6729169"
							height="7.4083333"
							x="113.77084"
							y="40.481251"
						/><rect
							style="opacity:1;fill:#2c4802;fill-opacity:1;fill-rule:evenodd;stroke-width:1.13982;stroke-linecap:round;stroke-linejoin:round;stroke-miterlimit:3;paint-order:stroke fill markers"
							id="rect21714"
							width="7.6729169"
							height="7.4083333"
							x="103.45208"
							y="30.162498"
						/><rect
							style="opacity:1;fill:#2c4802;fill-opacity:1;fill-rule:evenodd;stroke-width:1.13982;stroke-linecap:round;stroke-linejoin:round;stroke-miterlimit:3;paint-order:stroke fill markers"
							id="rect21716"
							width="7.6729169"
							height="7.4083333"
							x="86.121872"
							y="27.252083"
						/><rect
							style="opacity:1;fill:#2c4802;fill-opacity:1;fill-rule:evenodd;stroke-width:1.13982;stroke-linecap:round;stroke-linejoin:round;stroke-miterlimit:3;paint-order:stroke fill markers"
							id="rect21718"
							width="7.6729169"
							height="7.4083333"
							x="86.121872"
							y="12.964583"
						/><rect
							style="opacity:1;fill:#2c4802;fill-opacity:1;fill-rule:evenodd;stroke-width:1.13982;stroke-linecap:round;stroke-linejoin:round;stroke-miterlimit:3;paint-order:stroke fill markers"
							id="rect21720"
							width="7.6729169"
							height="7.4083333"
							x="96.572914"
							y="6.0854168"
						/><path
							style="opacity:1;fill:#2c4802;fill-opacity:1;fill-rule:evenodd;stroke-width:1.2;stroke-linecap:round;stroke-linejoin:round;stroke-miterlimit:3;paint-order:stroke fill markers"
							d="m 77.7875,96.8375 12.964582,-12.964584 10e-7,12.964584 z"
							id="path21722"
						/><path
							style="opacity:1;fill:#ca2332;fill-opacity:1;fill-rule:evenodd;stroke-width:1.2;stroke-linecap:round;stroke-linejoin:round;stroke-miterlimit:3;paint-order:stroke fill markers"
							d="M 82.814582,65.616666 V 54.239583 h 4.497917 v 11.377083 z"
							id="path21724"
						/><path
							style="opacity:1;fill:#ffe36a;fill-opacity:1;fill-rule:evenodd;stroke-width:1.2;stroke-linecap:round;stroke-linejoin:round;stroke-miterlimit:3;paint-order:stroke fill markers"
							d="m 73.818749,99.747915 h -8.73125 c 1.333896,-5.498293 4.392795,-8.068474 8.73125,-8.466666 z"
							id="path21726"
						/><path
							style="opacity:1;fill:#ffe36a;fill-opacity:1;fill-rule:evenodd;stroke-width:1.2;stroke-linecap:round;stroke-linejoin:round;stroke-miterlimit:3;paint-order:stroke fill markers"
							d="m 76.861458,89.69375 h -8.73125 c 1.333896,-5.498293 4.392795,-8.068474 8.73125,-8.466666 z"
							id="path21728"
						/><path
							style="opacity:1;fill:#ffe36a;fill-opacity:1;fill-rule:evenodd;stroke-width:1.2;stroke-linecap:round;stroke-linejoin:round;stroke-miterlimit:3;paint-order:stroke fill markers"
							d="m 80.565625,79.375 h -8.73125 c 1.333896,-5.498293 4.392795,-8.068474 8.73125,-8.466666 z"
							id="path21730"
						/></g
					></g
				><path
					style="opacity:1;fill:#2c4802;fill-opacity:1;fill-rule:evenodd;stroke-width:1.2;stroke-linecap:round;stroke-linejoin:round;stroke-miterlimit:3;paint-order:stroke fill markers"
					d="M 64.293749,87.577082 64.029166,84.137499 V 61.383333 l 0.264583,-0.264584 0.264586,0.264584 v 22.754166 z"
					id="path28888"
				/><path
					style="opacity:1;fill:#477f35;fill-opacity:1;fill-rule:evenodd;stroke-width:1.2;stroke-linecap:round;stroke-linejoin:round;stroke-miterlimit:3;paint-order:stroke fill markers"
					d="m 64.293749,87.841666 h -0.264583 v 15.618504 h 0.529167 V 87.841666 Z"
					id="path28890"
				/><path
					style="opacity:1;fill:#ffe36a;fill-opacity:1;fill-rule:evenodd;stroke-width:1.2;stroke-linecap:round;stroke-linejoin:round;stroke-miterlimit:3;paint-order:stroke fill markers"
					d="m 64.293749,116.68125 h -0.264583 v -8.46343 h 0.529167 v 8.46343 z"
					id="path28946"
				/></g
			></g
		><metadata id="metadata22993">
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
