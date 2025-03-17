<!-- Created with Inkscape (http://www.inkscape.org/) -->
<script lang="ts">
	import bg from '$lib/client/images/monster/official/bg-512.webp';
	interface Props {
		size?: string;
		background?: boolean;
	}

	let { size = '128px', background = false }: Props = $props();

	let backgroundStyle = $derived(
		background
			? `width: ${size}; height: ${size}; background-image: url('${bg}'); background-size: ${size}`
			: `width: ${size}; height: ${size};`,
	);
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
				id="filter6016"
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
					id="feComposite6002"
				/><feColorMatrix
					in="composite1"
					values="1"
					type="saturate"
					result="colormatrix1"
					id="feColorMatrix6004"
				/><feFlood
					flood-opacity="1"
					flood-color="rgb(0,0,0)"
					result="flood1"
					id="feFlood6006"
				/><feBlend
					in="flood1"
					in2="colormatrix1"
					mode="multiply"
					result="blend1"
					id="feBlend6008"
				/><feBlend
					in2="blend1"
					mode="screen"
					result="blend2"
					id="feBlend6010"
				/><feColorMatrix
					in="blend2"
					values="1"
					type="saturate"
					result="colormatrix2"
					id="feColorMatrix6012"
				/><feComposite
					in="colormatrix2"
					in2="SourceGraphic"
					operator="in"
					k2="1"
					result="composite2"
					id="feComposite6014"
				/></filter
			></defs
		>
		<!-- svelte-ignore a11y_no_static_element_interactions -->
		<!-- svelte-ignore a11y_mouse_events_have_key_events -->
		<g id="layer1"
			><g
				id="g5637"
				style="filter:url(#filter6016)"
				transform="translate(1.0583333,1.5875)"
				><path
					style="opacity:1;fill:#5e3518;fill-opacity:1;fill-rule:evenodd;stroke-width:1.32;stroke-linecap:round;stroke-linejoin:round;stroke-miterlimit:3;paint-order:stroke fill markers"
					d="M 11.90625,89.296874 H 41.010417 L 26.458333,74.744791 Z"
					id="path5625"
				/><path
					style="opacity:1;fill:#c22c2c;fill-opacity:1;fill-rule:evenodd;stroke-width:1.2;stroke-linecap:round;stroke-linejoin:round;stroke-miterlimit:3;paint-order:stroke fill markers"
					d="m 50.270833,92.604166 h 6.614583 v 11.906254 h 11.90625 V 92.604166 h 7.9375 V 111.125 H 48.947916 V 92.604166 Z"
					id="path5627"
				/><path
					style="opacity:1;fill:#fe8f54;fill-opacity:1;fill-rule:evenodd;stroke-width:1.2;stroke-linecap:round;stroke-linejoin:round;stroke-miterlimit:3;paint-order:stroke fill markers"
					d="m 43.656249,92.604166 h 6.614584 V 108.47917 H 75.40625 l -10e-7,-15.875004 h 6.614583 V 115.09375 H 43.656249 Z"
					id="path5629"
				/><path
					style="opacity:1;fill:#fe7f44;fill-opacity:1;fill-rule:evenodd;stroke-width:1.2;stroke-linecap:round;stroke-linejoin:round;stroke-miterlimit:3;paint-order:stroke fill markers"
					d="m 70.114582,88.635416 h 9.260417 V 76.729166 L 104.51042,59.531249 V 13.229167 H 21.166666 v 42.333332 l 23.8125,11.90625 h 9.260417 L 76.729166,44.979166 63.499999,31.75 h -6.614583 l -3.704167,2.645833 3.704167,11.90625 L 43.656249,52.916666 34.395833,35.71875 37.041666,26.458333 66.145832,23.8125 83.343749,26.458333 V 51.593749 L 64.822916,70.114582 Z"
					id="path5631"
				/><path
					style="opacity:1;fill:#c22c2c;fill-opacity:1;fill-rule:evenodd;stroke-width:1.2;stroke-linecap:round;stroke-linejoin:round;stroke-miterlimit:3;paint-order:stroke fill markers"
					d="m 47.624999,88.635416 v -9.260417 l 31.75,-31.75 V 27.78125 H 39.6875 v 13.229166 l 6.614583,6.614583 5.291666,-5.291666 -3.96875,-2.291358 5.556251,-5.646142 11.641666,11.551774 -13.229167,13.229167 h -6.614583 l -15.875,-9.165434 V 22.489583 H 95.249999 V 48.947916 L 70.114582,74.083332 v 14.552084 z"
					id="path5633"
				/><path
					style="opacity:1;fill:#5e3518;fill-opacity:1;fill-rule:evenodd;stroke-width:1.32;stroke-linecap:round;stroke-linejoin:round;stroke-miterlimit:3;paint-order:stroke fill markers"
					d="M 86.651042,89.296874 H 115.75521 L 101.20312,74.744791 Z"
					id="path5635"
				/></g
			><g id="g5623"
				><path
					style="opacity:1;fill:#5e3518;fill-opacity:1;fill-rule:evenodd;stroke-width:1.32;stroke-linecap:round;stroke-linejoin:round;stroke-miterlimit:3;paint-order:stroke fill markers"
					d="M 11.90625,89.296874 H 41.010417 L 26.458333,74.744791 Z"
					id="path910"
				/><path
					style="opacity:1;fill:#c22c2c;fill-opacity:1;fill-rule:evenodd;stroke-width:1.2;stroke-linecap:round;stroke-linejoin:round;stroke-miterlimit:3;paint-order:stroke fill markers"
					d="m 50.270833,92.604166 h 6.614583 v 11.906254 h 11.90625 V 92.604166 h 7.9375 V 111.125 H 48.947916 V 92.604166 Z"
					id="path3275"
				/><path
					style="opacity:1;fill:#fe8f54;fill-opacity:1;fill-rule:evenodd;stroke-width:1.2;stroke-linecap:round;stroke-linejoin:round;stroke-miterlimit:3;paint-order:stroke fill markers"
					d="m 43.656249,92.604166 h 6.614584 l 0,15.875004 H 75.40625 l -10e-7,-15.875004 h 6.614583 V 115.09375 H 43.656249 Z"
					id="path2218"
				/><path
					style="opacity:1;fill:#fe7f44;fill-opacity:1;fill-rule:evenodd;stroke-width:1.2;stroke-linecap:round;stroke-linejoin:round;stroke-miterlimit:3;paint-order:stroke fill markers"
					d="m 70.114582,88.635416 h 9.260417 V 76.729166 L 104.51042,59.531249 V 13.229167 H 21.166666 v 42.333332 l 23.8125,11.90625 h 9.260417 L 76.729166,44.979166 63.499999,31.75 h -6.614583 l -3.704167,2.645833 3.704167,11.90625 L 43.656249,52.916666 34.395833,35.71875 37.041666,26.458333 66.145832,23.8125 83.343749,26.458333 V 51.593749 L 64.822916,70.114582 Z"
					id="path4100"
				/><path
					style="opacity:1;fill:#c22c2c;fill-opacity:1;fill-rule:evenodd;stroke-width:1.2;stroke-linecap:round;stroke-linejoin:round;stroke-miterlimit:3;paint-order:stroke fill markers"
					d="m 47.624999,88.635416 v -9.260417 l 31.75,-31.75 V 27.78125 H 39.6875 v 13.229166 l 6.614583,6.614583 5.291666,-5.291666 -3.96875,-2.291358 5.556251,-5.646142 11.641666,11.551774 -13.229167,13.229167 h -6.614583 l -15.875,-9.165434 V 22.489583 H 95.249999 V 48.947916 L 70.114582,74.083332 v 14.552084 z"
					id="path4098"
				/><path
					style="opacity:1;fill:#5e3518;fill-opacity:1;fill-rule:evenodd;stroke-width:1.32;stroke-linecap:round;stroke-linejoin:round;stroke-miterlimit:3;paint-order:stroke fill markers"
					d="M 86.651042,89.296874 H 115.75521 L 101.20312,74.744791 Z"
					id="path5615"
				/></g
			></g
		><metadata id="metadata6744">
			<!-- svelte-ignore attribute_illegal_colon -->
			<!-- 	data-license="https://creativecommons.org/licenses/by-nc-sa/4.0/" data-author="Doriel Rivalet"--></metadata
		></svg
	>
</div>
