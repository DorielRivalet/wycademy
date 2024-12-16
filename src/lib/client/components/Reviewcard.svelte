<!-- ReviewCard.svelte -->
<script lang="ts">
	interface Props {
		img: string;
		name: string;
		username: string;
		body: string;
	}

	let {
		img,
		name,
		username,
		body
	}: Props = $props();
</script>

<figure class="review-card">
	<div class="profile">
		<img alt="" src={img} />
		<div class="info">
			<figcaption class="name">{name}</figcaption>
			<p class="username">{username}</p>
		</div>
	</div>
	<blockquote class="review-body">{body}</blockquote>
</figure>

<style lang="scss">
	// ReviewCard styles
	.review-card {
		position: relative;
		width: 16rem; // w-64
		cursor: pointer;
		overflow: hidden;
		border-radius: 1rem; // rounded-2xl
		padding: 1rem; // p-4
		border: 1px solid var(--ctp-surface1);
		background-color: var(--ctp-surface0);

		&:hover {
			background-color: var(--ctp-surface2);
		}

		.profile {
			display: flex;
			flex-direction: row;
			align-items: center;
			gap: 0.5rem;

			img {
				border-radius: 9999px;
				width: 32px;
				height: 32px;
			}

			.info {
				display: flex;
				flex-direction: column;

				.name {
					font-size: 0.875rem;
					font-weight: 500;
				}

				.username {
					font-size: 0.75rem;
					font-weight: 500;
					color: rgba(0, 0, 0, 0.6);
				}
			}
		}

		.review-body {
			margin-top: 0.5rem;
			font-size: 0.875rem;
		}
	}
</style>
