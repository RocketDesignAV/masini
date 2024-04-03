import React from 'react';
import '../../public/css/contacto.css';

const Contacto = () => {
    return (
        <div className="contactoContenedor">
            <div className='olaFooter'>
                <img src="/img/limiteFooter.png" alt="" />
            </div>
            <div id="contactoId" className='contactoContent'>
                <div className="contenedorRedesForm">
                    <div className='wrapperRedesForm'>
                        <div>
                            <p className='text-center font-bold'>CONTACTO</p>
                            <div className="contactInfo mt-5">
                                <div className="contactItem">
                                    <img src="/img/cel.png" alt="Teléfono" />
                                    <div className="text-white text-sm">
                                        <strong className='block'>Telefono:</strong> 11 6626-6220
                                    </div>
                                </div>
                                <div className="contactItem">
                                   <img src="/img/mail.png" alt="Email" />
                                    <div className="text-white text-sm">
                                        <strong className='block'>Email:</strong> sdsdsdsd@gmail.com
                                    </div>
                                </div>
                                <div className="contactItem">
                                    <img src="/img/ubi.png" alt="Dirección" />
                                    <div className="text-white text-sm">
                                        <strong className='block'>Dirección:</strong> Suboficial Perdomo 1474 - Ituzaingó
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>

                <div className='map'>
                    <iframe src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3282.8971221636302!2d-58.70122799999999!3d-34.632039999999996!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x95bcbfada3624413%3A0xcf0d909e1e3bd184!2sMetalurgica%20Masini!5e0!3m2!1ses-419!2sar!4v1712100598366!5m2!1ses-419!2sar" style={{ border: 0 }} allowFullScreen="" loading="lazy" referrerPolicy="no-referrer-when-downgrade"></iframe>
                </div>
            </div>
            <div className='footerEnd'>
                <div className='rocketImg'>
                    <img src="/img/rocket.png" alt="" width={'150px'} />
                </div>
                <div className='copy'>
                    <p>&copy; Rocket Design - 2024 | Todos los derechos reservados</p>
                </div>
            </div>
        </div>
    )
}

export default Contacto;
