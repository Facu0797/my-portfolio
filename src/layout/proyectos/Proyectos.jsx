
import BotonGitHub from "../../Componentes/Botones/BotonGitHub";
import BotonSitioWeb from "../../Componentes/Botones/BotonSitioWeb";
import { proyectos } from "../../Elementos/Proyecto";

const Proyectos = () => {

    return (
        <>
            <section id="proyectos" className="seccion-proyectos">
                <h2 className="proyectos">PROYECTOS</h2>
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