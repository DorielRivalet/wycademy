<script lang="ts">
	import Link from 'carbon-components-svelte/src/Link/Link.svelte';
	import OutboundLink from 'carbon-components-svelte/src/Link/OutboundLink.svelte';
	import ListItem from 'carbon-components-svelte/src/ListItem/ListItem.svelte';
	import ChevronUp from 'carbon-icons-svelte/lib/ChevronUp.svelte';

	interface Props {
		text: string;
		href: string;
		number: number;
	}

	let { text, href, number }: Props = $props();
</script>

<ListItem>
	<span id={'cite_note-' + number.toString()}>
		<Link href={'#cite_ref-' + number.toString()}><ChevronUp /></Link>
		<OutboundLink {href}>{text}</OutboundLink></span
	>
</ListItem>

<style lang="scss">
</style>
