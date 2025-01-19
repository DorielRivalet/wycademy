<script lang="ts">
	import { format } from 'date-fns';

	interface Props {
		date?: string;
	}

	let { date = '2024-01-25 01:03:37.2746702Z' }: Props = $props();
	const dateJoined = format(new Date(date), 'dd/MM/yyyy');
</script>

<div class="container">
	<div>
		<p><strong>Join Date:</strong></p>
		<p>{dateJoined}</p>
	</div>
	<!-- <div>
		<p><strong>Profile Views:</strong></p>
		<p>{profileViews}</p>
	</div> -->
</div>

<style lang="scss">
	@media (min-width: 320px) {
		.container {
			display: grid;
			grid-template-columns: 1fr 1fr;
			gap: 1rem;
			background-color: var(--ctp-mantle);
			border-radius: 8px 8px 8px 8px;
			padding: 1rem;
			text-align: center;
		}
	}
</style>
