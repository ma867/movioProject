
import { useParams } from "react-router-dom"
import { useState, useEffect } from "react"
import NavBar from "../../components/NavBar/NavBar"
import Footer from '../../components/Footer/Footer';
import Banner from '../../components/HomePageComponents/Banner';
import EditorsPicks from '../../components/HomePageComponents/EditorsPicks';

export default function MoviePage({ username, user }) {

  const params = useParams()
  const id = params.id

  const [movie, setMovie] = useState(null)
  const [isUpdateReview, setIsUpdateReview] = useState(false)
  const [reviews, setReviews] = useState([])
  const [userReview, setUserReview] = useState(null)
  const [newReview, setNewReview] = useState({
    movieId: id,
    poster: '',
    movieTitle: '',
    title: '',
    description: '',
    rating: 0,
    user: username
  })

  const getMovie = async () => {
    try {
      const response = await fetch(`https://mdblist.p.rapidapi.com/?i=${id}`, {
        method: "GET",
        headers: {
          'X-RapidAPI-Key': `${process.env.REACT_APP_IMDB_TOP_TEN_KEY}`,
          'X-RapidAPI-Host': 'mdblist.p.rapidapi.com'
        }
      })
      const data = await response.json()
      setMovie(data)
      setNewReview({...newReview, poster: data.poster, movieTitle: data.title})


    } catch (error) {
      console.error(error)

    }
  }

  const getReviews = async () => {
    try {
      const response = await fetch(`/api/reviews/movie/${id}/excludeUser/${username}`)
      const data = await response.json()
      setReviews(data)
    } catch (error) {
      console.error(error)
    }
  }
  const getUserReview = async () => {
    try {
      const response = await fetch(`/api/reviews/movie/${id}/user/${username}`)
      const data = await response.json()
      setUserReview(data)
    } catch (error) {
      console.error(error)
    }
  }


  const deleteReview = async (id) => {
    try {
      await fetch(`/api/reviews/${id}`, {
        method: "DELETE",
        headers: {
          'Content-Type': 'application/json'
        }
      })
      getUserReview()

    } catch (error) {
      console.error(error)
    }
  }

  const updateReview = async (id, updatedData) => {
    try {
      const response = await fetch(`/api/reviews/${id}`, {
        method: 'PUT',
        headers: {
          'Content-Type': 'application/json'
        },
        body: JSON.stringify({ ...updatedData })
      })
      const data = await response.json()


    }
    catch (error) {
      console.error(error)

    }

  }

  const createReview = async () => {
    try {
      await fetch(`/api/reviews`, {
        method: "POST",
        headers: {
          'Content-Type': 'application/json'
        },
        body: JSON.stringify({ ...newReview })
      })

      setNewReview({
        movieId: id,
        title: '',
        description: '',
        rating: 0,
        user: username
      })
    } catch (error) {
      console.error(error)
    }
  }




  useEffect(() => {
    getMovie()
    getUserReview()
    getReviews()
  }, [id])

  const handleChange = (e) => {

    setNewReview({ ...newReview, [e.target.name]: e.target.value })
  }


  const handleChangeUpdate = (e) => {

    setUserReview({ ...userReview, [e.target.name]: e.target.value })
  }

  return (

    <>
      <NavBar  />

      <Banner title="Movies" description=""/>
      <div className='body-container full-width'>
    
        <div id="outside-container-movie">

          <div id="general-container" >
            {
              movie ?
                (<>


                  <div id="general-movie-image" style={{ backgroundImage: `url('${movie.poster}')` }}></div>
                  <div id="general-movie-info">
                    <div id="general-movie-title">
                      <h1>{movie.title}</h1>
                      <h1>{movie.ratings[5].score}<span className='ten-rating'>/100</span></h1>
                    </div>
                    <div id="general-movie-stats">
                      <h2>{movie.year}</h2>
                      <h2>{movie.runtime}mins</h2>
                      <h2>{movie.certification}</h2>
                    </div>
                    <br />
                    <h2>Summary</h2>

                    {movie.description}
                    <br />

                    <div id="ratings">
                      <h3>{movie.ratings[1].score}<span className='ten-rating'>/100</span> Metacritic</h3>
                      <h3>{movie.ratings[4].score}<span className='ten-rating'>/100</span> Rotten Tomatoes</h3>

                    </div>



                  </div>


                </>) :
                "nothing here"
            }
          </div>

          <div id="reviews-container" >
            <h2>Reviews</h2><br />

            <h3>Your review</h3>

            {
              userReview && movie?



                isUpdateReview && movie ?
                  <>

                    <div id="review-form">
                      <form onSubmit={updateReview(userReview._id, { title: userReview.title, poster: movie.poster, movieTitle:movie.title, description: userReview.description, rating: userReview.rating })} >
                        <input className=" form-control line mb-3" type="text" name="title" onChange={handleChangeUpdate} defaultValue={userReview.title} />
                        <input className="form-control line mb-3" type="text" name="description" onChange={handleChangeUpdate} defaultValue={userReview.description} />
                        <input className=" form-control line mb-3" type="number" min="1" max="10" name="rating" onChange={handleChangeUpdate} defaultValue={userReview.rating} />

                        {/* <input className="action" type="submit" value="update" /> */}
                        <input className="btn btn-primary btn-block" type="submit" value="Update" />
                      </form>
                    </div>
                    <br />
                  </>

                  :
                  <>
                  <div key={userReview._id} className="review">

                    <div id="left-side">
                      <h1>🔥 {userReview.rating}<span className='ten-rating'>/10</span></h1>

                    </div>
                    <div id="right-side">
                      <h6>{userReview.title}</h6>
                      <p>{userReview.description}</p>

                      <button className="btn btn-danger" onClick={() => { deleteReview(userReview._id) }}>Delete</button>
                      <button className="btn btn-primary" onClick={() => { setIsUpdateReview(true) }}>Edit </button>

                    </div>

                  </div>
                     <br /></>
                :
                <>
                  <div id="review-form">
                    <h6>You have yet to leave a review. Submit One below!</h6>

                    <form onSubmit={createReview} >
                      <input className=" form-control  line mb-3" type="text" name="title" placeholder='Review title goes here' onChange={handleChange} value={newReview.title} />
                      <input className="form-control line mb-3" type="text" name="description" placeholder='Tell us about this movie' onChange={handleChange} value={newReview.description} />
                      <input className="form-control line mb-3" type="number" min="1" max="10" name="rating" placeholder='Whats your rating?' onChange={handleChange} value={newReview.rating} />
    
                      <input className="btn btn-primary btn-block" type="submit" value="Submit" />
                    </form>
                  </div>
                  <br />
                </>
            }

            <div id="community-reviews">

              <h3>Community Reviews</h3>
              {
                reviews && reviews.length ?


                  reviews.map((review) => {


                    return (
        
                        <div key={review._id} className="review">
                          <div id="left-side">
                            <h1>🔥 {review.rating}<span className='ten-rating'>/10</span></h1>

                          </div>
                          <div id="right-side">
                            <h6>{review.title}</h6>
                            <p>{review.description}</p>

                          </div>



                        </div>

                   
                    )
                    })



              


              :
              <h6>No reviews have been left yet.</h6>

          }
            </div>
          </div>
          <br />
          <EditorsPicks page="movie" />




        </div>
      </div>
      <Footer />

    </>
  )

}