<!--
MIT License

Copyright (c) 2023 Scott Spence

Permission is hereby granted, free of charge, to any person obtaining a copy
of this software and associated documentation files (the "Software"), to deal
in the Software without restriction, including without limitation the rights
to use, copy, modify, merge, publish, distribute, sublicense, and/or sell
copies of the Software, and to permit persons to whom the Software is
furnished to do so, subject to the following conditions:

The above copyright notice and this permission notice shall be included in all
copies or substantial portions of the Software.

THE SOFTWARE IS PROVIDED "AS IS", WITHOUT WARRANTY OF ANY KIND, EXPRESS OR
IMPLIED, INCLUDING BUT NOT LIMITED TO THE WARRANTIES OF MERCHANTABILITY,
FITNESS FOR A PARTICULAR PURPOSE AND NONINFRINGEMENT. IN NO EVENT SHALL THE
AUTHORS OR COPYRIGHT HOLDERS BE LIABLE FOR ANY CLAIM, DAMAGES OR OTHER
LIABILITY, WHETHER IN AN ACTION OF CONTRACT, TORT OR OTHERWISE, ARISING FROM,
OUT OF OR IN CONNECTION WITH THE SOFTWARE OR THE USE OR OTHER DEALINGS IN THE
SOFTWARE.
-->

<script lang="ts">
	import type { AuthorType, MainEntity } from '$lib/types';
	import type { MainEntityType } from '$lib/main-entity-types';
	import type { SchemaOrgProps } from '$lib/schema-org-props';
	import SchemaOrg from '$lib/client/components/Schema-org.svelte';

	// Required props

	// Optional props
	interface Props {
		url: string;
		title: string;
		description: string;
		name: string;
		website?: string;
		authorName?: string;
		image?: string;
		paymentPointer?: string;
		datePublished?: string;
		dateModified?: string;
		contentType?: MainEntityType;
		language?: string;
		authorType?: AuthorType;
		authorUrl?: string;
		siteName?: string;
	}

	let {
		url,
		title,
		description,
		name,
		website = '',
		authorName = '',
		image = '',
		paymentPointer = '',
		datePublished = '',
		dateModified = '',
		contentType = 'WebPage',
		language = 'en',
		authorType = 'Person',
		authorUrl = '',
		siteName = ''
	}: Props = $props();

	const mainEntity: MainEntity = {
		type: contentType,
		name: name,
		url,
		headline: title,
		description,
		image,
		datePublished,
		dateModified,
		author: {
			type: authorType,
			name: authorName,
			url: authorUrl,
		},
		publisher: {
			type: 'Organization',
			name: website,
			logo: '',
		},
	};

	const schemaOrgProps: SchemaOrgProps = {
		url,
		title,
		description,
		name,
		website,
		authorName,
		authorType,
		authorUrl,
		image,
		datePublished,
		dateModified,
		language,
		mainEntity,
		breadcrumbs: [],
	};
</script>

<!-- <svelte:head> -->
<!--https://stackoverflow.com/questions/59335731/how-to-create-own-embed-site-for-discord-->
<!-- <title />
	<meta content="Home" property="og:title" /> -->
<!-- Structured Data
	</script> -->
<!-- </svelte:head> -->

<svelte:head>
	<!--TODO use sitemap instead-->
	<!-- <link rel="canonical" href={url} /> -->

	<!-- HTML Meta Tags -->
	<title>{title}</title>
	<meta name="title" content={title} />
	<meta name="description" content={description} />

	{#if authorName}
		<meta name="author" content={authorName} />
	{/if}

	<!-- Google / Search Engine Tags -->
	{#if image}
		<meta itemprop="name" content={title} />
		<meta itemprop="description" content={description} />
		<meta itemprop="image" content={image} />
	{/if}

	<!-- Facebook Meta Tags -->
	{#if image}
		<meta property="og:url" content={url} />
		<meta property="og:type" content="website" />
		<meta property="og:title" content={title} />
		<meta property="og:description" content={description} />
		<meta property="og:image" content={image} />
		<meta property="og:image:alt" content="Elzelion holding a book" />
		<meta property="og:site_name" content={siteName} />
	{/if}

	<!-- Google Workspace Meta Tags -->
	{#if image}
		<meta property="thumbnail" content={image} />
		<link rel="image_src" href={image} />
		<meta name="application-name" content="Frontier's Wycademy" />
		<meta name="robots" content="max-snippet:-1, max-image-preview:large" />
	{/if}

	<!-- Discord-->
	<meta content="#89b4fa" data-react-helmet="true" name="theme-color" />

	<!-- Twitter Meta Tags -->
	{#if image}
		<meta name="twitter:card" content="summary_large_image" />
		{#if website}
			<meta property="twitter:domain" content={website} />
		{/if}
		<meta property="twitter:url" content={url} />
		<meta name="twitter:title" content={title} />
		<meta name="twitter:description" content={description} />
		<meta name="twitter:image" content={image} />
	{/if}

	<!-- Monetisation -->
	{#if paymentPointer}
		<meta name="monetization" content={paymentPointer} />
	{/if}
</svelte:head>

<SchemaOrg {schemaOrgProps} />
