<script lang="ts">
	import NumberInput from 'carbon-components-svelte/src/NumberInput/NumberInput.svelte';
	import {
		getQuestRestrictions,
		type SpeedrunInfo,
	} from '../modules/frontier/quest';
	import ContentSwitcher from 'carbon-components-svelte/src/ContentSwitcher/ContentSwitcher.svelte';
	import Switch from 'carbon-components-svelte/src/ContentSwitcher/Switch.svelte';
	import CharacterWholeNumber from 'carbon-icons-svelte/lib/CharacterWholeNumber.svelte';
	import { mapCourseRightsToNames } from '../modules/frontier/bitfields';
	import {
		ezlionArmorHead,
		ezlionArmorChest,
		ezlionArmorArms,
		ezlionArmorWaist,
		ezlionArmorLegs,
		ezlionArmorColor,
		ezlionSkillArmor,
		ezlionWeaponBlademaster,
		ezlionWeaponGunner,
		ezlionItem,
		ezlionSkillGuildPoogie,
		ezlionSkillDiva,
		ezlionSkillDivaPrayerGem,
		ezlionObjectiveType,
		ezlionQuest,
		ezlionSkillHalk,
		ezlionSkillRoadTower,
		ezlionSkillZenith,
		ezlionSkillCaravan,
		ezlionSkillStyleRank,
		ezlionWeaponStyle,
		ezlionQuestToggleMode,
		ezlionMonster,
		ezlionLocation,
		ezlionWeaponClass,
		ezlionWeaponType,
	} from 'ezlion';
	import { ActiveFeature } from '../modules/frontier/active-feature';
	import Image from 'carbon-icons-svelte/lib/Image.svelte';
	import TextLongParagraph from 'carbon-icons-svelte/lib/TextLongParagraph.svelte';
	import CopyButton from 'carbon-components-svelte/src/CopyButton/CopyButton.svelte';
	import Download from 'carbon-icons-svelte/lib/Download.svelte';
	import Button from 'carbon-components-svelte/src/Button/Button.svelte';
	import { downloadDomAsPng } from '../modules/download';
	import { getWeaponIcon } from '../modules/frontier/weapons';
	import InlineTooltip from './frontier/InlineTooltip.svelte';
	import { getItemIcon } from '../modules/frontier/items';
	import { getArmorIcon } from '../modules/frontier/armor';
	import { getLocationIcon } from '../modules/frontier/locations';

	function getDate(input: string) {
		try {
			// Parse the input string as a Date object
			const inputDate = new Date(input);

			// Format the date in the desired output format
			const output = inputDate.toISOString().split('T')[0];

			return output; // Output: "2023-02-04"
		} catch (e) {
			return '????-??-??';
		}
	}

	/**30fps */
	function getFramesFromMinutesSecondsMilliseconds(time: string) {
		const parts = time.split(':');
		const minutes = parseInt(parts[0], 10);
		const secondsAndMilliseconds = parts[1].split('.');
		const seconds = parseInt(secondsAndMilliseconds[0], 10);
		const milliseconds = parseInt(secondsAndMilliseconds[1], 10);

		const totalSeconds = minutes * 60 + seconds;
		const totalMilliseconds = totalSeconds * 1000 + milliseconds;
		const frames = Math.floor(totalMilliseconds / (1000 / 30)); // 30 fps
		return frames;
	}

	/**30fps */
	function getMinutesSecondsMillisecondsFromFrames(frames: number) {
		const totalMilliseconds = frames * (1000 / 30); // 30 fps
		const totalSeconds = totalMilliseconds / 1000;

		const minutes = Math.floor(totalSeconds / 60);
		const remainingSeconds = totalSeconds % 60;

		const seconds = Math.floor(remainingSeconds);
		const milliseconds = Math.round((remainingSeconds - seconds) * 1000);

		// Format the result as a string "MM:SS.mmm"
		const result = `${String(minutes).padStart(2, '0')}:${String(
			seconds,
		).padStart(2, '0')}.${String(milliseconds).padStart(3, '0')}`;
		return result;
	}

	/** Check if user input is in the format of mm:ss.fff, where the minutes can be of any length*/
	function isValidTime(time: string) {
		const regex = /^\d{2,}:\d{2}\.\d{3}$/;
		return regex.test(time);
	}

	/*Run IDs you want to view stats from, separated by spaces. Can be one number or multiple separated by spaces */
	function isValidRunID(input: string) {
		const regex = /^(\d+\s+)*\d+$/;
		return regex.test(input);
	}

	function getArmorHeadStats(
		pieceID: number,
		Slot1ID: number,
		Slot2ID: number,
		Slot3ID: number,
	) {
		let pieceName = ezlionArmorHead[pieceID];
		let address = pieceID.toString(16).toUpperCase();
		return `${pieceName} (${address}) | ${getDecoName(
			Slot1ID,
		)} | ${getDecoName(Slot2ID)} | ${getDecoName(Slot3ID)}`;
	}

	function getArmorChestStats(
		pieceID: number,
		Slot1ID: number,
		Slot2ID: number,
		Slot3ID: number,
	) {
		let pieceName = ezlionArmorChest[pieceID];
		let address = pieceID.toString(16).toUpperCase();
		return `${pieceName} (${address}) | ${getDecoName(
			Slot1ID,
		)} | ${getDecoName(Slot2ID)} | ${getDecoName(Slot3ID)}`;
	}

	function getArmorArmsStats(
		pieceID: number,
		Slot1ID: number,
		Slot2ID: number,
		Slot3ID: number,
	) {
		let pieceName = ezlionArmorArms[pieceID];
		let address = pieceID.toString(16).toUpperCase();
		return `${pieceName} (${address}) | ${getDecoName(
			Slot1ID,
		)} | ${getDecoName(Slot2ID)} | ${getDecoName(Slot3ID)}`;
	}

	function getArmorWaistStats(
		pieceID: number,
		Slot1ID: number,
		Slot2ID: number,
		Slot3ID: number,
	) {
		let pieceName = ezlionArmorWaist[pieceID];
		let address = pieceID.toString(16).toUpperCase();
		return `${pieceName} (${address}) | ${getDecoName(
			Slot1ID,
		)} | ${getDecoName(Slot2ID)} | ${getDecoName(Slot3ID)}`;
	}

	function getArmorLegsStats(
		pieceID: number,
		Slot1ID: number,
		Slot2ID: number,
		Slot3ID: number,
	) {
		let pieceName = ezlionArmorLegs[pieceID];
		let address = pieceID.toString(16).toUpperCase();
		return `${pieceName} (${address}) | ${getDecoName(
			Slot1ID,
		)} | ${getDecoName(Slot2ID)} | ${getDecoName(Slot3ID)}`;
	}

	function getItemData(itemID: number) {
		const name = ezlionItem[itemID];
		const address = itemID.toString(16).toUpperCase();
		return `${name} (${address})`;
	}

	// TODO
	function getSigilName(slot: number): string {
		if (slot === 0) {
			return 'Empty';
		} else {
			return 'Sigil';
		}

		// let decoSlot1Occupied = WeaponDeco1ID() > 0;
		// let decoSlot2Occupied = WeaponDeco2ID() > 0;
		// let decoSlot3Occupied = WeaponDeco3ID() > 0;

		// if ((decoSlot1Occupied && decoSlot2Occupied && decoSlot3Occupied)
		//     || (decoSlot1Occupied && slot == EquipmentSlot.One)
		//     || (decoSlot2Occupied && slot == EquipmentSlot.Two)
		//     || (decoSlot3Occupied && slot == EquipmentSlot.Three))
		// {
		//     return "Empty";
		// }

		// let sigilSkillList = SkillSigil.IDName;
		// let sigilNames = new int[] { this.Sigil1Name1(), this.Sigil1Name2(), this.Sigil1Name3(), this.Sigil2Name1(), this.Sigil2Name2(), this.Sigil2Name3(), this.Sigil3Name1(), this.Sigil3Name2(), this.Sigil3Name3() };
		// let sigilValues = new int[] { this.Sigil1Value1(), this.Sigil1Value2(), this.Sigil1Value3(), this.Sigil2Value1(), this.Sigil2Value2(), this.Sigil2Value3(), this.Sigil3Value1(), this.Sigil3Value2(), this.Sigil3Value3() };
		// let sigilTypes = new string[9];
		// for (var i = 0; i < 9; i++)
		// {
		//     sigilSkillList.TryGetValue(sigilNames[i], out var type);
		//     sigilTypes[i] = type ?? "";
		// }

		// let index = 0;
		// let slotNumber = 1;

		// switch (slot)
		// {
		//     case EquipmentSlot.Two:
		//         slotNumber = 2;
		//         break;
		//     case EquipmentSlot.Three:
		//         slotNumber = 3;
		//         break;
		// }

		// if ((decoSlot1Occupied && decoSlot2Occupied)
		//     || (decoSlot1Occupied && !decoSlot2Occupied && !decoSlot3Occupied && slot == EquipmentSlot.Two))
		// {
		//     index = 0;
		// }
		// else if (decoSlot1Occupied && !decoSlot2Occupied && !decoSlot3Occupied && slot == EquipmentSlot.Three){
		//     index = 3;
		// }
		// else if (!decoSlot1Occupied && !decoSlot2Occupied && !decoSlot3Occupied)
		// {
		//     index = (slotNumber - 1) * 3;
		// }

		// if (sigilValues[index] == 0 || sigilNames[index] == 0)
		// {
		//     return "Empty";
		// }

		// let type1 = sigilTypes[index] + ": ";
		// let value1 = (sigilValues[index] > 127 ? sigilValues[index] - 256 : sigilValues[index]).ToString(CultureInfo.InvariantCulture);
		// let type2 = "Empty, ";
		// let value2 = "";
		// let type3 = "Empty";
		// let value3 = "";

		// if (sigilValues[index + 1] != 0 && sigilNames[index + 1] != 0)
		// {
		//     type2 = sigilTypes[index + 1] + ": ";
		//     value2 = (sigilValues[index + 1] > 127 ? sigilValues[index + 1] - 256 : sigilValues[index + 1]).ToString(CultureInfo.InvariantCulture);
		// }

		// if (sigilValues[index + 2] != 0 && sigilNames[index + 2] != 0)
		// {
		//     type3 = sigilTypes[index + 2] + ": ";
		//     value3 = (sigilValues[index + 2] > 127 ? sigilValues[index + 2] - 256 : sigilValues[index + 2]).ToString(CultureInfo.InvariantCulture);
		// }

		// return type1 + (value1 != "" && !value1.Contains('-') ? "+" : "") + value1 + ", " + type2 + (value2 != "" && !value2.Contains('-') ? "+" : "") + value2 + ", " + type3 + (value3 != "" && !value3.Contains('-') ? "+" : "") + value3;
	}

	function getDecoName(id: number, slot = 0) {
		let decoName = '';
		let keyFound = id in ezlionItem;
		if (keyFound) {
			decoName = ezlionItem[id];
		}

		if (decoName === null || decoName === 'None' || decoName === '') {
			decoName = 'Empty';
		} else {
			decoName += '';
		}

		if (decoName === 'Empty' && slot !== 0) {
			// TODO test combinations of sigils and decos.
			return getSigilName(slot);
		}

		let address = ` (${id.toString(16).toUpperCase()})`;

		return `${decoName}${address}`;
	}

	function getAutomaticArmorSkills(
		skill1: number,
		skill2: number,
		skill3: number,
		skill4: number,
		skill5: number,
	) {
		let armorSkillName = '';
		let skills = [skill1, skill2, skill3, skill4, skill5];
		for (let i = 0; i < skills.length; i++) {
			let skillId = skills[i];
			let keyFound = skillId in ezlionSkillArmor;

			if (keyFound) {
				let skillName = ezlionSkillArmor[skillId];
				if (skillName !== 'None' && skillName !== '') {
					armorSkillName += skillName;
					if (i !== skills.length - 1) {
						armorSkillName += ', ';
					}

					if (i % 5 === 4) {
						armorSkillName += '\n';
					}
				}
			}
		}

		if (armorSkillName === '') {
			return 'None';
		}

		return armorSkillName;
	}

	function getCaravanSkills(skill1: number, skill2: number, skill3: number) {
		let caravanSkillName = '';
		let skills = [skill1, skill2, skill3];
		for (let i = 0; i < skills.length; i++) {
			let skillId = skills[i];
			let keyFound = skillId in ezlionSkillCaravan;

			if (keyFound) {
				let skillName = ezlionSkillCaravan[skillId];
				if (skillName !== 'None' && skillName !== '') {
					caravanSkillName += skillName;
					if (i !== skills.length - 1) {
						caravanSkillName += ', ';
					}

					if (i % 5 === 4) {
						caravanSkillName += '\n';
					}
				}
			}
		}

		if (caravanSkillName === '') {
			return 'None';
		}

		return caravanSkillName;
	}

	function getZenithSkills(
		skill1: number,
		skill2: number,
		skill3: number,
		skill4: number,
		skill5: number,
		skill6: number,
		skill7: number,
	) {
		let armorSkillName = '';
		let skills = [skill1, skill2, skill3, skill4, skill5, skill6, skill7];
		for (let i = 0; i < skills.length; i++) {
			let skillId = skills[i];
			let keyFound = skillId in ezlionSkillZenith;

			if (keyFound) {
				let skillName = ezlionSkillZenith[skillId];
				if (skillName !== 'None' && skillName !== '') {
					armorSkillName += skillName;
					if (i !== skills.length - 1) {
						armorSkillName += ', ';
					}

					if (i % 5 === 4) {
						armorSkillName += '\n';
					}
				}
			}
		}

		if (armorSkillName === '') {
			return 'None';
		}

		return armorSkillName;
	}

	function getGSRSkills(skill1: number, skill2: number) {
		let styleRankSkillName = '';
		let skills = [skill1, skill2];
		for (let i = 0; i < skills.length; i++) {
			let skillId = skills[i];
			let keyFound = skillId in ezlionSkillStyleRank;
			if (keyFound) {
				let skillName = ezlionSkillStyleRank[skillId];
				if (skillName !== 'None' && skillName !== '') {
					styleRankSkillName += skillName;
					if (i !== skills.length - 1) {
						styleRankSkillName += ', ';
					}

					if (i % 5 === 4) {
						styleRankSkillName += '\n';
					}
				}
			}
		}

		if (styleRankSkillName === '') {
			return 'None';
		}

		return styleRankSkillName;
	}

	// TODO
	function getItems(items: number[]) {
		let sb = '';
		let counter = 0;
		for (let i = 0; i < items.length; i++) {
			let id = items[i];
			let keyFound = id in ezlionItem;

			if (keyFound) {
				let value = ezlionItem[id];
				if (value !== 'None' && value !== '') {
					sb += value;
					counter++;
					if (counter % 5 === 0) {
						sb += '\n';
					} else if (i !== items.length - 1) {
						sb += ', ';
					}
				}
			}
		}

		if (sb === '') {
			return 'None';
		}

		return sb;
	}

	function getRoadDureSkills(skills: number[], levels: number[]) {
		let name = '';
		for (let i = 0; i < skills.length; i++) {
			let id = skills[i];
			let level = levels[i];
			let keyFound = id in ezlionSkillRoadTower;
			if (keyFound) {
				let value = ezlionSkillRoadTower[id];
				if (value !== 'None' && value !== '') {
					// Return the skill and level in the format of ${skillName} LV${level}
					name += `${value} LV${level}`;
					if (i !== skills.length - 1) {
						name += ', ';
					}

					if (i % 5 === 4) {
						name += '\n';
					}
				}
			}
		}

		return name === '' ? 'None' : name;
	}

	function getArmorSkills(
		skill1: number,
		skill2: number,
		skill3: number,
		skill4: number,
		skill5: number,
		skill6: number,
		skill7: number,
		skill8: number,
		skill9: number,
		skill10: number,
		skill11: number,
		skill12: number,
		skill13: number,
		skill14: number,
		skill15: number,
		skill16: number,
		skill17: number,
		skill18: number,
		skill19: number,
	) {
		let armorSkillName = '';
		let skills = [
			skill1,
			skill2,
			skill3,
			skill4,
			skill5,
			skill6,
			skill7,
			skill8,
			skill9,
			skill10,
			skill11,
			skill12,
			skill13,
			skill14,
			skill15,
			skill16,
			skill17,
			skill18,
			skill19,
		];
		for (let i = 0; i < skills.length; i++) {
			let skillId = skills[i];
			let keyFound = skillId in ezlionSkillArmor;

			if (keyFound) {
				let skillName = ezlionSkillArmor[skillId];
				if (skillName !== 'None' && skillName !== '') {
					armorSkillName += skillName;
					if (i !== skills.length - 1) {
						armorSkillName += ', ';
					}

					if (i % 5 === 4) {
						armorSkillName += '\n';
					}
				}
			}
		}

		if (armorSkillName === '') {
			return 'None';
		}

		return armorSkillName;
	}

	function getDivaPrayerGems(run: SpeedrunInfo) {
		let gems = '';
		let gemTypes = [
			run.DivaPrayerGemRedSkill,
			run.DivaPrayerGemYellowSkill,
			run.DivaPrayerGemGreenSkill,
			run.DivaPrayerGemBlueSkill,
		];
		let gemLevels = [
			run.DivaPrayerGemRedLevel,
			run.DivaPrayerGemYellowLevel,
			run.DivaPrayerGemGreenLevel,
			run.DivaPrayerGemBlueLevel,
		];

		for (let i = 0; i < gemTypes.length; i++) {
			let skillId = gemTypes[i];

			if (skillId == null) {
				continue;
			}

			let skillName = ezlionSkillDivaPrayerGem[skillId];

			if (skillName && skillName != 'None' && skillName != '') {
				let gemColor = '';

				switch (i) {
					case 0:
						gemColor = 'Red';
						break;
					case 1:
						gemColor = 'Yellow';
						break;
					case 2:
						gemColor = 'Green';
						break;
					case 3:
						gemColor = 'Blue';
						break;
				}

				gems += `${gemColor} 💎 ${skillName} LV${gemLevels[i]}`;
				if (i != gemTypes.length - 1) {
					gems += '\n';
				}
			}
		}

		return gems ? gems : 'None';
	}

	function isActiveFeatureOn(
		activeFeature: number | null,
		weaponTypeID: number,
	) {
		if (
			activeFeature === null ||
			activeFeature <= 0 ||
			activeFeature > ActiveFeature.All
		) {
			return false;
		}

		let weaponFlag = Math.pow(2, weaponTypeID);
		let activeFeatureFlags = activeFeature;

		return activeFeatureFlags & weaponFlag ? true : false;
	}

	function getGuildPoogieEffect(run: SpeedrunInfo) {
		let effect = 'No Poogie';

		if (
			typeof run.GuildPoogie1Skill === 'number' &&
			run.GuildPoogie1Skill >= 1
		) {
			return ezlionSkillGuildPoogie[run.GuildPoogie1Skill];
		}

		if (
			typeof run.GuildPoogie2Skill === 'number' &&
			run.GuildPoogie2Skill >= 1
		) {
			return ezlionSkillGuildPoogie[run.GuildPoogie2Skill];
		}

		if (
			typeof run.GuildPoogie3Skill === 'number' &&
			run.GuildPoogie3Skill >= 1
		) {
			return ezlionSkillGuildPoogie[run.GuildPoogie3Skill];
		}

		return effect;
	}

	function getMainCourses(rights: number | null) {
		if (rights == null || rights <= 0 || rights > 0xffff) {
			return 'None';
		}

		// Map the first and second bytes to course rights names
		let courseNames = mapCourseRightsToNames(
			rights,
			0,
			'CourseRightsSecondByte',
		);

		// Join the names with commas
		return courseNames.join(', ').trim();
	}

	function getAdditionalCourses(rights: number | null) {
		if (rights == null || rights <= 0 || rights > 0xffff) {
			return 'None';
		}

		// Map the first and second bytes to course rights names
		let courseNames = mapCourseRightsToNames(
			rights,
			1,
			'CourseRightsFirstByte',
		);

		// Join the names with commas
		return courseNames.join(', ').trim();
	}

	function getHalkElement(run: SpeedrunInfo) {
		var element = 'None';

		if (run.HalkFire && run.HalkFire >= 100) {
			return 'Fire';
		}
		if (run.HalkWater && run.HalkWater >= 100) {
			return 'Water';
		}
		if (run.HalkThunder && run.HalkThunder >= 100) {
			return 'Thunder';
		}
		if (run.HalkIce && run.HalkIce >= 100) {
			return 'Ice';
		}
		if (run.HalkDragon && run.HalkDragon >= 100) {
			return 'Dragon';
		}

		return element;
	}

	function getHalkStatus(run: SpeedrunInfo) {
		var status = 'None';

		if (run.HalkPoison && run.HalkPoison >= 100) {
			return 'Poison';
		}
		if (run.HalkSleep && run.HalkSleep >= 100) {
			return 'Sleep';
		}
		if (run.HalkParalysis && run.HalkParalysis >= 100) {
			return 'Paralysis';
		}

		return status;
	}

	function getDualSwordsDroppedCombos(run: SpeedrunInfo) {
		let result = 'Not found';
		/*TODO
		weaponBuffs.DualSwordsSharpensDictionary.Count((e) => e.Value == 0);
		*/
		return result;
	}

	function displayRunStats(
		runID: number,
		forDiscord: boolean,
		run?: SpeedrunInfo,
	) {
		if (!run) {
			return 'No run information available.';
		}

		let inventory = JSON.parse(run.PlayerInventoryDictionary);
		let ammoPouch = JSON.parse(run.PlayerAmmoPouchDictionary);
		let partnyaBag = JSON.parse(run.PartnyaBagDictionary);
		let areas = JSON.parse(run.AreaChangesDictionary);

		let lastInventoryEntry =
			Object.entries(inventory)[Object.keys(inventory).length - 1];
		let lastAmmoPouchEntry =
			Object.entries(ammoPouch)[Object.keys(ammoPouch).length - 1];
		let lastPartnyaBagEntry =
			Object.entries(partnyaBag)[Object.keys(partnyaBag).length - 1];
		let lastAreaEntry = Object.entries(areas)[Object.keys(areas).length - 1];

		let inventoryItems = lastInventoryEntry[1].flatMap(Object.keys).map(Number);
		let ammoPouchItems = lastAmmoPouchEntry[1].flatMap(Object.keys).map(Number);
		let partnyaBagItems = lastPartnyaBagEntry[1]
			.flatMap(Object.keys)
			.map(Number);
		let lastAreaValue = lastAreaEntry[1];
		let questRestrictions = getQuestRestrictions(
			run.QuestVariant2,
			run.QuestVariant3,
		);

		// TODO video link next to run ID.

		let result = `
Run ID: ${runID}
${run.CreatedBy} ${ezlionWeaponClass[run.WeaponTypeID]}

${ezlionWeaponType[run.WeaponTypeID]}: ${
			run.BlademasterWeaponID
				? ezlionWeaponBlademaster[run.BlademasterWeaponID]
				: ezlionWeaponGunner[run.GunnerWeaponID as number]
		} (${
			run.BlademasterWeaponID
				? run.BlademasterWeaponID.toString(16).toUpperCase()
				: run.GunnerWeaponID.toString(16).toUpperCase()
		}) | ${ezlionWeaponStyle[run.StyleID]}
${run.WeaponSlot1} | ${run.WeaponSlot2} | ${run.WeaponSlot3}
Head: ${getArmorHeadStats(
			run.HeadID,
			run.HeadSlot1ID,
			run.HeadSlot2ID,
			run.HeadSlot3ID,
		)}
Chest: ${getArmorChestStats(
			run.ChestID,
			run.ChestSlot1ID,
			run.ChestSlot2ID,
			run.ChestSlot3ID,
		)}
Arms: ${getArmorArmsStats(
			run.ArmsID,
			run.ArmsSlot1ID,
			run.ArmsSlot2ID,
			run.ArmsSlot3ID,
		)}
Waist: ${getArmorWaistStats(
			run.WaistID,
			run.WaistSlot1ID,
			run.WaistSlot2ID,
			run.WaistSlot3ID,
		)}
Legs: ${getArmorLegsStats(
			run.LegsID,
			run.LegsSlot1ID,
			run.LegsSlot2ID,
			run.LegsSlot3ID,
		)}
Cuffs: ${getItemData(run.Cuff1ID)} | ${getItemData(run.Cuff2ID)}

Run Date: ${run.CreatedAt} | Run Hash: ${run.QuestHash}}

Zenith Skills:
${getZenithSkills(
	run.ZenithSkill1ID,
	run.ZenithSkill2ID,
	run.ZenithSkill3ID,
	run.ZenithSkill4ID,
	run.ZenithSkill5ID,
	run.ZenithSkill6ID,
	run.ZenithSkill7ID,
)}

Automatic Skills:
${
	getAutomaticArmorSkills(
		run.AutomaticSkill1ID,
		run.AutomaticSkill2ID,
		run.AutomaticSkill3ID,
		run.AutomaticSkill4ID,
		run.AutomaticSkill5ID,
	) === 'None'
		? 'None'
		: getAutomaticArmorSkills(
				run.AutomaticSkill1ID,
				run.AutomaticSkill2ID,
				run.AutomaticSkill3ID,
				run.AutomaticSkill4ID,
				run.AutomaticSkill5ID,
			)
}

Active Skills:
${getArmorSkills(
	run.ActiveSkill1ID,
	run.ActiveSkill2ID,
	run.ActiveSkill3ID,
	run.ActiveSkill4ID,
	run.ActiveSkill5ID,
	run.ActiveSkill6ID,
	run.ActiveSkill7ID,
	run.ActiveSkill8ID,
	run.ActiveSkill9ID,
	run.ActiveSkill10ID,
	run.ActiveSkill11ID,
	run.ActiveSkill12ID,
	run.ActiveSkill13ID,
	run.ActiveSkill14ID,
	run.ActiveSkill15ID,
	run.ActiveSkill16ID,
	run.ActiveSkill17ID,
	run.ActiveSkill18ID,
	run.ActiveSkill19ID,
)}

Caravan Skills:
${getCaravanSkills(run.CaravanSkill1ID, run.CaravanSkill2ID, run.CaravanSkill3ID)}

Diva:
${ezlionSkillDiva[run.DivaSkillID] === 'None' ? 'No Skill' : ezlionSkillDiva[run.DivaSkillID]}${questRestrictions.divaSkill ? ' (disabled skill)' : ''}
Song ${run.DivaSongBuffOn ? 'ON' : 'OFF'}

Diva Prayer Gems${questRestrictions.divaPrayerGem ? ' (disabled gems)' : ''}:
${getDivaPrayerGems(run)}

Guild:
${
	ezlionSkillArmor[run.GuildFoodID] === 'None'
		? 'None'
		: ezlionSkillArmor[run.GuildFoodID]
}
${getGuildPoogieEffect(run)}

Style Rank${questRestrictions.secretTechnique ? ' (disabled secret technique)' : ''}${questRestrictions.soulRevival ? ' (disabled soul revival)' : ''}${questRestrictions.twinHiden ? ' (disabled twin hiden)' : ''}:
${getGSRSkills(run.StyleRankSkill1ID, run.StyleRankSkill2ID)}

Inventory:
${getItems(inventoryItems)}
${
	!forDiscord
		? `
Ammo Pouch:
${getItems(ammoPouchItems)}

Partnya Bag:
${getItems(partnyaBagItems)}

Poogie Item:
${ezlionItem[run.PoogieItemID]}

Road/Duremudira Skills:
${getRoadDureSkills(
	[
		run.RoadDureSkill1ID,
		run.RoadDureSkill2ID,
		run.RoadDureSkill3ID,
		run.RoadDureSkill4ID,
		run.RoadDureSkill5ID,
		run.RoadDureSkill6ID,
		run.RoadDureSkill7ID,
		run.RoadDureSkill8ID,
		run.RoadDureSkill9ID,
		run.RoadDureSkill10ID,
		run.RoadDureSkill11ID,
		run.RoadDureSkill12ID,
		run.RoadDureSkill13ID,
		run.RoadDureSkill14ID,
		run.RoadDureSkill15ID,
		run.RoadDureSkill16ID,
	],
	[
		run.RoadDureSkill1Level,
		run.RoadDureSkill2Level,
		run.RoadDureSkill3Level,
		run.RoadDureSkill4Level,
		run.RoadDureSkill5Level,
		run.RoadDureSkill6Level,
		run.RoadDureSkill7Level,
		run.RoadDureSkill8Level,
		run.RoadDureSkill9Level,
		run.RoadDureSkill10Level,
		run.RoadDureSkill11Level,
		run.RoadDureSkill12Level,
		run.RoadDureSkill13Level,
		run.RoadDureSkill14Level,
		run.RoadDureSkill15Level,
		run.RoadDureSkill16Level,
	],
)}

Quest${questRestrictions.questBonusReward ? ' (disabled bonus reward)' : ''}: ${ezlionQuest[run.QuestID]}
${ezlionObjectiveType[run.ObjectiveTypeID]} ${
				run.ObjectiveQuantity
			} ${run.ObjectiveName}
Category: ${run.ActualOverlayMode} (${run.RunBuffsTag}, ${run.RunBuffs})
Starting Area: ${ezlionLocation[lastAreaValue]}
Time: ${run.FinalTimeDisplay} (${run.FinalTimeValue} frames)
Party Size: ${run.PartySize}
Mode: ${run.QuestToggleMode !== null ? ezlionQuestToggleMode[run.QuestToggleMode] : 'Not found'}
Active Feature ${isActiveFeatureOn(run.ActiveFeature, run.WeaponTypeID) ? 'ON' : 'OFF'}${questRestrictions.activeFeature ? ' (disabled active feature)' : ''}

Courses${questRestrictions.courseAttack ? ' (disabled course attack)' : ''}:
Main: ${getMainCourses(run.Rights)}
Additional: ${getAdditionalCourses(run.Rights)}

Halk:
${run.HalkOn ? 'Active' : 'Inactive'}${questRestrictions.halk ? ' (disabled halk)' : ''}
Halk Pot ${run.HalkPotEffectOn ? 'ON' : 'OFF'}${questRestrictions.sigil ? ' (disabled halk pot)' : ''}
LV${run.HalkLevel}
Element Type ${getHalkElement(run)}
Status Type ${getHalkStatus(run)}
Intimacy ${run.HalkIntimacy}
Health ${run.HalkHealth}
Attack ${run.HalkAttack}
Defense ${run.HalkDefense}
Intellect ${run.HalkIntellect}
${run.HalkSkill1 ? ezlionSkillHalk[run.HalkSkill1] : 'None'} | ${run.HalkSkill2 ? ezlionSkillHalk[run.HalkSkill2] : 'None'} | ${run.HalkSkill3 ? ezlionSkillHalk[run.HalkSkill3] : 'None'}

Game Patch Information:
dat: ${run.mhfdatInfo}
emd: ${run.mhfemdInfo}
dll: ${run.mhfodllInfo}
hddll: ${run.mhfohddllInfo}

Weapon Specific:
Dual Swords dropped combos: ${getDualSwordsDroppedCombos(run)}

Overlay Hash: ${run.OverlayHash ? run.OverlayHash : 'Not found'}
High-Grade Edition: ${run.IsHighGradeEdition ? 'ON' : 'OFF'}
Refresh Rate: ${run.RefreshRate}
`
		: ''
}
`;

		return result;
		// const runLink = terminalLink(
		// 	'Run Link (YouTube)',
		// 	`https://youtube.com/watch?v=${run.YouTubeID}`,
		// );
		// console.log(runLink);
	}

	interface Props {
		hunt?: SpeedrunInfo;
		runID: number;
	}

	let { hunt, runID = $bindable() }: Props = $props();
	let gearText = $derived(displayRunStats(runID, false, hunt));
	let gearTextForDiscord = $derived(displayRunStats(runID, true, hunt));
	let contentSwitcherIndex = $state(0);
</script>

<div>
	<div class="number-input-container">
		<NumberInput
			size="sm"
			min={0}
			step={1}
			bind:value={runID}
			label={'Run ID'}
		/>
	</div>
	{#if hunt}
		<ContentSwitcher bind:selectedIndex={contentSwitcherIndex}>
			<Switch>
				<div style="display: flex; align-items: center;">
					<Image style="margin-right: 0.5rem;" /> Graphics
				</div>
			</Switch>
			<Switch>
				<div style="display: flex; align-items: center;">
					<TextLongParagraph style="margin-right: 0.5rem;" /> Text
				</div>
			</Switch>
		</ContentSwitcher>
		{#if contentSwitcherIndex === 0}
			<div class="buttons">
				<Button
					kind="tertiary"
					icon={Download}
					on:click={() =>
						downloadDomAsPng('gear-graphics-dom', 'gear-graphics')}
					>Download</Button
				>
			</div>
			<div class="gear-graphics" id="gear-graphics-dom">
				<div class="gear-graphics-header">
					<p><strong>Run ID:</strong> {runID}</p>
					<p>
						<strong
							>{hunt.CreatedBy} | {ezlionWeaponClass[hunt.WeaponTypeID]}</strong
						>
					</p>
				</div>
				<div class="gear-graphics-gear">
					<div class="gear-graphics-weapon">
						<InlineTooltip
							iconSize={'32px'}
							gap={'.5rem'}
							tooltip={ezlionWeaponType[hunt.WeaponTypeID]}
							iconType="component"
							icon={getWeaponIcon(ezlionWeaponType[hunt.WeaponTypeID])}
							text={`${
								hunt.BlademasterWeaponID
									? ezlionWeaponBlademaster[hunt.BlademasterWeaponID]
									: ezlionWeaponGunner[hunt.GunnerWeaponID]
							} (${
								hunt.BlademasterWeaponID
									? hunt.BlademasterWeaponID.toString(16).toUpperCase()
									: hunt.GunnerWeaponID.toString(16).toUpperCase()
							}) | ${ezlionWeaponStyle[hunt.StyleID]}`}
						/>

						<div class="gear-slots">
							<InlineTooltip
								iconSize={'32px'}
								gap={'.5rem'}
								tooltip={'Slot 1'}
								iconType="component"
								icon={getItemIcon('Sigil')}
								text={hunt.WeaponSlot1}
							/>
							<InlineTooltip
								iconSize={'32px'}
								gap={'.5rem'}
								tooltip={'Slot 2'}
								iconType="component"
								icon={getItemIcon('Sigil')}
								text={hunt.WeaponSlot2}
							/>
							<InlineTooltip
								iconSize={'32px'}
								gap={'.5rem'}
								tooltip={'Slot 3'}
								iconType="component"
								icon={getItemIcon('Sigil')}
								text={hunt.WeaponSlot3}
							/>
						</div>
					</div>
					<div class="gear-graphics-armor">
						<InlineTooltip
							iconSize={'32px'}
							tooltip={'Head'}
							gap={'.5rem'}
							iconType="component"
							icon={getArmorIcon('Head')}
							text={`${ezlionArmorHead[hunt.HeadID]} (${hunt.HeadID.toString(16).toUpperCase()})`}
						/>

						<div class="gear-slots">
							<InlineTooltip
								gap={'.5rem'}
								iconSize={'32px'}
								tooltip={'Decorations'}
								iconType="component"
								icon={getItemIcon('Jewel')}
								text={`${getDecoName(
									hunt.HeadSlot1ID,
								)} | ${getDecoName(hunt.HeadSlot2ID)} | ${getDecoName(hunt.HeadSlot3ID)}`}
							/>
						</div>
					</div>
					<div class="gear-graphics-armor">
						<InlineTooltip
							iconSize={'32px'}
							gap={'.5rem'}
							tooltip={'Chest'}
							iconType="component"
							icon={getArmorIcon('Chest')}
							text={`${ezlionArmorHead[hunt.ChestID]} (${hunt.ChestID.toString(16).toUpperCase()})`}
						/>

						<div class="gear-slots">
							<InlineTooltip
								iconSize={'32px'}
								tooltip={'Decorations'}
								gap={'.5rem'}
								iconType="component"
								icon={getItemIcon('Jewel')}
								text={`${getDecoName(
									hunt.ChestSlot1ID,
								)} | ${getDecoName(hunt.ChestSlot2ID)} | ${getDecoName(hunt.ChestSlot3ID)}`}
							/>
						</div>
					</div>
					<div class="gear-graphics-armor">
						<InlineTooltip
							iconSize={'32px'}
							gap={'.5rem'}
							tooltip={'Arms'}
							iconType="component"
							icon={getArmorIcon('Arms')}
							text={`${ezlionArmorHead[hunt.ArmsID]} (${hunt.ArmsID.toString(16).toUpperCase()})`}
						/>

						<div class="gear-slots">
							<InlineTooltip
								iconSize={'32px'}
								gap={'.5rem'}
								tooltip={'Decorations'}
								iconType="component"
								icon={getItemIcon('Jewel')}
								text={`${getDecoName(
									hunt.ArmsSlot1ID,
								)} | ${getDecoName(hunt.ArmsSlot2ID)} | ${getDecoName(hunt.ArmsSlot3ID)}`}
							/>
						</div>
					</div>
					<div class="gear-graphics-armor">
						<InlineTooltip
							tooltip={'Waist'}
							gap={'.5rem'}
							iconSize={'32px'}
							iconType="component"
							icon={getArmorIcon('Waist')}
							text={`${ezlionArmorHead[hunt.WaistID]} (${hunt.WaistID.toString(16).toUpperCase()})`}
						/>

						<div class="gear-slots">
							<InlineTooltip
								tooltip={'Decorations'}
								iconType="component"
								gap={'.5rem'}
								iconSize={'32px'}
								icon={getItemIcon('Jewel')}
								text={`${getDecoName(
									hunt.WaistSlot1ID,
								)} | ${getDecoName(hunt.WaistSlot2ID)} | ${getDecoName(hunt.WaistSlot3ID)}`}
							/>
						</div>
					</div>
					<div class="gear-graphics-armor">
						<InlineTooltip
							tooltip={'Legs'}
							gap={'.5rem'}
							iconSize={'32px'}
							iconType="component"
							icon={getArmorIcon('Legs')}
							text={`${ezlionArmorHead[hunt.LegsID]} (${hunt.LegsID.toString(16).toUpperCase()})`}
						/>

						<div class="gear-slots">
							<InlineTooltip
								tooltip={'Decorations'}
								gap={'.5rem'}
								iconSize={'32px'}
								iconType="component"
								icon={getItemIcon('Jewel')}
								text={`${getDecoName(
									hunt.LegsSlot1ID,
								)} | ${getDecoName(hunt.LegsSlot2ID)} | ${getDecoName(hunt.LegsSlot3ID)}`}
							/>
						</div>
					</div>
					<div class="gear-cuffs">
						<InlineTooltip
							tooltip={'Cuffs'}
							iconSize={'32px'}
							gap={'.5rem'}
							iconType="file"
							icon={getLocationIcon('My Tore')}
							text={`${ezlionItem[hunt.Cuff1ID]} | ${ezlionItem[hunt.Cuff2ID]}`}
						/>
					</div>
				</div>
				<div class="gear-run-date-hash">
					<p>
						<strong>Run Date:</strong>
						{hunt.CreatedAt} | <strong>Run Hash:</strong>
						{hunt.QuestHash}
					</p>
				</div>
				<div class="gear-graphics-skills">
					<div class="gear-zenith-skills"></div>
					<div class="gear-automatic-skills"></div>
					<div class="gear-active-skills"></div>
					<div class="gear-caravan-skills"></div>
					<div class="gear-diva"></div>
					<div class="gear-guild"></div>
					<div class="gear-style-rank-skills"></div>
					<div class="gear-road-duremudira-skills"></div>
				</div>
				<div class="gear-graphics-items">
					<div class="gear-inventory"></div>
					<div class="gear-ammo-pouch"></div>
					<div class="gear-partnya-bag"></div>
					<div class="gear-poogie-item"></div>
				</div>
				<div class="gear-graphics-quest"></div>
				<div class="gear-graphics-courses"></div>
				<div class="gear-graphics-halk"></div>
				<div class="gear-graphics-game"></div>
				<div class="gear-graphics-weapon-specific"></div>
				<div class="gear-graphics-miscellaneous"></div>
			</div>
		{:else}
			<div class="buttons">
				<CopyButton iconDescription={'Copy Text'} text={gearText} />
				<CopyButton
					iconDescription={'Copy Text for Discord'}
					text={`\`\`\`text\n${gearTextForDiscord}\`\`\``}
				/>
			</div>
			<div class="gear-text">
				<pre>{gearText}</pre>
			</div>
		{/if}
	{:else}
		<p>Gear information for Run ID {runID} not found.</p>
	{/if}
</div>

<style lang="scss">
	@use '@carbon/type' as type;

	.number-input-container {
		margin-bottom: 1rem;
	}

	.gear-text > pre {
		width: 100%;
		max-height: 80vh;
		text-wrap: break-word;
		overflow: auto;
		@include type.type-style('body-02');
	}

	.buttons {
		display: flex;
		gap: 1rem;
		margin-top: 1rem;
		margin-bottom: 1rem;
	}

	.gear-graphics {
		display: flex;
		flex-direction: column;
		gap: 1rem;
	}

	.gear-graphics-header > p {
		@include type.type-style('heading-compact-02');
	}

	.gear-graphics-weapon {
		display: flex;
		flex-direction: column;
		gap: 1rem;
	}

	.gear-slots {
		display: flex;
		flex-direction: column;
		gap: 1rem;
		flex-wrap: wrap;
	}
</style>
