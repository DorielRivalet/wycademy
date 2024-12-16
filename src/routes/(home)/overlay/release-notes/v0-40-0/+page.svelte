<script lang="ts">
	import Breadcrumb from 'carbon-components-svelte/src/Breadcrumb/Breadcrumb.svelte';
	import BreadcrumbItem from 'carbon-components-svelte/src/Breadcrumb/BreadcrumbItem.svelte';
	import UnorderedList from 'carbon-components-svelte/src/UnorderedList/UnorderedList.svelte';
	import ListItem from 'carbon-components-svelte/src/ListItem/ListItem.svelte';
	import Link from 'carbon-components-svelte/src/Link/Link.svelte';
	import CallToActionBanner from '$lib/client/components/CallToActionBanner.svelte';
	import LogoDiscord from 'carbon-icons-svelte/lib/LogoDiscord.svelte';
	import OutboundLink from 'carbon-components-svelte/src/Link/OutboundLink.svelte';

	const version = 'v0.40.0';

	const breadCrumbItems = [
		{ href: '/', text: 'Home' },
		{ href: '/overlay', text: 'Overlay' },
		{ href: '/overlay/release-notes', text: 'Release Notes' },
		{ href: '/overlay/release-notes/v0-40-0', text: 'v0.40.0' },
	];
</script>

<div class="release-notes-page">
	<div class="breadcrumb">
		<Breadcrumb noTrailingSlash>
			{#each breadCrumbItems as item, i}
				<BreadcrumbItem
					href={i === breadCrumbItems.length - 1 ? undefined : item.href}
					isCurrentPage={i === breadCrumbItems.length - 1}
					>{#if i !== breadCrumbItems.length - 1}
						{item.text}
					{/if}
				</BreadcrumbItem>
			{/each}
		</Breadcrumb>
	</div>
	<section>
		<h1>{version}</h1>
		<hr />
		<div class="summary">
			<div class="spaced-paragraph">
				This is a hotfix patch focused on <span class="icon-text"
					><LogoDiscord size={16} />
					<span> Discord Rich Presence.</span></span
				>
			</div>
		</div>
		<section>
			<h2>Improvements</h2>
			<hr />
			<UnorderedList class="spaced-list">
				<ListItem
					><div class="list-item">
						Updated <span class="icon-text"
							><LogoDiscord size={16} />
							<span> Discord Rich Presence </span></span
						>
						primary button links to <Link inline href="/overlay"
							>the Overlay page.</Link
						>
					</div></ListItem
				>
			</UnorderedList>
		</section>
		<section>
			<h2>Fixes</h2>
			<hr />
			<UnorderedList class="spaced-list">
				<ListItem
					><div class="list-item">
						<p>
							<strong>v0.39.1: </strong>Fixed an issue with
							<span class="icon-text"
								><LogoDiscord size={16} />
								<span> Discord Rich Presence </span></span
							>
							not showing certain monster icons.
						</p>
					</div>
				</ListItem>
			</UnorderedList>
		</section>
		<!-- <section>
			<h2>Other Changes</h2>
			<hr />
		</section> -->
	</section>
	<section class="call-to-action-section">
		<CallToActionBanner
			bodyText="Are you ready to upgrade your Frontier experience?"
			buttonText="Download Now"
			buttonLink="https://github.com/DorielRivalet/mhfz-overlay?tab=readme-ov-file#installation"
		/>
	</section>
	<section class="feedback-section">
		<div class="spaced-paragraph">
			We have a <OutboundLink href="https://forms.gle/hrAVWMcYS5HEo1v7A"
				>Google Forms</OutboundLink
			> where you can submit your feedback on the overlay.
		</div>
	</section>
</div>

<style lang="scss">
	.release-notes-page {
		width: 100%;
		padding-top: 2rem;
		padding-bottom: 2rem;

		section > section {
			padding: 1rem;
			min-height: 90vh;
			display: flex;
			flex-direction: column;
			align-items: center;
			padding-top: var(--cds-spacing-10);
		}
	}

	.release-notes-page > section > section:nth-child(odd) {
		background-color: var(--ctp-base); /* Light grey for odd-numbered divs */
	}

	.release-notes-page > section > section:nth-child(even) {
		background-color: var(
			--ctp-mantle
		); /* Darker grey for even-numbered divs */
	}

	hr {
		opacity: 1;
		width: 100%;
		border: none;
		height: 1px;
		background: radial-gradient(
			circle,
			color-mix(in srgb, var(--ctp-blue), transparent 50%) 0%,
			rgba(0, 0, 0, 0) 50%
		);
	}

	h1,
	h2 {
		text-align: center;
	}

	.breadcrumb {
		padding-left: 1rem;
		padding-bottom: 1rem;
	}

	.summary {
		display: flex;
		flex-direction: column;
		gap: 1rem;
		padding-top: 1rem;
		align-items: center;
		padding-bottom: 2rem;
	}

	.list-item {
		max-width: 80ch;
		font-size: 16px;
	}

	.call-to-action-section {
		display: flex;
		flex-direction: column;
		align-items: center;
		padding: 2rem;
	}

	.feedback-section {
		display: flex;
		justify-content: center;
		padding: 0px var(--cds-spacing-04);
	}
</style>
