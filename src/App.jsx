
import GlobalContext from "./contexts/GlobalContext.js"
import Header from "./components/Header.jsx"
import Main from "./components/Main.jsx"


function App() {

  return (
    <>
      <GlobalContext.Provider value={{}}>
        <Header/>
        <Main/>
      </GlobalContext.Provider>
    </>
  )
}

export default App 
