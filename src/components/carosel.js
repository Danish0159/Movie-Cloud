import React, { useState, useEffect } from "react";

export default function Carosel({ title, fetchUrl }) {
    const [width, setWidth] = useState(window.innerWidth);
    const [movies, setMovies] = useState([]);
    const base_url = "https://image.tmdb.org/t/p/original/";


    const FetchMovies = async () => {
        try {
            const responce = await fetch(fetchUrl);
            const data = await responce.json();
            setMovies(data.results);
        } catch (error) {
            alert(error);
        }
    }

    useEffect(() => {
        FetchMovies();
    }, [fetchUrl])

    return (
        <div className="carosel__section">
            <h2 className="carosel__title">{title}</h2>
            <div className="carosel__movies">
                {
                    movies.map(movie => (
                        movie.backdrop_path && <img className="carosel__movie" src={`${base_url}${movie.backdrop_path}`} alt="" />
                    ))
                }
            </div>
        </div>
    )
}
