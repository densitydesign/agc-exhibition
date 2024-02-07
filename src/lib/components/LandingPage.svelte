<script lang="ts">
	import Parallax from '$lib/components/Parallax.svelte';
	import SVGElement from '$lib/components/SVGElement.svelte';
	//@ts-ignore
	import Date from '$lib/assets/desktop/date.svg?component';
	import DateMobile from '$lib/assets/mobile/date_mobile.svg?component';
	//@ts-ignore
	import Hero from '$lib/assets/desktop/hero.svg?component';
	import HeroMobile from '$lib/assets/mobile/hero_mobile.svg?component';
	//@ts-ignore
	import Location from '$lib/assets/desktop/location.svg?component';
	import LocationMobile from '$lib/assets/mobile/location_mobile.svg?component';
	//@ts-ignore
	import OpeningIT from '$lib/assets/desktop/opening_it.svg?component';
	import OpeningEN from '$lib/assets/desktop/opening_en.svg?component';
	import OpeningIT_Mobile from '$lib/assets/mobile/opening_mobile_it.svg?component';
	import OpeningEN_Mobile from '$lib/assets/mobile/opening_mobile_en.svg?component';
	//@ts-ignore
	import TaglineIT from '$lib/assets/desktop/tagline_it.svg?component';
	import TaglineEN from '$lib/assets/desktop/tagline_en.svg?component';
	import TaglineIT_Mobile from '$lib/assets/mobile/tagline_mobile_it.svg?component';
	import TaglineEN_Mobile from '$lib/assets/mobile/tagline_mobile_en.svg?component';

	import Sopra1 from '$lib/assets/map/SOPRA1.svg?component';
	import Sopra2 from '$lib/assets/map/SOPRA2.svg?component';
	import Sopra3 from '$lib/assets/map/SOPRA3.svg?component';
	import Sopra4 from '$lib/assets/map/SOPRA4.svg?component';
	import Sotto1 from '$lib/assets/map/SOTTO1.svg?component';
	import Sotto2 from '$lib/assets/map/SOTTO2.svg?component';

	import { language } from '$lib/stores';

	let innerWidth: number = 0;
	let mobile: boolean = false;

	$: {
		mobile = innerWidth < 768;
	}
</script>

<svelte:window bind:innerWidth />
<section id="hero">
	{#if !mobile}
		<SVGElement Content={Date} start={6} span={2} className={'to-bottom date'}>
			<time datetime="2024-02-21/24-03-03"></time>
		</SVGElement>

		<SVGElement Content={Hero} start={5} span={4} className={'to-bottom'}>
			Api, Glicini, Cemento
		</SVGElement>

		{#if $language === 'IT'}
			<SVGElement Content={TaglineIT} start={5} span={4} className={'to-top'}>
				Otto dibattiti sulla biodiversità urbana visti attraverso il web
			</SVGElement>
		{:else}
			<SVGElement Content={TaglineEN} start={5} span={4} className={'to-top'}>
				Eight debates on urban biodiversity seen through the web
			</SVGElement>
		{/if}

		<SVGElement Content={Location} start={2} span={4} className={'info to-bottom'}>
			<address>MEET Digital Culture Center, Viale Vittorio Veneto 2, Milano</address>
		</SVGElement>

		{#if $language === 'IT'}
			<SVGElement Content={OpeningIT} start={9} span={3} className={'info to-bottom to-right'}>
				<time datetime="2024-02-21"></time>
			</SVGElement>
		{:else}
			<SVGElement Content={OpeningEN} start={9} span={3} className={'info to-bottom to-right'}>
				<time datetime="2024-02-21"></time>
			</SVGElement>
		{/if}
	{:else}
		<SVGElement Content={DateMobile} start={2} span={4} className={'smaller'}>
			<time datetime="2024-02-21/24-03-03"></time>
		</SVGElement>

		<SVGElement Content={HeroMobile} start={2} span={4} className={'to-bottom'}>
			Api, Glicini, Cemento
		</SVGElement>

		{#if $language === 'IT'}
			<SVGElement Content={TaglineIT_Mobile} start={2} span={4} className={'info to-top tagline'}>
				Otto dibattiti sulla biodiversità urbana visti attraverso il web
			</SVGElement>
		{:else}
			<SVGElement Content={TaglineEN_Mobile} start={2} span={4} className={'info to-top tagline'}>
				Eight debates on urban biodiversity seen through the web
			</SVGElement>
		{/if}

		<SVGElement Content={LocationMobile} start={2} span={4} className={'info to-bottom'}>
			<address>MEET Digital Culture Center, Viale Vittorio Veneto 2, Milano</address>
		</SVGElement>

		{#if $language === 'IT'}
			<SVGElement Content={OpeningIT_Mobile} start={2} span={4} className={'info to-bottom'}>
				<time datetime="2024-02-21"></time>
			</SVGElement>
		{:else}
			<SVGElement Content={OpeningEN_Mobile} start={2} span={4} className={'info to-bottom'}>
				<time datetime="2024-02-21"></time>
			</SVGElement>
		{/if}
	{/if}
</section>

<style>
	#hero {
		grid-column: 1 / span 12;
		display: grid;
		grid-template-columns: repeat(12, 1fr);
		grid-gap: 24px;
		margin: 0;
		padding: 24px 0 48px 0; 
		box-sizing: border-box;
		height: 100vh;
		scroll-snap-align: center;
		align-items: center;
		justify-content: center;
	}

	:global(.date) {
		display: flex; 
		align-items: center;
		justify-content: center;
	}

	:global(.to-top) {
			align-self: start;
			margin-bottom: auto; 
		}

	@media (max-width: 768px) {
		#hero {
			grid-template-columns: repeat(6, 1fr);
			grid-template-rows: 1fr 1fr 1fr  min-content min-content;;
			grid-gap: 16px;
			margin: 24px 0 96px 0;
		}

		#hero > :global(svg) {
			margin: 0 auto; 
		}

		:global(.info) > :global(svg) {
		height: 36px;
		width: auto;
		max-width: 100%;
		display: block; 
		margin: 0 auto; 
	}
	}

	:global(.info) {
		height: 68px;
		max-height: 68px;
	}

	:global(.info) > :global(svg) {
		height: 36px;
		width: auto;
		max-width: 100%; 
	}

	:global(.info.tagline > svg) {
		width: 100% !important; 
		height: auto; 
	}

	:global(.to-bottom) {
		align-self: end;
	}

	:global(.smaller > svg) {
		display: block; 
		max-height: 16px !important;
		margin: auto; 
	}

	:global(.to-right) {
		justify-self: end;
	}
</style>
