<script lang="ts">
	import projects from '$lib/assets/data/projects.json';
	import { slugify } from '$lib/utils';

	import { onMount } from 'svelte';
    import * as THREE from 'three';
    import {OrbitControls} from 'three/addons/controls/OrbitControls.js';
	import { GLTFLoader } from 'three/addons/loaders/GLTFLoader.js';

    let canvasContainer: any;

    onMount(() => {
        // Scene, Camera, Renderer
        const scene = new THREE.Scene();
        const camera = new THREE.PerspectiveCamera(75, canvasContainer.clientWidth / canvasContainer.clientHeight, 0.1, 1000);
        const renderer = new THREE.WebGLRenderer();
        renderer.setSize(canvasContainer.clientWidth, canvasContainer.clientHeight);
        canvasContainer.appendChild(renderer.domElement);

        const controls = new OrbitControls(camera, renderer.domElement);
		const loader = new GLTFLoader();

		loader.load(
            '/agc.gltf',
            (gltf) => {
                // Adjust the model position, scale, etc., as needed
                gltf.scene.scale.set(5, 5, 5); // Example: scaling down the model
                gltf.scene.position.set(0, 0, 0); // Example: adjusting the position
                scene.add(gltf.scene);
            },
            undefined, // We can define a function for progress here
            (error) => {
                console.error('An error happened while loading the model:', error);
            }
        );

        // Camera Position
        camera.position.z = 6;
		camera.position.x = 0; 
		camera.position.y = 4;

        // Animation Loop
        const animate = () => {
            requestAnimationFrame(animate);
			scene.rotation.y += 0.005; 
            controls.update(); // Only required if controls.enableDamping or controls.autoRotate are set to true
            renderer.render(scene, camera);
        };
        animate();

        // Handle Window Resize
        window.addEventListener('resize', () => {
            camera.aspect = canvasContainer.clientWidth / canvasContainer.clientHeight;
            camera.updateProjectionMatrix();
            renderer.setSize(canvasContainer.clientWidth, canvasContainer.clientHeight);
        });

        // Cleanup
        return () => {
            canvasContainer.removeChild(renderer.domElement);
        };
    });
</script>

<div class="projects-container" aria-label="Projects Section">
	<nav class="column list" aria-label="Navigation Links">
		<a href="/">Home</a>
		<figure>
			<div class="ddd" bind:this={canvasContainer}></div>
		</figure>
		<ul class="projects-list" aria-label="List of Projects">
			{#each projects as project}
			<a href={'progetti/' + slugify(project.title)}>
				<li class="project-item">
					{project.title}
				</li>
			</a>
			{/each}
		</ul>
	</nav>

	<article class="column copy" aria-labelledby="project-title">
		<h1 id="project-title">{projects[0].title}</h1>
		<h2>{projects[0].subtitle}</h2>
		<ul class="group" aria-label="Group Members">
			{#each projects[0].group_members as member}
				<li class="member">{member}</li>
			{/each}
		</ul>
		<section class="copy description">
			<p>{projects[0].description}</p>
		</section>
		<section class="disclosure">
			<p>{projects[0].disclosure}</p>
		</section>
	</article>

	<div class="column images" aria-label="Project Images"></div>
</div>

<style>
	.projects-container {
		height: 100%;
		display: grid;
		grid-template-columns: minmax(0, 3fr) minmax(0, 5fr) minmax(0, 5fr);
		grid-gap: 24px;
		overflow: hidden;
	}

	.ddd {
		width: 100%;
		height: 100%;
		background-color: white; 
	}

	.ddd > canvas {
		width: 100%;
		height: 100%;
	}

	.projects-list {
		display: grid;
		grid-template-columns: 1fr;
		grid-template-rows: repeat(8, minmax(0, auto));
		grid-gap: 12px;
	}

	.project-item {
		padding: 12px 12px;
		color: black;
		background-color: white;
	}

	.column {
		background: black;
		color: white;
	}

	.column.copy {
		overflow-y: scroll;
		overflow-x: hidden;
		-ms-overflow-style: none;
		scrollbar-width: none;
		padding: 24px;
	}

	.column.list {
		display: grid;
		grid-template-rows: minmax(0, 36px) minmax(0, 8fr) minmax(0, auto);
		grid-gap: 24px;
		padding: 24px;
		box-sizing: border-box;
	}

	ul {
		padding: 0;
		margin: 0;
	}

	li {
		list-style: none;
	}

	.group {
		display: flex;
		flex-direction: row;
		align-items: flex-start;
		flex-wrap: wrap;
	}

	.member {
		margin: 0 12px 12px 0;
	}

	@media (max-width: 1024px) {
		.projects-container {
			grid-template-columns: minmax(0, 3fr) minmax(0, 5fr);
		}

		.column.images {
			display: none;
		}
	}

	@media (max-width: 516px) {
		.projects-container {
			grid-template-columns: minmax(0, 1fr);
		}

		.column.copy {
			display: none;
		}
	}



</style>
