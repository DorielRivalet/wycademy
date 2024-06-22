<script lang="ts">
	import ClickableTileImage from '$lib/client/components/ClickableTileImage.svelte';
	import PageTurn from '$lib/client/components/PageTurn.svelte';
	import SectionHeadingTopLevel from '$lib/client/components/SectionHeadingTopLevel.svelte';
	import ShotIconWhite from '$lib/client/components/frontier/icon/item/Shot_Icon_White.svelte';
	import SigilIconWhite from '$lib/client/components/frontier/icon/item/Sigil_Icon_White.svelte';
	import AllWeapons from '$lib/client/components/frontier/icon/weapon/AllWeapons.svelte';
	import { getWeaponIcon } from '$lib/client/modules/frontier/functions';
</script>

<div class="top-level-section">
	<SectionHeadingTopLevel title={'Weapons'} />
	<div class="container-tiles">
		<ClickableTileImage
			title="Overview"
			description="An overview of each weapon type, their multipliers (including sharpness), recommended weapons, skills and sigils."
			imageSource={AllWeapons}
			href="/hunter-notes/weapons/overview"
		/>
		<ClickableTileImage
			title="Sigils"
			description="View a list of sigils."
			imageSource={SigilIconWhite}
			href="/hunter-notes/weapons/sigils"
		/>
		<ClickableTileImage
			title="Critical Distance"
			description="An explanation of ranged weapons' Critical Distance mechanic."
			imageSource={ShotIconWhite}
			href="/hunter-notes/weapons/critical-distance"
		/>
		<ClickableTileImage
			title="Active Feature"
			description="A list of each weapon's active feature."
			imageSource={AllWeapons}
			href="/hunter-notes/weapons/active-feature"
		/>
		<ClickableTileImage
			title="Hunting Horn Songs"
			description="A list of hunting horn songs."
			imageSource={getWeaponIcon('Hunting Horn')}
			href="/hunter-notes/weapons/hunting-horn-songs"
		/>
	</div>
	<PageTurn
		next="/hunter-notes/weapons/overview"
		nextTitle="Weapons: Overview"
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
