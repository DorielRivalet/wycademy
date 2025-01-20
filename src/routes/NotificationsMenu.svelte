<script lang="ts">
	import { type SelectProfile } from '$lib/db/schema';
	import ClickableTile from 'carbon-components-svelte/src/Tile/ClickableTile.svelte';
	import Popover from 'carbon-components-svelte/src/Popover/Popover.svelte';
	import { slide } from 'svelte/transition';
	import Notification from 'carbon-icons-svelte/lib/Notification.svelte';
	import NotificationNew from 'carbon-icons-svelte/lib/NotificationNew.svelte';
	import Button from 'carbon-components-svelte/src/Button/Button.svelte';

	// TODO

	interface Props {
		profile: SelectProfile;
	}

	let { profile }: Props = $props();

	let open = $state(false);
	let ref: HTMLDivElement | null = $state(null);
</script>

<div style:height="100%" bind:this={ref} style:position="relative">
	<!-- svelte-ignore a11y_click_events_have_key_events -->
	<!-- svelte-ignore a11y_no_static_element_interactions -->
	<Button
		kind="ghost"
		onclick={() => (open = !open)}
		tooltipPosition="left"
		iconDescription="You have no unread notifications"
	>
		<span slot="icon">
			{#if false}
				<NotificationNew size={20} color="var(--ctp-peach)" />
			{:else}
				<Notification size={20} color="var(--ctp-text)" />
			{/if}</span
		>
	</Button>

	<Popover
		bind:open
		align="bottom-right"
		on:click:outside={({ detail }) => {
			open = ref.contains(detail.target);
		}}
	>
		{#if open}
			<div class="popover-content" transition:slide={{ duration: 150 }}>
				<div class="header">
					<p><strong>Last notification</strong></p>
					<div class="last-notification">
						<ClickableTile href={'/notifications'}>
							<p>
								{'No new notifications'}
							</p>
						</ClickableTile>
					</div>
				</div>
				<hr />

				<ClickableTile href={'/notifications'}>
					<p>View all</p>
				</ClickableTile>
			</div>
		{/if}
	</Popover>
</div>

<style lang="scss">
	.header > p {
		padding: 1rem;
	}

	hr {
		width: 100%;
		height: 1px;
		background-color: var(--ctp-surface1);
		margin: 0;
	}
</style>
