<!--
  ~ © 2024 Doriel Rivalet
  ~ Use of this source code is governed by a MIT license that can be
  ~ found in the LICENSE file.
-->

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

<svg width={size} viewBox="0 0 16.933333 16.933334" version="1.1" id="svg4846">
	<g id="layer1" transform="translate(0,-280.06665)">
		<path
			style="display:inline;opacity:1;vector-effect:none;fill:{blendColor(
				'#858585',
				targetColor,
			)};fill-opacity:1;fill-rule:evenodd;stroke:#000000;stroke-width:2;stroke-linecap:butt;stroke-linejoin:round;stroke-miterlimit:4;stroke-dasharray:none;stroke-dashoffset:0;stroke-opacity:1"
			d="M 27.5 5.5 L 19.5 13.5 L 24.5 18.5 L 31.5 16.5 L 28.5 5.5 L 27.5 5.5 z M 44.5 10.5 L 37.5 18.5 L 40.5 21.5 L 48.5 20.5 L 45.5 10.5 L 44.5 10.5 z M 48.5 27.5 L 36.5 35.5 L 47.5 40.5 L 48.5 40.5 L 48.5 27.5 z M 33.5 36.5 L 20.5 41.5 L 28.5 48.5 L 29.5 48.5 L 33.5 36.5 z "
			id="path1805"
			transform="matrix(0.26458334,0,0,0.26458334,0,280.06665)"
		/>
		<path
			style="display:inline;opacity:1;vector-effect:none;fill:{blendColor(
				'#d5d5d5',
				targetColor,
			)};fill-opacity:1;fill-rule:evenodd;stroke:#000000;stroke-width:0.5291667;stroke-linecap:butt;stroke-linejoin:round;stroke-miterlimit:4;stroke-dasharray:none;stroke-dashoffset:0;stroke-opacity:1"
			d="m 3.0427174,283.37396 c 2.910418,0 6.6145836,1.85208 8.7312496,1.85208 h 2.645834 v 1.05833 c 0,0.52917 -5.5562496,5.29167 -11.3770836,5.29167 z"
			id="path1793"
		/>
		<ellipse
			style="display:inline;opacity:1;fill:{blendColor(
				'#ffffff',
				targetColor,
			)};fill-opacity:1;fill-rule:nonzero;stroke:#000000;stroke-width:0.5291667;stroke-linecap:round;stroke-linejoin:round;stroke-miterlimit:4;stroke-dasharray:none;stroke-dashoffset:0;stroke-opacity:1;paint-order:normal"
			id="path1788"
			cx="2.9104264"
			cy="287.47501"
			rx="1.7197917"
			ry="4.1010418"
		/>
		<ellipse
			style="display:inline;opacity:1;fill:#000000;fill-opacity:1;fill-rule:nonzero;stroke:none;stroke-width:0.5291667;stroke-linecap:round;stroke-linejoin:round;stroke-miterlimit:4;stroke-dasharray:none;stroke-dashoffset:0;stroke-opacity:1;paint-order:normal"
			id="path1786"
			cx="2.9104264"
			cy="287.47501"
			rx="0.66145831"
			ry="1.4552084"
		/>
		<path
			style="display:inline;opacity:1;vector-effect:none;fill:none;fill-opacity:1;fill-rule:evenodd;stroke:#000000;stroke-width:0.5291667;stroke-linecap:butt;stroke-linejoin:round;stroke-miterlimit:4;stroke-dasharray:none;stroke-dashoffset:0;stroke-opacity:1"
			d="m 7.8052194,284.43229 c 0,0 0.529165,1.32292 0.529165,2.91042 0,1.5875 -0.529167,3.175 -0.529167,3.175"
			id="path1795"
		/>
		<path
			style="display:inline;opacity:1;vector-effect:none;fill:none;fill-opacity:1;fill-rule:evenodd;stroke:#000000;stroke-width:0.5291667;stroke-linecap:butt;stroke-linejoin:round;stroke-miterlimit:4;stroke-dasharray:none;stroke-dashoffset:0;stroke-opacity:1"
			d="m 11.244802,285.22604 c 0,0 0.264582,0.79375 0.264582,1.85208 10e-7,1.05834 -0.264582,1.85209 -0.264582,1.85209"
			id="path1797"
		/>
		<path
			style="color:#000000;font-style:normal;font-variant:normal;font-weight:normal;font-stretch:normal;font-size:medium;line-height:normal;font-family:sans-serif;font-variant-ligatures:normal;font-variant-position:normal;font-variant-caps:normal;font-variant-numeric:normal;font-variant-alternates:normal;font-feature-settings:normal;text-indent:0;text-align:start;text-decoration:none;text-decoration-line:none;text-decoration-style:solid;text-decoration-color:#000000;letter-spacing:normal;word-spacing:normal;text-transform:none;writing-mode:lr-tb;direction:ltr;text-orientation:mixed;dominant-baseline:auto;baseline-shift:baseline;text-anchor:start;white-space:normal;shape-padding:0;clip-rule:nonzero;display:inline;overflow:visible;visibility:visible;opacity:1;isolation:auto;mix-blend-mode:normal;color-interpolation:sRGB;color-interpolation-filters:linearRGB;solid-color:#000000;solid-opacity:1;vector-effect:none;fill:#000000;fill-opacity:1;fill-rule:evenodd;stroke:none;stroke-width:0.5291667;stroke-linecap:butt;stroke-linejoin:round;stroke-miterlimit:4;stroke-dasharray:none;stroke-dashoffset:0;stroke-opacity:1;color-rendering:auto;image-rendering:auto;shape-rendering:auto;text-rendering:auto;enable-background:accumulate"
			d="m 14.146484,291.04688 c -0.172654,0.005 -0.294011,0.17193 -0.246093,0.33789 l 0.529297,1.85156 c 0.05504,0.19418 0.298475,0.25773 0.441406,0.11523 l 1.058594,-1.05859 c 0.127818,-0.12759 0.09309,-0.3429 -0.06836,-0.42383 l -1.58789,-0.79492 c -0.03939,-0.0195 -0.08303,-0.0289 -0.126954,-0.0273 z"
			id="path1807"
		/>
		<path
			style="color:#000000;font-style:normal;font-variant:normal;font-weight:normal;font-stretch:normal;font-size:medium;line-height:normal;font-family:sans-serif;font-variant-ligatures:normal;font-variant-position:normal;font-variant-caps:normal;font-variant-numeric:normal;font-variant-alternates:normal;font-feature-settings:normal;text-indent:0;text-align:start;text-decoration:none;text-decoration-line:none;text-decoration-style:solid;text-decoration-color:#000000;letter-spacing:normal;word-spacing:normal;text-transform:none;writing-mode:lr-tb;direction:ltr;text-orientation:mixed;dominant-baseline:auto;baseline-shift:baseline;text-anchor:start;white-space:normal;shape-padding:0;clip-rule:nonzero;display:inline;overflow:visible;visibility:visible;opacity:1;isolation:auto;mix-blend-mode:normal;color-interpolation:sRGB;color-interpolation-filters:linearRGB;solid-color:#000000;solid-opacity:1;vector-effect:none;fill:#000000;fill-opacity:1;fill-rule:evenodd;stroke:none;stroke-width:0.5291667;stroke-linecap:butt;stroke-linejoin:round;stroke-miterlimit:4;stroke-dasharray:none;stroke-dashoffset:0;stroke-opacity:1;color-rendering:auto;image-rendering:auto;shape-rendering:auto;text-rendering:auto;enable-background:accumulate"
			d="m 10.441406,292.63477 c -0.142348,0.005 -0.255431,0.12124 -0.255859,0.26367 v 2.38086 c -9.38e-4,0.18177 0.177468,0.31034 0.349609,0.25195 l 1.587891,-0.5293 c 0.178774,-0.0593 0.240102,-0.28111 0.117187,-0.42383 l -1.58789,-1.85156 c -0.05264,-0.0612 -0.130306,-0.095 -0.210938,-0.0918 z"
			id="path1809"
		/>
		<path
			style="color:#000000;font-style:normal;font-variant:normal;font-weight:normal;font-stretch:normal;font-size:medium;line-height:normal;font-family:sans-serif;font-variant-ligatures:normal;font-variant-position:normal;font-variant-caps:normal;font-variant-numeric:normal;font-variant-alternates:normal;font-feature-settings:normal;text-indent:0;text-align:start;text-decoration:none;text-decoration-line:none;text-decoration-style:solid;text-decoration-color:#000000;letter-spacing:normal;word-spacing:normal;text-transform:none;writing-mode:lr-tb;direction:ltr;text-orientation:mixed;dominant-baseline:auto;baseline-shift:baseline;text-anchor:start;white-space:normal;shape-padding:0;clip-rule:nonzero;display:inline;overflow:visible;visibility:visible;opacity:1;isolation:auto;mix-blend-mode:normal;color-interpolation:sRGB;color-interpolation-filters:linearRGB;solid-color:#000000;solid-opacity:1;vector-effect:none;fill:#000000;fill-opacity:1;fill-rule:evenodd;stroke:none;stroke-width:0.5291667;stroke-linecap:butt;stroke-linejoin:round;stroke-miterlimit:4;stroke-dasharray:none;stroke-dashoffset:0;stroke-opacity:1;color-rendering:auto;image-rendering:auto;shape-rendering:auto;text-rendering:auto;enable-background:accumulate"
			d="m 5.9257812,293.16406 c -0.042609,0.004 -0.083494,0.0192 -0.1191406,0.043 L 4.21875,294.26562 c -0.1496081,0.0996 -0.1585086,0.31619 -0.017578,0.42774 l 1.3222656,1.05859 c 0.1615259,0.12906 0.4020322,0.0313 0.4277344,-0.17383 l 0.2636719,-2.11718 c 0.021631,-0.16892 -0.1196233,-0.314 -0.2890627,-0.29688 z"
			id="path1811"
		/>
	</g>
</svg>
