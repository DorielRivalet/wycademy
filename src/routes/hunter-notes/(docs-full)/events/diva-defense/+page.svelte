<script lang="ts">
	import PageTurn from '$lib/client/components/PageTurn.svelte';
	import SectionHeadingTopLevel from '$lib/client/components/SectionHeadingTopLevel.svelte';
	import TableOfContentsPage from '$lib/client/components/TableOfContentsPage.svelte';
	import DataTable from 'carbon-components-svelte/src/DataTable/DataTable.svelte';
	import InlineTooltip from '$lib/client/components/frontier/InlineTooltip.svelte';
	import Toolbar from 'carbon-components-svelte/src/DataTable/Toolbar.svelte';
	import CopyButton from 'carbon-components-svelte/src/CopyButton/CopyButton.svelte';
	import SectionHeading from '$lib/client/components/SectionHeading.svelte';
	import { getCSVFromArray } from '$lib/client/modules/csv';
	import { page } from '$app/stores';
	import { LocationIcons } from '$lib/client/modules/frontier/locations';
	import { divaPrayerGems } from '$lib/client/modules/frontier/diva';
	import Link from 'carbon-components-svelte/src/Link/Link.svelte';
	import { ezlionSkillDivaPrayerGem } from 'ezlion';
	import ToolKit from 'carbon-icons-svelte/lib/ToolKit.svelte';
	import {
		getItemColor,
		getItemIcon,
	} from '$lib/client/modules/frontier/items';
	import CenteredFigure from '$lib/client/components/CenteredFigure.svelte';
	import UnorderedList from 'carbon-components-svelte/src/UnorderedList/UnorderedList.svelte';
	import ListItem from 'carbon-components-svelte/src/ListItem/ListItem.svelte';
	import { getWeaponIcon } from '$lib/client/modules/frontier/weapons';
</script>

<TableOfContentsPage displayTOC={false}>
	<div>
		<SectionHeadingTopLevel title={'Diva Defense'} />
		<section>
			<SectionHeading level={2} title="Diva Skills" />
			<div>
				<div class="spaced-paragraph">
					<strong>Diva Skills</strong>, also known as
					<strong>GCP skills</strong>, work similarly to other external skill
					sources, such as Guild Food or Exotic Armors. They do not use any of
					your maximum skill slots. Instead, you purchase the skill you want,
					and it will be available for a certain number of quests based on the
					quantity purchased.
				</div>
				<CenteredFigure
					width={'100%'}
					type="file"
					src={'https://res.cloudinary.com/mhfz/image/upload/f_auto,q_auto/v1/supplemental/diva-skills-menu.webp'}
					alt="Diva Skills Menu"
					figcaption="Diva Skills menu, found in Diva Defense -> View, Claim rewards -> GCP Exchange -> Exchange (Skills)."
				/>
				<div class="spaced-paragraph">
					It’s important to note that you can typically queue up only one skill
					type at a time. For example, if you purchase 10 uses of <InlineTooltip
						text="Lone Wolf"
						tooltip="Diva Skill"
						icon={getItemIcon('Jewel')}
						iconColor={getItemColor('Blue')}
						iconType="component"
					/>
					and then buy a use of <InlineTooltip
						text="Focus+2"
						tooltip="Diva Skill"
						icon={getItemIcon('Jewel')}
						iconColor={getItemColor('Blue')}
						iconType="component"
					/>, you will lose all your remaining <InlineTooltip
						text="Lone Wolf"
						tooltip="Diva Skill"
						icon={getItemIcon('Jewel')}
						iconColor={getItemColor('Blue')}
						iconType="component"
					/> uses.
				</div>
				<div class="spaced-paragraph">
					Like other temporary items (e.g., Carving Talismans, Lucky Charms),
					GCP skills are only consumed if you complete the quest. If you abandon
					the quest, the skill use will not be deducted.
				</div>
				<div class="spaced-paragraph">
					Certain skills, such as <InlineTooltip
						text="Focus+2"
						tooltip="Diva Skill"
						icon={getItemIcon('Jewel')}
						iconColor={getItemColor('Blue')}
						iconType="component"
					/>, are generally always available since Level 0 skills do not require
					you to have an active Prayer or any contributions.
				</div>
				<p>
					If you cannot find the Diva Skills menu, check if you are in a World
					with the Diva Defense event enabled (shown as an icon in the bottom
					right corner).
				</p>
			</div>
		</section>
		<section>
			<SectionHeading level={2} title="Diva Prayer Weapons" />
			<div>
				<div class="spaced-paragraph">
					During the <strong>Song of War Week</strong>, being on a Premium
					Course unlocks the following powerful buffs, making Prayer Weapons an
					excellent choice for grinding Hiden. Unless you have top-tier Raviente
					weapons, Prayer Weapons are the best option for Premium users.
				</div>
				<div class="spaced-paragraph">
					Prayer Weapons are crafted from materials obtained as Daily or
					Milestone rewards, making them relatively easy to acquire. They are
					comparable to lower-end Level 50 G-Rank weapons.
				</div>
				<div class="spaced-paragraph">
					Weapons that are exclusive to G Rank (like <InlineTooltip
						text="Switch Axe F"
						tooltip="Weapon"
						iconType="component"
						icon={getWeaponIcon('Switch Axe F')}
					/> and <InlineTooltip
						text="Tonfa"
						tooltip="Weapon"
						iconType="component"
						icon={getWeaponIcon('Tonfa')}
					/>) are available fully upgraded, while others start at Low Rank
					(standard HR crafting) and need to be upgraded to G Rank.
				</div>
				<div class="spaced-paragraph">
					The standout feature of Prayer Weapons is the significant buffs they
					receive when a prayer is active. These enhancements can make them
					outperform most other weapons when built around their usage.
				</div>
				<div class="spaced-paragraph">
					<strong>The Prayer Buff provides the following benefits:</strong>
				</div>
				<UnorderedList class="spaced-list"
					><ListItem><p>True Raw +45</p></ListItem>
					<ListItem><p>Doubled Elemental Damage</p></ListItem>
					<ListItem
						><p>Increased Weapon Handling and Movement Speed (+2)</p></ListItem
					>
					<ListItem><p>Enables the weapon type’s Active Feature</p></ListItem>
					<ListItem><p>Sharpness is upgraded by one tier</p></ListItem>
					<ListItem><p>Activates a unique Twin Hiden skill</p></ListItem>
					<ListItem><p>Boosts Interception Points to 1.2x</p></ListItem>
				</UnorderedList>
				<div class="spaced-paragraph">
					The Twin Hiden ability remains active while the prayer effect is
					ongoing, allowing you to set aside Hiden gems for specialized builds
					or simply enjoy the Hiden bonus without extensive grinding.
				</div>
				<div class="spaced-paragraph">
					Since these abilities rely on active prayers, they are time-limited.
					However, you can typically get about 3 hours of buffs daily, and using
					them primarily over the weekend will likely cover your entire
					playtime.
				</div>
				<div class="spaced-paragraph">
					You can find more details on the weapon's active features <Link
						href="/hunter-notes/weapons/active-feature"
						inline>on the Active Feature page.</Link
					>
				</div>
			</div>
		</section>
		<section>
			<SectionHeading level={2} title="Diva Prayer Gems" />
			<div>
				<div class="spaced-paragraph">
					During the <InlineTooltip
						text="Diva Defense"
						tooltip="Event"
						icon={LocationIcons.find((e) => e.name === 'Interception')?.icon}
						iconType="file"
					/> event, there are up to four different colors of Prayer gems, each of
					these will have a different effect based on the skills currently assigned
					to the individual colors.
				</div>
				<div class="spaced-paragraph">
					The buffs are only available in the second week of the event. The
					total number of times they can be used is based on the global server's
					Song Spheres. When Prayers are maxed out you will be forced to choose
					another color, locking you from contributing to it.
				</div>
				<div class="spaced-paragraph">
					You select your color each day by talking to the Blue Guild Girl who
					handles things such as Arena quests. You can change this color once a
					day after 12 PM. Selecting your first color does not count as changing
					it, allowing you to contribute to two different colors on the first
					day.
				</div>
				<div class="spaced-paragraph">
					There are a number of different possible effects for each of these
					gems, and which is assigned to which color will change on each cycle,
					which should be verified in game.
				</div>
				<div class="spaced-paragraph">
					Each day at some point after 12 PM the most popular prayer is ranked
					up. This is based on server wide contributions and thus cannot be
					manipulated to be something based on what you would personally prefer.
					The total level of prayers cannot exceed 7. If there are four prayers
					up each with three levels levels it's very likely that the two most
					popular ones will get max levels, the third most popular will get a
					single level and then the least popular will get no levels.
				</div>
				<div class="spaced-paragraph">
					You can check your currently equipped gem names in Overlay Settings >
					Hunter Notes > Gear Info (Text).
				</div>
				<div class="spaced-paragraph">
					To see the damage of certain gems, you can use our <Link
						icon={ToolKit}
						href="/tools/calculator/damage">Damage Calculator</Link
					>
				</div>
				<div class="diva-prayer-gems-table">
					<DataTable
						useStaticWidth
						sortable
						zebra
						size="medium"
						headers={[
							{ key: 'name', value: 'Prayer Gem' },
							{ key: 'description', value: 'Effects' },
							{ key: 'maxLevel', value: 'Max Level' },
							{ key: 'unused', value: 'Unused' },
							{ key: 'partyEffect', value: 'Party Effect' },
						]}
						rows={divaPrayerGems
							.filter((e) => e.name !== 'None')
							.map((e) => {
								return {
									...e,
									unused: e.unused ? '✅' : '❌',
									partyEffect: e.partyEffect ? '✅' : '❌',
								};
							})}
						><Toolbar
							><div class="toolbar">
								<CopyButton
									iconDescription={'Copy as CSV'}
									text={getCSVFromArray(
										divaPrayerGems
											.filter((e) => e.name !== 'None')
											.map((e) => {
												return {
													...e,
												};
											}),
									)}
								/>
							</div>
						</Toolbar>

						{#snippet cell({ cell })}
							<p>{cell.value}</p>
						{/snippet}
					</DataTable>
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

	.toolbar {
		padding: 1rem;
		display: flex;
		align-items: center;
		gap: 1rem;
		flex-grow: 1;
		flex-shrink: 1;
	}

	.diva-prayer-gems-table {
		display: flex;
		flex-wrap: wrap;
		overflow-x: auto;
		max-width: 90vw;
	}
</style>
