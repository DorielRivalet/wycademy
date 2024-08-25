<script lang="ts">
	import {
		sigilsRolls,
		sigilsInfo,
		sigilsRecipes,
		type FrontierSigilRecipeType,
	} from '$lib/client/modules/frontier/sigils';
	import {
		ezlionSkillSigil,
		type FrontierSigil,
		type SkillSigil,
	} from 'ezlion';
	import PageTurn from '$lib/client/components/PageTurn.svelte';
	import SectionHeadingTopLevel from '$lib/client/components/SectionHeadingTopLevel.svelte';
	import HunterNotesPage from '$lib/client/components/HunterNotesPage.svelte';
	import { page } from '$app/stores';
	import SectionHeading from '$lib/client/components/SectionHeading.svelte';
	import type { DataTableCell } from 'carbon-components-svelte/src/DataTable/DataTable.svelte';
	import Modal from 'carbon-components-svelte/src/Modal/Modal.svelte';
	import DataTable from 'carbon-components-svelte/src/DataTable/DataTable.svelte';
	import Button from 'carbon-components-svelte/src/Button/Button.svelte';
	import CopyButton from 'carbon-components-svelte/src/CopyButton/CopyButton.svelte';
	import Download from 'carbon-icons-svelte/lib/Download.svelte';
	import Toolbar from 'carbon-components-svelte/src/DataTable/Toolbar.svelte';
	import { downloadDomAsPng } from '$lib/client/modules/download';
	import { getCSVFromArray } from '$lib/client/modules/csv';
	import InlineTooltip from '$lib/client/components/frontier/InlineTooltip.svelte';
	import { getItemIcon, ItemColors } from '$lib/client/modules/frontier/items';
	import Image from 'carbon-icons-svelte/lib/Image.svelte';
	import CenteredFigure from '$lib/client/components/CenteredFigure.svelte';
	import UnorderedList from 'carbon-components-svelte/src/UnorderedList/UnorderedList.svelte';
	import ListItem from 'carbon-components-svelte/src/ListItem/ListItem.svelte';
	import Link from 'carbon-components-svelte/src/Link/Link.svelte';
	import ToolbarSearch from 'carbon-components-svelte/src/DataTable/ToolbarSearch.svelte';
	import Dropdown from 'carbon-components-svelte/src/Dropdown/Dropdown.svelte';
	import { getMonsterIcon } from '$lib/client/modules/frontier/monsters';
	import { getWeaponIcon } from '$lib/client/modules/frontier/weapons';
	import MultiSelect from 'carbon-components-svelte/src/MultiSelect/MultiSelect.svelte';
	import { gameInfo } from '$lib/client/modules/frontier/objects';
	import Item from '$lib/client/components/frontier/Item.svelte';

	// TODO when were sigils introduced?

	function getRecipeCategory(id: number): FrontierSigilRecipeType {
		if (id >= 0 && id < 303) {
			return 'Standard';
		} else if (id >= 303 && id < 331) {
			return 'Unlimited';
		} else if (id >= 331 && id < 348) {
			return 'Shiten';
		} else if (id >= 348 && id < 352) {
			return 'Twinhead';
		} else if (id >= 352 && id < 364) {
			return 'Rarity';
		} else if (id >= 364 && id < 371) {
			return 'Premium';
		} else if (id >= 371 && id < 382) {
			return 'Zenith';
		} else {
			return 'Uncategorized';
		}
	}

	const mappedSigils = sigilsRolls.flatMap((e, i) => {
		if (e[0].sigilSkill === 0) {
			return [
				{
					id: `${i}`,
					category: getRecipeCategory(i),
					recipeName: sigilsRecipes[i],
					sigilSkill: ezlionSkillSigil[e[0].sigilSkill],
					rollPercentage: e[0].rollPercentage,
					rollMin: e[0].rollMin,
					rollMax: e[0].rollMax,
				},
			];
		} else {
			return e
				.filter((roll) => roll.sigilSkill !== 0)
				.map((roll, rollIndex) => ({
					id: `${i}-${rollIndex}`,
					recipeName: sigilsRecipes[i],
					category: getRecipeCategory(i),
					sigilSkill: ezlionSkillSigil[roll.sigilSkill],
					rollPercentage: roll.rollPercentage,
					rollMin: roll.rollMin,
					rollMax: roll.rollMax,
				}));
		}
	});

	function getNegativeFromUint(uint: number) {
		if (uint > 127) {
			return uint - 256;
		} else {
			return uint;
		}
	}

	function transformMappedSigils(
		data: {
			id: string;
			category: string;
			recipeName: string;
			sigilSkill: FrontierSigil;
			rollPercentage: number;
			rollMin: number;
			rollMax: number;
		}[],
	) {
		let filteredResult = data.filter((e) => e.recipeName !== 'None');
		let result: {
			id: string;
			category: string;
			recipeName: string;
			sigilSkill: string;
			rollPercentage: string | number;
			rollMin: number;
			rollMax: number;
		}[] = [];

		filteredResult.forEach((element) => {
			result.push({
				id: element.id,
				category: element.category,
				recipeName: element.recipeName,
				sigilSkill:
					element.sigilSkill === 'None' ? 'Random' : element.sigilSkill,
				rollPercentage:
					element.rollPercentage === 0
						? '-'
						: element.rollPercentage === 256
							? 'Guaranteed'
							: element.rollPercentage,
				rollMin: getNegativeFromUint(element.rollMin),
				rollMax: element.rollMax,
			});
		});

		return result;
	}

	const transformedSigils = transformMappedSigils(mappedSigils);

	let modalPopoverIconType = 'file';
	let modalPopoverIcon: any;
	let modalHeading = '';
	let modalLabel = '';
	let modalOpen = false;
	let modalImage = '';
	let modalNotes = '';

	$: modalBlurClass = modalOpen ? 'modal-open-blur' : 'modal-open-noblur';

	function changeModal(cell: DataTableCell, section: string) {
		modalOpen = true;
		modalHeading = cell.value;
		modalLabel = section || '';

		switch (section) {
			default:
				modalImage = '';
				modalNotes = '';
				break;
			case 'Sigil':
				modalImage = sigilsInfo.find((e) => e.name === cell.value)?.demo || '';
				modalNotes =
					sigilsInfo.find((e) => e.name === cell.value)?.effect || '';
				break;
		}
	}

	function getRecipesByCategory(category: string) {
		return transformedSigils.filter((e) => e.category === category);
	}

	type SigilRecipe = {
		id: string;
		category: string;
		recipeName: string;
		sigilSkill: string;
		rollPercentage: string | number;
		rollMin: number;
		rollMax: number;
	};

	function getFilteredRecipes(
		recipesByCategory: SigilRecipe[],
		selectedSkills: FrontierSigil[],
	) {
		// Group recipes by recipeName
		const recipesGroupedByRecipeName: { [key: string]: SigilRecipe[] } =
			recipesByCategory.reduce(
				(acc, recipe) => {
					if (!acc[recipe.recipeName]) {
						acc[recipe.recipeName] = [];
					}
					acc[recipe.recipeName].push(recipe);
					return acc;
				},
				{} as { [key: string]: SigilRecipe[] },
			);

		// Filter the groups based on selectedSkills
		const filteredRecipes: SigilRecipe[] = [];

		for (const recipeGroup of Object.values(recipesGroupedByRecipeName)) {
			const recipeSkills = recipeGroup.map((recipe) => recipe.sigilSkill);
			const allSkillsPresent = selectedSkills.every((skill) =>
				recipeSkills.includes(skill),
			);

			if (allSkillsPresent) {
				filteredRecipes.push(...recipeGroup);
			}
		}

		return filteredRecipes;
	}

	const categoryNames = [
		{ id: 'Standard', text: 'Standard' },
		{ id: 'Unlimited', text: 'Unlimited' },
		{ id: 'Shiten', text: 'Shiten' },
		{ id: 'Twinhead', text: 'Twinhead' },
		{ id: 'Rarity', text: 'Rarity' },
		{ id: 'Premium', text: 'Premium' },
		{ id: 'Zenith', text: 'Zenith' },
	];

	let selectedCategory: FrontierSigilRecipeType = 'Standard';
	let recipesTableFilteredRowIds: string[] = [];
	let skillsTableFilteredRowIds: string[] = [];

	$: recipesByCategory = getRecipesByCategory(selectedCategory);

	$: filteredRecipes = getFilteredRecipes(recipesByCategory, selectedSkills);

	const mapSkillSigilToArray = (
		skillSigil: SkillSigil,
	): { id: string; text: string }[] => {
		return Object.entries(skillSigil).map(([key, value]) => ({
			id: value,
			text: value,
		}));
	};

	// TODO idk if im confusing shiten seal with lock
	let selectedSkills: FrontierSigil[] = ['Attack Slayer', 'Elemental Slayer'];

	const mappedSigilSkills = mapSkillSigilToArray(ezlionSkillSigil);
</script>

<Modal
	passiveModal
	bind:open={modalOpen}
	{modalHeading}
	{modalLabel}
	on:open
	on:close
	hasScrollingContent
>
	{#if modalImage !== '' && modalImage}
		<div class="modal-content">
			<div>
				{#await import('$lib/player/Player.svelte') then { default: Player }}
					<svelte:component
						this={Player}
						{...{ title: modalHeading, src: modalImage }}
					/>
				{/await}
			</div>
			<div>{modalNotes}</div>
		</div>
	{:else}
		<div class="modal-mobile-container">
			<div class="modal-mobile-contents-top">
				<div class="modal-mobile-image">
					<div>
						{#if modalPopoverIconType === 'component'}
							<svelte:component this={modalPopoverIcon} />
						{:else}
							<img src={modalPopoverIcon} alt={modalHeading} />
						{/if}
					</div>
				</div>
				<div class="modal-mobile-title">
					{modalHeading.substring(0, 64)}
				</div>

				{#if modalLabel !== ''}
					<div class="modal-mobile-subtitle">{modalLabel.substring(0, 64)}</div>
				{/if}
			</div>
		</div>
	{/if}
</Modal>

<HunterNotesPage displayTOC={true}>
	<div class={modalBlurClass}>
		<SectionHeadingTopLevel title={'Sigils'} />
		<div>
			<p class="spaced-paragraph">
				<InlineTooltip
					text="Sigils"
					tooltip="Sigil"
					iconType="component"
					icon={getItemIcon('Sigil')}
					iconColor={ItemColors.find((e) => e.name === 'White')?.value}
				/> are akin to decorations but are exclusively used in G Rank weaponry, crafted
				by the Cat Smith, who also creates random Gou weapons.
			</p>

			<CenteredFigure
				width={'100%'}
				type="file"
				src={'https://res.cloudinary.com/mhfz/image/upload/f_auto,q_auto/v1/supplemental/cat-smith.webp'}
				alt="Cat Smith"
				figcaption="Cat Smith."
			/>

			<p class="spaced-paragraph">
				<InlineTooltip
					text="Sigils"
					tooltip="Sigil"
					iconType="component"
					icon={getItemIcon('Sigil')}
					iconColor={ItemColors.find((e) => e.name === 'White')?.value}
				/> replace gems in G Rank weaponry and are crafted at the Cat Smith, who
				also creates random Gou weapons. They can have multiple effects, ranging
				from simple buffs to a weapon's raw values, to granting new versions of weapon
				moves, to allowing you to wave at the Balloon an infinite number of times.
			</p>

			<p class="spaced-paragraph">
				A list of sigil recipes is found <Link inline href="#recipes"
					>down below.</Link
				>
			</p>

			<p>
				If you want to calculate how much damage all of your equipped sigils do
				and compare the damage between them, check our <Link
					inline
					href="/tools/calculator/sigil">Sigils Calculator.</Link
				>. If you want to simulate sigils rolls, check our <Link
					inline
					href="/tools/simulator/sigil">Sigils Simulator.</Link
				>
			</p>
			<section>
				<SectionHeading level={2} title="Slots" />
				<div>
					<p class="spaced-paragraph">
						Sigil slots are triangular and can either replace decoration slots
						in standard G Rank weaponry or be part of hybrid slots that
						accommodate both <InlineTooltip
							text="decorations"
							tooltip="Item"
							iconType="component"
							icon={getItemIcon('Jewel')}
							iconColor={ItemColors.find((e) => e.name === 'White')?.value}
						/> and <InlineTooltip
							text="sigils"
							tooltip="Sigil"
							iconType="component"
							icon={getItemIcon('Sigil')}
							iconColor={ItemColors.find((e) => e.name === 'White')?.value}
						/>. Weapons can have up to three <InlineTooltip
							text="sigils"
							tooltip="Sigil"
							iconType="component"
							icon={getItemIcon('Sigil')}
							iconColor={ItemColors.find((e) => e.name === 'White')?.value}
						/>. Sigils with variable values generally stack, while those that
						enhance abilities or motions have fixed effects regardless of the
						number slotted.
					</p>

					<CenteredFigure
						width={'100%'}
						type="file"
						src={'https://res.cloudinary.com/mhfz/image/upload/f_auto,q_auto/v1/supplemental/sigil-slots.webp'}
						alt="Sigil slots"
						figcaption="Sigil slots."
					/>

					<p class="spaced-paragraph">
						The slot shape determines what item goes in. For sigils, the slots
						are triangular. For decorations, the slots are circular. For sigils
						or decorations on the same slot, the slot is a diamond inside a
						circle.
					</p>

					<p>
						<InlineTooltip
							text="Sigils"
							tooltip="Sigil"
							iconType="component"
							icon={getItemIcon('Sigil')}
							iconColor={ItemColors.find((e) => e.name === 'White')?.value}
						/> can have a range of effects, from adding basic stats like Raw, Element,
						or Affinity to more unique effects such as granting store discounts through
						gestures or increasing the likelihood of your Halk dropping items. A
						full index of these skills is <Link inline href="#skills"
							>down below.</Link
						>
					</p>
				</div>
			</section>
			<section>
				<SectionHeading level={2} title="Crafting" />
				<div>
					<p class="spaced-paragraph">
						To craft a sigil, talk to the cat in the blacksmith who handles
						Partnyaa gear. Select the Sigils option, followed by Create Sigils,
						which will bring up a recipe list. Around the fifth page, you will
						find the <InlineTooltip
							text="G Promo Sigil"
							tooltip="Sigil"
							iconType="component"
							icon={getItemIcon('Sigil')}
							iconColor={ItemColors.find((e) => e.name === 'Green')?.value}
						/>. Choose this and spam the option to create basic <InlineTooltip
							text="sigils"
							tooltip="Sigil"
							iconType="component"
							icon={getItemIcon('Sigil')}
							iconColor={ItemColors.find((e) => e.name === 'White')?.value}
						/>. The most immediately useful skills to look for are Attack,
						Elemental, and Affinity. Refer to the proper section for more
						details on other skills.
					</p>
					<p class="spaced-paragraph">
						Crafting a <InlineTooltip
							text="sigil"
							tooltip="Sigil"
							iconType="component"
							icon={getItemIcon('Sigil')}
							iconColor={ItemColors.find((e) => e.name === 'White')?.value}
						/> requires selecting from a list of various recipes, each biased towards
						certain skills and grouped into three types:
					</p>
					<UnorderedList>
						<ListItem
							><p>
								<strong>Recipe A:</strong> Costs 300Gz and uses commonly available
								monster materials.
							</p></ListItem
						>
						<ListItem
							><p>
								<strong>Recipe B:</strong> Costs 500Gz and uses rarer materials such
								as low-percentage carves or break-only items.
							</p></ListItem
						>
						<ListItem
							><p>
								<strong>Recipe ★:</strong> Costs 700Gz and uses the 1% carve from
								a G Rank monster.
							</p></ListItem
						>
					</UnorderedList>
					<p class="spaced-paragraph">
						After selecting the base recipe and materials, you can add
						additional 'filler' materials if needed. These fillers do not affect
						the outcome of the <InlineTooltip
							text="sigil"
							tooltip="Sigil"
							iconType="component"
							icon={getItemIcon('Sigil')}
							iconColor={ItemColors.find((e) => e.name === 'White')?.value}
						/> and are only used to pad the completion percentage to 100%.
					</p>
					<p>
						Once you've chosen the filler materials, you can craft the <InlineTooltip
							text="sigil"
							tooltip="Sigil"
							iconType="component"
							icon={getItemIcon('Sigil')}
							iconColor={ItemColors.find((e) => e.name === 'White')?.value}
						/> and will be presented with the results and a relative rarity ranking
						in stars based on the roll.
					</p>
					<div>
						{#await import('$lib/player/Player.svelte') then { default: Player }}
							<svelte:component
								this={Player}
								{...{
									title: 'Rare Sigil',
									src: 'https://res.cloudinary.com/mhfz/video/upload/f_auto:video,q_auto/v1/supplemental/animated/rare-sigil.webm',
								}}
							/>
						{/await}
					</div>
				</div>
			</section>
			<section>
				<SectionHeading level={2} title="Inserting" />
				<div>
					<p>
						You can insert the crafted <InlineTooltip
							text="sigils"
							tooltip="Sigil"
							iconType="component"
							icon={getItemIcon('Sigil')}
							iconColor={ItemColors.find((e) => e.name === 'White')?.value}
						/> into weapons by selecting the Insert Sigils option.
					</p>
				</div>
			</section>
			<section>
				<SectionHeading level={2} title="Removing" />
				<div>
					<p>
						Removing a <InlineTooltip
							text="sigil"
							tooltip="Sigil"
							iconType="component"
							icon={getItemIcon('Sigil')}
							iconColor={ItemColors.find((e) => e.name === 'White')?.value}
						/> from a weapon requires a <InlineTooltip
							text="Sigil Catalyst"
							tooltip="Item"
							iconType="component"
							icon={getItemIcon('Medicine')}
							iconColor={ItemColors.find((e) => e.name === 'White')?.value}
						/>. These can be obtained by using the Guuku Cooking Facilities on
						any G Rank materials, for 12NP in the N Point Store.
					</p>
				</div>
			</section>
			<section>
				<SectionHeading level={2} title="What to Choose" />
				<div>
					<p class="spaced-paragraph">
						Most weapons have dedicated <InlineTooltip
							text="sigils"
							tooltip="Sigil"
							iconType="component"
							icon={getItemIcon('Sigil')}
							iconColor={ItemColors.find((e) => e.name === 'White')?.value}
						/>, but not all are optimal. Carefully consider the frequency with
						which you will use the attack. For example, the Dual Swords sigils
						for the Rush Slash and Frontflip Slash have low viability for
						Extreme Style because Extreme Demon Mode does not access them, and
						optimal play mostly involves using that mode. Similarly, the Great
						Sword's Guard Slash is unavailable in Extreme Style, and most
						upswings are charged, making those <InlineTooltip
							text="sigils"
							tooltip="Sigil"
							iconType="component"
							icon={getItemIcon('Sigil')}
							iconColor={ItemColors.find((e) => e.name === 'White')?.value}
						/>
						less useful compared to simply buffing raw damage.
					</p>
					<CenteredFigure
						width={'100%'}
						type="file"
						src={'https://res.cloudinary.com/mhfz/image/upload/f_auto,q_auto/v1/supplemental/sigil-stats.webp'}
						alt="Sigil stats"
						figcaption="Sigil stats."
					/>
					<p class="spaced-paragraph">
						There are many possible outcomes for each sigil recipe, but the
						following recipes use easily obtainable materials and have a good
						chance of yielding desirable skills, making them ideal for players
						starting out.
					</p>
					<p><strong>Generic Recipes:</strong></p>
					<UnorderedList>
						<ListItem><p>Hypnoc A for Attack Power Sigils.</p></ListItem>
						<ListItem
							><p>
								Forokururu A and Zerureusu A for Elemental Power Sigils.
							</p></ListItem
						>
						<ListItem
							><p>
								Gypceros A and Zerureusu A for Status Attack Sigils.
							</p></ListItem
						>
						<ListItem><p>Red Khezu A for Affinity Sigils.</p></ListItem>
					</UnorderedList>
					<p><strong>Gunner Recipes:</strong></p>
					<UnorderedList>
						<ListItem
							><p>
								Rajang A and Dyuragaua A for Elder Dragon Attack and Heat Cannon
								Add.
							</p></ListItem
						>

						<ListItem
							><p>
								Abiorugu A for Rapid Fire Sigils and Ultra Cluster Shot Sigils.
							</p></ListItem
						>
					</UnorderedList>
					<p>
						For best results, aim for Attack or Elemental <InlineTooltip
							text="sigils"
							tooltip="Sigil"
							iconType="component"
							icon={getItemIcon('Sigil')}
							iconColor={ItemColors.find((e) => e.name === 'White')?.value}
						/> and one or more of your weapon's specific sigils. For Gunlance, always
						aim for Lv9 shelling if utilizing Shelling and Wyvern Fires.
					</p>
				</div>
			</section>
			<section>
				<SectionHeading level={2} title="Usage" />
				<div>
					<p>
						<InlineTooltip
							text="Sigils"
							tooltip="Sigil"
							iconType="component"
							icon={getItemIcon('Sigil')}
							iconColor={ItemColors.find((e) => e.name === 'White')?.value}
						/> can be inserted into normal G Rank weapons instead of decorations,
						providing effects like flat additions to True Raw, True Elemental, and
						Affinity, as well as buffs to weapon motions.
					</p>
					<CenteredFigure
						width={'100%'}
						type="file"
						src={'https://res.cloudinary.com/mhfz/image/upload/f_auto,q_auto/v1/supplemental/sigil-active.webp'}
						alt="Sigil active"
						figcaption="Sigil active."
					/>
					<CenteredFigure
						width={'100%'}
						type="file"
						src={'https://res.cloudinary.com/mhfz/image/upload/f_auto,q_auto/v1/supplemental/sigil-inactive.webp'}
						alt="Sigil inactive"
						figcaption="Sigil inactive."
					/>
				</div>
			</section>
			<section>
				<SectionHeading level={2} title="Obtaining" />
				<div>
					<p>
						You can obtain many <InlineTooltip
							text="tickets"
							tooltip="Item"
							iconType="component"
							icon={getItemIcon('Ticket')}
							iconColor={ItemColors.find((e) => e.name === 'White')?.value}
						/> from the Hunter Guide, which can be used to make mostly random sigils.
						These may not be the best but can be usable. To make a couple of easy
						<InlineTooltip
							text="sigils"
							tooltip="Sigil"
							iconType="component"
							icon={getItemIcon('Sigil')}
							iconColor={ItemColors.find((e) => e.name === 'White')?.value}
						/> quickly, hunt <InlineTooltip
							text="G Rank Hypnoc"
							tooltip="Monster"
							iconType="file"
							icon={getMonsterIcon('Hypnocatrice')}
							iconColor={ItemColors.find((e) => e.name === 'White')?.value}
						/> once you have a basic set. The A Sigil Recipe on <InlineTooltip
							text="Hypnoc"
							tooltip="Monster"
							iconType="file"
							icon={getMonsterIcon('Hypnocatrice')}
							iconColor={ItemColors.find((e) => e.name === 'White')?.value}
						/> can potentially roll up to +30 attack. With up to three sigils per
						weapon, even low rolls can quickly add up. Having 40 attack across multiple
						sigils is still close to or above a 10% increase in your weapon's power.
					</p>
				</div>
			</section>
			<section>
				<SectionHeading level={2} title="Special Weapons" />
				<div>
					<p class="spaced-paragraph">
						G Supremacy, Burst, and Origin weapons do not have Sigil Slots.
						Instead, they have standard decoration slots and grant an armor
						skill when used. For example, Varusaburosu weapons have <InlineTooltip
							text="Vampirism"
							tooltip="Armor Skill"
							iconType="component"
							icon={getItemIcon('Jewel')}
							iconColor={ItemColors.find((e) => e.name === 'White')?.value}
						/>, allowing you to leech health back as you attack. Despite their
						strength, using good sigils in good weapons is often more effective
						in practice.
					</p>
					<p>
						Exotic Weapons are unique in that they provide the <InlineTooltip
							text="Quick Eating"
							tooltip="Armor Skill"
							iconType="component"
							icon={getItemIcon('Jewel')}
							iconColor={ItemColors.find((e) => e.name === 'White')?.value}
						/>
						skill while equipped and feature hybrid slots that accept both G Rank
						Sigils and Decorations. Their stats are comparable to any G Lv50 weapon.
					</p>
				</div>
			</section>
			<section>
				<SectionHeading level={2} title="Weapon Levels" />
				<div>
					<p>
						Sigil Slots replace decoration slots in G Rank weapons. Weapons
						start with two sigil slots and gain a third at Level 30, which
						requires a gem from Conquests.
					</p>
				</div>
			</section>
			<section>
				<SectionHeading level={2} title="Shiten Conquests" />
				<div>
					<p class="spaced-paragraph">
						Heavenly Conquests (Shiten) are set to Level 9999 and reward
						exceptionally good Sigils for use in G Rank weapons.
					</p>
					<p><strong>Items:</strong></p>
					<UnorderedList>
						<ListItem
							><InlineTooltip
								text="Shiten Key"
								tooltip="Item"
								iconType="component"
								icon={getItemIcon('Question Mark')}
								iconColor={ItemColors.find((e) => e.name === 'White')?.value}
							/>
							<UnorderedList nested>
								<ListItem
									><p>
										Creates powerful general-purpose <InlineTooltip
											text="Sigils"
											tooltip="Sigil"
											iconType="component"
											icon={getItemIcon('Sigil')}
											iconColor={ItemColors.find((e) => e.name === 'White')
												?.value}
										/> and Sigils for <InlineTooltip
											text="Hammer"
											tooltip="Weapon"
											iconType="component"
											icon={getWeaponIcon('Hammer')}
											iconColor={ItemColors.find((e) => e.name === 'White')
												?.value}
										/>, <InlineTooltip
											text="Sword and Shield"
											tooltip="Weapon"
											iconType="component"
											icon={getWeaponIcon('Sword and Shield')}
											iconColor={ItemColors.find((e) => e.name === 'White')
												?.value}
										/>, <InlineTooltip
											text="Gunlance"
											tooltip="Weapon"
											iconType="component"
											icon={getWeaponIcon('Gunlance')}
											iconColor={ItemColors.find((e) => e.name === 'White')
												?.value}
										/>, <InlineTooltip
											text="Bow"
											tooltip="Weapon"
											iconType="component"
											icon={getWeaponIcon('Bow')}
											iconColor={ItemColors.find((e) => e.name === 'White')
												?.value}
										/>, and <InlineTooltip
											text="Heavy Bowgun"
											tooltip="Weapon"
											iconType="component"
											icon={getWeaponIcon('Heavy Bowgun')}
											iconColor={ItemColors.find((e) => e.name === 'White')
												?.value}
										/>.
									</p></ListItem
								>
								<ListItem
									><p>
										Obtained by defeating <InlineTooltip
											text="Shiten Disufiroa"
											tooltip="Monster"
											iconType="file"
											icon={getMonsterIcon('Shiten Disufiroa')}
										/>.
									</p></ListItem
								>
								<ListItem
									><p>
										Rewards: 1x fixed for quest clear, 1x fixed for no carts, 1%
										chance of 1x extra per reward slot.
									</p></ListItem
								>
							</UnorderedList>
						</ListItem>
						<ListItem
							><InlineTooltip
								text="Shiten Seal"
								tooltip="Item"
								iconType="component"
								icon={getItemIcon('Question Mark')}
								iconColor={ItemColors.find((e) => e.name === 'White')?.value}
							/>
							<UnorderedList nested>
								<ListItem
									><p>
										Creates powerful general-purpose <InlineTooltip
											text="Sigils"
											tooltip="Sigil"
											iconType="component"
											icon={getItemIcon('Sigil')}
											iconColor={ItemColors.find((e) => e.name === 'White')
												?.value}
										/> and Sigils for <InlineTooltip
											text="Great Sword"
											tooltip="Weapon"
											iconType="component"
											icon={getWeaponIcon('Great Sword')}
											iconColor={ItemColors.find((e) => e.name === 'White')
												?.value}
										/>,
										<InlineTooltip
											text="Dual Swords"
											tooltip="Weapon"
											iconType="component"
											icon={getWeaponIcon('Dual Swords')}
											iconColor={ItemColors.find((e) => e.name === 'White')
												?.value}
										/>, <InlineTooltip
											text="Long Sword"
											tooltip="Weapon"
											iconType="component"
											icon={getWeaponIcon('Long Sword')}
											iconColor={ItemColors.find((e) => e.name === 'White')
												?.value}
										/>, <InlineTooltip
											text="Hunting Horn"
											tooltip="Weapon"
											iconType="component"
											icon={getWeaponIcon('Hunting Horn')}
											iconColor={ItemColors.find((e) => e.name === 'White')
												?.value}
										/>, <InlineTooltip
											text="Lance"
											tooltip="Weapon"
											iconType="component"
											icon={getWeaponIcon('Lance')}
											iconColor={ItemColors.find((e) => e.name === 'White')
												?.value}
										/>, and <InlineTooltip
											text="Light Bowgun"
											tooltip="Weapon"
											iconType="component"
											icon={getWeaponIcon('Light Bowgun')}
											iconColor={ItemColors.find((e) => e.name === 'White')
												?.value}
										/>.
									</p></ListItem
								>
								<ListItem
									><p>
										Obtained by defeating <InlineTooltip
											text="Shiten UNKNOWN"
											tooltip="Monster"
											iconType="file"
											icon={getMonsterIcon('Shiten UNKNOWN')}
										/>.
									</p></ListItem
								>
								<ListItem
									><p>
										Rewards: 1x fixed for quest clear, 1x fixed for no carts, 1%
										chance of 1x extra per reward slot.
									</p></ListItem
								>
							</UnorderedList>
						</ListItem>
						<ListItem
							><InlineTooltip
								text="Shiten Lock"
								tooltip="Item"
								iconType="component"
								icon={getItemIcon('Question Mark')}
								iconColor={ItemColors.find((e) => e.name === 'White')?.value}
							/>
							<UnorderedList nested>
								<ListItem
									><p>
										Creates powerful general-purpose <InlineTooltip
											text="Sigils"
											tooltip="Sigil"
											iconType="component"
											icon={getItemIcon('Sigil')}
											iconColor={ItemColors.find((e) => e.name === 'White')
												?.value}
										/> with slightly higher stat ranges than other Shiten Sigils.
									</p></ListItem
								>
								<ListItem
									><p>
										Obtain 1 by defeating either Shiten monster in under 10
										minutes.
									</p></ListItem
								>
							</UnorderedList>
						</ListItem>
					</UnorderedList>
					<p>
						You can use <InlineTooltip
							text="Lucky Charms"
							tooltip="Item"
							iconType="component"
							icon={getItemIcon('Sac')}
							iconColor={ItemColors.find((e) => e.name === 'Pink')?.value}
						/> to get extra Shiten rewards.
					</p>
					<section>
						<SectionHeading title="Advanced Shiten" level={3} />
						<div>
							<p class="spaced-paragraph">
								Advanced Shiten or Upper Shiten quests are similar to the
								standard ones but with significantly increased health and attack
								values.
							</p>
							<p><strong>Items:</strong></p>
							<UnorderedList>
								<ListItem
									><InlineTooltip
										text="Upper Shiten Key"
										tooltip="Item"
										iconType="component"
										icon={getItemIcon('Question Mark')}
										iconColor={ItemColors.find((e) => e.name === 'White')
											?.value}
									/>
									<UnorderedList nested>
										<ListItem
											><p>
												Creates powerful Affinity and Attack sigils.
											</p></ListItem
										>
										<ListItem
											><p>
												Obtained by defeating <InlineTooltip
													text="Upper Shiten UNKNOWN"
													tooltip="Monster"
													iconType="file"
													icon={getMonsterIcon('Shiten UNKNOWN')}
												/>.
											</p></ListItem
										>
										<ListItem
											><p>
												Rewards: 2x fixed for quest clear, 1x fixed for no
												carts, 1% chance of 2x extra per reward slot.
											</p></ListItem
										>
									</UnorderedList>
								</ListItem>

								<ListItem
									><InlineTooltip
										text="Upper Shiten Lock"
										tooltip="Item"
										iconType="component"
										icon={getItemIcon('Question Mark')}
										iconColor={ItemColors.find((e) => e.name === 'White')
											?.value}
									/>
									<UnorderedList nested>
										<ListItem
											><p>
												Creates powerful Elemental and Attack sigils.
											</p></ListItem
										>
										<ListItem
											><p>
												Obtained by defeating <InlineTooltip
													text="Upper Shiten Disufiroa"
													tooltip="Monster"
													iconType="file"
													icon={getMonsterIcon('Shiten Disufiroa')}
												/>.
											</p></ListItem
										>
										<ListItem
											><p>
												Rewards: 2x fixed for quest clear, 1x fixed for no
												carts, 1% chance of 2x extra per reward slot.
											</p></ListItem
										>
									</UnorderedList>
								</ListItem>
							</UnorderedList>
							<p>
								You can use <InlineTooltip
									text="Lucky Charms"
									tooltip="Item"
									iconType="component"
									icon={getItemIcon('Sac')}
									iconColor={ItemColors.find((e) => e.name === 'Pink')?.value}
								/> to get extra Shiten rewards.
							</p>
						</div>
					</section>
				</div>
			</section>
			<section>
				<SectionHeading level={2} title="Recipes" />
				<div>
					<p>
						There are a total of {sigilsRecipes.length} sigil recipes. For more information
						about the recommended sigils to use for a weapon type, refer to <Link
							inline
							href="/hunter-notes/weapons">the weapons category page.</Link
						>
					</p>
					<div class="table">
						<DataTable
							id="sigil-recipes-dom"
							sortable
							zebra
							size="medium"
							headers={[
								{ key: 'recipeName', value: 'Recipe' },
								{ key: 'sigilSkill', value: 'Skill' },
								{ key: 'rollPercentage', value: 'Percentage' },
								{ key: 'rollMin', value: 'Minimum Value' },
								{ key: 'rollMax', value: 'Maximum Value' },
							]}
							rows={filteredRecipes}
							><Toolbar
								><div class="toolbar">
									<CopyButton
										iconDescription={'Copy as CSV'}
										text={getCSVFromArray(transformedSigils)}
									/>
									<Button
										kind="tertiary"
										icon={Download}
										on:click={() =>
											downloadDomAsPng('sigil-recipes-dom', 'sigil-recipes')}
										>Download</Button
									>
									<Dropdown
										titleText="Category"
										bind:selectedId={selectedCategory}
										items={categoryNames}
									/>
									<MultiSelect
										type="inline"
										label="Select skills..."
										items={mappedSigilSkills}
										bind:selectedIds={selectedSkills}
									/>
									<ToolbarSearch
										shouldFilterRows
										value=""
										bind:filteredRowIds={recipesTableFilteredRowIds}
									/>
								</div>
							</Toolbar>

							<svelte:fragment slot="cell" let:cell>
								{#if cell.key === 'rollMin' && cell.value < 0}
									<p style:color="var(--ctp-red)">{cell.value}</p>
								{:else if cell.key === 'rollPercentage'}
									<p>
										{cell.value}{cell.value === '-' ||
										cell.value === 'Guaranteed'
											? ''
											: '%'}
									</p>
								{:else}
									<p>{cell.value}</p>
								{/if}
							</svelte:fragment>
						</DataTable>
					</div>
					<UnorderedList>
						<ListItem
							><p>
								Twinhead [Top] and Twinhead [Speed] can also grant a random Tech
								Boost skill, with a 30% and 37% chance respectively.
							</p></ListItem
						>
						<ListItem
							><p>
								The AOE Zenith Sigil stats might be inaccurate, rather it may
								first select a roll type and then rolls a stat.
							</p></ListItem
						>
					</UnorderedList>
				</div>
			</section>
			<section>
				<SectionHeading level={2} title="Skills" />
				<div>
					<!--TODO: include totals in other pages tables-->
					<p>
						There are a total of {sigilsInfo.length} sigil skills. For more information
						about the recommended sigils to use for a weapon type, refer to <Link
							inline
							href="/hunter-notes/weapons">the weapons category page.</Link
						>
					</p>
					<div class="table">
						<DataTable
							useStaticWidth
							id="sigil-skills-dom"
							sortable
							zebra
							size="medium"
							headers={[
								{ key: 'tree', value: 'Tree' },
								{ key: 'name', value: 'Skill' },
								{ key: 'minimumPoints', value: 'Minimum Value' },
								{ key: 'maximumPoints', value: 'Maximum Value' },
								{ key: 'effect', value: 'Effect' },
								{ key: 'category', value: 'Category' },
							]}
							rows={sigilsInfo.map((e, i) => {
								return {
									id: i.toString(),
									tree: e.tree,
									name: e.name,
									minimumPoints: e.minimumPoints,
									maximumPoints: e.maximumPoints,
									effect: e.effect,
									demo: e.demo,
									category: e.category,
								};
							})}
							><Toolbar
								><div class="toolbar">
									<CopyButton
										iconDescription={'Copy as CSV'}
										text={getCSVFromArray(
											sigilsInfo.map((e, i) => {
												return {
													id: i.toString(),
													tree: e.tree,
													name: e.name,
													minimumPoints: e.minimumPoints,
													maximumPoints: e.maximumPoints,
													effect: e.effect,
													demo: e.demo,
													category: e.category,
												};
											}),
										)}
									/>
									<Button
										kind="tertiary"
										icon={Download}
										on:click={() =>
											downloadDomAsPng('sigil-skills-dom', 'sigil-skills')}
										>Download</Button
									>
									<ToolbarSearch
										shouldFilterRows
										value="attack"
										bind:filteredRowIds={skillsTableFilteredRowIds}
									/>
								</div>
							</Toolbar>

							<svelte:fragment slot="cell" let:cell>
								{#if cell.key === 'minimumPoints' && cell.value < 0}
									<p style:color="var(--ctp-red)">{cell.value}</p>
								{:else if cell.value === 0 && (cell.key === 'minimumPoints' || cell.key === 'maximumPoints')}
									<p>-</p>
								{:else if cell.key === 'name' && sigilsInfo.find((e) => e.name === cell.value)?.demo}
									<button
										class="table-button"
										on:click={() => changeModal(cell, 'Sigil')}
									>
										<span>{cell.value}</span><Image
											size={20}
											fill="var(--ctp-blue)"
										/></button
									>
								{:else}
									<p>{cell.value}</p>
								{/if}
							</svelte:fragment>
						</DataTable>
					</div>
					<UnorderedList>
						<ListItem
							><p>
								When using UL sigils, only one "Up" roll can be active at a
								time. For example, if you have a +14 DS Up and a +12 DS Up
								sigil, only the +14 will be counted, not combined to +26.
							</p></ListItem
						>
					</UnorderedList>
				</div>
			</section>

			<section>
				<SectionHeading level={2} title="Zenith Sigils" />
				<div>
					<p class="spaced-paragraph">
						Zenith Sigils are a new type of sigil introduced in the <InlineTooltip
							text="ZZ update"
							tooltip="Game"
							iconType="file"
							icon={gameInfo.find(
								(e) => e.name === 'Monster Hunter Frontier Z Zenith',
							)?.icon}
						/>. Unlike standard sigils, which provide always-on passive effects,
						Zenith Sigils have a base duration of 15 or 20 seconds, depending on
						the zenith sigil type. There are two functional types: Standard
						Zenith Sigils and AoE Zenith Sigils.
					</p>
					<p class="spaced-paragraph">
						Zenith Sigils can be obtained from any rank of Zenith. Although the
						exact drop rate is unknown, it is low and likely similar to the rare
						carve reward rate for each Zenith tier (1%, 3%, 5%, 7%).
					</p>
					<p>
						Both types of Zenith Sigils work in the same way: a new item icon in
						the shape of a sigil appears on your item bar, which can be used at
						any time, provided you are not actively performing an action, by
						hitting the use button.
					</p>
					<div>
						{#await import('$lib/player/Player.svelte') then { default: Player }}
							<svelte:component
								this={Player}
								{...{
									title: 'Zenith Sigil',
									src: 'https://res.cloudinary.com/mhfz/video/upload/v1724366680/supplemental/animated/zenith-sigil.webm',
								}}
							/>
						{/await}
					</div>
					<section>
						<SectionHeading level={3} title="Standard Zenith Sigils" />
						<div>
							<p class="spaced-paragraph">
								Activating a Standard Sigil applies several buffs to you. These
								buffs have a fixed duration and recharge time based on the
								values rolled on the sigil itself. The base duration is 15
								seconds, with the duration value of the sigil added to this
								(e.g., a +4 duration results in 19 seconds). The base recharge
								time is 2 minutes (or 120 seconds), with the sigil value
								subtracted (e.g., a +14 recharge value results in 106 seconds).
							</p>
							<div class="item-sigil">
								<Item
									itemType="Sigil"
									itemRankType="Z"
									colorName="Purple"
									rarity={11}
									iconName="Sigil"
									sigil={{
										slot1: {
											name: 'Attack',
											value: 15,
										},
										slot2: {
											name: 'Duration',
											value: 12,
										},
										slot3: {
											name: 'Cooldown',
											value: 17,
										},
										slot4: {
											name: '',
											value: 0,
										},
									}}
								/>
							</div>
							<p>
								The buffs provided by the sigils are much stronger than their
								values suggest (e.g., +15 Attack is +330 True Raw). With good
								management, a decent roll can be as effective as a top-end roll
								on a standard sigil.
							</p>
						</div>
					</section>
					<section>
						<SectionHeading level={3} title="Area of Effect Zenith Sigils" />
						<div>
							<p class="spaced-paragraph">
								Activating an Area of Effect Sigil creates a dome on the ground
								around where you activated it. This dome lasts for 20 seconds
								and has a recharge duration of 2 minutes.
							</p>
							<p class="spaced-paragraph">
								AoE Sigils can buff Attack, Elemental, Status, All Resistance,
								Affinity, and Stun output, as well as providing passive healing.
								A single sigil can roll multiple types of buffs, causing the
								dome to alternate colors to indicate which buffs are active.
							</p>
							<div class="item-sigil">
								<Item
									itemType="Sigil"
									itemRankType="Z"
									colorName="Purple"
									iconName="Sigil"
									rarity={11}
									sigil={{
										slot1: {
											name: 'Attack',
											value: 15,
										},
										slot2: {
											name: 'Element',
											value: 12,
										},
										slot3: {
											name: 'Attack',
											value: 10,
										},
										slot4: {
											name: '',
											value: 0,
										},
									}}
								/>
							</div>
							<p class="spaced-paragraph">
								Like Standard Sigils, the values on AoE Sigils do not directly
								correlate to the actual buff amounts. For example, a sigil with
								+1 Elemental and +14 Resistances will increase Elemental by 100
								and All Resistances by 28. Higher rolls result in significantly
								better buffs.
							</p>
							<div>
								{#await import('$lib/player/Player.svelte') then { default: Player }}
									<svelte:component
										this={Player}
										{...{
											title: 'AoE Zenith Sigil',
											src: 'https://res.cloudinary.com/mhfz/video/upload/f_auto:video,q_auto/v1/supplemental/animated/zenith-aoe.webm',
										}}
									/>
								{/await}
							</div>
							<p>
								All effects of the sigil are active at the same time when inside
								the dome, and multiple values of the same effect stack.
							</p>
						</div>
					</section>
				</div>
			</section>

			<section>
				<SectionHeading level={2} title="Unlimited Sigils" />
				<div>
					<p class="spaced-paragraph">
						The main purpose of Unlimited Mode (UL) is to grant access to
						powerful new Up Sigils for each weapon type, such as <InlineTooltip
							text="Dual Swords Up"
							tooltip="Sigil Skill"
							iconType="component"
							icon={getItemIcon('Sigil')}
						/>. This sigil skill provides the stated value to Attack, Affinity,
						and Elemental simultaneously. For example, a Dual Swords Up +10
						sigil would give 10 True Raw, 10% Affinity, and 100 Elemental. These
						sigils can roll two additional values up to +15, meaning a single
						sigil can have up to 75 effective points, making them highly
						desirable for players who don't use all slots in a weapon for
						decorations.
					</p>
					<div class="item-sigil">
						<Item
							itemType="Sigil"
							itemRankType=""
							colorName="Purple"
							rarity={11}
							iconName="Sigil"
							sigil={{
								slot1: {
									name: 'DS Up',
									value: 15,
								},
								slot2: {
									name: 'Attack',
									value: 12,
								},
								slot3: {
									name: 'Element',
									value: 10,
								},
								slot4: {
									name: '',
									value: 0,
								},
							}}
						/>
					</div>
					<p class="spaced-paragraph">
						The materials for these sigils drop at a relatively low rate, but
						there are three featured monsters each day that offer boosted drop
						rates. The items are unique to each weapon, making it a long-term
						goal to hunt many UL monsters to obtain better UL Sigils.
					</p>
					<p class="spaced-paragraph">
						In addition to Sigil materials, UL Mode monsters also drop doubled
						Transmog Lotto points, Hiden <InlineTooltip
							icon={getItemIcon('Ticket')}
							iconType="component"
							text="Souls"
							tooltip="Item"
						/>, <InlineTooltip
							icon={getItemIcon('Ball')}
							iconType="component"
							text="Ribbons"
							tooltip="Item"
						/>, and <InlineTooltip
							icon={getItemIcon('Coin')}
							iconType="component"
							text="Merits"
							tooltip="Item"
						/>. This makes UL Mode an excellent source for grinding Hiden
						Materials, allowing you to focus on challenging content instead of
						early HR and GR level content.
					</p>
					<p class="spaced-paragraph">
						The overlay can show you if a monster is either the standard
						variant, Hardcore (HC) or Unlimited (UL) via an icon next to the
						name in the HP Bar.
					</p>
					<p>
						If you want to calculate how much damage all of your equipped sigils
						do and compare the damage between them, check our <Link
							inline
							href="/tools/calculator/sigil">Sigils Calculator.</Link
						>. If you want to simulate sigils rolls, check our <Link
							inline
							href="/tools/simulator/sigil">Sigils Simulator.</Link
						>
					</p>
				</div>
			</section>

			<div class="page-turn">
				<PageTurn pageUrlPathName={$page.url.pathname} />
			</div>
		</div>
	</div>
</HunterNotesPage>

<style lang="scss">
	.page-turn {
		margin-top: 4rem;
	}

	.item-sigil {
		display: flex;
		justify-content: center;
		margin-top: 2rem;
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
		height: 80vh;
		overflow-y: auto;
	}

	.modal-content {
		display: flex;
		gap: var(--cds-spacing-06);
		flex-direction: column;
	}

	.modal-content > img {
		max-width: 60vh;
		display: block;
		margin-left: auto;
		margin-right: auto;
		width: 50%;
	}

	.modal-open-noblur {
		-webkit-filter: blur(0);
		filter: blur(0);
		opacity: 1;
		-webkit-transition:
			opacity 500ms ease,
			-webkit-filter 500ms ease;
		transition:
			opacity 500ms ease,
			-webkit-filter 500ms ease;
		transition:
			filter 500ms ease,
			opacity 500ms ease;
		transition:
			filter 500ms ease,
			opacity 500ms ease,
			-webkit-filter 500ms ease;
	}

	.modal-open-blur {
		-webkit-filter: blur(8px);
		filter: blur(4px);
		opacity: 1;
	}

	.data-table-title {
		display: flex;
		gap: 2rem;
		align-items: center;
	}

	.datatable-bottom {
		margin-top: 2rem;
	}

	.modal-mobile-popover-image {
		max-width: 100%; /* Ensures the image does not exceed the width of its container */
		max-height: 100%; /* Ensures the image does not exceed the height of its container */
		object-fit: cover; /* Ensures the image covers the area without distorting its aspect ratio */
		display: inline-block; /* Removes any extra space below the image */
	}

	.modal-mobile-container {
		display: flex;
		gap: 0.5rem;
		padding: var(--cds-spacing-04);
		flex-direction: column;
		max-width: 48ch;
		overflow: hidden;
	}

	.modal-mobile-link:hover {
		text-decoration: underline;
	}

	.modal-mobile-image {
		grid-area: image;
		display: inline-block;
		max-width: 8ch;
	}

	.modal-mobile-button {
		grid-area: button;
	}

	.modal-mobile-title {
		display: -webkit-box;
		-webkit-line-clamp: 1; /* number of lines to show */
		line-clamp: 1;
		-webkit-box-orient: vertical;
		overflow: hidden;
		grid-area: title;
		font-weight: bold;
		height: fit-content;
	}

	.modal-mobile-subtitle {
		display: -webkit-box;
		-webkit-line-clamp: 2; /* number of lines to show */
		line-clamp: 2;
		-webkit-box-orient: vertical;
		overflow: hidden;
		grid-area: subtitle;
		color: var(--ctp-subtext0);
	}

	.modal-mobile-title,
	.modal-mobile-subtitle {
		padding-left: 0.5rem;
		padding-top: 0;
		padding-bottom: 0;
		margin: 0;
	}

	.modal-mobile-description {
		grid-area: description;
		text-wrap: wrap;
		margin-top: 1rem;
		display: -webkit-box;
		-webkit-line-clamp: 3; /* number of lines to show */
		line-clamp: 3;
		-webkit-box-orient: vertical;
		overflow: hidden;
	}

	.modal-mobile-contents-top {
		display: grid;
		grid-template-areas:
			'image title button'
			'image subtitle subtitle'
			'description description description';
		gap: 0;
		grid-template-columns: auto 1fr auto;
		grid-template-rows: auto 1fr auto;
	}

	.modal-mobile-contents-bottom {
		display: flex;
		gap: 0.5rem;
	}

	button {
		all: unset;
	}

	.table-button {
		display: flex;
		align-items: center;
		font-weight: bold;
		gap: 0.25rem;

		img {
			max-width: 4ch;
		}
	}
</style>
