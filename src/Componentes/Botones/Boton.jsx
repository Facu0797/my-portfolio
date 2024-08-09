import React from "react";
import { IoMdSend } from "react-icons/io";
import cvFacundo from "/CV-FACUNDO ALMINANA.pdf"
import { useTranslation } from "react-i18next";


const Boton = () => {
    const {t} = useTranslation();
    return (
        <a download="cv-facundo-alminana" href={cvFacundo}>
            <button className="boton-cv">
                <IoMdSend />
                <div className="text">{t("INICIO.CV")}</div>
            </button>    
        </a>
    );
}
 
export default Boton;