
import { Instagram, Linkedin, Mails } from "lucide-react"
import "./Footer.css"

const Footer = () => {
  return (
    <div id="bodyFooter" className="textFont">
        <div className="listLinks">
            <a href="">Contacto</a>
            <a href="https://github.com/GonzaloBounzerio/proyectCinema-StreamDream" target="blank">Repositorio Git</a>
            <a href="">Acerca</a>
        </div>
        <div className="profileFooter">
            <div className="linksRedes">
                <a href="https://www.instagram.com/gonza_bounzerio/" target="blank"> <Instagram/> </a>
                <a href="https://mail.google.com/mail/?view=cm&fs=1&to=bounzeriog@gmail.com&su=StreamDream" target="blank"> <Mails/> </a>
                <a href="https://www.linkedin.com/in/gonzalo-bounzerio-6534601a1/" target="blank"> <Linkedin/> </a>
            </div>
            <div className="linkProfile">
                Desarrollado por Gonzalo Bounzerio
            </div>
        </div>
    </div>
  )
}

export default Footer