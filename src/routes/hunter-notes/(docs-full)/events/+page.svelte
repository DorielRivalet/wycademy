<script lang="ts">
	import ClickableTileImage from '$lib/client/components/ClickableTileImage.svelte';
	import PageTurn from '$lib/client/components/PageTurn.svelte';
	import SectionHeadingTopLevel from '$lib/client/components/SectionHeadingTopLevel.svelte';
	import { LocationIcons } from '$lib/client/modules/frontier/objects';
	import Logo from '$lib/client/images/logo.svg';
</script>

<div class="top-level-section">
	<SectionHeadingTopLevel title={'Events'} />
	<div class="container-tiles">
		<ClickableTileImage
			title="Diva Defense"
			description="The Diva Prayer Gems list, Song of War Chapter, Interception, etc."
			imageSource={LocationIcons.find((e) => e.name === 'Interception')?.icon}
			href="/hunter-notes/events/diva-defense"
		/>
		<ClickableTileImage
			title="Hunter Festival"
			description="Hunting Competition, Soul gathering and Winner's Week information."
			imageSource={LocationIcons.find((e) => e.name === 'Festi')?.icon}
			href="/hunter-notes/events/hunter-festival"
		/>
		<ClickableTileImage
			title="Mezeporta Festival"
			description="A list of minigames available during the festival's duration, with tips to get a highscore."
			imageSource={LocationIcons.find((e) => e.name === 'Mezfes')?.icon}
			href="/hunter-notes/events/mezeporta-festival"
		/>
		<ClickableTileImage
			title="Wycademy's Events"
			description="Information about time-limited events hosted by Wycademy's developers."
			imageSource={Logo}
			href="/hunter-notes/events/wycademy-events"
		/>
	</div>
	<PageTurn
		previous="/hunter-notes/items/medal-trades"
		previousTitle="Items: Medal Trades"
		next="/hunter-notes/events/diva-defense"
		nextTitle="Events: Diva Defense"
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
