<script lang="ts">
	import SectionHeading from '$lib/client/components/SectionHeading.svelte';
	import SectionHeadingTopLevel from '$lib/client/components/SectionHeadingTopLevel.svelte';
	import Link from 'carbon-components-svelte/src/Link/Link.svelte';
	import Toggle from 'carbon-components-svelte/src/Toggle/Toggle.svelte';
	import TooltipDefinition from 'carbon-components-svelte/src/TooltipDefinition/TooltipDefinition.svelte';
</script>

<div>
	<SectionHeadingTopLevel title="Notifications" />
	<p>
		Choose on which moment and in what way you want to receive notifications.
	</p>
	<p>
		Select the push notifications and bell notifications you want to receive.
	</p>
	<section>
		<SectionHeading level={2} title={'Push notifications'} />
		<p class="spaced-paragraph">
			You need to have push notifications enabled in your <Link
				href="/site-preferences">Site Preferences</Link
			> in order for these settings to work.
		</p>
		<div class="container-toggles">
			<Toggle toggled={true}>
				<span slot="labelText"
					><TooltipDefinition>
						Profile rewards
						<span slot="tooltip">
							Notifies when you receive a reward from leaderboards or events.
						</span>
					</TooltipDefinition></span
				>
			</Toggle>
			<Toggle toggled={true}>
				<span slot="labelText"
					><TooltipDefinition>
						Overlay updates
						<span slot="tooltip">
							Notifies when the overlay publishes a new release.
						</span>
					</TooltipDefinition></span
				>
			</Toggle>
			<Toggle toggled={true}>
				<span slot="labelText"
					><TooltipDefinition>
						Wycademy's Events updates
						<span slot="tooltip">
							Notifies when an event has updated information.
						</span>
					</TooltipDefinition></span
				>
			</Toggle>
			<Toggle toggled={true} labelText="Someone obtained a world record" />
			<Toggle toggled={true}>
				<span slot="labelText"
					><TooltipDefinition>
						Someone claimed a global achievement
						<span slot="tooltip">
							Notifies when an achievement (found in /overlay/achievements) was
							obtained for the first time ever.
						</span>
					</TooltipDefinition></span
				>
			</Toggle>
			<Toggle labelText="I receive new followers" />
			<Toggle
				toggled={true}
				labelText="My followed users obtained a world record"
			/>
			<Toggle toggled={true}>
				<span slot="labelText"
					><TooltipDefinition>
						My followed users get a new personal best
						<span slot="tooltip">
							If the personal best was also a world record, skips this
							nofication if "My followed users obtained a world record" is
							enabled.
						</span>
					</TooltipDefinition></span
				>
			</Toggle>
			<Toggle toggled={true} labelText="">
				<span slot="labelText"
					><TooltipDefinition>
						My followed users submitted a run
						<span slot="tooltip">
							If the submitted run was also a world record or a personal best,
							skips this nofication if "My followed users obtained a world
							record" or "My followed users get a new personal best" is enabled.
						</span>
					</TooltipDefinition></span
				>
			</Toggle>
			<Toggle labelText="Someone followed a followed user" />
		</div>
	</section>

	<section>
		<SectionHeading level={2} title={'Bell notifications'} />
		<div class="container-toggles">
			<Toggle toggled={true}>
				<span slot="labelText"
					><TooltipDefinition>
						Profile rewards
						<span slot="tooltip">
							Notifies when you receive a reward from leaderboards or events.
						</span>
					</TooltipDefinition></span
				>
			</Toggle>
			<Toggle toggled={true}>
				<span slot="labelText"
					><TooltipDefinition>
						Overlay updates
						<span slot="tooltip">
							Notifies when the overlay publishes a new release.
						</span>
					</TooltipDefinition></span
				>
			</Toggle>
			<Toggle toggled={true}>
				<span slot="labelText"
					><TooltipDefinition>
						Wycademy's Events updates
						<span slot="tooltip">
							Notifies when an event has updated information.
						</span>
					</TooltipDefinition></span
				>
			</Toggle>
			<Toggle toggled={true} labelText="Someone obtained a world record" />
			<Toggle toggled={true}>
				<span slot="labelText"
					><TooltipDefinition>
						Someone claimed a global achievement
						<span slot="tooltip">
							Notifies when an achievement (found in /overlay/achievements) was
							obtained for the first time ever.
						</span>
					</TooltipDefinition></span
				>
			</Toggle>
			<Toggle labelText="I receive new followers" />
			<Toggle
				toggled={true}
				labelText="My followed users obtained a world record"
			/>
			<Toggle toggled={true}>
				<span slot="labelText"
					><TooltipDefinition>
						My followed users get a new personal best
						<span slot="tooltip">
							If the personal best was also a world record, skips this
							nofication if "My followed users obtained a world record" is
							enabled.
						</span>
					</TooltipDefinition></span
				>
			</Toggle>
			<Toggle toggled={true} labelText="">
				<span slot="labelText"
					><TooltipDefinition>
						My followed users submitted a run
						<span slot="tooltip">
							If the submitted run was also a world record or a personal best,
							skips this nofication if "My followed users obtained a world
							record" or "My followed users get a new personal best" is enabled.
						</span>
					</TooltipDefinition></span
				>
			</Toggle>
			<Toggle labelText="Someone followed a followed user" />
		</div>
	</section>
</div>

<style lang="scss">
	.container-toggles {
		display: flex;
		flex-direction: column;
		gap: 1rem;
	}
</style>
