
import "./MainMovie.css"

const MainMovie = ({movieIndex}) => {
    
  return (
    <div id="bodyMainMovie">
        <div id="portadaMainMovie" style={{ backgroundImage: `url(${movieIndex.image})` }}>
            <div className="textPortadaMainMovie">
              <h2 className="titlePortada subFont"> {movieIndex.title} </h2>
              <p className="textPortada textFont"> {movieIndex.sinopsis} </p>
            </div>
        </div>
    </div>
  )
}

export default MainMovie