<script lang="ts">
	import { fade } from 'svelte/transition';
	import Quotes from "./Quotes.svelte";

	var imgLoaded: boolean = false;

	const background : HTMLImageElement = new Image;
	background.onload = () => {
		imgLoaded = true;
	}
	background.src = "studio.jpg";
</script>

<style>
	main {
		position: relative;
		width: 100vw;
		height: 100vh;
		overflow: hidden;
		margin: 0;
		padding: 0;
	}

	img {
		position: absolute;
		height: inherit;
		width: inherit;
		object-position: top;
		object-fit: cover;
		opacity: 0.6;
	}

	#content {
		padding: 20px;
		position: absolute;
		height: inherit;
		width: inherit;
		display: flex;
		flex-direction: column;
		justify-content: space-between;
	}
</style>

<main>
	{#if imgLoaded}
		<img in:fade src={background.src} alt="Levi Gunsallus Studio" />
	{/if}
	<div id="content">
		<div>
			<h1>Levi Gunsallus</h1>
			<a href="https://questanalytics.com" target="_blank"><h3>Quest Analytics</h3></a>
			<a href="https://scarlok.com" target="_blank"><h3>Scarlok</h3></a>
		</div>
		<Quotes />
	</div>
</main>