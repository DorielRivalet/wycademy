<script lang="ts">
	import { page } from '$app/stores';
	import HunterNotesPage from '$lib/client/components/HunterNotesPage.svelte';
	import PageTurn from '$lib/client/components/PageTurn.svelte';
	import SectionHeadingTopLevel from '$lib/client/components/SectionHeadingTopLevel.svelte';
	import InlineTooltip from '$lib/client/components/frontier/InlineTooltip.svelte';
	import { getCSVFromArray } from '$lib/client/modules/csv';
	import {
		LocationIcons,
		WeaponTypes,
	} from '$lib/client/modules/frontier/objects';
	import CopyButton from 'carbon-components-svelte/src/CopyButton/CopyButton.svelte';
	import DataTable from 'carbon-components-svelte/src/DataTable/DataTable.svelte';
	import Toolbar from 'carbon-components-svelte/src/DataTable/Toolbar.svelte';
</script>

<HunterNotesPage displayTOC={true}>
	<section>
		<SectionHeadingTopLevel title={'Light Bowgun'} />

		<div class="weapon-section">
			<div class="weapon-description">
				<p></p>
			</div>
			<div></div>
		</div>
		<div class="page-turn">
			<PageTurn pageRouteId={$page.route.id} />
		</div>
	</section>
</HunterNotesPage>

<style lang="scss">
	.page-turn {
		margin-top: 4rem;
	}

	.toolbar {
		padding: 1rem;
		display: flex;
		align-items: center;
		gap: 1rem;
		flex-grow: 1;
		flex-shrink: 1;
	}

	.weapon-section {
		display: flex;
		flex-direction: column;
		gap: 1rem;
	}

	.weapon-description {
		display: flex;
		flex-direction: column; /* Stacks children vertically */
		gap: 2rem;
	}
</style>
