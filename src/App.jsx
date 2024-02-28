import { GoArrowUpRight } from "react-icons/go";
import { Tech } from "./components/Tech";
import { Work } from "./components/Work";

import data from './data/data.json'

export function App() {
  const techs = [
    "Javascript",
    "React",
    "Tailwind",
    "Styled Components",
    "Node.js",
  ]

  const works = data.works

  return (
    <div className="mx-auto w-full h-screen overflow-y-scroll no-scrollbar relative scroll-smooth">
      <div id="home" />
      <nav className="flex max-w-6xl mx-auto justify-between p-8 bg-transparent sticky top-0">
        <a href="#home" className="font-bold text-xl text-slate-900 hover:text-slate-600">Ana P</a>
        <ul className="flex gap-8 font-medium text-slate-500">
          <li><a href="#projects" className="hover:text-slate-800">Projetos</a></li>
          <li><a href="#" target="_blank" className="flex justify-center items-center hover:text-slate-800">CV <GoArrowUpRight /></a></li>
        </ul>
      </nav>

      <main className="w-full flex flex-col gap-44">
        <section 
           
          className="w-full p-9"
        >
          <div className="max-w-[950px] mx-auto flex flex-col gap-12">
            <div className="mt-9 flex justify-between gap-32">
              <div className="flex flex-col gap-4">
                <span>Olá, eu sou</span>
                <h1 className="text-6xl font-medium max-w-100">
                  Ana Paula, <br />
                  desenvolvedora <br />
                  front-end
                </h1>

                <div>
                  <p className="flex gap-1"> 
                    Cursando Análise e Desenvolvimento de Sistemas na <a href="https://estacio.br/" target="_blank" className="flex items-center underline hover:text-slate-600">Estácio<GoArrowUpRight /></a>
                  </p>

                  <p className="flex gap-1"> 
                    Estudante da <a href="https://www.rocketseat.com.br/" target="_blank" className="flex items-center underline hover:text-slate-600">Rocketseat<GoArrowUpRight /></a>
                  </p>

                  <p className="flex gap-1"> 
                    Graduada em Design Gráfico na <a href="https://estacio.br/" target="_blank" className="flex items-center underline hover:text-slate-600">Estácio<GoArrowUpRight /></a>
                  </p>
                </div>
              </div>
              <img src="https://github.com/Nahblue.png" alt="" className="w-64 h-64 rounded-full" />
          
            </div>
          

            <div className="flex flex-col gap-6">
              <h2 className="text-3xl font-medium">Skills</h2>

              <div className="flex gap-3">
                { techs.map((tech) => {
                  return <Tech title={tech} key={tech} />
                })}
              </div>
            </div>
          </div>
        </section>

        <section 
          id="projects"
          className="w-full bg-slate-100 p-9"
        >
          <div className="max-w-[950px] mx-auto">
            <div className="grid grid-flow-col gap-12 justify-between mt-20 mb-20 ">
              <div className="w-64">
                <h2 className="text-3xl font-medium">Projetos</h2>
                <p>quote aleatória</p>
              </div>

              <div className="bg-transparent flex flex-col gap-11">
                {works.map((work) => {
                  return <Work data={work} key={work.name} />
                })}
                
              </div>

            </div>
          </div>
        </section>
      </main>

      <footer className="bg-slate-800 text-slate-100 p-6">
        <div className="flex max-w-6xl mx-auto justify-between text-sm">
          <div>
            <h3 className="text-lg font-bold">É um prazer ter você aqui!</h3>
            <p>Esse site é melhor visualizado em desktops.</p>
            <p>Tecnologias usadas: React.js, Tailwind CSS.</p>
            <p>Feito com amor ©2024</p>
          </div>

          <div className="flex gap-7">
            <a href="https://github.com/Nahblue" target="_blank" className="flex items-center underline hover:text-slate-300">Github<GoArrowUpRight /></a>
            <a href="https://www.linkedin.com/in/ana-paula-costa-039b1181/" target="_blank" className="flex items-center underline hover:text-slate-300">Linkedin<GoArrowUpRight /></a>
          </div>
        </div>
      </footer>
    </div>
  )
}

