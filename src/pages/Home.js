import React from 'react'
import Form from '../components/SearchForm'
import Csrosel from '../components/carosel'
import Footer from '../components/footer'
import { useGlobalContext } from '../context/context'
import interstellarBackground from "../assets/interstellarBackground.jpg"
import interstellarCard from "../assets/interstellarCard.jpg"

const Home = () => {
  const { arrayM } = useGlobalContext();

  const mystyle = {
    backgroundImage:
      `url(${'https://image.tmdb.org/t/p/original' + arrayM.BackDrop})`,
  };

  const elsestyle = {
    backgroundImage:
      `url(${interstellarBackground})`,
  };


  if (arrayM) {
    return (
      <>
        <div className="header" style={mystyle}>
          <div className="card">
            <div className="card__top">
              <img src="/tmdb.svg" alt="logo" className="logo" />
              <Form></Form>
            </div>
            <div className="card__bottom">
              {/* <Movies></Movies> */}
              <div className="cardImage__container">
                {/* {arrayM && <img src={arrayM.Poster} alt="logo" className="logo" /> */}
                <img className="card__image" src={'https://image.tmdb.org/t/p/w500' + arrayM.Poster} alt=" Movie Image" />

                {/* {arrayM && <h1>Heeheh</h1>} */}
              </div>

              <div className="card__content">
                {/* // Title  */}
                <h1 className="card__title">{arrayM.Title} </h1>
                {/* // Tagline  */}
                <div className="card__tagline">The longer you wait, the harder it gets
                </div>
                {/* // Overview  */}
                <p className="card__overview">{arrayM.OverView}</p>
                <div className="card__details">
                  {/* genreList */}
                  <div className="card__genre">Adventure, Drama, Science Fiction</div>
                  {/* productionList */}
                  <div className="card__production">Legendary Pictures, Universal Pictures, Picture Productions</div>
                  <div className="card__release">
                    <div className="card__releaseTitles"> Original Release: <span className="card__releaseData">{arrayM.Release}
                    </span></div>
                    <div className="card__releaseTitles"> Count: <span className="card__releaseData">{arrayM.Vote_count}</span> </div>
                    <div className="card__releaseTitles"> Popularity: <span className="card__releaseData">{arrayM.Popularity}</span></div>
                    <div className="card__releaseTitles"> Vote Average: <span className="card__releaseData">{arrayM.Vote} / 10</span></div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
        {/* <Csrosel></Csrosel> */}
        <Footer></Footer>
      </>
    )
  }

  else {
    return (
      <>
        <div className="header" style={elsestyle}>
          <div className="card">
            <div className="card__top">
              <img src="/tmdb.svg" alt="logo" className="logo" />
              <Form></Form>
            </div>
            <div className="card__bottom">
              {/* <Movies></Movies> */}
              <div className="cardImage__container">
                {/* {arrayM && <img src={arrayM.Poster} alt="logo" className="logo" /> */}
                <img className="card__image" src={interstellarCard} />
                {/* {arrayM && <h1>Heeheh</h1>} */}
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
        {/* <Csrosel></Csrosel> */}
        <Footer></Footer>
      </>
    )
  }
}

export default Home