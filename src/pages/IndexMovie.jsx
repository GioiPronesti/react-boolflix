//import {Card} from "../components/Card.jsx"
import { useEffect, useState } from 'react';
import axios from "axios";
import BASE_URI from "../config.js"

export default function Index(){

    const [movies, setMovies] = useState([])

    function fetchMovies() {
        axios.get(`${BASE_URI}/home`)
        .then(res => {
            setMovies(res.data)
        })
        .catch(err => {
          console.error(err)
          setMovies([])
        })
      }

      useEffect(() => {
        fetchMovies()
      },[])

    return (

        <main>
        <section>
          <div className='container'>
            <h1 className='title'>film gallery </h1>
          </div>
          <div className="container">
            <ul >
              {movies.map(movie => (
                <li key={movie.id}>
                  
                </li>
              ))}
            </ul>
          </div>
        </section>
      </main>
    )
}