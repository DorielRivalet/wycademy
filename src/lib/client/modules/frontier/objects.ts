/*
 * © 2023 Doriel Rivalet
 * Use of this source code is governed by a MIT license that can be
 * found in the LICENSE file.
 */

// if bitfields are not needed, make an object instead.

import type {
	DropdownItemOption,
	FrontierAilment,
	FrontierArmor,
	FrontierArmorClass,
	FrontierArmorGRLevel,
	FrontierArmorLevel,
	FrontierArmorType,
	FrontierBento,
	FrontierBowArcShot,
	FrontierBowCharge,
	FrontierBowChargeLevel,
	FrontierBowgunAttackLevel,
	FrontierBowgunRecoil,
	FrontierBowgunReloadSpeed,
	FrontierBowgunScope,
	FrontierElement,
	FrontierElementMultiplier,
	FrontierEquipmentDecorations,
	FrontierEquipmentRank,
	FrontierEquipmentSkillPoints,
	FrontierGunlanceShell,
	FrontierGunlanceShellLevel,
	FrontierHeavyBowgunUpgrade,
	FrontierHuntingHornWeaponNote,
	FrontierItemColor,
	FrontierItemDecoration,
	FrontierItemRankType,
	FrontierItemSigil,
	FrontierItemType,
	FrontierLightBowgunUpgrade,
	FrontierMotionValueSection,
	FrontierMotionValues,
	FrontierRarity,
	FrontierSlot,
	FrontierStatus,
	FrontierSwitchAxeFPhial,
	FrontierWeapon,
	FrontierWeaponLength,
	FrontierWeaponSharpness,
	FrontierWeaponType,
	TagColor,
} from './types';
import GreatSwordIcon from '$lib/client/components/frontier/icon/weapon/Great_Sword_Icon_White5.svelte';
import LongSwordIcon from '$lib/client/components/frontier/icon/weapon/Long_Sword_Icon_White4.svelte';
import DualSwordsIcon from '$lib/client/components/frontier/icon/weapon/Dual_Blades_Icon_White4.svelte';
import SwordAndShieldIcon from '$lib/client/components/frontier/icon/weapon/Sword_and_Shield_Icon_White.svelte';
import GunlanceIcon from '$lib/client/components/frontier/icon/weapon/Gunlance_Icon_White4.svelte';
import LanceIcon from '$lib/client/components/frontier/icon/weapon/Lance_Icon_White5.svelte';
import HammerIcon from '$lib/client/components/frontier/icon/weapon/Hammer_Icon_White2.svelte';
import HuntingHornIcon from '$lib/client/components/frontier/icon/weapon/Hunting_Horn_Icon_White4.svelte';
import LightBowgunIcon from '$lib/client/components/frontier/icon/weapon/Light_Bowgun_Icon_White2.svelte';
import HeavyBowgunIcon from '$lib/client/components/frontier/icon/weapon/Heavy_Bowgun_Icon_White2.svelte';
import BowIcon from '$lib/client/components/frontier/icon/weapon/Bow_Icon_White4.svelte';
import TonfaIcon from '$lib/client/components/frontier/icon/weapon/Tonfa_Icon_White.svelte';
import SwitchAxeFIcon from '$lib/client/components/frontier/icon/weapon/Switch_Axe_Icon_White4.svelte';
import MagnetSpikeIcon from '$lib/client/components/frontier/icon/weapon/Magnet_Spike_Icon_White.svelte';

import ArmorHelmetIcon from '$lib/client/components/frontier/icon/armor/Helmet_Icon_White.svelte';
import ArmorChestIcon from '$lib/client/components/frontier/icon/armor/Chest_Icon_White.svelte';
import ArmorArmsIcon from '$lib/client/components/frontier/icon/armor/Arm_Icon_White.svelte';
import ArmorWaistIcon from '$lib/client/components/frontier/icon/armor/Waist_Icon_White.svelte';
import ArmorLegsIcon from '$lib/client/components/frontier/icon/armor/Leg_Icon_White.svelte';

import ArmorSphereIconWhite from '$lib/client/components/frontier/icon/item/Armor_Sphere_Icon_White.svelte';
import BaitIconWhite from '$lib/client/components/frontier/icon/item/Bait_Icon_White.svelte';
import BallIconWhite from '$lib/client/components/frontier/icon/item/Ball_Icon_White.svelte';
import BarrelIconWhite from '$lib/client/components/frontier/icon/item/Barrel_Icon_White.svelte';
import BbqIconWhite from '$lib/client/components/frontier/icon/item/BBQ_Icon_White.svelte';
import BerryIconWhite from '$lib/client/components/frontier/icon/item/Berry_Icon_White.svelte';
import BombIconWhite from '$lib/client/components/frontier/icon/item/Bomb_Icon_White.svelte';
import BoneIconWhite from '$lib/client/components/frontier/icon/item/Bone_Icon_White.svelte';
import BookIconWhite from '$lib/client/components/frontier/icon/item/Book_Icon_White.svelte';
import BugIconWhite from '$lib/client/components/frontier/icon/item/Bug_Icon_White.svelte';
import BugnetIconWhite from '$lib/client/components/frontier/icon/item/Bugnet_Icon_White.svelte';
import CarapaceIconWhite from '$lib/client/components/frontier/icon/item/Carapace_Icon_White.svelte';
import CharmIconWhite from '$lib/client/components/frontier/icon/item/Charm_Icon_White.svelte';
import ClawIconWhite from '$lib/client/components/frontier/icon/item/Claw_Icon_White.svelte';
import CoatingIconWhite from '$lib/client/components/frontier/icon/item/Coating_Icon_White.svelte';
import CoinIconWhite from '$lib/client/components/frontier/icon/item/Coin_Icon_White.svelte';
import EggIconWhite from '$lib/client/components/frontier/icon/item/Egg_Icon_White.svelte';
import EyeIconWhite from '$lib/client/components/frontier/icon/item/Eye_Icon_White.svelte';
import FangIconWhite from '$lib/client/components/frontier/icon/item/Fang_Icon_White.svelte';
import FinIconWhite from '$lib/client/components/frontier/icon/item/Fin_Icon_White.svelte';
import FishIconWhite from '$lib/client/components/frontier/icon/item/Fish_Icon_White.svelte';
import FlaskIconWhite from '$lib/client/components/frontier/icon/item/Flask_Icon_White.svelte';
import FluidIconWhite from '$lib/client/components/frontier/icon/item/Fluid_Icon_White.svelte';
import FluteIconWhite from '$lib/client/components/frontier/icon/item/Flute_Icon_White.svelte';
import HeadIconWhite from '$lib/client/components/frontier/icon/item/Head_Icon_White.svelte';
import HerbIconWhite from '$lib/client/components/frontier/icon/item/Herb_Icon_White.svelte';
import HideIconWhite from '$lib/client/components/frontier/icon/item/Hide_Icon_White.svelte';
import HornIconWhite from '$lib/client/components/frontier/icon/item/Horn_Icon_White.svelte';
import JewelIconWhite from '$lib/client/components/frontier/icon/item/Jewel_Icon_White.svelte';
import KnifeIconWhite from '$lib/client/components/frontier/icon/item/Knife_Icon_White.svelte';
import MantleIconWhite from '$lib/client/components/frontier/icon/item/Mantle_Icon_White.svelte';
import MapIconWhite from '$lib/client/components/frontier/icon/item/Map_Icon_White.svelte';
import MeatIconWhite from '$lib/client/components/frontier/icon/item/Meat_Icon_White.svelte';
import MedicineIconWhite from '$lib/client/components/frontier/icon/item/Medicine_Icon_White.svelte';
import MonsterPartIconWhite from '$lib/client/components/frontier/icon/item/Monster_Part_Icon_White.svelte';
import MushroomIconWhite from '$lib/client/components/frontier/icon/item/Mushroom_Icon_White.svelte';
import OreIconWhite from '$lib/client/components/frontier/icon/item/Ore_Icon_White.svelte';
import OreIconSpecial_001 from '$lib/client/components/frontier/icon/item/Ore_Icon_Special_001.svelte';
import PickaxeIconWhite from '$lib/client/components/frontier/icon/item/Pickaxe_Icon_White.svelte';
import PillIconWhite from '$lib/client/components/frontier/icon/item/Pill_Icon_White.svelte';
import PlateIconWhite from '$lib/client/components/frontier/icon/item/Plate_Icon_White.svelte';
import QuestionMarkIconWhite from '$lib/client/components/frontier/icon/item/Question_Mark_Icon_White.svelte';
import SacIconWhite from '$lib/client/components/frontier/icon/item/Sac_Icon_White.svelte';
import ScaleIconWhite from '$lib/client/components/frontier/icon/item/Scale_Icon_White.svelte';
import ScrapIconWhite from '$lib/client/components/frontier/icon/item/Scrap_Icon_White.svelte';
import SeedIconWhite from '$lib/client/components/frontier/icon/item/Seed_Icon_White.svelte';
import ShellIconWhite from '$lib/client/components/frontier/icon/item/Shell_Icon_White.svelte';
import ShotIconWhite from '$lib/client/components/frontier/icon/item/Shot_Icon_White.svelte';
import SmokeIconWhite from '$lib/client/components/frontier/icon/item/Smoke_Icon_White.svelte';
import SteakIconWhite from '$lib/client/components/frontier/icon/item/Steak_Icon_White.svelte';
import TailIconWhite from '$lib/client/components/frontier/icon/item/Tail_Icon_White.svelte';
import TalismanIconWhite from '$lib/client/components/frontier/icon/item/Talisman_Icon_White.svelte';
import TicketIconWhite from '$lib/client/components/frontier/icon/item/Ticket_Icon_White.svelte';
import TowerSigil from '$lib/client/components/frontier/icon/item/Tower_Sigil.svelte';
import TrapIconWhite from '$lib/client/components/frontier/icon/item/Trap_Icon_White.svelte';
import TrapToolIconWhite from '$lib/client/components/frontier/icon/item/Trap_Tool_Icon_White.svelte';
import VegetableIconWhite from '$lib/client/components/frontier/icon/item/Vegetable_Icon_White.svelte';
import VialIconWhite from '$lib/client/components/frontier/icon/item/Vial_Icon_White.svelte';
import VoucherIconWhite from '$lib/client/components/frontier/icon/item/Voucher_Icon_White.svelte';
import WebbingIconWhite from '$lib/client/components/frontier/icon/item/Webbing_Icon_White.svelte';
import WhetstoneIconWhite from '$lib/client/components/frontier/icon/item/Whetstone_Icon_White.svelte';
import WingIconWhite from '$lib/client/components/frontier/icon/item/Wing_Icon_White.svelte';
import WoodIconWhite from '$lib/client/components/frontier/icon/item/Wood_Icon_White.svelte';
import type {
	FrontierArmorSkillName,
	FrontierArmorSkillTree,
	FrontierMonsterName,
	FrontierRankBand,
	FrontierSigil,
	FrontierWeaponClass,
	FrontierZenithSkill,
} from 'ezlion';

import IconElementFire from '$lib/client/components/frontier/icon/element/Fire.svelte';
import IconElementWater from '$lib/client/components/frontier/icon/element/Water.svelte';
import IconElementThunder from '$lib/client/components/frontier/icon/element/Thunder.svelte';
import IconElementIce from '$lib/client/components/frontier/icon/element/Ice.svelte';
import IconElementDragon from '$lib/client/components/frontier/icon/element/Dragon.svelte';
import IconElementDark from '$lib/client/components/frontier/icon/element/Dark.svelte';
import IconElementLight from '$lib/client/components/frontier/icon/element/Light.svelte';
import IconElementLightingRod from '$lib/client/components/frontier/icon/element/LightningRod.svelte';
import IconElementSound from '$lib/client/components/frontier/icon/element/Sound.svelte';
import IconElementWind from '$lib/client/components/frontier/icon/element/Wind.svelte';
import IconElementMusic from '$lib/client/components/frontier/icon/element/Music.svelte';
import IconElementBlaze from '$lib/client/components/frontier/icon/element/Blaze.svelte';
import IconElementTenshou from '$lib/client/components/frontier/icon/element/Tenshou.svelte';
import IconElementOkiko from '$lib/client/components/frontier/icon/element/Okiko.svelte';
import IconElementBlackFlame from '$lib/client/components/frontier/icon/element/BlackFlame.svelte';
import IconElementCrimsonDemon from '$lib/client/components/frontier/icon/element/CrimsonDemon.svelte';
import IconElementEmperorRoar from '$lib/client/components/frontier/icon/element/EmperorRoar.svelte';
import IconElementBurningZero from '$lib/client/components/frontier/icon/element/BurningZero.svelte';

import IconStatusPoison from '$lib/client/components/frontier/icon/status/Poison.svelte';
import IconStatusSleep from '$lib/client/components/frontier/icon/status/Sleep.svelte';
import IconStatusParalysis from '$lib/client/components/frontier/icon/status/Paralysis.svelte';
import IconStatusBlast from '$lib/client/components/frontier/icon/status/Blast.svelte';

import IconAilmentBleed from '$lib/client/components/frontier/icon/ailment/Bleed2.svelte';
import IconAilmentBlind from '$lib/client/components/frontier/icon/ailment/Blind.svelte';
import IconAilmentCorruptedPoison from '$lib/client/components/frontier/icon/ailment/CorruptedPoison.svelte';
import IconAilmentCrystal from '$lib/client/components/frontier/icon/ailment/Crystal.svelte';
import IconAilmentDracophageErosion from '$lib/client/components/frontier/icon/ailment/DracophageErosion.svelte';
import IconAilmentExtremeFireblight from '$lib/client/components/frontier/icon/ailment/ExtremeFireblight.svelte';
import IconAilmentExtremeWaterblight from '$lib/client/components/frontier/icon/ailment/ExtremeWaterblight.svelte';
import IconAilmentExtremeThunderblight from '$lib/client/components/frontier/icon/ailment/ExtremeThunderblight.svelte';
import IconAilmentExtremeIceblight from '$lib/client/components/frontier/icon/ailment/ExtremeIceblight.svelte';
import IconAilmentExtremeDragonblight from '$lib/client/components/frontier/icon/ailment/ExtremeDragonblight.svelte';
import IconAilmentExtremePoison from '$lib/client/components/frontier/icon/ailment/ExtremePoison.svelte';
import IconAilmentExtremeSleep from '$lib/client/components/frontier/icon/ailment/ExtremeSleep.svelte';
import IconAilmentExtremeParalysis from '$lib/client/components/frontier/icon/ailment/ExtremeParalysis.svelte';
import IconAilmentFatigue from '$lib/client/components/frontier/icon/ailment/Fatigue.svelte';
import IconAilmentFrostbite from '$lib/client/components/frontier/icon/ailment/Frostbite.svelte';
import IconAilmentMagnetism from '$lib/client/components/frontier/icon/ailment/Magnetism.svelte';
import IconAilmentSnowman from '$lib/client/components/frontier/icon/ailment/Snowman.svelte';
import IconAilmentStench from '$lib/client/components/frontier/icon/ailment/Stench.svelte';
import IconAilmentStun from '$lib/client/components/frontier/icon/ailment/Stun.svelte';
import IconAilmentVocalCordParalysis from '$lib/client/components/frontier/icon/ailment/VocalCordParalysis.svelte';

import MotionSwordAndShieldNoneJumpSlash from '$lib/client/images/weapon/motion/sword_and_shield_none_jump_slash.webp';

import IconMonsterRandom from '$lib/client/images/monster/random.webp';
import IconMonsterRathian from '$lib/client/images/monster/rathian.webp';
import IconMonsterFatalis from '$lib/client/images/monster/fatalis.webp';
import IconMonsterKelbi from '$lib/client/images/monster/kelbi.webp';
import IconMonsterMosswine from '$lib/client/images/monster/mosswine.webp';
import IconMonsterBullfango from '$lib/client/images/monster/bullfango.webp';
import IconMonsterYianKutKu from '$lib/client/images/monster/yian_kut-ku.webp';
import IconMonsterLaoShanLung from '$lib/client/images/monster/lao-shan_lung.webp';
import IconMonsterCephadrome from '$lib/client/images/monster/cephadrome.webp';
import IconMonsterFelyne from '$lib/client/images/monster/felyne.webp';
import IconMonsterRathalos from '$lib/client/images/monster/rathalos.webp';
import IconMonsterAptonoth from '$lib/client/images/monster/aptonoth.webp';
import IconMonsterGenprey from '$lib/client/images/monster/genprey.webp';
import IconMonsterDiablos from '$lib/client/images/monster/diablos.webp';
import IconMonsterKhezu from '$lib/client/images/monster/khezu.webp';
import IconMonsterVelociprey from '$lib/client/images/monster/velociprey.webp';
import IconMonsterGravios from '$lib/client/images/monster/gravios.webp';
import IconMonsterVespoid from '$lib/client/images/monster/vespoid.webp';
import IconMonsterGypceros from '$lib/client/images/monster/gypceros.webp';
import IconMonsterPlesioth from '$lib/client/images/monster/plesioth.webp';
import IconMonsterBasarios from '$lib/client/images/monster/basarios.webp';
import IconMonsterMelynx from '$lib/client/images/monster/melynx.webp';
import IconMonsterHornetaur from '$lib/client/images/monster/hornetaur.webp';
import IconMonsterApceros from '$lib/client/images/monster/apceros.webp';
import IconMonsterMonoblos from '$lib/client/images/monster/monoblos.webp';
import IconMonsterVelocidrome from '$lib/client/images/monster/velocidrome.webp';
import IconMonsterGendrome from '$lib/client/images/monster/gendrome.webp';
import IconMonsterIoprey from '$lib/client/images/monster/ioprey.webp';
import IconMonsterIodrome from '$lib/client/images/monster/iodrome.webp';
import IconMonsterKirin from '$lib/client/images/monster/kirin.webp';
import IconMonsterCephalos from '$lib/client/images/monster/cephalos.webp';
import IconMonsterGiapreyGiadrome from '$lib/client/images/monster/giaprey.webp';
import IconMonsterCrimsonFatalis from '$lib/client/images/monster/crimson_fatalis.webp';
import IconMonsterPinkRathian from '$lib/client/images/monster/pink_rathian.webp';
import IconMonsterBlueYianKutKu from '$lib/client/images/monster/blue_yian_kut-ku.webp';
import IconMonsterPurpleGypceros from '$lib/client/images/monster/purple_gypceros.webp';
import IconMonsterYianGaruga from '$lib/client/images/monster/yian_garuga.webp';
import IconMonsterSilverRathalos from '$lib/client/images/monster/silver_rathalos.webp';
import IconMonsterGoldRathian from '$lib/client/images/monster/gold_rathian.webp';
import IconMonsterBlackDiablos from '$lib/client/images/monster/black_diablos.webp';
import IconMonsterWhiteMonoblos from '$lib/client/images/monster/white_monoblos.webp';
import IconMonsterRedKhezu from '$lib/client/images/monster/red_khezu.webp';
import IconMonsterGreenPlesioth from '$lib/client/images/monster/green_plesioth.webp';
import IconMonsterBlackGravios from '$lib/client/images/monster/black_gravios.webp';
import IconMonsterDaimyoHermitaur from '$lib/client/images/monster/daimyo_hermitaur.webp';
import IconMonsterAzureRathalos from '$lib/client/images/monster/azure_rathalos.webp';
import IconMonsterAshenLaoShanLung from '$lib/client/images/monster/ashen_lao-shan_lung.webp';
import IconMonsterBlangonga from '$lib/client/images/monster/blangonga.webp';
import IconMonsterCongalala from '$lib/client/images/monster/congalala.webp';
import IconMonsterRajang from '$lib/client/images/monster/rajang.webp';
import IconMonsterKushalaDaora from '$lib/client/images/monster/kushala_daora.webp';
import IconMonsterShenGaoren from '$lib/client/images/monster/shen_gaoren.webp';
import IconMonsterGreatThunderbug from '$lib/client/images/monster/great_thunderbug.webp';
import IconMonsterShakalaka from '$lib/client/images/monster/shakalaka.webp';
import IconMonsterYamaTsukami from '$lib/client/images/monster/yama_tsukami.webp';
import IconMonsterChameleos from '$lib/client/images/monster/chameleos.webp';
import IconMonsterRustedKushalaDaora from '$lib/client/images/monster/rusted_kushala_daora.webp';
import IconMonsterBlango from '$lib/client/images/monster/blango.webp';
import IconMonsterConga from '$lib/client/images/monster/conga.webp';
import IconMonsterRemobra from '$lib/client/images/monster/remobra.webp';
import IconMonsterLunastra from '$lib/client/images/monster/lunastra.webp';
import IconMonsterTeostra from '$lib/client/images/monster/teostra.webp';
import IconMonsterHermitaur from '$lib/client/images/monster/hermitaur.webp';
import IconMonsterShogunCeanataur from '$lib/client/images/monster/shogun_ceanataur.webp';
import IconMonsterBulldrome from '$lib/client/images/monster/bulldrome.webp';
import IconMonsterAnteka from '$lib/client/images/monster/anteka.webp';
import IconMonsterPopo from '$lib/client/images/monster/popo.webp';
import IconMonsterWhiteFatalis from '$lib/client/images/monster/white_fatalis.webp';
import IconMonsterCeanataur from '$lib/client/images/monster/ceanataur.webp';
import IconMonsterHypnocatrice from '$lib/client/images/monster/hypnoc.webp';
import IconMonsterLavasioth from '$lib/client/images/monster/lavasioth.webp';
import IconMonsterTigrex from '$lib/client/images/monster/tigrex.webp';
import IconMonsterAkantor from '$lib/client/images/monster/akantor.webp';
import IconMonsterBrightHypnoc from '$lib/client/images/monster/bright_hypnoc.webp';
import IconMonsterRedLavasioth from '$lib/client/images/monster/red_lavasioth.webp';
import IconMonsterEspinas from '$lib/client/images/monster/espinas.webp';
import IconMonsterOrangeEspinas from '$lib/client/images/monster/orange_espinas.webp';
import IconMonsterSilverHypnoc from '$lib/client/images/monster/silver_hypnoc.webp';
import IconMonsterAkuraVashimu from '$lib/client/images/monster/akura_vashimu.webp';
import IconMonsterAkuraJebia from '$lib/client/images/monster/akura_jebia.webp';
import IconMonsterBerukyurosu from '$lib/client/images/monster/berukyurosu.webp';
import IconMonsterCactus from '$lib/client/images/monster/cactus.webp';
import IconMonsterPariapuria from '$lib/client/images/monster/pariapuria.webp';
import IconMonsterWhiteEspinas from '$lib/client/images/monster/white_espinas.webp';
import IconMonsterKamuOrugaron from '$lib/client/images/monster/kamu_orugaron.webp';
import IconMonsterNonoOrugaron from '$lib/client/images/monster/nono_orugaron.webp';
import IconMonsterRaviente from '$lib/client/images/monster/raviente.webp';
import IconMonsterDyuragaua from '$lib/client/images/monster/dyuragaua.webp';
import IconMonsterDoragyurosu from '$lib/client/images/monster/doragyurosu.webp';
import IconMonsterGurenzeburu from '$lib/client/images/monster/gurenzeburu.webp';
import IconMonsterBurukku from '$lib/client/images/monster/burukku.webp';
import IconMonsterErupe from '$lib/client/images/monster/erupe.webp';
import IconMonsterRukodiora from '$lib/client/images/monster/rukodiora.webp';
import IconMonsterUNKNOWN from '$lib/client/images/monster/unknown.webp';
import IconMonsterGogomoa from '$lib/client/images/monster/gogomoa.webp';
import IconMonsterTaikunZamuza from '$lib/client/images/monster/taikun_zamuza.webp';
import IconMonsterAbiorugu from '$lib/client/images/monster/abiorugu.webp';
import IconMonsterKuarusepusu from '$lib/client/images/monster/kuarusepusu.webp';
import IconMonsterOdibatorasu from '$lib/client/images/monster/odibatorasu.webp';
import IconMonsterDisufiroa from '$lib/client/images/monster/disufiroa.webp';
import IconMonsterRebidiora from '$lib/client/images/monster/rebidiora.webp';
import IconMonsterAnorupatisu from '$lib/client/images/monster/anorupatisu.webp';
import IconMonsterHyujikiki from '$lib/client/images/monster/hyujikiki.webp';
import IconMonsterMidogaron from '$lib/client/images/monster/midogaron.webp';
import IconMonsterGiaorugu from '$lib/client/images/monster/giaorugu.webp';
import IconMonsterMiRu from '$lib/client/images/monster/mi_ru.webp';
import IconMonsterFarunokku from '$lib/client/images/monster/farunokku.webp';
import IconMonsterPokaradon from '$lib/client/images/monster/pokaradon.webp';
import IconMonsterShantien from '$lib/client/images/monster/shantien.webp';
import IconMonsterPokara from '$lib/client/images/monster/pokara.webp';
import IconMonsterGoruganosu from '$lib/client/images/monster/goruganosu.webp';
import IconMonsterAruganosu from '$lib/client/images/monster/aruganosu.webp';
import IconMonsterBaruragaru from '$lib/client/images/monster/baruragaru.webp';
import IconMonsterZerureusu from '$lib/client/images/monster/zerureusu.webp';
import IconMonsterGougarf from '$lib/client/images/monster/gougarf.webp';
import IconMonsterUruki from '$lib/client/images/monster/uruki.webp';
import IconMonsterForokururu from '$lib/client/images/monster/forokururu.webp';
import IconMonsterMeraginasu from '$lib/client/images/monster/meraginasu.webp';
import IconMonsterDiorex from '$lib/client/images/monster/diorex.webp';
import IconMonsterGarubaDaora from '$lib/client/images/monster/garuba_daora.webp';
import IconMonsterInagami from '$lib/client/images/monster/inagami.webp';
import IconMonsterVarusaburosu from '$lib/client/images/monster/varusaburosu.webp';
import IconMonsterPoborubarumu from '$lib/client/images/monster/poborubarumu.webp';
import IconMonsterDuremudira from '$lib/client/images/monster/duremudira.webp';
import IconMonsterGureadomosu from '$lib/client/images/monster/gureadomosu.webp';
import IconMonsterHarudomerugu from '$lib/client/images/monster/harudomerugu.webp';
import IconMonsterToridcless from '$lib/client/images/monster/toridcless.webp';
import IconMonsterGasurabazura from '$lib/client/images/monster/gasurabazura.webp';
import IconMonsterKusubami from '$lib/client/images/monster/kusubami.webp';
import IconMonsterYamaKurai from '$lib/client/images/monster/yama_kurai.webp';
import IconMonsterZinogre from '$lib/client/images/monster/zinogre.webp';
import IconMonsterDeviljho from '$lib/client/images/monster/deviljho.webp';
import IconMonsterBrachydios from '$lib/client/images/monster/brachydios.webp';
import IconMonsterBerserkRaviente from '$lib/client/images/monster/berserk_raviente.webp';
import IconMonsterToaTesukatora from '$lib/client/images/monster/toa_tesukatora.webp';
import IconMonsterBarioth from '$lib/client/images/monster/barioth.webp';
import IconMonsterUragaan from '$lib/client/images/monster/uragaan.webp';
import IconMonsterStygianZinogre from '$lib/client/images/monster/stygian_zinogre.webp';
import IconMonsterGuanzorumu from '$lib/client/images/monster/guanzorumu.webp';
import IconMonsterStarvingDeviljho from '$lib/client/images/monster/starving_deviljho.webp';
import IconMonsterVoljang from '$lib/client/images/monster/voljang.webp';
import IconMonsterNargacuga from '$lib/client/images/monster/nargacuga.webp';
import IconMonsterKeoaruboru from '$lib/client/images/monster/keoaruboru.webp';
import IconMonsterZenaserisu from '$lib/client/images/monster/zenaserisu.webp';
import IconMonsterGoreMagala from '$lib/client/images/monster/gore_magala.webp';
import IconMonsterBlinkingNargacuga from '$lib/client/images/monster/blinking_nargacuga.webp';
import IconMonsterShagaruMagala from '$lib/client/images/monster/shagaru_magala.webp';
import IconMonsterAmatsu from '$lib/client/images/monster/amatsu.webp';
import IconMonsterElzelion from '$lib/client/images/monster/elzelion.webp';
import IconMonsterArrogantDuremudira from '$lib/client/images/monster/arrogant_duremudira.webp';
import IconMonsterSeregios from '$lib/client/images/monster/seregios.webp';
import IconMonsterBogabadorumu from '$lib/client/images/monster/zenith_bogabadorumu.gif';
import IconMonsterBlitzkriegBogabadorumu from '$lib/client/images/monster/blitzkrieg_bogabadorumu.webp';
import IconMonsterSparklingZerureusu from '$lib/client/images/monster/sparkling_zerureusu.webp';
import IconMonsterPSO2Rappy from '$lib/client/images/monster/pso2_rappy.webp';
import IconMonsterKingShakalaka from '$lib/client/images/monster/king_shakalaka.webp';

import IconRenderMonsterRathian from '$lib/client/images/monster/render/rathian.webp';
import IconRenderMonsterFatalis from '$lib/client/images/monster/render/fatalis.webp';
import IconRenderMonsterKelbi from '$lib/client/images/monster/render/kelbi.webp';
import IconRenderMonsterMosswine from '$lib/client/images/monster/render/mosswine.webp';
import IconRenderMonsterBullfango from '$lib/client/images/monster/render/bullfango.webp';
import IconRenderMonsterYianKutKu from '$lib/client/images/monster/render/yian_kut-ku.webp';
import IconRenderMonsterLaoShanLung from '$lib/client/images/monster/render/lao-shan_lung.webp';
import IconRenderMonsterCephadrome from '$lib/client/images/monster/render/cephadrome.webp';
import IconRenderMonsterFelyne from '$lib/client/images/monster/render/felyne.webp';
import IconRenderMonsterRathalos from '$lib/client/images/monster/render/rathalos.webp';
import IconRenderMonsterAptonoth from '$lib/client/images/monster/render/aptonoth.webp';
import IconRenderMonsterGenprey from '$lib/client/images/monster/render/genprey.webp';
import IconRenderMonsterDiablos from '$lib/client/images/monster/render/diablos.webp';
import IconRenderMonsterKhezu from '$lib/client/images/monster/render/khezu.webp';
import IconRenderMonsterVelociprey from '$lib/client/images/monster/render/velociprey.webp';
import IconRenderMonsterGravios from '$lib/client/images/monster/render/gravios.webp';
import IconRenderMonsterVespoid from '$lib/client/images/monster/render/vespoid.webp';
import IconRenderMonsterGypceros from '$lib/client/images/monster/render/gypceros.webp';
import IconRenderMonsterPlesioth from '$lib/client/images/monster/render/plesioth.webp';
import IconRenderMonsterBasarios from '$lib/client/images/monster/render/basarios.webp';
import IconRenderMonsterMelynx from '$lib/client/images/monster/render/melynx.webp';
import IconRenderMonsterHornetaur from '$lib/client/images/monster/render/hornetaur.webp';
import IconRenderMonsterApceros from '$lib/client/images/monster/render/apceros.webp';
import IconRenderMonsterMonoblos from '$lib/client/images/monster/render/monoblos.webp';
import IconRenderMonsterVelocidrome from '$lib/client/images/monster/render/velocidrome.webp';
import IconRenderMonsterGendrome from '$lib/client/images/monster/render/gendrome.webp';
import IconRenderMonsterIoprey from '$lib/client/images/monster/render/ioprey.webp';
import IconRenderMonsterIodrome from '$lib/client/images/monster/render/iodrome.webp';
import IconRenderMonsterKirin from '$lib/client/images/monster/render/kirin.webp';
import IconRenderMonsterCephalos from '$lib/client/images/monster/render/cephalos.webp';
import IconRenderMonsterGiapreyGiadrome from '$lib/client/images/monster/render/giaprey.webp';
import IconRenderMonsterCrimsonFatalis from '$lib/client/images/monster/render/crimson_fatalis.webp';
import IconRenderMonsterPinkRathian from '$lib/client/images/monster/render/pink_rathian.webp';
import IconRenderMonsterBlueYianKutKu from '$lib/client/images/monster/render/blue_yian_kut-ku.webp';
import IconRenderMonsterPurpleGypceros from '$lib/client/images/monster/render/purple_gypceros.webp';
import IconRenderMonsterYianGaruga from '$lib/client/images/monster/render/yian_garuga.webp';
import IconRenderMonsterSilverRathalos from '$lib/client/images/monster/render/silver_rathalos.webp';
import IconRenderMonsterGoldRathian from '$lib/client/images/monster/render/gold_rathian.webp';
import IconRenderMonsterBlackDiablos from '$lib/client/images/monster/render/black_diablos.webp';
import IconRenderMonsterWhiteMonoblos from '$lib/client/images/monster/render/white_monoblos.webp';
import IconRenderMonsterRedKhezu from '$lib/client/images/monster/render/red_khezu.webp';
import IconRenderMonsterGreenPlesioth from '$lib/client/images/monster/render/green_plesioth.webp';
import IconRenderMonsterBlackGravios from '$lib/client/images/monster/render/black_gravios.webp';
import IconRenderMonsterDaimyoHermitaur from '$lib/client/images/monster/render/daimyo_hermitaur.webp';
import IconRenderMonsterAzureRathalos from '$lib/client/images/monster/render/azure_rathalos.webp';
import IconRenderMonsterAshenLaoShanLung from '$lib/client/images/monster/render/ashen_lao-shan_lung.webp';
import IconRenderMonsterBlangonga from '$lib/client/images/monster/render/blangonga.webp';
import IconRenderMonsterCongalala from '$lib/client/images/monster/render/congalala.webp';
import IconRenderMonsterRajang from '$lib/client/images/monster/render/rajang.webp';
import IconRenderMonsterKushalaDaora from '$lib/client/images/monster/render/kushala_daora.webp';
import IconRenderMonsterShenGaoren from '$lib/client/images/monster/render/shen_gaoren.webp';
import IconRenderMonsterGreatThunderbug from '$lib/client/images/monster/render/great_thunderbug.webp';
import IconRenderMonsterShakalaka from '$lib/client/images/monster/render/shakalaka.webp';
import IconRenderMonsterYamaTsukami from '$lib/client/images/monster/render/yama_tsukami.webp';
import IconRenderMonsterChameleos from '$lib/client/images/monster/render/chameleos.webp';
import IconRenderMonsterRustedKushalaDaora from '$lib/client/images/monster/render/rusted_kushala_daora.webp';
import IconRenderMonsterBlango from '$lib/client/images/monster/render/blango.webp';
import IconRenderMonsterConga from '$lib/client/images/monster/render/conga.webp';
import IconRenderMonsterRemobra from '$lib/client/images/monster/render/remobra.webp';
import IconRenderMonsterLunastra from '$lib/client/images/monster/render/lunastra.webp';
import IconRenderMonsterTeostra from '$lib/client/images/monster/render/teostra.webp';
import IconRenderMonsterHermitaur from '$lib/client/images/monster/render/hermitaur.webp';
import IconRenderMonsterShogunCeanataur from '$lib/client/images/monster/render/shogun_ceanataur.webp';
import IconRenderMonsterBulldrome from '$lib/client/images/monster/render/bulldrome.webp';
import IconRenderMonsterAnteka from '$lib/client/images/monster/render/anteka.webp';
import IconRenderMonsterPopo from '$lib/client/images/monster/render/popo.webp';
import IconRenderMonsterWhiteFatalis from '$lib/client/images/monster/render/white_fatalis.webp';
import IconRenderMonsterCeanataur from '$lib/client/images/monster/render/ceanataur.webp';
import IconRenderMonsterHypnocatrice from '$lib/client/images/monster/render/hypnoc.webp';
import IconRenderMonsterLavasioth from '$lib/client/images/monster/render/lavasioth.webp';
import IconRenderMonsterTigrex from '$lib/client/images/monster/render/tigrex.webp';
import IconRenderMonsterAkantor from '$lib/client/images/monster/render/akantor.webp';
import IconRenderMonsterBrightHypnoc from '$lib/client/images/monster/render/bright_hypnoc.webp';
import IconRenderMonsterRedLavasioth from '$lib/client/images/monster/render/red_lavasioth.webp';
import IconRenderMonsterEspinas from '$lib/client/images/monster/render/espinas.webp';
import IconRenderMonsterOrangeEspinas from '$lib/client/images/monster/render/orange_espinas.webp';
import IconRenderMonsterSilverHypnoc from '$lib/client/images/monster/render/silver_hypnoc.webp';
import IconRenderMonsterAkuraVashimu from '$lib/client/images/monster/render/akura_vashimu.webp';
import IconRenderMonsterAkuraJebia from '$lib/client/images/monster/render/akura_jebia.webp';
import IconRenderMonsterBerukyurosu from '$lib/client/images/monster/render/berukyurosu.webp';
import IconRenderMonsterCactus from '$lib/client/images/monster/cactus.webp';
import IconRenderMonsterPariapuria from '$lib/client/images/monster/render/pariapuria.webp';
import IconRenderMonsterWhiteEspinas from '$lib/client/images/monster/render/white_espinas.webp';
import IconRenderMonsterKamuOrugaron from '$lib/client/images/monster/render/kamu_orugaron.webp';
import IconRenderMonsterNonoOrugaron from '$lib/client/images/monster/render/nono_orugaron.webp';
import IconRenderMonsterRaviente from '$lib/client/images/monster/render/raviente.webp';
import IconRenderMonsterDyuragaua from '$lib/client/images/monster/render/dyuragaua.webp';
import IconRenderMonsterDoragyurosu from '$lib/client/images/monster/render/doragyurosu.webp';
import IconRenderMonsterGurenzeburu from '$lib/client/images/monster/render/gurenzeburu.webp';
import IconRenderMonsterBurukku from '$lib/client/images/monster/render/burukku.webp';
import IconRenderMonsterErupe from '$lib/client/images/monster/render/erupe.webp';
import IconRenderMonsterRukodiora from '$lib/client/images/monster/render/rukodiora.webp';
import IconRenderMonsterUNKNOWN from '$lib/client/images/monster/render/unknown.webp';
import IconRenderMonsterGogomoa from '$lib/client/images/monster/render/gogomoa.webp';
import IconRenderMonsterTaikunZamuza from '$lib/client/images/monster/render/taikun_zamuza.webp';
import IconRenderMonsterAbiorugu from '$lib/client/images/monster/render/abiorugu.webp';
import IconRenderMonsterKuarusepusu from '$lib/client/images/monster/render/kuarusepusu.webp';
import IconRenderMonsterOdibatorasu from '$lib/client/images/monster/render/odibatorasu.webp';
import IconRenderMonsterDisufiroa from '$lib/client/images/monster/render/disufiroa.webp';
import IconRenderMonsterRebidiora from '$lib/client/images/monster/render/rebidiora.webp';
import IconRenderMonsterAnorupatisu from '$lib/client/images/monster/render/anorupatisu.webp';
import IconRenderMonsterHyujikiki from '$lib/client/images/monster/render/hyujikiki.webp';
import IconRenderMonsterMidogaron from '$lib/client/images/monster/render/midogaron.webp';
import IconRenderMonsterGiaorugu from '$lib/client/images/monster/render/giaorugu.webp';
import IconRenderMonsterMiRu from '$lib/client/images/monster/render/mi_ru.webp';
import IconRenderMonsterFarunokku from '$lib/client/images/monster/render/farunokku.webp';
import IconRenderMonsterPokaradon from '$lib/client/images/monster/render/pokaradon.webp';
import IconRenderMonsterShantien from '$lib/client/images/monster/render/shantien.webp';
import IconRenderMonsterPokara from '$lib/client/images/monster/render/pokara.webp';
import IconRenderMonsterGoruganosu from '$lib/client/images/monster/render/goruganosu.webp';
import IconRenderMonsterAruganosu from '$lib/client/images/monster/render/aruganosu.webp';
import IconRenderMonsterBaruragaru from '$lib/client/images/monster/render/baruragaru.webp';
import IconRenderMonsterZerureusu from '$lib/client/images/monster/render/zerureusu.webp';
import IconRenderMonsterGougarf from '$lib/client/images/monster/render/gougarf.webp';
import IconRenderMonsterUruki from '$lib/client/images/monster/render/uruki.webp';
import IconRenderMonsterForokururu from '$lib/client/images/monster/render/forokururu.webp';
import IconRenderMonsterMeraginasu from '$lib/client/images/monster/render/meraginasu.webp';
import IconRenderMonsterDiorex from '$lib/client/images/monster/render/diorex.webp';
import IconRenderMonsterGarubaDaora from '$lib/client/images/monster/render/garuba_daora.webp';
import IconRenderMonsterInagami from '$lib/client/images/monster/render/inagami.webp';
import IconRenderMonsterVarusaburosu from '$lib/client/images/monster/render/varusaburosu.webp';
import IconRenderMonsterPoborubarumu from '$lib/client/images/monster/render/poborubarumu.webp';
import IconRenderMonsterDuremudira from '$lib/client/images/monster/render/duremudira.webp';
import IconRenderMonsterGureadomosu from '$lib/client/images/monster/render/gureadomosu.webp';
import IconRenderMonsterHarudomerugu from '$lib/client/images/monster/render/harudomerugu.webp';
import IconRenderMonsterToridcless from '$lib/client/images/monster/render/toridcless.webp';
import IconRenderMonsterGasurabazura from '$lib/client/images/monster/render/gasurabazura.webp';
import IconRenderMonsterKusubami from '$lib/client/images/monster/render/kusubami.webp';
import IconRenderMonsterYamaKurai from '$lib/client/images/monster/render/yama_kurai.webp';
import IconRenderMonsterZinogre from '$lib/client/images/monster/render/zinogre.webp';
import IconRenderMonsterDeviljho from '$lib/client/images/monster/render/deviljho.webp';
import IconRenderMonsterBrachydios from '$lib/client/images/monster/render/brachydios.webp';
import IconRenderMonsterBerserkRaviente from '$lib/client/images/monster/render/berserk_raviente.webp';
import IconRenderMonsterToaTesukatora from '$lib/client/images/monster/render/toa_tesukatora.webp';
import IconRenderMonsterBarioth from '$lib/client/images/monster/render/barioth.webp';
import IconRenderMonsterUragaan from '$lib/client/images/monster/render/uragaan.webp';
import IconRenderMonsterStygianZinogre from '$lib/client/images/monster/render/stygian_zinogre.webp';
import IconRenderMonsterGuanzorumu from '$lib/client/images/monster/render/guanzorumu.webp';
import IconRenderMonsterStarvingDeviljho from '$lib/client/images/monster/render/starving_deviljho.webp';
import IconRenderMonsterVoljang from '$lib/client/images/monster/render/voljang.webp';
import IconRenderMonsterNargacuga from '$lib/client/images/monster/render/nargacuga.webp';
import IconRenderMonsterKeoaruboru from '$lib/client/images/monster/render/keoaruboru.webp';
import IconRenderMonsterZenaserisu from '$lib/client/images/monster/render/zenaserisu.webp';
import IconRenderMonsterGoreMagala from '$lib/client/images/monster/render/gore_magala.webp';
import IconRenderMonsterBlinkingNargacuga from '$lib/client/images/monster/render/blinking_nargacuga.webp';
import IconRenderMonsterShagaruMagala from '$lib/client/images/monster/render/shagaru_magala.webp';
import IconRenderMonsterAmatsu from '$lib/client/images/monster/render/amatsu.webp';
import IconRenderMonsterElzelion from '$lib/client/images/monster/render/elzelion.webp';
import IconRenderMonsterArrogantDuremudira from '$lib/client/images/monster/render/arrogant_duremudira.webp';
import IconRenderMonsterSeregios from '$lib/client/images/monster/render/seregios.webp';
import IconRenderMonsterBogabadorumu from '$lib/client/images/monster/render/zenith_bogabadorumu.webp';
import IconRenderMonsterBlitzkriegBogabadorumu from '$lib/client/images/monster/render/blitzkrieg_bogabadorumu.webp';
import IconRenderMonsterSparklingZerureusu from '$lib/client/images/monster/render/sparkling_zerureusu.webp';
import IconRenderMonsterPSO2Rappy from '$lib/client/images/monster/render/pso2_rappy.webp';
import IconRenderMonsterKingShakalaka from '$lib/client/images/monster/render/king_shakalaka.webp';

import IconMonsterZenithAkuraVashimu from '$lib/client/images/monster/zenith_akura_vashimu.gif';
import IconMonsterZenithAnorupatisu from '$lib/client/images/monster/zenith_anorupatisu.gif';
import IconMonsterZenithBaruragaru from '$lib/client/images/monster/zenith_baruragaru.gif';
import IconMonsterZenithBlangonga from '$lib/client/images/monster/zenith_blangonga.gif';
import IconMonsterZenithBogabadorumu from '$lib/client/images/monster/zenith_bogabadorumu.gif';
import IconMonsterZenithDaimyoHermitaur from '$lib/client/images/monster/zenith_daimyo_hermitaur.gif';
import IconMonsterZenithDoragyurosu from '$lib/client/images/monster/zenith_doragyurosu.gif';
import IconMonsterZenithEspinas from '$lib/client/images/monster/zenith_espinas.gif';
import IconMonsterZenithGasurabazura from '$lib/client/images/monster/zenith_gasurabazura.gif';
import IconMonsterZenithGiaorugu from '$lib/client/images/monster/zenith_giaorugu.gif';
import IconMonsterZenithGravios from '$lib/client/images/monster/zenith_gravios.gif';
import IconMonsterZenithHarudomerugu from '$lib/client/images/monster/zenith_harudomerugu.gif';
import IconMonsterZenithHypnoc from '$lib/client/images/monster/zenith_hypnoc.gif';
import IconMonsterZenithHyujikiki from '$lib/client/images/monster/zenith_hyujikiki.gif';
import IconMonsterZenithInagami from '$lib/client/images/monster/zenith_inagami.gif';
import IconMonsterZenithKhezu from '$lib/client/images/monster/zenith_khezu.gif';
import IconMonsterZenithMidogaron from '$lib/client/images/monster/zenith_midogaron.gif';
import IconMonsterZenithPlesioth from '$lib/client/images/monster/zenith_plesioth.gif';
import IconMonsterZenithRathalos from '$lib/client/images/monster/zenith_rathalos.gif';
import IconMonsterZenithRukodiora from '$lib/client/images/monster/zenith_rukodiora.gif';
import IconMonsterZenithTaikunZamuza from '$lib/client/images/monster/zenith_taikun_zamuza.gif';
import IconMonsterZenithTigrex from '$lib/client/images/monster/zenith_tigrex.gif';
import IconMonsterZenithToridcless from '$lib/client/images/monster/zenith_toridcless.gif';
import IconMonsterConquestFatalis from '$lib/client/images/monster/conquest_fatalis.webp';
import IconMonsterConquestShantien from '$lib/client/images/monster/conquest_shantien.webp';
import IconMonsterConquestCrimsonFatalis from '$lib/client/images/monster/conquest_crimson_fatalis.webp';
import IconMonsterShitenDisufiroa from '$lib/client/images/monster/shiten_disufiroa.webp';
import IconMonsterShitenUnknown from '$lib/client/images/monster/shiten_unknown.webp';
import IconMonsterBurningFreezingElzelion from '$lib/client/images/monster/burning_freezing_elzelion.webp';
import IconMonsterHowlingZinogre from '$lib/client/images/monster/howling_zinogre.webp';
import IconMonsterSupremacyPariapuria from '$lib/client/images/monster/thirsty_pariapuria.webp';
import IconMonsterSupremacyDoragyurosu from '$lib/client/images/monster/supremacy_doragyurosu.webp';
import IconMonsterSupremacyTeostra from '$lib/client/images/monster/supremacy_teostra.webp';
import IconMonsterSupremacyOdibatorasu from '$lib/client/images/monster/supremacy_odibatorasu.webp';
import IconMonsterGoldenDeviljho from '$lib/client/images/monster/golden_deviljho.webp';
import IconMonsterFuriousRajang from '$lib/client/images/monster/furious_rajang.webp';
import IconMonsterRulingGuanzorumu from '$lib/client/images/monster/ruling_guanzorumu.webp';
import IconMonsterShiftingMiRu from '$lib/client/images/monster/shifting_mi_ru.webp';
import IconMonsterTwinheadRajang from '$lib/client/images/monster/twinhead_rajang.webp';

import IconRenderMonsterZenithAkuraVashimu from '$lib/client/images/monster/render/zenith_akura_vashimu.webp';
import IconRenderMonsterZenithAnorupatisu from '$lib/client/images/monster/render/zenith_anorupatisu.webp';
import IconRenderMonsterZenithBaruragaru from '$lib/client/images/monster/render/zenith_baruragaru.webp';
import IconRenderMonsterZenithBlangonga from '$lib/client/images/monster/render/zenith_blangonga.webp';
import IconRenderMonsterZenithBogabadorumu from '$lib/client/images/monster/render/zenith_bogabadorumu.webp';
import IconRenderMonsterZenithDaimyoHermitaur from '$lib/client/images/monster/render/zenith_daimyo_hermitaur.webp';
import IconRenderMonsterZenithDoragyurosu from '$lib/client/images/monster/render/zenith_doragyurosu.webp';
import IconRenderMonsterZenithEspinas from '$lib/client/images/monster/render/zenith_espinas.webp';
import IconRenderMonsterZenithGasurabazura from '$lib/client/images/monster/render/zenith_gasurabazura.webp';
import IconRenderMonsterZenithGiaorugu from '$lib/client/images/monster/render/zenith_giaorugu.webp';
import IconRenderMonsterZenithGravios from '$lib/client/images/monster/render/zenith_gravios.webp';
import IconRenderMonsterZenithHarudomerugu from '$lib/client/images/monster/render/zenith_harudomerugu.webp';
import IconRenderMonsterZenithHypnoc from '$lib/client/images/monster/render/zenith_hypnoc.webp';
import IconRenderMonsterZenithHyujikiki from '$lib/client/images/monster/render/zenith_hyujikiki.webp';
import IconRenderMonsterZenithInagami from '$lib/client/images/monster/render/zenith_inagami.webp';
import IconRenderMonsterZenithKhezu from '$lib/client/images/monster/render/zenith_khezu.webp';
import IconRenderMonsterZenithMidogaron from '$lib/client/images/monster/render/zenith_midogaron.webp';
import IconRenderMonsterZenithPlesioth from '$lib/client/images/monster/render/zenith_plesioth.webp';
import IconRenderMonsterZenithRathalos from '$lib/client/images/monster/render/zenith_rathalos.webp';
import IconRenderMonsterZenithRukodiora from '$lib/client/images/monster/render/zenith_rukodiora.webp';
import IconRenderMonsterZenithTaikunZamuza from '$lib/client/images/monster/render/zenith_taikun_zamuza.webp';
import IconRenderMonsterZenithTigrex from '$lib/client/images/monster/render/zenith_tigrex.webp';
import IconRenderMonsterZenithToridcless from '$lib/client/images/monster/render/zenith_toridcless.webp';
import IconRenderMonsterConquestFatalis from '$lib/client/images/monster/render/conquest_fatalis.webp';
import IconRenderMonsterConquestShantien from '$lib/client/images/monster/render/shantien.webp';
import IconRenderMonsterConquestCrimsonFatalis from '$lib/client/images/monster/render/conquest_crimson_fatalis.webp';
import IconRenderMonsterShitenDisufiroa from '$lib/client/images/monster/render/shiten_disufiroa.webp';
import IconRenderMonsterShitenUnknown from '$lib/client/images/monster/render/shiten_unknown.webp';
import IconRenderMonsterBurningFreezingElzelion from '$lib/client/images/monster/render/burning_freezing_elzelion.webp';
import IconRenderMonsterHowlingZinogre from '$lib/client/images/monster/render/howling_zinogre.webp';
import IconRenderMonsterSupremacyPariapuria from '$lib/client/images/monster/render/thirsty_pariapuria.webp';
import IconRenderMonsterSupremacyDoragyurosu from '$lib/client/images/monster/render/supremacy_doragyurosu.webp';
import IconRenderMonsterSupremacyTeostra from '$lib/client/images/monster/render/supremacy_teostra.webp';
import IconRenderMonsterSupremacyOdibatorasu from '$lib/client/images/monster/render/supremacy_odibatorasu.webp';
import IconRenderMonsterGoldenDeviljho from '$lib/client/images/monster/render/golden_deviljho.webp';
import IconRenderMonsterFuriousRajang from '$lib/client/images/monster/render/hc_rajang.webp';
import IconRenderMonsterRulingGuanzorumu from '$lib/client/images/monster/render/ruling_guanzorumu.webp';
import IconRenderMonsterShiftingMiRu from '$lib/client/images/monster/render/shifting_mi_ru.webp';
import IconRenderMonsterTwinheadRajang from '$lib/client/images/monster/render/hc_rajang.webp';

import GreatSwordIconSmall from '$lib/client/images/weapon/small/small_gs.webp';
import LongSwordIconSmall from '$lib/client/images/weapon/small/small_ls.webp';
import DualSwordsIconSmall from '$lib/client/images/weapon/small/small_ds.webp';
import SwordAndShieldIconSmall from '$lib/client/images/weapon/small/small_sns.webp';
import HammerIconSmall from '$lib/client/images/weapon/small/small_hammer.webp';
import HuntingHornIconSmall from '$lib/client/images/weapon/small/small_hh.webp';
import LanceIconSmall from '$lib/client/images/weapon/small/small_lance.webp';
import GunlanceIconSmall from '$lib/client/images/weapon/small/small_gl.webp';
import TonfaIconSmall from '$lib/client/images/weapon/small/small_tonfa.webp';
import SwitchAxeFIconSmall from '$lib/client/images/weapon/small/small_saf.webp';
import MagnetSpikeIconSmall from '$lib/client/images/weapon/small/small_ms.webp';
import BowIconSmall from '$lib/client/images/weapon/small/small_bow.webp';
import LightBowgunIconSmall from '$lib/client/images/weapon/small/small_lbg.webp';
import HeavyBowgunIconSmall from '$lib/client/images/weapon/small/small_hbg.webp';

import GreatSwordIconSmallRed from '$lib/client/images/weapon/small/small_gs_red.webp';
import LongSwordIconSmallRed from '$lib/client/images/weapon/small/small_ls_red.webp';
import DualSwordsIconSmallRed from '$lib/client/images/weapon/small/small_ds_red.webp';
import SwordAndShieldIconSmallRed from '$lib/client/images/weapon/small/small_sns_red.webp';
import HammerIconSmallRed from '$lib/client/images/weapon/small/small_hammer_red.webp';
import HuntingHornIconSmallRed from '$lib/client/images/weapon/small/small_hh_red.webp';
import LanceIconSmallRed from '$lib/client/images/weapon/small/small_lance.webp';
import GunlanceIconSmallRed from '$lib/client/images/weapon/small/small_gl_red.webp';
import TonfaIconSmallRed from '$lib/client/images/weapon/small/small_tonfa_red.webp';
import SwitchAxeFIconSmallRed from '$lib/client/images/weapon/small/small_saf_red.webp';
import MagnetSpikeIconSmallRed from '$lib/client/images/weapon/small/small_ms_red.webp';
import BowIconSmallRed from '$lib/client/images/weapon/small/small_bow_red.webp';
import LightBowgunIconSmallRed from '$lib/client/images/weapon/small/small_lbg_red.webp';
import HeavyBowgunIconSmallRed from '$lib/client/images/weapon/small/small_hbg_red.webp';

import ComponentMonsterRandom from '$lib/client/components/frontier/icon/monster/MonsterRandom.svelte';
import ComponentMonsterRathian from '$lib/client/components/frontier/icon/monster/MonsterRandom.svelte';
import ComponentMonsterFatalis from '$lib/client/components/frontier/icon/monster/Fatalis.svelte';
import ComponentMonsterKelbi from '$lib/client/components/frontier/icon/monster/MonsterRandom.svelte';
import ComponentMonsterMosswine from '$lib/client/components/frontier/icon/monster/MonsterRandom.svelte';
import ComponentMonsterBullfango from '$lib/client/components/frontier/icon/monster/MonsterRandom.svelte';
import ComponentMonsterYianKutKu from '$lib/client/components/frontier/icon/monster/MonsterRandom.svelte';
import ComponentMonsterLaoShanLung from '$lib/client/components/frontier/icon/monster/MonsterRandom.svelte';
import ComponentMonsterCephadrome from '$lib/client/components/frontier/icon/monster/MonsterRandom.svelte';
import ComponentMonsterFelyne from '$lib/client/components/frontier/icon/monster/MonsterRandom.svelte';
import ComponentMonsterRathalos from '$lib/client/components/frontier/icon/monster/MonsterRandom.svelte';
import ComponentMonsterAptonoth from '$lib/client/components/frontier/icon/monster/MonsterRandom.svelte';
import ComponentMonsterGenprey from '$lib/client/components/frontier/icon/monster/MonsterRandom.svelte';
import ComponentMonsterDiablos from '$lib/client/components/frontier/icon/monster/MonsterRandom.svelte';
import ComponentMonsterKhezu from '$lib/client/components/frontier/icon/monster/MonsterRandom.svelte';
import ComponentMonsterVelociprey from '$lib/client/components/frontier/icon/monster/MonsterRandom.svelte';
import ComponentMonsterGravios from '$lib/client/components/frontier/icon/monster/MonsterRandom.svelte';
import ComponentMonsterVespoid from '$lib/client/components/frontier/icon/monster/MonsterRandom.svelte';
import ComponentMonsterGypceros from '$lib/client/components/frontier/icon/monster/MonsterRandom.svelte';
import ComponentMonsterPlesioth from '$lib/client/components/frontier/icon/monster/MonsterRandom.svelte';
import ComponentMonsterBasarios from '$lib/client/components/frontier/icon/monster/MonsterRandom.svelte';
import ComponentMonsterMelynx from '$lib/client/components/frontier/icon/monster/MonsterRandom.svelte';
import ComponentMonsterHornetaur from '$lib/client/components/frontier/icon/monster/MonsterRandom.svelte';
import ComponentMonsterApceros from '$lib/client/components/frontier/icon/monster/MonsterRandom.svelte';
import ComponentMonsterMonoblos from '$lib/client/components/frontier/icon/monster/MonsterRandom.svelte';
import ComponentMonsterVelocidrome from '$lib/client/components/frontier/icon/monster/MonsterRandom.svelte';
import ComponentMonsterGendrome from '$lib/client/components/frontier/icon/monster/MonsterRandom.svelte';
import ComponentMonsterIoprey from '$lib/client/components/frontier/icon/monster/MonsterRandom.svelte';
import ComponentMonsterIodrome from '$lib/client/components/frontier/icon/monster/MonsterRandom.svelte';
import ComponentMonsterKirin from '$lib/client/components/frontier/icon/monster/MonsterRandom.svelte';
import ComponentMonsterCephalos from '$lib/client/components/frontier/icon/monster/MonsterRandom.svelte';
import ComponentMonsterGiapreyGiadrome from '$lib/client/components/frontier/icon/monster/MonsterRandom.svelte';
import ComponentMonsterCrimsonFatalis from '$lib/client/components/frontier/icon/monster/CrimsonFatalis3.svelte';
import ComponentMonsterPinkRathian from '$lib/client/components/frontier/icon/monster/MonsterRandom.svelte';
import ComponentMonsterBlueYianKutKu from '$lib/client/components/frontier/icon/monster/MonsterRandom.svelte';
import ComponentMonsterPurpleGypceros from '$lib/client/components/frontier/icon/monster/MonsterRandom.svelte';
import ComponentMonsterYianGaruga from '$lib/client/components/frontier/icon/monster/MonsterRandom.svelte';
import ComponentMonsterSilverRathalos from '$lib/client/components/frontier/icon/monster/MonsterRandom.svelte';
import ComponentMonsterGoldRathian from '$lib/client/components/frontier/icon/monster/MonsterRandom.svelte';
import ComponentMonsterBlackDiablos from '$lib/client/components/frontier/icon/monster/MonsterRandom.svelte';
import ComponentMonsterWhiteMonoblos from '$lib/client/components/frontier/icon/monster/MonsterRandom.svelte';
import ComponentMonsterRedKhezu from '$lib/client/components/frontier/icon/monster/MonsterRandom.svelte';
import ComponentMonsterGreenPlesioth from '$lib/client/components/frontier/icon/monster/MonsterRandom.svelte';
import ComponentMonsterBlackGravios from '$lib/client/components/frontier/icon/monster/MonsterRandom.svelte';
import ComponentMonsterDaimyoHermitaur from '$lib/client/components/frontier/icon/monster/MonsterRandom.svelte';
import ComponentMonsterAzureRathalos from '$lib/client/components/frontier/icon/monster/MonsterRandom.svelte';
import ComponentMonsterAshenLaoShanLung from '$lib/client/components/frontier/icon/monster/MonsterRandom.svelte';
import ComponentMonsterBlangonga from '$lib/client/components/frontier/icon/monster/MonsterRandom.svelte';
import ComponentMonsterCongalala from '$lib/client/components/frontier/icon/monster/MonsterRandom.svelte';
import ComponentMonsterRajang from '$lib/client/components/frontier/icon/monster/MonsterRandom.svelte';
import ComponentMonsterKushalaDaora from '$lib/client/components/frontier/icon/monster/MonsterRandom.svelte';
import ComponentMonsterShenGaoren from '$lib/client/components/frontier/icon/monster/ShenGaoren.svelte';
import ComponentMonsterGreatThunderbug from '$lib/client/components/frontier/icon/monster/MonsterRandom.svelte';
import ComponentMonsterShakalaka from '$lib/client/components/frontier/icon/monster/MonsterRandom.svelte';
import ComponentMonsterYamaTsukami from '$lib/client/components/frontier/icon/monster/YamaTsukami2.svelte';
import ComponentMonsterChameleos from '$lib/client/components/frontier/icon/monster/MonsterRandom.svelte';
import ComponentMonsterRustedKushalaDaora from '$lib/client/components/frontier/icon/monster/MonsterRandom.svelte';
import ComponentMonsterBlango from '$lib/client/components/frontier/icon/monster/MonsterRandom.svelte';
import ComponentMonsterConga from '$lib/client/components/frontier/icon/monster/MonsterRandom.svelte';
import ComponentMonsterRemobra from '$lib/client/components/frontier/icon/monster/MonsterRandom.svelte';
import ComponentMonsterLunastra from '$lib/client/components/frontier/icon/monster/MonsterRandom.svelte';
import ComponentMonsterTeostra from '$lib/client/components/frontier/icon/monster/MonsterRandom.svelte';
import ComponentMonsterHermitaur from '$lib/client/components/frontier/icon/monster/MonsterRandom.svelte';
import ComponentMonsterShogunCeanataur from '$lib/client/components/frontier/icon/monster/MonsterRandom.svelte';
import ComponentMonsterBulldrome from '$lib/client/components/frontier/icon/monster/MonsterRandom.svelte';
import ComponentMonsterAnteka from '$lib/client/components/frontier/icon/monster/MonsterRandom.svelte';
import ComponentMonsterPopo from '$lib/client/components/frontier/icon/monster/MonsterRandom.svelte';
import ComponentMonsterWhiteFatalis from '$lib/client/components/frontier/icon/monster/WhiteFatalis6.svelte';
import ComponentMonsterCeanataur from '$lib/client/components/frontier/icon/monster/MonsterRandom.svelte';
import ComponentMonsterHypnocatrice from '$lib/client/components/frontier/icon/monster/MonsterRandom.svelte';
import ComponentMonsterLavasioth from '$lib/client/components/frontier/icon/monster/Lavasioth.svelte';
import ComponentMonsterTigrex from '$lib/client/components/frontier/icon/monster/MonsterRandom.svelte';
import ComponentMonsterAkantor from '$lib/client/components/frontier/icon/monster/Akantor.svelte';
import ComponentMonsterBrightHypnoc from '$lib/client/components/frontier/icon/monster/MonsterRandom.svelte';
import ComponentMonsterRedLavasioth from '$lib/client/components/frontier/icon/monster/MonsterRandom.svelte';
import ComponentMonsterEspinas from '$lib/client/components/frontier/icon/monster/MonsterRandom.svelte';
import ComponentMonsterOrangeEspinas from '$lib/client/components/frontier/icon/monster/MonsterRandom.svelte';
import ComponentMonsterSilverHypnoc from '$lib/client/components/frontier/icon/monster/MonsterRandom.svelte';
import ComponentMonsterAkuraVashimu from '$lib/client/components/frontier/icon/monster/AkuraVashimu2.svelte';
import ComponentMonsterAkuraJebia from '$lib/client/components/frontier/icon/monster/AkuraJebia2.svelte';
import ComponentMonsterBerukyurosu from '$lib/client/components/frontier/icon/monster/MonsterRandom.svelte';
import ComponentMonsterCactus from '$lib/client/components/frontier/icon/monster/MonsterRandom.svelte';
import ComponentMonsterPariapuria from '$lib/client/components/frontier/icon/monster/MonsterRandom.svelte';
import ComponentMonsterWhiteEspinas from '$lib/client/components/frontier/icon/monster/MonsterRandom.svelte';
import ComponentMonsterKamuOrugaron from '$lib/client/components/frontier/icon/monster/MonsterRandom.svelte';
import ComponentMonsterNonoOrugaron from '$lib/client/components/frontier/icon/monster/MonsterRandom.svelte';
import ComponentMonsterRaviente from '$lib/client/components/frontier/icon/monster/MonsterRandom.svelte';
import ComponentMonsterDyuragaua from '$lib/client/components/frontier/icon/monster/MonsterRandom.svelte';
import ComponentMonsterDoragyurosu from '$lib/client/components/frontier/icon/monster/Doragyurosu.svelte';
import ComponentMonsterGurenzeburu from '$lib/client/components/frontier/icon/monster/MonsterRandom.svelte';
import ComponentMonsterBurukku from '$lib/client/components/frontier/icon/monster/MonsterRandom.svelte';
import ComponentMonsterErupe from '$lib/client/components/frontier/icon/monster/MonsterRandom.svelte';
import ComponentMonsterRukodiora from '$lib/client/components/frontier/icon/monster/Rukodiora2.svelte';
import ComponentMonsterUNKNOWN from '$lib/client/components/frontier/icon/monster/MonsterRandom.svelte';
import ComponentMonsterGogomoa from '$lib/client/components/frontier/icon/monster/MonsterRandom.svelte';
import ComponentMonsterTaikunZamuza from '$lib/client/components/frontier/icon/monster/MonsterRandom.svelte';
import ComponentMonsterAbiorugu from '$lib/client/components/frontier/icon/monster/Abiorugu3.svelte';
import ComponentMonsterKuarusepusu from '$lib/client/components/frontier/icon/monster/MonsterRandom.svelte';
import ComponentMonsterOdibatorasu from '$lib/client/components/frontier/icon/monster/MonsterRandom.svelte';
import ComponentMonsterDisufiroa from '$lib/client/components/frontier/icon/monster/MonsterRandom.svelte';
import ComponentMonsterRebidiora from '$lib/client/components/frontier/icon/monster/MonsterRandom.svelte';
import ComponentMonsterAnorupatisu from '$lib/client/components/frontier/icon/monster/Anorupatisu2.svelte';
import ComponentMonsterHyujikiki from '$lib/client/components/frontier/icon/monster/MonsterRandom.svelte';
import ComponentMonsterMidogaron from '$lib/client/components/frontier/icon/monster/MonsterRandom.svelte';
import ComponentMonsterGiaorugu from '$lib/client/components/frontier/icon/monster/MonsterRandom.svelte';
import ComponentMonsterMiRu from '$lib/client/components/frontier/icon/monster/MonsterRandom.svelte';
import ComponentMonsterFarunokku from '$lib/client/components/frontier/icon/monster/MonsterRandom.svelte';
import ComponentMonsterPokaradon from '$lib/client/components/frontier/icon/monster/MonsterRandom.svelte';
import ComponentMonsterShantien from '$lib/client/components/frontier/icon/monster/MonsterRandom.svelte';
import ComponentMonsterPokara from '$lib/client/components/frontier/icon/monster/MonsterRandom.svelte';
import ComponentMonsterGoruganosu from '$lib/client/components/frontier/icon/monster/Goruganosu.svelte';
import ComponentMonsterAruganosu from '$lib/client/components/frontier/icon/monster/Aruganosu.svelte';
import ComponentMonsterBaruragaru from '$lib/client/components/frontier/icon/monster/MonsterRandom.svelte';
import ComponentMonsterZerureusu from '$lib/client/components/frontier/icon/monster/MonsterRandom.svelte';
import ComponentMonsterGougarf from '$lib/client/components/frontier/icon/monster/MonsterRandom.svelte';
import ComponentMonsterUruki from '$lib/client/components/frontier/icon/monster/MonsterRandom.svelte';
import ComponentMonsterForokururu from '$lib/client/components/frontier/icon/monster/MonsterRandom.svelte';
import ComponentMonsterMeraginasu from '$lib/client/components/frontier/icon/monster/MonsterRandom.svelte';
import ComponentMonsterDiorex from '$lib/client/components/frontier/icon/monster/MonsterRandom.svelte';
import ComponentMonsterGarubaDaora from '$lib/client/components/frontier/icon/monster/MonsterRandom.svelte';
import ComponentMonsterInagami from '$lib/client/components/frontier/icon/monster/MonsterRandom.svelte';
import ComponentMonsterVarusaburosu from '$lib/client/components/frontier/icon/monster/MonsterRandom.svelte';
import ComponentMonsterPoborubarumu from '$lib/client/components/frontier/icon/monster/MonsterRandom.svelte';
import ComponentMonsterDuremudira from '$lib/client/components/frontier/icon/monster/MonsterRandom.svelte';
import ComponentMonsterGureadomosu from '$lib/client/components/frontier/icon/monster/MonsterRandom.svelte';
import ComponentMonsterHarudomerugu from '$lib/client/components/frontier/icon/monster/MonsterRandom.svelte';
import ComponentMonsterToridcless from '$lib/client/components/frontier/icon/monster/MonsterRandom.svelte';
import ComponentMonsterGasurabazura from '$lib/client/components/frontier/icon/monster/MonsterRandom.svelte';
import ComponentMonsterKusubami from '$lib/client/components/frontier/icon/monster/MonsterRandom.svelte';
import ComponentMonsterYamaKurai from '$lib/client/components/frontier/icon/monster/YamaKurai2.svelte';
import ComponentMonsterZinogre from '$lib/client/components/frontier/icon/monster/MonsterRandom.svelte';
import ComponentMonsterDeviljho from '$lib/client/components/frontier/icon/monster/MonsterRandom.svelte';
import ComponentMonsterBrachydios from '$lib/client/components/frontier/icon/monster/MonsterRandom.svelte';
import ComponentMonsterBerserkRaviente from '$lib/client/components/frontier/icon/monster/MonsterRandom.svelte';
import ComponentMonsterToaTesukatora from '$lib/client/components/frontier/icon/monster/MonsterRandom.svelte';
import ComponentMonsterBarioth from '$lib/client/components/frontier/icon/monster/MonsterRandom.svelte';
import ComponentMonsterUragaan from '$lib/client/components/frontier/icon/monster/MonsterRandom.svelte';
import ComponentMonsterStygianZinogre from '$lib/client/components/frontier/icon/monster/MonsterRandom.svelte';
import ComponentMonsterGuanzorumu from '$lib/client/components/frontier/icon/monster/MonsterRandom.svelte';
import ComponentMonsterStarvingDeviljho from '$lib/client/components/frontier/icon/monster/StarvingDeviljho.svelte';
import ComponentMonsterVoljang from '$lib/client/components/frontier/icon/monster/MonsterRandom.svelte';
import ComponentMonsterNargacuga from '$lib/client/components/frontier/icon/monster/MonsterRandom.svelte';
import ComponentMonsterKeoaruboru from '$lib/client/components/frontier/icon/monster/MonsterRandom.svelte';
import ComponentMonsterZenaserisu from '$lib/client/components/frontier/icon/monster/MonsterRandom.svelte';
import ComponentMonsterGoreMagala from '$lib/client/components/frontier/icon/monster/MonsterRandom.svelte';
import ComponentMonsterBlinkingNargacuga from '$lib/client/components/frontier/icon/monster/BlinkingNargacuga2.svelte';
import ComponentMonsterShagaruMagala from '$lib/client/components/frontier/icon/monster/MonsterRandom.svelte';
import ComponentMonsterAmatsu from '$lib/client/components/frontier/icon/monster/Amatsu2.svelte';
import ComponentMonsterElzelion from '$lib/client/components/frontier/icon/monster/MonsterRandom.svelte';
import ComponentMonsterArrogantDuremudira from '$lib/client/components/frontier/icon/monster/ArrogantDuremudira2.svelte';
import ComponentMonsterSeregios from '$lib/client/components/frontier/icon/monster/MonsterRandom.svelte';
import ComponentMonsterBogabadorumu from '$lib/client/components/frontier/icon/monster/Bogabadorumu6.svelte';
import ComponentMonsterBlitzkriegBogabadorumu from '$lib/client/components/frontier/icon/monster/BlitzkriegBogabadorumu2.svelte';
import ComponentMonsterSparklingZerureusu from '$lib/client/components/frontier/icon/monster/SparklingZerureusu.svelte';
import ComponentMonsterPSO2Rappy from '$lib/client/components/frontier/icon/monster/MonsterRandom.svelte';
import ComponentMonsterKingShakalaka from '$lib/client/components/frontier/icon/monster/MonsterRandom.svelte';

import ComponentMonsterZenithAkuraVashimu from '$lib/client/components/frontier/icon/monster/MonsterRandom.svelte';
import ComponentMonsterZenithAnorupatisu from '$lib/client/components/frontier/icon/monster/MonsterRandom.svelte';
import ComponentMonsterZenithBaruragaru from '$lib/client/components/frontier/icon/monster/MonsterRandom.svelte';
import ComponentMonsterZenithBlangonga from '$lib/client/components/frontier/icon/monster/MonsterRandom.svelte';
import ComponentMonsterZenithBogabadorumu from '$lib/client/components/frontier/icon/monster/MonsterRandom.svelte';
import ComponentMonsterZenithDaimyoHermitaur from '$lib/client/components/frontier/icon/monster/MonsterRandom.svelte';
import ComponentMonsterZenithDoragyurosu from '$lib/client/components/frontier/icon/monster/MonsterRandom.svelte';
import ComponentMonsterZenithEspinas from '$lib/client/components/frontier/icon/monster/MonsterRandom.svelte';
import ComponentMonsterZenithGasurabazura from '$lib/client/components/frontier/icon/monster/MonsterRandom.svelte';
import ComponentMonsterZenithGiaorugu from '$lib/client/components/frontier/icon/monster/MonsterRandom.svelte';
import ComponentMonsterZenithGravios from '$lib/client/components/frontier/icon/monster/MonsterRandom.svelte';
import ComponentMonsterZenithHarudomerugu from '$lib/client/components/frontier/icon/monster/MonsterRandom.svelte';
import ComponentMonsterZenithHypnoc from '$lib/client/components/frontier/icon/monster/MonsterRandom.svelte';
import ComponentMonsterZenithHyujikiki from '$lib/client/components/frontier/icon/monster/MonsterRandom.svelte';
import ComponentMonsterZenithInagami from '$lib/client/components/frontier/icon/monster/MonsterRandom.svelte';
import ComponentMonsterZenithKhezu from '$lib/client/components/frontier/icon/monster/MonsterRandom.svelte';
import ComponentMonsterZenithMidogaron from '$lib/client/components/frontier/icon/monster/MonsterRandom.svelte';
import ComponentMonsterZenithPlesioth from '$lib/client/components/frontier/icon/monster/MonsterRandom.svelte';
import ComponentMonsterZenithRathalos from '$lib/client/components/frontier/icon/monster/MonsterRandom.svelte';
import ComponentMonsterZenithRukodiora from '$lib/client/components/frontier/icon/monster/ZenithRukodiora3.svelte';
import ComponentMonsterZenithTaikunZamuza from '$lib/client/components/frontier/icon/monster/MonsterRandom.svelte';
import ComponentMonsterZenithTigrex from '$lib/client/components/frontier/icon/monster/MonsterRandom.svelte';
import ComponentMonsterZenithToridcless from '$lib/client/components/frontier/icon/monster/MonsterRandom.svelte';
import ComponentMonsterConquestFatalis from '$lib/client/components/frontier/icon/monster/ConquestFatalis4.svelte';
import ComponentMonsterConquestShantien from '$lib/client/components/frontier/icon/monster/MonsterRandom.svelte';
import ComponentMonsterConquestCrimsonFatalis from '$lib/client/components/frontier/icon/monster/ConquestCrimsonFatalis7.svelte';
import ComponentMonsterShitenDisufiroa from '$lib/client/components/frontier/icon/monster/MonsterRandom.svelte';
import ComponentMonsterShitenUnknown from '$lib/client/components/frontier/icon/monster/MonsterRandom.svelte';
import ComponentMonsterBurningFreezingElzelion from '$lib/client/components/frontier/icon/monster/BurningFreezingElzelion2.svelte';
import ComponentMonsterHowlingZinogre from '$lib/client/components/frontier/icon/monster/HowlingZinogre3.svelte';
import ComponentMonsterSupremacyPariapuria from '$lib/client/components/frontier/icon/monster/ThirstyPariapuria.svelte';
import ComponentMonsterSupremacyDoragyurosu from '$lib/client/components/frontier/icon/monster/SupremacyDoragyurosu.svelte';
import ComponentMonsterSupremacyTeostra from '$lib/client/components/frontier/icon/monster/SupremacyTeostra.svelte';
import ComponentMonsterSupremacyOdibatorasu from '$lib/client/components/frontier/icon/monster/MonsterRandom.svelte';
import ComponentMonsterGoldenDeviljho from '$lib/client/components/frontier/icon/monster/GoldenDeviljho3.svelte';
import ComponentMonsterFuriousRajang from '$lib/client/components/frontier/icon/monster/MonsterRandom.svelte';
import ComponentMonsterRulingGuanzorumu from '$lib/client/components/frontier/icon/monster/RulingGuanzorumu.svelte';
import ComponentMonsterShiftingMiRu from '$lib/client/components/frontier/icon/monster/ShiftingMiRu.svelte';
import ComponentMonsterTwinheadRajang from '$lib/client/components/frontier/icon/monster/MonsterRandom.svelte';
import ComponentMonsterRoadWhiteFatalis from '$lib/client/components/frontier/icon/monster/RoadWhiteFatalis3.svelte';

/*
https://www.typescriptlang.org/docs/handbook/enums.html#objects-vs-enums
The biggest argument in favour of this format over TypeScript’s enum is that it keeps your codebase aligned with the state of JavaScript, and when/if enums are added to JavaScript then you can move to the additional syntax.
*/
export const ODirection = {
	Up: 0,
	Down: 1,
	Left: 2,
	Right: 3,
} as const;

export const Sharpness = {
	Red: 0,
	Orange: 1,
	Yellow: 2,
	Green: 3,
	Blue: 4,
	White: 5,
	Purple: 6,
	Cyan: 7,
} as const;

export const ItemColors: { name: FrontierItemColor; value: string }[] = [
	{ name: 'White', value: '#ffffff' },
	{ name: 'Red', value: '#ff435d' },
	{ name: 'Green', value: '#56ff56' },
	{ name: 'Blue', value: '#4040ff' },
	{ name: 'Yellow', value: '#ffff50' },
	{ name: 'Purple', value: '#cba6fa' },
	{ name: 'Cyan', value: '#57ffff' },
	{ name: 'Orange', value: '#ffc850' }, // unk
	{ name: 'Pink', value: '#ff84ff' },
	{ name: 'Brown', value: '#bf6464' }, // unk
	{ name: 'Gray', value: '#7f7f7f' },
];

export const StatusIcons: { name: FrontierStatus; icon: any }[] = [
	{ name: '', icon: '' },
	{ name: 'None', icon: '' },
	{ name: 'Def', icon: '' }, // TODO
	{
		name: 'Poison',
		icon: IconStatusPoison,
	},
	{
		name: 'Paralysis',
		icon: IconStatusParalysis,
	},
	{
		name: 'Sleep',
		icon: IconStatusSleep,
	},
	{
		name: 'Blast',
		icon: IconStatusBlast,
	},
];

export const AilmentIcons: { name: FrontierAilment; icon: any }[] = [
	{ name: '', icon: '' },
	{ name: 'None', icon: '' },
	{ name: 'Bleed', icon: IconAilmentBleed }, //
	{ name: 'Blind', icon: IconAilmentBlind },
	{ name: 'Corrupted Poison', icon: IconAilmentCorruptedPoison },
	{ name: 'Crystal', icon: IconAilmentCrystal },
	{ name: 'Dracophage Erosion', icon: IconAilmentDracophageErosion },
	{ name: 'Extreme Fireblight', icon: IconAilmentExtremeFireblight },
	{ name: 'Extreme Waterblight', icon: IconAilmentExtremeWaterblight },
	{ name: 'Extreme Thunderblight', icon: IconAilmentExtremeThunderblight },
	{ name: 'Extreme Iceblight', icon: IconAilmentExtremeIceblight },
	{ name: 'Extreme Dragonblight', icon: IconAilmentExtremeDragonblight },
	{ name: 'Extreme Poison', icon: IconAilmentExtremePoison },
	{ name: 'Extreme Sleep', icon: IconAilmentExtremeSleep },
	{ name: 'Extreme Paralysis', icon: IconAilmentExtremeParalysis },
	{ name: 'Fatigue', icon: IconAilmentFatigue },
	{ name: 'Frostbite', icon: IconAilmentFrostbite },
	{ name: 'Magnetism', icon: IconAilmentMagnetism },
	{ name: 'Snowman', icon: IconAilmentSnowman },
	{ name: 'Stench', icon: IconAilmentStench },
	{ name: 'Stun', icon: IconAilmentStun },
	{ name: 'Vocal Cord Paralysis', icon: IconAilmentVocalCordParalysis },
];

export const ElementIcons: { name: FrontierElement; icon: any }[] = [
	{
		name: '',
		icon: '',
	},
	{
		name: 'Raw',
		icon: '',
	},
	{
		name: 'None',
		icon: '',
	},
	{
		name: 'Fire',
		icon: IconElementFire,
	},
	{
		name: 'Water',
		icon: IconElementWater,
	},
	{
		name: 'Thunder',
		icon: IconElementThunder,
	},
	{
		name: 'Ice',
		icon: IconElementIce,
	},
	{
		name: 'Dragon',
		icon: IconElementDragon,
	},
	{
		name: 'Light',
		icon: IconElementLight,
	},
	{
		name: 'Blaze',
		icon: IconElementBlaze,
	},
	{
		name: 'Tenshou',
		icon: IconElementTenshou,
	},
	{
		name: 'Okiko',
		icon: IconElementOkiko,
	},
	{
		name: 'L. Rod',
		icon: IconElementLightingRod,
	},
	{
		name: 'Lightning Rod',
		icon: IconElementLightingRod,
	},
	{
		name: 'B. Flame',
		icon: IconElementBlackFlame,
	},
	{
		name: 'Black Flame',
		icon: IconElementBlackFlame,
	},
	{
		name: 'C. Demon',
		icon: IconElementCrimsonDemon,
	},
	{
		name: 'Crimson Demon',
		icon: IconElementCrimsonDemon,
	},
	{
		name: 'E. Roar',
		icon: IconElementEmperorRoar,
	},
	{
		name: "Emperor's Roar",
		icon: IconElementEmperorRoar,
	},
	{
		name: 'B. Zero',
		icon: IconElementBurningZero,
	},

	{
		name: 'Burning Zero',
		icon: IconElementBurningZero,
	},
	{
		name: 'Dark',
		icon: IconElementDark,
	},
	{
		name: 'Music',
		icon: IconElementMusic,
	},
	{
		name: 'Sound',
		icon: IconElementSound,
	},
	{
		name: 'Wind',
		icon: IconElementWind,
	},
];

export const ItemIcons: { name: string; icon: any }[] = [
	{
		name: 'Armor Sphere',
		icon: ArmorSphereIconWhite,
	},
	{
		name: 'Bait',
		icon: BaitIconWhite,
	},
	{
		name: 'Ball',
		icon: BallIconWhite,
	},
	{
		name: 'Barrel',
		icon: BarrelIconWhite,
	},
	{
		name: 'BBQ',
		icon: BbqIconWhite,
	},
	{
		name: 'Berry',
		icon: BerryIconWhite,
	},
	{
		name: 'Bomb',
		icon: BombIconWhite,
	},
	{
		name: 'Bone',
		icon: BoneIconWhite,
	},
	{
		name: 'Book',
		icon: BookIconWhite,
	},
	{
		name: 'Bug',
		icon: BugIconWhite,
	},
	{
		name: 'Bugnet',
		icon: BugnetIconWhite,
	},
	{
		name: 'Carapace',
		icon: CarapaceIconWhite,
	},
	{
		name: 'Charm',
		icon: CharmIconWhite,
	},
	{
		name: 'Claw',
		icon: ClawIconWhite,
	},
	{
		name: 'Coating',
		icon: CoatingIconWhite,
	},
	{
		name: 'Coin',
		icon: CoinIconWhite,
	},
	{
		name: 'Egg',
		icon: EggIconWhite,
	},
	{
		name: 'Eye',
		icon: EyeIconWhite,
	},
	{
		name: 'Fang',
		icon: FangIconWhite,
	},
	{
		name: 'Fin',
		icon: FinIconWhite,
	},
	{
		name: 'Fish',
		icon: FishIconWhite,
	},
	{
		name: 'Flask',
		icon: FlaskIconWhite,
	},
	{
		name: 'Fluid',
		icon: FluidIconWhite,
	},
	{
		name: 'Flute',
		icon: FluteIconWhite,
	},
	{
		name: 'Head',
		icon: HeadIconWhite,
	},
	{
		name: 'Herb',
		icon: HerbIconWhite,
	},
	{
		name: 'Hide',
		icon: HideIconWhite,
	},
	{
		name: 'Horn',
		icon: HornIconWhite,
	},
	{
		name: 'Jewel',
		icon: JewelIconWhite,
	},
	{
		name: 'Knife',
		icon: KnifeIconWhite,
	},
	{
		name: 'Mantle',
		icon: MantleIconWhite,
	},
	{
		name: 'Map',
		icon: MapIconWhite,
	},
	{
		name: 'Meat',
		icon: MeatIconWhite,
	},
	{
		name: 'Medicine',
		icon: MedicineIconWhite,
	},
	{
		name: 'Monster Part',
		icon: MonsterPartIconWhite,
	},
	{
		name: 'Mushroom',
		icon: MushroomIconWhite,
	},
	{
		name: 'Ore',
		icon: OreIconWhite,
	},
	{
		name: 'Ore Special',
		icon: OreIconSpecial_001,
	},
	{
		name: 'Pickaxe',
		icon: PickaxeIconWhite,
	},
	{
		name: 'Pill',
		icon: PillIconWhite,
	},
	{
		name: 'Plate',
		icon: PlateIconWhite,
	},
	{
		name: 'Question Mark',
		icon: QuestionMarkIconWhite,
	},
	{
		name: 'Sac',
		icon: SacIconWhite,
	},
	{
		name: 'Scale',
		icon: ScaleIconWhite,
	},
	{
		name: 'Scrap',
		icon: ScrapIconWhite,
	},
	{
		name: 'Seed',
		icon: SeedIconWhite,
	},
	{
		name: 'Shell',
		icon: ShellIconWhite,
	},
	{
		name: 'Shot',
		icon: ShotIconWhite,
	},
	{
		name: 'Smoke',
		icon: SmokeIconWhite,
	},
	{
		name: 'Steak',
		icon: SteakIconWhite,
	},
	{
		name: 'Tail',
		icon: TailIconWhite,
	},
	{
		name: 'Talisman',
		icon: TalismanIconWhite,
	},
	{
		name: 'Ticket',
		icon: TicketIconWhite,
	},
	{
		name: 'Tower Sigil',
		icon: TowerSigil,
	},
	{
		name: 'Trap',
		icon: TrapIconWhite,
	},
	{
		name: 'Trap Tool',
		icon: TrapToolIconWhite,
	},
	{
		name: 'Vegetable',
		icon: VegetableIconWhite,
	},
	{
		name: 'Vial',
		icon: VialIconWhite,
	},
	{
		name: 'Voucher',
		icon: VoucherIconWhite,
	},
	{
		name: 'Webbing',
		icon: WebbingIconWhite,
	},
	{
		name: 'Whetstone',
		icon: WhetstoneIconWhite,
	},
	{
		name: 'Wing',
		icon: WingIconWhite,
	},
	{
		name: 'Wood',
		icon: WoodIconWhite,
	},
];

export const ArmorTypes: FrontierArmor[] = [
	{
		id: 0,
		name: 'Head',
		icon: ArmorHelmetIcon,
	},

	{
		id: 1,
		name: 'Chest',
		icon: ArmorChestIcon,
	},

	{
		id: 2,
		name: 'Arms',
		icon: ArmorArmsIcon,
	},

	{
		id: 3,
		name: 'Waist',
		icon: ArmorWaistIcon,
	},

	{
		id: 4,
		name: 'Legs',
		icon: ArmorLegsIcon,
	},
];

export const MonsterIcons: {
	name: FrontierMonsterName;
	rank: FrontierRankBand;
	icon: any;
	render: any;
	component: any;
	unusedComponent: boolean;
	displayName: string;
}[] = [
	{
		name: '',
		icon: IconMonsterRandom,
		rank: '',
		render: IconMonsterRandom,
		component: ComponentMonsterRandom,
		unusedComponent: false,
		displayName: 'Random',
	},
	{
		name: 'Rathian',
		icon: IconMonsterRathian,
		rank: 'G Rank',
		render: IconRenderMonsterRathian,
		component: ComponentMonsterRathian,
		unusedComponent: true,
		displayName: 'Rathian',
	},
	{
		name: 'Fatalis',
		icon: IconMonsterFatalis,
		rank: '',
		render: IconRenderMonsterFatalis,
		component: ComponentMonsterFatalis,
		unusedComponent: false,
		displayName: 'Fatalis',
	},
	{
		name: 'Kelbi',
		icon: IconMonsterKelbi,
		rank: 'G Rank',
		render: IconRenderMonsterKelbi,
		component: ComponentMonsterKelbi,
		unusedComponent: true,
		displayName: 'Kelbi',
	},
	{
		name: 'Mosswine',
		icon: IconMonsterMosswine,
		rank: 'G Rank',
		render: IconRenderMonsterMosswine,
		component: ComponentMonsterMosswine,
		unusedComponent: true,
		displayName: 'Mosswine',
	},
	{
		name: 'Bullfango',
		icon: IconMonsterBullfango,
		rank: 'G Rank',
		render: IconRenderMonsterBullfango,
		component: ComponentMonsterBullfango,
		unusedComponent: true,
		displayName: 'Bullfango',
	},
	{
		name: 'Yian Kut-Ku',
		icon: IconMonsterYianKutKu,
		rank: 'G Rank',
		render: IconRenderMonsterYianKutKu,
		component: ComponentMonsterYianKutKu,
		unusedComponent: true,
		displayName: 'Yian Kut-Ku',
	},
	{
		name: 'Lao-Shan Lung',
		icon: IconMonsterLaoShanLung,
		rank: 'G Rank',
		render: IconRenderMonsterLaoShanLung,
		component: ComponentMonsterLaoShanLung,
		unusedComponent: true,
		displayName: 'Lao-Shan Lung',
	},
	{
		name: 'Cephadrome',
		icon: IconMonsterCephadrome,
		rank: 'G Rank',
		render: IconRenderMonsterCephadrome,
		component: ComponentMonsterCephadrome,
		unusedComponent: true,
		displayName: 'Cephadrome',
	},
	{
		name: 'Felyne',
		icon: IconMonsterFelyne,
		rank: 'G Rank',
		render: IconRenderMonsterFelyne,
		component: ComponentMonsterFelyne,
		unusedComponent: true,
		displayName: 'Felyne',
	},
	{
		name: 'Rathalos',
		icon: IconMonsterRathalos,
		rank: 'G Rank',
		render: IconRenderMonsterRathalos,
		component: ComponentMonsterRathalos,
		unusedComponent: true,
		displayName: 'Rathalos',
	},
	{
		name: 'Aptonoth',
		icon: IconMonsterAptonoth,
		rank: 'G Rank',
		render: IconRenderMonsterAptonoth,
		component: ComponentMonsterAptonoth,
		unusedComponent: true,
		displayName: 'Aptonoth',
	},
	{
		name: 'Genprey',
		icon: IconMonsterGenprey,
		rank: 'G Rank',
		render: IconRenderMonsterGenprey,
		component: ComponentMonsterGenprey,
		unusedComponent: true,
		displayName: 'Genprey',
	},
	{
		name: 'Diablos',
		icon: IconMonsterDiablos,
		rank: 'G Rank',
		render: IconRenderMonsterDiablos,
		component: ComponentMonsterDiablos,
		unusedComponent: true,
		displayName: 'Diablos',
	},
	{
		name: 'Khezu',
		icon: IconMonsterKhezu,
		rank: 'G Rank',
		render: IconRenderMonsterKhezu,
		component: ComponentMonsterKhezu,
		unusedComponent: true,
		displayName: 'Khezu',
	},
	{
		name: 'Velociprey',
		icon: IconMonsterVelociprey,
		rank: 'G Rank',
		render: IconRenderMonsterVelociprey,
		component: ComponentMonsterVelociprey,
		unusedComponent: true,
		displayName: 'Velociprey',
	},
	{
		name: 'Gravios',
		icon: IconMonsterGravios,
		rank: 'G Rank',
		render: IconRenderMonsterGravios,
		component: ComponentMonsterGravios,
		unusedComponent: true,
		displayName: 'Gravios',
	},
	{
		name: 'Vespoid',
		icon: IconMonsterVespoid,
		rank: 'G Rank',
		render: IconRenderMonsterVespoid,
		component: ComponentMonsterVespoid,
		unusedComponent: true,
		displayName: 'Vespoid',
	},
	{
		name: 'Gypceros',
		icon: IconMonsterGypceros,
		rank: 'G Rank',
		render: IconRenderMonsterGypceros,
		component: ComponentMonsterGypceros,
		unusedComponent: true,
		displayName: 'Gypceros',
	},
	{
		name: 'Plesioth',
		icon: IconMonsterPlesioth,
		rank: 'G Rank',
		render: IconRenderMonsterPlesioth,
		component: ComponentMonsterPlesioth,
		unusedComponent: true,
		displayName: 'Plesioth',
	},
	{
		name: 'Basarios',
		icon: IconMonsterBasarios,
		rank: 'G Rank',
		render: IconRenderMonsterBasarios,
		component: ComponentMonsterBasarios,
		unusedComponent: true,
		displayName: 'Basarios',
	},
	{
		name: 'Melynx',
		icon: IconMonsterMelynx,
		rank: 'G Rank',
		render: IconRenderMonsterMelynx,
		component: ComponentMonsterMelynx,
		unusedComponent: true,
		displayName: 'Melynx',
	},
	{
		name: 'Hornetaur',
		icon: IconMonsterHornetaur,
		rank: 'G Rank',
		render: IconRenderMonsterHornetaur,
		component: ComponentMonsterHornetaur,
		unusedComponent: true,
		displayName: 'Hornetaur',
	},
	{
		name: 'Apceros',
		icon: IconMonsterApceros,
		rank: 'G Rank',
		render: IconRenderMonsterApceros,
		component: ComponentMonsterApceros,
		unusedComponent: true,
		displayName: 'Apceros',
	},
	{
		name: 'Monoblos',
		displayName: 'Monoblos',
		icon: IconMonsterMonoblos,
		rank: 'G Rank',
		render: IconRenderMonsterMonoblos,
		component: ComponentMonsterMonoblos,
		unusedComponent: true,
	},
	{
		name: 'Velocidrome',
		displayName: 'Velocidrome',
		icon: IconMonsterVelocidrome,
		rank: 'G Rank',
		render: IconRenderMonsterVelocidrome,
		component: ComponentMonsterVelocidrome,
		unusedComponent: true,
	},
	{
		name: 'Gendrome',
		displayName: 'Gendrome',
		icon: IconMonsterGendrome,
		rank: 'G Rank',
		render: IconRenderMonsterGendrome,
		component: ComponentMonsterGendrome,
		unusedComponent: true,
	},
	{
		name: 'Ioprey',
		displayName: 'Ioprey',
		icon: IconMonsterIoprey,
		rank: 'G Rank',
		render: IconRenderMonsterIoprey,
		component: ComponentMonsterIoprey,
		unusedComponent: true,
	},
	{
		name: 'Iodrome',
		displayName: 'Iodrome',
		icon: IconMonsterIodrome,
		rank: 'G Rank',
		render: IconRenderMonsterIodrome,
		component: ComponentMonsterIodrome,
		unusedComponent: true,
	},
	{
		name: 'Kirin',
		displayName: 'Kirin',
		icon: IconMonsterKirin,
		rank: 'G Rank',
		render: IconRenderMonsterKirin,
		component: ComponentMonsterKirin,
		unusedComponent: true,
	},
	{
		name: 'Cephalos',
		displayName: 'Cephalos',
		icon: IconMonsterCephalos,
		rank: 'G Rank',
		render: IconRenderMonsterCephalos,
		component: ComponentMonsterCephalos,
		unusedComponent: true,
	},
	{
		name: 'Giaprey / Giadrome',
		displayName: 'Giaprey / Giadrome',
		icon: IconMonsterGiapreyGiadrome,
		rank: 'G Rank',
		render: IconRenderMonsterGiapreyGiadrome,
		component: ComponentMonsterGiapreyGiadrome,
		unusedComponent: true,
	},
	{
		name: 'Crimson Fatalis',
		displayName: 'Crimson Fatalis',
		icon: IconMonsterCrimsonFatalis,
		rank: '',
		render: IconRenderMonsterCrimsonFatalis,
		component: ComponentMonsterCrimsonFatalis,
		unusedComponent: false,
	},
	{
		name: 'Pink Rathian',
		displayName: 'Pink Rathian',
		icon: IconMonsterPinkRathian,
		rank: 'G Rank',
		render: IconRenderMonsterPinkRathian,
		component: ComponentMonsterPinkRathian,
		unusedComponent: true,
	},
	{
		name: 'Blue Yian Kut-Ku',
		displayName: 'Blue Yian Kut-Ku',
		icon: IconMonsterBlueYianKutKu,
		rank: 'G Rank',
		render: IconRenderMonsterBlueYianKutKu,
		component: ComponentMonsterBlueYianKutKu,
		unusedComponent: true,
	},
	{
		name: 'Purple Gypceros',
		displayName: 'Purple Gypceros',
		icon: IconMonsterPurpleGypceros,
		rank: 'G Rank',
		render: IconRenderMonsterPurpleGypceros,
		component: ComponentMonsterPurpleGypceros,
		unusedComponent: true,
	},
	{
		name: 'Yian Garuga',
		displayName: 'Yian Garuga',
		icon: IconMonsterYianGaruga,
		rank: 'G Rank',
		render: IconRenderMonsterYianGaruga,
		component: ComponentMonsterYianGaruga,
		unusedComponent: true,
	},
	{
		name: 'Silver Rathalos',
		displayName: 'Silver Rathalos',
		icon: IconMonsterSilverRathalos,
		rank: 'G Rank',
		render: IconRenderMonsterSilverRathalos,
		component: ComponentMonsterSilverRathalos,
		unusedComponent: true,
	},
	{
		name: 'Gold Rathian',
		displayName: 'Gold Rathian',
		icon: IconMonsterGoldRathian,
		rank: 'G Rank',
		render: IconRenderMonsterGoldRathian,
		component: ComponentMonsterGoldRathian,
		unusedComponent: true,
	},
	{
		name: 'Black Diablos',
		displayName: 'Black Diablos',
		icon: IconMonsterBlackDiablos,
		rank: 'G Rank',
		render: IconRenderMonsterBlackDiablos,
		component: ComponentMonsterBlackDiablos,
		unusedComponent: true,
	},
	{
		name: 'White Monoblos',
		displayName: 'White Monoblos',
		icon: IconMonsterWhiteMonoblos,
		rank: 'G Rank',
		render: IconRenderMonsterWhiteMonoblos,
		component: ComponentMonsterWhiteMonoblos,
		unusedComponent: true,
	},
	{
		name: 'Red Khezu',
		displayName: 'Red Khezu',
		icon: IconMonsterRedKhezu,
		rank: 'G Rank',
		render: IconRenderMonsterRedKhezu,
		component: ComponentMonsterRedKhezu,
		unusedComponent: true,
	},
	{
		name: 'Green Plesioth',
		displayName: 'Green Plesioth',
		icon: IconMonsterGreenPlesioth,
		rank: 'G Rank',
		render: IconRenderMonsterGreenPlesioth,
		component: ComponentMonsterGreenPlesioth,
		unusedComponent: true,
	},
	{
		name: 'Black Gravios',
		displayName: 'Black Gravios',
		icon: IconMonsterBlackGravios,
		rank: 'G Rank',
		render: IconRenderMonsterBlackGravios,
		component: ComponentMonsterBlackGravios,
		unusedComponent: true,
	},
	{
		name: 'Daimyo Hermitaur',
		displayName: 'Daimyo Hermitaur',
		icon: IconMonsterDaimyoHermitaur,
		rank: 'G Rank',
		render: IconRenderMonsterDaimyoHermitaur,
		component: ComponentMonsterDaimyoHermitaur,
		unusedComponent: true,
	},
	{
		name: 'Azure Rathalos',
		displayName: 'Azure Rathalos',
		icon: IconMonsterAzureRathalos,
		rank: 'G Rank',
		render: IconRenderMonsterAzureRathalos,
		component: ComponentMonsterAzureRathalos,
		unusedComponent: true,
	},
	{
		name: 'Ashen Lao-Shan Lung',
		displayName: 'Ashen Lao-Shan Lung',
		icon: IconMonsterAshenLaoShanLung,
		rank: 'G Rank',
		render: IconRenderMonsterAshenLaoShanLung,
		component: ComponentMonsterAshenLaoShanLung,
		unusedComponent: true,
	},
	{
		name: 'Blangonga',
		displayName: 'Blangonga',
		icon: IconMonsterBlangonga,
		rank: 'G Rank',
		render: IconRenderMonsterBlangonga,
		component: ComponentMonsterBlangonga,
		unusedComponent: true,
	},
	{
		name: 'Congalala',
		displayName: 'Congalala',
		icon: IconMonsterCongalala,
		rank: 'G Rank',
		render: IconRenderMonsterCongalala,
		component: ComponentMonsterCongalala,
		unusedComponent: true,
	},
	{
		name: 'Rajang',
		displayName: 'Rajang',
		icon: IconMonsterRajang,
		rank: 'G Rank',
		render: IconRenderMonsterRajang,
		component: ComponentMonsterRajang,
		unusedComponent: true,
	},
	{
		name: 'Kushala Daora',
		displayName: 'Kushala Daora',
		icon: IconMonsterKushalaDaora,
		rank: 'G Rank',
		render: IconRenderMonsterKushalaDaora,
		component: ComponentMonsterKushalaDaora,
		unusedComponent: true,
	},
	{
		name: 'Shen Gaoren',
		displayName: 'Shen Gaoren',
		icon: IconMonsterShenGaoren,
		rank: 'G Rank',
		render: IconRenderMonsterShenGaoren,
		component: ComponentMonsterShenGaoren,
		unusedComponent: false,
	},
	{
		name: 'Great Thunderbug',
		displayName: 'Great Thunderbug',
		icon: IconMonsterGreatThunderbug,
		rank: 'G Rank',
		render: IconRenderMonsterGreatThunderbug,
		component: ComponentMonsterGreatThunderbug,
		unusedComponent: true,
	},
	{
		name: 'Shakalaka',
		displayName: 'Shakalaka',
		icon: IconMonsterShakalaka,
		rank: 'G Rank',
		render: IconRenderMonsterShakalaka,
		component: ComponentMonsterShakalaka,
		unusedComponent: true,
	},
	{
		name: 'Yama Tsukami',
		displayName: 'Yama Tsukami',
		icon: IconMonsterYamaTsukami,
		rank: 'G Rank',
		render: IconRenderMonsterYamaTsukami,
		component: ComponentMonsterYamaTsukami,
		unusedComponent: false,
	},
	{
		name: 'Chameleos',
		displayName: 'Chameleos',
		icon: IconMonsterChameleos,
		rank: 'G Rank',
		render: IconRenderMonsterChameleos,
		component: ComponentMonsterChameleos,
		unusedComponent: true,
	},
	{
		name: 'Rusted Kushala Daora',
		displayName: 'Rusted Kushala Daora',
		icon: IconMonsterRustedKushalaDaora,
		rank: 'G Rank',
		render: IconRenderMonsterRustedKushalaDaora,
		component: ComponentMonsterRustedKushalaDaora,
		unusedComponent: true,
	},
	{
		name: 'Blango',
		displayName: 'Blango',
		icon: IconMonsterBlango,
		rank: 'G Rank',
		render: IconRenderMonsterBlango,
		component: ComponentMonsterBlango,
		unusedComponent: true,
	},
	{
		name: 'Conga',
		displayName: 'Conga',
		icon: IconMonsterConga,
		rank: 'G Rank',
		render: IconRenderMonsterConga,
		component: ComponentMonsterConga,
		unusedComponent: true,
	},
	{
		name: 'Remobra',
		displayName: 'Remobra',
		icon: IconMonsterRemobra,
		rank: 'G Rank',
		render: IconRenderMonsterRemobra,
		component: ComponentMonsterRemobra,
		unusedComponent: true,
	},
	{
		name: 'Lunastra',
		displayName: 'Lunastra',
		icon: IconMonsterLunastra,
		rank: 'G Rank',
		render: IconRenderMonsterLunastra,
		component: ComponentMonsterLunastra,
		unusedComponent: true,
	},
	{
		name: 'Teostra',
		displayName: 'Teostra',
		icon: IconMonsterTeostra,
		rank: 'G Rank',
		render: IconRenderMonsterTeostra,
		component: ComponentMonsterTeostra,
		unusedComponent: true,
	},
	{
		name: 'Hermitaur',
		displayName: 'Hermitaur',
		icon: IconMonsterHermitaur,
		rank: 'G Rank',
		render: IconRenderMonsterHermitaur,
		component: ComponentMonsterHermitaur,
		unusedComponent: true,
	},
	{
		name: 'Shogun Ceanataur',
		displayName: 'Shogun Ceanataur',
		icon: IconMonsterShogunCeanataur,
		rank: 'G Rank',
		render: IconRenderMonsterShogunCeanataur,
		component: ComponentMonsterShogunCeanataur,
		unusedComponent: true,
	},
	{
		name: 'Bulldrome',
		displayName: 'Bulldrome',
		icon: IconMonsterBulldrome,
		rank: 'G Rank',
		render: IconRenderMonsterBulldrome,
		component: ComponentMonsterBulldrome,
		unusedComponent: true,
	},
	{
		name: 'Anteka',
		displayName: 'Anteka',
		icon: IconMonsterAnteka,
		rank: 'G Rank',
		render: IconRenderMonsterAnteka,
		component: ComponentMonsterAnteka,
		unusedComponent: true,
	},
	{
		name: 'Popo',
		displayName: 'Popo',
		icon: IconMonsterPopo,
		rank: 'G Rank',
		render: IconRenderMonsterPopo,
		component: ComponentMonsterPopo,
		unusedComponent: true,
	},
	{
		name: 'White Fatalis',
		displayName: 'White Fatalis',
		icon: IconMonsterWhiteFatalis,
		rank: '',
		render: IconRenderMonsterWhiteFatalis,
		component: ComponentMonsterWhiteFatalis,
		unusedComponent: false,
	},
	{
		name: 'Yama Tsukami',
		displayName: 'Yama Tsukami',
		icon: IconMonsterYamaTsukami,
		rank: 'G Rank',
		render: IconRenderMonsterYamaTsukami,
		component: ComponentMonsterYamaTsukami,
		unusedComponent: false,
	},
	{
		name: 'Ceanataur',
		displayName: 'Ceanataur',
		icon: IconMonsterCeanataur,
		rank: 'G Rank',
		render: IconRenderMonsterCeanataur,
		component: ComponentMonsterCeanataur,
		unusedComponent: true,
	},
	{
		name: 'Hypnocatrice',
		displayName: 'Hypnocatrice',
		icon: IconMonsterHypnocatrice,
		rank: 'G Rank',
		render: IconRenderMonsterHypnocatrice,
		component: ComponentMonsterHypnocatrice,
		unusedComponent: true,
	},
	{
		name: 'Lavasioth',
		displayName: 'Lavasioth',
		icon: IconMonsterLavasioth,
		rank: 'G Rank',
		render: IconRenderMonsterLavasioth,
		component: ComponentMonsterLavasioth,
		unusedComponent: false,
	},
	{
		name: 'Tigrex',
		displayName: 'Tigrex',
		icon: IconMonsterTigrex,
		rank: 'G Rank',
		render: IconRenderMonsterTigrex,
		component: ComponentMonsterTigrex,
		unusedComponent: true,
	},
	{
		name: 'Akantor',
		displayName: 'Akantor',
		icon: IconMonsterAkantor,
		rank: 'G Rank',
		render: IconRenderMonsterAkantor,
		component: ComponentMonsterAkantor,
		unusedComponent: false,
	},
	{
		name: 'Bright Hypnoc',
		displayName: 'Bright Hypnoc',
		icon: IconMonsterBrightHypnoc,
		rank: 'G Rank',
		render: IconRenderMonsterBrightHypnoc,
		component: ComponentMonsterBrightHypnoc,
		unusedComponent: true,
	},
	{
		name: 'Red Lavasioth',
		displayName: 'Red Lavasioth',
		icon: IconMonsterRedLavasioth,
		rank: 'G Rank',
		render: IconRenderMonsterRedLavasioth,
		component: ComponentMonsterRedLavasioth,
		unusedComponent: true,
	},
	{
		name: 'Espinas',
		displayName: 'Espinas',
		icon: IconMonsterEspinas,
		rank: 'G Rank',
		render: IconRenderMonsterEspinas,
		component: ComponentMonsterEspinas,
		unusedComponent: true,
	},
	{
		name: 'Orange Espinas',
		displayName: 'Orange Espinas',
		icon: IconMonsterOrangeEspinas,
		rank: 'G Rank',
		render: IconRenderMonsterOrangeEspinas,
		component: ComponentMonsterOrangeEspinas,
		unusedComponent: true,
	},
	{
		name: 'Silver Hypnoc',
		displayName: 'Silver Hypnoc',
		icon: IconMonsterSilverHypnoc,
		rank: 'G Rank',
		render: IconRenderMonsterSilverHypnoc,
		component: ComponentMonsterSilverHypnoc,
		unusedComponent: true,
	},
	{
		name: 'Akura Vashimu',
		displayName: 'Akura Vashimu',
		icon: IconMonsterAkuraVashimu,
		rank: 'G Rank',
		render: IconRenderMonsterAkuraVashimu,
		component: ComponentMonsterAkuraVashimu,
		unusedComponent: false,
	},
	{
		name: 'Akura Jebia',
		displayName: 'Akura Jebia',
		icon: IconMonsterAkuraJebia,
		rank: 'G Rank',
		render: IconRenderMonsterAkuraJebia,
		component: ComponentMonsterAkuraJebia,
		unusedComponent: false,
	},
	{
		name: 'Berukyurosu',
		displayName: 'Berukyurosu',
		icon: IconMonsterBerukyurosu,
		rank: 'G Rank',
		render: IconRenderMonsterBerukyurosu,
		component: ComponentMonsterBerukyurosu,
		unusedComponent: true,
	},
	{
		name: 'Cactus',
		displayName: 'Cactus',
		icon: IconMonsterCactus,
		rank: 'G Rank',
		render: IconRenderMonsterCactus,
		component: ComponentMonsterRandom,
		unusedComponent: true,
	},
	{
		name: 'Pariapuria',
		displayName: 'Pariapuria',
		icon: IconMonsterPariapuria,
		rank: 'G Rank',
		render: IconRenderMonsterPariapuria,
		component: ComponentMonsterPariapuria,
		unusedComponent: true,
	},
	{
		name: 'White Espinas',
		displayName: 'White Espinas',
		icon: IconMonsterWhiteEspinas,
		rank: 'G Rank',
		render: IconRenderMonsterWhiteEspinas,
		component: ComponentMonsterWhiteEspinas,
		unusedComponent: true,
	},
	{
		name: 'Kamu Orugaron',
		displayName: 'Kamu Orugaron',
		icon: IconMonsterKamuOrugaron,
		rank: 'G Rank',
		render: IconRenderMonsterKamuOrugaron,
		component: ComponentMonsterKamuOrugaron,
		unusedComponent: true,
	},
	{
		name: 'Nono Orugaron',
		displayName: 'Nono Orugaron',
		icon: IconMonsterNonoOrugaron,
		rank: 'G Rank',
		render: IconRenderMonsterNonoOrugaron,
		component: ComponentMonsterNonoOrugaron,
		unusedComponent: true,
	},
	{
		name: 'Raviente',
		displayName: 'Raviente',
		icon: IconMonsterRaviente,
		rank: 'G Rank',
		render: IconRenderMonsterRaviente,
		component: ComponentMonsterRaviente,
		unusedComponent: true,
	},
	{
		name: 'Dyuragaua',
		displayName: 'Dyuragaua',
		icon: IconMonsterDyuragaua,
		rank: 'G Rank',
		render: IconRenderMonsterDyuragaua,
		component: ComponentMonsterDyuragaua,
		unusedComponent: true,
	},
	{
		name: 'Doragyurosu',
		displayName: 'Doragyurosu',
		icon: IconMonsterDoragyurosu,
		rank: 'G Rank',
		render: IconRenderMonsterDoragyurosu,
		component: ComponentMonsterDoragyurosu,
		unusedComponent: false,
	},
	{
		name: 'Gurenzeburu',
		displayName: 'Gurenzeburu',
		icon: IconMonsterGurenzeburu,
		rank: 'G Rank',
		render: IconRenderMonsterGurenzeburu,
		component: ComponentMonsterGurenzeburu,
		unusedComponent: true,
	},
	{
		name: 'Burukku',
		displayName: 'Burukku',
		icon: IconMonsterBurukku,
		rank: 'G Rank',
		render: IconRenderMonsterBurukku,
		component: ComponentMonsterBurukku,
		unusedComponent: true,
	},
	{
		name: 'Erupe',
		displayName: 'Erupe',
		icon: IconMonsterErupe,
		rank: 'G Rank',
		render: IconRenderMonsterErupe,
		component: ComponentMonsterErupe,
		unusedComponent: true,
	},
	{
		name: 'Rukodiora',
		displayName: 'Rukodiora',
		icon: IconMonsterRukodiora,
		rank: 'G Rank',
		render: IconRenderMonsterRukodiora,
		component: ComponentMonsterRukodiora,
		unusedComponent: false,
	},
	{
		name: 'UNKNOWN',
		displayName: 'UNKNOWN',
		icon: IconMonsterUNKNOWN,
		rank: 'G Rank',
		render: IconRenderMonsterUNKNOWN,
		component: ComponentMonsterUNKNOWN,
		unusedComponent: true,
	},
	{
		name: 'Unknown',
		displayName: 'UNKNOWN',
		icon: IconMonsterUNKNOWN,
		rank: 'G Rank',
		render: IconRenderMonsterUNKNOWN,
		component: ComponentMonsterUNKNOWN,
		unusedComponent: true,
	},
	{
		name: 'Gogomoa',
		displayName: 'Gogomoa',
		icon: IconMonsterGogomoa,
		rank: 'G Rank',
		render: IconRenderMonsterGogomoa,
		component: ComponentMonsterGogomoa,
		unusedComponent: true,
	},
	{
		name: 'Taikun Zamuza',
		displayName: 'Taikun Zamuza',
		icon: IconMonsterTaikunZamuza,
		rank: 'G Rank',
		render: IconRenderMonsterTaikunZamuza,
		component: ComponentMonsterTaikunZamuza,
		unusedComponent: true,
	},
	{
		name: 'Abiorugu',
		displayName: 'Abiorugu',
		icon: IconMonsterAbiorugu,
		rank: 'G Rank',
		render: IconRenderMonsterAbiorugu,
		component: ComponentMonsterAbiorugu,
		unusedComponent: false,
	},
	{
		name: 'Kuarusepusu',
		displayName: 'Kuarusepusu',
		icon: IconMonsterKuarusepusu,
		rank: 'G Rank',
		render: IconRenderMonsterKuarusepusu,
		component: ComponentMonsterKuarusepusu,
		unusedComponent: true,
	},
	{
		name: 'Odibatorasu',
		displayName: 'Odibatorasu',
		icon: IconMonsterOdibatorasu,
		rank: 'G Rank',
		render: IconRenderMonsterOdibatorasu,
		component: ComponentMonsterOdibatorasu,
		unusedComponent: true,
	},
	{
		name: 'Disufiroa',
		displayName: 'Disufiroa',
		icon: IconMonsterDisufiroa,
		rank: 'G Rank',
		render: IconRenderMonsterDisufiroa,
		component: ComponentMonsterDisufiroa,
		unusedComponent: true,
	},
	{
		name: 'Rebidiora',
		displayName: 'Rebidiora',
		icon: IconMonsterRebidiora,
		rank: 'G Rank',
		render: IconRenderMonsterRebidiora,
		component: ComponentMonsterRebidiora,
		unusedComponent: true,
	},
	{
		name: 'Anorupatisu',
		displayName: 'Anorupatisu',
		icon: IconMonsterAnorupatisu,
		rank: 'G Rank',
		render: IconRenderMonsterAnorupatisu,
		component: ComponentMonsterAnorupatisu,
		unusedComponent: false,
	},
	{
		name: 'Hyujikiki',
		displayName: 'Hyujikiki',
		icon: IconMonsterHyujikiki,
		rank: 'G Rank',
		render: IconRenderMonsterHyujikiki,
		component: ComponentMonsterHyujikiki,
		unusedComponent: true,
	},
	{
		name: 'Midogaron',
		displayName: 'Midogaron',
		icon: IconMonsterMidogaron,
		rank: 'G Rank',
		render: IconRenderMonsterMidogaron,
		component: ComponentMonsterMidogaron,
		unusedComponent: true,
	},
	{
		name: 'Giaorugu',
		displayName: 'Giaorugu',
		icon: IconMonsterGiaorugu,
		rank: 'G Rank',
		render: IconRenderMonsterGiaorugu,
		component: ComponentMonsterGiaorugu,
		unusedComponent: true,
	},
	{
		name: 'Mi Ru',
		displayName: 'Mi Ru',
		icon: IconMonsterMiRu,
		rank: 'G Rank',
		render: IconRenderMonsterMiRu,
		component: ComponentMonsterMiRu,
		unusedComponent: true,
	},
	{
		name: 'Farunokku',
		displayName: 'Farunokku',
		icon: IconMonsterFarunokku,
		rank: 'G Rank',
		render: IconRenderMonsterFarunokku,
		component: ComponentMonsterFarunokku,
		unusedComponent: true,
	},
	{
		name: 'Pokaradon',
		displayName: 'Pokaradon',
		icon: IconMonsterPokaradon,
		rank: 'G Rank',
		render: IconRenderMonsterPokaradon,
		component: ComponentMonsterPokaradon,
		unusedComponent: true,
	},
	{
		name: 'Shantien',
		displayName: 'Shantien',
		icon: IconMonsterShantien,
		rank: 'G Rank',
		render: IconRenderMonsterShantien,
		component: ComponentMonsterShantien,
		unusedComponent: true,
	},
	{
		name: 'Pokara',
		displayName: 'Pokara',
		icon: IconMonsterPokara,
		rank: 'G Rank',
		render: IconRenderMonsterPokara,
		component: ComponentMonsterPokara,
		unusedComponent: true,
	},
	{
		name: 'Goruganosu',
		displayName: 'Goruganosu',
		icon: IconMonsterGoruganosu,
		rank: 'G Rank',
		render: IconRenderMonsterGoruganosu,
		component: ComponentMonsterGoruganosu,
		unusedComponent: false,
	},
	{
		name: 'Aruganosu',
		displayName: 'Aruganosu',
		icon: IconMonsterAruganosu,
		rank: 'G Rank',
		render: IconRenderMonsterAruganosu,
		component: ComponentMonsterAruganosu,
		unusedComponent: false,
	},
	{
		name: 'Baruragaru',
		displayName: 'Baruragaru',
		icon: IconMonsterBaruragaru,
		rank: 'G Rank',
		render: IconRenderMonsterBaruragaru,
		component: ComponentMonsterBaruragaru,
		unusedComponent: true,
	},
	{
		name: 'Zerureusu',
		displayName: 'Zerureusu',
		icon: IconMonsterZerureusu,
		rank: 'G Rank',
		render: IconRenderMonsterZerureusu,
		component: ComponentMonsterZerureusu,
		unusedComponent: true,
	},
	{
		name: 'Gougarf',
		displayName: 'Gougarf',
		icon: IconMonsterGougarf,
		rank: 'G Rank',
		render: IconRenderMonsterGougarf,
		component: ComponentMonsterGougarf,
		unusedComponent: true,
	},
	{
		name: 'Uruki',
		displayName: 'Uruki',
		icon: IconMonsterUruki,
		rank: 'G Rank',
		render: IconRenderMonsterUruki,
		component: ComponentMonsterUruki,
		unusedComponent: true,
	},
	{
		name: 'Forokururu',
		displayName: 'Forokururu',
		icon: IconMonsterForokururu,
		rank: 'G Rank',
		render: IconRenderMonsterForokururu,
		component: ComponentMonsterForokururu,
		unusedComponent: true,
	},
	{
		name: 'Meraginasu',
		displayName: 'Meraginasu',
		icon: IconMonsterMeraginasu,
		rank: 'G Rank',
		render: IconRenderMonsterMeraginasu,
		component: ComponentMonsterMeraginasu,
		unusedComponent: true,
	},
	{
		name: 'Diorex',
		displayName: 'Diorex',
		icon: IconMonsterDiorex,
		rank: 'G Rank',
		render: IconRenderMonsterDiorex,
		component: ComponentMonsterDiorex,
		unusedComponent: true,
	},
	{
		name: 'Garuba Daora',
		displayName: 'Garuba Daora',
		icon: IconMonsterGarubaDaora,
		rank: 'G Rank',
		render: IconRenderMonsterGarubaDaora,
		component: ComponentMonsterGarubaDaora,
		unusedComponent: true,
	},
	{
		name: 'Inagami',
		displayName: 'Inagami',
		icon: IconMonsterInagami,
		rank: 'G Rank',
		render: IconRenderMonsterInagami,
		component: ComponentMonsterInagami,
		unusedComponent: true,
	},
	{
		name: 'Varusaburosu',
		displayName: 'Varusaburosu',
		icon: IconMonsterVarusaburosu,
		rank: 'G Rank',
		render: IconRenderMonsterVarusaburosu,
		component: ComponentMonsterVarusaburosu,
		unusedComponent: true,
	},
	{
		name: 'Poborubarumu',
		displayName: 'Poborubarumu',
		icon: IconMonsterPoborubarumu,
		rank: 'G Rank',
		render: IconRenderMonsterPoborubarumu,
		component: ComponentMonsterPoborubarumu,
		unusedComponent: true,
	},
	{
		name: 'Duremudira',
		displayName: 'Duremudira',
		icon: IconMonsterDuremudira,
		rank: 'G Rank',
		render: IconRenderMonsterDuremudira,
		component: ComponentMonsterDuremudira,
		unusedComponent: true,
	},
	{
		name: 'Felyne',
		displayName: 'Felyne',
		icon: IconMonsterFelyne,
		rank: 'G Rank',
		render: IconRenderMonsterFelyne,
		component: ComponentMonsterFelyne,
		unusedComponent: true,
	},
	{
		name: 'Cactus',
		displayName: 'Cactus',
		icon: IconMonsterCactus,
		rank: 'G Rank',
		render: IconRenderMonsterCactus,
		component: ComponentMonsterCactus,
		unusedComponent: true,
	},
	{
		name: 'Gureadomosu',
		displayName: 'Gureadomosu',
		icon: IconMonsterGureadomosu,
		rank: 'G Rank',
		render: IconRenderMonsterGureadomosu,
		component: ComponentMonsterGureadomosu,
		unusedComponent: true,
	},
	{
		name: 'Harudomerugu',
		displayName: 'Harudomerugu',
		icon: IconMonsterHarudomerugu,
		rank: 'G Rank',
		render: IconRenderMonsterHarudomerugu,
		component: ComponentMonsterHarudomerugu,
		unusedComponent: true,
	},
	{
		name: 'Toridcless',
		displayName: 'Toridcless',
		icon: IconMonsterToridcless,
		rank: 'G Rank',
		render: IconRenderMonsterToridcless,
		component: ComponentMonsterToridcless,
		unusedComponent: true,
	},
	{
		name: 'Gasurabazura',
		displayName: 'Gasurabazura',
		icon: IconMonsterGasurabazura,
		rank: 'G Rank',
		render: IconRenderMonsterGasurabazura,
		component: ComponentMonsterGasurabazura,
		unusedComponent: true,
	},
	{
		name: 'Kusubami',
		displayName: 'Kusubami',
		icon: IconMonsterKusubami,
		rank: 'G Rank',
		render: IconRenderMonsterKusubami,
		component: ComponentMonsterKusubami,
		unusedComponent: true,
	},
	{
		name: 'Yama Kurai',
		displayName: 'Yama Kurai',
		icon: IconMonsterYamaKurai,
		rank: 'G Rank',
		render: IconRenderMonsterYamaKurai,
		component: ComponentMonsterYamaKurai,
		unusedComponent: false,
	},
	{
		name: 'Zinogre',
		displayName: 'Zinogre',
		icon: IconMonsterZinogre,
		rank: 'G Rank',
		render: IconRenderMonsterZinogre,
		component: ComponentMonsterZinogre,
		unusedComponent: true,
	},
	{
		name: 'Deviljho',
		displayName: 'Deviljho',
		icon: IconMonsterDeviljho,
		rank: 'G Rank',
		render: IconRenderMonsterDeviljho,
		component: ComponentMonsterDeviljho,
		unusedComponent: true,
	},
	{
		name: 'Brachydios',
		displayName: 'Brachydios',
		icon: IconMonsterBrachydios,
		rank: 'G Rank',
		render: IconRenderMonsterBrachydios,
		component: ComponentMonsterBrachydios,
		unusedComponent: true,
	},
	{
		name: 'Berserk Raviente',
		displayName: 'Berserk Raviente',
		icon: IconMonsterBerserkRaviente,
		rank: 'G Rank',
		render: IconRenderMonsterBerserkRaviente,
		component: ComponentMonsterBerserkRaviente,
		unusedComponent: true,
	},
	{
		name: 'Toa Tesukatora',
		displayName: 'Toa Tesukatora',
		icon: IconMonsterToaTesukatora,
		rank: 'G Rank',
		render: IconRenderMonsterToaTesukatora,
		component: ComponentMonsterToaTesukatora,
		unusedComponent: true,
	},
	{
		name: 'Barioth',
		displayName: 'Barioth',
		icon: IconMonsterBarioth,
		rank: 'G Rank',
		render: IconRenderMonsterBarioth,
		component: ComponentMonsterBarioth,
		unusedComponent: true,
	},
	{
		name: 'Uragaan',
		displayName: 'Uragaan',
		icon: IconMonsterUragaan,
		rank: 'G Rank',
		render: IconRenderMonsterUragaan,
		component: ComponentMonsterUragaan,
		unusedComponent: true,
	},
	{
		name: 'Stygian Zinogre',
		displayName: 'Stygian Zinogre',
		icon: IconMonsterStygianZinogre,
		rank: 'G Rank',
		render: IconRenderMonsterStygianZinogre,
		component: ComponentMonsterStygianZinogre,
		unusedComponent: true,
	},
	{
		name: 'Guanzorumu',
		displayName: 'Guanzorumu',
		icon: IconMonsterGuanzorumu,
		rank: 'G Rank',
		render: IconRenderMonsterGuanzorumu,
		component: ComponentMonsterGuanzorumu,
		unusedComponent: true,
	},
	{
		name: 'Starving Deviljho',
		displayName: 'Starving Deviljho',
		icon: IconMonsterStarvingDeviljho,
		rank: 'G Rank',
		render: IconRenderMonsterStarvingDeviljho,
		component: ComponentMonsterStarvingDeviljho,
		unusedComponent: false,
	},
	{
		name: 'Voljang',
		displayName: 'Voljang',
		icon: IconMonsterVoljang,
		rank: 'G Rank',
		render: IconRenderMonsterVoljang,
		component: ComponentMonsterVoljang,
		unusedComponent: true,
	},
	{
		name: 'Nargacuga',
		displayName: 'Nargacuga',
		icon: IconMonsterNargacuga,
		rank: 'G Rank',
		render: IconRenderMonsterNargacuga,
		component: ComponentMonsterNargacuga,
		unusedComponent: true,
	},
	{
		name: 'Keoaruboru',
		displayName: 'Keoaruboru',
		icon: IconMonsterKeoaruboru,
		rank: 'G Rank',
		render: IconRenderMonsterKeoaruboru,
		component: ComponentMonsterKeoaruboru,
		unusedComponent: true,
	},
	{
		name: 'Zenaserisu',
		displayName: 'Zenaserisu',
		icon: IconMonsterZenaserisu,
		rank: 'G Rank',
		render: IconRenderMonsterZenaserisu,
		component: ComponentMonsterZenaserisu,
		unusedComponent: true,
	},
	{
		name: 'Gore Magala',
		displayName: 'Gore Magala',
		icon: IconMonsterGoreMagala,
		rank: 'G Rank',
		render: IconRenderMonsterGoreMagala,
		component: ComponentMonsterGoreMagala,
		unusedComponent: true,
	},
	{
		name: 'Blinking Nargacuga',
		displayName: 'Blinking Nargacuga',
		icon: IconMonsterBlinkingNargacuga,
		rank: 'G Rank',
		render: IconRenderMonsterBlinkingNargacuga,
		component: ComponentMonsterBlinkingNargacuga,
		unusedComponent: false,
	},
	{
		name: 'Shagaru Magala',
		displayName: 'Shagaru Magala',
		icon: IconMonsterShagaruMagala,
		rank: 'G Rank',
		render: IconRenderMonsterShagaruMagala,
		component: ComponentMonsterShagaruMagala,
		unusedComponent: true,
	},
	{
		name: 'Amatsu',
		displayName: 'Amatsu',
		icon: IconMonsterAmatsu,
		rank: 'G Rank',
		render: IconRenderMonsterAmatsu,
		component: ComponentMonsterAmatsu,
		unusedComponent: false,
	},
	{
		name: 'Elzelion',
		displayName: 'Elzelion',
		icon: IconMonsterElzelion,
		rank: 'G Rank',
		render: IconRenderMonsterElzelion,
		component: ComponentMonsterElzelion,
		unusedComponent: true,
	},
	{
		name: 'Arrogant Duremudira',
		displayName: 'Arrogant Duremudira',
		icon: IconMonsterArrogantDuremudira,
		rank: 'G Rank',
		render: IconRenderMonsterArrogantDuremudira,
		component: ComponentMonsterArrogantDuremudira,
		unusedComponent: false,
	},
	{
		name: 'Seregios',
		displayName: 'Seregios',
		icon: IconMonsterSeregios,
		rank: 'G Rank',
		render: IconRenderMonsterSeregios,
		component: ComponentMonsterSeregios,
		unusedComponent: true,
	},
	{
		name: 'Bogabadorumu',
		displayName: 'Bogabadorumu',
		icon: IconMonsterBogabadorumu,
		rank: 'G Rank',
		render: IconRenderMonsterBogabadorumu,
		component: ComponentMonsterBogabadorumu,
		unusedComponent: false,
	},
	{
		name: 'Blitzkrieg Bogabadorumu',
		displayName: 'Blitzkrieg Bogabadorumu',
		icon: IconMonsterBlitzkriegBogabadorumu,
		rank: 'G Rank',
		render: IconRenderMonsterBlitzkriegBogabadorumu,
		component: ComponentMonsterBlitzkriegBogabadorumu,
		unusedComponent: false,
	},
	{
		name: 'Sparkling Zerureusu',
		displayName: 'Sparkling Zerureusu',
		icon: IconMonsterSparklingZerureusu,
		rank: 'G Rank',
		render: IconRenderMonsterSparklingZerureusu,
		component: ComponentMonsterSparklingZerureusu,
		unusedComponent: false,
	},
	{
		name: 'PSO2 Rappy',
		displayName: 'PSO2 Rappy',
		icon: IconMonsterPSO2Rappy,
		rank: 'G Rank',
		render: IconRenderMonsterPSO2Rappy,
		component: ComponentMonsterPSO2Rappy,
		unusedComponent: true,
	},
	{
		name: 'King Shakalaka',
		displayName: 'King Shakalaka',
		icon: IconMonsterKingShakalaka,
		rank: 'G Rank',
		render: IconRenderMonsterKingShakalaka,
		component: ComponentMonsterKingShakalaka,
		unusedComponent: true,
	},
	{
		name: 'Akura Vashimu',
		displayName: 'Zenith Akura Vashimu',
		icon: IconMonsterZenithAkuraVashimu,
		rank: 'Zenith★4',
		render: IconRenderMonsterZenithAkuraVashimu,
		component: ComponentMonsterZenithAkuraVashimu,
		unusedComponent: true,
	},
	{
		name: 'Anorupatisu',
		displayName: 'Zenith Anorupatisu',
		icon: IconMonsterZenithAnorupatisu,
		rank: 'Zenith★4',
		render: IconRenderMonsterZenithAnorupatisu,
		component: ComponentMonsterZenithAnorupatisu,
		unusedComponent: true,
	},
	{
		name: 'Baruragaru',
		displayName: 'Zenith Baruragaru',
		icon: IconMonsterZenithBaruragaru,
		rank: 'Zenith★4',
		render: IconRenderMonsterZenithBaruragaru,
		component: ComponentMonsterZenithBaruragaru,
		unusedComponent: true,
	},
	{
		name: 'Blangonga',
		displayName: 'Zenith Blangonga',
		icon: IconMonsterZenithBlangonga,
		rank: 'Zenith★4',
		render: IconRenderMonsterZenithBlangonga,
		component: ComponentMonsterZenithBlangonga,
		unusedComponent: true,
	},
	{
		name: 'Bogabadorumu',
		displayName: 'Bogabadorumu',
		icon: IconMonsterZenithBogabadorumu,
		rank: 'Zenith★4',
		render: IconRenderMonsterZenithBogabadorumu,
		component: ComponentMonsterBogabadorumu,
		unusedComponent: true,
	},
	{
		name: 'Daimyo Hermitaur',
		displayName: 'Zenith Daimyo Hermitaur',
		icon: IconMonsterZenithDaimyoHermitaur,
		rank: 'Zenith★4',
		render: IconRenderMonsterZenithDaimyoHermitaur,
		component: ComponentMonsterZenithDaimyoHermitaur,
		unusedComponent: true,
	},
	{
		name: 'Doragyurosu',
		displayName: 'Zenith Doragyurosu',
		icon: IconMonsterZenithDoragyurosu,
		rank: 'Zenith★4',
		render: IconRenderMonsterZenithDoragyurosu,
		component: ComponentMonsterZenithDoragyurosu,
		unusedComponent: true,
	},
	{
		name: 'Espinas',
		displayName: 'Zenith Espinas',
		icon: IconMonsterZenithEspinas,
		rank: 'Zenith★4',
		render: IconRenderMonsterZenithEspinas,
		component: ComponentMonsterZenithEspinas,
		unusedComponent: true,
	},
	{
		name: 'Gasurabazura',
		displayName: 'Zenith Gasurabazura',
		icon: IconMonsterZenithGasurabazura,
		rank: 'Zenith★4',
		render: IconRenderMonsterZenithGasurabazura,
		component: ComponentMonsterZenithGasurabazura,
		unusedComponent: true,
	},
	{
		name: 'Giaorugu',
		displayName: 'Zenith Giaorugu',
		icon: IconMonsterZenithGiaorugu,
		rank: 'Zenith★4',
		render: IconRenderMonsterZenithGiaorugu,
		component: ComponentMonsterZenithGiaorugu,
		unusedComponent: true,
	},
	{
		name: 'Gravios',
		displayName: 'Zenith Gravios',
		icon: IconMonsterZenithGravios,
		rank: 'Zenith★4',
		render: IconRenderMonsterZenithGravios,
		component: ComponentMonsterZenithGravios,
		unusedComponent: true,
	},
	{
		name: 'Harudomerugu',
		displayName: 'Zenith Harudomerugu',
		icon: IconMonsterZenithHarudomerugu,
		rank: 'Zenith★4',
		render: IconRenderMonsterZenithHarudomerugu,
		component: ComponentMonsterZenithHarudomerugu,
		unusedComponent: true,
	},
	{
		name: 'Hypnocatrice',
		displayName: 'Zenith Hypnocatrice',
		icon: IconMonsterZenithHypnoc,
		rank: 'Zenith★4',
		render: IconRenderMonsterZenithHypnoc,
		component: ComponentMonsterZenithHypnoc,
		unusedComponent: true,
	},
	{
		name: 'Hyujikiki',
		displayName: 'Zenith Hyujikiki',
		icon: IconMonsterZenithHyujikiki,
		rank: 'Zenith★4',
		render: IconRenderMonsterZenithHyujikiki,
		component: ComponentMonsterZenithHyujikiki,
		unusedComponent: true,
	},
	{
		name: 'Inagami',
		displayName: 'Zenith Inagami',
		icon: IconMonsterZenithInagami,
		rank: 'G Rank',
		render: IconRenderMonsterZenithInagami,
		component: ComponentMonsterZenithInagami,
		unusedComponent: true,
	},
	{
		name: 'Khezu',
		displayName: 'Zenith Khezu',
		icon: IconMonsterZenithKhezu,
		rank: 'Zenith★4',
		render: IconRenderMonsterZenithKhezu,
		component: ComponentMonsterZenithKhezu,
		unusedComponent: true,
	},
	{
		name: 'Midogaron',
		displayName: 'Zenith Midogaron',
		icon: IconMonsterZenithMidogaron,
		rank: 'Zenith★4',
		render: IconRenderMonsterZenithMidogaron,
		component: ComponentMonsterZenithMidogaron,
		unusedComponent: true,
	},
	{
		name: 'Plesioth',
		displayName: 'Zenith Plesioth',
		icon: IconMonsterZenithPlesioth,
		rank: 'Zenith★4',
		render: IconRenderMonsterZenithPlesioth,
		component: ComponentMonsterZenithPlesioth,
		unusedComponent: true,
	},
	{
		name: 'Rathalos',
		displayName: 'Zenith Rathalos',
		icon: IconMonsterZenithRathalos,
		rank: 'Zenith★4',
		render: IconRenderMonsterZenithRathalos,
		component: ComponentMonsterZenithRathalos,
		unusedComponent: true,
	},
	{
		name: 'Rukodiora',
		displayName: 'Zenith Rukodiora',
		icon: IconMonsterZenithRukodiora,
		rank: 'Zenith★4',
		render: IconRenderMonsterZenithRukodiora,
		component: ComponentMonsterZenithRukodiora,
		unusedComponent: false,
	},
	{
		name: 'Taikun Zamuza',
		displayName: 'Zenith Taikun Zamuza',
		icon: IconMonsterZenithTaikunZamuza,
		rank: 'Zenith★4',
		render: IconRenderMonsterZenithTaikunZamuza,
		component: ComponentMonsterZenithTaikunZamuza,
		unusedComponent: true,
	},
	{
		name: 'Tigrex',
		displayName: 'Zenith Tigrex',
		icon: IconMonsterZenithTigrex,
		rank: 'Zenith★4',
		render: IconRenderMonsterZenithTigrex,
		component: ComponentMonsterZenithTigrex,
		unusedComponent: true,
	},
	{
		name: 'Toridcless',
		displayName: 'Zenith Toridcless',
		icon: IconMonsterZenithToridcless,
		rank: 'Zenith★4',
		render: IconRenderMonsterZenithToridcless,
		component: ComponentMonsterZenithToridcless,
		unusedComponent: true,
	},
	{
		name: 'Fatalis',
		displayName: 'Conquest Fatalis',
		icon: IconMonsterConquestFatalis,
		rank: 'G Rank',
		render: IconRenderMonsterConquestFatalis,
		component: ComponentMonsterConquestFatalis,
		unusedComponent: false,
	},
	{
		name: 'Shantien',
		displayName: 'Conquest Shantien',
		icon: IconMonsterConquestShantien,
		rank: 'G Rank',
		render: IconRenderMonsterConquestShantien,
		component: ComponentMonsterConquestShantien,
		unusedComponent: true,
	},
	{
		name: 'Crimson Fatalis',
		displayName: 'Conquest Crimson Fatalis',
		icon: IconMonsterConquestCrimsonFatalis,
		rank: 'G Rank',
		render: IconRenderMonsterConquestCrimsonFatalis,
		component: ComponentMonsterConquestCrimsonFatalis,
		unusedComponent: false,
	},
	{
		name: 'Disufiroa',
		displayName: 'Shiten Disufiroa',
		icon: IconMonsterShitenDisufiroa,
		rank: 'Upper Shiten',
		render: IconRenderMonsterShitenDisufiroa,
		component: ComponentMonsterShitenDisufiroa,
		unusedComponent: true,
	},
	{
		name: 'UNKNOWN',
		displayName: 'Shiten UNKNOWN',
		icon: IconMonsterShitenUnknown,
		rank: 'Upper Shiten',
		render: IconRenderMonsterShitenUnknown,
		component: ComponentMonsterShitenUnknown,
		unusedComponent: true,
	},
	{
		name: 'Elzelion',
		displayName: 'Burning Freezing Elzelion',
		icon: IconMonsterBurningFreezingElzelion,
		rank: 'Musou 1',
		render: IconRenderMonsterBurningFreezingElzelion,
		component: ComponentMonsterBurningFreezingElzelion,
		unusedComponent: false,
	},
	{
		name: 'Zinogre',
		displayName: 'Howling Zinogre',
		icon: IconMonsterHowlingZinogre,
		rank: 'Musou 1',
		render: IconRenderMonsterHowlingZinogre,
		component: ComponentMonsterHowlingZinogre,
		unusedComponent: false,
	},
	{
		name: 'Pariapuria',
		displayName: 'Supremacy Pariapuria',
		icon: IconMonsterSupremacyPariapuria,
		rank: 'Musou 1',
		render: IconRenderMonsterSupremacyPariapuria,
		component: ComponentMonsterSupremacyPariapuria,
		unusedComponent: false,
	},
	{
		name: 'Doragyurosu',
		displayName: 'Supremacy Doragyurosu',
		icon: IconMonsterSupremacyDoragyurosu,
		rank: 'Musou 1',
		render: IconRenderMonsterSupremacyDoragyurosu,
		component: ComponentMonsterSupremacyDoragyurosu,
		unusedComponent: false,
	},
	{
		name: 'Teostra',
		displayName: 'Supremacy Teostra',
		icon: IconMonsterSupremacyTeostra,
		rank: 'Musou 1',
		render: IconRenderMonsterSupremacyTeostra,
		component: ComponentMonsterSupremacyTeostra,
		unusedComponent: false,
	},
	{
		name: 'Odibatorasu',
		displayName: 'Odibatorasu',
		icon: IconMonsterSupremacyOdibatorasu,
		rank: 'Musou 1',
		render: IconRenderMonsterSupremacyOdibatorasu,
		component: ComponentMonsterSupremacyOdibatorasu,
		unusedComponent: true,
	},
	{
		name: 'Starving Deviljho',
		displayName: 'Starving Deviljho',
		icon: IconMonsterGoldenDeviljho,
		rank: 'Musou 1',
		render: IconRenderMonsterGoldenDeviljho,
		component: ComponentMonsterGoldenDeviljho,
		unusedComponent: false,
	},
	{
		name: 'Rajang',
		displayName: 'Furious Rajang',
		icon: IconMonsterFuriousRajang,
		rank: 'Musou 1',
		render: IconRenderMonsterFuriousRajang,
		component: ComponentMonsterFuriousRajang,
		unusedComponent: true,
	},
	{
		name: 'Guanzorumu',
		displayName: 'Ruling Guanzorumu',
		icon: IconMonsterRulingGuanzorumu,
		rank: 'Musou 1',
		render: IconRenderMonsterRulingGuanzorumu,
		component: ComponentMonsterRulingGuanzorumu,
		unusedComponent: false,
	},
	{
		name: 'Mi Ru',
		displayName: 'Shifting Mi Ru',
		icon: IconMonsterShiftingMiRu,
		rank: 'Musou 1',
		render: IconRenderMonsterShiftingMiRu,
		component: ComponentMonsterShiftingMiRu,
		unusedComponent: false,
	},
	{
		name: 'Rajang',
		displayName: 'Twinhead Rajang',
		icon: IconMonsterTwinheadRajang,
		rank: 'Twinhead 1',
		render: IconRenderMonsterTwinheadRajang,
		component: ComponentMonsterTwinheadRajang,
		unusedComponent: true,
	},
	{
		name: 'White Fatalis', // TODO
		displayName: 'Road White Fatalis',
		icon: IconMonsterWhiteFatalis,
		rank: 'G Rank',
		render: IconRenderMonsterWhiteFatalis,
		component: ComponentMonsterRoadWhiteFatalis,
		unusedComponent: false,
	},
];

export const TagTypes: {
	color: TagColor;
	icon: any;
	link: string;
	values: string[];
}[] = [
	{
		color: 'outline',
		icon: QuestionMarkIconWhite,
		link: '/',
		values: ['None'],
	},
	{
		color: 'outline',
		icon: MapIconWhite,
		link: '/hunter-notes/locations',
		values: ['Location'],
	},
	{
		color: 'red',
		icon: MonsterPartIconWhite,
		link: '/bestiary',
		values: [
			'Monster',
			'Musou',
			'Hardcore',
			'Unlimited',
			'Custom',
			'Supremacy',
			'Zenith',
			'Upper Shiten',
			'Lower Shiten',
			'Conquest',
			'Exotic',
			'Gou',
			'Low Rank',
			'High Rank',
			'G Rank',
			'Conquest LV1',
			'Conquest LV200',
			'Conquest LV1000',
			'Conquest LV9999',
			'Event',
		],
	},
	{
		color: 'magenta',
		icon: WhetstoneIconWhite,
		link: '/hunter-notes/weapons',

		values: [
			'Weapon',
			'Sword and Shield',
			'Dual Swords',
			'Long Sword',
			'Great Sword',
			'Hammer',
			'Hunting Horn',
			'Lance',
			'Gunlance',
			'Bow',
			'Heavy Bowgun',
			'Light Bowgun',
			'Switch Axe F',
			'Tonfa',
			'Magnet Spike',
		],
	},
	{
		color: 'purple',
		icon: MantleIconWhite,
		link: '/hunter-notes',

		values: [
			'Zenith Skill',
			'Z Sigil',
			'Z AOE Sigil',
			'Style Rank',
			'Prayer Gem',
			'Road/Tower',
			'Halk',
		],
	},
	{
		color: 'blue',
		icon: JewelIconWhite,
		link: '/hunter-notes/armor-skills',

		values: ['Armor Skill', 'Guild Food', 'Caravan Skill', 'Diva Skill'],
	},
	{
		color: 'cyan',
		icon: ArmorHelmetIcon,
		link: '/hunter-notes/gear',
		values: ['Blademaster', 'Gunner', 'BM/GN'],
	},
	{ color: 'teal', icon: MapIconWhite, link: '/', values: ['Quest'] },
	{
		color: 'green',
		icon: ArmorChestIcon,
		link: '/hunter-notes/gear',
		values: ['Armor', 'Cuff'],
	},
	{
		color: 'gray',
		icon: SacIconWhite,
		link: '/hunter-notes/lookup',
		values: ['Item', 'Sigil', 'Z Sigil', 'Decoration', 'Consumable'],
	},
	{
		color: 'cool-gray',
		icon: IconElementThunder,
		link: '/arena#elements',
		values: ['Element'],
	},
	{ color: 'warm-gray', icon: IconStatusBlast, link: '/', values: ['Status'] },
	{
		color: 'warm-gray',
		icon: IconAilmentBleed,
		link: '/arena#ailments',
		values: ['Ailment'],
	},
	{
		color: 'high-contrast',
		icon: OreIconWhite,
		link: '',

		values: ['NPC', 'Badge', 'Achievement', 'Medal', 'Trophy'],
	},
];

export const WeaponTypes: FrontierWeapon[] = [
	{
		id: 0,
		name: 'Great Sword',
		class: 'Blademaster',
		icon: GreatSwordIcon,
		smallIcon: GreatSwordIconSmall,
		smallIconRed: GreatSwordIconSmallRed,
		activeFeatureValue: 1,
		hiden: 'Sword King',
		bloatAttackMultiplier: 4.8,
		statusAssaultPoison: 20,
		statusAssaultParalysis: 10,
	},
	{
		id: 1,
		name: 'Heavy Bowgun',
		class: 'Gunner',
		icon: HeavyBowgunIcon,
		smallIcon: HeavyBowgunIconSmall,
		smallIconRed: HeavyBowgunIconSmallRed,
		activeFeatureValue: 2,
		hiden: 'Gun Sage',
		bloatAttackMultiplier: 1.2,
		statusAssaultPoison: 0,
		statusAssaultParalysis: 0,
	},
	{
		id: 2,
		name: 'Hammer',
		class: 'Blademaster',
		icon: HammerIcon,
		smallIcon: HammerIconSmall,
		smallIconRed: HammerIconSmallRed,
		activeFeatureValue: 4,
		hiden: 'Blunt Beast',
		bloatAttackMultiplier: 5.2,
		statusAssaultPoison: 11,
		statusAssaultParalysis: 10,
	},
	{
		id: 3,
		name: 'Lance',
		class: 'Blademaster',
		icon: LanceIcon,
		smallIcon: LanceIconSmall,
		smallIconRed: LanceIconSmallRed,
		activeFeatureValue: 8,
		hiden: 'Heavenly Spear',
		bloatAttackMultiplier: 2.3,
		statusAssaultPoison: 14,
		statusAssaultParalysis: 7,
	},
	{
		id: 4,
		name: 'Sword and Shield',
		class: 'Blademaster',
		icon: SwordAndShieldIcon,
		smallIcon: SwordAndShieldIconSmall,
		smallIconRed: SwordAndShieldIconSmallRed,
		activeFeatureValue: 16,
		hiden: 'Sword Saint',
		bloatAttackMultiplier: 1.4,
		statusAssaultPoison: 12,
		statusAssaultParalysis: 7,
	},
	{
		id: 5,
		name: 'Light Bowgun',
		class: 'Gunner',
		icon: LightBowgunIcon,
		smallIcon: LightBowgunIconSmall,
		smallIconRed: LightBowgunIconSmallRed,
		activeFeatureValue: 32,
		hiden: 'Gun Prodigy',
		bloatAttackMultiplier: 1.2,
		statusAssaultPoison: 0,
		statusAssaultParalysis: 0,
	},
	{
		id: 6,
		name: 'Dual Swords',
		class: 'Blademaster',
		icon: DualSwordsIcon,
		smallIcon: DualSwordsIconSmall,
		smallIconRed: DualSwordsIconSmallRed,
		activeFeatureValue: 64,
		hiden: 'Dual Dragon',
		bloatAttackMultiplier: 1.4,
		statusAssaultPoison: 10,
		statusAssaultParalysis: 3,
	},
	{
		id: 7,
		name: 'Long Sword',
		class: 'Blademaster',
		icon: LongSwordIcon,
		smallIcon: LongSwordIconSmall,
		smallIconRed: LongSwordIconSmallRed,
		activeFeatureValue: 128,
		hiden: 'Katana God',
		bloatAttackMultiplier: 4.8,
		statusAssaultPoison: 11,
		statusAssaultParalysis: 7,
	},
	{
		id: 8,
		name: 'Hunting Horn',
		class: 'Blademaster',
		icon: HuntingHornIcon,
		smallIcon: HuntingHornIconSmall,
		smallIconRed: HuntingHornIconSmallRed,
		activeFeatureValue: 256,
		hiden: 'Flamboyant Emperor',
		bloatAttackMultiplier: 5.2,
		statusAssaultPoison: 13,
		statusAssaultParalysis: 7,
	},
	{
		id: 9,
		name: 'Gunlance',
		class: 'Blademaster',
		icon: GunlanceIcon,
		smallIcon: GunlanceIconSmall,
		smallIconRed: GunlanceIconSmallRed,
		activeFeatureValue: 512,
		hiden: 'Cannon Emperor',
		bloatAttackMultiplier: 2.3,
		statusAssaultPoison: 10,
		statusAssaultParalysis: 9,
	},
	{
		id: 10,
		name: 'Bow',
		class: 'Gunner',
		icon: BowIcon,
		smallIcon: BowIconSmall,
		smallIconRed: BowIconSmallRed,
		activeFeatureValue: 1024,
		hiden: 'Bow Demon',
		bloatAttackMultiplier: 1.2,
		statusAssaultPoison: 0,
		statusAssaultParalysis: 0,
	},
	{
		id: 11,
		name: 'Tonfa',
		class: 'Blademaster',
		icon: TonfaIcon,
		smallIcon: TonfaIconSmall,
		smallIconRed: TonfaIconSmallRed,
		activeFeatureValue: 2048,
		hiden: 'Piercing Phoenix',
		bloatAttackMultiplier: 1.8,
		statusAssaultPoison: 10,
		statusAssaultParalysis: 6,
	},
	{
		id: 12,
		name: 'Switch Axe F',
		class: 'Blademaster',
		icon: SwitchAxeFIcon,
		smallIcon: SwitchAxeFIconSmall,
		smallIconRed: SwitchAxeFIconSmallRed,
		activeFeatureValue: 4096,
		hiden: 'Edge Marshal',
		bloatAttackMultiplier: 5.4,
		statusAssaultPoison: 11,
		statusAssaultParalysis: 7,
	},
	{
		id: 13,
		name: 'Magnet Spike',
		class: 'Blademaster',
		icon: MagnetSpikeIcon,
		smallIcon: MagnetSpikeIconSmall,
		smallIconRed: MagnetSpikeIconSmallRed,
		activeFeatureValue: 8192,
		hiden: 'Magnetic Star',
		bloatAttackMultiplier: 5.4,
		statusAssaultPoison: 13,
		statusAssaultParalysis: 6,
	},
];

export const SharpnessNames = Object.keys(Sharpness) as readonly string[];
export const RarityColors = [
	'#efefe9',
	'#efefe9',
	'#efefe9',
	'#73cb8d',
	'#ed93a4',
	'#96b5fd',
	'#ff985d',
	'#fffd2e',
	'#c8ff6a',
	'#68ecec',
	'#cba6fa',
	'#ff435d',
] as const;
export const ColorCodes = [
	'#323232',
	'#ff435d',
	'#56ff56',
	'#57ffff',
	'#ffff50',
	'#ffa461',
	'#ff84ff',
	'#bf6464',
	'#a0a0a0',
	'#808080',
	'#f08200',
	'#846b5c',
	'#80212e',
	'#747eff',
	'#ff9eca',
	'#4040ff',
	'#202020',
	'#602020',
	'#32bc64',
	'#001480',
	'#3e9dd8',
	'#72d242',
	'#b4641e',
	'#32bc64',
	'#4040ff',
	'#68ecec',
	'#c8ff6a',
	'#cba6fa',
	'#96b5fd',
	'#808028',
	'#640011',
	'#ffffff',
	'#000000',
	'#ff435d',
	'#56ff56',
	'#57ffff',
	'#ffff50',
	'#ffa461',
	'#ff84ff',
	'#bf6464',
	'#a0a0a0',
	'#808080',
	'#f08200',
	'#846b5c',
	'#80212e',
	'#2020a0',
	'#ff9eca',
	'#4040ff',
	'#202020',
	'#602020',
	'#32bc64',
	'#001480',
	'#3e9dd8',
	'#72d242',
	'#b4641e',
	'#32bc64',
	'#4040ff',
	'#68ecec',
	'#c8ff6a',
	'#cba6fa',
	'#96b5fd',
	'#808028',
	'#640011',
	'#684b02',
	'#014517',
	'#014066',
	'#c25900',
	'#4040ff',
	'#1f974f',
	'#a3a488',
	'#1c821c',
	'#cc5400',
	'#660066',
	'#000000',
	'#ff84ff',
	'#bf6464',
	'#ffff50',
	'#56ff56',
	'#ffffff',
	'#4040ff',
	'#57ffff',
	'#ffa461',
	'#e37eed',
	'#291c1c',
	'#cc6600',
	'#cc6600',
	'#cc6600',
	'#cc6600',
	'#cc6600',
	'#cc6600',
	'#cc6600',
] as const;

export const HuntingHornWeaponNotesCombinations: FrontierHuntingHornWeaponNote[][] =
	[
		['White', 'Blue', 'Red'],
		['White', 'Yellow', 'Red'],
		['White', 'Green', 'Red'],
		['White', 'Cyan', 'Red'],
		['White', 'Green', 'Yellow'],
		['White', 'Blue', 'Yellow'],
		['White', 'Green', 'Cyan'],
		['White', 'Green', 'Blue'],
		['White', 'Yellow', 'Cyan'],
		['White', 'Cyan', 'Blue'],
		['Purple', 'Blue', 'Red'],
		['Purple', 'Yellow', 'Red'],
		['Purple', 'Green', 'Red'],
		['Purple', 'Cyan', 'Red'],
		['Purple', 'Green', 'Yellow'],
		['Purple', 'Blue', 'Yellow'],
		['Purple', 'Green', 'Blue'],
		['Purple', 'Green', 'Cyan'],
		['Purple', 'Yellow', 'Cyan'],
		['Purple', 'Cyan', 'Blue'],
	];

type levelQuantity = [level1: number, level2: number, level3: number];

export const defaultWeaponComponentValues = {
	weaponSharpness: [
		170, 170, 170, 170, 170, 200, 250, 350,
	] as FrontierWeaponSharpness,
	weaponName: 'Depth Flamepike "Glory"',
	weaponLevel: 100,
	weaponRarity: 12 as FrontierRarity,
	weaponTypeId: '3',
	weaponRank: 'Z' as FrontierEquipmentRank,
	weaponLength: 'Very Long' as FrontierWeaponLength,
	weaponElementBoost: true,
	weaponStatusBoost: true,
	weaponAttackBoost: true,
	weaponAttack: 100,
	weaponElementValue: 1200,
	weaponStatusValue: 1100,
	weaponElementType: 'Fire' as FrontierElement,
	weaponStatusType: 'Poison' as FrontierStatus,
	weaponZenithSkill: 'Skill Slots Up+1' as FrontierZenithSkill,
	weaponSharpnessBoost: true,
	weaponDescription:
		'A spear decorated with a rare scarlet jewel from a foreign country.',
	weaponExtraIcons: false,
	weaponType: 'Evolution' as FrontierWeaponType,
	weaponAffinity: 150,
	weaponSigil1Id: 'Attack Slayer' as FrontierSigil,
	weaponSigil2Id: 'Attack Slayer' as FrontierSigil,
	weaponSigil3Id: 'Elemental Slayer' as FrontierSigil,
	weaponSigil4Id: 'Attack Slayer' as FrontierSigil,
	weaponSigil5Id: 'Elemental Slayer' as FrontierSigil,
	weaponSigil6Id: 'Elemental Slayer' as FrontierSigil,
	weaponSigil7Id: 'Elemental Slayer' as FrontierSigil,
	weaponSigil8Id: 'Attack Slayer' as FrontierSigil,
	weaponSigil9Id: 'Elemental Slayer' as FrontierSigil,
	weaponSigil1Value: 1,
	weaponSigil2Value: -2,
	weaponSigil3Value: 3,
	weaponSigil4Value: -4,
	weaponSigil5Value: 5,
	weaponSigil6Value: -6,
	weaponSigil7Value: 7,
	weaponSigil8Value: -8,
	weaponSigil9Value: 9,
	weaponAutomaticSkill: '' as FrontierArmorSkillName,
	huntingHornNote1:
		HuntingHornWeaponNotesCombinations[0][0] as FrontierHuntingHornWeaponNote,
	huntingHornNote2:
		HuntingHornWeaponNotesCombinations[0][1] as FrontierHuntingHornWeaponNote,
	huntingHornNote3:
		HuntingHornWeaponNotesCombinations[0][2] as FrontierHuntingHornWeaponNote,
	safPhial: 'Power' as FrontierSwitchAxeFPhial,
	gunlanceShellType: 'Spread' as FrontierGunlanceShell,
	gunlanceShellLevel: 9 as FrontierGunlanceShellLevel,
	bowArc: 'Narrow' as FrontierBowArcShot,
	bowChargeType1: 'Pierce' as FrontierBowCharge,
	bowChargeLevel1: 3 as FrontierBowChargeLevel,
	bowChargeType2: 'Spread' as FrontierBowCharge,
	bowChargeLevel2: 3 as FrontierBowChargeLevel,
	bowChargeType3: 'Pierce' as FrontierBowCharge,
	bowChargeLevel3: 4 as FrontierBowChargeLevel,
	bowPoisonCoatingAvailable: true,
	bowParalysisCoatingAvailable: true,
	bowSleepCoatingAvailable: true,
	bowImpactCoatingAvailable: true,
	bowPowerCoatingAvailable: true,
	bowgunReload: 'Very Fast' as FrontierBowgunReloadSpeed,
	bowgunRecoil: 'Smaller' as FrontierBowgunRecoil,
	bowgunScope: 'Zoom' as FrontierBowgunScope,
	lightBowgunUpgrade: 'Silencer' as FrontierLightBowgunUpgrade,
	heavyBowgunUpgrade: 'Power Barrel' as FrontierHeavyBowgunUpgrade,
	bowgunAttackLevel: 5 as FrontierBowgunAttackLevel,
	bowgunNormalAmmo: [9, 9, 12] as levelQuantity,
	bowgunPierceAmmo: [6, 6, 6] as levelQuantity,
	bowgunPelletAmmo: [6, 6, 6] as levelQuantity,
	bowgunCragAmmo: [2, 2, 2] as levelQuantity,
	bowgunClusterAmmo: [0, 0, 0] as levelQuantity,
	bowgunRecoveryAmmo: [0, 0, 0] as levelQuantity,
	bowgunPoisonAmmo: [0, 0, 0] as levelQuantity,
	bowgunParalysisAmmo: [0, 0, 0] as levelQuantity,
	bowgunSleepAmmo: [0, 0, 0] as levelQuantity,
	bowgunFlamingAmmo: [6, 0, 0] as levelQuantity,
	bowgunWaterAmmo: [0, 0, 0] as levelQuantity,
	bowgunThunderAmmo: [0, 0, 0] as levelQuantity,
	bowgunFreezeAmmo: [0, 0, 0] as levelQuantity,
	bowgunDragonAmmo: [0, 0, 0] as levelQuantity,
	bowgunTranqAmmo: [2, 0, 0] as levelQuantity,
	bowgunPaintAmmo: [2, 0, 0] as levelQuantity,
	bowgunDemonAmmo: [1, 0, 0] as levelQuantity,
	bowgunArmorAmmo: [1, 0, 0] as levelQuantity,
} as const;

export const defaultArmorComponentValues = {
	armorName: 'Barb Helmet ZP',
	armorLevel: 7 as FrontierArmorLevel,
	armorGRLevel: 7 as FrontierArmorGRLevel,
	armorDefense: 100,
	armorFireResistance: 0,
	armorWaterResistance: 0,
	armorThunderResistance: 0,
	armorIceResistance: 0,
	armorDragonResistance: 0,
	armorTransmog: true,
	armorClass: 'Either' as FrontierArmorClass,
	armorID: '0',
	armorRank: 'Z' as FrontierEquipmentRank,
	armorZenithSkill: 'Skill Slots Up+1' as FrontierZenithSkill,
	armorDescription:
		'A very very very very very very very very long description.',
	armorRarity: 12 as FrontierRarity,
	armorExtraIcons: false,
	armorSkillTreeNames: [
		'Blazing Grace',
		'Strong Attack',
		'Determination',
		'Absolute Defense',
		'Three Worlds Protection',
	] as FrontierArmorSkillTree[],
	armorSkillPoints: [10, 20, -30, 40, 50] as FrontierEquipmentSkillPoints,
	armorType: 'Zenith' as FrontierArmorType,
	armorAutomaticSkill: '' as FrontierArmorSkillName,
	armorDecorations: {
		slot1: {
			name: 'Zindol BM GX1',
			skill1: {
				name: 'Blazing Grace',
				points: 5,
			},
			skill2: {
				name: 'Blazing Grace',
				points: 5,
			},
			skill3: {
				name: 'Blazing Grace',
				points: 5,
			},
			skill4: {
				name: 'Blazing Grace',
				points: 5,
			},
		},
		slot2: {
			name: 'Zindol BM GX1',
			skill1: {
				name: 'Blazing Grace',
				points: 5,
			},
			skill2: {
				name: 'Blazing Grace',
				points: 5,
			},
			skill3: {
				name: 'Blazing Grace',
				points: 5,
			},
			skill4: {
				name: 'Blazing Grace',
				points: 5,
			},
		},
		slot3: {
			name: 'Zindol BM GX1',
			skill1: {
				name: 'Blazing Grace',
				points: 5,
			},
			skill2: {
				name: 'Blazing Grace',
				points: 5,
			},
			skill3: {
				name: 'Blazing Grace',
				points: 5,
			},
			skill4: {
				name: 'Blazing Grace',
				points: 5,
			},
		},
	} as FrontierEquipmentDecorations,
} as const;

export const defaultItemComponentValues = {
	itemName: 'Book of Combos',
	itemDescription:
		'A book of Combos. Used for increasing the chance of success when combining items. Bought from the shop.',
	itemRarity: 11 as FrontierRarity,
	itemRank: 'Z' as FrontierItemRankType,
	itemIconName: 'Book',
	itemColorName: 'Red' as FrontierItemColor,
	itemType: 'Other' as FrontierItemType,
	itemZenithSkill: 'Skill Slots Up+1' as FrontierZenithSkill,
	itemCuffSkill1: 'Vampirism' as FrontierArmorSkillTree,
	itemCuffSkill1Points: 10,
	itemCuffSkill2: 'Determination' as FrontierArmorSkillTree,
	itemCuffSkill2Points: -10,
	itemTowerSkill: 'Lone Wolf' as FrontierArmorSkillName,
	itemArmorClass: 'Either' as FrontierArmorClass,
	itemWeaponClass: 'Both' as FrontierWeaponClass,
	itemSlotsRequired: 2 as FrontierSlot,
	itemSigil: {
		slot1: {
			name: 'Attack Slayer',
			value: 8,
		},
		slot2: {
			name: 'Elemental Slayer',
			value: -8,
		},
		slot3: {
			name: 'Zenith Healing',
			value: 4,
		},
		slot4: {
			name: 'Affinity Slayer',
			value: -43,
		},
	} as FrontierItemSigil,
	itemDecoration: {
		slot1: {
			name: 'Determination',
			value: 7,
		},
		slot2: {
			name: 'Attack',
			value: -58,
		},
		slot3: {
			name: 'Defense',
			value: 9,
		},
		slot4: {
			name: 'Sharpness',
			value: 2,
		},
	} as FrontierItemDecoration,
} as const;

// TODO dmg calc
export const sharedWeaponMotionValues: FrontierMotionValueSection = {
	name: 'Shared',
	motionValues: [
		{
			name: 'Reflect+1',
			animation: MotionSwordAndShieldNoneJumpSlash,
			values: '24',
			notes: `Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.`,
		},
		{ name: 'Reflect+2', animation: '', values: '36' },
		{ name: 'Reflect+3', animation: '', values: '48' },
		{ name: 'Reflect Up', animation: '', values: '68' },
		{ name: 'Perfect Guard', animation: '', values: '72' },
		{ name: 'Perfect Guard Up', animation: '', values: '92' },
		{ name: 'Stylish Up', animation: '', values: '30' },
		{ name: 'Custom Motion', animation: '', values: '0' },
	],
};

export const bentoValues: FrontierBento[] = [
	{
		name: 'Vigorous',
		values: [
			{
				ingredient1: 'Rainbow Lettuce',
				ingredient2: 'Thin Wyvern Cut',
				dish: 'Sappari Marine',
				health: '+50',
				stamina: '+50',
				attack: '+15',
				defense: '0',
			},
			{
				ingredient1: 'Rainbow Lettuce',
				ingredient2: 'Silver Liver',
				dish: 'Dorri Grill',
				health: '+50',
				stamina: '+50',
				attack: '0',
				defense: '+80',
			},
		],
	},
	{
		name: 'Starving Wolf',
		values: [
			{
				ingredient1: 'Bitter Cheese',
				ingredient2: 'Thin Wyvern Cut',
				dish: 'Meow Noodle',
				health: '+50',
				stamina: '-75',
				attack: '+15',
				defense: '0',
			},
			{
				ingredient1: 'Bitter Cheese',
				ingredient2: 'Silver Liver',
				dish: 'Bee Steak',
				health: '+50',
				stamina: '-75',
				attack: '0',
				defense: '+80',
			},
		],
	},
	{
		name: 'Adrenaline',
		values: [
			{
				ingredient1: 'Queen Parsley',
				ingredient2: 'Thin Wyvern Cut',
				dish: 'Melomeloquiche',
				health: '-60',
				stamina: '+50',
				attack: '+15',
				defense: '0',
			},
			{
				ingredient1: 'Queen Parsley',
				ingredient2: 'Silver Liver',
				dish: 'Fluffy Saute',
				health: '-60',
				stamina: '+50',
				attack: '0',
				defense: '+80',
			},
		],
	},
	{
		name: 'Combo',
		values: [
			{
				ingredient1: 'Dancing Spice',
				ingredient2: 'Thin Wyvern Cut',
				dish: 'Dan Soup',
				health: '-50',
				stamina: '-50',
				attack: '+15',
				defense: '0',
			},
			{
				ingredient1: 'Queen Parsley',
				ingredient2: 'Silver Liver',
				dish: 'Explosion Burger',
				health: '-50',
				stamina: '-50',
				attack: '0',
				defense: '+80',
			},
		],
	},
];

export const weaponMotionValues: FrontierMotionValues[] = [
	{
		name: 'Sword and Shield',
		sections: [
			{
				name: 'None',
				motionValues: [
					{
						name: 'Jump Slash (Unsheathe)',
						animation: MotionSwordAndShieldNoneJumpSlash,
						values: '13(5)･21',
						notes: `Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.`,
					},
					{ name: 'Slide Slash', animation: '', values: '21' },
					{ name: 'Slash 1', animation: '', values: '20' },
					{ name: 'Slash 2', animation: '', values: '26' },
					{ name: 'Slash 3', animation: '', values: '10(5)･16' },
					{ name: 'Horizontal Slash', animation: '', values: '31' },
					{ name: 'Vacuum Slash Sigil', animation: '', values: '31･16' },
					{ name: 'Jump Slash 2', animation: '', values: '26･24' },
					{ name: 'Upslash', animation: '', values: '20' },
					{ name: 'Infinite Slash', animation: '', values: '25' },
					{ name: 'Infinite Slash Sigil', animation: '', values: '28' },
					{ name: 'Shield Bash', animation: '', values: '13(5)' },
					{ name: 'Shield Bash 2', animation: '', values: '18(10)' },
					{ name: 'Shield Bash Sigil', animation: '', values: '19(5)' },
					{ name: 'Shield Bash 2 Sigil', animation: '', values: '27(10)' },
					{ name: 'Slide Slash', animation: '', values: '21' },
					{ name: 'Slide Slash (Sigil)', animation: '', values: '31' },
					{
						name: 'Continuous Bashing 1 to 3',
						animation: '',
						values: '20(13) (Up to x3)',
					},
					{ name: 'Dash: Aerial Shield Bash', animation: '', values: '34(10)' },
					{ name: 'Dash: Frontflip Slash', animation: '', values: '18･34' },
					{
						name: 'Dash: Jump Slash (Unsheathe)',
						animation: '',
						values: '13(5)･21',
					},
					{ name: 'Evade Slash', animation: '', values: '17' },
					{ name: 'Sigil Additional', animation: '', values: '17' },
				],
			},
		],
	},
	{
		name: 'Dual Swords',
		sections: [
			{
				name: 'Extreme Demon Mode',
				motionValues: [
					{ name: 'Downslash 1', animation: '', values: '13･17' },
					{ name: 'Downslash 2', animation: '', values: '13･10' },
					{ name: 'Downslash 3', animation: '', values: '12･9･18･32' },
					{ name: 'Upslash', animation: '', values: '22' },
					{ name: 'Flurry Combo', animation: '', values: '13x3' },
					{ name: 'Flurry Rotation', animation: '', values: '21･33･51' },
					{ name: 'Whirlwind Combo', animation: '', values: '14x6' },
					{ name: 'Whirlwind Downslash', animation: '', values: '36･54' },
					{ name: 'Rising Slash', animation: '', values: '13･13･12･12' },
					{
						name: 'Evasion Slash (Forward･Back)',
						animation: '',
						values: '16･16',
					},
					{
						name: 'Evasion Slash (Left･Right)',
						animation: '',
						values: '8･8･8･8',
					},
					{ name: 'Dash: Upslash', animation: '', values: '22' },
					{ name: 'Dash: Sky Dance', animation: '', values: '8x5' },
					{ name: 'Sky Dance Finisher', animation: '', values: '27･27' },
					{ name: 'Dash: Evasion Slash', animation: '', values: '16x2' },
				],
			},
			{
				name: 'Extreme Demon Mode (Red Mode)',
				motionValues: [
					{ name: 'Downslash 1', animation: '', values: '14･18' },
					{ name: 'Downslash 2', animation: '', values: '14･11' },
					{ name: 'Downslash 3', animation: '', values: '13･10･20･34' },
					{ name: 'Upslash', animation: '', values: '24' },
					{ name: 'Flurry Combo', animation: '', values: '14x3' },
					{ name: 'Flurry Rotation', animation: '', values: '23･36･55' },
					{ name: 'Whirlwind Combo', animation: '', values: '15x6' },
					{ name: 'Whirlwind Downslash', animation: '', values: '39･58' },
					{ name: 'Rising Slash', animation: '', values: '14･14･13･13' },
					{
						name: 'Evasion Slash (Forward･Back)',
						animation: '',
						values: '17･17',
					},
					{
						name: 'Evasion Slash (Left･Right)',
						animation: '',
						values: '9･8･9･8',
					},
					{ name: 'Dash: Upslash', animation: '', values: '24' },
					{ name: 'Dash: Sky Dance', animation: '', values: '8x5' },
					{ name: 'Sky Dance Finisher', animation: '', values: '29･29' },
					{ name: 'Dash: Evasion Slash', animation: '', values: '17x2' },
				],
			},
			{
				name: 'Standard Mode',
				motionValues: [
					{ name: 'Rush Slash', animation: '', values: '11･5' },
					{ name: 'Rush Slash (Sigil)', animation: '', values: '16･7' },
					{ name: 'Downslash 1', animation: '', values: '10･13' },
					{ name: 'Downslash 2', animation: '', values: '10･8' },
					{ name: 'Downslash 3', animation: '', values: '9･7･14･24' },
					{ name: 'Rotation Slash', animation: '', values: '14･9･5' },
					{ name: 'Upslash', animation: '', values: '17' },
					{ name: 'Dash: Upslash', animation: '', values: '17' },
					{ name: 'Dash: Sky Dance', animation: '', values: '6x5' },
					{ name: 'Sky Dance Finisher', animation: '', values: '20･20' },
				],
			},
			{
				name: 'Demon Mode',
				motionValues: [
					{ name: 'Rush Slash', animation: '', values: '14･6' },
					{ name: 'Rush Slash (Sigil)', animation: '', values: '21･9' },
					{ name: 'Downslash 1', animation: '', values: '13･17' },
					{ name: 'Downslash 2', animation: '', values: '13･10' },
					{ name: 'Downslash 3', animation: '', values: '12･9･18･32' },
					{ name: 'Rotation Slash', animation: '', values: '18･12･6･29･17･12' },
					{ name: 'Upslash', animation: '', values: '22' },
					{ name: 'Flurry Combo', animation: '', values: '13x3' },
					{ name: 'Flurry Rotation', animation: '', values: '21･33･51' },
					{ name: 'Dash: Upslash', animation: '', values: '22' },
					{ name: 'Dash: Sky Dance', animation: '', values: '8x5' },
					{ name: 'Sky Dance Finisher', animation: '', values: '27･27' },
				],
			},
			{
				name: 'True Demon Mode',
				motionValues: [
					{ name: 'Rush Slash', animation: '', values: '14･6' },
					{ name: 'Rush Slash (Sigil)', animation: '', values: '21･9' },
					{ name: 'Downslash 1', animation: '', values: '13･17' },
					{ name: 'Downslash 2', animation: '', values: '13･10' },
					{ name: 'Downslash 3', animation: '', values: '12･9･18･32' },
					{ name: 'Rotation Slash', animation: '', values: '18･12･6･29･17･12' },
					{ name: 'Upslash', animation: '', values: '22' },
					{ name: 'Flurry Combo', animation: '', values: '13x3' },
					{ name: 'Flurry Rotation', animation: '', values: '21･33･51' },
					{ name: 'Whirlwind Combo', animation: '', values: '14x6' },
					{ name: 'Whirlwind Downslash', animation: '', values: '36･54' },
					{ name: 'Evasion Slash', animation: '', values: '12x2' },
					{ name: 'Dash: Upslash', animation: '', values: '22' },
					{ name: 'Dash: Sky Dance', animation: '', values: '8x5' },
					{ name: 'Sky Dance Finisher', animation: '', values: '27･27' },
					{ name: 'Dash: Evasion Slash', animation: '', values: '12x2' },
				],
			},
			{
				name: 'True Demon Mode (Red Mode)',
				motionValues: [
					{ name: 'Rush Slash', animation: '', values: '15･7' },
					{ name: 'Rush Slash (Sigil)', animation: '', values: '23･10' },
					{ name: 'Downslash 1', animation: '', values: '14･18' },
					{ name: 'Downslash 2', animation: '', values: '14･11' },
					{ name: 'Downslash 3', animation: '', values: '13･9･20･35' },
					{ name: 'Rotation Slash', animation: '', values: '20･13･7･31･18･13' },
					{ name: 'Upslash', animation: '', values: '22' },
					{ name: 'Flurry Combo', animation: '', values: '13x3' },
					{ name: 'Flurry Rotation', animation: '', values: '21･33･51' },
					{ name: 'Whirlwind Combo', animation: '', values: '14x6' },
					{ name: 'Whirlwind Downslash', animation: '', values: '36･54' },
					{ name: 'Evasion Slash', animation: '', values: '13x2' },
					{ name: 'Dash: Upslash', animation: '', values: '24' },
					{ name: 'Dash: Sky Dance', animation: '', values: '8x5' },
					{ name: 'Sky Dance Finisher', animation: '', values: '29･29' },
					{ name: 'Dash: Evasion Slash', animation: '', values: '13x2' },
				],
			},
		],
	},
	{
		name: 'Great Sword',
		sections: [
			{
				name: 'None',
				motionValues: [
					{ name: 'Vertical Slash', animation: '', values: '60' },
					{
						name: 'Vertical Finisher',
						animation: '',
						values: '45･76',
						notes: 'Has high hitlag',
					},
					{ name: 'Horizontal Slash', animation: '', values: '46' },
					{ name: 'Horizontal Slash (Sigil)', animation: '', values: '59' },
					{ name: 'Horizontal Finisher', animation: '', values: '105' },
					{ name: 'Upswing', animation: '', values: '58' },
					{ name: 'Upswing (Sigil)', animation: '', values: '75' },
					{ name: 'Upswing Finisher', animation: '', values: '117' },
					{ name: 'Lv1 Charge', animation: '', values: '85x110%' },
					{ name: 'Lv2 Charge', animation: '', values: '105x120%' },
					{ name: 'Lv3 Charge', animation: '', values: '146x130%' },
					{ name: 'Upswing Lv1 Charge', animation: '', values: '92' },
					{ name: 'Upswing Lv2 Charge', animation: '', values: '112x110%' },
					{ name: 'Upswing Lv3 Charge', animation: '', values: '157x120%' },
					{ name: 'Upswing Lv4 Charge', animation: '', values: '200x130%' },
					{ name: 'Guard: Vertical', animation: '', values: '200' },
					{ name: 'Guard: Horizontal', animation: '', values: '125' },
					{
						name: 'Shining Sword (Fencing Disabled)',
						animation: '',
						values: '27x17 (459)',
					},
				],
			},
			{
				name: 'Charge Attack Up+1',
				motionValues: [
					{ name: 'Lv1 Charge', animation: '', values: '92x110%' },
					{ name: 'Lv2 Charge', animation: '', values: '112x120%' },
					{ name: 'Lv3 Charge', animation: '', values: '156x130%' },
					{ name: 'Upswing Lv1', animation: '', values: '99' },
					{ name: 'Upswing Lv2', animation: '', values: '119x110%' },
					{ name: 'Upswing Lv3', animation: '', values: '167x120%' },
					{ name: 'Upswing Lv4', animation: '', values: '213x130%' },
					{
						name: 'Shining Sword (Fencing Disabled)',
						animation: '',
						values: '40x17 (680)',
					},
				],
			},
			{
				name: 'Charge Attack Up+2',
				motionValues: [
					{ name: 'Lv1 Charge', animation: '', values: '95x110%' },
					{ name: 'Lv2 Charge', animation: '', values: '115x120%' },
					{ name: 'Lv3 Charge', animation: '', values: '161.5x130%' },
					{ name: 'Upswing Lv1', animation: '', values: '102' },
					{ name: 'Upswing Lv2', animation: '', values: '122x110%' },
					{ name: 'Upswing Lv3', animation: '', values: '172.5x120%' },
					{ name: 'Upswing Lv4', animation: '', values: '220x130%' },
					{
						name: 'Shining Sword (Fencing Disabled)',
						animation: '',
						values: '47x17 (799)',
					},
				],
			},
		],
	},
	{
		name: 'Long Sword',
		sections: [
			{
				name: 'None',
				motionValues: [
					{ name: 'Down Slash', animation: '', values: '40' },
					{ name: 'Downslash 2', animation: '', values: '33' },
					{ name: 'Thrust', animation: '', values: '25' },
					{ name: 'Rising Slash', animation: '', values: '28' },
					{ name: 'Rising Slash (Sigil)', animation: '', values: '42' },
					{ name: 'Evade Slash', animation: '', values: '30' },
					{ name: 'Spirit 1 (0% Bar)', animation: '', values: '17' },
					{ name: 'Spirit 1', animation: '', values: '37' },
					{ name: 'Spirit 2', animation: '', values: '39' },
					{ name: 'Spirit 3', animation: '', values: '21･21･46' },
					{ name: 'Sidehop Slash', animation: '', values: '26' },
					{ name: 'Piercing Stab', animation: '', values: '26･13･13' },
					{ name: 'Piercing Stab (Sigil)', animation: '', values: '35･17･17' },
					{ name: 'Strong Piercing Stab', animation: '', values: '25･12x5･31' },
					{
						name: 'Strong Piercing Stab (Sigil)',
						animation: '',
						values: '33･16x5･41',
					},
					{ name: 'Blade Release [<50%]', animation: '', values: '5' },
					{ name: 'Blade Release [>50%]', animation: '', values: '5･5' },
					{ name: 'Blade Release [100%]', animation: '', values: '5･5･5' },
					{
						name: 'Release Blast [<50%] (No Fencing)',
						animation: '',
						values: '10',
					},
					{
						name: 'Release Blast [>50%] (No Fencing)',
						animation: '',
						values: '60',
					},
					{
						name: 'Release Blast [100%] (No Fencing)',
						animation: '',
						values: '180',
					},
					{ name: 'Dash: Charge (No Spirit use)', animation: '', values: '18' },
					{ name: 'Dash: Charge (Spirit use)', animation: '', values: '70' },
					{ name: 'Guard: Teleport', animation: '', values: '30･15' },
					{ name: 'Guard: Piercing Stab', animation: '', values: '25･12x5･31' },
					{ name: 'Spirit Release', animation: '', values: '40･※･※' },
					{ name: 'Release [Spirit 1]', animation: '', values: '60･※･※' },
					{ name: 'Release [Spirit 2]', animation: '', values: '70･※･※' },
					{ name: 'Release [Spirit 3]', animation: '', values: '90･※･※' },
					{ name: '※ at 100% Spirit Bar', animation: '', values: '35' },
					{ name: '※ at 80% Spirit Bar', animation: '', values: '26' },
					{ name: '※ at 50% Spirit Bar', animation: '', values: '20' },
				],
			},
			{
				name: 'Charge Attack Up+1',
				motionValues: [
					{ name: 'Piercing Stab', animation: '', values: '29･15x2' },
					{ name: 'Piercing Stab (Sigil)', animation: '', values: '38･19x2' },
					{ name: 'Strong Piercing Stab', animation: '', values: '28･13x5･35' },
					{
						name: 'Strong Piercing Stab (Sigil)',
						animation: '',
						values: '36･17x5･45',
					},
					{ name: 'Dash: Charge (No Spirit use)', animation: '', values: '23' },
					{ name: 'Dash: Charge (Spirit use)', animation: '', values: '80' },
					{ name: 'Spirit Release', animation: '', values: '49･※･※' },
					{ name: 'Release [Spirit 1]', animation: '', values: '71･※･※' },
					{ name: 'Release [Spirit 2]', animation: '', values: '82･※･※' },
					{ name: 'Release [Spirit 3]', animation: '', values: '105･※･※' },
					{ name: '※ at 100% Spirit Bar', animation: '', values: '41' },
					{ name: '※ at 80% Spirit Bar', animation: '', values: '32' },
					{ name: '※ at 50% Spirit Bar', animation: '', values: '26' },
				],
			},
			{
				name: 'Charge Attack Up+2',
				motionValues: [
					{ name: 'Piercing Stab', animation: '', values: '30･16x2' },
					{ name: 'Piercing Stab (Sigil)', animation: '', values: '39･20x2' },
					{ name: 'Strong Piercing Stab', animation: '', values: '33･16x5･41' },
					{
						name: 'Strong Piercing Stab (Sigil)',
						animation: '',
						values: '38･18x5･47',
					},
					{ name: 'Dash: Charge (No Spirit use)', animation: '', values: '26' },
					{ name: 'Dash: Charge (Spirit use)', animation: '', values: '86' },
					{ name: 'Spirit Release', animation: '', values: '54･※･※' },
					{ name: 'Release [Spirit 1]', animation: '', values: '76･※･※' },
					{ name: 'Release [Spirit 2]', animation: '', values: '88･※･※' },
					{ name: 'Release [Spirit 3]', animation: '', values: '112･※･※' },
					{ name: '※ at 100% Spirit Bar', animation: '', values: '44' },
					{ name: '※ at 80% Spirit Bar', animation: '', values: '35' },
					{ name: '※ at 50% Spirit Bar', animation: '', values: '29' },
				],
			},
		],
	},
	{
		name: 'Hammer',
		sections: [
			{
				name: 'None',
				motionValues: [
					{ name: 'Unsheathe', animation: '', values: '32(24)' },
					{ name: 'Unsheathe (Sigil)', animation: '', values: '48(24)' },
					{ name: 'Quick Smash', animation: '', values: '60(50)' },
					{ name: 'Baseball Swing', animation: '', values: '100(50)' },
					{ name: 'Baseball Swing (Sigil)', animation: '', values: '130(50)' },
					{ name: 'Smash 1', animation: '', values: '52(25)' },
					{ name: 'Smash 2', animation: '', values: '38(25)' },
					{ name: 'Upswing', animation: '', values: '100(80)' },
					{ name: 'Horizontal Swing', animation: '', values: '30(35)' },
					{ name: 'Charge Upswing', animation: '', values: '45(30)' },
					{ name: 'Charge Lv1', animation: '', values: '52(20)' },
					{ name: 'Charge Lv2', animation: '', values: '52(20)･35(20)' },
					{ name: 'Charge Lv3', animation: '', values: '40(20)･100(60)' },
					{
						name: 'Charge Lv4 (Shoryuken)',
						animation: '',
						values: '40(30)･30(30)･120(80)',
					},
					{
						name: 'Charge Lv5 (Flip)',
						animation: '',
						values: '60(60)･45(40)･145(115)',
					},
					{ name: 'Swipes Start', animation: '', values: '60(15)' },
					{ name: 'Swipes Combo', animation: '', values: '45(15)xn' },
					{ name: 'Swinging', animation: '', values: '20(12)' },
					{
						name: 'Swinging Slam Lv1',
						animation: '',
						values: '30(20)･40(30)･10(10)',
					},
					{
						name: 'Swinging Slam Lv2',
						animation: '',
						values: '30(20)･40(30)･70(50)',
					},
					{
						name: 'Swinging Slam Lv3',
						animation: '',
						values: '30(20)･40(30)･160(130)',
					},
				],
			},
			{
				name: 'Charge Attack Up+1',
				motionValues: [
					{ name: 'Charge Upswing', animation: '', values: '52(30)' },
					{ name: 'Charge Lv1', animation: '', values: '56(20)' },
					{ name: 'Charge Lv2', animation: '', values: '56(20)･36(20)' },
					{ name: 'Charge Lv3', animation: '', values: '44(20)･109(60)' },
					{
						name: 'Charge Lv4 (Shoryuken)',
						animation: '',
						values: '41(30)･35(30)･128(80)',
					},
					{
						name: 'Charge Lv5 (Flip)',
						animation: '',
						values: '63(60)･47(40)･153(115)',
					},
					{ name: 'Swipes Start', animation: '', values: '64(15)' },
					{ name: 'Swipes Combo', animation: '', values: '48(15)xn' },
					{
						name: 'Swinging Slam Lv1',
						animation: '',
						values: '32(20)･43(30)･13(10)',
					},
					{
						name: 'Swinging Slam Lv2',
						animation: '',
						values: '32(20)･43(30)･75(50)',
					},
					{
						name: 'Swinging Slam Lv3',
						animation: '',
						values: '32(20)･43(30)･167(130)',
					},
				],
			},
			{
				name: 'Charge Attack Up+2',
				motionValues: [
					{ name: 'Charge Upswing', animation: '', values: '55(30)' },
					{ name: 'Charge Lv1', animation: '', values: '58(20)' },
					{ name: 'Charge Lv2', animation: '', values: '58(20)･37(20)' },
					{ name: 'Charge Lv3', animation: '', values: '46(20)･114(60)' },
					{
						name: 'Charge Lv4 (Shoryuken)',
						animation: '',
						values: '41(30)･35(30)･128(80)',
					},
					{
						name: 'Charge Lv5 (Flip)',
						animation: '',
						values: '64(60)･48(40)･157(115)',
					},
					{ name: 'Swipes Start', animation: '', values: '66(15)' },
					{ name: 'Swipes Combo', animation: '', values: '49(15)xn' },
					{
						name: 'Swinging Slam Lv1',
						animation: '',
						values: '33(20)･44(30)･15(10)',
					},
					{
						name: 'Swinging Slam Lv2',
						animation: '',
						values: '33(20)･44(30)･77(50)',
					},
					{
						name: 'Swinging Slam Lv3',
						animation: '',
						values: '33(20)･44(30)･170(130)',
					},
				],
			},
		],
	},
	{
		name: 'Hunting Horn',
		sections: [
			{
				name: 'None',
				motionValues: [
					{
						name: 'Slam Attack (to Note 2)',
						animation: '',
						values: '18(8)･57(30)',
					},
					{ name: 'Upthrust Start', animation: '', values: '60(24)' },
					{ name: 'Upthrust (to Note 2)', animation: '', values: '30(24)xn' },
					{ name: 'Upthrust End', animation: '', values: '39(30)' },
					{ name: 'Upswings (to Note 3)', animation: '', values: '40(20)' },
					{ name: 'Poke (to Note 1)', animation: '', values: '16' },
					{ name: 'Poke (to Note 1) (Sigil)', animation: '', values: '27' },
					{ name: 'Start Playing', animation: '', values: '26(26)' },
					{ name: 'Start Playing (Sigil)', animation: '', values: '39(26)' },
					{ name: 'Note 1 (L/R Face Button)', animation: '', values: '50(26)' },
					{
						name: 'Note 1 (L/R Face Button) (Sigil)',
						animation: '',
						values: '75(26)',
					},
					{ name: 'Note 2 (Top Face Button)', animation: '', values: '43(26)' },
					{
						name: 'Note 2 (Top Face Button) (Sigil)',
						animation: '',
						values: '64(26)',
					},
					{
						name: 'Note 3 (T+R Face Buttons)',
						animation: '',
						values: '49(26)',
					},
					{
						name: 'Note 3 (T+R Face Buttons) (Sigil)',
						animation: '',
						values: '73(26)',
					},
					{ name: 'Stop Playing', animation: '', values: '31(30)' },
					{ name: 'Stop Playing (Sigil)', animation: '', values: '46(30)' },
					{
						name: 'Dash: Turning Point',
						animation: '',
						values: '40(20)･40(20)',
					},
					{ name: 'Sonic Bomb Debuff', animation: '', values: '30 Fixed' },
				],
			},
		],
	},
	{
		name: 'Lance',
		sections: [
			{
				name: 'None',
				motionValues: [
					{ name: 'Unsheathe Stabs', animation: '', values: '36' },
					{ name: 'Thrust 1 - 3', animation: '', values: '32' },
					{ name: 'Thrust 4', animation: '', values: '38' },
					{ name: 'Thurst 4 (Hiden)', animation: '', values: '48' },
					{ name: 'Upthrust 1 - 3', animation: '', values: '35' },
					{ name: 'Upthrust 4', animation: '', values: '38' },
					{ name: 'Upthrust 4 (Hiden)', animation: '', values: '48' },
					{ name: 'Sky Stab 1 - 3', animation: '', values: '38' },
					{ name: 'Sky Stab 4', animation: '', values: '43' },
					{ name: 'Sky Stab 4 (Hiden)', animation: '', values: '53' },
					{
						name: 'Shield Rush ※ White Sharp',
						animation: '',
						values: '3(5)･25(10) ※ Impact',
					},
					{
						name: 'Shield Rush (Sigil) ※ White Sharp',
						animation: '',
						values: '4(5)･37(10) ※ Impact',
					},
					{ name: 'Yellow Charge', animation: '', values: '50' },
					{ name: 'Red Charge', animation: '', values: '78' },
					{ name: 'Evade Thrust', animation: '', values: '24' },
					{ name: 'Finishing Thrust', animation: '', values: '91' },
					{ name: 'Dash: Heavy Thrust', animation: '', values: '50' },
					{
						name: 'Dash: Guard ※ White Sharp',
						animation: '',
						values: '25(13) ※ Impact',
					},
				],
			},
			{
				name: 'Charge Attack Up+1',
				motionValues: [
					{ name: 'Yellow Charge', animation: '', values: '55' },
					{ name: 'Red Charge', animation: '', values: '89' },
				],
			},
			{
				name: 'Charge Attack Up+2',
				motionValues: [
					{ name: 'Yellow Charge', animation: '', values: '58' },
					{ name: 'Red Charge', animation: '', values: '94' },
				],
			},
		],
	},
	{
		name: 'Gunlance',
		sections: [
			{
				name: 'None',
				motionValues: [
					{ name: 'Rush Thrust (Unsheathe)', animation: '', values: '38' },
					{
						name: 'Rush Thrust (Unsheathe) (Sigil)',
						animation: '',
						values: '57',
					},
					{ name: 'Horizontal Sweep', animation: '', values: '34' },
					{ name: 'Horizontal Sweep (Sigil)', animation: '', values: '51' },
					{ name: 'Backhop Slash', animation: '', values: '18 + Shelling' },
					{ name: 'Thrust 1-2', animation: '', values: '33' },
					{ name: 'Thrust 3', animation: '', values: '34' },
					{ name: 'Upswing', animation: '', values: '42' },
					{ name: 'Upthrusts', animation: '', values: '30' },
					{
						name: 'Bombardment Boost: Dash Cleave',
						animation: '',
						values: '58',
					},
					{
						name: 'Heatblade (Elemental)',
						animation: '',
						values: '5 + Element',
					},
					{ name: 'Heatblade (Raw)', animation: '', values: '9' },
					{ name: 'Heatblade Slam', animation: '', values: '62' },
					{ name: 'Ele Shell Charge Up', animation: '', values: '25' },
				],
			},
		],
	},
	{
		name: 'Tonfa',
		sections: [
			{
				name: 'Long Mode',
				motionValues: [
					{ name: 'Unsheathe', animation: '', values: '28(12)' },
					{ name: 'Standard 1', animation: '', values: '14(6)' },
					{ name: 'Standard 2 Lv1', animation: '', values: '11(8)' },
					{ name: 'Standard 2 Lv2', animation: '', values: '38(22)' },
					{ name: 'Standard 2 Lv3', animation: '', values: '58(32)' },
					{ name: 'EX Pursuit 1', animation: '', values: '8(7)' },
					{ name: 'EX Pursuit 2', animation: '', values: '23(20)' },
					{ name: 'EX Pursuit 3', animation: '', values: '33(30)' },
					{ name: 'Standard 2 & EX Lv1', animation: '', values: '11(8)･8(7)' },
					{
						name: 'Standard 2 & EX Lv2',
						animation: '',
						values: '38(8)･23(20)',
					},
					{
						name: 'Standard 2 & EX Lv3',
						animation: '',
						values: '58(8)･33(30)',
					},
					{ name: 'Standard 3', animation: '', values: '18(6)' },
					{ name: 'Standard 4', animation: '', values: '9x2(7)' },
					{ name: 'Standard 5 Lv1', animation: '', values: '16(20)' },
					{ name: 'Standard 5 Lv2', animation: '', values: '50(60)' },
					{ name: 'Standard 5 Lv3', animation: '', values: '110(110)' },
					{ name: 'EX Evade (Back)', animation: '', values: '34(20)' },
					{ name: 'EX Evade (Side)', animation: '', values: '20(20)･20(10)' },
					{ name: 'EX Evade (Forward)', animation: '', values: '24(15)' },
					{ name: 'Aerial EX Evade', animation: '', values: '16(8)･16(8)' },
					{ name: 'Dash Stab', animation: '', values: '12(10)･20(15)' },
					{ name: 'Dash Kick', animation: '', values: '7x2(3)[K]･12(4)･20(4)' },
					{ name: 'Special 1', animation: '', values: '11x2(2)[K]' },
					{ name: 'Special 2', animation: '', values: '10(10)' },
					{ name: 'Special 3', animation: '', values: '9(6)･12(8)' },
					{ name: 'Special 4', animation: '', values: '26(24)' },
					{
						name: 'Special 5',
						animation: '',
						values: '16(15)･11x4(13)･24(20)',
					},
					{ name: 'Special 6', animation: '', values: '19x2(2)[K]' },
					{ name: 'Jump Evasion', animation: '', values: '5x2(2)[K]' },
					{ name: 'Aerial 1', animation: '', values: '15(14)' },
					{ name: 'Aerial 2', animation: '', values: '10x2(13)' },
					{ name: 'Aerial 3', animation: '', values: '15(11)[K]･16(11)' },
					{ name: 'Aerial 1-3 Combo', animation: '', values: '66 (5 hits)' },
					{ name: 'Landing Kick', animation: '', values: '12x2(12)' },
					{ name: 'Ryuuki', animation: '', values: '1x2･40(2)' },
					{ name: 'Aerial Ryuuki', animation: '', values: '1x2･30(2)' },
					{ name: 'Boxing Dance 4 Hits', animation: '', values: '12(2)' },
					{ name: 'Boxing Dance 8 Hits', animation: '', values: '14(2)' },
					{ name: 'Boxing Dance 12 Hits', animation: '', values: '16(2)' },
					{
						name: 'Boxing Dance 12 Hit Combo',
						animation: '',
						values: '168(24)',
					},
					{ name: 'Boxing Dance 13 Hits ~', animation: '', values: '28(2)' },
					{ name: 'Release', animation: '', values: '30(10)' },
					{ name: '~ Burst ~ 3 Hits', animation: '', values: 'Bomb 50(5)' },
					{ name: '~ Burst ~ 11 Hits', animation: '', values: 'Bomb 100(5)' },
					{ name: '~ Burst ~ 12 Hits+', animation: '', values: 'Bomb 200(5)' },
				],
			},
			{
				name: 'Charge Attack Up +2 & Gunnery God',
				motionValues: [
					{ name: 'Standard 2 & EX Lv1', animation: '', values: '13(8)･11(7)' },
					{
						name: 'Standard 2 & EX Lv2',
						animation: '',
						values: '42(22)･32(20)',
					},
					{
						name: 'Standard 2 & EX Lv3',
						animation: '',
						values: '65(32)･48(30)',
					},
				],
			},
			{
				name: 'Long Mode Charge Attack Up +1',
				motionValues: [
					{ name: 'Standard 2 Lv1', animation: '', values: '12(8)' },
					{ name: 'Standard 2 Lv2', animation: '', values: '41(22)' },
					{ name: 'Standard 2 Lv3', animation: '', values: '62(32)' },
					{ name: 'Standard 5 Lv1', animation: '', values: '18(20)' },
					{ name: 'Standard 5 Lv2', animation: '', values: '55(60)' },
					{ name: 'Standard 5 Lv3', animation: '', values: '119(110)' },
				],
			},
			{
				name: 'Long Mode Charge Attack Up +2',
				motionValues: [
					{ name: 'Standard 2 Lv1', animation: '', values: '13(8)' },
					{ name: 'Standard 2 Lv2', animation: '', values: '42(22)' },
					{ name: 'Standard 2 Lv3', animation: '', values: '65(32)' },
					{ name: 'Standard 5 Lv1', animation: '', values: '20(20)' },
					{ name: 'Standard 5 Lv2', animation: '', values: '61(60)' },
					{ name: 'Standard 5 Lv3', animation: '', values: '131(110)' },
				],
			},
			{
				name: 'Gunnery',
				motionValues: [
					{ name: 'EX Pursuit 1 (G. God)', animation: '', values: '11(7)' },
					{ name: 'EX Pursuit 2 (G. God)', animation: '', values: '32(20)' },
					{ name: 'EX Pursuit 3 (G. God)', animation: '', values: '48(30)' },
					{ name: 'EX Pursuit 1 (G. Expert)', animation: '', values: '10(7)' },
					{ name: 'EX Pursuit 2 (G. Expert)', animation: '', values: '29(20)' },
					{ name: 'EX Pursuit 3 (G. Expert)', animation: '', values: '43(30)' },
					{ name: 'EX Pursuit 1 (G. Novice)', animation: '', values: '9(7)' },
					{ name: 'EX Pursuit 2 (G. Novice)', animation: '', values: '26(20)' },
					{ name: 'EX Pursuit 3 (G. Novice)', animation: '', values: '38(30)' },
					{ name: 'Ryuuki (G. Novice)', animation: '', values: '8x2･40(2)' },
					{ name: 'Ryuuki (G. Expert)', animation: '', values: '10x2･40(2)' },
					{ name: 'Ryuuki (G. God)', animation: '', values: '15x2･40(2)' },
					{
						name: 'Aerial Ryuuki (G. Novice)',
						animation: '',
						values: '7x2･30(2)',
					},
					{
						name: 'Aerial Ryuuki (G. Expert)',
						animation: '',
						values: '9x2･30(2)',
					},
					{
						name: 'Aerial Ryuuki (G. God)',
						animation: '',
						values: '12x2･30(2)',
					},
				],
			},
			{
				name: 'Martial Arts +1',
				motionValues: [
					{
						name: 'Dash Kick',
						animation: '',
						values: '11x2(3)[K]･15(4)･25(4)',
					},
					{ name: 'Jump Evasion', animation: '', values: '6x2(2)[K]' },
					{ name: 'Special 1', animation: '', values: '16x2(2)[K]' },
					{ name: 'Special 6', animation: '', values: '28x2(2)[K]' },
					{
						name: 'Aerial 1 - 3',
						animation: '',
						values: '74 (5 hits) (Orig: 116)',
					},
				],
			},
			{
				name: 'Martial Arts +2',
				motionValues: [
					{
						name: 'Dash Kick',
						animation: '',
						values: '15x2(3)[K]･15(4)･25(4)',
					},
					{ name: 'Jump Evasion', animation: '', values: '7x2(2)[K]' },
					{ name: 'Special 1', animation: '', values: '18x2(2)[K]' },
					{ name: 'Special 6', animation: '', values: '33x2(2)[K]' },
					{
						name: 'Aerial 3',
						animation: '',
						values: '23(11)[K]･25(11) (Orig: 31･33)',
					},
					{
						name: 'Aerial 1-3 Combo',
						animation: '',
						values: '83 (5 hits) (Orig: 116)',
					},
				],
			},

			{
				name: 'Short Mode',
				motionValues: [
					{ name: 'Unsheathe', animation: '', values: '28(12)' },
					{ name: 'Standard 1', animation: '', values: '14(6)' },
					{ name: 'Standard 2 Lv1', animation: '', values: '11(8)' },
					{ name: 'Standard 2 Lv2', animation: '', values: '38(22)' },
					{ name: 'Standard 2 Lv3', animation: '', values: '58(32)' },
					{ name: 'EX Pursuit 1', animation: '', values: '8(7)' },
					{ name: 'EX Pursuit 2', animation: '', values: '23(20)' },
					{ name: 'EX Pursuit 3', animation: '', values: '33(30)' },
					{ name: 'Standard 2 & EX Lv1', animation: '', values: '11(8)･8(7)' },
					{
						name: 'Standard 2 & EX Lv2',
						animation: '',
						values: '38(8)･23(20)',
					},
					{
						name: 'Standard 2 & EX Lv3',
						animation: '',
						values: '58(8)･33(30)',
					},
					{ name: 'Standard 3', animation: '', values: '18(6)' },
					{ name: 'Standard 4', animation: '', values: '9x2(7)' },
					{ name: 'Continuous Thrust 1', animation: '', values: '11(3)･12(3)' },
					{ name: 'Continuous Thrust 2', animation: '', values: '10x4(3)' },
					{ name: 'Continuous Thrust 3', animation: '', values: '40(12)' },
					{ name: 'EX Evade (Back)', animation: '', values: '34(20)' },
					{ name: 'EX Evade (Side)', animation: '', values: '20(20)･20(10)' },
					{ name: 'EX Evade (Forward)', animation: '', values: '24(15)' },
					{ name: 'Aerial EX Evade', animation: '', values: '16(8)･16(8)' },
					{
						name: 'Dash Tonfa Rotation',
						animation: '',
						values: '3x4(2)･10x2(4)',
					},
					{ name: 'Dash Kick', animation: '', values: '7x2(3)[K]･12(4)･20(4)' },
					{ name: 'Special 1', animation: '', values: '11x2(2)[K]' },
					{ name: 'Special 2', animation: '', values: '10(10)' },
					{ name: 'Special 3', animation: '', values: '9(6)･12(8)' },
					{ name: 'Special 4', animation: '', values: '26(24)' },
					{
						name: 'Special 5',
						animation: '',
						values: '16(15)･11x4(13)･24(20)',
					},
					{ name: 'Special 6', animation: '', values: '19x2(2)[K]' },
					{ name: 'Jump Evasion', animation: '', values: '5x2(2)[K]' },
					{ name: 'Aerial 1', animation: '', values: '15(14)' },
					{ name: 'Aerial 2', animation: '', values: '10x2(13)' },
					{ name: 'Aerial 3', animation: '', values: '15(11)[K]･16(11)' },
					{ name: 'Aerial 1-3 Combo', animation: '', values: '66 (5 hits)' },
					{ name: 'Glide Kick (Airtime+)', animation: '', values: '14(14)[K]' },
					{ name: 'Ryuuki', animation: '', values: '1x2･40(2)' },
					{ name: 'Aerial Ryuuki', animation: '', values: '1x2･30(2)' },
					{ name: 'Boxing Dance 4 Hits', animation: '', values: '12(2)' },
					{ name: 'Boxing Dance 8 Hits', animation: '', values: '14(2)' },
					{ name: 'Boxing Dance 12 Hits', animation: '', values: '16(2)' },
					{
						name: 'Boxing Dance 12 Hit Combo',
						animation: '',
						values: '168(24)',
					},
					{ name: 'Boxing Dance 13 Hits ~', animation: '', values: '28(2)' },
					{ name: 'Release', animation: '', values: '30(10)' },
					{ name: '~ Burst ~ 3 Hits', animation: '', values: 'Bomb 50(5)' },
					{ name: '~ Burst ~ 11 Hits', animation: '', values: 'Bomb 100(5)' },
					{ name: '~ Burst ~ 12 Hits+', animation: '', values: 'Bomb 200(5)' },
				],
			},
			{
				name: 'Short Mode Charge Attack Up +1',
				motionValues: [
					{ name: 'Standard 2 Lv1', animation: '', values: '12(8)' },
					{ name: 'Standard 2 Lv2', animation: '', values: '41(22)' },
					{ name: 'Standard 2 Lv3', animation: '', values: '62(32)' },
				],
			},
			{
				name: 'Short Mode Charge Attack Up +2',
				motionValues: [
					{ name: 'Standard 2 Lv1', animation: '', values: '13(8)' },
					{ name: 'Standard 2 Lv2', animation: '', values: '42(22)' },
					{ name: 'Standard 2 Lv3', animation: '', values: '65(32)' },
				],
			},
		],
	},
	{
		name: 'Switch Axe F',
		sections: [
			{
				name: 'Axe Mode',
				motionValues: [
					{ name: 'Vertical Slash', animation: '', values: '46' },
					{ name: 'Upslash', animation: '', values: '35' },
					{ name: 'Horizontal Slash', animation: '', values: '34' },
					{ name: 'Rush Slash', animation: '', values: '33' },
					{ name: "Hack 'n' Slash", animation: '', values: '35' },
				],
			},
			{
				name: 'Ele, Status, Stun Phials Sword Mode',
				motionValues: [
					{
						name: 'Running Rotation Slash',
						animation: '',
						values: '32･41 (15･0)',
					},
					{ name: 'Running Upslash', animation: '', values: '29 (14)' },
					{ name: 'Slash Evasion', animation: '', values: '21 (6)' },
					{ name: 'S Evasion into Thrust', animation: '', values: '33' },
					{
						name: 'S Evasion Charged Upslash',
						animation: '',
						values: '75 (38)',
					},
					{ name: 'Charge Infinite Slash', animation: '', values: '33 (5)' },
					{ name: 'Charged Upslash', animation: '', values: '75 (38)' },
				],
			},
			{
				name: 'Charge Attack Up +1 Ele, Status, Stun Phials Sword Mode',
				motionValues: [
					{
						name: 'S Evasion Charged Upslash',
						animation: '',
						values: '81 (38)',
					},
					{ name: 'Charge Infinite Slash', animation: '', values: '35 (5)' },
					{ name: 'Charged Upslash', animation: '', values: '81 (38)' },
				],
			},
			{
				name: 'Charge Attack Up +2 Ele, Status, Stun Phials Sword Mode',
				motionValues: [
					{
						name: 'S Evasion Charged Upslash',
						animation: '',
						values: '83 (38)',
					},
					{ name: 'Charge Infinite Slash', animation: '', values: '37 (5)' },
					{ name: 'Charged Upslash', animation: '', values: '83 (38)' },
				],
			},
			{
				name: 'Ele, Status, Stun Phials Lightsword Mode',
				motionValues: [
					{
						name: 'Light Sword Transformation',
						animation: '',
						values: '46 (19)',
					},
					{ name: 'Vertical Slash', animation: '', values: '46 (19)' },
					{ name: 'Upslash', animation: '', values: '48 (15)' },
					{ name: 'Side Slash', animation: '', values: '41 (15)' },
					{
						name: 'Running Rotation Slash',
						animation: '',
						values: '33･45 (21･21)',
					},
					{ name: 'Running Upslash', animation: '', values: '31 (15)' },
					{ name: 'Slash Evasion', animation: '', values: '22 (7)' },
					{ name: 'S Evasion Upslash', animation: '', values: '48 (15)' },
					{
						name: 'S Evasion Charged Upslash',
						animation: '',
						values: '79 (40)',
					},
					{ name: 'Charged Upslash', animation: '', values: '79 (38)' },
					{ name: 'Overcharged Downslash', animation: '', values: '46 (19)' },
					{ name: 'Charge Infinite Slash', animation: '', values: '35 (6)' },
					{ name: 'Continuous Slash', animation: '', values: '53･53 (19･19)' },
					{
						name: 'Continuous Slash Finisher',
						animation: '',
						values: '42･73 (26･35)',
					},
					{ name: 'Discharge [Start]', animation: '', values: '19 (8)' },
					{ name: 'Discharge [Ticks]', animation: '', values: '13 (0)' },
					{
						name: 'Discharge [Early Blast]',
						animation: '',
						values: '160 (20) (40 Sigil)',
					},
					{
						name: 'Discharge [Blast]',
						animation: '',
						values: '270 (50) (80 Sigil)',
					},
					{
						name: 'Absolute Release [Ticks]',
						animation: '',
						values: '13･13･13 (4･4･4)',
					},
					{
						name: 'Absolute Release [Early Finisher]',
						animation: '',
						values: '9･9 (5･5)',
					},
					{
						name: 'Absolute Release [Early Blast]',
						animation: '',
						values: '125 (40) (50 sigil)',
					},
					{
						name: 'Absolute Release [1~2 Ticks Finisher]',
						animation: '',
						values: '18･18 (5･5)',
					},
					{
						name: 'Absolute Release [1~2 Ticks Blast]',
						animation: '',
						values: '280 (130) (150 Sigil)',
					},
					{
						name: 'Absolute Release [Finisher]',
						animation: '',
						values: '27･27 (5･5)',
					},
					{
						name: 'Absolute Release [Blast]',
						animation: '',
						values: '375 (150) (220 Sigil)',
					},
				],
			},
			{
				name: 'Charge Attack Up +1 Ele, Status, Stun Phials Lightsword Mode',
				motionValues: [
					{
						name: 'S Evasion Charged Upslash',
						animation: '',
						values: '85 (40)',
					},
					{ name: 'Charged Upslash', animation: '', values: '85 (38)' },
					{ name: 'Charge Infinite Slash', animation: '', values: '37 (6)' },
				],
			},
			{
				name: 'Charge Attack Up +2 Ele, Status, Stun Phials Lightsword Mode',
				motionValues: [
					{
						name: 'S Evasion Charged Upslash',
						animation: '',
						values: '87 (40)',
					},
					{ name: 'Charged Upslash', animation: '', values: '87 (38)' },
					{ name: 'Charge Infinite Slash', animation: '', values: '39 (6)' },
				],
			},
			{
				name: 'Power Phial Sword Mode',
				motionValues: [
					{
						name: 'Running Rotation Slash',
						animation: '',
						values: '35･41 (15･0)',
					},
					{ name: 'Running Upslash', animation: '', values: '31' },
					{ name: 'Slash Evasion', animation: '', values: '23' },
					{ name: 'S Evasion into Thrust', animation: '', values: '33' },
					{ name: 'S Evasion Charged Upslash', animation: '', values: '82' },
					{ name: 'Charge Infinite Slash', animation: '', values: '36' },
					{ name: 'Charged Upslash', animation: '', values: '82' },
				],
			},
			{
				name: 'Charge Attack Up +1 Power Phial Sword Mode',
				motionValues: [
					{ name: 'S Evasion Charged Upslash', animation: '', values: '89' },
					{ name: 'Charge Infinite Slash', animation: '', values: '38' },
					{ name: 'Charged Upslash', animation: '', values: '89' },
				],
			},
			{
				name: 'Charge Attack Up +2 Power Phial Sword Mode',
				motionValues: [
					{ name: 'S Evasion Charged Upslash', animation: '', values: '89' },
					{ name: 'Charge Infinite Slash', animation: '', values: '38' },
					{ name: 'Charged Upslash', animation: '', values: '89' },
				],
			},
			{
				name: 'Power Phial Lightsword Mode',
				motionValues: [
					{ name: 'Light Sword Transformation', animation: '', values: '50' },
					{ name: 'Vertical Slash', animation: '', values: '50' },
					{ name: 'Upslash', animation: '', values: '52' },
					{ name: 'Side Slash', animation: '', values: '45' },
					{ name: 'Running Rotation Slash', animation: '', values: '36･45' },
					{ name: 'Running Upslash', animation: '', values: '34' },
					{ name: 'Slash Evasion', animation: '', values: '24' },
					{ name: 'S Evasion Upslash', animation: '', values: '52' },
					{ name: 'S Evasion Charged Upslash', animation: '', values: '86' },
					{ name: 'Charged Upslash', animation: '', values: '86' },
					{ name: 'Overcharged Downslash', animation: '', values: '50' },
					{ name: 'Charge Infinite Slash', animation: '', values: '38' },
					{ name: 'Continuous Slash', animation: '', values: '58･58' },
					{ name: 'Continuous Slash Finisher', animation: '', values: '46･80' },
					{ name: 'Discharge [Start]', animation: '', values: '20' },
					{ name: 'Discharge [Ticks]', animation: '', values: '14' },
					{ name: 'Discharge [Early Blast]', animation: '', values: '176' },
					{ name: 'Discharge [Blast]', animation: '', values: '297' },
					{
						name: 'Absolute Release [Ticks]',
						animation: '',
						values: '14･14･14',
					},
					{
						name: 'Absolute Release [Early Finisher]',
						animation: '',
						values: '9･9',
					},
					{
						name: 'Absolute Release [Early Blast]',
						animation: '',
						values: '125',
					},
					{
						name: 'Absolute Release [1~2 Ticks Finisher]',
						animation: '',
						values: '19･19',
					},
					{
						name: 'Absolute Release [1~2 Ticks Blast]',
						animation: '',
						values: '280',
					},
					{
						name: 'Absolute Release [Finisher]',
						animation: '',
						values: '29･29',
					},
					{ name: 'Absolute Release [Blast]', animation: '', values: '375' },
				],
			},
			{
				name: 'Charge Attack Up +1 Power Phial Lightsword Mode',
				motionValues: [
					{ name: 'S Evasion Charged Upslash', animation: '', values: '85' },
					{ name: 'Charged Upslash', animation: '', values: '85' },
					{ name: 'Charge Infinite Slash', animation: '', values: '37' },
				],
			},
			{
				name: 'Charge Attack Up +2 Power Phial Lightsword Mode',
				motionValues: [
					{ name: 'S Evasion Charged Upslash', animation: '', values: '87' },
					{ name: 'Charged Upslash', animation: '', values: '87' },
					{ name: 'Charge Infinite Slash', animation: '', values: '39' },
				],
			},
		],
	},
	{
		name: 'Magnet Spike',
		sections: [
			{
				name: 'Cutting Mode',
				motionValues: [
					{ name: 'Unsheathe Vertical', animation: '', values: '61' },
					{ name: 'Vertical 1', animation: '', values: '43' },
					{ name: 'Upslash', animation: '', values: '35' },
					{ name: 'Vertical 2', animation: '', values: '46' },
					{ name: 'Horizontal 1', animation: '', values: '56' },
					{ name: 'Horizontal 2', animation: '', values: '46' },
					{ name: 'Horizontal 3', animation: '', values: '64' },
					{ name: 'Finishing Slash', animation: '', values: '120' },
					{
						name: 'Finishing Slash [Magnetised]',
						animation: '',
						values: '120‧10x3',
					},
					{ name: 'Guard Counter', animation: '', values: '30' },
					{ name: 'Guard Counter [Success]', animation: '', values: '30‧80' },
					{ name: 'Magnetic Double Slash', animation: '', values: '44‧54' },
					{ name: 'Magnetic Evade Upslash', animation: '', values: '55' },
					{ name: 'Retreat Slash', animation: '', values: '20‧20' },
					{ name: 'Magnetic Assault (Leap)', animation: '', values: '80' },
					{ name: 'Falling Downslash', animation: '', values: '200' },
					{ name: 'Magnetic Pin', animation: '', values: '1' },
					{ name: 'Magnetic Pin Finisher', animation: '', values: '600' },
					{
						name: 'Magnetic Pin Finisher [Feature]',
						animation: '',
						values: '750',
					},
				],
			},
			{
				name: 'Impact Mode',
				motionValues: [
					{ name: 'Horizontal 1', animation: '', values: '44 (30)' },
					{ name: 'Horizontal 2', animation: '', values: '53 (30)' },
					{ name: 'Overhead Horizontal', animation: '', values: '100 (45)' },
					{ name: 'Down Swipe', animation: '', values: '46 (25)' },
					{ name: 'Triple Strike 1', animation: '', values: '51 (10)' },
					{ name: 'Triple Strike 2', animation: '', values: '58 (20)' },
					{ name: 'Triple Strike 3', animation: '', values: '130 (50)' },
					{ name: 'Charged Strike', animation: '', values: '338 (190)' },
					{
						name: 'Charged Strike [Charge UP+1]',
						animation: '',
						values: '363 (190)',
					},
					{
						name: 'Charged Strike [Charge UP+2]',
						animation: '',
						values: '373 (190)',
					},
					{ name: 'Supplex', animation: '', values: '96 ‧ 121 (50 ‧ 65)' },
					{ name: 'Guard Assault', animation: '', values: '73 ‧ 90 (35 ‧ 45)' },
					{
						name: 'Magnetic Double Swipe',
						animation: '',
						values: '42 ‧ 52 (30 ‧ 35)',
					},
					{ name: 'Magnetic Shock (Whiff)', animation: '', values: '75 (30)' },
					{
						name: 'Magnetic Shock (Iframes Used)',
						animation: '',
						values: '125 ‧ 5x3 (60 ‧ 5x3)',
					},
					{
						name: 'Magnetic Assault (Leap)',
						animation: '',
						values: '40 ‧ 50 (35 ‧ 35)',
					},
					{
						name: 'Falling Swings',
						animation: '',
						values: '25 ‧ 80 ‧ 120 (20 ‧ 35 ‧ 75)',
					},
					{ name: 'Magnetic Pin', animation: '', values: '1' },
					{ name: 'Magnetic Pin Finisher', animation: '', values: '600' },
					{
						name: 'Magnetic Pin Finisher [Feature]',
						animation: '',
						values: '750',
					},
				],
			},
		],
	},
	{
		name: 'Light Bowgun',
		sections: [
			{
				name: 'Shots',
				motionValues: [
					{ name: 'LV1 Norm S.', animation: '', values: '6' },
					{ name: 'LV2 Norm S.', animation: '', values: '12' },
					{ name: 'LV3 Norm S.', animation: '', values: '12xn' },
					{ name: 'LV1 Pierce S. (1 Hit)', animation: '', values: '10x3' },
					{ name: 'LV2 Pierce S. (1 Hit)', animation: '', values: '9x4' },
					{ name: 'LV3 Pierce S. (1 Hit)', animation: '', values: '7x6' },
					{ name: 'LV1 Pierce S. (3 Hit)', animation: '', values: '10x3' },
					{ name: 'LV2 Pierce S. (4 Hit)', animation: '', values: '9x4' },
					{ name: 'LV3 Pierce S. (6 Hit)', animation: '', values: '7x6' },
					{ name: 'LV1 Pellet S.', animation: '', values: '5x3, Water 50' },
					{ name: 'LV2 Pellet S.', animation: '', values: '5x4, Water 40' },
					{ name: 'LV3 Pellet S.', animation: '', values: '5x5, Water 40' },
					{
						name: 'LV1 Impact Pellet (Sigil)',
						animation: '',
						values: '10(4)x2',
					},
					{
						name: 'LV2 Impact Pellet (Sigil)',
						animation: '',
						values: '9(4)x3',
					},
					{
						name: 'LV3 Impact Pellet (Sigil)',
						animation: '',
						values: '7(4)x5',
					},
					{
						name: 'LV1 Crag S.',
						animation: '',
						values: '3, Bomb 30, Fire 400',
					},
					{
						name: 'LV2 Crag S.',
						animation: '',
						values: '3, Bomb 40, Fire 600',
					},
					{
						name: 'LV3 Crag S.',
						animation: '',
						values: '3, Bomb 50, Fire 800',
					},
					{
						name: 'LV1 Cluster S.',
						animation: '',
						values: '(6 + Bomb 32 + Fire 20) x 3',
					},
					{
						name: 'LV2 Cluster S.',
						animation: '',
						values: '(6 + Bomb 32 + Fire 20) x 4',
					},
					{
						name: 'LV3 Cluster S.',
						animation: '',
						values: '(6 + Bomb 32 + Fire 20) x 5',
					},
					{
						name: 'Fire Shot',
						animation: '',
						values: '1 + (Attack x 0.4 Fire)',
					},
					{
						name: 'Water Shot',
						animation: '',
						values: '(1 + (Attack x 0.2 Water)) x 3',
					},
					{
						name: 'Thunder Shot',
						animation: '',
						values: '(1 + (Attack x 0.2 Thunder)) x 3',
					},
					{
						name: 'Ice Shot',
						animation: '',
						values: '(1 + (Attack x 0.2 Ice)) x 3',
					},
					{ name: 'Dragon Shot', animation: '', values: '750 Dragon' },
					{
						name: 'LV1 Recovery Shot',
						animation: '',
						values: '1 (30 Healing)',
					},
					{
						name: 'Lv2 Recovery Shot',
						animation: '',
						values: '1 (50 Healing)',
					},
					{ name: 'LV1 Poison', animation: '', values: '10 (25 Status)' },
					{ name: 'Lv2 Poison', animation: '', values: '15 (50 Status)' },
					{ name: 'LV1 Para', animation: '', values: '10 (25 Status)' },
					{ name: 'LV2 Para', animation: '', values: '15 (50 Status)' },
					{ name: 'LV1 Sleep', animation: '', values: '1 (25 Status)' },
					{ name: 'LV2 Sleep', animation: '', values: '1 (50 Status)' },
					{ name: 'Tranq Shot', animation: '', values: '1 (80 Cap Value)' },
					{ name: 'Paint Shot', animation: '', values: '1 (Paintball)' },
					{ name: 'Demon Shot', animation: '', values: '1 (Attack +3)' },
					{ name: 'Armour Shot', animation: '', values: '1 (Defense +6)' },
					{ name: 'Acid Shot', animation: '', values: '1 (Raw Weakness +10)' },
					{
						name: 'Ele Acid Shot',
						animation: '',
						values: '1 (Ele Weakness +10)',
					},
				],
			},
			{
				name: 'Melee',
				motionValues: [
					{ name: 'Melee Attacks', animation: '', values: '5･5･10' },
				],
			},
		],
	},

	{
		name: 'Heavy Bowgun',
		sections: [
			{
				name: 'Shots',
				motionValues: [
					{ name: 'LV1 Norm S.', animation: '', values: '6x1' },
					{ name: 'LV2 Norm S.', animation: '', values: '12x1' },
					{ name: 'LV3 Norm S.', animation: '', values: '12xn' },
					{ name: 'LV1 Pierce S. (1 Hit)', animation: '', values: '12' },
					{ name: 'LV2 Pierce S. (1 Hit)', animation: '', values: '11' },
					{ name: 'LV3 Pierce S. (1 Hit)', animation: '', values: '10' },
					{ name: 'LV1 Pierce S. (3 Hit)', animation: '', values: '12x3' },
					{ name: 'LV2 Pierce S. (4 Hit)', animation: '', values: '11x4' },
					{ name: 'LV3 Pierce S. (6 Hit)', animation: '', values: '10x6' },
					{ name: 'LV1 Pellet S.', animation: '', values: '5x3, Water 50' },
					{ name: 'LV2 Pellet S.', animation: '', values: '5x4, Water 40' },
					{ name: 'LV3 Pellet S.', animation: '', values: '5x5, Water 40' },
					{
						name: 'LV1 Impact Pellet (Sigil)',
						animation: '',
						values: '10x2 (8x2 KO)',
					},
					{
						name: 'LV2 Impact Pellet (Sigil)',
						animation: '',
						values: '9x3 (8x3 KO)',
					},
					{
						name: 'LV3 Impact Pellet (Sigil)',
						animation: '',
						values: '7x5 (8x5 KO)',
					},
					{
						name: 'LV1 Crag S.',
						animation: '',
						values: '3, Bomb 30, Fire 400',
					},
					{
						name: 'LV2 Crag S.',
						animation: '',
						values: '3, Bomb 40, Fire 600',
					},
					{
						name: 'LV3 Crag S.',
						animation: '',
						values: '3, Bomb 50, Fire 800',
					},
					{
						name: 'LV1 Cluster S.',
						animation: '',
						values: '6, Bomb 32, Fire 20x3',
					},
					{
						name: 'LV2 Cluster S.',
						animation: '',
						values: '6, Bomb 32, Fire 20x4',
					},
					{
						name: 'LV3 Cluster S.',
						animation: '',
						values: '6, Bomb 32, Fire 20x5',
					},
					{
						name: 'Fire Shot',
						animation: '',
						values: '1 + (Attack x 0.5 Fire)',
					},
					{
						name: 'Water Shot',
						animation: '',
						values: '1 + (Attack x 0.25 Water) x 3',
					},
					{
						name: 'Thunder Shot',
						animation: '',
						values: '1 + (Attack x 0.27 Thunder) x 3',
					},
					{
						name: 'Ice Shot',
						animation: '',
						values: '1 + (Attack x 0.25 Ice) x 3',
					},
					{ name: 'Dragon Shot', animation: '', values: '900 Dragon x 6' },
					{ name: 'LV1 Recov', animation: '', values: '1 (30 Healing)' },
					{ name: 'Lv2 Recov', animation: '', values: '1 (50 Healing)' },
					{ name: 'LV1 Poison', animation: '', values: '10 (25 Status)' },
					{ name: 'Lv2 Poison', animation: '', values: '15 (50 Status)' },
					{ name: 'LV1 Para', animation: '', values: '10 (25 Status)' },
					{ name: 'LV2 Para', animation: '', values: '15 (50 Status)' },
					{ name: 'LV1 Sleep', animation: '', values: '1 (25 Status)' },
					{ name: 'LV2 Sleep', animation: '', values: '1 (50 Status)' },
					{ name: 'Tranq Shot', animation: '', values: '1 (80 Cap Value)' },
					{ name: 'Paint Shot', animation: '', values: '1 (Paintball)' },
					{ name: 'Demon Shot', animation: '', values: '1 (Attack +3)' },
					{ name: 'Armour Shot', animation: '', values: '1 (Defense +6)' },
				],
			},
			{
				name: 'Compression Shots',
				motionValues: [
					{ name: 'Compressed Shot Motion', animation: '', values: '0' }, // TODO
					{ name: 'Compressed Elemental Shot', animation: '', values: '0' },
				],
			},
		],
	},
	{
		name: 'Bow',
		sections: [
			{
				name: 'Shots',
				motionValues: [
					{ name: 'Rapid LV1', animation: '', values: '14' },
					{ name: 'Rapid LV2', animation: '', values: '14･6' },
					{ name: 'Rapid LV3', animation: '', values: '14･6･5' },
					{ name: 'Rapid LV4', animation: '', values: '14･6･5･3' },
					{ name: 'Scatter LV1', animation: '', values: '4･6･4' },
					{ name: 'Scatter LV2', animation: '', values: '6･7･6' },
					{ name: 'Scatter LV3', animation: '', values: '4･6･6･6･4' },
					{ name: 'Scatter LV4', animation: '', values: '4･6･7･6･4' },
					{ name: 'Pierce LV1', animation: '', values: '7x3' },
					{ name: 'Pierce LV2', animation: '', values: '7x4' },
					{ name: 'Pierce LV3', animation: '', values: '7x5' },
					{ name: 'Pierce LV4', animation: '', values: '7x6' },
					{
						name: 'Uncharged Horizontal Rising Shot',
						animation: '',
						values: '4',
					},
					{
						name: 'Uncharged Vertical Rising Shot',
						animation: '',
						values: '40 (0.4x Raw, 1.0x Elemental)',
					},
					{
						name: 'Charged Horizontal Rising Shot',
						animation: '',
						values: '4 (1.0x Raw, 1.5x Elemental)',
					},
					{
						name: 'Charged Vertical Rising Shot',
						animation: '',
						values: '40 (1.0x Raw, 1.5x Elemental)',
					},
					{
						name: 'Sigil Additional',
						animation: '',
						values: '0',
					},
				],
			},
			{
				name: 'Arc Shots',
				motionValues: [
					{ name: 'Wide Pellet Arc', animation: '', values: '18(3)x7' },
					{ name: 'Narrow Pellet Arc', animation: '', values: '16x5' },
					{
						name: 'Explosive Shell Arc',
						animation: '',
						values: '15(30) 19 Bomb',
					},
					{
						name: 'Arrow Rain Arc (Cutting, Shot HB)',
						animation: '',
						values: '12x7',
					},
				],
			},
			{
				name: 'Crouch Shots',
				motionValues: [
					{ name: 'Sniper Shot Lv4', animation: '', values: '12x5' },
					{
						name: 'Piercing Sniper Shot Lv4',
						animation: '',
						values: '10x5･25･10･5･4･2',
					},
					{ name: 'Sniper Shot Lv5', animation: '', values: '12x5' },
					{
						name: 'Piercing Sniper Shot Lv4',
						animation: '',
						values: '10x5･25･10･5･4･2',
					},
				],
			},
			{
				name: 'Melee',
				motionValues: [
					{ name: 'Melee Attacks', animation: '', values: '10･10･18' },
					{ name: 'Shoryuken', animation: '', values: '12x2･10x2･31･10' },
					{
						name: 'Shoryuken (Sigil)',
						animation: '',
						values: '17x2･15x2･41･15',
					},
				],
			},
		],
	},
];

export const missionRequirementAttackCeilings = [
	1, 3, 5, 6, 7, 9, 12, 13, 15, 17, 18, 20, 22, 23, 24, 25, 28, 30, 31, 33, 36,
	37, 38, 39, 41, 42, 44, 46, 47, 48, 49, 51, 53, 54, 55, 57, 59, 60, 62, 64,
	65, 66, 67, 70, 72, 73, 75, 76, 78, 79, 81, 83, 84, 86, 88, 89, 90, 91, 94,
	95, 96, 97, 99, 101, 102, 104, 106, 107, 108, 109, 112, 113, 114, 115, 117,
	118, 120, 121, 123, 125, 126, 128, 130, 131, 132, 133, 135, 137, 138, 139,
	141, 143, 144, 146, 148, 150, 151, 153, 154, 156, 157, 159, 160, 161, 162,
	164, 166, 167, 169, 170, 171, 172, 173, 174, 175, 176, 177, 179, 180, 181,
	182, 183, 184, 185, 187, 188, 189, 190, 191, 192, 193, 195, 196, 197, 198,
	199, 200, 201, 203, 204, 205, 206, 207, 208, 209, 211, 212, 213, 214, 215,
	216, 217, 219, 220, 221, 222, 223, 224, 225, 227, 228, 229, 230, 231, 232,
	233, 235, 236, 237, 238, 239, 240, 241, 243, 244, 245, 246, 247, 248, 249,
];

/** GL Shells Norm1-9,Long1-9,Spread1-9
 */
export const gunlanceShellValues = [
	16, 23, 30, 35, 40, 65, 75, 85, 99, 24, 33, 42, 48, 53, 84, 95, 106, 122, 31,
	44, 57, 63, 68, 107, 119, 133, 153,
];

export const affinityDropdownItems: DropdownItemOption[] = [
	{
		name: 'None',
		value: 0,
	},
	{
		name: 'None (+0)',
		value: 0,
	},
	{
		name: 'None (+0 / +0.00x)',
		value: 0,
	},
	{
		name: 'None (x1 Ele & Status)',
		value: 0,
	},
	{
		name: 'Affinity +20% (+20%)',
		value: 20,
	},
	{
		name: 'Affinity +24% (+24%)',
		value: 24,
	},
	{
		name: 'Affinity +26% (+26%)',
		value: 26,
	},

	{
		name: 'Below Blue or Gunners (+0%)',
		value: 0,
	},
	{
		name: 'Blue (+5%)',
		value: 5,
	},
	{
		name: 'White Upwards (+10%)',
		value: 10,
	},

	{
		name: 'Expert +1 (+10%)',
		value: 10,
	},
	{
		name: 'Expert +2 (+20%)',
		value: 20,
	},
	{
		name: 'Expert +3 (+30%)',
		value: 30,
	},
	{
		name: 'Expert +4 (+40%)',
		value: 40,
	},
	{
		name: 'Expert +5 (+50%)',
		value: 50,
	},
	{
		name: 'Determination (+100%)',
		value: 100,
	},

	{
		name: 'Critical Conversion (+30%)',
		value: 30,
	},

	{
		name: 'None or Determination',
		value: 0,
	},
	{
		name: 'Issen +1 (+5% / +0.10x)',
		value: 5,
	},
	{
		name: 'Issen +2 (+10% / +0.15x)',
		value: 10,
	},
	{
		name: 'Issen +3 (+20% / +0.25x)',
		value: 20,
	},

	{
		name: 'Ceaseless 1st Stage (+35% / +0.10x)',
		value: 35,
	},
	{
		name: 'Ceaseless 2nd Stage (+50% / +0.15x)',
		value: 60,
	},
	{
		name: 'Ceaseless Up 3rd Stage (+60% / +0.20x)',
		value: 70,
	},

	{
		name: 'Starving Wolf+1 (+50% / +0.00x)',
		value: 50,
	},
	{
		name: 'Starving Wolf+2 (+50% / +0.10x)',
		value: 50,
	},

	// {
	// 	name: '1.8x LBG & Bow Crit Distance',
	// 	value: 1.8,
	// },

	{
		name: 'Caravan Whetstone (+10%)',
		value: 10,
	},
	{
		name: 'Halk Drink (+30%)',
		value: 30,
	},
	{
		name: 'Both (+40%)',
		value: 40,
	},
	{
		name: 'Unsheathe and Parry Attacks (+100%)',
		value: 100,
	},

	{
		name: '1st Stage (+70 / 1.05x Ele & Status / +10% Affinity)',
		value: 10,
	},
	{
		name: '2nd Stage (+100 / 1.10x Ele & Status / +25% Affinity)',
		value: 25,
	},
	{
		name: '3rd Stage (+180 / 1.20x Ele & Status / +40% Affinity)',
		value: 40,
	},
] as const;

export const multipliedBaseDropdownItems: DropdownItemOption[] = [
	{
		name: 'None',
		value: 0,
	},
	{
		name: 'None (+0)',
		value: 0,
	},
	{
		name: 'None (+0 / +0.00x)',
		value: 0,
	},
	{
		name: 'None (1x)',
		value: 1,
	},
	{
		name: 'Strong Attack +1 (+20)',
		value: 20,
	},
	{
		name: 'Strong Attack +2 (+35)',
		value: 35,
	},
	{
		name: 'Strong Attack +3 (+50)',
		value: 50,
	},
	{
		name: 'Strong Attack +4 (+80)',
		value: 80,
	},
	{
		name: 'Determination (+100)',
		value: 100,
	},
	{
		name: 'Strong Attack +5 (+150)',
		value: 50,
	},
	{
		name: 'Strong Attack +6 (+200)',
		value: 200,
	},
	{
		name: 'Shooting Rampage (x1.1) (Ranged Only)',
		value: 1.1,
	},
	{
		name: 'Weapons Art Small (x1.01)',
		value: 1.01,
	},
	{
		name: 'Weapons Art Medium (x1.025)',
		value: 1.025,
	},
	{
		name: 'Weapons Art Large (x1.05)',
		value: 1.05,
	},
	{
		name: 'Power Charm (+6)',
		value: 6,
	},
	{
		name: 'Power Talon (+9)',
		value: 9,
	},
	{
		name: 'Both (+15)',
		value: 15,
	},
	{
		name: 'Demon Drug / Halk D. Drug (+3)',
		value: 3,
	},
	{
		name: 'Mega Demon Drug (+5)',
		value: 5,
	},
	{
		name: 'Small Atk Food (+3)',
		value: 3,
	},
	{
		name: 'Med Atk Food(+5)',
		value: 5,
	},
	{
		name: 'SR Med Atk Food (+10)',
		value: 10,
	},
	{
		name: 'SR Lg Atk Food (+15)',
		value: 15,
	},
	{
		name: 'Power Seed(+10)',
		value: 10,
	},
	{
		name: 'Demon Horn (+10)',
		value: 10,
	},
	{
		name: 'Art of Dancing (+10)',
		value: 10,
	},
	{
		name: 'Tonfa Body Aura (Ranged Only) (+25)',
		value: 25,
	},
	{
		name: 'Tonfa B. Aura A. Feature (Ranged Only) (+50)',
		value: 50,
	},
	{
		name: 'Long Sword Attack Up (+10)',
		value: 10,
	},
	{
		name: 'Long Sword Active Feature Attack Up (+40)',
		value: 40,
	},
	{
		name: '(Cat) Demon Horn (No Skill) (+10)',
		value: 10,
	},
	{
		name: '(Cat) Demon Horn +1 (+20)',
		value: 20,
	},
	{
		name: '(Cat) Demon Horn +2 (+40)',
		value: 40,
	},
	{
		name: '(Cat) D. Horn (No Skill) & Encourage+1 (+20)',
		value: 20,
	},
	{
		name: '(Cat) D. Horn (No Skill) & Encourage+2 (+30)',
		value: 30,
	},
	{
		name: '(Cat) Demon Horn+1 & Encourage+1 (+30)',
		value: 30,
	},
	{
		name: '(Cat) Demon Horn+2 & Encourage+1 (+50)',
		value: 50,
	},
	{
		name: '(Cat) Demon Horn+1 & Encourage+2 (+40)',
		value: 40,
	},
	{
		name: '(Cat) Demon Horn+2 & Encourage+2 (+60)',
		value: 60,
	},
	{
		name: 'HBG Power Barrel (+20)',
		value: 20,
	},
	{
		name: 'Lance Self Buff (+50)',
		value: 50,
	},
	{
		name: 'Active (+100)',
		value: 100,
	},
	{
		name: 'Crit C. Up +1 (Z1)', // TODO
		value: 0,
	},
	{
		name: 'Crit C. Up +2 (Z1)',
		value: 0,
	},

	{
		name: 'S. Assault Up (+120) (Z1)',
		value: 120,
	},
	{
		name: 'S. Assault Up (+140) (Z1)',
		value: 140,
	},
	{
		name: 'S. Assault Up (+160) (Z1)',
		value: 160,
	},
	{
		name: 'S. Assault Up (+180) (Z1)',
		value: 180,
	},
	{
		name: 'S. Assault Up (+200) (Z1)',
		value: 200,
	},
	{
		name: 'S. Assault Up (+220) (Z1)',
		value: 220,
	},
	{
		name: '1st Stage (+50)',
		value: 50,
	},
	{
		name: '2nd Stage (+130)',
		value: 130,
	},
	{
		name: '3rd Stage (+200) (Rush Up)',
		value: 200,
	},
	{
		name: '1st Stage (+70 / 1.05x Ele & Status / +10% Affinity)', // TODO
		value: 70,
	},
	{
		name: '2nd Stage (+100 / 1.10x Ele & Status / +25% Affinity)',
		value: 100,
	},
	{
		name: '3rd Stage (+180 / 1.20x Ele & Status / +40% Affinity)',
		value: 180,
	},
	{
		name: '1 Minute (+20)',
		value: 20,
	},
	{
		name: '3 Minutes (+50)',
		value: 50,
	},
	{
		name: '5 Minutes (+80)',
		value: 80,
	},
	{
		name: '10 Minutes (+130)',
		value: 130,
	},
	{
		name: '15 Minutes (+180)',
		value: 180,
	},
	{
		name: '20 Minutes (+200)',
		value: 200,
	},
	{
		name: 'Active (+40)',
		value: 40,
	},
	{
		name: 'Road Attack Lv 1 (+10)',
		value: 10,
	},
	{
		name: 'Road Attack Lv 2 (+20)',
		value: 20,
	},
	{
		name: 'Road Attack Lv 3 (+30)',
		value: 30,
	},
	{
		name: 'Road Attack Lv 4 (+50)',
		value: 50,
	},
	{
		name: 'Road Attack Lv 5 (+70)',
		value: 70,
	},
	{
		name: 'Lv 1 (+20 / +10)',
		value: 20,
	},
	{
		name: 'Lv 2 (+40 / +10)',
		value: 40,
	},
	{
		name: 'Lv 3 (+60 / +10)',
		value: 60,
	},
	{
		name: 'Last Stand Lv 1 (+80)',
		value: 80,
	},
	{
		name: 'Last Stand Lv 2 (+120)',
		value: 120,
	},
	{
		name: 'Dure Attack Lv 1 (+50)',
		value: 50,
	},
	{
		name: 'Dure Attack Lv 2 (+75)',
		value: 75,
	},
	{
		name: 'Dure Attack Lv 3 (+100)',
		value: 100,
	},
	{
		name: 'Dure Attack Lv 4 (+150)',
		value: 15,
	},
	{
		name: 'Dure Attack Lv 5 (+200)',
		value: 200,
	},
	{
		name: 'Active (+100)',
		value: 100,
	},

	{ name: 'None', value: 0 }, // TODO
	{
		name: '1 Block (+40 / +30 / +20)',
		value: 1,
	},
	{
		name: '2 Blocks (+80 / +60 / +40)',
		value: 2,
	},
	{
		name: '3 Blocks (+120 / +90 / +60)',
		value: 3,
	},
	{
		name: '4 Blocks (+160 / +120 / +80)',
		value: 4,
	},
	{
		name: '5 Blocks (+200 / +150 / +100)',
		value: 5,
	},
	{
		name: '6 Blocks (+220 / +165 / +110)',
		value: 6,
	},
	{
		name: '7 Blocks (+240 / +180 / +120)',
		value: 7,
	},
	{
		name: '8 Blocks (+260 / +195 / +130)',
		value: 8,
	},
	{
		name: '9 Blocks (+280 / +210 / +140)',
		value: 9,
	},
	{
		name: '10 Blocks (+300 / +225 / +150)',
		value: 10,
	},
	{
		name: '1 Block (+70 / +50 / +30)',
		value: 11,
	},
	{
		name: '2 Blocks (+140 / +100 / +60)',
		value: 12,
	},
	{
		name: '3 Blocks (+210 / +150 / +90)',
		value: 13,
	},
	{
		name: '4 Blocks (+240 / +175 / +110)',
		value: 14,
	},
	{
		name: '5 Blocks (+270 / +200 / +130)',
		value: 15,
	},
	{
		name: '6 Blocks (+300 / +225 / +150)',
		value: 16,
	},
] as const;

export const multipliersDropdownItems: DropdownItemOption[] = [
	{
		name: 'None (1x)',
		value: 1,
	},
	{
		name: '1st Stage (+70 / 1.05x Ele & Status / +10% Affinity)',
		value: 1.05,
	},
	{
		name: '2nd Stage (+100 / 1.10x Ele & Status / +25% Affinity)',
		value: 1.1,
	},
	{
		name: '3rd Stage (+180 / 1.20x Ele & Status / +40% Affinity)',
		value: 1.2,
	},
	{
		name: 'G Rank Atk Sm (x1.10)',
		value: 1.1,
	},
	{
		name: 'G Rank Atk Sm Bonus (x1.15)',
		value: 1.15,
	},
	{
		name: 'G Rank Atk Lg (x1.15)',
		value: 1.15,
	},
	{
		name: 'G Rank Atk Lg Bonus (x1.2)',
		value: 1.2,
	},
	{
		name: 'Vigorous (x1.15)',
		value: 1.15,
	},
	{
		name: 'Worry (x0.70)',
		value: 0.7,
	},
	{
		name: 'Bowguns (x1.3)',
		value: 1.3,
	},
	{
		name: 'Melee / Bows (x1.5)',
		value: 1.5,
	},
	{
		name: 'Active (+50 Ranged, +100 Melee)',
		value: 0, // TODO
	},
	{
		name: 'Ranged Large Hiden (x1.4)',
		value: 1.4,
	},
	{
		name: 'SnS or Ranged (x1.3)',
		value: 1.3,
	},
	{
		name: 'Other Weapons (x1.2)',
		value: 1.2,
	},
	{
		name: '1 Sharpen (x1.05)',
		value: 1.05,
	},
	{
		name: '2 Sharpens (x1.10)',
		value: 1.1,
	},
	{
		name: '3 Sharpens (x1.15)',
		value: 1.15,
	},
	{
		name: '4 Sharpens (x1.20)',
		value: 1.2,
	},
	{
		name: '1 Bar (x1.10)',
		value: 1.1,
	},
	{
		name: '2 Bar (x1.20)',
		value: 1.2,
	},
	{
		name: '3 Bar (x1.30)',
		value: 1.3,
	},
	{
		name: '4 Bar (x1.40)',
		value: 1.4,
	},
	{
		name: '5 Bar (x1.50)',
		value: 1.5,
	},
	{
		name: '6 Bar (x1.60)',
		value: 1.6,
	},
	{
		name: 'Hammer Perfect Charge (x1.30)',
		value: 1.3,
	},
	{
		name: 'Long Sword Maxed Gauge (x1.2375)',
		value: 1.2375,
	},
	{
		name: 'Swaxe Hiden Boost (x1.05)',
		value: 1.05,
	},
	{
		name: 'MS Hiden Boost (x1.03)',
		value: 1.03,
	},
	{
		name: 'Yes (x1.2)',
		value: 1.2,
	},
] as const;

export const flatAdditionsDropdownItems: DropdownItemOption[] = [
	{
		name: 'None',
		value: 0,
	},
	{
		name: '1 Storm / Suprem / Burst Piece (+15)',
		value: 15,
	},
	{
		name: '2 Storm / Suprem / Burst Pieces (+30)',
		value: 30,
	},
	{
		name: '3 Storm / Suprem / Burst Pieces (+45)',
		value: 45,
	},
	{
		name: '4 Storm / Suprem / Burst Pieces (+60)',
		value: 60,
	},
	{
		name: '5 Storm / Suprem / Burst Pieces (+80)',
		value: 80,
	},
	{
		name: '1 Origin Piece (+20)',
		value: 20,
	},
	{
		name: '2 Origin Pieces (+40)',
		value: 40,
	},
	{
		name: '3 Origin Pieces (+60)',
		value: 60,
	},
	{
		name: '4 Origin Pieces (+80)',
		value: 80,
	},
	{
		name: '5 Origin Pieces (+110)',
		value: 110,
	},
	{
		name: '3+ G Rank Pieces (+30)',
		value: 30,
	},
	{
		name: 'Secret Technique Used (+320)',
		value: 320,
	},
	{
		name: 'On Self (+15)',
		value: 15,
	},
	{
		name: 'Hit by Other (+30)',
		value: 30,
	},
	{
		name: 'Red Soul Up (+100)',
		value: 100,
	},
	{
		name: 'Active (+20)',
		value: 20,
	},
	{
		name: 'Active (+5)',
		value: 50,
	},
	{
		name: 'Bond Level 1(+0)', // TODO
		value: 0,
	},
	{
		name: 'Bond Level 2(+10)',
		value: 10,
	},
	{
		name: 'Bond Level 3(+20)',
		value: 20,
	},
	{
		name: 'Bond Level 4(+30)',
		value: 30,
	},
] as const;

export const elementalSkillsDropdownItems: DropdownItemOption[] = [
	{
		name: 'None (1x)',
		value: 1,
	},
	{
		name: 'Small or Halk Drink (1.1x)',
		value: 1.1,
	},
	{
		name: 'Large (1.2x)',
		value: 1.2,
	},
	{
		name: 'Small and Halk Drink (1.21x)',
		value: 1.21,
	},
	{
		name: 'Large and Halk Drink (1.33x)',
		value: 1.33,
	},
	{
		name: 'Active (1.1x)',
		value: 1.1,
	},
	{
		name: 'SnS Active Feature (1.2x)',
		value: 1.2,
	},
	{
		name: 'Both (1.32x)',
		value: 1.32,
	},
	{
		name: 'Ele Up Song (1.1x)',
		value: 1.1,
	},
] as const;

export const statusSkillsDropdownItems: DropdownItemOption[] = [
	{
		name: 'Standard (0.38x Status)',
		value: 0.38,
	},
	{
		name: 'Drug Knowledge Up (0.42x Status)',
		value: 0.42,
	},
	{
		name: 'On (1.125x)',
		value: 1.125,
	},
	{
		name: 'Normal (1.1x)',
		value: 1.1,
	},
	{
		name: 'Zenith (1.5x)',
		value: 1.5,
	},
	{
		name: 'Both (1.65x)',
		value: 1.65,
	},
	{
		name: 'SnS Active Feature (1.2x)',
		value: 1.2,
	},
	{
		name: 'Swaxe Status Phial Active (1.3x)',
		value: 1.3,
	},
] as const;

export const blademasterDropdownItems: DropdownItemOption[] = [
	{
		name: 'Red (0.6x)',
		value: 0.6,
	},
	{
		name: 'Orange (0.85x)',
		value: 0.85,
	},
	{
		name: 'Yellow (1.1x)',
		value: 1.1,
	},
	{
		name: 'Green (1.325x)',
		value: 1.325,
	},
	{
		name: 'Blue (1.45x)',
		value: 1.45,
	},
	{
		name: 'White (1.6x)',
		value: 1.6,
	},
	{
		name: 'Purple (1.7x)',
		value: 1.7,
	},
	{
		name: 'Cyan (1.8x)',
		value: 1.8,
	},
] as const;

export const gunnerDropdownItems: DropdownItemOption[] = [
	{ name: 'Not Compressed (0x)', value: 0 },
	{ name: 'Lv1 Norm S. (2.4x Bullets Loaded)', value: 2.4 },
	{ name: 'Lv2 Norm S. (6.0x Bullets Loaded)', value: 6.0 },
	{ name: 'Lv3 Norm S. (6.0x Bullets Loaded x n)', value: 6.0 },
	{ name: 'Lv1 Pierce 1 Hit (5x Bullets Loaded)', value: 5.0 },
	{ name: 'Lv2 Pierce 1 Hit (4.5x Bullets Loaded)', value: 4.5 },
	{ name: 'Lv3 Pierce 1 Hit (3.5x Bullets Loaded)', value: 3.5 },
	{ name: 'Lv1 Pierce 3 Hits (5x Bullets Loaded)', value: 15.0 },
	{ name: 'Lv2 Pierce 4 Hits (4.5x Bullets Loaded)', value: 18.0 },
	{ name: 'Lv3 Pierce 6 Hits (3.5x Bullets Loaded)', value: 21.0 },
	{ name: 'Lv1 Pellet S. (3x Bullets Loaded x 3)', value: 9 },
	{ name: 'Lv2 Pellet S. (3x Bullets Loaded x 4)', value: 12 },
	{ name: 'Lv3 Pellet S. (3x Bullets Loaded x 5)', value: 15 },
	{ name: 'Lv1 Impact S. (5.0x Bullets Loaded x 2)', value: 10 },
	{ name: 'Lv2 Impact S. (4.5x Bullets Loaded x 3)', value: 13.5 },
	{ name: 'Lv3 Impact S. (3.5x Bullets Loaded x 5)', value: 17.5 },
	{ name: 'Lv1 Norm S. (3.6x Bullets Loaded)', value: 3.1 },
	{ name: 'Lv2 Norm S. (8.4x Bullets Loaded)', value: 8.4 },
	{ name: 'Lv3 Norm S. (8.4x Bullets Loaded x n)', value: 8.4 },
	{ name: 'Lv1 Pierce 1 Hit (7x Bullets Loaded)', value: 7 },
	{ name: 'Lv2 Pierce 1 Hit (6.3x Bullets Loaded)', value: 6.3 },
	{ name: 'Lv3 Pierce 1 Hit (4.9x Bullets Loaded)', value: 4.9 },
	{ name: 'Lv1 Pierce 3 Hits (7x Bullets Loaded)', value: 21 },
	{ name: 'Lv2 Pierce 4 Hits (6.3x Bullets Loaded)', value: 25.2 },
	{ name: 'Lv3 Pierce 6 Hits (4.9x Bullets Loaded)', value: 29.4 },
	{ name: 'Lv1 Impact S. (7.0x Bullets Loaded x 2)', value: 14 },
	{ name: 'Lv2 Impact S. (6.3x Bullets Loaded x 3)', value: 18.9 },
	{ name: 'Lv3 Impact S. (4.9x Bullets Loaded x 5)', value: 24.5 },
	{
		name: '1.8x LBG & Bow Crit Distance',
		value: 1.8,
	},
	{
		name: '2.3x HBG 1st Half Crit Distance',
		value: 2.3,
	},
	{
		name: '2.0x HBG 2nd Half Crit Distance',
		value: 2.0,
	},
	{
		name: '1.9x LBG & Bow Crit D. & Z Piece',
		value: 1.9,
	},
	{
		name: '2.45x HBG 1st Half Crit D. & Zenith',
		value: 2.45,
	},
	{
		name: '2.15x HBG 2nd Half Crit D. & Zenith',
		value: 2.15,
	},
	{
		name: '2.4x Z 1st Half Crit D. (HBG Active Feature)',
		value: 2.4,
	},
	{
		name: '2.1x Z 2nd Half Crit D. (HBG Active Feature)',
		value: 2.1,
	},
	{
		name: '2.1x 1st Half Crit D. (HBG Active Feature)',
		value: 2.1,
	},
	{
		name: '1.8x 2nd Half Crit D. (HBG Active Feature)',
		value: 1.8,
	},
	{
		name: '2.0x HBG 1st Half Crit D.',
		value: 2.0,
	},
	{
		name: '1.7x 2nd Half Crit D.',
		value: 1.7,
	},
	{
		name: '1.5x Bow or LBG Crit D.',
		value: 1.5,
	},
	{
		name: '2.2x',
		value: 2.2,
	},
	{
		name: '1.6x',
		value: 1.6,
	},
	{
		name: '1.4x',
		value: 1.4,
	},
	{
		name: '1.3x',
		value: 1.3,
	},
	{
		name: '1.2x',
		value: 1.2,
	},
	{
		name: '1.1x',
		value: 1.1,
	},
	{
		name: '1.0x',
		value: 1.0,
	},
	{
		name: '2.3x Step Shot & Z Piece',
		value: 2.3,
	},
	{
		name: '2.0x Step Shot & Z Piece',
		value: 2.0,
	},
	{
		name: '1.9x S. C. Distance & Z Piece (LBG Active Feature)',
		value: 1.9,
	},
	{
		name: '1.6x Standard C. Distance (LBG Active Feature)',
		value: 1.6,
	},
	{
		name: '2.4x Step Shot & Z Piece (LBG Active Feature)',
		value: 2.4,
	},
	{
		name: '2.1x Step Shot & Z Piece (LBG Active Feature)',
		value: 2.1,
	},
	{
		name: '2.5x',
		value: 2.5,
	},
	{
		name: '2.55x',
		value: 2.55,
	},
	{
		name: '2.60x',
		value: 2.6,
	},
	{
		name: 'Normal / Rapid Up (1.1x)',
		value: 1.1,
	},
	{
		name: 'Pierce Up (1.1x)',
		value: 1.1,
	},
	{
		name: 'Pellet / Scatter Up (1.3x)',
		value: 1.3,
	},
	{
		name: 'Just Shot (1.3x)',
		value: 1.3,
	},
	{
		name: 'Perfect JS (1.4x)',
		value: 1.4,
	},
	{
		name: 'Evade Shot (0.6x)',
		value: 0.6,
	},
	{
		name: 'Finishing Shot (2.0x)',
		value: 2.0,
	},
	{
		name: 'Rapid Fire (0.5x)',
		value: 0.5,
	},
	{
		name: 'Ultra Rapid Lv 1 Pierce S (0.73x)',
		value: 0.73,
	},
	{
		name: 'Normal / Charge Lv 0 (x1)',
		value: 1,
	},
	{
		name: 'Charge Lv 1 (1.15x)',
		value: 1.15,
	},
	{
		name: 'Charge Lv 2 (1.3x)',
		value: 1.3,
	},
	{
		name: 'Charge Lv 3 (1.5x)',
		value: 1.5,
	},
	{
		name: 'Storm Style Lv 0 (0.95x)',
		value: 0.95,
	},
] as const;

export const elementDropdownItems: DropdownItemOption[] = [
	{
		name: 'Not Compressed (x1)',
		value: 1,
	},
	{
		name: 'Lv1 Norm S. (2.4x Bullets Loaded)', // TODO
		value: 0,
	},
	{
		name: 'Lv2 Norm S. (6.0x Bullets Loaded)',
		value: 0,
	},
	{
		name: 'Lv3 Norm S. (6.0x Bullets Loaded x n)',
		value: 0,
	},
	{
		name: 'Lv1 Pierce 1 Hit (5x Bullets Loaded)',
		value: 0,
	},
	{
		name: 'Lv2 Pierce 1 Hit (4.5x Bullets Loaded)',
		value: 0,
	},
	{
		name: 'Lv3 Pierce 1 Hit (3.5x Bullets Loaded)',
		value: 0,
	},
	{
		name: 'Lv1 Pierce 3 Hits (5x Bullets Loaded)',
		value: 0,
	},
	{
		name: 'Lv2 Pierce 4 Hits (4.5x Bullets Loaded)',
		value: 0,
	},
	{
		name: 'Lv3 Pierce 6 Hits (3.5x Bullets Loaded)',
		value: 0,
	},
	{
		name: 'Lv1 Pellet S. (3x Bullets Loaded x 3)',
		value: 0,
	},
	{
		name: 'Lv2 Pellet S. (3x Bullets Loaded x 4)',
		value: 0,
	},
	{
		name: 'Lv3 Pellet S. (3x Bullets Loaded x 5)',
		value: 0,
	},
	{
		name: 'Lv1 Impact S. (5.0x Bullets Loaded x 2)',
		value: 0,
	},
	{
		name: 'Lv2 Impact S. (4.5x Bullets Loaded x 3)',
		value: 0,
	},
	{
		name: 'Lv3 Impact S. (3.5x Bullets Loaded x 5)',
		value: 0,
	},
	{
		name: 'Lv1 Norm S. (3.6x Bullets Loaded)',
		value: 0,
	},
	{
		name: 'Lv2 Norm S. (8.4x Bullets Loaded)',
		value: 0,
	},
	{
		name: 'Lv3 Norm S. (8.4x Bullets Loaded x n)',
		value: 0,
	},
	{
		name: 'Lv1 Pierce 1 Hit (7x Bullets Loaded)',
		value: 0,
	},
	{
		name: 'Lv2 Pierce 1 Hit (6.3x Bullets Loaded)',
		value: 0,
	},
	{
		name: 'Lv3 Pierce 1 Hit (4.9x Bullets Loaded)',
		value: 0,
	},
	{
		name: 'Lv1 Pierce 3 Hits (7x Bullets Loaded)',
		value: 0,
	},
	{
		name: 'Lv2 Pierce 4 Hits (6.3x Bullets Loaded)',
		value: 0,
	},
	{
		name: 'Lv3 Pierce 6 Hits (4.9x Bullets Loaded)',
		value: 0,
	},
	{
		name: 'Lv1 Impact S. (7.0x Bullets Loaded x 2)',
		value: 0,
	},
	{
		name: 'Lv2 Impact S. (6.3x Bullets Loaded x 3)',
		value: 0,
	},
	{
		name: 'Lv3 Impact S. (4.9x Bullets Loaded x 5)',
		value: 0,
	},
	{
		name: 'Power Bottle (1.6x)',
		value: 1.6,
	},
	{
		name: 'P. Bottle + Bow Hiden (1.8x)',
		value: 1.8,
	},
	{
		name: 'P. + Origin (1.7x)',
		value: 1.7,
	},
	{
		name: 'P. + Origin + Hiden (1.9x)',
		value: 1.9,
	},
	{
		name: 'Status Bottle (1.5x)',
		value: 1.5,
	},
	{
		name: 'S. Bottle + Hiden (1.7x)',
		value: 1.7,
	},
	{
		name: 'S. Bottle + Origin (1.6x)',
		value: 1.6,
	},
	{
		name: 'S. + Origin + Hiden (1.8x)',
		value: 1.8,
	},
	{
		name: 'Non-G Power Bottle (1.5x)',
		value: 0.5,
	},
	{
		name: 'Lv1 (0.4x / 0.7x)', // TODO
		value: 0,
	},
	{
		name: 'Lv2 (1.0x / 0.95x)',
		value: 0,
	},
	{
		name: 'Lv3 (1.5x / 1.2x)',
		value: 0,
	},
	{
		name: 'Lv4 (1.85x / 1.334x)',
		value: 0,
	},
	{
		name: 'Sniper Lv4 (1.0x / 1.0x)',
		value: 0,
	},
	{
		name: 'Sniper Lv5 (1.125x / 1.1x)',
		value: 0,
	},
	{
		name: 'Uncharged Rising Shot (0.4x / 1.0x)',
		value: 0,
	},
	{
		name: 'Charged Rising Shot (1.0x / 1.5x)',
		value: 0,
	},
	{
		name: 'Crouched Lv1 (0.48x / 0.7x)',
		value: 0,
	},
	{
		name: 'Crouched Lv2 (1.3x / 0.8x)',
		value: 0,
	},
	{
		name: 'Crouched Lv3 (2.1x / 1.2x)',
		value: 0,
	},
	{
		name: 'Crouched Lv4 (2.59x / 1.334x)',
		value: 0,
	},
	{
		name: 'Normal (All 1.0x)',
		value: 1.0,
	},
	{
		name: 'Swaxe Sword Mode Elemental Phial (1.3x)',
		value: 1.3,
	},
	{
		name: 'Maxed Transcend (2.0x)',
		value: 2.0,
	},
	{
		name: 'Swaxe Ele Phial & Maxed Transcend (2.6x)',
		value: 2.6,
	},
] as const;

export const monsterDropdownOptions: DropdownItemOption[] = [
	{
		name: 'Paralysed (1.1x)',
		value: 1.1,
	},
	{
		name: 'Sleeping (3.0x)',
		value: 3.0,
	},
] as const;

export const hitzoneValueModifiersDropdownItems: DropdownItemOption[] = [
	{
		name: 'Active (+5 on raw hitzones)',
		value: 5,
	},
	{
		name: 'Exploit Weakness (+5 on 35+ raw hitzones)',
		value: 5,
	},
	{
		name: 'Determination (+5 on raw hitzones)',
		value: 5,
	},
	{
		name: 'ZZ Exploit Weakness (+5 on 30+ raw hitzones)',
		value: 5,
	},
	{
		name: 'Active (+5 Raw Hitzones)',
		value: 5,
	},
	{
		name: 'Raviente (+2 Raw Hitzones)',
		value: 2,
	},
	{
		name: 'Raw Acid (+10 raw hitzones)',
		value: 10,
	},
	{
		name: 'Elemental Exploit (+X to 20+ ele hitzones)', // TODO
		value: 0,
	},
	{
		name: 'Dissolver Up (+X to 15+ ele hitzones)',
		value: 0,
	},
	{
		name: 'Determination (+X to ele hitzones)',
		value: 0,
	},
	{
		name: 'Raw Weakness (+2 on Raw Hitzones)',
		value: 2.0,
	},
	{
		name: 'Elemental Weakness (+4 on all Elemental Hitzones)',
		value: 4.0,
	},
	{
		name: 'Both (+4 on Elemental, +2 on Raw)', // TODO
		value: 0,
	},
	{
		name: 'In Crit Distance (+5 on raw hitzones)',
		value: 5,
	},
] as const;

export const otherDropdownItems: DropdownItemOption[] = [
	{
		name: 'Active (1.0x)',
		value: 1.0,
	},
	{
		name: 'Downtime (0.8x)',
		value: 0.8,
	},
	{
		name: 'Inactive (1x)',
		value: 1.0,
	},
	{
		name: 'Active (1.25x)',
		value: 1.25,
	},
] as const;

export const sigilDropdownItems: DropdownItemOption[] = [
	{
		name: 'None',
		value: 0,
	},
	{
		name: '0 Sigils',
		value: 0,
	},
	{
		name: '1 Sigil',
		value: 1,
	},
	{
		name: '2 Sigils',
		value: 2,
	},
	{
		name: '3 Sigils',
		value: 3,
	},
	{
		name: '4 Sigils',
		value: 4,
	},
] as const;

export const elementMultipliers: FrontierElementMultiplier[] = [
	{
		name: 'None',
		fireMultiplier: 0,
		waterMultiplier: 0,
		thunderMultiplier: 0,
		iceMultiplier: 0,
		dragonMultiplier: 0,
	},
	{
		name: 'Fire',
		fireMultiplier: 1,
		waterMultiplier: 0,
		thunderMultiplier: 0,
		iceMultiplier: 0,
		dragonMultiplier: 0,
	},
	{
		name: 'Water',
		fireMultiplier: 0,
		waterMultiplier: 1,
		thunderMultiplier: 0,
		iceMultiplier: 0,
		dragonMultiplier: 0,
	},
	{
		name: 'Thunder',
		fireMultiplier: 0,
		waterMultiplier: 0,
		thunderMultiplier: 1,
		iceMultiplier: 0,
		dragonMultiplier: 0,
	},
	{
		name: 'Ice',
		fireMultiplier: 0,
		waterMultiplier: 0,
		thunderMultiplier: 0,
		iceMultiplier: 1,
		dragonMultiplier: 0,
	},
	{
		name: 'Dragon',
		fireMultiplier: 0,
		waterMultiplier: 0,
		thunderMultiplier: 0,
		iceMultiplier: 0,
		dragonMultiplier: 1,
	},
	{
		name: 'Light',
		fireMultiplier: 0.7,
		waterMultiplier: 0,
		thunderMultiplier: 0.7,
		iceMultiplier: 0,
		dragonMultiplier: 0,
	},
	{
		name: 'Blaze',
		fireMultiplier: 0.7,
		waterMultiplier: 0,
		thunderMultiplier: 0,
		iceMultiplier: 0,
		dragonMultiplier: 0.7,
	},
	{
		name: 'Tenshou',
		fireMultiplier: 0.3,
		waterMultiplier: 1,
		thunderMultiplier: 0.7,
		iceMultiplier: 0,
		dragonMultiplier: 0,
	},
	{
		name: 'Lightning Rod',
		fireMultiplier: 1,
		waterMultiplier: 0,
		thunderMultiplier: 0.7,
		iceMultiplier: 0,
		dragonMultiplier: 0.7,
	},
	{
		name: 'Okiko',
		fireMultiplier: 0.8,
		waterMultiplier: 0,
		thunderMultiplier: 0,
		iceMultiplier: 0.8,
		dragonMultiplier: 0.4,
	},
	{
		name: 'Black Flame',
		fireMultiplier: 0.5,
		waterMultiplier: 0,
		thunderMultiplier: 0,
		iceMultiplier: 0,
		dragonMultiplier: 1.5,
	},
	{
		name: 'Crimson Demon',
		fireMultiplier: 1.5,
		waterMultiplier: 0,
		thunderMultiplier: 0,
		iceMultiplier: 0,
		dragonMultiplier: 0.5,
	},
	{
		name: 'Dark',
		fireMultiplier: 0,
		waterMultiplier: 0,
		thunderMultiplier: 0,
		iceMultiplier: 0.7,
		dragonMultiplier: 0.7,
	},
	{
		name: 'Music',
		fireMultiplier: 9,
		waterMultiplier: 1,
		thunderMultiplier: 0,
		iceMultiplier: 1,
		dragonMultiplier: 0,
	},
	{
		name: 'Sound',
		fireMultiplier: 0,
		waterMultiplier: 1,
		thunderMultiplier: 0,
		iceMultiplier: 0,
		dragonMultiplier: 1,
	},
	{
		name: '',
		fireMultiplier: 0,
		waterMultiplier: 0,
		thunderMultiplier: 0,
		iceMultiplier: 0,
		dragonMultiplier: 0,
	},
	{
		name: 'Wind',
		fireMultiplier: 0,
		waterMultiplier: 0,
		thunderMultiplier: 0.8,
		iceMultiplier: 0.8,
		dragonMultiplier: 0,
	},
	{
		name: 'Burning Zero',
		fireMultiplier: 1.25,
		waterMultiplier: 0,
		thunderMultiplier: 0,
		iceMultiplier: 1.25,
		dragonMultiplier: 0,
	},
	{
		name: "Emperor's Roar",
		fireMultiplier: 0,
		waterMultiplier: 0,
		thunderMultiplier: 1.5,
		iceMultiplier: 0,
		dragonMultiplier: 0.5,
	},
	{
		name: 'Raw',
		fireMultiplier: 0,
		waterMultiplier: 0,
		thunderMultiplier: 0,
		iceMultiplier: 0,
		dragonMultiplier: 0,
	},
] as const;

/*
// It requires an extra line to pull out the values
type Direction = typeof ODirection[keyof typeof ODirection];
function run(dir: Direction) {}

run(ODirection.Right);


public enum FrontierWeaponType
{
    GreatSword,
    HeavyBowgun,
    Hammer,
    Lance,
    SwordAndShield,
    LightBowgun,
    DualSwords,
    LongSword,
    HuntingHorn,
    Gunlance,
    Bow,
    Tonfa,
    SwitchAxeF,
    MagnetSpike,
}

public enum FrontierSharpness
{
    Red,
    Orange,
    Yellow,
    Green,
    Blue,
    White,
    Purple,
    Cyan,
}
*/
