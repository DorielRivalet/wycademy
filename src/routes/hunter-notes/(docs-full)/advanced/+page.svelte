<script lang="ts">
	import ClickableTileImage from '$lib/client/components/ClickableTileImage.svelte';
	import PageTurn from '$lib/client/components/PageTurn.svelte';
	import SectionHeadingTopLevel from '$lib/client/components/SectionHeadingTopLevel.svelte';
	import { LocationIcons } from '$lib/client/modules/frontier/objects';
	import MedicineIconWhite from '$lib/client/components/frontier/icon/item/Medicine_Icon_White.svelte';
	import BallIconWhite from '$lib/client/components/frontier/icon/item/Ball_Icon_White.svelte';
	import JewelIconWhite from '$lib/client/components/frontier/icon/item/Jewel_Icon_White.svelte';
</script>

<div class="top-level-section">
	<SectionHeadingTopLevel title={'Advanced'} />
	<div class="container-tiles">
		<ClickableTileImage
			title="Item Sets"
			description="The best item sets and how to obtain each item."
			imageSource={MedicineIconWhite}
			href="/hunter-notes/advanced/item-sets"
		/>
		<ClickableTileImage
			title="Item Interactions"
			description="Specific item inteactions explained in greater detail."
			imageSource={BallIconWhite}
			href="/hunter-notes/advanced/item-interactions"
		/>
		<ClickableTileImage
			title="Mechanics"
			description="Various advanced mechanics of the game explained in great detail."
			imageSource={LocationIcons.find((e) => e.name === 'Blacksmith')?.icon}
			href="/hunter-notes/advanced/mechanics"
		/>
		<ClickableTileImage
			title="Skills"
			description="An overview of specific skill interactions, and which ones to use."
			imageSource={JewelIconWhite}
			href="/hunter-notes/advanced/skills"
		/>
	</div>
	<PageTurn
		previous="/hunter-notes/events/wycademy-events"
		previousTitle="Events: Wycademy's Events"
		next="/hunter-notes/advanced/item-sets"
		nextTitle="Advanced: Item Sets"
	/>
</div>

<style lang="scss">
	.container-tiles {
		display: grid;
		gap: 0.5rem;
		grid-template-columns: repeat(auto-fill, minmax(256px, 2fr));
		margin-bottom: 4rem;
	}

	.top-level-section {
		max-width: 1080px;
	}
</style>
