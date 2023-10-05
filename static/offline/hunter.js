export class Hunter {
	constructor(
		color,
		minAge,
		maxAge,
		burned,
		score,
		snakeGrowth,
		snakeSpeed,
		turnDelay,
		sound,
		image,
		messages,
		consumable,
		flammable,
		conductive,
	) {
		this.color = color;
		this.minAge = minAge;
		this.maxAge = maxAge;
		this.burned = burned;
		this.score = score;
		this.snakeGrowth = snakeGrowth;
		this.snakeSpeed = snakeSpeed;
		this.turnDelay = turnDelay;
		this.sound = sound;
		this.image = image;
		this.messages = messages;
		this.consumable = consumable;
		this.flammable = flammable;
		this.conductive = conductive;
	}

	biteEffect() {
		// Implement the biteEffect logic here
	}

	fireballEffect() {
		// Implement the fireballEffect logic here
	}

	paralysisEffect() {
		// Implement the paralysisEffect logic here
	}
}
