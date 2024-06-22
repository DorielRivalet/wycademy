<script lang="ts">
	import ClickableTileImage from '$lib/client/components/ClickableTileImage.svelte';
	import PageTurn from '$lib/client/components/PageTurn.svelte';
	import SectionHeadingTopLevel from '$lib/client/components/SectionHeadingTopLevel.svelte';
	import AkuraJebia2 from '$lib/client/components/frontier/icon/monster/AkuraJebia2.svelte';
	import BerserkRaviente from '$lib/client/components/frontier/icon/monster/BerserkRaviente.svelte';
	import Bogabadorumu6 from '$lib/client/components/frontier/icon/monster/Bogabadorumu6.svelte';
	import BurningFreezingElzelion2 from '$lib/client/components/frontier/icon/monster/BurningFreezingElzelion2.svelte';
	import ConquestFatalis7 from '$lib/client/components/frontier/icon/monster/ConquestFatalis7.svelte';
	import Duremudira from '$lib/client/components/frontier/icon/monster/Duremudira.svelte';
	import StygianZinogre from '$lib/client/components/frontier/icon/monster/StygianZinogre.svelte';
	import SupremacyTeostra from '$lib/client/components/frontier/icon/monster/SupremacyTeostra.svelte';
	import YamaKurai2 from '$lib/client/components/frontier/icon/monster/YamaKurai2.svelte';
	import Zerureusu from '$lib/client/components/frontier/icon/monster/Zerureusu.svelte';
	import UNKNOWN from '$lib/client/images/monster/shiten_unknown.webp';
</script>

<div class="top-level-section">
	<SectionHeadingTopLevel title={'Monsters'} />
	<div class="container-tiles">
		<ClickableTileImage
			title="Exotics"
			description="The list of exotic monsters and the automatic skills they provide."
			imageSource={StygianZinogre}
			href="/hunter-notes/monsters/exotics"
		/>
		<ClickableTileImage
			title="Origin"
			description="The list of origin monsters and the automatic skills they provide."
			imageSource={YamaKurai2}
			href="/hunter-notes/monsters/origin"
		/>
		<ClickableTileImage
			title="Burst"
			description="The list of burst monsters."
			imageSource={Zerureusu}
			href="/hunter-notes/monsters/burst"
		/>
		<ClickableTileImage
			title="Supremacy"
			description="The list of supremacy monsters and how to beat them."
			imageSource={SupremacyTeostra}
			href="/hunter-notes/monsters/supremacy"
		/>
		<ClickableTileImage
			title="Duremudira"
			description="An explanation of Tower gear and skills, and how to beat 2nd District Duremudira."
			imageSource={Duremudira}
			href="/hunter-notes/monsters/duremudira"
		/>
		<ClickableTileImage
			title="Zenith"
			description="The list of zenith monsters and how to beat them; their gear and skills."
			imageSource={Bogabadorumu6}
			href="/hunter-notes/monsters/zenith"
		/>

		<ClickableTileImage
			title="Raviente"
			description="The list of Evolution weapons and their upgrade tree, Raviente armor,  and a tutorial for slaying and supporting during a Raviente raid."
			imageSource={BerserkRaviente}
			href="/hunter-notes/monsters/raviente"
		/>

		<ClickableTileImage
			title="Conquest"
			description="The list of conquest monsters and how to beat them; their materials and stats."
			imageSource={ConquestFatalis7}
			href="/hunter-notes/monsters/conquest"
		/>
		<ClickableTileImage
			title="Shiten"
			description="The list of shiten monsters and how to beat them; their sigils and stats."
			imageSource={UNKNOWN}
			href="/hunter-notes/monsters/shiten"
		/>
		<ClickableTileImage
			title="Unlimited"
			description="The list of unlimited (UL) monsters and their rewards upon hunting them."
			imageSource={AkuraJebia2}
			href="/hunter-notes/monsters/unlimited"
		/>
		<ClickableTileImage
			title="Musou"
			description="The list of musou monsters and how to beat them."
			imageSource={BurningFreezingElzelion2}
			href="/hunter-notes/monsters/musou"
		/>
	</div>
	<PageTurn
		previous="/hunter-notes/getting-started/transcend"
		previousTitle="Getting Started: Transcend"
		next="/hunter-notes/monsters/exotics"
		nextTitle="Monsters: Exotics"
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
