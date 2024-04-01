import {BrowserRouter} from 'react-router-dom'
import './App.css'
import Menu from './components/Menu'
import Servicios from './components/Servicios'
import Aplicaciones from './components/Aplicaciones'
import Contacto from './components/Contacto'


function App() {


  return (
    <BrowserRouter>
      <Menu/>
      <main className='contenedorMain'>
        <Servicios/>
        <Aplicaciones/>
        <Contacto/>
      </main>
    </BrowserRouter>
  )
}

export default App
