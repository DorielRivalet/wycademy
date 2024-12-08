<script lang="ts">
	import FaceAdd from 'carbon-icons-svelte/lib/FaceAdd.svelte';
	import Button from 'carbon-components-svelte/src/Button/Button.svelte';
	import {
		availableReactions,
		getReaction,
		type Reaction,
		type ReactionOption,
		type ReactionType,
	} from '../modules/reactions';
	import Tag from 'carbon-components-svelte/src/Tag/Tag.svelte';
	import FaceActivatedAdd from 'carbon-icons-svelte/lib/FaceActivatedAdd.svelte';
	import { cubicInOut } from 'svelte/easing';
	import { slide } from 'svelte/transition';

	// TODO favorites remove the reactions

	interface Props {
		reactions?: Reaction[];
		reactionOptions?: ReactionOption[];
		username: string;
	}

	let {
		username,
		reactions = [],
		reactionOptions = availableReactions,
	}: Props = $props();

	// Track whether popover is open
	let isPopoverOpen = $state(false);

	// Function to toggle popover
	function togglePopover() {
		isPopoverOpen = !isPopoverOpen;
	}

	// Function to add or increment emoji reaction
	function addReaction(emoji: ReactionOption) {
		// Ensure reactions is an array
		if (!Array.isArray(reactions)) {
			reactions = [];
		}

		// Create a copy of the reactions array to ensure reactivity
		const updatedReactions = [...reactions];

		// Find existing reaction index
		const existingReactionIndex = updatedReactions.findIndex(
			(r) => r.id === emoji.id,
		);

		// TODO supabase

		if (existingReactionIndex !== -1) {
			const currentReaction = updatedReactions[existingReactionIndex];

			// Check if the current user has already reacted
			// You'll need to replace 'currentUser' with your actual user identification method
			const hasUserReacted = currentReaction.users.includes(username);

			if (!hasUserReacted) {
				// Increment quantity and add user to the list
				updatedReactions[existingReactionIndex] = {
					...currentReaction,
					quantity: currentReaction.quantity + 1,
					clicked: true,
					users: [...(currentReaction.users || []), username],
				};
			}
		} else {
			// If new emoji, add to reactions with count 1
			// You'll need to replace 'currentUser' with your actual user identification method

			updatedReactions.push({
				id: emoji.id,
				quantity: 1,
				clicked: true,
				users: [username],
			});
		}

		// Reassign the entire reactions array to trigger reactivity
		reactions = updatedReactions;

		// Close popover after selection
		isPopoverOpen = false;
	}

	function toggleReaction(reactionOption: ReactionType) {
		// Ensure reactions is an array
		if (!Array.isArray(reactions)) {
			reactions = [];
			return;
		}

		// Create a copy of the reactions array to ensure reactivity
		const updatedReactions = [...reactions];

		const existingReactionIndex = updatedReactions.findIndex(
			(r) => r.id === reactionOption,
		);

		// TODO: You'll need to replace 'currentUser' with your actual user identification method

		if (existingReactionIndex !== -1) {
			const currentReaction = updatedReactions[existingReactionIndex];
			const hasUserReacted = currentReaction.users?.includes(username);

			if (hasUserReacted) {
				// If the user has reacted, remove their reaction
				if (currentReaction.quantity > 1) {
					updatedReactions[existingReactionIndex] = {
						...currentReaction,
						quantity: currentReaction.quantity - 1,
						users: currentReaction.users?.filter((user) => user !== username),
					};
				} else {
					// If quantity is 1, remove the entire reaction
					updatedReactions.splice(existingReactionIndex, 1);
				}
			} else {
				// If user hasn't reacted, add their reaction
				updatedReactions[existingReactionIndex] = {
					...currentReaction,
					quantity: currentReaction.quantity + 1,
					clicked: true,
					users: [...(currentReaction.users || []), username],
				};
			}
		} else {
			// Add new reaction if it doesn't exist
			updatedReactions.push({
				id: reactionOption,
				quantity: 1,
				clicked: true,
				users: [username],
			});
		}

		// Reassign the entire reactions array to trigger reactivity
		reactions = updatedReactions;
	}
</script>

<div class="emoji-reaction-container">
	<Button kind="ghost" onclick={togglePopover} iconDescription="">
		{#snippet icon()}
			{#if !isPopoverOpen}
				<FaceAdd size={32} />
			{:else}
				<FaceActivatedAdd size={32} />
			{/if}
		{/snippet}
	</Button>

	<!-- Emoji Popover -->
	{#if isPopoverOpen}
		<div
			class="emoji-popover"
			transition:slide={{ duration: 150, easing: cubicInOut }}
		>
			{#each reactionOptions as reactionOption}
				<button
					onclick={() => addReaction(reactionOption)}
					class="emoji-option"
				>
					{#if typeof reactionOption.reaction === 'string'}
						{reactionOption.reaction}
					{:else}
						{@const Reaction = reactionOption.reaction}
						<Reaction />
					{/if}
				</button>
			{/each}
		</div>
	{/if}

	<!-- Existing Reactions -->
	{#if reactions && reactions.length > 0}
		<div class="existing-reactions">
			{#each reactions as reaction}
				<!-- svelte-ignore a11y_click_events_have_key_events -->
				<!-- svelte-ignore a11y_no_static_element_interactions -->
				<div class="reaction" title={reaction.users.join(', ')}>
					<Tag
						size="default"
						interactive
						onclick={() => toggleReaction(reaction.id)}
					>
						{#snippet icon()}
							{@const Reaction = getReaction(reaction.id)}
							{#if typeof Reaction === 'string'}
								<span>{Reaction}</span>
							{:else if typeof Reaction !== 'undefined'}
								<span><Reaction /></span>
							{/if}
						{/snippet}

						<span class="reaction-quantity">{reaction.quantity}</span>
					</Tag>
				</div>
			{/each}
		</div>
	{/if}
</div>

<style lang="scss">
	.emoji-reaction-container {
		position: relative;
		display: flex;
		align-items: center;
		gap: 0.5rem;
	}

	.emoji-popover {
		position: absolute;
		top: 100%;
		left: 0;
		background: var(--ctp-surface0);
		border: 1px solid var(--ctp-surface1);
		border-radius: 8px;
		filter: drop-shadow(0px 0px 2px var(--ctp-overlay2));
		display: grid;
		grid-template-columns: 1fr 1fr 1fr 1fr;
		gap: 0.5rem;
		padding: 0.5rem;
		max-width: 256px;
		max-height: 256px;
		overflow-y: auto;
		box-shadow: 0 2px 10px rgba(0, 0, 0, 0.1);
		z-index: 10;
	}

	.emoji-option {
		background: none;
		border: none;
		font-size: 1.5rem;
		cursor: pointer;
		transition: transform 0.2s;
	}

	.emoji-option:hover {
		transform: scale(1.2);
	}

	.existing-reactions {
		display: grid;
		grid-template-columns: 1fr 1fr 1fr 1fr;
	}

	.reaction {
		margin-right: 0.25rem;
		width: max-content;
	}

	.reaction-quantity {
		color: var(--ctp-text);
	}
</style>
