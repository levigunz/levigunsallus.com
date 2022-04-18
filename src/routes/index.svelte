<script lang="ts">
	import Quotes from "../components/quotes.svelte";

	const portraits = [
		{ src: 'portrait2022', alt: 'Levi Gunsallus (2022 - Self Portrait)' },
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
		min-height: 100vh;
		width: 100vw;
		display: flex;
		justify-content: center;
		align-items: center;
	}

	h1 {
		margin-bottom: 16px;
	}

	h3 {
		margin-bottom: 4px;
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

	#outergrid {
		height: 100vh;
		max-height: 1000px;
		max-width: 1600px;
		width: 100%;
		display: grid;
  		grid-template-columns: auto 1fr;
		grid-template-rows: 1fr 1fr auto;
	}

	#outergrid > div {
		padding: 30px;
	}

	#outergrid > div#caption {
		padding-top: 0px;
	}

	#outergrid > div#portrait, div#quotes {
		padding-bottom: 8px;
	}

	#portrait {
		/* background: lightblue; */
		grid-column: 1;
  		grid-row: 1 / 3;
	}

	#bio {
		/* background-color: lightyellow; */
		grid-column: 2;
  		grid-row: 1;
	}

	#quotes {
		/* background: lightpink; */

		display: flex;
		justify-content: flex-end;
	}

	#caption {
		grid-column: 1;
  		grid-row: 3;
		/* background: lightgreen; */

		display: flex;
		justify-content: space-between;
		align-items: center;
		height: min-content;
	}

	picture {
		height: 100%;
		width: auto;
	}

	img {
		height: 100%;
		width: auto;
	}

	@media only screen and (max-width: 1000px) {
		#outergrid {
			display: flex;
			flex-direction: column;
		}

		picture {
			width: 100%;
			height: auto;
		}

		img {
			width: 100%;
			height: auto;
		}

		#bio {
			order: 1;
		}

		#portrait {
			order: 2;
		}

		#caption {
			order: 3;
		}

		#quotes {
			order: 4;
		}

		#outergrid > div#quotes {
			padding-bottom: 30px;
		}
	}
</style>

<main>
	<div id="outergrid">
		<div id="portrait">
			<picture>
				<source srcset="{portraits[currentPortrait].src}.webp" type="image/webp">
				<img loading="lazy" src="{portraits[currentPortrait].src}.jpg" alt="{portraits[currentPortrait].alt}">
			</picture>
		</div>
		<div id="bio">
				<h1>Levi Gunsallus</h1>
				<h3>Healthcare at <a href="https://questanalytics.com" target="_blank">Quest Analytics</a></h3>
				<h3>Housing at <a href="https://ovalhands.com" target="_blank">Ovalhands</a></h3>
				<h3>Waste at <a href="https://scarlok.com" target="_blank">Scarlok</a></h3>
		</div>
		<div id="quotes">
			<Quotes />
		</div>
		<div id="caption">
			<p>{portraits[currentPortrait].alt}</p>

			<div style="display: flex; user-select: none;">
				<div on:click={allowLeftArrow ? decreaseCurrentPortrait : undefined} class="{allowLeftArrow ? 'arrow' : 'arrow arrow-disabled'}">
					<svg width="24" height="24" style="color: inherit" xmlns="http://www.w3.org/2000/svg" fill-rule="evenodd" clip-rule="evenodd"><path d="M2.117 12l7.527 6.235-.644.765-9-7.521 9-7.479.645.764-7.529 6.236h21.884v1h-21.883z"/></svg>
				</div>
				<div on:click={allowRightArrow ? increaseCurrentPortrait : undefined} class="{allowRightArrow ? 'arrow' : 'arrow arrow-disabled'}">
					<svg width="24" height="24" xmlns="http://www.w3.org/2000/svg" fill-rule="evenodd" clip-rule="evenodd"><path d="M21.883 12l-7.527 6.235.644.765 9-7.521-9-7.479-.645.764 7.529 6.236h-21.884v1h21.883z"/></svg>
				</div>
			</div>
		</div>
	</div>
</main>

