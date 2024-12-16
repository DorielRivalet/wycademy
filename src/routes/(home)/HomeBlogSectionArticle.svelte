<script lang="ts">
	import ClickableTile from 'carbon-components-svelte/src/Tile/ClickableTile.svelte';
	import Card3D from '$lib/client/components/Card3D.svelte';
	import { formatDateWithRelativeTime } from '$lib/client/modules/time';

	interface Props {
		imageSource: string;
		date: string;
		title: string;
		summary: string;
		href: string;
	}

	let {
		imageSource,
		date,
		title,
		summary,
		href
	}: Props = $props();
</script>

<Card3D>
	<ClickableTile {href} style="border-radius: 8px;">
		<article>
			<figure>
				<img class="image" src={imageSource} alt="Article Preview" />
				<figcaption class="date">
					{formatDateWithRelativeTime(
						new Date(
							Number(date.split('-')[0]),
							Number(date.split('-')[1]) - 1,
							Number(date.split('-')[2]),
						),
						new Date(),
					)}
				</figcaption>
			</figure>
			<h4 class="title">{title}</h4>
			<p class="summary">{summary}</p>
		</article>
	</ClickableTile>
</Card3D>

<style lang="scss">
	article {
		display: flex;
		flex-direction: column;
		gap: 0.5rem;
	}

	.date {
		color: var(--ctp-subtext0);
	}

	.image {
		width: 100%;
		height: 100%;
		object-fit: contain;
		border-radius: 8px 8px 0px 0px;
	}

	.title {
		font-weight: bold;
	}
</style>
