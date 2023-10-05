'use strict';

// TODO OOP
const scoreElement = document.getElementById('score');
const speedElement = document.getElementById('speed');
const eatenElement = document.getElementById('eaten');
const roastedElement = document.getElementById('roasted');
const zappedElement = document.getElementById('zapped');
const toastyElement = document.getElementById('toasty');
const consoleElement = document.getElementById('game-console');
const gameButton = document.getElementById('game-button');
const soundButton = document.getElementById('sound-button');
const timerElement = document.getElementById('timer');
const energyElement = document.getElementById('energy');
const gameElement = document.getElementById('game');

const toastySound = 'offline/assets/sound/toasty.mp3';
const gameOverSound =
	'offline/assets/sound/mixkit-arcade-retro-game-over-213.wav';
const fireballSound = 'offline/assets/sound/mixkit-wizard-fire-woosh-1326.wav';
const startSound =
	'offline/assets/sound/mixkit-player-boost-recharging-2040.wav';
const pauseSound = 'offline/assets/sound/mixkit-zippo-fire-close-1334.wav';
const resumeSound = 'offline/assets/sound/mixkit-quick-lock-sound-2854.wav';
const winSound = 'offline/assets/sound/mixkit-video-game-win-2016.wav';

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
	win: 'Congratulations! You have successfully completed the game. 🏆',
	startingText: 'You are hungry.',
	noEnergy: 'Ran out of energy! 💨',
	noParalysisEnergy: 'Not enough energy! 💨',
	toasty: 'Toasty! 🍞',
	paralysis: ['Bzzz! ⚡', 'Zap! ⚡', 'This snake is high voltage! ⚡'],
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

const startingCells = 30;
const poisonedMinimumCells = 3;
const toastyScoreIncrease = 100;

let turns = 0;
let fireballs = [];
/**If hitting 10 black hunters in a row with fireball, refill meter. */
let toastyCount = 0;
let canSpawnHunters = true;

function createImage(url) {
	let img = new Image();
	img.src = url;
	return img;
}

function biteEffect(hunterType) {
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
			snake.extraSpeed += HUNTER_TYPES.red.snakeSpeed;
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
			snake.extraSpeed += HUNTER_TYPES.black.snakeSpeed;
			energyElement.max += HUNTER_TYPES.black.energyMaxGain;
			energyElement.value += HUNTER_TYPES.black.energyGain;
			energyElement.value = Math.max(energyElement.value, 0);
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
			snake.extraSpeed += HUNTER_TYPES.yellow.snakeSpeed;
			energyElement.max += HUNTER_TYPES.yellow.energyMaxGain;
			energyElement.value += HUNTER_TYPES.yellow.energyGain;
			energyElement.value = Math.max(energyElement.value, energyElement.max);
			hunters.forEach((hunter) => {
				if (hunter) {
					hunter.age = hunter.age <= HUNTER_TYPES.black.maxAge ? 0 : hunter.age;
				}
			});
			score += HUNTER_TYPES.yellow.score;
			sendMessageToConsole(
				consoleMessages.yellowHunter[
					Math.floor(Math.random() * consoleMessages.yellowHunter.length)
				].toString(),
			);
			playSound(HUNTER_TYPES.yellow.sound);
			return true;
		case COLORS.purple:
			snake.maxCells += HUNTER_TYPES.purple.snakeGrowth;
			snake.extraSpeed += HUNTER_TYPES.purple.snakeSpeed;
			energyElement.max += HUNTER_TYPES.purple.energyMaxGain;
			energyElement.value += HUNTER_TYPES.purple.energyGain;
			energyElement.value = Math.max(energyElement.value, 0);
			hunters.forEach((hunter) => {
				if (hunter) {
					hunter.age += 10;
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
			snake.extraSpeed += HUNTER_TYPES.orange.snakeSpeed;
			hunters.forEach((hunter) => {
				if (hunter) {
					hunter.age -= 10;
					hunter.age = Math.max(0, hunter.age);
				}
			});
			energyElement.max += HUNTER_TYPES.orange.energyMaxGain;
			energyElement.value += HUNTER_TYPES.orange.energyGain;
			energyElement.value = Math.max(energyElement.value, energyElement.max);
			score += HUNTER_TYPES.orange.score;
			sendMessageToConsole(
				`You can now fire ${energyElement.max} fireballs! 🔥`,
			);
			playSound(HUNTER_TYPES.orange.sound);
			return true;
		default:
			console.error('Could not eat hunter.', hunterType);
			return false;
	}
}

function fireballEffect(hunterType) {
	switch (hunterType.color) {
		case COLORS.black:
			toastyCount++;
			return true;
		case COLORS.red:
		case COLORS.yellow:
		case COLORS.orange:
		case COLORS.green:
			toastyCount = 0;
			return true;
		case COLORS.blue:
		case COLORS.purple:
			toastyCount = 0;
			return false;
		case COLORS.white:
			sendMessageToConsole(
				consoleMessages.whiteHunter[
					Math.floor(Math.random() * consoleMessages.whiteHunter.length)
				].toString(),
			);
			toastyCount = 0;
			return false;
		default:
			console.error('Could not burn hunter.', hunterType);
			return false;
	}
}

function paralysisEffect(hunterType) {
	switch (hunterType.color) {
		case COLORS.white:
			snake.paralysisTurns = 0;
			score += HUNTER_TYPES.white.score;
			return true;
		case COLORS.red:
		case COLORS.black:
		case COLORS.orange:
			return true;
		case COLORS.green:
			snake.paralysisTurns = 0;
			score += HUNTER_TYPES.green.score;
			return true;
		case COLORS.purple:
		case COLORS.blue:
		case COLORS.yellow:
			return false;
		default:
			console.error('Could not paralyze hunter.', hunterType);
			return false;
	}
}

const HUNTER_TYPES = {
	red: {
		color: COLORS.red,
		minAge: -Infinity,
		maxAge: 4,
		burned: false,
		score: 1,
		snakeGrowth: 1,
		snakeSpeed: 0,
		turnDelay: 5,
		sound: 'offline/assets/sound/mixkit-quick-jump-arcade-game-239.wav',
		image: createImage('offline/assets/img/hunter_red.webp'),
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
		energyGain: 0,
		energyMaxGain: 0,
	},
	yellow: {
		color: COLORS.yellow,
		minAge: 5,
		maxAge: 5,
		burned: false,
		score: 5,
		snakeGrowth: 2,
		snakeSpeed: 1,
		turnDelay: 0,
		sound:
			'offline/assets/sound/mixkit-quick-win-video-game-notification-269.wav',
		image: createImage('offline/assets/img/hunter_yellow.webp'),
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
		energyGain: 10,
		energyMaxGain: 1,
	},
	black: {
		color: COLORS.black,
		minAge: 6,
		maxAge: 49,
		burned: false,
		score: -1,
		snakeGrowth: -1,
		snakeSpeed: -1,
		turnDelay: 0,
		sound: 'offline/assets/sound/mixkit-tech-break-fail-2947.wav',
		image: createImage('offline/assets/img/hunter_black.webp'),
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
		energyGain: -1,
		energyMaxGain: 0,
	},
	white: {
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
		sound:
			'offline/assets/sound/mixkit-quick-win-video-game-notification-269.wav',
		image: createImage('offline/assets/img/hunter_white.webp'),
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
		energyGain: 0,
		energyMaxGain: 0,
	},
	purple: {
		color: COLORS.purple,
		minAge: 75,
		maxAge: 99,
		burned: false,
		score: -10,
		snakeGrowth: -10,
		snakeSpeed: -10,
		turnDelay: 20,
		// TODO
		sound: 'offline/assets/sound/mixkit-tech-break-fail-2947.wav',
		image: createImage('offline/assets/img/hunter_purple.webp'),
		messages: consoleMessages.purpleHunter,
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
		energyGain: -10,
		energyMaxGain: 0,
	},
	blue: {
		color: COLORS.blue,
		minAge: 100,
		maxAge: Infinity,
		burned: false,
		score: 0,
		snakeGrowth: 0,
		snakeSpeed: 0,
		turnDelay: 30,
		// TODO
		sound: 'offline/assets/sound/mixkit-tech-break-fail-2947.wav',
		image: createImage('offline/assets/img/hunter_blue.webp'),
		messages: consoleMessages.blueHunter,
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
		energyGain: 0,
		energyMaxGain: 0,
	},
	orange: {
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
		sound:
			'offline/assets/sound/mixkit-quick-win-video-game-notification-269.wav',
		image: createImage('offline/assets/img/hunter_orange.webp'),
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
		energyGain: 30,
		energyMaxGain: 5,
	},
	green: {
		color: COLORS.green,
		minAge: -Infinity, // unused
		maxAge: Infinity,
		burned: false,
		score: 50,
		snakeGrowth: 0,
		snakeSpeed: 0,
		turnDelay: 60,
		sound: 'offline/assets/sound/mixkit-quick-jump-arcade-game-239.wav',
		image: createImage('offline/assets/img/hunter_green.webp'),
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
		energyGain: 0,
		energyMaxGain: 0,
	},
};

/** per fireball hit */
const roastedScoreIncrease = 2;
/**per paralyzed hunter */
const paralyzedScoreIncrease = 3;
/**Per turn. Sets the speed increase delay. */
const extraSpeedDelay = 5;
/** How long each paralysis lasts in turns. */
const paralysisMaxTurns = 3;

// TODO object holding all my const options in a json?

const maxSpeed = 50;
const startingSpeed = 30;
const startingEnergy = 10;

let soundEnabled = true;
let gameState = GAME_STATES.IDLE;

const canvas = document.getElementById('game');
let context = canvas.getContext('2d');

/**  the canvas width & height, snake x & y, and the hunter x & y, all need to be a multiples of the grid size in order for collision detection to work (e.g. 16 * 25 = 400)*/
let grid = 32;

let count = 0;
let score = 0;

const SNAKE_ACTIONS = {
	bite: {
		name: 'bite',
		cost: 0,
	},
	fireball: {
		name: 'fireball',
		cost: 1,
	},
	paralysis: {
		name: 'paralysis',
		cost: 10,
	},
};

// TODO class
let snake = {
	x: 160,
	y: 160,

	/**snake velocity. moves one grid length every frame in either the x or y direction */
	dx: grid,
	/**snake velocity. moves one grid length every frame in either the x or y direction */
	dy: 0,

	/**keep track of all grids the snake body occupies */
	cells: [],

	/**length of the snake. grows when eating a hunter */
	maxCells: startingCells,

	extraSpeed: 0,
	running: false,
	firing: false,
	currentDirection: DIRECTIONS.right,
	lastDirection: DIRECTIONS.down,
	paralysis: false,
	paralysisTurns: 0,
	eaten: 0,
	roasted: 0,
	zapped: 0,
	toasty: 0,
	action: SNAKE_ACTIONS.bite.name,
	/**If eating purple hunter */
	poisoned: false,
};

let hunters = [
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

/**For color canvas */
let hitHunters = [];

let headRightImage = new Image();
let headLeftImage = new Image();
let bodyImage = new Image();
let tailRightImage = new Image();
let tailLeftImage = new Image();
let bodyParalysisImage = new Image();

headRightImage.src = 'offline/assets/img/head_right.webp';
headLeftImage.src = 'offline/assets/img/head_left.webp';
bodyImage.src = 'offline/assets/img/body.webp';
tailRightImage.src = 'offline/assets/img/tail_right.webp';
tailLeftImage.src = 'offline/assets/img/tail_left.webp';
bodyParalysisImage.src = 'offline/assets/img/body_paralysis.webp';

// Variables to keep track of the timer
let startTime = 0;
let elapsedTime = 0;
let timerInterval;

const eaten_items_canvas = document.getElementById('eaten-items');
let eaten_items_canvas_context = eaten_items_canvas.getContext('2d');

const gridSize = 25;
// TODO adjust if canvas is full
const slotSize = canvas.width / gridSize;

/**https://stackoverflow.com/questions/1740700/how-to-get-hex-color-value-rather-than-rgb-value */
const rgba2hex = (rgba) =>
	`#${rgba
		.match(/^rgba?\((\d+),\s*(\d+),\s*(\d+)(?:,\s*(\d+\.{0,1}\d*))?\)$/)
		.slice(1)
		.map((n, i) =>
			(i === 3 ? Math.round(parseFloat(n) * 255) : parseFloat(n))
				.toString(16)
				.padStart(2, '0')
				.replace('NaN', ''),
		)
		.join('')}`;

function drawSlot(row, col, color) {
	eaten_items_canvas_context.fillStyle = color;
	eaten_items_canvas_context.fillRect(
		col * slotSize,
		row * slotSize,
		slotSize,
		slotSize,
	);
}

function formatTime(time) {
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
	timerElement.textContent = formatTime(elapsedTime);
}

function isBoardFull() {
	if (!canSpawnHunters) return true;
	let full = true;
	for (let i = 0; i < canvas.width; i += grid) {
		for (let j = 0; j < canvas.height; j += grid) {
			let collision = snake.cells.some((cell) => cell.x === i && cell.y === j);
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
	}
	return full;
}

function getSnakeMiddleCell() {
	return Math.ceil((snake.cells.length - 1) / 2);
}

function generateHunter(
	age = 0,
	burned = false,
	health = 1,
	climbed = false,
	climbCellIndex = 0,
) {
	if (!canSpawnHunters || isBoardFull()) {
		return;
	}
	let x, y;
	if (climbed) {
		climbCellIndex = getSnakeMiddleCell();
		let originalMiddleCell = snake.cells[climbCellIndex];
		x = originalMiddleCell.x;
		y = originalMiddleCell.y;
	} else {
		while (true) {
			x = getRandomInt(0, gridSize) * grid;
			y = getRandomInt(0, gridSize) * grid;

			let collision = snake.cells.some((cell) => cell.x === x && cell.y === y);
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
function getRandomInt(min, max) {
	return Math.floor(Math.random() * (max - min)) + min;
}

function getHunterType(hunter) {
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
}

function updateGameValues() {
	scoreElement.textContent = `Score: ${score}`;
	eatenElement.textContent = `${snake.eaten}🍖`;
	roastedElement.textContent = `${snake.roasted}🔥`;
	zappedElement.textContent = `${snake.zapped}⚡`;
	toastyElement.textContent = `${snake.toasty}🍞`;
}

function replaceHunter(action, hunter, i) {
	hunters.splice(i, 1);
	hunters.push(generateHunter());

	turns++;
	if (canSpawnHunters) {
		setExtraHunters(turns, action, hunter);
	}
}

function setExtraHunters(turns, action, hunter) {
	if (!canSpawnHunters) return;
	for (let i = 0; i < 100; i++) {
		if (!canSpawnHunters) return;
		hunters.push(generateHunter(HUNTER_TYPES.red.minAge));
		if (!canSpawnHunters) return;
	}

	// red and yellow. also increasing speed.
	if (
		turns % extraSpeedDelay === 0 &&
		hunter.age <= HUNTER_TYPES.yellow.maxAge &&
		action === SNAKE_ACTIONS.bite.name
	) {
		snake.extraSpeed = Math.min(snake.extraSpeed + 1, maxSpeed - startingSpeed);
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
		gameElement.style.borderColor = COLORS.blue;
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

function hitHunter(cell, action = SNAKE_ACTIONS.bite.name) {
	for (let i = 0; i < hunters.length; i++) {
		if (hunters[i]) {
			if (cell.x === hunters[i].x && cell.y === hunters[i].y) {
				let hunterType = getHunterType(hunters[i]);
				switch (action) {
					case SNAKE_ACTIONS.fireball.name: {
						let isRoasted = hunterType.fireballEffect();
						if (isRoasted) {
							hunters[i].health--;
							snake.roasted++;
							score += roastedScoreIncrease;

							if (toastyCount >= 10) {
								toasty();
							} else {
								sendMessageToConsole(
									consoleMessages.fireball[
										Math.floor(Math.random() * consoleMessages.fireball.length)
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
												Math.random() * consoleMessages.blueHunterBurned.length,
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

									replaceHunter(action, hunters[i], i);
								}
							}
						}
						break;
					default:
						console.error('Unknown action', action);
						return false;
				}

				updateGameValues();
				drawHitHunters();
				countHunters();
				return true;
			}
		}
	}
	return false;
}

/**For blue border protection check */
function countHunters() {
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
	snake.dx = grid;
	snake.dy = 0;
	snake.currentDirection = DIRECTIONS.right;
	snake.lastDirection = DIRECTIONS.down;
	snake.extraSpeed = 0;
	snake.running = false;
	snake.firing = false;
	snake.paralysis = false;
	energyElement.max = startingEnergy;
	score = 0;
	turns = 0;
	snake.eaten = 0;
	snake.roasted = 0;
	snake.zapped = 0;
	snake.toasty = 0;
	snake.poisoned = false;
	toastyCount = 0;

	activeHunters.red = 0;
	activeHunters.blue = 0;
	activeHunters.black = 0;
	activeHunters.yellow = 0;
	activeHunters.white = 0;
	activeHunters.orange = 0;
	activeHunters.purple = 0;
	activeHunters.green = 0;

	hunters = [
		{
			x: 0,
			y: 0,
			age: 0,
			burned: false,
			health: 1,
			climbed: false,
			climbCellIndex: 0,
		},
	];

	consoleElement.replaceChildren();

	if (won) {
		sendMessageToConsole(consoleMessages.win);
	} else {
		sendMessageToConsole(deathMessage);
	}

	gameState = GAME_STATES.GAME_OVER;
	gameButton.textContent = 'Restart';

	fireballs = [];
	hitHunters = [];
	gameButton.classList.add('game-over');
	canSpawnHunters = true;

	if (won) {
		playSound(winSound);
	} else {
		playSound(gameOverSound);
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
			fireball.x < 0 ||
			fireball.x > canvas.width ||
			fireball.y < 0 ||
			fireball.y > canvas.height
		) {
			fireballs.splice(index, 1); // remove fireball
		}

		hunters.forEach(function (hunter, hunterIndex) {
			if (
				fireball.x < hunter.x + grid &&
				fireball.x + fireball.width > hunter.x &&
				fireball.y < hunter.y + grid &&
				fireball.y + fireball.height > hunter.y
			) {
				// fireball hit hunter
				hitHunter({ x: hunter.x, y: hunter.y }, SNAKE_ACTIONS.fireball.name); // treat it as if the snake ate the hunter
				fireballs.splice(index, 1); // remove fireball
				// hunters.splice(hunterIndex, 1); // remove hunter
			}
		});
	});
}

function updateParalysis() {}

function startingText() {
	consoleElement.replaceChildren();
	sendMessageToConsole(consoleMessages.startingText);
	scoreElement.textContent = `Score: ${score}`;
	speedElement.textContent = `0m/s`;
	eatenElement.textContent = `${snake.eaten}🍖`;
	roastedElement.textContent = `${snake.roasted}🔥`;
	zappedElement.textContent = `${snake.zapped}⚡`;
	toastyElement.textContent = `${snake.zapped}🍞`;
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

function playSound(filePath) {
	if (!soundEnabled) return;
	const audioContext = new (window.AudioContext || window.webkitAudioContext)();
	const source = audioContext.createBufferSource();
	const gainNode = new GainNode(audioContext, { gain: 0.5 }); // Create a GainNode for volume control
	gainNode.connect(audioContext.destination);

	fetch(filePath)
		.then((response) => response.arrayBuffer())
		.then((data) => audioContext.decodeAudioData(data))
		.then((buffer) => {
			source.buffer = buffer;
			source.connect(gainNode);
			// Set the volume of the GainNode
			source.start();
		})
		.catch((error) => console.error('Error loading audio:', error));
}

function toasty() {
	toastyCount = 0;
	energyElement.value = energyElement.max;
	score += toastyScoreIncrease;
	snake.toasty++;
	hitHunters.push(fireballColors.toasty);
	sendMessageToConsole(consoleMessages.toasty);
	playSound(toastySound);
	document.getElementById('sliding-image').style.left = `1rem`;
	setTimeout(function () {
		document.getElementById('sliding-image').style.left = '-100%';
	}, 1000);
}

function toggleSound() {
	if (soundEnabled) {
		soundEnabled = false;
		soundButton.classList.add('off');
	} else {
		soundEnabled = true;
		soundButton.classList.remove('off');
	}
	soundButton.textContent = soundEnabled ? 'Sound ON' : 'Sound OFF';
}

function sendMessageToConsole(message) {
	let div = document.createElement('div');
	div.textContent = message;
	consoleElement.appendChild(div);
	consoleElement.scrollTop =
		consoleElement.scrollHeight - consoleElement.clientHeight;
}

/**Does not handle drawing. */
function moveSnake() {
	// snake.dx = -grid;
	// snake.dy = 0;
	// move snake by it's velocity
	switch (snake.currentDirection) {
		case DIRECTIONS.up:
			snake.x += 0;
			snake.y += -grid;
			break;
		case DIRECTIONS.down:
			snake.x += 0;
			snake.y += grid;
			break;
		case DIRECTIONS.left:
			snake.x += -grid;
			snake.y += 0;
			break;
		case DIRECTIONS.right:
			snake.x += grid;
			snake.y += 0;
			break;
	}

	if (
		(snake.x < 0 ||
			snake.y < 0 ||
			snake.x >= canvas.width ||
			snake.y >= canvas.height) &&
		rgba2hex(gameElement.style.borderColor) === COLORS.blue
	) {
		return DEATHS.blueBorder;
	}
	// wrap snake position horizontally on edge of screen
	if (snake.x < 0) {
		snake.x = canvas.width - grid;
	} else if (snake.x >= canvas.width) {
		snake.x = 0;
	}

	// wrap snake position vertically on edge of screen
	if (snake.y < 0) {
		snake.y = canvas.height - grid;
	} else if (snake.y >= canvas.height) {
		snake.y = 0;
	}

	// keep track of where snake has been. front of the array is always the head
	snake.cells.unshift({ x: snake.x, y: snake.y });

	if (snake.poisoned) {
		snake.maxCells--;
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
			if (
				snake.currentDirection === DIRECTIONS.left ||
				snake.lastDirection === DIRECTIONS.left
			) {
				context.drawImage(tailLeftImage, cell.x, cell.y, grid - 1, grid - 1);
			} else {
				context.drawImage(tailRightImage, cell.x, cell.y, grid - 1, grid - 1);
			}
			drewHeadTail = true;
		} else if (index === 0) {
			if (
				snake.currentDirection === DIRECTIONS.left ||
				snake.lastDirection === DIRECTIONS.left
			) {
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

		let snakeDied = hitHunter(cell);
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

function fireballHitBorder() {}

function updateGreenHunters() {
	let result = false;
	hunters.forEach((hunter) => {
		if (hunter) {
			if (hunter.climbed) {
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

/** game loop*/
function loop() {
	if (gameState === GAME_STATES.PAUSED || gameState === GAME_STATES.GAME_OVER) {
		return;
	}
	requestAnimationFrame(loop);

	let snakeTotalSpeed = snake.running
		? Math.min(startingSpeed + snake.extraSpeed + 10, maxSpeed)
		: Math.min(startingSpeed + snake.extraSpeed, maxSpeed);
	if (snakeTotalSpeed <= 0) {
		resetGame(DEATHS.poison);
		return;
	}

	let loopDelay = 60 - snakeTotalSpeed;

	// slow game loop to 30 fps instead of 60 (60/30 = 2)
	if (++count < 60 / (60 / loopDelay)) {
		return;
	}

	speedElement.textContent = `Speed: ${snakeTotalSpeed}m/s`;

	count = 0;
	context.clearRect(0, 0, canvas.width, canvas.height);

	// TODO is this order correct?
	let snakeDied = false;
	let currentDeathReason = '';

	updateFireballs();
	updateParalysis();
	//ring of fire
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

document.addEventListener('keyup', function (e) {
	if (gameState !== GAME_STATES.RUNNING) {
		return;
	}

	const key = e.key.toLowerCase();

	if (key === 'shift' && snake.running) {
		snake.running = false;
	} else if (key === 'f' && snake.firing) {
		snake.firing = false;
	} else if (key === ' ' && snake.paralysis) {
		snake.paralysis = false;
	}
});

// listen to keyboard events to move the snake
document.addEventListener('keydown', function (e) {
	// prevent snake from backtracking on itself by checking that it's
	// not already moving on the same axis (pressing left while moving
	// left won't do anything, and pressing right while moving left
	// shouldn't let you collide with your own body)
	if (gameState !== GAME_STATES.RUNNING) {
		return;
	}

	const key = e.key.toLowerCase();
	if (key === 'shift' && !snake.running) {
		snake.running = true;
	}

	if (key === ' ') {
		e.preventDefault();
		if (!snake.paralysis && energyElement.value <= 0) {
			sendMessageToConsole(consoleMessages.noEnergy);
			return;
		}

		if (
			!snake.paralysis &&
			energyElement.value >= SNAKE_ACTIONS.paralysis.cost &&
			snake.paralysisTurns <= 0
		) {
			snake.poisoned = false;
			snake.paralysis = true;
			snake.paralysisTurns = paralysisMaxTurns;
			energyElement.value -= SNAKE_ACTIONS.paralysis.cost;
			//TODO playSound(fireballSound);
		} else if (
			!snake.paralysis &&
			energyElement.value < SNAKE_ACTIONS.paralysis.cost
		) {
			sendMessageToConsole(consoleMessages.noParalysisEnergy);
		}
	}

	if (key === 'f' && !snake.firing) {
		snake.firing = true;
		if (energyElement.value <= 0) {
			sendMessageToConsole(consoleMessages.noEnergy);
			return;
		}

		switch (snake.currentDirection) {
			case DIRECTIONS.down:
				fireballs.push({
					x: snake.x,
					y: snake.y,
					dx: 0,
					dy: grid,
					width: grid,
					height: grid,
				});
				break;
			case DIRECTIONS.up:
				fireballs.push({
					x: snake.x,
					y: snake.y,
					dx: 0,
					dy: -grid,
					width: grid,
					height: grid,
				});
				break;
			case DIRECTIONS.right:
				fireballs.push({
					x: snake.x,
					y: snake.y,
					dx: grid,
					dy: 0,
					width: grid,
					height: grid,
				});
				break;
			case DIRECTIONS.left:
				fireballs.push({
					x: snake.x,
					y: snake.y,
					dx: -grid,
					dy: 0,
					width: grid,
					height: grid,
				});
				break;
		}

		energyElement.value--;
		playSound(fireballSound);
	}

	// Prevent reversing the direction immediately
	if (
		(key === 'a' && snake.currentDirection !== DIRECTIONS.right) ||
		(key === 'w' && snake.currentDirection !== DIRECTIONS.down) ||
		(key === 'd' && snake.currentDirection !== DIRECTIONS.left) ||
		(key === 's' && snake.currentDirection !== DIRECTIONS.up)
	) {
		// Update the snake's direction
		switch (key) {
			case 'a':
				// snake.dx = -grid;
				// snake.dy = 0;
				snake.lastDirection = snake.currentDirection;
				snake.currentDirection = DIRECTIONS.left;
				break;
			case 'w':
				// snake.dy = -grid;
				// snake.dx = 0;
				snake.lastDirection = snake.currentDirection;
				snake.currentDirection = DIRECTIONS.up;
				break;
			case 'd':
				// snake.dx = grid;
				// snake.dy = 0;
				snake.lastDirection = snake.currentDirection;
				snake.currentDirection = DIRECTIONS.right;
				break;
			case 's':
				// snake.dy = grid;
				// snake.dx = 0;
				snake.lastDirection = snake.currentDirection;
				snake.currentDirection = DIRECTIONS.down;
				break;
		}
	}
});

// start the game
//requestAnimationFrame(loop);
gameButton.addEventListener('click', function () {
	switch (gameState) {
		case GAME_STATES.IDLE:
		case GAME_STATES.GAME_OVER:
			// Start the game
			startingText();
			drawHitHunters();
			energyElement.value = startingEnergy;
			requestAnimationFrame(loop);
			gameState = GAME_STATES.RUNNING;
			gameButton.textContent = 'Pause';
			gameButton.classList.add('paused');
			gameButton.classList.remove('game-over');
			gameElement.style.borderColor = COLORS.border;
			startTime = Date.now();
			timerInterval = setInterval(updateTimer, 100); // Update timer every 10 milliseconds for hundredths of a second
			playSound(startSound);
			break;
		case GAME_STATES.RUNNING:
			// Pause the game
			// requestAnimationFrame(loop(true));
			gameState = GAME_STATES.PAUSED;
			gameButton.textContent = 'Resume';
			gameButton.classList.remove('paused');
			playSound(pauseSound);
			break;
		case GAME_STATES.PAUSED:
			// Resume the game
			requestAnimationFrame(loop);
			gameState = GAME_STATES.RUNNING;
			gameButton.textContent = 'Pause';
			gameButton.classList.add('paused');
			playSound(resumeSound);
			break;
	}
});

soundButton.addEventListener('click', toggleSound);
