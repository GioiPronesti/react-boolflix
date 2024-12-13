
import GlobalContext from "./contexts/GlobalContext.js"
import Header from "./components/Header.jsx"
import Main from "./components/Main.jsx"
import { useState } from "react"

// Query string, my api key
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
  const [query, SetQuery] = useState("") // valore di stringa ricerca utente
  
  
  return (
    <>
      <GlobalContext.Provider value={{ API_KEY, movies, series, query, SetQuery}}>
        <Header/>
        <Main/>
      </GlobalContext.Provider>
    </>
  )
}

export default App 
