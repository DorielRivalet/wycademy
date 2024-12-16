<script lang="ts">
	import PageTurn from '$lib/client/components/PageTurn.svelte';
	import SectionHeadingTopLevel from '$lib/client/components/SectionHeadingTopLevel.svelte';
	import TableOfContentsPage from '$lib/client/components/TableOfContentsPage.svelte';
	import { page } from '$app/stores';
	import type { FrontierGunlanceShell } from '$lib/client/modules/frontier/types';
	import type { FrontierArmorSkillName } from 'ezlion';

	/**natural?*/
	let weaponTrueRaw = 800;

	const gunnerySkills: {
		name: FrontierArmorSkillName;
		shellingRawMultiplier: number;
		wyvernFireRawMultiplier: number;
		requiredPoints: number;
	}[] = [
		{
			name: 'Gunnery',
			shellingRawMultiplier: 1.1,
			wyvernFireRawMultiplier: 1.2,
			requiredPoints: 10,
		},
		{
			name: 'Artillery Expert',
			shellingRawMultiplier: 1.2,
			wyvernFireRawMultiplier: 1.3,
			requiredPoints: 20,
		},
		{
			name: 'Artillery God',
			shellingRawMultiplier: 1.3,
			wyvernFireRawMultiplier: 1.4,
			requiredPoints: 35,
		},
	];

	// TODO
	// tornado cannon formula? = shellBarrageCoefficient * (weapon total true raw + fixedBarrageDamage) * number of shells (which is 5)

	// unsure if its (coefficient * weapon total true raw) + fixedDamage or coefficient * (weapon total true raw + fixedDamage)

	// shell volley formula: shellVolleyMultiplierAttackCorrection * (coefficient * (weapon total true raw) + fixedDamage) * shells (remaning?)
	// shelling formula: ((coefficient * weapon total true raw) + fixedDamage) * number of shells (n which is 1)
	// weapon total attack = (weapon true raw + sigils + sr/gsr + g armor bonus + gou armor?)

	/**When the icon is lit during quick reload, this replaces shelling coefficients. Does not apply for Wyvernfire.*/
	const quickReloadCoefficient = 1.5;

	const shellingInfo: {
		type: FrontierGunlanceShell;
		sharpnessConsumption: 3 | 4;
		coefficient: number;
		shellAttackCoefficient: number;
		shellVolleyMultiplierAttackCorrection: number; // TODO unsure
		shellVolleySharpnessConsumptionRemainingAmmoMultiplier: 2 | 3; // TODO unsure
		wyvernFireCoefficient: number;
		fixedDamage: [
			lv1: number,
			lv2: number,
			lv3: number,
			lv4: number,
			lv5: number,
			lv6: number,
			lv7: number,
			lv8: number,
			lv9: number,
		];
	}[] = [
		{
			type: 'Normal',
			coefficient: 0.11,
			sharpnessConsumption: 3,
			shellVolleyMultiplierAttackCorrection: 0.9,
			fixedDamage: [16, 23, 30, 35, 40, 65, 75, 85, 99],
			shellVolleySharpnessConsumptionRemainingAmmoMultiplier: 2,
			shellAttackCoefficient: 0.165,
			wyvernFireCoefficient: 0, // TODO
		},
		{
			type: 'Long',
			sharpnessConsumption: 4,
			coefficient: 0.1,
			shellVolleyMultiplierAttackCorrection: 0.7,
			fixedDamage: [24, 33, 42, 48, 53, 84, 95, 106, 122],
			shellVolleySharpnessConsumptionRemainingAmmoMultiplier: 3,
			shellAttackCoefficient: 0.15,
			wyvernFireCoefficient: 0, // TODO
		},
		{
			type: 'Spread', //TODO or long?
			sharpnessConsumption: 4,
			coefficient: 0.09,
			shellVolleyMultiplierAttackCorrection: 0.8,
			fixedDamage: [31, 44, 57, 63, 68, 107, 119, 133, 153],
			shellVolleySharpnessConsumptionRemainingAmmoMultiplier: 3,
			shellAttackCoefficient: 0.135,
			wyvernFireCoefficient: 0, // TODO
		},
	];
</script>

<TableOfContentsPage displayTOC={true}>
	<div>
		<SectionHeadingTopLevel title={'Gunlance Shells and Wyvernfire'} />
		<div></div>
		<div class="page-turn">
			<PageTurn pageUrlPathName={$page.url.pathname} />
		</div>
	</div>
</TableOfContentsPage>

<style lang="scss">
	.page-turn {
		margin-top: 4rem;
	}
</style>
