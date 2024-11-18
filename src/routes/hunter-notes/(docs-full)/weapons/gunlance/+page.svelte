<script lang="ts">
	import { page } from '$app/stores';
	import InlineTooltip from '$lib/client/components/frontier/InlineTooltip.svelte';
	import TableOfContentsPage from '$lib/client/components/TableOfContentsPage.svelte';
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
	import {
		getItemColor,
		getItemIcon,
	} from '$lib/client/modules/frontier/items';
	import StarRating from '$lib/client/components/StarRating.svelte';
	import { getLocationIcon } from '$lib/client/modules/frontier/locations';
	import Information from 'carbon-icons-svelte/lib/Information.svelte';
	import OutboundLink from 'carbon-components-svelte/src/Link/OutboundLink.svelte';
	import ToolKit from 'carbon-icons-svelte/lib/ToolKit.svelte';
	import type {
		FrontierGunlanceShell,
		FrontierGunlanceShellLevel,
	} from '$lib/client/modules/frontier/types';

	// formulas:
	/*
	Attribute gun (attribute): 1 (fixed damage) + Attribute (rounded ［ Attribute gun factor * (display attribute value ÷10) ］* Attribute enhancement skill)

		Attribute gun (explosion): 0.1* Display weapon magnification + Fixed value

 normal: 0.1
 spread: 0.09
 long: 0.1

	*/

	// TODO
	const heatbladeDamage: {
		id: FrontierGunlanceShellLevel;
		shellingLevel: FrontierGunlanceShellLevel;
		damage: number;
	}[] = [
		{ id: 1, shellingLevel: 1, damage: 100 },
		{ id: 2, shellingLevel: 2, damage: 120 },
		{ id: 3, shellingLevel: 3, damage: 140 },
		{ id: 4, shellingLevel: 4, damage: 160 },
		{ id: 5, shellingLevel: 5, damage: 180 },
		{ id: 6, shellingLevel: 6, damage: 200 },
		{ id: 7, shellingLevel: 7, damage: 220 },
		{ id: 8, shellingLevel: 8, damage: 240 },
		{ id: 9, shellingLevel: 9, damage: 260 },
	];

	const shellingTypesDamage: {
		shellingType: FrontierGunlanceShell;
		shellingDamage: {
			id: FrontierGunlanceShellLevel;
			level: FrontierGunlanceShellLevel;
			fixedValue: number;
			elementShotMultiplier: number;
			fixedValueSigil: number;
			stun: number;
		}[];
	}[] = [
		{
			shellingType: 'Normal',
			shellingDamage: [
				{
					id: 1,
					level: 1,
					fixedValue: 10,
					elementShotMultiplier: 3,
					fixedValueSigil: 14,
					stun: 3,
				},
				{
					id: 2,
					level: 2,
					fixedValue: 14,
					elementShotMultiplier: 3.13,
					fixedValueSigil: 21,
					stun: 4,
				},
				{
					id: 3,
					level: 3,
					fixedValue: 18,
					elementShotMultiplier: 3.26,
					fixedValueSigil: 27,
					stun: 5,
				},
				{
					id: 4,
					level: 4,
					fixedValue: 21,
					elementShotMultiplier: 3.39,
					fixedValueSigil: 32,
					stun: 6,
				},
				{
					id: 5,
					level: 5,
					fixedValue: 24,
					elementShotMultiplier: 3.52,
					fixedValueSigil: 36,
					stun: 7,
				},
				{
					id: 6,
					level: 6,
					fixedValue: 39,
					elementShotMultiplier: 3.65,
					fixedValueSigil: 59,
					stun: 8,
				},
				{
					id: 7,
					level: 7,
					fixedValue: 45,
					elementShotMultiplier: 3.78,
					fixedValueSigil: 68,
					stun: 9,
				},
				{
					id: 8,
					level: 8,
					fixedValue: 51,
					elementShotMultiplier: 3.91,
					fixedValueSigil: 77,
					stun: 10,
				},
				{
					id: 9,
					level: 9,
					fixedValue: 59,
					elementShotMultiplier: 4.04,
					fixedValueSigil: 89,
					stun: 11,
				},
			],
		},
		{
			shellingType: 'Spread',
			shellingDamage: [
				{
					id: 1,
					level: 1,
					fixedValue: 19,
					elementShotMultiplier: 5.5,
					fixedValueSigil: 28,
					stun: 6,
				},
				{
					id: 2,
					level: 2,
					fixedValue: 26,
					elementShotMultiplier: 5.63,
					fixedValueSigil: 40,
					stun: 7,
				},
				{
					id: 3,
					level: 3,
					fixedValue: 34,
					elementShotMultiplier: 5.76,
					fixedValueSigil: 51,
					stun: 8,
				},
				{
					id: 4,
					level: 4,
					fixedValue: 38,
					elementShotMultiplier: 5.89,
					fixedValueSigil: 57,
					stun: 9,
				},
				{
					id: 5,
					level: 5,
					fixedValue: 41,
					elementShotMultiplier: 6.02,
					fixedValueSigil: 61,
					stun: 10,
				},
				{
					id: 6,
					level: 6,
					fixedValue: 64,
					elementShotMultiplier: 6.15,
					fixedValueSigil: 96,
					stun: 11,
				},
				{
					id: 7,
					level: 7,
					fixedValue: 71,
					elementShotMultiplier: 6.28,
					fixedValueSigil: 107,
					stun: 12,
				},
				{
					id: 8,
					level: 8,
					fixedValue: 80,
					elementShotMultiplier: 6.41,
					fixedValueSigil: 120,
					stun: 13,
				},
				{
					id: 9,
					level: 9,
					fixedValue: 92,
					elementShotMultiplier: 6.54,
					fixedValueSigil: 138,
					stun: 14,
				},
			],
		},
		{
			shellingType: 'Long',
			shellingDamage: [
				{
					id: 1,
					level: 1,
					fixedValue: 14,
					elementShotMultiplier: 5,
					fixedValueSigil: 22,
					stun: 5,
				},
				{
					id: 2,
					level: 2,
					fixedValue: 20,
					elementShotMultiplier: 5.13,
					fixedValueSigil: 30,
					stun: 6,
				},
				{
					id: 3,
					level: 3,
					fixedValue: 25,
					elementShotMultiplier: 5.26,
					fixedValueSigil: 38,
					stun: 7,
				},
				{
					id: 4,
					level: 4,
					fixedValue: 29,
					elementShotMultiplier: 5.39,
					fixedValueSigil: 43,
					stun: 8,
				},
				{
					id: 5,
					level: 5,
					fixedValue: 32,
					elementShotMultiplier: 5.52,
					fixedValueSigil: 48,
					stun: 9,
				},
				{
					id: 6,
					level: 6,
					fixedValue: 50,
					elementShotMultiplier: 5.65,
					fixedValueSigil: 76,
					stun: 10,
				},
				{
					id: 7,
					level: 7,
					fixedValue: 58,
					elementShotMultiplier: 5.78,
					fixedValueSigil: 86,
					stun: 11,
				},
				{
					id: 8,
					level: 8,
					fixedValue: 64,
					elementShotMultiplier: 5.91,
					fixedValueSigil: 95,
					stun: 12,
				},
				{
					id: 9,
					level: 9,
					fixedValue: 73,
					elementShotMultiplier: 6.04,
					fixedValueSigil: 110,
					stun: 13,
				},
			],
		},
	];

	const hidenSkills: {
		id: string;
		skill: FrontierArmorSkillName;
		points: string;
		description: string;
	}[] = [
		{
			id: '4',
			skill: 'GL Tech Master', // TODO update ezlion?
			points: 'Twin Hiden, 30',
			description: 'Sharpness level +1 is added to GL Tech 【Cannon Ruler】.',
		},
		{
			id: '3',
			skill: 'GL Tech 【Cannon Ruler】',
			points: '30',
			description: `Gives Super High-Grade Earplugs, Attack x1.2 when wielding a Gunlance and Fencing+1. Wyvern Fire and Heat Blade cooldown-time is halved and Heat Blade activation time reduced to 3 seconds. Also grants Normal Shells +2, Long Shells +1 and Wide Shells +1 (stackable with Load Up or Gentle Shot).`,
		},
		{
			id: '2',
			skill: 'GL Tech Kaiden',
			points: '20',
			description:
				'Increases attack by 1.1 and grants Fencing+1 when wielding Gunlance.',
		},
		{
			id: '1',
			skill: 'GL Tech Expert',
			points: '10',
			description: 'Fencing+1 when wielding Gunlance.',
		},
		{
			id: '0',
			skill: 'GL Tech Novice',
			points: '-10',
			description: 'Attack x0.8 when wielding Gunlance.',
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
				'+5 sharpness recovery. When using Stylish Up get 2 free hits before sharpness is reduced.',
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
				'Max stack of 300 True Raw. Obscurity Up maxes out after two perfect guards, allowing subsequent guards to restore 2 or 20 sharpness depending on timing.',
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
				'27/1250/? total Motion Value to reach stage 1/2/3 respectively. The third stage, exclusive to Rush Up, has a limited duration.',
		},
		{
			id: 8,
			skill: 'Ceaseless',
			description:
				'12 seconds decay window. 13/36/44 hits required to reach stage 1/2/3 respectively (10/27/44 with Ceaseless Up). The third stage is also exclusive to Ceaseless Up, which decays by stages rather than all at once.',
		},
		{
			id: 9,
			skill: 'Point Breakthrough',
			description:
				'40 seconds duration. 10/6 hits to reach stages 1/2 respectively (8/5 with Fencing+2). The previously hit hitzone is more vulnerable at Stage 2, and Fencing +2 slightly eases activation.',
		},
		{
			id: 10,
			skill: 'Furious',
			description:
				'1/2/5 evasions or perfects guards to reach stage 1/2/3 respectively. These effects apply to both successful evasions and perfect guards (where applicable), but attacking is necessary to advance stages.',
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
			sigil: 'Rush Thrust',
			rating: 1,
			description:
				'Boosts the Motion Value of the Rush Thrust (38 > 57). This is the primary unsheathe and done from moving and pressing the normal thrust while unsheathed.',
			type: 'Tech Boost',
		},
		{
			id: 2,
			sigil: 'Horizontal Slash',
			rating: 1,
			description:
				'Boosts the Motion Value of the Horizontal Slash Attack (34 > 51). Does not affect the Bombardment Boost follow-up.',
			type: 'Tech Boost',
		},
		{
			id: 4,
			sigil: 'Shell Change',
			rating: 1,
			description:
				"Changes a Gunlance's shelling type to the one defined on the sigil: Normal, Spread, Long.",
			type: 'Other',
		},
		{
			id: 5,
			sigil: 'Shelling Level Up',
			rating: 1,
			description:
				'Upgrades shelling on a Gunlance by 1 level. Stacks for more levels, Lv9 shelling is maximum.',
			type: 'Other',
		},
	];
</script>

<TableOfContentsPage displayTOC={true}>
	<section>
		<SectionHeadingTopLevel title={'Gunlance'} />
		<div>
			<div class="spaced-paragraph">
				Frontier's <InlineTooltip
					text="Gunlance"
					tooltip="Weapon"
					iconType="component"
					icon={getWeaponIcon('Gunlance')}
				/> (GL) is considered one of the best versions of the weapon. It offers a
				flexible approach to combat, with multiple evasion options, and shelling
				and <strong>Wyvern Fire</strong> attacks that remain valuable even in
				the endgame. The core moveset is based on MHFU but has been greatly
				expanded. You can shell while thrusting, perform
				<strong>Wyvern Fire</strong>
				from upthrusts, and quickly reload single shells to buff the next shot.
				<strong>Wyvern Fire</strong>
				can also be enhanced by loading extra shells, transforming it into
				<strong>Super Wyvern Fire</strong>.
			</p>
			<div class="spaced-paragraph">
				Performing an upswing after a quick reload or as an unsheathed attack
				allows you to execute a <strong>Horizontal Sweep</strong>. You can shell
				from this position, instantly firing all shells in your <InlineTooltip
					text="Gunlance"
					tooltip="Weapon"
					iconType="component"
					icon={getWeaponIcon('Gunlance')}
				/>. The sweep has a naturally high motion value (51), and shelling from
				it results in a <strong>Backhop Slash</strong> with its own motion value
				(18 + Shelling Damage).
			</p>
			<div class="spaced-paragraph">
				The <InlineTooltip
					text="Gunlance"
					tooltip="Weapon"
					iconType="component"
					icon={getWeaponIcon('Gunlance')}
				/> offers three shell types: Normal, Long, and Wide.
				<strong>Wide</strong>
				is best for general shelling, while <strong>Normal</strong> provides the
				highest potential damage for all types of <strong>Wyvern Fire</strong>.
				<strong>Long</strong> serves as a balanced option between the two.
			</p>
			<div class="spaced-paragraph">
				Skills-wise, you can use <InlineTooltip
					text="Load Up"
					tooltip="Armor Skill"
					iconType="component"
					icon={getItemIcon('Jewel')}
				/> to add extra shells, <InlineTooltip
					text="Reload+1"
					tooltip="Armor Skill"
					iconType="component"
					icon={getItemIcon('Jewel')}
				/> to evade after normal shelling, and <InlineTooltip
					text="Reload+2"
					tooltip="Armor Skill"
					iconType="component"
					icon={getItemIcon('Jewel')}
				/> to reduce the knockback from Wyvern Fire.
			</p>
			<div class="spaced-paragraph">
				There are two evasion options, with the second using the <InlineTooltip
					text="Gunlance"
					tooltip="Weapon"
					iconType="component"
					icon={getWeaponIcon('Gunlance')}
				/> to launch you into the air.
			</p>

			<section>
				<div>
					<div class="spaced-paragraph">
						In Frontier, shelling can reach Level 9 and scales with your
						weapon's raw damage.
					</div>
					<div class="spaced-paragraph">
						Factors affecting Gunlance shell damage include your SR and GSR
						(which add +50 to +100 true raw), G Rank Raw Sigils (up to +135 with
						three perfect sigils), and Shelling Level (with G Rank Sigils
						available to increase the limit). You can calculate <strong
							>Shelling</strong
						>
						and <strong>Wyvern Fire</strong>
						damage using the <Link
							inline
							href="/tools/calculator/gunlance-shells-and-wyvernfire"
							>Gunlance calculator.</Link
						>, though there may be a slight margin of error due to the numerous
						factors involved.
					</p>
				</div>
			</section>

			<div>
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
					<div>
						<strong>Earth Style</strong> is the standard <InlineTooltip
							text="Gunlance"
							tooltip="Weapon"
							iconType="component"
							icon={getWeaponIcon('Gunlance')}
						/> moveset. It includes Wyvern Fire, which can be enhanced by loading
						extra shells, and all the core features described above.
					</p>
				</div>
			</section>

			<section>
				<SectionHeading level={2} title="Heaven Style" />
				<div>
					<div class="spaced-paragraph">
						<strong>Heaven Style</strong> expands on the standard <InlineTooltip
							text="Gunlance"
							tooltip="Weapon"
							iconType="component"
							icon={getWeaponIcon('Gunlance')}
						/>, replacing <strong>Wyvern Fire</strong> with a
						<strong>Heat Blade</strong>. Activated with the same input, the
						<strong>Heat Blade</strong>
						adds extra hits to each attack (+5 motion and a small amount of fire
						damage), sets your Affinity to 100% while active, and grants
						<strong>unlimited sharpness</strong>. The
						<strong>Heat Blade</strong>
						is longer than a standard
						<InlineTooltip
							text="Gunlance"
							tooltip="Weapon"
							iconType="component"
							icon={getWeaponIcon('Gunlance')}
						/>, allowing it to reach higher points and even sever tails that
						would otherwise be out of reach. When the
						<strong>Heat Blade</strong>
						is active, you can finish normal thrust combos with a
						<strong>Heat Blade Slam</strong>, which delivers 62 motion value
						damage—the strongest single hit available on a <InlineTooltip
							text="Gunlance"
							tooltip="Weapon"
							iconType="component"
							icon={getWeaponIcon('Gunlance')}
						/>. The power of the <strong>Heat Blade</strong> varies slightly based
						on shell type and level but not significantly.
					</p>
				</div>
			</section>

			<section>
				<SectionHeading level={2} title="Storm Style" />
				<div>
					<div class="spaced-paragraph">
						<strong>Storm Style</strong> incorporates all the features of
						<strong>Heaven Style</strong>
						but replaces shelling with <strong>Elemental Shelling</strong>.
						These shells deal variable damage depending on your weapon's
						elemental attributes and can apply multiple elements at once if your
						weapon has hybrid elements. The best way to utilize
						<strong>Elemental Shelling</strong>
						is with the <strong>Horizontal Sweep</strong>, as normal shelling
						has a brief preparation animation that functions like a small
						<strong>Wyvern Fire</strong> (with a 25 motion value if the
						animation hits the monster). A raw-focused <InlineTooltip
							text="Gunlance"
							tooltip="Weapon"
							iconType="component"
							icon={getWeaponIcon('Gunlance')}
						/> in this style essentially gains a miniature
						<strong>Wyvern Fire</strong> for normal shelling.
					</p>
				</div>
			</section>

			<section>
				<SectionHeading level={2} title="Extreme Style" />
				<div>
					<div class="spaced-paragraph">
						<strong>Extreme Style</strong> is a direct upgrade to all previous
						styles, adding enhanced mobility, a higher-tier version of
						<strong>Wyvern Fire</strong>, and Elemental Heat Blades.
					</div>
					<div class="spaced-paragraph">
						As with all Extreme Styles, you can run with your weapon unsheathed,
						greatly improving mobility. While running, you can reload your
						<InlineTooltip
							text="Gunlance"
							tooltip="Weapon"
							iconType="component"
							icon={getWeaponIcon('Gunlance')}
						/> or perform a <strong>Bombardment Boost</strong>, a fast forward
						dash with iframes that allows for various follow-up actions,
						including a <strong>Dash Cleave</strong>, which boasts the highest
						motion value on a <InlineTooltip
							text="Gunlance"
							tooltip="Weapon"
							iconType="component"
							icon={getWeaponIcon('Gunlance')}
						/>.
					</p>
					<div class="spaced-paragraph">
						<strong>Wyvern Fire</strong> in <strong>Extreme Style</strong>
						mirrors Earth Style's version, including
						<strong>Super Wyvern Fire</strong>. However, you can
						<strong>go even further beyond Super Wyvern Fire</strong>
						to perform an
						<strong>Extreme Wyvern Fire</strong>. This attack has a long
						build-up but deals approximately double the damage of
						<strong>Super Wyvern Fire</strong>. Since it requires fully loading
						all your shells into a <strong>Super Wyvern Fire</strong>, the
						strength of the <strong>Extreme Wyvern Fire</strong> depends directly
						on the number of shells loaded, so maximizing shell count is crucial.
					</p>
					<div class="spaced-paragraph">
						The <strong>Heat Blade</strong> in <strong>Extreme Style</strong>
						functions similarly to <strong>Heaven Style</strong>. By pressing
						the kick input, you enter <strong>Heat Blade</strong> mode, which adds
						decent elemental damage if your weapon has an element and increases motion
						value if your weapon focuses on raw damage or status effects. Hybrid
						elements will randomly display one element per attack.
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
					<div>x1.5 Wyvern Fire and Shelling Damage.</div>
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
									on:click={() => downloadDomAsPng('hiden-dom', 'gl-hiden')}
									>Download</Button
								>
							</div>
						</Toolbar>

						{#snippet cell({ cell })}
							{#if cell.value[0] == '-'}
								<p style:color="var(--ctp-red)">{cell.value}</p>
							{:else}
								<div>{cell.value}</div>
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
									<div>{cell.value}</div>
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
									<div>{cell.value}</div>
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
							><div>
								Heat Blade offers numerous benefits, including a second hitzone
								on every physical attack, extended reach, and no sharpness loss
								until it wears off, which then causes a -100 unit drop. On
								activation, it also restores some sharpness.
							</div></ListItem
						>
						<ListItem
							><div>
								If the weapon has a status effect, Heat Blade doesn’t inflict
								extra. However, if it lacks an element, it uses the higher raw
								Heat Blade motion value.
							</div></ListItem
						>
						<ListItem
							><div>
								Although <InlineTooltip
									tooltip="Weapon"
									text="Gunlance"
									iconType="component"
									icon={getWeaponIcon('Gunlance')}
								/> can gain similar guarding benefits as <InlineTooltip
									tooltip="Weapon"
									text="Lance"
									iconType="component"
									icon={getWeaponIcon('Lance')}
								/>, it cannot negate chip damage, making blocking certain
								attacks potentially lethal, especially with <InlineTooltip
									tooltip="Armor Skill"
									text="Adrenaline"
									iconType="component"
									icon={getItemIcon('Jewel')}
								/> active.
							</div></ListItem
						>
						<ListItem
							><div>
								Hit requirements for multiple skills and <InlineTooltip
									tooltip="Buff"
									text="Transcend"
									iconType="file"
									icon={getLocationIcon('Transcend')}
								/> are easier to meet with Heat Blade activated.
							</div></ListItem
						>
						<ListItem
							><div>
								<InlineTooltip
									tooltip="Armor Skill"
									text="Recoil"
									iconType="component"
									icon={getItemIcon('Jewel')}
								/> or <InlineTooltip
									tooltip="Armor Skill"
									text="Gentle Shot"
									iconType="component"
									icon={getItemIcon('Jewel')}
								/> allows <InlineTooltip
									tooltip="Weapon"
									text="Gunlance"
									iconType="component"
									icon={getWeaponIcon('Gunlance')}
								/> to evade after shelling.
							</div></ListItem
						>
						<ListItem
							><div>
								<InlineTooltip
									tooltip="Armor Skill"
									text="Consumption Slayer"
									iconType="component"
									icon={getItemIcon('Jewel')}
								/> can be freely exploited during Heat Blade’s uptime and can be
								offset with <InlineTooltip
									tooltip="Zenith Skill"
									text="Obscurity Up’s"
									iconType="component"
									iconColor={getItemColor('Red')}
									icon={getItemIcon('Jewel')}
								/> sharpness recovery.
							</div></ListItem
						>
						<ListItem
							><div>
								The Super Wyvern Fire <OutboundLink
									href="https://youtu.be/z6iM8wMHMtI?t=41"
									>has iframes</OutboundLink
								> in the recovery portion of the animation.
							</div></ListItem
						>
					</UnorderedList>
				</div>
			</section>
		</div>

		<div class="page-turn">
			<PageTurn pageUrlPathName={$page.url.pathname} />
		</div>
	</section>
</TableOfContentsPage>

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
