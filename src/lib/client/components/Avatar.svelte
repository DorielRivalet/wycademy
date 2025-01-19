<script lang="ts">
	import DefaultAvatar from '$lib/client/images/icon/transcend.webp';

	interface Props {
		src?: string;
		height?: string;
		href?: string;
	}

	let { src = DefaultAvatar, href, height = '100%' }: Props = $props();
</script>

<div class={href ? 'container-link' : 'container'}>
	{#if href}
		<a {href}><img alt="Avatar" {src} style="height: {height};" /></a>
	{:else}
		<img {src} alt="Avatar" style="height: {height};" />
	{/if}
</div>

<style lang="scss">
	@use '@carbon/motion' as motion;

	.container {
		height: 100%;
	}

	.container-link {
		height: 100%;
		transition: filter motion.$duration-moderate-02
			motion.motion(standard, expressive);
	}

	img {
		object-fit: cover;
		border: 1px solid var(--ctp-surface0);
		border-radius: 100%;
	}

	.container-link:hover {
		filter: brightness(110%);
	}
</style>
