<script lang="ts">
	import { page } from '$app/stores';
	import CenteredFigure from '$lib/client/components/CenteredFigure.svelte';
	import InlineTooltip from '$lib/client/components/frontier/InlineTooltip.svelte';
	import HunterNotesPage from '$lib/client/components/HunterNotesPage.svelte';
	import PageTurn from '$lib/client/components/PageTurn.svelte';
	import SectionHeadingTopLevel from '$lib/client/components/SectionHeadingTopLevel.svelte';
	import {
		getItemColor,
		getItemIcon,
	} from '$lib/client/modules/frontier/items';
	import { LocationIcons } from '$lib/client/modules/frontier/locations';
	import { RarityColors } from '$lib/client/modules/frontier/objects';
	import { getTag } from '$lib/client/modules/frontier/tags';
	import Link from 'carbon-components-svelte/src/Link/Link.svelte';
	import ToolKit from 'carbon-icons-svelte/lib/ToolKit.svelte';
</script>

<HunterNotesPage displayTOC={true}>
	<section>
		<SectionHeadingTopLevel title={'Tower Weapons'} />
		<div>
			<p class="spaced-paragraph">
				A customisable weapon made from materials found by playing through the <InlineTooltip
					icon={LocationIcons.find((e) => e.name === 'Tower')?.icon}
					tooltip="Location"
					iconType={'file'}
					text="Sky Corridor"
				/>.
			</p>

			<!-- <CenteredFigure
				width={'100%'}
				type="file"
				src={TowerWeapons}
				alt="Tower Weapons"
				figcaption="Tower Weapons."
			/> -->

			<p class="spaced-paragraph">
				You can customize weapon attributes such as Sharpness, Raw, Elemental,
				Status, Shelling Type, Shot Type, etc. They are comparable to Lv50 G
				Rank weapons when fully upgraded. You can insert <strong
					>Tower Decorations</strong
				>, which gives skills without using slots, making it a powerful weapon
				when built correctly. You cannot reverse most of the attribute upgrades.
			</p>

			<p class="spaced-paragraph">
				Light versions of weapons have two sigils slots and a single decoration
				slot, while Dark versions gives you a single sigil slot and two
				decoration slots.
			</p>

			<p class="spaced-paragraph">
				<strong>Tower Sigils</strong> are used to grant Affinity, Status, Elemental,
				Zenith Skills or Weapon Abilities. You can only have as many of these properties
				as you have Sigil slots and you can't have two of the same type (for example,
				two Elemental, Status or Affinity sigils does not stack.)
			</p>

			<p class="spaced-paragraph">
				<strong>Tower Decorations</strong> grant your weapon a skill. For
				example, if you have a Tower Decoration for <InlineTooltip
					tooltip="Armor Skill"
					text="Expert+5"
					iconType="component"
					icon={getTag('Armor Skill').icon}
				/>, then it gives you that skill when you slot it into a weapon and
				equip it. You can have a maximum of two skills on a weapon.
			</p>

			<!-- <CenteredFigure
				width={'100%'}
				type="file"
				src={TowerWeaponDecorations}
				alt="Tower Weapon decorations"
				figcaption="Tower Weapon decorations."
			/> -->

			<p class="spaced-paragraph">
				In order to remove a <strong>Tower Decoration</strong>, you need to buy
				a <InlineTooltip
					tooltip={'Item'}
					text="Twr Removal Solution"
					icon={getItemIcon('Medicine')}
				/>.
			</p>

			<p>
				The rest of the <strong>Tower Weapon</strong> materials are available at
				the <InlineTooltip
					icon={LocationIcons.find((e) => e.name === 'Road')?.icon}
					tooltip="Location"
					iconType={'file'}
					text="Road Shop"
				/>. Alternatively, you can replace them directly at the cost of losing
				the previously slotted decoration. A <InlineTooltip
					tooltip="Item"
					icon={getItemIcon('Medicine')}
					text="Pulsating Liquid"
				/> lets you adjust the properties of Tower Hunting Horns, Bows, Bowguns and
				Gunlances.
			</p>

			<p class="spaced-paragraph">
				<strong>Tower Weapons</strong> can be crafted by talking to the Cat
				wearing a backpack in the <InlineTooltip
					tooltip="Location"
					iconType={'file'}
					icon={LocationIcons.find((e) => e.name === 'Blacksmith')?.icon}
					text="Blacksmith"
				/>.
			</p>

			<p class="spaced-paragraph">
				The Blue series of the tower weapons have 3 <strong>Tower Sigil</strong>
				slots. They have high enough stats to surpass all weapons (except Evolution,
				certain Premium weapons and Road). They require Zenith materials to craft,
				but
				<strong>they do not have the Zenith Partbreaker effect</strong>. Zenith
				Sigils affect any skills granted (including Exotics, Hybrids and from
				Tower Decorations).
			</p>

			<p class="spaced-paragraph">
				In addition to the tower gems like <InlineTooltip
					icon={getItemIcon('Ball')}
					iconColor={RarityColors[5]}
					iconType="component"
					text="Glittering Gem"
					tooltip="Item"
				/>, there are other materials required according to the upgrades,
				including <InlineTooltip
					icon={getItemIcon('Ticket')}
					iconColor={getItemColor('Blue')}
					iconType="component"
					text="Weapon Soul Top"
					tooltip="Item"
				/> and <InlineTooltip
					icon={getItemIcon('Ball')}
					iconColor={getItemColor('Green')}
					iconType="component"
					text="Weapon Ribbon High"
					tooltip="Item"
				/>.
			</p>

			<!-- <CenteredFigure
				width={'100%'}
				type="file"
				src={TowerWeaponsUpgrades}
				alt="Tower Weapon upgrades"
				figcaption="Tower Weapon upgrades."
			/> -->

			<p>
				If you are looking for a <strong>Tower Weapon Simulator</strong>, you
				can find it in the <Link
					icon={ToolKit}
					href="/tools/simulator/tower-weapon"
					>Tools and Utilities section.</Link
				>
			</p>
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
</style>
