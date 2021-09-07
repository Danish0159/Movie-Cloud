import React from 'react'
import { useGlobalContext } from '../context/context.js'

const SearchForm = () => {
  const { movies, query, setQuery } = useGlobalContext();

  console.log(movies);

  return (
    <>
      <form className='form' onSubmit={(e) => e.preventDefault()}>
        <input
          type='text'
          className='form__input'
          value={query}
          onChange={(e) => setQuery(e.target.value)}
          placeholder="Search Movie Title..."
        />

        {
          movies && movies.map((movie, i) =>
            <div className="typehead" key={i}>{movie.Title}</div>
          )
        }
      </form>
    </>
  )
}

export default SearchForm