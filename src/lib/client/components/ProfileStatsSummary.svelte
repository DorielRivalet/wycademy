<script lang="ts">
	import { getItemIcon } from '../modules/frontier/functions';
	import InlineTooltip from './frontier/InlineTooltip.svelte';
	import TrophyWhite from './frontier/icon/TrophyWhite.svelte';
	import BookIconWhite from './frontier/icon/item/Book_Icon_White.svelte';
	import MapIconWhite from './frontier/icon/item/Map_Icon_White.svelte';

	export let huntCount = 9001;
	export let achievementsCount = 777;
	export let totalAchievements = 9999;

	const playerServers = [
		'Rain Frontier Server',
		'Mezelounge',
		'Arca',
		'Monster Hunter Frontier: Renewal',
		'MHF-Z Ancient Server',
	];

	function randomChoice(arr: any[]) {
		return arr[Math.floor(arr.length * Math.random())];
	}
</script>

<div class="stats-summary">
	<p>
		<strong
			><InlineTooltip
				icon={getItemIcon('Ticket')}
				tooltip="Quests"
				text={'Total Hunts: '}
			/></strong
		>{huntCount}
	</p>
	<p>
		<strong
			><InlineTooltip
				icon={TrophyWhite}
				tooltip="Achievements"
				text={'Achievements: '}
			/></strong
		>{achievementsCount}/{totalAchievements}
	</p>
	<p>
		<strong
			><InlineTooltip
				icon={BookIconWhite}
				tooltip="Titles"
				text={'Titles: '}
			/></strong
		>{achievementsCount}/{totalAchievements}
	</p>
	<p>
		<strong
			><InlineTooltip
				icon={MapIconWhite}
				tooltip="Server"
				text={'Server: '}
			/></strong
		>{randomChoice(playerServers)}
	</p>
</div>

<style lang="scss">
	.stats-summary {
		display: grid;
		grid-template-columns: repeat(auto-fit, minmax(128px, 1fr));
		gap: 1rem;
		padding: 1rem;
		border-radius: 8px;
		background-color: var(--ctp-mantle);

		p {
			margin: auto;
		}
	}
</style>
