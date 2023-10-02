// TODO fireball with space. toasty. 10 secs boost.
const scoreElement = document.getElementById('score');
const speedElement = document.getElementById('speed');
const eatenElement = document.getElementById('eaten');
const consoleElement = document.getElementById('game-console');
const baseFPS = 30;

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
	],
	black: [
		"This hunter's diet was based on bitter bugs.",
		"This doesn't taste good.",
		'Yuck!',
		'I feel nauseous...',
		"This hunter was wearing black dragon armor, my gut won't like it...",
	],
	yellow: [
		'A flash of golden white light was dispersed around the area.',
		'Feeling rejuvenated!',
		'I have hunger for glory.',
		"You ate a hunter's shiny weapon. On the back it says: Z100, do not steal.",
	],
};

let canvas = document.getElementById('game');
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

let eatenApples = {
	red: 0,
	black: 0,
	golden: 0,
};

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

function snakeAteApple(cell) {
	for (let i = 0; i < apples.length; i++) {
		if (cell.x === apples[i].x && cell.y === apples[i].y) {
			snake.maxCells++;
			turns++;

			eatenElement.textContent = `Eaten: ${turns}`;

			if (turns % 5 === 0) {
				apples.push(generateApple());
				if (apples[i].age <= 5) {
					snake.extraSpeed++;
				}
			}

			let newDiv = document.createElement('div');

			if (apples[i].age <= 4) {
				score++;
				scoreElement.textContent = `Score: ${score}`;
				eatenApples.red++;
				apples.forEach((apple) => {
					apple.age++;
				});
				newDiv.textContent =
					eaten_replies.red[
						Math.floor(Math.random() * eaten_replies.red.length)
					].toString();
			} else if (apples[i].age === 5) {
				score += 10;
				scoreElement.textContent = `Score: ${score}`;
				eatenApples.golden++;
				apples.forEach((apple) => {
					apple.age = 0;
				});
				newDiv.textContent =
					eaten_replies.yellow[
						Math.floor(Math.random() * eaten_replies.yellow.length)
					].toString();
			} else if (apples[i].age >= 6) {
				score--;
				scoreElement.textContent = `Score: ${score}`;
				snake.extraSpeed--;
				eatenApples.black++;
				apples.forEach((apple) => {
					apple.age++;
				});
				newDiv.textContent =
					eaten_replies.black[
						Math.floor(Math.random() * eaten_replies.black.length)
					].toString();
			}

			consoleElement.appendChild(newDiv);
			consoleElement.scrollTop =
				consoleElement.scrollHeight - consoleElement.clientHeight;

			// canvas is 400x400 which is 25x25 grids
			// apple.x = getRandomInt(0, 25) * grid;
			// apple.y = getRandomInt(0, 25) * grid;
			apples.splice(i, 1);

			apples.push(generateApple());
			break;
		}
	}
}

/** game loop*/
function loop() {
	requestAnimationFrame(loop);

	let speed = baseFPS - Math.min(snake.extraSpeed, baseFPS - 1);

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
				snake.x = 160;
				snake.y = 160;
				snake.cells = [];
				snake.maxCells = 3;
				snake.dx = grid;
				snake.dy = 0;
				snake.extraSpeed = 0;
				score = 0;
				turns = 0;

				apples = [
					{
						x: 320,
						y: 320,
					},
				];
				apples[0].x = getRandomInt(0, 25) * grid;
				apples[0].y = getRandomInt(0, 25) * grid;

				eatenApples.red = 0;
				eatenApples.black = 0;
				eatenApples.golden = 0;

				scoreElement.textContent = `Score: ${score}`;
				speedElement.textContent = `Speed: ${speed}m/s`;
				eatenElement.textContent = `Eaten: ${turns}`;
				consoleElement.replaceChildren();
				let newDiv = document.createElement('div');
				newDiv.textContent = 'You are hungry.';
				consoleElement.appendChild(newDiv);
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
});

// start the game
requestAnimationFrame(loop);
