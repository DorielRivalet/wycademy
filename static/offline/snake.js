// TODO fireball with space. toasty. 10 secs boost.
const scoreElement = document.getElementById('score');
const speedElement = document.getElementById('speed');
const eatenElement = document.getElementById('eaten');
const roastedElement = document.getElementById('roasted');
const consoleElement = document.getElementById('game-console');
const gameButton = document.getElementById('game-button');
const soundButton = document.getElementById('sound-button');
const timerElement = document.getElementById('timer');
const fireballMeter = document.getElementById('fireball-meter');

const baseFPS = 30;
const redColor = '#f38ba8';
const yellowColor = '#f9e2af';
const blackColor = '#6c7086';
const purpleColor = '#cba6f7';
const maxFireballs = 10;

const GAME_STATES = {
	IDLE: 'idle',
	RUNNING: 'running',
	PAUSED: 'paused',
	GAME_OVER: 'game_over',
};

let soundEnabled = true;
let gameState = GAME_STATES.IDLE;

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
		'Looks like this raid is going to fail',
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
		'A flash of golden white light was dispersed around the area.',
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
};

const canvas = document.getElementById('game');
let context = canvas.getContext('2d');

// the canvas width & height, snake x & y, and the apple x & y, all need to be a multiples of the grid size in order for collision detection to work
// (e.g. 16 * 25 = 400)
let grid = 32;
let count = 0;
let score = 0;

let snake = {
	x: 160,
	y: 160,

	// snake velocity. moves one grid length every frame in either the x or y direction
	dx: grid,
	dy: 0,

	// keep track of all grids the snake body occupies
	cells: [],

	// length of the snake. grows when eating an apple
	maxCells: 3,

	extraSpeed: 0,
};

let apples = [
	{
		x: 320,
		y: 320,
		age: 0,
	},
];

/**Unused */
let eatenApples = {
	red: 0,
	black: 0,
	golden: 0,
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

headRightImage.src = 'offline/assets/img/head_right.webp';
headLeftImage.src = 'offline/assets/img/head_left.webp';
bodyImage.src = 'offline/assets/img/body.webp';
tailRightImage.src = 'offline/assets/img/tail_right.webp';
tailLeftImage.src = 'offline/assets/img/tail_left.webp';
hunterBlack.src = 'offline/assets/img/hunter_black.webp';
hunterRed.src = 'offline/assets/img/hunter_red.webp';
hunterYellow.src = 'offline/assets/img/hunter_yellow.webp';

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

// Function to draw a colored slot
function drawSlot(row, col, color) {
	eaten_items_canvas_context.fillStyle = color;
	eaten_items_canvas_context.fillRect(
		col * slotSize,
		row * slotSize,
		slotSize,
		slotSize,
	);
}

// Function to format the time as MM:ss.ff
function formatTime(time) {
	const minutes = Math.floor(time / 60000);
	const seconds = Math.floor((time % 60000) / 1000);
	const hundredths = Math.floor((time % 1000) / 10);
	return `${minutes.toString().padStart(2, '0')}:${seconds
		.toString()
		.padStart(2, '0')}.${hundredths.toString().padStart(2, '0')}`;
}

// Function to update the timer display
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
			let appleCollision = apples.some(
				(apple) => apple.x === i && apple.y === j,
			);
			if (!collision && !appleCollision) {
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

function generateApple() {
	if (isBoardFull()) {
		return;
	}

	let x, y;
	while (true) {
		x = getRandomInt(0, 25) * grid;
		y = getRandomInt(0, 25) * grid;

		let collision = snake.cells.some((cell) => cell.x === x && cell.y === y);
		if (!collision) {
			let appleCollision = apples.some(
				(apple) => apple.x === x && apple.y === y,
			);
			if (!appleCollision) break;
		}
	}
	return { x, y, age: 0 };
}

/**  get random whole numbers in a specific range
 @see https://stackoverflow.com/a/1527820/2124254 */
function getRandomInt(min, max) {
	return Math.floor(Math.random() * (max - min)) + min;
}

function snakeAteApple(cell, fromFireball = false) {
	for (let i = 0; i < apples.length; i++) {
		if (cell.x === apples[i].x && cell.y === apples[i].y) {
			if (fromFireball) {
				roasted++;
			} else {
				eaten++;
				snake.maxCells++;
			}

			turns++;

			eatenElement.textContent = `Eaten: ${eaten}`;
			roastedElement.textContent = `Roasted: ${roasted}`;

			let newDiv = document.createElement('div');

			if (fromFireball) {
				score += 2;
				newDiv.textContent =
					eaten_replies.toasty[
						Math.floor(Math.random() * eaten_replies.toasty.length)
					].toString();
				eatenItems.push(purpleColor);
				if (apples[i].age >= 6) {
					toastyCount++;
				} else {
					toastyCount = 0;
				}
				if (toastyCount >= 10) {
					toastyCount = 0;
					fireballMeter.value = maxFireballs;
					toasty();
					score += 100;
					let toastyDiv = document.createElement('div');
					toastyDiv.textContent = 'Toasty! 🍞';
					consoleElement.appendChild(toastyDiv);
				}
			} else {
				if (apples[i].age <= 4 || apples[i].age === 0) {
					score++;
					eatenApples.red++;
					apples.forEach((apple) => {
						apple.age++;
					});
					newDiv.textContent =
						eaten_replies.red[
							Math.floor(Math.random() * eaten_replies.red.length)
						].toString();
					eatenItems.push(redColor);
				} else if (apples[i].age === 5) {
					score += 10;
					eatenApples.golden++;
					apples.forEach((apple) => {
						apple.age = 0;
					});
					newDiv.textContent =
						eaten_replies.yellow[
							Math.floor(Math.random() * eaten_replies.yellow.length)
						].toString();
					eatenItems.push(yellowColor);
					fireballMeter.value = maxFireballs;
				} else if (apples[i].age >= 6) {
					score--;
					snake.extraSpeed--;
					eatenApples.black++;
					apples.forEach((apple) => {
						apple.age++;
					});
					newDiv.textContent =
						eaten_replies.black[
							Math.floor(Math.random() * eaten_replies.black.length)
						].toString();
					eatenItems.push(blackColor);
				} else {
					console.warn(apples);
				}
			}

			consoleElement.appendChild(newDiv);
			consoleElement.scrollTop =
				consoleElement.scrollHeight - consoleElement.clientHeight;

			drawEatenItems();

			// canvas is 400x400 which is 25x25 grids
			// apple.x = getRandomInt(0, 25) * grid;
			// apple.y = getRandomInt(0, 25) * grid;
			apples.splice(i, 1);

			apples.push(generateApple());
			scoreElement.textContent = `Score: ${score}`;

			if (turns % 5 === 0) {
				apples.push(generateApple());
				if (apples[i].age <= 5 && !fromFireball) {
					snake.extraSpeed++;
				}
			}
			break;
		}
	}
}

function resetGame(poisoned = false) {
	snake.x = 160;
	snake.y = 160;
	snake.cells = [];
	snake.maxCells = 3;
	snake.dx = grid;
	snake.dy = 0;
	snake.extraSpeed = 0;
	score = 0;
	turns = 0;
	eaten = 0;
	roasted = 0;
	toastyCount = 0;

	apples = [
		{
			x: getRandomInt(0, 25) * grid,
			y: getRandomInt(0, 25) * grid,
			age: 0,
		},
	];

	eatenApples.red = 0;
	eatenApples.black = 0;
	eatenApples.golden = 0;

	consoleElement.replaceChildren();
	let newDiv = document.createElement('div');
	if (poisoned) {
		newDiv.textContent = 'You died from food poisoning. 💀';
	} else {
		newDiv.textContent = 'You died. 💀';
	}
	consoleElement.appendChild(newDiv);

	gameState = GAME_STATES.GAME_OVER;
	gameButton.textContent = 'Restart';

	fireballs = [];
	eatenItems = [];
	gameButton.classList.add('game-over');

	clearInterval(timerInterval); // Stop updating the timer
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

		// check if fireball hit an apple
		// apples.forEach(function (apple, appleIndex) {
		// 	if (
		// 		fireball.x > apple.x &&
		// 		fireball.x < apple.x + grid &&
		// 		fireball.y > apple.y &&
		// 		fireball.y < apple.y + grid
		// 	) {
		// 		// fireball hit apple
		// 		snakeAteApple({ x: apple.x, y: apple.y }); // treat it as if the snake ate the apple
		// 		fireballs.splice(index, 1); // remove fireball
		// 		apples.splice(appleIndex, 1); // remove apple
		// 	}
		// });
		apples.forEach(function (apple, appleIndex) {
			if (
				fireball.x < apple.x + grid &&
				fireball.x + fireball.width > apple.x &&
				fireball.y < apple.y + grid &&
				fireball.y + fireball.height > apple.y
			) {
				// fireball hit apple
				snakeAteApple({ x: apple.x, y: apple.y }, true); // treat it as if the snake ate the apple
				fireballs.splice(index, 1); // remove fireball
				// apples.splice(appleIndex, 1); // remove apple
			}
		});
	});
}

function startingText() {
	consoleElement.replaceChildren();
	let newDiv = document.createElement('div');
	newDiv.textContent = 'You are hungry.';
	consoleElement.appendChild(newDiv);
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

/** game loop*/
function loop() {
	if (gameState === GAME_STATES.PAUSED || gameState === GAME_STATES.GAME_OVER) {
		return;
	}
	requestAnimationFrame(loop);

	let speed = baseFPS - Math.min(snake.extraSpeed, baseFPS - 1);

	if (baseFPS + (baseFPS - speed) <= 0) {
		resetGame(true);
		return;
	}

	// slow game loop to 15 fps instead of 60 (60/15 = 4)
	if (++count < speed) {
		return;
	}

	speedElement.textContent = `Speed: ${(
		baseFPS +
		(baseFPS - speed)
	).toString()}m/s`;

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

	// draw apple
	apples.forEach((apple) => {
		if (apple.age === 5) {
			context.drawImage(hunterYellow, apple.x, apple.y, grid - 1, grid - 1);
		} else if (apple.age > 5) {
			context.drawImage(hunterBlack, apple.x, apple.y, grid - 1, grid - 1);
		} else {
			context.drawImage(hunterRed, apple.x, apple.y, grid - 1, grid - 1);
		}
	});

	updateFireballs();

	// if (apples.length === 1) {
	// 	context.fillStyle = 'red';
	// 	apples.forEach((apple) => {
	// 		context.fillRect(apple.x, apple.y, grid - 1, grid - 1);
	// 	});
	// }

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

		// context.fillRect(cell.x, cell.y, grid - 1, grid - 1);

		// snake ate apple
		snakeAteApple(cell);

		// check collision with all cells after this one (modified bubble sort)
		for (var i = index + 1; i < snake.cells.length; i++) {
			// snake occupies same space as a body part. reset game
			if (cell.x === snake.cells[i].x && cell.y === snake.cells[i].y) {
				resetGame();
			}
		}
	});
}

// listen to keyboard events to move the snake
document.addEventListener('keydown', function (e) {
	// prevent snake from backtracking on itself by checking that it's
	// not already moving on the same axis (pressing left while moving
	// left won't do anything, and pressing right while moving left
	// shouldn't let you collide with your own body)

	// left arrow key
	if (e.key === 'a' && snake.dx === 0) {
		snake.dx = -grid;
		snake.dy = 0;
	}
	// up arrow key
	else if (e.key === 'w' && snake.dy === 0) {
		snake.dy = -grid;
		snake.dx = 0;
	}
	// right arrow key
	else if (e.key === 'd' && snake.dx === 0) {
		snake.dx = grid;
		snake.dy = 0;
	}
	// down arrow key
	else if (e.key === 's' && snake.dy === 0) {
		snake.dy = grid;
		snake.dx = 0;
	}
	// fireballs
	else if (e.key === 'f') {
		if (fireballMeter.value <= 0) {
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
			fireballMeter.value = maxFireballs;
			requestAnimationFrame(loop);
			gameState = GAME_STATES.RUNNING;
			gameButton.textContent = 'Pause';
			gameButton.classList.add('paused');
			gameButton.classList.remove('game-over');
			startTime = Date.now();
			timerInterval = setInterval(updateTimer, 100); // Update timer every 10 milliseconds for hundredths of a second
			break;
		case GAME_STATES.RUNNING:
			// Pause the game
			// requestAnimationFrame(loop(true));
			gameState = GAME_STATES.PAUSED;
			gameButton.textContent = 'Resume';
			gameButton.classList.remove('paused');
			break;
		case GAME_STATES.PAUSED:
			// Resume the game
			requestAnimationFrame(loop);
			gameState = GAME_STATES.RUNNING;
			gameButton.textContent = 'Pause';
			gameButton.classList.add('paused');
			break;
	}
});

function toasty() {
	if (soundEnabled) {
		// Create an AudioContext
		const audioContext = new (window.AudioContext ||
			window.webkitAudioContext)();

		// Create an audio source
		const source = audioContext.createBufferSource();

		// Load the audio file
		fetch('offline/assets/sound/toasty.mp3')
			.then((response) => response.arrayBuffer())
			.then((data) => audioContext.decodeAudioData(data))
			.then((buffer) => {
				source.buffer = buffer;
				source.connect(audioContext.destination);
				source.start();
			})
			.catch((error) => console.error('Error loading audio:', error));
	}

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

soundButton.addEventListener('click', toggleSound);
