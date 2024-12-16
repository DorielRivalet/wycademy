<script lang="ts">
	import { isFieldEmpty } from '$lib/client/modules/frontier/functions';
	import Tag from 'carbon-components-svelte/src/Tag/Tag.svelte';
	import Link from 'carbon-components-svelte/src/Link/Link.svelte';
	import type { FrontierMonsterInfo } from '$lib/client/modules/frontier/types';
	import { getTag } from '$lib/client/modules/frontier/tags';
	import Card3D from '$lib/client/components/Card3D.svelte';

	interface Props {
		monster: FrontierMonsterInfo;
		tags?: any;
		width: string;
		children?: import('svelte').Snippet;
	}

	let {
		monster,
		tags = ['Brute Wyvern', 'Hardcore', 'Unlimited', 'Fire'],
		width,
		children
	}: Props = $props();

	const maxTagLength = 20;
</script>

<Card3D>
	<div class="card" style="width: {width};">
		<div class="top">
			<div class="image">
				{@render children?.()}
			</div>
		</div>
		<div class="bottom">
			<a class="title" style="width: {'100%'}" href={monster.link}>
				{monster.displayName}
			</a>
			{#if monster.titles && monster.titles.length > 0 && !isFieldEmpty(monster.titles[0])}
				<p class="subtitle" style="width: {'100%'}">
					{monster.titles[0]}
				</p>
			{/if}
			<div class="tags" style="width: {'100%'}">
				{#each tags as tag}
					<div class="tag">
						<Link href={getTag(tag).link === '' ? '/' : getTag(tag).link}>
							<Tag icon={getTag(tag).icon} type={getTag(tag).color} interactive
								>{tag.substring(0, maxTagLength)}</Tag
							></Link
						>
					</div>
				{/each}
			</div>
		</div>
	</div>
</Card3D>

<style lang="scss">
	@use '@carbon/motion' as motion;

	.card {
		border: 2px solid var(--ctp-overlay0);
		border-radius: 4px;
		background-color: var(--ctp-surface0);
		filter: drop-shadow(0 0 4px var(--ctp-text));
		height: 100%;
	}

	.card:hover {
		transition: filter motion.$duration-fast-02
			motion.motion(standard, expressive);
		filter: drop-shadow(0 0 8px var(--ctp-blue));
	}

	.bottom {
		padding: 0rem 1rem 1rem 1rem;
	}

	.image {
		transition-property: filter;
		transition-duration: motion.$duration-fast-02;
		transition-timing-function: motion.motion(standard, expressive);
		view-transition-name: var(--monster-icon);
	}

	.tags {
		padding-top: 0.5rem;
		overflow: hidden;
		display: flex;
		justify-content: start;
		align-items: start;
		width: 100%;
		height: 100%;
		flex-wrap: wrap;
	}

	.subtitle {
		overflow: hidden;
		display: -webkit-box;
		-webkit-line-clamp: 3; /* number of lines to show */
		line-clamp: 3;
		-webkit-box-orient: vertical;
		color: var(--ctp-subtext0);
	}

	.title {
		overflow: hidden;
		display: -webkit-box;
		-webkit-line-clamp: 3; /* number of lines to show */
		line-clamp: 3;
		-webkit-box-orient: vertical;
		font-weight: bold;
		line-height: 1.5em;
		padding-top: 0.25rem;
		font-size: 1.5em;
	}

	.tag {
		display: -webkit-box;
		-webkit-line-clamp: 1; /* number of lines to show */
		line-clamp: 1;
		-webkit-box-orient: vertical;
		overflow: hidden;
	}

	a {
		all: unset;
	}

	a:hover {
		cursor: var(--cursor-icon-pointer);
		text-decoration: underline;
	}
</style>
