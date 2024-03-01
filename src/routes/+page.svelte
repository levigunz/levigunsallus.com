<script lang="ts">
	import HeroImage from "../components/HeroImage.svelte";
    import Portraits from "../components/Portraits.svelte";
    import RandomQuote from "../components/RandomQuote.svelte";
	import Work from "../components/Work.svelte";

	let y: number;
	let innerWidth: number;
</script>

<svelte:head>
	<!-- Primary Meta Tags -->
	<title>Home | Levi Gunsallus</title>
	<meta name="title" content="Levi Gunsallus">
	<meta name="description" content="Quest Analytics. Ovalhands. Scarlok.">

	<!-- Open Graph / Facebook -->
	<meta property="og:type" content="website">
	<meta property="og:url" content="https://levigunsallus.com">
	<meta property="og:title" content="Levi Gunsallus">
	<meta property="og:description" content="Quest Analytics. Ovalhands. Scarlok.">
	<meta property="og:image" content="/preview.jpg">

	<!-- Twitter -->
	<meta property="twitter:card" content="summary_large_image">
	<meta property="twitter:url" content="https://levigunsallus.com">
	<meta property="twitter:title" content="Levi Gunsallus">
	<meta property="twitter:description" content="Quest Analytics. Ovalhands. Scarlok.">
	<meta property="twitter:image"  content="/preview.jpg">
</svelte:head>

<svelte:window bind:scrollY={y} bind:innerWidth={innerWidth} />

<div id="grid-wrapper">
	<div id="landing-img" class:landing-img-scrolled={y > 10 && innerWidth > 1248}>
		<HeroImage />
	</div>

	<div id="portraits">
		<Portraits />
	</div>

	<div id="work">
		<Work />
	</div>

	<div id="readings">
		<RandomQuote />
	</div>
</div>

<style>
	#grid-wrapper {
		display: flex;
		flex-direction: column;
		gap: 5.9375rem;
		margin-bottom: 5.9375rem;
		padding: 18px;
	}

	#landing-img {
		width: 100vw;
		height: 70vh;
		margin-left: calc(((100vw - 1248px) / 2) * -1 + -18px);
		margin-top: -18px;
		overflow: hidden;
		transition: all 420ms ease-in-out;
	}

	#landing-img.landing-img-scrolled {
		width: 100%;
		margin-left: 0px;
	}

	#portraits, #work, #readings {
		overflow: hidden;
	}

	@media only screen and (max-width: 1248px) {
		#landing-img {
			width: calc(100vw - 36px);
			margin-left: 0px;
		}
	}

	@media only screen and (max-width: 668px) {
		#landing-img {
			height: 30vh;
		}
	}
</style>