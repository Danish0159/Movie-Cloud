import React from 'react'
import Form from '../components/SearchForm'
import Csrosel from '../components/carosel'
import Footer from '../components/footer'


const Home = () => {
  return (
    <>
      {/* //////////////////////////////// */}
      {/* Header */}
      {/* ///////////////////////////////// */}

      <div className="header">

        <div className="card">
          <div className="card__top">
            <img src="/tmdb.svg" alt="logo" className="logo" />
            <Form></Form>
          </div>
          <div className="card__bottom">
            {/* <Movies></Movies> */}
            <div className="cardImage__container">
              <img className="card__image" src="https://images.unsplash.com/photo-1601662528567-526cd06f6582?ixid=MnwxMjA3fDB8MHxzZWFyY2h8MTV8fHdoaXRlfGVufDB8fDB8fA%3D%3D&ixlib=rb-1.2.1&w=1000&q=80" alt="Movie Image" />
            </div>

            <div className="card__content">
              {/* // Title  */}
              <h1 className="card__title">INTERSTELLAR</h1>
              {/* // Tagline  */}
              <div className="card__tagline">Mankind was born on Earth. It was never meant to die here.
              </div>
              {/* // Overview  */}
              <p className="card__overview">The adventures of a group of explorers who make use of a newly discovered wormhole to surpass the limitations on human space travel and conquer the vast distances involved in an interstellar voyage.
              </p>
              <div className="card__details">
                {/* genreList */}
                <div className="card__genre">Adventure, Drama, Science Fiction</div>
                {/* productionList */}
                <div className="card__production">Legendary Pictures, Syncopy, Lynda Obst Productions</div>
                <div className="card__release">
                  <div className="card__releaseTitles"> Original Release: <span className="card__releaseData">2014-11-05
                  </span></div>
                  <div className="card__releaseTitles"> Running Time: <span className="card__releaseData">169 mins</span> </div>
                  <div className="card__releaseTitles"> Box Office: <span className="card__releaseData">$675,120,017</span></div>
                  <div className="card__releaseTitles"> Vote Average: <span className="card__releaseData">8.3 / 10</span></div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* //////////////////////////////// */}
      {/* Carosel */}
      {/* ///////////////////////////////// */}
      <Csrosel></Csrosel>

      {/* //////////////////////////////// */}
      {/* footer */}
      {/* ///////////////////////////////// */}
      <Footer></Footer>
    </>
  )
}

export default Home
