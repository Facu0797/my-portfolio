import { useTranslation } from "react-i18next";
import { IoMdSend } from "react-icons/io";

const BotonContacto = () => {

    const {t} = useTranslation();

    return ( 
        <button className="boton-contacto">
            <IoMdSend />
            <div className="text">{t("CONTACTO.FORMULARIO.ENVIAR")}</div>
        </button>  
    );
}
 
export default BotonContacto;