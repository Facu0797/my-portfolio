import { IoMdSend } from "react-icons/io";

const Boton = () => {
    return ( 
        <button className="boton-cv">
            <IoMdSend />
            <div className="text">Descargar CV</div>
        </button>    
    );
}
 
export default Boton;