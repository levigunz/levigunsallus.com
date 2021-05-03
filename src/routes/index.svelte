<script lang="ts">
	import Quotes from "../lib/Quotes.svelte";
</script>

<style>
	main {
		display: flex;
		min-width: 100vw;
		height: 100vh;
		margin: 0;
		padding: 20px;
	}

	#portrait-wrapper {
		padding: 0px 5%;
		flex-basis: 50%;
	}

	#content {
		width: 50%;
		padding: 0px;
		display: flex;
		flex-direction: column;
		justify-content: flex-end;
	}

	img {
		width: 100%;
		height: 100%;
		object-fit: cover;
		object-position: center;
	}

	h1 {
		margin-top: 28px;
		margin-bottom: 16px;
	}

	h3 {
		margin-bottom: 4px;
	}

	@media only screen and (max-width: 1200px) {
		#portrait-wrapper {
			padding: 0px;
			padding-right: 20px;
		}
	}

	@media only screen and (max-width: 580px) {
		main {
			flex-direction: column;
			height: unset;
		}

		#content {
			width: unset;
		}

		#portrait-wrapper {
			padding: 0px;
			margin-top: 20px;
			order: 2;
		}
	}
</style>

<main>
	<div id="portrait-wrapper">
		<img src="portrait2021.jpg" alt="Levi Gunsallus (2021 - Self Portrait)" />
	</div>
	
	<div id="content">
		<h1>Levi Gunsallus</h1>
		<h3>Healthcare at <a href="https://questanalytics.com" target="_blank">Quest Analytics</a>.</h3>
		<h3>Housing at <a href="https://ovalhands.com" target="_blank">Ovalhands</a>.</h3>
		<h3>Waste at <a href="https://scarlok.com" target="_blank">Scarlok</a>.</h3>
		<Quotes />
	</div>
</main>