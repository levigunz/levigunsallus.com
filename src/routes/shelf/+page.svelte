<script lang="ts">
    import quotes from "../../quotes";
</script>

<svelte:head>
	<title>Bookshelf | Levi Gunsallus</title>
</svelte:head>

<div id="readings">
	<h1>Selected Readings</h1>

    {#each quotes as quote}
        <div class="quote">
            <h2>"{quote.text}"</h2>
            <caption><i>{quote.citation}</i></caption>
        </div>
    {/each}
</div>

<style>
    #readings {
        margin: 6rem 0;
    }

    .quote {
        margin: 6rem 0;
    }

    @media only screen and (max-width: 668px) {
		#readings {
			padding:  18px;
		}
	}
</style>