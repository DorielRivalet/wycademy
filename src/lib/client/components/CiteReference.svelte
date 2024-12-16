<script lang="ts">
	import Tooltip from 'carbon-components-svelte/src/Tooltip/Tooltip.svelte';
	interface Props {
		number: number;
	}

	let { number }: Props = $props();
</script>

<sup id={'cite_ref-' + number.toString()}
	><a href={'#cite_note-' + number.toString()}>[{number}]</a></sup
>

<style lang="scss">
	sup {
		color: var(--ctp-blue);
		direction: ltr;
		line-height: 1;
		unicode-bidi: isolate;
		white-space: nowrap;
		font-weight: normal;
		font-style: normal;
		font-size: 80%;
	}

	sup:hover {
		color: var(--ctp-sky);
		text-decoration: underline;
	}

	a {
		all: unset;
	}
</style>
