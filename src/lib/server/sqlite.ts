// lib/server/sqlite.ts
import Database from 'better-sqlite3';
import {
	questIDWhitelist,
	type DatabaseTableInfo,
	type SpeedrunInfo,
} from '$lib/client/modules/frontier/quest';
import type { PlayerAchievementInfo } from '$lib/client/modules/frontier/achievement';
import type { MezFesInfo } from '$lib/client/modules/frontier/mezfes';

function getDenormalizedSpeedrunTable(
	tableInfo: DatabaseTableInfo[],
): SpeedrunInfo[] {
	// Helper to find rows in a table by name
	const findTableRows = (tableName: string) =>
		tableInfo.find((table) => table.name === tableName)?.rows || [];

	// Extract data from tables
	const activeSkills = findTableRows('ActiveSkills');
	const automaticSkills = findTableRows('AutomaticSkills');
	const caravanSkills = findTableRows('CaravanSkills');
	const playerGear = findTableRows('PlayerGear');
	const quests = findTableRows('Quests');
	const gameFolder = findTableRows('GameFolder');
	const questsActiveFeature = findTableRows('QuestsActiveFeature');
	const questsCourse = findTableRows('QuestsCourse');
	const questsDiva = findTableRows('QuestsDiva');
	const questsGamePatch = findTableRows('QuestsGamePatch');
	const questsGuildPoogie = findTableRows('QuestsGuildPoogie');
	const questsHalk = findTableRows('QuestsHalk');
	const questsOverlayHash = findTableRows('QuestsOverlayHash');
	const questsQuestVariant = findTableRows('QuestsQuestVariant');
	const questsRunBuffs = findTableRows('QuestsRunBuffs');
	const questsToggleMode = findTableRows('QuestsToggleMode');
	const questsWeaponBuffs = findTableRows('QuestsWeaponBuffs');
	const roadDureSkills = findTableRows('RoadDureSkills');
	const styleRankSkills = findTableRows('StyleRankSkills');
	const zenithSkills = findTableRows('ZenithSkills');

	// Join rows to create denormalized `SpeedrunInfo` array
	const speedrunInfo: SpeedrunInfo[] = quests.map((quest) => {
		const runID = quest['RunID'];

		// Find related rows in other tables using `RunID`
		const gear = playerGear.find((row) => row['RunID'] === runID);
		const folder = gameFolder.find((row) => row['RunID'] === runID);
		const activeSkillRow = activeSkills.find((row) => row['RunID'] === runID);
		const autoSkillRow = automaticSkills.find((row) => row['RunID'] === runID);
		const caravanSkillRow = caravanSkills.find((row) => row['RunID'] === runID);
		const questsRunBuffsRow = questsRunBuffs.find(
			(row) => row['RunID'] === runID,
		);
		const overlayHashRow = questsOverlayHash.find(
			(row) => row['RunID'] === runID,
		);
		const questVariantRow = questsQuestVariant.find(
			(row) => row['RunID'] === runID,
		);
		const divaRow = questsDiva.find((row) => row['RunID'] === runID);
		const poogieRow = questsGuildPoogie.find((row) => row['RunID'] === runID);
		const halkRow = questsHalk.find((row) => row['RunID'] === runID);
		const weaponBuffRow = questsWeaponBuffs.find(
			(row) => row['RunID'] === runID,
		);
		const activeFeatureRow = questsActiveFeature.find(
			(row) => row['RunID'] === runID,
		);
		const courseRow = questsCourse.find((row) => row['RunID'] === runID);
		const gamePatchRow = questsGamePatch.find((row) => row['RunID'] === runID);
		const toggleModeRow = questsToggleMode.find(
			(row) => row['RunID'] === runID,
		);
		const roadDureSkillsRow = roadDureSkills.find(
			(row) => row['RunID'] === runID,
		);
		const styleRankSkillsRow = styleRankSkills.find(
			(row) => row['RunID'] === runID,
		);
		const zenithSkillsRow = zenithSkills.find((row) => row['RunID'] === runID);

		// Combine all relevant data into `SpeedrunInfo`
		return {
			// From ActiveSkills
			ActiveSkill1ID: activeSkillRow?.['ActiveSkill1ID'] || 0,
			ActiveSkill2ID: activeSkillRow?.['ActiveSkill2ID'] || 0,
			ActiveSkill3ID: activeSkillRow?.['ActiveSkill3ID'] || 0,
			ActiveSkill4ID: activeSkillRow?.['ActiveSkill4ID'] || 0,
			ActiveSkill5ID: activeSkillRow?.['ActiveSkill5ID'] || 0,
			ActiveSkill6ID: activeSkillRow?.['ActiveSkill6ID'] || 0,
			ActiveSkill7ID: activeSkillRow?.['ActiveSkill7ID'] || 0,
			ActiveSkill8ID: activeSkillRow?.['ActiveSkill8ID'] || 0,
			ActiveSkill9ID: activeSkillRow?.['ActiveSkill9ID'] || 0,
			ActiveSkill10ID: activeSkillRow?.['ActiveSkill10ID'] || 0,
			ActiveSkill11ID: activeSkillRow?.['ActiveSkill11ID'] || 0,
			ActiveSkill12ID: activeSkillRow?.['ActiveSkill12ID'] || 0,
			ActiveSkill13ID: activeSkillRow?.['ActiveSkill13ID'] || 0,
			ActiveSkill14ID: activeSkillRow?.['ActiveSkill14ID'] || 0,
			ActiveSkill15ID: activeSkillRow?.['ActiveSkill15ID'] || 0,
			ActiveSkill16ID: activeSkillRow?.['ActiveSkill16ID'] || 0,
			ActiveSkill17ID: activeSkillRow?.['ActiveSkill17ID'] || 0,
			ActiveSkill18ID: activeSkillRow?.['ActiveSkill18ID'] || 0,
			ActiveSkill19ID: activeSkillRow?.['ActiveSkill19ID'] || 0,
			// From AutomaticSkills
			AutomaticSkill1ID: autoSkillRow?.['AutomaticSkill11ID'] || 0,
			AutomaticSkill2ID: autoSkillRow?.['AutomaticSkill12ID'] || 0,
			AutomaticSkill3ID: autoSkillRow?.['AutomaticSkill13ID'] || 0,
			AutomaticSkill4ID: autoSkillRow?.['AutomaticSkill14ID'] || 0,
			AutomaticSkill5ID: autoSkillRow?.['AutomaticSkill15ID'] || 0,
			AutomaticSkill6ID: autoSkillRow?.['AutomaticSkill16ID'] || 0,
			// From CaravanSkills
			CaravanSkill1ID: caravanSkillRow?.['CaravanSkill1ID'] || 0,
			CaravanSkill2ID: caravanSkillRow?.['CaravanSkill2ID'] || 0,
			CaravanSkill3ID: caravanSkillRow?.['CaravanSkill3ID'] || 0,
			// From GameFolder
			mhfdatHash: folder?.['mhfdatHash'] || '',
			mhfemdHash: folder?.['mhfemdHash'] || '',
			mhfsqdHash: folder?.['mhfsqdHash'] || '',
			mhfinfHash: folder?.['mhfinfHash'] || '',
			mhfodllHash: folder?.['mhfodllHash'] || '',
			mhfohddllHash: folder?.['mhfohddllHash'] || '',
			mhfexeHash: folder?.['mhfexeHash'] || '',
			// From PlayerGear
			PlayerGearHash: gear?.['GearHash'] || '',
			StyleID: gear?.['StyleID'] || 0,
			WeaponTypeID: gear?.['WeaponTypeID'] || 0,
			BlademasterWeaponID: gear?.['BlademasterWeaponID'] || null,
			GunnerWeaponID: gear?.['GunnerWeaponID'] || null,
			WeaponSlot1: gear?.['WeaponSlot1'] || '',
			WeaponSlot2: gear?.['WeaponSlot2'] || '',
			WeaponSlot3: gear?.['WeaponSlot3'] || '',
			HeadID: gear?.['HeadID'] || 0,
			HeadSlot1ID: gear?.['HeadSlot1ID'] || 0,
			HeadSlot2ID: gear?.['HeadSlot2ID'] || 0,
			HeadSlot3ID: gear?.['HeadSlot3ID'] || 0,
			ChestID: gear?.['ChestID'] || 0,
			ChestSlot1ID: gear?.['ChestSlot1ID'] || 0,
			ChestSlot2ID: gear?.['ChestSlot2ID'] || 0,
			ChestSlot3ID: gear?.['ChestSlot3ID'] || 0,
			ArmsID: gear?.['ArmsID'] || 0,
			ArmsSlot1ID: gear?.['ArmsSlot1ID'] || 0,
			ArmsSlot2ID: gear?.['ArmsSlot2ID'] || 0,
			ArmsSlot3ID: gear?.['ArmsSlot3ID'] || 0,
			WaistID: gear?.['WaistID'] || 0,
			WaistSlot1ID: gear?.['WaistSlot1ID'] || 0,
			WaistSlot2ID: gear?.['WaistSlot2ID'] || 0,
			WaistSlot3ID: gear?.['WaistSlot3ID'] || 0,
			LegsID: gear?.['LegsID'] || 0,
			LegsSlot1ID: gear?.['LegsSlot1ID'] || 0,
			LegsSlot2ID: gear?.['LegsSlot2ID'] || 0,
			LegsSlot3ID: gear?.['LegsSlot3ID'] || 0,
			Cuff1ID: gear?.['Cuff1ID'] || 0,
			Cuff2ID: gear?.['Cuff2ID'] || 0,
			DivaSkillID: gear?.['DivaSkillID'] || 0,
			GuildFoodID: gear?.['GuildFoodID'] || 0,
			PoogieItemID: gear?.['PoogieItemID'] || 0,
			PlayerInventoryDictionary: gear?.['PlayerInventoryDictionary'] || '{}',
			PlayerAmmoPouchDictionary: gear?.['PlayerAmmoPouchDictionary'] || '{}',
			PartnyaBagDictionary: gear?.['PartnyaBagDictionary'] || '{}',

			// From Quests
			RunID: quest['RunID'],
			CreatedAt: quest['CreatedAt'],
			CreatedBy: quest['CreatedBy'],
			QuestHash: quest['QuestHash'],
			QuestID: quest['QuestID'],
			TimeLeft: quest['TimeLeft'],
			FinalTimeValue: quest['FinalTimeValue'],
			FinalTimeDisplay: quest['FinalTimeDisplay'],
			ObjectiveTypeID: quest['ObjectiveTypeID'],
			ObjectiveQuantity: quest['ObjectiveQuantity'],
			StarGrade: quest['StarGrade'],
			RankName: quest['RankName'],
			ObjectiveName: quest['ObjectiveName'],
			AttackBuffDictionary: quest['AttackBuffDictionary'] || '{}',
			HitCountDictionary: quest['HitCountDictionary'] || '{}',
			HitsPerSecondDictionary: quest['HitsPerSecondDictionary'] || '{}',
			DamageDealtDictionary: quest['DamageDealtDictionary'] || '{}',
			DamagePerSecondDictionary: quest['DamagePerSecondDictionary'] || '{}',
			AreaChangesDictionary: quest['AreaChangesDictionary'] || '{}',
			CartsDictionary: quest['CartsDictionary'] || '{}',
			HitsTakenBlockedDictionary: quest['HitsTakenBlockedDictionary'] || '{}',
			HitsTakenBlockedPerSecondDictionary:
				quest['HitsTakenBlockedPerSecondDictionary'] || '{}',
			PlayerHPDictionary: quest['PlayerHPDictionary'] || '{}',
			PlayerStaminaDictionary: quest['PlayerStaminaDictionary'] || '{}',
			KeystrokesDictionary: quest['KeystrokesDictionary'] || '{}',
			MouseInputDictionary: quest['MouseInputDictionary'] || '{}',
			GamepadInputDictionary: quest['GamepadInputDictionary'] || '{}',
			ActionsPerMinuteDictionary: quest['ActionsPerMinuteDictionary'] || '{}',
			OverlayModeDictionary: quest['OverlayModeDictionary'] || '{}',
			ActualOverlayMode: quest['ActualOverlayMode'],
			PartySize: quest['PartySize'],
			Monster1HPDictionary: quest['Monster1HPDictionary'] || '{}',
			Monster2HPDictionary: quest['Monster2HPDictionary'] || '{}',
			Monster3HPDictionary: quest['Monster3HPDictionary'] || '{}',
			Monster4HPDictionary: quest['Monster4HPDictionary'] || '{}',
			Monster1AttackMultiplierDictionary:
				quest['Monster1AttackMultiplierDictionary'] || '{}',
			Monster1DefenseRateDictionary:
				quest['Monster1DefenseRateDictionary'] || '{}',
			Monster1SizeMultiplierDictionary:
				quest['Monster1SizeMultiplierDictionary'] || '{}',
			Monster1PoisonThresholdDictionary:
				quest['Monster1PoisonThresholdDictionary'] || '{}',
			Monster1SleepThresholdDictionary:
				quest['Monster1SleepThresholdDictionary'] || '{}',
			Monster1ParalysisThresholdDictionary:
				quest['Monster1ParalysisThresholdDictionary'] || '{}',
			Monster1BlastThresholdDictionary:
				quest['Monster1BlastThresholdDictionary'] || '{}',
			Monster1StunThresholdDictionary:
				quest['Monster1StunThresholdDictionary'] || '{}',
			Monster1PartThresholdDictionary:
				quest['Monster1PartThresholdDictionary'] || '{}',
			Monster2PartThresholdDictionary:
				quest['Monster2PartThresholdDictionary'] || '{}',
			IsHighGradeEdition: quest['IsHighGradeEdition'] === 1,
			RefreshRate: quest['RefreshRate'],
			PartySizeDictionary: quest['PartySizeDictionary'] || '{}',

			// From QuestsActiveFeature
			ActiveFeature: activeFeatureRow?.['ActiveFeature'] || null,
			// From QuestsCourse
			Rights: courseRow?.['Rights'] || null,
			// From QuestsDiva
			DivaSongBuffOn: divaRow?.['DivaSongBuffOn'] || null,
			DivaPrayerGemRedSkill: divaRow?.['DivaPrayerGemRedSkill'] || null,
			DivaPrayerGemRedLevel: divaRow?.['DivaPrayerGemRedLevel'] || null,
			DivaPrayerGemYellowSkill: divaRow?.['DivaPrayerGemYellowSkill'] || null,
			DivaPrayerGemYellowLevel: divaRow?.['DivaPrayerGemYellowLevel'] || null,
			DivaPrayerGemGreenSkill: divaRow?.['DivaPrayerGemGreenSkill'] || null,
			DivaPrayerGemGreenLevel: divaRow?.['DivaPrayerGemGreenLevel'] || null,
			DivaPrayerGemBlueSkill: divaRow?.['DivaPrayerGemBlueSkill'] || null,
			DivaPrayerGemBlueLevel: divaRow?.['DivaPrayerGemBlueLevel'] || null,
			// From QuestsGamePatch
			mhfdatInfo: gamePatchRow?.['mhfdatInfo'] || null,
			mhfemdInfo: gamePatchRow?.['mhfemdInfo'] || null,
			mhfodllInfo: gamePatchRow?.['mhfodllInfo'] || null,
			mhfohddllInfo: gamePatchRow?.['mhfohddllInfo'] || null,
			// From QuestsGuildPoogie
			GuildPoogie1Skill: poogieRow?.['GuildPoogie1Skill'] || null,
			GuildPoogie2Skill: poogieRow?.['GuildPoogie2Skill'] || null,
			GuildPoogie3Skill: poogieRow?.['GuildPoogie3Skill'] || null,
			// From QuestsHalk
			HalkOn: halkRow?.['HalkOn'] || null,
			HalkPotEffectOn: halkRow?.['HalkPotEffectOn'] || null,
			HalkFullness: halkRow?.['HalkFullness'] || null,
			HalkLevel: halkRow?.['HalkLevel'] || null,
			HalkIntimacy: halkRow?.['HalkIntimacy'] || null,
			HalkHealth: halkRow?.['HalkHealth'] || null,
			HalkAttack: halkRow?.['HalkAttack'] || null,
			HalkDefense: halkRow?.['HalkDefense'] || null,
			HalkIntellect: halkRow?.['HalkIntellect'] || null,
			HalkSkill1: halkRow?.['HalkSkill1'] || null,
			HalkSkill2: halkRow?.['HalkSkill2'] || null,
			HalkSkill3: halkRow?.['HalkSkill3'] || null,
			HalkElementNone: halkRow?.['HalkElementNone'] || null,
			HalkFire: halkRow?.['HalkFire'] || null,
			HalkThunder: halkRow?.['HalkThunder'] || null,
			HalkWater: halkRow?.['HalkWater'] || null,
			HalkIce: halkRow?.['HalkIce'] || null,
			HalkDragon: halkRow?.['HalkDragon'] || null,
			HalkSleep: halkRow?.['HalkSleep'] || null,
			HalkParalysis: halkRow?.['HalkParalysis'] || null,
			HalkPoison: halkRow?.['HalkPoison'] || null,
			// From QuestsOverlayHash
			OverlayHash: overlayHashRow?.['OverlayHash'] || null,
			// From QuestsQuestVariant
			QuestVariant1: questVariantRow?.['QuestVariant1'] || null,
			QuestVariant2: questVariantRow?.['QuestVariant2'] || null,
			QuestVariant3: questVariantRow?.['QuestVariant3'] || null,
			QuestVariant4: questVariantRow?.['QuestVariant4'] || null,
			// From QuestsRunBuffs
			RunBuffs: questsRunBuffsRow?.['RunBuffs'] || null,
			RunBuffsTag: questsRunBuffsRow?.['RunBuffsTag'] || null,
			// From QuestsToggleMode
			QuestToggleMode: toggleModeRow?.['QuestToggleMode'] || null,
			// From QuestsWeaponBuffs
			DualSwordsSharpensDictionary:
				weaponBuffRow?.['DualSwordsSharpensDictionary'] || '{}',

			// From RoadDureSkills
			RoadDureSkill1ID: roadDureSkillsRow?.['RoadDureSkill1ID'] || 0,
			RoadDureSkill1Level: roadDureSkillsRow?.['RoadDureSkill1Level'] || 0,
			RoadDureSkill2ID: roadDureSkillsRow?.['RoadDureSkill2ID'] || 0,
			RoadDureSkill2Level: roadDureSkillsRow?.['RoadDureSkill2Level'] || 0,
			RoadDureSkill3ID: roadDureSkillsRow?.['RoadDureSkill3ID'] || 0,
			RoadDureSkill3Level: roadDureSkillsRow?.['RoadDureSkill3Level'] || 0,
			RoadDureSkill4ID: roadDureSkillsRow?.['RoadDureSkill4ID'] || 0,
			RoadDureSkill4Level: roadDureSkillsRow?.['RoadDureSkill4Level'] || 0,
			RoadDureSkill5ID: roadDureSkillsRow?.['RoadDureSkill5ID'] || 0,
			RoadDureSkill5Level: roadDureSkillsRow?.['RoadDureSkill5Level'] || 0,
			RoadDureSkill6ID: roadDureSkillsRow?.['RoadDureSkill6ID'] || 0,
			RoadDureSkill6Level: roadDureSkillsRow?.['RoadDureSkill6Level'] || 0,
			RoadDureSkill7ID: roadDureSkillsRow?.['RoadDureSkill7ID'] || 0,
			RoadDureSkill7Level: roadDureSkillsRow?.['RoadDureSkill7Level'] || 0,
			RoadDureSkill8ID: roadDureSkillsRow?.['RoadDureSkill8ID'] || 0,
			RoadDureSkill8Level: roadDureSkillsRow?.['RoadDureSkill8Level'] || 0,
			RoadDureSkill9ID: roadDureSkillsRow?.['RoadDureSkill9ID'] || 0,
			RoadDureSkill9Level: roadDureSkillsRow?.['RoadDureSkill9Level'] || 0,
			RoadDureSkill10ID: roadDureSkillsRow?.['RoadDureSkill01ID'] || 0,
			RoadDureSkill10Level: roadDureSkillsRow?.['RoadDureSkill01Level'] || 0,
			RoadDureSkill11ID: roadDureSkillsRow?.['RoadDureSkill11ID'] || 0,
			RoadDureSkill11Level: roadDureSkillsRow?.['RoadDureSkill11Level'] || 0,
			RoadDureSkill12ID: roadDureSkillsRow?.['RoadDureSkill12ID'] || 0,
			RoadDureSkill12Level: roadDureSkillsRow?.['RoadDureSkill12Level'] || 0,
			RoadDureSkill13ID: roadDureSkillsRow?.['RoadDureSkill13ID'] || 0,
			RoadDureSkill13Level: roadDureSkillsRow?.['RoadDureSkill13Level'] || 0,
			RoadDureSkill14ID: roadDureSkillsRow?.['RoadDureSkill14ID'] || 0,
			RoadDureSkill14Level: roadDureSkillsRow?.['RoadDureSkill14Level'] || 0,
			RoadDureSkill15ID: roadDureSkillsRow?.['RoadDureSkill15ID'] || 0,
			RoadDureSkill15Level: roadDureSkillsRow?.['RoadDureSkill15Level'] || 0,
			RoadDureSkill16ID: roadDureSkillsRow?.['RoadDureSkill16ID'] || 0,
			RoadDureSkill16Level: roadDureSkillsRow?.['RoadDureSkill16Level'] || 0,
			// From StyleRankSkills
			StyleRankSkill1ID: styleRankSkillsRow?.['StyleRankSkill1ID'] || 0,
			StyleRankSkill2ID: styleRankSkillsRow?.['StyleRankSkill2ID'] || 0,
			// From ZenithSkills
			ZenithSkill1ID: zenithSkillsRow?.['ZenithSkill1ID'] || 0,
			ZenithSkill2ID: zenithSkillsRow?.['ZenithSkill2ID'] || 0,
			ZenithSkill3ID: zenithSkillsRow?.['ZenithSkill3ID'] || 0,
			ZenithSkill4ID: zenithSkillsRow?.['ZenithSkill4ID'] || 0,
			ZenithSkill5ID: zenithSkillsRow?.['ZenithSkill5ID'] || 0,
			ZenithSkill6ID: zenithSkillsRow?.['ZenithSkill6ID'] || 0,
			ZenithSkill7ID: zenithSkillsRow?.['ZenithSkill7ID'] || 0,
		};
	});

	return speedrunInfo;
}

export function streamDatabaseProcessing(
	buffer: Buffer,
	onProgress: (index: number, message: string) => void,
) {
	const tableWhitelist = [
		'ActiveSkills',
		//'AmmoPouch',
		'AutomaticSkills',
		'CaravanSkills',
		'GameFolder',
		'MezFes', // no run id
		//'PartnyaBag',
		'PlayerAchievements',
		'PlayerGear',
		'Quests',
		'QuestsActiveFeature',
		'QuestsCourse',
		'QuestsDiva',
		'QuestsGamePatch',
		'QuestsGuildPoogie',
		'QuestsHalk',
		'QuestsOverlayHash',
		'QuestsQuestVariant',
		'QuestsRunBuffs',
		'QuestsToggleMode',
		'QuestsWeaponBuffs',
		'RoadDureSkills',
		'StyleRankSkills',
		'ZenithSkills',
	];

	const tablesWithRunID = [
		'ActiveSkills',
		//'AmmoPouch',
		'AutomaticSkills',
		'CaravanSkills',
		'GameFolder',
		//'PartnyaBag',
		'PlayerGear',
		'Quests', // already has ammo and partnya fields
		'QuestsActiveFeature',
		'QuestsCourse',
		'QuestsDiva',
		'QuestsGamePatch',
		'QuestsGuildPoogie',
		'QuestsHalk',
		'QuestsOverlayHash',
		'QuestsQuestVariant',
		'QuestsRunBuffs',
		'QuestsToggleMode',
		'QuestsWeaponBuffs',
		'RoadDureSkills',
		'StyleRankSkills',
		'ZenithSkills',
	];

	const currentTableCount = 82;
	const currentIndexCount = 33;
	const currentTriggerCount = 61;
	const latestOverlayHash =
		'C8DD3F7ED3EB52CB2D3067980D87981C7F1B2BE62F48BD778E60855ECAB42CA1';

	// Open database from buffer
	const db = new Database(buffer);

	try {
		// Step 1: Validate database structure
		onProgress(0, 'Validating database structure...');

		const triggers = db
			.prepare("SELECT name FROM sqlite_master WHERE type='trigger'")
			.all();
		const indices = db
			.prepare("SELECT name FROM sqlite_master WHERE type='index'")
			.all();
		const tables = db
			.prepare("SELECT name FROM sqlite_master WHERE type='table'")
			.all();

		// Validation checks
		if (
			triggers.length < currentTriggerCount ||
			indices.length < currentIndexCount ||
			tables.length < currentTableCount
		) {
			throw new Error('Validation failed: Database structure is incomplete.');
		}

		// Step 2: Validate the QuestsOverlayHash table
		onProgress(1, 'Validating QuestsOverlayHash table...');
		const overlayHashResult = db
			.prepare(
				`SELECT OverlayHash FROM QuestsOverlayHash ORDER BY rowid DESC LIMIT 1`,
			)
			.get();

		if (
			!overlayHashResult ||
			overlayHashResult.OverlayHash !== latestOverlayHash
		) {
			throw new Error(
				'Validation failed: OverlayHash does not match expected value.',
			);
		}

		// Step 3: Filter whitelisted tables
		onProgress(2, 'Filtering whitelisted tables...');
		const whitelistedTableInfo = tableWhitelist.map((table) => {
			const rows = db.prepare(`SELECT * FROM ${table}`).all();
			const rowCount = rows.length;

			return {
				name: table,
				rowCount,
				rows,
			};
		});

		// Step 4: Filter rows based on RunID conditions
		onProgress(3, 'Filtering rows based on RunID conditions...');
		// TODO test
		const speedrunRunIDs = db
			.prepare(
				`SELECT RunID
        FROM Quests
        WHERE ActualOverlayMode = 'Speedrun'
        AND PartySize = 1
        AND QuestID IN (${questIDWhitelist.map((q) => q.id).join(',')})
        AND (
            substr(CreatedBy, -7, 4) >= '0.23'
            OR substr(CreatedBy, -7, 1) = '1'
            OR CAST(substr(CreatedBy, -7, 1) AS INTEGER) >= 2
        )`,
			)
			.all()
			.map((row) => row.RunID);

		const runBuffsTagsRunIDs = db
			.prepare(
				`SELECT RunID
				 FROM QuestsRunBuffs
				 WHERE RunBuffsTag IN ('TA', 'FDS', 'FDP', 'FST', 'FCA')`,
			)
			.all()
			.map((row) => row.RunID);

		// RunID values with mhfInfo != 'Unknown' in QuestsGamePatch
		const nonUnknownMhfInfoRunIDs = db
			.prepare(
				`SELECT RunID
				FROM QuestsGamePatch
				WHERE mhfdatInfo != 'Unknown'
				AND mhfemdInfo != 'Unknown'
				AND mhfodllInfo != 'Unknown'
				AND mhfohddllInfo != 'Unknown'`,
			)
			.all()
			.map((row) => row.RunID);

		// Intersect all the lists to get RunIDs that exist in all conditions
		const allRunIDs = [
			speedrunRunIDs,
			nonUnknownMhfInfoRunIDs,
			runBuffsTagsRunIDs,
		];
		const validRunIDs = allRunIDs.reduce((intersection, list) =>
			intersection.filter((id) => list.includes(id)),
		);

		// Filter rows from whitelisted tables based on valid RunIDs
		const filteredTableInfo = whitelistedTableInfo.map((table) => {
			// Only filter tables that have a RunID column
			if (tablesWithRunID.includes(table.name)) {
				const filteredRows = table.rows.filter((row) =>
					validRunIDs.includes(row.RunID),
				);
				return {
					...table,
					rowCount: filteredRows.length,
					rows: filteredRows,
				};
			}

			// Return table as-is if it doesn't require RunID filtering
			return table;
		});

		// Step 5: Setup table results
		onProgress(4, 'Denormalizing tables...');
		const speedrunInfo = getDenormalizedSpeedrunTable(filteredTableInfo);
		const mezFesInfo: MezFesInfo[] =
			filteredTableInfo.find((e) => e.name === 'MezFes')?.rows || [];
		const achievementInfo: PlayerAchievementInfo[] =
			filteredTableInfo.find((e) => e.name === 'PlayerAchievements')?.rows ||
			[];

		// Step 6: Finalizing data
		onProgress(5, 'Finalizing data...');
		db.close();

		return {
			valid: true,
			speedrunInfo: speedrunInfo,
			mezFesInfo: mezFesInfo,
			achievementInfo: achievementInfo,
		};
	} catch (error) {
		db.close();
		return { valid: false, error: error.message };
	}
}
