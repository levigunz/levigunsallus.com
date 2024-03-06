<script lang="ts">
	import portrait2024 from '$lib/images/portrait2024.webp';
	import portrait2024_fallback from '$lib/images/portrait2024.jpg';
	import portrait2024_thumbnail from '$lib/images/portrait2024-thumbnail.jpg';
	import portrait2023 from '$lib/images/portrait2023.webp';
	import portrait2023_fallback from '$lib/images/portrait2023.jpg';
	import portrait2023_thumbnail from '$lib/images/portrait2023-thumbnail.jpg';
	import portrait2022 from '$lib/images/portrait2022.webp';
	import portrait2022_fallback from '$lib/images/portrait2022.jpg';
	import portrait2022_thumbnail from '$lib/images/portrait2022-thumbnail.jpg';
	import portrait2021 from '$lib/images/portrait2021.webp';
	import portrait2021_fallback from '$lib/images/portrait2021.jpg';
	import portrait2021_thumbnail from '$lib/images/portrait2021-thumbnail.jpg';
	import portrait2020 from '$lib/images/portrait2020.webp';
	import portrait2020_fallback from '$lib/images/portrait2020.jpg';
	import portrait2020_thumbnail from '$lib/images/portrait2020-thumbnail.jpg';
	import portrait2019 from '$lib/images/portrait2019.webp';
	import portrait2019_fallback from '$lib/images/portrait2019.jpg';
	import portrait2019_thumbnail from '$lib/images/portrait2019-thumbnail.jpg';

	const portraits = [
		{
			year: '2024',
			thumbnail: portrait2024_thumbnail,
			shotBy: null,
			src: portrait2024,
			fallback: portrait2024_fallback
		},
		{
			year: '2023',
			thumbnail: portrait2023_thumbnail,
			shotBy: null,
			src: portrait2023,
			fallback: portrait2023_fallback
		},
		{
			year: '2022',
			thumbnail: portrait2022_thumbnail,
			shotBy: null,
			src: portrait2022,
			fallback: portrait2022_fallback
		},
		{
			year: '2021',
			thumbnail: portrait2021_thumbnail,
			shotBy: null,
			src: portrait2021,
			fallback: portrait2021_fallback
		},
		{
			year: '2020',
			thumbnail: portrait2020_thumbnail,
			shotBy: "Liam Hogan",
			src: portrait2020,
			fallback: portrait2020_fallback
		},
		{
			year: '2019',
			thumbnail: portrait2019_thumbnail,
			shotBy: "Liam Hogan",
			src: portrait2019,
			fallback: portrait2019_fallback
		}
	];

	let selectedPortraitIndex = 0;

	const selectPortraitByYear = (year: string) => {
		selectedPortraitIndex = portraits.findIndex(p => p.year === year);
	}

	$: selectedPortrait = portraits[selectedPortraitIndex];
</script>

<section>
	<div id="portrait-wrapper">
		<div id="portrait-left">
			<div id="name-and-arrows">
				<span>
					<h1>Levi Gunsallus</h1>
					<h3>{selectedPortrait.year} ({selectedPortrait.shotBy ?? "Self Portrait"})</h3>
				</span>
			</div>

			<div id="portrait-thumbnails">
				{#each portraits as portrait}
				<button on:click={() => selectPortraitByYear(portrait.year)}>
					<img src={portrait.thumbnail} alt={`Levi Gunsallus Portrait ${selectedPortrait.year}`} />
				</button>
				{/each}
			</div>
		</div>

		<div id="portrait-right">
			<picture>
				<!-- <source srcset={selectedPortrait.src} type="image/webp" /> -->
				<img id="portrait" src={selectedPortrait.src} alt={`Levi Gunsallus Portrait ${selectedPortrait.year}`} />
			</picture>
		</div>
	</div>
</section>

<style>
	section {
		width: 100%;
		display: flex;
		flex-direction: column;
		flex: 0.6;
	}
	
	button {
		padding: 0px;
	}

	#portrait {
		width: 100%;
	}

	#portrait-wrapper {
		display: flex;
		flex-direction: row;
	}

	#portrait-left {
		flex-basis: 30%;
		padding-right: 16px;
		display: flex;
		flex-direction: column;
		justify-content: space-between;
	}

	#portrait-right {
		flex-basis: 70%;
	}

	#name-and-arrows {
		display: flex;
		justify-content: space-between;
	}

	#portrait-thumbnails {
		display: grid;
		grid-template-columns: 1fr 1fr;
		row-gap: 16px;
		column-gap: 16px;
	}

	#portrait-thumbnails button {
		background: none;
		border: none;
	}

	#portrait-thumbnails img {
		width: 100%;
		aspect-ratio: 4 / 5;
	}

	#portrait-thumbnails img:hover {
		cursor: pointer;
	}

	@media only screen and (max-width: 668px) {
		#portrait-wrapper {
			flex-direction: column-reverse;
		}

		#portrait-left {
			padding-right: 0px;
		}

		#portrait-thumbnails {
			grid-template-columns: 1fr 1fr 1fr 1fr 1fr 1fr;
			column-gap: 4px;
		}
	}
</style>