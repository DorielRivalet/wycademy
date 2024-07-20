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
				id="filter31138"
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
					id="feComposite31124"
				/><feColorMatrix
					in="composite1"
					values="1"
					type="saturate"
					result="colormatrix1"
					id="feColorMatrix31126"
				/><feFlood
					flood-opacity="1"
					flood-color="rgb(0,0,0)"
					result="flood1"
					id="feFlood31128"
				/><feBlend
					in="flood1"
					in2="colormatrix1"
					mode="multiply"
					result="blend1"
					id="feBlend31130"
				/><feBlend
					in2="blend1"
					mode="screen"
					result="blend2"
					id="feBlend31132"
				/><feColorMatrix
					in="blend2"
					values="1"
					type="saturate"
					result="colormatrix2"
					id="feColorMatrix31134"
				/><feComposite
					in="colormatrix2"
					in2="SourceGraphic"
					operator="in"
					k2="1"
					result="composite2"
					id="feComposite31136"
				/></filter
			><filter
				style="color-interpolation-filters:sRGB;"
				id="filter80724"
				x="-0.09070867"
				y="-0.075590554"
				width="1.1814173"
				height="1.1511811"
				><feComposite
					in2="SourceGraphic"
					operator="arithmetic"
					k1="0"
					k2="1"
					result="composite1"
					id="feComposite80710"
				/><feColorMatrix
					in="composite1"
					values="1"
					type="saturate"
					result="colormatrix1"
					id="feColorMatrix80712"
				/><feFlood
					flood-opacity="1"
					flood-color="rgb(255,255,255)"
					result="flood1"
					id="feFlood80714"
				/><feBlend
					in="flood1"
					in2="colormatrix1"
					mode="multiply"
					result="blend1"
					id="feBlend80716"
				/><feBlend
					in2="blend1"
					mode="screen"
					result="blend2"
					id="feBlend80718"
				/><feColorMatrix
					in="blend2"
					values="1"
					type="saturate"
					result="colormatrix2"
					id="feColorMatrix80720"
				/><feComposite
					in="colormatrix2"
					in2="SourceGraphic"
					operator="in"
					k2="1"
					result="composite2"
					id="feComposite80722"
				/></filter
			><filter
				style="color-interpolation-filters:sRGB;"
				id="filter96294"
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
					id="feComposite96280"
				/><feColorMatrix
					in="composite1"
					values="1"
					type="saturate"
					result="colormatrix1"
					id="feColorMatrix96282"
				/><feFlood
					flood-opacity="1"
					flood-color="rgb(0,0,0)"
					result="flood1"
					id="feFlood96284"
				/><feBlend
					in="flood1"
					in2="colormatrix1"
					mode="multiply"
					result="blend1"
					id="feBlend96286"
				/><feBlend
					in2="blend1"
					mode="screen"
					result="blend2"
					id="feBlend96288"
				/><feColorMatrix
					in="blend2"
					values="1"
					type="saturate"
					result="colormatrix2"
					id="feColorMatrix96290"
				/><feComposite
					in="colormatrix2"
					in2="SourceGraphic"
					operator="in"
					k2="1"
					result="composite2"
					id="feComposite96292"
				/></filter
			><filter
				style="color-interpolation-filters:sRGB;"
				id="filter21301"
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
					id="feComposite21287"
				/><feColorMatrix
					in="composite1"
					values="1"
					type="saturate"
					result="colormatrix1"
					id="feColorMatrix21289"
				/><feFlood
					flood-opacity="1"
					flood-color="rgb(0,0,0)"
					result="flood1"
					id="feFlood21291"
				/><feBlend
					in="flood1"
					in2="colormatrix1"
					mode="multiply"
					result="blend1"
					id="feBlend21293"
				/><feBlend
					in2="blend1"
					mode="screen"
					result="blend2"
					id="feBlend21295"
				/><feColorMatrix
					in="blend2"
					values="1"
					type="saturate"
					result="colormatrix2"
					id="feColorMatrix21297"
				/><feComposite
					in="colormatrix2"
					in2="SourceGraphic"
					operator="in"
					k2="1"
					result="composite2"
					id="feComposite21299"
				/></filter
			></defs
		><g
			id="g80339"
			transform="matrix(0.951311,0,0,0.951311,-1.5300308,6.2241364)"
		/><metadata id="metadata31866">
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
		><g
			id="g20922"
			style="filter:url(#filter21301)"
			transform="translate(1.0583333,1.5875)"
			><path
				style="opacity:1;fill:#5c6d65;fill-opacity:1;fill-rule:evenodd;stroke-width:3;stroke-linecap:round;stroke-linejoin:round;stroke-miterlimit:3;stroke-opacity:0.498674;paint-order:stroke fill markers"
				d="m 84.666667,115.8875 3.174999,3.96875 h 19.314584 c 10.47713,-2.62616 11.86873,-8.18295 14.02292,-13.49375 V 39.952083 C 120.865,35.385657 120.32221,30.920264 111.38958,30.1625 H 99.218749 c -2.097781,-0.809898 -3.25117,-2.446659 -4.233334,-4.233334 -0.03258,-3.045319 -0.05879,-6.09274 -1.322916,-8.73125 C 89.816128,12.585193 85.868473,8.0259914 76.464582,6.3499999 H 65.352083 C 58.618782,7.4797118 51.55564,8.0515314 48.154166,14.816666 v 8.202084 c -2.055868,0.845143 -3.318252,2.497179 -4.497917,4.233333 -6.289958,0.171352 -12.316535,0.704778 -12.699999,8.995833 0.608801,5.917429 0.714265,11.342161 4.233333,20.108333 v 10.054167 c -1.127634,1.276646 -1.95724,2.786666 -4.7625,2.749629 h -2.910417 c -2.266749,3.062994 -3.737974,6.168323 -7.408333,9.156621 l -0.529167,1.852083 -1.058333,-2.116667 c -1.389087,1.119054 -2.521064,2.136972 -3.704167,3.175 -1.365518,-0.730207 -3.40822,-1.43314 -5.0270827,-2.116666 v 6.879166 h 7.9374997 l 6.085417,-2.116666 4.233333,-3.96875 h 5.820833 c 2.657762,-3.929612 5.415459,-7.831599 11.377083,-10.847917 h 18.785417 c 0.06961,-2.86697 1.351748,-5.198688 2.910416,-7.408333 -0.925201,-1.419954 -1.968591,-2.864867 -2.116666,-6.085417 0.382023,-6.217809 4.883418,-8.341148 8.466666,-11.377083 h 7.14375 c 3.127514,1.276614 4.323201,3.424861 5.55625,5.55625 1.463833,4.740384 2.530448,9.61886 3.439584,14.552083 4.553414,-1.220363 8.189406,1.026956 11.641664,3.96875 v 17.4625 c -0.41698,3.63319 -0.71648,7.224771 -1.852081,11.1125 V 104.775 c -1.283886,1.48304 -1.97219,2.88995 -4.233334,4.49792 l -0.79375,0.79375 H 87.3125 Z"
				id="path20818"
			/><path
				style="fill:#a4a163;fill-opacity:1;fill-rule:evenodd;stroke-width:3;stroke-linecap:round;stroke-linejoin:round;stroke-miterlimit:3;stroke-opacity:0.498674;paint-order:stroke fill markers"
				d="m 40.481249,58.737499 h 2.38125 l -0.264583,-1.852083 0.529167,-1.058333 v -1.5875 L 41.274999,53.181249 38.1,52.916666 v 2.645833 z"
				id="path20820"
			/><path
				style="fill:#611d1d;fill-opacity:1;fill-rule:evenodd;stroke-width:3;stroke-linecap:round;stroke-linejoin:round;stroke-miterlimit:3;stroke-opacity:0.498674;paint-order:stroke fill markers"
				d="m 54.239583,120.38542 c 0.607585,-5.07524 2.808519,-8.87255 9.260416,-9.26042 v 9.26042 z"
				id="path20822"
			/><path
				style="fill:#576760;fill-opacity:1;fill-rule:evenodd;stroke-width:3;stroke-linecap:round;stroke-linejoin:round;stroke-miterlimit:3;stroke-opacity:0.498674;paint-order:stroke fill markers"
				d="m 74.083332,120.38542 7.9375,-2.64584 -3.96875,-3.96875 v -5.29166 l -10.583333,1.32291 -1.322917,3.96875 z"
				id="path20824"
			/><path
				style="fill:#611d1d;fill-opacity:1;fill-rule:evenodd;stroke-width:3;stroke-linecap:round;stroke-linejoin:round;stroke-miterlimit:3;stroke-opacity:0.498674;paint-order:stroke fill markers"
				d="M 74.083332,120.38542 V 111.125 h -5.291666 l -2.645834,2.64583 10e-7,6.61459 z"
				id="path20826"
			/><path
				style="fill:#a4a163;fill-opacity:1;fill-rule:evenodd;stroke-width:3;stroke-linecap:round;stroke-linejoin:round;stroke-miterlimit:3;stroke-opacity:0.498674;paint-order:stroke fill markers"
				d="m 80.697916,110.06667 h 6.879166 l -2.645832,6.08541 -3.968751,-3.43958 z"
				id="path20828"
			/><path
				style="fill:#596a63;fill-opacity:1;fill-rule:evenodd;stroke-width:3;stroke-linecap:round;stroke-linejoin:round;stroke-miterlimit:3;stroke-opacity:0.498674;paint-order:stroke fill markers"
				d="m 89.164582,107.95 -9.789583,-1.32292 5.291667,-5.55625 v -6.349998 l -2.645834,-7.408333 1.322917,-1.322917 h 8.995833 l 3.666175,-2.116666 v -5.820834 l -1.020342,-1.767281 v -2.730635 c -0.49601,-0.919631 -1.436254,-1.045178 -2.291357,-1.322917 h -2.471142 c -0.41347,-0.01268 -0.744298,0.472272 -1.058334,1.058333 l -0.42537,1.5875 -0.79375,0.79375 0.689954,0.689954 h 3.96875 v 5.395463 h -7.937499 v -9.525 c 0.836359,-2.008425 2.01084,-4.023567 4.233332,-4.7625 h 6.879166 c 1.750877,0.913985 2.091853,2.760183 2.596873,4.497917 v 21.960416 c -2.010874,0.986746 -2.767917,4.927177 -3.919789,7.937498 -1.344828,2.06176 -3.002444,4.09867 -5.291667,6.08542 z"
				id="path20830"
			/><path
				style="fill:#596a63;fill-opacity:1;fill-rule:evenodd;stroke-width:3;stroke-linecap:round;stroke-linejoin:round;stroke-miterlimit:3;stroke-opacity:0.498674;paint-order:stroke fill markers"
				d="m 75.670832,86.783332 c 3.159492,-0.117096 5.290996,-1.650808 6.085417,-5.027083 V 71.172916 l 4.233333,-4.233334 C 85.870191,55.987782 84.745509,54.44078 83.872916,50.535416 82.924846,48.755485 82.187087,46.834839 79.374999,46.302083 h -3.96875 c -3.433419,0.452895 -4.628439,2.342271 -5.820833,4.233333 -2.097745,2.734842 -1.399978,5.233539 0,7.672917 0.850496,1.343837 1.29388,2.803289 3.704166,3.704166 h 5.55625 c 0,0 0.264584,-8.73125 0,-8.73125 h -3.704166 v 2.116667 h 1.058333 v 1.322917 c -0.199917,0.343619 -0.536527,0.671419 -1.5875,0.916543 l -1.5875,-0.425368 -0.264582,-2.078675 C 71.821551,51.895492 73.633721,52.111551 74.083333,50.8 H 79.375 c 2.006356,0.971299 1.410634,2.205093 1.680328,3.174999 0.557129,1.724436 0.942123,3.413214 0.965505,5.027084 0.07348,1.371005 -0.312218,2.777807 -1.322919,4.233333 -2.332784,0.450526 -4.313149,1.502808 -6.085417,2.910416 v 15.875 c 0,0 1.058333,4.497917 1.058333,4.7625 z"
				id="path20832"
			/><path
				style="fill:#3c4e60;fill-opacity:1;fill-rule:evenodd;stroke-width:3.85714;stroke-linecap:round;stroke-linejoin:round;stroke-miterlimit:3;stroke-opacity:0.498674;paint-order:stroke fill markers"
				d="m 77.296198,87.3125 c 5.379297,3.269065 6.539943,7.486798 6.803571,11.906248 C 79.758785,98.58437 77.250576,95.002198 77.296198,87.3125 Z"
				id="path20834"
			/><path
				style="fill:#3c4e60;fill-opacity:1;fill-rule:evenodd;stroke-width:3;stroke-linecap:round;stroke-linejoin:round;stroke-miterlimit:3;stroke-opacity:0.498674;paint-order:stroke fill markers"
				d="m 34.13125,117.73958 c 5.72471,0.56856 4.469355,-0.33171 9.524999,-1.32291 4.523595,-4.48469 7.383342,-9.36371 10.054167,-14.2875 0.440132,-2.568311 0.827717,-5.135029 0.264583,-7.672921 1.446781,-1.954578 2.781877,-4.010308 5.55625,-4.7625 h 5.55625 c 3.761625,0.143755 3.714275,-0.89142 4.7625,-1.5875 0.574205,-3.281196 1.280213,-6.435608 3.704167,-7.9375 V 66.145832 h -6.35 c -1.230121,1.406035 -1.762478,3.05345 -2.116667,4.7625 H 52.652083 c -0.720088,0.714056 -1.29861,1.444448 -2.38125,2.116667 -3.854365,0.885269 -9.137746,-1.246126 -11.377083,3.048482 v 17.059851 7.672918 c -1.521651,2.06164 -3.578028,3.55007 -6.879167,3.70417 z"
				id="path20836"
			/><path
				style="fill:#632222;fill-opacity:1;fill-rule:evenodd;stroke-width:3;stroke-linecap:round;stroke-linejoin:round;stroke-miterlimit:3;stroke-opacity:0.498674;paint-order:stroke fill markers"
				d="m 74.612499,82.020832 -0.79375,1.058334 c -1.470281,-0.244677 -1.661544,1.041777 -1.5875,2.645833 0.07263,1.772469 0.470182,3.404706 2.116667,4.497917 0.314613,-1.221598 0.24157,-2.673505 1.322916,-3.439584 z"
				id="path20838"
			/><path
				style="fill:#a4a163;fill-opacity:1;fill-rule:evenodd;stroke-width:3;stroke-linecap:round;stroke-linejoin:round;stroke-miterlimit:3;stroke-opacity:0.498674;paint-order:stroke fill markers"
				d="m 92.339582,114.03542 h 2.38125 l 0.264583,5.02708 -2.116666,-0.79375 z"
				id="path20840"
			/><path
				style="fill:#a4a163;fill-opacity:1;fill-rule:evenodd;stroke-width:3;stroke-linecap:round;stroke-linejoin:round;stroke-miterlimit:3;stroke-opacity:0.498674;paint-order:stroke fill markers"
				d="m 102.12917,110.86042 h 3.43958 l 1.5875,-1.05834 2.64583,2.38125 -2.38125,2.64584 -6.35,-1.5875 z"
				id="path20842"
			/><path
				style="fill:#a4a163;fill-opacity:1;fill-rule:evenodd;stroke-width:3;stroke-linecap:round;stroke-linejoin:round;stroke-miterlimit:3;stroke-opacity:0.498674;paint-order:stroke fill markers"
				d="m 115.35833,98.160415 h 3.175 l 1.32292,1.322917 v 3.439588 l -1.32292,0.79375 -3.43958,-2.11667 z"
				id="path20844"
			/><path
				style="fill:#a4a163;fill-opacity:1;fill-rule:evenodd;stroke-width:3;stroke-linecap:round;stroke-linejoin:round;stroke-miterlimit:3;stroke-opacity:0.498674;paint-order:stroke fill markers"
				d="m 116.15208,91.545832 h 4.23334 l -1.85209,-3.175 z"
				id="path20846"
			/><path
				style="fill:#a4a163;fill-opacity:1;fill-rule:evenodd;stroke-width:3;stroke-linecap:round;stroke-linejoin:round;stroke-miterlimit:3;stroke-opacity:0.498674;paint-order:stroke fill markers"
				d="m 118.26875,81.756249 -0.26458,-5.820833 1.85208,0.264583 v 5.55625 z"
				id="path20848"
			/><path
				style="fill:#a4a163;fill-opacity:1;fill-rule:evenodd;stroke-width:3;stroke-linecap:round;stroke-linejoin:round;stroke-miterlimit:3;stroke-opacity:0.498674;paint-order:stroke fill markers"
				d="m 116.94583,60.060416 2.91042,0.264583 -1.32292,1.5875 -1.32291,-0.264583 z"
				id="path20850"
			/><path
				style="fill:#a4a163;fill-opacity:1;fill-rule:evenodd;stroke-width:3;stroke-linecap:round;stroke-linejoin:round;stroke-miterlimit:3;stroke-opacity:0.498674;paint-order:stroke fill markers"
				d="m 117.475,50.270833 3.43958,3.175 -4.23333,1.322916 z"
				id="path20852"
			/><path
				style="fill:#641e1f;fill-opacity:1;fill-rule:evenodd;stroke-width:3.31662;stroke-linecap:round;stroke-linejoin:round;stroke-miterlimit:3;stroke-opacity:0.498674;paint-order:stroke fill markers"
				d="m 121.17917,73.81875 v -5.291667 l -5.82084,5.291667 z"
				id="path20854"
			/><path
				style="fill:#641e1f;fill-opacity:1;fill-rule:evenodd;stroke-width:3;stroke-linecap:round;stroke-linejoin:round;stroke-miterlimit:3;stroke-opacity:0.498674;paint-order:stroke fill markers"
				d="m 121.17917,44.185416 -3.43959,0.793751 -6.87916,-0.793751 6.87407,3.96875 z"
				id="path20856"
			/><path
				style="fill:#641e1f;fill-opacity:1;fill-rule:evenodd;stroke-width:3;stroke-linecap:round;stroke-linejoin:round;stroke-miterlimit:3;stroke-opacity:0.498674;paint-order:stroke fill markers"
				d="m 48.154166,19.84375 h 6.614583 c 2.759491,1.044924 2.100257,2.756619 2.645834,4.233333 -1.001273,-0.961711 -1.814756,-2.072977 -3.96875,-2.116667 h -5.291667 z"
				id="path20858"
			/><path
				style="fill:#a4a163;fill-opacity:1;fill-rule:evenodd;stroke-width:3;stroke-linecap:round;stroke-linejoin:round;stroke-miterlimit:3;stroke-opacity:0.498674;paint-order:stroke fill markers"
				d="m 107.95,41.804166 4.23333,-4.497916 2.91042,2.38125 -1.85208,2.381249 z"
				id="path20860"
			/><path
				style="fill:#a4a163;fill-opacity:1;fill-rule:evenodd;stroke-width:3;stroke-linecap:round;stroke-linejoin:round;stroke-miterlimit:3;stroke-opacity:0.498674;paint-order:stroke fill markers"
				d="m 100.27708,37.835416 6.87917,-0.264583 -0.26458,-5.820833 -6.61459,2.116666 z"
				id="path20862"
			/><path
				style="fill:#a4a163;fill-opacity:1;fill-rule:evenodd;stroke-width:3;stroke-linecap:round;stroke-linejoin:round;stroke-miterlimit:3;stroke-opacity:0.498674;paint-order:stroke fill markers"
				d="m 92.868749,29.633333 3.175,0.264583 1.322916,1.322917 -2.645833,3.175 h -1.322917 z"
				id="path20864"
			/><path
				style="fill:#a4a163;fill-opacity:1;fill-rule:evenodd;stroke-width:3;stroke-linecap:round;stroke-linejoin:round;stroke-miterlimit:3;stroke-opacity:0.498674;paint-order:stroke fill markers"
				d="m 93.662499,22.754166 -2.910417,3.704167 -2.38125,-2.910417 z"
				id="path20866"
			/><path
				style="fill:#a4a163;fill-opacity:1;fill-rule:evenodd;stroke-width:3;stroke-linecap:round;stroke-linejoin:round;stroke-miterlimit:3;stroke-opacity:0.498674;paint-order:stroke fill markers"
				d="m 88.106249,14.2875 h -4.233333 l -2.910417,2.38125 5.55625,4.7625 1.322917,-3.96875 z"
				id="path20868"
			/><path
				style="fill:#893937;fill-opacity:1;fill-rule:evenodd;stroke-width:3;stroke-linecap:round;stroke-linejoin:round;stroke-miterlimit:3;stroke-opacity:0.498674;paint-order:stroke fill markers"
				d="m 75.141666,13.229167 h 5.820833 l -4.497916,2.38125 z"
				id="path20870"
			/><path
				style="fill:#a4a163;fill-opacity:1;fill-rule:evenodd;stroke-width:3;stroke-linecap:round;stroke-linejoin:round;stroke-miterlimit:3;stroke-opacity:0.498674;paint-order:stroke fill markers"
				d="m 64.822916,12.7 h 4.497916 l -0.264583,-3.1750001 -1.5875,-2.38125 -2.910416,1.8520833 z"
				id="path20872"
			/><path
				style="fill:#a4a163;fill-opacity:1;fill-rule:evenodd;stroke-width:3;stroke-linecap:round;stroke-linejoin:round;stroke-miterlimit:3;stroke-opacity:0.498674;paint-order:stroke fill markers"
				d="m 54.768749,15.08125 2.910417,-1.852083 -0.264583,-3.9687504 -3.704167,2.1166664 v 2.38125 z"
				id="path20874"
			/><path
				style="fill:#a4a163;fill-opacity:1;fill-rule:evenodd;stroke-width:3;stroke-linecap:round;stroke-linejoin:round;stroke-miterlimit:3;stroke-opacity:0.498674;paint-order:stroke fill markers"
				d="m 45.243749,28.310416 4.233334,-2.645833 0.264583,3.96875 -1.852083,1.322917 z"
				id="path20876"
			/><path
				style="fill:#a4a163;fill-opacity:1;fill-rule:evenodd;stroke-width:3;stroke-linecap:round;stroke-linejoin:round;stroke-miterlimit:3;stroke-opacity:0.498674;paint-order:stroke fill markers"
				d="m 41.804166,40.745833 h 2.910417 v -5.291667 h -3.175 l -3.175,-1.058333 v 3.175 z"
				id="path20878"
			/><path
				style="fill:#641e1f;fill-opacity:1;fill-rule:evenodd;stroke-width:3;stroke-linecap:round;stroke-linejoin:round;stroke-miterlimit:3;stroke-opacity:0.498674;paint-order:stroke fill markers"
				d="M 31.220833,75.670832 H 33.3375 l 3.175,-3.175 v -1.058333 l -0.79375,-0.212685 v -1.110232 l -4.233334,4.233334 z"
				id="path20880"
			/><path
				style="fill:#a5a264;fill-opacity:1;fill-rule:evenodd;stroke-width:3;stroke-linecap:round;stroke-linejoin:round;stroke-miterlimit:3;stroke-opacity:0.498674;paint-order:stroke fill markers"
				d="m 9.7895832,81.227082 -2.6458333,2.38125 v 6.614584 l 2.6458333,-4.7625 z"
				id="path20882"
			/><path
				style="fill:#5c6d65;fill-opacity:1;fill-rule:evenodd;stroke:none;stroke-width:1.2;stroke-linecap:round;stroke-linejoin:round;stroke-miterlimit:3;stroke-dasharray:none;stroke-opacity:1;paint-order:stroke fill markers"
				d="m 20.108333,85.195832 v 1.852084 h -3.704167 v -2.645834 z"
				id="path20884"
			/><path
				style="fill:#a5a264;fill-opacity:1;fill-rule:evenodd;stroke-width:3;stroke-linecap:round;stroke-linejoin:round;stroke-miterlimit:3;stroke-opacity:0.498674;paint-order:stroke fill markers"
				d="m 16.66875,82.285416 v 4.7625 l -1.322917,2.645833 -2.38125,-4.497917 z"
				id="path20886"
			/><path
				style="fill:#a5a264;fill-opacity:1;fill-rule:evenodd;stroke-width:3;stroke-linecap:round;stroke-linejoin:round;stroke-miterlimit:3;stroke-opacity:0.498674;paint-order:stroke fill markers"
				d="m 30.691666,79.904166 v 7.9375 l -7.14375,-3.96875 4.233334,-4.233334 h 2.910416 z"
				id="path20888"
			/><path
				style="fill:#3c4e60;fill-opacity:1;fill-rule:evenodd;stroke-width:3;stroke-linecap:round;stroke-linejoin:round;stroke-miterlimit:3;stroke-opacity:0.498674;paint-order:stroke fill markers"
				d="m 27.78125,107.68542 h -4.233333 l -5.55625,0.52916 h -5.820834 l -4.7624997,0.79375 v 1.85209 l 0.2645834,2.11666 2.1166666,1.05834 5.2916667,2.38125 H 15.875 l 6.614583,1.85208 c 4.517744,0.80898 9.644997,0.79173 11.641667,-0.52917 l 0.529167,-9.525 -3.175001,-0.79375 z"
				id="path20890"
			/><path
				style="opacity:1;fill:#5c6d65;fill-opacity:1;fill-rule:evenodd;stroke:none;stroke-width:1.2;stroke-linecap:round;stroke-linejoin:round;stroke-miterlimit:3;stroke-dasharray:none;stroke-opacity:1;paint-order:stroke fill markers"
				d="m 94.191665,110.06667 h 9.789585 l -0.49626,-1.85209 c 2.23839,-2.20416 1.2863,-3.7187 1.81918,-5.55625 V 68.262499 C 104.23736,64.045641 101.6275,60.527855 92.868749,59.795833 92.425653,46.230036 93.358456,31.518967 78.316666,24.60625 c -4.31652,-1.286378 -8.775321,-2.294988 -15.875,1.852083 -4.28906,4.023514 -5.053671,10.31768 -4.497917,17.4625 v 14.022916 c 0.581501,0.703286 0.909414,1.582218 2.116667,1.852084 -1.324978,0.688133 -2.135394,1.683797 -2.116667,3.175 v 6.085416 h 6.085417 c 0.0911,-2.878489 1.653784,-5.108777 2.910416,-7.408333 -1.061105,-1.842627 -1.326124,-3.686474 -1.322915,-6.085416 0.75301,-5.054969 3.829446,-8.352518 7.672915,-11.377084 h 7.14375 c 2.281162,1.23613 4.211837,2.999602 5.55625,5.55625 1.456786,4.796033 2.487859,9.620456 3.175001,14.552084 7.515117,-0.889695 8.48605,2.365581 11.906247,3.968749 v 17.4625 c -0.42363,3.552321 -0.65885,6.956965 -1.852081,11.1125 V 104.775 c -1.359929,1.54274 -2.419074,3.3407 -4.233334,4.49792 z"
				id="path20892"
			/><path
				style="fill:#641e1f;fill-opacity:1;fill-rule:evenodd;stroke-width:3;stroke-linecap:round;stroke-linejoin:round;stroke-miterlimit:3;stroke-opacity:0.498674;paint-order:stroke fill markers"
				d="m 107.15625,109.80208 -7.937501,-5.02708 -1.322916,1.5875 4.233337,4.49792 4.49791,1.32291 z"
				id="path20894"
			/><path
				style="fill:#a4a163;fill-opacity:1;fill-rule:evenodd;stroke-width:3;stroke-linecap:round;stroke-linejoin:round;stroke-miterlimit:3;stroke-opacity:0.498674;paint-order:stroke fill markers"
				d="M 43.127083,49.477083 V 45.243749 L 36.5125,42.333333 v 1.852083 l 3.968749,5.55625 z"
				id="path20896"
			/><path
				style="fill:#893937;fill-opacity:1;fill-rule:evenodd;stroke:none;stroke-width:1.2;stroke-linecap:round;stroke-linejoin:round;stroke-miterlimit:3;stroke-dasharray:none;stroke-opacity:1;paint-order:stroke fill markers"
				d="m 76.464583,15.610417 -1.058333,0.529166 -2.645834,-5.820833 2.38125,2.910417 z"
				id="path20898"
			/><path
				style="fill:#641e1f;fill-opacity:1;fill-rule:evenodd;stroke:none;stroke-width:1.2;stroke-linecap:round;stroke-linejoin:round;stroke-miterlimit:3;stroke-dasharray:none;stroke-opacity:1;paint-order:stroke fill markers"
				d="m 74.877083,13.229167 5.027083,-1.322917 1.058333,1.322917 -4.497917,1.058333 1e-6,1.058333 -0.793751,0.264583 z"
				id="path20900"
			/><path
				style="fill:#a5a264;fill-opacity:1;fill-rule:evenodd;stroke:none;stroke-width:1.2;stroke-linecap:round;stroke-linejoin:round;stroke-miterlimit:3;stroke-dasharray:none;stroke-opacity:1;paint-order:stroke fill markers"
				d="m 41.804166,96.572915 -2.910416,3.175 h -5.820834 v -1.5875 l 5.291667,-5.027083 z"
				id="path20902"
			/><path
				style="fill:#a5a264;fill-opacity:1;fill-rule:evenodd;stroke:none;stroke-width:1.2;stroke-linecap:round;stroke-linejoin:round;stroke-miterlimit:3;stroke-dasharray:none;stroke-opacity:1;paint-order:stroke fill markers"
				d="m 26.9875,109.5375 v -8.46667 h 1.5875 l 5.291666,5.29167 -3.175,3.175 z"
				id="path20904"
			/><path
				style="fill:#a5a264;fill-opacity:1;fill-rule:evenodd;stroke:none;stroke-width:1.2;stroke-linecap:round;stroke-linejoin:round;stroke-miterlimit:3;stroke-dasharray:none;stroke-opacity:1;paint-order:stroke fill markers"
				d="m 17.991666,110.06667 v -5.82084 H 20.6375 L 24.341666,107.95 22.225,110.06667 Z"
				id="path20906"
			/><path
				style="fill:#a5a264;fill-opacity:1;fill-rule:evenodd;stroke:none;stroke-width:1.2;stroke-linecap:round;stroke-linejoin:round;stroke-miterlimit:3;stroke-dasharray:none;stroke-opacity:1;paint-order:stroke fill markers"
				d="m 7.4083332,109.00833 2.1166667,2.11667 h 2.9104171 l 1.527572,-2.64583 -4.1734058,-4.49792 h -2.38125 z"
				id="path20908"
			/><path
				style="fill:#a5a264;fill-opacity:1;fill-rule:evenodd;stroke:none;stroke-width:1.2;stroke-linecap:round;stroke-linejoin:round;stroke-miterlimit:3;stroke-dasharray:none;stroke-opacity:1;paint-order:stroke fill markers"
				d="m 46.83125,106.62708 h 2.38125 c 0.09113,2.12516 -0.714825,4.24171 -2.38125,6.35 z"
				id="path20910"
			/><path
				style="fill:#a5a264;fill-opacity:1;fill-rule:evenodd;stroke:none;stroke-width:1.2;stroke-linecap:round;stroke-linejoin:round;stroke-miterlimit:3;stroke-dasharray:none;stroke-opacity:1;paint-order:stroke fill markers"
				d="m 42.333333,117.07812 1.852083,-0.79375 0.79375,-3.43958 h -2.116667 z"
				id="path20912"
			/><path
				style="fill:#a5a264;fill-opacity:1;fill-rule:evenodd;stroke:none;stroke-width:1.2;stroke-linecap:round;stroke-linejoin:round;stroke-miterlimit:3;stroke-dasharray:none;stroke-opacity:1;paint-order:stroke fill markers"
				d="m 31.485416,119.32708 2.910417,-5.29166 h 5.027083 l -0.264583,2.64583 -4.7625,2.64583 z"
				id="path20914"
			/><path
				style="fill:#a5a264;fill-opacity:1;fill-rule:evenodd;stroke:none;stroke-width:1.2;stroke-linecap:round;stroke-linejoin:round;stroke-miterlimit:3;stroke-dasharray:none;stroke-opacity:1;paint-order:stroke fill markers"
				d="m 23.8125,118.66562 3.175,0.26459 2.116666,-2.38125 -2.116666,-1.85209 z"
				id="path20916"
			/><path
				style="fill:#a5a264;fill-opacity:1;fill-rule:evenodd;stroke:none;stroke-width:1.2;stroke-linecap:round;stroke-linejoin:round;stroke-miterlimit:3;stroke-dasharray:none;stroke-opacity:1;paint-order:stroke fill markers"
				d="m 14.2875,118.00417 5.55625,-1.32292 v -2.64583 h -3.704167 z"
				id="path20918"
			/><path
				style="opacity:1;fill:#641e1f;fill-opacity:1;fill-rule:evenodd;stroke-width:1.2;stroke-linecap:round;stroke-linejoin:round;stroke-miterlimit:3;paint-order:stroke fill markers"
				d="m 54.768749,50.006249 h 1.322917 l 0.529167,-5.027083 4.233333,-3.439583 v -3.704167 l 0.79375,-2.645833 -3.439583,1.852083 0.264583,3.175 -3.439583,2.645833 z"
				id="path20920"
			/></g
		><g id="g20816"
			><path
				style="fill:#5c6d65;fill-opacity:1;fill-rule:evenodd;stroke-width:3;stroke-linecap:round;stroke-linejoin:round;stroke-miterlimit:3;stroke-opacity:0.498674;paint-order:stroke fill markers;opacity:1"
				d="m 84.666667,115.8875 3.174999,3.96875 h 19.314584 c 10.47713,-2.62616 11.86873,-8.18295 14.02292,-13.49375 V 39.952083 C 120.865,35.385657 120.32221,30.920264 111.38958,30.1625 H 99.218749 c -2.097781,-0.809898 -3.25117,-2.446659 -4.233334,-4.233334 -0.03258,-3.045319 -0.05879,-6.09274 -1.322916,-8.73125 C 89.816128,12.585193 85.868473,8.0259914 76.464582,6.3499999 H 65.352083 C 58.618782,7.4797118 51.55564,8.0515314 48.154166,14.816666 v 8.202084 c -2.055868,0.845143 -3.318252,2.497179 -4.497917,4.233333 -6.289958,0.171352 -12.316535,0.704778 -12.699999,8.995833 0.608801,5.917429 0.714265,11.342161 4.233333,20.108333 v 10.054167 c -1.127634,1.276646 -1.95724,2.786666 -4.7625,2.749629 h -2.910417 c -2.266749,3.062994 -3.737974,6.168323 -7.408333,9.156621 l -0.529167,1.852083 -1.058333,-2.116667 c -1.389087,1.119054 -2.521064,2.136972 -3.704167,3.175 -1.365518,-0.730207 -3.40822,-1.43314 -5.0270827,-2.116666 v 6.879166 h 7.9374997 l 6.085417,-2.116666 4.233333,-3.96875 h 5.820833 c 2.657762,-3.929612 5.415459,-7.831599 11.377083,-10.847917 h 18.785417 c 0.06961,-2.86697 1.351748,-5.198688 2.910416,-7.408333 -0.925201,-1.419954 -1.968591,-2.864867 -2.116666,-6.085417 0.382023,-6.217809 4.883418,-8.341148 8.466666,-11.377083 h 7.14375 c 3.127514,1.276614 4.323201,3.424861 5.55625,5.55625 1.463833,4.740384 2.530448,9.61886 3.439584,14.552083 4.553414,-1.220363 8.189406,1.026956 11.641664,3.96875 v 17.4625 c -0.41698,3.63319 -0.71648,7.224771 -1.852081,11.1125 V 104.775 c -1.283886,1.48304 -1.97219,2.88995 -4.233334,4.49792 l -0.79375,0.79375 H 87.3125 Z"
				id="path3020"
			/><path
				style="fill:#a4a163;fill-opacity:1;fill-rule:evenodd;stroke-width:3;stroke-linecap:round;stroke-linejoin:round;stroke-miterlimit:3;stroke-opacity:0.498674;paint-order:stroke fill markers"
				d="m 40.481249,58.737499 h 2.38125 l -0.264583,-1.852083 0.529167,-1.058333 v -1.5875 L 41.274999,53.181249 38.1,52.916666 v 2.645833 z"
				id="path16255"
			/><path
				style="fill:#611d1d;fill-opacity:1;fill-rule:evenodd;stroke-width:3;stroke-linecap:round;stroke-linejoin:round;stroke-miterlimit:3;stroke-opacity:0.498674;paint-order:stroke fill markers"
				d="m 54.239583,120.38542 c 0.607585,-5.07524 2.808519,-8.87255 9.260416,-9.26042 v 9.26042 z"
				id="path1032"
			/><path
				style="fill:#576760;fill-opacity:1;fill-rule:evenodd;stroke-width:3;stroke-linecap:round;stroke-linejoin:round;stroke-miterlimit:3;stroke-opacity:0.498674;paint-order:stroke fill markers"
				d="m 74.083332,120.38542 7.9375,-2.64584 -3.96875,-3.96875 v -5.29166 l -10.583333,1.32291 -1.322917,3.96875 z"
				id="path1132"
			/><path
				style="fill:#611d1d;fill-opacity:1;fill-rule:evenodd;stroke-width:3;stroke-linecap:round;stroke-linejoin:round;stroke-miterlimit:3;stroke-opacity:0.498674;paint-order:stroke fill markers"
				d="M 74.083332,120.38542 V 111.125 h -5.291666 l -2.645834,2.64583 10e-7,6.61459 z"
				id="path1130"
			/><path
				style="fill:#a4a163;fill-opacity:1;fill-rule:evenodd;stroke-width:3;stroke-linecap:round;stroke-linejoin:round;stroke-miterlimit:3;stroke-opacity:0.498674;paint-order:stroke fill markers"
				d="m 80.697916,110.06667 h 6.879166 l -2.645832,6.08541 -3.968751,-3.43958 z"
				id="path2694"
			/><path
				style="fill:#596a63;fill-opacity:1;fill-rule:evenodd;stroke-width:3;stroke-linecap:round;stroke-linejoin:round;stroke-miterlimit:3;stroke-opacity:0.498674;paint-order:stroke fill markers"
				d="m 89.164582,107.95 -9.789583,-1.32292 5.291667,-5.55625 v -6.349998 l -2.645834,-7.408333 1.322917,-1.322917 h 8.995833 l 3.666175,-2.116666 v -5.820834 l -1.020342,-1.767281 v -2.730635 c -0.49601,-0.919631 -1.436254,-1.045178 -2.291357,-1.322917 h -2.471142 c -0.41347,-0.01268 -0.744298,0.472272 -1.058334,1.058333 l -0.42537,1.5875 -0.79375,0.79375 0.689954,0.689954 h 3.96875 v 5.395463 h -7.937499 v -9.525 c 0.836359,-2.008425 2.01084,-4.023567 4.233332,-4.7625 h 6.879166 c 1.750877,0.913985 2.091853,2.760183 2.596873,4.497917 v 21.960416 c -2.010874,0.986746 -2.767917,4.927177 -3.919789,7.937498 -1.344828,2.06176 -3.002444,4.09867 -5.291667,6.08542 z"
				id="path3352"
			/><path
				style="fill:#596a63;fill-opacity:1;fill-rule:evenodd;stroke-width:3;stroke-linecap:round;stroke-linejoin:round;stroke-miterlimit:3;stroke-opacity:0.498674;paint-order:stroke fill markers"
				d="m 75.670832,86.783332 c 3.159492,-0.117096 5.290996,-1.650808 6.085417,-5.027083 V 71.172916 l 4.233333,-4.233334 C 85.870191,55.987782 84.745509,54.44078 83.872916,50.535416 82.924846,48.755485 82.187087,46.834839 79.374999,46.302083 h -3.96875 c -3.433419,0.452895 -4.628439,2.342271 -5.820833,4.233333 -2.097745,2.734842 -1.399978,5.233539 0,7.672917 0.850496,1.343837 1.29388,2.803289 3.704166,3.704166 h 5.55625 c 0,0 0.264584,-8.73125 0,-8.73125 h -3.704166 v 2.116667 h 1.058333 v 1.322917 c -0.199917,0.343619 -0.536527,0.671419 -1.5875,0.916543 l -1.5875,-0.425368 -0.264582,-2.078675 C 71.821551,51.895492 73.633721,52.111551 74.083333,50.8 H 79.375 c 2.006356,0.971299 1.410634,2.205093 1.680328,3.174999 0.557129,1.724436 0.942123,3.413214 0.965505,5.027084 0.07348,1.371005 -0.312218,2.777807 -1.322919,4.233333 -2.332784,0.450526 -4.313149,1.502808 -6.085417,2.910416 v 15.875 c 0,0 1.058333,4.497917 1.058333,4.7625 z"
				id="path4806"
			/><path
				style="fill:#3c4e60;fill-opacity:1;fill-rule:evenodd;stroke-width:3.85714;stroke-linecap:round;stroke-linejoin:round;stroke-miterlimit:3;stroke-opacity:0.498674;paint-order:stroke fill markers"
				d="m 77.296198,87.3125 c 5.379297,3.269065 6.539943,7.486798 6.803571,11.906248 C 79.758785,98.58437 77.250576,95.002198 77.296198,87.3125 Z"
				id="path4927"
			/><path
				style="fill:#3c4e60;fill-opacity:1;fill-rule:evenodd;stroke-width:3;stroke-linecap:round;stroke-linejoin:round;stroke-miterlimit:3;stroke-opacity:0.498674;paint-order:stroke fill markers"
				d="m 34.13125,117.73958 c 5.72471,0.56856 4.469355,-0.33171 9.524999,-1.32291 4.523595,-4.48469 7.383342,-9.36371 10.054167,-14.2875 0.440132,-2.568311 0.827717,-5.135029 0.264583,-7.672921 1.446781,-1.954578 2.781877,-4.010308 5.55625,-4.7625 h 5.55625 c 3.761625,0.143755 3.714275,-0.89142 4.7625,-1.5875 0.574205,-3.281196 1.280213,-6.435608 3.704167,-7.9375 V 66.145832 h -6.35 c -1.230121,1.406035 -1.762478,3.05345 -2.116667,4.7625 H 52.652083 c -0.720088,0.714056 -1.29861,1.444448 -2.38125,2.116667 -3.854365,0.885269 -9.137746,-1.246126 -11.377083,3.048482 v 17.059851 7.672918 c -1.521651,2.06164 -3.578028,3.55007 -6.879167,3.70417 z"
				id="path4983"
			/><path
				style="fill:#632222;fill-opacity:1;fill-rule:evenodd;stroke-width:3;stroke-linecap:round;stroke-linejoin:round;stroke-miterlimit:3;stroke-opacity:0.498674;paint-order:stroke fill markers"
				d="m 74.612499,82.020832 -0.79375,1.058334 c -1.470281,-0.244677 -1.661544,1.041777 -1.5875,2.645833 0.07263,1.772469 0.470182,3.404706 2.116667,4.497917 0.314613,-1.221598 0.24157,-2.673505 1.322916,-3.439584 z"
				id="path6491"
			/><path
				style="fill:#a4a163;fill-opacity:1;fill-rule:evenodd;stroke-width:3;stroke-linecap:round;stroke-linejoin:round;stroke-miterlimit:3;stroke-opacity:0.498674;paint-order:stroke fill markers"
				d="m 92.339582,114.03542 h 2.38125 l 0.264583,5.02708 -2.116666,-0.79375 z"
				id="path14183"
			/><path
				style="fill:#a4a163;fill-opacity:1;fill-rule:evenodd;stroke-width:3;stroke-linecap:round;stroke-linejoin:round;stroke-miterlimit:3;stroke-opacity:0.498674;paint-order:stroke fill markers"
				d="m 102.12917,110.86042 h 3.43958 l 1.5875,-1.05834 2.64583,2.38125 -2.38125,2.64584 -6.35,-1.5875 z"
				id="path14722"
			/><path
				style="fill:#a4a163;fill-opacity:1;fill-rule:evenodd;stroke-width:3;stroke-linecap:round;stroke-linejoin:round;stroke-miterlimit:3;stroke-opacity:0.498674;paint-order:stroke fill markers"
				d="m 115.35833,98.160415 h 3.175 l 1.32292,1.322917 v 3.439588 l -1.32292,0.79375 -3.43958,-2.11667 z"
				id="path14724"
			/><path
				style="fill:#a4a163;fill-opacity:1;fill-rule:evenodd;stroke-width:3;stroke-linecap:round;stroke-linejoin:round;stroke-miterlimit:3;stroke-opacity:0.498674;paint-order:stroke fill markers"
				d="m 116.15208,91.545832 h 4.23334 l -1.85209,-3.175 z"
				id="path14726"
			/><path
				style="fill:#a4a163;fill-opacity:1;fill-rule:evenodd;stroke-width:3;stroke-linecap:round;stroke-linejoin:round;stroke-miterlimit:3;stroke-opacity:0.498674;paint-order:stroke fill markers"
				d="m 118.26875,81.756249 -0.26458,-5.820833 1.85208,0.264583 v 5.55625 z"
				id="path14728"
			/><path
				style="fill:#a4a163;fill-opacity:1;fill-rule:evenodd;stroke-width:3;stroke-linecap:round;stroke-linejoin:round;stroke-miterlimit:3;stroke-opacity:0.498674;paint-order:stroke fill markers"
				d="m 116.94583,60.060416 2.91042,0.264583 -1.32292,1.5875 -1.32291,-0.264583 z"
				id="path14730"
			/><path
				style="fill:#a4a163;fill-opacity:1;fill-rule:evenodd;stroke-width:3;stroke-linecap:round;stroke-linejoin:round;stroke-miterlimit:3;stroke-opacity:0.498674;paint-order:stroke fill markers"
				d="m 117.475,50.270833 3.43958,3.175 -4.23333,1.322916 z"
				id="path14732"
			/><path
				style="fill:#641e1f;fill-opacity:1;fill-rule:evenodd;stroke-width:3.31662;stroke-linecap:round;stroke-linejoin:round;stroke-miterlimit:3;stroke-opacity:0.498674;paint-order:stroke fill markers"
				d="m 121.17917,73.81875 v -5.291667 l -5.82084,5.291667 z"
				id="path16115"
			/><path
				style="fill:#641e1f;fill-opacity:1;fill-rule:evenodd;stroke-width:3;stroke-linecap:round;stroke-linejoin:round;stroke-miterlimit:3;stroke-opacity:0.498674;paint-order:stroke fill markers"
				d="m 121.17917,44.185416 -3.43959,0.793751 -6.87916,-0.793751 6.87407,3.96875 z"
				id="path16119"
			/><path
				style="fill:#641e1f;fill-opacity:1;fill-rule:evenodd;stroke-width:3;stroke-linecap:round;stroke-linejoin:round;stroke-miterlimit:3;stroke-opacity:0.498674;paint-order:stroke fill markers"
				d="m 48.154166,19.84375 h 6.614583 c 2.759491,1.044924 2.100257,2.756619 2.645834,4.233333 -1.001273,-0.961711 -1.814756,-2.072977 -3.96875,-2.116667 h -5.291667 z"
				id="path16121"
			/><path
				style="fill:#a4a163;fill-opacity:1;fill-rule:evenodd;stroke-width:3;stroke-linecap:round;stroke-linejoin:round;stroke-miterlimit:3;stroke-opacity:0.498674;paint-order:stroke fill markers"
				d="m 107.95,41.804166 4.23333,-4.497916 2.91042,2.38125 -1.85208,2.381249 z"
				id="path16125"
			/><path
				style="fill:#a4a163;fill-opacity:1;fill-rule:evenodd;stroke-width:3;stroke-linecap:round;stroke-linejoin:round;stroke-miterlimit:3;stroke-opacity:0.498674;paint-order:stroke fill markers"
				d="m 100.27708,37.835416 6.87917,-0.264583 -0.26458,-5.820833 -6.61459,2.116666 z"
				id="path16235"
			/><path
				style="fill:#a4a163;fill-opacity:1;fill-rule:evenodd;stroke-width:3;stroke-linecap:round;stroke-linejoin:round;stroke-miterlimit:3;stroke-opacity:0.498674;paint-order:stroke fill markers"
				d="m 92.868749,29.633333 3.175,0.264583 1.322916,1.322917 -2.645833,3.175 h -1.322917 z"
				id="path16237"
			/><path
				style="fill:#a4a163;fill-opacity:1;fill-rule:evenodd;stroke-width:3;stroke-linecap:round;stroke-linejoin:round;stroke-miterlimit:3;stroke-opacity:0.498674;paint-order:stroke fill markers"
				d="m 93.662499,22.754166 -2.910417,3.704167 -2.38125,-2.910417 z"
				id="path16239"
			/><path
				style="fill:#a4a163;fill-opacity:1;fill-rule:evenodd;stroke-width:3;stroke-linecap:round;stroke-linejoin:round;stroke-miterlimit:3;stroke-opacity:0.498674;paint-order:stroke fill markers"
				d="m 88.106249,14.2875 h -4.233333 l -2.910417,2.38125 5.55625,4.7625 1.322917,-3.96875 z"
				id="path16241"
			/><path
				style="fill:#641e1f;fill-opacity:1;fill-rule:evenodd;stroke-width:3;stroke-linecap:round;stroke-linejoin:round;stroke-miterlimit:3;stroke-opacity:0.498674;paint-order:stroke fill markers"
				d="m 75.141666,13.229167 h 5.820833 l -4.497916,2.38125 z"
				id="path16243"
			/><path
				style="fill:#a4a163;fill-opacity:1;fill-rule:evenodd;stroke-width:3;stroke-linecap:round;stroke-linejoin:round;stroke-miterlimit:3;stroke-opacity:0.498674;paint-order:stroke fill markers"
				d="m 64.822916,12.7 h 4.497916 l -0.264583,-3.1750001 -1.5875,-2.38125 -2.910416,1.8520833 z"
				id="path16245"
			/><path
				style="fill:#a4a163;fill-opacity:1;fill-rule:evenodd;stroke-width:3;stroke-linecap:round;stroke-linejoin:round;stroke-miterlimit:3;stroke-opacity:0.498674;paint-order:stroke fill markers"
				d="m 54.768749,15.08125 2.910417,-1.852083 -0.264583,-3.9687504 -3.704167,2.1166664 v 2.38125 z"
				id="path16247"
			/><path
				style="fill:#a4a163;fill-opacity:1;fill-rule:evenodd;stroke-width:3;stroke-linecap:round;stroke-linejoin:round;stroke-miterlimit:3;stroke-opacity:0.498674;paint-order:stroke fill markers"
				d="m 45.243749,28.310416 4.233334,-2.645833 0.264583,3.96875 -1.852083,1.322917 z"
				id="path16249"
			/><path
				style="fill:#a4a163;fill-opacity:1;fill-rule:evenodd;stroke-width:3;stroke-linecap:round;stroke-linejoin:round;stroke-miterlimit:3;stroke-opacity:0.498674;paint-order:stroke fill markers"
				d="m 41.804166,40.745833 h 2.910417 v -5.291667 h -3.175 l -3.175,-1.058333 v 3.175 z"
				id="path16251"
			/><path
				style="fill:#641e1f;fill-opacity:1;fill-rule:evenodd;stroke-width:3;stroke-linecap:round;stroke-linejoin:round;stroke-miterlimit:3;stroke-opacity:0.498674;paint-order:stroke fill markers"
				d="M 31.220833,75.670832 H 33.3375 l 3.175,-3.175 v -1.058333 l -0.79375,-0.212685 v -1.110232 l -4.233334,4.233334 z"
				id="path16259"
			/><path
				style="fill:#a5a264;fill-opacity:1;fill-rule:evenodd;stroke-width:3;stroke-linecap:round;stroke-linejoin:round;stroke-miterlimit:3;stroke-opacity:0.498674;paint-order:stroke fill markers"
				d="m 9.7895832,81.227082 -2.6458333,2.38125 v 6.614584 l 2.6458333,-4.7625 z"
				id="path17841"
			/><path
				style="fill:#5c6d65;fill-opacity:1;fill-rule:evenodd;stroke:none;stroke-width:1.2;stroke-linecap:round;stroke-linejoin:round;stroke-miterlimit:3;stroke-dasharray:none;stroke-opacity:1;paint-order:stroke fill markers"
				d="m 20.108333,85.195832 v 1.852084 h -3.704167 v -2.645834 z"
				id="path94965"
			/><path
				style="fill:#a5a264;fill-opacity:1;fill-rule:evenodd;stroke-width:3;stroke-linecap:round;stroke-linejoin:round;stroke-miterlimit:3;stroke-opacity:0.498674;paint-order:stroke fill markers"
				d="m 16.66875,82.285416 v 4.7625 l -1.322917,2.645833 -2.38125,-4.497917 z"
				id="path17843"
			/><path
				style="fill:#a5a264;fill-opacity:1;fill-rule:evenodd;stroke-width:3;stroke-linecap:round;stroke-linejoin:round;stroke-miterlimit:3;stroke-opacity:0.498674;paint-order:stroke fill markers"
				d="m 30.691666,79.904166 v 7.9375 l -7.14375,-3.96875 4.233334,-4.233334 h 2.910416 z"
				id="path17845"
			/><path
				style="fill:#3c4e60;fill-opacity:1;fill-rule:evenodd;stroke-width:3;stroke-linecap:round;stroke-linejoin:round;stroke-miterlimit:3;stroke-opacity:0.498674;paint-order:stroke fill markers"
				d="m 27.78125,107.68542 h -4.233333 l -5.55625,0.52916 h -5.820834 l -4.7624997,0.79375 v 1.85209 l 0.2645834,2.11666 2.1166666,1.05834 5.2916667,2.38125 H 15.875 l 6.614583,1.85208 c 4.517744,0.80898 9.644997,0.79173 11.641667,-0.52917 l 0.529167,-9.525 -3.175001,-0.79375 z"
				id="path22731"
			/><path
				style="fill:#5c6d65;fill-opacity:1;fill-rule:evenodd;stroke:none;stroke-width:1.2;stroke-linecap:round;stroke-linejoin:round;stroke-miterlimit:3;stroke-dasharray:none;stroke-opacity:1;paint-order:stroke fill markers;opacity:1"
				d="m 94.191665,110.06667 h 9.789585 l -0.49626,-1.85209 c 2.23839,-2.20416 1.2863,-3.7187 1.81918,-5.55625 V 68.262499 C 104.23736,64.045641 101.6275,60.527855 92.868749,59.795833 92.425653,46.230036 93.358456,31.518967 78.316666,24.60625 c -4.31652,-1.286378 -8.775321,-2.294988 -15.875,1.852083 -4.28906,4.023514 -5.053671,10.31768 -4.497917,17.4625 v 14.022916 c 0.581501,0.703286 0.909414,1.582218 2.116667,1.852084 -1.324978,0.688133 -2.135394,1.683797 -2.116667,3.175 v 6.085416 h 6.085417 c 0.0911,-2.878489 1.653784,-5.108777 2.910416,-7.408333 -1.061105,-1.842627 -1.326124,-3.686474 -1.322915,-6.085416 0.75301,-5.054969 3.829446,-8.352518 7.672915,-11.377084 h 7.14375 c 2.281162,1.23613 4.211837,2.999602 5.55625,5.55625 1.456786,4.796033 2.487859,9.620456 3.175001,14.552084 7.515117,-0.889695 8.48605,2.365581 11.906247,3.968749 v 17.4625 c -0.42363,3.552321 -0.65885,6.956965 -1.852081,11.1125 V 104.775 c -1.359929,1.54274 -2.419074,3.3407 -4.233334,4.49792 z"
				id="path89781"
			/><path
				style="fill:#641e1f;fill-opacity:1;fill-rule:evenodd;stroke-width:3;stroke-linecap:round;stroke-linejoin:round;stroke-miterlimit:3;stroke-opacity:0.498674;paint-order:stroke fill markers"
				d="m 107.15625,109.80208 -7.937501,-5.02708 -1.322916,1.5875 4.233337,4.49792 4.49791,1.32291 z"
				id="path15982"
			/><path
				style="fill:#a4a163;fill-opacity:1;fill-rule:evenodd;stroke-width:3;stroke-linecap:round;stroke-linejoin:round;stroke-miterlimit:3;stroke-opacity:0.498674;paint-order:stroke fill markers"
				d="M 43.127083,49.477083 V 45.243749 L 36.5125,42.333333 v 1.852083 l 3.968749,5.55625 z"
				id="path16253"
			/><path
				style="fill:#641e1f;fill-opacity:1;fill-rule:evenodd;stroke:none;stroke-width:1.2;stroke-linecap:round;stroke-linejoin:round;stroke-miterlimit:3;stroke-dasharray:none;stroke-opacity:1;paint-order:stroke fill markers"
				d="m 76.464583,15.610417 -1.058333,0.529166 -2.645834,-5.820833 2.38125,2.910417 z"
				id="path92022"
			/><path
				style="fill:#641e1f;fill-opacity:1;fill-rule:evenodd;stroke:none;stroke-width:1.2;stroke-linecap:round;stroke-linejoin:round;stroke-miterlimit:3;stroke-dasharray:none;stroke-opacity:1;paint-order:stroke fill markers"
				d="m 74.877083,13.229167 5.027083,-1.322917 1.058333,1.322917 -4.497917,1.058333 1e-6,1.058333 -0.793751,0.264583 z"
				id="path92024"
			/><path
				style="fill:#a5a264;fill-opacity:1;fill-rule:evenodd;stroke:none;stroke-width:1.2;stroke-linecap:round;stroke-linejoin:round;stroke-miterlimit:3;stroke-dasharray:none;stroke-opacity:1;paint-order:stroke fill markers"
				d="m 41.804166,96.572915 -2.910416,3.175 h -5.820834 v -1.5875 l 5.291667,-5.027083 z"
				id="path93338"
			/><path
				style="fill:#a5a264;fill-opacity:1;fill-rule:evenodd;stroke:none;stroke-width:1.2;stroke-linecap:round;stroke-linejoin:round;stroke-miterlimit:3;stroke-dasharray:none;stroke-opacity:1;paint-order:stroke fill markers"
				d="m 26.9875,109.5375 v -8.46667 h 1.5875 l 5.291666,5.29167 -3.175,3.175 z"
				id="path93340"
			/><path
				style="fill:#a5a264;fill-opacity:1;fill-rule:evenodd;stroke:none;stroke-width:1.2;stroke-linecap:round;stroke-linejoin:round;stroke-miterlimit:3;stroke-dasharray:none;stroke-opacity:1;paint-order:stroke fill markers"
				d="m 17.991666,110.06667 v -5.82084 H 20.6375 L 24.341666,107.95 22.225,110.06667 Z"
				id="path93342"
			/><path
				style="fill:#a5a264;fill-opacity:1;fill-rule:evenodd;stroke:none;stroke-width:1.2;stroke-linecap:round;stroke-linejoin:round;stroke-miterlimit:3;stroke-dasharray:none;stroke-opacity:1;paint-order:stroke fill markers"
				d="m 7.4083332,109.00833 2.1166667,2.11667 h 2.9104171 l 1.527572,-2.64583 -4.1734058,-4.49792 h -2.38125 z"
				id="path93344"
			/><path
				style="fill:#a5a264;fill-opacity:1;fill-rule:evenodd;stroke:none;stroke-width:1.2;stroke-linecap:round;stroke-linejoin:round;stroke-miterlimit:3;stroke-dasharray:none;stroke-opacity:1;paint-order:stroke fill markers"
				d="m 46.83125,106.62708 h 2.38125 c 0.09113,2.12516 -0.714825,4.24171 -2.38125,6.35 z"
				id="path93346"
			/><path
				style="fill:#a5a264;fill-opacity:1;fill-rule:evenodd;stroke:none;stroke-width:1.2;stroke-linecap:round;stroke-linejoin:round;stroke-miterlimit:3;stroke-dasharray:none;stroke-opacity:1;paint-order:stroke fill markers"
				d="m 42.333333,117.07812 1.852083,-0.79375 0.79375,-3.43958 h -2.116667 z"
				id="path93348"
			/><path
				style="fill:#a5a264;fill-opacity:1;fill-rule:evenodd;stroke:none;stroke-width:1.2;stroke-linecap:round;stroke-linejoin:round;stroke-miterlimit:3;stroke-dasharray:none;stroke-opacity:1;paint-order:stroke fill markers"
				d="m 31.485416,119.32708 2.910417,-5.29166 h 5.027083 l -0.264583,2.64583 -4.7625,2.64583 z"
				id="path93350"
			/><path
				style="fill:#a5a264;fill-opacity:1;fill-rule:evenodd;stroke:none;stroke-width:1.2;stroke-linecap:round;stroke-linejoin:round;stroke-miterlimit:3;stroke-dasharray:none;stroke-opacity:1;paint-order:stroke fill markers"
				d="m 23.8125,118.66562 3.175,0.26459 2.116666,-2.38125 -2.116666,-1.85209 z"
				id="path93352"
			/><path
				style="fill:#a5a264;fill-opacity:1;fill-rule:evenodd;stroke:none;stroke-width:1.2;stroke-linecap:round;stroke-linejoin:round;stroke-miterlimit:3;stroke-dasharray:none;stroke-opacity:1;paint-order:stroke fill markers"
				d="m 14.2875,118.00417 5.55625,-1.32292 v -2.64583 h -3.704167 z"
				id="path93354"
			/><path
				style="opacity:1;fill:#641e1f;fill-opacity:1;fill-rule:evenodd;stroke-width:1.2;stroke-linecap:round;stroke-linejoin:round;stroke-miterlimit:3;paint-order:stroke fill markers"
				d="m 54.768749,50.006249 h 1.322917 l 0.529167,-5.027083 4.233333,-3.439583 v -3.704167 l 0.79375,-2.645833 -3.439583,1.852083 0.264583,3.175 -3.439583,2.645833 z"
				id="path18768"
			/></g
		></svg
	>
</div>
