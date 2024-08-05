<script lang="ts">
	import PageTurn from '$lib/client/components/PageTurn.svelte';
	import SectionHeadingTopLevel from '$lib/client/components/SectionHeadingTopLevel.svelte';
	import HunterNotesPage from '$lib/client/components/HunterNotesPage.svelte';
	import { page } from '$app/stores';
	import type { FrontierSigilRecipeType } from '$lib/client/modules/frontier/sigils';
	import type { FrontierSigil } from 'ezlion';

	const maxValue = 15;
	const minStandardValue = -10;
	const minValue = 1;
	const maxCooldown = 17;
	const minCooldown = 9;
	const maxDuration = 12;
	const minDuration = 1;

	type SigilSlot = {
		type: FrontierSigilRecipeType;
		values: { skill: FrontierSigil; value: number }[];
	};

	let sigils: [slot1: SigilSlot, slot2: SigilSlot, slot3: SigilSlot] = [
		{ type: 'Standard', values: [{ skill: 'Attack Slayer', value: 15 }] },
		{ type: 'Unlimited', values: [{ skill: 'Attack Slayer', value: 15 }] },
		{ type: 'Zenith', values: [{ skill: 'Attack Slayer', value: 15 }] },
	];

	let inputStandardSigilAttack = 15;

	let inputZenithSigilAttack = 15;
	let inputZenithSigilAttackDuration = 12;
	let inputZenithSigilAttackCooldown = 17;

	let inputZenithSigilAOEAttack = 15;
	let inputZenithSigilAOEAttackDuration = 12;
	let inputZenithSigilAOEAttackCooldown = 17;

	let inputStandardSigilElement = 15;

	let inputZenithSigilElement = 15;
	let inputZenithSigilElementDuration = 12;
	let inputZenithSigilElementCooldown = 17;

	let inputZenithSigilAOEElement = 15;
	let inputZenithSigilAOEElementDuration = 12;
	let inputZenithSigilAOEElementCooldown = 17;
</script>

<HunterNotesPage displayTOC={false}>
	<div>
		<SectionHeadingTopLevel title={'Sigils Calculator'} />
		<div></div>
		<div class="page-turn">
			<PageTurn pageUrlPathName={$page.url.pathname} />
		</div>
	</div>
</HunterNotesPage>

<style lang="scss">
	.page-turn {
		margin-top: 4rem;
	}
</style>
