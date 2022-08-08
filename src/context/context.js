import React, { useState, useContext, useEffect } from 'react'

const AppContext = React.createContext()

const AppProvider = ({ children }) => {
  const [query, setQuery] = useState("Interstellar");
  const [movies, setMovies] = useState(null);
  const [singleMovie, setSingleMovie] = useState(false);

  // Fetch Movies for search Results 
  const FetchMovies = async () => {
    try {
      const API_KEY = "0cc06e650b39b1e1783c5722b8c077b2";
      const responce = await fetch(`https://api.themoviedb.org/3/search/movie?api_key=${API_KEY}&language=en-US&page=1&include_adult=false&query=${query}`);
      const data = await responce.json();

      const { results } = data;

      if (results) {
        const MovieData = results.map((item) => {
          const {
            id,
            original_title,
            overview,
            poster_path,
            backdrop_path,
            release_date,
            vote_average,
            popularity,
            vote_count
          } = item

          return {
            MovieId: id,
            Title: original_title,
            OverView: overview,
            Poster: poster_path,
            BackDrop: backdrop_path,
            Release: release_date,
            Vote: vote_average,
            Popularity: popularity,
            Vote_count: vote_count,
          }
        })
        setMovies(MovieData);
      }
      else {
        setMovies([]);
      }
    } catch (error) {
      alert(error);
    }
  }

  useEffect(() => {
    FetchMovies();
  }, [query])

  return <AppContext.Provider value={{ singleMovie, setSingleMovie, movies, setMovies, query, setQuery }}>{children}</AppContext.Provider>
}

export const useGlobalContext = () => {
  return useContext(AppContext)
}

export { AppContext, AppProvider }

// ->>>
// We are exporting 2 things.
// AppContext and AppProvider.

// ->>>
/*
 Whenever we want to use the state (app provider) will just import AppContext.
 */
