import { useContext } from "react"
import GlobalContext from "../contexts/GlobalContext"

export default function Header() {

  const { query, setQuery, fetchData} = useContext(GlobalContext)

  function onChange(event){
    setQuery(event.target.value)
  }

  function onSubmit(event){
    event.preventDefault()

    // qui dobbiamo far partire la funzione fetchdata per far scatenare la chiamata alla API
    fetchData()
  }

    return (
      <header>
        <div className="container">
          <div>
           Boolflix
          </div>
          <form onSubmit={onSubmit}>
            <label htmlFor="query"></label>
            <input type="text" name="query" id="query"  onChange={onChange} value={query} placeholder="Scrivi qualcosa" />
            <button>Search</button>
          </form>
        </div>
      </header>
    )
  }