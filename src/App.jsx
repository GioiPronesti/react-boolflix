
import GlobalContext from "./contexts/GlobalContext.js"
import Header from "./components/Header.jsx"
import Main from "./components/Main.jsx"
import { useState } from "react"
import axios from "axios"

// Query string, api key
const API_KEY = "309c8d043ba0e8cc2094f0301fd5ce49"

function App() {

  //  Il Provider del Global Contecxt ci fornirà dei dati che devono essere trasmesse ai figli di APP 
  // --> 
  // Movies e Series tv
  // Variabile Query  e altri parametri sui filtri

  // Funzione Di Fetch Data
  // Sull' input Search (filtro di ricerca) serve un funzione che faccia scatenare la chiamata API 

  //Definisco le variabili di stato

  const [movies, setMovies] = useState([])
  const [series, setSeries] = useState([])
  const [query, setQuery] = useState("Star Wars") // valore di stringa ricerca utente
  
  function fetchData() {

    axios.get("https://api.themoviedb.org/3/search/movie",{
      params: {
        api_key: API_KEY,
        query: query
      }
    }).then(res => {
      console.log(res.data)
      setMovies(res.data.results)
    }).catch(err => {
      console.error(err)  
      setMovies([])
    })

    axios.get("https://api.themoviedb.org/3/search/tv",{
      params: {
        api_key: API_KEY,
        query: query
      }
    }).then(res => {
      console.log(res.data)
      // per gestire la stampa del nome della series al posto di titolo ci mappiamo l'array 
      const mappedSeries = res.data.results.map(item => {
        return {
          ...item,
          title : item.name,
          original_title : item.original_name
        }
      })
      setSeries(mappedSeries)
    }).catch(err => {
      console.error(err)  
      setSeries([])
    })
  }



  return (
    <>
      <GlobalContext.Provider value={{  movies, series, query, fetchData, setQuery}}>
        <Header/>
        <Main/>
      </GlobalContext.Provider>
    </>
  )
}

export default App 
