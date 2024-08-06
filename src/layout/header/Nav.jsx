import Redes from "../../Componentes/Redes";

const Nav = () => {
    return (
        <header className="header">
            <a className="logo" href="#inicio">{"<FacuAlmiñana />"}</a>
            <nav className="nav">
                <ul className="nav-menu">
                    <li> <a className="nav-link" href="#inicio">Inicio</a></li>
                    <li> <a className="nav-link" href="#proyectos">Proyectos</a></li>
                    <li> <a className="nav-link" href="#contacto">Contacto</a></li>
                </ul>
                <div className="separador"></div>
                <Redes /> 
            </nav>
        </header>
    );
}
 
export default Nav;