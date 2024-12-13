import type { FrontierMonsterNameExpanded } from './types';

// lib/client/modules/frontier/quest.ts
export interface DatabaseTableInfo {
	name: string;
	rowCount?: number;
	rows: unknown[];
}

// Enums with bitwise flags in TypeScript
export enum QuestVariant2 {
	None = 0,
	Level1 = 1,
	DisableHalkPotionCourseAttack = 2,
	DisableHalkPoogieCuff = 4,
	Timer = 8,
	DisableActiveFeature = 16,
	FixedDifficulty = 32,
	/** no secret tech, transcend, halk pot, course atk, prayer gem, twin hiden */
	Level9999 = 64,
	/** no rasta, partner, partnya, halk, soul revival or similar, halk pot, diva skill, diva prayer gem */
	Road = 128,
	All = 255,
}

export enum QuestVariant3 {
	None = 0,
	DisableRewardBonus = 1,
	RequireGRank = 2,
	NoSimpleMode = 4,
	/** no transcend? no diva skills */
	NoGPSkills = 8,
	Zenith = 16,
	/** Interception */
	DivaDefense = 32,
	UNK3Course = 64,
	DisabledSigil = 128,
	All = 255,
}

export class QuestRestriction {
	halkPot: boolean = false;
	courseAttack: boolean = false;
	halk: boolean = false;
	poogieCuff: boolean = false;
	activeFeature: boolean = false;
	secretTechnique: boolean = false;
	transcend: boolean = false;
	divaPrayerGem: boolean = false;
	twinHiden: boolean = false;
	rasta: boolean = false;
	partner: boolean = false;
	partnya: boolean = false;
	soulRevival: boolean = false;
	divaSkill: boolean = false;
	questBonusReward: boolean = false;
	simpleMode: boolean = false;
	gpSkill: boolean = false;
	sigil: boolean = false;
}

export function getQuestRestrictions(
	questVariant2: QuestVariant2 | number | null,
	questVariant3: QuestVariant3 | number | null,
): QuestRestriction {
	const restrictions = new QuestRestriction();

	if (questVariant2 === null || questVariant3 === null) {
		return restrictions;
	}

	if (questVariant2 & QuestVariant2.DisableHalkPotionCourseAttack) {
		restrictions.halkPot = true;
		restrictions.courseAttack = true;
	}

	if (questVariant2 & QuestVariant2.DisableHalkPoogieCuff) {
		restrictions.halk = true;
		restrictions.poogieCuff = true;
	}

	if (questVariant2 & QuestVariant2.DisableActiveFeature) {
		restrictions.activeFeature = true;
	}

	if (questVariant2 & QuestVariant2.Level9999) {
		restrictions.secretTechnique = true;
		restrictions.transcend = true;
		restrictions.halkPot = true;
		restrictions.courseAttack = true;
		restrictions.divaPrayerGem = true;
		restrictions.twinHiden = true;
	}

	if (questVariant2 & QuestVariant2.Road) {
		restrictions.rasta = true;
		restrictions.partner = true;
		restrictions.partnya = true;
		restrictions.halk = true;
		restrictions.soulRevival = true;
		restrictions.halkPot = true;
		restrictions.divaSkill = true;
		restrictions.divaPrayerGem = true;
	}

	if (questVariant3 & QuestVariant3.DisableRewardBonus) {
		restrictions.questBonusReward = true;
	}

	if (questVariant3 & QuestVariant3.NoSimpleMode) {
		restrictions.simpleMode = true;
	}

	if (questVariant3 & QuestVariant3.NoGPSkills) {
		restrictions.transcend = true;
		restrictions.gpSkill = true;
		restrictions.divaSkill = true;
	}

	if (questVariant3 & QuestVariant3.DisabledSigil) {
		restrictions.sigil = true;
	}

	return restrictions;
}

export interface SpeedrunInfo {
	ActiveSkill1ID: number; // from ActiveSkills table
	ActiveSkill2ID: number; // from ActiveSkills table
	ActiveSkill3ID: number; // from ActiveSkills table
	ActiveSkill4ID: number; // from ActiveSkills table
	ActiveSkill5ID: number; // from ActiveSkills table
	ActiveSkill6ID: number; // from ActiveSkills table
	ActiveSkill7ID: number; // from ActiveSkills table
	ActiveSkill8ID: number; // from ActiveSkills table
	ActiveSkill9ID: number; // from ActiveSkills table
	ActiveSkill10ID: number; // from ActiveSkills table
	ActiveSkill11ID: number; // from ActiveSkills table
	ActiveSkill12ID: number; // from ActiveSkills table
	ActiveSkill13ID: number; // from ActiveSkills table
	ActiveSkill14ID: number; // from ActiveSkills table
	ActiveSkill15ID: number; // from ActiveSkills table
	ActiveSkill16ID: number; // from ActiveSkills table
	ActiveSkill17ID: number; // from ActiveSkills table
	ActiveSkill18ID: number; // from ActiveSkills table
	ActiveSkill19ID: number; // from ActiveSkills table
	AutomaticSkill1ID: number; // from AutomaticSkills table
	AutomaticSkill2ID: number; // from AutomaticSkills table
	AutomaticSkill3ID: number; // from AutomaticSkills table
	AutomaticSkill4ID: number; // from AutomaticSkills table
	AutomaticSkill5ID: number; // from AutomaticSkills table
	AutomaticSkill6ID: number; // from AutomaticSkills table
	CaravanSkill1ID: number; // from CaravanSkills table
	CaravanSkill2ID: number; // from CaravanSkills table
	CaravanSkill3ID: number; // from CaravanSkills table
	mhfdatHash: string; // from GameFolder table
	mhfemdHash: string; // from GameFolder table
	mhfsqdHash: string; // from GameFolder table
	mhfinfHash: string; // from GameFolder table
	mhfodllHash: string; // from GameFolder table
	mhfohddllHash: string; // from GameFolder table
	mhfexeHash: string; // from GameFolder table
	PlayerGearHash: string; // from PlayerGear table
	StyleID: number; // eg extreme. From PlayerGear table
	WeaponTypeID: number; // from PlayerGear table
	BlademasterWeaponID: number | null; // from PlayerGear table
	GunnerWeaponID: number | null; // from PlayerGear table
	WeaponSlot1: string; // from PlayerGear table
	WeaponSlot2: string; // from PlayerGear table
	WeaponSlot3: string; // from PlayerGear table
	HeadID: number; // from PlayerGear table
	HeadSlot1ID: number; // from PlayerGear table
	HeadSlot2ID: number; // from PlayerGear table
	HeadSlot3ID: number; // from PlayerGear table
	ChestID: number; // from PlayerGear table
	ChestSlot1ID: number; // from PlayerGear table
	ChestSlot2ID: number; // from PlayerGear table
	ChestSlot3ID: number; // from PlayerGear table
	ArmsID: number; // from PlayerGear table
	ArmsSlot1ID: number; // from PlayerGear table
	ArmsSlot2ID: number; // from PlayerGear table
	ArmsSlot3ID: number; // from PlayerGear table
	WaistID: number; // from PlayerGear table
	WaistSlot1ID: number; // from PlayerGear table
	WaistSlot2ID: number; // from PlayerGear table
	WaistSlot3ID: number; // from PlayerGear table
	LegsID: number; // from PlayerGear table
	LegsSlot1ID: number; // from PlayerGear table
	LegsSlot2ID: number; // from PlayerGear table
	LegsSlot3ID: number; // from PlayerGear table
	Cuff1ID: number; // from PlayerGear table
	Cuff2ID: number; // from PlayerGear table
	DivaSkillID: number; // from PlayerGear table
	GuildFoodID: number; // from PlayerGear table
	PoogieItemID: number; // from PlayerGear table
	PlayerInventoryDictionary: string; // {[index: number]: { [index: number]: number }[]}[]; time, item id, item quantity. from PlayerGear table
	PlayerAmmoPouchDictionary: string; //{[index: number]: { [index: number]: number }[]}[];  time, item id, item quantity. from PlayerGear table
	PartnyaBagDictionary: string; //{[index: number]: { [index: number]: number }[]}[];  time, item id, item quantity. from PlayerGear table
	RunID: number; // from Quests table
	CreatedAt: string; // from Quests table
	CreatedBy: string; // from Quests table
	QuestHash: string; // from Quests table
	QuestID: number; // from Quests table
	TimeLeft: number; // from Quests table
	FinalTimeValue: number; // from Quests table
	FinalTimeDisplay: string; // from Quests table
	ObjectiveTypeID: number; // from Quests table
	ObjectiveQuantity: number; // from Quests table
	StarGrade: number; // from Quests table
	RankName: string; // from Quests table
	ObjectiveName: string; // from Quests table
	AttackBuffDictionary: string; //{ [index: number]: number }[]; // time, value. From Quests table
	HitCountDictionary: string; //{ [index: number]: number }[]; // from Quests table
	HitsPerSecondDictionary: string; //{ [index: number]: number }[]; // from Quests table
	DamageDealtDictionary: string; //{ [index: number]: number }[]; // from Quests table
	DamagePerSecondDictionary: string; //{ [index: number]: number }[]; // from Quests table
	AreaChangesDictionary: string; //{ [index: number]: number }[]; // from Quests table
	CartsDictionary: string; //{ [index: number]: number }[]; // from Quests table
	HitsTakenBlockedDictionary: string; //{[index: number]: { [index: number]: number };}[]; // time, area, blocks. From Quests table
	HitsTakenBlockedPerSecondDictionary: string; //{ [index: number]: number }[]; // from Quests table
	PlayerHPDictionary: string; //{ [index: number]: number }[]; // from Quests table
	PlayerStaminaDictionary: string; //{ [index: number]: number }[]; // from Quests table
	KeystrokesDictionary: string; //{ [index: number]: string }[]; // from Quests table
	MouseInputDictionary: string; //{ [index: number]: string }[]; // from Quests table
	GamepadInputDictionary: string; //{ [index: number]: string }[]; // from Quests table
	ActionsPerMinuteDictionary: string; //{ [index: number]: number }[]; // from Quests table
	OverlayModeDictionary: string; //{ [index: number]: string }[]; // from Quests table
	ActualOverlayMode: string; // from Quests table
	PartySize: number; // from Quests table
	Monster1HPDictionary: string; //{ [index: number]: { [index: number]: number } }[]; // time, id, value. From Quests table
	Monster2HPDictionary: string; //{ [index: number]: { [index: number]: number } }[]; // from Quests table
	Monster3HPDictionary: string; //{ [index: number]: { [index: number]: number } }[]; // from Quests table
	Monster4HPDictionary: string; //{ [index: number]: { [index: number]: number } }[]; // from Quests table
	Monster1AttackMultiplierDictionary: string; //{[index: number]: { [index: number]: number };}[]; // from Quests table
	Monster1DefenseRateDictionary: string; //{[index: number]: { [index: number]: number };}[]; // from Quests table
	Monster1SizeMultiplierDictionary: string; //{[index: number]: { [index: number]: number };}[]; // from Quests table
	Monster1PoisonThresholdDictionary: string; //{[index: number]: { [index: number]: number };}[]; // from Quests table
	Monster1SleepThresholdDictionary: string; //{[index: number]: { [index: number]: number };}[]; // from Quests table
	Monster1ParalysisThresholdDictionary: string; //{[index: number]: { [index: number]: number };}[]; // from Quests table
	Monster1BlastThresholdDictionary: string; //{[index: number]: { [index: number]: number };}[]; // from Quests table
	Monster1StunThresholdDictionary: string; //{[index: number]: { [index: number]: number };}[]; // from Quests table
	Monster1PartThresholdDictionary: string;
	// {
	// 	[index: number]: {
	// 		[index: number]: [
	// 			number,
	// 			number,
	// 			number,
	// 			number,
	// 			number,
	// 			number,
	// 			number,
	// 			number,
	// 			number,
	// 			number,
	// 		];
	// 	};
	// }[]; // time, id, parts. From Quests table
	Monster2PartThresholdDictionary: string;
	//{
	// 	[index: number]: {
	// 		[index: number]: [
	// 			number,
	// 			number,
	// 			number,
	// 			number,
	// 			number,
	// 			number,
	// 			number,
	// 			number,
	// 			number,
	// 			number,
	// 		];
	// 	};
	// }[]; // from Quests table
	IsHighGradeEdition: boolean; // from Quests table
	RefreshRate: number; // from Quests table
	PartySizeDictionary: string; //{ [index: number]: number }[]; // time, value. From Quests table.
	ActiveFeature: number | null; // bitfield. from QuestsActiveFeature table
	Rights: number | null; // from QuestsCourse table
	DivaSongBuffOn: boolean | null; // from QuestsDiva table
	DivaPrayerGemRedSkill: number | null; // from QuestsDiva table
	DivaPrayerGemRedLevel: number | null; // from QuestsDiva table
	DivaPrayerGemYellowSkill: number | null; // from QuestsDiva table
	DivaPrayerGemYellowLevel: number | null; // from QuestsDiva table
	DivaPrayerGemGreenSkill: number | null; // from QuestsDiva table
	DivaPrayerGemGreenLevel: number | null; // from QuestsDiva table
	DivaPrayerGemBlueSkill: number | null; // from QuestsDiva table
	DivaPrayerGemBlueLevel: number | null; // from QuestsDiva table
	mhfdatInfo: string | null; // from QuestsGamePatch table
	mhfemdInfo: string | null; // from QuestsGamePatch table
	mhfodllInfo: string | null; // from QuestsGamePatch table
	mhfohddllInfo: string | null; // from QuestsGamePatch table
	GuildPoogie1Skill: number | null; // from QuestsGuildPoogie table
	GuildPoogie2Skill: number | null; // from QuestsGuildPoogie table
	GuildPoogie3Skill: number | null; // from QuestsGuildPoogie table
	HalkOn: boolean | null; // from QuestsHalk table
	HalkPotEffectOn: boolean | null; // from QuestsHalk table
	HalkFullness: number | null; // from QuestsHalk table
	HalkLevel: number | null; // from QuestsHalk table
	HalkIntimacy: number | null; // from QuestsHalk table
	HalkHealth: number | null; // from QuestsHalk table
	HalkAttack: number | null; // from QuestsHalk table
	HalkDefense: number | null; // from QuestsHalk table
	HalkIntellect: number | null; // from QuestsHalk table
	HalkSkill1: number | null; // from QuestsHalk table
	HalkSkill2: number | null; // from QuestsHalk table
	HalkSkill3: number | null; // from QuestsHalk table
	HalkElementNone: number | null; // from QuestsHalk table
	HalkFire: number | null; // from QuestsHalk table
	HalkThunder: number | null; // from QuestsHalk table
	HalkWater: number | null; // from QuestsHalk table
	HalkIce: number | null; // from QuestsHalk table
	HalkDragon: number | null; // from QuestsHalk table
	HalkSleep: number | null; // from QuestsHalk table
	HalkParalysis: number | null; // from QuestsHalk table
	HalkPoison: number | null; // from QuestsHalk table
	OverlayHash: string | null; // from QuestsOverlayHash table
	QuestVariant1: number | null; // from QuestsQuestVariant table
	QuestVariant2: number | null; // from QuestsQuestVariant table
	QuestVariant3: number | null; // from QuestsQuestVariant table
	QuestVariant4: number | null; // from QuestsQuestVariant table
	RunBuffs: number | null; // from QuestsRunBuffs table
	RunBuffsTag: RunBuffsTag; // from QuestsRunBuffs table
	QuestToggleMode: number | null; // from QuestsToggleMode table
	DualSwordsSharpensDictionary: string; //{ [index: number]: number }[] | null; // from QuestsWeaponBuffs table
	RoadDureSkill1ID: number; // from RoadDureSkills table
	RoadDureSkill1Level: number; // from RoadDureSkills table
	RoadDureSkill2ID: number; // from RoadDureSkills table
	RoadDureSkill2Level: number; // from RoadDureSkills table
	RoadDureSkill3ID: number; // from RoadDureSkills table
	RoadDureSkill3Level: number; // from RoadDureSkills table
	RoadDureSkill4ID: number; // from RoadDureSkills table
	RoadDureSkill4Level: number; // from RoadDureSkills table
	RoadDureSkill5ID: number; // from RoadDureSkills table
	RoadDureSkill5Level: number; // from RoadDureSkills table
	RoadDureSkill6ID: number; // from RoadDureSkills table
	RoadDureSkill6Level: number; // from RoadDureSkills table
	RoadDureSkill7ID: number; // from RoadDureSkills table
	RoadDureSkill7Level: number; // from RoadDureSkills table
	RoadDureSkill8ID: number; // from RoadDureSkills table
	RoadDureSkill8Level: number; // from RoadDureSkills table
	RoadDureSkill9ID: number; // from RoadDureSkills table
	RoadDureSkill9Level: number; // from RoadDureSkills table
	RoadDureSkill10ID: number; // from RoadDureSkills table
	RoadDureSkill10Level: number; // from RoadDureSkills table
	RoadDureSkill11ID: number; // from RoadDureSkills table
	RoadDureSkill11Level: number; // from RoadDureSkills table
	RoadDureSkill12ID: number; // from RoadDureSkills table
	RoadDureSkill12Level: number; // from RoadDureSkills table
	RoadDureSkill13ID: number; // from RoadDureSkills table
	RoadDureSkill13Level: number; // from RoadDureSkills table
	RoadDureSkill14ID: number; // from RoadDureSkills table
	RoadDureSkill14Level: number; // from RoadDureSkills table
	RoadDureSkill15ID: number; // from RoadDureSkills table
	RoadDureSkill15Level: number; // from RoadDureSkills table
	RoadDureSkill16ID: number; // from RoadDureSkills table
	RoadDureSkill16Level: number; // from RoadDureSkills table
	StyleRankSkill1ID: number; // from StyleRankSkills table
	StyleRankSkill2ID: number; // from StyleRankSkills table
	ZenithSkill1ID: number; // from ZenithSkills table
	ZenithSkill2ID: number; // from ZenithSkills table
	ZenithSkill3ID: number; // from ZenithSkills table
	ZenithSkill4ID: number; // from ZenithSkills table
	ZenithSkill5ID: number; // from ZenithSkills table
	ZenithSkill6ID: number; // from ZenithSkills table
	ZenithSkill7ID: number; // from ZenithSkills table
}

export type RunBuffsTag = 'TA' | 'None' | 'FDP' | 'FDS' | 'FCA' | number | null;

export interface SharedQuestData {
	id?: string; // Generated unique ID
	tables: DatabaseTableInfo[];
	createdAt: Date;
	expiresAt: Date;
}

// Date"	TEXT NOT NULL DEFAULT '',
//YouTubeID"	TEXT DEFAULT 'dQw4w9WgXcQ',
// ObjectiveImage"	TEXT NOT NULL DEFAULT '',

export const questIDWhitelist: {
	name: string;
	id: number;
	monster: FrontierMonsterNameExpanded;
}[] = [
	//{ name: 'Keoaruboru', id: 58043 },
	{
		name: 'SecondDistrictDuremudira',
		id: 21746,
		monster: 'Duremudira',
	},
	{ name: 'Z4AkuraVashimu', id: 23539, monster: 'Zenith Akura Vashimu' },

	{ name: 'Z4Anorupatisu', id: 23721, monster: 'Zenith Anorupatisu' },

	{ name: 'Z4Blangonga', id: 23519, monster: 'Zenith Blangonga' },

	{ name: 'Z4DaimyoHermitaur', id: 23479, monster: 'Zenith Daimyo Hermitaur' },

	{ name: 'Z4Doragyurosu', id: 23662, monster: 'Zenith Doragyurosu' },

	{ name: 'Z4Espinas', id: 23483, monster: 'Zenith Espinas' },

	{ name: 'Z4Gasurabazura', id: 23671, monster: 'Zenith Gasurabazura' },

	{ name: 'Z4Giaorugu', id: 23613, monster: 'Zenith Giaorugu' },

	{ name: 'Z4Hypnocatrice', id: 23471, monster: 'Zenith Hypnocatrice' },

	{ name: 'Z4Hyujikiki', id: 23609, monster: 'Zenith Hyujikiki' },

	{ name: 'Z4Inagami', id: 23647, monster: 'Zenith Inagami' },

	{ name: 'Z4Khezu', id: 23475, monster: 'Zenith Khezu' },

	{ name: 'Z4Midogaron', id: 23617, monster: 'Zenith Midogaron' },

	{ name: 'Z4Plesioth', id: 23625, monster: 'Zenith Plesioth' },

	{ name: 'Z4Rathalos', id: 23523, monster: 'Zenith Rathalos' },

	{ name: 'Z4Rukodiora', id: 23621, monster: 'Zenith Rukodiora' },

	{ name: 'Z4Tigrex', id: 23543, monster: 'Zenith Tigrex' },

	{ name: 'Z4Toridcless', id: 23658, monster: 'Zenith Toridcless' },

	{ name: 'Z4Baruragaru', id: 23716, monster: 'Zenith Baruragaru' },

	{ name: 'Z4Bogabadorumu', id: 23708, monster: 'Bogabadorumu' },

	{ name: 'Z4Gravios', id: 23712, monster: 'Zenith Gravios' },

	{ name: 'Z4Harudomerugu', id: 55932, monster: 'Zenith Harudomerugu' },

	{ name: 'Z4TaikunZamuza', id: 55926, monster: 'Zenith Taikun Zamuza' },

	{ name: 'LV9999Fatalis', id: 23596, monster: 'Conquest Fatalis' },

	{
		name: 'LV9999CrimsonFatalis',
		id: 23601,
		monster: 'Conquest Crimson Fatalis',
	},

	{ name: 'LV9999Shantien', id: 23588, monster: 'Conquest Shantien' },

	{ name: 'LV9999Disufiroa', id: 23592, monster: 'Disufiroa' }, // TODO

	{ name: 'UpperShitenUnknown', id: 23605, monster: 'Shiten Unknown' },

	{
		name: 'UpperShitenDisufiroa',
		id: 23603,
		monster: 'Shiten Disufiroa',
	},

	//{ name: 'LowerShitenUnknown', id: 23604 },

	//{ name: 'LowerShitenDisufiroa', id: 23602 },

	{ name: 'ThirstyPariapuria', id: 55532, monster: 'Supremacy Pariapuria' }, // TODO

	{ name: 'RulingGuanzorumu', id: 55529, monster: 'Ruling Guanzorumu' },

	//{ name: 'RulingGuanzorumu5m', id: 56126 },

	{ name: 'ShiftingMiRu', id: 55531, monster: 'Shifting Mi Ru' },

	{
		name: 'ShiftingMiRuHistoric',
		id: 55920,
		monster: 'Shifting Mi Ru',
	},

	{
		name: 'BlinkingNargacugaForest',
		id: 55534,
		monster: 'Blinking Nargacuga',
	},

	{
		name: 'BlinkingNargacugaHistoric',
		id: 55922,
		monster: 'Blinking Nargacuga',
	},

	//{ name: 'BlinkingNargacugaHistoric20m', id: 55921 },

	//{ name: 'BlinkingNargacugaHistoric5m', id: 56130 },

	{
		name: 'HowlingZinogreForest',
		id: 55535,
		monster: 'Howling Zinogre',
	},

	{
		name: 'HowlingZinogreHistoric',
		id: 55919,
		monster: 'Howling Zinogre',
	},

	//{ name: 'HowlingZinogreHistoricRepel', id: 55918 },

	//{ name: 'HowlingZinogreHistoric5m', id: 56131 },

	{ name: 'SparklingZerureusu', id: 55951, monster: 'Sparkling Zerureusu' },

	//{ name: 'SparklingZerureusuRepel', id: 55950 },

	//{ name: 'SparklingZerureusuEvent', id: 56106 },

	//{ name: 'SparklingZerureusu5m', id: 56127 },

	{ name: 'ArrogantDuremudira', id: 23649, monster: 'Arrogant Duremudira' },

	//{ name: 'ArrogantDuremudiraRepel', id: 23648 },

	{
		name: 'StarvingDeviljhoArena',
		id: 55530,
		monster: 'Golden Deviljho',
	},

	{
		name: 'StarvingDeviljhoHistoric',
		id: 55917,
		monster: 'Golden Deviljho',
	},

	//{ name: 'StarvingDeviljhoHistoric20m', id: 55916 },

	{
		name: 'BombardierBogabadorumu',
		id: 55949,
		monster: 'Bombardier Bogabadorumu',
	},

	//{ name: 'BombardierBogabadorumuRepel', id: 55948 },

	//{ name: 'BombardierBogabadorumu5m', id: 56128 },

	//{ name: 'BombardierBogabadorumu3m', id: 56152 },

	{
		name: 'BurningFreezingElzelionTower',
		id: 55714,
		monster: 'Burning Freezing Elzelion',
	},

	{
		name: 'BurningFreezingElzelionHistoric',
		id: 55936,
		monster: 'Burning Freezing Elzelion',
	},

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

	//{ name: 'TwinheadRajangsHistoric', id: 55937 },

	// { name: 'NuclearGypceros', id: 63390 },

	// { name: 'MosswineRevenge', id: 50143 },

	// { name: 'MosswineDuel', id: 62793 },

	// { name: 'MosswineLastStand', id: 53323 },

	// { name: 'HalloweenSpeedster', id: 53325 },

	// { name: 'VR', id: 53232 },
];
