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
			></defs
		>
		<!-- svelte-ignore a11y-no-static-element-interactions -->
		<!-- svelte-ignore a11y-mouse-events-have-key-events -->
		<g id="layer1"
			><g
				id="g30759"
				style="filter:url(#filter31138)"
				transform="translate(1.0583333,1.5875)"
				><path
					style="opacity:1;fill:#8c4020;fill-opacity:1;fill-rule:evenodd;stroke-width:3;stroke-linecap:round;stroke-linejoin:round;stroke-miterlimit:3;stroke-opacity:0.498674;paint-order:stroke fill markers"
					d="M 71.437499,6.8791666 74.034371,2.38125 75.594061,8.2020832 82.549999,2.6458333 81.227082,9.5249999 94.456249,2.9104166 89.164582,14.2875 l 9.525,-1.058333 -5.291667,7.408333 0.79375,1.058333 0.264584,-0.264583 h 4.233333 l -5.027083,5.55625 z"
					id="path30631"
				/><path
					style="opacity:1;fill:#de361f;fill-opacity:1;fill-rule:evenodd;stroke-width:3;stroke-linecap:round;stroke-linejoin:round;stroke-miterlimit:3;stroke-opacity:0.498674;paint-order:stroke fill markers"
					d="m 108.21458,31.485416 2.64584,-4.233333 -5.29167,1.852083 -5.02708,-3.439583 6.35,-6.614583 -4.49792,-7.14375 5.82083,7.14375 -5.29166,6.35 2.91041,2.38125 3.175,-2.645834 4.23334,2.116667 z"
					id="path30633"
				/><path
					style="opacity:1;fill:#de361f;fill-opacity:1;fill-rule:evenodd;stroke-width:3;stroke-linecap:round;stroke-linejoin:round;stroke-miterlimit:3;stroke-opacity:0.498674;paint-order:stroke fill markers"
					d="m 114.3,31.485416 6.08542,-6.35 -5.82084,-4.497916 2.64584,-2.38125 1.5875,0.79375 -1.05834,1.322916 1.05834,0.529167 1.5875,-1.5875 -3.43959,-2.38125 -3.96875,3.439583 4.49792,4.497917 -4.7625,6.085417 z"
					id="path30635"
				/><path
					style="opacity:1;fill:#906c32;fill-opacity:1;fill-rule:evenodd;stroke-width:3;stroke-linecap:round;stroke-linejoin:round;stroke-miterlimit:3;stroke-opacity:0.498674;paint-order:stroke fill markers"
					d="m 84.666667,115.8875 3.174999,3.96875 h 19.314584 c 10.47713,-2.62616 11.86873,-8.18295 14.02292,-13.49375 V 39.952083 C 120.865,35.385657 120.32221,30.920264 111.38958,30.1625 H 99.218749 c -2.097781,-0.809898 -3.25117,-2.446659 -4.233334,-4.233334 -0.03258,-3.045319 -0.05879,-6.09274 -1.322916,-8.73125 C 89.816128,12.585193 85.868473,8.0259914 76.464582,6.3499999 H 65.352083 C 58.618782,7.4797118 51.55564,8.0515314 48.154166,14.816666 v 8.202084 c -2.055868,0.845143 -3.318252,2.497179 -4.497917,4.233333 -6.289958,0.171352 -12.316535,0.704778 -12.699999,8.995833 0.608801,5.917429 0.714265,11.342161 4.233333,20.108333 v 10.054167 c -1.127634,1.276646 -1.95724,2.786666 -4.7625,2.749629 h -2.910417 c -2.266749,3.062994 -3.737974,6.168323 -7.408333,9.156621 l -0.529167,1.852083 -1.058333,-2.116667 c -1.389087,1.119054 -2.521064,2.136972 -3.704167,3.175 -1.365518,-0.730207 -3.40822,-1.43314 -5.0270827,-2.116666 v 6.879166 h 7.9374997 l 6.085417,-2.116666 4.233333,-3.96875 h 5.820833 c 2.657762,-3.929612 5.415459,-7.831599 11.377083,-10.847917 h 18.785417 c 0.06961,-2.86697 1.351748,-5.198688 2.910416,-7.408333 -0.919226,-1.425918 -1.722825,-3.110186 -2.116666,-6.085417 0.382023,-6.217809 4.883418,-8.341148 8.466666,-11.377083 h 7.14375 c 3.127514,1.276614 4.323201,3.424861 5.55625,5.55625 1.463833,4.740384 2.530448,9.61886 3.439584,14.552083 4.553414,-1.220363 8.189406,1.026956 11.641664,3.96875 v 17.4625 c -0.41698,3.63319 -0.71648,7.224771 -1.852081,11.1125 V 104.775 c -1.283886,1.48304 -1.97219,2.88995 -4.233334,4.49792 l -0.79375,0.79375 H 87.3125 Z"
					id="path30637"
				/><path
					style="opacity:1;fill:#611d1d;fill-opacity:1;fill-rule:evenodd;stroke-width:3;stroke-linecap:round;stroke-linejoin:round;stroke-miterlimit:3;stroke-opacity:0.498674;paint-order:stroke fill markers"
					d="m 54.239583,120.38542 c 0.607585,-5.07524 2.808519,-8.87255 9.260416,-9.26042 v 9.26042 z"
					id="path30639"
				/><path
					style="opacity:1;fill:#4a3915;fill-opacity:1;fill-rule:evenodd;stroke-width:3;stroke-linecap:round;stroke-linejoin:round;stroke-miterlimit:3;stroke-opacity:0.498674;paint-order:stroke fill markers"
					d="m 74.083332,120.38542 7.9375,-2.64584 -3.96875,-3.96875 v -5.29166 l -10.583333,1.32291 -1.322917,3.96875 z"
					id="path30641"
				/><path
					style="opacity:1;fill:#611d1d;fill-opacity:1;fill-rule:evenodd;stroke-width:3;stroke-linecap:round;stroke-linejoin:round;stroke-miterlimit:3;stroke-opacity:0.498674;paint-order:stroke fill markers"
					d="M 74.083332,120.38542 V 111.125 h -5.291666 l -2.645834,2.64583 10e-7,6.61459 z"
					id="path30643"
				/><path
					style="opacity:1;fill:#4c3516;fill-opacity:1;fill-rule:evenodd;stroke-width:3;stroke-linecap:round;stroke-linejoin:round;stroke-miterlimit:3;stroke-opacity:0.498674;paint-order:stroke fill markers"
					d="m 80.697916,110.06667 h 6.879166 l -2.645832,6.08541 -3.968751,-3.43958 z"
					id="path30645"
				/><path
					style="opacity:1;fill:#4a3915;fill-opacity:1;fill-rule:evenodd;stroke-width:3;stroke-linecap:round;stroke-linejoin:round;stroke-miterlimit:3;stroke-opacity:0.498674;paint-order:stroke fill markers"
					d="m 89.164582,107.95 -9.789583,-1.32292 5.291667,-5.55625 v -6.349998 l -2.645834,-7.408333 1.322917,-1.322917 h 8.995833 l 3.666175,-2.116666 v -5.820834 l -1.020342,-1.767281 v -2.730635 c -0.49601,-0.919631 -1.436254,-1.045178 -2.291357,-1.322917 h -2.471142 c -0.41347,-0.01268 -0.744298,0.472272 -1.058334,1.058333 l -0.42537,1.5875 -0.79375,0.79375 0.689954,0.689954 h 3.96875 v 5.395463 h -7.937499 v -9.525 c 0.836359,-2.008425 2.01084,-4.023567 4.233332,-4.7625 h 6.879166 c 1.750877,0.913985 2.091853,2.760183 2.596873,4.497917 v 21.960416 c -2.010874,0.986746 -2.767917,4.927177 -3.919789,7.937498 -1.344828,2.06176 -3.002444,4.09867 -5.291667,6.08542 z"
					id="path30647"
				/><path
					style="opacity:1;fill:#4a3915;fill-opacity:1;fill-rule:evenodd;stroke-width:3;stroke-linecap:round;stroke-linejoin:round;stroke-miterlimit:3;stroke-opacity:0.498674;paint-order:stroke fill markers"
					d="m 75.670832,86.783332 c 3.159492,-0.117096 5.290996,-1.650808 6.085417,-5.027083 V 71.172916 l 4.233333,-4.233334 C 85.870191,55.987782 84.745509,54.44078 83.872916,50.535416 82.924846,48.755485 82.187087,46.834839 79.374999,46.302083 h -3.96875 c -3.433419,0.452895 -4.628439,2.342271 -5.820833,4.233333 -2.097745,2.734842 -1.399978,5.233539 0,7.672917 0.850496,1.343837 1.29388,2.803289 3.704166,3.704166 h 5.55625 c 0,0 0.264584,-8.73125 0,-8.73125 h -3.704166 v 2.116667 h 1.058333 v 1.322917 c -0.199917,0.343619 -0.536527,0.671419 -1.5875,0.916543 l -1.5875,-0.425368 -0.264582,-2.078675 C 71.821551,51.895492 73.633721,52.111551 74.083333,50.8 H 79.375 c 2.006356,0.971299 1.410634,2.205093 1.680328,3.174999 0.557129,1.724436 0.942123,3.413214 0.965505,5.027084 0.07348,1.371005 -0.312218,2.777807 -1.322919,4.233333 -2.332784,0.450526 -4.313149,1.502808 -6.085417,2.910416 v 15.875 c 0,0 1.058333,4.497917 1.058333,4.7625 z"
					id="path30649"
				/><path
					style="opacity:1;fill:#8c4020;fill-opacity:1;fill-rule:evenodd;stroke-width:3.85714;stroke-linecap:round;stroke-linejoin:round;stroke-miterlimit:3;stroke-opacity:0.498674;paint-order:stroke fill markers"
					d="m 77.296198,87.3125 c 5.379297,3.269065 6.539943,7.486798 6.803571,11.906248 C 79.758785,98.58437 77.250576,95.002198 77.296198,87.3125 Z"
					id="path30651"
				/><path
					style="opacity:1;fill:#8c4020;fill-opacity:1;fill-rule:evenodd;stroke-width:3;stroke-linecap:round;stroke-linejoin:round;stroke-miterlimit:3;stroke-opacity:0.498674;paint-order:stroke fill markers"
					d="m 27.78125,117.73958 c 5.72471,0.56856 10.819355,-0.33171 15.874999,-1.32291 4.523595,-4.48469 7.383342,-9.36371 10.054167,-14.2875 0.440132,-2.568311 0.827717,-5.135029 0.264583,-7.672921 1.446781,-1.954578 2.781877,-4.010308 5.55625,-4.7625 h 5.55625 c 3.761625,0.143755 3.714275,-0.89142 4.7625,-1.5875 0.574205,-3.281196 1.280213,-6.435608 3.704167,-7.9375 V 66.145832 h -6.35 c -1.230121,1.406035 -1.762478,3.05345 -2.116667,4.7625 H 52.652083 c -0.720088,0.714056 -1.29861,1.444448 -2.38125,2.116667 -3.854365,0.885269 -9.137746,-1.246126 -11.377083,3.048482 v 17.059851 7.672918 l -6.879167,3.70417 z"
					id="path30653"
				/><path
					style="opacity:1;fill:#611d1d;fill-opacity:1;fill-rule:evenodd;stroke-width:3;stroke-linecap:round;stroke-linejoin:round;stroke-miterlimit:3;stroke-opacity:0.498674;paint-order:stroke fill markers"
					d="m 74.612499,82.020832 -0.79375,1.058334 c -1.470281,-0.244677 -1.661544,1.041777 -1.5875,2.645833 0.07263,1.772469 0.470182,3.404706 2.116667,4.497917 0.314613,-1.221598 0.24157,-2.673505 1.322916,-3.439584 z"
					id="path30655"
				/><path
					style="opacity:1;fill:#4c3516;fill-opacity:1;fill-rule:evenodd;stroke-width:3;stroke-linecap:round;stroke-linejoin:round;stroke-miterlimit:3;stroke-opacity:0.498674;paint-order:stroke fill markers"
					d="m 92.339582,114.03542 h 2.38125 l 0.264583,5.02708 -2.116666,-0.79375 z"
					id="path30657"
				/><path
					style="opacity:1;fill:#4c3516;fill-opacity:1;fill-rule:evenodd;stroke-width:3;stroke-linecap:round;stroke-linejoin:round;stroke-miterlimit:3;stroke-opacity:0.498674;paint-order:stroke fill markers"
					d="m 102.12917,110.86042 h 3.43958 l 1.5875,-1.05834 2.64583,2.38125 -2.38125,2.64584 -6.35,-1.5875 z"
					id="path30659"
				/><path
					style="opacity:1;fill:#4c3516;fill-opacity:1;fill-rule:evenodd;stroke-width:3;stroke-linecap:round;stroke-linejoin:round;stroke-miterlimit:3;stroke-opacity:0.498674;paint-order:stroke fill markers"
					d="m 115.35833,98.160415 h 3.175 l 1.32292,1.322917 v 3.439588 l -1.32292,0.79375 -3.43958,-2.11667 z"
					id="path30661"
				/><path
					style="opacity:1;fill:#4c3516;fill-opacity:1;fill-rule:evenodd;stroke-width:3;stroke-linecap:round;stroke-linejoin:round;stroke-miterlimit:3;stroke-opacity:0.498674;paint-order:stroke fill markers"
					d="m 116.15208,91.545832 h 4.23334 l -1.85209,-3.175 z"
					id="path30663"
				/><path
					style="opacity:1;fill:#4c3516;fill-opacity:1;fill-rule:evenodd;stroke-width:3;stroke-linecap:round;stroke-linejoin:round;stroke-miterlimit:3;stroke-opacity:0.498674;paint-order:stroke fill markers"
					d="m 118.26875,81.756249 -0.26458,-5.820833 1.85208,0.264583 v 5.55625 z"
					id="path30665"
				/><path
					style="opacity:1;fill:#4c3516;fill-opacity:1;fill-rule:evenodd;stroke-width:3;stroke-linecap:round;stroke-linejoin:round;stroke-miterlimit:3;stroke-opacity:0.498674;paint-order:stroke fill markers"
					d="m 116.94583,60.060416 2.91042,0.264583 -1.32292,1.5875 -1.32291,-0.264583 z"
					id="path30667"
				/><path
					style="opacity:1;fill:#4c3516;fill-opacity:1;fill-rule:evenodd;stroke-width:3;stroke-linecap:round;stroke-linejoin:round;stroke-miterlimit:3;stroke-opacity:0.498674;paint-order:stroke fill markers"
					d="m 117.475,50.270833 3.43958,3.175 -4.23333,1.322916 z"
					id="path30669"
				/><path
					style="opacity:1;fill:#611d1d;fill-opacity:1;fill-rule:evenodd;stroke-width:3;stroke-linecap:round;stroke-linejoin:round;stroke-miterlimit:3;stroke-opacity:0.498674;paint-order:stroke fill markers"
					d="m 55.562499,48.947916 c 1.682246,-4.135649 3.431048,-7.056785 5.291667,-7.9375 l 1.322917,-7.9375 3.968749,-5.291666 h 7.9375 l 7.9375,-5.291667 -5.291666,1.322917 h -7.9375 l -6.614583,5.291666 H 60.854166 V 31.75 h -1.322917 v 3.96875 l -3.968749,7.9375 z"
					id="path30671"
				/><path
					style="opacity:1;fill:#611d1d;fill-opacity:1;fill-rule:evenodd;stroke-width:3;stroke-linecap:round;stroke-linejoin:round;stroke-miterlimit:3;stroke-opacity:0.498674;paint-order:stroke fill markers"
					d="m 107.15625,109.80208 -7.937501,-5.02708 -1.322917,1.85208 4.233338,4.23334 4.49791,1.32291 z"
					id="path30673"
				/><path
					style="opacity:1;fill:#611d1d;fill-opacity:1;fill-rule:evenodd;stroke-width:3.31662;stroke-linecap:round;stroke-linejoin:round;stroke-miterlimit:3;stroke-opacity:0.498674;paint-order:stroke fill markers"
					d="m 121.17917,73.81875 v -5.291667 l -5.82084,5.291667 z"
					id="path30675"
				/><path
					style="opacity:1;fill:#611d1d;fill-opacity:1;fill-rule:evenodd;stroke-width:3;stroke-linecap:round;stroke-linejoin:round;stroke-miterlimit:3;stroke-opacity:0.498674;paint-order:stroke fill markers"
					d="m 121.17917,44.185416 h -10.31875 l 6.87407,3.96875 z"
					id="path30677"
				/><path
					style="opacity:1;fill:#611d1d;fill-opacity:1;fill-rule:evenodd;stroke-width:3;stroke-linecap:round;stroke-linejoin:round;stroke-miterlimit:3;stroke-opacity:0.498674;paint-order:stroke fill markers"
					d="m 48.154166,19.84375 h 6.614583 c 2.759491,1.044924 2.100257,2.756619 2.645834,4.233333 -1.001273,-0.961711 -1.814756,-2.072977 -3.96875,-2.116667 h -5.291667 z"
					id="path30679"
				/><path
					style="opacity:1;fill:#4c3516;fill-opacity:1;fill-rule:evenodd;stroke-width:3;stroke-linecap:round;stroke-linejoin:round;stroke-miterlimit:3;stroke-opacity:0.498674;paint-order:stroke fill markers"
					d="m 107.95,41.804166 4.23333,-4.497916 2.91042,2.38125 -1.85208,2.381249 z"
					id="path30681"
				/><path
					style="opacity:1;fill:#4c3516;fill-opacity:1;fill-rule:evenodd;stroke-width:3;stroke-linecap:round;stroke-linejoin:round;stroke-miterlimit:3;stroke-opacity:0.498674;paint-order:stroke fill markers"
					d="m 100.27708,37.835416 6.87917,-0.264583 -0.26458,-5.820833 -6.61459,2.116666 z"
					id="path30683"
				/><path
					style="opacity:1;fill:#4c3516;fill-opacity:1;fill-rule:evenodd;stroke-width:3;stroke-linecap:round;stroke-linejoin:round;stroke-miterlimit:3;stroke-opacity:0.498674;paint-order:stroke fill markers"
					d="m 92.868749,29.633333 3.175,0.264583 1.322916,1.322917 -2.645833,3.175 h -1.322917 z"
					id="path30685"
				/><path
					style="opacity:1;fill:#4c3516;fill-opacity:1;fill-rule:evenodd;stroke-width:3;stroke-linecap:round;stroke-linejoin:round;stroke-miterlimit:3;stroke-opacity:0.498674;paint-order:stroke fill markers"
					d="m 93.662499,22.754166 -2.910417,3.704167 -2.38125,-2.910417 z"
					id="path30687"
				/><path
					style="opacity:1;fill:#4c3516;fill-opacity:1;fill-rule:evenodd;stroke-width:3;stroke-linecap:round;stroke-linejoin:round;stroke-miterlimit:3;stroke-opacity:0.498674;paint-order:stroke fill markers"
					d="m 88.106249,14.2875 h -4.233333 l -2.910417,2.38125 5.55625,4.7625 1.322917,-3.96875 z"
					id="path30689"
				/><path
					style="opacity:1;fill:#611d1d;fill-opacity:1;fill-rule:evenodd;stroke-width:3;stroke-linecap:round;stroke-linejoin:round;stroke-miterlimit:3;stroke-opacity:0.498674;paint-order:stroke fill markers"
					d="m 75.141666,13.229167 h 5.820833 L 76.729166,15.875 Z"
					id="path30691"
				/><path
					style="opacity:1;fill:#4c3516;fill-opacity:1;fill-rule:evenodd;stroke-width:3;stroke-linecap:round;stroke-linejoin:round;stroke-miterlimit:3;stroke-opacity:0.498674;paint-order:stroke fill markers"
					d="m 64.822916,12.7 h 4.497916 l -0.264583,-3.1750001 -1.5875,-2.38125 -2.910416,1.8520833 z"
					id="path30693"
				/><path
					style="opacity:1;fill:#4c3516;fill-opacity:1;fill-rule:evenodd;stroke-width:3;stroke-linecap:round;stroke-linejoin:round;stroke-miterlimit:3;stroke-opacity:0.498674;paint-order:stroke fill markers"
					d="m 54.768749,15.08125 2.910417,-1.852083 -0.264583,-3.9687504 -3.704167,2.1166664 v 2.38125 z"
					id="path30695"
				/><path
					style="opacity:1;fill:#4c3516;fill-opacity:1;fill-rule:evenodd;stroke-width:3;stroke-linecap:round;stroke-linejoin:round;stroke-miterlimit:3;stroke-opacity:0.498674;paint-order:stroke fill markers"
					d="m 45.243749,28.310416 4.233334,-2.645833 0.264583,3.96875 -1.852083,1.322917 z"
					id="path30697"
				/><path
					style="opacity:1;fill:#4c3516;fill-opacity:1;fill-rule:evenodd;stroke-width:3;stroke-linecap:round;stroke-linejoin:round;stroke-miterlimit:3;stroke-opacity:0.498674;paint-order:stroke fill markers"
					d="m 41.804166,40.745833 h 2.910417 v -5.291667 h -3.175 l -3.175,-1.058333 v 3.175 z"
					id="path30699"
				/><path
					style="opacity:1;fill:#4c3516;fill-opacity:1;fill-rule:evenodd;stroke-width:3;stroke-linecap:round;stroke-linejoin:round;stroke-miterlimit:3;stroke-opacity:0.498674;paint-order:stroke fill markers"
					d="M 43.127083,49.477083 V 45.243749 L 36.5125,42.333333 v 1.852083 l 3.968749,5.55625 z"
					id="path30701"
				/><path
					style="opacity:1;fill:#4c3516;fill-opacity:1;fill-rule:evenodd;stroke-width:3;stroke-linecap:round;stroke-linejoin:round;stroke-miterlimit:3;stroke-opacity:0.498674;paint-order:stroke fill markers"
					d="m 40.481249,58.737499 h 2.38125 l -0.264583,-1.852083 0.529167,-1.058333 v -1.5875 L 41.274999,53.181249 38.1,52.916666 v 2.645833 z"
					id="path30703"
				/><path
					style="opacity:1;fill:#de361f;fill-opacity:1;fill-rule:evenodd;stroke-width:3;stroke-linecap:round;stroke-linejoin:round;stroke-miterlimit:3;stroke-opacity:0.498674;paint-order:stroke fill markers"
					d="M 31.220833,75.670832 H 33.3375 l 3.175,-3.175 v -1.058333 l -0.79375,-0.212685 v -1.110232 l -4.233334,4.233334 z"
					id="path30705"
				/><path
					style="opacity:1;fill:#611d1d;fill-opacity:1;fill-rule:evenodd;stroke-width:3;stroke-linecap:round;stroke-linejoin:round;stroke-miterlimit:3;stroke-opacity:0.498674;paint-order:stroke fill markers"
					d="m 9.7895832,81.227082 -2.6458333,2.38125 v 6.614584 l 2.6458333,-4.7625 z"
					id="path30707"
				/><path
					style="opacity:1;fill:#611d1d;fill-opacity:1;fill-rule:evenodd;stroke-width:3;stroke-linecap:round;stroke-linejoin:round;stroke-miterlimit:3;stroke-opacity:0.498674;paint-order:stroke fill markers"
					d="m 16.66875,82.285416 v 4.7625 l -1.322917,2.645833 -2.38125,-4.497917 z"
					id="path30709"
				/><path
					style="opacity:1;fill:#611d1d;fill-opacity:1;fill-rule:evenodd;stroke-width:3;stroke-linecap:round;stroke-linejoin:round;stroke-miterlimit:3;stroke-opacity:0.498674;paint-order:stroke fill markers"
					d="m 30.691666,79.904166 v 7.9375 l -7.14375,-3.96875 4.233334,-4.233334 h 2.910416 z"
					id="path30711"
				/><path
					style="opacity:1;fill:#611d1d;fill-opacity:1;fill-rule:evenodd;stroke-width:3;stroke-linecap:round;stroke-linejoin:round;stroke-miterlimit:3;stroke-opacity:0.498674;paint-order:stroke fill markers"
					d="m 38.89375,93.662499 2.116667,2.645834 -2.116667,3.439582 -5.55625,2e-6 c 0.719957,-2.556912 2.117892,-4.993338 5.55625,-6.085418 z"
					id="path30713"
				/><path
					style="opacity:1;fill:#611d1d;fill-opacity:1;fill-rule:evenodd;stroke-width:3;stroke-linecap:round;stroke-linejoin:round;stroke-miterlimit:3;stroke-opacity:0.498674;paint-order:stroke fill markers"
					d="m 50.00625,108.47917 -2.645834,-2.38125 0.264584,5.82083 z"
					id="path30715"
				/><path
					style="opacity:1;fill:#611d1d;fill-opacity:1;fill-rule:evenodd;stroke-width:3;stroke-linecap:round;stroke-linejoin:round;stroke-miterlimit:3;stroke-opacity:0.498674;paint-order:stroke fill markers"
					d="m 43.391666,112.18333 1.322917,0.26459 1.322917,1.32291 -1.5875,1.85209 -1.322917,-0.79375 z"
					id="path30717"
				/><path
					style="opacity:1;fill:#611d1d;fill-opacity:1;fill-rule:evenodd;stroke-width:3;stroke-linecap:round;stroke-linejoin:round;stroke-miterlimit:3;stroke-opacity:0.498674;paint-order:stroke fill markers"
					d="m 32.279166,119.0625 6.614584,-2.38125 V 114.3 h -4.497917 c -1.362752,1.54868 -2.12838,3.13263 -2.116667,4.7625 z"
					id="path30719"
				/><path
					style="opacity:1;fill:#de361f;fill-opacity:1;fill-rule:evenodd;stroke-width:3;stroke-linecap:round;stroke-linejoin:round;stroke-miterlimit:3;stroke-opacity:0.498674;paint-order:stroke fill markers"
					d="M 16.139583,5.2916666 24.60625,14.2875 22.754166,15.08125 18.520833,9.5249999 H 17.197916 V 7.6729166 Z"
					id="path30721"
				/><path
					style="opacity:1;fill:#de361f;fill-opacity:1;fill-rule:evenodd;stroke-width:3;stroke-linecap:round;stroke-linejoin:round;stroke-miterlimit:3;stroke-opacity:0.498674;paint-order:stroke fill markers"
					d="M 17.197916,9.5249999 V 16.933333 L 18.25625,16.66875 17.991666,9.5249999 Z"
					id="path30723"
				/><path
					style="opacity:1;fill:#de361f;fill-opacity:1;fill-rule:evenodd;stroke-width:3;stroke-linecap:round;stroke-linejoin:round;stroke-miterlimit:3;stroke-opacity:0.498674;paint-order:stroke fill markers"
					d="m 17.991666,15.08125 4.7625,-0.264584 2.645834,-1.058333 7.14375,7.672917 -3.439584,1.5875 -2.116666,-2.116667 -2.38125,-3.96875 -6.614584,-0.529167 z"
					id="path30725"
				/><path
					style="opacity:1;fill:#de361f;fill-opacity:1;fill-rule:evenodd;stroke-width:3;stroke-linecap:round;stroke-linejoin:round;stroke-miterlimit:3;stroke-opacity:0.498674;paint-order:stroke fill markers"
					d="m 27.516666,20.6375 -8.995833,5.291666 2.38125,1.322917 L 29.36875,22.225 Z"
					id="path30727"
				/><path
					style="opacity:1;fill:#de361f;fill-opacity:1;fill-rule:evenodd;stroke-width:3;stroke-linecap:round;stroke-linejoin:round;stroke-miterlimit:3;stroke-opacity:0.498674;paint-order:stroke fill markers"
					d="m 12.7,50.270833 v 0.79375 H 11.641667 L 11.1125,51.593749 12.7,52.652083 15.345833,50.535416 10.054167,46.302083 v -1.322917 l 9.524999,-9.525 h 2.38125 l -8.995833,8.73125 -0.264583,2.910417 4.7625,3.175 -4.497917,4.233333 -3.4395831,-2.910417 2.1166671,-1.5875 z"
					id="path30729"
				/><path
					style="opacity:1;fill:#de361f;fill-opacity:1;fill-rule:evenodd;stroke-width:3;stroke-linecap:round;stroke-linejoin:round;stroke-miterlimit:3;stroke-opacity:0.498674;paint-order:stroke fill markers"
					d="m 13.229167,25.135416 v 0.79375 H 15.875 V 23.01875 h 0.79375 v -2.116667 h -1.5875 l -6.3500001,3.439583 5.5562501,5.55625 1.058333,-1.852083 h 3.439583 l 2.116667,-0.79375 -2.38125,-1.322917 -3.704167,1.322917 H 13.49375 L 11.641667,25.4 v -1.322917 l 3.174999,-1.322917 v 2.116667 z"
					id="path30731"
				/><path
					style="opacity:1;fill:#de361f;fill-opacity:1;fill-rule:evenodd;stroke-width:3;stroke-linecap:round;stroke-linejoin:round;stroke-miterlimit:3;stroke-opacity:0.498674;paint-order:stroke fill markers"
					d="m 18.785416,27.78125 1.5875,7.9375 1.5875,-0.264584 -1.322916,-8.202083 z"
					id="path30733"
				/><path
					style="opacity:1;fill:#de361f;fill-opacity:1;fill-rule:evenodd;stroke-width:3;stroke-linecap:round;stroke-linejoin:round;stroke-miterlimit:3;stroke-opacity:0.498674;paint-order:stroke fill markers"
					d="m 21.166666,31.75 3.439584,0.264583 3.704166,7.672917 -2.116666,1.852083 -1.058334,-0.79375 1.852084,-1.322917 -3.175,-6.35 h -2.645834 z"
					id="path30735"
				/><path
					style="opacity:1;fill:#de361f;fill-opacity:1;fill-rule:evenodd;stroke-width:3;stroke-linecap:round;stroke-linejoin:round;stroke-miterlimit:3;stroke-opacity:0.498674;paint-order:stroke fill markers"
					d="m 22.754166,38.1 0.529167,0.264583 -0.79375,2.38125 -1.322917,0.264583 -2.116666,2.38125 0.529166,0.79375 1.852084,-0.264583 3.175,-3.175 H 25.4 l 0.79375,0.79375 -1.058334,1.322916 -1.322916,-0.264583 -2.38125,2.38125 -3.704167,-0.264583 v -1.852084 z"
					id="path30737"
				/><path
					style="opacity:1;fill:#de361f;fill-opacity:1;fill-rule:evenodd;stroke-width:3;stroke-linecap:round;stroke-linejoin:round;stroke-miterlimit:3;stroke-opacity:0.498674;paint-order:stroke fill markers"
					d="m 26.19375,41.539583 3.175,3.175 -6.35,7.9375 4.7625,6.614583 -5.027084,-6.085417 -1.058333,-0.79375 6.085417,-7.14375 -2.645834,-2.38125 z"
					id="path30739"
				/><path
					style="opacity:1;fill:#8c4020;fill-opacity:1;fill-rule:evenodd;stroke-width:3;stroke-linecap:round;stroke-linejoin:round;stroke-miterlimit:3;stroke-opacity:0.498674;paint-order:stroke fill markers"
					d="m 28.045833,108.21458 -5.027083,-0.79375 -10.847917,0.79375 -7.4083331,2.38125 0.5291667,1.32292 -0.79375,-0.26458 5.5562504,2.11666 5.556249,1.5875 7.408334,1.05834 2.38125,0.79375 2.910416,-1.85209 3.439584,-2.11666 -0.264584,-5.82084 z"
					id="path30741"
				/><path
					style="opacity:1;fill:#611d1d;fill-opacity:1;fill-rule:evenodd;stroke-width:3;stroke-linecap:round;stroke-linejoin:round;stroke-miterlimit:3;stroke-opacity:0.498674;paint-order:stroke fill markers"
					d="M 14.022916,108.47917 9.5249999,104.775 c -0.4925402,1.4787 -0.7966735,2.967 -0.2645833,4.49792 l 2.3812504,1.5875 z"
					id="path30743"
				/><path
					style="opacity:1;fill:#611d1d;fill-opacity:1;fill-rule:evenodd;stroke-width:3;stroke-linecap:round;stroke-linejoin:round;stroke-miterlimit:3;stroke-opacity:0.498674;paint-order:stroke fill markers"
					d="m 5.8208333,112.7125 c 0.7062811,0.46599 1.6809397,0.22004 2.6458333,0 0.6103037,-0.26337 1.0569668,-0.69838 1.3229166,-1.32292 -5.939529,-0.7674 -5.1354681,-2.27391 -5.0270833,-3.70416 -0.6051631,1.83068 -1.9330301,3.77829 1.0583334,5.02708 z"
					id="path30745"
				/><path
					style="opacity:1;fill:#611d1d;fill-opacity:1;fill-rule:evenodd;stroke-width:3;stroke-linecap:round;stroke-linejoin:round;stroke-miterlimit:3;stroke-opacity:0.498674;paint-order:stroke fill markers"
					d="m 14.022916,112.44792 h -3.439583 c -2.4127634,2.79033 -4.9006415,2.93475 -7.408333,2.38125 0.8450594,0.7838 0.4482695,1.78599 6.879167,1.5875 3.331971,-0.80337 3.282667,-2.48115 3.968749,-3.96875 z"
					id="path30747"
				/><path
					style="opacity:1;fill:#611d1d;fill-opacity:1;fill-rule:evenodd;stroke-width:3;stroke-linecap:round;stroke-linejoin:round;stroke-miterlimit:3;stroke-opacity:0.498674;paint-order:stroke fill markers"
					d="m 10.847917,119.59167 c 2.859244,-0.86826 3.122097,-3.1761 3.704166,-4.49792 0.513009,-1.16499 2.820966,-1.03754 3.439583,-2.11667 L 19.05,115.8875 c -2.637431,3.66338 -5.410269,3.92232 -8.202083,3.70417 z"
					id="path30749"
				/><path
					style="opacity:1;fill:#611d1d;fill-opacity:1;fill-rule:evenodd;stroke-width:3;stroke-linecap:round;stroke-linejoin:round;stroke-miterlimit:3;stroke-opacity:0.498674;paint-order:stroke fill markers"
					d="m 23.283333,112.97708 -4.7625,1.85209 v 1.32291 c 0.802537,2.82079 -2.763687,3.7479 -4.7625,5.29167 6.764035,-0.91162 8.802046,-3.63232 10.847917,-6.35 z"
					id="path30751"
				/><path
					style="opacity:1;fill:#611d1d;fill-opacity:1;fill-rule:evenodd;stroke-width:3;stroke-linecap:round;stroke-linejoin:round;stroke-miterlimit:3;stroke-opacity:0.498674;paint-order:stroke fill markers"
					d="m 22.489583,120.91458 c 2.912523,-1.186 5.734766,-2.50018 7.14375,-5.82083 L 28.839583,114.03542 26.19375,114.3 c -0.921227,2.69347 -2.370564,4.56383 -3.704167,6.61458 z"
					id="path30753"
				/><path
					style="opacity:1;fill:#611d1d;fill-opacity:1;fill-rule:evenodd;stroke-width:3;stroke-linecap:round;stroke-linejoin:round;stroke-miterlimit:3;stroke-opacity:0.498674;paint-order:stroke fill markers"
					d="m 18.520833,109.80208 c 3.063903,0.13453 4.211682,-1.01223 5.027083,-2.38125 l -4.7625,-3.175 c -0.522355,1.84397 -0.7771,3.69294 -0.264583,5.55625 z"
					id="path30755"
				/><path
					style="opacity:1;fill:#611d1d;fill-opacity:1;fill-rule:evenodd;stroke-width:3;stroke-linecap:round;stroke-linejoin:round;stroke-miterlimit:3;stroke-opacity:0.498674;paint-order:stroke fill markers"
					d="M 27.252083,108.74375 H 31.75 l 1.058333,-1.05833 v -2.11667 L 27.78125,101.6 c -0.670055,2.21385 -1.190709,4.47835 -0.529167,7.14375 z"
					id="path30757"
				/></g
			><g id="g30629"
				><path
					style="opacity:1;fill:#8c4020;fill-opacity:1;fill-rule:evenodd;stroke-width:3;stroke-linecap:round;stroke-linejoin:round;stroke-miterlimit:3;stroke-opacity:0.498674;paint-order:stroke fill markers"
					d="M 71.437499,6.8791666 74.034371,2.38125 75.594061,8.2020832 82.549999,2.6458333 81.227082,9.5249999 94.456249,2.9104166 89.164582,14.2875 l 9.525,-1.058333 -5.291667,7.408333 0.79375,1.058333 0.264584,-0.264583 h 4.233333 l -5.027083,5.55625 z"
					id="path16123"
				/><path
					style="opacity:1;fill:#de361f;fill-opacity:1;fill-rule:evenodd;stroke-width:3;stroke-linecap:round;stroke-linejoin:round;stroke-miterlimit:3;stroke-opacity:0.498674;paint-order:stroke fill markers"
					d="m 108.21458,31.485416 2.64584,-4.233333 -5.29167,1.852083 -5.02708,-3.439583 6.35,-6.614583 -4.49792,-7.14375 5.82083,7.14375 -5.29166,6.35 2.91041,2.38125 3.175,-2.645834 4.23334,2.116667 z"
					id="path21247"
				/><path
					style="opacity:1;fill:#de361f;fill-opacity:1;fill-rule:evenodd;stroke-width:3;stroke-linecap:round;stroke-linejoin:round;stroke-miterlimit:3;stroke-opacity:0.498674;paint-order:stroke fill markers"
					d="m 114.3,31.485416 6.08542,-6.35 -5.82084,-4.497916 2.64584,-2.38125 1.5875,0.79375 -1.05834,1.322916 1.05834,0.529167 1.5875,-1.5875 -3.43959,-2.38125 -3.96875,3.439583 4.49792,4.497917 -4.7625,6.085417 z"
					id="path21249"
				/><path
					style="opacity:1;fill:#efeb85;fill-opacity:1;fill-rule:evenodd;stroke-width:3;stroke-linecap:round;stroke-linejoin:round;stroke-miterlimit:3;stroke-opacity:0.498674;paint-order:stroke fill markers"
					d="m 84.666667,115.8875 3.174999,3.96875 h 19.314584 c 10.47713,-2.62616 11.86873,-8.18295 14.02292,-13.49375 V 39.952083 C 120.865,35.385657 120.32221,30.920264 111.38958,30.1625 H 99.218749 c -2.097781,-0.809898 -3.25117,-2.446659 -4.233334,-4.233334 -0.03258,-3.045319 -0.05879,-6.09274 -1.322916,-8.73125 C 89.816128,12.585193 85.868473,8.0259914 76.464582,6.3499999 H 65.352083 C 58.618782,7.4797118 51.55564,8.0515314 48.154166,14.816666 v 8.202084 c -2.055868,0.845143 -3.318252,2.497179 -4.497917,4.233333 -6.289958,0.171352 -12.316535,0.704778 -12.699999,8.995833 0.608801,5.917429 0.714265,11.342161 4.233333,20.108333 v 10.054167 c -1.127634,1.276646 -1.95724,2.786666 -4.7625,2.749629 h -2.910417 c -2.266749,3.062994 -3.737974,6.168323 -7.408333,9.156621 l -0.529167,1.852083 -1.058333,-2.116667 c -1.389087,1.119054 -2.521064,2.136972 -3.704167,3.175 -1.365518,-0.730207 -3.40822,-1.43314 -5.0270827,-2.116666 v 6.879166 h 7.9374997 l 6.085417,-2.116666 4.233333,-3.96875 h 5.820833 c 2.657762,-3.929612 5.415459,-7.831599 11.377083,-10.847917 h 18.785417 c 0.06961,-2.86697 1.351748,-5.198688 2.910416,-7.408333 -0.919226,-1.425918 -1.722825,-3.110186 -2.116666,-6.085417 0.382023,-6.217809 4.883418,-8.341148 8.466666,-11.377083 h 7.14375 c 3.127514,1.276614 4.323201,3.424861 5.55625,5.55625 1.463833,4.740384 2.530448,9.61886 3.439584,14.552083 4.553414,-1.220363 8.189406,1.026956 11.641664,3.96875 v 17.4625 c -0.41698,3.63319 -0.71648,7.224771 -1.852081,11.1125 V 104.775 c -1.283886,1.48304 -1.97219,2.88995 -4.233334,4.49792 l -0.79375,0.79375 H 87.3125 Z"
					id="path3020"
				/><path
					style="opacity:1;fill:#611d1d;fill-rule:evenodd;stroke-width:3;stroke-linecap:round;stroke-linejoin:round;stroke-miterlimit:3;stroke-opacity:0.498674;paint-order:stroke fill markers;fill-opacity:1"
					d="m 54.239583,120.38542 c 0.607585,-5.07524 2.808519,-8.87255 9.260416,-9.26042 v 9.26042 z"
					id="path1032"
				/><path
					style="opacity:1;fill:#efeb85;fill-rule:evenodd;stroke-width:3;stroke-linecap:round;stroke-linejoin:round;stroke-miterlimit:3;stroke-opacity:0.498674;paint-order:stroke fill markers;fill-opacity:1"
					d="m 74.083332,120.38542 7.9375,-2.64584 -3.96875,-3.96875 v -5.29166 l -10.583333,1.32291 -1.322917,3.96875 z"
					id="path1132"
				/><path
					style="opacity:1;fill:#611d1d;fill-opacity:1;fill-rule:evenodd;stroke-width:3;stroke-linecap:round;stroke-linejoin:round;stroke-miterlimit:3;stroke-opacity:0.498674;paint-order:stroke fill markers"
					d="M 74.083332,120.38542 V 111.125 h -5.291666 l -2.645834,2.64583 10e-7,6.61459 z"
					id="path1130"
				/><path
					style="opacity:1;fill:#4c3516;fill-opacity:1;fill-rule:evenodd;stroke-width:3;stroke-linecap:round;stroke-linejoin:round;stroke-miterlimit:3;stroke-opacity:0.498674;paint-order:stroke fill markers"
					d="m 80.697916,110.06667 h 6.879166 l -2.645832,6.08541 -3.968751,-3.43958 z"
					id="path2694"
				/><path
					style="opacity:1;fill:#efeb85;fill-opacity:1;fill-rule:evenodd;stroke-width:3;stroke-linecap:round;stroke-linejoin:round;stroke-miterlimit:3;stroke-opacity:0.498674;paint-order:stroke fill markers"
					d="m 89.164582,107.95 -9.789583,-1.32292 5.291667,-5.55625 v -6.349998 l -2.645834,-7.408333 1.322917,-1.322917 h 8.995833 l 3.666175,-2.116666 v -5.820834 l -1.020342,-1.767281 v -2.730635 c -0.49601,-0.919631 -1.436254,-1.045178 -2.291357,-1.322917 h -2.471142 c -0.41347,-0.01268 -0.744298,0.472272 -1.058334,1.058333 l -0.42537,1.5875 -0.79375,0.79375 0.689954,0.689954 h 3.96875 v 5.395463 l -7.937499,0 v -9.525 c 0.836359,-2.008425 2.01084,-4.023567 4.233332,-4.7625 h 6.879166 c 1.750877,0.913985 2.091853,2.760183 2.596873,4.497917 v 21.960416 c -2.010874,0.986746 -2.767917,4.927177 -3.919789,7.937498 -1.344828,2.06176 -3.002444,4.09867 -5.291667,6.08542 z"
					id="path3352"
				/><path
					style="opacity:1;fill:#efeb85;fill-opacity:1;fill-rule:evenodd;stroke-width:3;stroke-linecap:round;stroke-linejoin:round;stroke-miterlimit:3;stroke-opacity:0.498674;paint-order:stroke fill markers"
					d="m 75.670832,86.783332 c 3.159492,-0.117096 5.290996,-1.650808 6.085417,-5.027083 V 71.172916 l 4.233333,-4.233334 C 85.870191,55.987782 84.745509,54.44078 83.872916,50.535416 82.924846,48.755485 82.187087,46.834839 79.374999,46.302083 h -3.96875 c -3.433419,0.452895 -4.628439,2.342271 -5.820833,4.233333 -2.097745,2.734842 -1.399978,5.233539 0,7.672917 0.850496,1.343837 1.29388,2.803289 3.704166,3.704166 h 5.55625 c 0,0 0.264584,-8.73125 0,-8.73125 h -3.704166 v 2.116667 h 1.058333 v 1.322917 c -0.199917,0.343619 -0.536527,0.671419 -1.5875,0.916543 l -1.5875,-0.425368 -0.264582,-2.078675 C 71.821551,51.895492 73.633721,52.111551 74.083333,50.8 H 79.375 c 2.006356,0.971299 1.410634,2.205093 1.680328,3.174999 0.557129,1.724436 0.942123,3.413214 0.965505,5.027084 0.07348,1.371005 -0.312218,2.777807 -1.322919,4.233333 -2.332784,0.450526 -4.313149,1.502808 -6.085417,2.910416 v 15.875 c 0,0 1.058333,4.497917 1.058333,4.7625 z"
					id="path4806"
				/><path
					style="opacity:1;fill:#8c4020;fill-opacity:1;fill-rule:evenodd;stroke-width:3.85714;stroke-linecap:round;stroke-linejoin:round;stroke-miterlimit:3;stroke-opacity:0.498674;paint-order:stroke fill markers"
					d="m 77.296198,87.3125 c 5.379297,3.269065 6.539943,7.486798 6.803571,11.906248 C 79.758785,98.58437 77.250576,95.002198 77.296198,87.3125 Z"
					id="path4927"
				/><path
					style="opacity:1;fill:#512a1b;fill-opacity:1;fill-rule:evenodd;stroke-width:3;stroke-linecap:round;stroke-linejoin:round;stroke-miterlimit:3;stroke-opacity:0.498674;paint-order:stroke fill markers"
					d="m 27.78125,117.73958 c 5.72471,0.56856 10.819355,-0.33171 15.874999,-1.32291 4.523595,-4.48469 7.383342,-9.36371 10.054167,-14.2875 0.440132,-2.568311 0.827717,-5.135029 0.264583,-7.672921 1.446781,-1.954578 2.781877,-4.010308 5.55625,-4.7625 h 5.55625 c 3.761625,0.143755 3.714275,-0.89142 4.7625,-1.5875 0.574205,-3.281196 1.280213,-6.435608 3.704167,-7.9375 V 66.145832 h -6.35 c -1.230121,1.406035 -1.762478,3.05345 -2.116667,4.7625 H 52.652083 c -0.720088,0.714056 -1.29861,1.444448 -2.38125,2.116667 -3.854365,0.885269 -9.137746,-1.246126 -11.377083,3.048482 v 17.059851 7.672918 l -6.879167,3.70417 z"
					id="path4983"
				/><path
					style="opacity:1;fill:#b12d02;fill-opacity:1;fill-rule:evenodd;stroke-width:3;stroke-linecap:round;stroke-linejoin:round;stroke-miterlimit:3;stroke-opacity:0.498674;paint-order:stroke fill markers"
					d="m 74.612499,82.020832 -0.79375,1.058334 c -1.470281,-0.244677 -1.661544,1.041777 -1.5875,2.645833 0.07263,1.772469 0.470182,3.404706 2.116667,4.497917 0.314613,-1.221598 0.24157,-2.673505 1.322916,-3.439584 z"
					id="path6491"
				/><path
					style="opacity:1;fill:#4c3516;fill-opacity:1;fill-rule:evenodd;stroke-width:3;stroke-linecap:round;stroke-linejoin:round;stroke-miterlimit:3;stroke-opacity:0.498674;paint-order:stroke fill markers"
					d="m 92.339582,114.03542 h 2.38125 l 0.264583,5.02708 -2.116666,-0.79375 z"
					id="path14183"
				/><path
					style="opacity:1;fill:#4c3516;fill-opacity:1;fill-rule:evenodd;stroke-width:3;stroke-linecap:round;stroke-linejoin:round;stroke-miterlimit:3;stroke-opacity:0.498674;paint-order:stroke fill markers"
					d="m 102.12917,110.86042 h 3.43958 l 1.5875,-1.05834 2.64583,2.38125 -2.38125,2.64584 -6.35,-1.5875 z"
					id="path14722"
				/><path
					style="opacity:1;fill:#4c3516;fill-opacity:1;fill-rule:evenodd;stroke-width:3;stroke-linecap:round;stroke-linejoin:round;stroke-miterlimit:3;stroke-opacity:0.498674;paint-order:stroke fill markers"
					d="m 115.35833,98.160415 h 3.175 l 1.32292,1.322917 v 3.439588 l -1.32292,0.79375 -3.43958,-2.11667 z"
					id="path14724"
				/><path
					style="opacity:1;fill:#4c3516;fill-opacity:1;fill-rule:evenodd;stroke-width:3;stroke-linecap:round;stroke-linejoin:round;stroke-miterlimit:3;stroke-opacity:0.498674;paint-order:stroke fill markers"
					d="m 116.15208,91.545832 h 4.23334 l -1.85209,-3.175 z"
					id="path14726"
				/><path
					style="opacity:1;fill:#4c3516;fill-opacity:1;fill-rule:evenodd;stroke-width:3;stroke-linecap:round;stroke-linejoin:round;stroke-miterlimit:3;stroke-opacity:0.498674;paint-order:stroke fill markers"
					d="m 118.26875,81.756249 -0.26458,-5.820833 1.85208,0.264583 v 5.55625 z"
					id="path14728"
				/><path
					style="opacity:1;fill:#4c3516;fill-opacity:1;fill-rule:evenodd;stroke-width:3;stroke-linecap:round;stroke-linejoin:round;stroke-miterlimit:3;stroke-opacity:0.498674;paint-order:stroke fill markers"
					d="m 116.94583,60.060416 2.91042,0.264583 -1.32292,1.5875 -1.32291,-0.264583 z"
					id="path14730"
				/><path
					style="opacity:1;fill:#4c3516;fill-opacity:1;fill-rule:evenodd;stroke-width:3;stroke-linecap:round;stroke-linejoin:round;stroke-miterlimit:3;stroke-opacity:0.498674;paint-order:stroke fill markers"
					d="m 117.475,50.270833 3.43958,3.175 -4.23333,1.322916 z"
					id="path14732"
				/><path
					style="opacity:1;fill:#de361f;fill-opacity:1;fill-rule:evenodd;stroke-width:3;stroke-linecap:round;stroke-linejoin:round;stroke-miterlimit:3;stroke-opacity:0.498674;paint-order:stroke fill markers"
					d="m 55.562499,48.947916 c 1.682246,-4.135649 3.431048,-7.056785 5.291667,-7.9375 l 1.322917,-7.9375 3.968749,-5.291666 h 7.9375 l 7.9375,-5.291667 -5.291666,1.322917 h -7.9375 l -6.614583,5.291666 H 60.854166 V 31.75 h -1.322917 v 3.96875 l -3.968749,7.9375 z"
					id="path14734"
				/><path
					style="opacity:1;fill:#de361f;fill-opacity:1;fill-rule:evenodd;stroke-width:3;stroke-linecap:round;stroke-linejoin:round;stroke-miterlimit:3;stroke-opacity:0.498674;paint-order:stroke fill markers"
					d="m 107.15625,109.80208 -7.937501,-5.02708 -1.322917,1.85208 4.233338,4.23334 4.49791,1.32291 z"
					id="path15982"
				/><path
					style="opacity:1;fill:#de361f;fill-opacity:1;fill-rule:evenodd;stroke-width:3.31662;stroke-linecap:round;stroke-linejoin:round;stroke-miterlimit:3;stroke-opacity:0.498674;paint-order:stroke fill markers"
					d="m 121.17917,73.81875 v -5.291667 l -5.82084,5.291667 z"
					id="path16115"
				/><path
					style="opacity:1;fill:#de361f;fill-opacity:1;fill-rule:evenodd;stroke-width:3;stroke-linecap:round;stroke-linejoin:round;stroke-miterlimit:3;stroke-opacity:0.498674;paint-order:stroke fill markers"
					d="m 121.17917,44.185416 h -10.31875 l 6.87407,3.96875 z"
					id="path16119"
				/><path
					style="opacity:1;fill:#de361f;fill-opacity:1;fill-rule:evenodd;stroke-width:3;stroke-linecap:round;stroke-linejoin:round;stroke-miterlimit:3;stroke-opacity:0.498674;paint-order:stroke fill markers"
					d="m 48.154166,19.84375 h 6.614583 c 2.759491,1.044924 2.100257,2.756619 2.645834,4.233333 -1.001273,-0.961711 -1.814756,-2.072977 -3.96875,-2.116667 h -5.291667 z"
					id="path16121"
				/><path
					style="opacity:1;fill:#4c3516;fill-opacity:1;fill-rule:evenodd;stroke-width:3;stroke-linecap:round;stroke-linejoin:round;stroke-miterlimit:3;stroke-opacity:0.498674;paint-order:stroke fill markers"
					d="m 107.95,41.804166 4.23333,-4.497916 2.91042,2.38125 -1.85208,2.381249 z"
					id="path16125"
				/><path
					style="opacity:1;fill:#4c3516;fill-opacity:1;fill-rule:evenodd;stroke-width:3;stroke-linecap:round;stroke-linejoin:round;stroke-miterlimit:3;stroke-opacity:0.498674;paint-order:stroke fill markers"
					d="m 100.27708,37.835416 6.87917,-0.264583 -0.26458,-5.820833 -6.61459,2.116666 z"
					id="path16235"
				/><path
					style="opacity:1;fill:#4c3516;fill-opacity:1;fill-rule:evenodd;stroke-width:3;stroke-linecap:round;stroke-linejoin:round;stroke-miterlimit:3;stroke-opacity:0.498674;paint-order:stroke fill markers"
					d="m 92.868749,29.633333 3.175,0.264583 1.322916,1.322917 -2.645833,3.175 h -1.322917 z"
					id="path16237"
				/><path
					style="opacity:1;fill:#4c3516;fill-opacity:1;fill-rule:evenodd;stroke-width:3;stroke-linecap:round;stroke-linejoin:round;stroke-miterlimit:3;stroke-opacity:0.498674;paint-order:stroke fill markers"
					d="m 93.662499,22.754166 -2.910417,3.704167 -2.38125,-2.910417 z"
					id="path16239"
				/><path
					style="opacity:1;fill:#4c3516;fill-opacity:1;fill-rule:evenodd;stroke-width:3;stroke-linecap:round;stroke-linejoin:round;stroke-miterlimit:3;stroke-opacity:0.498674;paint-order:stroke fill markers"
					d="m 88.106249,14.2875 h -4.233333 l -2.910417,2.38125 5.55625,4.7625 1.322917,-3.96875 z"
					id="path16241"
				/><path
					style="opacity:1;fill:#de361f;fill-opacity:1;fill-rule:evenodd;stroke-width:3;stroke-linecap:round;stroke-linejoin:round;stroke-miterlimit:3;stroke-opacity:0.498674;paint-order:stroke fill markers"
					d="m 75.141666,13.229167 h 5.820833 L 76.729166,15.875 Z"
					id="path16243"
				/><path
					style="opacity:1;fill:#4c3516;fill-opacity:1;fill-rule:evenodd;stroke-width:3;stroke-linecap:round;stroke-linejoin:round;stroke-miterlimit:3;stroke-opacity:0.498674;paint-order:stroke fill markers"
					d="m 64.822916,12.7 h 4.497916 l -0.264583,-3.1750001 -1.5875,-2.38125 -2.910416,1.8520833 z"
					id="path16245"
				/><path
					style="opacity:1;fill:#4c3516;fill-opacity:1;fill-rule:evenodd;stroke-width:3;stroke-linecap:round;stroke-linejoin:round;stroke-miterlimit:3;stroke-opacity:0.498674;paint-order:stroke fill markers"
					d="m 54.768749,15.08125 2.910417,-1.852083 -0.264583,-3.9687504 -3.704167,2.1166664 v 2.38125 z"
					id="path16247"
				/><path
					style="opacity:1;fill:#4c3516;fill-opacity:1;fill-rule:evenodd;stroke-width:3;stroke-linecap:round;stroke-linejoin:round;stroke-miterlimit:3;stroke-opacity:0.498674;paint-order:stroke fill markers"
					d="m 45.243749,28.310416 4.233334,-2.645833 0.264583,3.96875 -1.852083,1.322917 z"
					id="path16249"
				/><path
					style="opacity:1;fill:#4c3516;fill-opacity:1;fill-rule:evenodd;stroke-width:3;stroke-linecap:round;stroke-linejoin:round;stroke-miterlimit:3;stroke-opacity:0.498674;paint-order:stroke fill markers"
					d="m 41.804166,40.745833 h 2.910417 v -5.291667 h -3.175 l -3.175,-1.058333 v 3.175 z"
					id="path16251"
				/><path
					style="opacity:1;fill:#4c3516;fill-opacity:1;fill-rule:evenodd;stroke-width:3;stroke-linecap:round;stroke-linejoin:round;stroke-miterlimit:3;stroke-opacity:0.498674;paint-order:stroke fill markers"
					d="M 43.127083,49.477083 V 45.243749 L 36.5125,42.333333 v 1.852083 l 3.968749,5.55625 z"
					id="path16253"
				/><path
					style="opacity:1;fill:#4c3516;fill-opacity:1;fill-rule:evenodd;stroke-width:3;stroke-linecap:round;stroke-linejoin:round;stroke-miterlimit:3;stroke-opacity:0.498674;paint-order:stroke fill markers"
					d="m 40.481249,58.737499 h 2.38125 l -0.264583,-1.852083 0.529167,-1.058333 v -1.5875 L 41.274999,53.181249 38.1,52.916666 v 2.645833 z"
					id="path16255"
				/><path
					style="opacity:1;fill:#f9701e;fill-opacity:1;fill-rule:evenodd;stroke-width:3;stroke-linecap:round;stroke-linejoin:round;stroke-miterlimit:3;stroke-opacity:0.498674;paint-order:stroke fill markers"
					d="M 31.220833,75.670832 H 33.3375 l 3.175,-3.175 v -1.058333 l -0.79375,-0.212685 v -1.110232 l -4.233334,4.233334 z"
					id="path16259"
				/><path
					style="opacity:1;fill:#b12d02;fill-opacity:1;fill-rule:evenodd;stroke-width:3;stroke-linecap:round;stroke-linejoin:round;stroke-miterlimit:3;stroke-opacity:0.498674;paint-order:stroke fill markers"
					d="m 9.7895832,81.227082 -2.6458333,2.38125 v 6.614584 l 2.6458333,-4.7625 z"
					id="path17841"
				/><path
					style="opacity:1;fill:#b12d02;fill-opacity:1;fill-rule:evenodd;stroke-width:3;stroke-linecap:round;stroke-linejoin:round;stroke-miterlimit:3;stroke-opacity:0.498674;paint-order:stroke fill markers"
					d="m 16.66875,82.285416 v 4.7625 l -1.322917,2.645833 -2.38125,-4.497917 z"
					id="path17843"
				/><path
					style="opacity:1;fill:#b12d02;fill-opacity:1;fill-rule:evenodd;stroke-width:3;stroke-linecap:round;stroke-linejoin:round;stroke-miterlimit:3;stroke-opacity:0.498674;paint-order:stroke fill markers"
					d="m 30.691666,79.904166 v 7.9375 l -7.14375,-3.96875 4.233334,-4.233334 h 2.910416 z"
					id="path17845"
				/><path
					style="opacity:1;fill:#b12d02;fill-opacity:1;fill-rule:evenodd;stroke-width:3;stroke-linecap:round;stroke-linejoin:round;stroke-miterlimit:3;stroke-opacity:0.498674;paint-order:stroke fill markers"
					d="m 38.89375,93.662499 2.116667,2.645834 -2.116667,3.439582 -5.55625,2e-6 c 0.719957,-2.556912 2.117892,-4.993338 5.55625,-6.085418 z"
					id="path17847"
				/><path
					style="opacity:1;fill:#b12d02;fill-opacity:1;fill-rule:evenodd;stroke-width:3;stroke-linecap:round;stroke-linejoin:round;stroke-miterlimit:3;stroke-opacity:0.498674;paint-order:stroke fill markers"
					d="m 50.00625,108.47917 -2.645834,-2.38125 0.264584,5.82083 z"
					id="path17849"
				/><path
					style="opacity:1;fill:#b12d02;fill-opacity:1;fill-rule:evenodd;stroke-width:3;stroke-linecap:round;stroke-linejoin:round;stroke-miterlimit:3;stroke-opacity:0.498674;paint-order:stroke fill markers"
					d="m 43.391666,112.18333 1.322917,0.26459 1.322917,1.32291 -1.5875,1.85209 -1.322917,-0.79375 z"
					id="path17851"
				/><path
					style="opacity:1;fill:#b12d02;fill-opacity:1;fill-rule:evenodd;stroke-width:3;stroke-linecap:round;stroke-linejoin:round;stroke-miterlimit:3;stroke-opacity:0.498674;paint-order:stroke fill markers"
					d="m 32.279166,119.0625 6.614584,-2.38125 V 114.3 h -4.497917 c -1.362752,1.54868 -2.12838,3.13263 -2.116667,4.7625 z"
					id="path17853"
				/><path
					style="opacity:1;fill:#de361f;fill-opacity:1;fill-rule:evenodd;stroke-width:3;stroke-linecap:round;stroke-linejoin:round;stroke-miterlimit:3;stroke-opacity:0.498674;paint-order:stroke fill markers"
					d="M 16.139583,5.2916666 24.60625,14.2875 22.754166,15.08125 18.520833,9.5249999 H 17.197916 V 7.6729166 Z"
					id="path21257"
				/><path
					style="opacity:1;fill:#de361f;fill-opacity:1;fill-rule:evenodd;stroke-width:3;stroke-linecap:round;stroke-linejoin:round;stroke-miterlimit:3;stroke-opacity:0.498674;paint-order:stroke fill markers"
					d="M 17.197916,9.5249999 V 16.933333 L 18.25625,16.66875 17.991666,9.5249999 Z"
					id="path21259"
				/><path
					style="opacity:1;fill:#de361f;fill-opacity:1;fill-rule:evenodd;stroke-width:3;stroke-linecap:round;stroke-linejoin:round;stroke-miterlimit:3;stroke-opacity:0.498674;paint-order:stroke fill markers"
					d="m 17.991666,15.08125 4.7625,-0.264584 2.645834,-1.058333 7.14375,7.672917 -3.439584,1.5875 -2.116666,-2.116667 -2.38125,-3.96875 -6.614584,-0.529167 z"
					id="path21261"
				/><path
					style="opacity:1;fill:#de361f;fill-opacity:1;fill-rule:evenodd;stroke-width:3;stroke-linecap:round;stroke-linejoin:round;stroke-miterlimit:3;stroke-opacity:0.498674;paint-order:stroke fill markers"
					d="m 27.516666,20.6375 -8.995833,5.291666 2.38125,1.322917 L 29.36875,22.225 Z"
					id="path21263"
				/><path
					style="opacity:1;fill:#de361f;fill-opacity:1;fill-rule:evenodd;stroke-width:3;stroke-linecap:round;stroke-linejoin:round;stroke-miterlimit:3;stroke-opacity:0.498674;paint-order:stroke fill markers"
					d="m 12.7,50.270833 v 0.79375 H 11.641667 L 11.1125,51.593749 12.7,52.652083 15.345833,50.535416 10.054167,46.302083 v -1.322917 l 9.524999,-9.525 h 2.38125 l -8.995833,8.73125 -0.264583,2.910417 4.7625,3.175 -4.497917,4.233333 -3.4395831,-2.910417 2.1166671,-1.5875 z"
					id="path21265"
				/><path
					style="opacity:1;fill:#de361f;fill-opacity:1;fill-rule:evenodd;stroke-width:3;stroke-linecap:round;stroke-linejoin:round;stroke-miterlimit:3;stroke-opacity:0.498674;paint-order:stroke fill markers"
					d="m 13.229167,25.135416 v 0.79375 H 15.875 V 23.01875 h 0.79375 v -2.116667 h -1.5875 l -6.3500001,3.439583 5.5562501,5.55625 1.058333,-1.852083 h 3.439583 l 2.116667,-0.79375 -2.38125,-1.322917 -3.704167,1.322917 H 13.49375 L 11.641667,25.4 v -1.322917 l 3.174999,-1.322917 v 2.116667 z"
					id="path21267"
				/><path
					style="opacity:1;fill:#de361f;fill-opacity:1;fill-rule:evenodd;stroke-width:3;stroke-linecap:round;stroke-linejoin:round;stroke-miterlimit:3;stroke-opacity:0.498674;paint-order:stroke fill markers"
					d="m 18.785416,27.78125 1.5875,7.9375 1.5875,-0.264584 -1.322916,-8.202083 z"
					id="path21269"
				/><path
					style="opacity:1;fill:#de361f;fill-opacity:1;fill-rule:evenodd;stroke-width:3;stroke-linecap:round;stroke-linejoin:round;stroke-miterlimit:3;stroke-opacity:0.498674;paint-order:stroke fill markers"
					d="m 21.166666,31.75 3.439584,0.264583 3.704166,7.672917 -2.116666,1.852083 -1.058334,-0.79375 1.852084,-1.322917 -3.175,-6.35 h -2.645834 z"
					id="path21271"
				/><path
					style="opacity:1;fill:#de361f;fill-opacity:1;fill-rule:evenodd;stroke-width:3;stroke-linecap:round;stroke-linejoin:round;stroke-miterlimit:3;stroke-opacity:0.498674;paint-order:stroke fill markers"
					d="m 22.754166,38.1 0.529167,0.264583 -0.79375,2.38125 -1.322917,0.264583 -2.116666,2.38125 0.529166,0.79375 1.852084,-0.264583 3.175,-3.175 H 25.4 l 0.79375,0.79375 -1.058334,1.322916 -1.322916,-0.264583 -2.38125,2.38125 -3.704167,-0.264583 v -1.852084 z"
					id="path21273"
				/><path
					style="opacity:1;fill:#de361f;fill-opacity:1;fill-rule:evenodd;stroke-width:3;stroke-linecap:round;stroke-linejoin:round;stroke-miterlimit:3;stroke-opacity:0.498674;paint-order:stroke fill markers"
					d="m 26.19375,41.539583 3.175,3.175 -6.35,7.9375 4.7625,6.614583 -5.027084,-6.085417 -1.058333,-0.79375 6.085417,-7.14375 -2.645834,-2.38125 z"
					id="path21275"
				/><path
					style="opacity:1;fill:#512a1b;fill-opacity:1;fill-rule:evenodd;stroke-width:3;stroke-linecap:round;stroke-linejoin:round;stroke-miterlimit:3;stroke-opacity:0.498674;paint-order:stroke fill markers"
					d="m 28.045833,108.21458 -5.027083,-0.79375 -10.847917,0.79375 -7.4083331,2.38125 0.5291667,1.32292 -0.79375,-0.26458 5.5562504,2.11666 5.556249,1.5875 7.408334,1.05834 2.38125,0.79375 2.910416,-1.85209 3.439584,-2.11666 -0.264584,-5.82084 z"
					id="path22731"
				/><path
					style="opacity:1;fill:#b12d02;fill-opacity:1;fill-rule:evenodd;stroke-width:3;stroke-linecap:round;stroke-linejoin:round;stroke-miterlimit:3;stroke-opacity:0.498674;paint-order:stroke fill markers"
					d="M 14.022916,108.47917 9.5249999,104.775 c -0.4925402,1.4787 -0.7966735,2.967 -0.2645833,4.49792 l 2.3812504,1.5875 z"
					id="path17859"
				/><path
					style="opacity:1;fill:#b12d02;fill-opacity:1;fill-rule:evenodd;stroke-width:3;stroke-linecap:round;stroke-linejoin:round;stroke-miterlimit:3;stroke-opacity:0.498674;paint-order:stroke fill markers"
					d="m 5.8208333,112.7125 c 0.7062811,0.46599 1.6809397,0.22004 2.6458333,0 0.6103037,-0.26337 1.0569668,-0.69838 1.3229166,-1.32292 -5.939529,-0.7674 -5.1354681,-2.27391 -5.0270833,-3.70416 -0.6051631,1.83068 -1.9330301,3.77829 1.0583334,5.02708 z"
					id="path17863"
				/><path
					style="opacity:1;fill:#b12d02;fill-opacity:1;fill-rule:evenodd;stroke-width:3;stroke-linecap:round;stroke-linejoin:round;stroke-miterlimit:3;stroke-opacity:0.498674;paint-order:stroke fill markers"
					d="m 14.022916,112.44792 h -3.439583 c -2.4127634,2.79033 -4.9006415,2.93475 -7.408333,2.38125 0.8450594,0.7838 0.4482695,1.78599 6.879167,1.5875 3.331971,-0.80337 3.282667,-2.48115 3.968749,-3.96875 z"
					id="path17865"
				/><path
					style="opacity:1;fill:#b12d02;fill-opacity:1;fill-rule:evenodd;stroke-width:3;stroke-linecap:round;stroke-linejoin:round;stroke-miterlimit:3;stroke-opacity:0.498674;paint-order:stroke fill markers"
					d="m 10.847917,119.59167 c 2.859244,-0.86826 3.122097,-3.1761 3.704166,-4.49792 0.513009,-1.16499 2.820966,-1.03754 3.439583,-2.11667 L 19.05,115.8875 c -2.637431,3.66338 -5.410269,3.92232 -8.202083,3.70417 z"
					id="path17867"
				/><path
					style="opacity:1;fill:#b12d02;fill-opacity:1;fill-rule:evenodd;stroke-width:3;stroke-linecap:round;stroke-linejoin:round;stroke-miterlimit:3;stroke-opacity:0.498674;paint-order:stroke fill markers"
					d="m 23.283333,112.97708 -4.7625,1.85209 v 1.32291 c 0.802537,2.82079 -2.763687,3.7479 -4.7625,5.29167 6.764035,-0.91162 8.802046,-3.63232 10.847917,-6.35 z"
					id="path17869"
				/><path
					style="opacity:1;fill:#b12d02;fill-opacity:1;fill-rule:evenodd;stroke-width:3;stroke-linecap:round;stroke-linejoin:round;stroke-miterlimit:3;stroke-opacity:0.498674;paint-order:stroke fill markers"
					d="m 22.489583,120.91458 c 2.912523,-1.186 5.734766,-2.50018 7.14375,-5.82083 L 28.839583,114.03542 26.19375,114.3 c -0.921227,2.69347 -2.370564,4.56383 -3.704167,6.61458 z"
					id="path17871"
				/><path
					style="opacity:1;fill:#b12d02;fill-opacity:1;fill-rule:evenodd;stroke-width:3;stroke-linecap:round;stroke-linejoin:round;stroke-miterlimit:3;stroke-opacity:0.498674;paint-order:stroke fill markers"
					d="m 18.520833,109.80208 c 3.063903,0.13453 4.211682,-1.01223 5.027083,-2.38125 l -4.7625,-3.175 c -0.522355,1.84397 -0.7771,3.69294 -0.264583,5.55625 z"
					id="path17857"
				/><path
					style="opacity:1;fill:#b12d02;fill-opacity:1;fill-rule:evenodd;stroke-width:3;stroke-linecap:round;stroke-linejoin:round;stroke-miterlimit:3;stroke-opacity:0.498674;paint-order:stroke fill markers"
					d="M 27.252083,108.74375 H 31.75 l 1.058333,-1.05833 v -2.11667 L 27.78125,101.6 c -0.670055,2.21385 -1.190709,4.47835 -0.529167,7.14375 z"
					id="path17855"
				/></g
			><g
				id="g80345"
				style="filter:url(#filter80724)"
				transform="matrix(0.951311,0,0,0.951311,-1.0266289,6.7275384)"
			/><g
				id="g80339"
				transform="matrix(0.951311,0,0,0.951311,-1.5300308,6.2241364)"
			/></g
		><metadata id="metadata31866">
			<!-- svelte-ignore illegal-attribute-character -->
			<!-- 	data-license="https://creativecommons.org/licenses/by-nc-sa/4.0/" data-author="Doriel Rivalet"--></metadata
		></svg
	>
</div>
