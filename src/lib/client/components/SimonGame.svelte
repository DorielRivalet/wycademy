<script lang="ts">
	import HuntingHornNoteIcon from './frontier/icon/HuntingHornNoteIcon.svelte';
	import SimonButton from './SimonButton.svelte';
	import { onMount } from 'svelte';
	import c4 from '$lib/client/sounds/c4.opus';
	import d4 from '$lib/client/sounds/d4.opus';
	import e4 from '$lib/client/sounds/e4.opus';
	import f4 from '$lib/client/sounds/f4.opus';
	import g4 from '$lib/client/sounds/g4.opus';
	import a4 from '$lib/client/sounds/a4.opus';
	import b4 from '$lib/client/sounds/b4.opus';
	import c5 from '$lib/client/sounds/c5.opus';

	export let simonNotes: string[];
	export let currentSequence: string[] = [];
	export let targetSequence: string[] = [];
	export let simonScore: number = 0;

	let isPlaying = false;
	let isShowingSequence = false;
	let pressedButton: string | null = null;
	let currentIndex = 0;
	let sounds: Record<string, HTMLAudioElement> = {};

	const noteColors = {
		White: 'var(--fz-hh-note-white)',
		Blue: 'var(--fz-hh-note-blue)',
		Cyan: 'var(--fz-hh-note-cyan)',
		Green: 'var(--fz-hh-note-green)',
		Red: 'var(--fz-hh-note-red)',
		Yellow: 'var(--fz-hh-note-yellow)',
		Purple: 'var(--fz-hh-note-purple)',
		Pink: 'var(--fz-hh-note-pink)',
	};

	onMount(() => {
		// Initialize audio elements
		const notes = ['c4', 'd4', 'e4', 'f4', 'g4', 'a4', 'b4', 'c5'];
		simonNotes.forEach((note, i) => {
			sounds[note] = new Audio(getNoteFile(notes[i]));
		});
	});

	function getNoteFile(note: string) {
		switch (note) {
			default:
				return c4;
			case 'c4':
				return c4;
			case 'd4':
				return d4;
			case 'e4':
				return e4;
			case 'f4':
				return f4;
			case 'g4':
				return g4;
			case 'a4':
				return a4;
			case 'b4':
				return b4;
			case 'c5':
				return c5;
		}
	}

	function playSound(note: string) {
		if (sounds[note]) {
			sounds[note].currentTime = 0;
			sounds[note].play();
		}
	}

	async function showSequence() {
		isShowingSequence = true;

		for (let i = 0; i < targetSequence.length; i++) {
			const note = targetSequence[i];
			pressedButton = note;
			playSound(note);
			await new Promise((resolve) => setTimeout(resolve, 1000));
			pressedButton = null;
			await new Promise((resolve) => setTimeout(resolve, 200));
		}

		isShowingSequence = false;
		currentIndex = 0;
	}

	function handlePress(note: string) {
		if (isShowingSequence || !isPlaying) return;

		pressedButton = note;
		playSound(note);

		if (note === targetSequence[currentIndex]) {
			currentIndex++;

			if (currentIndex === targetSequence.length) {
				// Sequence completed successfully
				simonScore++;
				currentIndex = 0;
				setTimeout(() => {
					addNewNote();
					showSequence();
				}, 1000);
			}
		} else {
			// Wrong note
			gameOver();
		}
	}

	function handleRelease() {
		pressedButton = null;
	}

	function addNewNote() {
		const randomNote =
			simonNotes[Math.floor(Math.random() * simonNotes.length)];
		targetSequence = [...targetSequence, randomNote];
	}

	function startGame() {
		isPlaying = true;
		simonScore = 0;
		targetSequence = [];
		currentIndex = 0;
		addNewNote();
		showSequence();
	}

	function gameOver() {
		isPlaying = false;
		targetSequence = [];
		// TODO
		setTimeout(() => {
			alert(`Game Over! Score: ${simonScore}`);
		}, 500);
	}
</script>

<div class="simon-game">
	<div class="button-grid">
		{#each simonNotes as note}
			<SimonButton
				color={noteColors[note]}
				isPressed={pressedButton === note}
				disabled={isShowingSequence}
				on:press={() => handlePress(note)}
				on:release={handleRelease}
			>
				<HuntingHornNoteIcon color={note} size="100%" />
			</SimonButton>
		{/each}
	</div>

	<p>Score: {simonScore}</p>

	{#if !isPlaying}
		<button class="start-button" on:click={startGame}> Start Game </button>
	{/if}
</div>

<style lang="scss">
	@use '@carbon/motion' as motion;

	.simon-game {
		display: flex;
		flex-direction: column;
		gap: 1rem;
		align-items: center;
	}

	.button-grid {
		display: flex;
		gap: 1rem;
		flex-wrap: wrap;
		margin-bottom: 2rem;
	}

	.start-button {
		padding: 1rem 2rem;
		font-size: 1.2rem;
		background-color: var(--ctp-surface0);
		border: none;
		border-radius: 8px;
		cursor: pointer;
		transition: transform motion.$duration-fast-02;
	}

	.start-button:hover {
		transform: scale(1.05);
	}
</style>
