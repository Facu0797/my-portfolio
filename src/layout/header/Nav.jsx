import { useState } from "react";
import { useTranslation } from "react-i18next";
import { IoLanguage } from "react-icons/io5";


const Nav = () => {
    const [active, setActive] = useState(false);
    const [selectLeng, setSelectLeng] = useState("ES");
    const {t , i18n} = useTranslation();
    
    // Abre y cierra el menu de idioma
    const toggleMenu = () => {
        setActive(!active)
    }

    // Selecciona el idioma
    const seleccionarLenguaje = (lenguaje) => {
        setSelectLeng(lenguaje);
        cambiarIdioma(lenguaje.toLowerCase());
    }

    const cambiarIdioma = (idioma) => {
        i18n.changeLanguage(idioma);
    }


    return (
        <header className="header">
            <a className="logo" href="#inicio">{"<FacuAlmiñana />"}</a>
            <nav className="nav">
                <ul className="nav-menu">
                    <li> <a className="nav-link" href="#inicio">{t("NAVBAR.INICIO")}</a></li>
                    <li> <a className="nav-link" href="#proyectos">{t("NAVBAR.PROYECTOS")}</a></li>
                    <li> <a className="nav-link" href="#contacto">{t("NAVBAR.CONTACTO")}</a></li>
                </ul>
                <div className="separador"></div>
                <div>
                    <div onClick={toggleMenu} className="boton-lenguaje">
                        <IoLanguage className="lenguaje-icon" />
                    </div>
                    <div className={`lenguaje-menu ${active ? "active" : "" }`}>
                        <button onClick={() => seleccionarLenguaje("ES")} className={`lenguaje ${selectLeng === "ES" ? "lng-active" : ""}`}>ES</button>
                        <button onClick={() => seleccionarLenguaje("FR")} className={`lenguaje ${selectLeng === "FR" ? "lng-active" : ""}`}>FR</button>
                        <button onClick={() => seleccionarLenguaje("EN")} className={`lenguaje ${selectLeng === "EN" ? "lng-active" : ""}`}>EN</button>
                    </div>
                </div>
            </nav>
        </header>
    );
}
 
export default Nav;