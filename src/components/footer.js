import React from 'react'
import "../styles/footer.css"
import tmdbLogo from "../assets/footer__logo.png"


function footer() {
    return (
        <div className="footer">
            <div className="footer__content">
                <a href="https://www.themoviedb.org/?language=en-US" target="_blank">
                    <img className="footer__logo" src={tmdbLogo} alt="tmdb Logo" />
                </a>
                <p className="footer__text">Created by @Danish0159</p>
            </div>
        </div>
    )
}

export default footer
