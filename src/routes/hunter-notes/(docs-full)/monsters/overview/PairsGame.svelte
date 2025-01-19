<script lang="ts">
	import { getUniqueMonsters } from '$lib/client/modules/frontier/monsters';
	import type { FrontierMonsterInfo } from '$lib/client/modules/frontier/types';
	import Button from 'carbon-components-svelte/src/Button/Button.svelte';
	import RandomMonster from '$lib/client/images/monster/random.webp';
	import DocumentDownload from 'carbon-icons-svelte/lib/DocumentDownload.svelte';
	import { formatDate } from '$lib/client/modules/time';

	let uniqueMonsters = getUniqueMonsters().sort(
		(a, b) =>
			(a?.displayName?.codePointAt(0) ?? 0) -
			(b?.displayName?.codePointAt(0) ?? 0),
	);
	let currentMonsters = $state(uniqueMonsters);

	interface Card {
		id: number;
		monster: FrontierMonsterInfo;
		isFlipped: boolean;
		isMatched: boolean;
	}

	// Game state
	let cards: Card[] = $state([]);
	let flippedCards: Card[] = $state([]);
	let matchedPairs: string[] = $state([]);
	let gameState: 'idle' | 'running' | 'ended' = $state('idle');
	let timerInterval: NodeJS.Timeout;
	let turns = $state(0);
	let timer = $state(0);
	let score = $state(0);
	let logs = $state(['']);

	const EASTER_EGG_SCORE = 1500;
	const EASTER_EGG_TIMER = 120;
	const EASTER_EGG_TURNS = 50;

	function initializeGame() {
		// Create a copy of the monsters array to avoid modifying the original
		const monsterPool = [...currentMonsters];
		const selectedMonsters = [];

		// Randomly select 18 monsters for the 6x6 grid (36 cards total)
		for (let i = 0; i < 18; i++) {
			const randomIndex = Math.floor(Math.random() * monsterPool.length);
			selectedMonsters.push(monsterPool[randomIndex]);
			// Remove the selected monster from the pool to avoid duplicates
			monsterPool.splice(randomIndex, 1);
		}

		// Create pairs
		const cardPairs = [...selectedMonsters, ...selectedMonsters];

		// Shuffle cards
		cards = cardPairs
			.sort(() => Math.random() - 0.5)
			.map((monster, index) => ({
				id: index,
				monster,
				isFlipped: false,
				isMatched: false,
			}));

		flippedCards = [];
		matchedPairs = [];
		logs = [''];
		score = 0;
		timer = 0;
		turns = 0;
		gameState = 'running';
		if (timerInterval) clearInterval(timerInterval);
		startTimer();
	}

	// Start timer
	function startTimer() {
		timerInterval = setInterval(() => {
			timer += 1;
		}, 1000);
	}

	// Format time
	function formatTime(seconds: number) {
		const mins = Math.floor(seconds / 60);
		const secs = seconds % 60;
		return `${mins}:${secs.toString().padStart(2, '0')}`;
	}

	// Handle card click
	function handleCardClick(card: Card) {
		if (flippedCards.length === 2 || card.isFlipped || card.isMatched) return;

		// Flip card
		card.isFlipped = true;
		flippedCards = [...flippedCards, card];

		// Check for match when two cards are flipped
		if (flippedCards.length === 2) {
			const [firstCard, secondCard] = flippedCards;

			turns++;

			if (firstCard.monster.icon === secondCard.monster.icon) {
				// Match found
				firstCard.isMatched = true;
				secondCard.isMatched = true;
				matchedPairs = [...matchedPairs, firstCard.monster.icon];
				score += 100;
				logs.push(`${logs.length}. ${timer}s ${score} (${turns} turns)`);
				flippedCards = [];

				// Check if game is complete
				if (matchedPairs.length === cards.length / 2) {
					gameState = 'ended';
					clearInterval(timerInterval);
				}
			} else {
				// No match
				score = Math.max(0, score - 10);
				setTimeout(() => {
					firstCard.isFlipped = false;
					secondCard.isFlipped = false;
					flippedCards = [];
				}, 1000);
			}
		}
	}

	function downloadLogs() {
		let text = logs.join('\n');
		let blob = new Blob([text], { type: 'text/plain' });
		const url = URL.createObjectURL(blob);

		let a = document.createElement('a');
		a.href = url;
		a.download = `wycademy-pairs-history-logs-${formatDate(new Date())}.txt`;
		a.click();
	}
</script>

<div class="game-container">
	<div class="game-header">
		<button class="start-button" onclick={initializeGame}
			>{gameState === 'idle' ? 'Start Game' : 'Restart'}</button
		>
		<div class="turns">Turns: {turns}</div>
		<div class="timer">Time: {formatTime(timer)}</div>
		<div class="score">Score: {score}</div>
	</div>

	<div class="game-grid">
		{#each cards as card (card.id)}
			<!-- svelte-ignore a11y_click_events_have_key_events -->
			<!-- svelte-ignore a11y_no_static_element_interactions -->
			<div
				class="card {card.isFlipped ? 'flipped' : ''} {card.isMatched
					? 'matched'
					: ''}"
				onclick={() => handleCardClick(card)}
			>
				<div class="card-inner">
					<div class="card-front">
						<!-- Question mark or card back design -->
						<img src={RandomMonster} alt="Card Back Design" />
					</div>
					<div class="card-back">
						<img src={card.monster.icon} alt={card.monster.displayName} />
					</div>
				</div>
			</div>
		{/each}
	</div>

	{#if gameState === 'ended'}
		<div class="game-over">
			<h2>Congratulations!</h2>
			<p>You completed the game in {formatTime(timer)} ({turns} turns)</p>
			<p><strong>Final Score: {score}</strong></p>
			<p class="dev-score">
				Doriel's Score: 1600 in 1:25, 40 turns (2024-11-21)
			</p>
			<Button
				icon={DocumentDownload}
				kind="tertiary"
				on:click={() => downloadLogs()}>Download History Logs</Button
			>
			{#if score >= EASTER_EGG_SCORE && timer <= EASTER_EGG_TIMER && turns <= EASTER_EGG_TURNS}
				<!--TODO: easter egg different hint-->
				<p>
					Phew! Not only you had to memorize the pairs, but you had to do it
					fast. You know what else is fast? A flappy Rathalos!
				</p>
			{/if}
		</div>
	{/if}
</div>

<style lang="scss">
	@use '@carbon/motion' as motion;
	@use '@carbon/type' as type;

	.dev-score {
		color: var(--ctp-subtext0);
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

	.game-container {
		display: flex;
		flex-direction: column;
		gap: 1rem;
		align-items: center;
	}

	.game-header {
		display: flex;
		justify-content: space-between;
		align-items: center;
		margin-bottom: 20px;
		gap: 2rem;
	}

	.game-grid {
		display: grid;
		grid-template-columns: repeat(6, 96px);
		gap: 10px;
	}

	.card {
		aspect-ratio: 1;
		perspective: 1000px;
		cursor: pointer;
		filter: drop-shadow(0px 0px 2px var(--ctp-overlay2));
	}

	.card-inner {
		position: relative;
		width: 100%;
		height: 100%;
		text-align: center;
		transition: transform 0.6s;
		transform-style: preserve-3d;
	}

	.card.flipped .card-inner {
		transform: rotateY(180deg);
	}

	.card-front,
	.card-back {
		position: absolute;
		width: 100%;
		height: 100%;
		backface-visibility: hidden;
		display: flex;
		align-items: center;
		justify-content: center;
		background: var(--ctp-surface0);
		border: 2px solid var(--ctp-surface1);
		border-radius: 8px;
	}

	.card-front {
		background: var(--ctp-overlay0);
		color: var(--ctp-text);
		font-size: 2em;

		img {
			max-width: 80%;
			max-height: 80%;
			object-fit: contain;
		}
	}

	.card-back {
		transform: rotateY(180deg);
	}

	.card-back img {
		max-width: 80%;
		max-height: 80%;
		object-fit: contain;
	}

	.card.matched {
		opacity: 0.7;
		filter: drop-shadow(0px 0px 4px var(--ctp-green));
	}

	.game-over {
		position: fixed;
		top: 50%;
		left: 50%;
		transform: translate(-50%, -50%);
		background: var(--ctp-surface0);
		padding: 20px;
		border-radius: 8px;
		box-shadow: 0 0 10px rgba(0, 0, 0, 0.2);
		display: flex;
		flex-direction: column;
		gap: 1rem;
		justify-content: center;
		align-items: center;
		text-align: center;
	}

	.turns,
	.timer,
	.score {
		font-weight: bold !important;
		@include type.type-style('code-02');
	}
</style>
