import { MinFooter } from "../componentes/MinFooter"
import { features } from "../helpers"

export const Seguridad = () => {
  return (
    <>
        <div className="bg-white py-24 sm:py-32">
        <div className="mx-auto max-w-7xl px-6 lg:px-8">
            <div className="mx-auto max-w-2xl lg:text-center">
            <h2 className="text-base font-semibold leading-7 text-blue-600">IT Ingenieria</h2>
            <p className="mt-2 text-3xl font-bold tracking-tight text-gray-900 sm:text-4xl">
                Seguridad
            </p>
            <p className="mt-6 text-lg leading-8 text-gray-600">
                En IT Ingenieria, la seguridad es nuestra máxima prioridad. Nos esforzamos por garantizar
                que nuestros clientes experimenten la máxima seguridad en todas las fases de sus sistemas
                solares, respaldados por un compromiso constante con la excelencia en seguridad.
            </p>
            </div>
            <div className="mx-auto mt-16 max-w-2xl sm:mt-20 lg:mt-24 lg:max-w-4xl">
            <dl className="grid max-w-xl grid-cols-1 gap-x-8 gap-y-10 lg:max-w-none lg:grid-cols-2 lg:gap-y-16">
                {features.map((feature) => (
                <div key={feature.nombre} className="relative pl-16">
                    <dt className="text-base font-semibold leading-7 text-gray-900">
                    <div className="absolute left-0 top-0 flex h-10 w-10 items-center justify-center rounded-lg bg-blue-600">
                        <feature.icon className="h-6 w-6 text-white" aria-hidden="true" />
                    </div>
                    {feature.nombre}
                    </dt>
                    <dd className="mt-2 text-base leading-7 text-gray-600">{feature.description}</dd>
                </div>
                ))}
            </dl>
            </div>
        </div>
        </div>
        <MinFooter/>
    </>
    
  )
}
