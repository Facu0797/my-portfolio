import { useTranslation } from "react-i18next";
import { tecnologias } from "../../Elementos/tecnologias";


const Tecnologias = () => {
    const {t} = useTranslation();

    return ( 
        <section className="seccion-tecnologias">
            <h2>{t("TECNOLOGIAS.TITULO")}</h2>
            <div className="tecnologias">
                {tecnologias.map((item) => (
                    <div key={item.nombre} className="tecnologia">
                        <img width="50px" src={item.icono} alt="" />
                        <p>{item.nombre}</p>
                    </div>    
                ))}
            </div>
            
        </section>
    );
}
 
export default Tecnologias;