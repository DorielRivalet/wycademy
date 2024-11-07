<script lang="ts">
	import SectionHeadingCentered from '$lib/client/components/SectionHeadingCentered.svelte';
	import CodeSnippet from 'carbon-components-svelte/src/CodeSnippet/CodeSnippet.svelte';
	import Rss from 'carbon-icons-svelte/lib/Rss.svelte';
	import Catalog from 'carbon-icons-svelte/lib/Catalog.svelte';
	import wycademyImg from '$lib/client/images/wycademy.png';
	import HomeBlogSectionArticle from './HomeBlogSectionArticle.svelte';
	import { announcementsTitles } from '$lib/client/modules/announcements';

	const summaryLength = 128;
	const articlesToShow = 6;

	const articles: {
		title: string;
		summary: string;
		date: string;
		imageSource: string;
		href: string;
	}[] = announcementsTitles
		.map((e) => {
			return {
				title: e.title,
				summary:
					e.summary.length > summaryLength
						? `${e.summary.slice(0, summaryLength - 1)}…`
						: e.summary,
				date: e.date,
				imageSource: wycademyImg,
				href: e.link,
			};
		})
		.slice(0, articlesToShow);
</script>

<section class="container">
	<SectionHeadingCentered
		title="Latest Articles"
		section="Blog"
		level={2}
		icon={Catalog}
	/>
	<div class="articles-container">
		<div class="articles">
			{#each articles as article}
				<HomeBlogSectionArticle
					href={article.href}
					imageSource={article.imageSource}
					title={article.title}
					summary={article.summary}
					date={article.date}
				/>
			{/each}
		</div>
		<p>
			Looking to stay up to date? Subscribe to our <Rss /> RSS feed: <CodeSnippet
				type="inline"
				code="https://wycademy.vercel.app/rss"
			/>
		</p>
	</div>
</section>

<style lang="scss">
	.container {
		padding-top: var(--cds-spacing-10);
		padding-bottom: var(--cds-spacing-10);
		margin: auto;
		width: 90vw;
		display: flex;
		gap: 2rem;
		flex-direction: column;
	}

	.articles-container {
		display: flex;
		flex-direction: column;
		gap: 2rem;
		align-items: center;
	}

	@media (min-width: 320px) {
		.articles {
			display: grid;
			grid-template-columns: 1fr;
			gap: 2rem;
		}
	}

	@media (min-width: 1056px) {
		.articles {
			display: grid;
			grid-template-columns: 1fr 1fr 1fr;
			gap: 2rem;
		}
	}
</style>
