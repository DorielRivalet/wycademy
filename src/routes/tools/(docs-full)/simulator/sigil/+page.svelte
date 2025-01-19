<script lang="ts">
	import PageTurn from '$lib/client/components/PageTurn.svelte';
	import SectionHeadingTopLevel from '$lib/client/components/SectionHeadingTopLevel.svelte';
	import TableOfContentsPage from '$lib/client/components/TableOfContentsPage.svelte';
	import { page } from '$app/stores';
	import Dropdown from 'carbon-components-svelte/src/Dropdown/Dropdown.svelte';
	import Button from 'carbon-components-svelte/src/Button/Button.svelte';
	import InlineTooltip from '$lib/client/components/frontier/InlineTooltip.svelte';
	import {
		getItemColor,
		getItemIcon,
	} from '$lib/client/modules/frontier/items';
	import Link from 'carbon-components-svelte/src/Link/Link.svelte';
	import NumberInput from 'carbon-components-svelte/src/NumberInput/NumberInput.svelte';
	import SigilIconWhite from '$lib/client/components/frontier/icon/item/Sigil_Icon_White.svelte';
	import Tooltip from 'carbon-components-svelte/src/Tooltip/Tooltip.svelte';
	import InlineNotification from 'carbon-components-svelte/src/Notification/InlineNotification.svelte';
	import SectionHeading from '$lib/client/components/SectionHeading.svelte';
	import { getProbabilityOdds } from '$lib/client/modules/math';
	import Loading from 'carbon-components-svelte/src/Loading/Loading.svelte';
	import Calculator from 'carbon-icons-svelte/lib/Calculator.svelte';
	import Play from 'carbon-icons-svelte/lib/Play.svelte';

	/*
	 * for zenith sigils, there can only be one of each skill, and there has to be at least one of zenith duration and at least one of zenith cooldown.
	 for weapon emperor, it ALWAYS has the Weapon Up skillm, and only shows up once per sigil.
	 */
	function rollSigil(sigilType: string) {
		const sigilStats = sigilsRollsStats.find((s) => s.name === sigilType);
		if (!sigilStats) {
			console.error(`Invalid sigil type: ${sigilType}`);
			return '';
		}

		const rolls: string[] = [];
		let availableSlots = 3;

		// Handle Weapon [Emperor] and Zenith sigils
		if (sigilType === 'Weapon [Emperor]') {
			const weaponUpSkill = sigilStats.skills.find(
				(skill) => skill.name === 'Weapon Up',
			);
			if (weaponUpSkill) {
				rolls.push(rollSkill(weaponUpSkill));
				availableSlots--;
			}
		} else if (sigilType.includes('Zenith')) {
			// Always include Zenith Duration and Cooldown with correct probability handling
			const durationSkill = weightedRandomSkill(
				sigilStats.skills,
				'Zenith Duration',
			);
			const cooldownSkill = weightedRandomSkill(
				sigilStats.skills,
				'Zenith Cooldown',
			);

			if (durationSkill && cooldownSkill) {
				rolls.push(rollSkill(durationSkill));
				rolls.push(rollSkill(cooldownSkill));
				availableSlots -= 2;
			}
		}

		// Fill remaining slots with other available skills
		while (availableSlots > 0) {
			const availableSkills = sigilStats.skills.filter(
				(skill) =>
					!['Zenith Duration', 'Zenith Cooldown', 'Weapon Up'].includes(
						skill.name,
					),
			);

			if (availableSkills.length === 0) break;

			const skill = weightedRandomSkill(availableSkills);
			if (skill) {
				rolls.push(rollSkill(skill));
				availableSlots--;
			}
		}

		return rolls.join(', ');
	}

	function weightedRandomSkill(
		skills: (typeof sigilsRollsStats)[0]['skills'],
		skillName?: string,
	) {
		const relevantSkills = skillName
			? skills.filter((skill) => skill.name === skillName)
			: skills;

		const totalPercentage = relevantSkills.reduce(
			(sum, skill) => sum + skill.percentage,
			0,
		);
		let roll = Math.random() * totalPercentage;

		for (const skill of relevantSkills) {
			if (roll < skill.percentage) {
				return skill;
			}
			roll -= skill.percentage;
		}

		return null;
	}

	function rollSkill(skill: {
		name: string;
		minimum: number;
		maximum: number;
	}): string {
		const value =
			Math.floor(Math.random() * (skill.maximum - skill.minimum + 1)) +
			skill.minimum;
		return `${value} ${skill.name}`;
	}

	function simulateSigilRolls(sigilType: string, selectedRolls: number) {
		let bestSigil = '';
		let bestScore = 0;

		for (let i = 0; i < selectedRolls; i++) {
			const currentSigil = rollSigil(sigilType);
			if (!currentSigil) continue; // Skip invalid rolls

			const currentScore = calculateSigilScore(currentSigil, priority);

			if (currentScore > bestScore) {
				bestSigil = currentSigil;
				bestScore = currentScore;
			}
		}

		return bestSigil;
	}

	function calculateSigilScore(
		sigil: string,
		priority: 'None' | 'Attack' | 'Element',
	): number {
		if (!sigil) return 0;

		return sigil.split(', ').reduce((total, item) => {
			const match = item.match(/^(\d+)\s+(.*)$/);
			if (match) {
				const value = parseInt(match[1], 10);
				const skillName = match[2];

				let skillScore = sigilSkillsBaseScoreMap.get(skillName);

				switch (priority) {
					case 'Attack':
						skillScore = skillName === 'Elemental Slayer' ? 0 : skillScore;
						break;
					case 'Element':
						skillScore = skillName === 'Attack Slayer' ? 0 : skillScore;
						break;
				}

				if (skillScore) {
					return total + value * skillScore;
				}
			}
			return total;
		}, 0);
	}

	async function calculateSimulationProbability() {
		isCalculatingSimulationProbability = true;

		try {
			// Calculate probability asynchronously
			probability = await calculateProbabilityOfScoreXOrHigher(
				sigil,
				targetScore,
				selectedRolls,
				confidenceLevel,
				marginOfError,
			);
		} finally {
			isCalculatingSimulationProbability = false; // Ensure this is reset even if the calculation errors
		}
	}

	function resetSimulation() {
		simulationState = 'start';
		currentRolls = 0;
		bestSigilStats = '';
		bestSigilRollNumber = 0;
		bestSigilScore = 0;
		probability = 0;

		simulationProbabilitySigilNumber = 0;
		simulationProbabilitySigilTotal = 0;
		sampleSize = 0;
		isCalculatingSimulationProbability = false;
	}

	function onButtonClick() {
		if (simulationState === 'start') {
			simulationState = 'running';
			currentRolls = 0;
			bestSigilStats = '';
			bestSigilRollNumber = 0;
			bestSigilScore = 0;

			const maxScore =
				sigilsRollsStats.find((s) => s.name === sigil)?.maxScore || 0;

			const simulationInterval = setInterval(() => {
				if (currentRolls < selectedRolls) {
					currentRolls++;
					const currentBestSigil = simulateSigilRolls(sigil, 1); // Roll once
					const currentScore = calculateSigilScore(currentBestSigil, priority);
					const bestScore = calculateSigilScore(bestSigilStats, priority);

					if (currentScore > bestScore) {
						bestSigilStats = currentBestSigil;
						bestSigilRollNumber = currentRolls;
						bestSigilScore = currentScore;
					}

					// Exit early if target or max score is reached
					if (currentScore >= maxScore || currentScore >= targetScore) {
						clearInterval(simulationInterval);
						simulationState = 'end';
					}
				} else {
					clearInterval(simulationInterval);
					simulationState = 'end';
				}
			}, 1); // Update every 1ms for a smooth animation
		} else if (simulationState === 'end') {
			resetSimulation();
			onButtonClick();
		}
	}

	function getMaterialFromSigil(sigil: string): Material {
		switch (sigil) {
			default:
				return 'Upper Shiten Key';
			case 'Advanced Shiten [Disufiroa]':
				return 'Upper Shiten Key';
			case 'Weapon [Emperor]':
				return 'Hiden Stamp Weapon';
			case 'Attack [Zenith]':
				return 'Zenith Sigil Stamp';
			case 'Elemental [Zenith]':
				return 'Zenith Sigil Stamp';
		}
	}

	function getIconFromMaterial(materialNeeded: Material) {
		switch (materialNeeded) {
			default:
				return SigilIconWhite;
			case 'Upper Shiten Key':
				return getItemIcon('Question Mark');
			case 'Zenith Sigil Stamp':
				return getItemIcon('Question Mark');
			case 'Hiden Stamp Weapon':
				return getItemIcon('Question Mark');
		}
	}

	function getIconColorFromMaterial(materialNeeded: Material) {
		switch (materialNeeded) {
			default:
				return getItemColor('White');
			case 'Upper Shiten Key':
				return getItemColor('White');
			case 'Zenith Sigil Stamp':
				return getItemColor('Gray');
			case 'Hiden Stamp Weapon':
				return getItemColor('Yellow');
		}
	}

	function calculateSampleSize(
		confidenceLevel: number,
		marginOfError: number,
		estimatedProbability: number = 0.5,
	): number {
		const Z =
			{
				90: 1.645,
				95: 1.96,
				99: 2.576,
			}[confidenceLevel] || 1.96; // Default to 95% confidence level

		const p = estimatedProbability;
		const E = marginOfError;

		return Math.ceil((Z ** 2 * p * (1 - p)) / E ** 2);
	}

	async function calculateProbabilityOfScoreXOrHigher(
		sigilType: string,
		targetScore: number,
		rolls: number,
		confidenceLevel: number = 95,
		marginOfError: number = 0.05,
	) {
		sampleSize = calculateSampleSize(confidenceLevel, marginOfError);
		simulationProbabilitySigilTotal = sampleSize * rolls;

		// console.log(`sampleSize: ${sampleSize}`);
		// console.log(`rolls: ${rolls}`);
		// console.log(
		// 	`simulationProbabilitySigilNumber: ${simulationProbabilitySigilNumber}`,
		// );

		let successCount = 0;

		// Process the samples in chunks
		const processChunk = async (startIndex: number) => {
			const chunkSize = 10; // Adjust this size as needed
			for (
				let i = startIndex;
				i < startIndex + chunkSize && i < sampleSize;
				i++
			) {
				let bestScore = 0;

				for (let j = 0; j < rolls; j++) {
					simulationProbabilitySigilNumber++;
					// console.log(simulationProbabilitySigilNumber);

					const currentSigil = rollSigil(sigilType);
					const currentScore = calculateSigilScore(currentSigil, priority);

					if (currentScore >= targetScore) {
						bestScore = currentScore;
						break;
					}
				}

				if (bestScore >= targetScore) {
					successCount++;
				}
			}

			// Update the UI after processing each chunk
			await new Promise((resolve) => setTimeout(resolve, 0));

			// Process the next chunk if there are more samples
			if (startIndex + chunkSize < sampleSize) {
				await processChunk(startIndex + chunkSize);
			}
		};

		await processChunk(0);

		// console.log(`sampleSize: ${sampleSize}`);
		// console.log(`rolls: ${rolls}`);
		// console.log(
		// 	`simulationProbabilitySigilNumber: ${simulationProbabilitySigilNumber}`,
		// );

		isCalculatingSimulationProbability = false;
		simulationProbabilitySigilNumber = 0;
		simulationProbabilitySigilTotal = 0;

		return successCount / sampleSize;
	}

	/**https://www.mathsisfun.com/data/probability-events-independent.html*/
	function getPerfectSigilCombinationProbability(
		shitenSigilRolls: number,
		zenithSigilRolls: number,
		unlimitedSigilRolls: number,
	) {
		// Shiten Sigils (Slot 1)
		// { name: 'Attack Slayer', percentage: 5, minimum: 13, maximum: 15 },

		const shitenSkillChance = 0.05; // 5%
		const shitenExactValueChance = 1 / 3; // One value out of 13-15
		const shitenProbabilityPerRoll = shitenSkillChance * shitenExactValueChance;
		const shitenProbabilitySingle = Math.pow(shitenProbabilityPerRoll, 3); // 3 skills to roll 1 sigil.
		const shitenProbability =
			1 - Math.pow(1 - shitenProbabilitySingle, shitenSigilRolls); // Complement Rule for At Least One Success

		// Unlimited Sigils (Slot 2)
		/*
				{ name: 'Weapon Up', percentage: 100, minimum: 10, maximum: 15 },
				{ name: 'Attack Slayer', percentage: 3, minimum: 13, maximum: 15 },
		*/

		const unlimitedAttackSkillChance = 0.03; // 3%
		const unlimitedAttackExactValueChance = 1 / 3; // One value out of 13-15
		const unlimitedAttackProbabilityPerRoll =
			unlimitedAttackSkillChance * unlimitedAttackExactValueChance;
		const unlimitedAttackProbabilitySingle = Math.pow(
			unlimitedAttackProbabilityPerRoll,
			2,
		); // 2 skills to roll

		const unlimitedWeaponUpSkillChance = 1; // 100%
		const unlimitedWeaponUpExactValueChance = 1 / 6; // 10 to 15 inclusive
		const unlimitedWeaponUpProbabilitySingle =
			unlimitedWeaponUpSkillChance * unlimitedWeaponUpExactValueChance; // only 1 roll so no need for power

		const unlimitedProbabilitySingle =
			unlimitedAttackProbabilitySingle * unlimitedWeaponUpProbabilitySingle;
		const unlimitedProbability =
			1 - Math.pow(1 - unlimitedProbabilitySingle, unlimitedSigilRolls);

		// Zenith Sigils (Slot 3)
		/*
				{ name: 'Zenith Duration', percentage: 3, minimum: 10, maximum: 12 },
				{ name: 'Zenith Cooldown', percentage: 4, minimum: 14, maximum: 17 },
				{ name: 'Zenith Attack', percentage: 3, minimum: 12, maximum: 15 },
 		*/

		const zenithAttackSkillChance = 0.03; // 3%
		const zenithAttackExactValueChance = 1 / 4; // One value out of 12-15
		const zenithAttackProbability =
			zenithAttackSkillChance * zenithAttackExactValueChance; // Only 1 roll needed

		const zenithDurationSkillChance = 0.03; // 3%
		const zenithDurationExactValueChance = 1 / 3;
		const zenithDurationProbability =
			zenithDurationSkillChance * zenithDurationExactValueChance; // Only 1 roll needed

		const zenithCooldownSkillChance = 0.04;
		const zenithCooldownExactValueChance = 1 / 4;
		const zenithCooldownProbability =
			zenithCooldownSkillChance * zenithCooldownExactValueChance; // Only 1 roll needed

		const zenithProbabilitySingle =
			zenithAttackProbability *
			zenithDurationProbability *
			zenithCooldownProbability;

		const zenithProbability =
			1 - Math.pow(1 - zenithProbabilitySingle, zenithSigilRolls);

		// TODO use shitenSigilRolls, zenithSigilRolls and unlimitedSigilRolls to calculate the chance to get a perfect shiten/zenith/unlimited sigil with x rolls, then calculate the total probability taking that into account,

		// Total Probability
		const totalProbability =
			shitenProbability * unlimitedProbability * zenithProbability;

		return {
			totalProbability,
			shitenProbability,
			unlimitedProbability,
			zenithProbability,
		};
	}

	type Material =
		| 'Upper Shiten Key'
		| 'Zenith Sigil Stamp'
		| 'Hiden Stamp Weapon';

	const sigilSkillsBaseScore = [
		{ name: 'Attack Slayer', score: 1 },
		{ name: 'Elemental Slayer', score: 1 },
		{ name: 'Weapon Up', score: 2 },
		{ name: 'Zenith Duration', score: 1 },
		{ name: 'Zenith Cooldown', score: 1 },
		{ name: 'Zenith Attack', score: 2 },
		{ name: 'Zenith Elemental', score: 2 },
	];

	// Pre-compute skill scores in a map for faster lookup
	const sigilSkillsBaseScoreMap = new Map(
		sigilSkillsBaseScore.map((s) => [s.name, s.score]),
	);

	const minRolls = 1;
	const maxRolls = 10_000;

	let sigil = $state('Advanced Shiten [Disufiroa]');
	let selectedRolls = $state(maxRolls);
	let currentRolls = $state(0);
	let simulationState: 'start' | 'running' | 'end' = $state('start');
	// example: 15 Attack, 15 Element, 15 Attack.
	let bestSigilStats = $state('');
	let bestSigilRollNumber = $state(0);
	let bestSigilScore = $state(0);
	/**TODO recalculate these and other chances. it might be wrong.*/
	let probability = $state(0);
	let priority: 'Attack' | 'Element' | 'None' = $state('Attack');
	let targetScore = $state(45);

	let perfectSigilCombinationZenithSigils = $state(10_000);
	let perfectSigilCombinationShitenSigils = $state(10_000);
	let perfectSigilCombinationUnlimitedSigils = $state(10_000);

	let perfectSigilCombinationProbability = $derived(
		getPerfectSigilCombinationProbability(
			perfectSigilCombinationShitenSigils,
			perfectSigilCombinationZenithSigils,
			perfectSigilCombinationUnlimitedSigils,
		),
	);

	let perfectSigilCombinationOdds = $derived(
		getProbabilityOdds(perfectSigilCombinationProbability.totalProbability),
	);

	let isCalculatingSimulationProbability = $state(false);
	let simulationProbabilitySigilNumber = $state(0);
	let simulationProbabilitySigilTotal = $state(0);
	let sampleSize = $state(0);

	/**
	 * weapon emperor always has 3 skills and only one skill is weapon up.
	 *
	 * shiten can have duplicates of attack and element. also 3 skills max.
	 *
	 * the zeniths have 1 of zenith duration and 1 of zenith cooldown, with the attack/element also being only 1, making it also 3 skills max.
	 *
	 * So its 3 skill rolls per sigil roll. if the percentage of a skill is 100, it means that there is always that skill present once and only once, for each sigil of that type.
	 */
	const sigilsRollsStats = [
		{
			name: 'Advanced Shiten [Disufiroa]',
			maxScore: 45,
			skills: [
				{ name: 'Attack Slayer', percentage: 37, minimum: 3, maximum: 9 },
				{ name: 'Attack Slayer', percentage: 8, minimum: 8, maximum: 12 },
				{ name: 'Attack Slayer', percentage: 5, minimum: 13, maximum: 15 },
				{ name: 'Elemental Slayer', percentage: 42, minimum: 3, maximum: 9 },
				{ name: 'Elemental Slayer', percentage: 5, minimum: 8, maximum: 12 },
				{ name: 'Elemental Slayer', percentage: 3, minimum: 13, maximum: 15 },
			],
		},
		// TODO Weapon [Extreme] has different percentages for element depending on weapon.
		{
			name: 'Weapon [Emperor]',
			maxScore: 60,
			skills: [
				{ name: 'Weapon Up', percentage: 100, minimum: 10, maximum: 15 },
				{ name: 'Attack Slayer', percentage: 75, minimum: 3, maximum: 7 },
				{ name: 'Attack Slayer', percentage: 22, minimum: 8, maximum: 12 },
				{ name: 'Attack Slayer', percentage: 3, minimum: 13, maximum: 15 },
			],
		},
		{
			name: 'Attack [Zenith]',
			maxScore: 59,
			skills: [
				{ name: 'Zenith Duration', percentage: 85, minimum: 1, maximum: 5 },
				{ name: 'Zenith Duration', percentage: 12, minimum: 6, maximum: 9 },
				{ name: 'Zenith Duration', percentage: 3, minimum: 10, maximum: 12 },
				{ name: 'Zenith Cooldown', percentage: 96, minimum: 9, maximum: 13 },
				{ name: 'Zenith Cooldown', percentage: 4, minimum: 14, maximum: 17 },
				{ name: 'Zenith Attack', percentage: 76, minimum: 1, maximum: 7 },
				{ name: 'Zenith Attack', percentage: 21, minimum: 8, maximum: 11 },
				{ name: 'Zenith Attack', percentage: 3, minimum: 12, maximum: 15 },
			],
		},
		{
			name: 'Elemental [Zenith]',
			maxScore: 59,
			skills: [
				{ name: 'Zenith Duration', percentage: 85, minimum: 1, maximum: 5 },
				{ name: 'Zenith Duration', percentage: 12, minimum: 6, maximum: 9 },
				{ name: 'Zenith Duration', percentage: 3, minimum: 10, maximum: 12 },
				{ name: 'Zenith Cooldown', percentage: 96, minimum: 9, maximum: 13 },
				{ name: 'Zenith Cooldown', percentage: 4, minimum: 14, maximum: 17 },
				{ name: 'Zenith Elemental', percentage: 80, minimum: 1, maximum: 7 },
				{ name: 'Zenith Elemental', percentage: 18, minimum: 8, maximum: 11 },
				{ name: 'Zenith Elemental', percentage: 2, minimum: 12, maximum: 15 },
			],
		},
	];

	const confidenceLevel = 99;
	const marginOfError = 0.05;

	let sigilMaxScore = $derived(
		sigilsRollsStats.find((e) => e.name === sigil)?.maxScore || 0,
	);
	let materialNeeded = $derived(getMaterialFromSigil(sigil));
	let materialNeededIcon = $derived(getIconFromMaterial(materialNeeded));
	let materialNeededIconColor = $derived(
		getIconColorFromMaterial(materialNeeded),
	);
</script>

<TableOfContentsPage displayTOC={false}>
	<div>
		<SectionHeadingTopLevel title={'Sigils Rolls Simulator'} />
		<div>
			<div class="spaced-paragraph">
				If you are looking for an explanation on sigils, see our <Link
					inline
					href="/hunter-notes/weapons/sigils">Hunter's Notes page.</Link
				> This page is simulating sigils rolls, showing how many times on average
				you need to get certain stats and how many materials are needed.
			</div>
			<div class="spaced-paragraph">
				If you are looking to calculate the <strong>damage</strong> of your
				sigils, see our <Link inline href="/tools/calculator/sigil"
					>Sigils Calculator.</Link
				>
			</div>

			<div class="container-buttons">
				<Dropdown
					bind:selectedId={sigil}
					disabled={simulationState === 'running'}
					titleText={`Sigil`}
					items={[
						{
							id: 'Advanced Shiten [Disufiroa]',
							text: 'Advanced Shiten [Disufiroa]',
						},
						{ id: 'Weapon [Emperor]', text: 'Weapon [Emperor]' },
						{ id: 'Attack [Zenith]', text: 'Attack [Zenith]' },
						{ id: 'Elemental [Zenith]', text: 'Elemental [Zenith]' },
					]}
				/>
				<div class="number-input">
					<NumberInput
						size="sm"
						disabled={simulationState === 'running'}
						step={100}
						min={minRolls}
						max={maxRolls}
						bind:value={selectedRolls}
						invalidText={`Invalid value: must be between ${minRolls} and ${maxRolls}`}
						label={`Rolls`}
					/>
				</div>
				<Dropdown
					bind:selectedId={priority}
					disabled={simulationState === 'running'}
					titleText={`Priority`}
					items={[
						{ id: 'None', text: 'None' },
						{
							id: 'Attack',
							text: 'Attack',
						},
						{ id: 'Element', text: 'Element' },
					]}
				/>
				<div class="number-input">
					<NumberInput
						size="sm"
						disabled={simulationState === 'running'}
						step={1}
						min={1}
						max={sigilMaxScore}
						bind:value={targetScore}
						invalidText={`Invalid value: must be between 1 and ${sigilMaxScore}`}
						label={`Target Score`}
					/>
				</div>
				<Button
					icon={Play}
					disabled={simulationState === 'running' ||
						isCalculatingSimulationProbability}
					on:click={onButtonClick}
					>{simulationState === 'start' || simulationState === 'running'
						? 'Start'
						: 'Restart'}</Button
				>
			</div>

			<div class="probability-container">
				<Button
					icon={Calculator}
					disabled={isCalculatingSimulationProbability ||
						simulationState === 'running'}
					on:click={() => calculateSimulationProbability()}
					>{'Calculate Simulation Average Probability'}</Button
				>
				{#if isCalculatingSimulationProbability}
					<div class="loading-container">
						<Loading withOverlay={false} />
						<p>Calculating simulation probabilities...</p>
						<p>
							Rolls: {simulationProbabilitySigilNumber}/{simulationProbabilitySigilTotal}
						</p>
						<p>Sample size: {sampleSize}</p>
					</div>
				{/if}
				<div class="tooltip-paragraph">
					<Tooltip align="start">
						<p>
							Probability of getting a {sigil} sigil with {selectedRolls} available
							rolls (Priority {priority}) with score {targetScore} or higher with
							{confidenceLevel}% confidence and {marginOfError}% margin of
							error: {probability * 100}%
						</p>
					</Tooltip>Simulation Average Probability: {(
						Math.round(probability * 100 * 100) / 100
					).toFixed(2)}%
				</div>
			</div>

			{#if simulationState === 'running' || simulationState === 'end'}
				<div class="results">
					<div class="sigil">
						<InlineTooltip
							icon={SigilIconWhite}
							iconType="component"
							text={`${currentRolls} sigil${currentRolls > 1 || currentRolls === 0 ? 's' : ''}`}
							tooltip="Sigil"
						/>
					</div>
					<div class="paragraph-long-02">
						Materials needed: {#key sigil}<InlineTooltip
								icon={materialNeededIcon}
								iconType="component"
								text={`${currentRolls} ${materialNeeded}`}
								tooltip="Item"
								iconColor={materialNeededIconColor}
							/>{/key}
					</div>
					<p>
						Best sigil found: {bestSigilStats} (roll #{bestSigilRollNumber},
						score {bestSigilScore}, max score {sigilMaxScore})
					</p>
				</div>
			{/if}
			<section>
				<SectionHeading
					level={2}
					title="Perfect Sigil Combination Probability"
				/>
				<div>
					<InlineNotification
						lowContrast
						hideCloseButton
						kind="info"
						title="Sigil Probabilities:"
						subtitle="This uses the probabilities for getting Attack."
					/>
					<div class="number-inputs">
						<div class="number-input">
							<NumberInput
								size="sm"
								step={100}
								min={minRolls}
								max={maxRolls}
								bind:value={perfectSigilCombinationShitenSigils}
								invalidText={`Invalid value: must be between ${minRolls} and ${maxRolls}`}
								label={`Shiten Sigil Rolls`}
							/>
						</div>
						<div class="number-input">
							<NumberInput
								size="sm"
								step={100}
								min={minRolls}
								max={maxRolls}
								bind:value={perfectSigilCombinationZenithSigils}
								invalidText={`Invalid value: must be between ${minRolls} and ${maxRolls}`}
								label={`Zenith Sigil Rolls`}
							/>
						</div>
						<div class="number-input">
							<NumberInput
								size="sm"
								step={100}
								min={minRolls}
								max={maxRolls}
								bind:value={perfectSigilCombinationUnlimitedSigils}
								invalidText={`Invalid value: must be between ${minRolls} and ${maxRolls}`}
								label={`Unlimited Sigil Rolls`}
							/>
						</div>
					</div>
					<p>
						<strong>Probability of perfect Shiten sigil:</strong>
						{perfectSigilCombinationProbability.shitenProbability * 100}%
					</p>
					<p>
						<strong>Probability of perfect Zenith sigil:</strong>
						{perfectSigilCombinationProbability.zenithProbability * 100}%
					</p>
					<p>
						<strong>Probability of perfect Unlimited sigil:</strong>
						{perfectSigilCombinationProbability.unlimitedProbability * 100}%
					</p>
					<p>
						<strong>Probability of perfect combination (all 3):</strong>
						{perfectSigilCombinationProbability.totalProbability * 100}% (1:{Math.ceil(
							perfectSigilCombinationOdds,
						)}
						odds) with
						{perfectSigilCombinationShitenSigils +
							perfectSigilCombinationZenithSigils +
							perfectSigilCombinationUnlimitedSigils} sigil rolls in total.
					</p>
				</div>
			</section>

			<div class="page-turn">
				<PageTurn pageUrlPathName={$page.url.pathname} />
			</div>
		</div>
	</div></TableOfContentsPage
>

<style lang="scss">
	.page-turn {
		margin-top: 4rem;
	}

	.container-buttons {
		display: flex;
		flex-direction: row;
		gap: 1rem;
		align-items: center;
		flex-wrap: wrap;
		margin-bottom: 1rem;
		margin-top: 2rem;
	}

	.sigil {
		margin-top: 2rem;
		margin-bottom: 2rem;
	}

	.tooltip-paragraph {
		display: flex;
		gap: 0.25rem;
	}

	.number-inputs {
		display: flex;
		gap: 1rem;
		margin: 1rem 0px;
	}

	.loading-container {
		display: flex;
		flex-direction: column;
		gap: 1rem;
		min-width: 192px;
		min-height: 192px;
	}

	.probability-container {
		display: flex;
		gap: 1rem;
		flex-direction: column;
	}
</style>
