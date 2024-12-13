import { useContext } from "react"
import GlobalContext from "../contexts/GlobalContext"

export default function Header() {

  const { query, setQuery } = useContext(GlobalContext)

  function onChange(event){
    setQuery(event.target.value)
  }

    return (
      <header>
        <div className="container">
          <div>
           Boolflix
          </div>
          <form>
            <label htmlFor="query"></label>
            <input type="text" name="query" id="query" value={query} onChange={onChange} placeholder="Scrivi qualcosa" />
          </form>
          
          <button>Search</button>
        </div>
      </header>
    )
  }