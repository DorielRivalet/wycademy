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

	const COLORS = {
	red: '#f38ba8',
	yellow: '#f9e2af',
	black: '#6c7086',
	white: '#cdd6f4',
	purple: '#cba6f7',
	blue: '#89b4fa',
	orange: '#fab387',
	pink: '#f5c2e7',
	maroon: '#eba0ac',
	border: '#313244',
	rosewater: '#f5e0dc',
	green: '#a6e3a1',
};

const fireballColors = {
	hit: COLORS.maroon,
	toasty: COLORS.pink,
};

const paralysisColor = COLORS.rosewater;

const consoleMessages = {
	boardFull: 'Board is full!',
	maxSpeed: 'You are already at maximum speed!',
	ringOfFireReady: 'You can now unleash your ultimate attack! 🔥',
	ringOfFireEnabled: 'You activated the ring of fire! 🔥',
	ringOfFireTouched: 'You gained extra speed! 🔥',
	ringOfFireDisabled: 'You do not have the proper setup!',
	ringOfFireFinished: 'Flame on! 🔥',
	win: 'Congratulations! You have successfully completed the game. You are now bigger than a Dalamadur. 🏆',
	startingText: 'You are hungry.',
	noEnergy: 'Ran out of energy! 💨',
	missingEnergy: 'Not enough energy! 💨',
	toasty: 'Toasty! 🍞',
	paralysis: [
		'Bzzz! ⚡',
		'Zap! ⚡',
		'This snake is high voltage! ⚡',
		'Used a lot of energy! ⚡',
		'Snake microwave! ⚡',
		'POWER! UNLIMITED POWER! ⚡',
	],
	redHunter: [
		'Please no! I have family!',
		'This is what happens when no one goes support...',
		'Sedation when? zZz',
		'Making this very clear: we are no longer bothering Raviente.',
		'Halp!',
		'*Gulp*',
		'*Nom nom nom*',
		'Ahhh, fresh meat.',
		'Yummy!',
		'This hunter smells like shiriagari fruit.',
		"I'm going hungry (Going hungry, yeah)",
		"I guess I'll never get a Z100...",
		'Looks like this raid is going to fail.',
		'Ahhh!',
		'Oh no!',
		'Run!',
		'Call reinforcements!',
		'We need to make a huge dragonator.',
		'I guess this is it...',
		'Who let the snake out?',
		'Taking this quest was a mistake.',
		'I wish I had a Magnet Spike.',
	],
	yellowHunter: [
		'A flash of yellow light was dispersed around the area.',
		'Feeling rejuvenated!',
		'I have hunger for glory.',
		"You ate a hunter's shiny weapon. On the back it says: Z100, do not steal.",
		'This hunter ate a Flashbug on accident.',
		'Moar fireballs!',
	],
	blackHunter: [
		"This hunter's diet was based on Bitterbugs.",
		"This doesn't taste good.",
		'Yuck!',
		'Bleugh!',
		'I feel nauseous...',
		"I don't feel so good...",
		'*Cough Cough*',
		'My dissappoinment is immeasurable and my day is ruined.',
		"This hunter was wearing black dragon armor, my gut won't like it...",
		'Careful, this can give food poisoning!',
	],
	/**when not using paralysis */
	whiteHunter: [
		'Olé!',
		'The hunter automatically dodged your attack.',
		"This hunter has stylish gear, eating him won't be easy.",
		'The hunter is wearing a white mantle, and manages to escape.',
		'Too slow!',
		'Catch me if you can!',
		'I have Evasion+4!',
		'Using area guard!',
		'The hunter perfect reflected everything.',
		'The hunter got healed back by a teammate.',
		'The hunter used transcend just in time.',
		'The hunter has 300 carts available.',
		'Your attack was parried.',
		'The hunter is spamming fade slashes',
		'The hunter has True Guts.',
		'The hunter has Soul Revival.',
	],
	purpleHunterEat: [
		'We found one of the best hunters the guild has to offer.',
		'The hunter hit you so hard that it gave you a concussion.',
		'This is a pretty tough hunter.',
		'This hunter definitely has solid determination.',
		'You are poisoned!',
		'Find a way to shake off the poison!',
		'You feel weak.',
		'You notice your body slowly deteriorating...',
		'What is this?!',
	],
	purpleHunterBurn: [
		"This hunter won't go down without a fight!",
		'I can do this all day.',
		"Ow! I'm suffocating.",
		'Ouch! That burns.',
	],
	blueHunterHit: [
		'Is that all you got?',
		'Get over here!',
		'Come here!',
		'That tickles.',
	],
	blueHunterBurned: [
		'Frosty! ❄️',
		'This goes well with some iced coffee. ☕',
		"She's so cold cold cold like an ice cream cone. 🍦",
		'Frozen meal is ready! 🍽️',
	],
	/**fireball hit. also orangeHunter */
	fireball: [
		'Everyone aboard the Ravi train! 🚂',
		'All aboard! Hahahahaha... 🚆',
		'Crispy! 🔥',
		'A Well-Done Steak is ready! 🍖',
		'Give me a BBQ Spit! 💢',
	],

	/**When shrinking in size */
	greenHunterFall: 'A hunter has fallen off your back.',
};

const GAME_STATES = {
	IDLE: 'idle',
	RUNNING: 'running',
	PAUSED: 'paused',
	GAME_OVER: 'game_over',
};

const DIRECTIONS = {
	right: 'right',
	left: 'left',
	up: 'up',
	down: 'down',
};

const DEATHS = {
	poison: 'You died from food poisoning. 💀',
	blueHunter: 'An experienced hunter stopped your massacre. 💀',
	blueBorder: 'You hit a fortified barricade. 💀',
	greenHunter: 'The hunter did aim for your head. 💀',
	default: 'You died. 💀',
};

const startingCells = 3;
const poisonedMinimumCells = 3;
/** per fireball hit. Also ring of fire. */
const roastedScoreIncrease = 2;
/**per paralyzed hunter */
const paralyzedScoreIncrease = 3;
/**Per turn. Sets the speed increase delay. */
const extraSpeedDelay = 5;

// TODO object holding all my const options in OOP format

const maxSpeed = 50;
const startingSpeed = 30;
const startingEnergy = 10;
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
