import vite from "/assets/vite.svg"
import css from "/assets/css.svg"
import javascript from "/assets/javascript.svg"
import react from "/assets/react.svg"
import sass from "/assets/sass.svg";
import baccoCoffee from "/assets/bacco-coffee.jpg"
import buscadorEmojis from "/assets/buscador-peliculas.jpg"
import buscadorPelis from "/assets/buscador-peliculas.jpg"
import generadorDeColores from "/assets/generador-de-colores.jpg"
import transfBancaria from "/assets/transferencia-bancaria.jpg"
import suscripciones from "/assets/suscripciones.jpg"

export const proyectos = [
    {
        imagen: [baccoCoffee],
        nombre: "Bacco Coffee",
        icons: [css, javascript],
        descripcion: "Proyecto Bacco Coffee fue mi entrega final del curso de JavaScript en Coderhouse. Es un sitio web minimalista que incluye un carrito de compras sencilla y eficiente.",
        urlGitHub: "https://github.com/Facu0797/bacco-coffee",
        urlSitioWeb: "https://facu0797.github.io/bacco-coffee/index.html"
    },
    {
        imagen: [buscadorEmojis],
        nombre: "Buscador de emojis",
        icons: [css, javascript, react, vite],
        descripcion: "Es una aplicación en React+Vite que permite buscar y encontrar emojis rápidamente a través de un archivo JSON, mostrando resultados relevantes en tiempo real.",
        urlGitHub: "https://github.com/Facu0797/react-pelis",
        urlSitioWeb: "https://main--buscador-emojis.netlify.app/"
    },
    {
        imagen: [buscadorPelis],
        nombre: "Buscador de pelis",
        icons: [css, javascript, react, vite],
        descripcion: "Este sitio web consume una API para permitir a los usuarios buscar y obtener información detallada sobre películas. Ademas, tiene una interfaz intuitiva y fácil de usar.",
        urlGitHub: "https://github.com/Facu0797/react-pelis",
        urlSitioWeb: "https://pelis-plus-react.netlify.app/"
    },
    {
        imagen: [generadorDeColores],
        nombre: "Generador de colores",
        icons: [css, javascript, react, vite],
        descripcion: "Sitio web que utiliza una biblioteca especializada para generar una amplia variedad de paletas de colores.",
        urlGitHub: "https://github.com/Facu0797/generador-de-colores",
        urlSitioWeb: "https://main--generador-de-colores-react-app.netlify.app/"
    },
    {
        imagen: [suscripciones],
        nombre: "Suscripciones",
        icons: [css, javascript, react, vite],
        descripcion: "Aplicación de gestión de presupuestos de suscripciones que te permite controlar fácilmente tus gastos en servicios como Netflix, HBO y muchos más.",
        urlGitHub: "https://github.com/Facu0797/presupuesto-de-suscripciones",
        urlSitioWeb: "https://presupuestos-de-suscripciones.netlify.app/"
    },
    {
        imagen: [transfBancaria],
        nombre: "Transferencia bancaria",
        icons: [css, sass, javascript],
        descripcion: "Esta App de transferencia guía al usuario paso a paso. Ingresa la cantidad a transferir, verifica los datos, selecciona el método y confirma la operación. Fácil, rápida y segura.",
        urlGitHub: "https://github.com/Facu0797/Transferencia-Bancaria",
        urlSitioWeb: "https://transferencia-bancaria-app.netlify.app/"
    },
]