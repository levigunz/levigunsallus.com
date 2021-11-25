<script lang="ts">
    import { onMount } from 'svelte';
    import type { QuoteType } from '../types/quote.type';

    let quote: QuoteType | null = null;
    let quoteIndex: number = 0;
    let numberTotalQuotes: number = 0;

    onMount(async () => {
        const response = await (await fetch('/api/quote')).json();

        quote = response.quote;
        quoteIndex = response.quoteIndex;
        numberTotalQuotes = response.numberTotalQuotes;
    });
</script>

<style>
    #quote-wrapper {
        /* width: 100%; */
        /* align-self: center; */
        /* display: flex; */
        /* flex-direction: column; */
        /* margin-top: 120px; */
    }
    #quote-info {
        /* margin-top: 12px; */
        /* display: flex; */
        /* justify-content: space-between; */
    }
</style>

<div id="quote-wrapper">
    <h2>"{quote?.text ?? 'Loading quote'}"</h2>
    <div id="quote-info">
        <h4>({quote?.citation ?? 'Loading citation'})</h4>
        <h4>{quoteIndex}/{numberTotalQuotes}</h4>
    </div>
</div>