<script>
	import { page } from '$app/stores';
	import cat from '$lib/client/images/error.webp';
	import Link from 'carbon-components-svelte/src/Link/Link.svelte';
	import UnorderedList from 'carbon-components-svelte/src/UnorderedList/UnorderedList.svelte';
	import ListItem from 'carbon-components-svelte/src/ListItem/ListItem.svelte';

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
	<UnorderedList class="spaced-list">
		<ListItem
			>🎵 Sharpen your Hunting Horn - We'll be back in tune in no time.</ListItem
		>
		<ListItem
			>🐷 Pet your Poogie for good luck and maybe a purrfect solution.</ListItem
		>
		<ListItem>🍖 Grab a Well-Done Steak while we sort this out.</ListItem>
	</UnorderedList>

	Remember, every hunter faces challenges, but we always come out stronger
	together, nya! 🎵🍖🐾
	<img src={cat} alt="Error" class="cat" />
	{#if $page.error !== null}
		<span style="font-size: 2em">
			{$page.error.message}
		</span>
	{/if}
	<div>Want to play as Raviente?</div>
	<Link href="/offline">Try this game!</Link>
</div>

<style lang="scss">
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
