<script lang="ts">
	import Quotes from "../components/quotes.svelte";

	const portraits = [
		{ src: 'portrait2021', alt: 'Levi Gunsallus (2021 - Self Portrait)' },
		{ src: 'portrait2020', alt: 'Levi Gunsallus (2020 - Liam Hogan)' },
		{ src: 'portrait2019', alt: 'Levi Gunsallus (2019 - Liam Hogan)' }
	];

	let currentPortrait = 0;

	const decreaseCurrentPortrait = () => {
		currentPortrait--
	}

	const increaseCurrentPortrait = () => {
		currentPortrait++
	}

	$: allowLeftArrow = currentPortrait !== 0;
	$: allowRightArrow = currentPortrait !== portraits.length - 1;
</script>

<style>
	main {
		display: grid;
		grid-template-columns: minmax(200px, 700px) auto;
		grid-template-rows: auto auto;
		height: 100vh;
	}
	#portrait-wrapper {
		grid-row-start: span 2;
		padding: 40px;
		display: flex;
		justify-content: center;
		flex-direction: column;
	}
	#content {
		padding: 40px;
		height: auto;
	}
	picture {
		width: 100%;
		/* height: 100%; */
		/* aspect-ratio: 3/4; */
	}
	img {
		width: 100%;
		height: 100%;
		/* aspect-ratio: 3/4; */
	}
	h1 {
		margin-bottom: 16px;
	}
	h3 {
		margin-bottom: 4px;
	}
	.under-image {
		display: flex;
		margin-top: 8px;
		justify-content: space-between;
		align-items: center;
	}
	.arrow {
		margin-left: 16px;
		cursor: pointer;
	}

	.arrow > svg > path {
		fill: slategray;
	}

	.arrow:hover > svg > path {
		fill: black;
	}

	.arrow-disabled {
		cursor: not-allowed;
		color: lightgrey;
	}

	.arrow-disabled:hover {
		color: lightgrey;
	}

	.arrow-disabled > svg > path {
		fill: lightgrey;
	}

	.arrow-disabled:hover > svg > path {
		fill: lightgrey;
	}

	@media only screen and (max-width: 800px) {
		main {
			grid-template-columns: auto;
			grid-template-rows: auto auto auto;
			height: unset;
		}
		#content {
			order: 1;
			padding: 20px;
		}
		#portrait-wrapper {
			order: 2;
			padding: 20px;
		}
		picture {
			width: 100%;
			height: auto;
		}
		img {
			width: 100%;
			height: auto;
		}
	}
</style>

<main>
	<div id="portrait-wrapper">
		<picture>
			<source srcset="{portraits[currentPortrait].src}.webp" type="image/webp">
			<!-- <source srcset="{portraits[currentPortrait].src}.jpg"> -->
			<img loading="lazy" src="{portraits[currentPortrait].src}.jpg" alt="{portraits[currentPortrait].alt}">
		</picture>
		<!-- This one should be much smaller -->
		<div class="under-image">
			<p>{portraits[currentPortrait].alt}</p>

			<div style="display: flex;">
				<!-- Left arrow -->
				<div on:click={allowLeftArrow ? decreaseCurrentPortrait : undefined} class="{allowLeftArrow ? 'arrow' : 'arrow arrow-disabled'}">
					<svg width="24" height="24" style="color: inherit" xmlns="http://www.w3.org/2000/svg" fill-rule="evenodd" clip-rule="evenodd"><path d="M2.117 12l7.527 6.235-.644.765-9-7.521 9-7.479.645.764-7.529 6.236h21.884v1h-21.883z"/></svg>
				</div>
				<!-- Right arrow -->
				<div on:click={allowRightArrow ? increaseCurrentPortrait : undefined} class="{allowRightArrow ? 'arrow' : 'arrow arrow-disabled'}">
					<svg width="24" height="24" xmlns="http://www.w3.org/2000/svg" fill-rule="evenodd" clip-rule="evenodd"><path d="M21.883 12l-7.527 6.235.644.765 9-7.521-9-7.479-.645.764 7.529 6.236h-21.884v1h21.883z"/></svg>
				</div>
			</div>
		</div>
	</div>
	
	<div id="content">
		<h1>Levi Gunsallus</h1>
		<h3>Healthcare at <a href="https://questanalytics.com" target="_blank">Quest Analytics</a></h3>
		<h3>Housing at <a href="https://ovalhands.com" target="_blank">Ovalhands</a></h3>
		<h3>Waste at <a href="https://scarlok.com" target="_blank">Scarlok</a></h3>
	</div>
	<Quotes />
</main>

