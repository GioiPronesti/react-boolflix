import { BrowserRouter, Route, Routes } from "react-router-dom"
import {MovieContext} from "./contexts/MovieContext.js"
import Home from "./pages/Home.jsx"

function App() {

  return (
    <>
      <MovieContext.provider>
        <BrowserRouter>
          <Routes>
            <Route path="/" element={<Home/>}/> 
          </Routes>
        </BrowserRouter>
      </MovieContext.provider>
    </>
  )
}

export default App 
