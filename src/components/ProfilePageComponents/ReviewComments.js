export default function ReviewComments({userReviews, allUserReviews}){
    
    return(    
    <>   
{
        allUserReviews && allUserReviews.length?

     userReviews.map((userReview)=>{
        return(
            <>
            <br />
            <div key={userReview._id} className="review">

              <div id="left-side">
                <h1>🔥 {userReview.rating}<span className='ten-rating'>/10</span></h1>

              </div>
              <div id="right-side">
                <h5>{userReview.movieTitle}</h5>
                <h6>"{userReview.title}"</h6>
                <p>{userReview.description}</p>

            
              </div>

            </div>
             </>
        )
    }):
    ""
}
</>
)

}