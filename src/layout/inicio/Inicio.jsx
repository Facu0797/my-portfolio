import Boton from "../../Componentes/Botones/Boton";
import fotoYo from "/src/assets/YO.png"

const Inicio = () => {
    return (
        <>
            <section id="inicio" className="seccion-inicio">
                <article className="inicio-yo">
                    <h1>Facundo Almiñana Reinoso</h1>
                    <h2 >FrontEnd Developer</h2>
                    <p>Soy un programador autodidacta con un fuerte interés en la tecnología. Me dedico a estudiar y mejorar mis habilidades de manera constante. <br /> <br />Disfruto resolviendo problemas y enfrentando desafíos que me permiten crecer como desarrollador. La programación es mi motivación diaria y me impulsa a seguir aprendiendo.</p>
                    <Boton />
                </article>
                <div className="contenedor-foto">
                    <img className="img-foto" src={fotoYo} alt="yo" />
                </div>
            </section>
        </>
        
    );
}
 
export default Inicio;