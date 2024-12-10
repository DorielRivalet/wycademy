// lib/server/sqlite.ts
import Database from 'better-sqlite3';
import { type DatabaseTableInfo } from '$lib/client/modules/frontier/quest';

export function streamDatabaseProcessing(
	buffer: Buffer,
	onProgress: (index: number, message: string) => void,
) {
	const tableWhitelist = [
		'ActiveSkills',
		'AmmoPouch',
		'AutomaticSkills',
		'CaravanSkills',
		'GameFolder',
		'MezFes',
		'PartnyaBag',
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
		'AmmoPouch',
		'AutomaticSkills',
		'CaravanSkills',
		'GameFolder',
		'PartnyaBag',
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

	const currentTableCount = 82;
	const currentIndexCount = 33;
	const currentTriggerCount = 61;
	const latestOverlayHash =
		'C8DD3F7ED3EB52CB2D3067980D87981C7F1B2BE62F48BD778E60855ECAB42CA1';

	const questIDWhitelist: { name: string; id: number }[] = [
		//{ name: 'Keoaruboru', id: 58043 },

		{ name: 'Z4AkuraVashimu', id: 23539 },

		{ name: 'Z4Anorupatisu', id: 23721 },

		{ name: 'Z4Blangonga', id: 23519 },

		{ name: 'Z4DaimyoHermitaur', id: 23479 },

		{ name: 'Z4Doragyurosu', id: 23662 },

		{ name: 'Z4Espinas', id: 23483 },

		{ name: 'Z4Gasurabazura', id: 23671 },

		{ name: 'Z4Giaorugu', id: 23613 },

		{ name: 'Z4Hypnocatrice', id: 23471 },

		{ name: 'Z4Hyujikiki', id: 23609 },

		{ name: 'Z4Inagami', id: 23647 },

		{ name: 'Z4Khezu', id: 23475 },

		{ name: 'Z4Midogaron', id: 23617 },

		{ name: 'Z4Plesioth', id: 23625 },

		{ name: 'Z4Rathalos', id: 23523 },

		{ name: 'Z4Rukodiora', id: 23621 },

		{ name: 'Z4Tigrex', id: 23543 },

		{ name: 'Z4Toridcless', id: 23658 },

		{ name: 'Z4Baruragaru', id: 23716 },

		{ name: 'Z4Bogabadorumu', id: 23708 },

		{ name: 'Z4Gravios', id: 23712 },

		{ name: 'Z4Harudomerugu', id: 55932 },

		{ name: 'Z4TaikunZamuza', id: 55926 },

		{ name: 'LV9999Fatalis', id: 23596 },

		{ name: 'LV9999CrimsonFatalis', id: 23601 },

		{ name: 'LV9999Shantien', id: 23588 },

		{ name: 'LV9999Disufiroa', id: 23592 },

		{ name: 'UpperShitenUnknown', id: 23605 },

		{ name: 'UpperShitenDisufiroa', id: 23603 },

		//{ name: 'LowerShitenUnknown', id: 23604 },

		//{ name: 'LowerShitenDisufiroa', id: 23602 },

		{ name: 'ThirstyPariapuria', id: 55532 },

		{ name: 'RulingGuanzorumu', id: 55529 },

		//{ name: 'RulingGuanzorumu5m', id: 56126 },

		{ name: 'ShiftingMiRu', id: 55531 },

		{ name: 'ShiftingMiRuHistoric', id: 55920 },

		{ name: 'BlinkingNargacugaForest', id: 55534 },

		{ name: 'BlinkingNargacugaHistoric', id: 55922 },

		//{ name: 'BlinkingNargacugaHistoric20m', id: 55921 },

		//{ name: 'BlinkingNargacugaHistoric5m', id: 56130 },

		{ name: 'HowlingZinogreForest', id: 55535 },

		{ name: 'HowlingZinogreHistoric', id: 55919 },

		//{ name: 'HowlingZinogreHistoricRepel', id: 55918 },

		//{ name: 'HowlingZinogreHistoric5m', id: 56131 },

		{ name: 'SparklingZerureusu', id: 55951 },

		//{ name: 'SparklingZerureusuRepel', id: 55950 },

		//{ name: 'SparklingZerureusuEvent', id: 56106 },

		//{ name: 'SparklingZerureusu5m', id: 56127 },

		{ name: 'ArrogantDuremudira', id: 23649 },

		//{ name: 'ArrogantDuremudiraRepel', id: 23648 },

		{ name: 'StarvingDeviljhoArena', id: 55530 },

		{ name: 'StarvingDeviljhoHistoric', id: 55917 },

		//{ name: 'StarvingDeviljhoHistoric20m', id: 55916 },

		{ name: 'BombardierBogabadorumu', id: 55949 },

		//{ name: 'BombardierBogabadorumuRepel', id: 55948 },

		//{ name: 'BombardierBogabadorumu5m', id: 56128 },

		//{ name: 'BombardierBogabadorumu3m', id: 56152 },

		{ name: 'BurningFreezingElzelionTower', id: 55714 },

		{ name: 'BurningFreezingElzelionHistoric', id: 55936 },

		//{ name: 'BurningFreezingElzelionHistoricRepel', id: 55935 },

		//{ name: 'BurningFreezingElzelionHistoric5m', id: 56133 },

		//{ name: 'BurningFreezingElzelionTower3m', id: 56153 },

		//{ name: 'BurningFreezingElzelionTowerUltimate', id: 56158 },

		//	{ name: 'VeggieElderLove', id: 53189 },

		//	{ name: 'ProducerGogomoaLR', id: 50748 },

		//	{ name: 'ProducerGogomoaHR', id: 53032 },

		//	{ name: 'FourHeavenlyKingMale1', id: 40219 },

		//	{ name: 'FourHeavenlyKingMale2', id: 40220 },

		//	{ name: 'FourHeavenlyKingFemale1', id: 40237 },

		//{ name: 'FourHeavenlyKingFemale2', id: 40238 },

		// { name: 'HatsuneMiku', id: 40230 },

		// { name: 'PSO2', id: 40239 },

		// { name: 'Megaman', id: 40240 },

		// { name: 'Higanjima', id: 40217 },

		// { name: 'MHFQ', id: 53209 },

		// { name: 'HugePlesioth', id: 53028 },

		// { name: 'SunglassesKutKu', id: 53139 },

		// { name: 'CongalalaCure', id: 50365 },

		// { name: 'JunglePuzzle', id: 53208 },

		// { name: 'MultiplayerRoad', id: 23527 },

		// { name: 'FirstDistrictDuremudira', id: 21731 },

		{ name: 'SecondDistrictDuremudira', id: 21746 },

		//{ name: 'TwinheadRajangsHistoric', id: 55937 },

		// { name: 'NuclearGypceros', id: 63390 },

		// { name: 'MosswineRevenge', id: 50143 },

		// { name: 'MosswineDuel', id: 62793 },

		// { name: 'MosswineLastStand', id: 53323 },

		// { name: 'HalloweenSpeedster', id: 53325 },

		// { name: 'VR', id: 53232 },
	];

	// TODO MezFesSRankNyanrendo = 10340;

	// MezFesSRankDokkanBattleCats = 110750;

	// MezFesSRankPanicHoney = 100;

	// MezFesSRankGuukuScoop = 106980;

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
		const speedrunRunIDs = db
			.prepare(
				`SELECT RunID
				 FROM Quests
				 WHERE ActualOverlayMode = 'Speedrun'
				 AND PartySize = 1
				 AND QuestID IN (${questIDWhitelist.map((q) => q.id).join(',')})`,
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
		const allRunIDs = [speedrunRunIDs, nonUnknownMhfInfoRunIDs];
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

		// Step 5: Finalizing data
		onProgress(4, 'Finalizing data...');
		db.close();

		const result: DatabaseTableInfo[] = filteredTableInfo;

		return { valid: true, tableInfo: result };
	} catch (error) {
		db.close();
		return { valid: false, error: error.message };
	}
}
