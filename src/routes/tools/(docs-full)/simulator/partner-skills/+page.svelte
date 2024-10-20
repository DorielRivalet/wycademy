<script lang="ts">
	import PageTurn from '$lib/client/components/PageTurn.svelte';
	import SectionHeadingTopLevel from '$lib/client/components/SectionHeadingTopLevel.svelte';
	import HunterNotesPage from '$lib/client/components/HunterNotesPage.svelte';
	import { page } from '$app/stores';
	import type { PartnerSkill } from '$lib/client/modules/frontier/types';
	import Tile from 'carbon-components-svelte/src/Tile/Tile.svelte';
	import Button from 'carbon-components-svelte/src/Button/Button.svelte';
	import Tag from 'carbon-components-svelte/src/Tag/Tag.svelte';
	import Grid from 'carbon-components-svelte/src/Grid/Grid.svelte';
	import Row from 'carbon-components-svelte/src/Grid/Row.svelte';
	import Column from 'carbon-components-svelte/src/Grid/Column.svelte';
	import DataTable from 'carbon-components-svelte/src/DataTable/DataTable.svelte';
	import Pagination from 'carbon-components-svelte/src/Pagination/Pagination.svelte';

	let unlockedSkills = new Set<string>();
	let equippedSkills: string[] = [];
	let currentGCP = 0;
	let currentCost = 0;
	const MAX_COST = 260;
	const MAX_SLOTS = 12;

	const skillIndex: PartnerSkill[] = [
		{
			name: {
				en: 'Health+10',
				zh: '體力+10',
			},
			tree: 'Health',
			gcp: 10,
			cost: 5,
			pr: 0,
			prerequisites: [],
		},
		{
			name: {
				en: 'Health+20',
				zh: '體力+20',
			},
			gcp: 100,
			tree: 'Health',

			cost: 5,
			pr: 0,
			prerequisites: [{ skills: ['Health+10'] }],
		},
		{
			name: {
				en: 'Health+30',
				zh: '體力+30',
			},
			gcp: 400,
			tree: 'Health',

			cost: 10,
			pr: 10,
			prerequisites: [{ skills: ['Health+20'] }],
		},
		{
			name: {
				en: 'Health+40',
				zh: '體力+40',
			},
			gcp: 2500,
			cost: 10,
			tree: 'Health',

			pr: 30,
			prerequisites: [{ skills: ['Health+30'] }],
		},
		{
			name: {
				en: 'Speed Eating',
				zh: '快吃',
			},
			gcp: 3000,
			tree: 'Eating',

			cost: 10,
			pr: 100,
			prerequisites: [{ skills: ['Health+40', 'Improve Recovery Items'] }],
		},
		{
			name: {
				en: 'Improve Recovery Items',
				zh: '體力回復道具強化',
			},
			gcp: 4000,
			cost: 15,
			tree: 'Recovery',

			pr: 50,
			prerequisites: [{ skills: ['Health+20'] }],
		},
		{
			name: { en: 'Attack Up Small', zh: '攻撃力UP【小】' },
			gcp: 1000,
			cost: 15,
			pr: 20,
			tree: 'Attack',

			prerequisites: [],
			description: 'Increases attack power slightly',
		},
		{
			name: { en: 'Critical Eye +1', zh: '見切り+1' },
			gcp: 2000,
			cost: 15,
			pr: 30,
			tree: 'Expert',
			prerequisites: [],
			description: 'Increases affinity by 10%',
		},
		{
			name: { en: 'Critical Eye +2', zh: '見切り+2' },
			gcp: 3000,
			cost: 20,
			tree: 'Expert',
			pr: 40,
			prerequisites: [{ skills: ['Critical Eye +1'] }],
			description: 'Increases affinity by 20%',
		},
	];

	// Pagination for skill list
	let paginationPageSize = 10;
	let paginationPage = 1;

	function checkPrerequisites(skill: PartnerSkill): boolean {
		// Debug: Log prerequisites check
		console.log(`Checking prerequisites for ${skill.name.en}`);

		// If no prerequisites, skill can be unlocked
		if (!skill.prerequisites.length) return true;

		// Check if all prerequisites are met
		const allPrerequisitesMet = skill.prerequisites.every((prereq) =>
			prereq.skills.every((skillName) => unlockedSkills.has(skillName)),
		);

		// Debug: Log result of prerequisite check
		console.log(
			`Prerequisites for ${skill.name.en} met: ${allPrerequisitesMet}`,
		);

		return allPrerequisitesMet;
	}

	function equipSkill(skillName: string) {
		const skill = skillIndex.find((s) => s.name.en === skillName);
		if (!skill) return;

		if (equippedSkills.includes(skillName)) {
			equippedSkills = equippedSkills.filter((s) => s !== skillName);
			currentCost -= skill.cost;
		} else {
			if (equippedSkills.length >= MAX_SLOTS) {
				alert('Maximum skill slots reached!');
				return;
			}
			if (currentCost + skill.cost > MAX_COST) {
				alert('Exceeds maximum cost!');
				return;
			}
			equippedSkills = [...equippedSkills, skillName];
			currentCost += skill.cost;
		}
	}

	function unlockSkill(skill: PartnerSkill) {
		if (unlockedSkills.has(skill.name.en)) return;

		// Debug: Log skill unlocking
		console.log(`Unlocking skill: ${skill.name.en}`);

		// Create a new Set for reactivity
		const newUnlockedSkills = new Set(unlockedSkills);
		newUnlockedSkills.add(skill.name.en);

		// Update the state
		unlockedSkills = newUnlockedSkills;
		currentGCP += skill.gcp;

		// Debug: Confirm skill added to unlockedSkills
		console.log(`Unlocked skills set updated:`, Array.from(unlockedSkills));
	}

	function lockSkill(skill: PartnerSkill) {
		// Debug: Log locking attempt
		console.log(`Attempting to lock skill: ${skill.name.en}`);

		const dependentSkills = checkDependentSkills(skill.name.en);

		// Debug: Log dependent skills check
		console.log(
			`Dependent skills for ${skill.name.en}: ${dependentSkills.join(', ')}`,
		);

		if (dependentSkills.length > 0) {
			alert(
				`Cannot lock this skill as it is required for: ${dependentSkills.join(', ')}`,
			);
			return;
		}

		// Proceed with locking the skill
		if (equippedSkills.includes(skill.name.en)) {
			equipSkill(skill.name.en); // Unequip the skill if it's currently equipped
		}

		// Create a new Set for reactivity
		const newUnlockedSkills = new Set(unlockedSkills);
		newUnlockedSkills.delete(skill.name.en);
		unlockedSkills = newUnlockedSkills;

		// Deduct GCP
		currentGCP -= skill.gcp;

		// Debug: Log successful locking
		console.log(`Skill ${skill.name.en} has been locked`);
	}

	function checkDependentSkills(skillName: string): string[] {
		// Debug: Log dependent skills check initiation
		console.log(`Checking for skills dependent on: ${skillName}`);

		return skillIndex
			.filter(
				(skill) =>
					skill.prerequisites.some((prereq) =>
						prereq.skills.includes(skillName),
					) && unlockedSkills.has(skill.name.en),
			)
			.map((skill) => skill.name.en);
	}

	// Modify the reactive statement to include all skills
	$: paginatedSkills = skillIndex.slice(
		(paginationPage - 1) * paginationPageSize,
		paginationPage * paginationPageSize,
	);
	$: canEquipMore = equippedSkills.length < MAX_SLOTS && currentCost < MAX_COST;
</script>

<HunterNotesPage displayTOC={false}>
	<div>
		<SectionHeadingTopLevel title={'Partner Skills'} />
		<Grid>
			<Row>
				<!-- Equipped Skills Panel -->
				<Column lg={6}>
					<Tile class="equipped-skills">
						<header class="panel-header">
							<h2>Equipped Skills</h2>
							<div class="cost-display">
								<span>Cost</span>
								<span class={currentCost > MAX_COST ? 'over-cost' : ''}>
									{currentCost}/{MAX_COST}
								</span>
							</div>
						</header>

						<div class="equipped-list">
							{#each equippedSkills as skillName}
								{@const skill = skillIndex.find((s) => s.name.en === skillName)}
								{#if skill}
									<div class="equipped-skill">
										<span>{skill.name.en}</span>
										<span>{skill.cost}</span>
										<Button
											size="small"
											kind="danger"
											on:click={() => equipSkill(skillName)}
										>
											Remove
										</Button>
									</div>
								{/if}
							{/each}

							{#each Array(MAX_SLOTS - equippedSkills.length) as _}
								<div class="empty-slot">
									<span>---------------</span>
									<span>0</span>
								</div>
							{/each}
						</div>
					</Tile>
				</Column>

				<!-- Skill List Panel -->
				<Column lg={6}>
					<Tile class="skill-list">
						<header class="panel-header">
							<h2>Skill List</h2>
							<Tag type="blue">GCP Used: {currentGCP}</Tag>
						</header>

						<!-- Use {#key} to force re-render based on changes -->
						{#key unlockedSkills.size + paginationPage}
							<DataTable
								headers={[
									{ key: 'name', value: 'Skill' },
									{ key: 'cost', value: 'Cost' },
									{ key: 'gcp', value: 'GCP' },
									{ key: 'actions', value: '' },
								]}
								rows={paginatedSkills.map((skill) => ({
									id: skill.name.en,
									name: skill.name.en,
									cost: skill.cost,
									gcp: skill.gcp,
									skill: skill,
								}))}
							>
								<svelte:fragment slot="cell" let:row let:cell>
									{#if cell.key === 'actions'}
										<div class="skill-actions">
											{#if !unlockedSkills.has(row.skill.name.en)}
												<Button
													size="small"
													kind="secondary"
													disabled={!checkPrerequisites(row.skill)}
													on:click={() => unlockSkill(row.skill)}
												>
													Unlock
												</Button>
											{:else}
												<Button
													size="small"
													kind="secondary"
													on:click={() => lockSkill(row.skill)}
													disabled={checkDependentSkills(row.skill.name.en)
														.length > 0}
												>
													Lock
												</Button>
												<Button
													size="small"
													kind={equippedSkills.includes(row.skill.name.en)
														? 'danger'
														: 'primary'}
													disabled={(!canEquipMore &&
														!equippedSkills.includes(row.skill.name.en)) ||
														!unlockedSkills.has(row.skill.name.en) ||
														equippedSkills.some((equippedSkillName) => {
															const equippedSkill = skillIndex.find(
																(s) => s.name.en === equippedSkillName,
															);
															return (
																equippedSkill &&
																equippedSkill.tree === row.skill.tree
															);
														})}
													on:click={() => equipSkill(row.skill.name.en)}
												>
													{equippedSkills.includes(row.skill.name.en)
														? 'Remove'
														: 'Equip'}
												</Button>
											{/if}
										</div>
									{:else}
										{cell.value}
									{/if}
								</svelte:fragment>
							</DataTable>
						{/key}

						<Pagination
							totalItems={skillIndex.length}
							pageSize={paginationPageSize}
							pageSizes={[5, 10, 15]}
							pageSizeInputDisabled={true}
							bind:page={paginationPage}
						/>
					</Tile>
				</Column>
			</Row>
		</Grid>
		<div class="page-turn">
			<PageTurn pageUrlPathName={$page.url.pathname} />
		</div>
	</div>
</HunterNotesPage>

<style lang="scss">
	.page-turn {
		margin-top: 4rem;
	}

	.panel-header {
		display: flex;
		justify-content: space-between;
		align-items: center;
		margin-bottom: 1rem;
		padding-bottom: 0.5rem;
		border-bottom: 2px solid var(--ctp-surface1);
	}

	.cost-display {
		font-family: monospace;
		font-size: 1.2rem;
	}

	.over-cost {
		color: var(--ctp-red);
	}

	.equipped-list {
		display: flex;
		flex-direction: column;
		gap: 0.5rem;
	}

	.equipped-skill,
	.empty-slot {
		display: flex;
		justify-content: space-between;
		align-items: center;
		padding: 0.5rem;
		border: 1px solid var(--ctp-surface2);
		background: var(--ctp-surface1);
	}

	.empty-slot {
		color: var(--ctp-subtext0);
		background: var(--ctp-surface0);
	}

	.skill-actions {
		display: flex;
		gap: 0.5rem;
	}
</style>
