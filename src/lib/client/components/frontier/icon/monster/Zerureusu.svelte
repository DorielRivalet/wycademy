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
				id="filter77385"
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
					id="feComposite77371"
				/><feColorMatrix
					in="composite1"
					values="1"
					type="saturate"
					result="colormatrix1"
					id="feColorMatrix77373"
				/><feFlood
					flood-opacity="1"
					flood-color="rgb(0,0,0)"
					result="flood1"
					id="feFlood77375"
				/><feBlend
					in="flood1"
					in2="colormatrix1"
					mode="multiply"
					result="blend1"
					id="feBlend77377"
				/><feBlend
					in2="blend1"
					mode="screen"
					result="blend2"
					id="feBlend77379"
				/><feColorMatrix
					in="blend2"
					values="1"
					type="saturate"
					result="colormatrix2"
					id="feColorMatrix77381"
				/><feComposite
					in="colormatrix2"
					in2="SourceGraphic"
					operator="in"
					k2="1"
					result="composite2"
					id="feComposite77383"
				/></filter
			><filter
				style="color-interpolation-filters:sRGB;"
				id="filter94027"
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
					id="feComposite94013"
				/><feColorMatrix
					in="composite1"
					values="1"
					type="saturate"
					result="colormatrix1"
					id="feColorMatrix94015"
				/><feFlood
					flood-opacity="1"
					flood-color="rgb(0,0,0)"
					result="flood1"
					id="feFlood94017"
				/><feBlend
					in="flood1"
					in2="colormatrix1"
					mode="multiply"
					result="blend1"
					id="feBlend94019"
				/><feBlend
					in2="blend1"
					mode="screen"
					result="blend2"
					id="feBlend94021"
				/><feColorMatrix
					in="blend2"
					values="1"
					type="saturate"
					result="colormatrix2"
					id="feColorMatrix94023"
				/><feComposite
					in="colormatrix2"
					in2="SourceGraphic"
					operator="in"
					k2="1"
					result="composite2"
					id="feComposite94025"
				/></filter
			></defs
		><g id="layer1"
			><g
				id="g93648"
				style="filter:url(#filter94027)"
				transform="translate(1.0583333,1.5875)"
				><path
					style="opacity:1;fill:#580618;fill-opacity:1;fill-rule:evenodd;stroke-width:1.2;stroke-linecap:round;stroke-linejoin:round;stroke-miterlimit:3;paint-order:stroke fill markers"
					d="M 68.527082,38.1 82.020832,23.283333 82.549999,23.8125 82.285416,42.068749 70.379166,39.6875 Z"
					id="path93362"
				/><path
					style="opacity:1;fill:#580618;fill-opacity:1;fill-rule:evenodd;stroke-width:1.2;stroke-linecap:round;stroke-linejoin:round;stroke-miterlimit:3;paint-order:stroke fill markers"
					d="m 119.0625,57.414583 c 0,0 -30.427084,-32.279167 -30.427084,-32.279167 h -2.645834 l 10.583333,26.458333 22.489585,7.9375 z"
					id="path93364"
				/><path
					style="opacity:1;fill:#ef2551;fill-opacity:1;fill-rule:evenodd;stroke-width:1.2;stroke-linecap:round;stroke-linejoin:round;stroke-miterlimit:3;paint-order:stroke fill markers"
					d="m 116.68125,71.966666 1.05833,-15.08125 c -7.1433,-6.174563 -14.39417,-11.36528 -22.489581,-9.260417 l 2.645833,17.197917 z"
					id="path93366"
				/><path
					style="opacity:1;fill:#f9b1c0;fill-opacity:1;fill-rule:evenodd;stroke-width:1.2;stroke-linecap:round;stroke-linejoin:round;stroke-miterlimit:3;paint-order:stroke fill markers"
					d="m 116.68125,80.697916 1.05833,-10.054167 C 111.13845,65.396536 104.5109,60.779664 97.631249,62.177083 l 0.264583,11.641666 z"
					id="path93368"
				/><path
					style="opacity:1;fill:#fefefe;fill-opacity:1;fill-rule:evenodd;stroke-width:1.2;stroke-linecap:round;stroke-linejoin:round;stroke-miterlimit:3;paint-order:stroke fill markers"
					d="m 116.41667,88.635416 c -4.17031,-5.77702 -9.49134,-10.515349 -18.520837,-11.906249 l -10e-7,-5.291668 c 7.546708,0.831266 14.283568,3.622197 19.843748,9.260417 z"
					id="path93370"
				/><path
					style="opacity:1;fill:#580618;fill-opacity:1;fill-rule:evenodd;stroke-width:1.2;stroke-linecap:round;stroke-linejoin:round;stroke-miterlimit:3;paint-order:stroke fill markers"
					d="m 83.343749,42.333333 8.73125,0.264583 L 85.989582,22.489583 83.608332,22.225 Z"
					id="path93372"
				/><path
					style="opacity:1;fill:#ef2551;fill-opacity:1;fill-rule:evenodd;stroke-width:1.2;stroke-linecap:round;stroke-linejoin:round;stroke-miterlimit:3;paint-order:stroke fill markers"
					d="M 95.249999,59.002083 97.102082,57.149999 91.810416,42.333333 C 89.012018,41.50902 86.367328,41.154667 84.137499,42.068749 l -0.264583,15.610417 z"
					id="path93374"
				/><path
					style="opacity:1;fill:#f9b1c0;fill-opacity:1;fill-rule:evenodd;stroke-width:1.2;stroke-linecap:round;stroke-linejoin:round;stroke-miterlimit:3;paint-order:stroke fill markers"
					d="m 95.249999,65.352083 1.058333,-7.14375 c -3.929454,-2.519741 -7.863887,-5.003075 -12.170833,-4.7625 l -1.058333,8.466666 z"
					id="path93376"
				/><path
					style="opacity:1;fill:#fefefe;fill-opacity:1;fill-rule:evenodd;stroke-width:1.2;stroke-linecap:round;stroke-linejoin:round;stroke-miterlimit:3;paint-order:stroke fill markers"
					d="m 82.549999,64.822916 c 5.616281,0.250014 8.583496,3.61812 11.641666,6.879166 l 1.322917,-7.143749 c -5.078876,-2.426238 -9.830746,-4.391668 -12.7,-3.704167 z"
					id="path93378"
				/><path
					style="opacity:1;fill:#ef2551;fill-opacity:1;fill-rule:evenodd;stroke-width:1.2;stroke-linecap:round;stroke-linejoin:round;stroke-miterlimit:3;paint-order:stroke fill markers"
					d="m 56.885416,50.270833 10.054166,-12.7 c 7.907925,-0.879917 13.400194,-0.159524 15.345834,2.910416 l 0.264583,10.31875 -3.175,2.645834 z"
					id="path93380"
				/><path
					style="opacity:1;fill:#f9b1c0;fill-opacity:1;fill-rule:evenodd;stroke-width:1.2;stroke-linecap:round;stroke-linejoin:round;stroke-miterlimit:3;paint-order:stroke fill markers"
					d="m 62.177083,55.297916 -5.291667,-5.027083 c 9.892804,-4.725095 17.928137,-4.375043 23.8125,1.852083 l -1.852084,7.408333 -11.90625,-3.439583 z"
					id="path93382"
				/><path
					style="opacity:1;fill:#fefefe;fill-opacity:1;fill-rule:evenodd;stroke-width:1.2;stroke-linecap:round;stroke-linejoin:round;stroke-miterlimit:3;paint-order:stroke fill markers"
					d="m 67.468749,59.531249 -5.291666,-4.233333 c 5.672459,-0.81152 11.590348,-2.885043 15.874999,3.439583 l -0.79375,3.96875 c -2.20537,-2.445426 -4.306052,-5.028129 -9.789583,-3.175 z"
					id="path93384"
				/><path
					style="opacity:1;fill:#dde4e6;fill-opacity:1;fill-rule:evenodd;stroke-width:1.2;stroke-linecap:round;stroke-linejoin:round;stroke-miterlimit:3;paint-order:stroke fill markers"
					d="m 89.429166,17.991666 33.602084,33.866667 0.79375,2.910416 h 0.26458 v 59.002081 l -5.02708,-3.96875 -1.32292,-2.64583 L 119.0625,55.562499 84.931249,21.43125 Z"
					id="path93386"
				/><path
					style="opacity:1;fill:#e1e6e9;fill-opacity:1;fill-rule:evenodd;stroke-width:1.2;stroke-linecap:round;stroke-linejoin:round;stroke-miterlimit:3;paint-order:stroke fill markers"
					d="m 42.862499,92.868749 c -1.679254,-0.359074 -3.356347,-0.446612 -5.027083,0.264583 l 12.435417,12.435418 0.79375,4.23333 1.058333,1.05834 c 11.116688,1.46449 20.619408,1.35688 28.839583,0 1.379669,-0.73428 2.187816,-1.55155 2.910417,-2.38125 L 65.881249,90.222916 c 1.245832,-0.21042 2.494407,-0.472791 3.704167,0 l 9.789583,10.318754 2.910417,-0.26459 5.027083,-6.349998 1.322917,-7.9375 -1.322917,-5.291666 -11.90625,-10.583334 c -4.848934,-3.581646 -8.290577,-1.958283 -11.641666,0 l -17.991666,16.933335 7.143749,0.264582 v 2.116667 l 9.260417,10.318749 c -1.965765,1.678655 -5.956422,1.548615 -10.054167,1.322915 -3.19075,-2.663738 -6.384321,-5.325569 -9.260417,-8.202081 z"
					id="path93388"
				/><path
					style="opacity:1;fill:#9ca4a7;fill-opacity:1;fill-rule:evenodd;stroke-width:1.2;stroke-linecap:round;stroke-linejoin:round;stroke-miterlimit:3;paint-order:stroke fill markers"
					d="m 36.5125,95.249999 14.552083,14.552081 c 0.656472,-1.50052 0.629172,-3.12492 0.529166,-4.7625 -3.725542,-3.93024 -8.543444,-8.484944 -12.699999,-12.17083 -2.38125,0.264583 -1.697993,1.547636 -2.38125,2.381249 z"
					id="path93390"
				/><path
					style="opacity:1;fill:#f4829b;fill-opacity:1;fill-rule:evenodd;stroke-width:1.2;stroke-linecap:round;stroke-linejoin:round;stroke-miterlimit:3;paint-order:stroke fill markers"
					d="m 21.43125,17.4625 c -3.205569,0.795573 -4.344669,3.074592 -4.497917,5.820833 l 4.233333,-0.264583 z"
					id="path93392"
				/><path
					style="opacity:1;fill:#000000;fill-opacity:1;fill-rule:evenodd;stroke-width:1.2;stroke-linecap:round;stroke-linejoin:round;stroke-miterlimit:3;paint-order:stroke fill markers"
					d="M 14.2875,31.485416 13.758333,28.575 l 0.264583,2.116666 z"
					id="path93394"
				/><path
					style="opacity:1;fill:#8e9599;fill-opacity:1;fill-rule:evenodd;stroke-width:1.2;stroke-linecap:round;stroke-linejoin:round;stroke-miterlimit:3;paint-order:stroke fill markers"
					d="m 26.458333,100.54167 2.645833,1.32291 2.645834,7.9375 -6.614584,6.61459 -7.9375,-2.64584 L 15.875,111.125 Z"
					id="path93396"
				/><path
					style="opacity:1;fill:#d8dfe3;fill-opacity:1;fill-rule:evenodd;stroke-width:1.2;stroke-linecap:round;stroke-linejoin:round;stroke-miterlimit:3;paint-order:stroke fill markers"
					d="m 10.054167,101.33542 6.614583,-6.350005 9.789583,5.556255 2.645833,7.9375 -5.291666,5.29166 -7.9375,-2.64583 z"
					id="path93398"
				/><path
					style="opacity:1;fill:#d8dfe3;fill-opacity:1;fill-rule:evenodd;stroke-width:1.2;stroke-linecap:round;stroke-linejoin:round;stroke-miterlimit:3;paint-order:stroke fill markers"
					d="m 19.84375,121.70833 h 9.260416 l -2.645833,-2.64583 z"
					id="path93400"
				/><path
					style="opacity:1;fill:#d8dfe3;fill-opacity:1;fill-rule:evenodd;stroke-width:1.2;stroke-linecap:round;stroke-linejoin:round;stroke-miterlimit:3;paint-order:stroke fill markers"
					d="m 37.570833,105.03958 0.264583,8.73125 -3.175,-3.43958 z"
					id="path93402"
				/><path
					style="opacity:1;fill:#f688a0;fill-opacity:1;fill-rule:evenodd;stroke-width:1.2;stroke-linecap:round;stroke-linejoin:round;stroke-miterlimit:3;paint-order:stroke fill markers"
					d="m 13.49375,121.44375 6.085416,-4.23333 -2.38125,-1.32292 c -2.407977,1.60038 -2.85399,3.62167 -3.704166,5.55625 z"
					id="path93404"
				/><path
					style="opacity:1;fill:#f688a0;fill-opacity:1;fill-rule:evenodd;stroke-width:1.2;stroke-linecap:round;stroke-linejoin:round;stroke-miterlimit:3;paint-order:stroke fill markers"
					d="m 5.8208333,115.09375 8.2020837,-2.64583 -1.058334,-3.43959 c -3.6119511,1.79183 -6.5377429,3.78806 -7.1437497,6.08542 z"
					id="path93406"
				/><path
					style="opacity:1;fill:#f688a0;fill-opacity:1;fill-rule:evenodd;stroke-width:1.2;stroke-linecap:round;stroke-linejoin:round;stroke-miterlimit:3;paint-order:stroke fill markers"
					d="m 10.054167,105.03958 -1.5875004,-2.91041 c -3.3150338,0.97508 -5.6548838,2.86604 -7.14375,5.55625 z"
					id="path93408"
				/><path
					style="opacity:1;fill:#a00b2b;fill-opacity:1;fill-rule:evenodd;stroke-width:1.2;stroke-linecap:round;stroke-linejoin:round;stroke-miterlimit:3;paint-order:stroke fill markers"
					d="M 4.2333333,93.662499 9.2604166,99.483332 11.90625,96.572917 15.345833,94.191665 9.5249999,89.429166 Z"
					id="path93410"
				/><path
					style="opacity:1;fill:#f688a0;fill-opacity:1;fill-rule:evenodd;stroke-width:1.2;stroke-linecap:round;stroke-linejoin:round;stroke-miterlimit:3;paint-order:stroke fill markers"
					d="M 4.2333333,93.662499 11.90625,96.572917 9.5249999,89.429166 2.9104167,87.047917 Z"
					id="path93412"
				/><path
					style="opacity:1;fill:#f688a0;fill-opacity:1;fill-rule:evenodd;stroke-width:1.2;stroke-linecap:round;stroke-linejoin:round;stroke-miterlimit:3;paint-order:stroke fill markers"
					d="m 20.372916,94.191665 2.38125,-7.937499 c -3.020375,1.562048 -4.575739,4.079251 -5.291666,7.143749 z"
					id="path93414"
				/><path
					style="opacity:1;fill:#f688a0;fill-opacity:1;fill-rule:evenodd;stroke-width:1.2;stroke-linecap:round;stroke-linejoin:round;stroke-miterlimit:3;paint-order:stroke fill markers"
					d="m 29.897916,90.487499 -1.5875,7.408333 L 25.4,97.366665 c 0.279837,-2.583605 1.683094,-4.899544 4.497916,-6.879166 z"
					id="path93416"
				/><path
					style="opacity:1;fill:#f688a0;fill-opacity:1;fill-rule:evenodd;stroke-width:1.2;stroke-linecap:round;stroke-linejoin:round;stroke-miterlimit:3;paint-order:stroke fill markers"
					d="m 32.014583,103.98125 c -0.36845,-3.61233 0.348269,-6.092866 3.704167,-5.820835 -0.841343,1.797228 -1.948615,3.691155 -3.704167,5.820835 z"
					id="path93418"
				/><path
					style="opacity:1;fill:#f78aa2;fill-opacity:1;fill-rule:evenodd;stroke-width:1.2;stroke-linecap:round;stroke-linejoin:round;stroke-miterlimit:3;paint-order:stroke fill markers"
					d="m 23.547916,111.65417 3.96875,-3.96875 -5.820833,-1.55969 z"
					id="path93420"
				/><path
					style="opacity:1;fill:#f78aa2;fill-opacity:1;fill-rule:evenodd;stroke-width:1.2;stroke-linecap:round;stroke-linejoin:round;stroke-miterlimit:3;paint-order:stroke fill markers"
					d="m 17.727083,106.09792 4.233333,-4.23334 -6.614583,-1.77237 z"
					id="path93422"
				/><path
					style="opacity:1;fill:#a00b2b;fill-opacity:1;fill-rule:evenodd;stroke-width:1.2;stroke-linecap:round;stroke-linejoin:round;stroke-miterlimit:3;paint-order:stroke fill markers"
					d="m 19.579166,117.21042 h 3.704167 c 0.600683,1.26972 -5.429409,2.78208 -9.789583,4.23333 1.768733,-1.66243 3.745897,-3.12319 6.085416,-4.23333 z"
					id="path93424"
				/><path
					style="opacity:1;fill:#a00b2b;fill-opacity:1;fill-rule:evenodd;stroke-width:1.2;stroke-linecap:round;stroke-linejoin:round;stroke-miterlimit:3;paint-order:stroke fill markers"
					d="m 5.8208333,115.09375 8.2020837,-2.64583 1.058333,2.64583 z"
					id="path93426"
				/><path
					style="opacity:1;fill:#a00b2b;fill-opacity:1;fill-rule:evenodd;stroke-width:1.2;stroke-linecap:round;stroke-linejoin:round;stroke-miterlimit:3;paint-order:stroke fill markers"
					d="m 1.3229166,107.68542 8.7312504,-2.64584 1.527572,2.64584 z"
					id="path93428"
				/><path
					style="opacity:1;fill:#a00b2b;fill-opacity:1;fill-rule:evenodd;stroke-width:1.2;stroke-linecap:round;stroke-linejoin:round;stroke-miterlimit:3;paint-order:stroke fill markers"
					d="m 20.372916,94.191665 3.207903,1.852084 -0.826653,-9.525 z"
					id="path93430"
				/><path
					style="opacity:1;fill:#a00b2b;fill-opacity:1;fill-rule:evenodd;stroke-width:1.2;stroke-linecap:round;stroke-linejoin:round;stroke-miterlimit:3;paint-order:stroke fill markers"
					d="m 28.310416,97.895832 2.38125,1.852083 -0.79375,-8.995833 c -0.811755,2.398381 -1.409885,4.783811 -1.5875,7.14375 z"
					id="path93432"
				/><path
					style="opacity:1;fill:#a00b2b;fill-opacity:1;fill-rule:evenodd;stroke-width:1.2;stroke-linecap:round;stroke-linejoin:round;stroke-miterlimit:3;paint-order:stroke fill markers"
					d="m 35.71875,98.160415 c -0.350819,3.331415 -1.015684,6.602435 -2.116667,9.789585 -0.99141,-1.26463 -1.398106,-2.60299 -1.5875,-3.96875 z"
					id="path93434"
				/><path
					style="opacity:1;fill:#686b6a;fill-opacity:1;fill-rule:evenodd;stroke-width:1.2;stroke-linecap:round;stroke-linejoin:round;stroke-miterlimit:3;paint-order:stroke fill markers"
					d="m 9.2604166,26.458333 c -1.7961893,2.182593 -5.3168174,3.176343 -5.2916666,6.614583 0.7796226,2.605047 1.5982432,5.225638 2.6458332,7.9375 0.9869799,-1.276258 1.8392595,-2.612352 2.6458334,-3.96875 z"
					id="path93436"
				/><path
					style="opacity:1;fill:#4c4d4f;fill-opacity:1;fill-rule:evenodd;stroke-width:1.2;stroke-linecap:round;stroke-linejoin:round;stroke-miterlimit:3;paint-order:stroke fill markers"
					d="M 13.229167,31.75 9.2604166,37.041666 6.6145832,34.395833 v -3.96875 l 2.6458334,-3.96875 v 3.96875 z"
					id="path93438"
				/><path
					style="opacity:1;fill:#0d0d16;fill-opacity:1;fill-rule:evenodd;stroke-width:1.2;stroke-linecap:round;stroke-linejoin:round;stroke-miterlimit:3;paint-order:stroke fill markers"
					d="M 3.7041666,48.683333 11.90625,45.772916 9.5249999,41.804166 Z"
					id="path93440"
				/><path
					style="opacity:1;fill:#989fa3;fill-opacity:1;fill-rule:evenodd;stroke-width:1.2;stroke-linecap:round;stroke-linejoin:round;stroke-miterlimit:3;paint-order:stroke fill markers"
					d="m 11.90625,45.772916 h 22.489583 l 6.614583,-6.614583 v -4.7625 h -6.614583 v 6.614583 H 9.5249999 v 1.058333 z"
					id="path93442"
				/><path
					style="opacity:1;fill:#720708;fill-opacity:1;fill-rule:evenodd;stroke-width:1.2;stroke-linecap:round;stroke-linejoin:round;stroke-miterlimit:3;paint-order:stroke fill markers"
					d="M 13.758333,28.575 23.8125,25.664583 21.695833,30.1625 14.022917,31.485417 Z"
					id="path93444"
				/><ellipse
					style="opacity:1;fill:#d31239;fill-opacity:0.996078;fill-rule:evenodd;stroke-width:1.2;stroke-linecap:round;stroke-linejoin:round;stroke-miterlimit:3;paint-order:stroke fill markers"
					id="ellipse93446"
					cx="17.197916"
					cy="28.707291"
					rx="1.8520833"
					ry="1.7197917"
				/><path
					style="opacity:1;fill:#000000;fill-opacity:1;fill-rule:evenodd;stroke-width:1.2;stroke-linecap:round;stroke-linejoin:round;stroke-miterlimit:3;paint-order:stroke fill markers"
					d="M 23.8125,25.664583 13.758333,28.575 V 26.9875 L 23.8125,20.108333 22.489583,23.8125 l 8.995833,-5.027084 -2.38125,8.995834 -7.408333,2.38125 z"
					id="path93448"
				/><path
					style="opacity:1;fill:#dde4e6;fill-opacity:1;fill-rule:evenodd;stroke-width:1.2;stroke-linecap:round;stroke-linejoin:round;stroke-miterlimit:3;paint-order:stroke fill markers"
					d="M 8.2020832,38.629166 H 32.808333 V 31.75 l -9.260417,-2.910417 c -2.867279,0.982799 -5.897841,1.77169 -9.525,1.852083 L 13.229167,31.75 9.5249999,34.395833 Z"
					id="path93450"
				/><path
					style="opacity:1;fill:#6c7475;fill-opacity:1;fill-rule:evenodd;stroke-width:1.2;stroke-linecap:round;stroke-linejoin:round;stroke-miterlimit:3;paint-order:stroke fill markers"
					d="m 12.435417,38.629166 3.174999,-3.439583 v 3.439583 z"
					id="path93452"
				/><path
					style="opacity:1;fill:#6c7475;fill-opacity:1;fill-rule:evenodd;stroke-width:1.2;stroke-linecap:round;stroke-linejoin:round;stroke-miterlimit:3;paint-order:stroke fill markers"
					d="m 26.458334,38.629167 3.174999,-3.439583 v 3.439583 z"
					id="path93454"
				/><path
					style="opacity:1;fill:#d6dde1;fill-opacity:1;fill-rule:evenodd;stroke-width:1.2;stroke-linecap:round;stroke-linejoin:round;stroke-miterlimit:3;paint-order:stroke fill markers"
					d="m 25.929167,40.084376 3.174999,-3.439583 v 3.439583 z"
					id="path93456"
				/><path
					style="opacity:1;fill:#6c7475;fill-opacity:1;fill-rule:evenodd;stroke-width:1.2;stroke-linecap:round;stroke-linejoin:round;stroke-miterlimit:3;paint-order:stroke fill markers"
					d="m 19.579167,38.629166 3.174999,-3.439583 v 3.439583 z"
					id="path93458"
				/><path
					style="opacity:1;fill:#d6dde1;fill-opacity:1;fill-rule:evenodd;stroke-width:1.2;stroke-linecap:round;stroke-linejoin:round;stroke-miterlimit:3;paint-order:stroke fill markers"
					d="m 19.05,40.084375 3.174999,-3.439583 v 3.439583 z"
					id="path93460"
				/><path
					style="opacity:1;fill:#d6dde1;fill-opacity:1;fill-rule:evenodd;stroke-width:1.2;stroke-linecap:round;stroke-linejoin:round;stroke-miterlimit:3;paint-order:stroke fill markers"
					d="m 11.90625,40.084375 3.174999,-3.439583 v 3.439583 z"
					id="path93462"
				/><path
					style="opacity:1;fill:#f4829b;fill-opacity:1;fill-rule:evenodd;stroke-width:1.2;stroke-linecap:round;stroke-linejoin:round;stroke-miterlimit:3;paint-order:stroke fill markers"
					d="m 34.925,10.847917 c -3.000494,1.472003 -4.072169,2.998183 -6.085417,4.497916 v 3.439584 l 4.7625,-1.587501 1.852083,-6.349999 z"
					id="path93464"
				/><path
					style="opacity:1;fill:#19192c;fill-opacity:1;fill-rule:evenodd;stroke-width:1.2;stroke-linecap:round;stroke-linejoin:round;stroke-miterlimit:3;paint-order:stroke fill markers"
					d="m 47.889583,3.96875 c -2.437035,4.2239236 -7.408712,6.977878 -6.35,13.229166 l -6.085417,0.264584 4.7625,-8.4666668 z"
					id="path93466"
				/><path
					style="opacity:1;fill:#dde4e6;fill-opacity:1;fill-rule:evenodd;stroke-width:1.2;stroke-linecap:round;stroke-linejoin:round;stroke-miterlimit:3;paint-order:stroke fill markers"
					d="m 32.808333,31.75 h 8.202083 0.529167 V 17.197916 H 38.1 V 15.345833 C 40.872152,11.279723 43.20024,6.966054 47.889583,3.96875 43.603466,5.4812769 39.332894,6.6511649 34.925,10.847917 c -0.538813,1.728734 -1.55042,3.661107 -3.704167,6.085416 l 0.264583,1.852083 -7.9375,10.054167 2.910417,4.233333 z"
					id="path93468"
				/><path
					style="opacity:1;fill:#191a2c;fill-opacity:1;fill-rule:evenodd;stroke-width:1.2;stroke-linecap:round;stroke-linejoin:round;stroke-miterlimit:3;paint-order:stroke fill markers"
					d="m 34.925,30.427083 h 4.7625 V 25.4 Z"
					id="path93470"
				/><path
					style="opacity:1;fill:#191a2c;fill-opacity:1;fill-rule:evenodd;stroke-width:1.2;stroke-linecap:round;stroke-linejoin:round;stroke-miterlimit:3;paint-order:stroke fill markers"
					d="m 34.925,24.077083 h 4.7625 V 19.05 Z"
					id="path93472"
				/><path
					style="opacity:1;fill:#000000;fill-opacity:1;fill-rule:evenodd;stroke-width:1.2;stroke-linecap:round;stroke-linejoin:round;stroke-miterlimit:3;paint-order:stroke fill markers"
					d="M 14.022916,30.691666 13.758333,28.575 V 26.9875 L 13.229167,31.75 Z"
					id="path93474"
				/><path
					style="opacity:1;fill:#19192c;fill-opacity:1;fill-rule:evenodd;stroke-width:1.2;stroke-linecap:round;stroke-linejoin:round;stroke-miterlimit:3;paint-order:stroke fill markers"
					d="m 29.104166,10.847917 c -1.613691,2.578442 -2.522708,6.286338 -2.645833,10.31875 L 21.960417,19.84375 Z"
					id="path93476"
				/><path
					style="opacity:1;fill:#19192c;fill-opacity:1;fill-rule:evenodd;stroke-width:1.2;stroke-linecap:round;stroke-linejoin:round;stroke-miterlimit:3;paint-order:stroke fill markers"
					d="m 17.727083,17.4625 c -2.349385,5.068264 -1.766943,5.518061 -2.116666,6.879167 l -2.60714,-0.647191 z"
					id="path93478"
				/><path
					style="opacity:1;fill:#dde4e6;fill-opacity:1;fill-rule:evenodd;stroke-width:1.2;stroke-linecap:round;stroke-linejoin:round;stroke-miterlimit:3;paint-order:stroke fill markers"
					d="m 31.220833,16.933333 -6.085417,3.175 -0.529166,-1.852083 c 1.416821,-3.364774 2.811004,-5.038214 4.497916,-7.408333 -2.771677,1.902277 -5.609266,3.599881 -7.9375,6.879166 l -1.058333,3.96875 c -1.856042,0.656576 -3.765541,1.842682 -5.55625,1.852083 0.632576,-2.500453 2.076092,-4.101923 3.175,-6.085416 -2.286818,0.590843 -5.23498,4.046881 -8.4666664,8.73125 L 8.7312499,30.691666 12.435417,32.808333 13.229167,31.75 13.758333,26.9875 23.8125,20.108333 22.489583,23.8125 31.485416,18.785416 Z"
					id="path93480"
				/><path
					style="opacity:1;fill:#f4829b;fill-opacity:1;fill-rule:evenodd;stroke-width:1.2;stroke-linecap:round;stroke-linejoin:round;stroke-miterlimit:3;paint-order:stroke fill markers"
					d="m 44.979166,38.364583 h 2.645833 V 23.8125 h -2.645833 z"
					id="path93482"
				/><path
					style="opacity:1;fill:#f4829b;fill-opacity:1;fill-rule:evenodd;stroke-width:1.2;stroke-linecap:round;stroke-linejoin:round;stroke-miterlimit:3;paint-order:stroke fill markers"
					d="m 54.239583,37.041666 3.96875,-2.645833 V 23.8125 h -3.96875 z"
					id="path93484"
				/><path
					style="opacity:1;fill:#f4829b;fill-opacity:1;fill-rule:evenodd;stroke-width:1.2;stroke-linecap:round;stroke-linejoin:round;stroke-miterlimit:3;paint-order:stroke fill markers"
					d="m 18.785416,53.445833 15.08125,-3.704167 v -2.38125 l -9.789583,1.058333 z"
					id="path93486"
				/><path
					style="opacity:1;fill:#f4829b;fill-opacity:1;fill-rule:evenodd;stroke-width:1.2;stroke-linecap:round;stroke-linejoin:round;stroke-miterlimit:3;paint-order:stroke fill markers"
					d="m 36.247916,61.912499 3.704167,-6.614583 h -3.704167 z"
					id="path93488"
				/><path
					style="opacity:1;fill:#f4829b;fill-opacity:1;fill-rule:evenodd;stroke-width:1.2;stroke-linecap:round;stroke-linejoin:round;stroke-miterlimit:3;paint-order:stroke fill markers"
					d="m 49.477083,53.710417 -5.027084,-4.762501 v 1.852083 z"
					id="path93490"
				/><path
					style="opacity:1;fill:#f4829b;fill-opacity:1;fill-rule:evenodd;stroke-width:1.2;stroke-linecap:round;stroke-linejoin:round;stroke-miterlimit:3;paint-order:stroke fill markers"
					d="m 42.068749,117.21042 h 2.645834 v 7.67291 h -2.645834 z"
					id="path93492"
				/><path
					style="opacity:1;fill:#f4829b;fill-opacity:1;fill-rule:evenodd;stroke-width:1.2;stroke-linecap:round;stroke-linejoin:round;stroke-miterlimit:3;paint-order:stroke fill markers"
					d="m 52.387499,124.88333 h 3.175 v -7.67291 h -3.704166 v 7.67291 z"
					id="path93494"
				/><path
					style="opacity:1;fill:#f4829b;fill-opacity:1;fill-rule:evenodd;stroke-width:1.2;stroke-linecap:round;stroke-linejoin:round;stroke-miterlimit:3;paint-order:stroke fill markers"
					d="m 90.4875,117.475 v -2.38125 h 13.22917 v 2.38125 z"
					id="path93496"
				/><path
					style="opacity:1;fill:#a00b2b;fill-opacity:1;fill-rule:evenodd;stroke-width:1.2;stroke-linecap:round;stroke-linejoin:round;stroke-miterlimit:3;paint-order:stroke fill markers"
					d="m 18.785416,53.445833 h 15.08125 v -3.704167 z"
					id="path93498"
				/><path
					style="opacity:1;fill:#a00b2b;fill-opacity:1;fill-rule:evenodd;stroke-width:1.2;stroke-linecap:round;stroke-linejoin:round;stroke-miterlimit:3;paint-order:stroke fill markers"
					d="m 39.952083,55.297916 h 3.175 l -6.879167,6.614583 z"
					id="path93500"
				/><path
					style="opacity:1;fill:#a00b2b;fill-opacity:1;fill-rule:evenodd;stroke-width:1.2;stroke-linecap:round;stroke-linejoin:round;stroke-miterlimit:3;paint-order:stroke fill markers"
					d="m 44.449999,50.799999 v 2.910417 h 5.027084 z"
					id="path93502"
				/><path
					style="opacity:1;fill:#f4829b;fill-opacity:1;fill-rule:evenodd;stroke-width:1.2;stroke-linecap:round;stroke-linejoin:round;stroke-miterlimit:3;paint-order:stroke fill markers"
					d="m 49.477083,47.228126 -5.027084,-4.762501 v 1.852083 z"
					id="path93504"
				/><path
					style="opacity:1;fill:#a00b2b;fill-opacity:1;fill-rule:evenodd;stroke-width:1.2;stroke-linecap:round;stroke-linejoin:round;stroke-miterlimit:3;paint-order:stroke fill markers"
					d="m 44.449999,44.317708 v 2.910417 h 5.027084 z"
					id="path93506"
				/><path
					style="opacity:1;fill:#d8dfe3;fill-opacity:1;fill-rule:evenodd;stroke-width:1.2;stroke-linecap:round;stroke-linejoin:round;stroke-miterlimit:3;paint-order:stroke fill markers"
					d="m 30.691666,120.12083 -2.645833,-2.64583 2.910417,-2.91042 2.716818,2.71682 z"
					id="path93508"
				/><path
					style="opacity:1;fill:#929296;fill-opacity:1;fill-rule:evenodd;stroke-width:1.2;stroke-linecap:round;stroke-linejoin:round;stroke-miterlimit:3;paint-order:stroke fill markers"
					d="m 33.602083,117.475 2.645833,-2.64583 -2.645833,-2.64584 -2.645833,2.38125 z"
					id="path93510"
				/><path
					style="opacity:1;fill:#f4829b;fill-opacity:1;fill-rule:evenodd;stroke-width:1.2;stroke-linecap:round;stroke-linejoin:round;stroke-miterlimit:3;paint-order:stroke fill markers"
					d="m 32.54375,121.97292 5.55625,-5.29167 -1.852084,-1.85208 -5.55625,5.29166 z"
					id="path93512"
				/><path
					style="opacity:1;fill:#d8dfe3;fill-opacity:1;fill-rule:evenodd;stroke-width:1.2;stroke-linecap:round;stroke-linejoin:round;stroke-miterlimit:3;paint-order:stroke fill markers"
					d="M 42.068749,124.88333 H 34.13125 l 3.439583,-3.43958 h 4.497916 z"
					id="path93514"
				/><path
					style="opacity:1;fill:#929296;fill-opacity:1;fill-rule:evenodd;stroke-width:1.2;stroke-linecap:round;stroke-linejoin:round;stroke-miterlimit:3;paint-order:stroke fill markers"
					d="m 37.570833,121.44375 4.497916,-4.23333 v 4.23333 z"
					id="path93516"
				/><path
					style="opacity:1;fill:#929296;fill-opacity:1;fill-rule:evenodd;stroke-width:1.2;stroke-linecap:round;stroke-linejoin:round;stroke-miterlimit:3;paint-order:stroke fill markers"
					d="m 51.858333,117.21042 h -2.645834 v 4.23333 h 2.645834 z"
					id="path93518"
				/><path
					style="opacity:1;fill:#d8dfe3;fill-opacity:1;fill-rule:evenodd;stroke-width:1.2;stroke-linecap:round;stroke-linejoin:round;stroke-miterlimit:3;paint-order:stroke fill markers"
					d="m 49.212499,121.44375 h 2.645834 v 3.43958 h -2.645834 z"
					id="path93520"
				/><g id="g93528" style="opacity:1"
					><path
						style="opacity:1;fill:#f4829b;fill-opacity:1;fill-rule:evenodd;stroke-width:1.2;stroke-linecap:round;stroke-linejoin:round;stroke-miterlimit:3;paint-order:stroke fill markers"
						d="m 62.970833,124.88333 h 3.175 v -7.67291 h -3.704166 v 7.67291 z"
						id="path93522"
					/><path
						style="opacity:1;fill:#929296;fill-opacity:1;fill-rule:evenodd;stroke-width:1.2;stroke-linecap:round;stroke-linejoin:round;stroke-miterlimit:3;paint-order:stroke fill markers"
						d="m 62.441667,117.21042 h -2.645834 v 4.23333 h 2.645834 z"
						id="path93524"
					/><path
						style="opacity:1;fill:#d8dfe3;fill-opacity:1;fill-rule:evenodd;stroke-width:1.2;stroke-linecap:round;stroke-linejoin:round;stroke-miterlimit:3;paint-order:stroke fill markers"
						d="m 59.795833,121.44375 h 2.645834 v 3.43958 h -2.645834 z"
						id="path93526"
					/></g
				><path
					style="opacity:1;fill:#f4829b;fill-opacity:1;fill-rule:evenodd;stroke-width:1.3916;stroke-linecap:round;stroke-linejoin:round;stroke-miterlimit:3;paint-order:stroke fill markers"
					d="m 82.814583,125.67708 h 3.175 v -10.31875 h -3.704166 v 10.31875 z"
					id="path93530"
				/><path
					style="opacity:1;fill:#929296;fill-opacity:1;fill-rule:evenodd;stroke-width:1.3916;stroke-linecap:round;stroke-linejoin:round;stroke-miterlimit:3;paint-order:stroke fill markers"
					d="m 82.285417,115.35833 h -2.645834 v 5.6931 h 2.645834 z"
					id="path93532"
				/><path
					style="opacity:1;fill:#d8dfe3;fill-opacity:1;fill-rule:evenodd;stroke-width:1.3916;stroke-linecap:round;stroke-linejoin:round;stroke-miterlimit:3;paint-order:stroke fill markers"
					d="m 79.639583,121.05143 h 2.645834 v 4.62565 h -2.645834 z"
					id="path93534"
				/><g
					id="g93542"
					transform="matrix(1,0,0,1.2068976,9.5249997,-25.044308)"
					style="opacity:1"
					><path
						style="opacity:1;fill:#f4829b;fill-opacity:1;fill-rule:evenodd;stroke-width:1.2;stroke-linecap:round;stroke-linejoin:round;stroke-miterlimit:3;paint-order:stroke fill markers"
						d="m 62.970833,124.88333 h 3.175 v -7.67291 h -3.704166 v 7.67291 z"
						id="path93536"
					/><path
						style="opacity:1;fill:#929296;fill-opacity:1;fill-rule:evenodd;stroke-width:1.2;stroke-linecap:round;stroke-linejoin:round;stroke-miterlimit:3;paint-order:stroke fill markers"
						d="m 62.441667,117.21042 h -2.645834 v 4.23333 h 2.645834 z"
						id="path93538"
					/><path
						style="opacity:1;fill:#d8dfe3;fill-opacity:1;fill-rule:evenodd;stroke-width:1.2;stroke-linecap:round;stroke-linejoin:round;stroke-miterlimit:3;paint-order:stroke fill markers"
						d="m 59.795833,121.44375 h 2.645834 v 3.43958 h -2.645834 z"
						id="path93540"
					/></g
				><path
					style="opacity:1;fill:#929296;fill-opacity:1;fill-rule:evenodd;stroke-width:1.2;stroke-linecap:round;stroke-linejoin:round;stroke-miterlimit:3;paint-order:stroke fill markers"
					d="m 90.4875,117.475 v 3.43958 h 6.614582 V 117.475 Z"
					id="path93544"
				/><path
					style="opacity:1;fill:#d8dfe3;fill-opacity:1;fill-rule:evenodd;stroke-width:1.2;stroke-linecap:round;stroke-linejoin:round;stroke-miterlimit:3;paint-order:stroke fill markers"
					d="m 90.4875,120.91458 h 6.614582 V 117.475 h 6.614588 c -0.11035,3.1041 -1.6766,5.61792 -5.027088,7.40833 H 90.4875 Z"
					id="path93546"
				/><g id="g93554" style="opacity:1"
					><path
						style="opacity:1;fill:#f4829b;fill-opacity:1;fill-rule:evenodd;stroke-width:1.2;stroke-linecap:round;stroke-linejoin:round;stroke-miterlimit:3;paint-order:stroke fill markers"
						d="m 103.71667,106.3625 v -2.11667 H 90.222916 v 2.64584 h 13.493754 z"
						id="path93548"
					/><path
						style="opacity:1;fill:#d8dfe3;fill-opacity:1;fill-rule:evenodd;stroke-width:1.2;stroke-linecap:round;stroke-linejoin:round;stroke-miterlimit:3;paint-order:stroke fill markers"
						d="m 96.837499,106.89167 v 3.96875 h 6.879171 v -3.96875 z"
						id="path93550"
					/><path
						style="opacity:1;fill:#929296;fill-opacity:1;fill-rule:evenodd;stroke-width:1.2;stroke-linecap:round;stroke-linejoin:round;stroke-miterlimit:3;paint-order:stroke fill markers"
						d="m 96.837499,106.89167 h -6.614583 v 3.96875 h 6.614583 z"
						id="path93552"
					/></g
				><g id="g93562" transform="translate(0,-10.318753)" style="opacity:1"
					><path
						style="opacity:1;fill:#f4829b;fill-opacity:1;fill-rule:evenodd;stroke-width:1.2;stroke-linecap:round;stroke-linejoin:round;stroke-miterlimit:3;paint-order:stroke fill markers"
						d="m 103.71667,106.3625 v -2.11667 H 90.222916 v 2.64584 h 13.493754 z"
						id="path93556"
					/><path
						style="opacity:1;fill:#d8dfe3;fill-opacity:1;fill-rule:evenodd;stroke-width:1.2;stroke-linecap:round;stroke-linejoin:round;stroke-miterlimit:3;paint-order:stroke fill markers"
						d="m 96.837499,106.89167 v 3.96875 h 6.879171 v -3.96875 z"
						id="path93558"
					/><path
						style="opacity:1;fill:#929296;fill-opacity:1;fill-rule:evenodd;stroke-width:1.2;stroke-linecap:round;stroke-linejoin:round;stroke-miterlimit:3;paint-order:stroke fill markers"
						d="m 96.837499,106.89167 h -6.614583 v 3.96875 h 6.614583 z"
						id="path93560"
					/></g
				><path
					style="opacity:1;fill:#dde4e6;fill-opacity:1;fill-rule:evenodd;stroke-width:1.2;stroke-linecap:round;stroke-linejoin:round;stroke-miterlimit:3;paint-order:stroke fill markers"
					d="m 35.71875,52.916666 h 6.614583 V 39.6875 l -6.614583,6.614583 z"
					id="path93564"
				/><path
					style="opacity:1;fill:#dde4e6;fill-opacity:1;fill-rule:evenodd;stroke-width:1.2;stroke-linecap:round;stroke-linejoin:round;stroke-miterlimit:3;paint-order:stroke fill markers"
					d="m 47.624999,23.8125 h 3.96875 v 6.614583 h -3.96875 z"
					id="path93566"
				/><path
					style="opacity:1;fill:#989fa3;fill-opacity:1;fill-rule:evenodd;stroke-width:1.2;stroke-linecap:round;stroke-linejoin:round;stroke-miterlimit:3;paint-order:stroke fill markers"
					d="m 47.624999,30.427083 v 7.9375 h 3.96875 v -7.9375 z"
					id="path93568"
				/><path
					style="opacity:1;fill:#989fa3;fill-opacity:1;fill-rule:evenodd;stroke-width:1.2;stroke-linecap:round;stroke-linejoin:round;stroke-miterlimit:3;paint-order:stroke fill markers"
					d="M 58.208333,30.427083 60.854166,31.75 58.208333,34.395833 Z"
					id="path93570"
				/><path
					style="opacity:1;fill:#dde4e6;fill-opacity:1;fill-rule:evenodd;stroke-width:1.2;stroke-linecap:round;stroke-linejoin:round;stroke-miterlimit:3;paint-order:stroke fill markers"
					d="m 60.854166,31.75 3.96875,-5.291667 -6.614583,-2.645833 v 6.614583 z"
					id="path93572"
				/><path
					style="opacity:1;fill:#dde4e6;fill-opacity:1;fill-rule:evenodd;stroke-width:1.2;stroke-linecap:round;stroke-linejoin:round;stroke-miterlimit:3;paint-order:stroke fill markers"
					d="m 44.979166,21.166666 h 6.614583 l 3.818933,-6.614583 z"
					id="path93574"
				/><path
					style="opacity:1;fill:#dde4e6;fill-opacity:1;fill-rule:evenodd;stroke-width:1.2;stroke-linecap:round;stroke-linejoin:round;stroke-miterlimit:3;paint-order:stroke fill markers"
					d="m 72.760416,18.520833 -6.614584,6.614583 -5.291666,-3.055145 z"
					id="path93576"
				/><path
					style="opacity:1;fill:#dde4e6;fill-opacity:1;fill-rule:evenodd;stroke-width:1.2;stroke-linecap:round;stroke-linejoin:round;stroke-miterlimit:3;paint-order:stroke fill markers"
					d="m 106.09792,105.30417 v 5.55625 l 6.87916,3.175 -6.87916,-9.525 z"
					id="path93578"
				/><path
					style="opacity:1;fill:#dde4e6;fill-opacity:1;fill-rule:evenodd;stroke-width:1.2;stroke-linecap:round;stroke-linejoin:round;stroke-miterlimit:3;paint-order:stroke fill markers"
					d="m 106.09792,95.25 v 5.55625 l 6.87916,3.175 -6.87916,-9.525 z"
					id="path93580"
				/><path
					style="opacity:1;fill:#dde4e6;fill-opacity:1;fill-rule:evenodd;stroke-width:1.2;stroke-linecap:round;stroke-linejoin:round;stroke-miterlimit:3;paint-order:stroke fill markers"
					d="m 61.912499,69.056249 5.027083,-5.027083 -13.229166,-13.229167 -6.35,6.35 8.73125,8.73125 3.96875,-2.291358 -4.7625,-4.7625 -1.322917,0.763786 2.910417,2.910417 -0.529167,0.529167 -4.293261,-4.293262 2.645833,-2.645833 7.203678,7.203678 -2.910416,3.379655 z"
					id="path93582"
				/><path
					style="opacity:1;fill:#dde4e6;fill-opacity:1;fill-rule:evenodd;stroke-width:1.2;stroke-linecap:round;stroke-linejoin:round;stroke-miterlimit:3;paint-order:stroke fill markers"
					d="M 54.239583,47.624999 80.697916,21.166666 78.052082,18.520833 51.593749,44.979166 Z"
					id="path93584"
				/><path
					style="opacity:1;fill:#989fa3;fill-opacity:1;fill-rule:evenodd;stroke-width:1.2;stroke-linecap:round;stroke-linejoin:round;stroke-miterlimit:3;paint-order:stroke fill markers"
					d="m 54.239583,47.624999 2.645833,2.645834 26.458333,-27.78125 -2.645833,-1.322917 z"
					id="path93586"
				/><path
					style="opacity:1;fill:#9ca4a7;fill-opacity:1;fill-rule:evenodd;stroke-width:1.2;stroke-linecap:round;stroke-linejoin:round;stroke-miterlimit:3;paint-order:stroke fill markers"
					d="m 82.020832,103.1875 -2.645833,-2.64583 c 3.872344,-3.583552 6.435267,-6.817345 7.9375,-10.583338 v -9.260416 c 1.490816,1.749959 3.444352,3.26229 3.360661,5.820833 -0.666939,13.060232 -5.628298,11.586059 -8.652328,16.668751 z"
					id="path93588"
				/><path
					style="opacity:1;fill:#a00b2b;fill-opacity:1;fill-rule:evenodd;stroke-width:1.2;stroke-linecap:round;stroke-linejoin:round;stroke-miterlimit:3;paint-order:stroke fill markers"
					d="m 72.495832,110.33125 h 5.291667 v -6.08542 l -6.085417,6.08542 z"
					id="path93590"
				/><path
					style="opacity:1;fill:#a00b2b;fill-opacity:1;fill-rule:evenodd;stroke-width:1.2;stroke-linecap:round;stroke-linejoin:round;stroke-miterlimit:3;paint-order:stroke fill markers"
					d="m 65.484375,110.33125 h 5.291667 v -6.08542 l -6.085417,6.08542 z"
					id="path93592"
				/><path
					style="opacity:1;fill:#a00b2b;fill-opacity:1;fill-rule:evenodd;stroke-width:1.28571;stroke-linecap:round;stroke-linejoin:round;stroke-miterlimit:3;paint-order:stroke fill markers"
					d="m 52.652083,85.063541 3.96875,-3.968749 3.968749,3.968749 z"
					id="path93594"
				/><path
					style="opacity:1;fill:#a00b2b;fill-opacity:1;fill-rule:evenodd;stroke-width:1.28571;stroke-linecap:round;stroke-linejoin:round;stroke-miterlimit:3;paint-order:stroke fill markers"
					d="m 57.943749,79.771875 3.968751,-3.968751 3.96875,3.968751 z"
					id="path93596"
				/><path
					style="opacity:1;fill:#a00b2b;fill-opacity:1;fill-rule:evenodd;stroke-width:1.37143;stroke-linecap:round;stroke-linejoin:round;stroke-miterlimit:3;paint-order:stroke fill markers"
					d="m 62.970833,74.612501 4.233334,-4.233335 4.233333,4.233335 z"
					id="path93598"
				/><path
					style="opacity:1;fill:#19192c;fill-opacity:1;fill-rule:evenodd;stroke-width:1.2;stroke-linecap:round;stroke-linejoin:round;stroke-miterlimit:3;paint-order:stroke fill markers"
					d="m 36.5125,93.662499 c 0.948066,-2.029915 2.383133,-1.959707 3.704166,-2.38125 l 3.439583,0.529167 c 1.31732,-0.640758 1.255523,-1.626369 1.058334,-2.645834 -2.774646,-2.693828 -5.555722,-5.378964 -10.583333,-5.027083 -1.718757,0.668936 -3.37438,1.417784 -4.233334,3.175 7.386416,1.110591 5.545546,4.012796 6.614584,6.35 z"
					id="path93600"
				/><path
					style="opacity:1;fill:#989fa3;fill-opacity:1;fill-rule:evenodd;stroke-width:1.2;stroke-linecap:round;stroke-linejoin:round;stroke-miterlimit:3;paint-order:stroke fill markers"
					d="m 98.954165,83.872916 -0.264583,-29.633333 -10.054166,-26.19375 -2.38125,-6.879167 -1.5875,1.058334 1.058333,2.910416 10.847916,31.75 -1.322916,17.197916 v 7.9375 z"
					id="path93602"
				/><path
					style="opacity:1;fill:#dde4e6;fill-opacity:1;fill-rule:evenodd;stroke-width:1.2;stroke-linecap:round;stroke-linejoin:round;stroke-miterlimit:3;paint-order:stroke fill markers"
					d="m 85.195832,22.225 12.435417,34.660416 -1.852084,25.4 L 92.868749,79.374999 95.779165,56.885416 84.402082,23.01875 84.137499,22.225 Z"
					id="path93604"
				/><path
					style="opacity:1;fill:#f4829b;fill-opacity:1;fill-rule:evenodd;stroke-width:1.2;stroke-linecap:round;stroke-linejoin:round;stroke-miterlimit:3;paint-order:stroke fill markers"
					d="m 98.954165,83.872916 -6.085416,-4.497917 v 2.38125 l 6.085416,3.96875 z"
					id="path93606"
				/><path
					style="opacity:1;fill:#989fa3;fill-opacity:1;fill-rule:evenodd;stroke-width:1.2;stroke-linecap:round;stroke-linejoin:round;stroke-miterlimit:3;paint-order:stroke fill markers"
					d="m 82.549999,67.204166 2.116667,-13.758333 v -30.95625 l -1.5875,-0.529166 v 28.045832 l -5.027084,16.139583 z"
					id="path93608"
				/><path
					style="opacity:1;fill:#dde4e6;fill-opacity:1;fill-rule:evenodd;stroke-width:1.2;stroke-linecap:round;stroke-linejoin:round;stroke-miterlimit:3;paint-order:stroke fill markers"
					d="m 82.55,21.695833 0.529166,0.264584 v 28.310416 l -4.111903,15.345833 -2.767264,-2.116667 5.820833,-15.875 10e-7,-25.796874 z"
					id="path93610"
				/><path
					style="opacity:1;fill:#f4829b;fill-opacity:1;fill-rule:evenodd;stroke-width:1.2;stroke-linecap:round;stroke-linejoin:round;stroke-miterlimit:3;paint-order:stroke fill markers"
					d="m 82.549999,67.204166 -6.35,-3.704167 -0.79375,2.645833 6.614583,2.910417 z"
					id="path93612"
				/><path
					style="opacity:1;fill:#989fa3;fill-opacity:1;fill-rule:evenodd;stroke-width:1.2;stroke-linecap:round;stroke-linejoin:round;stroke-miterlimit:3;paint-order:stroke fill markers"
					d="m 86.518749,21.43125 33.866671,33.866666 -2.64584,51.858334 -2.64583,-3.96875 2.11667,-46.831251 -31.220838,-32.279166 z"
					id="path93614"
				/><path
					style="opacity:1;fill:#f4829b;fill-opacity:1;fill-rule:evenodd;stroke-width:1.2;stroke-linecap:round;stroke-linejoin:round;stroke-miterlimit:3;paint-order:stroke fill markers"
					d="m 124.08958,113.77083 -8.99583,-10.58333 v 3.96875 l 8.99583,9.78958 z"
					id="path93616"
				/><path
					style="opacity:1;fill:#a00b2b;fill-opacity:1;fill-rule:evenodd;stroke-width:1.2;stroke-linecap:round;stroke-linejoin:round;stroke-miterlimit:3;paint-order:stroke fill markers"
					d="m 118.26875,55.297916 7.14375,-6.35 c -0.14851,2.022378 -0.64163,4.122368 -1.70148,6.35 -1.8872,0.688371 -3.70492,0.722571 -5.44227,0 z"
					id="path93618"
				/><path
					style="opacity:1;fill:#a00b2b;fill-opacity:1;fill-rule:evenodd;stroke-width:1.2;stroke-linecap:round;stroke-linejoin:round;stroke-miterlimit:3;paint-order:stroke fill markers"
					d="m 84.402082,23.01875 c 1.877661,-0.936983 3.737339,-2.269323 5.55625,-4.497917 -0.620809,-3.633188 -0.250713,-5.763821 -2.645833,-13.2291664 -2.532323,-1.9574898 -5.23573,-2.9585418 -7.9375,-3.96875 l 2.645833,13.2291664 z"
					id="path93620"
				/><path
					style="opacity:1;fill:#f4829b;fill-opacity:1;fill-rule:evenodd;stroke-width:1.2;stroke-linecap:round;stroke-linejoin:round;stroke-miterlimit:3;paint-order:stroke fill markers"
					d="m 78.052082,18.785416 c 1.622568,2.10739 3.491876,3.867077 6.35,4.233334 V 7.9374999 L 79.374999,1.3229166 Z"
					id="path93622"
				/><path
					style="opacity:1;fill:#f4829b;fill-opacity:1;fill-rule:evenodd;stroke-width:1.2;stroke-linecap:round;stroke-linejoin:round;stroke-miterlimit:3;paint-order:stroke fill markers"
					d="m 106.3625,41.804166 6.87917,-7.14375 -7.14375,1.852084 z"
					id="path93624"
				/><path
					style="opacity:1;fill:#a00b2b;fill-opacity:1;fill-rule:evenodd;stroke-width:1.2;stroke-linecap:round;stroke-linejoin:round;stroke-miterlimit:3;paint-order:stroke fill markers"
					d="m 106.62708,26.722916 c -0.0977,2.914603 -0.66013,5.904327 -1.85208,8.995834 -2.37098,0.25948 -4.66374,0.303518 -6.350001,-1.322917 z"
					id="path93626"
				/><path
					style="opacity:1;fill:#f4829b;fill-opacity:1;fill-rule:evenodd;stroke-width:1.2;stroke-linecap:round;stroke-linejoin:round;stroke-miterlimit:3;paint-order:stroke fill markers"
					d="m 90.222916,27.516666 v -6.614583 l 9.260416,-3.704167 c -2.502216,3.471006 -4.960172,6.944391 -9.260416,10.31875 z"
					id="path93628"
				/><path
					style="opacity:1;fill:#f4829b;fill-opacity:1;fill-rule:evenodd;stroke-width:1.2;stroke-linecap:round;stroke-linejoin:round;stroke-miterlimit:3;paint-order:stroke fill markers"
					d="m 98.424999,34.395833 8.202081,-7.672917 -8.731248,2.645834 z"
					id="path93630"
				/><path
					style="opacity:1;fill:#a00b2b;fill-opacity:1;fill-rule:evenodd;stroke-width:1.2;stroke-linecap:round;stroke-linejoin:round;stroke-miterlimit:3;paint-order:stroke fill markers"
					d="m 90.222916,27.516666 h 7.408333 c 2.017126,-5.375671 1.863762,-7.749224 1.852083,-10.31875 z"
					id="path93632"
				/><path
					style="opacity:1;fill:#f4829b;fill-opacity:1;fill-rule:evenodd;stroke-width:1.2;stroke-linecap:round;stroke-linejoin:round;stroke-miterlimit:3;paint-order:stroke fill markers"
					d="m 113.50625,48.683333 6.61458,-6.35 -6.87916,2.116666 z"
					id="path93634"
				/><path
					style="opacity:1;fill:#a00b2b;fill-opacity:1;fill-rule:evenodd;stroke-width:1.2;stroke-linecap:round;stroke-linejoin:round;stroke-miterlimit:3;paint-order:stroke fill markers"
					d="m 106.3625,41.804166 c 2.08467,0.735661 3.91754,0.67491 5.55625,0 1.06603,-2.37527 1.37528,-4.75778 1.32292,-7.14375 z"
					id="path93636"
				/><path
					style="opacity:1;fill:#a00b2b;fill-opacity:1;fill-rule:evenodd;stroke-width:1.2;stroke-linecap:round;stroke-linejoin:round;stroke-miterlimit:3;paint-order:stroke fill markers"
					d="m 113.50625,48.683333 c 1.50403,0.28717 3.00542,0.413491 4.49792,0 1.45353,-2.929852 1.73178,-4.581962 2.11666,-6.35 z"
					id="path93638"
				/><path
					style="opacity:1;fill:#f4829b;fill-opacity:1;fill-rule:evenodd;stroke-width:1.2;stroke-linecap:round;stroke-linejoin:round;stroke-miterlimit:3;paint-order:stroke fill markers"
					d="m 118.00417,50.799999 7.40833,-1.852083 -7.14375,6.35 z"
					id="path93640"
				/><path
					style="opacity:1;fill:#dde4e6;fill-opacity:1;fill-rule:evenodd;stroke-width:1.2;stroke-linecap:round;stroke-linejoin:round;stroke-miterlimit:3;paint-order:stroke fill markers"
					d="m 124.08958,116.94583 v 5.82084 l -8.99583,-15.61042 z"
					id="path93642"
				/><path
					style="opacity:1;fill:#dde4e6;fill-opacity:1;fill-rule:evenodd;stroke-width:1.2;stroke-linecap:round;stroke-linejoin:round;stroke-miterlimit:3;paint-order:stroke fill markers"
					d="m 92.868749,81.756249 6.085416,3.96875 v 3.439583 z"
					id="path93644"
				/><path
					style="opacity:1;fill:#dde4e6;fill-opacity:1;fill-rule:evenodd;stroke-width:1.2;stroke-linecap:round;stroke-linejoin:round;stroke-miterlimit:3;paint-order:stroke fill markers"
					d="m 82.020832,69.056249 -0.529166,2.38125 -6.085417,-5.291667 z"
					id="path93646"
				/></g
			><g id="g76718"
				><path
					style="opacity:1;fill:#273942;fill-opacity:1;fill-rule:evenodd;stroke-width:1.2;stroke-linecap:round;stroke-linejoin:round;stroke-miterlimit:3;paint-order:stroke fill markers"
					d="M 68.527082,38.1 82.020832,23.283333 82.549999,23.8125 82.285416,42.068749 70.379166,39.6875 Z"
					id="path68113"
				/><path
					style="opacity:1;fill:#273942;fill-opacity:1;fill-rule:evenodd;stroke-width:1.2;stroke-linecap:round;stroke-linejoin:round;stroke-miterlimit:3;paint-order:stroke fill markers"
					d="m 119.0625,57.414583 c 0,0 -30.427084,-32.279167 -30.427084,-32.279167 h -2.645834 l 10.583333,26.458333 22.489585,7.9375 z"
					id="path68399"
				/><path
					style="opacity:1;fill:#62a2b4;fill-opacity:1;fill-rule:evenodd;stroke-width:1.2;stroke-linecap:round;stroke-linejoin:round;stroke-miterlimit:3;paint-order:stroke fill markers"
					d="m 116.68125,71.966666 1.05833,-15.08125 c -7.1433,-6.174563 -14.39417,-11.36528 -22.489581,-9.260417 l 2.645833,17.197917 z"
					id="path68397"
				/><path
					style="opacity:1;fill:#d6fafc;fill-opacity:1;fill-rule:evenodd;stroke-width:1.2;stroke-linecap:round;stroke-linejoin:round;stroke-miterlimit:3;paint-order:stroke fill markers"
					d="m 116.68125,80.697916 1.05833,-10.054167 C 111.13845,65.396536 104.5109,60.779664 97.631249,62.177083 l 0.264583,11.641666 z"
					id="path68395"
				/><path
					style="opacity:1;fill:#fefefe;fill-opacity:1;fill-rule:evenodd;stroke-width:1.2;stroke-linecap:round;stroke-linejoin:round;stroke-miterlimit:3;paint-order:stroke fill markers"
					d="m 116.41667,88.635416 c -4.17031,-5.77702 -9.49134,-10.515349 -18.520837,-11.906249 l -10e-7,-5.291668 c 7.546708,0.831266 14.283568,3.622197 19.843748,9.260417 z"
					id="path68393"
				/><path
					style="opacity:1;fill:#273942;fill-opacity:1;fill-rule:evenodd;stroke-width:1.2;stroke-linecap:round;stroke-linejoin:round;stroke-miterlimit:3;paint-order:stroke fill markers"
					d="m 83.343749,42.333333 8.73125,0.264583 L 85.989582,22.489583 83.608332,22.225 Z"
					id="path68337"
				/><path
					style="opacity:1;fill:#62a2b4;fill-opacity:1;fill-rule:evenodd;stroke-width:1.2;stroke-linecap:round;stroke-linejoin:round;stroke-miterlimit:3;paint-order:stroke fill markers"
					d="M 95.249999,59.002083 97.102082,57.149999 91.810416,42.333333 C 89.012018,41.50902 86.367328,41.154667 84.137499,42.068749 l -0.264583,15.610417 z"
					id="path68227"
				/><path
					style="opacity:1;fill:#d6fafc;fill-opacity:1;fill-rule:evenodd;stroke-width:1.2;stroke-linecap:round;stroke-linejoin:round;stroke-miterlimit:3;paint-order:stroke fill markers"
					d="m 95.249999,65.352083 1.058333,-7.14375 c -3.929454,-2.519741 -7.863887,-5.003075 -12.170833,-4.7625 l -1.058333,8.466666 z"
					id="path68171"
				/><path
					style="opacity:1;fill:#fefefe;fill-opacity:1;fill-rule:evenodd;stroke-width:1.2;stroke-linecap:round;stroke-linejoin:round;stroke-miterlimit:3;paint-order:stroke fill markers"
					d="m 82.549999,64.822916 c 5.616281,0.250014 8.583496,3.61812 11.641666,6.879166 l 1.322917,-7.143749 c -5.078876,-2.426238 -9.830746,-4.391668 -12.7,-3.704167 z"
					id="path68169"
				/><path
					style="opacity:1;fill:#62a2b4;fill-opacity:1;fill-rule:evenodd;stroke-width:1.2;stroke-linecap:round;stroke-linejoin:round;stroke-miterlimit:3;paint-order:stroke fill markers"
					d="m 56.885416,50.270833 10.054166,-12.7 c 7.907925,-0.879917 13.400194,-0.159524 15.345834,2.910416 l 0.264583,10.31875 -3.175,2.645834 z"
					id="path68057"
				/><path
					style="opacity:1;fill:#d6fafc;fill-opacity:1;fill-rule:evenodd;stroke-width:1.2;stroke-linecap:round;stroke-linejoin:round;stroke-miterlimit:3;paint-order:stroke fill markers"
					d="m 62.177083,55.297916 -5.291667,-5.027083 c 9.892804,-4.725095 17.928137,-4.375043 23.8125,1.852083 l -1.852084,7.408333 -11.90625,-3.439583 z"
					id="path68001"
				/><path
					style="opacity:1;fill:#fefefe;fill-opacity:1;fill-rule:evenodd;stroke-width:1.2;stroke-linecap:round;stroke-linejoin:round;stroke-miterlimit:3;paint-order:stroke fill markers"
					d="m 67.468749,59.531249 -5.291666,-4.233333 c 5.672459,-0.81152 11.590348,-2.885043 15.874999,3.439583 l -0.79375,3.96875 c -2.20537,-2.445426 -4.306052,-5.028129 -9.789583,-3.175 z"
					id="path67999"
				/><path
					style="opacity:1;fill:#dde4e6;fill-opacity:1;fill-rule:evenodd;stroke-width:1.2;stroke-linecap:round;stroke-linejoin:round;stroke-miterlimit:3;paint-order:stroke fill markers"
					d="m 89.429166,17.991666 33.602084,33.866667 0.79375,2.910416 h 0.26458 v 59.002081 l -5.02708,-3.96875 -1.32292,-2.64583 L 119.0625,55.562499 84.931249,21.43125 Z"
					id="path67920"
				/><path
					style="opacity:1;fill:#e1e6e9;fill-opacity:1;fill-rule:evenodd;stroke-width:1.2;stroke-linecap:round;stroke-linejoin:round;stroke-miterlimit:3;paint-order:stroke fill markers"
					d="m 42.862499,92.868749 c -1.679254,-0.359074 -3.356347,-0.446612 -5.027083,0.264583 l 12.435417,12.435418 0.79375,4.23333 1.058333,1.05834 c 11.116688,1.46449 20.619408,1.35688 28.839583,0 1.379669,-0.73428 2.187816,-1.55155 2.910417,-2.38125 L 65.881249,90.222916 c 1.245832,-0.21042 2.494407,-0.472791 3.704167,0 l 9.789583,10.318754 2.910417,-0.26459 5.027083,-6.349998 1.322917,-7.9375 -1.322917,-5.291666 -11.90625,-10.583334 c -4.848934,-3.581646 -8.290577,-1.958283 -11.641666,0 l -17.991666,16.933335 7.143749,0.264582 v 2.116667 l 9.260417,10.318749 c -1.965765,1.678655 -5.956422,1.548615 -10.054167,1.322915 -3.19075,-2.663738 -6.384321,-5.325569 -9.260417,-8.202081 z"
					id="path58569"
				/><path
					style="opacity:1;fill:#9ca4a7;fill-opacity:1;fill-rule:evenodd;stroke-width:1.2;stroke-linecap:round;stroke-linejoin:round;stroke-miterlimit:3;paint-order:stroke fill markers"
					d="m 36.5125,95.249999 14.552083,14.552081 c 0.656472,-1.50052 0.629172,-3.12492 0.529166,-4.7625 -3.725542,-3.93024 -8.543444,-8.484944 -12.699999,-12.17083 -2.38125,0.264583 -1.697993,1.547636 -2.38125,2.381249 z"
					id="path56736"
				/><path
					style="opacity:1;fill:#66fdfe;fill-opacity:1;fill-rule:evenodd;stroke-width:1.2;stroke-linecap:round;stroke-linejoin:round;stroke-miterlimit:3;paint-order:stroke fill markers"
					d="m 21.43125,17.4625 c -3.205569,0.795573 -4.344669,3.074592 -4.497917,5.820833 l 4.233333,-0.264583 z"
					id="path48186"
				/><path
					style="opacity:1;fill:#000000;fill-opacity:1;fill-rule:evenodd;stroke-width:1.2;stroke-linecap:round;stroke-linejoin:round;stroke-miterlimit:3;paint-order:stroke fill markers"
					d="M 14.2875,31.485416 13.758333,28.575 l 0.264583,2.116666 z"
					id="path43082"
				/><path
					style="opacity:1;fill:#8e9599;fill-rule:evenodd;stroke-width:1.2;stroke-linecap:round;stroke-linejoin:round;stroke-miterlimit:3;paint-order:stroke fill markers;fill-opacity:1"
					d="m 26.458333,100.54167 2.645833,1.32291 2.645834,7.9375 -6.614584,6.61459 -7.9375,-2.64584 L 15.875,111.125 Z"
					id="path10905"
				/><path
					style="opacity:1;fill:#d8dfe3;fill-opacity:1;fill-rule:evenodd;stroke-width:1.2;stroke-linecap:round;stroke-linejoin:round;stroke-miterlimit:3;paint-order:stroke fill markers"
					d="m 10.054167,101.33542 6.614583,-6.350005 9.789583,5.556255 2.645833,7.9375 -5.291666,5.29166 -7.9375,-2.64583 z"
					id="path10903"
				/><path
					style="opacity:1;fill:#d8dfe3;fill-opacity:1;fill-rule:evenodd;stroke-width:1.2;stroke-linecap:round;stroke-linejoin:round;stroke-miterlimit:3;paint-order:stroke fill markers"
					d="m 19.84375,121.70833 h 9.260416 l -2.645833,-2.64583 z"
					id="path10961"
				/><path
					style="opacity:1;fill:#d8dfe3;fill-opacity:1;fill-rule:evenodd;stroke-width:1.2;stroke-linecap:round;stroke-linejoin:round;stroke-miterlimit:3;paint-order:stroke fill markers"
					d="m 37.570833,105.03958 0.264583,8.73125 -3.175,-3.43958 z"
					id="path10963"
				/><path
					style="opacity:1;fill:#66fdfe;fill-opacity:1;fill-rule:evenodd;stroke-width:1.2;stroke-linecap:round;stroke-linejoin:round;stroke-miterlimit:3;paint-order:stroke fill markers"
					d="m 13.49375,121.44375 6.085416,-4.23333 -2.38125,-1.32292 c -2.407977,1.60038 -2.85399,3.62167 -3.704166,5.55625 z"
					id="path10965"
				/><path
					style="opacity:1;fill:#66fdfe;fill-opacity:1;fill-rule:evenodd;stroke-width:1.2;stroke-linecap:round;stroke-linejoin:round;stroke-miterlimit:3;paint-order:stroke fill markers"
					d="m 5.8208333,115.09375 8.2020837,-2.64583 -1.058334,-3.43959 c -3.6119511,1.79183 -6.5377429,3.78806 -7.1437497,6.08542 z"
					id="path10967"
				/><path
					style="opacity:1;fill:#66fdfe;fill-opacity:1;fill-rule:evenodd;stroke-width:1.2;stroke-linecap:round;stroke-linejoin:round;stroke-miterlimit:3;paint-order:stroke fill markers"
					d="m 10.054167,105.03958 -1.5875004,-2.91041 c -3.3150338,0.97508 -5.6548838,2.86604 -7.14375,5.55625 z"
					id="path10969"
				/><path
					style="opacity:1;fill:#2a78b5;fill-opacity:1;fill-rule:evenodd;stroke-width:1.2;stroke-linecap:round;stroke-linejoin:round;stroke-miterlimit:3;paint-order:stroke fill markers"
					d="M 4.2333333,93.662499 9.2604166,99.483332 11.90625,96.572917 15.345833,94.191665 9.5249999,89.429166 Z"
					id="path11108"
				/><path
					style="opacity:1;fill:#66fdfe;fill-opacity:1;fill-rule:evenodd;stroke-width:1.2;stroke-linecap:round;stroke-linejoin:round;stroke-miterlimit:3;paint-order:stroke fill markers"
					d="M 4.2333333,93.662499 11.90625,96.572917 9.5249999,89.429166 2.9104167,87.047917 Z"
					id="path11034"
				/><path
					style="opacity:1;fill:#66fdfe;fill-opacity:1;fill-rule:evenodd;stroke-width:1.2;stroke-linecap:round;stroke-linejoin:round;stroke-miterlimit:3;paint-order:stroke fill markers"
					d="m 20.372916,94.191665 2.38125,-7.937499 c -3.020375,1.562048 -4.575739,4.079251 -5.291666,7.143749 z"
					id="path11036"
				/><path
					style="opacity:1;fill:#66fdfe;fill-opacity:1;fill-rule:evenodd;stroke-width:1.2;stroke-linecap:round;stroke-linejoin:round;stroke-miterlimit:3;paint-order:stroke fill markers"
					d="m 29.897916,90.487499 -1.5875,7.408333 L 25.4,97.366665 c 0.279837,-2.583605 1.683094,-4.899544 4.497916,-6.879166 z"
					id="path11038"
				/><path
					style="opacity:1;fill:#66fdfe;fill-opacity:1;fill-rule:evenodd;stroke-width:1.2;stroke-linecap:round;stroke-linejoin:round;stroke-miterlimit:3;paint-order:stroke fill markers"
					d="m 32.014583,103.98125 c -0.36845,-3.61233 0.348269,-6.092866 3.704167,-5.820835 -0.841343,1.797228 -1.948615,3.691155 -3.704167,5.820835 z"
					id="path11040"
				/><path
					style="opacity:1;fill:#66fdfe;fill-opacity:1;fill-rule:evenodd;stroke-width:1.2;stroke-linecap:round;stroke-linejoin:round;stroke-miterlimit:3;paint-order:stroke fill markers"
					d="m 23.547916,111.65417 3.96875,-3.96875 -5.820833,-1.55969 z"
					id="path11042"
				/><path
					style="opacity:1;fill:#66fdfe;fill-opacity:1;fill-rule:evenodd;stroke-width:1.2;stroke-linecap:round;stroke-linejoin:round;stroke-miterlimit:3;paint-order:stroke fill markers"
					d="m 17.727083,106.09792 4.233333,-4.23334 -6.614583,-1.77237 z"
					id="path11098"
				/><path
					style="opacity:1;fill:#2a78b5;fill-opacity:1;fill-rule:evenodd;stroke-width:1.2;stroke-linecap:round;stroke-linejoin:round;stroke-miterlimit:3;paint-order:stroke fill markers"
					d="m 19.579166,117.21042 h 3.704167 c 0.600683,1.26972 -5.429409,2.78208 -9.789583,4.23333 1.768733,-1.66243 3.745897,-3.12319 6.085416,-4.23333 z"
					id="path11102"
				/><path
					style="opacity:1;fill:#2a78b5;fill-opacity:1;fill-rule:evenodd;stroke-width:1.2;stroke-linecap:round;stroke-linejoin:round;stroke-miterlimit:3;paint-order:stroke fill markers"
					d="m 5.8208333,115.09375 8.2020837,-2.64583 1.058333,2.64583 z"
					id="path11104"
				/><path
					style="opacity:1;fill:#2a78b5;fill-opacity:1;fill-rule:evenodd;stroke-width:1.2;stroke-linecap:round;stroke-linejoin:round;stroke-miterlimit:3;paint-order:stroke fill markers"
					d="m 1.3229166,107.68542 8.7312504,-2.64584 1.527572,2.64584 z"
					id="path11106"
				/><path
					style="opacity:1;fill:#2a78b5;fill-opacity:1;fill-rule:evenodd;stroke-width:1.2;stroke-linecap:round;stroke-linejoin:round;stroke-miterlimit:3;paint-order:stroke fill markers"
					d="m 20.372916,94.191665 3.207903,1.852084 -0.826653,-9.525 z"
					id="path11110"
				/><path
					style="opacity:1;fill:#2a78b5;fill-opacity:1;fill-rule:evenodd;stroke-width:1.2;stroke-linecap:round;stroke-linejoin:round;stroke-miterlimit:3;paint-order:stroke fill markers"
					d="m 28.310416,97.895832 2.38125,1.852083 -0.79375,-8.995833 c -0.811755,2.398381 -1.409885,4.783811 -1.5875,7.14375 z"
					id="path11112"
				/><path
					style="opacity:1;fill:#2a78b5;fill-opacity:1;fill-rule:evenodd;stroke-width:1.2;stroke-linecap:round;stroke-linejoin:round;stroke-miterlimit:3;paint-order:stroke fill markers"
					d="m 35.71875,98.160415 c -0.350819,3.331415 -1.015684,6.602435 -2.116667,9.789585 -0.99141,-1.26463 -1.398106,-2.60299 -1.5875,-3.96875 z"
					id="path11167"
				/><path
					style="opacity:1;fill:#686b6a;fill-opacity:1;fill-rule:evenodd;stroke-width:1.2;stroke-linecap:round;stroke-linejoin:round;stroke-miterlimit:3;paint-order:stroke fill markers"
					d="m 9.2604166,26.458333 c -1.7961893,2.182593 -5.3168174,3.176343 -5.2916666,6.614583 0.7796226,2.605047 1.5982432,5.225638 2.6458332,7.9375 0.9869799,-1.276258 1.8392595,-2.612352 2.6458334,-3.96875 z"
					id="path19197"
				/><path
					style="opacity:1;fill:#4c4d4f;fill-opacity:1;fill-rule:evenodd;stroke-width:1.2;stroke-linecap:round;stroke-linejoin:round;stroke-miterlimit:3;paint-order:stroke fill markers"
					d="M 13.229167,31.75 9.2604166,37.041666 6.6145832,34.395833 v -3.96875 l 2.6458334,-3.96875 v 3.96875 z"
					id="path19141"
				/><path
					style="opacity:1;fill:#0d0d16;fill-opacity:1;fill-rule:evenodd;stroke-width:1.2;stroke-linecap:round;stroke-linejoin:round;stroke-miterlimit:3;paint-order:stroke fill markers"
					d="M 3.7041666,48.683333 11.90625,45.772916 9.5249999,41.804166 Z"
					id="path22435"
				/><path
					style="opacity:1;fill:#989fa3;fill-opacity:1;fill-rule:evenodd;stroke-width:1.2;stroke-linecap:round;stroke-linejoin:round;stroke-miterlimit:3;paint-order:stroke fill markers"
					d="m 11.90625,45.772916 h 22.489583 l 6.614583,-6.614583 v -4.7625 h -6.614583 v 6.614583 H 9.5249999 v 1.058333 z"
					id="path22491"
				/><path
					style="opacity:1;fill:#720708;fill-opacity:1;fill-rule:evenodd;stroke-width:1.2;stroke-linecap:round;stroke-linejoin:round;stroke-miterlimit:3;paint-order:stroke fill markers"
					d="M 13.758333,28.575 23.8125,25.664583 21.695833,30.1625 14.022917,31.485417 Z"
					id="path27419"
				/><ellipse
					style="opacity:1;fill:#fbd263;fill-opacity:1;fill-rule:evenodd;stroke-width:1.2;stroke-linecap:round;stroke-linejoin:round;stroke-miterlimit:3;paint-order:stroke fill markers"
					id="path27527"
					cx="17.197916"
					cy="28.707291"
					rx="1.8520833"
					ry="1.7197917"
				/><path
					style="opacity:1;fill:#000000;fill-opacity:1;fill-rule:evenodd;stroke-width:1.2;stroke-linecap:round;stroke-linejoin:round;stroke-miterlimit:3;paint-order:stroke fill markers"
					d="M 23.8125,25.664583 13.758333,28.575 V 26.9875 L 23.8125,20.108333 22.489583,23.8125 l 8.995833,-5.027084 -2.38125,8.995834 -7.408333,2.38125 z"
					id="path42916"
				/><path
					style="opacity:1;fill:#dde4e6;fill-opacity:1;fill-rule:evenodd;stroke-width:1.2;stroke-linecap:round;stroke-linejoin:round;stroke-miterlimit:3;paint-order:stroke fill markers"
					d="M 8.2020832,38.629166 H 32.808333 V 31.75 l -9.260417,-2.910417 c -2.867279,0.982799 -5.897841,1.77169 -9.525,1.852083 L 13.229167,31.75 9.5249999,34.395833 Z"
					id="path27139"
				/><path
					style="opacity:1;fill:#6c7475;fill-opacity:1;fill-rule:evenodd;stroke-width:1.2;stroke-linecap:round;stroke-linejoin:round;stroke-miterlimit:3;paint-order:stroke fill markers"
					d="m 12.435417,38.629166 3.174999,-3.439583 v 3.439583 z"
					id="path22713"
				/><path
					style="opacity:1;fill:#6c7475;fill-opacity:1;fill-rule:evenodd;stroke-width:1.2;stroke-linecap:round;stroke-linejoin:round;stroke-miterlimit:3;paint-order:stroke fill markers"
					d="m 26.458334,38.629167 3.174999,-3.439583 v 3.439583 z"
					id="path22725"
				/><path
					style="opacity:1;fill:#d6dde1;fill-opacity:1;fill-rule:evenodd;stroke-width:1.2;stroke-linecap:round;stroke-linejoin:round;stroke-miterlimit:3;paint-order:stroke fill markers"
					d="m 25.929167,40.084376 3.174999,-3.439583 v 3.439583 z"
					id="path22727"
				/><path
					style="opacity:1;fill:#6c7475;fill-opacity:1;fill-rule:evenodd;stroke-width:1.2;stroke-linecap:round;stroke-linejoin:round;stroke-miterlimit:3;paint-order:stroke fill markers"
					d="m 19.579167,38.629166 3.174999,-3.439583 v 3.439583 z"
					id="path22721"
				/><path
					style="opacity:1;fill:#d6dde1;fill-opacity:1;fill-rule:evenodd;stroke-width:1.2;stroke-linecap:round;stroke-linejoin:round;stroke-miterlimit:3;paint-order:stroke fill markers"
					d="m 19.05,40.084375 3.174999,-3.439583 v 3.439583 z"
					id="path22723"
				/><path
					style="opacity:1;fill:#d6dde1;fill-opacity:1;fill-rule:evenodd;stroke-width:1.2;stroke-linecap:round;stroke-linejoin:round;stroke-miterlimit:3;paint-order:stroke fill markers"
					d="m 11.90625,40.084375 3.174999,-3.439583 v 3.439583 z"
					id="path22719"
				/><path
					style="opacity:1;fill:#66fdfe;fill-opacity:1;fill-rule:evenodd;stroke-width:1.2;stroke-linecap:round;stroke-linejoin:round;stroke-miterlimit:3;paint-order:stroke fill markers"
					d="m 34.925,10.847917 c -3.000494,1.472003 -4.072169,2.998183 -6.085417,4.497916 v 3.439584 l 4.7625,-1.587501 1.852083,-6.349999 z"
					id="path48188"
				/><path
					style="opacity:1;fill:#19192c;fill-opacity:1;fill-rule:evenodd;stroke-width:1.2;stroke-linecap:round;stroke-linejoin:round;stroke-miterlimit:3;paint-order:stroke fill markers"
					d="m 47.889583,3.96875 c -2.437035,4.2239236 -7.408712,6.977878 -6.35,13.229166 l -6.085417,0.264584 4.7625,-8.4666668 z"
					id="path75196"
				/><path
					style="opacity:1;fill:#dde4e6;fill-opacity:1;fill-rule:evenodd;stroke-width:1.2;stroke-linecap:round;stroke-linejoin:round;stroke-miterlimit:3;paint-order:stroke fill markers"
					d="m 32.808333,31.75 h 8.202083 0.529167 V 17.197916 H 38.1 V 15.345833 C 40.872152,11.279723 43.20024,6.966054 47.889583,3.96875 43.603466,5.4812769 39.332894,6.6511649 34.925,10.847917 c -0.538813,1.728734 -1.55042,3.661107 -3.704167,6.085416 l 0.264583,1.852083 -7.9375,10.054167 2.910417,4.233333 z"
					id="path27357"
				/><path
					style="opacity:1;fill:#191a2c;fill-opacity:1;fill-rule:evenodd;stroke-width:1.2;stroke-linecap:round;stroke-linejoin:round;stroke-miterlimit:3;paint-order:stroke fill markers"
					d="m 34.925,30.427083 h 4.7625 V 25.4 Z"
					id="path22711"
				/><path
					style="opacity:1;fill:#191a2c;fill-opacity:1;fill-rule:evenodd;stroke-width:1.2;stroke-linecap:round;stroke-linejoin:round;stroke-miterlimit:3;paint-order:stroke fill markers"
					d="m 34.925,24.077083 h 4.7625 V 19.05 Z"
					id="path22547"
				/><path
					style="opacity:1;fill:#000000;fill-opacity:1;fill-rule:evenodd;stroke-width:1.2;stroke-linecap:round;stroke-linejoin:round;stroke-miterlimit:3;paint-order:stroke fill markers"
					d="M 14.022916,30.691666 13.758333,28.575 V 26.9875 L 13.229167,31.75 Z"
					id="path43080"
				/><path
					style="opacity:1;fill:#19192c;fill-opacity:1;fill-rule:evenodd;stroke-width:1.2;stroke-linecap:round;stroke-linejoin:round;stroke-miterlimit:3;paint-order:stroke fill markers"
					d="m 29.104166,10.847917 c -1.613691,2.578442 -2.522708,6.286338 -2.645833,10.31875 L 21.960417,19.84375 Z"
					id="path76571"
				/><path
					style="opacity:1;fill:#19192c;fill-opacity:1;fill-rule:evenodd;stroke-width:1.2;stroke-linecap:round;stroke-linejoin:round;stroke-miterlimit:3;paint-order:stroke fill markers"
					d="m 17.727083,17.4625 c -2.349385,5.068264 -1.766943,5.518061 -2.116666,6.879167 l -2.60714,-0.647191 z"
					id="path76573"
				/><path
					style="opacity:1;fill:#dde4e6;fill-opacity:1;fill-rule:evenodd;stroke-width:1.2;stroke-linecap:round;stroke-linejoin:round;stroke-miterlimit:3;paint-order:stroke fill markers"
					d="m 31.220833,16.933333 -6.085417,3.175 -0.529166,-1.852083 c 1.416821,-3.364774 2.811004,-5.038214 4.497916,-7.408333 -2.771677,1.902277 -5.609266,3.599881 -7.9375,6.879166 l -1.058333,3.96875 c -1.856042,0.656576 -3.765541,1.842682 -5.55625,1.852083 0.632576,-2.500453 2.076092,-4.101923 3.175,-6.085416 -2.286818,0.590843 -5.23498,4.046881 -8.4666664,8.73125 L 8.7312499,30.691666 12.435417,32.808333 13.229167,31.75 13.758333,26.9875 23.8125,20.108333 22.489583,23.8125 31.485416,18.785416 Z"
					id="path27359"
				/><path
					style="opacity:1;fill:#66fdfe;fill-opacity:1;fill-rule:evenodd;stroke-width:1.2;stroke-linecap:round;stroke-linejoin:round;stroke-miterlimit:3;paint-order:stroke fill markers"
					d="m 44.979166,38.364583 h 2.645833 V 23.8125 h -2.645833 z"
					id="path49080"
				/><path
					style="opacity:1;fill:#66fdfe;fill-opacity:1;fill-rule:evenodd;stroke-width:1.2;stroke-linecap:round;stroke-linejoin:round;stroke-miterlimit:3;paint-order:stroke fill markers"
					d="m 54.239583,37.041666 3.96875,-2.645833 V 23.8125 h -3.96875 z"
					id="path49082"
				/><path
					style="opacity:1;fill:#66fdfe;fill-opacity:1;fill-rule:evenodd;stroke-width:1.2;stroke-linecap:round;stroke-linejoin:round;stroke-miterlimit:3;paint-order:stroke fill markers"
					d="m 18.785416,53.445833 15.08125,-3.704167 v -2.38125 l -9.789583,1.058333 z"
					id="path49084"
				/><path
					style="opacity:1;fill:#66fdfe;fill-opacity:1;fill-rule:evenodd;stroke-width:1.2;stroke-linecap:round;stroke-linejoin:round;stroke-miterlimit:3;paint-order:stroke fill markers"
					d="m 36.247916,61.912499 3.704167,-6.614583 h -3.704167 z"
					id="path49086"
				/><path
					style="opacity:1;fill:#66fdfe;fill-opacity:1;fill-rule:evenodd;stroke-width:1.2;stroke-linecap:round;stroke-linejoin:round;stroke-miterlimit:3;paint-order:stroke fill markers"
					d="m 49.477083,53.710417 -5.027084,-4.762501 v 1.852083 z"
					id="path49088"
				/><path
					style="opacity:1;fill:#66fdfe;fill-opacity:1;fill-rule:evenodd;stroke-width:1.2;stroke-linecap:round;stroke-linejoin:round;stroke-miterlimit:3;paint-order:stroke fill markers"
					d="m 42.068749,117.21042 h 2.645834 v 7.67291 h -2.645834 z"
					id="path49092"
				/><path
					style="opacity:1;fill:#66fdfe;fill-opacity:1;fill-rule:evenodd;stroke-width:1.2;stroke-linecap:round;stroke-linejoin:round;stroke-miterlimit:3;paint-order:stroke fill markers"
					d="m 52.387499,124.88333 h 3.175 v -7.67291 h -3.704166 v 7.67291 z"
					id="path49094"
				/><path
					style="opacity:1;fill:#66fdfe;fill-opacity:1;fill-rule:evenodd;stroke-width:1.2;stroke-linecap:round;stroke-linejoin:round;stroke-miterlimit:3;paint-order:stroke fill markers"
					d="m 90.4875,117.475 v -2.38125 l 13.22917,0 v 2.38125 z"
					id="path49096"
				/><path
					style="opacity:1;fill:#2a78b5;fill-opacity:1;fill-rule:evenodd;stroke-width:1.2;stroke-linecap:round;stroke-linejoin:round;stroke-miterlimit:3;paint-order:stroke fill markers"
					d="m 18.785416,53.445833 h 15.08125 v -3.704167 z"
					id="path49102"
				/><path
					style="opacity:1;fill:#2a78b5;fill-opacity:1;fill-rule:evenodd;stroke-width:1.2;stroke-linecap:round;stroke-linejoin:round;stroke-miterlimit:3;paint-order:stroke fill markers"
					d="m 39.952083,55.297916 h 3.175 l -6.879167,6.614583 z"
					id="path49266"
				/><path
					style="opacity:1;fill:#2a78b5;fill-opacity:1;fill-rule:evenodd;stroke-width:1.2;stroke-linecap:round;stroke-linejoin:round;stroke-miterlimit:3;paint-order:stroke fill markers"
					d="m 44.449999,50.799999 v 2.910417 h 5.027084 z"
					id="path49994"
				/><path
					style="opacity:1;fill:#66fdfe;fill-opacity:1;fill-rule:evenodd;stroke-width:1.2;stroke-linecap:round;stroke-linejoin:round;stroke-miterlimit:3;paint-order:stroke fill markers"
					d="m 49.477083,47.228126 -5.027084,-4.762501 v 1.852083 z"
					id="path49996"
				/><path
					style="opacity:1;fill:#2a78b5;fill-opacity:1;fill-rule:evenodd;stroke-width:1.2;stroke-linecap:round;stroke-linejoin:round;stroke-miterlimit:3;paint-order:stroke fill markers"
					d="m 44.449999,44.317708 v 2.910417 h 5.027084 z"
					id="path49998"
				/><path
					style="opacity:1;fill:#d8dfe3;fill-opacity:1;fill-rule:evenodd;stroke-width:1.2;stroke-linecap:round;stroke-linejoin:round;stroke-miterlimit:3;paint-order:stroke fill markers"
					d="m 30.691666,120.12083 -2.645833,-2.64583 2.910417,-2.91042 2.716818,2.71682 z"
					id="path50000"
				/><path
					style="opacity:1;fill:#929296;fill-opacity:1;fill-rule:evenodd;stroke-width:1.2;stroke-linecap:round;stroke-linejoin:round;stroke-miterlimit:3;paint-order:stroke fill markers"
					d="m 33.602083,117.475 2.645833,-2.64583 -2.645833,-2.64584 -2.645833,2.38125 z"
					id="path50218"
				/><path
					style="opacity:1;fill:#66fdfe;fill-opacity:1;fill-rule:evenodd;stroke-width:1.2;stroke-linecap:round;stroke-linejoin:round;stroke-miterlimit:3;paint-order:stroke fill markers"
					d="m 32.54375,121.97292 5.55625,-5.29167 -1.852084,-1.85208 -5.55625,5.29166 z"
					id="path49090"
				/><path
					style="opacity:1;fill:#d8dfe3;fill-opacity:1;fill-rule:evenodd;stroke-width:1.2;stroke-linecap:round;stroke-linejoin:round;stroke-miterlimit:3;paint-order:stroke fill markers"
					d="M 42.068749,124.88333 H 34.13125 l 3.439583,-3.43958 h 4.497916 z"
					id="path52093"
				/><path
					style="opacity:1;fill:#929296;fill-opacity:1;fill-rule:evenodd;stroke-width:1.2;stroke-linecap:round;stroke-linejoin:round;stroke-miterlimit:3;paint-order:stroke fill markers"
					d="m 37.570833,121.44375 4.497916,-4.23333 v 4.23333 z"
					id="path52095"
				/><path
					style="opacity:1;fill:#929296;fill-opacity:1;fill-rule:evenodd;stroke-width:1.2;stroke-linecap:round;stroke-linejoin:round;stroke-miterlimit:3;paint-order:stroke fill markers"
					d="m 51.858333,117.21042 h -2.645834 v 4.23333 h 2.645834 z"
					id="path52429"
				/><path
					style="opacity:1;fill:#d8dfe3;fill-opacity:1;fill-rule:evenodd;stroke-width:1.2;stroke-linecap:round;stroke-linejoin:round;stroke-miterlimit:3;paint-order:stroke fill markers"
					d="m 49.212499,121.44375 h 2.645834 v 3.43958 h -2.645834 z"
					id="path52431"
				/><g id="g52592" style="opacity:1"
					><path
						style="opacity:1;fill:#66fdfe;fill-opacity:1;fill-rule:evenodd;stroke-width:1.2;stroke-linecap:round;stroke-linejoin:round;stroke-miterlimit:3;paint-order:stroke fill markers"
						d="m 62.970833,124.88333 h 3.175 v -7.67291 h -3.704166 v 7.67291 z"
						id="path52571"
					/><path
						style="opacity:1;fill:#929296;fill-opacity:1;fill-rule:evenodd;stroke-width:1.2;stroke-linecap:round;stroke-linejoin:round;stroke-miterlimit:3;paint-order:stroke fill markers"
						d="m 62.441667,117.21042 h -2.645834 v 4.23333 h 2.645834 z"
						id="path52573"
					/><path
						style="opacity:1;fill:#d8dfe3;fill-opacity:1;fill-rule:evenodd;stroke-width:1.2;stroke-linecap:round;stroke-linejoin:round;stroke-miterlimit:3;paint-order:stroke fill markers"
						d="m 59.795833,121.44375 h 2.645834 v 3.43958 h -2.645834 z"
						id="path52575"
					/></g
				><path
					style="opacity:1;fill:#66fdfe;fill-opacity:1;fill-rule:evenodd;stroke-width:1.3916;stroke-linecap:round;stroke-linejoin:round;stroke-miterlimit:3;paint-order:stroke fill markers"
					d="m 82.814583,125.67708 h 3.175 v -10.31875 h -3.704166 v 10.31875 z"
					id="path52583"
				/><path
					style="opacity:1;fill:#929296;fill-opacity:1;fill-rule:evenodd;stroke-width:1.3916;stroke-linecap:round;stroke-linejoin:round;stroke-miterlimit:3;paint-order:stroke fill markers"
					d="m 82.285417,115.35833 h -2.645834 v 5.6931 h 2.645834 z"
					id="path52585"
				/><path
					style="opacity:1;fill:#d8dfe3;fill-opacity:1;fill-rule:evenodd;stroke-width:1.3916;stroke-linecap:round;stroke-linejoin:round;stroke-miterlimit:3;paint-order:stroke fill markers"
					d="m 79.639583,121.05143 h 2.645834 v 4.62565 h -2.645834 z"
					id="path52587"
				/><g
					id="g52600"
					transform="matrix(1,0,0,1.2068976,9.5249997,-25.044308)"
					style="opacity:1"
					><path
						style="opacity:1;fill:#66fdfe;fill-opacity:1;fill-rule:evenodd;stroke-width:1.2;stroke-linecap:round;stroke-linejoin:round;stroke-miterlimit:3;paint-order:stroke fill markers"
						d="m 62.970833,124.88333 h 3.175 v -7.67291 h -3.704166 v 7.67291 z"
						id="path52594"
					/><path
						style="opacity:1;fill:#929296;fill-opacity:1;fill-rule:evenodd;stroke-width:1.2;stroke-linecap:round;stroke-linejoin:round;stroke-miterlimit:3;paint-order:stroke fill markers"
						d="m 62.441667,117.21042 h -2.645834 v 4.23333 h 2.645834 z"
						id="path52596"
					/><path
						style="opacity:1;fill:#d8dfe3;fill-opacity:1;fill-rule:evenodd;stroke-width:1.2;stroke-linecap:round;stroke-linejoin:round;stroke-miterlimit:3;paint-order:stroke fill markers"
						d="m 59.795833,121.44375 h 2.645834 v 3.43958 h -2.645834 z"
						id="path52598"
					/></g
				><path
					style="opacity:1;fill:#929296;fill-opacity:1;fill-rule:evenodd;stroke-width:1.2;stroke-linecap:round;stroke-linejoin:round;stroke-miterlimit:3;paint-order:stroke fill markers"
					d="m 90.4875,117.475 v 3.43958 l 6.614582,0 V 117.475 Z"
					id="path52602"
				/><path
					style="opacity:1;fill:#d8dfe3;fill-opacity:1;fill-rule:evenodd;stroke-width:1.2;stroke-linecap:round;stroke-linejoin:round;stroke-miterlimit:3;paint-order:stroke fill markers"
					d="m 90.4875,120.91458 6.614582,0 V 117.475 h 6.614588 c -0.11035,3.1041 -1.6766,5.61792 -5.027088,7.40833 l -8.202082,0 z"
					id="path53294"
				/><g id="g53449" style="opacity:1"
					><path
						style="opacity:1;fill:#66fdfe;fill-opacity:1;fill-rule:evenodd;stroke-width:1.2;stroke-linecap:round;stroke-linejoin:round;stroke-miterlimit:3;paint-order:stroke fill markers"
						d="m 103.71667,106.3625 v -2.11667 H 90.222916 v 2.64584 h 13.493754 z"
						id="path49100"
					/><path
						style="opacity:1;fill:#d8dfe3;fill-opacity:1;fill-rule:evenodd;stroke-width:1.2;stroke-linecap:round;stroke-linejoin:round;stroke-miterlimit:3;paint-order:stroke fill markers"
						d="m 96.837499,106.89167 v 3.96875 h 6.879171 v -3.96875 z"
						id="path53365"
					/><path
						style="opacity:1;fill:#929296;fill-opacity:1;fill-rule:evenodd;stroke-width:1.2;stroke-linecap:round;stroke-linejoin:round;stroke-miterlimit:3;paint-order:stroke fill markers"
						d="m 96.837499,106.89167 h -6.614583 v 3.96875 h 6.614583 z"
						id="path53367"
					/></g
				><g id="g53457" transform="translate(0,-10.318753)" style="opacity:1"
					><path
						style="opacity:1;fill:#66fdfe;fill-opacity:1;fill-rule:evenodd;stroke-width:1.2;stroke-linecap:round;stroke-linejoin:round;stroke-miterlimit:3;paint-order:stroke fill markers"
						d="m 103.71667,106.3625 v -2.11667 H 90.222916 v 2.64584 h 13.493754 z"
						id="path53451"
					/><path
						style="opacity:1;fill:#d8dfe3;fill-opacity:1;fill-rule:evenodd;stroke-width:1.2;stroke-linecap:round;stroke-linejoin:round;stroke-miterlimit:3;paint-order:stroke fill markers"
						d="m 96.837499,106.89167 v 3.96875 h 6.879171 v -3.96875 z"
						id="path53453"
					/><path
						style="opacity:1;fill:#929296;fill-opacity:1;fill-rule:evenodd;stroke-width:1.2;stroke-linecap:round;stroke-linejoin:round;stroke-miterlimit:3;paint-order:stroke fill markers"
						d="m 96.837499,106.89167 h -6.614583 v 3.96875 h 6.614583 z"
						id="path53455"
					/></g
				><path
					style="opacity:1;fill:#dde4e6;fill-opacity:1;fill-rule:evenodd;stroke-width:1.2;stroke-linecap:round;stroke-linejoin:round;stroke-miterlimit:3;paint-order:stroke fill markers"
					d="m 35.71875,52.916666 h 6.614583 V 39.6875 l -6.614583,6.614583 z"
					id="path54185"
				/><path
					style="opacity:1;fill:#dde4e6;fill-opacity:1;fill-rule:evenodd;stroke-width:1.2;stroke-linecap:round;stroke-linejoin:round;stroke-miterlimit:3;paint-order:stroke fill markers"
					d="m 47.624999,23.8125 h 3.96875 v 6.614583 h -3.96875 z"
					id="path54517"
				/><path
					style="opacity:1;fill:#989fa3;fill-opacity:1;fill-rule:evenodd;stroke-width:1.2;stroke-linecap:round;stroke-linejoin:round;stroke-miterlimit:3;paint-order:stroke fill markers"
					d="m 47.624999,30.427083 v 7.9375 h 3.96875 v -7.9375 z"
					id="path54519"
				/><path
					style="opacity:1;fill:#989fa3;fill-opacity:1;fill-rule:evenodd;stroke-width:1.2;stroke-linecap:round;stroke-linejoin:round;stroke-miterlimit:3;paint-order:stroke fill markers"
					d="M 58.208333,30.427083 60.854166,31.75 58.208333,34.395833 Z"
					id="path55472"
				/><path
					style="opacity:1;fill:#dde4e6;fill-opacity:1;fill-rule:evenodd;stroke-width:1.2;stroke-linecap:round;stroke-linejoin:round;stroke-miterlimit:3;paint-order:stroke fill markers"
					d="m 60.854166,31.75 3.96875,-5.291667 -6.614583,-2.645833 v 6.614583 z"
					id="path55474"
				/><path
					style="opacity:1;fill:#dde4e6;fill-opacity:1;fill-rule:evenodd;stroke-width:1.2;stroke-linecap:round;stroke-linejoin:round;stroke-miterlimit:3;paint-order:stroke fill markers"
					d="m 44.979166,21.166666 h 6.614583 l 3.818933,-6.614583 z"
					id="path56028"
				/><path
					style="opacity:1;fill:#dde4e6;fill-opacity:1;fill-rule:evenodd;stroke-width:1.2;stroke-linecap:round;stroke-linejoin:round;stroke-miterlimit:3;paint-order:stroke fill markers"
					d="m 72.760416,18.520833 -6.614584,6.614583 -5.291666,-3.055145 z"
					id="path56030"
				/><path
					style="opacity:1;fill:#dde4e6;fill-opacity:1;fill-rule:evenodd;stroke-width:1.2;stroke-linecap:round;stroke-linejoin:round;stroke-miterlimit:3;paint-order:stroke fill markers"
					d="m 106.09792,105.30417 v 5.55625 l 6.87916,3.175 -6.87916,-9.525 z"
					id="path56034"
				/><path
					style="opacity:1;fill:#dde4e6;fill-opacity:1;fill-rule:evenodd;stroke-width:1.2;stroke-linecap:round;stroke-linejoin:round;stroke-miterlimit:3;paint-order:stroke fill markers"
					d="m 106.09792,95.25 v 5.55625 l 6.87916,3.175 -6.87916,-9.525 z"
					id="path56036"
				/><path
					style="opacity:1;fill:#dde4e6;fill-opacity:1;fill-rule:evenodd;stroke-width:1.2;stroke-linecap:round;stroke-linejoin:round;stroke-miterlimit:3;paint-order:stroke fill markers"
					d="m 61.912499,69.056249 5.027083,-5.027083 -13.229166,-13.229167 -6.35,6.35 8.73125,8.73125 3.96875,-2.291358 -4.7625,-4.7625 -1.322917,0.763786 2.910417,2.910417 -0.529167,0.529167 -4.293261,-4.293262 2.645833,-2.645833 7.203678,7.203678 -2.910416,3.379655 z"
					id="path56038"
				/><path
					style="opacity:1;fill:#dde4e6;fill-opacity:1;fill-rule:evenodd;stroke-width:1.2;stroke-linecap:round;stroke-linejoin:round;stroke-miterlimit:3;paint-order:stroke fill markers"
					d="M 54.239583,47.624999 80.697916,21.166666 78.052082,18.520833 51.593749,44.979166 Z"
					id="path56040"
				/><path
					style="opacity:1;fill:#989fa3;fill-opacity:1;fill-rule:evenodd;stroke-width:1.2;stroke-linecap:round;stroke-linejoin:round;stroke-miterlimit:3;paint-order:stroke fill markers"
					d="m 54.239583,47.624999 2.645833,2.645834 26.458333,-27.78125 -2.645833,-1.322917 z"
					id="path56042"
				/><path
					style="opacity:1;fill:#9ca4a7;fill-opacity:1;fill-rule:evenodd;stroke-width:1.2;stroke-linecap:round;stroke-linejoin:round;stroke-miterlimit:3;paint-order:stroke fill markers"
					d="m 82.020832,103.1875 -2.645833,-2.64583 c 3.872344,-3.583552 6.435267,-6.817345 7.9375,-10.583338 v -9.260416 c 1.490816,1.749959 3.444352,3.26229 3.360661,5.820833 -0.666939,13.060232 -5.628298,11.586059 -8.652328,16.668751 z"
					id="path56734"
				/><path
					style="opacity:1;fill:#2a78b5;fill-opacity:1;fill-rule:evenodd;stroke-width:1.2;stroke-linecap:round;stroke-linejoin:round;stroke-miterlimit:3;paint-order:stroke fill markers"
					d="m 72.495832,110.33125 h 5.291667 v -6.08542 l -6.085417,6.08542 z"
					id="path56738"
				/><path
					style="opacity:1;fill:#2a78b5;fill-opacity:1;fill-rule:evenodd;stroke-width:1.2;stroke-linecap:round;stroke-linejoin:round;stroke-miterlimit:3;paint-order:stroke fill markers"
					d="m 65.484375,110.33125 h 5.291667 v -6.08542 l -6.085417,6.08542 z"
					id="path56902"
				/><path
					style="opacity:1;fill:#2a78b5;fill-opacity:1;fill-rule:evenodd;stroke-width:1.28571;stroke-linecap:round;stroke-linejoin:round;stroke-miterlimit:3;paint-order:stroke fill markers"
					d="m 52.652083,85.063541 3.96875,-3.968749 3.968749,3.968749 z"
					id="path56906"
				/><path
					style="opacity:1;fill:#2a78b5;fill-opacity:1;fill-rule:evenodd;stroke-width:1.28571;stroke-linecap:round;stroke-linejoin:round;stroke-miterlimit:3;paint-order:stroke fill markers"
					d="m 57.943749,79.771875 3.968751,-3.968751 3.96875,3.968751 z"
					id="path56908"
				/><path
					style="opacity:1;fill:#2a78b5;fill-opacity:1;fill-rule:evenodd;stroke-width:1.37143;stroke-linecap:round;stroke-linejoin:round;stroke-miterlimit:3;paint-order:stroke fill markers"
					d="m 62.970833,74.612501 4.233334,-4.233335 4.233333,4.233335 z"
					id="path56910"
				/><path
					style="opacity:1;fill:#19192c;fill-opacity:1;fill-rule:evenodd;stroke-width:1.2;stroke-linecap:round;stroke-linejoin:round;stroke-miterlimit:3;paint-order:stroke fill markers"
					d="m 36.5125,93.662499 c 0.948066,-2.029915 2.383133,-1.959707 3.704166,-2.38125 l 3.439583,0.529167 c 1.31732,-0.640758 1.255523,-1.626369 1.058334,-2.645834 -2.774646,-2.693828 -5.555722,-5.378964 -10.583333,-5.027083 -1.718757,0.668936 -3.37438,1.417784 -4.233334,3.175 7.386416,1.110591 5.545546,4.012796 6.614584,6.35 z"
					id="path58573"
				/><path
					style="opacity:1;fill:#989fa3;fill-opacity:1;fill-rule:evenodd;stroke-width:1.2;stroke-linecap:round;stroke-linejoin:round;stroke-miterlimit:3;paint-order:stroke fill markers"
					d="m 98.954165,83.872916 -0.264583,-29.633333 -10.054166,-26.19375 -2.38125,-6.879167 -1.5875,1.058334 1.058333,2.910416 10.847916,31.75 -1.322916,17.197916 v 7.9375 z"
					id="path67356"
				/><path
					style="opacity:1;fill:#dde4e6;fill-opacity:1;fill-rule:evenodd;stroke-width:1.2;stroke-linecap:round;stroke-linejoin:round;stroke-miterlimit:3;paint-order:stroke fill markers"
					d="m 85.195832,22.225 12.435417,34.660416 -1.852084,25.4 L 92.868749,79.374999 95.779165,56.885416 84.402082,23.01875 84.137499,22.225 Z"
					id="path66733"
				/><path
					style="opacity:1;fill:#66fdfe;fill-opacity:1;fill-rule:evenodd;stroke-width:1.2;stroke-linecap:round;stroke-linejoin:round;stroke-miterlimit:3;paint-order:stroke fill markers"
					d="m 98.954165,83.872916 -6.085416,-4.497917 v 2.38125 l 6.085416,3.96875 z"
					id="path60660"
				/><path
					style="opacity:1;fill:#989fa3;fill-opacity:1;fill-rule:evenodd;stroke-width:1.2;stroke-linecap:round;stroke-linejoin:round;stroke-miterlimit:3;paint-order:stroke fill markers"
					d="m 82.549999,67.204166 2.116667,-13.758333 v -30.95625 l -1.5875,-0.529166 v 28.045832 l -5.027084,16.139583 z"
					id="path66317"
				/><path
					style="opacity:1;fill:#dde4e6;fill-opacity:1;fill-rule:evenodd;stroke-width:1.2;stroke-linecap:round;stroke-linejoin:round;stroke-miterlimit:3;paint-order:stroke fill markers"
					d="m 82.55,21.695833 0.529166,0.264584 v 28.310416 l -4.111903,15.345833 -2.767264,-2.116667 5.820833,-15.875 10e-7,-25.796874 z"
					id="path66039"
				/><path
					style="opacity:1;fill:#66fdfe;fill-opacity:1;fill-rule:evenodd;stroke-width:1.2;stroke-linecap:round;stroke-linejoin:round;stroke-miterlimit:3;paint-order:stroke fill markers"
					d="m 82.549999,67.204166 -6.35,-3.704167 -0.79375,2.645833 6.614583,2.910417 z"
					id="path60662"
				/><path
					style="opacity:1;fill:#989fa3;fill-opacity:1;fill-rule:evenodd;stroke-width:1.2;stroke-linecap:round;stroke-linejoin:round;stroke-miterlimit:3;paint-order:stroke fill markers"
					d="m 86.518749,21.43125 33.866671,33.866666 -2.64584,51.858334 -2.64583,-3.96875 2.11667,-46.831251 -31.220838,-32.279166 z"
					id="path67918"
				/><path
					style="opacity:1;fill:#66fdfe;fill-opacity:1;fill-rule:evenodd;stroke-width:1.2;stroke-linecap:round;stroke-linejoin:round;stroke-miterlimit:3;paint-order:stroke fill markers"
					d="m 124.08958,113.77083 -8.99583,-10.58333 v 3.96875 l 8.99583,9.78958 z"
					id="path60658"
				/><path
					style="opacity:1;fill:#2a78b5;fill-opacity:1;fill-rule:evenodd;stroke-width:1.2;stroke-linecap:round;stroke-linejoin:round;stroke-miterlimit:3;paint-order:stroke fill markers"
					d="m 118.26875,55.297916 7.14375,-6.35 c -0.14851,2.022378 -0.64163,4.122368 -1.70148,6.35 -1.8872,0.688371 -3.70492,0.722571 -5.44227,0 z"
					id="path60728"
				/><path
					style="opacity:1;fill:#2a78b5;fill-opacity:1;fill-rule:evenodd;stroke-width:1.2;stroke-linecap:round;stroke-linejoin:round;stroke-miterlimit:3;paint-order:stroke fill markers"
					d="m 84.402082,23.01875 c 1.877661,-0.936983 3.737339,-2.269323 5.55625,-4.497917 -0.620809,-3.633188 -0.250713,-5.763821 -2.645833,-13.2291664 -2.532323,-1.9574898 -5.23573,-2.9585418 -7.9375,-3.96875 l 2.645833,13.2291664 z"
					id="path60664"
				/><path
					style="opacity:1;fill:#66fdfe;fill-opacity:1;fill-rule:evenodd;stroke-width:1.2;stroke-linecap:round;stroke-linejoin:round;stroke-miterlimit:3;paint-order:stroke fill markers"
					d="m 78.052082,18.785416 c 1.622568,2.10739 3.491876,3.867077 6.35,4.233334 V 7.9374999 L 79.374999,1.3229166 Z"
					id="path60431"
				/><path
					style="opacity:1;fill:#66fdfe;fill-opacity:1;fill-rule:evenodd;stroke-width:1.2;stroke-linecap:round;stroke-linejoin:round;stroke-miterlimit:3;paint-order:stroke fill markers"
					d="m 106.3625,41.804166 6.87917,-7.14375 -7.14375,1.852084 z"
					id="path60652"
				/><path
					style="opacity:1;fill:#2a78b5;fill-opacity:1;fill-rule:evenodd;stroke-width:1.2;stroke-linecap:round;stroke-linejoin:round;stroke-miterlimit:3;paint-order:stroke fill markers"
					d="m 106.62708,26.722916 c -0.0977,2.914603 -0.66013,5.904327 -1.85208,8.995834 -2.37098,0.25948 -4.66374,0.303518 -6.350001,-1.322917 z"
					id="path60722"
				/><path
					style="opacity:1;fill:#66fdfe;fill-opacity:1;fill-rule:evenodd;stroke-width:1.2;stroke-linecap:round;stroke-linejoin:round;stroke-miterlimit:3;paint-order:stroke fill markers"
					d="m 90.222916,27.516666 v -6.614583 l 9.260416,-3.704167 c -2.502216,3.471006 -4.960172,6.944391 -9.260416,10.31875 z"
					id="path60648"
				/><path
					style="opacity:1;fill:#66fdfe;fill-opacity:1;fill-rule:evenodd;stroke-width:1.2;stroke-linecap:round;stroke-linejoin:round;stroke-miterlimit:3;paint-order:stroke fill markers"
					d="m 98.424999,34.395833 8.202081,-7.672917 -8.731248,2.645834 z"
					id="path60650"
				/><path
					style="opacity:1;fill:#2a78b5;fill-opacity:1;fill-rule:evenodd;stroke-width:1.2;stroke-linecap:round;stroke-linejoin:round;stroke-miterlimit:3;paint-order:stroke fill markers"
					d="m 90.222916,27.516666 h 7.408333 c 2.017126,-5.375671 1.863762,-7.749224 1.852083,-10.31875 z"
					id="path60720"
				/><path
					style="opacity:1;fill:#66fdfe;fill-opacity:1;fill-rule:evenodd;stroke-width:1.2;stroke-linecap:round;stroke-linejoin:round;stroke-miterlimit:3;paint-order:stroke fill markers"
					d="m 113.50625,48.683333 6.61458,-6.35 -6.87916,2.116666 z"
					id="path60654"
				/><path
					style="opacity:1;fill:#2a78b5;fill-opacity:1;fill-rule:evenodd;stroke-width:1.2;stroke-linecap:round;stroke-linejoin:round;stroke-miterlimit:3;paint-order:stroke fill markers"
					d="m 106.3625,41.804166 c 2.08467,0.735661 3.91754,0.67491 5.55625,0 1.06603,-2.37527 1.37528,-4.75778 1.32292,-7.14375 z"
					id="path60724"
				/><path
					style="opacity:1;fill:#2a78b5;fill-opacity:1;fill-rule:evenodd;stroke-width:1.2;stroke-linecap:round;stroke-linejoin:round;stroke-miterlimit:3;paint-order:stroke fill markers"
					d="m 113.50625,48.683333 c 1.50403,0.28717 3.00542,0.413491 4.49792,0 1.45353,-2.929852 1.73178,-4.581962 2.11666,-6.35 z"
					id="path60726"
				/><path
					style="opacity:1;fill:#66fdfe;fill-opacity:1;fill-rule:evenodd;stroke-width:1.2;stroke-linecap:round;stroke-linejoin:round;stroke-miterlimit:3;paint-order:stroke fill markers"
					d="m 118.00417,50.799999 7.40833,-1.852083 -7.14375,6.35 z"
					id="path60656"
				/><path
					style="opacity:1;fill:#dde4e6;fill-opacity:1;fill-rule:evenodd;stroke-width:1.2;stroke-linecap:round;stroke-linejoin:round;stroke-miterlimit:3;paint-order:stroke fill markers"
					d="m 124.08958,116.94583 v 5.82084 l -8.99583,-15.61042 z"
					id="path67991"
				/><path
					style="opacity:1;fill:#dde4e6;fill-opacity:1;fill-rule:evenodd;stroke-width:1.2;stroke-linecap:round;stroke-linejoin:round;stroke-miterlimit:3;paint-order:stroke fill markers"
					d="m 92.868749,81.756249 6.085416,3.96875 v 3.439583 z"
					id="path67993"
				/><path
					style="opacity:1;fill:#dde4e6;fill-opacity:1;fill-rule:evenodd;stroke-width:1.2;stroke-linecap:round;stroke-linejoin:round;stroke-miterlimit:3;paint-order:stroke fill markers"
					d="m 82.020832,69.056249 -0.529166,2.38125 -6.085417,-5.291667 z"
					id="path67997"
				/></g
			></g
		><metadata id="metadata95790">
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
