<script lang="ts">
	import { page } from '$app/stores';
	import InlineTooltip from '$lib/client/components/frontier/InlineTooltip.svelte';
	import HunterNotesPage from '$lib/client/components/HunterNotesPage.svelte';
	import PageTurn from '$lib/client/components/PageTurn.svelte';
	import SectionHeading from '$lib/client/components/SectionHeading.svelte';
	import SectionHeadingTopLevel from '$lib/client/components/SectionHeadingTopLevel.svelte';
	import { getWeaponIcon } from '$lib/client/modules/frontier/weapons';
	import ListItem from 'carbon-components-svelte/src/ListItem/ListItem.svelte';
	import Link from 'carbon-components-svelte/src/Link/Link.svelte';
	import UnorderedList from 'carbon-components-svelte/src/UnorderedList/UnorderedList.svelte';
	import DataTable from 'carbon-components-svelte/src/DataTable/DataTable.svelte';
	import Toolbar from 'carbon-components-svelte/src/DataTable/Toolbar.svelte';
	import CopyButton from 'carbon-components-svelte/src/CopyButton/CopyButton.svelte';
	import Button from 'carbon-components-svelte/src/Button/Button.svelte';
	import Download from 'carbon-icons-svelte/lib/Download.svelte';
	import { downloadDomAsPng } from '$lib/client/modules/download';
	import { getCSVFromArray } from '$lib/client/modules/csv';
	import type { FrontierArmorSkillName, FrontierArmorSkillTree } from 'ezlion';
	import CenteredFigure from '$lib/client/components/CenteredFigure.svelte';
	import { getItemIcon } from '$lib/client/modules/frontier/items';
	import StarRating from '$lib/client/components/StarRating.svelte';
	import { getMonsterIcon } from '$lib/client/modules/frontier/monsters';
	import Information from 'carbon-icons-svelte/lib/Information.svelte';
	import ToolKit from 'carbon-icons-svelte/lib/ToolKit.svelte';

	const hidenSkills: {
		id: string;
		skill: FrontierArmorSkillName;
		points: string;
		description: string;
	}[] = [
		{
			id: '4',
			skill: 'LBG Tech Master', // TODO update ezlion?
			points: 'Twin Hiden, 30',
			description:
				'Attack increased by x1.4 when using LBG Tech 【Gun Prodigy】.',
		},
		{
			id: '3',
			skill: 'LBG Tech 【Gun Prodigy】',
			points: '30',
			description: `Gives Super High-Grade Earplugs and
Attack x1.3 when wielding a Light Bowgun.
Probability of ammo bouncing off monsters is reduced.
Can consume items while the weapon is unsheathed.
Perfect Shot added to Just Shot meter that deals additional damage.`,
		},
		{
			id: '2',
			skill: 'LBG Tech Kaiden',
			points: '20',
			description:
				'Increases attack power by 1.1x and reduces the probability of ammo bouncing off monsters when wielding a Light Bowgun.',
		},
		{
			id: '1',
			skill: 'LBG Tech Expert',
			points: '10',
			description:
				'Reduces the probability of ammo bouncing off monsters when wielding a Light Bowgun.',
		},
		{
			id: '0',
			skill: 'LBG Tech Novice',
			points: '-10',
			description: 'Attack x0.8 when wielding Light Bowgun.',
		},
	];

	const skillInteractions: {
		id: number;
		skill: FrontierArmorSkillTree;
		description: string;
	}[] = [
		{
			id: 0,
			skill: 'Dissolver',
			description:
				'Adjusts the element hitzones by +10. Determination applies the effects of Dissolver without the need for hitzone requirements, effectively forcing elemental damage or reducing/negating negative hitzones.',
		},
		{
			id: 1,
			skill: 'Vampirism',
			description:
				'+3 True Raw per hit. Up to 80 True Raw can be gained through leeching.',
		},
		{
			id: 2,
			skill: 'Stylish Assault',
			description:
				'20 seconds uptime. The duration can be refreshed by successfully using i-frames again.',
		},
		{
			id: 3,
			skill: 'Spacing',
			description:
				'35 seconds duration and +0.1x multiplier increase. The meter is hidden and only enhances attacks within critical distance.',
		},
		{
			id: 6,
			skill: 'Ice Age',
			description:
				'1/17/38 hits to reach stage 1/2/3 respectively. All weapons share the same stage decay timer; Ice Age Up only affects the third stage’s decay rate.',
		},
		{
			id: 7,
			skill: 'Rush',
			description:
				'400/20000/? total Motion Value to reach stage 1/2/3 respectively. The third stage, exclusive to Rush Up, has a limited duration.',
		},
		{
			id: 8,
			skill: 'Ceaseless',
			description:
				'11 seconds decay window. 36/98/120 hits required to reach stage 1/2/3 respectively (27/74/120 with Ceaseless Up). The third stage is also exclusive to Ceaseless Up, which decays by stages rather than all at once.',
		},
		{
			id: 9,
			skill: 'Point Breakthrough',
			description:
				'30 seconds duration. 20/12 hits to reach stages 1/2 respectively. The previously hit hitzone is more vulnerable at Stage 2.',
		},
		{
			id: 10,
			skill: 'Furious',
			description:
				'1/2/5 evasions to reach stage 1/2/3 respectively. These effects apply to both successful evasions and perfect guards (where applicable), but attacking is necessary to advance stages.',
		},
	];

	const sigilsUsabilityRatings: {
		id: number;
		rating: number;
		sigil: string;
		type: string;
		description: string;
	}[] = [
		{
			id: 0,
			sigil: 'Rapid Fire Add',
			rating: 1,
			description:
				'Enables the shot type shown on the sigil for Rapid Fire usage.',
			type: 'Tech Boost',
		},
		{
			id: 2,
			sigil: 'Super Rapid Fire Add',
			rating: 1,
			description:
				'Enables the shot type shown on the sigil for Super Rapid Fire usage.',
			type: 'Tech Boost',
		},
		{
			id: 3,
			sigil: 'Disable Rapid',
			rating: 1,
			description:
				'Disables the shot type shown on the sigil for Rapid Fire usage.',
			type: 'Tech Boost',
		},
		{
			id: 4,
			sigil: 'J Gauge',
			rating: 1,
			description: 'Widens the "Just" sweetspot for quick reloads and shots.',
			type: 'Tech Change',
		},
		{
			id: 5,
			sigil: 'Blunt Bullets',
			rating: 1, // TODO
			description:
				'Changes Pellet Shots to have Impact properties and deal KO damage.',
			type: 'Other',
		},
		{
			id: 6,
			sigil: 'Explosion',
			rating: 1, // TODO
			description:
				'Grants Cluster Shots a low chance to detonate into a giant explosion.',
			type: 'Other',
		},
	];
</script>

<HunterNotesPage displayTOC={true}>
	<section>
		<SectionHeadingTopLevel title={'Light Bowgun'} />
		<div>
			<p class="spaced-paragraph">
				The <InlineTooltip
					tooltip="Weapon"
					text="Light Bowgun"
					icon={getWeaponIcon('Light Bowgun')}
					iconType="component"
				/> (LBG) is a highly versatile ranged weapon known for its rapid bullet output,
				utilizing Just Shots, Rapid Fire, and Ultra Rapid Fire to maximize damage.
			</p>
			<p class="spaced-paragraph">
				The Just Shot is the primary attack method for <InlineTooltip
					tooltip="Weapon"
					text="Light Bowgun"
					icon={getWeaponIcon('Light Bowgun')}
					iconType="component"
				/> users. A meter appears with a white section, and timing your shot within
				this section allows you to fire the next shot sooner, boosting its damage
				by 1.3x. This technique increases your DPS more effectively than either of
				the rapid-fire methods.
			</p>
			<p class="spaced-paragraph">
				If you reload within the same window, you can reload faster, including
				swapping ammo types if you're quick enough. Unlike the <InlineTooltip
					tooltip="Weapon"
					text="Heavy Bowgun's"
					icon={getWeaponIcon('Heavy Bowgun')}
					iconType="component"
				/>
				Compression Shots, missing the timing window incurs no penalty.
			</p>
			<p class="spaced-paragraph">
				Rapid Fire functions similarly to the mainline games, where you fire a
				volley of shots while consuming a single bullet. These shots have a
				power multiplier of 0.5x. Ultra Rapid Fire is similar but allows you to
				continue firing after the first volley, adding one shot per unit of ammo
				consumed. For instance, if the first volley fires three shots, the
				second volley fires four, the third fires five, and so on until you run
				out of ammo.
			</p>
			<p class="spaced-paragraph">
				<InlineTooltip
					tooltip="Weapon"
					text="Light Bowguns"
					icon={getWeaponIcon('Light Bowgun')}
					iconType="component"
				/> can be equipped with Silencers and Long Barrels. Silencers don’t reduce
				recoil, and Long Barrels don’t increase attack power. Instead, Silencers
				make you less noticeable to monsters, and Long Barrels increase the speed
				of your shots.
			</p>

			<section>
				<SectionHeading level={2} title="Critical Distance" />
				<div>
					<p class="spaced-paragraph">
						Critical Distance is a shared mechanic among all ranged weapons,
						defining the optimal range for each ammo type. Here's a breakdown:
					</p>
					<p class="spaced-paragraph"><strong>Earth Style</strong></p>
					<UnorderedList class="spaced-list">
						<ListItem
							><p>
								<InlineTooltip
									tooltip="Ammo"
									text="Normal Shots"
									icon={getItemIcon('Shot')}
									iconType="component"
								/>: Close to Mid Range
							</p></ListItem
						>
						<ListItem
							><p>
								<InlineTooltip
									tooltip="Ammo"
									text="Pierce Shots"
									icon={getItemIcon('Ammo Pierce')}
									iconType="component"
								/>: Mid to Far Range
							</p></ListItem
						>
						<ListItem
							><p>
								<InlineTooltip
									tooltip="Ammo"
									text="Pellet Shots"
									icon={getItemIcon('Ammo Spread')}
									iconType="component"
								/>: Short Range
							</p></ListItem
						>
						<ListItem
							><p>Other Shots: Fixed damage regardless of distance</p></ListItem
						>
					</UnorderedList>
					<p class="spaced-paragraph">
						<strong>Heaven and Storm Style</strong>
					</p>
					<UnorderedList class="spaced-list">
						<ListItem
							><p>
								<InlineTooltip
									tooltip="Ammo"
									text="Normal Shots"
									icon={getItemIcon('Shot')}
									iconType="component"
								/>: Close Range
							</p></ListItem
						>
						<ListItem
							><p>
								<InlineTooltip
									tooltip="Ammo"
									text="Pierce Shots"
									icon={getItemIcon('Ammo Pierce')}
									iconType="component"
								/>: Close to Mid Range
							</p></ListItem
						>
						<ListItem
							><p>
								<InlineTooltip
									tooltip="Ammo"
									text="Pellet Shots"
									icon={getItemIcon('Ammo Spread')}
									iconType="component"
								/>: Short Range
							</p></ListItem
						>
						<ListItem
							><p>Other Shots: Fixed damage regardless of distance</p></ListItem
						>
					</UnorderedList>
					<p class="spaced-paragraph">
						A visual cue helps you identify when you're at the critical
						distance: the shot discards its casing, followed by an expanding
						circle. Using this cue, you can learn proper spacing and improve
						your positioning.
					</p>
				</div>
			</section>

			<p>
				For an explanation on element damage, see our <Link
					icon={Information}
					href="/hunter-notes/getting-started/elements#damage"
					>Elements page</Link
				>. For more information on motion values, see the <Link
					icon={ToolKit}
					href="/tools/calculator/damage">Damage Calculator</Link
				>.
			</p>

			<section>
				<SectionHeading level={2} title="Earth Style" />
				<div>
					<p class="spaced-paragraph">
						Earth Style is the standard <InlineTooltip
							tooltip="Weapon"
							text="Light Bowgun"
							icon={getWeaponIcon('Light Bowgun')}
							iconType="component"
						/> style, straightforward and effective without any notable distinctions.
					</p>
				</div>
			</section>

			<section>
				<SectionHeading level={2} title="Heaven Style" />
				<div>
					<p class="spaced-paragraph">
						Heaven Style builds on Earth Style by tightening all critical
						distances and introducing quick reloading. Quick reloading loads
						half your ammo (rounded up) but takes only half the time. In this
						style, critical distances are shorter and narrower, but the damage
						multipliers are increased from 1.5x to 1.6x.
					</p>
				</div>
			</section>

			<section>
				<SectionHeading level={2} title="Storm Style" />
				<div>
					<p class="spaced-paragraph">
						Storm Style retains the changes from Heaven Style and adds the
						ability to perform a quick forward hop as an evasion with your
						weapon unsheathed. This evade chains into a Step Shot, which
						significantly shortens the distance of all shots but moves the
						critical distance to the very start of the shot’s flight time,
						increasing the critical multiplier to 2.0x. This can be very
						powerful, allowing you to chain high-damage shots while moving
						forward.
					</p>
					<p class="spaced-paragraph">
						With Ultra Rapid Fire, all shots fired as a Step Shot use the same
						critical distance. If you evade close to a monster without getting
						hit, you can unleash a long barrage of <InlineTooltip
							tooltip="Ammo"
							text="Pierce Shots"
							icon={getItemIcon('Ammo Pierce')}
							iconType="component"
						/> with much higher damage.
					</p>
					<p class="spaced-paragraph">
						If you are using <InlineTooltip
							tooltip="Armor Skill"
							text="Combat Supremacy"
							icon={getItemIcon('Jewel')}
							iconType="component"
						/>, Earth Style is usually the best choice. Storm Style can be
						extremely powerful if used correctly but requires stamina and is
						less suited for <InlineTooltip
							tooltip="Armor Skill"
							text="Combat Supremacy"
							icon={getItemIcon('Jewel')}
							iconType="component"
						/>.
					</p>
				</div>
			</section>

			<section>
				<SectionHeading level={2} title="Extreme Style" />
				<div>
					<p class="spaced-paragraph">
						Extreme Style is an advanced version of Earth Style, enhancing
						mobility and functionality.
					</p>
					<p class="spaced-paragraph">
						As with other Extreme Styles, you can run while your weapon is
						unsheathed. For <InlineTooltip
							tooltip="Weapon"
							text="Light Bowgun"
							icon={getWeaponIcon('Light Bowgun')}
							iconType="component"
						/>, this running speed is faster than with other weapons and quicker
						than standard running unless your Movement Speed is increased. You
						can also reload while running and perform a slide with good iframes,
						covering a significant distance in the direction you’re moving. You
						can stop running instantly to shoot, though adjusting your angle is
						challenging.
					</p>
					<p class="spaced-paragraph">
						This style also introduces Evasion Shots and Finishing Shots.
					</p>
					<p class="spaced-paragraph">
						Evasion Shots allow you to shoot while evading, with a damage
						multiplier of 0.6x and iframes similar to a roll. The caveat is that
						you must have ammo loaded and be aware enough to match the timing
						while chaining shots.
					</p>
					<p class="spaced-paragraph">
						Finishing Shots are a variant of Just Shots that deal fixed 2.0x
						damage but cause significant recoil, ending your shot combo. After
						firing a Finishing Shot, you can only continue into a run, making it
						less compatible with <InlineTooltip
							tooltip="Armor Skill"
							text="Combat Supremacy"
							icon={getItemIcon('Jewel')}
							iconType="component"
						/>. While Just Shots generally offer more sustained damage,
						Finishing Shots can be powerful if you need to maximize damage
						output with limited ammo.
					</p>
				</div>
			</section>

			<section>
				<SectionHeading level={2} title="Example Gear with Runs" />
				<div></div>
			</section>

			<section>
				<SectionHeading level={2} title="Active Feature" />
				<div>
					<p>
						+0.1x Damage increased at critical distance. x1.2 Status damage.
					</p>
				</div>
			</section>

			<section>
				<SectionHeading level={2} title="Hiden" />
				<div>
					<DataTable
						useStaticWidth
						id="hiden-dom"
						sortable
						zebra
						size="medium"
						headers={[
							{ key: 'skill', value: 'Skill' },
							{ key: 'points', value: 'Points' },
							{ key: 'description', value: 'Description' },
						]}
						rows={hidenSkills}
						><Toolbar
							><div class="toolbar">
								<CopyButton
									iconDescription={'Copy as CSV'}
									text={getCSVFromArray(hidenSkills)}
								/>
								<Button
									kind="tertiary"
									icon={Download}
									on:click={() => downloadDomAsPng('hiden-dom', 'lbg-hiden')}
									>Download</Button
								>
							</div>
						</Toolbar>

						{#snippet cell({ cell })}
											
								{#if cell.value[0] == '-'}
									<p style:color="var(--ctp-red)">{cell.value}</p>
								{:else}
									<p>{cell.value}</p>
								{/if}
							
											{/snippet}
					</DataTable>
				</div>
			</section>

			<section>
				<SectionHeading level={2} title="Skill Interactions" />
				<div>
					<div>
						<DataTable
							useStaticWidth
							id="skill-interactions-dom"
							sortable
							zebra
							size="medium"
							headers={[
								{ key: 'skill', value: 'Skill' },
								{ key: 'description', value: 'Description' },
							]}
							rows={skillInteractions}
							><Toolbar
								><div class="toolbar">
									<CopyButton
										iconDescription={'Copy as CSV'}
										text={getCSVFromArray(skillInteractions)}
									/>
									<Button
										kind="tertiary"
										icon={Download}
										on:click={() =>
											downloadDomAsPng(
												'skill-interactions-dom',
												'skill-interactions',
											)}>Download</Button
									>
								</div>
							</Toolbar>

							{#snippet cell({ cell })}
													
									{#if cell.key === 'skill'}
										<InlineTooltip
											text={cell.value}
											tooltip="Armor Skill"
											iconType="component"
											icon={getItemIcon('Jewel')}
										/>
									{:else}
										<p>{cell.value}</p>
									{/if}
								
													{/snippet}
						</DataTable>
					</div>
				</div>
			</section>

			<section>
				<SectionHeading level={2} title="Sigils Usability Ratings" />
				<div>
					<div class="table">
						<DataTable
							useStaticWidth
							id="sigils-dom"
							sortable
							zebra
							size="medium"
							headers={[
								{ key: 'sigil', value: 'Sigil' },
								{ key: 'rating', value: 'Rating' },
								{ key: 'description', value: 'Description' },
								{ key: 'type', value: 'Type' },
							]}
							rows={sigilsUsabilityRatings}
							><Toolbar
								><div class="toolbar">
									<CopyButton
										iconDescription={'Copy as CSV'}
										text={getCSVFromArray(sigilsUsabilityRatings)}
									/>
									<Button
										kind="tertiary"
										icon={Download}
										on:click={() => downloadDomAsPng('sigils-dom', 'sigils')}
										>Download</Button
									>
								</div>
							</Toolbar>

							{#snippet cell({ cell })}
													
									{#if cell.key === 'sigil'}
										<InlineTooltip
											text={cell.value}
											tooltip="Sigil"
											iconType="component"
											icon={getItemIcon('Sigil')}
										/>
									{:else if cell.key === 'rating'}
										<StarRating
											rating={Number.parseFloat(cell.value)}
											maxRating={3}
										/>
									{:else}
										<p>{cell.value}</p>
									{/if}
								
													{/snippet}
						</DataTable>
					</div>
				</div>
			</section>

			<section>
				<SectionHeading level={2} title="Tips and Tricks" />
				<div>
					<UnorderedList>
						<ListItem
							><p>
								As a Gunner weapon, the <InlineTooltip
									tooltip="Weapon"
									text="Light Bowgun"
									iconType="component"
									icon={getWeaponIcon('Light Bowgun')}
								/> can quickly meet the requirements for various skills.
							</p></ListItem
						>
						<ListItem
							><p>
								Long barrels don’t increase raw damage; instead, they boost shot
								speed, which may disrupt timing with <InlineTooltip
									tooltip="Ammo"
									text="pierce ammo"
									iconType="component"
									icon={getItemIcon('Ammo Pierce')}
								/> hits.
							</p></ListItem
						>
						<ListItem
							><p>
								Rapid Fire isn’t commonly used in modern Frontier, so newer guns
								don’t come with it, though you can still force it using sigils.
							</p></ListItem
						>
						<ListItem
							><p>
								<InlineTooltip
									tooltip="Ammo"
									text="Pierce S"
									iconType="component"
									icon={getItemIcon('Ammo Pierce')}
								/> is the primary raw ammo type used.
							</p></ListItem
						>
						<ListItem
							><p>
								If you’re having trouble tracking ammo with Just Shots, consider
								using the first-person camera with the clip display positioned
								under the crosshairs.
							</p></ListItem
						>
						<ListItem
							><p>
								Like Sword and Shield, using items while unsheathed with <InlineTooltip
									tooltip="Armor Skill"
									text="LBG Hiden"
									iconType="component"
									icon={getItemIcon('Jewel')}
								/> resets <InlineTooltip
									tooltip="Armor Skill"
									text="Rush"
									iconType="component"
									icon={getItemIcon('Jewel')}
								/>.
							</p></ListItem
						>
						<ListItem
							><p>
								Proper spacing increases the size of <InlineTooltip
									tooltip="Armor Skill"
									text="LBG Hiden's"
									iconType="component"
									icon={getItemIcon('Jewel')}
								/> Perfect Shot window when the buff is active.
							</p></ListItem
						>
						<ListItem
							><p>
								Consider building sets both with and without <InlineTooltip
									tooltip="Armor Skill"
									text="Combat Supremacy"
									iconType="component"
									icon={getItemIcon('Jewel')}
								/>.
								<InlineTooltip
									tooltip="Armor Skill"
									text="Thunder Clad"
									iconType="component"
									icon={getItemIcon('Jewel')}
								/> offers good mobility, but some monsters may require evasion.
							</p></ListItem
						>
						<ListItem
							><p>
								<InlineTooltip
									tooltip="Ammo"
									text="Acid S"
									iconType="component"
									icon={getItemIcon('Shot')}
								/> applies a hitzone debuff, making it highly effective against <InlineTooltip
									tooltip="Monster"
									text="Raviente"
									iconType="file"
									icon={getMonsterIcon('Raviente')}
								/>
								due to its multiple hitzones.
							</p></ListItem
						>
						<ListItem
							><p>
								Combined with <InlineTooltip
									tooltip="Armor Skill"
									text="Caring+3"
									iconType="component"
									icon={getItemIcon('Jewel')}
								/>, <InlineTooltip
									tooltip="Weapon"
									text="Light Bowgun"
									iconType="component"
									icon={getWeaponIcon('Light Bowgun')}
								/> is a popular choice on Raviente support teams for quickly dealing
								with small monsters using <InlineTooltip
									tooltip="Ammo"
									text="Pellet S"
									iconType="component"
									icon={getItemIcon('Ammo Spread')}
								/>.
							</p></ListItem
						>
					</UnorderedList>
				</div>
			</section>
		</div>

		<div class="page-turn">
			<PageTurn pageUrlPathName={$page.url.pathname} />
		</div>
	</section>
</HunterNotesPage>

<style lang="scss">
	.page-turn {
		margin-top: 4rem;
	}

	.paragraph-with-icon {
		display: flex;
		align-items: center;
		gap: 0.125rem;
	}

	.toolbar {
		padding: 1rem;
		display: flex;
		align-items: center;
		gap: 1rem;
		flex-grow: 1;
		flex-shrink: 1;
	}

	.video {
		width: 80%;
		margin: 0 auto;
		margin-bottom: 2rem;
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
