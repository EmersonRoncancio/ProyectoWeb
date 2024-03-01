import logo from '../assets/LogoP.png'
import { rutas } from '../helpers'
import { Link, useLocation } from 'react-router-dom'

export const Navbar = () => {

    const path = useLocation().pathname
    
  return (
    <header className="w-full h-[80px] bg-slate-200 flex justify-between items-center px-[10px] shadow-gray-300 shadow-xl fixed top-0 z-10">
        <a href="">
            <img className="w-[120px] h-[45px]" src={logo} alt="Logo"/>
        </a>
        <nav>
            <ul className="flex gap-7">
                {
                    rutas.map(i=>{
                        return(
                            <>
                                <li key={i.nombre} className={`text-black hover:text-gray-500 py-1 border-2 ${path===i.ruta?"border-b-blue-400":""}`}>
                                    <Link to={i.ruta}>{i.nombre}</Link>
                                </li>
                            </>
                        )
                    })
                }
            </ul>
        </nav>
    </header>
  )
}
