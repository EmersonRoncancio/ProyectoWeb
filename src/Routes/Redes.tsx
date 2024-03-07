import { MinFooter } from "../componentes/MinFooter"
import { redesInfo } from "../helpers"

export const Redes = () => {
  return (
    <main className="w-full ">
        <section className="w-full h-[60vh] imagen6 flex justify-center items-center">
            <h2 className="text-[50px] text-white">Sistemas Solares</h2>
        </section>
        <section className="w-full">
            {
                redesInfo.map(img=>{
                    return(
                        <>
                            <div className="flex">
                                <div className="w-[50%] h-screen flex justify-center items-center">
                                    <img className="w-[80%] h-[80%] rounded-3xl shadow-xl shadow-gray-500 object-cover" src={img.img} alt="" />
                                </div>
                                <div className="w-[50%] h-[80vh] flex flex-col justify-center items-center p-5 gap-5">
                                    <h2 className="text-blue-400 text-3xl">{img.nombre}</h2>
                                    <p className="text-lg text-center">{img.informacion}</p>
                                </div>
                            </div>
                        </>
                    )
                })
            }
        </section>
        <MinFooter/>
    </main>
  )
}
