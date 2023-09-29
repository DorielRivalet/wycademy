<!--
  ~ © 2023 Doriel Rivalet
  ~ Use of this source code is governed by a MIT license that can be
  ~ found in the LICENSE file.
-->

<script>
	import { page } from '$app/stores';
	import logo from '$lib/client/images/logo.webp';
	import {
		authorName,
		authorUrl,
		datePublished,
		description,
		projectName,
		website,
	} from '$lib/constants';
	import Head from '../Head.svelte';
	let url = $page.url.toString();
</script>

<Head
	title={'About'}
	{description}
	image={logo}
	{url}
	{website}
	{authorName}
	{datePublished}
	{authorUrl}
	contentType="WebPage"
	name={projectName}
	siteName={projectName}
/>

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
