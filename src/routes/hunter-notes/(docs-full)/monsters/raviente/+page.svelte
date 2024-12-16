<script lang="ts">
	import PageTurn from '$lib/client/components/PageTurn.svelte';
	import SectionHeadingTopLevel from '$lib/client/components/SectionHeadingTopLevel.svelte';
	import TableOfContentsPage from '$lib/client/components/TableOfContentsPage.svelte';
	import { page } from '$app/stores';
	import SectionHeading from '$lib/client/components/SectionHeading.svelte';
	import OrderedList from 'carbon-components-svelte/src/OrderedList/OrderedList.svelte';
	import ListItem from 'carbon-components-svelte/src/ListItem/ListItem.svelte';
	import DataTable from 'carbon-components-svelte/src/DataTable/DataTable.svelte';
	import Toolbar from 'carbon-components-svelte/src/DataTable/Toolbar.svelte';
	import Button from 'carbon-components-svelte/src/Button/Button.svelte';
	import Download from 'carbon-icons-svelte/lib/Download.svelte';
	import { downloadDomAsPng } from '$lib/client/modules/download';
	import { getCSVFromArray } from '$lib/client/modules/csv';
	import CopyButton from 'carbon-components-svelte/src/CopyButton/CopyButton.svelte';
	import UnorderedList from 'carbon-components-svelte/src/UnorderedList/UnorderedList.svelte';
	import { getWeaponIcon } from '$lib/client/modules/frontier/weapons';
	import InlineTooltip from '$lib/client/components/frontier/InlineTooltip.svelte';
	import { getMonsterIcon } from '$lib/client/modules/frontier/monsters';
	import { getCurrencyIcon } from '$lib/client/modules/frontier/currency';
	import { getLocationIcon } from '$lib/client/modules/frontier/locations';
	import { writable, type Writable } from 'svelte/store';
	import { getItemColor } from '$lib/client/modules/frontier/items';
	import type { CarbonTheme } from 'carbon-components-svelte/src/Theme/Theme.svelte';
	import { getContext } from 'svelte';
	import { type Node, type Edge, SvelteFlowProvider } from '@xyflow/svelte';
	import '@xyflow/svelte/dist/style.css';
	import SvelteFlowElk from '$lib/client/components/SvelteFlowElk.svelte';
	import type { FrontierWeaponName } from 'ezlion';
	import type { FrontierRarity } from '$lib/client/modules/frontier/types';

	const carbonThemeStore = getContext(
		Symbol.for('carbonTheme'),
	) as Writable<CarbonTheme>;

	const edgeType = 'bezier';
	const edgeDataStyle: string = 'stroke: var(--ctp-blue);';

	interface Weapon {
		name: string;
		upgradesTo: string[];
		weaponType?: FrontierWeaponName;
		rarity?: FrontierRarity;
	}

	function generateWeaponTreeData(weaponsUpgradePath: Weapon[]) {
		const nodeData: Node[] = [];
		const edgeData: Edge[] = [];
		const weaponMap = new Map<string, number>();

		// First pass: Create nodes and build weapon map
		weaponsUpgradePath.forEach((weapon, index) => {
			const nodeIndex = index + 1;
			weaponMap.set(weapon.name, nodeIndex);

			// Determine node type based on position in upgrade tree
			const isEndNode = weapon.upgradesTo.length === 0;
			const isStartNode = !weaponsUpgradePath.some((w) =>
				w.upgradesTo.includes(weapon.name),
			);

			let nodeType = 'default-horizontal';
			if (isEndNode) nodeType = 'output-horizontal';
			if (isStartNode) nodeType = 'input-horizontal';

			const node: Node = {
				id: `node-${nodeIndex}`,
				type: 'inline-tooltip',
				data: {
					tooltip: writable(weapon.upgradesTo.join(', ')),
					text: writable(weapon.name),
					icon: writable(
						getWeaponIcon(weapon.weaponType || 'Sword and Shield'),
					),
					iconColor: writable(getItemColor('White')),
					iconType: writable('component'),
					nodeType: writable(nodeType),
					tags: writable([]),
					backgroundColor: writable('var(--surface0)'),
				},
				position: { x: 0, y: 0 }, // Positions will be handled externally
			};

			nodeData.push(node);
		});

		// Second pass: Create edges
		weaponsUpgradePath.forEach((weapon) => {
			const sourceIndex = weaponMap.get(weapon.name);

			if (sourceIndex === undefined) return;

			weapon.upgradesTo.forEach((targetName) => {
				const targetIndex = weaponMap.get(targetName);

				if (targetIndex === undefined) {
					console.warn(`Target weapon not found: ${targetName}`);
					return;
				}

				const edge: Edge = {
					id: `edge-${sourceIndex}-${targetIndex}`,
					source: `node-${sourceIndex}`,
					target: `node-${targetIndex}`,
					type: edgeType,
					animated: true,
					style: edgeDataStyle,
				};
				edgeData.push(edge);
			});
		});

		return { nodeData, edgeData };
	}

	type RavienteWeaponTitle = 'Glory' | 'Clear' | 'Shine' | 'Flash'; // Balanced / Affinity / Element / Raw

	type RavienteWeaponType =
		| 'Ophion' // Raviente HR2
		| 'Opion Flash/Shine/Glory' // Violent Raviente HR5 (not Clear)
		| 'Shesha'
		| 'Shesha Flash/Shine/Glory/Clear' // Berserk
		| 'Apophis'
		| 'Apophis Flash/Shine/Glory/Clear'; // Zenith

	const weaponPoints: {
		id: number;
		type: string;
		totalPoints: number;
		secretPowerGemTotal: number;
		divinePowerGemTotal: number;
	}[] = [
		{
			id: 0,
			type: 'HR2 Lv1-100',
			totalPoints: 256540,
			secretPowerGemTotal: 2566,
			divinePowerGemTotal: 0,
		},
		{
			id: 1,
			type: 'HR5 Lv1-100',
			totalPoints: 1496150,
			secretPowerGemTotal: 14962,
			divinePowerGemTotal: 0,
		},
		{
			id: 2,
			type: 'G Rank Lv1-100',
			totalPoints: 2795000,
			secretPowerGemTotal: 0,
			divinePowerGemTotal: 27950,
		},
		{
			id: 3,
			type: 'Zenith Lv1-100',
			totalPoints: 46925000,
			secretPowerGemTotal: 0,
			divinePowerGemTotal: 469250,
		},
	];

	const totalGems = weaponPoints.reduce(
		(n, { secretPowerGemTotal, divinePowerGemTotal }) =>
			n + secretPowerGemTotal + divinePowerGemTotal,
		0,
	);

	const ITEM_BOX_PAGE_SIZE = 100;
	const MAX_GEMS_PER_SLOT = 999;

	const totalItemSlotsNeeded = Math.ceil(totalGems / MAX_GEMS_PER_SLOT);
	const totalPagesNeeded = Math.ceil(totalItemSlotsNeeded / ITEM_BOX_PAGE_SIZE);

	const gems: {
		id: number;
		type: string;
		gPoints: number;
		GgPoints: number;
	}[] = [
		{ id: 0, type: 'Power Gem', gPoints: 5, GgPoints: 0 },
		{ id: 1, type: 'Mid Power Gem', gPoints: 20, GgPoints: 0 },
		{ id: 2, type: 'Secret Power Gem', gPoints: 100, GgPoints: 0 },
		{ id: 3, type: 'Heavy Power Gem', gPoints: 5, GgPoints: 5 },
		{ id: 4, type: 'True Power Gem', gPoints: 20, GgPoints: 20 },
		{ id: 5, type: 'Divine Power Gem', gPoints: 100, GgPoints: 100 },
	];

	/** upgradesTo is the list of available upgrades from this weapon.*/
	const weaponsUpgradePath: Weapon[] = [
		{
			name: 'Ophion Sword',
			upgradesTo: [
				'Ophion Sword "Flash"',
				'Ophion Sword "Shine"',
				'Ophion Sword "Glory"',
			],
		},
		{
			name: 'Ophion Sword "Flash"',
			upgradesTo: [
				'Shesha Sword "Flash"',
				'Shesha Sword "Shine"',
				'Shesha Sword "Glory"',
				'Shesha Sword "Clear"',
			],
		},
		{
			name: 'Ophion Sword "Shine"',
			upgradesTo: [
				'Shesha Sword "Flash"',
				'Shesha Sword "Shine"',
				'Shesha Sword "Glory"',
				'Shesha Sword "Clear"',
			],
		},
		{
			name: 'Ophion Sword "Glory"',
			upgradesTo: [
				'Shesha Sword "Flash"',
				'Shesha Sword "Shine"',
				'Shesha Sword "Glory"',
				'Shesha Sword "Clear"',
			],
		},
		{
			name: 'Shesha Sword "Flash"',
			upgradesTo: [
				'Apophis Sword "Flash"',
				'Apophis Sword "Shine"',
				'Apophis Sword "Glory"',
				'Apophis Sword "Clear"',
			],
		},
		{
			name: 'Shesha Sword "Shine"',
			upgradesTo: [
				'Apophis Sword "Flash"',
				'Apophis Sword "Shine"',
				'Apophis Sword "Glory"',
				'Apophis Sword "Clear"',
			],
		},
		{
			name: 'Shesha Sword "Glory"',
			upgradesTo: [
				'Apophis Sword "Flash"',
				'Apophis Sword "Shine"',
				'Apophis Sword "Glory"',
				'Apophis Sword "Clear"',
			],
		},
		{
			name: 'Shesha Sword "Clear"',
			upgradesTo: [
				'Apophis Sword "Flash"',
				'Apophis Sword "Shine"',
				'Apophis Sword "Glory"',
				'Apophis Sword "Clear"',
			],
		},
		{
			name: 'Apophis Sword "Flash"',
			upgradesTo: [],
		},
		{
			name: 'Apophis Sword "Shine"',
			upgradesTo: [],
		},
		{
			name: 'Apophis Sword "Glory"',
			upgradesTo: [],
		},
		{
			name: 'Apophis Sword "Clear"',
			upgradesTo: [],
		},
	];

	const weaponTreeData = generateWeaponTreeData(weaponsUpgradePath);

	const nodeData: Node[] = weaponTreeData.nodeData;
	const edgeData: Edge[] = weaponTreeData.edgeData;
</script>

<TableOfContentsPage displayTOC={true}>
	<div>
		<SectionHeadingTopLevel title={'Raviente'} />
		<div>
			<section>
				<SectionHeading level={2} title="Raviente Weapons" />
				<div>
					<div class="spaced-paragraph">
						Raviente weapons originate from a shared foundation crafted using
						HR2 <InlineTooltip
							icon={getMonsterIcon('Raviente')}
							text={'Raviente'}
							iconType="file"
							tooltip="Monster"
						/> materials. These bases can be upgraded into one of three different
						HR5 variants, which can then evolve into the G Rank version with 4 available
						options, then further upgraded with a Zenith Skill into a final weapon.
						Prior to the G Rank upgrade with the Zenith Skill, your choices have
						limited impact; however, once you choose a G Rank weapon with a Zenith
						Skill (the 4th tier), you're committed to that specific weapon with no
						option to change later. Therefore,
						<strong>it's crucial to select your final upgrade carefully.</strong
						>
					</div>
					<section>
						<SectionHeading level={3} title="Upgrading Weapons" />
						<div>
							<div class="spaced-paragraph">
								In contrast to standard weapons, Evolution or Raviente weapons
								feature levels and utilize <InlineTooltip
									icon={getCurrencyIcon('g')}
									text={'g'}
									iconType="file"
									tooltip="Currency"
								/> or <InlineTooltip
									icon={getCurrencyIcon('Gg')}
									text={'Gg'}
									iconType="file"
									tooltip="Currency"
								/> points for upgrades. These points are acquired by converting various
								types of gems obtained from the different Raviente types in the game.
								Three types of gems from HR2 and HR5 are exclusively used for upgrading
								pre-G Rank weapons, while three additional gems from G Rank can be
								applied to both G Rank and non-G equipment upgrades.
							</div>
							<div class="spaced-paragraph">
								You can convert gems into points by selecting the appropriate
								option at the <InlineTooltip
									icon={getLocationIcon('Blacksmith')}
									text={'Blacksmith'}
									iconType="file"
									tooltip="Location"
								/>.
							</div>
							<div class="spaced-paragraph">
								Once a weapon reaches Lv100, you can upgrade it to the next
								tier, which requires additional materials. This entire upgrade
								process occurs 4 times to fully develop a G Rank Raviente weapon
								with a Zenith Skill.
							</div>
							<div class="spaced-paragraph">
								Below is the upgrade tree, you can hover over a weapon name to
								see the available weapon upgrades.
							</div>
							<div>
								<SvelteFlowProvider
									><SvelteFlowElk
										fileName="raviente-weapons-tree"
										initialNodes={nodeData}
										initialEdges={edgeData}
										colorMode={$carbonThemeStore === 'g10' ? 'light' : 'dark'}
									/></SvelteFlowProvider
								>
							</div>
							<div class="spaced-paragraph">
								Planning ahead is essential before committing to a G Rank weapon
								path, as switching paths will require starting a new weapon from
								HR2 Lv1.
							</div>
							<div class="spaced-paragraph">
								Fully upgraded Raviente weapons rank among the best in the game,
								often outperforming most other weapons in terms of both Raw and
								Elemental damage. However, obtaining them involves a significant
								grind and commitment.
							</div>

							<div class="spaced-paragraph">Example weapon progression:</div>

							<OrderedList class="spaced-list">
								<ListItem
									><div class="paragraph-long-02">
										<strong>Ophion Sword:</strong> crafted from HR2 <InlineTooltip
											icon={getMonsterIcon('Raviente')}
											text={'Raviente'}
											iconType="file"
											tooltip="Monster"
										/>, then upgraded with <InlineTooltip
											icon={getCurrencyIcon('g')}
											text={'g'}
											iconType="file"
											tooltip="Currency"
										/> points.
									</div></ListItem
								>
								<ListItem
									><div class="paragraph-long-02">
										<strong>Ophion Sword "Flash":</strong> needs Raviente
										materials, then upgraded with <InlineTooltip
											icon={getCurrencyIcon('g')}
											text={'g'}
											iconType="file"
											tooltip="Currency"
										/> points.
									</div></ListItem
								>
								<ListItem
									><div class="paragraph-long-02">
										<strong>Shesha Sword "Glory":</strong> needs <InlineTooltip
											icon={getMonsterIcon('Berserk Raviente')}
											text={'Berserk Raviente'}
											iconType="file"
											tooltip="Monster"
										/>
										materials, then upgraded with <InlineTooltip
											icon={getCurrencyIcon('Gg')}
											text={'Gg'}
											iconType="file"
											tooltip="Currency"
										/> points.
									</div></ListItem
								>
								<ListItem
									><div class="paragraph-long-02">
										<strong>Apophis Sword "Clear":</strong> needs Berserk
										Raviente and Zenith monster materials, then upgraded with <InlineTooltip
											icon={getCurrencyIcon('Gg')}
											text={'Gg'}
											iconType="file"
											tooltip="Currency"
										/> points. Grants a Zenith Skill.
									</div></ListItem
								>
							</OrderedList>

							<div class="table">
								<DataTable
									id="raviente-gems-dom"
									useStaticWidth
									sortable
									title="Raviente Gems Conversion"
									zebra
									size="medium"
									headers={[
										{ key: 'type', value: 'Type' },
										{ key: 'gPoints', value: 'g Points' },
										{ key: 'GgPoints', value: 'Gg Points' },
									]}
									rows={gems}
									><Toolbar
										><div class="toolbar">
											<CopyButton
												iconDescription={'Copy as CSV'}
												text={getCSVFromArray(gems)}
											/>
											<Button
												kind="tertiary"
												icon={Download}
												on:click={() =>
													downloadDomAsPng(
														'raviente-gems-dom',
														'raviente-gems',
													)}>Download</Button
											>
										</div>
									</Toolbar>

									{#snippet cell({ cell })}
										<p>{cell.value}</p>
									{/snippet}
								</DataTable>
							</div>

							<div class="paragraph-long-02">
								<strong
									>Do not use <InlineTooltip
										icon={getCurrencyIcon('Gg')}
										text={'Gg'}
										iconType="file"
										tooltip="Currency"
									/> gems for the first two tiers of a weapon.</strong
								>
							</div>

							<div class="table">
								<DataTable
									id="raviente-gems-dom"
									useStaticWidth
									sortable
									title="Raviente Weapons Requirements"
									zebra
									size="medium"
									headers={[
										{ key: 'type', value: 'Type' },
										{ key: 'totalPoints', value: 'Total Points' },
										{
											key: 'secretPowerGemTotal',
											value: 'Secret Power Gems Total',
										},
										{
											key: 'divinePowerGemTotal',
											value: 'Divine Power Gems Total',
										},
									]}
									rows={weaponPoints}
									><Toolbar
										><div class="toolbar">
											<CopyButton
												iconDescription={'Copy as CSV'}
												text={getCSVFromArray(weaponPoints)}
											/>
											<Button
												kind="tertiary"
												icon={Download}
												on:click={() =>
													downloadDomAsPng(
														'raviente-gems-dom',
														'raviente-gems',
													)}>Download</Button
											>
										</div>
									</Toolbar>

									{#snippet cell({ cell })}
										<p>{cell.value}</p>
									{/snippet}
								</DataTable>
							</div>

							<div class="paragraph-long-02">
								<strong>Total Gems Needed:</strong>
								{totalGems}
							</div>
							<div class="paragraph-long-02">
								<strong>Total Item Slots Needed:</strong>
								{totalItemSlotsNeeded}
							</div>
							<div class="spaced-paragraph">
								<strong>Total Pages Needed:</strong>
								{totalPagesNeeded}
							</div>

							<div class="spaced-paragraph">
								Each weapon has four distinct final upgrades, varying in
								attributes based on weapon type. For example, the <InlineTooltip
									icon={getWeaponIcon('Great Sword')}
									text={'Great Sword'}
									tooltip="Weapon"
								/>
								offers options focused on Raw, Elemental, Balanced, and Affinity.
								Statistically, the Raw version is superior to the Affinity version—even
								with Critical Conversion—but it has the drawback of being Normal
								Length, while the Affinity-focused weapon is Very Long. In many scenarios,
								the Affinity-focused weapon proves to be more advantageous due to
								its length.
							</div>
							<div class="spaced-paragraph">
								Similar considerations apply to all weapon types, so it’s
								essential to contemplate the skills you will be utilizing and
								how you will engage with monsters using those weapons.
							</div>
							<div class="spaced-paragraph">
								In practical terms, most Raviente weapons begin to exceed
								standard G Lv50 weapons in raw power around G Lv70, and by
								Lv100, they achieve the highest Raw values available among any
								weapons.
							</div>
							<div class="spaced-paragraph">
								After the first tier of upgrades, your weapon name gains a
								title:
							</div>
							<UnorderedList class="spaced-list">
								<ListItem
									><div class="paragraph-long-02">
										<strong>Glory:</strong> focuses on a balance of stats.
									</div></ListItem
								>
								<ListItem
									><div class="paragraph-long-02">
										<strong>Clear:</strong> focuses on affinity.
									</div></ListItem
								>
								<ListItem
									><div class="paragraph-long-02">
										<strong>Shine:</strong> focuses on element.
									</div></ListItem
								>
								<ListItem
									><div class="paragraph-long-02">
										<strong>Flash:</strong> focuses on raw.
									</div></ListItem
								>
							</UnorderedList>
							<div class="spaced-paragraph">
								Depending on the weapon type, it may also modify other weapon
								properties. For example, with <InlineTooltip
									icon={getWeaponIcon('Gunlance')}
									text={'Gunlance'}
									tooltip="Weapon"
								/> you can change the shelling type.
							</div>
						</div>

						<div class="spaced-paragraph">
							The upgrading process can be carried as follows:
						</div>
						<OrderedList class="spaced-list">
							<ListItem
								><div class="paragraph-long-02">
									Obtain g or <InlineTooltip
										icon={getCurrencyIcon('Gg')}
										text={'Gg'}
										iconType="file"
										tooltip="Currency"
									/> by converting Power Gems into the corresponding currency.
								</div></ListItem
							>
							<ListItem
								><div class="paragraph-long-02">
									Use that g or <InlineTooltip
										icon={getCurrencyIcon('Gg')}
										text={'Gg'}
										iconType="file"
										tooltip="Currency"
									/> (based on the tier) to level the evolution weapon from Lv1 to
									Lv100.
								</div></ListItem
							>
							<ListItem
								><div class="paragraph-long-02">
									Upon reaching Lv100, you can upgrade the weapon to the next
									tier, which requires multiple upgrades—a total of 400 upgrades
									to reach the maximum.
								</div></ListItem
							>
							<ListItem
								><div class="paragraph-long-02">
									After completing this process 3 times, you can upgrade the
									weapon to the Zenith tier, which is the final tier.
								</div></ListItem
							>
							<ListItem
								><div class="paragraph-long-02">
									Upgrade the weapon to Lv100 again. The final upgrade is
									denoted as a Z100 weapon.
								</div></ListItem
							>
						</OrderedList>
						<div class="spaced-paragraph">
							You can select any upgrade path before reaching the Zenith tier,
							but
							<strong
								>be sure to choose the correct Zenith upgrade path, as this
								decision is permanent and cannot be changed later.</strong
							>
						</div>
					</section>
				</div>
			</section>
		</div>

		<div class="page-turn">
			<PageTurn pageUrlPathName={$page.url.pathname} />
		</div>
	</div>
</TableOfContentsPage>

<style lang="scss">
	.page-turn {
		margin-top: 4rem;
	}

	.toolbar {
		padding: 1rem;
		display: flex;
		align-items: center;
		gap: 1rem;
		flex-grow: 1;
		flex-shrink: 1;
	}

	.table {
		margin-top: 2rem;
		margin-bottom: 2rem;
	}
</style>
