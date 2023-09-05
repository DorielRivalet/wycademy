<script>
		import logo from '$lib/client/images/logo.png';
</script>

<svelte:head>
	<title>Frontier Compendium - About</title>
	<meta content="Frontier Compendium - About" property="og:title" />
	<meta content="A compendium of resources for Monster Hunter Frontier Z by Doriel Rivalet." property="og:description" />
	<meta name="description" content="A compendium of resources for Monster Hunter Frontier Z by Dorial Rivalet." />
	<meta content="https://frontier-compendium.vercel.app/about" property="og:url" />
	<meta content={logo} property="og:image" />
	<meta content="#94e2d5" data-react-helmet="true" name="theme-color" />
</svelte:head>

<div class="text-column">
	<h1>About this app</h1>

	<p>
		This is a <a href="https://kit.svelte.dev">SvelteKit</a> app. You can make your own by typing the
		following into your command line and following the prompts:
	</p>

	<pre>npm create svelte@latest</pre>

	<p>
		The page you're looking at is purely static HTML, with no client-side interactivity needed.
		Because of that, we don't need to load any JavaScript. Try viewing the page's source, or opening
		the devtools network panel and reloading.
	</p>

	<p>
		The <a href="/sverdle">Sverdle</a> page illustrates SvelteKit's data loading and form handling. Try
		using it with JavaScript disabled!
	</p>
</div>
