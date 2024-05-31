
import "./MainMovie.css"

const MainMovie = ({movieIndex}) => {
    
    const background = movieIndex.image

    

  return (
    <div id="bodyMainMovie">
        <div id="portadaMainMovie" style={{ backgroundImage: `url(${background})` }}>
            <div className="textPortadaMainMovie">
              <h2 className="titlePortada subFont"> {movieIndex.title} </h2>
              <p className="textPortada textFont"> {movieIndex.sinopsis} </p>
            </div>
        </div>
    </div>
  )
}

export default MainMovie