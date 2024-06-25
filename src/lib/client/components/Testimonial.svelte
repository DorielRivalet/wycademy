<script lang="ts">
	import Quotes from 'carbon-icons-svelte/lib/Quotes.svelte';

	export let authorName: string;
	export let authorTitle: string;
	export let quote: string;
	export let authorImage: string;
	export let authorLink = '';
</script>

{#if authorLink === ''}
	<figure class="testimonial">
		<div class="image-container">
			<img src={authorImage} alt={authorName} />
			<cite class="author"
				><a href={authorLink}>
					<p class="author-name">{authorName}</p>
					<p class="author-title">{authorTitle}</p>
				</a></cite
			>
		</div>
		<div class="text">
			<blockquote class="quote">
				<Quotes size={24} />
				<p>
					"{quote}"
				</p>
			</blockquote>
		</div>
	</figure>
{:else}
	<figure class="testimonial">
		<a href={authorLink}>
			<div class="image-container">
				<img src={authorImage} alt={authorName} />
				<cite class="author"
					><a href={authorLink}>
						<p class="author-name">{authorName}</p>
						<p class="author-title">{authorTitle}</p>
					</a></cite
				>
			</div>
		</a>
		<div class="text">
			<blockquote class="quote">
				<Quotes size={24} />
				<p>{quote}</p>
			</blockquote>
		</div>
	</figure>
{/if}

<style lang="scss">
	@use '@carbon/motion' as motion;
	@use '@carbon/type' as type;

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
		filter: drop-shadow(8px 8px 4px #808080);
		transition:
			filter motion.$duration-slow-02 motion.motion(standard, expressive),
			transform motion.$duration-slow-02 motion.motion(standard, expressive);

		p {
			@include type.type-style('fluid-quotation-01', true);
			font-family: var(--font-serif);
		}
	}

	.image-container {
		display: flex;
		flex-direction: column;
		gap: 0.5rem;
	}

	.quote:hover {
		transform: scale(105%);
	}

	.author {
		text-align: center;
	}

	.author:hover {
		text-decoration: underline;
	}

	.author-name {
		color: var(--ctp-text);
		@include type.type-style('fluid-heading-03', true);
	}

	.author-title {
		color: var(--ctp-subtext0);
		@include type.type-style('label-02');
	}

	img {
		border-radius: 50%;
		border: 2px solid var(--ctp-overlay0);
	}

	a {
		all: unset;
	}

	@media (min-width: 320px) {
		.testimonial {
			display: grid;
			grid-template-rows: 1fr;
			gap: 2rem;
			width: 80vw;
			margin: auto;
			justify-items: center;

			img {
				width: 256px;
				height: 256px;
				object-fit: cover;
				transition:
					filter motion.$duration-slow-02 motion.motion(standard, expressive),
					transform motion.$duration-slow-02 motion.motion(standard, expressive);
			}

			img:hover {
				filter: brightness(110%);
				transform: scale(105%);
			}
		}
	}

	@media (min-width: 672px) {
		.testimonial {
			display: grid;
			grid-template-columns: 1fr 3fr;
			grid-template-rows: 1fr;
			gap: 2rem;
			width: 80vw;
			margin: auto;

			img {
				width: 256px;
				height: 256px;
				object-fit: cover;
			}
		}
	}
</style>
