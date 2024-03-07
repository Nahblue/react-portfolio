import { GoArrowUpRight } from "react-icons/go";
import { Tech } from "./components/Tech";
import { Work } from "./components/Work";

import { motion } from "framer-motion";


import data from './data/data.json';
import { Navigation } from "./components/Navigation";

export function App() {
  const techs = data.techs
  const works = data.works

  return (
    <div className="mx-auto w-full h-screen overflow-y-scroll no-scrollbar relative scroll-smooth">
      <div id="home" />
      <header 
        className="bg-slate-50 dark:bg-slate-950 sticky top-0 z-10"
      >
        <Navigation />
      </header>

      <main className="w-full flex flex-col gap-44">
        <section className="w-full p-6 md:py-9 md:px-16 lg:p-9">
          <motion.div 
            initial={{ opacity: 0,  y: "50%"}}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 1, ease: "easeIn" }}
            className="max-w-[950px] mx-auto flex flex-col gap-16 md:gap-12"
          >
            <div className="mt-9 flex justify-between gap-32">
              <div className="flex flex-col gap-6 md:gap-4">
                <span className="text-sm md:text-base">Olá, eu sou</span>
                <h1 className="text-3xl md:text-6xl font-medium max-w-100">
                  Ana Paula, <br />
                  desenvolvedora <br />
                  front-end
                </h1>

                <div className="flex flex-col gap-2 md:text-base md:gap-0">
                  <p className="md:flex md:flex-grow gap-1"> 
                    Cursando Análise e Desenvolvimento de Sistemas na 
                    <a 
                      href="https://estacio.br/" 
                      target="_blank" 
                      className="flex items-center underline hover:text-slate-600 dark:hover:text-slate-300"
                    >
                      Estácio<GoArrowUpRight />
                    </a>
                  </p>

                  <p className="flex md:flex-grow gap-1"> 
                    Estudante da 
                    <a 
                      href="https://www.rocketseat.com.br/" 
                      target="_blank" 
                      className="flex items-center underline hover:text-slate-600 dark:hover:text-slate-300"
                    >
                      Rocketseat<GoArrowUpRight />
                    </a>
                  </p>

                  <p className="md:flex md:flex-grow gap-1"> 
                    Graduada em Design Gráfico na 
                    <a 
                      href="https://estacio.br/" 
                      target="_blank" 
                      className="flex items-center underline hover:text-slate-600 dark:hover:text-slate-300"
                    >
                      Estácio<GoArrowUpRight />
                    </a>
                  </p>
                </div>
              </div>
              <img 
                src="https://github.com/Nahblue.png" 
                alt="Ana Paula image" 
                className="w-64 h-64 rounded-full hidden lg:block" 
              />
          
            </div>
          

            <div className="flex flex-col gap-6">
              <h2 className="text-2xl md:text-3xl font-medium">Skills</h2>

              <div className="flex flex-wrap gap-3">
                { techs.map((tech) => {
                  return <Tech title={tech} key={tech} />
                })}
              </div>
            </div>
          </motion.div>
        </section>

        <section 
          id="projects"
          className="w-full bg-slate-100 dark:bg-slate-900 py-9 px-6 md:px-16 lg:p-9"
        >
          <motion.div 
            className="max-w-[950px] mx-auto" 
            initial={{ opacity: 0, y: "10%" }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 1, ease: "easeIn" }}
          >
            <div className="flex flex-col lg:flex-row gap-12 lg:justify-between mt-20 mb-20">
              <div className="lg:relative">
                <div className="w-64 lg:sticky lg:top-32">
                  <h2 className="text-2xl md:text-3xl font-medium">Projetos</h2>
                  <p className="text-sm md:text-base">quote aleatória</p>
                </div>
              </div>

              <div className="bg-transparent flex flex-col gap-11">
                {works.map((work) => {
                  return <Work data={work} key={work.name} />
                })}
                
              </div>

            </div>
          </motion.div>
        </section>
      </main>

      <footer className="bg-slate-800 text-slate-100 p-6 md:py-6 md:px-9 lg:px-6">
        <div className="flex flex-col gap-6 md:flex-row md:gap-0 max-w-6xl mx-auto justify-between">
          <div>
            <h3 className="text-base font-medium md:text-lg md:font-bold">É um prazer ter você aqui!</h3>
            <p className="text-xs md:text-sm">Esse site é melhor visualizado em desktops.</p>
            <p className="text-xs md:text-sm">Tecnologias usadas: React.js, Tailwind CSS.</p>
            <p className="text-xs md:text-sm">Feito com amor ©2024</p>
          </div>

          <div className="flex gap-7">
            <a href="https://github.com/Nahblue" target="_blank" className="flex text-sm items-center underline hover:text-slate-300 ">Github<GoArrowUpRight /></a>
            <a href="https://www.linkedin.com/in/ana-paula-costa-039b1181/" target="_blank" className="flex text-sm items-center underline hover:text-slate-300">Linkedin<GoArrowUpRight /></a>
          </div>
        </div>
      </footer>
    </div>
  )
}

