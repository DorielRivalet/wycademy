<script lang="ts">
	import ClickableTileImage from '$lib/client/components/ClickableTileImage.svelte';
	import PageTurn from '$lib/client/components/PageTurn.svelte';
	import SectionHeadingTopLevel from '$lib/client/components/SectionHeadingTopLevel.svelte';
	import ExtremeFireblight from '$lib/client/components/frontier/icon/ailment/ExtremeFireblight.svelte';
	import ExtremeParalysis from '$lib/client/components/frontier/icon/ailment/ExtremeParalysis.svelte';
	import BookIconWhite from '$lib/client/components/frontier/icon/item/Book_Icon_White.svelte';
	import { LocationIcons } from '$lib/client/modules/frontier/objects';
</script>

<div class="top-level-section">
	<SectionHeadingTopLevel title={'Getting Started'} />
	<div class="container-tiles">
		<ClickableTileImage
			title="Your First Hunts"
			description="A walkthrough of the first tasks you should do when starting the game."
			imageSource={BookIconWhite}
			href="/hunter-notes/getting-started/your-first-hunts"
		/>
		<ClickableTileImage
			title="Elements"
			description="The elements of weapons and monsters. Includes combo elements and elemental resistances."
			imageSource={ExtremeFireblight}
			href="/hunter-notes/getting-started/elements"
		/>
		<ClickableTileImage
			title="Ailments"
			description="The status effects of both weapons and monsters. Includes monsters' status immunities."
			imageSource={ExtremeParalysis}
			href="/hunter-notes/getting-started/ailments"
		/>
		<ClickableTileImage
			title="Transcend"
			description="Learn how to upgrade transcend and see a list of burst effects."
			imageSource={LocationIcons.find((e) => e.name === 'Transcend')?.icon}
			href="/hunter-notes/getting-started/transcend"
		/>
	</div>
	<PageTurn
		next="/hunter-notes/getting-started/your-first-hunts"
		nextTitle="Getting Started: Your First Hunts"
	/>
</div>

<style lang="scss">
	.container-tiles {
		display: grid;
		gap: 0.5rem;
		grid-template-columns: repeat(auto-fill, minmax(256px, 2fr));
		margin-bottom: 2rem;
	}

	.top-level-section {
		max-width: 1080px;
	}
</style>
