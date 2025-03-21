<script lang="ts">
	import Link from 'carbon-components-svelte/src/Link/Link.svelte';
	import OutboundLink from 'carbon-components-svelte/src/Link/OutboundLink.svelte';
	import ListItem from 'carbon-components-svelte/src/ListItem/ListItem.svelte';
	import ChevronUp from 'carbon-icons-svelte/lib/ChevronUp.svelte';

	interface Props {
		text: string;
		href: string;
		number?: number;
		unlinked?: boolean;
	}

	let { text, href, number, unlinked = false }: Props = $props();
</script>

{#if unlinked}
	<ListItem>
		<span><OutboundLink {href}>{text}</OutboundLink></span>
	</ListItem>
{:else}
	<ListItem>
		<span id={'cite_note-' + number?.toString()}>
			<Link href={'#cite_ref-' + number?.toString()}><ChevronUp /></Link>

			<OutboundLink {href}>{text}</OutboundLink></span
		>
	</ListItem>
{/if}

<style lang="scss">
</style>
