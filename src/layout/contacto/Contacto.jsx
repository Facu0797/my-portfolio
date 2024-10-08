import { useForm } from 'react-hook-form';
import ubicacion from "/assets/ubicacion.svg"
import contactame from "/assets/contactame.svg"
import BotonContacto from '../../Componentes/Botones/BotonContacto';
import Redes from '../../Componentes/Redes/Redes';
import { useState } from 'react';
import { FaCheckCircle } from "react-icons/fa";
import { useTranslation } from 'react-i18next';

const Contacto = () => {
    const { register, handleSubmit, formState: { errors }, reset  } = useForm();
    const [mensajeEnviado, setMensajeEnviado] = useState(false);

    const onSubmit = () => {
        setMensajeEnviado(true)
        setTimeout(() => {
            setMensajeEnviado(false)
        }, 3000)
        reset()
    };

    const {t} = useTranslation();

    return (
        <>
            {/* Secccion de contacto */}
            <section className="seccion-contacto" id="contacto">
                <h2 className='contacto'>{t("CONTACTO.TITULO")}</h2>
                <form className="contact-form" onSubmit={handleSubmit(onSubmit)}>
                    <label>
                        {t("CONTACTO.FORMULARIO.NOMBRE")}
                        <input
                            type="text" 
                            {...register('name', { required: 'El nombre es requerido' })} 
                        />
                        {errors.name && <p className="error">{errors.name.message}</p>}
                    </label>
                    <label>
                    {t("CONTACTO.FORMULARIO.CORREO")}
                        <input 
                            type="email" 
                            {...register('email', { 
                                required: 'El correo es requerido', 
                                pattern: {
                                    value: /^[a-zA-Z0-9_.+-]+@[a-zA-Z0-9-]+\.[a-zA-Z0-9-.]+$/,
                                    message: 'Correo inválido'
                                }
                            })} 
                        />
                        {errors.email && <p className="error">{errors.email.message}</p>}
                    </label>
                    <label>
                    {t("CONTACTO.FORMULARIO.MENSAJE")}
                        <textarea 
                            {...register('message', { required: 'Debes escribir un mensaje' })} 
                        />
                        {errors.message && <p className="error">{errors.message.message}</p>}
                    </label>

                    {/* Enviar formulario */}
                    <div className='btn-enviar'>
                        <BotonContacto/>
                        {mensajeEnviado === true &&
                            <p><span className='check-icon'> <FaCheckCircle /></span>{t("CONTACTO.FORMULARIO.ENVIADO")}</p>
                        }
                    </div>
                </form>
                
                {/* Contactame */}
                <div className='contactame'>
                    <div className='contactame-ubicacion'>
                        <img className='img-ubicacion' width="25px" src={ubicacion} alt="ubicacion" />
                        <h3>{t("CONTACTAME.UBICACION")}</h3>
                    </div>
                    <div>
                        <img width="350px" className='img-contactame' src={contactame} alt="contactame" />
                    </div>
                    <div className='redes-contacto'>
                        <h3> {t("CONTACTAME.SUBTITULO")} </h3>
                        <Redes />
                    </div>
                </div>
            </section> 
        </>
    );
}
 
export default Contacto;