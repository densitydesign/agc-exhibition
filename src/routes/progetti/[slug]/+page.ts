import { error } from '@sveltejs/kit';
import projects from '$lib/assets/data/projects.json';
import { slugify } from '$lib/utils.js';

/** @type {import('./$types').PageLoad} */

export function load({ params }) { 
	const filteredProjects = projects.filter((d) => params.slug == slugify(d.title));
	return filteredProjects.length > 0 ? filteredProjects[0] : error(404); 
}