<!--
  ~ © 2023 Doriel Rivalet
  ~ Use of this source code is governed by a MIT license that can be
  ~ found in the LICENSE file.
-->

<!--
@component
Shows a section heading (excluding level 1) with the following optional values:

- Show clickable URI fragment icon. Default: true.
- Show horizontal line separator. Default: true.

### Example usage

```svelte
<script>
    import SectionHeading from "$lib/components/SectionHeading.svelte";
</script>

<SectionHeading title="Gear" level={3} withIcon={false} withSeparator={false}/>
```

See also: https://developer.mozilla.org/en-US/docs/Web/HTTP/Basics_of_HTTP/Identifying_resources_on_the_Web#fragment
-->
<script lang="ts">
	// https://stackoverflow.com/questions/61303237/how-to-set-dynamic-html-tag-according-to-props-in-svelte
	import slugify from 'slugify';
	import LinkIcon from 'carbon-icons-svelte/lib/Link.svelte';
	/** The name of the section heading*/
	export let title: string;
	/** The level of the section heading*/
	export let level: 2 | 3 | 4 | 5 | 6;
	export let withIcon: boolean = true;
	export let withSeparator: boolean = true;
	const tag = 'h' + level;
	let titleClass = withIcon ? 'title-text' : '';
</script>

<svelte:element
	this={tag}
	id={slugify(title, { lower: true })}
	class="section-heading"
>
	{#if withIcon}
		<a href={'#' + slugify(title, { lower: true })} class="permalink">
			<LinkIcon />
		</a>
	{/if}
	<span class={titleClass}>
		{title}
	</span>
</svelte:element>
{#if withSeparator}
	<hr />
{/if}

<style>
	.section-heading {
		position: relative;
	}

	.permalink {
		opacity: 0;
		transition: hidden 0.11s ease-in-out, transform 0.11s ease-in-out;
		position: absolute;
		left: -1rem;
	}

	.title-text {
		display: inline-block;
		transition: transform 0.11s ease-in-out;
	}

	h2:hover .permalink,
	h3:hover .permalink,
	h4:hover .permalink,
	h5:hover .permalink,
	h6:hover .permalink {
		opacity: 1;
	}

	h2:hover .title-text,
	h3:hover .title-text,
	h4:hover .title-text,
	h5:hover .title-text,
	h6:hover .title-text {
		transform: translateX(0.5rem);
	}

	h2,
	h3,
	h4,
	h5,
	h6 {
		margin-top: var(--cds-spacing-07);
	}

	a {
		color: inherit; /* Make the link color inherit from the parent element */
	}
</style>
