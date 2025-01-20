<script lang="ts">
	import { goto } from '$app/navigation';
	import SectionHeadingTopLevel from '$lib/client/components/SectionHeadingTopLevel.svelte';
	import Button from 'carbon-components-svelte/src/Button/Button.svelte';
	import Search from 'carbon-components-svelte/src/Search/Search.svelte';
	import SearchIcon from 'carbon-icons-svelte/lib/Search.svelte';

	let username = $state('');

	// TODO head component?
</script>

<div class="container">
	<SectionHeadingTopLevel title="Seach User" />
	<div class="search">
		<Button
			kind="primary"
			icon={SearchIcon}
			on:click={() => goto(`/users/${username}`)}>Look up</Button
		>
		<Search bind:value={username} placeholder="Search for a hunter..." />
	</div>
</div>

<style lang="scss">
	.container {
		width: 90%;
		margin: 2rem auto;
	}

	.search {
		display: flex;
		flex-direction: row;
	}
</style>
