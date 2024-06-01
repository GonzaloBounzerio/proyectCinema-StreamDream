import { dataMovie } from "../../../data"
import MainMovie from "./MainMovie"


const MainMovieContainer = () => {
    

    const movieIndex = dataMovie[(Math.floor(Math.random() * dataMovie.length))]


  return (
    <div>
        <MainMovie movieIndex={movieIndex}/>
    </div>
  )
}

export default MainMovieContainer