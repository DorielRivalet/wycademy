<script lang="ts">
	import { T, useLoader, useTask } from '@threlte/core';
	import { interactivity } from '@threlte/extras';
	import { spring } from 'svelte/motion';
	import { TextureLoader } from 'three';

	interface Props {
		frontTexture: string;
		// backTexture: string;
	}

	let rotation = $state(0);
	let { frontTexture }: Props = $props();

	let frontImage = $derived(useLoader(TextureLoader).load(frontTexture));
	// let backImage = $derived(useLoader(TextureLoader).load(backTexture));

	interactivity();
	const scale = spring(1);
	useTask((delta) => {
		rotation += delta;
	});
</script>

<T.PerspectiveCamera
	makeDefault
	position={[2.5, 1, 2.5]}
	oncreate={(ref) => {
		ref.lookAt(0, 1, 0);
	}}
/>
<T.DirectionalLight position={[0, 10, 10]} />
<T.Mesh
	rotation.y={rotation}
	position.y={1}
	scale={$scale}
	onpointerenter={() => scale.set(1.25)}
	onpointerleave={() => scale.set(1)}
>
	<T.BoxGeometry args={[2, 2, 0.1]} />
	{#await $frontImage then value}
		<T.MeshStandardMaterial map={value} />
	{/await}
</T.Mesh>
