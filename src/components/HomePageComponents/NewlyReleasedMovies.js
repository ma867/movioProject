import { useState } from 'react'
import { Link } from 'react-router-dom'

export default function NewlyReleasedMovies ({ newMovies }) {
  return (

    newMovies
      ? <>
        <h3>Newly Released Movies</h3>
        <ol>
          {
                newMovies.map((movie, index) => {
                  const { title, thumbnailUrl, releaseDate } = movie
                  const year = releaseDate.slice(0, 4)

                  return (
                    <li key={index}>
                      {title}
                    </li>
                  )
                })

            }
        </ol>
      </>

      : 'nothing here'
  )
}
