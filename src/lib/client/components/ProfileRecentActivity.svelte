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

	interface Props {
		recentActivities?: {
			action: Action;
			description: string;
			date: string;
			link: string;
		}[];
	}

	let {
		recentActivities = [
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
		],
	}: Props = $props();
</script>

<div class="container">
	<OrderedList>
		{#each recentActivities as activity}
			<ListItem>
				<div class="activity">
					<p class="date">{activity.date}</p>
					<div class="description paragraph-long-02">
						{#if activity.action === 'Submitted'}
							{@const SvelteComponent = activitiesInfo.find(
								(e) => e.action === activity.action,
							)?.icon}
							<SvelteComponent />
							Submitted
							<span
								><Link inline href={activity.link}
									>{activity.description} new runs.</Link
								></span
							>
						{:else if activity.action === 'Followed'}
							{@const SvelteComponent_1 = activitiesInfo.find(
								(e) => e.action === activity.action,
							)?.icon}
							<SvelteComponent_1 />
							Gained a new follower: <Link inline href={activity.link}
								>{activity.description}.</Link
							>
						{:else if activity.action === 'Following'}
							{@const SvelteComponent_2 = activitiesInfo.find(
								(e) => e.action === activity.action,
							)?.icon}
							<SvelteComponent_2 />
							Now following: <Link inline href={activity.link}
								>{activity.description}.</Link
							>
						{:else if activity.action === 'World Record'}
							{@const SvelteComponent_3 = activitiesInfo.find(
								(e) => e.action === activity.action,
							)?.icon}
							<SvelteComponent_3 />
							Obtained
							<span
								><Link inline href={activity.link}>
									a new World Record for {activity.description}!</Link
								></span
							>
						{:else if activity.action === 'Personal Best'}
							{@const SvelteComponent_4 = activitiesInfo.find(
								(e) => e.action === activity.action,
							)?.icon}
							<SvelteComponent_4 />
							Obtained <Link inline href={activity.link}>
								a new Personal Best for {activity.description}!</Link
							>
						{:else if activity.action === 'Trophy'}
							{@const SvelteComponent_5 = activitiesInfo.find(
								(e) => e.action === activity.action,
							)?.icon}
							<SvelteComponent_5 />
							Obtained the trophy "<Link inline href={activity.link}
								>{activity.description}"!</Link
							>
						{:else if activity.action === 'Achievement'}
							{@const SvelteComponent_6 = activitiesInfo.find(
								(e) => e.action === activity.action,
							)?.icon}
							<SvelteComponent_6 />
							Obtained the achievement "<Link inline href={activity.link}
								>{activity.description}"!</Link
							>
						{:else if activity.action === 'Guild Card Background'}
							{@const SvelteComponent_7 = activitiesInfo.find(
								(e) => e.action === activity.action,
							)?.icon}
							<SvelteComponent_7 />
							Obtained the <Link inline href={activity.link}
								>{activity.description} guild card background!</Link
							>
						{:else if activity.action === 'Reacted'}
							{@const SvelteComponent_8 = activitiesInfo.find(
								(e) => e.action === activity.action,
							)?.icon}
							<SvelteComponent_8 />
							Reacted to a run by <Link inline href={activity.link}
								>{activity.description}.</Link
							>
						{:else if activity.action === 'Favorited Set'}
							{@const SvelteComponent_9 = activitiesInfo.find(
								(e) => e.action === activity.action,
							)?.icon}
							<SvelteComponent_9 />
							Favorited an armor set by <Link inline href={activity.link}
								>{activity.description}.</Link
							>
						{:else if activity.action === 'Favorited Run'}
							{@const SvelteComponent_10 = activitiesInfo.find(
								(e) => e.action === activity.action,
							)?.icon}
							<SvelteComponent_10 />
							Favorited a run by <Link inline href={activity.link}
								>{activity.description}.</Link
							>
						{/if}
					</div>
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
