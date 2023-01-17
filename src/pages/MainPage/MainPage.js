
import NavBar from '../../components/NavBar/NavBar';
import Footer from '../../components/Footer/Footer';
import TopTenMovies from '../../components/HomePageComponents/TopTenMovies';
import EditorsPicks from '../../components/HomePageComponents/EditorsPicks';
import UserReviews from '../../components/HomePageComponents/UserReviews';
import NewlyReleasedMovies from '../../components/HomePageComponents/NewlyReleasedMovies.js';
import { Link } from 'react-router-dom';
import { useEffect, useState } from 'react';
import Banner from '../../components/HomePageComponents/Banner';


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
      );
      const data = await response.json();
      setFoundMovie(data);
    } catch (error) {
      console.error(error);
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
      <Banner title="Only the best for you" description="Movio's mission is to help consumers make an informed decision about how to spend their time and money on entertainment. We believe that multiple opinions are better than one, user voices can be as important as critics, and opinions must be scored to be easy to use. - sourced from metacritic        
"/>
      <div className='body-container'>
        <div id="outside-container">


          <EditorsPicks />


          <div id="main-container" >






            <div id="left-container">


              <TopTenMovies classicMovies={classicMovies} />
            </div>

            <div id="right-container">

              <div id="search-form">
                <h3>Search by Title</h3>
                <form onSubmit={handleSubmit}>
                  <input type="text" placeholder=" &#128269; &nbsp; &nbsp; example: Knives Out..." onChange={handleChange} value={movieTitle} />
                </form>
              </div>
              <div id="search-display">

                {

                  foundMovie && foundMovie.Title ? (

                    <div id='search-container'>
                      <div id="search-image" style={{ backgroundImage: "url(" + `${foundMovie.Poster}` + ")" }}></div>

                      <div id="search-info">
                        <div>
                          <h4>{foundMovie.Title}</h4>
                          <div id="search-movie-info">
                            <div>{foundMovie.Genre} </div>

                            {foundMovie.Released.slice(-4)}
                            {foundMovie.imdbRating}/10

                          </div>
                          <p>
                            {foundMovie.Plot}<br />
                            <Link to={`/movie/${foundMovie.imdbID}`}>See more...</Link>
                          </p>
                        </div>
                      </div>

                    </div>

                  ) :
                    ""
                }


              </div>
              <NewlyReleasedMovies newMovies={newMovies} />
            </div>
          </div>

          <UserReviews userReviews={userReviews} />

        </div>





      </div>

    </>
  )

}