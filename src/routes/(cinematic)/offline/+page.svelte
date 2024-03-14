<!--
  ~ © 2023 Doriel Rivalet
  ~ Use of this source code is governed by a MIT license that can be
  ~ found in the LICENSE file.
-->

<script lang="ts">
	import { page } from '$app/stores';
	import SectionHeadingTopLevel from '$lib/client/components/SectionHeadingTopLevel.svelte';
	import pageThumbnail from '$lib/client/images/icon/berserk_raviente_raid.png';
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
	import { getHexStringFromCatppuccinColor } from '$lib/client/themes/catppuccin';
	import { theme } from '$lib/client/stores/theme';
	import ToastySound from '/assets/sound/toasty.mp3';
	import GameOverSound from '/assets/sound/mixkit-arcade-retro-game-over-213.wav';
	import FireballSound from '/assets/sound/flame.ogg';
	import FireballHitSound from '/assets/sound/mixkit-wizard-fire-woosh-1326.wav';
	import StartSound from '/assets/sound/mixkit-player-boost-recharging-2040.wav';
	import PauseSound from '/assets/sound/mixkit-zippo-fire-close-1334.wav';
	import ResumeSound from '/assets/sound/mixkit-quick-lock-sound-2854.wav';
	import WinSound from '/assets/sound/mixkit-video-game-win-2016.wav';
	import EatSound from '/assets/sound/mixkit-quick-jump-arcade-game-239.wav';
	import snakeEnergyGainSound from '/assets/sound/mixkit-quick-win-video-game-notification-269.wav';
	import snakeEnergyLossSound from '/assets/sound/mixkit-tech-break-fail-2947.wav';
	import ParalysisSound from '/assets/sound/continuousspark.wav';
	import NomNomNomSound from '/assets/sound/nomnomnom.mp3';
	import RingOfFireStartSound from '/assets/sound/fire_sound_effect.mp3';
	import BlueBorderActiveSound from '/assets/sound/shieldhit.wav';
	import UltimateReadySound from '/assets/sound/powerup.wav';
	import AudioConsole from 'carbon-icons-svelte/lib/AudioConsole.svelte';
	import GameConsole from 'carbon-icons-svelte/lib/GameConsole.svelte';
	import Book from 'carbon-icons-svelte/lib/Book.svelte';
	import DocumentDownload from 'carbon-icons-svelte/lib/DocumentDownload.svelte';
	import { browser } from '$app/environment';
	import { onMount } from 'svelte';
	import VolumeUp from 'carbon-icons-svelte/lib/VolumeUp.svelte';
	import VolumeMute from 'carbon-icons-svelte/lib/VolumeMute.svelte';
	interface HunterType {
		name: string;
		color: string; // Assuming COLORS is an object with string values for each color
		minAge: number;
		maxAge: number;
		burned: boolean;
		score: number;
		snakeGrowth: number;
		snakeSpeed: number;
		turnDelay: number;
		sound: string; // Assuming SOUNDS is an object with string values for each sound
		image: any; // Placeholder type for the image, adjust based on your actual implementation
		messages: any; // Placeholder type for messages, adjust based on your actual implementation
		consumable: boolean;
		flammable: boolean;
		conductive: boolean;
		biteEffect: () => any; // Function returning any, adjust based on your actual implementation
		fireballEffect: () => any; // Function returning any, adjust based on your actual implementation
		paralysisEffect: () => any; // Function returning any, adjust based on your actual implementation
		maxHealth: number;
		spawnMessage: string;
		snakeEnergyGain: number;
		snakeEnergyMaxGain: number;
	}

	type HunterTypes = {
		[key: string]: HunterType;
	};

	interface Hunter {
		x?: number;
		y?: number;
		age: any;
		climbed: any;
		burned: any;
		health?: number;
		climbCellIndex?: number;
	}

	const COLORS = {
		red: getHexStringFromCatppuccinColor('red', $theme),
		yellow: getHexStringFromCatppuccinColor('yellow', $theme),
		black: '#6c7086',
		white: '#cdd6f4',
		purple: getHexStringFromCatppuccinColor('mauve', $theme),
		blue: getHexStringFromCatppuccinColor('blue', $theme),
		orange: getHexStringFromCatppuccinColor('peach', $theme),
		pink: getHexStringFromCatppuccinColor('pink', $theme),
		maroon: getHexStringFromCatppuccinColor('maroon', $theme),
		border: '#313244',
		rosewater: getHexStringFromCatppuccinColor('rosewater', $theme),
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
		snakeNoEnergy: 'Ran out of energy! 💨',
		snakeMissingEnergy: 'Not enough energy! 💨',
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

	type GameState = 'start' | 'on' | 'pause' | 'end';
	type Direction = 'up' | 'down' | 'left' | 'right';
	type CanvasElement = {
		x: number;
		y: number;
		dx: number;
		dy: number;
		width: number;
		height: number;
	};

	type HunterCount = {
		red: number;
		blue: number;
		orange: number;
		white: number;
		black: number;
		yellow: number;
		purple: number;
		green: number;
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
	const snakeStartingEnergy = 10;

	const SOUNDS = {
		toasty: ToastySound,
		gameOver: GameOverSound,
		fireball: FireballSound,
		fireballHit: FireballHitSound,
		start: StartSound,
		pause: PauseSound,
		resume: ResumeSound,
		win: WinSound,
		eat: EatSound,
		snakeEnergyGain: snakeEnergyGainSound,
		snakeEnergyLoss: snakeEnergyLossSound,
		paralysis: ParalysisSound,
		nomnomnom: NomNomNomSound,
		ringOfFireStart: RingOfFireStartSound,
		blueBorderActive: BlueBorderActiveSound,
		ultimateReady: UltimateReadySound,
	};

	let turns = 0;

	// tiles
	let fireballs: CanvasElement[] = [];
	let ringOfFire: CanvasElement[] = [];
	let paralysisTiles: CanvasElement[] = [];
	let keyBuffer = [];
	let historyLogs: string[] = [];

	/**For color canvas */
	let hitHunters: string[] = [];

	/**If hitting 10 black hunters in a row with fireball, refill meter. */
	let toastyCount = 0;
	let canSpawnHunters = true;
	let drewRingOfFire = false;
	let drewParalysis = false;

	let speedColor = COLORS.white;

	function createImage(url: string) {
		let img = browser ? new Image() : { src: '' };
		img.src = url;
		return img;
	}

	function biteEffect(hunterType: { color: string }) {
		switch (hunterType.color) {
			case COLORS.green:
				return false;
			case COLORS.blue:
				return DEATHS.blueHunter;
			case COLORS.white:
				sendMessageToConsole(
					consoleMessages.whiteHunter[
						Math.floor(Math.random() * consoleMessages.whiteHunter.length)
					].toString(),
				);
				return false;
			case COLORS.red:
				snake.maxCells += HUNTER_TYPES.red.snakeGrowth;
				snake.extraSpeed = Math.min(
					snake.extraSpeed + HUNTER_TYPES.red.snakeSpeed,
					maxSpeed - startingSpeed,
				);
				hunters.forEach((hunter) => {
					if (hunter) {
						hunter.age++;
					}
				});
				score += HUNTER_TYPES.red.score;
				sendMessageToConsole(
					consoleMessages.redHunter[
						Math.floor(Math.random() * consoleMessages.redHunter.length)
					].toString(),
				);
				playSound(HUNTER_TYPES.red.sound);
				return true;
			case COLORS.black:
				snake.maxCells += HUNTER_TYPES.black.snakeGrowth;
				snake.extraSpeed = Math.min(
					snake.extraSpeed + HUNTER_TYPES.black.snakeSpeed,
					maxSpeed - startingSpeed,
				);
				snake.maxEnergy += HUNTER_TYPES.black.snakeEnergyMaxGain;
				snake.energy += HUNTER_TYPES.black.snakeEnergyGain;
				snake.energy = Math.max(snake.energy, 0);
				hunters.forEach((hunter) => {
					if (hunter) {
						hunter.age++;
					}
				});
				score += HUNTER_TYPES.black.score;
				sendMessageToConsole(
					consoleMessages.blackHunter[
						Math.floor(Math.random() * consoleMessages.blackHunter.length)
					].toString(),
				);
				playSound(HUNTER_TYPES.black.sound);
				return true;
			case COLORS.yellow:
				snake.maxCells += HUNTER_TYPES.yellow.snakeGrowth;
				snake.extraSpeed = Math.min(
					snake.extraSpeed + HUNTER_TYPES.yellow.snakeSpeed,
					maxSpeed - startingSpeed,
				);
				snake.maxEnergy += HUNTER_TYPES.yellow.snakeEnergyMaxGain;
				snake.energy += HUNTER_TYPES.yellow.snakeEnergyGain;
				snake.energy = Math.max(snake.energy, snake.maxEnergy);
				hunters.forEach((hunter) => {
					if (hunter) {
						hunter.age =
							hunter.age <= HUNTER_TYPES.black.maxAge ? 0 : hunter.age;
					}
				});
				score += HUNTER_TYPES.yellow.score;
				sendMessageToConsole(
					consoleMessages.yellowHunter[
						Math.floor(Math.random() * consoleMessages.yellowHunter.length)
					].toString(),
				);
				sendMessageToConsole(
					`You can now fire ${snake.maxEnergy} fireballs! 🔥`,
				);
				playSound(HUNTER_TYPES.yellow.sound);
				return true;
			case COLORS.purple:
				snake.maxCells += HUNTER_TYPES.purple.snakeGrowth;
				snake.extraSpeed = Math.min(
					snake.extraSpeed + HUNTER_TYPES.purple.snakeSpeed,
					maxSpeed - startingSpeed,
				);
				snake.maxEnergy += HUNTER_TYPES.purple.snakeEnergyMaxGain;
				snake.energy += HUNTER_TYPES.purple.snakeEnergyGain;
				snake.energy = Math.max(snake.energy, 0);
				hunters.forEach((hunter) => {
					if (hunter) {
						hunter.age += 5;
					}
				});
				score += HUNTER_TYPES.purple.score;
				sendMessageToConsole(
					consoleMessages.purpleHunterEat[
						Math.floor(Math.random() * consoleMessages.purpleHunterEat.length)
					].toString(),
				);
				playSound(HUNTER_TYPES.purple.sound);
				snake.poisoned = true;
				return true;
			case COLORS.orange:
				snake.maxCells += HUNTER_TYPES.orange.snakeGrowth;
				snake.extraSpeed = Math.min(
					snake.extraSpeed + HUNTER_TYPES.orange.snakeSpeed,
					maxSpeed - startingSpeed,
				);
				hunters.forEach((hunter) => {
					if (hunter) {
						hunter.age -= 10;
						hunter.age = Math.max(0, hunter.age);
					}
				});
				snake.maxEnergy += HUNTER_TYPES.orange.snakeEnergyMaxGain;
				snake.energy += HUNTER_TYPES.orange.snakeEnergyGain;
				snake.energy = Math.max(snake.energy, snake.maxEnergy);
				score += HUNTER_TYPES.orange.score;
				sendMessageToConsole(
					`You can now fire ${snake.maxEnergy} fireballs! 🔥`,
				);
				playSound(HUNTER_TYPES.orange.sound);
				return true;
			default:
				console.error('Could not eat hunter.', hunterType);
				return false;
		}
	}

	/**Also ring of fire */
	function fireballEffect(hunterType: HunterType) {
		switch (hunterType.color) {
			case COLORS.black:
				toastyCount++;
				return true;
			case COLORS.red:
			case COLORS.yellow:
			case COLORS.orange:
			case COLORS.green:
				if (!drewRingOfFire) {
					toastyCount = 0;
				}
				return true;
			case COLORS.blue:
			case COLORS.purple:
				if (!drewRingOfFire) {
					toastyCount = 0;
				}
				return drewRingOfFire;
			case COLORS.white:
				if (!drewRingOfFire) {
					toastyCount = 0;
				}
				if (drewRingOfFire) return true;
				sendMessageToConsole(
					consoleMessages.whiteHunter[
						Math.floor(Math.random() * consoleMessages.whiteHunter.length)
					].toString(),
				);
				return false;
			default:
				console.error('Could not burn hunter.', hunterType);
				return false;
		}
	}

	function paralysisEffect(hunterType: HunterType) {
		switch (hunterType.color) {
			case COLORS.white:
				score += HUNTER_TYPES.white.score;
				return true;
			case COLORS.red:
			case COLORS.black:
			case COLORS.orange:
				return true;
			case COLORS.green:
				score += HUNTER_TYPES.green.score;
				return true;
			case COLORS.purple:
			case COLORS.blue:
				return true;
			case COLORS.yellow:
				return false;
			default:
				console.error('Could not paralyze hunter.', hunterType);
				return false;
		}
	}

	const HUNTER_TYPES: HunterTypes = {
		red: {
			name: 'red',
			color: COLORS.red,
			minAge: -Infinity,
			maxAge: 4,
			burned: false,
			score: 1,
			snakeGrowth: 1,
			snakeSpeed: 0,
			turnDelay: 5,
			sound: SOUNDS.eat,
			image: createImage('/assets/img/hunter_red.webp'),
			messages: consoleMessages.redHunter,
			consumable: true,
			flammable: true,
			conductive: true,
			biteEffect: function () {
				return biteEffect(this);
			},
			fireballEffect: function () {
				return fireballEffect(this);
			},
			paralysisEffect: function () {
				return paralysisEffect(this);
			},
			maxHealth: 1,
			spawnMessage: 'Reinforcements have arrived.',
			snakeEnergyGain: 0,
			snakeEnergyMaxGain: 0,
		},
		yellow: {
			name: 'yellow',
			color: COLORS.yellow,
			minAge: 5,
			maxAge: 5,
			burned: false,
			score: 5,
			snakeGrowth: 2,
			snakeSpeed: 1,
			turnDelay: 0,
			sound: SOUNDS.snakeEnergyGain,
			image: createImage('/assets/img/hunter_yellow.webp'),
			messages: consoleMessages.yellowHunter,
			consumable: true,
			flammable: true,
			conductive: false,
			biteEffect: function () {
				return biteEffect(this);
			},
			fireballEffect: function () {
				return fireballEffect(this);
			},
			paralysisEffect: function () {
				return paralysisEffect(this);
			},
			maxHealth: 1,
			spawnMessage: 'Reinforcements have arrived.',
			snakeEnergyGain: 10,
			snakeEnergyMaxGain: 1,
		},
		black: {
			name: 'black',
			color: COLORS.black,
			minAge: 6,
			maxAge: 49,
			burned: false,
			score: -1,
			snakeGrowth: -1,
			snakeSpeed: -1,
			turnDelay: 0,
			sound: SOUNDS.snakeEnergyLoss,
			image: createImage('/assets/img/hunter_black.webp'),
			messages: consoleMessages.blackHunter,
			consumable: true,
			flammable: true,
			conductive: true,
			biteEffect: function () {
				return biteEffect(this);
			},
			fireballEffect: function () {
				return fireballEffect(this);
			},
			paralysisEffect: function () {
				return paralysisEffect(this);
			},
			maxHealth: 1,
			spawnMessage: 'Reinforcements have arrived.',
			snakeEnergyGain: -1,
			snakeEnergyMaxGain: 0,
		},
		white: {
			name: 'white',
			/**from purple w/ fireball */
			color: COLORS.white,
			minAge: 50,
			maxAge: 74,
			burned: false,
			score: 0,
			snakeGrowth: 0,
			snakeSpeed: 0,
			turnDelay: 10,
			// TODO
			sound: SOUNDS.snakeEnergyGain,
			image: createImage('/assets/img/hunter_white.webp'),
			messages: consoleMessages.whiteHunter,
			consumable: false,
			flammable: false,
			conductive: true,
			biteEffect: function () {
				return biteEffect(this);
			},
			fireballEffect: function () {
				return fireballEffect(this);
			},
			paralysisEffect: function () {
				return paralysisEffect(this);
			},
			maxHealth: 1,
			spawnMessage: 'A HR hunter has arrived.',
			snakeEnergyGain: 0,
			snakeEnergyMaxGain: 0,
		},
		purple: {
			name: 'purple',
			color: COLORS.purple,
			minAge: 75,
			maxAge: 99,
			burned: false,
			score: -10,
			snakeGrowth: -5,
			snakeSpeed: -5,
			turnDelay: 20,
			// TODO
			sound: SOUNDS.snakeEnergyLoss,
			image: createImage('/assets/img/hunter_purple.webp'),
			messages: consoleMessages.purpleHunterEat,
			consumable: true,
			flammable: true,
			conductive: false,
			biteEffect: function () {
				return biteEffect(this);
			},
			fireballEffect: function () {
				return fireballEffect(this);
			},
			paralysisEffect: function () {
				return paralysisEffect(this);
			},
			maxHealth: 1,
			spawnMessage: 'A G-Rank hunter has arrived.',
			snakeEnergyGain: -10,
			snakeEnergyMaxGain: 0,
		},
		blue: {
			name: 'blue',
			color: COLORS.blue,
			minAge: 100,
			maxAge: Infinity,
			burned: false,
			score: 0,
			snakeGrowth: 0,
			snakeSpeed: 0,
			turnDelay: 30,
			// TODO
			sound: SOUNDS.snakeEnergyLoss,
			image: createImage('/assets/img/hunter_blue.webp'),
			messages: consoleMessages.blueHunterHit,
			consumable: true, // but u die if u do
			flammable: true,
			conductive: false,
			biteEffect: function () {
				return biteEffect(this);
			},
			fireballEffect: function () {
				return fireballEffect(this);
			},
			paralysisEffect: function () {
				return paralysisEffect(this);
			},
			maxHealth: 3,
			spawnMessage: 'A legendary rasta has arrived.',
			snakeEnergyGain: 0,
			snakeEnergyMaxGain: 0,
		},
		orange: {
			name: 'orange',
			/**from blue w/ fireball */
			color: COLORS.orange,
			minAge: -Infinity,
			maxAge: Infinity,
			burned: true,
			score: 25,
			snakeGrowth: 5,
			snakeSpeed: 3,
			turnDelay: 0,
			// TODO
			sound: SOUNDS.nomnomnom,
			image: createImage('/assets/img/hunter_orange.webp'),
			messages: consoleMessages.fireball,
			consumable: true,
			flammable: true,
			conductive: true,
			biteEffect: function () {
				return biteEffect(this);
			},
			fireballEffect: function () {
				return fireballEffect(this);
			},
			paralysisEffect: function () {
				return paralysisEffect(this);
			},
			maxHealth: 1,
			spawnMessage: 'Reinforcements have arrived.',
			snakeEnergyGain: 30,
			snakeEnergyMaxGain: 5,
		},
		green: {
			name: 'green',
			color: COLORS.green,
			minAge: -Infinity, // unused
			maxAge: Infinity,
			burned: false,
			score: 50,
			snakeGrowth: 0,
			snakeSpeed: 0,
			turnDelay: 60,
			sound: SOUNDS.eat,
			image: createImage('/assets/img/hunter_green.webp'),
			messages: [''],
			consumable: false,
			flammable: true,
			conductive: true,
			biteEffect: function () {
				return biteEffect(this);
			},
			fireballEffect: function () {
				return fireballEffect(this);
			},
			paralysisEffect: function () {
				return paralysisEffect(this);
			},
			maxHealth: 1,
			spawnMessage: 'A hunter has climbed on your back, act quick!',
			snakeEnergyGain: 0,
			snakeEnergyMaxGain: 0,
		},
	};

	let soundEnabled = true;
	let gameState: GameState = 'start';

	let canvas;
	let context;
	let eaten_items_canvas;
	let eaten_items_canvas_context;
	let slotSize = 1;
	let consoleElement;

	onMount(() => {
		if (browser) {
			canvas = document.getElementById('game');
			context = canvas ? canvas.getContext('2d') : undefined;

			eaten_items_canvas = document.getElementById('eaten-items');
			eaten_items_canvas_context = eaten_items_canvas
				? eaten_items_canvas.getContext('2d')
				: undefined;

			slotSize = canvas ? canvas.width / gridSize : 1;

			consoleElement = document.getElementById('game-console');
		}
	});

	/**  the canvas width & height, snake x & y, and the hunter x & y, all need to be a multiples of the grid size in order for collision detection to work (e.g. 16 * 25 = 400)*/
	const grid = 32;

	let loopCount = 0;
	let score = 0;
	let borderColor = COLORS.border;

	const SNAKE_ACTIONS = {
		bite: {
			name: 'bite',
			cost: 0,
			hotkey: '',
		},
		fireball: {
			name: 'fireball',
			cost: 1,
			hotkey: 'f',
		},
		paralysis: {
			name: 'paralysis',
			cost: 10,
			hotkey: ' ',
		},
		ringOfFire: {
			name: 'ring of fire',
			cost: 20,
			hotkey: 'r',
		},
	};

	// TODO class
	let snake = {
		x: 160,
		y: 160,

		/**keep track of all grids the snake body occupies */
		cells: [] as CanvasElement[],

		/**length of the snake. grows when eating a hunter */
		maxCells: startingCells,
		speed: 0,
		extraSpeed: 0,
		running: false,
		firing: false,
		currentDirection: 'right' as Direction,
		paralysis: false,
		eaten: 0,
		roasted: 0,
		zapped: 0,
		toasty: 0,
		action: SNAKE_ACTIONS.bite.name,
		/**If eating purple hunter */
		poisoned: false,
		canBurnBlueBorder: false,
		canUseUltimate: false,
		energy: 10,
		maxEnergy: 10,
	};

	let hunters: Hunter[] = [
		{
			x: 320,
			y: 320,
			age: 0,
			climbed: false,
			burned: false,
			health: 1,
			climbCellIndex: 0,
		},
	];

	let activeHunters = {
		red: 0,
		blue: 0,
		orange: 0,
		white: 0,
		black: 0,
		yellow: 0,
		purple: 0,
		green: 0,
	};

	let headRightImage = { src: '' };
	let headLeftImage = { src: '' };
	let bodyImage = { src: '' };
	let tailRightImage = { src: '' };
	let tailLeftImage = { src: '' };
	let bodyParalysisImage = { src: '' };
	let paralysisTileImage = { src: '' };

	if (browser) {
		headRightImage = new Image();
		headLeftImage = new Image();
		bodyImage = new Image();
		tailRightImage = new Image();
		tailLeftImage = new Image();
		bodyParalysisImage = new Image();
		paralysisTileImage = new Image();
	}

	headRightImage.src = '/assets/img/head_right.webp';
	headLeftImage.src = '/assets/img/head_left.webp';
	bodyImage.src = '/assets/img/body.webp';
	tailRightImage.src = '/assets/img/tail_right.webp';
	tailLeftImage.src = '/assets/img/tail_left.webp';
	bodyParalysisImage.src = '/assets/img/body_paralysis.webp';
	paralysisTileImage.src = '/assets/img/paralysis.webp';

	// Variables to keep track of the timer
	let startTime = 0;
	let elapsedTime = 0;
	let timerInterval: string | number | NodeJS.Timeout | undefined;

	const gridSize = 25;
	// TODO adjust if canvas is full
	const maxSnakeLength = gridSize * gridSize + 1;

	function drawSlot(row: number, col: number, color: string) {
		eaten_items_canvas_context.fillStyle = color;
		eaten_items_canvas_context.fillRect(
			col * slotSize,
			row * slotSize,
			slotSize,
			slotSize,
		);
	}

	function formatTime(time: number) {
		const minutes = Math.floor(time / 60000);
		const seconds = Math.floor((time % 60000) / 1000);
		const hundredths = Math.floor((time % 1000) / 10);
		return `${minutes.toString().padStart(2, '0')}:${seconds
			.toString()
			.padStart(2, '0')}.${hundredths.toString().padStart(2, '0')}`;
	}

	function updateTimer() {
		const currentTime = Date.now();
		elapsedTime += currentTime - startTime;
		startTime = currentTime;
	}

	function isBoardFull() {
		if (!canSpawnHunters) return true;
		let full = true;
		for (let i = 0; i < canvas.width; i += grid) {
			for (let j = 0; j < canvas.height; j += grid) {
				let collision = snake.cells.some(
					(cell) => cell.x === i && cell.y === j,
				);
				let hunterCollision = hunters.some(
					(hunter) => hunter.x === i && hunter.y === j,
				);
				if (!collision && !hunterCollision) {
					full = false;
					break;
				}
			}
			if (!full) {
				break;
			}
		}
		if (full) {
			canSpawnHunters = false;
			// untested
			borderColor = COLORS.border;
		}
		return full;
	}

	/**ONE LINE */
	function getSnakeMiddleCell() {
		return Math.ceil((snake.cells.length - 1) / 2);
	}

	function generateHunter(
		age = 0,
		burned = false,
		health = 1,
		climbed = false,
		climbCellIndex = 0,
	): Hunter | undefined {
		// TODO add check for paralysis? remove?
		if (isBoardFull()) {
			return;
		}
		let x: number, y: number;
		if (climbed) {
			climbCellIndex = getSnakeMiddleCell();
			let originalMiddleCell = snake.cells[climbCellIndex];
			x = originalMiddleCell.x;
			y = originalMiddleCell.y;
		} else {
			while (true) {
				x = getRandomInt(0, gridSize) * grid;
				y = getRandomInt(0, gridSize) * grid;

				let collision = snake.cells.some(
					(cell) => cell.x === x && cell.y === y,
				);
				if (!collision) {
					let hunterCollision = hunters.some(
						(hunter) => hunter.x === x && hunter.y === y,
					);
					if (!hunterCollision) break;
				}
			}
		}

		return {
			x,
			y,
			age: age,
			burned: burned,
			health: health,
			climbed: climbed,
			climbCellIndex: climbCellIndex,
		};
	}

	/**  get random whole numbers in a specific range
 @see https://stackoverflow.com/a/1527820/2124254 */
	function getRandomInt(min: number, max: number) {
		return Math.floor(Math.random() * (max - min)) + min;
	}

	function getHunterType(hunter: Hunter) {
		if (!hunter) {
			console.error('Hunter not found.');
		}
		if (hunter.climbed) return HUNTER_TYPES.green;
		if (hunter.burned) return HUNTER_TYPES.orange;
		if (
			hunter.age >= HUNTER_TYPES.red.minAge &&
			hunter.age <= HUNTER_TYPES.red.maxAge &&
			hunter.burned === HUNTER_TYPES.red.burned
		)
			return HUNTER_TYPES.red;
		if (
			hunter.age >= HUNTER_TYPES.yellow.minAge &&
			hunter.age <= HUNTER_TYPES.yellow.maxAge &&
			hunter.burned === HUNTER_TYPES.yellow.burned
		)
			return HUNTER_TYPES.yellow;
		if (
			hunter.age >= HUNTER_TYPES.black.minAge &&
			hunter.age <= HUNTER_TYPES.black.maxAge &&
			hunter.burned === HUNTER_TYPES.black.burned
		)
			return HUNTER_TYPES.black;
		if (
			hunter.age >= HUNTER_TYPES.white.minAge &&
			hunter.age <= HUNTER_TYPES.white.maxAge &&
			hunter.burned === HUNTER_TYPES.white.burned
		)
			return HUNTER_TYPES.white;
		if (
			hunter.age >= HUNTER_TYPES.purple.minAge &&
			hunter.age <= HUNTER_TYPES.purple.maxAge &&
			hunter.burned === HUNTER_TYPES.purple.burned
		)
			return HUNTER_TYPES.purple;
		if (
			hunter.age >= HUNTER_TYPES.blue.minAge &&
			hunter.age <= HUNTER_TYPES.blue.maxAge &&
			hunter.burned === HUNTER_TYPES.blue.burned
		)
			return HUNTER_TYPES.blue;
		console.error('Hunter type not found.');
		console.error(hunter);
		return HUNTER_TYPES.red;
	}

	function replaceHunter(action: string, hunter: Hunter, i: number) {
		hunters.splice(i, 1);
		hunters.push(generateHunter());

		turns++;
		if (canSpawnHunters && !drewRingOfFire) {
			setExtraHunters(turns, action, hunter);
		}
	}

	function setExtraHunters(turns: number, action: string, hunter: Hunter) {
		if (!canSpawnHunters || drewRingOfFire || drewParalysis) return;

		// red and yellow. also increasing speed.
		if (
			turns % extraSpeedDelay === 0 &&
			hunter.age <= HUNTER_TYPES.yellow.maxAge &&
			action === SNAKE_ACTIONS.bite.name
		) {
			snake.extraSpeed = Math.min(
				snake.extraSpeed + 1,
				maxSpeed - startingSpeed,
			);
		}

		if (turns % HUNTER_TYPES.red.turnDelay === 0) {
			hunters.push(generateHunter());
			sendMessageToConsole(HUNTER_TYPES.red.spawnMessage);
		}

		if (turns % HUNTER_TYPES.white.turnDelay === 0) {
			hunters.push(generateHunter(HUNTER_TYPES.white.minAge));
			sendMessageToConsole(HUNTER_TYPES.white.spawnMessage);
		}

		if (turns % HUNTER_TYPES.purple.turnDelay === 0) {
			hunters.push(generateHunter(HUNTER_TYPES.purple.minAge));
			sendMessageToConsole(HUNTER_TYPES.purple.spawnMessage);
		}

		if (turns % HUNTER_TYPES.blue.turnDelay === 0) {
			hunters.push(
				generateHunter(
					HUNTER_TYPES.blue.minAge,
					false,
					HUNTER_TYPES.blue.maxHealth,
				),
			);
			sendMessageToConsole(HUNTER_TYPES.blue.spawnMessage);
			if (borderColor === COLORS.border) {
				borderColor = COLORS.blue;
				playSound(SOUNDS.blueBorderActive);
			}
		}

		if (turns % HUNTER_TYPES.green.turnDelay === 0) {
			hunters.push(
				generateHunter(
					HUNTER_TYPES.green.minAge,
					false,
					HUNTER_TYPES.green.maxHealth,
					true,
				),
			);
			sendMessageToConsole(HUNTER_TYPES.green.spawnMessage);
		}
	}

	function hitHunter(cell: CanvasElement, action = SNAKE_ACTIONS.bite.name) {
		for (let i = 0; i < hunters.length; i++) {
			if (hunters[i]) {
				if (!canSpawnHunters) {
					hunters[i].age = 0;
				}
				if (cell.x === hunters[i].x && cell.y === hunters[i].y) {
					let hunterType = getHunterType(hunters[i]);
					switch (action) {
						case SNAKE_ACTIONS.ringOfFire.name:
						case SNAKE_ACTIONS.fireball.name: {
							let isRoasted = hunterType.fireballEffect();
							if (isRoasted && typeof hunters[i].health !== 'undefined') {
								hunters[i].health--;
								snake.roasted++;
								score += roastedScoreIncrease;

								if (toastyCount >= 10) {
									toasty();
								} else {
									sendMessageToConsole(
										consoleMessages.fireball[
											Math.floor(
												Math.random() * consoleMessages.fireball.length,
											)
										].toString(),
									);
									hitHunters.push(fireballColors.hit);
								}

								replaceHunter(action, hunters[i], i);
							} else {
								if (hunterType.color === COLORS.blue) {
									hunters[i].health--;
									if (hunters[i].health <= 0) {
										hunters[i].burned = true;
										sendMessageToConsole(
											consoleMessages.blueHunterBurned[
												Math.floor(
													Math.random() *
														consoleMessages.blueHunterBurned.length,
												)
											].toString(),
										);
									} else {
										sendMessageToConsole(
											consoleMessages.blueHunterHit[
												Math.floor(
													Math.random() * consoleMessages.blueHunterHit.length,
												)
											].toString(),
										);
									}
									hitHunters.push(hunterType.color);
								} else if (hunterType.color === COLORS.purple) {
									hitHunters.push(hunterType.color);
									hunters[i].age = HUNTER_TYPES.white.minAge;

									sendMessageToConsole(
										consoleMessages.purpleHunterBurn[
											Math.floor(
												Math.random() * consoleMessages.purpleHunterBurn.length,
											)
										].toString(),
									);
								}
							}
							break;
						}
						case SNAKE_ACTIONS.bite.name:
							{
								let isEaten = hunterType.biteEffect();
								if (typeof isEaten === 'string') {
									return isEaten;
								}
								{
									if (isEaten) {
										snake.eaten++;
										hitHunters.push(hunterType.color);
										replaceHunter(action, hunters[i], i);
										if (startingSpeed + snake.extraSpeed <= 10) {
											speedColor = COLORS.red;
										} else {
											speedColor = COLORS.white;
										}
										let snakeDied = updateGreenHunters();
										if (snakeDied) {
											return snakeDied;
										}
									}
								}
							}
							break;
						case SNAKE_ACTIONS.paralysis.name:
							{
								let isParalyzed = hunterType.paralysisEffect();
								{
									if (isParalyzed) {
										snake.zapped++;

										if (
											hunterType.color === COLORS.white ||
											hunterType.color === COLORS.green
										) {
											hitHunters.push(hunterType.color);
										} else {
											score += paralyzedScoreIncrease;
											hitHunters.push(paralysisColor);
										}

										sendMessageToConsole(
											consoleMessages.paralysis[
												Math.floor(
													Math.random() * consoleMessages.paralysis.length,
												)
											].toString(),
										);
										replaceHunter(action, hunters[i], i);
									}
								}
							}
							break;
						default:
							console.error('Unknown action', action);
							return false;
					}

					// updateGameValues();
					drawHitHunters();
					updateBlueBorder(countHunters());
					let timestamp = formatTime(elapsedTime);
					historyLogs.push(
						`${timestamp} ${snake.cells.length}/${maxSnakeLength}🐍 ${action} ${hunterType.name}`,
					);
					return true;
				}
			}
		}
		return false;
	}

	// function updateGameValues() {
	// 	scoreText = `Score: ${score}`;
	// 	eatenText = `${snake.eaten}🍖`;
	// 	if (drewRingOfFire) {
	// 		roastedText = `${snake.roasted}🔥🔥🔥`;
	// 	} else {
	// 		roastedText = `${snake.roasted}🔥`;
	// 	}
	// 	zappedText = `${snake.zapped}⚡`;
	// 	toastyText = `${snake.toasty}🍞`;
	// }

	function updateBlueBorder(huntersCount: HunterCount) {
		if (huntersCount.blue <= 0) {
			snake.canBurnBlueBorder = true;
		} else {
			snake.canBurnBlueBorder = false;
		}
	}

	/**For blue border protection check */
	function countHunters(): HunterCount {
		let redCount = 0;
		let blueCount = 0;
		let yellowCount = 0;
		let whiteCount = 0;
		let blackCount = 0;
		let orangeCount = 0;
		let purpleCount = 0;
		let greenCount = 0;

		hunters.forEach((hunter) => {
			if (hunter) {
				if (getHunterType(hunter)) {
					switch (getHunterType(hunter).color) {
						case COLORS.red:
							redCount++;
							break;
						case COLORS.yellow:
							yellowCount++;
							break;
						case COLORS.black:
							blackCount++;
							break;
						case COLORS.white:
							whiteCount++;
							break;
						case COLORS.purple:
							purpleCount++;
							break;
						case COLORS.blue:
							blueCount++;
							break;
						case COLORS.orange:
							orangeCount++;
							break;
						case COLORS.green:
							greenCount++;
							break;
					}
				}
			}
		});

		activeHunters = {
			red: redCount,
			blue: blueCount,
			orange: orangeCount,
			white: whiteCount,
			black: blackCount,
			yellow: yellowCount,
			purple: purpleCount,
			green: greenCount,
		};

		return activeHunters;
	}

	function resetGame(deathMessage = DEATHS.default) {
		let won = false;
		if (snake.cells.length >= gridSize * gridSize + 1) {
			won = true;
		}

		clearInterval(timerInterval); // Stop updating the timer

		snake.x = 160;
		snake.y = 160;
		snake.cells = [];
		snake.maxCells = startingCells;
		snake.currentDirection = 'right';
		snake.extraSpeed = 0;
		snake.speed = 0;
		snake.running = false;
		snake.firing = false;
		snake.paralysis = false;
		snake.eaten = 0;
		snake.roasted = 0;
		snake.zapped = 0;
		snake.toasty = 0;
		snake.poisoned = false;
		snake.canBurnBlueBorder = false;
		snake.canUseUltimate = false;
		snake.maxEnergy = snakeStartingEnergy;
		score = 0;
		turns = 0;
		toastyCount = 0;

		speedColor = COLORS.white;

		activeHunters.red = 0;
		activeHunters.blue = 0;
		activeHunters.black = 0;
		activeHunters.yellow = 0;
		activeHunters.white = 0;
		activeHunters.orange = 0;
		activeHunters.purple = 0;
		activeHunters.green = 0;

		hunters = [];
		fireballs = [];
		hitHunters = [];
		ringOfFire = [];
		paralysisTiles = [];
		// gameButton.classList.add('game-over');
		canSpawnHunters = true;
		drewRingOfFire = false;
		drewParalysis = false;

		let startingHunter = generateHunter();
		hunters = [...hunters, startingHunter];

		consoleElement.replaceChildren();

		if (won) {
			sendMessageToConsole(consoleMessages.win);
		} else {
			sendMessageToConsole(deathMessage);
		}

		gameState = 'end';
		gameStateText = 'Restart';

		if (won) {
			playSound(SOUNDS.win);
		} else {
			playSound(SOUNDS.gameOver);
		}
	}

	function updateFireballs() {
		fireballs.forEach(function (fireball, index) {
			// update position
			fireball.x += fireball.dx;
			fireball.y += fireball.dy;

			// draw the fireball
			context.fillStyle = fireballColors.hit;
			context.fillRect(fireball.x, fireball.y, fireball.width, fireball.height);

			// check if fireball hit the edge of the canvas
			if (
				borderColor !== fireballColors.hit &&
				(fireball.x < 0 ||
					fireball.x > canvas.width ||
					fireball.y < 0 ||
					fireball.y > canvas.height)
			) {
				fireballs.splice(index, 1); // remove fireball
				if (snake.canBurnBlueBorder && borderColor === COLORS.blue) {
					borderColor = fireballColors.hit;
					snake.canUseUltimate = true;
					sendMessageToConsole(consoleMessages.ringOfFireReady);
					playSound(SOUNDS.ultimateReady);
				}
			} else if (borderColor === fireballColors.hit) {
				// wrap fireball position on edge of screen
				if (fireball.x < 0) {
					fireball.x = canvas.width - grid;
					// draw the fireball
					context.fillRect(
						fireball.x,
						fireball.y,
						fireball.width,
						fireball.height,
					);
				} else if (fireball.x >= canvas.width) {
					fireball.x = 0;
					// draw the fireball
					context.fillRect(
						fireball.x,
						fireball.y,
						fireball.width,
						fireball.height,
					);
				}

				if (fireball.y < 0) {
					fireball.y = canvas.height - grid;
					// draw the fireball
					context.fillRect(
						fireball.x,
						fireball.y,
						fireball.width,
						fireball.height,
					);
				} else if (fireball.y >= canvas.height) {
					fireball.y = 0;
					// draw the fireball
					context.fillRect(
						fireball.x,
						fireball.y,
						fireball.width,
						fireball.height,
					);
				}
			}

			hunters.forEach(function (hunter) {
				if (!canSpawnHunters) return;
				if (
					fireball.x < hunter.x + grid &&
					fireball.x + fireball.width > hunter.x &&
					fireball.y < hunter.y + grid &&
					fireball.y + fireball.height > hunter.y
				) {
					// fireball hit hunter
					hitHunter({ x: hunter.x, y: hunter.y }, SNAKE_ACTIONS.fireball.name); // treat it as if the snake ate the hunter
					fireballs.splice(index, 1); // remove fireball
					playSound(SOUNDS.fireballHit);
					// hunters.splice(hunterIndex, 1); // remove hunter
				}
			});
		});
	}

	function updateParalysis() {
		if (paralysisTiles.length === 0 || !drewParalysis || !canSpawnHunters)
			return;

		paralysisTiles.forEach((tile, index) => {
			if (!canSpawnHunters) return;
			const tileX = tile[0];
			const tileY = tile[1];
			hunters.forEach(function (hunter, hunterIndex) {
				if (!canSpawnHunters) return;
				if (
					tileX < hunter.x + grid &&
					tileX + grid > hunter.x &&
					tileY < hunter.y + grid &&
					tileY + grid > hunter.y
				) {
					// Paralysis tile hit hunter
					hitHunter({ x: hunter.x, y: hunter.y }, SNAKE_ACTIONS.paralysis.name); // treat it as if the snake ate the hunter
					paralysisTiles.splice(index, 1); // remove tile
				}
			});
		});
	}

	function drawParalysis() {
		if (paralysisTiles.length === 0 || drewParalysis) return;
		paralysisTiles.forEach((tile) => {
			context.drawImage(
				paralysisTileImage,
				tile[0],
				tile[1],
				grid - 1,
				grid - 1,
			);
		});
		drewParalysis = true;
	}

	function updateRingOfFire() {
		// If the ring of fire is not active, do nothing
		if (ringOfFire.length === 0 || !drewRingOfFire) {
			return;
		}

		// Determine the current ring of fire
		const minX = Math.min(...ringOfFire.map((tile) => tile[0]));
		const maxX = Math.max(...ringOfFire.map((tile) => tile[0]));
		const minY = Math.min(...ringOfFire.map((tile) => tile[1]));
		const maxY = Math.max(...ringOfFire.map((tile) => tile[1]));

		// Clear the current ring of fire
		ringOfFire = ringOfFire.filter(
			(tile) =>
				tile[0] > minX && tile[0] < maxX && tile[1] > minY && tile[1] < maxY,
		);

		// If the ring of fire has reached the center, stop
		if (minX + 1 >= maxX || minY + 1 >= maxY) {
			ringOfFire = [];
			sendMessageToConsole(consoleMessages.ringOfFireFinished);
			drewRingOfFire = false;
			return;
		}

		// Add the next ring of fire
		for (let x = minX + 1; x < maxX; x++) {
			ringOfFire.push([x, minY + 1]);
			ringOfFire.push([x, maxY - 1]);
		}
		for (let y = minY + 1; y < maxY; y++) {
			ringOfFire.push([minX + 1, y]);
			ringOfFire.push([maxX - 1, y]);
		}
	}

	function drawRingOfFire() {
		if (ringOfFire.length === 0 || !canSpawnHunters) return;

		context.fillStyle = fireballColors.hit;
		ringOfFire.forEach((tile, index) => {
			if (!canSpawnHunters) return;
			const tileX = tile[0] * grid;
			const tileY = tile[1] * grid;
			context.fillRect(tileX, tileY, grid, grid);
			hunters.forEach(function (hunter) {
				if (!canSpawnHunters) return;
				if (
					tileX < hunter.x + grid &&
					tileX + grid > hunter.x &&
					tileY < hunter.y + grid &&
					tileY + grid > hunter.y
				) {
					// ring of fire tile hit hunter
					hitHunter(
						{ x: hunter.x, y: hunter.y },
						SNAKE_ACTIONS.ringOfFire.name,
					); // treat it as if the snake ate the hunter
					ringOfFire.splice(index, 1); // remove tile
				}
			});
		});
		drewRingOfFire = true;
		playSound(SOUNDS.fireball);
	}

	function startingText() {
		consoleElement.replaceChildren();
		sendMessageToConsole(consoleMessages.startingText);
		// scoreText = `Score: ${score}`;
		// speedText = `0m/s`;
		// snakeLengthText = `${snake.cells.length}/${maxSnakeLength}🐍`;
		// eatenText = `${snake.eaten}🍖`;
		// roastedText = `${snake.roasted}🔥`;
		// zappedText = `${snake.zapped}⚡`;
		// toastyText = `${snake.toasty}🍞`;
	}

	function drawHitHunters() {
		let row = 0;
		let col = 0;

		// Clear the canvas for redraw
		eaten_items_canvas_context.clearRect(
			0,
			0,
			eaten_items_canvas.width,
			eaten_items_canvas.height,
		);

		// If the grid is full, reset hitHunters
		if (hitHunters.length >= gridSize * gridSize * 3) {
			hitHunters = [];
			row = 0;
			col = 0;
		}

		for (let i = 0; i < hitHunters.length; i++) {
			drawSlot(row, col, hitHunters[i]);

			// Move to next column
			col++;

			// If we've filled an entire row, move to next row and reset column
			//TODO: increase height if on last row
			if (col >= gridSize) {
				col = 0;
				row++;
			}
		}
	}

	function playSound(filePath: RequestInfo | URL) {
		if (!soundEnabled) return;
		const audioContext = new (window.AudioContext || window.AudioContext)();
		const source = audioContext.createBufferSource();
		const gainNode = new GainNode(audioContext, { gain: 0.5 });
		gainNode.connect(audioContext.destination);

		fetch(filePath)
			.then((response) => response.arrayBuffer())
			.then((data) => audioContext.decodeAudioData(data))
			.then((buffer) => {
				source.buffer = buffer;
				source.connect(gainNode);
				source.start();
			})
			.catch((error) => console.error('Error loading audio:', error));
	}

	function toasty() {
		toastyCount = 0;
		snake.energy = snake.maxEnergy;
		score += snake.cells.length;
		snake.toasty++;
		hitHunters.push(fireballColors.toasty);
		sendMessageToConsole(consoleMessages.toasty);
		playSound(SOUNDS.toasty);
		document.getElementById('sliding-image').style.left = `1rem`;
		setTimeout(function () {
			document.getElementById('sliding-image').style.left = '-100%';
		}, 1000);
	}

	function sendMessageToConsole(message) {
		let div = document.createElement('div');
		div.textContent = message;
		consoleElement.appendChild(div);
		consoleElement.scrollTop =
			consoleElement.scrollHeight - consoleElement.clientHeight;
	}

	// /**For snake movement */
	function isOppositeDirection(dir1, dir2) {
		return (
			(dir1 === 'up' && dir2 === 'down') ||
			(dir1 === 'down' && dir2 === 'up') ||
			(dir1 === 'left' && dir2 === 'right') ||
			(dir1 === 'right' && dir2 === 'left')
		);
	}

	// /**Does not handle drawing. */
	function moveSnake() {
		// move snake by it's velocity
		let direction = keyBuffer.shift();

		// If there is a new direction and it's not opposite to the current direction, update the snake's direction
		if (direction && !isOppositeDirection(snake.currentDirection, direction)) {
			snake.currentDirection = direction;
		}

		switch (snake.currentDirection) {
			case 'up':
				snake.x += 0;
				snake.y += -grid;
				break;
			case 'down':
				snake.x += 0;
				snake.y += grid;
				break;
			case 'left':
				snake.x += -grid;
				snake.y += 0;
				break;
			case 'right':
				snake.x += grid;
				snake.y += 0;
				break;
		}

		if (
			(snake.x < 0 ||
				snake.y < 0 ||
				snake.x >= canvas.width ||
				snake.y >= canvas.height) &&
			borderColor === COLORS.blue
		) {
			return DEATHS.blueBorder;
		}

		let hitEdge = false;

		// wrap snake position horizontally on edge of screen
		if (snake.x < 0) {
			snake.x = canvas.width - grid;
			hitEdge = true;
		} else if (snake.x >= canvas.width) {
			snake.x = 0;
			hitEdge = true;
		}

		// wrap snake position vertically on edge of screen
		if (snake.y < 0) {
			snake.y = canvas.height - grid;
			hitEdge = true;
		} else if (snake.y >= canvas.height) {
			snake.y = 0;
			hitEdge = true;
		}

		if (hitEdge && borderColor === fireballColors.hit) {
			snake.extraSpeed = Math.min(
				snake.extraSpeed + 1,
				maxSpeed - startingSpeed,
			);
			if (snake.extraSpeed >= maxSpeed - startingSpeed) {
				sendMessageToConsole(consoleMessages.maxSpeed);
			} else {
				sendMessageToConsole(consoleMessages.ringOfFireTouched);
			}
		}

		// keep track of where snake has been. front of the array is always the head
		snake.cells.unshift({ x: snake.x, y: snake.y });

		if (snake.poisoned) {
			snake.maxCells--;
			score--;
		}

		// remove cells as we move away from them
		if (snake.cells.length > snake.maxCells) {
			do {
				if (snake.cells.length - 1 < poisonedMinimumCells) {
					return DEATHS.poison;
				}
				snake.cells.pop();
			} while (snake.cells.length > snake.maxCells);
		}

		// if (snake.cells.length > snake.maxCells) {
		// 	snake.cells.pop();
		// }
		return false;
	}

	/**Handles drawing. */
	function updateSnake() {
		let died = false;
		// draw snake one cell at a time
		snake.cells.forEach(function (cell, index) {
			// drawing 1 px smaller than the grid creates a grid effect in the snake body so you can see how long it is

			let drewHeadTail = false;

			if (snake.cells.length - 1 == index) {
				if (snake.currentDirection === 'left') {
					context.drawImage(tailLeftImage, cell.x, cell.y, grid - 1, grid - 1);
				} else {
					context.drawImage(tailRightImage, cell.x, cell.y, grid - 1, grid - 1);
				}
				drewHeadTail = true;
			} else if (index === 0) {
				if (snake.currentDirection === 'left') {
					context.drawImage(headLeftImage, cell.x, cell.y, grid - 1, grid - 1);
				} else {
					context.drawImage(headRightImage, cell.x, cell.y, grid - 1, grid - 1);
				}
				drewHeadTail = true;
			}

			if (!drewHeadTail) {
				if (snake.paralysis) {
					context.drawImage(
						bodyParalysisImage,
						cell.x,
						cell.y,
						grid - 1,
						grid - 1,
					);
				} else {
					context.drawImage(bodyImage, cell.x, cell.y, grid - 1, grid - 1);
				}
			}

			let action = snake.paralysis
				? SNAKE_ACTIONS.paralysis.name
				: SNAKE_ACTIONS.bite.name;
			let snakeDied = hitHunter(cell, action);
			if (typeof snakeDied === 'string') {
				died = snakeDied;
				return;
			}

			// check collision with all cells after this one (modified bubble sort)
			for (var i = index + 1; i < snake.cells.length; i++) {
				// snake occupies same space as a body part. reset game
				if (cell.x === snake.cells[i].x && cell.y === snake.cells[i].y) {
					died = DEATHS.default;
					return;
				}
			}
		});

		return died;
	}

	function updateGreenHunters() {
		let result = false;
		hunters.forEach((hunter) => {
			if (hunter) {
				if (hunter.climbed && hunter.climbCellIndex) {
					hunter.climbCellIndex--;
					if (hunter.climbCellIndex <= 0) {
						result = DEATHS.greenHunter;
						return;
					}
				}
			}
		});
		return result;
	}

	function drawHunters() {
		try {
			hunters.forEach((hunter, index) => {
				if (hunter) {
					let hunterType = getHunterType(hunter);
					if (hunterType) {
						if (hunterType.color === COLORS.orange) {
							context.drawImage(
								HUNTER_TYPES.orange.image,
								hunter.x,
								hunter.y,
								grid - 1,
								grid - 1,
							);
						} else if (hunterType.color === COLORS.green) {
							if (hunter.climbCellIndex > getSnakeMiddleCell()) {
								hunters.splice(index, 1);
								sendMessageToConsole(consoleMessages.greenHunterFall);
							} else {
								hunter.x = snake.cells[hunter.climbCellIndex].x;
								hunter.y = snake.cells[hunter.climbCellIndex].y;
								context.drawImage(
									HUNTER_TYPES.green.image,
									snake.cells[hunter.climbCellIndex].x,
									snake.cells[hunter.climbCellIndex].y,
									grid - 1,
									grid - 1,
								);
							}
						} else if (hunterType.color === COLORS.yellow) {
							context.drawImage(
								HUNTER_TYPES.yellow.image,
								hunter.x,
								hunter.y,
								grid - 1,
								grid - 1,
							);
						} else if (hunterType.color === COLORS.black) {
							context.drawImage(
								HUNTER_TYPES.black.image,
								hunter.x,
								hunter.y,
								grid - 1,
								grid - 1,
							);
						} else if (hunterType.color === COLORS.white) {
							context.drawImage(
								HUNTER_TYPES.white.image,
								hunter.x,
								hunter.y,
								grid - 1,
								grid - 1,
							);
						} else if (hunterType.color === COLORS.purple) {
							context.drawImage(
								HUNTER_TYPES.purple.image,
								hunter.x,
								hunter.y,
								grid - 1,
								grid - 1,
							);
						} else if (hunterType.color === COLORS.blue) {
							context.drawImage(
								HUNTER_TYPES.blue.image,
								hunter.x,
								hunter.y,
								grid - 1,
								grid - 1,
							);
						} else {
							context.drawImage(
								HUNTER_TYPES.red.image,
								hunter.x,
								hunter.y,
								grid - 1,
								grid - 1,
							);
						}
					}
				}
			});
		} catch (error) {
			console.error(error);
		}
	}

	function enableRingOfFire() {
		const size = canvas.width / grid;
		for (let x = 0; x < size; x++) {
			for (let y = 0; y < size; y++) {
				if (x === 0 || y === 0 || x === size - 1 || y === size - 1) {
					ringOfFire.push([x, y]);
				}
			}
		}
	}

	function enableParalysis() {
		snake.cells.forEach((cell, index) => {
			const extraTiles = [
				[cell.x - grid, cell.y - grid], // Top-left
				[cell.x, cell.y - grid], // Top
				[cell.x + grid, cell.y - grid], // Top-right
				[cell.x - grid, cell.y], // Left
				[cell.x + grid, cell.y], // Right
				[cell.x - grid, cell.y + grid], // Bottom-left
				[cell.x, cell.y + grid], // Bottom
				[cell.x + grid, cell.y + grid], // Bottom-right
			];
			extraTiles.forEach((tile) => {
				// Check if the tile is within the grid and is not already a paralysis tile or a snake cell
				if (
					tile[0] >= 0 &&
					tile[0] < grid * gridSize &&
					tile[1] >= 0 &&
					tile[1] < grid * gridSize &&
					!paralysisTiles.some((t) => t[0] === tile[0] && t[1] === tile[1]) &&
					!snake.cells.some((c) => c.x === tile[0] && c.y === tile[1])
				) {
					paralysisTiles.push(tile);
				}
			});
		});
	}

	/** game loop*/
	function loop() {
		if (gameState === 'pause' || gameState === 'end') {
			return;
		}

		requestAnimationFrame(loop);

		if (drewParalysis) {
			if (++loopCount < 60 * 2) return;
			loopCount = 0;
			drewParalysis = false;
			snake.paralysis = false;
			paralysisTiles = [];
			return;
		}

		let snakeTotalSpeed = snake.running
			? Math.min(startingSpeed + snake.extraSpeed + 10, maxSpeed)
			: Math.min(startingSpeed + snake.extraSpeed, maxSpeed);
		snake.speed = snakeTotalSpeed;
		if (snakeTotalSpeed <= 0) {
			resetGame(DEATHS.poison);
			return;
		}

		let loopDelay = 60 - snakeTotalSpeed;
		let loopDelayTicks = 60 / (60 / loopDelay);

		// slow game loop to 30 fps instead of 60 (60/30 = 2)
		if (++loopCount < loopDelayTicks) {
			return;
		}

		loopCount = 0;
		snakeLengthText = `${snake.cells.length}/${maxSnakeLength}🐍`;
		context.clearRect(0, 0, canvas.width, canvas.height);

		// TODO is this order correct?
		let snakeDied = false;
		let currentDeathReason = '';

		updateFireballs();

		drawParalysis();
		updateParalysis();

		updateRingOfFire();
		drawRingOfFire();

		snakeDied = moveSnake();
		if (typeof snakeDied === 'string') {
			currentDeathReason = snakeDied;
		}
		snakeDied = updateSnake();
		if (typeof snakeDied === 'string' && currentDeathReason === '') {
			currentDeathReason = snakeDied;
		}

		drawHunters();

		if (currentDeathReason !== '') {
			resetGame(currentDeathReason);
		}
	}

	function checkForFireballInput(key: string) {
		if (key === 'f' && !snake.firing) {
			if (snake.cells.length > 620 || !canSpawnHunters) {
				sendMessageToConsole(consoleMessages.boardFull);
				return;
			}
			snake.firing = true;
			if (snake.energy <= 0) {
				sendMessageToConsole(consoleMessages.snakeNoEnergy);
				return;
			}

			switch (snake.currentDirection) {
				case 'down':
					fireballs.push({
						x: snake.x,
						y: snake.y + grid,
						dx: 0,
						dy: grid,
						width: grid,
						height: grid,
					});
					break;
				case 'up':
					fireballs.push({
						x: snake.x,
						y: snake.y - grid,
						dx: 0,
						dy: -grid,
						width: grid,
						height: grid,
					});
					break;
				case 'right':
					fireballs.push({
						x: snake.x + grid,
						y: snake.y,
						dx: grid,
						dy: 0,
						width: grid,
						height: grid,
					});
					break;
				case 'left':
					fireballs.push({
						x: snake.x - grid,
						y: snake.y,
						dx: -grid,
						dy: 0,
						width: grid,
						height: grid,
					});
					break;
			}

			snake.energy--;
			playSound(SOUNDS.fireball);
		}
	}

	function checkForRingOfFireInput(key: string) {
		if (key === 'r') {
			if (snake.cells.length > 620 || !canSpawnHunters) {
				sendMessageToConsole(consoleMessages.boardFull);
				return;
			}
			if (!snake.canUseUltimate) {
				sendMessageToConsole(consoleMessages.ringOfFireDisabled);
				return;
			} else if (snake.energy <= 0) {
				sendMessageToConsole(consoleMessages.snakeNoEnergy);
				return;
			} else if (snake.energy < SNAKE_ACTIONS.ringOfFire.cost) {
				sendMessageToConsole(consoleMessages.snakeMissingEnergy);
				return;
			} else if (
				snake.canUseUltimate &&
				!drewRingOfFire &&
				snake.energy >= SNAKE_ACTIONS.ringOfFire.cost &&
				ringOfFire.length === 0
			) {
				snake.energy -= SNAKE_ACTIONS.ringOfFire.cost;
				snake.poisoned = false;
				snake.canUseUltimate = false;
				borderColor = COLORS.border;
				enableRingOfFire();
				playSound(SOUNDS.ringOfFireStart);
			}
		}
	}

	function checkForParalysisInput(
		key: string,
		e: { key?: string; preventDefault?: any },
	) {
		if (key === ' ') {
			e.preventDefault();
			if (snake.cells.length > 620 || !canSpawnHunters) {
				sendMessageToConsole(consoleMessages.boardFull);
				return;
			}
			if (snake.paralysis || snake.energy <= 0) {
				sendMessageToConsole(consoleMessages.snakeNoEnergy);
				return;
			} else if (snake.energy < SNAKE_ACTIONS.paralysis.cost) {
				sendMessageToConsole(consoleMessages.snakeMissingEnergy);
			} else if (
				!snake.paralysis &&
				!drewParalysis &&
				snake.energy >= SNAKE_ACTIONS.paralysis.cost
			) {
				snake.poisoned = false;
				snake.paralysis = true;
				snake.energy -= SNAKE_ACTIONS.paralysis.cost;
				snake.extraSpeed = Math.max(
					snake.extraSpeed - 10,
					startingSpeed - maxSpeed,
				);
				enableParalysis();
				playSound(SOUNDS.paralysis);
			}
		}
	}

	/**https://stackoverflow.com/questions/43032014/prevent-snake-from-going-in-reverse-direction */
	function handleKeyPress(direction: string) {
		// Prevent the same direction from being added to the buffer consecutively
		if (keyBuffer[keyBuffer.length - 1] !== direction) {
			keyBuffer = keyBuffer.slice(-1).concat(direction);
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

	function checkForMovementInput(key: string) {
		// Prevent reversing the direction immediately
		// Update the snake's direction
		switch (key) {
			case 'a':
				handleKeyPress('left');
				break;
			case 'w':
				handleKeyPress('up');
				break;
			case 'd':
				handleKeyPress('right');
				break;
			case 's':
				handleKeyPress('down');
				break;
		}
	}

	function on_key_up(e: { key: string }) {
		if (gameState !== 'on') {
			return;
		}

		const key = e.key.toLowerCase();

		if (key === 'shift' && snake.running) {
			snake.running = false;
		} else if (key === 'f' && snake.firing) {
			snake.firing = false;
		}
	}

	function on_key_down(e: { key: string }) {
		// prevent snake from backtracking on itself by checking that it's
		// not already moving on the same axis (pressing left while moving
		// left won't do anything, and pressing right while moving left
		// shouldn't let you collide with your own body)
		const key = e.key.toLowerCase();

		if (key === 'p') {
			if (gameState === 'on') {
				gameState = 'pause';
				gameStateText = 'Resume';
				playSound(SOUNDS.pause);
				return;
			} else if (gameState === 'pause') {
				requestAnimationFrame(loop);
				gameState = 'on';
				gameStateText = 'Pause';
				playSound(SOUNDS.resume);
				return;
			}
		}

		if (gameState !== 'on') {
			return;
		}

		if (key === 'shift' && !snake.running) {
			snake.running = true;
		}

		checkForMovementInput(key);
		checkForFireballInput(key);
		checkForParalysisInput(key, e);
		checkForRingOfFireInput(key);
	}

	function gameButtonClick() {
		switch (gameState) {
			case 'start':
			case 'end':
				historyLogs = [];
				startingText();
				drawHitHunters();
				snake.energy = snakeStartingEnergy;
				requestAnimationFrame(loop);
				gameState = 'on';
				gameStateText = 'Pause';
				borderColor = COLORS.border;
				startTime = Date.now();
				elapsedTime = 0;
				timerInterval = setInterval(updateTimer, 100);
				playSound(SOUNDS.start);
				break;
			case 'on':
				gameState = 'pause';
				gameStateText = 'Resume';
				playSound(SOUNDS.pause);
				break;
			case 'pause':
				requestAnimationFrame(loop);
				gameState = 'on';
				gameStateText = 'Pause';
				playSound(SOUNDS.resume);
				break;
		}
	}

	function downloadLogs() {
		let text = historyLogs.join('\n'); // create a string from the historyLogs array, with each log on a new line
		let blob = new Blob([text], { type: 'text/plain' }); // create a new Blob object representing the data in the specified formats
		let url = URL.createObjectURL(blob); // create a URL representing the Blob object

		let a = document.createElement('a'); // create a new <a> element
		a.href = url; // set the href of the <a> element to the URL
		a.download = `wycademy-snek-history-logs-${formatDate(new Date())}.txt`; // set the download attribute, so clicking the link will download the text file
		a.click(); // programmatically click the <a> element to trigger the download
	}

	let url = $page.url.toString();
	let modalOpen = false;
	let gameStateText = 'Play';

	function changeModal(cell) {
		modalOpen = true;
	}

	$: modalBlurClass = modalOpen ? 'modal-open-blur' : 'modal-open-noblur';
	$: formattedElapsedTime = formatTime(elapsedTime);
	$: scoreText = `Score: ${score}`;
	$: eatenText = `${snake.eaten}🍖`;
	$: roastedText = !drewRingOfFire
		? `${snake.roasted}🔥`
		: `${snake.roasted}🔥🔥🔥`;
	$: zappedText = `${snake.zapped}⚡`;
	$: toastyText = `${snake.toasty}🍞`;
	$: speedText = `Speed: ${snake.speed}m/s`;
	$: snakeLengthText = `${snake.cells.length}/${maxSnakeLength}🐍`;
	$: speedColorClass = speedColor === COLORS.red ? 'red' : 'text';
</script>

<Head
	title={'Solitude Island Depths'}
	{description}
	image={pageThumbnail}
	{url}
	{website}
	{authorName}
	{datePublished}
	{authorUrl}
	contentType="WebPage"
	name={projectName}
	siteName={projectName}
/>
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
<svelte:window on:keydown={on_key_down} on:keyup={on_key_up} />
<div class={modalBlurClass}>
	<SectionHeadingTopLevel title="Solitude Island Depths" />
	<div class="top">
		<h2>🍡 Your guild food ran out 🍜</h2>
		<p class="subheader">Why not help Raviente eat some hunters? 🐍</p>
		<Button icon={Book} kind="tertiary" on:click={() => (modalOpen = true)}
			>Instructions</Button
		>
	</div>
	<div class="game-container">
		<div class="left">
			<Button
				icon={DocumentDownload}
				kind="tertiary"
				on:click={() => downloadLogs()}>Download History Logs</Button
			>
			<div class="img-container">
				<img
					id="sliding-image"
					src="/assets/img/berserk_raviente.webp"
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
					icon={GameConsole}
					kind="tertiary"
					on:click={() => gameButtonClick()}>{gameStateText}</Button
				>
				<Button
					icon={soundEnabled ? VolumeUp : VolumeMute}
					kind="tertiary"
					on:click={() => (soundEnabled = !soundEnabled)}
					>Sound {soundEnabled ? 'ON' : 'OFF'}</Button
				>
			</div>
			<progress id="snake-energy" max={snake.maxEnergy} value={snake.energy}
			></progress>

			<div class="game-values">
				<div id="timer">{formattedElapsedTime}</div>
				<div id="score">{scoreText}</div>
				<div id="speed" class={speedColorClass}>{speedText}</div>
				<div id="snake-length">{snakeLengthText}</div>
				<div class="hit-hunters">
					<div id="eaten">{eatenText}</div>
					<div id="roasted">{roastedText}</div>
					<div id="zapped">{zappedText}</div>
					<div id="toasty">{toastyText}</div>
				</div>
			</div>

			<div id="game-console" class="interface">
				<div>You are hungry.</div>
			</div>
		</div>
	</div>
</div>

<style>
	.modal-open-noblur {
		-webkit-filter: blur(0);
		filter: blur(0);
		opacity: 1;
		-webkit-transition:
			opacity 500ms ease,
			-webkit-filter 500ms ease;
		transition:
			opacity 500ms ease,
			-webkit-filter 500ms ease;
		transition:
			filter 500ms ease,
			opacity 500ms ease;
		transition:
			filter 500ms ease,
			opacity 500ms ease,
			-webkit-filter 500ms ease;
	}

	.modal-open-blur {
		-webkit-filter: blur(8px);
		filter: blur(4px);
		opacity: 1;
	}

	.button-container {
		display: flex;
		flex-direction: column;
		align-items: center;
		gap: 1rem;
	}

	.red {
		color: var(--ctp-red);
	}

	.text {
		color: var(--ctp-text);
	}

	.top {
		display: flex;
		flex-direction: column;
		align-items: center;
		gap: 1rem;
		margin-bottom: 2rem;
	}

	.dev-score {
		margin-top: 1rem;
		margin-bottom: 1rem;
	}

	#devHighscore {
		color: var(--ctp-red);
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
		color: var(--ctp-red);
	}

	#zapped {
		color: var(--ctp-yellow);
	}

	#toasty {
		color: var(--ctp-maroon);
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
		border: 2px solid var(--ctp-red);
		border-radius: 4px;
	}

	.eaten-black {
		border: 2px solid var(--ctp-overlay0);
		border-radius: 4px;
	}

	.eaten-yellow {
		border: 2px solid var(--ctp-yellow);
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
		background-color: var(--ctp-mantle);
		border: 1px solid var(--ctp-surface0);
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
		color: var(--ctp-subtext1);
		font-weight: bold;
		font-size: 24px;
	}

	.subtle {
		color: var(--ctp-subtext0);
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
