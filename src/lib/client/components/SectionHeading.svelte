<!--
  ~ © 2024 Doriel Rivalet
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
	import { browser } from '$app/environment';
	import type { CarbonTheme } from 'carbon-components-svelte/src/Theme/Theme.svelte';
	import { getContext } from 'svelte';
	import type { Writable } from 'svelte/store';
	import { replaceState } from '$app/navigation';
	import { page } from '$app/state';

	const carbonThemeStore = getContext(
		Symbol.for('carbonTheme'),
	) as Writable<CarbonTheme>;

	interface Props {
		/** The name of the section heading*/
		title: string;
		/** The level of the section heading*/
		level: 2 | 3 | 4 | 5 | 6;
		withIcon?: boolean;
		withSeparator?: boolean;
	}

	let { title, level, withIcon = true, withSeparator = true }: Props = $props();
	const tag = 'h' + level;
	//https://stackoverflow.com/questions/4502633/how-to-affect-other-elements-when-one-element-is-hovered

	const slug = slugify(title, { lower: true });

	function updateQueryStringParameter(
		queryData: { key: string; value: string }[],
	) {
		if (!browser) return;
		const url = new URL(page.url.href);
		queryData.forEach((e) => {
			url.searchParams.set(e.key, e.value);
		});

		replaceState(url, {});
	}
</script>

<svelte:element this={tag} id={slug}>
	<a
		href={'#' + slug}
		onclick={() =>
			updateQueryStringParameter([
				{ key: 'embed', value: slug },
				{
					key: 'embed-theme',
					value: $carbonThemeStore === 'g10' ? 'light' : 'dark',
				},
			])}
	>
		{title}
		{#if withIcon}
			<span class="icon">
				<LinkIcon />
			</span>
		{/if}
	</a>
</svelte:element>
{#if withSeparator}
	<hr />
{/if}

<style lang="scss">
	a {
		text-decoration: none;
	}

	.icon {
		text-decoration: none; /* Remove underline by default */
		opacity: 0;
	}

	a:hover {
		text-decoration: underline var(--ctp-text);
		opacity: 1;
	}

	a:hover > .icon {
		opacity: 1;
	}

	.icon:hover {
		opacity: 1;
		cursor: var(--cursor-icon-pointer);
	}

	h2,
	h3,
	h4,
	h5,
	h6 {
		margin-top: var(--cds-spacing-10);
	}

	a {
		color: var(
			--ctp-text
		); /* Make the link color inherit from the parent element */
	}

	hr {
		margin-bottom: var(--cds-spacing-07);
	}
</style>
