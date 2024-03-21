import { GoArrowUpRight } from "react-icons/go";
import { GoHeartFill } from "react-icons/go";

export function Footer() {
  return(
    <footer className="bg-slate-800 text-slate-100 p-6 md:py-6 md:px-9 lg:px-6">
      <div className="flex flex-col gap-6 md:flex-row md:gap-0 max-w-6xl mx-auto justify-between">
        <div>
          <h3 className="text-base font-medium md:text-lg md:font-bold">É um prazer ter você aqui!</h3>
          <p className="text-xs md:text-sm">Esse site é melhor visualizado em desktops.</p>
          <p className="text-xs md:text-sm">Tecnologias usadas: React.js, Javascript, Tailwind CSS, Vite, Framer Motion.</p>
          <p className="text-xs md:text-sm flex items-center gap-1">Feito com amor <GoHeartFill />.</p>
          <p className="text-xs md:text-sm flex items-center gap-1">© 2024</p>
        </div>

        <div className="flex gap-7">
          <a href="https://github.com/Nahblue" target="_blank" className="flex text-sm font-medium items-center hover:underline hover:text-slate-300 ">Github<GoArrowUpRight /></a>
          <a href="https://www.linkedin.com/in/ana-paula-costa-039b1181/" target="_blank" className="flex text-sm font-medium  items-center hover:underline hover:text-slate-300">Linkedin<GoArrowUpRight /></a>
        </div>
      </div>
    </footer>
  )
}