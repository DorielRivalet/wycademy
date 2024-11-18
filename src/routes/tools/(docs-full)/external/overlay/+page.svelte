<script lang="ts">
	import PageTurn from '$lib/client/components/PageTurn.svelte';
	import SectionHeadingTopLevel from '$lib/client/components/SectionHeadingTopLevel.svelte';
	import TableOfContentsPage from '$lib/client/components/TableOfContentsPage.svelte';
	import { page } from '$app/stores';
	import InlineNotification from 'carbon-components-svelte/src/Notification/InlineNotification.svelte';
	import Link from 'carbon-components-svelte/src/Link/Link.svelte';
	import Youtube from 'svelte-youtube-embed';
	import OutboundLink from 'carbon-components-svelte/src/Link/OutboundLink.svelte';
</script>

<TableOfContentsPage displayTOC={false}>
	<div>
		<SectionHeadingTopLevel title={'mhfz-overlay'} />
		<InlineNotification
			lowContrast
			hideCloseButton
			kind="info"
			title="Project state:"
			subtitle="The overlay is currently on major version 0, meaning that it is in beta."
		/>
		<div class="spaced-paragraph">
			This tool is used to track and view your stats in the game in real-time.
		</div>
		<div class="spaced-paragraph">
			We have a <OutboundLink href="https://forms.gle/hrAVWMcYS5HEo1v7A"
				>Google Forms</OutboundLink
			> where you can submit your feedback on the overlay.
		</div>
		<div class="spaced-paragraph">
			For more information, see the <Link inline href="/overlay"
				>overlay page.</Link
			>
		</div>
		<Youtube id="A9ffbRICqZY" />
		<div class="page-turn">
			<PageTurn pageUrlPathName={$page.url.pathname} />
		</div>
	</div>
</TableOfContentsPage>

<style lang="scss">
	.page-turn {
		margin-top: 4rem;
	}
</style>
