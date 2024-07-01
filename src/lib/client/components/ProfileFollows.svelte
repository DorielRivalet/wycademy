<script lang="ts">
	import Button from 'carbon-components-svelte/src/Button/Button.svelte';
	import { UserFollow } from 'carbon-icons-svelte';
	import numbro from 'numbro';

	export let followers = 1000;
	export let following = 2500;

	export let isFollowing = false;

	// Format numbers
	let formattedFollowers = numbro(followers)
		.format({
			mantissa: 1,
			optionalMantissa: true,
			average: true,
		})
		.toUpperCase();

	let formattedFollowing = numbro(following)
		.format({
			mantissa: 1,
			optionalMantissa: true,
			average: true,
		})
		.toUpperCase();

	function onFollowButtonClick() {
		isFollowing = !isFollowing;
	}
</script>

<div class="container">
	<div class="stats">
		<a href="/"><p><strong>{formattedFollowers}</strong> Followers</p></a>
		<a href="/"><p><strong>{formattedFollowing}</strong> Following</p></a>
	</div>

	<Button
		on:click={onFollowButtonClick}
		icon={isFollowing ? undefined : UserFollow}
		kind={isFollowing ? 'danger-ghost' : 'primary'}
		iconDescription="Follow user">{isFollowing ? 'Unfollow' : 'Follow'}</Button
	>
</div>

<style lang="scss">
	.container {
		display: flex;
		flex-wrap: wrap;
		justify-content: space-between;
		align-items: end;
		gap: 1rem;
	}

	.stats {
		display: flex;
		gap: 1rem;
	}

	a {
		all: unset;
	}

	a:hover {
		text-decoration: underline;
		color: var(--ctp-sky);
	}
</style>
