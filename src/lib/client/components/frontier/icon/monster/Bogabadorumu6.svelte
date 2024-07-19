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
				id="filter20529"
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
					id="feComposite20515"
				/><feColorMatrix
					in="composite1"
					values="1"
					type="saturate"
					result="colormatrix1"
					id="feColorMatrix20517"
				/><feFlood
					flood-opacity="1"
					flood-color="rgb(0,0,0)"
					result="flood1"
					id="feFlood20519"
				/><feBlend
					in="flood1"
					in2="colormatrix1"
					mode="multiply"
					result="blend1"
					id="feBlend20521"
				/><feBlend
					in2="blend1"
					mode="screen"
					result="blend2"
					id="feBlend20523"
				/><feColorMatrix
					in="blend2"
					values="1"
					type="saturate"
					result="colormatrix2"
					id="feColorMatrix20525"
				/><feComposite
					in="colormatrix2"
					in2="SourceGraphic"
					operator="in"
					k2="1"
					result="composite2"
					id="feComposite20527"
				/></filter
			></defs
		><g
			id="g20513"
			style="filter:url(#filter20529)"
			transform="translate(1.0583333,1.5875)"
			><path
				style="fill:#535a63;fill-opacity:1;fill-rule:evenodd;stroke:none;stroke-width:1.5;stroke-linecap:round;stroke-linejoin:round;stroke-miterlimit:3"
				d="m 76.993749,47.889583 h 5.291667 l -1.852084,6.614583 c -0.283813,0.716039 -1.245421,1.066467 -2.38125,1.322917 l -12.964583,2.38125 C 62.84981,58.564426 62.37181,57.079364 62.177083,55.297916 l 6.085416,-17.991666 0.79375,-0.79375 0.264583,-0.264584 h 23.547917 c 1.451064,0.258068 2.105522,1.465491 2.116666,3.439584 v 31.220832 c -2.666805,0.03355 -5.290429,0.367815 -7.672916,2.38125 l -10.054167,-11.112499 -1.058333,-2.645834 5.291667,-1.852083 4.7625,-12.7 h -10.31875 c -0.289981,-0.211529 -0.774276,0.07616 -1.322917,0.529167 l -0.529167,0.529166 v 0.529167 l -0.79375,2.38125 -0.529166,2.645833 h 2.910416 z"
				id="path20184"
			/><path
				style="fill:#4a5880;fill-opacity:1;fill-rule:evenodd;stroke:none;stroke-width:1.5;stroke-linecap:round;stroke-linejoin:round;stroke-miterlimit:3"
				d="m 87.312499,73.289582 -8.73125,-13.229166 -2.38125,-0.529167 -1.5875,0.529167 -11.641666,3.704167 -1.322917,-0.529167 -1.5875,0.264583 -13.758333,2.645833 -1.058334,0.264584 H 35.71875 l -8.202084,-8.73125 -7.9375,5.027083 -1.852083,2.38125 v 16.933333 l 2.910417,2.645834 v -4.497917 h 5.490104 l 2.976562,6.614583 5.027084,4.497917 3.96875,1.5875 h 41.936457 l -4.894791,-5.55625 v -2.38125 z"
				id="path20186"
			/><ellipse
				style="fill:#5e8dfd;fill-opacity:1;fill-rule:evenodd;stroke:none;stroke-width:3.15832;stroke-linecap:round;stroke-linejoin:round;stroke-miterlimit:3"
				id="ellipse20188"
				cx="14.155209"
				cy="39.952084"
				rx="2.778125"
				ry="2.5135412"
			/><path
				style="fill:#535a63;fill-opacity:1;fill-rule:evenodd;stroke:none;stroke-width:1.5;stroke-linecap:round;stroke-linejoin:round;stroke-miterlimit:3"
				d="m 6.8791666,42.597916 4.4979164,-2.38125 3.439583,-2.645833 4.497917,-7.408333 h 2.38125 v 1.852083 h 1.058333 l 4.497917,-6.35 h 2.38125 L 28.575,27.78125 h 2.910417 L 34.925,23.01875 H 38.1 l -1.058333,2.116667 h 2.38125 L 43.127083,20.6375 h 3.175 l -0.79375,1.5875 h 1.852083 l 3.704167,-4.7625 h 3.175 l -1.5875,2.910416 h 2.38125 l 2.645833,-3.704166 h 3.704167 l -1.322917,2.645833 h 2.116667 l 3.175,-3.96875 h 3.175 l -1.639399,2.645833 h 1.374815 L 70.114582,30.427083 56.885416,39.6875 51.593749,54.239583 37.041666,59.531249 29.633333,57.149999 17.197916,48.154166 c -1.735853,0.386007 -3.481657,0.908807 -5.027083,-1.322917 H 8.7312499 Z"
				id="path20190"
			/><path
				style="fill:#c3d0da;fill-opacity:1;fill-rule:evenodd;stroke:none;stroke-width:1.5;stroke-linecap:round;stroke-linejoin:round;stroke-miterlimit:3"
				d="m 90.487499,92.604166 4.497916,-2.116667 v 16.668751 c -0.262544,1.27321 -0.681263,2.44777 -2.645833,2.64583 H 20.108333 c -1.422161,-0.29085 -2.566161,-0.95186 -2.138602,-3.70416 v -9.789588 l -6.328064,-6.328066 v -9.28235 L 23.01875,92.074999 v 12.170831 c -0.02706,1.59695 0.877239,2.06069 2.116666,2.11667 h 62.441666 c 2.040917,0.22883 2.774558,-0.89844 2.910418,-2.64583 z"
				id="path20192"
			/><path
				style="fill:#b0b9c2;fill-opacity:1;fill-rule:evenodd;stroke:none;stroke-width:1.3798;stroke-linecap:round;stroke-linejoin:round;stroke-miterlimit:3"
				d="M 30.691666,109.27292 V 106.3625 H 33.3375 v 2.91042 z"
				id="path20194"
			/><path
				style="fill:#b0b9c2;fill-opacity:1;fill-rule:evenodd;stroke:none;stroke-width:1.5;stroke-linecap:round;stroke-linejoin:round;stroke-miterlimit:3"
				d="m 19.84375,109.80208 3.96875,-3.70416 c -0.459127,-0.2699 -0.703893,-0.7283 -0.79375,-1.32292 l -4.497917,4.23333 c 0.303943,0.52344 0.794587,0.69419 1.322917,0.79375 z"
				id="path20196"
			/><path
				style="fill:#b0b9c2;fill-opacity:1;fill-rule:evenodd;stroke:none;stroke-width:1.5;stroke-linecap:round;stroke-linejoin:round;stroke-miterlimit:3"
				d="m 16.66875,94.985415 1.322916,1.322917 v 1.5875 l 5.027084,-5.291666 v -0.529167 l -1.5875,-1.5875 z"
				id="path20198"
			/><path
				style="fill:#b0b9c2;fill-opacity:1;fill-rule:evenodd;stroke:none;stroke-width:1.5;stroke-linecap:round;stroke-linejoin:round;stroke-miterlimit:3"
				d="m 43.127083,109.80208 v -3.43958 h 2.645834 v 3.43958 z"
				id="path20200"
			/><path
				style="fill:#b0b9c2;fill-opacity:1;fill-rule:evenodd;stroke:none;stroke-width:1.5;stroke-linecap:round;stroke-linejoin:round;stroke-miterlimit:3"
				d="m 55.562499,109.80208 v -3.43958 h 2.645834 v 3.43958 z"
				id="path20202"
			/><path
				style="fill:#b0b9c2;fill-opacity:1;fill-rule:evenodd;stroke:none;stroke-width:1.5;stroke-linecap:round;stroke-linejoin:round;stroke-miterlimit:3"
				d="m 67.997917,109.80208 v -3.43958 h 2.645834 v 3.43958 z"
				id="path20204"
			/><path
				style="fill:#b0b9c2;fill-opacity:1;fill-rule:evenodd;stroke:none;stroke-width:1.5;stroke-linecap:round;stroke-linejoin:round;stroke-miterlimit:3"
				d="M 11.641667,87.577082 15.08125,84.137499 11.641667,80.697916 Z"
				id="path20206"
			/><path
				style="fill:#b0b9c2;fill-opacity:1;fill-rule:evenodd;stroke:none;stroke-width:1.5;stroke-linecap:round;stroke-linejoin:round;stroke-miterlimit:3"
				d="m 82.020833,109.80208 v -3.43958 h 2.645834 v 3.43958 z"
				id="path20208"
			/><path
				style="fill:#b0b9c2;fill-opacity:1;fill-rule:evenodd;stroke:none;stroke-width:1.5;stroke-linecap:round;stroke-linejoin:round;stroke-miterlimit:3"
				d="m 94.985415,99.483332 v -2.645833 h -4.497916 v 2.645833 z"
				id="path20210"
			/><path
				style="fill:#535a63;fill-opacity:1;fill-rule:evenodd;stroke:none;stroke-width:1.5;stroke-linecap:round;stroke-linejoin:round;stroke-miterlimit:3"
				d="m 11.641667,89.958332 v 21.695838 c 0.396939,5.63257 9.083771,3.77712 15.345833,4.1119 h 75.14167 c 2.62356,0.30664 2.01579,-1.96217 2.11666,-3.66617 V 75.406249 l -4.497915,-4.7625 V 37.835416 c -0.181691,-3.158231 -2.447016,-4.592289 -6.879166,-4.233333 2.073523,1.312786 4.516778,2.448688 4.497916,4.7625 v 33.337499 l 5.027085,5.820834 v 9.789583 l -7.408335,3.175 V 106.3625 l -10.318749,2.7649 H 19.84375 V 92.604166 Z"
				id="path20212"
			/><path
				style="fill:#b0b9c2;fill-opacity:1;fill-rule:evenodd;stroke:none;stroke-width:1.5;stroke-linecap:round;stroke-linejoin:round;stroke-miterlimit:3"
				d="m 90.487499,104.51042 2.645834,2.38125 -2.116666,0.52916 -2.381251,-1.05833 c 1.086085,-0.13594 1.439089,-1.02482 1.852083,-1.85208 z"
				id="path20214"
			/><path
				style="fill:#333436;fill-opacity:1;fill-rule:evenodd;stroke:none;stroke-width:1.58229;stroke-linecap:round;stroke-linejoin:round;stroke-miterlimit:3"
				d="m 43.127083,109.12976 h 2.645833 v 6.63631 h -2.645833 z"
				id="path20216"
			/><path
				style="fill:#333436;fill-opacity:1;fill-rule:evenodd;stroke:none;stroke-width:1.58229;stroke-linecap:round;stroke-linejoin:round;stroke-miterlimit:3"
				d="m 55.562499,109.12976 h 2.645834 v 6.63631 h -2.645834 z"
				id="path20218"
			/><path
				style="fill:#333436;fill-opacity:1;fill-rule:evenodd;stroke:none;stroke-width:1.58229;stroke-linecap:round;stroke-linejoin:round;stroke-miterlimit:3"
				d="m 67.997916,109.12976 h 2.645833 v 6.63631 h -2.645833 z"
				id="path20220"
			/><path
				style="fill:#333436;fill-opacity:1;fill-rule:evenodd;stroke:none;stroke-width:1.58229;stroke-linecap:round;stroke-linejoin:round;stroke-miterlimit:3"
				d="m 82.020832,109.12976 h 2.645834 v 6.63631 h -2.645834 z"
				id="path20222"
			/><path
				style="fill:#333436;fill-opacity:1;fill-rule:evenodd;stroke:none;stroke-width:1.5;stroke-linecap:round;stroke-linejoin:round;stroke-miterlimit:3"
				d="m 104.24583,114.03542 c -0.17295,0.88588 -0.38738,1.7467 -1.85208,1.85208 l -11.377083,-8.46667 2.116666,-0.52916 z"
				id="path20224"
			/><path
				style="fill:#333436;fill-opacity:1;fill-rule:evenodd;stroke:none;stroke-width:1.5;stroke-linecap:round;stroke-linejoin:round;stroke-miterlimit:3"
				d="m 94.985415,96.837499 h 9.260415 v 2.645833 h -9.260415 z"
				id="path20226"
			/><path
				style="fill:#47515a;fill-opacity:1;fill-rule:evenodd;stroke:none;stroke-width:1.5;stroke-linecap:round;stroke-linejoin:round;stroke-miterlimit:3"
				d="m 9.7895832,100.27708 1.8520838,-1.322915 v -3.704166 l -1.8520838,1.5875 z"
				id="path20228"
			/><path
				style="fill:#7ba7fe;fill-opacity:1;fill-rule:evenodd;stroke:none;stroke-width:1.5;stroke-linecap:round;stroke-linejoin:round;stroke-miterlimit:3"
				d="M 9.7895832,100.27708 11.641667,98.954165 V 109.27292 L 9.7895832,109.5375 Z"
				id="path20230"
			/><path
				style="fill:#47515a;fill-opacity:1;fill-rule:evenodd;stroke:none;stroke-width:1.5;stroke-linecap:round;stroke-linejoin:round;stroke-miterlimit:3"
				d="m 11.641667,101.33542 -1.8520838,1.5875 v 3.43958 l 1.8520838,-1.32292 z"
				id="path20232"
			/><path
				style="fill:#47515a;fill-opacity:1;fill-rule:evenodd;stroke:none;stroke-width:1.5;stroke-linecap:round;stroke-linejoin:round;stroke-miterlimit:3"
				d="m 11.641667,107.95 -1.8520838,1.5875 v 3.43958 l 1.8520838,-1.5875 z"
				id="path20234"
			/><path
				style="fill:#52d8cc;fill-opacity:1;fill-rule:evenodd;stroke:none;stroke-width:1.5;stroke-linecap:round;stroke-linejoin:round;stroke-miterlimit:3"
				d="m 5.0270833,101.33542 4.7624999,-4.497921 v 3.439581 l -4.7624999,3.70417 z"
				id="path20236"
			/><path
				style="fill:#52d8cc;fill-opacity:1;fill-rule:evenodd;stroke:none;stroke-width:1.5;stroke-linecap:round;stroke-linejoin:round;stroke-miterlimit:3"
				d="m 5.0270833,107.42084 4.7624999,-4.49794 v 3.4396 l -4.7624999,3.70417 z"
				id="path20238"
			/><path
				style="fill:#52d8cc;fill-opacity:1;fill-rule:evenodd;stroke:none;stroke-width:1.5;stroke-linecap:round;stroke-linejoin:round;stroke-miterlimit:3"
				d="m 5.0270833,114.03542 4.7624999,-4.49794 v 3.4396 l -4.7624999,3.70417 z"
				id="path20240"
			/><path
				style="fill:#5e8cfd;fill-opacity:1;fill-rule:evenodd;stroke:none;stroke-width:1.5;stroke-linecap:round;stroke-linejoin:round;stroke-miterlimit:3"
				d="m 9.7895832,100.27708 v -2.116665 l -1.5875,1.5875 v 1.763885 z"
				id="path20242"
			/><path
				style="fill:#5e8cfd;fill-opacity:1;fill-rule:evenodd;stroke:none;stroke-width:1.5;stroke-linecap:round;stroke-linejoin:round;stroke-miterlimit:3"
				d="m 9.7895832,106.3625 v -2.11667 l -1.5875,1.5875 v 1.76389 z"
				id="path20244"
			/><path
				style="fill:#5e8cfd;fill-opacity:1;fill-rule:evenodd;stroke:none;stroke-width:1.5;stroke-linecap:round;stroke-linejoin:round;stroke-miterlimit:3"
				d="m 9.7895832,112.88889 v -2.11667 l -1.5875,1.5875 v 1.76389 z"
				id="path20246"
			/><path
				style="fill:#efdfa1;fill-opacity:1;fill-rule:evenodd;stroke:none;stroke-width:1.5;stroke-linecap:round;stroke-linejoin:round;stroke-miterlimit:3"
				d="m 11.377083,119.0625 8.73125,-0.79375 -5.820833,-4.49792 c -0.712219,1.74236 -1.438924,3.48593 -2.910417,5.29167 z"
				id="path20248"
			/><path
				style="fill:#dc8476;fill-opacity:1;fill-rule:evenodd;stroke:none;stroke-width:1.5;stroke-linecap:round;stroke-linejoin:round;stroke-miterlimit:3"
				d="m 28.575,113.77083 -5.820834,7.14375 C 19.4286,120.72247 16.156959,120.50797 8.2020832,122.2375 l 3.1749998,-3.175 8.73125,-0.79375 z"
				id="path20250"
			/><path
				style="fill:#dc8476;fill-opacity:1;fill-rule:evenodd;stroke:none;stroke-width:1.5;stroke-linecap:round;stroke-linejoin:round;stroke-miterlimit:3"
				d="m 14.2875,113.77083 h 14.287494 l -8.466661,4.49792 z"
				id="path20252"
			/><path
				style="fill:#efdfa1;fill-opacity:1;fill-rule:evenodd;stroke:none;stroke-width:1.5;stroke-linecap:round;stroke-linejoin:round;stroke-miterlimit:3"
				d="M 20.108333,116.94583 15.875,113.77083 H 26.19375 Z"
				id="path20255"
			/><path
				style="fill:#333436;fill-opacity:1;fill-rule:evenodd;stroke:none;stroke-width:1.58229;stroke-linecap:round;stroke-linejoin:round;stroke-miterlimit:3"
				d="M 30.691666,109.12976 H 33.3375 v 6.63631 h -2.645834 z"
				id="path20257"
			/><path
				style="fill:#efdfa1;fill-opacity:1;fill-rule:evenodd;stroke:none;stroke-width:1.5;stroke-linecap:round;stroke-linejoin:round;stroke-miterlimit:3"
				d="m 30.1625,119.0625 8.73125,-0.79375 -5.820833,-4.49792 c -0.712219,1.74236 -1.438924,3.48593 -2.910417,5.29167 z"
				id="path20259"
			/><path
				style="fill:#dc8476;fill-opacity:1;fill-rule:evenodd;stroke:none;stroke-width:1.5;stroke-linecap:round;stroke-linejoin:round;stroke-miterlimit:3"
				d="m 47.360417,113.77083 -5.820834,7.14375 c -3.325566,-0.19211 -6.597207,-0.40661 -14.552083,1.32292 l 3.175,-3.175 8.73125,-0.79375 z"
				id="path20261"
			/><path
				style="fill:#dc8476;fill-opacity:1;fill-rule:evenodd;stroke:none;stroke-width:1.5;stroke-linecap:round;stroke-linejoin:round;stroke-miterlimit:3"
				d="m 33.072917,113.77083 h 14.287494 l -8.466661,4.49792 z"
				id="path20263"
			/><path
				style="fill:#efdfa1;fill-opacity:1;fill-rule:evenodd;stroke:none;stroke-width:1.5;stroke-linecap:round;stroke-linejoin:round;stroke-miterlimit:3"
				d="m 38.89375,116.94583 -4.233333,-3.175 h 10.31875 z"
				id="path20265"
			/><path
				style="fill:#efdfa1;fill-opacity:1;fill-rule:evenodd;stroke:none;stroke-width:1.5;stroke-linecap:round;stroke-linejoin:round;stroke-miterlimit:3"
				d="m 48.947919,119.0625 8.73125,-0.79375 -5.820833,-4.49792 c -0.712219,1.74236 -1.438924,3.48593 -2.910417,5.29167 z"
				id="path20267"
			/><path
				style="fill:#dc8476;fill-opacity:1;fill-rule:evenodd;stroke:none;stroke-width:1.5;stroke-linecap:round;stroke-linejoin:round;stroke-miterlimit:3"
				d="m 66.145836,113.77083 -5.820834,7.14375 c -3.325566,-0.19211 -6.597207,-0.40661 -14.552083,1.32292 l 3.175,-3.175 8.73125,-0.79375 z"
				id="path20269"
			/><path
				style="fill:#dc8476;fill-opacity:1;fill-rule:evenodd;stroke:none;stroke-width:1.5;stroke-linecap:round;stroke-linejoin:round;stroke-miterlimit:3"
				d="M 51.858336,113.77083 H 66.14583 l -8.466661,4.49792 z"
				id="path20271"
			/><path
				style="fill:#efdfa1;fill-opacity:1;fill-rule:evenodd;stroke:none;stroke-width:1.5;stroke-linecap:round;stroke-linejoin:round;stroke-miterlimit:3"
				d="m 57.679169,116.94583 -4.233333,-3.175 h 10.31875 z"
				id="path20273"
			/><path
				style="fill:#efdfa1;fill-opacity:1;fill-rule:evenodd;stroke:none;stroke-width:1.5;stroke-linecap:round;stroke-linejoin:round;stroke-miterlimit:3"
				d="M 67.46875,119.0625 76.2,118.26875 70.379167,113.77083 c -0.712219,1.74236 -1.438924,3.48593 -2.910417,5.29167 z"
				id="path20275"
			/><path
				style="fill:#dc8476;fill-opacity:1;fill-rule:evenodd;stroke:none;stroke-width:1.5;stroke-linecap:round;stroke-linejoin:round;stroke-miterlimit:3"
				d="m 84.666667,113.77083 -5.820834,7.14375 c -3.325566,-0.19211 -6.597207,-0.40661 -14.552083,1.32292 l 3.175,-3.175 8.73125,-0.79375 z"
				id="path20277"
			/><path
				style="fill:#dc8476;fill-opacity:1;fill-rule:evenodd;stroke:none;stroke-width:1.5;stroke-linecap:round;stroke-linejoin:round;stroke-miterlimit:3"
				d="M 70.379167,113.77083 H 84.666661 L 76.2,118.26875 Z"
				id="path20279"
			/><path
				style="fill:#efdfa1;fill-opacity:1;fill-rule:evenodd;stroke:none;stroke-width:1.5;stroke-linecap:round;stroke-linejoin:round;stroke-miterlimit:3"
				d="m 76.2,116.94583 -4.233333,-3.175 h 10.31875 z"
				id="path20281"
			/><path
				style="fill:#efdfa1;fill-opacity:1;fill-rule:evenodd;stroke:none;stroke-width:1.5;stroke-linecap:round;stroke-linejoin:round;stroke-miterlimit:3"
				d="m 86.254169,119.0625 8.73125,-0.79375 -5.820833,-4.49792 c -0.712219,1.74236 -1.438924,3.48593 -2.910417,5.29167 z"
				id="path20283"
			/><path
				style="fill:#dc8476;fill-opacity:1;fill-rule:evenodd;stroke:none;stroke-width:1.5;stroke-linecap:round;stroke-linejoin:round;stroke-miterlimit:3"
				d="m 103.45209,113.77083 -5.820838,7.14375 c -3.325566,-0.19211 -6.597207,-0.40661 -14.552083,1.32292 l 3.175,-3.175 8.73125,-0.79375 z"
				id="path20285"
			/><path
				style="fill:#dc8476;fill-opacity:1;fill-rule:evenodd;stroke:none;stroke-width:1.5;stroke-linecap:round;stroke-linejoin:round;stroke-miterlimit:3"
				d="m 89.164586,113.77083 h 14.287494 l -8.466661,4.49792 z"
				id="path20287"
			/><path
				style="fill:#efdfa1;fill-opacity:1;fill-rule:evenodd;stroke:none;stroke-width:1.5;stroke-linecap:round;stroke-linejoin:round;stroke-miterlimit:3"
				d="m 94.985419,116.94583 -4.233333,-3.175 h 10.318754 z"
				id="path20289"
			/><path
				style="fill:#efdfa1;fill-opacity:1;fill-rule:evenodd;stroke:none;stroke-width:1.5;stroke-linecap:round;stroke-linejoin:round;stroke-miterlimit:3"
				d="m 109.80209,111.52188 -0.79375,-8.73125 -4.76251,5.82083 c 1.74236,0.71222 3.75052,1.43892 5.55626,2.91042 z"
				id="path20291"
			/><path
				style="fill:#dc8476;fill-opacity:1;fill-rule:evenodd;stroke:none;stroke-width:1.5;stroke-linecap:round;stroke-linejoin:round;stroke-miterlimit:3"
				d="m 104.24583,94.323959 7.40834,5.820831 c -0.19211,3.32557 -0.40661,6.59721 1.32292,14.55209 l -3.175,-3.175 -0.79375,-8.73125 z"
				id="path20293"
			/><path
				style="fill:#dc8476;fill-opacity:1;fill-rule:evenodd;stroke:none;stroke-width:1.5;stroke-linecap:round;stroke-linejoin:round;stroke-miterlimit:3"
				d="m 104.24583,108.61146 1e-5,-14.287495 4.7625,8.466665 z"
				id="path20295"
			/><path
				style="fill:#efdfa1;fill-opacity:1;fill-rule:evenodd;stroke:none;stroke-width:1.5;stroke-linecap:round;stroke-linejoin:round;stroke-miterlimit:3"
				d="m 107.68542,102.79063 -3.175,4.23333 V 96.705209 Z"
				id="path20297"
			/><path
				style="fill:#efdfa1;fill-opacity:1;fill-rule:evenodd;stroke:none;stroke-width:1.5;stroke-linecap:round;stroke-linejoin:round;stroke-miterlimit:3"
				d="m 109.80209,93.927084 -0.79375,-8.73125 -4.76251,5.820833 c 1.74236,0.712219 3.75052,1.438924 5.55626,2.910417 z"
				id="path20299"
			/><path
				style="fill:#dc8476;fill-opacity:1;fill-rule:evenodd;stroke:none;stroke-width:1.5;stroke-linecap:round;stroke-linejoin:round;stroke-miterlimit:3"
				d="m 104.24583,76.729167 7.40834,5.820834 c -0.19211,3.325566 -0.40661,6.597207 1.32292,14.552083 l -3.175,-3.175 -0.79375,-8.73125 z"
				id="path20301"
			/><path
				style="fill:#dc8476;fill-opacity:1;fill-rule:evenodd;stroke:none;stroke-width:1.5;stroke-linecap:round;stroke-linejoin:round;stroke-miterlimit:3"
				d="m 104.24583,91.016667 v -14.2875 l 4.76251,8.466667 z"
				id="path20303"
			/><path
				style="fill:#efdfa1;fill-opacity:1;fill-rule:evenodd;stroke:none;stroke-width:1.5;stroke-linecap:round;stroke-linejoin:round;stroke-miterlimit:3"
				d="m 107.68542,85.195834 -3.43959,4.233333 v -10.31875 z"
				id="path20305"
			/><path
				style="fill:#000000;fill-opacity:1;fill-rule:evenodd;stroke:none;stroke-width:1.5;stroke-linecap:round;stroke-linejoin:round;stroke-miterlimit:3"
				d="m 11.641667,40.216666 1.5875,-1.852083 h 5.556249 l -1.852083,1.852083 z"
				id="path20307"
			/><ellipse
				style="fill:#6a0607;fill-opacity:1;fill-rule:evenodd;stroke:none;stroke-width:1.59682;stroke-linecap:round;stroke-linejoin:round;stroke-miterlimit:3"
				id="ellipse20309"
				cy="33.721836"
				cx="24.410706"
				rx="0.78230226"
				ry="0.91268587"
				transform="rotate(16.601548)"
			/><path
				style="fill:#b7c3ca;fill-opacity:1;fill-rule:evenodd;stroke:none;stroke-width:1.5;stroke-linecap:round;stroke-linejoin:round;stroke-miterlimit:3"
				d="m 14.022916,41.010416 0.79375,-0.79375 h 2.116667 L 22.225,34.925 h 1.322916 l -5.027083,6.085416 z"
				id="path20311"
			/><path
				style="fill:#646d76;fill-opacity:1;fill-rule:evenodd;stroke:none;stroke-width:1.5;stroke-linecap:round;stroke-linejoin:round;stroke-miterlimit:3"
				d="m 18.520833,41.010416 h 1.322917 l 4.233333,-4.233333 H 26.9875 V 34.925 h -3.439584 z"
				id="path20313"
			/><path
				style="fill:#b7c3ca;fill-opacity:1;fill-rule:evenodd;stroke:none;stroke-width:1.5;stroke-linecap:round;stroke-linejoin:round;stroke-miterlimit:3"
				d="m 28.575,34.395833 2.116666,-1.058333 0.79375,1.322916 -1.852083,1.322917 z"
				id="path20315"
			/><path
				style="fill:#b7c3ca;fill-opacity:1;fill-rule:evenodd;stroke:none;stroke-width:1.5;stroke-linecap:round;stroke-linejoin:round;stroke-miterlimit:3"
				d="M 35.454166,33.072916 34.395833,31.75 36.5125,30.427083 37.30625,31.75 Z"
				id="path20317"
			/><path
				style="fill:#b7c3ca;fill-opacity:1;fill-rule:evenodd;stroke:none;stroke-width:1.5;stroke-linecap:round;stroke-linejoin:round;stroke-miterlimit:3"
				d="m 39.952083,29.104166 2.116666,-1.058333 0.79375,1.322917 -2.116666,1.322916 z"
				id="path20319"
			/><path
				style="fill:#b7c3ca;fill-opacity:1;fill-rule:evenodd;stroke:none;stroke-width:1.5;stroke-linecap:round;stroke-linejoin:round;stroke-miterlimit:3"
				d="m 45.243749,26.722916 2.116667,-1.058333 0.79375,1.5875 -2.116667,1.058333 z"
				id="path20321"
			/><path
				style="fill:#b7c3ca;fill-opacity:1;fill-rule:evenodd;stroke:none;stroke-width:1.5;stroke-linecap:round;stroke-linejoin:round;stroke-miterlimit:3"
				d="M 51.59375,26.458333 53.710416,25.4 l -0.529167,-1.322917 -2.38125,0.79375 z"
				id="path20323"
			/><path
				style="fill:#b7c3ca;fill-opacity:1;fill-rule:evenodd;stroke:none;stroke-width:1.5;stroke-linecap:round;stroke-linejoin:round;stroke-miterlimit:3"
				d="m 56.620833,23.283333 2.38125,-0.264583 0.264583,1.5875 -2.116667,0.264583 z"
				id="path20325"
			/><path
				style="fill:#b7c3ca;fill-opacity:1;fill-rule:evenodd;stroke:none;stroke-width:1.5;stroke-linecap:round;stroke-linejoin:round;stroke-miterlimit:3"
				d="m 61.912499,22.754166 2.38125,-0.264583 v 1.5875 l -2.116666,0.264583 z"
				id="path20327"
			/><path
				style="fill:#b7c3ca;fill-opacity:1;fill-rule:evenodd;stroke:none;stroke-width:1.5;stroke-linecap:round;stroke-linejoin:round;stroke-miterlimit:3"
				d="m 40.216666,34.925 4.233333,-2.116667 0.79375,1.852083 -4.233333,1.852084 z"
				id="path20329"
			/><path
				style="fill:#b7c3ca;fill-opacity:1;fill-rule:evenodd;stroke:none;stroke-width:1.5;stroke-linecap:round;stroke-linejoin:round;stroke-miterlimit:3"
				d="m 46.831249,33.866666 3.96875,-1.852083 -0.79375,-1.5875 -3.96875,1.852083 z"
				id="path20331"
			/><path
				style="fill:#b7c3ca;fill-opacity:1;fill-rule:evenodd;stroke:none;stroke-width:1.5;stroke-linecap:round;stroke-linejoin:round;stroke-miterlimit:3"
				d="m 51.593749,29.897916 4.233334,-1.322916 0.529166,1.5875 -3.96875,1.322916 z"
				id="path20333"
			/><path
				style="fill:#b7c3ca;fill-opacity:1;fill-rule:evenodd;stroke:none;stroke-width:1.5;stroke-linecap:round;stroke-linejoin:round;stroke-miterlimit:3"
				d="m 92.074999,40.216666 v -3.439583 h -2.645833 l -2.116667,5.55625 h 2.116667 l 0.79375,-2.116667 z"
				id="path20335"
			/><ellipse
				style="fill:#54ded2;fill-opacity:1;fill-rule:evenodd;stroke:none;stroke-width:2.44304;stroke-linecap:round;stroke-linejoin:round;stroke-miterlimit:3"
				id="ellipse20337"
				cx="5.5836258"
				cy="52.168324"
				rx="2.78901"
				ry="1.7237029"
				transform="rotate(-18.000009)"
			/><ellipse
				style="fill:#54ded2;fill-opacity:1;fill-rule:evenodd;stroke:none;stroke-width:2.99554;stroke-linecap:round;stroke-linejoin:round;stroke-miterlimit:3"
				id="ellipse20339"
				cx="15.405753"
				cy="54.179451"
				rx="3.1940351"
				ry="2.2628694"
				transform="matrix(0.93326231,-0.35919557,0.26452853,0.96437786,0,0)"
			/><circle
				style="fill:#54ded2;fill-opacity:1;fill-rule:evenodd;stroke:none;stroke-width:2.875;stroke-linecap:round;stroke-linejoin:round;stroke-miterlimit:3"
				id="circle20341"
				cx="25.267708"
				cy="49.477085"
				r="3.0427089"
			/><ellipse
				style="fill:#000000;fill-opacity:1;fill-rule:evenodd;stroke:none;stroke-width:1.97443;stroke-linecap:round;stroke-linejoin:round;stroke-miterlimit:3"
				id="ellipse20343"
				cx="15.405753"
				cy="54.179451"
				rx="2.1052642"
				ry="1.4915109"
				transform="matrix(0.93326231,-0.35919557,0.26452853,0.96437786,0,0)"
			/><ellipse
				style="fill:#000000;fill-opacity:1;fill-rule:evenodd;stroke:none;stroke-width:1.5;stroke-linecap:round;stroke-linejoin:round;stroke-miterlimit:3"
				id="ellipse20345"
				cx="5.5836258"
				cy="52.168324"
				rx="1.7124193"
				ry="1.0583333"
				transform="rotate(-18.000009)"
			/><circle
				style="fill:#000000;fill-opacity:1;fill-rule:evenodd;stroke:none;stroke-width:1.875;stroke-linecap:round;stroke-linejoin:round;stroke-miterlimit:3"
				id="circle20347"
				cx="25.267708"
				cy="49.477085"
				r="1.9843762"
			/><path
				style="fill:#54ded2;fill-opacity:1;fill-rule:evenodd;stroke:none;stroke-width:1.5;stroke-linecap:round;stroke-linejoin:round;stroke-miterlimit:3"
				d="m 31.75,46.566666 13.493749,-5.027083 -0.264583,-1.322917 -13.49375,5.027083 z"
				id="path20349"
			/><path
				style="fill:#54ded2;fill-opacity:1;fill-rule:evenodd;stroke:none;stroke-width:1.5;stroke-linecap:round;stroke-linejoin:round;stroke-miterlimit:3"
				d="M 31.75,46.566666 H 31.485416 L 31.75,46.302083 Z"
				id="path20351"
			/><path
				style="fill:#333436;fill-opacity:1;fill-rule:evenodd;stroke:none;stroke-width:1.5;stroke-linecap:round;stroke-linejoin:round;stroke-miterlimit:3"
				d="m 33.3375,38.629166 1.058333,0.79375 -1.058333,0.529167 -1.058334,-0.79375 z"
				id="path20353"
			/><path
				style="fill:#333436;fill-opacity:1;fill-rule:evenodd;stroke:none;stroke-width:1.5;stroke-linecap:round;stroke-linejoin:round;stroke-miterlimit:3"
				d="M 37.835417,36.777083 38.89375,37.570833 37.835417,38.1 36.777083,37.30625 Z"
				id="path20355"
			/><path
				style="fill:#333436;fill-opacity:1;fill-rule:evenodd;stroke:none;stroke-width:1.5;stroke-linecap:round;stroke-linejoin:round;stroke-miterlimit:3"
				d="m 42.333334,38.761458 1.058333,0.79375 -1.058333,0.529167 -1.058334,-0.79375 z"
				id="path20357"
			/><path
				style="fill:#333436;fill-opacity:1;fill-rule:evenodd;stroke:none;stroke-width:1.5;stroke-linecap:round;stroke-linejoin:round;stroke-miterlimit:3"
				d="m 37.835417,40.084375 1.058333,0.79375 -1.058333,0.529167 -1.058334,-0.79375 z"
				id="path20359"
			/><path
				style="fill:#333436;fill-opacity:1;fill-rule:evenodd;stroke:none;stroke-width:1.5;stroke-linecap:round;stroke-linejoin:round;stroke-miterlimit:3"
				d="m 33.3375,41.936458 1.058333,0.79375 -1.058333,0.529167 -1.058334,-0.79375 z"
				id="path20361"
			/><path
				style="fill:#333436;fill-opacity:1;fill-rule:evenodd;stroke:none;stroke-width:1.5;stroke-linecap:round;stroke-linejoin:round;stroke-miterlimit:3"
				d="M 37.570833,46.831249 39.6875,45.508333 41.804166,46.831249 39.6875,48.154166 Z"
				id="path20363"
			/><path
				style="fill:#333436;fill-opacity:1;fill-rule:evenodd;stroke:none;stroke-width:1.5;stroke-linecap:round;stroke-linejoin:round;stroke-miterlimit:3"
				d="m 42.597916,49.080208 2.116667,-1.322916 2.116666,1.322916 -2.116666,1.322917 z"
				id="path20365"
			/><path
				style="fill:#333436;fill-opacity:1;fill-rule:evenodd;stroke:none;stroke-width:1.5;stroke-linecap:round;stroke-linejoin:round;stroke-miterlimit:3"
				d="m 42.06875,53.313541 2.116667,-1.322916 2.116666,1.322916 -2.116666,1.322917 z"
				id="path20367"
			/><path
				style="fill:#333436;fill-opacity:1;fill-rule:evenodd;stroke:none;stroke-width:1.5;stroke-linecap:round;stroke-linejoin:round;stroke-miterlimit:3"
				d="m 33.072916,49.080208 2.116667,-1.322916 2.116666,1.322916 -2.116666,1.322917 z"
				id="path20369"
			/><path
				style="fill:#333436;fill-opacity:1;fill-rule:evenodd;stroke:none;stroke-width:1.5;stroke-linecap:round;stroke-linejoin:round;stroke-miterlimit:3"
				d="m 30.691666,52.784375 2.116667,-1.322916 2.116666,1.322916 -2.116666,1.322917 z"
				id="path20371"
			/><path
				style="fill:#4f5875;fill-opacity:1;fill-rule:evenodd;stroke:none;stroke-width:1.5;stroke-linecap:round;stroke-linejoin:round;stroke-miterlimit:3"
				d="m 33.072916,60.854166 -3.439583,-3.704167 7.408333,-4.7625 -1.322916,-1.322916 3.96875,-2.116667 3.704166,2.116667 -2.645833,2.116666 3.439583,2.38125 5.55625,-3.704166 -0.264583,6.614583 -0.79375,2.116667 z"
				id="path20373"
			/><path
				style="fill:#333436;fill-opacity:1;fill-rule:evenodd;stroke:none;stroke-width:1.5;stroke-linecap:round;stroke-linejoin:round;stroke-miterlimit:3"
				d="M 37.570833,51.064583 39.6875,49.741667 41.804166,51.064583 39.6875,52.3875 Z"
				id="path20375"
			/><path
				style="fill:#5c6689;fill-opacity:1;fill-rule:evenodd;stroke:none;stroke-width:1.5;stroke-linecap:round;stroke-linejoin:round;stroke-miterlimit:3"
				d="m 33.072916,60.854166 5.820834,-7.408333 9.789583,7.14375 c -3.934171,4.202882 -8.351485,6.83956 -15.610417,0.264583 z"
				id="path20377"
			/><path
				style="fill:#333436;fill-opacity:1;fill-rule:evenodd;stroke:none;stroke-width:1.5;stroke-linecap:round;stroke-linejoin:round;stroke-miterlimit:3"
				d="m 35.71875,55.165625 2.116667,-1.322916 2.116666,1.322916 -2.116666,1.322917 z"
				id="path20379"
			/><path
				style="fill:#4f5875;fill-opacity:1;fill-rule:evenodd;stroke:none;stroke-width:1.5;stroke-linecap:round;stroke-linejoin:round;stroke-miterlimit:3"
				d="m 42.862499,56.356249 -1.5875,1.058334 2.116667,1.322916 2.645833,-1.5875 z"
				id="path20381"
			/><path
				style="fill:#333436;fill-opacity:1;fill-rule:evenodd;stroke:none;stroke-width:1.5;stroke-linecap:round;stroke-linejoin:round;stroke-miterlimit:3"
				d="m 40.216666,58.076041 2.116667,-1.322916 2.116666,1.322916 -2.116666,1.322917 z"
				id="path20383"
			/><path
				style="fill:#333436;fill-opacity:1;fill-rule:evenodd;stroke:none;stroke-width:1.5;stroke-linecap:round;stroke-linejoin:round;stroke-miterlimit:3"
				d="m 36.777083,59.795833 1.058333,-0.529167 1.058334,0.529167 -1.058334,0.79375 z"
				id="path20385"
			/><path
				style="fill:#333436;fill-opacity:1;fill-rule:evenodd;stroke:none;stroke-width:1.5;stroke-linecap:round;stroke-linejoin:round;stroke-miterlimit:3"
				d="m 41.010416,62.441666 1.058333,-0.79375 -1.058333,-0.529167 -1.058333,0.529167 z"
				id="path20387"
			/><path
				style="fill:#efdfa1;fill-opacity:1;fill-rule:evenodd;stroke:none;stroke-width:1.5;stroke-linecap:round;stroke-linejoin:round;stroke-miterlimit:3"
				d="m 6.8791666,48.683333 v -6.085417 l 1.8520833,1.058333 v 3.175 z"
				id="path20389"
			/><path
				style="fill:#efdfa1;fill-opacity:1;fill-rule:evenodd;stroke:none;stroke-width:1.5;stroke-linecap:round;stroke-linejoin:round;stroke-miterlimit:3"
				d="m 9.2604166,45.772916 c 1.5780714,-0.50442 1.6401744,-1.326225 1.8520834,-2.116667 1.29904,-0.827607 1.728283,-0.149087 1.852083,1.058334 -1.212122,1.028778 -2.445325,1.427011 -3.7041664,1.058333 z"
				id="path20391"
			/><path
				style="fill:#efdfa1;fill-opacity:1;fill-rule:evenodd;stroke:none;stroke-width:1.5;stroke-linecap:round;stroke-linejoin:round;stroke-miterlimit:3"
				d="m 9.7895832,49.477083 h 6.3499998 l 6.614583,5.820833 c -1.914604,0.552854 -2.386031,2.437886 -2.38125,4.7625 h -1.5875 C 17.427767,56.849613 16.136045,53.642365 12.7,51.329166 h -1.322917 z"
				id="path20393"
			/><path
				style="fill:#efdfa1;fill-opacity:1;fill-rule:evenodd;stroke:none;stroke-width:1.5;stroke-linecap:round;stroke-linejoin:round;stroke-miterlimit:3"
				d="m 13.49375,68.262499 h 2.645833 v -3.704166 l 1.322917,-1.5875 -6.614583,-8.73125 H 5.8208333 l 1.3229166,1.5875 h 1.3229167 c 1.7014364,3.426676 4.0127354,6.547563 5.0270834,10.318749 z"
				id="path20395"
			/><path
				style="fill:#efdfa1;fill-opacity:1;fill-rule:evenodd;stroke:none;stroke-width:1.5;stroke-linecap:round;stroke-linejoin:round;stroke-miterlimit:3"
				d="m 21.695833,86.518749 c 1.083744,1.429703 2.426042,2.735719 5.027083,3.439583 v -5.820833 c -0.217369,-1.173961 -0.854945,-2.107517 -2.645833,-2.38125 l -2.38125,-0.264583 z"
				id="path20397"
			/><path
				style="fill:#efdfa1;fill-opacity:1;fill-rule:evenodd;stroke:none;stroke-width:1.5;stroke-linecap:round;stroke-linejoin:round;stroke-miterlimit:3"
				d="m 86.518749,94.720832 h 2.38125 v 2.38125 h -2.38125 z"
				id="path20399"
			/><path
				style="fill:#efdfa1;fill-opacity:1;fill-rule:evenodd;stroke:none;stroke-width:1.5;stroke-linecap:round;stroke-linejoin:round;stroke-miterlimit:3"
				d="m 82.814582,87.312499 h 2.38125 V 82.020832 C 84.894847,81.29642 84.592294,80.580585 84.137499,80.697916 h -2.645833 c 0.477073,0.331513 0.472587,0.289031 1.322916,1.5875 z"
				id="path20401"
			/><path
				style="fill:#333436;fill-opacity:1;fill-rule:evenodd;stroke:none;stroke-width:1.5;stroke-linecap:round;stroke-linejoin:round;stroke-miterlimit:3"
				d="m 82.814582,88.899999 h 2.38125 v -1.5875 h -2.38125 z"
				id="path20403"
			/><path
				style="fill:#535a63;fill-opacity:1;fill-rule:evenodd;stroke:none;stroke-width:1.5;stroke-linecap:round;stroke-linejoin:round;stroke-miterlimit:3"
				d="m 82.814582,88.899999 h 2.38125 v 1.5875 h 1.322917 V 78.052082 c 2.486154,-4.807254 5.893002,-4.814372 9.260416,-5.027083 l 3.704167,4.233333 0.529168,1.852084 v 5.820833 c -0.313962,0.814419 -0.737091,1.624136 -2.381251,2.38125 l -7.408333,2.910417 c -0.601732,0.607513 -1.058333,1.587501 -1.058333,2.381251 0.353183,2.246045 -1.501216,2.230229 -3.175001,2.116665 -1.366234,0.01221 -2.724385,0.01022 -3.175,-1.5875 z"
				id="path20405"
			/><path
				style="fill:#333436;fill-opacity:1;fill-rule:evenodd;stroke:none;stroke-width:1.5;stroke-linecap:round;stroke-linejoin:round;stroke-miterlimit:3"
				d="m 89.164582,84.137499 c 0,0 4.233333,0 4.233333,0 l -1.852083,-1.852083 z"
				id="path20407"
			/><path
				style="fill:#333436;fill-opacity:1;fill-rule:evenodd;stroke:none;stroke-width:1.5;stroke-linecap:round;stroke-linejoin:round;stroke-miterlimit:3"
				d="m 89.164582,78.58125 c 0,0 4.233333,0 4.233333,0 l -1.852083,1.852083 z"
				id="path20409"
			/><path
				style="fill:#333436;fill-opacity:1;fill-rule:evenodd;stroke:none;stroke-width:1.5;stroke-linecap:round;stroke-linejoin:round;stroke-miterlimit:3"
				d="m 96.837499,83.079166 1.852083,-1.5875 -1.852083,-1.852084 -2.116667,1.852084 z"
				id="path20411"
			/><path
				style="fill:#5e8dfd;fill-opacity:1;fill-rule:evenodd;stroke:none;stroke-width:1.5;stroke-linecap:round;stroke-linejoin:round;stroke-miterlimit:3"
				d="m 24.341666,76.199999 7.9375,4.7625 -3.175,5.820833 z"
				id="path20413"
			/><path
				style="fill:#72716f;fill-opacity:1;fill-rule:evenodd;stroke:none;stroke-width:1.5;stroke-linecap:round;stroke-linejoin:round;stroke-miterlimit:3"
				d="m 50.006249,43.656249 c 0.252251,-6.10031 4.287091,-7.033872 8.73125,-7.408333 v 7.408333 z"
				id="path20415"
			/><path
				style="fill:#a19e9b;fill-opacity:1;fill-rule:evenodd;stroke:none;stroke-width:1.5;stroke-linecap:round;stroke-linejoin:round;stroke-miterlimit:3"
				d="m 58.737499,43.656249 v 1.852084 l 1.058334,1.058333 v 7.9375 c -3.856471,-0.121332 -7.221432,0.836217 -10.31875,2.38125 l 0.264583,-5.027083 0.264583,-8.202084 z"
				id="path20417"
			/><path
				style="fill:#52d8cc;fill-opacity:1;fill-rule:evenodd;stroke:none;stroke-width:1.5;stroke-linecap:round;stroke-linejoin:round;stroke-miterlimit:3"
				d="m 19.314583,30.1625 5.291667,-7.408334 h 1.5875 L 21.695833,30.1625 Z"
				id="path20419"
			/><path
				style="fill:#52d8cc;fill-opacity:1;fill-rule:evenodd;stroke:none;stroke-width:1.5;stroke-linecap:round;stroke-linejoin:round;stroke-miterlimit:3"
				d="M 27.252083,25.664583 32.54375,17.4625 h 1.852083 l -4.7625,8.202083 z"
				id="path20421"
			/><path
				style="fill:#52d8cc;fill-opacity:1;fill-rule:evenodd;stroke:none;stroke-width:1.5;stroke-linecap:round;stroke-linejoin:round;stroke-miterlimit:3"
				d="M 34.925,23.01875 H 38.1 l 5.027083,-8.466667 h -1.852084 z"
				id="path20423"
			/><path
				style="fill:#52d8cc;fill-opacity:1;fill-rule:evenodd;stroke:none;stroke-width:1.5;stroke-linecap:round;stroke-linejoin:round;stroke-miterlimit:3"
				d="m 43.127083,20.6375 h 3.175 l 4.497916,-7.790621 h -1.5875 z"
				id="path20425"
			/><path
				style="fill:#52d8cc;fill-opacity:1;fill-rule:evenodd;stroke:none;stroke-width:1.5;stroke-linecap:round;stroke-linejoin:round;stroke-miterlimit:3"
				d="m 51.064583,17.4625 h 3.175 l 4.124446,-7.14375 h -1.743196 z"
				id="path20427"
			/><path
				style="fill:#52d8cc;fill-opacity:1;fill-rule:evenodd;stroke:none;stroke-width:1.5;stroke-linecap:round;stroke-linejoin:round;stroke-miterlimit:3"
				d="m 57.679166,16.66875 h 3.704167 l 4.429961,-7.6729168 h -2.313295 z"
				id="path20429"
			/><path
				style="fill:#52d8cc;fill-opacity:1;fill-rule:evenodd;stroke:none;stroke-width:1.5;stroke-linecap:round;stroke-linejoin:round;stroke-miterlimit:3"
				d="m 65.352083,15.345833 h 3.175 l 4.497916,-7.9374998 h -2.116667 z"
				id="path20431"
			/><path
				style="fill:#efdfa1;fill-opacity:1;fill-rule:evenodd;stroke:none;stroke-width:1.5;stroke-linecap:round;stroke-linejoin:round;stroke-miterlimit:3"
				d="m 96.308332,33.866666 3.439583,4.497917 v 32.543749 l 3.439585,3.439584 6.61458,-7.9375 v -37.30625 z"
				id="path20433"
			/><path
				style="fill:#dc8476;fill-opacity:1;fill-rule:evenodd;stroke:none;stroke-width:1.5;stroke-linecap:round;stroke-linejoin:round;stroke-miterlimit:3"
				d="M 58.737499,42.068749 V 26.722916 l 2.38125,1.322917 v 3.96875 h 1.5875 c 1.446314,-5.941768 4.274609,-11.835141 7.14375,-17.727083 h 1.5875 l -0.79375,3.175 h 2.116667 C 74.753242,13.487798 77.875242,9.9252394 80.962499,6.3499999 L 79.904166,15.08125 87.312499,5.0270833 H 101.07083 L 97.366665,10.31875 h 7.143755 l 4.23333,-5.0270834 h 14.2875 C 121.00244,11.69549 120.71423,15.628068 111.65417,32.014583 v 2.645833 L 121.70833,23.01875 v 13.758333 l -10.31875,12.170833 v 3.175 l 10.58334,-11.641667 v 8.73125 l -11.64167,11.90625 v 2.645834 l 10.58333,-10.31875 v 7.408333 l -9.525,12.7 -7.14375,1.914162 -1.5875,-1.587497 6.35,-8.793332 -0.26458,-5.291666 -8.995835,8.995833 v -2.910417 l 8.995835,-9.260416 v -7.14375 l -8.995835,9.525 v -2.116667 l 8.995835,-10.31875 v -11.1125 l -8.995835,10.31875 v -1.852083 l 6.085415,-10.31875 H 66.674999 l -4.7625,4.233333 -1.852083,4.233333 z"
				id="path20435"
			/><path
				style="fill:#efdfa1;fill-opacity:1;fill-rule:evenodd;stroke:none;stroke-width:1.5;stroke-linecap:round;stroke-linejoin:round;stroke-miterlimit:3"
				d="m 59.795833,54.504166 6.879166,-20.6375 H 93.397915 L 105.83333,33.602083 110.33125,17.4625 H 99.747915 l -5.291666,5.291666 h -5.291667 l 4.7625,-5.291666 h -12.7 l -6.085416,10.583333 c -1.384732,-1.443406 0.133481,-4.227042 0.79375,-6.614583 -2.154444,1.61423 -3.625182,1.63046 -8.466667,9.525 l -0.264583,-3.175 c -2.471105,4.16922 -4.915141,8.517164 -7.14375,14.287499 h -1.322917 v 11.641667 z"
				id="path20437"
			/><path
				style="fill:#7ba7fe;fill-opacity:1;fill-rule:evenodd;stroke:none;stroke-width:1.5;stroke-linecap:round;stroke-linejoin:round;stroke-miterlimit:3"
				d="m 41.010416,87.577082 h 7.9375 l 4.233333,5.027084 -1.322916,0.529166 -3.175,-3.704166 h -6.614584 z"
				id="path20439"
			/><path
				style="fill:#7ba7fe;fill-opacity:1;fill-rule:evenodd;stroke:none;stroke-width:1.5;stroke-linecap:round;stroke-linejoin:round;stroke-miterlimit:3"
				d="m 58.472916,88.370832 1.322917,1.5875 h 6.349999 l 2.910417,2.910417 1.5875,-0.529167 -3.96875,-3.96875 z"
				id="path20441"
			/><path
				style="fill:#52d8cc;fill-opacity:1;fill-rule:evenodd;stroke:none;stroke-width:1.5;stroke-linecap:round;stroke-linejoin:round;stroke-miterlimit:3"
				d="m 34.13125,91.281249 3.96875,1.5875 7.672916,6.614583 h 3.704167 l 4.497916,5.820838 h -3.704166 z"
				id="path20443"
			/><path
				style="fill:#5e8cfd;fill-opacity:1;fill-rule:evenodd;stroke:none;stroke-width:1.5;stroke-linecap:round;stroke-linejoin:round;stroke-miterlimit:3"
				d="m 49.477083,99.483332 -4.7625,-6.614583 H 38.1 l 7.672916,6.614583 z"
				id="path20445"
			/><path
				style="fill:#52d8cc;fill-opacity:1;fill-rule:evenodd;stroke:none;stroke-width:1.5;stroke-linecap:round;stroke-linejoin:round;stroke-miterlimit:3"
				d="m 51.726042,91.281249 3.96875,1.5875 7.672916,6.614583 h 3.704167 l 4.497916,5.820838 h -3.704166 z"
				id="path20447"
			/><path
				style="fill:#5e8cfd;fill-opacity:1;fill-rule:evenodd;stroke:none;stroke-width:1.5;stroke-linecap:round;stroke-linejoin:round;stroke-miterlimit:3"
				d="m 67.071875,99.483332 -4.7625,-6.614583 h -6.614583 l 7.672916,6.614583 z"
				id="path20449"
			/><path
				style="fill:#5e8cfd;fill-opacity:1;fill-rule:evenodd;stroke:none;stroke-width:1.5;stroke-linecap:round;stroke-linejoin:round;stroke-miterlimit:3"
				d="m 69.056249,92.868749 -5.55625,2.116666 -3.704166,-5.027083 h 6.349999 z"
				id="path20451"
			/><path
				style="fill:#5e8cfd;fill-opacity:1;fill-rule:evenodd;stroke:none;stroke-width:1.5;stroke-linecap:round;stroke-linejoin:round;stroke-miterlimit:3"
				d="m 51.858333,93.133332 -5.820834,1.852083 -3.96875,-5.556249 h 6.614584 z"
				id="path20453"
			/><path
				style="fill:#52d8cc;fill-opacity:1;fill-rule:evenodd;stroke:none;stroke-width:1.5;stroke-linecap:round;stroke-linejoin:round;stroke-miterlimit:3"
				d="m 69.453125,91.281249 3.96875,1.5875 7.672916,6.614583 h 3.704167 l 4.497916,5.820838 h -3.704166 z"
				id="path20455"
			/><path
				style="fill:#5e8cfd;fill-opacity:1;fill-rule:evenodd;stroke:none;stroke-width:1.5;stroke-linecap:round;stroke-linejoin:round;stroke-miterlimit:3"
				d="m 84.798958,99.483332 -4.7625,-6.614583 h -6.614583 l 7.672916,6.614583 z"
				id="path20457"
			/><path
				style="fill:#5c6689;fill-opacity:1;fill-rule:evenodd;stroke:none;stroke-width:1.5;stroke-linecap:round;stroke-linejoin:round;stroke-miterlimit:3"
				d="m 24.870833,55.033333 2.645833,2.645833 -0.79375,10.847916 -1.322916,8.202084 -0.79375,3.175 H 20.6375 L 19.579166,62.706249 Z"
				id="path20459"
			/><path
				style="fill:#5c6689;fill-opacity:1;fill-rule:evenodd;stroke:none;stroke-width:1.5;stroke-linecap:round;stroke-linejoin:round;stroke-miterlimit:3"
				d="m 26.722916,68.527082 14.2875,16.933334 -1.5875,-9.525 -1.852083,-1.852084 3.96875,-3.704166 17.4625,16.404166 v -9.789583 l -2.38125,-2.38125 6.35,-3.96875 9.524999,11.377083 0.264584,-7.672916 -1.5875,-1.322917 -1.852084,-2.910417 8.202084,-4.497916 6.085416,8.466666 0.264584,2.645834 -1.5875,1.322916 -0.264584,-3.704166 -5.027083,-6.614584 -5.820833,2.910417 3.175,2.910417 0.529166,11.1125 0.264585,0.529167 v 1.852084 l -12.435418,-14.816668 -3.96875,2.645833 1.058334,1.058334 0.79375,10.583333 0.264583,0.79375 v 1.058333 h -2.38125 l -16.933333,-16.404166 -2.38125,2.38125 1.058333,0.79375 1.852083,12.435416 h -1.058333 l -14.552083,-17.4625 v -1.5875 z"
				id="path20461"
			/><path
				style="fill:#5e8dfd;fill-opacity:1;fill-rule:evenodd;stroke:none;stroke-width:1.5;stroke-linecap:round;stroke-linejoin:round;stroke-miterlimit:3"
				d="m 40.216667,75.141667 1.852083,12.435416 5.556249,-6.614584 z"
				id="path20463"
			/><path
				style="fill:#5e8dfd;fill-opacity:1;fill-rule:evenodd;stroke:none;stroke-width:1.5;stroke-linecap:round;stroke-linejoin:round;stroke-miterlimit:3"
				d="m 73.289582,80.962499 4.497917,-8.73125 -6.085417,-0.79375 2.38125,1.852083 z"
				id="path20465"
			/><path
				style="fill:#5e8dfd;fill-opacity:1;fill-rule:evenodd;stroke:none;stroke-width:1.5;stroke-linecap:round;stroke-linejoin:round;stroke-miterlimit:3"
				d="m 59.795833,75.935416 6.349999,5.027083 -6.085416,7.14375 z"
				id="path20467"
			/><path
				style="fill:#e7f3f3;fill-opacity:1;fill-rule:evenodd;stroke:none;stroke-width:1.5;stroke-linecap:round;stroke-linejoin:round;stroke-miterlimit:3"
				d="m 35.71875,66.410416 3.704166,2.910416 h 5.820833 v -2.910416 z"
				id="path20469"
			/><path
				style="fill:#b7c3ca;fill-opacity:1;fill-rule:evenodd;stroke:none;stroke-width:1.5;stroke-linecap:round;stroke-linejoin:round;stroke-miterlimit:3"
				d="m 36.777083,66.410416 2.645833,2.38125 h 5.027083 v -2.38125 z"
				id="path20471"
			/><path
				style="fill:#e7f3f3;fill-opacity:1;fill-rule:evenodd;stroke:none;stroke-width:1.5;stroke-linecap:round;stroke-linejoin:round;stroke-miterlimit:3"
				d="m 46.302083,66.145832 7.408333,3.175 8.202083,-3.704166 -3.175,-3.704167 z"
				id="path20473"
			/><path
				style="fill:#b7c3ca;fill-opacity:1;fill-rule:evenodd;stroke:none;stroke-width:1.5;stroke-linecap:round;stroke-linejoin:round;stroke-miterlimit:3"
				d="m 53.445833,68.262499 6.614583,-2.910416 -2.116667,-3.175 -10.054166,3.439583 z"
				id="path20475"
			/><path
				style="fill:#e7f3f3;fill-opacity:1;fill-rule:evenodd;stroke:none;stroke-width:1.5;stroke-linecap:round;stroke-linejoin:round;stroke-miterlimit:3"
				d="m 61.647916,63.235416 7.14375,2.910416 7.672916,-3.439583 -2.645833,-3.96875 -0.79375,0.529167 z"
				id="path20477"
			/><path
				style="fill:#b7c3ca;fill-opacity:1;fill-rule:evenodd;stroke:none;stroke-width:1.5;stroke-linecap:round;stroke-linejoin:round;stroke-miterlimit:3"
				d="m 62.970833,62.706249 5.820833,2.645834 6.35,-3.175 -2.116667,-2.910417 z"
				id="path20479"
			/><path
				style="fill:#333436;fill-opacity:1;fill-rule:evenodd;stroke:none;stroke-width:1.5;stroke-linecap:round;stroke-linejoin:round;stroke-miterlimit:3"
				d="m 71.172916,57.149999 1.852083,-0.264583 1.322917,-2.116667 v -3.175 h -1.5875 v 2.645834 z"
				id="path20481"
			/><path
				style="fill:#333436;fill-opacity:1;fill-rule:evenodd;stroke:none;stroke-width:1.5;stroke-linecap:round;stroke-linejoin:round;stroke-miterlimit:3"
				d="m 63.499999,51.858333 0.529167,-1.5875 h 4.233333 l 2.116667,-1.322917 h 2.910416 l -0.264583,1.322917 h -2.116667 l -2.38125,1.5875 z"
				id="path20483"
			/><path
				style="fill:#333436;fill-opacity:1;fill-rule:evenodd;stroke:none;stroke-width:1.5;stroke-linecap:round;stroke-linejoin:round;stroke-miterlimit:3"
				d="m 74.083333,46.566667 -10e-7,-1.587501 -3.704166,-2.116667 V 39.422916 L 68.262499,37.30625 c 0.08774,-0.463154 0.373944,-0.703456 0.79375,-0.79375 l 2.645833,2.645833 v 3.175 l 2.910417,1.5875 10e-7,1.5875 c -0.22585,-0.0035 -0.378298,0.521738 -0.529167,1.058334 z"
				id="path20485"
			/><path
				style="fill:#b7c3ca;fill-opacity:1;fill-rule:evenodd;stroke:none;stroke-width:1.5;stroke-linecap:round;stroke-linejoin:round;stroke-miterlimit:3"
				d="m 71.172916,36.777083 h 4.497916 v 2.645833 h -4.497916 z"
				id="path20487"
			/><path
				style="fill:#333436;fill-opacity:1;fill-rule:evenodd;stroke:none;stroke-width:1.5;stroke-linecap:round;stroke-linejoin:round;stroke-miterlimit:3"
				d="m 76.729166,44.979166 v -3.175 l 2.645833,-1.5875 v -1.058333 -2.910417 h 1.322917 v 4.233333 l -2.645834,1.852084 v 2.645833 z"
				id="path20489"
			/><path
				style="fill:#b7c3ca;fill-opacity:1;fill-rule:evenodd;stroke:none;stroke-width:1.5;stroke-linecap:round;stroke-linejoin:round;stroke-miterlimit:3"
				d="m 76.596875,36.777083 h 4.497916 v 2.645833 h -4.497916 z"
				id="path20491"
			/><path
				style="fill:#333436;fill-opacity:1;fill-rule:evenodd;stroke:none;stroke-width:1.5;stroke-linecap:round;stroke-linejoin:round;stroke-miterlimit:3"
				d="m 82.020832,44.979166 h 1.5875 l 1.5875,-2.910417 h 1.5875 l 2.38125,-5.820833 h -1.5875 l -1.852083,4.497917 h -1.5875 z"
				id="path20493"
			/><path
				style="fill:#b7c3ca;fill-opacity:1;fill-rule:evenodd;stroke:none;stroke-width:1.5;stroke-linecap:round;stroke-linejoin:round;stroke-miterlimit:3"
				d="m 82.417709,36.777083 h 4.497916 v 2.645833 h -4.497916 z"
				id="path20495"
			/><path
				style="fill:#333436;fill-opacity:1;fill-rule:evenodd;stroke:none;stroke-width:1.5;stroke-linecap:round;stroke-linejoin:round;stroke-miterlimit:3"
				d="m 84.93125,48.41875 0.529167,-1.5875 1.587499,-10e-7 3.704166,-0.529166 1.058334,-0.79375 h 3.174999 v 1.5875 h -2.910416 l -2.38125,1.322916 z"
				id="path20497"
			/><path
				style="fill:#333436;fill-opacity:1;fill-rule:evenodd;stroke:none;stroke-width:1.5;stroke-linecap:round;stroke-linejoin:round;stroke-miterlimit:3"
				d="m 83.972135,51.064583 0.496093,-1.322917 h 3.638021 l 2.910417,2.910417 h 2.381249 l 1.5875,1.5875 v 1.322916 l -1.852083,-1.322916 h -2.38125 l -3.175,-2.910417 z"
				id="path20499"
			/><path
				style="fill:#b7c3ca;fill-opacity:1;fill-rule:evenodd;stroke:none;stroke-width:1.5;stroke-linecap:round;stroke-linejoin:round;stroke-miterlimit:3"
				d="M 90.752083,47.757291 V 44.317708 H 88.10625 l -2.116667,5.55625 H 88.10625 L 88.9,47.757291 Z"
				id="path20501"
			/><path
				style="fill:#333436;fill-opacity:1;fill-rule:evenodd;stroke:none;stroke-width:1.5;stroke-linecap:round;stroke-linejoin:round;stroke-miterlimit:3"
				d="m 82.285416,55.562499 h 3.96875 l 2.645833,3.439584 h 3.439583 l 2.645835,3.439583 v 1.5875 l -3.439585,-3.704167 h -3.439583 l -2.645833,-3.439583 -3.439583,-0.264583 z"
				id="path20503"
			/><path
				style="fill:#b7c3ca;fill-opacity:1;fill-rule:evenodd;stroke:none;stroke-width:1.5;stroke-linecap:round;stroke-linejoin:round;stroke-miterlimit:3"
				d="M 88.238541,55.033333 V 51.59375 H 85.592708 L 83.476041,57.15 h 2.116667 l 0.79375,-2.116667 z"
				id="path20505"
			/><path
				style="fill:#e7f3f3;fill-opacity:1;fill-rule:evenodd;stroke:none;stroke-width:1.5;stroke-linecap:round;stroke-linejoin:round;stroke-miterlimit:3"
				d="m 79.374999,61.383333 -0.79375,-1.322917 -2.38125,-0.529167 5.291667,-1.852083 1.058333,2.38125 z"
				id="path20507"
			/><path
				style="fill:#b7c3ca;fill-opacity:1;fill-rule:evenodd;stroke:none;stroke-width:1.5;stroke-linecap:round;stroke-linejoin:round;stroke-miterlimit:3"
				d="m 79.110416,60.854166 2.910416,-1.058333 -1.058333,-1.852084 -4.7625,1.5875 2.38125,0.529167 z"
				id="path20509"
			/><path
				style="fill:#333436;fill-opacity:1;fill-rule:evenodd;stroke:none;stroke-width:1.5;stroke-linecap:round;stroke-linejoin:round;stroke-miterlimit:3"
				d="m 94.985415,68.527082 v 1.852084 l -4.497916,-3.439584 h -2.910417 l -2.645833,-3.439583 -4.497917,-0.264583 -0.79375,-1.5875 h 6.085417 l 3.175,3.704167 h 2.38125 z"
				id="path20511"
			/></g
		><g id="g143076"
			><path
				style="fill:#535a63;fill-opacity:1;fill-rule:evenodd;stroke:none;stroke-width:1.5;stroke-linecap:round;stroke-linejoin:round;stroke-miterlimit:3"
				d="m 76.993749,47.889583 h 5.291667 l -1.852084,6.614583 c -0.283813,0.716039 -1.245421,1.066467 -2.38125,1.322917 l -12.964583,2.38125 C 62.84981,58.564426 62.37181,57.079364 62.177083,55.297916 l 6.085416,-17.991666 0.79375,-0.79375 0.264583,-0.264584 h 23.547917 c 1.451064,0.258068 2.105522,1.465491 2.116666,3.439584 v 31.220832 c -2.666805,0.03355 -5.290429,0.367815 -7.672916,2.38125 l -10.054167,-11.112499 -1.058333,-2.645834 5.291667,-1.852083 4.7625,-12.7 h -10.31875 c -0.289981,-0.211529 -0.774276,0.07616 -1.322917,0.529167 l -0.529167,0.529166 v 0.529167 l -0.79375,2.38125 -0.529166,2.645833 h 2.910416 z"
				id="path54866"
			/><path
				style="fill:#4a5880;fill-opacity:1;fill-rule:evenodd;stroke:none;stroke-width:1.5;stroke-linecap:round;stroke-linejoin:round;stroke-miterlimit:3"
				d="m 87.312499,73.289582 -8.73125,-13.229166 -2.38125,-0.529167 -1.5875,0.529167 -11.641666,3.704167 -1.322917,-0.529167 -1.5875,0.264583 -13.758333,2.645833 -1.058334,0.264584 H 35.71875 l -8.202084,-8.73125 -7.9375,5.027083 -1.852083,2.38125 v 16.933333 l 2.910417,2.645834 v -4.497917 h 5.490104 l 2.976562,6.614583 5.027084,4.497917 3.96875,1.5875 h 41.936457 l -4.894791,-5.55625 v -2.38125 z"
				id="path53220"
			/><ellipse
				style="fill:#5e8dfd;fill-opacity:1;fill-rule:evenodd;stroke:none;stroke-width:3.15832;stroke-linecap:round;stroke-linejoin:round;stroke-miterlimit:3"
				id="path55411"
				cx="14.155209"
				cy="39.952084"
				rx="2.778125"
				ry="2.5135412"
			/><path
				style="fill:#535a63;fill-opacity:1;fill-rule:evenodd;stroke:none;stroke-width:1.5;stroke-linecap:round;stroke-linejoin:round;stroke-miterlimit:3"
				d="m 6.8791666,42.597916 4.4979164,-2.38125 3.439583,-2.645833 4.497917,-7.408333 h 2.38125 v 1.852083 h 1.058333 l 4.497917,-6.35 h 2.38125 L 28.575,27.78125 h 2.910417 L 34.925,23.01875 H 38.1 l -1.058333,2.116667 h 2.38125 L 43.127083,20.6375 h 3.175 l -0.79375,1.5875 h 1.852083 l 3.704167,-4.7625 h 3.175 l -1.5875,2.910416 h 2.38125 l 2.645833,-3.704166 h 3.704167 l -1.322917,2.645833 h 2.116667 l 3.175,-3.96875 h 3.175 l -1.639399,2.645833 h 1.374815 L 70.114582,30.427083 56.885416,39.6875 51.593749,54.239583 37.041666,59.531249 29.633333,57.149999 17.197916,48.154166 c -1.735853,0.386007 -3.481657,0.908807 -5.027083,-1.322917 H 8.7312499 Z"
				id="path39918"
			/><path
				style="fill:#c3d0da;fill-opacity:1;fill-rule:evenodd;stroke:none;stroke-width:1.5;stroke-linecap:round;stroke-linejoin:round;stroke-miterlimit:3"
				d="m 90.487499,92.604166 4.497916,-2.116667 v 16.668751 c -0.262544,1.27321 -0.681263,2.44777 -2.645833,2.64583 H 20.108333 c -1.422161,-0.29085 -2.566161,-0.95186 -2.138602,-3.70416 v -9.789588 l -6.328064,-6.328066 v -9.28235 L 23.01875,92.074999 v 12.170831 c -0.02706,1.59695 0.877239,2.06069 2.116666,2.11667 h 62.441666 c 2.040917,0.22883 2.774558,-0.89844 2.910418,-2.64583 z"
				id="path5168"
			/><path
				style="fill:#b0b9c2;fill-opacity:1;fill-rule:evenodd;stroke:none;stroke-width:1.3798;stroke-linecap:round;stroke-linejoin:round;stroke-miterlimit:3"
				d="M 30.691666,109.27292 V 106.3625 H 33.3375 v 2.91042 z"
				id="path6718"
			/><path
				style="fill:#b0b9c2;fill-opacity:1;fill-rule:evenodd;stroke:none;stroke-width:1.5;stroke-linecap:round;stroke-linejoin:round;stroke-miterlimit:3"
				d="m 19.84375,109.80208 3.96875,-3.70416 c -0.459127,-0.2699 -0.703893,-0.7283 -0.79375,-1.32292 l -4.497917,4.23333 c 0.303943,0.52344 0.794587,0.69419 1.322917,0.79375 z"
				id="path6716"
			/><path
				style="fill:#b0b9c2;fill-opacity:1;fill-rule:evenodd;stroke:none;stroke-width:1.5;stroke-linecap:round;stroke-linejoin:round;stroke-miterlimit:3"
				d="m 16.66875,94.985415 1.322916,1.322917 v 1.5875 l 5.027084,-5.291666 v -0.529167 l -1.5875,-1.5875 z"
				id="path6714"
			/><path
				style="fill:#b0b9c2;fill-opacity:1;fill-rule:evenodd;stroke:none;stroke-width:1.5;stroke-linecap:round;stroke-linejoin:round;stroke-miterlimit:3"
				d="m 43.127083,109.80208 v -3.43958 h 2.645834 v 3.43958 z"
				id="path6720"
			/><path
				style="fill:#b0b9c2;fill-opacity:1;fill-rule:evenodd;stroke:none;stroke-width:1.5;stroke-linecap:round;stroke-linejoin:round;stroke-miterlimit:3"
				d="m 55.562499,109.80208 v -3.43958 h 2.645834 v 3.43958 z"
				id="path6722"
			/><path
				style="fill:#b0b9c2;fill-opacity:1;fill-rule:evenodd;stroke:none;stroke-width:1.5;stroke-linecap:round;stroke-linejoin:round;stroke-miterlimit:3"
				d="m 67.997917,109.80208 v -3.43958 h 2.645834 v 3.43958 z"
				id="path6724"
			/><path
				style="fill:#b0b9c2;fill-opacity:1;fill-rule:evenodd;stroke:none;stroke-width:1.5;stroke-linecap:round;stroke-linejoin:round;stroke-miterlimit:3"
				d="M 11.641667,87.577082 15.08125,84.137499 11.641667,80.697916 Z"
				id="path6167"
			/><path
				style="fill:#b0b9c2;fill-opacity:1;fill-rule:evenodd;stroke:none;stroke-width:1.5;stroke-linecap:round;stroke-linejoin:round;stroke-miterlimit:3"
				d="m 82.020833,109.80208 v -3.43958 h 2.645834 v 3.43958 z"
				id="path6726"
			/><path
				style="fill:#b0b9c2;fill-opacity:1;fill-rule:evenodd;stroke:none;stroke-width:1.5;stroke-linecap:round;stroke-linejoin:round;stroke-miterlimit:3"
				d="m 94.985415,99.483332 v -2.645833 h -4.497916 v 2.645833 z"
				id="path6730"
			/><path
				style="fill:#535a63;fill-opacity:1;fill-rule:evenodd;stroke:none;stroke-width:1.5;stroke-linecap:round;stroke-linejoin:round;stroke-miterlimit:3"
				d="m 11.641667,89.958332 v 21.695838 c 0.396939,5.63257 9.083771,3.77712 15.345833,4.1119 h 75.14167 c 2.62356,0.30664 2.01579,-1.96217 2.11666,-3.66617 V 75.406249 l -4.497915,-4.7625 V 37.835416 c -0.181691,-3.158231 -2.447016,-4.592289 -6.879166,-4.233333 2.073523,1.312786 4.516778,2.448688 4.497916,4.7625 v 33.337499 l 5.027085,5.820834 v 9.789583 l -7.408335,3.175 V 106.3625 l -10.318749,2.7649 H 19.84375 V 92.604166 Z"
				id="path5896"
			/><path
				style="fill:#b0b9c2;fill-opacity:1;fill-rule:evenodd;stroke:none;stroke-width:1.5;stroke-linecap:round;stroke-linejoin:round;stroke-miterlimit:3"
				d="m 90.487499,104.51042 2.645834,2.38125 -2.116666,0.52916 -2.381251,-1.05833 c 1.086085,-0.13594 1.439089,-1.02482 1.852083,-1.85208 z"
				id="path6728"
			/><path
				style="fill:#333436;fill-opacity:1;fill-rule:evenodd;stroke:none;stroke-width:1.58229;stroke-linecap:round;stroke-linejoin:round;stroke-miterlimit:3"
				d="m 43.127083,109.12976 h 2.645833 v 6.63631 h -2.645833 z"
				id="path7141"
			/><path
				style="fill:#333436;fill-opacity:1;fill-rule:evenodd;stroke:none;stroke-width:1.58229;stroke-linecap:round;stroke-linejoin:round;stroke-miterlimit:3"
				d="m 55.562499,109.12976 h 2.645834 v 6.63631 h -2.645834 z"
				id="path7143"
			/><path
				style="fill:#333436;fill-opacity:1;fill-rule:evenodd;stroke:none;stroke-width:1.58229;stroke-linecap:round;stroke-linejoin:round;stroke-miterlimit:3"
				d="m 67.997916,109.12976 h 2.645833 v 6.63631 h -2.645833 z"
				id="path7145"
			/><path
				style="fill:#333436;fill-opacity:1;fill-rule:evenodd;stroke:none;stroke-width:1.58229;stroke-linecap:round;stroke-linejoin:round;stroke-miterlimit:3"
				d="m 82.020832,109.12976 h 2.645834 v 6.63631 h -2.645834 z"
				id="path7147"
			/><path
				style="fill:#333436;fill-opacity:1;fill-rule:evenodd;stroke:none;stroke-width:1.5;stroke-linecap:round;stroke-linejoin:round;stroke-miterlimit:3"
				d="m 104.24583,114.03542 c -0.17295,0.88588 -0.38738,1.7467 -1.85208,1.85208 l -11.377083,-8.46667 2.116666,-0.52916 z"
				id="path7149"
			/><path
				style="fill:#333436;fill-opacity:1;fill-rule:evenodd;stroke:none;stroke-width:1.5;stroke-linecap:round;stroke-linejoin:round;stroke-miterlimit:3"
				d="m 94.985415,96.837499 h 9.260415 v 2.645833 h -9.260415 z"
				id="path7214"
			/><path
				style="fill:#47515a;fill-opacity:1;fill-rule:evenodd;stroke:none;stroke-width:1.5;stroke-linecap:round;stroke-linejoin:round;stroke-miterlimit:3"
				d="m 9.7895832,100.27708 1.8520838,-1.322915 v -3.704166 l -1.8520838,1.5875 z"
				id="path7275"
			/><path
				style="fill:#7ba7fe;fill-opacity:1;fill-rule:evenodd;stroke:none;stroke-width:1.5;stroke-linecap:round;stroke-linejoin:round;stroke-miterlimit:3"
				d="M 9.7895832,100.27708 11.641667,98.954165 V 109.27292 L 9.7895832,109.5375 Z"
				id="path8516"
			/><path
				style="fill:#47515a;fill-opacity:1;fill-rule:evenodd;stroke:none;stroke-width:1.5;stroke-linecap:round;stroke-linejoin:round;stroke-miterlimit:3"
				d="m 11.641667,101.33542 -1.8520838,1.5875 v 3.43958 l 1.8520838,-1.32292 z"
				id="path8512"
			/><path
				style="fill:#47515a;fill-opacity:1;fill-rule:evenodd;stroke:none;stroke-width:1.5;stroke-linecap:round;stroke-linejoin:round;stroke-miterlimit:3"
				d="m 11.641667,107.95 -1.8520838,1.5875 v 3.43958 l 1.8520838,-1.5875 z"
				id="path8514"
			/><path
				style="fill:#52d8cc;fill-opacity:1;fill-rule:evenodd;stroke:none;stroke-width:1.5;stroke-linecap:round;stroke-linejoin:round;stroke-miterlimit:3"
				d="m 5.0270833,101.33542 4.7624999,-4.497921 v 3.439581 l -4.7624999,3.70417 z"
				id="path8718"
			/><path
				style="fill:#52d8cc;fill-opacity:1;fill-rule:evenodd;stroke:none;stroke-width:1.5;stroke-linecap:round;stroke-linejoin:round;stroke-miterlimit:3"
				d="m 5.0270833,107.42084 4.7624999,-4.49794 v 3.4396 l -4.7624999,3.70417 z"
				id="path9058"
			/><path
				style="fill:#52d8cc;fill-opacity:1;fill-rule:evenodd;stroke:none;stroke-width:1.5;stroke-linecap:round;stroke-linejoin:round;stroke-miterlimit:3"
				d="m 5.0270833,114.03542 4.7624999,-4.49794 v 3.4396 l -4.7624999,3.70417 z"
				id="path9060"
			/><path
				style="fill:#5e8cfd;fill-opacity:1;fill-rule:evenodd;stroke:none;stroke-width:1.5;stroke-linecap:round;stroke-linejoin:round;stroke-miterlimit:3"
				d="m 9.7895832,100.27708 v -2.116665 l -1.5875,1.5875 v 1.763885 z"
				id="path9064"
			/><path
				style="fill:#5e8cfd;fill-opacity:1;fill-rule:evenodd;stroke:none;stroke-width:1.5;stroke-linecap:round;stroke-linejoin:round;stroke-miterlimit:3"
				d="m 9.7895832,106.3625 v -2.11667 l -1.5875,1.5875 v 1.76389 z"
				id="path9542"
			/><path
				style="fill:#5e8cfd;fill-opacity:1;fill-rule:evenodd;stroke:none;stroke-width:1.5;stroke-linecap:round;stroke-linejoin:round;stroke-miterlimit:3"
				d="m 9.7895832,112.88889 v -2.11667 l -1.5875,1.5875 v 1.76389 z"
				id="path9544"
			/><path
				style="fill:#efdfa1;fill-opacity:1;fill-rule:evenodd;stroke:none;stroke-width:1.5;stroke-linecap:round;stroke-linejoin:round;stroke-miterlimit:3"
				d="m 11.377083,119.0625 8.73125,-0.79375 -5.820833,-4.49792 c -0.712219,1.74236 -1.438924,3.48593 -2.910417,5.29167 z"
				id="path9611"
			/><path
				style="fill:#dc8476;fill-opacity:1;fill-rule:evenodd;stroke:none;stroke-width:1.5;stroke-linecap:round;stroke-linejoin:round;stroke-miterlimit:3"
				d="m 28.575,113.77083 -5.820834,7.14375 C 19.4286,120.72247 16.156959,120.50797 8.2020832,122.2375 l 3.1749998,-3.175 8.73125,-0.79375 z"
				id="path9813"
			/><path
				style="fill:#dc8476;fill-opacity:1;fill-rule:evenodd;stroke:none;stroke-width:1.5;stroke-linecap:round;stroke-linejoin:round;stroke-miterlimit:3"
				d="m 14.2875,113.77083 h 14.287494 l -8.466661,4.49792 z"
				id="path9869"
			/><path
				style="fill:#efdfa1;fill-opacity:1;fill-rule:evenodd;stroke:none;stroke-width:1.5;stroke-linecap:round;stroke-linejoin:round;stroke-miterlimit:3"
				d="M 20.108333,116.94583 15.875,113.77083 H 26.19375 Z"
				id="path10539"
			/><path
				style="fill:#333436;fill-opacity:1;fill-rule:evenodd;stroke:none;stroke-width:1.58229;stroke-linecap:round;stroke-linejoin:round;stroke-miterlimit:3"
				d="M 30.691666,109.12976 H 33.3375 v 6.63631 h -2.645834 z"
				id="path6732"
			/><path
				style="fill:#efdfa1;fill-opacity:1;fill-rule:evenodd;stroke:none;stroke-width:1.5;stroke-linecap:round;stroke-linejoin:round;stroke-miterlimit:3"
				d="m 30.1625,119.0625 8.73125,-0.79375 -5.820833,-4.49792 c -0.712219,1.74236 -1.438924,3.48593 -2.910417,5.29167 z"
				id="path11092"
			/><path
				style="fill:#dc8476;fill-opacity:1;fill-rule:evenodd;stroke:none;stroke-width:1.5;stroke-linecap:round;stroke-linejoin:round;stroke-miterlimit:3"
				d="m 47.360417,113.77083 -5.820834,7.14375 c -3.325566,-0.19211 -6.597207,-0.40661 -14.552083,1.32292 l 3.175,-3.175 8.73125,-0.79375 z"
				id="path11094"
			/><path
				style="fill:#dc8476;fill-opacity:1;fill-rule:evenodd;stroke:none;stroke-width:1.5;stroke-linecap:round;stroke-linejoin:round;stroke-miterlimit:3"
				d="m 33.072917,113.77083 h 14.287494 l -8.466661,4.49792 z"
				id="path11096"
			/><path
				style="fill:#efdfa1;fill-opacity:1;fill-rule:evenodd;stroke:none;stroke-width:1.5;stroke-linecap:round;stroke-linejoin:round;stroke-miterlimit:3"
				d="m 38.89375,116.94583 -4.233333,-3.175 h 10.31875 z"
				id="path11098"
			/><path
				style="fill:#efdfa1;fill-opacity:1;fill-rule:evenodd;stroke:none;stroke-width:1.5;stroke-linecap:round;stroke-linejoin:round;stroke-miterlimit:3"
				d="m 48.947919,119.0625 8.73125,-0.79375 -5.820833,-4.49792 c -0.712219,1.74236 -1.438924,3.48593 -2.910417,5.29167 z"
				id="path11102"
			/><path
				style="fill:#dc8476;fill-opacity:1;fill-rule:evenodd;stroke:none;stroke-width:1.5;stroke-linecap:round;stroke-linejoin:round;stroke-miterlimit:3"
				d="m 66.145836,113.77083 -5.820834,7.14375 c -3.325566,-0.19211 -6.597207,-0.40661 -14.552083,1.32292 l 3.175,-3.175 8.73125,-0.79375 z"
				id="path11104"
			/><path
				style="fill:#dc8476;fill-opacity:1;fill-rule:evenodd;stroke:none;stroke-width:1.5;stroke-linecap:round;stroke-linejoin:round;stroke-miterlimit:3"
				d="M 51.858336,113.77083 H 66.14583 l -8.466661,4.49792 z"
				id="path11106"
			/><path
				style="fill:#efdfa1;fill-opacity:1;fill-rule:evenodd;stroke:none;stroke-width:1.5;stroke-linecap:round;stroke-linejoin:round;stroke-miterlimit:3"
				d="m 57.679169,116.94583 -4.233333,-3.175 h 10.31875 z"
				id="path11108"
			/><path
				style="fill:#efdfa1;fill-opacity:1;fill-rule:evenodd;stroke:none;stroke-width:1.5;stroke-linecap:round;stroke-linejoin:round;stroke-miterlimit:3"
				d="M 67.46875,119.0625 76.2,118.26875 70.379167,113.77083 c -0.712219,1.74236 -1.438924,3.48593 -2.910417,5.29167 z"
				id="path11112"
			/><path
				style="fill:#dc8476;fill-opacity:1;fill-rule:evenodd;stroke:none;stroke-width:1.5;stroke-linecap:round;stroke-linejoin:round;stroke-miterlimit:3"
				d="m 84.666667,113.77083 -5.820834,7.14375 c -3.325566,-0.19211 -6.597207,-0.40661 -14.552083,1.32292 l 3.175,-3.175 8.73125,-0.79375 z"
				id="path11114"
			/><path
				style="fill:#dc8476;fill-opacity:1;fill-rule:evenodd;stroke:none;stroke-width:1.5;stroke-linecap:round;stroke-linejoin:round;stroke-miterlimit:3"
				d="M 70.379167,113.77083 H 84.666661 L 76.2,118.26875 Z"
				id="path11116"
			/><path
				style="fill:#efdfa1;fill-opacity:1;fill-rule:evenodd;stroke:none;stroke-width:1.5;stroke-linecap:round;stroke-linejoin:round;stroke-miterlimit:3"
				d="m 76.2,116.94583 -4.233333,-3.175 h 10.31875 z"
				id="path11118"
			/><path
				style="fill:#efdfa1;fill-opacity:1;fill-rule:evenodd;stroke:none;stroke-width:1.5;stroke-linecap:round;stroke-linejoin:round;stroke-miterlimit:3"
				d="m 86.254169,119.0625 8.73125,-0.79375 -5.820833,-4.49792 c -0.712219,1.74236 -1.438924,3.48593 -2.910417,5.29167 z"
				id="path11122"
			/><path
				style="fill:#dc8476;fill-opacity:1;fill-rule:evenodd;stroke:none;stroke-width:1.5;stroke-linecap:round;stroke-linejoin:round;stroke-miterlimit:3"
				d="m 103.45209,113.77083 -5.820838,7.14375 c -3.325566,-0.19211 -6.597207,-0.40661 -14.552083,1.32292 l 3.175,-3.175 8.73125,-0.79375 z"
				id="path11124"
			/><path
				style="fill:#dc8476;fill-opacity:1;fill-rule:evenodd;stroke:none;stroke-width:1.5;stroke-linecap:round;stroke-linejoin:round;stroke-miterlimit:3"
				d="m 89.164586,113.77083 h 14.287494 l -8.466661,4.49792 z"
				id="path11126"
			/><path
				style="fill:#efdfa1;fill-opacity:1;fill-rule:evenodd;stroke:none;stroke-width:1.5;stroke-linecap:round;stroke-linejoin:round;stroke-miterlimit:3"
				d="m 94.985419,116.94583 -4.233333,-3.175 h 10.318754 z"
				id="path11128"
			/><path
				style="fill:#efdfa1;fill-opacity:1;fill-rule:evenodd;stroke:none;stroke-width:1.5;stroke-linecap:round;stroke-linejoin:round;stroke-miterlimit:3"
				d="m 109.80209,111.52188 -0.79375,-8.73125 -4.76251,5.82083 c 1.74236,0.71222 3.75052,1.43892 5.55626,2.91042 z"
				id="path11132"
			/><path
				style="fill:#dc8476;fill-opacity:1;fill-rule:evenodd;stroke:none;stroke-width:1.5;stroke-linecap:round;stroke-linejoin:round;stroke-miterlimit:3"
				d="m 104.24583,94.323959 7.40834,5.820831 c -0.19211,3.32557 -0.40661,6.59721 1.32292,14.55209 l -3.175,-3.175 -0.79375,-8.73125 z"
				id="path11134"
			/><path
				style="fill:#dc8476;fill-opacity:1;fill-rule:evenodd;stroke:none;stroke-width:1.5;stroke-linecap:round;stroke-linejoin:round;stroke-miterlimit:3"
				d="m 104.24583,108.61146 1e-5,-14.287495 4.7625,8.466665 z"
				id="path11136"
			/><path
				style="fill:#efdfa1;fill-opacity:1;fill-rule:evenodd;stroke:none;stroke-width:1.5;stroke-linecap:round;stroke-linejoin:round;stroke-miterlimit:3"
				d="m 107.68542,102.79063 -3.175,4.23333 V 96.705209 Z"
				id="path11138"
			/><path
				style="fill:#efdfa1;fill-opacity:1;fill-rule:evenodd;stroke:none;stroke-width:1.5;stroke-linecap:round;stroke-linejoin:round;stroke-miterlimit:3"
				d="m 109.80209,93.927084 -0.79375,-8.73125 -4.76251,5.820833 c 1.74236,0.712219 3.75052,1.438924 5.55626,2.910417 z"
				id="path11142"
			/><path
				style="fill:#dc8476;fill-opacity:1;fill-rule:evenodd;stroke:none;stroke-width:1.5;stroke-linecap:round;stroke-linejoin:round;stroke-miterlimit:3"
				d="m 104.24583,76.729167 7.40834,5.820834 c -0.19211,3.325566 -0.40661,6.597207 1.32292,14.552083 l -3.175,-3.175 -0.79375,-8.73125 z"
				id="path11144"
			/><path
				style="fill:#dc8476;fill-opacity:1;fill-rule:evenodd;stroke:none;stroke-width:1.5;stroke-linecap:round;stroke-linejoin:round;stroke-miterlimit:3"
				d="m 104.24583,91.016667 0,-14.2875 4.76251,8.466667 z"
				id="path11146"
			/><path
				style="fill:#efdfa1;fill-opacity:1;fill-rule:evenodd;stroke:none;stroke-width:1.5;stroke-linecap:round;stroke-linejoin:round;stroke-miterlimit:3"
				d="m 107.68542,85.195834 -3.43959,4.233333 v -10.31875 z"
				id="path11148"
			/><path
				style="fill:#000000;fill-opacity:1;fill-rule:evenodd;stroke:none;stroke-width:1.5;stroke-linecap:round;stroke-linejoin:round;stroke-miterlimit:3"
				d="m 11.641667,40.216666 1.5875,-1.852083 h 5.556249 l -1.852083,1.852083 z"
				id="path14166"
			/><ellipse
				style="fill:#6a0607;fill-opacity:1;fill-rule:evenodd;stroke:none;stroke-width:1.59682;stroke-linecap:round;stroke-linejoin:round;stroke-miterlimit:3"
				id="path14276"
				cy="33.721836"
				cx="24.410706"
				rx="0.78230226"
				ry="0.91268587"
				transform="rotate(16.601548)"
			/><path
				style="fill:#b7c3ca;fill-opacity:1;fill-rule:evenodd;stroke:none;stroke-width:1.5;stroke-linecap:round;stroke-linejoin:round;stroke-miterlimit:3"
				d="m 14.022916,41.010416 0.79375,-0.79375 h 2.116667 L 22.225,34.925 h 1.322916 l -5.027083,6.085416 z"
				id="path16627"
			/><path
				style="fill:#646d76;fill-opacity:1;fill-rule:evenodd;stroke:none;stroke-width:1.5;stroke-linecap:round;stroke-linejoin:round;stroke-miterlimit:3"
				d="m 18.520833,41.010416 h 1.322917 l 4.233333,-4.233333 H 26.9875 V 34.925 h -3.439584 z"
				id="path17693"
			/><path
				style="fill:#b7c3ca;fill-opacity:1;fill-rule:evenodd;stroke:none;stroke-width:1.5;stroke-linecap:round;stroke-linejoin:round;stroke-miterlimit:3"
				d="m 28.575,34.395833 2.116666,-1.058333 0.79375,1.322916 -1.852083,1.322917 z"
				id="path19761"
			/><path
				style="fill:#b7c3ca;fill-opacity:1;fill-rule:evenodd;stroke:none;stroke-width:1.5;stroke-linecap:round;stroke-linejoin:round;stroke-miterlimit:3"
				d="M 35.454166,33.072916 34.395833,31.75 36.5125,30.427083 37.30625,31.75 Z"
				id="path20254"
			/><path
				style="fill:#b7c3ca;fill-opacity:1;fill-rule:evenodd;stroke:none;stroke-width:1.5;stroke-linecap:round;stroke-linejoin:round;stroke-miterlimit:3"
				d="m 39.952083,29.104166 2.116666,-1.058333 0.79375,1.322917 -2.116666,1.322916 z"
				id="path20256"
			/><path
				style="fill:#b7c3ca;fill-opacity:1;fill-rule:evenodd;stroke:none;stroke-width:1.5;stroke-linecap:round;stroke-linejoin:round;stroke-miterlimit:3"
				d="m 45.243749,26.722916 2.116667,-1.058333 0.79375,1.5875 -2.116667,1.058333 z"
				id="path20258"
			/><path
				style="fill:#b7c3ca;fill-opacity:1;fill-rule:evenodd;stroke:none;stroke-width:1.5;stroke-linecap:round;stroke-linejoin:round;stroke-miterlimit:3"
				d="M 51.59375,26.458333 53.710416,25.4 l -0.529167,-1.322917 -2.38125,0.79375 z"
				id="path20260"
			/><path
				style="fill:#b7c3ca;fill-opacity:1;fill-rule:evenodd;stroke:none;stroke-width:1.5;stroke-linecap:round;stroke-linejoin:round;stroke-miterlimit:3"
				d="m 56.620833,23.283333 2.38125,-0.264583 0.264583,1.5875 -2.116667,0.264583 z"
				id="path20262"
			/><path
				style="fill:#b7c3ca;fill-opacity:1;fill-rule:evenodd;stroke:none;stroke-width:1.5;stroke-linecap:round;stroke-linejoin:round;stroke-miterlimit:3"
				d="m 61.912499,22.754166 2.38125,-0.264583 v 1.5875 l -2.116666,0.264583 z"
				id="path20264"
			/><path
				style="fill:#b7c3ca;fill-opacity:1;fill-rule:evenodd;stroke:none;stroke-width:1.5;stroke-linecap:round;stroke-linejoin:round;stroke-miterlimit:3"
				d="m 40.216666,34.925 4.233333,-2.116667 0.79375,1.852083 -4.233333,1.852084 z"
				id="path20998"
			/><path
				style="fill:#b7c3ca;fill-opacity:1;fill-rule:evenodd;stroke:none;stroke-width:1.5;stroke-linecap:round;stroke-linejoin:round;stroke-miterlimit:3"
				d="m 46.831249,33.866666 3.96875,-1.852083 -0.79375,-1.5875 -3.96875,1.852083 z"
				id="path21000"
			/><path
				style="fill:#b7c3ca;fill-opacity:1;fill-rule:evenodd;stroke:none;stroke-width:1.5;stroke-linecap:round;stroke-linejoin:round;stroke-miterlimit:3"
				d="m 51.593749,29.897916 4.233334,-1.322916 0.529166,1.5875 -3.96875,1.322916 z"
				id="path21002"
			/><path
				style="fill:#b7c3ca;fill-opacity:1;fill-rule:evenodd;stroke:none;stroke-width:1.5;stroke-linecap:round;stroke-linejoin:round;stroke-miterlimit:3"
				d="m 92.074999,40.216666 v -3.439583 h -2.645833 l -2.116667,5.55625 h 2.116667 l 0.79375,-2.116667 z"
				id="path21004"
			/><ellipse
				style="fill:#54ded2;fill-opacity:1;fill-rule:evenodd;stroke:none;stroke-width:2.44304;stroke-linecap:round;stroke-linejoin:round;stroke-miterlimit:3"
				id="ellipse21070"
				cx="5.5836258"
				cy="52.168324"
				rx="2.78901"
				ry="1.7237029"
				transform="rotate(-18.000009)"
			/><ellipse
				style="fill:#54ded2;fill-opacity:1;fill-rule:evenodd;stroke:none;stroke-width:2.99554;stroke-linecap:round;stroke-linejoin:round;stroke-miterlimit:3"
				id="ellipse21800"
				cx="15.405753"
				cy="54.179451"
				rx="3.1940351"
				ry="2.2628694"
				transform="matrix(0.93326231,-0.35919557,0.26452853,0.96437786,0,0)"
			/><circle
				style="fill:#54ded2;fill-opacity:1;fill-rule:evenodd;stroke:none;stroke-width:2.875;stroke-linecap:round;stroke-linejoin:round;stroke-miterlimit:3"
				id="circle21072"
				cx="25.267708"
				cy="49.477085"
				r="3.0427089"
			/><ellipse
				style="fill:#000000;fill-opacity:1;fill-rule:evenodd;stroke:none;stroke-width:1.97443;stroke-linecap:round;stroke-linejoin:round;stroke-miterlimit:3"
				id="ellipse21066"
				cx="15.405753"
				cy="54.179451"
				rx="2.1052642"
				ry="1.4915109"
				transform="matrix(0.93326231,-0.35919557,0.26452853,0.96437786,0,0)"
			/><ellipse
				style="fill:#000000;fill-opacity:1;fill-rule:evenodd;stroke:none;stroke-width:1.5;stroke-linecap:round;stroke-linejoin:round;stroke-miterlimit:3"
				id="path21064"
				cx="5.5836258"
				cy="52.168324"
				rx="1.7124193"
				ry="1.0583333"
				transform="rotate(-18.000009)"
			/><circle
				style="fill:#000000;fill-opacity:1;fill-rule:evenodd;stroke:none;stroke-width:1.875;stroke-linecap:round;stroke-linejoin:round;stroke-miterlimit:3"
				id="path21068"
				cx="25.267708"
				cy="49.477085"
				r="1.9843762"
			/><path
				style="fill:#54ded2;fill-opacity:1;fill-rule:evenodd;stroke:none;stroke-width:1.5;stroke-linecap:round;stroke-linejoin:round;stroke-miterlimit:3"
				d="m 31.75,46.566666 13.493749,-5.027083 -0.264583,-1.322917 -13.49375,5.027083 z"
				id="path25910"
			/><path
				style="fill:#54ded2;fill-opacity:1;fill-rule:evenodd;stroke:none;stroke-width:1.5;stroke-linecap:round;stroke-linejoin:round;stroke-miterlimit:3"
				d="M 31.75,46.566666 H 31.485416 L 31.75,46.302083 Z"
				id="path26119"
			/><path
				style="fill:#333436;fill-opacity:1;fill-rule:evenodd;stroke:none;stroke-width:1.5;stroke-linecap:round;stroke-linejoin:round;stroke-miterlimit:3"
				d="m 33.3375,38.629166 1.058333,0.79375 -1.058333,0.529167 -1.058334,-0.79375 z"
				id="path26905"
			/><path
				style="fill:#333436;fill-opacity:1;fill-rule:evenodd;stroke:none;stroke-width:1.5;stroke-linecap:round;stroke-linejoin:round;stroke-miterlimit:3"
				d="M 37.835417,36.777083 38.89375,37.570833 37.835417,38.1 36.777083,37.30625 Z"
				id="path26907"
			/><path
				style="fill:#333436;fill-opacity:1;fill-rule:evenodd;stroke:none;stroke-width:1.5;stroke-linecap:round;stroke-linejoin:round;stroke-miterlimit:3"
				d="m 42.333334,38.761458 1.058333,0.79375 -1.058333,0.529167 -1.058334,-0.79375 z"
				id="path26909"
			/><path
				style="fill:#333436;fill-opacity:1;fill-rule:evenodd;stroke:none;stroke-width:1.5;stroke-linecap:round;stroke-linejoin:round;stroke-miterlimit:3"
				d="m 37.835417,40.084375 1.058333,0.79375 -1.058333,0.529167 -1.058334,-0.79375 z"
				id="path26911"
			/><path
				style="fill:#333436;fill-opacity:1;fill-rule:evenodd;stroke:none;stroke-width:1.5;stroke-linecap:round;stroke-linejoin:round;stroke-miterlimit:3"
				d="m 33.3375,41.936458 1.058333,0.79375 -1.058333,0.529167 -1.058334,-0.79375 z"
				id="path26913"
			/><path
				style="fill:#333436;fill-opacity:1;fill-rule:evenodd;stroke:none;stroke-width:1.5;stroke-linecap:round;stroke-linejoin:round;stroke-miterlimit:3"
				d="M 37.570833,46.831249 39.6875,45.508333 41.804166,46.831249 39.6875,48.154166 Z"
				id="path27643"
			/><path
				style="fill:#333436;fill-opacity:1;fill-rule:evenodd;stroke:none;stroke-width:1.5;stroke-linecap:round;stroke-linejoin:round;stroke-miterlimit:3"
				d="m 42.597916,49.080208 2.116667,-1.322916 2.116666,1.322916 -2.116666,1.322917 z"
				id="path27645"
			/><path
				style="fill:#333436;fill-opacity:1;fill-rule:evenodd;stroke:none;stroke-width:1.5;stroke-linecap:round;stroke-linejoin:round;stroke-miterlimit:3"
				d="m 42.06875,53.313541 2.116667,-1.322916 2.116666,1.322916 -2.116666,1.322917 z"
				id="path27647"
			/><path
				style="fill:#333436;fill-opacity:1;fill-rule:evenodd;stroke:none;stroke-width:1.5;stroke-linecap:round;stroke-linejoin:round;stroke-miterlimit:3"
				d="m 33.072916,49.080208 2.116667,-1.322916 2.116666,1.322916 -2.116666,1.322917 z"
				id="path27651"
			/><path
				style="fill:#333436;fill-opacity:1;fill-rule:evenodd;stroke:none;stroke-width:1.5;stroke-linecap:round;stroke-linejoin:round;stroke-miterlimit:3"
				d="m 30.691666,52.784375 2.116667,-1.322916 2.116666,1.322916 -2.116666,1.322917 z"
				id="path27653"
			/><path
				style="fill:#4f5875;fill-opacity:1;fill-rule:evenodd;stroke:none;stroke-width:1.5;stroke-linecap:round;stroke-linejoin:round;stroke-miterlimit:3"
				d="m 33.072916,60.854166 -3.439583,-3.704167 7.408333,-4.7625 -1.322916,-1.322916 3.96875,-2.116667 3.704166,2.116667 -2.645833,2.116666 3.439583,2.38125 5.55625,-3.704166 -0.264583,6.614583 -0.79375,2.116667 z"
				id="path35887"
			/><path
				style="fill:#333436;fill-opacity:1;fill-rule:evenodd;stroke:none;stroke-width:1.5;stroke-linecap:round;stroke-linejoin:round;stroke-miterlimit:3"
				d="M 37.570833,51.064583 39.6875,49.741667 41.804166,51.064583 39.6875,52.3875 Z"
				id="path27649"
			/><path
				style="fill:#5c6689;fill-opacity:1;fill-rule:evenodd;stroke:none;stroke-width:1.5;stroke-linecap:round;stroke-linejoin:round;stroke-miterlimit:3"
				d="m 33.072916,60.854166 5.820834,-7.408333 9.789583,7.14375 c -3.934171,4.202882 -8.351485,6.83956 -15.610417,0.264583 z"
				id="path35352"
			/><path
				style="fill:#333436;fill-opacity:1;fill-rule:evenodd;stroke:none;stroke-width:1.5;stroke-linecap:round;stroke-linejoin:round;stroke-miterlimit:3"
				d="m 35.71875,55.165625 2.116667,-1.322916 2.116666,1.322916 -2.116666,1.322917 z"
				id="path27655"
			/><path
				style="fill:#4f5875;fill-opacity:1;fill-rule:evenodd;stroke:none;stroke-width:1.5;stroke-linecap:round;stroke-linejoin:round;stroke-miterlimit:3"
				d="m 42.862499,56.356249 -1.5875,1.058334 2.116667,1.322916 2.645833,-1.5875 z"
				id="path36158"
			/><path
				style="fill:#333436;fill-opacity:1;fill-rule:evenodd;stroke:none;stroke-width:1.5;stroke-linecap:round;stroke-linejoin:round;stroke-miterlimit:3"
				d="m 40.216666,58.076041 2.116667,-1.322916 2.116666,1.322916 -2.116666,1.322917 z"
				id="path27657"
			/><path
				style="fill:#333436;fill-opacity:1;fill-rule:evenodd;stroke:none;stroke-width:1.5;stroke-linecap:round;stroke-linejoin:round;stroke-miterlimit:3"
				d="m 36.777083,59.795833 1.058333,-0.529167 1.058334,0.529167 -1.058334,0.79375 z"
				id="path27659"
			/><path
				style="fill:#333436;fill-opacity:1;fill-rule:evenodd;stroke:none;stroke-width:1.5;stroke-linecap:round;stroke-linejoin:round;stroke-miterlimit:3"
				d="m 41.010416,62.441666 1.058333,-0.79375 -1.058333,-0.529167 -1.058333,0.529167 z"
				id="path27661"
			/><path
				style="fill:#efdfa1;fill-opacity:1;fill-rule:evenodd;stroke:none;stroke-width:1.5;stroke-linecap:round;stroke-linejoin:round;stroke-miterlimit:3"
				d="m 6.8791666,48.683333 v -6.085417 l 1.8520833,1.058333 v 3.175 z"
				id="path31878"
			/><path
				style="fill:#efdfa1;fill-opacity:1;fill-rule:evenodd;stroke:none;stroke-width:1.5;stroke-linecap:round;stroke-linejoin:round;stroke-miterlimit:3"
				d="m 9.2604166,45.772916 c 1.5780714,-0.50442 1.6401744,-1.326225 1.8520834,-2.116667 1.29904,-0.827607 1.728283,-0.149087 1.852083,1.058334 -1.212122,1.028778 -2.445325,1.427011 -3.7041664,1.058333 z"
				id="path32348"
			/><path
				style="fill:#efdfa1;fill-opacity:1;fill-rule:evenodd;stroke:none;stroke-width:1.5;stroke-linecap:round;stroke-linejoin:round;stroke-miterlimit:3"
				d="m 9.7895832,49.477083 h 6.3499998 l 6.614583,5.820833 c -1.914604,0.552854 -2.386031,2.437886 -2.38125,4.7625 h -1.5875 C 17.427767,56.849613 16.136045,53.642365 12.7,51.329166 h -1.322917 z"
				id="path32350"
			/><path
				style="fill:#efdfa1;fill-opacity:1;fill-rule:evenodd;stroke:none;stroke-width:1.5;stroke-linecap:round;stroke-linejoin:round;stroke-miterlimit:3"
				d="m 13.49375,68.262499 h 2.645833 v -3.704166 l 1.322917,-1.5875 -6.614583,-8.73125 H 5.8208333 l 1.3229166,1.5875 h 1.3229167 c 1.7014364,3.426676 4.0127354,6.547563 5.0270834,10.318749 z"
				id="path32352"
			/><path
				style="fill:#efdfa1;fill-opacity:1;fill-rule:evenodd;stroke:none;stroke-width:1.5;stroke-linecap:round;stroke-linejoin:round;stroke-miterlimit:3"
				d="m 21.695833,86.518749 c 1.083744,1.429703 2.426042,2.735719 5.027083,3.439583 v -5.820833 c -0.217369,-1.173961 -0.854945,-2.107517 -2.645833,-2.38125 l -2.38125,-0.264583 z"
				id="path32406"
			/><path
				style="fill:#efdfa1;fill-opacity:1;fill-rule:evenodd;stroke:none;stroke-width:1.5;stroke-linecap:round;stroke-linejoin:round;stroke-miterlimit:3"
				d="m 86.518749,94.720832 h 2.38125 v 2.38125 h -2.38125 z"
				id="path32408"
			/><path
				style="fill:#efdfa1;fill-opacity:1;fill-rule:evenodd;stroke:none;stroke-width:1.5;stroke-linecap:round;stroke-linejoin:round;stroke-miterlimit:3"
				d="m 82.814582,87.312499 h 2.38125 V 82.020832 C 84.894847,81.29642 84.592294,80.580585 84.137499,80.697916 h -2.645833 c 0.477073,0.331513 0.472587,0.289031 1.322916,1.5875 z"
				id="path32410"
			/><path
				style="fill:#333436;fill-opacity:1;fill-rule:evenodd;stroke:none;stroke-width:1.5;stroke-linecap:round;stroke-linejoin:round;stroke-miterlimit:3"
				d="m 82.814582,88.899999 h 2.38125 v -1.5875 h -2.38125 z"
				id="path33864"
			/><path
				style="fill:#535a63;fill-opacity:1;fill-rule:evenodd;stroke:none;stroke-width:1.5;stroke-linecap:round;stroke-linejoin:round;stroke-miterlimit:3"
				d="m 82.814582,88.899999 h 2.38125 v 1.5875 h 1.322917 V 78.052082 c 2.486154,-4.807254 5.893002,-4.814372 9.260416,-5.027083 l 3.704167,4.233333 0.529168,1.852084 v 5.820833 c -0.313962,0.814419 -0.737091,1.624136 -2.381251,2.38125 l -7.408333,2.910417 c -0.601732,0.607513 -1.058333,1.587501 -1.058333,2.381251 0.353183,2.246045 -1.501216,2.230229 -3.175001,2.116665 -1.366234,0.01221 -2.724385,0.01022 -3.175,-1.5875 z"
				id="path34503"
			/><path
				style="fill:#333436;fill-opacity:1;fill-rule:evenodd;stroke:none;stroke-width:1.5;stroke-linecap:round;stroke-linejoin:round;stroke-miterlimit:3"
				d="m 89.164582,84.137499 c 0,0 4.233333,0 4.233333,0 l -1.852083,-1.852083 z"
				id="path34081"
			/><path
				style="fill:#333436;fill-opacity:1;fill-rule:evenodd;stroke:none;stroke-width:1.5;stroke-linecap:round;stroke-linejoin:round;stroke-miterlimit:3"
				d="m 89.164582,78.58125 c 0,0 4.233333,0 4.233333,0 l -1.852083,1.852083 z"
				id="path34499"
			/><path
				style="fill:#333436;fill-opacity:1;fill-rule:evenodd;stroke:none;stroke-width:1.5;stroke-linecap:round;stroke-linejoin:round;stroke-miterlimit:3"
				d="m 96.837499,83.079166 1.852083,-1.5875 -1.852083,-1.852084 -2.116667,1.852084 z"
				id="path34501"
			/><path
				style="fill:#5e8dfd;fill-opacity:1;fill-rule:evenodd;stroke:none;stroke-width:1.5;stroke-linecap:round;stroke-linejoin:round;stroke-miterlimit:3"
				d="m 24.341666,76.199999 7.9375,4.7625 -3.175,5.820833 z"
				id="path38338"
			/><path
				style="fill:#72716f;fill-opacity:1;fill-rule:evenodd;stroke:none;stroke-width:1.5;stroke-linecap:round;stroke-linejoin:round;stroke-miterlimit:3"
				d="m 50.006249,43.656249 c 0.252251,-6.10031 4.287091,-7.033872 8.73125,-7.408333 v 7.408333 z"
				id="path39100"
			/><path
				style="fill:#a19e9b;fill-opacity:1;fill-rule:evenodd;stroke:none;stroke-width:1.5;stroke-linecap:round;stroke-linejoin:round;stroke-miterlimit:3"
				d="m 58.737499,43.656249 v 1.852084 l 1.058334,1.058333 v 7.9375 c -3.856471,-0.121332 -7.221432,0.836217 -10.31875,2.38125 l 0.264583,-5.027083 0.264583,-8.202084 z"
				id="path39578"
			/><path
				style="fill:#52d8cc;fill-opacity:1;fill-rule:evenodd;stroke:none;stroke-width:1.5;stroke-linecap:round;stroke-linejoin:round;stroke-miterlimit:3"
				d="m 19.314583,30.1625 5.291667,-7.408334 h 1.5875 L 21.695833,30.1625 Z"
				id="path42938"
			/><path
				style="fill:#52d8cc;fill-opacity:1;fill-rule:evenodd;stroke:none;stroke-width:1.5;stroke-linecap:round;stroke-linejoin:round;stroke-miterlimit:3"
				d="M 27.252083,25.664583 32.54375,17.4625 h 1.852083 l -4.7625,8.202083 z"
				id="path43477"
			/><path
				style="fill:#52d8cc;fill-opacity:1;fill-rule:evenodd;stroke:none;stroke-width:1.5;stroke-linecap:round;stroke-linejoin:round;stroke-miterlimit:3"
				d="M 34.925,23.01875 H 38.1 l 5.027083,-8.466667 h -1.852084 z"
				id="path43479"
			/><path
				style="fill:#52d8cc;fill-opacity:1;fill-rule:evenodd;stroke:none;stroke-width:1.5;stroke-linecap:round;stroke-linejoin:round;stroke-miterlimit:3"
				d="m 43.127083,20.6375 h 3.175 l 4.497916,-7.790621 h -1.5875 z"
				id="path43481"
			/><path
				style="fill:#52d8cc;fill-opacity:1;fill-rule:evenodd;stroke:none;stroke-width:1.5;stroke-linecap:round;stroke-linejoin:round;stroke-miterlimit:3"
				d="m 51.064583,17.4625 h 3.175 l 4.124446,-7.14375 h -1.743196 z"
				id="path43483"
			/><path
				style="fill:#52d8cc;fill-opacity:1;fill-rule:evenodd;stroke:none;stroke-width:1.5;stroke-linecap:round;stroke-linejoin:round;stroke-miterlimit:3"
				d="m 57.679166,16.66875 h 3.704167 l 4.429961,-7.6729168 h -2.313295 z"
				id="path43485"
			/><path
				style="fill:#52d8cc;fill-opacity:1;fill-rule:evenodd;stroke:none;stroke-width:1.5;stroke-linecap:round;stroke-linejoin:round;stroke-miterlimit:3"
				d="m 65.352083,15.345833 h 3.175 l 4.497916,-7.9374998 h -2.116667 z"
				id="path43487"
			/><path
				style="fill:#efdfa1;fill-opacity:1;fill-rule:evenodd;stroke:none;stroke-width:1.5;stroke-linecap:round;stroke-linejoin:round;stroke-miterlimit:3"
				d="m 96.308332,33.866666 3.439583,4.497917 v 32.543749 l 3.439585,3.439584 6.61458,-7.9375 v -37.30625 z"
				id="path44567"
			/><path
				style="fill:#dc8476;fill-opacity:1;fill-rule:evenodd;stroke:none;stroke-width:1.5;stroke-linecap:round;stroke-linejoin:round;stroke-miterlimit:3"
				d="M 58.737499,42.068749 V 26.722916 l 2.38125,1.322917 v 3.96875 h 1.5875 c 1.446314,-5.941768 4.274609,-11.835141 7.14375,-17.727083 h 1.5875 l -0.79375,3.175 h 2.116667 C 74.753242,13.487798 77.875242,9.9252394 80.962499,6.3499999 L 79.904166,15.08125 87.312499,5.0270833 H 101.07083 L 97.366665,10.31875 h 7.143755 l 4.23333,-5.0270834 h 14.2875 C 121.00244,11.69549 120.71423,15.628068 111.65417,32.014583 v 2.645833 L 121.70833,23.01875 v 13.758333 l -10.31875,12.170833 v 3.175 l 10.58334,-11.641667 v 8.73125 l -11.64167,11.90625 v 2.645834 l 10.58333,-10.31875 v 7.408333 l -9.525,12.7 -7.14375,1.914162 -1.5875,-1.587497 6.35,-8.793332 -0.26458,-5.291666 -8.995835,8.995833 v -2.910417 l 8.995835,-9.260416 v -7.14375 l -8.995835,9.525 v -2.116667 l 8.995835,-10.31875 v -11.1125 l -8.995835,10.31875 v -1.852083 l 6.085415,-10.31875 H 66.674999 l -4.7625,4.233333 -1.852083,4.233333 z"
				id="path44365"
			/><path
				style="fill:#efdfa1;fill-opacity:1;fill-rule:evenodd;stroke:none;stroke-width:1.5;stroke-linecap:round;stroke-linejoin:round;stroke-miterlimit:3"
				d="m 59.795833,54.504166 6.879166,-20.6375 H 93.397915 L 105.83333,33.602083 110.33125,17.4625 H 99.747915 l -5.291666,5.291666 h -5.291667 l 4.7625,-5.291666 h -12.7 l -6.085416,10.583333 c -1.384732,-1.443406 0.133481,-4.227042 0.79375,-6.614583 -2.154444,1.61423 -3.625182,1.63046 -8.466667,9.525 l -0.264583,-3.175 c -2.471105,4.16922 -4.915141,8.517164 -7.14375,14.287499 h -1.322917 v 11.641667 z"
				id="path44215"
			/><path
				style="fill:#7ba7fe;fill-opacity:1;fill-rule:evenodd;stroke:none;stroke-width:1.5;stroke-linecap:round;stroke-linejoin:round;stroke-miterlimit:3"
				d="m 41.010416,87.577082 h 7.9375 l 4.233333,5.027084 -1.322916,0.529166 -3.175,-3.704166 h -6.614584 z"
				id="path47007"
			/><path
				style="fill:#7ba7fe;fill-opacity:1;fill-rule:evenodd;stroke:none;stroke-width:1.5;stroke-linecap:round;stroke-linejoin:round;stroke-miterlimit:3"
				d="m 58.472916,88.370832 1.322917,1.5875 h 6.349999 l 2.910417,2.910417 1.5875,-0.529167 -3.96875,-3.96875 z"
				id="path47355"
			/><path
				style="fill:#52d8cc;fill-opacity:1;fill-rule:evenodd;stroke:none;stroke-width:1.5;stroke-linecap:round;stroke-linejoin:round;stroke-miterlimit:3"
				d="m 34.13125,91.281249 3.96875,1.5875 7.672916,6.614583 h 3.704167 l 4.497916,5.820838 h -3.704166 z"
				id="path45295"
			/><path
				style="fill:#5e8cfd;fill-opacity:1;fill-rule:evenodd;stroke:none;stroke-width:1.5;stroke-linecap:round;stroke-linejoin:round;stroke-miterlimit:3"
				d="m 49.477083,99.483332 -4.7625,-6.614583 H 38.1 l 7.672916,6.614583 z"
				id="path46194"
			/><path
				style="fill:#52d8cc;fill-opacity:1;fill-rule:evenodd;stroke:none;stroke-width:1.5;stroke-linecap:round;stroke-linejoin:round;stroke-miterlimit:3"
				d="m 51.726042,91.281249 3.96875,1.5875 7.672916,6.614583 h 3.704167 l 4.497916,5.820838 h -3.704166 z"
				id="path46269"
			/><path
				style="fill:#5e8cfd;fill-opacity:1;fill-rule:evenodd;stroke:none;stroke-width:1.5;stroke-linecap:round;stroke-linejoin:round;stroke-miterlimit:3"
				d="m 67.071875,99.483332 -4.7625,-6.614583 h -6.614583 l 7.672916,6.614583 z"
				id="path46271"
			/><path
				style="fill:#5e8cfd;fill-opacity:1;fill-rule:evenodd;stroke:none;stroke-width:1.5;stroke-linecap:round;stroke-linejoin:round;stroke-miterlimit:3"
				d="m 69.056249,92.868749 -5.55625,2.116666 -3.704166,-5.027083 h 6.349999 z"
				id="path47353"
			/><path
				style="fill:#5e8cfd;fill-opacity:1;fill-rule:evenodd;stroke:none;stroke-width:1.5;stroke-linecap:round;stroke-linejoin:round;stroke-miterlimit:3"
				d="m 51.858333,93.133332 -5.820834,1.852083 -3.96875,-5.556249 h 6.614584 z"
				id="path47274"
			/><path
				style="fill:#52d8cc;fill-opacity:1;fill-rule:evenodd;stroke:none;stroke-width:1.5;stroke-linecap:round;stroke-linejoin:round;stroke-miterlimit:3"
				d="m 69.453125,91.281249 3.96875,1.5875 7.672916,6.614583 h 3.704167 l 4.497916,5.820838 h -3.704166 z"
				id="path46275"
			/><path
				style="fill:#5e8cfd;fill-opacity:1;fill-rule:evenodd;stroke:none;stroke-width:1.5;stroke-linecap:round;stroke-linejoin:round;stroke-miterlimit:3"
				d="m 84.798958,99.483332 -4.7625,-6.614583 h -6.614583 l 7.672916,6.614583 z"
				id="path46277"
			/><path
				style="fill:#5c6689;fill-opacity:1;fill-rule:evenodd;stroke:none;stroke-width:1.5;stroke-linecap:round;stroke-linejoin:round;stroke-miterlimit:3"
				d="m 24.870833,55.033333 2.645833,2.645833 -0.79375,10.847916 -1.322916,8.202084 -0.79375,3.175 H 20.6375 L 19.579166,62.706249 Z"
				id="path47704"
			/><path
				style="fill:#5c6689;fill-opacity:1;fill-rule:evenodd;stroke:none;stroke-width:1.5;stroke-linecap:round;stroke-linejoin:round;stroke-miterlimit:3"
				d="m 26.722916,68.527082 14.2875,16.933334 -1.5875,-9.525 -1.852083,-1.852084 3.96875,-3.704166 17.4625,16.404166 v -9.789583 l -2.38125,-2.38125 6.35,-3.96875 9.524999,11.377083 0.264584,-7.672916 -1.5875,-1.322917 -1.852084,-2.910417 8.202084,-4.497916 6.085416,8.466666 0.264584,2.645834 -1.5875,1.322916 -0.264584,-3.704166 -5.027083,-6.614584 -5.820833,2.910417 3.175,2.910417 0.529166,11.1125 0.264585,0.529167 v 1.852084 l -12.435418,-14.816668 -3.96875,2.645833 1.058334,1.058334 0.79375,10.583333 0.264583,0.79375 v 1.058333 h -2.38125 l -16.933333,-16.404166 -2.38125,2.38125 1.058333,0.79375 1.852083,12.435416 h -1.058333 l -14.552083,-17.4625 v -1.5875 z"
				id="path47913"
			/><path
				style="fill:#5e8dfd;fill-opacity:1;fill-rule:evenodd;stroke:none;stroke-width:1.5;stroke-linecap:round;stroke-linejoin:round;stroke-miterlimit:3"
				d="m 40.216667,75.141667 1.852083,12.435416 5.556249,-6.614584 z"
				id="path39092"
			/><path
				style="fill:#5e8dfd;fill-opacity:1;fill-rule:evenodd;stroke:none;stroke-width:1.5;stroke-linecap:round;stroke-linejoin:round;stroke-miterlimit:3"
				d="m 73.289582,80.962499 4.497917,-8.73125 -6.085417,-0.79375 2.38125,1.852083 z"
				id="path39098"
			/><path
				style="fill:#5e8dfd;fill-opacity:1;fill-rule:evenodd;stroke:none;stroke-width:1.5;stroke-linecap:round;stroke-linejoin:round;stroke-miterlimit:3"
				d="m 59.795833,75.935416 6.349999,5.027083 -6.085416,7.14375 z"
				id="path39096"
			/><path
				style="fill:#e7f3f3;fill-opacity:1;fill-rule:evenodd;stroke:none;stroke-width:1.5;stroke-linecap:round;stroke-linejoin:round;stroke-miterlimit:3"
				d="m 35.71875,66.410416 3.704166,2.910416 h 5.820833 v -2.910416 z"
				id="path49643"
			/><path
				style="fill:#b7c3ca;fill-opacity:1;fill-rule:evenodd;stroke:none;stroke-width:1.5;stroke-linecap:round;stroke-linejoin:round;stroke-miterlimit:3"
				d="m 36.777083,66.410416 2.645833,2.38125 h 5.027083 v -2.38125 z"
				id="path49699"
			/><path
				style="fill:#e7f3f3;fill-opacity:1;fill-rule:evenodd;stroke:none;stroke-width:1.5;stroke-linecap:round;stroke-linejoin:round;stroke-miterlimit:3"
				d="m 46.302083,66.145832 7.408333,3.175 8.202083,-3.704166 -3.175,-3.704167 z"
				id="path50177"
			/><path
				style="fill:#b7c3ca;fill-opacity:1;fill-rule:evenodd;stroke:none;stroke-width:1.5;stroke-linecap:round;stroke-linejoin:round;stroke-miterlimit:3"
				d="m 53.445833,68.262499 6.614583,-2.910416 -2.116667,-3.175 -10.054166,3.439583 z"
				id="path50179"
			/><path
				style="fill:#e7f3f3;fill-opacity:1;fill-rule:evenodd;stroke:none;stroke-width:1.5;stroke-linecap:round;stroke-linejoin:round;stroke-miterlimit:3"
				d="m 61.647916,63.235416 7.14375,2.910416 7.672916,-3.439583 -2.645833,-3.96875 -0.79375,0.529167 z"
				id="path50181"
			/><path
				style="fill:#b7c3ca;fill-opacity:1;fill-rule:evenodd;stroke:none;stroke-width:1.5;stroke-linecap:round;stroke-linejoin:round;stroke-miterlimit:3"
				d="m 62.970833,62.706249 5.820833,2.645834 6.35,-3.175 -2.116667,-2.910417 z"
				id="path50183"
			/><path
				style="fill:#333436;fill-opacity:1;fill-rule:evenodd;stroke:none;stroke-width:1.5;stroke-linecap:round;stroke-linejoin:round;stroke-miterlimit:3"
				d="m 71.172916,57.149999 1.852083,-0.264583 1.322917,-2.116667 v -3.175 h -1.5875 v 2.645834 z"
				id="path51820"
			/><path
				style="fill:#333436;fill-opacity:1;fill-rule:evenodd;stroke:none;stroke-width:1.5;stroke-linecap:round;stroke-linejoin:round;stroke-miterlimit:3"
				d="m 63.499999,51.858333 0.529167,-1.5875 h 4.233333 l 2.116667,-1.322917 h 2.910416 l -0.264583,1.322917 h -2.116667 l -2.38125,1.5875 z"
				id="path52098"
			/><path
				style="fill:#333436;fill-opacity:1;fill-rule:evenodd;stroke:none;stroke-width:1.5;stroke-linecap:round;stroke-linejoin:round;stroke-miterlimit:3"
				d="m 74.083333,46.566667 -10e-7,-1.587501 -3.704166,-2.116667 V 39.422916 L 68.262499,37.30625 c 0.08774,-0.463154 0.373944,-0.703456 0.79375,-0.79375 l 2.645833,2.645833 v 3.175 l 2.910417,1.5875 10e-7,1.5875 c -0.22585,-0.0035 -0.378298,0.521738 -0.529167,1.058334 z"
				id="path52100"
			/><path
				style="fill:#b7c3ca;fill-opacity:1;fill-rule:evenodd;stroke:none;stroke-width:1.5;stroke-linecap:round;stroke-linejoin:round;stroke-miterlimit:3"
				d="m 71.172916,36.777083 h 4.497916 v 2.645833 h -4.497916 z"
				id="path20992"
			/><path
				style="fill:#333436;fill-opacity:1;fill-rule:evenodd;stroke:none;stroke-width:1.5;stroke-linecap:round;stroke-linejoin:round;stroke-miterlimit:3"
				d="m 76.729166,44.979166 v -3.175 l 2.645833,-1.5875 v -1.058333 -2.910417 h 1.322917 v 4.233333 l -2.645834,1.852084 v 2.645833 z"
				id="path52102"
			/><path
				style="fill:#b7c3ca;fill-opacity:1;fill-rule:evenodd;stroke:none;stroke-width:1.5;stroke-linecap:round;stroke-linejoin:round;stroke-miterlimit:3"
				d="m 76.596875,36.777083 h 4.497916 v 2.645833 h -4.497916 z"
				id="path20994"
			/><path
				style="fill:#333436;fill-opacity:1;fill-rule:evenodd;stroke:none;stroke-width:1.5;stroke-linecap:round;stroke-linejoin:round;stroke-miterlimit:3"
				d="m 82.020832,44.979166 h 1.5875 l 1.5875,-2.910417 h 1.5875 l 2.38125,-5.820833 h -1.5875 l -1.852083,4.497917 h -1.5875 z"
				id="path52104"
			/><path
				style="fill:#b7c3ca;fill-opacity:1;fill-rule:evenodd;stroke:none;stroke-width:1.5;stroke-linecap:round;stroke-linejoin:round;stroke-miterlimit:3"
				d="m 82.417709,36.777083 h 4.497916 v 2.645833 h -4.497916 z"
				id="path20996"
			/><path
				style="fill:#333436;fill-opacity:1;fill-rule:evenodd;stroke:none;stroke-width:1.5;stroke-linecap:round;stroke-linejoin:round;stroke-miterlimit:3"
				d="m 84.93125,48.41875 0.529167,-1.5875 1.587499,-10e-7 3.704166,-0.529166 1.058334,-0.79375 h 3.174999 v 1.5875 h -2.910416 l -2.38125,1.322916 z"
				id="path52106"
			/><path
				style="fill:#333436;fill-opacity:1;fill-rule:evenodd;stroke:none;stroke-width:1.5;stroke-linecap:round;stroke-linejoin:round;stroke-miterlimit:3"
				d="m 83.972135,51.064583 0.496093,-1.322917 h 3.638021 l 2.910417,2.910417 h 2.381249 l 1.5875,1.5875 v 1.322916 l -1.852083,-1.322916 h -2.38125 l -3.175,-2.910417 z"
				id="path52108"
			/><path
				style="fill:#b7c3ca;fill-opacity:1;fill-rule:evenodd;stroke:none;stroke-width:1.5;stroke-linecap:round;stroke-linejoin:round;stroke-miterlimit:3"
				d="M 90.752083,47.757291 V 44.317708 H 88.10625 l -2.116667,5.55625 H 88.10625 L 88.9,47.757291 Z"
				id="path21006"
			/><path
				style="fill:#333436;fill-opacity:1;fill-rule:evenodd;stroke:none;stroke-width:1.5;stroke-linecap:round;stroke-linejoin:round;stroke-miterlimit:3"
				d="m 82.285416,55.562499 h 3.96875 l 2.645833,3.439584 h 3.439583 l 2.645835,3.439583 v 1.5875 l -3.439585,-3.704167 h -3.439583 l -2.645833,-3.439583 -3.439583,-0.264583 z"
				id="path52110"
			/><path
				style="fill:#b7c3ca;fill-opacity:1;fill-rule:evenodd;stroke:none;stroke-width:1.5;stroke-linecap:round;stroke-linejoin:round;stroke-miterlimit:3"
				d="M 88.238541,55.033333 V 51.59375 H 85.592708 L 83.476041,57.15 h 2.116667 l 0.79375,-2.116667 z"
				id="path21008"
			/><path
				style="fill:#e7f3f3;fill-opacity:1;fill-rule:evenodd;stroke:none;stroke-width:1.5;stroke-linecap:round;stroke-linejoin:round;stroke-miterlimit:3"
				d="m 79.374999,61.383333 -0.79375,-1.322917 -2.38125,-0.529167 5.291667,-1.852083 1.058333,2.38125 z"
				id="path50185"
			/><path
				style="fill:#b7c3ca;fill-opacity:1;fill-rule:evenodd;stroke:none;stroke-width:1.5;stroke-linecap:round;stroke-linejoin:round;stroke-miterlimit:3"
				d="m 79.110416,60.854166 2.910416,-1.058333 -1.058333,-1.852084 -4.7625,1.5875 2.38125,0.529167 z"
				id="path50187"
			/><path
				style="fill:#333436;fill-opacity:1;fill-rule:evenodd;stroke:none;stroke-width:1.5;stroke-linecap:round;stroke-linejoin:round;stroke-miterlimit:3"
				d="m 94.985415,68.527082 v 1.852084 l -4.497916,-3.439584 h -2.910417 l -2.645833,-3.439583 -4.497917,-0.264583 -0.79375,-1.5875 h 6.085417 l 3.175,3.704167 h 2.38125 z"
				id="path52112"
			/></g
		><metadata id="metadata20531">
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
