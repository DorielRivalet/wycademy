<script lang="ts">
	import SectionHeadingTopLevel from '$lib/client/components/SectionHeadingTopLevel.svelte';
	import Link from 'carbon-components-svelte/src/Link/Link.svelte';
</script>

<div>
	<SectionHeadingTopLevel title="Account Settings" />
	<p>There are currently no available settings for the account category.</p>
	<p>
		You can refresh your currently displayed Discord username and avatar by
		signing out and logging in again.
	</p>
	<p>
		<strong
			>Your email is never shown to the public, and your profile picture viewed
			by others is the one set in your <Link inline href="/settings/profile"
				>Profile settings</Link
			></strong
		>.
	</p>
</div>

<style lang="scss">
</style>
