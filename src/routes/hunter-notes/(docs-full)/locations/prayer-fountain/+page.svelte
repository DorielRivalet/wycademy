<script lang="ts">
	import PageTurn from '$lib/client/components/PageTurn.svelte';
	import SectionHeadingTopLevel from '$lib/client/components/SectionHeadingTopLevel.svelte';
	import HunterNotesPage from '$lib/client/components/HunterNotesPage.svelte';
	import { page } from '$app/stores';
	import UnorderedList from 'carbon-components-svelte/src/UnorderedList/UnorderedList.svelte';
	import ListItem from 'carbon-components-svelte/src/ListItem/ListItem.svelte';
	import DataTable from 'carbon-components-svelte/src/DataTable/DataTable.svelte';
	import Toolbar from 'carbon-components-svelte/src/DataTable/Toolbar.svelte';
	import CopyButton from 'carbon-components-svelte/src/CopyButton/CopyButton.svelte';
	import Button from 'carbon-components-svelte/src/Button/Button.svelte';
	import { downloadDomAsPng } from '$lib/client/modules/download';
	import { getCSVFromArray } from '$lib/client/modules/csv';
	import Download from 'carbon-icons-svelte/lib/Download.svelte';
	import InlineTooltip from '$lib/client/components/frontier/InlineTooltip.svelte';
	import {
		getItemColor,
		getItemIcon,
	} from '$lib/client/modules/frontier/items';
	import type { FrontierItemColor } from '$lib/client/modules/frontier/types';
	import SectionHeading from '$lib/client/components/SectionHeading.svelte';
	import Accordion from 'carbon-components-svelte/src/Accordion/Accordion.svelte';
	import AccordionItem from 'carbon-components-svelte/src/Accordion/AccordionItem.svelte';
	import OrderedList from 'carbon-components-svelte/src/OrderedList/OrderedList.svelte';
	import { getMonsterIcon } from '$lib/client/modules/frontier/monsters';
	import CenteredFigure from '$lib/client/components/CenteredFigure.svelte';
	import ExpandAll from 'carbon-icons-svelte/lib/ExpandAll.svelte';

	const divaItems: {
		id: number;
		item: string;
		icon: string;
		color: FrontierItemColor;
		usage: string;
		source: string;
	}[] = [
		{
			id: 0,
			item: 'Diva Song Gem',
			icon: 'Ball',
			color: 'Blue',
			usage: 'Give to Diva Cat in order to make Diva perform a Song.',
			source: 'GCP Store (120 GCP), Road Store (30 Medals).',
		},
		{
			id: 1,
			item: 'Fluffy Cake',
			icon: 'Question Mark',
			color: 'White',
			usage: 'Increases Diva Affection by 10 units.',
			source: 'GCP Store (100 GCP).',
		},
		{
			id: 2,
			item: 'Warm Honey Tea',
			icon: 'Question Mark',
			color: 'Orange',
			usage: 'Increases Diva Affection by 20 units.',
			source: 'Hunter Navigation rewards, Road Store (20 Medals).',
		},
	];

	let openAccordions = false;
</script>

<HunterNotesPage displayTOC={true}>
	<div>
		<SectionHeadingTopLevel title={'Prayer Fountain'} />
		<div>
			<p class="spaced-paragraph">
				<strong>The Diva</strong> can be found in a side area of the main town, on
				the steps leading to the square. Completing her questline rewards you with
				various materials to craft exclusive Diva equipment, which is exceptionally
				powerful.
			</p>
			<CenteredFigure
				width={'100%'}
				type="file"
				src={'https://res.cloudinary.com/mhfz/image/upload/f_auto,q_auto/v1/supplemental/prayer-fountain.webp'}
				alt="Prayer Fountain"
				figcaption="Prayer Fountain."
			/>
			<p class="spaced-paragraph">
				After fully completing the Third Chapter of the Diva Quests, you unlock
				the ability to give gifts to the Diva and request her to perform a song.
			</p>
			<CenteredFigure
				width={'100%'}
				type="file"
				src={'https://res.cloudinary.com/mhfz/image/upload/f_auto,q_auto/v1/supplemental/diva-cat.webp'}
				alt="Prayer Fountain cat"
				figcaption="Prayer Fountain cat."
			/>
			<p class="spaced-paragraph">
				Gifting items to the Diva increases her hidden Affection value. The
				higher this value, the stronger the buffs provided by the Diva Song. To
				have her perform, you need a <InlineTooltip
					text="Diva Song Gem"
					tooltip="Item"
					iconType="component"
					icon={getItemIcon('Ball')}
					iconColor={getItemColor('Blue')}
				/>, which grants buffs for about 1.5 hours.
			</p>
			<p class="spaced-paragraph">The song provides the following buffs:</p>
			<UnorderedList class="spaced-list">
				<ListItem
					><p>Extra Souls during the Hunter Festival (up to +2)</p></ListItem
				>
				<ListItem><p>Increased GRP and GSRP (up to 1.25x)</p></ListItem>
				<ListItem><p>Divine Protection</p></ListItem>
			</UnorderedList>
			<p class="spaced-paragraph">
				The buffs start off relatively weak, so it’s highly recommended to
				maximize the Diva's Affection to get the best benefits.
			</p>
			<p class="spaced-paragraph">
				Maximizing the buff is straightforward: the maximum Affection value is
				999, and the strongest buff is unlocked at 990. The easiest way to
				increase Affection is by purchasing <InlineTooltip
					text="Fluffy Cakes"
					tooltip="Item"
					iconType="component"
					icon={getItemIcon('Question Mark')}
					iconColor={getItemColor('White')}
				/> from the GCP store. You’ll need to buy and gift her 87 cakes. Giving the
				first cake will earn you 5x <InlineTooltip
					text="Warm Honey Tea"
					tooltip="Item"
					iconType="component"
					icon={getItemIcon('Question Mark')}
					iconColor={getItemColor('Orange')}
				/> from the Hunter Guide Challenge, which should also be gifted to maximize
				Affection.
			</p>
			<p class="spaced-paragraph">
				Completing each chapter of the Diva Quests grants 10 Affection points.
				Therefore, the minimum number of cakes needed is 87 (accounting for the
				three required chapters and five free <InlineTooltip
					text="Warm Honey Teas"
					tooltip="Item"
					iconType="component"
					icon={getItemIcon('Question Mark')}
					iconColor={getItemColor('Orange')}
				/>). This number decreases by 1 for each additional completed chapter,
				with a minimum of 75 cakes if all chapters are finished.
			</p>
			<p class="spaced-paragraph">
				You don’t need to repeatedly gift items; the 87 cakes are a one-time
				requirement.
			</p>
			<p class="spaced-paragraph">
				Activating the buff costs 1 <InlineTooltip
					text="Diva Song Gem"
					tooltip="Item"
					iconType="component"
					icon={getItemIcon('Ball')}
					iconColor={getItemColor('Blue')}
				/> to have the Diva perform. These gems can be purchased with GCP or Tower
				Medals. Additionally, performances (and the buffs they provide) are free
				if you are on the VIP course.
			</p>
			<CenteredFigure
				width={'100%'}
				type="file"
				src={'https://res.cloudinary.com/mhfz/image/upload/f_auto,q_auto/v1/supplemental/diva-song.webp'}
				alt="Diva Song"
				figcaption="Diva Song."
			/>
			<p class="spaced-paragraph">
				The overlay gives you an achievement if you obtain the maximum possible
				Affection points.
			</p>
			<div class="table">
				<DataTable
					id="diva-items-dom"
					useStaticWidth
					title="Diva Items"
					sortable
					zebra
					size="medium"
					headers={[
						{ key: 'item', value: 'Item' },
						{ key: 'usage', value: 'Usage' },
						{ key: 'source', value: 'Source' },
					]}
					rows={divaItems}
					><Toolbar
						><div class="toolbar">
							<CopyButton
								iconDescription={'Copy as CSV'}
								text={getCSVFromArray(divaItems)}
							/>
							<Button
								kind="tertiary"
								icon={Download}
								on:click={() =>
									downloadDomAsPng('diva-items-dom', 'diva-items-bonus')}
								>Download</Button
							>
						</div>
					</Toolbar>

					<svelte:fragment slot="cell" let:cell>
						{#if cell.key === 'item'}
							<InlineTooltip
								text={cell.value}
								tooltip="Guild Ticket"
								iconType="component"
								icon={getItemIcon(
									divaItems.find((e) => cell.value === e.item)?.icon ||
										'Question Mark',
								)}
								iconColor={getItemColor(
									divaItems.find((e) => cell.value === e.item)?.color ||
										'White',
								)}
							/>
						{:else}
							<p>{cell.value}</p>
						{/if}
					</svelte:fragment>
				</DataTable>
			</div>

			<section>
				<SectionHeading level={2} title="Diva Questline" />
				<div>
					<p class="spaced-paragraph">
						Note that unless a rank is specified, the monsters can be of any
						rank.
					</p>
					<p class="spaced-paragraph">
						Your Partner needs to reach PR81 to proceed with these quests. To
						level them up, complete the special quests for PRP and use the HRP
						tickets obtained from your progress. You can give these tickets to
						your Partner by selecting the final option, followed by the first
						option, at either the smith or your house.
					</p>
					<p class="spaced-paragraph">
						If you're unable to advance, try speaking to the NPC who originally
						assigned you the task (like the cats). Additionally, if you're stuck
						after defeating a monster, check the quest text for monster names as
						you might be on an earlier step than expected.
					</p>

					<p class="spaced-paragraph">
						<strong>You unlock Diva Songs at Chapter 3 completion.</strong>
					</p>
					<Button
						kind="ghost"
						size="field"
						on:click={() => (openAccordions = !openAccordions)}
					>
						{openAccordions ? 'Collapse' : 'Expand'}
						all chapter tasks
					</Button>
					<section>
						<SectionHeading level={3} title="Chapter 1" />
						<div>
							<Accordion class="spaced-accordion">
								<AccordionItem open={openAccordions} title="Part 1">
									<OrderedList class="spaced-list">
										<ListItem
											><p>
												Deliver 1 <InlineTooltip
													text="Thin Jack Mackerel"
													tooltip="Item"
													icon={getItemIcon('Fish')}
													iconType="component"
													iconColor={getItemColor('Blue')}
												/>
											</p></ListItem
										>
										<ListItem
											><p>
												Deliver 1 <InlineTooltip
													text="Lazurite Jewel"
													tooltip="Item"
													icon={getItemIcon('Jewel')}
													iconType="component"
													iconColor={getItemColor('Blue')}
												/>
											</p></ListItem
										>
									</OrderedList>
								</AccordionItem>
								<AccordionItem open={openAccordions} title="Part 2">
									<OrderedList class="spaced-list">
										<ListItem
											><p>
												Hunt 1 <InlineTooltip
													text="White Monoblos"
													tooltip="Monster"
													icon={getMonsterIcon('White Monoblos')}
													iconType="file"
												/>
											</p></ListItem
										>
										<ListItem><p>Return to the Prayer Fountain</p></ListItem>
									</OrderedList>
								</AccordionItem>
								<AccordionItem open={openAccordions} title="Part 3">
									<OrderedList class="spaced-list">
										<ListItem><p>Talk to the Guild Master</p></ListItem>
										<ListItem
											><p>
												Hunt 1 <InlineTooltip
													text="Yama Tsukami"
													tooltip="Monster"
													icon={getMonsterIcon('Yama Tsukami')}
													iconType="file"
												/>
											</p></ListItem
										>
										<ListItem
											><p>
												Talk to the Legendary Rasta Edward (Lance User)
											</p></ListItem
										>
									</OrderedList>
								</AccordionItem>
								<AccordionItem open={openAccordions} title="Part 4">
									<OrderedList class="spaced-list">
										<ListItem><p>Talk to the Guild Master</p></ListItem>
										<ListItem
											><p>
												Hunt 1 <InlineTooltip
													text="Chameleos"
													tooltip="Monster"
													icon={getMonsterIcon('Chameleos')}
													iconType="file"
												/>
											</p></ListItem
										>
										<ListItem
											><p>Talk to the Legendary Rasta Edward</p></ListItem
										>
									</OrderedList>
								</AccordionItem>
								<AccordionItem open={openAccordions} title="Part 5">
									<OrderedList class="spaced-list">
										<ListItem><p>Talk to the Guild Master</p></ListItem>
										<ListItem
											><p>
												Hunt 1 <InlineTooltip
													text="Yama Tsukami"
													tooltip="Monster"
													icon={getMonsterIcon('Yama Tsukami')}
													iconType="file"
												/>
											</p></ListItem
										>
										<ListItem><p>Return to the Prayer Fountain</p></ListItem>
									</OrderedList>
								</AccordionItem>
							</Accordion>
							<p class="spaced-paragraph rewards">Chapter rewards:</p>
							<UnorderedList class="spaced-list">
								<ListItem><p>Diva Armor Materials</p></ListItem>
								<ListItem
									><p>
										Items to deliver in Chapter 2 (Hunter Challenge Reward)
									</p></ListItem
								>
							</UnorderedList>
						</div>
					</section>

					<section>
						<SectionHeading level={3} title="Chapter 2" />
						<div>
							<Accordion class="spaced-accordion">
								<AccordionItem open={openAccordions} title="Part 1">
									<OrderedList class="spaced-list">
										<ListItem
											><p>
												Deliver 30 <InlineTooltip
													text="Kelbi Horns"
													tooltip="Item"
													icon={getItemIcon('Claw')}
													iconType="component"
													iconColor={getItemColor('Blue')}
												/>
											</p></ListItem
										>
										<ListItem
											><p>
												Deliver 20 <InlineTooltip
													text="Chaos Shrooms"
													tooltip="Item"
													icon={getItemIcon('Mushroom')}
													iconType="component"
													iconColor={getItemColor('Purple')}
												/>
											</p></ListItem
										>
										<ListItem
											><p>
												Deliver 5 <InlineTooltip
													text="Kirin Azure Horns"
													tooltip="Item"
													icon={getItemIcon('Claw')}
													iconType="component"
													iconColor={getItemColor('Blue')}
												/>
											</p></ListItem
										>
										<ListItem
											><p>
												Items delivered above are returned to you
											</p></ListItem
										>
									</OrderedList>
								</AccordionItem>
								<AccordionItem open={openAccordions} title="Part 2">
									<OrderedList class="spaced-list">
										<ListItem
											><p>
												Hunt 3 <InlineTooltip
													text="Cephadromes"
													tooltip="Monster"
													icon={getMonsterIcon('Cephadrome')}
													iconType="file"
												/>
											</p></ListItem
										>
										<ListItem
											><p>
												Deliver 10 <InlineTooltip
													text="Dragon Seeds"
													tooltip="Item"
													icon={getItemIcon('Seed')}
													iconType="component"
													iconColor={getItemColor('Red')}
												/>
											</p></ListItem
										>
										<ListItem
											><p>
												Hunt 2 <InlineTooltip
													text="Lao-Shan Lungs"
													tooltip="Monster"
													icon={getMonsterIcon('Lao-Shan Lung')}
													iconType="file"
												/>
											</p></ListItem
										>
										<ListItem><p>Return to the Prayer Fountain</p></ListItem>
										<ListItem
											><p>
												Talk to the Legendary Rastas Edward and Frau (DS user)
											</p></ListItem
										>
									</OrderedList>
								</AccordionItem>
								<AccordionItem open={openAccordions} title="Part 3">
									<OrderedList class="spaced-list">
										<ListItem><p>Talk to the Legendary Rasta Frau</p></ListItem>
										<ListItem><p>Return to the Prayer Fountain</p></ListItem>
										<ListItem
											><p>
												Hunt 1 <InlineTooltip
													text="Baruragaru"
													tooltip="Monster"
													icon={getMonsterIcon('Baruragaru')}
													iconType="file"
												/>
											</p></ListItem
										>
										<ListItem><p>Return to the Prayer Fountain</p></ListItem>
										<ListItem><p>Talk to the Legendary Rasta Frau</p></ListItem>
										<ListItem><p>Return to the Prayer Fountain</p></ListItem>
									</OrderedList>
								</AccordionItem>
							</Accordion>
							<p class="spaced-paragraph rewards">Chapter rewards:</p>
							<UnorderedList class="spaced-list">
								<ListItem><p>Diva HC Armor Materials</p></ListItem>
							</UnorderedList>
						</div>
					</section>

					<section>
						<SectionHeading level={3} title="Chapter 3" />
						<p class="spaced-paragraph">
							<strong>This is where you unlock Diva Songs.</strong>
						</p>
						<div>
							<Accordion class="spaced-accordion">
								<AccordionItem open={openAccordions} title="Part 1">
									<OrderedList class="spaced-list">
										<ListItem
											><p>
												Hunt 1 <InlineTooltip
													text="Teostra"
													tooltip="Monster"
													icon={getMonsterIcon('Teostra')}
													iconType="file"
												/>
											</p></ListItem
										>
										<ListItem><p>Return to the Prayer Fountain</p></ListItem>
										<ListItem><p>Talk to the Legendary Rasta Frau</p></ListItem>
									</OrderedList>
								</AccordionItem>
								<AccordionItem open={openAccordions} title="Part 2">
									<OrderedList class="spaced-list">
										<ListItem><p>Go to the Blacksmith</p></ListItem>
										<ListItem><p>Return to the Prayer Fountain</p></ListItem>
										<ListItem
											><p>
												Hunt 3 <InlineTooltip
													text="Rukodioras"
													tooltip="Monster"
													icon={getMonsterIcon('Rukodiora')}
													iconType="file"
												/>
											</p></ListItem
										>
									</OrderedList>
								</AccordionItem>
								<AccordionItem open={openAccordions} title="Part 3">
									<OrderedList class="spaced-list">
										<ListItem
											><p>
												Hunt 1 <InlineTooltip
													text="Anorupatisu"
													tooltip="Monster"
													icon={getMonsterIcon('Anorupatisu')}
													iconType="file"
												/>
											</p></ListItem
										>
									</OrderedList>
								</AccordionItem>
								<AccordionItem open={openAccordions} title="Part 4">
									<OrderedList class="spaced-list">
										<ListItem
											><p>
												Hunt 1 <InlineTooltip
													text="Rebidiora"
													tooltip="Monster"
													icon={getMonsterIcon('Rebidiora')}
													iconType="file"
												/>
											</p></ListItem
										>
									</OrderedList>
								</AccordionItem>
							</Accordion>
							<p class="spaced-paragraph rewards">Chapter rewards:</p>
							<UnorderedList class="spaced-list">
								<ListItem><p>Diva G Rank Armor Materials</p></ListItem>
								<ListItem><p>Diva Weapon Gem (1st Series)</p></ListItem>
								<ListItem
									><p>
										5 <InlineTooltip
											text="Diva Song Gems"
											tooltip="Item"
											icon={getItemIcon('Ball')}
											iconType="component"
											iconColor={getItemColor('Blue')}
										/> (Hunter Challenge Reward)
									</p></ListItem
								>
								<ListItem
									><p>
										5 <InlineTooltip
											text="Warm Honey Tea"
											tooltip="Item"
											icon={getItemIcon('Question Mark')}
											iconType="component"
											iconColor={getItemColor('Orange')}
										/> (Give the Diva a gift then Hunter Challenge Reward)
									</p></ListItem
								>
								<ListItem
									><p>
										Completion of this unlocks the Diva Song Buff. Give her <InlineTooltip
											text="Warm Honey Tea"
											tooltip="Item"
											icon={getItemIcon('Question Mark')}
											iconType="component"
											iconColor={getItemColor('Orange')}
										/> and <InlineTooltip
											text="Fluffy Cakes"
											tooltip="Item"
											icon={getItemIcon('Question Mark')}
											iconType="component"
											iconColor={getItemColor('White')}
										/> in order to max its effects.
									</p></ListItem
								>
							</UnorderedList>
						</div>
					</section>

					<section>
						<SectionHeading level={3} title="Chapter 4" />
						<div>
							<Accordion class="spaced-accordion">
								<AccordionItem open={openAccordions} title="Part 1">
									<OrderedList class="spaced-list">
										<ListItem
											><p>
												Hunt 1 <InlineTooltip
													text="Berukyurosu"
													tooltip="Monster"
													icon={getMonsterIcon('Berukyurosu')}
													iconType="file"
												/>
											</p></ListItem
										>
										<ListItem
											><p>
												Hunt 1 <InlineTooltip
													text="Doragyurosu"
													tooltip="Monster"
													icon={getMonsterIcon('Doragyurosu')}
													iconType="file"
												/>
											</p></ListItem
										>
									</OrderedList>
								</AccordionItem>
								<AccordionItem open={openAccordions} title="Part 2">
									<OrderedList class="spaced-list">
										<ListItem
											><p>
												Deliver 1 <InlineTooltip
													text="Saint Ore"
													tooltip="Item"
													icon={getItemIcon('Ore')}
													iconType="component"
													iconColor={getItemColor('White')}
												/>
											</p></ListItem
										>
										<ListItem
											><p>
												Hunt 1 <InlineTooltip
													text="Hyujikiki"
													tooltip="Monster"
													icon={getMonsterIcon('Hyujikiki')}
													iconType="file"
												/>
											</p></ListItem
										>
										<ListItem
											><p>
												Hunt 1 <InlineTooltip
													text="Giaorugu"
													tooltip="Monster"
													icon={getMonsterIcon('Giaorugu')}
													iconType="file"
												/>
											</p></ListItem
										>
									</OrderedList>
								</AccordionItem>
								<AccordionItem open={openAccordions} title="Part 3">
									<OrderedList class="spaced-list">
										<ListItem
											><p>
												Speak to the Town Square Cats three times
											</p></ListItem
										>
										<ListItem
											><p>
												Hunt 2 <InlineTooltip
													text="Gougarfs"
													tooltip="Monster"
													icon={getMonsterIcon('Ray Gougarf')}
													iconType="file"
												/>
											</p></ListItem
										>
									</OrderedList>
								</AccordionItem>
								<AccordionItem open={openAccordions} title="Part 4">
									<OrderedList class="spaced-list">
										<ListItem><p>Talk to NPC in Blacksmith</p></ListItem>
										<ListItem><p>Solo Hunt 1 Gurenzeburu</p></ListItem>
									</OrderedList>
								</AccordionItem>
								<AccordionItem open={openAccordions} title="Part 5">
									<OrderedList class="spaced-list">
										<ListItem><p>Talk to Guild Master</p></ListItem>
										<ListItem><p>Hunt 1 Pokaradon</p></ListItem>
										<ListItem><p>Hunt 1 Midogaron</p></ListItem>
										<ListItem
											><p>Talk to NPC next to Guild Hall entrance</p></ListItem
										>
									</OrderedList>
								</AccordionItem>
							</Accordion>
							<p class="spaced-paragraph rewards">Chapter rewards:</p>
							<UnorderedList class="spaced-list">
								<ListItem><p>Diva HC Armor Materials</p></ListItem>
							</UnorderedList>
						</div>
					</section>

					<section>
						<SectionHeading level={3} title="Chapter 5" />
						<div>
							<Accordion class="spaced-accordion">
								<AccordionItem open={openAccordions} title="Part 1">
									<OrderedList class="spaced-list">
										<ListItem><p>Hunt 1 Farunokku</p></ListItem>
									</OrderedList>
								</AccordionItem>
								<AccordionItem open={openAccordions} title="Part 2">
									<OrderedList class="spaced-list">
										<ListItem
											><p>
												Hunt 2 Baruragaru (Return to the Prayer Fountain between
												the two hunts)
											</p></ListItem
										>
									</OrderedList>
								</AccordionItem>
								<AccordionItem open={openAccordions} title="Part 3">
									<OrderedList class="spaced-list">
										<ListItem><p>Hunt 1 Rebidiora</p></ListItem>
									</OrderedList>
								</AccordionItem>
								<AccordionItem open={openAccordions} title="Part 4">
									<OrderedList class="spaced-list">
										<ListItem><p>Hunt 1 Zerureusu</p></ListItem>
									</OrderedList>
								</AccordionItem>
							</Accordion>
							<p class="spaced-paragraph rewards">Chapter rewards:</p>
							<UnorderedList class="spaced-list">
								<ListItem><p>Diva Weapon Gem (1st Series)</p></ListItem>
							</UnorderedList>
						</div>
					</section>

					<section>
						<SectionHeading level={3} title="Chapter 6" />
						<div>
							<Accordion class="spaced-accordion">
								<AccordionItem open={openAccordions} title="Part 1">
									<OrderedList class="spaced-list">
										<ListItem><p>Hunt 1 Akantor</p></ListItem>
									</OrderedList>
								</AccordionItem>
								<AccordionItem open={openAccordions} title="Part 2">
									<OrderedList class="spaced-list">
										<ListItem
											><p>
												Hire a partner if you don't have one, then talk to them
												in your house
											</p></ListItem
										>
										<ListItem><p>Return to the Prayer Fountain</p></ListItem>
										<ListItem
											><p>
												Talk to partner in house, return to the Prayer Fountain.
											</p></ListItem
										>
									</OrderedList>
								</AccordionItem>
								<AccordionItem open={openAccordions} title="Part 3">
									<OrderedList class="spaced-list">
										<ListItem
											><p>
												Note: Partner must be at least PR31 to proceed
											</p></ListItem
										>
										<ListItem
											><p>
												Hunt 1 G Rank Yian Kut-ku with partner present.
											</p></ListItem
										>
									</OrderedList>
								</AccordionItem>
								<AccordionItem open={openAccordions} title="Part 4">
									<OrderedList class="spaced-list">
										<ListItem
											><p>
												Note: Partner must be at least PR51 to proceed
											</p></ListItem
										>
										<ListItem
											><p>Hunt 1 Pokaradon with partner present.</p></ListItem
										>
									</OrderedList>
								</AccordionItem>
								<AccordionItem open={openAccordions} title="Part 5">
									<OrderedList class="spaced-list">
										<ListItem
											><p>
												Note: Partner must be at least PR81 to proceed
											</p></ListItem
										>
										<ListItem
											><p>Hunt 1 Midogaron with partner present.</p></ListItem
										>
										<ListItem
											><p>
												Talk to partner in house and return to the Prayer
												Fountain before leaving on quest.
											</p></ListItem
										>
									</OrderedList>
								</AccordionItem>
							</Accordion>
							<p class="spaced-paragraph rewards">Chapter rewards:</p>
							<UnorderedList class="spaced-list">
								<ListItem><p>Diva Armor Materials</p></ListItem>
							</UnorderedList>
						</div>
					</section>

					<section>
						<SectionHeading level={3} title="Chapter 7" />
						<div>
							<Accordion class="spaced-accordion">
								<AccordionItem open={openAccordions} title="Part 1">
									<OrderedList class="spaced-list">
										<ListItem
											><p>
												Talk to Blacksmith and return to the Prayer Fountain
											</p></ListItem
										>
										<ListItem><p>Hunt 1 Rebidiora</p></ListItem>
									</OrderedList>
								</AccordionItem>
								<AccordionItem open={openAccordions} title="Part 2">
									<OrderedList class="spaced-list">
										<ListItem
											><p>
												Hunt 2 G Rank HC Gurenzeburu (Return to the Prayer
												Fountain between the two hunts)
											</p></ListItem
										>
									</OrderedList>
								</AccordionItem>
								<AccordionItem open={openAccordions} title="Part 3">
									<OrderedList class="spaced-list">
										<ListItem><p>Hunt 1 Taikun Zamuza</p></ListItem>
									</OrderedList>
								</AccordionItem>
								<AccordionItem open={openAccordions} title="Part 4">
									<OrderedList class="spaced-list">
										<ListItem><p>Hunt 1 Meraginasu</p></ListItem>
									</OrderedList>
								</AccordionItem>
							</Accordion>
							<p class="spaced-paragraph rewards">Chapter rewards:</p>
							<UnorderedList class="spaced-list">
								<ListItem><p>Diva Weapon Gem (1st Series)</p></ListItem>
							</UnorderedList>
						</div>
					</section>

					<section>
						<SectionHeading level={3} title="Chapter 8" />
						<div>
							<Accordion class="spaced-accordion">
								<AccordionItem open={openAccordions} title="Part 1">
									<OrderedList class="spaced-list">
										<ListItem
											><p>
												Speak to Blacksmith and return to the Prayer Fountain
											</p></ListItem
										>
									</OrderedList>
								</AccordionItem>
								<AccordionItem open={openAccordions} title="Part 2">
									<OrderedList class="spaced-list">
										<ListItem
											><p>
												Deliver 3 <InlineTooltip
													text="Grease Stone"
													tooltip="Item"
													icon={getItemIcon('Ore')}
													iconType="component"
													iconColor={getItemColor('Gray')}
												/> and 1 <InlineTooltip
													text="Atarka Ore"
													tooltip="Item"
													icon={getItemIcon('Ore')}
													iconType="component"
													iconColor={getItemColor('Blue')}
												/>
											</p></ListItem
										>
										<ListItem
											><p>
												You can mine the ores in the G Rank Flower Field or
												simply buy them for 235 GCP total.
											</p></ListItem
										>
										<ListItem><p>Hunt 1 Forokururu</p></ListItem>
									</OrderedList>
								</AccordionItem>
								<AccordionItem open={openAccordions} title="Part 3">
									<OrderedList class="spaced-list">
										<ListItem
											><p>
												You need to craft the Prototype Tonfas at this point
											</p></ListItem
										>
										<ListItem
											><p>Kill 3 Aptonoth in the preset quest</p></ListItem
										>
									</OrderedList>
								</AccordionItem>
								<AccordionItem open={openAccordions} title="Part 4">
									<OrderedList class="spaced-list">
										<ListItem
											><p>
												Hunt 1 Yian Kut-Ku (Does not need to be with Tonfas)
											</p></ListItem
										>
									</OrderedList>
								</AccordionItem>
							</Accordion>
							<p class="spaced-paragraph rewards">Chapter rewards:</p>
							<UnorderedList class="spaced-list">
								<ListItem
									><p>
										Ores spent in part 2 (Hunter Challenge Reward)
									</p></ListItem
								>
							</UnorderedList>
						</div>
					</section>

					<section>
						<SectionHeading level={3} title="Chapter 9" />
						<div>
							<Accordion class="spaced-accordion">
								<AccordionItem open={openAccordions} title="Part 1">
									<OrderedList class="spaced-list">
										<ListItem
											><p>
												Deliver 1 <InlineTooltip
													text="Teostra Miracle Wing"
													tooltip="Item"
													icon={getItemIcon('Wings')}
													iconType="component"
													iconColor={getItemColor('Red')}
												/> (Supremacy Teo)
											</p></ListItem
										>
									</OrderedList>
								</AccordionItem>
								<AccordionItem open={openAccordions} title="Part 2">
									<OrderedList class="spaced-list">
										<ListItem><p>Hunt 2 G Rank Velocidrome</p></ListItem>
									</OrderedList>
								</AccordionItem>
								<AccordionItem open={openAccordions} title="Part 3">
									<OrderedList class="spaced-list">
										<ListItem><p>Hunt 1 Meraginasu</p></ListItem>
									</OrderedList>
								</AccordionItem>
								<AccordionItem open={openAccordions} title="Part 4">
									<OrderedList class="spaced-list">
										<ListItem><p>Speak to Gin (Hammer Rasta)</p></ListItem>
									</OrderedList>
								</AccordionItem>
							</Accordion>
							<p class="spaced-paragraph rewards">Chapter rewards:</p>
							<UnorderedList class="spaced-list">
								<ListItem><p>Diva G Rank Armor Materials</p></ListItem>
							</UnorderedList>
						</div>
					</section>

					<section>
						<SectionHeading level={3} title="Chapter 10" />
						<div>
							<Accordion class="spaced-accordion">
								<AccordionItem open={openAccordions} title="Part 1">
									<OrderedList class="spaced-list">
										<ListItem><p>Talk to Guild Master</p></ListItem>
										<ListItem><p>Hunt 1 Monoblos</p></ListItem>
									</OrderedList>
								</AccordionItem>
								<AccordionItem open={openAccordions} title="Part 2">
									<OrderedList class="spaced-list">
										<ListItem><p>Hunt 1 Gou Lunastra</p></ListItem>
									</OrderedList>
								</AccordionItem>
								<AccordionItem open={openAccordions} title="Part 3">
									<OrderedList class="spaced-list">
										<ListItem><p>Speak to the Guild Master</p></ListItem>
									</OrderedList>
								</AccordionItem>
								<AccordionItem open={openAccordions} title="Part 4">
									<OrderedList class="spaced-list">
										<ListItem><p>Hunt 1 Anorupatisu (Preset Quest)</p></ListItem
										>
										<ListItem
											><p>
												Note: Everyone must use Tonfas for this mission
												(Restricted equipment disables AI outside of
												Legendaries)
											</p></ListItem
										>
									</OrderedList>
								</AccordionItem>
							</Accordion>
							<p class="spaced-paragraph rewards">Chapter rewards:</p>
							<UnorderedList class="spaced-list">
								<ListItem><p>Diva Weapon Materials (1st Series)</p></ListItem>
								<ListItem><p>(2 Gems with Hunter Challenge Reward)</p></ListItem
								>
							</UnorderedList>
						</div>
					</section>

					<section>
						<SectionHeading level={3} title="Chapter 11" />
						<div>
							<Accordion class="spaced-accordion">
								<AccordionItem open={openAccordions} title="Part 1">
									<OrderedList class="spaced-list">
										<ListItem
											><p>
												Talk to Guild Master, Return to the Prayer Fountain
											</p></ListItem
										>
									</OrderedList>
								</AccordionItem>
								<AccordionItem open={openAccordions} title="Part 2">
									<OrderedList class="spaced-list">
										<ListItem><p>Capture 1 Forokururu</p></ListItem>
									</OrderedList>
								</AccordionItem>
								<AccordionItem open={openAccordions} title="Part 3">
									<OrderedList class="spaced-list">
										<ListItem><p>Speak to Leila (Tonfa Legendary)</p></ListItem>
										<ListItem><p>Solo Hunt 1 Diorex</p></ListItem>
										<ListItem><p>Speak to Leila</p></ListItem>
										<ListItem><p>Return to the Prayer Fountain</p></ListItem>
									</OrderedList>
								</AccordionItem>
								<AccordionItem open={openAccordions} title="Part 4">
									<OrderedList class="spaced-list">
										<ListItem><p>Hunt 1 Burst Species Meraginasu</p></ListItem>
									</OrderedList>
								</AccordionItem>
							</Accordion>
							<p class="spaced-paragraph rewards">Chapter rewards:</p>
							<UnorderedList class="spaced-list">
								<ListItem><p>Diva Armor Materials</p></ListItem>
							</UnorderedList>
						</div>
					</section>

					<section>
						<SectionHeading level={3} title="Chapter 12" />
						<div>
							<Accordion class="spaced-accordion">
								<AccordionItem open={openAccordions} title="Part 1">
									<OrderedList class="spaced-list">
										<ListItem
											><p>
												Hunt 1 G Rank Gold Rathian, talk to cats and return to
												the Prayer Fountain
											</p></ListItem
										>
									</OrderedList>
								</AccordionItem>
								<AccordionItem open={openAccordions} title="Part 2">
									<OrderedList class="spaced-list">
										<ListItem
											><p>
												Speak to Leila and return to the Prayer Fountain
											</p></ListItem
										>
									</OrderedList>
								</AccordionItem>
								<AccordionItem open={openAccordions} title="Part 3">
									<OrderedList class="spaced-list">
										<ListItem><p>Hunt 1 Inagami</p></ListItem>
									</OrderedList>
								</AccordionItem>
								<AccordionItem open={openAccordions} title="Part 4">
									<OrderedList class="spaced-list">
										<ListItem
											><p>
												Hunt 1 G Rank Inagami (Preset quest with set equipment,
												AI outside of Legendaries is disabled)
											</p></ListItem
										>
									</OrderedList>
								</AccordionItem>
							</Accordion>
							<p class="spaced-paragraph rewards">Chapter rewards:</p>
							<UnorderedList class="spaced-list">
								<ListItem><p>Diva Weapon Gem (2nd Series)</p></ListItem>
							</UnorderedList>
						</div>
					</section>

					<section>
						<SectionHeading level={3} title="Chapter 13" />
						<div>
							<Accordion class="spaced-accordion">
								<AccordionItem open={openAccordions} title="Part 1">
									<OrderedList class="spaced-list">
										<ListItem><p>Hunt 1 Giaorugu</p></ListItem>
									</OrderedList>
								</AccordionItem>
								<AccordionItem open={openAccordions} title="Part 2">
									<OrderedList class="spaced-list">
										<ListItem><p>Hunt 1 G Rank Gravios</p></ListItem>
									</OrderedList>
								</AccordionItem>
								<AccordionItem open={openAccordions} title="Part 3">
									<OrderedList class="spaced-list">
										<ListItem
											><p>
												Speak to Leila and return to the Prayer Fountain
											</p></ListItem
										>
										<ListItem><p>Speak to the Blacksmith</p></ListItem>
									</OrderedList>
								</AccordionItem>
								<AccordionItem open={openAccordions} title="Part 4">
									<OrderedList class="spaced-list">
										<ListItem><p>Hunt 1 G Rank Forokururu</p></ListItem>
										<ListItem><p>Hunt 1 G Rank HC Rajang</p></ListItem>
									</OrderedList>
								</AccordionItem>
							</Accordion>
							<p class="spaced-paragraph rewards">Chapter rewards:</p>
							<UnorderedList class="spaced-list">
								<ListItem><p>Diva HC Armor Materials</p></ListItem>
							</UnorderedList>
						</div>
					</section>

					<section>
						<SectionHeading level={3} title="Chapter 14" />
						<div>
							<Accordion class="spaced-accordion">
								<AccordionItem open={openAccordions} title="Part 1">
									<OrderedList class="spaced-list">
										<ListItem
											><p>
												Hunt 1 Red Lavasioth (Training Quest on Black Quest NPC)
											</p></ListItem
										>
									</OrderedList>
								</AccordionItem>
								<AccordionItem open={openAccordions} title="Part 2">
									<OrderedList class="spaced-list">
										<ListItem
											><p>
												Speak to Flora (SnS Legendary) and return to Diva
												Fountain
											</p></ListItem
										>
										<ListItem><p>Hunt 1 Hyujikiki</p></ListItem>
									</OrderedList>
								</AccordionItem>
								<AccordionItem open={openAccordions} title="Part 3">
									<OrderedList class="spaced-list">
										<ListItem><p>Hunt 1 Inagami</p></ListItem>
									</OrderedList>
								</AccordionItem>
								<AccordionItem open={openAccordions} title="Part 4">
									<OrderedList class="spaced-list">
										<ListItem
											><p>
												Deliver 3 <InlineTooltip
													text="Herbal Medicine G"
													tooltip="Item"
													icon={getItemIcon('Herb')}
													iconType="component"
													iconColor={getItemColor('Green')}
												/> (can be bought in Guild Hall for <InlineTooltip
													text="Guild Tickets"
													tooltip="Item"
													icon={getItemIcon('Ticket')}
													iconType="component"
													iconColor={getItemColor('Green')}
												/>)
											</p></ListItem
										>
									</OrderedList>
								</AccordionItem>
							</Accordion>
							<p class="spaced-paragraph rewards">Chapter rewards:</p>
							<UnorderedList class="spaced-list">
								<ListItem><p>Diva Weapon Gem (2nd Series)</p></ListItem>
							</UnorderedList>
						</div>
					</section>

					<section>
						<SectionHeading level={3} title="Chapter 15" />
						<div>
							<Accordion class="spaced-accordion">
								<AccordionItem open={openAccordions} title="Part 1">
									<OrderedList class="spaced-list">
										<ListItem><p>Talk to Guild Master</p></ListItem>
										<ListItem><p>Return to the Prayer Fountain</p></ListItem>
										<ListItem><p>Hunt 1 G Rank White Espinas</p></ListItem>
									</OrderedList>
								</AccordionItem>
								<AccordionItem open={openAccordions} title="Part 2">
									<OrderedList class="spaced-list">
										<ListItem><p>1 G Rank Baruragaru</p></ListItem>
									</OrderedList>
								</AccordionItem>
								<AccordionItem open={openAccordions} title="Part 3">
									<OrderedList class="spaced-list">
										<ListItem><p>1 G Rank Akura Jebia</p></ListItem>
									</OrderedList>
								</AccordionItem>
								<AccordionItem open={openAccordions} title="Part 4">
									<OrderedList class="spaced-list">
										<ListItem><p>1 Burst (G Rank) Garuba Daora</p></ListItem>
									</OrderedList>
								</AccordionItem>
							</Accordion>
							<p class="spaced-paragraph rewards">Chapter rewards:</p>
							<UnorderedList class="spaced-list">
								<ListItem><p>Diva Armor Materials</p></ListItem>
								<ListItem><p>Diva Weapon Gem (2nd Series)</p></ListItem>
							</UnorderedList>
						</div>
					</section>
				</div>
			</section>
		</div>
		<div class="page-turn">
			<PageTurn pageUrlPathName={$page.url.pathname} />
		</div>
	</div>
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

	.table {
		margin-top: 2rem;
		margin-bottom: 2rem;
	}

	.rewards {
		margin-top: 2rem;
		font-weight: bold;
	}
</style>
