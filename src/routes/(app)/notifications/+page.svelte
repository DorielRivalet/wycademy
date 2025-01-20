<script lang="ts">
	import SectionHeadingTopLevel from '$lib/client/components/SectionHeadingTopLevel.svelte';
	import ErrorFilled from 'carbon-icons-svelte/lib/ErrorFilled.svelte';
	import InformationFilled from 'carbon-icons-svelte/lib/InformationFilled.svelte';
	import CheckmarkFilled from 'carbon-icons-svelte/lib/CheckmarkFilled.svelte';
	import WarningAltFilled from 'carbon-icons-svelte/lib/WarningAltFilled.svelte';
	import UnknownFilled from 'carbon-icons-svelte/lib/UnknownFilled.svelte';
	// TODO delete page
</script>

<div>
	<SectionHeadingTopLevel title="Notifications" />
	<p>See a list of the notifications you have received.</p>
	<div class="notifications"></div>
	<div>
		<ErrorFilled color="var(--ctp-red)" />
		<WarningAltFilled color="var(--ctp-yellow)" />
		<CheckmarkFilled color="var(--ctp-green)" />
		<InformationFilled color="var(--ctp-blue)" />
		<UnknownFilled color="var(--ctp-overlay2)" />
	</div>
</div>

<style lang="scss">
</style>
