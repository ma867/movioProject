import { useNavigate } from 'react-router-dom'

export default function EditorsPicks ({ page }) {
  const navigate = useNavigate()

  const handleRedirect = (id) => {
    navigate(`/movie/${id}`)
  }
  return (
    <>
      {
        page !== 'profile'
          ? <h3>Editor's Picks</h3>
          : ''
    }

      <div id='middle-container'>

        <div className='movie-image' onClick={() => { handleRedirect('tt3104988') }} style={{ backgroundImage: "url('https://i.imgur.com/SVV95jM.jpg')" }}><span>Crazy Rich Asians</span></div>
        <div className='movie-image' onClick={() => { handleRedirect('tt1375666') }} style={{ backgroundImage: "url('https://i.imgur.com/8slLY7o.jpg')" }}><span>Inception</span></div>
        <div className='movie-image' onClick={() => { handleRedirect('tt8772262') }} style={{ backgroundImage: "url('https://i.imgur.com/UGl8won.jpg')" }}><span>Midsommar</span></div>
      </div>

    </>
  )
}
