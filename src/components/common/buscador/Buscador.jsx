
import { Search , CircleX} from 'lucide-react';
import "./Buscador.css"

const Buscador = () => {

    function muestraInput(){
        let inputSearch = document.getElementById("buscadorNavbar")
        let iconSearch = document.getElementById("searchNavbarIcon")
        let icon1 = document.getElementById("icon1")
        let icon2 = document.getElementById("icon2")
        inputSearch.className= "showDiv"
        iconSearch.className="movementRight"
        icon1.style.display="none"
        icon2.style.display="inline"
    }

    function hideInput(){
        let inputSearch = document.getElementById("buscadorNavbar")
        let iconSearch = document.getElementById("searchNavbarIcon")
        let icon1 = document.getElementById("icon1")
        let icon2 = document.getElementById("icon2")
        inputSearch.className= "hideDiv"
        iconSearch.className="movementLeft"
        icon1.style.display="inline"
        icon2.style.display="none"
    }


  return (
    <div id='bodyBuscador'>
        <input className='textFont' type="text" name="searchArea" id="buscadorNavbar" />
        <label id='searchNavbarIcon'>
            <span id='icon1' onClick={ () => muestraInput() }>
                <Search />
            </span>
            <span id='icon2' style={{display:"none"}} onClick={ () => hideInput()}>
                <CircleX/>
            </span>
        </label>
    </div>
  )
}

export default Buscador