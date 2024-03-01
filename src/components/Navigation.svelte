<nav>
    <div id="inner-nav">
        <a class="gunsallus" href="/">
            <h2>Gunsallus</h2>
        </a>

        <div id="nav-links">
            <a class="page-link" href="/#portraits">
                Portraits
            </a>
            <a class="page-link" href="/#work">
                Work
            </a>
            <a class="page-link" href="/#readings">
                Readings
            </a>
        </div>
    </div>
</nav>

<style>
	nav {
		width: 100vw;
        position: sticky;
        top: 0px;
		background-color: #fff;
        border-bottom: 1px solid #ececec;
        z-index: 700;
        padding: 1.75rem 0px;
	}

    #inner-nav {
        max-width: 1248px;
        padding: 18px;
        margin: auto;
        display: flex;
        flex-direction: column;
    }

    a.page-link {
        color: #111;
        font: 300 1rem/1.5rem var(--font-main);
        letter-spacing: .12em;
        text-decoration: none;
        text-transform: uppercase;
        font-size: 16px;
    }

    #nav-links {
        display: flex;
        justify-content: flex-start;
        gap: 36px;
    }

    a:hover.page-link {
        text-decoration: underline;
    }

    .gunsallus {
        text-transform: uppercase;
        text-decoration: none;
    }

    .gunsallus h2 {
        margin-top: 0;
    }

    @media only screen and (max-width: 1248px) {
        nav {
            padding: 0rem;
        }
	}
</style>
