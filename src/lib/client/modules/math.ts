function validateProbability(successProbability: number) {
	if (successProbability < 0 || successProbability > 1) {
		console.error('Probability must be between 0 and 1.');
		return false;
	} else {
		return true;
	}
}

function validateTries(tries: number) {
	if (tries <= 0) {
		console.error('Tries must be greater than 0.');
		return false;
	} else {
		return true;
	}
}

export function getRatioForValue(value: number, min: number, max: number) {
	if (value <= min) return 0;
	if (value >= max) return 1;
	return value / max;
}

export function getProbabilityOfSuccess(
	numberOfWays: number,
	totalWays: number,
) {
	if (totalWays <= 0) {
		console.error('Total ways must be greater than 0.');
		return 0;
	}
	if (numberOfWays > totalWays) {
		console.error('Total ways must be greater than number of ways.');
		return 0;
	}
	if (numberOfWays < 0) {
		console.error('Number of ways must not be negative.');
		return 0;
	}

	return numberOfWays / totalWays;
}

export function getProbabilityOfFailing(successProbability: number) {
	if (!validateProbability(successProbability)) {
		return 0;
	}

	return 1 - successProbability;
}

export function getProbabilityOfSuccessInAllTries(
	successProbability: number,
	tries: number,
) {
	if (!validateProbability(successProbability) || !validateTries(tries)) {
		return 0;
	}

	return Math.pow(successProbability, tries);
}

export function getProbabilityOfFailingEverySingleTry(
	successProbability: number,
	tries: number,
) {
	if (!validateProbability(successProbability) || !validateTries(tries)) {
		return 0;
	}

	return Math.pow(getProbabilityOfFailing(successProbability), tries);
}

export function getProbabilityOfAtLeastOneSuccessInTries(
	successProbability: number,
	tries: number,
) {
	if (!validateProbability(successProbability) || !validateTries(tries)) {
		return 0;
	}

	return 1 - getProbabilityOfFailingEverySingleTry(successProbability, tries);
}

export function getProbabilityOdds(successProbability: number) {
	if (!validateProbability(successProbability) || successProbability <= 0) {
		return 0;
	}

	const odds = 1 / successProbability;
	return odds; // 1:odds
}

export function getProbabilitySourceForTargetProbabilityWithTries(
	/** ProbabilityOfAtLeastOneSuccessInTries */
	targetProbability: number,
	tries: number,
) {
	// Validate inputs
	if (!validateProbability(targetProbability) || !validateTries(tries)) {
		return 0;
	}

	// Solve for successProbability using the formula:
	// P(at least one success) = 1 - (1 - P(success))^tries
	// Rearranging gives: P(success) = 1 - (1 - targetProbability)^(1/tries)
	const successProbability = 1 - Math.pow(1 - targetProbability, 1 / tries);

	return successProbability;
}
