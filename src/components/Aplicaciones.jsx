//import React from 'react'
import '../../public/css/aplicaciones.css'
import AplicacionesCard from './AplicacionesCard'


const Aplicaciones = () => {
  return (
    <div className="contenedorAplicaciones">
        <div className='limiteAplicaciones'>
          <img src="/img/limiteAplicaciones.png" alt="" />
        </div>
      <div className='aplicacionesContet'>
        <h1>Aplicaciones</h1>
        <div className='divAplicaciones'>
          <AplicacionesCard/>
        </div>
      </div>
    </div>
  )
}

export default Aplicaciones