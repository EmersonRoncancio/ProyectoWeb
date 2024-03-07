import { Navbar } from "./componentes/Navbar"
import { Routes } from "react-router-dom"
import { Route } from "react-router-dom"
import { Home } from "./Routes/Home"
import { Footer } from "./componentes/Footer"
import { Empresa } from "./Routes/Empresa"
import { Mantenimiento } from "./Routes/Mantenimiento"
import { Calidad } from "./Routes/Calidad"
import { NavbarResponsive } from "./componentes/NavbarResponsive"
import { SistemasSolares } from "./Routes/SistemasSolares"
import { Redes } from "./Routes/Redes"
import { Seguridad } from "./Routes/Seguridad"
import { DisenioWeb } from "./Routes/DisenioWeb"
import { Licensamiento } from "./Routes/Licensamiento"

export const AppWeb = () => {
  return (
    <>
        <Navbar/>
        <NavbarResponsive/>
        <Routes>
            <Route path="/" element={<Home/>}/>
            <Route path="/empresa" element={<Empresa/>}/>
            <Route path="/mantenimiento" element={<Mantenimiento/>}/>
            <Route path="/calidad" element={<Calidad/>}/>
            <Route path="/sistemasSolares" element={<SistemasSolares/>}/>
            <Route path="/redes" element={<Redes/>}/>
            <Route path="/seguridad" element={<Seguridad/>}/>
            <Route path="/disenioweb" element={<DisenioWeb/>}/>
            <Route path="/licensamiento" element={<Licensamiento/>}/>
        </Routes>
        <Footer/>
    </>
  )
}
