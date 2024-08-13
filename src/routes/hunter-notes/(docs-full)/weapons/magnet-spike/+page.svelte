<script lang="ts">
	import { page } from '$app/stores';
	import InlineTooltip from '$lib/client/components/frontier/InlineTooltip.svelte';
	import Weapon from '$lib/client/components/frontier/Weapon.svelte';
	import HunterNotesPage from '$lib/client/components/HunterNotesPage.svelte';
	import PageTurn from '$lib/client/components/PageTurn.svelte';
	import SectionHeading from '$lib/client/components/SectionHeading.svelte';
	import SectionHeadingTopLevel from '$lib/client/components/SectionHeadingTopLevel.svelte';
	import { LocationIcons } from '$lib/client/modules/frontier/locations';
	import { monsterInfo } from '$lib/client/modules/frontier/monsters';
	import { gameInfo } from '$lib/client/modules/frontier/objects';
	import { getWeaponIcon } from '$lib/client/modules/frontier/weapons';
	import ListItem from 'carbon-components-svelte/src/ListItem/ListItem.svelte';
	import OrderedList from 'carbon-components-svelte/src/OrderedList/OrderedList.svelte';
	import Link from 'carbon-components-svelte/src/Link/Link.svelte';
	import UnorderedList from 'carbon-components-svelte/src/UnorderedList/UnorderedList.svelte';
	import Youtube from 'svelte-youtube-embed';
	import { onMount } from 'svelte';
	import { theme } from '$lib/client/stores/theme';
	import mermaid from 'mermaid';
	import { browser } from '$app/environment';
	import Loading from 'carbon-components-svelte/src/Loading/Loading.svelte';
	import DataTable from 'carbon-components-svelte/src/DataTable/DataTable.svelte';
	import Toolbar from 'carbon-components-svelte/src/DataTable/Toolbar.svelte';
	import CopyButton from 'carbon-components-svelte/src/CopyButton/CopyButton.svelte';
	import Button from 'carbon-components-svelte/src/Button/Button.svelte';
	import Download from 'carbon-icons-svelte/lib/Download.svelte';
	import { downloadDomAsPng } from '$lib/client/modules/download';
	import { getCSVFromArray } from '$lib/client/modules/csv';
	import type { FrontierArmorSkillName } from 'ezlion';
	import CenteredFigure from '$lib/client/components/CenteredFigure.svelte';
	import MSMarkers from '$lib/client/images/supplemental/ms-markers.webp';
	import MSMark from '$lib/client/images/supplemental/ms-mark.webp';
	import MSMagnetize from '$lib/client/images/supplemental/ms-magnetize.webp';
	import MSGauges from '$lib/client/images/supplemental/ms-gauges.webp';
	import MSPinReady from '$lib/client/images/supplemental/ms-pin-ready.webp';
	import MSPin from '$lib/client/images/supplemental/ms-pin.webp';
	import { getItemIcon } from '$lib/client/modules/frontier/items';

	const hidenSkills: {
		id: string;
		skill: FrontierArmorSkillName;
		points: string;
		description: string;
	}[] = [
		{
			id: '4',
			skill: 'Magspike Tech Master', // TODO update ezlion?
			points: 'Twin Hiden, 30',
			description:
				'Sharpness level +1 is added to Magspike Tech 【Magnetic Star】.',
		},
		{
			id: '3',
			skill: 'Magspike Tech 【Magnetic Star】',
			points: '30',
			description: `Increases attack by 1.2, grants Fencing+1 and Super High-Grade Earplugs when wielding a Magnet Spike. Successful evasive motions boost attacks by 1.03 and  increases gauge recovery by 1.5 for 30 seconds. Increases movement speed by 1.2. Magnetic target marker does not disappear.`,
		},
		{
			id: '2',
			skill: 'Magspike Tech Kaiden',
			points: '20',
			description:
				'Increases attack by 1.1 and grants Fencing+1 when wielding a Magnet Spike.',
		},
		{
			id: '1',
			skill: 'Magspike Tech Expert',
			points: '10',
			description: 'Fencing+1 when wielding a Magnet Spike.',
		},
		{
			id: '0',
			skill: 'Magspike Tech Novice',
			points: '-10',
			description: 'Attack x0.8 when wielding a Magnet Spike.',
		},
	];

	const iframes = [
		{
			id: '0',
			motion: 'Magnetic Attraction',
			iframes: '17',
			mode: 'Cutting',
		},
		{
			id: '1',
			motion: 'Magnetic Repulsion',
			iframes: '24',
			mode: 'Cutting',
		},
		{
			id: '2',
			motion: 'Falling Slash',
			iframes: '?',
			mode: 'Cutting',
		},
		{
			id: '3',
			motion: 'Magnetic Evasion',
			iframes: '17',
			mode: 'Cutting',
		},
		{
			id: '4',
			motion: 'Retreat Slash',
			iframes: '17',
			mode: 'Cutting',
		},
		{
			id: '5',
			motion: 'Magnetic Assault',
			iframes: '17',
			mode: 'Cutting',
		},
		{
			id: '6',
			motion: 'Magnetic Double Slash',
			iframes: '17',
			mode: 'Cutting',
		},
		{
			id: '7',
			motion: 'Magnetic Attraction',
			iframes: '17',
			mode: 'Impact',
		},
		{
			id: '8',
			motion: 'Magnetic Attraction',
			iframes: '24',
			mode: 'Impact',
		},
		{
			id: '9',
			motion: 'Falling Swipe',
			iframes: '?',
			mode: 'Impact',
		},
		{
			id: '10',
			motion: 'Just Guard',
			iframes: '19',
			mode: 'Impact',
		},
		{
			id: '11',
			motion: 'Guard Assault',
			iframes: '17',
			mode: 'Impact',
		},
		{
			id: '12',
			motion: 'Magnetic Force',
			iframes: '17',
			mode: 'Impact',
		},
		{
			id: '13',
			motion: 'Magnetic Evasion',
			iframes: '17',
			mode: 'Impact',
		},
		{
			id: '14',
			motion: 'Magnetic Assault',
			iframes: '17',
			mode: 'Impact',
		},
		{
			id: '15',
			motion: 'Magnetic Double Slash',
			iframes: '17',
			mode: 'Impact',
		},
	];

	function getDiagram(mermaidTheme: string) {
		return `\
	%%{init: {'theme':'${mermaidTheme}'}}%%

graph LR
    subgraph Cutting[Cutting Mode]
				subgraph CuttingMagneticField[Magnetic Field]
					A[Magnetic Marker]
					B[Magnetic Attraction] -->|falling| D[Falling Slash]
					B -->|falling| E[Approach Cancel]
					C[Magnetic Repulsion] --> B
				end

        F[Vertical 1] --> G[Upslash]
        G --> H[Vertical 2]
        I[Horizontal 1] --> J[Horizontal 2]
        J --> K[Horizontal 3]
				F <--> I
				G --> I
				J --> H
				K <--> H
				K --> I

				CuttingGuard[Guard Counter] --> CuttingFinish[Finishing Slash]
				CuttingMagnetize[Magnetize]
				K --> CuttingFinish
				H --> CuttingFinish
				CuttingEvasion[Magnetic Evasion]
				CuttingRetreat[Retreat Slash]
				CuttingAssault[Magnetic Assault]
				CuttingDouble[Magnetic Double Slash]

				CuttingAssault --> G
    end

		subgraph Impact[Impact Mode]
			subgraph ImpactMagneticField[Magnetic Field]
        O[Magnetic Marker]
        P[Magnetic Attraction] -->|falling| R[Falling Swipe]
				P -->|falling| S[Approach Cancel]
        Q[Magnetic Repulsion] --> P
			end

        T[Horizontal 1] --> U[Horizontal 2]
        U --> V[Overhead Horizontal]
        V --> W[Suplex]

				Z[Triple Slash 1] --> AA[Triple Slash 2]
        AA --> AB[Triple Slash 3]


        X[Downswipe] <--> V
				X --> Z
				T --> X
				U --> Z
				U <--> X


        AC[Magnetize]
				ImpactGuard[Guard Assault]
				ImpactJustGuard[Just Guard]
        AD[Magnetic Double Slash] --> W
				AE[Magnetic Force] --> W
				ImpactEvasion[Magnetic Evasion] --> AE
				ImpactAssault[Magnetic Assault] --> W

				V --> T
				AB --> W
				ImpactJustGuard --> ImpactGuard
				AA -->|timed release| Y
				Y[Charged Slash] --> W
    end

		L[Transform Attack] --> I
		L --> J
		L --> K
		L --> T
		L --> U
		L --> V
		M[Switch] --> Cutting
		M[Switch] --> Impact
		N[Magnetic Pin]
		AD --> N
		H --> F
		CuttingDouble --> N

		AF[Recovery]
		Run[Unsheated Running]
		PinFinisher[Pin Finisher]
		N --> PinFinisher
`;
	}

	let container: { innerHTML: string };

	let mermaidTheme = $theme === 'g10' ? 'default' : 'dark';

	// The default diagram
	let diagram = getDiagram(mermaidTheme);

	$: diagram && renderDiagram($theme, mermaidTheme);

	onMount(() => {
		mermaid.initialize({
			startOnLoad: false,
			flowchart: { useMaxWidth: false },
			fontFamily: 'IBM Plex Sans',
		});
		mermaid.contentLoaded();
	});

	async function renderDiagram(siteTheme: string, mermaidTheme: string) {
		if (!browser) return;
		mermaidTheme = siteTheme === 'g10' ? 'default' : 'dark';
		const { svg } = await mermaid.render('mermaid', getDiagram(mermaidTheme));
		container.innerHTML = svg;
	}
</script>

<HunterNotesPage displayTOC={true}>
	<section>
		<SectionHeadingTopLevel title={'Magnet Spike'} />
		<div>
			<div class="video">
				<Youtube id="rqfFAXVW-dw" />
			</div>
			<p class="spaced-paragraph">
				A versatile weapon, first introduced in <InlineTooltip
					tooltip="Game"
					text="Monster Hunter Frontier Z Zenith"
					iconType="file"
					icon={gameInfo.find(
						(e) => e.name === 'Monster Hunter Frontier Z Zenith',
					)?.icon}
				/>, with two modes: cutting and impact. Each mode deals the
				corresponding type of damage and have different reach. The key feature
				of the <InlineTooltip
					tooltip="Weapon"
					text="Magnet Spike"
					iconType="component"
					icon={getWeaponIcon('Magnet Spike')}
				/> is its magnetism abilities, derived from the large red and blue phials
				inside the weapon. Despite being a large and heavy weapon, the manipulation
				of magnetic forces lifts most of the weight, allowing for unnaturally fast
				movement.
			</p>
			<p class="spaced-paragraph">
				Resembling the magnetic abilities of a <InlineTooltip
					tooltip="Monster"
					text="Rukodiora"
					iconType="file"
					icon={monsterInfo.find((e) => e.displayName === 'Rukodiora')?.icon}
				/>, the <InlineTooltip
					tooltip="Weapon"
					text="Magnet Spike"
					iconType="component"
					icon={getWeaponIcon('Magnet Spike')}
				/> can quickly close or create distances using attraction and repulsion forces,
				with well-timed evades for counterattacks and guard points to create greater
				openings. Unlike other form-changing weapons like the <InlineTooltip
					tooltip="Weapon"
					text="Switch Axe F"
					iconType="component"
					icon={getWeaponIcon('Switch Axe F')}
				/> and Charge Blade, the <InlineTooltip
					tooltip="Weapon"
					text="Magnet Spike"
					iconType="component"
					icon={getWeaponIcon('Magnet Spike')}
				/> can use most of its moveset in either form at any time, allowing the user
				to choose the most useful form as needed.
			</p>
			<p class="spaced-paragraph">
				The user is also equipped with a "Magnetic Field Gun", which fires a
				small magnetic sphere that sticks to monsters. This allows the user to
				lock onto a specific location and use magnetic attraction to travel from
				a much greater distance or use repulsion force for a long-distance
				evade.
			</p>
			<p class="spaced-paragraph">
				<InlineTooltip
					tooltip="Weapon"
					text="Magnet Spikes"
					iconType="component"
					icon={getWeaponIcon('Magnet Spike')}
				/> do not have any non-standard elements compared to other weapons; they
				lack phials and length. Their attack multiplier is 5.4, rounded up.
			</p>
			<section>
				<SectionHeading level={2} title="Unlocking" />
				<div>
					<p class="spaced-paragraph">
						To unlock <InlineTooltip
							icon={getWeaponIcon('Magnet Spike')}
							tooltip="Weapon"
							text="Magnet Spikes"
							iconType="component"
						/>, you must complete a series of solo-only G Rank quests. These
						quests are not particularly difficult, but you might need the first
						free GR set to finish them efficiently. Here's a brief guide to the
						unlocking process:
					</p>
					<OrderedList class="spaced-list">
						<ListItem
							><p>
								Talk to the <InlineTooltip
									icon={LocationIcons.find((e) => e.name === 'Blacksmith')
										?.icon}
									tooltip="Location"
									text="Smithy"
									iconType="file"
								/>.
							</p></ListItem
						>
						<ListItem
							><p>
								Visit the <InlineTooltip
									icon={LocationIcons.find((e) => e.name === 'Rasta Bar')?.icon}
									tooltip="Location"
									text="Rasta Bar"
									iconType="file"
								/> and speak with the NPC equipped with a Magnet Spike, Graham.
							</p></ListItem
						>
						<ListItem
							><p>
								Talk to the Apprentice Cat found at the entrance of <InlineTooltip
									icon={LocationIcons.find((e) => e.name === 'Mezeporta')?.icon}
									tooltip="Location"
									text="Mezeporta"
									iconType="file"
								/>.
							</p></ListItem
						>
						<ListItem
							><p>
								Go back and talk to Graham, then talk to the combiner in the
								town square.
							</p></ListItem
						>
						<ListItem
							><p>
								Speak with Graham again, then the combiner in the town square.
							</p></ListItem
						>
						<ListItem
							><p>
								Talk to the G Rank quest receptionist, giving you a quest to
								hunt G Rank <InlineTooltip
									icon={monsterInfo.find((e) => e.name === 'Gougarf')?.icon}
									tooltip="Monster"
									text="Gougarf"
									iconType="file"
								/>.
							</p></ListItem
						>
						<ListItem
							><p>
								Talk to Graham again then the combiner found by the store.
							</p></ListItem
						>
						<ListItem
							><p>
								Hunt the <InlineTooltip
									icon={monsterInfo.find((e) => e.displayName === 'Rebidiora')
										?.icon}
									tooltip="Monster"
									text="Rebidiora"
									iconType="file"
								/> at the top of the quest list.
							</p></ListItem
						>
						<ListItem
							><p>
								Talk to Graham, then <InlineTooltip
									icon={LocationIcons.find((e) => e.name === 'Blacksmith')
										?.icon}
									tooltip="Location"
									text="Smithy"
									iconType="file"
								/>, then Graham again, then the <InlineTooltip
									icon={LocationIcons.find((e) => e.name === 'Road')?.icon}
									tooltip="Location"
									text="Road"
									iconType="file"
								/> quest receptionist.
							</p></ListItem
						>
						<ListItem
							><p>
								Post the GHC <InlineTooltip
									icon={monsterInfo.find((e) => e.displayName === 'Rukodiora')
										?.icon}
									tooltip="Monster"
									text="Rukodiora"
									iconType="file"
								/> quest and hunt it.
							</p></ListItem
						>
						<ListItem
							><p>
								Talk to Graham and then the <InlineTooltip
									icon={LocationIcons.find((e) => e.name === 'Blacksmith')
										?.icon}
									tooltip="Location"
									text="Smithy"
									iconType="file"
								/>.
							</p></ListItem
						>
						<ListItem
							><p>
								After all that you’ve unlocked magnet spike! 🎉 You should get a
								material to make the <InlineTooltip
									icon={getWeaponIcon('Magnet Spike')}
									tooltip="Weapon"
									text="Protospike α"
									iconType="component"
								/> Magnet Spike.
							</p></ListItem
						>
					</OrderedList>
					<div class="weapon-container">
						<Weapon
							name="Protospike α"
							level={0}
							sharpnessBoost={false}
							weaponType="G Rank"
							weaponID={13}
							attack={2970}
							length="Medium"
							affinity={36}
							rarity={9}
							element=""
							sigils={[
								'',
								'',
								'',
								'',
								'',
								'',
								'',
								'',
								'',
								'',
								'',
								'',
								'',
								'',
								'',
								'',
							]}
							sigilPoints={[0, 0, 0, 0, 0, 0, 0, 0, 0]}
							rank="G"
							status=""
							sharpnessValues={[100, 100, 100, 130, 160, 230, 310, 310]}
						/>
					</div>
				</div>
			</section>

			<section>
				<SectionHeading level={2} title="Usage" />
				<div>
					<p class="spaced-paragraph">
						The Magnet Spike's magnetism grants it high versatility and a high
						skill ceiling. While most actions are shared between both forms,
						some offer unique options. Attacking with this weapon gradually
						magnetizes it, entering a "Magnetic Boost" state that increases
						attack power. Landing attacks also magnetizes monsters; once fully
						magnetized, the "Magnetic Bind" attack can be used. This binds the
						monster in a strong magnetic field, with the hunter sustaining the
						field by repeatedly pressing select buttons. Holding it long enough
						allows for a powerful finishing attack.
					</p>
					<p class="spaced-paragraph">
						Magnet Spikes feature two modes: Cutting and Impact. You can switch
						between these modes at any time, even while unsheathed. Each mode
						has its own attack style:
					</p>
					<UnorderedList>
						<ListItem
							><p>
								<strong>Cutting Mode:</strong> Fast attacks and evasions similar
								to <InlineTooltip
									icon={getWeaponIcon('Dual Swords')}
									tooltip="Weapon"
									text="Dual Swords"
									iconType="component"
								/>.
							</p></ListItem
						>
						<ListItem
							><p>
								<strong>Impact Mode:</strong>
								Slower, heavy-hitting single attacks with quick swipes and a fast
								charge.
							</p></ListItem
						>
					</UnorderedList>
					<p class="spaced-paragraph">
						At any time in either mode, you can toggle aiming mode, which allows
						you to shoot a Magnetic Marker on a monster or attract toward or
						repel away from an already placed marker.
					</p>

					<CenteredFigure
						figcaption="The markers from left to right: Unmarked, repulsion, attraction."
						alt="Magnet Spike markers"
						type="file"
						width="100%"
						src={MSMarkers}
					/>
					<CenteredFigure
						figcaption="A marked Pokara."
						alt="Magnet Spike mark"
						type="file"
						width="100%"
						src={MSMark}
					/>
					<p class="spaced-paragraph">
						Whether you attract or repel depends on your distance from the
						monster. If you are too close, you can only repel (Blue). If you are
						too far, no action is possible (White). Being at the proper distance
						allows you to attract (Red). Attraction will chase the monster as
						long as you follow a linear path toward it and can be canceled into
						an evade or a powerful falling attack.
					</p>

					<CenteredFigure
						figcaption="The gauges from top to bottom: repulsion, attraction, not attracted."
						alt="Magnet Spike gauges"
						type="file"
						width="100%"
						src={MSGauges}
					/>

					<p class="spaced-paragraph">
						Both modes charge as you use them. When their icon turns red, you
						can magnetize the weapon, which buffs all attacks by 1.1x, similar
						to a power phial, and adds additional hits to select attacks for 80
						seconds.
					</p>

					<CenteredFigure
						figcaption="A magnetized Magnet Spike; notice the icon in the top left corner."
						alt="Magnet Spike magnetized"
						type="file"
						width="100%"
						src={MSMagnetize}
					/>
					<p class="spaced-paragraph">
						After the magnetism mode expires, you will be locked out of gaining
						progress towards it for a short period. Both modes charge
						independently and can be left at the red charge level indefinitely,
						to be activated whenever you wish.
					</p>
					<p class="spaced-paragraph">
						Each mode has a gauge used for actions such as evasion, attracting
						and repelling from a monster, and initiating the Magnetic Pin attack
						(covered below). This gauge recharges over time and while attacking
						a monster.
					</p>
					<p class="spaced-paragraph">
						The gauge also indicates if you can use the Attract and Repel
						functions, which launch you into the air to chase the magnetic
						marker on a monster. Every action that consumes gauge will use a
						single bar.
					</p>
					<p class="spaced-paragraph">
						The magnetic pin is similar to a standard status effect. If you hit
						the monster with enough attacks, it will get a moving magnetism
						effect on its body, indicating it is ready to be pinned.
					</p>

					<CenteredFigure
						figcaption="Pin ready effect."
						alt="Magnet Spike pin ready"
						type="file"
						width="100%"
						src={MSPinReady}
					/>

					<p class="spaced-paragraph">
						Pinning can be done from either Magnetic Double Slash or Double
						Swipe. This causes you to leap into the air and slam down your
						Magnet Spike, pinning the monster and initiating a Quick Time Event
						that keeps the monster in place until you either perform the pin or
						fail the Quick Time Event.
					</p>

					<p class="spaced-paragraph">
						The Quick Time Event will indicate what you have to mash
						directionally and button-wise. Mashing well enough will cause the
						monster icon's face to turn red, allowing you to perform a Pin
						Finisher. This move has a very high motion value, causes the monster
						to fall over, and extends the time the monster is trapped due to the
						finisher's lengthy animation.
					</p>

					<CenteredFigure
						figcaption="Pin."
						alt="Magnet Spike pin"
						type="file"
						width="100%"
						src={MSPin}
					/>

					<p class="spaced-paragraph">
						The finisher is notable because it targets the spot where you have
						attached the magnetic marker. This allows you to select the best
						hitzone or the most desirable parts to break on a monster. For
						tails, this deals cutting damage but can only reduce a tail to 1HP,
						allowing any single cutting damage hit to sever it immediately.
					</p>

					<section>
						<SectionHeading level={3} title="Shared Traits" />
						<div>
							<UnorderedList>
								<ListItem
									><p>
										After using the Magnetic Field Gun on a monster, hunters can
										perform "Magnetic Field Approach" and "Magnetic Field
										Withdrawal" actions in either form to attack or evade over
										great distances.
									</p></ListItem
								>
								<ListItem
									><p>
										Both forms can execute the "Magnetic Force Evade" for quick
										short-distance evasion.
									</p>
								</ListItem>
								<ListItem
									><p>
										"Magnetic Field Assault" is a mid-distance attack that
										launches hunters toward a target.
									</p>
								</ListItem>
								<ListItem
									><p>Guarding and countering are possible in either form.</p>
								</ListItem>
								<ListItem
									><p>
										Attacking in either form contributes to entering the
										Magnetic Boost state and magnetizing monsters.
									</p>
								</ListItem>
							</UnorderedList>
						</div>
					</section>

					<section>
						<SectionHeading level={3} title="Cutting Mode" />
						<div>
							<UnorderedList>
								<ListItem
									><p>
										Two standard 4-hit combos: one focused on vertical swings
										and the other on horizontal swings.
									</p>
								</ListItem>
								<ListItem
									><p>
										The Magnetic Force Evade can be used to evade and attack
										simultaneously with a Double Slash forward or a Fade Slash
										backward. Left and right evasions have no attack actions.
									</p>
								</ListItem>
								<ListItem
									><p>
										Hunters can guard at any point, automatically performing a
										light counter hit.
									</p>
								</ListItem>
								<ListItem
									><p>
										Guarding a monster attack charges the Magnet Spike and
										boosts the counter hit.
									</p>
								</ListItem>
								<ListItem
									><p>
										Magnetic Bind is usable once a monster is fully magnetized.
									</p>
								</ListItem>
							</UnorderedList>
						</div>
					</section>
					<section>
						<SectionHeading level={3} title="Impact Mode" />
						<div>
							<UnorderedList>
								<ListItem
									><p>
										A standard 4-hit combo consisting of slow, wide swings that
										end with a suplex, which can also be used as a standalone
										attack.
									</p>
								</ListItem>
								<ListItem
									><p>
										A triple pound attack that can be initiated from idle or
										mid-combo.
									</p>
								</ListItem>
								<ListItem
									><p>
										The Magnetic Force Evade can be used to evade and attack
										simultaneously when performed in front of the hunter. A
										counterattack can be launched after evading to the side or
										behind.
									</p>
								</ListItem>
								<ListItem
									><p>
										Evading a monster attack charges up for a stronger
										counterattack.
									</p>
								</ListItem>
								<ListItem
									><p>
										Performing a well-timed guard charges the Magnet Spike for a
										powerful counterattack.
									</p>
								</ListItem>
							</UnorderedList>
						</div>
					</section>
				</div>
			</section>

			<section>
				<SectionHeading level={2} title="Moveset" />
				<div>
					<p class="spaced-paragraph">
						The flowchart below is based on the official manual.
					</p>
					<div class="mermaid-container">
						<!-- TODO: not responsive-->
						{#if !browser}
							<Loading withOverlay={false} />
						{:else}
							<pre><code bind:this={container} /></pre>
						{/if}
					</div>
					<p>
						For more information on motion values, see the <Link
							inline
							href="/tools/calculator/damage">Damage Calculator.</Link
						>
					</p>
					<section>
						<SectionHeading level={3} title="Iframes" />
						<div>
							<p class="spaced-paragraph">
								Cutting Mode moves with invincibility frames: Magnetic Double
								Slash, Retreat Slash, Magnetic Assault and Falling Downslash.
							</p>
							<p class="spaced-paragraph">
								Impact Mode moves with invincibility frames: Guard Assault,
								Magnetic Double Swipe, Magnetic Assault and Falling Swipe.
							</p>
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
										{ key: 'mode', value: 'Mode' },
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
													downloadDomAsPng(
														'iframes-dom',
														'magnet-spike-iframes',
													)}>Download</Button
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
						Increases Pin finisher multiplier by 1.25x (from 600 motion value to
						750 motion value). x1.1 Cutting damage to the tail in cutting mode.
						x1.3 Stun value in impact mode.
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
									on:click={() =>
										downloadDomAsPng('hiden-dom', 'magnet-spike-hiden')}
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
				<SectionHeading level={2} title="Tips and Tricks" />
				<div>
					<UnorderedList>
						<ListItem
							><p>
								The pin attack applies damage to the spot where you've placed a
								marker on a monster, allowing for quicker part breaks.
							</p></ListItem
						>
						<ListItem
							><p>
								The reliability of pinning depends on the current area host. If
								you are not the host, there is a chance it can fail. NPCs are
								tied to their host player in this context.
							</p></ListItem
						>
						<ListItem
							><p>
								Pay attention to whether you are running unsheathed, as this can
								limit your attack options.
							</p></ListItem
						>
						<ListItem
							><p>
								Falling attacks via magnetic attraction have generous motion
								values and invincibility frames (i-frames).
							</p></ListItem
						>
						<ListItem
							><p>
								Basic cutting attacks have a large window between each, allowing
								for roll cancellations or delayed attacks.
							</p></ListItem
						>
						<ListItem
							><p>
								The cutting mode's guard motion acts as a guard point attack. It
								can chain into the Finishing Slash, a magnetic dodge for more
								intangibility, or another guard attack.
							</p></ListItem
						>
						<ListItem
							><p>
								The impact mode's guard has fixed knockback. The rebounding
								attack is similar to Magnetic Assault but doesn’t chain into any
								meter attacks. It can be roll canceled and has i-frames.
							</p></ListItem
						>
						<ListItem
							><p>
								There is an official second control bindings menu for the
								weapon, but only the approach cancel is bound by default for PSP
								controls in that menu.
							</p></ListItem
						>
						<ListItem
							><p>
								The <InlineTooltip
									tooltip="Weapon"
									text="Magnet Spike"
									icon={getWeaponIcon('Magnet Spike')}
									iconType="component"
								/> lacks an elemental multiplier for <InlineTooltip
									tooltip="Armor Skill"
									text="Charge Attack Up"
									icon={getItemIcon('Jewel')}
									iconType="component"
								/>. The skill only significantly boosts the impact charged
								strike.
							</p></ListItem
						>
						<ListItem
							><p>
								Due to the ample amount of innate i-frames, it can be practical
								to forgo a source of <InlineTooltip
									tooltip="Armor Skill"
									text="Evasion+2"
									icon={getItemIcon('Jewel')}
									iconType="component"
								/> entirely.
							</p></ListItem
						>
						<ListItem
							><p>
								There are no Magnet Spike-specific sigils outside of UL sigils.
								The <InlineTooltip
									tooltip="Sigil Skill"
									text="Stun"
									icon={getItemIcon('Sigil')}
									iconType="component"
								/> sigil can be relevant for Impact Mode centric runs.
							</p></ListItem
						>
						<ListItem
							><p>
								The Magnetic Pin Finisher attack presents the highest motion
								value in the game, at 600 without Active Feature and 750 with
								Active Feature.
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

	.toolbar {
		padding: 1rem;
		display: flex;
		align-items: center;
		gap: 1rem;
		flex-grow: 1;
		flex-shrink: 1;
	}

	.weapon-section {
		display: flex;
		flex-direction: column;
		gap: 1rem;
	}

	.weapon-description {
		display: flex;
		flex-direction: column; /* Stacks children vertically */
		gap: 2rem;
	}

	.weapon-container {
		display: flex;
		justify-content: center;
	}

	.video {
		width: 80%;
		margin: 0 auto;
		margin-bottom: 2rem;
	}

	.mermaid-container {
		max-width: 80vw;
		overflow-x: auto;
		margin: 0 auto;
		margin-bottom: 2rem;
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

	.table {
		margin-top: 2rem;
		margin-bottom: 2rem;
	}
</style>
