import { useNavigate } from 'react-router-dom'
export default function UserReviews ({ userReviews, page }) {
  const navigate = useNavigate()
  const handleRedirect = (id) => {
    navigate(`/movie/${id}`)
  }

  return (
    <>
      {
    page === 'main'
      ? <h3>Recently Reviewed</h3>
      : <h2>Recently Reviewed</h2>
}

      {/*
<div id="user-reviews-container"> */}

      <div id='recently-reviewed'>
        {
          userReviews && userReviews.length
            ? userReviews.map((review, i) => {
              const { movieTitle, poster, movieId } = review
              return (

                <div key={i} onClick={() => { handleRedirect(movieId) }}>

                  <div className='poster' style={{ backgroundImage: 'url(' + `${poster}` + ')' }} />

                  <span>{movieTitle}</span>

                </div>

              )
            })
            : 'You have yet to leave a review'
        }

      </div>

      {/* </div> */}
    </>
  )
}
