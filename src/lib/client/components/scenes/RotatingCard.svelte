<script lang="ts">
	import { T, useLoader, useTask } from '@threlte/core';
	import { interactivity } from '@threlte/extras';
	import { spring } from 'svelte/motion';
	import { TextureLoader } from 'three';

	// TODO sometimes it doesnt load

	interface Props {
		frontImage: string;
		backImage: string;
	}

	let { frontImage, backImage }: Props = $props();

	const rotationSpeed = 0.5;

	interactivity();
	const scale = spring(1);
	let rotation = $state(0);
	let hovered = $state(false);
	useTask((delta) => {
		if (!hovered) {
			rotation += delta * rotationSpeed;
		}
	});

	const frontTexture = useLoader(TextureLoader).load(frontImage);
	const backTexture = useLoader(TextureLoader).load(backImage);
</script>

<T.PerspectiveCamera
	makeDefault
	position={[2.5, 1, 2.5]}
	on:create={({ ref }) => {
		ref.lookAt(0, 1, 0);
	}}
/>

<T.DirectionalLight position={[0, 10, 10]} />

<T.Mesh
	rotation.y={rotation}
	position.y={1}
	scale={$scale}
	on:pointerenter={() => (hovered = true)}
	on:pointerleave={() => {
		hovered = false;
	}}
>
	<T.BoxGeometry args={[2, 2, 0.01]} />
	<T.MeshStandardMaterial
		map={$frontTexture}
		attach={(parent, self) => {
			if (Array.isArray(parent.material))
				parent.material = [...parent.material, self];
			else parent.material = [self];
		}}
	/>
	<T.MeshStandardMaterial
		map={$backTexture}
		attach={(parent, self) => {
			if (Array.isArray(parent.material))
				parent.material = [...parent.material, self];
			else parent.material = [self];
		}}
	/>
	<T.MeshStandardMaterial
		map={$frontTexture}
		attach={(parent, self) => {
			if (Array.isArray(parent.material))
				parent.material = [...parent.material, self];
			else parent.material = [self];
		}}
	/>
	<T.MeshStandardMaterial
		map={$backTexture}
		attach={(parent, self) => {
			if (Array.isArray(parent.material))
				parent.material = [...parent.material, self];
			else parent.material = [self];
		}}
	/>
	<T.MeshStandardMaterial
		map={$frontTexture}
		attach={(parent, self) => {
			if (Array.isArray(parent.material))
				parent.material = [...parent.material, self];
			else parent.material = [self];
		}}
	/>
	<T.MeshStandardMaterial
		map={$backTexture}
		attach={(parent, self) => {
			if (Array.isArray(parent.material))
				parent.material = [...parent.material, self];
			else parent.material = [self];
		}}
	/></T.Mesh
>
