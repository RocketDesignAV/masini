//import React from 'react'
import '../../public/css/servicios.css'
import ServiciosCard from './ServiciosCard'


const Servicios = () => {
  return (
    <div className="contenedorServicios">
      <div className='serviciosContent'>
        <h1>Servicios</h1>
        <div className='divAplicaciones'>
          <ServiciosCard/>
        </div>
      </div>
    </div>
  )
}

export default Servicios