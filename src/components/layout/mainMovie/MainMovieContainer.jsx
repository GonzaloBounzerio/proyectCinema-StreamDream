import { useState } from "react"
import { dataMovie } from "../../../data"
import MainMovie from "./MainMovie"
import { useEffect } from "react"


const MainMovieContainer = () => {
    

    const movieIndex = dataMovie[(Math.floor(Math.random() * dataMovie.length))]


  return (
    <div>
        <MainMovie movieIndex={movieIndex}/>
    </div>
  )
}

export default MainMovieContainer