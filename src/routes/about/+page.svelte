<!--
  ~ © 2023 Doriel Rivalet
  ~ Use of this source code is governed by a MIT license that can be
  ~ found in the LICENSE file.
-->

<script>
	import logo from '$lib/client/images/logo.png';
	import { description, title } from '$lib/constants';
</script>

<svelte:head>
	<title>{title} - About</title>
	<meta content="About" property="og:title" />
	<link rel="canonical" href="https://frontier-compendium.vercel.app/about" />
	<meta
		content="https://frontier-compendium.vercel.app/about"
		property="og:url"
	/>
	<meta content={description} property="og:description" />
	<meta name="description" content={description} />
	<meta content="#89b4fa" data-react-helmet="true" name="theme-color" />
	<meta property="og:site_name" content={title} />
	<meta property="og:type" content="WebApplication" />
	<meta content={logo} property="og:image" />
	<meta property="og:image:alt" content="Elzelion holding a book" />
</svelte:head>

<div class="text-column">
	<h1 id="about">About this app</h1>

	<p>
		This is a <a href="https://kit.svelte.dev">SvelteKit</a> app. You can make your
		own by typing the following into your command line and following the prompts:
	</p>

	<code>npm create svelte@latest</code>

	<p>
		The page you're looking at is purely static HTML, with no client-side
		interactivity needed. Because of that, we don't need to load any JavaScript.
		Try viewing the page's source, or opening the devtools network panel and
		reloading.
	</p>

	<p>
		The <a href="/sverdle">Sverdle</a> page illustrates SvelteKit's data loading
		and form handling. Try using it with JavaScript disabled!
	</p>
</div>
