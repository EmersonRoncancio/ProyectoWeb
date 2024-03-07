import { MinFooter } from "../componentes/MinFooter"
import { sistemasSolaresImg } from "../helpers" 

export const SistemasSolares = () => {
  return (
    <main className="w-full ">
        <section className="w-full h-[60vh] imagen6 flex justify-center items-center">
            <h2 className="text-[50px] text-white">Sistemas Solares</h2>
        </section>
        <section className="w-full">
            {
                sistemasSolaresImg.map(img=>{
                    return(
                        <>
                            <div className="flex">
                                <div className="w-[50%] h-[80vh] flex justify-center items-center">
                                    <img className="w-[80%] h-[80%] rounded-3xl shadow-xl shadow-gray-500 object-cover" src={img.img} alt="" />
                                </div>
                                <div className="w-[50%] h-[80vh] flex flex-col justify-center items-center p-5 gap-5">
                                    <h2 className="text-blue-400 text-3xl">{img.tipo}</h2>
                                    <p className="text-lg text-center">Lorem ipsum dolor sit amet consectetur adipisicing elit. Sed, veniam voluptatibus esse
                                    nihil laboriosam distinctio optio corporis eos nisi quas necessitatibus reprehenderit iure
                                    laborum quasi reiciendis eveniet, doloremque provident non!</p>
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
