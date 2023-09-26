<!--
  ~ © 2023 Doriel Rivalet
  ~ Use of this source code is governed by a MIT license that can be
  ~ found in the LICENSE file.
-->

<script>
	import Counter from '$lib/client/components/Counter.svelte';
	import logo from '$lib/client/images/logo.png';
	import welcome from '$lib/client/images/svelte-welcome.webp';
	import welcome_fallback from '$lib/client/images/svelte-welcome.png';
	import { description } from '$lib/constants';
	console.log('page svelte load');
</script>

<svelte:head>
	<!--https://stackoverflow.com/questions/59335731/how-to-create-own-embed-site-for-discord-->
	<title>Frontier Compendium - Home</title>
	<meta content="Frontier Compendium - Home" property="og:title" />
	<meta content={description} property="og:description" />
	<meta name="description" content={description} />
	<meta content="https://frontier-compendium.vercel.app/" property="og:url" />
	<meta content={logo} property="og:image" />
	<meta content="#89b4fa" data-react-helmet="true" name="theme-color" />
</svelte:head>

<section>
	<h1>
		<span class="welcome">
			<picture>
				<source srcset={welcome} type="image/webp" />
				<img src={welcome_fallback} alt="Welcome" />
			</picture>
		</span>

		to your new<br />SvelteKit app
	</h1>

	<h2>
		try editing <strong>src/routes/+page.svelte</strong>
	</h2>

	<Counter />
</section>

<style>
	section {
		display: flex;
		flex-direction: column;
		justify-content: center;
		align-items: center;
		flex: 0.6;
	}

	h1 {
		width: 100%;
	}

	.welcome {
		display: block;
		position: relative;
		width: 100%;
		height: 0;
		padding: 0 0 calc(100% * 495 / 2048) 0;
	}

	.welcome img {
		position: absolute;
		width: 100%;
		height: 100%;
		top: 0;
		display: block;
	}
</style>
