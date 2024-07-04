<script lang="ts">
	import PageTurn from '$lib/client/components/PageTurn.svelte';
	import SectionHeadingTopLevel from '$lib/client/components/SectionHeadingTopLevel.svelte';
	import HunterNotesPage from '$lib/client/components/HunterNotesPage.svelte';
	import { page } from '$app/stores';
	import InlineNotification from 'carbon-components-svelte/src/Notification/InlineNotification.svelte';
	import Link from 'carbon-components-svelte/src/Link/Link.svelte';
	import Youtube from 'svelte-youtube-embed';
</script>

<HunterNotesPage displayTOC={true}>
	<div>
		<SectionHeadingTopLevel title={'mhfz-overlay'} />
		<InlineNotification
			lowContrast
			hideCloseButton
			kind="info"
			title="Project state:"
			subtitle="The overlay is currently on major version 0, meaning that it is in beta."
		/>
		<p class="spaced-paragraph">
			This tool is used to track and view your stats in the game in real-time.
		</p>
		<p class="spaced-paragraph">
			For more information, see the <Link inline href="/overlay"
				>overlay page.</Link
			>
		</p>
		<Youtube id="A9ffbRICqZY" />
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
