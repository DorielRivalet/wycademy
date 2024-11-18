<script lang="ts">
	import SkeletonPlaceholder from 'carbon-components-svelte/src/SkeletonPlaceholder/SkeletonPlaceholder.svelte';

	// TODO use the displayNames as is
	const monsterImports = {
		Random: () =>
			import(
				'$lib/client/components/frontier/icon/monster/MonsterRandom.svelte'
			),
		Rathian: () =>
			import('$lib/client/components/frontier/icon/monster/Rathian.svelte'),
		Fatalis: () =>
			import('$lib/client/components/frontier/icon/monster/Fatalis.svelte'),
		Kelbi: () =>
			import(
				'$lib/client/components/frontier/icon/monster/MonsterRandom.svelte'
			),
		Mosswine: () =>
			import(
				'$lib/client/components/frontier/icon/monster/MonsterRandom.svelte'
			),
		Bullfango: () =>
			import(
				'$lib/client/components/frontier/icon/monster/MonsterRandom.svelte'
			),
		YianKutKu: () =>
			import(
				'$lib/client/components/frontier/icon/monster/MonsterRandom.svelte'
			),
		LaoShanLung: () =>
			import(
				'$lib/client/components/frontier/icon/monster/MonsterRandom.svelte'
			),
		Cephadrome: () =>
			import(
				'$lib/client/components/frontier/icon/monster/MonsterRandom.svelte'
			),
		Felyne: () =>
			import(
				'$lib/client/components/frontier/icon/monster/MonsterRandom.svelte'
			),
		Rathalos: () =>
			import('$lib/client/components/frontier/icon/monster/Rathalos.svelte'),
		Aptonoth: () =>
			import(
				'$lib/client/components/frontier/icon/monster/MonsterRandom.svelte'
			),
		Genprey: () =>
			import(
				'$lib/client/components/frontier/icon/monster/MonsterRandom.svelte'
			),
		Diablos: () =>
			import(
				'$lib/client/components/frontier/icon/monster/MonsterRandom.svelte'
			),
		Khezu: () =>
			import(
				'$lib/client/components/frontier/icon/monster/MonsterRandom.svelte'
			),
		Velociprey: () =>
			import(
				'$lib/client/components/frontier/icon/monster/MonsterRandom.svelte'
			),
		Gravios: () =>
			import(
				'$lib/client/components/frontier/icon/monster/MonsterRandom.svelte'
			),
		Vespoid: () =>
			import(
				'$lib/client/components/frontier/icon/monster/MonsterRandom.svelte'
			),
		Gypceros: () =>
			import(
				'$lib/client/components/frontier/icon/monster/MonsterRandom.svelte'
			),
		Plesioth: () =>
			import(
				'$lib/client/components/frontier/icon/monster/MonsterRandom.svelte'
			),
		Basarios: () =>
			import(
				'$lib/client/components/frontier/icon/monster/MonsterRandom.svelte'
			),
		Melynx: () =>
			import(
				'$lib/client/components/frontier/icon/monster/MonsterRandom.svelte'
			),
		Hornetaur: () =>
			import(
				'$lib/client/components/frontier/icon/monster/MonsterRandom.svelte'
			),
		Apceros: () =>
			import(
				'$lib/client/components/frontier/icon/monster/MonsterRandom.svelte'
			),
		Monoblos: () =>
			import(
				'$lib/client/components/frontier/icon/monster/MonsterRandom.svelte'
			),
		Velocidrome: () =>
			import(
				'$lib/client/components/frontier/icon/monster/MonsterRandom.svelte'
			),
		Gendrome: () =>
			import(
				'$lib/client/components/frontier/icon/monster/MonsterRandom.svelte'
			),
		Ioprey: () =>
			import(
				'$lib/client/components/frontier/icon/monster/MonsterRandom.svelte'
			),
		Iodrome: () =>
			import(
				'$lib/client/components/frontier/icon/monster/MonsterRandom.svelte'
			),
		Kirin: () =>
			import(
				'$lib/client/components/frontier/icon/monster/MonsterRandom.svelte'
			),
		Cephalos: () =>
			import(
				'$lib/client/components/frontier/icon/monster/MonsterRandom.svelte'
			),
		Giaprey: () =>
			import(
				'$lib/client/components/frontier/icon/monster/MonsterRandom.svelte'
			),
		CrimsonFatalis: () =>
			import(
				'$lib/client/components/frontier/icon/monster/CrimsonFatalis.svelte'
			),
		PinkRathian: () =>
			import('$lib/client/components/frontier/icon/monster/PinkRathian.svelte'),
		BlueYianKutKu: () =>
			import(
				'$lib/client/components/frontier/icon/monster/MonsterRandom.svelte'
			),
		PurpleGypceros: () =>
			import(
				'$lib/client/components/frontier/icon/monster/MonsterRandom.svelte'
			),
		YianGaruga: () =>
			import(
				'$lib/client/components/frontier/icon/monster/MonsterRandom.svelte'
			),
		SilverRathalos: () =>
			import(
				'$lib/client/components/frontier/icon/monster/SilverRathalos.svelte'
			),
		GoldRathian: () =>
			import('$lib/client/components/frontier/icon/monster/GoldRathian.svelte'),
		BlackDiablos: () =>
			import(
				'$lib/client/components/frontier/icon/monster/MonsterRandom.svelte'
			),
		WhiteMonoblos: () =>
			import(
				'$lib/client/components/frontier/icon/monster/MonsterRandom.svelte'
			),
		RedKhezu: () =>
			import(
				'$lib/client/components/frontier/icon/monster/MonsterRandom.svelte'
			),
		GreenPlesioth: () =>
			import(
				'$lib/client/components/frontier/icon/monster/MonsterRandom.svelte'
			),
		BlackGravios: () =>
			import(
				'$lib/client/components/frontier/icon/monster/MonsterRandom.svelte'
			),
		DaimyoHermitaur: () =>
			import(
				'$lib/client/components/frontier/icon/monster/MonsterRandom.svelte'
			),
		AzureRathalos: () =>
			import(
				'$lib/client/components/frontier/icon/monster/AzureRathalos.svelte'
			),
		AshenLaoShanLung: () =>
			import(
				'$lib/client/components/frontier/icon/monster/MonsterRandom.svelte'
			),
		Blangonga: () =>
			import(
				'$lib/client/components/frontier/icon/monster/MonsterRandom.svelte'
			),
		Congalala: () =>
			import(
				'$lib/client/components/frontier/icon/monster/MonsterRandom.svelte'
			),
		Rajang: () =>
			import(
				'$lib/client/components/frontier/icon/monster/MonsterRandom.svelte'
			),
		KushalaDaora: () =>
			import(
				'$lib/client/components/frontier/icon/monster/MonsterRandom.svelte'
			),
		ShenGaoren: () =>
			import('$lib/client/components/frontier/icon/monster/ShenGaoren.svelte'),
		GreatThunderbug: () =>
			import(
				'$lib/client/components/frontier/icon/monster/MonsterRandom.svelte'
			),
		Shakalaka: () =>
			import(
				'$lib/client/components/frontier/icon/monster/MonsterRandom.svelte'
			),
		YamaTsukami: () =>
			import('$lib/client/components/frontier/icon/monster/YamaTsukami.svelte'),
		Chameleos: () =>
			import(
				'$lib/client/components/frontier/icon/monster/MonsterRandom.svelte'
			),
		RustedKushalaDaora: () =>
			import(
				'$lib/client/components/frontier/icon/monster/MonsterRandom.svelte'
			),
		Blango: () =>
			import(
				'$lib/client/components/frontier/icon/monster/MonsterRandom.svelte'
			),
		Conga: () =>
			import(
				'$lib/client/components/frontier/icon/monster/MonsterRandom.svelte'
			),
		Remobra: () =>
			import(
				'$lib/client/components/frontier/icon/monster/MonsterRandom.svelte'
			),
		Lunastra: () =>
			import(
				'$lib/client/components/frontier/icon/monster/MonsterRandom.svelte'
			),
		Teostra: () =>
			import(
				'$lib/client/components/frontier/icon/monster/MonsterRandom.svelte'
			),
		Hermitaur: () =>
			import(
				'$lib/client/components/frontier/icon/monster/MonsterRandom.svelte'
			),
		ShogunCeanataur: () =>
			import(
				'$lib/client/components/frontier/icon/monster/MonsterRandom.svelte'
			),
		Bulldrome: () =>
			import(
				'$lib/client/components/frontier/icon/monster/MonsterRandom.svelte'
			),
		Anteka: () =>
			import(
				'$lib/client/components/frontier/icon/monster/MonsterRandom.svelte'
			),
		Popo: () =>
			import(
				'$lib/client/components/frontier/icon/monster/MonsterRandom.svelte'
			),
		WhiteFatalis: () =>
			import(
				'$lib/client/components/frontier/icon/monster/WhiteFatalis.svelte'
			),
		Ceanataur: () =>
			import(
				'$lib/client/components/frontier/icon/monster/MonsterRandom.svelte'
			),
		Hypnocatrice: () =>
			import(
				'$lib/client/components/frontier/icon/monster/MonsterRandom.svelte'
			),
		Lavasioth: () =>
			import('$lib/client/components/frontier/icon/monster/Lavasioth.svelte'),
		Tigrex: () =>
			import(
				'$lib/client/components/frontier/icon/monster/MonsterRandom.svelte'
			),
		Akantor: () =>
			import('$lib/client/components/frontier/icon/monster/Akantor.svelte'),
		BrightHypnoc: () =>
			import(
				'$lib/client/components/frontier/icon/monster/MonsterRandom.svelte'
			),
		RedLavasioth: () =>
			import(
				'$lib/client/components/frontier/icon/monster/RedLavasioth.svelte'
			),
		Espinas: () =>
			import(
				'$lib/client/components/frontier/icon/monster/MonsterRandom.svelte'
			),
		OrangeEspinas: () =>
			import(
				'$lib/client/components/frontier/icon/monster/MonsterRandom.svelte'
			),
		SilverHypnoc: () =>
			import(
				'$lib/client/components/frontier/icon/monster/MonsterRandom.svelte'
			),
		AkuraVashimu: () =>
			import(
				'$lib/client/components/frontier/icon/monster/AkuraVashimu.svelte'
			),
		AkuraJebia: () =>
			import('$lib/client/components/frontier/icon/monster/AkuraJebia.svelte'),
		Berukyurosu: () =>
			import(
				'$lib/client/components/frontier/icon/monster/MonsterRandom.svelte'
			),
		Pariapuria: () =>
			import('$lib/client/components/frontier/icon/monster/Pariapuria.svelte'),
		WhiteEspinas: () =>
			import(
				'$lib/client/components/frontier/icon/monster/MonsterRandom.svelte'
			),
		KamuOrugaron: () =>
			import(
				'$lib/client/components/frontier/icon/monster/MonsterRandom.svelte'
			),
		NonoOrugaron: () =>
			import(
				'$lib/client/components/frontier/icon/monster/MonsterRandom.svelte'
			),
		Raviente: () =>
			import('$lib/client/components/frontier/icon/monster/Raviente.svelte'),
		ViolentRaviente: () =>
			import(
				'$lib/client/components/frontier/icon/monster/ViolentRaviente.svelte'
			),
		Dyuragaua: () =>
			import(
				'$lib/client/components/frontier/icon/monster/MonsterRandom.svelte'
			),
		Doragyurosu: () =>
			import('$lib/client/components/frontier/icon/monster/Doragyurosu.svelte'),
		Gurenzeburu: () =>
			import(
				'$lib/client/components/frontier/icon/monster/MonsterRandom.svelte'
			),
		Burukku: () =>
			import(
				'$lib/client/components/frontier/icon/monster/MonsterRandom.svelte'
			),
		Erupe: () =>
			import(
				'$lib/client/components/frontier/icon/monster/MonsterRandom.svelte'
			),
		Rukodiora: () =>
			import('$lib/client/components/frontier/icon/monster/Rukodiora.svelte'),
		UNKNOWN: () =>
			import(
				'$lib/client/components/frontier/icon/monster/UnknownPhase1.svelte'
			),
		Gogomoa: () =>
			import(
				'$lib/client/components/frontier/icon/monster/MonsterRandom.svelte'
			),
		TaikunZamuza: () =>
			import(
				'$lib/client/components/frontier/icon/monster/MonsterRandom.svelte'
			),
		Abiorugu: () =>
			import('$lib/client/components/frontier/icon/monster/Abiorugu.svelte'),
		Kuarusepusu: () =>
			import(
				'$lib/client/components/frontier/icon/monster/MonsterRandom.svelte'
			),
		Odibatorasu: () =>
			import(
				'$lib/client/components/frontier/icon/monster/MonsterRandom.svelte'
			),
		Disufiroa: () =>
			import('$lib/client/components/frontier/icon/monster/Disufiroa.svelte'),
		Rebidiora: () =>
			import(
				'$lib/client/components/frontier/icon/monster/MonsterRandom.svelte'
			),
		Anorupatisu: () =>
			import('$lib/client/components/frontier/icon/monster/Anorupatisu.svelte'),
		Hyujikiki: () =>
			import(
				'$lib/client/components/frontier/icon/monster/MonsterRandom.svelte'
			),
		Midogaron: () =>
			import(
				'$lib/client/components/frontier/icon/monster/MonsterRandom.svelte'
			),
		Giaorugu: () =>
			import(
				'$lib/client/components/frontier/icon/monster/MonsterRandom.svelte'
			),
		MiRu: () =>
			import('$lib/client/components/frontier/icon/monster/MiRu.svelte'),
		Farunokku: () =>
			import(
				'$lib/client/components/frontier/icon/monster/MonsterRandom.svelte'
			),
		Pokaradon: () =>
			import(
				'$lib/client/components/frontier/icon/monster/MonsterRandom.svelte'
			),
		Shantien: () =>
			import('$lib/client/components/frontier/icon/monster/Shantien.svelte'),
		Pokara: () =>
			import(
				'$lib/client/components/frontier/icon/monster/MonsterRandom.svelte'
			),
		Goruganosu: () =>
			import('$lib/client/components/frontier/icon/monster/Goruganosu.svelte'),
		Aruganosu: () =>
			import('$lib/client/components/frontier/icon/monster/Aruganosu.svelte'),
		Baruragaru: () =>
			import(
				'$lib/client/components/frontier/icon/monster/MonsterRandom.svelte'
			),
		Zerureusu: () =>
			import('$lib/client/components/frontier/icon/monster/Zerureusu.svelte'),
		LoloGougarf: () =>
			import(
				'$lib/client/components/frontier/icon/monster/MonsterRandom.svelte'
			),
		RayGougarf: () =>
			import(
				'$lib/client/components/frontier/icon/monster/MonsterRandom.svelte'
			),
		Uruki: () =>
			import(
				'$lib/client/components/frontier/icon/monster/MonsterRandom.svelte'
			),
		Forokururu: () =>
			import(
				'$lib/client/components/frontier/icon/monster/MonsterRandom.svelte'
			),
		Meraginasu: () =>
			import(
				'$lib/client/components/frontier/icon/monster/MonsterRandom.svelte'
			),
		Diorex: () =>
			import(
				'$lib/client/components/frontier/icon/monster/MonsterRandom.svelte'
			),
		GarubaDaora: () =>
			import(
				'$lib/client/components/frontier/icon/monster/MonsterRandom.svelte'
			),
		Inagami: () =>
			import(
				'$lib/client/components/frontier/icon/monster/MonsterRandom.svelte'
			),
		Varusaburosu: () =>
			import(
				'$lib/client/components/frontier/icon/monster/MonsterRandom.svelte'
			),
		Poborubarumu: () =>
			import(
				'$lib/client/components/frontier/icon/monster/MonsterRandom.svelte'
			),
		Duremudira: () =>
			import('$lib/client/components/frontier/icon/monster/Duremudira.svelte'),
		Gureadomosu: () =>
			import(
				'$lib/client/components/frontier/icon/monster/MonsterRandom.svelte'
			),
		Harudomerugu: () =>
			import(
				'$lib/client/components/frontier/icon/monster/MonsterRandom.svelte'
			),
		Toridcless: () =>
			import(
				'$lib/client/components/frontier/icon/monster/MonsterRandom.svelte'
			),
		Gasurabazura: () =>
			import(
				'$lib/client/components/frontier/icon/monster/MonsterRandom.svelte'
			),
		Kusubami: () =>
			import(
				'$lib/client/components/frontier/icon/monster/MonsterRandom.svelte'
			),
		YamaKurai: () =>
			import('$lib/client/components/frontier/icon/monster/YamaKurai.svelte'),
		Zinogre: () =>
			import('$lib/client/components/frontier/icon/monster/Zinogre.svelte'),
		Deviljho: () =>
			import('$lib/client/components/frontier/icon/monster/Deviljho.svelte'),
		Brachydios: () =>
			import(
				'$lib/client/components/frontier/icon/monster/MonsterRandom.svelte'
			),
		BerserkRaviente: () =>
			import(
				'$lib/client/components/frontier/icon/monster/BerserkRaviente.svelte'
			),
		ToaTesukatora: () =>
			import(
				'$lib/client/components/frontier/icon/monster/MonsterRandom.svelte'
			),
		Barioth: () =>
			import(
				'$lib/client/components/frontier/icon/monster/MonsterRandom.svelte'
			),
		Uragaan: () =>
			import(
				'$lib/client/components/frontier/icon/monster/MonsterRandom.svelte'
			),
		StygianZinogre: () =>
			import(
				'$lib/client/components/frontier/icon/monster/StygianZinogre.svelte'
			),
		Guanzorumu: () =>
			import('$lib/client/components/frontier/icon/monster/Guanzorumu.svelte'),
		StarvingDeviljho: () =>
			import(
				'$lib/client/components/frontier/icon/monster/StarvingDeviljho.svelte'
			),
		Voljang: () =>
			import(
				'$lib/client/components/frontier/icon/monster/MonsterRandom.svelte'
			),
		Nargacuga: () =>
			import('$lib/client/components/frontier/icon/monster/Nargacuga.svelte'),
		Keoaruboru: () =>
			import(
				'$lib/client/components/frontier/icon/monster/MonsterRandom.svelte'
			),
		Zenaserisu: () =>
			import(
				'$lib/client/components/frontier/icon/monster/MonsterRandom.svelte'
			),
		GoreMagala: () =>
			import(
				'$lib/client/components/frontier/icon/monster/MonsterRandom.svelte'
			),
		BlinkingNargacuga: () =>
			import(
				'$lib/client/components/frontier/icon/monster/BlinkingNargacuga.svelte'
			),
		ShagaruMagala: () =>
			import(
				'$lib/client/components/frontier/icon/monster/MonsterRandom.svelte'
			),
		Amatsu: () =>
			import('$lib/client/components/frontier/icon/monster/Amatsu.svelte'),
		Elzelion: () =>
			import('$lib/client/components/frontier/icon/monster/Elzelion.svelte'),
		ArrogantDuremudira: () =>
			import(
				'$lib/client/components/frontier/icon/monster/ArrogantDuremudira.svelte'
			),
		Seregios: () =>
			import(
				'$lib/client/components/frontier/icon/monster/MonsterRandom.svelte'
			),
		Bogabadorumu: () =>
			import(
				'$lib/client/components/frontier/icon/monster/Bogabadorumu.svelte'
			),
		BombardierBogabadorumu: () =>
			import(
				'$lib/client/components/frontier/icon/monster/BombardierBogabadorumu.svelte'
			),
		SparklingZerureusu: () =>
			import(
				'$lib/client/components/frontier/icon/monster/SparklingZerureusu.svelte'
			),
		PSO2Rappy: () =>
			import(
				'$lib/client/components/frontier/icon/monster/MonsterRandom.svelte'
			),
		KingShakalaka: () =>
			import(
				'$lib/client/components/frontier/icon/monster/MonsterRandom.svelte'
			),

		ZenithAkuraVashimu: () =>
			import(
				'$lib/client/components/frontier/icon/monster/MonsterRandom.svelte'
			),
		ZenithAnorupatisu: () =>
			import(
				'$lib/client/components/frontier/icon/monster/MonsterRandom.svelte'
			),
		ZenithBaruragaru: () =>
			import(
				'$lib/client/components/frontier/icon/monster/MonsterRandom.svelte'
			),
		ZenithBlangonga: () =>
			import(
				'$lib/client/components/frontier/icon/monster/MonsterRandom.svelte'
			),
		ZenithDaimyoHermitaur: () =>
			import(
				'$lib/client/components/frontier/icon/monster/MonsterRandom.svelte'
			),
		ZenithDoragyurosu: () =>
			import(
				'$lib/client/components/frontier/icon/monster/MonsterRandom.svelte'
			),
		ZenithEspinas: () =>
			import(
				'$lib/client/components/frontier/icon/monster/MonsterRandom.svelte'
			),
		ZenithGasurabazura: () =>
			import(
				'$lib/client/components/frontier/icon/monster/MonsterRandom.svelte'
			),
		ZenithGiaorugu: () =>
			import(
				'$lib/client/components/frontier/icon/monster/MonsterRandom.svelte'
			),
		ZenithGravios: () =>
			import(
				'$lib/client/components/frontier/icon/monster/MonsterRandom.svelte'
			),
		ZenithHarudomerugu: () =>
			import(
				'$lib/client/components/frontier/icon/monster/MonsterRandom.svelte'
			),
		ZenithHypnoc: () =>
			import(
				'$lib/client/components/frontier/icon/monster/MonsterRandom.svelte'
			),
		ZenithHyujikiki: () =>
			import(
				'$lib/client/components/frontier/icon/monster/MonsterRandom.svelte'
			),
		ZenithInagami: () =>
			import(
				'$lib/client/components/frontier/icon/monster/MonsterRandom.svelte'
			),
		ZenithKhezu: () =>
			import(
				'$lib/client/components/frontier/icon/monster/MonsterRandom.svelte'
			),
		ZenithMidogaron: () =>
			import(
				'$lib/client/components/frontier/icon/monster/MonsterRandom.svelte'
			),
		ZenithPlesioth: () =>
			import(
				'$lib/client/components/frontier/icon/monster/MonsterRandom.svelte'
			),
		ZenithRathalos: () =>
			import(
				'$lib/client/components/frontier/icon/monster/MonsterRandom.svelte'
			),
		ZenithRukodiora: () =>
			import(
				'$lib/client/components/frontier/icon/monster/ZenithRukodiora.svelte'
			),
		ZenithTaikunZamuza: () =>
			import(
				'$lib/client/components/frontier/icon/monster/MonsterRandom.svelte'
			),
		ZenithTigrex: () =>
			import(
				'$lib/client/components/frontier/icon/monster/MonsterRandom.svelte'
			),
		ZenithToridcless: () =>
			import(
				'$lib/client/components/frontier/icon/monster/MonsterRandom.svelte'
			),
		ConquestFatalis: () =>
			import(
				'$lib/client/components/frontier/icon/monster/ConquestFatalis.svelte'
			),
		ConquestShantien: () =>
			import(
				'$lib/client/components/frontier/icon/monster/ConquestShantien.svelte'
			),
		ConquestCrimsonFatalis: () =>
			import(
				'$lib/client/components/frontier/icon/monster/ConquestCrimsonFatalis.svelte'
			),
		ShitenDisufiroa: () =>
			import(
				'$lib/client/components/frontier/icon/monster/ShitenDisufiroa.svelte'
			),
		ShitenUnknown: () =>
			import(
				'$lib/client/components/frontier/icon/monster/ShitenUnknown.svelte'
			),
		BurningFreezingElzelion: () =>
			import(
				'$lib/client/components/frontier/icon/monster/BurningFreezingElzelion.svelte'
			),
		HowlingZinogre: () =>
			import(
				'$lib/client/components/frontier/icon/monster/HowlingZinogre.svelte'
			),
		SupremacyPariapuria: () =>
			import(
				'$lib/client/components/frontier/icon/monster/ThirstyPariapuria.svelte'
			),
		SupremacyDoragyurosu: () =>
			import(
				'$lib/client/components/frontier/icon/monster/SupremacyDoragyurosu.svelte'
			),
		SupremacyTeostra: () =>
			import(
				'$lib/client/components/frontier/icon/monster/SupremacyTeostra.svelte'
			),
		SupremacyOdibatorasu: () =>
			import(
				'$lib/client/components/frontier/icon/monster/MonsterRandom.svelte'
			),
		GoldenDeviljho: () =>
			import(
				'$lib/client/components/frontier/icon/monster/GoldenDeviljho.svelte'
			),
		FuriousRajang: () =>
			import(
				'$lib/client/components/frontier/icon/monster/MonsterRandom.svelte'
			),
		RulingGuanzorumu: () =>
			import(
				'$lib/client/components/frontier/icon/monster/RulingGuanzorumu.svelte'
			),
		ShiftingMiRu: () =>
			import(
				'$lib/client/components/frontier/icon/monster/ShiftingMiRu.svelte'
			),
		TwinheadRajang: () =>
			import(
				'$lib/client/components/frontier/icon/monster/MonsterRandom.svelte'
			),
		RoadWhiteFatalis: () =>
			import(
				'$lib/client/components/frontier/icon/monster/RoadWhiteFatalis.svelte'
			),
	};

	async function getMonsterIconComponent(displayName: string) {
		if (displayName === '' || !displayName) {
			console.warn(`Icon component not found for ${currentMonster}`);
			return monsterImports['Random']();
		}

		const monsterKey = displayName.replaceAll(' ', '').replaceAll('-', '');
		if (monsterImports[monsterKey]) {
			return monsterImports[monsterKey]();
		} else {
			switch (displayName) {
				case 'Shiten UNKNOWN': // TODO?
					return monsterImports['ShitenUnknown'];
			}

			console.warn(`Icon component not found for ${currentMonster}`);
			return monsterImports['Random']();
		}
	}

	interface Props {
		currentMonster: string;
		size?: string;
		background?: boolean;
	}

	let { currentMonster, size = '100%', background = true }: Props = $props();
</script>

{#await getMonsterIconComponent(currentMonster)}
	<!--TODO different size?-->
	<SkeletonPlaceholder style="width: {size}; height: {size}" />
{:then { default: Component }}
	{#if Component}
		<Component {size} {background} />
	{/if}
{/await}

<style lang="scss">
</style>
