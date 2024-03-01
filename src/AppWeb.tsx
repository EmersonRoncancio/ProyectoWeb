import { Navbar } from "./componentes/Navbar"
import { Routes } from "react-router-dom"
import { Route } from "react-router-dom"
import { Home } from "./Routes/Home"
import { Footer } from "./componentes/Footer"
import { Empresa } from "./Routes/Empresa"
import { Mantenimiento } from "./Routes/Mantenimiento"
import { Calidad } from "./Routes/Calidad"

export const AppWeb = () => {
  return (
    <>
        <Navbar/>
        <Routes>
            <Route path="/" element={<Home/>}/>
            <Route path="/empresa" element={<Empresa/>}/>
            <Route path="/mantenimiento" element={<Mantenimiento/>}/>
            <Route path="/calidad" element={<Calidad/>}/>
        </Routes>
        <Footer/>
    </>
  )
}
