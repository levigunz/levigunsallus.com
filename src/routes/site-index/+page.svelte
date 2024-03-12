<script lang="ts">
</script>

<svelte:head>
	<title>Site Index | Levi Gunsallus</title>
</svelte:head>

<div id="site-index">
	<h1>Site Index</h1>

    <h2><a href="/">Home</a></h2>
    <ul>
        <li><a href="/#portraits">Portraits</a></li>
        <li><a href="/#work">Work</a></li>
        <li><a href="/#readings">Readings</a></li>
    </ul>

    <h2><a href="/shelf">Shelf</a></h2>

    <h2>Information</h2>
    <ul>
        <li><a href="/terms-conditions">Terms and Conditions</a></li>
        <li><a href="/privacy-policy">Privacy Policy</a></li>
        <li><a href="/privacy-policy#cookies">Use of Cookies</a></li>
        <li><a href="/site-index">Site Index</a></li>
    </ul>
</div>

<style>
    #site-index {
        margin: auto;
        max-width: 600px;
		padding: 120px 0px;
	}

    @media only screen and (max-width: 668px) {
		#site-index {
			padding: 140px 18px;
		}
	}
</style>