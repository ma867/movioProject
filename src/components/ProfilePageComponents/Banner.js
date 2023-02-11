export default function ProfileBanner ({ user, userReviews, setEdit }) {
  return (
    <>

      <div id='general-movie-title'>
        <h1>{user.name}</h1>
        <h1>{userReviews.length}<span className='ten-rating'>/∞</span></h1>
      </div>
      <div id='general-movie-stats'>
        <h2>Joined {user?.createdAt?.slice(0, 4)} </h2>
      </div>
      <br />
      <h2>About Me</h2>

      <p>{user.description}</p>
      <br />
      <br />
    </>
  )
}
