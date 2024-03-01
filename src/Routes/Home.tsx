import { MinFooter } from "../componentes/MinFooter"

export const Home = () => {
  return (
    <main className="w-full">
        <section className="w-full h-screen imagen flex justify-center items-center flex-col gap-3">
            <h1 className="text-3xl max-w-[600px] text-center">Los Mejores Paneles De Los Llanos Orientales</h1>
            <a className="border-2 border-white rounded-[10px] px-5 py-2 bg-white hover:bg-slate-100 hover:border-slate-100" href="">Ver mas</a>
        </section>
        <section className="w-full bg-white flex flex-col justify-center items-center py-4">
            <h1 className="text-3xl my-10">Promociones Del Momento</h1>
            <article className="w-[80%] flex flex-wrap justify-center items-center gap-7">
                <div className="w-[300px] h-[350px] rounded-2xl overflow-hidden bg-slate-200  shadow-xl shadow-gray-300">
                    <div>
                        <img className="rounded-2xl" src="https://www.enelx.com/content/dam/local-argentina/01-img-slider/personas/paneles-fotovoltaicos-1440x768-ar.jpg" alt=""/>
                    </div>
                    <div className="w-full h-[200px] flex flex-col justify-center items-center gap-2">
                        <h2 className="text-2xl">Super Panel</h2>
                        <h3>$500.000</h3>
                        <a className="border-2 border-blue-200 rounded-[10px] px-7 py-2 bg-blue-200 hover:bg-blue-300 hover:border-blue-300" href="">Ver</a>
                    </div>
                </div>
                <div className="w-[300px] h-[350px] rounded-2xl overflow-hidden bg-slate-200  shadow-xl shadow-gray-300">
                    <div>
                        <img className="rounded-2xl" src="https://www.enelx.com/content/dam/local-argentina/01-img-slider/personas/paneles-fotovoltaicos-1440x768-ar.jpg" alt=""/>
                    </div>
                    <div className="w-full h-[200px] flex flex-col justify-center items-center gap-2">
                        <h2 className="text-2xl">Super Panel</h2>
                        <h3>$500.000</h3>
                        <a className="border-2 border-blue-200 rounded-[10px] px-7 py-2 bg-blue-200 hover:bg-blue-300 hover:border-blue-300" href="">Ver</a>
                    </div> 
                </div>
                <div className="w-[300px] h-[350px] rounded-2xl overflow-hidden bg-slate-200 shadow-xl shadow-gray-300">
                    <div>
                        <img className="rounded-2xl" src="https://www.enelx.com/content/dam/local-argentina/01-img-slider/personas/paneles-fotovoltaicos-1440x768-ar.jpg" alt=""/>
                    </div>
                    <div className="w-full h-[200px] flex flex-col justify-center items-center gap-2">
                        <h2 className="text-2xl">Super Panel</h2>
                        <h3>$500.000</h3>
                        <a className="border-2 border-blue-200 rounded-[10px] px-7 py-2 bg-blue-200 hover:bg-blue-300 hover:border-blue-300" href="">Ver</a>
                    </div>
                </div>
            </article>
        </section>
        <section className="w-full lg:h-screen flex my-[40px] flex-col-reverse lg:flex-row justify-center items-center gap-16 lg:gap-0">
            <div className="w-[50%] flex flex-col justify-center items-center px-8 gap-3">
                <h2 className="text-blue-500 text-3xl text-center">Quienes Somos</h2>
                <p className="text-base md:text-xl text-center">Lorem ipsum dolor sit amet consectetur adipisicing elit. Sit magni fugiat excepturi
                    possimus ipsum quos nesciunt, quisquam rem magnam quis blanditiis? Cum ab ipsam unde,
                    vero sequi vitae! Eum, quisquam.</p>
            </div>
            <div className="w-[50%] h-full flex justify-center items-center">
                <div className="w-56 h-56 md:w-[450px] md:h-[450px] rounded-full bg-blue-200 imagen2 shadow-gray-300 shadow-xl overflow-hidden">
                    <img className="w-full h-full rounded-full object-cover hover:scale-[1.1] duration-500" src="https://www.eltiempo.com/files/article_main_1200/uploads/2023/03/27/64220d5197a66.jpeg" alt=""/>
                </div>
            </div>
        </section>
        <MinFooter/>
    </main>
  )
}
