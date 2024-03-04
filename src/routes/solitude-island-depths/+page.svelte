<!--
  ~ © 2023 Doriel Rivalet
  ~ Use of this source code is governed by a MIT license that can be
  ~ found in the LICENSE file.
-->

<script lang="ts">
	import { page } from '$app/stores';
	import SectionHeadingTopLevel from '$lib/client/components/SectionHeadingTopLevel.svelte';
	import logo from '$lib/client/images/logo.webp';
	import {
		authorName,
		authorUrl,
		datePublished,
		description,
		projectName,
		website,
	} from '$lib/constants';
	import Button from 'carbon-components-svelte/src/Button/Button.svelte';
	import Modal from 'carbon-components-svelte/src/Modal/Modal.svelte';
	import Notification from 'carbon-icons-svelte/lib/Notification.svelte';

	import Head from '$lib/client/components/Head.svelte';
	let url = $page.url.toString();
	let modalOpen = false;
	let time = `00:00.0`;
	let score = 0;
	let eaten = 0;
	let zapped = 0;
	let toasty = 0;
	let roasted = 0;
	let speed = 0;
	let snakeLenght = 0;
	let sound = true;
</script>

<Head
	title={'Solitude Island Depths'}
	{description}
	image={logo}
	{url}
	{website}
	{authorName}
	{datePublished}
	{authorUrl}
	contentType="WebPage"
	name={projectName}
	siteName={projectName}
/>

<div>
	<SectionHeadingTopLevel title="Solitude Island Depths" />
	<h2>🍡 Your guild food ran out 🍜</h2>
	<p class="subheader">Why not help Raviente eat some hunters? 🐍</p>
	<Button
		icon={Notification}
		kind="tertiary"
		on:click={() => (modalOpen = true)}>Instructions</Button
	>
	<Modal
		passiveModal
		bind:open={modalOpen}
		modalHeading="🐍 Snake Game 🐍"
		on:open
		on:close
	>
		<div class="modal-content">
			<p>Your objective is to fill the board completely by eating hunters.</p>
			<div class="inputs interface">
				<div><kbd>WASD</kbd> Movement</div>
				<div><kbd>P</kbd> Pause/Resume</div>
				<div><kbd>F</kbd> Fireball</div>
				<div><kbd>R</kbd> Ring of fire</div>
				<div><kbd>Shift</kbd> Run</div>
				<div><kbd>Spacebar</kbd> Paralysis</div>
			</div>
			<p>
				You cannot use any abilities on the very last 5 tiles left or when the
				board is full.
			</p>
			<div class="dev-score">
				<p>Doriel Rivalet's highscore is:</p>
				<span id="devHighscore">11037 (17:04.70) 540/626🐍</span>
				<div class="subtle date">2023/10/13</div>
			</div>
			<p>Happy eating!</p>
			<i>Tip: Make a toast out of those hunters!</i>
		</div>
	</Modal>

	<div class="game-container">
		<div class="left">
			<Button
				icon={Notification}
				kind="tertiary"
				on:click={() => (modalOpen = true)}>Download History Logs</Button
			>
			<div class="img-container">
				<img
					id="sliding-image"
					src="assets/img/berserk_raviente.webp"
					alt="Sliding"
				/>
			</div>
			<canvas width="800" height="2400" id="eaten-items" class="interface"
			></canvas>
		</div>
		<canvas width="800" height="800" id="game"></canvas>
		<div class="right">
			<div class="button-container">
				<Button
					icon={Notification}
					kind="tertiary"
					on:click={() => (modalOpen = true)}>Play</Button
				>
				<Button
					icon={Notification}
					kind="tertiary"
					on:click={() => (sound = !sound)}>Sound {sound ? 'ON' : 'OFF'}</Button
				>
			</div>
			<progress id="energy" max="10" value="10"></progress>

			<div class="game-values">
				<div id="timer">{time}</div>
				<div id="score">{score}</div>
				<div id="speed">{speed}</div>
				<div id="snake-length">{snakeLenght}</div>
				<div class="hit-hunters">
					<div id="eaten">{eaten}</div>
					<div id="roasted">{roasted}</div>
					<div id="zapped">{zapped}</div>
					<div id="toasty">{toasty}</div>
				</div>
			</div>

			<div id="game-console" class="interface">
				<div>You are hungry.</div>
			</div>
		</div>
	</div>
</div>

<style>
	h2 {
		margin-bottom: 0;
	}

	.dev-score {
		margin-top: 1rem;
		margin-bottom: 1rem;
	}

	#devHighscore {
		color: #f38ba8;
		font-weight: bold;
		font-size: 2rem;
	}

	.date {
		font-size: 18px;
		font-style: italic;
		font-weight: bold;
		margin: 1rem;
	}

	.modal-content {
		padding: 0.5rem;
		text-align: center; /* Center text horizontally */
		display: flex;
		flex-direction: column;
		align-items: center; /* Center text vertically */
		justify-content: center;
		height: 100%; /* Ensure the content takes the full height */
	}

	#game {
		border: 8px solid #313244;
		background-color: #40a02b;
		border-radius: 1rem;
		text-align: center;
	}

	#score,
	#speed,
	#timer,
	#eaten,
	#roasted,
	#zapped,
	#toasty,
	#snake-length {
		font-family: 'MS Gothic', sans-serif;
		font-size: 20px;
		font-weight: bold;
	}

	#roasted {
		color: #eba0ac;
	}

	#zapped {
		color: #f5e0dc;
	}

	#toasty {
		color: #f5c2e7;
	}

	#timer {
		text-align: center;
	}

	#sliding-image {
		max-width: 250px;
		position: absolute;
		left: -100%; /* position outside the left border */
		transition: left 0.3s ease-in-out; /* transition effect for left property */
	}

	.game-container {
		display: grid;
		grid-template-columns: repeat(3, 1fr);
		gap: 1rem;
		padding-bottom: 4rem;
		max-width: 100vw;
	}

	.left,
	.right {
		padding: 1rem;
	}

	.left {
		display: flex;
		gap: 1rem;
		flex-direction: column;
		max-height: 800px;
		max-width: 250px;
	}

	.right {
		display: flex;
		gap: 1rem;
		flex-direction: column;
		max-width: 250px;
		max-height: 800px;
	}

	.item-container {
		display: flex;
		flex-direction: column;
		gap: 1rem;
		align-items: center;
	}

	.eaten-red,
	.eaten-black,
	.eaten-yellow {
		padding-left: 1rem;
		padding-right: 1rem;
		background-color: #181825;
		max-height: 200px;
		text-wrap: break-word;
		overflow-y: auto;
		word-wrap: break-word; /* Allow long words to wrap */
		white-space: pre-line; /* Preserve line breaks */
	}

	.eaten-red {
		border: 2px solid #f38ba8;
		border-radius: 4px;
	}

	.eaten-black {
		border: 2px solid #cdd6f4;
		border-radius: 4px;
	}

	.eaten-yellow {
		border: 2px solid #f9e2af;
		border-radius: 4px;
	}

	.inputs {
		display: flex;
		flex-direction: column;
		gap: 0.5rem;
		text-align: left;
		padding: 1rem;
		max-width: 50%;
	}

	.game-values {
		display: flex;
		flex-direction: column;
		gap: 0.5rem;
	}

	.hit-hunters {
		display: grid;
		grid-template-columns: 1fr 1fr;
		text-align: left;
	}

	#game-console {
		word-wrap: break-word; /* Allow long words to wrap */
		white-space: pre-line; /* Preserve line breaks */
		padding: 1rem;
		font-size: 16px;
		font-style: italic;
		display: flex;
		flex-direction: column;
		gap: 1rem;
		overflow: auto;
		height: 100%;
	}

	.interface {
		background-color: #181825;
		border: 1px solid #313244;
		border-radius: 0.5rem;
	}

	progress[value] {
		/* Reset the default appearance */
		-webkit-appearance: none;
		appearance: none;

		width: 100%;
		height: 1rem;
	}

	progress[value]::-webkit-progress-bar {
		background-color: #eee;
		border-radius: 2px;
		box-shadow: 0 2px 5px rgba(0, 0, 0, 0.25) inset;
	}

	progress[value]::-webkit-progress-value {
		background-image:
			-webkit-linear-gradient(
				-45deg,
				transparent 33%,
				rgba(0, 0, 0, 0.1) 33%,
				rgba(0, 0, 0, 0.1) 66%,
				transparent 66%
			),
			-webkit-linear-gradient(top, rgba(255, 255, 255, 0.25), rgba(0, 0, 0, 0.25)),
			-webkit-linear-gradient(left, #f38ba8, #f9e2af);

		border-radius: 2px;
		background-size:
			35px 20px,
			100% 100%,
			100% 100%;
	}

	.table {
		position: relative;
		left: 0;
		animation: moveRight 3600s linear infinite; /* Adjust the duration as needed */
	}
	.subheader {
		color: #bac2de;
		font-weight: bold;
		font-size: 24px;
	}
	.subtle {
		color: #7f849c;
	}
	@keyframes moveRight {
		0% {
			left: 0;
		}
		100% {
			left: 100%; /* Adjust the distance to move */
		}
	}
	.fade-in {
		opacity: 0;
		animation: fadeIn 8s ease-in-out infinite alternate;
	}

	@keyframes fadeIn {
		0% {
			opacity: 0;
		}
		100% {
			opacity: 1;
		}
	}

	a {
		color: #89b4fa;
	}

	a:hover {
		color: #89dceb;
	}

	.disabled {
		opacity: 0.5;
	}

	.disabled:hover {
		cursor: not-allowed;
	}

	.paused {
		background-color: #f9e2af;
	}

	.off,
	.game-over {
		background-color: #f38ba8;
	}

	kbd {
		background-color: #eff1f5;
		border-radius: 3px;
		border: 1px solid #b4b4b4;
		box-shadow:
			0 1px 1px rgba(0, 0, 0, 0.2),
			0 2px 0 0 rgba(255, 255, 255, 0.7) inset;
		color: #4c4f69;
		display: inline-block;
		font-size: 0.85em;
		font-weight: 700;
		line-height: 1;
		padding: 2px 4px;
		white-space: nowrap;
	}
</style>
