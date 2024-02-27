<footer>
    <div class="footer-grid">
        <div id="about-me">
            <h3>About Me</h3>
            <p>In 2013, I wrote the 147th ranked action/adventure game for iOS.</p>
            <p> In 2019, I was an intern for 3 weeks.</p>
            <p>Now I just change this website once a year.</p>
        </div>
        <div id="follow-me">
            <h3>Follow Me</h3>
            <!-- <div id="follow-me-links"> -->
                <p><a href="//github.com/levigunz" target="_blank">GitHub</a></p>
                <p><a href="//instagram.com/levigunz" target="_blank">Instagram</a></p>
                <p><a href="//x.com/levigunz" target="_blank">X</a></p>
            <!-- </div> -->
        </div>
    </div>

    <div class="divider" style="width: 100%; border-bottom: 1px solid #424242;" />

    <div class="footer-grid">
        <div id="policies">
            <p><a href="/terms-conditions">Terms & Conditions</a></p>
            <p><a href="/privacy-policy">Privacy Policy</a></p>
            <p><a href="/privacy-policy#cookies">Use of Cookies</a></p>
            <p><a href="/site-index">Site Index</a></p>
        </div>
        <div id="copyright">
            <p>© 2024 Levi Gunsallus</p>
        </div>
    </div>
    
</footer>

<style>
	footer {
		width: 100%;
		background-color: #111111;
		color: #9b9b9b;
		display: flex;
		flex-direction: column;
		justify-content: center;
		align-items: center;
	}

	.footer-grid {
		display: grid;
        margin: auto;
		grid-template-columns: repeat(12, 1fr);
        max-width: 1248px;
        width: 100%;
        padding: 48px 18px;
        gap: 18px;
	}

    #about-me, #follow-me {
        display: flex;
        flex-direction: column;
    }

    #about-me {
        grid-column: span 8;
    }

    #follow-me {
        grid-column: span 4;
    }

    #policies {
        grid-column: span 8;
        display: flex;
        gap: 18px;
    }

    #copyright {
        grid-column: span 4;
    }

    a {
        text-decoration: none;
    }

    a:hover {
        color: #d9d9d9;
        text-decoration: underline;
    }

    @media only screen and (max-width: 668px) {
        .footer-grid {
            padding: 48px 18px;
            row-gap: 24px;
        }

		#about-me, #follow-me {
			grid-column: span 12;
		}

        #follow-me {
            display: flex;
            flex-direction: row;
            flex-wrap: wrap;
            /* grid-template-columns: 2; */
            /* gap: 18px; */
            column-gap: 24px;

        }

        #follow-me h3 {
            flex-basis: 100%;
        }

        #policies {
            grid-column: span 12;
            justify-content: center;
        }

        #copyright {
            grid-column: span 12;
            justify-content: center;
            text-align: center;
        }
	}

    @media only screen and (max-width: 556px) {
        #policies {
            display: grid;
            grid-template-columns: repeat(2, 1fr);
            text-align: center;
            gap: 0px;
        }

        #copyright { 
            margin-top: 24px;
        }
	}
</style>
