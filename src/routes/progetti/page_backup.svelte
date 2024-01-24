<script lang="ts">
	import projects from '$lib/assets/data/projects.json';

	function slugify(str: string) {
		return String(str)
			.normalize('NFKD')
			.replace(/[\u0300-\u036f]/g, '')
			.trim()
			.toLowerCase()
			.replace(/[^a-z0-9 -]/g, '')
			.replace(/\s+/g, '-')
			.replace(/-+/g, '-');
	}
</script>

<div class="projects container">
	<div class="column list">
		<a href="/">HOME</a>
		<div>IMG</div>
		<ul class="projects-list">
			{#each projects as project}
				<li class="project-item">
					<a href={slugify(project.title)}>{project.title}</a>
				</li>
			{/each}
		</ul>
	</div>
	<div class="column copy">
		<h1>{projects[0].title}</h1>
		<h2>{projects[0].subtitle}</h2>
		<ul class="group">
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
	</div>
	<div class="column images"></div>
</div>

<style>
	.projects.container {
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
		padding: 0 24px;
	}

	.column.list {
		display: grid;
		grid-template-rows: minmax(0, 1fr) minmax(0, 2fr) minmax(0, auto);
		grid-gap: 24px;
		padding: 24px;
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

    
</style>
