// import './App.css';
import { getUser } from '../../utilities/users-service';
import MainPage from '../MainPage/MainPage';
import MoviePage from '../MoviePage/MoviePage';
import AuthPage from '../AuthPage/AuthPage'
import { useState, useEffect } from 'react';

import {Link, Routes, Route, useNavigate } from 'react-router-dom'

// import { diffIndexes } from '../models/todo';

function App() {


    const [user, setUser] = useState(getUser())
    const [classicMovies, setClassicMovies] = useState([])
    const [newMovies, setNewMovies] = useState([])
 
 

    const getOldMovies = async () => {
        try {
            const response = await fetch('https://imdb-top-100-movies.p.rapidapi.com/', {
                method: "GET",
                headers: {
                    'X-RapidAPI-Key': '721e6a3327mshe34359d3563d7e7p1f7ccejsn1d1230e5e489',
                    'X-RapidAPI-Host': 'imdb-top-100-movies.p.rapidapi.com'
                }
            })
            const data = await response.json()
            setClassicMovies(data.slice(0,6))


        } catch (error) {
            console.error(error)
        }
    }


    const getNewMovies = () => {
        const ids = []
        const info = []

        let names = []

        fetch('https://metacriticapi.p.rapidapi.com/movies/new?filter=date', {
            method: "GET",
            headers: {
                'X-RapidAPI-Key': '721e6a3327mshe34359d3563d7e7p1f7ccejsn1d1230e5e489',
                'X-RapidAPI-Host': 'metacriticapi.p.rapidapi.com'
            }
        })
            .then((metacriticResponse) => {
                return metacriticResponse.json()
            })
            .then((metacriticData) => {
                setNewMovies(metacriticData.slice(0, 10))
       
           
            })

    }

    useEffect(() => {
        getOldMovies()
        getNewMovies()
    }, [])


    return (
        <>

            {
                user ?
                    <>

                        <Routes>
                            <Route path="/home" element={<MainPage classicMovies={classicMovies} newMovies={newMovies} />} />
                            <Route path="/movie/:id" element={<MoviePage username={user._id} user={user} />} />
                          
                        </Routes>
                    </>
                    :
                    <AuthPage setUser={setUser} />
            }


        </>
    )
}

export default App;