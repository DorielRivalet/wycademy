<!--
  ~ © 2023 Doriel Rivalet
  ~ Use of this source code is governed by a MIT license that can be
  ~ found in the LICENSE file.
-->

<script>
	import Counter from '$lib/client/components/Counter.svelte';
	import SectionHeadingTopLevel from '$lib/client/components/SectionHeadingTopLevel.svelte';
	import logo from '$lib/client/images/logo.svg';
	import { description, title } from '$lib/constants';
	console.log('page.svelte');
</script>

<svelte:head>
	<!--https://stackoverflow.com/questions/59335731/how-to-create-own-embed-site-for-discord-->
	<title>{title} - Home</title>
	<meta content="Home" property="og:title" />
	<link rel="canonical" href="https://frontier-compendium.vercel.app" />
	<meta content="https://frontier-compendium.vercel.app" property="og:url" />
	<meta content={description} property="og:description" />
	<meta name="description" content={description} />
	<meta content={logo} property="og:image" />
	<meta content="#89b4fa" data-react-helmet="true" name="theme-color" />
	<meta property="og:site_name" content={title} />
	<meta property="og:type" content="WebApplication" />
	<!-- Structured Data
		<script type="application/ld+json">
		{
			"@context": "http://schema.org/",
			"@type": "WebApplication",
			"browserRequirements": "requires HTML5 support",
			"applicationCategory": "Wiki",
			"applicationSubCategory": "Game Wiki",
			"softwareVersion": "0.2.0",
			"identifier": "https://vocab.getty.edu/aat/300410446",
			"about": "Guides for Monster Hunter Frontier Z",
			"abstract": "A compendium of resources for Monster Hunter Frontier Z (MHF-Z) by Doriel Rivalet",
			"accessMode": ["textual","visual","chartOnVisual","colorDependent", "diagramOnVisual", "mathOnVisual", "textOnVisual"],
			"accessibilityHazard": ["unknown"],
			"acquireLicensePage": "https://github.com/DorielRivalet/frontier-compendium/blob/main/LICENSE.md",
			"alternativeHeadline": "frontier-compendium",
			"audience": {
      	"@type": "Audience",
      	"name": "Gamers"
     	},
			"datePublished": "2023/09/02",
			"headline": "Frontier Compendium",
			"license": "https://github.com/DorielRivalet/frontier-compendium/blob/main/LICENSE.md",
			"alternateName": "mhfz-compendium",
			"description": "Your go-to application for all things MHF-Z",
			"name": "frontier-compendium",
			"sameAs": "https://frontier-compendium.vercel.app",
			"url": "https://frontier-compendium.vercel.app",
			"thumbnailUrl": "https://raw.githubusercontent.com/DorielRivalet/frontier-compendium/main/src/lib/client/images/logo.png",
			"typicalAgeRange": "13+",
			"isAccessibleForFree": true
		}
	</script> -->
</svelte:head>

<section>
	<SectionHeadingTopLevel title="Welcome" />

	<p>
		try editing <strong>src/routes/+page.svelte</strong>
	</p>

	<Counter />
</section>

<style>
	section {
		display: flex;
		flex-direction: column;
		justify-content: center;
		align-items: center;
	}
</style>
