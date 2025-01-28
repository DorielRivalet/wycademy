<script lang="ts">
	import { page } from '$app/stores';
	import CenteredFigure from '$lib/client/components/CenteredFigure.svelte';
	import InlineTooltip from '$lib/client/components/frontier/InlineTooltip.svelte';
	import TableOfContentsPage from '$lib/client/components/TableOfContentsPage.svelte';
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
	import InlineNotification from 'carbon-components-svelte/src/Notification/InlineNotification.svelte';
	import { getMonsterIcon } from '$lib/client/modules/frontier/monsters';
	import { getSkillColor } from '$lib/client/modules/frontier/armor-skills';
</script>

<TableOfContentsPage displayTOC={true}>
	<section>
		<SectionHeadingTopLevel title={'Tower Weapons'} />
		<div>
			<div class="spaced-paragraph">
				A customisable weapon made from materials found by playing through the <InlineTooltip
					icon={LocationIcons.find((e) => e.name === 'Tower')?.icon}
					tooltip="Location"
					iconType={'file'}
					text="Sky Corridor"
				/>.
			</div>

			<CenteredFigure
				width={'100%'}
				type="file"
				src={'https://res.cloudinary.com/mhfz/image/upload/f_auto,q_auto/v1/supplemental/tower-weapons.webp'}
				alt="Tower Weapons"
				figcaption="Tower Weapons."
			/>

			<div class="spaced-paragraph">
				You can customize weapon attributes such as Sharpness, Raw, Elemental,
				Status, Shelling Type, Shot Type, etc. They are comparable to Lv50 G
				Rank weapons when fully upgraded. You can insert <strong
					>Tower Decorations</strong
				>, which gives skills without using slots, making it a powerful weapon
				when built correctly.
				<strong
					>You cannot reverse most of the attribute upgrades (e.g. getting
					sigils refunded or unequipped)</strong
				>.
			</div>

			<div class="spaced-paragraph">
				Light versions of weapons have two sigils slots and a single decoration
				slot, while Dark versions gives you a single sigil slot and two
				decoration slots.
			</div>

			<div class="spaced-paragraph">
				<InlineTooltip
					tooltip="Tower Sigil"
					text="Tower Sigils"
					icon={getItemIcon('Tower Sigil')}
					iconType="component"
				/> are used to grant Affinity, Status, Elemental, Zenith Skills or Weapon
				Abilities. You can only have as many of these properties as you have Sigil
				slots and you can't have two of the same type (for example, two Elemental,
				Status or Affinity sigils does not stack.)
			</div>

			<InlineNotification
				lowContrast
				kind="warning"
				title="Sigils:"
				hideCloseButton
				subtitle="You do not get refunds for replacing sigils nor can you unequip them."
			/>

			<div class="spaced-paragraph">
				<strong>Tower Decorations</strong> grant your weapon a skill. For
				example, if you have a Tower Decoration for <InlineTooltip
					tooltip="Armor Skill"
					text="Expert+5"
					iconType="component"
					icon={getTag('Armor Skill').icon}
				/>, then it gives you that skill when you slot it into a weapon and
				equip it. You can have a maximum of two skills on a weapon. Most
				decorations can only be obtained by battling <InlineTooltip
					tooltip="Monster"
					text="Duremudira"
					icon={getMonsterIcon('Duremudira')}
					iconType="file"
				/>, though several enhanced G-Rank skill versions require materials from
				2nd District Duremudira in combination with base decorations. For
				example, decorations like <InlineTooltip
					tooltip="Decoration"
					text="Fencing+2"
					icon={getItemIcon('Jewel')}
					iconType="component"
				/>, <InlineTooltip
					tooltip="Decoration"
					text="Sharp Sword+2"
					icon={getItemIcon('Jewel')}
					iconType="component"
				/>, and <InlineTooltip
					tooltip="Decoration"
					text="Artisan"
					icon={getItemIcon('Jewel')}
					iconType="component"
				/> can be combined with Duremudira materials to craft a <InlineTooltip
					tooltip="Tower Decoration"
					text="Sword God+2"
					icon={getItemIcon('Jewel')}
					iconType="component"
					iconColor={getSkillColor('road/dure')}
				/> decoration.
			</div>

			<CenteredFigure
				width={'100%'}
				type="file"
				src={'https://res.cloudinary.com/mhfz/image/upload/f_auto,q_auto/v1/supplemental/tower-weapon-decorations.webp'}
				alt="Tower Weapon decorations"
				figcaption="Tower Weapon decorations."
			/>

			<div class="spaced-paragraph">
				In order to remove a <strong>Tower Decoration</strong>, you need to buy
				a <InlineTooltip
					tooltip={'Item'}
					text="Twr Removal Solution"
					icon={getItemIcon('Medicine')}
				/>.
			</div>

			<div class="spaced-paragraph">
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
			</div>

			<div class="spaced-paragraph">
				<strong>Tower Weapons</strong> can be crafted by talking to the Cat
				wearing a backpack in the <InlineTooltip
					tooltip="Location"
					iconType={'file'}
					icon={LocationIcons.find((e) => e.name === 'Blacksmith')?.icon}
					text="Blacksmith"
				/>.
			</div>

			<div class="spaced-paragraph">
				The Blue series of the tower weapons have 3 <strong>Tower Sigil</strong>
				slots. They have high enough stats to surpass all weapons (except Evolution,
				certain Premium weapons and Road). They require Zenith materials to craft,
				but
				<strong>they do not have the Zenith Partbreaker effect</strong>. Zenith
				Sigils affect any skills granted (including Exotics, Hybrids and from
				Tower Decorations).
			</div>

			<div class="spaced-paragraph">
				In addition to the Tower Gems like <InlineTooltip
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
			</div>

			<CenteredFigure
				width={'100%'}
				type="file"
				src={'https://res.cloudinary.com/mhfz/image/upload/f_auto,q_auto/v1/supplemental/tower-weapon-upgrades.webp'}
				alt="Tower Weapon upgrades"
				figcaption="Tower Weapon upgrades."
			/>

			<div class="paragraph-long-02">
				If you are looking for a <strong>Tower Weapon Simulator</strong>, you
				can find it in the <Link
					icon={ToolKit}
					href="/tools/simulator/tower-weapon"
					>Tools and Utilities section.</Link
				>
			</div>
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
