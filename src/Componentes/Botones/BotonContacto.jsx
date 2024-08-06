import { IoMdSend } from "react-icons/io";

const BotonContacto = () => {
    return ( 
        <button className="boton-contacto">
            <IoMdSend />
            <div className="text">Enviar</div>
        </button>  
    );
}
 
export default BotonContacto;