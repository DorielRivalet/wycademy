<!--
  ~ © 2023 Doriel Rivalet
  ~ Use of this source code is governed by a MIT license that can be
  ~ found in the LICENSE file.
-->

<script lang="ts">
	import { page } from '$app/stores';
	import logo from '$lib/client/images/logo.png';
	import logoAlt from '$lib/client/images/logo_alternative.png';
	import Settings from 'carbon-icons-svelte/lib/Settings.svelte';
	import LogoGithub from 'carbon-icons-svelte/lib/LogoGithub.svelte';
	import Link from 'carbon-components-svelte/src/Link/Link.svelte';
	import InlineNotification from 'carbon-components-svelte/src/Notification/InlineNotification.svelte';
	import NotificationActionButton from 'carbon-components-svelte/src/Notification/NotificationActionButton.svelte';
	import { goto } from '$app/navigation';
	import { developmentStage } from '$lib/constants';

	let imgSrc = logo;

	function handleMouseEnter() {
		imgSrc = logoAlt;
	}

	function handleMouseLeave() {
		imgSrc = logo;
	}
</script>

<header>
	<div class="logo-notification">
		<div class="logo">
			<a href="/">
				<img
					src={imgSrc}
					on:mouseenter={handleMouseEnter}
					on:mouseleave={handleMouseLeave}
					alt="Logo"
				/>
			</a>
		</div>

		<InlineNotification
			lowContrast
			kind="warning"
			title="Status:"
			subtitle="This site is currently in {developmentStage}."
		>
			<svelte:fragment slot="actions">
				<NotificationActionButton
					on:click={() => goto('/about-development-stages')}
					>Learn more</NotificationActionButton
				>
			</svelte:fragment>
		</InlineNotification>
	</div>

	<nav>
		<ul>
			<li aria-current={$page.url.pathname === '/about' ? 'page' : undefined}>
				<a href="/about">About</a>
			</li>
			<li
				aria-current={$page.url.pathname.startsWith('/sverdle')
					? 'page'
					: undefined}
			>
				<a href="/sverdle">Sverdle</a>
			</li>
		</ul>
	</nav>

	<nav class="container-links">
		<div class="container-link">
			<Link href="https://github.com/DorielRivalet/frontier-compendium">
				<LogoGithub size="24" />
			</Link>
		</div>
		<div class="container-link">
			<Link href="/site-preferences" class="link">
				<div class="settings-icon">
					<Settings size="24" />
				</div>
			</Link>
		</div>
	</nav>
</header>

<style>
	header > *:nth-child(2) {
		position: absolute;
		left: 50%;
		right: 50%;
		top: 0;
	}

	header > *:nth-child(3) {
		position: absolute;
		right: 0;
		top: 0;
	}

	.logo-notification {
		display: flex;
		gap: 1rem;
		margin-left: var(--cds-spacing-02);
	}

	.settings-icon {
		transition: transform 1s ease-in-out;
	}

	.settings-icon:hover {
		transform: rotate(-45deg);
	}

	header {
		display: flex;
		justify-content: space-between;
	}

	.container-link {
		padding-block: 0.5rem;
	}

	.container-links {
		display: flex;
		justify-content: space-between;
		gap: 1rem;
		margin-right: 0.5rem;
	}

	.logo {
		width: 5em;
		height: 5em;
	}

	.logo a {
		display: flex;
		align-items: center;
		justify-content: center;
		width: 100%;
		height: 100%;
	}

	.logo img {
		width: 4em;
		height: 4em;
		object-fit: contain;
	}

	nav {
		display: flex;
		justify-content: center;
	}

	ul {
		position: relative;
		padding: 0;
		margin: 0;
		height: 3em;
		display: flex;
		justify-content: center;
		align-items: center;
		list-style: none;
	}

	li {
		position: relative;
		height: 100%;
	}

	li::marker {
		content: none;
	}

	li[aria-current='page']::before {
		--size: 6px;
		content: '';
		width: 0;
		height: 0;
		position: absolute;
		top: 0;
		left: calc(50% - var(--size));
		border: var(--size) solid transparent;
		border-top: var(--size) solid var(--color-theme-1);
	}

	nav a {
		display: flex;
		height: 100%;
		align-items: center;
		padding: 0 0.5rem;
		font-weight: 700;
		font-size: 0.8rem;
		text-transform: uppercase;
		letter-spacing: 0.1em;
		text-decoration: none;
		transition: color 0.2s linear;
	}

	a:hover {
		color: var(--cds-link-01);
	}

	a {
		color: inherit; /* Make the link color inherit from the parent element */
	}
</style>
