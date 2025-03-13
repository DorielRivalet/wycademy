<script lang="ts">
	import UserFeedback from 'carbon-icons-svelte/lib/UserFeedback.svelte';

	interface Props {
		feedbackCount: number;
	}

	let { feedbackCount } = $props();
</script>

<div class="container">
	<div><UserFeedback size={32} /></div>

	<div>
		<p>
			This page was improved and updated thanks to feedback from {feedbackCount}
			survey(s) and requests. Thanks for your suggestions! We aim to prioritize what
			the community needs.
		</p>
	</div>
</div>

<style lang="scss">
	.container {
		margin-top: 1rem;
		margin-bottom: 1rem;
		display: flex;
		gap: 1rem;
		border: 1px solid var(--ctp-surface1);
		background-color: var(--ctp-surface0);
		padding: 1rem;
		max-width: fit-content;
	}
</style>
