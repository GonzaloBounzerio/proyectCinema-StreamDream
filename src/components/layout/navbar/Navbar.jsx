
import "./Navbar.css"
import Buscador from '../../common/buscador/Buscador';

const Navbar = () => {

    let titleImage = "https://res.cloudinary.com/duvugx7r9/image/upload/v1716854938/proyectCinema/titleNavbar_utxb1k.png"

  return (
    <div id="bodyNavbar">
        <div className="titleNavbar">
            <img src={titleImage} alt="logo" height={"30px"}/>
        </div>
        <div className="containerActionNavbar">
            <div className="buttonsNavbar textFont">
                <ul className='btnNavbar'>Series</ul>
                <ul className='btnNavbar'>Películas</ul>
                <ul className='btnNavbar'>Mi lista</ul>
            </div>
            <div className="navegationDivNavbar">
                <Buscador/>
            </div>
        </div>
    </div>
  )
}

export default Navbar