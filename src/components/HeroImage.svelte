<script lang="ts">
    import { onMount } from 'svelte';
    import anime from '$lib/images/heros/anime.jpg';
    import art from '$lib/images/heros/art.jpg';
    import barn from '$lib/images/heros/barn.jpg';
    import bean from '$lib/images/heros/bean.jpg';
    import bench from '$lib/images/heros/bench.jpg';
    import bikes from '$lib/images/heros/bikes.jpg';
    import bmw from '$lib/images/heros/bmw.jpg';
    import bridge from '$lib/images/heros/bridge.jpg';
    import crossroads from '$lib/images/heros/crossroads.jpg';
    import garden from '$lib/images/heros/garden.jpg';
    import goldenGate from '$lib/images/heros/golden-gate.jpg';
	import kart from '$lib/images/heros/kart.jpg';
    import lake from '$lib/images/heros/lake.jpg';
    import licklider from '$lib/images/heros/licklider.jpg';
    import missouri from '$lib/images/heros/missouri.jpg';
    import unionStation from '$lib/images/heros/union-station.jpg'

    const heros = [
        {
            src: anime,
            alt: "San Francisco 2024",
            style: "object-position: center;"
        },
        {
            src: art,
            alt: "San Francisco 2024",
            style: "object-position: bottom;"
        },
        {
            src: barn,
            alt: "Gunsallus Farm 2022",
            style: "object-position: center;"
        },
        {
            src: bean,
            alt: "Gloud Gate Chicago 2022",
            style: "object-position: top;"
        },
        {
            src: bench,
            alt: "Waterworks Park 2024",
            style: "object-position: bottom;"
        },
        {
            src: bikes,
            alt: "San Francisco 2024",
            style: "object-position: center;"
        },
        {
            src: bmw,
            alt: "San Francisco 2024",
            style: "object-position: right 70%;"
        },
        {
            src: bridge,
            alt: "San Francisco 2024",
            style: "object-position: center;"
        },
        {
            src: crossroads,
            alt: "Crossroads 2024",
            style: "object-position: right 80%;"
        },
        {
            src: garden,
            alt: "Maine Garden 2022",
            style: "object-position: center;"
        },
        {
            src: goldenGate,
            alt: "San Francisco 2024",
            style: "object-position: 50% 70%;"
        },
        {
            src: kart,
            alt: "Lakewood Kart 2024",
            style: "object-position: bottom;"
        },
        {
            src: lake,
            alt: "Duluth 2023",
            style: "object-position: bottom;"
        },
        {
            src: licklider,
            alt: "Boston 2022",
            style: "object-position: top;"
        },
        {
            src: missouri,
            alt: "San Francisco 2024",
            style: "object-position: center;"
        },
        {
            src: unionStation,
            alt: "Union Station 2023",
            style: "object-position: top;"
        }
    ];

    let heroIndex: number | null = null;
    let hasImageLoaded = false;

	onMount(() => {
        heroIndex = Math.floor(Math.random() * heros.length);
	});
</script>

{#if heroIndex !== null}
<picture>
    <img loading="lazy" class:visible={hasImageLoaded} on:load={() => hasImageLoaded = true} src={heros[heroIndex].src} alt={heros[heroIndex].alt} style={heros[heroIndex].style} />
</picture>
{/if}

<style>
    img {
		width: 100%;
		height: 100%;
		object-fit: cover;
        opacity: 0;
        transition: opacity 420ms;
	}

    img.visible {
        opacity: 1;
    }
</style>