<script lang='ts'>
	// https://stackoverflow.com/questions/61303237/how-to-set-dynamic-html-tag-according-to-props-in-svelte
	import slugify from 'slugify';
	import LinkIcon from "carbon-icons-svelte/lib/Link.svelte";
	export let title: string;
  export let level: 2 | 3 | 4 | 5 | 6;
	const tag = 'h'+level;
</script>

<svelte:element this={tag} id={slugify(title, {lower: true})} class="section-heading">
	<a href={"#"+slugify(title, {lower: true})} class="permalink">
		<LinkIcon />
	</a>
	<span class="title-text">
		{title}
	</span>
</svelte:element>
<hr>

<style>
	.section-heading {
			position: relative;
	}

  .permalink {
    opacity: 0;
    transition: hidden .11s ease-in-out, transform .11s ease-in-out;
    position: absolute;
    left: -1rem;
  }

	.title-text {
    display: inline-block;
    transition: transform .11s ease-in-out;
  }

  h2:hover .permalink, h3:hover .permalink, h4:hover .permalink, h5:hover .permalink, h6:hover .permalink {
    opacity: 1;
  }

	h2:hover .title-text, h3:hover .title-text, h4:hover .title-text, h5:hover .title-text, h6:hover .title-text {
		transform: translateX(.5rem);
  }

	h2, h3, h4, h5, h6{
		margin-top: 1rem;
	}

	a {
		color: inherit;  /* Make the link color inherit from the parent element */
	}

	hr {
		opacity: .5;
	}
</style>