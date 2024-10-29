<script lang="ts">
	import PageTurn from '$lib/client/components/PageTurn.svelte';
	import SectionHeadingTopLevel from '$lib/client/components/SectionHeadingTopLevel.svelte';
	import HunterNotesPage from '$lib/client/components/HunterNotesPage.svelte';
	import { page } from '$app/stores';
	import SectionHeading from '$lib/client/components/SectionHeading.svelte';
	import UnorderedList from 'carbon-components-svelte/src/UnorderedList/UnorderedList.svelte';
	import ListItem from 'carbon-components-svelte/src/ListItem/ListItem.svelte';
	import DataTable from 'carbon-components-svelte/src/DataTable/DataTable.svelte';
	import Toolbar from 'carbon-components-svelte/src/DataTable/Toolbar.svelte';
	import CopyButton from 'carbon-components-svelte/src/CopyButton/CopyButton.svelte';
	import Button from 'carbon-components-svelte/src/Button/Button.svelte';
	import Download from 'carbon-icons-svelte/lib/Download.svelte';
	import { downloadDomAsPng } from '$lib/client/modules/download';
	import { getCSVFromArray } from '$lib/client/modules/csv';
	import InlineTooltip from '$lib/client/components/frontier/InlineTooltip.svelte';
	import Link from 'carbon-components-svelte/src/Link/Link.svelte';
	import { getLocationIcon } from '$lib/client/modules/frontier/locations';
	import { getWeaponIcon } from '$lib/client/modules/frontier/weapons';
	import { getItemIcon } from '$lib/client/modules/frontier/items';
	import { getElementIcon } from '$lib/client/modules/frontier/elements';
	import { getCurrencyIcon } from '$lib/client/modules/frontier/currency';

	const armor = [
		{ id: 0, type: 'G Rank', defense: 230 },
		{ id: 1, type: 'Burst', defense: 250 },
		{ id: 2, type: 'Exotic', defense: 260 },
		{ id: 3, type: 'Origin', defense: 270 },
		{ id: 4, type: 'Zenith', defense: 300 },
	];

	const weapons = [
		{
			id: 0,
			type: 'G Supremacy / G Rank',
			snsDs: 448,
			gsLs: 1536,
			hammerHH: 1664,
			lanceGl: 736,
			safZ1: 1728,
			gunner: 384,
			tonfa: 432,
			ms: 1620,
		},
		{
			id: 1,
			type: 'Burst',
			snsDs: 490,
			gsLs: 1680,
			hammerHH: 1820,
			lanceGl: 805,
			safZ1: 1890,
			gunner: 420,
			tonfa: 486,
			ms: 1620,
		},
		{
			id: 2,
			type: 'G Exotic',
			snsDs: 504,
			gsLs: 1728,
			hammerHH: 1872,
			lanceGl: 828,
			safZ1: 1944,
			gunner: 432,
			tonfa: 495,
			ms: 1620,
		},
		{
			id: 3,
			type: 'Origin',
			snsDs: 518,
			gsLs: 1776,
			hammerHH: 1924,
			lanceGl: 851,
			safZ1: 1998,
			gunner: 444,
			tonfa: 504,
			ms: 1620,
		},
		{
			id: 4,
			type: 'Zenith',
			snsDs: 532,
			gsLs: 1824,
			hammerHH: 1976,
			lanceGl: 874,
			safZ1: 2052,
			gunner: 456,
			tonfa: 540,
			ms: 2052,
		},
	];
</script>

<HunterNotesPage displayTOC={true}>
	<div>
		<SectionHeadingTopLevel title={'Rasta Bar'} />
		<div>
			<p>
				The <InlineTooltip
					icon={getLocationIcon('Rasta Bar')}
					text="Rasta Bar"
					tooltip="Location"
					iconType="file"
				/> can be accessed from the stairs in <InlineTooltip
					icon={getLocationIcon('Mezeporta')}
					text="Mezeporta Square"
					tooltip="Location"
					iconType="file"
				/>, opposite to the <InlineTooltip
					icon={getLocationIcon('Prayer Fountain')}
					text="Prayer Fountain"
					tooltip="Location"
					iconType="file"
				/>.
			</p>
			<section>
				<SectionHeading level={2} title="Legendary Rastas" />
				<div>
					<p class="spaced-paragraph"></p>
				</div>
			</section>
			<section>
				<SectionHeading level={2} title="Partner" />
				<div>
					<p class="spaced-paragraph">
						At <strong>HR2</strong>, you can unlock <strong>Partners</strong> by
						first purchasing the initial house upgrade from the General Store
						(costing 10,000z) and then interacting with the Blue NPC at the
						counter.
						<strong
							>Note that equipment given to a Partner cannot be retrieved
							aftewards.</strong
						>
					</p>
					<p class="spaced-paragraph">
						Partners can achieve DPS levels comparable to paid Premium Rastas,
						but they excel in providing support, making them a valuable asset
						worth investing time in.
					</p>
					<p class="spaced-paragraph">
						While similar to Rastas, Partners differ in that they are not clones
						of other players. Instead, they are personalized companions that you
						can gear up and customize to suit your preferences.
					</p>

					<p class="spaced-paragraph"></p>

					<p class="spaced-paragraph">
						Enabling Partners allows you to have contracted NPCs accompany you
						on quests and create your own Human NPC companion. To get a Partner,
						simply speak with the Legendary Rasta wielding the weapon type you
						want your Partner to use. Note that <InlineTooltip
							icon={getWeaponIcon('Tonfa')}
							text="Tonfa"
							tooltip="Weapon"
							iconType="component"
						/>, <InlineTooltip
							icon={getWeaponIcon('Switch Axe F')}
							text="Switch Axe F"
							tooltip="Weapon"
							iconType="component"
						/> and <InlineTooltip
							icon={getWeaponIcon('Magnet Spike')}
							text="Magnet Spike"
							tooltip="Weapon"
							iconType="component"
						/> need to be unlocked separately at G Rank. If you’re unsure about a
						Legendary Rasta's weapon, interact with them and select the second option
						to view their gear.
					</p>
					<p class="spaced-paragraph">
						For the best performance in terms of AI behavior and DPS, <InlineTooltip
							icon={getWeaponIcon('Dual Swords')}
							text="Dual Swords"
							tooltip="Weapon"
							iconType="component"
						/> or <InlineTooltip
							icon={getWeaponIcon('Sword and Shield')}
							text="Sword and Shield"
							tooltip="Weapon"
							iconType="component"
						/> are recommended. <InlineTooltip
							icon={getWeaponIcon('Great Sword')}
							text="Great Sword"
							tooltip="Weapon"
							iconType="component"
						/> is also a decent choice, but other weapons have less effective AI
						that tends to idle rather than actively engage with monsters.
					</p>
					<p class="spaced-paragraph">
						When you speak with the NPC of your chosen weapon type, select
						"Partner" to begin the Partner creation process. You will first
						choose a gender and then a personality type (Male on the left,
						Female on the right). After confirming your choices, remember that
						gender cannot be changed without using paid restyle points or
						recreating the Partner. Name and personality can be altered later
						with specific rare items, though personality only affects their
						speech style and has minimal gameplay impact.
					</p>
					<p class="spaced-paragraph">
						Once you have completed these steps, head to your <InlineTooltip
							icon={getLocationIcon('My House')}
							text="House"
							tooltip="Location"
							iconType="file"
						/> where you’ll meet the NPC you selected, allowing you to customize
						your Partner much like you did when creating your character.
					</p>
					<p class="spaced-paragraph">
						If you make a mistake during creation, you can delete the Partner by
						speaking with the cat next to the bar. This will completely remove
						the Partner, allowing you to start over and change their name,
						gender, and personality. To modify just the face or voice, you can
						use Premium Restyle Points. <strong
							>The partner's gender cannot be changed later on.</strong
						>
					</p>
					<p class="spaced-paragraph">
						Partners offer many features, but most of them become relevant only
						at G Rank. If you plan on spending extended time at HR5, you can
						ignore most of these details until you reach G Rank. Once there,
						check your <InlineTooltip
							icon={getLocationIcon('My House')}
							text="House"
							tooltip="Location"
							iconType="file"
						/> and navigate to AI Companions > AI Companions > Partners. You can
						also interact with your Partner and Legendary Rasta at the <InlineTooltip
							icon={getLocationIcon('Blacksmith')}
							text="Blacksmith"
							tooltip="Location"
							iconType="file"
						/>.
					</p>
					<p class="spaced-paragraph">
						You can adjust your AI Companion’s priorities in the options under
						the NPC section (use the confirm button to reorder options).
						Additionally, you can enable or disable the messages they send
						during quests in the Chat options.
					</p>
					<section>
						<SectionHeading level={3} title="Partner Menu" />
						<div>
							<UnorderedList class="spaced-list"
								><ListItem
									><p>
										<strong>Status:</strong> displays the direct equivalent of the
										Guild Card for a Partner. This displays active skills, defense
										and attack values as well as the ranks of each weapon that is
										unlocked for your partner.
									</p></ListItem
								>
								<ListItem
									><p>
										<strong>Equipment:</strong> once a Partner has received equipment,
										it cannot be retrieved back to your equipment box.
									</p></ListItem
								><ListItem
									><p>
										<strong>Skills:</strong> allows your Partner to have armor
										skills such as <InlineTooltip
											icon={getItemIcon('Jewel')}
											text="Adrenaline+2"
											tooltip="Armor Skill"
											iconType="component"
										/> and upgrades the maximum skill slots and skill cost available.
									</p></ListItem
								><ListItem
									><p>
										<strong>Items:</strong> makes your Partner use items such as
										<InlineTooltip
											icon={getItemIcon('Sac')}
											text="Wide Area Powders"
											tooltip="Item"
											iconType="component"
										/>, <InlineTooltip
											icon={getItemIcon('Flute')}
											text="Flutes"
											tooltip="Item"
											iconType="component"
										/>, <InlineTooltip
											icon={getItemIcon('Knife')}
											text="Throwing Knives"
											tooltip="Item"
											iconType="component"
										/> and <InlineTooltip
											icon={getItemIcon('Trap')}
											text="Traps"
											tooltip="Item"
											iconType="component"
										/> (in that order, from top to bottom in the menu). Can also
										use tickets to gain PRP, with the amount gained specified in
										the item name.
									</p></ListItem
								></UnorderedList
							>
						</div>
					</section>

					<section>
						<SectionHeading level={3} title="Partner Weapons" />
						<div>
							<p class="spaced-paragraph">
								Partner Weapons function differently from those used by Humans
								or Rastas, relying on a unique system to determine their
								attributes.
							</p>
							<UnorderedList class="spaced-list"
								><ListItem
									><p>
										<strong>Raw Values:</strong> These are fixed based on the
										tier of the weapon equipped. For example, a standard G Rank <InlineTooltip
											icon={getWeaponIcon('Lance')}
											text="Lance"
											tooltip="Weapon"
											iconType="component"
										/>
										will always have 736 Attack, whether it is at Level 1 or Level
										50.
									</p></ListItem
								>
								<ListItem
									><p>
										<strong>Elemental Values:</strong> These scale with the
										Partner’s Weapon Rank. For instance, at Rank 999 with <InlineTooltip
											icon={getWeaponIcon('Tonfa')}
											text="Tonfa"
											tooltip="Weapon"
											iconType="component"
										/>, all elements will have a value of 1500, regardless of
										whether it’s a hybrid element like <InlineTooltip
											icon={getElementIcon('Black Flame')}
											text="Black Flame"
											tooltip="Element"
											iconType="component"
										/> or a standard element like <InlineTooltip
											icon={getElementIcon('Fire')}
											text="Fire"
											tooltip="Element"
											iconType="component"
										/> or <InlineTooltip
											icon={getElementIcon('Dragon')}
											text="Dragon"
											tooltip="Element"
											iconType="component"
										/>. This setup completely ignores the weapon's actual
										in-game elemental stats.
									</p></ListItem
								>
								<ListItem
									><p>
										<strong>Status Values:</strong> This is the only attribute
										directly influenced by the weapon's original stats. The
										value is typically 100% of what’s on the weapon, or 50% in
										the case of <InlineTooltip
											icon={getWeaponIcon('Tonfa')}
											text="Tonfas"
											tooltip="Weapon"
											iconType="component"
										/>. If you plan to use your Partner for status support,
										Burst or Origin weapons can be ideal as they don't need to
										reach Level 50 (the max for standard G Rank weapons) to
										achieve peak status values.
									</p></ListItem
								>
							</UnorderedList>
							<p class="spaced-paragraph">
								Weapons that provide innate skills, such as Burst, G Finesse, or
								Exotics, do not grant these abilities to Partners. Similarly,
								Zenith Weapons do not pass on their Zenith Skills. However,
								Partners do gain the Zenith Part Destroyer effect, which boosts
								break damage to specific parts. <strong
									>If you have a base Zenith weapon that you’re not planning to
									upgrade, it’s a good idea to equip it on your Partner for the
									extra damage and the Part Destroyer effect.</strong
								>
							</p>
							<div class="table">
								<DataTable
									id="partner-weapons-dom"
									useStaticWidth
									title="Partner Weapon Attack"
									sortable
									zebra
									size="medium"
									headers={[
										{ key: 'type', value: 'Weapon Type' },
										{ key: 'snsDs', value: 'SnS / DS' },
										{ key: 'gsLs', value: 'GS / LS' },
										{ key: 'hammerHH', value: 'Hammer / HH' },
										{ key: 'lanceGl', value: 'Lance / GL' },
										{ key: 'safZ1', value: 'SAF' },
										{ key: 'gunner', value: 'Gunner' },
										{ key: 'tonfa', value: 'Tonfa' },
										{ key: 'ms', value: 'MS' },
									]}
									rows={weapons}
									><Toolbar
										><div class="toolbar">
											<CopyButton
												iconDescription={'Copy as CSV'}
												text={getCSVFromArray(weapons)}
											/>
											<Button
												kind="tertiary"
												icon={Download}
												on:click={() =>
													downloadDomAsPng(
														'partner-weapons-dom',
														'partner-weapons',
													)}>Download</Button
											>
										</div>
									</Toolbar>

									<svelte:fragment slot="cell" let:cell>
										<p>{cell.value}</p>
									</svelte:fragment>
								</DataTable>
							</div>
						</div>
					</section>

					<section>
						<SectionHeading level={3} title="Partner Armor" />
						<div>
							<p class="spaced-paragraph">
								Partner Armor is simpler than weapons; it disregards all armor
								stats except for the class. Any full set of standard G Rank
								armor at Level 1 will provide the maximum defense possible for
								that armor class. Crafting Burst or Origin pieces for a Partner
								isn’t necessary, but G Exotic can be worthwhile.
							</p>
							<p class="spaced-paragraph">
								Like weapons, armor that grants innate skills, including Exotic
								skills and Zenith buffs from Z1, will not transfer to Partners.
							</p>
							<div class="table">
								<DataTable
									id="partner-armor-dom"
									useStaticWidth
									title="Partner Armor Defense"
									sortable
									zebra
									size="medium"
									headers={[
										{ key: 'type', value: 'Armor Type' },
										{ key: 'defense', value: 'Defense' },
									]}
									rows={armor}
									><Toolbar
										><div class="toolbar">
											<CopyButton
												iconDescription={'Copy as CSV'}
												text={getCSVFromArray(armor)}
											/>
											<Button
												kind="tertiary"
												icon={Download}
												on:click={() =>
													downloadDomAsPng(
														'partner-armor-dom',
														'partner-armor',
													)}>Download</Button
											>
										</div>
									</Toolbar>

									<svelte:fragment slot="cell" let:cell>
										<p>{cell.value}</p>
									</svelte:fragment>
								</DataTable>
							</div>
						</div>
					</section>

					<section>
						<SectionHeading level={3} title="Partner Skills" />
						<div>
							<!--TODO-->
							<p class="spaced-paragraph">
								Partners can use many of the same skills available to players,
								but unlike players, these skills are selected from a list and
								purchased with <InlineTooltip
									icon={getCurrencyIcon('GCP')}
									text="GCP"
									tooltip="Currency"
									iconType="file"
								/> (Guild Contribution Points). Skills are unlocked in a specific
								order, requiring you to rank up your Partner to PR999 to access some
								of the most powerful abilities, such as <InlineTooltip
									icon={getItemIcon('Jewel')}
									text="Encourage+2"
									tooltip="Armor Skill"
									iconType="component"
								/> and <InlineTooltip
									icon={getItemIcon('Jewel')}
									text="Strong Attack"
									tooltip="Armor Skill"
									iconType="component"
								/>. A complete list of Partner skills, along with their prices,
								point costs, and prerequisites, can be found <Link
									inline
									href="/tools/simulator/partner-skills"
									>on the Partner Skills Simulator.</Link
								>
							</p>
							<p class="spaced-paragraph">
								The <strong>"Learn Skills"</strong> option displays a list of skills
								you can currently purchase:
							</p>
							<UnorderedList class="spaced-list"
								><ListItem
									><p>
										<strong>Black</strong> skills are available for purchase.
									</p></ListItem
								><ListItem
									><p>
										<strong>Blue</strong> skills are those you have already acquired.
									</p></ListItem
								><ListItem
									><p>
										<strong>Gray</strong> skills are locked and cannot be purchased
										yet.
									</p></ListItem
								></UnorderedList
							>
							<p class="spaced-paragraph">
								All Partner skills are unlocked using <InlineTooltip
									icon={getCurrencyIcon('GCP')}
									text="GCP"
									tooltip="Currency"
									iconType="file"
								/>, and one of the best ways to earn <InlineTooltip
									icon={getCurrencyIcon('GCP')}
									text="GCP"
									tooltip="Currency"
									iconType="file"
								/> is by participating in the Caravan Festival, which can yield thousands
								of <InlineTooltip
									icon={getCurrencyIcon('GCP')}
									text="GCP"
									tooltip="Currency"
									iconType="file"
								/> if you complete enough routes.
							</p>
							<p class="spaced-paragraph">
								<strong>Passive skills</strong>, or Automatic Skills, require
								your Partner to have maxed out a weapon’s rank (999) and then
								start Kaidan by selecting the last option with the Legendary
								Rasta, just like when you initially unlocked a weapon or chose a
								Partner.
							</p>
							<p class="spaced-paragraph">
								<strong>Passive skills</strong> are always active once unlocked.
								The basic options include Additional Skill Slots and Extra Cost Budget:
							</p>
							<UnorderedList class="spaced-list">
								<ListItem
									><p>
										<strong>Slot Upgrades:</strong> These add an extra skill slot,
										up to a maximum of +2 slots for a total of 12 skills. These upgrades
										are rarely necessary.
									</p></ListItem
								><ListItem
									><p>
										<strong>Cost Upgrades:</strong> These increase the maximum skill
										cost budget by +5, up to a total of 260. It is highly recommended
										to get all of these upgrades as they provide significant benefits.
									</p></ListItem
								></UnorderedList
							>
							<p class="spaced-paragraph">
								Additionally, once your Partner’s weapon class reaches Rank 999,
								you can unlock the ability to increase that weapon's maximum
								attack ceiling. This does not directly increase raw attack
								values but raises the limit, which is beneficial when using
								skills like <InlineTooltip
									icon={getItemIcon('Jewel')}
									text="Adrenaline"
									tooltip="Armor Skill"
									iconType="component"
								/>. Raising the attack ceiling on your Partner’s main weapon
								class is worthwhile, as it allows you to fully utilize skills
								like <InlineTooltip
									icon={getItemIcon('Jewel')}
									text="Strong Attack+5"
									tooltip="Armor Skill"
									iconType="component"
								/> and other DPS enhancements.
							</p>
							<p class="spaced-paragraph">
								Reaching MASTER level with each weapon class will add true raw
								attack to all weapon classes, while maxing out Kaidan Rank to
								999 will further boost the true raw of the weapon class you have
								mastered.
							</p>
							<p class="spaced-paragraph">
								The <strong>"Equip Skills"</strong> option shows a list of
								available skills and those you have currently equipped. The
								right column displays the cost of each skill, with the total
								cost capacity listed above. It’s straightforward, but keep in
								mind that stacking skills with the same effect won’t combine
								their values. For example, equipping
								<InlineTooltip
									icon={getItemIcon('Jewel')}
									text="Strong Attack"
									tooltip="Armor Skill"
									iconType="component"
								/> alongside regular <InlineTooltip
									icon={getItemIcon('Jewel')}
									text="Attack"
									tooltip="Armor Skill"
									iconType="component"
								/> will not add their effects; instead, the weaker skill will be
								deactivated, still consuming cost without providing additional benefits.
							</p>
						</div>
					</section>

					<section>
						<SectionHeading level={3} title="Partner Items" />
						<div>
							<p class="spaced-paragraph">
								Partners can only use one type of item at a time, so assigning a
								new item will replace the previous one.
							</p>
							<p class="spaced-paragraph">
								The <strong>"Items"</strong> option allows you to set up your
								Partner with various items to help with progression and quests.
								The first menu includes different HRP/GRP Tickets, while the
								second menu lets you equip your Partner with <InlineTooltip
									icon={getItemIcon('Sac')}
									text="Wide Area Powders"
									tooltip="Item"
									iconType="component"
								/>, <InlineTooltip
									icon={getItemIcon('Flute')}
									text="Flutes"
									tooltip="Item"
									iconType="component"
								/>, <InlineTooltip
									icon={getItemIcon('Knife')}
									text="Throwing Knives"
									tooltip="Item"
									iconType="component"
								/>, or <InlineTooltip
									icon={getItemIcon('Trap')}
									text="Traps"
									tooltip="Item"
									iconType="component"
								/>. It's best to coordinate these with the items used by the
								Rasta you’ve contracted. For example, if your Rasta uses <InlineTooltip
									icon={getItemIcon('Flute')}
									text="Flutes"
									tooltip="Item"
									iconType="component"
								/>, set your Partner to use <InlineTooltip
									icon={getItemIcon('Sac')}
									text="Powders"
									tooltip="Item"
									iconType="component"
								/> for maximum synergy.
							</p>
							<p class="spaced-paragraph">
								Partners become highly effective when properly leveled up and
								equipped with the right skills. They can provide team-wide buffs
								and deal damage comparable to another human player, making them
								a worthwhile investment.
							</p>
						</div>
					</section>
				</div>
			</section>
		</div>
		<div class="page-turn">
			<PageTurn pageUrlPathName={$page.url.pathname} />
		</div>
	</div>
</HunterNotesPage>

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
