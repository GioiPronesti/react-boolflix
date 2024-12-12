export default function Header() {
    return (
      <header>
        <div className="container">
          <div>
           Boolflix
          </div>
          <input type="text" placeholder="Scrivi qualcosa" className="input-search"/>
          <button type="button">Search</button>
        </div>
      </header>
    )
  }