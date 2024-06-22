<script lang="ts">
	import ClickableTileImage from '$lib/client/components/ClickableTileImage.svelte';
	import PageTurn from '$lib/client/components/PageTurn.svelte';
	import SectionHeadingTopLevel from '$lib/client/components/SectionHeadingTopLevel.svelte';
	import AllArmors from '$lib/client/components/frontier/icon/armor/AllArmors.svelte';
	import JewelIconWhite from '$lib/client/components/frontier/icon/item/Jewel_Icon_White.svelte';
</script>

<div class="top-level-section">
	<SectionHeadingTopLevel title={'Armor'} />
	<div class="container-tiles">
		<ClickableTileImage
			title="Overview"
			description="An overview of armor types."
			imageSource={AllArmors}
			href="/hunter-notes/armor/overview"
		/>
		<ClickableTileImage
			title="Skills"
			description="The list of armor skills, including zenith skills."
			imageSource={JewelIconWhite}
			href="/hunter-notes/armor/skills"
		/>
		<ClickableTileImage
			title="Colors"
			description="The list of armor pigment colors and how to unlock them."
			imageSource={AllArmors}
			href="/hunter-notes/armor/colors"
		/>
		<ClickableTileImage
			title="Transmog"
			description="How to unlock transmog."
			imageSource={AllArmors}
			href="/hunter-notes/armor/transmog"
		/>
	</div>
	<PageTurn
		previous="/hunter-notes/weapons/hunting-horn-songs"
		previousTitle="Weapons: Hunting Horn Songs"
		next="/hunter-notes/armor/overview"
		nextTitle="Armor: Overview"
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
