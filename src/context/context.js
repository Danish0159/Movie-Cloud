import React, { useState, useContext, useEffect } from 'react'

const AppContext = React.createContext()

const AppProvider = ({ children }) => {
  const [query, setQuery] = useState("Interstellar");
  const [movies, setMovies] = useState(null);
  const [arrayM, setArrayM] = useState(false);


  const FetchMovies = async () => {
    try {
      const API_KEY = "0cc06e650b39b1e1783c5722b8c077b2";
      const responce = await fetch(`https://api.themoviedb.org/3/search/movie?api_key=${API_KEY}&language=en-US&page=1&include_adult=false&query=${query}`);
      const data = await responce.json();

      const { results } = data;
      console.log(results);

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
      console.log(error);
    }
  }

  useEffect(() => {
    FetchMovies();
  }, [query])

  return <AppContext.Provider value={{ arrayM, setArrayM, movies, setMovies, query, setQuery }}>{children}</AppContext.Provider>
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

/*
      // Top rated.
      https://api.themoviedb.org/3/movie/top_rated?api_key=<<api_key>>&language=en-US&page=1
      // Trending.
      https://api.themoviedb.org/3/trending/all/day?api_key=${API_KEY}
      // Action Movies.
      https://api.themoviedb.org/3/discover/movie?api_key=${API_KEY}&with_genres=28
      // Comedy Movies.
      https://api.themoviedb.org/3/discover/movie?api_key=${API_KEY}&with_genres=35
      // Horror Movies.
      https://api.themoviedb.org/3/discover/movie?api_key=${API_KEY}&with_genres=27
      // Romance Movies.
      https://api.themoviedb.org/3/discover/movie?api_key=${API_KEY}&with_genres=10749
      // Documentries Movies.
      https://api.themoviedb.org/3/discover/movie?api_key=${API_KEY}&with_genres=99


// Search.
      https://api.themoviedb.org/3/search/movie/batman?api_key=<<api_key>>&language=en-US&page=1&include_adult=false
      */
