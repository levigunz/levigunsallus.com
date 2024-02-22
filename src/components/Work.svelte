<script lang="ts">
    import questanalytics from '$lib/images/questanalytics.png';
    import ovalhands from '$lib/images/ovalhands.jpg';
    import scarlok from '$lib/images/scarlok.jpg';
</script>

<section>
	<h1>Work</h1>

    <div class="card-row">
        <a href="//questanalytics.com" target="_blank">
            <div class="card">
                <img class="cover" src={questanalytics} alt="Quest Analytics" />
                <div class="overlay" />
                <!-- <span>Quest Analytics</span> -->
            </div>
        </a>

        <a href="//ovalhands.com" target="_blank">
            <div class="card">
                <!-- Photo by <a href="https://unsplash.com/@rarchitecture_melbourne?utm_content=creditCopyText&utm_medium=referral&utm_source=unsplash">R ARCHITECTURE</a> on <a href="https://unsplash.com/photos/brown-and-white-concrete-building-near-green-trees-during-daytime-GGupkreKwxA?utm_content=creditCopyText&utm_medium=referral&utm_source=unsplash">Unsplash</a> -->
                <img class="cover" src={ovalhands} alt="Ovalhands" />
                <div class="overlay" />
                <!-- <span>Ovalhands</span> -->
            </div>
        </a>

        <a href="//scarlok.com" target="_blank">
            <div class="card">
                <!-- Photo by <a href="https://unsplash.com/@jannerboy62?utm_content=creditCopyText&utm_medium=referral&utm_source=unsplash">Nick Fewings</a> on <a href="https://unsplash.com/photos/sprite-plastic-bottle-on-table--2lJGRIY5P0?utm_content=creditCopyText&utm_medium=referral&utm_source=unsplash">Unsplash</a> -->
                <img class="cover" src={scarlok} alt="Scarlok" />
                <div class="overlay" />
                <!-- <span>Scarlok</span> -->
            </div>
        </a>
    </div>
</section>

<style>
	section {
		width: 100%;
		display: flex;
		flex-direction: column;
		flex: 0.6;
	}

    .cover {
        width: 100%;
        object-fit: cover;
    }

    .card-row {
        display: flex;
        gap: 30px;
        margin-top: 30px;
    }

    .card {
        width: 100%;
        /* background-color: #ececec; */
        position: relative;
    }

    .overlay {
        top: 0;
        left: 0;
        position: absolute;
        width: 100%;
        height: 100%;
        background: black;
        opacity: 60%;
    }

    a {
        text-decoration: none;
    }

    h3 {
        margin-left: 12px;
    }

    @media only screen and (max-width: 668px) {
        .card-row {
            flex-direction: column;
        }
	}
</style>