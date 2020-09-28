<script lang="ts">
    import type { QuoteType } from './types/quote.type';

    const quotes: Array<QuoteType> = [
        {
            text: "Artists’ careers are reevaluated on a daily basis, but they don’t change that fast",
            citation: "Boom",
        },
        {
            text: "I’m optimistic that if you provide something people really like, and you make it easy for them to pay you for it, that you’ll do just fine",
            citation: "The boy who could change the world",
        },
        {
            text: "Being smart in school is about how well you solve problems that have correct answers and clear time limits",
            citation: "The defining decade",
        },
        {
            text: "I have an opinion, but I don’t have a comment.",
            citation: "Leo Castelli",
        },
        {
            text: "Anything that can make the medicine of complexity go down easier is a form of simplicity, even when it is an act of deceit.",
            citation: "Laws of simplicity",
        },
        {
            text: "If you want to shoot an endangered species, there’s probably an app for that.",
            citation: "An audience of one",
        },
        {
            text: "Aren’t butterflies just wonderful, so bang a nail through them and stick them in a box",
            citation: "The Unknown City"
        },
        {
            text: "Sometimes the best thing you can do is call it a loss and start over. Or order some pizza.",
            citation: "Salt, Fat, Acid, Heat"
        }, 
        {
            text: "Would you rather be smart and poor or dumb and rich?",
            citation: "Bad Blood"
        },
        {
            text: "I feel like immediate assassination but I can probably count on him to destroy his own possibilities",
            citation: "Philip Johnson"
        },
        {
            text: "In an era of rapid change, style has a corrosive effect in design",
            citation: "Jony Ive"
        },
        {
            text: "I think you impute a little more practical purpose to my thinking than actually exists. My mind wanders around, and I conceive of different things day and night.... it’s usually just that I like to solve a problem, and I work on these all the time",
            citation: "The Idea Factory"
        },
        {
            text: "Yachtsman are consumed with the notion that their ships must be 100 percent sound",
            citation: "Wanderer"
        },


    ];

    const selectedQuoteIndex: number = Math.floor(Math.random() * quotes.length);

    const quote: QuoteType = quotes[selectedQuoteIndex];
</script>

<style>
    #quote-wrapper {
        align-self: center;
        margin-bottom: 60px;
        display: flex;
        flex-direction: column;
    }

    h2 {
        max-width: 800px;
    }

    #quote-info {
        display: flex;
        justify-content: space-between;
    }
</style>

<div id="quote-wrapper">
    <h2>"{quote.text}"</h2>
    <div id="quote-info">
        <h4> - ({quote.citation})</h4>
        <h4>{selectedQuoteIndex+1}/{quotes.length}</h4>
    </div>
</div>