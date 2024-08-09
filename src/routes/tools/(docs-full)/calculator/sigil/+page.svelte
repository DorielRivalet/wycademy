<script lang="ts">
	import PageTurn from '$lib/client/components/PageTurn.svelte';
	import SectionHeadingTopLevel from '$lib/client/components/SectionHeadingTopLevel.svelte';
	import HunterNotesPage from '$lib/client/components/HunterNotesPage.svelte';
	import { page } from '$app/stores';
	import {
		getAOESigilElement,
		getAOESigilTrueRaw,
		getZenithSigilElementMultiplier,
		getZenithSigilProperty,
		getZenithSigilTrueRaw,
		type FrontierSigilRecipeType,
	} from '$lib/client/modules/frontier/sigils';
	import type { FrontierSigil, FrontierWeaponName } from 'ezlion';
	import NumberInput from 'carbon-components-svelte/src/NumberInput/NumberInput.svelte';
	import Dropdown from 'carbon-components-svelte/src/Dropdown/Dropdown.svelte';
	import SigilIconWhite from '$lib/client/components/frontier/icon/item/Sigil_Icon_White.svelte';
	import InlineTooltip from '$lib/client/components/frontier/InlineTooltip.svelte';
	import { onMount, type ComponentType } from 'svelte';
	import '@carbon/charts-svelte/styles.css';
	import {
		LineChart,
		ScaleTypes,
		type LineChartOptions,
	} from '@carbon/charts-svelte';
	import { theme } from '$lib/client/stores/theme';
	import { display } from 'mathlifier';
	import Loading from 'carbon-components-svelte/src/Loading/Loading.svelte';
	import TrueRawConverter from '$lib/client/components/frontier/TrueRawConverter.svelte';
	import { getLengthAttackValue } from '$lib/client/modules/frontier/damage-calculator';
	import SectionHeading from '$lib/client/components/SectionHeading.svelte';

	type SigilSlot = {
		type: FrontierSigilRecipeType;
		values: { skill: FrontierSigil; value: number }[];
	};

	function isInvalidSigilType(
		sigils: [slot1: SigilSlot, slot2: SigilSlot, slot3: SigilSlot],
	) {
		let zenithSigils = sigils.filter((e) => e.type === 'Zenith').length;
		let zenithAOESigils = sigils.filter((e) => e.type === 'Zenith AOE').length;
		let invalid =
			zenithSigils > 1 ||
			zenithAOESigils > 1 ||
			(zenithSigils >= 1 && zenithAOESigils >= 1);
		return invalid;
	}

	// eleFormula = Math.floor(
	// 	((weaponElement +
	// 		sigilSkill1Element * 10 +
	// 		sigilSkill2Element * 10 +
	// 		sigilSkill3Element * 10 +
	// 		UnlimitedSigilElement * 10 +
	// 		outputAOETotalElement) *
	// 		outputZenithElementMultiplier) /
	// 		10,
	// );

	const formulaSigilElement = display(
		`\\text{Sigil Total True Element} = \\lfloor \\frac{(\\text{weaponElement} + \\text{sigilElement} \\times 10 + \\text{UnlimitedSigilElement} \\times 10 + \\text{outputAOETotalElement}) \\times \\text{outputZenithElementMultiplier}}{10} \\rfloor`,
	);

	// attackFormula =
	// 	outputLengthUpTrueRaw +
	// 	(sigilSkill1Attack +
	// 	sigilSkill2Attack +
	// 	sigilSkill3Attack) +
	// 	UnlimitedSigilAttack +
	// 	outputZenithTotalAttack +
	// 	outputAOETotalAttack;

	const formulaSigilTrueRaw = display(
		`\\text{Sigil Total True Raw} = \\text{outputLengthUpTrueRaw} + \\text{sigilAttack} + \\text{UnlimitedSigilAttack} + \\text{outputZenithTotalAttack} + \\text{outputAOETotalAttack}`,
	);

	$: totalSigilTrueRaw =
		sigilChartData.totalTrueRaw.lengthUpTrueRaw +
		sigilChartData.totalTrueRaw.sigilAttack +
		sigilChartData.totalTrueRaw.unlimitedSigilAttack +
		sigilChartData.totalTrueRaw.zenithAttack +
		sigilChartData.totalTrueRaw.zenithAOEAttack;

	$: formulaValuesSigilTrueRaw = `${totalSigilTrueRaw} = ${sigilChartData.totalTrueRaw.lengthUpTrueRaw} + ${sigilChartData.totalTrueRaw.sigilAttack} + ${sigilChartData.totalTrueRaw.unlimitedSigilAttack} + ${sigilChartData.totalTrueRaw.zenithAttack} + ${sigilChartData.totalTrueRaw.zenithAOEAttack}`;

	$: totalSigilElement = Math.floor(
		((sigilChartData.totalElement.weaponElement +
			sigilChartData.totalElement.sigilElement * 10 +
			sigilChartData.totalElement.unlimitedSigilElement * 10 +
			sigilChartData.totalElement.zenithAOEElement) *
			sigilChartData.totalElement.zenithElementMultiplier) /
			10,
	);

	$: formulaValuesSigilElement = `${totalSigilElement} = \\lfloor \\frac{(${sigilChartData.totalElement.weaponElement} + ${sigilChartData.totalElement.sigilElement} \\times 10 + ${sigilChartData.totalElement.unlimitedSigilElement} \\times 10 + ${sigilChartData.totalElement.zenithAOEElement}) \\times ${sigilChartData.totalElement.zenithElementMultiplier}}{${10}} \\rfloor`;

	function isLengthUpActive(
		sigils: [slot1: SigilSlot, slot2: SigilSlot, slot3: SigilSlot],
	) {
		const found = sigils.find((e) =>
			e.values.find((v) => v.skill === 'Length Up' && v.value === 1),
		);

		return found ? 'Active' : 'None';
	}

	function getMaxValue(
		sigilSkill: FrontierSigil,
		sigilType: FrontierSigilRecipeType,
	) {
		switch (sigilSkill) {
			default:
				return 0;
			case '':
			case 'None':
				return 0;
			case 'Length Up':
				return 1;
			case 'Attack Slayer':
			case 'Elemental Slayer':
				if (sigilType === 'Unlimited [Emperor]') {
					return maxUnlimitedEmperorValue;
				} else if (sigilType === 'Unlimited [Extreme]') {
					return maxUnlimitedExtremeValue;
				} else return maxValue;
			case 'Status Attack Slayer':
			case 'Affinity Slayer':
			case 'Defense Slayer':
			case 'Stun Value Slayer':
			case 'Flying Wyvern Slayer':
			case 'Bird Wyvern Slayer':
			case 'Carapaceon Slayer':
			case 'Piscine Slayer':
			case 'Fanged Beast Slayer':
			case 'Brute Wyvern Slayer':
			case 'Leviathan Slayer':
			case 'Elder Dragon Slayer':
			case 'Small Monster Slayer':
			case 'Elemental Coating/Crystal':
			case 'Hot':
			case 'Cold':
			case 'Morning':
			case 'Night':
			case 'Breeding Season':
			case 'Warm Season':
			case 'Cold Season':
			case 'Monday':
			case 'Tuesday':
			case 'Wednesday':
			case 'Thursday':
			case 'Friday':
			case 'Saturday':
			case 'Sunday':
			case 'Manager':
			case 'Balloon':
			case 'Dowsing':
			case 'Hunter Soul':
			case 'Soul Collection':
			case "Gook's Friend":
			case "Halk's Friend":
			case 'Money Expert':
			case 'Exp Expert':
			case 'Omnivore':
			case 'Carving Division':
			case 'Sleeping':
			case 'Decoy':
			case 'Spoilt':
			case 'Unity':
			case 'Aid':
			case 'Rapid Fire Add':
			case 'Ultra Rapid Fire Add':
			case 'Disable Rapid':
			case 'Heat Cannon Add':
			case 'Ballista Saver':
			case 'Raw Bow Boost':
			case 'Raw SnS Boost':
			case 'Sonic Bomb Range':
			case 'T.Boost(SnS)':
			case 'T.Boost(DS)':
			case 'T.Boost(GS)':
			case 'T.Boost(LS)':
			case 'T.Boost(Lance)':
			case 'T.Boost(GL)':
			case 'T.Boost(Hammer)':
			case 'T.Boost(HH)':
			case 'T.Change(SnS)':
			case 'T.Change(DS)':
			case 'T.Change(GS)':
			case 'T.Change(LS)':
			case 'T.Change(Lance)':
			case 'T.Change(GL)':
			case 'T.Change(Ham)':
			case 'T.Change(HH)':
			case 'T.Change(LBG)':
			case 'T.Change(HBG)':
			case 'T.Change(Bow)':
			case 'Shelling Change':
			case 'Note Change 1':
			case 'Note Change 2':
			case 'Note Change 3':
			case 'Arc Shot Change':
			case 'Rarity Change':
			case 'Shelling Boost':
			case 'Tech Boost Bow':
			case 'Cat Breeder':
			case 'Shot Change':
			case 'Draw Strength(GS)':
			case 'Draw Strength(Hammer)':
			case 'Draw Strength(Lance)':
			case 'Draw Strength(SnS)':
			case 'Draw Strength(DS)':
			case 'Draw Strength(LS)':
			case 'Draw Strength(HH)':
			case 'Draw Strength(GL)':
			case 'Draw Strength(Tonfa)':
			case 'Tech Boost Tonfa':
			case 'Fanged Wyvern Slayer':
			case 'Unsheathed Movement Speed':
			case 'Tech Boost Swaxe':
			case 'Tech Boost HBG':
			case 'Great Sword Up':
			case 'Heavy Bowgun Up':
			case 'Hammer Up':
			case 'Lance Up':
			case 'Sword and Shield Up':
			case 'Light Bowgun Up':
			case 'Dual Swords Up':
			case 'Long Sword Up':
			case 'Hunting Horn Up':
			case 'Gunlance Up':
			case 'Bow Up':
			case 'Tonfa Up':
			case 'Swaxe Up':
			case 'Magspike Up':
			case 'Zenith Fire Res':
			case 'Zenith Water Res':
			case 'Zenith Ice Res':
			case 'Zenith Thunder Res':
			case 'Zenith Dragon Res':
			case 'Zenith Healing':
			case 'Zenith Heroics':
			case 'Zenith Attack':
			case 'Zenith Elemental':
			case 'Zenith Movement Speed':
			case 'All Zenith AOEs':
			case 'Weapon Up':
			case '[Ranged] Attack':
			case '[Ranged] Elemental':
				return maxValue;
			case 'Zenith Cooldown':
				return maxCooldown;
			case 'Zenith Duration':
				return maxDuration;
		}
	}

	function getMinValue(
		sigilSkill: FrontierSigil,
		sigilType: FrontierSigilRecipeType,
	) {
		switch (sigilSkill) {
			default:
				return 0;
			case '':
			case 'None':
			case 'Length Up':
				return 0;
			case 'Status Attack Slayer':
			case 'Affinity Slayer':
			case 'Defense Slayer':
			case 'Stun Value Slayer':
			case 'Flying Wyvern Slayer':
			case 'Bird Wyvern Slayer':
			case 'Carapaceon Slayer':
			case 'Piscine Slayer':
			case 'Fanged Beast Slayer':
			case 'Brute Wyvern Slayer':
			case 'Leviathan Slayer':
			case 'Elder Dragon Slayer':
			case 'Small Monster Slayer':
			case 'Elemental Coating/Crystal':
			case 'Hot':
			case 'Cold':
			case 'Morning':
			case 'Night':
			case 'Breeding Season':
			case 'Warm Season':
			case 'Cold Season':
			case 'Monday':
			case 'Tuesday':
			case 'Wednesday':
			case 'Thursday':
			case 'Friday':
			case 'Saturday':
			case 'Sunday':
			case 'Manager':
			case 'Balloon':
			case 'Dowsing':
			case 'Hunter Soul':
			case 'Soul Collection':
			case "Gook's Friend":
			case "Halk's Friend":
			case 'Money Expert':
			case 'Exp Expert':
			case 'Omnivore':
			case 'Carving Division':
			case 'Sleeping':
			case 'Decoy':
			case 'Spoilt':
			case 'Unity':
			case 'Aid':
			case 'Rapid Fire Add':
			case 'Ultra Rapid Fire Add':
			case 'Disable Rapid':
			case 'Heat Cannon Add':
			case 'Ballista Saver':
			case 'Raw Bow Boost':
			case 'Raw SnS Boost':
			case 'Sonic Bomb Range':
			case 'T.Boost(SnS)':
			case 'T.Boost(DS)':
			case 'T.Boost(GS)':
			case 'T.Boost(LS)':
			case 'T.Boost(Lance)':
			case 'T.Boost(GL)':
			case 'T.Boost(Hammer)':
			case 'T.Boost(HH)':
			case 'T.Change(SnS)':
			case 'T.Change(DS)':
			case 'T.Change(GS)':
			case 'T.Change(LS)':
			case 'T.Change(Lance)':
			case 'T.Change(GL)':
			case 'T.Change(Ham)':
			case 'T.Change(HH)':
			case 'T.Change(LBG)':
			case 'T.Change(HBG)':
			case 'T.Change(Bow)':
			case 'Shelling Change':
			case 'Note Change 1':
			case 'Note Change 2':
			case 'Note Change 3':
			case 'Arc Shot Change':
			case 'Rarity Change':
			case 'Shelling Boost':
			case 'Tech Boost Bow':
			case 'Cat Breeder':
			case 'Shot Change':
			case 'Draw Strength(GS)':
			case 'Draw Strength(Hammer)':
			case 'Draw Strength(Lance)':
			case 'Draw Strength(SnS)':
			case 'Draw Strength(DS)':
			case 'Draw Strength(LS)':
			case 'Draw Strength(HH)':
			case 'Draw Strength(GL)':
			case 'Draw Strength(Tonfa)':
			case 'Tech Boost Tonfa':
			case 'Fanged Wyvern Slayer':
			case 'Unsheathed Movement Speed':
			case 'Tech Boost Swaxe':
			case 'Tech Boost HBG':
			case 'Great Sword Up':
			case 'Heavy Bowgun Up':
			case 'Hammer Up':
			case 'Lance Up':
			case 'Sword and Shield Up':
			case 'Light Bowgun Up':
			case 'Dual Swords Up':
			case 'Long Sword Up':
			case 'Hunting Horn Up':
			case 'Gunlance Up':
			case 'Bow Up':
			case 'Tonfa Up':
			case 'Swaxe Up':
			case 'Magspike Up':
			case 'Zenith Fire Res':
			case 'Zenith Water Res':
			case 'Zenith Ice Res':
			case 'Zenith Thunder Res':
			case 'Zenith Dragon Res':
			case 'Zenith Healing':
			case 'Zenith Heroics':
			case 'Zenith Attack':
			case 'Zenith Elemental':
			case 'Zenith Movement Speed':
			case 'All Zenith AOEs':
			case '[Ranged] Attack':
			case '[Ranged] Elemental':
				return minValue;
			case 'Attack Slayer':
			case 'Elemental Slayer':
				if (sigilType === 'Unlimited [Emperor]') {
					return minUnlimitedEmperorValue;
				} else if (sigilType === 'Unlimited [Extreme]') {
					return minUnlimitedExtremeValue;
				} else return minStandardValue;
			case 'Zenith Cooldown':
				return minCooldown;
			case 'Zenith Duration':
				return minDuration;
			case 'Weapon Up':
				return minWeaponUpValue;
		}
	}

	function getHighestWeaponUp(
		sigils: [slot1: SigilSlot, slot2: SigilSlot, slot3: SigilSlot],
	) {
		return Math.max(
			...sigils
				.filter(
					(slot) =>
						slot.type === 'Standard' ||
						slot.type === 'Unlimited [Emperor]' ||
						slot.type === 'Unlimited [Extreme]',
				)
				.flatMap((slot) => slot.values)
				.filter((skill) => skill.skill === 'Weapon Up')
				.map((skill) => skill.value),
		);
	}

	function getConstantAttack(
		sigils: [slot1: SigilSlot, slot2: SigilSlot, slot3: SigilSlot],
		weaponTrueRaw: number,
		highestWeaponUp: number,
	) {
		return (
			sigils.reduce((sum, slot) => {
				if (
					slot.type === 'Standard' ||
					slot.type === 'Unlimited [Emperor]' ||
					slot.type === 'Unlimited [Extreme]'
				) {
					return (
						sum +
						slot.values.reduce((slotSum, skill) => {
							if (skill.skill === 'Attack Slayer') {
								return slotSum + skill.value;
							}
							return slotSum;
						}, 0)
					);
				}
				return sum;
			}, 0) +
			weaponTrueRaw +
			highestWeaponUp
		);
	}

	function getConstantElement(
		sigils: [slot1: SigilSlot, slot2: SigilSlot, slot3: SigilSlot],
		weaponElement: number,
		highestWeaponUp: number,
	) {
		return (
			sigils.reduce((sum, slot) => {
				if (
					slot.type === 'Standard' ||
					slot.type === 'Unlimited [Emperor]' ||
					slot.type === 'Unlimited [Extreme]'
				) {
					return (
						sum +
						slot.values.reduce((slotSum, skill) => {
							if (skill.skill === 'Elemental Slayer') {
								return slotSum + skill.value * 10;
							}
							return slotSum;
						}, 0)
					);
				}
				return sum;
			}, 0) +
			weaponElement +
			highestWeaponUp * 10
		);
	}

	function generateSigilChartData(
		sigils: [slot1: SigilSlot, slot2: SigilSlot, slot3: SigilSlot],
		questDurationInSeconds: number,
		weaponTrueRaw: number,
		weaponElement: number,
		hunters: number,
		initialZenithSigilDelay: number,
		zenithSigilDelay: number,
	) {
		const step = 1;
		let data = [];

		// Initialize variables to track total damage
		let totalAttackDamage = 0;
		let totalElementalDamage = 0;

		// Arrays to store individual sigil contributions
		let sigilAttackContributions = [0, 0, 0];
		let sigilElementContributions = [0, 0, 0];

		let totalTrueRaw = {
			lengthUpTrueRaw: outputLengthUpTrueRaw,
			sigilAttack: 0,
			unlimitedSigilAttack: 0,
			zenithAttack: 0,
			zenithAOEAttack: 0,
		};

		let totalElement = {
			weaponElement: weaponElement,
			sigilElement: 0,
			unlimitedSigilElement: 0,
			zenithElementMultiplier: 1,
			zenithAOEElement: 0,
		};

		// Loop through each sigil to calculate its contributions
		sigils.forEach((sigil, index) => {
			sigil.values.forEach((skill) => {
				if (skill.skill === 'Attack Slayer') {
					sigilAttackContributions[index] += skill.value;
					totalTrueRaw.sigilAttack += skill.value;
				} else if (skill.skill === 'Weapon Up') {
					sigilAttackContributions[index] += skill.value;
					sigilElementContributions[index] += skill.value * 10;
					totalTrueRaw.unlimitedSigilAttack += skill.value;
					totalElement.unlimitedSigilElement += skill.value;
				} else if (skill.skill === 'Elemental Slayer') {
					sigilElementContributions[index] += skill.value * 10; // Assuming a factor of 10 for elemental damage
					totalElement.sigilElement += skill.value;
				}
			});

			// Special handling for Zenith sigils
			// Find Zenith sigils
			const standardZenithSigil = sigil.type === 'Zenith';
			const aoeZenithSigil = sigil.type === 'Zenith AOE';

			let zenithAttackValue = 0;
			let zenithElementalValue = 0;
			let isAOEZenith = false;

			if (standardZenithSigil && !aoeZenithSigil) {
				zenithAttackValue =
					sigil.values.find((skill) => skill.skill === 'Zenith Attack')
						?.value || 0;
				zenithElementalValue =
					sigil.values.find((skill) => skill.skill === 'Zenith Elemental')
						?.value || 0;
			} else if (aoeZenithSigil && !standardZenithSigil) {
				isAOEZenith = true;
				// Sum up all '[Ranged] Attack' values
				zenithAttackValue = sigil.values
					.filter((skill) => skill.skill === '[Ranged] Attack')
					.reduce((sum, skill) => sum + (skill.value || 0), 0);

				// Sum up all '[Ranged] Elemental' values
				zenithElementalValue = sigil.values
					.filter((skill) => skill.skill === '[Ranged] Elemental')
					.reduce((sum, skill) => sum + (skill.value || 0), 0);
			}

			// TODO idk if correct for comparison.
			let attackDamage = weaponTrueRaw;
			let elementalDamage = weaponElement;

			// Calculate Zenith sigil contribution
			if (isAOEZenith) {
				attackDamage += getAOESigilTrueRaw(zenithAttackValue, hunters);
				elementalDamage += getAOESigilElement(zenithElementalValue, hunters);

				totalTrueRaw.zenithAOEAttack += getAOESigilTrueRaw(
					zenithAttackValue,
					hunters,
				);
				totalElement.zenithAOEElement += getAOESigilElement(
					zenithElementalValue,
					hunters,
				);
			} else {
				attackDamage += getZenithSigilTrueRaw(zenithAttackValue);
				elementalDamage *=
					getZenithSigilElementMultiplier(zenithElementalValue);

				totalTrueRaw.zenithAttack += getZenithSigilTrueRaw(zenithAttackValue);
				totalElement.zenithElementMultiplier =
					getZenithSigilElementMultiplier(zenithElementalValue);
			}

			sigilAttackContributions[index] += attackDamage;
			sigilElementContributions[index] += elementalDamage;
		});

		// Find the highest Weapon Up value
		const highestWeaponUp = getHighestWeaponUp(sigils);

		// Calculate constant damage from Standard and Unlimited sigils
		const constantAttackDamage = getConstantAttack(
			sigils,
			weaponTrueRaw,
			highestWeaponUp,
		);

		const constantElementalDamage = getConstantElement(
			sigils,
			weaponElement,
			highestWeaponUp,
		);

		// Find Zenith sigils
		const standardZenithSigil = sigils.find((slot) => slot.type === 'Zenith');
		const aoeZenithSigil = sigils.find((slot) => slot.type === 'Zenith AOE');

		let zenithActive = false;
		let zenithTimer = 0;
		let zenithDuration = 0;
		let zenithCooldown = 0;
		let zenithAttackValue = 0;
		let zenithElementalValue = 0;
		let isAOEZenith = false;
		let subsequentDelayTimer = 0;

		if (standardZenithSigil && !aoeZenithSigil) {
			zenithActive = true;
			zenithAttackValue =
				standardZenithSigil.values.find(
					(skill) => skill.skill === 'Zenith Attack',
				)?.value || 0;
			zenithElementalValue =
				standardZenithSigil.values.find(
					(skill) => skill.skill === 'Zenith Elemental',
				)?.value || 0;
			zenithDuration = getZenithSigilProperty(
				'duration',
				'standard',
				standardZenithSigil.values.find(
					(skill) => skill.skill === 'Zenith Duration',
				)?.value || 0,
			);
			zenithCooldown = getZenithSigilProperty(
				'cooldown',
				'standard',
				standardZenithSigil.values.find(
					(skill) => skill.skill === 'Zenith Cooldown',
				)?.value || 0,
			);
		} else if (aoeZenithSigil && !standardZenithSigil) {
			zenithActive = true;
			isAOEZenith = true;
			// Sum up all '[Ranged] Attack' values
			zenithAttackValue = aoeZenithSigil.values
				.filter((skill) => skill.skill === '[Ranged] Attack')
				.reduce((sum, skill) => sum + (skill.value || 0), 0);

			// Sum up all '[Ranged] Elemental' values
			zenithElementalValue = aoeZenithSigil.values
				.filter((skill) => skill.skill === '[Ranged] Elemental')
				.reduce((sum, skill) => sum + (skill.value || 0), 0);
			zenithDuration = getZenithSigilProperty('duration', 'aoe');
			zenithCooldown = getZenithSigilProperty('cooldown', 'aoe');
		}

		// Generate data for the initial delay period
		for (let second = 1; second < initialZenithSigilDelay; second++) {
			if (second % step === 0) {
				totalAttackDamage += constantAttackDamage;
				totalElementalDamage += constantElementalDamage;

				data.push({
					group: 'True Raw',
					seconds: second,
					damage: constantAttackDamage,
				});
				data.push({
					group: 'Element',
					seconds: second,
					damage: constantElementalDamage,
				});
			}
		}

		// Start the main loop from the initial delay
		zenithActive = true; // Activate the sigil after the initial delay
		for (
			let second = initialZenithSigilDelay;
			second <= questDurationInSeconds;
			second++
		) {
			let attackDamage = constantAttackDamage;
			let elementalDamage = constantElementalDamage;

			// Calculate Zenith sigil contribution
			if (zenithActive) {
				if (isAOEZenith) {
					attackDamage += getAOESigilTrueRaw(zenithAttackValue, hunters);
					elementalDamage +=
						getAOESigilElement(zenithElementalValue, hunters) || 0;
				} else {
					attackDamage += getZenithSigilTrueRaw(zenithAttackValue);
					elementalDamage *=
						getZenithSigilElementMultiplier(zenithElementalValue);
				}
				zenithTimer++;
				if (zenithTimer >= zenithDuration) {
					zenithActive = false;
					zenithTimer = 0;
					subsequentDelayTimer = 0;
				}
			} else if (zenithDuration > 0) {
				zenithTimer++;
				if (zenithTimer >= zenithCooldown) {
					subsequentDelayTimer++;
					if (subsequentDelayTimer >= zenithSigilDelay) {
						zenithActive = true;
						zenithTimer = 0;
					}
				}
			}

			if (second % step === 0) {
				totalAttackDamage += attackDamage;
				totalElementalDamage += elementalDamage;

				data.push({
					group: 'True Raw',
					seconds: second,
					damage: attackDamage,
				});
				data.push({
					group: 'Element',
					seconds: second,
					damage: elementalDamage,
				});
			}
		}

		// Calculate average damage per second
		const averageAttackDamage = totalAttackDamage / questDurationInSeconds;
		const averageElementalDamage =
			totalElementalDamage / questDurationInSeconds;

		// Return or display average damage values along with chart data
		return {
			chartData: data,
			averageAttackDamage,
			averageElementalDamage,
			sigilAttackContributions,
			sigilElementContributions,
			totalTrueRaw,
			totalElement,
		};
	}

	const maxValue = 15;
	const maxUnlimitedExtremeValue = 12;
	const maxUnlimitedEmperorValue = 15;

	const maxCooldown = 17;
	const maxDuration = 12;

	const minDuration = 1;
	const minCooldown = 9;
	const minStandardValue = -10;
	const minValue = 1;
	const minUnlimitedExtremeValue = 3;
	const minUnlimitedEmperorValue = 3;
	const minWeaponUpValue = 10;

	let allowedSigils: {
		type: FrontierSigilRecipeType;
		sigils: FrontierSigil[];
	}[] = [
		{ type: 'Standard', sigils: ['None', 'Attack Slayer', 'Elemental Slayer'] },
		{
			type: 'Unlimited [Emperor]',
			sigils: ['None', 'Weapon Up', 'Attack Slayer'],
		},
		{
			type: 'Unlimited [Extreme]',
			sigils: [
				'None',
				'Length Up', // todo
				'Weapon Up', // TODO ezlion?
				'Attack Slayer',
				'Elemental Slayer',
			],
		},
		{
			type: 'Zenith',
			sigils: [
				'None',
				'Zenith Attack',
				'Zenith Elemental',
				'Zenith Duration',
				'Zenith Cooldown',
			],
		},
		{
			type: 'Zenith AOE',
			sigils: [
				'None',
				'[Ranged] Attack', // TODO ezlion?
				'[Ranged] Elemental',
			],
		},
	];

	let sigils: [slot1: SigilSlot, slot2: SigilSlot, slot3: SigilSlot] = [
		{
			type: 'Standard',
			values: [
				{ skill: 'Attack Slayer', value: 15 },
				{ skill: 'Elemental Slayer', value: 15 },
				{ skill: 'Attack Slayer', value: 15 },
			],
		},
		{
			type: 'Unlimited [Emperor]',
			values: [
				{ skill: 'Weapon Up', value: 15 },
				{ skill: 'Attack Slayer', value: 15 },
				{ skill: 'Attack Slayer', value: 15 },
			],
		},
		{
			type: 'Zenith',
			values: [
				{ skill: 'Zenith Attack', value: 15 },
				{ skill: 'Zenith Duration', value: 12 },
				{ skill: 'Zenith Cooldown', value: 17 },
			],
		},
	];

	let zenithApplyDelay = 5;
	let zenithInitialDelay = 10;
	let questDurationInSeconds = 300;

	let zenithAOESigilHunters = '1';

	$: outputLengthUpTrueRaw = getLengthAttackValue(
		isLengthUpActive(sigils),
		weaponTrueRaw,
	);

	$: sigilChartOptions = {
		title: 'Sigil Damage',
		theme: $theme,
		height: '400px',
		points: { enabled: false },
		legend: { enabled: false },
		axes: {
			bottom: {
				title: 'Seconds',
				mapsTo: 'seconds',
				scaleType: ScaleTypes.LINEAR,
				domain: [1, questDurationInSeconds],
			},
			left: {
				mapsTo: 'damage',
				title: 'Damage',
				scaleType: ScaleTypes.LINEAR,
			},
		},
	} as LineChartOptions;

	let weaponTrueRaw = 1500;
	let weaponElement = 1500;

	$: sigilChartData = generateSigilChartData(
		sigils,
		questDurationInSeconds,
		outputLengthUpTrueRaw,
		weaponElement,
		Number.parseInt(zenithAOESigilHunters),
		zenithInitialDelay,
		zenithApplyDelay,
	);

	let sigilChartLoaded = false;
	let sigilChart: ComponentType<LineChart>;

	let selectedWeaponType: FrontierWeaponName = 'Sword and Shield';
	let inputNumberAttackValue = 2100;

	let inputZenithSigilAttackValue = 15;
	let inputZenithSigilElementValue = 15;
	let inputZenithSigilAOEAttackValue = 45;
	let inputZenithSigilAOEElementValue = 45;
	let inputZenithSigilAOEHunterCount = '1';
	let inputZenithSigilWeaponElement = 1500;

	const formulaZenithSigilTrueRaw = display(
		`\\begin{equation*} \\text{Zenith Sigil True Raw} = \\begin{cases} 0 & \\text{if } x \\leq 0 \\\\ 20x + 30 & \\text{otherwise} \\end{cases} \\end{equation*}`,
	);

	$: outputZenithSigilTrueRaw = getZenithSigilTrueRaw(
		inputZenithSigilAttackValue,
	);

	const formulaZenithSigilAOETrueRaw = display(
		`\\begin{equation*} \\text{Zenith Sigil AOE True Raw} = \\begin{cases} 0 & \\text{if } x \\leq 0 \\\\ (5x + 25) \\times n & \\text{otherwise} \\end{cases} \\end{equation*}`,
	);

	$: outputZenithSigilAOETrueRaw = getAOESigilTrueRaw(
		inputZenithSigilAOEAttackValue,
		Number.parseInt(inputZenithSigilAOEHunterCount),
	);

	const formulaZenithSigilElement = display(
		`\\begin{equation*} \\text{Zenith Sigil Element} = \\begin{cases} 0 & \\text{if } x \\leq 0 \\\\ ((0.1x + 1.3) \\times \\text{weaponElement}) - \\text{weaponElement} & \\text{otherwise} \\end{cases} \\end{equation*}`,
	);

	$: outputZenithSigilElement =
		inputZenithSigilElementValue > 0
			? (1.3 + inputZenithSigilElementValue * 0.1) *
					inputZenithSigilWeaponElement -
				inputZenithSigilWeaponElement
			: 0;

	const formulaZenithSigilAOEElement = display(
		`\\begin{equation*} \\text{Zenith Sigil AOE Element} = \\begin{cases} 0 & \\text{if } x \\leq 0 \\\\ (50x + 50) \\times n & \\text{otherwise} \\end{cases} \\end{equation*}`,
	);

	$: outputZenithSigilAOEElement = getAOESigilElement(
		inputZenithSigilAOEElementValue,
		Number.parseInt(inputZenithSigilAOEHunterCount),
	);

	onMount(async () => {
		const charts = await import('@carbon/charts-svelte');
		sigilChart = charts.LineChart;
		sigilChartLoaded = true;
	});
</script>

<svelte:head>
	<link
		rel="stylesheet"
		href="https://cdn.jsdelivr.net/npm/katex@0.16.4/dist/katex.min.css"
		integrity="sha384-vKruj+a13U8yHIkAyGgK1J3ArTLzrFGBbBc0tDp4ad/EyewESeXE/Iv67Aj8gKZ0"
		crossorigin="anonymous"
	/>
</svelte:head>

<HunterNotesPage displayTOC={false}>
	<div>
		<SectionHeadingTopLevel title={'Sigils Calculator'} />
		<div>
			<p class="spaced-paragraph">
				Here you can compare sigils damage in order to decide which one to
				equip. You can equip multiple Unlimited (UL) Sigils, but the Weapon Up
				effect is only applied by the highest Weapon Up value and does not
				stack. The standard sigil type minimum and maximum values are taken from
				standard sigils and Shiten sigils.
			</p>
			<div class="sigils">
				{#each sigils as sigil, i}
					<div class="sigil">
						<div class="sigil-icon">
							<InlineTooltip
								text={`Sigil ${i + 1}`}
								tooltip="Sigil"
								iconType="component"
								icon={SigilIconWhite}
							/>
						</div>
						<Dropdown
							titleText={`Sigil ${i + 1} Type`}
							bind:selectedId={sigil.type}
							invalid={isInvalidSigilType(sigils)}
							invalidText={'Found multiple zenith sigils, please choose only one.'}
							items={[
								{ id: 'Standard', text: 'Standard' },
								{ id: 'Unlimited [Emperor]', text: 'Unlimited [Emperor]' },
								{ id: 'Unlimited [Extreme]', text: 'Unlimited [Extreme]' },
								{ id: 'Zenith', text: 'Zenith' },
								{ id: 'Zenith AOE', text: 'Zenith AOE' },
							]}
							on:select={() => {
								sigil.values[0].skill = 'None';
								sigil.values[1].skill = 'None';
								sigil.values[2].skill = 'None';
								sigil.values[0].value = 0;
								sigil.values[1].value = 0;
								sigil.values[2].value = 0;
							}}
						/>

						<div class="sigil-skill">
							<Dropdown
								titleText={`Sigil ${i + 1} Skill 1`}
								bind:selectedId={sigil.values[0].skill}
								items={allowedSigils
									.find((e) => e.type === sigil.type)
									?.sigils.map((e) => {
										return {
											id: e,
											text: e,
										};
									})}
							/>
							<NumberInput
								size="sm"
								step={1}
								min={getMinValue(sigil.values[0].skill, sigil.type)}
								max={getMaxValue(sigil.values[0].skill, sigil.type)}
								bind:value={sigil.values[0].value}
								invalidText={`Invalid value: must be between ${getMinValue(sigil.values[0].skill, sigil.type)} and ${getMaxValue(sigil.values[0].skill, sigil.type)}`}
								label={`Sigil ${i + 1} Value 1`}
							/>
						</div>
						<div class="sigil-skill">
							<Dropdown
								titleText={`Sigil ${i + 1} Skill 2`}
								bind:selectedId={sigil.values[1].skill}
								items={allowedSigils
									.find((e) => e.type === sigil.type)
									?.sigils.map((e) => {
										return {
											id: e,
											text: e,
										};
									})}
							/>
							<NumberInput
								size="sm"
								step={1}
								min={getMinValue(sigil.values[1].skill, sigil.type)}
								max={getMaxValue(sigil.values[1].skill, sigil.type)}
								bind:value={sigil.values[1].value}
								invalidText={`Invalid value: must be between ${getMinValue(sigil.values[1].skill, sigil.type)} and ${getMaxValue(sigil.values[1].skill, sigil.type)}`}
								label={`Sigil ${i + 1} Value 2`}
							/>
						</div>
						<div class="sigil-skill">
							<Dropdown
								titleText={`Sigil ${i + 1} Skill 3`}
								bind:selectedId={sigil.values[2].skill}
								items={allowedSigils
									.find((e) => e.type === sigil.type)
									?.sigils.map((e) => {
										return {
											id: e,
											text: e,
										};
									})}
							/>
							<NumberInput
								size="sm"
								step={1}
								min={getMinValue(sigil.values[2].skill, sigil.type)}
								max={getMaxValue(sigil.values[2].skill, sigil.type)}
								bind:value={sigil.values[2].value}
								invalidText={`Invalid value: must be between ${getMinValue(sigil.values[2].skill, sigil.type)} and ${getMaxValue(sigil.values[2].skill, sigil.type)}`}
								label={`Sigil ${i + 1} Value 3`}
							/>
						</div>
					</div>
				{/each}
			</div>
			<div class="weapon-type">
				<Dropdown
					titleText="Weapon Type"
					bind:selectedId={selectedWeaponType}
					items={[
						{
							id: 'Sword and Shield',
							text: 'Sword and Shield',
						},
						{ id: 'Dual Swords', text: 'Dual Swords' },
						{ id: 'Great Sword', text: 'Great Sword' },
						{ id: 'Long Sword', text: 'Long Sword' },
						{ id: 'Hammer', text: 'Hammer' },
						{ id: 'Hunting Horn', text: 'Hunting Horn' },
						{ id: 'Lance', text: 'Lance' },
						{ id: 'Gunlance', text: 'Gunlance' },
						{ id: 'Tonfa', text: 'Tonfa' },
						{ id: 'Switch Axe F', text: 'Switch Axe F' },
						{ id: 'Magnet Spike', text: 'Magnet Spike' },
						{ id: 'Light Bowgun', text: 'Light Bowgun' },
						{ id: 'Heavy Bowgun', text: 'Heavy Bowgun' },
						{ id: 'Bow', text: 'Bow' },
					]}
				/>
				<TrueRawConverter
					bind:weaponType={selectedWeaponType}
					bind:value={inputNumberAttackValue}
				/>
				{#if isLengthUpActive(sigils) === 'Active'}
					<p>({outputLengthUpTrueRaw} True Raw with Length Up)</p>
				{/if}
			</div>
			<div class="extra-inputs">
				<NumberInput
					size="sm"
					step={100}
					min={0}
					max={8000}
					bind:value={weaponTrueRaw}
					invalidText={'Invalid value.'}
					label={`Weapon True Raw`}
				/>
				<NumberInput
					size="sm"
					step={100}
					min={0}
					max={2550}
					bind:value={weaponElement}
					invalidText={'Invalid value.'}
					label={`Weapon Element`}
				/>
				<NumberInput
					step={1}
					min={1}
					bind:value={questDurationInSeconds}
					invalidText={'Invalid value.'}
					label={`Quest Duration in Seconds`}
				/>
				<NumberInput
					step={1}
					min={0}
					bind:value={zenithInitialDelay}
					invalidText={'Invalid value.'}
					label={`Zenith Sigil First Activation Delay in Seconds`}
				/>
				<NumberInput
					step={1}
					min={0}
					bind:value={zenithApplyDelay}
					invalidText={'Invalid value.'}
					label={`Zenith Sigil Activation Delay in Seconds`}
				/>
				<Dropdown
					titleText="AOE Sigil Hunters"
					bind:selectedId={zenithAOESigilHunters}
					items={[
						{ id: '1', text: '1 Hunter' },
						{ id: '2', text: '2 Hunters' },
						{ id: '3', text: '3 Hunters' },
						{ id: '4', text: '4 Hunters' },
					]}
				/>
			</div>

			<div class="results">
				<p>
					<InlineTooltip
						text="⚔️ Total Attack:"
						tooltip="Stat"
						icon={''}
						iconType="file"
					/>
					{sigilChartData.averageAttackDamage.toFixed(2)} ({sigilChartData.sigilAttackContributions.join(
						' | ',
					)})
				</p>
				<p>
					<InlineTooltip
						text="🐲 Total Element:"
						tooltip="Stat"
						icon={''}
						iconType="file"
					/>
					{sigilChartData.averageElementalDamage.toFixed(2)} ({sigilChartData.sigilElementContributions.join(
						' | ',
					)})
				</p>
				<p>
					The Zenith Sigil values are averaged in the total, while the values in
					parentheses are calculated as if they were constant.
				</p>
			</div>
			<div class="chart">
				{#if sigilChartLoaded}
					<svelte:component
						this={sigilChart}
						data={sigilChartData.chartData}
						options={sigilChartOptions}
					/>
				{:else}
					<Loading withOverlay={false} />
				{/if}
			</div>
			<div class="sigil-attack-formula">
				<div class="formula-container">
					{@html formulaSigilTrueRaw}
				</div>
				<div class="formula-container">
					{@html display(formulaValuesSigilTrueRaw)}
				</div>
				<div class="formula-container">
					{@html formulaSigilElement}
				</div>
				<div class="formula-container">
					{@html display(formulaValuesSigilElement)}
				</div>
			</div>

			<section>
				<SectionHeading level={2} title="Zenith Sigils Formulas" />
				<div>
					<div class="extra-inputs">
						<NumberInput
							size="sm"
							step={1}
							min={0}
							max={15}
							bind:value={inputZenithSigilAttackValue}
							invalidText={'Invalid value.'}
							label="Zenith Sigil Attack"
						/>
						<NumberInput
							size="sm"
							step={1}
							min={0}
							max={15}
							bind:value={inputZenithSigilElementValue}
							invalidText={'Invalid value.'}
							label="Zenith Sigil Element"
						/>
						<NumberInput
							size="sm"
							step={1}
							min={0}
							max={45}
							bind:value={inputZenithSigilAOEAttackValue}
							invalidText={'Invalid value.'}
							label="Zenith Sigil AOE Attack"
						/>
						<NumberInput
							size="sm"
							step={1}
							min={0}
							max={45}
							bind:value={inputZenithSigilAOEElementValue}
							invalidText={'Invalid value.'}
							label="Zenith Sigil AOE Element"
						/>
						<NumberInput
							size="sm"
							step={100}
							min={0}
							max={2550}
							bind:value={inputZenithSigilWeaponElement}
							invalidText={'Invalid value.'}
							label={`Weapon Element`}
						/>
						<Dropdown
							titleText="AOE Sigil Hunters"
							bind:selectedId={inputZenithSigilAOEHunterCount}
							items={[
								{ id: '1', text: '1 Hunter' },
								{ id: '2', text: '2 Hunters' },
								{ id: '3', text: '3 Hunters' },
								{ id: '4', text: '4 Hunters' },
							]}
						/>
					</div>
					<div class="formula-container">
						{@html formulaZenithSigilTrueRaw}
					</div>
					<div class="formula-container">
						{@html formulaZenithSigilElement}
					</div>
					<div class="formula-container">
						{@html formulaZenithSigilAOETrueRaw}
					</div>
					<div class="formula-container">
						{@html formulaZenithSigilAOEElement}
					</div>
					<div>
						<p>Zenith Sigil True Raw: {outputZenithSigilTrueRaw}</p>
						<p>Zenith Sigil Element: {outputZenithSigilElement}</p>
						<p>Zenith Sigil AOE True Raw: {outputZenithSigilAOETrueRaw}</p>
						<p>Zenith Sigil AOE Element: {outputZenithSigilAOEElement}</p>
					</div>
				</div>
			</section>
		</div>
		<div class="page-turn">
			<PageTurn pageUrlPathName={$page.url.pathname} />
		</div>
	</div>
</HunterNotesPage>

<style lang="scss">
	.page-turn {
		margin-top: 4rem;
	}

	.sigils {
		margin-top: 2rem;
		margin-bottom: 2rem;
		display: flex;
		gap: 2rem;
		flex-wrap: wrap;
	}

	.extra-inputs {
		display: flex;
		gap: 1rem;
		max-width: max-content;
		margin-top: 1rem;
		flex-wrap: wrap;
		margin-bottom: 1rem;
	}

	.sigil {
		background-color: var(--ctp-mantle);
		display: flex;
		flex-direction: column;
		gap: 1rem;
		border-radius: 8px;
		border: 2px solid var(--ctp-surface1);
		padding: 1rem;
	}

	.sigil-skill {
		display: flex;
		gap: 0.5rem;
	}

	.results {
		background-color: var(--ctp-mantle);
		display: flex;
		flex-direction: column;
		gap: 1rem;
		border-radius: 8px;
		border: 2px solid var(--ctp-surface1);
		padding: 1rem;
		margin-top: 2rem;
		max-width: max-content;
	}

	.formula-container {
		margin-bottom: 1rem;
		margin-top: 1rem;
	}

	@media (min-width: 320px) {
		.formula-container {
			max-width: 95vw;
		}
	}

	@media (min-width: 1056px) {
		.formula-container {
			max-width: 80vw;
		}
	}

	.chart {
		margin-top: 2rem;
		margin-bottom: 2rem;
	}

	.weapon-type {
		display: flex;
		gap: 1rem;
		align-items: center;
	}
</style>
