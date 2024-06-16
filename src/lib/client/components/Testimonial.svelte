<script lang="ts">
	export let author: string;
	export let quote: string;
	export let authorImage: string;
	export let authorLink = '';
</script>

{#if authorLink === ''}
	<div class="testimonial">
		<img src={authorImage} alt={author} />
		<div class="text">
			<p class="quote">"{quote}"</p>
			<p class="author">{author}</p>
		</div>
	</div>
{:else}
	<div class="testimonial">
		<a href={authorLink}>
			<img src={authorImage} alt={author} />
		</a>
		<div class="text">
			<p class="quote">"{quote}"</p>
			<a class="author" href={authorLink}>
				<p>{author}</p>
			</a>
		</div>
	</div>
{/if}

<style lang="scss">
	.testimonial {
		display: grid;
		grid-template-columns: 1fr 3fr;
		gap: 4rem;
		padding: 2rem;
		width: 80vw;
		margin: auto;
		min-height: 90vh;
	}

	.text {
		color: var(--ctp-subtext0);
		display: flex;
		flex-direction: column;
		gap: 2rem;
	}

	.quote {
		font-style: italic;
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
