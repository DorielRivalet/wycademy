<script lang="ts">
	import PageTurn from '$lib/client/components/PageTurn.svelte';
	import SectionHeadingTopLevel from '$lib/client/components/SectionHeadingTopLevel.svelte';
	import TableOfContentsPage from '$lib/client/components/TableOfContentsPage.svelte';
	import { page } from '$app/stores';
	import OutboundLink from 'carbon-components-svelte/src/Link/OutboundLink.svelte';
</script>

<TableOfContentsPage displayTOC={false}>
	<div>
		<SectionHeadingTopLevel title={'Feedback'} />
		<div class="spaced-paragraph">
			We have a <OutboundLink href="https://forms.gle/hfFG7QWNcrCHnDV67"
				>Google Forms</OutboundLink
			> where you can submit your feedback on the website. If you have found bugs,
			or want to suggest a new feature in the website, you can also submit an issue
			in our <OutboundLink href="https://github.com/DorielRivalet/issues"
				>GitHub issue tracker.</OutboundLink
			> Copyright and intellectual property concerns are also checked in our GitHub
			issue tracker.
		</div>
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
