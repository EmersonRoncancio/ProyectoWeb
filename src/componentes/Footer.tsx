import logo from '../assets/LogoP.png'

export const Footer = () => {
  return (
    <footer className="w-full md:h-[300px] bg-slate-300 grid md:grid-cols-3 grid-cols-1 justify-center items-center items-content-center justify-item-center gap-5 md:gap-3 px-8 md:py-0 py-3">
        <img className="w-[300px] h-[100px]" src={logo} alt=""/>
        <p className="text-md">Lorem ipsum dolor sit amet consectetur, adipisicing elit. Unde laborum dicta velit quasi
             ullam soluta laudantium, eius quibusdam consequuntur voluptatibus similique a, ipsam
              cumque reiciendis deserunt, vel iusto architecto nobis!</p>
        <p className="text-md">Lorem ipsum dolor sit amet consectetur, adipisicing elit. Unde laborum dicta velit quasi
             ullam soluta laudantium, eius quibusdam consequuntur voluptatibus similique a, ipsam
              cumque reiciendis deserunt, vel iusto architecto nobissdsss!</p>
    </footer>
  )
}
