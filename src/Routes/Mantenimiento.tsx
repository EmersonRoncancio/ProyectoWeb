import { MinFooter } from "../componentes/MinFooter"

export const Mantenimiento = () => {
  return (
    <main className="w-full">
      <section className="w-full h-[60vh] imagen4 flex justify-center items-center">
        <h2 className="text-[50px] text-white">Mantenimiento</h2>
      </section>
      <section className="w-full h-[]">
        <article className="flex">
            <div className="w-[50%] h-[80vh] flex justify-center items-center">
              <img className="w-[80%] h-[80%] rounded-3xl shadow-xl shadow-gray-500 object-cover" src="https://assets-global.website-files.com/5ff3273633e29c2a7c8b6c80/60e2bc96d03c584784f200fa_blog_paneles-solares.jpg" alt="" />
            </div>
            <div className="w-[50%] h-[80vh] flex flex-col justify-center items-center p-5 gap-5">
              <h2 className="text-blue-400 text-3xl">Limpieza</h2>
              <p className="text-lg text-center">Lorem ipsum dolor sit amet consectetur adipisicing elit. Sed, veniam voluptatibus esse
                nihil laboriosam distinctio optio corporis eos nisi quas necessitatibus reprehenderit iure
                laborum quasi reiciendis eveniet, doloremque provident non!</p>
            </div>
          </article>
          <article className="flex">
            <div className="w-[50%] h-[80vh] flex justify-center items-center">
              <img className="w-[80%] h-[80%] rounded-3xl shadow-xl shadow-gray-500 object-cover" src="https://dam-assets.fluke.com/s3fs-public/F-393fc_43a_c.jpg" alt="" />
            </div>
            <div className="w-[50%] h-[80vh] flex flex-col justify-center items-center p-5 gap-5">
              <h2 className="text-blue-400 text-3xl">Inspección visual</h2>
              <p className="text-lg text-center">Lorem ipsum dolor sit amet consectetur adipisicing elit. Sed, veniam voluptatibus esse
                nihil laboriosam distinctio optio corporis eos nisi quas necessitatibus reprehenderit iure
                laborum quasi reiciendis eveniet, doloremque provident non!</p>
            </div>
          </article>
          <article className="flex">
            <div className="w-[50%] h-[80vh] flex justify-center items-center">
              <img className="w-[80%] h-[80%] rounded-3xl shadow-xl shadow-gray-500 object-cover" src="https://www.sunhero.com/static/5195bd219464b74dd6aa184788a440f1/63d44/61a8b7e910f301290c020072_25.%2520Thumbnail%2520-%2520Cuanto%2520tiempo%2520se%2520tarda%2520en%2520instalar%2520placas%2520solares%2520en%2520un%2520tejado-min-scaled.jpg" alt="" />
            </div>
            <div className="w-[50%] h-[80vh] flex flex-col justify-center items-center p-5 gap-5">
              <h2 className="text-blue-400 text-3xl">Monitorización del rendimiento</h2>
              <p className="text-lg text-center">Lorem ipsum dolor sit amet consectetur adipisicing elit. Sed, veniam voluptatibus esse
                nihil laboriosam distinctio optio corporis eos nisi quas necessitatibus reprehenderit iure
                laborum quasi reiciendis eveniet, doloremque provident non!</p>
            </div>
          </article>
          <article className="flex">
            <div className="w-[50%] h-[80vh] flex justify-center items-center">
              <img className="w-[80%] h-[80%] rounded-3xl shadow-xl shadow-gray-500 object-cover" src="https://tecscience.tec.mx/es/wp-content/uploads/sites/8/2021/03/Panel-solar.jpeg" alt="" />
            </div>
            <div className="w-[50%] h-[80vh] flex flex-col justify-center items-center p-5 gap-5">
              <h2 className="text-blue-400 text-3xl">Revisión de cables y conexiones</h2>
              <p className="text-lg text-center">Lorem ipsum dolor sit amet consectetur adipisicing elit. Sed, veniam voluptatibus esse
                nihil laboriosam distinctio optio corporis eos nisi quas necessitatibus reprehenderit iure
                laborum quasi reiciendis eveniet, doloremque provident non!</p>
            </div>
          </article>
          <article className="flex">
            <div className="w-[50%] h-[80vh] flex justify-center items-center">
              <img className="w-[80%] h-[80%] rounded-3xl shadow-xl shadow-gray-500 object-cover" src="https://cdn.forbes.com.mx/2023/06/paneles-solares.webp" alt="" />
            </div>
            <div className="w-[50%] h-[80vh] flex flex-col justify-center items-center p-5 gap-5">
              <h2 className="text-blue-400 text-3xl">Inspecciones profesionales</h2>
              <p className="text-lg text-center">Lorem ipsum dolor sit amet consectetur adipisicing elit. Sed, veniam voluptatibus esse
                nihil laboriosam distinctio optio corporis eos nisi quas necessitatibus reprehenderit iure
                laborum quasi reiciendis eveniet, doloremque provident non!</p>
            </div>
          </article>
          <article className="flex">
            <div className="w-[50%] h-[80vh] flex justify-center items-center">
              <img className="w-[80%] h-[80%] rounded-3xl shadow-xl shadow-gray-500 object-cover" src="https://dam-assets.fluke.com/s3fs-public/GettyImages-970436208-solar-1500x1000.jpg" alt="" />
            </div>
            <div className="w-[50%] h-[80vh] flex flex-col justify-center items-center p-5 gap-5">
              <h2 className="text-blue-400 text-3xl">Protección contra aves y animales</h2>
              <p className="text-lg text-center">Lorem ipsum dolor sit amet consectetur adipisicing elit. Sed, veniam voluptatibus esse
                nihil laboriosam distinctio optio corporis eos nisi quas necessitatibus reprehenderit iure
                laborum quasi reiciendis eveniet, doloremque provident non!</p>
            </div>
          </article>
      </section>
      <MinFooter/>
    </main>
  )
}
