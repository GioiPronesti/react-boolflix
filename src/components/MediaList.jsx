

// dati ricevuti come props movies e series tv 
// 2 componenti uguali che ricevono due array,  movies e series 

import Card from "./Card";

export default function Medialist({ items = [], title }) {

    return(
       <section>
            <div className="container">
                <h2>{title}</h2> 
            </div>
            <div className="container">
                <ul>
                    {
                    items.map((item) => (
                        <li key={item.id}>
                        <Card/>
                        </li>
                    ))   
                    }
                </ul>
            </div>
       </section>
    )
}