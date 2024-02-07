<section>
	<div class="grid-container">
		<slot />
	</div>
</section>

<style>
	section {
		display: flex;
		justify-content: center;
		width: 100%;
		max-width: calc(12 * 128px + (11 * 24px));
		margin: 0 auto;
	}

	.grid-container {
		width: 100%;
		max-width: 100%;
		height: 100vh;
		box-sizing: border-box;
		display: grid;
		grid-template-columns: repeat(12, 1fr);
		grid-gap: 24px;
		scroll-snap-align: center;
		scroll-snap-stop: normal;
		margin: 0 auto;
	}

	@media (max-width: 768px) {
		section,
		.grid-container {
			display: flex;
			flex-direction: column;
			align-items: center;
			justify-content: center;
		}

		.grid-container {
			padding: 0 24px;
		}
	}
</style>
