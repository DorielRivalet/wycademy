<script lang="ts">
	import Upload from 'carbon-icons-svelte/lib/Upload.svelte';
	import Trophy from 'carbon-icons-svelte/lib/Trophy.svelte';
	import UserFollow from 'carbon-icons-svelte/lib/UserFollow.svelte';
	import FaceAdd from 'carbon-icons-svelte/lib/FaceAdd.svelte';
	import Badge from 'carbon-icons-svelte/lib/Badge.svelte';
	import Star from 'carbon-icons-svelte/lib/Star.svelte';
	import Favorite from 'carbon-icons-svelte/lib/Favorite.svelte';
	import EarthFilled from 'carbon-icons-svelte/lib/EarthFilled.svelte';
	import Fire from 'carbon-icons-svelte/lib/Fire.svelte';
	import Recommend from 'carbon-icons-svelte/lib/Recommend.svelte';
	import UserIdentification from 'carbon-icons-svelte/lib/UserIdentification.svelte';
	import OrderedList from 'carbon-components-svelte/src/OrderedList/OrderedList.svelte';
	import ListItem from 'carbon-components-svelte/src/ListItem/ListItem.svelte';
	import Link from 'carbon-components-svelte/src/Link/Link.svelte';

	type Action =
		| 'Submitted'
		| 'Followed'
		| 'Following'
		| 'World Record'
		| 'Personal Best'
		| 'Trophy'
		| 'Achievement'
		| 'Guild Card Background'
		| 'Reacted'
		| 'Title'
		| 'Donation'
		| 'Favorited Set'
		| 'Favorited Run';

	const activitiesInfo: { action: Action; icon: any }[] = [
		{
			action: 'Submitted',
			icon: Upload,
		},
		{
			action: 'Followed',
			icon: UserFollow,
		},
		{
			action: 'Following',
			icon: UserFollow,
		},
		{
			action: 'World Record',
			icon: EarthFilled,
		},
		{
			action: 'Personal Best',
			icon: Fire,
		},
		{
			action: 'Trophy',
			icon: Trophy,
		},
		{
			action: 'Achievement',
			icon: Badge,
		},
		{
			action: 'Guild Card Background',
			icon: UserIdentification,
		},
		{
			action: 'Reacted',
			icon: FaceAdd,
		},
		{
			action: 'Favorited Set',
			icon: Favorite,
		},
		{
			action: 'Favorited Run',
			icon: Favorite,
		},
	];

	export let recentActivities: {
		action: Action;
		description: string;
		date: string;
	}[] = [
		{
			action: 'Submitted',
			description: '3',
			date: '2024-12-10',
			link: '/',
		},
		{
			action: 'Followed',
			description: 'User 2',
			date: '2024-12-08',
			link: '/',
		},
		{
			action: 'Following',
			description: 'User 3',
			date: '2024-12-07',
			link: '/',
		},
		{
			action: 'World Record',
			description: 'Blinking Nargacuga Lance FDS',
			date: '2024-12-07',
			link: '/',
		},
		{
			action: 'Personal Best',
			description: 'Blinking Nargacuga Lance FDS',
			date: '2024-12-06',
			link: '/',
		},
		{
			action: 'Trophy',
			description: 'Golden Elzelion Statue #9',
			date: '2024-12-06',
			link: '/',
		},
		{
			action: 'Achievement',
			description: 'Elzelion Slayer',
			date: '2024-12-05',
			link: '/',
		},
		{
			action: 'Guild Card Background',
			description: 'Abiorugu',
			date: '2024-12-05',
			link: '/',
		},
		{
			action: 'Reacted',
			description: 'User 4',
			date: '2024-12-04',
			link: '/',
		},
		{
			action: 'Favorited Set',
			description: 'User 5',
			date: '2024-12-03',
			link: '/',
		},
		{
			action: 'Favorited Run',
			description: 'User 6',
			date: '2024-12-02',
			link: '/',
		},
		{
			action: 'Favorited Run',
			description: 'User 7',
			date: '2024-12-01',
			link: '/',
		},
	];
</script>

<div class="container">
	<OrderedList>
		{#each recentActivities as activity}
			<ListItem>
				<div class="activity">
					<p class="date">{activity.date}</p>
					<p class="description">
						{#if activity.action === 'Submitted'}
							<svelte:component
								this={activitiesInfo.find((e) => e.action === activity.action)
									?.icon}
							/>
							Submitted
							<span
								><Link inline href={activity.link}
									>{activity.description} new runs.</Link
								></span
							>
						{:else if activity.action === 'Followed'}
							<svelte:component
								this={activitiesInfo.find((e) => e.action === activity.action)
									?.icon}
							/>
							Gained a new follower: <Link inline href={activity.link}
								>{activity.description}.</Link
							>
						{:else if activity.action === 'Following'}
							<svelte:component
								this={activitiesInfo.find((e) => e.action === activity.action)
									?.icon}
							/>
							Now following: <Link inline href={activity.link}
								>{activity.description}.</Link
							>
						{:else if activity.action === 'World Record'}
							<svelte:component
								this={activitiesInfo.find((e) => e.action === activity.action)
									?.icon}
							/>
							Obtained
							<span
								><Link inline href={activity.link}>
									a new World Record for {activity.description}!</Link
								></span
							>
						{:else if activity.action === 'Personal Best'}
							<svelte:component
								this={activitiesInfo.find((e) => e.action === activity.action)
									?.icon}
							/>
							Obtained <Link inline href={activity.link}>
								a new Personal Best for {activity.description}!</Link
							>
						{:else if activity.action === 'Trophy'}
							<svelte:component
								this={activitiesInfo.find((e) => e.action === activity.action)
									?.icon}
							/>
							Obtained the trophy "<Link inline href={activity.link}
								>{activity.description}"!</Link
							>
						{:else if activity.action === 'Achievement'}
							<svelte:component
								this={activitiesInfo.find((e) => e.action === activity.action)
									?.icon}
							/>
							Obtained the achievement "<Link inline href={activity.link}
								>{activity.description}"!</Link
							>
						{:else if activity.action === 'Guild Card Background'}
							<svelte:component
								this={activitiesInfo.find((e) => e.action === activity.action)
									?.icon}
							/>
							Obtained the <Link inline href={activity.link}
								>{activity.description} guild card background!</Link
							>
						{:else if activity.action === 'Reacted'}
							<svelte:component
								this={activitiesInfo.find((e) => e.action === activity.action)
									?.icon}
							/>
							Reacted to a run by <Link inline href={activity.link}
								>{activity.description}.</Link
							>
						{:else if activity.action === 'Favorited Set'}
							<svelte:component
								this={activitiesInfo.find((e) => e.action === activity.action)
									?.icon}
							/>
							Favorited an armor set by <Link inline href={activity.link}
								>{activity.description}.</Link
							>
						{:else if activity.action === 'Favorited Run'}
							<svelte:component
								this={activitiesInfo.find((e) => e.action === activity.action)
									?.icon}
							/>
							Favorited a run by <Link inline href={activity.link}
								>{activity.description}.</Link
							>
						{/if}
					</p>
				</div>
			</ListItem>
		{/each}
	</OrderedList>
</div>

<style lang="scss">
	.container {
		padding-left: 1.5rem;
	}

	.activity {
		display: flex;
		flex-direction: row;
		gap: 0.25rem;
		align-items: center;

		.date {
			color: var(--ctp-subtext0);
			font-size: 14px;
		}
	}
</style>
