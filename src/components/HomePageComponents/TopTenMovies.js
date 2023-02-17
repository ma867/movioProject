import { useState } from 'react'
import { Link } from 'react-router-dom'

export default function TopTenMovies({ classicMovies }) {
  const [showCaseMovie, setShowCaseMovie] = useState(0)
  const [selected, setSelected] = useState(0)
  const genres = ''
  return (
    <>
      {classicMovies
        ? <>
          <h1>Critically Acclaimed Classics </h1>
          <div id="critically-acclaimed-movies" className="flex">

            {
              classicMovies.map((movie, i) => {
                const { title, image, id, imdbid } = movie
                return (

                  <div className="acclaimed-movie" key={id} id={i} onClick={() => { setShowCaseMovie(i) }}>

                    <div className={`movie-poster ${showCaseMovie === i ? 'selected' : ''}`} style={{ backgroundImage: 'url(' + `${image}` + ')' }} />

                    {title}

                  </div>

                )
              })
            }
          </div>

        </>
        : 'nothing here'}

      <div id="movie-focus" className="flex">

        {
          classicMovies && classicMovies[0]

            ? <>

              <div id="movie-focus-poster" style={{ backgroundImage: 'url(' + `${classicMovies[showCaseMovie].image}` + ')' }}></div>
              <div id="movie-focus-info" className="flex">



                <h1><span>{classicMovies[showCaseMovie].title}</span>
                  <span>{classicMovies[showCaseMovie].rating}/<span>10</span></span>
                </h1>




                <div id="movie-data" className="flex">
                  <span>{classicMovies[showCaseMovie].year}</span>
                  <span>{(classicMovies[showCaseMovie].genre).join('/')} </span>
                </div>

                <div id="movie-description">{classicMovies[showCaseMovie].description}</div>
                <Link to={`/movie/${classicMovies[showCaseMovie].imdbid}`}>See more</Link>
              </div>

            </>
            : 'nope'
        }

      </div>

    </>

  )
}
