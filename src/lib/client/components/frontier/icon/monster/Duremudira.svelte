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
				id="filter122465"
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
					id="feComposite122451"
				/><feColorMatrix
					in="composite1"
					values="1"
					type="saturate"
					result="colormatrix1"
					id="feColorMatrix122453"
				/><feFlood
					flood-opacity="1"
					flood-color="rgb(0,0,0)"
					result="flood1"
					id="feFlood122455"
				/><feBlend
					in="flood1"
					in2="colormatrix1"
					mode="multiply"
					result="blend1"
					id="feBlend122457"
				/><feBlend
					in2="blend1"
					mode="screen"
					result="blend2"
					id="feBlend122459"
				/><feColorMatrix
					in="blend2"
					values="1"
					type="saturate"
					result="colormatrix2"
					id="feColorMatrix122461"
				/><feComposite
					in="colormatrix2"
					in2="SourceGraphic"
					operator="in"
					k2="1"
					result="composite2"
					id="feComposite122463"
				/></filter
			><filter
				style="color-interpolation-filters:sRGB;"
				id="filter20354"
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
					id="feComposite20340"
				/><feColorMatrix
					in="composite1"
					values="1"
					type="saturate"
					result="colormatrix1"
					id="feColorMatrix20342"
				/><feFlood
					flood-opacity="1"
					flood-color="rgb(0,0,0)"
					result="flood1"
					id="feFlood20344"
				/><feBlend
					in="flood1"
					in2="colormatrix1"
					mode="multiply"
					result="blend1"
					id="feBlend20346"
				/><feBlend
					in2="blend1"
					mode="screen"
					result="blend2"
					id="feBlend20348"
				/><feColorMatrix
					in="blend2"
					values="1"
					type="saturate"
					result="colormatrix2"
					id="feColorMatrix20350"
				/><feComposite
					in="colormatrix2"
					in2="SourceGraphic"
					operator="in"
					k2="1"
					result="composite2"
					id="feComposite20352"
				/></filter
			></defs
		><metadata id="metadata11574">
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
			id="g19675"
			style="filter:url(#filter20354)"
			transform="translate(1.0583333,1.5875)"
			><path
				style="fill:#2e3797;fill-opacity:1;fill-rule:evenodd;stroke-width:0.3;stroke-linecap:round;stroke-linejoin:round;stroke-miterlimit:3"
				d="m 55.033333,55.297916 4.7625,2.910417 6.614583,-0.264584 4.7625,-2.645833 3.96875,5.55625 2.116666,-0.79375 2.116667,1.322917 2.38125,-0.79375 v 14.022916 c -1.930165,3.64011 -5.028424,5.369492 -7.9375,7.408333 H 52.387497 c -0.79886,-0.111762 -1.590064,-0.980921 -2.381248,-1.852083 -1.70481,-0.05396 -3.661151,-3.3296 -5.55625,-5.820833 V 60.589583 l 2.38125,0.79375 1.5875,-1.322917 h 0.529167 l 2.116667,0.79375 z"
				id="path103117"
			/><g id="g85159"
				><path
					style="opacity:1;fill:#20212a;fill-opacity:1;fill-rule:evenodd;stroke-width:0.3;stroke-linecap:round;stroke-linejoin:round;stroke-miterlimit:3"
					d="m 5.5562499,120.91458 5.0270831,-4.7625 v -3.175 l -2.3812498,-2.38125 -2.6458333,2.11667 z"
					id="path78901"
				/><path
					style="opacity:1;fill:#20212a;fill-opacity:1;fill-rule:evenodd;stroke-width:0.3;stroke-linecap:round;stroke-linejoin:round;stroke-miterlimit:3"
					d="m 13.493752,120.91458 5.027086,-4.7625 v -3.175 l -2.381251,-2.38125 -2.645835,2.11667 z"
					id="path79095"
				/><path
					style="opacity:1;fill:#20212a;fill-opacity:1;fill-rule:evenodd;stroke-width:0.3;stroke-linecap:round;stroke-linejoin:round;stroke-miterlimit:3"
					d="m 21.431257,120.91458 5.027086,-4.7625 v -3.175 l -2.381251,-2.38125 -2.645835,2.11667 z"
					id="path79097"
				/><path
					style="opacity:1;fill:#20212a;fill-opacity:1;fill-rule:evenodd;stroke-width:0.3;stroke-linecap:round;stroke-linejoin:round;stroke-miterlimit:3"
					d="m 16.404166,107.95 3.175,3.175 4.233334,-2.64583 C 23.87555,96.740909 33.749777,92.631606 44.449999,89.164582 v -9.525 l -4.233333,-5.55625 v -5.55625 L 26.9875,58.472916 l -5.55625,3.96875 -1.852084,1.322917 -3.96875,2.645833 -1.058333,0.79375 -4.7624998,4.233333 c -0.604431,0.273309 -0.7161088,1.716845 -0.2645833,4.497917 2.0620581,4.85136 4.1798081,9.58693 7.6729161,14.2875 l -7.9374994,9.789584 -1.0583334,7.67292 3.9687498,3.43958 3.96875,-3.175 z"
					id="path79101"
				/><path
					style="opacity:1;fill:#3f2980;fill-opacity:1;fill-rule:evenodd;stroke-width:0.3;stroke-linecap:round;stroke-linejoin:round;stroke-miterlimit:3"
					d="m 8.4666666,105.83333 6.0854164,1.32292 0.79375,-1.05833 -6.0854164,-5.82084 z"
					id="path81757"
				/><path
					style="opacity:1;fill:#3f2980;fill-opacity:1;fill-rule:evenodd;stroke-width:0.3;stroke-linecap:round;stroke-linejoin:round;stroke-miterlimit:3"
					d="m 20.6375,106.89167 3.175,1.5875 c -0.06918,-1.43231 0.172088,-2.64882 0.264583,-3.96875 l -3.175,-3.96875 z"
					id="path81890"
				/><path
					style="opacity:1;fill:#3f2980;fill-opacity:1;fill-rule:evenodd;stroke-width:0.3;stroke-linecap:round;stroke-linejoin:round;stroke-miterlimit:3"
					d="m 11.19116,97.63125 3.360923,-4.233333 3.439583,4.233332 z"
					id="path81892"
				/><path
					style="opacity:1;fill:#3f2980;fill-opacity:1;fill-rule:evenodd;stroke-width:0.3;stroke-linecap:round;stroke-linejoin:round;stroke-miterlimit:3"
					d="m 26.19375,99.483332 -0.529167,-8.202083 3.96875,4.7625 z"
					id="path81894"
				/><path
					style="opacity:1;fill:#3f2980;fill-opacity:1;fill-rule:evenodd;stroke-width:0.3;stroke-linecap:round;stroke-linejoin:round;stroke-miterlimit:3"
					d="m 34.13125,93.133332 3.439583,-1.5875 -5.291667,-6.614583 c -0.812521,2.515679 0.584199,5.368718 1.852084,8.202083 z"
					id="path81896"
				/><path
					style="opacity:1;fill:#14151d;fill-opacity:1;fill-rule:evenodd;stroke-width:0.3;stroke-linecap:round;stroke-linejoin:round;stroke-miterlimit:3"
					d="M 8.7312499,104.775 9.2604166,100.0125 10.583333,98.380903 2.9104166,91.810416 Z"
					id="path81904"
				/><path
					style="opacity:1;fill:#14151d;fill-opacity:1;fill-rule:evenodd;stroke-width:0.3;stroke-linecap:round;stroke-linejoin:round;stroke-miterlimit:3"
					d="m 11.641667,97.102083 3.704166,-4.497917 -6.6145831,-5.55625 z"
					id="path82106"
				/><path
					style="opacity:1;fill:#3f2980;fill-opacity:1;fill-rule:evenodd;stroke-width:0.3;stroke-linecap:round;stroke-linejoin:round;stroke-miterlimit:3"
					d="m 44.449999,89.164582 v -4.7625 L 26.9875,58.472916 l -2.38125,1.5875 -2.910417,2.381251 C 26.19314,68.413242 28.962695,76.850683 38.1,76.199999 c 1.319754,4.953166 0.749998,12.015467 6.349999,12.964583 z"
					id="path81898"
				/><path
					style="opacity:1;fill:#a2d2f3;fill-opacity:1;fill-rule:evenodd;stroke-width:0.3;stroke-linecap:round;stroke-linejoin:round;stroke-miterlimit:3"
					d="m 31.485416,72.760416 -11.641666,-21.43125 1.5875,11.1125 z"
					id="path82108"
				/><path
					style="opacity:1;fill:#f6fdfe;fill-opacity:1;fill-rule:evenodd;stroke-width:0.3;stroke-linecap:round;stroke-linejoin:round;stroke-miterlimit:3"
					d="M 25.4,66.410417 26.722916,64.029166 25.4,61.647916 23.8125,64.822917 Z"
					id="path82310"
				/><path
					style="opacity:1;fill:#f6fdfe;fill-opacity:1;fill-rule:evenodd;stroke-width:0.3;stroke-linecap:round;stroke-linejoin:round;stroke-miterlimit:3"
					d="m 20.902083,59.002083 1.852084,-2.38125 -1.322917,-2.38125 -1.058333,0.79375 z"
					id="path82941"
				/><path
					style="opacity:1;fill:#a2d2f3;fill-opacity:1;fill-rule:evenodd;stroke-width:0.3;stroke-linecap:round;stroke-linejoin:round;stroke-miterlimit:3"
					d="M 30.1625,81.756249 19.579166,63.764583 12.7,51.593749 15.610416,66.410416 Z"
					id="path82943"
				/><path
					style="opacity:1;fill:#f6fdfe;fill-opacity:1;fill-rule:evenodd;stroke-width:0.3;stroke-linecap:round;stroke-linejoin:round;stroke-miterlimit:3"
					d="m 15.08125,55.827083 -1.322917,-2.38125 -0.529166,0.79375 0.79375,3.96875 z"
					id="path84714"
				/><path
					style="opacity:1;fill:#f6fdfe;fill-opacity:1;fill-rule:evenodd;stroke-width:0.3;stroke-linecap:round;stroke-linejoin:round;stroke-miterlimit:3"
					d="M 16.404167,67.46875 15.610416,66.410416 15.08125,63.5 17.4625,60.060416 19.05,62.970833 Z"
					id="path84716"
				/><path
					style="opacity:1;fill:#f6fdfe;fill-opacity:1;fill-rule:evenodd;stroke-width:0.3;stroke-linecap:round;stroke-linejoin:round;stroke-miterlimit:3"
					d="m 23.283333,70.114582 -1.5875,-2.645833 -2.116666,3.175001 2.116666,2.116667 z"
					id="path84718"
				/><path
					style="opacity:1;fill:#3f2980;fill-opacity:1;fill-rule:evenodd;stroke-width:0.3;stroke-linecap:round;stroke-linejoin:round;stroke-miterlimit:3"
					d="M 24.60625,89.958332 9.7895832,71.437499 c -0.3934746,0.514262 -0.8517406,0.819462 -0.2645833,4.497917 2.9173711,7.120998 5.3070961,10.984671 7.4083331,14.022916 z"
					id="path81902"
				/><path
					style="opacity:1;fill:#3f2980;fill-opacity:1;fill-rule:evenodd;stroke-width:0.3;stroke-linecap:round;stroke-linejoin:round;stroke-miterlimit:3"
					d="m 15.610416,66.410416 -1.852083,1.322917 8.202083,12.170833 c 3.346471,1.956579 5.880194,2.370015 8.202084,2.38125 -4.577325,-5.580713 -9.211898,-11.100895 -14.552084,-15.875 z"
					id="path81900"
				/><path
					style="opacity:1;fill:#a2d2f3;fill-opacity:1;fill-rule:evenodd;stroke-width:0.3;stroke-linecap:round;stroke-linejoin:round;stroke-miterlimit:3"
					d="m 14.552083,67.468749 7.14375,12.435417 c 1.452689,4.414769 4.50106,7.487807 8.466667,9.789583 -3.662664,0.722339 -7.174926,-2.802631 -10.583334,-9.260417 L 9.7895832,71.437499 4.2333333,51.593749 Z"
					id="path83221"
				/><path
					style="opacity:1;fill:#f6fdfe;fill-opacity:1;fill-rule:evenodd;stroke-width:0.3;stroke-linecap:round;stroke-linejoin:round;stroke-miterlimit:3"
					d="M 8.2020833,65.88125 11.1125,62.177083 9.525,59.795833 7.1437499,62.177083 Z"
					id="path84712"
				/><path
					style="opacity:1;fill:#f6fdfe;fill-opacity:1;fill-rule:evenodd;stroke-width:0.3;stroke-linecap:round;stroke-linejoin:round;stroke-miterlimit:3"
					d="m 18.25625,79.110417 1.5875,-2.381251 -1.852083,-3.174999 -2.38125,3.175 z"
					id="path83949"
				/><path
					style="opacity:1;fill:#f6fdfe;fill-opacity:1;fill-rule:evenodd;stroke-width:0.3;stroke-linecap:round;stroke-linejoin:round;stroke-miterlimit:3"
					d="M 12.435417,73.81875 15.345833,68.791667 14.022917,66.675 9.7895832,71.437499 Z"
					id="path84710"
				/></g
			><g id="g85211" transform="matrix(-1,0,0,1,126.20645,0)"
				><path
					style="opacity:1;fill:#20212a;fill-opacity:1;fill-rule:evenodd;stroke-width:0.3;stroke-linecap:round;stroke-linejoin:round;stroke-miterlimit:3"
					d="m 5.5562499,120.91458 5.0270831,-4.7625 v -3.175 l -2.3812498,-2.38125 -2.6458333,2.11667 z"
					id="path85161"
				/><path
					style="opacity:1;fill:#20212a;fill-opacity:1;fill-rule:evenodd;stroke-width:0.3;stroke-linecap:round;stroke-linejoin:round;stroke-miterlimit:3"
					d="m 13.493752,120.91458 5.027086,-4.7625 v -3.175 l -2.381251,-2.38125 -2.645835,2.11667 z"
					id="path85163"
				/><path
					style="opacity:1;fill:#20212a;fill-opacity:1;fill-rule:evenodd;stroke-width:0.3;stroke-linecap:round;stroke-linejoin:round;stroke-miterlimit:3"
					d="m 21.431257,120.91458 5.027086,-4.7625 v -3.175 l -2.381251,-2.38125 -2.645835,2.11667 z"
					id="path85165"
				/><path
					style="opacity:1;fill:#20212a;fill-opacity:1;fill-rule:evenodd;stroke-width:0.3;stroke-linecap:round;stroke-linejoin:round;stroke-miterlimit:3"
					d="m 16.404166,107.95 3.175,3.175 4.233334,-2.64583 C 23.87555,96.740909 33.749777,92.631606 44.449999,89.164582 v -9.525 l -4.233333,-5.55625 v -5.55625 L 26.9875,58.472916 l -5.55625,3.96875 -1.852084,1.322917 -3.96875,2.645833 -1.058333,0.79375 -4.7624998,4.233333 c -0.604431,0.273309 -0.7161088,1.716845 -0.2645833,4.497917 2.0620581,4.85136 4.1798081,9.58693 7.6729161,14.2875 l -7.9374994,9.789584 -1.0583334,7.67292 3.9687498,3.43958 3.96875,-3.175 z"
					id="path85167"
				/><path
					style="opacity:1;fill:#3f2980;fill-opacity:1;fill-rule:evenodd;stroke-width:0.3;stroke-linecap:round;stroke-linejoin:round;stroke-miterlimit:3"
					d="m 8.4666666,105.83333 6.0854164,1.32292 0.79375,-1.05833 -6.0854164,-5.82084 z"
					id="path85169"
				/><path
					style="opacity:1;fill:#3f2980;fill-opacity:1;fill-rule:evenodd;stroke-width:0.3;stroke-linecap:round;stroke-linejoin:round;stroke-miterlimit:3"
					d="m 20.6375,106.89167 3.175,1.5875 c -0.06918,-1.43231 0.172088,-2.64882 0.264583,-3.96875 l -3.175,-3.96875 z"
					id="path85171"
				/><path
					style="opacity:1;fill:#3f2980;fill-opacity:1;fill-rule:evenodd;stroke-width:0.3;stroke-linecap:round;stroke-linejoin:round;stroke-miterlimit:3"
					d="m 11.19116,97.63125 3.360923,-4.233333 3.439583,4.233332 z"
					id="path85173"
				/><path
					style="opacity:1;fill:#3f2980;fill-opacity:1;fill-rule:evenodd;stroke-width:0.3;stroke-linecap:round;stroke-linejoin:round;stroke-miterlimit:3"
					d="m 26.19375,99.483332 -0.529167,-8.202083 3.96875,4.7625 z"
					id="path85175"
				/><path
					style="opacity:1;fill:#3f2980;fill-opacity:1;fill-rule:evenodd;stroke-width:0.3;stroke-linecap:round;stroke-linejoin:round;stroke-miterlimit:3"
					d="m 34.13125,93.133332 3.439583,-1.5875 -5.291667,-6.614583 c -0.812521,2.515679 0.584199,5.368718 1.852084,8.202083 z"
					id="path85177"
				/><path
					style="opacity:1;fill:#14151d;fill-opacity:1;fill-rule:evenodd;stroke-width:0.3;stroke-linecap:round;stroke-linejoin:round;stroke-miterlimit:3"
					d="M 8.7312499,104.775 9.2604166,100.0125 10.583333,98.380903 2.9104166,91.810416 Z"
					id="path85179"
				/><path
					style="opacity:1;fill:#14151d;fill-opacity:1;fill-rule:evenodd;stroke-width:0.3;stroke-linecap:round;stroke-linejoin:round;stroke-miterlimit:3"
					d="m 11.641667,97.102083 3.704166,-4.497917 -6.6145831,-5.55625 z"
					id="path85181"
				/><path
					style="opacity:1;fill:#3f2980;fill-opacity:1;fill-rule:evenodd;stroke-width:0.3;stroke-linecap:round;stroke-linejoin:round;stroke-miterlimit:3"
					d="m 44.449999,89.164582 v -4.7625 L 26.9875,58.472916 l -2.38125,1.5875 -2.910417,2.381251 C 26.19314,68.413242 28.962695,76.850683 38.1,76.199999 c 1.319754,4.953166 0.749998,12.015467 6.349999,12.964583 z"
					id="path85183"
				/><path
					style="opacity:1;fill:#a2d2f3;fill-opacity:1;fill-rule:evenodd;stroke-width:0.3;stroke-linecap:round;stroke-linejoin:round;stroke-miterlimit:3"
					d="m 31.485416,72.760416 -11.641666,-21.43125 1.5875,11.1125 z"
					id="path85185"
				/><path
					style="opacity:1;fill:#f6fdfe;fill-opacity:1;fill-rule:evenodd;stroke-width:0.3;stroke-linecap:round;stroke-linejoin:round;stroke-miterlimit:3"
					d="M 25.4,66.410417 26.722916,64.029166 25.4,61.647916 23.8125,64.822917 Z"
					id="path85187"
				/><path
					style="opacity:1;fill:#f6fdfe;fill-opacity:1;fill-rule:evenodd;stroke-width:0.3;stroke-linecap:round;stroke-linejoin:round;stroke-miterlimit:3"
					d="m 20.902083,59.002083 1.852084,-2.38125 -1.322917,-2.38125 -1.058333,0.79375 z"
					id="path85189"
				/><path
					style="opacity:1;fill:#a2d2f3;fill-opacity:1;fill-rule:evenodd;stroke-width:0.3;stroke-linecap:round;stroke-linejoin:round;stroke-miterlimit:3"
					d="M 30.1625,81.756249 19.579166,63.764583 12.7,51.593749 15.610416,66.410416 Z"
					id="path85191"
				/><path
					style="opacity:1;fill:#f6fdfe;fill-opacity:1;fill-rule:evenodd;stroke-width:0.3;stroke-linecap:round;stroke-linejoin:round;stroke-miterlimit:3"
					d="m 15.08125,55.827083 -1.322917,-2.38125 -0.529166,0.79375 0.79375,3.96875 z"
					id="path85193"
				/><path
					style="opacity:1;fill:#f6fdfe;fill-opacity:1;fill-rule:evenodd;stroke-width:0.3;stroke-linecap:round;stroke-linejoin:round;stroke-miterlimit:3"
					d="M 16.404167,67.46875 15.610416,66.410416 15.08125,63.5 17.4625,60.060416 19.05,62.970833 Z"
					id="path85195"
				/><path
					style="opacity:1;fill:#f6fdfe;fill-opacity:1;fill-rule:evenodd;stroke-width:0.3;stroke-linecap:round;stroke-linejoin:round;stroke-miterlimit:3"
					d="m 23.283333,70.114582 -1.5875,-2.645833 -2.116666,3.175001 2.116666,2.116667 z"
					id="path85197"
				/><path
					style="opacity:1;fill:#3f2980;fill-opacity:1;fill-rule:evenodd;stroke-width:0.3;stroke-linecap:round;stroke-linejoin:round;stroke-miterlimit:3"
					d="M 24.60625,89.958332 9.7895832,71.437499 c -0.3934746,0.514262 -0.8517406,0.819462 -0.2645833,4.497917 2.9173711,7.120998 5.3070961,10.984671 7.4083331,14.022916 z"
					id="path85199"
				/><path
					style="opacity:1;fill:#3f2980;fill-opacity:1;fill-rule:evenodd;stroke-width:0.3;stroke-linecap:round;stroke-linejoin:round;stroke-miterlimit:3"
					d="m 15.610416,66.410416 -1.852083,1.322917 8.202083,12.170833 c 3.346471,1.956579 5.880194,2.370015 8.202084,2.38125 -4.577325,-5.580713 -9.211898,-11.100895 -14.552084,-15.875 z"
					id="path85201"
				/><path
					style="opacity:1;fill:#a2d2f3;fill-opacity:1;fill-rule:evenodd;stroke-width:0.3;stroke-linecap:round;stroke-linejoin:round;stroke-miterlimit:3"
					d="m 14.552083,67.468749 7.14375,12.435417 c 1.452689,4.414769 4.50106,7.487807 8.466667,9.789583 -3.662664,0.722339 -7.174926,-2.802631 -10.583334,-9.260417 L 9.7895832,71.437499 4.2333333,51.593749 Z"
					id="path85203"
				/><path
					style="opacity:1;fill:#f6fdfe;fill-opacity:1;fill-rule:evenodd;stroke-width:0.3;stroke-linecap:round;stroke-linejoin:round;stroke-miterlimit:3"
					d="M 8.2020833,65.88125 11.1125,62.177083 9.525,59.795833 7.1437499,62.177083 Z"
					id="path85205"
				/><path
					style="opacity:1;fill:#f6fdfe;fill-opacity:1;fill-rule:evenodd;stroke-width:0.3;stroke-linecap:round;stroke-linejoin:round;stroke-miterlimit:3"
					d="m 18.25625,79.110417 1.5875,-2.381251 -1.852083,-3.174999 -2.38125,3.175 z"
					id="path85207"
				/><path
					style="opacity:1;fill:#f6fdfe;fill-opacity:1;fill-rule:evenodd;stroke-width:0.3;stroke-linecap:round;stroke-linejoin:round;stroke-miterlimit:3"
					d="M 12.435417,73.81875 15.345833,68.791667 14.022917,66.675 9.7895832,71.437499 Z"
					id="path85209"
				/></g
			><path
				style="fill:#1a0c2a;fill-opacity:1;fill-rule:evenodd;stroke-width:0.3;stroke-linecap:round;stroke-linejoin:round;stroke-miterlimit:3"
				d="m 54.768749,96.308332 -1.322916,-4.7625 0.79375,-0.264583 -0.79375,-9.260417 17.991666,1.058334 1.5875,1.852083 -1.058333,6.35 0.79375,0.264583 -1.322917,4.233333 z"
				id="path109422"
			/><path
				style="opacity:1;fill:#712c29;fill-opacity:1;fill-rule:evenodd;stroke-width:1.2;stroke-linecap:round;stroke-linejoin:round;stroke-miterlimit:3;paint-order:stroke fill markers"
				d="m 70.908332,101.86458 0.264584,-9.789581 0.79375,-0.79375 0.529166,-5.820833 -0.264583,-2.645834 -3.439583,0.79375 -0.264584,14.022917 z"
				id="path18229"
			/><path
				style="opacity:1;fill:#712c29;fill-opacity:1;fill-rule:evenodd;stroke-width:1.2;stroke-linecap:round;stroke-linejoin:round;stroke-miterlimit:3;paint-order:stroke fill markers"
				d="m 55.297916,101.6 -0.264583,-9.525001 -0.79375,-0.79375 -0.79375,-6.085417 v -3.175 l 4.233333,2.116667 v 7.672917 l 1.322917,8.731254 z"
				id="path18492"
			/><path
				style="fill:#712c29;fill-opacity:1;fill-rule:evenodd;stroke-width:0.3;stroke-linecap:round;stroke-linejoin:round;stroke-miterlimit:3"
				d="m 63.499999,116.41667 7.9375,-6.61459 1.322917,-16.668748 -19.05,1.5875 1.058333,18.256248 z"
				id="path108836"
			/><path
				style="fill:#14151d;fill-opacity:1;fill-rule:evenodd;stroke-width:0.3;stroke-linecap:round;stroke-linejoin:round;stroke-miterlimit:3"
				d="M 80.168749,124.08958 72.760416,109.00833 V 91.545832 l -1.587499,1.587501 -0.793751,25.929167 z"
				id="path87391"
			/><path
				style="fill:#2e3797;fill-opacity:1;fill-rule:evenodd;stroke-width:0.3;stroke-linecap:round;stroke-linejoin:round;stroke-miterlimit:3"
				d="m 72.760416,109.27292 3.96875,-14.816671 -3.96875,-2.910417 z"
				id="path87531"
			/><path
				style="fill:#656ee4;fill-opacity:1;fill-rule:evenodd;stroke-width:0.3;stroke-linecap:round;stroke-linejoin:round;stroke-miterlimit:3"
				d="m 72.760417,109.27292 1.852083,-6.87917 -10e-7,-9.525001 -1.852083,-1.322917 z"
				id="path88499"
			/><path
				style="fill:#14151d;fill-opacity:1;fill-rule:evenodd;stroke-width:0.3;stroke-linecap:round;stroke-linejoin:round;stroke-miterlimit:3"
				d="m 46.037484,124.08958 7.408333,-15.08125 V 91.545832 l 1.5875,1.852083 0.79375,25.664585 z"
				id="path88570"
			/><path
				style="fill:#2e3797;fill-opacity:1;fill-rule:evenodd;stroke-width:0.3;stroke-linecap:round;stroke-linejoin:round;stroke-miterlimit:3"
				d="m 53.445817,109.27292 -3.96875,-14.816671 3.96875,-2.910417 z"
				id="path88572"
			/><path
				style="fill:#656ee4;fill-opacity:1;fill-rule:evenodd;stroke-width:0.3;stroke-linecap:round;stroke-linejoin:round;stroke-miterlimit:3"
				d="m 53.445833,109.27292 -1.852083,-6.87917 -1.6e-5,-9.525001 1.852083,-1.322917 z"
				id="path88574"
			/><path
				style="fill:#2e3797;fill-opacity:1;fill-rule:evenodd;stroke-width:0.3;stroke-linecap:round;stroke-linejoin:round;stroke-miterlimit:3"
				d="m 55.562499,109.80208 7.408334,5.82084 7.672916,-5.82084 -0.264583,4.7625 -6.35,5.55625 h -2.116667 l -6.35,-5.82083 z"
				id="path88576"
			/><path
				style="fill:#656ee4;fill-opacity:1;fill-rule:evenodd;stroke-width:0.3;stroke-linecap:round;stroke-linejoin:round;stroke-miterlimit:3"
				d="m 56.885416,115.62292 v -8.46667 l 1.322917,-1.5875 1.322916,1.85208 v 10.31875 z"
				id="path89406"
			/><path
				style="fill:#656ee4;fill-opacity:1;fill-rule:evenodd;stroke-width:0.3;stroke-linecap:round;stroke-linejoin:round;stroke-miterlimit:3"
				d="m 61.383333,109.80208 1.5875,-1.5875 1.852083,1.5875 v 9.525 l -0.529167,0.56224 -2.116666,-0.0331 -0.79375,-0.52917 z"
				id="path89462"
			/><path
				style="fill:#656ee4;fill-opacity:1;fill-rule:evenodd;stroke-width:0.3;stroke-linecap:round;stroke-linejoin:round;stroke-miterlimit:3"
				d="m 66.674999,117.73958 2.645833,-2.38125 v -8.20208 l -1.322916,-1.5875 -1.322917,1.5875 z"
				id="path89464"
			/><path
				style="fill:#5a2524;fill-opacity:1;fill-rule:evenodd;stroke-width:0.3;stroke-linecap:round;stroke-linejoin:round;stroke-miterlimit:3"
				d="m 71.172916,84.137499 c -0.773211,6.449329 -0.6063,14.41571 -5.291667,14.552083 v -14.2875 z"
				id="path100991"
			/><path
				style="fill:#5a2524;fill-opacity:1;fill-rule:evenodd;stroke-width:0.3;stroke-linecap:round;stroke-linejoin:round;stroke-miterlimit:3"
				d="m 55.033333,84.137499 c 0.773211,6.449329 0.6063,14.41571 5.291667,14.552083 v -14.2875 z"
				id="path101047"
			/><path
				style="fill:#f03633;fill-opacity:1;fill-rule:evenodd;stroke-width:0.3;stroke-linecap:round;stroke-linejoin:round;stroke-miterlimit:3"
				d="m 62.970833,107.95 2.910416,-9.525001 1.5875,-7.9375 0.264584,-2.381249 -2.645834,2.381249 -3.96875,0.264583 -2.645832,-2.381249 0.793749,5.027082 1.852083,8.466665 z"
				id="path89468"
			/><path
				style="fill:#2e3797;fill-opacity:1;fill-rule:evenodd;stroke-width:0.3;stroke-linecap:round;stroke-linejoin:round;stroke-miterlimit:3"
				d="m 60.854166,90.487499 -2.38125,-2.116667 -1.322917,-5.291666 v -2.116667 l 12.170833,0.264583 -1.058333,7.672917 -0.529167,-0.79375 -2.645833,2.38125 z"
				id="path104060"
			/><path
				style="fill:#2e3797;fill-opacity:1;fill-rule:evenodd;stroke-width:0.3;stroke-linecap:round;stroke-linejoin:round;stroke-miterlimit:3"
				d="m 73.818749,82.020832 -3.96875,3.439584 h -13.49375 l -6.35,-5.291667 c 8.064516,0.548647 18.062501,0.0513 23.8125,1.852083 z"
				id="path107692"
			/><path
				style="fill:#656ee4;fill-opacity:1;fill-rule:evenodd;stroke-width:0.3;stroke-linecap:round;stroke-linejoin:round;stroke-miterlimit:3"
				d="m 56.356249,92.604166 2.38125,2.116666 -0.264583,-7.672916 -3.439583,-31.75 -3.96875,5.55625 c 1.823953,8.151545 3.688762,16.268714 5.291666,24.60625 z"
				id="path91310"
			/><path
				style="fill:#656ee4;fill-opacity:1;fill-rule:evenodd;stroke-width:0.3;stroke-linecap:round;stroke-linejoin:round;stroke-miterlimit:3"
				d="m 44.449999,60.589583 2.38125,0.79375 1.322917,-1.322917 6.085417,23.01875 v 8.202083 c 0,10e-7 -1.852084,-2.116663 -1.852084,-2.116663 v -7.14375 z"
				id="path91312"
			/><path
				style="fill:#656ee4;fill-opacity:1;fill-rule:evenodd;stroke-width:0.3;stroke-linecap:round;stroke-linejoin:round;stroke-miterlimit:3"
				d="m 47.624999,78.581249 2.38125,1.5875 v 7.672917 l -2.38125,-2.38125 z"
				id="path92040"
			/><path
				style="fill:#2e3797;fill-opacity:1;fill-rule:evenodd;stroke-width:0.3;stroke-linecap:round;stroke-linejoin:round;stroke-miterlimit:3"
				d="m 48.683333,56.091666 4.7625,-0.79375 -16.139583,-16.404166 5.556249,12.699999 -3.704166,0.264584 6.35,6.614583 z"
				id="path92042"
			/><path
				style="fill:#2e3797;fill-opacity:1;fill-rule:evenodd;stroke-width:0.3;stroke-linecap:round;stroke-linejoin:round;stroke-miterlimit:3"
				d="m 37.570833,64.029166 2.910416,-3.704167 3.175,-1.322916 -12.964583,-12.435417 5.55625,11.90625 H 30.95625 Z"
				id="path92044"
			/><path
				style="fill:#656ee4;fill-opacity:1;fill-rule:evenodd;stroke-width:0.3;stroke-linecap:round;stroke-linejoin:round;stroke-miterlimit:3"
				d="m 45.508333,58.472916 3.175,-2.38125 0.264583,3.96875 -1.5875,0.79375 z"
				id="path92046"
			/><path
				style="fill:#656ee4;fill-opacity:1;fill-rule:evenodd;stroke-width:0.3;stroke-linecap:round;stroke-linejoin:round;stroke-miterlimit:3"
				d="m 40.481249,60.324999 3.96875,6.085417 v 3.175 l -6.879166,-5.55625 z"
				id="path92102"
			/><path
				style="fill:#2e3797;fill-opacity:1;fill-rule:evenodd;stroke-width:0.3;stroke-linecap:round;stroke-linejoin:round;stroke-miterlimit:3"
				d="m 77.522916,56.091666 -4.7625,-0.79375 16.139583,-16.404166 -5.556249,12.699999 3.704166,0.264584 -6.35,6.614583 z"
				id="path96556"
			/><path
				style="fill:#2e3797;fill-opacity:1;fill-rule:evenodd;stroke-width:0.3;stroke-linecap:round;stroke-linejoin:round;stroke-miterlimit:3"
				d="M 88.635416,64.029166 85.725,60.324999 82.55,59.002083 95.514583,46.566666 l -5.55625,11.90625 h 5.291666 z"
				id="path96558"
			/><path
				style="fill:#656ee4;fill-opacity:1;fill-rule:evenodd;stroke-width:0.3;stroke-linecap:round;stroke-linejoin:round;stroke-miterlimit:3"
				d="m 80.697916,58.472916 -3.175,-2.38125 -0.264583,3.96875 1.5875,0.79375 z"
				id="path96560"
			/><path
				style="fill:#656ee4;fill-opacity:1;fill-rule:evenodd;stroke-width:0.3;stroke-linecap:round;stroke-linejoin:round;stroke-miterlimit:3"
				d="m 85.725,60.324999 -3.96875,6.085417 v 3.175 l 6.879166,-5.55625 z"
				id="path96562"
			/><path
				style="fill:#656ee4;fill-opacity:1;fill-rule:evenodd;stroke-width:0.3;stroke-linecap:round;stroke-linejoin:round;stroke-miterlimit:3"
				d="m 69.85,92.604166 -2.38125,2.116666 0.264583,-7.672916 3.439583,-31.75 3.96875,5.55625 C 73.317713,69.005711 71.452904,77.12288 69.85,85.460416 Z"
				id="path96564"
			/><path
				style="opacity:1;fill:#712c29;fill-opacity:1;fill-rule:evenodd;stroke-width:1.2;stroke-linecap:round;stroke-linejoin:round;stroke-miterlimit:3;paint-order:stroke fill markers"
				d="m 72.760416,90.222916 v 1.322916 l -1.852084,1.852083 v -2.645833 z"
				id="path19037"
			/><path
				style="fill:#656ee4;fill-opacity:1;fill-rule:evenodd;stroke-width:0.3;stroke-linecap:round;stroke-linejoin:round;stroke-miterlimit:3"
				d="m 81.75625,60.589583 -2.38125,0.79375 -1.322917,-1.322917 -6.085417,23.01875 v 8.202083 c 0,10e-7 1.852084,-2.116663 1.852084,-2.116663 v -7.14375 z"
				id="path96566"
			/><path
				style="fill:#656ee4;fill-opacity:1;fill-rule:evenodd;stroke-width:0.3;stroke-linecap:round;stroke-linejoin:round;stroke-miterlimit:3"
				d="M 78.58125,78.581249 76.2,80.168749 v 7.672917 l 2.38125,-2.38125 z"
				id="path96568"
			/><path
				style="fill:#1a1b23;fill-opacity:1;fill-rule:evenodd;stroke-width:0.3;stroke-linecap:round;stroke-linejoin:round;stroke-miterlimit:3"
				d="m 56.885416,76.729166 -11.1125,-6.415805 c -1.626139,6.22552 4.433105,8.984818 10.847917,11.972056 z"
				id="path96570"
			/><path
				style="fill:#ffffff;fill-opacity:1;fill-rule:evenodd;stroke-width:0.3;stroke-linecap:round;stroke-linejoin:round;stroke-miterlimit:3"
				d="m 48.154166,73.289582 5.027083,4.233334 -4.233333,0.264583 -1.058333,-2.645833 z"
				id="path96951"
			/><path
				style="fill:#f03633;fill-opacity:1;fill-rule:evenodd;stroke-width:0.3;stroke-linecap:round;stroke-linejoin:round;stroke-miterlimit:3"
				d="m 57.94375,82.55 -0.264584,-2.645834 h -2.43273 c -1.13847,-0.163497 -1.311065,-1.488179 -0.74227,-3.704167 l -2.116667,0.79375 C 47.815707,77.541244 48.224072,74.607282 48.41875,72.23125 l -2.645834,-6.614584 1.852083,6.085416 -0.264583,3.704167 c 0.583443,3.945885 2.87538,2.720626 5.027083,3.175 1.276027,3.161511 3.511748,3.703378 5.556251,3.968751 z"
				id="path96895"
			/><path
				style="fill:#1a1b23;fill-opacity:1;fill-rule:evenodd;stroke-width:0.3;stroke-linecap:round;stroke-linejoin:round;stroke-miterlimit:3"
				d="m 69.05625,76.729167 11.1125,-6.415805 c 1.626139,6.22552 -4.433105,8.984817 -10.847917,11.972055 z"
				id="path100205"
			/><path
				style="fill:#ffffff;fill-opacity:1;fill-rule:evenodd;stroke-width:0.3;stroke-linecap:round;stroke-linejoin:round;stroke-miterlimit:3"
				d="m 77.7875,73.289583 -5.027083,4.233334 4.233333,0.264583 1.058333,-2.645833 z"
				id="path100207"
			/><path
				style="fill:#f03633;fill-opacity:1;fill-rule:evenodd;stroke-width:0.3;stroke-linecap:round;stroke-linejoin:round;stroke-miterlimit:3"
				d="m 68.2625,82.55 0.264583,-2.645833 H 70.69523 C 72.227958,79.090816 71.682323,77.596099 71.4375,76.2 l 2.116667,0.79375 c 4.571792,0.547495 4.163427,-2.386467 3.968749,-4.762499 l 2.645834,-6.614584 -1.852083,6.085416 0.264583,3.704167 c -0.583443,3.945885 -2.87538,2.720626 -5.027083,3.175 C 72.27814,81.742761 70.307003,82.284627 68.2625,82.55 Z"
				id="path100209"
			/><path
				style="fill:#656ee4;fill-opacity:1;fill-rule:evenodd;stroke-width:0.3;stroke-linecap:round;stroke-linejoin:round;stroke-miterlimit:3"
				d="m 61.118749,95.514582 2.116667,1.852083 1.852083,-1.852083 c 0.04509,-12.633987 0.820771,-25.064278 1.322917,-37.570833 l -3.439583,-5.027083 -3.175,5.291667 c 0.546381,12.639792 0.890287,24.90813 1.322916,37.306249 z"
				id="path91254"
			/><path
				style="fill:#656ee4;fill-opacity:1;fill-rule:evenodd;stroke-width:0.3;stroke-linecap:round;stroke-linejoin:round;stroke-miterlimit:3"
				d="m 62.970833,49.477083 4.233333,5.820833 3.96875,-1.852083 6.614583,-6.35 -2.645833,-2.645834 -4.233334,-0.529166 -3.704166,-0.529167 -3.96875,-3.175 -4.497917,3.175 -6.879166,1.058333 -3.704167,2.645834 6.879167,6.35 3.96875,1.852083 z"
				id="path112328"
			/><path
				style="fill:#2e3797;fill-opacity:1;fill-rule:evenodd;stroke-width:0.3;stroke-linecap:round;stroke-linejoin:round;stroke-miterlimit:3"
				d="m 65.88125,53.445833 1.322916,1.852083 3.968751,-1.852083 -0.264585,-9.525 -3.704165,-0.529166 -1.322917,-1.058334 z"
				id="path112330"
			/><path
				style="fill:#2e3797;fill-opacity:1;fill-rule:evenodd;stroke-width:0.3;stroke-linecap:round;stroke-linejoin:round;stroke-miterlimit:3"
				d="m 55.5625,53.710417 3.439583,1.587499 1.058333,-1.5875 -0.264583,-11.112499 -1.058334,0.793749 -3.439583,0.529167 z"
				id="path112494"
			/><path
				style="fill:#2e3797;fill-opacity:1;fill-rule:evenodd;stroke-width:0.3;stroke-linecap:round;stroke-linejoin:round;stroke-miterlimit:3"
				d="m 48.154166,47.095833 3.704167,-2.645834 -0.264584,5.820834 z"
				id="path112552"
			/><path
				style="fill:#2e3797;fill-opacity:1;fill-rule:evenodd;stroke-width:0.3;stroke-linecap:round;stroke-linejoin:round;stroke-miterlimit:3"
				d="m 77.787499,47.095833 -2.645833,-2.645834 h -0.79375 l 0.264583,5.55625 z"
				id="path112554"
			/><path
				style="fill:#656ee4;fill-opacity:1;fill-rule:evenodd;stroke-width:0.3;stroke-linecap:round;stroke-linejoin:round;stroke-miterlimit:3"
				d="m 60.060416,39.422916 v -4.7625 l 2.910417,-2.645833 3.174999,2.645833 v 4.7625 L 62.970833,36.5125 Z"
				id="path114319"
			/><path
				style="fill:#656ee4;fill-opacity:1;fill-rule:evenodd;stroke-width:0.3;stroke-linecap:round;stroke-linejoin:round;stroke-miterlimit:3"
				d="m 74.083332,41.804166 -3.174999,-5.027083 -10e-7,4.7625 z"
				id="path114528"
			/><path
				style="fill:#656ee4;fill-opacity:1;fill-rule:evenodd;stroke-width:0.3;stroke-linecap:round;stroke-linejoin:round;stroke-miterlimit:3"
				d="m 52.122916,41.804166 3.175,-0.264583 10e-7,-4.7625 z"
				id="path114530"
			/><path
				style="fill:#2e3797;fill-opacity:1;fill-rule:evenodd;stroke-width:0.3;stroke-linecap:round;stroke-linejoin:round;stroke-miterlimit:3"
				d="m 55.297916,41.539583 3.439583,-0.529167 1.322917,-1.5875 v -4.7625 l -1.5875,1.5875 -3.175,0.529167 z"
				id="path114532"
			/><path
				style="fill:#2e3797;fill-opacity:1;fill-rule:evenodd;stroke-width:0.3;stroke-linecap:round;stroke-linejoin:round;stroke-miterlimit:3"
				d="m 70.908332,41.539583 v -4.7625 l -3.439583,-0.529167 -1.322917,-1.5875 v 4.7625 l 1.322917,1.5875 z"
				id="path114741"
			/><path
				style="fill:#43489a;fill-opacity:1;fill-rule:evenodd;stroke-width:0.3;stroke-linecap:round;stroke-linejoin:round;stroke-miterlimit:3"
				d="M 74.083332,41.804166 73.818749,37.30625 70.908332,36.777083 h 10e-7 z"
				id="path114743"
			/><path
				style="fill:#43489a;fill-opacity:1;fill-rule:evenodd;stroke-width:0.3;stroke-linecap:round;stroke-linejoin:round;stroke-miterlimit:3"
				d="m 52.122916,41.804166 0.264583,-4.497916 2.910417,-0.529167 z"
				id="path115642"
			/><path
				style="fill:#2e3797;fill-opacity:1;fill-rule:evenodd;stroke-width:0.3;stroke-linecap:round;stroke-linejoin:round;stroke-miterlimit:3"
				d="m 48.683333,43.920833 2.116666,-1.852084 1.322917,-0.264583 0.264583,-4.497916 -2.910416,0.529166 v 3.96875 z"
				id="path115644"
			/><path
				style="fill:#2e3797;fill-opacity:1;fill-rule:evenodd;stroke-width:0.3;stroke-linecap:round;stroke-linejoin:round;stroke-miterlimit:3"
				d="M 77.522916,43.920833 75.141666,42.068749 74.083332,41.804166 73.818749,37.30625 76.729166,38.1 v 3.704166 z"
				id="path116896"
			/><path
				style="fill:#2e3797;fill-opacity:1;fill-rule:evenodd;stroke-width:0.3;stroke-linecap:round;stroke-linejoin:round;stroke-miterlimit:3"
				d="m 75.406249,34.925 -0.264583,-3.704167 -1.852084,-0.264583 0.264584,3.704166 z"
				id="path116898"
			/><path
				style="fill:#2e3797;fill-opacity:1;fill-rule:evenodd;stroke-width:0.3;stroke-linecap:round;stroke-linejoin:round;stroke-miterlimit:3"
				d="m 51.064583,34.925 1.5875,-0.264584 V 30.95625 l -1.5875,0.264583 z"
				id="path116900"
			/><path
				style="fill:#43489a;fill-opacity:1;fill-rule:evenodd;stroke-width:0.3;stroke-linecap:round;stroke-linejoin:round;stroke-miterlimit:3"
				d="M 52.652083,34.660416 55.297916,34.13125 V 30.427083 L 52.652083,30.95625 Z"
				id="path116902"
			/><path
				style="fill:#43489a;fill-opacity:1;fill-rule:evenodd;stroke-width:0.3;stroke-linecap:round;stroke-linejoin:round;stroke-miterlimit:3"
				d="m 73.554166,34.660416 -0.264584,-3.704166 -2.38125,-0.529167 v 3.96875 z"
				id="path117456"
			/><path
				style="fill:#43489a;fill-opacity:1;fill-rule:evenodd;stroke-width:0.3;stroke-linecap:round;stroke-linejoin:round;stroke-miterlimit:3"
				d="m 60.060416,32.014583 2.910417,-2.645833 3.174999,2.645833 V 27.78125 l -2.910416,-2.645834 -3.174999,2.910417 z"
				id="path117458"
			/><path
				style="fill:#2e3797;fill-opacity:1;fill-rule:evenodd;stroke-width:0.3;stroke-linecap:round;stroke-linejoin:round;stroke-miterlimit:3"
				d="m 70.908332,30.427083 -2.38125,-0.264583 -2.38125,-2.38125 v 4.233333 l 2.116667,1.852083 2.645833,0.529167 z"
				id="path117460"
			/><path
				style="fill:#2e3797;fill-opacity:1;fill-rule:evenodd;stroke-width:0.3;stroke-linecap:round;stroke-linejoin:round;stroke-miterlimit:3"
				d="m 55.297916,34.13125 2.910417,-0.264584 1.852083,-1.852083 v -3.96875 l -2.38125,2.116667 -2.38125,0.264583 z"
				id="path117525"
			/><g id="g120892"
				><path
					style="opacity:1;fill:#20212a;fill-opacity:1;fill-rule:evenodd;stroke-width:0.3;stroke-linecap:round;stroke-linejoin:round;stroke-miterlimit:3"
					d="M 79.904166,6.3499999 V 33.072916 h 11.1125 L 111.91875,12.170833 V 6.3499999 Z"
					id="path120875"
				/><path
					style="opacity:1;fill:#3f2980;fill-opacity:1;fill-rule:evenodd;stroke-width:0.3;stroke-linecap:round;stroke-linejoin:round;stroke-miterlimit:3"
					d="M 79.904166,43.656249 91.28125,32.808333 c -0.878758,-0.803637 -1.933277,-1.963992 -3.439584,-2.116667 h -7.9375 z"
					id="path120431"
				/><path
					style="opacity:1;fill:#3f2980;fill-opacity:1;fill-rule:evenodd;stroke-width:0.3;stroke-linecap:round;stroke-linejoin:round;stroke-miterlimit:3"
					d="M 79.904167,26.458333 H 92.339582 C 91.353961,25.021982 90.17357,23.7183 88.106249,23.01875 h -8.202082 z"
					id="path120778"
				/><path
					style="opacity:1;fill:#3f2980;fill-opacity:1;fill-rule:evenodd;stroke-width:0.3;stroke-linecap:round;stroke-linejoin:round;stroke-miterlimit:3"
					d="m 93.397915,26.458333 c 1.754777,-2.113267 4.467552,-2.753953 7.143755,-2.910416 l -3.175003,3.175 z"
					id="path120780"
				/><path
					style="opacity:1;fill:#3f2980;fill-opacity:1;fill-rule:evenodd;stroke-width:0.3;stroke-linecap:round;stroke-linejoin:round;stroke-miterlimit:3"
					d="m 94.456249,18.785416 c 1.60599,-2.544057 4.169708,-3.470609 7.143751,-3.704166 2.19995,0.264837 3.87912,1.055078 5.02708,2.38125 l -1.5875,1.322916 z"
					id="path120782"
				/><path
					style="opacity:1;fill:#3f2980;fill-opacity:1;fill-rule:evenodd;stroke-width:0.3;stroke-linecap:round;stroke-linejoin:round;stroke-miterlimit:3"
					d="M 79.904166,18.785416 H 92.339582 C 91.992298,15.375473 86.998854,14.302936 79.904166,14.2875 Z"
					id="path120784"
				/><path
					style="opacity:1;fill:#3f2980;fill-opacity:1;fill-rule:evenodd;stroke-width:0.3;stroke-linecap:round;stroke-linejoin:round;stroke-miterlimit:3"
					d="M 79.904166,10.31875 V 7.4083332 c 1.430558,-0.3967694 2.946708,-0.756533 5.820833,-0.5291666 3.810188,0.3021167 5.326402,1.8108767 6.614584,3.4395834 z"
					id="path120786"
				/><path
					style="opacity:1;fill:#3f2980;fill-opacity:1;fill-rule:evenodd;stroke-width:0.3;stroke-linecap:round;stroke-linejoin:round;stroke-miterlimit:3"
					d="m 97.366665,10.31875 c 1.616413,-2.0937159 3.963395,-3.1647514 6.879165,-3.4395834 3.92397,0.6727682 5.17768,1.9561199 5.55625,3.4395834 z"
					id="path120788"
				/><path
					style="opacity:1;fill:#14151d;fill-opacity:1;fill-rule:evenodd;stroke-width:0.3;stroke-linecap:round;stroke-linejoin:round;stroke-miterlimit:3"
					d="m 91.545832,40.216666 2.38125,-5.55625 11.112498,10.054167 z"
					id="path120790"
				/><path
					style="opacity:1;fill:#14151d;fill-opacity:1;fill-rule:evenodd;stroke-width:0.3;stroke-linecap:round;stroke-linejoin:round;stroke-miterlimit:3"
					d="m 90.752082,33.3375 5.55625,-5.820834 21.695838,5.820834 z"
					id="path120861"
				/><path
					style="opacity:1;fill:#14151d;fill-opacity:1;fill-rule:evenodd;stroke-width:0.3;stroke-linecap:round;stroke-linejoin:round;stroke-miterlimit:3"
					d="m 77.522916,30.691666 v -5.027083 l -9.525,-2.645833 z"
					id="path120865"
				/><path
					style="opacity:1;fill:#14151d;fill-opacity:1;fill-rule:evenodd;stroke-width:0.3;stroke-linecap:round;stroke-linejoin:round;stroke-miterlimit:3"
					d="M 77.522916,23.283333 V 15.875 L 64.558333,11.377083 Z"
					id="path120867"
				/><path
					style="opacity:1;fill:#14151d;fill-opacity:1;fill-rule:evenodd;stroke-width:0.3;stroke-linecap:round;stroke-linejoin:round;stroke-miterlimit:3"
					d="M 77.522916,13.758333 70.643749,5.0270833 77.522916,8.4666666 Z"
					id="path120869"
				/><path
					style="opacity:1;fill:#14151d;fill-opacity:1;fill-rule:evenodd;stroke-width:0.3;stroke-linecap:round;stroke-linejoin:round;stroke-miterlimit:3"
					d="M 109.80208,14.022916 V 6.3499999 h 13.22917 z"
					id="path120871"
				/><path
					style="opacity:1;fill:#14151d;fill-opacity:1;fill-rule:evenodd;stroke-width:0.3;stroke-linecap:round;stroke-linejoin:round;stroke-miterlimit:3"
					d="M 106.62708,17.4625 120.65,20.108333 100.27708,23.547916 Z"
					id="path120873"
				/></g
			><g id="g120924" transform="matrix(-1,0,0,1,126.20598,0)"
				><path
					style="opacity:1;fill:#20212a;fill-opacity:1;fill-rule:evenodd;stroke-width:0.3;stroke-linecap:round;stroke-linejoin:round;stroke-miterlimit:3"
					d="M 79.904166,6.3499999 V 33.072916 h 11.1125 L 111.91875,12.170833 V 6.3499999 Z"
					id="path120894"
				/><path
					style="opacity:1;fill:#3f2980;fill-opacity:1;fill-rule:evenodd;stroke-width:0.3;stroke-linecap:round;stroke-linejoin:round;stroke-miterlimit:3"
					d="M 79.904166,43.656249 91.28125,32.808333 c -0.878758,-0.803637 -1.933277,-1.963992 -3.439584,-2.116667 h -7.9375 z"
					id="path120896"
				/><path
					style="opacity:1;fill:#3f2980;fill-opacity:1;fill-rule:evenodd;stroke-width:0.3;stroke-linecap:round;stroke-linejoin:round;stroke-miterlimit:3"
					d="M 79.904167,26.458333 H 92.339582 C 91.353961,25.021982 90.17357,23.7183 88.106249,23.01875 h -8.202082 z"
					id="path120898"
				/><path
					style="opacity:1;fill:#3f2980;fill-opacity:1;fill-rule:evenodd;stroke-width:0.3;stroke-linecap:round;stroke-linejoin:round;stroke-miterlimit:3"
					d="m 93.397915,26.458333 c 1.754777,-2.113267 4.467552,-2.753953 7.143755,-2.910416 l -3.175003,3.175 z"
					id="path120900"
				/><path
					style="opacity:1;fill:#3f2980;fill-opacity:1;fill-rule:evenodd;stroke-width:0.3;stroke-linecap:round;stroke-linejoin:round;stroke-miterlimit:3"
					d="m 94.456249,18.785416 c 1.60599,-2.544057 4.169708,-3.470609 7.143751,-3.704166 2.19995,0.264837 3.87912,1.055078 5.02708,2.38125 l -1.5875,1.322916 z"
					id="path120902"
				/><path
					style="opacity:1;fill:#3f2980;fill-opacity:1;fill-rule:evenodd;stroke-width:0.3;stroke-linecap:round;stroke-linejoin:round;stroke-miterlimit:3"
					d="M 79.904166,18.785416 H 92.339582 C 91.992298,15.375473 86.998854,14.302936 79.904166,14.2875 Z"
					id="path120904"
				/><path
					style="opacity:1;fill:#3f2980;fill-opacity:1;fill-rule:evenodd;stroke-width:0.3;stroke-linecap:round;stroke-linejoin:round;stroke-miterlimit:3"
					d="M 79.904166,10.31875 V 7.4083332 c 1.430558,-0.3967694 2.946708,-0.756533 5.820833,-0.5291666 3.810188,0.3021167 5.326402,1.8108767 6.614584,3.4395834 z"
					id="path120906"
				/><path
					style="opacity:1;fill:#3f2980;fill-opacity:1;fill-rule:evenodd;stroke-width:0.3;stroke-linecap:round;stroke-linejoin:round;stroke-miterlimit:3"
					d="m 97.366665,10.31875 c 1.616413,-2.0937159 3.963395,-3.1647514 6.879165,-3.4395834 3.92397,0.6727682 5.17768,1.9561199 5.55625,3.4395834 z"
					id="path120908"
				/><path
					style="opacity:1;fill:#14151d;fill-opacity:1;fill-rule:evenodd;stroke-width:0.3;stroke-linecap:round;stroke-linejoin:round;stroke-miterlimit:3"
					d="m 91.545832,40.216666 2.38125,-5.55625 11.112498,10.054167 z"
					id="path120910"
				/><path
					style="opacity:1;fill:#14151d;fill-opacity:1;fill-rule:evenodd;stroke-width:0.3;stroke-linecap:round;stroke-linejoin:round;stroke-miterlimit:3"
					d="m 90.752082,33.3375 5.55625,-5.820834 21.695838,5.820834 z"
					id="path120912"
				/><path
					style="opacity:1;fill:#14151d;fill-opacity:1;fill-rule:evenodd;stroke-width:0.3;stroke-linecap:round;stroke-linejoin:round;stroke-miterlimit:3"
					d="m 77.522916,30.691666 v -5.027083 l -9.525,-2.645833 z"
					id="path120914"
				/><path
					style="opacity:1;fill:#14151d;fill-opacity:1;fill-rule:evenodd;stroke-width:0.3;stroke-linecap:round;stroke-linejoin:round;stroke-miterlimit:3"
					d="M 77.522916,23.283333 V 15.875 L 64.558333,11.377083 Z"
					id="path120916"
				/><path
					style="opacity:1;fill:#14151d;fill-opacity:1;fill-rule:evenodd;stroke-width:0.3;stroke-linecap:round;stroke-linejoin:round;stroke-miterlimit:3"
					d="M 77.522916,13.758333 70.643749,5.0270833 77.522916,8.4666666 Z"
					id="path120918"
				/><path
					style="opacity:1;fill:#14151d;fill-opacity:1;fill-rule:evenodd;stroke-width:0.3;stroke-linecap:round;stroke-linejoin:round;stroke-miterlimit:3"
					d="M 109.80208,14.022916 V 6.3499999 h 13.22917 z"
					id="path120920"
				/><path
					style="opacity:1;fill:#14151d;fill-opacity:1;fill-rule:evenodd;stroke-width:0.3;stroke-linecap:round;stroke-linejoin:round;stroke-miterlimit:3"
					d="M 106.62708,17.4625 120.65,20.108333 100.27708,23.547916 Z"
					id="path120922"
				/></g
			><path
				style="opacity:1;fill:#712c29;fill-opacity:1;fill-rule:evenodd;stroke-width:1.2;stroke-linecap:round;stroke-linejoin:round;stroke-miterlimit:3;paint-order:stroke fill markers"
				d="m 72.760416,91.545832 -1.852084,2.116667 0.264584,-1.5875 z"
				id="path19039"
			/><path
				style="opacity:1;fill:#712c29;fill-opacity:1;fill-rule:evenodd;stroke-width:1.2;stroke-linecap:round;stroke-linejoin:round;stroke-miterlimit:3;paint-order:stroke fill markers"
				d="m 53.445833,91.545832 v -1.171726 l 1.5875,1.700893 z"
				id="path19041"
			/></g
		><g id="g19975"
			><path
				style="fill:#2e3797;fill-opacity:1;fill-rule:evenodd;stroke-width:0.3;stroke-linecap:round;stroke-linejoin:round;stroke-miterlimit:3"
				d="m 55.033333,55.297916 4.7625,2.910417 6.614583,-0.264584 4.7625,-2.645833 3.96875,5.55625 2.116666,-0.79375 2.116667,1.322917 2.38125,-0.79375 v 14.022916 c -1.930165,3.64011 -5.028424,5.369492 -7.9375,7.408333 H 52.387497 c -0.79886,-0.111762 -1.590064,-0.980921 -2.381248,-1.852083 -1.70481,-0.05396 -3.661151,-3.3296 -5.55625,-5.820833 V 60.589583 l 2.38125,0.79375 1.5875,-1.322917 h 0.529167 l 2.116667,0.79375 z"
				id="path19677"
			/><g id="g19729"
				><path
					style="opacity:1;fill:#20212a;fill-opacity:1;fill-rule:evenodd;stroke-width:0.3;stroke-linecap:round;stroke-linejoin:round;stroke-miterlimit:3"
					d="m 5.5562499,120.91458 5.0270831,-4.7625 v -3.175 l -2.3812498,-2.38125 -2.6458333,2.11667 z"
					id="path19679"
				/><path
					style="opacity:1;fill:#20212a;fill-opacity:1;fill-rule:evenodd;stroke-width:0.3;stroke-linecap:round;stroke-linejoin:round;stroke-miterlimit:3"
					d="m 13.493752,120.91458 5.027086,-4.7625 v -3.175 l -2.381251,-2.38125 -2.645835,2.11667 z"
					id="path19681"
				/><path
					style="opacity:1;fill:#20212a;fill-opacity:1;fill-rule:evenodd;stroke-width:0.3;stroke-linecap:round;stroke-linejoin:round;stroke-miterlimit:3"
					d="m 21.431257,120.91458 5.027086,-4.7625 v -3.175 l -2.381251,-2.38125 -2.645835,2.11667 z"
					id="path19683"
				/><path
					style="opacity:1;fill:#20212a;fill-opacity:1;fill-rule:evenodd;stroke-width:0.3;stroke-linecap:round;stroke-linejoin:round;stroke-miterlimit:3"
					d="m 16.404166,107.95 3.175,3.175 4.233334,-2.64583 C 23.87555,96.740909 33.749777,92.631606 44.449999,89.164582 v -9.525 l -4.233333,-5.55625 v -5.55625 L 26.9875,58.472916 l -5.55625,3.96875 -1.852084,1.322917 -3.96875,2.645833 -1.058333,0.79375 -4.7624998,4.233333 c -0.604431,0.273309 -0.7161088,1.716845 -0.2645833,4.497917 2.0620581,4.85136 4.1798081,9.58693 7.6729161,14.2875 l -7.9374994,9.789584 -1.0583334,7.67292 3.9687498,3.43958 3.96875,-3.175 z"
					id="path19685"
				/><path
					style="opacity:1;fill:#3f2980;fill-opacity:1;fill-rule:evenodd;stroke-width:0.3;stroke-linecap:round;stroke-linejoin:round;stroke-miterlimit:3"
					d="m 8.4666666,105.83333 6.0854164,1.32292 0.79375,-1.05833 -6.0854164,-5.82084 z"
					id="path19687"
				/><path
					style="opacity:1;fill:#3f2980;fill-opacity:1;fill-rule:evenodd;stroke-width:0.3;stroke-linecap:round;stroke-linejoin:round;stroke-miterlimit:3"
					d="m 20.6375,106.89167 3.175,1.5875 c -0.06918,-1.43231 0.172088,-2.64882 0.264583,-3.96875 l -3.175,-3.96875 z"
					id="path19689"
				/><path
					style="opacity:1;fill:#3f2980;fill-opacity:1;fill-rule:evenodd;stroke-width:0.3;stroke-linecap:round;stroke-linejoin:round;stroke-miterlimit:3"
					d="m 11.19116,97.63125 3.360923,-4.233333 3.439583,4.233332 z"
					id="path19691"
				/><path
					style="opacity:1;fill:#3f2980;fill-opacity:1;fill-rule:evenodd;stroke-width:0.3;stroke-linecap:round;stroke-linejoin:round;stroke-miterlimit:3"
					d="m 26.19375,99.483332 -0.529167,-8.202083 3.96875,4.7625 z"
					id="path19693"
				/><path
					style="opacity:1;fill:#3f2980;fill-opacity:1;fill-rule:evenodd;stroke-width:0.3;stroke-linecap:round;stroke-linejoin:round;stroke-miterlimit:3"
					d="m 34.13125,93.133332 3.439583,-1.5875 -5.291667,-6.614583 c -0.812521,2.515679 0.584199,5.368718 1.852084,8.202083 z"
					id="path19695"
				/><path
					style="opacity:1;fill:#14151d;fill-opacity:1;fill-rule:evenodd;stroke-width:0.3;stroke-linecap:round;stroke-linejoin:round;stroke-miterlimit:3"
					d="M 8.7312499,104.775 9.2604166,100.0125 10.583333,98.380903 2.9104166,91.810416 Z"
					id="path19697"
				/><path
					style="opacity:1;fill:#14151d;fill-opacity:1;fill-rule:evenodd;stroke-width:0.3;stroke-linecap:round;stroke-linejoin:round;stroke-miterlimit:3"
					d="m 11.641667,97.102083 3.704166,-4.497917 -6.6145831,-5.55625 z"
					id="path19699"
				/><path
					style="opacity:1;fill:#3f2980;fill-opacity:1;fill-rule:evenodd;stroke-width:0.3;stroke-linecap:round;stroke-linejoin:round;stroke-miterlimit:3"
					d="m 44.449999,89.164582 v -4.7625 L 26.9875,58.472916 l -2.38125,1.5875 -2.910417,2.381251 C 26.19314,68.413242 28.962695,76.850683 38.1,76.199999 c 1.319754,4.953166 0.749998,12.015467 6.349999,12.964583 z"
					id="path19701"
				/><path
					style="opacity:1;fill:#a2d2f3;fill-opacity:1;fill-rule:evenodd;stroke-width:0.3;stroke-linecap:round;stroke-linejoin:round;stroke-miterlimit:3"
					d="m 31.485416,72.760416 -11.641666,-21.43125 1.5875,11.1125 z"
					id="path19703"
				/><path
					style="opacity:1;fill:#f6fdfe;fill-opacity:1;fill-rule:evenodd;stroke-width:0.3;stroke-linecap:round;stroke-linejoin:round;stroke-miterlimit:3"
					d="M 25.4,66.410417 26.722916,64.029166 25.4,61.647916 23.8125,64.822917 Z"
					id="path19705"
				/><path
					style="opacity:1;fill:#f6fdfe;fill-opacity:1;fill-rule:evenodd;stroke-width:0.3;stroke-linecap:round;stroke-linejoin:round;stroke-miterlimit:3"
					d="m 20.902083,59.002083 1.852084,-2.38125 -1.322917,-2.38125 -1.058333,0.79375 z"
					id="path19707"
				/><path
					style="opacity:1;fill:#a2d2f3;fill-opacity:1;fill-rule:evenodd;stroke-width:0.3;stroke-linecap:round;stroke-linejoin:round;stroke-miterlimit:3"
					d="M 30.1625,81.756249 19.579166,63.764583 12.7,51.593749 15.610416,66.410416 Z"
					id="path19709"
				/><path
					style="opacity:1;fill:#f6fdfe;fill-opacity:1;fill-rule:evenodd;stroke-width:0.3;stroke-linecap:round;stroke-linejoin:round;stroke-miterlimit:3"
					d="m 15.08125,55.827083 -1.322917,-2.38125 -0.529166,0.79375 0.79375,3.96875 z"
					id="path19711"
				/><path
					style="opacity:1;fill:#f6fdfe;fill-opacity:1;fill-rule:evenodd;stroke-width:0.3;stroke-linecap:round;stroke-linejoin:round;stroke-miterlimit:3"
					d="M 16.404167,67.46875 15.610416,66.410416 15.08125,63.5 17.4625,60.060416 19.05,62.970833 Z"
					id="path19713"
				/><path
					style="opacity:1;fill:#f6fdfe;fill-opacity:1;fill-rule:evenodd;stroke-width:0.3;stroke-linecap:round;stroke-linejoin:round;stroke-miterlimit:3"
					d="m 23.283333,70.114582 -1.5875,-2.645833 -2.116666,3.175001 2.116666,2.116667 z"
					id="path19715"
				/><path
					style="opacity:1;fill:#3f2980;fill-opacity:1;fill-rule:evenodd;stroke-width:0.3;stroke-linecap:round;stroke-linejoin:round;stroke-miterlimit:3"
					d="M 24.60625,89.958332 9.7895832,71.437499 c -0.3934746,0.514262 -0.8517406,0.819462 -0.2645833,4.497917 2.9173711,7.120998 5.3070961,10.984671 7.4083331,14.022916 z"
					id="path19717"
				/><path
					style="opacity:1;fill:#3f2980;fill-opacity:1;fill-rule:evenodd;stroke-width:0.3;stroke-linecap:round;stroke-linejoin:round;stroke-miterlimit:3"
					d="m 15.610416,66.410416 -1.852083,1.322917 8.202083,12.170833 c 3.346471,1.956579 5.880194,2.370015 8.202084,2.38125 -4.577325,-5.580713 -9.211898,-11.100895 -14.552084,-15.875 z"
					id="path19719"
				/><path
					style="opacity:1;fill:#a2d2f3;fill-opacity:1;fill-rule:evenodd;stroke-width:0.3;stroke-linecap:round;stroke-linejoin:round;stroke-miterlimit:3"
					d="m 14.552083,67.468749 7.14375,12.435417 c 1.452689,4.414769 4.50106,7.487807 8.466667,9.789583 -3.662664,0.722339 -7.174926,-2.802631 -10.583334,-9.260417 L 9.7895832,71.437499 4.2333333,51.593749 Z"
					id="path19721"
				/><path
					style="opacity:1;fill:#f6fdfe;fill-opacity:1;fill-rule:evenodd;stroke-width:0.3;stroke-linecap:round;stroke-linejoin:round;stroke-miterlimit:3"
					d="M 8.2020833,65.88125 11.1125,62.177083 9.525,59.795833 7.1437499,62.177083 Z"
					id="path19723"
				/><path
					style="opacity:1;fill:#f6fdfe;fill-opacity:1;fill-rule:evenodd;stroke-width:0.3;stroke-linecap:round;stroke-linejoin:round;stroke-miterlimit:3"
					d="m 18.25625,79.110417 1.5875,-2.381251 -1.852083,-3.174999 -2.38125,3.175 z"
					id="path19725"
				/><path
					style="opacity:1;fill:#f6fdfe;fill-opacity:1;fill-rule:evenodd;stroke-width:0.3;stroke-linecap:round;stroke-linejoin:round;stroke-miterlimit:3"
					d="M 12.435417,73.81875 15.345833,68.791667 14.022917,66.675 9.7895832,71.437499 Z"
					id="path19727"
				/></g
			><g id="g19781" transform="matrix(-1,0,0,1,126.20645,0)"
				><path
					style="opacity:1;fill:#20212a;fill-opacity:1;fill-rule:evenodd;stroke-width:0.3;stroke-linecap:round;stroke-linejoin:round;stroke-miterlimit:3"
					d="m 5.5562499,120.91458 5.0270831,-4.7625 v -3.175 l -2.3812498,-2.38125 -2.6458333,2.11667 z"
					id="path19731"
				/><path
					style="opacity:1;fill:#20212a;fill-opacity:1;fill-rule:evenodd;stroke-width:0.3;stroke-linecap:round;stroke-linejoin:round;stroke-miterlimit:3"
					d="m 13.493752,120.91458 5.027086,-4.7625 v -3.175 l -2.381251,-2.38125 -2.645835,2.11667 z"
					id="path19733"
				/><path
					style="opacity:1;fill:#20212a;fill-opacity:1;fill-rule:evenodd;stroke-width:0.3;stroke-linecap:round;stroke-linejoin:round;stroke-miterlimit:3"
					d="m 21.431257,120.91458 5.027086,-4.7625 v -3.175 l -2.381251,-2.38125 -2.645835,2.11667 z"
					id="path19735"
				/><path
					style="opacity:1;fill:#20212a;fill-opacity:1;fill-rule:evenodd;stroke-width:0.3;stroke-linecap:round;stroke-linejoin:round;stroke-miterlimit:3"
					d="m 16.404166,107.95 3.175,3.175 4.233334,-2.64583 C 23.87555,96.740909 33.749777,92.631606 44.449999,89.164582 v -9.525 l -4.233333,-5.55625 v -5.55625 L 26.9875,58.472916 l -5.55625,3.96875 -1.852084,1.322917 -3.96875,2.645833 -1.058333,0.79375 -4.7624998,4.233333 c -0.604431,0.273309 -0.7161088,1.716845 -0.2645833,4.497917 2.0620581,4.85136 4.1798081,9.58693 7.6729161,14.2875 l -7.9374994,9.789584 -1.0583334,7.67292 3.9687498,3.43958 3.96875,-3.175 z"
					id="path19737"
				/><path
					style="opacity:1;fill:#3f2980;fill-opacity:1;fill-rule:evenodd;stroke-width:0.3;stroke-linecap:round;stroke-linejoin:round;stroke-miterlimit:3"
					d="m 8.4666666,105.83333 6.0854164,1.32292 0.79375,-1.05833 -6.0854164,-5.82084 z"
					id="path19739"
				/><path
					style="opacity:1;fill:#3f2980;fill-opacity:1;fill-rule:evenodd;stroke-width:0.3;stroke-linecap:round;stroke-linejoin:round;stroke-miterlimit:3"
					d="m 20.6375,106.89167 3.175,1.5875 c -0.06918,-1.43231 0.172088,-2.64882 0.264583,-3.96875 l -3.175,-3.96875 z"
					id="path19741"
				/><path
					style="opacity:1;fill:#3f2980;fill-opacity:1;fill-rule:evenodd;stroke-width:0.3;stroke-linecap:round;stroke-linejoin:round;stroke-miterlimit:3"
					d="m 11.19116,97.63125 3.360923,-4.233333 3.439583,4.233332 z"
					id="path19743"
				/><path
					style="opacity:1;fill:#3f2980;fill-opacity:1;fill-rule:evenodd;stroke-width:0.3;stroke-linecap:round;stroke-linejoin:round;stroke-miterlimit:3"
					d="m 26.19375,99.483332 -0.529167,-8.202083 3.96875,4.7625 z"
					id="path19745"
				/><path
					style="opacity:1;fill:#3f2980;fill-opacity:1;fill-rule:evenodd;stroke-width:0.3;stroke-linecap:round;stroke-linejoin:round;stroke-miterlimit:3"
					d="m 34.13125,93.133332 3.439583,-1.5875 -5.291667,-6.614583 c -0.812521,2.515679 0.584199,5.368718 1.852084,8.202083 z"
					id="path19747"
				/><path
					style="opacity:1;fill:#14151d;fill-opacity:1;fill-rule:evenodd;stroke-width:0.3;stroke-linecap:round;stroke-linejoin:round;stroke-miterlimit:3"
					d="M 8.7312499,104.775 9.2604166,100.0125 10.583333,98.380903 2.9104166,91.810416 Z"
					id="path19749"
				/><path
					style="opacity:1;fill:#14151d;fill-opacity:1;fill-rule:evenodd;stroke-width:0.3;stroke-linecap:round;stroke-linejoin:round;stroke-miterlimit:3"
					d="m 11.641667,97.102083 3.704166,-4.497917 -6.6145831,-5.55625 z"
					id="path19751"
				/><path
					style="opacity:1;fill:#3f2980;fill-opacity:1;fill-rule:evenodd;stroke-width:0.3;stroke-linecap:round;stroke-linejoin:round;stroke-miterlimit:3"
					d="m 44.449999,89.164582 v -4.7625 L 26.9875,58.472916 l -2.38125,1.5875 -2.910417,2.381251 C 26.19314,68.413242 28.962695,76.850683 38.1,76.199999 c 1.319754,4.953166 0.749998,12.015467 6.349999,12.964583 z"
					id="path19753"
				/><path
					style="opacity:1;fill:#a2d2f3;fill-opacity:1;fill-rule:evenodd;stroke-width:0.3;stroke-linecap:round;stroke-linejoin:round;stroke-miterlimit:3"
					d="m 31.485416,72.760416 -11.641666,-21.43125 1.5875,11.1125 z"
					id="path19755"
				/><path
					style="opacity:1;fill:#f6fdfe;fill-opacity:1;fill-rule:evenodd;stroke-width:0.3;stroke-linecap:round;stroke-linejoin:round;stroke-miterlimit:3"
					d="M 25.4,66.410417 26.722916,64.029166 25.4,61.647916 23.8125,64.822917 Z"
					id="path19757"
				/><path
					style="opacity:1;fill:#f6fdfe;fill-opacity:1;fill-rule:evenodd;stroke-width:0.3;stroke-linecap:round;stroke-linejoin:round;stroke-miterlimit:3"
					d="m 20.902083,59.002083 1.852084,-2.38125 -1.322917,-2.38125 -1.058333,0.79375 z"
					id="path19759"
				/><path
					style="opacity:1;fill:#a2d2f3;fill-opacity:1;fill-rule:evenodd;stroke-width:0.3;stroke-linecap:round;stroke-linejoin:round;stroke-miterlimit:3"
					d="M 30.1625,81.756249 19.579166,63.764583 12.7,51.593749 15.610416,66.410416 Z"
					id="path19761"
				/><path
					style="opacity:1;fill:#f6fdfe;fill-opacity:1;fill-rule:evenodd;stroke-width:0.3;stroke-linecap:round;stroke-linejoin:round;stroke-miterlimit:3"
					d="m 15.08125,55.827083 -1.322917,-2.38125 -0.529166,0.79375 0.79375,3.96875 z"
					id="path19763"
				/><path
					style="opacity:1;fill:#f6fdfe;fill-opacity:1;fill-rule:evenodd;stroke-width:0.3;stroke-linecap:round;stroke-linejoin:round;stroke-miterlimit:3"
					d="M 16.404167,67.46875 15.610416,66.410416 15.08125,63.5 17.4625,60.060416 19.05,62.970833 Z"
					id="path19765"
				/><path
					style="opacity:1;fill:#f6fdfe;fill-opacity:1;fill-rule:evenodd;stroke-width:0.3;stroke-linecap:round;stroke-linejoin:round;stroke-miterlimit:3"
					d="m 23.283333,70.114582 -1.5875,-2.645833 -2.116666,3.175001 2.116666,2.116667 z"
					id="path19767"
				/><path
					style="opacity:1;fill:#3f2980;fill-opacity:1;fill-rule:evenodd;stroke-width:0.3;stroke-linecap:round;stroke-linejoin:round;stroke-miterlimit:3"
					d="M 24.60625,89.958332 9.7895832,71.437499 c -0.3934746,0.514262 -0.8517406,0.819462 -0.2645833,4.497917 2.9173711,7.120998 5.3070961,10.984671 7.4083331,14.022916 z"
					id="path19769"
				/><path
					style="opacity:1;fill:#3f2980;fill-opacity:1;fill-rule:evenodd;stroke-width:0.3;stroke-linecap:round;stroke-linejoin:round;stroke-miterlimit:3"
					d="m 15.610416,66.410416 -1.852083,1.322917 8.202083,12.170833 c 3.346471,1.956579 5.880194,2.370015 8.202084,2.38125 -4.577325,-5.580713 -9.211898,-11.100895 -14.552084,-15.875 z"
					id="path19771"
				/><path
					style="opacity:1;fill:#a2d2f3;fill-opacity:1;fill-rule:evenodd;stroke-width:0.3;stroke-linecap:round;stroke-linejoin:round;stroke-miterlimit:3"
					d="m 14.552083,67.468749 7.14375,12.435417 c 1.452689,4.414769 4.50106,7.487807 8.466667,9.789583 -3.662664,0.722339 -7.174926,-2.802631 -10.583334,-9.260417 L 9.7895832,71.437499 4.2333333,51.593749 Z"
					id="path19773"
				/><path
					style="opacity:1;fill:#f6fdfe;fill-opacity:1;fill-rule:evenodd;stroke-width:0.3;stroke-linecap:round;stroke-linejoin:round;stroke-miterlimit:3"
					d="M 8.2020833,65.88125 11.1125,62.177083 9.525,59.795833 7.1437499,62.177083 Z"
					id="path19775"
				/><path
					style="opacity:1;fill:#f6fdfe;fill-opacity:1;fill-rule:evenodd;stroke-width:0.3;stroke-linecap:round;stroke-linejoin:round;stroke-miterlimit:3"
					d="m 18.25625,79.110417 1.5875,-2.381251 -1.852083,-3.174999 -2.38125,3.175 z"
					id="path19777"
				/><path
					style="opacity:1;fill:#f6fdfe;fill-opacity:1;fill-rule:evenodd;stroke-width:0.3;stroke-linecap:round;stroke-linejoin:round;stroke-miterlimit:3"
					d="M 12.435417,73.81875 15.345833,68.791667 14.022917,66.675 9.7895832,71.437499 Z"
					id="path19779"
				/></g
			><path
				style="fill:#1a0c2a;fill-opacity:1;fill-rule:evenodd;stroke-width:0.3;stroke-linecap:round;stroke-linejoin:round;stroke-miterlimit:3"
				d="m 54.768749,96.308332 -1.322916,-4.7625 0.79375,-0.264583 -0.79375,-9.260417 17.991666,1.058334 1.5875,1.852083 -1.058333,6.35 0.79375,0.264583 -1.322917,4.233333 z"
				id="path19783"
			/><path
				style="opacity:1;fill:#712c29;fill-opacity:1;fill-rule:evenodd;stroke-width:1.2;stroke-linecap:round;stroke-linejoin:round;stroke-miterlimit:3;paint-order:stroke fill markers"
				d="m 70.908332,101.86458 0.264584,-9.789581 0.79375,-0.79375 0.529166,-5.820833 -0.264583,-2.645834 -3.439583,0.79375 -0.264584,14.022917 z"
				id="path19785"
			/><path
				style="opacity:1;fill:#712c29;fill-opacity:1;fill-rule:evenodd;stroke-width:1.2;stroke-linecap:round;stroke-linejoin:round;stroke-miterlimit:3;paint-order:stroke fill markers"
				d="m 55.297916,101.6 -0.264583,-9.525001 -0.79375,-0.79375 -0.79375,-6.085417 v -3.175 l 4.233333,2.116667 v 7.672917 l 1.322917,8.731254 z"
				id="path19787"
			/><path
				style="fill:#712c29;fill-opacity:1;fill-rule:evenodd;stroke-width:0.3;stroke-linecap:round;stroke-linejoin:round;stroke-miterlimit:3"
				d="m 63.499999,116.41667 7.9375,-6.61459 1.322917,-16.668748 -19.05,1.5875 1.058333,18.256248 z"
				id="path19789"
			/><path
				style="fill:#14151d;fill-opacity:1;fill-rule:evenodd;stroke-width:0.3;stroke-linecap:round;stroke-linejoin:round;stroke-miterlimit:3"
				d="M 80.168749,124.08958 72.760416,109.00833 V 91.545832 l -1.587499,1.587501 -0.793751,25.929167 z"
				id="path19791"
			/><path
				style="fill:#2e3797;fill-opacity:1;fill-rule:evenodd;stroke-width:0.3;stroke-linecap:round;stroke-linejoin:round;stroke-miterlimit:3"
				d="m 72.760416,109.27292 3.96875,-14.816671 -3.96875,-2.910417 z"
				id="path19793"
			/><path
				style="fill:#656ee4;fill-opacity:1;fill-rule:evenodd;stroke-width:0.3;stroke-linecap:round;stroke-linejoin:round;stroke-miterlimit:3"
				d="m 72.760417,109.27292 1.852083,-6.87917 -10e-7,-9.525001 -1.852083,-1.322917 z"
				id="path19795"
			/><path
				style="fill:#14151d;fill-opacity:1;fill-rule:evenodd;stroke-width:0.3;stroke-linecap:round;stroke-linejoin:round;stroke-miterlimit:3"
				d="m 46.037484,124.08958 7.408333,-15.08125 V 91.545832 l 1.5875,1.852083 0.79375,25.664585 z"
				id="path19797"
			/><path
				style="fill:#2e3797;fill-opacity:1;fill-rule:evenodd;stroke-width:0.3;stroke-linecap:round;stroke-linejoin:round;stroke-miterlimit:3"
				d="m 53.445817,109.27292 -3.96875,-14.816671 3.96875,-2.910417 z"
				id="path19799"
			/><path
				style="fill:#656ee4;fill-opacity:1;fill-rule:evenodd;stroke-width:0.3;stroke-linecap:round;stroke-linejoin:round;stroke-miterlimit:3"
				d="m 53.445833,109.27292 -1.852083,-6.87917 -1.6e-5,-9.525001 1.852083,-1.322917 z"
				id="path19801"
			/><path
				style="fill:#2e3797;fill-opacity:1;fill-rule:evenodd;stroke-width:0.3;stroke-linecap:round;stroke-linejoin:round;stroke-miterlimit:3"
				d="m 55.562499,109.80208 7.408334,5.82084 7.672916,-5.82084 -0.264583,4.7625 -6.35,5.55625 h -2.116667 l -6.35,-5.82083 z"
				id="path19803"
			/><path
				style="fill:#656ee4;fill-opacity:1;fill-rule:evenodd;stroke-width:0.3;stroke-linecap:round;stroke-linejoin:round;stroke-miterlimit:3"
				d="m 56.885416,115.62292 v -8.46667 l 1.322917,-1.5875 1.322916,1.85208 v 10.31875 z"
				id="path19805"
			/><path
				style="fill:#656ee4;fill-opacity:1;fill-rule:evenodd;stroke-width:0.3;stroke-linecap:round;stroke-linejoin:round;stroke-miterlimit:3"
				d="m 61.383333,109.80208 1.5875,-1.5875 1.852083,1.5875 v 9.525 l -0.529167,0.56224 -2.116666,-0.0331 -0.79375,-0.52917 z"
				id="path19807"
			/><path
				style="fill:#656ee4;fill-opacity:1;fill-rule:evenodd;stroke-width:0.3;stroke-linecap:round;stroke-linejoin:round;stroke-miterlimit:3"
				d="m 66.674999,117.73958 2.645833,-2.38125 v -8.20208 l -1.322916,-1.5875 -1.322917,1.5875 z"
				id="path19809"
			/><path
				style="fill:#5a2524;fill-opacity:1;fill-rule:evenodd;stroke-width:0.3;stroke-linecap:round;stroke-linejoin:round;stroke-miterlimit:3"
				d="m 71.172916,84.137499 c -0.773211,6.449329 -0.6063,14.41571 -5.291667,14.552083 v -14.2875 z"
				id="path19811"
			/><path
				style="fill:#5a2524;fill-opacity:1;fill-rule:evenodd;stroke-width:0.3;stroke-linecap:round;stroke-linejoin:round;stroke-miterlimit:3"
				d="m 55.033333,84.137499 c 0.773211,6.449329 0.6063,14.41571 5.291667,14.552083 v -14.2875 z"
				id="path19813"
			/><path
				style="fill:#f03633;fill-opacity:1;fill-rule:evenodd;stroke-width:0.3;stroke-linecap:round;stroke-linejoin:round;stroke-miterlimit:3"
				d="m 62.970833,107.95 2.910416,-9.525001 1.5875,-7.9375 0.264584,-2.381249 -2.645834,2.381249 -3.96875,0.264583 -2.645832,-2.381249 0.793749,5.027082 1.852083,8.466665 z"
				id="path19815"
			/><path
				style="fill:#2e3797;fill-opacity:1;fill-rule:evenodd;stroke-width:0.3;stroke-linecap:round;stroke-linejoin:round;stroke-miterlimit:3"
				d="m 60.854166,90.487499 -2.38125,-2.116667 -1.322917,-5.291666 v -2.116667 l 12.170833,0.264583 -1.058333,7.672917 -0.529167,-0.79375 -2.645833,2.38125 z"
				id="path19817"
			/><path
				style="fill:#2e3797;fill-opacity:1;fill-rule:evenodd;stroke-width:0.3;stroke-linecap:round;stroke-linejoin:round;stroke-miterlimit:3"
				d="m 73.818749,82.020832 -3.96875,3.439584 h -13.49375 l -6.35,-5.291667 c 8.064516,0.548647 18.062501,0.0513 23.8125,1.852083 z"
				id="path19819"
			/><path
				style="fill:#656ee4;fill-opacity:1;fill-rule:evenodd;stroke-width:0.3;stroke-linecap:round;stroke-linejoin:round;stroke-miterlimit:3"
				d="m 56.356249,92.604166 2.38125,2.116666 -0.264583,-7.672916 -3.439583,-31.75 -3.96875,5.55625 c 1.823953,8.151545 3.688762,16.268714 5.291666,24.60625 z"
				id="path19821"
			/><path
				style="fill:#656ee4;fill-opacity:1;fill-rule:evenodd;stroke-width:0.3;stroke-linecap:round;stroke-linejoin:round;stroke-miterlimit:3"
				d="m 44.449999,60.589583 2.38125,0.79375 1.322917,-1.322917 6.085417,23.01875 v 8.202083 c 0,10e-7 -1.852084,-2.116663 -1.852084,-2.116663 v -7.14375 z"
				id="path19823"
			/><path
				style="fill:#656ee4;fill-opacity:1;fill-rule:evenodd;stroke-width:0.3;stroke-linecap:round;stroke-linejoin:round;stroke-miterlimit:3"
				d="m 47.624999,78.581249 2.38125,1.5875 v 7.672917 l -2.38125,-2.38125 z"
				id="path19825"
			/><path
				style="fill:#2e3797;fill-opacity:1;fill-rule:evenodd;stroke-width:0.3;stroke-linecap:round;stroke-linejoin:round;stroke-miterlimit:3"
				d="m 48.683333,56.091666 4.7625,-0.79375 -16.139583,-16.404166 5.556249,12.699999 -3.704166,0.264584 6.35,6.614583 z"
				id="path19827"
			/><path
				style="fill:#2e3797;fill-opacity:1;fill-rule:evenodd;stroke-width:0.3;stroke-linecap:round;stroke-linejoin:round;stroke-miterlimit:3"
				d="m 37.570833,64.029166 2.910416,-3.704167 3.175,-1.322916 -12.964583,-12.435417 5.55625,11.90625 H 30.95625 Z"
				id="path19829"
			/><path
				style="fill:#656ee4;fill-opacity:1;fill-rule:evenodd;stroke-width:0.3;stroke-linecap:round;stroke-linejoin:round;stroke-miterlimit:3"
				d="m 45.508333,58.472916 3.175,-2.38125 0.264583,3.96875 -1.5875,0.79375 z"
				id="path19831"
			/><path
				style="fill:#656ee4;fill-opacity:1;fill-rule:evenodd;stroke-width:0.3;stroke-linecap:round;stroke-linejoin:round;stroke-miterlimit:3"
				d="m 40.481249,60.324999 3.96875,6.085417 v 3.175 l -6.879166,-5.55625 z"
				id="path19833"
			/><path
				style="fill:#2e3797;fill-opacity:1;fill-rule:evenodd;stroke-width:0.3;stroke-linecap:round;stroke-linejoin:round;stroke-miterlimit:3"
				d="m 77.522916,56.091666 -4.7625,-0.79375 16.139583,-16.404166 -5.556249,12.699999 3.704166,0.264584 -6.35,6.614583 z"
				id="path19835"
			/><path
				style="fill:#2e3797;fill-opacity:1;fill-rule:evenodd;stroke-width:0.3;stroke-linecap:round;stroke-linejoin:round;stroke-miterlimit:3"
				d="M 88.635416,64.029166 85.725,60.324999 82.55,59.002083 95.514583,46.566666 l -5.55625,11.90625 h 5.291666 z"
				id="path19837"
			/><path
				style="fill:#656ee4;fill-opacity:1;fill-rule:evenodd;stroke-width:0.3;stroke-linecap:round;stroke-linejoin:round;stroke-miterlimit:3"
				d="m 80.697916,58.472916 -3.175,-2.38125 -0.264583,3.96875 1.5875,0.79375 z"
				id="path19839"
			/><path
				style="fill:#656ee4;fill-opacity:1;fill-rule:evenodd;stroke-width:0.3;stroke-linecap:round;stroke-linejoin:round;stroke-miterlimit:3"
				d="m 85.725,60.324999 -3.96875,6.085417 v 3.175 l 6.879166,-5.55625 z"
				id="path19841"
			/><path
				style="fill:#656ee4;fill-opacity:1;fill-rule:evenodd;stroke-width:0.3;stroke-linecap:round;stroke-linejoin:round;stroke-miterlimit:3"
				d="m 69.85,92.604166 -2.38125,2.116666 0.264583,-7.672916 3.439583,-31.75 3.96875,5.55625 C 73.317713,69.005711 71.452904,77.12288 69.85,85.460416 Z"
				id="path19843"
			/><path
				style="opacity:1;fill:#712c29;fill-opacity:1;fill-rule:evenodd;stroke-width:1.2;stroke-linecap:round;stroke-linejoin:round;stroke-miterlimit:3;paint-order:stroke fill markers"
				d="m 72.760416,90.222916 v 1.322916 l -1.852084,1.852083 v -2.645833 z"
				id="path19845"
			/><path
				style="fill:#656ee4;fill-opacity:1;fill-rule:evenodd;stroke-width:0.3;stroke-linecap:round;stroke-linejoin:round;stroke-miterlimit:3"
				d="m 81.75625,60.589583 -2.38125,0.79375 -1.322917,-1.322917 -6.085417,23.01875 v 8.202083 c 0,10e-7 1.852084,-2.116663 1.852084,-2.116663 v -7.14375 z"
				id="path19847"
			/><path
				style="fill:#656ee4;fill-opacity:1;fill-rule:evenodd;stroke-width:0.3;stroke-linecap:round;stroke-linejoin:round;stroke-miterlimit:3"
				d="M 78.58125,78.581249 76.2,80.168749 v 7.672917 l 2.38125,-2.38125 z"
				id="path19849"
			/><path
				style="fill:#1a1b23;fill-opacity:1;fill-rule:evenodd;stroke-width:0.3;stroke-linecap:round;stroke-linejoin:round;stroke-miterlimit:3"
				d="m 56.885416,76.729166 -11.1125,-6.415805 c -1.626139,6.22552 4.433105,8.984818 10.847917,11.972056 z"
				id="path19851"
			/><path
				style="fill:#ffffff;fill-opacity:1;fill-rule:evenodd;stroke-width:0.3;stroke-linecap:round;stroke-linejoin:round;stroke-miterlimit:3"
				d="m 48.154166,73.289582 5.027083,4.233334 -4.233333,0.264583 -1.058333,-2.645833 z"
				id="path19853"
			/><path
				style="fill:#f03633;fill-opacity:1;fill-rule:evenodd;stroke-width:0.3;stroke-linecap:round;stroke-linejoin:round;stroke-miterlimit:3"
				d="m 57.94375,82.55 -0.264584,-2.645834 h -2.43273 c -1.13847,-0.163497 -1.311065,-1.488179 -0.74227,-3.704167 l -2.116667,0.79375 C 47.815707,77.541244 48.224072,74.607282 48.41875,72.23125 l -2.645834,-6.614584 1.852083,6.085416 -0.264583,3.704167 c 0.583443,3.945885 2.87538,2.720626 5.027083,3.175 1.276027,3.161511 3.511748,3.703378 5.556251,3.968751 z"
				id="path19855"
			/><path
				style="fill:#1a1b23;fill-opacity:1;fill-rule:evenodd;stroke-width:0.3;stroke-linecap:round;stroke-linejoin:round;stroke-miterlimit:3"
				d="m 69.05625,76.729167 11.1125,-6.415805 c 1.626139,6.22552 -4.433105,8.984817 -10.847917,11.972055 z"
				id="path19857"
			/><path
				style="fill:#ffffff;fill-opacity:1;fill-rule:evenodd;stroke-width:0.3;stroke-linecap:round;stroke-linejoin:round;stroke-miterlimit:3"
				d="m 77.7875,73.289583 -5.027083,4.233334 4.233333,0.264583 1.058333,-2.645833 z"
				id="path19859"
			/><path
				style="fill:#f03633;fill-opacity:1;fill-rule:evenodd;stroke-width:0.3;stroke-linecap:round;stroke-linejoin:round;stroke-miterlimit:3"
				d="m 68.2625,82.55 0.264583,-2.645833 H 70.69523 C 72.227958,79.090816 71.682323,77.596099 71.4375,76.2 l 2.116667,0.79375 c 4.571792,0.547495 4.163427,-2.386467 3.968749,-4.762499 l 2.645834,-6.614584 -1.852083,6.085416 0.264583,3.704167 c -0.583443,3.945885 -2.87538,2.720626 -5.027083,3.175 C 72.27814,81.742761 70.307003,82.284627 68.2625,82.55 Z"
				id="path19861"
			/><path
				style="fill:#656ee4;fill-opacity:1;fill-rule:evenodd;stroke-width:0.3;stroke-linecap:round;stroke-linejoin:round;stroke-miterlimit:3"
				d="m 61.118749,95.514582 2.116667,1.852083 1.852083,-1.852083 c 0.04509,-12.633987 0.820771,-25.064278 1.322917,-37.570833 l -3.439583,-5.027083 -3.175,5.291667 c 0.546381,12.639792 0.890287,24.90813 1.322916,37.306249 z"
				id="path19863"
			/><path
				style="fill:#656ee4;fill-opacity:1;fill-rule:evenodd;stroke-width:0.3;stroke-linecap:round;stroke-linejoin:round;stroke-miterlimit:3"
				d="m 62.970833,49.477083 4.233333,5.820833 3.96875,-1.852083 6.614583,-6.35 -2.645833,-2.645834 -4.233334,-0.529166 -3.704166,-0.529167 -3.96875,-3.175 -4.497917,3.175 -6.879166,1.058333 -3.704167,2.645834 6.879167,6.35 3.96875,1.852083 z"
				id="path19865"
			/><path
				style="fill:#2e3797;fill-opacity:1;fill-rule:evenodd;stroke-width:0.3;stroke-linecap:round;stroke-linejoin:round;stroke-miterlimit:3"
				d="m 65.88125,53.445833 1.322916,1.852083 3.968751,-1.852083 -0.264585,-9.525 -3.704165,-0.529166 -1.322917,-1.058334 z"
				id="path19867"
			/><path
				style="fill:#2e3797;fill-opacity:1;fill-rule:evenodd;stroke-width:0.3;stroke-linecap:round;stroke-linejoin:round;stroke-miterlimit:3"
				d="m 55.5625,53.710417 3.439583,1.587499 1.058333,-1.5875 -0.264583,-11.112499 -1.058334,0.793749 -3.439583,0.529167 z"
				id="path19869"
			/><path
				style="fill:#2e3797;fill-opacity:1;fill-rule:evenodd;stroke-width:0.3;stroke-linecap:round;stroke-linejoin:round;stroke-miterlimit:3"
				d="m 48.154166,47.095833 3.704167,-2.645834 -0.264584,5.820834 z"
				id="path19871"
			/><path
				style="fill:#2e3797;fill-opacity:1;fill-rule:evenodd;stroke-width:0.3;stroke-linecap:round;stroke-linejoin:round;stroke-miterlimit:3"
				d="m 77.787499,47.095833 -2.645833,-2.645834 h -0.79375 l 0.264583,5.55625 z"
				id="path19873"
			/><path
				style="fill:#656ee4;fill-opacity:1;fill-rule:evenodd;stroke-width:0.3;stroke-linecap:round;stroke-linejoin:round;stroke-miterlimit:3"
				d="m 60.060416,39.422916 v -4.7625 l 2.910417,-2.645833 3.174999,2.645833 v 4.7625 L 62.970833,36.5125 Z"
				id="path19875"
			/><path
				style="fill:#656ee4;fill-opacity:1;fill-rule:evenodd;stroke-width:0.3;stroke-linecap:round;stroke-linejoin:round;stroke-miterlimit:3"
				d="m 74.083332,41.804166 -3.174999,-5.027083 -10e-7,4.7625 z"
				id="path19877"
			/><path
				style="fill:#656ee4;fill-opacity:1;fill-rule:evenodd;stroke-width:0.3;stroke-linecap:round;stroke-linejoin:round;stroke-miterlimit:3"
				d="m 52.122916,41.804166 3.175,-0.264583 10e-7,-4.7625 z"
				id="path19879"
			/><path
				style="fill:#2e3797;fill-opacity:1;fill-rule:evenodd;stroke-width:0.3;stroke-linecap:round;stroke-linejoin:round;stroke-miterlimit:3"
				d="m 55.297916,41.539583 3.439583,-0.529167 1.322917,-1.5875 v -4.7625 l -1.5875,1.5875 -3.175,0.529167 z"
				id="path19881"
			/><path
				style="fill:#2e3797;fill-opacity:1;fill-rule:evenodd;stroke-width:0.3;stroke-linecap:round;stroke-linejoin:round;stroke-miterlimit:3"
				d="m 70.908332,41.539583 v -4.7625 l -3.439583,-0.529167 -1.322917,-1.5875 v 4.7625 l 1.322917,1.5875 z"
				id="path19883"
			/><path
				style="fill:#43489a;fill-opacity:1;fill-rule:evenodd;stroke-width:0.3;stroke-linecap:round;stroke-linejoin:round;stroke-miterlimit:3"
				d="M 74.083332,41.804166 73.818749,37.30625 70.908332,36.777083 h 10e-7 z"
				id="path19885"
			/><path
				style="fill:#43489a;fill-opacity:1;fill-rule:evenodd;stroke-width:0.3;stroke-linecap:round;stroke-linejoin:round;stroke-miterlimit:3"
				d="m 52.122916,41.804166 0.264583,-4.497916 2.910417,-0.529167 z"
				id="path19887"
			/><path
				style="fill:#2e3797;fill-opacity:1;fill-rule:evenodd;stroke-width:0.3;stroke-linecap:round;stroke-linejoin:round;stroke-miterlimit:3"
				d="m 48.683333,43.920833 2.116666,-1.852084 1.322917,-0.264583 0.264583,-4.497916 -2.910416,0.529166 v 3.96875 z"
				id="path19889"
			/><path
				style="fill:#2e3797;fill-opacity:1;fill-rule:evenodd;stroke-width:0.3;stroke-linecap:round;stroke-linejoin:round;stroke-miterlimit:3"
				d="M 77.522916,43.920833 75.141666,42.068749 74.083332,41.804166 73.818749,37.30625 76.729166,38.1 v 3.704166 z"
				id="path19891"
			/><path
				style="fill:#2e3797;fill-opacity:1;fill-rule:evenodd;stroke-width:0.3;stroke-linecap:round;stroke-linejoin:round;stroke-miterlimit:3"
				d="m 75.406249,34.925 -0.264583,-3.704167 -1.852084,-0.264583 0.264584,3.704166 z"
				id="path19893"
			/><path
				style="fill:#2e3797;fill-opacity:1;fill-rule:evenodd;stroke-width:0.3;stroke-linecap:round;stroke-linejoin:round;stroke-miterlimit:3"
				d="m 51.064583,34.925 1.5875,-0.264584 V 30.95625 l -1.5875,0.264583 z"
				id="path19895"
			/><path
				style="fill:#43489a;fill-opacity:1;fill-rule:evenodd;stroke-width:0.3;stroke-linecap:round;stroke-linejoin:round;stroke-miterlimit:3"
				d="M 52.652083,34.660416 55.297916,34.13125 V 30.427083 L 52.652083,30.95625 Z"
				id="path19897"
			/><path
				style="fill:#43489a;fill-opacity:1;fill-rule:evenodd;stroke-width:0.3;stroke-linecap:round;stroke-linejoin:round;stroke-miterlimit:3"
				d="m 73.554166,34.660416 -0.264584,-3.704166 -2.38125,-0.529167 v 3.96875 z"
				id="path19899"
			/><path
				style="fill:#43489a;fill-opacity:1;fill-rule:evenodd;stroke-width:0.3;stroke-linecap:round;stroke-linejoin:round;stroke-miterlimit:3"
				d="m 60.060416,32.014583 2.910417,-2.645833 3.174999,2.645833 V 27.78125 l -2.910416,-2.645834 -3.174999,2.910417 z"
				id="path19901"
			/><path
				style="fill:#2e3797;fill-opacity:1;fill-rule:evenodd;stroke-width:0.3;stroke-linecap:round;stroke-linejoin:round;stroke-miterlimit:3"
				d="m 70.908332,30.427083 -2.38125,-0.264583 -2.38125,-2.38125 v 4.233333 l 2.116667,1.852083 2.645833,0.529167 z"
				id="path19903"
			/><path
				style="fill:#2e3797;fill-opacity:1;fill-rule:evenodd;stroke-width:0.3;stroke-linecap:round;stroke-linejoin:round;stroke-miterlimit:3"
				d="m 55.297916,34.13125 2.910417,-0.264584 1.852083,-1.852083 v -3.96875 l -2.38125,2.116667 -2.38125,0.264583 z"
				id="path19905"
			/><g id="g19937"
				><path
					style="opacity:1;fill:#20212a;fill-opacity:1;fill-rule:evenodd;stroke-width:0.3;stroke-linecap:round;stroke-linejoin:round;stroke-miterlimit:3"
					d="M 79.904166,6.3499999 V 33.072916 h 11.1125 L 111.91875,12.170833 V 6.3499999 Z"
					id="path19907"
				/><path
					style="opacity:1;fill:#3f2980;fill-opacity:1;fill-rule:evenodd;stroke-width:0.3;stroke-linecap:round;stroke-linejoin:round;stroke-miterlimit:3"
					d="M 79.904166,43.656249 91.28125,32.808333 c -0.878758,-0.803637 -1.933277,-1.963992 -3.439584,-2.116667 h -7.9375 z"
					id="path19909"
				/><path
					style="opacity:1;fill:#3f2980;fill-opacity:1;fill-rule:evenodd;stroke-width:0.3;stroke-linecap:round;stroke-linejoin:round;stroke-miterlimit:3"
					d="M 79.904167,26.458333 H 92.339582 C 91.353961,25.021982 90.17357,23.7183 88.106249,23.01875 h -8.202082 z"
					id="path19911"
				/><path
					style="opacity:1;fill:#3f2980;fill-opacity:1;fill-rule:evenodd;stroke-width:0.3;stroke-linecap:round;stroke-linejoin:round;stroke-miterlimit:3"
					d="m 93.397915,26.458333 c 1.754777,-2.113267 4.467552,-2.753953 7.143755,-2.910416 l -3.175003,3.175 z"
					id="path19913"
				/><path
					style="opacity:1;fill:#3f2980;fill-opacity:1;fill-rule:evenodd;stroke-width:0.3;stroke-linecap:round;stroke-linejoin:round;stroke-miterlimit:3"
					d="m 94.456249,18.785416 c 1.60599,-2.544057 4.169708,-3.470609 7.143751,-3.704166 2.19995,0.264837 3.87912,1.055078 5.02708,2.38125 l -1.5875,1.322916 z"
					id="path19915"
				/><path
					style="opacity:1;fill:#3f2980;fill-opacity:1;fill-rule:evenodd;stroke-width:0.3;stroke-linecap:round;stroke-linejoin:round;stroke-miterlimit:3"
					d="M 79.904166,18.785416 H 92.339582 C 91.992298,15.375473 86.998854,14.302936 79.904166,14.2875 Z"
					id="path19917"
				/><path
					style="opacity:1;fill:#3f2980;fill-opacity:1;fill-rule:evenodd;stroke-width:0.3;stroke-linecap:round;stroke-linejoin:round;stroke-miterlimit:3"
					d="M 79.904166,10.31875 V 7.4083332 c 1.430558,-0.3967694 2.946708,-0.756533 5.820833,-0.5291666 3.810188,0.3021167 5.326402,1.8108767 6.614584,3.4395834 z"
					id="path19919"
				/><path
					style="opacity:1;fill:#3f2980;fill-opacity:1;fill-rule:evenodd;stroke-width:0.3;stroke-linecap:round;stroke-linejoin:round;stroke-miterlimit:3"
					d="m 97.366665,10.31875 c 1.616413,-2.0937159 3.963395,-3.1647514 6.879165,-3.4395834 3.92397,0.6727682 5.17768,1.9561199 5.55625,3.4395834 z"
					id="path19921"
				/><path
					style="opacity:1;fill:#14151d;fill-opacity:1;fill-rule:evenodd;stroke-width:0.3;stroke-linecap:round;stroke-linejoin:round;stroke-miterlimit:3"
					d="m 91.545832,40.216666 2.38125,-5.55625 11.112498,10.054167 z"
					id="path19923"
				/><path
					style="opacity:1;fill:#14151d;fill-opacity:1;fill-rule:evenodd;stroke-width:0.3;stroke-linecap:round;stroke-linejoin:round;stroke-miterlimit:3"
					d="m 90.752082,33.3375 5.55625,-5.820834 21.695838,5.820834 z"
					id="path19925"
				/><path
					style="opacity:1;fill:#14151d;fill-opacity:1;fill-rule:evenodd;stroke-width:0.3;stroke-linecap:round;stroke-linejoin:round;stroke-miterlimit:3"
					d="m 77.522916,30.691666 v -5.027083 l -9.525,-2.645833 z"
					id="path19927"
				/><path
					style="opacity:1;fill:#14151d;fill-opacity:1;fill-rule:evenodd;stroke-width:0.3;stroke-linecap:round;stroke-linejoin:round;stroke-miterlimit:3"
					d="M 77.522916,23.283333 V 15.875 L 64.558333,11.377083 Z"
					id="path19929"
				/><path
					style="opacity:1;fill:#14151d;fill-opacity:1;fill-rule:evenodd;stroke-width:0.3;stroke-linecap:round;stroke-linejoin:round;stroke-miterlimit:3"
					d="M 77.522916,13.758333 70.643749,5.0270833 77.522916,8.4666666 Z"
					id="path19931"
				/><path
					style="opacity:1;fill:#14151d;fill-opacity:1;fill-rule:evenodd;stroke-width:0.3;stroke-linecap:round;stroke-linejoin:round;stroke-miterlimit:3"
					d="M 109.80208,14.022916 V 6.3499999 h 13.22917 z"
					id="path19933"
				/><path
					style="opacity:1;fill:#14151d;fill-opacity:1;fill-rule:evenodd;stroke-width:0.3;stroke-linecap:round;stroke-linejoin:round;stroke-miterlimit:3"
					d="M 106.62708,17.4625 120.65,20.108333 100.27708,23.547916 Z"
					id="path19935"
				/></g
			><g id="g19969" transform="matrix(-1,0,0,1,126.20598,0)"
				><path
					style="opacity:1;fill:#20212a;fill-opacity:1;fill-rule:evenodd;stroke-width:0.3;stroke-linecap:round;stroke-linejoin:round;stroke-miterlimit:3"
					d="M 79.904166,6.3499999 V 33.072916 h 11.1125 L 111.91875,12.170833 V 6.3499999 Z"
					id="path19939"
				/><path
					style="opacity:1;fill:#3f2980;fill-opacity:1;fill-rule:evenodd;stroke-width:0.3;stroke-linecap:round;stroke-linejoin:round;stroke-miterlimit:3"
					d="M 79.904166,43.656249 91.28125,32.808333 c -0.878758,-0.803637 -1.933277,-1.963992 -3.439584,-2.116667 h -7.9375 z"
					id="path19941"
				/><path
					style="opacity:1;fill:#3f2980;fill-opacity:1;fill-rule:evenodd;stroke-width:0.3;stroke-linecap:round;stroke-linejoin:round;stroke-miterlimit:3"
					d="M 79.904167,26.458333 H 92.339582 C 91.353961,25.021982 90.17357,23.7183 88.106249,23.01875 h -8.202082 z"
					id="path19943"
				/><path
					style="opacity:1;fill:#3f2980;fill-opacity:1;fill-rule:evenodd;stroke-width:0.3;stroke-linecap:round;stroke-linejoin:round;stroke-miterlimit:3"
					d="m 93.397915,26.458333 c 1.754777,-2.113267 4.467552,-2.753953 7.143755,-2.910416 l -3.175003,3.175 z"
					id="path19945"
				/><path
					style="opacity:1;fill:#3f2980;fill-opacity:1;fill-rule:evenodd;stroke-width:0.3;stroke-linecap:round;stroke-linejoin:round;stroke-miterlimit:3"
					d="m 94.456249,18.785416 c 1.60599,-2.544057 4.169708,-3.470609 7.143751,-3.704166 2.19995,0.264837 3.87912,1.055078 5.02708,2.38125 l -1.5875,1.322916 z"
					id="path19947"
				/><path
					style="opacity:1;fill:#3f2980;fill-opacity:1;fill-rule:evenodd;stroke-width:0.3;stroke-linecap:round;stroke-linejoin:round;stroke-miterlimit:3"
					d="M 79.904166,18.785416 H 92.339582 C 91.992298,15.375473 86.998854,14.302936 79.904166,14.2875 Z"
					id="path19949"
				/><path
					style="opacity:1;fill:#3f2980;fill-opacity:1;fill-rule:evenodd;stroke-width:0.3;stroke-linecap:round;stroke-linejoin:round;stroke-miterlimit:3"
					d="M 79.904166,10.31875 V 7.4083332 c 1.430558,-0.3967694 2.946708,-0.756533 5.820833,-0.5291666 3.810188,0.3021167 5.326402,1.8108767 6.614584,3.4395834 z"
					id="path19951"
				/><path
					style="opacity:1;fill:#3f2980;fill-opacity:1;fill-rule:evenodd;stroke-width:0.3;stroke-linecap:round;stroke-linejoin:round;stroke-miterlimit:3"
					d="m 97.366665,10.31875 c 1.616413,-2.0937159 3.963395,-3.1647514 6.879165,-3.4395834 3.92397,0.6727682 5.17768,1.9561199 5.55625,3.4395834 z"
					id="path19953"
				/><path
					style="opacity:1;fill:#14151d;fill-opacity:1;fill-rule:evenodd;stroke-width:0.3;stroke-linecap:round;stroke-linejoin:round;stroke-miterlimit:3"
					d="m 91.545832,40.216666 2.38125,-5.55625 11.112498,10.054167 z"
					id="path19955"
				/><path
					style="opacity:1;fill:#14151d;fill-opacity:1;fill-rule:evenodd;stroke-width:0.3;stroke-linecap:round;stroke-linejoin:round;stroke-miterlimit:3"
					d="m 90.752082,33.3375 5.55625,-5.820834 21.695838,5.820834 z"
					id="path19957"
				/><path
					style="opacity:1;fill:#14151d;fill-opacity:1;fill-rule:evenodd;stroke-width:0.3;stroke-linecap:round;stroke-linejoin:round;stroke-miterlimit:3"
					d="m 77.522916,30.691666 v -5.027083 l -9.525,-2.645833 z"
					id="path19959"
				/><path
					style="opacity:1;fill:#14151d;fill-opacity:1;fill-rule:evenodd;stroke-width:0.3;stroke-linecap:round;stroke-linejoin:round;stroke-miterlimit:3"
					d="M 77.522916,23.283333 V 15.875 L 64.558333,11.377083 Z"
					id="path19961"
				/><path
					style="opacity:1;fill:#14151d;fill-opacity:1;fill-rule:evenodd;stroke-width:0.3;stroke-linecap:round;stroke-linejoin:round;stroke-miterlimit:3"
					d="M 77.522916,13.758333 70.643749,5.0270833 77.522916,8.4666666 Z"
					id="path19963"
				/><path
					style="opacity:1;fill:#14151d;fill-opacity:1;fill-rule:evenodd;stroke-width:0.3;stroke-linecap:round;stroke-linejoin:round;stroke-miterlimit:3"
					d="M 109.80208,14.022916 V 6.3499999 h 13.22917 z"
					id="path19965"
				/><path
					style="opacity:1;fill:#14151d;fill-opacity:1;fill-rule:evenodd;stroke-width:0.3;stroke-linecap:round;stroke-linejoin:round;stroke-miterlimit:3"
					d="M 106.62708,17.4625 120.65,20.108333 100.27708,23.547916 Z"
					id="path19967"
				/></g
			><path
				style="opacity:1;fill:#712c29;fill-opacity:1;fill-rule:evenodd;stroke-width:1.2;stroke-linecap:round;stroke-linejoin:round;stroke-miterlimit:3;paint-order:stroke fill markers"
				d="m 72.760416,91.545832 -1.852084,2.116667 0.264584,-1.5875 z"
				id="path19971"
			/><path
				style="opacity:1;fill:#712c29;fill-opacity:1;fill-rule:evenodd;stroke-width:1.2;stroke-linecap:round;stroke-linejoin:round;stroke-miterlimit:3;paint-order:stroke fill markers"
				d="m 53.445833,91.545832 v -1.171726 l 1.5875,1.700893 z"
				id="path19973"
			/></g
		></svg
	>
</div>
