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
	id="svg4846"
>
	<defs id="defs4840" />

	<g id="layer2">
		<path
			style="opacity:1;vector-effect:none;fill:{blendColor(
				'#d5d5d5',
				targetColor,
			)};fill-opacity:1;fill-rule:evenodd;stroke:#000000;stroke-width:0.52916676;stroke-linecap:butt;stroke-linejoin:round;stroke-miterlimit:4;stroke-dasharray:none;stroke-dashoffset:0;stroke-opacity:1"
			d="m 9.3052758,4.9724598 c 0,-1.397683 2.7953662,-3.3544391 5.3111962,-3.3544391 v 0.5590732 c 0,0 -2.236293,1.1181463 -2.236293,3.0749024 0,1.956756 -3.0749032,-0.2795365 -3.0749032,-0.2795365 z"
			id="path868"
		/>
		<path
			style="opacity:1;vector-effect:none;fill:{blendColor(
				'#ffffff',
				targetColor,
			)};fill-opacity:1;fill-rule:evenodd;stroke:none;stroke-width:0.52916676;stroke-linecap:butt;stroke-linejoin:round;stroke-miterlimit:4;stroke-dasharray:none;stroke-dashoffset:0;stroke-opacity:1"
			d="m 11.821106,10.004119 c 0,2.795365 -1.677219,5.311194 -4.4725864,5.311194 v -0.559074 c 0,0 1.3976828,-0.838609 1.3976828,-2.236292 0,-1.397683 -0.5590732,-2.515828 -0.5590732,-2.515828 z"
			id="path864-5"
		/>
		<path
			style="color:#000000;font-style:normal;font-variant:normal;font-weight:normal;font-stretch:normal;font-size:medium;line-height:normal;font-family:sans-serif;font-variant-ligatures:normal;font-variant-position:normal;font-variant-caps:normal;font-variant-numeric:normal;font-variant-alternates:normal;font-feature-settings:normal;text-indent:0;text-align:start;text-decoration:none;text-decoration-line:none;text-decoration-style:solid;text-decoration-color:#000000;letter-spacing:normal;word-spacing:normal;text-transform:none;writing-mode:lr-tb;direction:ltr;text-orientation:mixed;dominant-baseline:auto;baseline-shift:baseline;text-anchor:start;white-space:normal;shape-padding:0;clip-rule:nonzero;display:inline;overflow:visible;visibility:visible;opacity:1;isolation:auto;mix-blend-mode:normal;color-interpolation:sRGB;color-interpolation-filters:linearRGB;solid-color:#000000;solid-opacity:1;vector-effect:none;fill:{blendColor(
				'#d5d5d5',
				targetColor,
			)};fill-opacity:1;fill-rule:evenodd;stroke:none;stroke-width:0.52916676;stroke-linecap:butt;stroke-linejoin:round;stroke-miterlimit:4;stroke-dasharray:none;stroke-dashoffset:0;stroke-opacity:1;color-rendering:auto;image-rendering:auto;shape-rendering:auto;text-rendering:auto;enable-background:accumulate"
			d="m 8.8588699,11.145789 -0.2269858,0.51175 2.5174809,1.11842 0.226986,-0.51175 z"
			id="path900"
		/>
		<path
			style="color:#000000;font-style:normal;font-variant:normal;font-weight:normal;font-stretch:normal;font-size:medium;line-height:normal;font-family:sans-serif;font-variant-ligatures:normal;font-variant-position:normal;font-variant-caps:normal;font-variant-numeric:normal;font-variant-alternates:normal;font-feature-settings:normal;text-indent:0;text-align:start;text-decoration:none;text-decoration-line:none;text-decoration-style:solid;text-decoration-color:#000000;letter-spacing:normal;word-spacing:normal;text-transform:none;writing-mode:lr-tb;direction:ltr;text-orientation:mixed;dominant-baseline:auto;baseline-shift:baseline;text-anchor:start;white-space:normal;shape-padding:0;clip-rule:nonzero;display:inline;overflow:visible;visibility:visible;opacity:1;isolation:auto;mix-blend-mode:normal;color-interpolation:sRGB;color-interpolation-filters:linearRGB;solid-color:#000000;solid-opacity:1;vector-effect:none;fill:{blendColor(
				'#d5d5d5',
				targetColor,
			)};fill-opacity:1;fill-rule:evenodd;stroke:none;stroke-width:0.52916676;stroke-linecap:butt;stroke-linejoin:round;stroke-miterlimit:4;stroke-dasharray:none;stroke-dashoffset:0;stroke-opacity:1;color-rendering:auto;image-rendering:auto;shape-rendering:auto;text-rendering:auto;enable-background:accumulate"
			d="m 8.5926774,13.108185 -0.251748,0.499369 1.6776326,0.839848 0.249685,-0.49937 z"
			id="path902"
		/>
		<path
			style="opacity:1;vector-effect:none;fill:{blendColor(
				'#ffffff',
				targetColor,
			)};fill-opacity:1;fill-rule:evenodd;stroke:#000000;stroke-width:0.26458335;stroke-linecap:butt;stroke-linejoin:miter;stroke-miterlimit:4;stroke-dasharray:none;stroke-dashoffset:0;stroke-opacity:1"
			d="M 9.5848124,6.0906062 9.3052758,5.8110695 V 4.9724598 H 12.38018 l 1.677219,0.8386097 1.397682,1.3976829 0.279538,0.8386098 H 14.336935 L 11.54157,7.7678256 Z"
			id="path912"
		/>
		<path
			style="color:#000000;font-style:normal;font-variant:normal;font-weight:normal;font-stretch:normal;font-size:medium;line-height:normal;font-family:sans-serif;font-variant-ligatures:normal;font-variant-position:normal;font-variant-caps:normal;font-variant-numeric:normal;font-variant-alternates:normal;font-feature-settings:normal;text-indent:0;text-align:start;text-decoration:none;text-decoration-line:none;text-decoration-style:solid;text-decoration-color:#000000;letter-spacing:normal;word-spacing:normal;text-transform:none;writing-mode:lr-tb;direction:ltr;text-orientation:mixed;dominant-baseline:auto;baseline-shift:baseline;text-anchor:start;white-space:normal;shape-padding:0;clip-rule:nonzero;display:inline;overflow:visible;visibility:visible;opacity:1;isolation:auto;mix-blend-mode:normal;color-interpolation:sRGB;color-interpolation-filters:linearRGB;solid-color:#000000;solid-opacity:1;vector-effect:none;fill:{blendColor(
				'#d5d5d5',
				targetColor,
			)};fill-opacity:1;fill-rule:evenodd;stroke:none;stroke-width:0.52916676;stroke-linecap:butt;stroke-linejoin:round;stroke-miterlimit:4;stroke-dasharray:none;stroke-dashoffset:0;stroke-opacity:1;color-rendering:auto;image-rendering:auto;shape-rendering:auto;text-rendering:auto;enable-background:accumulate"
			d="m 10.144437,5.8116196 v 0.5592108 c 1.226854,0 2.164995,0.2055066 2.810498,0.5282581 0.645503,0.3227513 0.992999,0.74673 1.110167,1.2154063 l 0.542703,-0.134128 C 14.445438,7.3308968 13.9568,6.7758095 13.204619,6.3997194 12.452439,6.0236294 11.433411,5.8116196 10.144437,5.8116196 Z"
			id="path904"
		/>
		<path
			style="opacity:1;vector-effect:none;fill:none;fill-opacity:1;fill-rule:evenodd;stroke:#000000;stroke-width:0.52916676;stroke-linecap:butt;stroke-linejoin:round;stroke-miterlimit:4;stroke-dasharray:none;stroke-dashoffset:0;stroke-opacity:1"
			d="M 9.3052758,5.2519963 V 4.9724598 h 2.5158302 c 1.67722,0 3.913513,1.9567561 3.913513,2.7953658 l -1e-6,0.2795365 c -2.51583,0 -5.311195,-0.8386098 -6.4293423,0 z"
			id="path866"
		/>
		<path
			style="opacity:1;vector-effect:none;fill:{blendColor(
				'#d5d5d5',
				targetColor,
			)};fill-opacity:1;fill-rule:evenodd;stroke:#000000;stroke-width:0.52916676;stroke-linecap:butt;stroke-linejoin:round;stroke-miterlimit:4;stroke-dasharray:none;stroke-dashoffset:0;stroke-opacity:1"
			d="M 7.3485197,6.0906062 V 10.004119 H 7.0689832 c -0.2795367,0 -0.2795367,1.118145 -1.9567558,1.118145 -1.6772195,0 -2.5158292,-0.83861 -2.5158292,-2.5158286 l -0.5590735,-2e-7 c 0,0 -0.8386098,0 -0.8386098,-0.8386097 V 5.5315329 L 2.3168609,4.4133865 2.8759344,4.9724597 2.0373247,5.8110694 v 1.6772195 c 0,0 6.44e-5,0.2855215 0.2795362,0.2795366 H 2.5963982 V 7.2087523 c 0,-0.5590732 1.3976821,-1.956756 2.5158292,-1.956756 h 2.2362922 z"
			id="path858"
		/>
		<path
			style="opacity:1;vector-effect:none;fill:{blendColor(
				'#d5d5d5',
				targetColor,
			)};fill-opacity:1;fill-rule:evenodd;stroke:#000000;stroke-width:0.52916676;stroke-linecap:butt;stroke-linejoin:round;stroke-miterlimit:4;stroke-dasharray:none;stroke-dashoffset:0;stroke-opacity:1"
			d="m 7.3485197,5.2519963 h 1.9567561 v 0.5590732 l 0.2795366,0.2795367 h 0.5590746 l 1.397683,1.3976829 0.279536,0.8386097 V 10.004119 H 7.3485197 Z"
			id="path862"
		/>
		<path
			style="opacity:1;vector-effect:none;fill:none;fill-opacity:1;fill-rule:evenodd;stroke:#000000;stroke-width:0.52916676;stroke-linecap:butt;stroke-linejoin:round;stroke-miterlimit:4;stroke-dasharray:none;stroke-dashoffset:0;stroke-opacity:1"
			d="m 11.821106,10.004119 c 0,2.795365 -1.677219,5.311194 -4.4725864,5.311194 v -0.559074 c 0,0 1.3976829,-0.838609 1.3976829,-2.236292 0,-1.397683 -0.5590732,-2.515828 -0.5590732,-2.515828 z"
			id="path864"
		/>
		<path
			style="opacity:1;vector-effect:none;fill:#000000;fill-opacity:1;fill-rule:evenodd;stroke:none;stroke-width:0.26458335;stroke-linecap:butt;stroke-linejoin:miter;stroke-miterlimit:4;stroke-dasharray:none;stroke-dashoffset:0;stroke-opacity:1"
			d="m 4.2736176,7.2087524 c 0,0 -1.118147,0 -1.118147,1.1181464 0,1.1181463 1.118147,1.1181463 1.118147,1.1181463 z"
			id="path929"
		/>
	</g>
</svg>
