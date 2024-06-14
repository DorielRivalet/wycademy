<script lang="ts">
	import { getAchievementRankColor } from '$lib/client/modules/frontier/achievement';

	export let name: string;
	export let imageSource: string;
	export let rank: 1 | 2 | 3 | 4;
</script>

<div class="container">
	<img width="128" class="icon" src={imageSource} alt="Achievement Icon" />
	<p class="name" style="color: {getAchievementRankColor(rank)}">{name}</p>
</div>

<style lang="scss">
	.container:hover {
		filter: brightness(120%) drop-shadow(0px 0px 0.5rem var(--ctp-blue));
	}

	.container {
		transition: filter;
		transition-duration: 0.2s;
		display: flex;
		flex-direction: column;
		align-items: center;
	}

	p {
		text-shadow:
			-1px -1px 0 #000,
			1px -1px 0 #000,
			-1px 1px 0 #000,
			1px 1px 0 #000;
		font-weight: bold;
		padding: 0.5rem;
		text-align: center;
	}
</style>
