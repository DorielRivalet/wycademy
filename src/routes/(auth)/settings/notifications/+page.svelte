<script lang="ts">
	import SectionHeading from '$lib/client/components/SectionHeading.svelte';
	import SectionHeadingTopLevel from '$lib/client/components/SectionHeadingTopLevel.svelte';
	import Link from 'carbon-components-svelte/src/Link/Link.svelte';
	import Toggle from 'carbon-components-svelte/src/Toggle/Toggle.svelte';
	import TooltipDefinition from 'carbon-components-svelte/src/TooltipDefinition/TooltipDefinition.svelte';
</script>

<div>
	<SectionHeadingTopLevel title="Notifications" />
	<div>
		<p>
			Choose on which moment and in what way you want to receive notifications.
		</p>
		<p>
			Select the push notifications and bell notifications you want to receive.
		</p>
		<p>
			The settings shown here are for notifications related to accounts. To
			modify the global notifications see the <Link
				inline
				href="/site-preferences">Site Preferences page</Link
			>.
		</p>
		<section>
			<SectionHeading level={2} title={'Push notifications'} />
			<div class="spaced-paragraph">
				You need to have push notifications enabled in your <Link
					href="/site-preferences"
					inline>Site Preferences</Link
				> in order for these settings to work.
			</div>
			<div class="container-toggles">
				<Toggle toggled={true}>
					{#snippet labelText()}
						<span
							><TooltipDefinition>
								Profile rewards
								{#snippet tooltip()}
									<span>
										Notifies when you receive a reward from leaderboards or
										events.
									</span>
								{/snippet}
							</TooltipDefinition></span
						>
					{/snippet}
				</Toggle>
				<Toggle toggled={true}>
					{#snippet labelText()}
						<span
							><TooltipDefinition>
								Wycademy's Events updates
								{#snippet tooltip()}
									<span> Notifies when an event has updated information. </span>
								{/snippet}
							</TooltipDefinition></span
						>
					{/snippet}
				</Toggle>
				<Toggle labelText="I receive new followers" />
				<Toggle
					toggled={true}
					labelText="My followed users obtained a world record"
				/>
				<Toggle toggled={true}>
					{#snippet labelText()}
						<span
							><TooltipDefinition>
								My followed users get a new personal best
								{#snippet tooltip()}
									<span>
										If the personal best was also a world record, skips this
										nofication if "My followed users obtained a world record" is
										enabled.
									</span>
								{/snippet}
							</TooltipDefinition></span
						>
					{/snippet}
				</Toggle>
				<Toggle toggled={true}>
					<!-- migration-task: migrate this slot by hand, `labelText` would shadow a prop on the parent component -->
					{#snippet labelText()}
						<TooltipDefinition>
							My followed users submitted a run
							{#snippet tooltip()}
								<span>
									If the submitted run was also a world record or a personal
									best, skips this nofication if "My followed users obtained a
									world record" or "My followed users get a new personal best"
									is enabled.
								</span>
							{/snippet}
						</TooltipDefinition>
					{/snippet}
				</Toggle>
				<Toggle labelText="Someone followed a followed user" />
			</div>
		</section>

		<section>
			<SectionHeading level={2} title={'Bell notifications'} />
			<div class="container-toggles">
				<Toggle toggled={true}>
					{#snippet labelText()}
						<span
							><TooltipDefinition>
								Profile rewards
								{#snippet tooltip()}
									<span>
										Notifies when you receive a reward from leaderboards or
										events.
									</span>
								{/snippet}
							</TooltipDefinition></span
						>
					{/snippet}
				</Toggle>
				<Toggle toggled={true}>
					{#snippet labelText()}
						<span
							><TooltipDefinition>
								Overlay updates
								{#snippet tooltip()}
									<span>
										Notifies when the overlay publishes a new release.
									</span>
								{/snippet}
							</TooltipDefinition></span
						>
					{/snippet}
				</Toggle>
				<Toggle toggled={true}>
					{#snippet labelText()}
						<span
							><TooltipDefinition>
								Wycademy's Events updates
								{#snippet tooltip()}
									<span> Notifies when an event has updated information. </span>
								{/snippet}
							</TooltipDefinition></span
						>
					{/snippet}
				</Toggle>
				<Toggle toggled={true} labelText="Someone obtained a world record" />
				<Toggle toggled={true}>
					{#snippet labelText()}
						<span
							><TooltipDefinition>
								Someone claimed a global achievement
								{#snippet tooltip()}
									<span>
										Notifies when an achievement (found in
										/overlay/achievements) was obtained for the first time ever.
									</span>
								{/snippet}
							</TooltipDefinition></span
						>
					{/snippet}
				</Toggle>
				<Toggle labelText="I receive new followers" />
				<Toggle
					toggled={true}
					labelText="My followed users obtained a world record"
				/>
				<Toggle toggled={true}>
					{#snippet labelText()}
						<span
							><TooltipDefinition>
								My followed users get a new personal best
								{#snippet tooltip()}
									<span>
										If the personal best was also a world record, skips this
										nofication if "My followed users obtained a world record" is
										enabled.
									</span>
								{/snippet}
							</TooltipDefinition></span
						>
					{/snippet}
				</Toggle>
				<Toggle toggled={true}>
					<!-- migration-task: migrate this slot by hand, `labelText` would shadow a prop on the parent component -->
					{#snippet labelText()}
						<TooltipDefinition>
							My followed users submitted a run
							{#snippet tooltip()}
								<span>
									If the submitted run was also a world record or a personal
									best, skips this nofication if "My followed users obtained a
									world record" or "My followed users get a new personal best"
									is enabled.
								</span>
							{/snippet}
						</TooltipDefinition>
					{/snippet}
				</Toggle>
				<Toggle labelText="Someone followed a followed user" />
			</div>
		</section>
	</div>
</div>

<style lang="scss">
	.container-toggles {
		display: flex;
		flex-direction: column;
		gap: 1rem;
	}
</style>
