<script lang="ts">
	import Quotes from 'carbon-icons-svelte/lib/Quotes.svelte';

	export let author: string;
	export let quote: string;
	export let authorImage: string;
	export let authorLink = '';
</script>

{#if authorLink === ''}
	<figure class="testimonial">
		<img src={authorImage} alt={author} />
		<div class="text">
			<blockquote class="quote">
				<Quotes size={24} />
				<p>
					"{quote}"
				</p>
			</blockquote>
			<cite class="author">—{author}></cite>
		</div>
	</figure>
{:else}
	<figure class="testimonial">
		<a href={authorLink}>
			<img src={authorImage} alt={author} />
		</a>
		<div class="text">
			<blockquote class="quote">
				<Quotes size={24} />
				<p>{quote}</p>
			</blockquote>
			<cite class="author"
				><a href={authorLink}>
					—{author}
				</a></cite
			>
		</div>
	</figure>
{/if}

<style lang="scss">
	@media (min-width: 320px) {
		.testimonial {
			display: grid;
			grid-template-rows: 1fr 3fr;
			gap: 2rem;
			width: 80vw;
			margin: auto;
			min-height: 90vh;
			justify-items: center;
		}
	}

	@media (min-width: 672px) {
		.testimonial {
			display: grid;
			grid-template-columns: 1fr 3fr;
			gap: 2rem;
			width: 80vw;
			margin: auto;
			min-height: 90vh;
		}
	}

	.text {
		color: var(--ctp-subtext0);
		display: flex;
		flex-direction: column;
		gap: 2rem;
	}

	.quote {
		display: flex;
		flex-direction: column;
		gap: 0.5rem;
		font-style: italic;
		background: var(--ctp-surface0);
		border-radius: 8px 8px 8px 8px;
		padding: 1rem;
	}

	.author {
		text-align: end;
	}

	img {
		border-radius: 50%;
	}

	a {
		all: unset;
	}
</style>
