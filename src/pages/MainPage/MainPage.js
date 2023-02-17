
import NavBar from '../../components/NavBar/NavBar'
import Footer from '../../components/Footer/Footer'
import TopTenMovies from '../../components/HomePageComponents/TopTenMovies'
import EditorsPicks from '../../components/HomePageComponents/EditorsPicks'
import UserReviews from '../../components/HomePageComponents/UserReviews'
import NewlyReleasedMovies from '../../components/HomePageComponents/NewlyReleasedMovies.js'
import { Link } from 'react-router-dom'
import { useEffect, useState } from 'react'
import Banner from '../../components/HomePageComponents/Banner'

export default function MainPage({ classicMovies, newMovies, username }) {
  const [movieTitle, setMovieTitle] = useState('')
  const [foundMovie, setFoundMovie] = useState(null)
  const [userReviews, setUserReviews] = useState([])

  const getUserReviews = async () => {
    try {
      const response = await fetch(`/api/reviews/user/${username}`)
      const data = await response.json()
      setUserReviews(data)
    } catch (error) {
      console.error(error)
    }
  }

  const findMovie = async (title) => {
    try {
      const response = await fetch(
        `https://www.omdbapi.com/?apikey=${process.env.REACT_APP_OMDB_KEY}&t=${title}`
      )
      const data = await response.json()
      setFoundMovie(data)
    } catch (error) {
      console.error(error)
    }
  }
  const handleChange = (e) => {
    setMovieTitle(e.target.value)
  }

  const handleSubmit = (e) => {
    e.preventDefault()
    findMovie(movieTitle)
  }

  useEffect(() => {
    getUserReviews()
  }, [])

  return (

    <>

      <NavBar />
      <Banner title='Only the best for you' description='Multiple opinions are better than one, user voices can be as important as critics.' />
      <div id="container" className="flex">
        <div id='movie-container'>

          <EditorsPicks page='main' />

          <div id="middle-container" className="flex">

            <div id="critically-acclaimed-movies-container">

              <TopTenMovies classicMovies={classicMovies} />
            </div>

            <div id="sidebar">

              <div id='search-form'>
                <h1>Search by Title</h1>
                <form className="flex" onSubmit={handleSubmit}>
                  <svg viewBox="0 0 24 24">
                    <path fill-rule="evenodd" clip-rule="evenodd" d="M10 0.5C4.75329 0.5 0.5 4.75329 0.5 10C0.5 15.2467 4.75329 19.5 10 19.5C12.082 19.5 14.0076 18.8302 15.5731 17.6944L20.2929 22.4142C20.6834 22.8047 21.3166 22.8047 21.7071 22.4142L22.4142 21.7071C22.8047 21.3166 22.8047 20.6834 22.4142 20.2929L17.6944 15.5731C18.8302 14.0076 19.5 12.082 19.5 10C19.5 4.75329 15.2467 0.5 10 0.5ZM3.5 10C3.5 6.41015 6.41015 3.5 10 3.5C13.5899 3.5 16.5 6.41015 16.5 10C16.5 13.5899 13.5899 16.5 10 16.5C6.41015 16.5 3.5 13.5899 3.5 10Z" />
                  </svg>
                  <input type='text' placeholder='Example: Knives Out...' onChange={handleChange} value={movieTitle} />
                </form>
              </div>
              <div id="search-result" className="flex">

                {

                  foundMovie && foundMovie.Title
                    ? (

                      <>
                        <div id='search-poster' style={{ backgroundImage: 'url(' + `${foundMovie.Poster}` + ')' }} />

                        <div id='search-info' className="flex">

                          <h1>{foundMovie.Title}</h1>

                          <span>{foundMovie.Genre} </span>

                          {/* {foundMovie.Released.slice(-4)} &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;
                              {foundMovie.imdbRating}/10 */}


                          <div id="search-description">
                            {foundMovie.Plot}<br />
                            <Link to={`/movie/${foundMovie.imdbID}`}>See more...</Link>
                          </div>
                        </div>


                      </>

                    )
                    : ''
                }

              </div>
              <NewlyReleasedMovies newMovies={newMovies} />
            </div>
          </div>

          <UserReviews userReviews={userReviews} page='main' />

        </div>

      </div>

    </>
  )
}
