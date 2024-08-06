import { IoMdSend } from "react-icons/io";
import cvFacundo from "/CV-FACUNDO ALMINANA.pdf"

const Boton = () => {
    return (
        <a download="cv-facundo-alminana" href={cvFacundo}>
            <button className="boton-cv">
                <IoMdSend />
                <div className="text">Descargar CV</div>
            </button>    
        </a>
    );
}
 
export default Boton;