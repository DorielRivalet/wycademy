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

<style lang="scss">
	@use '@carbon/motion' as motion;

	li {
		margin: var(--cds-spacing-02);
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
		opacity: 1;
		display: block;
	}

	/* Position the icon description absolutely within the list item */
	.icon-description {
		position: absolute;
		top: 3rem; /* Adjust positioning as needed */
		left: inherit; /* Adjust positioning as needed */
		display: none; /* Initially hidden */
		transition: opacity 0.3s ease;
		z-index: 1; /* Ensure it's above other elements */
		text-wrap: nowrap;
	}

	/* Ensure the icon moves up on hover of the list item */
	li:hover .icon {
		transform: translateY(-10px); /* Adjust the value as needed */
		transition: transform 0.3s ease; /* Smooth transition */
	}

	/* Apply the shiny effect to the icon container on hover of the parent <li> */
	li:hover .icon::after {
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
	li:hover .icon::after {
		transform: scale(1);
	}

	/* Ensure the icon container has a relative position */
	.icon {
		transition: transform 0.3s ease;
		position: relative;
		overflow: visible;
		width: var(--cds-spacing-09);
		background-color: var(--ctp-surface0);
		border: 2px solid var(--ctp-overlay0);
		border-radius: 10%;
		display: flex;
		padding: var(--cds-spacing-01);
		transition:
			border-color motion.$duration-slow-02 motion.motion(standard, expressive),
			background-color motion.$duration-slow-02
				motion.motion(standard, expressive),
			scrollbar-color motion.$duration-slow-02
				motion.motion(standard, expressive),
			opacity motion.$duration-slow-02 motion.motion(standard, expressive),
			background-image motion.$duration-slow-02
				motion.motion(standard, expressive);
	}
	/* Apply the shiny effect to the icon container on hover */
	li:hover::after {
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

	a::before {
		content: '';
		position: absolute;
		top: 0;
		left: 0;
		width: 100%;
		height: 100%;
		border-radius: 10%;
		background: var(--ctp-blue);
		transform: scale(0.9);
		z-index: -1;
	}

	li:hover .icon::before {
		transform: scale(1.1);
		box-shadow: 0 0 5px var(--ctp-blue);
	}

	li:hover .icon {
		color: var(--ctp-surface1);
		box-shadow: 0 0 5px var(--ctp-blue);
		text-shadow: 0 0 5px var(--ctp-blue);
	}

	.yellow:hover {
		color: var(--ctp-yellow);
		text-shadow:
			-1px -1px 0 #000,
			1px -1px 0 #000,
			-1px 1px 0 #000,
			1px 1px 0 #000;
	}

	.pink:hover {
		color: var(--ctp-pink);
		text-shadow:
			-1px -1px 0 #000,
			1px -1px 0 #000,
			-1px 1px 0 #000,
			1px 1px 0 #000;
	}

	.flamingo:hover {
		color: var(--ctp-flamingo);
		text-shadow:
			-1px -1px 0 #000,
			1px -1px 0 #000,
			-1px 1px 0 #000,
			1px 1px 0 #000;
	}

	.rosewater:hover {
		color: var(--ctp-rosewater);
		text-shadow:
			-1px -1px 0 #000,
			1px -1px 0 #000,
			-1px 1px 0 #000,
			1px 1px 0 #000;
	}

	.peach:hover {
		color: var(--ctp-peach);
		text-shadow:
			-1px -1px 0 #000,
			1px -1px 0 #000,
			-1px 1px 0 #000,
			1px 1px 0 #000;
	}

	.red:hover {
		color: var(--ctp-red);
		text-shadow:
			-1px -1px 0 #000,
			1px -1px 0 #000,
			-1px 1px 0 #000,
			1px 1px 0 #000;
	}

	.mauve:hover {
		color: var(--ctp-mauve);
		text-shadow:
			-1px -1px 0 #000,
			1px -1px 0 #000,
			-1px 1px 0 #000,
			1px 1px 0 #000;
	}

	.sky:hover {
		color: var(--ctp-sky);
		text-shadow:
			-1px -1px 0 #000,
			1px -1px 0 #000,
			-1px 1px 0 #000,
			1px 1px 0 #000;
	}

	.green:hover {
		color: var(--ctp-green);
		text-shadow:
			-1px -1px 0 #000,
			1px -1px 0 #000,
			-1px 1px 0 #000,
			1px 1px 0 #000;
	}

	.yellow {
		color: var(--ctp-yellow);
		text-shadow:
			-1px -1px 0 #000,
			1px -1px 0 #000,
			-1px 1px 0 #000,
			1px 1px 0 #000;
	}

	.pink {
		color: var(--ctp-pink);
		text-shadow:
			-1px -1px 0 #000,
			1px -1px 0 #000,
			-1px 1px 0 #000,
			1px 1px 0 #000;
	}

	.flamingo {
		color: var(--ctp-flamingo);
		text-shadow:
			-1px -1px 0 #000,
			1px -1px 0 #000,
			-1px 1px 0 #000,
			1px 1px 0 #000;
	}

	.rosewater {
		color: var(--ctp-rosewater);
		text-shadow:
			-1px -1px 0 #000,
			1px -1px 0 #000,
			-1px 1px 0 #000,
			1px 1px 0 #000;
	}

	.peach {
		color: var(--ctp-peach);
		text-shadow:
			-1px -1px 0 #000,
			1px -1px 0 #000,
			-1px 1px 0 #000,
			1px 1px 0 #000;
	}

	.red {
		color: var(--ctp-red);
		text-shadow:
			-1px -1px 0 #000,
			1px -1px 0 #000,
			-1px 1px 0 #000,
			1px 1px 0 #000;
	}

	.mauve {
		color: var(--ctp-mauve);
		text-shadow:
			-1px -1px 0 #000,
			1px -1px 0 #000,
			-1px 1px 0 #000,
			1px 1px 0 #000;
	}

	.sky {
		color: var(--ctp-sky);
		text-shadow:
			-1px -1px 0 #000,
			1px -1px 0 #000,
			-1px 1px 0 #000,
			1px 1px 0 #000;
	}

	.green {
		color: var(--ctp-green);
		text-shadow:
			-1px -1px 0 #000,
			1px -1px 0 #000,
			-1px 1px 0 #000,
			1px 1px 0 #000;
	}
</style>
