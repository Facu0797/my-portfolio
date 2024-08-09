
import { useTranslation } from "react-i18next";
import BotonGitHub from "../../Componentes/Botones/BotonGitHub";
import BotonSitioWeb from "../../Componentes/Botones/BotonSitioWeb";

import vite from "/assets/vite.svg"
import css from "/assets/css.svg"
import javascript from "/assets/javascript.svg"
import react from "/assets/react.svg"
import sass from "/assets/sass.svg";
import baccoCoffee from "/assets/bacco-coffee.jpg"
import buscadorEmojis from "/assets/emojis.jpg"
import buscadorPelis from "/assets/buscador-peliculas.jpg"
import generadorDeColores from "/assets/generador-de-colores.jpg"
import transfBancaria from "/assets/transferencia-bancaria.jpg"
import suscripciones from "/assets/suscripciones.jpg"


const Proyectos = () => {

    const {t} = useTranslation();

    const proyectos = [
        {
            imagen: [baccoCoffee],
            nombre: t("PROYECTOS.BACCO.TITULO"),
            icons: [css, javascript],
            descripcion: t("PROYECTOS.BACCO.TEXTO"),
            urlGitHub: "https://github.com/Facu0797/bacco-coffee",
            urlSitioWeb: "https://facu0797.github.io/bacco-coffee/index.html"
        },
        {
            imagen: [buscadorEmojis],
            nombre: t("PROYECTOS.EMOJIS.TITULO"),
            icons: [css, javascript, react, vite],
            descripcion: t("PROYECTOS.EMOJIS.TEXTO"),
            urlGitHub: "https://github.com/Facu0797/react-pelis",
            urlSitioWeb: "https://main--buscador-emojis.netlify.app/"
        },
        {
            imagen: [buscadorPelis],
            nombre: t("PROYECTOS.PELIS.TITULO"),
            icons: [css, javascript, react, vite],
            descripcion: t("PROYECTOS.PELIS.TEXTO"),
            urlGitHub: "https://github.com/Facu0797/react-pelis",
            urlSitioWeb: "https://pelis-plus-react.netlify.app/"
        },
        {
            imagen: [generadorDeColores],
            nombre: t("PROYECTOS.COLORES.TITULO"),
            icons: [css, javascript, react, vite],
            descripcion: t("PROYECTOS.COLORES.TEXTO"),
            urlGitHub: "https://github.com/Facu0797/generador-de-colores",
            urlSitioWeb: "https://main--generador-de-colores-react-app.netlify.app/"
        },
        {
            imagen: [suscripciones],
            nombre: t("PROYECTOS.SUSCRIPCIONES.TITULO"),
            icons: [css, javascript, react, vite],
            descripcion: t("PROYECTOS.SUSCRIPCIONES.TEXTO"),
            urlGitHub: "https://github.com/Facu0797/presupuesto-de-suscripciones",
            urlSitioWeb: "https://presupuestos-de-suscripciones.netlify.app/"
        },
        {
            imagen: [transfBancaria],
            nombre: t("PROYECTOS.TRANSF.TITULO"),
            icons: [css, sass, javascript],
            descripcion: t("PROYECTOS.TRANSF.TEXTO"),
            urlGitHub: "https://github.com/Facu0797/Transferencia-Bancaria",
            urlSitioWeb: "https://transferencia-bancaria-app.netlify.app/"
        },
    ]

    return (
        <>
            <section id="proyectos" className="seccion-proyectos">
                <h2 className="proyectos"> {t("PROYECTOS.TITULO")} </h2>
                <div className="contenedor-carta">
                    {proyectos.map((item, index) => (
                        <div className="carta" key={index}>
                            <div className="carta-info">
                                <img className="img-proyecto" src={item.imagen} alt={item.nombre} />
                                <p>{item.descripcion}</p>
                                <h3>{item.nombre}</h3>
                            </div>
                            <div className="tecnologias">
                                {item.icons.map((icon, idx) => (
                                    <img className="img-tecnologia" src={icon} alt={`Tecnología ${idx + 1}`} key={idx} />
                                ))}
                            </div>
                            <div className="botones-proyectos">
                                <a target="_blank" href={item.urlGitHub}><BotonGitHub /></a>
                                <a target="_blank" href={item.urlSitioWeb}><BotonSitioWeb /></a>
                            </div>
                        </div>
                    ))}
                </div>
            </section> 
        </>
    );
}
 
export default Proyectos;