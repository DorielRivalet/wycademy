<script lang="ts">
	import PageTurn from '$lib/client/components/PageTurn.svelte';
	import SectionHeadingTopLevel from '$lib/client/components/SectionHeadingTopLevel.svelte';
	import TableOfContentsPage from '$lib/client/components/TableOfContentsPage.svelte';
	import InlineTooltip from '$lib/client/components/frontier/InlineTooltip.svelte';
	import { getTag } from '$lib/client/modules/frontier/tags';
	import CopyButton from 'carbon-components-svelte/src/CopyButton/CopyButton.svelte';
	import Toolbar from 'carbon-components-svelte/src/DataTable/Toolbar.svelte';
	import DataTable from 'carbon-components-svelte/src/DataTable/DataTable.svelte';
	import Link from 'carbon-components-svelte/src/Link/Link.svelte';
	import { getCSVFromArray } from '$lib/client/modules/csv';
	import { page } from '$app/stores';
	import { ElementIcons } from '$lib/client/modules/frontier/elements';
	import { monsterInfo } from '$lib/client/modules/frontier/monsters';
	import { getWeaponIcon } from '$lib/client/modules/frontier/weapons';
	import { downloadDomAsPng } from '$lib/client/modules/download';
	import Button from 'carbon-components-svelte/src/Button/Button.svelte';
	import Download from 'carbon-icons-svelte/lib/Download.svelte';
	import SectionHeading from '$lib/client/components/SectionHeading.svelte';
	import ToolKit from 'carbon-icons-svelte/lib/ToolKit.svelte';
	import Information from 'carbon-icons-svelte/lib/Information.svelte';

	function getElementArray(input: string) {
		// Step 1: Split the string into individual elements
		const elements = input.split(', ');

		// Step 2: For each element, split it to separate the percentage value from the name
		// and construct an object with 'name' and 'value' properties
		const result = elements.map((element) => {
			const [value, name] = element.split(' ');
			return { name, value };
		});

		return result;
	}

	const elements: {
		id: string;
		composition: string;
		origin: string;
		name: string;
		elementIconArtist: string;
		monsterIconArtist: string;
	}[] = [
		{
			id: 'Light',
			composition: '70% Fire, 70% Thunder',
			origin: 'Zerureusu',
			name: 'Light',
			elementIconArtist: '-', // TODO external link
			monsterIconArtist: '-',
		},
		{
			id: 'Blaze',
			origin: 'None',
			name: 'Blaze',
			composition: '70% Fire, 70% Dragon',
			elementIconArtist: '-',
			monsterIconArtist: '-',
		},
		{
			id: 'Tenshou',
			origin: 'Shantien',
			name: 'Tenshou',
			composition: '30% Fire, 100% Water, 70% Thunder',
			elementIconArtist: '-',
			monsterIconArtist: '-',
		},
		{
			id: 'Lightning Rod',
			origin: 'Rebidiora',
			name: 'Lightning Rod',
			composition: '70% Thunder, 70% Dragon',
			elementIconArtist: '-',
			monsterIconArtist: '-',
		},
		{
			id: 'Okiko',
			origin: 'Disufiroa',
			name: 'Okiko',
			composition: '80% Fire, 80% Ice, 40% Dragon',
			elementIconArtist: '-',
			monsterIconArtist: '-',
		},
		{
			id: 'Black Flame',
			origin: 'Conquest Fatalis',
			name: 'Black Flame',
			composition: '50% Fire, 150% Dragon',
			elementIconArtist: '-',
			monsterIconArtist: '-',
		},
		{
			id: 'Crimson Demon',
			origin: 'Conquest Crimson Fatalis',
			name: 'Crimson Demon',
			composition: '50% Dragon, 150% Fire',
			elementIconArtist: '-',
			monsterIconArtist: '-',
		},
		{
			id: 'Dark',
			origin: 'Meraginasu',
			name: 'Dark',
			composition: '80% Ice, 80% Dragon',
			elementIconArtist: '-',
			monsterIconArtist: '-',
		},
		{
			id: 'Music',
			origin: 'Diva',
			name: 'Music',
			composition: '100% Water, 100% Ice',
			elementIconArtist: '-',
			monsterIconArtist: '-',
		},
		{
			id: 'Sound',
			origin: 'Diva',
			name: 'Sound',
			composition: '100% Water, 100% Dragon',
			elementIconArtist: '-',
			monsterIconArtist: '-',
		},
		{
			id: 'Wind',
			origin: 'Garuba Daora',
			name: 'Wind',
			composition: '80% Thunder, 80% Ice',
			elementIconArtist: '-',
			monsterIconArtist: '-',
		},
		{
			id: 'Burning Zero',
			origin: 'Elzelion',
			name: 'Burning Zero',
			composition: '125% Fire, 125% Ice',
			elementIconArtist: '-',
			monsterIconArtist: '-',
		},
		{
			id: "Emperor's Roar",
			origin: 'Road White Fatalis',
			name: "Emperor's Roar",
			composition: '150% Thunder, 50% Dragon',
			elementIconArtist: '-',
			monsterIconArtist: '-',
		},
	];
</script>

<TableOfContentsPage displayTOC={false}>
	<div>
		<SectionHeadingTopLevel title={'Elements'} />
		<div class="spaced-paragraph">
			Alongside the standard five elements, Frontier introduces combination
			elements, which always inflict the damage of both elements simultaneously.
			The visible element upon striking a monster will correspond to the element
			that the hitzone is weakest to. For instance, if you wield a weapon with
			<InlineTooltip
				iconType={'component'}
				tooltip="Element"
				icon={ElementIcons.find((e) => e.name === 'Light')?.icon}
				text="100 Light"
			/> and hit a hitzone that is vulnerable to <InlineTooltip
				iconType={'component'}
				tooltip="Element"
				icon={ElementIcons.find((e) => e.name === 'Fire')?.icon}
				text="Fire"
			/>, you would deal <InlineTooltip
				iconType={'component'}
				tooltip="Element"
				icon={ElementIcons.find((e) => e.name === 'Thunder')?.icon}
				text="80 Thunder"
			/> and
			<InlineTooltip
				iconType={'component'}
				tooltip="Element"
				icon={ElementIcons.find((e) => e.name === 'Fire')?.icon}
				text="80 Fire"
			/> damage, but only the <InlineTooltip
				iconType={'component'}
				tooltip="Element"
				icon={ElementIcons.find((e) => e.name === 'Fire')?.icon}
				text="Fire"
			/> damage visual effects would be displayed.
		</div>

		<div class="spaced-paragraph">
			Combo elements function as if you have two to three elements, but at a
			percentage of your elemental value. For visual effects, the element that
			deals the most damage will take precedence. The <InlineTooltip
				text="Gunlance's"
				tooltip="Weapon"
				icon={getWeaponIcon('Gunlance')}
			/> heatblade alternates the effect.
		</div>

		<div class="spaced-paragraph">
			With Transcendence bursts, there is a hierarchy on which elements take
			precedence first. The order is <InlineTooltip
				text="Fire"
				tooltip="Element"
				icon={ElementIcons.find((e) => e.name === 'Fire')?.icon}
			/> > <InlineTooltip
				text="Water"
				tooltip="Element"
				icon={ElementIcons.find((e) => e.name === 'Water')?.icon}
			/> > <InlineTooltip
				text="Thunder"
				tooltip="Element"
				icon={ElementIcons.find((e) => e.name === 'Thunder')?.icon}
			/> > <InlineTooltip
				text="Ice"
				tooltip="Element"
				icon={ElementIcons.find((e) => e.name === 'Ice')?.icon}
			/> > <InlineTooltip
				text="Dragon"
				tooltip="Element"
				icon={ElementIcons.find((e) => e.name === 'Dragon')?.icon}
			/>.
		</div>

		<div class="spaced-paragraph">
			Negative elemental hitzones will still apply their raw penalty if the
			'wrong' element is involved. Possessing the <InlineTooltip
				text="Solid Determination"
				tooltip="Armor Skill"
				icon={getTag('Armor Skill')?.icon}
			/> armor skill will force all elements to use the weapon's <InlineTooltip
				text="Dissolver"
				tooltip="Armor Skill"
				icon={getTag('Armor Skill')?.icon}
			/> modifier.
		</div>

		<div class="elements-table">
			<DataTable
				sortable
				id="elements-dom"
				zebra
				useStaticWidth
				size="short"
				headers={[
					{ key: 'name', value: 'Name', minWidth: '1rem' },
					{ key: 'composition', value: 'Composition', minWidth: '8rem' },
					{ key: 'origin', value: 'Origin', minWidth: '1rem' },
					{
						key: 'elementIconArtist',
						value: 'Element Icon Artist',
						minWidth: '1rem',
					},
					{
						key: 'monsterIconArtist',
						value: 'Monster Icon Artist',
						minWidth: '1rem',
					},
				]}
				rows={elements}
				><Toolbar
					><div class="toolbar">
						<CopyButton
							iconDescription={'Copy as CSV'}
							text={getCSVFromArray(elements)}
						/>
						<Button
							kind="tertiary"
							icon={Download}
							on:click={() => downloadDomAsPng('elements-dom', 'elements')}
							>Download</Button
						>
					</div>
				</Toolbar>
				{#snippet title()}
					<span>
						<div class="data-table-title">
							<div>Combo Elements</div>
						</div>
					</span>
				{/snippet}
				{#snippet cell({ cell })}
					{#if cell.key === 'name'}
						<InlineTooltip
							iconType="component"
							icon={ElementIcons.find((e) => e.name === cell.value)?.icon}
							tooltip={'Element'}
							text={cell.value}
						/>
					{:else if cell.key === 'origin'}
						<InlineTooltip
							icon={monsterInfo.find((e) => e.displayName === cell.value)
								?.icon ?? ''}
							iconType="file"
							tooltip={cell.value}
							text={cell.value}
						/>
					{:else if cell.key === 'composition'}
						{#each getElementArray(cell.value) as element}
							<InlineTooltip
								iconType="component"
								icon={ElementIcons.find((e) => e.name === element.name)?.icon ??
									''}
								tooltip={'Element'}
								text={`${element.value} ${element.name}`}
							/>
						{/each}
					{:else}
						<p>{cell.value}</p>
					{/if}
				{/snippet}
			</DataTable>
		</div>

		<section>
			<SectionHeading level={2} title="Damage" />
			<div>
				<div class="spaced-paragraph">
					Elemental damage functions independently of motion values. The key
					factors affecting it are the weapon's elemental value, the number of
					hits per attack, weapon sharpness, and the monster's elemental
					weaknesses. The size of the motion value, whether 16 or 220, does not
					affect elemental damage; it’s calculated based on a single hit. This
					means that a fully charged <InlineTooltip
						tooltip="Weapon"
						text="Great Sword"
						iconType="component"
						icon={getWeaponIcon('Great Sword')}
					/> attack will deal the same elemental damage as a quick swipe from the
					<InlineTooltip
						tooltip="Weapon"
						text="Sword and Shield"
						iconType="component"
						icon={getWeaponIcon('Sword and Shield')}
					/> if their elemental values are identical.
				</div>
				<div class="spaced-paragraph">
					If your goal is to maximize elemental damage, focus on using the
					correct element and consistently hitting the appropriate hitbox for
					that element. You can check our <Link
						icon={ToolKit}
						href="/tools/calculator/damage">Damage Calculator</Link
					> for this.
				</div>
				<div class="paragraph-long-02">
					Although motion values typically don't impact elemental damage, the
					<InlineTooltip
						tooltip="Weapon"
						text="Sword and Shield"
						iconType="component"
						icon={getWeaponIcon('Sword and Shield')}
					/> Storm Style is an exception with a 140% elemental modifier on its three
					thrust attacks. However, this doesn't automatically make it the best choice
					for damage output, as there are more ways to boost raw damage compared
					to elemental damage. Refer to our <Link
						icon={Information}
						href="/hunter-notes/getting-started/style-rank#weapon-styles"
					>
						Style Rank page</Link
					> for more information about weapon styles.
				</div>
			</div>
		</section>

		<div class="page-turn">
			<PageTurn pageUrlPathName={$page.url.pathname} />
		</div>
	</div>
</TableOfContentsPage>

<style lang="scss">
	.page-turn {
		margin-top: 4rem;
	}

	.data-table-title {
		display: flex;
		gap: 2rem;
		align-items: center;
	}

	.elements-table {
		margin-top: 2rem;
	}

	.toolbar {
		padding: 1rem;
		display: flex;
		align-items: center;
		gap: 1rem;
		flex-grow: 1;
		flex-shrink: 1;
	}
</style>
