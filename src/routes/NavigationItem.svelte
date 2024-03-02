<!--
  ~ © 2023 Doriel Rivalet
  ~ Use of this source code is governed by a MIT license that can be
  ~ found in the LICENSE file.
-->

<script lang="ts">
	import { page } from '$app/stores';

	export let color = 'blue';
	export let startsWith = false;
	export let path = '/';
	export let description = 'Description';
</script>

{#if startsWith}
	<li aria-current={$page.url.pathname.startsWith(path) ? 'page' : undefined}>
		<a href={path} class={color}>
			<div class="icon">
				<slot />
			</div>
		</a>
		<a href={path} class={color}>
			<div class="icon-description">{description}</div>
		</a>
	</li>
{:else}
	<li aria-current={$page.url.pathname === path ? 'page' : undefined}>
		<a href={path} class={color}>
			<div class="icon">
				<slot />
			</div>
		</a>
		<a href={path} class={color}>
			<div class="icon-description">{description}</div>
		</a>
	</li>
{/if}

<style>
	li {
		margin: var(--cds-spacing-02);
		position: relative;
		height: 100%;
		background-color: var(--ctp-surface0);
		border-radius: 10%;
	}

	li::marker {
		content: none;
	}

	a {
		display: flex;
		align-items: center;
		font-weight: bold;
		font-size: 1rem;
		text-transform: uppercase;
		letter-spacing: 0.1em;
		text-decoration: none;
		transition: color 0.2s linear;
	}

	/* Make the icon description visible on hover of the parent <li> */
	li:hover .icon-description {
		display: flex; /* or inline, depending on your layout */
		opacity: 1;
	}

	/* Ensure the icon moves up on hover of the list item */
	a:hover .icon {
		transform: translateY(-2px); /* Adjust the value as needed */
		transition: transform 0.3s ease; /* Smooth transition */
	}

	/* Apply the shiny effect to the icon container on hover of the parent <li> */
	a:hover .icon::after {
		content: '';
		position: absolute;
		top: 0;
		left: 0;
		right: 0;
		bottom: 0;
		background: radial-gradient(
			circle at center,
			rgba(255, 255, 255, 0.5) 0%,
			rgba(255, 255, 255, 0) 70%
		);
		transform: scale(0);
		transition: transform 0.5s ease-out;
		z-index: -1;
	}

	/* Animate the shiny effect on hover of the parent <li> */
	a:hover .icon::after {
		transform: scale(1);
	}

	/* Ensure the icon container has a relative position */
	.icon {
		transition: transform 0.3s ease;
		position: relative;
		overflow: visible;
		width: var(--cds-spacing-09);
	}

	/* Apply the shiny effect to the icon container on hover */
	.icon:hover::after {
		content: '';
		position: absolute;
		top: 0;
		left: 0;
		right: 0;
		bottom: 0;
		background: radial-gradient(
			circle at center,
			rgba(255, 255, 255, 0.5) 0%,
			rgba(255, 255, 255, 0) 70%
		);
		transform: scale(0);
		transition: transform 0.5s ease-out;
		z-index: -1;
	}

	/* Position the icon description absolutely within the list item */
	.icon-description {
		position: absolute;
		top: 3rem; /* Adjust positioning as needed */
		left: 0; /* Adjust positioning as needed */
		display: none; /* Initially hidden */
		transition: opacity 0.3s ease;
		z-index: 1; /* Ensure it's above other elements */
		text-wrap: nowrap;
	}

	.yellow:hover {
		color: var(--ctp-yellow);
	}

	.peach:hover {
		color: var(--ctp-peach);
	}

	.red:hover {
		color: var(--ctp-red);
	}

	.mauve:hover {
		color: var(--ctp-mauve);
	}

	.sky:hover {
		color: var(--ctp-sky);
	}

	.green:hover {
		color: var(--ctp-green);
	}

	/* New effects for the <a> elements */
	a.icon {
		position: relative;
		display: flex;
		text-align: center;
		padding: var(--cds-spacing-02);
		background-color: red;
		/* color: #666; */
		transition: 0.5s;
	}

	a::before {
		content: '';
		position: absolute;
		top: 0;
		left: 0;
		width: 100%;
		height: 100%;
		border-radius: 10%;
		background: var(--ctp-blue);
		transition: 0.5s;
		transform: scale(0.9);
		z-index: -1;
	}

	a:hover::before {
		transform: scale(1.1);
		box-shadow: 0 0 5px var(--ctp-blue);
	}

	a:hover {
		color: var(--ctp-surface1);
		box-shadow: 0 0 5px var(--ctp-blue);
		text-shadow: 0 0 5px var(--ctp-blue);
	}
</style>
