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
	import UnorderedList from 'carbon-components-svelte/src/UnorderedList/UnorderedList.svelte';
	import ListItem from 'carbon-components-svelte/src/ListItem/ListItem.svelte';
	import { getItemIcon } from '$lib/client/modules/frontier/items';
	import Pagination from 'carbon-components-svelte/src/Pagination/Pagination.svelte';
	import ToolbarSearch from 'carbon-components-svelte/src/DataTable/ToolbarSearch.svelte';
	import Button from 'carbon-components-svelte/src/Button/Button.svelte';
	import { page } from '$app/stores';
	import CenteredFigure from '$lib/client/components/CenteredFigure.svelte';
	import {
		ingredients,
		recipes,
	} from '$lib/client/modules/frontier/guild-food';
	import Download from 'carbon-icons-svelte/lib/Download.svelte';
	import { LocationIcons } from '$lib/client/modules/frontier/locations';
	import { ItemColors } from '$lib/client/modules/frontier/items';
	import { getTag } from '$lib/client/modules/frontier/tags';
	import { downloadDomAsPng } from '$lib/client/modules/download';

	let recipesTablePageSize = $state(7);
	let recipesTablePage = $state(1);
	let recipesTableFilteredRowIds: string[] = $state([]);
</script>

<TableOfContentsPage displayTOC={true}>
	<div>
		<SectionHeadingTopLevel title={'Guild Hall'} />
		<section>
			<SectionHeading level={2} title="Guild Food" />
			<div>
				<div class="spaced-paragraph">
					Guild cooking is available at guild rank 15 in the <InlineTooltip
						text="Guild Hall"
						tooltip="Location"
						icon={LocationIcons.find((e) => e.name === 'Guild Hall')?.icon}
						iconType="file"
					/> and is a mini-game for up to four people. Cooking can activate effects
					independent of armor skills.
				</div>
				<p>
					The skill effect from cooking lasts for 90 minutes. If a new skill is
					obtained, it overwrites the previous effect.
				</p>
				<CenteredFigure
					width={81}
					height={105}
					type="file"
					src="https://github.com/DorielRivalet/mhfz-overlay/raw/main/demo/buffs.png"
					alt="Overlay timers"
					figcaption="You can check the duration with the overlay."
				/>

				<CenteredFigure
					width={'100%'}
					type="file"
					src={'https://res.cloudinary.com/mhfz/image/upload/f_auto,q_auto/v1/supplemental/guild-food-cat.webp'}
					alt="Dishes"
					figcaption="Up to 6 dishes can be stored as leftovers for 1 hour at the cat in the cooking area."
				/>

				<div class="spaced-paragraph"></div>
				<div class="spaced-paragraph">
					Yellow ingredients are "base ingredients" and pink ingredients are
					"auxiliary." These allow you to create dishes via the menu. Selecting
					any other option results in a Guild's Yaminabe.
				</div>
				<div class="spaced-paragraph">
					Successfully cooking Guild Food grants a skill with three levels of
					each skill available, and a potential failure option that applies a
					debuff instead of a buff.
				</div>
				<div class="spaced-paragraph">
					During the minigame, press confirm to keep the icon on a meter within
					the blue or green bars. Blue produces the best results, and green
					produces good ones. Cat stamps appear in the top right to indicate
					your performance until the cooking time expires.
				</div>
				<div class="spaced-paragraph">
					By repeatedly pressing confirm, the cursor moves to the right.
					Hovering over the green "Success Area" or blue "Great Success Area"
					accumulates a stamp below the food meter. Green stamps indicate
					success, and blue stamps indicate great success. More participants
					increase the chance of a great success.
				</div>
				<div class="spaced-paragraph">
					Upon completion, the food is sent to the Kitchen Cat, who manages
					cooked food. You will be informed of the buff it grants or asked to
					replace an existing meal if there are no available spots.
				</div>
				<div class="spaced-paragraph">
					Cooked food is available to all guild members after being posted with
					the Kitchen Cat for one hour. The buffs last one hour and thirty
					minutes, giving a maximum of two hours and thirty minutes of skill
					duration per cooking session.
				</div>
				<div class="spaced-paragraph">
					For food with random results, you can keep eating it at the Cat until
					you get the desired skill. The skills available depend on the success
					level, with +20 to elemental resistances in the normal success pool.
				</div>

				<div>
					{#await import('$lib/player/Player.svelte') then { default: Player }}
						<Player
							{...{
								title: 'Guild Cooking',
								src: 'https://res.cloudinary.com/mhfz/video/upload/f_auto:video,q_auto/v1/supplemental/animated/guild-food.webm',
							}}
						/>
					{/await}
				</div>

				<div class="spaced-paragraph">
					Many ingredients can be used for cooking, obtained from the Guild
					Store or the Adventure Boat. The Guild Store requires payment with
					either standard Zeny or <InlineTooltip
						text="Guild Tickets"
						tooltip="Item"
						icon={getItemIcon('Ticket')}
						iconColor={ItemColors.find((e) => e.name === 'Green')?.value}
					/>, while the Adventure Boat relies on RNG with rare items needing
					materials from the <InlineTooltip
						text="Diva Defense"
						tooltip="Event"
						icon={LocationIcons.find((e) => e.name === 'Interception')?.icon}
						iconType="file"
					/> Event.
				</div>
				<div class="spaced-paragraph">
					By claiming rewards from <InlineTooltip
						text="Diva Defense"
						tooltip="Event"
						icon={LocationIcons.find((e) => e.name === 'Interception')?.icon}
						iconType="file"
					/>, you will obtain some materials for the Adventure Boat.
				</div>
				<div class="spaced-paragraph">
					You can send a Felyne to a specific location using the Adventure Boat,
					which is the only way to obtain some items for Guild Special Cooking
					recipes, such as those for the Caring Recipes (prevents hitting other
					players with attacks). Sending out cats costs RP, gained at a rate of
					1 per 30 minutes spent in-game. Rewards depend on several factors and
					can be increased by using <InlineTooltip
						text="Guild Tickets"
						tooltip="Item"
						icon={getItemIcon('Ticket')}
						iconColor={ItemColors.find((e) => e.name === 'Green')?.value}
					/> through the NPC on land after the boat departs.
				</div>
				<div class="spaced-paragraph">
					After the boat returns, claim rewards in front of it. Results vary
					from plain boxes and debris to shining treasures, depending on mission
					success. The boat is out for 6 hours, and all guild members can
					contribute and claim rewards.
				</div>
				<div class="spaced-paragraph">
					There are different cooking modes: normal mode, which doesn't cost any
					<InlineTooltip
						text="Guild Tickets"
						tooltip="Item"
						icon={getItemIcon('Ticket')}
						iconColor={ItemColors.find((e) => e.name === 'Green')?.value}
					/>, and six <InlineTooltip
						text="Guild Ticket"
						tooltip="Item"
						icon={getItemIcon('Ticket')}
						iconColor={ItemColors.find((e) => e.name === 'Green')?.value}
					/> options that alter the results and minigame functions.
				</div>
				<div class="spaced-paragraph">
					Recipes exist for each status you might want, with four result states
					from cooking: Great Failure, Failure, Success, and Great Success.
					These are indicated by the number of stamps collected during the
					minigame: no stamps is a Great Failure, red stamps result in failure,
					green in success, and blue in great success. For fighting Zenith
					monsters, use the Resistance recipes; 55 resistance is required to
					avoid extreme blights, and you can get +83 elemental resistance from a
					combination of SR Skills and Guild Cooking.
				</div>
				<div class="spaced-paragraph">
					Unless you are confident in consistently achieving Great Success, use
					recipes with red ingredients and the Success Level Up cooking option
					to upgrade success into Great Success.
				</div>

				<div>
					<DataTable
						title="Chef's Wisdom"
						useStaticWidth
						sortable
						zebra
						size="medium"
						headers={[
							{ key: 'option', value: 'Option' },
							{ key: 'tickets', value: 'Tickets' },
							{ key: 'effect', value: 'Effect' },
						]}
						rows={[
							{
								id: '1',
								option: 'Secret of Success',
								tickets: '10',
								effect: 'Widens the green success area.',
							},
							{
								id: '2',
								option: 'No failure allowed	',
								tickets: '10',
								effect: 'Removes the red large failure area.',
							},
							{
								id: '3',
								option: 'Ultimate Success',
								tickets: '10',
								effect: 'Doubles the size of the blue great success area.',
							},
							{
								id: '4',
								option: 'Cooking Technique',
								tickets: '10',
								effect: 'The cursor moves backwards slower.',
							},
							{
								id: '5',
								option: 'Secret seasoning	',
								tickets: '20',
								effect: 'Raises the success level by one.',
							},
							{
								id: '6',
								option: 'Mystery seasoning	',
								tickets: '5',
								effect: 'Randomizes the results within the recipe band.',
							},
						]}
						><Toolbar
							><div class="toolbar">
								<CopyButton
									iconDescription={'Copy as CSV'}
									text={getCSVFromArray([
										{
											id: '1',
											option: 'Secret of Success',
											tickets: '10',
											effect: 'Widens the green success area.',
										},
										{
											id: '2',
											option: 'No Failure Allowed',
											tickets: '10',
											effect: 'Removes the red large failure area.',
										},
										{
											id: '3',
											option: 'Ultimate Success',
											tickets: '10',
											effect:
												'Doubles the size of the blue great success area.',
										},
										{
											id: '4',
											option: 'Cooking Technique',
											tickets: '10',
											effect: 'The cursor moves backwards slower.',
										},
										{
											id: '5',
											option: 'Secret Seasoning',
											tickets: '20',
											effect: 'Raises the success level by one.',
										},
										{
											id: '6',
											option: 'Mystery Seasoning',
											tickets: '5',
											effect: 'Randomizes the results within the recipe band.',
										},
									])}
								/>
							</div>
						</Toolbar>

						{#snippet cell({ cell })}
							{#if cell.key === 'tickets'}
								<InlineTooltip
									text={cell.value}
									tooltip="Guild Ticket"
									icon={getItemIcon('Ticket')}
									iconColor={ItemColors.find((e) => e.name === 'Green')?.value}
								/>
							{:else}
								<p>{cell.value}</p>
							{/if}
						{/snippet}
					</DataTable>
				</div>
			</div>

			<section>
				<SectionHeading level={3} title="Recipes" />
				<div>
					<div class="spaced-paragraph">
						The locations to purchase guild food ingredients can vary by private
						server. The possible locations can be: General Store, Grocery Store,
						Road Shop, Guild Shop, Adventure Cat, Adventure Cat (Grand Voyage
						Destinations) and Interception Rewards.
					</div>
					<div class="table table-with-pagination">
						<DataTable
							id="recipes-dom"
							useStaticWidth
							pageSize={recipesTablePageSize}
							page={recipesTablePage}
							sortable
							zebra
							size="medium"
							headers={[
								{ key: 'dish', value: 'Dish' },
								{ key: 'base', value: 'Base Ingredient', minWidth: '12rem' },
								{
									key: 'auxiliary1',
									value: 'Auxiliary Ingredient 1',
									minWidth: '12rem',
								},
								{
									key: 'auxiliary2',
									value: 'Auxiliary Ingredient 2',
									minWidth: '12rem',
								},
								{
									key: 'auxiliary3',
									value: 'Auxiliary Ingredient 3',
									minWidth: '12rem',
								},
								{ key: 'greatFailure', value: 'Great Failure' },
								{ key: 'failure', value: 'Failure' },
								{ key: 'success', value: 'Success' },
								{ key: 'greatSuccess', value: 'Great Success' },
							]}
							rows={recipes.map((e) => {
								return {
									id: `${e.id}-${JSON.stringify(e.base)}-${JSON.stringify(e.auxiliary1)}-${JSON.stringify(e.auxiliary2)}-${JSON.stringify(e.auxiliary3)}-${e.greatSuccess}`,
									dish: e.dish,
									base: JSON.stringify(e.base),
									auxiliary1: JSON.stringify(e.auxiliary1),
									auxiliary2: JSON.stringify(e.auxiliary2),
									auxiliary3: JSON.stringify(e.auxiliary3),
									greatFailure: e.greatFailure,
									failure: e.failure,
									success: e.success,
									greatSuccess: e.greatSuccess,
								};
							})}
							><Toolbar
								><div class="toolbar">
									<CopyButton
										iconDescription={'Copy as CSV'}
										text={getCSVFromArray(
											recipes.map((e) => {
												return {
													dish: e.dish,
													base: JSON.stringify(e.base),
													auxiliary1: JSON.stringify(e.auxiliary1),
													auxiliary2: JSON.stringify(e.auxiliary2),
													auxiliary3: JSON.stringify(e.auxiliary3),
													greatFailure: e.greatFailure,
													failure: e.failure,
													success: e.success,
													greatSuccess: e.greatSuccess,
												};
											}),
										)}
									/>
									<Button
										kind="tertiary"
										icon={Download}
										on:click={() => downloadDomAsPng('recipes-dom', 'recipes')}
										>Download</Button
									>
									<ToolbarSearch
										shouldFilterRows
										value="all res"
										bind:filteredRowIds={recipesTableFilteredRowIds}
									/>
								</div>
							</Toolbar>

							{#snippet cell({ cell })}
								{#if cell.key === 'base' || cell.key === 'auxiliary1' || cell.key === 'auxiliary2' || cell.key === 'auxiliary3'}
									{#if cell.value === '[]'}
										<div>-</div>
									{:else}
										<div class="ingredients">
											{#each JSON.parse(cell.value) as ingredient}
												<InlineTooltip
													text={ingredient}
													tooltip="Ingredient"
													icon={ingredients.find((e) => e.name === ingredient)
														?.icon}
													iconType="component"
													iconColor={ingredients.find(
														(e) => e.name === ingredient,
													)?.color}
												/>
											{/each}
										</div>
									{/if}
								{:else}
									<p>{cell.value}</p>
								{/if}
							{/snippet}
						</DataTable>
						<Pagination
							pageSizes={[7, 32]}
							bind:pageSize={recipesTablePageSize}
							bind:page={recipesTablePage}
							totalItems={recipesTableFilteredRowIds.length}
						/>
					</div>
				</div>
			</section>
		</section>
		<section>
			<SectionHeading level={2} title="Guild Poogie" />
			<div>
				<div class="spaced-paragraph">
					Guild Poogies, found in the <InlineTooltip
						text="Guild Hall"
						tooltip="Location"
						icon={LocationIcons.find((e) => e.name === 'Guild Hall')?.icon}
						iconType="file"
					/>, can grant bonuses upon being successfully fed (indicated by them
					jumping up and down in a white flash), a Guild can have three
					different Poogie Outfit that each grant a different skill when fed
					successfully. The easiest way to get the buff is to to mass feed them
					<InlineTooltip
						text="Pugi Crackers"
						tooltip="Item"
						iconColor={ItemColors.find((e) => e.name === 'Yellow')?.value}
						icon={getItemIcon('Scale')}
					/> from the Guild Shop.
				</div>

				<CenteredFigure
					width={'100%'}
					type="file"
					src={'https://res.cloudinary.com/mhfz/image/upload/f_auto,q_auto/v1/supplemental/guild-poogie.webp'}
					alt="Guild poogie"
					figcaption="Poogie after succesful skill activation."
				/>

				<div class="spaced-paragraph">
					You can only have one buff active at a time. You only need to feed
					once per log in. You can check your current skill in the last page of
					your equipment menu.
				</div>

				<div class="spaced-paragraph">
					All poogie buffs stack with any similar skills. For example, you can
					use the Luck effect poogie even if you have <InlineTooltip
						text="Great Luck"
						tooltip="Armor Skill"
						icon={getTag('Armor Skill').icon}
					/>
					or Premium Course active. The Luck poogie has a 12.5% chance to reroll
					a failed reward roll and a 12.5% chance to add additional reward slots.
					You can get a maximum of 24 standard reward slots if you are using <InlineTooltip
						text="Great Luck"
						tooltip="Armor Skill"
						icon={getTag('Armor Skill').icon}
					/> with the poogie active. The poogie only affects the top 24 Main Reward
					slots and does not change any of the other types of rewards (Sub Objectives,
					Additional, Breaks, Partner, etc.).
				</div>

				<p>
					<strong>Only the guild leader can purchase and change clothes.</strong
					>
				</p>
			</div>
			<section>
				<SectionHeading level={3} title="Guild Store Discount" />
				<div>
					<p>
						The discount, from guild rank 5, is activated by successfully
						completing the "pat on the head" and "it seems pretty happy"
						responses a specified number of times.
					</p>

					<UnorderedList class="spaced-list">
						<ListItem
							><p>5 times successful: Guild shop 5% discount.</p></ListItem
						>
						<ListItem
							><p>10 times successful: Guild shop 10% discount.</p></ListItem
						>
						<ListItem
							><p>15 times successful: Guild shop 15% discount.</p></ListItem
						>
					</UnorderedList>

					<p>The effect disappears in any of the following events:</p>
					<UnorderedList class="spaced-list">
						<ListItem><p>12 hours have passed.</p></ListItem>
						<ListItem><p>Logout.</p></ListItem>
						<ListItem
							><p>
								Petting poogie for a long time and it getting angry.
							</p></ListItem
						>
					</UnorderedList>
				</div>
			</section>
			<section>
				<SectionHeading level={3} title="Guild Poogie Skills" />
				<div>
					<div class="spaced-paragraph">
						Guild Poogie Skills are unlocked at Guild Rank 6. Giving food and
						triggering the alert "seems to love it!" will activate a skill
						according to the Poogie's clothes with a probability.
					</div>

					<div class="table">
						<DataTable
							id="guild-poogies-dom"
							sortable
							useStaticWidth
							zebra
							size="medium"
							headers={[
								{ key: 'image', value: 'Image' },
								{ key: 'rank', value: 'Rank' },
								{ key: 'costume', value: 'Costume' },
								{ key: 'skill', value: 'Skill' },
								{ key: 'effect', value: 'Effect' },
								{ key: 'materials', value: 'Materials' },
							]}
							rows={[
								{
									image:
										'https://res.cloudinary.com/mhfz/image/upload/f_auto,q_auto/v1/supplemental/red-and-white.webp',
									id: '1',
									rank: '6',
									costume: 'Red & White',
									skill: 'Poogie Thrift',
									effect:
										'Flute, Pickaxe and Bugnet are 1/4 less likely to break (Stacks with Whim).',
									materials: '-',
								},
								{
									image:
										'https://res.cloudinary.com/mhfz/image/upload/f_auto,q_auto/v1/supplemental/naked-emperor.webp',
									id: '2',
									rank: '6',
									costume: 'Naked Emperor',
									skill: 'Poogie Discount',
									effect:
										'Furniture store purchase price (Material/Zenny) 10% discount.',
									materials: 'Wht Durable Fabricx45, Appropriate Partsx15',
								},
								{
									image:
										'https://res.cloudinary.com/mhfz/image/upload/f_auto,q_auto/v1/supplemental/soporific-white.webp',
									id: '3',
									rank: '6',
									costume: 'Soporific White',
									skill: 'Poogie Taijutsu',
									effect:
										'Halves stamina consumption when evading and guarding.',
									materials:
										'Wht Durable Fabricx75, Flexible Medicinex22, Appropriate Partsx30',
								},
								{
									image:
										'https://res.cloudinary.com/mhfz/image/upload/f_auto,q_auto/v1/supplemental/black-green-clash.webp',

									id: '4',
									rank: '6',
									costume: 'Black Green Clash',
									skill: 'Poogie Status Attack',
									effect:
										'1.125x attribute value for status attacks (Can be used with status skills)',
									materials: 'Striped Fabricx45, Green Fabricx30',
								},
								{
									image:
										'https://res.cloudinary.com/mhfz/image/upload/f_auto,q_auto/v1/supplemental/silent-suit.webp',

									id: '5',
									rank: '8',
									costume: 'Silent Suit',
									skill: 'Poogie Reward Technique',
									effect:
										"1/8 chance that the next reward won't be given as a quest reward. In addition, the maximum reward frame will also be increased.",
									materials:
										'Wht Durable Fabricx30, Black Fabricx50, Appropriate Partsx20',
								},
								{
									image:
										'https://res.cloudinary.com/mhfz/image/upload/f_auto,q_auto/v1/supplemental/bewitching-pink.webp',

									id: '6',
									rank: '8',
									costume: 'Bewitching Pink',
									skill: 'Poogie Defense',
									effect:
										'When attacked: 1/4 chance to reduce damage taken by 30% (Can be used with the protection skill).',
									materials: 'Wht Durable Fabricx2, Peach Fabricx45',
								},
								{
									image:
										'https://res.cloudinary.com/mhfz/image/upload/f_auto,q_auto/v1/supplemental/nostalgic-stripes.webp',

									id: '7',
									rank: '8',
									costume: 'Nostalgic Stripe',
									skill: 'Poogie Escape Technique',
									effect: 'Halves stamina when running away.',
									materials: 'Striped Fabricx45, Blue Fabricx25',
								},
								{
									image:
										'https://res.cloudinary.com/mhfz/image/upload/f_auto,q_auto/v1/supplemental/soothing-sky.webp',

									id: '8',
									rank: '8',
									costume: 'Soothing Sky',
									skill: 'Poogie Transporation',
									effect:
										'Halves stamina consumption while running while transporting (Can be used with Marathon Runner skill).',
									materials:
										'Wht Durable Fabricx40, Blue Fabricx35, Appropriate Partsx10',
								},

								{
									image:
										'https://res.cloudinary.com/mhfz/image/upload/f_auto,q_auto/v1/supplemental/gentle-green.webp',

									id: '9',
									rank: '9',
									costume: 'Gentle Green',
									skill: 'Poogie Trap Mastery',
									effect: '100% success in combining pitfall and shock traps.',
									materials:
										'Green Fabricx35, Blue Fabricx20, Appropriate Partsx20',
								},
								{
									image:
										'https://res.cloudinary.com/mhfz/image/upload/f_auto,q_auto/v1/supplemental/restless-brown.webp',

									id: '10',
									rank: '9',
									costume: 'Restless Brown',
									skill: 'Poogie Patience',
									effect:
										'When attacked: 1/6 chance of gaining super armor (no knockback).',
									materials:
										'Brown Fabricx30, Black Fabricx10, Appropriate Partsx30',
								},
							]}
							><Toolbar
								><div class="toolbar">
									<CopyButton
										iconDescription={'Copy as CSV'}
										text={getCSVFromArray([
											{
												id: '1',
												rank: '6',
												costume: 'Red & White',
												skill: 'Poogie Thrift',
												effect:
													'Flute, Pickaxe and Bugnet are 1/4 less likely to break (Stacks with Whim).',
												materials: '-',
											},
											{
												id: '2',
												rank: '6',
												costume: 'Naked Emperor',
												skill: 'Poogie Discount',
												effect:
													'Furniture store purchase price (Material/Zenny) 10% discount.',
												materials:
													'Wht Durable Fabricx45, Appropriate Partsx15',
											},
											{
												id: '3',
												rank: '6',
												costume: 'Soporific White',
												skill: 'Poogie Taijutsu',
												effect:
													'Halves stamina consumption when evading and guarding.',
												materials:
													'Wht Durable Fabricx75, Flexible Medicinex22, Appropriate Partsx30',
											},
											{
												id: '4',
												rank: '6',
												costume: 'Black Green Clash',
												skill: 'Poogie Status Attack',
												effect:
													'1.125x attribute value for status attacks (Can be used with status skills)',
												materials: 'Striped Fabricx45, Green Fabricx30',
											},
											{
												id: '5',
												rank: '8',
												costume: 'Silent Suit',
												skill: 'Poogie Reward Technique',
												effect:
													"1/8 chance that the next reward won't be given as a quest reward. In addition, the maximum reward frame will also be increased.",
												materials:
													'Wht Durable Fabricx30, Black Fabricx50, Appropriate Partsx20',
											},
											{
												id: '6',
												rank: '8',
												costume: 'Bewitching Pink',
												skill: 'Poogie Defense',
												effect:
													'When attacked: 1/4 chance to reduce damage taken by 30% (Can be used with the protection skill).',
												materials: 'Wht Durable Fabricx2, Peach Fabricx45',
											},
											{
												id: '7',
												rank: '8',
												costume: 'Nostalgic Stripe',
												skill: 'Poogie Escape Technique',
												effect: 'Halves stamina when running away.',
												materials: 'Striped Fabricx45, Blue Fabricx25',
											},
											{
												id: '8',
												rank: '8',
												costume: 'Soothing Sky',
												skill: 'Poogie Transporation',
												effect:
													'Halves stamina consumption while running while transporting (Can be used with Marathon Runner skill).',
												materials:
													'Wht Durable Fabricx40, Blue Fabricx35, Appropriate Partsx10',
											},

											{
												id: '9',
												rank: '9',
												costume: 'Gentle Green',
												skill: 'Poogie Trap Mastery',
												effect:
													'100% success in combining pitfall and shock traps.',
												materials:
													'Green Fabricx35, Blue Fabricx20, Appropriate Partsx20',
											},
											{
												id: '10',
												rank: '9',
												costume: 'Restless Brown',
												skill: 'Poogie Patience',
												effect:
													'When attacked: 1/6 chance of gaining super armor (no knockback).',
												materials:
													'Brown Fabricx30, Black Fabricx10, Appropriate Partsx30',
											},
										])}
									/>
									<Button
										kind="tertiary"
										icon={Download}
										on:click={() =>
											downloadDomAsPng('guild-poogies-dom', 'guild-poogies')}
										>Download</Button
									>
								</div>
							</Toolbar>

							{#snippet cell({ cell })}
								{#if cell.key === 'image'}
									<img src={cell.value} alt="Guild poogie" />
								{:else}
									<p>{cell.value}</p>
								{/if}
							{/snippet}
						</DataTable>
					</div>
				</div>
			</section>
			<section>
				<SectionHeading level={3} title="Guild Poogie Clothing Materials" />
				<div>
					<div class="spaced-paragraph">
						Clothing materials are RARE2 and can be put in the guild box.
					</div>
					<div>
						<DataTable
							useStaticWidth
							sortable
							zebra
							size="medium"
							headers={[
								{ key: 'clothingMaterial', value: 'Clothing Material' },
								{ key: 'productionMaterials', value: 'Production Materials' },
							]}
							rows={[
								{
									id: '1',
									clothingMaterial: 'Sturdy Wht Cloth',
									productionMaterials:
										'Anteka Peltx3, Giaprey Hidex2, Blangonga Peltx2',
								},
								{
									id: '2',
									clothingMaterial: 'Appropriate Parts',
									productionMaterials:
										'Sunstonex2, Sticky Caterpillarx1, Sm Monster Bonex1, Machalite Orex3',
								},
								{
									id: '3',
									clothingMaterial: 'Striped Fabric',
									productionMaterials:
										'High Quality Peltx3, Striped Skinx2, Black Rajang Peltx1, Carpenterbugx2',
								},
								{
									id: '4',
									clothingMaterial: 'Green Fabric',
									productionMaterials:
										'Burukku Hidex2, Rathian Scalex3, Gendrome Hidex3, Festi Ticketx1',
								},
								{
									id: '5',
									clothingMaterial: 'Fluffy Serum',
									productionMaterials:
										'Bomb Arowanax3, Firecell Stonex1, Fire Herbx5, Monster Fluidx2',
								},
								{
									id: '6',
									clothingMaterial: 'Black Fabric',
									productionMaterials:
										'Remobra Skin+x2, High Quality Peltx3, B.Gravios Shellx1',
								},
								{
									id: '7',
									clothingMaterial: 'Peach Fabric',
									productionMaterials:
										'Ioprey Hide+x1, Teostra Shellx1, Giaprey Hidex3',
								},
								{
									id: '8',
									clothingMaterial: 'Blue Fabric',
									productionMaterials:
										'Velociprey Scalex3, B.Kut-Ku Scalex2, Rubbery Hidex1',
								},

								{
									id: '9',
									clothingMaterial: 'Brown Fabric',
									productionMaterials:
										'Genprey Hidex4, Diablos Shellx1, Gluehopperx2',
								},
							]}
							><Toolbar
								><div class="toolbar">
									<CopyButton
										iconDescription={'Copy as CSV'}
										text={getCSVFromArray([
											{
												id: '1',
												clothingMaterial: 'Sturdy Wht Cloth',
												productionMaterials:
													'Anteka Peltx3, Giaprey Hidex2, Blangonga Peltx2',
											},
											{
												id: '2',
												clothingMaterial: 'Appropriate Parts',
												productionMaterials:
													'Sunstonex2, Sticky Caterpillarx1, Sm Monster Bonex1, Machalite Orex3',
											},
											{
												id: '3',
												clothingMaterial: 'Striped Fabric',
												productionMaterials:
													'High Quality Peltx3, Striped Skinx2, Black Rajang Peltx1, Carpenterbugx2',
											},
											{
												id: '4',
												clothingMaterial: 'Green Fabric',
												productionMaterials:
													'Burukku Hidex2, Rathian Scalex3, Gendrome Hidex3, Festi Ticketx1',
											},
											{
												id: '5',
												clothingMaterial: 'Fluffy Serum',
												productionMaterials:
													'Bomb Arowanax3, Firecell Stonex1, Fire Herbx5, Monster Fluidx2',
											},
											{
												id: '6',
												clothingMaterial: 'Black Fabric',
												productionMaterials:
													'Remobra Skin+x2, High Quality Peltx3, B.Gravios Shellx1',
											},
											{
												id: '7',
												clothingMaterial: 'Peach Fabric',
												productionMaterials:
													'Ioprey Hide+x1, Teostra Shellx1, Giaprey Hidex3',
											},
											{
												id: '8',
												clothingMaterial: 'Blue Fabric',
												productionMaterials:
													'Velociprey Scalex3, B.Kut-Ku Scalex2, Rubbery Hidex1',
											},

											{
												id: '9',
												clothingMaterial: 'Brown Fabric',
												productionMaterials:
													'Genprey Hidex4, Diablos Shellx1, Gluehopperx2',
											},
										])}
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

	.table {
		max-width: 90vw;
		overflow-x: auto;
	}

	.toolbar {
		padding: 1rem;
		display: flex;
		align-items: center;
		gap: 1rem;
		flex-grow: 1;
		flex-shrink: 1;
	}

	.ingredients {
		display: flex;
		flex-direction: column;
		gap: 0.25rem;
	}

	.table-with-pagination {
		display: flex;
		flex-direction: column;
	}
</style>
