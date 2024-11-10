<script lang="ts">
	import ClickableTile from 'carbon-components-svelte/src/Tile/ClickableTile.svelte';
	import Card3D from '$lib/client/components/Card3D.svelte';

	export let imageSource: string;
	export let date: string;
	export let title: string;
	export let summary: string;
	export let href: string;

	function formatDateWithRelativeTime(date1: Date, date2: Date): string {
		const diffInMs = date2.getTime() - date1.getTime();
		const diffInSeconds = Math.floor(diffInMs / 1000);
		let relativeTime: string;

		if (diffInSeconds < 60) {
			relativeTime = `${diffInSeconds}s ago`;
		} else if (diffInSeconds < 3600) {
			const minutes = Math.floor(diffInSeconds / 60);
			relativeTime = `${minutes}m ago`;
		} else if (diffInSeconds < 86400) {
			const hours = Math.floor(diffInSeconds / 3600);
			relativeTime = `${hours}h ago`;
		} else if (diffInSeconds < 604800) {
			const days = Math.floor(diffInSeconds / 86400);
			relativeTime = `${days}d ago`;
		} else if (diffInSeconds < 2592000) {
			const weeks = Math.floor(diffInSeconds / 604800);
			relativeTime = `${weeks}w ago`;
		} else if (diffInSeconds < 31536000) {
			const months = Math.floor(diffInSeconds / 2592000);
			relativeTime = `${months}mo ago`;
		} else {
			const years = Math.floor(diffInSeconds / 31536000);
			relativeTime = `${years}y ago`;
		}

		const formattedDate = date1.toLocaleDateString('en-US', {
			year: 'numeric',
			month: 'long',
			day: 'numeric',
		});

		return `${formattedDate} (${relativeTime})`;
	}
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
