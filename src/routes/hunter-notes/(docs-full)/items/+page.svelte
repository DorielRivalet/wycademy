<script lang="ts">
	import ClickableTileImage from '$lib/client/components/ClickableTileImage.svelte';
	import PageTurn from '$lib/client/components/PageTurn.svelte';
	import SectionHeadingTopLevel from '$lib/client/components/SectionHeadingTopLevel.svelte';
	import BallIconWhite from '$lib/client/components/frontier/icon/item/Ball_Icon_White.svelte';
	import JewelIconWhite from '$lib/client/components/frontier/icon/item/Jewel_Icon_White.svelte';
	import SacIconWhite from '$lib/client/components/frontier/icon/item/Sac_Icon_White.svelte';
	import TicketIconWhite from '$lib/client/components/frontier/icon/item/Ticket_Icon_White.svelte';
	import TrapToolIconWhite from '$lib/client/components/frontier/icon/item/Trap_Tool_Icon_White.svelte';
</script>

<div class="top-level-section">
	<SectionHeadingTopLevel title={'Items'} />
	<div class="container-tiles">
		<ClickableTileImage
			title="Item Box"
			description="Item Box capacity, presets and combinations."
			imageSource={TrapToolIconWhite}
			href="/hunter-notes/items/item-box"
		/>
		<ClickableTileImage
			title="Decorations"
			description="A list of decoration types."
			imageSource={JewelIconWhite}
			href="/hunter-notes/items/decorations"
		/>
		<ClickableTileImage
			title="Armor Spheres"
			description="List of armor spheres."
			imageSource={BallIconWhite}
			href="/hunter-notes/items/armor-spheres"
		/>
		<ClickableTileImage
			title="Special Items"
			description="List of items that are unique to Frontier or adjust the quest rewards."
			imageSource={TicketIconWhite}
			href="/hunter-notes/items/special-items"
		/>
		<ClickableTileImage
			title="Medal Trades"
			description="List of items obtained by exchanging medals."
			imageSource={SacIconWhite}
			href="/hunter-notes/items/medal-trades"
		/>
	</div>
	<PageTurn next="/hunter-notes/items/item-box" nextTitle="Items: Item Box" />
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
