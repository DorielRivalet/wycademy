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
				id="filter310"
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
					id="feComposite309"
				/><feColorMatrix
					in="composite1"
					values="1"
					type="saturate"
					result="colormatrix1"
					id="feColorMatrix309"
				/><feFlood
					flood-opacity="1"
					flood-color="rgb(0,0,0)"
					result="flood1"
					id="feFlood309"
				/><feBlend
					in="flood1"
					in2="colormatrix1"
					mode="multiply"
					result="blend1"
					id="feBlend309"
				/><feBlend
					in2="blend1"
					mode="screen"
					result="blend2"
					id="feBlend310"
				/><feColorMatrix
					in="blend2"
					values="1"
					type="saturate"
					result="colormatrix2"
					id="feColorMatrix310"
				/><feComposite
					in="colormatrix2"
					in2="SourceGraphic"
					operator="in"
					k2="1"
					result="composite2"
					id="feComposite310"
				/></filter
			><filter
				style="color-interpolation-filters:sRGB"
				id="filter312"
				x="-0.30399966"
				y="-0.30399966"
				width="1.6079993"
				height="1.6079993"
				><feGaussianBlur
					stdDeviation="1.1986074"
					id="feGaussianBlur312"
				/></filter
			><filter
				style="color-interpolation-filters:sRGB"
				id="filter313"
				x="-0.29882066"
				y="-0.29882066"
				width="1.5976413"
				height="1.5976413"
				><feGaussianBlur
					stdDeviation="1.1986074"
					id="feGaussianBlur313"
				/></filter
			><filter
				style="color-interpolation-filters:sRGB"
				id="filter314"
				x="-0.28671648"
				y="-0.28671648"
				width="1.573433"
				height="1.573433"
				><feGaussianBlur
					stdDeviation="1.1986074"
					id="feGaussianBlur314"
				/></filter
			></defs
		>
		<!-- svelte-ignore a11y-no-static-element-interactions -->
		<!-- svelte-ignore a11y-mouse-events-have-key-events -->
		<g id="layer1"
			><g
				id="g309"
				style="filter:url(#filter310)"
				transform="translate(1.0583333,1.5875)"
				><path
					style="opacity:1;fill:#a060ee;fill-opacity:1;fill-rule:evenodd;stroke-width:0.3;stroke-linecap:round;stroke-miterlimit:4.1;paint-order:stroke fill markers"
					d="m 91.559662,33 h 2.440339 l 5.095955,1.400498 3.274694,0.708747 3.2587,1.512564 0.82541,0.825405 -0.27153,6.005222 -4.39205,2.691415 h -1.990067 l -4.437862,-0.996664 -2.044845,-2.044845 h -1.758744 z"
					id="path160"
				/><path
					style="opacity:1;fill:#ffffff;fill-opacity:1;fill-rule:evenodd;stroke-width:0.3;stroke-linecap:round;stroke-miterlimit:4.1;paint-order:stroke fill markers"
					d="m 93.000001,37.512759 h 3.371228 L 102.27378,38 105,39.000001 v 4.13689 h -3.65429 l -0.0371,2.010296 H 100 l -1.910678,-1.91068 h -3.425751 l -1.951789,-1.126866 v -4.578318 z"
					id="path161"
				/><path
					style="opacity:1;fill:#c6f1ff;fill-opacity:1;fill-rule:evenodd;stroke-width:0.398132;stroke-linecap:round;stroke-miterlimit:4.1;paint-order:stroke fill markers"
					d="m 93.977226,42.840246 0.02278,-5.2718 -1.288218,-0.03713 v 4.578318 z"
					id="path162"
				/><path
					style="opacity:1;fill:#e31212;fill-opacity:1;fill-rule:evenodd;stroke-width:0.3;stroke-linecap:round;stroke-miterlimit:4.1;paint-order:stroke fill markers"
					d="m 109.4621,79.000002 -4.90873,-13 -4.55337,13 z"
					id="path163"
				/><path
					style="opacity:1;fill:#e31212;fill-opacity:1;fill-rule:evenodd;stroke-width:0.3;stroke-linecap:round;stroke-miterlimit:4.1;paint-order:stroke fill markers"
					d="m 116.66589,85.000002 c 0,0 5.09745,-10.000002 5.00464,-10.000002 -0.0928,0 -9.87471,5 -9.87471,5 z"
					id="path164"
				/><path
					style="opacity:1;fill:#e31212;fill-opacity:1;fill-rule:evenodd;stroke-width:0.3;stroke-linecap:round;stroke-miterlimit:4.1;paint-order:stroke fill markers"
					d="m 86.000002,87.000002 h 6.000001 v 5.635908 z"
					id="path165"
				/><path
					style="opacity:1;fill:#e31212;fill-opacity:1;fill-rule:evenodd;stroke-width:0.3;stroke-linecap:round;stroke-miterlimit:4.1;paint-order:stroke fill markers"
					d="m 92.000003,95.313398 v 5.328732 l -6.000001,-5.249981 z"
					id="path166"
				/><path
					style="opacity:1;fill:#e31212;fill-opacity:1;fill-rule:evenodd;stroke-width:0.3;stroke-linecap:round;stroke-miterlimit:4.1;paint-order:stroke fill markers"
					d="m 123,87.000002 h -6 v 5.635908 z"
					id="path167"
				/><path
					style="opacity:1;fill:#e31212;fill-opacity:1;fill-rule:evenodd;stroke-width:0.3;stroke-linecap:round;stroke-miterlimit:4.1;paint-order:stroke fill markers"
					d="m 117,95.313398 v 5.328732 l 6,-5.249981 z"
					id="path168"
				/><path
					style="opacity:1;fill:#e31212;fill-opacity:1;fill-rule:evenodd;stroke-width:0.3;stroke-linecap:round;stroke-miterlimit:4.1;paint-order:stroke fill markers"
					d="m 93.000003,85.000002 c 0,0 -5.09745,-10.000002 -5.00464,-10.000002 0.0928,0 9.87471,5 9.87471,5 z"
					id="path169"
				/><path
					style="opacity:1;fill:#3a3138;fill-opacity:1;fill-rule:evenodd;stroke-width:0.3;stroke-linecap:round;stroke-miterlimit:4.1;paint-order:stroke fill markers"
					d="m 93.000001,100 0.419952,1.53132 6.422273,6.58692 h 9.488624 L 116,102.34803 v -2.17943 h -4 z"
					id="path170"
				/><path
					style="opacity:1;fill:#161617;fill-opacity:1;fill-rule:evenodd;stroke-width:0.3;stroke-linecap:round;stroke-miterlimit:4.1;paint-order:stroke fill markers"
					d="M 93.000001,85.000001 V 100 h 4 l 3.782749,3.78275 h 7.6031 L 112,100.1686 h 4 V 87.000002 L 109.4621,79 h -7.8356 z"
					id="path171"
				/><path
					style="opacity:1;fill:#e31212;fill-opacity:1;fill-rule:evenodd;stroke-width:0.3;stroke-linecap:round;stroke-miterlimit:4.1;paint-order:stroke fill markers"
					d="m 101,91.000002 h 7.58469 L 104.5,81.262179 Z"
					id="path172"
				/><path
					style="opacity:1;fill:#e31212;fill-opacity:1;fill-rule:evenodd;stroke-width:0.220893;stroke-linecap:round;stroke-miterlimit:4.1;paint-order:stroke fill markers"
					d="m 102,98.898427 h 5.58469 l -3.0076,-7.170058 z"
					id="path173"
				/><path
					style="opacity:1;fill:#e31212;fill-opacity:1;fill-rule:evenodd;stroke-width:0.253747;stroke-linecap:round;stroke-miterlimit:4.1;paint-order:stroke fill markers"
					d="M 101.58469,108.11824 H 108 l -3.45493,-8.236472 z"
					id="path174"
				/><path
					style="opacity:1;fill:#3c3239;fill-opacity:1;fill-rule:evenodd;stroke-width:0.3;stroke-linecap:round;stroke-miterlimit:4.1;paint-order:stroke fill markers"
					d="m 93.000001,100 h 4.000002 l 3.782747,3.78275 z"
					id="path175"
				/><path
					style="opacity:1;fill:#151415;fill-opacity:1;fill-rule:evenodd;stroke-width:0.3;stroke-linecap:round;stroke-miterlimit:4.1;paint-order:stroke fill markers"
					d="m 101,110 h 7.8846 v 4.60708 c -0.9945,1.9104 -2.3455,3.50302 -4.43623,4.43623 H 91.244665 V 116 h 9.187465 l 0.57735,-1 z"
					id="path176"
				/><path
					style="opacity:1;fill:#332b32;fill-opacity:1;fill-rule:evenodd;stroke-width:0.3;stroke-linecap:round;stroke-miterlimit:4.1;paint-order:stroke fill markers"
					d="m 91.244665,116 v -1.66125 L 98.759588,110 H 101 v 5 l -0.57735,1 z"
					id="path177"
				/><path
					style="opacity:1;fill:#e31212;fill-opacity:1;fill-rule:evenodd;stroke-width:0.3;stroke-linecap:round;stroke-miterlimit:4.1;paint-order:stroke fill markers"
					d="M 91.244665,114.33875 V 110 h 7.514915 z"
					id="path178"
				/><path
					style="opacity:1;fill:#e31212;fill-opacity:1;fill-rule:evenodd;stroke-width:0.3;stroke-linecap:round;stroke-miterlimit:4.1;paint-order:stroke fill markers"
					d="m 90.00464,119.04331 h 8.241299 l -8.245938,5.22583 z"
					id="path179"
				/><path
					style="opacity:1;fill:#e31212;fill-opacity:1;fill-rule:evenodd;stroke-width:0.3;stroke-linecap:round;stroke-miterlimit:4.1;paint-order:stroke fill markers"
					d="m 79.000002,119 h 8.933764 l -8.947808,5.26914 z"
					id="path180"
				/><path
					style="opacity:1;fill:#e31212;fill-opacity:1;fill-rule:evenodd;stroke-width:0.3;stroke-linecap:round;stroke-miterlimit:4.1;paint-order:stroke fill markers"
					d="m 80,116 h 3.947192 l 4.488733,-3 H 80 Z"
					id="path181"
				/><path
					style="opacity:1;fill:#171617;fill-opacity:1;fill-rule:evenodd;stroke-width:0.3;stroke-linecap:round;stroke-miterlimit:4.1;paint-order:stroke fill markers"
					d="m 80,116 v 3 h 9.118423 v -3 h -0.682498 v 0 z"
					id="path182"
				/><path
					style="opacity:1;fill:#332b32;fill-opacity:1;fill-rule:evenodd;stroke-width:0.3;stroke-linecap:round;stroke-miterlimit:4.1;paint-order:stroke fill markers"
					d="M 89.118423,116 88.435925,113 84,116 Z"
					id="path183"
				/><rect
					style="opacity:1;fill:#332b32;fill-opacity:1;fill-rule:evenodd;stroke-width:0.3;stroke-linecap:round;stroke-miterlimit:4.1;paint-order:stroke fill markers"
					id="rect183"
					width="7.4431553"
					height="2.5591645"
					x="80"
					y="110.44083"
				/><rect
					style="opacity:1;fill:#6a4342;fill-opacity:1;fill-rule:evenodd;stroke-width:0.3;stroke-linecap:round;stroke-miterlimit:4.1;paint-order:stroke fill markers"
					id="rect184"
					width="4.5592093"
					height="2.1160002"
					x="80"
					y="108.32482"
				/><rect
					style="opacity:1;fill:#eee6a4;fill-opacity:1;fill-rule:evenodd;stroke-width:0.3;stroke-linecap:round;stroke-miterlimit:4.1;paint-order:stroke fill markers"
					id="rect185"
					width="2.8839417"
					height="2.1160049"
					x="84.559212"
					y="108.32482"
				/><path
					style="opacity:1;fill:#e31212;fill-opacity:1;fill-rule:evenodd;stroke-width:0.3;stroke-linecap:round;stroke-miterlimit:4.1;paint-order:stroke fill markers"
					d="m 68.007024,119 h 8.933764 l -8.947808,5.26914 z"
					id="path185"
				/><path
					style="opacity:1;fill:#e31212;fill-opacity:1;fill-rule:evenodd;stroke-width:0.3;stroke-linecap:round;stroke-miterlimit:4.1;paint-order:stroke fill markers"
					d="m 57.007024,119 h 8.933764 l -8.947808,5.26914 z"
					id="path186"
				/><path
					style="opacity:1;fill:#e31212;fill-opacity:1;fill-rule:evenodd;stroke-width:0.3;stroke-linecap:round;stroke-miterlimit:4.1;paint-order:stroke fill markers"
					d="m 48.007023,119 h 7.992979 l -8.007023,5.26914 z"
					id="path187"
				/><path
					style="opacity:1;fill:#171617;fill-opacity:1;fill-rule:evenodd;stroke-width:0.3;stroke-linecap:round;stroke-miterlimit:4.1;paint-order:stroke fill markers"
					d="m 69.000002,116 v 3 h 9.118423 v -3 h -0.682498 v 0 z"
					id="path188"
				/><path
					style="opacity:1;fill:#171617;fill-opacity:1;fill-rule:evenodd;stroke-width:0.327509;stroke-linecap:round;stroke-miterlimit:4.1;paint-order:stroke fill markers"
					d="M 58.007024,115.42459 V 119 h 9.118423 v -3.57541 h -0.682498 v 0 z"
					id="path189"
				/><path
					style="opacity:1;fill:#171617;fill-opacity:1;fill-rule:evenodd;stroke-width:0.303514;stroke-linecap:round;stroke-miterlimit:4.1;paint-order:stroke fill markers"
					d="m 49.000001,115 v 4 h 7.000001 v -4 h -0.523938 v 0 z"
					id="path190"
				/><path
					style="opacity:1;fill:#e31212;fill-opacity:1;fill-rule:evenodd;stroke-width:0.3;stroke-linecap:round;stroke-miterlimit:4.1;paint-order:stroke fill markers"
					d="m 69.000001,116 h 3 l 5.215776,-4 h -8.215776 z"
					id="path191"
				/><path
					style="opacity:1;fill:#e31212;fill-opacity:1;fill-rule:evenodd;stroke-width:0.3;stroke-linecap:round;stroke-miterlimit:4.1;paint-order:stroke fill markers"
					d="m 58.007024,115.42459 h 2.521977 L 66.691414,111 H 58 Z"
					id="path192"
				/><path
					style="opacity:1;fill:#e31212;fill-opacity:1;fill-rule:evenodd;stroke-width:0.3;stroke-linecap:round;stroke-miterlimit:4.1;paint-order:stroke fill markers"
					d="m 49.000002,115 6.350346,-5 h -6.350346 z"
					id="path193"
				/><path
					style="opacity:1;fill:#332b32;fill-opacity:1;fill-rule:evenodd;stroke-width:0.3;stroke-linecap:round;stroke-miterlimit:4.1;paint-order:stroke fill markers"
					d="m 49.000002,115 6.350346,-5 0.649653,5 z"
					id="path194"
				/><path
					style="opacity:1;fill:#332b32;fill-opacity:1;fill-rule:evenodd;stroke-width:0.3;stroke-linecap:round;stroke-miterlimit:4.1;paint-order:stroke fill markers"
					d="M 60.529001,115.42459 66.691414,111 l 0.434033,4.42459 z"
					id="path195"
				/><path
					style="opacity:1;fill:#332b32;fill-opacity:1;fill-rule:evenodd;stroke-width:0.3;stroke-linecap:round;stroke-miterlimit:4.1;paint-order:stroke fill markers"
					d="m 77.215777,112 0.902647,4 h -6.118423 z"
					id="path196"
				/><rect
					style="opacity:1;fill:#332b32;fill-opacity:1;fill-rule:evenodd;stroke-width:0.3;stroke-linecap:round;stroke-miterlimit:4.1;paint-order:stroke fill markers"
					id="rect196"
					width="6.3503466"
					height="2.7166464"
					x="49"
					y="107.28336"
				/><rect
					style="opacity:1;fill:#332b32;fill-opacity:1;fill-rule:evenodd;stroke-width:0.3;stroke-linecap:round;stroke-miterlimit:4.1;paint-order:stroke fill markers"
					id="rect197"
					width="8.6914129"
					height="2.8051071"
					x="58"
					y="108.19489"
				/><rect
					style="opacity:1;fill:#332b32;fill-opacity:1;fill-rule:evenodd;stroke-width:0.3;stroke-linecap:round;stroke-miterlimit:4.1;paint-order:stroke fill markers"
					id="rect198"
					width="7.6234684"
					height="2.6171784"
					x="69"
					y="109.38282"
				/><rect
					style="opacity:1;fill:#6a4342;fill-opacity:1;fill-rule:evenodd;stroke-width:0.3;stroke-linecap:round;stroke-miterlimit:4.1;paint-order:stroke fill markers"
					id="rect199"
					width="3.6048071"
					height="2.2833605"
					x="49"
					y="105"
				/><rect
					style="opacity:1;fill:#6a4342;fill-opacity:1;fill-rule:evenodd;stroke-width:0.3;stroke-linecap:round;stroke-miterlimit:4.1;paint-order:stroke fill markers"
					id="rect200"
					width="5.498517"
					height="2.1948898"
					x="58"
					y="106.00001"
				/><rect
					style="opacity:1;fill:#6a4342;fill-opacity:1;fill-rule:evenodd;stroke-width:0.3;stroke-linecap:round;stroke-miterlimit:4.1;paint-order:stroke fill markers"
					id="rect201"
					width="4.6705337"
					height="2.2853675"
					x="69"
					y="107.09745"
				/><rect
					style="opacity:1;fill:#eee6a4;fill-opacity:1;fill-rule:evenodd;stroke-width:0.3;stroke-linecap:round;stroke-miterlimit:4.1;paint-order:stroke fill markers"
					id="rect202"
					width="3.1928978"
					height="2.1948853"
					x="63.498512"
					y="106.00001"
				/><rect
					style="opacity:1;fill:#eee6a4;fill-opacity:1;fill-rule:evenodd;stroke-width:0.3;stroke-linecap:round;stroke-miterlimit:4.1;paint-order:stroke fill markers"
					id="rect203"
					width="2.952934"
					height="2.2853696"
					x="73.670532"
					y="107.09745"
				/><rect
					style="opacity:1;fill:#eee6a4;fill-opacity:1;fill-rule:evenodd;stroke-width:0.3;stroke-linecap:round;stroke-miterlimit:4.1;paint-order:stroke fill markers"
					id="rect204"
					width="2.7455368"
					height="2.2833633"
					x="52.604805"
					y="105"
				/><path
					style="opacity:1;fill:#2f1514;fill-opacity:1;fill-rule:evenodd;stroke-width:0.3;stroke-linecap:round;stroke-miterlimit:4.1;paint-order:stroke fill markers"
					d="m 48.000001,107.65661 v -3.45243 h -3.000002 z"
					id="path204"
				/><path
					style="opacity:1;fill:#623d3c;fill-opacity:1;fill-rule:evenodd;stroke-width:0.3;stroke-linecap:round;stroke-miterlimit:4.1;paint-order:stroke fill markers"
					d="m 48.000001,104.20418 v -0.773 h -3.000002 v 0.773 z"
					id="path205"
				/><path
					style="opacity:1;fill:#351818;fill-opacity:1;fill-rule:evenodd;stroke-width:0.3;stroke-linecap:round;stroke-miterlimit:4.1;paint-order:stroke fill markers"
					d="m 44.427962,99.592134 v 2.756236 h -1.036873 v -3.149986 h 1.036873 z"
					id="path206"
				/><path
					style="opacity:1;fill:#623d3c;fill-opacity:1;fill-rule:evenodd;stroke-width:0.3;stroke-linecap:round;stroke-miterlimit:4.1;paint-order:stroke fill markers"
					d="m 44.427962,101.25244 h 2.014681 v -0.82687 h -2.014681 z"
					id="path207"
				/><path
					style="opacity:1;fill:#eee6a4;fill-opacity:1;fill-rule:evenodd;stroke-width:0.3;stroke-linecap:round;stroke-miterlimit:4.1;paint-order:stroke fill markers"
					d="m 48.000001,103.43118 h -2.445477 v -1.6632 h 1.104408 v -0.97912 h 1.341069 z"
					id="path208"
				/><rect
					style="opacity:1;fill:#eee6a4;fill-opacity:1;fill-rule:evenodd;stroke-width:0.3;stroke-linecap:round;stroke-miterlimit:4.1;paint-order:stroke fill markers"
					id="rect208"
					width="2.9399893"
					height="1.8834313"
					x="44.427959"
					y="98.542137"
				/><rect
					style="opacity:1;fill:#eee6a4;fill-opacity:1;fill-rule:evenodd;stroke-width:0.3;stroke-linecap:round;stroke-miterlimit:4.1;paint-order:stroke fill markers"
					id="rect209"
					width="3.8324859"
					height="3.9637356"
					x="45.661705"
					y="90.562164"
				/><rect
					style="opacity:1;fill:#361818;fill-opacity:1;fill-rule:evenodd;stroke-width:0.3;stroke-linecap:round;stroke-miterlimit:4.1;paint-order:stroke fill markers"
					id="rect210"
					width="2.3756137"
					height="6.6281042"
					x="43.286087"
					y="90.562164"
				/><rect
					style="opacity:1;fill:#623d3c;fill-opacity:1;fill-rule:evenodd;stroke-width:0.3;stroke-linecap:round;stroke-miterlimit:4.1;paint-order:stroke fill markers"
					id="rect211"
					width="3.8324859"
					height="2.6643667"
					x="45.661701"
					y="94.525902"
				/><path
					style="opacity:1;fill:#100f10;fill-opacity:1;fill-rule:evenodd;stroke-width:0.3;stroke-linecap:round;stroke-miterlimit:4.1;paint-order:stroke fill markers"
					d="m 47.000001,119.43706 v -7.1772 H 36.454757 l -4.250582,4.25058 c 0.239136,0.63186 0.522324,1.248 1.243621,1.70766 3.682865,1.27111 8.847995,1.01224 13.552205,1.21896 z"
					id="path211"
				/><path
					style="opacity:1;fill:#362e35;fill-opacity:1;fill-rule:evenodd;stroke-width:0.3;stroke-linecap:round;stroke-miterlimit:4.1;paint-order:stroke fill markers"
					d="m 47.000001,112.25986 v -1.57714 l -4.08141,-4.54104 -6.463834,6.11818 z"
					id="path212"
				/><path
					style="opacity:1;fill:#362e35;fill-opacity:1;fill-rule:evenodd;stroke-width:0.3;stroke-linecap:round;stroke-miterlimit:4.1;paint-order:stroke fill markers"
					d="m 35.000001,109.41995 0.06264,-10.221566 h 5.716939 l 0.01857,4.619296 z"
					id="path213"
				/><rect
					style="opacity:1;fill:#362e35;fill-opacity:1;fill-rule:evenodd;stroke-width:0.3;stroke-linecap:round;stroke-miterlimit:4.1;paint-order:stroke fill markers"
					id="rect213"
					width="5.7981491"
					height="6.1438513"
					x="35"
					y="90.951279"
				/><rect
					style="opacity:1;fill:#100f10;fill-opacity:1;fill-rule:evenodd;stroke-width:0.3;stroke-linecap:round;stroke-miterlimit:4.1;paint-order:stroke fill markers"
					id="rect214"
					width="6.7679815"
					height="6.0951281"
					x="28.232018"
					y="91"
				/><path
					style="opacity:1;fill:#100f10;fill-opacity:1;fill-rule:evenodd;stroke-width:0.3;stroke-linecap:round;stroke-miterlimit:4.1;paint-order:stroke fill markers"
					d="M 35.062641,99.198384 H 27.999999 V 111 l 2.255221,3.67285 4.744781,-5.2529 z"
					id="path214"
				/><path
					style="opacity:1;fill:#171617;fill-opacity:1;fill-rule:evenodd;stroke-width:0.3;stroke-linecap:round;stroke-miterlimit:4.1;paint-order:stroke fill markers"
					d="m 42.37587,74.000002 h 6.069605 V 88.87239 H 29.438515 V 87.795824 H 28.38051 V 62.527269 L 42,60.000001 h 16.458536 l 1.541465,1.541465 V 80 l 13.26348,-1.999998 v -8.674008 l 3.543737,-3.543736 V 86.414683 L 55,96.000003 H 52.421056 L 51.000001,94.578944 V 72.000001 H 39.238978 v 9.225057 L 40.798144,82.000002 42,81.000001 v -6.999999 z"
					id="path215"
				/><path
					style="opacity:1;fill:#41373d;fill-opacity:1;fill-rule:evenodd;stroke-width:0.3;stroke-linecap:round;stroke-miterlimit:4.1;paint-order:stroke fill markers"
					d="m 76.807218,86.414683 3.097487,-1.414682 V 65.336009 h -2.904704 l -0.192783,0.446249 z"
					id="path216"
				/><path
					style="opacity:1;fill:#e51414;fill-opacity:1;fill-rule:evenodd;stroke-width:0.3;stroke-linecap:round;stroke-miterlimit:4.1;paint-order:stroke fill markers"
					d="m 70.000002,69.352244 5.44222,-5.352243 7.979971,-12 c -2.041968,0.929906 -8.108716,0.82027 -11.895769,6.830596 -1.300245,2.063584 -2.0046,5.240998 -1.526422,10.521647 z"
					id="path217"
				/><path
					style="opacity:1;fill:#6b1514;fill-opacity:1;fill-rule:evenodd;stroke-width:0.3;stroke-linecap:round;stroke-miterlimit:4.1;paint-order:stroke fill markers"
					d="m 75.442222,64.000001 h 2.55778 c -0.6792,-3.36611 1.767475,-6.071545 3.417107,-8.984826 -2.368635,1.175501 -7.073346,1.788022 -5.974887,8.984826 z"
					id="path218"
				/><path
					style="opacity:1;fill:#e51414;fill-opacity:1;fill-rule:evenodd;stroke-width:0.3;stroke-linecap:round;stroke-miterlimit:4.1;paint-order:stroke fill markers"
					d="m 75.442222,64.000001 v -4.40736 l -2.442221,0.654391 z"
					id="path219"
				/><path
					style="opacity:1;fill:#3f1e1e;fill-opacity:1;fill-rule:evenodd;stroke-width:0.3;stroke-linecap:round;stroke-miterlimit:4.1;paint-order:stroke fill markers"
					d="m 66.000002,84 5.439352,4.774115 -5.535745,2.433228 z"
					id="path220"
				/><path
					style="opacity:1;fill:#3f1e1e;fill-opacity:1;fill-rule:evenodd;stroke-width:0.3;stroke-linecap:round;stroke-miterlimit:4.1;paint-order:stroke fill markers"
					d="m 65.507213,91.381576 -4.507211,-4.755126 0.288469,6.609466 z"
					id="path221"
				/><path
					style="opacity:1;fill:#3f1e1e;fill-opacity:1;fill-rule:evenodd;stroke-width:0.3;stroke-linecap:round;stroke-miterlimit:4.1;paint-order:stroke fill markers"
					d="M 60.586061,93.544659 55.350348,89.000001 55,96.000003 Z"
					id="path222"
				/><path
					style="opacity:1;fill:#761618;fill-opacity:1;fill-rule:evenodd;stroke-width:0.3;stroke-linecap:round;stroke-miterlimit:4.1;paint-order:stroke fill markers"
					d="M 55,61.267276 V 67 l -5,-2.88675 z"
					id="path223"
				/><path
					style="opacity:1;fill:#761618;fill-opacity:1;fill-rule:evenodd;stroke-width:0.3;stroke-linecap:round;stroke-miterlimit:4.1;paint-order:stroke fill markers"
					d="M 46,61.267276 V 67 l -5,-2.88675 z"
					id="path224"
				/><path
					style="opacity:1;fill:#761618;fill-opacity:1;fill-rule:evenodd;stroke-width:0.3;stroke-linecap:round;stroke-miterlimit:4.1;paint-order:stroke fill markers"
					d="m 37.000001,62.267278 v 5.732724 l -5,-2.88675 z"
					id="path225"
				/><rect
					style="opacity:1;fill:#383037;fill-opacity:1;fill-rule:evenodd;stroke-width:0.3;stroke-linecap:round;stroke-miterlimit:4.1;paint-order:stroke fill markers"
					id="rect225"
					width="7"
					height="9"
					x="37.000004"
					y="49"
				/><rect
					style="opacity:1;fill:#151415;fill-opacity:1;fill-rule:evenodd;stroke-width:0.3;stroke-linecap:round;stroke-miterlimit:4.1;paint-order:stroke fill markers"
					id="rect226"
					width="8.6194935"
					height="9.5287151"
					x="28.38051"
					y="50.058567"
				/><rect
					style="opacity:1;fill:#383037;fill-opacity:1;fill-rule:evenodd;stroke-width:0.3;stroke-linecap:round;stroke-miterlimit:4.1;paint-order:stroke fill markers"
					id="rect227"
					width="7"
					height="5.9062281"
					x="37.000004"
					y="40.267353"
				/><rect
					style="opacity:1;fill:#151415;fill-opacity:1;fill-rule:evenodd;stroke-width:0.3;stroke-linecap:round;stroke-miterlimit:4.1;paint-order:stroke fill markers"
					id="rect228"
					width="8.9126072"
					height="7.0349736"
					x="28.087397"
					y="40.267353"
				/><rect
					style="opacity:1;fill:#383037;fill-opacity:1;fill-rule:evenodd;stroke-width:0.3;stroke-linecap:round;stroke-miterlimit:4.1;paint-order:stroke fill markers"
					id="rect229"
					width="6.9999971"
					height="8.1148586"
					x="37.000004"
					y="30.000002"
				/><path
					style="opacity:1;fill:#151415;fill-opacity:1;fill-rule:evenodd;stroke-width:0.3;stroke-linecap:round;stroke-miterlimit:4.1;paint-order:stroke fill markers"
					d="m 37.000002,38.114861 h -9.000003 v -13.91245 h 3.289885 v -2.887489 h 2.99249 V 18 h 9.717627 v 12 h -6.999999 z"
					id="path229"
				/><rect
					style="opacity:1;fill:#151415;fill-opacity:1;fill-rule:evenodd;stroke-width:0.3;stroke-linecap:round;stroke-miterlimit:4.1;paint-order:stroke fill markers"
					id="rect230"
					width="8.7587023"
					height="6.6009288"
					x="48.241299"
					y="20.399071"
				/><rect
					style="opacity:1;fill:#151415;fill-opacity:1;fill-rule:evenodd;stroke-width:0.327119;stroke-linecap:round;stroke-miterlimit:4.1;paint-order:stroke fill markers"
					id="rect231"
					width="8.8352671"
					height="1.9999955"
					x="59.786545"
					y="17.000004"
				/><rect
					style="opacity:1;fill:#151415;fill-opacity:1;fill-rule:evenodd;stroke-width:0.3;stroke-linecap:round;stroke-miterlimit:4.1;paint-order:stroke fill markers"
					id="rect232"
					width="8.6380529"
					height="5.0000019"
					x="60.361946"
					y="18.999998"
				/><rect
					style="opacity:1;fill:#151415;fill-opacity:1;fill-rule:evenodd;stroke-width:0.358841;stroke-linecap:round;stroke-miterlimit:4.1;paint-order:stroke fill markers"
					id="rect233"
					width="9.0023108"
					height="1.999994"
					x="71.498848"
					y="16.000008"
				/><rect
					style="opacity:1;fill:#151415;fill-opacity:1;fill-rule:evenodd;stroke-width:0.3;stroke-linecap:round;stroke-miterlimit:4.1;paint-order:stroke fill markers"
					id="rect234"
					width="8.4802799"
					height="4.8120637"
					x="72.519722"
					y="18.000002"
				/><path
					style="opacity:1;fill:#e51414;fill-opacity:1;fill-rule:evenodd;stroke-width:0.3;stroke-linecap:round;stroke-miterlimit:4.1;paint-order:stroke fill markers"
					d="M 56.074246,20.39907 H 47.000001 V 15 Z"
					id="path234"
				/><path
					style="opacity:1;fill:#e51414;fill-opacity:1;fill-rule:evenodd;stroke-width:0.291086;stroke-linecap:round;stroke-miterlimit:4.1;paint-order:stroke fill markers"
					d="M 66.719257,17.000004 H 58.051043 V 11.888631 Z"
					id="path235"
				/><path
					style="opacity:1;fill:#e51414;fill-opacity:1;fill-rule:evenodd;stroke-width:0.3;stroke-linecap:round;stroke-miterlimit:4.1;paint-order:stroke fill markers"
					d="M 79.554524,16.000007 H 70.000002 V 10 Z"
					id="path236"
				/><path
					style="opacity:1;fill:#e51414;fill-opacity:1;fill-rule:evenodd;stroke-width:0.3;stroke-linecap:round;stroke-miterlimit:4.1;paint-order:stroke fill markers"
					d="M 48.241299,26.999999 55,32.000002 48.287704,32.000001 48.241299,27 Z"
					id="path237"
				/><path
					style="opacity:1;fill:#362e35;fill-opacity:1;fill-rule:evenodd;stroke-width:0.3;stroke-linecap:round;stroke-miterlimit:4.1;paint-order:stroke fill markers"
					d="m 48.241299,26.999999 h 8.7587 v 6.13225 h -1.278422 v -1.132247 h -0.721579 z"
					id="path238"
				/><path
					style="opacity:1;fill:#362e35;fill-opacity:1;fill-rule:evenodd;stroke-width:0.3;stroke-linecap:round;stroke-miterlimit:4.1;paint-order:stroke fill markers"
					d="m 60.361946,24 v 0.779582 l 6.96056,4.566125 v 0.835266 h 0.677495 v 0.819028 h 1 V 24 Z"
					id="path239"
				/><path
					style="opacity:1;fill:#362e35;fill-opacity:1;fill-rule:evenodd;stroke-width:0.3;stroke-linecap:round;stroke-miterlimit:4.1;paint-order:stroke fill markers"
					d="m 72.519722,22.812065 v 0.890951 l 6.080101,3.510348 v 0.786635 H 80 v 1.203018 h 1.000001 l 0.02032,-6.390952 z"
					id="path240"
				/><path
					style="opacity:1;fill:#e51414;fill-opacity:1;fill-rule:evenodd;stroke-width:0.3;stroke-linecap:round;stroke-miterlimit:4.1;paint-order:stroke fill markers"
					d="m 72.519722,23.703016 v 4.296983 h 6.098738 v -0.778848 z"
					id="path241"
				/><path
					style="opacity:1;fill:#e51414;fill-opacity:1;fill-rule:evenodd;stroke-width:0.3;stroke-linecap:round;stroke-miterlimit:4.1;paint-order:stroke fill markers"
					d="m 60.361946,24.779582 v 5.434056 l 6.96056,-0.03266 v -0.835266 z"
					id="path242"
				/><rect
					style="opacity:1;fill:#3b1c1a;fill-opacity:1;fill-rule:evenodd;stroke-width:0.323741;stroke-linecap:round;stroke-miterlimit:4.1;paint-order:stroke fill markers"
					id="rect242"
					width="10.000002"
					height="2.6598868"
					x="70"
					y="27.999998"
				/><rect
					style="opacity:1;fill:#3b1c1a;fill-opacity:1;fill-rule:evenodd;stroke-width:0.3;stroke-linecap:round;stroke-miterlimit:4.1;paint-order:stroke fill markers"
					id="rect243"
					width="8.7277184"
					height="2.526407"
					x="59.272282"
					y="30.180971"
				/><rect
					style="opacity:1;fill:#3b1c1a;fill-opacity:1;fill-rule:evenodd;stroke-width:0.292801;stroke-linecap:round;stroke-miterlimit:4.1;paint-order:stroke fill markers"
					id="rect244"
					width="9.7215748"
					height="2.6367462"
					x="46"
					y="32.000004"
				/><rect
					style="opacity:1;fill:#eee6a4;fill-opacity:1;fill-rule:evenodd;stroke-width:0.3;stroke-linecap:round;stroke-miterlimit:4.1;paint-order:stroke fill markers"
					id="rect245"
					width="3.7510192"
					height="3.7931092"
					x="52.620647"
					y="34.636749"
				/><rect
					style="opacity:1;fill:#eee6a4;fill-opacity:1;fill-rule:evenodd;stroke-width:0.3;stroke-linecap:round;stroke-miterlimit:4.1;paint-order:stroke fill markers"
					id="rect246"
					width="3.5556514"
					height="3.5568619"
					x="64.680969"
					y="32.799255"
				/><rect
					style="opacity:1;fill:#eee6a4;fill-opacity:1;fill-rule:evenodd;stroke-width:0.3;stroke-linecap:round;stroke-miterlimit:4.1;paint-order:stroke fill markers"
					id="rect247"
					width="3.5084009"
					height="3.6974237"
					x="76.77002"
					y="30.659885"
				/><rect
					style="opacity:1;fill:#6a4342;fill-opacity:1;fill-rule:evenodd;stroke-width:0.3;stroke-linecap:round;stroke-miterlimit:4.1;paint-order:stroke fill markers"
					id="rect248"
					width="6.7700195"
					height="3.697422"
					x="70"
					y="30.659885"
				/><rect
					style="opacity:1;fill:#6a4342;fill-opacity:1;fill-rule:evenodd;stroke-width:0.3;stroke-linecap:round;stroke-miterlimit:4.1;paint-order:stroke fill markers"
					id="rect249"
					width="5.4086876"
					height="3.6487389"
					x="59.272282"
					y="32.707378"
				/><rect
					style="opacity:1;fill:#6a4342;fill-opacity:1;fill-rule:evenodd;stroke-width:0.581878;stroke-linecap:round;stroke-miterlimit:4.1;paint-order:stroke fill markers"
					id="rect250"
					width="6.620646"
					height="3.7931101"
					x="46"
					y="34.636749"
				/><rect
					style="opacity:1;fill:#eee6a4;fill-opacity:1;fill-rule:evenodd;stroke-width:0.3;stroke-linecap:round;stroke-miterlimit:4.1;paint-order:stroke fill markers"
					id="rect251"
					width="3.3089335"
					height="3.4567144"
					x="49.691067"
					y="40"
				/><rect
					style="opacity:1;fill:#eee6a4;fill-opacity:1;fill-rule:evenodd;stroke-width:0.34641;stroke-linecap:round;stroke-miterlimit:4.1;paint-order:stroke fill markers"
					id="rect252"
					width="4.2900243"
					height="4.0000014"
					x="50.709976"
					y="48"
				/><rect
					style="opacity:1;fill:#6a4342;fill-opacity:1;fill-rule:evenodd;stroke-width:0.3;stroke-linecap:round;stroke-miterlimit:4.1;paint-order:stroke fill markers"
					id="rect253"
					width="3.3089333"
					height="2.6128912"
					x="49.691067"
					y="43.456715"
				/><rect
					style="opacity:1;fill:#3b1c1a;fill-opacity:1;fill-rule:evenodd;stroke-width:0.3;stroke-linecap:round;stroke-miterlimit:4.1;paint-order:stroke fill markers"
					id="rect254"
					width="3.5286536"
					height="6.0696058"
					x="46.162411"
					y="40"
				/><rect
					style="opacity:1;fill:#3b1c1a;fill-opacity:1;fill-rule:evenodd;stroke-width:0.3;stroke-linecap:round;stroke-miterlimit:4.1;paint-order:stroke fill markers"
					id="rect255"
					width="4.5475655"
					height="10"
					x="46.162411"
					y="48"
				/><rect
					style="opacity:1;fill:#6a4342;fill-opacity:1;fill-rule:evenodd;stroke-width:0.3;stroke-linecap:round;stroke-miterlimit:4.1;paint-order:stroke fill markers"
					id="rect256"
					width="4.2900252"
					height="6.0000014"
					x="50.709976"
					y="52"
				/><path
					style="opacity:1;fill:#1b191a;fill-opacity:1;fill-rule:evenodd;stroke-width:0.3;stroke-linecap:round;stroke-miterlimit:4.1;paint-order:stroke fill markers"
					d="m 83.461568,32.000002 v 5.16986 L 75,44.000001 v 1.791182 h -2.665894 v -3.248261 l 6.190112,-5.77262 v -1.225058 z"
					id="path256"
				/><path
					style="opacity:1;fill:#3c333a;fill-opacity:1;fill-rule:evenodd;stroke-width:0.3;stroke-linecap:round;stroke-miterlimit:4.1;paint-order:stroke fill markers"
					d="m 75,45.791183 8.461568,-3.804462 V 37.169862 L 75,44.000001 Z"
					id="path257"
				/><path
					style="opacity:1;fill:#e51414;fill-opacity:1;fill-rule:evenodd;stroke-width:0.3;stroke-linecap:round;stroke-miterlimit:4.1;paint-order:stroke fill markers"
					d="m 73.74478,6.2552204 h 9.65197 v 4.9187936 h -5.396748 z"
					id="path258"
				/><path
					style="opacity:1;fill:#570d0f;fill-opacity:1;fill-rule:evenodd;stroke-width:0.3;stroke-linecap:round;stroke-miterlimit:4.1;paint-order:stroke fill markers"
					d="M 46,13 C 39.213431,12.028894 32.44752,12.288629 25.672405,12 L 21.89242,7.9999998 22,6.0000001 44.999999,6.3262268 Z"
					id="path259"
				/><path
					style="opacity:1;fill:#e51414;fill-opacity:1;fill-rule:evenodd;stroke-width:0.3;stroke-linecap:round;stroke-miterlimit:4.1;paint-order:stroke fill markers"
					d="m 17.243619,6.0000002 v -2 H 45.178654 C 50.592169,6.4505182 54.331861,9.621812 54.719256,14.236659 51.86211,13.61525 48.99463,13.037713 46.000001,13 44.583861,9.3631321 40.370848,6.8687786 37.468679,6.7494205 Z"
					id="path260"
				/><path
					style="opacity:1;fill:#570d0f;fill-opacity:1;fill-rule:evenodd;stroke-width:0.3;stroke-linecap:round;stroke-miterlimit:4.1;paint-order:stroke fill markers"
					d="M 14.463697,22 V 18 L 7.512864,11.801205 C 8.5986551,17.36814 9.9002929,22.555095 14.463697,22 Z"
					id="path261"
				/><path
					style="opacity:1;fill:#e51414;fill-opacity:1;fill-rule:evenodd;stroke-width:0.3;stroke-linecap:round;stroke-miterlimit:4.1;paint-order:stroke fill markers"
					d="M 5,4.6724829 C 9.8000329,8.0038987 14.609178,11.327725 19,15 v 4 c -0.700238,1.292632 -1.410585,2.575395 -3,3 H 14.463697 V 18 C 10.309364,16.133194 8.5544924,12.826711 6.0000001,10 Z"
					id="path262"
				/><path
					style="opacity:1;fill:#570d0f;fill-opacity:1;fill-rule:evenodd;stroke-width:0.3;stroke-linecap:round;stroke-miterlimit:4.1;paint-order:stroke fill markers"
					d="m 14.726201,31.552385 -0.0412,3.447616 C 10.819865,34.587319 10.051509,30.937095 8.3111781,28.303026 Z"
					id="path263"
				/><path
					style="opacity:1;fill:#e51414;fill-opacity:1;fill-rule:evenodd;stroke-width:0.3;stroke-linecap:round;stroke-miterlimit:4.1;paint-order:stroke fill markers"
					d="m 4.0000002,21.288672 13.2436188,8.18997 C 17.258371,30.640433 17.501489,31.773679 17,33 c -0.13911,0.5991 -0.375104,1.231904 -1,2.000001 h -1.314999 l 0.0412,-3.447616 c -2.312557,-0.37204 -4.713905,-1.809566 -7.1662237,-3.858736 z"
					id="path264"
				/><path
					style="opacity:1;fill:#e51414;fill-opacity:1;fill-rule:evenodd;stroke-width:0.3;stroke-linecap:round;stroke-miterlimit:4.1;paint-order:stroke fill markers"
					d="m 5.4862298,38.37736 c 1.0056887,1.536003 1.9662555,3.070678 3.5137703,4.622641 2.2176019,0.600234 3.8071269,0.931293 5.5686959,1.336085 l 0.105,3.12374 C 15.364484,47.528063 16.29526,47.057096 17,45.701082 17.347015,44.344837 17.317715,42.621093 17,41.264847 13.530597,39.210846 9.5313998,38.917411 5.4862298,38.37736 Z"
					id="path265"
				/><path
					style="opacity:1;fill:#e51414;fill-opacity:1;fill-rule:evenodd;stroke-width:0.3;stroke-linecap:round;stroke-miterlimit:4.1;paint-order:stroke fill markers"
					d="m 10,57.000002 h 5 v 3.401025 c 0.824028,-0.540895 1.684583,-1.042829 2,-2.126242 0.309026,-1.114265 0.285784,-2.26762 0,-3.451862 L 15.408693,53.000002 H 7.0000002 Z"
					id="path266"
				/><path
					style="opacity:1;fill:#e51414;fill-opacity:1;fill-rule:evenodd;stroke-width:0.3;stroke-linecap:round;stroke-miterlimit:4.1;paint-order:stroke fill markers"
					d="M 8.0000002,65.632503 10,69.000001 h 4.542446 L 15,72.370983 17.351186,70.638489 17,67 c -0.525496,-0.551593 -1.18392,-1.058284 -2.326304,-1.401493 z"
					id="path267"
				/><path
					style="opacity:1;fill:#580e10;fill-opacity:1;fill-rule:evenodd;stroke-width:0.3;stroke-linecap:round;stroke-miterlimit:4.1;paint-order:stroke fill markers"
					d="M 27.000001,118.2181 27.000004,121 21.38283,119 18,112.63109 18.393752,111 l -0.01882,-10 3.625069,1.66357 v 8.98376 c 1.284023,2.10776 2.828598,4.27169 5,6.57077 z"
					id="path268"
				/><path
					style="opacity:1;fill:#e51414;fill-opacity:1;fill-rule:evenodd;stroke-width:0.3;stroke-linecap:round;stroke-miterlimit:4.1;paint-order:stroke fill markers"
					d="M 27.000001,118.2181 35.415312,124 C 32.284509,124.17231 17.476319,123.51198 14,111.27334 V 97.000001 L 18.374932,101 l 0.01882,10 c 1.863705,3.76295 3.451914,7.48119 8.606252,10 z"
					id="path269"
				/><path
					style="opacity:1;fill:#580e10;fill-opacity:1;fill-rule:evenodd;stroke-width:0.3;stroke-linecap:round;stroke-miterlimit:4.1;paint-order:stroke fill markers"
					d="M 9.187935,98.580045 11,100 11.338746,112.15081 C 9.5684011,112.42765 9.1110505,111.46582 9.187935,110 Z"
					id="path270"
				/><path
					style="opacity:1;fill:#e51414;fill-opacity:1;fill-rule:evenodd;stroke-width:0.3;stroke-linecap:round;stroke-miterlimit:4.1;paint-order:stroke fill markers"
					d="m 5,95.000002 4.187935,3.580043 V 110 c 0.777612,1.4147 1.470953,1.86028 2.150811,2.15081 -0.303884,4.4061 -0.954412,8.44319 -2.7819015,11.22738 C 6.6520874,119.02127 5.5192483,114.33354 5,109.38283 Z"
					id="path271"
				/><path
					style="opacity:1;fill:#30282f;fill-opacity:1;fill-rule:evenodd;stroke-width:0.3;stroke-linecap:round;stroke-miterlimit:4.1;paint-order:stroke fill markers"
					d="M 11,96.730893 V 74.000002 L 9.4933676,71.390438 8.5568445,90.301624 C 8.298025,94.137701 9.2527448,96.059412 11,96.730893 Z"
					id="path272"
				/><path
					style="opacity:1;fill:#100f10;fill-opacity:1;fill-rule:evenodd;stroke-width:0.3;stroke-linecap:round;stroke-miterlimit:4.1;paint-order:stroke fill markers"
					d="M 9.4933674,71.390438 C 7.8742027,77.11442 7.2466457,83.750077 6.1995359,90.000001 6.7117126,94.600917 8.727241,95.944572 11,96.730893 L 9.7574594,85.419953 Z"
					id="path273"
				/><path
					style="opacity:1;fill:#332b32;fill-opacity:1;fill-rule:evenodd;stroke-width:0.3;stroke-linecap:round;stroke-miterlimit:4.1;paint-order:stroke fill markers"
					d="m 23.795823,100.23202 c -1.239149,-0.11464 -2.186263,-0.594317 -3.00696,-1.232018 V 10.190255 C 22.720623,11.633988 23.375564,13.31417 24,15 v 85.39276 z"
					id="path274"
				/><path
					style="opacity:1;fill:#111011;fill-opacity:1;fill-rule:evenodd;stroke-width:0.3;stroke-linecap:round;stroke-miterlimit:4.1;paint-order:stroke fill markers"
					d="m 14.489947,8 c 2.343593,0.2055825 4.642618,0.5069886 6.298916,2.190255 v 4.509691 C 19.12493,12.561678 16.660657,10.935994 14.489947,9.4499651 Z"
					id="path275"
				/><path
					style="opacity:1;fill:#111011;fill-opacity:1;fill-rule:evenodd;stroke-width:0.3;stroke-linecap:round;stroke-miterlimit:4.1;paint-order:stroke fill markers"
					d="m 20.788863,99.000002 c -3.262839,-1.491985 -4.75012,-4.587699 -6.552204,-7.399076 L 14.459397,74.320185 18,71.25754 h 2.788863 z"
					id="path276"
				/><path
					style="opacity:1;fill:#111011;fill-opacity:1;fill-rule:evenodd;stroke-width:0.3;stroke-linecap:round;stroke-miterlimit:4.1;paint-order:stroke fill markers"
					d="m 18,71.25754 1,-1.000001 c 0.371707,-0.798976 0.172051,-1.526532 0,-2.257538 C 18.121657,66.339043 17.230508,64.68123 14.403712,63.49884 L 14.236659,61.735498 C 16.472678,60.56794 18.871517,59.612856 20,57.000002 19.56473,54.066556 17.431171,52.057179 14.62645,50.412993 17.510589,48.402993 19.128701,46.349033 20,44.269141 19.825862,41.973704 18.006116,39.678268 14.682134,37.382831 16.825125,35.739043 18.902254,34.049789 20,31.684454 20.045624,28.313935 17.195633,26.29881 14,24.445475 16.28635,23.284362 18.568134,22.118135 20,20 l 0.788863,0.02784 v 51.2297 z"
					id="path277"
				/><path
					style="opacity:1;fill:#570d0f;fill-opacity:1;fill-rule:evenodd;stroke-width:0.3;stroke-linecap:round;stroke-miterlimit:4.1;paint-order:stroke fill markers"
					d="m 15,57.000002 v 3.401025 c -2.915234,-0.005 -4.024201,-1.642834 -5,-3.401025 z"
					id="path278"
				/><path
					style="opacity:1;fill:#570d0f;fill-opacity:1;fill-rule:evenodd;stroke-width:0.3;stroke-linecap:round;stroke-miterlimit:4.1;paint-order:stroke fill markers"
					d="m 10,69.000001 h 4.542446 L 15,72.370981 c -2.038748,0.507771 -3.601075,-1.073375 -5,-3.37098 z"
					id="path279"
				/><path
					style="opacity:1;fill:#570d0f;fill-opacity:1;fill-rule:evenodd;stroke-width:0.3;stroke-linecap:round;stroke-miterlimit:4.1;paint-order:stroke fill markers"
					d="m 14.568696,44.336086 0.105,3.123739 C 11.947799,47.30417 10.459098,45.175687 9.0000001,43.000001 Z"
					id="path280"
				/><path
					style="opacity:1;fill:#e31212;fill-opacity:1;fill-rule:evenodd;stroke-width:0.3;stroke-linecap:round;stroke-miterlimit:4.1;paint-order:stroke fill markers"
					d="M 111.70302,62.292343 115,59.489559 c 1.78694,2.63782 4.65769,4.036987 9.21345,3.510441 -0.98209,1.857662 -2.06002,3.776575 -6.23654,2.793324 -1.74403,-0.410586 -3.81767,-0.946218 -6.27389,-3.500981 z"
					id="path281"
				/><path
					style="opacity:1;fill:#3f1e1e;fill-opacity:1;fill-rule:evenodd;stroke-width:0.3;stroke-linecap:round;stroke-miterlimit:4.1;paint-order:stroke fill markers"
					d="m 111.70302,62.292343 c -0.58854,-2.275402 -1.56689,-4.335167 -3.09977,-6.088168 H 96.625896 C 92.337861,52.846971 90.366962,50.235963 88.698423,47.722324 V 42.157345 L 85.065329,40.059776 V 33 h 6.494333 v 10.102342 h 1.758744 l 7.271224,7.271223 H 101 v -3.373564 l 5.85023,5.316056 L 107.19148,50 112.37584,54.416049 113.18958,54 v -2.773312 l 0.27029,0.07242 v 1.266323 h 0.69763 c 0.20839,3.628915 0.29297,6.901557 0.8425,6.924127 z"
					id="path282"
				/><path
					style="opacity:1;fill:#351818;fill-opacity:1;fill-rule:evenodd;stroke-width:0.3;stroke-linecap:round;stroke-miterlimit:4.1;paint-order:stroke fill markers"
					d="m 115,20.38051 v 15.461718 c 4.17491,0.489281 6.67663,2.25547 9,4.157774 v -15.59165 c -0.90394,-1.809523 -2.14042,-3.454517 -5.31787,-4.139211 z"
					id="path283"
				/><path
					style="opacity:1;fill:#3a3138;fill-opacity:1;fill-rule:evenodd;stroke-width:0.3;stroke-linecap:round;stroke-miterlimit:4.1;paint-order:stroke fill markers"
					d="m 85.327145,20.547564 v 10.452437 h 8.672856 v 5.751737 h 1.000001 v -5.976797 l 5.380508,4.733179 H 101 v -4.807423 l 6.79523,6.062292 L 108,30.817386 113.33396,36.000002 115,35.842228 v -6.337337 z"
					id="path284"
				/><path
					style="opacity:1;fill:#151415;fill-opacity:1;fill-rule:evenodd;stroke-width:0.3;stroke-linecap:round;stroke-miterlimit:4.1;paint-order:stroke fill markers"
					d="M 78.000002,11.174014 85.290021,18 85.327145,20.547564 88,21.75406 v 5.860838 L 106.60086,31.000001 107,27.4574 l 8,2.047491 V 20.38051 L 110,19 103.38747,12.232018 h -4.361949 l 1.627669,2.819201 C 98.713816,15.341401 96.468629,14.819944 94.293684,13.485546 90.590789,11.2137 86.436087,7.3350251 83.396748,6.2552204 Z"
					id="path285"
				/><path
					style="opacity:1;fill:#85181b;fill-opacity:1;fill-rule:evenodd;stroke-width:0.3;stroke-linecap:round;stroke-miterlimit:4.1;paint-order:stroke fill markers"
					d="M 95.000002,25 104.25986,27.220417 104,29.791182 95.000003,28.454756 Z"
					id="path286"
				/><path
					style="opacity:1;fill:#f1ecb0;fill-opacity:1;fill-rule:evenodd;stroke-width:0.3;stroke-linecap:round;stroke-miterlimit:4.1;paint-order:stroke fill markers"
					d="m 98.641047,25.873084 4.477653,1.073694 -0.19674,2.684324 -4.184043,-0.621296 z"
					id="path287"
				/><path
					style="opacity:1;fill:#e41313;fill-opacity:1;fill-rule:evenodd;stroke-width:0.3;stroke-linecap:round;stroke-miterlimit:4.1;paint-order:stroke fill markers"
					d="m 84.696056,14 h 1.986078 L 98.000001,24.723898 91.000002,23 Z"
					id="path288"
				/><path
					style="opacity:1;fill:#e41313;fill-opacity:1;fill-rule:evenodd;stroke-width:0.3;stroke-linecap:round;stroke-miterlimit:4.1;paint-order:stroke fill markers"
					d="M 93.215776,16.482598 94.64501,16.63109 105,27.000001 99.62993,25.225058 Z"
					id="path289"
				/><path
					style="opacity:1;fill:#e41313;fill-opacity:1;fill-rule:evenodd;stroke-width:0.3;stroke-linecap:round;stroke-miterlimit:4.1;paint-order:stroke fill markers"
					d="m 99.526681,18.320186 5.209409,1.679815 2.34511,7 -7.45127,-7.638052 z"
					id="path290"
				/><path
					style="opacity:1;fill:#4f4dee;fill-opacity:1;fill-rule:evenodd;stroke-width:0.3;stroke-linecap:round;stroke-miterlimit:4.1;paint-order:stroke fill markers"
					d="m 95.363251,45.147187 h 1.63675 l 2.801114,2.801115 v -1.804451 h 1.990065 L 105.64733,50 106.18323,48.000001 108,48.486803 v 0.868185 l 3.69838,3.698375 v -3.067285 h 2.43619 v 1.225057 l -0.94499,0.01556 v 2.773312 l -0.81374,0.416049 -5.18436,-4.416049 -0.34125,2.316057 L 101,47.000006 v 3.373564 h -0.41037 z"
					id="path291"
				/><path
					style="opacity:1;fill:#3f1e1e;fill-opacity:1;fill-rule:evenodd;stroke-width:0.3;stroke-linecap:round;stroke-miterlimit:4.1;paint-order:stroke fill markers"
					d="m 114.1575,52.565432 -0.69763,-1.266325 -0.044,-0.07614 -0.22633,0.0037 0.27029,1.338736 z"
					id="path292"
				/><path
					style="opacity:1;fill:#6b1514;fill-opacity:1;fill-rule:evenodd;stroke-width:0.3;stroke-linecap:round;stroke-miterlimit:4.1;paint-order:stroke fill markers"
					d="M 96.371229,39.665894 V 33 l 3.258701,3.621809 z"
					id="path293"
				/><path
					style="opacity:1;fill:#6b1514;fill-opacity:1;fill-rule:evenodd;stroke-width:0.3;stroke-linecap:round;stroke-miterlimit:4.1;paint-order:stroke fill markers"
					d="M 102.37065,39.665894 V 33 l 3.2587,3.621809 z"
					id="path294"
				/><path
					style="opacity:1;fill:#6b1514;fill-opacity:1;fill-rule:evenodd;stroke-width:0.3;stroke-linecap:round;stroke-miterlimit:4.1;paint-order:stroke fill markers"
					d="M 109.37065,39.665894 V 33 l 3.2587,3.621809 z"
					id="path295"
				/><path
					style="opacity:1;fill:#6b1514;fill-opacity:1;fill-rule:evenodd;stroke-width:0.3;stroke-linecap:round;stroke-miterlimit:4.1;paint-order:stroke fill markers"
					d="M 111.69838,53.053363 V 46.385151 L 108,48.52041 v 0.834578 z"
					id="path296"
				/><path
					style="opacity:1;fill:#6b1514;fill-opacity:1;fill-rule:evenodd;stroke-width:0.3;stroke-linecap:round;stroke-miterlimit:4.1;paint-order:stroke fill markers"
					d="m 105.64733,50 0.5359,-1.999999 v -4.547565 l -4.39205,2.691415 z"
					id="path297"
				/><path
					style="opacity:1;fill:#6b1514;fill-opacity:1;fill-rule:evenodd;stroke-width:0.3;stroke-linecap:round;stroke-miterlimit:4.1;paint-order:stroke fill markers"
					d="m 99.801113,47.948302 v -6.426261 l -3.619487,3.625146 h 0.818375 z"
					id="path298"
				/><path
					style="opacity:1;fill:#c6f1ff;fill-opacity:1;fill-rule:evenodd;stroke-width:0.3;stroke-linecap:round;stroke-miterlimit:4.1;paint-order:stroke fill markers"
					d="m 99.801113,44.937354 v -3.415313 h 1.201207 V 39.071925 H 98.793502 L 99.095958,37.943141 102.27378,38 l 0.0969,1.665894 1.26624,-1.165895 L 105,39.000001 v 4.13689 h -3.65429 l -0.0371,2.010296 H 100 Z"
					id="path299"
				/><path
					style="opacity:1;fill:#e8e6ba;fill-opacity:1;fill-rule:evenodd;stroke-width:0.3;stroke-linecap:round;stroke-miterlimit:4.1;paint-order:stroke fill markers"
					d="m 98.7935,39.071925 -1.222759,-0.526544 0.923432,-0.860222 0.601783,0.257982 z"
					id="path300"
				/><path
					style="opacity:1;fill:#4f4dee;fill-opacity:1;fill-rule:evenodd;stroke-width:0.3;stroke-linecap:round;stroke-miterlimit:4.1;paint-order:stroke fill markers"
					d="m 85.065329,33 v -1.999999 h 8.934672 L 91.559662,33 Z"
					id="path301"
				/><path
					style="opacity:1;fill:#4f4dee;fill-opacity:1;fill-rule:evenodd;stroke-width:0.3;stroke-linecap:round;stroke-miterlimit:4.1;paint-order:stroke fill markers"
					d="m 91.559662,33 h 2.440339 v -1.999999 z"
					id="path302"
				/><path
					style="opacity:1;fill:#4f4dee;fill-opacity:1;fill-rule:evenodd;stroke-width:0.3;stroke-linecap:round;stroke-miterlimit:4.1;paint-order:stroke fill markers"
					d="m 95.000002,34 h 1.371227 v -1 l 1.816407,2.018802 0.90832,-0.618304 -4.095954,-3.625557 z"
					id="path303"
				/><path
					style="opacity:1;fill:#4f4dee;fill-opacity:1;fill-rule:evenodd;stroke-width:0.3;stroke-linecap:round;stroke-miterlimit:4.1;paint-order:stroke fill markers"
					d="m 101,35.214245 1.37065,-0.105 V 33 l 3.2587,3.621809 0.82541,0.825405 h 2.91589 V 33 l 3.2587,3.621809 0.70461,-0.621807 L 108,30.817386 107.79523,36.762989 101,30.700697 Z"
					id="path304"
				/><path
					style="opacity:1;fill:#c6f1ff;fill-opacity:1;fill-rule:evenodd;stroke-width:0.3;stroke-linecap:round;stroke-miterlimit:4.1;paint-order:stroke fill markers"
					d="M 98.494173,37.685162 99.095956,37.943141 102.27378,38 Z"
					id="path305"
				/><path
					style="opacity:1;fill:#c6f1ff;fill-opacity:1;fill-rule:evenodd;stroke-width:0.3;stroke-linecap:round;stroke-miterlimit:4.1;paint-order:stroke fill markers"
					d="m 102.27378,38 0.0969,0.0464 3e-5,1.619491 z"
					id="path306"
				/><path
					style="opacity:1;fill:#c6f1ff;fill-opacity:1;fill-rule:evenodd;stroke-width:0.3;stroke-linecap:round;stroke-miterlimit:4.1;paint-order:stroke fill markers"
					d="m 92.711787,37.53132 0.288214,-0.01857 z"
					id="path307"
				/><path
					style="opacity:1;fill:#c6f1ff;fill-opacity:1;fill-rule:evenodd;stroke-width:0.3;stroke-linecap:round;stroke-miterlimit:4.1;paint-order:stroke fill markers"
					d="m 94.000004,37.568446 v -0.0557 c 0,0 -1.000003,0 -1.000003,0 l -0.288219,0.01857 z"
					id="path308"
				/><path
					style="opacity:1;fill:#e8e6ba;fill-opacity:1;fill-rule:evenodd;stroke-width:0.3;stroke-linecap:round;stroke-miterlimit:4.1;paint-order:stroke fill markers"
					d="m 98.7935,39.071925 0.354838,-1.329923 -0.654165,-0.05684 z"
					id="path309"
				/></g
			><g id="g159"
				><path
					style="opacity:1;fill:#a060ee;fill-opacity:1;fill-rule:evenodd;stroke-width:0.3;stroke-linecap:round;stroke-miterlimit:4.1;paint-order:stroke fill markers"
					d="m 91.559662,33 h 2.440339 l 5.095955,1.400498 3.274694,0.708747 3.2587,1.512564 0.82541,0.825405 -0.27153,6.005222 -4.39205,2.691415 h -1.990067 l -4.437862,-0.996664 -2.044845,-2.044845 h -1.758744 z"
					id="path154"
				/><path
					style="opacity:1;fill:#ffffff;fill-opacity:1;fill-rule:evenodd;stroke-width:0.3;stroke-linecap:round;stroke-miterlimit:4.1;paint-order:stroke fill markers"
					d="m 93.000001,37.512759 h 3.371228 L 102.27378,38 105,39.000001 v 4.13689 h -3.65429 l -0.0371,2.010296 H 100 l -1.910678,-1.91068 h -3.425751 l -1.951789,-1.126866 v -4.578318 z"
					id="path146"
				/><path
					style="opacity:1;fill:#c6f1ff;fill-opacity:1;fill-rule:evenodd;stroke-width:0.398132;stroke-linecap:round;stroke-miterlimit:4.1;paint-order:stroke fill markers"
					d="m 93.977226,42.840246 0.02278,-5.2718 -1.288218,-0.03713 v 4.578318 z"
					id="path147"
				/><path
					style="opacity:1;fill:#e31212;fill-rule:evenodd;stroke-width:0.3;stroke-linecap:round;stroke-miterlimit:4.1;paint-order:stroke fill markers;fill-opacity:1"
					d="m 109.4621,79.000002 -4.90873,-13 -4.55337,13 z"
					id="path2"
				/><path
					style="opacity:1;fill:#e31212;fill-rule:evenodd;stroke-width:0.3;stroke-linecap:round;stroke-miterlimit:4.1;paint-order:stroke fill markers;fill-opacity:1"
					d="m 116.66589,85.000002 c 0,0 5.09745,-10.000002 5.00464,-10.000002 -0.0928,0 -9.87471,5 -9.87471,5 z"
					id="path3"
				/><path
					style="opacity:1;fill:#e31212;fill-rule:evenodd;stroke-width:0.3;stroke-linecap:round;stroke-miterlimit:4.1;paint-order:stroke fill markers;fill-opacity:1"
					d="m 86.000002,87.000002 h 6.000001 v 5.635908 z"
					id="path5"
				/><path
					style="opacity:1;fill:#e31212;fill-rule:evenodd;stroke-width:0.3;stroke-linecap:round;stroke-miterlimit:4.1;paint-order:stroke fill markers;fill-opacity:1"
					d="m 92.000003,95.313398 v 5.328732 l -6.000001,-5.249981 z"
					id="path6"
				/><path
					style="opacity:1;fill:#e31212;fill-rule:evenodd;stroke-width:0.3;stroke-linecap:round;stroke-miterlimit:4.1;paint-order:stroke fill markers;fill-opacity:1"
					d="m 123,87.000002 h -6 v 5.635908 z"
					id="path7"
				/><path
					style="opacity:1;fill:#e31212;fill-rule:evenodd;stroke-width:0.3;stroke-linecap:round;stroke-miterlimit:4.1;paint-order:stroke fill markers;fill-opacity:1"
					d="m 117,95.313398 v 5.328732 l 6,-5.249981 z"
					id="path8"
				/><path
					style="opacity:1;fill:#e31212;fill-rule:evenodd;stroke-width:0.3;stroke-linecap:round;stroke-miterlimit:4.1;paint-order:stroke fill markers;fill-opacity:1"
					d="m 93.000003,85.000002 c 0,0 -5.09745,-10.000002 -5.00464,-10.000002 0.0928,0 9.87471,5 9.87471,5 z"
					id="path9"
				/><path
					style="opacity:1;fill:#3a3138;fill-rule:evenodd;stroke-width:0.3;stroke-linecap:round;stroke-miterlimit:4.1;paint-order:stroke fill markers;fill-opacity:1"
					d="m 93.000001,100 0.419952,1.53132 6.422273,6.58692 h 9.488624 L 116,102.34803 v -2.17943 h -4 z"
					id="path14"
				/><path
					style="opacity:1;fill:#161617;fill-rule:evenodd;stroke-width:0.3;stroke-linecap:round;stroke-miterlimit:4.1;paint-order:stroke fill markers;fill-opacity:1"
					d="M 93.000001,85.000001 V 100 h 4 l 3.782749,3.78275 h 7.6031 L 112,100.1686 h 4 V 87.000002 L 109.4621,79 h -7.8356 z"
					id="path10"
				/><path
					style="opacity:1;fill:#e31212;fill-rule:evenodd;stroke-width:0.3;stroke-linecap:round;stroke-miterlimit:4.1;paint-order:stroke fill markers;fill-opacity:1"
					d="m 101,91.000002 h 7.58469 L 104.5,81.262179 Z"
					id="path11"
				/><path
					style="opacity:1;fill:#e31212;fill-rule:evenodd;stroke-width:0.220893;stroke-linecap:round;stroke-miterlimit:4.1;paint-order:stroke fill markers;fill-opacity:1"
					d="m 102,98.898427 h 5.58469 l -3.0076,-7.170058 z"
					id="path12"
				/><path
					style="opacity:1;fill:#e31212;fill-rule:evenodd;stroke-width:0.253747;stroke-linecap:round;stroke-miterlimit:4.1;paint-order:stroke fill markers;fill-opacity:1"
					d="M 101.58469,108.11824 H 108 l -3.45493,-8.236472 z"
					id="path13"
				/><path
					style="opacity:1;fill:#3c3239;fill-rule:evenodd;stroke-width:0.3;stroke-linecap:round;stroke-miterlimit:4.1;paint-order:stroke fill markers;fill-opacity:1"
					d="m 93.000001,100 h 4.000002 l 3.782747,3.78275 z"
					id="path15"
				/><path
					style="opacity:1;fill:#151415;fill-opacity:1;fill-rule:evenodd;stroke-width:0.3;stroke-linecap:round;stroke-miterlimit:4.1;paint-order:stroke fill markers"
					d="m 101,110 h 7.8846 v 4.60708 c -0.9945,1.9104 -2.3455,3.50302 -4.43623,4.43623 H 91.244665 V 116 h 9.187465 l 0.57735,-1 z"
					id="path16"
				/><path
					style="opacity:1;fill:#332b32;fill-opacity:1;fill-rule:evenodd;stroke-width:0.3;stroke-linecap:round;stroke-miterlimit:4.1;paint-order:stroke fill markers"
					d="m 91.244665,116 v -1.66125 L 98.759588,110 H 101 v 5 l -0.57735,1 z"
					id="path17"
				/><path
					style="opacity:1;fill:#e31212;fill-opacity:1;fill-rule:evenodd;stroke-width:0.3;stroke-linecap:round;stroke-miterlimit:4.1;paint-order:stroke fill markers"
					d="M 91.244665,114.33875 V 110 h 7.514915 z"
					id="path18"
				/><path
					style="opacity:1;fill:#e31212;fill-opacity:1;fill-rule:evenodd;stroke-width:0.3;stroke-linecap:round;stroke-miterlimit:4.1;paint-order:stroke fill markers"
					d="m 90.00464,119.04331 8.241299,0 -8.245938,5.22583 z"
					id="path19"
				/><path
					style="opacity:1;fill:#e31212;fill-opacity:1;fill-rule:evenodd;stroke-width:0.3;stroke-linecap:round;stroke-miterlimit:4.1;paint-order:stroke fill markers"
					d="m 79.000002,119 h 8.933764 l -8.947808,5.26914 z"
					id="path20"
				/><path
					style="opacity:1;fill:#e31212;fill-opacity:1;fill-rule:evenodd;stroke-width:0.3;stroke-linecap:round;stroke-miterlimit:4.1;paint-order:stroke fill markers"
					d="m 80,116 h 3.947192 l 4.488733,-3 H 80 Z"
					id="path21"
				/><path
					style="opacity:1;fill:#171617;fill-opacity:1;fill-rule:evenodd;stroke-width:0.3;stroke-linecap:round;stroke-miterlimit:4.1;paint-order:stroke fill markers"
					d="m 80,116 v 3 h 9.118423 v -3 h -0.682498 v 0 z"
					id="path22"
				/><path
					style="opacity:1;fill:#332b32;fill-opacity:1;fill-rule:evenodd;stroke-width:0.3;stroke-linecap:round;stroke-miterlimit:4.1;paint-order:stroke fill markers"
					d="M 89.118423,116 88.435925,113 84,116 Z"
					id="path24"
				/><rect
					style="opacity:1;fill:#332b32;fill-opacity:1;fill-rule:evenodd;stroke-width:0.3;stroke-linecap:round;stroke-miterlimit:4.1;paint-order:stroke fill markers"
					id="rect24"
					width="7.4431553"
					height="2.5591645"
					x="80"
					y="110.44083"
				/><rect
					style="opacity:1;fill:#6a4342;fill-opacity:1;fill-rule:evenodd;stroke-width:0.3;stroke-linecap:round;stroke-miterlimit:4.1;paint-order:stroke fill markers"
					id="rect25"
					width="4.5592093"
					height="2.1160002"
					x="80"
					y="108.32482"
				/><rect
					style="opacity:1;fill:#eee6a4;fill-opacity:1;fill-rule:evenodd;stroke-width:0.3;stroke-linecap:round;stroke-miterlimit:4.1;paint-order:stroke fill markers"
					id="rect26"
					width="2.8839417"
					height="2.1160049"
					x="84.559212"
					y="108.32482"
				/><path
					style="opacity:1;fill:#e31212;fill-opacity:1;fill-rule:evenodd;stroke-width:0.3;stroke-linecap:round;stroke-miterlimit:4.1;paint-order:stroke fill markers"
					d="m 68.007024,119 h 8.933764 l -8.947808,5.26914 z"
					id="path31"
				/><path
					style="opacity:1;fill:#e31212;fill-opacity:1;fill-rule:evenodd;stroke-width:0.3;stroke-linecap:round;stroke-miterlimit:4.1;paint-order:stroke fill markers"
					d="m 57.007024,119 h 8.933764 l -8.947808,5.26914 z"
					id="path32"
				/><path
					style="opacity:1;fill:#e31212;fill-opacity:1;fill-rule:evenodd;stroke-width:0.3;stroke-linecap:round;stroke-miterlimit:4.1;paint-order:stroke fill markers"
					d="m 48.007023,119 7.992979,0 -8.007023,5.26914 z"
					id="path33"
				/><path
					style="opacity:1;fill:#171617;fill-opacity:1;fill-rule:evenodd;stroke-width:0.3;stroke-linecap:round;stroke-miterlimit:4.1;paint-order:stroke fill markers"
					d="m 69.000002,116 v 3 h 9.118423 v -3 h -0.682498 v 0 z"
					id="path34"
				/><path
					style="opacity:1;fill:#171617;fill-opacity:1;fill-rule:evenodd;stroke-width:0.327509;stroke-linecap:round;stroke-miterlimit:4.1;paint-order:stroke fill markers"
					d="M 58.007024,115.42459 V 119 h 9.118423 v -3.57541 h -0.682498 v 0 z"
					id="path35"
				/><path
					style="opacity:1;fill:#171617;fill-opacity:1;fill-rule:evenodd;stroke-width:0.303514;stroke-linecap:round;stroke-miterlimit:4.1;paint-order:stroke fill markers"
					d="m 49.000001,115 v 4 h 7.000001 v -4 h -0.523938 v 0 z"
					id="path36"
				/><path
					style="opacity:1;fill:#e31212;fill-opacity:1;fill-rule:evenodd;stroke-width:0.3;stroke-linecap:round;stroke-miterlimit:4.1;paint-order:stroke fill markers"
					d="m 69.000001,116 h 3 l 5.215776,-4 h -8.215776 z"
					id="path37"
				/><path
					style="opacity:1;fill:#e31212;fill-opacity:1;fill-rule:evenodd;stroke-width:0.3;stroke-linecap:round;stroke-miterlimit:4.1;paint-order:stroke fill markers"
					d="m 58.007024,115.42459 h 2.521977 L 66.691414,111 H 58 Z"
					id="path38"
				/><path
					style="opacity:1;fill:#e31212;fill-opacity:1;fill-rule:evenodd;stroke-width:0.3;stroke-linecap:round;stroke-miterlimit:4.1;paint-order:stroke fill markers"
					d="m 49.000002,115 6.350346,-5 h -6.350346 z"
					id="path39"
				/><path
					style="opacity:1;fill:#332b32;fill-opacity:1;fill-rule:evenodd;stroke-width:0.3;stroke-linecap:round;stroke-miterlimit:4.1;paint-order:stroke fill markers"
					d="m 49.000002,115 6.350346,-5 0.649653,5 z"
					id="path40"
				/><path
					style="opacity:1;fill:#332b32;fill-opacity:1;fill-rule:evenodd;stroke-width:0.3;stroke-linecap:round;stroke-miterlimit:4.1;paint-order:stroke fill markers"
					d="M 60.529001,115.42459 66.691414,111 l 0.434033,4.42459 z"
					id="path41"
				/><path
					style="opacity:1;fill:#332b32;fill-opacity:1;fill-rule:evenodd;stroke-width:0.3;stroke-linecap:round;stroke-miterlimit:4.1;paint-order:stroke fill markers"
					d="m 77.215777,112 0.902647,4 h -6.118423 z"
					id="path42"
				/><rect
					style="opacity:1;fill:#332b32;fill-opacity:1;fill-rule:evenodd;stroke-width:0.3;stroke-linecap:round;stroke-miterlimit:4.1;paint-order:stroke fill markers"
					id="rect42"
					width="6.3503466"
					height="2.7166464"
					x="49"
					y="107.28336"
				/><rect
					style="opacity:1;fill:#332b32;fill-opacity:1;fill-rule:evenodd;stroke-width:0.3;stroke-linecap:round;stroke-miterlimit:4.1;paint-order:stroke fill markers"
					id="rect43"
					width="8.6914129"
					height="2.8051071"
					x="58"
					y="108.19489"
				/><rect
					style="opacity:1;fill:#332b32;fill-opacity:1;fill-rule:evenodd;stroke-width:0.3;stroke-linecap:round;stroke-miterlimit:4.1;paint-order:stroke fill markers"
					id="rect44"
					width="7.6234684"
					height="2.6171784"
					x="69"
					y="109.38282"
				/><rect
					style="opacity:1;fill:#6a4342;fill-opacity:1;fill-rule:evenodd;stroke-width:0.3;stroke-linecap:round;stroke-miterlimit:4.1;paint-order:stroke fill markers"
					id="rect45"
					width="3.6048071"
					height="2.2833605"
					x="49"
					y="105"
				/><rect
					style="opacity:1;fill:#6a4342;fill-opacity:1;fill-rule:evenodd;stroke-width:0.3;stroke-linecap:round;stroke-miterlimit:4.1;paint-order:stroke fill markers"
					id="rect46"
					width="5.498517"
					height="2.1948898"
					x="58"
					y="106.00001"
				/><rect
					style="opacity:1;fill:#6a4342;fill-opacity:1;fill-rule:evenodd;stroke-width:0.3;stroke-linecap:round;stroke-miterlimit:4.1;paint-order:stroke fill markers"
					id="rect47"
					width="4.6705337"
					height="2.2853675"
					x="69"
					y="107.09745"
				/><rect
					style="opacity:1;fill:#eee6a4;fill-opacity:1;fill-rule:evenodd;stroke-width:0.3;stroke-linecap:round;stroke-miterlimit:4.1;paint-order:stroke fill markers"
					id="rect48"
					width="3.1928978"
					height="2.1948853"
					x="63.498512"
					y="106.00001"
				/><rect
					style="opacity:1;fill:#eee6a4;fill-opacity:1;fill-rule:evenodd;stroke-width:0.3;stroke-linecap:round;stroke-miterlimit:4.1;paint-order:stroke fill markers"
					id="rect49"
					width="2.952934"
					height="2.2853696"
					x="73.670532"
					y="107.09745"
				/><rect
					style="opacity:1;fill:#eee6a4;fill-opacity:1;fill-rule:evenodd;stroke-width:0.3;stroke-linecap:round;stroke-miterlimit:4.1;paint-order:stroke fill markers"
					id="rect50"
					width="2.7455368"
					height="2.2833633"
					x="52.604805"
					y="105"
				/><path
					style="opacity:1;fill:#2f1514;fill-opacity:1;fill-rule:evenodd;stroke-width:0.3;stroke-linecap:round;stroke-miterlimit:4.1;paint-order:stroke fill markers"
					d="m 48.000001,107.65661 v -3.45243 h -3.000002 z"
					id="path50"
				/><path
					style="opacity:1;fill:#623d3c;fill-opacity:1;fill-rule:evenodd;stroke-width:0.3;stroke-linecap:round;stroke-miterlimit:4.1;paint-order:stroke fill markers"
					d="m 48.000001,104.20418 v -0.773 h -3.000002 v 0.773 z"
					id="path51"
				/><path
					style="opacity:1;fill:#351818;fill-opacity:1;fill-rule:evenodd;stroke-width:0.3;stroke-linecap:round;stroke-miterlimit:4.1;paint-order:stroke fill markers"
					d="m 44.427962,99.592134 v 2.756236 h -1.036873 v -3.149986 h 1.036873 z"
					id="path52"
				/><path
					style="opacity:1;fill:#623d3c;fill-opacity:1;fill-rule:evenodd;stroke-width:0.3;stroke-linecap:round;stroke-miterlimit:4.1;paint-order:stroke fill markers"
					d="m 44.427962,101.25244 h 2.014681 v -0.82687 h -2.014681 z"
					id="path53"
				/><path
					style="opacity:1;fill:#eee6a4;fill-opacity:1;fill-rule:evenodd;stroke-width:0.3;stroke-linecap:round;stroke-miterlimit:4.1;paint-order:stroke fill markers"
					d="m 48.000001,103.43118 h -2.445477 v -1.6632 h 1.104408 v -0.97912 h 1.341069 z"
					id="path54"
				/><rect
					style="opacity:1;fill:#eee6a4;fill-opacity:1;fill-rule:evenodd;stroke-width:0.3;stroke-linecap:round;stroke-miterlimit:4.1;paint-order:stroke fill markers"
					id="rect55"
					width="2.9399893"
					height="1.8834313"
					x="44.427959"
					y="98.542137"
				/><rect
					style="opacity:1;fill:#eee6a4;fill-opacity:1;fill-rule:evenodd;stroke-width:0.3;stroke-linecap:round;stroke-miterlimit:4.1;paint-order:stroke fill markers"
					id="rect56"
					width="3.8324859"
					height="3.9637356"
					x="45.661705"
					y="90.562164"
				/><rect
					style="opacity:1;fill:#361818;fill-opacity:1;fill-rule:evenodd;stroke-width:0.3;stroke-linecap:round;stroke-miterlimit:4.1;paint-order:stroke fill markers"
					id="rect57"
					width="2.3756137"
					height="6.6281042"
					x="43.286087"
					y="90.562164"
				/><rect
					style="opacity:1;fill:#623d3c;fill-opacity:1;fill-rule:evenodd;stroke-width:0.3;stroke-linecap:round;stroke-miterlimit:4.1;paint-order:stroke fill markers"
					id="rect58"
					width="3.8324859"
					height="2.6643667"
					x="45.661701"
					y="94.525902"
				/><path
					style="opacity:1;fill:#100f10;fill-opacity:1;fill-rule:evenodd;stroke-width:0.3;stroke-linecap:round;stroke-miterlimit:4.1;paint-order:stroke fill markers"
					d="m 47.000001,119.43706 v -7.1772 H 36.454757 l -4.250582,4.25058 c 0.239136,0.63186 0.522324,1.248 1.243621,1.70766 3.682865,1.27111 8.847995,1.01224 13.552205,1.21896 z"
					id="path58"
				/><path
					style="opacity:1;fill:#362e35;fill-opacity:1;fill-rule:evenodd;stroke-width:0.3;stroke-linecap:round;stroke-miterlimit:4.1;paint-order:stroke fill markers"
					d="m 47.000001,112.25986 v -1.57714 l -4.08141,-4.54104 -6.463834,6.11818 z"
					id="path59"
				/><path
					style="opacity:1;fill:#362e35;fill-opacity:1;fill-rule:evenodd;stroke-width:0.3;stroke-linecap:round;stroke-miterlimit:4.1;paint-order:stroke fill markers"
					d="m 35.000001,109.41995 0.06264,-10.221566 h 5.716939 l 0.01857,4.619296 z"
					id="path60"
				/><rect
					style="opacity:1;fill:#362e35;fill-opacity:1;fill-rule:evenodd;stroke-width:0.3;stroke-linecap:round;stroke-miterlimit:4.1;paint-order:stroke fill markers"
					id="rect60"
					width="5.7981491"
					height="6.1438513"
					x="35"
					y="90.951279"
				/><rect
					style="opacity:1;fill:#100f10;fill-opacity:1;fill-rule:evenodd;stroke-width:0.3;stroke-linecap:round;stroke-miterlimit:4.1;paint-order:stroke fill markers"
					id="rect61"
					width="6.7679815"
					height="6.0951281"
					x="28.232018"
					y="91"
				/><path
					style="opacity:1;fill:#100f10;fill-opacity:1;fill-rule:evenodd;stroke-width:0.3;stroke-linecap:round;stroke-miterlimit:4.1;paint-order:stroke fill markers"
					d="M 35.062641,99.198384 H 27.999999 V 111 l 2.255221,3.67285 4.744781,-5.2529 z"
					id="path61"
				/><path
					style="opacity:1;fill:#171617;fill-opacity:1;fill-rule:evenodd;stroke-width:0.3;stroke-linecap:round;stroke-miterlimit:4.1;paint-order:stroke fill markers"
					d="m 42.37587,74.000002 h 6.069605 V 88.87239 H 29.438515 V 87.795824 H 28.38051 V 62.527269 L 42,60.000001 h 16.458536 l 1.541465,1.541465 V 80 l 13.26348,-1.999998 v -8.674008 l 3.543737,-3.543736 V 86.414683 L 55,96.000003 H 52.421056 L 51.000001,94.578944 V 72.000001 H 39.238978 v 9.225057 L 40.798144,82.000002 42,81.000001 v -6.999999 z"
					id="path62"
				/><path
					style="opacity:1;fill:#41373d;fill-opacity:1;fill-rule:evenodd;stroke-width:0.3;stroke-linecap:round;stroke-miterlimit:4.1;paint-order:stroke fill markers"
					d="m 76.807218,86.414683 3.097487,-1.414682 V 65.336009 h -2.904704 l -0.192783,0.446249 z"
					id="path63"
				/><path
					style="opacity:1;fill:#e51414;fill-opacity:1;fill-rule:evenodd;stroke-width:0.3;stroke-linecap:round;stroke-miterlimit:4.1;paint-order:stroke fill markers"
					d="m 70.000002,69.352244 5.44222,-5.352243 7.979971,-12 c -2.041968,0.929906 -8.108716,0.82027 -11.895769,6.830596 -1.300245,2.063584 -2.0046,5.240998 -1.526422,10.521647 z"
					id="path65"
				/><path
					style="opacity:1;fill:#6b1514;fill-opacity:1;fill-rule:evenodd;stroke-width:0.3;stroke-linecap:round;stroke-miterlimit:4.1;paint-order:stroke fill markers"
					d="m 75.442222,64.000001 h 2.55778 c -0.6792,-3.36611 1.767475,-6.071545 3.417107,-8.984826 -2.368635,1.175501 -7.073346,1.788022 -5.974887,8.984826 z"
					id="path64"
				/><path
					style="opacity:1;fill:#e51414;fill-opacity:1;fill-rule:evenodd;stroke-width:0.3;stroke-linecap:round;stroke-miterlimit:4.1;paint-order:stroke fill markers"
					d="m 75.442222,64.000001 v -4.40736 l -2.442221,0.654391 z"
					id="path66"
				/><path
					style="opacity:1;fill:#3f1e1e;fill-opacity:1;fill-rule:evenodd;stroke-width:0.3;stroke-linecap:round;stroke-miterlimit:4.1;paint-order:stroke fill markers"
					d="m 66.000002,84 5.439352,4.774115 -5.535745,2.433228 z"
					id="path67"
				/><path
					style="opacity:1;fill:#3f1e1e;fill-opacity:1;fill-rule:evenodd;stroke-width:0.3;stroke-linecap:round;stroke-miterlimit:4.1;paint-order:stroke fill markers"
					d="m 65.507213,91.381576 -4.507211,-4.755126 0.288469,6.609466 z"
					id="path68"
				/><path
					style="opacity:1;fill:#3f1e1e;fill-opacity:1;fill-rule:evenodd;stroke-width:0.3;stroke-linecap:round;stroke-miterlimit:4.1;paint-order:stroke fill markers"
					d="M 60.586061,93.544659 55.350348,89.000001 55,96.000003 Z"
					id="path69"
				/><path
					style="opacity:1;fill:#761618;fill-opacity:1;fill-rule:evenodd;stroke-width:0.3;stroke-linecap:round;stroke-miterlimit:4.1;paint-order:stroke fill markers"
					d="M 55,61.267276 V 67 l -5,-2.88675 z"
					id="path70"
				/><path
					style="opacity:1;fill:#761618;fill-opacity:1;fill-rule:evenodd;stroke-width:0.3;stroke-linecap:round;stroke-miterlimit:4.1;paint-order:stroke fill markers"
					d="M 46,61.267276 V 67 l -5,-2.88675 z"
					id="path71"
				/><path
					style="opacity:1;fill:#761618;fill-opacity:1;fill-rule:evenodd;stroke-width:0.3;stroke-linecap:round;stroke-miterlimit:4.1;paint-order:stroke fill markers"
					d="m 37.000001,62.267278 v 5.732724 l -5,-2.88675 z"
					id="path72"
				/><rect
					style="opacity:1;fill:#383037;fill-opacity:1;fill-rule:evenodd;stroke-width:0.3;stroke-linecap:round;stroke-miterlimit:4.1;paint-order:stroke fill markers"
					id="rect72"
					width="7"
					height="9"
					x="37.000004"
					y="49"
				/><rect
					style="opacity:1;fill:#151415;fill-opacity:1;fill-rule:evenodd;stroke-width:0.3;stroke-linecap:round;stroke-miterlimit:4.1;paint-order:stroke fill markers"
					id="rect73"
					width="8.6194935"
					height="9.5287151"
					x="28.38051"
					y="50.058567"
				/><rect
					style="opacity:1;fill:#383037;fill-opacity:1;fill-rule:evenodd;stroke-width:0.3;stroke-linecap:round;stroke-miterlimit:4.1;paint-order:stroke fill markers"
					id="rect74"
					width="7"
					height="5.9062281"
					x="37.000004"
					y="40.267353"
				/><rect
					style="opacity:1;fill:#151415;fill-opacity:1;fill-rule:evenodd;stroke-width:0.3;stroke-linecap:round;stroke-miterlimit:4.1;paint-order:stroke fill markers"
					id="rect75"
					width="8.9126072"
					height="7.0349736"
					x="28.087397"
					y="40.267353"
				/><rect
					style="opacity:1;fill:#383037;fill-opacity:1;fill-rule:evenodd;stroke-width:0.3;stroke-linecap:round;stroke-miterlimit:4.1;paint-order:stroke fill markers"
					id="rect76"
					width="6.9999971"
					height="8.1148586"
					x="37.000004"
					y="30.000002"
				/><path
					style="opacity:1;fill:#151415;fill-opacity:1;fill-rule:evenodd;stroke-width:0.3;stroke-linecap:round;stroke-miterlimit:4.1;paint-order:stroke fill markers"
					d="m 37.000002,38.114861 h -9.000003 v -13.91245 h 3.289885 v -2.887489 h 2.99249 V 18 h 9.717627 v 12 h -6.999999 z"
					id="path76"
				/><rect
					style="opacity:1;fill:#151415;fill-opacity:1;fill-rule:evenodd;stroke-width:0.3;stroke-linecap:round;stroke-miterlimit:4.1;paint-order:stroke fill markers"
					id="rect77"
					width="8.7587023"
					height="6.6009288"
					x="48.241299"
					y="20.399071"
				/><rect
					style="opacity:1;fill:#151415;fill-opacity:1;fill-rule:evenodd;stroke-width:0.327119;stroke-linecap:round;stroke-miterlimit:4.1;paint-order:stroke fill markers"
					id="rect78"
					width="8.8352671"
					height="1.9999955"
					x="59.786545"
					y="17.000004"
				/><rect
					style="opacity:1;fill:#151415;fill-opacity:1;fill-rule:evenodd;stroke-width:0.3;stroke-linecap:round;stroke-miterlimit:4.1;paint-order:stroke fill markers"
					id="rect79"
					width="8.6380529"
					height="5.0000019"
					x="60.361946"
					y="18.999998"
				/><rect
					style="opacity:1;fill:#151415;fill-opacity:1;fill-rule:evenodd;stroke-width:0.358841;stroke-linecap:round;stroke-miterlimit:4.1;paint-order:stroke fill markers"
					id="rect80"
					width="9.0023108"
					height="1.999994"
					x="71.498848"
					y="16.000008"
				/><rect
					style="opacity:1;fill:#151415;fill-opacity:1;fill-rule:evenodd;stroke-width:0.3;stroke-linecap:round;stroke-miterlimit:4.1;paint-order:stroke fill markers"
					id="rect81"
					width="8.4802799"
					height="4.8120637"
					x="72.519722"
					y="18.000002"
				/><path
					style="opacity:1;fill:#e51414;fill-opacity:1;fill-rule:evenodd;stroke-width:0.3;stroke-linecap:round;stroke-miterlimit:4.1;paint-order:stroke fill markers"
					d="M 56.074246,20.39907 H 47.000001 V 15 Z"
					id="path81"
				/><path
					style="opacity:1;fill:#e51414;fill-opacity:1;fill-rule:evenodd;stroke-width:0.291086;stroke-linecap:round;stroke-miterlimit:4.1;paint-order:stroke fill markers"
					d="M 66.719257,17.000004 H 58.051043 V 11.888631 Z"
					id="path82"
				/><path
					style="opacity:1;fill:#e51414;fill-opacity:1;fill-rule:evenodd;stroke-width:0.3;stroke-linecap:round;stroke-miterlimit:4.1;paint-order:stroke fill markers"
					d="M 79.554524,16.000007 H 70.000002 V 10 Z"
					id="path83"
				/><path
					style="opacity:1;fill:#e51414;fill-opacity:1;fill-rule:evenodd;stroke-width:0.3;stroke-linecap:round;stroke-miterlimit:4.1;paint-order:stroke fill markers"
					d="M 48.241299,26.999999 55,32.000002 48.287704,32.000001 48.241299,27 Z"
					id="path84"
				/><path
					style="opacity:1;fill:#362e35;fill-opacity:1;fill-rule:evenodd;stroke-width:0.3;stroke-linecap:round;stroke-miterlimit:4.1;paint-order:stroke fill markers"
					d="m 48.241299,26.999999 h 8.7587 v 6.13225 h -1.278422 v -1.132247 h -0.721579 z"
					id="path85"
				/><path
					style="opacity:1;fill:#362e35;fill-opacity:1;fill-rule:evenodd;stroke-width:0.3;stroke-linecap:round;stroke-miterlimit:4.1;paint-order:stroke fill markers"
					d="m 60.361946,24 v 0.779582 l 6.96056,4.566125 v 0.835266 h 0.677495 v 0.819028 h 1 V 24 Z"
					id="path86"
				/><path
					style="opacity:1;fill:#362e35;fill-opacity:1;fill-rule:evenodd;stroke-width:0.3;stroke-linecap:round;stroke-miterlimit:4.1;paint-order:stroke fill markers"
					d="m 72.519722,22.812065 v 0.890951 l 6.080101,3.510348 v 0.786635 H 80 v 1.203018 h 1.000001 l 0.02032,-6.390952 z"
					id="path87"
				/><path
					style="opacity:1;fill:#e51414;fill-opacity:1;fill-rule:evenodd;stroke-width:0.3;stroke-linecap:round;stroke-miterlimit:4.1;paint-order:stroke fill markers"
					d="m 72.519722,23.703016 v 4.296983 h 6.098738 v -0.778848 z"
					id="path88"
				/><path
					style="opacity:1;fill:#e51414;fill-opacity:1;fill-rule:evenodd;stroke-width:0.3;stroke-linecap:round;stroke-miterlimit:4.1;paint-order:stroke fill markers"
					d="m 60.361946,24.779582 v 5.434056 l 6.96056,-0.03266 v -0.835266 z"
					id="path89"
				/><rect
					style="opacity:1;fill:#3b1c1a;fill-opacity:1;fill-rule:evenodd;stroke-width:0.323741;stroke-linecap:round;stroke-miterlimit:4.1;paint-order:stroke fill markers"
					id="rect89"
					width="10.000002"
					height="2.6598868"
					x="70"
					y="27.999998"
				/><rect
					style="opacity:1;fill:#3b1c1a;fill-opacity:1;fill-rule:evenodd;stroke-width:0.3;stroke-linecap:round;stroke-miterlimit:4.1;paint-order:stroke fill markers"
					id="rect90"
					width="8.7277184"
					height="2.526407"
					x="59.272282"
					y="30.180971"
				/><rect
					style="opacity:1;fill:#3b1c1a;fill-opacity:1;fill-rule:evenodd;stroke-width:0.292801;stroke-linecap:round;stroke-miterlimit:4.1;paint-order:stroke fill markers"
					id="rect91"
					width="9.7215748"
					height="2.6367462"
					x="46"
					y="32.000004"
				/><rect
					style="opacity:1;fill:#eee6a4;fill-opacity:1;fill-rule:evenodd;stroke-width:0.3;stroke-linecap:round;stroke-miterlimit:4.1;paint-order:stroke fill markers"
					id="rect92"
					width="3.7510192"
					height="3.7931092"
					x="52.620647"
					y="34.636749"
				/><rect
					style="opacity:1;fill:#eee6a4;fill-opacity:1;fill-rule:evenodd;stroke-width:0.3;stroke-linecap:round;stroke-miterlimit:4.1;paint-order:stroke fill markers"
					id="rect93"
					width="3.5556514"
					height="3.5568619"
					x="64.680969"
					y="32.799255"
				/><rect
					style="opacity:1;fill:#eee6a4;fill-opacity:1;fill-rule:evenodd;stroke-width:0.3;stroke-linecap:round;stroke-miterlimit:4.1;paint-order:stroke fill markers"
					id="rect94"
					width="3.5084009"
					height="3.6974237"
					x="76.77002"
					y="30.659885"
				/><rect
					style="opacity:1;fill:#6a4342;fill-opacity:1;fill-rule:evenodd;stroke-width:0.3;stroke-linecap:round;stroke-miterlimit:4.1;paint-order:stroke fill markers"
					id="rect95"
					width="6.7700195"
					height="3.697422"
					x="70"
					y="30.659885"
				/><rect
					style="opacity:1;fill:#6a4342;fill-opacity:1;fill-rule:evenodd;stroke-width:0.3;stroke-linecap:round;stroke-miterlimit:4.1;paint-order:stroke fill markers"
					id="rect96"
					width="5.4086876"
					height="3.6487389"
					x="59.272282"
					y="32.707378"
				/><rect
					style="opacity:1;fill:#6a4342;fill-opacity:1;fill-rule:evenodd;stroke-width:0.581878;stroke-linecap:round;stroke-miterlimit:4.1;paint-order:stroke fill markers"
					id="rect97"
					width="6.620646"
					height="3.7931101"
					x="46"
					y="34.636749"
				/><rect
					style="opacity:1;fill:#eee6a4;fill-opacity:1;fill-rule:evenodd;stroke-width:0.3;stroke-linecap:round;stroke-miterlimit:4.1;paint-order:stroke fill markers"
					id="rect98"
					width="3.3089335"
					height="3.4567144"
					x="49.691067"
					y="40"
				/><rect
					style="opacity:1;fill:#eee6a4;fill-opacity:1;fill-rule:evenodd;stroke-width:0.34641;stroke-linecap:round;stroke-miterlimit:4.1;paint-order:stroke fill markers"
					id="rect99"
					width="4.2900243"
					height="4.0000014"
					x="50.709976"
					y="48"
				/><rect
					style="opacity:1;fill:#6a4342;fill-opacity:1;fill-rule:evenodd;stroke-width:0.3;stroke-linecap:round;stroke-miterlimit:4.1;paint-order:stroke fill markers"
					id="rect100"
					width="3.3089333"
					height="2.6128912"
					x="49.691067"
					y="43.456715"
				/><rect
					style="opacity:1;fill:#3b1c1a;fill-opacity:1;fill-rule:evenodd;stroke-width:0.3;stroke-linecap:round;stroke-miterlimit:4.1;paint-order:stroke fill markers"
					id="rect101"
					width="3.5286536"
					height="6.0696058"
					x="46.162411"
					y="40"
				/><rect
					style="opacity:1;fill:#3b1c1a;fill-opacity:1;fill-rule:evenodd;stroke-width:0.3;stroke-linecap:round;stroke-miterlimit:4.1;paint-order:stroke fill markers"
					id="rect102"
					width="4.5475655"
					height="10"
					x="46.162411"
					y="48"
				/><rect
					style="opacity:1;fill:#6a4342;fill-opacity:1;fill-rule:evenodd;stroke-width:0.3;stroke-linecap:round;stroke-miterlimit:4.1;paint-order:stroke fill markers"
					id="rect103"
					width="4.2900252"
					height="6.0000014"
					x="50.709976"
					y="52"
				/><path
					style="opacity:1;fill:#1b191a;fill-opacity:1;fill-rule:evenodd;stroke-width:0.3;stroke-linecap:round;stroke-miterlimit:4.1;paint-order:stroke fill markers"
					d="m 83.461568,32.000002 v 5.16986 L 75,44.000001 v 1.791182 h -2.665894 v -3.248261 l 6.190112,-5.77262 v -1.225058 z"
					id="path103"
				/><path
					style="opacity:1;fill:#3c333a;fill-opacity:1;fill-rule:evenodd;stroke-width:0.3;stroke-linecap:round;stroke-miterlimit:4.1;paint-order:stroke fill markers"
					d="m 75,45.791183 8.461568,-3.804462 V 37.169862 L 75,44.000001 Z"
					id="path104"
				/><path
					style="opacity:1;fill:#e51414;fill-opacity:1;fill-rule:evenodd;stroke-width:0.3;stroke-linecap:round;stroke-miterlimit:4.1;paint-order:stroke fill markers"
					d="m 73.74478,6.2552204 h 9.65197 v 4.9187936 h -5.396748 z"
					id="path105"
				/><path
					style="opacity:1;fill:#570d0f;fill-opacity:1;fill-rule:evenodd;stroke-width:0.3;stroke-linecap:round;stroke-miterlimit:4.1;paint-order:stroke fill markers"
					d="M 46,13 C 39.213431,12.028894 32.44752,12.288629 25.672405,12 L 21.89242,7.9999998 22,6.0000001 44.999999,6.3262268 Z"
					id="path127"
				/><path
					style="opacity:1;fill:#e51414;fill-opacity:1;fill-rule:evenodd;stroke-width:0.3;stroke-linecap:round;stroke-miterlimit:4.1;paint-order:stroke fill markers"
					d="m 17.243619,6.0000002 v -2 H 45.178654 C 50.592169,6.4505182 54.331861,9.621812 54.719256,14.236659 51.86211,13.61525 48.99463,13.037713 46.000001,13 44.583861,9.3631321 40.370848,6.8687786 37.468679,6.7494205 Z"
					id="path106"
				/><path
					style="opacity:1;fill:#570d0f;fill-opacity:1;fill-rule:evenodd;stroke-width:0.3;stroke-linecap:round;stroke-miterlimit:4.1;paint-order:stroke fill markers"
					d="M 14.463697,22 V 18 L 7.512864,11.801205 C 8.5986551,17.36814 9.9002929,22.555095 14.463697,22 Z"
					id="path126"
				/><path
					style="opacity:1;fill:#e51414;fill-opacity:1;fill-rule:evenodd;stroke-width:0.3;stroke-linecap:round;stroke-miterlimit:4.1;paint-order:stroke fill markers"
					d="M 5,4.6724829 C 9.8000329,8.0038987 14.609178,11.327725 19,15 v 4 c -0.700238,1.292632 -1.410585,2.575395 -3,3 H 14.463697 V 18 C 10.309364,16.133194 8.5544924,12.826711 6.0000001,10 Z"
					id="path107"
				/><path
					style="opacity:1;fill:#570d0f;fill-opacity:1;fill-rule:evenodd;stroke-width:0.3;stroke-linecap:round;stroke-miterlimit:4.1;paint-order:stroke fill markers"
					d="m 14.726201,31.552385 -0.0412,3.447616 C 10.819865,34.587319 10.051509,30.937095 8.3111781,28.303026 Z"
					id="path125"
				/><path
					style="opacity:1;fill:#e51414;fill-opacity:1;fill-rule:evenodd;stroke-width:0.3;stroke-linecap:round;stroke-miterlimit:4.1;paint-order:stroke fill markers"
					d="m 4.0000002,21.288672 13.2436188,8.18997 C 17.258371,30.640433 17.501489,31.773679 17,33 c -0.13911,0.5991 -0.375104,1.231904 -1,2.000001 l -1.314999,0 0.0412,-3.447616 c -2.312557,-0.37204 -4.713905,-1.809566 -7.1662237,-3.858736 z"
					id="path108"
				/><path
					style="opacity:1;fill:#e51414;fill-opacity:1;fill-rule:evenodd;stroke-width:0.3;stroke-linecap:round;stroke-miterlimit:4.1;paint-order:stroke fill markers"
					d="m 5.4862298,38.37736 c 1.0056887,1.536003 1.9662555,3.070678 3.5137703,4.622641 2.2176019,0.600234 3.8071269,0.931293 5.5686959,1.336085 l 0.105,3.12374 C 15.364484,47.528063 16.29526,47.057096 17,45.701082 17.347015,44.344837 17.317715,42.621093 17,41.264847 13.530597,39.210846 9.5313998,38.917411 5.4862298,38.37736 Z"
					id="path109"
				/><path
					style="opacity:1;fill:#e51414;fill-opacity:1;fill-rule:evenodd;stroke-width:0.3;stroke-linecap:round;stroke-miterlimit:4.1;paint-order:stroke fill markers"
					d="m 10,57.000002 h 5 v 3.401025 c 0.824028,-0.540895 1.684583,-1.042829 2,-2.126242 0.309026,-1.114265 0.285784,-2.26762 0,-3.451862 L 15.408693,53.000002 H 7.0000002 Z"
					id="path110"
				/><path
					style="opacity:1;fill:#e51414;fill-opacity:1;fill-rule:evenodd;stroke-width:0.3;stroke-linecap:round;stroke-miterlimit:4.1;paint-order:stroke fill markers"
					d="M 8.0000002,65.632503 10,69.000001 h 4.542446 L 15,72.370983 17.351186,70.638489 17,67 c -0.525496,-0.551593 -1.18392,-1.058284 -2.326304,-1.401493 z"
					id="path111"
				/><path
					style="opacity:1;fill:#580e10;fill-opacity:1;fill-rule:evenodd;stroke-width:0.3;stroke-linecap:round;stroke-miterlimit:4.1;paint-order:stroke fill markers"
					d="M 27.000001,118.2181 27.000004,121 21.38283,119 18,112.63109 18.393752,111 l -0.01882,-10 3.625069,1.66357 v 8.98376 c 1.284023,2.10776 2.828598,4.27169 5,6.57077 z"
					id="path115"
				/><path
					style="opacity:1;fill:#e51414;fill-opacity:1;fill-rule:evenodd;stroke-width:0.3;stroke-linecap:round;stroke-miterlimit:4.1;paint-order:stroke fill markers"
					d="M 27.000001,118.2181 35.415312,124 C 32.284509,124.17231 17.476319,123.51198 14,111.27334 V 97.000001 L 18.374932,101 l 0.01882,10 c 1.863705,3.76295 3.451914,7.48119 8.606252,10 z"
					id="path112"
				/><path
					style="opacity:1;fill:#580e10;fill-opacity:1;fill-rule:evenodd;stroke-width:0.3;stroke-linecap:round;stroke-miterlimit:4.1;paint-order:stroke fill markers"
					d="M 9.187935,98.580045 11,100 11.338746,112.15081 C 9.5684011,112.42765 9.1110505,111.46582 9.187935,110 Z"
					id="path114"
				/><path
					style="opacity:1;fill:#e51414;fill-opacity:1;fill-rule:evenodd;stroke-width:0.3;stroke-linecap:round;stroke-miterlimit:4.1;paint-order:stroke fill markers"
					d="m 5,95.000002 4.187935,3.580043 V 110 c 0.777612,1.4147 1.470953,1.86028 2.150811,2.15081 -0.303884,4.4061 -0.954412,8.44319 -2.7819015,11.22738 C 6.6520874,119.02127 5.5192483,114.33354 5,109.38283 Z"
					id="path113"
				/><path
					style="opacity:1;fill:#30282f;fill-opacity:1;fill-rule:evenodd;stroke-width:0.3;stroke-linecap:round;stroke-miterlimit:4.1;paint-order:stroke fill markers"
					d="M 11,96.730893 V 74.000002 L 9.4933676,71.390438 8.5568445,90.301624 C 8.298025,94.137701 9.2527448,96.059412 11,96.730893 Z"
					id="path116"
				/><path
					style="opacity:1;fill:#100f10;fill-opacity:1;fill-rule:evenodd;stroke-width:0.3;stroke-linecap:round;stroke-miterlimit:4.1;paint-order:stroke fill markers"
					d="M 9.4933674,71.390438 C 7.8742027,77.11442 7.2466457,83.750077 6.1995359,90.000001 6.7117126,94.600917 8.727241,95.944572 11,96.730893 L 9.7574594,85.419953 Z"
					id="path117"
				/><path
					style="opacity:1;fill:#332b32;fill-opacity:1;fill-rule:evenodd;stroke-width:0.3;stroke-linecap:round;stroke-miterlimit:4.1;paint-order:stroke fill markers"
					d="m 23.795823,100.23202 c -1.239149,-0.11464 -2.186263,-0.594317 -3.00696,-1.232018 V 10.190255 C 22.720623,11.633988 23.375564,13.31417 24,15 v 85.39276 z"
					id="path118"
				/><path
					style="opacity:1;fill:#111011;fill-opacity:1;fill-rule:evenodd;stroke-width:0.3;stroke-linecap:round;stroke-miterlimit:4.1;paint-order:stroke fill markers"
					d="m 14.489947,8 c 2.343593,0.2055825 4.642618,0.5069886 6.298916,2.190255 v 4.509691 C 19.12493,12.561678 16.660657,10.935994 14.489947,9.4499651 Z"
					id="path119"
				/><path
					style="opacity:1;fill:#111011;fill-opacity:1;fill-rule:evenodd;stroke-width:0.3;stroke-linecap:round;stroke-miterlimit:4.1;paint-order:stroke fill markers"
					d="m 20.788863,99.000002 c -3.262839,-1.491985 -4.75012,-4.587699 -6.552204,-7.399076 L 14.459397,74.320185 18,71.25754 h 2.788863 z"
					id="path120"
				/><path
					style="opacity:1;fill:#111011;fill-opacity:1;fill-rule:evenodd;stroke-width:0.3;stroke-linecap:round;stroke-miterlimit:4.1;paint-order:stroke fill markers"
					d="m 18,71.25754 1,-1.000001 c 0.371707,-0.798976 0.172051,-1.526532 0,-2.257538 C 18.121657,66.339043 17.230508,64.68123 14.403712,63.49884 L 14.236659,61.735498 C 16.472678,60.56794 18.871517,59.612856 20,57.000002 19.56473,54.066556 17.431171,52.057179 14.62645,50.412993 17.510589,48.402993 19.128701,46.349033 20,44.269141 19.825862,41.973704 18.006116,39.678268 14.682134,37.382831 16.825125,35.739043 18.902254,34.049789 20,31.684454 20.045624,28.313935 17.195633,26.29881 14,24.445475 16.28635,23.284362 18.568134,22.118135 20,20 l 0.788863,0.02784 v 51.2297 z"
					id="path121"
				/><path
					style="opacity:1;fill:#570d0f;fill-opacity:1;fill-rule:evenodd;stroke-width:0.3;stroke-linecap:round;stroke-miterlimit:4.1;paint-order:stroke fill markers"
					d="m 15,57.000002 v 3.401025 c -2.915234,-0.005 -4.024201,-1.642834 -5,-3.401025 z"
					id="path123"
				/><path
					style="opacity:1;fill:#570d0f;fill-opacity:1;fill-rule:evenodd;stroke-width:0.3;stroke-linecap:round;stroke-miterlimit:4.1;paint-order:stroke fill markers"
					d="m 10,69.000001 h 4.542446 L 15,72.370981 c -2.038748,0.507771 -3.601075,-1.073375 -5,-3.37098 z"
					id="path122"
				/><path
					style="opacity:1;fill:#570d0f;fill-opacity:1;fill-rule:evenodd;stroke-width:0.3;stroke-linecap:round;stroke-miterlimit:4.1;paint-order:stroke fill markers"
					d="m 14.568696,44.336086 0.105,3.123739 C 11.947799,47.30417 10.459098,45.175687 9.0000001,43.000001 Z"
					id="path124"
				/><path
					style="opacity:1;fill:#e31212;fill-opacity:1;fill-rule:evenodd;stroke-width:0.3;stroke-linecap:round;stroke-miterlimit:4.1;paint-order:stroke fill markers"
					d="M 111.70302,62.292343 115,59.489559 c 1.78694,2.63782 4.65769,4.036987 9.21345,3.510441 -0.98209,1.857662 -2.06002,3.776575 -6.23654,2.793324 -1.74403,-0.410586 -3.81767,-0.946218 -6.27389,-3.500981 z"
					id="path128"
				/><path
					style="opacity:1;fill:#3f1e1e;fill-opacity:1;fill-rule:evenodd;stroke-width:0.3;stroke-linecap:round;stroke-miterlimit:4.1;paint-order:stroke fill markers"
					d="m 111.70302,62.292343 c -0.58854,-2.275402 -1.56689,-4.335167 -3.09977,-6.088168 H 96.625896 C 92.337861,52.846971 90.366962,50.235963 88.698423,47.722324 V 42.157345 L 85.065329,40.059776 V 33 h 6.494333 v 10.102342 h 1.758744 l 7.271224,7.271223 H 101 v -3.373564 l 5.85023,5.316056 L 107.19148,50 112.37584,54.416049 113.18958,54 v -2.773312 l 0.27029,0.07242 v 1.266323 h 0.69763 c 0.20839,3.628915 0.29297,6.901557 0.8425,6.924127 z"
					id="path129"
				/><path
					style="opacity:1;fill:#351818;fill-opacity:1;fill-rule:evenodd;stroke-width:0.3;stroke-linecap:round;stroke-miterlimit:4.1;paint-order:stroke fill markers"
					d="m 115,20.38051 v 15.461718 c 4.17491,0.489281 6.67663,2.25547 9,4.157774 v -15.59165 c -0.90394,-1.809523 -2.14042,-3.454517 -5.31787,-4.139211 z"
					id="path130"
				/><path
					style="opacity:1;fill:#3a3138;fill-opacity:1;fill-rule:evenodd;stroke-width:0.3;stroke-linecap:round;stroke-miterlimit:4.1;paint-order:stroke fill markers"
					d="m 85.327145,20.547564 v 10.452437 h 8.672856 v 5.751737 h 1.000001 v -5.976797 l 5.380508,4.733179 H 101 v -4.807423 l 6.79523,6.062292 L 108,30.817386 113.33396,36.000002 115,35.842228 v -6.337337 z"
					id="path137"
				/><path
					style="opacity:1;fill:#151415;fill-opacity:1;fill-rule:evenodd;stroke-width:0.3;stroke-linecap:round;stroke-miterlimit:4.1;paint-order:stroke fill markers"
					d="M 78.000002,11.174014 85.290021,18 85.327145,20.547564 88,21.75406 v 5.860838 L 106.60086,31.000001 107,27.4574 l 8,2.047491 V 20.38051 L 110,19 103.38747,12.232018 h -4.361949 l 1.627669,2.819201 C 98.713816,15.341401 96.468629,14.819944 94.293684,13.485546 90.590789,11.2137 86.436087,7.3350251 83.396748,6.2552204 Z"
					id="path131"
				/><path
					style="opacity:1;fill:#85181b;fill-opacity:1;fill-rule:evenodd;stroke-width:0.3;stroke-linecap:round;stroke-miterlimit:4.1;paint-order:stroke fill markers"
					d="M 95.000002,25 104.25986,27.220417 104,29.791182 95.000003,28.454756 Z"
					id="path132"
				/><path
					style="opacity:1;fill:#f1ecb0;fill-opacity:1;fill-rule:evenodd;stroke-width:0.3;stroke-linecap:round;stroke-miterlimit:4.1;paint-order:stroke fill markers"
					d="m 98.641047,25.873084 4.477653,1.073694 -0.19674,2.684324 -4.184043,-0.621296 z"
					id="path133"
				/><path
					style="opacity:1;fill:#e41313;fill-opacity:1;fill-rule:evenodd;stroke-width:0.3;stroke-linecap:round;stroke-miterlimit:4.1;paint-order:stroke fill markers"
					d="m 84.696056,14 h 1.986078 L 98.000001,24.723898 91.000002,23 Z"
					id="path134"
				/><path
					style="opacity:1;fill:#e41313;fill-opacity:1;fill-rule:evenodd;stroke-width:0.3;stroke-linecap:round;stroke-miterlimit:4.1;paint-order:stroke fill markers"
					d="M 93.215776,16.482598 94.64501,16.63109 105,27.000001 99.62993,25.225058 Z"
					id="path135"
				/><path
					style="opacity:1;fill:#e41313;fill-opacity:1;fill-rule:evenodd;stroke-width:0.3;stroke-linecap:round;stroke-miterlimit:4.1;paint-order:stroke fill markers"
					d="m 99.526681,18.320186 5.209409,1.679815 2.34511,7 -7.45127,-7.638052 z"
					id="path136"
				/><path
					style="opacity:1;fill:#4f4dee;fill-opacity:1;fill-rule:evenodd;stroke-width:0.3;stroke-linecap:round;stroke-miterlimit:4.1;paint-order:stroke fill markers"
					d="m 95.363251,45.147187 h 1.63675 l 2.801114,2.801115 v -1.804451 h 1.990065 L 105.64733,50 106.18323,48.000001 108,48.486803 v 0.868185 l 3.69838,3.698375 v -3.067285 h 2.43619 v 1.225057 l -0.94499,0.01556 v 2.773312 l -0.81374,0.416049 -5.18436,-4.416049 -0.34125,2.316057 L 101,47.000006 v 3.373564 h -0.41037 z"
					id="path138"
				/><path
					style="opacity:1;fill:#3f1e1e;fill-opacity:1;fill-rule:evenodd;stroke-width:0.3;stroke-linecap:round;stroke-miterlimit:4.1;paint-order:stroke fill markers"
					d="m 114.1575,52.565432 -0.69763,-1.266325 -0.044,-0.07614 -0.22633,0.0037 0.27029,1.338736 z"
					id="path139"
				/><path
					style="opacity:1;fill:#6b1514;fill-opacity:1;fill-rule:evenodd;stroke-width:0.3;stroke-linecap:round;stroke-miterlimit:4.1;paint-order:stroke fill markers"
					d="M 96.371229,39.665894 V 33 l 3.258701,3.621809 z"
					id="path140"
				/><path
					style="opacity:1;fill:#6b1514;fill-opacity:1;fill-rule:evenodd;stroke-width:0.3;stroke-linecap:round;stroke-miterlimit:4.1;paint-order:stroke fill markers"
					d="M 102.37065,39.665894 V 33 l 3.2587,3.621809 z"
					id="path141"
				/><path
					style="opacity:1;fill:#6b1514;fill-opacity:1;fill-rule:evenodd;stroke-width:0.3;stroke-linecap:round;stroke-miterlimit:4.1;paint-order:stroke fill markers"
					d="M 109.37065,39.665894 V 33 l 3.2587,3.621809 z"
					id="path142"
				/><path
					style="opacity:1;fill:#6b1514;fill-opacity:1;fill-rule:evenodd;stroke-width:0.3;stroke-linecap:round;stroke-miterlimit:4.1;paint-order:stroke fill markers"
					d="M 111.69838,53.053363 V 46.385151 L 108,48.52041 v 0.834578 z"
					id="path143"
				/><path
					style="opacity:1;fill:#6b1514;fill-opacity:1;fill-rule:evenodd;stroke-width:0.3;stroke-linecap:round;stroke-miterlimit:4.1;paint-order:stroke fill markers"
					d="m 105.64733,50 0.5359,-1.999999 v -4.547565 l -4.39205,2.691415 z"
					id="path144"
				/><path
					style="opacity:1;fill:#6b1514;fill-opacity:1;fill-rule:evenodd;stroke-width:0.3;stroke-linecap:round;stroke-miterlimit:4.1;paint-order:stroke fill markers"
					d="m 99.801113,47.948302 v -6.426261 l -3.619487,3.625146 h 0.818375 z"
					id="path145"
				/><path
					style="opacity:1;fill:#c6f1ff;fill-opacity:1;fill-rule:evenodd;stroke-width:0.3;stroke-linecap:round;stroke-miterlimit:4.1;paint-order:stroke fill markers"
					d="m 99.801113,44.937354 v -3.415313 h 1.201207 V 39.071925 H 98.793502 L 99.095958,37.943141 102.27378,38 l 0.0969,1.665894 1.26624,-1.165895 L 105,39.000001 v 4.13689 h -3.65429 l -0.0371,2.010296 H 100 Z"
					id="path148"
				/><path
					style="opacity:1;fill:#e8e6ba;fill-opacity:1;fill-rule:evenodd;stroke-width:0.3;stroke-linecap:round;stroke-miterlimit:4.1;paint-order:stroke fill markers"
					d="m 98.7935,39.071925 -1.222759,-0.526544 0.923432,-0.860222 0.601783,0.257982 z"
					id="path149"
				/><path
					style="opacity:1;fill:#4f4dee;fill-opacity:1;fill-rule:evenodd;stroke-width:0.3;stroke-linecap:round;stroke-miterlimit:4.1;paint-order:stroke fill markers"
					d="m 85.065329,33 v -1.999999 h 8.934672 L 91.559662,33 Z"
					id="path150"
				/><path
					style="opacity:1;fill:#4f4dee;fill-opacity:1;fill-rule:evenodd;stroke-width:0.3;stroke-linecap:round;stroke-miterlimit:4.1;paint-order:stroke fill markers"
					d="m 91.559662,33 h 2.440339 v -1.999999 z"
					id="path151"
				/><path
					style="opacity:1;fill:#4f4dee;fill-opacity:1;fill-rule:evenodd;stroke-width:0.3;stroke-linecap:round;stroke-miterlimit:4.1;paint-order:stroke fill markers"
					d="m 95.000002,34 h 1.371227 v -1 l 1.816407,2.018802 0.90832,-0.618304 -4.095954,-3.625557 z"
					id="path152"
				/><path
					style="opacity:1;fill:#4f4dee;fill-opacity:1;fill-rule:evenodd;stroke-width:0.3;stroke-linecap:round;stroke-miterlimit:4.1;paint-order:stroke fill markers"
					d="m 101,35.214245 1.37065,-0.105 V 33 l 3.2587,3.621809 0.82541,0.825405 h 2.91589 V 33 l 3.2587,3.621809 0.70461,-0.621807 L 108,30.817386 107.79523,36.762989 101,30.700697 Z"
					id="path153"
				/><path
					style="opacity:1;fill:#c6f1ff;fill-opacity:1;fill-rule:evenodd;stroke-width:0.3;stroke-linecap:round;stroke-miterlimit:4.1;paint-order:stroke fill markers"
					d="M 98.494173,37.685162 99.095956,37.943141 102.27378,38 Z"
					id="path155"
				/><path
					style="opacity:1;fill:#c6f1ff;fill-opacity:1;fill-rule:evenodd;stroke-width:0.3;stroke-linecap:round;stroke-miterlimit:4.1;paint-order:stroke fill markers"
					d="m 102.27378,38 0.0969,0.0464 3e-5,1.619491 z"
					id="path156"
				/><path
					style="opacity:1;fill:#c6f1ff;fill-opacity:1;fill-rule:evenodd;stroke-width:0.3;stroke-linecap:round;stroke-miterlimit:4.1;paint-order:stroke fill markers"
					d="m 92.711787,37.53132 0.288214,-0.01857 z"
					id="path157"
				/><path
					style="opacity:1;fill:#c6f1ff;fill-opacity:1;fill-rule:evenodd;stroke-width:0.3;stroke-linecap:round;stroke-miterlimit:4.1;paint-order:stroke fill markers"
					d="m 94.000004,37.568446 v -0.0557 c 0,0 -1.000003,0 -1.000003,0 l -0.288219,0.01857 z"
					id="path158"
				/><path
					style="opacity:1;fill:#e8e6ba;fill-opacity:1;fill-rule:evenodd;stroke-width:0.3;stroke-linecap:round;stroke-miterlimit:4.1;paint-order:stroke fill markers"
					d="m 98.7935,39.071925 0.354838,-1.329923 -0.654165,-0.05684 z"
					id="path159"
				/></g
			><circle
				style="opacity:0.65605096;fill:#131307;fill-opacity:1;fill-rule:evenodd;stroke-width:0.3;stroke-linecap:round;stroke-miterlimit:4.1;paint-order:stroke fill markers;filter:url(#filter312)"
				id="path310"
				cx="112.05833"
				cy="39.73135"
				r="4.7313504"
			/><circle
				style="opacity:0.65605096;fill:#131307;fill-opacity:1;fill-rule:evenodd;stroke-width:0.3;stroke-linecap:round;stroke-miterlimit:4.1;paint-order:stroke fill markers;filter:url(#filter313)"
				id="path311"
				cx="97.429558"
				cy="41.253391"
				r="4.8133516"
			/><circle
				style="opacity:0.65605096;fill:#131307;fill-opacity:1;fill-rule:evenodd;stroke-width:0.3;stroke-linecap:round;stroke-miterlimit:4.1;paint-order:stroke fill markers;filter:url(#filter314)"
				id="path312"
				cx="104.98345"
				cy="51.245537"
				r="5.0165548"
			/><circle
				style="opacity:0.656051;fill:#131307;fill-opacity:1;fill-rule:evenodd;stroke-width:0.3;stroke-linecap:round;stroke-miterlimit:4.1;paint-order:stroke fill markers;filter:url(#filter312)"
				id="circle314"
				cx="116.08889"
				cy="38.388298"
				r="4.7313504"
			/><circle
				style="opacity:0.656051;fill:#131307;fill-opacity:1;fill-rule:evenodd;stroke-width:0.3;stroke-linecap:round;stroke-miterlimit:4.1;paint-order:stroke fill markers;filter:url(#filter313)"
				id="circle315"
				cx="101.46012"
				cy="39.910339"
				r="4.8133516"
			/><circle
				style="opacity:0.656051;fill:#131307;fill-opacity:1;fill-rule:evenodd;stroke-width:0.3;stroke-linecap:round;stroke-miterlimit:4.1;paint-order:stroke fill markers;filter:url(#filter314)"
				id="circle316"
				cx="109.01402"
				cy="49.902485"
				r="5.0165548"
			/><circle
				style="opacity:0.656051;fill:#131307;fill-opacity:1;fill-rule:evenodd;stroke-width:0.3;stroke-linecap:round;stroke-miterlimit:4.1;paint-order:stroke fill markers;filter:url(#filter312)"
				id="circle317"
				cx="111.83618"
				cy="45.120754"
				r="4.7313504"
			/><circle
				style="opacity:0.656051;fill:#131307;fill-opacity:1;fill-rule:evenodd;stroke-width:0.3;stroke-linecap:round;stroke-miterlimit:4.1;paint-order:stroke fill markers;filter:url(#filter313)"
				id="circle318"
				cx="97.207413"
				cy="46.642796"
				r="4.8133516"
			/><circle
				style="opacity:0.656051;fill:#131307;fill-opacity:1;fill-rule:evenodd;stroke-width:0.3;stroke-linecap:round;stroke-miterlimit:4.1;paint-order:stroke fill markers;filter:url(#filter314)"
				id="circle319"
				cx="104.76131"
				cy="56.634941"
				r="5.0165548"
			/><circle
				style="opacity:0.656051;fill:#131307;fill-opacity:1;fill-rule:evenodd;stroke-width:0.3;stroke-linecap:round;stroke-miterlimit:4.1;paint-order:stroke fill markers;filter:url(#filter312)"
				id="circle320"
				cx="122.92962"
				cy="37.0051"
				r="4.7313504"
			/><circle
				style="opacity:0.656051;fill:#131307;fill-opacity:1;fill-rule:evenodd;stroke-width:0.3;stroke-linecap:round;stroke-miterlimit:4.1;paint-order:stroke fill markers;filter:url(#filter313)"
				id="circle321"
				cx="108.30085"
				cy="38.527142"
				r="4.8133516"
			/><circle
				style="opacity:0.656051;fill:#131307;fill-opacity:1;fill-rule:evenodd;stroke-width:0.3;stroke-linecap:round;stroke-miterlimit:4.1;paint-order:stroke fill markers;filter:url(#filter314)"
				id="circle322"
				cx="115.85474"
				cy="48.519287"
				r="5.0165548"
			/></g
		><metadata id="metadata310"
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
