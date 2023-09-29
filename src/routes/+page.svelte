<!--
  ~ © 2023 Doriel Rivalet
  ~ Use of this source code is governed by a MIT license that can be
  ~ found in the LICENSE file.
-->

<script>
	import Counter from '$lib/client/components/Counter.svelte';
	import SectionHeadingTopLevel from '$lib/client/components/SectionHeadingTopLevel.svelte';
	import logo from '$lib/client/images/logo.webp';
	import {
		authorName,
		authorUrl,
		datePublished,
		description,
		projectName,
		website,
	} from '$lib/constants';
	import Head from './Head.svelte';
	import { page } from '$app/stores';
	console.log('page.svelte');

	let customTitle = 'Home';
	let url = $page.url.toString();
</script>

<Head
	title={customTitle}
	{description}
	image={logo}
	{url}
	{website}
	{authorName}
	{datePublished}
	{authorUrl}
	contentType="SoftwareApplication"
	name={projectName}
	siteName={projectName}
/>

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
