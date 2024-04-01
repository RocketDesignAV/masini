import {useState} from 'react'
import '../../public/css/menu.css'
import { FiMenu } from 'react-icons/fi';

import Whatsapp from './Whatsapp'

const Menu = () => {

  const [open, setOpen] = useState(false);



  return (

    <header className="bg-white border-gray-200 dark:bg-gray-900">
      <div className='fixed navDivi flex items-center justify-between xl:max-w-10xl xl:mx-auto max-w-full lg:p-2 flex-wrap w-full back'>
        <div className='divImg'>
          <a href="#">
            <img src="/img/masini.png" alt="" />
          </a>
        </div>

        <FiMenu className='lg:hidden block h-8 w-8 cursor-pointer text-white m-5' onClick={() => setOpen(!open)} />

        <nav className={`${open ? 'block' : 'hidden'} lg:flex lg:justify-between items-center py-2 lg:w-auto w-full lg:bg-transparent mainNav`}>
          <ul className='lg:flex px-3 text-white lg:justify-between ulMenuMain'>
            <li className='mx-3 text-white bg-clip-text bg-gradient-to-r from-yellow-200 via-yellow-400 to-yellow-500 hover:text-yellow-500 hover:from-transparent hover:to-transparent hover:bg-gradient-to-br focus:ring-4 focus:ring-yellow-300 dark:focus:ring-yellow-800'><a className='block p-3 lg:p-0' href="#nosotrosId" onClick={() => setOpen(!open)}>Nosotros</a></li>
            <li className='mx-3 text-white bg-clip-text bg-gradient-to-r from-yellow-200 via-yellow-400 to-yellow-500 hover:text-yellow-500 hover:from-transparent hover:to-transparent hover:bg-gradient-to-br focus:ring-4 focus:ring-yellow-300 dark:focus:ring-yellow-800'><a className='block p-3 lg:p-0' href="#serviciosId" onClick={() => setOpen(!open)}>Servicios</a></li>
            <li className='mx-3 text-white bg-clip-text bg-gradient-to-r from-yellow-200 via-yellow-400 to-yellow-500 hover:text-yellow-500 hover:from-transparent hover:to-transparent hover:bg-gradient-to-br focus:ring-4 focus:ring-yellow-300 dark:focus:ring-yellow-800'><a className='block p-3 lg:p-0' href="#portfolioId" onClick={() => setOpen(!open)}>Aplicaciones</a></li>
            <li className='mx-3 text-white bg-clip-text bg-gradient-to-r from-yellow-200 via-yellow-400 to-yellow-500 hover:text-yellow-500 hover:from-transparent hover:to-transparent hover:bg-gradient-to-br focus:ring-4 focus:ring-yellow-300 dark:focus:ring-yellow-800'><a className='block p-3 lg:p-0' href="#contactoId" onClick={() => setOpen(!open)}>Contacto</a></li>
          </ul>
        </nav>

      </div>

     <div className='banner flex justify-center m-auto items-center'>
      <div className='textBanner'>
        <h1>Corte por electroerosión de hilo para todo tipo de metales.</h1>
        <p>Realizamos corte de cualquier tipo de pieza metálica en alta precisión con máquinas de última generación con tecnología de control numérico.</p>
        <div type="button" className="btnBanner text-gray-900 bg-gradient-to-r from-yellow-200 via-yellow-400 to-yellow-500 hover:bg-gradient-to-br focus:ring-4 focus:ring-yellow-300 dark:focus:ring-yellow-800 font-medium rounded-lg text-sm px-5 py-2.5 text-center mr-2 mb-2">Lime</div>

      </div>
      <div className='bannerImg'>
        <img src="/img/rectangle.png" alt="" />
      </div>
     </div>

      <Whatsapp/>
    </header>  

  )
}

export default Menu