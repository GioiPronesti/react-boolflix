import { useContext } from "react"
import Medialist from "./MediaList"
import GlobalContext from "../contexts/GlobalContext"

export default function Main(){

const { movies, series } = useContext(GlobalContext)    

// il main fornisce le lista da mostrare al componente Medialist
// prendendo il valore dal Global Context: movies e series tv  
    return (
        <main>
            <Medialist title="Movies" items={movies}/>
            <Medialist title="Series" items={series}/>
        </main>     
    )
} 