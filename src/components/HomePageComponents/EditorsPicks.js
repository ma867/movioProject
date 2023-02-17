import { useNavigate } from 'react-router-dom'

export default function EditorsPicks({ page }) {
  const navigate = useNavigate()

  const handleRedirect = (id) => {
    navigate(`/movie/${id}`)
  }
  return (
    <>
      {
        page !== 'profile'
          ? <h1>Editor's Picks</h1>
          : ''
      }


      <div id="editors-picks-container">
        {
          page !== 'profile'
            ? <h1>Editor's Picks</h1>
            : ''
        }

        <div id="editors-picks-movies" className="flex">

          <div className="editors-picks-movie flex" onClick={() => { handleRedirect('tt3104988') }} style={{ backgroundImage: "url('https://i.imgur.com/SVV95jM.jpg')" }}>
            <span>Crazy Rich Asians</span>
          </div>

          <div className="editors-picks-movie flex" onClick={() => { handleRedirect('tt1375666') }} style={{ backgroundImage: "url('https://i.imgur.com/8slLY7o.jpg')" }}>
            <span>Inception</span>
          </div>

          <div className="editors-picks-movie flex" onClick={() => { handleRedirect('tt8772262') }} style={{ backgroundImage: "url('https://i.imgur.com/UGl8won.jpg')" }}>
            <span>Midsommar</span>
          </div>
        </div>
      </div>









    </>
  )
}
