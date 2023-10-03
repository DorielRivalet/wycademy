const scoreElement = document.getElementById('score');
const speedElement = document.getElementById('speed');
const eatenElement = document.getElementById('eaten');
const roastedElement = document.getElementById('roasted');
const consoleElement = document.getElementById('game-console');
const gameButton = document.getElementById('game-button');
const soundButton = document.getElementById('sound-button');
const timerElement = document.getElementById('timer');
const fireballMeter = document.getElementById('fireball-meter');

const maxSpeed = 50;
const startingSpeed = 30;
const redColor = '#f38ba8';
const yellowColor = '#f9e2af';
const blackColor = '#6c7086';
const purpleColor = '#cba6f7';
const blueColor = '#89b4fa';
const orangeColor = '#fab387';
const startingFireballs = 10;

const toastySound = 'offline/assets/sound/toasty.mp3';
const gameOverSound =
	'offline/assets/sound/mixkit-arcade-retro-game-over-213.wav';
const redHunterSound =
	'offline/assets/sound/mixkit-quick-jump-arcade-game-239.wav';
const fireballSound = 'offline/assets/sound/mixkit-wizard-fire-woosh-1326.wav';
const blackHunterSound = 'offline/assets/sound/mixkit-tech-break-fail-2947.wav';
const yellowHunterSound =
	'offline/assets/sound/mixkit-quick-win-video-game-notification-269.wav';
const startSound =
	'offline/assets/sound/mixkit-player-boost-recharging-2040.wav';
const pauseSound = 'offline/assets/sound/mixkit-zippo-fire-close-1334.wav';
const resumeSound = 'offline/assets/sound/mixkit-quick-lock-sound-2854.wav';

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

let soundEnabled = true;
let gameState = GAME_STATES.IDLE;
let lastDirection = DIRECTIONS.right;

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
	black: 0,
	yellow: 0,
	orange: 0,
};

/**For color canvas */
let eatenItems = [];

let headRightImage = new Image();
let headLeftImage = new Image();
let bodyImage = new Image();
let tailRightImage = new Image();
let tailLeftImage = new Image();

let hunterBlack = new Image();
let hunterRed = new Image();
let hunterYellow = new Image();
let hunterBlue = new Image();
let hunterOrange = new Image();

headRightImage.src = 'offline/assets/img/head_right.webp';
headLeftImage.src = 'offline/assets/img/head_left.webp';
bodyImage.src = 'offline/assets/img/body.webp';
tailRightImage.src = 'offline/assets/img/tail_right.webp';
tailLeftImage.src = 'offline/assets/img/tail_left.webp';
hunterBlack.src = 'offline/assets/img/hunter_black.webp';
hunterRed.src = 'offline/assets/img/hunter_red.webp';
hunterYellow.src = 'offline/assets/img/hunter_yellow.webp';
hunterBlue.src = 'offline/assets/img/hunter_blue.webp';
hunterOrange.src = 'offline/assets/img/hunter_orange.webp';

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

const eaten_replies = {
	red: [
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
	],
	black: [
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
	yellow: [
		'A flash of yellow light was dispersed around the area.',
		'Feeling rejuvenated!',
		'I have hunger for glory.',
		"You ate a hunter's shiny weapon. On the back it says: Z100, do not steal.",
		'This hunter ate a Flashbug on accident.',
		'Moar fireballs!',
	],
	toasty: [
		'Everyone aboard the Ravi train! 🚂',
		'All aboard! Hahahahaha... 🚆',
		'Crispy! 🔥',
		'A Well-Done Steak is ready! 🍖',
		'Give me a BBQ Spit! 💢',
	],
	frosty: [
		'Frosty! ❄️',
		'This goes well with some iced coffee. ☕',
		"She's so cold cold cold like an ice cream cone. 🍦",
		'Frozen meal is ready! 🍽️',
	],
	dodged: [
		'Olé!',
		'The hunter automatically dodged your attack.',
		"This hunter has stylish gear, eating him won't be easy.",
		'This hunter is wearing a white mantle, and manages to escape.',
	],
};

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

function generateHunter(age = 0) {
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
	return { x, y, age: age };
}

/**  get random whole numbers in a specific range
 @see https://stackoverflow.com/a/1527820/2124254 */
function getRandomInt(min, max) {
	return Math.floor(Math.random() * (max - min)) + min;
}

function snakeAteHunter(cell, fromFireball = false) {
	for (let i = 0; i < hunters.length; i++) {
		if (cell.x === hunters[i].x && cell.y === hunters[i].y) {
			if (fromFireball) {
				if (hunters[i].age >= 100 && !hunters[i].burned) {
					hunters[i].burned = true;
					sendMessageToConsole(
						eaten_replies.frosty[
							Math.floor(Math.random() * eaten_replies.frosty.length)
						].toString(),
					);
					break;
				} else {
					roasted++;
					score += 2;

					sendMessageToConsole(
						eaten_replies.toasty[
							Math.floor(Math.random() * eaten_replies.toasty.length)
						].toString(),
					);

					eatenItems.push(purpleColor);

					if (hunters[i].age >= 6) {
						toastyCount++;
					} else {
						toastyCount = 0;
					}

					if (toastyCount >= 10) {
						toasty();
					}
				}
			} else {
				if (hunters[i].burned && !snake.running) {
					sendMessageToConsole(
						eaten_replies.dodged[
							Math.floor(Math.random() * eaten_replies.dodged.length)
						].toString(),
					);
					break;
				} else if (hunters[i].burned && snake.running) {
					eaten++;
					snake.maxCells++;
					score += 50;
					snake.extraSpeed += 2;
					eatenHunters.orange++;

					hunters.forEach((hunter) => {
						hunter.age = hunter.age >= 1 ? hunter.age - 1 : 0;
					});

					eatenItems.push(orangeColor);
					snake.maxFireballs += 10;
					fireballMeter.max += 10;
					fireballMeter.value = snake.maxFireballs;

					sendMessageToConsole(
						`You can now fire ${snake.maxFireballs} fireballs! 🔥`,
					);
					// TODO
					playSound(yellowHunterSound);
				} else if (hunters[i].age <= 4) {
					eaten++;
					snake.maxCells++;
					score++;
					eatenHunters.red++;
					hunters.forEach((hunter) => {
						hunter.age++;
					});

					sendMessageToConsole(
						eaten_replies.red[
							Math.floor(Math.random() * eaten_replies.red.length)
						].toString(),
					);

					eatenItems.push(redColor);
					playSound(redHunterSound);
				} else if (hunters[i].age === 5) {
					eaten++;
					snake.maxCells++;
					score += 10;
					eatenHunters.yellow++;

					hunters.forEach((hunter) => {
						hunter.age = hunter.age >= 100 ? hunter.age : 0;
					});

					sendMessageToConsole(
						eaten_replies.yellow[
							Math.floor(Math.random() * eaten_replies.yellow.length)
						].toString(),
					);

					eatenItems.push(yellowColor);
					fireballMeter.value = snake.maxFireballs;
					playSound(yellowHunterSound);
				} else if (hunters[i].age >= 6 && hunters[i].age < 100) {
					eaten++;
					snake.maxCells++;
					score--;
					snake.extraSpeed--;
					eatenHunters.black++;

					hunters.forEach((hunter) => {
						hunter.age++;
					});

					sendMessageToConsole(
						eaten_replies.black[
							Math.floor(Math.random() * eaten_replies.black.length)
						].toString(),
					);

					eatenItems.push(blackColor);
					playSound(blackHunterSound);
				} else if (hunters[i].age >= 100) {
					resetGame('blue hunter');
					break;
				} else {
					console.warn(hunters);
				}
			}

			drawEatenItems();

			// canvas is 400x400 which is 25x25 grids
			// hunter.x = getRandomInt(0, 25) * grid;
			// hunter.y = getRandomInt(0, 25) * grid;

			eatenElement.textContent = `Eaten: ${eaten}`;
			roastedElement.textContent = `Roasted: ${roasted}`;

			hunters.splice(i, 1);

			hunters.push(generateHunter());
			scoreElement.textContent = `Score: ${score}`;

			turns++;

			if (turns % 5 === 0) {
				hunters.push(generateHunter());
				if (hunters[i].age <= 5 && !fromFireball) {
					snake.extraSpeed++;
				}
			}

			if (turns % 10 === 0) {
				hunters.push(generateHunter(100));
			}

			break;
		}
	}
}

function resetGame(reason = '') {
	snake.x = 160;
	snake.y = 160;
	snake.cells = [];
	snake.maxCells = 3;
	snake.dx = grid;
	snake.dy = 0;
	snake.extraSpeed = 0;
	snake.running = false;
	snake.maxFireballs = startingFireballs;
	fireballMeter.max = startingFireballs;
	score = 0;
	turns = 0;
	eaten = 0;
	roasted = 0;
	toastyCount = 0;

	hunters = [
		{
			x: getRandomInt(0, 25) * grid,
			y: getRandomInt(0, 25) * grid,
			age: 0,
		},
	];

	eatenHunters.red = 0;
	eatenHunters.black = 0;
	eatenHunters.yellow = 0;
	eatenHunters.orange = 0;

	consoleElement.replaceChildren();
	if (reason === 'poison') {
		sendMessageToConsole('You died from food poisoning. 💀');
	} else if (reason === 'blue hunter') {
		sendMessageToConsole('An experienced hunter stopped your massacre. 💀');
	} else {
		sendMessageToConsole('You died. 💀');
	}

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
		context.fillStyle = purpleColor;
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
	sendMessageToConsole('You are hungry.');
	scoreElement.textContent = `Score: ${score}`;
	speedElement.textContent = `Speed: 0m/s`;
	eatenElement.textContent = `Eaten: ${eaten}`;
	roastedElement.textContent = `Roasted: ${roasted}`;
}

function drawEatenItems() {
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

	fetch(filePath)
		.then((response) => response.arrayBuffer())
		.then((data) => audioContext.decodeAudioData(data))
		.then((buffer) => {
			source.buffer = buffer;
			source.connect(audioContext.destination);
			source.start();
		})
		.catch((error) => console.error('Error loading audio:', error));
}

function toasty() {
	toastyCount = 0;
	fireballMeter.value = snake.maxFireballs;
	score += 100;
	sendMessageToConsole('Toasty! 🍞');
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
		resetGame('poison');
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

	// move snake by it's velocity
	snake.x += snake.dx;
	snake.y += snake.dy;

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

	// draw hunter
	hunters.forEach((hunter) => {
		if (hunter.burned) {
			context.drawImage(hunterOrange, hunter.x, hunter.y, grid - 1, grid - 1);
		} else if (hunter.age === 5) {
			context.drawImage(hunterYellow, hunter.x, hunter.y, grid - 1, grid - 1);
		} else if (hunter.age >= 100) {
			context.drawImage(hunterBlue, hunter.x, hunter.y, grid - 1, grid - 1);
		} else if (hunter.age > 5) {
			context.drawImage(hunterBlack, hunter.x, hunter.y, grid - 1, grid - 1);
		} else {
			context.drawImage(hunterRed, hunter.x, hunter.y, grid - 1, grid - 1);
		}
	});

	updateFireballs();

	// draw snake one cell at a time
	snake.cells.forEach(function (cell, index) {
		// drawing 1 px smaller than the grid creates a grid effect in the snake body so you can see how long it is

		context.drawImage(bodyImage, cell.x, cell.y, grid - 1, grid - 1);

		if (snake.cells.length - 1 == index) {
			if (snake.dx === -grid) {
				context.drawImage(tailLeftImage, cell.x, cell.y, grid - 1, grid - 1);
			} else {
				context.drawImage(tailRightImage, cell.x, cell.y, grid - 1, grid - 1);
			}
		} else if (index === 0) {
			if (snake.dx === -grid) {
				context.drawImage(headLeftImage, cell.x, cell.y, grid - 1, grid - 1);
			} else {
				context.drawImage(headRightImage, cell.x, cell.y, grid - 1, grid - 1);
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

document.addEventListener('keyup', function (e) {
	if (gameState !== GAME_STATES.RUNNING) {
		return;
	}

	const key = e.key.toLowerCase();

	if (key === 'shift' && snake.running) {
		snake.running = false;
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

	// Prevent reversing the direction immediately
	if (
		(key === 'a' && lastDirection !== 'right' && snake.dx !== -grid) ||
		(key === 'w' && lastDirection !== 'down' && snake.dy !== -grid) ||
		(key === 'd' && lastDirection !== 'left' && snake.dx !== grid) ||
		(key === 's' && lastDirection !== 'up' && snake.dy !== grid)
	) {
		// Update the snake's direction
		if (key === 'a' && snake.dx !== grid) {
			snake.dx = -grid;
			snake.dy = 0;
			lastDirection = 'left';
		} else if (key === 'w' && snake.dy !== grid) {
			snake.dy = -grid;
			snake.dx = 0;
			lastDirection = 'up';
		} else if (key === 'd' && snake.dx !== -grid) {
			snake.dx = grid;
			snake.dy = 0;
			lastDirection = 'right';
		} else if (key === 's' && snake.dy !== -grid) {
			snake.dy = grid;
			snake.dx = 0;
			lastDirection = 'down';
		}
	}

	// fireballs
	if (key === 'f') {
		if (fireballMeter.value <= 0) {
			sendMessageToConsole('Ran out of energy! 💨');
			return;
		}

		fireballs.push({
			x: snake.x,
			y: snake.y,
			dx: snake.dx,
			dy: snake.dy,
			width: grid,
			height: grid,
		});

		fireballMeter.value--;
		playSound(fireballSound);
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
			drawEatenItems();
			fireballMeter.value = startingFireballs;
			requestAnimationFrame(loop);
			gameState = GAME_STATES.RUNNING;
			gameButton.textContent = 'Pause';
			gameButton.classList.add('paused');
			gameButton.classList.remove('game-over');
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
