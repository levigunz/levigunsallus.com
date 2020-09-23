<script lang="ts">
	import { onMount } from 'svelte';
	import { fade } from 'svelte/transition';
	import Quotes from "./Quotes.svelte";

	// Showif  the background image isn't cached...
	var showQuote: boolean = true;

	onMount(() => {
		setTimeout(() => { showQuote = false }, 1500);
	});
</script>

<style>
	main {
		position: relative;
		margin: 0;
		padding: 1em;
	}

	img {
		top: 0;
		left: 0;
		width: 100vw;
		height: 100vh;
		position: absolute;
		object-fit: cover;
		object-position: center;
	}
</style>

<main>
	{#if showQuote}
		<Quotes />
	{:else}
		<img in:fade src="studio.jpg" alt="Studio back" />
	{/if}
	<h1>Levi Gunsallus</h1>
	<a href="https://questanalytics.com" target="_blank"><h3>Quest Analytics</h3></a>
	<a href="https://scarlok.com" target="_blank"><h3>Scarlok</h3></a>
</main>