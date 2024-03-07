import logo from '../assets/LogoP.png'
import { Link,useLocation } from 'react-router-dom'
import { rutas }  from '../helpers'
import { GrMenu } from "react-icons/gr";
import { useState } from 'react';
import { ImCancelCircle } from "react-icons/im";

export const NavbarResponsive = () => {

    const [responsive, setResponsive] = useState(false)
    const path = useLocation().pathname

  return (
    <>
    <header className='w-full h-[70px] bg-slate-200 fixed flex justify-start lg:hidden items-center z-30'>
        <button onClick={(()=> setResponsive(!responsive))} className='ml-4'>
            <GrMenu size={35}/>
        </button>
    </header>

    <aside className={`top-0 fixed w-[50%] h-[80vh] bg-slate-300 flex flex-col lg:hidden duration-500 ${responsive? "translate-x-[0%]":"translate-x-[-100%]"} justify-around items-center z-40 rounded-br-lg`}>
            <Link to="/">
                <img className='w-[150px] h-[50px]' src={logo} alt="" />
            </Link>
            <nav>
                <ul className="flex flex-col gap-1">
                    {
                        rutas.map(i=>{
                            return(
                                <>
                                    <li key={i.nombre} className={`text-black text-center hover:text-gray-500 py-1 border-b-2 ${path===i.ruta?"border-b-blue-400":""}`}>
                                        <Link to={i.ruta}>{i.nombre}</Link>
                                    </li>
                                </>
                            )
                        })
                    }
                </ul>
            </nav>
            <button onClick={(()=> setResponsive(!responsive))} className='ml-4'>
            <ImCancelCircle size={35}/>
            </button>
       
    </aside>
    </>
    
  )
}
