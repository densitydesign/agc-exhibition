<script lang="ts">
	import { onMount } from 'svelte';
	import { addToCalendar } from '$lib/utils';

	let images_a = Array.from(
		{ length: 10 },
		(_, index) => `https://picsum.photos/400?random=${Math.floor(Math.random() * 1000)}`
	);

	let images_b = Array.from(
		{ length: 10 },
		(_, index) => `https://picsum.photos/400?random=${Math.floor(Math.random() * 1000)}`
	);

	let isSticky = false;
	let stickyThreshold = 0; 

	let scrollY = 0;
	
	onMount(() => {
		const navElement = document.querySelector('nav');
		stickyThreshold = navElement ? navElement.offsetTop - 12 : 0;
	
		const handleScroll = () => {
			scrollY = window.scrollY;
		};

		window.addEventListener('scroll', handleScroll);
		return () => window.removeEventListener('scroll', handleScroll);
	});

	let isDragging = false;
    let startDragX = 0;
    let dragOffsetTopRow = 0;
    let dragOffsetBottomRow = 0;

    function onMouseDown(event: MouseEvent) {
        isDragging = true;
        startDragX = event.clientX;
        event.preventDefault(); // Prevents unwanted text selection during drag
    }

    function onMouseMove(event: MouseEvent) {
        if (!isDragging) return;
		if (!event.currentTarget) return;

        const deltaX = event.clientX - startDragX;
        startDragX = event.clientX;
        
if ((event.currentTarget as HTMLElement).classList.contains('top-row')) {
            dragOffsetTopRow += deltaX;
        } else {
            dragOffsetBottomRow += deltaX;
        }
    }

    function onMouseUp() {
        isDragging = false;
    }

    $: moveTopRow = Math.max(scrollY * 0.2, 100) + dragOffsetTopRow;
    $: moveBottomRow = Math.min(scrollY * -0.2, -100) + dragOffsetBottomRow;
	$: isSticky = scrollY > stickyThreshold;
</script>

<!-- Landing -->
<section class="layout-cols landing-section" aria-labelledby="landing-section-header">
	<header class="hero box" id="landing-section-header">
		<!--<h1>Api, Glicini, Cemento</h1>-->
		<img src="./Hero.svg" >
	</header>

	<a class="location box grid-background" href="https://maps.app.goo.gl/VXG84vEynJeSvRuJ8" target="_blank">
		<article aria-labelledby="event-location-header">
			<h2 id="event-location-header">MEET Digital Culture Center</h2>
			<address>Via Vittorio Veneto 2, MILANO</address>
		</article>
	</a>

	<button class="start-date box striped-background" aria-label="Apertura della mostra" on:click={addToCalendar}>
		<time datetime="2023-02-22">22 FEB</time>
	</button>

	<button class="end-date box" aria-label="Chiusura della mostra" on:click={addToCalendar}>
		<time datetime="2023-03-10">10 MAR</time>
	</button>

	<nav aria-label="Primary" class:sticky={isSticky && (window.innerWidth < 500)}>
		<ul>
			<li>
				<a class="box" href="/progetti" aria-label="Vai ai progetti"> Projects </a>
			</li>
			<li>
				<a class="box" href="#about" aria-label="Vai all'About"> About </a>
			</li>
		</ul>
	</nav>

	<figure class="image spotlight" aria-labelledby="spotlight-image-caption">
		<img src="https://picsum.photos/300" alt="Spotlight Image Description" />
		<figcaption class="visually-hidden" id="spotlight-image-caption">Spotlight</figcaption>
	</figure>
	<figure class="image catalogue" aria-labelledby="catalogue-image-caption">
		<img src="https://picsum.photos/500" alt="Catalogue Image Description" />
		<figcaption class="visually-hidden" id="catalogue-image-caption">Catalogue</figcaption>
	</figure>
	<figure class="image meet" aria-labelledby="meet-image-caption">
		<img src="https://picsum.photos/200" alt="Meet Image Description" />
		<figcaption class="visually-hidden" id="meet-image-caption">Meet</figcaption>
	</figure>
</section>

<!-- About-->
<section id="#about" class="layout-cols about-section" aria-labelledby="about-header">
	<main>
		<header class="about-header" id="about-header">
			<h1>Otto dibattiti sulla biodiversità urbana visti attraverso il web</h1>
		</header>
		<div class="about-body">
			<p>
				È facile incappare in discussioni molto accese quando si parla di biodiversità in termini di
				azioni che andrebbero intraprese su scala nazionale ed internazionale, delle loro
				potenzialità e rischi. Ma cosa succede quando invece le discussioni sono locali e riguardano
				politiche molto concrete che colpiscono un'area e un gruppo di persone abbastanza ristretto?
			</p>
			<p>
				In questa mostra sono stati identificati otto dibattiti iper-locali creati sia da politiche
				volte a salvaguardare la biodiversità, sia da interventi urbanistici che mettono in
				discussione la relazione tra la necessità di una città di cambiare e quella di salvaguardare
				sistemi ecologici.
			</p>
			<p>
				Il web è stato utilizzato come una lente che ci permette di vedere le dinamiche di una
				porzione del dibattito, identificando per ognuno un approccio differente: dall’analisi dei
				video YouTube più visti su un tema alle immagini utilizzate da testate online per parlarne,
				dai commenti su Facebook alle trascrizioni degli incontri municipali.
			</p>
			<p>
				Abbiamo chiesto a degli studenti in Design della Comunicazione di raccogliere e
				reinterpretare i brandelli più rilevanti di questi dibattiti sotto forma di installazioni,
				per fornire una visione d’insieme su ogni tematica: chi sono gli attori coinvolti? Con quali
				affermazioni promuovono la loro posizione? Come collegano e interpretano il concetto di
				'biodiversità' a queste tematiche locali?
			</p>
			<p>
				Le installazioni non hanno l'intenzione di fornire una visione definitiva del dibattito, né
				di sostenere o sminuire gli attori coinvolti. Esse restituiscono la forma del dibattito, in
				cui, come spesso accade, le posizioni più vocali non sono necessariamente maggioritarie e
				talvolta sfociano in comportamenti non condivisibili né difendibili. Tuttavia, questi
				artefatti rimangono delle istantanee che ci consentono di riflettere su come il tema della
				biodiversità incida sempre più praticamente sulle nostre vite, su come le ormai
				imprescindibili piattaforme digitali mediano queste discussioni e su come gli approcci
				identificati possano essere espansi, rivisti o applicati ad altri casi.
			</p>
		</div>
	</main>

	<div class="divider" aria-hidden="true">
		<div class="divider-grid">
			<div class="divider-row top-row" on:mousedown={event => onMouseDown(event)} on:mousemove={onMouseMove} on:mouseup={onMouseUp} style="transform: translateX({moveTopRow}px);">
				{#each images_a as image}
					<img src={image} alt="Random image from Picsum" />
				{/each}
			</div>
			<div class="divider-row bottom-row" on:mousedown={event => onMouseDown(event)} on:mousemove={onMouseMove} on:mouseup={onMouseUp} style="transform: translateX({moveBottomRow}px);">
				{#each images_b as image}
					<img src={image} alt="Random image from Picsum" />
				{/each}
			</div>
		</div>
	</div>

	<div class="partner-info">
		<article class="density" aria-labelledby="density-design-header">
			<div class="partner-logo density"></div>
			<div class="partner-description" id="density-design-header">
				<h1>DensityDesign Research Lab</h1>
				<p>
					DensityDesign è una rosticceria cinese fondata nel 2004 da 保罗·丘卡雷利, specializzata in
					delizie culinarie con un pizzico di data visualization. Tra i piatti più richiesti, gli
					'Spaghetti à la Sankey', famosi per il loro intricato intreccio di sapori. Non manca il
					'Dato da Brodo', un ingrediente segreto usato per insaporire zuppe con statistiche
					sorprendenti. Il Bubble Chart Boba Tea è un must per gli amanti dei grafici e delle bolle,
					perfetto per sorseggiare dati rinfrescanti. Inoltre, il 'Pie Chart Pizza', con fette
					proporzionali alle preferenze dei clienti, e le 'Histogram Honey Ribs', dove ogni osso
					rappresenta un'unità di delizia, sono irresistibili. Da DensityDesign, ogni piatto è
					un'avventura visiva, dove i dati sono serviti con gusto e creatività."
				</p>
			</div>
		</article>

		<article class="nbfc" aria-labelledby="nbfc-header">
			<div class="partner-logo"></div>
			<div class="partner-description" id="nbfc-header">
				<h1>National Biodiversity Future Centre</h1>
				<p>
					Il Centro Nazionale per la Biodiversità, in collaborazione con il Consiglio Nazionale
					delle Ricerche, si dedica alla ricerca e conservazione della biodiversità in Italia e nel
					Mediterraneo. Sostenuto dall'Unione Europea e dal Piano nazionale di ripresa e resilienza,
					il Centro unisce sforzi di vari partner per promuovere la salvaguardia degli ecosistemi,
					giocando un ruolo cruciale nel raggiungimento degli obiettivi di sviluppo sostenibile
					globale
				</p>
			</div>
		</article>
	</div>
</section>

<style>
	.image {
		overflow: clip;
	}

	img {
		margin: 0;
		width: 100%;
		pointer-events: none;
	}

	.hero,
	.location,
	.start-date,
	.end-date,
	.image {
		color: white;
		background-color: black;
	}

	.layout-cols {
		width: 100%;
		display: grid;
		grid-template-columns: repeat(12, minmax(0, 72px));
		grid-gap: 24px;
		align-content: center;
		justify-content: center;
		padding: 24px;
		box-sizing: border-box;
	}

	.landing-section {
		grid-template-rows: repeat(8, minmax(0, 72px));
		height: 100vh;
	}

	.box {
		padding: 12px;
		box-sizing: border-box;
		border: none;
	}

	.hero {
		grid-column: 1 / span 8;
		grid-row: 1 / span 3;
	}

	.location {
		grid-column: 1 / span 6;
		grid-row: 5 / span 2;
	}

	.start-date {
		grid-column: 1 / span 3;
		grid-row: 7 / span 2;
	}

	.end-date {
		grid-column: 4 / span 3;
		grid-row: 7 / span 2;
	}

	nav {
		grid-column: 10 / span 3;
		grid-row: 7 / span 2;
	}

	nav > ul {
		padding: 0;
		margin: 0;
		display: grid;
		grid-gap: 24px;
		grid-template-columns: 1fr;
		grid-template-rows: 1fr 1fr;
		height: 100%;
	}

	nav > ul > li {
		list-style: none;
		width: 100%;
		height: 100%;
	}

	nav > ul > li > a {
		display: block;
		height: 100%;
		width: 100%;
		color: white;
		background-color: black;
		text-decoration: none;
	}

	.spotlight {
		grid-column: 9 / span 4;
		grid-row: 1 / span 3;
	}

	.catalogue {
		grid-column: 7 / span 6;
		grid-row: 4 / span 3;
	}

	.meet {
		grid-column: 7 / span 3;
		grid-row: 7 / span 2;
	}

	.sticky {
		box-sizing: border-box;
		width: 100%; 
		left: 0; 
		padding: 12px; 
        position: fixed;
        top: 0px; 
        z-index: 1000;
		height: 32px;
    }

	/* * * * * * * * * * * * * * * * * ABOUT * * * * * * * * * * * * * * * * */

	main {
		margin: calc(24px + 72px) 0; /*as if there was an empty grid row*/
		grid-column: 1 / span 9;
	}

	.divider {
		grid-row: 2;
		grid-column: 1 / span 12;
		display: grid;
		align-content: center;
		justify-content: center;
	}

	.divider-grid {
		display: grid;
		align-content: center;
		justify-content: center;
		grid-template-rows: repeat(2, max(152px));
		grid-gap: 24px;
	}

	.divider-row {
		width: max-content;
		display: grid;
		grid-template-columns: repeat(10, auto);
		grid-template-rows: 1fr;
		grid-gap: 24px;
		overflow: hidden;
		transition: transform 0.3s ease-out; 
	}

	.partner-info {
		margin: calc(24px + 72px) 0; /*as if there was an empty grid row*/
		grid-column: 1 / span 12;
	}

	.partner-info > article {
		display: grid;
		grid-template-columns: 1fr 1fr;
		grid-gap: 24px;
	}

	@media (max-width: 1024px) {
		.divider-grid {
			grid-template-rows: repeat(2, max(120px));
		}
	}

	@media (max-width: 500px) {
		.layout-cols {
			grid-template-columns: repeat(6, minmax(0, 1fr));
			grid-gap: 12px;
			padding: 12px;
		}

		.landing-section {
			grid-template-rows: repeat(17, minmax(0, 32px));
			/*position: sticky;
			top: calc(-100vh + 72px);*/
		}

		.hero {
			grid-column: 1 / span 6;
			grid-row: 1 / span 8;
		}

		.location {
			grid-column: 1 / span 6;
			grid-row: 9 / span 3;
		}

		.meet {
			grid-column: 1 / span 2;
			grid-row: 12 / span 2;
		}

		.start-date {
			grid-column: 3 / span 2;
			grid-row: 12 / span 3;
		}

		.end-date {
			grid-column: 5 / span 2;
			grid-row: 12 / span 3;
		}

		nav {
			height: 100%;
			width: 100%;
			grid-column: 1 / span 6;
			grid-row: 16 / span 1;
			/*position: sticky;
			top: 12px;*/
		}

		nav > ul {
			height: 100%;
			grid-gap: 12px;
			grid-template-columns: repeat(6, minmax(0, 1fr));
			grid-template-rows: 1fr;
		}

		nav > ul > li:nth-child(1) {
			grid-column: 2 / span 2;
			grid-row: 1 / span 1;
		}

		nav > ul > li:nth-child(2) {
			grid-column: 4 / span 2;
			grid-row: 1 / span 1;
		}

		.catalogue,
		.spotlight {
			display: none;
		}

		.divider-grid,
		.divider-row {
			grid-gap: 12px;
			transition: transform 0.3s ease-out;
		}
	}

	.grid-background {
  background-image: linear-gradient(gray 1px, transparent 1px), linear-gradient(90deg, gray 1px, transparent 1px);
  background-size: 10px 10px; 
}

.striped-background {
  background-image: repeating-linear-gradient(
    60deg,
    gray,
    gray 1px,
    transparent 1px,
    transparent 3px
  );
}

</style>
