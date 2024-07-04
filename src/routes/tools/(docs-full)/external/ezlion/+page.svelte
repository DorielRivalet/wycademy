<script lang="ts">
	import PageTurn from '$lib/client/components/PageTurn.svelte';
	import SectionHeadingTopLevel from '$lib/client/components/SectionHeadingTopLevel.svelte';
	import HunterNotesPage from '$lib/client/components/HunterNotesPage.svelte';
	import { page } from '$app/stores';
	import OutboundLink from 'carbon-components-svelte/src/Link/OutboundLink.svelte';
	import CodeSnippet from 'carbon-components-svelte/src/CodeSnippet/CodeSnippet.svelte';
</script>

<HunterNotesPage displayTOC={true}>
	<div>
		<SectionHeadingTopLevel title={'EZlion'} />
		<p class="spaced-paragraph">
			An API used as a reference for weapons, armors, monsters, skills, etc. For
			example, you can search IDs and names by doing a request: <CodeSnippet
				type="inline"
				code="curl https://yourprojectname.vercel.app/api/v0/monsters/1
"
			/>, giving you <CodeSnippet
				type="inline"
				code={`{ id: 1, name: 'Rathian' }`}
			/>.
		</p>

		<p class="spaced-paragraph">
			For more information, see the <OutboundLink
				href="https://ezlion.vercel.app">EZlion API Reference.</OutboundLink
			>
		</p>
		<div class="page-turn">
			<PageTurn pageRouteId={$page.route.id} />
		</div>
	</div>
</HunterNotesPage>

<style lang="scss">
	.page-turn {
		margin-top: 4rem;
	}
</style>
