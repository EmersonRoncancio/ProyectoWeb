import { MinFooter } from "../componentes/MinFooter"

export const Empresa = () => {
  return (
    <main className="w-full">
      <section className="w-full h-[80vh] bg-slate-400 imagen3 flex justify-center items-center">
        <h2 className="text-white text-[50px]">Empresa</h2>
      </section>
      <section className="w-full flex flex-col justify-center items-center">
        <div className="w-full h-[80px] flex justify-center items-center">
          <h2 className="text-3xl">SOBRE NOSOTROS</h2>
        </div>
        <article className="flex">
          <div className="w-[50%] h-screen flex flex-col justify-center items-center p-5 gap-5">
            <h2 className="text-blue-400 text-3xl">Quienes somos</h2>
            <p className="text-lg text-center">Lorem ipsum dolor sit amet consectetur adipisicing elit. Sed, veniam voluptatibus esse
              nihil laboriosam distinctio optio corporis eos nisi quas necessitatibus reprehenderit iure
              laborum quasi reiciendis eveniet, doloremque provident non!sds</p>
          </div>
          <div className="w-[50%] h-screen flex justify-center items-center">
            <img className="w-[80%] h-[80%] rounded-3xl shadow-xl shadow-gray-500 object-cover" src="https://www.soyemprendedor.co/wp-content/uploads/2017/12/paneles-solares.jpg" alt="" />
          </div>
        </article>
        <article className="flex">
          <div className="w-[50%] h-screen flex justify-center items-center">
            <img className="w-[80%] h-[80%] rounded-3xl shadow-xl shadow-gray-500 object-cover" src="https://www.smartwallboxes.com/wp-content/uploads/2022/12/paneles-solares-en-tu-vivienda.jpg" alt="" />
          </div>
          <div className="w-[50%] h-screen flex flex-col justify-center items-center p-5 gap-5">
            <h2 className="text-blue-400 text-3xl">Que Hacemos</h2>
            <p className="text-lg text-center">Lorem ipsum dolor sit amet consectetur adipisicing elit. Sed, veniam voluptatibus esse
              nihil laboriosam distinctio optio corporis eos nisi quas necessitatibus reprehenderit iure
              laborum quasi reiciendis eveniet, doloremque provident non!</p>
          </div>
        </article>
      </section>
      <section className="w-full flex flex-col justify-center items-center">
        <div className="h-[60vh] flex flex-col justify-center items-center w-[70%] gap-3 border-b-2 border-b-blue-400">
          <h2 className="text-blue-400 text-3xl">Vision</h2>
          <p className="text-lg text-center">Lorem ipsum dolor sit amet consectetur adipisicing elit. Sed, veniam voluptatibus esse
            nihil laboriosam distinctio optio corporis eos nisi quas necessitatibus reprehenderit iure
            laborum quasi reiciendis eveniet, doloremque provident non!</p>
        </div>
        <div className="h-[60vh] flex flex-col justify-center items-center w-[70%] gap-3">
          <h2 className="text-blue-400 text-3xl">Mision</h2>
          <p className="text-lg text-center">Lorem ipsum dolor sit amet consectetur adipisicing elit. Sed, veniam voluptatibus esse
            nihil laboriosam distinctio optio corporis eos nisi quas necessitatibus reprehenderit iure
            laborum quasi reiciendis eveniet, doloremque provident non!</p>
        </div>
      </section>
      <MinFooter/>
    </main>
  )
}
