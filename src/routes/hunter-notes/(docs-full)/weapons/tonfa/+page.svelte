<script lang="ts">
	import { page } from '$app/stores';
	import InlineTooltip from '$lib/client/components/frontier/InlineTooltip.svelte';
	import HunterNotesPage from '$lib/client/components/HunterNotesPage.svelte';
	import PageTurn from '$lib/client/components/PageTurn.svelte';
	import SectionHeading from '$lib/client/components/SectionHeading.svelte';
	import SectionHeadingTopLevel from '$lib/client/components/SectionHeadingTopLevel.svelte';
	import { getMonsterIcon } from '$lib/client/modules/frontier/monsters';
	import { gameInfo } from '$lib/client/modules/frontier/objects';
	import { getWeaponIcon } from '$lib/client/modules/frontier/weapons';
	import ListItem from 'carbon-components-svelte/src/ListItem/ListItem.svelte';
	import Link from 'carbon-components-svelte/src/Link/Link.svelte';
	import UnorderedList from 'carbon-components-svelte/src/UnorderedList/UnorderedList.svelte';
	import Youtube from 'svelte-youtube-embed';
	import DataTable from 'carbon-components-svelte/src/DataTable/DataTable.svelte';
	import Toolbar from 'carbon-components-svelte/src/DataTable/Toolbar.svelte';
	import CopyButton from 'carbon-components-svelte/src/CopyButton/CopyButton.svelte';
	import Button from 'carbon-components-svelte/src/Button/Button.svelte';
	import Download from 'carbon-icons-svelte/lib/Download.svelte';
	import { downloadDomAsPng } from '$lib/client/modules/download';
	import { getCSVFromArray } from '$lib/client/modules/csv';
	import type { FrontierArmorSkillName, FrontierArmorSkillTree } from 'ezlion';
	import CenteredFigure from '$lib/client/components/CenteredFigure.svelte';
	import TonfaModes from '$lib/client/images/supplemental/tonfa-modes.webp';
	import TonfaRyuukiMeter from '$lib/client/images/supplemental/tonfa-meter-ryuuki.webp';
	import TonfaMeter from '$lib/client/images/supplemental/tonfa-meter.webp';
	import {
		getItemColor,
		getItemIcon,
	} from '$lib/client/modules/frontier/items';
	import CaravanGem from '$lib/client/components/frontier/icon/CaravanGem.svelte';
	import { getAilmentIcon } from '$lib/client/modules/frontier/ailments';
	import StarRating from '$lib/client/components/StarRating.svelte';

	const hidenSkills: {
		id: string;
		skill: FrontierArmorSkillName;
		points: string;
		description: string;
	}[] = [
		{
			id: '4',
			skill: 'Tonfa Tech Master', // TODO update ezlion?
			points: 'Twin Hiden, 30',
			description:
				'Sharpness level +1 is added to Tonfa Tech 【Piercing Phoenix】.',
		},
		{
			id: '3',
			skill: 'Tonfa Tech 【Piercing Phoenix】',
			points: '30',
			description: `Gives Super High-Grade Earplugs, Attack x1.2 when wielding Tonfa and Fencing+1. Adds one bar to each gauge in the Tonfa Meter.`,
		},
		{
			id: '2',
			skill: 'Tonfa Tech Kaiden',
			points: '20',
			description:
				'Increases attack by 1.1 and grants Fencing+1 when wielding Tonfa.',
		},
		{
			id: '1',
			skill: 'Tonfa Tech Expert',
			points: '10',
			description: 'Fencing+1 when wielding Tonfa.',
		},
		{
			id: '0',
			skill: 'Tonfa Tech Novice',
			points: '-10',
			description: 'Attack x0.8 when wielding Tonfa.',
		},
	];

	const iframes = [
		{
			id: 0,
			motion: 'Dodge',
			iframes: 6,
		},
		{
			id: 1,
			motion: 'EX Evade',
			iframes: 7,
		},
		{
			id: 2,
			motion: 'Burst Evasion',
			iframes: 13,
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
				'Adjusts the element hitzones by +5. Determination applies the effects of Dissolver without the need for hitzone requirements, effectively forcing element damage or reducing/negating negative hitzones.',
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
				'15 seconds uptime. The duration can be refreshed by successfully using i-frames again.',
		},
		{
			id: 3,
			skill: 'Stylish',
			description:
				'+5 sharpness recovery (+3/6/10 with Jump/Dash Kick/EX Evade or Emergency respectively). When using Stylish Up, get 4 free hits before sharpness is reduced.',
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
				'Max stack of 300 True Raw. Obscurity Up maxes out after two perfect guards, allowing subsequent guards to restore 5 or 13 sharpness depending on timing.',
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
				'27/1350/? total Motion Value to reach stage 1/2/3 respectively. The third stage, exclusive to Rush Up, has a limited duration.',
		},
		{
			id: 8,
			skill: 'Ceaseless',
			description:
				'11 seconds decay window. 15/36/43 hits required to reach stage 1/2/3 respectively (11/27/43 with Ceaseless Up). The third stage is also exclusive to Ceaseless Up, which decays by stages rather than all at once.',
		},
		{
			id: 9,
			skill: 'Point Breakthrough',
			description:
				'30 seconds duration. 16/10 hits to reach stages 1/2 respectively (13/8 with Fencing+2). The previously hit hitzone is more vulnerable at Stage 2, and Fencing +2 slightly eases activation.',
		},
		{
			id: 10,
			skill: 'Furious',
			description:
				'2/3/7 evasions or 1/2/5 perfect guards to reach stage 1/2/3 respectively. These effects apply to both successful evasions and perfect guards (where applicable), but attacking is necessary to advance stages.',
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
			sigil: 'EX Meter',
			rating: 1,
			description:
				'Increases the rate at which the EX Gauge fills when using Tonfas. Does not stack. Applicable to all Styles with EX gauge.',
			type: 'Tech Boost',
		},
		{
			id: 1,
			sigil: 'Combo Timer',
			rating: 1,
			description:
				'Slows the rate at which a combo (red bars) is dropped while using Tonfas. Does not stack. Applicable to all Styles with Combo Gauge.',
			type: 'Tech Boost',
		},
		{
			id: 5,
			sigil: 'Stun Value',
			rating: 3,
			description:
				'Increases KO damage by 1.1x. Only one sigil applies. Stacks with Caravan Skill (1.1x) and Active Feature (1.5x) for a maximum of 1.815x.',
			type: 'Other',
		},
	];
</script>

<HunterNotesPage displayTOC={true}>
	<section>
		<SectionHeadingTopLevel title={'Tonfa'} />
		<div>
			<div class="video">
				<Youtube id="J6AN4_ZogKA" />
			</div>
			<p class="spaced-paragraph">
				The <InlineTooltip
					tooltip="Weapon"
					text="Tonfa"
					iconType="component"
					icon={getWeaponIcon('Tonfa')}
				/> is a weapon introduced in <InlineTooltip
					tooltip="Game"
					text="Monster Hunter Frontier G Genuine"
					iconType="file"
					icon={gameInfo.find(
						(e) => e.name === 'Monster Hunter Frontier G Genuine',
					)?.icon}
				/>. As an Impact-type weapon, the more attacks you make with it, the
				more powerful it becomes. The Tonfa also offers the ability to guard and
				dash freely. It is unlocked by reaching G Rank.
			</p>
			<p class="spaced-paragraph">
				This weapon consists of two light, swift poles equipped with a
				propulsion system, allowing hunters to strike monsters multiple times in
				quick succession. Due to its light weight and propulsion system, hunters
				can easily evade while the weapon is drawn and even launch themselves
				off the ground. The propulsion system also enables a finishing move
				called the Ryuuki Finisher, where the <InlineTooltip
					tooltip="Weapon"
					text="Tonfa"
					iconType="component"
					icon={getWeaponIcon('Tonfa')}
				/> poles are rapidly jabbed at the monster with great force. When performed
				on sufficiently weakened parts of a monster, this move triggers explosions
				in those areas, identified by a red, wispy aura.
			</p>
			<p class="spaced-paragraph">
				When using Extreme Style, the Tonfa has two gauges (blue and red) that
				fills up when attacking monsters. The red gauge grants an attack boost,
				while the blue gauge enables EX Evades. The red gauge has 5 levels of
				boosts and a timer (6 when using the Piercing Phoenix Hiden skill). Each
				time the <InlineTooltip
					tooltip="Weapon"
					text="Tonfa"
					iconType="component"
					icon={getWeaponIcon('Tonfa')}
				/> strikes a monster, the timer fills for several seconds before gradually
				depleting, while the boost bar increases. If the timer runs out, all attack
				boosts are lost. Actions like flying, running and blocking slows down the
				timer; dodging can almost fully charge the gauge instantly. Each red stack
				gives +10% True Raw and better blue gauge recovery.
			</p>
			<CenteredFigure
				figcaption="Tonfa Gauge."
				alt="Tonfa Gauge"
				type="file"
				width="100%"
				src={TonfaMeter}
			/>
			<p class="spaced-paragraph">
				The <InlineTooltip
					tooltip="Weapon"
					text="Tonfa"
					iconType="component"
					icon={getWeaponIcon('Tonfa')}
				/> has two modes: long mode and short mode. Both modes share basic attack
				moves, <InlineTooltip
					tooltip="Ailment"
					text="Stun"
					iconType="component"
					icon={getAilmentIcon('Stun')}
				/> damage on head strikes, a finishing move, and pole launch, while also
				featuring unique moves and abilities.
			</p>

			<section>
				<SectionHeading level={2} title="Modes" />
				<div>
					<p class="spaced-paragraph">
						<strong>Long Mode:</strong> This mode deals normal impact zone damage.
						At the end of the main attack combo, the hunter can perform a charged
						attack. While in midair, pressing the secondary attack button triggers
						a spinning drop attack. All attacks in long mode deal Impact damage with
						standard Impact damage modifiers.
					</p>
					<CenteredFigure
						figcaption="Switching modes: notice the icon in the top left corner."
						alt="Switching modes"
						type="file"
						width="100%"
						src={TonfaModes}
					/>
					<p class="spaced-paragraph">
						<strong>Short Mode:</strong> In this mode, impact zone damage is reversed.
						At the end of the main attack combo, the hunter can unleash a quick series
						of swift attacks. While in midair, pressing the secondary attack button
						triggers a rolling kick that causes the hunter to bounce back and slightly
						upward if the attack hits a monster, allowing the hunter to stay airborne.
						In short mode, impact zone damage modifiers are inverted—the weakest
						Impact damage area becomes the most resistant, while the most resistant
						becomes the weakest. All other areas receive Impact damage adjustments
						based on the difference between the weakest and most resistant Impact
						damage zones.
					</p>
				</div>
			</section>

			<section>
				<SectionHeading level={2} title="Ryuuki Finisher" />
				<div>
					<p class="spaced-paragraph">
						The <InlineTooltip
							tooltip="Weapon"
							text="Tonfa"
							iconType="component"
							icon={getWeaponIcon('Tonfa')}
						/> finisher does more than just deliver the expected damage—it also triggers
						a delayed explosion at the affected points on a monster that has accumulated
						enough Dragon Spirit. This explosion occurs after the initial strike
						and is followed by a secondary effect, depending on which part of the
						monster was weakened during the finisher.
					</p>
					<CenteredFigure
						figcaption="Meter after Ryuuki Finisher."
						alt="Meter after Ryuuki Finisher"
						type="file"
						width="100%"
						src={TonfaRyuukiMeter}
					/>
					<UnorderedList class="spaced-list">
						<ListItem>
							<p>
								<InlineTooltip
									tooltip="List Item"
									text="Head: "
									icon={getItemIcon('Head')}
								/>
								The monster is enveloped in a burning, yellowish aura. During this
								time, all attacks will inflict +1 <InlineTooltip
									tooltip="Ailment"
									text="Stun"
									iconType="component"
									icon={getAilmentIcon('Stun')}
								/> damage, regardless of the damage type or where the monster is
								hit. Monsters that cannot be KOed (such as <InlineTooltip
									tooltip="Monster"
									text="Lao-Shan Lung"
									iconType="file"
									icon={getMonsterIcon('Lao-Shan Lung')}
								/>, <InlineTooltip
									tooltip="Monster"
									text="Fatalis"
									iconType="file"
									icon={getMonsterIcon('Fatalis')}
								/>, <InlineTooltip
									tooltip="Monster"
									text="Yama Tsukami"
									iconType="file"
									icon={getMonsterIcon('Yama Tsukami')}
								/>, and <InlineTooltip
									tooltip="Monster"
									text="Yama Kurai"
									iconType="file"
									icon={getMonsterIcon('Yama Kurai')}
								/>) will experience one of the other effects on their heads.
							</p>
						</ListItem>
						<ListItem>
							<p>
								<InlineTooltip
									tooltip="List Item"
									text="Body: "
									icon={getItemIcon('Monster Part')}
								/> The monster emits an orange aura. Hunters close enough to the
								monster will have a chance to recover a small amount of weapon sharpness
								and gain a temporary attack boost. Note that an active Heat Blade
								on a <InlineTooltip
									tooltip="Weapon"
									text="Gunlance"
									iconType="component"
									icon={getWeaponIcon('Gunlance')}
								/> will prevent sharpness restoration.
							</p>
						</ListItem>
						<ListItem>
							<p>
								<InlineTooltip
									tooltip="List Item"
									text="Tail: "
									icon={getItemIcon('Tail')}
								/> The monster's tail will be injured, left bleeding, and continue
								to take damage, even if it cannot be cut or has already been severed.
								The bleeding lasts for a short period and inflicts cutting damage.
								If enough damage is dealt to the tail during or before this state,
								the tail will be severed or broken. For monsters without a distinct
								tail hitzone (such as Iodrome, Lao-Shan Lung's neck, or Fatalis'
								wings), the bleeding effect will occur in another location.
							</p>
						</ListItem>
						<ListItem>
							<p>
								<InlineTooltip
									tooltip="List Item"
									text="Salvage: "
									icon={getItemIcon('Mantle')}
								/> This effect applies to all small monsters and a few large monsters'
								heads (like <InlineTooltip
									tooltip="Monster"
									text="Lao-Shan Lung"
									iconType="file"
									icon={getMonsterIcon('Lao-Shan Lung')}
								/>, <InlineTooltip
									tooltip="Monster"
									text="Fatalis"
									iconType="file"
									icon={getMonsterIcon('Fatalis')}
								/>, <InlineTooltip
									tooltip="Monster"
									text="Yama Tsukami"
									iconType="file"
									icon={getMonsterIcon('Yama Tsukami')}
								/>, and <InlineTooltip
									tooltip="Monster"
									text="Yama Kurai"
									iconType="file"
									icon={getMonsterIcon('Yama Kurai')}
								/>). If a Hunter inflicts enough Dragon Spirit on a small
								monster before slaying it, using the finisher will cause the
								monster to drop a shiny item, based on the monster's carve
								rates.
							</p>
						</ListItem>
					</UnorderedList>
				</div>
			</section>

			<section>
				<SectionHeading level={2} title="Iframes" />
				<div>
					<div class="table">
						<DataTable
							useStaticWidth
							id="iframes-dom"
							sortable
							zebra
							size="medium"
							headers={[
								{ key: 'motion', value: 'Motion' },
								{ key: 'iframes', value: 'I-frames' },
							]}
							rows={iframes}
							><Toolbar
								><div class="toolbar">
									<CopyButton
										iconDescription={'Copy as CSV'}
										text={getCSVFromArray(iframes)}
									/>
									<Button
										kind="tertiary"
										icon={Download}
										on:click={() =>
											downloadDomAsPng('iframes-dom', 'tonfa-iframes')}
										>Download</Button
									>
								</div>
							</Toolbar>

							<svelte:fragment slot="cell" let:cell>
								<p>{cell.value}</p>
							</svelte:fragment>
						</DataTable>
					</div>

					<p>
						For more information on motion values, see the <Link
							inline
							href="/tools/calculator/damage">Damage Calculator.</Link
						>
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
						All Ryuuki finisher (i.e. explosion) effects buffed. Head: KO
						duration from 20s to 30s. Tail: Bleeding 1.5x damage. Body:
						Sharpness return from 15 to 20. Gunner Attack Up from 25 to 50.
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
									on:click={() => downloadDomAsPng('hiden-dom', 'tonfa-hiden')}
									>Download</Button
								>
							</div>
						</Toolbar>

						<svelte:fragment slot="cell" let:cell>
							{#if cell.value[0] == '-'}
								<p style:color="var(--ctp-red)">{cell.value}</p>
							{:else}
								<p>{cell.value}</p>
							{/if}
						</svelte:fragment>
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

							<svelte:fragment slot="cell" let:cell>
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
							</svelte:fragment>
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

							<svelte:fragment slot="cell" let:cell>
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
							</svelte:fragment>
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
								Accumulating 30 points in the Tonfa Tech skill adds an
								additional bar to the <InlineTooltip
									tooltip="Weapon"
									text="Tonfa"
									iconType="component"
									icon={getWeaponIcon('Tonfa')}
								/> meter.
							</p></ListItem
						>
						<ListItem
							><p>
								The Earth, Heaven, and Storm Hunting Styles for the <InlineTooltip
									tooltip="Weapon"
									text="Tonfa"
									iconType="component"
									icon={getWeaponIcon('Tonfa')}
								/> are distinct from each other, each using different types of gauges.
							</p></ListItem
						>
						<ListItem
							><p>
								The ability to alter how you deal Impact damage makes <InlineTooltip
									tooltip="Weapon"
									text="Tonfas"
									iconType="component"
									icon={getWeaponIcon('Tonfa')}
								/>
								highly versatile, but also more challenging for inexperienced users.
							</p></ListItem
						>
						<ListItem
							><p>
								Understanding the hitzone values on monsters is crucial to
								maximizing the effectiveness of the <InlineTooltip
									tooltip="Weapon"
									text="Tonfa"
									iconType="component"
									icon={getWeaponIcon('Tonfa')}
								/>.
							</p></ListItem
						>
						<ListItem
							><p>
								<InlineTooltip
									tooltip="Weapon"
									text="Tonfas"
									iconType="component"
									icon={getWeaponIcon('Tonfa')}
								/> can be very effective in team hunts, as well-placed finishers
								can benefit all members.
							</p></ListItem
						>
						<ListItem
							><p>
								<InlineTooltip
									tooltip="Weapon"
									text="Tonfas"
									iconType="component"
									icon={getWeaponIcon('Tonfa')}
								/> are naturally fast-hitting weapons with high mobility, making
								it essential to manage their sharpness carefully with skills like
								<InlineTooltip
									tooltip="Armor Skill"
									text="Razor Sharp"
									iconType="component"
									icon={getItemIcon('Jewel')}
								/>.
							</p></ListItem
						>
						<ListItem
							><p>
								The <InlineTooltip
									tooltip="Armor Skill"
									text="Fencing+2"
									iconType="component"
									icon={getItemIcon('Jewel')}
								/> skill works exceptionally well with <InlineTooltip
									tooltip="Weapon"
									text="Tonfas"
									iconType="component"
									icon={getWeaponIcon('Tonfa')}
								/>, making <InlineTooltip
									tooltip="Armor Skill"
									text="Sword God"
									iconType="component"
									icon={getItemIcon('Jewel')}
								/> an ideal skill to use.
							</p></ListItem
						>
						<ListItem
							><p>
								Using the finisher move without having inflicted any Dragon
								Spirit will result in minimal damage and leave the hunter
								vulnerable. This move also consumes a significant amount of
								sharpness, regardless of whether it hits anything.
							</p></ListItem
						>
						<ListItem
							><p>
								One of the ground-based attacks has a parrying ability if timed
								correctly.
							</p></ListItem
						><ListItem
							><p>
								Consider always using Long Mode: it has a higher stun value than
								Short Mode, whose stun value is 80% and has less range. Short
								mode also has more hitlag and EX recovery.
							</p></ListItem
						><ListItem
							><p>
								Using <InlineTooltip
									tooltip="Armor Skill"
									text="Trained+2"
									iconType="component"
									icon={getItemIcon('Jewel')}
								/> can help you stay in the air longer.
							</p></ListItem
						>
						<ListItem
							><p>
								Due to the way the combo meter boosts raw damage, <InlineTooltip
									tooltip="Weapon"
									text="Tonfa"
									iconType="component"
									icon={getWeaponIcon('Tonfa')}
								/> requires a much higher My Mission attack threshold than most other
								weapons.
							</p></ListItem
						>
						<ListItem
							><p>
								Long mode is the default and deals more <InlineTooltip
									tooltip="Ailment"
									text="Stun"
									iconType="component"
									icon={getAilmentIcon('Stun')}
								/> damage. Short mode has been reworked to focus on meter gain, but
								it has significant hitlag and isn't very effective outside of using
								the dash attack to build meter.
							</p></ListItem
						>
						<ListItem
							><p>
								Guard points exist on some attacks, but they aren't very
								practical to use. Additionally, obtaining <InlineTooltip
									tooltip="Armor Skill"
									text="Iron Arm"
									iconType="component"
									icon={getItemIcon('Jewel')}
								/> on modern sets is quite difficult.
							</p></ListItem
						>
						<ListItem
							><p>
								The Ryuuki finisher replenishes the meters of all nearby <InlineTooltip
									tooltip="Weapon"
									text="Tonfa"
									iconType="component"
									icon={getWeaponIcon('Tonfa')}
								/>
								players and can also be triggered by Tonfa-wielding hunter NPCs.
								While these bursts provide some additional benefits, most of them
								are relatively minor.
							</p></ListItem
						>
						<ListItem
							><p>
								To maintain your combo meter, simply hit or evade enemies. The
								timer generally slows down if the monster is performing a
								lengthy attack during which you can't or shouldn't be attacking.
							</p></ListItem
						>
						<ListItem><p>EX Evasion only costs meter, not stamina.</p></ListItem
						>
						<ListItem
							><p>
								EX Pursuit (charged jab + meter) benefits from <InlineTooltip
									tooltip="Armor Skill"
									text="Gunnery"
									iconType="component"
									icon={getItemIcon('Jewel')}
								/>
								(available via <InlineTooltip
									tooltip="Armor Skill"
									text="Blazing Majesty"
									iconType="component"
									icon={getItemIcon('Jewel')}
								/>), <InlineTooltip
									tooltip="Armor Skill"
									text="Charge Attack Up"
									iconType="component"
									icon={getItemIcon('Jewel')}
								/>, and <InlineTooltip
									tooltip="Armor Skill"
									text="Focus"
									iconType="component"
									icon={getItemIcon('Jewel')}
								/>, but is quite costly compared to airdash spam.
							</p></ListItem
						>
						<ListItem
							><p>
								Similar to <InlineTooltip
									tooltip="Weapon"
									text="Sword and Shield"
									iconType="component"
									icon={getWeaponIcon('Sword and Shield')}
								/>, two well-timed blocks with the <InlineTooltip
									tooltip="Caravan Skill"
									text="Perfect Defense"
									iconType="component"
									icon={CaravanGem}
								/> caravan skill, along with <InlineTooltip
									tooltip="Zenith Skill"
									text="Obscurity Up"
									iconType="component"
									iconColor={getItemColor('Red')}
									icon={getItemIcon('Jewel')}
								/>, can boost raw damage by 300 until you get knocked back.
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
