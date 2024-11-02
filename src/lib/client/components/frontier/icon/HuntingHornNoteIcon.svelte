<!-- Created with Inkscape (http://www.inkscape.org/) -->
<script lang="ts">
	import type { FrontierHuntingHornNote } from '$lib/client/modules/frontier/types';

	// TODO add tooltip option?
	export let color: FrontierHuntingHornNote = 'Red';
	export let size: number | string = 16;

	function getCSSVariableFromColorName(color: FrontierHuntingHornNote) {
		switch (color) {
			case 'Red':
				return 'var(--fz-hh-note-red)';
			case 'Blue':
				return 'var(--fz-hh-note-blue)';
			case 'Green':
				return 'var(--fz-hh-note-green)';
			case 'Yellow':
				return 'var(--fz-hh-note-yellow)';
			case 'Purple':
				return 'var(--fz-hh-note-purple)';
			case 'Cyan':
				return 'var(--fz-hh-note-cyan)';
			case 'White':
				return 'var(--fz-hh-note-white)';
			case 'Pink':
				return 'var(--fz-hh-note-pink)';
			default:
				return 'var(--fz-hh-note-red)';
		}
	}
</script>

<svg
	width={size.toString()}
	height={size.toString()}
	viewBox="0 0 4.2726898 4.0067902"
	version="1.1"
	id="svg5"
	xml:space="preserve"
	><g id="layer1" transform="translate(-140.0318,-165.58436)"
		><path
			style="opacity:1;fill:{getCSSVariableFromColorName(
				color,
			)};fill-opacity:1;fill-rule:evenodd;stroke:#000000;stroke-width:0.3;stroke-linecap:round;stroke-linejoin:round;stroke-miterlimit:3;stroke-dasharray:none;stroke-opacity:1"
			d="m 141.31363,168.39292 h -0.357 v 0.5393 h 0.81276 v -2.43827 h -0.25826 v -0.75959 h 1.19255 l 0.49753,0.49753 h 0.95328 v 0.57349 h -0.25826 v 0.23547 h -1.53437 v -0.25066 h -0.0836 v 1.04823 h 0.33422 v 1.60273 h -2.43068 v -1.6559 h 1.52677 v 1.0938 h -0.69882 v -0.44815 h 0.31143 z"
			id="path914"
		/></g
	></svg
>
