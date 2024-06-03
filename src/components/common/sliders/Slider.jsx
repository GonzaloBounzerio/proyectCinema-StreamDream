import "./Slider.css"

const Slider = () => {

    let imagenPrueba = "https://res.cloudinary.com/duvugx7r9/image/upload/v1717109957/proyectCinema/lukeyoda_q2xu.1280_s7bp4w.webp"

  return (
    <div className="sliderBody" id="" style={{backgroundImage:`url(${imagenPrueba})`}}>
        <div className="dataSlider">
            <h3 className="titleFont">TItle</h3>
            <p className="textFont">Lorem ipsum dolor sit amet, consectetur adipisicing elit. Aperiam quaerat, natus culpa id error possimus earum cupiditate, suscipit placeat ipsum nesciunt laborum animi totam, ipsam blanditiis vero. Nisi, excepturi quo!</p>
        </div>
    </div>
  )
}

export default Slider