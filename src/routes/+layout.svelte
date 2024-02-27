<script>
	import Navigation from '../components/Navigation.svelte';
	import Footer from '../components/Footer.svelte';
	import './styles.css';
</script>

<div class="app">
	<Navigation />

	<main>
		<slot />
	</main>

	<Footer />
</div>

<style>
	.app {
		width: 100vw;
		display: flex;
		flex-direction: column;
		justify-content: center;
		align-items: center;
	}

	main {
		max-width: 1248px;
	} 

	@media only screen and (max-width: 668px) {
		main {
			width: 100%;
		}
	}
</style>
