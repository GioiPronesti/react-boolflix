import { BrowserRouter, Route, Routes } from "react-router-dom"
import MovieContext from "./contexts/MovieContext.js"
import Home from "./pages/Home.jsx"
import IndexPageMovies from "./pages/IndexMovie.jsx"

function App() {

  return (
    <>
      <MovieContext.Provider value={{}}>
        <BrowserRouter>
          <Routes>
            <Route path="/home" element={<Home/>}/> 
              <Route index element={IndexPageMovies}/>
          </Routes>
        </BrowserRouter>
      </MovieContext.Provider>
    </>
  )
}

export default App 
