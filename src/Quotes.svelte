<script lang="ts">
    import type { QuoteType } from './types/quote.type';

    const quotes: Array<QuoteType> = [
        {
            "text": "Artists’ careers are reevaluated on a daily basis, but they don’t change that fast",
            "citation": "Boom",
            "author": "Author of boom"
        },
        {
            "text": "I’m optimistic that if you provide something people really like, and you make it easy for them to pay you for it, that you’ll do just fine",
            "citation": "The boy who could change the world",
            "author": "Aaron Schwartz"
        },
        {
            "text": "Being smart in school is about how well you solve problems that have correct answers and clear time limits",
            "citation": "The defining decade",
            "author": "unknown"
        },
        {
            "text": "I have an opinion, but I don’t have a comment.",
            "citation": "Leo Castelli",
            "author": "Ileana Sonnabend"
        },
        {
            "text": "Anything that can make the medicine of complexity go down easier is a form of simplicity, even when it is an act of deceit.",
            "citation": "Laws of simplicity",
            "author": "Maeda??"
        },
        {
            "text": "If you want to shoot an endangered species, there’s probably an app for that.",
            "citation": "An audience of one",
            "author": "unsure"
        }
    ];

    const selectedQuoteIndex: number = Math.floor(Math.random() * quotes.length);

    const quote: QuoteType = quotes[selectedQuoteIndex];
</script>

<style>
    #quote-wrapper {
        background: black;
        width: 100vw;
        height: 100vh;
        display: flex;
        position: fixed;
        justify-content: center;
        align-items: center;
    }

    #quote-series {
        position: fixed;
        bottom: 1em;
        right: 1em;
    }
</style>

<div id="quote-wrapper">
    <div>
        <h1>"{quote.text}"</h1>
        <h6> -{quote.author} ({quote.citation})</h6>
    </div>

    <div id="quote-series"><h2>{selectedQuoteIndex+1}/{quotes.length}</h2></div>
</div>