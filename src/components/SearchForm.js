import React, { useState } from 'react'
import { useGlobalContext } from '../context/context.js'

const SearchForm = () => {
  const { arrayM, setArrayM, movies, setMovies, query, setQuery } = useGlobalContext();
  const [hideTypehead, setHideTypehead] = useState(false);


  return (
    <>
      <form className='form' onSubmit={(e) => e.preventDefault()}>
        <input
          type='text'
          className='form__input'
          value={query}
          onChange={(e) => {
            setQuery(e.target.value)
            setHideTypehead(false)
          }}
          placeholder="Search Movie Title..."
        />

        <div className={hideTypehead ? "typehead_parent noneClass" : "typehead_parent"}>
          {
            movies && movies.slice(0, 4).map((movie, i) =>
              <div onClick={() => {
                console.log(i);
                setHideTypehead(true);
                setQuery("");
                setArrayM(movie);
              }} className="typehead" key={i}>{movie.Title}</div>
            )
          }

        </div>
      </form>

    </>
  )
}

export default SearchForm
