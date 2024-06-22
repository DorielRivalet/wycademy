<script lang="ts">
	import ClickableTileImage from '$lib/client/components/ClickableTileImage.svelte';
	import PageTurn from '$lib/client/components/PageTurn.svelte';
	import SectionHeadingTopLevel from '$lib/client/components/SectionHeadingTopLevel.svelte';
	import MapIconWhite from '$lib/client/components/frontier/icon/item/Map_Icon_White.svelte';
	import { LocationIcons } from '$lib/client/modules/frontier/objects';
</script>

<div class="top-level-section">
	<SectionHeadingTopLevel title={'Locations'} />
	<div class="container-tiles">
		<ClickableTileImage
			title="Mezeporta Square"
			description="List of NPC available at Mezeporta Square."
			imageSource={LocationIcons.find((e) => e.name === 'Mezeporta')?.icon}
			href="/hunter-notes/locations/mezeporta-square"
		/>
		<ClickableTileImage
			title="Guild Hall"
			description="The various facilities of the Guild Hall explained: Guild Food, Guild Poogies, Guild Store, etc."
			imageSource={LocationIcons.find((e) => e.name === 'Guild Hall')?.icon}
			href="/hunter-notes/locations/guild-hall"
		/>
		<ClickableTileImage
			title="Bento"
			description="The various buffs provided by bentos summarized."
			imageSource={LocationIcons.find((e) => e.name === 'Bento')?.icon}
			href="/hunter-notes/locations/bento"
		/>
		<ClickableTileImage
			title="Hunter's Road"
			description="The road skills list and how to upgrade them."
			imageSource={LocationIcons.find((e) => e.name === 'Road')?.icon}
			href="/hunter-notes/locations/road"
		/>
		<ClickableTileImage
			title="Gathering Maps"
			description="The various gathering spots for all locations of the game."
			imageSource={MapIconWhite}
			href="/hunter-notes/locations/gathering-maps"
		/>
		<ClickableTileImage
			title="Caravan"
			description="Caravan gem, skills, colors, etc."
			imageSource={LocationIcons.find((e) => e.name === 'Caravan')?.icon}
			href="/hunter-notes/locations/caravan"
		/>
		<ClickableTileImage
			title="Blacksmith"
			description="List of NPC available at the Blacksmith."
			imageSource={LocationIcons.find((e) => e.name === 'Blacksmith')?.icon}
			href="/hunter-notes/locations/blacksmith"
		/>
		<ClickableTileImage
			title="Diva Fountain"
			description="See how to complete the Diva questline in order to earn various rewards."
			imageSource={LocationIcons.find((e) => e.name === 'Diva Fountain')?.icon}
			href="/hunter-notes/locations/diva-fountain"
		/>

		<ClickableTileImage
			title="My House"
			description="List of various options available in My House."
			imageSource={LocationIcons.find((e) => e.name === 'My House')?.icon}
			href="/hunter-notes/locations/my-house"
		/>
		<ClickableTileImage
			title="My Gallery"
			description="List of various options available in My Gallery."
			imageSource={LocationIcons.find((e) => e.name === 'My Gallery')?.icon}
			href="/hunter-notes/locations/my-gallery"
		/>
		<ClickableTileImage
			title="My Garden"
			description="List of various options available in My Garden."
			imageSource={LocationIcons.find((e) => e.name === 'My Garden')?.icon}
			href="/hunter-notes/locations/my-garden"
		/>
		<ClickableTileImage
			title="My Missions"
			description="List of various options available in My Missions."
			imageSource={LocationIcons.find((e) => e.name === 'My Missions')?.icon}
			href="/hunter-notes/locations/my-missions"
		/>
		<ClickableTileImage
			title="My Support"
			description="List of various options available in My Support."
			imageSource={LocationIcons.find((e) => e.name === 'My Support')?.icon}
			href="/hunter-notes/locations/my-support"
		/>
		<ClickableTileImage
			title="My Tore"
			description="List of various options available in My Tore."
			imageSource={LocationIcons.find((e) => e.name === 'My Tore')?.icon}
			href="/hunter-notes/locations/my-tore"
		/>
		<ClickableTileImage
			title="Rasta Bar"
			description="List of various options available in the Rasta Bar."
			imageSource={LocationIcons.find((e) => e.name === 'Rasta Bar')?.icon}
			href="/hunter-notes/locations/rasta-bar"
		/>
		<ClickableTileImage
			title="Tent"
			description="List of various options available in the Tent."
			imageSource={LocationIcons.find((e) => e.name === 'Tent')?.icon}
			href="/hunter-notes/locations/tent"
		/>
	</div>
	<PageTurn
		previous="/hunter-notes/armor/transmog"
		previousTitle="Armor: Transmog"
		next="/hunter-notes/locations/mezeporta-square"
		nextTitle="Locations: Mezeporta Square"
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
