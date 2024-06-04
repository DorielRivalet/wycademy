<script lang="ts">
	import { getTag } from '$lib/client/modules/frontier/functions';
	import Tag from 'carbon-components-svelte/src/Tag/Tag.svelte';
	export let title = 'Abiorugu';
	export let subtitle = 'Ferocious Wyvern';
	export let tags = ['Brute Wyvern', 'Hardcore', 'Unlimited', 'Fire'];
	export let width: string;

	const maxTagLength = 20;
</script>

<div class="card" style="width: {width};">
	<div class="top">
		<div class="image">
			<slot name="image"></slot>
		</div>
	</div>
	<div class="bottom">
		<p class="title" style="width: {'100%'}">
			{title}
		</p>
		{#if subtitle !== ''}
			<p class="subtitle" style="width: {'100%'}">
				{subtitle}
			</p>
		{/if}
		<div class="tags" style="width: {'100%'}">
			{#each tags as tag}
				<div class="tag">
					<a href={getTag(tag).link === '' ? '/' : getTag(tag).link}>
						<Tag icon={getTag(tag).icon} type={getTag(tag).color} interactive
							>{tag.substring(0, maxTagLength)}</Tag
						></a
					>
				</div>
			{/each}
		</div>
	</div>
</div>

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
</style>
