<script lang="ts">
	
	import NextGenerationEU from '$lib/assets/logos/NextGenerationEU.svg?component';
	import MUR from '$lib/assets/logos/MUR.svg?component';
	import ItaliaDomani from '$lib/assets/logos/ItaliaDomani.svg?component';
	import NBFC from '$lib/assets/logos/NBFC.svg?component';
	import PoliMi from '$lib/assets/logos/PoliMi.svg?component';
	import DDC from '$lib/assets/logos/DDC.svg?component';
	import DensityDesign from '$lib/assets/logos/DensityDesign.svg?component';

	import AGCFooterDsktop from '$lib/assets/logos/footer_dsktp.svg?component';
	import AGCFooterMobile from '$lib/assets/logos/footer_mobile.svg?component';

	let innerWidth: number = 0;
	let mobile: boolean = false;

	$: {
		mobile = innerWidth < 768;
	}
</script>

<svelte:window bind:innerWidth />

<footer>
	<div id="line-wrapper">
		<hr />
	</div>
	<div id="logo-wrapper">
		<div id="agc">
			{#if mobile}
				<AGCFooterMobile />
			{:else}
				<AGCFooterDsktop />
			{/if}
		</div>

		<div id="logos">
			<NextGenerationEU />
			<MUR />
			<ItaliaDomani />
			<NBFC />
			<PoliMi />
			<DDC />
			<DensityDesign />
		</div>
	</div>
</footer>

<style>
	footer {
		grid-column: 2 / 12;
		height: auto;
		display: flex;
		flex-direction: column;
		margin-bottom: 48px;
		align-self: end;
	}

	#line-wrapper {
		grid-column: 1 / 3;
		margin-bottom: 24px;
	}

	#logo-wrapper {
		display: flex;
		flex-direction: row;
		justify-content: space-between;
		margin-top: 24px;
	}

	#agc {
		height: 100%;
	}

	#agc > :global(svg) {
		height: 96px;
	}

	#logos {
		height: 100%;
		max-height: 100%;
		display: flex;
		flex-direction: row;
		flex-wrap: wrap;
	}

	#logos > :global(svg) {
		height: 36px;
		margin-left: 24px;
		margin-bottom: 12px;  
	}

	@media (max-width: 768px) {
		#line-wrapper {
			margin: 0;
		}

		#logo-wrapper {
			flex-direction: column;
			align-items: center;
			margin-top: 0px;
		}

		#agc > :global(svg) {
			margin: 16px 0 12px 0;
			height: 52px;
		}

		#logos > :global(svg) {
			height: 18px;
			margin: 6px 12px;
		}

		#logos {
			justify-content: space-between;
		}
	}
</style>
