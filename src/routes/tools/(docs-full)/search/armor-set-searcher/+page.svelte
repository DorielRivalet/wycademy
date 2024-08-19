<script lang="ts">
	import PageTurn from '$lib/client/components/PageTurn.svelte';
	import SectionHeadingTopLevel from '$lib/client/components/SectionHeadingTopLevel.svelte';
	import HunterNotesPage from '$lib/client/components/HunterNotesPage.svelte';
	import { page } from '$app/stores';
	import InlineNotification from 'carbon-components-svelte/src/Notification/InlineNotification.svelte';
</script>

<HunterNotesPage displayTOC={false}>
	<div>
		<SectionHeadingTopLevel title={"Wycademy's Armor Set Searcher (WASS)"} />
		<div>
			<InlineNotification
				kind="info"
				lowContrast
				title="Note:"
				subtitle="This is a proof of concept."
			/>
		</div>

		<div class="page-turn">
			<PageTurn pageUrlPathName={$page.url.pathname} />
		</div>
	</div>
</HunterNotesPage>

<style lang="scss">
	.page-turn {
		margin-top: 4rem;
	}
</style>
