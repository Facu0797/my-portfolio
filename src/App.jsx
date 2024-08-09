import "/src/layout/header/nav.css"
import "/src/layout/inicio/inicio.css"
import "/src/layout/proyectos/proyectos.css"
import "/src/layout/tecnologias/tecnologias.css"
import "/src/layout/contacto/contacto.css"
import "/src/layout/Footer/footer.css"
import "/src/Componentes/Redes/redes.css"
import './App.css'
import "/src/Componentes/Botones/boton.css"
import Nav from './layout/header/Nav';
import Inicio from "./layout/inicio/Inicio"
import Proyectos from './layout/proyectos/Proyectos';
import Contacto from './layout/contacto/Contacto';
import Footer from './layout/Footer/Footer';
import Tecnologias from './layout/tecnologias/Tecnologias';

function App() {

  return (
    <div className='App'>
      <Nav />
      <Inicio />
      <Proyectos />
      <Tecnologias />
      <Contacto />
      <Footer />
    </div>
  )
}

export default App
