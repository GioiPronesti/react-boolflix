
// la card riceve infine un oggetto item che avrà come proprietà le props di movies o series tv 

import flagMap from "../flags"

export default function Card({ item }) {

    const { title, original_title, vote_average, original_language, poster_path } = item
  
    return (
      <div>

        <h3>{title}</h3>  {/* title ? title : name  */}

        <p>{original_title}</p> {/* original_title ? original_title : original_name */}

        {
         flagMap[original_language] ?
         <img src={flagMap[original_language]} height={20} alt=""/> :
         <p>{original_language}</p> 
        }
        
        <p>{vote_average}</p>
      </div>
    )
  
  }