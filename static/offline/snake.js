'use strict';

const scoreElement = document.getElementById('score');
const speedElement = document.getElementById('speed');
const eatenElement = document.getElementById('eaten');
const roastedElement = document.getElementById('roasted');
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
};

const fireballColors = {
	hit: COLORS.maroon,
	toasty: COLORS.pink,
};

const consoleMessages = {
	startingText: 'You are hungry.',
	noEnergy: 'Ran out of energy! 💨',
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
	// when not using paralysis
	whiteHunter: [
		'Olé!',
		'The hunter automatically dodged your attack.',
		"This hunter has stylish gear, eating him won't be easy.",
		'The hunter is wearing a white mantle, and manages to escape.',
		'Too slow!',
		'Catch me if you can!',
		'I have Evasion+4!',
	],
	purpleHunterEat: [
		'We found one of the best hunters the guild has to offer.',
		'The hunter hit you so hard that it gave you a concussion.',
		'This is a pretty tough hunter.',
		'This hunter definitely has solid determination.',
	],
	purpleHunterBurn: [
		"This hunter won't go down without a fight!",
		'I can do this all day.',
		"Ow! I'm suffocating.",
		'Ouch! That burns.',
	],
	blueHunter: [
		'Frosty! ❄️',
		'This goes well with some iced coffee. ☕',
		"She's so cold cold cold like an ice cream cone. 🍦",
		'Frozen meal is ready! 🍽️',
	],
	// fireball hit. also orangeHunter
	fireball: [
		'Everyone aboard the Ravi train! 🚂',
		'All aboard! Hahahahaha... 🚆',
		'Crispy! 🔥',
		'A Well-Done Steak is ready! 🍖',
		'Give me a BBQ Spit! 💢',
	],
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
	default: 'You died. 💀',
};

function createImage(url) {
	let img = new Image();
	img.src = url;
	return img;
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
	},
	white: {
		// from purple w/ fireball
		color: COLORS.white,
		minAge: 50,
		maxAge: 74,
		burned: false,
		score: 10,
		snakeGrowth: 3,
		snakeSpeed: 2,
		turnDelay: 10,
		// TODO
		sound:
			'offline/assets/sound/mixkit-quick-win-video-game-notification-269.wav',
		image: createImage('offline/assets/img/hunter_white.webp'),
		messages: consoleMessages.whiteHunter,
	},
	purple: {
		color: COLORS.purple,
		minAge: 75,
		maxAge: 99,
		burned: false,
		score: -2,
		snakeGrowth: -2,
		snakeSpeed: -2,
		turnDelay: 15,
		// TODO
		sound: 'offline/assets/sound/mixkit-tech-break-fail-2947.wav',
		image: createImage('offline/assets/img/hunter_purple.webp'),
		messages: consoleMessages.purpleHunter,
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
	},
	orange: {
		// from blue w/ fireball
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
	},
};

const roastedScoreIncrease = 2;

const maxSpeed = 50;
const startingSpeed = 30;
const startingFireballs = 10;

let soundEnabled = true;
let gameState = GAME_STATES.IDLE;

const canvas = document.getElementById('game');
let context = canvas.getContext('2d');

// the canvas width & height, snake x & y, and the hunter x & y, all need to be a multiples of the grid size in order for collision detection to work
// (e.g. 16 * 25 = 400)
let grid = 32;
let count = 0;
let score = 0;

// TODO class
let snake = {
	x: 160,
	y: 160,

	// snake velocity. moves one grid length every frame in either the x or y direction
	dx: grid,
	dy: 0,

	// keep track of all grids the snake body occupies
	cells: [],

	// length of the snake. grows when eating a hunter
	maxCells: 3,

	extraSpeed: 0,

	running: false,

	maxFireballs: startingFireballs,
	firing: false,
	currentDirection: DIRECTIONS.right,
	lastDirection: DIRECTIONS.down,
	paralysis: false,
	hitBlueBorder: false,
};

let hunters = [
	{
		x: 320,
		y: 320,
		age: 0,
		burned: false,
	},
];

/**Unused */
let eatenHunters = {
	red: 0,
	yellow: 0,
	black: 0,
	white: 0,
	purple: 0,
	blue: 0,
	orange: 0,
};

let activeHunters = {
	red: 0,
	blue: 0,
	orange: 0,
	white: 0,
	black: 0,
	yellow: 0,
	purple: 0,
};

/**For color canvas */
let eatenItems = [];

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

let turns = 0;
let eaten = 0;
let roasted = 0;

let fireballs = [];
/**If hitting 10 black hunters in a row with fireball, refill meter. */
let toastyCount = 0;

// Variables to keep track of the timer
let startTime = 0;
let elapsedTime = 0;
let timerInterval;

const eaten_items_canvas = document.getElementById('eaten-items');
let eaten_items_canvas_context = eaten_items_canvas.getContext('2d');

const gridSize = 25;
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
	return full;
}

function generateHunter(age = 0, burned = false) {
	if (isBoardFull()) {
		return;
	}

	let x, y;
	while (true) {
		x = getRandomInt(0, 25) * grid;
		y = getRandomInt(0, 25) * grid;

		let collision = snake.cells.some((cell) => cell.x === x && cell.y === y);
		if (!collision) {
			let hunterCollision = hunters.some(
				(hunter) => hunter.x === x && hunter.y === y,
			);
			if (!hunterCollision) break;
		}
	}
	return { x, y, age: age, burned: burned };
}

/**  get random whole numbers in a specific range
 @see https://stackoverflow.com/a/1527820/2124254 */
function getRandomInt(min, max) {
	return Math.floor(Math.random() * (max - min)) + min;
}

/**The fireball and energy effect when eating the hunter */
function setHunterEatenFireballEffect(hunterType) {
	switch (hunterType.color) {
		case COLORS.red:
		case COLORS.blue:
			return;
		case COLORS.black:
			energyElement.value = Math.max(energyElement.value - 1, 0);
			break;
		case COLORS.white:
			energyElement.value = Math.min(
				energyElement.value + 1,
				snake.maxFireballs,
			);
			break;
		case COLORS.purple:
			energyElement.value = 0;
			break;
		case COLORS.yellow:
			energyElement.value = Math.min(
				energyElement.value + 10,
				snake.maxFireballs,
			);
			break;
		case COLORS.orange:
			snake.maxFireballs += 1;
			energyElement.max += 1;
			energyElement.value = snake.maxFireballs;

			sendMessageToConsole(
				`You can now fire ${snake.maxFireballs} fireballs! 🔥`,
			);
			break;
	}
}

/**The burn effect when hitting the hunter with fireball*/
function setHunterBurnEffect(hunter) {
	let hunterType = getHunterType(hunter);

	if (hunterType.color === COLORS.blue) {
		hunter.burned = true;
		sendMessageToConsole(
			consoleMessages.blueHunter[
				Math.floor(Math.random() * consoleMessages.blueHunter.length)
			].toString(),
		);
		return;
	} else {
		roasted++;
		score += roastedScoreIncrease;

		sendMessageToConsole(
			consoleMessages.fireball[
				Math.floor(Math.random() * consoleMessages.fireball.length)
			].toString(),
		);

		eatenItems.push(fireballColors.hit);

		if (hunterType.color === COLORS.black) {
			toastyCount++;
		} else {
			toastyCount = 0;
		}

		if (toastyCount >= 10) {
			toasty();
			eatenItems.push(fireballColors.toasty);
		}
	}
}

/**The age effect when eating the hunter */
function setHunterAgeEffect(hunterType) {
	switch (hunterType.color) {
		case COLORS.blue:
			return;
		case COLORS.red:
		case COLORS.black:
		case COLORS.white:
			hunters.forEach((hunter) => {
				hunter.age += 1;
			});
			break;
		case COLORS.yellow:
			hunters.forEach((hunter) => {
				hunter.age = hunter.age <= HUNTER_TYPES.black.maxAge ? 0 : hunter.age;
			});
			break;
		case COLORS.purple:
			hunters.forEach((hunter) => {
				hunter.age += 10;
			});
			break;
		case COLORS.orange:
			hunters.forEach((hunter) => {
				hunter.age = hunter.age >= 1 ? hunter.age - 1 : 0;
			});
			break;
	}
}

function getHunterType(hunter) {
	if (!hunter) {
		console.error('Hunter not found.');
	}
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

function setHunterTypeSnakeGrowth(hunterType) {
	switch (hunterType.color) {
		case COLORS.red:
			snake.maxCells += HUNTER_TYPES.red.snakeGrowth;
			break;
		case COLORS.yellow:
			snake.maxCells += HUNTER_TYPES.yellow.snakeGrowth;
			break;
		case COLORS.black:
			snake.maxCells += HUNTER_TYPES.black.snakeGrowth;
			break;
		case COLORS.white:
			snake.maxCells += HUNTER_TYPES.white.snakeGrowth;
			break;
		case COLORS.purple:
			snake.maxCells += HUNTER_TYPES.purple.snakeGrowth;
			break;
		case COLORS.blue:
			snake.maxCells += HUNTER_TYPES.blue.snakeGrowth;
			break;
		case COLORS.orange:
			snake.maxCells += HUNTER_TYPES.orange.snakeGrowth;
			break;
	}
}

function setHunterTypeSnakeSpeed(hunterType) {
	switch (hunterType.color) {
		case COLORS.red:
			snake.extraSpeed += HUNTER_TYPES.red.snakeSpeed;
			break;
		case COLORS.yellow:
			snake.extraSpeed += HUNTER_TYPES.yellow.snakeSpeed;
			break;
		case COLORS.black:
			snake.extraSpeed += HUNTER_TYPES.black.snakeSpeed;
			break;
		case COLORS.white:
			snake.extraSpeed += HUNTER_TYPES.white.snakeSpeed;
			break;
		case COLORS.purple:
			snake.extraSpeed += HUNTER_TYPES.purple.snakeSpeed;
			break;
		case COLORS.blue:
			snake.extraSpeed += HUNTER_TYPES.blue.snakeSpeed;
			break;
		case COLORS.orange:
			snake.extraSpeed += HUNTER_TYPES.orange.snakeSpeed;
			break;
	}
}

function setHunterTypeScoreIncrease(hunterType) {
	switch (hunterType.color) {
		case COLORS.red:
			score += HUNTER_TYPES.red.score;
			break;
		case COLORS.yellow:
			score += HUNTER_TYPES.yellow.score;
			break;
		case COLORS.black:
			score += HUNTER_TYPES.black.score;
			break;
		case COLORS.white:
			score += HUNTER_TYPES.white.score;
			break;
		case COLORS.purple:
			score += HUNTER_TYPES.purple.score;
			break;
		case COLORS.blue:
			score += HUNTER_TYPES.blue.score;
			break;
		case COLORS.orange:
			score += HUNTER_TYPES.orange.score;
			break;
	}
}

function setHunterTypeEatenCount(hunterType) {
	eaten++;
	eatenItems.push(hunterType.color);

	switch (hunterType.color) {
		case COLORS.red:
			eatenHunters.red++;
			break;
		case COLORS.yellow:
			eatenHunters.yellow++;
			break;
		case COLORS.black:
			eatenHunters.black++;
			break;
		case COLORS.white:
			eatenHunters.white++;
			break;
		case COLORS.purple:
			eatenHunters.purple++;
			break;
		case COLORS.blue:
			eatenHunters.blue++;
			break;
		case COLORS.orange:
			eatenHunters.orange++;
			break;
	}
}

function sendHunterTypeMessage(hunterType) {
	switch (hunterType.color) {
		case COLORS.red:
			sendMessageToConsole(
				consoleMessages.redHunter[
					Math.floor(Math.random() * consoleMessages.redHunter.length)
				].toString(),
			);
			break;
		case COLORS.yellow:
			sendMessageToConsole(
				consoleMessages.yellowHunter[
					Math.floor(Math.random() * consoleMessages.yellowHunter.length)
				].toString(),
			);
			break;
		case COLORS.black:
			sendMessageToConsole(
				consoleMessages.blackHunter[
					Math.floor(Math.random() * consoleMessages.blackHunter.length)
				].toString(),
			);
			break;
		case COLORS.white:
			sendMessageToConsole(
				consoleMessages.whiteHunter[
					Math.floor(Math.random() * consoleMessages.whiteHunter.length)
				].toString(),
			);
			break;
		case COLORS.purple:
			// sendMessageToConsole(
			// 	consoleMessages.whiteHunter[
			// 		Math.floor(Math.random() * consoleMessages.whiteHunter.length)
			// 	].toString(),
			// );
			break;
		case COLORS.blue:
			sendMessageToConsole(
				consoleMessages.blueHunter[
					Math.floor(Math.random() * consoleMessages.blueHunter.length)
				].toString(),
			);
			break;
		case COLORS.orange:
			sendMessageToConsole(
				consoleMessages.fireball[
					Math.floor(Math.random() * consoleMessages.fireball.length)
				].toString(),
			);
			break;
	}
}

function setHunterTypeEatenEffects(hunterType) {
	setHunterTypeSnakeGrowth(hunterType);
	setHunterTypeSnakeSpeed(hunterType);
	setHunterTypeScoreIncrease(hunterType);
	setHunterTypeEatenCount(hunterType);
	setHunterAgeEffect(hunterType);
	setHunterEatenFireballEffect(hunterType);
	playSound(hunterType.sound);
	sendHunterTypeMessage(hunterType);
}

/**The effect when eating the hunter */
function setHunterEatEffect(hunter) {
	let hunterType = getHunterType(hunter);

	if (hunterType.color === COLORS.blue) {
		resetGame(DEATHS.blueHunter);
		return;
	}

	if (hunterType.color === COLORS.white && !snake.paralysis) {
		sendMessageToConsole(
			consoleMessages.whiteHunter[
				Math.floor(Math.random() * consoleMessages.whiteHunter.length)
			].toString(),
		);
		return;
	}

	if (hunterType.color === COLORS.white && snake.paralysis) {
		setHunterTypeEatenEffects(hunterType);
		return;
	}

	// red, yellow, black, purple, orange
	setHunterTypeEatenEffects(hunterType);
}

function setExtraHunters(turns, fromFireball, hunter) {
	if (turns % HUNTER_TYPES.white.turnDelay === 0) {
		// TODO replace with white hunter
		hunters.push(generateHunter());
		// red and yellow
		if (hunter.age <= HUNTER_TYPES.yellow.maxAge && !fromFireball) {
			snake.extraSpeed = Math.min(
				snake.extraSpeed + 1,
				maxSpeed - startingSpeed,
			);
		}
	}

	if (turns % HUNTER_TYPES.purple.turnDelay === 0) {
		hunters.push(generateHunter(HUNTER_TYPES.purple.minAge));
		// TODO spawn sound effects
	}

	if (turns % HUNTER_TYPES.blue.turnDelay === 0) {
		hunters.push(generateHunter(HUNTER_TYPES.blue.minAge));
		gameElement.style.borderColor = COLORS.blue;
	}
}

//TODO  eat yellow -> only for <= 49 change to age 0.
function snakeAteHunter(cell, fromFireball = false) {
	for (let i = 0; i < hunters.length; i++) {
		if (cell.x === hunters[i].x && cell.y === hunters[i].y) {
			if (fromFireball) {
				setHunterBurnEffect(hunters[i]);
			} else {
				setHunterEatEffect(hunters[i]);
			}

			// TODO this needs to handle new fireball function
			drawDefeatedHunters();

			// canvas is 400x400 which is 25x25 grids
			// hunter.x = getRandomInt(0, 25) * grid;
			// hunter.y = getRandomInt(0, 25) * grid;

			scoreElement.textContent = `Score: ${score}`;
			eatenElement.textContent = `Eaten: ${eaten}`;
			roastedElement.textContent = `Roasted: ${roasted}`;

			hunters.splice(i, 1);
			hunters.push(generateHunter());

			turns++;
			setExtraHunters(turns, fromFireball, hunters[i]);

			break;
		}
	}

	countHunters();
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

	hunters.forEach((hunter) => {
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
	};
}

function resetGame(deathMessage = DEATHS.default) {
	snake.x = 160;
	snake.y = 160;
	snake.cells = [];
	snake.maxCells = 3;
	snake.dx = grid;
	snake.dy = 0;
	snake.currentDirection = DIRECTIONS.right;
	snake.lastDirection = DIRECTIONS.down;
	snake.extraSpeed = 0;
	snake.running = false;
	snake.maxFireballs = startingFireballs;
	snake.firing = false;
	snake.paralysis = false;
	snake.hitBlueBorder = false;
	energyElement.max = startingFireballs;
	score = 0;
	turns = 0;
	eaten = 0;
	roasted = 0;
	toastyCount = 0;

	activeHunters.red = 0;
	activeHunters.blue = 0;
	activeHunters.black = 0;
	activeHunters.yellow = 0;
	activeHunters.white = 0;
	activeHunters.orange = 0;
	activeHunters.purple = 0;

	hunters = [
		{
			x: getRandomInt(0, 25) * grid,
			y: getRandomInt(0, 25) * grid,
			age: 0,
			burned: false,
		},
	];

	eatenHunters.red = 0;
	eatenHunters.blue = 0;
	eatenHunters.black = 0;
	eatenHunters.yellow = 0;
	eatenHunters.white = 0;
	eatenHunters.orange = 0;
	eatenHunters.purple = 0;

	consoleElement.replaceChildren();

	sendMessageToConsole(deathMessage);

	gameState = GAME_STATES.GAME_OVER;
	gameButton.textContent = 'Restart';

	fireballs = [];
	eatenItems = [];
	gameButton.classList.add('game-over');

	clearInterval(timerInterval); // Stop updating the timer
	playSound(gameOverSound);
}

function updateFireballs() {
	fireballs.forEach(function (fireball, index) {
		// update position
		fireball.x += fireball.dx;
		fireball.y += fireball.dy;

		// draw the fireball
		context.fillStyle = COLORS.purple;
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
				snakeAteHunter({ x: hunter.x, y: hunter.y }, true); // treat it as if the snake ate the hunter
				fireballs.splice(index, 1); // remove fireball
				// hunters.splice(hunterIndex, 1); // remove hunter
			}
		});
	});
}

function startingText() {
	consoleElement.replaceChildren();
	sendMessageToConsole(consoleMessages.startingText);
	scoreElement.textContent = `Score: ${score}`;
	speedElement.textContent = `Speed: 0m/s`;
	eatenElement.textContent = `Eaten: ${eaten}`;
	roastedElement.textContent = `Roasted: ${roasted}`;
}

function drawDefeatedHunters() {
	let row = 0;
	let col = 0;

	// Clear the canvas for redraw
	eaten_items_canvas_context.clearRect(
		0,
		0,
		eaten_items_canvas.width,
		eaten_items_canvas.height,
	);

	for (let i = 0; i < eatenItems.length; i++) {
		drawSlot(row, col, eatenItems[i]);

		// Move to next column
		col++;

		// If we've filled an entire row, move to next row and reset column
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
	energyElement.value = snake.maxFireballs;
	score += 100;
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
		snake.hitBlueBorder = true;
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

	// remove cells as we move away from them
	if (snake.cells.length > snake.maxCells) {
		snake.cells.pop();
	}
}

function updateSnake() {
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

		snakeAteHunter(cell);

		// check collision with all cells after this one (modified bubble sort)
		for (var i = index + 1; i < snake.cells.length; i++) {
			// snake occupies same space as a body part. reset game
			if (cell.x === snake.cells[i].x && cell.y === snake.cells[i].y) {
				resetGame();
			}
		}
	});
}

function updateHunters() {
	// draw hunter
	hunters.forEach((hunter) => {
		if (getHunterType(hunter)) {
			if (getHunterType(hunter).color === COLORS.orange) {
				context.drawImage(
					HUNTER_TYPES.orange.image,
					hunter.x,
					hunter.y,
					grid - 1,
					grid - 1,
				);
			} else if (getHunterType(hunter).color === COLORS.yellow) {
				context.drawImage(
					HUNTER_TYPES.yellow.image,
					hunter.x,
					hunter.y,
					grid - 1,
					grid - 1,
				);
			} else if (getHunterType(hunter).color === COLORS.black) {
				context.drawImage(
					HUNTER_TYPES.black.image,
					hunter.x,
					hunter.y,
					grid - 1,
					grid - 1,
				);
			} else if (getHunterType(hunter).color === COLORS.white) {
				context.drawImage(
					HUNTER_TYPES.white.image,
					hunter.x,
					hunter.y,
					grid - 1,
					grid - 1,
				);
			} else if (getHunterType(hunter).color === COLORS.purple) {
				context.drawImage(
					HUNTER_TYPES.purple.image,
					hunter.x,
					hunter.y,
					grid - 1,
					grid - 1,
				);
			} else if (getHunterType(hunter).color === COLORS.blue) {
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
	});
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

	moveSnake();

	updateFireballs();
	updateSnake();
	if (snake.hitBlueBorder) {
		resetGame(DEATHS.blueBorder);
	}
	updateHunters();
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

	if (key === ' ' && !snake.paralysis) {
		e.preventDefault();
		snake.paralysis = true;
		if (energyElement.value <= 0) {
			sendMessageToConsole(consoleMessages.noEnergy);
			return;
		}
		energyElement.value = 0;
		//TODO playSound(fireballSound);
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
				console.log(snake);
				break;
			case 'w':
				// snake.dy = -grid;
				// snake.dx = 0;
				snake.lastDirection = snake.currentDirection;
				snake.currentDirection = DIRECTIONS.up;
				console.log(snake);
				break;
			case 'd':
				// snake.dx = grid;
				// snake.dy = 0;
				snake.lastDirection = snake.currentDirection;
				snake.currentDirection = DIRECTIONS.right;
				console.log(snake);
				break;
			case 's':
				// snake.dy = grid;
				// snake.dx = 0;
				snake.lastDirection = snake.currentDirection;
				snake.currentDirection = DIRECTIONS.down;
				console.log(snake);
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
			drawDefeatedHunters();
			energyElement.value = startingFireballs;
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
