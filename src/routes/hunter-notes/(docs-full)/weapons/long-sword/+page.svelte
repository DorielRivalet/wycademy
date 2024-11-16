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
			skill: 'LS Tech Master', // TODO update ezlion?
			points: 'Twin Hiden, 30',
			description: 'Sharpness level +1 is added to LS Tech 【Katana God】.',
		},
		{
			id: '3',
			skill: 'LS Tech 【Katana God】',
			points: '30',
			description: `Gives Super High-Grade Earplugs, Attack x1.2 when wielding a Long Sword, Fencing+1 and Spirit Bar consumption halved. Also grants Sharp Sword +2 while Spirit Bar is full and Attack x1.25 (originally x1.15) while the Spirit Bar is glowing (after being filled completely).`,
		},
		{
			id: '2',
			skill: 'LS Tech Kaiden',
			points: '20',
			description:
				'Increases attack by 1.1 and grants Fencing+1 when wielding Long Sword.',
		},
		{
			id: '1',
			skill: 'LS Tech Expert',
			points: '10',
			description: 'Fencing+1 when wielding Long Sword.',
		},
		{
			id: '0',
			skill: 'LS Tech Novice',
			points: '-10',
			description: 'Attack x0.8 when wielding Long Sword.',
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
				'Adjusts the element hitzones by +15. Determination applies the effects of Dissolver without the need for hitzone requirements, effectively forcing element damage or reducing/negating negative hitzones.',
		},
		{
			id: 1,
			skill: 'Vampirism',
			description:
				'+4 True Raw per hit. Up to 80 True Raw can be gained through leeching.',
		},
		{
			id: 2,
			skill: 'Stylish Assault',
			description:
				'20 seconds uptime. The duration can be refreshed by successfully using i-frames again.',
		},
		{
			id: 3,
			skill: 'Stylish',
			description:
				'+5 sharpness recovery (+7 with Blink). When using Stylish Up, get 3 free hits before sharpness is reduced.',
		},
		{
			id: 4,
			skill: 'Lavish Attack',
			description:
				'-3 sharpness per hit. Lavish Attack reduces the free hits granted by Stylish Up to 1.',
		},
		{
			id: 5,
			skill: 'Obscurity',
			description:
				'Max stack of 150 True Raw. Obscurity Up maxes out after two perfect guards, allowing subsequent guards to restore 5 or 11 sharpness depending on timing.',
		},
		{
			id: 6,
			skill: 'Ice Age',
			description:
				'1/12/26 hits to reach stage 1/2/3 respectively. All weapons share the same stage decay timer; Ice Age Up only affects the third stage’s decay rate.',
		},
		{
			id: 7,
			skill: 'Rush',
			description:
				'23/1150/? total Motion Value to reach stage 1/2/3 respectively. The third stage, exclusive to Rush Up, has a limited duration.',
		},
		{
			id: 8,
			skill: 'Ceaseless',
			description:
				'12 seconds decay window. 15/38/47 hits required to reach stage 1/2/3 respectively (11/29/47 with Ceaseless Up). The third stage is also exclusive to Ceaseless Up, which decays by stages rather than all at once.',
		},
		{
			id: 9,
			skill: 'Point Breakthrough',
			description:
				'30 seconds duration. 10/6 hits to reach stages 1/2 respectively (8/5 with Fencing+2). The previously hit hitzone is more vulnerable at Stage 2, and Fencing +2 slightly eases activation.',
		},
		{
			id: 10,
			skill: 'Furious',
			description:
				'1/3/6 evasions or perfect guards to reach stage 1/2/3 respectively. These effects apply to both successful evasions and perfect guards (where applicable), but attacking is necessary to advance stages.',
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
			sigil: 'Piercing Stab',
			rating: 2,
			description:
				'Boosts the Motion Value of the Piercing Stab Attack (24･12x2 > 32･16x2) and the Super Piercing Stab (24･12x5･30 > 32･16x5･40). Affects only the manually charged version, not the parry follow-up. Storm and Extreme Style Only.',
			type: 'Tech Boost',
		},
		{
			id: 1,
			sigil: 'Retreating Sword',
			rating: 1,
			description:
				'Adds iframes to the Fade Slash and Backhop Slash, similar to those on the Evade Slash in Heaven and Storm styles. Earth Style Only.',
			type: 'Tech Boost',
		},
		{
			id: 2,
			sigil: 'Blink',
			rating: 1,
			description:
				'Increases the distance that the Blink teleport moves you. Does not stack. Extreme Style Only.',
			type: 'Tech Boost',
		},
		{
			id: 3,
			sigil: 'Upswing',
			rating: 1,
			description: 'Boosts the Motion Value of the Upswing (28 > 42).',
			type: 'Tech Boost',
		},
		{
			id: 4,
			sigil: 'LS Length Up',
			rating: 2,
			description:
				'Increases the length of your weapon and decreases your True Raw by 25. Does not affect the True Raw decrease if multiple of this sigil are used.',
			type: 'Other',
		},
		{
			id: 5,
			sigil: 'LS Draw Strength',
			rating: 1,
			description:
				'Increases the motion value of all unsheathe attacks with a Long Sword by a 1.50x multiplier.',
			type: 'Other',
		},
	];
</script>

<HunterNotesPage displayTOC={true}>
	<section>
		<SectionHeadingTopLevel title={'Long Sword'} />
		<div>
			<p class="spaced-paragraph">
				The Frontier <InlineTooltip
					tooltip="Weapon"
					text="Long Sword"
					icon={getWeaponIcon('Long Sword')}
					iconType="component"
				/> (LS) closely resembles the one from MHFU, featuring a balanced speed that
				places it between the <InlineTooltip
					tooltip="Weapon"
					text="Sword and Shield"
					icon={getWeaponIcon('Sword and Shield')}
					iconType="component"
				/> (SnS) and <InlineTooltip
					tooltip="Weapon"
					text="Great Sword"
					icon={getWeaponIcon('Great Sword')}
					iconType="component"
				/> (GS). This version introduces charge attacks with unique mechanics and
				step slashes similar to the fade slashes that allow for directional movement,
				as seen since Monster Hunter Tri.
			</p>
			<p class="spaced-paragraph">
				Frontier's Spirit Combo mechanics add depth to the <InlineTooltip
					tooltip="Weapon"
					text="Long Sword"
					icon={getWeaponIcon('Long Sword')}
					iconType="component"
				/> gameplay. A Spirit Combo consists of three "Blocks," each varying in length
				and composed of different attacks based on your inputs. After completing
				these blocks, you can either end the combo with a roll or execute a Spirit
				Release—a charge attack that changes properties depending on the attacks
				performed and the Spirit Meter.
			</p>
			<p class="spaced-paragraph">
				Each Spirit Combo "Block" begins with a Spirit attack, followed by one
				of three options: another Spirit attack, a Normal slash, or a Sidestep
				Slash. The Normal slash ends the block, allowing only a new Spirit
				Attack to start a new block, while the Sidestep Slash can be followed by
				a Normal slash and then a Spirit attack.
			</p>
			<p class="spaced-paragraph">
				You can perform a Spirit Release by holding down the Spirit Attack input
				for an extended period. The damage of this attack is determined by the
				number of Spirit Attacks executed prior and the amount of Spirit Meter
				accumulated. By combining any three blocks and finishing with a Spirit
				Release, you can build powerful combos, with a guaranteed minimum total
				motion value of 130 as long as you perform at least three Spirit
				Attacks.
			</p>

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
							text="Long Sword"
							icon={getWeaponIcon('Long Sword')}
							iconType="component"
						/> setup, similar to what’s found in MHFU. It allows you to use both
						Fade Slashes and Sidestep Slashes at any time.
					</p>
				</div>
			</section>

			<section>
				<SectionHeading level={2} title="Heaven Style" />
				<div>
					<p class="spaced-paragraph">
						Heaven Style replaces the Fade Slashes with Evade Slashes, which
						cancel any ongoing combo, similar to a roll but with an added
						attack. Although you lose the ability to freely perform Sidestep
						Slashes, they remain available as part of a Spirit Combo.
					</p>
				</div>
			</section>

			<section>
				<SectionHeading level={2} title="Storm Style" />
				<div>
					<p class="spaced-paragraph">
						Storm Style builds on Heaven Style by replacing the Thrust motion
						with a Piercing Stab. This attack's damage scales with the amount of
						Spirit Meter you have when executing it. Although it’s a slower
						move, it has a significant total motion value of 116 (or 154 with a
						<InlineTooltip
							tooltip="Sigil"
							text="sigil"
							icon={getItemIcon('Sigil')}
							iconType="component"
						/>) and hits seven times. Despite its power, the Piercing Stab can
						disrupt the timing of attacks and reduce overall DPS, making Heaven
						Style the preferred choice for high-level play due to its Evade
						Slash.
					</p>
				</div>
			</section>

			<section>
				<SectionHeading level={2} title="Extreme Style" />
				<div>
					<p class="spaced-paragraph">
						Extreme Style introduces a range of new mechanics, incorporating
						elements from both Heaven and Storm styles. The most notable
						addition is the Parry, allowing you to guard against attacks and
						counter with either a Teleport—dealing damage along the teleport
						path and providing iframes—or a Piercing Stab, similar to the one in
						Storm Style.
					</p>
					<p class="spaced-paragraph">
						A new Blade Meter is also introduced, filling up in the same way as
						the Spirit Meter, but it also increases through the Parry action,
						functioning similarly to the <InlineTooltip
							tooltip="Weapon"
							text="Switch Axe F"
							icon={getWeaponIcon('Switch Axe F')}
							iconType="component"
						/> Storm Style Guard. This meter powers the Blade Release, a powerful
						attack that becomes stronger as the meter fills. The Blade Meter empties
						upon sheathing, reducing compatibility with <InlineTooltip
							tooltip="Armor Skill"
							text="Combat Supremacy"
							icon={getItemIcon('Jewel')}
							iconType="component"
						/>.
					</p>
					<p class="spaced-paragraph">
						While running, you can initiate a charge, dragging your sword behind
						you. Releasing this charge unleashes a single slash that deals 18
						motion if not fully charged but increases to 70 when fully charged.
						The charged slash consumes some Spirit, but the increase in damage
						makes it worthwhile. Additionally, you can perform a downslash or
						upslash from the dash without charging.
					</p>
					<p class="spaced-paragraph">
						Parrying is an instant guard action that can chain into various
						actions, most notably a teleport that covers a long distance and
						performs either a slash or a piercing stab with the same values as
						the Storm Style move.
					</p>
					<p class="spaced-paragraph">
						The Blade Release consumes your Blade Meter to perform a series of
						slashes ending in an explosive strike. The motion values depend on
						the meter's build-up, with a full meter resulting in a sequence of
						5-5-5-180. This attack involves up to three quick swipes before
						turning away, after which the final motion triggers. However, if
						you're interrupted during the animation, the final motion won't
						occur, and your Blade Meter will still be depleted.
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
						Full spirit bar buff effect increased (from +10 attack to +40
						attack).
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
									on:click={() => downloadDomAsPng('hiden-dom', 'ls-hiden')}
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
								There is no spirit level mechanic like in MH3 and later games.
								Filling up the bar completely grants a temporary raw damage
								bonus.
							</p></ListItem
						>
						<ListItem
							><p>
								The choice of length is largely personal preference. Keep in
								mind that <InlineTooltip
									tooltip="Weapon"
									text="Long Sword"
									iconType="component"
									icon={getWeaponIcon('Long Sword')}
								/> has various slashes that attack in different directions.
							</p></ListItem
						>
						<ListItem
							><p>
								Mastering the Evasion Slash is good practice, as it can also
								reset combos. The invincibility frames start at the beginning
								but don’t last long.
							</p></ListItem
						>
						<ListItem
							><p>
								Piercing stabs from parries are powerful but require good
								positioning to land effectively.
							</p></ListItem
						>
						<ListItem
							><p>
								You can perform an upswing from a roll. The parry from a
								sheathed state has a different button combination (Triangle +
								Circle) than other weapons due to the unsheathe > spirit slash
								mechanic.
							</p></ListItem
						>
						<ListItem
							><p>
								The orange/white bar below the spirit meter charges up a
								stronger multi-hit attack, which can be unleashed when the bar
								is halfway filled or maxed out. Otherwise, it depletes when you
								sheathe or are forced to (e.g., due to tremors).
							</p></ListItem
						>
						<ListItem
							><p>
								<InlineTooltip
									tooltip="Weapon"
									text="Long Sword"
									iconType="component"
									icon={getWeaponIcon('Long Sword')}
								/> receives the smallest raw boost from <InlineTooltip
									tooltip="Armor Skill"
									text="Obscurity"
									iconType="component"
									icon={getItemIcon('Jewel')}
								/>, but it’s still significant.
							</p></ListItem
						>
						<ListItem
							><p>
								If you really miss the Fade Slash, you might want to consider
								using <InlineTooltip
									tooltip="Weapon"
									text="Switch Axe F"
									iconType="component"
									icon={getWeaponIcon('Switch Axe F')}
								/> instead.
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
