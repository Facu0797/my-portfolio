import { useTranslation } from "react-i18next";
import Boton from "../../Componentes/Botones/Boton";
import Redes from "../../Componentes/Redes";
import fotoYo from "/assets/YO.png"

const Inicio = () => {

    const {t} = useTranslation()

    return (
        <>
            <section id="inicio" className="seccion-inicio">
                <article className="inicio-yo">
                    <h1>Facundo Almiñana Reinoso</h1>
                    <h2 > {t("INICIO.H2")}</h2>
                    <p>{t("INICIO.TEXTO.UNO")} <br /> <br /> {t("INICIO.TEXTO.DOS")}</p>
                    <div className="inicio-contactame">
                        <Boton />
                        <Redes />
                    </div>
                </article>
                <div className="contenedor-foto">
                    <img className="img-foto" src={fotoYo} alt="yo" />
                </div>
            </section>
        </>
        
    );
}
 
export default Inicio;