<script lang="ts">
	import type { FrontierMonsterHitzoneType } from '$lib/client/modules/frontier/types';
	import SkeletonPlaceholder from 'carbon-components-svelte/src/SkeletonPlaceholder/SkeletonPlaceholder.svelte';

	const silhouetteImports = {
		SilhouetteAbiorugu: () =>
			import(
				'$lib/client/components/frontier/icon/monster/silhouette/SilhouetteAbiorugu.svelte'
			),
		SilhouetteAkantor: () =>
			import(
				'$lib/client/components/frontier/icon/monster/silhouette/SilhouetteAkantor.svelte'
			),
		SilhouetteAkuraJebia: () =>
			import(
				'$lib/client/components/frontier/icon/monster/silhouette/SilhouetteAkuraJebia.svelte'
			),
		SilhouetteAmatsu: () =>
			import(
				'$lib/client/components/frontier/icon/monster/silhouette/SilhouetteAmatsu.svelte'
			),
		SilhouetteAnorupatisu: () =>
			import(
				'$lib/client/components/frontier/icon/monster/silhouette/SilhouetteAnorupatisu.svelte'
			),
		SilhouetteAruganosu: () =>
			import(
				'$lib/client/components/frontier/icon/monster/silhouette/SilhouetteAruganosu.svelte'
			),
		SilhouetteAshenLaoShanLung: () =>
			import(
				'$lib/client/components/frontier/icon/monster/silhouette/SilhouetteAshenLaoShanLung.svelte'
			),
		SilhouetteAzureRathalos: () =>
			import(
				'$lib/client/components/frontier/icon/monster/silhouette/SilhouetteAzureRathalos.svelte'
			),
		SilhouetteBarioth: () =>
			import(
				'$lib/client/components/frontier/icon/monster/silhouette/SilhouetteBarioth.svelte'
			),
		SilhouetteBaruragaru: () =>
			import(
				'$lib/client/components/frontier/icon/monster/silhouette/SilhouetteBaruragaru.svelte'
			),
		SilhouetteBasarios: () =>
			import(
				'$lib/client/components/frontier/icon/monster/silhouette/SilhouetteBasarios.svelte'
			),
		SilhouetteBerserkRaviente: () =>
			import(
				'$lib/client/components/frontier/icon/monster/silhouette/SilhouetteBerserkRaviente.svelte'
			),
		SilhouetteBerukyurosu: () =>
			import(
				'$lib/client/components/frontier/icon/monster/silhouette/SilhouetteBerukyurosu.svelte'
			),
		SilhouetteBlackDiablos: () =>
			import(
				'$lib/client/components/frontier/icon/monster/silhouette/SilhouetteBlackDiablos.svelte'
			),
		SilhouetteBlackFatalis: () =>
			import(
				'$lib/client/components/frontier/icon/monster/silhouette/SilhouetteBlackFatalis.svelte'
			),
		SilhouetteBlackGravios: () =>
			import(
				'$lib/client/components/frontier/icon/monster/silhouette/SilhouetteBlackGravios.svelte'
			),
		SilhouetteBlangonga: () =>
			import(
				'$lib/client/components/frontier/icon/monster/silhouette/SilhouetteBlangonga.svelte'
			),
		SilhouetteBlinkingNargacuga: () =>
			import(
				'$lib/client/components/frontier/icon/monster/silhouette/SilhouetteBlinkingNargacuga.svelte'
			),
		SilhouetteBlueYianKutKu: () =>
			import(
				'$lib/client/components/frontier/icon/monster/silhouette/SilhouetteBlueYianKutKu.svelte'
			),
		SilhouetteBombardierBogabadorumu: () =>
			import(
				'$lib/client/components/frontier/icon/monster/silhouette/SilhouetteBombardierBogabadorumu.svelte'
			),
		SilhouetteBrachydios: () =>
			import(
				'$lib/client/components/frontier/icon/monster/silhouette/SilhouetteBrachydios.svelte'
			),
		SilhouetteBrightHypnoc: () =>
			import(
				'$lib/client/components/frontier/icon/monster/silhouette/SilhouetteBrightHypnoc.svelte'
			),
		SilhouetteBulldrome: () =>
			import(
				'$lib/client/components/frontier/icon/monster/silhouette/SilhouetteBulldrome.svelte'
			),
		SilhouetteCephadrome: () =>
			import(
				'$lib/client/components/frontier/icon/monster/silhouette/SilhouetteCephadrome.svelte'
			),
		SilhouetteChameleos: () =>
			import(
				'$lib/client/components/frontier/icon/monster/silhouette/SilhouetteChameleos.svelte'
			),
		SilhouetteCongalala: () =>
			import(
				'$lib/client/components/frontier/icon/monster/silhouette/SilhouetteCongalala.svelte'
			),
		SilhouetteDaimyoHermitaur: () =>
			import(
				'$lib/client/components/frontier/icon/monster/silhouette/SilhouetteDaimyoHermitaur.svelte'
			),
		SilhouetteDeviljho: () =>
			import(
				'$lib/client/components/frontier/icon/monster/silhouette/SilhouetteDeviljho.svelte'
			),
		SilhouetteDiorex: () =>
			import(
				'$lib/client/components/frontier/icon/monster/silhouette/SilhouetteDiorex.svelte'
			),
		SilhouetteDisufiroa: () =>
			import(
				'$lib/client/components/frontier/icon/monster/silhouette/SilhouetteDisufiroa.svelte'
			),
		SilhouetteDuremudira: () =>
			import(
				'$lib/client/components/frontier/icon/monster/silhouette/SilhouetteDuremudira.svelte'
			),
		SilhouetteGoldRathian: () =>
			import(
				'$lib/client/components/frontier/icon/monster/silhouette/SilhouetteGoldRathian.svelte'
			),
		SilhouetteKhezu: () =>
			import(
				'$lib/client/components/frontier/icon/monster/silhouette/SilhouetteKhezu.svelte'
			),
		SilhouetteGypceros: () =>
			import(
				'$lib/client/components/frontier/icon/monster/silhouette/SilhouetteGypceros.svelte'
			),
		SilhouetteGreenPlesioth: () =>
			import(
				'$lib/client/components/frontier/icon/monster/silhouette/SilhouetteGreenPlesioth.svelte'
			),
		SilhouetteMonoblos: () =>
			import(
				'$lib/client/components/frontier/icon/monster/silhouette/SilhouetteMonoblos.svelte'
			),
		SilhouetteVelocidrome: () =>
			import(
				'$lib/client/components/frontier/icon/monster/silhouette/SilhouetteVelocidrome.svelte'
			),
		SilhouetteGendrome: () =>
			import(
				'$lib/client/components/frontier/icon/monster/silhouette/SilhouetteGendrome.svelte'
			),
		SilhouetteIodrome: () =>
			import(
				'$lib/client/components/frontier/icon/monster/silhouette/SilhouetteIodrome.svelte'
			),
		SilhouetteKirin: () =>
			import(
				'$lib/client/components/frontier/icon/monster/silhouette/SilhouetteKirin.svelte'
			),
		SilhouetteYianGaruga: () =>
			import(
				'$lib/client/components/frontier/icon/monster/silhouette/SilhouetteYianGaruga.svelte'
			),
		SilhouetteRajang: () =>
			import(
				'$lib/client/components/frontier/icon/monster/silhouette/SilhouetteRajang.svelte'
			),
		SilhouetteKushalaDaora: () =>
			import(
				'$lib/client/components/frontier/icon/monster/silhouette/SilhouetteKushalaDaora.svelte'
			),
		SilhouetteShenGaoren: () =>
			import(
				'$lib/client/components/frontier/icon/monster/silhouette/SilhouetteShenGaoren.svelte'
			),
		SilhouetteYamaKurai: () =>
			import(
				'$lib/client/components/frontier/icon/monster/silhouette/SilhouetteYamaKurai.svelte'
			),
		SilhouetteLunastra: () =>
			import(
				'$lib/client/components/frontier/icon/monster/silhouette/SilhouetteLunastra.svelte'
			),
		SilhouetteTeostra: () =>
			import(
				'$lib/client/components/frontier/icon/monster/silhouette/SilhouetteTeostra.svelte'
			),
		SilhouetteShogunCeanataur: () =>
			import(
				'$lib/client/components/frontier/icon/monster/silhouette/SilhouetteShogunCeanataur.svelte'
			),
		SilhouetteTigrex: () =>
			import(
				'$lib/client/components/frontier/icon/monster/silhouette/SilhouetteTigrex.svelte'
			),
		SilhouetteEspinas: () =>
			import(
				'$lib/client/components/frontier/icon/monster/silhouette/SilhouetteEspinas.svelte'
			),
		SilhouettePariapuria: () =>
			import(
				'$lib/client/components/frontier/icon/monster/silhouette/SilhouettePariapuria.svelte'
			),
		SilhouetteKamuOrugaron: () =>
			import(
				'$lib/client/components/frontier/icon/monster/silhouette/SilhouetteKamuOrugaron.svelte'
			),
		SilhouetteNonoOrugaron: () =>
			import(
				'$lib/client/components/frontier/icon/monster/silhouette/SilhouetteNonoOrugaron.svelte'
			),
		SilhouetteDyuragaua: () =>
			import(
				'$lib/client/components/frontier/icon/monster/silhouette/SilhouetteDyuragaua.svelte'
			),
		SilhouetteGurenzeburu: () =>
			import(
				'$lib/client/components/frontier/icon/monster/silhouette/SilhouetteGurenzeburu.svelte'
			),
		SilhouetteRukodiora: () =>
			import(
				'$lib/client/components/frontier/icon/monster/silhouette/SilhouetteRukodiora.svelte'
			),
		SilhouetteGogomoa: () =>
			import(
				'$lib/client/components/frontier/icon/monster/silhouette/SilhouetteGogomoa.svelte'
			),
		SilhouetteZenithTaikunZamuza: () =>
			import(
				'$lib/client/components/frontier/icon/monster/silhouette/SilhouetteZenithTaikunZamuza.svelte'
			),
		SilhouetteKuarusepusu: () =>
			import(
				'$lib/client/components/frontier/icon/monster/silhouette/SilhouetteKuarusepusu.svelte'
			),
		SilhouetteOdibatorasu: () =>
			import(
				'$lib/client/components/frontier/icon/monster/silhouette/SilhouetteOdibatorasu.svelte'
			),
		SilhouetteRebidiora: () =>
			import(
				'$lib/client/components/frontier/icon/monster/silhouette/SilhouetteRebidiora.svelte'
			),
		SilhouetteHyujikiki: () =>
			import(
				'$lib/client/components/frontier/icon/monster/silhouette/SilhouetteHyujikiki.svelte'
			),
		SilhouetteMidogaron: () =>
			import(
				'$lib/client/components/frontier/icon/monster/silhouette/SilhouetteMidogaron.svelte'
			),
		SilhouetteGiaorugu: () =>
			import(
				'$lib/client/components/frontier/icon/monster/silhouette/SilhouetteGiaorugu.svelte'
			),
		SilhouetteFarunokku: () =>
			import(
				'$lib/client/components/frontier/icon/monster/silhouette/SilhouetteFarunokku.svelte'
			),
		SilhouettePokaradon: () =>
			import(
				'$lib/client/components/frontier/icon/monster/silhouette/SilhouettePokaradon.svelte'
			),
		SilhouetteShantien: () =>
			import(
				'$lib/client/components/frontier/icon/monster/silhouette/SilhouetteShantien.svelte'
			),
		SilhouetteZenithRukodiora: () =>
			import(
				'$lib/client/components/frontier/icon/monster/silhouette/SilhouetteZenithRukodiora.svelte'
			),
		SilhouetteRayGougarf: () =>
			import(
				'$lib/client/components/frontier/icon/monster/silhouette/SilhouetteRayGougarf.svelte'
			),
		SilhouetteLoloGougarf: () =>
			import(
				'$lib/client/components/frontier/icon/monster/silhouette/SilhouetteLoloGougarf.svelte'
			),
		SilhouetteForokururu: () =>
			import(
				'$lib/client/components/frontier/icon/monster/silhouette/SilhouetteForokururu.svelte'
			),
		SilhouetteMeraginasu: () =>
			import(
				'$lib/client/components/frontier/icon/monster/silhouette/SilhouetteMeraginasu.svelte'
			),
		SilhouetteGarubaDaora: () =>
			import(
				'$lib/client/components/frontier/icon/monster/silhouette/SilhouetteGarubaDaora.svelte'
			),
		SilhouetteInagami: () =>
			import(
				'$lib/client/components/frontier/icon/monster/silhouette/SilhouetteInagami.svelte'
			),
		SilhouetteVarusaburosu: () =>
			import(
				'$lib/client/components/frontier/icon/monster/silhouette/SilhouetteVarusaburosu.svelte'
			),
		SilhouettePoborubarumu: () =>
			import(
				'$lib/client/components/frontier/icon/monster/silhouette/SilhouettePoborubarumu.svelte'
			),
		SilhouetteGureadomosu: () =>
			import(
				'$lib/client/components/frontier/icon/monster/silhouette/SilhouetteGureadomosu.svelte'
			),
		SilhouetteHarudomerugu: () =>
			import(
				'$lib/client/components/frontier/icon/monster/silhouette/SilhouetteHarudomerugu.svelte'
			),
		SilhouetteToridcless: () =>
			import(
				'$lib/client/components/frontier/icon/monster/silhouette/SilhouetteToridcless.svelte'
			),
		SilhouetteGasurabazura: () =>
			import(
				'$lib/client/components/frontier/icon/monster/silhouette/SilhouetteGasurabazura.svelte'
			),
		SilhouetteHowlingZinogre: () =>
			import(
				'$lib/client/components/frontier/icon/monster/silhouette/SilhouetteHowlingZinogre2.svelte'
			),
		SilhouetteToaTesukatora: () =>
			import(
				'$lib/client/components/frontier/icon/monster/silhouette/SilhouetteToaTesukatora.svelte'
			),
		SilhouetteUragaan: () =>
			import(
				'$lib/client/components/frontier/icon/monster/silhouette/SilhouetteUragaan2.svelte'
			),
		SilhouetteGuanzorumu: () =>
			import(
				'$lib/client/components/frontier/icon/monster/silhouette/SilhouetteGuanzorumu2.svelte'
			),
		SilhouetteVoljang: () =>
			import(
				'$lib/client/components/frontier/icon/monster/silhouette/SilhouetteVoljang.svelte'
			),
		SilhouetteKeoaruboru: () =>
			import(
				'$lib/client/components/frontier/icon/monster/silhouette/SilhouetteKeoaruboru.svelte'
			),
		SilhouetteZenaserisu: () =>
			import(
				'$lib/client/components/frontier/icon/monster/silhouette/SilhouetteZenaserisu.svelte'
			),
		SilhouetteGoreMagala: () =>
			import(
				'$lib/client/components/frontier/icon/monster/silhouette/SilhouetteGoreMagala.svelte'
			),
		SilhouetteShagaruMagala: () =>
			import(
				'$lib/client/components/frontier/icon/monster/silhouette/SilhouetteShagaruMagala2.svelte'
			),
		SilhouetteElzelion: () =>
			import(
				'$lib/client/components/frontier/icon/monster/silhouette/SilhouetteElzelion.svelte'
			),
		SilhouetteSeregios: () =>
			import(
				'$lib/client/components/frontier/icon/monster/silhouette/SilhouetteSeregios.svelte'
			),
		SilhouetteSparklingZerureusu: () =>
			import(
				'$lib/client/components/frontier/icon/monster/silhouette/SilhouetteSparklingZerureusu.svelte'
			),
		SilhouetteZenithAkuraVashimu: () =>
			import(
				'$lib/client/components/frontier/icon/monster/silhouette/SilhouetteZenithAkuraVashimu.svelte'
			),
		SilhouetteZenithAnorupatisu: () =>
			import(
				'$lib/client/components/frontier/icon/monster/silhouette/SilhouetteZenithAnorupatisu.svelte'
			),
		SilhouetteZenithBaruragaru: () =>
			import(
				'$lib/client/components/frontier/icon/monster/silhouette/SilhouetteZenithBaruragaru.svelte'
			),
		SilhouetteZenithBlangonga: () =>
			import(
				'$lib/client/components/frontier/icon/monster/silhouette/SilhouetteZenithBlangonga.svelte'
			),
		SilhouetteZenithDaimyoHermitaur: () =>
			import(
				'$lib/client/components/frontier/icon/monster/silhouette/SilhouetteZenithDaimyoHermitaur.svelte'
			),
		SilhouetteZenithDoragyurosu: () =>
			import(
				'$lib/client/components/frontier/icon/monster/silhouette/SilhouetteZenithDoragyurosu.svelte'
			),
		SilhouetteZenithEspinas: () =>
			import(
				'$lib/client/components/frontier/icon/monster/silhouette/SilhouetteZenithEspinas.svelte'
			),
		SilhouetteZenithGasurabazura: () =>
			import(
				'$lib/client/components/frontier/icon/monster/silhouette/SilhouetteZenithGasurabazura2.svelte'
			),
		SilhouetteZenithGiaorugu: () =>
			import(
				'$lib/client/components/frontier/icon/monster/silhouette/SilhouetteZenithGiaorugu.svelte'
			),
		SilhouetteZenithGravios: () =>
			import(
				'$lib/client/components/frontier/icon/monster/silhouette/SilhouetteZenithGravios.svelte'
			),
		SilhouetteZenithHarudomerugu: () =>
			import(
				'$lib/client/components/frontier/icon/monster/silhouette/SilhouetteZenithHarudomerugu.svelte'
			),
		SilhouetteZenithHypnoc: () =>
			import(
				'$lib/client/components/frontier/icon/monster/silhouette/SilhouetteZenithHypnoc.svelte'
			),
		SilhouetteZenithHyujikiki: () =>
			import(
				'$lib/client/components/frontier/icon/monster/silhouette/SilhouetteZenithHyujikiki.svelte'
			),
		SilhouetteZenithInagami: () =>
			import(
				'$lib/client/components/frontier/icon/monster/silhouette/SilhouetteZenithInagami.svelte'
			),
		SilhouetteZenithKhezu: () =>
			import(
				'$lib/client/components/frontier/icon/monster/silhouette/SilhouetteZenithKhezu.svelte'
			),
		SilhouetteZenithMidogaron: () =>
			import(
				'$lib/client/components/frontier/icon/monster/silhouette/SilhouetteZenithMidogaron.svelte'
			),
		SilhouetteZenithPlesioth: () =>
			import(
				'$lib/client/components/frontier/icon/monster/silhouette/SilhouetteZenithPlesioth.svelte'
			),
		SilhouetteZenithRathalos: () =>
			import(
				'$lib/client/components/frontier/icon/monster/silhouette/SilhouetteZenithRathalos.svelte'
			),
		SilhouetteZenithTigrex: () =>
			import(
				'$lib/client/components/frontier/icon/monster/silhouette/SilhouetteZenithTigrex.svelte'
			),
		SilhouetteZenithToridcless: () =>
			import(
				'$lib/client/components/frontier/icon/monster/silhouette/SilhouetteZenithToridcless.svelte'
			),
		SilhouetteTaikunZamuza: () =>
			import(
				'$lib/client/components/frontier/icon/monster/silhouette/SilhouetteTaikunZamuza.svelte'
			),
	};

	async function getSilhouette(currentSilhouette: string) {
		const silhouetteKey = currentSilhouette
			.split('/')
			.pop()
			.replace('.svelte', '');
		if (silhouetteImports[silhouetteKey]) {
			return silhouetteImports[silhouetteKey]();
		} else {
			// Fallback or default case
			console.warn(`Silhouette not found for ${currentSilhouette}`);
			return Promise.resolve(undefined); // Or return a default silhouette import
		}
	}

	export let currentSilhouette: string;
	export let selectedHitzoneType: FrontierMonsterHitzoneType;
	export let selectedMonsterState;
	export let selectedRankBand;
	export let hitzones;
</script>

{#await getSilhouette(currentSilhouette)}
	<SkeletonPlaceholder style="width: 100%; height: 40rem" />
{:then { default: Component }}
	{#if Component}
		<Component
			{selectedHitzoneType}
			{selectedMonsterState}
			{selectedRankBand}
			{hitzones}
		/>
	{/if}
{/await}

<style lang="scss">
</style>
