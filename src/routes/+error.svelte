<script>
	import { page } from '$app/stores';
	import cat from '$lib/client/images/error.png';

	const errorTitles = [
		'The Gargwa took the quest and ran away with it! 🐔',
		"We've encountered a tiny pawblem! 👀",
		'Ran out of Mega Dash Juice! 😴',
		'Meow-gency! ⚠',
		"Our supply box is empty like a Melynx's treasure trove! 🎒🐱",
		'It looks like a Bitterbug has wandered into our quest board! 🐛',
	];
</script>

<div class="container">
	<h1>
		Error {$page.status} - {errorTitles[
			Math.floor(Math.random() * errorTitles.length)
		]}
	</h1>

	<p>Don't fret! Here's what you can do:</p>
	<ol>
		<li>🎵 Sharpen your Hunting Horn - We'll be back in tune in no time.</li>
		<li>🐷 Pet your Poogie for good luck and maybe a purrfect solution.</li>
		<li>🍖 Grab a Well-Done Steak while we sort this out.</li>
	</ol>

	Remember, every hunter faces challenges, but we always come out stronger
	together, nya! 🎵🍖🐾
	<img src={cat} alt="Error" class="cat" />
	{#if $page.error !== null}
		<span style="font-size: 2em">
			{$page.error.message}
		</span>
	{/if}
</div>

<style>
	.cat {
		width: auto;
		height: 12rem;
	}

	.container {
		display: flex;
		flex-direction: column;
		gap: 1rem;
		align-items: center;
		font-size: 1rem;
	}
</style>
