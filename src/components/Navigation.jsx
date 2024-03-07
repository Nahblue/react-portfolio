import { GoArrowUpRight } from "react-icons/go";

export function Navigation() {
  return(
    <nav className="flex max-w-6xl mx-auto justify-between py-4 px-10 bg-transparent lg:px-4">
          <a href="#home" className="font-bold text-xl text-slate-900 hover:text-slate-600 dark:text-slate-100 dark:hover:text-slate-300">Ana P</a>
          <ul className="flex gap-8 font-medium text-slate-500 dark:text-slate-200">
            <li><a href="#projects" className="hover:text-slate-800 dark:hover:text-slate-300">Projetos</a></li>
            <li><a href="#" target="_blank" className="flex justify-center items-center hover:text-slate-800 dark:hover:text-slate-300">CV <GoArrowUpRight /></a></li>
          </ul>
    </nav>
  )
}