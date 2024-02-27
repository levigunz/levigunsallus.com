<script lang="ts">
	import quotes from '../quotes';

    const getRandomQuoteIndex = () => Math.floor(Math.random() * quotes.length);

    let quoteIndex = getRandomQuoteIndex();

    $: quote = quotes[quoteIndex];
</script>

<section>
	<h1>Readings</h1>

	<div id="quote">
        <h2>"{quote.text}"</h2>
        <caption><i>{quote.citation}</i></caption>
	</div>

    <div id="quote-controls">
        <button on:click={() => { quoteIndex = getRandomQuoteIndex(); }} class="button-secondary" type="button">Load Another Reading <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 17.4 20.8" class=""><path d="M6.6 0 .8 4.5 6.6 9z" style="fill: rgb(43, 41, 43);"></path><path d="M.8 12.1c0 4.4 3.6 7.9 7.9 7.9s7.9-3.6 7.9-7.9S13 4.2 8.7 4.2H5.5" style="fill: none; stroke: rgb(43, 41, 43); stroke-width: 1.5; stroke-miterlimit: 10;"></path></svg></button>

        <a href="/shelf" class="button-secondary">Browse My Bookshelf</a>
    </div>
</section>

<style>
	section {
		width: 100%;
		display: flex;
		flex-direction: column;
		flex: 0.6;
	}

    #quote-controls {
        display: flex;
    }

    .button-secondary {
        overflow: visible;
        text-transform: none;
        appearance: button;
        -webkit-appearance: button;
        cursor: pointer;
        display: inline-block;
        font: 400 1rem/1.5rem var(--font-main);
        text-align: center;
        margin-top: .9375rem;
        margin-right: 1.875rem;
        margin-bottom: 0;
        margin-left: 0;
        padding: .625rem 1.875rem;
        text-decoration: none;
        background: #fff;
        border: 2px solid #2b292b;
        color: #2b292b;
    }

    .button-secondary svg {
        fill: #2b292b;
        display: inline-block;
        height: 1em;
        margin-left: .3125rem;
        vertical-align: text-top;
        width: auto;
    }

    @media only screen and (max-width: 1248px) {
        .button-secondary {
            padding: .625rem 1rem;
        }
	}
</style>