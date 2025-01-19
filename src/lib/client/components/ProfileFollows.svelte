<script lang="ts">
	import Button from 'carbon-components-svelte/src/Button/Button.svelte';
	import UserFollow from 'carbon-icons-svelte/lib/UserFollow.svelte';

	import numbro from 'numbro';

	interface Props {
		followers?: number;
		following?: number;
		isFollowing?: boolean;
		canFollow?: boolean;
	}

	let {
		followers = 1000,
		following = 2500,
		isFollowing = $bindable(false),
		canFollow = true,
	}: Props = $props();

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
	<div class="stats paragraph-long-02">
		<a href="/"><div><strong>{formattedFollowers}</strong> Followers</div></a>
		<a href="/"><div><strong>{formattedFollowing}</strong> Following</div></a>
	</div>

	<Button
		disabled={!canFollow}
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
