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
	width={size}
	viewBox="0 0 128 128"
	version="1.1"
	id="svg5"
	xml:space="preserve"
	xmlns="http://www.w3.org/2000/svg"
	data-license="https://creativecommons.org/licenses/by-nc-sa/4.0/"
	data-author="Doriel Rivalet"
	><defs id="defs2" /><g id="layer1"
		><g id="g2"
			><circle
				style="fill:{blendColor(
					'#e5e5e5',
					targetColor,
				)};fill-opacity:1;fill-rule:evenodd;stroke:#000000;stroke-width:7.86667;stroke-linecap:round;stroke-linejoin:round;stroke-miterlimit:2.6;stroke-dasharray:none;paint-order:stroke fill markers"
				id="path1"
				cx="64"
				cy="64"
				r="59"
			/><circle
				style="fill:{blendColor(
					'#f2f2f2',
					targetColor,
				)};fill-opacity:1;fill-rule:evenodd;stroke:none;stroke-width:3.66667;stroke-linecap:round;stroke-linejoin:round;stroke-miterlimit:2.6;stroke-dasharray:none;paint-order:stroke fill markers"
				id="circle1"
				cx="64"
				cy="64"
				r="44"
			/><circle
				style="fill:{blendColor(
					'#ffffff',
					targetColor,
				)};fill-opacity:1;fill-rule:evenodd;stroke:none;stroke-width:2.58333;stroke-linecap:round;stroke-linejoin:round;stroke-miterlimit:2.6;stroke-dasharray:none;paint-order:stroke fill markers"
				id="circle2"
				cx="64"
				cy="64"
				r="31.000002"
			/></g
		></g
	>
</svg>
