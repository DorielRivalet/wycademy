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
	import { fade, fly } from 'svelte/transition';
	import DocumentDownload from 'carbon-icons-svelte/lib/DocumentDownload.svelte';
	import Button from 'carbon-components-svelte/src/Button/Button.svelte';

	interface Props {
		simonNotes: string[];
		currentSequence?: string[];
		targetSequence?: string[];
		simonScore?: number;
	}

	let {
		simonNotes,
		currentSequence = $bindable([]),
		targetSequence = $bindable([]),
		simonScore = $bindable(0),
	}: Props = $props();

	const initialPressedDuration = 1000;
	const finalPressedDuration = 500;
	const durationDecrease = 20;

	let currentDuration = initialPressedDuration;
	let isPlaying = $state(false);
	let isShowingSequence = $state(false);
	let pressedButton: string | null = $state(null);
	let currentIndex = 0;
	let sounds: Record<string, HTMLAudioElement> = {};
	let playedTargetSequence: string[] = $state([]);
	let lastTargetSequence: string[] = [];

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
		playedTargetSequence = [];

		for (let i = 0; i < targetSequence.length; i++) {
			const note = targetSequence[i];
			pressedButton = note;
			playSound(note);
			currentDuration = Math.max(
				currentDuration - durationDecrease,
				finalPressedDuration,
			);
			playedTargetSequence = [...playedTargetSequence, note];
			await new Promise((resolve) => setTimeout(resolve, currentDuration));
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
		currentSequence = [...currentSequence, note];

		if (note === targetSequence[currentIndex]) {
			currentIndex++;

			if (currentIndex === targetSequence.length) {
				// Sequence completed successfully
				simonScore++;
				currentIndex = 0;
				currentSequence = [];
				setTimeout(() => {
					addNewNote();
					showSequence();
				}, 1000);
			}
		} else {
			// Wrong note
			lastTargetSequence = targetSequence;
			gameOver();
		}
	}

	function padTo2Digits(num: number) {
		return num.toString().padStart(2, '0');
	}

	function formatDate(date: Date) {
		return (
			[
				date.getFullYear(),
				padTo2Digits(date.getMonth() + 1), // +1 because getMonth() is zero-based
				padTo2Digits(date.getDate()),
			].join('-') +
			'-' +
			[
				padTo2Digits(date.getHours()),
				padTo2Digits(date.getMinutes()),
				padTo2Digits(date.getSeconds()),
			].join('-')
		);
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
		currentSequence = [];
		playedTargetSequence = [];
		currentIndex = 0;
		currentDuration = initialPressedDuration;
		addNewNote();
		showSequence();
	}

	function downloadLogs() {
		let text = lastTargetSequence.join('\n'); // create a string from the historyLogs array, with each log on a new line
		let blob = new Blob([text], { type: 'text/plain' }); // create a new Blob object representing the data in the specified formats
		const url = URL.createObjectURL(blob); // create a URL representing the Blob object

		let a = document.createElement('a'); // create a new <a> element
		a.href = url; // set the href of the <a> element to the URL
		a.download = `wycademy-hh-history-logs-${formatDate(new Date())}.txt`; // set the download attribute, so clicking the link will download the text file
		a.click(); // programmatically click the <a> element to trigger the download
	}

	function gameOver() {
		isPlaying = false;
		targetSequence = [];
		currentSequence = [];
		playedTargetSequence = [];
		currentDuration = initialPressedDuration;
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

	<div class="notes-container">
		{#if isShowingSequence}
			<div class="notes-grid">
				{#each playedTargetSequence as note}
					<div in:fly={{ y: -50, duration: 150 }} out:fade={{ duration: 200 }}>
						<HuntingHornNoteIcon color={note} size="64px" />
					</div>
				{/each}
			</div>
		{:else}
			<div class="notes-grid">
				{#each currentSequence as note}
					<div in:fly={{ y: -50, duration: 150 }} out:fade={{ duration: 200 }}>
						<HuntingHornNoteIcon color={note} size="64px" />
					</div>
				{/each}
			</div>
		{/if}
	</div>

	<p>Score: {simonScore}</p>

	{#if !isPlaying}
		<p style:color="var(--ctp-subtext0)">Doriel's score: 18 (2024-11-17)</p>
		<button class="start-button" onclick={startGame}> Start Game </button>
		<Button
			icon={DocumentDownload}
			kind="tertiary"
			on:click={() => downloadLogs()}>Download History Logs</Button
		>
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

	@media (min-width: 320px) {
		.button-grid {
			display: grid;
			gap: 1rem;
			margin-bottom: 2rem;
			grid-template-columns: 1fr 1fr;
			grid-template-rows: 1fr 1fr 1fr 1fr;
		}
	}

	@media (min-width: 672px) {
		.button-grid {
			display: grid;
			gap: 1rem;
			margin-bottom: 2rem;
			grid-template-rows: 1fr 1fr;
			grid-template-columns: 1fr 1fr 1fr 1fr;
		}
	}

	.notes-grid {
		display: grid;
		grid-template-columns: 1fr 1fr 1fr 1fr;
	}

	.start-button {
		all: unset;
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
