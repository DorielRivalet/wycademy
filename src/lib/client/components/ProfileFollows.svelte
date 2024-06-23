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
		<p><strong>{formattedFollowers}</strong> Followers</p>
		<p><strong>{formattedFollowing}</strong> Following</p>
	</div>

	<Button
		on:click={onFollowButtonClick}
		icon={isFollowing ? undefined : UserFollow}
		iconDescription="Follow user">{isFollowing ? 'Unfollow' : 'Follow'}</Button
	>
</div>

<style lang="scss">
	.container {
		display: flex;
		justify-content: space-between;
		gap: 1rem;
	}

	.stats {
		display: flex;
		gap: 1rem;
		align-items: center;
	}
</style>
