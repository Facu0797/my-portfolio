import React from 'react'
import ReactDOM from 'react-dom/client'
import App from './App.jsx'
import './App.css'
import i18next from 'i18next'
import { initReactI18next } from 'react-i18next'
import es from "/i18n/español/es.json"
import fr from "/i18n/frances/fr.json"
import en from "/i18n/ingles/en.json"

i18next.use(initReactI18next).init({
  lng: "es",
  interpolation: {
    escapeValue: false,
  },
  resources: {
    es: {
      translation: es,
    },
    fr: {
      translation: fr,
    },
    en: {
      translation: en,
    },
  }
})

ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
    <App />
  </React.StrictMode>,
)
