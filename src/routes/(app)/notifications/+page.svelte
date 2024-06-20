<script lang="ts">
	import SectionHeadingTopLevel from '$lib/client/components/SectionHeadingTopLevel.svelte';
	import ErrorFilled from 'carbon-icons-svelte/lib/ErrorFilled.svelte';
	import InformationFilled from 'carbon-icons-svelte/lib/InformationFilled.svelte';
	import CheckmarkFilled from 'carbon-icons-svelte/lib/CheckmarkFilled.svelte';
	import WarningFilled from 'carbon-icons-svelte/lib/WarningFilled.svelte';
</script>

<div>
	<SectionHeadingTopLevel title="Notifications" />
	<p>See a list of the notifications you have received.</p>
	<div class="notifications"></div>
	<div>
		<ErrorFilled color="var(--ctp-red)" />
		<WarningFilled color="var(--ctp-yellow)" />
		<CheckmarkFilled color="var(--ctp-green)" />
		<InformationFilled color="var(--ctp-blue)" />
	</div>
</div>

<style lang="scss">
</style>
