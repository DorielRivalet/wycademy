<!-- Created with Inkscape (http://www.inkscape.org/) -->
<script lang="ts">
	import { blendColor } from '$lib/client/modules/color-blend';
	interface Props {
		color?: string;
		size?: string;
	}

	let { color = '#ffffff', size = '100%' }: Props = $props();

	let targetColor = $derived(color);
</script>

<svg
	xmlns="http://www.w3.org/2000/svg"
	width={size}
	viewBox="0 0 16.933333 16.933334"
	version="1.1"
	id="svg8"
>
	<defs id="defs2" />

	<g id="layer1" transform="translate(0,-280.06665)">
		<path
			style="fill:{blendColor(
				'#ffffff',
				targetColor,
			)};stroke:#000000;stroke-width:0.5291667;stroke-linecap:round;stroke-linejoin:round;stroke-miterlimit:4;stroke-dasharray:none;stroke-opacity:1;fill-opacity:1"
			d="m 4.0728621,286.34434 c 0,0 -1.3196433,1.97112 -1.5200953,3.47451 -0.2004523,1.50339 0.5679477,3.42439 1.9377041,4.40995 1.3697562,0.98555 4.209495,0.63476 5.0614166,0.0167 0.8519215,-0.61806 2.3553125,-3.02349 2.4221305,-3.77518 0.06682,-0.7517 -7.9011559,-4.12598 -7.9011559,-4.12598 z"
			id="path836"
		/>
		<path
			style="fill:{blendColor(
				'#ffffff',
				targetColor,
			)};stroke:#000000;stroke-width:0.5291667;stroke-linecap:round;stroke-linejoin:round;stroke-miterlimit:4;stroke-dasharray:none;stroke-opacity:1;fill-opacity:1"
			d="m 10.853193,282.22353 c -0.257783,0.0328 -0.844541,0.76186 -0.9272227,0.76186 -0.08268,0 -1.3878815,-0.60831 -2.5336221,-0.60831 -1.1457403,0 -2.5513393,0.4016 -3.4490327,1.6064 -0.8976934,1.2048 -0.8504465,2.24424 -0.2126115,2.64584 0.6378348,0.4016 8.150111,4.70108 8.764323,4.67745 0.614211,-0.0236 2.007998,-1.77176 1.913504,-3.42541 -0.09449,-1.65364 -1.795387,-3.30729 -2.173363,-3.54352 -0.377976,-0.23624 0.33884,-0.88881 0.22442,-1.12212 -0.226742,-0.46236 -1.395861,-1.01896 -1.606395,-0.99219 z"
			id="path832"
		/>
		<path
			style="color:#000000;font-style:normal;font-variant:normal;font-weight:normal;font-stretch:normal;font-size:medium;line-height:normal;font-family:sans-serif;font-variant-ligatures:normal;font-variant-position:normal;font-variant-caps:normal;font-variant-numeric:normal;font-variant-alternates:normal;font-feature-settings:normal;text-indent:0;text-align:start;text-decoration:none;text-decoration-line:none;text-decoration-style:solid;text-decoration-color:#000000;letter-spacing:normal;word-spacing:normal;text-transform:none;writing-mode:lr-tb;direction:ltr;text-orientation:mixed;dominant-baseline:auto;baseline-shift:baseline;text-anchor:start;white-space:normal;shape-padding:0;clip-rule:nonzero;display:inline;overflow:visible;visibility:visible;opacity:1;isolation:auto;mix-blend-mode:normal;color-interpolation:sRGB;color-interpolation-filters:linearRGB;solid-color:#000000;solid-opacity:1;vector-effect:none;fill:#000000;fill-opacity:1;fill-rule:nonzero;stroke:none;stroke-width:0.79375005;stroke-linecap:butt;stroke-linejoin:miter;stroke-miterlimit:4;stroke-dasharray:none;stroke-dashoffset:0;stroke-opacity:1;color-rendering:auto;image-rendering:auto;shape-rendering:auto;text-rendering:auto;enable-background:accumulate"
			d="m 8.0364986,282.2809 -0.6778138,0.26886 c 0,0 0.4920419,0.68277 1.5291057,1.50378 1.0370635,0.82101 2.6371815,1.80363 4.8947915,2.47065 l -0.0012,-0.78677 c -2.152327,-0.63591 -3.433614,-1.53913 -4.4010721,-2.30503 -0.9674578,-0.76591 -1.3437683,-1.15149 -1.3437683,-1.15149 z m -2.2518781,0.17119 -0.6175332,0.50178 c 0,0 3.466391,4.28107 9.2325117,5.48235 l 0.160197,-0.77721 c -5.4591998,-1.13734 -8.7751755,-5.20692 -8.7751755,-5.20692 z m -1.6660482,1.39061 -0.5922118,0.5271 c 0,0 3.4290241,3.83076 10.3223675,5.86321 l 0.224792,-0.76171 c -6.7039942,-1.97662 -9.9549477,-5.6286 -9.9549477,-5.6286 z m -0.5844603,1.46865 c -0.3363109,-6.4e-4 -0.5209604,0.39107 -0.3064413,0.65009 0,0 0.6775077,0.82901 2.1895304,1.87895 1.5120228,1.04994 3.8805782,2.34732 7.3204839,3.36155 0.513606,0.16026 0.742777,-0.61808 0.224275,-0.76171 -3.3587632,-0.9903 -5.6468889,-2.24884 -7.0915565,-3.252 -1.4446677,-1.00317 -2.0257162,-1.72444 -2.0257162,-1.72444 -0.074766,-0.0956 -0.1891853,-0.1518 -0.3105753,-0.15244 z"
			id="path838"
		/>
	</g>
</svg>
