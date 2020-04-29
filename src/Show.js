import React from "react"
import Showlist from "./Showlist"

const showPage = props => {

  return(
    <div>
      {props.movies.map(movie => <Showlist key={Math.random()} {...movie} />)}  
    </div>
  )
}

export default showPage