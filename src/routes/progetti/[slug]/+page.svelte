<script lang="ts">
	import projects from '$lib/assets/data/projects.json';
	import { slugify } from '$lib/utils';
	/** @type {import('./$types').PageData} */
	export let data: { [key: string]: any };
</script>

<div class="projects-container" aria-label="Projects Section">
	<nav class="column list" aria-label="Navigation Links">
		<a href="/">Home</a>
		<figure>
			<img src="path/to/image.jpg" alt="Planimetria dello spazio espositivo" />
            <figcaption class="visually-hidden">Planimetria dello spazio espositivo</figcaption>
		</figure>
		<ul class="projects-list" aria-label="List of Projects">
			{#each projects as project}
				<a href={slugify(project.title)}>
					<li class="project-item">
						{project.title}
					</li>
				</a>
			{/each}
		</ul>
	</nav>

	<article class="column copy" aria-labelledby="project-title">
		<nav><a href="/progetti">Progetti</a></nav>
		<h1 id="project-title">{data.title}</h1>
		<h2>{data.subtitle}</h2>
		<ul class="group" aria-label="Group Members">
			{#each data.group_members as member}
				<li class="member">{member}</li>
			{/each}
		</ul>
		<section class="copy description">
			<p>{data.description}</p>
		</section>
		<section class="disclosure">
			<p>{data.disclosure}</p>
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

	.projects-list {
		display: grid;
		grid-template-columns: 1fr;
		grid-template-rows: repeat(8, minmax(0, auto));
		grid-gap: 12px;
	}

	.project-item {
		padding: 12px;
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

	.column.copy nav {
		display: none;
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

		.column.list {
			display: none;
		}

		.column.copy nav {
			display: block;
		}
	}
</style>
