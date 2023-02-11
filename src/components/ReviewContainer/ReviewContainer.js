import { useState } from "react"
export default function ReviewContainer({ review, user, setIsUpdateReview, deleteReview, profile }) {
    const [readMore, setReadMore] = useState(false)
    return (
        <>

            <div key={review._id} className="review" >

                <div id="left-side" style={{ backgroundImage: `url('${user?.image}')` }}>

                    <div className="general-user-image" ></div>
                </div>
                <div id="right-side" >
                    <div className="review-title">
                        <div>
                            <h5>{review.title}</h5>
                            <h6>username goes here</h6>
                        </div>
                        <div className="review-rating-number">
                            {
                                review.rating === 10 ?

                                    "🔥 " :
                                    review.rating < 10 && review.rating > 7 ?
                                        "😁 " :
                                        review.rating < 7 && review.rating > 3 ?
                                            "😕 " :
                                            "🤮 "
                            }

                            {review.rating}<span className='ten-rating'>/10</span>

                        </div>

                    </div>

                    <p>
                        {
                            review.description.length > 600 ?
                                (<>
                                    {
                                        readMore ?
                                            review.description
                                            :
                                            review.description.slice(0, 600) + "..."
                                    }
                                    <p className="read-more" onClick={() => setReadMore(!readMore)}>Read More</p>
                                </>)
                                :
                                (review.description)
                        }
                    </p>
                    {
                        profile === "self" ?
                            <div className="buttons">
                                <button className="btn btn-danger" onClick={() => { deleteReview(review._id) }}>Delete</button>
                                <button className="btn btn-primary" onClick={() => { setIsUpdateReview(true) }}>Edit </button>

                            </div>
                            :
                            ""
                    }


                </div>

            </div>
            <br /></>






    )
}